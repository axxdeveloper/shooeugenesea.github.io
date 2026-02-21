---
layout: post
title: "美伊談判期限下的油市風險：荷莫茲供應路徑與通膨敏感度"
date: 2026-02-21 10:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, middleeast, oil]
description: "美伊在談判期限內的軍事與外交訊號，正影響油價尾部風險定價。本文以基準/上行/下行情境估算 Brent 與 CPI 傳導，並評估 XLE、USO、GLD、VIXY 的配置角色。"
lang: zh-TW
---

## 國際政經背景

美國總統川普 2 月 19 日對伊朗發出 [10–15 天最後通牒](https://www.foxnews.com/politics/trump-says-iran-has-days-reach-deal-face-unfortunate-outcome)，要求德黑蘭同意新核協議，否則將面臨「果斷措施」(decisive measures)。美軍同步向中東投射自 [2003 年伊拉克戰爭以來最大規模的空中與海上兵力](https://www.aljazeera.com/news/2026/2/20/tracking-the-rapid-us-military-build-up-near-iran)——林肯號 (USS Abraham Lincoln) 航母打擊群已在阿拉伯海執行任務，全球最大航母福特號 (USS Gerald R. Ford) 正從加勒比海轉向中東，美國海軍現役部署艦隊的[三分之一](https://gulfnews.com/world/mena/us-navy-makes-staggering-mideast-force-buildup-one-third-of-deployed-fleet-now-aimed-at-iran-1.500445245)已集結該區域，包含 2 個航母打擊群、15 艘驅逐艦及不明數量的潛艦。與此同時，伊朗外長阿拉奇 (Abbas Araghchi) 表示「[我們準備好了外交，也準備好了戰爭](https://fortune.com/2026/02/20/trump-warning-limited-military-strikes-iran-nuclear-program-unanium-enrichment/)」，並聲稱將在 2–3 天內提出協議草案送交華府。最後通牒發出至今已是第 2 天。

## 經濟傳導機制

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart7"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart7'), {
  type: 'bar',
  data: {
    labels: [
      '情境1：外交解決\nBrent $55-60',
      '情境2：維持現狀\nBrent $65-75',
      '情境3：有限打擊\nBrent $80-90',
      '情境4：封鎖海峽\nBrent $100-120'
    ],
    datasets: [{
      label: 'CPI 影響（百分點）',
      data: [-0.2, 0, 0.3, 0.8],
      backgroundColor: [
        'rgba(34, 197, 94, 0.7)',
        'rgba(250, 204, 21, 0.7)',
        'rgba(249, 115, 22, 0.7)',
        'rgba(239, 68, 68, 0.7)'
      ],
      borderColor: [
        'rgba(34, 197, 94, 1)',
        'rgba(250, 204, 21, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(239, 68, 68, 1)'
      ],
      borderWidth: 1
    }, {
      label: '發生機率（%）',
      data: [20, 45, 25, 10],
      backgroundColor: [
        'rgba(34, 197, 94, 0.3)',
        'rgba(250, 204, 21, 0.3)',
        'rgba(249, 115, 22, 0.3)',
        'rgba(239, 68, 68, 0.3)'
      ],
      borderColor: [
        'rgba(34, 197, 94, 0.8)',
        'rgba(250, 204, 21, 0.8)',
        'rgba(249, 115, 22, 0.8)',
        'rgba(239, 68, 68, 0.8)'
      ],
      borderWidth: 1,
      yAxisID: 'y1'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '美伊衝突情境分析：油價與通膨影響（資料來源：EIA, Reuters 估算）',
        color: '#e2e8f0',
        font: { size: 13 }
      },
      legend: {
        labels: { color: '#94a3b8' }
      }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', font: { size: 10 } },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: {
        position: 'left',
        title: { display: true, text: 'CPI 影響（pp）', color: '#94a3b8' },
        ticks: { color: '#94a3b8', callback: function(v) { return (v > 0 ? '+' : '') + v + 'pp'; } },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y1: {
        position: 'right',
        title: { display: true, text: '發生機率（%）', color: '#94a3b8' },
        ticks: { color: '#94a3b8', callback: function(v) { return v + '%'; } },
        grid: { drawOnChartArea: false },
        min: 0,
        max: 60
      }
    }
  }
});
</script>

### 政治事件：最後通牒與軍事包圍

