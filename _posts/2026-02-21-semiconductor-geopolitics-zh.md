---
layout: post
title: "半導體地緣再平衡：CHIPS 量產進度、中國替代路線與供應鏈風險"
date: 2026-02-21 11:00:00 +0800
categories: [macro]
tags: [macro, etf, investing, ai, technology, semiconductor, geopolitics, chips-act, tsmc]
macro_kind: long
description: "CHIPS Act $330 億補貼進入執行期，TSMC 亞利桑那 3nm 廠 2027 量產在即，華為 Ascend 910C 產量翻倍至 60 萬顆——半導體供應鏈的去全球化從口號變成產線佈局。"
lang: zh-TW
---

## 科技動態

全球半導體產業正經歷冷戰以來最劇烈的地緣重組。美國 CHIPS and Science Act 已向 35 家企業[撥出 $330 億補貼](https://www.semiconductors.org/chip-supply-chain-investments/)，TSMC 亞利桑那二廠（Fab 21 Phase 2）建設完工並[提前數月進入設備安裝期](https://www.trendforce.com/news/2025/12/18/news-tsmc-reportedly-accelerates-arizona-2nd-fab-eyes-3q26-tool-install-2027-3nm-production/)，目標 2027 年量產 3nm 製程。與此同時，華為宣布 2026 年 Ascend 910C AI 晶片[產量翻倍至 60 萬顆](https://www.webpronews.com/huawei-to-double-ascend-910c-ai-chip-output-to-600000-in-2026-rivaling-nvidia/)，中國半導體設備自製率預計從 2025 年的 20% 升至 [2026 年的 24%](https://www.eetimes.com/how-china-struggles-to-reach-wfe-self-sufficiency/)。半導體供應鏈的「去全球化」正從政策口號變成實際的產線佈局。

## 經濟影響分析

<div style="max-width: 600px; margin: 2em auto;">
  <canvas id="macroChart8"></canvas>
</div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
new Chart(document.getElementById('macroChart8'), {
  type: 'bar',
  data: {
    labels: ['Intel', 'TSMC', 'Samsung', '其他 32 家'],
    datasets: [
      {
        label: 'CHIPS Act 補貼（$B）',
        data: [7.86, 6.6, 4.75, 13.79],
        backgroundColor: 'rgba(59, 130, 246, 0.75)',
        borderColor: 'rgba(59, 130, 246, 1)',
        borderWidth: 1
      },
      {
        label: '已撥付（$B）',
        data: [2.2, 1.5, 0.5, 1.8],
        backgroundColor: 'rgba(34, 197, 94, 0.7)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CHIPS Act 補貼分配 vs 實際撥付（資料來源：Commerce Dept、SIA）',
        color: '#e2e8f0',
        font: { size: 12 }
      },
      legend: { labels: { color: '#94a3b8', font: { size: 11 } } }
    },
    scales: {
      x: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255,255,255,0.08)' } },
      y: {
        ticks: { color: '#94a3b8', callback: function(v) { return '$' + v + 'B'; } },
        grid: { color: 'rgba(255,255,255,0.08)' },
        min: 0,
        max: 16
      }
    }
  }
});
</script>

### CHIPS Act 進入量產期：從撥款到出貨

