---
layout: post
title: "Relevant Search 讀書筆記（5）：Indexing 與 Boolean Search"
date: 2026-03-25 20:30:00 +0800
categories: [tech]
tags: [search, relevance, indexing, boolean-search, lucene, elasticsearch, solr]
description: "Chapter 2 重點：索引與儲存決策決定可搜與可解釋，Boolean search 決定多詞命中邏輯。"
lang: zh-TW
---

- Chapter 2 的 2.3.4–2.4.1 直接連起「文件何時可搜」和「多詞如何命中」，搜尋品質因此可以用結構化方式調校。
- 這段把索引與儲存拆成兩個獨立決策，團隊因此能同時控制查詢能力與結果可讀性。
- 搜尋引擎索引欄位會建立可匹配 token，欄位因此具備被查詢能力。
- 搜尋引擎儲存原始欄位會支援結果回填與高亮，使用者因此可以直接理解命中原因。
- 團隊採用最小儲存策略會降低索引負載，系統因此形成依賴外部內容服務的邊界。
- 搜尋引擎採用 batch commit 會產生可預期的可搜延遲，新文件因此在 commit 後才會出現在結果中。
- 布林 AND 會對兩個 postings list 取交集，多詞查詢因此能穩定收斂到共同命中文件。
- 團隊固定維護「10 個高頻多詞查詢」並逐條核對 postings 交集，每次調整 analyzer 或 commit 設定後都能快速驗證效果。