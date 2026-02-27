---
layout: post
title: "18.8 兆美元之下的裂縫：美國家庭信用風險正在變成區域與族群問題"
date: 2026-02-27 18:05:00 +0800
categories: [macro]
tags: [macro, consumercredit, employment, realestate]
macro_kind: long
description: "美國家庭債務在 2025 年 Q4 升至 18.776 兆美元，但真正變化不在總量，而在逾期風險的分層：學貸嚴重逾期流入率一年內由 0.70% 跳升到 16.19%，低收入地區房貸逾期也顯著惡化。"
lang: zh-TW
---

## 問題定義與背景：為什麼「總量穩定」會掩蓋「局部惡化」？

2025 年第四季，美國家庭債務升至 **18.776 兆美元**，單季再增 **1,910 億美元**，表面上看是熟悉的「高債務、但金融市場仍平穩」敘事。同期股市與信用市場沒有出現明顯恐慌：S&P 500 仍在高位，VIX 約 17.93，高收益債利差（HY OAS）約 2.94，遠不到系統性壓力定價的區間（[NY Fed](https://www.newyorkfed.org/newsevents/news/research/2026/20260210), [FRED SP500](https://fred.stlouisfed.org/series/SP500), [FRED VIX](https://fred.stlouisfed.org/series/VIXCLS), [FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)）。

但核心問題不是「債務有沒有增加」，而是：**信用風險正在全面擴散，還是已經先集中在特定地區與特定借款人？**

這個問題重要，因為兩種情境的政策與市場後果完全不同。若是全面惡化，通常會先看到跨品類逾期同步上升、信用利差快速走寬；若是局部惡化，市場常常先忽略，直到地方就業、消費與地區銀行資產品質被拖累，才逐步反映在定價上。換句話說，真正需要追蹤的是「分布」，不是只看「總和」。

## 關鍵數據與方法：用「流量 + 分層 + 勞動質地」看信用裂縫

### 一、先看流量，不只看餘額

多數新聞會先報信用卡或學貸「餘額」創高，但風險判讀更關鍵的是 NY Fed 的 **flow into serious delinquency（流入嚴重逾期）**。理由很簡單：餘額高不一定代表壞帳惡化，但流入嚴重逾期上升，代表還款能力正在邊際惡化。

在 2025Q4，最值得注意的是學生貸款：90 天以上嚴重逾期流入率一年內由 **0.70%** 躍升至 **16.19%**。相較之下，信用卡是 **7.18% → 7.13%**（幾乎持平），全體貸款則是 **1.70% → 3.26%**（[NY Fed Household Debt and Credit Report](https://www.newyorkfed.org/newsevents/news/research/2026/20260210)）。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260227credit"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260227credit'), {
  type: 'bar',
  data: {
    labels: ['學生貸款', '信用卡', '全部貸款'],
    datasets: [
      {
        label: '2024Q4（%）',
        data: [0.70, 7.18, 1.70],
        backgroundColor: 'rgba(59, 130, 246, 0.75)'
      },
      {
        label: '2025Q4（%）',
        data: [16.19, 7.13, 3.26],
        backgroundColor: 'rgba(239, 68, 68, 0.78)'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '流入嚴重逾期比率：2024Q4 vs 2025Q4（資料來源：NY Fed）',
        color: '#e2e8f0',
        font: { size: 12 }
      },
      legend: { labels: { color: '#94a3b8' } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.08)' } },
      y: {
        ticks: { color: '#94a3b8', callback: function(v){ return v + '%'; } },
        grid: { color: 'rgba(255,255,255,0.08)' }
      }
    }
  }
});
</script>

這張圖的重點不是「每個品類都在惡化」，而是「**惡化集中在學生貸款與整體尾端風險**」。如果把它誤讀成全面信用崩壞，就會高估短期系統性風險；若把它當作單一噪音，又會低估中期消費與地方金融壓力。

### 二、再看分層：低收入地區房貸逾期抬頭

