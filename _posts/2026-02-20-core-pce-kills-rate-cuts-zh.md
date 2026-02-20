---
layout: post
title: "降息已死：核心PCE突破3%改寫了2026劇本"
date: 2026-02-20 18:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, fed, gold, bonds]
lang: zh-TW
---

## 總經快照

聯準會 (Fed) 利率 [3.5%–3.75%](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)，今天公布的12月核心個人消費支出 (Core PCE) 年增 [3.0%](https://www.bea.gov/data/personal-consumption-expenditures-price-index)，高於市場預期的 2.8%——這是聯準會最在意的通膨指標，它剛告訴所有人：通膨沒有在降溫。但1月消費者物價指數 (CPI) 年增僅 [2.4%](https://www.cnbc.com/2026/02/13/cpi-inflation-report-january-2026.html)（核心 2.5%），兩個通膨指標罕見地大幅分歧。失業率 [4.3%](https://www.cnbc.com/2026/02/11/jobs-report-january-2026-.html)，恐慌指數 (VIX) 15.06。

## 重點發展

**今天的核心 PCE 數據殺死了近期降息的最後希望。** 12月核心 PCE 年增 [3.0%](https://www.bea.gov/data/personal-consumption-expenditures-price-index)，月增 +0.4%，雙雙超出預期（市場預估年增 2.8%、月增 +0.3%）。高盛追蹤的1月數據更高達 [3.05%](https://markets.financialcontent.com/stocks/article/marketminute-2026-2-18-goldman-sachs-issues-305-core-pce-alarm-why-the-inflation-disconnect-could-freeze-fed-rate-cuts-until-summer-2026)，趨勢不但沒有好轉，還在惡化。聯準會反覆強調 PCE 是其「首選通膨指標」——CPI 再怎麼好看也救不了這個數字。

**CPI 和 PCE 為什麼給出矛盾訊號？** CPI 年增 2.4% 看起來一切往好的方向走，但 PCE 的計算權重更重視醫療和金融服務，而這些正是目前漲價最兇的領域。高盛[特別指出](https://markets.financialcontent.com/stocks/article/marketminute-2026-2-18-goldman-sachs-issues-305-core-pce-alarm-why-the-inflation-disconnect-could-freeze-fed-rate-cuts-until-summer-2026)，AI 資料中心擴建導致的高頻寬記憶體 (HBM) 和儲存設備短缺正在推升 IT 硬體價格，透過 PCE 的分項放大反映。華爾街最愛的 AI 故事，正在產生聯準會最討厭的通膨壓力——這個矛盾在短期內無解。

**FOMC 會議紀要確認了最壞的猜測。** 本週公布的1月會議紀要[顯示](https://www.cnbc.com/2026/02/18/fed-minutes-january-2026.html)多位委員認為通膨持續高於目標的風險「顯著」，部分官員甚至[提出升息情境](https://markets.financialcontent.com/stocks/article/marketminute-2026-2-19-fed-minutes-reveal-hawkish-pause-as-inflation-stalls-sending-10-year-yields-toward-41)——這是在去年三次降息後極不尋常的鷹派轉向。會前市場定價3月降息機率50%，紀要公布後[暴跌至6%](https://www.jpmorgan.com/insights/markets-and-economy/economy/fed-meeting-january-2026)。降息不只是延後，它可能根本不會在2026上半年發生。

**我的判斷：華爾街仍在定價一個已經不存在的劇本。** 高盛目標 [7,600](https://www.goldmansachs.com/insights/articles/the-sp-500-expected-to-rally-12-this-year)、摩根大通 [7,500](https://www.jpmorgan.com/insights/global-research/outlook/market-outlook)、Oppenheimer 甚至喊到 [8,100](https://www.oppenheimer.com/news-media/2026/insights/oam/2026-market-outlook)。但這些預測的隱含前提是「聯準會會降息」。今天的 PCE 數據把這個前提炸掉了。在[96百分位估值](https://www.goldmansachs.com/insights/goldman-sachs-research/markets-outlook-2026-some-like-it-hot)上，沒有降息支撐的股市就像沒有安全網的走鋼索——看對了漲12%（共識），看錯了跌15-20%（估值收縮+降息落空）。什麼情境證明我錯？1月 PCE 回落至 2.6% 以下、證明12月是異常值，降息預期重新定價，股市共識成立。

## 市場數據圖表

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart'), {
  type: 'bar',
  data: {
    labels: ['SPY', 'QQQ', '黃金', 'TLT', 'WTI原油', '比特幣'],
    datasets: [{
      label: '52週區間位置 (%)',
      data: [93.8, 85.7, 78.3, 58.6, 49.1, 10.9],
      backgroundColor: [
        'rgba(249,115,22,0.75)',
        'rgba(249,115,22,0.75)',
        'rgba(34,197,94,0.75)',
        'rgba(59,130,246,0.75)',
        'rgba(59,130,246,0.75)',
        'rgba(239,68,68,0.75)'
      ],
      borderColor: [
        'rgb(249,115,22)',
        'rgb(249,115,22)',
        'rgb(34,197,94)',
        'rgb(59,130,246)',
        'rgb(59,130,246)',
        'rgb(239,68,68)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    scales: {
      x: {
        min: 0,
        max: 100,
        ticks: { callback: function(v) { return v + '%'; } }
      }
    },
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: '主要資產在52週區間中的位置 (%)',
        font: { size: 14 }
      },
      tooltip: {
        callbacks: {
          label: function(ctx) { return ctx.parsed.x + '%'; }
        }
      }
    }
  }
});
</script>

**SPY 在52週高點附近而比特幣蹲在底部——這是2026年最極端的資產分歧。**

黃金在78%的位置代表結構性多頭仍在進行中，但尚未過熱。長債 TLT 僅在58%，反映債市認為經濟不如股市定價的樂觀。比特幣跌至52週區間底部10.9%，從歷史高點 $126,296 回撤47%——當投資人真正需要避險時，資金選擇了[真正的黃金](https://markets.financialcontent.com/stocks/article/marketminute-2026-2-19-gold-shatters-5000-geopolitics-and-dollar-decoupling-fuel-historic-rally)而非數位版本。

## ETF 影響分析

### 股票型

SPY 報 [$684.48](https://www.cnbc.com/quotes/SPY)（52週區間94%），距高點僅2%。在核心 PCE 3.0% 和升息可能性浮現的環境下，風險報酬嚴重不對稱。QQQ 報 [$603.47](https://www.investing.com/etfs/powershares-qqqq)，年初至今 [-2.02%](https://stockanalysis.com/etf/qqq/)，科技股面臨 AI 資本支出回報被質疑和利率預期上修的雙重壓力——Amazon 兩週[蒸發 $4,500億市值](https://247wallst.com/investing/2026/02/19/stock-market-live-february-19-2026-sp-500-spy-slips-on-walmart-outlook/)就是警訊。

### 債券型

短債 (SHY) 殖利率4-5%，在通膨數據超預期的交易日最穩，是當前最安全的停泊處。TLT 報 [$89.62](https://www.cnbc.com/quotes/TLT)（52週區間59%），殖利率 4.36%。CBO 預估10年期殖利率未來十年維持 [4.1%-4.4%](https://www.cbo.gov/publication/61882)，加上國債[2036年達 GDP 120%](https://www.crfb.org/blogs/cbo-releases-february-2026-budget-and-economic-outlook)、年利息支出 $2.1 兆，長債的資本利得空間有限，但票息收入在股市高估值環境下仍值得配置。

### 另類資產

黃金報 [~$5,028](https://tradingeconomics.com/commodity/gold)（52週區間78%）。今天的 PCE 數據對黃金是利多：通膨頑固 + 聯準會動彈不得 = 實質利率難以大幅攀升。加上全球央行持續買金和 CBO 財政惡化預測，黃金的多頭邏輯是結構性的，不是短期避險交易。5-10%配置作為組合保險合理，但 $5,000 以上追高需要紀律。

比特幣報 [$67,243](https://www.coindesk.com/markets/2026/02/19/bitcoin-steadies-near-usd67-000-as-traders-pay-for-crash-protection/)（52週區間底部11%），交易員正在買進[崩盤保護](https://www.coindesk.com/markets/2026/02/19/bitcoin-steadies-near-usd67-000-as-traders-pay-for-crash-protection/)。黃金破五千而 BTC 蹲在六萬七——「數位黃金」的敘事已被市場用真金白銀否決。

## 後續觀察重點

- **3月18-19日 FOMC 會議**——今天 PCE 3.0% 後，市場關注的不再是「會不會降息」，而是「聲明措辭會不會暗示升息」。任何鷹派強化都將壓低股債
- **最高法院 IEEPA 關稅裁決**——[隨時可能公布](https://www.cnbc.com/2026/02/19/supreme-court-tariff-ruling.html)。關稅為核心 PCE 貢獻約 [0.5個百分點](https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/)，推翻是唯一能讓降息重回桌面的短期催化劑
- **伊朗核談判倒數**——布蘭特 [$71.44](https://tradingeconomics.com/commodity/brent-crude-oil)，川普設定[10-15天最後期限](https://www.cnbc.com/2026/02/19/trump-to-decide-whether-to-attack-iran-in-next-10-days-oil-prices-jump.html)。如果油價因軍事行動飆破 $100，通膨問題將全面惡化

---

*資料來源：[BEA](https://www.bea.gov/data/personal-consumption-expenditures-price-index)、[聯準會](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)、[CNBC](https://www.cnbc.com/2026/02/18/fed-minutes-january-2026.html)、[Goldman Sachs](https://markets.financialcontent.com/stocks/article/marketminute-2026-2-18-goldman-sachs-issues-305-core-pce-alarm-why-the-inflation-disconnect-could-freeze-fed-rate-cuts-until-summer-2026)、[CBO](https://www.crfb.org/blogs/cbo-releases-february-2026-budget-and-economic-outlook)、[JPMorgan](https://www.jpmorgan.com/insights/markets-and-economy/economy/fed-meeting-january-2026)、[Tax Foundation](https://taxfoundation.org/research/all/federal/trump-tariffs-trade-war/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
