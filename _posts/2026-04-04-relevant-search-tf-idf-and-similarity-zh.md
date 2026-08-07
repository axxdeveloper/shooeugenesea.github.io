---
layout: post
title: "Relevant Search 讀書筆記（8）：用 TF×IDF 與 Similarity 解讀分數"
date: 2026-04-04 20:30:00 +0800
categories: [tech]
tags: [search, relevance, tf-idf, similarity, lucene, elasticsearch]
description: "Chapter 3 重點：把 explain 中的 fieldWeight 與 queryWeight 轉成可操作的調整依據，並理解 TF、IDF、fieldNorm 的邊界。"
lang: zh-TW
---

- Chapter 3 的 3.6.4–3.6.6 直接拆出 fieldWeight 與 queryWeight，團隊因此能把分數異常對應到具體統計量。
- 這段值得看，因為 Lucene 把 TF、IDF、fieldNorm 串成可計算公式，工程師因此可以預測調整後的排序方向。
- Lucene 會用 similarity 把 term statistics 轉成權重，系統因此能用一致規則評估每個詞在欄位中的重要性。
- TF 代表詞在欄位內的出現次數，文件在同欄位重複提到查詢詞時分數因此上升。
- IDF 代表詞在全體文件中的稀有度，稀有詞命中時排序因此更容易拉開差距。
- classic similarity 會對 TF 與 IDF 做遞減處理並乘上 fieldNorm，長欄位因此不會只靠字數優勢吃掉排序。
- 單一分數只在同一次查詢內可比較，跨查詢與跨欄位的 score 因此不適合直接拿來做絕對 KPI。
- 團隊可以先固定一組查詢樣本，再逐步調整欄位 boost 或 similarity 參數並重跑 explain，排序優化因此能穩定收斂。
