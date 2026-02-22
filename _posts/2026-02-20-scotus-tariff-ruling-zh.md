---
layout: post
title: "Roberts 的六個字封殺 IEEPA 關稅，但 Section 122 的 150 天倒數才是真正的賽局"
date: 2026-02-20 20:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, geopolitics, tariff, fiscal]
macro_kind: long
description: "最高法院 6:3 裁定 IEEPA 關稅違法，但白宮當天動用 Section 122 重建 15% 全球關稅——150 天後到期、法律基礎存疑。$1,420 億退稅無自動機制，CRFB 估計判決將增加 $2.4 兆國債。真正的交易不是判決本身，而是 150 天倒數計時裡的關稅工具重組。"
lang: zh-TW
---

## 國際政經背景

2 月 20 日，美國最高法院在 [*Learning Resources, Inc. v. Trump*](https://supreme.justia.com/cases/federal/us/607/24-1287/) 案中以 6:3 裁定，總統依據《國際緊急經濟權力法》(International Emergency Economic Powers Act, IEEPA) 徵收的所有關稅違法。首席大法官 Roberts 撰寫多數意見，核心句只有六個字：「[徵稅權屬國會](https://www.scotusblog.com/2026/02/a-breakdown-of-the-courts-tariff-decision/)」(a branch of the taxing power)——IEEPA 授權總統「管制進口」(regulate importation)，但管制與徵稅是憲法上完全不同的權力。然而判決墨跡未乾，白宮當天即動用 [Section 122](https://www.whitehouse.gov/presidential-actions/2026/02/imposing-a-temporary-import-surcharge-to-address-fundamental-international-payments-problems/) 簽署行政命令，對全球課徵 10% 臨時關稅，[隔天再調高至法定上限 15%](https://www.cnbc.com/2026/02/21/trump-tariffs.html)，2 月 24 日生效。三個不同的法律權限、兩天內的三次關稅政策轉向——這不是結束，而是關稅法律戰的新一輪開局。

## 經濟傳導機制

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart9"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart9'), {
  type: 'bar',
  data: {
    labels: [
      'IEEPA 對等關稅\n（已推翻）',
      'IEEPA 芬太尼關稅\n（已推翻）',
      'Section 122\n全球 15%（新增）',
      'Section 232\n鋼鋁 50%（不受影響）',
      'Section 232\n汽車 25%（不受影響）',
      'Section 301\n調查中'
    ],
    datasets: [{
      label: '估計年度關稅收入（十億美元）',
      data: [95, 38, 55, 25, 15, 0],
      backgroundColor: [
        'rgba(239, 68, 68, 0.7)',
        'rgba(239, 68, 68, 0.5)',
        'rgba(251, 191, 36, 0.7)',
        'rgba(59, 130, 246, 0.7)',
        'rgba(59, 130, 246, 0.5)',
        'rgba(148, 163, 184, 0.4)'
      ],
      borderColor: [
        'rgba(239, 68, 68, 1)',
        'rgba(239, 68, 68, 1)',
        'rgba(251, 191, 36, 1)',
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
        text: '各法律依據關稅收入估算（資料來源：Yale Budget Lab, CRFB, Tax Foundation）',
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
      y: { ticks: { color: '#94a3b8', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.1)' } }
    }
  }
});
</script>

### 判決的法律地震：Roberts 切割「管制」與「徵稅」

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>重大問題原則 (Major Questions Doctrine)</strong>：最高法院近年發展的法律原則——行政機關若主張具有重大經濟或政治影響的權力，必須指出國會的明確授權。2022 年 <em>West Virginia v. EPA</em> 確立此原則。
</aside>

Roberts 的[多數意見](https://www.supremecourt.gov/opinions/25pdf/24-1287_4gcj.pdf)做了一件看似簡單但影響深遠的事：他區分了「管制進口」(regulate importation) 與「對進口徵稅」(impose tariffs)。IEEPA 原文授權總統在國家緊急狀態下「管制」進出口，但 Roberts 指出，關稅「[直接對國內進口商徵收以增加政府收入](https://www.scotusblog.com/2026/02/a-breakdown-of-the-courts-tariff-decision/)」，這是憲法第一條明確保留給國會的徵稅權。他寫道：「[當國會授予徵收關稅的權力時，它會明確地、附帶審慎限制條件地這樣做。IEEPA 兩者皆無。](https://www.cbsnews.com/news/trump-tariffs-supreme-court-decision/)」

Roberts、Gorsuch 與 Barrett 三人進一步引用重大問題原則 (major questions doctrine)：IEEPA 自 1977 年立法以來的 50 年間，[沒有任何一位總統援引它來徵收關稅](https://www.scotusblog.com/2026/02/a-breakdown-of-the-courts-tariff-decision/)，歷史上的「不使用」本身就是反證。反觀 Kavanaugh 撰寫的[少數意見](https://supreme.justia.com/cases/federal/us/607/24-1287/)主張「管制進口」與「調整進口」(adjust imports) 在實質上無法區分，並援引尼克森時代《與敵國貿易法》(Trading with the Enemy Act, TWEA) 的先例。他還警告：重大問題原則「[從未被適用於外交事務法規](https://reason.com/2026/02/20/gorsuch-blasts-thomas-alito-and-kavanaugh-for-favoring-trumps-illegal-tariffs/)」，這一次開了危險先例。Gorsuch 對此的回擊相當尖銳——他[逐案列舉](https://reason.com/2026/02/20/gorsuch-blasts-thomas-alito-and-kavanaugh-for-favoring-trumps-illegal-tariffs/) Thomas、Alito、Kavanaugh 三人過去在重大問題原則案件中的投票紀錄，指出他們的立場無法與本案調和。

### Section 122 的 150 天賽局：Plan B 的法律地雷

白宮的即時反應是動用 Section 122——這條 1974 年的法律允許總統在「重大且嚴重的國際收支赤字」(large and serious balance-of-payments deficits) 下課徵最高 [15% 的臨時關稅，為期 150 天](https://www.cfr.org/articles/how-trumps-tariffs-could-survive-the-supreme-court-ruling)。但這個 Plan B 自身的法律基礎已經受到質疑。BCA Research 首席全球策略師 Peter Berezin [明確指出](https://fortune.com/2026/02/21/trump-tariffs-section-122-trade-law-trade-deficit-capital-account-surplus-balance-of-payments/)：「國際收支赤字和貿易赤字不是同一件事。在浮動匯率制度下，美國不可能出現國際收支赤字。」(A balance of payments deficit is not the same thing as a trade deficit. You cannot have a balance of payments deficit if you have a flexible exchange rate.) 美國確實有貿易逆差，但資本帳的順差完全抵消——國際收支淨額在浮動匯率下恆等於零。這意味著 Section 122 的法律前提可能根本不成立，新一輪訴訟幾乎確定將發生。

更關鍵的結構性限制：Section 122 [必須全球一體適用，不能針對個別國家](https://www.cfr.org/articles/how-trumps-tariffs-could-survive-the-supreme-court-ruling)。這意味著原先對加拿大、墨西哥、中國的「芬太尼關稅」無法透過此條復活。而 Section 122 的 15% 上限也遠低於 IEEPA 時期對中國最高 34% 的對等稅率。[Cato Institute 的 Clark Packard 警告](https://www.cato.org/blog/supreme-court-got-it-right-ieepa-dont-pop-champagne-yet)，150 天只是緩衝，行政部門正在這段時間內全速啟動 Section 232 與 Section 301 調查——Section 232 需要商務部 [270 天調查](https://www.congress.gov/crs-product/IF13006)但對稅率無上限，Section 301 則需要 [12–18 個月正式調查](https://thehill.com/business/trade/5748172-trump-tariffs-section-301/)。兩條路都比 IEEPA 慢得多、程序門檻高得多，但一旦建立，比 Section 122 持久得多——Section 301 的中國關稅從川普第一任延續到拜登任期，至今未撤。

### 退稅的 $1,420 億法律戰：沒有自動機制

<aside style="float: right; width: 220px; margin: 0 0 1em 1.5em; padding: 0.75em 1em; background: rgba(100,116,139,0.15); border-left: 3px solid rgba(100,116,139,0.4); font-size: 0.82em; line-height: 1.6; border-radius: 4px;">
<strong>國際貿易法院 (Court of International Trade)</strong>：位於紐約的聯邦專業法院，專門處理進出口爭議、海關估價與關稅退還訴訟。退稅案件須在此提起。
</aside>

CBP 數據顯示 IEEPA 關稅在 2025 年共徵收約 [$1,420 億](https://budgetlab.yale.edu/research/state-us-tariffs-february-20-2026)。最高法院明確表示政府「[可能被要求退還數十億美元](https://supreme.justia.com/cases/federal/us/607/24-1287/)」，但刻意未指定退稅機制。這不是疏忽，而是法律現實：退稅須經[國際貿易法院](https://www.swlaw.com/publication/supreme-court-strikes-down-ieepa-tariffs-the-refund-process-will-be-messy/)逐案審理，進口商需個別提出申請，CBP 再重新核算稅額。TD Securities 估計整個流程需 [12–18 個月](https://fortune.com/2026/02/21/tariff-refunds-legal-fight-trade-courts-companies-importers-consumers/)。[Fortune 報導](https://fortune.com/2026/02/21/tariff-refunds-legal-fight-trade-courts-companies-importers-consumers/)更直言：「美國企業面臨的是長達五年的法律戰。」而退稅對象是進口商，不是消費者——已轉嫁給終端買家的成本不會自動退回。

### 財政衝擊：$2.4 兆的債務加碼

被推翻的 IEEPA 關稅原預計十年貢獻約 $3 兆聯邦收入。[CRFB 估算](https://www.crfb.org/blogs/scotus-tariff-ruling-could-add-24-trillion-debt)，判決將淨減少 $1.9 兆收入、增加 $2.4 兆國債至 FY2036，債務占 GDP 比率將攀升至 [125%](https://www.crfb.org/blogs/scotus-tariff-ruling-could-add-24-trillion-debt)（原 CBO 基準為 120%）。上期我們的[CBO 利率假設分析]({{ site.baseurl }}{% post_url 2026-02-20-cbo-debt-trajectory-zh %})指出，CBO 假設 10 年期殖利率降至 3.6% 而市場定價 4.1%——若利率假設失準再疊加關稅收入消失，實際債務路徑比任何一份官方報告都更陡。

上期觀點文分析了 Core PCE 3.0% 的結構——住房 OER 滯後佔核心通膨超標幅度六成以上。關稅取消對通膨的降壓效果確實存在：[Tax Policy Center 估算](https://taxpolicycenter.org/taxvox/supreme-court-ruling-ieepa-tariffs-could-ease-cost-burdens-less-you-might-think)取消 IEEPA 關稅可降低家庭年均成本 $1,200–1,500。但 Section 122 的 15% 立即接力，加上 Section 232 鋼鋁 50%、汽車 25% 完好無損，[Yale Budget Lab](https://budgetlab.yale.edu/research/state-us-tariffs-february-20-2026) 估計剩餘關稅仍使 GDP 永久縮小 0.1%（約 $300 億/年），失業率年底前上升 0.3 個百分點。Pangaea Policy 創辦人 Terry Haines 的[判斷](https://ca.finance.yahoo.com/video/scotus-tariff-ruling-markets-understand-161014286.html)或許最精準：「投資人應準備好面對基於炒作的過度反應，接著很快回落到現實」(prepare for immediate markets hype-based overreaction followed by a quick comedown)，因為「關稅哪兒也不會去」(tariffs are here to stay)。

判決公布後 [S&P 500 盤中漲 0.7%、Nasdaq 漲超 1%](https://www.cnbc.com/2026/02/19/stock-market-today-live-updates.html)，但漲幅收盤前收窄。更值得注意的是上期我們提到 VIX 在 19.62 偏低——判決當日 VIX 跳升至 [20.71](https://finance.yahoo.com/quote/%5EVIX/)，+5.57%。波動率上升反映的不是判決（利多），而是 Section 122 的法律不確定性和關稅工具重組的混沌期。

## 筆記

這個判決的本質是關稅工具的「降級」而非「撤除」。IEEPA 賦予的是即時、無上限、可針對個別國家的關稅權，Section 122 給的是 15% 上限、150 天期限、全球一體適用的臨時工具——在覆蓋率和精準度上都大幅縮水。但 150 天的倒數計時（約 7 月 19 日到期）就是行政部門建立 Section 232/301 長期關稅結構的窗口。如果這個窗口內完成足夠多的調查和新關稅，市場短期利多就只是一個過渡；如果 Section 122 本身也被法院推翻（Berezin 的國際收支論點相當有力），關稅空窗期可能擴大。

配置上維持 `SPY` 核心持有，零售股（`XRT`）在 IEEPA 關稅取消與 Section 122 接力之間的淨效果是進口成本小幅下降（15% vs 原先 10–34%），有短期空間但不宜追高。`TLT` 在 $2.4 兆額外國債的情境下面臨期限溢價壓力，但若 Section 122 被推翻導致更大政策混亂，避險需求會推升。`GLD` 的角色更明確了——退稅法律戰 + 赤字加碼 + 政策可預測性惡化，三重因素支撐。觸發條件：若 Section 122 在法院遭阻擋，擴大防禦配置；若國會在 150 天內通過關稅授權法案繞過最高法院，則回到 IEEPA 前的框架重新評估。

## 後續觀察

1. **Section 122 法律挑戰**：進口商是否在國際貿易法院對 Section 122 提起訴訟？「國際收支赤字」的法律定義爭議可能在數週內進入司法程序
2. **150 天倒數（~7 月 19 日）**：Section 232/301 調查進度——商務部能否在窗口內完成足夠調查以建立後續關稅？
3. **退稅訴訟量**：CBP 收到多少正式退稅申請？退稅規模的預期值將直接影響 FY2026 赤字預測
4. **國會立法動向**：共和黨是否推動新法案直接授權總統徵收關稅？若通過，最高法院判決的實質效力被繞過
5. **3 月 FOMC 會議**：關稅工具重組期的通膨不確定性是否影響 Fed 決策？6 月降息機率（目前約 [83%](https://www.cnbc.com/2026/02/13/cpi-inflation-report-january-2026.html)）是否因 Section 122 關稅維持而下修？

---

*資料來源：[SCOTUS 判決全文](https://www.supremecourt.gov/opinions/25pdf/24-1287_4gcj.pdf)、[SCOTUSblog](https://www.scotusblog.com/2026/02/a-breakdown-of-the-courts-tariff-decision/)、[Justia](https://supreme.justia.com/cases/federal/us/607/24-1287/)、[CFR](https://www.cfr.org/articles/how-trumps-tariffs-could-survive-the-supreme-court-ruling)、[Yale Budget Lab](https://budgetlab.yale.edu/research/state-us-tariffs-february-20-2026)、[CRFB](https://www.crfb.org/blogs/scotus-tariff-ruling-could-add-24-trillion-debt)、[Cato Institute](https://www.cato.org/blog/supreme-court-got-it-right-ieepa-dont-pop-champagne-yet)、[CNBC](https://www.cnbc.com/2026/02/20/supreme-court-trump-tariffs-ruling.html)、[Fortune](https://fortune.com/2026/02/21/trump-tariffs-section-122-trade-law-trade-deficit-capital-account-surplus-balance-of-payments/)、[Tax Policy Center](https://taxpolicycenter.org/taxvox/supreme-court-ruling-ieepa-tariffs-could-ease-cost-burdens-less-you-might-think)、[白宮 Section 122 行政命令](https://www.whitehouse.gov/presidential-actions/2026/02/imposing-a-temporary-import-surcharge-to-address-fundamental-international-payments-problems/)*
*市場數據截至：2026-02-22*
*本文僅供參考，不構成投資建議。*
