---
layout: post
title: "停滯性通膨信號浮現：GDP 暴跌至 1.4%，通膨卻死守不退"
date: 2026-02-20 08:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, fed, bonds, volatility]
lang: zh-TW
---

## 總經快照

聯準會 (Fed) 維持利率於 3.5%–3.75% 不變，點陣圖中位數顯示 2026 年僅剩一次降息空間。第四季國內生產毛額 (GDP) 年化成長率僅 [1.4%](https://www.bea.gov/data/gdp/gross-domestic-product)，遠低於市場預期的 3.0%，而核心個人消費支出 (Core PCE) 12 月數據不降反升至 [3.0%](https://www.bea.gov/news/2026/personal-income-and-outlays-december-2025)。成長暴跌、通膨加速——停滯性通膨 (stagflation) 的經典劇本正在成形。

## 重點發展

### 成長引擎熄火

Q4 GDP 從 Q3 的 2.1% 驟降至 1.4%，是 2023 年以來最差的單季表現。消費者支出成長從 3.2% 降至 [1.8%](https://www.bea.gov/data/gdp/gross-domestic-product)，企業固定投資季減 0.3%。值得注意的是，淨出口拖累了 0.7 個百分點——這與美元走強及全球需求疲軟直接相關。歐洲央行 (ECB) 維持利率不變，歐元區 Q4 成長僅 0.1%；日本央行 (BOJ) 則逆勢升息至 [0.75%](https://www.boj.or.jp/en/mopo/mpmdeci/index.htm)，推升日圓、壓縮日本出口，連帶影響亞洲供應鏈需求。全球同步放緩正在發生。

### 通膨的黏性超乎預期

消費者物價指數 (CPI) 年增率為 [2.4%](https://www.bls.gov/news.release/cpi.nr0.htm)，看似溫和，但核心 PCE 12 月不降反升至 [3.0%](https://www.bea.gov/news/2026/personal-income-and-outlays-december-2025)，重新突破 3% 關卡。住房成本年增 4.1% 仍是最大推手，而食品與能源的壓力正因伊朗荷莫茲海峽危機與歐盟禁俄氣政策而重新升溫。布蘭特原油從 1 月低點 65 美元反彈至 [約 71 美元](https://www.reuters.com/business/energy/)，若荷莫茲海峽封鎖時間延長，能源通膨將再度惡化。這不只是美國的問題——全球能源供給正同時受到地緣政治的多重擠壓。

### 聯準會的兩難困境

聯準會的處境極為尷尬：降息可能刺激已經頑固的通膨，不降息則讓疲弱的經濟雪上加霜。2 月 [FOMC 會議紀要](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)顯示，多數委員對通膨回落「缺乏信心」，但同時承認經濟下行風險正在累積。市場目前定價 6 月降息機率約 45%，但若 Q1 GDP 持續低迷，這個機率會迅速攀升。問題是——如果通膨同時反彈呢？

### 防禦性輪動已經開始

資金正在用腳投票。公用事業類股 ETF (XLU) 本月領漲，而科技股 (XLK) 與非必需消費 (XLY) 明顯落後。債券基金上週流入 [290 億美元](https://www.reuters.com/markets/us/)，國際股票基金流入 160 億美元——資金正從美國成長股流向防禦性資產與海外市場。VIX 雖僅 [14.90](https://www.cboe.com/tradable_products/vix/)，處於歷史低位區間，但這反而令人擔憂：市場的自滿往往在最不該自滿的時候出現。

### 筆記

我認為市場嚴重低估了停滯性通膨的風險。GDP 連續兩季放緩、核心 PCE 不降反升突破 3.0%、全球能源地緣風險同步升溫——這個組合在歷史上從未帶來好結果。VIX 在 15 以下意味著選擇權市場定價幾乎沒有尾部風險，這是錯的。什麼會證明我錯？如果 Q1 GDP 反彈至 2.5% 以上，同時核心 PCE 回落至 2.5% 以下，那停滯性通膨敘事就不成立。但目前的數據不支持這個情境。

## 市場數據圖表

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart1"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart1'), {
  type: 'bar',
  data: {
    labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025'],
    datasets: [
      {
        label: 'GDP 年化成長率 (%)',
        data: [2.4, 2.8, 2.1, 1.4],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      },
      {
        label: '核心 PCE 年增率 (%)',
        data: [2.7, 2.6, 2.8, 3.0],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'GDP 成長放緩 vs 通膨頑固（資料來源：BEA）',
        color: '#e2e8f0',
        font: { size: 14 }
      },
      legend: { labels: { color: '#94a3b8' } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: {
        ticks: { color: '#94a3b8' },
        grid: { color: 'rgba(255,255,255,0.1)' },
        min: 0,
        max: 4
      }
    }
  }
});
</script>

## ETF 影響分析

### 股票類

- **SPY**（SPDR S&P 500 ETF）：現價約 [$684](https://finance.yahoo.com/quote/SPY/)，52 週高點 $700 附近、低點 $560。若停滯性通膨敘事強化，下行空間至 $620–640（-6% 至 -9%）；若 Q1 數據反彈，上行空間有限至 $700–710（+2% 至 +4%）。風險報酬比偏空。
- **XLU**（公用事業 ETF）：防禦性資金首選，本月表現領先大盤。在停滯性通膨環境中，穩定股息與低 beta 是避風港。上行空間 +5–8%。
- **XLK**（科技 ETF）：高估值科技股在利率維持高位時最脆弱。若 10Y 殖利率重回 4.5%，XLK 下行風險 -8% 至 -12%。

### 債券類

- **TLT**（20 年以上美國國債 ETF）：現價約 [$89.55](https://finance.yahoo.com/quote/TLT/)，52 週範圍 $82–$100。若衰退擔憂升溫且聯準會被迫降息，上行空間至 $95–100（+6% 至 +12%）。但若通膨反彈，TLT 可能回測 $84。
- **TIPS**（抗通膨債券 ETF）：在通膨黏性環境中，TIPS 優於名目公債。損益兩平通膨率 (breakeven) 若從目前 2.3% 升至 2.6%+，TIPS 將跑贏 TLT。

### 替代資產

- **GLD**（黃金 ETF）：金價已飆升至 [$5,061/oz](https://www.reuters.com/markets/commodities/gold/)，52 週漲幅驚人。停滯性通膨 + 地緣風險是黃金的完美風暴。但在這個價位追高風險極大——若地緣緊張緩和，回檔 10–15% 很正常。
- **DBC**（商品指數 ETF）：能源與農產品在通膨環境中受惠，但全球需求放緩是逆風。中性偏多。

## 後續觀察重點

1. **3 月 7 日非農就業報告 (NFP)**：若失業率從 4.3% 續升至 4.5%+，衰退擔憂將急劇升溫
2. **3 月 12 日 CPI 數據**：核心 CPI 是否突破 3.0% 將決定停滯性通膨敘事的強度
3. **荷莫茲海峽局勢**：伊朗 10–15 天最後通牒期限將至，若封鎖升級，油價可能衝破 80 美元

---

*資料來源：[BEA](https://www.bea.gov/data/gdp/gross-domestic-product)、[BLS](https://www.bls.gov/news.release/cpi.nr0.htm)、[Federal Reserve](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)、[Reuters](https://www.reuters.com/markets/)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
