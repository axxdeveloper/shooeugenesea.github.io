---
layout: post
title: "英國降息時鐘卡在 4.4% 與 3.6%：headline 回落後，BoE 還在看哪兩格？"
date: 2026-03-25 12:08:58 +0800
categories: [macro]
tags: [macro, uk, inflation, employment, fiscal, bonds]
macro_kind: short
description: "英國 1 月 CPI 年增 3.0%，服務 CPI 年增 4.4%，BoE 3 月 Agents 最新資訊顯示 2026 年薪資 settlement 平均 3.6%。headline 已經回落，BoE 的觀察點仍留在國內價格黏著度。"
lang: zh-TW
---

## 英國央行還在看哪兩格？

英國 1 月 CPI 年增 **3.0%**，服務 CPI 年增 **4.4%**。[ONS CPI, January 2026](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/january2026)

核心問題是：**headline 已經往下走，英國央行為何仍把觀察點留在服務通膨與 2026 薪資 settlement？**

這個框架先看 **2026-03-25 15:00（Asia/Taipei）**公布的 2 月 CPI，再看 **2026-04-24** 的 BoE Agents summary 與 **2026-04-30** 的 MPC 會議。只要服務 CPI 與 2026 年薪資 settlement 還停在 **4.4%** 與 **3.6%** 附近，headline 回落就先代表外圍順風，國內通膨機制仍在慢速收斂。[ONS February 2026 release page](https://www.ons.gov.uk/releases/consumerpriceinflationukfebruary2026)、[BoE March Agents](https://www.bankofengland.co.uk/agents-summary/2026/march-2026)

## headline 先降，國內黏著度還留在服務與薪資

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| Budget 2025 與 energy path 把 headline 往下拉 | BoE 2 月 MPR 明寫 CPI 會在 4 月附近回到接近 target；3 月 MaPS 對 **2026 Q2 CPI** 的 median 是 **2.4%**，對 **2026 GDP growth** 的 median 只有 **1.0%** | 高 |
| 服務與薪資仍把 rate clock 留在原地 | 1 月服務 CPI **4.4%**；BoE 3 月 minutes 明寫這比 2 月 forecast 高 **0.2 個百分點**；BoE 3 月 Agents 把 **2026 wage settlements** 更新到 **3.6%** | 很高 |

目前最被數字支持的版本，是 headline 的下行速度快於國內價格機制的修復速度。BoE 2 月報告已經把 central path 寫得很清楚：headline CPI 可以因 energy prices 與 Budget 2025 先往下走，家計所得與消費卻只會慢速修復。[BoE February 2026 MPR](https://www.bankofengland.co.uk/monetary-policy-report/2026/february-2026)

BoE 3 月 minutes 又把觀察點收得更窄。委員會明寫 1 月服務 CPI **4.4%** 高於 2 月 forecast，2 月 CPI 目前只看到 **略高於 3%**，而且 Middle East shock 已經把近月 inflation path 再往上推。Sarah Breeden 與 Dave Ramsden 都寫明：Middle East shock 出現前，3 月票向已經朝 cut 移動。Alan Taylor 也寫明 benign energy scenario 仍可能支持更快、也更深的 cuts。這組文字說明了一件事：BoE 仍保留降息方向，時間表先交給服務與薪資去決定。[BoE March 2026 Minutes](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/march-2026)

3 月 MaPS 再補上一層市場視角。受訪者對 trough rate 的最大權重仍放在 **3.25%**，市場的年內 cuts 路徑仍留在場上；同一份調查也把 near-term rate path 的權重更多放到 **global outlook 42.5%**，高於 **UK outlook 31.2%**。這代表 timing 已經被全球 shock 拉慢，方向仍留在場上。[BoE March 2026 MaPS](https://www.bankofengland.co.uk/markets/market-intelligence/survey-results/2026/market-participants-survey-results-march-2026)

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260325UkRateClock"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260325UkRateClock'), {
  type: 'bar',
  data: {
    labels: ['Jan CPI', 'Jan 服務CPI', '2026 薪資settlement', '2026Q2 CPI median', '2026 GDP growth'],
    datasets: [{
      label: '年增率 / 預估值 (%)',
      data: [3.0, 4.4, 3.6, 2.4, 1.0],
      backgroundColor: [
        'rgba(59, 130, 246, 0.78)',
        'rgba(14, 165, 233, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(100, 116, 139, 0.78)'
      ],
      borderColor: [
        'rgba(59, 130, 246, 1)',
        'rgba(14, 165, 233, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(100, 116, 139, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '英國 headline 可先回落，服務與薪資仍慢一格（資料來源：ONS / BoE）'
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

## 4.4% 與 3.6% 先走哪一個，30 April 的答案就往哪邊走

如果 **2026-03-25** 與 **2026-04-22** 兩次 CPI 發布都把服務 CPI 壓到 **4.2%** 或更低，**2026-04-24** 的 Agents summary 也把 2026 年薪資 settlement 留在 **3.5%** 或更低，→ BoE 對 cuts 的討論會在 **2026-04-30** 與 **2026-06-18** 再次升溫。

如果 **2026-03-25** 的 headline 有所回落，服務 CPI 仍在 **4.4%** 附近，**2026-04-24** 的 Agents 仍把薪資 settlement 放在 **3.6%** 左右，→ headline 的下行就仍然主要來自外圍順風，hold 期會拉長。

如果 Middle East shock 把 **2026 年 7 月**之後的 household utility path 再往上推，春季 CPI 又維持在 **3%** 上方，→ BoE 需要同時面對較弱的需求與較高的 inflation salience，政策取捨會延後到夏季再重寫。

## 結語

> **核心判斷：** 英國 headline 的回落已經開始，BoE 的降息時鐘仍由服務 CPI 與 2026 薪資 settlement 定速；這兩格先鬆，利率下一格才會真的前進。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 服務 CPI | `<=4.2%` 連 2 次發布 | 觀察 2026-03-25、2026-04-22、2026-05-20 | 國內價格黏著度明顯轉弱，headline 回落可轉成較穩定的 cuts 討論 |
| 服務 CPI + 2026 薪資 settlement | 服務 CPI `>=4.4%` 連 2 次，且 2026 年 settlement `>=3.6%` | 觀察 2026-03-25、2026-04-22、2026-04-24 | 國內黏著度續留，BoE hold 期延長，headline 單獨下行的訊號權重下降 |
| MPC 路徑 | 2026-04-30 與 2026-06-18 連 2 次會議都維持 `3.75%` | 觀察至 2026-06-18 | 能源 shock 與國內黏著度共同主導政策，英國的 growth-inflation 取捨需要重寫 |

後續最值得看的三個點很清楚。第一個點是 **2026-03-25 15:00（Asia/Taipei）** 的 2 月 CPI。第二個點是 **2026-04-24** 的 BoE Agents summary，這份資料會直接告訴市場 3.6% 的 settlement 走向 3.5% 區間的速度。第三個點是 **2026-04-30** 的 MPC 與 **2026-05-20** 的 4 月 CPI，這兩個日期會把「headline 先降」與「國內黏著度轉弱」分出先後。

---

*資料來源：[ONS CPI, January 2026](https://www.ons.gov.uk/economy/inflationandpriceindices/bulletins/consumerpriceinflation/january2026)、[ONS CPI, February 2026 release page](https://www.ons.gov.uk/releases/consumerpriceinflationukfebruary2026)、[ONS CPI, March 2026 release page](https://www.ons.gov.uk/releases/consumerpriceinflationukmarch2026)、[ONS CPI, April 2026 release page](https://www.ons.gov.uk/releases/consumerpriceinflationukapril2026)、[BoE March 2026 Minutes](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2026/march-2026)、[BoE February 2026 MPR](https://www.bankofengland.co.uk/monetary-policy-report/2026/february-2026)、[BoE February 2026 MPR PDF](https://www.bankofengland.co.uk/-/media/boe/files/monetary-policy-report/2026/february/monetary-policy-report-february-2026.pdf)、[BoE March 2026 Agents](https://www.bankofengland.co.uk/agents-summary/2026/march-2026)、[BoE March 2026 MaPS](https://www.bankofengland.co.uk/markets/market-intelligence/survey-results/2026/market-participants-survey-results-march-2026)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED SP500](https://fred.stlouisfed.org/series/SP500)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)*
*市場與官方數據截至：2026-03-25 12:08（Asia/Taipei） / 2026-03-23（VIX、HY OAS、DGS10） / 2026-03-24（S&P 500） / 2026-03-18（BoE 3 月會議） / 2026-02-18（ONS 1 月 CPI）*
*本文僅供參考，不構成投資建議。*
