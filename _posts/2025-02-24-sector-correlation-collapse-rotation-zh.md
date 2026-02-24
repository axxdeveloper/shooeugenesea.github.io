---
layout: post
title: "50 個百分點的裂縫：軟體崩跌與能源狂飆背後的三條獨立因果鏈"
date: 2025-02-24 18:00:00 +0800
categories: [macro]
tags: [macro, rotation, ai, energy]
macro_kind: long
description: "截至 2025-02-24，軟體與能源板塊績效裂口逼近 50 個百分點。重點不在 2/3 的單日波動，而在三週後仍未收斂的三條獨立因果鏈。"
lang: zh-TW
---

## 裂口不是 2/3 的瞬間，而是 2/24 的存量

2 月 3 日是觸發點，但不是終點。到了 **2025-02-24**，軟體與能源的相對績效裂口仍接近 **50 個百分點**，而且發生在大盤並未同步崩跌的背景下（[S&P 500](https://finance.yahoo.com/quote/%5EGSPC/)、[IGV](https://finance.yahoo.com/quote/IGV/)、[XLE](https://finance.yahoo.com/quote/XLE/)）。

這道裂口，究竟是 AI 商業模式被重估、利率驅動的估值均值回歸，還是地緣風險把能源防禦溢價推到極端？

這篇重寫版只回答這一個問題：把同一個價格現象拆成三條互不相依的因果鏈，並用可驗證的觀察門檻判斷哪一條鏈正在主導。下一個關鍵驗證點不是評論，而是後續財報與利率路徑是否同時支持當前定價。

## 同一條價格裂縫，三條互不相依的因果鏈

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>離散度 (Dispersion)</strong>：衡量板塊與個股之間報酬差距。離散度愈高，選板塊比猜大盤更重要。<br>
<strong>座位壓縮 (Seat Compression)</strong>：AI agent 取代部分人力工作流，壓縮 SaaS 以「人頭授權」為核心的營收增長。<br>
<strong>P/S（市銷率）</strong>：市場願意為每 1 元營收付出的估值倍數。
</aside>

**第一條鏈：AI 座位壓縮的預期定價。**  
市場擔心的不是「AI 讓軟體消失」，而是「AI 讓同一份工作需要更少 seat」，使 SaaS 以人頭計價的成長斜率下修。這條鏈目前最像「預期先行」：價格先反應，營收數據後驗證。觀察重點不是單一產品發表，而是企業採購行為是否同時出現三件事：  
1. 新增 seat 是否放緩。  
2. 續約價格是否被壓。  
3. 套餐升級是否從「加人頭」改成「加算力」。  

**第二條鏈：利率環境下的估值均值回歸。**  
這條鏈不需要戲劇性新聞就會發生。只要長端殖利率維持高位（[UST 10Y](https://fred.stlouisfed.org/series/DGS10)），高久期板塊就會被更高折現率壓縮，而現金流可見度較高、資本支出紀律更穩定的板塊（如能源）容易獲得相對估值支持。這能同時解釋軟體被壓估值與能源被給溢價，而且最不依賴單一敘事。

**第三條鏈：地緣事件推升能源安全溢價。**  
能源股的超額報酬有一部分來自風險溢價而非純粹供需基本面。當油價因地緣事件維持強勢（[Brent](https://finance.yahoo.com/quote/BZ%3DF/)），資金會把能源視為「事件期現金流避風港」。但這也是三條鏈中最短週期的一條：一旦風險降溫，溢價可在短時間內回吐。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart50"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart50'), {
  type: 'bar',
  data: {
    labels: ['能源 (XLE)', '工業 (XLI)', 'S&P 500', '科技 (XLK)', '軟體 (IGV)'],
    datasets: [{
      label: 'YTD 2025 績效 (%)',
      data: [22.8, 11.9, 1.1, -4.2, -26.7],
      backgroundColor: [
        'rgba(74, 222, 128, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(156, 163, 175, 0.7)',
        'rgba(250, 204, 21, 0.7)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderColor: [
        'rgba(74, 222, 128, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(156, 163, 175, 1)',
        'rgba(250, 204, 21, 1)',
        'rgba(239, 68, 68, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '2025 YTD 板塊績效：50 個百分點的裂縫（來源：Yahoo Finance, 截至 2/24）',
        color: '#e2e8f0',
        font: { size: 11 }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: {
          color: '#94a3b8',
          callback: function(v) { return v + '%'; }
        },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  }
});
</script>

截至 2025-02-24，三條鏈裡最被數據支持的是第二條。理由是它最少假設、可重複驗證，且與利率路徑高度一致。第一條不是錯，而是仍在等財報與採購數據完成驗證；第三條不是弱，而是事件驅動特性使其可持續性最低。這也是為什麼同一個市場裂口，不能只用單一敘事解釋。

## 分水嶺

如果軟體公司在後續兩季財報同時呈現「續約率穩定 + AI 帶來新增 ARPU」，→ 第一條鏈會從折價敘事轉為再成長敘事，軟體估值壓縮有機會收斂。  

如果 10 年期殖利率中樞回落並維持數週，→ 第二條鏈開始鬆動，長久期板塊估值修復速度可能快於能源。  

如果油價風險溢價在無供需崩壞下快速回吐，→ 第三條鏈先失速，能源相對優勢將明顯下降，板塊裂口會先由價格端收斂。  

## 結語

> **核心判斷：** 50 個百分點的板塊裂口不是單一事件，而是三條獨立因果鏈的疊加定價；目前最穩的是估值均值回歸，最需要後續驗證的是 AI 座位壓縮。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 軟體板塊續約與 ARPU | 連續兩季「續約率不降且 AI 相關 ARPU 年增轉正」 | 下一個兩季財報窗口（Q1、Q2） | 第一條鏈由折價轉為成長驗證，軟體估值壓縮邏輯需重估 |
| 10 年期公債殖利率 | 跌破 4.0% 並連續維持 4 週 | 4-8 週觀察 + 下次 FOMC 前 | 第二條鏈轉弱，久期估值修復的機率提升 |
| Brent 風險溢價 | 油價回落且連續 3 週未回升 | 1-2 個月 + 下次 OPEC+ 會議後 | 第三條鏈鬆動，能源防禦溢價需重估 |

關鍵觀察變數：（一）企業軟體採購是增加 seat 還是增加 token/算力；（二）長端利率是否脫離高位平台；（三）油價中的地緣溢價比例是否下降。

---

*資料來源：[Yahoo Finance](https://finance.yahoo.com/)、[IGV](https://finance.yahoo.com/quote/IGV/)、[XLE](https://finance.yahoo.com/quote/XLE/)、[S&P 500](https://finance.yahoo.com/quote/%5EGSPC/)、[Brent](https://finance.yahoo.com/quote/BZ%3DF/)、[Cboe DSPX](https://www.cboe.com/tradable_products/sp_500/sp_500_options/dispersion/)、[FRED 10Y Yield](https://fred.stlouisfed.org/series/DGS10)*
*市場數據截至：2025-02-24*
*本文僅供參考，不構成投資建議。*
