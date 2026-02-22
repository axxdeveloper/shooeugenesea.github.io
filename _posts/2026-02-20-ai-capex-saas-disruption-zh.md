---
layout: post
title: "六千五百億美元的利潤缺口：四大科技巨頭 2026 年 AI 資本支出需要翻倍獲利才能回本"
date: 2026-02-20 11:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, ai, technology, semiconductor, cloud]
description: "Meta、Alphabet、Amazon、Microsoft 合計 2026 年 AI capex 達 $635-665B，年增 67-74%。Goldman Sachs 估算需 $1T 年利潤才能維持歷史回報率，但共識預估僅 $450B。SaaS 板塊 48 小時蒸發 $285B。"
lang: zh-TW
---

## 科技動態

四大科技巨頭在 1 月底至 2 月初的財報季集體上調 AI 資本支出：[Meta 1 月 28 日公布 2026 年 capex 指引 $1,150–1,350 億](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Fourth-Quarter-and-Full-Year-2025-Results/default.aspx)，[Alphabet 2 月 4 日宣布 $1,750–1,850 億](https://fortune.com/2026/02/04/alphabet-google-ai-spending-supply-constraints/)，[Amazon 2 月 5 日給出 $2,000 億](https://www.cnbc.com/2026/02/05/amazon-amzn-q4-earnings-report-2025.html)，Microsoft 按年化跑率約 [$1,450 億](https://www.microsoft.com/en-us/investor/events/fy-2026/earnings-fy-2026-q1)。合計 $6,350–6,650 億，較 2025 年的 [$3,810 億跳升 67–74%](https://finance.yahoo.com/news/big-tech-set-to-spend-650-billion-in-2026-as-ai-investments-soar-163907630.html)。這筆錢背後有一道多數投資人忽略的算術題。

## 經濟影響分析

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart4"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart4'), {
  type: 'bar',
  data: {
    labels: ['Meta', 'Microsoft', 'Alphabet', 'Amazon'],
    datasets: [
      {
        label: '2025 Capex（$B）',
        data: [72, 89, 85, 131],
        backgroundColor: 'rgba(148, 163, 184, 0.6)',
        borderColor: 'rgba(148, 163, 184, 1)',
        borderWidth: 1
      },
      {
        label: '2026 Capex 指引（$B）',
        data: [125, 145, 180, 200],
        backgroundColor: 'rgba(59, 130, 246, 0.7)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '四大科技巨頭 AI 資本支出（資料來源：各公司 Q4 2025 財報）',
        color: '#e2e8f0',
        font: { size: 13 }
      },
      legend: { labels: { color: '#94a3b8' } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: {
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + 'B'; } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        min: 0,
        max: 220
      }
    }
  }
});
</script>

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>HBM</strong>：High Bandwidth Memory，專為 AI 加速器設計的堆疊式記憶體，頻寬是傳統 DDR5 數倍，由 SK 海力士與三星主導供應。<br><br>
<strong>SaaS</strong>：Software as a Service，以訂閱制提供雲端軟體的商業模式，代表公司如 Salesforce、ServiceNow。
</aside>

### 利潤缺口：一道被忽略的算術

