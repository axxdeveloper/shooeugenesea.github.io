---
layout: post
title: "4.34% 與 120% GDP 把美債長端拉回財政耐受度"
date: 2026-04-27 12:18:00 +0800
categories: [macro]
tags: [macro, bonds, fiscal, fed, debt, us]
macro_kind: long
description: "Fed H.15 在 2026-04-24 把 10 年美債殖利率寫成 4.34%，CBO 把 2036 年公眾持有聯邦債務寫成 120% GDP、淨利息支出寫成 4.6% GDP。長端利率的主軸從短端降息時間，轉向實質風險溢價與財政耐受度。"
lang: zh-TW
---

## 4.34% 的 10 年債已經超出降息日曆

Fed H.15 在 2026-04-24 把 10 年美債殖利率寫成 **4.34%**，CBO 在 2026-02-11 把 2036 年公眾持有聯邦債務寫成 **120% GDP**。[Fed H.15](https://www.federalreserve.gov/releases/h15/)、[CBO Budget and Economic Outlook](https://www.cbo.gov/publication/61882)

10 年美債停在 4.34%、2036 債務走向 120% GDP 時，美債長端反映通膨重燃，還是財政耐受度重新定價？

判斷線放在三個數字：10 年名目殖利率、CBO 淨利息支出占 GDP、遠期通膨補償是否穩定。2026-04-29 的 Fed 會議、Treasury 下一次借款估計、以及 5 月通膨資料，會把這條線從會前框架推向實際驗證。

## 4.34%、3.3% 與 120% 指向風險溢價

<aside style="float: right; width: 240px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>期限溢價</strong>：投資人持有長天期債券時，要求補償久期、供給與不確定性的額外報酬。<br>
<strong>NBFI</strong>：非銀行金融中介，包含基金、保險、私募信貸與其他銀行外資金管道。
</aside>

第一種解釋是通膨重燃。這條線有短期證據：能源 shock 與 2025 年關稅仍會推高 headline inflation，IMF 也把全球能源價格列為美國通膨上行風險。[IMF U.S. Article IV](https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult) 但 Fed 的 Daniel Covitz 與 Eric Engstrom 在 2026-02-12 指出，遠期通膨補償與長期通膨預期近年仍接近 2%，遠期通膨風險溢價維持穩定。[Fed FEDS Notes](https://www.federalreserve.gov/econres/notes/feds-notes/why-have-far-forward-nominal-treasury-rates-increased-so-much-in-the-past-few-years-20260212.html)

第二種解釋是實質風險溢價上升。Fed 這份研究把 9 到 10 年遠期利率的上升，歸因於供給 shock 風險與未來聯邦赤字疑慮，並指出總遠期風險溢價位於 1971 年以來約第 85 百分位，近年上升約 **200 bps**。[Fed FEDS Notes](https://www.federalreserve.gov/econres/notes/feds-notes/why-have-far-forward-nominal-treasury-rates-increased-so-much-in-the-past-few-years-20260212.html) 這個說法把 10 年債從 Fed 降息日曆，推進到財政耐受度與供給 shock 的保險費。

第三種解釋是近端發債供給。Treasury 在 2026-02-02 估計 2026 年 1-3 月私人持有淨可流通借款為 **5,740 億美元**，4-6 月估計降到 **1,090 億美元**。[U.S. Treasury](https://home.treasury.gov/news/press-releases/sb0377) 眼前壓力較少來自單季拍賣牆；CBO 的中期路徑才是更大的分母。CBO 把 2026 年淨利息支出寫成 **3.3% GDP**，2036 年寫成 **4.6% GDP**，並指出 2036 年淨利息將接近所有聯邦支出的五分之一。[CBO PDF](https://www.cbo.gov/system/files/2026-02/61882-Outlook-2026.pdf)

圖表採用 CBO 的 GDP 占比口徑。殖利率是年化市場利率，財政比率是 GDP 占比，兩者分開解讀。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260427TreasuryFiscal"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260427TreasuryFiscal'), {
  type: 'bar',
  data: {
    labels: ['公眾持有債務', '總赤字', '淨利息支出', '總支出'],
    datasets: [
      {
        label: '2026 (% GDP)',
        data: [101, 5.8, 3.3, 23.3],
        backgroundColor: 'rgba(37, 99, 235, 0.72)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 1.2
      },
      {
        label: '2036 (% GDP)',
        data: [120, 6.7, 4.6, 24.4],
        backgroundColor: 'rgba(220, 38, 38, 0.72)',
        borderColor: 'rgba(220, 38, 38, 1)',
        borderWidth: 1.2
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CBO 2026-2036 財政比率（資料來源：CBO Budget and Economic Outlook, Feb. 2026）'
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

| 式子 | 單位 | 口徑說明 |
|---|---:|---|
| 120 - 101 = 19 | 百分點 | CBO 公眾持有聯邦債務占 GDP，2036 對 2026 的增量 |
| 4.6 - 3.3 = 1.3 | 百分點 | CBO 淨利息支出占 GDP，2036 對 2026 的增量 |
| 24.4 - 17.8 = 6.6 | 百分點 | CBO 2036 支出與收入占 GDP 差距，四捨五入後接近 6.7% 赤字 |
| 574 - 109 = 465 | 十億美元 | Treasury 估計 2026Q1 對 2026Q2 私人持有淨可流通借款差額 |

CBO 在 2026-04-21 的敏感度報告提供更直接的 fine print：利率每年比基準高 **0.1 個百分點**，且其他變數維持基準，2027-2036 累積赤字會增加 **3,790 億美元**。[CBO economic sensitivity](https://www.cbo.gov/publication/62257) 這個數字說明財政風險具有回饋效果，利率小幅偏高會透過淨利息支出放大到十年赤字。

全球背景也支持這個判斷。IMF 2026 年 4 月 Fiscal Monitor 把全球公債寫成 2025 年接近 **94% GDP**，並預估 2029 年達 **100% GDP**；報告同時指出，槓桿型非銀行金融中介與美債安全溢價侵蝕會放大主權債重新定價。[IMF Fiscal Monitor](https://www.imf.org/en/publications/fm/issues/2026/04/15/fiscal-monitor-april-2026) BOJ 2026 年 4 月金融系統報告也把外國 NBFI、地緣風險與高科技股調整風險列入監測，亞洲金融系統正在觀察這條全球長端利率傳導鏈。[BOJ Financial System Report](https://www.boj.or.jp/en/research/brp/fsr/fsr260421.htm)

反方約束同樣存在。IMF U.S. Article IV 預期美國 2026 年 GDP q4/q4 成長 **2.4%**，並預期 core PCE inflation 在 2027 上半年回到 2%；Treasury 估計 2026Q2 淨可流通借款低於 Q1。[IMF U.S. Article IV](https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult)、[U.S. Treasury](https://home.treasury.gov/news/press-releases/sb0377) 這些資料把結論限制在「財政耐受度重定價」。

## 4 月 29 日到 5 月資料會決定壓力停在哪一層

如果 2026-04-29 Fed 會後文字維持長期通膨信心，且 Fed H.15 的 10 年殖利率連續 **2** 週回到 **4.20%** 以下，→ 長端壓力會降回 Fed 路徑與能源 headline 管理，財政風險溢價權重下降。[Fed H.15](https://www.federalreserve.gov/releases/h15/)、[Fed FEDS Notes](https://www.federalreserve.gov/econres/notes/feds-notes/why-have-far-forward-nominal-treasury-rates-increased-so-much-in-the-past-few-years-20260212.html)

如果 10 年殖利率連續 **10** 個交易日高於 **4.50%**，同時 Treasury 估計 Q2 或 Q3 私人持有淨可流通借款升到 **3,000 億美元** 以上，→ 市場會把壓力從遠期風險溢價推進到近端供給吸收能力。[U.S. Treasury](https://home.treasury.gov/news/press-releases/sb0377)

如果 5 月通膨資料顯示 core PCE 或 core CPI 連續 **2** 個月重新加速，且 Fed 研究所描述的遠期通膨補償脫離 2% 附近，→ 長端利率框架需要把通膨風險溢價重新納入中心。[Fed FEDS Notes](https://www.federalreserve.gov/econres/notes/feds-notes/why-have-far-forward-nominal-treasury-rates-increased-so-much-in-the-past-few-years-20260212.html)、[IMF U.S. Article IV](https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult)

如果 CBO 下次更新把 2026-2036 淨利息支出占 GDP 路徑再上修 **0.3 個百分點** 以上，或把 2036 公眾持有債務推過 **123% GDP**，→ 美債長端會更像財政耐受度測試，短端降息對 10 年債的解釋力會繼續下降。[CBO Budget and Economic Outlook](https://www.cbo.gov/publication/61882)、[CBO economic sensitivity](https://www.cbo.gov/publication/62257)

## 結語

> **核心判斷：** 美債長端目前更像財政耐受度與實質風險溢價的測試；通膨預期穩定時，4% 以上的 10 年債殖利率仍能維持高位。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 10-year Treasury yield | 連續 `10` 個交易日高於 `4.50%` | 觀察 Fed H.15 至 2026-05-17 | 財政與供給風險溢價升權，Fed 短端路徑解釋力下降 |
| Treasury marketable borrowing | 下一次借款估計連續 `2` 季高於 `3,000 億美元` | 觀察 2026Q2-Q3 Treasury borrowing estimates | 近端供給吸收能力取代中期財政路徑，成為長端利率主線 |
| CBO net interest path | 下次 CBO 更新把 2036 淨利息支出占 GDP 上修 `0.3` 個百分點以上 | 觀察 CBO 2026 年後續 budget update | 財政回饋機制加速，風險溢價框架需要上修 |
| Core inflation trend | core PCE 或 core CPI 連續 `2` 個月重新加速，且遠期通膨補償脫離 2% 附近 | 觀察 2026-05 至 2026-06 通膨資料與 Fed 研究更新 | 通膨風險溢價重新進入長端利率中心 |

後續觀察三個變數。第一是 Fed H.15 的 10 年與 20 年殖利率，這會驗證長端壓力是否留在實質風險溢價。第二是 Treasury 借款估計與季度再融資文件，這會驗證近端供給是否開始取代中期財政。第三是 CBO 淨利息與債務占 GDP 路徑，這會驗證財政耐受度是否繼續壓住長端利率。

---

*資料來源：[Fed H.15](https://www.federalreserve.gov/releases/h15/)、[CBO Budget and Economic Outlook](https://www.cbo.gov/publication/61882)、[CBO Budget and Economic Outlook PDF](https://www.cbo.gov/system/files/2026-02/61882-Outlook-2026.pdf)、[CBO economic sensitivity](https://www.cbo.gov/publication/62257)、[Fed FEDS Notes](https://www.federalreserve.gov/econres/notes/feds-notes/why-have-far-forward-nominal-treasury-rates-increased-so-much-in-the-past-few-years-20260212.html)、[U.S. Treasury](https://home.treasury.gov/news/press-releases/sb0377)、[IMF Fiscal Monitor](https://www.imf.org/en/publications/fm/issues/2026/04/15/fiscal-monitor-april-2026)、[IMF U.S. Article IV](https://www.imf.org/en/news/articles/2026/04/01/pr-26102-usa-imf-executive-board-concludes-2026-article-iv-consult)、[BOJ Financial System Report](https://www.boj.or.jp/en/research/brp/fsr/fsr260421.htm)*
*市場與官方數據截至：2026-04-24（Fed H.15） / 2026-04-21（CBO sensitivity report） / 2026-04-15（IMF Fiscal Monitor） / 2026-02-11（CBO Budget Outlook）*
*本文僅供參考，不構成投資建議。*
