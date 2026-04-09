---
layout: post
title: "3.4% / 3.1% / 3.0% 還排在那裡，升息字眼先回到紀要：Fed 的分界線在預期曲線"
date: 2026-04-09 12:20:00 +0800
categories: [macro]
tags: [macro, fed, inflation, bonds]
macro_kind: short
description: "紐約聯儲 3 月 SCE 把 1 年 / 3 年 / 5 年通膨預期寫成 3.4% / 3.1% / 3.0%，FOMC 3 月紀要又把 2 年債上行主要來自 inflation compensation 寫進正文。Fed 的下一格會由近端預期會不會外溢到中長端決定。"
lang: zh-TW
---

## 3.4% / 3.0% 先把短端與長端分開

紐約聯儲把 3 月一年通膨預期寫成 **3.4%**，五年通膨預期留在 **3.0%**。[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[FOMC minutes](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260318.htm)

**聯準會紀要已把升息風險寫回桌面時，政策真正盯的是油價本身，還是 `3.4% / 3.1% / 3.0%` 這條通膨預期曲線？**

這個框架把 Fed 的判斷拆成短端預期、中長端錨定與家戶吸收力三層。讀者只要盯住 **2026-04-10** 的 CPI、**2026-04-29** 的 FOMC、以及 **2026-05 上旬** 的下一輪 SCE，就能分辨這次價格 shock 留在 headline，還是走進 policy path。[BLS CPI schedule](https://www.bls.gov/schedule/news_release/cpi.htm)、[FOMC calendars](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)

## 紀要先抬兩年債，五年預期仍留在 3.0%

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 短端通膨預期已經抬頭 | 紀要把 `2-year` yield 上行主因寫成 inflation compensation；SCE 把 `1-year` expectations 寫成 `3.4%`，汽油價格預期寫成 `9.4%` | 很高 |
| 中長端錨定仍然站著 | 紀要把多數 longer-term expectations 寫成 consistent；SCE 的 `5-year` 留在 `3.0%`；H.15 算出的 `10Y breakeven` 約 `2.37%` | 很高 |
| 真正門檻是 second-round effect | Williams 把較長期 expectations 放在 `2%` 目標附近；ECB 與 BOJ 都把 expectations drift 當政策切換條件 | 高 |

FOMC 紀要把今天最有用的細節直接寫在 market section。`2-year` nominal Treasury yield 的上行，主要來自更高的 inflation compensation；`10-year` nominal Treasury yield 則大致沒變。participants section 又把另一層條件寫清楚：近端通膨預期最近幾週已經抬頭，多數長端通膨預期仍與 `2%` 目標一致；some participants 已經看到 two-sided policy description 的理由，many participants 也把 persistent oil price 與 rate increases 放進同一句話。[FOMC minutes](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260318.htm) 這組文字把 Fed 的分界線畫在預期曲線的斜率上。

<aside style="float: right; width: 245px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>Breakeven inflation</strong>：同天期名目公債殖利率減去同天期 TIPS 殖利率。<br>
這個差值常用來觀察市場願意支付多少通膨補償。
</aside>

紐約聯儲與 H.15 把這條斜率量化得更清楚。SCE 把一年、三年、五年通膨預期寫成 **3.4% / 3.1% / 3.0%**，一年汽油價格預期升到 **9.4%**；H.15 在 `2026-04-07` 把 `5-year` nominal yield 寫成 **3.95%**、`5-year` TIPS yield 寫成 **1.34%**，對應的 `5Y breakeven` 約是 **2.61%**，同一天的 `10Y breakeven` 約是 **2.37%**。[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[H.15](https://www.federalreserve.gov/releases/h15/) 這代表家戶與市場都先把壓力寫在中短端。`1-year` 與 `5-year` 之間的差有 **0.4** 個百分點，`5Y` 與 `10Y breakeven` 之間也有 **0.24** 個百分點差，curve-wide de-anchoring 仍留在下一個條件。

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260409FedExpectationsCurve"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260409FedExpectationsCurve'), {
  type: 'bar',
  data: {
    labels: ['SCE 1Y', 'SCE 3Y', 'SCE 5Y', '5Y Breakeven', '10Y Breakeven'],
    datasets: [{
      label: '預期 / 通膨補償 (%)',
      data: [3.4, 3.1, 3.0, 2.61, 2.37],
      backgroundColor: [
        'rgba(220, 38, 38, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(37, 99, 235, 0.78)',
        'rgba(8, 145, 178, 0.78)'
      ],
      borderColor: [
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(37, 99, 235, 1)',
        'rgba(8, 145, 178, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '短端預期抬得比長端快（資料來源：New York Fed / Federal Reserve H.15）'
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

反方同樣完整，而且名字明確。**John C. Williams** 在 `2026-03-30` 直接把較長期的 survey 與 market expectations 寫成與 `2%` 目標一致，也把 second-round effects 放在較低位置。[Williams speech](https://www.newyorkfed.org/newsevents/speeches/2026/wil260330) 歐洲與日本的官方文件也把同一條門檻寫得很清楚。ECB 把 2026 inflation compensation 上修最多 **30bp**，政策利率路徑卻幾乎沒動；BOJ 也把中東油價 shock 列成 risk scenario，baseline 仍維持，second-round effects 與 expectations drift 才會改寫政策節奏。[ECB account](https://www.ecb.europa.eu/press/accounts/2026/html/ecb.mg260305~4a9b7afe1c.en.html)、[BOJ summary](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf) 這條反方讓今天的結論維持平衡。升息字眼已經回到桌面，實際升息仍留在中長端是否跟上這個條件句裡。

## 4 月 10 日與 4 月 29 日會把這條曲線往哪邊推

如果 **2026-04-10** 的 CPI 讓 core goods 壓力續留高位，**2026-05 上旬** 的下一輪 SCE 又把一年與三年通膨預期留在 **3.4% / 3.1%** 或更高，→ FOMC 的 two-sided 語氣會續留桌面，市場對 first cut timing 的想像會再往後移。[BLS CPI schedule](https://www.bls.gov/schedule/news_release/cpi.htm)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)

如果 **2026-05 上旬** 的下一輪 SCE 把一年通膨預期拉回 **3.2%** 以下，五年仍留在 **3.0%** 或更低，→ 這次價格 shock 會續留在 short-end scare，Williams 那條「長端仍錨定」的路徑會升權。[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[Williams speech](https://www.newyorkfed.org/newsevents/speeches/2026/wil260330)

如果 **2026-04-29** 之前的 H.15 持續把 `10Y breakeven` 留在 **2.50%** 以上達 **10 個交易日**，同時下一輪 SCE 把五年通膨預期推到 **3.1%** 以上，→ 今天的「短端先抬、長端仍穩」框架就要全面重評，Fed 的 hawkish option 會由文字風險升到實質風險。[H.15](https://www.federalreserve.gov/releases/h15/)、[FOMC calendars](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)

## 結語

> **核心判斷：** Fed 3 月紀要把政策分界線畫在預期曲線的斜率上；短端預期已經抬頭，中長端錨定仍站著，升息字眼因此先回到桌面，實際升息仍留在條件句。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| SCE 1Y + SCE 5Y | 下一輪 SCE 把 `1Y` 拉回 `<3.2%`，且 `5Y` 續留 `<=3.0%` | 觀察至 `2026-05 上旬` 的下一輪 SCE，並對照 `2026-04-29` FOMC | short-end scare 降溫，今天的 hawkish reread 需要降權 |
| SCE 5Y + 10Y breakeven | `5Y` SCE `>3.0%`，且 `10Y breakeven >=2.50%` 連續 `10` 個交易日 | 日度觀察至 `2026-04-29` FOMC，並延伸到 `2026-05 上旬` 的下一輪 SCE | 長端錨定轉弱，文章框架要改寫成更廣的 inflation drift |
| Initial claims + unemployment rate | initial claims `>220k` 連續 `4` 週，且失業率在下一份非農 `>=4.5%` | 觀察每週至 `2026-05-08` 非農 | growth damage 升權，Fed 會更重視 downside labor risk |

後續最值得看的三個點如下。第一個點是 **2026-04-10** 的 CPI，這個數字會直接回答近端預期抬頭是否開始由能源與關稅走向更廣泛的 goods inflation。[BLS CPI schedule](https://www.bls.gov/schedule/news_release/cpi.htm) 第二個點是 **2026-04-29** 的 FOMC，這場會議會回答紀要裡的 two-sided 語氣會不會正式走進 statement language。[FOMC calendars](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm) 第三個點是 **2026-05 上旬** 的下一輪 SCE，這組數字會直接回答 `3.4% / 3.1% / 3.0%` 是一次高點，還是更長的 slope shift。[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)

---

*資料來源：[FOMC minutes](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260318.htm)、[H.15](https://www.federalreserve.gov/releases/h15/)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[Williams speech](https://www.newyorkfed.org/newsevents/speeches/2026/wil260330)、[ECB account](https://www.ecb.europa.eu/press/accounts/2026/html/ecb.mg260305~4a9b7afe1c.en.html)、[BOJ summary](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf)、[BLS CPI schedule](https://www.bls.gov/schedule/news_release/cpi.htm)、[FOMC calendars](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)*
*市場與官方數據截至：2026-04-09（FOMC 紀要） / 2026-04-08（H.15 release date） / 2026-04-07（New York Fed SCE） / 2026-03-30（Williams、BOJ） / 2026-03-05（ECB account）*
*本文僅供參考，不構成投資建議。*
