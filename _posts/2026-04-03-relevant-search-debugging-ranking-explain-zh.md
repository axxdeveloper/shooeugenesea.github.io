---
layout: post
title: "Relevant Search 讀書筆記（7）：用 Explain 拆解排序分數"
date: 2026-04-03 20:30:00 +0800
categories: [tech]
tags: [search, relevance, ranking, explain, elasticsearch, lucene]
description: "Chapter 3 重點：團隊用 explain 拆解 ranking score，快速定位錯排來源並建立可重複的調整流程。"
lang: zh-TW
---

- Chapter 3 的 3.6–3.6.1 直接把除錯焦點移到 ranking，團隊因此能從「有命中」前進到「排得對」。
- 這段值得看，因為 explain 會把相關性分數拆成可閱讀算式，產品與工程因此能用同一套證據討論排序品質。
- 團隊完成 english analyzer 後先改善召回集合，Space Jam 仍落在第 11 名，排名模型因此需要進一步調整。
- 搜尋引擎用 score 數值排序結果，分數越高代表越相關，結果頁因此優先呈現高分文件。
- explain 逐層展開 max、sum、product 的分數來源，工程師因此能看見 title 與 overview 各自的實際貢獻。
- multi_match 會把 title^10 與 overview 組成複合查詢，系統因此同時計算欄位加權與欄位間取最大值。
- explain JSON 會快速膨脹成多層節點，人工排查範圍因此需要限制在前幾個錯排文件。
- 團隊每次調整權重都重跑 explain:true 與 top 結果比對，排序迭代因此保持可回溯與可驗證。