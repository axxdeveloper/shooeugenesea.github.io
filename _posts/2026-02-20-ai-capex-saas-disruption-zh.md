---
layout: post
title: "AI 軍備競賽：6,500 億美元資本支出潮與 SaaS 末日"
date: 2026-02-20 11:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, ai, technology, semiconductor, cloud]
description: "科技巨頭 2026 年 AI 資本支出合計 6,500 億美元，傳統 SaaS 市值蒸發超過 1 兆。分析 NVIDIA 財報預覽、半導體供應鏈風險，以及 QQQ、SMH、XLU 等 ETF 影響。"
lang: zh-TW
---

## 科技動態

科技巨頭 2026 年的 AI 資本支出 (capex) 合計達 [6,350–6,650 億美元](https://www.reuters.com/technology/)，年增 67–74%——這是人類歷史上最大規模的企業資本支出潮。與此同時，傳統軟體即服務 (SaaS) 公司正面臨「SaaS 末日」(SaaSpocalypse)，合計市值蒸發超過 [1 兆美元](https://www.bloomberg.com/news/technology/)。NVIDIA 將於 2 月 25 日公布 Q4 財報，市場預期營收 [650–670 億美元](https://www.reuters.com/technology/nvidia/)。AI 正在創造一個贏者全拿的新經濟格局，而輸家的損失規模同樣驚人。

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
        data: [38, 55, 50, 75, 60],
        backgroundColor: 'rgba(148, 163, 184, 0.6)',
        borderColor: 'rgba(148, 163, 184, 1)',
        borderWidth: 1
      },
      {
        label: '2026 年 Capex（十億美元）',
        data: [65, 80, 75, 105, 85],
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
        max: 120
      }
    }
  }
});
</script>

### 資本支出的規模前所未見

6,350 億美元是什麼概念？這超過了台灣 2025 年全年 GDP（約 [7,900 億美元](https://www.imf.org/en/Publications/WEO)）的 80%。其中大部分流向三個方向：GPU/AI 加速器（以 NVIDIA 為主）、資料中心建設（電力與冷卻基礎設施）、以及高頻寬記憶體 (HBM)。HBM 價格已上漲 [20%](https://www.reuters.com/technology/)，供應商三星與 SK 海力士的產能仍然供不應求。這不只是科技業的故事——資料中心的電力需求正在重塑全球能源格局，美國資料中心用電量預計 2026 年將占全國用電的 [6–8%](https://www.eia.gov/todayinenergy/)，較 2023 年的 [4.4%](https://www.energy.gov/articles/doe-releases-new-report-evaluating-increase-electricity-demand-data-centers) 大幅成長。

### SaaS 末日的經濟影響

傳統 SaaS 公司正在被 AI 原生工具取代。Salesforce、ServiceNow、Workday 等老牌 SaaS 公司的合計市值蒸發超過 1 兆美元，因為市場意識到：當 AI 代理 (AI agent) 能自動完成 CRM 輸入、客服回覆、程式碼撰寫時，企業為什麼還要支付每人每月 $150 的 SaaS 訂閱費？Amazon 在 Q4 財報中透露 AI 工具已取代部分內部 SaaS 支出，股價因整體 guidance 不佳連續重挫，九個交易日內市值蒸發 [$4,500 億](https://www.cnbc.com/2026/02/17/amazon-stock-losing-streak.html)。這個趨勢正在從科技業擴散至金融、醫療、法律——每一個依賴 SaaS 工具的行業都面臨顛覆。

### 對實體經濟的衝擊

AI 資本支出潮的經濟影響是雙面的。正面：資料中心建設創造了大量建築與工程就業（估計 2026 年新增 [15–20 萬個](https://www.bls.gov/news.release/empsit.nr0.htm)相關職位），電力基礎設施投資拉動公用事業資本支出，半導體供應鏈（尤其台灣、韓國、日本）受惠於訂單暴增。負面：SaaS 產業的裁員正在加速（2026 年初已宣布 [超過 5 萬人](https://www.reuters.com/technology/)），中層知識工作者（客服、資料分析、初級程式開發）面臨結構性失業。淨效果目前偏正，但隨著 AI 代理能力持續提升，勞動市場的負面衝擊可能在 2026 下半年顯著擴大。

### 台海風險不可忽視

所有 AI 資本支出最終都依賴台積電的先進製程晶片。台海軍事緊張升溫（詳見今日地緣政治分析）意味著全球最大規模的企業投資潮建立在一個極度集中的地緣政治風險之上。即使是短暫的台海封鎖演習，都可能導致 GPU 交貨延遲 3–6 個月，打亂所有科技巨頭的 capex 計畫。

### 筆記

我認為市場對 AI capex 的定價存在兩個方向的錯誤。第一，低估了能源瓶頸：6–8% 的全國用電占比意味著電力價格將結構性上升，這會壓縮 AI 的投資回報率 (ROI)。第二，高估了傳統 SaaS 的防禦能力：$1 兆的市值蒸發可能只是開始——當 AI 代理的能力在 2026 下半年再次跳升，更多 SaaS 公司將面臨營收斷崖。什麼會證明我錯？如果 AI 代理在實際企業部署中的可靠性遠低於預期（幻覺問題未解決），或 SaaS 公司成功轉型為 AI 原生平台——目前 Salesforce 的 AgentForce 就是這個方向的嘗試。

## 投資影響

- **QQQ**（Nasdaq 100 ETF）：AI capex 受惠者集中於 Nasdaq，但估值已在高位。若 NVIDIA 2/25 財報不及預期，下行 -5–8%。若超越預期且 guidance 強勁，上行 +3–5%。
- **SMH**（半導體 ETF）：直接受惠於 $6,350B+ 的 capex 潮，但台海風險是最大的尾部風險。中期偏多但需對沖地緣風險。上行 +10–15%，極端下行（台海危機）-20–30%。
- **SOXX**（費城半導體指數 ETF）：與 SMH 類似但更集中於美國半導體設計公司（NVIDIA、AMD、Broadcom）。NVIDIA 財報是短期催化劑。
- **IGV**（軟體 ETF）：SaaS 末日的重災區。傳統 SaaS 權重仍高的 IGV 面臨結構性下行。下行風險 -10–15%，除非成分股成功轉型。
- **XLU**（公用事業 ETF）：AI 資料中心的電力需求是公用事業的長期利多。發電公司（NextEra、Southern Company）直接受惠。上行 +5–10%。
- **KWEB**（中國科技 ETF）：中國 AI 發展（DeepSeek 等）在美國制裁下走出差異化路線。估值極低但政策風險極高。投機性做多。

## 後續觀察

1. **2 月 25 日 NVIDIA Q4 財報**：營收能否達到 $650–670 億的預期、Q1 guidance 是否上調——這是 AI 敘事的壓力測試
2. **3 月 Meta、Google 開發者大會**：AI 代理產品的實際能力展示將決定 SaaS 替代速度的市場預期
3. **台海局勢演變**：半導體供應鏈的地緣風險是否定價——TSMC ADR 的隱含波動率是觀察指標
4. **美國能源監管**：資料中心用電許可與電網擴容計畫的進展將決定 capex 計畫能否落地

---

*資料來源：[Reuters](https://www.reuters.com/technology/)、[Bloomberg](https://www.bloomberg.com/news/technology/)、[EIA](https://www.eia.gov/todayinenergy/)、[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)、[IMF](https://www.imf.org/en/Publications/WEO)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-20*
*本文僅供參考，不構成投資建議。*
