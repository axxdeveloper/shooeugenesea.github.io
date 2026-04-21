---
layout: post
title: "GitHub 高星開源觀察（2026-04-21）：成熟基建補治理，新星把 Agent 直接做進瀏覽器、終端與設計產物"
date: 2026-04-21 10:30:00 +0800
categories: [tech]
tags: [github, open-source, ai, agents, codex, vllm, browser, terminal, design]
description: "GitHub API 顯示，既有高星 AI 專案這週持續補執行治理、權限邊界與工具/推理正確性；近 7 天新高星專案則明顯轉向瀏覽器 harness、web terminal、投影片技能與設計系統抽取，AI 正從聊天框往工作表面與可交付產物移動。"
lang: zh-TW
---

- 這週 GitHub 高星動態最值得看的，不是哪個模型又多快，而是 **成熟高星專案在補「執行治理」，新爆紅專案在補「工作表面」**。
- 成熟層代表是 [openai/codex](https://github.com/openai/codex)、[openclaw/openclaw](https://github.com/openclaw/openclaw)、[vllm-project/vllm](https://github.com/vllm-project/vllm)；它們最近更新都在處理更真實的東西：**權限邊界、背景執行、多工作階段隔離、工具呼叫正確性、推理/串流輸出的一致性**。
- 新興層則很明顯不是再做一個聊天框，而是把 Agent 能力直接塞進更接近工作的入口：[browser-use/browser-harness](https://github.com/browser-use/browser-harness) 把瀏覽器操作包成自修復 harness、[vercel-labs/wterm](https://github.com/vercel-labs/wterm) 把 terminal 變成 web 內建元件、[lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) 與 [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) 直接把簡報與圖解做成 skill、[Manavarya09/design-extract](https://github.com/Manavarya09/design-extract) 則把網站設計語言抽成可重用資產。
- 這兩組資料放一起看，訊號很清楚：**AI 正在從「回你一段文字」走向「在你的工作表面執行，並直接產生可交付物」。**

## 背景脈絡

這次我一樣先用 GitHub API 看兩組資料：

1. **既有高星近期更新**：`stars > 30000` 且 `pushed >= 2026-04-14`
2. **近 7 天新高星**：`created >= 2026-04-14` 且 `stars > 500`

原始搜尋結果裡也有不少非 AI / 非開發工作流 repo（像求職清單、一般前端套件、工具型老牌專案）。如果把焦點收斂到 **AI 與 developer workflow 最有代表性的訊號**，這週可以濃縮成下面兩組。

### 既有高星更新：成熟層重點不再是功能炫技，而是執行面治理

| Repo | 星數 | 近期訊號 | 我怎麼解讀 |
|---|---:|---|---|
| [openai/codex](https://github.com/openai/codex) | 76,575 | `0.122.0` 補 side conversation、工作中排隊指令、Plan Mode fresh context、plugin workflow、deny-read 權限與 isolated exec；最新 commit 又加 Bedrock provider 與 transcript delta | coding agent 正從單次互動工具，走向真正可長跑、可分流、可受控的執行器 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 361,307 | `2026.4.19-beta` 修 usage 準確度、nested lanes 隔離、session token totals；`2026.4.15` 補 Model Auth 狀態卡、雲端記憶、Google TTS | personal assistant 平台的競爭點，已經變成控制面、可觀測性與多 session 治理 |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | 77,464 | `0.19.1` 專修 Gemma 4 tool-use / reasoning / streaming JSON 正確性，外加 quantized MoE 與 Eagle3；近期 commit 補 multimodal embedder 與 IR 測試基建 | inference 基建現在拼的不只是 tokens/sec，而是 tool-use、reasoning、multimodal 輸出的穩定正確性 |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | 30,346 | 近期 commit 明顯往 shell docs / shell dashboard / shell dojo 整理 showcase 結構 | agent-native UI 正在朝 shell / generative UI / protocol 化前進，不只是一個 chat widget |

### 近 7 天新高星：新興層開始搶「工作表面」與「工作產物」

| Repo | 建立時間 | 星數 | 補上的入口 |
|---|---|---:|---|
| [browser-use/browser-harness](https://github.com/browser-use/browser-harness) | 2026-04-17 | 3,646 | 自修復瀏覽器 harness，讓 agent 可以直接改 helper、接真實 Chrome、靠 domain skills 完成網站任務 |
| [vercel-labs/wterm](https://github.com/vercel-labs/wterm) | 2026-04-14 | 2,214 | DOM + WASM 的 web terminal，把 terminal 變成可嵌入產品的互動面 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | 2026-04-15 | 1,667 | 把投影片製作技能化，直接輸出可展示 deck 與 presenter mode |
| [Manavarya09/design-extract](https://github.com/Manavarya09/design-extract) | 2026-04-15 | 1,160 | 把網站設計系統、motion、component anatomy、brand voice 抽成可重用資產 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 2026-04-16 | 978 | 把品牌感一致的圖解生成變成 skill，而不是零散 prompt |

如果把兩組資料合起來看，本週主線很像這樣：

> **成熟專案在把 Agent 的底層執行環境整理成可治理 substrate；新興專案則在把 Agent 往瀏覽器、terminal、簡報、圖解、設計系統這些工作表面推。**

## 技術重點

### 1. Codex、OpenClaw、vLLM 共同指向一件事：AI runtime 的價值已經從「能不能做」變成「做得可不可以被治理」

先看 [Codex `0.122.0`](https://github.com/openai/codex/releases/tag/rust-v0.122.0)。這版最值得注意的不是單一 feature，而是整包更新都圍繞著 **人在旁邊監督時，agent 怎麼更像一個可管理的執行器**：

- `/side` side conversation：工作主線之外，可以開臨時支線問問題
- 工作進行中支援排隊 slash command 與 shell prompt
- Plan Mode 可在 fresh context 開始實作，再決定是否帶著 planning thread 前進
- plugin workflow 支援 tabbed browsing、inline enable/disable、remote / cross-repo / local marketplace
- filesystem 權限補上 deny-read glob policy、managed deny-read requirement、isolated `codex exec`
- 工具發現與 image generation 預設開啟
- 最新 commit 又出現 `Add executor HTTP request protocol`、內建 Amazon Bedrock provider、handoff transcript delta

這些變化連起來看，不是「再多幾個 provider」而已，而是 **agent 執行的上下文切換、權限界線、工作排程與可見回報都在被制度化**。

[OpenClaw](https://github.com/openclaw/openclaw) 這週也很像。`2026.4.19-beta.2` 雖然名稱是 patch，但實際修的都是 production 級痛點：

- streaming request 強制帶 `stream_options.include_usage`，避免本地或相容後端 usage 長期顯示 0%
- nested agent work 改成 per-target-session scope，避免一個長任務卡住其他 session
- `/status` 與 sessions 狀態保留 carried-forward token totals，不再因 provider 少回 usage 而顯示錯誤

再往前看 [`2026.4.15`](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15)，又補了：

- Model Auth status card：把 OAuth token 健康度與 provider rate-limit 壓力直接拉上控制面
- `memory-lancedb` 雲端儲存：記憶層不再綁本地磁碟
- Google TTS：語音輸出直接進正式產品通道
- `localModelLean`：替弱一點的本地模型減 prompt 負擔

這很代表性。assistant 平台現在真正難的地方，已經不是「呼叫工具」本身，而是 **多 session、權限、模型授權、記憶、可觀測性** 如何一起穩。

[vLLM `0.19.1`](https://github.com/vllm-project/vllm/releases/tag/v0.19.1) 則提供了另一個成熟層訊號：**推理基建也被迫面對 tool-use / reasoning 之後的輸出正確性問題**。這版更新的重點不是 benchmark，而是：

- 升級到 `transformers v5.5.3`
- 修 Gemma 4 streaming tool call 的 invalid JSON
- 修 streaming tool call 在 split boolean / number 值時被破壞
- 補 reasoning parser 的 request adjust
- 支援 quantized MoE 與 Eagle3
- 近期 commit 又補 multimodal embedder 行為與 IR testing / benchmarking infrastructure

這些看起來都很底層，但非常關鍵。因為只要模型輸出從純文字變成 tool call、JSON、reasoning、multimodal chunk，**錯一個 delimiter、少一次對齊、亂一段流，整個上層 agent 都會壞。**

也就是說，本週成熟高星 repo 的共同語言其實是：

> **不是把模型能力堆更高，而是把執行合約、權限邊界與輸出正確性補得更像基礎設施。**

### 2. 新爆紅專案幾乎都在做同一件事：把 Agent 從聊天框拉到更貼近工作的表面

最值得注意的新 repo 是 [browser-use/browser-harness](https://github.com/browser-use/browser-harness)。它的 README 幾乎把產品主張講得非常赤裸：

- self-healing browser harness
- 直接連真實 Chrome 的 CDP websocket
- agent 需要什麼 helper，就在任務中自己補
- 鼓勵累積 `domain-skills/`，把網站 selector、流程與 edge case 沉澱成可重用技能

最近 commit 更直接補了 Reddit 與 Medium 的 domain skills。這很重要，因為它代表瀏覽器自動化正在從「每次重寫一段脆弱腳本」，走向 **agent 在真實任務裡邊做邊學，最後把網站知識沉澱成 skill**。

另一個很強的訊號是 [wterm](https://github.com/vercel-labs/wterm)。它不是要取代 shell，而是把 terminal 做成可以自然嵌在產品裡的元件：

- Zig + WASM 核心，README 強調 release build 大約 12KB
- DOM rendering，所以原生文字選取、瀏覽器 find、螢幕閱讀器相容都直接拿到
- WebSocket transport + React / vanilla JS + markdown terminal rendering
- [`v0.1.8`](https://github.com/vercel-labs/wterm/releases/tag/v0.1.8) 補了 E2E 測試、Vite example、Markdown streaming example、整套 API reference
- [`v0.1.9`](https://github.com/vercel-labs/wterm/releases/tag/v0.1.9) 又馬上補 bracketed paste ESC injection 安全修正

這告訴我們一件事：**terminal 不再只是工程師本地視窗，而可能變成 agent 產品最自然的進度面、輸出面、互動面。**

### 3. html-ppt-skill、design-extract、diagram-design 代表另一條更有意思的線：AI 正在被包成「可交付產物生成器」

如果 browser-harness 與 wterm 是工作表面，那 [html-ppt-skill](https://github.com/lewislulu/html-ppt-skill)、[design-extract](https://github.com/Manavarya09/design-extract)、[diagram-design](https://github.com/cathrynlavery/diagram-design) 就是在補 **工作成果本身**。

先看 `html-ppt-skill`：

- README 直接打出 36 themes、15 full-deck templates、31 layouts、47 animations
- 不是只生 slide HTML，還有真正的 presenter mode
- presenter 視窗用 iframe 吃同一份 deck，確保 audience 與 preview pixel-perfect 一致
- recent commit 連續補 magnetic-card UI、`postMessage` 無 reload 預覽、theme sync、中文版 README

這類 skill 的重點不只是「AI 幫你做簡報」，而是 **把簡報從 prompt 結果變成可維護的靜態成品系統**。

`design-extract` 更像另一種產品化：

- 不只抽色票與字體，還抽 layout patterns、motion language、component anatomy、brand voice
- [`v9.0.0`](https://github.com/Manavarya09/design-extract/releases/tag/v9.0.0) 直接補 `motion tokens`、`*-anatomy.tsx`、`*-voice.json`
- 還多了 `designlang lint`、`designlang drift`、`visual-diff`

這很值得注意，因為它把「設計風格」從主觀感受，往 **可檢查、可 diff、可進 CI 的結構化資產** 推進。

`diagram-design` 的切法也類似：

- 13 種 editorial diagram types
- brand-matching、無陰影、避免 Mermaid 那種制式感
- 最近 commit 又補 Claude Code plugin 與 marketplace manifests

這代表 diagram 也在從「請模型臨時畫一張圖」變成 **有版型、有質感規則、有安裝入口的技能供應層**。

把這三個 repo 放一起看，會看到一個很明顯的市場偏移：

> **大家不再只想讓 AI 幫忙想，而是想讓 AI 直接生成能交出去的 deck、diagram、design token、component stub。**

## 關鍵取捨

### 1. 執行能力越靠近真實工作流，安全與邊界治理就越不能晚補

本週很多更新其實都在補這件事：

- Codex 補 deny-read policy 與 isolated exec
- OpenClaw 補 auth 狀態卡、session usage 準確度與 nested session 隔離
- wterm 補 bracketed paste ESC injection 安全修正
- browser-harness 強調 domain skill 與 helper 沉澱，而不是硬編一堆 fragile recipe

這說明一件事：**AI 一旦離開 demo、進到瀏覽器、terminal、真實檔案系統與帳號環境，安全與可治理性就會從附加值變成入場券。**

### 2. 工作表面越清楚，產品價值越容易被感知；但維護成本也會更快暴露

瀏覽器 harness、web terminal、HTML 簡報、diagram skill 這些東西都很有感，因為使用者一打開就知道值不值得。但代價也很直接：

- browser automation 要持續追網站 DOM 變化
- terminal 元件要扛 input、render、copy/paste、安全、可及性
- HTML deck 要兼顧主畫面與 presenter 視窗一致性
- design extraction / diagram 只要品質不穩，使用者很快就回去手做

也就是說，**越接近工作表面的產品，越必須長期投資穩定性與回歸品質。**

### 3. 產物化是成長引擎，但也會把品質門檻拉得更高

像 `design-extract`、`diagram-design`、`html-ppt-skill` 這類專案，本質上都在做一件事：把 AI 產出變成比較可以直接交付的東西。這很容易爆紅，因為價值非常直觀。

但一旦你承諾的是「可交付」，使用者的要求就不再是「差不多可用」：

- 投影片要不要真的好看
- 圖解是否符合品牌視覺
- motion token 是否穩定
- component anatomy 抽出來能不能真的接進前端系統

所以這類產品的門檻，不在第一次 demo，而在第 30 次、第 300 次還能不能穩。

## 對開發者影響

### 1. 選 agent / infra 時，別再只看模型清單與 benchmark

這週成熟 repo 給的提醒很直接：真正影響長期可用性的，常常是這些問題：

- 權限與檔案邊界如何控管
- 背景工作是否可回報進度
- session / nested task 會不會互相卡住
- tool-use / reasoning / JSON streaming 是否可靠
- auth 狀態與 usage 是否能被看懂

也就是說，**execution contract 比 feature matrix 更重要。**

### 2. 新產品機會不一定在更大模型，而在更對的工作表面

這週新爆紅 repo 很少是在賣「我有一個更厲害的聊天機器人」，反而是在賣：

- 可自修復的 browser harness
- 可嵌進產品的 terminal surface
- 可交付的 HTML 簡報 skill
- 可抽取 / lint / drift-check 的設計語言系統
- 可直接套進品牌感的 editorial diagram

這表示下一波產品機會，很可能在 **surface design 與 artifact delivery**，而不是再包一層 chat UI。

### 3. domain skill、design token、diagram template 會變成新的競爭資產

過去大家很常把 prompt 當資產；現在看起來更有價值的東西可能是：

- browser 任務累積下來的 domain skill
- 設計語言萃取後的 token / anatomy / voice 檔案
- 可重用的 diagram / deck template
- 可嵌入產品的 shell / terminal / generative UI 元件

這些東西的共同點是：**一旦累積，就比單次 prompt 更有複利。**

### 4. inference correctness 會重新變成顯學

當上層 agent 越來越依賴 tool call、structured output、reasoning、multimodal，像 vLLM 這種底層問題就不再只是 infra 團隊的事。上層產品也必須關心：

- 模型輸出的 JSON 會不會在 streaming 中壞掉
- tool-call delimiter 是否穩定
- reasoning parser 是否和前端 / runtime 預期對齊

因為這些基建一旦不穩，所有「很炫」的工作表面都會一起垮掉。

## 後續觀察

接下來我會特別盯四件事。

### 1. Browser harness 的 domain skill，會不會長成新的技能供應鏈

如果 browser-harness 這條線持續成長，真正有價值的可能不是單次自動化，而是 **每個站點的任務知識如何被累積、分享、維護**。這會很像瀏覽器時代的操作插件生態，但服務的是 agent。

### 2. terminal / shell 會不會變成 agent 產品的預設主介面之一

wterm、CopilotKit 的 shell showcase、Codex 的 side conversation 與 work-in-progress queue 其實都指向同一件事：**agent 的自然互動面，不一定是 chat；很可能是 shell-like、status-rich、可中斷的執行介面。**

### 3. 設計與內容產物 skill，能不能接進更正式的團隊流程

`html-ppt-skill`、`diagram-design`、`design-extract` 現在看起來很像創作者工具，但下一步如果能接進：

- 設計系統 CI
- 文件與部落格發佈流程
- 行銷 / 銷售簡報產線
- 品牌一致性檢查

那它們就會從「好玩的 skill」變成「團隊正式基礎設施」。

### 4. 推理基建能不能把 tool-use / reasoning streaming 變成穩定共識

成熟層接下來最值得盯的，不只是誰更快，而是：

- structured output 與 streaming 能否收斂成更穩的共識
- 多模型 provider 的 auth / usage / permission 控制面能否更一致
- 上層 UI、runtime、inference server 能否對同一組事件合約收斂

如果這些底層協定開始收斂，整個 agent 生態的可組裝性會大很多；反之，大家就會各自綁死在自己的執行棧裡。

## 結語

GitHub 這週高星動態最值得記住的，不是單一 repo 的 star 衝多快，而是這個更大的結構變化：

> **成熟高星專案正在把 Agent 底層做成可治理的執行基建；新興高星專案則正在把 Agent 往瀏覽器、終端、簡報、圖解、設計系統這些工作表面與產物層推進。**

這兩條線如果接起來，下一波真正留下來的開源 AI 產品，很可能會同時具備三件事：

- 底層執行合約穩
- 中層控制面與權限邊界清楚
- 上層能直接落在工作表面，產生可交付成果

這比「再做一個聊天框」重要得多。

---

*資料整理方式：GitHub API 搜尋 `stars > 30000 AND pushed >= 2026-04-14`，以及 `created >= 2026-04-14 AND stars > 500`，再補看 repo release、README 與近期 commit。資料時間點：2026-04-21 10:30（Asia/Taipei）。*

*主要來源：*

- [GitHub Search API（高星近期更新）](https://api.github.com/search/repositories?q=stars:%3E30000+pushed:%3E=2026-04-14+archived:false&sort=updated&order=desc&per_page=20)
- [GitHub Search API（近 7 天新高星）](https://api.github.com/search/repositories?q=created:%3E=2026-04-14+stars:%3E500+archived:false&sort=stars&order=desc&per_page=20)
- [Codex repo](https://github.com/openai/codex)
- [Codex 0.122.0](https://github.com/openai/codex/releases/tag/rust-v0.122.0)
- [Codex recent commits](https://github.com/openai/codex/commits/main/)
- [OpenClaw repo](https://github.com/openclaw/openclaw)
- [OpenClaw 2026.4.19-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.4.19-beta.2)
- [OpenClaw 2026.4.15](https://github.com/openclaw/openclaw/releases/tag/v2026.4.15)
- [vLLM repo](https://github.com/vllm-project/vllm)
- [vLLM 0.19.1](https://github.com/vllm-project/vllm/releases/tag/v0.19.1)
- [CopilotKit repo](https://github.com/CopilotKit/CopilotKit)
- [browser-harness repo](https://github.com/browser-use/browser-harness)
- [wterm repo](https://github.com/vercel-labs/wterm)
- [wterm v0.1.8](https://github.com/vercel-labs/wterm/releases/tag/v0.1.8)
- [wterm v0.1.9](https://github.com/vercel-labs/wterm/releases/tag/v0.1.9)
- [html-ppt-skill repo](https://github.com/lewislulu/html-ppt-skill)
- [design-extract repo](https://github.com/Manavarya09/design-extract)
- [design-extract v9.0.0](https://github.com/Manavarya09/design-extract/releases/tag/v9.0.0)
- [diagram-design repo](https://github.com/cathrynlavery/diagram-design)
