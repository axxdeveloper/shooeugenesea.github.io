---
layout: post
title: "Kafka Share Consumer 上線筆記：把工作佇列語意放進 Kafka"
date: 2026-03-21 17:55:00 +0800
categories: [tech]
tags: [kafka, backend, messaging, architecture]
description: "整理 Kafka Share Consumer 的實作重點：何時該用、參數怎麼調、哪幾個地雷最常讓重試與延遲失控。"
lang: zh-TW
---

Kafka 的經典 consumer group 很適合「分割明確、每個 partition 單線處理」的場景。
批次工作系統常常不是這種形狀：你要的是更多 worker 同時拉工作、單筆確認、失敗可重送。

這就是 Share Consumer 想解的問題。

KIP-932 的核心改動是把「工作分配單位」從 partition 進一步下沉到 record。消費者可以協作拉同一批 topic 資料，並對單筆訊息做 acknowledge / release / reject。[KIP-932](https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka)

## 併發上限不再被 partition 數量卡死

傳統 consumer group 的併發上限通常貼著 partition 數量。
Share group 允許同一個 topic-partition 被多個消費者協作處理，worker 數量可以超過 partition 數量。[KIP-932](https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka)

這個特性對三種工作很有感：

- 大量短任務（例如通知投遞）
- 任務時間分布很散（同批資料處理時間落差大）
- 需要單筆重試控制而不是整批 offset 回滾

## 三個機制會直接決定你跑得穩不穩

第一個是 **acquisition lock**。
record 被某個 consumer 拿到後會先上鎖，預設 lock duration 在 KIP-932 描述為 30 秒，可透過 `group.share.record.lock.duration.ms` 調整。[KIP-932](https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka)

第二個是 **每筆 ack / release / reject**。
你可以成功確認、釋放給下一個 worker、或標記不可處理。這三個動作決定重試路徑是否可控。[KIP-932](https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka)

第三個是 **partition lock 上限**。
broker 用 `group.share.partition.max.record.locks` 控制每個 partition 可同時被鎖住的 record 數量。這是你的背壓閥門，太小會塞車，太大會放大超時與重試風暴。[KIP-932](https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka)

## 參數先用這組起手，再依延遲分佈微調

我會先做這個 baseline：

- `group.share.record.lock.duration.ms`：抓在 p95 任務時間的 1.2–1.5 倍
- `group.share.partition.max.record.locks`：先從單 worker 峰值 in-flight 的 2–3 倍起跳
- 每個 worker 加 idempotency key（資料庫唯一鍵或去重表）

這樣可以先把兩件事穩住：

- 正常任務不會因 lock 太短被重複派送
- 慢任務不會把整個 partition 的可用配額吃滿

## 上線前一定要先跑的故障演練

至少做四個情境：

- worker 在拿到 record 後 crash
- 下游 API 連續 5xx，任務反覆 release
- 單一 poison message 一直失敗
- 突增流量把 in-flight 推到上限

觀察指標我會盯這幾個：

- lock timeout 次數
- release 次數與重送延遲
- reject 比例
- 同一 business key 的重複處理率

如果你看到 release 快速上升、同時處理延遲拉長，通常是 lock duration 與實際任務時間錯配。

## 你可以先這樣判斷要不要用 Share Consumer

- 任務彼此獨立、可平行、可重試：適合
- 任務要嚴格保序且跨筆有交易依賴：先保留傳統 partition 模式
- 你需要「單筆確認 + 失敗重派 + 可控背壓」：Share Consumer 會比硬湊 consumer group 省很多工

最後提醒一點：Share Consumer 的設計已在 KIP-932 定義清楚，但你實際可用功能仍要對齊你部署的 Kafka 版本與文件；`group.protocol` 等設定也要看對應版本支援狀態再開。[KIP-932](https://cwiki.apache.org/confluence/display/KAFKA/KIP-932%3A+Queues+for+Kafka)、[Kafka consumer config](https://kafka.apache.org/40/generated/consumer_config.html)
