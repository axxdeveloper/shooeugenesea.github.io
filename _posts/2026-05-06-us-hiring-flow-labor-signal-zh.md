---
layout: post
title: "555 萬人被聘，職缺卻留在 690 萬：美國就業訊號改看流量"
date: 2026-05-06 12:20:00 +0800
categories: [macro]
tags: [macro, employment, fed, inflation, services]
macro_kind: short
description: "BLS 5 月 5 日公布 March JOLTS，hires 升至 5.554 million，job openings 留在 6.866 million；同日 ISM Services 顯示 April Employment 48.0、Prices 70.7。這組資料把 Friday payrolls 的判讀從單月新增就業轉向 hiring flow、participation 與服務價格。"
lang: zh-TW
---

## 555 萬人被聘，開缺留在 690 萬

BLS 在 `2026-05-05` 公布 March JOLTS：美國企業 hires 升至 **5.554 million**，job openings 留在 **6.866 million**。[BLS JOLTS](https://www.bls.gov/news.release/jolts.nr0.htm) 當日 ISM Services 把 April Employment 寫成 `48.0`，Prices 寫成 `70.7`，服務業仍擴張但用工仍在收縮區。[ISM Services](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/)

**3 月 hiring 跳升代表美國勞動市場重新加速，還是代表企業在供給受限下補人？**

這個問題要用 stock、flow、rate 三種口徑一起看。`2026-05-09` 台北時間公布的 April payrolls 會給出下一個校準點；單月新增就業需要和 hiring rate、ISM employment、labor force participation 放進共同表格判讀。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm?popup=false)

## Hiring flow 先反彈，開缺與裁員仍保守

JOLTS 的細節支持「流量回補」這個解釋。Hires 從 February 的 `4.899 million` 升到 March 的 `5.554 million`，增加 `655k`；total separations 從 `5.022 million` 升到 `5.378 million`，layoffs and discharges 從 `1.714 million` 升到 `1.867 million`。[BLS JOLTS](https://www.bls.gov/news.release/jolts.nr0.htm) 企業補人的動作變快，裁員也跟著增加，turnover 回升帶有雙向流動。

口徑聲明：JOLTS openings 是月底仍開放職位的 stock，hires 與 separations 是整月人員流動的 flow，ISM Employment 是 diffusion index，`50` 以上代表擴張、`50` 以下代表收縮。圖表使用 JOLTS levels，單位全部轉成 million，diffusion index 和人數採用分軸處理。

| 核心錨點 | 式子 | 單位 | 口徑 |
|---|---:|---|---|
| March turnover balance | `5.554 - 5.378 = +0.176` | million | Hires 減 total separations |
| Openings per unemployed worker | `6.866 / 7.239 = 0.95` | ratio | JOLTS openings 除以 CPS unemployed persons |
| ISM employment distance | `48.0 - 50.0 = -2.0` | diffusion points | Services Employment 距離擴張線 |
| ISM prices distance | `70.7 - 50.0 = +20.7` | diffusion points | Services Prices 距離中性線 |

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260506HiringFlow"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260506HiringFlow'), {
  type: 'line',
  data: {
    labels: ['2025-04', '2025-05', '2025-06', '2025-07', '2025-08', '2025-09', '2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03'],
    datasets: [
      {
        label: 'Job openings, million',
        data: [7.098, 7.310, 7.204, 7.089, 6.919, 7.169, 7.170, 6.846, 6.550, 7.240, 6.922, 6.866],
        borderColor: 'rgba(37, 99, 235, 1)',
        backgroundColor: 'rgba(37, 99, 235, 0.14)',
        borderWidth: 2,
        tension: 0.25
      },
      {
        label: 'Hires, million',
        data: [5.391, 5.328, 5.327, 5.225, 5.145, 5.244, 5.180, 5.019, 5.272, 5.347, 4.899, 5.554],
        borderColor: 'rgba(16, 185, 129, 1)',
        backgroundColor: 'rgba(16, 185, 129, 0.14)',
        borderWidth: 2,
        tension: 0.25
      },
      {
        label: 'Layoffs and discharges, million',
        data: [1.818, 1.671, 1.843, 1.772, 1.832, 1.816, 1.891, 1.660, 1.666, 1.660, 1.714, 1.867],
        borderColor: 'rgba(220, 38, 38, 1)',
        backgroundColor: 'rgba(220, 38, 38, 0.14)',
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
        text: 'JOLTS openings, hires, layoffs: Apr 2025-Mar 2026 (source: BLS)'
      }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) { return value + 'm'; }
        }
      }
    }
  }
});
</script>

第二個解釋來自服務業。ISM Services PMI 在 April 仍有 `53.6`，但 Employment `48.0` 連續第二個月低於 `50`，Prices `70.7` 則把成本壓力留在高檔。[ISM Services](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/) 服務業公司仍有訂單與活動，企業對增聘保持保守，能源與運輸成本使 Fed 把就業波動和通膨資料一起讀。

