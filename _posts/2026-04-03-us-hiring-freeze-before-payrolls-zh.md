---
layout: post
title: "6.9m 職缺還掛著，3.1% 錄用率先掉到疫情低點：美國勞動市場先進入招聘凍結"
date: 2026-04-03 12:45:00 +0800
categories: [macro]
tags: [macro, employment, consumption, fed]
macro_kind: long
description: "BLS 把 2 月職缺寫成 688.2 萬，hires 只剩 484.9 萬，hires rate 掉到 3.1%。DOL claims 仍在 20.2 萬，今晚 4 月 3 日非農會決定這是企業先關招聘閥門，還是更廣的就業放慢。"
lang: zh-TW
---

## 6.9m 職缺還掛著，3.1% 錄用率先掉下來

BLS 3 月 31 日把 2 月職缺寫成 **688.2 萬**，同時把 hires rate 壓到 **3.1%**；同一張表又把總錄用人數寫成 **484.9 萬**，比 1 月少了 49.8 萬。[BLS JOLTS Home](https://www.bls.gov/jlt/)

**6.9m 職缺仍在時，3.1% 錄用率先掉到疫情低點，今晚 4 月 3 日 20:30 的非農要讀成招聘凍結，還是更廣的就業放慢？**

這個框架把勞動市場拆成招聘線與裁員線。先看 4 月 2 日公布的 initial claims 會把裁員線抬到哪個位置，再看今晚非農與 **2026-05-05** 的下一份 JOLTS 會把 2 月的招聘凍結延長到哪個範圍；今天又碰到 Good Friday，美國現金股市休市，第一輪反應會先走到利率、美元與期貨，cash equity 會在下一個開市日補上。[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260402)、[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)、[NYSE 2026 calendar](https://www.nyse.com/publicdocs/nyse/ICE_NYSE_2026_Yearly_Trading_Calendar.pdf)

## 企業先關招聘閥門，裁員線仍留在低位

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 招聘凍結先落地 | JOLTS 把 openings 由 `7.240m` 降到 `6.882m`，hires 由 `5.347m` 掉到 `4.849m`，hires rate 壓到 `3.1%` | 很高 |
| 裁員線仍留低位 | layoffs/discharges rate 維持 `1.1%`，DOL claims 只在 `202k`，4 週均值降到 `207.75k` | 很高 |
| 景氣仍在擴張區 | ADP 3 月 private payroll `+62k`，ISM 製造業 PMI `52.7%`、New Orders `53.5%`、Employment `48.7%` | 高 |

目前最被數字支持的版本，是企業先把錄用速度往下壓，裁員線維持低位。JOLTS 把 2 月 total job openings 由 1 月的 **724.0 萬** 降到 **688.2 萬**，降幅是 **35.8 萬**；同一個月 hires 由 **534.7 萬** 掉到 **484.9 萬**，單月少了 **49.8 萬**，跌幅約 **9.3%**，明顯快過職缺的 **4.9%**。[BLS JOLTS Home](https://www.bls.gov/jlt/) 這條線表示勞動需求的第一個斷點落在「企業願意把張貼職缺變成實際錄用」這一步，大規模裁員訊號仍留在低檔。

<aside style="float: right; width: 240px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>JOLTS</strong>：美國勞工統計局每月公布的職缺、錄用與離職流動調查。<br>
<strong>Hires Rate</strong>：單月錄用人數占就業人數比率，通常比失業率更早反映企業用人意願。
</aside>

裁員線目前仍留低位。JOLTS 把 2 月 layoffs/discharges rate 放在 **1.1%**，total separations rate 也只是 **3.1%**；4 月 2 日的 DOL weekly claims 又把 3 月 28 日當週 initial claims 壓在 **20.2 萬**，四週均值降到 **20.775 萬**，insured unemployment rate 維持 **1.2%**。[BLS JOLTS Home](https://www.bls.gov/jlt/)、[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260402) 這代表企業先調整的是招聘閥門，現有人力配置仍維持穩定。失業率因此會比企業用工行為慢半拍。

JOLTS PDF 的 Table 14 把壓力位置切得更清楚。`1-9` 人小型企業的 openings rate 從 1 月 **6.5%** 掉到 2 月 **3.5%**，hires rate 從 **4.4%** 掉到 **2.5%**；`5,000+` 企業的 openings rate 反而由 **4.4%** 升到 **5.0%**，hires rate 卻仍由 **2.1%** 降到 **1.4%**。[BLS JOLTS PDF](https://www.bls.gov/news.release/pdf/jolts.pdf) 這條分化很有用。小企業先把空缺撤掉，大企業把職缺掛著，實際錄用卻更慢。headline openings 因此會比實際 hiring condition 更有韌性。

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260403HiringFreeze"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260403HiringFreeze'), {
  type: 'bar',
  data: {
    labels: ['2025-02', '2026-01', '2026-02'],
    datasets: [
      {
        label: 'Job Openings',
        data: [7.242, 7.240, 6.882],
        backgroundColor: 'rgba(37, 99, 235, 0.78)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 1.2
      },
      {
        label: 'Hires',
        data: [5.236, 5.347, 4.849],
        backgroundColor: 'rgba(16, 185, 129, 0.78)',
        borderColor: 'rgba(16, 185, 129, 1)',
        borderWidth: 1.2
      },
      {
        label: 'Total Separations',
        data: [5.285, 5.144, 4.971],
        backgroundColor: 'rgba(249, 115, 22, 0.78)',
        borderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 1.2
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '職缺與離職變動仍大致穩定，錄用先掉下來（資料來源：BLS JOLTS）'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) { return value + 'm'; }
        }
      }
    }
  }
});
</script>

反方同樣存在，而且數字有根據。ADP 4 月 1 日仍把 3 月 private payroll 寫成 **+6.2 萬**，**Dr. Nela Richardson** 也指出 hiring and pay gains held steady，smallest employers 連續兩個月成為 job growth 來源。[ADP](https://adpemploymentreport.com/) ISM 3 月製造業 PMI 也維持 **52.7%**，New Orders 為 **53.5%**，代表 goods cycle 仍在擴張區。[ISM March Manufacturing](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/march/) 這個反方讓今天的判斷維持克制：招聘凍結已經發生，總就業的收縮訊號仍集中在招聘端。

跨區域資料把這個框架再壓實一層。Eurostat 4 月 1 日把 euro area 2 月 unemployment rate 寫成 **6.2%**，失業人數增到 **1,091.9 萬**，月增 **9.3 萬**；同一天，BOJ Tankan 把日本 all-industry business conditions DI 維持在 **18**，employment conditions DI 維持 **-38**，企業對 loan-rate change 的上升回答則跳到 **+17**。[Eurostat](https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/3-01042026-ap)、[BOJ Tankan](https://www.boj.or.jp/en/statistics/tk/yoshi/tk2603.htm) 歐洲先出現邊際鬆動，日本仍處在缺工與資金成本上升並存的區間，美國現在比較像卡在兩者之間：企業維持低裁員，錄用速度先縮。

ISM 的 Susan Spence 又把政策與地緣風險放進同一條線。她說 manufacturing employment 仍卡在 contraction，tariff uncertainty 先壓住 hiring，Middle East conflict 與 supply chain cost pressure 又把 Prices Index 推到 **78.3**。[ISM PMI Reports Roundup](https://www.ismworld.org/supply-management-news-and-reports/news-publications/inside-supply-management-magazine/blog/2026/2026-04/ism-pmi-reports-roundup-march-2026-manufacturing/)、[ISM March Manufacturing](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/march/) 這代表今晚非農如果偏弱，市場會同時讀到 domestic demand、成本 shock 與政策不確定三條線；企業錄用意願因此會繼續承壓。

## 20.2 萬 claims 與 5 月 5 日 JOLTS 會把招聘凍結定型

如果 **3 月非農新增就業仍有 10 萬以上**，**失業率留在 4.3% 或更低**，同時未來四週 initial claims 續留 **21 萬** 附近，→ 2 月的 JOLTS 會落在企業把招聘流程拉長這條線，裁員線會續留低位。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)、[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260402)

如果 **3 月非農低於 5 萬**，或 **失業率升到 4.5% 以上**，接著 **initial claims 連 4 週高於 22 萬**，→ 招聘凍結會正式轉成更廣的就業放慢，4 月的家庭支出與信用資料也會一起承壓。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm)、[NY Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260309)

如果 **2026-05-05** 的 3 月 JOLTS 仍把 hires 留在 **490 萬** 以下、**quits rate 留在 1.9% 或更低**，同時 **2026-04-09** 的 2 月 personal income and outlays 把 real PCE 壓在 **0.1%** 附近，→ 企業保守會開始由招聘端傳到家庭端，3 月 29 日那篇「先補緩衝」框架也要接受更嚴格的交叉檢驗。[BLS JOLTS Home](https://www.bls.gov/jlt/)、[BEA schedule](https://www.bea.gov/node/43012)

## 結語

> **核心判斷：** 2 月美國勞動市場先出現招聘凍結，裁員線仍留低位；3 月非農若維持正成長與低失業率，風險會停在企業縮小錄用閥門的層次。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| Payrolls + unemployment | 3 月與 4 月 payrolls 都 `>=100k`，且失業率都 `<=4.3%` | 觀察 2026-04-03 與 2026-05-08 兩次非農 | 2 月 JOLTS 較像短期擾動，招聘凍結框架降權 |
| Initial claims + layoffs/discharges rate | initial claims `>220k` 連 4 週，且 layoffs/discharges rate `>=1.3%` | 每週觀察至 2026-05-07，並看 2026-05-05 JOLTS | 裁員線接棒，文章框架需要改成更廣的就業放慢 |
| Hires + real PCE | hires `<=4.9m` 連 2 次 JOLTS，且 real PCE 月增 `<=0.1%` 連 2 次 | 觀察 2026-04-09 / 2026-04-30 PIO 與 2026-05-05 / 2026-06-02 JOLTS | 企業保守開始傳到家庭需求，消費與就業框架要合併重寫 |

後續最值得看的三個點如下。第一個點是 **今天 2026-04-03 20:30** 的非農與失業率，這會先把招聘凍結留在流程題，或推進到就業題。[BLS Employment Situation](https://www.bls.gov/news.release/empsit.nr0.htm) 第二個點是 **2026-04-09** 的 BEA personal income and outlays，這份資料會告訴市場家庭把 2 月的保守招聘吸收掉，還是已經把它變成支出放慢。[BEA schedule](https://www.bea.gov/node/43012) 第三個點是 **2026-05-05** 的下一份 JOLTS，這會直接回答 2 月的 3.1% hires rate 是單月凹點，還是新中樞。[BLS JOLTS Home](https://www.bls.gov/jlt/)

---

*資料來源：[BLS JOLTS Home](https://www.bls.gov/jlt/)、[BLS JOLTS Table 1](https://www.bls.gov/news.release/jolts.t01.htm)、[BLS JOLTS PDF](https://www.bls.gov/news.release/pdf/jolts.pdf)、[DOL weekly claims](https://www.dol.gov/newsroom/releases/eta/eta20260402)、[ADP National Employment Report](https://adpemploymentreport.com/)、[ISM March Manufacturing PMI](https://www.ismworld.org/supply-management-news-and-reports/reports/ism-pmi-reports/pmi/march/)、[ISM PMI Reports Roundup](https://www.ismworld.org/supply-management-news-and-reports/news-publications/inside-supply-management-magazine/blog/2026/2026-04/ism-pmi-reports-roundup-march-2026-manufacturing/)、[Eurostat unemployment](https://ec.europa.eu/eurostat/en/web/products-euro-indicators/w/3-01042026-ap)、[BOJ Tankan Outline](https://www.boj.or.jp/en/statistics/tk/yoshi/tk2603.htm)、[NY Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260309)、[NYSE 2026 calendar](https://www.nyse.com/publicdocs/nyse/ICE_NYSE_2026_Yearly_Trading_Calendar.pdf)、[BEA schedule](https://www.bea.gov/node/43012)*
*市場與官方數據截至：2026-04-02（DOL weekly claims / 4 月 2 日美股常規盤） / 2026-04-01（ADP、ISM、Eurostat、BOJ） / 2026-03-31（JOLTS） / 2026-03-09（NY Fed SCE）*
*本文僅供參考，不構成投資建議。*
