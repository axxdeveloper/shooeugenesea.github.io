---
layout: post
title: "戰爭升級下的反直覺同跌：為什麼股市與黃金一起回檔？"
date: 2026-03-03 22:40:00 +0800
categories: [macro]
tags: [macro, geopolitics, gold, energy, bonds]
macro_kind: long
description: "3 月 3 日歐洲 STOXX 600 下跌 3.3%，現貨金同日下跌 5.6%。當油價與美元同步走高、降息定價由 59 bps 收斂到 46 bps，市場主軸從避險敘事切向通膨與現金偏好。"
lang: zh-TW
---

## 同一場戰爭，為何股市與黃金一起跌？

3 月 3 日，歐洲 STOXX 600 盤中下跌 3.3%，現貨金同日下跌 5.6%。戰爭新聞升級，但「風險資產跌、黃金漲」這個常見關係這次沒有出現。[Reuters](https://www.reuters.com/world/middle-east/netanyahu-says-us-israel-war-iran-not-going-take-years-2026-03-03/)、[Reuters](https://www.reuters.com/world/india/gold-extends-gains-middle-east-war-boosts-safe-haven-demand-2026-03-03/)

核心問題是：這次股金同跌，到底是短線流動性擠壓，還是能源衝擊把市場推進「通膨再定價」區間？

這篇用一個可重複框架來拆：先看能源供應衝擊，再看利率與美元，最後看資產部位調整。最關鍵的門檻是「10 年期美債殖利率與美元指數是否同時連續走高」，下一個可驗證時間點是 2026 年 3 月 11 日公布的美國 2 月 CPI。[BLS](https://www.bls.gov/schedule/news_release/cpi.htm)

## 避險失靈的三層傳導：先是油價，再是利率，最後才是黃金

第一層是能源供應風險本身。3 月 3 日 Reuters 報導顯示，Brent 當日再漲約 6% 並一度站上 82 美元，自上週五以來累計漲幅超過 15%。[Reuters](https://www.reuters.com/business/energy/global-energy-costs-soar-iran-crisis-disrupts-shipping-oil-gas-production-2026-03-03/) 這種衝擊之所以直接改變資產定價，不在新聞標題，而在運輸通道算術：美國 EIA 估算 2023 年荷莫茲海峽日均通行量為 20.9 百萬桶，約占全球石油液體消費 20%；同時可繞行的有效閒置管線能力約 3.5 百萬桶/日，緩衝墊明顯不足。[EIA Chokepoints](https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints)、[EIA Today in Energy](https://www.eia.gov/todayinenergy/detail.php?id=61002)

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>降息定價（bps）</strong>：期貨市場對未來降息幅度的隱含預估，1 bps = 0.01 個百分點。
</aside>

第二層是利率再定價。美國財政部資料顯示，10 年期殖利率由 2 月 27 日的 3.97% 升到 3 月 2 日的 4.05%，2 年期由 3.38% 升到 3.47%。[U.S. Treasury Feb](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202602)、[U.S. Treasury Mar](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?type=daily_treasury_yield_curve&field_tdr_date_value_month=202603) 同時，Reuters 外匯線顯示聯邦基金期貨隱含全年降息由 59 bps 收斂到 46 bps，且「完整一次降息」時點由 7 月延後到 9 月，這對無息資產黃金本身就是逆風。[Reuters](https://www.reuters.com/world/asia-pacific/yen-euro-under-pressure-middle-east-conflict-stokes-energy-concerns-2026-03-03/)

第三層才是「為何黃金也跌」。3 月 3 日美元指數上漲 1.2% 至 99.649，歐元下跌 1.2%；同一天現貨金下跌 5.6%。[Reuters](https://www.reuters.com/world/asia-pacific/yen-euro-under-pressure-middle-east-conflict-stokes-energy-concerns-2026-03-03/)、[Reuters](https://www.reuters.com/world/india/gold-extends-gains-middle-east-war-boosts-safe-haven-demand-2026-03-03/) 這組合反映的是「先買現金，再談避險」。Cboe VIX 從 2 月 27 日收盤 19.86 升到 3 月 2 日 21.44，顯示波動升溫但尚未進入全面恐慌區間；在這種階段，先前漲多部位更容易被了結以換取流動性。[Cboe VIX CSV](https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv)  
反方觀點也存在：**Invesco strategists** 在同一篇 Reuters 報導中提醒，美元急漲可能是短期反應；若能源衝擊沒有持續，黃金與美元的同向關係不必然延續。[Reuters](https://www.reuters.com/world/asia-pacific/yen-euro-under-pressure-middle-east-conflict-stokes-energy-concerns-2026-03-03/)

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260303WarGold"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260303WarGold'), {
  type: 'bar',
  data: {
    labels: ['S&P 500(開盤)', 'STOXX 600', 'KOSPI', '現貨金', 'Brent 原油'],
    datasets: [{
      label: '單日變動(%)',
      data: [-2.2, -3.3, -7.0, -5.6, 6.0],
      backgroundColor: [
        'rgba(239,68,68,0.75)',
        'rgba(239,68,68,0.75)',
        'rgba(239,68,68,0.75)',
        'rgba(239,68,68,0.75)',
        'rgba(34,197,94,0.75)'
      ],
      borderColor: [
        'rgba(239,68,68,1)',
        'rgba(239,68,68,1)',
        'rgba(239,68,68,1)',
        'rgba(239,68,68,1)',
        'rgba(34,197,94,1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '戰爭衝擊下的跨資產變動（資料來源：Reuters，2026-03-03）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: { callback: function(value) { return value + '%'; } }
      }
    }
  }
});
</script>

目前資料最支持「通膨再定價 + 現金偏好」的組合，而非全面流動性崩潰：油價與天然氣先上行，利率與美元跟進，黃金短線被迫和風險資產一起承壓。

## 分水嶺

如果 Brent 回到 75 美元以下並連續 3 個交易日、同時 10 年期美債殖利率回落到 4.0% 以下，→ 這次事件較接近「供應驚嚇脈衝」，股金同跌框架需要降權。

如果美元指數升破 100 且連續 3 個交易日，10 年期殖利率維持 4.20% 上方，→ 市場主軸會維持在「高能源成本 + 延後降息」，黃金與成長股會同時對折現率上修更敏感。

如果 VIX 升破 30 且連續 2 個交易日，並出現美債長端單週下行超過 15 bps，→ 市場可能從通膨再定價切換為純避險模式，黃金與公債的傳統負相關鏈條會重新主導。

對台灣讀者而言，這組框架指向的重點不是戰區距離，而是全球折現率：當油氣衝擊把美元與長端利率一起推高，0050 的權值股評價會先受壓，之後才是基本面數據驗證。

## 結語

> **核心判斷：** 戰爭不一定先推升黃金；當油價先把通膨與利率預期往上推、美元又同步轉強時，市場會先買流動性而不是買避險敘事。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 美國 10Y 殖利率 + 美元指數 | 10Y > 4.20% 且 DXY > 100，連續 3 個交易日 | 即日起至 2026-03-11（美國 2 月 CPI） | 「通膨再定價主導」框架成立，黃金需先視為利率敏感資產 |
| Brent + 荷莫茲通行狀態 | Brent < 75 美元連續 3 日，且主要航線恢復常態通行 | 2026-03-03 至 2026-03-14（兩週航運觀測） | 需下修能源供應衝擊假設，股金同跌可視為事件型噪音 |
| VIX + S&P 500 | VIX > 30 連續 2 日，且 S&P 500 單日跌幅再度超過 3% | 每日收盤檢查；下一次就業報告 2026-04-03 前 | 市場可能轉入全面去風險，需要改用流動性壓力框架 |

接下來先看三個變數：第一，荷莫茲實際通行量與戰爭險保費是否續升；第二，聯邦基金期貨隱含降息幅度是否由 46 bps 續降；第三，10 年期美債殖利率與美元指數是否持續同向上行。

---

*資料來源：[Reuters 全球市場](https://www.reuters.com/business/finance/global-markets-view-usa-2026-03-03/)、[Reuters 戰事與股市](https://www.reuters.com/world/middle-east/netanyahu-says-us-israel-war-iran-not-going-take-years-2026-03-03/)、[Reuters 黃金](https://www.reuters.com/world/india/gold-extends-gains-middle-east-war-boosts-safe-haven-demand-2026-03-03/)、[Reuters 能源](https://www.reuters.com/business/energy/global-energy-costs-soar-iran-crisis-disrupts-shipping-oil-gas-production-2026-03-03/)、[Reuters 外匯](https://www.reuters.com/world/asia-pacific/yen-euro-under-pressure-middle-east-conflict-stokes-energy-concerns-2026-03-03/)、[U.S. Treasury Yield Curve](https://home.treasury.gov/policy-issues/financing-the-government/interest-rate-statistics)、[Cboe VIX 歷史資料](https://cdn.cboe.com/api/global/us_indices/daily_prices/VIX_History.csv)、[EIA 世界油運 chokepoints](https://www.eia.gov/international/analysis/special-topics/World_Oil_Transit_Chokepoints)、[BLS CPI 行程](https://www.bls.gov/schedule/news_release/cpi.htm)、[Fed 2026-01-28 FOMC](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)*
*市場數據截至：2026-03-03*
*本文僅供參考，不構成投資建議。*
