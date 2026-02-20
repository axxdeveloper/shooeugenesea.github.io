---
layout: post
title: "歷史性裁決：最高法院 6:3 推翻川普 IEEPA 關稅，1,300 億退稅戰開打"
date: 2026-02-21 08:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, tariff, fiscal]
description: "美國最高法院以 6:3 裁定川普依據 IEEPA 徵收的對等關稅違法，影響超過 1,300 億美元已徵稅款。S&P 500 漲 0.7%、零售股飆升，但 Section 232 鋼鋁汽車關稅仍在。分析後續法律戰、行政反制路徑，以及 SPY、XRT、TLT、GLD 等 ETF 的風險報酬。"
lang: zh-TW
---

## 國際政經背景

2 月 20 日，美國最高法院以 [6:3 投票](https://www.npr.org/2026/02/20/nx-s1-5672383/supreme-court-tariffs)裁定，川普總統依據《國際緊急經濟權力法》(International Emergency Economic Powers Act, IEEPA) 所徵收的對等關稅違法。首席大法官 Roberts 撰寫多數意見，認定 IEEPA 並未授權總統徵收關稅——[徵稅權屬國會專有的憲法權力](https://www.cnbc.com/2026/02/20/supreme-court-trump-tariffs-ruling.html)。此判決推翻了去年 4 月「解放日」(Liberation Day) 以來所有依據 IEEPA 實施的關稅，包括對全球的 10% 基線關稅、國別對等關稅（最高達 34%）、以及對中加墨的「芬太尼關稅」。川普稱判決為「恥辱」，並聲稱已有[替代方案](https://www.bloomberg.com/news/articles/2026-02-20/trump-s-tariffs-ruled-illegal-by-supreme-court-what-are-his-options-now)。

## 經濟傳導機制

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart1"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart1'), {
  type: 'bar',
  data: {
    labels: ['IEEPA 對等關稅\n（已推翻）', 'IEEPA 芬太尼關稅\n（已推翻）', 'Section 232\n鋼鋁 50%（仍有效）', 'Section 232\n汽車 25%（仍有效）', 'Section 301\n調查中'],
    datasets: [{
      label: '估計年度關稅收入（十億美元）',
      data: [95, 38, 25, 15, 0],
      backgroundColor: [
        'rgba(239, 68, 68, 0.7)',
        'rgba(239, 68, 68, 0.5)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(59, 130, 246, 0.5)',
        'rgba(148, 163, 184, 0.4)'
      ],
      borderColor: [
        'rgba(239, 68, 68, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(59, 130, 246, 1)',
        'rgba(148, 163, 184, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '各法律依據關稅收入估算（資料來源：Penn Wharton, CNBC, Tax Policy Center）',
        color: '#e2e8f0',
        font: { size: 12 }
      },
      legend: { display: false }
    },
    scales: {
      x: {
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + 'B'; } },
        grid: { color: 'rgba(255,255,255,0.1)' }
      },
      y: { ticks: { color: '#94a3b8', font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.1)' } }
    }
  }
});
</script>

### 被推翻的 vs 仍有效的