第三個解釋來自勞動供給。Fed staff 在 `2026-04-02` FEDS Note 指出，2026 年 breakeven employment growth 可能低到每月 `10k` 以下；San Francisco Fed 的 Mary C. Daly 也把 job growth alone 的訊號品質降權。[Fed FEDS Note](https://www.federalreserve.gov/econres/notes/feds-notes/labor-force-growth-breakeven-employment-and-potential-gdp-growth-20260402.html)、[SF Fed](https://www.frbsf.org/research-and-insights/blog/sf-fed-blog/2026/04/03/monetary-policy-in-a-slow-to-no-growth-labor-market/) 這會讓 `+178k` payrolls 看起來很強，也會讓 `+57k` 類型的市場預期仍可能和穩定失業率並存。

歐洲與台灣資料提供背景。Eurostat 公布 March euro area unemployment 為 `6.2%`，EU 為 `6.0%`；台灣主計總處公布 March unemployment 為 `3.34%`，seasonally adjusted unemployment 為 `3.35%`。[Eurostat](https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/3-30042026-cp)、[DGBAS](https://eng.dgbas.gov.tw/News_Content.aspx?n=4438&s=236184) 全球主要勞動市場仍維持低失業率環境，美國資料的特殊性在於 hiring flow、低勞動供給增速、服務價格三者同時存在。

## Friday payrolls 需要三個條件一起校準

如果 `2026-05-09` 台北時間公布的 April payrolls 低於 `75k`，且 unemployment rate 維持 `4.3%` 附近，→ 市場會把低 payrolls 讀成 labor supply speed limit，Fed 的就業惡化訊號會被延後確認。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm?popup=false)

如果 April labor force participation 連續第二個月低於 `62.0%`，且 unemployed persons 月增低於 `100k`，→ payrolls 的單月波動會被降權，JOLTS hiring rate 與 quits rate 會取得更高訊號權重。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm?popup=false)

如果 May ISM Services Employment 回到 `50` 以上，同時 Prices 仍高於 `65`，→ 服務業需求會重新支持 Fed 的耐心口徑，10 年期美債會更直接反映服務價格與薪資壓力。[ISM Services](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/)、[U.S. Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)

## 結語

> **核心判斷：** JOLTS 的 March hiring surge 把美國就業從「新增就業數」推向「流量、參與率、服務價格」三變數框架；payrolls 單獨使用會高估單月數字的訊號品質。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Payrolls + unemployment | April 與 May payrolls 連續 `2` 次 `<75k`，且 unemployment rate 連續 `2` 次 `>=4.5%` | 觀察 `2026-05-09` 與 `2026-06-05` Employment Situation | 勞動市場從供給受限轉向需求放緩，Fed 就業 mandate 的權重上升 |
| Hiring rate + quits rate | JOLTS hiring rate 連續 `2` 次 `>=3.5%`，且 quits rate 連續 `2` 次 `>=2.0%` | 觀察 `2026-06-02` 與 `2026-07-01` JOLTS | March hiring surge 取得延續性，low-hire equilibrium 需要下修 |
| ISM Services Employment + Prices | Employment 連續 `2` 次 `>=50`，且 Prices 連續 `2` 次 `>=65` | 觀察 `2026-06-03` 與 `2026-07-06` ISM Services | 服務業需求韌性與價格壓力同時存在，Fed 降息語氣擴大空間下降 |

觀察三個變數很直接。第一個是 `2026-05-09` 台北時間公布的 April payrolls 與 participation，它會回答低新增就業是需求問題還是勞動供給上限。第二個是 `2026-06-02` JOLTS hiring rate，它會回答 March 的 `655k` hires jump 是否延續。第三個是 ISM Services Prices 是否留在 `65` 以上，它會回答服務業成本壓力是否仍壓住 Fed 的反應函數。[BLS JOLTS](https://www.bls.gov/news.release/jolts.nr0.htm)、[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm?popup=false)、[ISM Services](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/)

---

*資料來源：[BLS JOLTS](https://www.bls.gov/news.release/jolts.nr0.htm)、[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm?popup=false)、[ISM Services](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/services/april/)、[Fed FEDS Note](https://www.federalreserve.gov/econres/notes/feds-notes/labor-force-growth-breakeven-employment-and-potential-gdp-growth-20260402.html)、[SF Fed](https://www.frbsf.org/research-and-insights/blog/sf-fed-blog/2026/04/03/monetary-policy-in-a-slow-to-no-growth-labor-market/)、[U.S. Treasury](https://home.treasury.gov/resource-center/data-chart-center/interest-rates/TextView?field_tdr_date_value=2026&type=daily_treasury_yield_curve)、[Eurostat](https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/3-30042026-cp)、[DGBAS](https://eng.dgbas.gov.tw/News_Content.aspx?n=4438&s=236184)*
*市場數據截至：2026-05-05（U.S. Treasury） / 官方就業資料截至：2026-05-05（BLS JOLTS） / ISM Services 截至：2026-05-05*
*本文僅供參考，不構成投資建議。*
