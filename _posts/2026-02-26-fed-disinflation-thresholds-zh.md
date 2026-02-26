---
layout: post
title: "通膨在降，黏性還在：這輪市場錯位其實來自三個結構層"
date: 2026-02-26 16:20:00 +0800
categories: [macro]
tags: [macro, inflation, employment, fed, bonds]
macro_kind: short
description: "總體 CPI 年增已降至 2.4%，但長端利率仍在 4% 上方；關鍵不在單一數據，而是價格結構、就業質地與政策反應函數三層仍未同向鬆動。"
lang: zh-TW
---

## 通膨明明在降，為什麼市場還是把「黏性風險」放在桌上？

2026 年 1 月，美國 CPI 年增率回到 **2.4%**，核心 CPI 年增 **2.5%**（[BLS CPI, 2026-02-13](https://www.bls.gov/news.release/cpi.nr0.htm)）。同一時間，聯邦基金利率月值是 **3.64%**（[FRED: FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)），但 10 年期公債殖利率仍在 **4.04%**（2026-02-24，[FRED: DGS10](https://fred.stlouisfed.org/series/DGS10)）。

核心問題是：**這是「通膨問題已結束」的前夜，還是「總體降溫但結構黏住」的中段？**

這篇不討論短線方向，而是把目前的錯位拆成三層：價格結構、就業質地、政策反應函數。真正會改變框架的，不是下一個 headline，而是這三層是否同時鬆動。

## 不是數字矛盾，而是三層結構還沒對齊

### 第一層：價格結構在降溫，但不是全面降溫

BLS 1 月數據顯示，總體 CPI 年增 2.4%，核心 CPI 年增 2.5%；看起來離 2% 只差一小段。但分項會看到更關鍵的事：
- 能源年增是 **-0.1%**，對總體有下拉效果；
- shelter 年增仍約 **3.0%**，服務價格黏性仍在；
- food away from home 年增 **4.0%**，消費端服務成本傳導仍明顯。  
（資料同源：[BLS CPI release](https://www.bls.gov/news.release/cpi.nr0.htm)）

也就是說，「通膨在降」是事實，但目前更像是由商品與能源帶動的降溫，而不是服務核心全面回到低摩擦區。

### 第二層：就業表面穩定，但就業品質在分化

1 月非農新增 **13 萬**、失業率 **4.3%**（[BLS Employment Situation, 2026-02-11](https://www.bls.gov/news.release/empsit.nr0.htm)），單看 headline 還在「可控放緩」。但同一份資料也指出：
- 長期失業人數年增明顯（27 週以上失業者較去年增加）；
- part-time for economic reasons 的年比仍偏高；
- 就業增長集中於醫療、社福等部門，聯邦政府與金融活動部門在收縮。  
（同源：[BLS Employment release](https://www.bls.gov/news.release/empsit.nr0.htm)）

紐約聯準銀行 1 月調查補上一塊：1 年通膨預期降到 **3.1%**，但 3 年與 5 年仍在 **3.0%**；「失去工作後 3 個月內找到新工作」的主觀機率雖回升到 **45.6%**，仍低於近 12 個月平均 **48.6%**（[NY Fed SCE](https://www.newyorkfed.org/microeconomics/sce)）。

這代表市場看到的不是單純「就業強/弱」，而是「總量尚可、品質分化、預期仍保守」。

### 第三層：政策方向在下修，但反應函數仍偏防守

2026-01-28 FOMC 維持 3.5%–3.75%，同時出現兩位委員偏向再降 1 碼的 dissent（[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)）。這透露的是：政策方向不是爭議，爭議在「下修速度與容忍風險」。

市場端的對應是：
- 2Y 約 **3.43%**、10Y 約 **4.04%**，2s10s 已轉正約 **+0.61%**（[FRED: DGS2](https://fred.stlouisfed.org/series/DGS2), [DGS10](https://fred.stlouisfed.org/series/DGS10)）；
- 10 年 breakeven 約 **2.28%**（[FRED: T10YIE](https://fred.stlouisfed.org/series/T10YIE)）。

曲線轉正本身不代表寬鬆已完成，它也可能代表市場把「未來成長風險」和「當前期限補償」一起放進價格裡。從結構上看，這就是為何短端可下、長端不一定同步鬆。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260226_struct"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260226_struct'), {
  type: 'bar',
  data: {
    labels: ['CPI總體YoY', '核心CPI YoY', 'Shelter YoY', 'Food away from home YoY', '能源YoY'],
    datasets: [{
      label: '2026-01 年增率（%）| Source: BLS CPI release',
      data: [2.4, 2.5, 3.0, 4.0, -0.1],
      backgroundColor: ['#2563eb', '#1d4ed8', '#dc2626', '#ea580c', '#0f766e']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Headline cools, but service-linked components remain sticky'
      }
    },
    scales: {
      y: {
        title: { display: true, text: 'Percent (%)' }
      }
    }
  }
});
</script>

## 分水嶺

如果未來兩次通膨更新中，服務相關核心分項同步下滑，且就業品質指標（長期失業、被迫兼職、再就業信心）同向改善，現在這套「黏性中段」框架會自然鬆動。

如果總體 CPI 繼續好看，但服務分項維持高位、就業品質繼續分化，市場就會維持「headline 降溫 ≠ 結構鬆動」的定價邏輯。

如果就業總量突然轉弱，且預期面快速惡化，框架主軸才會從「黏性」切到「需求風險主導」，那會是不同 regime，不是目前路徑的延伸。

## 結語

> **核心判斷：** 這輪的關鍵不是通膨有沒有下降，而是「價格結構、就業質地、政策反應函數」何時同時轉向；在三者未對齊前，市場的保守溢價不會自動消失。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| BLS 服務相關核心分項（含 shelter） | 連續 2 次月度更新同步下行，且年增率明顯靠近 2% 區間 | 下兩次 CPI 發布 | 「結構黏性」框架需降權 |
| 就業品質（長期失業 + 被迫兼職） | 連續 2 次不再惡化，且年比轉平或回落 | 下兩次就業報告 | 「總量穩、品質弱」敘事需重估 |
| NY Fed SCE 中期預期（3y/5y） | 連續 2 次低於 3.0% 並持續下修 | 下兩次 SCE 更新 | 市場對長端風險補償的要求可望下修 |

接下來最值得看的不是單一數字，而是：服務核心的黏性是否開始鬆、就業品質是否止血、以及中期通膨預期是否真正下行。

*資料來源：[BLS CPI Release](https://www.bls.gov/news.release/cpi.nr0.htm)、[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)、[Federal Reserve FOMC Statement (2026-01-28)](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)、[NY Fed Survey of Consumer Expectations](https://www.newyorkfed.org/microeconomics/sce)、[FRED: FEDFUNDS](https://fred.stlouisfed.org/series/FEDFUNDS)、[FRED: DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED: DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED: T10YIE](https://fred.stlouisfed.org/series/T10YIE)*  
*市場數據截至：2026-02-26*  
*本文僅供參考，不構成投資建議。*
