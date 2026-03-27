---
layout: post
title: "Relevant Search 讀書筆記（6）：Phrase Matching 與 Filter/Facet/Aggregation"
date: 2026-03-27 20:30:00 +0800
categories: [tech]
tags: [search, relevance, phrase-query, filtering, facets, aggregations, lucene, elasticsearch]
description: "Chapter 2 重點：詞序命中提升語意精準，filter/facet/aggregation 提升探索與決策效率。"
lang: zh-TW
---

- Chapter 2 的 2.4.3–2.4.4 直接連起「詞序精準命中」與「結果集合探索」，搜尋產品因此同時提升查準率與可用性。
- 這段把 phrase query、filter、facet、aggregation 排成同一條實作路線，團隊因此能把語意需求快速映射到介面與分析能力。
- Phrase query 先完成多詞命中再檢查相鄰位置，結果因此優先保留語意完整的文件。
- 搜尋引擎記錄 term positions 會支援片語查詢，系統因此能區分片語語意與散落詞命中。
- 團隊調整 phrase slop 會控制詞距容忍度，查詢因此能在口語與變形表達下維持可用召回。
- 產品把 filter 套在低基數欄位與數值區間，使用者因此能快速收斂到可決策的候選集。
- Facet 回傳屬性分布與對應數量，介面因此能即時提供可點選的縮限方向。
- Aggregation 在結果集合上做分組與統計，分析流程因此可直接輸出 count、sum、min、max 等指標。
- 團隊只保留必要的 positions 與分析資料，索引因此控制儲存成本並維持片語與探索功能邊界。
- 團隊每週追蹤「片語命中率、facet 點擊率、aggregation 延遲」，調校因此具備可驗證的迭代節奏。