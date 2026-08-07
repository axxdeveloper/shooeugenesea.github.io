---
layout: post
title: "1.5% / 1.7% / 2.4% 排成一條線：BOJ 4 月先看基礎通膨，再看能源回彈"
date: 2026-04-24 12:20:00 +0800
categories: [macro]
tags: [macro, japan, inflation, boj, bonds]
macro_kind: short
description: "日本 3 月全國 CPI 年增 1.5%，核心 CPI 年增 1.7%，扣除生鮮與能源後仍有 2.4%。統計局、BOJ Tankan 與區域報告一起顯示，headline 的回升由能源拖累縮小推動，4 月決策更看基礎通膨與企業價格轉嫁。"
lang: zh-TW
---

## 1.5% 先回升，2.4% 把政策刻度留在裡面

日本 `3` 月全國 `CPI` 年增 `1.5%`，扣除生鮮食品後年增 `1.7%`。扣除生鮮食品與能源後的指標仍有 `2.4%`，headline 與基礎通膨已經排出兩條速度。[Statistics Bureau CPI](https://www.stat.go.jp/data/cpi/sokuhou/tsuki/pdf/zenkoku.pdf)

**日本 `3` 月 `CPI` 升回 `1.5%` 時，`BOJ` `4` 月決策會跟著 headline 反彈走，還是會沿著 `2.4%` 的基礎通膨黏性定價？**

統計局的 `CPI` 表、`BOJ` 的區域報告與 `Tankan` 已經把答案收斂到三條線：能源拖累正在縮小，食品與服務漲價仍在擴散，企業 input-output 價格差還在往後推。讀者只要盯住 `2026-04-28` 的 `Outlook Report`、`2026-05-01` 的東京 `CPI` 與 `2026-05-22` 的全國 `CPI`，就能分辨 `BOJ` 會把 `0.75%` 留久一點，或把 `1.0%` 的討論提早寫進夏季。[BOJ MPM schedule](https://www.boj.or.jp/en/mopo/mpmsche_minu/index.htm) [CPI schedule](https://www.stat.go.jp/english/data/cpi/1582.htm)

## 能源拖累縮小，基礎通膨與企業轉嫁把 2.4% 留在高位

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 能源拖累縮小，headline 先回升 | 全國 `CPI 1.5%`、核心 `1.7%`、`energy -5.7%` | 很高 |
| 食品、通訊與服務把基礎通膨留在高位 | `ex-energy core 2.4%`、`穀類 3.5%`、`調理食品 5.2%`、`外食 3.9%`、`通信 7.0%` | 很高 |
| 企業 input cost 仍快過 output price，policy line 更看 second-round | `Tankan` 大型製造業 `28 / 46`、小型製造業 `31 / 62`；`Takata` 直指 target almost achieved | 高 |

| 式子 | 意義 |
|---|---|
| `2.4 - 1.5 = 0.9` | ex-energy 通膨高出 headline `0.9` 個百分點 |
| `1.7 - 1.5 = 0.2` | 核心 `CPI` 已先走在 headline 前面 |
| `46 - 28 = 18` | 大型製造業 input-output 價格差仍在推升轉嫁壓力 |

<div style="max-width: 680px; margin: 2em auto;">
  <canvas id="macroChart20260424JapanCpiUnderlying"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260424JapanCpiUnderlying'), {
  type: 'bar',
  data: {
    labels: ['Headline CPI', 'Core CPI', 'Ex-Fresh & Energy', 'Energy'],
    datasets: [{
      label: '年增率 (%)',
      data: [1.5, 1.7, 2.4, -5.7],
      backgroundColor: [
        'rgba(37, 99, 235, 0.82)',
        'rgba(8, 145, 178, 0.82)',
        'rgba(217, 119, 6, 0.82)',
        'rgba(148, 163, 184, 0.82)'
      ],
      borderColor: [
        'rgba(37, 99, 235, 1)',
        'rgba(8, 145, 178, 1)',
        'rgba(217, 119, 6, 1)',
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
        text: '日本 3 月 CPI：headline 回升，基礎通膨仍在高位（資料來源：Statistics Bureau of Japan）'
      },
      legend: { display: false }
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

統計局把 `1.5% / 1.7% / 2.4%` 寫在同一張表裡，這張表已經把 headline 與 underlying 分開。`energy` 年減 `5.7%` 仍在往下拉總指數，穀類、調理食品、外食、飲料與通信則把非能源層往上撐。這組排列代表日本 `3` 月 `CPI` 的 headline 回升先來自能源拖累縮小，`BOJ` 的政策刻度也自然沿著 `2.4%` 的基礎通膨往前走。[Statistics Bureau CPI](https://www.stat.go.jp/data/cpi/sokuhou/tsuki/pdf/zenkoku.pdf)

`BOJ` 的區域報告與 `Tankan` 把第二層條件補得更完整。九大地區都把景氣寫成 recovering 或 picking up，private consumption 多數維持 resilient，employment and income situation 也持續 improving。`Tankan` 又把大型製造業 `output prices DI` 寫成 `28`、`input prices DI` 寫成 `46`，小型製造業寫成 `31` 與 `62`。`Takata` 在 `2` 月底更直接把 `price stability target is almost achieved` 與 second-round effects 放進同一段。這組訊號說明 `4` 月會議即使把政策利率留在 `0.75%`，語氣也會沿著 underlying inflation 走。[Regional report](https://www.boj.or.jp/en/research/brp/rer/data/rer260406.pdf) [Tankan](https://www.boj.or.jp/en/statistics/tk/yoshi/tk2603.htm) [Takata speech](https://www.boj.or.jp/en/about/press/koen_2026/ko260226a.htm)

反方同樣完整。`Ueda` 在 `2026-04-16` 把這輪價格壓力定義成 `negative supply shock`，`Kazutaka Maeda` 把 `4` 月會議定位成觀望窗口。`2026-04-22` 的 `Reuters` 稿也把市場焦點放在 `6` 月或 `7` 月，`Tetsuya Inoue` 則把觀察點收斂到 `Outlook Report` 與 second-round effects。這條反方讓今天的結論更乾淨：`4` 月會議更像重新標記路徑，下一步仍留在 summer window。[Ueda Reuters](https://941theduke.com/2026/04/16/boj-must-take-into-account-japans-low-real-rates-in-setting-policy-governor-ueda-says/) [BOJ Reuters](https://wsau.com/2026/04/22/bank-of-japan-seen-dropping-hawkish-signs-even-as-it-keeps-rates-steady/)

## 4 月 28 日的 Outlook Report 會決定 1.7% 能不能往 2% 靠近

如果 `2026-04-28` 的 `Outlook Report` 把 `FY2026` 核心 `CPI` 中值上修到 `2.0%` 或更高，同時保留對 second-round effects 的警戒，→ `4` 月會議會把 `6` 月或 `7` 月的下一步留在高機率路徑。[BOJ MPM schedule](https://www.boj.or.jp/en/mopo/mpmsche_minu/index.htm)

如果 `2026-05-01` 的東京 `CPI` 把扣除生鮮食品後年增率留在 `1.8%` 上方，扣除生鮮食品及能源後也留在 `2.2%` 上方，→ `3` 月全國 `CPI` 的 `2.4%` 會被視為可延續的內生通膨，headline 回彈的延續性也會同步升高。[CPI schedule](https://www.stat.go.jp/english/data/cpi/1582.htm)

如果 `2026-05-22` 的全國 `CPI` 把扣除生鮮食品及能源後年增率壓到 `2.0%` 以下，能源年減幅度又同步收斂到 `-2%` 內，→ 今天這套「基礎通膨先行」框架就要改寫成 headline 修復快於 underlying persistence。[CPI schedule](https://www.stat.go.jp/english/data/cpi/1582.htm)

## 結語

> **核心判斷：** 日本 `3` 月 `CPI` 的 headline 回升已經成立，`BOJ` 的政策刻度仍由 `2.4%` 的基礎通膨與企業價格轉嫁決定；`4` 月會議更像確認 summer path，單月油價留在觸發層。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 東京 `CPI`（扣除生鮮食品及能源） | `2026-05-01` 與 `2026-05-29` 連續 `2` 次 `<2.0%` | 觀察至 `2026-05-29` 東京 `CPI` | `基礎通膨先行` 框架需要降權，headline 回升的可持續性下降 |
| `BOJ` Outlook + Summary of Opinions | `2026-04-28` Outlook 將 `FY2026` 核心 `CPI` 中值留在 `<=1.8%`，且 `2026-05-12` 的 Summary 對 second-round effects 著墨轉淡 | 觀察 `2026-04-28` 至 `2026-05-12` | `summer path` 需要下修，`0.75%` 的維持期拉長 |
| 全國 `CPI`（扣除生鮮食品及能源） | `2026-05-22` 與 `2026-06-19` 連續 `2` 次 `<2.0%` | 觀察至 `2026-06-19` 全國 `CPI` | 內生通膨黏性明顯轉弱，文章框架需要全面重評 |

後續三個變數足夠回答這個題目。第一個變數是 `2026-04-28` 的 `Outlook Report`，它會直接定位 `BOJ` 對 `FY2026` 通膨與 summer path 的官方刻度。第二個變數是 `2026-05-01` 的東京 `CPI`，它會直接定位 `2.4%` 的基礎通膨續留在首都服務與食品層的力度。第三個變數是 `2026-05-22` 的全國 `CPI`，它會直接定位內生通膨線的延續力與短期修復的權重分配。

---

*資料來源：[Statistics Bureau CPI](https://www.stat.go.jp/data/cpi/sokuhou/tsuki/pdf/zenkoku.pdf)、[Regional report](https://www.boj.or.jp/en/research/brp/rer/data/rer260406.pdf)、[Tankan](https://www.boj.or.jp/en/statistics/tk/yoshi/tk2603.htm)、[Takata speech](https://www.boj.or.jp/en/about/press/koen_2026/ko260226a.htm)、[BOJ MPM schedule](https://www.boj.or.jp/en/mopo/mpmsche_minu/index.htm)、[CPI schedule](https://www.stat.go.jp/english/data/cpi/1582.htm)、[ECB CES](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.pr260227_1~e721468c3a.en.html)、[New York Fed SCE](https://www.newyorkfed.org/newsevents/news/research/2026/20260407)、[Ueda Reuters](https://941theduke.com/2026/04/16/boj-must-take-into-account-japans-low-real-rates-in-setting-policy-governor-ueda-says/)、[BOJ Reuters](https://wsau.com/2026/04/22/bank-of-japan-seen-dropping-hawkish-signs-even-as-it-keeps-rates-steady/)*
*市場與官方數據截至：2026-04-24（日本全國 CPI） / 2026-04-23（S&P 500 close） / 2026-04-22（Reuters BOJ preview） / 2026-04-16（Ueda Reuters） / 2026-04-06（BOJ Regional Report） / 2026-04-01（Tankan） / 2026-02-27（ECB CES） / 2026-04-07（New York Fed SCE） / 2026-02-26（Takata speech）*
