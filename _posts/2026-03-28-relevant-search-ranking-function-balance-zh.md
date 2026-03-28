---
layout: post
title: "Relevant Search 讀書筆記（6）：排序函數與商業平衡"
date: 2026-03-28 20:30:00 +0800
categories: [tech]
tags: [search, relevance, ranking, lucene, elasticsearch, business-signal]
description: "Chapter 2 重點：把相關性拆成可計算訊號，並用權重與 boost 平衡使用者需求與商業目標。"
lang: zh-TW
---

- Chapter 2 的 2.4.5–2.5 直接把「相關性」落到 ranking function，團隊因此可以用可觀測的分數機制持續優化排序。
- 這段值得看，因為它把文字匹配、欄位權重與商業 boost 放進同一個計分框架，產品因此能把抽象討論轉成可執行調整。
- 搜尋引擎在沒有指定排序時會依相關性分數回傳結果，使用者因此先看到最可能有用的內容。
- 排名函數會同時讀取 query 訊號與文件訊號並產生最終分數，系統因此可以兼顧語意命中與業務目標。
- 團隊提高 title 欄位權重會放大標題命中的影響，精準主題文件因此更穩定出現在前段名次。
- 團隊加入 popularity boost 會提升高轉換內容的排序機率，結果頁因此更貼近商業收益需求。
- 團隊控制 boost 強度會限制商業訊號覆蓋文字相關性的幅度，系統因此維持「先相關、再商業」的排序邊界。
- 團隊每週回放 20 個核心查詢並拆解 top 10 分數來源，工程師因此能快速定位錯排訊號並迭代權重設定。