川普的最後通牒是一場典型的「極限施壓」(maximum pressure) 策略升級。核心分歧在於：川普公開立場為「不准濃縮鈾」，但伊朗外長阿拉奇[表示美方在談判中並未正式要求零濃縮](https://fortune.com/2026/02/20/trump-warning-limited-military-strikes-iran-nuclear-program-unanium-enrichment/)，雙方在濃縮權利上仍有巨大落差。阿曼斡旋的日內瓦間接談判被伊朗方面形容為「[取得良好進展](https://www.npr.org/2026/02/20/nx-s1-5720662/trump-warns-bad-things-iran-doesnt-make-deal-second-us-carrier-nears)」，但美方態度明顯冷淡——副總統乃斯稱伊朗未回應核心訴求，核心分歧未縮小。IAEA 理事會會議預計在最後通牒到期前後召開，[時間窗口高度重合](https://www.bloomberg.com/news/articles/2026-02-20/trump-s-iran-ultimatum-sets-stage-for-strike-during-iaea-meeting)，提高了軍事行動的政治掩護空間。同時，胡塞武裝 (Houthis) 領袖阿卜杜勒-馬利克·胡塞 (Abdel-Malik al-Houthi) 2 月 13 日[公開警告](https://www.aljazeera.com/news/2026/2/20/tracking-the-rapid-us-military-build-up-near-iran)，美國若攻擊伊朗，胡塞武裝將全面介入；其政治局成員布凱提 (Mohammed al-Bukhaiti) 更直言「攻擊伊朗等於中東全面戰爭」。

### 經濟傳導：荷莫茲海峽是全球能源的咽喉

全球約 [20% 的石油](https://www.eia.gov/todayinenergy/detail.php?id=65504)——每日約 2,100 萬桶——經由荷莫茲海峽運輸。伊朗 2 月 17 日的「[智慧控制荷莫茲海峽](https://www.cnbc.com/2026/02/17/iran-us-strait-of-hormuz-oil-nuclear-talks-geneva.html)」軍演，從阿布穆薩島 (Abu Musa)、大小通布島 (Greater & Lesser Tunb) 發射飛彈與無人機，短暫關閉海峽入境航道數小時。演習推升布蘭特原油在兩個交易日內[累計上漲約 3%](https://www.thenationalnews.com/business/economy/2026/02/18/oil-price-hormuz-shipping-us-iran/)，觸及六個月高點。這還只是一次「演示」——若發生真正的封鎖，傳導路徑將是：海峽關閉 → 2,100 萬桶/日供給中斷 → 全球戰略儲備僅能覆蓋約 90 天 → 油價飆至 $100–120 → 全球 CPI 上升 +0.8 個百分點 → 各國央行被迫維持甚至加碼緊縮。

### 市場定價 vs 實際風險

目前布蘭特報 ~[$71](https://www.cnbc.com/2026/02/20/oil-prices-trump-us-iran-conflict-strikes-energy.html)，WTI $66.34——市場大致定價在「僵持拖延」的劇本。但遠期曲線透露不同訊號：WTI 2026 年全年期貨合約[已跌破 $60](https://www.indexbox.io/blog/oil-market-braces-for-contango-as-2026-futures-fall-below-shale-breakeven/)，整條曲線從 2026 年初開始進入 contango（期貨溢價），反映市場對 OPEC+ 減產失效與[全球供給過剩 380 萬桶/日](https://www.iea.org/commentaries/as-oil-market-surplus-keeps-rising-something-s-got-to-give)的悲觀預期。換句話說，遠期市場尚未充分反映荷莫茲封鎖情境。EIA 基線預測布蘭特 2026 年均價 [$58](https://www.eia.gov/outlooks/steo/report/global_oil.php)——這個數字假設零地緣政治溢價。[BloombergNEF 估算](https://about.bnef.com/insights/commodities/oil-can-hit-91-a-barrel-in-late-2026-on-iran-disruption/)，若伊朗出口完全中斷並持續至年底，布蘭特第四季均價可達 $91。[Lombard Odier 更指出](https://www.thenationalnews.com/business/markets/2026/02/19/us-iran-conflict-to-rattle-everything-from-oil-to-stocks-and-commodities-lombard-odier-says/)，暫時性油價飆至 $100 以上「在其假設下屬可行區間」。與此同時，航運戰爭險保費已從危機前的 0.125% 飆升至[船體價值的 0.35–0.50%](https://www.insurancebusinessmag.com/us/news/breaking-news/shipping-cover-leaps-by-60-as-tensions-rise-539563.aspx)——漲幅達 60%，對照 1980 年代兩伊戰爭「油輪戰爭」時期保費暴漲 300% 的先例，目前的風險定價仍有巨大上行空間。

避險資產方面，黃金 2 月 20 日收 [$5,109/oz (+2.68%)](https://edition.cnn.com/2026/02/19/investing/oil-gold-prices-us-iran-tensions)，驗證了地緣避險需求的持續性。VIX 收於 [19.20](https://www.cboe.com/tradable_products/vix/)——有所反應，但以雙航母打擊群對峙的規模而言，波動率與實際風險之間仍存在落差。

### 筆記

**事實：** 期限型外交訊號與軍事部署同時存在，油市近端價格反映緊張，但遠月仍偏向供給寬鬆假設。  
**推論：** 市場可能低估低機率高衝擊事件，但也可能高估短期軍事訊號的持續性。

**一句話結論：** 對能源風險的處理應以「機率加權」與「尾部保險」為核心，而不是單邊押注。  
**資產配置框架（3-12 個月）：** 以 `XLE/USO` 小比例戰術曝險搭配明確停損，`GLD` 作中性避險，`VIXY` 僅限短期事件對沖。  
**再平衡觸發條件（1-3 年）：** 若中東供應風險反覆上行，維持能源與黃金保險倉；若外交框架穩定且供給恢復，逐步降至中性能源權重。

## 三種情境（12 個月）

- **基準情境（50%）**：談判反覆但未全面失控，Brent 大致在 $65–80 區間。**失效條件：** 出現實質封鎖或主要設施遇襲。  
- **上行情境（20%）**：外交窗口打開，供應風險溢價回落，油價下緣下移。**失效條件：** 區域代理武裝升級攻擊。  
- **下行情境（30%）**：有限軍事衝突或航運受阻，油價快速上探並推升通膨預期。**失效條件：** 主要衝突方達成可執行停火與監督機制。

## 投資影響

- **XLE**（能源類股 ETF）：最直接的受惠標的。若發生有限軍事打擊，油價衝至 $80–90，XLE 上行 +10–15%。但若外交突破，回吐 -5–8%。現階段作為地緣對沖的風險/報酬比佳。
- **USO**（原油期貨 ETF）：直接追蹤 WTI 近月期貨。適合短線交易地緣溢價，但 contango 結構會侵蝕長期持有報酬。
- **GLD**（黃金 ETF）：金價 $5,109 已反映部分風險，但若海峽封鎖成真，$5,500+ 不無可能。作為尾部風險對沖，配置 5–8% 部位仍合理。
- **VIXY**（VIX 短期期貨 ETF）：VIX 19.20 → 若海峽封鎖，VIX 衝 35+ 的空間巨大。適合小額尾部對沖，但時間價值衰減快，需短期持有。
- **EFA / VEA**（國際已開發市場 ETF）：歐洲與日本對中東油價衝擊的曝險高於美國。若發生軍事打擊或海峽封鎖，表現將劣於 S&P 500。
- **XLU**（公用事業 ETF）：防禦型資產。若油價飆升推升電力成本，短期受壓，但升息預期降低將支撐估值。

## 後續觀察

1. **伊朗協議草案（預計 2 月 22–23 日）**：阿拉奇承諾 2–3 天內提出草案。華府是否接受為談判基礎，將決定情勢走向外交或軍事
2. **IAEA 理事會會議（2 月底至 3 月初）**：與最後通牒到期高度重合。若 IAEA 報告伊朗違規，將為軍事行動提供國際法基礎
3. **福特號航母抵達時間（預計 3 月第一週）**：雙航母在波斯灣完成合流 = 軍事打擊能力就緒的訊號
4. **OPEC+ 3 月部長級會議**：是否因地緣局勢調整 Q2 增產計畫。若維持不變，供給過剩敘事與地緣溢價將持續拉扯
5. **胡塞武裝行動升級**：若美國發動打擊，胡塞在紅海與曼德海峽 (Bab-el-Mandeb) 的報復行動將進一步擴大航運風險

---

*資料來源：[Al Jazeera](https://www.aljazeera.com/news/2026/2/20/tracking-the-rapid-us-military-build-up-near-iran)、[CNBC](https://www.cnbc.com/2026/02/17/iran-us-strait-of-hormuz-oil-nuclear-talks-geneva.html)、[EIA](https://www.eia.gov/todayinenergy/detail.php?id=65504)、[IEA](https://www.iea.org/commentaries/as-oil-market-surplus-keeps-rising-something-s-got-to-give)、[Reuters](https://www.reuters.com/business/energy/)、[BloombergNEF](https://about.bnef.com/insights/commodities/oil-can-hit-91-a-barrel-in-late-2026-on-iran-disruption/)、[CNN](https://edition.cnn.com/2026/02/19/investing/oil-gold-prices-us-iran-tensions)、[Fox News](https://www.foxnews.com/politics/trump-says-iran-has-days-reach-deal-face-unfortunate-outcome)、[NPR](https://www.npr.org/2026/02/20/nx-s1-5720662/trump-warns-bad-things-iran-doesnt-make-deal-second-us-carrier-nears)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
