---
layout: post
title: "102.29 / 12 / 3 已經排成一條線：封港把油價題改寫成海運保險稅"
date: 2026-04-14 12:08:00 +0800
categories: [macro]
tags: [macro, energy, geopolitics, inflation, asia]
macro_kind: short
description: "AP 把 4 月 13 日的布蘭特寫回 102.29 美元，EIA 把 3 月 Brent-WTI spread 寫成 12 美元，JMIC 把荷莫茲貨船通行寫成 3 艘 / 日。美國封鎖伊朗港口先把 shock 留在船流、保險與柴油，5 月 12 日的 EIA STEO 與下一份 JMIC 更新會回答它落在哪一層供給缺口。"
lang: zh-TW
---

## 102.29 美元回來了，138 艘船的常態還沒有回來

布蘭特在 `2026-04-13` 回到 **102.29** 美元，JMIC 最新交通評估仍把荷莫茲海峽的歷史平均日通行量寫成 **138 艘**。[AP](https://apnews.com/article/iran-oil-prices-4b0b4b1f6df389bf2e17f47e55e13119)、[JMIC](https://www.ukmto.org/-/media/ukmto/products/update-016---jmic-advisory-note-16_mar_2026_final.pdf?rev=41f524bfd5514b9482225524ff1500f9)

**美國封鎖伊朗港口之後，這一輪能源 shock 先重回全面缺油，還是先變成海運保險稅？**

這個框架把變數拆成船流、失產與終端燃料三張表。讀者只要盯住下一份 JMIC / UKMTO 船流更新、Brent 是否重新站上 **105** 美元、以及 **2026-05-12** 的 EIA STEO，就能分辨價格跳升是在重寫物流成本，還是在重寫全球供給缺口。[JMIC](https://www.ukmto.org/-/media/ukmto/products/update-016---jmic-advisory-note-16_mar_2026_final.pdf?rev=41f524bfd5514b9482225524ff1500f9)、[EIA STEO](https://www.eia.gov/outlooks/steo/report/petro_prod.php)

## 先被上修的是價差、船流與柴油

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 海運保險稅先回來 | EIA 把 Brent-WTI spread 由 `6` 寫到 `12`，JMIC 把荷莫茲貨船通行由歷史 `138` 壓到 `3`，MARAD 把區域威脅維持高檔 | 很高 |
| 全面供給缺口再擴大 | EIA 把 4 月 shut-ins 寫成 `9.1 mb/d`，並把 2Q26 Brent 高點留在 `115` | 高 |

AP 把封鎖範圍寫得很清楚。這次執法針對進出伊朗港口與沿岸區域的船隻，往返非伊朗港口的中立通行仍可經過荷莫茲海峽。[AP](https://apnews.com/article/iran-oil-prices-4b0b4b1f6df389bf2e17f47e55e13119) Taiwan News 引述 CENTCOM 也把同一條 legal scope 寫成中文版本。[Taiwan News](https://www.taiwannews.com.tw/zh/news/6339825) 這個細節把 headline 從「全面封海峽」收窄成「港口封鎖加高風險通行」，油價因此先重價在物流稅，全面斷流情境留在更後段的驗證層。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260414OilBlockadeSpread"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260414OilBlockadeSpread'), {
  type: 'bar',
  data: {
    labels: ['2026 年 2 月', '2026 年 3 月', 'EIA 2Q26 高點'],
    datasets: [{
      label: 'Brent-WTI 價差（美元 / 桶）',
      data: [6, 12, 15],
      backgroundColor: [
        'rgba(8, 145, 178, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(220, 38, 38, 0.78)'
      ],
      borderColor: [
        'rgba(8, 145, 178, 1)',
        'rgba(249, 115, 22, 1)',
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
        text: 'Brent-WTI 價差先把運輸瓶頸寫進去（資料來源：EIA 2026-04-07）'
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

EIA 在 `2026-04-07` 的文字比盤面更有用。EIA 直接把 Brent-WTI spread 在 3 月由 **6** 美元擴大到 **12** 美元，並把原因寫成荷莫茲 disruption 推高運輸成本、削弱跨市場 shipping capacity；EIA 同時寫出美國用 SPR release 與 Jones Act waiver 把 WTI 壓得比 Brent 更低。[EIA STEO](https://www.eia.gov/outlooks/steo/report/petro_prod.php) 這組數字說明封港先抬高的是把油從 A 點送到 B 點的成本，桶價只是外層表現。

JMIC 與 MARAD 把物流層再往下拆開。JMIC 在 `2026-03-16` 仍把荷莫茲歷史平均通行量寫成約 **138** 艘 / 日，把 `2026-03-15` 的觀測貨船通行寫成 **3** 艘 / 日，油輪通行甚至是 **0**；war-risk insurance premiums 也維持上升。[JMIC](https://www.ukmto.org/-/media/ukmto/products/update-016---jmic-advisory-note-16_mar_2026_final.pdf?rev=41f524bfd5514b9482225524ff1500f9) MARAD 則把導彈、武裝無人機、無人艇與強制登檢都列在同一份高風險 advisory 裡。[MARAD](https://www.maritime.dot.gov/msci/2026-004-persian-gulf-strait-hormuz-and-gulf-oman-iranian-attacks-commercial-vessels) 只要船流沒有回到可用區，保險與運價就會先把 shock 留在供應鏈。

全面缺油的風險仍然在第二張表。EIA 把 3 月 shut-ins 寫成 **7.5 mb/d**，4 月升到 **9.1 mb/d**，2Q26 的 Brent 高點留在 **115** 美元；retail diesel 高點也留在 **5.80 美元 / 加侖** 以上。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php) BOJ 又把油價連到 LNG、電力與瓦斯，提醒亞洲進口國的 second-round effect 會同步走向公用事業與企業成本。[BOJ](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf) 反方同樣完整。**ECB 總裁 Christine Lagarde** 在 `2026-03-25` 寫明：shock 若規模有限、時間短，通膨影響多留在能源本身。[ECB](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260325~ac2916a211.en.html) 現在最被數字支持的版本是「物流稅先回來，全面缺油風險仍在後面排隊」。

## 105 美元、40 艘船與 5 月 12 日會把答案寫清楚

如果下一份 JMIC / UKMTO 更新把荷莫茲觀測貨船通行拉回 **40** 艘 / 日以上，Brent 又在日線上留在 **95** 美元以下連續 **5** 個交易日，→ 封港對物流稅的推升會明顯降溫，shock 會更接近 headline noise。[JMIC](https://www.ukmto.org/-/media/ukmto/products/update-016---jmic-advisory-note-16_mar_2026_final.pdf?rev=41f524bfd5514b9482225524ff1500f9)、[AP](https://apnews.com/article/iran-oil-prices-4b0b4b1f6df389bf2e17f47e55e13119)

如果 Brent 重新站上 **105** 美元並連續 **5** 個交易日，`2026-05-12` 的 EIA STEO 又把 4 月後的 shut-ins 留在 **5 mb/d** 以上，→ 今天的物流稅框架就要升級成更廣的 physical shortage 框架。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)、[EIA STEO](https://www.eia.gov/outlooks/steo/report/petro_prod.php)

如果 `2026-05-12` 的 EIA 仍把 retail diesel 路徑留在 **5.50 美元 / 加侖** 上方，BOJ 與 ECB 後續文本也持續把 second-round effect 放在主文，→ 這波 shock 會由港口與保險走向更廣的價格傳導。[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)、[BOJ](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf)、[ECB](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260325~ac2916a211.en.html)

## 結語

> **核心判斷：** 封鎖伊朗港口先把能源 shock 寫成海運保險稅，非伊朗船流的恢復速度會決定它走向物流稅，或走向更廣的供給缺口。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 荷莫茲觀測貨船通行 + Brent | 觀測貨船通行 `>=40` 艘 / 日連續 `2` 份 JMIC / UKMTO 更新，且 Brent `<95` 連續 `5` 個交易日 | 觀察下一份 JMIC / UKMTO 更新至 `2026-05-12` EIA STEO | 海運保險稅框架需要降權，封港影響開始回到短期 headline 層 |
| Brent + EIA shut-ins | Brent `>105` 連續 `5` 個交易日，且 `2026-05-12` STEO 仍把後續 shut-ins 留在 `>5 mb/d` | 日度觀察至 `2026-05-12` EIA STEO | 今天的物流稅框架需要升級成更廣的供給缺口框架 |
| U.S. retail diesel path | `2026-05-12` STEO 仍把 retail diesel 留在 `>=5.50/gal`，且 2026 年均值續留 `>=4.80/gal` | 觀察 `2026-05-12` EIA STEO，並延伸到下一份月報 | shock 已由港口與保險走進更廣的終端成本傳導 |

後續最值得看的三個點如下。第一個點是下一份 JMIC / UKMTO 的船流更新，這張表會先回答商船有沒有開始回到荷莫茲的常態區。[JMIC](https://www.ukmto.org/-/media/ukmto/products/update-016---jmic-advisory-note-16_mar_2026_final.pdf?rev=41f524bfd5514b9482225524ff1500f9) 第二個點是 Brent 是否重新站上 **105** 美元，這條線會分辨物流稅與全面缺油的邊界。[AP](https://apnews.com/article/iran-oil-prices-4b0b4b1f6df389bf2e17f47e55e13119) 第三個點是 **2026-05-12** 的 EIA STEO，這份報告會把 spread、shut-ins 與 diesel path 一次寫進同一張表。[EIA STEO](https://www.eia.gov/outlooks/steo/report/petro_prod.php)

---

*資料來源：[AP](https://apnews.com/article/iran-oil-prices-4b0b4b1f6df389bf2e17f47e55e13119)、[Taiwan News](https://www.taiwannews.com.tw/zh/news/6339825)、[EIA STEO](https://www.eia.gov/outlooks/steo/report/petro_prod.php)、[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)、[MARAD advisory](https://www.maritime.dot.gov/msci/2026-004-persian-gulf-strait-hormuz-and-gulf-oman-iranian-attacks-commercial-vessels)、[JMIC Update 016](https://www.ukmto.org/-/media/ukmto/products/update-016---jmic-advisory-note-16_mar_2026_final.pdf?rev=41f524bfd5514b9482225524ff1500f9)、[BOJ summary](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf)、[ECB speech](https://www.ecb.europa.eu/press/key/date/2026/html/ecb.sp260325~ac2916a211.en.html)*
*市場與官方數據截至：2026-04-14（AP、Taiwan News） / 2026-04-07（EIA） / 2026-03-30（BOJ） / 2026-03-25（ECB） / 2026-03-16（JMIC）*
*本文僅供參考，不構成投資建議。*
