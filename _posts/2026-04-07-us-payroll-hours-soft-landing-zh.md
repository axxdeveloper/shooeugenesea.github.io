---
layout: post
title: "17.8 萬新增站在表面，34.2 小時寫在下面：美國就業進入低工時擴張"
date: 2026-04-07 12:10:00 +0800
categories: [macro]
tags: [macro, employment, fed, consumption]
macro_kind: short
description: "美國 3 月非農新增 17.8 萬，失業率維持 4.3%，表面強於市場預期。BLS 同時把平均工時寫成 34.2 小時，醫療回補 3.5 萬，聯邦政府減 1.8 萬。勞動市場維持低裁員，勞動強度仍偏軟。"
lang: zh-TW
---

## 17.8 萬站在表面，34.2 小時寫在下面

BLS 在 4 月 3 日把 3 月非農新增寫成 **17.8 萬**，失業率留在 **4.3%**；同一份報告又把平均工時寫成 **34.2** 小時，低於 2 月的 **34.3** 小時。[BLS Employment Situation](https://www.bls.gov/news.release/archives/empsit_04032026.htm)

**3 月非農新增 `17.8` 萬且失業率維持 `4.3%` 時，勞動市場要讀成再加速，還是讀成低工時擴張？**

這個框架先看回補招聘與工時下滑如何同時出現，再看 `2026-04-09` 的 personal income and outlays、`2026-05-05` 的 JOLTS、`2026-05-08` 的非農會把這份報告推向 broad reacceleration，還是留在低工時與低裁員並行的中段降溫。[BEA Schedule](https://www.bea.gov/node/43012)、[BLS JOLTS Home](https://www.bls.gov/jlt/)、[BLS Employment Situation Schedule](https://www.bls.gov/schedule/news_release/empsit.htm)

## 回補招聘撐住 headline，工時與政府部門壓住勞動強度

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 回補招聘先把 payroll 撐高 | health care `+76k`，其中 physicians' offices `+35k` 來自罷工回流；construction `+26k`、transportation and warehousing `+21k` | 很高 |
| 低工時與低裁員並行 | average workweek `34.3 -> 34.2`、claims `202k`、insured unemployment rate `1.2%` | 很高 |
| broad reacceleration 已經成形 | payroll `178k` 明顯高於市場預期 `60k`，失業率維持 `4.3%`，S&P 500 在 `2026-04-06` 收 `6611.83` | 中 |

目前最被數字支持的版本，是回補招聘與低工時並行。BLS 把 3 月 health care 增量寫成 **7.6 萬**，其中 physicians' offices 的 **3.5 萬** 來自工人結束罷工回流。這代表 health care 增量大約 **46%** 來自單一回補桶，約占整體 payroll 的 **20%**。construction 的 **2.6 萬** 與 transportation and warehousing 的 **2.1 萬** 也一起撐住 headline；federal government 的 **-1.8 萬** 與 financial activities 的 **-1.5 萬** 又把 rate-sensitive 與公共部門的收縮寫在同一張表裡。1 月 payroll 修正 **+3.4 萬**，2 月修正 **-4.1 萬**，兩月合計只有 **-0.7 萬**，headline 因此沒有因修正被整體改寫。[BLS Employment Situation](https://www.bls.gov/news.release/archives/empsit_04032026.htm)

<aside style="float: right; width: 240px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>Average workweek</strong>：每位受薪者平均每週工時。<br>
<strong>Claims</strong>：每週首次申領失業救濟人數，通常比失業率更早反映裁員變化。
</aside>

工時把另一層訊號補上。average hourly earnings 月增 **0.2%**，average workweek 卻由 **34.3** 降到 **34.2**。工時降幅約 **0.29%**，高於時薪月增幅度，平均每位受薪者的周薪動能因此大致持平。DOL 又把 initial claims 留在 **20.2 萬**，4 週均值降到 **20.775 萬**，insured unemployment rate 維持 **1.2%**。[BLS Employment Situation](https://www.bls.gov/news.release/archives/empsit_04032026.htm)、[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260402) 這組數字把勞動市場拆得很清楚：企業仍願意保留人力，企業對新增工時與新增錄用保持克制。

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260407PayrollHours"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260407PayrollHours'), {
  type: 'bar',
  data: {
    labels: ['Health Care', 'Construction', 'Transport/Warehousing', 'Social Assistance', 'Federal Government', 'Financial Activities'],
    datasets: [{
      label: '3 月就業變動（千人）',
      data: [76, 26, 21, 14, -18, -15],
      backgroundColor: [
        'rgba(16, 185, 129, 0.78)',
        'rgba(37, 99, 235, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(14, 165, 233, 0.78)',
        'rgba(185, 28, 28, 0.78)',
        'rgba(120, 53, 15, 0.78)'
      ],
      borderColor: [
        'rgba(16, 185, 129, 1)',
        'rgba(37, 99, 235, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(14, 165, 233, 1)',
        'rgba(185, 28, 28, 1)',
        'rgba(120, 53, 15, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '3 月非農增量集中在少數部門，聯邦與金融仍在回落（資料來源：BLS）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) { return value + 'k'; }
        }
      }
    }
  }
});
</script>

