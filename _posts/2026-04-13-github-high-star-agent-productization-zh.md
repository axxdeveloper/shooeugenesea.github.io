---
layout: post
title: "GitHub 高星開源觀察（2026-04-13）：成熟 Agent 平台補基建，新星往本地工作流爆發"
date: 2026-04-13 10:30:00 +0800
categories: [tech]
tags: [github, open-source, ai, agents, dify, codex, lobehub]
description: "GitHub API 顯示，既有高星 AI repo 正把重心放在執行穩定性、協定化與背景工作可觀測性；近 7 天爆紅的新 repo，則集中在游標側助理、本地微調、持久知識庫與圖表生成。"
lang: zh-TW
---

GitHub 這一週最值得看的，不是「哪個 AI repo 又多了幾千星」，而是 **高星專案與新爆紅專案正在一起把開源 AI 的分工切得更清楚**。

我用 GitHub API 拉了兩組資料：

1. **既有高星 repo 的近期更新**：`stars > 30000` 且近 7 天有 push。
2. **近 7 天新冒出的高星 repo**：`created > 2026-04-06` 且目前已累積 `stars > 800`。

這兩組資料放在一起看，訊號很一致：

- **成熟層** 已經從「能不能做 agent」轉向「能不能穩定執行、可觀測、可串接、可上生產」。
- **新興層** 則不是再做一個通用聊天介面，而是往幾個更具體的最後一哩入口爆發：**游標側陪伴式助理、Apple Silicon 本地微調、持久知識庫、技術圖表生成**。

換句話說，開源 AI 正在從「模型接上 UI」走向 **產品化分層**。

## 背景脈絡：高星專案的主戰場，從 demo 感轉向 runtime 感

這輪資料裡，成熟專案最醒目的三個名字是：

