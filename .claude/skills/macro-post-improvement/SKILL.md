---
name: macro-post-improvement
description: Improve macro-post quality via daily style-and-source research. Use when reviewing how to make macro-post closer to observation-driven Taiwan macro commentary (e.g., 游庭皓風格), auditing source diversity, or proposing actionable SKILL.md updates.
---

# macro-post 改善研究（觀察型）

## 目標
把每日研究變成「可落地的改版清單」，讓 macro-post 更像觀察型研究員稿：
- 論點清楚
- 數字可驗證
- 來源跨區域且不只 wire
- 結論可被後續數據驗證

## 研究輸入（每日最少）
1) **新聞/Blog**：至少 3 篇（國際 + 中文至少各 1）
2) **研究報告/官方資料**：至少 3 份（央行/統計/智庫/官方機構）
3) **社群/影音**：至少 2 則（YouTube / Podcast / X 任選）
4) 必查線索：`https://yutinghao.finance/aboutus/`（若抓不到內容，需寫缺口與替代來源）

## 產出格式（寫入每日研究報告）
新增段落：`## macro-post 改進建議（風格/來源/結構）`

每次至少 3 點，且每點都必須包含：
- **問題**：現況哪裡不夠好（1 句）
- **建議改動**：要改哪條規則或哪段文字（具體到檔案/段落）
- **可驗證標準**：改完怎麼判斷有效（例如：來源分布、語句長度、內部術語數量）
- **成本/風險**：可能副作用與回滾方式

## 可執行評分卡（0-2 分）
- **來源多樣性**：是否同時涵蓋亞洲/歐洲/美洲非 wire 來源
- **可驗證性**：是否每個核心數字可對應來源與時間口徑
- **框架清晰度**：是否明確呈現「因 → 果 → 驗證」
- **反例完整度**：是否寫出何時框架失效
- **可讀性**：是否避免模板腔與內部術語

總分 < 7：優先改 skill 規則；
總分 ≥ 7：維持現行規則，只做微調。

## 更新 skill 的觸發條件
若同一問題連續 3 天出現，且都能提出明確改法，則可直接更新：
- `.claude/skills/macro-post/SKILL.md`
- `.codex/skills/macro-post/SKILL.md`

更新後需在報告中列出：
- 修改前後差異（條列）
- 預期改善指標
- 若效果不佳的回滾方式

## 禁止事項
- 不得只靠 Reuters/Bloomberg 做結論骨架
- 不得輸出空泛風格建議（例如「更有深度」）
- 不得把未發布預估寫成既成事實
- 不得把內部術語（step/gate/workflow/pipeline）放進對外摘要
