---
layout: post
title: "94.74 美元先回來，4.30 美元汽油仍留著：停火先降現貨，第二季能源底稿續留"
date: 2026-04-08 12:40:00 +0800
categories: [macro]
tags: [macro, energy, geopolitics, inflation, bonds]
macro_kind: short
description: "美伊接受兩週停火後，Brent 跌到 94.74 美元，S&P 500 期貨跳升 2.3%。EIA 4 月 7 日仍把第二季布蘭特高點放在 115 美元，市場先降的是現貨與航運恐慌，月均價與燃料傳導仍要等船流與 5 月 12 日 STEO 驗證。"
lang: zh-TW
---

## 94.74 美元先跌下來，115 美元仍留在官方底稿裡

美伊接受兩週停火後，Brent 先跌到 **94.74 美元**，S&P 500 期貨同步跳升 **2.3%**。[AP](https://apnews.com/article/financial-markets-iran-oil-bcd3342cd0b4e60ebedc1e81db08f465)

**Brent 掉回 95 美元附近時，第二季的通膨與運輸成本會一起回落，還是月均價與船流仍會把壓力留在桌上？**

這個框架把變數拆成現貨、月均價與船流三層。讀者只要盯住荷莫茲船流、零售柴油，以及 **2026-05-12** 的下一份 EIA STEO，就能判斷這次回落會不會落進第二季數據。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)、[EIA STEO](https://www.eia.gov/outlooks/steo/)

## 94.74 美元先反映停火，4.30 美元汽油仍寫在第二季

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 盤面先回應停火與 Hormuz reopening | Brent `94.74`、WTI `96.83`，Nikkei `+4.8%`、Kospi `+5.6%`、S&P 500 期貨 `+2.3%` | 很高 |
| 月均價與燃料傳導仍留高位 | EIA 把 3 月 Brent 平均價寫成 `103`、2Q26 高點寫成 `115`，4 月汽油高點接近 `4.30/gal`、柴油高點高於 `5.80/gal` | 很高 |
| 停火後的真正驗證點在船流、保險與庫存 | IEA 把 Hormuz 流量由約 `20 mb/d` 壓到幾近停滯，並把 shipping protection 寫成恢復主條件 | 高 |

AP 把第一輪情緒反應寫得很完整。油價急跌、亞洲股市急彈，代表市場先把前端戰時折價拿掉。這條線會最快反映在 futures、股指與風險偏好，速度會明顯快過月度能源價格與實體運輸成本。[AP](https://apnews.com/article/financial-markets-iran-oil-bcd3342cd0b4e60ebedc1e81db08f465)

EIA 的 `2026-04-07` 底稿把另一層現實留了下來。EIA 估計海灣國家 crude shut-ins 在 3 月是 **7.5 mb/d**，4 月升到 **9.1 mb/d**，5 月在衝突不延續的假設下才回到 **6.7 mb/d**；同一份檔案把 3 月 Brent 平均價寫成 **103**，把 2Q26 高點寫成 **115**，同時把 4 月零售汽油高點寫在接近 **4.30 美元 / 加侖**、柴油高點寫在高於 **5.80 美元 / 加侖**。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php) 停火後的 **94.74** 只比 EIA 的 3 月均價低約 **8%**，月均價底稿仍留在第二季裡。

<div style="max-width: 660px; margin: 2em auto;">
  <canvas id="macroChart20260408CeasefireOilFloor"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260408CeasefireOilFloor'), {
  type: 'bar',
  data: {
    labels: ['停火後 Brent 現貨', 'EIA 3 月 Brent 均價', 'EIA 2026 年均 Brent', 'EIA 2Q26 Brent 高點'],
    datasets: [{
      label: '美元 / 桶',
      data: [94.74, 103, 96, 115],
      backgroundColor: [
        'rgba(8, 145, 178, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(59, 130, 246, 0.78)',
        'rgba(220, 38, 38, 0.78)'
      ],
      borderColor: [
        'rgba(8, 145, 178, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(59, 130, 246, 1)',
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
        text: '停火先壓現貨，官方第二季底稿仍高（資料來源：AP、EIA）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) { return '$' + value; }
        }
      }
    }
  }
});
</script>

