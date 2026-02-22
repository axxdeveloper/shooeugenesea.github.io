---
layout: post
title: "GDP 成分拆解：聯邦支出逆風下的消費韌性與投資分化"
date: 2026-02-21 09:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, fed, gdp]
macro_kind: long
description: "BEA Q4 GDP 為 1.4%，主要受政府支出反轉拖累；消費與企業投資呈現分化。本文用基準/上行/下行情境評估 SPY、XLI、TLT、XLV 的配置調整。"
lang: zh-TW
---

## 總經快照

聯準會 (Fed) 1 月 28 日決議維持利率在 3.5%–3.75%，10 年期公債殖利率 [4.08%](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/)，2 年期 3.48%。經濟分析局 (BEA) 昨日發布 Q4 2025 GDP 預估值 (advance estimate)，年化成長率僅 [1.4%](https://www.bea.gov/news/2026/gdp-advance-estimate-4th-quarter-and-year-2025)，遠低於市場共識的 2.5–3.0%，也低於 Q3 修正後的 4.4%。全年 2025 成長率 2.2%，較 2024 年的 2.8% 明顯減速。

## 數據解讀

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart6"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart6'), {
  type: 'bar',
  data: {
    labels: ['消費支出\n(PCE)', '企業投資\n(Fixed Inv.)', '存貨變動\n(Inventories)', '政府支出\n(Gov.)', '淨出口\n(Net Exports)'],
    datasets: [
      {
        label: 'Q3 2025',
        data: [2.34, -0.13, 0.21, 0.39, 1.59],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      },
      {
        label: 'Q4 2025',
        data: [1.58, 0.61, 0.21, -0.93, -0.07],
        backgroundColor: function(context) {
          var index = context.dataIndex;
          return index === 3 ? 'rgba(239, 68, 68, 0.85)' : 'rgba(251, 191, 36, 0.7)';
        },
        borderColor: function(context) {
          var index = context.dataIndex;
          return index === 3 ? 'rgba(239, 68, 68, 1)' : 'rgba(251, 191, 36, 1)';
        },
        borderWidth: 1
      }
    ]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Q4 GDP 成分貢獻分析（資料來源：BEA）',
        color: '#e2e8f0',
        font: { size: 14 }
      },
      legend: { labels: { color: '#94a3b8' } },
      tooltip: {
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.x.toFixed(2) + ' pp';
          }
        }
      }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', callback: function(v) { return v + ' pp'; } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        title: { display: true, text: '對 GDP 成長之貢獻（百分點）', color: '#94a3b8' }
      },
      y: {
        ticks: { color: '#94a3b8', font: { size: 11 } },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }
});
</script>

### 消費支出：引擎減速但未熄火