Goldman Sachs 策略師 Ben Snider 在 2026 年 1 月報告中估算：按 2025–2027 年平均每年 $5,000 億 capex 計算，[維持歷史資本回報率需要年利潤超過 $1 兆，但 2026 年共識預估僅 $4,500 億](https://fortune.com/2026/01/07/ai-companies-profit-capex-investment-goldman-sachs-stocks/)——缺口超過一半。更早在 2024 年中，Goldman 全球股票研究主管 Jim Covello 就警告：「用極其昂貴的技術取代低工資工作，與我三十年來觀察到的每一次技術轉型完全相反」，並指出若 12–18 個月內沒有[殺手級應用出現，投資人熱情將消退](https://www.goldmansachs.com/insights/goldman-sachs-exchanges/a-skeptical-look-at-ai-investment)。這不代表 AI 投資必然失敗，但意味著市場目前的定價假設了近乎完美的商業化路徑。

### 誰受惠、誰受傷：供應鏈與 SaaS 的冰火兩重天

資本支出的直接受益者是半導體供應鏈。三星與 SK 海力士已將 2026 年 HBM3E 合約價格[上調約 20%](https://www.trendforce.com/news/2025/12/24/news-samsung-sk-hynix-reportedly-plan-20-hbm3e-price-hike-for-2026-as-nvidia-h200-asic-demand-rises/)，Bank of America 預估 2026 年 HBM 市場規模達 [$546 億、年增 58%](https://seekingalpha.com/news/4535511-samsung-sk-hynix-increase-hbm3e-prices-by-20-percent-for-2026-orders-report)。SK 海力士 M15X 新廠提前四個月量產 HBM4 用 1b DRAM，三星則計畫 [2026 年 HBM 產能擴增 50%](https://www.trendforce.com/news/2025/12/30/news-samsung-reportedly-plans-50-hbm-capacity-surge-in-2026-spotlight-on-hbm4)。台海供應鏈的地緣風險分析，詳見[半導體地緣再平衡](/2026/02/21/semiconductor-geopolitics-zh/)。

受傷的是傳統 SaaS。2026 年 2 月的 [48 小時內，全球軟體股蒸發 $2,850 億](https://www.nxcode.io/resources/news/saaspocalypse-2026-software-stock-crash)。公開 SaaS 公司的中位 EV/Revenue 倍數從疫情高點 18–19 倍跌至 [2025 年底的 5.1 倍](https://www.bain.com/insights/why-saas-stocks-have-dropped-and-what-it-signals-for-softwares-next-chapter/)。邏輯很直接：當 AI 代理能處理 CRM 輸入、客服回覆與基礎程式碼，企業削減的是按人頭計費的訂閱座位。Amazon 在 Q4 財報中提到 AI 工具已[取代部分內部崗位，2025 年底裁減 14,000 個企業職位](https://www.indexbox.io/blog/amazon-q4-2025-earnings-report-capex-ai-growth-job-cuts-analysis/)。2025 全年科技業裁員約 [123,000 人](https://news.crunchbase.com/startups/tech-layoffs/)，2026 年至今已有 [超過 22,000 人受 AI 驅動裁員影響](https://programs.com/resources/ai-layoffs/)。

### 第二層風險：電、水、社區反對

這些 capex 不是轉帳就能實現的。美國資料中心用電量 2023 年占全國 [4.4%](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers)，DOE 預估 2028 年可能升至 12%。EIA 預測 2026 年商業用電部門成長 [5%](https://www.utilitydive.com/news/energy-short-term-outlook-2026-load-demand-data-centers/807530/)，幾乎全由資料中心驅動。冷卻用水同樣吃緊，美國資料中心年耗水量預計 2028 年較 2023 年[翻兩到四倍至 1,500–2,800 億公升](https://www.eesi.org/articles/view/data-centers-and-water-consumption)。最被低估的瓶頸是社區阻力：Data Center Watch 統計，過去兩年全美有 [$180 億資料中心專案遭否決，另有 $460 億遭延宕](https://www.datacenterwatch.org/report)，涉及 28 州、至少 142 個反對團體。德州 2025 年通過 SB6 法案，授權 ERCOT 在緊急時期[斷開超大負載用戶](https://nzero.com/blog/u-s-power-demand-hits-new-highs-driven-by-data-centers-ai-and-grid-constraints/)。這意味著即便資金到位，實體落地的時程與成本仍有相當不確定性。

### 筆記

這輪 AI 資本支出的核心矛盾在於速度差：資金投入是季度級別的，但電網擴容、社區許可、人才培育都是年級別甚至十年級別的。$6,500 億的 capex 指引看起來是「AI 一定贏」的信號，但 Goldman 那道算術——需要翻倍利潤才能維持歷史回報率——提醒我們市場正在為近乎完美的執行定價。配置上我仍以 QQQ 與 SMH 為核心持倉，但權重上偏向基礎設施層（半導體、電力公用事業）而非應用層，因為不論哪家公司的 AI 產品最終勝出，它們都需要晶片和電力。XLU 在這個週期裡不只是防禦倉位，而是直接受惠於資料中心電力需求的成長資產。SaaS（IGV）我傾向個股選擇而非被動配置，只留有實際 AI 整合能力與自由現金流率回升的標的。會讓我改變看法的觸發點有兩個：第一，如果 NVIDIA 2 月 25 日財報的 Q1 指引低於市場預期且資料中心營收成長跌破 40%，那代表下游需求不如 capex 指引暗示的強勁，需要減碼半導體超配；第二，如果 SaaS 龍頭連續兩季自由現金流率回升至 25% 以上，代表 AI 威脅被過度定價，可以開始回補軟體權重。

## 後續觀察

- **2 月 25 日 NVIDIA Q4 財報**：營收預期 $370–380 億、資料中心部門指引，以及 Blackwell 架構出貨進度——這是 capex 到營收轉換的最直接驗證
- **3 月 Alphabet、Meta 開發者大會**：AI 代理產品的實際能力展示將影響 SaaS 替代速度的市場預期
- **HBM4 量產時程**：SK 海力士 M15X 二月投產進度，及三星良率追趕狀況，將決定 2026 下半年記憶體供需平衡
- **資料中心許可與電網**：德州 SB6 執行細則、維吉尼亞 Loudoun 郡新審批政策——社區阻力是否進一步收緊

---

*資料來源：[Meta Q4 2025 財報](https://investor.atmeta.com/investor-news/press-release-details/2026/Meta-Reports-Fourth-Quarter-and-Full-Year-2025-Results/default.aspx)、[Alphabet Q4 2025 財報](https://fortune.com/2026/02/04/alphabet-google-ai-spending-supply-constraints/)、[Amazon Q4 2025 財報](https://www.cnbc.com/2026/02/05/amazon-amzn-q4-earnings-report-2025.html)、[Goldman Sachs](https://fortune.com/2026/01/07/ai-companies-profit-capex-investment-goldman-sachs-stocks/)、[TrendForce](https://www.trendforce.com/news/2025/12/24/news-samsung-sk-hynix-reportedly-plan-20-hbm3e-price-hike-for-2026-as-nvidia-h200-asic-demand-rises/)、[DOE](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers)、[EIA](https://www.utilitydive.com/news/energy-short-term-outlook-2026-load-demand-data-centers/807530/)、[Data Center Watch](https://www.datacenterwatch.org/report)、[Bain & Co.](https://www.bain.com/insights/why-saas-stocks-have-dropped-and-what-it-signals-for-softwares-next-chapter/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
