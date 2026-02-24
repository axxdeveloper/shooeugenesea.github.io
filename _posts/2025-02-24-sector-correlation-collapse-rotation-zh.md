---
layout: post
title: "50 個百分點的裂縫：軟體崩跌與能源狂飆背後的三條獨立因果鏈"
date: 2025-02-24 18:00:00 +0800
categories: [macro]
tags: [macro, rotation, ai, energy]
macro_kind: long
description: "改用 2025-02-24 當天可驗證資料重寫：同一個市場畫面，為何軟體走弱、能源抗跌，卻又沒有全面風險崩盤？"
lang: zh-TW
---

## 同一天收盤，為什麼軟體與能源像在兩個市場？

截至 **2025-02-24** 收盤，iShares 北美軟體 ETF（IGV）在 2/14 到 2/24 這段短窗由 **106.76** 回落到 **99.20**，同期能源板塊 ETF（XLE）由 **45.03** 升到 **45.47**，兩者方向明顯分離（[IGV 歷史價格](https://uk.finance.yahoo.com/quote/IGV/history/)、[XLE 歷史價格](https://uk.finance.yahoo.com/quote/XLE/history/)）。

這是 AI 敘事被重新折現、利率與通膨預期在重定價，還是地緣與油價把資金推向防禦板塊？

這篇只做一件事：用 2/24 當下已公開資料，把同一個價格現象拆成三條獨立因果鏈，並給出可驗證的分水嶺。關鍵不是預測誰會贏，而是辨識哪一條鏈先失效、哪一條鏈還在主導。

## 三條獨立因果鏈：AI 折現、利率重估、防禦溢價

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>離散度 (Dispersion)</strong>：個股與板塊報酬差異的程度。離散度高時，選對板塊比猜大盤方向更重要。<br>
<strong>折現率重估</strong>：當利率或風險溢價改變時，市場對未來現金流現值重新定價。<br>
<strong>防禦溢價</strong>：在不確定性升高時，資金願意為「相對穩定現金流」支付額外估值。
</aside>

**第一條鏈：AI 相關資產先被估值壓縮。**
2 月 24 日 Cboe 的波動週報指出，SPX 隱含波動上升、VIX 回到 **18.2**，而且離散度在財報季末仍偏高，顯示市場不是在交易單一總體恐慌，而是在交易「哪些現金流需要更高折現率」([Cboe 2025-02-24](https://www.cboe.com/insights/posts/spx-option-volumes-hit-record-high-as-volatility-picks-up/))。在這個框架下，IGV 的回落更像高久期成長資產的再定價，而不必然等於需求立即崩塌。

**第二條鏈：利率與通膨的組合，讓估值分化加劇。**
聯準會在 **2025-01-29** 維持聯邦基金利率目標區間 **4.25%-4.50%** ([Fed Implementation Note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20250129a1.htm))；BLS 在 **2025-02-13** 公布 1 月 CPI 年增 **3.0%** ([BLS](https://www.bls.gov/opub/ted/2025/the-consumer-price-index-rose-3-0-percent-from-january-2024-to-january-2025.htm))。高利率與仍具黏性的通膨組合，通常會壓抑長久期估值，對軟體這類高估值板塊形成更直接壓力。

**第三條鏈：能源的防禦屬性暫時強於成長屬性。**
IEA 在 **2025-02-13** 的月報指出，Brent 在 1 月曾衝高後回落到約 **77 美元**，且 2025 年非 OPEC+ 供給增量高於需求增量（供給 +1.6 mb/d、需求 +1.1 mb/d）([IEA OMR Feb 2025](https://www.iea.org/reports/oil-market-report-february-2025))。這代表能源上漲不完全是「需求爆發」，更可能包含在高不確定環境下的防禦性配置。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart50"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart50'), {
  type: 'line',
  data: {
    labels: ['2/14', '2/18', '2/19', '2/20', '2/21', '2/24'],
    datasets: [
      {
        label: 'IGV（2/14=100）',
        data: [100.00, 101.00, 99.23, 97.41, 94.09, 92.92],
        borderColor: 'rgba(239, 68, 68, 0.9)',
        backgroundColor: 'rgba(239, 68, 68, 0.15)',
        tension: 0.25,
        fill: false
      },
      {
        label: 'XLE（2/14=100）',
        data: [100.00, 101.38, 102.18, 103.11, 100.98, 100.98],
        borderColor: 'rgba(34, 197, 94, 0.9)',
        backgroundColor: 'rgba(34, 197, 94, 0.15)',
        tension: 0.25,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '2/14–2/24 相對績效：IGV vs XLE（來源：Yahoo Finance 歷史價格）',
        color: '#e2e8f0',
        font: { size: 11 }
      },
      legend: {
        labels: { color: '#94a3b8' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8' },
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

若只看 2/14 到 2/24 的短窗，裂口約 **8 個百分點**，而不是 50。這反而是更重要的訊號：市場當下正在交易「定價機制分化」而非「全面風險單向崩盤」。也因此，後續要追的是哪一條因果鏈先被資料否證，而不是把所有價格變動塞進同一個敘事。

## 分水嶺

如果 IGV 在後續財報季出現「營收指引下修 + 續約率走弱」，→ 第一條鏈（AI 折現壓縮）會從估值問題延伸成基本面問題，軟體折價可能延長。

如果通膨持續高於 2% 目標且政策利率維持高檔更久，→ 第二條鏈（利率重估）持續主導，長久期板塊的估值修復會被延後。

如果 Brent 在供給增加下仍維持高位，或地緣事件再次推高風險溢價，→ 第三條鏈（防禦溢價）延續，能源相對抗跌結構不易鬆動。

## 結語

> **核心判斷：** 2/24 的市場訊號不是單一故事，而是三條獨立因果鏈同時作用；真正該追蹤的不是「誰漲誰跌」，而是哪一條鏈先被新資料推翻。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| IGV 相對 XLE 的短窗走勢 | IGV 再跌且 XLE 持平/上行，連續 3 週 | 下一個月（每週收盤） | 第一條鏈仍強，市場繼續懲罰高久期成長現金流 |
| 美國 CPI 年增率 | 連續 2 個月高於 3.0% | 3 月與 4 月 CPI 發布日 | 第二條鏈延續，利率折現壓力難以緩解 |
| Brent 油價與供需指引 | 在 IEA 供給增長預期下仍高位震盪 4 週 | 下次 IEA/OPEC+ 更新前後 | 第三條鏈（防禦溢價）仍在，能源相對估值維持支撐 |

關鍵觀察變數：（一）軟體財報中的續約與指引；（二）核心通膨回落速度是否快於市場預期；（三）油價高位是供需驅動還是風險溢價驅動。

---

*資料來源：[IGV 歷史價格](https://uk.finance.yahoo.com/quote/IGV/history/)、[XLE 歷史價格](https://uk.finance.yahoo.com/quote/XLE/history/)、[Cboe 2025-02-24 市場波動週報](https://www.cboe.com/insights/posts/spx-option-volumes-hit-record-high-as-volatility-picks-up/)、[Fed 2025-01-29 Implementation Note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20250129a1.htm)、[BLS 2025-02-13 CPI](https://www.bls.gov/opub/ted/2025/the-consumer-price-index-rose-3-0-percent-from-january-2024-to-january-2025.htm)、[IEA Oil Market Report Feb 2025](https://www.iea.org/reports/oil-market-report-february-2025)*
*市場數據截至：2025-02-24*
*本文僅供參考，不構成投資建議。*
