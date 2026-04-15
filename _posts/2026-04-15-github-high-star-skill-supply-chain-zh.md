---
layout: post
title: "GitHub 高星專案這週往供應鏈上移：agent runtime 開始吃進 marketplace、OAuth 與 telemetry，新案則把技能做成交付物"
date: 2026-04-15 10:30:00 +0800
categories: [tech]
tags: [github, open-source, ai, agents, skills, observability, developer-tools]
description: "GitHub API 顯示，成熟高星 agent repo 這週把 local marketplace、filesystem-aware skill loading、MCP OAuth 持久化與 telemetry spans 拉進核心 runtime；近 7 天衝高的新案則集中在 cost observability、設計系統 skills、skill 自我優化與技術圖產物化。"
lang: zh-TW
---

- GitHub 高星專案這週的共同方向很明確：**agent 的競爭點正在從『本體會不會做事』，往『能力怎麼被安裝、授權、觀測、優化、交付』移動。**
- 成熟專案開始把 [local marketplace sources](https://github.com/openai/codex/commit/3cc689fb2378fba47dd3a1db6c55b62775b67e73)、[filesystem-aware skill loading](https://github.com/openai/codex/commit/96254a763aac421cbc7d723d85cb86a66ebead57)、[MCP OAuth connection persistence](https://github.com/anomalyco/opencode/releases/tag/v1.4.4) 與 [AI SDK telemetry spans export](https://github.com/anomalyco/opencode/commit/f73ff781e797aac8beaaaab9a49218ec5d9e0f14) 拉進核心。
- 近 7 天衝出來的新案沒有再重做一次聊天框。它們補的是四個缺口：**成本可觀測、設計規範可安裝、skill 可持續優化、輸出可直接成圖。**
- 這代表開源 agent 生態又往前推了一層。runtime 補穩之後，真正開始爆量創新的地方，變成 **skill 供應鏈與交付層**。

## 背景脈絡

我這次用 GitHub API 看兩組資料：

1. **既有高星更新**：`stars > 30000` 且 `pushed > 2026-04-08` 的 repo。
2. **近 7 天新高星**：`created > 2026-04-08` 且 `stars > 500` 的 repo。

成熟層看到的是大 repo 仍在高頻更新，而且更新重點都落在執行層與能力分發層：

| Repo | 星數 | 這週最值得看的訊號 | 我怎麼解讀 |
|---|---:|---|---|
| [langgenius/dify](https://github.com/langgenius/dify) | 137,788 | [`v1.13.3`](https://github.com/langgenius/dify/releases/tag/1.13.3) 把 workflow execution、streaming、knowledge retrieval 的穩定性列成主軸 | 平台層開始把 correctness 當成產品賣點 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 143,307 | [`v1.4.4`](https://github.com/anomalyco/opencode/releases/tag/v1.4.4) 補 MCP OAuth 持久化、question API 形狀修正、`compaction.autocontinue`，最新 commit 又補 [telemetry spans export](https://github.com/anomalyco/opencode/commit/f73ff781e797aac8beaaaab9a49218ec5d9e0f14) | coding agent 開始把 auth 與觀測內建化 |
| [openai/codex](https://github.com/openai/codex) | 75,298 | 最新 commit 補 [local marketplace sources](https://github.com/openai/codex/commit/3cc689fb2378fba47dd3a1db6c55b62775b67e73) 與 [filesystem-aware skill loading](https://github.com/openai/codex/commit/96254a763aac421cbc7d723d85cb86a66ebead57) | skill distribution 與本地來源管理開始進主幹 |
| [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) | 84,792 | 4/15 凌晨連續 merge 多個新 MCP 入口，例如 [Polymarket Trader](https://github.com/punkpeye/awesome-mcp-servers/commit/1791c94fd5c5f37810d46da5195655006eb406ac)、[Instinct](https://github.com/punkpeye/awesome-mcp-servers/commit/de141655b40901ce185752bc08378d36f7a3f9b0)、[mdshare](https://github.com/punkpeye/awesome-mcp-servers/commit/999184db1131d9484710089204f7af8413999389) | 目錄本身正在變成能力分發市場 |

新興層的方向更集中。爆紅速度高的，不是通用 agent shell，而是幫 agent 補上「真能落地工作」的最後幾塊：

| Repo | 建立時間 | 星數 | 約略 stars/day | 補上的缺口 |
|---|---|---:|---:|---|
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 2026-04-13 | 945 | 801 | 成本與 token 可觀測 |
| [yizhiyanhua-ai/fireworks-tech-graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) | 2026-04-10 | 2,513 | 562 | 技術圖產物化 |
| [alchaincyf/darwin-skill](https://github.com/alchaincyf/darwin-skill) | 2026-04-13 | 604 | 349 | skill 自動評估與迭代 |
| [hamen/material-3-skill](https://github.com/hamen/material-3-skill) | 2026-04-09 | 609 | 111 | 設計系統規範包裝成可安裝 skill |

這些 repo 放在一起看，訊號很乾淨。

去年大家在問「agent 會不會做事」。這週 GitHub 排行榜比較像在回答另一個問題：**當 agent 已經能做事後，能力如何被安裝、被信任、被審計、被持續優化，還能不能直接交付成品。**

## 技術重點

### 1. 成熟高星 repo 開始把能力分發與權限續存做進 runtime

[Codex](https://github.com/openai/codex) 這幾筆更新很值得注意。`[codex] Support local marketplace sources` 與 `Make skill loading filesystem-aware` 兩個 commit 放在一起看，代表 skill 不再只是 repo 旁邊的一份靜態說明，而是開始進入 **來源管理、載入邊界與本機檔案語意** 的範圍。[local marketplace sources](https://github.com/openai/codex/commit/3cc689fb2378fba47dd3a1db6c55b62775b67e73)、[filesystem-aware skill loading](https://github.com/openai/codex/commit/96254a763aac421cbc7d723d85cb86a66ebead57)

這個變化的意義，不在於多了一個 marketplace 字樣，而在於 runtime 已經開始承擔三件事：

- 哪些能力從哪裡來
- 本地檔案系統怎麼解析 skill 依賴
- 安裝與載入是否能被一致處理

這很像套件管理早期從手動複製檔案，走到 registry 與 lockfile 的前一步。

[OpenCode `v1.4.4`](https://github.com/anomalyco/opencode/releases/tag/v1.4.4) 的方向也一致。release 直接把 `Persisted MCP OAuth connections that finish immediately`、`Stopped emitting user_message_chunk events during session and prompt turns in ACP clients`、`compaction.autocontinue` 寫進核心，最新 commit 又補了 [AI SDK telemetry spans export](https://github.com/anomalyco/opencode/commit/f73ff781e797aac8beaaaab9a49218ec5d9e0f14)。

這代表兩件事正在同時發生。

第一件事是 **授權流程不能再只是過場**。只要 MCP server、外部 provider、Copilot 或 ACP client 真正接進來，OAuth 完成後能不能留住連線，就直接影響 agent 會不會在第二輪任務就斷掉。第二件事是 **可觀測性不再是外掛**。當 telemetry spans 可以被導出，agent 執行就更像正常後端系統，而不是黑盒聊天流程。

[Dify `v1.13.3`](https://github.com/langgenius/dify/releases/tag/1.13.3) 雖然看起來像 patch release，實際上補的是平台最容易讓團隊踩坑的地方：workflow variable reference、streaming concurrency、replay、knowledge retrieval citation metadata、preview、hit-count filtering。這些問題都不會出現在 demo 畫面最前面，但只要要給團隊持續用，它們就是留存與棄用的分水嶺。

同一時間，[awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) 這種目錄型 repo 持續高頻合併新 server，說明 MCP 已經不是單一協定討論，而是正在形成 **能力發現層**。當目錄本身累積到 84k+ stars，而且 merge 節奏像 package index，使用者選能力的第一步就不再是自己搜尋 README，而是先進 registry 看生態成熟度。

### 2. 新高星 repo 補的不是模型能力，而是 agent 的工作配套

[CodeBurn](https://github.com/AgentSeal/codeburn) 的 README 寫得很直接：它讀本機 transcript，不靠 wrapper、不靠 proxy、不吃 API key，按 task type、tool、model、MCP server、project 去拆 Claude Code 與 Codex 的成本與成功率。[README](https://raw.githubusercontent.com/AgentSeal/codeburn/main/README.md) 最新版本 `0.4.2` 又補了 [agent/subagent session 納入統計、Codex cache cost calculation 修正、CSV injection fix](https://github.com/AgentSeal/codeburn/commit/bd8ae2e97179ad717453e0344f99ab994e0a9c99)。

這個 repo 會在 1.2 天左右衝到 945 stars，不是因為它比 base model 更強，而是因為大家已經開始感受到另一種痛：**token 花去哪裡、哪種任務最燒、哪種工具最常一輪成功，現在沒有 dashboard 就很難管。**

[Material 3 Skill](https://github.com/hamen/material-3-skill) 的訊號也很清楚。這個 repo 把 Material Design 3 的元件、design tokens、theming、responsive layout、MD3 compliance audit 打包成一份可安裝 skill，而且 README 明講主軸是 Compose-first，連 web 只到 maintenance mode 都先說清楚。[README](https://raw.githubusercontent.com/hamen/material-3-skill/master/README.md)、[Compose-first refresh commit](https://github.com/hamen/material-3-skill/commit/0c17ec571c2b0db7b67f921b7b2f8fc29ca07823)

這很像設計系統版的 infra-as-code。以前團隊會把 design guideline 放在 wiki，現在開始有人把它包成 agent 可執行的規範包，連 audit 都做進去。這不是「多一份文件」，而是把設計知識變成機器可呼叫的工作單位。

[Darwin-Skill](https://github.com/alchaincyf/darwin-skill) 更直接把 skill 維護問題產品化。README 把它定義成受 [Karpathy autoresearch](https://github.com/karpathy/autoresearch) 啟發的 skill optimizer，核心是 evaluate → improve → test → keep or revert，並用 8 維度評分與 ratchet 機制控制品質。[README](https://raw.githubusercontent.com/alchaincyf/darwin-skill/master/README.md) 更值得注意的是，4/14 的 commit 已經把範圍從 Claude Code 擴大到 [Codex / OpenClaw / Trae / CodeBuddy](https://github.com/alchaincyf/darwin-skill/commit/7db512217415ace04211b5ee7f7dfdb413323432)。

這代表 skill 生態已經開始面對一個成熟平台才會出現的問題：**不是 skill 怎麼寫，而是 skill 怎麼持續回歸測試、怎麼只保留有實測改進的版本。**

[Fireworks Tech Graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) 則把另一個需求抓得很準。它不是要你跟 agent 聊圖，而是要你用自然語言直接拿到 publication-ready 的 SVG + PNG 技術圖，README 直接寫出 14 種圖類型、7 種風格、AI/Agent domain pattern、以及 `rsvg-convert` 的產物流程。[README](https://raw.githubusercontent.com/yizhiyanhua-ai/fireworks-tech-graph/main/README.md) 最新 commit 還在補 [line overlap prevention](https://github.com/yizhiyanhua-ai/fireworks-tech-graph/commit/538ffcc76f94ac7fb1b4db597cf78209cb4066d4)。

這個訊號很實際。只要 repo 開始補線條重疊、輸出品質、回歸範本，代表作者知道自己賣的不是生成過程，而是 **最後能不能貼進文件、投影片、提案與部落格的成品品質**。

## 關鍵取捨

### 1. marketplace 與 skill 目錄會加速生態，但供應鏈風險也會一起放大

當 [Codex](https://github.com/openai/codex) 開始談 local marketplace sources、[awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) 持續像 registry 一樣擴張，能力分發效率一定會更高。代價也很直接：

- skill 來源是否可信
- 版本是否可追溯
- 本地載入是否會踩到權限邊界
- 第三方 server 的維護品質差異怎麼管

這是 agent 生態會碰到的套件供應鏈問題，只是物件從 npm package 變成 skill、prompt runtime 與 MCP server。

### 2. transcript-based observability 很有感，但隱私與資料治理會變成硬限制

[CodeBurn](https://github.com/AgentSeal/codeburn) 這種工具的價值非常明顯。它讓團隊第一次看見「哪種任務一直在 retry、哪個 model 最燒錢、哪個 MCP server 成本高但成功率低」。

問題同樣很現實：只要資料來源是本機 transcript，工具就必須處理敏感代碼、指令、檔名、路徑、測試輸出，甚至可能碰到機密字串。可觀測性越成熟，越需要 **匿名化、存取控制、匯出安全與保留政策**。

### 3. design skill 與 artifact skill 很容易擴散，但品質保證比一般 prompt 更難

[Material 3 Skill](https://github.com/hamen/material-3-skill) 與 [Fireworks Tech Graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) 都在把 know-how 做成可安裝能力。這條路的好處是差異化很清楚，使用者一裝就知道價值。難點在於維護成本並不低：

- design system 會改版
- 各平台支援度不同
- 圖像輸出容易因 layout edge case 破功
- 範本一多，回歸測試就會快速膨脹

所以 skill 被包裝成產品之後，真正的工作不在發第一版，而在 **如何持續把品質留在可預期範圍內**。

### 4. skill 自我優化很吸引人，但評分系統本身也要被治理

[Darwin-Skill](https://github.com/alchaincyf/darwin-skill) 把 autoresearch 的想法搬進 skill 優化，很容易讓人想像未來 skill 可以自我進化。這條路的風險在於：如果評估維度設錯，系統只會更快把 skill 推向錯的局部最優。

也就是說，未來 skill 生態不只需要 skill 本身，還需要：

- 測試集
- 評分 rubric
- regression baseline
- keep / revert 機制
- 人在回路的最後審核

這會讓 skill repository 的結構越來越像軟體工程，而不是一份 prompt 收藏夾。

## 對開發者影響

這週 GitHub 排行榜給開發者的訊號很實際。

第一個優先順序是：**把 capability packaging 當成正式工程問題。**

如果你的 agent 產品要接 skill、plugin 或 MCP server，現在就需要想清楚來源、版本、權限、載入路徑與失敗回退。這件事以前常被當成「以後再補」，現在已經在高星主幹 repo 裡了。[Codex commit](https://github.com/openai/codex/commit/3cc689fb2378fba47dd3a1db6c55b62775b67e73)、[OpenCode release](https://github.com/anomalyco/opencode/releases/tag/v1.4.4)

第二個優先順序是：**把 agent observability 往前拉。**

只看回覆品質已經不夠。接下來團隊更在意的是哪一段流程最常 retry、哪種工具最常失敗、哪個 provider 最燒、哪些 session 在 compaction 或 OAuth 之後容易斷。能把這些資料做成 dashboard 的團隊，會比只追模型分數的團隊更快迭代。

第三個優先順序是：**差異化要落在可交付物。**

聊天殼層的競爭已經太擠。現在更有機會衝高 star 的，是能直接產出圖、審 UI 規範、分析 token、迭代 skill 的工具。這些 repo 的共同點不是會聊天，而是它們會把工作往前推一格。

第四個優先順序是：**skill 需要測試，不是只需要靈感。**

當 [Darwin-Skill](https://github.com/alchaincyf/darwin-skill) 這種 repo 開始出現，等於整個社群都在承認一件事：skill 不是寫完就結束，它需要版本控制、驗證集、回歸與淘汰機制。未來 skill 的維護流程會越來越像維護套件，而不是維護一篇教學文。

## 後續觀察

接下來我會特別盯四個方向。

### 1. skill / marketplace schema 會不會開始收斂

如果 [Codex](https://github.com/openai/codex)、[OpenCode](https://github.com/anomalyco/opencode)、MCP 目錄與各家 agent runtime 都各自長出不同 skill manifest，開發者會很快遇到生態碎片化。如果它們逐步收斂，skill portability 才會真的成立。

### 2. telemetry 會留在外部工具，還是回流成 runtime 內建能力

[CodeBurn](https://github.com/AgentSeal/codeburn) 這波爆紅已經證明成本與成功率儀表板有需求。[OpenCode](https://github.com/anomalyco/opencode/commit/f73ff781e797aac8beaaaab9a49218ec5d9e0f14) 又開始把 telemetry spans 往外吐。下一步值得看的是：觀測層會不會從 sidecar 變成 agent 核心控制面的一部分。

### 3. skill 供應鏈會不會出現簽章、評分卡與 provenance

一旦 marketplace 與 skill repo 更多，社群就需要更強的信任機制。未來很可能會看到：

- 作者簽章
- skill 測試分數卡
- 支援 runtime matrix
- 最近維護狀態
- 來源與依賴的 provenance

這些資訊一旦標準化，skill 生態才有機會進入團隊採用，而不只停在個人玩家試玩。

### 4. 能直接產出 artifact 的 repo，誰會先形成穩定回訪

[Fireworks Tech Graph](https://github.com/yizhiyanhua-ai/fireworks-tech-graph) 與 [Material 3 Skill](https://github.com/hamen/material-3-skill) 代表兩條很值得追的線：一條是直接做成圖，一條是直接做成規範。真正的分水嶺不是 star，而是三個月後大家還會不會週週回來用它做文件、做設計審查、做工程交付。

## 結語

GitHub 這週最有意思的，不是哪個 agent 又多一個 model provider，而是 **agent 生態開始長出真正的供應鏈結構**。

成熟 repo 在補 marketplace、skill loading、OAuth 續存、telemetry；新 repo 在補成本觀測、設計規範、skill 優化與圖像交付。這些東西都不在 demo 的第一眼，但它們決定了 agent 能不能從酷炫功能，走到團隊真的天天用的工作系統。

下一輪開源 agent 的差異化，會越來越少來自「你有沒有一個 agent」，越來越多來自：

- 你的能力怎麼被安裝
- 你的能力怎麼被追蹤
- 你的能力怎麼被優化
- 你的能力最後交付成什麼

這一層一旦站穩，agent 才會真正像基礎設施，而不是一波又一波的介面重做。

---

*資料整理方式：GitHub API 搜尋 `stars > 30000 AND pushed > 2026-04-08`，以及 `created > 2026-04-08 AND stars > 500`，再補看 repo README、release note 與最新 commit。資料時間點：2026-04-15 10:30（Asia/Taipei）。*

*主要來源：*

- [GitHub Search API（高星近期更新）](https://api.github.com/search/repositories?q=stars:%3E30000+pushed:%3E2026-04-08&sort=updated&order=desc&per_page=20)
- [GitHub Search API（近 7 天新高星）](https://api.github.com/search/repositories?q=created:%3E2026-04-08+stars:%3E500&sort=stars&order=desc&per_page=20)
- [Dify repo](https://github.com/langgenius/dify)
- [Dify v1.13.3](https://github.com/langgenius/dify/releases/tag/1.13.3)
- [OpenCode repo](https://github.com/anomalyco/opencode)
- [OpenCode v1.4.4](https://github.com/anomalyco/opencode/releases/tag/v1.4.4)
- [OpenCode telemetry commit](https://github.com/anomalyco/opencode/commit/f73ff781e797aac8beaaaab9a49218ec5d9e0f14)
- [Codex repo](https://github.com/openai/codex)
- [Codex local marketplace commit](https://github.com/openai/codex/commit/3cc689fb2378fba47dd3a1db6c55b62775b67e73)
- [Codex filesystem-aware skill loading commit](https://github.com/openai/codex/commit/96254a763aac421cbc7d723d85cb86a66ebead57)
- [awesome-mcp-servers repo](https://github.com/punkpeye/awesome-mcp-servers)
- [Polymarket Trader MCP commit](https://github.com/punkpeye/awesome-mcp-servers/commit/1791c94fd5c5f37810d46da5195655006eb406ac)
- [Instinct MCP commit](https://github.com/punkpeye/awesome-mcp-servers/commit/de141655b40901ce185752bc08378d36f7a3f9b0)
- [mdshare commit](https://github.com/punkpeye/awesome-mcp-servers/commit/999184db1131d9484710089204f7af8413999389)
- [CodeBurn repo](https://github.com/AgentSeal/codeburn)
- [CodeBurn README](https://raw.githubusercontent.com/AgentSeal/codeburn/main/README.md)
- [CodeBurn 0.4.2 commit](https://github.com/AgentSeal/codeburn/commit/bd8ae2e97179ad717453e0344f99ab994e0a9c99)
- [Material 3 Skill repo](https://github.com/hamen/material-3-skill)
- [Material 3 Skill README](https://raw.githubusercontent.com/hamen/material-3-skill/master/README.md)
- [Material 3 Skill Compose-first refresh](https://github.com/hamen/material-3-skill/commit/0c17ec571c2b0db7b67f921b7b2f8fc29ca07823)
- [Darwin-Skill repo](https://github.com/alchaincyf/darwin-skill)
- [Darwin-Skill README](https://raw.githubusercontent.com/alchaincyf/darwin-skill/master/README.md)
- [Darwin-Skill broaden commit](https://github.com/alchaincyf/darwin-skill/commit/7db512217415ace04211b5ee7f7dfdb413323432)
- [Karpathy autoresearch](https://github.com/karpathy/autoresearch)
- [Fireworks Tech Graph repo](https://github.com/yizhiyanhua-ai/fireworks-tech-graph)
- [Fireworks Tech Graph README](https://raw.githubusercontent.com/yizhiyanhua-ai/fireworks-tech-graph/main/README.md)
- [Fireworks Tech Graph line-overlap fix](https://github.com/yizhiyanhua-ai/fireworks-tech-graph/commit/538ffcc76f94ac7fb1b4db597cf78209cb4066d4)
