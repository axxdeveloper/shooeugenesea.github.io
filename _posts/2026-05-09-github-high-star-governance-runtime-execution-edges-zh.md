---
layout: post
title: "GitHub 高星開源觀察（2026-05-09）：成熟專案補治理控制面，新星快速外擴到資料層、裝置層與推論內核"
date: 2026-05-09 10:30:00 +0800
categories: [tech]
tags: [github, open-source, ai, agents, control-plane, runtime, inference, automation]
description: "GitHub API 顯示，既有高星專案本週持續往可治理控制面（環境抽象、權限與觀測、整合穩定）收斂；近 7 天新高星則集中在替代代理層、統一虛擬檔案系統、行動裝置自動化與高吞吐推論引擎。"
lang: zh-TW
---

- 今天最值得追的主線是：**成熟高星在補「可治理的長期運轉能力」，新高星在搶「可直接接工作現場的執行邊界」**。
- 成熟層我挑四個代表： [OpenClaw](https://github.com/openclaw/openclaw)、[Codex](https://github.com/openai/codex)、[Ollama](https://github.com/ollama/ollama)、[LiteLLM](https://github.com/BerriAI/litellm)。
- 新興層則看五個近 7 天快速上升專案： [ds4](https://github.com/antirez/ds4)、[deepclaude](https://github.com/aattaran/deepclaude)、[Mirage](https://github.com/strukto-ai/mirage)、[Baguette](https://github.com/tddworks/baguette)、[TokenSpeed](https://github.com/lightseekorg/tokenspeed)。
- 兩組放在一起看，這週訊號很明確：**AI 工程競爭已不只比模型，而是比「控制面成熟度 × 執行表面覆蓋」**。

## 背景脈絡

本次資料切兩組：

1. **既有高星更新**：`stars > 30000` 且 `pushed >= 2026-05-02`
2. **近 7 天新高星**：`created >= 2026-05-02` 且 `stars > 500`

### 既有高星更新（代表）

| Repo | 星數 | 最近訊號 | 我怎麼解讀 |
|---|---:|---|---|
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 369,912 | [`v2026.5.7`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7) 補 cron 狀態可觀測、授權邊界與 plugin 發布恢復力 | assistant runtime 往「維運可視化 + 權限治理」深化 |
| [openai/codex](https://github.com/openai/codex) | 81,036 | [`rust-v0.130.0`](https://github.com/openai/codex/releases/tag/rust-v0.130.0) + [`Move file watcher out of core`](https://github.com/openai/codex/commit/c579da41b16dc88b62d9cb2611f70ccdb7ac2735) | 把 watcher / app-server / remote-control 抽離成獨立控制面 |
| [ollama/ollama](https://github.com/ollama/ollama) | 171,018 | [`v0.23.2`](https://github.com/ollama/ollama/releases/tag/v0.23.2) 宣告 `/api/show` 快取使中位延遲約改善 6.7x，並調整 Claude Desktop 整合策略 | 整合邊界可變，但核心性能優化才是長期護城河 |
| [BerriAI/litellm](https://github.com/BerriAI/litellm) | 46,218 | [`v1.83.14-stable.patch.3`](https://github.com/BerriAI/litellm/releases/tag/v1.83.14-stable.patch.3) 強化 cosign 驗證敘述，近 commit 持續補 OTel/metrics 路徑 | 多模型 gateway 開始把供應鏈可信與觀測當一級需求 |

### 近 7 天新高星（代表）

| Repo | 建立時間 | 星數 | 新興方向 |
|---|---|---:|---|
| [antirez/ds4](https://github.com/antirez/ds4) | 2026-05-06 | 2,551 | DeepSeek 4 Flash 的本地 Metal 推論引擎 |
| [aattaran/deepclaude](https://github.com/aattaran/deepclaude) | 2026-05-03 | 1,644 | 保留 Claude Code 工作迴圈、替換為 Anthropic 相容後端 |
| [strukto-ai/mirage](https://github.com/strukto-ai/mirage) | 2026-05-06 | 1,464 | 把 S3/GDrive/Slack/GitHub 等掛成統一虛擬檔案系統 |
| [tddworks/baguette](https://github.com/tddworks/baguette) | 2026-05-01 | 762 | 無頭 iOS 模擬器農場 + 輸入注入 + 即時串流 |
| [lightseekorg/tokenspeed](https://github.com/lightseekorg/tokenspeed) | 2026-05-06 | 794 | 面向 agentic workload 的高吞吐推論內核 |

## 技術重點

### 1) 成熟高星的共同方向：把「控制面」從隱性實作變成顯性產品能力

[OpenClaw `v2026.5.7`](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7) 與 [Codex `0.130.0`](https://github.com/openai/codex/releases/tag/rust-v0.130.0) 雖然定位不同，但收斂方向非常一致：

- **狀態可觀測**：OpenClaw 讓 `cron list/show --json` 吐出可計算 status，不用外部再猜。
- **授權邊界前移**：OpenClaw 將部分 memory toggle 與 inline skill dispatch 綁到更明確授權節點。
- **環境 / watcher 模組化**：Codex 將 watcher 從 core 拆離，並持續往 app-server / remote-control 抽象演進。

這代表一件事：
> 2026 的 agent runtime，不再只追「能不能做」，而是追「做了之後能不能被治理、回溯、恢復」。

### 2) 整合功能進退速度變快，但性能路徑更需要可驗證收益

[Ollama `v0.23.2`](https://github.com/ollama/ollama/releases/tag/v0.23.2) 很有代表性：

- 一方面調整 `ollama launch` 與 Claude Desktop 的整合策略（反映第三方邊界現實）。
- 另一方面直接給出 `/api/show` 快取帶來 **~6.7x 中位延遲改善**（可量化的底層價值）。

這個組合很關鍵：
- 入口整合可以快上快下。
- 但真正可累積價值，通常是可量測、可複驗的性能與穩定性改進。

### 3) 新高星的第一條線：在既有 agent UX 上做「替代推理層」

[deepclaude](https://github.com/aattaran/deepclaude) 與 [ds4](https://github.com/antirez/ds4) 的共同點，是都在碰同一個問題：

- **deepclaude**：用 Anthropic 相容代理層接 DeepSeek / OpenRouter，最近 commit 明確補「backend 切換時的 thinking block 與 model remap」語義問題。
- **ds4**：主打本地 Metal 推理，近期 commit 在修 OpenAI thinking stream 路由與工具參數串流邊緣案例。

這告訴我們：
> 「相容 OpenAI/Anthropic 介面」不只是一個轉接器議題，而是完整語義協議議題。

### 4) 新高星第二條線：把 agent 的資料面與裝置面做成可程式化基建

[Mirage `v0.0.1`](https://github.com/strukto-ai/mirage/releases/tag/v0.0.1) 與 [Baguette `v0.1.69`](https://github.com/tddworks/baguette/releases/tag/v0.1.69) 分別打資料面與裝置面：

- Mirage 把多 SaaS / DB / Git 資源掛成單一 filesystem，讓 agent 用 shell 慣用語就能跨服務讀寫。
- Baguette 把 iOS simulator gesture、orientation、串流與 headless 操作做成可呼叫介面，目標是把「手機操作」拉進工程管線。

搭配 [TokenSpeed](https://github.com/lightseekorg/tokenspeed) 這種推論引擎路線（TF32、快取與通信路徑持續優化），形成很明確的堆疊訊號：

- 上層：更多真實工作表面（SaaS、裝置）
- 中層：更一致的操作語言（VFS、API 相容）
- 下層：更高吞吐與更低延遲的推論底盤

## 關鍵取捨

### 1) 控制面工程化 vs. 開發摩擦

把 watcher、session、cron、權限、plugin lifecycle 拆清楚，會增加模組與測試負擔；但不拆，長期會在多租戶與長任務場景失控。

### 2) 相容代理層 vs. 語義偏移

deepclaude / ds4 都證明了：只靠「API 看起來相容」不夠，thinking stream、tool args、model naming 任何一處偏移都會讓實務流程斷裂。

### 3) 統一資料面 vs. 最小權限治理

Mirage 類 VFS 讓開發效率大幅上升，但也把跨服務讀寫權限集中化。若沒有細粒度 policy 與審計，便利性會直接轉成風險面積。

### 4) 裝置自動化能力 vs. 風險護欄

Baguette 這類工具讓 mobile automation 可程式化，但也意味著更強的「真設備操作能力」。上線前必須先定義允許動作、審批點與回放證據。

### 5) 高吞吐推論 vs. 可重現性

TokenSpeed 類內核優化很吸引人，但 production 採用仍要回答：硬體條件、數值穩定、benchmark 方法是否可重現。

## 對開發者影響

### 1) 選 agent runtime 時，請把治理能力放進第一層評估

至少要檢查：
- 權限邊界是否可配置
- 狀態與事件是否可觀測
- 長任務失敗後是否有恢復策略

### 2) 若你做多模型平台，務必建立「語義正規化層」

把 model alias、thinking token、tool-call 行為、錯誤碼映射做成明確層，否則你會在每次 provider 升版時被熱修追著跑。

### 3) 把「資料面整合」與「動作面整合」分開治理

Mirage（資料）與 Baguette（動作）的安全模型不同，不應混成同一把權限鑰匙。

### 4) 性能優化要綁可驗證指標

像 Ollama 直接給 median latency 改善幅度，就是好範例。團隊內部也應建立 TTFT / TPS / p95 延遲的固定量測基線。

### 5) 新高星不等於可生產

這批新案速度很快，但請先看 release 節奏、issue 回應、回滾機制與相容性聲明，再決定是否放入核心路徑。

## 後續觀察

接下來我會特別追五個問題：

1. **控制面模組化是否成共識**：更多高星專案會不會把 watcher / session / auth 全部抽出 core。
2. **相容代理層是否走向標準化**：Anthropic/OpenAI 相容語義會否出現更穩定的 de-facto 規格。
3. **統一 VFS 是否成為 MCP 之外的主流資料路徑**：Mirage 這條線能否長成開發者預設方案。
4. **行動裝置自動化是否進入 CI 主流程**：Baguette 類工具會不會從 demo 走到日常 QA/回歸。
5. **推論引擎的真實勝負點**：TokenSpeed 之類是否能在公開可重現 benchmark 下持續領先。

## 結語

今天這波 GitHub 高星動態可以濃縮成一句話：

> **成熟專案在補可治理控制面，新專案在擴可執行邊界。**

如果兩條線持續會合，下一波會留下來的 AI 開源產品，大概率要同時滿足三件事：

- 能穩定治理（control plane）
- 能跨場景執行（execution surface）
- 能用數據自證效能（performance proof）

這比「再多一個聊天介面」更接近真實生產力。

---

*資料整理方式：GitHub Search API 查詢 `stars > 30000 AND pushed >= 2026-05-02`（既有高星更新）與 `created >= 2026-05-02 AND stars > 500`（近 7 天新高星），再交叉比對 repo release notes 與近 7 天 commits。資料時間點：2026-05-09 10:30（Asia/Taipei）。*

*主要來源：*

- [GitHub Search API（既有高星更新）](https://api.github.com/search/repositories?q=stars:%3E30000+pushed:%3E=2026-05-02+archived:false&sort=updated&order=desc&per_page=30)
- [GitHub Search API（近 7 天新高星）](https://api.github.com/search/repositories?q=created:%3E=2026-05-02+stars:%3E500+archived:false&sort=stars&order=desc&per_page=30)
- [OpenClaw v2026.5.7](https://github.com/openclaw/openclaw/releases/tag/v2026.5.7)
- [Codex 0.130.0](https://github.com/openai/codex/releases/tag/rust-v0.130.0)
- [Codex commit: Move file watcher out of core](https://github.com/openai/codex/commit/c579da41b16dc88b62d9cb2611f70ccdb7ac2735)
- [Ollama v0.23.2](https://github.com/ollama/ollama/releases/tag/v0.23.2)
- [LiteLLM v1.83.14-stable.patch.3](https://github.com/BerriAI/litellm/releases/tag/v1.83.14-stable.patch.3)
- [ds4 repo](https://github.com/antirez/ds4)
- [ds4 commit: Fix OpenAI thinking stream routing](https://github.com/antirez/ds4/commit/b43a0bc536fcafa0d03ad9d262d17a8f1399b3b6)
- [deepclaude repo](https://github.com/aattaran/deepclaude)
- [deepclaude commit: strip thinking blocks on backend switch](https://github.com/aattaran/deepclaude/commit/70518b6cdcf3cc488e62e817b86da4b550dd7dfa)
- [Mirage v0.0.1](https://github.com/strukto-ai/mirage/releases/tag/v0.0.1)
- [Baguette v0.1.69](https://github.com/tddworks/baguette/releases/tag/v0.1.69)
- [TokenSpeed repo](https://github.com/lightseekorg/tokenspeed)
