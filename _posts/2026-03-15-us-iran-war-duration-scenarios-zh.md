---
layout: post
title: "美伊戰爭若拖成時間題：一週、一個月、三個月、半年、一年，市場各自在定價什麼？"
date: 2026-03-15 20:20:00 +0800
categories: [macro]
tags: [macro, geopolitics, energy, bonds, fiscal]
macro_kind: long
description: "截至 3 月中，Brent 較 2 月 27 日上漲 32%，美國 10 年債殖利率由 3.97% 升至 4.27%。若美伊戰爭不是幾天而是一路拖長，市場主導變數會依序從油價與保費，轉向通膨、利率、信用與財政。"
lang: zh-TW
---

## 戰爭若不是幾天，而是一路拖到一年，市場到底會先壞在哪一層？

截至 3 月中，Brent 較 2 月 27 日收盤上漲約 **32%**，美國 10 年期公債殖利率也由 **3.97%** 升到 **4.27%**。這代表市場第一輪已經先把能源與折現率重定價，但那還不是最重要的部分。[FRED Brent](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DCOILBRENTEU&cosd=2025-12-01)、[FRED DGS10](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS10&cosd=2025-12-01)

核心問題是：**如果美伊戰爭不是幾天，而是拖成一週、一個月、三個月、半年、一年，總經與市場主導變數會怎麼換手？**

