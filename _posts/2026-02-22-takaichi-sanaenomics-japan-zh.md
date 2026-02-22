---
layout: post
title: "高市早苗的豪賭：122 兆預算、JGB 殖利率飆升與「Sanaenomics」的三條路徑"
date: 2026-02-22 08:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, japan, boj, yen, defense]
macro_kind: long
description: "高市早苗大選壓勝後推出 122.3 兆日圓預算與 21.3 兆刺激方案，10 年期 JGB 殖利率飆至 1999 年以來新高 2.38%。本文拆解 Sanaenomics 的財政算術、BOJ 獨立性風險與中日摩擦，評估 DXJ、EWJ、0050、GLD 的基準/上行/下行情境。"
lang: zh-TW
---

## 主題背景

高市早苗 (Takaichi Sanae) 於 2025 年 10 月 4 日擊敗小泉進次郎，在自民黨總裁決選中以 [185 票對 156 票勝出](https://www.cfr.org/blog/prime-minister-takaichi-sanae-takes-charge)，10 月 21 日就任日本首位女性首相。公明黨結束長達 26 年的聯合執政，高市轉與日本維新會結盟，並於 2026 年 1 月 23 日宣布提前大選。2 月 8 日自民黨取得[眾議院三分之二絕對多數](https://www.cnbc.com/2026/02/09/japan-stocks-set-to-soar-after-takaichi-secures-historic-mandate.html)——史上最大國會多數。選後首個交易日（2 月 9 日）日經 225 指數突破 57,000 點，2 月 10 日再上攻 58,000 點，均為歷史新高。市場稱之為「高市交易」(Takaichi Trade)，但在歡欣背後，日本國債 (JGB) 殖利率飆升與 約 230% 的債務對 GDP 比率，正發出截然不同的訊號。

## 深度分析

### 「Sanaenomics」的財政規模

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>JGB</strong>：日本國債 (Japanese Government Bond)，日本政府的舉債工具。殖利率上升意味政府借錢成本增加。<br>
<strong>Sanaenomics</strong>：市場對高市早苗經濟政策的稱呼，類比安倍經濟學 (Abenomics)。
</aside>

高市內閣的財政擴張力道驚人。FY2026 預算創下 [122.3 兆日圓紀錄](https://www.kurdistan24.net/en/story/883645/japan-cabinet-approves-record-1223-trillion-budget-amid-rising-debt-costs-and-defense-buildup)，較 FY2025 增加 7.1 兆，其中債務還本付息達 31.3 兆日圓，占預算約 25%。經濟刺激方案 21.3 兆日圓、補充預算 18.3 兆日圓（規模與 [FY2022 新冠疫情時期相當](https://www.ssga.com/us/en/institutional/insights/sanae-taikichi-and-japan-new-direction)），以及提議暫停食品消費稅兩年——後者將造成約 5 兆日圓的稅收缺口。加上所得稅減免約 1.2 兆日圓、廢除汽油稅、延續電力與天然氣補貼，[東亞論壇 (East Asia Forum) 直言「Sanaenomics 的財政算術對不起來」](https://eastasiaforum.org/2025/12/08/sanaenomics-fiscal-arithmetic-doesnt-add-up/)。

### Sanaenomics 的財政帳本

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart10"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart10'), {
  type: 'bar',
  data: {
    labels: ['FY2026 預算\n（總額）', '債務還本付息', '經濟刺激方案', '國防預算', '食品消費稅\n暫停（年缺口）', '所得稅減免'],
    datasets: [{
      label: '兆日圓',
      data: [122.3, 31.3, 21.3, 9.0, 5.0, 1.2],
      backgroundColor: [
        'rgba(59, 130, 246, 0.75)',
        'rgba(239, 68, 68, 0.75)',
        'rgba(16, 185, 129, 0.75)',
        'rgba(245, 158, 11, 0.75)',
        'rgba(139, 92, 246, 0.75)',
        'rgba(107, 114, 128, 0.75)'
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
        text: 'Sanaenomics 主要財政承諾規模（來源：MOF, 首相官邸, Al Jazeera）',
        color: '#e2e8f0',
        font: { size: 12 }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', callback: function(v) { return v + '兆'; } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        title: { display: true, text: '兆日圓', color: '#94a3b8' }
      },
      y: {
        ticks: { color: '#94a3b8', font: { size: 11 } },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }
});
</script>

上圖呈現 Sanaenomics 的財政承諾全貌。122.3 兆預算中，超過四分之一（31.3 兆）用於償還過去的債務，這個數字本身就超過了刺激方案（21.3 兆）與國防預算（9 兆）的總和。若再加上食品消費稅暫停每年 5 兆的稅收缺口與所得稅減免 1.2 兆，Sanaenomics 的新增財政負荷龐大。

### 安倍經濟學 vs 高市經濟學：起跑線截然不同

市場自然會將「高市交易」與 2012–2013 年的「安倍交易」做類比。安倍晉三 2012 年 9 月勝選黨魁、12 月大選勝出，日經從約 8,500 點飆至約 16,000 點（14 個月漲 88%），日圓從約 80 貶至 105。但關鍵差異在起跑線：安倍面對的是通縮，核心 CPI 接近 0%，10 年期 JGB 殖利率僅 0.7%，債務對 GDP 約 220%；高市面對的是核心 CPI 2.0%、10 年期 JGB 2.15%、債務對 GDP 約 230%，加上 2021 年以來累計上漲 12% 的物價水準與[實質薪資下降 7%](https://asiatimes.com/2026/02/take-takaichi-fiscal-policy-seriously-the-ladys-not-for-turning/) 的類停滯性通膨環境。安倍可以放手印鈔而不擔心物價；高市的財政擴張卻直接碰撞仍在升息通道的日本央行 (BOJ)。

### JGB 殖利率：財政信心的溫度計

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>殖利率曲線陡峭化</strong>：長天期利率比短天期利率上升更快，通常反映市場對未來通膨或財政風險的擔憂。
</aside>

高市的食品消費稅暫停提案在 1 月下旬觸發 JGB 拋售。10 年期殖利率於 1 月底飆至 [2.38%，為 1999 年以來最高](https://www.ainvest.com/news/japan-10-year-jgb-yield-extends-decline-2-16-5-year-auction-2602/)；40 年期殖利率更突破 [4% 的歷史紀錄](https://www.cnbc.com/2026/01/20/japan-40-year-jgb-government-bond-yield-record-fiscal-jitters-snap-election-call-takaichi.html)。選後利多短暫壓低 10 年期至約 2.15%，但長端壓力並未解除。BOJ 於 2025 年 12 月 19 日[將政策利率上調至 0.75%](https://www.cnbc.com/2025/12/19/bank-of-japan-boj-rate-cpi-inflation-takaichi-ueda.html)，為 1995 年以來最高，市場預期 2026 年中再升至終端利率約 1.0%。

加州大學柏克萊分校的經濟學家指出，高市的減稅計畫令債券持有人「不安，要求更高的風險補償」。[道富 (State Street) 的 Masahiko Loo 則提醒](https://www.cmegroup.com/insights/economic-research/2026/implications-of-sanaenomics-on-japans-yen-bonds-and-equities.html)「這個警告同樣適用於美國及其他擁有大型結構性赤字的國家」。日本政府債務已達 [1,342 兆日圓（約 9 兆美元）](https://japantoday.com/category/politics/update1-japan's-total-debt-rises-to-record-1-342-tril.-yen-in-2025)，債務對 GDP 比率約 230%。[IMF 第四條款磋商](https://www.imf.org/en/news/articles/2025/02/07/mcs-020725-japan-staff-concluding-statement-of-the-2025-article-iv-mission)明確將財政軌跡列為核心關切。

### BOJ 獨立性與日圓賭局

高市公開表示通膨屬「成本推動型」，主張 BOJ 應放慢升息步伐，並稱政府應與央行「協調」政策方向——這類措辭被市場解讀為對[央行獨立性的壓力](https://am.jpmorgan.com/sg/en/asset-management/institutional/insights/market-insights/market-updates/on-the-minds-of-investors/takaichis-ldp-election-win-and-the-policy-implications/)。USD/JPY 一度衝至約 158.91，逼近 2024 年 7 月日本當局干預匯市的水準，市場將 [160 視為干預臨界線](https://www.forex.com/en/news-and-analysis/usdjpy-in-2026-can-the-yen-finally-start-to-shine/)。高市本人則稱弱勢日圓是「出口的重大機遇」。

2026 年 1 月日本核心 CPI 為 [2.0%](https://www.cnbc.com/2026/02/20/japan-core-inflation-january-boj-target-gdp-growth.html)，核心核心 CPI（扣除食品與能源）為 2.6%，總體 CPI 為 1.5%；2025 年全年 GDP 成長 1.1%，Q4 僅 +0.1%。在物價黏著、經濟動能趨緩的背景下，財政擴張搭配央行壓抑利率，可能短期刺激名目成長，但中期加劇殖利率曲線陡峭化與日圓貶值壓力。

### 產業政策與地緣摩擦

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>Rapidus</strong>：日本政府支持的半導體新創公司，目標量產 2 奈米製程晶片，與台積電競爭先進製程。
</aside>

Sanaenomics 的產業牌面同樣宏大：[7 兆日圓（約 450 億美元）投入 Rapidus 開發 2 奈米晶片](https://thediplomat.com/2025/10/takaichis-ambitious-economic-and-security-agenda-for-japan/)、高科技製造 7% 生產力稅額抵免、AI 與綠能研發 50% 抵免，國防預算約 9 兆日圓，朝 GDP 2% 目標邁進。選後防衛股暴漲——川崎重工 2 月 8 日[單日飆升 17%](https://finance.yahoo.com/news/japan-defense-stocks-surge-takaichi-045049667.html)，2026 年迄今上漲約 60%，IHI 同期漲約 50%。外資在 2025 年淨買入日股約 [380 億美元，為 2013 年以來最高](https://www.wisdomtree.com/investments/blog/2025/10/08/takaichi-trades-buy-japan-and-asia-defense-post-election)。

但地緣風險不容忽視。高市在台灣議題上的強硬發言（稱台海危機為「攸關生存的情勢」）[觸發中國外交反彈](https://time.com/7336391/china-japan-taiwan-dispute-takaichi-xi-economic-costs-diplomatic-relations/)：海鮮禁令恢復、觀光取消約 30% 計畫中的中國旅客行程（預估觀光損失 5–12 億美元）。日本已將稀土對中依賴從 2010 年的 90% 降至約 60%，但仍有脆弱性。豐田、Sony 等在中國有龐大業務的企業對政策走向保持觀望。此外，日本持有 [1.2 兆美元美國國債](https://www.ig.com/en/news-and-trade-ideas/takaichi-japan-debt-crisis-260211)——JGB 殖利率持續攀升可能吸引日本資金回流國內，對美債市場構成溢出效應。

### 跨市場影響：台灣與亞洲

弱勢日圓強化日本出口商對亞洲對手的競爭力。對台灣而言，2025 年台幣在 Q2 已升值超過 10%，壓縮出口產業利潤；[2026 年 GDP 成長預估 4%，增速放緩](https://english.cw.com.tw/article/article.action?id=4515)。日本大量投資 Rapidus 發展先進製程，長期或對台灣半導體供應鏈形成替代壓力——雖然 2 奈米量產時程仍充滿不確定性。

## 投資影響

### 三種情境（12 個月）

**基準情境（50%）：穩步擴張。** Sanaenomics 帶來溫和成長提振，BOJ 緩慢升息至年底 1.0%，日圓穩定於 150–158 區間，日經在 55,000–62,000 區間整理，10 年期 JGB 殖利率維持 2.5% 以下。匯率避險日股 ETF 表現優於未避險標的。**失效條件：** BOJ 被迫加速升息至年底超過 1.25%。

**上行情境——盈利成長循環（25%）：** 企業治理改革、AI 資本支出、武器出口鬆綁三力齊發，創造真實的盈利成長。日圓穩定帶動外資持續流入，日經挑戰 65,000 以上，防衛與半導體類股領漲。**失效條件：** 日圓升破 145（過強，壓縮出口盈利）。

**下行情境——JGB 危機（25%）：** JGB 殖利率突破 2.5–3%，日圓崩至 160 以上觸發干預危機，或中國全面實施稀土與貿易制裁。進口型通膨侵蝕消費者購買力，日經回調至 45,000–48,000 區間。**失效條件：** 10 年期 JGB 殖利率連續 4 週以上維持在 2.5% 之上。

### 配置框架

日股配置的核心問題是匯率方向。DXJ 內建日圓空頭部位，在基準情境（BOJ 緩慢升息至 1.0%、日圓維持 150–158 區間）下表現優於未避險標的，是目前偏好的工具。但匯率避險是雙面刃——若日圓意外升破 145（例如 BOJ 升息節奏快於預期），DXJ 的避險部位反而成為拖累，屆時應轉向未避險的 EWJ。在 JGB 殖利率失控的下行情境中，兩者都難以倖免。

0050 短期受 2026 年台灣 4% GDP 成長與半導體需求支撐，但日本在 Rapidus 上的大量投資與日圓走弱，長期構成台灣科技出口的雙重競爭壓力——這是中長期需要留意的風險因子，不是現在減碼的理由。GLD 在此框架中扮演尾部風險保險：若 JGB 殖利率突破 2.5–3% 引發全球債市連鎖動盪，黃金是少數與日股風險不相關的資產。

### 筆記

Sanaenomics 的核心矛盾在一張圖就看得清楚：122.3 兆預算中超過四分之一用於償還過去的債務，而財政擴張的起跑線——核心 CPI 2.0%、10 年期 JGB 2.15%、債務對 GDP 約 230%——比安倍經濟學（CPI 接近 0%、JGB 0.7%、債務 220%）嚴苛得多。高市的豪賭能否成功，取決於財政乘數是否大於債務成本上升的拖累——歷史上在高債務水準下，這場賽跑的勝率不高。

偏好 DXJ 於 EWJ（日圓弱勢預期），日本防衛與半導體為主題配置，0050 維持核心但留意日圓競爭壓力，GLD 5–10% 作為 JGB 尾部風險對沖。觸發條件：10 年期 JGB 殖利率持續突破 2.5% 超過一個月則減碼日股，日圓升破 145 則從 DXJ 轉向 EWJ，中國對日全面貿易制裁則降低日股至中性。

## 後續觀察

1. **BOJ 3 月政策會議（3 月 13–14 日）**：植田和男是否釋出 2026 年中升息至 1.0% 的前瞻指引，將直接影響 JGB 殖利率與日圓走勢
2. **FY2026 補充預算國會審議（3–4 月）**：18.3 兆補充預算能否通過，以及食品消費稅暫停的具體實施時程，是財政擴張規模的關鍵確認點
3. **中日外交動態**：觀察中國是否擴大制裁範圍至稀土出口管制，或恢復正常化對話。3 月 ASEAN 相關會議為潛在觀察窗口
4. **日經 225 成分股 Q4 財報季（4–5 月）**：企業實際盈利是否跟上股價漲幅，將決定「高市交易」是基本面驅動還是政策預期透支

---

*資料來源：[CNBC](https://www.cnbc.com/2026/02/09/japan-stocks-set-to-soar-after-takaichi-secures-historic-mandate.html)、[BOJ](https://www.boj.or.jp/en/mopo/outlook/gor2601a.pdf)、[Al Jazeera](https://www.aljazeera.com/economy/2026/1/27/why-japans-economic-plans-are-sending-jitters-through-global-markets)、[East Asia Forum](https://eastasiaforum.org/2025/12/08/sanaenomics-fiscal-arithmetic-doesnt-add-up/)、[CME Group](https://www.cmegroup.com/insights/economic-research/2026/implications-of-sanaenomics-on-japans-yen-bonds-and-equities.html)、[JPMorgan](https://am.jpmorgan.com/sg/en/asset-management/institutional/insights/market-insights/market-updates/on-the-minds-of-investors/takaichis-ldp-election-win-and-the-policy-implications/)、[IMF](https://www.imf.org/en/news/articles/2025/02/07/mcs-020725-japan-staff-concluding-statement-of-the-2025-article-iv-mission)、[CFR](https://www.cfr.org/blog/prime-minister-takaichi-sanae-takes-charge)、[Time](https://time.com/7336391/china-japan-taiwan-dispute-takaichi-xi-economic-costs-diplomatic-relations/)、[Kavout](https://www.kavout.com/market-lens/japan-etf-outlook-2026-how-the-bank-of-japan-rate-hike-affects-ewj-dxj-and-bbjp)、[WisdomTree](https://www.wisdomtree.com/investments/blog/2025/10/08/takaichi-trades-buy-japan-and-asia-defense-post-election)、[IG](https://www.ig.com/en/news-and-trade-ideas/takaichi-japan-debt-crisis-260211)、[Kurdistan24](https://www.kurdistan24.net/en/story/883645/japan-cabinet-approves-record-1223-trillion-budget-amid-rising-debt-costs-and-defense-buildup)、[Japan Today](https://japantoday.com/category/politics/update1-japan's-total-debt-rises-to-record-1-342-tril.-yen-in-2025)、[Asia Times](https://asiatimes.com/2026/02/take-takaichi-fiscal-policy-seriously-the-ladys-not-for-turning/)、[The Diplomat](https://thediplomat.com/2025/10/takaichis-ambitious-economic-and-security-agenda-for-japan/)、[State Street](https://www.ssga.com/us/en/institutional/insights/sanae-taikichi-and-japan-new-direction)、[Yahoo Finance](https://finance.yahoo.com/news/japan-defense-stocks-surge-takaichi-045049667.html)、[CommonWealth](https://english.cw.com.tw/article/article.action?id=4515)、[Forex.com](https://www.forex.com/en/news-and-analysis/usdjpy-in-2026-can-the-yen-finally-start-to-shine/)、[CNBC CPI](https://www.cnbc.com/2026/02/20/japan-core-inflation-january-boj-target-gdp-growth.html)、[CNBC 40Y JGB](https://www.cnbc.com/2026/01/20/japan-40-year-jgb-government-bond-yield-record-fiscal-jitters-snap-election-call-takaichi.html)、[ainvest](https://www.ainvest.com/news/japan-10-year-jgb-yield-extends-decline-2-16-5-year-auction-2602/)、[JPM Private Bank](https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/asf/japan-leading-the-pack-but-behind-the-curve)、[Bloomberg](https://www.bloomberg.com/news/articles/2026-02-09/japan-defense-stocks-surge-on-takaichi-s-national-security-plans)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
