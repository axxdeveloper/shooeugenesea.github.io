---
layout: post
title: "Relevant Search 讀書筆記（4）：Performing Analysis"
date: 2026-03-23 20:30:00 +0800
categories: [tech]
tags: [search, relevance, analysis, tokenization, elasticsearch, solr]
description: "Chapter 2 重點：用 analysis 鏈設計可匹配 token，讓搜尋結果穩定可控。"
lang: zh-TW
---

- Chapter 2 的 2.3.3 把「可被找到性」直接綁到 token 設計。
- 分析鏈由 character filter、tokenizer、token filter 組成，匹配行為可用規則精準控制。
- 分析規則一改，token 集合就會改，文件可匹配範圍會跟著變動。
- 字元清理先移除 HTML 與變體字元，索引文本訊號一致性會提高。
- standard tokenizer 會切開標點與空白，自然語句查詢命中率通常更穩。
- lowercase、stop-word、possessive filters 會正規化詞形，常見拼寫差異可被吸收。
- term position 與 offset 會支援片語查詢與高亮，結果頁可直接回溯命中證據。
- payload metadata 增加會推高儲存成本，索引容量邊界要先定義。
- 「10 組高頻查詢的 query token vs document token 對照表」可做固定回歸基線，每次改 analyzer 後直接比對匹配品質。
