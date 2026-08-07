---
layout: post
title: "GitHub 高星開源觀察（2026-04-23）：成熟 agent 補審核與交接面，新星往原型、圖解與文件成品衝"
date: 2026-04-23 10:30:00 +0800
categories: [tech]
tags: [github, open-source, ai, agents, design, document, coding-agent]
description: "GitHub API 顯示，既有高星 agent repo 這週正把審核、交接、設定可見度與權限回覆路由做得更完整；近 7 天新高星則集中在 HTML 原型、品牌化圖解、正式文件與本地設計桌面，開源焦點正從『會不會生成』轉向『能不能直接交件』。"
lang: zh-TW
---

- 這週最有代表性的 GitHub 訊號，不是又多一個聊天框，也不是誰又多接一個模型，而是 **成熟 agent 開始把審核、交接、設定可見度與權限回覆做成正式產品面；新爆紅 repo 則直接搶原型、圖解、投影片與文件這些交件表面**。
- 成熟層我這次挑的是 [Codex](https://github.com/openai/codex)、[Claude Code](https://github.com/anthropics/claude-code)、[OpenCode](https://github.com/anomalyco/opencode)、[OpenClaw](https://github.com/openclaw/openclaw)。它們這幾天的更新都不是炫技型功能，而是把 **approval、handoff、MCP、config、permission routing、provider 相容性** 補得更能在真實工作流裡長時間運轉。
- 新星層則很集中： [Huashu Design](https://github.com/alchaincyf/huashu-design)、[Open CoDesign](https://github.com/OpenCoworkAI/open-codesign)、[Diagram Design](https://github.com/cathrynlavery/diagram-design)、[Kami](https://github.com/tw93/Kami)。它們幾乎都在做同一件事：**把最後要交出去的東西做漂亮、做可編輯、做可重用。**
- 兩組資料放在一起看，主線很清楚：**開源 AI 正在從「模型能不能生成」走向「過程能不能被接手、結果能不能直接發出去」。**

## 背景脈絡

我這次一樣用 GitHub API 看兩組資料：

1. **既有高星近期更新**：`stars > 30000` 且 `pushed >= 2026-04-16`
2. **近 7 天新高星**：`created >= 2026-04-16` 且 `stars > 500`

成熟高星名單如果不過濾，會混進 React、Linux、awesome list 這種超大型通用 repo。這篇只挑 **AI / agent / workflow tooling** 相關且這幾天更新訊號夠明確的案子來看。

| Repo | 星數 | 這週訊號 | 我怎麼解讀 |
|---|---:|---|---|
| [openai/codex](https://github.com/openai/codex) | 77,063 | [`0.123.0`](https://github.com/openai/codex/releases/tag/rust-v0.123.0) 補 `amazon-bedrock` provider、`/mcp verbose`、plugin MCP 載入與 realtime handoff；近期 commit 又補 [`approve with strict review`](https://github.com/openai/codex/commit/5e71da14247f4d2dc2de1c0d71f9a1cac9de1a90) 與 [`RMCP HTTP client`](https://github.com/openai/codex/commit/0e78ce80eebbb08856e4a212ecd045ab42d72948) | coding agent 正把審核、交接、遠端工具傳輸做成制度化入口 |
| [anthropics/claude-code](https://github.com/anthropics/claude-code) | 117,013 | [`v2.1.118`](https://github.com/anthropics/claude-code/releases/tag/v2.1.118) 新增 visual mode、`/usage`、自訂 theme，hooks 可直接呼叫 MCP tools | 終端 agent 正在從「能用」走向「適合長時間天天用」 |
| [anomalyco/opencode](https://github.com/anomalyco/opencode) | 147,815 | [`v1.14.20`](https://github.com/anomalyco/opencode/releases/tag/v1.14.20) 新增 `GET /config`、修正 Windows plugin / tool 載入、把 remote workspace 的 permission reply 送回正確工作區；近期 commit 又補 [`session sdk errors logging`](https://github.com/anomalyco/opencode/commit/f8ff6f49abf7245953e53d894e5be53ada80ea4a) 與 [`LSP pull diagnostics`](https://github.com/anomalyco/opencode/commit/8cade05bc668a4889ddc359817eb50627cbd50cf) | 多工作區 agent 開始把設定可見度、診斷與權限路由當成核心能力 |
| [openclaw/openclaw](https://github.com/openclaw/openclaw) | 362,476 | [`v2026.4.21`](https://github.com/openclaw/openclaw/releases/tag/v2026.4.21) 補 packaged plugin runtime recovery、失敗 provider/model candidate logging；近期連續處理 [`Codex CLI auth import` 移除與相容](https://github.com/openclaw/openclaw/commit/6f6fa5c90b0dc296c3458fb916d91c24ed67f826) / [`fail fast` 路徑](https://github.com/openclaw/openclaw/commit/c71f07ba43baf813c8c3a3d22b44a5c2f6980fe2) | assistant 平台開始正面吸收跨工具 auth 演進與封裝安裝的維運成本 |

近 7 天新高星裡，最值得注意的不是又一批「超強 prompt collection」，而是 **交件型 repo 明顯變多**。

| Repo | 建立時間 | 星數 | 搶到的交件表面 |
|---|---|---:|---|
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | 2026-04-19 | 4,530 | HTML 原生高保真原型、動畫、PPTX、資訊圖 |
| [tw93/Kami](https://github.com/tw93/Kami) | 2026-04-20 | 2,579 | 正式文件、簡報、履歷、作品集等「紙面成品」 |
| [cathrynlavery/diagram-design](https://github.com/cathrynlavery/diagram-design) | 2026-04-16 | 1,610 | 品牌化 HTML + SVG 圖解 |
| [OpenCoworkAI/open-codesign](https://github.com/OpenCoworkAI/open-codesign) | 2026-04-18 | 1,289 | 本地桌面設計台，直接輸出 prototype / PDF / PPTX |

這個對照很有意思。

成熟層在整理 **誰可以核准、怎麼交接、設定能不能看、權限回覆會不會送錯地方**。新興層在整理 **最後那份東西能不能直接拿去給人看、給客戶看、給主管看、貼到網站上**。前者在補控制面，後者在搶成品面。

## 技術重點

### 1. 成熟 agent repo 這週都在補「可接手」而不是只補「可執行」

[Codex `0.123.0`](https://github.com/openai/codex/releases/tag/rust-v0.123.0) 最值得注意的，不只是多了一個 `amazon-bedrock` provider，而是它把幾個原本很容易藏在黑盒裡的部位拉出來：

- `/mcp verbose`：MCP server 診斷、resources、templates 不再只是一個模糊狀態
- plugin MCP 載入兼容 `mcpServers` 與 top-level server maps
- realtime handoff 改善，背景 agent 可以接 transcript delta
- 近期 commit 直接補 [`approve with strict review`](https://github.com/openai/codex/commit/5e71da14247f4d2dc2de1c0d71f9a1cac9de1a90)
- transport 層再往前走一步，補上 [`executor-backed RMCP HTTP client`](https://github.com/openai/codex/commit/0e78ce80eebbb08856e4a212ecd045ab42d72948)

這一串放在一起看，不是在做「更像助理」的表演，而是在處理真實團隊一定會碰到的幾個問題：

- 工具入口能不能查
- 審核能不能嚴格
- 任務交接會不會掉 context
- MCP / HTTP 傳輸會不會卡在灰色地帶

[Claude Code `v2.1.118`](https://github.com/anthropics/claude-code/releases/tag/v2.1.118) 也一樣，它這版亮點表面上很分散：visual mode、`/usage`、custom themes、hooks 可直接呼叫 MCP tools。實際上方向很一致：**把人類操作員留在回路裡，而且要留得舒服、留得清楚**。

這很重要。終端 agent 如果要真的成為日常工作環境，不可能只靠一句 prompt 後全自動。使用者要能：

- 看用量
- 看樣式與狀態
- 中途選取與編修
- 讓 hooks 直接串到工具層

也就是說，Claude Code 這類產品現在競爭的，已經不是「它能不能做」，而是「人類在旁邊接手時會不會痛苦」。

[OpenCode `v1.14.20`](https://github.com/anomalyco/opencode/releases/tag/v1.14.20) 給的訊號更偏系統工程。它補了 `GET /config`、修正 Windows 下 plugin / tool local dynamic import、把 remote workspace 的 permission replies 送回正確 workspace，又在後續 commit 補 session sdk errors logging 與 LSP pull diagnostics。

這些不是 demo feature，但每一個都很真：

- `GET /config` 讓外部系統或 UI 可以直接看 runtime 設定，不用猜
- permission reply 路由正確，才不會在多工作區或遠端情境裡把授權送錯地方
- LSP pull diagnostics 代表 agent 不只是改檔，還要接 IDE / language tooling 的真實診斷流
- session sdk errors logging 讓長時間執行不再只剩「怪怪的」

[OpenClaw `v2026.4.21`](https://github.com/openclaw/openclaw/releases/tag/v2026.4.21) 這次最有代表性的不是 flashy 新能力，而是維運層的摩擦處理：packaged install 的 plugin runtime dependencies 要能從 doctor 路徑修回來，failed provider / model candidates 要能被記錄，還有連續多筆 commit 在處理 Codex auth import choice 移除、保留與 fail-fast 邏輯。

這說明了一件事：**當 agent 平台開始真的被拿來混搭不同 provider、不同 CLI、不同安裝形態時，最麻煩的痛點往往不在模型，而在相容、升級與恢復路徑。**

這四個成熟 repo 放在一起看，我會把這週總結成一句話：

> **成熟 agent 正在把黑盒執行拆成審核、交接、設定、權限、傳輸、診斷幾個可接手的控制點。**

### 2. 近 7 天新高星最強的不是聊天體驗，而是「成品表面」

[Huashu Design](https://github.com/alchaincyf/huashu-design) 這週還是非常亮眼，但今天我更在意的是它的產物結構，而不是單一 demo。README 直接把交付物寫得很清楚：

- 高保真互動原型
- HTML slides + 可編輯 PPTX
- MP4 / GIF 動畫
- 印刷級資訊圖
- 5 維設計評審

最新 [`v2.0`](https://github.com/alchaincyf/huashu-design/releases/tag/v2.0) 又把大 GIF / MP4 從 repo 本體移到 release assets，保留 HTML 源碼在倉庫裡。這個做法很工程化，因為它不是只顧著把展示頁做漂亮，而是在顧：

- clone 體積
- 版本可讀性
- 產物與原始碼分層
- 可重建性

[Open CoDesign](https://github.com/OpenCoworkAI/open-codesign) 代表的是另一條很強的新路線：**本地桌面設計台**。它的主張不是「我有最強模型」，而是：

- 你的 prompt
- 你的 model
- 你的 laptop

README 裡最值得注意的，不只是 multi-model BYOK，而是它把「看 agent 工作」做成正面賣點：

- live agent activity
- visible tool calls
- interruptible generation
- local SQLite snapshots
- 可匯出 HTML / PDF / PPTX / ZIP / Markdown

這類產品抓到的是現在很多人對 AI 設計工具的不滿：輸出很炫，但雲端鎖定、不可中斷、不可追版本、不能沿用現有模型帳號。

[Diagram Design](https://github.com/cathrynlavery/diagram-design) 很有代表性，因為它把圖解工作從「隨便畫個框」拉回品牌與編輯品質。它主打：

- 14 種 editorial diagram types
- 自動讀網站色彩與字體
- 自成一體的 HTML + SVG
- 不靠 Figma、不靠 Mermaid 樣板味

這不是小事。很多 agent 生成的圖之所以一看就很 AI，不是內容錯，而是**圖像語言沒有跟產品語言對齊**。Diagram Design 直接把 brand onboarding 做進 skill，等於承認圖解不是附屬品，而是正式發佈物的一部分。

[Kami `V1.1.0`](https://github.com/tw93/Kami/releases/tag/V1.1.0) 則把另一種很常被忽略的成品拉回來：**文件本身**。它不是 UI kit，也不是網站 builder，而是 one-pager、long doc、formal letter、portfolio、resume、slides 這些真正會被寄出去、列印出來、拿去簡報的東西。

這版新增 browser preview，讓 10 種 template 可以直接在瀏覽器自動置中到 A4 寬；再加上內建 bar / line / donut SVG charts，整體方向很清楚：**內容生成之後，排版不該再退回很醜的預設文件。**

這幾個新星案子一起看，有個共通點很醒目：

> **開源市場開始把 prototype、diagram、deck、document 當成一級工作面，而不是聊天之後再手工補的尾端工作。**

### 3. HTML 正在變成跨原型、圖解、投影片、文件的共同承載層

今天這批新星 repo 幾乎都繞回同一個技術選擇：**HTML 作為可檢查、可版本化、可再輸出的中介格式**。

- Huashu Design 用 HTML 做 slides、原型，再轉可編輯 PPTX
- Diagram Design 直接輸出 self-contained HTML + SVG
- Kami 讓文件 HTML 在 browser 中對齊 A4 預覽
- Open CoDesign 把 HTML / PDF / PPTX / Markdown 都當成正常出口

這個方向比表面上看起來更重要，因為它回答了生成式產品最常見的落地問題：

- 東西能不能進 git
- 能不能 diff
- 能不能讓 agent 再改一次
- 能不能讓人手動補最後一刀
- 能不能跨平台重播與預覽

如果產物停在一張圖片、一段封閉 JSON、或一個只能在單一 SaaS 裡編的畫面，迭代就會很快卡死。HTML 的價值正在重新被發現，不是因為它新，而是因為它剛好卡在 **模型可理解、人類可檢查、工具可轉換** 的交會點。

### 4. 本地優先與可見執行，正在變成新一輪採用門檻

這週成熟與新興兩組資料其實都在往同一件事靠：**不要再讓 AI 在看不見的地方默默跑。**

成熟層在補：

- strict review approval
- realtime handoff
- `/usage`
- `GET /config`
- permission reply routing
- provider failure logging

新興層在補：

- visible tool calls
- interruptible generation
- local snapshots
- browser preview
- editable exports

這背後反映的是使用者心態已經變了。早期大家願意接受黑盒，只要結果「看起來有做事」就行。現在不夠了。只要 AI 真的進入工作流，人們就會要：

- 看到它做了什麼
- 知道它用哪個設定做
- 中途能打斷
- 必要時能接手
- 最後能把產物帶走

## 關鍵取捨

### 1. 控制點越完整，系統越能進真實工作流；但邊界 bug 也會一起變多

Codex 的 approval / handoff / transport、Claude Code 的 hooks / usage、OpenCode 的 config / routing、OpenClaw 的相容與 recovery，全部都在付同一筆工程稅：

- 狀態更多
- 路由更多
- 跨程序互動更多
- 邊界回歸更多

這筆稅不付，agent 只能留在 demo。付了之後，產品會更穩，但 release note 也會越來越像基礎設施維運紀錄，而不是華麗的新功能清單。

### 2. HTML-first 成品很好維護，但品質責任會變得更赤裸

用 HTML 做 prototype、diagram、slide、document 的好處很多；代價也很直接：

- 字型載入會露餡
- 列印與螢幕版面容易不一致
- PDF / PPTX 轉換容易掉細節
- 多語系與長文排版很容易破版

也就是說，這條路雖然可持續，但產品團隊要面對的不是「有沒有生成」，而是 **第 30 次輸出能不能仍然穩定**。

### 3. 本地優先降低鎖定，卻把相依與 OS 摩擦拉回自己身上

Open CoDesign、Kami、Huashu Design 這類案子都很吸引人，因為：

- 沒有強制雲端工作區
- 可以沿用自己的模型與金鑰
- 輸出檔案握在自己手上

但另一面也很現實：

- 本機環境不同，渲染與相依會不同
- 字型授權與安裝不再是平台單方面扛
- Electron / browser / ffmpeg / Playwright 類依賴很容易出現平台差異

local-first 不是沒有成本，只是把成本從訂閱費換成了環境治理與相依治理。

### 4. 跨工具 auth 與 permission 已經是成熟市場的真摩擦點

OpenClaw 連續處理 Codex auth import 路徑、Codex 補 strict review 與 MCP 載入兼容、OpenCode 修 permission reply routing，這些訊號拼起來其實是在說：

> **大家已經不再只用一套 agent。**

使用者會混用多個 CLI、provider、workspace、plugin、遠端工具。只要這個現實成立，auth import、permission routing、MCP config、handoff transcript 都會變成產品分水嶺。

## 對開發者影響

### 1. 評估 agent 工具時，不能再只看支援多少模型

接下來真正影響採用的，通常是這幾件事：

- approval 流程夠不夠細
- handoff 會不會掉脈絡
- config 能不能被看見
- permission reply 會不會送錯地方
- tool / MCP 診斷夠不夠完整

模型矩陣很重要，但對長期使用來說，**控制面品質通常比 model list 更影響留存**。

### 2. 產物型工作流會愈來愈吃香，聊天只是入口

這週新星最有力的地方，在於它們幾乎都不是純聊天產品，而是直接對應某種交件：

- prototype
- diagram
- deck
- document
- PDF / PPTX / HTML

對開發者來說，這代表規劃 AI 產品時，最好從「最後交出去的是什麼」往回設計，而不是先做 chat 再補 export。

### 3. 可編輯格式會比一次性圖像更有長期價值

如果你的工作流需要多輪修改、多人接手、版本管理、日後重用，那就要偏向：

- HTML
- SVG
- Markdown
- 真 PPTX
- 可重建 PDF pipeline

可再編輯的中介格式，會比一張精美截圖更值錢，因為它能接住下一輪人機協作。

### 4. 人機協作的最佳型態，會更像「agent 起草，人類審核與收尾」

成熟 repo 在補審核、交接與可見度；新星 repo 在補可直接交件的成品面。兩邊拼起來，最實際的工作模型其實很清楚：

- agent 先跑第一版
- 人類看進度與用量
- 中途能插手、能中斷、能指定修區塊
- 最後輸出可編輯成品

這種流程比全自動更慢一點，但比黑盒全自動更容易進入真實團隊。

## 後續觀察

### 1. approval / handoff / MCP / config 會不會逐步收斂成比較通用的控制語彙

如果 Codex、Claude Code、OpenCode、OpenClaw 這些工具在審核、交接、設定與診斷上慢慢收斂，整個生態會更容易互通。反過來，如果每家都維持自家術語與自家路由方式，切換成本只會繼續升高。

### 2. 成品型 skill 會不會分化成更細的垂直市場

現在已經看得到幾個方向：

- app / web prototype
- editorial diagram
- formal document
- slides / motion assets

接下來值得看的是，這些市場會不會再拆出更專門的子類別，例如投資備忘錄、IR 簡報、工程設計圖、品牌 launch 動畫。

### 3. local-first 設計工具能不能撐住跨平台與資產管線的現實考驗

Open CoDesign、Huashu Design、Kami 這類案子都很有吸引力，但接下來真正會決定留存的，很可能不是 demo，而是：

- 字型能不能穩
- 匯出能不能穩
- 資產與版本歷史能不能穩
- 不同作業系統的行為能不能穩

### 4. 「直接交件」會不會變成開源 AI 下一輪最重要的採用門檻

這週的資料讓我更相信一件事：很多人真正要的，不是再多一個會聊天的 agent，而是一個 **能在過程中讓你接手、最後把成品交到你手上** 的系統。

如果這個判斷成立，未來最值得追的 repo，不一定是最會說話的，而是最會把工作變成可審、可改、可交付成品的那一批。
