---
layout: post
title: "12.33% 關稅降下來了，650 億美元順差仍在：台灣輸美風險已從稅率表移到產能表"
date: 2026-03-30 12:45:00 +0800
categories: [macro]
tags: [macro, tariff, taiwan, semiconductor, geopolitics]
macro_kind: long
description: "行政院將台灣輸美平均關稅降到 12.33%，並讓 2,072 項產品豁免對等關稅；USTR 仍把台灣 2024 年對美貨品與服務順差寫成 650 億美元。4 月 15 日評論截止與 5 月 5 日聽證會，會決定台灣輸美風險停在稅率協議，還是轉進結構審查。"
lang: zh-TW
---

## 12.33% 與 650 億美元寫出兩張不同的表

行政院 2 月 13 日將台灣具輸美實績產品的平均關稅壓到 **12.33%**。[行政院](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d) USTR 在 3 月 11 日啟動、3 月下旬完成 final notice 的 301 調查，又把台灣 2024 年對美貨品與服務順差寫成 **650 億美元**。[USTR final notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf)

平均關稅已降到 12.33% 時，台灣輸美製造鏈下一步要看對等關稅，還是美國對過剩產能的結構審查？

這個框架把風險拆成稅率層、產業層與程序層。最有辨識力的三個觀察點是 **76%** 的 232 類別曝險、**2026-04-15** 的書面意見截止、以及 **2026-05-05** 的聽證會起點。[行政院](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d)、[USTR final notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf)

2 月 21 日那篇文章拆的是 ART 的條文與容量。[前文](/2026/02/21/us-taiwan-trade-deal-zh/) 今天把焦點移到 USTR 的 301 行政紀錄，因為風險來源已經換表。

## 稅率層先落地，產能層開始接棒

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| ART 已處理稅率層，結構審查開始接棒 | 行政院把平均關稅壓到 `12.33%`、`2,072` 項產品豁免、對等關稅曝險由 `24%` 降到 `15.5%`；USTR 仍把台灣 `650 億美元` 對美順差與半導體、電子、機械一起寫進 301 調查語境 | 很高 |
| USTR 對過剩產能的定義採用混合框架 | 調查對象達 `16` 個經濟體；USTR 同時使用順差、閒置產能、未獲利企業與政策介入作為證據；日本即使存在全球貨品逆差仍被納入 | 很高 |
| 這個詞已經進入跨區域政策語言 | WTO 指出 2026 年 2 月底全球 MFN 貿易占比仍有 `72%`；OECD 預估 2027 年 steel excess capacity 升到 `721 million tonnes`；歐盟把 steel safeguard liberalisation rate 由 `1%` 降到 `0.1%` | 高 |

