---
layout: post
title: "避險資產為何先被賣：黃金這次大跌，真正被重估的是利率、美元，還是槓桿？"
date: 2026-03-19 14:20:00 +0800
categories: [macro]
tags: [macro, gold, bonds, geopolitics, etf]
macro_kind: long
description: "3 月 2 日到 3 月 18 日，現貨金由 5,322.165 美元回落到 4,836.86 美元，跌幅約 9.1%。同一段時間，10 年期美國實質利率先升至 1.92%、美元廣義指數走強，但 ETF 持倉只小幅回落，代表這波急跌不是單一新聞，而是持有成本、部位清洗與地緣風險溢價回落一起發生。"
lang: zh-TW
---

## 避險資產，為何先被賣？

3 月 2 日，現貨金收在 **5,322.165 美元 / 盎司**；到 3 月 18 日收盤只剩 **4,836.86 美元 / 盎司**，16 天回落約 **9.1%**。[Stooq XAU/USD](https://stooq.com/q/d/l/?s=xauusd&i=d) 中東風險沒有消失，但市場沒有繼續把黃金當第一順位的避險終點。

地緣風險還在、ETF 也沒有全面撤退，黃金為什麼仍在 3 月上旬到 3 月 18 日大幅下跌？

更有用的框架，是把這波跌勢拆成兩段：第一段跌的是持有成本，第二段跌的是擁擠部位與風險溢價。真正要看的門檻不是單一 headline，而是 10 年期美國實質利率能不能重新壓回 1.70% 左右、美元廣義指數能不能回到 119 下方，以及下一次 CFTC 週倉位與 4 月初的 ETF 月報有沒有顯示去槓桿接近尾聲。[FRED DFII10](https://fred.stlouisfed.org/series/DFII10)、[FRED DTWEXBGS](https://fred.stlouisfed.org/series/DTWEXBGS)、[CFTC COMEX Gold](https://www.cftc.gov/dea/futures/deacmxsf.htm)

## 先輸給持有成本，再輸給部位清洗

先把時間窗切開會比較清楚。

| 時間窗 | 主要觀察 | 這段比較像什麼 | 目前支持度 |
|---|---|---|---|
| 2026-03-02 -> 2026-03-13 | 黃金 `-5.68%`、10 年實質利率 `+16 bps`、美元廣義指數 `+1.59%`、HY OAS `+25 bps`、Brent `+33.65%` [ACTUAL] | 黃金先被當成無息資產，輸給實質利率與美元 | 很高 |
| 2026-03-13 -> 2026-03-18 | 黃金再跌 `-3.64%` [ACTUAL]，但到 3/17 為止 10 年實質利率已回到 `1.83%`、VIX 降到 `22.37` [ACTUAL] | 單靠利率已解釋不完，開始進入風險溢價回落與去槓桿 | 高 |
| ETF / 持倉 | WGC 週資料顯示截至 3/13 全球 ETF demand 僅 `-5.76t`，其中亞洲仍 `+4.95t` [ACTUAL] | ETF 有放大效果，但不是第一根骨牌 | 中等 |

<aside style="float: right; width: 240px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>實質利率</strong>：名目利率扣掉通膨預期後的報酬；對黃金這種無息資產來說，實質利率越高，持有成本越高。<br>
<strong>HY OAS</strong>：高收益債利差，可粗略看作信用市場風險溢價是否擴散。
</aside>

第一段幾乎就是持有成本重估。3 月 2 日到 3 月 13 日，10 年期美國實質利率由 1.76% 升到 1.92%，10 年期公債殖利率由 4.05% 升到 4.28%，美元廣義指數由 118.667 升到 120.5518；同一時間 Brent 由 77.24 漲到 103.23，HY OAS 由 3.03% 擴到 3.28%。[FRED DFII10](https://fred.stlouisfed.org/series/DFII10)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED DTWEXBGS](https://fred.stlouisfed.org/series/DTWEXBGS)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2) 這組合不是「避險需求消失」，而是市場先把黃金當成沒有票息、還要跟美元競爭的資產來定價。

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260319GoldRates"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260319GoldRates'), {
  type: 'line',
  data: {
    labels: ['2026-03-02', '2026-03-05', '2026-03-10', '2026-03-13', '2026-03-17'],
    datasets: [
      {
        label: '現貨金（美元/盎司）',
        data: [5322.165, 5081.155, 5191.93, 5019.83, 5003.05],
        borderColor: 'rgba(180, 83, 9, 0.95)',
        backgroundColor: 'rgba(180, 83, 9, 0.12)',
        tension: 0.25,
        yAxisID: 'yGold'
      },
      {
        label: '美國 10 年實質利率（%）',
        data: [1.76, 1.82, 1.82, 1.92, 1.83],
        borderColor: 'rgba(30, 64, 175, 0.95)',
        backgroundColor: 'rgba(30, 64, 175, 0.12)',
        tension: 0.25,
        yAxisID: 'yReal'
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '金價第一段下跌，幾乎跟著實質利率抬頭走（資料來源：Stooq、FRED）'
      }
    },
    scales: {
      yGold: {
        position: 'left',
        title: {
          display: true,
          text: '美元 / 盎司'
        }
      },
      yReal: {
        position: 'right',
        grid: {
          drawOnChartArea: false
        },
        title: {
          display: true,
          text: '百分比'
        }
      }
    }
  }
});
</script>

聯準會 3 月 18 日把政策利率維持在 3.5%-3.75% [ACTUAL]，聲明直接寫「中東局勢對美國經濟的影響仍具不確定性」；同日的 implementation note 也重申，資產購買重點仍在 T-bills 與必要時 3 年以內美債，不是替長久期資產托底。[Fed 3/18 statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm)、[Fed 3/18 implementation note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a1.htm) 日本銀行 3 月 19 日則把無擔保隔夜拆款利率維持在 0.75% [ACTUAL]，並明寫若 1 月 outlook 走勢成真，就會繼續提高政策利率 [PROJECTED]；ECB 2 月 5 日也維持存款利率 2.00%，強調 data-dependent。[BOJ 3/19 statement](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260319a.pdf)、[ECB 2/5 decision](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260205~001d26959b.en.html) 換句話說，全球主要央行沒有提供一個讓黃金立刻重新贏回持有成本競爭的政策背景。

但光講利率還不夠，因為第二段跌勢不是這樣來的。3 月 13 日到 3 月 17 日，10 年期實質利率其實已從 1.92% 回到 1.83%，VIX 也從 27.19 回到 22.37，可黃金到 3 月 18 日還是再跌 3.64%。[FRED DFII10](https://fred.stlouisfed.org/series/DFII10)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)、[Stooq XAU/USD](https://stooq.com/q/d/l/?s=xauusd&i=d) 這段更像兩件事同時發生：第一，市場把最初的地緣避險溢價慢慢換成「高油價會拖慢降息」的通膨敘事；第二，前面已經很擁擠的黃金多頭開始被洗出場。世界黃金協會 3 月 9 日的 Weekly Markets Monitor 直接點出，當週主軸是美債殖利率上升、美元明顯走強、油價急漲；3 月 18 日 Reuters 引述 High Ridge Futures 的 David Meger 也說，壓力不是沒有避險需求，而是通膨與利率擔憂暫時蓋過了它。[WGC Weekly Markets Monitor, 2026-03-09](https://www.gold.org/goldhub/gold-focus/2026/03/weekly-markets-monitor-what-gives-oil-or-yields)、[MINING / Reuters, 2026-03-18](https://www.mining.com/gold-price-drops-to-month-low-on-rate-cut-uncertainty/)

ETF 資金流要怎麼放進這個框架？答案是：它比較像放大器，不是起點。世界黃金協會 3 月的 ETF 月報顯示，2 月全球實體黃金 ETF 持倉反而還增加 26.05 噸到 4170.71 噸，是連續第九個月淨流入；截至 3 月 13 日當週，全球 ETF demand 也只是 -5.76 噸，其中北美 -10.59 噸，但亞洲仍是 +4.95 噸。[WGC March ETF commentary](https://www.gold.org/goldhub/research/gold-etfs-holdings-and-flows/2026/03)、[WGC weekly ETF data](https://fsapi.gold.org/api/v11/charts/etfv2/revised/archive-tablegroup/all?break-cache=23Dec24) 如果 ETF 真的是第一根骨牌，持倉不會只小幅回落、而且還出現這麼明顯的區域分化；更合理的解讀是，價格先被實質利率與美元打下來，之後 ETF 和期貨部位才開始跟著去風險。

期貨部位則補上了「為什麼跌勢會這麼兇」的最後一塊。CFTC 3 月 10 日的 COMEX 黃金報告顯示，非商業部位仍有 215,445 口多單、只對應 52,313 口空單，毛多單占總未平倉量 52.0%。[CFTC COMEX Gold](https://www.cftc.gov/dea/futures/deacmxsf.htm) 世界黃金協會同一份 3 月月報也寫到，2 月全球黃金交易量仍有 US$478bn/day，較 2025 年平均高 32%，而 COMEX 總淨多單在 2 月已先掉了 21%。[WGC March ETF commentary](https://www.gold.org/goldhub/research/gold-etfs-holdings-and-flows/2026/03) 這代表 3 月這波不是「沒人碰黃金」，反而是參與者很多、部位很重，所以一旦第一層利率故事成立，第二層的去槓桿會很快。

反方不是沒有。3 月 3 日 Reuters 引述 RJO Futures 的 Bob Haberkorn 認為，當天那種急跌更像強美元與高殖利率下的流動性換倉，未必會改寫更長期的避險需求；Rothschild & Co 2 月底的 market perspective 也提醒，黃金和實質利率的傳統反向關係自 2022 年後已經沒那麼乾淨，戰略性買盤與美元循環仍可能讓金價在急跌後重新找到支撐。[MINING / Reuters, 2026-03-03](https://www.mining.com/gold-price-drops-6-on-war-induced-inflation-fears/)、[Rothschild & Co, Feb-Mar 2026](https://www.rothschildandco.com/siteassets/publications/rothschildandco/wealth_management/wmuk/2026/market-perspective-gold-the-dollar-and-another-new-world.pdf) 這些反方有道理，但它們回答的是「中期會不會修復」，不是「這一段為什麼會急跌」。就眼前資料看，短線最有解釋力的還是持有成本、美元、擁擠倉位與風險溢價回落的連鎖，而不是單一 headline。

## 分水嶺

如果美國 10 年實質利率回到 1.70% 以下連續 3 個交易日，且美元廣義指數回到 119.0 以下連續 3 日，→ 第一段「持有成本壓力」就需要降權，黃金會更接近傳統避險資產而不是長久期無息資產。[FRED DFII10](https://fred.stlouisfed.org/series/DFII10)、[FRED DTWEXBGS](https://fred.stlouisfed.org/series/DTWEXBGS)

如果下一次 CFTC 週倉位顯示非商業淨多單降到 150,000 口以下，且 4 月初的 WGC ETF 月報沒有出現跨區域大規模流出，→ 這波比較像部位重置，去槓桿對價格的邊際壓力會下降。[CFTC COMEX Gold](https://www.cftc.gov/dea/futures/deacmxsf.htm)、[WGC ETF data](https://www.gold.org/goldhub/data/gold-etfs-holdings-and-flows)

如果 Brent 仍高於 95 美元 / 桶連續 10 個交易日，而 Fed 與 BOJ 又維持現在這種不急著給 easing relief 的語氣，→ 黃金短線就會繼續被當成利率敏感資產，而不是先天免疫折現率的避險終點。[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[Fed 3/18 statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm)、[BOJ 3/19 statement](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260319a.pdf)

## 結語

> **核心判斷：** 這波黃金急跌不是避險需求突然蒸發，而是黃金先後被當成無息資產與擁擠多頭部位處理：先輸給實質利率和美元，再輸給去槓桿與地緣風險溢價回落。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 美國 10 年實質利率 + 美元廣義指數 | DFII10 `<1.70%` 連 3 日，且 DTWEXBGS `<119.0` 連 3 日 | 每日檢查；下一個官方節點為 2026-04-08 FOMC Minutes | 「持有成本重估」框架需要降權，黃金可重新提高避險屬性權重 |
| CFTC 非商業淨多單 + WGC ETF 月報 | 淨多單 `<150,000` 口，且 4 月初 ETF 月報未見跨區域大幅流出 | 下一次 CFTC 週資料至 2026-04-05 前後的 WGC 月報 | 代表這次更像部位清洗，而不是結構性需求反轉 |
| Brent + 央行語氣 | Brent `>95` 連 10 日，且 Fed / BOJ 維持目前偏克制的 easing 語氣 | 即日起至 2026-04-07 EIA STEO 與 2026-04-08 FOMC Minutes | 黃金短線仍需視為利率與美元敏感資產，而不是自動受惠於地緣 headline |
| WGC 週 ETF demand | 連兩週全球 ETF demand `<-15t` | 每週檢查；下一個官方觀察點為 Week 12 週資料 | ETF 由放大器升級成主驅動，需要重評這波跌勢的主因排序 |

接下來最值得看的三個變數是：第一，10 年實質利率和美元廣義指數能不能一起回落；第二，CFTC 倉位與 WGC 週資料會不會顯示去槓桿已經接近尾聲；第三，4 月 7 日的 EIA STEO 與 4 月 8 日的 FOMC 紀要，會不會把高油價與高利率的連鎖繼續往後延。這個框架對常見曝險的意義是：黃金 ETF 暴露的不是單一「恐慌 headline」，而是實質利率、美元與部位擁擠度同時變化的組合。

---

*資料來源：[Stooq XAU/USD](https://stooq.com/q/d/l/?s=xauusd&i=d)、[FRED DFII10](https://fred.stlouisfed.org/series/DFII10)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED DTWEXBGS](https://fred.stlouisfed.org/series/DTWEXBGS)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)、[Fed 3/18 statement](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a.htm)、[Fed 3/18 implementation note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260318a1.htm)、[BOJ 3/19 statement](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260319a.pdf)、[ECB 2/5 decision](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260205~001d26959b.en.html)、[World Gold Council ETF commentary, 2026-03](https://www.gold.org/goldhub/research/gold-etfs-holdings-and-flows/2026/03)、[World Gold Council ETF weekly data](https://fsapi.gold.org/api/v11/charts/etfv2/revised/archive-tablegroup/all?break-cache=23Dec24)、[WGC Weekly Markets Monitor, 2026-03-09](https://www.gold.org/goldhub/gold-focus/2026/03/weekly-markets-monitor-what-gives-oil-or-yields)、[CFTC COMEX Gold](https://www.cftc.gov/dea/futures/deacmxsf.htm)、[MINING / Reuters, 2026-03-03](https://www.mining.com/gold-price-drops-6-on-war-induced-inflation-fears/)、[MINING / Reuters, 2026-03-18](https://www.mining.com/gold-price-drops-to-month-low-on-rate-cut-uncertainty/)、[Rothschild & Co, Feb-Mar 2026](https://www.rothschildandco.com/siteassets/publications/rothschildandco/wealth_management/wmuk/2026/market-perspective-gold-the-dollar-and-another-new-world.pdf)*
*市場數據截至：2026-03-18（金價） / 2026-03-17（美國利率、美元、VIX、HY OAS） / 2026-03-16（Brent） / 2026-03-13（WGC 週 ETF 資料）*
*本文僅供參考，不構成投資建議。*
