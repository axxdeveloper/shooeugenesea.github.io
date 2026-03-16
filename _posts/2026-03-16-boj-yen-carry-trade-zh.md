---
layout: post
title: "薪資轉正，日圓卻還在走弱：日銀這週真正要重估的是日本通膨，還是全球套利資金？"
date: 2026-03-16 13:05:00 +0800
categories: [macro]
tags: [macro, boj, japan, bonds, taiwan]
macro_kind: long
description: "日本 1 月名目薪資年增 3.0%、實質薪資年增 1.4%，但 3 月 16 日 USD/JPY 仍在 159.6 附近。日銀本週真正要處理的，不只是要不要升息，而是日本資金成本是否開始改寫全球套利與亞洲資產定價。"
lang: zh-TW
---

## 薪資轉正，日圓卻還在走弱

3 月 9 日日本厚生勞動省公布的 1 月薪資資料顯示，名目現金薪資年增 **3.0%**，實質薪資也年增 **1.4%**；這是 2026 春鬥正式落地前，最關鍵的一次薪資確認。[MHLW 報告](https://www.mhlw.go.jp/english/database/db-l/r08/2601pe/2601pe.html) 可是到了 3 月 16 日，`USD/JPY` 仍在 **159.6** 附近，市場並沒有把這組數字直接翻成更強的日圓。[Stooq USD/JPY](https://stooq.com/q/d/l/?s=usdjpy&i=d)

日本薪資終於轉正、政策利率已在 0.75%，為什麼日圓還是弱，日銀這週真正要重估的是國內通膨，還是全球套利資金的成本？

這篇要拆清楚三件事：第一，日本國內的工資與核心物價，確實已經不再只是「補貼退場前的假訊號」；第二，市場現在仍把日圓視為便宜資金，而不是高利率貨幣；第三，真正值得看的不是 3 月 18-19 日日銀會不會立刻再動，而是 **0.75% 的政策利率能不能逼出更高的日債殖利率、以及更高的全球資金成本**。[BOJ 會議時程](https://www.boj.or.jp/en/mopo/mpmsche_minu/index.htm)

## 問題不在於要不要再升一次，而在於日本資金成本是否開始外溢

先看最被數據支持的那一條線。日本銀行在 1 月 23 日以 **8:1** 維持無擔保隔夜拆款利率在 **0.75%** 左右，但高田創當場提出異議，主張直接升到 **1.0%**，理由是「price stability target had been more or less achieved」。[BOJ 1 月聲明](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260123a.pdf) 幾天後公布的意見摘要又更明確：多位委員認為 `underlying CPI inflation` 正在逐步往 **2%** 靠近，而且匯率變動已經成為討論重點。[BOJ 意見摘要](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260123b.pdf) 也就是說，BOJ 內部真正的爭論，已經從「能不能正常化」轉成「要用多快的速度正常化」。

日本統計局 2 月 20 日公布的 1 月全國 CPI 把這件事再往前推一步：總合 CPI 年增 **1.5%**，生鮮除外的 core CPI 年增 **2.0%**，而生鮮與能源除外的 core-core CPI 年增 **2.6%**。[日本 CPI](https://www.stat.go.jp/data/cpi/sokuhou/tsuki/pdf/zenkoku.pdf) 如果再把 3 月 9 日公布的薪資資料放進來，就會看到很不對稱的組合：**工資已經轉正，但政策利率還只有 0.75%。** 這代表日本國內的金融條件，至少對 BOJ 而言，仍然算偏寬鬆。

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>carry trade</strong>：借入低利率貨幣，再去持有高利率或高報酬資產的槓桿交易。<br>
<strong>實質利率</strong>：名目利率扣掉通膨，用來衡量資金真正成本。
</aside>

下圖把今天最重要的錯位畫得很直白：工資與底層通膨都已回到 BOJ 可以繼續正常化的區間，但政策利率仍低於核心物價，而長端日債早就不在同一層。

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260316BojCarry"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260316BojCarry'), {
  type: 'bar',
  data: {
    labels: ['名目薪資', '實質薪資', 'Core CPI', 'Core-Core CPI', 'BOJ 政策利率', '10Y JGB 標售', '30Y JGB 標售'],
    datasets: [{
      label: '目前水位(%)',
      data: [3.0, 1.4, 2.0, 2.6, 0.75, 2.122, 3.398],
      backgroundColor: [
        'rgba(59,130,246,0.78)',
        'rgba(34,197,94,0.78)',
        'rgba(249,115,22,0.78)',
        'rgba(239,68,68,0.78)',
        'rgba(99,102,241,0.78)',
        'rgba(168,85,247,0.78)',
        'rgba(244,63,94,0.78)'
      ],
      borderColor: [
        'rgba(59,130,246,1)',
        'rgba(34,197,94,1)',
        'rgba(249,115,22,1)',
        'rgba(239,68,68,1)',
        'rgba(99,102,241,1)',
        'rgba(168,85,247,1)',
        'rgba(244,63,94,1)'
      ],
      borderWidth: 1.2
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '日本工資、底層通膨與利率的錯位（資料來源：MHLW、統計局、MOF、BOJ）'
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

但市場短線不是看這張圖，而是看「誰還是 funding currency」。2 月 6 日，增尾和之就公開提醒：外匯政策不屬 BOJ，但必須注意**日圓貶值引發的通膨，是否會抬高人們的 inflation expectations，進而影響 underlying inflation**；他還明說，2025 年 12 月升息的重要依據，就是 2026 春鬥很可能延續穩定加薪。[增尾演講](https://www.boj.or.jp/en/about/press/koen_2026/data/ko260206a1.pdf) 這代表 BOJ 自己都知道，日圓不是旁枝，而是國內工資-物價循環能否站穩的入口之一。

問題在於，全球資金看的不是 BOJ 的內部辯論，而是利差。聯準會 1 月 28 日維持聯邦基金利率目標區間在 **3.50%-3.75%**，而 3 月 12 日美國 2 年與 10 年公債殖利率分別還在 **3.76%** 與 **4.27%**。[FOMC 聲明](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)、[FRED DGS2](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS2&cosd=2026-01-20)、[FRED DGS10](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS10&cosd=2026-01-20) 只要這個差距還在，日圓即使有薪資支撐，對很多全球部位來說仍然是低成本資金。高田創 2 月 26 日的說法最值得記住：**日本名目利率已不再是全球最低，但實質利率仍是全球最低。**[高田演講](https://www.boj.or.jp/en/about/press/koen_2026/data/ko260226a1.pdf) 這句話其實比「3 月會不會升息」更重要，因為它直接說明了為什麼日圓還在弱。

第三層才是市場真正容易低估的地方：即使 BOJ 本週不急著再升，日本長端殖利率一樣可能先把全球資金成本往上推。日本財務省的歷史標售資料顯示，3 月 3 日 10 年期 JGB 加權平均殖利率已到 **2.122%**，3 月 5 日 30 年期則到 **3.398%**，都明顯高於政策利率 **0.75%**。[MOF 歷史標售資料](https://www.mof.go.jp/english/policy/jgbs/auction/past_auction_results/index.html)、[MOF JGB 標售檔](https://www.mof.go.jp/english/policy/jgbs/auction/past_auction_results/Auction_Results_for_JGBs.xls) 也就是說，市場不是在等 BOJ 公布一個數字，而是在自己把長端重定價。

這條線的第二階效應不是只有日本。BIS 在 2025 年年報把 2024 年 8 月那次全球 risk-off 描述為一場 `breaking yen carry trades` 的事件：一旦以日圓融資的部位被迫回補，壓力往往先沿著槓桿、對沖與跨資產倉位擴散，而不會只停留在匯市。[BIS Annual Economic Report 2025](https://www.bis.org/publ/arpdf/ar2025e2.htm) 對台灣讀者來說，這代表 0050 這類曝險不只受美國科技 cycle 影響，也會受亞幣競爭性變動與全球風險平倉節奏牽動。真正需要重估的，不是「BOJ 會不會嚇市場一次」，而是**日本資金成本是不是開始讓亞洲與全球都不再把日圓當成理所當然的便宜資金。**

最值得保留的反方，就是高田創 1 月 23 日那張 1.0% 的異議票。若這種看法很快變成多數，市場就必須把 BOJ 從「漸進正常化」改寫成「主動追趕曲線」，那麼日圓與 JGB 可能會一起出現更劇烈的重定價。[BOJ 1 月聲明](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260123a.pdf) 但以目前資料看，BOJ 更像是在等更多 wage pass-through 與市場條件確認，而不是急著在這一週交出一次 surprise move。眼下最被數據支持的版本，仍是：**日本國內條件已夠成熟，真正還沒變的是全球資金對日圓的使用方式。**

## 分水嶺

如果 `USD/JPY` 回到 **155 以下並連續 5 個交易日**，而且下一次月度薪資公布時實質薪資仍 **>0**，→ 市場就不該再把日圓單純當成 cheap funding currency；本文的主線要轉向「國內正常化開始主導」。

如果 `USD/JPY` 升破 **160 且連續 5 個交易日**，同時下一次全國 `core-core CPI` 仍 **>=2.5%**，→ 題目會從「漸進正常化」升級成「輸入型通膨逼 BOJ 加快追趕」。

如果下一輪 10 年與 30 年 JGB 標售仍分別高於 **2.10%** 與 **3.40%**，而美國 2 年期公債殖利率同時維持在 **3.50%** 上方，→ 市場就要把日本這條線視為全球資金成本上移，而不是單純日圓故事。

## 結語

> **核心判斷：** 日銀這週真正要處理的，不是單次升息本身，而是日本工資轉正之後，日圓還能不能繼續扮演全球便宜資金；只要答案還是「能」，市場就會把日本正常化看成慢變數，而不是立刻改寫全球定價的主因。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| USD/JPY + 日本實質薪資 | USD/JPY `<155` 連 5 日，且下一次月度實質薪資 `>0` | 即日起至下一次薪資公布；第一個政策觀察點為 2026-03-18/19 BOJ | 「日圓仍是便宜資金」框架要降權，改由國內正常化主導 |
| USD/JPY + Core-Core CPI | USD/JPY `>160` 連 5 日，且下一次 core-core CPI `>=2.5%` | 即日起至下一次全國 CPI 公布 | 日本輸入型通膨風險升級，BOJ 可能被迫加快正常化節奏 |
| 10Y / 30Y JGB + 美國 2Y | 下一輪 10Y JGB `>2.10%`、30Y JGB `>3.40%`，且美國 2Y `>3.50%` | 觀察至下一輪 JGB 標售與 2026-03-17/18 FOMC | 日本長端已由國內題材升級為全球資金成本題材，需要全面重評 carry 框架 |

接下來最值得盯的不是更多猜測，而是三個變數：第一，下一次日本實質薪資能不能維持正值；第二，`USD/JPY` 能不能脫離 160 附近的弱日圓區；第三，10 年與 30 年 JGB 標售殖利率是否持續把長端資金成本往上抬。這三條線若一起動，0050 這類台灣大盤曝險也會跟著受影響，因為那代表亞洲資金與風險偏好的底層條件正在改變。

---

*資料來源：[BOJ 2026-01-23 聲明](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260123a.pdf)、[BOJ 2026-01-29 意見摘要](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260123b.pdf)、[增尾和之 2026-02-06 演講](https://www.boj.or.jp/en/about/press/koen_2026/data/ko260206a1.pdf)、[高田創 2026-02-26 演講](https://www.boj.or.jp/en/about/press/koen_2026/data/ko260226a1.pdf)、[MHLW Monthly Labour Survey](https://www.mhlw.go.jp/english/database/db-l/r08/2601pe/2601pe.html)、[日本全國 CPI 2026-01](https://www.stat.go.jp/data/cpi/sokuhou/tsuki/pdf/zenkoku.pdf)、[MOF 歷史標售資料](https://www.mof.go.jp/english/policy/jgbs/auction/past_auction_results/index.html)、[Fed 2026-01-28 聲明](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a.htm)、[FOMC 2026-01-28 會議紀錄](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260128.htm)、[BOJ 會議時程](https://www.boj.or.jp/en/mopo/mpmsche_minu/index.htm)、[FOMC 時程](https://www.federalreserve.gov/monetarypolicy/fomccalendars.htm)、[FRED DGS2](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS2&cosd=2026-01-20)、[FRED DGS10](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DGS10&cosd=2026-01-20)、[Stooq USD/JPY](https://stooq.com/q/d/l/?s=usdjpy&i=d)、[Stooq USD/TWD](https://stooq.com/q/d/l/?s=usdtwd&i=d)、[BIS Annual Economic Report 2025](https://www.bis.org/publ/arpdf/ar2025e2.htm)*
*市場數據截至：2026-03-12（美國利率） / 2026-03-16（USD/JPY、USD/TWD）*
*本文僅供參考，不構成投資建議。*
