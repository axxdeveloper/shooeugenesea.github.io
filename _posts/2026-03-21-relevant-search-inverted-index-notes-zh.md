---
layout: post
title: "Relevant Search 筆記：Inverted Index 怎麼把查詢變成可解釋結果"
date: 2026-03-21 20:40:00 +0800
categories: [tech]
tags: [search, relevance, lucene, inverted-index]
description: "這篇整理 term dictionary、postings、term statistics 與 term positions，說明搜尋結果如何被資料結構直接決定。"
lang: zh-TW
---

- 章節進入 Chapter 2 的 inverted index，小節把搜尋速度與可解釋性綁在同一組索引資料結構，工程團隊因此能用共同語言排查 relevance 問題。
- 本段把 term dictionary、postings、term statistics 的關係寫成可追蹤路徑，讀者因此可以從查詢結果回推索引設定。
- 搜尋引擎用 term dictionary 把詞彙映射到排序好的識別碼，查詢器因此可以快速定位詞項。
- 搜尋引擎用 postings list 保存詞項對應文件集合，匹配階段因此能在大量文件中縮小候選範圍。
- 排序模組使用 doc frequency 與 term frequency 計算權重，結果頁因此能提升主題集中且辨識度高的文件。
- 索引保存 term positions 支援片語匹配，使用者因此可以得到語意更貼近的查詢結果。
- 團隊開啟更多索引元件會提高索引體積與寫入成本，系統因此需要用產品情境設定功能邊界。
- 團隊建立固定查詢清單並對照 postings 與詞頻統計，調整 analysis 後即可用同一批案例快速驗證改善幅度。
