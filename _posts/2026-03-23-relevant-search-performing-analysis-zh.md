---
layout: post
title: "Relevant Search 讀書筆記（4）：Performing Analysis"
date: 2026-03-23 20:30:00 +0800
categories: [tech]
tags: [search, relevance, analysis, tokenization, elasticsearch, solr]
description: "Chapter 2 重點：用 analysis 鏈設計可匹配 token，讓搜尋結果穩定可控。"
lang: zh-TW
---

- 章節推進到 Chapter 2 的 2.3.3 Performing analysis，這段值得看，因為它把「可被找到」直接綁定到 token 設計。
- 這段把分析鏈拆成 character filter、tokenizer、token filter，團隊因此可以精準控制匹配行為。
- Relevance engineer 調整分析規則會改變 token 集合，搜尋系統因此改變可匹配文件範圍。
- 系統先做字元清理再做切詞會移除 HTML 與變體字元，索引因此保留一致文本訊號。
- 團隊採用 standard tokenizer 會切開標點與空白，查詢因此更容易命中自然語句。
- 團隊套用 lowercase、stop-word、possessive filters 會正規化詞形，使用者因此用一般拼寫也能命中文件。
- 團隊保留 term position 與 offset 會支援片語查詢與高亮，結果頁因此能呈現可解釋證據。
- 團隊擴充 payload metadata 會拉高儲存成本，索引容量因此形成明確邊界。
- 團隊建立「10 組高頻查詢的 query token vs document token 對照表」並在每次改 analyzer 後回歸比對，線上匹配品質因此可持續驗證。
