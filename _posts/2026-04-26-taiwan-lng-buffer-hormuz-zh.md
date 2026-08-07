---
layout: post
title: "20% LNG 被抽走後，台灣能源風險落在 11 天與 47.3%"
date: 2026-04-26 12:03:15 +0800
categories: [macro]
tags: [macro, energy, taiwan, lng, geopolitics]
macro_kind: short
description: "IEA 4 月 24 日指出，荷莫茲衝擊移除接近全球 LNG 供給的 20%，並可能讓 2026-2030 累積 LNG 供給少約 120 bcm。台灣 2024 年發電結構中天然氣占 47.3%，天然氣安全存量規範目前為 11 天、2027 年提高到 14 天。"
lang: zh-TW
---

## 20% LNG 供給被抽走後，台灣先看 11 天

IEA 在 2026-04-24 把荷莫茲衝擊寫進天然氣市場：接近全球 LNG 供給的 **20%** 從市場移除，台灣經濟部同月把天然氣安全存量規範寫成 **11 天**。[IEA Gas Market Report](https://www.iea.org/reports/gas-market-report-q2-2026)、[經濟部能源署](https://www.moea.gov.tw/MNS/english/news/News.aspx?kind=6&menu_id=176&news_id=122394)

**IEA 把 LNG 缺口寫成 20% 時，台灣能源風險是眼前供應斷點，還是 2027 前的庫存與合約彈性？**

這個判斷線放在三個數字：全球 LNG 供給缺口、台灣 11 天安全存量、台電系統 **47.3%** 的天然氣發電占比。5 月的 EIA STEO、IEA 後續油氣更新、以及經濟部對 7 月後船期的說明，會把這條線從壓力測試推向實際調度結果。

## 20%、11 天與 47.3% 把風險分成三層

<aside style="float: right; width: 240px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>LNG</strong>：液化天然氣，把天然氣冷卻成液態後用船運輸。<br>
<strong>bcm</strong>：billion cubic meters，十億立方公尺。
</aside>

第一層是全球供給。IEA 指出，荷莫茲海峽對 LNG 船運的實質封閉移除接近全球供給的 **20%**，3 月全球 LNG 產量年減 **8%**，卡達與區域液化設施受損使 2026-2030 累積 LNG 供給少約 **120 bcm**。[IEA Gas press release](https://www.iea.org/news/middle-east-crisis-disrupts-international-natural-gas-markets-and-delays-global-lng-supply-wave) 這代表 LNG 衝擊已經從短期船運問題，推進到中期供應波。

第二層是台灣調度。經濟部能源署在 2026-04-15 表示，4-5 月氣源已完成調度，6 月氣源接近完成，7 月以後貨源已經展開安排；天然氣安全存量規範目前為 **11 天**，2027 年起提高到 **14 天**。[經濟部能源署](https://www.moea.gov.tw/MNS/english/news/News.aspx?kind=6&menu_id=176&news_id=122394) 台電 2024 年發電結構中，天然氣占 **47.3%**，2030 目標為 **50%**。[台電永續發展計畫](https://service.taipower.com.tw/csr/en/sustainability/development-plan)

第三層是價格傳導。台灣央行 2026Q1 決議把中東衝突、國際油價與商品價格放進通膨風險，並把 2026 年 CPI 與 core CPI 預測上修至 **1.80%** 與 **1.75%**。[台灣央行](https://www.cbc.gov.tw/en/cp-448-190973-c2e5d-2.html) 美國 3 月 CPI 已把能源年增寫成 **12.5%**，這說明供給 shock 會先走進 headline，再透過政策穩定機制與企業成本吸收能力決定本地傳導深度。[BLS CPI](https://www.bls.gov/news.release/archives/cpi_04102026.htm)

三個口徑分別是全球 LNG 供給占比、IEA 月度產量年增率、台灣發電結構占比。圖表採百分比指標比較，每個標籤直接標示分母。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260426TaiwanLng"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260426TaiwanLng'), {
  type: 'bar',
  data: {
    labels: ['全球 LNG 供給移除', '全球 LNG 產量變化', '歐洲天然氣需求變化', '台灣天然氣發電占比'],
    datasets: [{
      label: '百分比指標 (%)',
      data: [20, -8, -4, 47.3],
      backgroundColor: [
        'rgba(220, 38, 38, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(37, 99, 235, 0.78)',
        'rgba(16, 185, 129, 0.78)'
      ],
      borderColor: [
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(37, 99, 235, 1)',
        'rgba(16, 185, 129, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'LNG 供給衝擊與台灣天然氣曝險（資料來源：IEA 2026-04-24、台電）'
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
|---|---:|---|
| 14 - 11 = 3 | 天 | 台灣天然氣安全存量規範從目前 11 天提高到 2027 年 14 天 |
| 50.0 - 47.3 = 2.7 | 百分點 | 台電 2030 天然氣發電占比目標與 2024 實績的距離 |
| 20% 全球 LNG 供給移除 | 占比 | IEA 對荷莫茲 LNG 船運衝擊的全球供給口徑 |

反方也很清楚。經濟部能源署列出的現況是供電與供氣維持正常，4-5 月氣源完成調度，6 月接近完成，7 月以後船期已啟動。[經濟部能源署](https://www.moea.gov.tw/MNS/english/news/News.aspx?kind=6&menu_id=176&news_id=122394) KKR 的 Henry H. McVey 團隊則把能源衝擊定位為 headline inflation 與 delayed easing，並把 Fed 立即升息的路徑放在較低位置。[KKR](https://www.kkr.com/insights/flash-macro-markets-update-april-2026) 這兩個反方把判斷留在庫存與船期驗證。

## 5 月到夏季會把壓力放進價格或緩衝

如果 IEA 與 EIA 在 5 月更新中顯示 LNG 船運與油品裝載量持續恢復，且經濟部確認 7-8 月 LNG 船期完成非荷莫茲替代安排，→ 台灣風險會留在調度與成本管理，供電現值維持穩定框架。[EIA STEO](https://www.eia.gov/outlooks/steo/report/global_oil.php)、[經濟部能源署](https://www.moea.gov.tw/MNS/english/news/News.aspx?kind=6&menu_id=176&news_id=122394)

如果 IEA 後續報告顯示全球 LNG 產量年減維持 **5%** 以上，亞洲燃料替代與節能措施延續到 6 月，→ 台灣會承受更高的現貨採購與電價穩定成本，能源衝擊會先走進企業成本與政府穩定機制。[IEA Gas Market Report](https://www.iea.org/reports/gas-market-report-q2-2026)、[台灣央行](https://www.cbc.gov.tw/en/cp-448-190973-c2e5d-2.html)

如果台灣天然氣安全存量連續 **2** 次官方更新貼近 11 天法定線，且 7 月後船期安排延後，→ 2027 年 14 天規範會提前變成政策壓力測試，台灣能源框架需要從價格吸收轉向庫存安全。[經濟部能源署](https://www.moea.gov.tw/MNS/english/news/News.aspx?kind=6&menu_id=176&news_id=122394)

## 結語

> **核心判斷：** LNG 衝擊對台灣先形成庫存天數與合約彈性的壓力；供電現值穩定，價格與調度緩衝才是可驗證的第一層。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Global LNG disruption | IEA 5-6 月更新連續 `2` 次顯示 LNG 供給移除降到 `<5%` | 觀察 2026-05 至 2026-06 的 IEA 油氣更新 | 全球供給 shock 會降級為短期船運重排，台灣庫存壓力明顯降溫 |
| Taiwan LNG safety stock | 官方更新連續 `2` 次顯示天然氣安全存量貼近 `11 天` 法定線 | 觀察 2026-05 至 2026-07 的經濟部與中油調度說明 | 台灣框架需從成本吸收轉向庫存安全與夏季尖峰調度 |
| Taiwan cargo scheduling | 經濟部連續 `2` 次確認 7-8 月 LNG 船期完成非荷莫茲替代安排 | 觀察 2026-05 至 2026-07 的官方調度更新 | 供電現值穩定框架升權，市場焦點回到燃料成本與電價穩定機制 |
| Taiwan CPI pass-through | 台灣 CPI 與 core CPI 連續 `2` 個月高於央行全年預測路徑 `1.80% / 1.75%` | 觀察主計總處 2026-05 至 2026-06 CPI | 能源 shock 已經穿透穩定機制，價格傳導需要重新評估 |

後續觀察三個變數。第一是 IEA 與 EIA 5 月更新中的 LNG 供給缺口與油品裝載量，這會直接驗證 20% 供給缺口是否縮小。第二是經濟部與中油對 7 月後 LNG 船期的安排，這會驗證 11 天安全存量是否足以穿越夏季尖峰。第三是台灣 CPI 與電價穩定機制，這會驗證能源 shock 留在財政與企業成本，或走進更廣的消費者價格。

---

*資料來源：[IEA Gas Market Report Q2-2026](https://www.iea.org/reports/gas-market-report-q2-2026)、[IEA Gas press release](https://www.iea.org/news/middle-east-crisis-disrupts-international-natural-gas-markets-and-delays-global-lng-supply-wave)、[IEA Oil Market Report April 2026](https://www.iea.org/reports/oil-market-report-april-2026)、[EIA STEO](https://www.eia.gov/outlooks/steo/report/global_oil.php)、[EIA press release](https://www.eia.gov/pressroom/releases/press586.php)、[經濟部能源署](https://www.moea.gov.tw/MNS/english/news/News.aspx?kind=6&menu_id=176&news_id=122394)、[台電永續發展計畫](https://service.taipower.com.tw/csr/en/sustainability/development-plan)、[台灣央行](https://www.cbc.gov.tw/en/cp-448-190973-c2e5d-2.html)、[BLS CPI](https://www.bls.gov/news.release/archives/cpi_04102026.htm)、[KKR](https://www.kkr.com/insights/flash-macro-markets-update-april-2026)*
*市場與官方數據截至：2026-04-24（IEA Gas） / 2026-04-15（經濟部能源署） / 2026-04-10（BLS CPI） / 2026-04-07（EIA STEO） / 2026-03-19（台灣央行）*
*本文僅供參考，不構成投資建議。*
