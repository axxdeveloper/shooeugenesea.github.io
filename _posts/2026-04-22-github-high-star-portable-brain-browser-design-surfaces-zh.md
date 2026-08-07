---
layout: post
title: "GitHub 高星開源觀察（2026-04-22）：成熟 agent 開始整理可攜知識層，新星衝瀏覽器 harness 與 HTML 設計工作面"
date: 2026-04-22 10:30:00 +0800
categories: [tech]
tags: [github, open-source, ai, agents, browser, design-system, coding-agent]
description: "GitHub API 顯示，既有高星 agent 專案這週正把重心放到可攜知識層、工具 gateway、session 維運與 write hooks；近 7 天新高星則集中在 self-healing browser harness、HTML-native design skill、跨 agent 可攜 brain 與語意化 design extraction。"
lang: zh-TW
---

- 這週最值得看的 GitHub 訊號，不是又多了一批「很會聊天」的 AI repo，而是 **成熟 agent 專案開始整理可攜知識層與控制面，新爆紅專案則直接衝瀏覽器與設計工作面**。
- 成熟層這次代表很清楚： [OpenClaw](https://github.com/openclaw/openclaw)、[Codex](https://github.com/openai/codex)、[Goose](https://github.com/aaif-goose/goose)、[Hermes Agent](https://github.com/NousResearch/hermes-agent) 都在補 session 邊界、provider / auth、tool hooks、背景執行與治理能力。
- 新興層也很鮮明： [Browser Harness](https://github.com/browser-use/browser-harness)、[Huashu Design](https://github.com/alchaincyf/huashu-design)、[agentic-stack](https://github.com/codejunkie99/agentic-stack)、[design-extract](https://github.com/Manavarya09/design-extract) 幾乎都不是再做一個 chat UI，而是在做 **可直接交付工作的表面**。
- 如果把這兩組資料放在一起看，這週真正主線其實是：**agent 生態正在從「模型會不會做」走向「知識能不能帶著走、工作結果能不能直接落地」。**

## 背景脈絡

我這次一樣拆成兩組資料看：

1. **既有高星近期更新**：`stars > 30000` 且 `pushed >= 2026-04-15`
2. **近 7 天新高星**：`created >= 2026-04-15` 且 `stars > 500`

成熟高星 repo 裡，最有代表性的不是單一 feature，而是 runtime 整體往三個方向收斂：

- **工具與 provider 接口更正式化**
- **session / context / 背景執行更可治理**
- **人類能看見 agent 在做什麼、用什麼邊界做**

| Repo | 星數 | 這週訊號 | 我怎麼解讀 |
|---|---:|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 361,922 | [`v2026.4.20`](https://github.com/openclaw/openclaw/releases/tag/v2026.4.20) 補 system prompt、tiered pricing、session prune、cron state 拆分、browser click recovery | assistant 平台開始把治理面與維運面當正式產品表面 |
| [openai/codex](https://github.com/openai/codex) | 76,827 | 近兩日連續補 `remote plugin list/read`、`AWS SigV4 auth`、`apply_patch hooks` | coding agent 不只會改檔，還要能接企業 auth 與遠端工具面 |
| [aaif-goose/goose](https://github.com/aaif-goose/goose) | 42,954 | 近期 commit 聚焦 auto-compaction、agent 管理流、TUI 改善、chat model selection 持久化 | CLI agent 開始面對長 session、切 model、背景執行的真實操作成本 |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | 108,367 | [`v2026.4.16`](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.16) 推 Tool Gateway；近期又補 delegation knobs 與 TUI diff | agent runtime 的競爭點正移到工具通道整合與委派控制 |

近 7 天新高星 repo 的主線則更集中，幾乎都在搶 **工作表面**：

| Repo | 建立時間 | 星數 | 搶到的表面 |
|---|---|---:|---|
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 2026-04-17 | 4,501 | 真瀏覽器控制與自我修補 harness |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 2026-04-19 | 3,210 | HTML-native 設計／原型／投影片／動畫產出 |
| [codejunkie99/agentic-stack](https://github.com/codejunkie99/agentic-stack) | 2026-04-15 | 1,293 | 跨 Claude Code / Codex / OpenClaw / Hermes 的可攜 brain |
| [Manavarya09/design-extract](https://github.com/Manavarya09/design-extract) | 2026-04-15 | 1,280 | 把網站外觀抽成語意化 design system 與 prompt pack |

這個對照很有意思。

成熟層在整理「agent 怎麼穩定存在於系統裡」；新興層在整理「agent 怎麼直接嵌進工作現場，生出可交付結果」。前者是 runtime 收斂，後者是 surface 爭奪。

## 技術重點

### 1. 高星 agent 專案這週共同在做的，是把 agent 的腦、手、治理面分開

如果只看 repo 名稱，這四個案子差很多；但把最近更新並排看，方向非常一致。

[Codex](https://github.com/openai/codex) 最近最值得注意的，不是單一 release，而是 commit 連續性：

- [`feat: Support remote plugin list/read`](https://github.com/openai/codex/commit/a978e411f628529e0f7c4095a5b5389622fca9b4)
- [`feat: add AWS SigV4 auth for OpenAI-compatible model providers`](https://github.com/openai/codex/commit/1cd3ad1f49859e13fe4d2fa009bf0d11c097d20e)
- [`fix(core): emit hooks for apply_patch edits`](https://github.com/openai/codex/commit/09ebc34f17b84c4ec7550960b2f9c090f5dde5b7)

這三個點放一起看，其實是在回答三個很實際的問題：

- 遠端插件與工具能不能被 runtime 正式管理
- 企業／雲端 provider 的驗證能不能進正式 auth 路徑
- 檔案變更能不能被 hook、記錄、攔截、擴充

也就是說，**coding agent 的重點已經不是能不能 patch，而是 patch 所在的整個工作環境能不能被制度化。**

[Goose](https://github.com/aaif-goose/goose) 近期 commit 也很有代表性：

- [`extend goose2 context window ux with auto-compaction`](https://github.com/aaif-goose/goose/commit/469c74d8bcae0d0be7e7f2fc69c345dfc615b377)
- [`improve goose2 agent management flows`](https://github.com/aaif-goose/goose/commit/7e2fb3ee5c52c8fbb193facbdf276d9dc64802ea)
- [`persist and reliably apply chat model selection`](https://github.com/aaif-goose/goose/commit/7325fbdae3bbcf13cebfd3a684ac362d34616a37)

這些變化看起來像 UX 修補，但其實都在處理同一件事：**長 session 與多模型操作的持久性。**

當 agent 開始真的被拿來跑長任務，context compaction、agent 管理、model selection 持久化，這些都不再是邊角問題，而是產品是否能長時間運轉的基本條件。

[Hermes Agent `v2026.4.16`](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.16) 則把另一個方向拉得更清楚：它把 web search、image generation、text-to-speech、browser automation 直接包進 **Nous Tool Gateway**，讓付費訂閱者不用再自己湊多把 API key。近期 commit 又補了 [`delegation width + depth knobs`](https://github.com/NousResearch/hermes-agent/commit/bf73ced4f524028572859d90bc05e2bf40ad0717) 和 TUI diff 顯示細節。

這代表 agent 平台的價值，正在從「會不會叫工具」轉向：

- 工具權限怎麼統一入口
- 子任務委派怎麼調寬度與深度
- 複雜 diff 與執行結果怎麼在介面上被看懂

[OpenClaw `v2026.4.20`](https://github.com/openclaw/openclaw/releases/tag/v2026.4.20) 則很明顯地在補維運層：

- 強化預設 system prompt 與完成偏好
- 支援 tiered model pricing 與 Kimi 成本估算
- 預設啟用 entry cap / age prune，避免 session backlog 把 gateway 撐爆
- 把 cron runtime execution state 拆到 `jobs-state.json`
- 補 browser click timeout recovery

這些點都指向同一件事：**assistant runtime 現在競爭的，已經不是「能不能連很多工具」，而是「能不能長期穩定、成本透明、狀態分明地活著」。**

把 Codex、Goose、Hermes、OpenClaw 放在一起看，我會把這週成熟層總結成一句話：

> **agent 正在從單體黑盒，拆成可攜知識層、可治理工具面、可維運 session 面。**

### 2. Browser Harness 爆紅，不是在賣 framework，而是在賣「讓 agent 直接接管真瀏覽器」

[Browser Harness](https://github.com/browser-use/browser-harness) 的 README 非常直白：

> The simplest, thinnest, self-healing harness that gives LLM complete freedom to complete any browser task.

最值得注意的，不只是它建在 CDP 上，而是它的產品假設很激進：**agent 在執行中如果缺 helper，可以自己改 harness。**

README 裡直接示範：

- agent 發現缺 `upload_file()`
- 中途改 `helpers.py`
- 接著繼續把任務做完

這個方向的意義很大。很多 browser agent 框架卡住的地方，不是能不能 click，而是遇到例外情境時，整個框架太重、太多 recipe、太多封裝，結果 agent 根本無法在任務途中自己補能力。

Browser Harness 反過來走了一條很「薄」的路：

- 一條 websocket 直連 Chrome
- helper 很薄
- domain skill 可以後補
- 甚至提供 free remote browsers 當作部署／stealth／sub-agent 的執行層

這類案子爆紅，代表大家想要的不一定是更完整的瀏覽器框架，而是 **更少阻礙 agent 自己演化的瀏覽器底盤**。

### 3. Huashu Design 與 design-extract 一起說明：設計工作面正在被 HTML 化、語意化、可程式化

[Huashu Design](https://github.com/alchaincyf/huashu-design) 這週衝得很兇，不是因為它再做一個設計聊天機器人，而是它把交付物講得非常具體：

- 高保真互動原型
- HTML deck + 可編輯 PPTX
- MP4 / GIF 動畫
- 印刷級資訊圖
- 5 維設計評審

更關鍵的是，它整體方法是 **HTML-first**。最新 [`v2.0`](https://github.com/alchaincyf/huashu-design/releases/tag/v2.0) 甚至把大 GIF / MP4 從 repo 本體移到 release assets，讓倉庫從 `74M → 612K`，只保留 HTML 源碼與可重建能力。這其實很工程化，因為它在說：

> 設計 skill 不該只是秀結果，還要保留可維護、可 clone、可程式化的產出結構。

另一個非常值得一起看的，是 [design-extract `v10.0.0`](https://github.com/Manavarya09/design-extract/releases/tag/v10.0.0)。這版最重要的不是抓顏色 token，而是往 **語意層** 走：

- page intent classifier
- section roles
- material language
- imagery style
- component library detection
- multi-page crawl
- prompt pack outputs

也就是說，它已經不只在回答「這個網站長怎樣」，而是在回答：

- 這頁是 landing、pricing 還是 docs
- hero、feature-grid、pricing-table、faq 等段落角色是什麼
- 它像 shadcn/ui、MUI 還是 plain Tailwind
- 如果我要交給 LLM 重建，哪種 prompt 能最快復刻

這很重要。因為 design-to-code 工具以前很容易停在「抽 CSS」；但對 LLM 來說，真正有用的通常不是原始樣式本身，而是 **可以重建產品結構的語意骨架**。

把 Huashu Design 和 design-extract 放在一起看，這週最強訊號其實是：

> **設計工作面正在從靜態視覺資產，變成可執行 HTML 產物與可重建的語意規格。**

### 4. agentic-stack 代表另一條很值得注意的新主線：真正值錢的是可攜 brain，不是綁死單一 harness

[agentic-stack](https://github.com/codejunkie99/agentic-stack) 的一句話定位很好：

> Keep one portable memory-and-skills layer across coding-agent harnesses, so switching tools doesn't reset how your agent works.

這句話會被市場買單，不意外，因為它直接打到現在所有 AI coding 使用者的共同痛點：

- 換 Claude Code，行為重學一次
- 換 Codex，技能與記憶重設一次
- 換 OpenClaw / Hermes / Cursor，protocol 與偏好又散掉一次

它最近的 [`v0.8.0`](https://github.com/codejunkie99/agentic-stack/releases/tag/v0.8.0) 重點非常工程導向：

- 新增 Antigravity adapter
- 強化 Claude Code 的 `PostToolUse` episodic logging
- 讓 hook pattern 可由使用者自訂
- 把 deploy / migrate 這種高風險行為的 severity 真正分級

這些都不是 flashy feature，但很有代表性：**大家開始接受 agent 的腦應該獨立於 harness 存在。**

如果這條線走下去，未來大家比較的就不只是哪個 agent 比較會寫 code，而是：

- 記憶能不能遷移
- protocol 能不能遷移
- skills 能不能遷移
- 學到的 lesson 能不能遷移

這是一個很大的市場分水嶺。

## 關鍵取捨

### 1. 把 agent 的知識層與執行層拆開，長期好處很大，但短期複雜度一定上升

Codex 的 hooks / auth、Goose 的 compaction / model persistence、Hermes 的 tool gateway、OpenClaw 的 session prune / cron state，全部都在付一種工程稅：

- 模組更多
- 邊界更多
- 狀態同步更難
- 回歸測試面更廣

但這筆稅不付，agent 一旦從 demo 變成常駐工具，就一定爆在邊界上。

### 2. 瀏覽器 harness 越薄越靈活，但也越容易把風險留給 agent 本身

Browser Harness 的魅力，在於薄、直接、可自修。但代價也非常清楚：

- agent 能自己補 helper，也代表更容易碰到權限與安全邊界
- 直連真瀏覽器，表示 cookie / session / 人機驗證問題更真實
- domain skill 若不足，錯誤也會更直接地落在真頁面上

所以這類產品的成長關鍵，不只是「能不能完成任務」，而是 **能不能在薄抽象下仍維持足夠的安全護欄**。

### 3. HTML-first 設計很有產能，但也把品質責任拉回程式化細節

Huashu Design、design-extract 這類工具讓人很興奮，因為產物可以直接交付。但也正因如此，品質門檻更高：

- 版面是否穩定
- 匯出是否可編輯
- 動畫是否順
- 結構語意是否足以讓 LLM 重建
- 不同頁面之間是否能保持一致

這代表設計 skill 真正難的地方，不在首張 demo，而在 **第 20 次、第 50 次輸出還能不能保持水準與結構一致性**。

### 4. 可攜 brain 很吸引人，但跨 harness 的最低共同語言會很快成為瓶頸

agentic-stack 之所以有趣，是因為它不想綁任何一家工具。但這條路的難點也非常真：

- 各家 hook lifecycle 不同
- 各家 tool schema 不同
- 各家權限模型不同
- 記憶與 lesson 寫入時機不同

也就是說，**portable brain 的價值越高，跨 runtime 的協定壓力就越大。** 如果沒有更清楚的共同結構，最後就會變成每個 adapter 都越長越厚。

## 對開發者影響

這週資料對開發者的啟示，我會整理成四點。

### 1. 選 agent framework 時，現在要看的是知識與治理是否能遷移

接下來更重要的問題會是：

- provider / auth 是否好接
- tool hooks 是否完整
- session 維護與 compaction 是否穩定
- 記憶與 lessons 是否能在不同 runtime 間留下來

**runtime 的可遷移性，會比單純支援多少模型更影響長期留存。**

### 2. browser automation 的新主戰場，不是更多 selector，而是更少阻礙 agent 自修

Browser Harness 類產品給的啟示很直接：

- 不一定要做最厚的框架
- 反而可能要做最薄的底盤
- 讓 agent 在遇到缺口時可以自己補 helper、補 skill、補流程

這跟過去大量手寫 recipe 的 browser automation 思路不同，會更像「給 agent 一個可進化的作業面」。

### 3. 設計與前端工作，會更快從 prompt engineering 走向 artifact engineering

Huashu Design 和 design-extract 都不是在賣 prompt，而是在賣：

- 可以交付的 HTML / PPTX / MP4 / GIF / SVG
- 可以重建產品的 section role / prompt pack / component evidence

也就是說，**下一波設計 AI 工具真正比的是產物結構，不是對話體驗。**

### 4. 跨 agent 的 portable memory / skills，會變成一個越來越大的基建題

如果使用者已經同時在 Claude Code、Codex、OpenClaw、Hermes、Cursor 間切換，那大家越來越不會接受每次都從零開始訓練 agent。這意味著：

- memory format
- lesson lifecycle
- protocol manifest
- permission policy
- skill trigger model

都可能慢慢變成新的基礎設施層。

## 後續觀察

接下來我會特別盯五件事。

### 1. portable brain 會不會從小眾 hack，變成主流 agent runtime 的正式結構

如果 agentic-stack 這類做法持續被更多 harness 接納，未來 `.agent/`、memory layers、lesson review、skill manifest 這類結構，很可能從周邊工具變成主流 runtime 必備接口。

### 2. remote plugin / tool gateway / hook 會不會逐步收斂成比較明確的通用模型

Codex、Hermes、OpenClaw 其實都在補不同版本的工具控制面。如果這幾條線開始出現收斂，整個 agent 生態的可組裝性會高很多；反之，大家會各自困在自己的工具宇宙。

### 3. browser harness 會不會成為 agent 的「真實世界 adapter」

很多 agent 的瓶頸，不在 code，不在 chat，而在最後一哩：登入、點按、上傳、驗證、提交。如果 Browser Harness 這種薄底盤繼續成熟，它可能會變成 agent 真正連到真實世界的重要 adapter。

### 4. HTML-native 設計 skill 能不能一路往團隊交付走

Huashu Design 這類案子現在最亮眼的是 demo 與個人產能。接下來更值得看的，是不是能真正進到：

- 團隊共編
- 品牌資產治理
- 可回歸的設計測試
- 穩定的匯出品質

如果能，這就不只是設計玩具，而是新的內容生產管線。

### 5. design extraction 會不會從 token 抽取，進一步變成 agent 可消化的產品語法

design-extract 這次往 intent / section role / component library detection 走，是很重要的一步。下一步如果能繼續走到：

- 跨頁一致性規則
- 互動模式抽取
- copy voice / tone 規格化
- 直接對應不同 codegen runtime 的 prompt contract

那它的價值就不只是「看懂網站」，而是「幫 agent 拿到一套可重建產品的文法」。

## 結語

GitHub 這週最值得記住的，不是哪個 repo 又多了幾千星，而是兩條線正在非常清楚地合流：

> **成熟 agent 正在整理可攜知識層與控制面；新興高星案則在搶瀏覽器與設計這些可直接交付工作的表面。**

前者讓 agent 更像可維運系統，後者讓 agent 更像真實工作夥伴。這兩條線如果接起來，下一波真正有機會留下來的開源 AI 產品，大概會同時具備三件事：

- 知識可遷移
- 執行可治理
- 產物可直接交付

這比單純再做一個聊天框，重要得多。

---

*資料整理方式：GitHub API 搜尋 `stars > 30000 AND pushed >= 2026-04-15`，以及 `created >= 2026-04-15 AND stars > 500`，再補看 repo README、release note 與最新 commit。資料時間點：2026-04-22 10:30（Asia/Taipei）。*

*主要來源：*

- [GitHub Search API（高星近期更新）](https://api.github.com/search/repositories?q=stars:%3E30000+pushed:%3E=2026-04-15&sort=updated&order=desc&per_page=20)
- [GitHub Search API（近 7 天新高星）](https://api.github.com/search/repositories?q=created:%3E=2026-04-15+stars:%3E500&sort=stars&order=desc&per_page=20)
- [OpenClaw repo](https://github.com/openclaw/openclaw)
- [OpenClaw v2026.4.20](https://github.com/openclaw/openclaw/releases/tag/v2026.4.20)
- [OpenClaw browser click timeout recovery commit](https://github.com/openclaw/openclaw/commit/e92079be6b7a9efcfbfcfe56036c8c3e7d7f0801)
- [Codex repo](https://github.com/openai/codex)
- [Codex remote plugin list/read commit](https://github.com/openai/codex/commit/a978e411f628529e0f7c4095a5b5389622fca9b4)
- [Codex AWS SigV4 auth commit](https://github.com/openai/codex/commit/1cd3ad1f49859e13fe4d2fa009bf0d11c097d20e)
- [Codex apply_patch hooks commit](https://github.com/openai/codex/commit/09ebc34f17b84c4ec7550960b2f9c090f5dde5b7)
- [Goose repo](https://github.com/aaif-goose/goose)
- [Goose auto-compaction commit](https://github.com/aaif-goose/goose/commit/469c74d8bcae0d0be7e7f2fc69c345dfc615b377)
- [Goose agent management flows commit](https://github.com/aaif-goose/goose/commit/7e2fb3ee5c52c8fbb193facbdf276d9dc64802ea)
- [Hermes Agent repo](https://github.com/NousResearch/hermes-agent)
- [Hermes Agent v2026.4.16](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.16)
- [Hermes delegation width + depth knobs commit](https://github.com/NousResearch/hermes-agent/commit/bf73ced4f524028572859d90bc05e2bf40ad0717)
- [Browser Harness repo](https://github.com/browser-use/browser-harness)
- [Browser Harness README](https://github.com/browser-use/browser-harness/blob/main/README.md)
- [Huashu Design repo](https://github.com/alchaincyf/huashu-design)
- [Huashu Design v2.0](https://github.com/alchaincyf/huashu-design/releases/tag/v2.0)
- [agentic-stack repo](https://github.com/codejunkie99/agentic-stack)
- [agentic-stack v0.8.0](https://github.com/codejunkie99/agentic-stack/releases/tag/v0.8.0)
- [design-extract repo](https://github.com/Manavarya09/design-extract)
- [design-extract v10.0.0](https://github.com/Manavarya09/design-extract/releases/tag/v10.0.0)
