---
layout: post
title: "5.0% / 6.1% / 2.4% 已經排成兩條線：中國一季度先快在工業，內需走在第二段"
date: 2026-04-16 12:13:18 +0800
categories: [macro]
tags: [macro, china, consumption, property, trade]
macro_kind: short
description: "國家統計局把中國一季度 GDP 寫成 5.0%，規模以上工業增加值寫成 6.1%，社會消費品零售總額落在 2.4%，房地產開發投資落在年減 11.2%。這代表工業、出口與基建先撐住 headline，5 月上旬的海關資料與 5 月中旬的 4 月月度資料會定位內需接棒速度。"
lang: zh-TW
---

## 5.0% 已經回來，2.4% 走在後段

國家統計局在 `2026-04-16` 把中國一季度 GDP 寫成 **5.0%**，同一批資料又把社會消費品零售總額寫成 **2.4%**。[國家統計局總稿](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963330.html)、[社零](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963325.html)

**中國一季度 GDP 回到 `5.0%` 時，成長已經回到更廣的內需擴張，還是工業與出口先把表面撐住？**

這組資料把中國經濟拆成工業與外需快線、居民與地產接棒線兩張表。讀者只要盯住 **5 月上旬** 的海關進出口、**5 月中旬** 的 4 月工業與社零、以及同批房地產銷售資料，就能定位內需接棒速度。[IMF](https://www.imf.org/en/news/articles/2026/02/18/pr-26053-china-imf-executive-board-concludes-2025-article-iv-consultation)、[BOFIT](https://www.bofit.fi/en/monitoring/weekly/2026/vw202610_2/)

## 6.1% 的工業先跑，2.4% 的零售與 -11.2% 的地產走在後段

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 工業、出口與基建先撐住 headline | 工業增加值 `+6.1%`、高技術製造業 `+12.5%`、扣除地產後投資 `+4.8%`、工業出口交貨值 `+8.7%` | 很高 |
| 服務消費與政策補貼正把內需慢慢拉回 | 服務零售 `+5.5%`、網上服務零售 `+8.8%`、除汽車社零 `+3.6%`、農村實質收入 `+5.4%` | 中 |

目前最被數字支持的版本是第一條線。國家統計局把一季度規模以上工業增加值寫成 **6.1%**，高技術製造業寫成 **12.5%**，又把固定資產投資 headline 寫成 **1.7%**、扣除房地產後寫成 **4.8%**。[國家統計局總稿](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963330.html)、[工業](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963329.html) 這代表投資 headline 被地產明顯拉低，真正維持增速的是製造、基建與外需。3 月工業出口交貨值又年增 **8.7%**，廣交會第一期直接把 `先進製造` 放成主題，中東採購需求則往高科技、材料與設備集中。[工業](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963329.html)、[央視廣交會](https://news.cctv.com/2026/04/16/ARTI0A7wvVyZSPIchbzUSptt260416.shtml) 這條線把今天的 headline growth 寫得很清楚：中國先靠工廠和外需把表面撐住。

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260416ChinaTwoTracks"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260416ChinaTwoTracks'), {
  type: 'bar',
  data: {
    labels: ['GDP', '工業增加值', '社零', '扣除地產後投資', '房地產開發投資'],
    datasets: [{
      label: '2026 年一季度同比增速（%）',
      data: [5.0, 6.1, 2.4, 4.8, -11.2],
      backgroundColor: [
        'rgba(8, 145, 178, 0.82)',
        'rgba(249, 115, 22, 0.82)',
        'rgba(100, 116, 139, 0.82)',
        'rgba(22, 163, 74, 0.82)',
        'rgba(220, 38, 38, 0.82)'
      ],
      borderColor: [
        'rgba(8, 145, 178, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(100, 116, 139, 1)',
        'rgba(22, 163, 74, 1)',
        'rgba(220, 38, 38, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '中國一季度的快線落在工業與外需，零售與地產走在後段（資料來源：國家統計局 2026-04-16）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

內需的修復走在接棒線上。國家統計局把一季度社零寫成 **2.4%**，商品零售 **2.2%**，餐飲收入 **4.2%**；居民人均可支配收入實質增長 **4.0%**，人均消費支出實質增長 **2.6%**，兩者之間留著 **1.4** 個百分點差。[社零](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963325.html)、[居民收入與消費支出](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963323.html) 國家統計局把「市場需求繼續改善」直接寫進總稿，服務零售年增 **5.5%**、網上服務零售年增 **8.8%** 也支持這條較樂觀的讀法。[國家統計局總稿](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963330.html) 房地產開發投資 **-11.2%**、商品房銷售額 **-16.7%**、個人按揭貸款 **-34.6%** 這組數字又把財富效應和信用傳導寫在接棒線的後段。[房地產](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963327.html) IMF 在 `2026-02-18` 的 Article IV 直接把 `private domestic demand remained lackluster` 寫成主判斷，AP 引述 **Lynn Song** 也把房地產持續下滑列成中國轉向 domestic-demand-driven growth model 的主要風險。[IMF](https://www.imf.org/en/news/articles/2026/02/18/pr-26053-china-imf-executive-board-concludes-2025-article-iv-consultation)、[AP](https://apnews.com/article/china-vanke-property-real-estate-a0bc5a9d1ae887ee3fa027f408582f60) 目前最穩的讀法是「內需在回，接棒進度停在中段」。

## 5 月上旬與 5 月中旬會把接棒速度寫清楚

如果 **5 月上旬** 的海關資料仍把出口留在正成長，**5 月中旬** 的 4 月工業增加值又留在 **5.5%** 上方，同時社零增速維持 **3.0%** 以下，→ 中國會延續工業 / 外需快線與內需接棒線並行的兩速結構。[國家統計局總稿](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963330.html)、[BOFIT](https://www.bofit.fi/en/monitoring/weekly/2026/vw202610_2/)

如果 **5 月中旬** 的 4 月社零回到 **3.0%** 上方，除汽車社零維持 **3.5%** 上方，房地產銷售額降幅又收斂到 **-10%** 以內，→ 需求修復會由服務與補貼品類擴到更廣的 household demand，今天的兩速框架會轉成更均衡的需求修復框架。[社零](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963325.html)、[房地產](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963327.html)

如果 **5 月中旬** 的工業增加值落到 **5.0%** 以下，房地產開發投資維持 **-10%** 以下，商品房銷售額降幅也維持 **-15%** 左右，→ 工業快線和內需接棒線會一起下修斜率，今天的「表面由工業撐住」框架會轉成更全面的成長放慢框架。[工業](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963329.html)、[房地產](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963327.html)

## 結語

> **核心判斷：** 中國一季度的 5.0% 先由工業、出口與基建撐住表面，居民消費與房地產走在較慢的一段，內需接棒進度仍在中段。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 社零 + 除汽車社零 | 4 月與 5 月社零連續 `2` 次 `>=3.0%`，且除汽車社零連續 `2` 次 `>=3.5%` | 觀察 `2026-05 中旬` 至 `2026-06 中旬` 的國家統計局月度資料 | 居民需求已從補貼與服務擴到更廣的商品面，均衡需求框架會升權 |
| 房地產投資 + 商品房銷售額 | 房地產開發投資在 `2026-05 中旬` 與 `2026-06 中旬` 連續 `2` 次好於 `-5%`，且商品房銷售額降幅連續 `2` 次收斂到 `-10%` 以內 | 觀察 `2026-05 中旬` 至 `2026-06 中旬` 的房地產月報 | 財富效應與信用拖累明顯減輕，內需接棒線會開始接近工業快線 |
| 工業增加值 + 外需 | 工業增加值在 `2026-05 中旬` 與 `2026-06 中旬` 連續 `2` 次 `<5.0%`，且工業出口交貨值或海關出口年增至少 `1` 次轉負 | 觀察 `2026-05 上旬` 海關資料，並延伸到 `2026-05 中旬` 與 `2026-06 中旬` 的工業資料 | 工業與外需快線失速，今天的「工業先撐住表面」框架需要全面重估 |

後續最值得看的三個點很直接。第一個點是 **5 月上旬** 的海關進出口，這張表會先定位外需快線的延續幅度。第二個點是 **5 月中旬** 的 4 月社零與工業增加值，這兩個數字會直接定位快線和接棒線的距離。第三個點是同批房地產投資與商品房銷售額，這兩列會定位居民財富效應與信用傳導的修復速度。

---

*資料來源：[國家統計局總稿](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963330.html)、[國家統計局工業](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963329.html)、[國家統計局社零](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963325.html)、[國家統計局房地產](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963327.html)、[國家統計局居民收入與消費支出](https://www.stats.gov.cn/sj/zxfbhjd/202604/t20260416_1963323.html)、[IMF China Article IV](https://www.imf.org/en/news/articles/2026/02/18/pr-26053-china-imf-executive-board-concludes-2025-article-iv-consultation)、[BOFIT Weekly Review](https://www.bofit.fi/en/monitoring/weekly/2026/vw202610_2/)、[AP China growth target](https://apnews.com/article/china-congress-economy-gdp-trump-target-1822006cd39ff43505fa9a47a4581a16)、[AP Vanke / Lynn Song](https://apnews.com/article/china-vanke-property-real-estate-a0bc5a9d1ae887ee3fa027f408582f60)、[CCTV 廣交會](https://news.cctv.com/2026/04/16/ARTI0A7wvVyZSPIchbzUSptt260416.shtml)*
*市場與官方數據截至：2026-04-16（國家統計局、央視） / 2026-04-14（Capital Economics） / 2026-03-05（AP China growth target） / 2026-02-18（IMF Article IV） / 2025-12-31（AP Vanke）*
*本文僅供參考，不構成投資建議。*
