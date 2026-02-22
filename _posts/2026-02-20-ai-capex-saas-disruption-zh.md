---
layout: post
title: "AI 資本支出擴張與 SaaS 重估：從成長敘事回到現金流檢驗"
date: 2026-02-20 11:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, ai, technology, semiconductor, cloud]
description: "科技巨頭 2026 年 AI 資本支出估計 6,350–6,650 億美元，傳統 SaaS 估值同步重估。本文以事實與推論分離，評估 QQQ、SMH、IGV、XLU 的中長期配置含義。"
lang: zh-TW
---

## 科技動態

科技巨頭 2026 年的 AI 資本支出 (capex) 合計達 [6,350–6,650 億美元](https://www.reuters.com/technology/)，年增 67–74%。與此同時，傳統軟體即服務 (SaaS) 公司估值出現明顯壓縮，相關報導估計合計市值已蒸發超過 [1 兆美元](https://www.bloomberg.com/news/technology/)。NVIDIA 將於 2 月 25 日公布 Q4 財報，市場預期營收 [650–670 億美元](https://www.reuters.com/technology/nvidia/)。這波變化的核心不是單一公司輸贏，而是企業 IT 支出的結構再分配。

## 經濟影響分析

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart4"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart4'), {
  type: 'bar',
  data: {
    labels: ['Meta', 'Microsoft', 'Alphabet', 'Amazon', 'Apple/其他'],
    datasets: [
      {
        label: '2025 年 Capex（十億美元）',
        data: [65, 80, 75, 105, 55],
        backgroundColor: 'rgba(148, 163, 184, 0.6)',
        borderColor: 'rgba(148, 163, 184, 1)',
        borderWidth: 1
      },
      {
        label: '2026 年 Capex（十億美元）',
        data: [72, 89, 91, 131, 60],
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
        text: '科技巨頭 AI 資本支出（資料來源：公司財報、Reuters）',
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
        max: 150
      }
    }
  }
});
</script>

### 資本支出的規模前所未見

6,350 億美元是什麼概念？這超過了台灣 2025 年全年 GDP（約 [7,900 億美元](https://www.imf.org/en/Publications/WEO)）的 80%。其中大部分流向三個方向：GPU/AI 加速器（以 NVIDIA 為主）、資料中心建設（電力與冷卻基礎設施）、以及高頻寬記憶體 (HBM)。HBM 價格已上漲 [20%](https://www.reuters.com/technology/)，供應商三星與 SK 海力士的產能仍然供不應求。這不只是科技業的故事——資料中心的電力需求正在重塑全球能源格局，美國資料中心用電量預計 2026 年將占全國用電的 [6–8%](https://www.eia.gov/todayinenergy/)，較 2023 年的 [4.4%](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers) 大幅成長。

### SaaS 重估的經濟影響

傳統 SaaS 公司正在被 AI 原生工具取代。Salesforce、ServiceNow、Workday 等老牌 SaaS 公司的合計市值蒸發超過 1 兆美元，因為市場意識到：當 AI 代理 (AI agent) 能自動完成 CRM 輸入、客服回覆、程式碼撰寫時，企業為什麼還要支付每人每月 $150 的 SaaS 訂閱費？Amazon 在 Q4 財報中透露 AI 工具已取代部分內部 SaaS 支出，股價因整體 guidance 不佳連續重挫，九個交易日內市值蒸發 [$4,500 億](https://www.cnbc.com/2026/02/17/amazon-stock-losing-streak.html)。這個趨勢正在從科技業擴散至金融、醫療、法律——每一個依賴 SaaS 工具的行業都面臨顛覆。

### 對實體經濟的衝擊

AI 資本支出潮的經濟影響是雙面的。正面：資料中心建設創造了大量建築與工程就業（估計 2026 年新增 [15–20 萬個](https://www.bls.gov/news.release/empsit.nr0.htm)相關職位），電力基礎設施投資拉動公用事業資本支出，半導體供應鏈（尤其台灣、韓國、日本）受惠於訂單暴增。負面：SaaS 產業的裁員正在加速（2026 年初已宣布 [超過 5 萬人](https://www.reuters.com/technology/)），中層知識工作者（客服、資料分析、初級程式開發）面臨結構性失業。淨效果目前偏正，但隨著 AI 代理能力持續提升，勞動市場的負面衝擊可能在 2026 下半年顯著擴大。

台海供應鏈風險的深度分析，詳見[半導體地緣再平衡](/2026/02/21/semiconductor-geopolitics-zh/)。

### 筆記

AI capex 擴大、資料中心吃電、SaaS 估值下修——三者同時發生且互相連動。市場正在從「AI 一律受惠」轉向「基礎設施受惠、應用層分化」的定價階段，篩選標準從成長敘事回到現金流與交付能力。

核心持有以 `QQQ/SMH` 為主，但降低單一高估值應用股曝險（IGV 採選股而非被動全配）；`XLU` 兼具電力需求受惠與波動緩衝。觸發條件：若資料中心用電占比回落至 6% 以下且 AI 代理商業化轉換率低於預期，降低半導體超配；若 SaaS 自由現金流率連續四季回升，逐步回補軟體權重。

## 後續觀察

1. **2 月 25 日 NVIDIA Q4 財報**：營收能否達到 $650–670 億的預期、Q1 guidance 是否上調——這是 AI 敘事的壓力測試
2. **3 月 Meta、Google 開發者大會**：AI 代理產品的實際能力展示將決定 SaaS 替代速度的市場預期
3. **台海局勢演變**：半導體供應鏈的地緣風險是否定價——TSMC ADR 的隱含波動率是觀察指標
4. **美國能源監管**：資料中心用電許可與電網擴容計畫的進展將決定 capex 計畫能否落地

---

*資料來源：[Reuters](https://www.reuters.com/technology/)、[Bloomberg](https://www.bloomberg.com/news/technology/)、[EIA](https://www.eia.gov/todayinenergy/)、[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)、[IMF](https://www.imf.org/en/Publications/WEO)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
