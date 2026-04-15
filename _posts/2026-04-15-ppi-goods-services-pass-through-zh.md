---
layout: post
title: "0.5% / 1.6% / 0.0% 已經排成兩張表：3 月 PPI 先把價格推進上游貨物，PCE 接著看服務層"
date: 2026-04-15 12:07:58 +0800
categories: [macro]
tags: [macro, inflation, energy, fed, china]
macro_kind: short
description: "BLS 把 3 月 PPI 寫成月增 0.5%，其中 final demand goods 月增 1.6%，services 持平；中國 3 月 PPI 也由負轉正到年增 0.5%。這波價格壓力先走能源、化工與上游貨物，4 月 30 日的 PCE 與 5 月 13 日的下一份 PPI 會回答終端服務的接棒速度。"
lang: zh-TW
---

## 0.5% 與 1.6% 已經先往前走，0.0% 把服務留在下一張表

BLS 在 `2026-04-14` 把 3 月 Producer Price Index 寫成月增 **0.5%**，同時把 final demand goods 寫成月增 **1.6%**。[BLS PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)

**3 月 PPI 把 final demand goods 推到 `1.6%`、services 留在 `0.0%` 時，這波通膨會先停在上游貨物，還是 `2026-04-30` 的 PCE 會把服務層一起抬高？**

這個框架把觀察順序排成 goods、trade margins 與 PCE bridge 三層。讀者只要盯住 **2026-04-16** 的零售銷售、**2026-04-30** 的個人所得支出、以及 **2026-05-13** 的下一份 PPI，就能分辨成本壓力留在上游，或走進更廣的終端定價。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)

4 月 13 日那篇文章把家戶吸收層寫出來，4 月 14 日那篇文章把 shipping tax 層寫出來。[前文](/2026/04/13/us-household-energy-tax-buffer-zh/)、[前文](/2026/04/14/oil-blockade-shipping-tax-zh/) 這份 PPI 把 producer-price pipeline 補成第三張表。

## 汽油、柴油與化工把 goods 推高，零售利潤把 services 先壓平

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 上游貨物先吸收能源 shock | final demand goods `+1.6%`、energy `+8.5%`、gasoline `+15.7%`、stage 1 `+1.2%`、中國 PPI 年增 `+0.5%` | 很高 |
| 終端服務與零售利潤先吸收第一輪衝擊 | final demand services `0.0%`、trade services `-0.3%`、transportation and warehousing `+1.3%`，PCE bridge 類別升跌交錯 | 很高 |

