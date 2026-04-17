---
layout: post
title: "59.3 / 33.5 / -5.1 已經排成同一張表：美國成本先卡在上游，下一段先寫進利潤表"
date: 2026-04-17 12:20:00 +0800
categories: [macro]
tags: [macro, inflation, fed, employment, tariff]
macro_kind: short
description: "費城聯儲 4 月把 prices paid 寫成 59.3、prices received 寫成 33.5、employment 寫成 -5.1；Fed 4 月 8 日研究又把 2025 關稅對 core PCE 的累積拉升寫成 0.8%。這代表舊關稅傳導已接近完成，新一輪油價與進口成本壓力會先落在企業利潤與聘僱，再看會不會走進更廣的 CPI。"
lang: zh-TW
---

## 59.3 和 33.5 已經把上游與下游分開

費城聯儲在 `2026-04-16` 把製造業 `prices paid` 寫成 **59.3**，`prices received` 寫成 **33.5**。[Philly Fed MBOS](https://www.philadelphiafed.org/surveys-and-data/regional-economic-analysis/mbos-2026-04)、[Philadelphia Beige Book](https://www.federalreserve.gov/monetarypolicy/beigebook202604-philadelphia.htm)

**當 `59.3 / 33.5 / -5.1` 排成同一張表時，美國這輪油價與進口成本壓力會先推高 CPI，還是先壓縮企業利潤與聘僱？**

這個框架把今天的價格壓力拆成舊關稅已完成的傳導、新油價與進口成本的上游衝擊、以及需求端的吸收力三層。讀者只要盯住 **2026-04-29** 的 FOMC、**2026-05-13** 的 PPI 與 **2026-05-14** 的 import prices，就能分辨壓力留在利潤表，或走進更廣的消費端定價。[Fed tariff note](https://www.federalreserve.gov/econres/notes/feds-notes/detecting-tariff-effects-on-consumer-prices-in-real-time-part-II-20260408.html)

## 59.3 先衝上去，33.5 還留在後面

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 舊關稅的第一輪 consumer pass-through 已經大致落地，新壓力主要來自油價與上游輸入 | Fed FEDS Notes 把 `core goods PCE` 的累積拉升寫成 `3.1%`、`core PCE` 寫成 `0.8%`，又把 `pass-through is effectively complete` 寫進結論；BLS 把 `goods PPI` 寫成 `1.6%`，`all imports` 寫成 `0.8%`，`nonfuel imports` 寫成 `0.6%` | 很高 |
| consumer-facing business 的轉嫁能力還留在後段，企業利潤與聘僱先吸收 shock | Beige Book 把 `consumer price sensitivity`、delayed hike、profit margin decline 寫進 district text；Philly Fed 把 `employment` 寫成 `-5.1`，`prices paid - prices received` 留下 `25.8` 點 gap | 很高 |

`Robert Minton`、`Madeleine Ray`、`Mariano Somale` 在 `2026-04-08` 的 FEDS Notes 把 `2025` 關稅的傳導寫成一條已經走過大半的線。研究把 `core goods PCE` 的累積拉升寫成 **3.1%**，把 `core PCE` 的累積拉升寫成 **0.8%**，同時把 `pass-through is effectively complete` 直接寫進結論。[Fed tariff note](https://www.federalreserve.gov/econres/notes/feds-notes/detecting-tariff-effects-on-consumer-prices-in-real-time-part-II-20260408.html) `2026-04-14` 的 PPI 又把 `final demand goods` 寫成月增 **1.6%**、`services` 寫成 **0.0%**；`2026-04-15` 的 import prices 再把 `all imports` 寫成 **0.8%**、`nonfuel imports` 寫成 **0.6%**、來自中國的進口價格寫成 **0.7%**。[PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)、[Import prices](https://www.bls.gov/news.release/ximpim.nr0.htm) 這組數字把最新壓力定位在 goods 與上游輸入。市場已經把舊關稅的第一輪 consumer price effect 寫進資料，新的壓力開始由油價、運輸與中間投入接手。

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260417MarginSqueeze"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260417MarginSqueeze'), {
  type: 'bar',
  data: {
    labels: ['Prices Paid', 'Prices Received', 'New Orders', 'Employment'],
    datasets: [{
      label: 'Philly Fed April 2026 diffusion indexes',
      data: [59.3, 33.5, 33.0, -5.1],
      backgroundColor: [
        'rgba(220, 38, 38, 0.82)',
        'rgba(249, 115, 22, 0.82)',
        'rgba(8, 145, 178, 0.82)',
        'rgba(71, 85, 105, 0.82)'
      ],
      borderColor: [
        'rgba(220, 38, 38, 1)',
        'rgba(249, 115, 22, 1)',
        'rgba(8, 145, 178, 1)',
        'rgba(71, 85, 105, 1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '成本擴散跑在前面，定價與聘僱留在後段（資料來源：Philly Fed, 2026-04-16）'
      },
      legend: { display: false }
    },
    scales: {
      y: {
        ticks: {
          callback: function(value) { return value; }
        }
      }
    }
  }
});
</script>

消費端的吸收力把這條線先壓在利潤表裡。Fed `2026-04-15` 的全國褐皮書把 `consumer price sensitivity` 與 `rising demand at food banks` 放在同一段，Philadelphia district 又把 `nonauto retailers` 寫成 `little change`，還把一位 retailer 延後漲價、一位 homebuilder 無法轉嫁成本導致 `profit margin` 明顯下滑寫進正文。[Beige Book national](https://www.federalreserve.gov/monetarypolicy/beigebook202604-summary.htm)、[Philadelphia Beige Book](https://www.federalreserve.gov/monetarypolicy/beigebook202604-philadelphia.htm) 同一天的 Philly Fed survey 把 `new orders` 寫成 **33.0**，`prices received` 寫成 **33.5**，`employment` 寫成 **-5.1**，`59.3 - 33.5` 的 gap 留下 **25.8** 點。[Philly Fed MBOS](https://www.philadelphiafed.org/surveys-and-data/regional-economic-analysis/mbos-2026-04) Federal Reserve 的 G.17 也把 `manufacturing output` 寫成月減 **0.1%**，`manufacturing capacity utilization` 寫成 **75.3%**。[G.17](https://www.federalreserve.gov/Releases/G17/current/g17.pdf) 工廠還接得到單，volume 與 pricing power 還不足以把成本輕鬆往下游推。

反方同樣站得住。Minton、Ray、Somale 在同一篇 note 裡放進另一條路：若把 common tariff effects 一起算進去，income 與 demand channel 可能對 consumer prices 形成下壓，`core goods inflation` 會更快回到疫情前趨勢。[Fed tariff note](https://www.federalreserve.gov/econres/notes/feds-notes/detecting-tariff-effects-on-consumer-prices-in-real-time-part-II-20260408.html) 這條反方讓今天的結論更乾淨。市場現在看到的是成本壓力，CPI 的下一段仍由需求承接力與下游轉嫁速度決定。

## 5 月的三個日期會把壓力寫進哪一層

如果 **2026-05-13** 的 PPI 仍把 `final demand goods` 留在 **0.8%** 上方，`stage 1 goods inputs` 又續留 **2.0%** 左右，同時 **2026-05-14** 的 `nonfuel import prices` 續留 **0.4%** 上方，→ 上游成本壓力會延續，今天這套 `margin squeeze first` 框架會維持高權重。[PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)、[Import prices](https://www.bls.gov/news.release/ximpim.nr0.htm)

如果 **2026-05-13** 的 `final demand services` 回到 **0.4%** 上方，trade services margins 連同 food retailing、apparel retailing 一起轉強，→ 轉嫁能力會從工廠走進賣場，今天這套「利潤表先吸收」框架會降權。[PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)

如果 **2026-05-21** 的 Philly Fed survey 把 `prices paid - prices received` 的 gap 縮到 **10** 點以內，`employment index` 又回到 **0** 上方，→ 企業定價權會重新趕上成本，今天的壓力分布會改寫成更均衡的價格傳導框架。[Philly Fed MBOS](https://www.philadelphiafed.org/surveys-and-data/regional-economic-analysis/mbos-2026-04)

## 結語

> **核心判斷：** 美國這輪新價格壓力先寫在上游與利潤表，CPI 的下一段需要更高的下游轉嫁與更穩的需求承接才會成立。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Final demand services + trade services margins | `2026-05-13` 與 `2026-06-11` 的 `final demand services` 連續 `2` 次 `>=0.4%`，且 trade services margins 連續 `2` 次轉正擴大 | 觀察 `2026-05-13` 至 `2026-06-11` 的 PPI | 下游轉嫁已經成形，今天的 margin-first 框架需要降權 |
| Philly Fed pricing gap + employment | `2026-05-21` 與 `2026-06-18` 的 `prices paid - prices received` 連續 `2` 次 `<10`，且 `employment index >0` | 觀察 `2026-05-21` 與 `2026-06-18` 的 MBOS | 企業定價權重新趕上成本，利潤表壓力會明顯減輕 |
| Nonfuel imports + goods PPI | `2026-05-14` 與 `2026-06-11/12` 的 `nonfuel import prices` 連續 `2` 次 `<=0.1%`，且 `final demand goods` 連續 `2` 次 `<=0.3%` | 觀察 `2026-05-14` 的 import prices，延伸到 `2026-06-11` PPI 與 `2026-06-12` import prices | 上游 shock 已經快速冷卻，今天的壓力框架需要整體降權 |

後續最值得看的三個點很直接。第一個點是 **2026-05-13** 的 `goods PPI / services PPI` 組合，這張表會直接定位成本壓力停在上游，還是開始往 consumer-facing service margin 走。第二個點是 **2026-05-14** 的 `nonfuel import prices` 與 `consumer goods excluding automotives`，這張表會回答輸入性壓力還有多少續航力。第三個點是 **2026-05-21** 的 Philly Fed survey，這張表會直接回答 `25.8` 點的 pricing gap 有沒有開始縮。

---

*資料來源：[Fed tariff note](https://www.federalreserve.gov/econres/notes/feds-notes/detecting-tariff-effects-on-consumer-prices-in-real-time-part-II-20260408.html)、[PPI](https://www.bls.gov/news.release/archives/ppi_04142026.htm)、[Import prices](https://www.bls.gov/news.release/ximpim.nr0.htm)、[Beige Book national](https://www.federalreserve.gov/monetarypolicy/beigebook202604-summary.htm)、[Philadelphia Beige Book](https://www.federalreserve.gov/monetarypolicy/beigebook202604-philadelphia.htm)、[Philly Fed MBOS](https://www.philadelphiafed.org/surveys-and-data/regional-economic-analysis/mbos-2026-04)、[G.17](https://www.federalreserve.gov/Releases/G17/current/g17.pdf)、[ECB Economic Bulletin Issue 2/2026](https://www.ecb.europa.eu/press/economic-bulletin/html/eb202602.en.html)、[ECB CES February 2026](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260327~d8261341ca.en.html)、[BOJ statement 2026-03-19](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260319a.pdf)、[IMF blog](https://www.imf.org/en/blogs/articles/2026/03/30/how-the-war-in-the-middle-east-is-affecting-energy-trade-and-finance)*
*市場與官方數據截至：2026-04-16（Fed、BLS、Philly Fed） / 2026-04-15（ECB Economic Bulletin） / 2026-04-08（Fed tariff note） / 2026-03-27（ECB CES） / 2026-03-19（BOJ） / 2026-03-30（IMF）*
*本文僅供參考，不構成投資建議。*
