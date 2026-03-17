---
layout: post
title: "贖回被卡，不等於信用已爆：HPS 私募信貸這次露出的，是流動性設計，還是事故前兆？"
date: 2026-03-17 16:10:00 +0800
categories: [macro]
tags: [macro, credit, bonds, financials]
macro_kind: short
description: "HPS Corporate Lending Fund 第一季收到約 9.3% 贖回請求，但依原本設計只履行 5%，約 6.2 億美元。同一時間，ICE BofA 高收益利差到 3 月 13 日只由 3.10% 走到 3.28%，代表這更像流動性閥門被碰到，而不是公開信用市場已全面失控。"
lang: zh-TW
---

## 贖回被卡，不等於信用已爆

HPS Corporate Lending Fund（HLEND）在 3 月 6 日披露，第一季收到約 **9.3%** 的贖回請求，但依既有機制只履行 **5%**。[SEC filing index](https://www.sec.gov/Archives/edgar/data/1838126/000162828026015493/0001628280-26-015493-index.html)、[EX-99.1](https://www.sec.gov/Archives/edgar/data/1838126/000162828026015493/hlendq12026clientrepurch.htm)

HPS 私募信貸基金把贖回限制在 5%，這只是產品設計被碰到，還是私募信貸開始從帳面收益走向真實流動性壓力？

真正要分清楚的不是 headline，而是三件事：這個 gate 是不是早就寫在產品裡、公開信用市場有沒有同步裂開、以及管理人手上的緩衝墊是不是還在。下一個最有辨識力的觀察點，不是更多情緒評論，而是下一輪季度 repurchase 結果，以及高收益利差能不能守在 **3.50** 以下。[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)

## 卡住的不是現金，而是產品設計與市場情緒之間的那道閥門

先講目前最被數據支持的版本。HLEND 這次不是突然宣布停止流動性，而是照既有條款執行：3 月 6 日提交給 SEC 的客戶說明寫得很直白，第一季贖回請求約為流通股數的 **9.3%**，基金仍只按原設計履行 **5%**，約 **6.2 億美元**；同時它披露可用流動性仍有 **44 億美元**，第一季新申購約 **8.4 億美元**，而未完成的贖回申請**不會自動結轉**到下一輪。[EX-99.1](https://www.sec.gov/Archives/edgar/data/1838126/000162828026015493/hlendq12026clientrepurch.htm) 如果把 5% 除以 9.3% 去看，這次大概只滿足了 **53.8%** 的請求。最反直覺的是，這件事先揭露的不是資產端已經壞掉，而是投資人第一次正面撞上「半封閉私募信貸」原本就存在的流動性閥門。

2024 年 10 月更新的 prospectus 其實早就寫明，HLEND 每季「擬 repurchase up to **5%** of Common Shares outstanding」，而且董事會可在認為符合股東利益時調整、暫停或終止這個機制。[Prospectus amendment](https://www.hlend.com/shareholders/sec-filings/content/0001193125-24-242459/d861992d424b3.htm) HLEND 官網風險揭露也明講：它不打算上市、不預期形成 secondary market，repurchase 只會是有限額、受 available liquidity 與其他限制約束的安排。[HLEND shareholders page](https://www.hlend.com/shareholders) 也就是說，**這次先被驗證的不是信用違約，而是產品說明書到底有沒有被投資人當真。**

<aside style="float: right; width: 230px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>非交易所 BDC</strong>：Business Development Company，常投資私募貸款或中型企業融資，但不像 ETF 那樣可隨時在市場賣出。<br>
<strong>HY OAS</strong>：高收益債選擇權調整利差，用來看 public credit 是否開始要求更高風險補償。<br>
<strong>repurchase offer</strong>：基金按既定窗口、既定比例接受股東賣回，不等於每日流動性。
</aside>

下圖把今天最重要的落差畫出來：油價與波動率在衝，公開信用卻還沒同步進入事故模式。共同基準日為 2026-02-27，Brent 最新官方日值為 2026-03-09，其餘序列截至 2026-03-13。[FRED Brent](https://fred.stlouisfed.org/graph/fredgraph.csv?id=DCOILBRENTEU&cosd=2026-02-20)、[FRED VIX](https://fred.stlouisfed.org/graph/fredgraph.csv?id=VIXCLS&cosd=2026-02-20)、[FRED HY OAS](https://fred.stlouisfed.org/graph/fredgraph.csv?id=BAMLH0A0HYM2&cosd=2026-02-20)、[FRED SP500](https://fred.stlouisfed.org/graph/fredgraph.csv?id=SP500&cosd=2026-02-20)

<div style="max-width: 640px; margin: 2em auto;">
  <canvas id="macroChart20260317CreditGate"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart20260317CreditGate'), {
  type: 'line',
  data: {
    labels: ['2026-02-27', '2026-03-06', '2026-03-13'],
    datasets: [
      {
        label: 'Brent 原油（指數化）',
        data: [100, 134.2, 132.3],
        borderColor: 'rgba(249,115,22,0.95)',
        backgroundColor: 'rgba(249,115,22,0.15)',
        tension: 0.25,
        fill: false
      },
      {
        label: 'VIX（指數化）',
        data: [100, 148.5, 136.9],
        borderColor: 'rgba(234,179,8,0.95)',
        backgroundColor: 'rgba(234,179,8,0.15)',
        tension: 0.25,
        fill: false
      },
      {
        label: 'HY OAS（指數化）',
        data: [100, 101.0, 105.8],
        borderColor: 'rgba(59,130,246,0.95)',
        backgroundColor: 'rgba(59,130,246,0.15)',
        tension: 0.25,
        fill: false
      },
      {
        label: 'S&P 500（指數化）',
        data: [100, 98.0, 96.4],
        borderColor: 'rgba(239,68,68,0.95)',
        backgroundColor: 'rgba(239,68,68,0.15)',
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
        text: '2/27 以來先被重定價的是油與波動，不是 public credit（來源：FRED）'
      }
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

從公開市場看，現在更像「利率與事件波動升溫」，還不像「信用事故擴散」。ICE BofA 高收益利差從 2 月 27 日的 **3.10** 到 3 月 13 日只走到 **3.28**，只擴了 **18 bps**；同一段時間 VIX 卻由 **19.86** 升到 **27.19**，10 年債殖利率由 **3.97%** 走到 **4.28%**，S&P 500 回吐約 **3.6%**。[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED SP500](https://fred.stlouisfed.org/series/SP500) FHLB New York 3 月 13 日的 market strategy daily 也提到，corporate bond spreads 的確在升，但市場已經不再定價下週 FOMC 立刻降息；這更像在重估折現率與波動，不是公開信用市場已經失序。[FHLB New York](https://www.fhlbny.com/w/fi/msd/2026/260313)

但這件事不能被輕描淡寫成「只是 technical」。真正卡住的是第二條線：如果更多 semi-liquid private credit vehicle 同時 hit 到 hard cap，private mark 與 public spread 的距離就可能突然縮小。加拿大央行總裁 Tiff Macklem 3 月 5 日點名的風險正是這裡：私募信貸的透明度、槓桿與流動性錯配，若在壓力下被迫賣資產，可能把壓力傳給銀行、保險與零售基金。[Bank of Canada](https://www.bankofcanada.ca/2026/03/new-players-old-risks-financial-stability-in-a-changing-landscape/) 所以我目前的判斷是：**這還不是公開信用市場的事故，但它已經是一個該被認真記帳的早期警訊。**

## 分水嶺

如果下一輪 HLEND repurchase requests 回落到 **<=5%**，而且 HY OAS 仍守在 **3.50 以下**，-> 這次事件就更像單一產品設計被碰到，不需要把它升級成全體私募信貸事故。

如果下一輪 requests 再度 **>10%**，同時又有其他大型 non-traded private credit vehicle 也 hit hard cap，-> 題目就要從「單一基金的流動性閥門」升級成「整個半封閉私募信貸結構的流動性錯配」。

如果 HY OAS 升破 **3.50** 並連續 **10 個交易日**、VIX 同時重回 **30 以上** 連 **2 日**，-> 故事就不再只是 private gate，而是 public credit 已開始接棒定價事故風險。

## 結語

> **核心判斷：** HLEND 這次 hit 到的首先是產品流動性設計，不是公開信用市場已經爆掉；但如果更多半封閉私募信貸工具同時碰到贖回上限，這個設計問題就會很快升級成市場問題。

| Metric | Threshold | Window | Implication |
|--------|-----------|--------|-------------|
| HLEND repurchase requests | `>10%` 且連續 2 季高於 5% cap | 觀察至 2026Q2 / 2026Q3 下一輪 repurchase result | 「單一產品 hit gate」框架要升級為 sector-level liquidity mismatch |
| HY OAS + VIX | HY OAS `>3.50` 連 10 個交易日，且 VIX `>30` 連 2 日 | 每日檢查；下一個主要觀察點為 2026-03-18 FOMC 與其後兩週 | 私募信貸壓力已開始外溢到 public credit，需要全面重評 |
| HLEND 可用流動性 + subscriptions | 可用流動性 `<3.0B`，且下一季 subscriptions `<500M` | 觀察至下一次 shareholder update / repurchase exhibit | 管理人「仍在 position of strength」的說法需要降權，題目轉向資金緩衝耗損 |

接下來最值得盯的不是更多傳聞，而是三個變數：第一，下一輪季度 repurchase 請求有沒有回到 5% 內；第二，HY OAS 是不是開始補跌；第三，監管與央行的語氣是否從「留意私募信貸」升級成「擔心外溢」。這三條線如果一起動，今天這篇就不能再被當成單一基金小故事。

---

*資料來源：[HLEND 2026-03-06 EX-99.1](https://www.sec.gov/Archives/edgar/data/1838126/000162828026015493/hlendq12026clientrepurch.htm)、[HLEND 2026-03-06 SEC filing index](https://www.sec.gov/Archives/edgar/data/1838126/000162828026015493/0001628280-26-015493-index.html)、[HLEND 2024-10-10 prospectus amendment](https://www.hlend.com/shareholders/sec-filings/content/0001193125-24-242459/d861992d424b3.htm)、[HLEND shareholders page](https://www.hlend.com/shareholders)、[Bank of Canada 2026-03-05 speech](https://www.bankofcanada.ca/2026/03/new-players-old-risks-financial-stability-in-a-changing-landscape/)、[FRED HY OAS](https://fred.stlouisfed.org/series/BAMLH0A0HYM2)、[FRED VIX](https://fred.stlouisfed.org/series/VIXCLS)、[FRED DGS10](https://fred.stlouisfed.org/series/DGS10)、[FRED SP500](https://fred.stlouisfed.org/series/SP500)、[FHLB New York market strategy daily](https://www.fhlbny.com/w/fi/msd/2026/260313)*
*市場數據截至：2026-03-13（HY OAS、VIX、10Y、S&P 500） / 2026-03-09（Brent）*
*本文僅供參考，不構成投資建議。*
