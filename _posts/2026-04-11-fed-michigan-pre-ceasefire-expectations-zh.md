---
layout: post
title: "4.8% 已經跳起來，98% 樣本還停在停火前：Fed 的下一題變成家戶預期"
date: 2026-04-11 12:11:09 +0800
categories: [macro]
tags: [macro, fed, inflation, energy, consumption]
macro_kind: brief
description: "美國 3 月 CPI 月增 0.9%、年增 3.3%，核心 CPI 只增 0.2%；密大 4 月 preliminary 又把一年通膨預期推到 4.8%，而且 98% 訪談完成於 4 月 7 日停火宣布前。10 年 breakeven 仍在 2.34% 左右，Fed 現在要分辨的是一次汽油 shock，還是更黏的家戶預期外溢。"
lang: zh-TW
---

## 3.3% 已經印出來，4.8% 把下一題往前推

BLS 在 `2026-04-10` 把 `3 月 CPI` 寫成 **月增 0.9%**、**年增 3.3%**；Michigan 同晚又把 `4 月 preliminary` 的一年通膨預期推到 **4.8%**。[BLS CPI](https://www.bls.gov/news.release/archives/cpi_04102026.htm)、[Michigan](https://www.sca.isr.umich.edu/)

**當 `3 月 CPI` 年增率回到 `3.3%`、而 Michigan `4 月 preliminary` 把 `1 年通膨預期` 推到 `4.8%` 時，Fed 要先把這次壓力讀成一次汽油尖峰，還是讀成家戶預期正在外溢？**

`2026-04-24` 的 Michigan final、`2026-04-29` 的 FOMC、`2026-05-12` 的下一份 CPI 會把這道題分得更清楚。`4.8%` 若在停火後仍留高位，Fed 對 second-round effects 的警覺會升權；`4.8%` 若快速回落，這次 shock 會更接近一次高油價記憶。[FOMC calendars](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)

## 98% 的樣本時點，把今天的 headline 變成預期題

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| headline 先由汽油 shock 拉高，Fed 真正盯的是 expectations 的跟上幅度 | gasoline 月增 `21.2%`、energy 月增 `10.9%`、core CPI 只增 `0.2%`；Michigan `1 年通膨預期 4.8%`，而且 `98%` 訪談完成於 `4 月 7 日` 停火宣布前 | 很高 |
| 市場長端仍留克制，policy switch 仍要看更廣的擴散 | `10Y nominal 4.29%`、`10Y TIPS 1.95%`，對應 `10Y breakeven` 約 `2.34%`；NY Fed `5 年` 通膨預期仍在 `3.0%` | 高 |

BLS 把 `3 月 CPI` 的第一層寫得很直白。headline 月增 **0.9%**，其中 energy 月增 **10.9%**，gasoline 月增 **21.2%**，headline 漲幅接近四分之三來自 gasoline；core CPI 月增只有 **0.2%**。[BLS CPI](https://www.bls.gov/news.release/archives/cpi_04102026.htm) 這代表 headline 已經把油價 shock 完整印出來，core 只把更廣泛轉嫁打開一道門。

Michigan 把第二層直接推到家戶預期。`1 年通膨預期` 由 **3.8%** 升到 **4.8%**，`長期預期` 由 **3.2%** 升到 **3.4%**；更有用的細節是 **98%** 訪談完成於 `2026-04-07` 停火宣布前。[Michigan](https://www.sca.isr.umich.edu/) 這個 timing 讓 `2026-04-24` 的 final survey 變成真正的驗證點。停火後若預期仍留高位，Fed 看到的就會是更黏的 expectations drift。

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260411FedMichiganPreCeasefire"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260411FedMichiganPreCeasefire'), {
  type: 'bar',
  data: {
    labels: ['Headline CPI', 'Core CPI', 'Michigan 1Y', 'Michigan 長期', '10Y Breakeven'],
    datasets: [{
      label: '百分比 (%)',
      data: [3.3, 2.6, 4.8, 3.4, 2.34],
      backgroundColor: [
        'rgba(220, 38, 38, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(37, 99, 235, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(8, 145, 178, 0.78)'
      ],
      borderColor: [
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(37, 99, 235, 1)',
        'rgba(16, 185, 129, 1)',
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
        text: '家戶短端預期已抬高，市場長端仍留低位（資料來源：BLS / Michigan / Fed）'
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

Fed H.15 與紐約聯儲把第三層留在市場端。`2026-04-09` 的 `10Y nominal` 是 **4.29%**，`10Y TIPS` 是 **1.95%**，對應的 `10Y breakeven` 約是 **2.34%**；紐約聯儲 `3 月 SCE` 的 `5 年` 通膨預期也還留在 **3.0%**。[H.15](https://www.federalreserve.gov/releases/h15/)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407) `4.8% - 2.34% = 2.46` 個百分點。家戶短端與市場長端目前維持分裂定價。**Sal Guatieri** 也把 `3.4%` 的長期預期解讀為仍具錨定特徵。[BMO](https://economics.bmo.com/en/publications/detail/1e911d5b-8937-47a2-8cde-f6dbf54fd54d/) Fed 因此會把目光放在停火後的 expectations correction，或停火後仍留高位的 expectations drift。

## 4 月 24 日與 5 月 12 日會把這道題推向哪一邊

如果 `2026-04-24` 的 Michigan final 把 `1 年通膨預期` 留在 **4.8%** 左右、`長期預期` 留在 **3.4%** 左右，同時 `10Y breakeven` 站上 **2.50%** 並連續 **5 個交易日**，→ Fed 會把這次 shock 讀成更接近預期外溢，`2026-04-29` 的會後語氣會更強調 second-round effects。[Michigan](https://www.sca.isr.umich.edu/)、[H.15](https://www.federalreserve.gov/releases/h15/)

如果 `2026-04-24` 的 Michigan final 把 `1 年通膨預期` 拉回 **4.4%** 以下，`10Y breakeven` 續留 **2.40%** 以下，→ 這次 shock 會更接近一次高油價記憶，Fed 會把主要壓力留在 headline 與近端 real income 壓縮。[Michigan](https://www.sca.isr.umich.edu/)、[H.15](https://www.federalreserve.gov/releases/h15/)

如果 `2026-05-12` 的 `4 月 CPI` 再把 core 月增推到 **0.3%** 以上，airline fares、transportation services 與 nondurables 一起抬高，→ headline 題會正式走進更廣的 core 題，今天的「家戶與市場分裂定價」框架需要升級。[BLS CPI](https://www.bls.gov/news.release/archives/cpi_04102026.htm)

## 結語

> **核心判斷：** `3 月 CPI` 已經把油價 shock 印在 headline 上，Fed 的下一題已經轉向停火後家戶預期的留高幅度與持久度。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Michigan 1Y + 長期預期 | `2026-04-24` final 仍把 `1Y >= 4.8%`、長期 `>= 3.4%` | 觀察 `2026-04-24` final Michigan 與 `2026-04-29` FOMC | 停火後的預期修正力道偏弱，Fed 會把 expectations drift 放到更前面 |
| 10Y breakeven | `>= 2.50%` 連續 `5` 個交易日 | 觀察即日起至 `2026-04-29` FOMC | 市場長端開始追上家戶短端，今天的裂縫會縮小，政策語氣可能同步轉硬 |
| Core CPI breadth | `2026-05-12` 的 core CPI 月增 `>= 0.3%`，且 transport / nondurables 同步上行 | 觀察 `2026-05-12` CPI | 一次汽油 shock 正在走進更廣的第二輪傳導，文章框架需要升級 |

後續最值得看的三個點很直接。第一個點是 `2026-04-24` 的 Michigan final，這個日期會回答 `98%` 的停火前樣本在停火後會修回多少。第二個點是 `2026-04-29` 的 FOMC，這場會議會把 Fed 對 expectations drift 的敏感度寫進會後語氣。第三個點是 `2026-05-12` 的下一份 CPI，這個數字會回答 headline shock 走進更廣 core 的幅度。

---

*資料來源：[BLS CPI](https://www.bls.gov/news.release/archives/cpi_04102026.htm)、[Michigan](https://www.sca.isr.umich.edu/)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[H.15](https://www.federalreserve.gov/releases/h15/)、[BMO](https://economics.bmo.com/en/publications/detail/1e911d5b-8937-47a2-8cde-f6dbf54fd54d/)、[Desjardins](https://www.desjardins.com/en/savings-investment/economic-studies/usa-cpi-10-april-2026.html)、[ECB](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260319~93b1cbad97.en.html)、[BOJ](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf)*
*市場與官方數據截至：2026-04-10（BLS CPI、Michigan、S&P 500） / 2026-04-09（Fed H.15、VIX、10Y yield） / 2026-04-07（New York Fed SCE） / 2026-03-19（ECB、BOJ）*
