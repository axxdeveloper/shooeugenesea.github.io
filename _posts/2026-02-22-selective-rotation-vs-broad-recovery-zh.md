---
layout: post
title: "選擇性復甦的真相：AI 溢出效應與財政支出撐起投資端，消費端為何跟不上？"
date: 2026-02-22 12:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, sector-rotation, ai, manufacturing]
description: "看似「非 AI 板塊在輪動」（IWM +6.2%、銅價 +27%、RSP 跑贏 SPY），但深究因果鏈：銅價受 data center 建設推動、工業股受 CHIPS Act 支撐、公用事業受 AI 電力需求拉動。真正的分裂不是 AI vs 非 AI，而是投資/生產端（受 AI 溢出與財政支出驅動）vs 消費端（GDP 1.4%、信心十年新低）。評估 SPY、RSP、IWM、SMH、XLI、GLD 的情境配置。"
lang: zh-TW
---

## 主題背景

2026 年初的投資敘事出現一個根本性矛盾：一方認為美國經濟只剩 AI 一根支柱撐著，其他產業乏善可陳；另一方引用小型股領漲、銅價飆升等數據，主張產業輪動與全面復甦正在發生。但兩方都忽略了一個關鍵問題：看似「非 AI」的復甦訊號，有多少其實是 AI 的間接溢出效應？銅價飆漲部分來自 data center 建設需求，公用事業領漲部分來自 AI 電力消耗，工業股回暖部分來自 CHIPS Act 半導體工廠興建。本文追溯每個「復甦證據」的實際因果鏈，結論是：真正的分裂不在 AI 與非 AI 之間，而在**投資/生產端**（受 AI 溢出效應與財政支出雙重驅動）與**消費端**（GDP 1.4%、消費者信心十年新低、房市急凍）之間。

