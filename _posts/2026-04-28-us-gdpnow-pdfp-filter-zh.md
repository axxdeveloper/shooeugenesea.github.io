---
layout: post
title: "1.2% GDPNow 先把私人內需放回中央"
date: 2026-04-28 12:03:00 +0800
categories: [macro]
tags: [macro, gdp, fed, growth, us, trade]
macro_kind: short
description: "Atlanta Fed GDPNow 在 2026-04-21 把 2026Q1 real GDP nowcast 寫成 1.2%，BEA 2026-04-09 又把 2025Q4 real GDP 從 advance 的 1.4% 下修到 0.5%。4/30 GDP 的閱讀順序會落在 PDFP、貿易與庫存三層。"
lang: zh-TW
---

## 1.2% 先考驗 GDP headline 的訊號品質

Atlanta Fed GDPNow 在 2026-04-21 把 2026Q1 real GDP nowcast 寫成 **1.2%**，BEA 將在 2026-04-30 發布 Q1 advance GDP。[Atlanta Fed GDPNow](https://www.atlantafed.org/research-and-data/data/gdpnow)、[BEA release schedule](https://www.bea.gov/node/43014)

1.2% 的 Q1 GDPNow 代表美國需求降溫，還是停擺回補與貿易會計暫時壓低 headline？

判斷線放在 real final sales to private domestic purchasers、advance goods trade、以及 PCE services。4/29 的 Census advance indicators 與 4/30 的 BEA GDP/PCE 會把這條線從 nowcast 推進到官方資料組合。[Census release schedule](https://www.census.gov/econ/indicators/release_schedule.html)、[BEA GDP Q4 third estimate](https://www.bea.gov/news/2026/gdp-third-estimate-industries-corporate-profits-state-gdp-and-state-personal-income-4th)

## 0.5%、1.8% 與 1.0pp 指向會計雜訊

<aside style="float: right; width: 230px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>PDFP</strong>：real final sales to private domestic purchasers，代表消費加上私人固定投資，Fed 常用來觀察私人內需動能。
</aside>

第一種解釋是 headline GDP 被庫存、政府與貿易項目拉低。BEA 在 2026-04-09 把 2025Q4 real GDP 第三估計寫成 **0.5%**，低於 advance estimate 的 **1.4%**；同一張表把 PDFP 寫成 **1.8%**，比 headline GDP 高 **1.3** 個百分點。[BEA GDP Q4 third estimate](https://www.bea.gov/news/2026/gdp-third-estimate-industries-corporate-profits-state-gdp-and-state-personal-income-4th) BEA technical notes 也寫明，2025Q4 政府停擺對 real GDP growth 扣掉約 **1.0** 個百分點，投資下修主要來自 wholesale inventories。[BEA GDP Q4 third estimate](https://www.bea.gov/news/2026/gdp-third-estimate-industries-corporate-profits-state-gdp-and-state-personal-income-4th)

第二種解釋是私人需求真正降溫。Fed 2026-03 SEP 把 2026 年 real GDP Q4/Q4 median 寫成 **2.4%**，同時有 14 位參與者把 GDP growth risk 指向 downside、5 位寫成 balanced。[Fed SEP 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm) 這組資料讓 1.2% GDPNow 具備警訊功能，但警訊需要 PDFP 與 consumption 同步確認。

目前資料支持第一種解釋的權重較高。FOMC 2026-03 minutes 寫明，PDFP 比 GDP 更能代表 underlying economic momentum，且 Q1 available indicators 顯示 real GDP 與 real PDFP growth 都較前期轉強；同段文字還把年初 goods exports sharply rose、January goods imports 約持平寫進資料拆解。[Fed minutes 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260318.htm)

三種口徑分開處理。GDPNow、BEA real GDP 與 PDFP 都採季增年率；Fed SEP 2.4% 採 Q4/Q4 年增預測；China NBS Q1 GDP 採年增與季增，功能是提供全球需求背景。[Atlanta Fed GDPNow](https://www.atlantafed.org/research-and-data/data/gdpnow)、[Fed SEP 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)、[China NBS](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260428GDPNowPDFP"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260428GDPNowPDFP'), {
  type: 'bar',
  data: {
    labels: ['Q4 GDP advance', 'Q4 GDP third', 'Q4 PDFP advance', 'Q4 PDFP third', 'Q1 GDPNow'],
    datasets: [{
      label: '季增年率 / nowcast (%)',
      data: [1.4, 0.5, 2.4, 1.8, 1.2],
      backgroundColor: [
        'rgba(37, 99, 235, 0.72)',
        'rgba(220, 38, 38, 0.72)',
        'rgba(5, 150, 105, 0.72)',
        'rgba(13, 148, 136, 0.72)',
        'rgba(245, 158, 11, 0.76)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(5, 150, 105, 1)',
        'rgba(13, 148, 136, 1)',
        'rgba(245, 158, 11, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'GDP headline 比 PDFP 更容易受修正擾動（資料來源：BEA 2026-04-09、Atlanta Fed 2026-04-21）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

| 式子 | 單位 | 口徑說明 |
|---|---:|---|
| 1.4 - 0.5 = 0.9 | 百分點 | BEA 2025Q4 real GDP advance estimate 到 third estimate 的下修幅度 |
| 1.8 - 0.5 = 1.3 | 百分點 | BEA 2025Q4 PDFP third estimate 高於 real GDP third estimate 的幅度 |
| 2.4 - 1.8 = 0.6 | 百分點 | BEA 2025Q4 PDFP advance estimate 到 third estimate 的下修幅度 |
| 1.0 | 百分點 | BEA 估計 2025Q4 政府停擺對 real GDP growth 的扣減幅度 |

全球背景讓 headline 更需要拆。IMF 2026 年 4 月 WEO 估算，AI-related technology investment 在 2025 年替美國 GDP growth 增加 **0.5** 個百分點，且這種投資具有 import-intensive 特性，外溢到亞洲供應鏈。[IMF WEO April 2026](https://www.imf.org/-/media/files/publications/weo/2026/april/english/text.pdf) China NBS 在 2026-04-16 把中國 Q1 GDP 寫成年增 **5.0%**、季增 **1.3%**，Eurostat 也把 2026Q1 preliminary GDP flash release 排在 2026-04-30。[China NBS](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)、[Eurostat release calendar](https://ec.europa.eu/eurostat/documents/24987/6642470/QNA_release_calendar.pdf)

## 4 月 29、30 日會把雜訊變成訊號

如果 2026-04-30 BEA Q1 real GDP 低於 **0.8%**，但 PDFP 維持 **1.8%** 以上，→ headline 低讀值會偏向庫存、貿易或政府項目的會計擾動，私人內需框架維持。[BEA release schedule](https://www.bea.gov/node/43014)、[Fed minutes 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260318.htm)

如果 real GDP 與 PDFP 同時低於 **1.0%**，且 personal consumption expenditures 低於 **1.0%**，→ Q1 數字會把讀法推向私人需求同步降溫，Fed SEP 的 downside risk 票數會取得更高權重。[Fed SEP 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)

如果 core PCE price index 在 Q1 或 March 月報中維持 **3.0%** 附近，同時 PDFP 低於 **1.5%**，→ Fed 會面對成長動能降溫與通膨黏性的組合，4/29 聲明的資料依賴文字會承受更高解讀壓力。[Fed SEP 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)、[SF FedViews 2026-04-16](https://www.frbsf.org/research-and-insights/publications/fedviews/2026/04/sf-fedviews-april-16-2026/)

## 結語

> **核心判斷：** GDPNow 1.2% 先測試 headline GDP 的訊號品質；PDFP 維持韌性時，單季低讀值仍屬會計與貿易雜訊框架。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Q1 real GDP vs PDFP | GDP 低於 `0.8%` 且 PDFP 維持 `1.8%` 以上 | 觀察 2026-04-30 BEA Q1 advance GDP | headline 低讀值歸入會計擾動，私人內需框架維持 |
| PDFP + consumption | PDFP 與 PCE growth 連續 `2` 次低於 `1.0%` | 觀察 2026-04-30 advance estimate 與 2026-05-28 second estimate | 需求降溫框架升權，Fed downside risk 票數取得更高權重 |
| Core PCE + PDFP mix | core PCE 維持 `3.0%` 附近且 PDFP 低於 `1.5%` | 觀察 2026-04-30 PCE / GDP 與 2026-05-28 更新 | 成長與通膨組合轉差，Fed 反應函數需要重新排序 |
| Advance goods trade | goods deficit 連續 `2` 次擴大且 imports growth 主要來自高科技 goods | 觀察 2026-04-29 與 2026-05-28 Census advance indicators | net exports 對 GDP headline 的干擾權重上升 |

後續觀察三個變數。第一是 4/30 的 PDFP，這會直接驗證私人內需是否承接 headline GDP。第二是 4/29 的 advance goods trade，這會衡量 AI capex 與進口密集度對 GDP 的扭曲。第三是 core PCE 與 PCE services，這會決定 Fed 把 Q1 GDP 視為成長風險，或視為通膨黏性下的資料雜訊。

---

*資料來源：[Atlanta Fed GDPNow](https://www.atlantafed.org/research-and-data/data/gdpnow)、[BEA release schedule](https://www.bea.gov/node/43014)、[BEA GDP Q4 third estimate](https://www.bea.gov/news/2026/gdp-third-estimate-industries-corporate-profits-state-gdp-and-state-personal-income-4th)、[Census advance indicators schedule](https://www.census.gov/econ/indicators/release_schedule.html)、[Fed minutes 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260318.htm)、[Fed SEP 2026-03](https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260318.htm)、[IMF WEO April 2026](https://www.imf.org/-/media/files/publications/weo/2026/april/english/text.pdf)、[China NBS](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)、[Eurostat release calendar](https://ec.europa.eu/eurostat/documents/24987/6642470/QNA_release_calendar.pdf)、[SF FedViews 2026-04-16](https://www.frbsf.org/research-and-insights/publications/fedviews/2026/04/sf-fedviews-april-16-2026/)*
*市場與官方數據截至：2026-04-21（Atlanta Fed GDPNow） / 2026-04-16（SF FedViews、China NBS） / 2026-04-09（BEA GDP Q4 third estimate） / 2026-03-18（Fed minutes 與 SEP）*
*本文僅供參考，不構成投資建議。*
