---
layout: post
title: "Relevant Search 讀書筆記（6）：Lucene Boolean 子句與片語匹配"
date: 2026-03-26 20:30:00 +0800
categories: [tech]
tags: [search, relevance, lucene, boolean-query, phrase-query, elasticsearch, solr]
description: "Chapter 2 重點：MUST/SHOULD/MUST_NOT 決定命中與排序，phrase query 用詞序強化語意準確度。"
lang: zh-TW
---

- Chapter 2 的 2.4.2 把 BooleanQuery 的子句語意完整展開，團隊因此可以直接校準命中條件與排序效果。
- 這段銜接到 2.4.3 的片語匹配概念，搜尋產品因此能同時管理召回範圍與語意精準度。
- Lucene 以 MUST 子句鎖定必要詞，查詢因此先建立穩定的結果集合。
- Lucene 以 SHOULD 子句提供排序加權，命中偏好詞較多的文件因此優先出現在前段結果。
- Lucene 以 MUST_NOT 子句排除禁配內容，結果清單因此維持可控的風險邊界。
- 查詢若沒有 MUST 子句就必須命中至少一個 SHOULD，系統因此在召回與相關性之間維持明確下限。
- Phrase query 會要求詞項相鄰並符合位置關係，查詢因此能區分「dress shoes」與分散詞共現。
- 團隊把高頻查詢拆成 MUST/SHOULD/MUST_NOT 三欄並每週回看前 20 筆結果，調整規則因此能快速落地且可量化。