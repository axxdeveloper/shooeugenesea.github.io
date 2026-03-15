---
layout: post
title: "台幣還在弱，但那不是同一個故事：修正 3/2 的亞洲風險溢價框架"
date: 2026-03-15 12:40:00 +0800
categories: [macro]
tags: [macro, correction, taiwan, energy, bonds]
macro_kind: correction
description: "3 月 13 日 USD/TWD 收 32.0402、10 年債升至 4.27%，但金價較 3 月 2 日收盤回落 5.68%。原本把台幣弱勢視為亞洲風險溢價重定錨的框架，需要修正為『油價與美債共振、台灣資產承受輸入型折現率壓力』。"
lang: zh-TW
---

<div style="padding: 0.75em 1em; margin-bottom: 1.5em; background: rgba(234,179,8,0.15); border-left: 4px solid rgba(234,179,8,0.6); border-radius: 4px; font-size: 0.95em;">
⚠️ 本文為修正文，更新先前 <a href="/2026/03/02/twd-risk-premium-framework-zh.html">台幣轉弱與黃金飆升：這是一日情緒，還是亞洲風險溢價重新定錨？</a> 的判斷框架。
</div>

## 3 月 2 日那篇把台幣轉弱與黃金飆升視為亞洲風險溢價重定錨，現在哪個假設需要重估？

3 月 2 日原文把台幣轉弱、黃金走高與台股回檔放在同一張圖裡，推論亞洲資產可能進入「風險溢價重新定錨」的早期階段。到了 3 月 13 日，`USD/TWD` 收在 **32.0402**、台股加權指數收在 **33,400.32**，弱勢並沒有結束；但同一期間現貨金由 3 月 2 日收盤 **5322.165** 回落到 **5019.83**，而美國 10 年期公債殖利率則升到 **4.27%**。[Stooq USD/TWD](https://stooq.com/q/d/l/?s=usdtwd&i=d)、[Stooq TAIEX](https://stooq.com/q/d/l/?s=%5Etwse&i=d)、[Stooq XAU/USD](https://stooq.com/q/d/l/?s=xauusd&i=d)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)

真正要重估的，不是「台幣有沒有繼續弱」，而是：**這段弱勢到底還是不是亞洲風險溢價主導？**

## 當初的判斷

原文的核心假設是，只要匯率、黃金、長端利率三條線在一週內同方向維持，就能把它看成「地緣事件開始改寫亞洲資產定價」。這個判讀對 3 月 2 日當下是合理的，因為台幣、黃金與台股確實同日出現異常波動。

但後續數據顯示，三條線沒有沿著同一個故事走。BLS 3 月 6 日公布的 2 月就業報告顯示，失業率升到 **4.4%**、非農減少 **92k**，但長期失業仍有 **190 萬人**；3 月 11 日 CPI 年增率是 **2.4%**、核心 CPI **2.5%**；3 月 13 日 BEA 公布的 1 月核心 PCE 年增卻仍在 **3.1%**。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)、[BLS CPI](https://www.bls.gov/news.release/cpi.nr0.htm)、[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026) 也就是說，市場後來更像在交易「成長放慢，但 Fed 仍被通膨黏著與油價風險綁住」。

## 哪個假設失效

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 黃金（XAU/USD） | 原文期待 `>=5300` 連 3 個交易日；3/13 收盤跌到 5019.83 | 2026-03-03 至 2026-03-13 | 黃金沒有接棒成為持續避險主軸，代表「亞洲風險溢價」不是後續唯一解釋 |
| 美國 10Y 殖利率 | `>4.10%` 連 2 個交易日已在 3/5-3/6、3/11-3/12 兩度成立 | 2026-03-05 至 2026-03-12 | 後續市場主軸轉向全球折現率上修 |
| USD/TWD | `>=31.50` 連 3 日已多次成立，3/13 收 32.0402 | 2026-03-03 至 2026-03-13 | 台幣弱勢是真的，但它更像結果，不再足以單獨證明亞洲專屬風險重定價 |

## 新的結構

比較好的修正版框架是：**3 月上旬台灣資產承受的，是油價與美債殖利率共振下的輸入型折現率壓力，地緣事件是觸發器，但不是唯一傳導路徑。** Brent 自 3 月 2 日的 **77.24** 升到 3 月 9 日的 **94.35**；同時 2 年期與 10 年期美債分別較 3 月 2 日上升 **29 bps** 與 **22 bps**，而 S&P 500 同期下跌 **3.62%**。[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED SP500](https://fred.stlouisfed.org/series/SP500) 這更像「全球折現率與成本中樞上移」，而不是「亞洲單點風險資產被拋售」。

新的再評估門檻如下：

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 美國 10Y + Brent | 10Y 回到 `4.10%` 以下且 Brent 回到 `85` 以下，連 3 個交易日 | 即日起至 2026-03-18 FOMC | 可下修本次「輸入型折現率壓力」框架，回到事件型波動解讀 |
| USD/TWD + 黃金 | USD/TWD 回落至 `31.70` 以下連 3 日，且黃金重新站上 `5300` 連 3 日 | 未來 2 週 | 才能重新提高「避險驅動的亞洲風險溢價」權重 |
| HY OAS | 升破 `3.50` 且連 4 週 | 每週檢查；下一個主要觀察點為 2026-03-18 FOMC 後 | 若信用利差也擴散，題目需再由折現率壓力升級為金融條件收緊 |

## 可泛化的教訓

這次修正提醒我：**遇到「匯率弱 + 金價高 + 股市跌」時，不能只用一天的同步波動就把故事定義成區域風險重定價。** 更有效的做法，是用同一條價格序列追一週後誰還在延續。若最後留下來的是油價與美債殖利率，而不是黃金，那麼真正的主軸通常不是地緣恐慌本身，而是成本與折現率一起上修。

> **核心判斷：** 3 月上旬台灣資產承受的已不只是亞洲風險溢價，而是油價衝擊與美債殖利率上行共同推動的全球折現率重估。

---

*資料來源：[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)、[BLS CPI](https://www.bls.gov/news.release/cpi.nr0.htm)、[BEA Personal Income and Outlays](https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED SP500](https://fred.stlouisfed.org/series/SP500)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[Stooq USD/TWD](https://stooq.com/q/d/l/?s=usdtwd&i=d)、[Stooq XAU/USD](https://stooq.com/q/d/l/?s=xauusd&i=d)、[Stooq TAIEX](https://stooq.com/q/d/l/?s=%5Etwse&i=d)、[TWSE MIS 0050](https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_0050.tw&json=1&delay=0)*
*市場數據截至：2026-03-13（台灣市場） / 2026-03-12（部分美國利率與波動率序列）*
*本文僅供參考，不構成投資建議。*
