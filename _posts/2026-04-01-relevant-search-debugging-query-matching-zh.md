---
layout: post
title: "Relevant Search 讀書筆記（8）：Query Matching 除錯路徑"
date: 2026-04-01 20:30:00 +0800
categories: [tech]
tags: [search, relevance, elasticsearch, lucene, debugging]
description: "Chapter 3 的 3.5.1–3.5.3 重點：用 query parsing 與 analyzer 證據快速定位匹配異常。"
lang: zh-TW
---

- 章節推進到 Chapter 3 的 3.5.1–3.5.3，內容把 query parsing 與 analysis debug 串成可操作路徑，這段因此適合當成 relevance 故障排查手冊。
- 這段值得看，因為它把「為什麼命中」拆成可驗證證據，團隊因此能在壓力下快速縮小問題範圍。
- 團隊使用 query validation endpoint 檢查 multi_match 的實際布林子句，匹配行為因此從黑盒變成可讀規則。
- 工程師逐條對照 Lucene 子句中的 field:term，異常命中文件因此可以直接追到來源詞項。
- 團隊用 _analyze 檢查 title 文字的 token stream，分詞、lowercase、position 與 offset 因此都能被逐項驗證。
- 系統會把 with 這類高頻詞放進倒排索引並參與召回，結果集合因此會混入語意價值較低的文件。
- 這套基線除錯聚焦於 matching 層並不直接修正 ranking 品質，團隊因此需要在下一步再調整停用詞、查詢權重與排序函數。
- 團隊固定執行「查 parsed query → 查 analyzer 輸出 → 對 postings 驗證命中」三步檢查，排錯時間因此能明顯縮短。
