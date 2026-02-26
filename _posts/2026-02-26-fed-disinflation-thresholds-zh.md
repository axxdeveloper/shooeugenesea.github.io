---
layout: post
title: "利率降了，長債卻不買單：降息週期裡真正的分水嶺"
date: 2026-02-26 13:00:00 +0800
categories: [macro]
tags: [macro, fed, cpi, bonds, employment]
macro_kind: short
description: "聯邦基金利率已從 5.33% 降到 3.64%，但 10 年期美債殖利率仍在 4% 上下；關鍵不在是否降息，而在核心通膨與就業是否同時穿越門檻。"
lang: zh-TW
---

## 利率明明在降，為什麼長債還是偏硬？

從數字看，聯邦基金利率已由 2024 年 8 月的 5.33% 降到 2026 年 1 月的 3.64%（[FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)）。同一時間，最新 CPI 指數對應年增率約 2.39%（以 [CPIAUCSL](https://fred.stlouisfed.org/series/CPIAUCSL) 計算），但 10 年期美債殖利率在 2026-02-24 仍約 4.04%（[DGS10](https://fred.stlouisfed.org/series/DGS10)）。

真正的問題不是「聯準會有沒有降息」，而是：**在通膨放緩的同時，市場為何仍要求偏高的長端報酬？**

這篇要回答的是：**目前的利率下行，究竟是「接近終點」還是「中途換檔」？**你可以直接帶走一個可重複使用的框架：先看核心物價黏著度，再看勞動市場是否同步鬆動，最後才看長端殖利率是否跟進；下一個關鍵觀測窗是下一輪通膨與就業更新。

## 同樣是降息，市場在交易的是兩套邏輯

第一套邏輯是「政策利率下來，資金成本就會順勢全面下修」。這套說法有其事實基礎：政策端的確在走低（[FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)），CPI 年增率也從 2025 年中後段往下收斂到 2026 年 1 月約 2.39%（[CPIAUCSL](https://fred.stlouisfed.org/series/CPIAUCSL)）。

第二套邏輯是「市場並不只看政策利率，而是要求更高期限補償」。這也有數據支持：即使短端下移，10 年期殖利率仍在 4% 附近（[DGS10](https://fred.stlouisfed.org/series/DGS10)），代表長端價格裡仍包含對未來通膨路徑、財政供給與風險補償的保守定價。

目前更被數據支持的是第二套：因為如果市場完全相信通膨已經穩定回到低檔，長端通常不會在政策利率下修後仍維持偏高平台。補充看勞動市場，失業率最新約 4.3%（[UNRATE](https://fred.stlouisfed.org/series/UNRATE)），尚未出現急速惡化，這讓「快速轉向深度寬鬆」的敘事缺少必要條件。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260226a"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260226a'), {
  type: 'line',
  data: {
    labels: ['2024-08', '2025-01', '2026-01'],
    datasets: [
      {
        label: '聯邦基金利率 (%)｜Source: FRED FEDFUNDS',
        data: [5.33, 4.33, 3.64],
        borderColor: '#2563eb',
        backgroundColor: 'rgba(37,99,235,0.15)',
        yAxisID: 'y',
        tension: 0.2
      },
      {
        label: 'CPI 年增率 (%)｜Source: FRED CPIAUCSL（自行年增計算）',
        data: [2.61, 2.99, 2.39],
        borderColor: '#dc2626',
        backgroundColor: 'rgba(220,38,38,0.15)',
        yAxisID: 'y1',
        tension: 0.2
      }
    ]
  },
  options: {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    scales: {
      y: {
        position: 'left',
        title: { display: true, text: 'Fed Funds (%)' }
      },
      y1: {
        position: 'right',
        grid: { drawOnChartArea: false },
        title: { display: true, text: 'CPI YoY (%)' }
      }
    }
  }
});
</script>

## 分水嶺：接下來不是看「有沒有降息」，而是看「哪個條件先破」

如果核心通膨（可由 [PCEPILFE](https://fred.stlouisfed.org/series/PCEPILFE) 年增率追蹤）持續往 2% 中樞靠近，同時失業率只溫和上行，代表當前更像是「通膨回落下的高利率再定價」，不是需求面急凍。

如果核心通膨停在高於 2.8% 的平台，但就業沒有同步轉弱，長端殖利率維持高檔就有結構理由：市場會把「名目利率下修」和「實質/期限補償」拆開定價。

如果就業快速惡化且通膨同步下探，才是需要全面重估的情境；那時候市場焦點會從「通膨黏性」轉成「成長風險主導」。

## 結語

> **核心判斷：** 這一輪的關鍵不是降息本身，而是「核心通膨與就業是否同向跨過門檻」；在門檻未同時被穿越前，長端利率偏高並不矛盾。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 核心 PCE 年增率（PCEPILFE 計算） | 連續 2 個月 ≤ 2.6% | 下個 2 次月度更新（2026-03～2026-04） | 「通膨黏性主導」框架需要下修權重 |
| 失業率（UNRATE） | 連續 2 個月 ≥ 4.7% | 下個 2 次月度更新（2026-03～2026-04） | 焦點由通膨轉向需求/就業風險 |
| 10Y 美債殖利率（DGS10） | 連續 20 個交易日低於 3.80% | 未來 1-2 個月交易窗 | 期限溢價偏高的敘事需重估 |

接下來最值得盯的三個變數：核心 PCE 的連續變化、失業率是否出現階梯式上行、以及 10 年期殖利率是否仍黏在 4% 附近。

*資料來源：[FRED CPIAUCSL](https://fred.stlouisfed.org/series/CPIAUCSL)、[FRED PCEPILFE](https://fred.stlouisfed.org/series/PCEPILFE)、[FRED FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)、[FRED UNRATE](https://fred.stlouisfed.org/series/UNRATE)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)*  
*市場數據截至：2026-02-26*  
*本文僅供參考，不構成投資建議。*
