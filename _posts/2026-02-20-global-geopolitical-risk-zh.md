---
layout: post
title: "四面楚歌：荷莫茲海峽、日銀升息、歐盟禁俄氣、台海風險同步升溫"
date: 2026-02-20 10:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, middleeast, europe, china, taiwan]
lang: zh-TW
---

## 國際政經背景

全球地緣政治風險正在多條戰線同時升溫。伊朗在荷莫茲海峽 (Strait of Hormuz) 進行實彈軍演，美國總統川普隨即發出 [10–15 天最後通牒](https://www.cnbc.com/2026/02/20/oil-prices-trump-us-iran-conflict-strikes-energy.html)要求伊朗同意核協議；日本央行 (BOJ) 去年 12 月升息至 [0.75%](https://www.boj.or.jp/en/mopo/mpmdeci/index.htm)，創 30 年新高；歐盟 (EU) 禁止俄羅斯天然氣的時程確定——液化天然氣 (LNG) 4 月 25 日、管道天然氣 [6 月 17 日](https://www.consilium.europa.eu/en/press/)全面禁運；而台灣海峽的軍事活動頻率創近年新高，為台積電 (TSMC) 的全球半導體供應鏈蒙上陰影。這四條地緣斷層線正在同時活化，而市場的恐慌指數 VIX 卻僅有 [14.90](https://www.cboe.com/tradable_products/vix/)。

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

### 歐盟禁俄氣：能源安全的代價

歐盟確定俄羅斯天然氣分階段禁令：[短期 LNG 合約 4 月 25 日起禁止、短期管道天然氣合約 6 月 17 日起禁止](https://www.consilium.europa.eu/en/press/press-releases/2026/01/26/russian-gas-imports-council-gives-final-greenlight-to-a-stepwise-ban/)，長期合約則分別延至 2027 年 1 月及 9 月。雖然歐洲已大幅降低對俄氣依賴（從 2021 年的 40% 降至約 [15%](https://ec.europa.eu/eurostat/web/energy/publications)），但完全斷絕仍將推升歐洲 TTF 天然氣價格 20–30%。德國與義大利的工業生產將受衝擊最大，歐元區經濟在已接近零成長的狀態下雪上加霜。傳導路徑：禁運 → 天然氣價格上漲 → 歐洲工業成本上升 → 歐元走弱 → 美元被動走強 → 新興市場壓力。

### 台海風險：半導體供應鏈的終極威脅

中國軍機繞台頻率 2 月來持續升溫，單日最高達 [14 架次](https://www.globalsecurity.org/wmd/library/news/taiwan/2026/taiwan-260215-roc-mnd01.htm)，台灣國防部提高警戒層級。台積電占全球先進製程晶片 [超過 90%](https://www.semiconductors.org/) 的市場份額——任何台海衝突都將造成估計 [2.5 兆美元](https://www.bloomberg.com/news/) 的全球 GDP 損失。即使僅是封鎖演習（類似 2022 年），也足以讓半導體類股暴跌 10–15%，並打斷全球 AI 資本支出計畫。傳導路徑：台海緊張 → 半導體供應恐慌 → 科技股重挫 → AI 投資延遲 → 全球成長下修。

### 筆記

四條地緣斷層線同時活化，但 VIX 僅 14.90——這是歷史性的錯誤定價。市場習慣逐一消化風險，但目前的情境是多重風險同時爆發的可能性不為零。我認為地緣政治風險溢價被嚴重低估，尤其是川普對伊朗的最後通牒即將到期。什麼會證明我錯？如果伊朗在最後通牒到期前同意核協議框架，同時台海緊張在 3 月後降溫——那 VIX 在 15 以下就是合理的。但目前看來，四條戰線中只要有一條失控，就足以觸發全球性的風險重估。

## 投資影響

- **XLE**（能源 ETF）：荷莫茲危機的直接受惠者。油價若衝至 $80+，XLE 上行 +8–12%。但若危機迅速解決，回吐風險 -5%。
- **EWJ**（日本 ETF）：BOJ 升息壓制日股，日圓升值進一步侵蝕出口商利潤。短期偏空，下行 -5–8%。
- **VGK**（歐洲 ETF）：禁俄氣政策將壓制歐洲工業復甦。能源密集型產業（化工、鋼鐵）受衝擊最大。下行 -3–6%。
- **SMH**（半導體 ETF）：台海風險的直接曝險。任何封鎖演習都可能導致 -10–15% 的急跌。但長期 AI 需求仍支撐基本面。
- **GLD**（黃金 ETF）：四重地緣風險是黃金的完美催化劑。金價 $5,061 已部分反映風險，但在多重危機情境下，$5,500+ 不是不可能。
- **VIXY**（VIX 短期期貨 ETF）：若任一地緣風險升級，VIX 從 14.90 躍升至 25+ 的空間極大。作為尾部風險對沖，成本效益極高。

## 後續觀察

1. **川普對伊朗最後通牒到期（3 月初）**：伊朗同意核協議 vs 美國加碼制裁/軍事行動——這是近期最大的二元風險事件
2. **BOJ 4 月利率決議**：若再度升息至 1.0%，套利交易平倉壓力將進一步加劇
3. **歐盟 LNG 禁令生效（4 月 25 日）**：TTF 天然氣價格的實際反應將決定歐洲經濟衝擊程度
4. **台灣海峽監控**：3 月的軍事活動頻率是否持續升級——超過每日 20 架次或出現大規模登陸演習將是重大警訊

---

*資料來源：[Reuters](https://www.reuters.com/world/)、[BOJ](https://www.boj.or.jp/en/mopo/mpmdeci/index.htm)、[EU Council](https://www.consilium.europa.eu/en/press/)、[EIA](https://www.eia.gov/todayinenergy/)、[SIA](https://www.semiconductors.org/)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
