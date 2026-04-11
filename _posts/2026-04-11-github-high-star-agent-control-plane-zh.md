---
layout: post
title: "GitHub 高星專案這週在補 agent 控制面：記憶、上下文壓縮、成本可視化一起爆發"
date: 2026-04-11 10:30:00 +0800
categories: [tech]
tags: [github, ai, agents, developer tools, memory, context engineering, token economics]
description: "用 GitHub API 看這週高星專案動態：Codex、Gemini CLI、OpenCode、llama.cpp 持續補強 terminal agent runtime；近 7 天暴衝的新高星則集中在記憶、上下文壓縮、工作流封裝與用量可視化。"
lang: zh-TW
---

- 這週最明顯的變化，不是又多一個會寫 code 的 agent，而是 **agent 的控制面開始成形**。
- 已經很大的專案，繼續往 voice、MCP、remote runtime、在地推論能力擴。
- 近 7 天暴衝的新專案，沒有再重做一次聊天介面，反而集中在四塊更痛的底層：**記憶、上下文壓縮、垂直流程、用量可視化**。
- 這代表開發者社群的問題意識很一致：模型已經夠強，現在更缺的是 **怎麼讓 agent 可接續、可控、可省、可查**。

## 背景脈絡

我這次用 GitHub API 看兩組資料：

- **既有高星更新**：`stars > 50k`，且近 7 天仍有明顯更新的成熟專案
- **近 7 天新高星**：`created >= 2026-04-04`，且短時間快速衝星的新專案

先看成熟專案。方向很集中。

