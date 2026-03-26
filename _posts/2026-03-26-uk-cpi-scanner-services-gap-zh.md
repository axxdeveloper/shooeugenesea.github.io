---
layout: post
title: "英國 3.0% 的兩層訊號：scanner data 壓低 0.1，BoE 仍盯 4.3% 服務通膨"
date: 2026-03-26 12:05:04 +0800
categories: [macro]
tags: [macro, uk, inflation, energy, bonds, employment]
macro_kind: short
description: "英國 2 月 CPI 年增 3.0%，官方統計顯示若沿用本地蒐價會是 3.1%；同月核心 CPI 升至 3.2%，服務 CPI 仍在 4.3%。headline 持平先反映方法與時點差，BoE 的利率時鐘仍由國內價格黏著度決定。"
lang: zh-TW
---

## 英國 3.0% 之後，利率時鐘交給哪一格？

英國 2 月 CPI 年增 **3.0%**，連續兩個月持平；核心 CPI 升到 **3.2%**，服務 CPI 只由 **4.4%** 回到 **4.3%**。[ONS 2 月 CPI](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/february2026)

核心問題是：**英國 2 月 CPI 連兩月停在 3.0%，3.75% 的 Bank Rate 下一格會由 headline 帶動，還是由服務通膨與能源傳導重新定速？**

