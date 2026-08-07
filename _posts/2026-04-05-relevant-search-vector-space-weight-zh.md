---
layout: post
title: "Relevant Search 讀書筆記（8）：把 Explain 轉成向量權重來看"
date: 2026-04-05 20:30:00 +0800
categories: [tech]
tags: [search, relevance, ranking, explain, vector-space, lucene]
description: "Chapter 3 重點：團隊把 explain 明細映射到向量空間與權重概念，讓排序調整有可計算的依據。"
lang: zh-TW
---

- Chapter 3 的 3.6.2–3.6.4 把 explain 明細連到向量空間模型，團隊因此能把抽象分數轉成可推導的匹配強度。
- 這段值得看，因為它把 compound query 的 max、sum、product 與 term weight 串成同一套語言，跨職能討論因此更快收斂。
- 搜尋系統會把文件與查詢都表示成高維稀疏向量，分數計算因此可以直接對應到特徵相似度。
- 團隊用 dot product 理解每個詞項對總分的貢獻，排序偏差因此能回推到具體詞與欄位。
- Lucene 會把 queryWeight 與 fieldWeight 相乘形成單詞匹配分數，工程師因此能分開檢查查詢端與文件端的權重來源。
- 多層 explain 會隨複合查詢快速膨脹，除錯範圍因此要限制在少量關鍵查詢與前幾名錯排文件。
- 團隊固定抽樣 top 錯排案例並逐層比對 explain 樹，下一輪權重調整因此可以一次驗證是否生效。
- 分數值會受查詢條件與索引統計共同影響，跨查詢直接比較 score 的可解釋性因此存在邊界。
