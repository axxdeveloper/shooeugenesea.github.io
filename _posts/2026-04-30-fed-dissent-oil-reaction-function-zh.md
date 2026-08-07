---
layout: post
title: "4 張異議票把 3.50%-3.75% 變成反應函數題：Fed 的下一格在油價與預期曲線"
date: 2026-04-30 12:03:12 +0800
categories: [macro]
tags: [macro, fed, inflation, bonds, energy]
macro_kind: long
description: "Fed 4 月 29 日把利率維持在 3.50%-3.75%，投票結果卻變成 8 比 4；三名官員支持利率不動但反對寬鬆偏向文字，油價與通膨預期正在改寫 6 月前的反應函數。"
lang: zh-TW
---

## 4 張異議票讓利率不動變成分裂訊號

Fed 4 月 29 日把聯邦基金利率目標區間維持在 **3.50%-3.75%**，投票結果卻變成 **8 比 4**。[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)

**當 Fed 同時保留寬鬆偏向與收到三張鷹派文字異議時，這次會議傳達的是降息路徑延後，還是反應函數被油價與就業兩端重新拉寬？**

這個框架把 4 張異議票拆成油價、就業與準備金三條線。讀者只要盯住 **2026-04-30** 的 GDP/PCE、**2026-05-08** 的非農、**2026-05-12** 的 CPI，以及 5 月的 New York Fed SCE，就能判斷 6 月會議保留的是寬鬆偏向，還是更硬的通膨防線。[BEA personal income schedule](https://www.bea.gov/products/personal-income-outlays)、[BLS schedule](https://www.bls.gov/schedule/2026/home.htm)、[NY Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)

## 4 張票背後是三條資料線：油價、就業、準備金

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 能源與通膨預期壓住降息語氣 | Fed 聲明直接寫入 global energy prices；3 月 CPI 年增 `3.3%`、核心 CPI 年增 `2.6%`；NY Fed SCE 的 `1Y / 3Y / 5Y` 通膨預期為 `3.4% / 3.1% / 3.0%` | 很高 |
| 就業低增量保留寬鬆偏向 | 3 月非農 `+17.8 萬`，2 月修正為 `-13.3 萬`；BLS 寫明 payroll employment had changed little on net over the prior 12 months | 高 |
| 準備金管理讓利率不動仍帶操作支撐 | IORB `3.65%`，standing repo `3.75%`，ON RRP `3.50%`；Fed 指示紐約 Fed 透過 Treasury bills 與必要時短天期公債維持 ample reserves | 中高 |

<aside style="float: right; width: 250px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>寬鬆偏向</strong>：央行聲明保留未來降息空間的文字訊號。<br>
<strong>準備金管理</strong>：Fed 透過短天期證券操作維持銀行體系準備金充裕，功能在流動性，不等同於政策利率下調。
</aside>

Fed 聲明把能源 shock 直接放進通膨段落。聲明說經濟活動仍以 solid pace 擴張，就業增量維持低位，通膨 elevated 的一部分來自 global energy prices；同段文字又把中東局勢放進 outlook uncertainty。[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm) 這代表三名官員把異議集中在 statement 中「additional adjustments」保留的寬鬆方向，利率現值仍獲得這三票支持。

BLS 的 3 月 CPI 讓這個異議有資料基礎。CPI-U 年增 **3.3%**、月增 **0.9%**，核心 CPI 年增 **2.6%**；BLS 的月度分析表又把 all items 的月增寫成 2022 年 6 月以來最大，並把能源與汽油列為主要貢獻。[BLS CPI](https://www.bls.gov/news.release/cpi.htm) New York Fed SCE 也把一年、三年、五年通膨預期寫成 **3.4% / 3.1% / 3.0%**，短端上升、長端持平的形狀讓 Fed 得以同時保留雙向風險與降息文字。[NY Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)

就業資料則支撐另一張票。BLS 3 月非農新增 **17.8 萬**，失業率維持 **4.3%**，2 月新增就業被修正到 **-13.3 萬**；BLS 同時寫明 payroll employment over the prior 12 months changed little on net。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.htm) Stephen I. Miran 投給降息 25bp，Fed 聲明未公布他的完整推理；可驗證資料顯示，就業側確實給 Fed 留下寬鬆偏向的理由。

| 錨點 | 式子 | 單位 | 口徑 |
|---|---:|---|---|
| 異議票占比 | `4 / 12 = 33.3%` | FOMC 投票人數 | Fed 4 月 29 日 voting record |
| 鷹派文字異議占比 | `3 / 12 = 25.0%` | FOMC 投票人數 | 三名官員支持利率不動但反對寬鬆偏向 |
| 10Y-2Y 利差 | `4.42 - 3.92 = 0.50` | 百分點 | U.S. Treasury 4 月 29 日 CMT |
| Headline-core CPI 差 | `3.3 - 2.6 = 0.7` | 百分點 | BLS 3 月 CPI 12 個月變化 |

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260430FedDissentOil"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260430FedDissentOil'), {
  type: 'bar',
  data: {
    labels: ['Fed 下緣', 'IORB', 'Fed 上緣', '2Y Treasury', '10Y Treasury', 'CPI YoY', 'Core CPI YoY'],
    datasets: [{
      label: '百分比 (%)',
      data: [3.50, 3.65, 3.75, 3.92, 4.42, 3.30, 2.60],
      backgroundColor: [
        'rgba(8, 145, 178, 0.78)',
        'rgba(14, 165, 233, 0.78)',
        'rgba(37, 99, 235, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(220, 38, 38, 0.78)',
        'rgba(168, 85, 247, 0.78)',
        'rgba(100, 116, 139, 0.78)'
      ],
      borderColor: [
        'rgba(8, 145, 178, 1)',
        'rgba(14, 165, 233, 1)',
        'rgba(37, 99, 235, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(220, 38, 38, 1)',
        'rgba(168, 85, 247, 1)',
        'rgba(100, 116, 139, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Fed corridor、殖利率與通膨同時卡在 3%-4% 區間（資料來源：Fed、U.S. Treasury、BLS）'
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

國際央行對照讓這次分裂更清楚。ECB 3 月把 2026 headline inflation 放在 **2.6%**，把 2026 growth 放在 **0.9%**，並把中東能源 shock 的 indirect and second-round effects 放進中期通膨判斷。[ECB statement](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260319~93b1cbad97.en.html) BOJ 4 月也以 6 比 3 維持 0.75%，三名異議委員主張把 overnight call rate 拉到約 **1.0%**；BOJ Outlook 又把 FY2026 CPI excluding fresh food 放在 **2.5%-3.0%**，並把 Dubai crude 從約 **105 美元** 往 **70-80 美元** 回落設為基準假設。[BOJ statement](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf)、[BOJ Outlook](https://www.boj.or.jp/en/mopo/outlook/gor2604a.pdf)

另一個解讀也有資料支持。IMF 4 月 WEO 在有限衝突假設下仍把 2026 全球成長放在 **3.1%**，並預期全球 headline inflation 在 2026 小幅上升後於 2027 續降；ECB 與 BOJ 的基準情境也都假設能源衝擊會逐步消退。[IMF WEO](https://www.imf.org/en/publications/weo/issues/2026/04/14/world-economic-outlook-april-2026)、[ECB projections](https://www.ecb.europa.eu/press/projections/html/ecb.projections202603_ecbstaff~ebe291cd3d.en.html)、[BOJ Outlook](https://www.boj.or.jp/en/mopo/outlook/gor2604a.pdf) 這個版本支撐 Fed 保留寬鬆偏向；它需要短端通膨預期停住、能源 CPI 貢獻回落、就業低增量延續。

## 6 月以前的條件會把文字異議變成政策路徑

如果 **2026-04-30** 的 PCE price index 與 **2026-05-12** 的 CPI 顯示能源貢獻明顯回落，且 5 月 SCE 的五年通膨預期留在 **3.0%** 或以下，→ 三張鷹派文字異議會留在 statement wording 層次，寬鬆偏向仍有存在空間。[BEA personal income schedule](https://www.bea.gov/products/personal-income-outlays)、[BLS CPI schedule](https://www.bls.gov/schedule/2026/home.htm)、[NY Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)

如果 5 月與 6 月 SCE 連續把一年通膨預期留在 **3.4%** 以上、三年預期留在 **3.1%** 以上，且 10 年期 Treasury 連續兩週維持在 **4.50%** 上方，→ 文字異議會變成 6 月聲明改寫壓力，市場會把 Fed 的反應函數讀成更偏通膨防線。[NY Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[Treasury rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)

如果 **2026-05-08** 的非農低於 **10 萬**，失業率升到 **4.5%** 以上，且核心 PCE 月增維持 **0.3%** 或以下，→ Miran 這條降息線會得到更多資料支撐，Fed 會把雙重使命的就業側重新放到聲明前段。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.htm)、[BEA personal income schedule](https://www.bea.gov/products/personal-income-outlays)

## 結語

> **核心判斷：** Fed 的 4 月會議把利率方向改成反應函數寬度題；油價推高通膨語句，就業降溫保留寬鬆偏向。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| SCE 通膨預期曲線 | `1Y >=3.4%`、`3Y >=3.1%` 連續 `2` 個月，且 `5Y >3.0%` 出現 `1` 次 | 觀察 2026 年 5 月與 6 月 SCE | Fed 的寬鬆偏向需要降權，statement wording 會轉向通膨防線 |
| 能源 CPI 貢獻 + headline CPI | 能源分項月增低於 `1.0%` 連續 `2` 個月，且 headline CPI 月增低於 `0.3%` 連續 `2` 個月 | 觀察 2026-05-12 與 2026-06-10 CPI | 油價 shock 對政策文字的壓力降溫，4 月異議可視為短期能源壓力 |
| 非農 + 失業率 | 非農新增 `<100k` 連續 `2` 個月，且失業率 `>=4.5%` 連續 `2` 個月 | 觀察 2026-05-08 與 2026-06-05 Employment Situation | 就業側會拉高寬鬆偏向權重，Miran 式降息框架取得更多資料支撐 |
| 10Y Treasury | 10 年期 CMT `>=4.50%` 連續 `10` 個交易日 | 觀察 2026-04-30 至 2026-06 FOMC 前的 Treasury data | 長端利率把能源、期限溢價與政策分裂一起定價，金融條件會主導 6 月前解讀 |

後續三個變數很清楚。第一個變數是 **2026-04-30** 的 GDP 與 PCE，這組數字會合併呈現 Fed 口中的 solid activity 與 inflation pressure。第二個變數是 **2026-05-08** 的非農，這張表會檢驗 job gains remained low 的幅度。第三個變數是 **2026-05-12** 的 CPI 與 5 月 SCE，這組數字會決定三張鷹派文字異議的位置，也會決定 6 月聲明主軸的強度。

---

*資料來源：[Fed statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)、[Fed implementation note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a1.htm)、[BLS CPI](https://www.bls.gov/news.release/cpi.htm)、[BLS Employment Situation](https://www.bls.gov/news.release/empsit.htm)、[Treasury rates](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)、[NY Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[BEA personal income schedule](https://www.bea.gov/products/personal-income-outlays)、[BLS release schedule](https://www.bls.gov/schedule/2026/home.htm)、[IMF WEO](https://www.imf.org/en/publications/weo/issues/2026/04/14/world-economic-outlook-april-2026)、[ECB statement](https://www.ecb.europa.eu/press/press_conference/monetary-policy-statement/2026/html/ecb.is260319~93b1cbad97.en.html)、[ECB projections](https://www.ecb.europa.eu/press/projections/html/ecb.projections202603_ecbstaff~ebe291cd3d.en.html)、[BOJ statement](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260428a.pdf)、[BOJ Outlook](https://www.boj.or.jp/en/mopo/outlook/gor2604a.pdf)*
*市場數據截至：2026-04-29*
*本文僅供參考，不構成投資建議。*
