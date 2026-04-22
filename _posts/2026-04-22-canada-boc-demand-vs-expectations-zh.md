---
layout: post
title: "2.4% / 2.2% / 3.98% 正在拉開距離：加拿大 2.25% 的下一步由預期還是需求決定"
date: 2026-04-22 11:40:00 +0800
categories: [macro]
tags: [macro, canada, inflation, consumption, employment]
macro_kind: short
description: "加拿大 3 月 CPI 年增 2.4%，排除汽油只剩 2.2%，Bank of Canada 同時看到一年通膨預期 3.98% 與 28% households 延後大額支出。4 月 29 日的 2.25% 利率決議會先處理能源 shock，還是先處理需求轉弱，答案會寫在預期與企業轉嫁有沒有續升。"
lang: zh-TW
---

## 2.4% 先抬頭，2.2% 仍貼著目標

加拿大 `2026-03` CPI 年增 `2.4%`，排除汽油只剩 `2.2%`。[StatsCan CPI](https://www150.statcan.gc.ca/n1/daily-quotidien/260420/dq260420a-eng.htm)

當 `2.4%` 的 headline 已由汽油抬高、`2.2%` 的排除汽油通膨仍貼著目標，`3.98%` 的一年通膨預期卻高過現值時，加拿大央行會把更早調整利率的市場想像拉回檯面，還是 `2.25%` 會繼續留在原地更久？

答案寫在三張表。第一張表看 `2.4%` 與 `2.2%` 的落差，第二張表看 `3.98%` 的一年通膨預期與 `2.68%` 的薪資預期，第三張表看 `28%` households 已經延後大額支出。`2026-04-24` 的零售銷售、`2026-04-29` 的 `Monetary Policy Report`、`2026-05-19` 的下一份 CPI 會把方向補齊。[BoC CSCE](https://www.bankofcanada.ca/2026/04/canadian-survey-of-consumer-expectations-first-quarter-of-2026/) [BoC policy schedule](https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/)

## 汽油把 headline 推高，需求把央行拉回原地

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| headline 先由能源 shock 主導 | CPI `2.4%`、排除汽油 `2.2%`、汽油月增 `21.2%`、汽油年增 `5.9%` | 很高 |
| 預期仍高，央行無法提早鬆手 | households 一年通膨預期 `3.98%`、兩年 `3.57%`，firms 的 one-year inflation expectations 也在戰事後抬高 | 高 |
| 需求承受力偏弱，升息門檻仍高 | `28%` households 延後大額支出、失業率 `6.7%`、失業者轉職率 `15.2%` 低於疫前平均 `19.1%` | 很高 |

| 式子 | 意義 |
|---|---|
| `2.4 - 2.2 = 0.2` | headline 與排除汽油通膨之間的能源楔子 |
| `2.4 - 2.6 = -0.2` | 實際值低於 `BMO` 與 `Desjardins` 一帶的事前預估 |
| `3.98 - 2.68 = 1.30` | households 的通膨預期仍明顯高於薪資預期 |

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260422CanadaBocDemandVsExpectations"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260422CanadaBocDemandVsExpectations'), {
  type: 'bar',
  data: {
    labels: ['CPI', 'CPI 排除汽油', '1Y 通膨預期', '2Y 通膨預期', '1Y 薪資預期'],
    datasets: [{
      label: '百分比 (%)',
      data: [2.4, 2.2, 3.98, 3.57, 2.68],
      backgroundColor: [
        'rgba(14, 116, 144, 0.82)',
        'rgba(16, 185, 129, 0.82)',
        'rgba(220, 38, 38, 0.82)',
        'rgba(249, 115, 22, 0.82)',
        'rgba(99, 102, 241, 0.82)'
      ],
      borderColor: [
        'rgba(14, 116, 144, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(99, 102, 241, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '加拿大的價格與預期正在拉開距離（資料來源：StatsCan / BoC）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) { return value + '%'; }
        }
      }
    }
  }
});
</script>

