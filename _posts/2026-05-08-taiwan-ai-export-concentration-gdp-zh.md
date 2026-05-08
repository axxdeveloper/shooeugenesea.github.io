---
layout: post
title: "13.69% 與 9.62 個百分點同時出現：台灣 GDP 先由 AI 外需放大"
date: 2026-05-08 12:05:00 +0800
categories: [macro]
tags: [macro, taiwan, ai, semiconductor, gdp, trade]
macro_kind: short
description: "主計總處把台灣 2026Q1 實質 GDP 寫成年增 13.69%，淨外需貢獻 9.62 個百分點。財政部 3 月出口表又顯示資通訊與電子零組件合計占出口 81.0%，台灣景氣斜率正由 AI 硬體外需放大。"
lang: zh-TW
---

## 13.69% 先把台灣成長斜率拉上去

主計總處 4 月 30 日公布台灣第一季實質 GDP 年增 **13.69%**，淨外需貢獻 **9.62** 個百分點。[主計總處](https://eng.stat.gov.tw/News_Content.aspx?n=2317&s=236205)

13.69% 的台灣 GDP 代表景氣廣度擴大，還是 AI 外需集中度上升？

這個框架把台灣第一季成長拆成出口集中度、內需底部與產能週期三層。4 月出口將在 **2026-05-08 16:00** 發布，5 月 29 日 GDP preliminary 會更新支出面細節，這兩個日期會檢查高成長正在擴散，或繼續集中在 AI 硬體鏈。[財政部](https://service.mof.gov.tw/public/Data/statistic/trade/news/11503/11503_%E8%8B%B1%E6%96%87%E6%96%B0%E8%81%9E%E7%A8%BF.pdf)、[主計總處](https://eng.stat.gov.tw/News_Content.aspx?n=2317&s=236205)

## 9.62 個百分點來自淨外需，801.8 億美元出口集中在硬體鏈

所有 GDP 比率採用主計總處支出面實質成長貢獻口徑；百分點貢獻相加等於 headline 成長率。海關出口金額採用財政部美元名目口徑。前者回答 GDP 來源，後者回答外需組成。[主計總處](https://eng.stat.gov.tw/News_Content.aspx?n=2317&s=236205)、[財政部](https://service.mof.gov.tw/public/Data/statistic/trade/news/11503/11503_%E8%8B%B1%E6%96%87%E6%96%B0%E8%81%9E%E7%A8%BF.pdf)

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| AI 外需把成長斜率拉高 | 淨外需貢獻 `9.62` 個百分點；3 月資通訊與視聽產品占出口 `49.5%`，電子零組件占 `31.5%` | 很高 |
| 內需提供底部 | 民間消費貢獻 `2.23` 個百分點，資本形成貢獻 `1.38` 個百分點 | 中高 |
| 全球半導體產能週期延長台灣出口動能 | TSMC 2026Q1 HPC 收入占 `61%`，先進製程占晶圓收入 `74%`；ASML 把 2026 營收指引上修至 `360-400` 億歐元 | 高 |

| 錨點 | 式子 | 單位與口徑 | 用途 |
|---|---|---|---|
| 外需貢獻占 headline 成長 | `9.62 / 13.69 = 70.3%` | percentage points / GDP yoy contribution | 衡量高成長的外需集中度 |
| AI 硬體出口占比 | `49.5 + 31.5 = 81.0` | % of March exports / customs nominal USD | 衡量出口組成集中度 |
| 內需底部 | `2.23 + 0.46 + 1.38 = 4.07` | percentage points / GDP yoy contribution | 衡量景氣廣度 |

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260508TaiwanGdpContrib"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260508TaiwanGdpContrib'), {
  type: 'bar',
  data: {
    labels: ['民間消費', '政府消費', '資本形成', '淨外需'],
    datasets: [{
      label: 'GDP 成長貢獻（百分點）',
      data: [2.23, 0.46, 1.38, 9.62],
      backgroundColor: [
        'rgba(37, 99, 235, 0.78)',
        'rgba(20, 184, 166, 0.78)',
        'rgba(245, 158, 11, 0.78)',
        'rgba(220, 38, 38, 0.78)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(20, 184, 166, 1)',
        'rgba(245, 158, 11, 1)',
        'rgba(220, 38, 38, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '台灣 2026Q1 GDP 成長貢獻（資料來源：主計總處 2026-04-30）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) { return value + ' pp'; }
        }
      }
    }
  }
});
</script>

