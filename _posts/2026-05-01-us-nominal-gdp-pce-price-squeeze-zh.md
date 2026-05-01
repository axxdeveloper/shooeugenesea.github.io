---
layout: post
title: "5.6% 名目 GDP 撐住 2.0% 實質成長：4.5% PCE 價格把美國成長削薄"
date: 2026-05-01 12:03:13 +0800
categories: [macro]
tags: [macro, gdp, inflation, pce, fed]
macro_kind: long
description: "BEA 4 月 30 日公布 2026 年第一季實質 GDP 年化成長 2.0%，但名目 GDP 成長 5.6%、PCE 價格指數年化 4.5%。3 月名目 PCE 月增 0.9%，實質 PCE 只增 0.2%，顯示名目支出仍強，購買力被價格吃掉。"
lang: zh-TW
---

## 2.0% 成長撞上 4.5% PCE 價格

BEA 4 月 30 日公布美國 2026 年第一季實質國內生產毛額 (GDP) 年化成長 **2.0%**，這份 GDP release 同時把個人消費支出 (PCE) 價格指數寫成 **4.5%**。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)

**2.0% GDP 與 4.5% PCE 價格同時出現時，美國經濟呈現需求韌性，還是名目支出把實質成長削薄？**

這個框架把名目支出、實質消費與政策約束拆開。讀者只要盯住 **2026-05-08** 的非農、**2026-05-12** 的 CPI，以及 **2026-05-28** 的 GDP second estimate 與 4 月 PCE，就能判斷這次資料屬於一次能源價格脈衝，或是更持久的購買力壓縮。[BLS schedule](https://www.bls.gov/schedule/2026/home.htm)、[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)、[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)

## 名目支出撐住表面，價格把實質動能削薄

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 名目支出仍有韌性，價格拿走大部分增量 | current-dollar GDP 年化成長 `5.6%`，real GDP 年化成長 `2.0%`，gross domestic purchases price index 年化成長 `3.6%` | 很高 |
| 消費支出仍在流動，實質購買力增幅偏薄 | 3 月 current-dollar PCE 月增 `0.9%`，real PCE 月增 `0.2%`，PCE price index 月增 `0.7%` | 很高 |
| 投資、AI 設備與政府支出反彈撐住 GDP，家庭端仍需要後續驗證 | BEA 技術說明點名 information processing equipment、computers/peripherals、shutdown 後 federal nondefense spending 反彈 | 高 |

本文採用三種口徑。第一季 GDP 與 GDP price data 使用 seasonally adjusted annual rate；3 月 personal income、PCE 與 price index 使用月增與年增；Fed SEP 使用 2026 年 Q4/Q4 projection。各期間數字只在等式表中作壓力量尺，正文推論以同期間資料為主。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)、[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)、[Fed SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)