$390 億的 CHIPS Act 製造補貼已[核定 $330 億](https://www.semiconductors.org/chip-supply-chain-investments/)，但實際撥付僅約 $60 億——補貼是依里程碑 (milestone-based) 撥款，工廠需達標才能請領。Intel 拿到最大筆 [$78.6 億](https://www.trendforce.com/news/2024/12/23/news-chips-act-funding-highlights-before-trump-takes-office-tsmc-intel-samsung-and-more/)，但在前任 CEO 下台後面臨製程延遲的信任危機。TSMC 獲 [$66 億](https://www.trendforce.com/news/2024/12/23/news-chips-act-funding-highlights-before-trump-takes-office-tsmc-intel-samsung-and-more/)，亞利桑那一廠已於 2025 年底開始 [4nm 量產](https://pr.tsmc.com/english/news/2977)，二廠預計 2026 年 Q3 開始設備安裝、2027 年量產 3nm。三廠（2nm/A16）已於 [2025 年 4 月動工](https://www.datacenterdynamics.com/en/news/tsmc-updates-arizona-fab-production-timeline-signs-semiconductor-talent-agreement-with-kyushu-university/)。這意味著 2027 年起，美國本土將首次擁有 3nm 先進製程的量產能力——但距離取代台灣的產能集中度仍遙遙無期。

### 華為 Ascend 突圍：良率是關鍵

在出口管制的壓力下，華為走出一條 DUV（深紫外光）多重曝光的替代路線。Ascend 910C 採用 SMIC 7nm (N+2) 製程，良率已從初期的不到 20% [提升至近 40%](https://www.digitimes.com/news/a20250225PD224/huawei-ascend-ai-chip-yield-rate.html)，首次實現該產線盈利，但仍低於業界 60% 的標準水平。華為計畫 2026 年將 Ascend 系列總產量提升至 [160 萬顆](https://techblog.comsoc.org/2025/10/02/huawei-to-double-output-of-ascend-ai-chips-in-2026-openai-orders-hbm-chips-from-sk-hynix-samsung-for-stargate-uae-project/)，其中 910C 約 60 萬顆。SemiAnalysis 指出，HBM（高頻寬記憶體）供應才是華為擴產的[真正瓶頸](https://newsletter.semianalysis.com/p/huawei-ascend-production-ramp)，因為三星和 SK 海力士受美國出口管制限制對華出貨。中國半導體設備採購 2025 年達 [$427.5 億](https://www.eetimes.com/how-china-struggles-to-reach-wfe-self-sufficiency/)，UBS 預估 2026 年將增至 $470.5 億——設備自製率的提升速度將決定中國能否在無 EUV（極紫外光）光刻機的條件下維持競爭力。

### 關鍵材料的武器化：鎵鍺暫停禁令

中美半導體戰爭不只是晶片和設備。2024 年 12 月，中國對美國[全面禁止出口](https://www.csis.org/analysis/china-imposes-its-most-stringent-critical-minerals-export-restrictions-yet-amidst)鎵 (gallium)、鍺 (germanium) 及銻 (antimony)——中國控制全球 99% 的鎵供應。2025 年 11 月，作為中美貿易談判的善意姿態，中國[暫時解除禁令至 2026 年 11 月 27 日](https://www.mining.com/china-lifts-export-ban-on-gallium-germanium-and-antimony-to-us/)，但改為許可制。USGS 估計，鎵鍺禁令若永久實施，將對美國經濟造成 [$34 億損失](https://www.csis.org/analysis/beyond-rare-earths-chinas-growing-threat-gallium-supply-chains)，其中近半衝擊半導體產業。這個暫停禁令的有效期只剩 9 個月——一旦中美關係再度惡化，關鍵材料供應將立即中斷。

### 台海：地緣風險的定價缺口

台灣製造全球 [超過 60% 的晶圓代工產能，先進製程（7nm 以下）占比超過 90%](https://www.efficioconsulting.com/en-gb/resources/all/china-taiwan-tensions-impacts-on-global-supply-chains-and-semiconductor-availability/)。和平研究所 (IEP) 估計，中國若全面入侵台灣，全球 GDP 將萎縮 [2.8%](https://pacforum.org/publications/yl-blog-114-a-world-reliant-on-taiwans-semiconductor-industry-amid-chinese-aggression/)，美國邏輯晶片價格將飆漲 59%。TSMC 的亞利桑那擴廠某種程度是「矽盾」(Silicon Shield) 的分散化嘗試，但 2027 年前產能仍微乎其微。2026 年 1 月 15 日生效的出口管制新規將對中國的[先進運算半導體出口審查改為逐案審核](https://www.bis.gov/press-release/department-commerce-revises-license-review-policy-semiconductors-exported-china)（原為推定否決），加上 1 月 14 日白宮宣布對特定半導體加徵 25% 關稅——政策走向看似緩和但管制實質未鬆。

### 筆記

CHIPS 補貼逐步落地但撥款遠低於核定額度、台灣先進製程集中度依然超過 90%、華為的 DUV 替代路線良率穩步提升——三條線同步推進，意味著半導體估值中的成長溢價與地緣折價將長期並存。

半導體主軸仍偏多，但供應鏈地緣風險已是常態化變數，不是可以忽略的尾部事件。維持 `SMH/SOXX` 核心配置，`TSM` 以分批策略管理波動（鎵鍺暫停禁令 11 月到期是時間窗口），`KWEB` 僅作小比例戰術倉位。若海外先進製程量產如期兌現且材料供應風險下降，提高半導體權重；若出口管制與材料禁令再升級，降低高 beta 部位。

## 後續觀察

1. **2 月 25 日 NVIDIA Q4 FY2026 財報**：Blackwell 出貨量與中國市場營收下滑幅度，將直接反映出口管制的實際衝擊
2. **2026 年 Q3（7-9 月）TSMC 亞利桑那二廠設備安裝**：是否如期進行將決定 CHIPS Act 里程碑撥款節奏
3. **2026 年 11 月 27 日中國鎵鍺暫停禁令到期**：屆時中美關係狀態將決定關鍵材料是否再度斷供——企業應在此之前建立 6 個月以上的安全庫存
4. **SMIC 5nm 製程量產進度**：若 2026 下半年成功量產，中國半導體自主化將跨越重要門檻，出口管制的邊際效力將進一步下降

---

*資料來源：[SIA](https://www.semiconductors.org/chip-supply-chain-investments/)、[TrendForce](https://www.trendforce.com/news/2025/12/18/news-tsmc-reportedly-accelerates-arizona-2nd-fab-eyes-3q26-tool-install-2027-3nm-production/)、[TSMC](https://pr.tsmc.com/english/news/2977)、[EE Times](https://www.eetimes.com/how-china-struggles-to-reach-wfe-self-sufficiency/)、[DigiTimes](https://www.digitimes.com/news/a20250225PD224/huawei-ascend-ai-chip-yield-rate.html)、[SemiAnalysis](https://newsletter.semianalysis.com/p/huawei-ascend-production-ramp)、[CSIS](https://www.csis.org/analysis/beyond-rare-earths-chinas-growing-threat-gallium-supply-chains)、[BIS](https://www.bis.gov/press-release/department-commerce-revises-license-review-policy-semiconductors-exported-china)、[Tom's Hardware](https://www.tomshardware.com/tech-industry/semiconductors/tsmc-brings-its-most-advanced-chipmaking-node-to-the-us-yet-to-begin-equipment-installation-for-3mn-months-ahead-of-schedule-arizona-fab-slated-for-production-in-2027)*
*市場數據截至：2026-02-21*
*本文僅供參考，不構成投資建議。*