## 深度分析

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart11"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart11'), {
  type: 'bar',
  data: {
    labels: ['IYT (運輸)', 'IWM (小型股)', 'RSP (等權重)', 'XLI (工業)', 'SPY (市值加權)', 'XLK (科技)'],
    datasets: [{
      label: '2026 YTD 報酬率 (%)',
      data: [8.75, 6.2, 3.3, 3.0, 1.8, 0.5],
      backgroundColor: [
        'rgba(16, 185, 129, 0.8)',
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

上圖顯示資金確實在向非科技板塊流動：運輸股 IYT +8.75%、小型股 IWM +6.2%、等權重 RSP +3.3% 均跑贏市值加權的 SPY +1.8%。但這些「非 AI 板塊」真的與 AI 無關嗎？追溯因果鏈，答案比表面複雜：IYT 的物流需求部分來自 AI 硬體出貨與 data center 設備運輸；銅價年漲 27% 的背後，data center 建設是重要推手；XLI 工業股的回暖有相當比例來自 CHIPS Act 半導體工廠建設。換言之，市場上看到的「資金從 AI 轉向非 AI」其實是假象——這些「非 AI」板塊之所以漲，很大程度上是因為 AI 的錢花出去之後，流到了蓋廠房的營建商、供電的電力公司、運設備的物流業。資金沒有離開 AI，只是沿著 AI 的供應鏈往下游走。

### 市場寬度：輪動正在發生

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>市場寬度 (Market Breadth)</strong>：衡量上漲股票參與度的指標。寬度擴大表示漲勢不集中於少數權值股，整體市場基礎較健康。
</aside>

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>RSP（等權重指數）</strong>：Invesco S&P 500 Equal Weight ETF，對 S&P 500 成分股等比例加權，不受超大型股主導。RSP 跑贏 SPY 時，代表中小型成分股表現優於巨頭。
</aside>

**事實：** RSP（S&P 500 等權重 ETF）報價 $203.14，年初迄今 +3.3%，跑贏 SPY（$689.52, +1.8%）1.5 個百分點。IWM（Russell 2000 小型股 ETF）$264.17，+6.2%，大幅領先。已開發市場 EFA（$104.05）逼近 52 週高點 $105.24，新興市場 EEM（$62.34）幾乎觸及 52 週高點 $62.36，年漲 7%。截至 2 月 18 日，S&P 500 成分股中有 [67.8% 站上 200 日均線](https://insight.factset.com/sp-500-earnings-season-update-february-13-2026)，中型股指數創歷史新高。HYG（高收益債 ETF）$80.86，同樣在歷史高點，殖利率僅 5.72%——信用利差極度壓縮。銅價約 $5.85/磅，年漲約 27%，期貨一度逼近 $10,000/噸。**推論：** 市場寬度的擴大是事實——RSP 跑贏 SPY、IWM 大幅領先、67.8% 成分股站上 200 日均線。但驅動這場輪動的不是「AI 退潮、舊經濟接棒」，而是 AI 資本支出的溢出效應疊加財政支出（CHIPS Act、基礎建設法案）。銅價飆漲同時反映 data center 建設需求與傳統基建；國際市場（EFA、EEM）的強勢部分來自 AI 供應鏈（台灣、南韓權重高）。資金流向的廣度在擴大，但根源仍高度依賴 AI 投資循環與政府財政。

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

**事實：** 超大型雲端廠商 (hyperscaler) 2025 年 AI 資本支出約 $4,000 億美元，2026 年預估達 [$6,350–6,650 億美元](https://cressetcapital.com/articles/market-update/market-update-12-17-25-2026-outlook-is-ai-a-bubble/)。但企業 AI 實際營收約 $1,000 億美元——資本支出對營收比為 4:1。[95% 的 AI 試驗計畫未能實現商業價值](https://cressetcapital.com/articles/market-update/market-update-12-17-25-2026-outlook-is-ai-a-bubble/)，僅 5% 的企業回報有意義的 EBIT 影響。NVIDIA 85% 的營收來自 6 個客戶，毛利率從 78.4% 高點開始回落。IGV（軟體 ETF）從 2025 年底高點下跌約 30%，對沖基金 2026 年初靠做空 SaaS 公司賺了 $240 億美元。**推論：** 這裡的弔詭是：資本雖然從 AI 概念股流向原物料、工業與金融板塊，但接收端的「舊經濟」復甦本身也高度依賴 AI 資本支出的上游溢出。銅價漲是因為 data center 要用銅，建築業就業增是因為 CHIPS 工廠在蓋，電力需求增是因為 AI 算力在吃電。資金表面上在「逃離 AI」，實際上是在追逐 AI 投資循環的不同環節。這代表如果 AI 資本支出循環逆轉（4:1 的投入產出比無法收斂），受傷的不只是 NVIDIA 和雲端股，連帶的銅價、工業股與建築業就業都會回吐。

### 歷史視角：變革性技術的生產力紅利需要時間

**事實：** 華頓商學院 PWBM 模型估計，AI 對 GDP 生產力的貢獻 2025 年僅 0.01 個百分點，預計 2032 年才達到峰值 0.2 個百分點。但財政面有實質進展——CHIPS 法案正轉化為實際項目，[三星德州生產聚落目標 2026 年投產](https://insight.factset.com/sp-500-earnings-season-update-february-13-2026)。2026 年 1 月建築業增加 33,000 個就業，占當月新增就業的四分之一。BLS 預估醫療保健到 2033 年將增加 230 萬個就業。**推論：** AI 的直接生產力紅利仍在遠方，但 AI 的間接溢出效應已經在創造真實的經濟活動。CHIPS 法案本身就是政府對 AI/半導體競爭的財政回應——33,000 個建築業就業不是因為 AI 提高了生產力，而是因為要蓋 AI 晶片的工廠。這正是本文的核心觀察：當前的「非科技復甦」不是獨立於 AI 之外的有機成長，而是 AI 投資循環 + 政府財政支出共同創造的衍生需求。這個溢出鏈是真實的——但它的持續性取決於上游（AI 資本支出）是否持續。

### 筆記

**事實：** 市場寬度在擴大（RSP > SPY、IWM +6.2%、Q4 盈利 11 板塊中 9 個正成長），但追溯因果鏈，許多「非 AI」板塊的復甦實際上依賴 AI 溢出效應（銅價 → data center 建設、XLU → AI 電力、工業 → CHIPS Act 工廠）與財政支出。消費端則明確疲弱——GDP 1.4%、消費者信心十年新低、成屋銷售急凍、低收入消費年增僅 +0.3%。
**推論：** 2026 年的經濟不是「AI 獨撐」也不是「全面復甦」，而是 AI 資本支出 + 財政支出正透過建設、電力、物流、原物料等渠道向投資/生產端溢出，但消費端被完全繞過。這意味著這場「復甦」高度依賴兩個引擎：AI 投資循環的持續性，以及政府財政的支撐力度。任何一個引擎熄火，連帶的工業、原物料、建築業就業都會受衝擊。

**一句話結論：** 真正的分裂不是 AI vs 非 AI，而是投資/生產端（AI 溢出 + 財政驅動）vs 消費端（實質購買力停滯）——投資人要問的不是「AI 還能漲嗎」，而是「AI 的溢出鏈能撐多久」。
**資產配置框架（3–12 個月）：** RSP 優於 SPY 作為核心美股配置（受益於寬度擴大但不過度集中於 AI 巨頭）；IWM 為降息選擇權；XLI 分批建倉但認知其 AI 溢出依賴性；GLD 5–10% 對沖 AI 投資循環逆轉與財政風險；0050 維持但本質上是 AI 曝險，需控制集中度。
**再平衡觸發條件（1–3 年）：** (1) AI 資本支出年增率轉負或 4:1 投入產出比惡化，同步減碼 SMH、XLI 與銅相關部位——它們是同一條溢出鏈；(2) 消費者信心回升至 95 以上且 GDP 突破 2.5%，代表復甦從投資端擴散到消費端，增加消費與風險資產配置；(3) ISM 製造業 PMI 連續三個月低於 49，確認溢出效應消退，轉向 GLD 與 TLT。

## 投資影響

### 三種情境（12 個月視野）

**溢出持續情境（機率 50%）：** AI 資本支出維持高位，CHIPS Act 與基建法案持續撥款，投資/生產端穩健但消費端低迷。GDP 維持 1.5–2.0%，聯準會下半年降息 1–2 次。SPY 年回報 5–8%，RSP 跑贏 SPY 2–4 個百分點。核心風險是市場誤把 AI 溢出當成全面復甦而追高消費股。**失效條件：** AI 資本支出年增率降至個位數。

**溢出擴散情境（機率 25%）：** AI 生產力開始轉化為企業獲利（4:1 比率收斂至 2.5:1），降息早於預期（6 月首次），投資端復甦終於外溢到消費端——就業與薪資成長加速，GDP 回升至 2.5% 以上。IWM 年回報 15–20%。**失效條件：** 消費者信心指數未能回升至 90 以上。

**溢出逆轉情境（機率 25%）：** AI 資本支出循環見頂（hyperscaler 縮減預算），4:1 投入產出比無法收斂，連帶衝擊整條溢出鏈——銅價回落、建築業就業減速、工業股獲利下修。消費端本就脆弱，經濟滑入溫和衰退。SPY 回調 10–15%，XLI 與 IWM 跌幅更大。GLD 成為最佳避險資產。**失效條件：** HYG 殖利率飆升突破 7%，信用利差急劇擴大。

### ETF 配置框架

- **SPY**（$689.52）：市值加權仍受 AI 集中風險影響。若 NVIDIA 2 月 25 日財報不如預期，SPY 受拖累將大於 RSP。選擇性擴張情境下維持中性配置。
- **RSP**（$203.14）：等權重結構天然受益於市場寬度擴大。年初迄今已跑贏 SPY 1.5pp，基準情境下為偏好持倉。
- **IWM**（$264.17）：小型股領漲 +6.2%，但高度依賴降息兌現。若 6 月降息落空，IWM 可能回吐漲幅。全面回升情境下最大受益者。
- **SMH**：半導體估值已在高位，NVIDIA 2 月 25 日財報為關鍵催化劑。毛利率下滑趨勢與客戶集中度（85% 營收來自 6 家客戶）為結構性隱憂。
- **XLI**：盈利 +26% 但股價僅 +3% 的落差是潛在追趕交易，也可能是價值陷阱。需注意工業股的復甦部分依賴 CHIPS Act 工廠建設與 AI 基建溢出——若 AI 資本支出循環逆轉，工業股也會受連帶衝擊。分辨標準：觀察 Q1 新訂單中非半導體相關的比例是否擴大。
- **GLD**：無論通膨或衰退情境均有避險功能。聯準會利率 3.5–3.75% 維持不變，10 年期殖利率 4.08%，實質利率仍為正值壓制黃金，但市場計價 6 月降息機率約 45%——一旦降息預期升溫，GLD 受益。建議配置 5–10%。
- **0050**（NT$69.70, +32.37% YTD）：台灣受益於 CHIPS 法案帶動的半導體需求與 AI 硬體供應鏈地位。但地緣政治風險持續存在，且台股漲幅已大幅領先全球。維持核心配置但留意估值過熱回調風險。

## 後續觀察

1. **NVIDIA Q4 財報（2 月 25 日）**：不只關乎 SMH——若 AI 資本支出動能放緩，整條溢出鏈（銅、工業、建築就業）都會承壓。毛利率與客戶集中度是關鍵指標
2. **Conference Board 消費者信心指數（2 月 24 日）**：消費端是否出現從投資端溢出的跡象。若連續第二個月跌破 80，確認投資/消費分裂持續
3. **ISM 製造業 PMI（3 月初）**：1 月 52.6 為 2022 年來最強，但需拆解新訂單來源——來自 CHIPS Act/data center 的比例 vs 傳統製造業的比例，決定復甦的自主性
4. **聯準會 3 月 FOMC 會議與點陣圖**：2026 年降息次數的前瞻指引，直接影響 IWM 與利率敏感板塊
5. **2026 年 Q1 GDP 初估（4 月底）**：觀察投資分項是否維持、消費分項是否回升——若投資強但消費續弱，確認「溢出未擴散」格局

---

*資料來源：[FactSet Earnings Insight](https://insight.factset.com/sp-500-earnings-season-update-february-13-2026)、[Fortune](https://fortune.com/2026/02/12/e-shaped-economy-middle-lower-upper-class-k-shaped-economy-bank-america-data/)、[Cresset Capital](https://cressetcapital.com/articles/market-update/market-update-12-17-25-2026-outlook-is-ai-a-bubble/)、各交易所 ETF 報價*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
