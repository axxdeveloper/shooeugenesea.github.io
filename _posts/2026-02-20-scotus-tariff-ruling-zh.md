---
layout: post
title: "最高法院否決 IEEPA 關稅後：關稅工具重組與退稅風險評估"
date: 2026-02-20 20:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, tariff, fiscal]
description: "美國最高法院以 6:3 裁定 IEEPA 關稅違法，影響已徵稅款與後續政策路徑。本文以事實與推論分離，評估 Section 232/301 重建關稅的時間差及 SPY、XRT、TLT、GLD 的配置影響。"
lang: zh-TW
---

## 國際政經背景

2 月 20 日，美國最高法院以 [6:3 投票](https://www.npr.org/2026/02/20/nx-s1-5672383/supreme-court-tariffs)裁定，川普總統依據《國際緊急經濟權力法》(International Emergency Economic Powers Act, IEEPA) 所徵收的對等關稅違法。首席大法官 Roberts 撰寫多數意見，認定 IEEPA 並未授權總統徵收關稅——[徵稅權屬國會專有的憲法權力](https://www.cnbc.com/2026/02/20/supreme-court-trump-tariffs-ruling.html)。此判決推翻了去年 4 月「解放日」(Liberation Day) 以來所有依據 IEEPA 實施的關稅，包括對全球的 10% 基線關稅、國別對等關稅（最高達 34%）、以及對中加墨的「芬太尼關稅」。川普稱判決為「恥辱」，並聲稱已有[替代方案](https://www.bloomberg.com/news/articles/2026-02-20/trump-s-tariffs-ruled-illegal-by-supreme-court-what-are-his-options-now)。

## 經濟傳導機制

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart9"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart9'), {
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

### 對通膨的影響：短期利多但幅度有限

IEEPA 關稅推翻對消費者物價有直接的降壓效果。進口商品價格將下降，尤其是消費電子、服裝、家居用品等受對等關稅影響最大的品類。[Tax Policy Center](https://taxpolicycenter.org/taxvox/supreme-court-ruling-ieepa-tariffs-could-ease-cost-burdens-less-you-might-think) 估算，取消 IEEPA 關稅可降低美國家庭年均成本約 $1,200–1,500。配合 1 月 CPI 已降至 [2.4%](https://www.bls.gov/news.release/cpi.nr0.htm)（YoY，為 2025 年 5 月以來最低）、核心 CPI 降至 [2.5%](https://www.cnbc.com/2026/02/13/cpi-inflation-report-january-2026.html)（2021 年 4 月以來最低），通膨降溫趨勢可望加速。

不過仍需注意幾個對沖因素。Section 232 關稅仍在推升製造業成本；核心個人消費支出 (Core PCE) 12 月數據為 [3.0%](https://www.cnbc.com/2026/02/20/pce-inflation-december-2025.html) YoY（高於預期的 2.9%），且住房通膨仍頑固。此外，如果行政部門透過 Section 301 或新的 Section 232 快速重建關稅壁壘，通膨降壓效果的持續性將有待觀察。

上期我們的觀點文提到 Core PCE 為 3.0%——這個數字現已確認：12 月月度 Core PCE 為 [3.0% YoY](https://tradingeconomics.com/united-states/core-pce-price-index-annual-change)，高於預期的 2.9%。[Q4 GDP 報告中的國內購買物價指數](https://www.bea.gov/news/2026/gdp-advance-estimate-4th-quarter-and-year-2025)則為 +3.7%。方向一致：通膨仍遠高於聯準會 2% 目標。

### 財政面：退稅成本與赤字壓力

被忽略的風險在財政面。若法院最終要求全額退還 $1,335–1,750 億的已徵 IEEPA 關稅，這筆支出將直接加大聯邦赤字。CBO 2 月最新報告預估 FY2026 赤字已達 [$1.9 兆](https://www.cbo.gov/publication/61882)，關稅退款將進一步推升壓力。同時，IEEPA 關稅本來預計 10 年可貢獻約 $3 兆的聯邦收入——這條路徑已不可行。除非國會立法授權新的關稅機制，否則 CBO 的赤字預測（債務占 GDP [120% by 2036](https://www.cbo.gov/publication/61882)）還要再上修。

### 市場反應：短期利多與中期不確定性

判決公布後市場迅速反應：盤中 [S&P 500 一度漲 0.7%、Nasdaq 漲超 1%、Dow 漲 0.2%](https://www.cnbc.com/2026/02/19/stock-market-today-live-updates.html)，但漲幅在收盤前明顯收窄——市場在消化短期利多後開始定價「行政反制」的不確定性。零售股大幅上漲——Nike、Target 等[進口依賴型企業直接受惠](https://www.bloomberg.com/news/articles/2026-02-20/retail-stocks-jump-after-supreme-court-strikes-down-us-tariffs)。美元與美國國債同步下跌。Wedbush 分析師 Dan Ives 指出：「[市場很大程度上已預期關稅會被推翻](https://www.cnbc.com/2026/02/19/how-the-stock-market-may-move-on-the-supreme-courts-tariff-decision.html)」。

值得注意的是，昨日我們指出 VIX 在 19.62 的水位偏低——今天 VIX 跳升至 [20.71](https://finance.yahoo.com/quote/%5EVIX/)，單日漲幅 +5.57%。波動率的上升反映的不是判決本身（這是利多），而是判決後的不確定性：行政部門的反制行動、退稅法律戰、以及國會是否會介入。

### 筆記

**事實：** IEEPA 路徑遭最高法院否決，但 Section 232 關稅仍在，Section 301 調查可作為替代工具。  
**推論：** 市場短期交易的是「關稅空窗」，中期交易的是「政策重建速度」。

**一句話結論：** 裁決是政策路徑轉換，不是關稅議題結束。  
**資產配置框架（3-12 個月）：** 以 `SPY` 核心持有，搭配 `XRT` 的事件性受惠與 `TLT` 的政策不確定性對沖；`GLD` 作為財政與政策波動保險。  
**再平衡觸發條件（1-3 年）：** 若 Section 301/232 快速重建且通膨再升，降低零售受惠部位；若關稅重建延後且核心通膨續降，增加消費與長債配置。

## 後續觀察

1. **行政部門的法律反制**：白宮何時宣布透過 Section 232/301 重建關稅？速度是關鍵——越快行動，市場利多效果越短
2. **退稅法律戰**：進口商何時開始正式申請退稅？$1,335 億的退稅成本如何影響 FY2026 赤字預測？
3. **國會立法動向**：共和黨是否推動授權總統徵收關稅的新法案？若通過，最高法院判決的效力將被繞過
4. **3 月 FOMC 會議**：關稅取消是否改變聯準會的通膨評估？6 月降息機率（目前約 [83%](https://www.cnbc.com/2026/02/13/cpi-inflation-report-january-2026.html)）是否進一步上升？

---

*資料來源：[NPR](https://www.npr.org/2026/02/20/nx-s1-5672383/supreme-court-tariffs)、[CNBC](https://www.cnbc.com/2026/02/20/supreme-court-trump-tariffs-ruling.html)、[Bloomberg](https://www.bloomberg.com/news/articles/2026-02-20/trump-s-tariffs-ruled-illegal-by-supreme-court-what-are-his-options-now)、[NBC News](https://www.nbcnews.com/politics/supreme-court/supreme-court-strikes-trumps-tariffs-major-blow-president-rcna244827)、[Penn Wharton](https://budgetmodel.wharton.upenn.edu/issues/2026/2/20/supreme-court-tariff-ruling-ieepa-revenue-and-potential-refunds)、[Tax Policy Center](https://taxpolicycenter.org/taxvox/supreme-court-ruling-ieepa-tariffs-could-ease-cost-burdens-less-you-might-think)、[CBO](https://www.cbo.gov/publication/61882)、[BLS](https://www.bls.gov/news.release/cpi.nr0.htm)、[Yahoo Finance](https://finance.yahoo.com/)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