ONS 在方法與時點上留下兩個差，BoE 在國內變數上留下兩個門檻。**4.2%** 的服務 CPI 與 **3.5%** 的 2026 wage settlements 會決定下一格，**2026-04-22**、**2026-04-24**、**2026-04-30** 是最有辨識力的三個日期。[BoE Agents](https://www.bankofengland.co.uk/agents-summary/2026/march-2026)、[BoE 3 月 minutes](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/march-2026)

## 0.1 個百分點的方法差，4.3% 的服務黏著仍留在場上

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| headline 先被 scanner data 與戰前 fuel window 壓住 | ONS 把官方 CPI 定在 **3.0%**，又明示若沿用本地蒐價會是 **3.1%**；2 月 motor fuel 價格都在 **2026-02-28** 中東戰事前蒐集完成 | 很高 |
| BoE 的利率時鐘仍由國內黏著定速 | core CPI 升到 **3.2%**，services CPI 仍在 **4.3%**；BoE Agents 仍把 2026 wage settlements 放在 **3.6%**；3 月 MaPS 把 near-term Bank Rate 的 global outlook 權重放到 **42.5%** | 很高 |

目前最被數字支持的版本，是 headline 3.0% 先反映方法差與時點差，國內價格壓力仍在交代 3.75% 的 Bank Rate 要等多久。ONS 這次把細節寫得很清楚：英國從 2 月指數起正式把 groceries scanner data 導入約 **50%** 的 grocery market，官方 CPI **3.0%** 低於 local collection 口徑的 **3.1%**；歷史回溯分析也顯示 scanner data 對 CPI 年增率的平均影響約 **-0.03 個百分點**。[ONS 2 月 CPI](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/february2026)、[ONS scanner data impact analysis](https://www.ons.gov.uk/economy/inflationandpriceindices/articles/impactanalysisontransformationofukconsumerpricestatisticsrailfaresandsecondhandcars/january2026) headline 的平穩因此帶有方法更新成分，英國通膨仍留在高於 2% target 的區間。

時點差又把 headline 的可讀性再往下壓一格。ONS 在 transport 段落直接寫明，2 月 petrol 與 diesel 的價格蒐集都發生在 **2026-02-28** 中東戰事爆發之前；同月 motor fuels 年增率因此降到 **-4.6%**。[ONS 2 月 CPI](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/february2026) 這代表 2 月 CPI 留在戰前燃油視窗，3 月與 Q2 的能源傳導才會接棒。

BoE 的 reaction function 也支持這個讀法。3 月 minutes 已把 March CPI 寫到 **接近 3.5%**，Q2 改寫到 **約 3.0%**，並估算 2026 Q3 的能源 direct effect 約 **0.75 個百分點**，indirect effect 約 **0.25 個百分點**。[BoE 3 月 minutes](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/march-2026) 此時，英國 2 月 core CPI 升到 **3.2%**，services CPI 仍在 **4.3%**，BoE Agents 也把 2026 wage settlements 留在 **3.6%**。[ONS 2 月 CPI](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/february2026)、[BoE Agents](https://www.bankofengland.co.uk/agents-summary/2026/march-2026) headline 持平因此只交代了表層，rate clock 的底層仍由國內黏著定速。

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260326UkCpiLayers"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260326UkCpiLayers'), {
  type: 'bar',
  data: {
    labels: ['官方CPI', '本地蒐價CPI', '核心CPI', '服務CPI', '2026 wage settlements'],
    datasets: [{
      label: '年增率 / 估計值 (%)',
      data: [3.0, 3.1, 3.2, 4.3, 3.6],
      backgroundColor: [
        'rgba(59, 130, 246, 0.78)',
        'rgba(14, 165, 233, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(220, 38, 38, 0.78)'
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(14, 165, 233, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(220, 38, 38, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '英國 headline 先被方法差壓低，rate clock 仍由服務與薪資定速（資料來源：ONS / BoE）'
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

## 4.2%、3.5%、30 April 會把 headline 翻成利率路徑

如果 **2026-04-22** 的 3 月 CPI 把服務 CPI 壓到 **4.2%** 或更低，**2026-04-24** 的 Agents summary 又把 2026 wage settlements 留在 **3.5%** 或更低，→ 2 月 headline 的穩定就能往國內 disinflation 延伸，**2026-04-30** 與 **2026-06-18** 的 cut 討論會升溫。

如果 **2026-04-22** 的 headline 仍停在 **3.0%** 附近，core CPI 續留 **3.2%** 以上，services CPI 也續留 **4.3%** 左右，→ 2 月數字就只是在方法與時點上先變軟，BoE 的 hold 期會繼續交給國內黏著去決定。

如果 Brent 在 **100 美元** 上方續留 **10 個交易日**，**2026-04-22** 的 3 月 CPI 又回到 **3.1%** 以上，→ 2 月戰前燃油視窗就正式關閉，BoE 在 3 月 minutes 寫下的 Q2 到 Q3 inflation path 會升權。[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[BoE 3 月 minutes](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/march-2026)

## 結語

> **核心判斷：** 英國 2 月 CPI 的 3.0% 先反映方法差與戰前燃油視窗，BoE 的利率時鐘仍由 4.3% 服務通膨與 3.6% wage settlements 定速。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 服務 CPI + 2026 wage settlements | 服務 CPI `<=4.2%`，且 2026 wage settlements `<=3.5%` | 觀察 2026-04-22（3 月 CPI）與 2026-04-24（Agents summary） | 國內價格黏著度明顯轉弱，BoE 可把 stable headline 轉成 renewed cuts discussion |
| 服務 CPI + core CPI | 服務 CPI `>=4.3%` 連 2 次發布，且 core CPI `>=3.2%` 連 2 次發布 | 觀察 2026-04-22、2026-05-20 | 國內黏著續留，headline 單獨平穩的訊號權重下降，hold 期延長 |
| Brent + headline CPI | Brent `>100` 連 10 個交易日，且 headline CPI `>=3.1%` | 觀察即日起至 2026-04-22 | 2 月戰前燃油視窗關閉，BoE Q2 到 Q3 inflation path 升權 |

後續最值得看的三個點很清楚。第一個點是 **2026-04-22** 的 3 月 CPI，這個數字會把戰前 fuel window 與 3 月油價 shock 分開。第二個點是 **2026-04-24** 的 Agents summary，這份資料會告訴市場 3.6% 的 wage settlements 走向 3.5% 區間的速度。第三個點是 **2026-04-30** 的 MPC，這次會議會把「headline 持平」與「國內黏著續留」排出先後。

---

*資料來源：[ONS 2 月 CPI](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/february2026)、[ONS scanner data impact analysis](https://www.ons.gov.uk/economy/inflationandpriceindices/articles/impactanalysisontransformationofukconsumerpricestatisticsrailfaresandsecondhandcars/january2026)、[BoE 3 月 minutes](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/march-2026)、[BoE Agents](https://www.bankofengland.co.uk/agents-summary/2026/march-2026)、[BoE Market Participants Survey](https://www.bankofengland.co.uk/markets/market-intelligence/survey-results/2026/market-participants-survey-results-march-2026)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)*
*市場與官方數據截至：2026-03-25（英國 CPI、S&P 500） / 2026-03-24（VIX、HY OAS、美國 10Y） / 2026-03-23（Brent） / 2026-03-19（BoE Agents、MaPS） / 2026-03-18（BoE 3 月會議）*
*本文僅供參考，不構成投資建議。*
