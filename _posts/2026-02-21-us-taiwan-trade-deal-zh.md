---
layout: post
title: "歷史性突破：美台簽署對等貿易協定，關稅降至 15%、近 850 億美元採購承諾重塑經濟版圖"
date: 2026-02-21 18:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, taiwan, tariff]
description: "美國與台灣 2 月 13 日簽署對等貿易協定，關稅從 20% 降至 15%，台灣承諾採購 840 億美元美國能源、航空與設備。EWT 逼近 52 週高點，TAIEX 站上歷史新高。"
lang: zh-TW
---

## 國際政經背景

2 月 13 日，美國貿易代表 Jamieson Greer 與台灣代表簽署[《美台對等貿易協定》(Agreement on Reciprocal Trade)](https://ustr.gov/about/policy-offices/press-office/press-releases/2026/february/ambassador-greer-oversees-signing-us-taiwan-agreement-reciprocal-trade)，這是自 1994 年《貿易暨投資架構協定》(TIFA) 以來雙邊經貿關係最大的突破。美國將對台灣商品關稅從 20% 降至 15%（與日本、南韓同級），台灣承諾削減 [99% 的對美關稅壁壘](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/february/fact-sheet-us-taiwan-agreement-reciprocal-trade)，並在 2025–2029 年間採購逾 840 億美元的美國能源、航空與基礎設施設備。協定尚待台灣立法院審議通過方能生效。

## 經濟傳導機制

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart5"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart5'), {
  type: 'bar',
  data: {
    labels: ['LNG + 原油', '民航機 + 引擎', '電力設備 + 鋼鐵', '合計'],
    datasets: [
      {
        label: '採購承諾（十億美元，2025–2029）',
        data: [44.4, 15.2, 25.2, 84.8],
        backgroundColor: [
          'rgba(59, 130, 246, 0.75)',
          'rgba(34, 197, 94, 0.7)',
          'rgba(251, 191, 36, 0.7)',
          'rgba(168, 85, 247, 0.7)'
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(251, 191, 36, 1)',
          'rgba(168, 85, 247, 1)'
        ],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '美台對等貿易協定：台灣採購承諾分項（資料來源：USTR Fact Sheet）',
        color: '#e2e8f0',
        font: { size: 12 }
      },
      legend: { display: false }
    },
    scales: {
      x: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: {
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + 'B'; } },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  }
});
</script>

### 這份協定到底改變了什麼？

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>對等關稅 (Reciprocal Tariff)</strong>：兩國互相對對方商品課徵的關稅。川普政府以此為槓桿要求貿易夥伴降低對美壁壘。
</aside>