財政部 3 月出口表把外需結構寫得更集中。出口達 **801.83** 億美元，年增 **61.8%**；資通訊與視聽產品出口 **397.29** 億美元，年增 **134.5%**，電子零組件出口 **252.43** 億美元，年增 **44.0%**。[財政部](https://service.mof.gov.tw/public/Data/statistic/trade/news/11503/11503_%E8%8B%B1%E6%96%87%E6%96%B0%E8%81%9E%E7%A8%BF.pdf) 對美出口同月達 **285.41** 億美元，占出口 **35.6%**，年增 **124.0%**；BEA 也把美國 3 月對台貨品逆差寫成 **206** 億美元。[財政部](https://service.mof.gov.tw/public/Data/statistic/trade/news/11503/11503_%E8%8B%B1%E6%96%87%E6%96%B0%E8%81%9E%E7%A8%BF.pdf)、[BEA](https://www.bea.gov/news/2026/us-international-trade-goods-and-services-march-2026)

TSMC 與 ASML 把這條外需線延伸到產能週期。TSMC 第一季 HPC 收入占比升到 **61%**，7nm 以下先進製程占晶圓收入 **74%**，第一季資本支出 **111** 億美元；C.C. Wei 在 4 月 16 日逐字稿中把 AI demand、agentic AI token consumption 與 leading-edge silicon demand 串成需求鏈。[TSMC management report](https://investor.tsmc.com/english/encrypt/files/encrypt_file/qr/phase4_reports/2026-04/9f060092ba29ff3630cfdaefd67774026195e135/1Q26ManagementReport.pdf)、[TSMC transcript](https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-04/3cef85204275f94fd111485cfdf4adb3c0263c45/TSMC%201Q26%20Transcript.pdf) ASML 4 月 15 日也把 2026 營收指引上修至 **360-400** 億歐元，並把需求來源指向 AI infrastructure investment 帶動的 advanced logic 與 memory。[ASML](https://ourbrand.asml.com/asset/6ec62875-6d6a-4ec5-a4d7-43f59ce8e5c5/ASML-Press-Release-Financial-Results-Q1-2026.pdf)

反方同樣有數字。Gartner 的 Rajeev Rajput 預測 2026 全球半導體營收達 **1.3202** 兆美元，其中 AI semiconductors 約占總營收 **30%**，並指出 memory price inflation 會把一般半導體需求延後到 2028。[Gartner](https://www.gartner.com/en/newsroom/press-releases/2026-04-08-gartner-forecasts-worldwide-semiconductor-revenue-to-exceed-us-dollars-one-point-3-trillion-in-2026) 這個觀點讓台灣框架保留兩個方向：AI 硬體提供真實外需，memory 與價格壓力也會把一般需求擠到後面。

## 5 月 8 日與 5 月 29 日會檢查擴散速度

如果 2026-05-08 16:00 的 4 月出口發布讓資通訊與電子零組件合計占比連續第二個月維持 **75%** 以上，且對美出口占比維持 **30%** 以上，→ 台灣第一季高成長仍會以 AI 外需集中框架解讀。[財政部](https://www.mof.gov.tw/eng/singlehtml/f48d641f159a4866b1d31c0916fbcc71?cntId=d1e7596b7e044e558ec11508e28a57ee)

如果 2026-05-29 的 GDP preliminary 把民間消費與資本形成合計貢獻上修到 **4.8** 個百分點以上，且淨外需貢獻降到 **8.0** 個百分點以下，→ 內需廣度會升權，高成長會從單一外需斜率轉向更厚的景氣底部。[主計總處](https://eng.stat.gov.tw/News_Content.aspx?n=2317&s=236205)

如果 TSMC 4 月與 5 月月營收合計年增率維持 **30%** 以上，且 7 月 2026Q2 法說延續 HPC 收入占比 **60%** 附近，→ AI 硬體外需仍會把台灣出口、投資與企業盈餘連成產能週期。[TSMC monthly revenue](https://investor.tsmc.com/english/monthly-revenue/2026)、[TSMC quarterly results](https://investor.tsmc.com/english/quarterly-results/2026/q1)

## 結語

> **核心判斷：** 台灣第一季高成長的框架是外需把斜率拉高，內需把底部墊住，AI 硬體集中度決定後續波動幅度。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 資通訊 + 電子零組件出口占比 | 合計占出口 `<70%` 連續 `2` 個月 | 觀察 2026-05-08 與 2026-06 月上旬兩次財政部出口發布 | AI 外需集中框架降權，一般製造與內需項目升權 |
| 淨外需與內需貢獻 | 淨外需 `<8.0` pp，且內需合計 `>4.8` pp | 觀察 2026-05-29 GDP preliminary | 成長來源由外需斜率轉向景氣廣度 |
| TSMC HPC 收入占比 | HPC `<58%` 且先進製程 `<70%` 連續 `2` 季 | 觀察 2026Q2 與 2026Q3 法說資料 | AI 硬體產能週期降溫，出口高斜率需要重新檢查 |

後續三個觀察變數直接對應這個框架。第一個變數是 2026-05-08 16:00 的 4 月出口，這會確認 3 月 801.8 億美元是否延續成趨勢。[財政部](https://service.mof.gov.tw/public/Data/statistic/trade/news/11503/11503_%E8%8B%B1%E6%96%87%E6%96%B0%E8%81%9E%E7%A8%BF.pdf) 第二個變數是 2026-05-29 的 GDP preliminary，這會更新民間消費、資本形成與淨外需的貢獻分配。[主計總處](https://eng.stat.gov.tw/News_Content.aspx?n=2317&s=236205) 第三個變數是 TSMC 月營收與 2026Q2 法說，這會檢查 AI 外需是否仍在先進製程與 HPC 平台上維持高斜率。[TSMC monthly revenue](https://investor.tsmc.com/english/monthly-revenue/2026)

---

*資料來源：[主計總處 GDP 概估](https://eng.stat.gov.tw/News_Content.aspx?n=2317&s=236205)、[財政部 3 月貿易統計](https://service.mof.gov.tw/public/Data/statistic/trade/news/11503/11503_%E8%8B%B1%E6%96%87%E6%96%B0%E8%81%9E%E7%A8%BF.pdf)、[BEA March trade](https://www.bea.gov/news/2026/us-international-trade-goods-and-services-march-2026)、[TSMC management report](https://investor.tsmc.com/english/encrypt/files/encrypt_file/qr/phase4_reports/2026-04/9f060092ba29ff3630cfdaefd67774026195e135/1Q26ManagementReport.pdf)、[TSMC transcript](https://investor.tsmc.com/english/encrypt/files/encrypt_file/reports/2026-04/3cef85204275f94fd111485cfdf4adb3c0263c45/TSMC%201Q26%20Transcript.pdf)、[TSMC monthly revenue](https://investor.tsmc.com/english/monthly-revenue/2026)、[ASML Q1 results](https://ourbrand.asml.com/asset/6ec62875-6d6a-4ec5-a4d7-43f59ce8e5c5/ASML-Press-Release-Financial-Results-Q1-2026.pdf)、[Gartner semiconductor forecast](https://www.gartner.com/en/newsroom/press-releases/2026-04-08-gartner-forecasts-worldwide-semiconductor-revenue-to-exceed-us-dollars-one-point-3-trillion-in-2026)*
*市場與官方數據截至：2026-05-08 12:05（Asia/Taipei）；財政部 4 月出口資料將於 2026-05-08 16:00 發布。*
*本文僅供參考，不構成投資建議。*