| 錨點 | 式子 | 單位 | 口徑 |
|---|---:|---|---|
| 名實 GDP gap | `5.6 - 2.0 = 3.6` | 百分點 | BEA 2026Q1 SAAR：current-dollar GDP vs real GDP |
| 3 月 PCE 價格拖累 | `0.9 - 0.2 = 0.7` | 百分點 | BEA 2026 年 3 月：current-dollar PCE vs real PCE |
| Q1 core PCE 與 Fed 2026 median gap | `4.3 - 2.7 = 1.6` | 百分點 | BEA 2026Q1 SAAR vs Fed 2026 Q4/Q4 projection，作壓力量尺 |
| 10Y-2Y Treasury spread | `4.40 - 3.88 = 0.52` | 百分點 | U.S. Treasury 2026-04-30 CMT |

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260501NominalGdpPce"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260501NominalGdpPce'), {
  type: 'bar',
  data: {
    labels: ['Real GDP', 'Current-dollar GDP', 'Real final sales', 'Purchases price', 'PCE price', 'Core PCE price'],
    datasets: [{
      label: '2026Q1 SAAR (%)',
      data: [2.0, 5.6, 2.5, 3.6, 4.5, 4.3],
      backgroundColor: [
        'rgba(8, 145, 178, 0.82)',
        'rgba(220, 38, 38, 0.82)',
        'rgba(16, 185, 129, 0.82)',
        'rgba(249, 115, 22, 0.82)',
        'rgba(168, 85, 247, 0.82)',
        'rgba(71, 85, 105, 0.82)'
      ],
      borderColor: [
        'rgba(8, 145, 178, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(168, 85, 247, 1)',
        'rgba(71, 85, 105, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '名目增量大於實質成長，PCE 價格吃掉購買力（資料來源：BEA GDP advance estimate, 2026Q1）'
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

BEA 的 GDP release 顯示，美國第一季 real final sales to private domestic purchasers 年化成長 **2.5%**，高於前季 **1.8%**；這讓需求底盤仍然成立。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026) 同一份表也顯示 current-dollar GDP 年化成長 **5.6%**、real GDP 成長 **2.0%**、PCE price index 成長 **4.5%**，代表名目支出擴張主要透過價格進入資料。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)

3 月月資料把這條線拉得更近。Personal income 月增 **0.6%**，current-dollar PCE 月增 **0.9%**，real PCE 月增 **0.2%**，personal saving rate 留在 **3.6%**；名目消費有流量，實質消費只小幅增加。[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026) BEA 還把商品支出增加 **1,326 億美元**、服務支出增加 **629 億美元**寫進 release，這表示價格與商品端仍在推高總支出。[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)

技術說明提供了新聞標題外的機械細節。BEA 把 investment 的增加連到 information processing equipment，並點名 computers and peripheral equipment；exports 與 imports 的 goods 增加也由 computers, peripherals, and parts 帶動。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026) Government spending 的增加則由 federal nondefense spending 帶動，BEA 明確把這個 pattern 連到 2025 年第四季 government shutdown 後的反彈。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)

Personal income 的細節也讓需求判斷保持克制。BEA 說 3 月 personal income 增幅來自 compensation 與 farm proprietors' income，後者又反映 Farmer Bridge Assistance Program；BEA 同時指出 legal services prices 在 1 月與 3 月有調整。[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026) 這些細節說明 3 月收入與價格資料含有政策支付與方法調整，讀法需要回到後續資料確認。

Fed 的 3 月 SEP 把 2026 年 PCE inflation 與 core PCE inflation median 都放在 **2.7%**，並把 2026 年 federal funds rate median 放在 **3.4%**。[Fed SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm) BEA 4 月 30 日公布的 2026Q1 core PCE price index 年化 **4.3%**，使 Fed 的通膨回落路徑承受更高的近端資料壓力。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)

