---
layout: post
title: "選擇性復甦的真相：拆解 2026 年「只有 AI 在漲」vs「產業全面回暖」的矛盾訊號"
date: 2026-02-22 12:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, sector-rotation, ai, manufacturing]
description: "市場寬度指標顯示輪動正在發生（RSP +3.3% vs SPY +1.8%、IWM +6.2%、銅價年漲 27%），但實體經濟訊號矛盾（GDP 1.4%、消費者信心十年新低）。本文用數據拆解「E 型經濟」中的選擇性復甦，評估 SPY、RSP、IWM、SMH、XLI、GLD、0050 的情境配置。"
lang: zh-TW
---

## 主題背景

2026 年初的投資敘事出現一個根本性矛盾：一方認為美國經濟只剩 AI 一根支柱撐著，其他產業乏善可陳；另一方引用小型股領漲、國際市場創高、銅價飆升等數據，主張產業輪動與全面復甦正在發生。本文以市場寬度指標與實體經濟數據對照，拆解這個矛盾的根源——結論並非非此即彼，而是一場「選擇性輪動」(selective rotation) 正在不同層次的經濟體中同時展開。

## 深度分析

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart11"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart11'), {
  type: 'bar',
  data: {
    labels: ['0050 (台灣50)', 'IYT (運輸)', 'EEM (新興市場)', 'IWM (小型股)', 'RSP (等權重)', 'XLI (工業)', 'SPY (市值加權)', 'XLK (科技)'],
    datasets: [{
      label: '2026 YTD 報酬率 (%)',
      data: [32.37, 8.75, 7.0, 6.2, 3.3, 3.0, 1.8, 0.5],
      backgroundColor: [
        'rgba(245, 158, 11, 0.8)',
        'rgba(16, 185, 129, 0.8)',
        'rgba(139, 92, 246, 0.8)',
        'rgba(59, 130, 246, 0.8)',
        'rgba(56, 189, 248, 0.8)',
        'rgba(34, 197, 94, 0.7)',
        'rgba(148, 163, 184, 0.7)',
        'rgba(107, 114, 128, 0.6)'
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
        text: '主要 ETF 2026 年迄今報酬率（資料來源：各交易所, 2026-02-21）',
        color: '#e2e8f0',
        font: { size: 12 }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', callback: function(v) { return v + '%'; } },
        grid: { color: 'rgba(255,255,255,0.1)' },
        title: { display: true, text: 'YTD %', color: '#94a3b8' }
      },
      y: {
        ticks: { color: '#94a3b8', font: { size: 11 } },
        grid: { color: 'rgba(255,255,255,0.05)' }
      }
    }
  }
});
</script>

上圖一目瞭然：如果「只有 AI 在漲」是事實，那小型股 IWM +6.2%、運輸股 IYT +8.75%、新興市場 EEM +7%、甚至台灣 0050 +32.37% 的表現便無法解釋。市值加權的 SPY (+1.8%) 反而落後等權重的 RSP (+3.3%)，這在科技獨強的敘事中不該發生。

### 市場寬度：輪動正在發生

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>市場寬度 (Market Breadth)</strong>：衡量上漲股票參與度的指標。寬度擴大表示漲勢不集中於少數權值股，整體市場基礎較健康。
</aside>

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>RSP（等權重指數）</strong>：Invesco S&P 500 Equal Weight ETF，對 S&P 500 成分股等比例加權，不受超大型股主導。RSP 跑贏 SPY 時，代表中小型成分股表現優於巨頭。
</aside>

