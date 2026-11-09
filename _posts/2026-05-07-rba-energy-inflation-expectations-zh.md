---
layout: post
title: "4.35% 回到舊高點：澳洲央行把油價衝擊改寫成通膨預期防線"
date: 2026-05-07 12:03:25 +0800
categories: [macro]
tags: [macro, inflation, rates, energy, australia]
macro_kind: short
description: "RBA 5 月 5 日把 cash rate target 升到 4.35%，ABS March CPI 年增 4.6%，RBA 又把 June 2026 CPI forecast 拉到 4.8%。這次升息的主線在通膨預期與二輪定價，油價只是第一層觸發器。"
lang: zh-TW
---

## 4.35% 的真正訊號

澳洲央行 (RBA) 在 `2026-05-05` 把 cash rate target 升到 **4.35%**，投票結果為 `8-1`；ABS 在 `2026-04-29` 公布 March CPI 年增 **4.6%**，高於 February 的 `3.7%`。[RBA decision](https://www.rba.gov.au/media-releases/2026/mr-26-12.html)、[ABS CPI](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release?os=v)

**RBA 連續第三次升息，代表澳洲需求仍過熱，還是能源衝擊已經進入國內定價？**

三層資料形成答案：headline CPI 的燃料衝擊、trimmed mean 的底層黏著、以及企業與家庭對未來價格的調整。`2026-05-21` 的 April Labour Force、`2026-05-27` 的 April CPI、`2026-06-16` 的下一次 RBA decision 會把這三層依序校準。[RBA home](https://www.rba.gov.au/)、[ABS Labour Force](https://www.abs.gov.au/media-centre/media-releases/unemployment-rate-remains-43-march)

## 油價推高 headline，預期決定政策反應

口徑聲明：RBA cash rate 是政策利率；ABS CPI 是 12 個月年增率與單月月增率；RBA forecast table 是 year-ended forecast；能源傳導分成 Brent 原油、澳洲 domestic fuel price、CPI basket 與 GDP effect。圖表只使用 RBA May Statement of Monetary Policy 的 forecast table。

| 核心錨點 | 式子 | 單位 | 口徑 |
|---|---:|---|---|
| May rate hike | `4.35 - 4.10 = 0.25` | percentage point | RBA cash rate target |
| June CPI forecast revision | `4.8 - 4.2 = +0.6` | percentage point | RBA May SMP vs February forecast |
| Headline-trimmed gap | `4.6 - 3.3 = 1.3` | percentage point | ABS March CPI annual rate vs trimmed mean annual rate |
| Fuel contribution share | `0.8 / 4.6 = 17.4%` | share | RBA estimate of fuel contribution to March headline CPI |

燃料資料先定位 headline CPI。ABS 把 March transport inflation 寫成年增 `8.9%`，automotive fuel 寫成年增 `24.2%`、月增 `32.8%`，RBA 則指出 higher fuel prices 對 March headline inflation 貢獻 `0.8 percentage points`。[ABS CPI](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release?os=v)、[RBA May SMP](https://www.rba.gov.au/publications/smp/2026/may/overview.html) 這組資料支持第一層判讀：headline CPI 的跳升先由燃料價格帶動。

底層通膨資料把決策推向二輪定價。ABS 的 March trimmed mean inflation 是 `3.3%`，RBA 的 March-quarter underlying inflation 是 `3.5%`，RBA 又把 June 2026 CPI forecast 從 `4.2%` 上修到 `4.8%`，把 December 2026 trimmed mean forecast 從 `3.2%` 上修到 `3.5%`。[ABS CPI](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release?os=v)、[RBA May SMP](https://www.rba.gov.au/publications/smp/2026/may/overview.html) 這組資料讓政策問題從油價本身轉向二輪定價。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260507RbaEnergy"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260507RbaEnergy'), {
  type: 'line',
  data: {
    labels: ['Dec 2025', 'Jun 2026', 'Dec 2026', 'Jun 2027', 'Dec 2027', 'Jun 2028'],
    datasets: [
      {
        label: 'CPI inflation, % y/y',
        data: [3.6, 4.8, 4.0, 2.4, 2.4, 2.5],
        borderColor: 'rgba(220, 38, 38, 1)',
        backgroundColor: 'rgba(220, 38, 38, 0.14)',
        borderWidth: 2,
        tension: 0.25
      },
      {
        label: 'Trimmed mean inflation, % y/y',
        data: [3.4, 3.8, 3.5, 3.1, 2.6, 2.5],
        borderColor: 'rgba(37, 99, 235, 1)',
        backgroundColor: 'rgba(37, 99, 235, 0.14)',
        borderWidth: 2,
        tension: 0.25
      },
      {
        label: 'Unemployment rate, %',
        data: [4.3, 4.2, 4.3, 4.4, 4.6, 4.7],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.14)',
        borderWidth: 2,
        tension: 0.25
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'RBA May 2026 baseline forecasts: inflation stays high before unemployment rises (source: RBA)'
      }
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

澳洲的能源身分讓 GDP 與 CPI 走出兩條傳導線。RBA energy chapter 指出，domestic fuel price 上升 `10%` 對 headline inflation 的直接影響略高於 `0.3 percentage points`，間接 domestic cost effect 會讓 price level 在一到兩年內高出 `0.2-0.25%`；同一章也指出 oil 與 LNG prices 同升 `10%`、持續兩年，對 Australian GDP level 的模型影響低於 `0.1 percentage point`。[RBA energy chapter](https://www.rba.gov.au/publications/smp/2026/may/in-depth-the-impact-of-higher-global-energy-prices-on-the-australian-economy.html) 澳洲作為能源出口國吸收一部分 GDP 衝擊，家庭燃料、企業柴油、運輸與進口投入仍把價格壓力傳到 CPI。

全球資料支持這個框架。EIA 在 April STEO 把 Brent March average 寫成 `$103/b`，並預估 `2026Q2` peak `$115/b`；IEA April OMR 把 2026 oil demand 從上月預估成長 `730 kb/d` 改成收縮 `80 kb/d`，同時指出 oil exports loss 超過 `13 mb/d`。[EIA STEO](https://www.eia.gov/outlooks/steo/report/index.php?stream=top-stories)、[IEA OMR](https://www.iea.org/reports/oil-market-report-april-2026) IMF 把 `25-30%` 全球石油與 `20%` LNG 通過 Hormuz 寫成跨區域傳導主軸。[IMF](https://www.imf.org/en/blogs/articles/2026/03/30/how-the-war-in-the-middle-east-is-affecting-energy-trade-and-finance)

反方也很清楚。CBA 的 Belinda Allen 認為，RBA 這次升息給政策帶來 pause room，CBA base case 維持 `2026` 餘下時間利率不變；Westpac 的 Luci Ellis 認為 further hikes this year 仍可能發生，但 June timing 已經更平衡。[CBA](https://www.commbank.com.au/articles/newsroom/2026/05/rba-may-interest-rates-cba-economists-analysis.html)、[Westpac](https://www.westpaciq.com.au/economics/2026/05/rba-decision-05-may-2026/) Bank of England 在 `2026-04-29` 以 `8-1` 維持 Bank Rate `3.75%`，並把勞動市場鬆動寫成抑制二輪效應的力量；這說明供給衝擊遇到鬆動勞動市場時，央行反應可以更偏觀察。[BoE April MPR](https://www.bankofengland.co.uk/monetary-policy-report/2026/april-2026)

## 三個資料會決定 6 月語氣

如果 `2026-05-27` 的 April CPI 把 headline CPI 留在 `4.3%` 以上，且 trimmed mean 連續第二個月高於 `3.3%`，→ RBA 會把燃料衝擊讀成更廣的價格黏著，June statement 會維持 inflation expectations 防線。[ABS CPI](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release?os=v)、[RBA home](https://www.rba.gov.au/)

如果 `2026-05-21` 的 April Labour Force 把 unemployment rate 推到 `4.5%` 以上，且 hours worked 月變動低於 `0%`，→ 勞動市場鬆動會降低二輪工資與服務價格傳導，CBA 的 pause framework 會取得更高權重。[ABS Labour Force](https://www.abs.gov.au/media-centre/media-releases/unemployment-rate-remains-43-march)、[CBA](https://www.commbank.com.au/articles/newsroom/2026/05/rba-may-interest-rates-cba-economists-analysis.html)

如果 `2026-05-12` 的 EIA STEO 把 `2026Q2` Brent peak 續留 `$110/b` 以上，且 IEA `2026-05-13` OMR 仍顯示 Hormuz flow 恢復緩慢，→ 澳洲的 fuel、freight 與 import-cost pass-through 會延長，RBA 對 short-term inflation expectations 的敏感度會維持高位。[EIA STEO](https://www.eia.gov/outlooks/steo/report/index.php?stream=top-stories)、[IEA OMR](https://www.iea.org/reports/oil-market-report-april-2026)

## 結語

> **核心判斷：** RBA 的 `4.35%` 升息防的是通膨預期與二輪定價；油價是第一層觸發器，企業與家庭的價格行為才是政策反應的主軸。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| CPI + trimmed mean | Headline CPI 連續 `2` 次 `<=3.8%`，且 trimmed mean 連續 `2` 次 `<=3.2%` | 觀察 `2026-05-27` April CPI 與 `2026-06-24` May CPI | 能源衝擊停留在 headline 層，通膨預期防線權重下降 |
| Labour slack | Unemployment rate 連續 `2` 次 `>=4.5%`，且 hours worked 連續 `2` 次 `<=0%` | 觀察 `2026-05-21` April Labour Force 與 `2026-06-18` May Labour Force | 二輪工資與服務價格傳導降溫，policy hold framework 取得更高權重 |
| Brent + Hormuz flow | EIA Brent `2026Q2` peak forecast 連續 `2` 份 `>=110/b`，且 IEA 連續 `2` 份報告指出 Hormuz flow 恢復緩慢 | 觀察 `2026-05-12` EIA STEO、`2026-05-13` IEA OMR 與 6 月月報 | 燃料、運輸與進口成本傳導延長，RBA 需要維持 inflation expectations 防線 |

後續觀察集中在三個變數。April CPI 的 headline 與 trimmed mean gap 會回答燃料衝擊是否仍停在 headline。Unemployment rate 與 hours worked 會回答澳洲勞動市場是否提供 BoE 式的緩衝。EIA 與 IEA 對 Brent、Hormuz flow、demand destruction 的更新會回答供給衝擊的持續時間。[ABS CPI](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release?os=v)、[ABS Labour Force](https://www.abs.gov.au/media-centre/media-releases/unemployment-rate-remains-43-march)、[EIA STEO](https://www.eia.gov/outlooks/steo/report/index.php?stream=top-stories)、[IEA OMR](https://www.iea.org/reports/oil-market-report-april-2026)

---

*資料來源：[RBA decision](https://www.rba.gov.au/media-releases/2026/mr-26-12.html)、[RBA May SMP](https://www.rba.gov.au/publications/smp/2026/may/overview.html)、[RBA energy chapter](https://www.rba.gov.au/publications/smp/2026/may/in-depth-the-impact-of-higher-global-energy-prices-on-the-australian-economy.html)、[ABS CPI](https://www.abs.gov.au/statistics/economy/price-indexes-and-inflation/consumer-price-index-australia/latest-release?os=v)、[ABS Labour Force](https://www.abs.gov.au/media-centre/media-releases/unemployment-rate-remains-43-march)、[EIA STEO](https://www.eia.gov/outlooks/steo/report/index.php?stream=top-stories)、[IEA OMR](https://www.iea.org/reports/oil-market-report-april-2026)、[IMF](https://www.imf.org/en/blogs/articles/2026/03/30/how-the-war-in-the-middle-east-is-affecting-energy-trade-and-finance)、[BoE April MPR](https://www.bankofengland.co.uk/monetary-policy-report/2026/april-2026)、[CBA](https://www.commbank.com.au/articles/newsroom/2026/05/rba-may-interest-rates-cba-economists-analysis.html)、[Westpac](https://www.westpaciq.com.au/economics/2026/05/rba-decision-05-may-2026/)*
*市場數據截至：2026-05-05（RBA、EIA、IEA、IMF） / 官方澳洲 CPI 截至：2026-04-29（ABS March CPI） / 官方澳洲勞動資料截至：2026-04-16（ABS March Labour Force）*
*本文僅供參考，不構成投資建議。*
