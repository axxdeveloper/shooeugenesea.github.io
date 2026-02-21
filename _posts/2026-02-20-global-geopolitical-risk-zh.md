---
layout: post
title: "四條地緣變數同時上行：油價、日圓、歐洲能源與半導體供應鏈"
date: 2026-02-20 10:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, middleeast, europe, china, taiwan]
description: "美伊緊張、BOJ 升息、歐盟俄氣退場與台海風險同步推升市場不確定性。本文以可驗證數據拆解四條傳導路徑，提供基準/上行/下行情境的 ETF 配置參考。"
lang: zh-TW
---

## 國際政經背景

全球地緣政治風險正在多條戰線同時升溫。伊朗在荷莫茲海峽 (Strait of Hormuz) 進行實彈軍演，美國總統川普隨即發出 [10–15 天最後通牒](https://www.cnbc.com/2026/02/20/oil-prices-trump-us-iran-conflict-strikes-energy.html)要求伊朗同意核協議；日本央行 (BOJ) 去年 12 月升息至 [0.75%](https://www.boj.or.jp/en/mopo/mpmdeci/index.htm)；歐盟 (EU) 對俄氣的退場時程已進入執行階段（例如 [短期合約的禁令節點](https://www.consilium.europa.eu/en/press/press-releases/2026/01/26/russian-gas-imports-council-gives-final-greenlight-to-a-stepwise-ban/)）；而台灣海峽的軍事活動頻率仍在高位，為台積電 (TSMC) 的全球半導體供應鏈帶來不確定性。這四條風險線同時存在，而市場的恐慌指數 VIX 仍在 [19.20](https://www.cboe.com/tradable_products/vix/) 附近。

## 經濟傳導機制

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart3"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart3'), {
  type: 'bar',
  data: {
    labels: ['荷莫茲海峽\n(油價衝擊)', '日銀升息\n(套利交易平倉)', '歐盟禁俄氣\n(天然氣價格)', '台海風險\n(半導體供應)'],
    datasets: [{
      label: '估計經濟衝擊（十億美元）',
      data: [180, 120, 95, 250],
      backgroundColor: [
        'rgba(239, 68, 68, 0.7)',
        'rgba(251, 191, 36, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(168, 85, 247, 0.7)'
      ],
      borderColor: [
        'rgba(239, 68, 68, 1)',
        'rgba(251, 191, 36, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(168, 85, 247, 1)'
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
        text: '四大地緣風險的估計全球經濟衝擊（資料來源：Reuters, IMF 估算）',
        color: '#e2e8f0',
        font: { size: 13 }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + 'B'; } },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.1)' } }
    }
  }
});
</script>

### 荷莫茲海峽：全球油價的咽喉

