---
layout: post
title: "50 個百分點的裂縫：軟體崩跌與能源狂飆背後的三條獨立因果鏈"
date: 2025-02-24 18:00:00 +0800
categories: [macro]
tags: [macro, rotation, ai, tariff]
macro_kind: long
description: "截至 2025-02-24，軟體與能源板塊績效裂口逼近 50 個百分點。這不是單一故事，而是三條互不相干、卻在同一時間疊加的因果鏈。"
lang: zh-TW
---

## 先修正時間軸：這篇是 2025-02-24 版本

不是 2/3 的快照，而是 **2025-02-24 收盤後** 的重寫版。

2 月 3 日是觸發點，不是結論。真正需要記帳的是 2/3 到 2/24 這三週：軟體板塊持續被重估，能源板塊持續吸金，兩者績效裂口沒有收斂，反而固化成「市場用不同折現率看待兩種現金流」的結果。

## 三條獨立因果鏈

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>離散度 (Dispersion)</strong>：衡量板塊與個股之間報酬差距。離散度愈高，選板塊比猜大盤更重要。<br>
<strong>座位壓縮 (Seat Compression)</strong>：AI agent 取代部分人力工作流，壓縮 SaaS 以「人頭授權」為核心的營收增長。<br>
<strong>P/S（市銷率）</strong>：市場願意為每 1 元營收付出的估值倍數。
</aside>

**第一條：AI 對軟體商業模式的折價重估。**  
市場擔心的不是「AI 讓軟體消失」，而是「AI 讓單位工作流程需要的軟體座位數下降」，導致成長天花板下修。這條鏈的核心變數不是發布會，而是企業採購行為：  
1. 新增 seat 是否放緩。  
2. 續約價格是否被壓。  
3. 套餐升級是否從「加人頭」改成「加算力」。  

**第二條：估值均值回歸。**  
軟體先前享受的是低利率時代的高久期估值，能源享受的是現金流可見度提高與資本紀律。當實質利率維持高位，市場自然把估值權重從「遠期成長」搬到「當期自由現金流」。  
這條鏈不需要戲劇性新聞就會發生，因此往往最持久。

**第三條：地緣與能源安全溢價。**  
能源股的超額報酬有一部分來自供應風險與政策風險溢價。這是最容易逆轉的一條鏈，因為它受事件驅動；一旦風險降溫，估值可在很短時間回吐。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart1"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart1'), {
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

三條鏈裡，**截至 2025-02-24 我仍把第二條（估值均值回歸）放在第一順位**。理由很簡單：  
1. 它最不需要新增假設。  
2. 它與利率環境直接連動。  
3. 它可以同時解釋「軟體被壓估值」和「能源被給溢價」。  

第一條（AI 座位壓縮）不是假的，但目前更像「預期先走、基本面後驗證」。  
第三條（地緣溢價）不是不重要，而是最短週期、最容易反轉。

## 分水嶺（用來追蹤，不用來預言）

如果軟體公司在接下來兩季展現「AI 帶來新收入 > 舊授權流失」，則第一條鏈會從風險敘事轉為成長敘事，估值折價有機會收斂。  

如果美債實質利率下行，且市場重新接受長久期資產定價，軟體估值修復速度會快於能源。  

如果原油地緣風險溢價下降，能源板塊的防禦溢價將先收斂，屆時裂口可能由 50 個百分點往下壓縮。  

## 結語

> **核心判斷（2025-02-24 版）：** 這道 50 個百分點裂縫不是「單一黑天鵝」造成，而是三條獨立因果鏈同時成立。當前最穩固的是估值均值回歸；最具爭議的是 AI 座位壓縮；最短週期的是地緣防禦輪動。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 軟體板塊營收與續約率 | 續約率不降、AI 相關 ARPU 上升 | 未來 1-2 季財報 | 第一條鏈弱化，軟體折價可望收斂 |
| 實質利率 | 持續下行並穩定 | 4-8 週 | 第二條鏈反轉，長久期估值修復 |
| 原油風險溢價 | 快速回落 | 事件後 1-4 週 | 第三條鏈鬆動，能源相對優勢下降 |

關鍵觀察變數：（一）企業軟體採購結構是「買更多 seat」還是「買更多 token/算力」；（二）利率路徑對久期估值的再定價；（三）地緣風險對能源現金流折現率的影響。

---

*資料來源：[Yahoo Finance](https://finance.yahoo.com/)、[Cboe DSPX](https://www.cboe.com/tradable_products/sp_500/sp_500_options/dispersion/)、[FRED](https://fred.stlouisfed.org/)、[EIA](https://www.eia.gov/)*
*市場數據截至：2025-02-24*
*本文僅供參考，不構成投資建議。*