個人消費支出 (PCE) 仍是 Q4 最大正向貢獻者，但力道明顯放緩。PCE 成長率從 Q3 的 3.5% 降至 2.4%，貢獻從 +2.34 pp 縮減至 [+1.58 pp](https://www.bea.gov/news/2026/gdp-advance-estimate-4th-quarter-and-year-2025)。結構上，商品消費季減 0.1%——耐久財消費疲軟尤其明顯；服務消費仍維持 3.4% 的成長，其中醫療保健支出年化成長 5.6%，單項就貢獻了全季 GDP 成長的約 45%（[CEPR](https://cepr.net/publications/gdp-review-4th-quarter-2025/)）。消費正在從「全面擴張」轉向「服務撐場」，這對零售業與製造業是警訊。

### 政府支出：最大拖累來源

這是本季最關鍵的數字。政府支出從 Q3 貢獻 +0.39 pp 直接反轉為 Q4 拖累 [-0.93 pp](https://www.bea.gov/news/2026/gdp-advance-estimate-4th-quarter-and-year-2025)。BEA 明確指出，聯邦政府服務的縮減單獨就拖累了 GDP 約 1.0 個百分點。聯邦支出大幅下降 16.6%，是 2013 年預算削減 (sequestration) 以來最大的單季聯邦支出萎縮。

造成這次暴跌的主因有二：一是從 10 月 1 日持續至 11 月 12 日的 43 天聯邦政府停擺 (government shutdown)——史上最長的停擺紀錄（[CRS](https://www.congress.gov/crs-product/R48832)）；二是政府效率部 (DOGE) 主導的聯邦裁員潮，約 17 萬聯邦雇員在 Q4 被裁減。哈佛大學經濟學家 Jason Furman [指出](https://stocktwits.com/news-articles/markets/equity/harvard-professor-blames-longest-govt-shutdown-for-lower-than-expected-q4-gdp-growth/cZRNhtaR4xA)，目前仍不確定多少是停擺效應（會在 Q1 反彈）、多少是永久性削減（不會反彈）。

歷史對照：2013 年 sequestration 導致聯邦支出拖累 GDP 約 0.6–0.8 pp，但從未出現像 Q4 2025 這樣結合停擺與結構性裁員的雙重衝擊。州與地方政府支出維持溫和正成長，部分抵消了聯邦的拖累，但力道不足。

### 企業投資：AI 熱潮撐不住全局

企業固定投資成長 3.7%，貢獻 +0.61 pp，但內部結構分化嚴重。資訊處理設備與軟體投資受惠於 AI 基礎建設熱潮，單項貢獻約 [+0.65 pp](https://www.ey.com/en_us/insights/strategy/macroeconomics/us-gdp)。然而建築類投資 (structures) 連續第八季下滑，季減 2.4%。住宅投資同樣萎縮 1.5%。若剔除 AI 相關資本支出，企業投資實質上已經轉負——與昨天分析的 [AI CapEx 泡沫與 SaaS 衝擊]({% post_url 2026-02-20-ai-capex-saas-disruption-zh %})主題完全呼應。

### 淨出口：從最大推手到拖累

Q3 淨出口貢獻了 +1.59 pp，主要受惠於出口大幅成長 9.6% 與進口下滑 4.7%。但 Q4 完全反轉：出口萎縮 0.9%，進口也下降 1.3%，淨出口貢獻僅 -0.07 pp。美元指數維持高位壓制出口競爭力，而全球需求疲軟——歐元區 Q4 成長僅 [0.1%](https://ec.europa.eu/eurostat)、中國人行 (PBoC) 全年僅降息一次 10 bps——進一步限制了出口空間。

### 筆記

這份 GDP 報告更像「組成改變」而非單一方向轉折——Q4 的主要拖累來自政府支出反轉（停擺 + DOGE 裁員），消費仍在正成長但引擎從全面擴張轉為服務業獨撐，投資端則被 AI capex 撐出一片好看的數字而掩蓋了建築與住宅的疲弱。Q1 可能因停擺結束而技術性反彈，但中期趨勢要看私部門需求能否接棒。

股票維持核心但降低單一景氣循環部位集中，`TLT` 作為成長下修保險，`XLV` 受惠於醫療支出韌性（單項貢獻 GDP 的 45%）。若消費與民間投資連續改善，增加周期股；若政府支出縮減延續且就業轉弱，降低景氣敏感資產、提高債券比重。

## 後續觀察

1. **2 月 24 日 Atlanta Fed GDPNow 更新**：Q1 初始預估 3.1%，後續數據（營建支出、ISM）將大幅修正此數字，是判斷停擺反彈力道的第一個信號
2. **3 月 7 日非農就業報告 (NFP)**：1 月 NFP [+130K](https://www.bls.gov/news.release/empsit.nr0.htm)，聯邦政府 -34K 已反映 DOGE 裁員衝擊。若 2 月聯邦裁員加速且私部門無法彌補，失業率將進一步攀升
3. **3 月 27 日 Q4 GDP 第二次修正估計 (second estimate)**：BEA 將納入更多完整數據，政府支出拖累幅度可能被修正——上修或下修都將重新定義 Q4 的敘事
4. **國會預算談判**：TCJA 延長方案的財政成本與 DOGE 削減的永久性將決定 2026–2027 年政府支出的基線軌跡

---

*資料來源：[BEA GDP Advance Estimate](https://www.bea.gov/news/2026/gdp-advance-estimate-4th-quarter-and-year-2025)、[CEPR GDP Review](https://cepr.net/publications/gdp-review-4th-quarter-2025/)、[EY-Parthenon](https://www.ey.com/en_us/insights/strategy/macroeconomics/us-gdp)、[CBO](https://www.cbo.gov/publication/61882)、[CRS Government Shutdown](https://www.congress.gov/crs-product/R48832)、[Atlanta Fed GDPNow](https://www.atlantafed.org/cqer/research/gdpnow)、[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
