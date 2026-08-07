---
layout: post
title: "Relevant Search 讀書筆記（7）：第一個搜尋應用與可重現索引"
date: 2026-03-31 20:30:00 +0800
categories: [tech]
tags: [search, relevance, elasticsearch, python, debugging]
description: "Chapter 3 的 3.3–3.4.1 重點：用可重現索引與 baseline 查詢建立 relevance 除錯起手式。"
lang: zh-TW
---

- 章節推進到 Chapter 3 的 3.3–3.4.1，內容把教學環境、索引重建與第一個查詢串成完整起手式，這段因此適合拿來建立團隊共同基線。
- 這段值得看，因為它直接示範「先可重現索引、再驗證查詢輸出」的實作節奏，工程師因此能更快定位相關性偏差。
- 團隊使用 Python 與 requests 直接呼叫 Elasticsearch API，開發者因此能用最少依賴快速重現每個實驗。
- 團隊固定把 tmdb index 重建後再批次寫入文件，測試結果因此維持可比較與可回放。
- 團隊把 number_of_shards 設為 1 來穩定小資料集的 document frequency，排名波動因此明顯下降。
- multi_match 會同時查詢 title 與 overview 並給 title^10 權重，系統因此優先放大標題命中的影響。
- 這個起手查詢先作為 baseline 並不保證語意完整命中，團隊因此把它定位成除錯入口而不是最終解法。
- 團隊每次調整 query 或 analyzer 後都重跑同一組描述式查詢並記錄前 10 名差異，迭代決策因此可以直接落地。