`StatsCan` 把 `2026-03` CPI 年增寫成 `2.4%`，把排除汽油後的 CPI 寫成 `2.2%`，又把汽油月增寫成 `21.2%`，這是有紀錄以來最大的單月漲幅。[StatsCan CPI](https://www150.statcan.gc.ca/n1/daily-quotidien/260420/dq260420a-eng.htm) 這張表先告訴市場一件事。加拿大 `3` 月的 headline inflation 先由能源 shock 主導。`RBC` 的 `Abbey Xu` 也把這份數據讀成 headline 由能源帶動，core 線條仍在冷卻區間。[RBC Economics](https://www.rbc.com/en/economics/canadian-analysis/data-flashes/canada-inflation-rises-on-energy-rebound-while-core-pressures-continue-to-ease/) `BMO` 的 `Douglas Porter` 又把市場原先押注的 `2.6%` 與實際 `2.4%` 放在一起，指出這份 CPI 比 feared 的版本更溫和。[BMO Economics](https://economics.bmo.com/en/publications/detail/c2788c53-ed9f-4e42-85b2-c3bf8f3bab1e/)

`BoC` 的 `BOS` 把第二張表寫得更細。戰事前完成的大樣本 survey 把 future sales balance 寫成 `25`、investment balance 寫成 `29`、employment balance 寫成 `38`，規劃 recession 的 firms 比例已由 `22%` 降到 `9%`；同一批 firms 對 input prices 的 balance 只有 `2`，對 output prices 甚至還是 `-8`。[BoC BOS](https://www.bankofcanada.ca/2026/04/business-outlook-survey-first-quarter-of-2026/) 這代表戰事爆發前的加拿大企業端原本站在「需求慢慢回來、轉嫁仍然克制」的路徑。`BoC` 隨後補做的 targeted follow-up 又把新訊息補上來。許多 firms 已經看到 energy、fertilizer 與 freight 成本上升。這段 fine print 把今天的 policy problem 寫得很清楚：廣泛需求仍停在溫和區間，邊際成本已經重新抬頭。

`CSCE` 與 `Labour Force Survey` 把第三張表寫成 households 的承受力。加拿大 households 的一年通膨預期升到 `3.98%`，兩年預期在 `3.57%`，expected wage growth 只有 `2.68%`，job-loss probability 升到 `19.33%`，missing-debt-payment probability 也在 `9.24%`。[BoC CSCE](https://www.bankofcanada.ca/2026/04/canadian-survey-of-consumer-expectations-first-quarter-of-2026/) 戰事後的補訪又寫出 `21%` households 已經取消或延後旅行，`28%` households 已經延後或縮減大額支出。`StatsCan` 的 `2026-03` 就業資料再補上一刀。失業率維持 `6.7%`，失業者轉職率只有 `15.2%`，低於疫前同月平均 `19.1%`；名目時薪年增雖然達到 `4.7%`，組成調整後只剩 `3.6%`。[StatsCan Labour Force Survey](https://www150.statcan.gc.ca/n1/daily-quotidien/260410/dq260410a-eng.htm) 這組數字說明 households 先感受到的是 real purchasing power 壓力，需求動能仍停在偏弱區間。

`OECD` 的 cross-market benchmark 讓這個判讀更穩。`OECD` 把加拿大 `2026` 成長預估放在 `1.2%`，同時指出高能源價格會鼓勵北美能源生產。[OECD interim outlook](https://www.oecd.org/en/publications/oecd-economic-outlook-interim-report-march-2026_d4623013-en/full-report/component-3.html) 加拿大因此站在一個很少見的位置：出口收入有支撐，households 的 discretionary demand 卻先被油價擠壓。`BoC` 在 `2026-03-18` 的 opening statement 早就把這個 dilemma 寫成 growth downside 與 inflation upside 同時存在。[BoC opening statement](https://www.bankofcanada.ca/2026/03/opening-statement-2026-03-18/)

## 4 月 24 日到 5 月 19 日會決定 2.25% 停多久

如果 `2026-04-24` 的零售銷售把排除汽車與汽油的支出留在平盤附近，`2026-04-29` 的 `BoC` 又把 `2.25%` 留在原地，並重申會穿透戰事的 immediate inflation impact，→ `2.4%` 這份 CPI 會留在 energy-first frame，市場對更早調整利率的想像需要降權。[Retail trade release note](https://www150.statcan.gc.ca/n1/daily-quotidien/260320/dq260320a-eng.pdf) [BoC rate page](https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/)

如果 `2026-04-29` 的 `Monetary Policy Report` 把近端 inflation path 明顯上修，並把 expectations 列成比 growth 更高權重的風險，→ `2.25%` 的等待時間會拉長，市場討論會由 `cut timing` 轉向 `hold duration`。[BoC rate page](https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/) [BoC March statement](https://www.bankofcanada.ca/2026/03/opening-statement-2026-03-18/)

如果 `2026-05-19` 的下一份 CPI 把排除汽油通膨推到 `>=2.5%`，headline 又靠近 `3%`，→ 加拿大會離開單純汽油 story，文章今天的 energy-first 框架需要改寫成更廣的 pass-through frame。[StatsCan CPI](https://www150.statcan.gc.ca/n1/daily-quotidien/260420/dq260420a-eng.htm)

## 結語

> **核心判斷：** 加拿大 `4` 月底的 `2.25%` 先看需求承受力，`2.4%` 的 headline 先由汽油推高；只有當預期與排除汽油通膨一起續升，這次 shock 才會改寫成更久的停留時間。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| CPI excluding gasoline | 排除汽油通膨 `>=2.5%` 連續 `2` 次月發布 | 觀察 `2026-05-19` 與 `2026-06-16` 的 CPI | `energy-first` 框架需要降權，通膨壓力已經由汽油走向更廣的消費籃 |
| Retail sales ex autos and gasoline + unemployment rate | 零售銷售月增 `>=0.5%` 連續 `2` 次，且失業率 `<=6.4%` 連續 `2` 次 | 觀察 `2026-04-24` 的零售、`2026-05` 上旬的就業，並延伸到下一輪月資料 | `soft demand` 框架需要重評，`BoC` 對需求韌性的權重會上升 |
| BoC expectations + firms’ output prices | 近端通膨預期續升，且 `BOS` output price balance 轉正並連續維持 `2` 次發布 | 觀察 `2026-04-29` 的 `MPR` 與下一輪 `BOS/BLP` 發布 | `2.25%` 的等待時間會由 energy shock 題，轉成更黏著的 expectations 題 |

後續三個變數足夠回答這個問題。第一個變數是 `2026-04-24` 的零售銷售，這張表會回答 households 的延後支出有沒有真的落進實際數據。第二個變數是 `2026-04-29` 的 `Monetary Policy Report`，這份文件會回答 `BoC` 把今天的 `2.4%` 讀成短期穿透，還是讀成更久的停留時間。第三個變數是 `2026-05-19` 的下一份 CPI，這張表會直接回答 `2.2%` 的排除汽油通膨有沒有開始跟上 headline。

---

*資料來源：[StatsCan CPI](https://www150.statcan.gc.ca/n1/daily-quotidien/260420/dq260420a-eng.htm)、[StatsCan Labour Force Survey](https://www150.statcan.gc.ca/n1/daily-quotidien/260410/dq260410a-eng.htm)、[BoC CSCE](https://www.bankofcanada.ca/2026/04/canadian-survey-of-consumer-expectations-first-quarter-of-2026/)、[BoC BOS](https://www.bankofcanada.ca/2026/04/business-outlook-survey-first-quarter-of-2026/)、[BoC opening statement](https://www.bankofcanada.ca/2026/03/opening-statement-2026-03-18/)、[BoC rate page](https://www.bankofcanada.ca/core-functions/monetary-policy/key-interest-rate/)、[RBC Economics](https://www.rbc.com/en/economics/canadian-analysis/data-flashes/canada-inflation-rises-on-energy-rebound-while-core-pressures-continue-to-ease/)、[BMO Economics](https://economics.bmo.com/en/publications/detail/c2788c53-ed9f-4e42-85b2-c3bf8f3bab1e/)、[Desjardins](https://www.desjardins.com/content/dam/pdf/en/personal/savings-investment/economic-studies/world-monetary-policy-currency-17-april-2026.pdf)、[OECD interim outlook](https://www.oecd.org/en/publications/oecd-economic-outlook-interim-report-march-2026_d4623013-en/full-report/component-3.html)*
*市場與官方數據截至：2026-04-21（美股收盤） / 2026-04-20（加拿大 CPI、BOS、CSCE） / 2026-04-10（加拿大就業） / 2026-03-26（OECD） / 2026-03-18（BoC）*