最高法院判決精準地切割了關稅體系：所有依據 IEEPA 的關稅全部無效，但依據其他法律的關稅完好無損。根據 [Penn Wharton 預算模型](https://budgetmodel.wharton.upenn.edu/issues/2026/2/20/supreme-court-tariff-ruling-ieepa-revenue-and-potential-refunds)估算，截至 2025 年 12 月，聯邦政府已依 IEEPA 徵收約 [1,335 億美元](https://www.cnbc.com/2026/02/20/supreme-court-trump-tariffs-ruling.html)關稅；部分估算認為總額可能高達 [1,750 億美元](https://tw.news.yahoo.com/%E8%A3%81%E5%AE%9A%E9%81%95%E6%86%B2-%E7%BE%8E%E6%9C%80%E9%AB%98%E6%B3%95%E9%99%A2%E6%96%AC%E6%96%B7%E5%B7%9D%E6%99%AE-%E9%97%9C%E7%A8%85%E5%A4%A7%E5%88%80-1750%E5%84%84%E7%BE%8E%E5%85%83%E7%A8%85%E6%AC%BE%E6%81%90%E5%85%A8%E6%95%B8%E9%80%80%E9%82%84-154100754.html)。這些稅款現在面臨退還的法律爭議。

但 [Section 232](https://www.cnbc.com/2026/02/20/trump-tariffs-supreme-court-ruling-industry-higher-rates.html) 仍然屹立不搖：鋼鐵與鋁均為 [50%](https://www.congress.gov/crs-product/IN12519)（去年 6 月雙雙調高至 50%）、汽車 25%（部分國家談判降至 10–15%）。此外，至少有 [7 類商品](https://www.cnbc.com/2026/02/20/trump-tariffs-supreme-court-ruling-industry-higher-rates.html)正在進行新的 Section 232 調查，超過 12 項 Section 301 調查也在推進中。換句話說——IEEPA 這扇門被關上了，但行政部門正在拼命打開其他窗戶。

### 對通膨的影響：利多但有限

IEEPA 關稅推翻對消費者物價有直接的降壓效果。進口商品價格將下降，尤其是消費電子、服裝、家居用品等受對等關稅影響最大的品類。[Tax Policy Center](https://taxpolicycenter.org/taxvox/supreme-court-ruling-ieepa-tariffs-could-ease-cost-burdens-less-you-might-think) 估算，取消 IEEPA 關稅可降低美國家庭年均成本約 $1,200–1,500。配合 1 月 CPI 已降至 [2.4%](https://www.bls.gov/news.release/cpi.nr0.htm)（YoY，為 2025 年 5 月以來最低）、核心 CPI 降至 [2.5%](https://www.cnbc.com/2026/02/13/cpi-inflation-report-january-2026.html)（2021 年 4 月以來最低），通膨降溫趨勢可望加速。

但別高興得太早。Section 232 關稅仍在推升製造業成本；核心個人消費支出 (Core PCE) 12 月數據為 [3.0%](https://www.cnbc.com/2026/02/20/pce-inflation-december-2025.html) YoY（高於預期的 2.9%），且住房通膨仍頑固。更關鍵的是——如果行政部門透過 Section 301 或新的 Section 232 快速重建關稅壁壘，通膨降壓效果可能只是暫時的。

上期我們的觀點文提到 Core PCE 為 3.0%——這個數字現已確認：12 月月度 Core PCE 為 [3.0% YoY](https://tradingeconomics.com/united-states/core-pce-price-index-annual-change)，高於預期的 2.9%。[Q4 GDP 報告中的國內購買物價指數](https://www.bea.gov/news/2026/gdp-advance-estimate-4th-quarter-and-year-2025)則為 +3.7%。方向一致：通膨仍遠高於聯準會 2% 目標。

### 財政炸彈：退稅成本與赤字

被忽略的風險在財政面。若法院最終要求全額退還 $1,335–1,750 億的已徵 IEEPA 關稅，這筆支出將直接加大聯邦赤字。CBO 2 月最新報告預估 FY2026 赤字已達 [$1.9 兆](https://www.cbo.gov/publication/61882)，關稅退款將雪上加霜。同時，IEEPA 關稅本來預計 10 年可貢獻約 $3 兆的聯邦收入——這條路現在被堵死了。除非國會立法授權新的關稅機制，否則 CBO 的赤字預測（債務占 GDP [120% by 2036](https://www.cbo.gov/publication/61882)）還要再上修。

### 市場反應：慶祝還是觀望？

判決公布後市場迅速反應：盤中 [S&P 500 一度漲 0.7%、Nasdaq 漲超 1%、Dow 漲 0.2%](https://www.cnbc.com/2026/02/19/stock-market-today-live-updates.html)，但漲幅在收盤前明顯收窄——市場在消化短期利多後迅速開始定價「行政反制」的不確定性。零售股大幅飆升——Nike、Target 等[進口依賴型企業直接受惠](https://www.bloomberg.com/news/articles/2026-02-20/retail-stocks-jump-after-supreme-court-strikes-down-us-tariffs)。美元與美國國債同步下跌。Wedbush 分析師 Dan Ives 指出：「[市場很大程度上已預期關稅會被推翻](https://www.cnbc.com/2026/02/19/how-the-stock-market-may-move-on-the-supreme-courts-tariff-decision.html)」。

值得注意的是，昨日我們指出 VIX 在 14.90 的水位「令人擔憂地自滿」——今天 VIX 跳升至 [20.71](https://finance.yahoo.com/quote/%5EVIX/)，單日漲幅 +5.57%。恐慌指數的跳升反映的不是判決本身（這是利多），而是判決後的不確定性：行政部門的反制行動、退稅法律戰、以及國會是否會介入。

### 筆記

我認為市場的慶祝過於樂觀。是的，IEEPA 關稅被推翻是消費者與進口商的短期利多——但這不是關稅政策的終點，而是轉折點。行政部門明確表態將透過 Section 232 和 Section 301 重建壁壘。Section 301 的調查程序比 IEEPA 的行政命令更慢（通常需要 6–12 個月），但一旦完成，其法律基礎比 IEEPA 更難挑戰。更大的風險是：如果國會通過立法直接授權總統徵收關稅，那最高法院的判決就毫無意義了——而在目前的政治氣氛下，這並非不可能。

持續觀察三個可能翻轉此論點的情境：(1) Section 301 調查程序拖延超過 6 個月，而企業在這段關稅真空期大量前置進口，壓低庫存成本，使得即便關稅最終重建，消費者價格也難以回升；(2) 參議院中的自由貿易派共和黨人（如 Toomey 系）成功阻擋關稅授權立法，讓行政部門失去國會這條路；(3) 川普轉向以雙邊談判取代單邊關稅——利用判決後的談判籌碼迫使各國讓步，最終達成的協議關稅率遠低於 IEEPA 時期。如果這三者中任何一個成立，市場的樂觀就有基礎。但目前的政治訊號——川普的「恥辱」定性、白宮即刻啟動替代方案、以及 7 項 Section 232 調查已在推進——全部指向相反方向。

## 投資影響

- **SPY**（S&P 500 ETF）：現價約 [$682](https://finance.yahoo.com/quote/SPY/)。短期受惠於關稅取消利多，上行至 $695–700（+2–3%）。但若行政部門 Section 301 動作快速、或國會通過授權立法，回吐風險至 $660–670（-2% 至 -3%）。
- **XRT**（零售 ETF）：判決後[零售股飆升](https://www.bloomberg.com/news/articles/2026-02-20/retail-stocks-jump-after-supreme-court-strikes-down-us-tariffs)，直接受惠於進口成本下降。若 IEEPA 關稅確定不會被替代，上行 +8–12%。但若 Section 301 重新對消費品加稅，回吐全部漲幅。
- **TLT**（20 年以上國債 ETF）：現價 [$89.62](https://finance.yahoo.com/quote/TLT/)，52 週範圍 $83.30–$94.09。關稅取消 → 通膨降溫 → 降息預期升高 → TLT 受惠。上行至 $93–95（+4–6%）。但退稅造成的赤字擴大可能推升期限溢價，限制漲幅。
- **GLD**（黃金 ETF）：金價 [$5,002/oz](https://www.fxempire.com/forecasts/article/gold-vs-bitcoin-why-gold-is-surging-while-bitcoin-struggles-in-2026-1574587)。美元走弱 + 財政不確定性支撐黃金。若退稅成本推升赤字擔憂，金價可能測試 $5,200–5,300（+4–6%）。下行風險：若關稅政策塵埃落定、不確定性消退，回調至 $4,800（-4%）。
- **DXY/UUP**（美元）：DXY 約 [97.90](https://finance.yahoo.com/quote/DX-Y.NYB/)。關稅取消意味著進口增加 → 貿易赤字擴大 → 美元承壓。若 Section 301 未能迅速重建壁壘，DXY 可能跌至 95–96。

## 後續觀察

1. **行政部門的法律反制**：白宮何時宣布透過 Section 232/301 重建關稅？速度是關鍵——越快行動，市場利多效果越短
2. **退稅法律戰**：進口商何時開始正式申請退稅？$1,335 億的退稅成本如何影響 FY2026 赤字預測？
3. **國會立法動向**：共和黨是否推動授權總統徵收關稅的新法案？若通過，最高法院判決的效力將被繞過
4. **3 月 FOMC 會議**：關稅取消是否改變聯準會的通膨評估？6 月降息機率（目前約 [83%](https://www.cnbc.com/2026/02/13/cpi-inflation-report-january-2026.html)）是否進一步上升？

---

*資料來源：[NPR](https://www.npr.org/2026/02/20/nx-s1-5672383/supreme-court-tariffs)、[CNBC](https://www.cnbc.com/2026/02/20/supreme-court-trump-tariffs-ruling.html)、[Bloomberg](https://www.bloomberg.com/news/articles/2026-02-20/trump-s-tariffs-ruled-illegal-by-supreme-court-what-are-his-options-now)、[NBC News](https://www.nbcnews.com/politics/supreme-court/supreme-court-strikes-trumps-tariffs-major-blow-president-rcna244827)、[Penn Wharton](https://budgetmodel.wharton.upenn.edu/issues/2026/2/20/supreme-court-tariff-ruling-ieepa-revenue-and-potential-refunds)、[Tax Policy Center](https://taxpolicycenter.org/taxvox/supreme-court-ruling-ieepa-tariffs-could-ease-cost-burdens-less-you-might-think)、[CBO](https://www.cbo.gov/publication/61882)、[BLS](https://www.bls.gov/news.release/cpi.nr0.htm)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
