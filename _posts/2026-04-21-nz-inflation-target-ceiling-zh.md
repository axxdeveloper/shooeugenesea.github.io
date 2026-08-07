---
layout: post
title: "3.1% 留在目標帶上緣，0.9% 已先墊高一季：紐西蘭 2.25% 的停留時間被這份 CPI 拉長"
date: 2026-04-21 15:30:00 +0800
categories: [macro]
tags: [macro, inflation, newzealand, energy, bonds]
macro_kind: short
description: "紐西蘭 2026 年第一季 CPI 年增 3.1%、季增 0.9%，高於 Westpac 與 ANZ 先前押注的 2.8%。電價年增 12.5%、汽油季增 3.5%，代表 2.25% 的 OCR 先留原地，下一步由 5 月預期調查與企業價格擴散決定。"
lang: zh-TW
---

## 3.1% 留在上緣，2.25% 先留原地

紐西蘭統計局 `2026-04-21` 把 `March 2026 quarter` 的消費者物價指數 (CPI) 年增寫成 **`3.1%`**，季增寫成 **`0.9%`**。[Stats NZ CPI release](https://www.stats.govt.nz/information-releases/consumers-price-index-march-2026-quarter/) [Stats NZ news](https://www.stats.govt.nz/news/annual-inflation-at-3-1-percent-in-march-2026/)

當 `3.1%` 留在目標帶上緣、`0.9%` 已先寫進第一季時，紐西蘭儲備銀行的官方現金利率 (OCR) 會把這份 CPI 讀成一次油價 shock，還是讀成更久的停留時間？

這組數字把判讀收斂到兩張表。第一張表看 `3.5%` 的非可交易項目與 `2.5%` 的可交易項目，第二張表看 `2026-05-13` 的預期調查與 `2026-05-27` 的貨幣政策聲明；前者回答壓力停在哪裡，後者回答 `2.25%` 會停多久。[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations)

## 電價守住年增，汽油把季增往上推

下方圖表與等式表只採 `March 2026 quarter` 的官方年增率。後文切到 `0.9%` 與 `0.8%` 時，我會直接寫成「季增」，讓年增與季增維持同一口徑。[Stats NZ CPI release](https://www.stats.govt.nz/information-releases/consumers-price-index-march-2026-quarter/)

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>可交易 / 非可交易</strong>：可交易項目先反映匯率、進口成本與國際價格，非可交易項目先反映國內租金、公共費率與本地需求。
</aside>

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260421NzInflation"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260421NzInflation'), {
  type: 'bar',
  data: {
    labels: ['整體 CPI', '可交易項目', '非可交易項目'],
    datasets: [{
      label: '2026Q1 年增率 (%)',
      data: [3.1, 2.5, 3.5],
      backgroundColor: [
        'rgba(14, 116, 144, 0.82)',
        'rgba(249, 115, 22, 0.82)',
        'rgba(185, 28, 28, 0.82)'
      ],
      borderColor: [
        'rgba(14, 116, 144, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(185, 28, 28, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '紐西蘭 2026Q1 年增率：非可交易項目仍跑在前面（資料來源：Stats NZ，2026-04-21）'
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

| 式子 | 單位 | 口徑說明 |
|---|---|---|
| `3.5 - 2.5 = 1.0` | 百分點 | `March 2026 quarter` 非可交易項目年增減去可交易項目年增 |
| `0.9 - 0.8 = 0.1` | 百分點 | `March 2026 quarter` headline 季增減去扣除汽油後的 CPI 季增 |
| `3.1 - 3.0 = 0.1` | 百分點 | `March 2026 quarter` headline 年增實際值減去 `RBNZ` `2026-04-08` review 預估值 |

`Stats NZ` 把整體年增寫成 `3.1%`，把可交易項目寫成 `2.5%`，把非可交易項目寫成 `3.5%`。同一天的新聞稿又把電價年增寫成 **`12.5%`**，把地方稅費年增寫成 `8.8%`，把肉類年增寫成 `8.6%`，把房租年增寫成 `1.2%`。[Stats NZ CPI release](https://www.stats.govt.nz/information-releases/consumers-price-index-march-2026-quarter/) [Stats NZ news](https://www.stats.govt.nz/news/annual-inflation-at-3-1-percent-in-march-2026/) 這張 annual 表先把今天的資料定義清楚。紐西蘭這份 CPI 由電價與公共費率把上緣留住，再由油價把短期波動推高。

季度表把壓力再往前推一步。`Stats NZ` 把汽油季增寫成 **`3.5%`**，把藥品價格寫成 `17.7%`，又把 `petrol + pharmaceutical products` 合計寫成超過 `0.9%` 季增的四分之一；扣掉汽油後，CPI 季增仍有 **`0.8%`**。[Stats NZ news](https://www.stats.govt.nz/news/annual-inflation-at-3-1-percent-in-march-2026/) 這代表第一季的價格壓力已經同時站在輸入端與行政價格端，`March` 的汽油只是把曲線再往上抬一格。

市場原本把今天的回落幅度想得更明顯。`Satish Ranchhod` 在 `Westpac` `2026-04-17` 把 `March` headline 放在 `2.8%`、季增放在 `0.7%`，`Sharon Zollner` 團隊在 `ANZ` `2026-03-17` 也把第一季放在 `2.8%`、季增放在 `0.6%`，兩邊都把更完整的汽油傳導放到 `Q2`。[Westpac CPI preview](https://assets.dam.westpac.co.nz/is/content/wnzl/dist/all-of-bank/economic-reports/economic-data/Economic-Data_170426-Q126-CPI-preview_bulletin_17Apr26.pdf) [ANZ CPI update](https://www.anz.co.nz/content/dam/anzconz/documents/economics-and-market-research/2026/ANZ-CPI-Forecast-Update-20260317.pdf) `Ting Huang` 在 `NZIER` `2026-04-07` 的反方同樣站得住。她把判斷放在「石油供給由能源市場決定，OCR 主要影響需求端」，主張政策要先盯中期傳導與需求破壞。[NZIER Shadow Board](https://www.nzier.org.nz/publications/shadow-board-is-overwhelmingly-in-favour-of-keeping-the-ocr-at-2.25-percent-in-april) 今天的 `3.1%` 與 `0.9%` 讓這條反方仍可成立，因為 `RBNZ` 在 `2026-02-18` 仍把 output gap 放在 `-1.5%`、失業率放在 `5.4%`；今天的數字同時把「先觀察」的成本抬高了一格。[RBNZ February MPS PDF](https://www.rbnz.govt.nz/-/media/project/sites/rbnz/files/publications/monetary-policy-statements/2026/feb-180226/mps_report_feb2026.pdf) [RBNZ April review](https://www.rbnz.govt.nz/news-and-events/news/2026/04/ocr-on-hold-at-2-25)

## 5 月 13 日到 5 月 27 日會決定停留時間

如果 `2026-05-13` 的 `Survey of Expectations` 把 `1Y` 通膨預期留在 `>=2.6%`、`2Y` 留在 `>=2.4%`，→ `RBNZ` 會把今天的 `3.1%` 讀成預期管理題，`2.25%` 的停留時間會再拉長。[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations) [RBNZ monetary policy schedule](https://www.rbnz.govt.nz/hub/news/2024/06/monetary-policy-announcement-and-financial-stability-report-dates-for-late-2025-and-2026)

如果 `2026-05-15` 的 `Selected Price Indexes` 把汽油月變動壓回平穩區，`2026-05-19` 的 `Business Price Indexes` 又把 output prices 季增留在 `<=0.5%`，→ 今天這份 `3.1%` 會留在單季上緣，`Q2` 的 headline 雖然還會高，結構仍可維持在供給衝擊。[Stats NZ Middle East impacts](https://www.stats.govt.nz/reports/economic-impacts-on-new-zealand-from-conflict-in-the-middle-east/)

如果 `2026-05-20` 的 household inflation expectations 與 `2026-05-21` 的 business expectations 一起上行，→ 今天這套「先看輸入 shock、再看預期」的框架要改寫成更黏著的國內通膨題。[RBNZ household expectations](https://www.rbnz.govt.nz/en/statistics/series/households/household-inflation-expectations) [RBNZ business expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/business-expectations-survey)

## 結語

> **核心判斷：** 紐西蘭這份 `3.1%` CPI 把通膨壓力寫成電價與油價的雙軌題，`2.25%` 的 OCR 因此先留原地，下一步由預期有沒有跟上決定。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Survey of Expectations | `1Y <=2.4%` 且 `2Y <=2.3%` 連續 `2` 次季度發布 | 觀察 `2026-05-13` 與下一輪 `2026-08` 調查 | 預期維持錨定，今天的停留時間框架需要降權 |
| Petrol + output prices | 汽油月變動 `<=0%` 連續 `2` 個月，且 `Business Price Index` output prices 季增 `<=0.5%` | 觀察 `2026-05-15`、`2026-06-16` 的 `Selected Price Indexes`，以及 `2026-05-19` 的 BPI | 輸入 shock 停在進口與中間投入層，`3.1%` 更接近單季上緣 |
| Non-tradeables + OCR expectations | 非可交易項目年增 `>=3.6%`，且 `1Y OCR expectation >=2.75%` 連續 `2` 次季度發布 | 觀察 `2026-07-21` CPI 與 `2026-08` 的 `Survey of Expectations` | 框架要改寫成更黏著的國內通膨題 |

後續三個變數足夠回答這個問題。第一個變數是 `2026-05-13` 的 `1Y / 2Y` 預期，這張表會直接回答 `RBNZ` 要管理的是價格本身，還是預期本身。第二個變數是 `2026-05-15` 與 `2026-05-19` 的汽油與企業價格資料，這兩張表會回答 `March` 的 shock 有沒有擴散。第三個變數是 `2026-05-27` 的 `Monetary Policy Statement`；那一天會把 `2.25%` 的停留時間寫成暫停，或寫成更久的等待。

---

*資料來源：[Stats NZ CPI release](https://www.stats.govt.nz/information-releases/consumers-price-index-march-2026-quarter/)、[Stats NZ news](https://www.stats.govt.nz/news/annual-inflation-at-3-1-percent-in-march-2026/)、[RBNZ April review](https://www.rbnz.govt.nz/news-and-events/news/2026/04/ocr-on-hold-at-2-25)、[RBNZ Survey of Expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/survey-of-expectations)、[RBNZ monetary policy](https://www.rbnz.govt.nz/monetary-policy)、[RBNZ monetary policy schedule](https://www.rbnz.govt.nz/hub/news/2024/06/monetary-policy-announcement-and-financial-stability-report-dates-for-late-2025-and-2026)、[RBNZ household expectations](https://www.rbnz.govt.nz/en/statistics/series/households/household-inflation-expectations)、[RBNZ business expectations](https://www.rbnz.govt.nz/statistics/series/economic-indicators/business-expectations-survey)、[RBNZ February MPS PDF](https://www.rbnz.govt.nz/-/media/project/sites/rbnz/files/publications/monetary-policy-statements/2026/feb-180226/mps_report_feb2026.pdf)、[Stats NZ Middle East impacts](https://www.stats.govt.nz/reports/economic-impacts-on-new-zealand-from-conflict-in-the-middle-east/)、[Westpac CPI preview](https://assets.dam.westpac.co.nz/is/content/wnzl/dist/all-of-bank/economic-reports/economic-data/Economic-Data_170426-Q126-CPI-preview_bulletin_17Apr26.pdf)、[ANZ CPI update](https://www.anz.co.nz/content/dam/anzconz/documents/economics-and-market-research/2026/ANZ-CPI-Forecast-Update-20260317.pdf)、[NZIER Shadow Board](https://www.nzier.org.nz/publications/shadow-board-is-overwhelmingly-in-favour-of-keeping-the-ocr-at-2.25-percent-in-april)、[IMF war policy blog](https://www.imf.org/en/blogs/articles/2026/04/14/war-darkens-global-economic-outlook-and-reshapes-policy-priorities)*
*市場數據截至：2026-04-21（Stats NZ CPI） / 2026-04-16（Stats NZ Middle East impacts） / 2026-04-17（Westpac） / 2026-04-08（RBNZ April review） / 2026-03-17（ANZ） / 2026-02-13（RBNZ Survey of Expectations） / 2026-02-18（RBNZ February MPS） / 2026-04-14（IMF）*
*本文僅供參考，不構成投資建議。*
