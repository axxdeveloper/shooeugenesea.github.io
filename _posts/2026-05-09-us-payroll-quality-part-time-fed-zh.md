---
layout: post
title: "11.5 萬非農守住表面，4.942 百萬兼職把品質拉進 Fed 判讀"
date: 2026-05-09 23:53:00 +0800
categories: [macro]
tags: [macro, employment, fed, services, inflation]
macro_kind: short
description: "BLS 4 月非農新增 11.5 萬，失業率維持 4.3%，家戶調查顯示經濟理由兼職升至 4.942 百萬。Fed 需要把 payroll headline、就業品質與服務價格放進一張表判讀。"
lang: zh-TW
---

## 11.5 萬非農守住表面

BLS 2026 年 5 月 8 日發布美國 4 月非農新增 **115,000**，失業率維持 **4.3%**。[BLS](https://www.bls.gov/news.release/empsit.nr0.htm) 這兩個 headline 把勞動市場放在穩定區間，家戶調查把工時品質推上判讀桌。[BLS Table A-8](https://www.bls.gov/news.release/empsit.t08.htm)

11.5 萬新增就業如何改變 Fed 對勞動市場品質的判讀？

判讀順序由 payroll headline、家戶品質、服務價格三層構成。2026 年 5 月 12 日的消費者物價指數 (CPI) 會檢查價格約束，2026 年 6 月 5 日的下一份非農會檢查兼職經濟理由與勞參率。[BLS CPI schedule](https://www.bls.gov/schedule/news_release/cpi.htm)、[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)

## 統計界線與家戶品質一起改變 Fed 權重

BLS FAQ 把企業機構調查的月變化統計顯著門檻寫在約 **122,000**，家戶調查的月變化門檻寫在約 **650,000**。[BLS FAQ](https://www.bls.gov/news.release/empsit.faq.htm) 4 月非農 `+115k` 接近企業機構調查門檻，單月 headline 的訊號層級落在溫和穩定。

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 勞動市場仍有底部 | 非農 `+115k`，失業率 `4.3%`，health care `+37k`、transportation and warehousing `+30k`、retail trade `+22k` | 高 |
| 就業品質變薄 | labor force participation rate `61.8%`，employment-population ratio `59.1%`，part time for economic reasons `4.942m` | 高 |
| Fed 受服務價格約束 | ISM Services PMI `53.6`，Employment `48.0`，Prices `70.7` | 高 |

穩定解讀有具名支撐。ADP 2026 年 5 月 6 日發布 private sector employment 增加 **109,000**，annual pay 增加 **4.4%**；ADP Chief Economist Nela Richardson 指出小型與大型雇主仍在補人，中型雇主較軟。[ADP](https://adp-ri-nrip-static.adp.com/artifacts/us_ner/20260506/ADP_NATIONAL_EMPLOYMENT_REPORT_Press_Release_2026_04%20FINAL.pdf) Axios Macro 2026 年 5 月 8 日引用 NerdWallet senior economist Elizabeth Renter 的穩定觀點，並列出 25 至 54 歲 prime-age participation rate 維持 **83.8%**。[Axios Macro](https://www.axios.com/newsletters/axios-macro-00e3fd60-4adf-11f1-a840-419e3321da1a)

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260509PayrollQuality"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260509PayrollQuality'), {
  type: 'bar',
  data: {
    labels: ['2026-02', '2026-03', '2026-04'],
    datasets: [
      {
        type: 'bar',
        label: '非農新增就業（千人）',
        data: [-156, 185, 115],
        backgroundColor: ['rgba(220, 38, 38, 0.72)', 'rgba(37, 99, 235, 0.72)', 'rgba(37, 99, 235, 0.72)'],
        borderColor: ['rgba(220, 38, 38, 1)', 'rgba(37, 99, 235, 1)', 'rgba(37, 99, 235, 1)'],
        borderWidth: 1.2,
        yAxisID: 'y'
      },
      {
        type: 'line',
        label: '經濟理由兼職（百萬人）',
        data: [4.396, 4.497, 4.942],
        borderColor: 'rgba(245, 158, 11, 1)',
        backgroundColor: 'rgba(245, 158, 11, 0.18)',
        tension: 0.25,
        pointRadius: 4,
        yAxisID: 'y1'
      }
    ]
  },
  options: {
    responsive: true,
    interaction: { mode: 'index', intersect: false },
    plugins: {
      title: {
        display: true,
        text: '美國就業 headline 與品質指標（資料來源：BLS 2026-05-08）'
      }
    },
    scales: {
      y: {
        position: 'left',
        title: { display: true, text: '非農新增就業（千人）' }
      },
      y1: {
        position: 'right',
        title: { display: true, text: '經濟理由兼職（百萬人）' },
        grid: { drawOnChartArea: false }
      }
    }
  }
});
</script>

家戶調查把品質權重拉高。BLS 把 labor force participation rate 寫成 **61.8%**，employment-population ratio 寫成 **59.1%**；Table A-8 把 part time for economic reasons 寫成 **4.942** 百萬，月增 **445,000**。[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)、[BLS Table A-8](https://www.bls.gov/news.release/empsit.t08.htm) 這組數字代表家庭端工時與現金流品質進入 Fed 的就業判讀。

產業結構把穩定性集中在少數板塊。BLS 把 health care 寫成 **+37,000**，transportation and warehousing 寫成 **+30,000**，retail trade 寫成 **+22,000**；federal government 寫成 **-9,000**，information 寫成 **-13,000**。[BLS](https://www.bls.gov/news.release/empsit.nr0.htm) Information employment 自 2022 年 11 月高點以來減少 **342,000**，這條線把科技與媒體相關職缺壓力留在就業品質背景裡。[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)

服務價格給 Fed 留下另一個限制。ISM Services PMI 4 月位於 **53.6**，Employment Index 位於 **48.0**，Prices Index 維持 **70.7**，Prices 重複 2022 年 10 月以來高點。[ISM](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/) Fed 2026 年 4 月 29 日 statement 寫出 job gains remained low、unemployment little changed、inflation elevated，並維持 **3.50%-3.75%** 的政策利率區間。[Federal Reserve](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)

## CPI 與下一份就業會重排權重

如果 2026 年 5 月 12 日的 April CPI 顯示核心 CPI 月增低於 **0.2%**，且 2026 年 6 月 3 日 ISM Services Prices 跌破 **65**，→ Fed 會把 `+115k` 解讀為就業守住表面，政策焦點會往成長品質移動。[BLS CPI schedule](https://www.bls.gov/schedule/news_release/cpi.htm)、[ISM](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/)

如果 2026 年 6 月 5 日的 May Employment Situation 讓 part time for economic reasons 連續站上 **5.0** 百萬，且 labor force participation rate 跌破 **61.7%**，→ household quality 會升權，失業率 `4.3%` 的穩定訊號會折價。[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)

如果 payrolls 連續兩個月維持 **125,000** 以上，且 part time for economic reasons 回落到 **4.7** 百萬以下，→ 4 月品質壓力會被歸入單月波動，勞動市場穩定框架會升權。[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)

## 結語

> **核心判斷：** 美國勞動市場用 11.5 萬非農守住表面，4.942 百萬經濟理由兼職把 household quality 拉進 Fed 的下一輪判讀。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Part time for economic reasons | `>5.0m` 連續 `2` 個月 | 觀察 2026-06-05 與 2026-07 非農 | household quality 轉弱框架升權 |
| Labor force participation rate | `<61.7%` 連續 `2` 個月 | 觀察 2026-06-05 與 2026-07 非農 | 失業率穩定訊號折價 |
| Services Prices Index | `>70` 連續 `3` 個月 | 觀察 2026-06-03 ISM Services | Fed 價格防線維持高位 |
| Nonfarm payrolls | `>125k` 連續 `2` 個月，且兼職經濟理由 `<4.7m` | 觀察 2026-06-05 與 2026-07 非農 | 勞動市場穩定框架升權 |

觀察變數有三個。2026 年 5 月 12 日 CPI 會檢查價格壓力是否約束 Fed。[BLS CPI schedule](https://www.bls.gov/schedule/news_release/cpi.htm) 2026 年 6 月 3 日 ISM Services 會把服務業 Employment 與 Prices 放進一張表。[ISM](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/) 2026 年 6 月 5 日 May Employment Situation 會確認 `4.942m` 經濟理由兼職屬於單月波動或連續壓力。[BLS](https://www.bls.gov/news.release/empsit.nr0.htm)

---

*資料來源：[BLS Employment Situation, April 2026](https://www.bls.gov/news.release/empsit.nr0.htm)、[BLS Table A-8](https://www.bls.gov/news.release/empsit.t08.htm)、[BLS FAQ](https://www.bls.gov/news.release/empsit.faq.htm)、[BLS CPI release schedule](https://www.bls.gov/schedule/news_release/cpi.htm)、[ISM Services PMI, April 2026](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/)、[Federal Reserve FOMC statement, 2026-04-29](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260429a.htm)、[ADP National Employment Report, April 2026](https://adp-ri-nrip-static.adp.com/artifacts/us_ner/20260506/ADP_NATIONAL_EMPLOYMENT_REPORT_Press_Release_2026_04%20FINAL.pdf)、[Axios Macro, 2026-05-08](https://www.axios.com/newsletters/axios-macro-00e3fd60-4adf-11f1-a840-419e3321da1a)*
*市場與官方數據截至：2026-05-09 23:53（Asia/Taipei）。*
*本文僅供參考，不構成投資建議。*