行政院把台灣輸美曝險結構切得很清楚。2024 年對美出口中，屬於 232 條款已調查或正在調查的產品占 **76%**，原本適用對等關稅的輸美金額占比是 **24%**；納入 `2,072` 項豁免後，真正承受對等關稅的金額占比降到 **15.5%**。[行政院](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d) 這組數字直接說明，ART 先處理的是稅率表，台灣輸美的主曝險仍停在產業審查。

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260330TaiwanTariffExposure"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260330TaiwanTariffExposure'), {
  type: 'bar',
  data: {
    labels: ['232 已調查／調查中占輸美金額', '原適用對等關稅占輸美金額', '納入豁免後仍承受對等關稅'],
    datasets: [{
      label: '占比 (%)',
      data: [76, 24, 15.5],
      backgroundColor: [
        'rgba(180, 83, 9, 0.78)',
        'rgba(8, 145, 178, 0.78)',
        'rgba(21, 128, 61, 0.78)'
      ],
      borderColor: [
        'rgba(180, 83, 9, 1)',
        'rgba(8, 145, 178, 1)',
        'rgba(21, 128, 61, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '台灣輸美曝險結構（資料來源：行政院 2026-02-13）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

USTR final notice 又把另一張表寫得很清楚。台灣 2024 年貨品順差為 **733 億美元**，對美貨品與服務順差創 **650 億美元** 新高；調查文件也把 `semiconductors`、`electronics`、`machine tools`、`machinery`、`robots` 與 `solar modules` 放進示範性產業清單。[USTR final notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf)、[USTR fact sheet](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/march/fact-sheet-ustr-initiates-section-301-investigations-structural-excess-capacity-and-production) 稅率層因此已經落地，產業層才進入正式審查。

<aside style="float: right; width: 235px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>ART</strong>：Agreement on Reciprocal Trade，台美 2026 年 2 月簽署的對等貿易協定。<br>
<strong>Section 232</strong>：美國以國安理由處理特定產業進口的法律工具。<br>
<strong>Section 301</strong>：美國用來調查不公平貿易做法並採取關稅或其他措施的法律工具。
</aside>

這個程序的口徑比一般關稅新聞更寬。USTR 同時把大額或持續性順差、閒置產能、未獲利企業與七類政策介入放進同一個證據池，包含補貼、國有或國家控制企業、市場進入障礙、補貼性融資與匯率作法。[USTR fact sheet](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/march/fact-sheet-ustr-initiates-section-301-investigations-structural-excess-capacity-and-production)、[USTR final notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf) Japan 這個例子最能說明這件事。USTR 明寫日本 2024 年存在約 **360 億美元** 的全球貨品逆差，但它仍因對美 **570 億美元** 順差、汽車集中度與未獲利企業比例被納入名單。[USTR final notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf) 這條線代表，既有貿易協定與總量口徑已經不足以保證脫離調查。

Brookings 與 Global Trade Alert 提供了今天最有用的反方。Kari Heerman 與 Elena Patel 認為，post-IEEPA environment 下的 Section 301 需要完整行政紀錄，公開意見會直接影響調查範圍與後續措施；Johannes Fritz 也指出，USTR 對 16 個經濟體列出 `33` 個證據指標，卻只明確寫出 `7` 個政策成因，`10` 個經濟體目前只有症狀、原因仍留在調查中。[Brookings](https://www.brookings.edu/articles/after-ieepa-new-section-301-investigations-and-why-public-input-matters/)、[Global Trade Alert](https://globaltradealert.org/blog/section-301-overcapacity-investigation-scope) 這條反方讓今天的結論維持平衡：301 程序已經開啟，調查範圍仍保有被重寫的空間。

台灣承受這條風險的權重也很高。行政院明寫，美國已躍升為台灣第一大出口市場，占台灣對全球出口約 **3 成**；2024 年對美出口額達 **1,137.6 億美元**，其中約 **76%** 又集中在 232 已調查或正在調查的項目。[行政院](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d) 這代表，美國若把風險評估從平均關稅推向產業分類，台灣出口鏈受到的衝擊會直接放大到整體外需框架。

跨區域資料讓這個框架更完整。WTO 指出，截至 2026 年 2 月底，全球以 MFN 為基礎的貿易占比仍有 **72%**，2025 年 AI-enabling goods 貢獻全球貿易成長的 **42%**；這表示大多數貿易規則仍在一般框架裡運作，邊際風險卻開始集中在高科技與關鍵製造鏈。[WTO](https://www.wto.org/english/news_e/news26_e/stat_19mar26_329_e.htm) OECD 又把 steel excess capacity 在 2027 年升到 **721 million tonnes** 寫成全球產業穩定風險，歐盟則已把 steel safeguard liberalisation rate 由 **1%** 降到 **0.1%**，法律效期維持到 **2026-06-30**。[OECD](https://www.oecd.org/en/about/news/press-releases/2025/05/surging-excess-capacity-threatens-steel-market-stability-employment-and-decarbonisation-plans.html)、[European Commission](https://policy.trade.ec.europa.eu/news/commission-strengthens-protection-eu-steel-industry-2025-03-25_en) 這組資料說明，`overcapacity` 已經成為跨區域政策語言。

目前最被數字支持的版本很清楚。ART 先替台灣處理了平均關稅與豁免清單，USTR 又把台灣放進以順差、產業結構與政策介入為基礎的 301 程序。台灣輸美風險的主戰場因此由稅率表移到產能表，企業需要管理的變數也會由平均稅率延伸到產品分類、產業敘事與行政紀錄攻防。[行政院](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d)、[USTR final notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf)

## 4 月 15 日與 5 月 5 日會把抽象風險變成正式紀錄

如果台灣輸美的 232 類別占比在未來兩個月仍維持 **70%** 上方，USTR 的台灣相關公開紀錄又持續把半導體、電子與機械放在同一條過剩產能敘事裡，→ 結構審查路徑會續留，今天的框架也會維持主導地位。[行政院](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d)、[USTR fact sheet](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/march/fact-sheet-ustr-initiates-section-301-investigations-structural-excess-capacity-and-production)

如果 4 月 15 日前後的公開意見書開始把台灣半導體與資通訊明確切出一般過剩產能部門，並把赴美投資、關鍵供應鏈互補與 `2,072` 項產品豁免的執行情況寫進行政紀錄，→ ART 的解釋力會回升，風險會更多留在談判與豁免管理層。[行政院](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d)、[Brookings](https://www.brookings.edu/articles/after-ieepa-new-section-301-investigations-and-why-public-input-matters/)

如果歐盟與美國在 2026 年第二季都沿著 `overcapacity -> sector-specific defense` 這條線往前走，→ 台灣輸美風險會由單一美國雙邊題，擴大成跨市場的產品分類與法遵題；屆時，單靠平均關稅已經無法完整描述外需風險。[European Commission](https://policy.trade.ec.europa.eu/news/commission-strengthens-protection-eu-steel-industry-2025-03-25_en)、[OECD](https://www.oecd.org/en/about/news/press-releases/2025/05/surging-excess-capacity-threatens-steel-market-stability-employment-and-decarbonisation-plans.html)、[WTO](https://www.wto.org/english/news_e/news26_e/stat_19mar26_329_e.htm)

## 結語

> **核心判斷：** 台灣對美平均關稅已經落地，台灣輸美風險正在 USTR 的 301 行政紀錄裡重新定價；決定風險高低的變數已經從稅率表轉到產業敘事、產品分類與順差證據。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Taiwan-related public submissions | 2026-04-15 前，若至少 `2` 份主要公開意見書明確把半導體 / 資通訊排除於 Taiwan-specific remedy scope | 觀察 2026-04-15（USTR 書面意見截止）與其後公開 docket | 「風險已從稅率表移到產能表」框架降權，ART 的 tariff advantage 重新升權 |
| Hearing scope | 2026-05-05 至 2026-05-08 的聽證若有 `2` 天以上把台灣討論集中在順差與產業結構，且半導體 / 電子 / 機械仍留在同一調查語境 | 觀察 2026-05-05 至 2026-05-08（USTR 聽證會） | 結構審查框架升權，台灣輸美風險管理進入程序與分類題 |
| EU steel safeguard posture | 歐盟若在 2026-06-30 前維持 `0.1%` liberalisation rate 並讓 safeguard 工具續留或以替代工具接續 | 觀察即日起至 2026-06-30（歐盟現行措施法定效期） | `overcapacity` 作為跨區域政策語言續留，台灣需把歐美雙邊工具一起納入框架 |

後續最值得盯的三個點如下。第一個點是 **USTR-2026-0067** 的公開意見書，台灣官方與產業如何界定半導體、資通訊與機械，會直接影響調查語言。第二個點是 **2026-05-05** 開始的聽證會，這會把 abstract concern 變成正式問答紀錄。第三個點是 **2026-06-30** 的歐盟 steel safeguard 法定節點，這個日期會告訴市場，`overcapacity` 會停在鋼鐵工具，還是進一步擴成更廣的工業政策語言。[USTR final notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf)、[European Commission](https://policy.trade.ec.europa.eu/news/commission-strengthens-protection-eu-steel-industry-2025-03-25_en)

---

*資料來源：[行政院 ART 新聞稿](https://www.ey.gov.tw/Page/9277F759E41CCD91/472c4eba-b7c3-4a7d-8b39-e482e5a1548d)、[USTR Fact Sheet](https://ustr.gov/about/policy-offices/press-office/fact-sheets/2026/march/fact-sheet-ustr-initiates-section-301-investigations-structural-excess-capacity-and-production)、[USTR Final Notice](https://ustr.gov/sites/default/files/files/Press/Releases/2026/USTR%20301%20FRN%20Industrial%20Excess%20Capacity%20Final.pdf)、[WTO Global Trade Outlook and Statistics](https://www.wto.org/english/news_e/news26_e/stat_19mar26_329_e.htm)、[OECD press release](https://www.oecd.org/en/about/news/press-releases/2025/05/surging-excess-capacity-threatens-steel-market-stability-employment-and-decarbonisation-plans.html)、[EU Commission steel safeguard update](https://policy.trade.ec.europa.eu/news/commission-strengthens-protection-eu-steel-industry-2025-03-25_en)、[Brookings](https://www.brookings.edu/articles/after-ieepa-new-section-301-investigations-and-why-public-input-matters/)、[Global Trade Alert](https://globaltradealert.org/blog/section-301-overcapacity-investigation-scope)、[INSIDE / 中央社](https://www.inside.com.tw/article/40821-301-mar-2026)、[公視新聞網](https://news.pts.org.tw/article/747825)*
*政策與官方文件截至：2026-03-30*
*本文僅供參考，不構成投資建議。*