BLS 把第一層寫得很清楚。final demand goods 月增 **1.6%**，其中 final demand energy 月增 **8.5%**；headline PPI 的年增率也升到 **4.0%**。[BLS PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm) 更深一層的中間投入更熱。BLS 細表把 gasoline 寫成月增 **15.7%**，jet fuel 寫成月增 **30.7%**，processed intermediate demand 的 diesel fuel 甚至月增 **42.0%**；stage 1 intermediate demand 因此連續第二個月月增 **1.2%**，goods inputs 月增 **2.4%**。[BLS PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm) 這組數字把今天的訊號寫得很直接：能源與化工先把價格壓力推進上游貨物。

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260415PpiPipeline"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260415PpiPipeline'), {
  type: 'bar',
  data: {
    labels: ['Final demand PPI', 'Final demand goods', 'Final demand services', 'Stage 1 ID', 'Stage 3 ID'],
    datasets: [{
      label: '2026 年 3 月月增率（%）',
      data: [0.5, 1.6, 0.0, 1.2, 1.2],
      backgroundColor: [
        'rgba(8, 145, 178, 0.82)',
        'rgba(249, 115, 22, 0.82)',
        'rgba(100, 116, 139, 0.82)',
        'rgba(220, 38, 38, 0.82)',
        'rgba(180, 83, 9, 0.82)'
      ],
      borderColor: [
        'rgba(8, 145, 178, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(100, 116, 139, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(180, 83, 9, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '3 月 PPI 先把價格壓力留在貨物與上游（資料來源：BLS 2026-04-14）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

跨區域資料把這條 goods 管線再壓實一層。中國國家統計局在 `2026-04-10` 把 3 月 PPI 寫成 **0.5%** 年增，前值是 **-0.9%**；生產資料價格年增 **1.0%**，生活資料價格則年減 **1.3%**。[國家統計局](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260410_1963263.html) 這組數字和美國的 goods / services split 排成同一條線：原料、能源與生產資料先升，consumer-facing prices 仍留在較慢的層次。ECB 總裁 Christine Lagarde 也把這條規則講得很清楚。small and short-lived shocks 多留在 energy component，intensity 與 duration 變大時，generalised inflation 才會接棒。[ECB](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260325~ac2916a211.en.html)

服務層的細節同樣重要。BLS 把 final demand services 寫成 **0.0%**，同時把 transportation and warehousing services 寫成 **1.3%**，又把 trade services margins 寫成 **-0.3%**。[BLS PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm) 這代表零售商和批發商先吸收了部分成本，服務總表因此停在原地。Reuters 又把會進入 PCE 的橋樑項目拆開：airline passenger services 月增 **2.8%**、portfolio management fees 月增 **1.0%**、health and medical insurance 月增 **0.5%**、legal services 月增 **0.3%**，traveler accommodation 月減 **0.1%**。[Reuters](https://m.za.investing.com/news/economy-news/us-producer-inflation-increases-less-than-expected-in-march-but-war-boosts-energy-prices-4211251?ampMode=1) **Stephen Brown** 因此把反方留在桌上。他認為 trade margins 下滑說明 tariff-related pass-through 正在降溫；同時，他仍把 3 月 core PCE 估在約 **0.28%** 月增。[Capital Economics](https://www.capitaleconomics.com/publications/us-rapid-response/us-producer-prices-mar-2026) 目前最被數字支持的版本，是 goods 管線先熱，終端服務仍留在下一張表。

## 4 月 16 日博售、4 月 30 日 PCE、5 月 13 日 PPI 會把 pass-through 寫清楚

如果 **2026-04-16** 的零售銷售扣除加油站仍維持月增，**2026-04-30** 的 core PCE 又留在 **0.3%** 左右，→ 3 月這波壓力會更接近上游 goods 與 margins 調整，Fed 看到的是黏著但可控的管線。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)、[Reuters](https://m.za.investing.com/news/economy-news/us-producer-inflation-increases-less-than-expected-in-march-but-war-boosts-energy-prices-4211251?ampMode=1)

如果 **2026-04-16** 的零售銷售扣除加油站轉成月減，**2026-04-30** 的 real PCE 也落到 **0%** 或以下，→ 零售利潤與 household buffer 的吸收開始轉成需求放慢，今天的 producer-price 框架會往 demand damage 方向移動。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)

如果 **2026-05-13** 的 final demand services 升到 **0.3%** 以上，trade services 也回到 **0%** 以上，同時 stage 1 intermediate demand 連續兩個月留在 **1.0%** 以上，→ 上游 shock 會由 goods 題升級成更廣的終端 pass-through 題。[BLS PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)

## 結語

> **核心判斷：** 3 月 PPI 先把能源 shock 寫進貨物與中間投入，終端服務仍靠 trade margins 與零售吸收，Fed 會在 4 月 30 日的 PCE 才看到更完整的 pass-through。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 零售銷售扣除加油站 + real PCE | 扣除加油站零售銷售 `<=0%`，且 real PCE `<=0%`，在 `2026-04-16` 與 `2026-04-30` 兩個連續發布同時成立 | 觀察 `2026-04-16` 至 `2026-04-30` | producer-price 壓力開始轉向需求放慢，今天的 upstream-first 框架需要往 demand damage 重新配重 |
| Core PCE | core PCE 在 `2026-04-30` 與 `2026-05-28` 連續 `2` 次月增 `>=0.3%` | 觀察 `2026-04-30` 與 `2026-05-28` | 服務層與 PCE bridge 已經接棒，今天的「服務留在下一張表」框架需要降權 |
| Final demand services + stage 1 intermediate demand | final demand services 在 `2026-05-13` 與 `2026-06-11` 連續 `2` 次月增 `>=0.3%`，且 stage 1 intermediate demand 連續 `2` 次月增 `>=1.0%` | 觀察 `2026-05-13` 至 `2026-06-11` | 上游貨物 shock 已走進更廣的終端定價，Fed 的 look-through 空間會縮 |

後續最值得看的三個點如下。第一個點是 **2026-04-16** 的零售銷售扣除加油站，這張表會先回答零售利潤的吸收力。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf) 第二個點是 **2026-04-30** 的個人所得支出，這份資料會把 headline PCE、core PCE 與 real PCE 一次排到同一張表上。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)、[Reuters](https://m.za.investing.com/news/economy-news/us-producer-inflation-increases-less-than-expected-in-march-but-war-boosts-energy-prices-4211251?ampMode=1) 第三個點是 **2026-05-13** 的下一份 PPI，這張表會直接回答 services 與 stage 1 inputs 的續熱幅度。[BLS PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)

---

*資料來源：[BLS PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)、[國家統計局](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260410_1963263.html)、[ECB speech](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260325~ac2916a211.en.html)、[Census / BEA 2026 release schedule](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)、[Reuters](https://m.za.investing.com/news/economy-news/us-producer-inflation-increases-less-than-expected-in-march-but-war-boosts-energy-prices-4211251?ampMode=1)、[AP](https://apnews.com/article/6990c9ca0e19553b40c13af11b9c575b)、[Capital Economics](https://www.capitaleconomics.com/publications/us-rapid-response/us-producer-prices-mar-2026)*
*市場與官方數據截至：2026-04-15（報告時間） / 2026-04-14（BLS、Reuters、AP、Saxo） / 2026-04-10（國家統計局） / 2026-03-25（ECB）*
*本文僅供參考，不構成投資建議。*
