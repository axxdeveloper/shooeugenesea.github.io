---
layout: post
title: "92.8 上升，72.2 留低，4.7% 往上：消費者把油價痛點寫進 Fed 會議前夕"
date: 2026-04-29 12:08:00 +0800
categories: [macro]
tags: [macro, fed, inflation, consumption, energy]
macro_kind: short
description: "Conference Board 4 月把美國消費者信心寫成 92.8，短期預期指數仍在 72.2；密大同月一年通膨預期升到 4.7%。FOMC 前夕的判讀重心落在就業感對信心的支撐，以及通膨預期走向外溢的門檻。"
lang: zh-TW
---

## 92.8 上升，72.2 留在警戒線下

Conference Board 在 `2026-04-28` 把美國 4 月消費者信心寫成 **92.8**，短期預期指數寫成 **72.2**。這兩個數字把同一個家庭部門拆成兩層：工作感受支撐信心，價格與利率預期壓住未來支出。[Conference Board](https://www.prnewswire.com/news-releases/us-consumer-confidence-edged-up-again-in-april-302755679.html)

**Fed 在 4 月 29 日會議前，該如何區分消費韌性與通膨預期外溢？**

判讀法很單純：先看就業感受是否支撐現金流，再看一年與長期通膨預期是否同步上移。下一個驗證點是 **2026-04-30** 的 GDP 與 PCE、**2026-05-08** 的密大初值、以及 **2026-05 上旬** 的紐約聯儲消費者預期調查。[BEA schedule](https://www.bea.gov/news/schedule)、[University of Michigan](https://www.sca.isr.umich.edu/)

## 工作感支撐信心，價格預期壓住遠期支出

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 就業與收入感受撐住 headline | jobs hard to get 從 `21.3%` 降到 `19.8%`，labor market differential 升到 `+7.5`，income decline expectation 降到 `12.3%` | 高 |
| 價格預期仍壓住消費者遠期判斷 | 密大一年通膨預期 `4.7%`，長期通膨預期 `3.5%`；紐約 Fed SCE 的一年汽油價格預期 `9.4%` | 很高 |
| 全球央行面對同一種家戶壓力 | ECB 一年通膨預期 `4.0%`，BOJ 把 FY2026 核心 CPI 區間拉到 `2.5-3.0%` | 高 |

Conference Board 的細節說明 headline 的回升來自勞動與收入感受，商業條件同時保留弱化訊號。現況指數小降到 **123.8**，business conditions net views 下降 **1.8** 個百分點到 **+4.1%**；同一份調查又把 jobs hard to get 從 **21.3%** 降到 **19.8%**，把 labor market differential 推到 **+7.5**。[Conference Board](https://www.prnewswire.com/news-releases/us-consumer-confidence-edged-up-again-in-april-302755679.html) Dana M. Peterson 的解釋也落在這個方向：汽油價格與中東戰爭造成擔憂，勞動市場與收入預期抵消了部分壓力。

Michigan 與紐約 Fed 把價格預期寫得更硬。密大 4 月終值把 consumer sentiment 寫成 **49.8**，一年通膨預期從 **3.8%** 升到 **4.7%**，長期通膨預期升到 **3.5%**；Joanne Hsu 指出停火與汽油價格稍微降溫帶回部分早月跌幅，價格衝擊仍主導消費者觀點。[University of Michigan](https://www.sca.isr.umich.edu/) 紐約 Fed 3 月調查則把一年、三年、五年通膨預期寫成 **3.4% / 3.1% / 3.0%**，一年汽油價格預期升到 **9.4%**。[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407) 這代表 household layer 目前先出現短端上移，長端是否跟上才是 Fed 的政策門檻。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260429ConsumerExpectations"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260429ConsumerExpectations'), {
  type: 'bar',
  data: {
    labels: ['NY Fed 1Y', 'NY Fed 3Y', 'NY Fed 5Y', 'UMich 1Y', 'UMich long-run', 'ECB 1Y', 'ECB 3Y', 'ECB 5Y'],
    datasets: [{
      label: '通膨預期 (%)',
      data: [3.4, 3.1, 3.0, 4.7, 3.5, 4.0, 3.0, 2.4],
      backgroundColor: [
        'rgba(220, 38, 38, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(220, 38, 38, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(220, 38, 38, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(16, 185, 129, 0.78)'
      ],
      borderColor: [
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
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
        text: '一年期通膨預期先上移，長端仍是政策門檻（NY Fed, UMich, ECB）'
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

歐洲與日本提供了外部對照。ECB `2026-04-28` 的 consumer expectations survey 把一年通膨預期寫成 **4.0%**，三年寫成 **3.0%**，五年寫成 **2.4%**；同一份資料把 12 個月成長預期降到 **-2.1%**，失業率預期升到 **11.3%**。[ECB CES](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260428_1~eddb480492.en.html) BOJ 同日以 6-3 維持 **0.75%**，但三位委員主張把隔夜利率拉到 **1.0%**，展望報告又把 FY2026 生鮮除外 CPI 放在 **2.5-3.0%**。[BOJ statement](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf)、[BOJ outlook](https://www.boj.or.jp/en/mopo/outlook/gor2604a.pdf) 同一個能源衝擊已經在三個央行轄區變成預期管理問題。

## 三個數據會決定 Fed 讀哪一層

如果 **2026-04-30** 的 March PCE 把 core PCE 月增留在 **0.3%** 以上，且 real PCE 續留正成長，→ Fed 會把消費韌性與價格黏性放在同一張表裡，短端通膨預期會維持高權重。[BEA February PIO](https://www.bea.gov/index.php/news/2026/personal-income-and-outlays-february-2026)、[BEA schedule](https://www.bea.gov/news/schedule)

如果 **2026-05-08** 的 Michigan 初值把一年通膨預期拉回 **4.2%** 以下，且 long-run expectations 回到 **3.2%** 以下，→ 價格焦慮會從外溢風險降回短端油價衝擊，Fed 的等待框架會更穩。[University of Michigan](https://www.sca.isr.umich.edu/)

如果 **2026-05 上旬** 的紐約 Fed SCE 把一年通膨預期推到 **3.6%** 以上，且五年預期升破 **3.0%**，→ household expectations 會從汽油題轉成長端錨定題，4 月的會議語氣需要用更高的警戒度重讀。[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)

## 結語

> **核心判斷：** 4 月的消費者調查顯示家庭部門仍有就業支撐；短端價格焦慮留在短端時，Fed 的等待框架仍成立。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Core PCE + real PCE | core PCE 月增連續 `2` 次 `>=0.3%`，且 real PCE 連續 `2` 次 `>0` | 觀察 `2026-04-30` 與 `2026-05-28` 的 PCE | 消費韌性與價格黏性同步成立，Fed 的等待框架維持高警戒 |
| Michigan inflation expectations | 1Y inflation expectation 連續 `2` 次 `<4.2%`，且 long-run expectation 連續 `2` 次 `<=3.2%` | 觀察 `2026-05-08` 初值與 `2026-05-29` 終值 | 價格焦慮回到短端，長端預期外溢框架降權 |
| NY Fed SCE 1Y + 5Y | 1Y inflation expectation `>=3.6%`，且 5Y `>3.0%` 連續 `2` 輪 | 觀察 `2026-05 上旬` 與 `2026-06 上旬` 的 SCE | household expectations 走進長端，Fed 需要重估預期錨定 |

後續最值得看的三個變數很清楚。第一個變數是 **2026-04-30** 的 March PCE，這組資料會把 CPI 的能源衝擊轉成 Fed 偏好的價格口徑。第二個變數是 **2026-05-08** 的 Michigan 初值，這會回答停火與汽油價格是否足以修復 household sentiment。第三個變數是 **2026-05 上旬** 的紐約 Fed SCE，這會直接測試短端通膨焦慮有沒有進入五年預期。

---

*資料來源：[Conference Board](https://www.prnewswire.com/news-releases/us-consumer-confidence-edged-up-again-in-april-302755679.html)、[University of Michigan](https://www.sca.isr.umich.edu/)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[ECB CES](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260428_1~eddb480492.en.html)、[BOJ statement](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf)、[BOJ outlook](https://www.boj.or.jp/en/mopo/outlook/gor2604a.pdf)、[BLS CPI](https://www.bls.gov/news.release/archives/cpi_04102026.htm)、[BEA February PIO](https://www.bea.gov/index.php/news/2026/personal-income-and-outlays-february-2026)、[BEA schedule](https://www.bea.gov/news/schedule)、[IEA Oil Market Report](https://www.iea.org/reports/oil-market-report-april-2026)*
*市場與官方數據截至：2026-04-29 12:00（Asia/Taipei）*
*本文僅供參考，不構成投資建議。*
