---
layout: post
title: "2.25% 留在原地，2.58% / 3.0% 還排在前面：紐儲行把按兵不動寫成中性利率重定價"
date: 2026-04-10 12:20:00 +0800
categories: [macro]
tags: [macro, inflation, energy, bonds, asia]
macro_kind: short
description: "紐儲行 4 月 8 日把官方現金利率留在 2.25%，同時把 2026 年 6 月 CPI 預估拉到 4.2%，又保留「若近端通膨屬暫時現象，OCR 會逐步走向中性利率」的文字。2.58% 的一年期 OCR 預期與 3.0% 的長期中性利率，說明這次按兵不動已把政策終點往上推。"
lang: zh-TW
---

## 2.25% 沒動，4.2% 已經先抬起來

紐西蘭儲備銀行 4 月 8 日把官方現金利率 (OCR) 留在 **2.25%**，同時把 2026 年 6 月季度的消費者物價指數 (CPI) 預估拉到 **4.2%**。[RBNZ 4 月 8 日決策](https://www.rbnz.govt.nz/news-and-events/news/2026/04/ocr-on-hold-at-2-25)

**OCR 停在 `2.25%` 時，紐儲行是在等油價自己回落，還是已把終點改寫回中性利率？**

這個框架把今天的決策拆成近端通膨、中期預期與政策終點三層。讀者只要盯住 **2026-04-21** 的通膨更新、**2026-05-13** 的 Survey of Expectations、以及 **2026-05-27** 的下一份 Monetary Policy Statement，就能分辨這次按兵不動留在短期穿透，還是走向更早的升息重定價。[RBNZ Monetary policy](https://www.rbnz.govt.nz/monetary-policy)、[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations)

## 2.58% 與 3.0% 把今天的按兵不動變成終點題

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 近端通膨先抬頭，委員會先把油價 shock 寫進 CPI 路徑 | `2026Q1` inflation forecast `3.0%`、`2026Q2` `4.2%` | 很高 |
| 政策終點先上修，OCR 現值暫留原位 | 一年後 OCR 預期 `2.58%`，2 月 MPS 的長期中性利率約 `3.0%` | 很高 |
| 需求疲弱仍在，二輪效應尚未自動成立 | `2025Q4` GDP `0.2%`、失業率 `5.4%`、非貿易財通膨 `3.5%` | 高 |

4 月 8 日的官方記錄把路徑寫得很清楚。委員會一邊把 `2026Q1` inflation forecast 寫成 **3.0%**、把 `2026Q2` 拉到 **4.2%**，一邊保留兩條反應函數：近端通膨若屬暫時現象，OCR 會隨活動回溫逐步走向更中性的水位；二輪效應與中期通膨預期若上升，OCR 就要及時上調。[RBNZ 4 月 8 日決策](https://www.rbnz.govt.nz/news-and-events/news/2026/04/ocr-on-hold-at-2-25) 這段文字把今天的決策由 `2.25%` 的靜態現值推進到 `終點在哪裡`。

Survey of Expectations 把這個政策終點再量化一層。一年通膨預期由 **2.39%** 升到 **2.59%**，兩年通膨預期由 **2.28%** 升到 **2.37%**；同一份 survey 把一年後 OCR 預期由 **2.31%** 升到 **2.58%**。[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/-/media/project/sites/rbnz/files/statistics/series/m/m14/insights/2026/survey-of-expectations-february-2026.pdf) 2 月 Monetary Policy Statement 又把長期中性 OCR 放在接近 **3.0%** 的區間。[RBNZ February MPS](https://www.rbnz.govt.nz/monetary-policy/monetary-policy-statement/monetary-policy-statement-filtered-listing-page/2026/feb-182/monetary-policy-statement-february-2026/web-version) `2.58 - 2.25 = 0.33` 個百分點，`3.00 - 2.25 = 0.75` 個百分點。這兩個差值比今天有沒有升息更重要。

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260410RbnzNeutralRepricing"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260410RbnzNeutralRepricing'), {
  type: 'bar',
  data: {
    labels: ['OCR 現值', '1Y OCR 預期', '1Y 通膨預期', '2Y 通膨預期', '長期中性 OCR'],
    datasets: [{
      label: '百分比 (%)',
      data: [2.25, 2.58, 2.59, 2.37, 3.00],
      backgroundColor: [
        'rgba(8, 145, 178, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(220, 38, 38, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(37, 99, 235, 0.78)'
      ],
      borderColor: [
        'rgba(8, 145, 178, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(37, 99, 235, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '今天沒升息，終點仍往上（資料來源：RBNZ）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

這個判斷沒有脫離全球脈絡。IMF 把約 **25% 到 30%** 的全球石油與 **20%** 的液化天然氣 (LNG) 通過 Hormuz 寫成主要傳導路徑，也把結果寫成價格更高、成長更慢。[IMF](https://www.imf.org/en/blogs/articles/2026/03/30/how-the-war-in-the-middle-east-is-affecting-energy-trade-and-finance) ECB 3 月 19 日也把供應中斷延長情境定義成通膨高於基準、成長低於基準。[ECB](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260319~93b1cbad97.en.html) 小型能源進口國現在都在處理同一條題目：輸入性通膨先抬頭，成長同時轉弱，政策終點因此先被往上推。

反方同樣完整，而且名字明確。NZIER Shadow Board 的 **Jarrod Kerr** 把升息討論定義為過早，理由是供給面衝擊需要更多時間觀察，需求破壞已經先出現，批發利率已經把通膨風險定價得太高；同一份 Shadow Board 裡的 **Kelly Eckhold** 又把實質利率可能偏低與通膨黏著風險擺上檯面。[NZIER Shadow Board](https://www.nzier.org.nz/publications/shadow-board-is-overwhelmingly-in-favour-of-keeping-the-ocr-at-2.25-percent-in-april) 這組反方讓今天的結論維持平衡。市場可以先把終點抬高，真正把升息移到更前面，仍需要預期與非貿易財通膨一起往上。

## 4 月 21 日與 5 月 27 日會把這次按兵不動讀成暫停，還是讀成上修終點

如果 **2026-04-21** 的通膨更新把總體 CPI 拉回 **3.0%** 或以下，同時 **2026-05-13** 的 Survey of Expectations 把一年通膨預期拉回 **2.4%** 左右，→ 這次按兵不動會留在短期穿透油價衝擊的路徑，今天的中性利率終點重定價需要降權。[RBNZ Monetary policy](https://www.rbnz.govt.nz/monetary-policy)、[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations)

如果 **2026-04-21** 的非貿易財通膨續留 **3.5%** 上方，同時 **2026-05-13** 的兩年通膨預期升到 **2.5%** 以上，→ 油價衝擊就會由貿易財題走向更廣的定價題，`2026-05-27` 的 MPS 會更接近把升息時間往前挪。[Stats NZ CPI summary](https://www.stats.govt.nz/assets/Uploads/Consumers-price-index/Consumers-price-index-December-2025-quarter/Download-data/consumers-price-index-december-2025-quarter-summary-diagram.pdf)、[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations)

如果 **2026-05-13** 的一年薪資通膨預期留在 **2.5%** 左右或更低，失業率預期回到 **5.0%** 上方，→ 需求疲弱仍會壓住二輪效應，紐儲行會保留更多時間去觀察衝擊的持久度。[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/-/media/project/sites/rbnz/files/statistics/series/m/m14/insights/2026/survey-of-expectations-february-2026.pdf)、[RBNZ February MPS](https://www.rbnz.govt.nz/monetary-policy/monetary-policy-statement/monetary-policy-statement-filtered-listing-page/2026/feb-182/monetary-policy-statement-february-2026/web-version)

## 結語

> **核心判斷：** 紐儲行 4 月 8 日的 `2.25%` 按兵不動已把中性利率終點往上推；今天沒升息，明年的終點仍往上。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 總體 CPI + 1Y 通膨預期 | `2026-04-21` CPI `<=3.0%`，且 `2026-05-13` 的 1Y 通膨預期 `<=2.4%` | 觀察 `2026-04-21` 通膨更新、`2026-05-13` Survey、`2026-05-27` MPS | 今天的中性利率終點重定價需要降權，政策主線回到短期穿透衝擊 |
| 非貿易財通膨 + 2Y 通膨預期 | 非貿易財通膨 `>=3.5%`，且 2Y 通膨預期 `>=2.5%` | 觀察 `2026-04-21` 通膨更新至 `2026-05-27` MPS | 輸入性衝擊正在走進更廣的國內定價，OCR 路徑需要更早上調 |
| 1Y OCR 預期 + 1Y 薪資通膨預期 | `2026-05-13` 的 1Y OCR 預期 `>=2.75%`，且 1Y 薪資通膨預期 `>=2.7%` | 觀察 `2026-05-13` Survey，並對照 `2026-05-27` MPS | 市場與企業一起把更高名目路徑內生化，這次按兵不動會轉成更明確的緊縮傾向 |

後續最值得看的三個點很直接。第一個點是 **2026-04-21** 的通膨更新，這會回答 `3.0% / 4.2%` 的近端路徑有沒有真的落地。[RBNZ Monetary policy](https://www.rbnz.govt.nz/monetary-policy) 第二個點是 **2026-05-13** 的 Survey of Expectations，這會直接回答 `2.59%` 的一年通膨預期與 `2.58%` 的一年 OCR 預期有沒有續升。[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations) 第三個點是 **2026-05-27** 的 Monetary Policy Statement，這場會議會把今天的中性利率終點重定價寫成正式路徑，或把它留在條件句裡。[RBNZ home](https://www.rbnz.govt.nz/en/home)

---

*資料來源：[RBNZ 4 月 8 日決策](https://www.rbnz.govt.nz/news-and-events/news/2026/04/ocr-on-hold-at-2-25)、[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/-/media/project/sites/rbnz/files/statistics/series/m/m14/insights/2026/survey-of-expectations-february-2026.pdf)、[RBNZ Survey page](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations)、[RBNZ February MPS](https://www.rbnz.govt.nz/monetary-policy/monetary-policy-statement/monetary-policy-statement-filtered-listing-page/2026/feb-182/monetary-policy-statement-february-2026/web-version)、[RBNZ Monetary policy](https://www.rbnz.govt.nz/monetary-policy)、[RBNZ home](https://www.rbnz.govt.nz/en/home)、[Stats NZ CPI summary](https://www.stats.govt.nz/assets/Uploads/Consumers-price-index/Consumers-price-index-December-2025-quarter/Download-data/consumers-price-index-december-2025-quarter-summary-diagram.pdf)、[IMF](https://www.imf.org/en/blogs/articles/2026/03/30/how-the-war-in-the-middle-east-is-affecting-energy-trade-and-finance)、[ECB](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260319~93b1cbad97.en.html)、[NZIER Shadow Board](https://www.nzier.org.nz/publications/shadow-board-is-overwhelmingly-in-favour-of-keeping-the-ocr-at-2.25-percent-in-april)*
*市場與官方數據截至：2026-04-09（RBNZ home exchange-rate widget） / 2026-04-08（RBNZ OCR decision） / 2026-02-13（Survey of Expectations） / 2026-02-18（February MPS） / 2026-01-23（Stats NZ CPI update） / 2026-03-30（IMF） / 2026-03-19（ECB） / 2026-04-07（NZIER Shadow Board）*
