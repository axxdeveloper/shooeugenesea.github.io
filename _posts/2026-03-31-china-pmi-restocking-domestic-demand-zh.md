---
layout: post
title: "50.4 先回到擴張，45.0 持續壓住內需：中國 3 月 PMI 先走補庫"
date: 2026-03-31 12:42:00 +0800
categories: [macro]
tags: [macro, china, trade, energy, employment]
macro_kind: short
description: "中國 3 月製造業 PMI 升到 50.4，製造業新訂單升到 51.6，但非製造業新訂單停在 45.0，原材料購進價格跳到 63.9。4 月 10 日、4 月 16 日與 4 月 30 日的官方資料，會決定這波修復走向出口補庫，還是由成本與內需缺口主導。"
lang: zh-TW
---

## 50.4 與 63.9 把 3 月修復切成兩層

中國 3 月製造業 PMI 回到 **50.4**，原材料購進價格指數同步跳到 **63.9**。[中國國家統計局 3 月 PMI](https://www.stats.gov.cn/sj/zxfb/202603/t20260331_1962889.html)

中國 3 月 PMI 回到 50.4 時，出口補庫會先領跑，還是成本與內需缺口會接手定價？

這個框架先看製造業新訂單能否續留 **51** 上方，再看非製造業新訂單能否回到 **47** 上方。**2026-04-10** 的 CPI / PPI、**2026-04-16** 的一季工業與零售、以及 **2026-04-30** 的 4 月 PMI，會把工廠修復、內需斜率與成本傳導分開。[中國國家統計局發布日曆](https://www.stats.gov.cn/english/PressRelease/ReleaseCalendar/202512/t20251226_1962154.html)

## 大廠先拉動工廠，服務需求與成本壓力同時上桌

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 出口與補庫先拉動工廠 | 製造業 PMI 由 `49.0` 升到 `50.4`；新訂單由 `48.6` 升到 `51.6`；新出口訂單由 `45.0` 升到 `49.1` | 很高 |
| 內需把修復鎖在窄區間 | 非製造業商務活動指數只到 `50.1`，新訂單停在 `45.0`；1-2 月零售只增 `2.8%`，房地產投資仍降 `11.1%` | 很高 |
| 成本壓力抬高 4 月驗證門檻 | 原材料購進價格指數由 `50.6` 跳到 `63.9`；IEA 把報告撰寫時的 Brent 寫在約 `92` 美元 / 桶 | 高 |

目前最被數字支持的版本，是工廠先修復，企業廣度與內需斜率留在後段。中國國家統計局把製造業 PMI 由 **49.0** 拉到 **50.4**，新訂單由 **48.6** 拉到 **51.6**，大型企業 PMI 站上 **51.6**；中型與小型企業分別停在 **49.0** 與 **49.3**，製造業從業人員指數只到 **48.6**。[中國國家統計局 3 月 PMI](https://www.stats.gov.cn/sj/zxfb/202603/t20260331_1962889.html) 這條線把 3 月修復的主動能放在大廠補庫與出口。

ING 的 Lynn Song 把中國 1-2 月出口年增寫到 **21.8%**，其中對歐盟出口年增 **27.8%**、對 ASEAN 年增 **29.4%**、對美出口則年減 **11.0%**。[ING](https://think.ing.com/snaps/chinas-trade-growth-starts-2026-strong-with-biggest-gain-in-four-years-a) `49.1` 的新出口訂單因此更像全球需求再分配下的補庫結果。

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260331ChinaPmiSplit"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260331ChinaPmiSplit'), {
  type: 'bar',
  data: {
    labels: ['製造業 PMI', '製造業新訂單', '新出口訂單', '非製造業新訂單', '原材料購進價格'],
    datasets: [
      {
        label: '2026-02',
        data: [49.0, 48.6, 45.0, 45.2, 50.6],
        backgroundColor: 'rgba(8, 145, 178, 0.78)',
        borderColor: 'rgba(8, 145, 178, 1)',
        borderWidth: 1.2
      },
      {
        label: '2026-03',
        data: [50.4, 51.6, 49.1, 45.0, 63.9],
        backgroundColor: 'rgba(180, 83, 9, 0.78)',
        borderColor: 'rgba(180, 83, 9, 1)',
        borderWidth: 1.2
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '中國 3 月 PMI 的修復集中在工廠與訂單，服務需求與成本斜率同步分裂（資料來源：中國國家統計局）'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 70,
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

1-2 月硬資料把同一張圖再寫一次。規模以上工業增加值年增 **6.3%**，高技術製造業年增 **13.1%**；社會消費品零售總額年增 **2.8%**，固定資產投資年增 **1.8%**，房地產開發投資年減 **11.1%**。[中國國家統計局 1-2 月國民經濟](https://www.stats.gov.cn/english/PressRelease/202603/t20260316_1962783.html) 工業與高技術製造先走，終端需求與地產斜率則留在低位。3 月非製造業新訂單停在 **45.0**，服務業新訂單停在 **45.3**，這條線把內需題寫得很清楚。[中國國家統計局 3 月 PMI](https://www.stats.gov.cn/sj/zxfb/202603/t20260331_1962889.html)

成本層也在加速上桌。3 月中旬的 NBS 生產資料價格顯示，LPG 上升 **11.5%**，95 號汽油上升 **11.4%**，柴油上升 **10.1%**，聚乙烯上升 **10.0%**，聚丙烯上升 **9.9%**。[中國國家統計局生產資料價格](https://www.stats.gov.cn/english/PressRelease/202603/t20260323_1962823.html) 製造業原材料購進價格指數因此由 **50.6** 跳到 **63.9**，出廠價格指數也由 **45.8** 升到 **55.4**。[中國國家統計局 3 月 PMI](https://www.stats.gov.cn/sj/zxfb/202603/t20260331_1962889.html) 價格斜率明顯快於訂單斜率，毛利波動與庫存節奏因此成為 4 月的主題。

反方也有清楚的數據鏈。AP 引述 BNP Paribas 的 Jacqueline Rong 指出，實體 supply disruptions 仍在累積階段；Capital Economics 的 Zichun Huang 則認為，中國先承接了第一輪 energy shock，3 月資料顯示工廠活動維持韌性。[AP](https://apnews.com/article/china-manufacturing-economy-pmi-iran-war-1dece7eda196b93706091b7b52eef94a) IEA 同時把 2026 全球油需增幅下修到 **640 kb/d**，並把報告撰寫時的 Brent 寫在約 **92** 美元。[IEA](https://www.iea.org/reports/oil-market-report-march-2026) 這條反方讓今天的結論保持平衡：3 月修復先成立，4 月的成本與外需會決定修復寬度。

## 4 月 10 日、16 日與 30 日會把修復寬度寫清楚

如果 **2026-04-16** 的規模以上工業增加值續留 **6%** 上方，社會消費品零售總額回到 **4%** 上方，→ 3 月補庫會開始往終端需求擴散。

如果 **2026-04-30** 的中型與小型企業 PMI 都回到 **50** 上方，非製造業新訂單也回到 **47** 上方，→ 3 月修復會由大廠擴成更廣的景氣斜率。

如果 **2026-04-10** 的 PPI 月增續留正值，**2026-04-30** 的原材料購進價格指數再站上 **60**，服務新訂單又續留 **45** 附近，→ 價格傳導會先壓企業毛利，成本層會持續主導定價。

## 結語

> **核心判斷：** 中國 3 月 PMI 先修復工廠與補庫，內需與企業廣度把景氣斜率留在後段；4 月的真正考題由服務需求與成本傳導決定。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Non-manufacturing new orders + retail sales | 非製造業新訂單 `>=47.0`，且零售年增 `>=4.0%` 連 `2` 次官方發布 | 先看 `2026-04-16` 與 `2026-04-30`，再看 `2026-05-18` 與 `2026-05-31` | 「工廠先修復、內需留在後段」框架降權，需求擴散路徑升權 |
| Medium + small enterprise PMI | 中型與小型企業 PMI 同步 `>=50.0` 連 `2` 次發布 | 先看 `2026-04-30`，再看 `2026-05-31` | 「大廠補庫主導」框架降權，景氣廣度回升 |
| Raw material prices + Brent | 原材料購進價格指數 `<=55.0`，且 Brent `<85` 連 `10` 個交易日 | 先看 `2026-04-10`、`2026-04-30`，每日同步追蹤油價 | 成本層降溫，毛利與補庫壓力下降 |

後續最值得看的三個點很直接。第一個點是 **2026-04-10** 的 CPI / PPI，這份資料會把 3 月價格分項的傳導深度寫清楚。第二個點是 **2026-04-16** 的一季工業、零售與投資，這份資料會把工廠修復與終端需求的距離寫清楚。第三個點是 **2026-04-30** 的 4 月 PMI，這份資料會把中小企業與服務需求的接手力度寫清楚。

---

*資料來源：[中國國家統計局 3 月 PMI](https://www.stats.gov.cn/sj/zxfb/202603/t20260331_1962889.html)、[中國國家統計局 1-2 月國民經濟](https://www.stats.gov.cn/english/PressRelease/202603/t20260316_1962783.html)、[中國國家統計局生產資料價格](https://www.stats.gov.cn/english/PressRelease/202603/t20260323_1962823.html)、[中國國家統計局發布日曆](https://www.stats.gov.cn/english/PressRelease/ReleaseCalendar/202512/t20251226_1962154.html)、[IEA](https://www.iea.org/reports/oil-market-report-march-2026)、[AP](https://apnews.com/article/china-manufacturing-economy-pmi-iran-war-1dece7eda196b93706091b7b52eef94a)、[ING](https://think.ing.com/snaps/chinas-trade-growth-starts-2026-strong-with-biggest-gain-in-four-years-a)*
*市場與官方數據截至：2026-03-31（中國 PMI） / 2026-03-24（中國生產資料價格） / 2026-03-16（中國 1-2 月國民經濟） / 2026-03-12（IEA OMR） / 2026-03-10（ING 1-2 月外貿）*
*本文僅供參考，不構成投資建議。*
