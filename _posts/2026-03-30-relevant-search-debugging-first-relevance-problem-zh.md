---
layout: post
title: "Relevant Search 讀書筆記（6）：Debugging Your First Relevance Problem"
date: 2026-03-30 20:30:00 +0800
categories: [tech]
tags: [search, relevance, debugging, elasticsearch, solr, tmdb]
description: "Chapter 3 開場重點：用 matching/ranking 分層除錯，建立第一套可重複的相關性診斷流程。"
lang: zh-TW
---

- Chapter 3 開場與 3.1–3.2 把焦點放在真實故障排查，團隊因此能把相關性問題轉成可操作的工程任務。
- 這段先建立資料集、引擎與除錯工具帶的共同語境，跨職能成員因此能對同一個問題使用一致的檢查框架。
- 團隊把相關性問題拆成 matching 與 ranking 兩層檢查，定位速度因此明顯提升。
- 團隊在示例中採用 Elasticsearch 並同步標註可遷移到 Solr，方法論因此可以跨引擎複用。
- 作者把討論範圍鎖定在 relevance 功能並排除效能與擴展議題，讀者因此在初學階段維持清楚邊界。
- 團隊採用 tmdb.json 固定快照作為共同資料集，測試結果因此具備可重現性與可比較性。
- 團隊把使用者抱怨轉成「為何沒命中」「為何排前面」兩個檢查題，除錯會議因此快速聚焦。
- 團隊每次調整查詢或欄位設定後重跑同一組基準查詢並記錄命中與排序差異，改動效果因此可驗證且可回溯。
