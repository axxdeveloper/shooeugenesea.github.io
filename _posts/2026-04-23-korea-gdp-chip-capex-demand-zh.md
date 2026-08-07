---
layout: post
title: "1.7% / 5.1% / 0.5% 排出先後：韓國第一季成長先由晶片與資本開支拉動"
date: 2026-04-23 13:20:00 +0800
categories: [macro]
tags: [macro, korea, semiconductor, exports, consumption]
macro_kind: long
description: "韓國第一季 GDP 季增 1.7%，出口季增 5.1%，設備投資季增 4.8%，民間消費季增 0.5%。Bank of Korea 與 S&P Global 一起顯示，這波回升先由晶片與資本開支拉動，第二季要由出口、月度活動資料與央行語氣確認擴散速度。"
lang: zh-TW
---

## 1.7% 先回升，7.5% 把所得推得更快

韓國第一季實質 `GDP` 季增 `1.7%`，實質 `GDI` 季增 `7.5%`。產出回升已經成立，所得改善跑得更快。[BOK GDP](https://www.bok.or.kr/eng/bbs/E0000634/view.do?depth=400423&menuNo=400423&nttId=10097645&programType=newsDataEng&relate=Y)

當出口季增 `5.1%`、設備投資季增 `4.8%`、民間消費季增 `0.5%` 時，韓國第一季的 `1.7%` 已經代表全面復甦，還是晶片與資本開支先把 `GDP` 拉在前面？

`BOK` 的支出表、`KOSTAT` 的 `3` 月 `CPI` 與 `S&P Global` 的 `PMI` 已經把框架排清楚。讀者只要盯住 `4` 月出口、月度活動資料與 `5` 月央行語氣，就能分辨回升會向服務與消費擴散，或是先停在科技循環。[KOSTAT CPI](https://www.kostat.go.kr/boardDownload.es?bid=11751&list_no=444363&seq=1) [S&P Global PMI](https://www.pmi.spglobal.com/Public/Home/PressRelease/02be97f3996640a1b389c15884701137)

## 晶片、資本開支與內需把三條速度排出順序

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 晶片出口與設備投資先拉動成長 | 出口季增 `5.1%`、設備投資季增 `4.8%`、製造業季增 `3.9%`、`PMI 52.6` | 很高 |
| 內需已經回正，擴散速度仍慢一拍 | 民間消費季增 `0.5%`、政府消費季增 `0.1%`、服務業季增 `0.4%`、`CPI 2.2%` | 高 |
| 所得改善快過產出，第二季會同時接收科技循環與油價壓力 | `GDI 7.5%`、`IMF` 基準情境能源價格 `+19%`、`BOK/MOEF` 同步列出中東衝突風險 | 很高 |

| 式子 | 意義 |
|---|---|
| `5.1 - 3.0 = 2.1` | 出口跑在進口前面，外需對 `GDP` 仍保有推力 |
| `4.8 - 0.5 = 4.3` | 設備投資擴張速度明顯快過民間消費 |
| `7.5 - 1.7 = 5.8` | 所得改善快過產出，企業獲利與貿易條件先受惠 |

<div style="max-width: 720px; margin: 2em auto;">
  <canvas id="macroChart20260423KoreaGdpChipCapexDemand"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260423KoreaGdpChipCapexDemand'), {
  type: 'bar',
  data: {
    labels: ['GDP', 'GDI', '民間消費', '設備投資', '出口', '進口'],
    datasets: [{
      label: '季增率 (%)',
      data: [1.7, 7.5, 0.5, 4.8, 5.1, 3.0],
      backgroundColor: [
        'rgba(30, 64, 175, 0.82)',
        'rgba(180, 83, 9, 0.82)',
        'rgba(22, 163, 74, 0.82)',
        'rgba(217, 119, 6, 0.82)',
        'rgba(190, 24, 93, 0.82)',
        'rgba(71, 85, 105, 0.82)'
      ],
      borderColor: [
        'rgba(30, 64, 175, 1)',
        'rgba(180, 83, 9, 1)',
        'rgba(22, 163, 74, 1)',
        'rgba(217, 119, 6, 1)',
        'rgba(190, 24, 93, 1)',
        'rgba(71, 85, 105, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '韓國 Q1 2026 主要成長指標季增率（資料來源：BOK）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

`BOK` 的第一張表把主發動機寫得很直接。第一季出口季增 `5.1%`，設備投資季增 `4.8%`，建設投資季增 `2.8%`，製造業增加值季增 `3.9%`。這組數字把第一季的跳升寫成科技出口與資本開支同步上衝。`S&P Global` 的 `3` 月 `PMI` 又升到 `52.6`，產出、新訂單與半導體需求一起擴張，工廠活動與 `GDP` 表的方向互相印證。[BOK GDP](https://www.bok.or.kr/eng/bbs/E0000634/view.do?depth=400423&menuNo=400423&nttId=10097645&programType=newsDataEng&relate=Y) [S&P Global PMI](https://www.pmi.spglobal.com/Public/Home/PressRelease/02be97f3996640a1b389c15884701137)

市場原先的估計站得更低。`Reuters` 對經濟學家的調查中位數原本只看第一季季增 `1.0%`，實際值直接高出一截。這個 surprise 代表韓國在年初吃到 `AI` 伺服器、記憶體與設備投資的雙重推力。`MOEF` 在 `4` 月 `10` 日也寫出 `3` 月出口與貿易收支創高，政策部門已經把外需與企業出貨的強勢寫進官方敘事。[Reuters poll](https://wsau.com/2026/04/20/south-korea-economy-likely-returned-to-growth-in-q1-reuters-poll/) [MOEF meeting](https://english.moef.go.kr/pc/selectTbPressCenterDtl.do?boardCd=N0001&seq=6385)

第二張表把內需的位置排得更清楚。民間消費季增 `0.5%`，政府消費季增 `0.1%`，服務業增加值季增 `0.4%`。內需已經回到正成長區間，擴散速度仍落在製造與設備投資之後。`ING` 的 `Min Joo Kang` 認為第一季內需也有正貢獻，第二季速度會受外部逆風與成本壓力影響。`KOSTAT` 的 `3` 月 `CPI` 年增 `2.2%`，扣除食物與能源後也年增 `2.2%`，物價環境維持可控，消費端因此保有延續空間。[ING](https://think.ing.com/snaps/korean-gdp-surged-with-an-expected-slowdown-2026-growth-outlook-is-now-higher/) [KOSTAT CPI](https://www.kostat.go.kr/boardDownload.es?bid=11751&list_no=444363&seq=1)

第三張表是實質國內總所得。第一季 `GDI` 季增 `7.5%`，比 `GDP` 快 `5.8` 個百分點。所得改善快過產出，企業獲利與貿易條件先受惠，這也是晶片與出口景氣常見的早期訊號。`IMF` 四月 `WEO` 把基準情境的 `2026` 年能源價格漲幅寫成 `19%`，`BOK` 的四月經濟發展報告又把中東衝突、油價與美國關稅政策列成風險。韓國是能源進口國，第二季會同時接收科技循環上行與輸入成本抬升兩股力量。[BOK GDP](https://www.bok.or.kr/eng/bbs/E0000634/view.do?depth=400423&menuNo=400423&nttId=10097645&programType=newsDataEng&relate=Y) [IMF WEO transcript](https://www.imf.org/en/news/articles/2026/04/14/tr-04142026-press-briefing-transcript-world-economic-outlook-spring-meetings-2026) [BOK Recent Economic Developments](https://www.bok.or.kr/eng/bbs/E0000634/view.do?menuNo=400069&nttId=10097458)

三張表一起給出目前最受資料支持的解釋。韓國第一季的 `1.7%` 先由晶片出口與設備投資推動，內需開始接棒，能源成本決定接棒速度。這個框架也解釋了為什麼市場在看到亮眼 `GDP` 之後，仍然需要追著 `4` 月出口、月度活動資料與 `5` 月央行語氣走。

## 4 月出口、月度活動資料與 5 月央行語氣會決定擴散速度

如果 `4` 月出口把半導體與非晶片品項都留在成長區間，月度活動資料也把產出、出貨與服務需求延續下去，→ 第一季的 `1.7%` 會由單季跳升走向更完整的製造與服務擴散。[MOEF meeting](https://english.moef.go.kr/pc/selectTbPressCenterDtl.do?boardCd=N0001&seq=6385) [S&P Global PMI](https://www.pmi.spglobal.com/Public/Home/PressRelease/02be97f3996640a1b389c15884701137)

如果 `4` 月出口續強，民間消費與服務生產只維持小幅正成長，→ 韓國景氣會維持出口與資本開支領跑，內需留在第二線，全年成長路徑會更像科技循環先行的一段行情。[BOK GDP](https://www.bok.or.kr/eng/bbs/E0000634/view.do?depth=400423&menuNo=400423&nttId=10097645&programType=newsDataEng&relate=Y) [ING](https://think.ing.com/snaps/korean-gdp-surged-with-an-expected-slowdown-2026-growth-outlook-is-now-higher/)

如果油價與匯率把 `4` 月、`5` 月通膨再往上推，`BOK` 在 `5` 月會議同步上修 inflation risk 語氣，→ 第二季主軸會由成長擴散轉向利潤與成本壓力，`GDI` 的先行優勢也會更快回到企業成本表裡。[KOSTAT CPI](https://www.kostat.go.kr/boardDownload.es?bid=11751&list_no=444363&seq=1) [BOK Recent Economic Developments](https://www.bok.or.kr/eng/bbs/E0000634/view.do?menuNo=400069&nttId=10097458) [IMF WEO transcript](https://www.imf.org/en/news/articles/2026/04/14/tr-04142026-press-briefing-transcript-world-economic-outlook-spring-meetings-2026)

## 結語

> **核心判斷：** 韓國第一季回升已經成立，主發動機仍是晶片出口與設備投資；民間消費與服務業已經回正，第二季資料會決定這股力量能否擴散成更完整的復甦。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 零售銷售與服務生產 | 連續 `2` 次月發布都 `>=0.5% m/m` | 觀察 `2026-04-30` 起的月度活動資料與下一輪月資料 | `出口與資本開支先行` 框架要下修，復甦已經向內需擴散 |
| 出口與製造景氣 | `4` 月與 `5` 月出口年增率都 `<=2%`，且 `5` 月 `PMI < 50` | 觀察 `2026-05` 上旬出口與 `2026-06-01` 前後 `PMI` | `Q1` 的跳升需要改寫成短週期前移，科技循環的續航力需要重評 |
| 通膨與央行語氣 | `2026-05` 與 `2026-06` `CPI` 都 `>=2.5%`，且 `BOK` 在 `5` 月會議強化 inflation risk 語氣 | 觀察 `2026-05`、`2026-06` `CPI` 與 `2026-05` `Monetary Policy Board` | 第二季主軸會由成長擴散改成輸入成本擠壓 |

後續三個變數足夠回答這個題目。第一個變數是 `4` 月出口的廣度，第二個變數是月度活動資料的擴散，第三個變數是 `5` 月央行對油價與通膨的語氣。這三條線一起決定韓國能把第一季的跳升寫成全年趨勢，或把它留在科技循環先行的一季。

---

*資料來源：[BOK GDP](https://www.bok.or.kr/eng/bbs/E0000634/view.do?depth=400423&menuNo=400423&nttId=10097645&programType=newsDataEng&relate=Y)、[BOK Recent Economic Developments](https://www.bok.or.kr/eng/bbs/E0000634/view.do?menuNo=400069&nttId=10097458)、[KOSTAT CPI](https://www.kostat.go.kr/boardDownload.es?bid=11751&list_no=444363&seq=1)、[S&P Global PMI](https://www.pmi.spglobal.com/Public/Home/PressRelease/02be97f3996640a1b389c15884701137)、[MOEF meeting](https://english.moef.go.kr/pc/selectTbPressCenterDtl.do?boardCd=N0001&seq=6385)、[IMF WEO transcript](https://www.imf.org/en/news/articles/2026/04/14/tr-04142026-press-briefing-transcript-world-economic-outlook-spring-meetings-2026)、[Reuters poll](https://wsau.com/2026/04/20/south-korea-economy-likely-returned-to-growth-in-q1-reuters-poll/)、[ING](https://think.ing.com/snaps/korean-gdp-surged-with-an-expected-slowdown-2026-growth-outlook-is-now-higher/)*
*市場數據截至：2026-04-23*
*本文僅供參考，不構成投資建議。*
