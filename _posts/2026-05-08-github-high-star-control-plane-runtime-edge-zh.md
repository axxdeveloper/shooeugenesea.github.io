---
layout: post
title: "GitHub 高星開源觀察（2026-05-08）：成熟專案補齊環境控制面，新高星直攻代理執行邊界"
date: 2026-05-08 10:30:00 +0800
categories: [tech]
tags: [github, open-source, ai, agents, runtime, control-plane, inference, ios]
description: "GitHub API 顯示，既有高星專案本週明顯往環境提供者、權限治理、模型路由與整合穩定性收斂；近 7 天新高星則快速冒出『跨服務虛擬檔案系統、替代模型代理層、iOS 模擬器自動化、高吞吐推論引擎』四條新路線。"
lang: zh-TW
---

- 這週 GitHub 最值得追的，不是又多幾個「會聊天」專案，而是 **成熟高星開始把控制面做厚，新興專案開始把執行邊界往外推**。
- 成熟層（高星且持續更新）我挑了四個代表： [OpenClaw](https://github.com/openclaw/openclaw)、[Codex](https://github.com/openai/codex)、[Ollama](https://github.com/ollama/ollama)、[Cherry Studio](https://github.com/CherryHQ/cherry-studio)。
- 新興層（近 7 天建立且快速破星）則是： [deepclaude](https://github.com/aattaran/deepclaude)、[Mirage](https://github.com/strukto-ai/mirage)、[Baguette](https://github.com/tddworks/baguette)、[TokenSpeed](https://github.com/lightseekorg/tokenspeed)。
- 如果把兩組資料疊在一起看，主線很清楚：**成熟玩家在解「如何可治理地跑很久」；新玩家在解「如何把 agent 接到更多真實工作表面」。**

## 背景脈絡

這次資料拆成兩組：

1. **既有高星更新**：`stars > 30000` 且 `pushed >= 2026-05-01`
2. **近 7 天新高星**：`created >= 2026-05-01` 且 `stars > 500`

成熟高星更新組，四個代表專案如下：

| Repo | 星數 | 最近訊號 | 觀察重點 |
|---|---:|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 369,491 | [`v2026.5.7`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)、[`plugin-sdk LLM completion API`](https://github.com/openclaw/openclaw/commit/9e1e59717ffd04609a5165edf9af0c789dcc2621) | 工具授權、session 狀態、cron 可觀測性與插件生命週期治理 |
| [openai/codex](https://github.com/openai/codex) | 80,727 | [`CODEX_HOME environments TOML provider`](https://github.com/openai/codex/commit/07b695190f30a450e4921f71f77473e564395c59)、[`stdio exec-server transport`](https://github.com/openai/codex/commit/a3de5bde6e6cc33140f1b0af9afc3beea68ca1a2) | 執行環境提供者抽象化、傳輸層拆分 |
| [ollama/ollama](https://github.com/ollama/ollama) | 170,958 | [`v0.23.0`](https://github.com/ollama/ollama/releases/tag/v0.23.0)→[`v0.23.2`](https://github.com/ollama/ollama/releases/tag/v0.23.2) | 整合速度快，但第三方整合邊界與相容性政策快速回調 |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | 45,208 | [`Gemma 4 thinking mode`](https://github.com/CherryHQ/cherry-studio/commit/c5e4409614c778316214c643d29416a0c91d5949)、[`DeepSeek V4 slug / reasoning effort 修正`](https://github.com/CherryHQ/cherry-studio/commit/2456ebfe5e37b7b104cbcfbbef7320ff6ea0dbf8) | 多模型平台在「命名／能力／推理參數」做標準化補丁 |

近 7 天新高星組，四個代表如下：

| Repo | 建立時間 | 星數 | 新興方向 |
|---|---|---:|---|
| [aattaran/deepclaude](https://github.com/aattaran/deepclaude) | 2026-05-03 | 1,599 | 保留 Claude Code 工具迴圈，替換推理後端（DeepSeek/OpenRouter） |
| [strukto-ai/mirage](https://github.com/strukto-ai/mirage) | 2026-05-06 | 1,032 | 把 S3/GDrive/Slack/GitHub 變成單一虛擬檔案樹 |
| [tddworks/baguette](https://github.com/tddworks/baguette) | 2026-05-01 | 741 | 無頭 iOS Simulator 管理 + 手勢/AX/串流控制 |
| [lightseekorg/tokenspeed](https://github.com/lightseekorg/tokenspeed) | 2026-05-06 | 660 | 面向 agentic workload 的高吞吐推論引擎 |

## 技術重點

### 1) 成熟高星專案正在把「執行環境與治理面」獨立成一級結構

[Codex](https://github.com/openai/codex) 這週最關鍵的訊號不是單一 feature，而是環境層的連續改造：

- [`Add CODEX_HOME environments TOML provider`](https://github.com/openai/codex/commit/07b695190f30a450e4921f71f77473e564395c59)
- [`Make environment providers own default selection`](https://github.com/openai/codex/commit/9669756b5f9842c77ff134fcb401527a35f5e64c)
- [`Add stdio exec-server client transport`](https://github.com/openai/codex/commit/a3de5bde6e6cc33140f1b0af9afc3beea68ca1a2)

這三件事合起來，是把「模型選擇、環境配置、傳輸策略」拆成可演進模組，而非硬綁在單一路徑裡。

[OpenClaw `v2026.5.7`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7) 也很一致地往治理面推：

- `cron list/show --json` 補上可計算 `status`
- Active Memory 的 global toggle 收斂到 admin scope
- auto-reply inline skill dispatch 綁 before-tool-call 授權 hook
- 插件發布流程補強「重試 + 版本驗證」

這類改動的共通點是：**不只是讓 agent 能跑，而是讓它在多 session、多工具、多通道下可被觀測與約束。**

### 2) 本地/桌面整合開始進入「快迭代 + 快回收」節奏

[Ollama](https://github.com/ollama/ollama) 在 `v0.23.0` 引入 `ollama launch claude-desktop`，到 `v0.23.2` 又因第三方整合限制把預設整合拿掉，保留 `--restore` 恢復路徑；同時 `/api/show` response cache 帶來 **~6.7x** 中位延遲改善（官方 release note）。

這很值得注意：

- 整合功能可以很快上線
- 但一碰到授權邊界或合作方限制，也會很快回調
- 真正留下來的是底層效能改進（像 API cache）

也就是說，**產品層 feature 可以浮動，性能與穩定性層才是長期資產。**

### 3) 多模型工作台的競爭點，已轉向「能力語義對齊」

[Cherry Studio](https://github.com/CherryHQ/cherry-studio) 近期一串更新很有代表性：

- Gemma 4 thinking mode 支援
- routed DeepSeek V4 slug 與 reasoning effort 偵測修正
- DeepSeek 預設模型切到 V4
- Anthropic Opus 4.7 相容性補丁

這些更新看起來像小 patch，但本質是同一題：

> 當你接 10+ provider，真正難的不是把 API 串起來，而是把「模型能力語義」對齊到可預期行為。

### 4) 新興高星四路線：替代腦、統一檔案面、設備農場、推論內核

- [deepclaude](https://github.com/aattaran/deepclaude)：在不改 Claude Code CLI 體驗下，透過環境變數改後端；近期 commit 針對 backend 切換的 thinking block 與 model remap 做修補，顯示這條路的核心是「**相容 Anthropic 介面語義**」。
- [Mirage](https://github.com/strukto-ai/mirage)：用 unified virtual filesystem 把 SaaS 資源掛到同一棵樹，讓 agent 用 bash 工具橫跨 Slack/S3/GitHub；這是在爭「**agent 的共同操作語言**」。
- [Baguette](https://github.com/tddworks/baguette)：把 iOS 模擬器控制做成可程式化 infra（串流、手勢、AX tree、device farm）；這是在爭「**行動端自動化最後一哩**」。
- [TokenSpeed](https://github.com/lightseekorg/tokenspeed)：把 modeling/scheduler/kernel 拆成性能導向結構，直接瞄準 agentic workloads 的吞吐；這是在爭「**高並發推理底盤**」。

## 關鍵取捨

### 1) 控制面拆得越乾淨，短期開發摩擦越大

Codex、OpenClaw 這類改造都在付「結構化成本」：

- 模組變多
- 狀態面變大
- 回歸測試更複雜

但不這樣做，系統一進入長 session、多人協作、混合工具就會失控。

### 2) 快速整合第三方入口，會碰到政策與責任邊界

Ollama 的 `claude-desktop` 進退，是很典型案例：

- 產品上線很快
- 但第三方限制會立即影響可用性
- 最終要靠回退路徑與核心性能改進守住體驗

### 3) 「多模型」真正難點在語義一致，而非 UI 切換

Cherry Studio 的 patch 顯示，model slug、reasoning effort、provider 相容性都會影響實際品質。多模型平台若沒有統一語義層，會讓同一流程在不同模型上表現飄移。

### 4) 新專案衝得快，但可維運性還要時間驗證

deepclaude / Mirage / Baguette / TokenSpeed 都很有爆點；但接下來會被檢驗的是真實維運能力：

- 版本相容
- 安全邊界
- 觀測與除錯
- 生態整合深度

## 對開發者影響

### 1) 選 agent runtime 時，要把「治理能力」放進選型清單

不只看模型數量，還要看：

- 權限是否可分層
- session/cron/tool 是否可觀測
- 環境與傳輸是否可替換

### 2) 多模型平台要預留「語義轉換層」

如果你在做自家 AI 工作台，建議把這層獨立成明確模組：

- model capability map
- reasoning profile normalization
- provider-specific guardrails

不然後面只會用 hotfix 堆債。

### 3) Agent 的工作表面正在從「檔案」延伸到「SaaS 與裝置」

Mirage 代表跨 SaaS 的統一操作層；Baguette 代表裝置自動化層。這意味著開發者可以把 agent 任務從純程式碼流程，擴到營運資料與行動端驗證流程。

### 4) 推論引擎競爭回到硬核工程

TokenSpeed 類型專案的爆紅，說明使用者不只要模型能力，也要在 agentic workload 下拿到可預期吞吐與延遲。推理層將持續是成本與體驗的核心槓桿。

## 後續觀察

我接下來會重點追五件事：

1. **環境提供者抽象是否成主流**：Codex 類設計會不會被更多 agent runtime 採用。
2. **多模型語義標準化是否出現共識**：reasoning effort、tool schema、model tier 是否有跨平台對齊。
3. **統一 VFS 是否變成 agent 的 MCP 之外替代路徑**：Mirage 這條線能否成為主流資料面。
4. **裝置農場 + agent 是否走向產品化測試基建**：Baguette 類工具會不會進 CI / QA 主流程。
5. **高吞吐推理引擎是否真的在真實 agent workload 勝出**：TokenSpeed 後續 PR 與 benchmark 證據是否持續擴大。

## 結語

這週 GitHub 高星動態給的訊號很明確：

> **成熟專案在做控制面工程化，新專案在搶執行邊界。**

這兩條線如果會合，下一波能留下來的開源 AI 專案，大概率會同時具備三件事：

- 可治理的 runtime
- 可遷移的工作語義
- 可直接落地的執行表面

這比單純再做一個聊天介面，價值高得多。

---

*資料整理方式：GitHub Search API 查詢 `stars > 30000 AND pushed >= 2026-05-01`，以及 `created >= 2026-05-01 AND stars > 500`，再交叉比對 repo README、release notes 與近 7 天 commit。資料時間點：2026-05-08 10:30（Asia/Taipei）。*

*主要來源：*

- [GitHub Search API（既有高星更新）](https://api.github.com/search/repositories?q=stars:%3E30000+pushed:%3E=2026-05-01&sort=updated&order=desc&per_page=20)
- [GitHub Search API（近 7 天新高星）](https://api.github.com/search/repositories?q=created:%3E=2026-05-01+stars:%3E500&sort=stars&order=desc&per_page=30)
- [OpenClaw repo](https://github.com/openclaw/openclaw)
- [OpenClaw v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)
- [OpenClaw plugin-sdk completion API commit](https://github.com/openclaw/openclaw/commit/9e1e59717ffd04609a5165edf9af0c789dcc2621)
- [Codex repo](https://github.com/openai/codex)
- [Codex environments TOML provider commit](https://github.com/openai/codex/commit/07b695190f30a450e4921f71f77473e564395c59)
- [Codex environment default selection commit](https://github.com/openai/codex/commit/9669756b5f9842c77ff134fcb401527a35f5e64c)
- [Codex stdio exec-server transport commit](https://github.com/openai/codex/commit/a3de5bde6e6cc33140f1b0af9afc3beea68ca1a2)
- [Ollama repo](https://github.com/ollama/ollama)
- [Ollama v0.23.0](https://github.com/ollama/ollama/releases/tag/v0.23.0)
- [Ollama v0.23.1](https://github.com/ollama/ollama/releases/tag/v0.23.1)
- [Ollama v0.23.2](https://github.com/ollama/ollama/releases/tag/v0.23.2)
- [Cherry Studio repo](https://github.com/CherryHQ/cherry-studio)
- [Cherry Studio Gemma 4 thinking mode commit](https://github.com/CherryHQ/cherry-studio/commit/c5e4409614c778316214c643d29416a0c91d5949)
- [Cherry Studio DeepSeek V4 reasoning effort commit](https://github.com/CherryHQ/cherry-studio/commit/2456ebfe5e37b7b104cbcfbbef7320ff6ea0dbf8)
- [deepclaude repo](https://github.com/aattaran/deepclaude)
- [deepclaude backend remap commit](https://github.com/aattaran/deepclaude/commit/d4177afde3406d6776b1b4d34ecddbac27404bfc)
- [Mirage repo](https://github.com/strukto-ai/mirage)
- [Mirage v0.0.1](https://github.com/strukto-ai/mirage/releases/tag/v0.0.1)
- [Baguette repo](https://github.com/tddworks/baguette)
- [Baguette v0.1.68](https://github.com/tddworks/baguette/releases/tag/v0.1.68)
- [TokenSpeed repo](https://github.com/lightseekorg/tokenspeed)
