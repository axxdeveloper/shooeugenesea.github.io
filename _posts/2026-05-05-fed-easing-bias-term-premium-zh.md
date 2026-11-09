---
layout: post
title: "8 比 4 把降息語氣推上檯面：Fed 的下一格先看 10 年債與 PCE"
date: 2026-05-05 12:20:00 +0800
categories: [macro]
tags: [macro, fed, inflation, bonds, energy]
macro_kind: short
description: "Fed 4 月 29 日以 8 比 4 投票維持 3.50% 至 3.75% 利率區間，三位區域銀行總裁支持按兵不動卻反對降息語氣。March PCE 年增 3.5%、10 年期美債 5 月 4 日收在 4.45%，讓前瞻指引本身成為市場變數。"
lang: zh-TW
---

## 8 比 4 讓語氣變成政策變數

Fed 在 `2026-04-29` 以 **8 比 4** 投票維持聯邦基金利率在 **3.50% 至 3.75%**，三位區域銀行總裁支持按兵不動卻反對聲明保留降息語氣。[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)、[Cleveland Fed](https://www.clevelandfed.org/collections/speeches/2026/sp-20260501-statement-regarding-april-fomc-meeting-vote)

**8 比 4 的 FOMC 投票代表降息延後，還是代表 Fed 的溝通框架正在改寫？**

這個框架把 Fed 分裂拆成投票、通膨、期限溢價三層。`2026-05-12` CPI、`2026-05-28` PCE、`2026-06-17` FOMC 會議會校準降息語氣還能維持多久。[BLS CPI](https://www.bls.gov/cpi/news.htm)、[BEA PCE](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)、[Fed calendar](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)

## 降息語氣變成被投票的風險

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 前瞻指引正在失去共識 | Hammack、Kashkari、Logan 支持按兵不動，反對 statement 內的 easing bias | 很高 |
| 通膨資料壓住降息語氣 | March PCE 年增 `3.5%`，核心 PCE 年增 `3.2%` | 很高 |
| 成長韌性延後政策轉向 | Q1 real GDP 年化季增 `2.0%`，real final sales to private domestic purchasers 增 `2.5%` | 高 |

Beth Hammack 在 `2026-05-01` 把爭點寫得很清楚：她支持按兵不動，並且認為聲明內的降息傾向已經和目前展望脫節。[Cleveland Fed](https://www.clevelandfed.org/collections/speeches/2026/sp-20260501-statement-regarding-april-fomc-meeting-vote) Fed statement 也把這個細節放進投票紀錄：Stephen Miran 偏好降息 1 碼，Hammack、Kashkari、Logan 支持按兵不動但反對 easing bias。[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm) 這代表委員會的主要裂縫已經從「現在利率多少」移到「聲明暗示下一步偏向降息的空間」。

口徑聲明：下列圖表全部使用百分率，但頻率各自獨立。聯邦基金利率使用目標區間中點，PCE 使用年增率，GDP 使用年化季增率，10 年期美債使用 Treasury nominal CMT；這些數字維持各自口徑，差值只表示政策約束的距離。[BEA PCE](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)、[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)、[U.S. Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)

| 核心錨點 | 式子 | 單位 | 口徑 |
|---|---:|---|---|
| Fed funds midpoint | `(3.50 + 3.75) / 2 = 3.625` | % | 目標區間中點 |
| 10Y 與政策中點距離 | `4.45 - 3.625 = 0.825` | percentage point | Treasury 5 月 4 日 10Y CMT 減 Fed funds midpoint |
| Core PCE 與目標距離 | `3.2 - 2.0 = 1.2` | percentage point | BEA March core PCE 年增減 Fed 目標 |

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260505FedGuidance"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260505FedGuidance'), {
  type: 'bar',
  data: {
    labels: ['Fed funds midpoint', 'March headline PCE YoY', 'March core PCE YoY', 'Q1 real GDP SAAR', 'May 4 10Y Treasury CMT'],
    datasets: [{
      label: 'Percent',
      data: [3.625, 3.5, 3.2, 2.0, 4.45],
      backgroundColor: [
        'rgba(37, 99, 235, 0.78)',
        'rgba(220, 38, 38, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(71, 85, 105, 0.78)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(16, 185, 129, 1)',
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
        text: 'Fed 溝通約束：政策中點、通膨、成長與 10Y CMT（資料來源：Fed, BEA, U.S. Treasury）'
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

March PCE 把這個分裂變成資料題。BEA 在 `2026-04-30` 公布 March PCE 價格指數年增 **3.5%**，核心 PCE 年增 **3.2%**，月增分別是 **0.7%** 與 **0.3%**。[BEA PCE](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026) Q1 GDP 又把 real GDP 年化季增寫成 **2.0%**，real final sales to private domestic purchasers 寫成 **2.5%**。[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026) 通膨仍高於目標，成長仍有底，這組組合會讓「下一步偏向降息」的文字更難取得共識。

歐洲資料把這條線放進全球背景。ECB 在 `2026-04-30` 把 4 月通膨寫成 **3.0%**，能源通膨寫成 **10.9%**，並且指出能源價格上升會讓近端通膨明顯高於 2%。[ECB statement](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260430~f99cb123a8.en.html) IMF 在 `2026-03-30` 指出 Hormuz 承載全球約 **25% 至 30%** 石油與 **20%** 液化天然氣 (LNG) 流量。[IMF](https://www.imf.org/en/blogs/articles/2026/03/30/how-the-war-in-the-middle-east-is-affecting-energy-trade-and-finance) 這個全球共同分母讓 Fed 的語氣問題更像能源通膨治理題。

## 5 月資料會校準三條路徑

如果 `2026-05-12` CPI 把 headline CPI 留在 **3.3%** 上方，且 energy CPI 月增仍高於 **1.0%**，→ Fed statement 內的降息語氣會承受更高壓力，10 年期美債會繼續反映通膨補償與政策不確定性。[BLS CPI](https://www.bls.gov/cpi/news.htm)、[U.S. Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)

如果 `2026-05-28` PCE 把核心 PCE 月增壓到 **0.2%** 或以下，且 real PCE 仍維持正成長，→ Fed 可以保留資料依賴語氣，三位反對者的溝通壓力會下降。[BEA PCE](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)

如果 `2026-06-17` FOMC statement 移除 easing bias，同時維持利率區間，→ Fed 會把政策訊號改成雙向反應函數，長端利率會更直接交易通膨資料與能源路徑。[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)、[Fed calendar](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)

## 結語

> **核心判斷：** 8 比 4 投票把 Fed 的問題從利率水位推到溝通水位；能源通膨與成長韌性同時存在時，降息語氣本身會成為期限溢價來源。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Headline CPI + energy CPI | `2026-05-12` 與 `2026-06-10` headline CPI 連續 `2` 次 `>=3.3%`，且 energy CPI 月增連續 `2` 次 `>=1.0%` | 觀察 `2026-05-12` 至 `2026-06-10` CPI | Fed 降息語氣需要重估，長端利率會吸收更多通膨補償 |
| Core PCE + real PCE | `2026-05-28` 與 `2026-06-26` core PCE 月增連續 `2` 次 `<=0.2%`，且 real PCE 連續 `2` 次正成長 | 觀察 `2026-05-28` 至 `2026-06-26` PCE | Fed 可以保留資料依賴語氣，4 月 dissents 的壓力會下降 |
| 10Y Treasury CMT | 10 年期 CMT 連續 `10` 個交易日 `>=4.50%` | 觀察 Treasury daily rates 至 `2026-06-17` FOMC | 長端利率已把溝通分裂內生化，期限溢價框架需要升權 |

後續三個變數很直接。第一個是 `2026-05-12` CPI 的能源項目，它會回答能源 shock 是否仍在推高 headline。第二個是 `2026-05-28` PCE 的核心月增，它會回答通膨壓力是否走進 Fed 最重視的物價口徑。第三個是 10 年期美債是否連續站上 `4.50%`，它會回答 Fed 語氣分裂是否已經進入期限溢價。[BLS CPI](https://www.bls.gov/cpi/news.htm)、[BEA PCE](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)、[U.S. Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)

---

*資料來源：[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)、[Cleveland Fed](https://www.clevelandfed.org/collections/speeches/2026/sp-20260501-statement-regarding-april-fomc-meeting-vote)、[BEA PCE](https://www.bea.gov/news/2026/personal-income-and-outlays-march-2026)、[BEA GDP](https://www.bea.gov/news/2026/gdp-advance-estimate-1st-quarter-2026)、[BLS CPI](https://www.bls.gov/news.release/cpi.htm?lv=true)、[U.S. Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)、[ECB statement](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260430~f99cb123a8.en.html)、[IMF](https://www.imf.org/en/blogs/articles/2026/03/30/how-the-war-in-the-middle-east-is-affecting-energy-trade-and-finance)*
*市場數據截至：2026-05-04（U.S. Treasury） / 官方數據截至：2026-04-30（BEA、ECB） / Fed 聲明截至：2026-04-29 / Cleveland Fed 聲明截至：2026-05-01*
*本文僅供參考，不構成投資建議。*
