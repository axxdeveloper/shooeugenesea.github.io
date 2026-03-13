---
layout: post
title: "2.4% 不等於乾淨降溫：為什麼 10 年債反而站上 4.2%？"
date: 2026-03-13 12:25:00 +0800
categories: [macro]
tags: [macro, cpi, bonds, energy, employment]
macro_kind: short
description: "美國 2 月 CPI 年增 2.4%，但 10 年期美債殖利率在 3 月 11 日升到 4.21%。市場現在重估的不是已公布的 2 月通膨，而是 3 月油價與輸入成本會不會把降息門檻再往後推。"
lang: zh-TW
---

## 2.4% 的數字，為什麼壓不住 4.2% 的殖利率？

3 月 11 日，美國 2 月消費者物價指數 (CPI) 年增 2.4%，看起來仍在降溫；但同一天 10 年期美債殖利率升到 4.21%。同一份通膨數據，一邊讓 headline 顯得平靜，一邊卻把長債推向更高的折現率。[BLS CPI](https://www.bls.gov/news.release/cpi.nr0.htm)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)

核心問題是：2 月 CPI 真的代表通膨壓力在退，還是市場只是在提前交易 3 月油價衝擊？

更有用的框架，是把已公布的「2 月價格」和市場正在折現的「3 月能源與輸入成本」分開看。今晚台北時間 20:30 的 [BEA 個人所得與支出與 GDP 二讀](https://www.bea.gov/news/schedule) 和 3 月 18 日的 PPI，會幫我們判斷這次是事件溢價，還是通膨底部真的被往上抬。

## 舊通膨數據 vs 新能源風險：市場其實在看兩條不同時間線

先看已公布的 2 月資料本身。BLS 顯示，CPI 月增 **0.3%**、核心 CPI 月增 **0.2%**；能源月增 **0.6%**、食品月增 **0.4%**、居住月增 **0.2%**。[BLS CPI](https://www.bls.gov/news.release/cpi.nr0.htm) 如果只看這組數字，通膨沒有重新失控，但也稱不上「乾淨降溫」，因為黏著性項目還在。更重要的是，3 月 6 日就業報告同時顯示失業率 **4.4%**、平均時薪年增 **3.8%**、長期失業 **190 萬**；經濟是放慢，不是急煞車。[BLS CES](https://www.bls.gov/ces/news.htm)、[BLS Employment Situation PDF](https://www.bls.gov/news.release/pdf/empsit.pdf?pStoreID=hpepp)

真正把殖利率往上推的，是另一條更前瞻的時間線。Brent 原油從 2 月 27 日的 **71.32 美元** 升到 3 月 9 日的 **94.35 美元**，同一段時間 10 年債由 **3.97%** 升到 **4.12%**，3 月 11 日更到 **4.21%**；2 年債也由 **3.38%** 升到 **3.64%**。[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2) 而 3 月 5 日公布的 1 月進口物價顯示，美國整體進口價格月增 **0.2%**，扣除燃料後仍月增 **0.5%**，代表輸入成本的壓力不只來自汽油本身，而是更廣的成本傳導。[BLS Import Prices](https://www.bls.gov/news.release/ximpim.nr0.htm)

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260313YieldCurve"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260313YieldCurve'), {
  type: 'line',
  data: {
    labels: ['03-02', '03-03', '03-04', '03-05', '03-06', '03-09', '03-10', '03-11'],
    datasets: [
      {
        label: '美國 10Y 殖利率 (%)',
        data: [4.05, 4.06, 4.09, 4.13, 4.15, 4.12, 4.15, 4.21],
        borderColor: 'rgba(239,68,68,0.9)',
        backgroundColor: 'rgba(239,68,68,0.12)',
        tension: 0.25,
        fill: false,
        pointRadius: [3, 3, 3, 3, 3, 3, 3, 5],
        pointBackgroundColor: [
          'rgba(239,68,68,0.9)',
          'rgba(239,68,68,0.9)',
          'rgba(239,68,68,0.9)',
          'rgba(239,68,68,0.9)',
          'rgba(239,68,68,0.9)',
          'rgba(239,68,68,0.9)',
          'rgba(239,68,68,0.9)',
          'rgba(245,158,11,0.95)'
        ]
      },
      {
        label: '美國 2Y 殖利率 (%)',
        data: [3.47, 3.51, 3.54, 3.57, 3.56, 3.56, 3.57, 3.64],
        borderColor: 'rgba(59,130,246,0.9)',
        backgroundColor: 'rgba(59,130,246,0.12)',
        tension: 0.25,
        fill: false,
        pointRadius: 3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '3 月前半段美債殖利率持續上行（資料來源：FRED）'
      },
      legend: {
        position: 'bottom'
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

反方也不是沒有。Fed 理事 **Christopher Waller** 3 月 6 日表示，如果油價衝擊只維持幾週到兩個月，不太會變成持久通膨，也不一定需要改變貨幣政策；**BCA Research 的 Peter Berezin** 也主張，若油價大致停在目前區間，對美國經濟的傷害仍有限。[Reuters via Investing](https://www.investing.com/news/economy-news/feds-waller-dont-expect-current-oil-price-shock-to-have-persistent-impact-on-inflation--bbg-tv-4546968)、[BCA Research](https://www.bcaresearch.com/reports/peter-berezins-thought-day-oil-shocks-aint-what-they-once-were-02-03-2026/211871) 但日本銀行 3 月 2 日演說已提醒，較高油價與匯率變動會先推高輸入物價；ECB 2 月 19 日《Economic Bulletin》則顯示歐元區 1 月能源通膨仍為 **-4.1%**，代表主要通膨報表都還沒完整反映 3 月衝擊。[BOJ](https://www.boj.or.jp/en/about/press/koen_2026/data/ko260302a1.pdf)、[ECB](https://www.ecb.europa.eu/press/economic-bulletin/html/eb202601.en.html) 目前資料最支持的，不是「通膨重新失控」，而是市場先把能源尾端風險加回折現率。

## 分水嶺

如果 Brent 回到 85 美元以下並連續 3 個交易日、同時 10 年債回到 4.10% 以下 2 個交易日，→ 這次較像地緣事件溢價，2 月 CPI 仍可視為通膨主線。

如果 10 年債維持 4.20% 上方 2 個交易日，且 3 月 18 日的 PPI 沒有回到溫和區間，→ 市場會把這波油價 shock 從 headline 轉成對 Fed 的約束。

如果 4 月 3 日就業報告再讓失業率走高，同時 HY OAS 升破 3.30 並連續 3 個交易日擴大，→ 主線要從「通膨尾端」改成「成長 scare」，殖利率之後即使回落，原因也不再是通膨改善。

## 結語

> **核心判斷：** 眼前不是「通膨重新失控」的定論，而是市場先把 2.4% 的舊通膨，改用 3 月油價的新風險去折現。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Brent + US 10Y | Brent < 85 美元連 3 日，且 US 10Y < 4.10% 連 2 日 | 即日起至 2026-03-18（PPI） | 目前的殖利率上行可視為事件溢價，不必把 2 月 CPI 解讀成失效 |
| PCE / PPI 上游壓力 | 1 月 PCE 今晚未高於 3.0%，且 3/18 PPI 終端需求月增 ≤ 0.2% | 2026-03-13 至 2026-03-18 | 輸入成本沒有擴散到上游價格，能源 shock 仍偏短線 |
| 勞動市場 + HY OAS | 失業率 ≥ 4.6%，且 HY OAS > 3.30 連 3 日 | 即日起至 2026-04-03（就業報告） | 主框架需由「通膨尾端」改為「成長放緩主導」 |

接下來先看三個變數：今晚台北時間 20:30 的個人所得與支出是否讓核心 PCE 續降；Brent 能不能守在 90 美元附近；以及 3 月 17 至 18 日 FOMC 會不會把這波油價上行視為可忽略的短期雜訊。這三個點若同時偏熱，市場就不是在重看 2 月報表，而是在重寫 4 月之前的降息門檻。

---

*資料來源：[BLS 就業](https://www.bls.gov/ces/news.htm)、[BLS CPI](https://www.bls.gov/news.release/cpi.nr0.htm)、[BLS 進出口物價](https://www.bls.gov/news.release/ximpim.nr0.htm)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[BEA Schedule](https://www.bea.gov/news/schedule)、[BOJ Speech](https://www.boj.or.jp/en/about/press/koen_2026/data/ko260302a1.pdf)、[ECB Economic Bulletin](https://www.ecb.europa.eu/press/economic-bulletin/html/eb202601.en.html)、[Reuters via Investing / Waller](https://www.investing.com/news/economy-news/feds-waller-dont-expect-current-oil-price-shock-to-have-persistent-impact-on-inflation--bbg-tv-4546968)、[BCA Research / Peter Berezin](https://www.bcaresearch.com/reports/peter-berezins-thought-day-oil-shocks-aint-what-they-once-were-02-03-2026/211871)*
*市場數據截至：2026-03-13（官方序列依發布時差，Brent 截至 2026-03-09，Treasury/FRED 殖利率截至 2026-03-11）*
*本文僅供參考，不構成投資建議。*
