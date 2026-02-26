# Macro-Post Skill 安裝與執行報告

- Repo: `axxdeveloper/shooeugenesea.github.io`
- 產生時間: `2026-02-26 12:50:35 +0800` (Asia/Taipei)

## 1) 任務執行結果

✅ 已完成以下步驟：

1. Clone repo 到本機工作區  
   - 路徑：`/Users/openclaw-user/.openclaw/workspace/shooeugenesea.github.io`
2. 依 repo 規範執行 skill 同步腳本  
   - 指令：`./scripts/sync_macro_post_skill.sh`
3. 確認 `.codex/skills/macro-post/SKILL.md` 已存在

## 2) 安裝/同步驗證

- `AGENTS.md` 規範：每次進入此 repo 的 Codex session，先跑 `./scripts/sync_macro_post_skill.sh`
- Source of truth：`.claude/skills/macro-post/SKILL.md`
- Sync target：`.codex/skills/macro-post/SKILL.md`
- 同步腳本執行結果：`Synced macro-post skill to: .../.codex/skills/macro-post/SKILL.md`

> 註：來源與目標檔 SHA1 不同屬預期行為（同步腳本會正規化 frontmatter 的 `name/description` 格式）。

## 3) Skill 能力摘要（macro-post）

此 skill 用於生成**繁體中文總經/市場分析文章**，核心定位為「提供思考框架，不做預測或投資建議」。

### 兩種模式
- **Default mode**：依日期與新聞密度決定篇幅與篇數
  - 週一：長篇
  - 週二~週五：短篇（必要時升/降級）
  - 週末：快報（突發事件可升級）
- **Topic mode**：使用者指定單一題目，輸出 1 篇深度文

### 固定四段骨架
1. 開場（核心問題）
2. 因果拆解（主體）
3. 分水嶺（if/then 條件）
4. 結語（核心判斷 + 失效條件表）

### 強制品質機制（重點）
- 研究來源層級（Primary source 優先）
- Fact-check 步驟（含數據/時間點/圖表校驗）
- 禁用投資建議語句（如：加碼/減碼/買進/賣出）
- 必須附資料來源與免責聲明

## 4) 依 skill 產出的「示範報告框架」

以下是此 skill 最終輸出（文章）會遵循的品質檢查重點：

- 是否有唯一核心問題（以 `？` 結尾）
- 是否完整使用四段骨架
- 是否有 `> **核心判斷：**` 區塊
- 是否有失效條件表（Metric / Threshold / Window / Implication）
- 是否明確區分 ACTUAL vs ESTIMATE / PROJECTED
- 是否有可追溯來源連結與 Chart.js（長/短篇必須）

## 5) 目前狀態與下一步

目前 skill 已可用。  
若要我直接「依此 skill 生一篇正式文章」，請給我其中一種指令：

- `default mode`：`/macro-post`
- `topic mode`：例如「幫我寫一篇關於台灣半導體庫存循環的深度分析」

我就會依該 SKILL 規範流程，產出可放進 `_posts/` 的完整文章草稿。