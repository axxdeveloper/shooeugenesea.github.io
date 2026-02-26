---
layout: post
title: "降息已經發生，長債為何仍硬：把利率拆成三層後就看懂"
date: 2026-02-26 13:18:00 +0800
categories: [macro]
tags: [macro, fed, bonds, inflation, fiscal]
macro_kind: short
description: "聯邦基金利率降至 3.64%，但 10 年期殖利率仍在 4.04%；關鍵在於市場同時在定價通膨預期、實質利率與期限補償，而不只是政策利率。"
lang: zh-TW
---

## 政策利率下來了，為什麼長端利率沒跟著鬆？

表面上，市場直覺是「降息 = 債券漲 = 長端殖利率下來」。但最新數據顯示，聯邦基金利率已降到 **3.64%**（2026-01， [FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)），10 年期美債殖利率仍在 **4.04%**（2026-02-24， [DGS10](https://fred.stlouisfed.org/series/DGS10)），沒有出現很多人期待的同步大幅下滑。

核心問題是：**這一輪市場在交易的，究竟是「降息週期」本身，還是「降息以後仍偏高的長端補償」？**

如果把利率拆成三層來看，你會更容易判斷：第一層是政策利率方向，第二層是中長期通膨預期，第三層是實質利率與期限補償。下一步最值得盯的，不是下一次會議口風，而是核心通膨與就業是否一起跨過門檻。

## 長端利率其實是三個東西的總和

第一層是政策利率。這一層已經很明確地轉向下行：從 2024 年高位一路回落到 2026 年 1 月的 3.64%（[FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)）。如果市場只交易這一層，10 年期殖利率理論上應該更快、更深地下來。

第二層是中長期通膨預期。10 年期盈虧平衡通膨率約 **2.28%**（2026-02-25， [T10YIE](https://fred.stlouisfed.org/series/T10YIE)），5 年遠期 5 年通膨預期約 **2.14%**（[T5YIFR](https://fred.stlouisfed.org/series/T5YIFR)）。這代表市場並未把長期通膨預期重新抬回高通膨 regime，反而相對錨定在 2% 多一點。

第三層是實質利率與期限補償。把 10 年期名目殖利率 4.04% 減掉 10 年通膨預期 2.28%，可得到約 **1.76%** 的隱含實質回報。這個數字不低，說明即使政策端下修，市場仍要求長天期資產提供偏高真實報酬，背後常見驅動包含供給壓力與風險補償需求。

再看基本面，失業率目前約 **4.3%**（2026-01， [UNRATE](https://fred.stlouisfed.org/series/UNRATE)），尚未進入急速惡化區；CPI 年增率約 **2.39%**（2026-01，以 [CPIAUCSL](https://fred.stlouisfed.org/series/CPIAUCSL) 計算），核心 PCE 年增約 **3.00%**（2025-12，以 [PCEPILFE](https://fred.stlouisfed.org/series/PCEPILFE) 計算）。這組合比較像「通膨趨緩但未完全回到低摩擦區」，而不是「需求快速坍縮」。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260226_high"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260226_high'), {
  type: 'bar',
  data: {
    labels: ['Fed Funds', '10Y Treasury', '10Y Breakeven', 'Implied Real 10Y'],
    datasets: [{
      label: 'Percent (%) | Sources: FRED FEDFUNDS, DGS10, T10YIE',
      data: [3.64, 4.04, 2.28, 1.76],
      backgroundColor: ['#2563eb','#0f766e','#dc2626','#7c3aed']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Policy rate has fallen, but long-end compensation remains elevated'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Percent (%)' }
      }
    }
  }
});
</script>

## 分水嶺：要改變框架，必須同時看到哪兩個條件？

如果核心通膨（以核心 PCE 為主）連續下行到 2.6% 以下，且失業率只溫和上行，代表經濟在「低速降溫」而非「硬著陸」，那麼長端高補償可以逐步被壓縮。

如果核心通膨停在接近 3% 的平台，同時就業沒有顯著轉弱，市場就有理由維持較高的實質與期限要求；這種情況下，政策利率下修不必然帶來長端大幅回落。

如果失業率在短期內出現連續跳升，且通膨同步快速下探，定價主軸才會從「抗通膨殘餘風險」切到「成長風險主導」，長端利率的重心才可能明顯下移。

## 結語

> **核心判斷：** 當長期通膨預期仍錨定、但實質與期限補償偏高時，「降息」只會先改變短端，不會自動改寫長端。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 核心 PCE 年增率（PCEPILFE 計算） | 連續 2 個月 ≤ 2.6% | 未來 2 次月度更新（約 2026-03～2026-04） | 長端高補償框架需下修，長短端連動可能增強 |
| 失業率（UNRATE） | 連續 2 個月 ≥ 4.7% | 未來 2 次月度更新 | 市場主軸轉向需求風險，需重估目前「高實質利率可維持」假設 |
| 10Y 美債殖利率（DGS10） | 連續 20 個交易日 < 3.80% | 未來 1-2 個月交易窗 | 期限補償偏高的敘事顯著弱化 |
| 10Y 盈虧平衡通膨（T10YIE） | 連續 20 個交易日 > 2.60% | 未來 1-2 個月交易窗 | 通膨預期重新上移，需重估「通膨已錨定」前提 |

下一步我會優先看三個變數：核心 PCE 是否連續下修、失業率是否進入階梯式上行、以及 10Y 名目殖利率與 10Y 通膨預期之差（隱含實質回報）是否開始明顯收斂。

*資料來源：[FRED FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED T10YIE](https://fred.stlouisfed.org/series/T10YIE)、[FRED T5YIFR](https://fred.stlouisfed.org/series/T5YIFR)、[FRED UNRATE](https://fred.stlouisfed.org/series/UNRATE)、[FRED CPIAUCSL](https://fred.stlouisfed.org/series/CPIAUCSL)、[FRED PCEPILFE](https://fred.stlouisfed.org/series/PCEPILFE)、[FRED GFDEGDQ188S](https://fred.stlouisfed.org/series/GFDEGDQ188S)*  
*市場數據截至：2026-02-26*  
*本文僅供參考，不構成投資建議。*