IEA 把 physical market 的限制寫得更直白。Hormuz 流量由約 **20 mb/d** 掉到幾近停滯，至少 **10 mb/d** 產量被迫關停，`400 mb` 緊急儲油釋出才剛接手緩衝；IEA 又把 shipping protection 與 insurance mechanism 寫成流量恢復主條件。[IEA OMR March 2026](https://www.iea.org/reports/oil-market-report-march-2026) 停火因此先打開 headline，船流與保險才會決定現貨回落能不能走進月均價。

反方同樣成立，而且論點完整。**Christine Lagarde** 在 `2026-03-25` 直接寫出：如果能源 shock 的規模有限、時間短，傳導會主要停在 energy component；當前歐洲的總體環境也比 2022 年更有利於控制 pass-through。[ECB speech](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260325~ac2916a211.en.html) 這條反方讓今天的判斷維持克制。台灣央行在 `2026-03-19` 也把中東戰事列為金融市場波動來源，同時把今年 CPI 與核心 CPI 預測分別放在 **1.80%** 與 **1.75%**。[CBC press release](https://www.cbc.gov.tw/tw/cp-302-190951-367ba-1.html) 停火若把油價與船流一併拉回，亞洲進口國會先感受到風險偏好修復；船流若卡住，進口成本仍會晚一步回到數據裡。

## 船流、柴油與 5 月 12 日 STEO 會決定這次回落的厚度

如果 **Brent 續留 95 美元以下 10 個交易日**，同時 **2026-05-12** 的 EIA STEO 把 2Q26 Brent 路徑下修到 **100 美元以下**，→ 停火會由現貨價格延伸到月均價，第二季能源底稿會明顯降溫。[EIA STEO](https://www.eia.gov/outlooks/steo/)

如果 **下一份 EIA 或 IEA 月報仍把海灣 shut-ins 留在 5 mb/d 以上**，同時 **Brent 再站回 105 美元並連續 5 個交易日**，→ 這波停火會被市場重讀成短暫喘息，第二季通膨底稿會續留高位。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)、[IEA OMR March 2026](https://www.iea.org/reports/oil-market-report-march-2026)

如果 **2026-05-12** 的 EIA 仍把 retail gasoline 年均價留在 **3.70 美元 / 加侖以上**，柴油年均價留在 **4.80 美元 / 加侖以上**，→ 停火對家戶與運輸端的降壓速度會慢過盤面反應，能源 shock 會繼續留在第二季的實體成本裡。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)

## 結語

> **核心判斷：** 兩週停火先把能源 shock 由現貨 panic 拉回月均價與船流題；第二季能源底稿的改寫速度會慢過盤面反應。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Brent + next STEO | Brent `<95` 連續 `10` 個交易日，且 `2026-05-12` STEO 把 2Q26 Brent 路徑下修到 `<100` | 觀察即日起至 `2026-05-12` EIA STEO | 「第二季能源底稿續留」框架降權，現貨回落開始進入月均價 |
| Gulf shut-ins + Brent | 下一份 EIA / IEA 仍把 shut-ins 留在 `>5 mb/d`，且 Brent `>105` 連續 `5` 個交易日 | 觀察即日起至下一份 EIA / IEA 月報，最近官方節點為 `2026-05-12` EIA STEO | 停火被重讀成短暫喘息，能源 shock 續留第二季主線 |
| Retail fuel path | `2026-05-12` STEO 仍把 gasoline 年均價留在 `>=3.70/gal`，diesel 年均價留在 `>=4.80/gal` | 觀察 `2026-05-12` EIA STEO，並延伸到下一輪月報 | 盤面修復已成立，家戶與運輸端的成本降溫仍慢於盤面 |

後續最值得看的三個點如下。第一個點是荷莫茲船流與保險恢復速度，這會直接回答停火能不能變成 physical normalization。[IEA OMR March 2026](https://www.iea.org/reports/oil-market-report-march-2026) 第二個點是 **2026-05-12** 的 EIA STEO，這份報告會把 `94.74` 的現貨回落翻成新的月均價，或把 `115` 的第二季高點續留。[EIA STEO](https://www.eia.gov/outlooks/steo/) 第三個點是零售柴油路徑，這條線會最早把盤面回落傳到運輸與供應鏈成本。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)

---

*資料來源：[AP](https://apnews.com/article/financial-markets-iran-oil-bcd3342cd0b4e60ebedc1e81db08f465)、[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)、[EIA STEO](https://www.eia.gov/outlooks/steo/)、[IEA OMR March 2026](https://www.iea.org/reports/oil-market-report-march-2026)、[ECB speech](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260325~ac2916a211.en.html)、[CBC press release](https://www.cbc.gov.tw/tw/cp-302-190951-367ba-1.html)*
*市場與官方數據截至：2026-04-08（AP 盤面反應） / 2026-04-07（EIA） / 2026-03-25（ECB） / 2026-03-20（CBC） / 2026-03-12（IEA）*
*本文僅供參考，不構成投資建議。*
