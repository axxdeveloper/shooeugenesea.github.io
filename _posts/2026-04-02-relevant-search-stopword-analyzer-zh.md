---
layout: post
title: "Relevant Search 讀書筆記（7）：用 Analyzer 消除噪音命中"
date: 2026-04-02 20:30:00 +0800
categories: [tech]
tags: [search, relevance, analyzer, stopwords, elasticsearch, lucene]
description: "Chapter 3 重點：把 parsed query 對照倒排索引，找出 stop word 誤召回，並用 english analyzer 重建索引修正 matching。"
lang: zh-TW
---

- Chapter 3 的 3.5.4–3.5.5 把 parsed query 與倒排索引逐條對照，團隊因此能直接定位噪音詞造成的誤命中。
- 這段值得看，因為它示範了「定位問題→改 analyzer→重建索引→驗證結果」的完整閉環，相關性調整因此可重複執行。
- 工程師比對 `title:with` 與 postings list 後確認 Fire with Fire 的命中來源，誤召回因此從直覺問題變成可驗證證據。
- 系統對 with 這類高頻詞採用機械式匹配，含有 with 的電影因此大量混入結果並稀釋主題相關性。
- 團隊把 `title` 與 `overview` 欄位切換到 `english` analyzer，索引內容因此移除 stop words 並統一到詞幹形式。
- 團隊重建索引後用 `_analyze` 檢查 token stream，with 因此被移除且 token position gap 被保留來避免錯誤片語匹配。
- 這次調整的邊界是 matching 改善大於 ranking 改善，最終名次仍由 scoring 公式主導。
- 團隊每次調整 analyzer 後都固定重跑同一組查詢樣本並記錄 top N 變化，迭代效果因此能被持續量化。