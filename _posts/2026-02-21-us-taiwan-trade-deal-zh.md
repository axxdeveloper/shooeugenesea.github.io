---
layout: post
title: "848 億美元承諾如何落地？台美貿易協定的條款、容量與執行風險"
date: 2026-02-21 18:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, taiwan, tariff]
description: "本文逐條拆解台美對等貿易協定：Article 5.4 第 6 款與 4.3 的限制條件、農業與檢驗制度調整、LNG 基建容量，以及 SCOTUS 後關稅法律路徑。附 0050 情境配置。"
lang: zh-TW
---

## 國際政經背景

美國貿易代表署 (USTR) 於 [2 月 12 日發布簽署聲明](https://ustr.gov/about/policy-offices/press-office/press-releases/2026/february/ambassador-greer-oversees-signing-us-taiwan-agreement-reciprocal-trade)，由 Jamieson Greer 與台灣代表完成[《美台對等貿易協定》(Agreement on Reciprocal Trade)](https://ustr.gov/sites/default/files/files/agreements/2026-02-12_US-TW_Reciprocal_Trade_Agreement.pdf)簽署。依官方文件，關稅稅率設計、848 億美元採購安排與條款限制需放在同一個框架一起判讀。以下拆解六個在一般新聞較少展開的面向。

## Article 5.4 第 6 款：寫進協定的地緣政治限制

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>CPTPP</strong>：跨太平洋全面進步夥伴協定，由 11 國組成的多邊自由貿易協定。台灣與中國均已申請加入。
</aside>

這份協定最值得關注的，不只是關稅數字，而是 [Article 5.4 第 6 款](https://ustr.gov/sites/default/files/files/agreements/2026-02-12_US-TW_Reciprocal_Trade_Agreement.pdf)：若台灣與被定義為 covered nation 的對象簽署新的自由貿易協定或優惠經濟安排，美方可終止本協定。2010 年的 ECFA 被明確豁免（既有協定不溯及），但任何「新」安排都可能落入審查範圍。

第 4.3 條進一步延伸到數位貿易：台灣若與中國簽署數位貿易協定，美國同樣可以終止。第 5.2.7 條則要求台灣在 5G/6G 網路、海底電纜與雲端系統中**逐步淘汰「相關國家」的技術設備**——這是華為/中興禁令被直接嵌入貿易協定的條文。

換言之，這不只是一份貿易協定，而是一份**經濟結盟宣言**。台灣的多邊貿易策略空間被正式壓縮。

## 農業讓步：比日韓都深的檢驗權退讓

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>萊克多巴胺 (Ractopamine)</strong>：一種瘦肉精，用於豬隻飼養。台灣 2021 年曾就美豬進口舉行公投，是高度敏感的政治議題。
</aside>

日本在談判中[保住了稻米（關稅超過 700%）與牛肉市場](https://www.pbs.org/newshour/show/what-the-new-trade-deal-with-japan-means-for-u-s-businesses-and-consumers)，南韓同樣[守住稻米與牛肉關稅](https://keia.org/the-peninsula/u-s-south-korea-move-to-lock-in-lower-tariff-rate-with-350-billion-deal/)。台灣保住了稻米和雞肉，但在豬肉和牛肉上做了更大的讓步：

- **15 項豬肉產品**關稅三年內[削減 50%](https://globaltaiwan.org/2026/02/whats-in-the-new-us-taiwan-agreement-on-reciprocal-trade/)（基準稅率 12.5%），鵝肉、鴨肉、葡萄、柑橘等 [45 項農產品](https://www.taipeitimes.com/News/taiwan/archives/2026/02/14/2003852319)降至不低於 10%
- 美國絞牛肉與牛雜獲得市場准入，野牛肉正在審查中
- **最敏感的不是關稅，而是檢驗制度的改變**：台灣同意終止對美國豬肉和牛肉的 [100% 批次檢驗](https://www.taipeitimes.com/News/taiwan/archives/2026/02/14/2003852317)、降低殘留物檢測標準、放棄赴美國工廠事前查廠的權利
- 醫療器材與藥品直接接受美國 FDA 核准，[不需經過台灣 TFDA 額外審查](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/february/fact-sheet-us-taiwan-agreement-reciprocal-trade)

國民黨將此定性為[「單向進貢 2.7 兆新台幣」](https://www.taipeitimes.com/News/taiwan/archives/2026/02/14/2003852317)，批評放棄檢驗權等同讓渡食品安全主權。考量到 2021 年萊豬公投的政治記憶，這些條款在立法院審議階段將成為攻防焦點。

## 848 億的數學：採購承諾與逆差規模

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart5"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart5'), {
  type: 'bar',
  data: {
    labels: ['2021', '2022', '2023', '2024', '2025'],
    datasets: [
      {
        label: '美台商品貿易逆差（十億美元）',
        data: [25.0, 34.2, 40.8, 64.7, 146.8],
        backgroundColor: 'rgba(239, 68, 68, 0.7)',
        borderColor: 'rgba(239, 68, 68, 1)',
        borderWidth: 1
      },
      {
        label: '協定年均採購額',
        data: [null, null, null, null, 21.2],
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '美台商品逆差 vs 協定年均採購額（資料：U.S. Census Bureau、USTR）',
        color: '#e2e8f0',
        font: { size: 12 }
      },
      legend: { labels: { color: '#94a3b8' } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.1)' } },
      y: {
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + 'B'; } },
        grid: { color: 'rgba(255,255,255,0.1)' }
      }
    }
  }
});
</script>

美台商品逆差從 2021 年的 250 億美元暴增至 2025 年的 [1,468 億美元](https://www.census.gov/foreign-trade/balance/c5830.html)——四年間翻了近六倍，主要受 AI 晶片需求驅動的 TSMC 出口推動。848 億美元採購承諾分攤至四年，年均約 212 億美元，僅相當於 2025 年逆差的 **14.4%**。

[美國外交關係委員會 (CFR) 分析](https://www.cfr.org/articles/u-s-taiwan-trade-agreement-leaves-major-questions-open)直言：「難以看出這份協定如何有意義地縮減雙邊貿易逆差」，稱其提供了「可預測性」但本質上是「把問題往後推」。更值得注意的是，USTR 在描述採購承諾時使用的措辭是 **"plans to facilitate"（計劃促成）**——而非具有法律拘束力的 "shall" 或 "commits to"。協定中也[找不到](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/february/fact-sheet-us-taiwan-agreement-reciprocal-trade)若台灣未達採購目標的自動懲罰機制或關稅回彈條款。

房間裡的大象是匯率：《經濟學人》大麥克指數顯示新台幣被[低估約 60%](https://www.cfr.org/articles/taiwans-backdoor-currency-manipulation)——全球最被低估的貨幣。台灣承諾將外匯干預揭露頻率從半年一次改為季度一次，但 CFR 稱台灣央行透過保險業避險比率調整等手段進行「後門式匯率操縱」。在匯率結構不變的前提下，任何關稅調整的效果都被稀釋。

## LNG 接收站：承諾跑在基建前面

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>mtpa</strong>：百萬噸/年 (million tonnes per annum)，衡量 LNG 接收站處理能力的標準單位。
</aside>

444 億美元的 LNG 與原油採購是最大單項承諾。台灣 [98% 能源依賴進口](https://energytracker.asia/taiwan-lng/)，天然氣發電佔比已達 47%（2025 年），能源安全的需求是真實的。但問題在於：**物理上能否接收這些量？**

台灣目前三座 LNG 接收站——[永安](https://www.gem.wiki/Yung-An_LNG_Terminal)（約 12.3 mtpa）、[台中](https://www.gem.wiki/Taichung_LNG_Terminal)（目前約 8 mtpa，三期擴建中 +2 mtpa）、[桃園觀塘](https://www.gem.wiki/Taoyuan_LNG_Terminal)（2025 年 5 月啟用，3 mtpa）——合計現有接收能力約 **23 mtpa**，含在建三期約 **25 mtpa**。台灣 2025 年 LNG 進口量趨勢約 24–26 mtpa，已接近滿載。若美國 LNG 的額外量達 5–8 mtpa，總需求將在 2028–2029 年攀升至 **29–34 mtpa**——超出現有加計劃中容量 **4–9 mtpa**。台中四期（+3 mtpa，目標 2029 年）和永安五期（+1.8 mtpa）都還在提案階段。

關鍵瓶頸是永安站擴建：立委[邱志偉指出](https://energytracker.asia/taiwan-lng/)，該擴建案自 2021 年起因地下儲槽造價過高而停滯，至今未動工。國民黨則諷刺：一邊宣示 2050 淨零碳排，一邊大量採購高碳排化石燃料。

承諾很容易簽，但港口和儲槽不會因為協定就自動長出來。

## SCOTUS 判決後：法律基礎動搖

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>IEEPA</strong>：國際緊急經濟權力法，川普據此對台灣課徵 20% 關稅。最高法院 2 月 20 日以 6:3 裁定此舉違法。
</aside>

2 月 20 日，美國最高法院以 6:3 裁定川普依據 IEEPA [課徵關稅違法](/2026/02/20/scotus-tariff-ruling-zh/)。這份台美協定的核心前提——避免 20% 的 IEEPA 關稅——瞬間失去法律基礎。國民黨[立即呼籲重新談判](https://focustaiwan.tw/politics/202602210007)，主張「協定的基礎已被動搖」。民眾黨主席黃國昌稱應將判決視為「重新調整的契機」。

川普隨即宣布新的 10% 全球關稅，但使用不同的法律依據。這帶來兩個問題：(1) 台灣原先的 15% 協定稅率是否仍有效？如果 IEEPA 關稅從未合法存在，那麼「從 20% 降到 15%」的讓步意味著什麼？(2) 若新關稅走 Section 301 路徑，程序需要 6–12 個月；若再用行政命令，將再次面臨法律挑戰。

南韓的前車之鑑值得注意：南韓國會延遲批准類似協定後，美國[將關稅從 15% 回升到 25%](https://keia.org/the-peninsula/u-s-south-korea-move-to-lock-in-lower-tariff-rate-with-350-billion-deal/) 作為懲罰。這份恐懼正是推動立法院加速審議的最大動力。

## 三國比較：台灣拿到的條件如何？

| 項目 | 台灣 | 日本 | 南韓 |
|------|------|------|------|
| 起始關稅 → 協定稅率 | 20% → 15% | 25% → 15% | 25% → 15% |
| 投資承諾 | $2,500 億（含 TSMC） | [$5,500 億](https://www.pbs.org/newshour/show/what-the-new-trade-deal-with-japan-means-for-u-s-businesses-and-consumers)（政府基金） | [$3,500 億](https://keia.org/the-peninsula/u-s-south-korea-move-to-lock-in-lower-tariff-rate-with-350-billion-deal/)（$2,000 億現金 + $1,500 億造船） |
| 採購承諾 | $848 億（能源、航空、設備） | 農產品 + 波音 + 軍備 | 330 萬噸/年 LNG |
| 稻米市場 | 保住 | 配額內增加 75% | 保住 |
| 牛豬市場 | 開放，降低檢驗 | 未公開大幅讓步 | 保住 |
| 中國鎖定條款 | 有（第 5.4.6 條） | 未公開確認 | 未公開確認 |
| 國防支出條件 | GDP 3% | 未公開 | 未公開 |

行政院稱這是「最好的關稅協定」——但台灣的起始關稅只有 20%（日韓是 25%），降幅僅 5 個百分點（日韓降了 10 個百分點）。若以「每百分點減稅所付出的投資額」計算：台灣 $500 億/點，日本 $550 億/點，南韓 $350 億/點。南韓的交換條件最划算，而**台灣在農業和檢驗制度上的讓步明顯大於日韓**。

### 筆記

這份協定的價值不在數字——848 億只覆蓋逆差的 14.4%、「plans to facilitate」不等於有約束力的承諾——而在於它提供的可預期性。真正的代價寫在細則裡：Article 5.4 第 6 款壓縮了台灣的多邊貿易空間，農業檢驗制度的退讓比日韓都深，LNG 承諾跑在接收站基建前面。

台股以 `0050` 為核心配置，但不宜用單一協定消息追價。中期效果取決於三件事：立法院審議是否順利（南韓延審被懲罰的前例是催化劑）、LNG 接收站擴建能否補上 4–9 mtpa 的容量缺口、以及 SCOTUS 判決後關稅法律基礎的穩定性。若這三條線都走順，逐步增加台灣出口鏈配置；若任一條出問題，降低高 beta 曝險。

## 後續觀察

1. **立法院審議**：3 月 6 日一讀、3 月 12 日起委員會審查。七大工商團體已[聯合聲明](https://focustaiwan.tw/business/202602130017)促速審，但南韓延審被懲罰的前例才是真正的催化劑
2. **SCOTUS 後關稅重建**：川普新 10% 全球關稅的法律基礎為何？若 15% 協定稅率因法律變動而失效，整份協定需要重新校準
3. **LNG 擴建進度**：台中四期與永安五期能否在 2029 年前解決 4–9 mtpa 的容量缺口，決定 444 億能源承諾的可行性
4. **3 月台灣出口數據**：對美出口金額變化是檢驗協定預期效果的第一個硬數據

---

*資料來源：[USTR Fact Sheet](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/february/fact-sheet-us-taiwan-agreement-reciprocal-trade)、[Global Taiwan Institute](https://globaltaiwan.org/2026/02/whats-in-the-new-us-taiwan-agreement-on-reciprocal-trade/)、[CFR](https://www.cfr.org/articles/u-s-taiwan-trade-agreement-leaves-major-questions-open)、[CFR 匯率分析](https://www.cfr.org/articles/taiwans-backdoor-currency-manipulation)、[U.S. Census Bureau](https://www.census.gov/foreign-trade/balance/c5830.html)、[KEIA 南韓協定](https://keia.org/the-peninsula/u-s-south-korea-move-to-lock-in-lower-tariff-rate-with-350-billion-deal/)、[PBS 日本協定](https://www.pbs.org/newshour/show/what-the-new-trade-deal-with-japan-means-for-u-s-businesses-and-consumers)、[Taipei Times](https://www.taipeitimes.com/News/taiwan/archives/2026/02/14/2003852317)、[Focus Taiwan](https://focustaiwan.tw/politics/202602210007)、[Global Energy Monitor](https://www.gem.wiki/Taichung_LNG_Terminal)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
