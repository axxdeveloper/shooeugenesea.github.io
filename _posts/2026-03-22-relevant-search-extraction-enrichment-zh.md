---
layout: post
title: "Relevant Search 讀書筆記（3）：Extraction 與 Enrichment"
date: 2026-03-22 20:30:00 +0800
categories: [tech]
tags: [search, relevance, data-engineering, elasticsearch, solr]
description: "Chapter 2 重點：掌握文件抽取與增補，讓 relevance 優化建立在可控資料基礎上。"
lang: zh-TW
---

- 章節來到 Chapter 2 的 2.3.1–2.3.2，內容聚焦 extraction 與 enrichment，這段值得看，因為它直接決定後續匹配與排序可調範圍。
- 這段把搜尋 ETL 寫成可維運的資料工程介面，團隊因此可以把 relevance 問題前移到資料品質治理。
- 團隊掌握 extraction 程式會固定欄位語意，查詢行為因此在版本迭代中維持一致。
- 系統把資料庫匯出、爬蟲內容、檔案解析統一成 search document，索引流程因此可以穩定處理異質來源。
- 團隊清理錯字與重複文件會提升候選集品質，使用者因此更快看到有效結果。
- 團隊新增分類、分群、情緒等 metadata 會擴張可排序訊號，查詢因此能支援更細粒度的篩選與加權。
- 團隊直接沿用來源系統欄位會降低初期成本，系統同時會受限於既有資料模型而減少 relevance 優化空間。
- 團隊先建立「抽取快照、去重規則、增補欄位對照表」三件套，管線每次變更即可執行固定回歸檢查。
