---
layout: post
title: "4.8% / 4.0% / 0.5% 已經連成一條線：美國家戶先用儲蓄吸收油價稅，零售轉弱等 4 月 16 日"
date: 2026-04-13 12:08:40 +0800
categories: [macro]
tags: [macro, consumption, inflation, energy, fed]
macro_kind: long
description: "BLS 把 3 月 CPI 寫成月增 0.9%，Michigan 把 4 月消費者信心初值寫成 47.6，BEA 把 2 月儲蓄率寫成 4.0%。美國家戶先用情緒惡化與儲蓄墊吸收油價 shock，4 月 16 日零售銷售與 4 月 30 日 3 月 PCE 會回答廣泛需求有沒有接著轉弱。"
lang: zh-TW
---

## 4.8% 與 4.0% 已經把家戶壓力寫在同一張表

BLS 在 4 月 10 日把 3 月消費者物價指數 (CPI) 月增寫成 **0.9%**，密西根大學同日把 4 月消費者信心初值寫成 **47.6**。[BLS CPI](https://www.bls.gov/news.release/cpi.htm)、[Michigan](https://www.sca.isr.umich.edu/)

**美國家戶正在把油價 shock 吞進儲蓄墊，還是廣泛需求已經開始同步轉弱？**

這個框架把傳導拆成 headline CPI、家戶安全墊與實質消費三張表。讀者只要盯住 **2026-04-16** 的零售銷售、**2026-04-30** 的 3 月個人所得支出、以及 **2026-05-12** 的 4 月 CPI，就能分辨壓力留在油價稅，還是走進更廣的需求放慢。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)、[BLS CPI](https://www.bls.gov/news.release/cpi.htm)

4 月 7 日那篇文章把勞動市場寫成低工時擴張，4 月 9 日那篇文章把政策分界線寫在預期曲線。[前文](/2026/04/07/us-payroll-hours-soft-landing-zh/)、[前文](/2026/04/09/fed-expectations-curve-hike-risk-zh/) 4 月 10 日的 CPI 與 Michigan 又把第三張表補上去了：家戶開始用情緒與儲蓄吸收油價 shock。

## 汽油把 headline 拉高，儲蓄把實質消費暫時撐住

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 3 月通膨先是汽油 shock | CPI 月增 `0.9%`，energy 月增 `10.9%`，gasoline 月增 `21.2%`，core 只月增 `0.2%` | 很高 |
| 家戶先用安全墊吸收衝擊 | BEA 把 `DPI -0.1%`、`PCE +0.5%`、saving rate `4.0%` 寫在同一份 release；Michigan 把 sentiment 寫成 `47.6`、一年通膨預期寫成 `4.8%` | 很高 |
| 美國的實質壓力低於歐亞進口國 | IMF、IEA 與世界銀行把 shock 寫成高度不對稱；BOJ 把 LNG-linked spillover 與 second-round effects 放在同一段 | 高 |

BLS 把 3 月那張價格表切得很清楚。headline CPI 月增 **0.9%**、年增 **3.3%**；core CPI 月增只有 **0.2%**、年增 **2.6%**。同一份 release 又把 energy index 月增寫成 **10.9%**、gasoline index 月增寫成 **21.2%**，shelter 月增則留在 **0.3%**。[BLS CPI](https://www.bls.gov/news.release/cpi.htm) 這組數字顯示 3 月的物價壓力先集中在加油站與能源帳單，核心廣泛擴散仍留在下一張表。

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260413UsHouseholdEnergyTax"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260413UsHouseholdEnergyTax'), {
  type: 'bar',
  data: {
    labels: ['Headline CPI', 'Core CPI', 'Shelter', 'Energy', 'Gasoline'],
    datasets: [{
      label: '2026 年 3 月月增率 (%)',
      data: [0.9, 0.2, 0.3, 10.9, 21.2],
      backgroundColor: [
        'rgba(37, 99, 235, 0.78)',
        'rgba(16, 185, 129, 0.78)',
        'rgba(8, 145, 178, 0.78)',
        'rgba(249, 115, 22, 0.78)',
        'rgba(220, 38, 38, 0.78)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(16, 185, 129, 1)',
        'rgba(8, 145, 178, 1)',
        'rgba(249, 115, 22, 1)',
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
        text: '3 月 CPI 壓力集中在能源與汽油（資料來源：BLS 2026-04-10）'
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

BEA 又把家戶安全墊寫在另一張表。2 月 personal income 月減 **0.1%**，disposable personal income 也月減 **0.1%**；personal consumption expenditures 月增 **0.5%**，real PCE 只月增 **0.1%**，personal saving rate 壓到 **4.0%**。[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-february-2026) 這代表家戶在油價 shock 全面進表之前，已經開始用儲蓄墊支撐名目支出。名目支出還在前進，實質支出速度已經降到更低的檔位。

<aside style="float: right; width: 230px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>能源稅</strong>：油價與燃料成本上升把家戶可支配所得轉到必要支出，其他消費空間跟著收縮。<br>
<strong>real PCE</strong>：扣除價格因素後的實質個人消費支出。
</aside>

Michigan 把這條吸收線的心理層補得更完整。4 月消費者信心初值掉到 **47.6**，一年通膨預期由 **3.8%** 跳到 **4.8%**，長期通膨預期也由 **3.2%** 升到 **3.4%**。Joanne Hsu 又把一個細節寫得很有用：**98%** 的訪談完成在 `2026-04-07` 暫時停火公告之前，這代表 survey capture 到的是衝擊初段的 household stress，而不是停火 headline 之後的修正情緒。[Michigan](https://www.sca.isr.umich.edu/) 這張表把「油價稅先進入家戶預期」的路徑直接量化了。

New York Fed 3 月調查把這條線再往前推一格。一年 / 三年 / 五年通膨預期排成 **3.4% / 3.1% / 3.0%**，一年汽油價格預期升到 **9.4%**；households 對 future household financial situation 更悲觀，對 job loss 與 unemployment 的主觀機率也提高，spending 與 income expectations 則大致持平。[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407) 這組數字說明 household stress 先落在財務焦慮與就業風險感受，真正的 spending retrenchment 仍在等待下一輪硬數據。

反方同樣完整，而且名字明確。**Bank of America Institute 的 David Tinsley 團隊**在 4 月 10 日把 card spending 寫成總量年增 **1.8%**，扣除加油站後年增 **3.6%**；lower-income households 的 discretionary 加 grocery spending 仍年增 **0.4%**。[Bank of America Institute](https://institute.bankofamerica.com/economic-insights/consumer-checkpoint-explaining-drop-sentiment.html) 這條反方代表 household demand 仍在運作。家戶的第一反應是調整情緒與安全墊，零售主體還沒有全面收縮。

全球資料讓今天的框架更完整。IMF、IEA 與世界銀行在 `2026-04-01` 的聯合聲明把戰事 impact 寫成「substantial, global, and highly asymmetric」，直接點出 energy importers 承受更重的 growth 與 inflation 壓力。[IMF / IEA / World Bank](https://www.imf.org/en/news/articles/2026/04/01/pr-26100-joint-statement-by-the-heads-of-the-iea-imf-and-wb-group) BOJ 在 `2026-03-30` 公布的意見摘要又把 LNG contracts linked to crude oil、electricity and gas 的廣泛傳導、以及 second-round effects 一起寫出來。[BOJ summary](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf) 這個對照很重要。歐亞能源進口國更快面對 terms-of-trade shock，美國 household 的第一段調整因此更多落在 sentiment、gasoline 與 savings buffer。

最被數字支持的版本已經很清楚。3 月 CPI 把加油站 shock 寫進 headline，Michigan 把 household stress 寫進 expectations，BEA 把安全墊縮窄寫進 saving rate，Bank of America Institute 又把 4 月上旬 broad spending 仍在運作的反方留在桌上。這條鏈條目前指向同一個結論：美國家戶先用情緒與儲蓄吸收油價稅，廣泛需求是否接著轉弱要由零售與 PCE 來決定。[BLS CPI](https://www.bls.gov/news.release/cpi.htm)、[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-february-2026)、[Michigan](https://www.sca.isr.umich.edu/)、[Bank of America Institute](https://institute.bankofamerica.com/economic-insights/consumer-checkpoint-explaining-drop-sentiment.html)

## 4 月 16 日與 4 月 30 日會把吸收線畫在哪裡

如果 **2026-04-16** 的零售銷售在扣除加油站後仍維持月增，**2026-04-30** 的 real PCE 也留在 **0.1%** 或更高，→ 家戶正在用收入與儲蓄墊吸收油價稅，廣泛需求會續留在低速成長區。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)、[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-february-2026)

如果 **2026-04-24** 的 Michigan 終值把一年通膨預期留在 **4.8%** 或更高，**2026-04-30** 的 saving rate 又掉到 **4.0%** 以下，→ household adjustment 會更多轉進 discretionary spending，4 月下半月的需求數據會變得更軟。[Michigan](https://www.sca.isr.umich.edu/)、[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-february-2026)

如果 **2026-05-12** 的 CPI 讓 core 再寫出 **0.3%** 以上月增，下一輪 SCE 又把五年通膨預期推到 **3.0%** 以上，→ 今天的「油價稅先走家戶安全墊」框架就要改寫成更廣的 inflation drift 與 policy constraint。[BLS CPI](https://www.bls.gov/news.release/cpi.htm)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)

## 結語

> **核心判斷：** 3 月 CPI 與 4 月 Michigan 把同一件事寫清楚了：美國家戶先用預期惡化與儲蓄墊吸收油價稅，廣泛需求是否轉弱要等零售與 PCE 接棒。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 零售銷售扣除加油站 + real PCE | 扣除加油站零售銷售 `<=0%` 且 real PCE `<=0%` 連續 `2` 次月度發布 | 觀察 `2026-04-16`、`2026-04-30`，並延伸到 `2026-05-14` 與 `2026-05-28` | household buffer 已經讓位給 broader demand slowdown，今天的吸收框架需要降權 |
| Michigan 1Y inflation expectations + saving rate | 一年通膨預期 `>=4.8%` 連續 `2` 次，且 saving rate `<4.0%` 連續 `2` 次 | 觀察 `2026-04-24` 的 Michigan 終值、`2026-04-30` 的 PIO，並延伸到 `2026-05 上旬` 與 `2026-05-28` | 家戶把更多調整放進 discretionary spending，需求面壓力升權 |
| Core CPI + SCE 5Y | core CPI 月增 `>=0.3%` 連續 `2` 個月，且 SCE 五年通膨預期 `>3.0%` | 觀察 `2026-05-12` CPI 與 `2026-05 上旬` 下一輪 SCE | shock 已由油價稅走向更廣的 inflation drift，Fed 的 look-through 空間會收窄 |

後續最值得看的三個點如下。第一個點是 **2026-04-14** 的 EIA 汽油更新，這張表會先回答家戶的油價稅有沒有開始降溫。[EIA gasoline](https://www.eia.gov/dnav/pet/pet_pri_gnd_a_epmr_pte_dpgal_m.htm) 第二個點是 **2026-04-16** 的零售銷售，這份 release 會直接回答 household stress 有沒有走出加油站、走進更廣的 discretionary demand。[2026 指標發布日程](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf) 第三個點是 **2026-04-30** 的 3 月個人所得支出，這份表會把 `4.0%` 的 saving rate 留在緩衝區，或把它再壓低一格。[BEA PIO](https://www.bea.gov/news/2026/personal-income-and-outlays-february-2026)

---

*資料來源：[BLS CPI](https://www.bls.gov/news.release/cpi.htm)、[University of Michigan Surveys of Consumers](https://www.sca.isr.umich.edu/)、[BEA Personal Income and Outlays](https://www.bea.gov/news/2026/personal-income-and-outlays-february-2026)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[The Conference Board Consumer Confidence](https://www.conference-board.org/topics/consumer-confidence/)、[BOJ Summary of Opinions](https://www.boj.or.jp/en/mopo/mpmsche_minu/opinion_2026/opi260319.pdf)、[IMF / IEA / World Bank joint statement](https://www.imf.org/en/news/articles/2026/04/01/pr-26100-joint-statement-by-the-heads-of-the-iea-imf-and-wb-group)、[2026 indicator schedule](https://www.census.gov/economic-indicators/econcards/assets/pdf/censusreleaseglance_2026.pdf)、[Bank of America Institute](https://institute.bankofamerica.com/economic-insights/consumer-checkpoint-explaining-drop-sentiment.html)、[世界新聞網](https://www.worldjournal.com/wj/amp/story/121172/9435134)*
*資料與官方文件截至：2026-04-13（Michigan、Bank of America Institute） / 2026-04-10（BLS CPI） / 2026-04-09（BEA PIO） / 2026-04-07（New York Fed SCE） / 2026-04-01（IMF / IEA / World Bank） / 2026-03-30（BOJ）*
*本文僅供參考，不構成投資建議。*
