---
layout: post
title: "決議還沒出來，長債先自己投票：Fed 今晚要面對的是利率，還是期限溢價？"
date: 2026-03-18 15:20:00 +0800
categories: [macro]
tags: [macro, fed, bonds, energy, fiscal]
macro_kind: long
description: "截至 3 月 16 日，美國 10 年債殖利率已升到 4.23%，較 2 月 27 日高 26 個基點，而聯邦基金有效利率仍停在 3.64%。這代表台北時間 3 月 19 日凌晨的 FOMC 即使按兵不動，市場真正要問的也不是「降不降」，而是油價與美債供給壓力會不會把長端利率鎖在高位。"
lang: zh-TW
---

## 決議還沒出來，長債先自己投票

3 月 16 日，美國 10 年期公債殖利率收在 **4.23%**，而聯邦基金有效利率仍是 **3.64%**。[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED DFF](https://fred.stlouisfed.org/series/DFF) 以台北時間來看，聯準會要到 **2026 年 3 月 19 日凌晨**才會公布這次 3 月 17-18 日會議的聲明；也就是說，結果還沒出來，長端利率卻先自己往上走了。[Fed Monetary Policy](https://www.federalreserve.gov/monetarypolicy.htm)

台北時間 3 月 19 日凌晨的 FOMC 聲明，真的能把 10 年債殖利率重新壓回 4% 附近，還是長端其實已經在交易另一個故事？

這篇要拆的不是「會不會降息」，而是長端利率為什麼先不等 Fed。下面我會把三條線分開：油價 shock、供給與期限溢價、以及全球央行都還不願替長天期資產背書。真正要看的門檻，不是記者會上多了一句偏鴿或偏鷹，而是 10 年債能不能重新站回 **4%** 下方，以及這次會後的語氣有沒有把短端與長端的壓力分開。

## 不是一句按兵不動就能壓回去的那段曲線

先做口徑聲明：本文談利率與利差時，一律用**百分點 / 基點**；談原油時用**美元 / 桶**。因此，下圖只放同單位的 `DFF`、2 年債、10 年債與高收益利差；油價另在文中獨立處理，不把美元 / 桶直接和基點混在同一張座標上。[FRED DFF](https://fred.stlouisfed.org/series/DFF)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)

| 解釋 | 主要證據 | 目前支持度 |
|---|---|---|
| 油價衝擊讓市場先上修通膨補償 | EIA 3/10 說 Brent 於 3/9 收在 94 美元 / 桶，未來兩個月預估仍高於 95；Axios 也指出這波收益率上升更像通膨擔憂，而不是避險買盤 | 高 |
| 長端在交易供給與期限溢價，不只是 Fed 口頭指引 | Treasury TBAC 說現有發債規模足以撐過 FY2026，但以現行 coupon size 推算 FY2027-28 仍有 1.1 兆美元 funding shortfall；Fed 1/28 的 Implementation Note 又明寫官方購券主要集中在 T-bills 與 3 年內券種 | 很高 |
| 這只是短期 panic，等 Fed 說話就會回去 | HY OAS 只從 3.10 走到 3.27，VIX 3/16 回到 23.51；Morgan Stanley IM 的 Vishal Khanduja 也認為 10 年債仍可能落在 3.75%-4.25% 區間 | 中等，不能忽略 |

<aside style="float: right; width: 240px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>期限溢價</strong>：投資人把錢借更久時要求的額外補償；它會受供給、通膨不確定性與政策可信度影響，不等於 Fed 的短端政策利率。<br>
<strong>SEP</strong>：Summary of Economic Projections，Fed 官員對成長、通膨與利率路徑的季度預測。
</aside>

真正值得先算清楚的，是從 2 月 27 日到 3 月 16 日，政策利率沒動，但市場利率已經先改價。

| 錨點 | 式子 | 單位 | 口徑說明 |
|---|---|---|---|
| 聯邦基金有效利率 | 3.64 - 3.64 = 0.00 | 百分點 | `DFF`，2/27 vs 3/16 |
| 美國 2 年債 | 3.68 - 3.38 = 0.30 | 百分點 = 30 bps | `DGS2`，2/27 vs 3/16 |
| 美國 10 年債 | 4.23 - 3.97 = 0.26 | 百分點 = 26 bps | `DGS10`，2/27 vs 3/16 |
| HY OAS | 3.27 - 3.10 = 0.17 | 百分點 = 17 bps | `BAMLH0A0HYM2`，2/27 vs 3/16 |
| Brent 原油 | 94.35 - 71.32 = 23.03 | 美元 / 桶 = +32.3% | `DCOILBRENTEU`，2/27 vs 3/9，官方日值較債市慢 |

以下圖表只保留同單位序列：Fed 的有效政策利率完全沒變，但 2 年債、10 年債與 HY OAS 都在上移，而且最明顯的不是短端，而是市場自己把整條融資曲線往上抬。[FRED DFF](https://fred.stlouisfed.org/series/DFF)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart20260318FedLongEnd"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260318FedLongEnd'), {
  type: 'line',
  data: {
    labels: ['2026-02-27', '2026-03-06', '2026-03-10', '2026-03-16'],
    datasets: [
      {
        label: '聯邦基金有效利率',
        data: [3.64, 3.64, 3.64, 3.64],
        borderColor: 'rgba(30, 64, 175, 0.95)',
        backgroundColor: 'rgba(30, 64, 175, 0.12)',
        tension: 0.25,
        fill: false
      },
      {
        label: '美國 2 年債',
        data: [3.38, 3.56, 3.57, 3.68],
        borderColor: 'rgba(14, 165, 233, 0.95)',
        backgroundColor: 'rgba(14, 165, 233, 0.12)',
        tension: 0.25,
        fill: false
      },
      {
        label: '美國 10 年債',
        data: [3.97, 4.15, 4.15, 4.23],
        borderColor: 'rgba(220, 38, 38, 0.95)',
        backgroundColor: 'rgba(220, 38, 38, 0.12)',
        tension: 0.25,
        fill: false
      },
      {
        label: 'HY OAS',
        data: [3.10, 3.13, 3.06, 3.27],
        borderColor: 'rgba(217, 119, 6, 0.95)',
        backgroundColor: 'rgba(217, 119, 6, 0.12)',
        tension: 0.25,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '政策利率沒變，市場利率先抬高（來源：FRED，%）'
      }
    },
    scales: {
      y: {
        title: {
          display: true,
          text: '百分比'
        }
      }
    }
  }
});
</script>

第一條線是油價。EIA 在 3 月 10 日的 press release 裡寫得很清楚：Brent 在 3 月 9 日收於 94 美元 / 桶，較年初高約 50%，而且其基準 forecast 是未來兩個月仍高於 95 美元，因為荷莫茲海峽的石油運輸下降，部分中東產量也被迫 shut in。[EIA March 2026 STEO release](https://www.eia.gov/pressroom/releases/press584.php) Axios 3 月 10 日也點出，這波美債殖利率上行代表市場把通膨衝擊看得比傳統避險買盤更重；換句話說，這不是經典的「戰爭一來，美債一定漲」那套反射動作。[Axios: central banks have an oil price problem](https://www.axios.com/2026/03/10/oil-prices-iran-war-trump-fed)、[Axios: bond market signals inflation worries](https://www.axios.com/2026/03/06/iran-bonds-inflation-treasuries)

第二條線是供給與期限溢價，而這也是目前數據最支持的主軸。聯準會 1 月 28 日的 Implementation Note 明寫，它要維持的是 3.5%-3.75% 的短端目標區間，並透過購買 T-bills 與必要時 3 年內公債來維持 reserves；agency principal 也再投資到 T-bills。[Fed Implementation Note](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a1.htm) 同時，Treasury Borrowing Advisory Committee 在 2 月 4 日的會議記錄又指出：現有 coupon 發債規模可以撐到 FY2026，但按當前規模推估，FY2027-28 仍有約 1.1 兆美元 funding shortfall。[Treasury TBAC minutes](https://home.treasury.gov/news/press-releases/sb0386) 這兩件事放在一起看，長端利率更像在說一件事：前端有官方工具撐著，長端卻仍要自己吸收供給與通膨不確定性。所以今天真正被卡住的，不是 Fed 願不願意在聲明裡留一點彈性，而是市場願不願意在這個供給背景下，把 10 年期資金價格再往下借出去。

第三條線是全球央行背景。ECB 在 2 月 5 日把存款利率維持在 2.00%，並重申 meeting-by-meeting、data-dependent、不預設利率路徑。[ECB monetary policy decisions](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260205~001d26959b.en.html) BOJ 則在 1 月 23 日把無擔保隔夜拆款利率維持在 0.75%，而其 release schedule 顯示新的 `Statement on Monetary Policy` 會在 3 月 19 日發布。[BOJ statement 2026-01-23](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260123a.pdf)、[BOJ release schedule](https://www.boj.or.jp/en/about/calendar/index.htm) 這代表截至台北時間 3 月 18 日下午，歐洲與日本也都還在「先看數據、不要預設方向」的模式。換句話說，全球沒有哪一家主要央行正在替長天期資產做明顯背書。

反方不能省略。Reuters 3 月 11 日的 bond strategist poll 裡，Morgan Stanley Investment Management 的 Vishal Khanduja 認為 Fed 會 look through 這次較偏 transitory 的油價 shock，10 年債大致仍在 3.75%-4.25% 的區間內交易。[Reuters reprint / Finance & Commerce](https://finance-commerce.com/2026/03/us-treasury-yields-oil-spike-inflation-outlook/) 而且從公開市場看，這確實還不是信用事故：HY OAS 3 月 16 日是 3.27，VIX 是 23.51，都還沒有進入典型 panic zone。[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS) 但這個反方其實反而強化了今天的主判斷：如果市場沒有真的 panic，10 年債卻還是高位不退，那壓力來源就更像期限溢價與供給，而不是一場短暫的風險偏好波動。

## 分水嶺

如果台北時間 3 月 19 日凌晨的 FOMC 聲明與會後訊號沒有再上修通膨警覺，且 10 年債殖利率回到 4.00% 以下連續 3 個交易日，同時 Brent 回到 85 美元以下連續 5 日，-> 這輪長端上行就更像事件性通膨 shock，長債可以回到「Fed 還有空間」的舊框架。[Fed Monetary Policy](https://www.federalreserve.gov/monetarypolicy.htm)、[EIA March 2026 STEO release](https://www.eia.gov/pressroom/releases/press584.php)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)

如果聯邦基金有效利率仍停在 3.64% 附近，但 10 年債維持 4.20% 上方連續 5 個交易日，且 HY OAS 仍守在 3.50 以下，-> 問題就不是信用事故，而是期限溢價和供給壓力把長端單獨鎖住了。[FRED DFF](https://fred.stlouisfed.org/series/DFF)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)

如果 Brent 仍高於 95 美元連續 20 個交易日，或 HY OAS 升破 3.50 並連續 10 個交易日、VIX 回到 30 上方連 2 日，-> 題目就會從「長端先不等 Fed」升級成「通膨與金融條件同步收緊」，那時要重寫的不只是利率路徑，而是整個風險資產折現率框架。[EIA March 2026 STEO release](https://www.eia.gov/pressroom/releases/press584.php)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)

## 結語

> **核心判斷：** 台北時間 3 月 19 日凌晨這場 FOMC 能決定短端語氣，但目前把 10 年債鎖在高位的，更像是油價 shock 與長端供給溢價，而不是一個還沒公布的政策句子。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| 美國 10 年債 + Brent | 10 年債 `<4.00%` 連 3 日，且 Brent `<85` 連 5 日 | 即日起至 2026-04-07 EIA STEO | 代表油價與長端供給壓力可先降權，回到「政策語氣主導」框架 |
| 美國 10 年債 + DFF | 10 年債 `>4.20%` 連 5 日，且 DFF 仍約 `3.64%` | 即日起至 2026-04-08 FOMC Minutes | 代表長端與短端脫鉤仍在，期限溢價比政策句子更重要 |
| HY OAS + VIX | HY OAS `>3.50` 連 10 日，且 VIX `>30` 連 2 日 | 每日檢查；下一個主要觀察點為 2026-03-19 FOMC 與其後兩週 | 題目從長端定價升級為金融條件收緊，需要全面重評 |
| Treasury 融資訊號 | 下一次 borrowing / refunding 文件若再強化長端供給壓力 | 觀察下一輪 Treasury borrowing communication | 財政供給不再只是背景，而是長端利率主線 |

接下來最值得看的三個變數是：第一，台北時間 3 月 19 日凌晨的 Fed 聲明、SEP 與記者會，有沒有把短端政策與長端供給問題切開；第二，**4 月 7 日** EIA 的下一份 STEO，是否仍維持高油價假設；第三，Treasury 下一輪 borrowing / refunding 文件，會不會再把長端供給壓力具體化。[Fed Monetary Policy](https://www.federalreserve.gov/monetarypolicy.htm)、[EIA March 2026 STEO release](https://www.eia.gov/pressroom/releases/press584.php)、[Treasury TBAC minutes](https://home.treasury.gov/news/press-releases/sb0386) 這個框架對常見曝險的意義是：長天期美債暴露於期限溢價，**元大台灣50（0050）** 暴露於全球半導體現金流的折現率，而兩者都不會只因一句按兵不動自動鬆掉。

---

*資料來源：[Fed Monetary Policy](https://www.federalreserve.gov/monetarypolicy.htm)、[Fed Implementation Note 2026-01-28](https://www.federalreserve.gov/newsevents/pressreleases/monetary20260128a1.htm)、[FOMC Minutes 2026-01-27/28](https://www.federalreserve.gov/monetarypolicy/fomcminutes20260128.htm)、[Treasury TBAC minutes 2026-02-04](https://home.treasury.gov/news/press-releases/sb0386)、[EIA March 2026 STEO release](https://www.eia.gov/pressroom/releases/press584.php)、[ECB monetary policy decisions 2026-02-05](https://www.ecb.europa.eu/press/pr/date/2026/html/ecb.mp260205~001d26959b.en.html)、[BOJ statement 2026-01-23](https://www.boj.or.jp/en/mopo/mpmdeci/mpr_2026/k260123a.pdf)、[BOJ release schedule](https://www.boj.or.jp/en/about/calendar/index.htm)、[FRED DFF](https://fred.stlouisfed.org/series/DFF)、[FRED DGS2](https://fred.stlouisfed.org/series/DGS2)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED Brent](https://fred.stlouisfed.org/series/DCOILBRENTEU)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)、[Reuters reprint / Finance & Commerce](https://finance-commerce.com/2026/03/us-treasury-yields-oil-spike-inflation-outlook/)、[Axios: central banks have an oil price problem](https://www.axios.com/2026/03/10/oil-prices-iran-war-trump-fed)、[Axios: bond market signals inflation worries](https://www.axios.com/2026/03/06/iran-bonds-inflation-treasuries)*
*市場數據截至：2026-03-16（DFF、2Y、10Y、HY OAS、VIX） / 2026-03-09（Brent）*
*本文僅供參考，不構成投資建議。*