NY Fed Liberty Street 的區域研究指出，2021 到 2025 年間，低所得郵遞區號的房貸 90+ 天逾期流量，從大約 **0.5%** 升到接近 **3.0%**。同一時間，就業惡化較明顯縣市，其房貸新逾期惡化幅度約 **+0.6 個百分點**，相對穩定縣市約 **+0.2 個百分點**（[Liberty Street Economics](https://libertystreeteconomics.newyorkfed.org/2026/02/where-are-mortgage-delinquencies-rising-the-most/)）。

這代表「地理型信用再定價」已經開始：不是全國房貸都壞，而是收入與就業條件較弱地區先出現裂縫。對讀者來說，方法上的重點是把「全國平均」和「弱勢分位」拆開看，否則會得出錯誤結論。

### 三、最後看傳導條件：高利率 + 勞動市場質地轉弱

聯準會 G.19 顯示，2025 年消費信貸年增約 **2.4%**，12 月單月年化增速約 **5.7%**，循環信貸年化增速約 **12.6%**，信用卡 APR 約 **20.97%**。簡單說，信貸還在長，而且資金成本仍高（[Federal Reserve G.19](https://www.federalreserve.gov/releases/g19/current/default.htm)）。

同時，BLS 2026 年 1 月就業報告雖仍有 **13 萬**新增非農、失業率 **4.3%**，但長期失業人口升至 **180 萬**（年增 38.6 萬）、被迫兼職升至 **490 萬**（年增 41 萬），顯示勞動市場「表面穩定、底層轉弱」（[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)）。

若再加上個人儲蓄率降至 **3.6%**、家庭債務償付比長期在 **11%+**，可支撐緩衝的空間並不寬（[FRED PSAVERT](https://fred.stlouisfed.org/series/PSAVERT), [FRED TDSP](https://fred.stlouisfed.org/series/TDSP)）。

## 反方觀點與限制：為何這不是「立即性全面危機」

反方最有力的論點來自 NY Fed 研究主管 **Wilbert van der Klaauw** 的脈絡：房貸逾期雖然上升，但整體仍接近歷史常態，壓力主要集中在特定收入帶與地區，而非全面失序（[NY Fed release](https://www.newyorkfed.org/newsevents/news/research/2026/20260210)）。

另外，信用卡嚴重逾期流入率沒有延續性上衝，加上市場風險指標（VIX、HY OAS）仍在可控區間，也支持「目前較像局部收縮，而非系統性信用事件」的判斷。

但這個框架有三個限制：

1. **資料時滯**：家庭信用與就業資料有發布落差，市場可能先反應、後驗證。  
2. **口徑差異**：NY Fed（信用樣本）與 G.19（總體統計）對學貸餘額口徑不同，不能直接一對一比較。  
3. **地區異質性過高**：全國平均常稀釋地方壓力，因此若只看全國數字，容易低估縣市層級的消費降速與銀行信用成本抬升。

## 結論與可行建議：把「局部裂縫」當成慢變風險管理

綜合目前證據，較合理的結論是：美國家庭信用風險尚未進入全面危機，但已出現清楚的「區域化 + 族群化」裂縫，且最早、最明顯的壓力點在學貸與低收入地區房貸。這類風險的特性不是瞬間爆發，而是慢慢擴散，先侵蝕地方消費與信用成本，再決定是否上升為全市場議題。

對一般讀者而言，三個可行做法是：

- **用分層指標取代單一平均值**：固定追蹤「流入嚴重逾期」而非只看債務餘額，並拆開看學生貸款、信用卡、房貸。  
- **把勞動市場改看質地**：除了失業率，也要看長期失業與被迫兼職，因為這兩者更早影響還款彈性。  
- **建立可驗證的分水嶺**：若未來兩季學貸嚴重逾期流入率回落，且低收入地區房貸逾期不再擴大，代表裂縫可能止穩；反之，若就業質地續弱且高收益債利差走寬，局部風險就可能向資本市場傳導。

這篇報告最重要的訊息是：在總量數字看起來「還好」的時候，風險往往已在分布裡發生。越早把觀察框架從「平均值」切換到「分層與流量」，越不容易在後段被動追認現實。

---

*資料來源：[NY Fed Household Debt and Credit Report 2025Q4](https://www.newyorkfed.org/newsevents/news/research/2026/20260210)、[NY Fed Liberty Street Economics](https://libertystreeteconomics.newyorkfed.org/2026/02/where-are-mortgage-delinquencies-rising-the-most/)、[Federal Reserve G.19](https://www.federalreserve.gov/releases/g19/current/default.htm)、[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)、[FRED: PSAVERT](https://fred.stlouisfed.org/series/PSAVERT)、[FRED: TDSP](https://fred.stlouisfed.org/series/TDSP)、[FRED: SP500](https://fred.stlouisfed.org/series/SP500)、[FRED: VIXCLS](https://fred.stlouisfed.org/series/VIXCLS)、[FRED: BAMLH0A0HYM2](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)*  
*市場數據截至：2026-02-27*  
*本文僅供參考，不構成投資建議。*