| Repo | 星數 | 最近訊號 | 我怎麼解讀 |
|---|---:|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | 137,463 | 近 24 小時持續更新；`v1.13.3` 把 workflow、streaming、knowledge retrieval 穩定性列為重點 | agent workflow 平台已進入「把生產環境坑補平」階段 |
| [lobehub/lobehub](https://github.com/lobehub/lobehub) | 75,097 | 近期 commit 明確往 `message gateway`、`tool_execute / tool_result` 協定推進 | chat 產品正在變成 agent runtime 前端與事件匯流層 |
| [openai/codex](https://github.com/openai/codex) | 74,837 | `0.120.0` 把 background progress、typed tool schema、sandbox 修補放進 release 核心 | coding agent 競爭點已變成「可長跑、可觀測、可安全執行」 |

這三個 repo 所處位置不同，但更新方向高度相似：**不是再多一個 flashy capability，而是補執行層基建**。

這很重要。因為 2025 年很多 agent demo 的問題，不在於做不出來，而在於：

- workflow 跑到一半會不會卡住
- tool call 結果能不能被前端與其他 agent 正確消化
- 長任務執行時，人能不能知道現在做到哪裡
- sandbox / permission / filesystem 邊界會不會讓系統在真實環境爆掉

也就是說，**GitHub 高星 repo 的更新焦點，已經從 capability proof，轉向 execution quality**。

## 技術重點：成熟高星 repo 正在補哪三種能力

### 1. Dify：workflow 平台不再只拼節點數，而是拼執行正確性

[Dify `v1.13.3`](https://github.com/langgenius/dify/releases/tag/1.13.3) 最值得注意的，不是新增多大的新能力，而是它把更新摘要明確寫成三類：

- variable-reference support 進到 LLM / classifier / extractor 節點
- streaming concurrency 與 replay 問題修補
- knowledge retrieval 的 citation metadata、preview、hit-count filtering 修補

這代表 Dify 的主戰場已經不是「你能不能排 workflow」，而是：

- workflow 參數引用夠不夠靈活
- 串流事件會不會在前後端不同步
- retrieval 結果是否保留引用、可追溯、可被使用者信任

對平台型 agent 產品來說，這是典型的 **從 builder experience 走向 operator experience**。前一階段是讓開發者能拼得出流程；這一階段是讓團隊敢把流程放進真實任務。

### 2. LobeHub：agent UI 層開始協定化，而不是只做更漂亮的 chat

[LobeHub README](https://github.com/lobehub/lobehub) 已經把自己定義成「agent teammates that grow with you」，但真正更關鍵的是最近幾筆 commit：

- [`support message gateway`](https://github.com/lobehub/lobehub/commit/73be58ba123bfd5ed7fa12ae1fd8b02e45f2802f)
- [`add tool_execute / tool_result protocol types`](https://github.com/lobehub/lobehub/commit/12bbc56db3ea45c4de3422ef4bd25fc85c6df268)
- [`add GatewayStreamNotifier.sendToolExecute`](https://github.com/lobehub/lobehub/commit/b36c5a2f1b7a44ddedc84e2c3cc30d5b66891602)

這幾個變化加起來，透露的是另一個方向：**前端不只是聊天視窗，而是 agent 執行事件的可視化介面**。

當 UI 層開始顯式處理 `tool_execute` / `tool_result`，產品設計重點就會從「回覆長怎樣」轉成：

- 工具什麼時候被呼叫
- 執行中狀態如何曝光
- 事件如何串到 gateway / stream / multi-agent 協作

這代表下一代 agent 前端的差異化，會愈來愈少來自 prompt preset，愈來愈多來自 **runtime event model**。

### 3. Codex：coding agent 正從互動式 CLI，走向背景工作者

[Codex `0.120.0`](https://github.com/openai/codex/releases/tag/rust-v0.120.0) 這次最有意思的幾個點，幾乎都指向同一件事：**讓 agent 可以在背景長跑，同時保留人類監督能力**。

release note 重點包括：

- background agent progress 可以即時串流
- follow-up responses 可在 active response 完成後排隊
- code-mode tool declarations 帶入 MCP `outputSchema`
- 多個 sandbox / filesystem 邊界問題修補

最新 commit 又進一步補上：

- [`Run exec-server fs operations through sandbox helper`](https://github.com/openai/codex/commit/d626dc38950fb40a1a5ad0a8ffab2485e3348c53)
- [`Add MCP tool wall time to model output`](https://github.com/openai/codex/commit/7c1e41c8b6dc5dd0068759544ba448c459af4b21)

這裡最關鍵的不是「Codex 又多快寫 code」，而是它正在補齊一種很像真正工程同事的行為模型：

- 任務可背景執行
- 中途可回報進度
- tool output 更 typed，方便後續程式與 UI 接手
- 權限與 sandbox 邊界更清楚

這意味著 coding agent 的下一輪比賽，不只是 benchmark 或 patch 成功率，而是 **能不能在真實工程流程裡安全地工作半小時、一小時，且人類全程看得懂**。

## 技術重點：近 7 天新高星 repo 在搶哪幾個入口

如果成熟專案在補基建，近 7 天爆紅的新 repo 則在回答另一個問題：**AI 還能落在哪些更直接、可被感知的產品面上？**

| Repo | 建立時間 | 星數 | 約略 stars/day | 它搶到的入口 |
|---|---|---:|---:|---|
| [farzaa/clicky](https://github.com/farzaa/clicky) | 2026-04-07 | 3,953 | 671.5 | 游標側、可看螢幕、可說話、可指東西的 AI teacher |
| [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 2026-04-10 | 1,617 | 652.7 | 自然語言直出技術圖表的 skill 化工作流 |
| [mattmireles/gemma-tuner-multimodal](https://github.com/mattmireles/gemma-tuner-multimodal) | 2026-04-07 | 1,232 | 209.3 | Apple Silicon 本地多模態微調 |
| [nashsu/llm_wiki](https://github.com/nashsu/llm_wiki) | 2026-04-08 | 935 | 201.8 | 持久型個人知識庫，而不是每次重做一次 RAG |

### 1. Clicky：大家想要的不是更多聊天框，而是更貼近游標的陪跑者

[Clicky README](https://github.com/farzaa/clicky) 對產品定位寫得非常直白：**an AI teacher that lives as a buddy next to your cursor**。它強調的不是單純問答，而是：

- 能看螢幕
- 能說話
- 甚至能指東西

這個定位會爆，不意外。因為它抓到的不是「模型更強」的敘事，而是 **互動表面更像真實協作**。對很多普通使用者來說，跟一個懂你畫面上下文、直接在你工作流程旁邊出現的助理互動，比打開另一個 chat tab 有感得多。

不過 Clicky 也提醒了一個現實：爆紅很快，安全也要一起補。它近幾天的 commit 甚至直接出現 [`Remove hardcoded Anthropic API key from build settings`](https://github.com/farzaa/clicky/commit/d86c32fe2e6f6b6a5a45e2312f607eb876ea9602)。這說明這類「體驗極強」的新產品，真正能不能走遠，最後還是要回到安全與工程紀律。

### 2. Gemma Multimodal Fine-Tuner：本地模型微調的吸引力，來自 Apple Silicon 與不必租 H100

[Gemma Multimodal Fine-Tuner README](https://github.com/mattmireles/gemma-tuner-multimodal) 與 [`v0.2.0-alpha`](https://github.com/mattmireles/gemma-tuner-multimodal/releases/tag/v1.1) 的訊號很鮮明：

- text / image / audio LoRA 都能做
- 跑在 Apple Silicon，走 MPS
- 資料可從 GCS / BigQuery 串流，不必整包搬到本地
- 還加了即時訓練可視化介面

這個 repo 會吸星，反映的是另一種需求：**很多人不是要訓練通用大模型，而是想在自己手邊的機器、用自己的資料，把模型調到剛好可用。**

它真正打到的，不只是多模態，而是「低門檻、低資本支出、貼近個人設備」這個組合。這跟雲端 agent 平台是不同層次的機會。

### 3. LLM Wiki：知識工作者開始嫌棄一次性 RAG，想要持久編譯後的知識庫

[LLM Wiki README](https://github.com/nashsu/llm_wiki) 直接把自己的核心論點寫出來：**不是每次 query 都重新 retrieve-and-answer，而是把知識持續編成 wiki。**

它的設計重點包含：

- two-step ingest
- 4-signal knowledge graph
- Louvain community detection
- deep research
- async review system
- Chrome web clipper

這類產品得到關注，代表使用者對知識工具的要求，正在從「會回答」走向「會整理、會累積、會長期維護」。如果這條線走得通，未來個人 AI 工具的價值，就不只在聊天，而在 **持久知識結構的建立與更新**。

值得注意的是，它最近甚至有一筆 commit 寫成 [`remove RRF claims — ablation study shows no improvement with 2-lane setup`](https://github.com/nashsu/llm_wiki/commit/21a9e7d195c705ca182f6f449dbc5f0125f544ad)。這種「願意砍掉不被實驗支持的說法」的訊號，通常比花俏 feature 更健康。

### 4. Fireworks Tech Graph：skill 化不是聊天，真正有價值的是直接產物

[fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) 的賣點非常具體：**用自然語言直接產出 publication-ready SVG + PNG 技術圖表**。README 強調它支援多種視覺風格、AI/Agent domain pattern，以及 UML 類型。

這類 repo 會在短時間內拿到高星，關鍵不在模型多先進，而在於它直接回答了一個真實工作問題：

> 「我不是想跟 AI 聊圖表，我是想立刻拿到可以貼進文件、投影片、部落格的圖。」

這就是 skill 化工作流最強的地方：**不是把 AI 包成對話，而是把 AI 包成可重複交付的產物生成器。**

## 關鍵取捨：這波 GitHub 訊號背後，真正分岔的是什麼

### 1. 通用平台 vs. 單一明確任務

成熟平台如 Dify、LobeHub、Codex，目標是把 agent runtime 做成可擴展底座；新興專案如 Clicky、LLM Wiki、fireworks-tech-graph，則選擇非常窄但非常強的 job to be done。

前者優勢是可組裝、可擴充；代價是複雜度高。後者優勢是上手快、感知強；代價是邊界明顯。

### 2. 雲端編排 vs. 本地優先

Dify / LobeHub / Codex 代表的是 orchestration、協定、背景工作與安全邊界；Clicky / Gemma / LLM Wiki 則讓人看到另一條線：**使用者依然想把重要互動留在本機、留在自己視窗、留在自己文件上。**

這不只是部署差異，而是信任模型差異：

- 平台型產品回答的是「如何擴展」
- 本地型產品回答的是「如何靠近使用者」

### 3. 能力展示 vs. 可靠交付

這週最成熟的更新，大多與 reliability、streaming、schema、sandbox 有關；最爆的新星，大多與「立即看得到產物或互動價值」有關。這兩邊其實指向同一條產品法則：

**AI 產品的競爭優勢，開始從模型能力本身，移向穩定交付與清楚體驗表面。**

## 對開發者影響：現在該怎麼看待開源 AI 工具選型

### 1. 如果你在做 agent 平台，現在不能只講「支援多少模型」

從 Dify、LobeHub、Codex 的更新看，下一輪採購或技術選型更在意的會是：

- tool call / event schema 是否清楚
- 背景工作能否可視化
- permission / sandbox 是否可信
- retrieval 引用與 traceability 是否完整

換句話說，**runtime 品質會比模型列表更影響留存**。

### 2. 如果你在做 AI 應用，越具體的工作表面越有機會爆紅

Clicky、LLM Wiki、fireworks-tech-graph 的共同點，是它們都不是「另一個 ChatGPT 殼」，而是：

- 一個貼著游標的老師
- 一個會持續長大的知識庫
- 一個直接交付圖表的 skill

這對開發者的啟示很直接：**別再從 chat 開始想產品，先從工作產物與工作位置開始想。**

### 3. Apple Silicon 與 local-first 仍然是被低估的分支

Gemma Multimodal Fine-Tuner 的吸星速度說明，很多開發者對「不租 H100、直接在 Mac 上把模型調起來」這件事有很高興趣。這代表 local-first AI 不是情懷，而是成本、隱私、控制權三者交集下的真需求。

### 4. skill / protocol / artifact 會成為新的模組邊界

LobeHub 在補事件協定，Codex 在補 typed tool schema，fireworks-tech-graph 在把圖表生成封裝成 skill。這些訊號都指出一件事：未來開源 AI 生態不只是 model 與 app 的二分法，而會愈來愈像：

- **protocol layer**
- **runtime layer**
- **skill layer**
- **artifact layer**
- **personal surface layer**

能跨這幾層順暢組合的團隊，會比單點 feature 團隊更有複利。

## 後續觀察：接下來該盯的不是星數，而是四個驗證點

### 1. 協定會收斂，還是各自長出封閉事件模型？

如果 LobeHub、Codex 這類工具在 `tool_execute`、`tool_result`、background progress、schema 描述上逐漸收斂，開源 agent 生態會更容易互通；反之，就會複製前一代 SaaS integration 碎片化問題。

### 2. Clicky 類產品能不能把「驚艷互動」補成「可信軟體」？

爆紅 demo 很容易，但 screen-aware、voice-aware、cursor-side 助理要真正進入長期使用，安全、權限、設定管理、金鑰處理必須一起成熟。

### 3. local-first 工具能不能把安裝與依賴維持在可忍受範圍？

Gemma 類工具的需求是真實的，但只要依賴地獄、模型相依套件、硬體限制太痛，爆紅很容易停在 early adopters。真正的考驗是能不能把複雜 ML pipeline 壓到一般開發者可用。

### 4. 持久知識庫與產物 skill，能不能形成持續回訪？

LLM Wiki 與 fireworks-tech-graph 都抓到很明確的工作場景，但接下來要驗證的是：使用者會不會週週回來、月月回來，讓它們從爆紅 repo 變成真正的工作基礎設施。

## 結語

這一輪 GitHub 高星動態最核心的訊號，不是某個 repo 又多快破萬星，而是：

> **開源 AI 正在從「模型驅動的功能展示」走向「runtime 驅動的產品分層」。**

成熟專案在補 execution、streaming、schema、sandbox；新興專案在搶更貼近工作現場的入口。這兩條線一起看，比單看排行榜更有用，因為它們回答的是同一個問題：

**下一波真正留下來的開源 AI 工具，會在哪一層提供不可替代的價值？**

目前答案看起來很清楚：

- 底層要更可靠
- 中層要更可組裝
- 上層要更貼近真實工作位置
- 最終交付要更像產物，而不是對話

這比「誰又做了一個 AI app」重要得多。

---

*資料整理方式：GitHub API 搜尋 `stars > 30000 AND pushed > 2026-04-06` 與 `created > 2026-04-06 AND stars > 800`，再補看 repo README、release note 與最新 commit。資料時間點：2026-04-13 10:30（Asia/Taipei）。*

*主要來源：*

- [GitHub Search API（高星近期更新）](https://api.github.com/search/repositories?q=stars:%3E30000+pushed:%3E2026-04-06&sort=updated&order=desc&per_page=20)
- [GitHub Search API（近 7 天新高星）](https://api.github.com/search/repositories?q=created:%3E2026-04-06+stars:%3E800&sort=stars&order=desc&per_page=20)
- [Dify repo](https://github.com/langgenius/dify)
- [Dify v1.13.3](https://github.com/langgenius/dify/releases/tag/1.13.3)
- [LobeHub repo](https://github.com/lobehub/lobehub)
- [message gateway commit](https://github.com/lobehub/lobehub/commit/73be58ba123bfd5ed7fa12ae1fd8b02e45f2802f)
- [tool protocol commit](https://github.com/lobehub/lobehub/commit/12bbc56db3ea45c4de3422ef4bd25fc85c6df268)
- [Codex repo](https://github.com/openai/codex)
- [Codex 0.120.0](https://github.com/openai/codex/releases/tag/rust-v0.120.0)
- [sandbox helper commit](https://github.com/openai/codex/commit/d626dc38950fb40a1a5ad0a8ffab2485e3348c53)
- [Clicky repo](https://github.com/farzaa/clicky)
- [API key removal commit](https://github.com/farzaa/clicky/commit/d86c32fe2e6f6b6a5a45e2312f607eb876ea9602)
- [Gemma Multimodal Fine-Tuner repo](https://github.com/mattmireles/gemma-tuner-multimodal)
- [Gemma v0.2.0-alpha](https://github.com/mattmireles/gemma-tuner-multimodal/releases/tag/v1.1)
- [LLM Wiki repo](https://github.com/nashsu/llm_wiki)
- [LLM Wiki v0.3.1](https://github.com/nashsu/llm_wiki/releases/tag/v0.3.1)
- [LLM Wiki ablation commit](https://github.com/nashsu/llm_wiki/commit/21a9e7d195c705ca182f6f449dbc5f0125f544ad)
- [fireworks-tech-graph repo](https://github.com/yizhiyanhua-ai/fireworks-tech-graph)
