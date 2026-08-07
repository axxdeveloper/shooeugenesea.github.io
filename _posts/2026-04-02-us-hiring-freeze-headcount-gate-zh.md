---
layout: post
title: "6.882m 職缺還在、62k ADP 已放慢：美國企業先收招募，裁員指標仍留低位"
date: 2026-04-02 12:07:10 +0800
categories: [macro]
tags: [macro, employment, inflation, consumption, energy]
macro_kind: short
description: "BLS 3 月 31 日公布 2 月 JOLTS 職缺 688.2 萬、hires 484.9 萬，ADP 4 月 1 日公布 3 月民間就業只增 6.2 萬，ISM 製造業就業指數則留在 48.7。美國企業先收招募速度，裁員鏈條仍由 21 萬初領失業金與 181.9 萬持續領取人數維持穩定。"
lang: zh-TW
---

## 6.882m、62k 與 48.7 把 4 月非農前夕切成兩層

BLS 把 2 月 JOLTS 職缺寫成 **6.882 million**，ADP 把 3 月民間就業寫成 **62,000**。[BLS JOLTS](https://www.bls.gov/news.release/pdf/jolts.pdf) [ADP](https://adpemploymentreport.com/)

`6.882m` 職缺、`62k` ADP 與 `48.7` 的 ISM 就業指數同時出現時，美國企業正在進入招募凍結，還是 4 月非農前的等待期？

這個框架把勞動市場拆成招募端與裁員端。`225k` 的初領失業金門檻、`100` 的 HWOL 指數、`2026-04-03` 的非農日期，會把企業等待期與需求轉弱切開。[DOL](https://www.dol.gov/newsroom/releases/eta/eta20260326) [HWOL](https://www.conference-board.org/pdf_free/press/HWOL%20PR_Mar_11_2026.pdf) [BLS schedule](https://www.bls.gov/schedule/news_release/empsit.htm)

## 招募先收，裁員指標留在低位

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 企業先收招募速度 | JOLTS openings 由 `7.240m` 降到 `6.882m`，hires 由 `5.347m` 降到 `4.849m`，hires rate 掉到 `3.1%` | 很高 |
| 成本 shock 正在改寫人力配置 | ISM prices `78.3`、supplier deliveries `58.9`、`55%` 受訪企業採用 head count management；ADP 的 `trade/transportation/utilities` 減少 `58k`、manufacturing 減少 `11k` | 很高 |
| 裁員鏈條仍留在穩定區 | DOL initial claims `210k`、insured unemployment `1.819m`；Conference Board labor differential 升到 `+5.8`；HWOL 指數升到 `103.7` | 高 |

BLS 把招募收縮寫得很直接。2 月 JOLTS job openings 由 1 月修正值 **7.240 million** 降到 **6.882 million**，hires 由 **5.347 million** 降到 **4.849 million**，hires rate 也降到 **3.1%**，這是 **2020-04** 以來最低值。[BLS JOLTS](https://www.bls.gov/news.release/pdf/jolts.pdf)

<aside style="float: right; width: 230px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>JOLTS</strong>：BLS 的職缺、招募與離職調查。<br>
<strong>HWOL</strong>：The Conference Board 與 Lightcast 依線上職缺建立的勞動需求指標。
</aside>

ADP 補上了企業端的人力分配。3 月民間就業只增加 **62,000**，小型企業 `1-19` 人級距增加 **112,000**，`trade/transportation/utilities` 減少 **58,000**，manufacturing 減少 **11,000**；Nela Richardson 仍把這組數字定義為整體 hiring 維持穩定，因為教育醫療增加 **58,000**，job-stayers pay growth 也留在 **4.5%**。[ADP](https://adpemploymentreport.com/) [ADP press release](https://adp-ri-nrip-static.adp.com/artifacts/us_ner/20260401/ADP_NATIONAL_EMPLOYMENT_REPORT_Press_Release_2026_03%20FINAL.pdf)

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260402HiringFreeze"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260402HiringFreeze'), {
  type: 'bar',
  data: {
    labels: ['Job openings', 'Hires', 'Quits'],
    datasets: [
      {
        label: '2026-01',
        data: [7.24, 5.347, 3.1],
        backgroundColor: 'rgba(148, 163, 184, 0.72)',
        borderColor: 'rgba(148, 163, 184, 1)',
        borderWidth: 1.2
      },
      {
        label: '2026-02',
        data: [6.882, 4.849, 3.0],
        backgroundColor: 'rgba(180, 83, 9, 0.78)',
        borderColor: 'rgba(180, 83, 9, 1)',
        borderWidth: 1.2
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'JOLTS：2026 年 1-2 月招募端先降速（資料來源：BLS 2026-03-31）'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: '百萬人'
        }
      }
    }
  }
});
</script>

ISM 把招募保守的成因補完整。3 月 manufacturing PMI 升到 **52.7**，production 升到 **55.1**，employment 卻留在 **48.7**；prices index 衝到 **78.3**，supplier deliveries 升到 **58.9**，`55%` 受訪企業把管理現有人頭視為常態，`64%` 的評論偏負面，其中約 `20%` 提到 tariffs，約 `40%` 提到 Middle East war。[ISM](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/march/) **TD Economics 的 Admir Kolaj** 因此把 3 月擴張定義為 fragile expansion，因為企業生產仍在前進，成本與交期壓力已經開始壓縮擴張意願。[TD Economics](https://economics.td.com/us-ism-manufacturing-index)

裁員端則維持在穩定區。DOL 在 `2026-03-26` 發布的週報把初領失業金寫成 **210,000**，4 週均值 **210,500**，insured unemployment 則降到 **1.819 million**；The Conference Board 把 3 月 consumer confidence 寫成 **91.8**，present situation index 升到 **123.3**，labor market differential 也升到 **+5.8**。同一套研究架構下，HWOL 指數在 2 月升到 **103.7**，全美線上職缺總量來到 **7.240 million**。[DOL](https://www.dol.gov/newsroom/releases/eta/eta20260326) [The Conference Board](https://www.conference-board.org/topics/consumer-confidence/) [HWOL](https://www.conference-board.org/pdf_free/press/HWOL%20PR_Mar_11_2026.pdf)

目前最被資料支持的版本很清楚。美國企業先把新職缺與招聘速度往下收，並把人力需求集中在醫療與小型企業；裁員鏈條仍留在低位，整體勞動市場仍由等待期主導。這條線與 3 月 29 日那篇家庭文可以接成同一條鏈：家庭先補緩衝，企業先收招募，需求與裁員都還在下一個驗證窗裡。[前文](/2026/03/29/us-saving-rate-buffer-spending-zh/)

## 4 月 3 日與 4 月 8 日會把等待期切開

如果 `2026-04-03` 的非農新增就業回到 **100k** 上方、失業率留在 **4.4%** 或以下、initial claims 留在 **225k** 下方，→ 企業等待期會續留，3 月這組數字先代表招募節奏管理。[BLS schedule](https://www.bls.gov/schedule/news_release/empsit.htm) [DOL](https://www.dol.gov/newsroom/releases/eta/eta20260326)

如果 `2026-04-03` 的非農貼近 **0**，`2026-04-08` 的 HWOL 指數又回到 **100** 下方，→ 招募凍結會由部門題擴成總量題，企業對外部成本與需求的保守感會同步升權。[HWOL](https://www.conference-board.org/pdf_free/press/HWOL%20PR_Mar_11_2026.pdf) [BEA schedule](https://www.bea.gov/news/schedule)

如果 initial claims 連 **4** 週站上 **225k**、`2026-05-05` 公布的 3 月 JOLTS hires 再留在 **4.8 million** 附近，→ 裁員鏈條會開始接手，今天的等待期框架需要全面重評。[DOL](https://www.dol.gov/newsroom/releases/eta/eta20260326) [BLS JOLTS](https://www.bls.gov/news.release/pdf/jolts.pdf)

## 結語

> **核心判斷：** 美國企業目前先收招募，勞動市場由等待期主導；`claims` 是否持續上穿 `225k` 與非農是否續留正值，決定這條線停在等待期還是滑向需求轉弱。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Initial claims | `>225k` 且連 `4` 週 | 觀察 `2026-04-02` 至 `2026-04-23` 的每週四 DOL 發布 | 裁員鏈條升權，等待期框架降權 |
| Nonfarm payroll + unemployment rate | payroll `<=0` 且連 `2` 次、失業率 `>=4.5%` | 觀察 `2026-04-03` 與 `2026-05-01` 的 BLS Employment Situation | 勞動市場由招募放慢轉成總量走弱 |
| HWOL + JOLTS hires | HWOL 指數 `<100`，且 3 月 JOLTS hires `<=4.8m` | 觀察 `2026-04-08` 的 HWOL 與 `2026-05-05` 的 JOLTS | 勞動需求與實際招聘同步降速，企業等待期進入廣泛收縮 |

後續觀察變數有三個。第一個變數是 `2026-04-03` 的非農新增就業，這條線會回答等待期是否保留正成長。第二個變數是每週 `initial claims`，這條線會回答裁員鏈條何時接手。第三個變數是 `2026-04-08` 的 HWOL 與 `2026-05-05` 的 JOLTS hires，這組資料會回答企業對外職缺與實際招募是否同步再降。[BLS schedule](https://www.bls.gov/schedule/news_release/empsit.htm) [DOL](https://www.dol.gov/newsroom/releases/eta/eta20260326) [HWOL](https://www.conference-board.org/pdf_free/press/HWOL%20PR_Mar_11_2026.pdf) [BLS JOLTS](https://www.bls.gov/news.release/pdf/jolts.pdf)

---

*資料來源：[BLS JOLTS](https://www.bls.gov/news.release/pdf/jolts.pdf)、[ADP jobs report](https://adpemploymentreport.com/)、[ADP press release](https://adp-ri-nrip-static.adp.com/artifacts/us_ner/20260401/ADP_NATIONAL_EMPLOYMENT_REPORT_Press_Release_2026_03%20FINAL.pdf)、[ISM March 2026 Manufacturing PMI](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/march/)、[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260326)、[The Conference Board Consumer Confidence](https://www.conference-board.org/topics/consumer-confidence/)、[HWOL Index](https://www.conference-board.org/pdf_free/press/HWOL%20PR_Mar_11_2026.pdf)、[TD Economics](https://economics.td.com/us-ism-manufacturing-index)、[FRED VIX](https://fred.stlouisfed.org/data/VIXCLS)、[FRED HY OAS](https://fred.stlouisfed.org/data/BAMLH0A0HYM2)、[FRED SP500](https://fred.stlouisfed.org/graph/fredgraph.csv?id=SP500)、[FRED Brent](https://fred.stlouisfed.org/data/DCOILBRENTEU)*
*市場數據截至：2026-04-01（S&P 500、ADP、ISM） / 2026-03-31（VIX、HY OAS、JOLTS、Conference Board confidence） / 2026-03-30（Brent） / 2026-03-26（DOL claims release） / 2026-03-11（HWOL February 2026 release）*
*本文僅供參考，不構成投資建議。*
