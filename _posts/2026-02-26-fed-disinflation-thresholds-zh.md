---
layout: post
title: "降息後長端仍不鬆：市場真正盯的是就業預期，不只是通膨"
date: 2026-02-26 15:45:00 +0800
categories: [macro]
tags: [macro, fed, bonds, employment, inflation]
macro_kind: short
description: "政策利率已降到 3.64%、CPI 年增 2.4%，但 10 年期美債仍在 4.04%；關鍵在於就業預期與風險補償沒有同步轉鬆。"
lang: zh-TW
---

## 政策利率與 CPI 都往下，為什麼長端殖利率還在 4% 上下？

先看兩個最直觀的數字：聯邦基金利率最新月值為 **3.64%**（2026-01， [FRED: FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)），10 年期美債殖利率仍在 **4.04%**（2026-02-24， [FRED: DGS10](https://fred.stlouisfed.org/series/DGS10)）。同一時間，BLS 公布 2026 年 1 月 CPI 年增率 **2.4%**、核心 CPI 年增 **2.5%**（[BLS CPI release, 2026-02-13](https://www.bls.gov/news.release/cpi.nr0.htm)）。

真正的問題是：**當通膨與政策利率都在下行，長端為何沒有一起進入「明顯寬鬆」？**

這篇要回答的是：長端目前到底在定價什麼。你可以直接帶走一個框架——短端看政策、長端看「通膨預期 + 就業路徑 + 風險補償」三件事是否同時鬆動；下一個觀察點是 2 月就業與通膨更新是否改變這個組合。

## 這次卡住長端的，不是單一通膨數字，而是「勞動市場與預期」仍偏黏

第一層，政策利率方向已經不是爭議。2026-01-28 的 FOMC 把目標區間維持在 3.5%–3.75%，但聲明同時顯示兩位理事（Miran、Waller）偏向再降 1 碼，代表「是否繼續下修」已進入路徑討論，而非方向之爭（[Federal Reserve statement, 2026-01-28](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)）。

第二層，通膨正在降，但結構不是全面鬆。BLS 1 月資料中，總體 CPI 年增 2.4%，但服務項中 shelter 年增仍約 3.0%，醫療與部分服務項也維持正增長（[BLS CPI release](https://www.bls.gov/news.release/cpi.nr0.htm)）。這讓市場更像在交易「降溫但未歸零摩擦」，而不是「通膨問題已結束」。

第三層，也是這次最容易被忽略的：就業與預期沒有同步鬆。2026-01 非農新增 **13 萬**、失業率 **4.3%**（[BLS Employment Situation, 2026-02-11](https://www.bls.gov/news.release/empsit.nr0.htm)），還不是需求急凍格局。紐約聯準銀行 1 月調查也顯示，1 年通膨預期降到 3.1%，但 3 年與 5 年仍在 3.0%；同時「3 個月內再就業機率」雖回升到 45.6%，仍低於過去 12 個月均值 48.6%（[NY Fed SCE, Jan 2026](https://www.newyorkfed.org/microeconomics/sce)）。

換句話說，市場現在不是單看 CPI，而是看「通膨預期下來的速度」能不能快過「勞動市場轉弱的不確定性」。這也解釋了為何 10Y-2Y 利差已轉正到約 **+0.61%**（2026-02-24，以 [DGS10](https://fred.stlouisfed.org/series/DGS10) 與 [DGS2](https://fred.stlouisfed.org/series/DGS2) 計算），但長端殖利率重心仍未明顯下移。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260226_deep"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260226_deep'), {
  type: 'line',
  data: {
    labels: ['2024-08', '2025-01', '2026-01/02'],
    datasets: [
      {
        label: '聯邦基金利率 FEDFUNDS (%)',
        data: [5.33, 4.33, 3.64],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37,99,235,0.15)',
        tension: 0.25,
        yAxisID: 'y'
      },
      {
        label: '10年期美債 DGS10 (%)',
        data: [3.87, 4.58, 4.04],
        borderColor: '#0f766e',
        backgroundColor: 'rgba(15,118,110,0.15)',
        tension: 0.25,
        yAxisID: 'y'
      },
      {
        label: '1年通膨預期（NY Fed SCE, %）',
        data: [3.0, 3.4, 3.1],
        borderColor: '#dc2626',
        backgroundColor: 'rgba(220,38,38,0.15)',
        tension: 0.25,
        yAxisID: 'y'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Policy rate down, but long-end remains sticky as expectations/labor stay mixed'
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: { display: true, text: 'Percent (%)' }
      }
    }
  }
});
</script>

## 分水嶺

如果 1 年通膨預期繼續下修、且 3 年/5 年也跟著往 2% 中樞靠近，同時失業率只溫和上行，長端「高風險補償」敘事會自然被壓縮。

如果通膨預期下修停滯，但就業數據持續溫和，長端利率更可能維持高位橫盤：市場不會因為單月 CPI 漂亮就重寫整條收益率曲線。

如果失業率在短時間內連續跳升、再就業機率同步轉弱，市場主軸才會從「抗通膨殘餘風險」切到「成長下修」，那時長端重心才可能真正下移。

## 結語

> **核心判斷：** 這一輪的關鍵不是「有沒有降息」，而是「就業預期與通膨預期是否同步鬆動」；在兩者未同向之前，長端偏硬是結構結果。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| BLS 失業率（U-3） | 連續 2 個月 ≥ 4.6% | 下兩次就業報告（2026-03、2026-04） | 市場焦點由通膨轉向成長風險，長端框架需重估 |
| NY Fed SCE 1y inflation expectation | 連續 2 個月 ≤ 2.8% 且 3y/5y 同向下修 | 下兩次 SCE 更新 | 風險補償敘事弱化，長端下移機率提高 |
| 10Y-2Y 利差（DGS10-DGS2） | 連續 20 個交易日 > +0.80% 且 10Y不破 3.8% | 未來 1-2 個月 | 曲線轉正若由長端高位主導，代表寬鬆傳導不完整 |

接下來最值得盯的三個變數：失業率與非農是否出現背離、SCE 中期通膨預期是否跟下來、以及 10 年期殖利率是否能在 3.8% 下方站穩。

*資料來源：[BLS CPI Release (2026-02-13)](https://www.bls.gov/news.release/cpi.nr0.htm)、[BLS Employment Situation (2026-02-11)](https://www.bls.gov/news.release/empsit.nr0.htm)、[Federal Reserve FOMC Statement (2026-01-28)](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)、[NY Fed Survey of Consumer Expectations](https://www.newyorkfed.org/microeconomics/sce)、[FRED: FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)、[FRED: DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED: DGS2](https://fred.stlouisfed.org/series/DGS2)*  
*市場數據截至：2026-02-26*  
*本文僅供參考，不構成投資建議。*