全球約 [20% 的石油](https://www.eia.gov/todayinenergy/)經由荷莫茲海峽運輸，每日通行量約 2,100 萬桶。伊朗 2 月 17 日在海峽進行[實彈演習](https://www.cnbc.com/2026/02/17/iran-us-strait-of-hormuz-oil-nuclear-talks-geneva.html)，短暫關閉部分航道，推升布蘭特原油從 1 月低點 $65 反彈至 [$71](https://www.reuters.com/business/energy/)，WTI 報 $66.70。川普 2 月 19 日發出 [10–15 天最後通牒](https://www.cnbc.com/2026/02/20/oil-prices-trump-us-iran-conflict-strikes-energy.html)，要求伊朗在期限內同意核協議，否則面臨更嚴厲制裁。若談判破裂且伊朗以全面封鎖反制，布蘭特可能飆至 $90–100，直接推升全球 CPI 0.5–0.8 個百分點。傳導路徑：軍事對峙升級 → 海峽通行風險 → 油價飆升 → 運輸成本激增 → 全球通膨回升 → 央行被迫維持緊縮。

### 日銀升息：套利交易的定時炸彈

BOJ 去年 12 月升息至 0.75%，創 1995 年以來的 [30 年新高](https://www.cnbc.com/2025/12/19/bank-of-japan-boj-rate-cpi-inflation-takaichi-ueda.html)，正式結束長達數十年的超低利率時代。日圓套利交易 (carry trade) 的規模估計超過 [4 兆美元](https://www.reuters.com/markets/currencies/)，而每一次日圓升值都迫使套利部位平倉。2024 年 8 月的「日圓套利交易崩盤」導致全球股市單日暴跌 3%——那時 BOJ 僅升至 0.25%。現在 0.75%，且市場預期 BOJ 年底可能達到 1.0%。傳導路徑：BOJ 升息 → 日圓升值 → 全球套利部位平倉 → 新興市場與高收益資產拋售。

### 歐盟俄氣退場：能源安全的代價

歐盟對俄羅斯天然氣採取分階段退場，[短期 LNG 與管線合約先行限制、長約再延後收緊](https://www.consilium.europa.eu/en/press/press-releases/2026/01/26/russian-gas-imports-council-gives-final-greenlight-to-a-stepwise-ban/)。雖然歐洲已大幅降低對俄氣依賴（從 2021 年的 40% 降至約 [15%](https://ec.europa.eu/eurostat/web/energy/publications)），但供應再配置仍可能推升歐洲 TTF 天然氣價格並抬高工業成本。德國與義大利等工業比重較高的經濟體受影響較大。傳導路徑：供應重配 → 天然氣價格上行 → 工業成本上升 → 歐元區成長承壓。

### 台海風險：半導體供應鏈的終極威脅

中國軍機繞台頻率 2 月來持續升溫，單日最高達 [14 架次](https://www.globalsecurity.org/wmd/library/news/taiwan/2026/taiwan-260215-roc-mnd01.htm)，台灣國防部提高警戒層級。台積電占全球先進製程晶片 [超過 90%](https://www.semiconductors.org/) 的市場份額——任何台海衝突都將造成估計 [2.5 兆美元](https://www.bloomberg.com/news/) 的全球 GDP 損失。即使僅是封鎖演習（類似 2022 年），也足以讓半導體類股暴跌 10–15%，並打斷全球 AI 資本支出計畫。傳導路徑：台海緊張 → 半導體供應恐慌 → 科技股重挫 → AI 投資延遲 → 全球成長下修。

### 筆記

**事實：** 油運咽喉、BOJ 利率政策、歐洲能源政策與台海供應鏈風險同時存在。  
**推論：** 市場並非完全忽視風險，但對「多事件同時發生」的相關性定價仍偏低。

**一句話結論：** 目前較合理的做法是提高組合韌性，而非押注單一危機一定升級。  
**資產配置框架（3-12 個月）：** 保留核心股票部位，增加 `GLD` 與短天期避險比例；半導體與能源採分批策略，避免事件驅動追價。  
**再平衡觸發條件（1-3 年）：** 若地緣風險指標（油運保費、VIX、海峽軍演頻率）連續回落，逐步降低避險；若任一風險線進入制裁或軍事升級，提升現金與防禦性資產。

## 三種情境（12 個月）

- **基準情境（55%）**：多條風險線維持高張但可控，資產價格以震盪消化。**失效條件：** 出現實質封鎖或全面制裁升級。  
- **上行情境（20%）**：外交緩和與能源供給恢復，波動率下行、成長股重獲溢價。**失效條件：** BOJ 或中東局勢意外再度升級。  
- **下行情境（25%）**：任一風險線外溢為供應或金融衝擊，全球風險資產下修。**失效條件：** 主要衝突方達成可執行停火或協議框架。

## 投資影響

- **XLE**（能源 ETF）：荷莫茲危機的直接受惠者。油價若衝至 $80+，XLE 上行 +8–12%。但若危機迅速解決，回吐風險 -5%。
- **EWJ**（日本 ETF）：BOJ 升息壓制日股，日圓升值進一步侵蝕出口商利潤。短期偏空，下行 -5–8%。
- **VGK**（歐洲 ETF）：禁俄氣政策將壓制歐洲工業復甦。能源密集型產業（化工、鋼鐵）受衝擊最大。下行 -3–6%。
- **SMH**（半導體 ETF）：台海風險的直接曝險。任何封鎖演習都可能導致 -10–15% 的急跌。但長期 AI 需求仍支撐基本面。
- **GLD**（黃金 ETF）：四重地緣風險是黃金的完美催化劑。金價 $5,061 已部分反映風險，但在多重危機情境下，$5,500+ 不是不可能。
- **VIXY**（VIX 短期期貨 ETF）：若任一地緣風險升級，VIX 從 19.20 躍升至 25+ 的空間極大。作為尾部風險對沖，成本效益極高。

## 後續觀察

1. **川普對伊朗最後通牒到期（3 月初）**：伊朗同意核協議 vs 美國加碼制裁/軍事行動——這是近期最大的二元風險事件
2. **BOJ 4 月利率決議**：若再度升息至 1.0%，套利交易平倉壓力將進一步加劇
3. **歐盟 LNG 禁令生效（4 月 25 日）**：TTF 天然氣價格的實際反應將決定歐洲經濟衝擊程度
4. **台灣海峽監控**：3 月的軍事活動頻率是否持續升級——超過每日 20 架次或出現大規模登陸演習將是重大警訊

---

*資料來源：[Reuters](https://www.reuters.com/world/)、[BOJ](https://www.boj.or.jp/en/mopo/mpmdeci/index.htm)、[EU Council](https://www.consilium.europa.eu/en/press/)、[EIA](https://www.eia.gov/todayinenergy/)、[SIA](https://www.semiconductors.org/)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