全球對照把這個壓力放進能源與實質所得框架。OECD 3 月把 2026 年全球成長放在 **2.9%**，把 G20 inflation 放在 **4.0%**，並明確寫入能源價格自 2026 年中逐步回落的技術假設。[OECD](https://www.oecd.org/en/publications/oecd-economic-outlook-interim-report-march-2026_d4623013-en/full-report.html) ECB 的 severe scenario 假設油價在 2026Q2 到 **145 美元**，歐元區 2026 HICP 會到 **4.4%**；BOJ 4 月 Outlook 也把原油上升寫成壓低企業利潤與家庭實質所得的 terms-of-trade shock。[ECB projections](https://www.ecb.europa.eu/press/projections/html/ecb.projections202603_ecbstaff~ebe291cd3d.en.html)、[BOJ Outlook](https://www.boj.or.jp/en/mopo/outlook/gor2604a.pdf)

另一個解釋同樣有資料支撐。DOL 4 月 30 日公布 4 月 25 日當週 initial claims 為 **189,000**，4 週均值 **207,500**，裁員端仍然偏低。[DOL claims](https://www.dol.gov/newsroom/releases/eta/eta20260430) Investing.com 報導 S&P 500 在 4 月 30 日收高 **1.0%** 至 **7,210.24**，Northlight Asset Management 的 Chris Zaccarelli 認為，只要經濟與企業獲利延續成長，股價仍能吸收能源與通膨壓力。[Investing.com](https://www.investing.com/news/stock-market-news/wall-st-futures-climb-after-mag-7-earnings-fed-hold-hormuz-tensions-in-focus-4647547)

## 5 月資料會判斷價格脈衝的持久度

如果 **2026-05-28** 的 4 月 PCE 把 headline 月增降到 **0.3%** 或以下、core 月增降到 **0.25%** 左右，同時 real PCE 仍有 **0.2%** 以上月增，→ 第一季的價格壓力會更接近短期能源脈衝，名目與實質支出的落差會收斂。[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)

如果 **2026-05-12** 的 4 月 CPI 讓 headline CPI 月增維持 **0.4%** 以上，能源分項月增仍在 **3.0%** 以上，且 **2026-05-28** 的 PCE price index 月增仍在 **0.5%** 以上，→ 價格壓力會由單月 PCE 走向更持久的消費端壓力，Fed 的 2.7% 年底通膨路徑需要降權。[BLS schedule](https://www.bls.gov/schedule/2026/home.htm)、[Fed SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)

如果 **2026-05-08** 的非農新增低於 **10 萬**、失業率升到 **4.5%** 以上，且 initial claims 的 4 週均值在 5 月升破 **225,000**，→ 實質需求降溫會成為主線，今天的價格壓縮框架會轉向成長下修框架。[BLS schedule](https://www.bls.gov/schedule/2026/home.htm)、[DOL claims](https://www.dol.gov/newsroom/releases/eta/eta20260430)

## 結語

> **核心判斷：** 2.0% 實質 GDP 代表美國仍有需求底盤；5.6% 名目 GDP 與 4.5% PCE 價格代表這個底盤正在用更高價格換同一份購買力。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| PCE price + real PCE | PCE price index 月增 `<=0.3%`、core PCE 月增 `<=0.25%` 連續 `2` 次，且 real PCE 月增 `>=0.2%` 連續 `2` 次 | 觀察 2026-05-28 與 2026-06-26 Personal Income and Outlays | 名目與實質支出 gap 收斂，價格壓縮框架降權 |
| CPI energy + headline CPI | energy CPI 月增 `>=3.0%` 連續 `2` 次，且 headline CPI 月增 `>=0.4%` 連續 `2` 次 | 觀察 2026-05-12 與 2026-06-10 CPI | 能源脈衝持續留在消費端，Fed 通膨回落路徑承受更高壓力 |
| Nonfarm payrolls + unemployment | 非農新增 `<100k` 連續 `2` 次，且失業率 `>=4.5%` 連續 `2` 次 | 觀察 2026-05-08 與 2026-06-05 Employment Situation | 實質需求降溫取代價格壓縮成為主要框架 |
| 10Y + 30Y Treasury | 10Y CMT `>=4.50%` 連續 `10` 個交易日，且 30Y CMT `>=5.00%` 連續 `5` 個交易日 | 觀察 2026-05-01 至 2026-06 FOMC 前的 Treasury data | 長端利率把通膨黏性與期限溢價一起定價，名目韌性會變成金融條件壓力 |

後續觀察集中在三個日期。**2026-05-08** 的非農會判斷裁員低位是否能轉成就業新增；**2026-05-12** 的 CPI 會判斷能源脈衝是否仍在消費端；**2026-05-28** 的 GDP second estimate 與 4 月 PCE 會直接更新名目支出、實質消費與價格三條線。

---

*資料來源：[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)、[BEA Personal Income and Outlays](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)、[DOL claims](https://www.dol.gov/newsroom/releases/eta/eta20260430)、[U.S. Treasury XML](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xml?data=daily_treasury_yield_curve&field_tdr_date_value=2026)、[Fed SEP](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)、[BLS schedule](https://www.bls.gov/schedule/2026/home.htm)、[OECD Interim Outlook](https://www.oecd.org/en/publications/oecd-economic-outlook-interim-report-march-2026_d4623013-en/full-report.html)、[ECB projections](https://www.ecb.europa.eu/press/projections/html/ecb.projections202603_ecbstaff~ebe291cd3d.en.html)、[BOJ Outlook](https://www.boj.or.jp/en/mopo/outlook/gor2604a.pdf)、[Investing.com](https://www.investing.com/news/stock-market-news/wall-st-futures-climb-after-mag-7-earnings-fed-hold-hormuz-tensions-in-focus-4647547)*
*市場數據截至：2026-04-30*
*本文僅供參考，不構成投資建議。*
