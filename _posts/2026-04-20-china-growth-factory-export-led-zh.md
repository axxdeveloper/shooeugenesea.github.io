---
layout: post
title: "5.0% GDP 站在表面，2.6% 消費寫在裡面：中國這輪回升由工廠與出口領跑"
date: 2026-04-20 12:06:28 +0800
categories: [macro]
tags: [macro, china, trade, consumption, property]
macro_kind: long
description: "中國 2026 年第一季 GDP 年增 5.0%，貨物出口年增 11.9%，居民實質消費支出只增 2.6%。工廠、出口與高技術製造先把成長拉高，家庭需求與房地產仍在後段。"
lang: zh-TW
---

## 5.0% 站在表面，2.6% 寫在裡面

國家統計局在 4 月 16 日把中國第一季 GDP 寫成 **`5.0%`**，同時把居民實質消費支出寫成 **`2.6%`**。[第一季國民經濟](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)、[第一季住戶收支](https://www.stats.gov.cn/english/PressRelease/202604/t20260417_1963349.html)

**當中國第一季 GDP 年增 `5.0%`、貨物出口年增 `11.9%`、居民實質消費支出只增 `2.6%` 時，市場要把這輪回升讀成內需接棒，還是工廠與出口領跑？**

這個框架先看三個日期。`2026-04-30` 的製造業 PMI 會回答工廠領跑是否續留，`2026-05-11` 的 CPI/PPI 會回答價格回升是否延伸，`2026-05-18` 的 4 月國民經濟運行情況會回答家庭需求有沒有把接力棒接過來。[國家統計局發布日程](https://www.stats.gov.cn/xxgk/sjfb/fbrcb/202512/t20251224_1962137.html)

## 工廠、出口、家庭把同一季寫成三種速度

這裡先把口徑講清楚。下方圖表與等式表只採 `2026` 年第一季或 `1-3` 月的**名目年增率**，收入、零售、投資與貿易都用同一個 Jan-Mar 分母。後文切到實質所得與實質消費時，我會直接寫出「實質」，讓口徑切換維持清楚。

<div style="max-width: 720px; margin: 2em auto;">
  <canvas id="macroChart20260420ChinaGap"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260420ChinaGap'), {
  type: 'bar',
  data: {
    labels: ['出口', '進口', '服務零售', '居民名目所得', '居民名目消費', '社零', '房地產投資'],
    datasets: [{
      label: '2026Q1 / 1-3月年增率 (%)',
      data: [11.9, 19.6, 5.5, 4.9, 3.6, 2.4, -11.2],
      backgroundColor: [
        'rgba(37, 99, 235, 0.78)',
        'rgba(8, 145, 178, 0.78)',
        'rgba(14, 165, 233, 0.78)',
        'rgba(22, 163, 74, 0.78)',
        'rgba(132, 204, 22, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(185, 28, 28, 0.78)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(8, 145, 178, 1)',
        'rgba(14, 165, 233, 1)',
        'rgba(22, 163, 74, 1)',
        'rgba(132, 204, 22, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(185, 28, 28, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '中國第一季名目成長速度差：外需與服務快於商品零售，房地產續降（來源：NBS）'
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

| 式子 | 單位 | 口徑說明 |
|---|---|---|
| `11.9 - 2.4 = 9.5` | 百分點 | 第一季出口年增減去社零年增，兩者都採 Jan-Mar 名目年增率 |
| `4.8 - 1.7 = 3.1` | 百分點 | 扣除房地產後固定資產投資年增減去整體固定資產投資年增，兩者都採 Jan-Mar 名目年增率 |
| `4.9 - 3.6 = 1.3` | 百分點 | 居民名目所得年增減去居民名目消費年增，兩者都採第一季名目年增率 |

第一條速度來自工廠與出口。國家統計局把第一季規上工業增加值寫成 **`6.1%`**，其中裝備製造業年增 **`8.9%`**、高技術製造業年增 **`12.5%`**；機電產品出口又增 **`18.3%`**，1-2 月規上工業利潤再增 **`15.2%`**。[第一季國民經濟](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)、[工業利潤](https://www.stats.gov.cn/english/PressRelease/202603/t20260330_1962876.html) 這條線把供給、出口與利潤連成同一個方向，工廠端目前拿到最多硬資料支持。

第二條速度來自家庭需求。國家統計局把第一季社會消費品零售總額寫成 `2.4%`，服務零售寫成 `5.5%`，網路零售寫成 `8.0%`；住戶收支資料把居民名目消費支出寫成 `3.6%`，口徑切到實質後落在 `2.6%`，居民實質可支配所得落在 `4.0%`，3 月城鎮調查失業率則在 `5.4%`。[第一季國民經濟](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)、[第一季住戶收支](https://www.stats.gov.cn/english/PressRelease/202604/t20260417_1963349.html) 這組數字把家庭端寫成恢復中的慢車道。國家統計局副局長毛盛勇在 4 月 16 日記者會又把以舊換新銷售額寫成超過 `4300` 億元、惠及 `6000` 多萬人次，這代表政策已經把耐用品與服務消費往前推了一步。[NBS Q&A](https://www.stats.gov.cn/sj/sjjd/202604/t20260416_1963332.html)

第三條速度來自價格與房地產的拉鋸。3 月 CPI 年增 `1.0%`、核心 CPI 年增 `1.1%`，PPI 年增 `0.5%`，連續 `41` 個月的負成長在這個月結束。[CPI](https://www.stats.gov.cn/english/PressRelease/202604/t20260413_1963288.html)、[PPI](https://www.stats.gov.cn/english/PressRelease/202604/t20260413_1963289.html) 毛盛勇把 `PPI` 轉正拆成三層：國內供求改善、競爭秩序優化、國際能源帶動；他把前兩層放在主導位置。[NBS Q&A](https://www.stats.gov.cn/sj/sjjd/202604/t20260416_1963332.html) 另一邊，1-3 月房地產開發投資續降 `11.2%`，新開工面積續降 `20.3%`，銷售額續降 `16.7%`，個人按揭貸款續降 `34.6%`。[房地產開發投資](https://www.stats.gov.cn/english/PressRelease/202604/t20260417_1963352.html)、[第一季國民經濟](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html) 價格回升先發生在工廠，財富鏈與房地產鏈仍把家庭端留在後段。

這條結構也帶著全球外溢效果。`IMF` 亞太部主任 Krishna Srinivasan 在 4 月 16 日把中國 `2026` 成長預測放在 `4.4%`，同時明寫第一季數據強於內部與市場預估，後續存在上修空間。[IMF transcript](https://www.imf.org/en/news/articles/2026/04/16/tr-04162026-press-briefing-transcript-asia-pacific-department-spring-meetings-2026) **Goldman Sachs** 的 Hui Shan 也把 `2026` 成長預測放在 `4.8%`，理由是出口韌性與房地產拖累縮小；她同時寫出低家戶消費與勞動市場偏弱仍是結構限制。[Goldman Sachs Research](https://www.goldmansachs.com/insights/articles/chinas-economy-expected-to-grow-in-2026-amid-surging-exports) 今天最被數據支持的版本因此很清楚。中國第一季確實出現回升，接力棒目前仍握在工廠、出口與政策推動的設備升級手裡，家庭需求正沿著後段往前走。

## 4 月 30 日、5 月 11 日、5 月 18 日會把接力棒交給誰

如果 `2026-04-30` 的製造業 PMI 維持在 `50.0` 上方，`2026-05-11` 的 PPI 續留 `>=0`，`2026-05-18` 的規上工業增加值又留在 `>=5.5%`，→ 工廠與價格回升會續握接力棒，供給升級與出口韌性仍是主線。[國家統計局發布日程](https://www.stats.gov.cn/xxgk/sjfb/fbrcb/202512/t20251224_1962137.html)

如果 `2026-05-18` 的社零年增回到 `>=3.5%`，城鎮調查失業率回到 `<=5.2%`，服務零售續留 `>=5.5%`，→ 家庭需求會把接力棒接近中段，第一季的「工廠先跑」框架會往「內需跟上」方向移動。[第一季國民經濟](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)、[國家統計局發布日程](https://www.stats.gov.cn/xxgk/sjfb/fbrcb/202512/t20251224_1962137.html)

如果 `2026-05-11` 的 PPI 回到 `<=0`，`2026-05-18` 的工業增加值回到 `<=5.0%`，房地產開發投資又續留 `<=-10%`，→ 工廠端會失去價格與數量雙支撐，整個回升框架需要改寫成更低速的總量題。[PPI](https://www.stats.gov.cn/english/PressRelease/202604/t20260413_1963289.html)、[房地產開發投資](https://www.stats.gov.cn/english/PressRelease/202604/t20260417_1963352.html)

## 日期把框架釘住

> **核心判斷：** 中國第一季成長由工廠、出口與設備升級領跑，家庭需求已經回升，接力棒目前仍在後段。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Retail sales + unemployment | 4 月社零年增 `>=3.5%`，且城鎮調查失業率 `<=5.2%` 連 2 次月度發布 | 觀察 `2026-05-18` 與 `2026-06-16` 國民經濟運行情況 | 家庭接棒成形，文章框架要改寫成內需跟上 |
| Real estate investment + sales | 房地產開發投資跌幅收斂到 `<=5%`，且新建商品房銷售額年增回到 `>=0%` 連 2 次月度發布 | 觀察 `2026-05-18` 與 `2026-06-16` | 房地產財富鏈修復，需求後段速度升權 |
| PPI + industrial output | PPI 回到 `<=0%`，且規上工業增加值 `<=5.0%` | 觀察 `2026-05-11` 與 `2026-05-18` | 工廠端失去價格與數量支撐，領跑框架失效 |

後續三個變數最有訊號價值。第一個變數是 `2026-04-30` 的 PMI，這份資料會先回答工廠端的加速是否延續到 4 月。第二個變數是 `2026-05-11` 的 CPI/PPI，這份資料會回答價格回升停在工廠，還是開始往更廣的收入與消費鏈傳導。第三個變數是 `2026-05-18` 的 4 月國民經濟運行情況，這個日期會把第一季的 `5.0%` 定位成工廠領跑的一季，或定位成內需接棒的起點。

---

*資料來源：[第一季國民經濟](https://www.stats.gov.cn/english/PressRelease/202604/t20260416_1963326.html)、[第一季住戶收支](https://www.stats.gov.cn/english/PressRelease/202604/t20260417_1963349.html)、[房地產開發投資](https://www.stats.gov.cn/english/PressRelease/202604/t20260417_1963352.html)、[CPI](https://www.stats.gov.cn/english/PressRelease/202604/t20260413_1963288.html)、[PPI](https://www.stats.gov.cn/english/PressRelease/202604/t20260413_1963289.html)、[工業利潤](https://www.stats.gov.cn/english/PressRelease/202603/t20260330_1962876.html)、[NBS Q&A](https://www.stats.gov.cn/sj/sjjd/202604/t20260416_1963332.html)、[IMF transcript](https://www.imf.org/en/news/articles/2026/04/16/tr-04162026-press-briefing-transcript-asia-pacific-department-spring-meetings-2026)、[Goldman Sachs Research](https://www.goldmansachs.com/insights/articles/chinas-economy-expected-to-grow-in-2026-amid-surging-exports)、[國家統計局發布日程](https://www.stats.gov.cn/xxgk/sjfb/fbrcb/202512/t20251224_1962137.html)*
*市場與官方數據截至：2026-04-16（第一季國民經濟、住戶收支、NBS 記者會） / 2026-04-13（CPI、PPI） / 2026-03-28（工業利潤） / 2026-01-08（Goldman Sachs Research）*
*本文僅供參考，不構成投資建議。*