**事實：** RSP（S&P 500 等權重 ETF）報價 $203.14，年初迄今 +3.3%，跑贏 SPY（$689.52, +1.8%）1.5 個百分點。IWM（Russell 2000 小型股 ETF）$264.17，+6.2%，大幅領先。已開發市場 EFA（$104.05）逼近 52 週高點 $105.24，新興市場 EEM（$62.34）幾乎觸及 52 週高點 $62.36，年漲 7%。截至 2 月 18 日，S&P 500 成分股中有 [67.8% 站上 200 日均線](https://insight.factset.com/sp-500-earnings-season-update-february-13-2026)，中型股指數創歷史新高。HYG（高收益債 ETF）$80.86，同樣在歷史高點，殖利率僅 5.72%——信用利差極度壓縮。銅價約 $5.85/磅，年漲約 27%，期貨一度逼近 $10,000/噸。**推論：** 這些跨資產類別的數據指向同一方向：資金正從超大型科技股流向價值、小型股、國際與原物料。這不是雜訊，而是系統性的板塊輪動 (sector rotation)。

### 實體經濟：製造業回暖但消費面疲弱

**事實：** 2025 年 Q4 GDP 年化僅 [1.4%](https://fortune.com/2026/02/12/e-shaped-economy-middle-lower-upper-class-k-shaped-economy-bank-america-data/)，遠低於市場預期的 2.5–3.0%，更從 Q3 的 4.4% 急遽放緩。2026 年 1 月消費者信心指數跌至 84.5，為 2014 年以來最低，單月下降 9.7 點。1 月成屋銷售 391 萬戶（年化率），月減 8.4%，全國不動產經紀人協會 (NAR) 稱之為「新住房危機」。ISM 製造業 PMI [52.6](https://www.prnewswire.com/news-releases/manufacturing-pmi-at-52-6-january-2026-ism-manufacturing-pmi-report-302675443.html)，結束 26 個月收縮期、創 2022 年以來最強擴張；服務業 PMI 53.8，連續 19 個月擴張，但新訂單從 56.5 降至 53.1。BLS JOLTS 數據顯示 2025 年 12 月職缺 650 萬個，持續下滑趨勢。**推論：** 實體經濟呈現分裂訊號：製造業確實在復甦（ISM 結束 26 個月收縮），但消費面疲弱——GDP 低於趨勢成長率、消費者信心十年新低、房市急凍。這不是全面復甦，也不是全面衰退，而是「生產端回暖、消費端承壓」的不對稱格局。

### 盈利矛盾：數字漂亮，股價跟不上

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>板塊輪動 (Sector Rotation)</strong>：資金從高估值板塊流向低估值板塊的過程。通常發生在經濟週期轉換或市場風格切換時。
</aside>

**事實：** Q4 2025 S&P 500 混合盈利成長 [13.2%，大幅超越 8.3% 的預估](https://insight.factset.com/sp-500-earnings-season-update-february-13-2026)。11 個板塊中有 9 個實現年增——工業板塊 +26%、資訊科技 +30.7%、通訊 +13.6%、金融 +9.2%。僅非必需消費品與能源板塊衰退。值得注意的是：XLI（工業 ETF）年初迄今僅上漲約 3%，盈利成長 26% 與股價表現 +3% 之間存在約 23 個百分點的落差——遠不如 IWM +6.2% 或 IYT +8.75% 那般強勁。**推論：** 這個脫節有兩種解讀——樂觀者認為是市場尚未「完全定價」的追趕空間 (catch-up trade)；悲觀者認為市場已在前瞻定價：關稅風險、利率維持高位、以及製造業擴張的可持續性疑慮，使投資人不願為工業股付出更大溢價。

### E 型經濟：不是 K 型，而是三層分化

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>E 型經濟 (E-shaped Economy)</strong>：由美銀提出，指消費層級不再是簡單的 K 型（上下分化），而是三橫槓的 E 型——高、中、低收入階層各有截然不同的經濟體驗。
</aside>

**事實：** [美國銀行 (BofA) 2026 年 1 月信用卡消費數據](https://fortune.com/2026/02/12/e-shaped-economy-middle-lower-upper-class-k-shaped-economy-bank-america-data/)顯示，高收入族群消費年增 +2.5%，中收入 +1.0%，低收入僅 +0.3%。薪資成長同樣分層：高收入 +3.7%，中收入 +1.6%。美國中產階級占比從 1971 年的 61% 縮減至 2023 年的 51%。US Bank 指出吉尼係數 (Gini coefficient) 處於 60 年新高。**推論：** 「經濟好不好」這個問題的答案，取決於你問的是「哪一層經濟」。高收入者擁有的資產（股票、房產）受益於 AI 敘事與資產增值；中低收入者面對的是實質消費力停滯。零售銷售月增 +0.2%、年增 +5.72% 的「正成長」數字，遮蔽了內部分配的極度不均。

### AI 資本支出：4 比 1 的收入落差

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>信用利差 (Credit Spread)</strong>：高收益債券殖利率與國債殖利率的差距。利差收窄代表市場認為違約風險低，經濟環境樂觀。
</aside>

**事實：** 超大型雲端廠商 (hyperscaler) 2025 年 AI 資本支出約 $4,000 億美元，2026 年預估達 [$6,350–6,650 億美元](https://cressetcapital.com/articles/market-update/market-update-12-17-25-2026-outlook-is-ai-a-bubble/)。但企業 AI 實際營收約 $1,000 億美元——資本支出對營收比為 4:1。[95% 的 AI 試驗計畫未能實現商業價值](https://cressetcapital.com/articles/market-update/market-update-12-17-25-2026-outlook-is-ai-a-bubble/)，僅 5% 的企業回報有意義的 EBIT 影響。NVIDIA 85% 的營收來自 6 個客戶，毛利率從 78.4% 高點開始回落。IGV（軟體 ETF）從 2025 年底高點下跌約 30%，對沖基金 2026 年初靠做空 SaaS 公司賺了 $240 億美元。**推論：** 資本正從 AI 概念股流向原物料、工業、金融與醫療板塊。市場並非否定 AI 的長期潛力，而是重新校準短期估值——當投入與產出的比例如此失衡，資金自然尋找更有確定性的標的。

### 歷史視角：變革性技術的生產力紅利需要時間

**事實：** 華頓商學院 PWBM 模型估計，AI 對 GDP 生產力的貢獻 2025 年僅 0.01 個百分點，預計 2032 年才達到峰值 0.2 個百分點。但財政面有實質進展——CHIPS 法案正轉化為實際項目，[三星德州生產聚落目標 2026 年投產](https://insight.factset.com/sp-500-earnings-season-update-february-13-2026)。2026 年 1 月建築業增加 33,000 個就業，占當月新增就業的四分之一。BLS 預估醫療保健到 2033 年將增加 230 萬個就業。**推論：** AI 的生產力敘事是真實的，但時間軸被壓縮了。真正驅動當前非科技板塊復甦的，與其說是 AI 擴散效應，不如說是 CHIPS 法案、基礎建設法案與能源轉型的實際財政支出——這些是「舊經濟」的真金白銀，而非「新經濟」的預期折現。

### 筆記

**事實：** 市場寬度指標（RSP > SPY、IWM +6.2%、銅價年漲 27%）確實顯示板塊輪動正在發生，Q4 盈利 11 板塊中 9 個正成長。但實體經濟同時發出矛盾訊號——GDP 1.4%、消費者信心十年新低、成屋銷售急凍。
**推論：** 市場目前可能低估了「選擇性輪動」與「全面復甦」之間的距離。資金從 AI 巨頭流向價值板塊是事實，但這更像是估值重分配，而非經濟體質改善的反映。當高收入消費 +2.5% 而低收入僅 +0.3%，這場「復甦」的基礎並不穩固。

**一句話結論：** 2026 年的復甦不是「全面」也不是「虛假」，而是一場選擇性輪動——投資人需要的不是選邊站，而是理解自己看到的是哪一層經濟。
**資產配置框架（3–12 個月）：** RSP 優於 SPY 作為核心美股配置；IWM 為降息選擇權；XLI 分批建倉觀察追趕訊號；GLD 5–10% 對沖尾部風險；0050 維持但控制單一市場集中度。
**再平衡觸發條件（1–3 年）：** (1) ISM 製造業 PMI 連續三個月低於 49，減碼 XLI 與 IWM；(2) AI 資本支出對營收比收斂至 2:1 以下，重新加碼 SMH；(3) 消費者信心回升至 95 以上且 GDP 突破 2.5%，全面從 GLD 轉向風險資產。

## 投資影響

### 三種情境（12 個月視野）

**選擇性擴張情境（機率 50%）：** GDP 維持 1.5–2.0%，低於趨勢但避免衰退。非 AI 板塊受財政支出與年底前降息支撐逐步改善，但消費疲弱限制上行空間。聯準會下半年降息 1–2 次。SPY 年回報 5–8%，RSP 跑贏 SPY 2–4 個百分點。**失效條件：** ISM 製造業 PMI 連續三個月低於 50。

**全面回升情境（機率 25%）：** AI 生產力外溢加速，降息早於預期（6 月首次），製造業回流勢頭強勁，GDP 回升至 2.5% 以上。IWM 年回報 15–20%，XLI 出現估值追趕。**失效條件：** 消費者信心指數未能回升至 90 以上。

**衰退情境（機率 25%）：** AI 資本支出循環令人失望（4:1 比率未收斂），消費信貸壓力擴散，關稅衝擊超預期，經濟陷入溫和衰退。SPY 回調 10–15%。GLD 成為最佳避險資產。**失效條件：** HYG 殖利率飆升突破 7%，信用利差急劇擴大。

### ETF 配置框架

- **SPY**（$689.52）：市值加權仍受 AI 集中風險影響。若 NVIDIA 2 月 25 日財報不如預期，SPY 受拖累將大於 RSP。選擇性擴張情境下維持中性配置。
- **RSP**（$203.14）：等權重結構天然受益於市場寬度擴大。年初迄今已跑贏 SPY 1.5pp，基準情境下為偏好持倉。
- **IWM**（$264.17）：小型股領漲 +6.2%，但高度依賴降息兌現。若 6 月降息落空，IWM 可能回吐漲幅。全面回升情境下最大受益者。
- **SMH**：半導體估值已在高位，NVIDIA 2 月 25 日財報為關鍵催化劑。毛利率下滑趨勢與客戶集中度（85% 營收來自 6 家客戶）為結構性隱憂。
- **XLI**：盈利 +26% 但股價僅 +3% 的落差是潛在追趕交易，也可能是價值陷阱。分辨標準：觀察 Q1 新訂單與積壓訂單是否改善。
- **GLD**：無論通膨或衰退情境均有避險功能。聯準會利率 3.5–3.75% 維持不變，10 年期殖利率 4.08%，實質利率仍為正值壓制黃金，但市場計價 6 月降息機率約 45%——一旦降息預期升溫，GLD 受益。建議配置 5–10%。
- **0050**（NT$69.70, +32.37% YTD）：台灣受益於 CHIPS 法案帶動的半導體需求與 AI 硬體供應鏈地位。但地緣政治風險持續存在，且台股漲幅已大幅領先全球。維持核心配置但留意估值過熱回調風險。

## 後續觀察

1. **NVIDIA Q4 財報（2 月 25 日）**：AI 資本支出動能是否延續，以及毛利率走勢，將決定 SMH 與科技板塊短期方向
2. **Conference Board 消費者信心指數（2 月 24 日）**：若連續第二個月大幅下滑至 80 以下，衰退情境機率需上調
3. **ISM 製造業 PMI（3 月初）**：1 月 52.6 為 2022 年來最強，能否維持 52 以上是製造業復甦持續性的關鍵驗證
4. **聯準會 3 月 FOMC 會議與點陣圖**：2026 年降息次數的前瞻指引，直接影響 IWM 與利率敏感板塊
5. **2026 年 Q1 GDP 初估（4 月底）**：成長是否從 1.4% 反彈，將決定「選擇性擴張」敘事的存亡

---

*資料來源：[FactSet Earnings Insight](https://insight.factset.com/sp-500-earnings-season-update-february-13-2026)、[Fortune](https://fortune.com/2026/02/12/e-shaped-economy-middle-lower-upper-class-k-shaped-economy-bank-america-data/)、[Cresset Capital](https://cressetcapital.com/articles/market-update/market-update-12-17-25-2026-outlook-is-ai-a-bubble/)、各交易所 ETF 報價*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