這篇不做勝負預測，只用七條 transmission channels 來拆：油價、通膨、利率、成長、信用利差、供應鏈、財政。最重要的分界其實是三個：荷莫茲航運是否恢復、Brent 能否回到 **85 美元以下**，以及 4 月 9 日 BEA 公布的下一次 PCE 是否仍顯示核心通膨黏著。[EIA Hormuz](https://www.eia.gov/todayinenergy/detail.php?id=61002)、[BEA PIO Jan 2026](https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026)

## 先是油價與保費，接著是金融條件，拖久了才變成財政與供應鏈

[ACTUAL] EIA 指出，荷莫茲海峽在 2022 年承載約 **2,100 萬桶/日**石油液體流量，約當全球石油液體消費 **21%**；有效可繞行管線能力僅約 **350 萬桶/日**，而且約 **82%** 的原油與凝析油流向亞洲市場。[EIA](https://www.eia.gov/todayinenergy/detail.php?id=61002) 這代表時間一拉長，受傷最深的往往不是最先喊話的市場，而是能源進口、製造與航運鏈條更密的亞洲經濟體。

[ACTUAL] IMF 3 月指出，油價自 2025 年 12 月以來已漲近 **50%**、荷莫茲航運流量下滑 **90%**、全球航運成本上升 **50%**；同時它給出一條很實用的規則：油價每上升 **10%**，隔年全球 headline inflation 約多 **0.4 個百分點**，global output 約少 **0.1%**。[IMF](https://www.imf.org/en/News/Articles/2026/02/24/sp-cj-geoeconomic-fragmentation-in-the-middle-east-and-central-asia) 也就是說，**時間本身就是 transmission channel**。同一場戰爭，拖一週與拖一年，不會是同一個 macro regime。

下圖只回答一件事：市場第一輪先重定價了什麼。Brent 採 FRED 最新可得 3 月 9 日數據，其餘序列截至 3 月 12 至 13 日。[FRED VIX](https://fred.stlouisfed.org/graph/fredgraph.csv?id=VIXCLS&cosd=2025-12-01)、[FRED SP500](https://fred.stlouisfed.org/graph/fredgraph.csv?id=SP500&cosd=2025-12-01)、[Stooq USD/TWD](https://stooq.com/q/d/l/?s=usdtwd&i=d)、[Stooq XAU/USD](https://stooq.com/q/d/l/?s=xauusd&i=d)、[Stooq TAIEX](https://stooq.com/q/d/l/?s=%5Etwse&i=d)

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260315WarDuration"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260315WarDuration'), {
  type: 'bar',
  data: {
    labels: ['Brent 原油', 'VIX', 'USD/TWD', 'S&P 500', '台股加權', '現貨金'],
    datasets: [{
      label: '相對 2026-02-27 變動(%)',
      data: [32.3, 37.4, 1.6, -3.6, -4.8, -5.7],
      backgroundColor: [
        'rgba(249,115,22,0.78)',
        'rgba(234,179,8,0.78)',
        'rgba(59,130,246,0.78)',
        'rgba(239,68,68,0.78)',
        'rgba(239,68,68,0.78)',
        'rgba(148,163,184,0.78)'
      ],
      borderColor: [
        'rgba(249,115,22,1)',
        'rgba(234,179,8,1)',
        'rgba(59,130,246,1)',
        'rgba(239,68,68,1)',
        'rgba(239,68,68,1)',
        'rgba(148,163,184,1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '開戰後第一輪跨資產重定價（資料來源：FRED, Stooq）'
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

真正有用的不是再描述一次價格波動，而是把不同時間長度對應到不同主導變數：

| 時間 | 主導 transmission channels | 對總經的影響 | 對市場的影響 |
|---|---|---|---|
| **一週** | `[ACTUAL]` 油價、戰爭險、運費與美元先反應。 | `[PROJECTED]` 正式 CPI / GDP 幾乎還沒來得及變，但 nowcast 會先被上修。 | `[ACTUAL]` Brent、VIX 上升，S&P 500、台股與黃金都可能同時承壓；市場先買流動性，不一定先買避險敘事。 |
| **一個月** | `[PROJECTED]` 燃料、航空、貨運、化工與肥料價格開始傳到 headline inflation。 | `[PROJECTED]` 能源進口國實質所得受壓，央行更難太快轉鴿；核心 PCE 目前仍在 **3.1%**，讓政策容錯本來就不大。[BEA](https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026) | `[PROJECTED]` 2Y / 10Y 維持偏高、能源與運輸鏈分化擴大，信用利差先在高耗能與航運航空部門擴張。 |
| **三個月** | `[PROJECTED]` 若油價仍較基準高 **20-30%**，依 IMF 規則線性外推，隔年全球 headline inflation 可能多 **0.8-1.2pp**，global output 可能少 **0.2-0.3%**。 | `[PROJECTED]` 題目會從能源 shock 升級成 stagflation 壓力，企業指引、庫存與 PMI 開始下修。 | `[PROJECTED]` HY OAS 若由目前 **3.17%** 往 **3.5%** 上方擴散，市場將從「波動升溫」改寫為「金融條件收緊」。 |
| **半年** | `[PROJECTED]` 供應鏈由物流問題變成產能與設備問題。UNCTAD 指出，荷莫茲若持續受阻，可能波及約 **三分之一海運肥料貿易** 與 **5% 乾散貨 ton-miles**。[UNCTAD](https://unctad.org/publication/review-maritime-transport-2025) | `[PROJECTED]` 補貼、戰備、保費擔保與軍費同步拉高財政壓力，進口國承受更深的輸入型成本。 | `[PROJECTED]` 市場主軸轉為資產負債表與國家差異：能源出口國、軍工與部分防禦現金流較有緩衝，進口國貨幣與高槓桿產業較脆弱。 |
| **一年** | `[PROJECTED]` 戰爭從事件變成制度成本：更高庫存、更高保險、更高軍費、更高能源安全 capex。 | `[PROJECTED]` 美國因能源自給較能吸收油氣 shock，但財政與長端利率壓力更難回落；亞洲與歐洲則更像承受持續性的成本輸入。 | `[PROJECTED]` 市場不再只看 headline，而是看誰能在高成本與高利率下存活；估值中樞與信用風險都會被重定價。 |

表格裡最重要的一句不是數字本身，而是順序：**時間越長，市場主軸越從油價，轉向通膨與利率，再轉向信用、供應鏈與財政。**

反方也不能省。**Adi Imsirovic** 在 CSIS 認為，現在更像 `secure transportation problem`，不是全球沒有油；OECD 緊急庫存仍約 **90 天**、美國 SPR 仍有 **4 億桶以上**，因此短於一個月的衝擊，仍可能停在前端油價與保費 re-pricing，而不是自動走成全年油荒。[CSIS](https://www.csis.org/analysis/what-does-iran-war-mean-global-energy-markets) **Oxford Economics** 也只假設未來一季平均 **4 mbpd** 供給受擾，Q2 Brent 平均 **$79**，結論是「會擾亂市場，但未必會擊穿市場」。[Oxford Economics](https://www.oxfordeconomics.com/resource/iran-conflict-will-rile-energy-markets-not-break-them/) 這個反方很重要，因為它提醒我們：**真正需要升級到半年、一年的，不是 headline 本身，而是高油價、航運受阻、供應延宕與信用擴散是否同時持續。**

財政這條線也不能低估。3 月 12 日美國未償公債已達 **$38.90T**；[ESTIMATE] Treasury 自己估計 2026Q1 仍要淨市場化借款 **$574B**、Q2 **$109B**。[Treasury Debt API](https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page%5Bsize%5D=1)、[Treasury sb0377](https://home.treasury.gov/news/press-releases/sb0377) 所以戰爭若拖到半年以上，市場不只是在交易油，還是在交易「新增安全成本要疊在已經很高的發債底座上」。

## 分水嶺

如果荷莫茲航運恢復、Brent 回到 **85 美元以下並連續 5 個交易日**，→ 這次事件較接近前端油價與保費 shock，一年期的信用 / 財政劇本要降權。（目前最有辨識力的降級條件。）

如果 Brent 維持 **95 美元以上連續 20 個交易日**，而且 4 月 9 日公布的 2 月核心 PCE 仍 **>=3.0%**，→ 題目會正式從能源事件升級成政策兩難，市場將更像在交易 stagflation 而不是一次性風險。[EIA STEO](https://www.eia.gov/outlooks/steo/)、[BEA PIO Jan 2026](https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026)

如果 HY OAS 升破 **3.50** 並連續 **2 週**、VIX 再站上 **30** 且連 **2 日**，→ 問題就不再只是油價，而是信用條件收緊，市場框架要由「事件 shock」改成「資產負債表壓力」。 [FRED HY OAS](https://fred.stlouisfed.org/graph/fredgraph.csv?id=BAMLH0A0HYM2&cosd=2025-12-01)、[FRED VIX](https://fred.stlouisfed.org/graph/fredgraph.csv?id=VIXCLS&cosd=2025-12-01)

## 結語

> **核心判斷：** 美伊戰爭拖得越久，市場主軸就越不會停留在戰爭本身；一週看油價與保費，一個季度看通膨與利率，半年到一年看信用、供應鏈與財政。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Brent + 荷莫茲航運 | Brent `<85` 且主要航運恢復常態，連續 5 個交易日 | 即日起至 2026-04-07 EIA STEO | 一年期 stagflation / 財政劇本要降權，回到短期事件 shock 解讀 |
| 核心 PCE + Brent | 核心 PCE `>=3.0%`，且 Brent `>95` 連續 20 個交易日 | 即日起至 2026-04-09 PIO 與其後 2 週 | 題目正式從能源事件升級成政策兩難，利率高檔框架需維持 |
| HY OAS + VIX | HY OAS `>3.50` 連 2 週，且 VIX `>30` 連 2 日 | 每日 / 每週檢查；下一個系統性觀察點為 2026-04-09 PIO | 問題已由油價傳導升級為信用條件收緊，需要全面重評市場框架 |
| Treasury borrowing estimate | 下一次 borrowing estimate 較目前 Q2 `109B` 顯著上修，且市場同時維持高油價 | 觀察下一次 Treasury borrowing estimate 發布 | 財政渠道由背景噪音升級為主線，長端利率與供給壓力需上修權重 |

接下來最值得盯的不是更多 headline，而是三個變數：第一，荷莫茲實際航運與保費；第二，Brent 是否仍高於 EIA 的短期高油價基準；第三，信用利差是否開始由能源 / 航運板塊擴散到整體高收益債市場。

---

*資料來源：[EIA Strait of Hormuz](https://www.eia.gov/todayinenergy/detail.php?id=61002)、[EIA Short-Term Energy Outlook](https://www.eia.gov/outlooks/steo/)、[IMF](https://www.imf.org/en/News/Articles/2026/02/24/sp-cj-geoeconomic-fragmentation-in-the-middle-east-and-central-asia)、[World Bank](https://www.worldbank.org/en/news/press-release/2023/10/30/commodity-markets-outlook-under-the-shadow-of-geopolitical-risks)、[UNCTAD Review of Maritime Transport 2025](https://unctad.org/publication/review-maritime-transport-2025)、[Oxford Economics](https://www.oxfordeconomics.com/resource/iran-conflict-will-rile-energy-markets-not-break-them/)、[CSIS](https://www.csis.org/analysis/what-does-iran-war-mean-global-energy-markets)、[BEA Personal Income and Outlays](https://www.bea.gov/news/2026/personal-income-and-outlays-january-2026)、[Treasury Debt to the Penny](https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?sort=-record_date&page%5Bsize%5D=1)、[Treasury Borrowing Estimate](https://home.treasury.gov/news/press-releases/sb0377)、[FRED DGS10](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS10&cosd=2025-12-01)、[FRED DGS2](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS2&cosd=2025-12-01)、[FRED SP500](https://fred.stlouisfed.org/graph/fredgraph.csv?id=SP500&cosd=2025-12-01)、[FRED VIXCLS](https://fred.stlouisfed.org/graph/fredgraph.csv?id=VIXCLS&cosd=2025-12-01)、[FRED HY OAS](https://fred.stlouisfed.org/graph/fredgraph.csv?id=BAMLH0A0HYM2&cosd=2025-12-01)、[FRED Brent](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DCOILBRENTEU&cosd=2025-12-01)、[Stooq XAU/USD](https://stooq.com/q/d/l/?s=xauusd&i=d)、[Stooq USD/TWD](https://stooq.com/q/d/l/?s=usdtwd&i=d)、[Stooq TAIEX](https://stooq.com/q/d/l/?s=%5Etwse&i=d)*
*市場數據截至：2026-03-09（Brent） / 2026-03-12（美債、VIX、HY OAS） / 2026-03-13（S&P 500、黃金、USD/TWD、台股加權）*
*本文僅供參考，不構成投資建議。*