| 專案 | 星數 | 最新訊號 |
| --- | ---: | --- |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | 103k | 4/11 釋出 `b8755`，補 Linux on Snapdragon / Hexagon；README 也把 Hugging Face 標準 cache、`llama-server` 多模態、WebUI 放到第一線 |
| [openai/codex](https://github.com/openai/codex) | 74k | 4/10 釋出 `0.119.0`，把 v2 WebRTC voice、MCP app / server 能力、remote workflow、`/resume` session 跳轉往前推 |
| [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 100k | 4/9 釋出 `v0.37.1`；README 主打 1M context、Google Search grounding、內建 shell / file / web 工具與 MCP |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 141k | 4/10 釋出 `v1.4.3`，補 OpenAI OAuth、被中斷 Bash 的最終輸出保留、fast mode、remote MCP OAuth redirect |

再看近 7 天衝最快的新案。

| 專案 | 建立時間 | 星數 | 這次為什麼爆 |
| --- | --- | ---: | --- |
| [milla-jovovich/mempalace](https://github.com/milla-jovovich/mempalace) | 4/5 | 40k | 把 AI 長期記憶做成獨立產品，主打 raw verbatim storage、ChromaDB、LongMemEval `96.6%` |
| [santifer/career-ops](https://github.com/santifer/career-ops) | 4/4 | 29k | 把求職流程封裝成 agent workflow；4/10 版加入 zero-token portal scanner、ghost job detection、follow-up cadence |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | 4/4 | 13.6k | 直接把 token 成本變成功能點，主打輸出節省約 `75%`、輸入壓縮約 `45%` |
| [Houseofmvps/codesight](https://github.com/Houseofmvps/codesight) | 4/4 | 807 | 做 AI context generator，主打 30+ framework detector、13 ORM parser、13 MCP tools |
| [phuryn/claude-usage](https://github.com/phuryn/claude-usage) | 4/7 | 816 | 直接讀本地 Claude Code log，把 token、成本、session history 做成 dashboard |

放在一起看，意思很直接。

2025 年很多專案在競爭誰先把模型接進 terminal、IDE、browser。2026 年開始，社群正在把焦點往下一層移：

- session 怎麼續跑
- token 怎麼省
- 上下文怎麼壓縮又不失真
- 記憶怎麼保存又找得回來
- tool / MCP / OAuth / remote runtime 怎麼不變成黑箱
- 成本與使用量怎麼被團隊看見

這些不是邊角料。這些才是 agent 進入日常工作流後最先撞到的牆。

## 技術重點

### 1. terminal agent 正在從單次互動，走向長任務 runtime

`openai/codex` 這週的 `0.119.0` 很能代表這條趨勢。

- voice session 預設切到 v2 WebRTC 路徑
- MCP app / custom MCP server 支援更完整的 resource read、tool metadata、server-driven elicitations
- remote workflow 補了 websocket transport、remote `--cd` forwarding、`codex exec-server`
- `/resume` 可以直接跳指定 session

這不是單純「功能變多」。真正的訊號是：**terminal agent 已經不再只處理 prompt，開始處理 session、傳輸、遠端控制、工具網路邊界。**

`anomalyco/opencode` 的 `v1.4.3` 也走在同一路上。

- OpenAI OAuth 帳號的 `agent create` 修正
- 被中斷的 Bash 指令，仍保留最終輸出與 truncation 細節
- fast mode 變成模型分層的一部分
- remote MCP server 可以自訂 OAuth redirect URI

這些看起來像小 patch，實際上都很 operational。工程師碰到的真實問題通常不是「模型會不會寫 if statement」，而是：

- 指令被打斷後還剩什麼線索
- 遠端工具怎麼授權
- session 能不能無痛接回來
- 不同速度與成本檔位怎麼切換

`google-gemini/gemini-cli` 的訊號則比較偏平台化。

- 1M context window 已經被放成核心賣點
- Google Search grounding、shell、file、web fetch 直接當內建能力
- MCP support 直接寫進 README 主敘事

這代表另一條競爭路線：**不是做單一工具，而是做一個可直接進 command line 的 agent substrate。**

### 2. 本地推論沒有退場，反而在補 agent 化需要的介面層

很多人看到 Codex、Gemini CLI、OpenCode 的增長，會以為雲端 agent 已經吃掉所有注意力。`llama.cpp` 這週提醒大家，事情沒有那麼單向。

它 4/11 的 `b8755` release 把 **Linux on Snapdragon / Hexagon** 拉進來。README 又把這幾件事放在很前面：

- Hugging Face 標準 cache 整合
- `llama-server` 多模態支持
- 新 WebUI
- 對 `gpt-oss` 與 GGUF 生態的持續兼容

這些更新加起來，不只是「更多平台可以跑」。更重要的是，**本地模型 runtime 正在把自己接成 agent stack 的基礎設施**。如果未來團隊想做更強的隱私隔離、離線部署、邊緣裝置推論，這條線不會消失，只會更重要。

### 3. 新爆款專案幾乎都在處理 context economics

這週新高星案最值得看的，不是誰又包了一層 prompt，而是大家開始補上下文經濟學。

`mempalace` 的主張很強硬：

- 不先摘要
- 不先判斷「什麼值得記」
- 直接保留原始對話
- 再靠結構與語意檢索找回來

它在 `v3.1.0` 還補了幾個很關鍵的工程訊號：

- MCP entry point input validation
- save hook shell injection fix
- 10K safety cap 與 ChromaDB batching
- OpenAI Codex CLI JSONL normalizer
- plugin packaging 讓 Claude / Codex 更好接入

這表示它不是停在「記憶理念很美」，而是很快進入 **效能、匯入格式、MCP 邊界、安全性** 這些實戰問題。

`caveman` 與 `codesight` 則各自代表上下文經濟學的兩種方向。

- `caveman`：直接壓輸出與輸入 token，讓 agent 說話更省
- `codesight`：先把 repo 結構整理成更有效的 context，再交給任何 agent 使用

兩者都在解同一件事：**真正昂貴的不是一次回答，而是 agent 每輪都重讀、重說、重建上下文。**

### 4. 垂直工作流產品，開始比通用聊天殼更有吸引力

`career-ops` 這波衝得很快，因為它沒有再做一個萬用聊天介面。它直接把求職這件事拆成可執行流程：

- 73+ company 的 zero-token portal scanner
- ghost job detection
- follow-up cadence tracker
- 依 contact type 調整 outreach message
- roadmap 明寫未來可跑在本機免費本地模型上

這種產品吸引人的地方很簡單：**它賣的是結果，不是互動體驗。**

很多開發者現在已經不想自己拼 prompt、資料結構、任務切分、輸出模板。他們要的是可以直接對某個目標負責的 workflow。

## 關鍵取捨

### 1. raw memory 很強，但儲存量、雜訊與檢索成本會一起上升

`mempalace` 這條路很有吸引力，因為它保留「當時為什麼這樣決定」的原始脈絡。這是摘要記憶常常遺失的東西。

代價也很清楚：

- 資料量更大
- metadata 管理更難
- 不良檢索會把長記憶變成長噪音
- 安全與匯入格式問題會很快浮上來

所以記憶系統的競爭，接下來比的不只是 recall，而是 **能不能用、能不能管、能不能清楚知道自己記了什麼**。

### 2. token 壓縮有用，但壓太兇就會傷推理脈絡

`caveman` 爆紅很合理，因為 token 成本已經不是小事。

但所有壓縮工具都會碰到同一個問題：

- 壓縮後的字面資訊比較少
- 可讀性可能下降
- 邊界情況與例外條件比較容易被吃掉

這代表 token optimization 最後不會是單一開關，而是多層策略：

- 哪些地方壓輸出
- 哪些地方壓輸入
- 哪些地方保留原文
- 哪些地方只給摘要索引

### 3. richer runtime 會帶來更大授權與攻擊面

Codex、OpenCode、Gemini CLI 都在把 MCP、remote workflow、網路能力、voice、工具調用做得更深。

這很強，但同時也把問題往上推：

- OAuth 怎麼做最小權限
- remote tool 的 redirect / callback 怎麼防呆
- session resume 會不會把舊狀態誤帶進來
- shell / browser / file tool 的邊界怎麼審計

功能越接近真實工作流，授權治理就越不可能靠 README 一頁帶過。

### 4. 垂直 workflow 產品更容易交付價值，也更容易踩隱私與責任線

`career-ops` 的吸引力很強，因為使用者可以直接得到求職結果。

但越靠近 outcome，越會碰到：

- 高敏感資料
- 自動化決策責任
- 人類最後審核點
- domain 假設是否過重

所以這類產品最好的方向，通常不是 fully autonomous，而是 **高自動化 + 明確人工決策點**。

### 5. 用量可視化會成為 agent 工具的基本配備

`claude-usage` 這種專案星數還不算特別大，但訊號非常強。

它直接讀本地 log，把 token、成本、session history 拉成 dashboard。這件事之所以重要，是因為很多團隊現在連 agent 到底花了多少、哪個 session 最貴、哪種任務最耗 token，都沒有共同視圖。

沒有這層可視化，後面談成本優化都只能靠感覺。

## 對開發者影響

如果你正在做 AI 工具，這週 GitHub 的高星動態給了很實際的優先順序。

- **先補 session continuity。**
  - resume、event trail、中斷後保留最後輸出，這些比再多一個 slash command 更值錢。

- **把 memory 當成產品主體，不是附屬模組。**
  - 你要清楚回答：記什麼、怎麼找、怎麼刪、怎麼驗證。

- **把 context packing 做成一級能力。**
  - repo map、壓縮規則、摘要層級、原文回放點，都該被設計，而不是丟給模型臨場發揮。

- **從第一天就做 usage telemetry。**
  - token、成本、成功率、恢復率、常見中斷點，這些數字要能看見。

- **決定你是在做通用 substrate，還是垂直 workflow。**
  - 通用工具比擴展性。
  - 垂直工具比結果交付。
  - 兩種路都能成功，但產品節奏完全不同。

- **越多 MCP / remote / browser / shell，就越需要政策層。**
  - 權限、審計、隔離、回放，不是企業功能；很快就會變成所有進階使用者都要的功能。

## 後續觀察

接下來我會特別盯五個訊號。

### 1. 記憶產品會不會從功能，變成獨立賽道

如果 `mempalace` 這種專案接下來繼續保持 release cadence、修安全邊界、補匯入器，代表 memory layer 真的會獨立成一個大類別，而不是每家 agent 自帶一個半成品。

### 2. Codex、OpenCode、Gemini CLI 會不會收斂到相似的 runtime 形狀

如果三者都持續加強下面這幾件事：

- session resume
- MCP 授權治理
- remote execution
- 成本 / 模式切換
- 跨裝置或跨進程 continuity

那代表 terminal agent 的基本形狀已經開始收斂。

### 3. token 壓縮與 context generator 會不會變成標配外掛層

`caveman` 和 `codesight` 這類工具如果繼續漲，表示大家接受一件事：**agent 本體不需要包辦一切，context preprocessor 與 token governor 可以獨立存在。**

### 4. 成本可視化會不會從社群工具變成官方功能

`claude-usage` 這種案子如果繼續被 fork、被引用，下一步很可能是主流 agent 工具自己內建 usage dashboard、quota 預測、session 成本分析。

### 5. 本地推論 runtime 會不會重新拿回企業與邊緣場景主導權

`llama.cpp` 如果持續把多平台、多模態、標準 cache、server API 做成熟，它在企業內網、隱私敏感場景、邊緣部署上的價值會越來越高。那時候雲端 agent 跟本地 runtime 不會是二選一，而是上下游分工。

## 我的結論

- 這週 GitHub 高星動態最值得記的，不是哪個 agent 回答更像人，而是 **agent 的控制面終於被開發者當成主產品在做**。
- 成熟專案在補 runtime：voice、MCP、remote execution、在地推論、resume。
- 新高星專案在補 control plane：記憶、上下文壓縮、流程封裝、成本可視化。
- 這種分工很重要。因為下一輪競爭，未必是誰模型更大，而是誰能讓 agent：
  - 接得回來
  - 記得住
  - 花得少
  - 看得懂
  - 管得住

能做到這五件事的工具，才比較像會留在團隊日常裡的工作系統。

## 參考連結

- [GitHub Search API](https://docs.github.com/en/rest/search/search)
- [llama.cpp repository](https://github.com/ggml-org/llama.cpp)
- [llama.cpp `b8755` release](https://github.com/ggml-org/llama.cpp/releases/tag/b8755)
- [OpenAI Codex repository](https://github.com/openai/codex)
- [OpenAI Codex `0.119.0` release](https://github.com/openai/codex/releases/tag/rust-v0.119.0)
- [Gemini CLI repository](https://github.com/google-gemini/gemini-cli)
- [Gemini CLI `v0.37.1` release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.37.1)
- [OpenCode repository](https://github.com/anomalyco/opencode)
- [OpenCode `v1.4.3` release](https://github.com/anomalyco/opencode/releases/tag/v1.4.3)
- [MemPalace repository](https://github.com/milla-jovovich/mempalace)
- [MemPalace `v3.1.0` release](https://github.com/milla-jovovich/mempalace/releases/tag/v3.1.0)
- [Career-Ops repository](https://github.com/santifer/career-ops)
- [Career-Ops `v1.3.0` release](https://github.com/santifer/career-ops/releases/tag/v1.3.0)
- [caveman repository](https://github.com/JuliusBrussee/caveman)
- [caveman `v1.3.5` release](https://github.com/JuliusBrussee/caveman/releases/tag/v1.3.5)
- [codesight repository](https://github.com/Houseofmvps/codesight)
- [Claude Code Usage Dashboard repository](https://github.com/phuryn/claude-usage)

---

*GitHub API 資料截點：2026-04-11 10:30（Asia/Taipei）。星數與 release 狀態會持續變動，本文採撰寫當下觀察值。*