2025 年 8 月，川普依據國際緊急經濟權力法 (IEEPA) 對台灣商品[課徵 20% 關稅](https://www.cnbc.com/2026/01/16/asia-markets-live-friday-nikkei-225-hang-seng-index-kospi-taiwan-trade-deal-chips-banks.html)——高於日本和南韓的 15%。台灣出口企業在價格上一夕失去競爭力。這份新協定將關稅從 20% 降至 15%，並對約 2,000 項產品予以額外豁免，[有效平均關稅降至約 12.3%](https://www.aplf.com/2026/02/20/trade-us-taiwan-trade-agreement-slashes-tariffs-and-boosts-investment/)。汽車零件與木材從 25% 降至 15%；學名藥、航空零件和美國不生產的天然資源則[直接零關稅](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/february/fact-sheet-us-taiwan-agreement-reciprocal-trade)。

對台灣而言，衝擊更為深遠——不僅僅是關稅數字。台灣同意[接受美國 FDA 醫療器材與藥品許可](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/february/fact-sheet-us-taiwan-agreement-reciprocal-trade)、取消汽車進口數量限制、以及大幅放寬農產品市場准入（牛肉、豬肉、家禽、乳製品）。更關鍵的是，根據 [Global Taiwan Institute 分析](https://globaltaiwan.org/2026/02/whats-in-the-new-us-taiwan-agreement-on-reciprocal-trade/)，第 5.4.6 條規定若台灣與中國簽訂新的雙邊貿易協定，美方有權終止本協定——這實質上將經貿協定嵌入了地緣政治框架。

### 840 億美元的戰略意義

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>LNG（液化天然氣）</strong>：天然氣經冷卻至 −162°C 液化後運輸。台灣進口能源約 98%，LNG 是發電主力。
</aside>

台灣約 [98% 能源依賴進口](https://energytracker.asia/taiwan-lng/)，這讓 444 億美元的 LNG 與原油採購承諾不僅是貿易讓步，更是能源安全的戰略佈局。台灣目前有三座 LNG 接收站——永安、台中、桃園觀塘——[總接收能力約 1,950 萬噸/年](https://www.gem.wiki/Taichung_LNG_Terminal)，台中四期擴建預計 2029 年完工後，該站總容量將從約 600 萬噸提升至 1,300 萬噸。中油 (CPC) 已與卡達能源簽署[長約](https://jpt.spe.org/taiwan-signs-agreement-with-qatarenergy-as-new-north-field-east-expansion-partner)，美國 LNG 的加入將分散供應來源，降低單一供應商風險。

152 億美元民航機與引擎採購、252 億美元電力與鋼鐵設備則分別對應台灣的航空業機隊更新需求與電網升級計畫。考量到台灣已確定[無法達成 2025 年 20% 再生能源目標](https://energytracker.asia/taiwan-lng/)，天然氣發電占比勢必持續攀升——這讓能源採購承諾具備真實的經濟基礎，而非純粹的政治姿態。

### 貿易逆差的結構性問題

這份協定的背景是[急速擴大的美台貿易逆差](https://www.census.gov/foreign-trade/balance/c5830.html)。2024 年美國對台商品逆差為 737 億美元，2025 年暴增至 1,468 億美元——幾乎翻倍，主要受 TSMC 晶片出口帶動。840 億美元的採購承諾分攤至四年，年均約 210 億美元，僅相當於 2025 年逆差的 14%。這足以展示政治誠意，但遠不足以「平衡」貿易。

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>有效平均關稅</strong>：考量所有豁免、例外後，進口商實際負擔的加權平均稅率。比名目稅率更能反映真實成本。
</aside>

### 市場定價 vs 實際風險

市場反應迅速且正面。TAIEX 在 2 月 11 日觸及歷史新高 33,605 點，亞洲半導體股在協定簽署後[集體上漲](https://www.cnbc.com/2026/01/16/asia-markets-live-friday-nikkei-225-hang-seng-index-kospi-taiwan-trade-deal-chips-banks.html)。EWT 近 52 週高點 $73.88。但市場可能低估了兩個風險：一、協定仍需[立法院審議通過](https://focustaiwan.tw/business/202602130017)，而國民黨與民眾黨組成的在野聯盟掌握立院多數，已有質疑聲浪認為農產品開放將衝擊台灣農業。二、2 月 20 日[最高法院推翻 IEEPA 關稅](/macro/2026/02/20/scotus-tariff-ruling-zh.html)後，川普宣布新的 10% 全球關稅——如果這波新關稅的法律基礎不同（例如 Section 301），台灣的 15% 協定稅率是否仍然有效，存在不確定性。

### 筆記

**這份協定是買 EWT 的理由，但不是追高的理由。**

15% 關稅讓台灣機械業與日韓[站在同一起跑線](https://www.taipeitimes.com/News/biz/archives/2026/01/17/2003850727)——這是真實的競爭力提升，不是政治口號。但 EWT 已從 52 週低點漲了 85%，目前的價格隱含「協定順利通過 + 全球關稅環境穩定 + 台海風平浪靜」的最佳情境。三個情境要分開想：

- **情境 A：立法院 Q2 前通過、SCOTUS 後關稅重建溫和** → EWT 上看 $78–80（+7–10%），台灣出口股（機械、電子零件）明確受惠，可逢回測 $70 加碼
- **情境 B：立法院拖延至下半年，或附加農業保護條款** → EWT 區間整理 $68–74，不確定性壓抑估值，此時不宜新建倉位
- **情境 C：新一輪全球關稅（Section 301）使 15% 協定稅率失效，或台海軍事升溫** → EWT 回測 $62–66（-10% 至 -15%），但這也是長線布局台灣半導體的入場點

這份協定的更大意義不在關稅數字，而在第 5.4.6 條——它將台灣正式鎖入美國經濟圈，限制了兩岸經貿的迴旋空間。對投資人而言，這意味著台灣資產的「地緣政治折價」和「美國盟友溢價」將同時存在且長期化。

**持續觀察：** (1) 立法院院會排審時程（預計 3 月底前是否排入議程）——這決定協定能否在 Q2 生效；(2) 川普新關稅的法律依據（Section 301 需 6-12 個月，若走行政命令將再被法院挑戰）——這決定 15% 稅率的有效性；(3) 3 月台灣出口數據中對美出口金額變化——第一個檢驗協定預期效果的硬數據。

## 投資影響

- **EWT**（iShares MSCI 台灣 ETF）：現價約 [$72.98](https://finance.yahoo.com/quote/EWT/)，52 週高點 $73.88。關稅降至 15% 直接利多 TSMC（占 EWT 約 22%）與機械類股。若協定順利通過立法院且全球關稅環境穩定，上行至 $78–80（+7–10%）。下行風險：立法院否決或大幅修改、新一輪關稅衝擊，回測 $66–68（-7% 至 -10%）。過去一年[漲幅已達 37.5%](https://www.nasdaq.com/articles/etfs-gain-us-taiwan-sign-trade-deal-reduce-tariffs-15)，追高需審慎。
- **SMH**（VanEck 半導體 ETF）：台灣協定穩定 TSMC 的出口條件，但 SMH 更受美國半導體政策（CHIPS Act 補貼、出口管制）影響。協定本身對 SMH 為間接利多（+2–3%），主要風險來自全球關稅變局。
- **SOXX**（iShares 半導體 ETF）：邏輯同 SMH。SOXX 含較高比重的美國設計公司（Nvidia、AMD），這些公司的客戶（包括台灣 IC 設計業）將受惠於關稅降低帶來的終端需求回溫。
- **USO / UNG**（美國油氣 ETF）：444 億美元的 LNG 與原油採購承諾在 4 年內分批執行，對美國 LNG 出口商（Cheniere、Tellurian）為確定性需求。但全球油氣價格取決於更大的供需面，台灣單一採購對 USO/UNG 影響有限。

## 後續觀察

1. **立法院審議時程**：台灣七大工商團體已[聯合聲明](https://focustaiwan.tw/business/202602130017)要求加速審議，但在野黨態度是關鍵變數。若拖延至下半年，時間優勢將流失
2. **SCOTUS 判決後的關稅重建**：川普宣布的新 10% 全球關稅的法律依據為何？若走 Section 301 路徑，程序需 6–12 個月；若再度嘗試 IEEPA，將面臨即刻的法律挑戰
3. **台灣 Q1 出口數據**：3 月公布的 2 月出口數據將是檢驗協定效果的第一個指標。重點觀察對美出口金額與市占率變化
4. **台中 LNG 四期擴建進度**：接收能力能否跟上 444 億美元的 LNG 採購承諾，將決定能源安全願景的可行性

---

*資料來源：[USTR](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/february/fact-sheet-us-taiwan-agreement-reciprocal-trade)、[CNBC](https://www.cnbc.com/2026/01/16/asia-markets-live-friday-nikkei-225-hang-seng-index-kospi-taiwan-trade-deal-chips-banks.html)、[Global Taiwan Institute](https://globaltaiwan.org/2026/02/whats-in-the-new-us-taiwan-agreement-on-reciprocal-trade/)、[U.S. Census Bureau](https://www.census.gov/foreign-trade/balance/c5830.html)、[Focus Taiwan](https://focustaiwan.tw/business/202602130017)、[Taipei Times](https://www.taipeitimes.com/News/biz/archives/2026/01/17/2003850727)、[Global Energy Monitor](https://www.gem.wiki/Taichung_LNG_Terminal)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