市場把這份報告讀成穩定而非事故。S&P 500 在 `2026-04-06` 收到 **6611.83**，VIX 回到 **23.87**，HY OAS 回到 **3.13**，10 年公債殖利率在 `2026-04-03` 為 **4.35%**。[FRED SP500](https://fred.stlouisfed.org/series/SP500)、[FRED VIXCLS](https://fred.stlouisfed.org/series/VIXCLS)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10) IMF 的 2026 Article IV 又把另一條反方寫得很完整：美國成長率預估 **2.4%**，employment growth is slowing but unemployment should stay near **4%**。[IMF](https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult) 這條反方讓今天的結論維持克制。數字支持 soft landing 的機率仍在，headline 下方的 labor intensity 同時沒有重新加速。

## 4 月 9 日與 5 月 8 日會決定 178k 是新中樞，還是一次回補

如果 `2026-04-09` 的 real PCE 維持 **0.2%** 以上，`2026-05-08` 的 payrolls 再次高於 **10 萬**，同時 average workweek 回到 **34.3** 小時，→ 3 月非農會更像 broadening expansion，低工時框架會降權。[BEA Schedule](https://www.bea.gov/node/43012)、[BLS Employment Situation Schedule](https://www.bls.gov/schedule/news_release/empsit.htm)

如果 initial claims 在未來 4 週持續留在 **22 萬** 以下，`2026-05-05` 的 JOLTS 卻把 hires 壓在 **490 萬** 以下、quits rate 留在 **1.9%** 或更低，→ 企業會維持 low-fire、low-hire、low-hours 的中段降溫，4 月 3 日那篇招聘凍結文會得到第二輪支持。[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260402)、[BLS JOLTS Home](https://www.bls.gov/jlt/)

如果 federal government 連兩個月各減 **1.5 萬** 以上，financial activities 持續負增長，失業率又升到 **4.4%** 以上，→ 勞動市場的降溫會由工時擴散到部門廣度，Fed 的耐心空間也會變大。[BLS Employment Situation](https://www.bls.gov/news.release/archives/empsit_04032026.htm)

## 結語

> **核心判斷：** 3 月非農把美國勞動市場寫成低裁員、低工時、回補招聘並行的中段降溫，headline 強度目前沒有把 labor intensity 一起拉高。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Payrolls + workweek | 4 月 payrolls `>=100k`，且 average workweek 回到 `34.3` 或更高 | 觀察 `2026-05-08` 非農 | 低工時擴張框架降權，broad reacceleration 升權 |
| Claims + JOLTS hires | initial claims `>220k` 連 4 週，且 hires `<=4.9m` | 觀察即日起至 `2026-05-05` JOLTS 與每週 claims | 中段降溫由工時題轉向招聘題，文章框架需要重寫成更明確的勞動放慢 |
| Real PCE + unemployment | real PCE 月增 `<=0.1%`，且失業率升到 `4.4%` 或更高 | 觀察 `2026-04-09` PIO 與 `2026-05-08` 非農 | 家戶吸收能力轉弱，低工時框架要升級成需求放慢框架 |

後續最值得看的三個變數很直接。第一個變數是 `2026-04-09` 的 personal income and outlays，這份資料會回答工時下滑有沒有開始壓到家戶收入與支出。第二個變數是 `2026-05-05` 的 JOLTS，這會回答 `3.1%` 的 hires rate 與低錄用環境有沒有延續到 3 月。第三個變數是 `2026-05-08` 的下一份非農，這個日期會把 `178k` 定位成新中樞，或定位成一次回補。

---

*資料來源：[BLS Employment Situation](https://www.bls.gov/news.release/archives/empsit_04032026.htm)、[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260402)、[IMF 2026 Article IV](https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult)、[Eurostat unemployment](https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/3-01042026-ap)、[BOJ Tankan](https://www.boj.or.jp/en/statistics/tk/yoshi/tk2603.htm)、[FRED SP500](https://fred.stlouisfed.org/series/SP500)、[FRED VIXCLS](https://fred.stlouisfed.org/series/VIXCLS)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[BEA Schedule](https://www.bea.gov/node/43012)、[BLS JOLTS Home](https://www.bls.gov/jlt/)*
*市場與官方數據截至：2026-04-06（S&P 500） / 2026-04-03（非農、10 年公債殖利率、HY OAS） / 2026-04-02（VIX、claims） / 2026-04-01（IMF、Eurostat、BOJ）*
*本文僅供參考，不構成投資建議。*
