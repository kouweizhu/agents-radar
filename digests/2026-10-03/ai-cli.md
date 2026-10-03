# AI CLI 工具社区动态日报 2026-10-03

> 生成时间: 2026-10-03 01:22 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

<think>The user wants me to translate the report to Simplified Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, code, identifiers as-is
4. Use natural technical Chinese register

Let me translate:</think>

# 跨工具对比报告：AI CLI 工具生态

## 1. 生态概览

2026 年末的 AI CLI 工具领域呈现出成熟 incumbents（Claude Code、Codex、Copilot CLI）与快速迭代的替代方案（Pi、Qwen Code）并存的竞争格局。所有主流平台都在向相似的架构主题收敛——可扩展的插件系统、会话持久化、token 治理——同时在平台优先级和目标开发者工作流上做出差异化。与 macOS/Linux 的对等体验相比，Windows 支持仍然是整个生态系统的持续短板。

---

## 2. 活跃度对比

| 工具 | 发布版本 (24h) | 热门 Issue | PR (24h) | Discussion | 备注 |
|------|----------------|------------|-----------|-------------|------|
| **Claude Code** | 1 | 10 | 1 | 0 | 活跃开发中；Issue 和 PR 均开放 |
| **OpenAI Codex** | 6 个 alpha | 10 | 10+ | 4 | 非常活跃；Ideas/General/Show&Tell/Q&A |
| **Gemini CLI** | 1 | 10 | 10 | 3 | 高度活跃；多渠道参与 |
| **Copilot CLI** | 3 个 patch | 10 | 1 | 0 | PR 较少；Issue 和 PR 均开放 |
| **OpenCode** | 0 | 10 | 10+ | 0 | 无发布；PR 活跃 |
| **Pi** | 0 | 10 | 18 | 3 | PR 最多；开发者参与度高 |
| **Qwen Code** | 1 | 10 | 10 | 0 | Nightly 驱动；Issue/PR 活跃 |

---

## 3. 共同特性方向

| 特性方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **可扩展性 / 插件系统** | Claude Code, Gemini CLI, Copilot CLI | Mods 框架 (Claude)、技能/子代理 (Gemini, Copilot)、MCP 服务器 (Copilot) |
| **Token / 上下文治理** | Claude Code, Codex, Gemini CLI, Qwen Code | 有界历史、输出截断、上下文窗口感知 |
| **会话持久化** | Gemini CLI, Qwen Code, Pi | 检查点、恢复、从中断会话恢复 |
| **Windows 平台对等** | Codex, Copilot CLI, Pi | 终端闪烁、WSL 集成、原生执行 |
| **UI/UX 优化** | 所有工具 | Diff 显示控制、键盘快捷键、语法高亮 |
| **代理可靠性** | Gemini CLI, Qwen Code, Claude Code | 挂起检测、中断处理、子代理恢复 |
| **BYOK / 模型灵活性** | Copilot CLI, OpenCode | 自定义 provider 支持、推理强度标志、定价层级 |

---

## 4. 差异化分析

| 工具 | 核心焦点 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | Mods 可扩展性、VS Code 体验对等 | 高级用户、追求深度定制的开发者 | Anthropic 优先、企业导向 |
| **OpenAI Codex** | Windows 稳定性、消息可靠性 | Windows 开发者、Codex Pro 用户 | Rust 构建、代理中心化 |
| **Gemini CLI** | 代理自主性、AST 感知导航 | 高级开发者、CLI 原生用户 | Google AI 技术栈、C++ 后端 |
| **Copilot CLI** | 技能、MCP 集成、权限管理 | GitHub 生态用户 | Microsoft 深度集成、技能优先 |
| **OpenCode** | 模型多样性、会话连续性 | 成本敏感用户、多模型用户 | 开源权重优先、BYOK 优先 |
| **Pi** | TUI 性能、内存优化 | 终端重度用户 | Rust + TypeScript、性能优先 |
| **Qwen Code** | 托管代理、工作区绑定 | 企业团队、工作区为中心的企业 | 双路径架构、分阶段交付 |

---

## 5. 社区活跃度与成熟度

**最活跃（按 PR 量）：** Pi（18 个 PR）、Gemini CLI（10 个 PR）、OpenAI Codex（10 个 PR）

**Issue 参与度最高：** Claude Code（#91870：237 条评论）、Copilot CLI（#4438：11 条评论）、Pi（#7547：72 条评论）

**快速迭代：** Gemini CLI 和 Pi 每天发布包含大量变更的 nightly 版本；OpenAI Codex 每日推送 alpha 发布

**成熟/稳定：** GitHub Copilot CLI（PR 较少、以 patch 为主）—— 可能处于维护模式或优先保障稳定性

**增长中：** Qwen Code（nightly 驱动、托管代理架构正在积极开发）；OpenCode（近期 v0.64.0）

---

## 6. 趋势信号

1. **可扩展性作为竞争护城河** — Claude Code 的 Mods 框架（#91870，237 条评论）标志着从纯模型质量向生态锁定的转变。预计其他工具将加速插件/技能 API 的开发。

2. **Token 经济成为一等公民** — 多个工具（Claude、Codex、 Gemini、Qwen）现在明确追踪非对话上下文（系统提示、工具 schema、技能列表）的治理。这反映了百万级 token 上下文时代的到来。

3. **Windows 成为新战场** — Codex、Copilot、Pi 和 Claude Code 超过 60% 的热门 Issue 涉及 Windows 特定 bug。摩擦最多的平台也是社区信任建立或流失的地方。

4. **会话状态成为差异化要素** — Gemini CLI、Qwen Code 和 Pi 都在积极开发持久化会话、检查点和恢复能力。这直接解决了开发者最大的痛点：中断后丢失工作。

5. **OAuth/Auth 可靠性危机** — Copilot CLI（#10258）、Pi（#10300）和 OpenCode（#45278）都有高评论量的认证问题。这表明随着 providers 从 API 密钥转向 OAuth 流程，出现了系统性挑战。

6. **MCP 服务器生态成长** — Copilot CLI 和 Gemini CLI 都将 MCP 配置作为热门话题（#4832、#5040），表明 Model Context Protocol 正在成为标准集成点。

---

*本报告基于 2026 年 10 月 3 日社区摘要数据，涵盖 7 款 AI CLI 工具。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the Claude Code Skills Community Highlights Report from English to Chinese. I need to:

1. Translate all text content (headings, descriptions, etc.)
2. Keep all Markdown structure exactly as-is
3. Preserve URLs, numbers, issue/PR references, code references, etc.
4. Use natural technical Chinese suitable for a developer newsletter

Let me go through and translate:

- "Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区亮点报告"
- "Data as of October 3, 2026" → "数据截至 2026 年 10 月 3 日"
- "Top Skills Ranking" → "热门 Skills 排行"
- "All listed PRs have undefined comment counts in the provided dataset" → "在提供的数据集中，所有列出的 PR 评论数均为 undefined"
- "The following represent the most notable recent skill contributions" → "以下为近期最值得关注的 Skill 贡献"
- "Status" → "状态"
- "Community Demand Trends" → "社区需求趋势"
- "The Issues section reveals clear demand signals" → "Issue 区呈现出清晰的需求信号"
- "Theme" → "主题"
- "Trust & Security" → "信任与安全"
- "Collaboration" → "协作"
- "Developer Experience" → "开发者体验"
- "Data Persistence" → "数据持久化"
- "Key Demand Themes:" → "核心需求主题："
- "High-Potential Pending Skills" → "高潜力待合并 Skills"
- "Focus Area" → "聚焦领域"
- "Notable Aspect" → "亮点"
- "Skills Ecosystem Insight" → "Skills 生态洞察"
- "The community's most concentrated demand is for enterprise-grade security controls and organizational collaboration features" → "社区最集中的需求是企业级安全控制和协作功能"


- "specifically addressing trust boundary risks in skill distribution and enabling team-wide skill sharing" → "具体体现在解决技能分发中的信任边界风险，以及支持团队层面的技能共享"
- "while simultaneously expanding into specialized vertical domains" → "同时向专业化垂直领域拓展"
- "like Web3, HPC, and automated testing" → "如 Web3、高性能计算和自动化测试"

- "Report generated from GitHub PR/Issue data (anthropics/skills, October 2026)" → "报告数据来源于 GitHub PR/Issue (anthropics/skills, 2026 年 10 月)"
- "All PRs remain OPEN in this snapshot" → "本快照中所有 PR 状态均为 OPEN"

- "Skills" should remain as "Skills" or "skill" → "Skills" 或 "Skill"

Let me format the translation now:</think>

# Claude Code Skills 社区亮点报告

**数据截至 2026 年 10 月 3 日**

---

## 1. 热门 Skills 排行

在提供的数据集中，所有列出的 PR 评论数均为 **undefined**。以下为近期最值得关注的 Skill 贡献，按活跃度、新近度和功能重要性排序：

| # | PR | 作者 | 描述 | 状态 |
|---|-----|--------|-------------|--------|
| 1 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | ProofCore-Protocol | 面向 Web3 开发者的 Agent Skill，提供 Solidity/Rust 智能合约自动化静态分析，使用零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | OPEN |
| 2 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 70v-Yoyo | 零成本 Skill，将 Markdown 文档编译为专业 MP4 视频，配合 Marp 生成逼真人声旁白 | OPEN |
| 3 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | ksgisang | 开源 E2E 测试 Skill，赋予 Claude 视觉和浏览器控制能力；支持零代码测试生成 | OPEN |
| 4 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation | mrdesouzaphd-cmyk | 将产品/技术规格转换为 Claude Code 可执行的 Notion 任务，包含验收标准和进度追踪 | OPEN |
| 5 | **[#1615](https://github.com/anthropics/skills/pull/1615)** - scnet-hpc | lql341 | 操作 SCNet HPC 集群的 Skill，基于配置文件实现 SSH 和 Slurm 工作流，支持作业生成和集群发现 | OPEN |
| 6 | **[#723](https://github.com/anthropics/skills/pull/723)** - testing-patterns | 4444J99 | 全栈测试 Skill，涵盖测试金字塔、AAA 模式、使用 Testing Library 的 React 组件测试 | OPEN |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** - pyxel | kitao | 使用 Pyxel 框架创建、调试和验证复古 Python 游戏的 Skill | OPEN |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** - skill-quality-analyzer & skill-security-analyzer | eovidiu | 元 Skill，从结构、文档、安全和性能维度评估 Claude Skills | OPEN |

---

## 2. 社区需求趋势

Issue 区呈现出清晰的需求信号：

| Issue | 评论数 | 主题 |
|-------|----------|-------|
| **[#492](https://github.com/anthropics/skills/issues/492)** - 安全：社区 Skills 冒充官方 Skills | **43** | **信任与安全** — 社区 Skills 使用 `anthropic/` 命名空间造成信任边界漏洞 |
| **[#228](https://github.com/anthropics/skills/issues/228)** - 启用组织级技能共享 | **16** | **协作** — 期望在组织内共享 Skill 库 |
| **[#556](https://github.com/anthropics/skills/issues/556)** - run_eval.py 触发率为 0% | **12** | **开发者体验** — Skill 触发机制在评估脚本中失效 |
| **[#62](https://github.com/anthropics/skills/issues/62)** - 我的 Skills 全部消失了 | **10** | **数据持久化** — 用户意外丢失 Skill 文件 |

**核心需求主题：**
- **安全与信任**：身份验证、命名空间管控、权限边界
- **企业协作**：组织级技能共享、集中化管理
- **开发者体验**：可靠的 Skill 触发、评估工具修复
- **工作流自动化**：HPC 集成、测试模式、端到端自动化

---

## 3. 高潜力待合并 Skills

以下活跃 PR 代表了尚待合并的重要贡献：

| PR | 聚焦领域 | 亮点 |
|----|------------|----------------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | Web3/智能合约 | 区块链审计自动化先行者 |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | 内容创作 | 零成本 Markdown 转视频 |
| **[#822](https://github.com/anthropics/skills/pull/822)** | E2E 测试 | 视觉驱动的浏览器自动化 |
| **[#723](https://github.com/anthropics/skills/pull/723)** | 测试 | 全面的测试方法论覆盖 |

此外，**[#1298](https://github.com/anthropics/skills/pull/1298)**（skill-creator 修复）和 **[#1742](https://github.com/anthropics/skills/pull/1742)**（MCP v2 兼容）解决了关键基础设施问题。

---

## 4. Skills 生态洞察

> **社区最集中的需求是企业级安全控制和协作功能——具体体现在解决技能分发中的信任边界风险，以及支持团队层面的技能共享——同时向专业化垂直领域拓展，如 Web3、高性能计算和自动化测试。**

---

*报告数据来源于 GitHub PR/Issue (anthropics/skills, 2026 年 10 月)。本快照中所有 PR 状态均为 OPEN。*

---

<think>The user wants me to translate the Claude Code Community Digest from English to Chinese. Let me analyze the content and translate it while:

1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Preserving URLs, code references, issue numbers
3. Using natural technical Chinese for developers
4. Keeping the same tone and style

Let me translate section by section:

## Today's Highlights -> 今日焦点

The community is actively engaging with the new **Mods extensibility framework** (#91870), which continues to dominate discussions with 237 comments. Meanwhile, a significant bug report (#29579) about rate limiting despite Claude Max subscription has surfaced, affecting users on Windows/VSCode. Version **v2.1.288** shipped with `$.ui.selection()` for mods and a built-in `gh api` for cloud sessions.

社区正在积极参与新的 **Mods 扩展框架**（#91870）讨论，相关讨论持续火热，已积累 237 条评论。同时，一个严重的 bug 报告（#29579）引发关注：尽管订阅了 Claude Max，Windows/VSCode 用户仍遭遇速率限制。版本 **v2.1.288** 新增了用于 mods 的 `$.ui.selection()` 以及云会话的内置 `gh api` 命令。

---

## Releases -> 发布

**v2.1.288** — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.288)

- Added **`$.ui.selection()`** for mods: returns the last selected text in fullscreen mode, or the transcript row if selection lies within one
- Added built-in **`gh api`** command to cloud sessions whose image lacks GitHub CLI
- Fixed built-in sending control character

- 新增 **`$.ui.selection()`** 用于 mods：在全屏模式下返回最后选中的文本，如果选中内容位于某行转录内，则返回该行
- 新增内置 **`gh api`** 命令，用于镜像中缺少 GitHub CLI 的云会话


- 修复了内置命令发送控制字符的问题

---

## Hot Issues -> 热门 issue

| # | Issue | Why It Matters | Reaction |
|---|-------|----------------|----------|
| **#91870** | **[Enhancement] Mods - make Claude 10x more extensible** | The flagship extensibility feature is under active development; community is providing heavy feedback on the design | 237 comments, 130 👍 |
| **#29579** | **[BUG] API Error: Rate limit reached despite Claude Max subscription (16% usage)** | Windows/VSCode users with paid Max plans hitting unexplained rate limits—a critical auth/billing issue | 153 comments, 94 👍 |
| **#33932** | **[FEATURE] VS Code Extension: Diff review UI similar to GitHub Copilot Edits Review** | Highly requested VS Code parity feature; 201 upvotes makes it one of the most desired enhancements | 39 comments, 201 👍 |
| **#37951** | **Option to hide inline diffs for Edit/Write tool output** | Users want control over verbosity during file edits; affects daily workflow | 27 comments, 99 👍 |
| **#15148** | **[BUG] LSP plugin lspServers config not being processed from marketplace.json** | LSP plugins (typescript-lsp, pyright-lsp, gopls-lsp) installed but non-functional—blocks developer tooling | 23 comments, 73 👍 |
| **#90450** | **[BUG] Auto Mode's Bash-first instruction silently disables nested CLAUDE.md and path-scoped rules** | Auto Mode unexpectedly breaks configuration inheritance—a subtle but impactful regression | 18 comments, 48 👍 |
| **#87971** | **[BUG] Claude abuses bash tools for reads, writes, and edits when running in Auto Mode** | Auto Mode using inefficient tooling; 90 upvotes indicate broad impact | 16 comments, 90 👍 |
| **#43255** | **[BUG] Claude in Chrome MCP tools: "Navigation to this domain is not allowed" on all domains** | Chrome MCP integration completely broken; affects browser automation workflows | 22 comments, 13 👍 |
| **#88747** | **Worktree creation writes ABSOLUTE core.hooksPath, causing main repo hooks to run** | Git worktree isolation broken—hook execution leaks across repositories | 17 comments, 1 👍 |
| **#48511** | **Desktop app: session history lost when switching accounts** | **[CLOSED]** Cross-account session persistence issue affecting Claude Desktop users | 8 comments, 12 👍 |

---

## Key PR Progress -> 关键 PR 进展

| PR | Description |
|----|-------------|
| **#97293** | **mods: process.run truncation flags & list entries' mtimeMs** — Updates mod declarations to include `isStdoutTruncated`/`isStderrTruncated` on `$.process.run` results and `mtimeMs` on `$.fs.list` entries. The test fakes now validate these fields. |

---

## Feature Request Trends -> 功能需求趋势

1. **Enhanced Extensibility (Mods)** — Community heavily invested in the new Mods system; requests for more hooks, APIs, and plugin lifecycle control
2. **VS Code Parity** — Diff review UI, prompt suggestions, shell integration all requested to match Copilot features
3. **UI/UX Customization** — Hide inline diffs, text selection in mobile app, collapsible prompt bands
4. **Platform-Specific Features** — Mobile text copy, Windows terminal integration, Linux clipboard fixes
5. **Developer Tooling** — LSP configuration reliability, worktree isolation improvements, Chrome MCP tools

---

## Developer Pain Points -> 开发者痛点

- **Subscription/Auth Confusion**: Rate limits hitting despite Max subscription (#29579); Apple Max subscription misidentified as Pro (#98134)
- **Cross-Platform Inconsistency**: Bugs heavily weighted toward Windows and macOS—terminal integration, shell spawning, clipboard handling
- **Configuration Inheritance Failures**: Auto Mode silently disabling nested CLAUDE.md (#90450), path-scoped rules ignored
- **Session Management**: History lost on account switch (#48511); large transcripts (>2 GiB) crash VS Code (#99088)
- **Plugin Ecosystem**: LSP server configs not loading (#15148); built-in plugin tips reference unavailable plugins (#99071)
- **Network Resilience**: Linux users face 184-second hangs on network changes (#98184)

---

*Digest generated from GitHub data — [claude-code repo](https://github.com/anthropics/claude-code)*

---

The PR introduces truncation flags for process.run and timestamps for list entries, enabling mods to report when outputs exceed buffer limits and track file modification times. Developers are pushing for deeper extensibility through hooks and lifecycle controls, while requesting VS Code feature parity around diff review and shell integration. Cross-platform inconsistencies persist—particularly on Windows and macOS with terminal and clipboard operations—plus subscription confusion where rate limits trigger despite Max plans and Apple subscriptions get misclassified. Session history disappears when switching accounts, and large transcripts crash the VS Code extension. Network reliability issues on Linux cause significant delays during connectivity changes.</think>

# Claude Code 社区简报 — 2026年10月3日

## 今日焦点

社区正在积极参与新的 **Mods 扩展框架**（#91870）讨论，相关讨论持续火热，已积累 237 条评论。同时，一个严重的 bug 报告（#29579）引发关注：尽管订阅了 Claude Max，Windows/VSCode 用户仍遭遇速率限制。版本 **v2.1.288** 新增了用于 mods 的 `$.ui.selection()` 以及云会话的内置 `gh api` 命令。

---

## 发布

**v2.1.288** — [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.288)

- 新增 **`$.ui.selection()`** 用于 mods：在全屏模式下返回最后选中的文本，如果选中内容位于某行转录内，则返回该行
- 新增内置 **`gh api`** 命令，用于镜像中缺少 GitHub CLI 的云会话
- 修复了内置命令发送控制字符的问题

---

## 热门 Issue

| # | Issue | 重要性 | 反馈 |
|---|-------|--------|------|
| **#91870** | **[增强] Mods - 让 Claude 扩展性提升 10 倍** | 旗舰级扩展功能正在积极开发中；社区提供了大量设计反馈 | 237 条评论，130 👍 |
| **#29579** | **[BUG] API 错误：尽管订阅 Claude Max 仍达到速率限制（仅使用 16%）** | 付费 Max 套餐的 Windows/VSCode 用户遭遇莫名速率限制——关键的身份验证/计费问题 | 153 条评论，94 👍 |
| **#33932** | **[功能] VS Code 扩展：类似 GitHub Copilot Edits Review 的 Diff 审查 UI** | 高度需求的 VS Code 持平功能；201 票使其成为最受欢迎的功能之一 | 39 条评论，201 👍 |
| **#37951** | **隐藏 Edit/Write 工具输出内联 Diff 的选项** | 用户希望在文件编辑时控制详细程度；影响日常工作流 | 27 条评论，99 👍 |
| **#15148** | **[BUG] LSP 插件的 lspServers 配置未从 marketplace.json 加载** | LSP 插件（typescript-lsp、pyright-lsp、gopls-lsp）已安装但无法使用——阻塞开发者工具链 | 23 条评论，73 👍 |
| **#90450** | **[BUG] Auto Mode 的 Bash 优先指令静默禁用嵌套 CLAUDE.md 和路径级规则** | Auto Mode 意外破坏配置继承——一个微妙但影响深远的回归 | 18 条评论，48 👍 |
| **#87971** | **[BUG] Claude 在 Auto Mode 下滥用 bash 工具进行读、写、编辑操作** | Auto Mode 使用低效的工具；90 票表明影响广泛 | 16 条评论，90 👍 |
| **#43255** | **[BUG] Chrome MCP 工具中的 Claude："导航到此域名不允许"（所有域名）** | Chrome MCP 集成完全损坏；影响浏览器自动化工作流 | 22 条评论，13 👍 |
| **#88747** | **Worktree 创建写入绝对路径 core.hooksPath，导致主仓库钩子运行** | Git worktree 隔离失效——钩子执行跨仓库泄漏 | 17 条评论，1 👍 |
| **#48511** | **桌面应用：切换账户时会话历史丢失** | **[已关闭]** 跨账户会话持久化问题，影响 Claude Desktop 用户 | 8 条评论，12 👍 |

---

## 关键 PR 进展

| PR | 描述 |
|----|------|
| **#97293** | **mods: process.run 截断标志和列表条目的 mtimeMs** — 更新 mod 声明以包含 `$.process.run` 结果中的 `isStdoutTruncated`/`isStderrTruncated` 以及 `$.fs.list` 条目中的 `mtimeMs`。测试 mock 现在会验证这些字段。 |

---

## 功能需求趋势

1. **增强扩展性（Mods）** — 社区高度投入新的 Mods 系统；请求更多钩子、API 和插件生命周期控制
2. **VS Code 持平** — Diff 审查 UI、提示建议、Shell 集成均请求与 Copilot 功能对齐
3. **UI/UX 定制化** — 隐藏内联 Diff、移动端文本选择、可折叠提示栏
4. **平台特定功能** — 移动端文本复制、Windows 终端集成、Linux 剪贴板修复
5. **开发者工具** — LSP 配置可靠性、worktree 隔离改进、Chrome MCP 工具

---

## 开发者痛点

- **订阅/身份验证混乱**：尽管订阅 Max 仍触发速率限制（#29579）；Apple Max 订阅被误识别为 Pro（#98134）
- **跨平台不一致**：Bug 集中于 Windows 和 macOS——终端集成、Shell 启动、剪贴板处理
- **配置继承失效**：Auto Mode 静默禁用嵌套 CLAUDE.md（#90450），路径级规则被忽略
- **会话管理**：切换账户时历史丢失（#48511）；大型转录（>2 GiB）导致 VS Code 崩溃（#99088）
- **插件生态**：LSP 服务器配置未加载（#15148）；内置插件提示引用不存在的插件（#99071）
- **网络韧性**：Linux 用户在网络变化时卡顿 184 秒（#98184）

---

*简报基于 GitHub 数据生成 — [claude-code 仓库](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following the detailed translation rules provided. Let me carefully translate while preserving the structure, URLs, code references, numbers, etc.

Key points:
- Only output the translation, no preamble
- Preserve markdown structure exactly
- Keep URLs, numbers, issue/PR numbers, usernames, version tags, file paths as-is
- Use natural technical Chinese register
- Keep tables, headings, lists, etc.

Let me translate section by section:

## Today's Highlights
Past 24 hours = 过去24小时
stability and developer experience = 稳定性和开发者体验
infrastructure PRs = 基础架构PR
Windows sandbox = Windows沙箱
MCP result handling = MCP结果处理
rollout persistence = 发布持久化
platform-specific pain points = 平台特定痛点
message queuing = 消息队列
terminal real estate = 终端空间

## Releases
Rust SDK alpha releases = Rust SDK alpha版本
incremental iterations = 增量迭代
changelog = 更新日志

## Hot Issues
Let me translate each issue title carefully:

#49458 - Windows dot-started local tasks lack Computer Use tools
- Windows下以点号启动的本地任务缺少Computer Use工具

#49731 - WSL agent mode: "Failed to create unified exec process"
- WSL代理模式："Failed to create unified exec process"

#49968 - VS Code extension follow-up prompt stuck in queue
- VS Code扩展：后续提示卡在队列中

#49834 - Undefined internal fetch response causes JSON parse error
- 未定义的内部fetch响应导致JSON解析错误

#49988 - Code extension intermittently drops submitted messages
- Code扩展间歇性丢失已提交的消息

#48938 - Repeated renderer crashes, white-screen reloads, severe input lag


- 重复的渲染器崩溃、白屏重载、严重输入延迟

#24550 - WebSocket falls back with large inline images
- WebSocket在大型内联图片时回退

#48946 - Persistent startup spinner
- 启动加载动画持续显示

#49264 - CLI flashes Windows Terminal window for every command
- CLI每次执行命令都会闪烁Windows Terminal窗口

#50403 - Queued messages silently fail to send
- 队列中的消息静默发送失败

I'll focus on the key technical insights from these issues. The problems span multiple areas: startup reliability, WebSocket handling with large assets, command-line interface interactions, and message transmission. Each issue represents a nuanced technical challenge affecting system stability and user experience. The recurring themes suggest underlying architectural complexities in handling asynchronous operations, rendering processes, and cross-platform compatibility.

The translations reveal deep system integration challenges across different components. Message queuing, rendering, and execution modes show interconnected performance bottlenecks. Critical issues like renderer crashes and message delivery failures indicate potential systemic reliability problems.

Some key observations:
- Rendering and input systems are particularly fragile
- Network and communication layers have significant robustness gaps
- Windows platform interactions need more rigorous testing
- Asynchronous operations require more defensive programming approaches

The technical landscape demands comprehensive architectural improvements to enhance system resilience and user experience.</think>

# OpenAI Codex 社区摘要 — 2026-10-03

## 今日要闻

过去24小时内，重点集中在稳定性和开发者体验：多个Rust alpha版本（v0.162.0-alpha.2到alpha.8）相继发布，同时有一波基础架构PR解决了Windows沙箱管理、MCP结果处理和发布持久化等问题。然而，与Windows相关的问题占据了热榜——尤其是VS Code扩展消息队列和CLI终端行为方面——表明平台特定问题仍在持续。社区讨论显示对动态模型编排和更充分的终端空间利用有很大需求。

---

## 版本发布

**Rust SDK alpha版本** — 过去24小时内陆续发布了 `v0.162.0-alpha.2` 到 `v0.162.0-alpha.8`。这些看起来是即将发布的v0.162.0版本的增量迭代，可能包含内部改进和错误修复。发布说明中未提供变更日志细节。跟踪进度请访问 [github.com/openai/codex/releases](https://github.com/openai/codex/releases)。

---

## 热门问题

| # | 问题 | 为何重要 | 反馈 |
|---|-------|----------|------|
| **#49458** | **[Windows] dot-started local tasks lack Computer Use tools** — 31评论 | 在Windows上通过点号启动本地Codex任务的用户报告Computer Use（CUA）工具不可用，而不使用点号前缀的相同会话则正常工作。这破坏了Windows用户的关键自动化工作流。 | 👍 14 |
| **#49731** | **WSL代理模式："Failed to create unified exec process"** — 18评论 | 使用Codex WSL集成的Windows用户在每个命令上都因缺少辅助程序目录而失败——可能是app-server守护进程的回归问题。对将WSL作为主要开发环境的用户影响很大。 | 👍 9 |
| **#49968** | **[VS Code] 重启后后续提示卡在队列中** — 17评论 | VS Code扩展在重启后重新执行之前的提示，同时新提示卡住。严重影响工作流连续性。 | 👍 17 |
| **#49834** | **未定义的内部fetch响应导致JSON解析错误** — 16评论 | VS Code扩展内部fetch链中未定义的响应在释放排队消息发送锁时触发JSON解析失败。导致消息发送间歇性失败。 | 👍 2 |
| **#49988** | **Code扩展间歇性丢失已提交的消息** — 14评论 | 按Enter键经常清除输入框但不提交消息。用户需要重试多次。高摩擦的UX问题，影响日常工作效率。 | 👍 17 |
| **#48938** | **重复的渲染器崩溃、白屏重载、严重输入延迟** — 14评论 | Windows上最近更新后的严重性能回归，导致渲染器崩溃和输入延迟。影响付费Pro用户；有人报告无法工作。 | 👍 2 |
| **#24550** | **WebSocket在大型内联图片时回退** — 14评论 | 包含内联图片的长时间运行的CLI会话导致WebSocket回退，降低实时响应能力。会话持久性问题。 | 👍 2 |
| **#48946** | **启动加载动画持续 — app_start超时** — 12评论 | Windows应用在认证/渲染器就绪后卡在加载动画上。重装和修复无效，表明是更深层的配置或状态问题。 | 👍 1 |
| **#49264** | **CLI每次执行命令都闪烁Windows Terminal窗口** — 10评论 | 一个回归问题，CLI为每个代理命令弹出一个可见的Windows Terminal窗口——对用户工作流造成极大干扰。 | 👍 6 |
| **#50403** | **排队的消息静默发送失败 — "Failed to release queued message send lock"** — 6评论 | Windows VS Code扩展用户看到消息排队但从不发送，JSON语法错误提示"undefined"。是#49834根本原因的另一个表现。 | 👍 0 |

**完整问题列表：** [github.com/openai/codex/issues](https://github.com/openai/codex/issues)

---

## 关键PR进展

| # | PR | 摘要 |
|---|-----|---------|
| **#50480** | **Skip managed config loading for registered Windows sandbox refreshes** — OPEN | 通过在仅为注册刷新沙箱时跳过云策略获取，优化Windows沙箱配置。 |
| **#50477** | **Use the app-server default output cap for TUI workspace commands** — CLOSED | 从`WorkspaceCommand`中移除硬编码的64 KiB输出上限，让有边界的命令使用app-server默认值。 |
| **#50472** | **Enable Ultrafast service tiers for Amazon Bedrock Astra models** — CLOSED | 修复了阻止用户在Bedrock托管的Astra模型上选择`ultrafast`层的目录元数据问题。 |
| **#50470** | **Account for JSON overhead when truncating MCP tool results** — CLOSED | 确保截断时考虑JSON转义和包装开销，而不仅仅是原始预览文本。 |
| **#50467** | **Copy transcript selections as literal text while preserving rich HTML** — CLOSED | 修复剪贴板行为，使选择粗体文本时粘贴为纯文本`hello`，而不是`**hello**`。 |
| **#50465** | **Retry registry authentication outages and jitter executor reconnects** — CLOSED | 通过更智能的重试/退避逻辑，提高远程执行器对认证服务中断的韧性。 |
| **#50464** | **Add the `incremental_tools` feature flag** — CLOSED | 注册一个新的开发中功能标志，用于增量工具处理，在配置模式中暴露。 |
| **#50462** | **Populate thread previews from delegated task inputs** — CLOSED | 通过从委托（非用户）任务输入中提取预览，提高线程可发现性。 |
| **#50459** | **Add capability overrides for custom model providers** — CLOSED | 允许Responses兼容的提供商按提供商配置实时网络访问和远程压缩。 |
| **#50437** | **Add a CLI command to uninstall the legacy Windows sandbox** — CLOSED | 新的`codex sandbox uninstall`命令，用于清理旧Windows沙箱账户和网络规则。 |

**完整PR列表：** [github.com/openai/codex/pulls](https://github.com/openai/codex/pulls)

---

## 热门讨论

### 想法
- **#49977** — [Dynamic model and reasoning orchestration in Codex/Work](https://github.com/openai/codex/discussions/49977) — 用户提议从静态模型选择转向任务期间的动态运行时模型和推理级别编排。 👍 1

### 常规
- **#49129** — [Codex CLI 全屏显示](https://github.com/openai/codex/discussions/49129) — 最新的CLI版本现在使用完整终端窗口，启用可展开的差异、固定输入框和选择性复制。 👍 4

### 展示
- **#50222** — [Windows版QuotaCrew for Codex — 带配额跟踪的账户管理器](https://github.com/openai/codex/discussions/50222) — 一个第三方工具，用于Windows管理Codex账户配额和自动切换。 👍 1

### 问答
- **#50235** — [Dot聊天显示已读回执但卡在加载中不回复](https://github.com/openai/codex/discussions/50235) — Dot显示已发送/已读状态但从不产生回复；社区正在排查。 👍 1

---

## 功能请求趋势

从问题和建议中可以看出以下主题：

1. **Windows平台一致性** — 多个问题提到Windows特定回归（终端闪烁、WSL执行失败、启动卡住）。社区明显希望Windows能匹配macOS/Linux的稳定性。
2. **消息/队列可靠性** — 一系列问题（#49968、#49834、#49988、#50403）指向VS Code扩展中脆弱的消息队列。用户需要保证交付。
3. **动态模型编排** — 讨论#49977请求运行时模型/推理级别切换，而不仅是会话开始时的静态配置。
4. **改进的TUI/CLI体验** — 对vim键绑定（#33296）、全屏终端利用（#49129）和剪贴板改进（#50467）的请求表明开发者想要更精致的终端体验。
5. **Dot/代理可靠性** — Dot任务协调（#50077、#50157）和安全暂停状态同步（#49873）周围的问题表明自主代理工作流需要加强。

---

## 开发者痛点

- **VS Code扩展不稳定** — 消息丢失、队列卡住和JSON解析错误是报告最多的摩擦点。消息静默失败时用户会丢失工作。
- **Windows CLI回归** — 终端闪烁（#49264）和WSL执行失败（#49731）直接干扰日常开发工作流。
- **Windows性能回归** — 渲染器崩溃和输入延迟（#48938）使应用对高级用户无法使用。
- **会话连续性** — 线程分离（#36548）和长时间运行会话中工具消失（#26354）打破了持久工作区的心理模型。
- **图片/文件处理** — 图片上传访问被拒绝错误（#49422）和内联图片时WebSocket降级（#24550）指向资源处理缺口。

---

*摘要基于2026-10-03的GitHub数据生成。所有链接指向公开的openai/codex仓库。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English GitHub digest into Chinese (Simplified Chinese), following specific rules about how to handle technical terms, formatting, and structure. Let me translate this carefully.

Key points to remember:
1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

Title: "Gemini CLI Community Digest" → "Gemini CLI 社区动态"

Date: "2026-10-03" stays as-is
Source: "github.com/google-gemini/gemini-cli" stays as-is

Section 1: Today's Highlights
- The v0.64.0-nightly release introduces critical stability improvements: append-only delta patching for chat history and atomic state persistence with corruption recovery.
- The community is actively addressing agent reliability—multiple P1 issues around subagent hangs, browser agent failures, and session recovery are under active development.
- Performance optimizations for ignore filtering and file discovery are progressing, targeting multi-second blocking delays in large repositories.

Section 2: Releases
- "fix(core):" → "修复(核心):" or keep as fix(core): since it's code terminology
- "fix(cli):" → keep as fix(cli): since it's code terminology

Section 3: Hot Issues - translate the summaries but keep the structure

Section 4: Key PR Progress - translate the summaries but keep the structure


I'll continue translating the remaining sections, focusing on maintaining the technical context and precise translation of specialized terms.

I notice the document discusses various feature request trends in agent development. The key areas include AST-aware code navigation, enhanced subagent capabilities, and improved tool invocation. Developers are particularly concerned about agent reliability and managing context complexity. The text highlights critical challenges like token bloat and potential destructive behaviors in AI systems.

The technical document emphasizes the need for robust session management, addressing issues of data loss and configuration inconsistencies. It provides a comprehensive overview of development pain points, featuring key PR links like #29597 and #29618 for reference.</think>

# Gemini CLI 社区动态

**日期：** 2026-10-03
**来源：** github.com/google-gemini/gemini-cli

---

## 1. 今日要闻

v0.64.0-nightly 版本带来了关键稳定性改进：聊天历史采用追加式增量修补，并实现了带损坏恢复的原子状态持久化。社区正在积极解决代理可靠性问题——多个 P1 级别的子代理挂起、浏览器代理失败和会话恢复问题正在开发中。ignore 过滤和文件发现的性能优化正在推进，目标是解决大型仓库中的多秒级阻塞延迟。

---

## 2. 版本发布

**v0.64.0-nightly.20261002.gc9096a847**

- **修复(核心):** 在 ChatRecordingService 中实现追加式增量修补和有界历史窗口管理 ([#29568](https://github.com/google-gemini/gemini-cli/pull/29568))
- **修复(CLI):** 原子化持久化状态，并在损坏时从备份恢复

---

## 3. 热门 issue

| Issue | 优先级 | 评论数 | 概要 |
|-------|----------|----------|---------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 13 | **MAX_TURNS 后子代理恢复被报告为 GOAL 成功** — `codebase_investigator` 子代理即使达到最大轮次限制也错误报告成功状态，隐藏了真实的中断信息。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | **零依赖操作系统沙箱与执行后意图路由** — 提案利用 Gemini 3 原生 bash 亲和力，实现轻量级操作系统沙箱，兼顾安全性和用户体验。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 (👍 8) | **通用代理挂起** — 将任务委托给子代理后挂起，简单操作（如创建文件夹）也无限等待；用户被阻塞长达一小时。临时解决方案：指示模型避免使用子代理。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | **评估 AST 感知文件读取、搜索和映射的影响** — 研究使用 AST 感知工具（如精确方法边界读取）是否能减少轮次和 token 噪音。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | **Gemini 不够主动使用技能和子代理** — 模型无法自主调用自定义技能（如 gradle、git），即使任务高度相关；需要用户明确指示。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 4 | **浏览器代理忽略 settings.json 覆盖** — 浏览器代理绕过 `settings.json` 中的配置（如 `maxTurns`），破坏用户偏好设置。 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 | **增强 browser_agent 弹性** — 请求在持久模式下遇到锁定的浏览器配置文件时自动接管会话和恢复锁定。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | **browser 子代理在 wayland 环境下失败** — 浏览器子代理在 Wayland 环境下失败，影响跨平台兼容性。 |
| [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | P3 | 4 | **任务追踪器的原生文件工具** — 探索用基于文件的持久化 CRUD 操作替代上下文内任务追踪，以降低 token 成本并实现会话记忆。 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | 4 | **符号链接的代理文件无法识别** — `~/.gemini/agents/` 下的符号链接文件无法注册为子代理，影响组织灵活性。 |

---

## 4. 重要 PR 进展

| PR | 优先级 | 领域 | 概要 |
|----|----------|------|---------|
| [#29597](https://github.com/google-gemini/gemini-cli/pull/29597) | P2 | extensions | **修复(companion):** 为 gVisor/runsc 沙箱允许 IPC socket 回退 — 在 gVisor 环境容器隔离 loopback 时启用 stdio IPC 回退。 |
| [#29618](https://github.com/google-gemini/gemini-cli/pull/29618) | P1 | 核心 | **修复(核心):** 恢复会话时避免重复的工具响应轮次 — 防止恢复会话时重放已记录的用户 functionResponse 轮次。 |
| [#29616](https://github.com/google-gemini/gemini-cli/pull/29616) | P1 | 安全 | **修复(核心):** 将 OAuth 回调 iss 参数验证与 RFC 9207 对齐 — 仅当 auth server 元数据表明必要时才要求 `iss` 查询参数。 |
| [#29617](https://github.com/google-gemini/gemini-cli/pull/29617) | P1 | CLI | **修复(CLI):** 对 @<directory> 引用跳过递归文件读取 — 目录引用现在解析为相对工作区路径，无需递归展开。 |
| [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) | P1 | 核心 | **性能(核心):** 优化 ignore 过滤并启用子树剪枝 — 引入分层状态记忆化和符号链接缓存；解决大型仓库中的多秒延迟。 |
| [#29546](https://github.com/google-gemini/gemini-cli/pull/29546) | P2 | CLI | **功能(CLI):** 支持在非交互模式下通过 /skill-name 激活技能 — 在交互式 UI 之外启用斜杠命令技能激活。 |
| [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) | P1 | 核心 | **修复(核心):** 在 read-many-files 中用 glob 匹配替换模糊匹配 — 修复二进制资源因朴素子字符串匹配被错误包含而导致的上下文膨胀 bug。 |
| [#29612](https://github.com/google-gemini/gemini-cli/pull/29612) | P1 | 核心 | **修复(核心):** 强制终端用户轮次不变式 — 确保在 /rewind 等操作后对 Gemini API 的请求始终以有效的用户轮次结束。 |
| [#29608](https://github.com/google-gemini/gemini-cli/pull/29608) | P1 | 核心 | **修复(核心):** 30 秒后超时卡住的网页搜索 — 防止底层 LLM 调用未完成时网页搜索无限挂起（30+ 分钟）。 |
| [#29584](https://github.com/google-gemino/gemini-cli/pull/29584) | P1 | 核心 | **修复(核心):** 快速退出时防止删除恢复的会话历史** — 修复用户在提交提示前通过 Ctrl+C 退出导致关键数据丢失的问题。 |

---

## 5. 功能请求趋势

**AST 感知代码导航**
多个 issue（#22745、#22746、#22747）针对使用 AST 感知的 CLI 工具（如 AST grep、tilth、glyph）进行精确代码发现——通过精准的方法边界读取减少 token 膨胀和轮次。

**增强的子代理能力**
社区请求改善子代理自主性（#21968）、通过 `/chat share` 实现轨迹可见性（#22598），以及支持并行协作（#18287）。

**更智能的工具调用**
请求模型更自主地利用技能/子代理（#21968）、理解自身的 CLI 标志/热键（#21432），并采用精准代码提取（#19561）。

**健壮的会话与状态管理**
聚焦于可靠的会话恢复、历史保留（#29618、#29584）和带损坏恢复的原子状态持久化。

---

## 6. 开发者痛点

1. **代理可靠性与挂起** — 通用代理在委托给子代理时挂起（#21409）；浏览器子代理在 Wayland 环境下失败（#21983）；网页搜索无限挂起（#29608）。

2. **配置不一致** — 浏览器代理忽略 settings.json 覆盖（#22267）；符号链接的代理文件无法识别（#20079）。

3. **上下文 Token 膨胀** — 二进制资源因模糊匹配被错误包含在上下文中（#29457）；大文件读取"消防水龙带"式地输入 +15k token/轮（#19561）。

4. **破坏性行为** — 模型偶尔使用危险命令如 `git reset --force`，而存在更安全的替代方案（#22672）。

5. **会话数据丢失** — 快速退出时恢复的会话历史可能被永久删除（#29584）；错误报告中缺少子代理上下文（#21763）。

---

*基于 GitHub 数据生成 — github.com/google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese. I need to:

1. Translate all the content to Simplified Chinese
2. Preserve all the Markdown structure exactly
3. Keep URLs, numbers, dates, code references (like #4438), version tags, etc. as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through the digest section by section:

**Title:**
GitHub Copilot CLI Community Digest
→ GitHub Copilot CLI 社区动态

**Date:** 2026-10-03
→ 日期：2026年10月3日

**1. Today's Highlights**
→ 今日要闻

**2. Releases**
→ 版本发布

**3. Hot Issues**
→ 热门问题

**4. Key PR Progress**
→ 关键 PR 进展

**5. Hot Discussions**
→ 热门讨论

**6. Feature Request Trends**
→ 功能需求趋势

**7. Developer Pain Points**
→ 开发者痛点

I need to translate the content while maintaining:
- Tables with alignment
- Lists
- Bold text
- Links
- Code references
- Numbers
- Dates
- Emoji

Let me translate this carefully now.</think>

# GitHub Copilot CLI 社区动态

**日期：** 2026年10月3日

---

## 1. 今日要闻

GitHub Copilot CLI 发布了 **v1.0.92** 系列版本，带来重要的用户体验改进，新增 **Ctrl+E 会话前环境选择器**，可快速切换本地和云端运行，同时修复了输入响应速度和沙盒命令处理的相关问题。社区关注焦点集中在 MCP 配置问题（#4832）、BYOK 兼容性问题（#4840、#4012）以及技能调用 bug（#4438）上。

---

## 2. 版本发布

### v1.0.92-3
**新增：**
- 新增 **Ctrl+E 会话前环境选择器**，可在本地和云端运行之间切换

**修复：**
- 键盘、粘贴和鼠标输入在快速交互时保持有序且响应迅速
- 沙盒化 shell 命令在代理阻止目标时会弹出网络绕过提示

### v1.0.92-2
**修复：**
- Windows 上的沙盒命令将临时文件写入授权的临时目录，使将临时文件重命名为目标位置的工具正常工作
- Prompt 模式会话在 Stop-hook 继续执行完成后触发一次 `sessionEnd` 钩子

### v1.0.92-1
**修复：**
- 空闲 Streamable HTTP 会话过期后重新连接远程 MCP 服务器
- 向正在运行的后台 agent 发送消息会在下次处理机会时引导其活动轮次
- 上下文滚动将最新请求保留在恢复上下文中
- 隐藏自动沙盒 CA 设置提示

---

## 3. 热门问题

| # | 问题 | 摘要 | 评论数 | 👍 |
|---|-----|------|--------|-----|
| #4438 | **[area:agents]** disable-model-invocation: true 导致技能不可访问 | 带此 frontmatter 的技能即使显式调用也会返回"技能未找到" | 11 | 12 |
| #3172 | **[area:input-keyboard]** 奇怪的"其他人正在拥有剪贴板"消息 | 剪贴板所有权消息在切换应用时破坏终端布局 | 4 | 13 |
| #4012 | **[area:models]** BYOK 模型 "glm-5.2:cloud" 不支持 reasoning effort | 自定义 BYOK 配置拒绝 `--reasoning-effort max` 参数 | 3 | 23 |
| #1825 | **[area:mcp]** 空 Input Schema 导致 Copilot CLI 崩溃 | 没有参数的 MCP 工具被完全拒绝，所有 prompt 都无法使用 | 3 | 10 |
| #4832 | 工作区 .mcp.json 从未在 CLI 1.0.83 中加载 | 仓库根目录的 `.mcp.json` 被忽略；`mcp list` 中没有 Workspace 组 | 4 | 0 |
| #4840 | **[triage]** BYOK Copilot CLI 无法使用 Deepseek | BYOK 返回 400 错误："未知变体 `custom`，期望 `function`" | 3 | 1 |
| #4569 | **[area:sessions]** GitHub Mobile 保持"排队等待 Copilot"状态 | 本地 CLI 响应后移动端应用不刷新 | 2 | 0 |
| #4482 | **[area:permissions]** allowed_directories 无法抑制 shell 命令提示 | permissions-config.json 中的目录不会阻止"路径超出允许目录"提示 | 2 | 0 |
| #5015 | **[triage]** 聊天历史的键盘可访问分页模式 | 功能请求：在会话历史中使用 Vim/less 风格导航 | 2 | 3 |
| #5034 | **[area:mcp]** 添加设置以隐藏冗长的 MCP 状态通知 | 请求抑制连接/断开连接通知 | 1 | 0 |

---

## 4. 关键 PR 进展

| # | PR | 状态 | 摘要 |
|---|-----|------|------|
| #5046 | Initial commit | OPEN | 调试账号初始提交 |

*注：过去 24 小时内 PR 活动较少。*

---

## 5. 热门讨论

*本期无讨论数据。*

---

## 6. 功能需求趋势

根据问题分析，最常被请求的功能方向包括：

1. **MCP 配置改进**
   - 工作区 `.mcp.json` 加载（#4832）
   - MCP OAuth 支持 Entra ID（#5040）
   - 冗长状态通知控制（#5034）
   - MCP 工具目录变更处理（#5044）

2. **BYOK 与模型灵活性**
   - 更好的 Deepseek 兼容性（#4840）
   - 自定义模型支持 reasoning effort（#4012）
   - 模型回退行为改进（#5024）

3. **会话与输入用户体验**
   - Vim 风格分页导航（#5015）
   - 全新上下文的计划模式（#5041）
   - 剪贴板处理优化（#3172）

4. **权限细粒度**
   - Shell 命令模式允许列表（#3032）
   - 真正生效的基于配置的目录权限（#4482）

---

## 7. 开发者痛点

来自社区最反复出现的困扰：

1. **MCP 配置故障**
   - 工作区 MCP 配置无法加载（#4832）
   - 空闲后 MCP 服务器无法重连（#4832、#4562）
   - OAuth 令牌刷新竞态条件（#4842）

2. **BYOK 集成缺陷**
   - Deepseek 和自定义模型兼容性问题（#4840、#4012）
   - 协议版本协商失败（#5039）

3. **技能与 Agent 管理**
   - 使用 disable-model-invocation 的技能变得不可调用（#4438）
   - 无法禁用内置 agent-type 追加（#2024）

4. **Shell 与权限用户体验**
   - 配置的 allowed_directories 无法抑制提示（#4482）
   - 只有 `/allow-all` 可用于跳过确认（#3032）

5. **终端与输入问题**
   - 剪贴板所有权消息干扰界面（#3172）
   - grep 工具静默忽略不带破折号的 `n` 参数（#5038）

---

*动态基于 2026年10月3日 的 github.com/github/copilot-cli 数据生成*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest into Simplified Chinese, following the rules provided. Let me analyze the content and translate it naturally while preserving the structure.

Key things to preserve:
- All headings
- Issue/PR links and numbers (#XXXXX)
- URLs
- Project names (OpenCode, anomalyco, etc.)
- Technical terms
- Emoji (if any)
- Tables and their structure
- Lists
- Bold text
- Horizontal rules

Let me translate:

## Today's Highlights - 今日焦点

The OpenCode community is actively addressing V2 stability and billing concerns. Payment issues have surged to the top of discussions, with users reporting declined cards and billing misattributions. Meanwhile, the team is pushing forward with new features including a browser extension and typed composition primitives, while fixing critical issues like truncated tool calls and compaction model handling.

OpenCode 社区正在积极解决 V2 稳定性和账单问题。支付问题已成为讨论焦点，用户报告了卡片被拒和账单归属错误的情况。同时，团队继续推进新功能开发，包括浏览器扩展和类型化组合原语，同时修复关键问题，如工具调用截断和压缩模型处理。

---

## Releases - 版本发布

No new releases in the last 24 hours.

过去 24 小时内无新版本发布。

---

## Hot Issues - 热门问题

1. **[Payment Declined After 3 Months Despite No Issue With Card or Bank](https://github.com/anomalyco/opencode/issues/45278)** — 32 comments, 20 👍  
   Users report sudden payment rejections after months of successful transactions. The bank confirms no issues on their end. This high-profile billing issue affects subscription renewal and requires investigation into OpenCode's payment processing.

1. **[尽管卡片和银行均无问题，但三个月后支付被拒](https://github.com/anomalyco/opencode/issues/45278)** — 32 条评论，20 个赞  
   用户报告在连续数月成功交易后突然遭遇支付被拒。银行确认其端没有问题。这一高调的账单问题影响订阅续费，需要调查 OpenCode 的支付处理流程。

2. **[OpenCode Go: clarify which models are self-hosted vs. proxied](https://github.com/anomalyco/opencode/issues/24649)** — 19 comments, 33 👍  
   Community seeks clarity on Go plan model infrastructure—specifically which models are truly self-hosted versus proxied through third parties. Documentation transparency is critical for trust in the subscription tier.

2. **[OpenCode Go：明确哪些模型是自托管 vs 代理](https://github.com/anomalyco/opencode/issues/24649)** — 19 条评论，33 个赞  
   社区寻求关于 Go 计划模型基础设施的透明度——特别是哪些模型是真正自托管的，哪些是通过第三方代理的。对于订阅层的信任来说，文档透明度至关重要。

3. **[Truncated tool calls misclassified and unrecoverable](https://github.com/anomalyco/opencode/issues/18108)** — 11 comments, 11 👍  
   When outputs exceed `maxOutputTokens`, JSON tool calls get truncated mid-stream. The system marks these as failed instead of signaling the truncation to the model, triggering session exits or recovery loops.

3. **[截断的工具调用被错误分类且无法恢复](https://github.com/anomalyco/opencode/issues/18108)** — 11 条评论，11 个赞  
   当输出超过 `maxOutputTokens` 时，JSON 工具调用会在中途被截断。系统将其标记为失败，而不是向模型发出截断信号，导致会话退出或恢复循环。

4. **[FEATURE: Add Qwen3.8-27B](https://github.com/anomalyco/opencode/issues/42729)** — 10 comments, 13 👍  
   Request to add the Qwen3.8-27B open-weight model to the OpenCode Go subscription catalog. Model diversity continues to be a highly requested feature.

4. **[功能请求：添加 Qwen3.8-27B](https://github.com/anomalyco/opencode/issues/42729)** — 10 条评论，13 个赞  
   请求将 Qwen3.8-27B 开源权重模型添加到 OpenCode Go 订阅目录。模型多样性一直是高度需求的功能。

5. **[V2: esc interrupt broken](https://github.com/anomalyco/opencode/issues/42960)** — 8 comments  
   ESC interrupt fails in CLI v2. After Ctrl+C and reopening, previous tasks continue running in the background—a V2 stability concern.

5. **[V2：esc 中断功能失效](https://github.com/anomalyco/opencode/issues/42960)** — 8 条评论  
   ESC 中断在 CLI v2 中失效。Ctrl+C 并重新打开后，以前的任务继续在后台运行——这是 V2 的稳定性问题。

6. **[FEATURE: Auto-continue when model hits output token limit](https://github.com/anomalyco/opencode/issues/17471)** — 7 comments, 14 👍  
   Request to automatically continue sessions when models hit `finish_reason: "length"`, especially relevant for large context windows (e.g., 1M token context).

6. **[功能请求：模型达到输出 token 限制时自动继续](https://github.com/anomalyco/opencode/issues/17471)** — 7 条评论，14 个赞  
   请求在模型收到 `finish_reason: "length"` 时自动继续会话，这对于大型上下文窗口尤其重要。

7. **[Burned through limits in two days using Muse Spark](https://github.com/anomalyco/opencode/issues/52371)** — 6 comments  
   User reports Go plan limits depleted rapidly despite minimal spend visible in logs. Potential display bug or usage calculation issue.

7. **[使用 Muse Spark 两天内耗尽限额](https://github.com/anomalyco/opencode/issues/52371)** — 6 条评论  
   用户报告 Go 计划限额迅速耗尽，尽管日志中显示的消耗很少。可能是显示错误或使用量计算问题。

8. **[core: compaction ignores agents.compaction.model](https://github.com/anomalyco/opencode/issues/44094)** — 6 comments  
   Since a recent refactor, manual compaction in V2 always uses the session's current model instead of the configured `agents.compaction.model`, silently breaking user configurations.

8. **[core：压缩功能忽略 agents.compaction.model](https://github.com/anomalyco/opencode/issues/44094)** — 6 条评论  
   自最近一次重构以来，V2 中的手动压缩总是使用会话的当前模型，而不是配置的 `agents.compaction.model`，静默破坏了用户配置。

9. **[Starting opencode is too slow](https://github.com/anomalyco/opencode/issues/22227)** — 6 comments, 7 👍  
   Startup takes ~1 minute, with many users reporting this pain point. A persistent performance issue affecting UX.

9. **[启动 opencode 太慢](https://github.com/anomalyco/opencode/issues/22227)** — 6 条评论，7 个赞  
   启动需要约 1 分钟，许多用户都报告了这一痛点。这是一个影响用户体验的持续性能问题。

10. **[Nix checks do not run on v2 pull requests](https://github.com/anomalyco/opencode/issues/52123)** — 5 comments  
    The `nix-eval.yml` workflow only triggers on `dev`, not the default `v2` branch, causing stale hashes and undetected build failures.

10. **[Nix 检查不在 v2 pull request 上运行](https://github.com/anomalyco/opencode/issues/52123)** — 5 条评论  
    `nix-eval.yml` 工作流仅在 `dev` 上触发，而不是默认的 `v2` 分支，导致哈希陈旧且构建失败未被检测到。

---

## Key PR Progress - 关键 PR 进展

1. **[fix(app): treat bare @words in comments as text](https://github.com/anomalyco/opencode/pull/52877)**  
   Fixes false "file not found" warnings for Slack-style `@here` mentions in comments.

1. **[fix(app)：将纯 @词视为文本](https://github.com/anomalyco/opencode/pull/52877)**  
    修复了评论中类似 Slack 的 @here 提及导致的虚假"文件未找到"警告。

2. **[feat(browser-extension): add OpenCode Browser](https://github.com/anomalyco/opencode/pull/52818)**  
   New product package for browser extension functionality.

2. **[feat(browser-extension)：添加 OpenCode Browser](https://github.com/anomalyco/opencode/pull/52818)**  
    浏览器扩展功能的新产品包。

3. **[feat(gui-extensions): add typed composition and lifetime primitives](https://github.com/anomalyco/opencode/pull/52868)**  
   Adds built-ins declaring dependencies and stored state with type checking for providers, duplicates, and IPC conflicts.

3. **[feat(gui-extensions)：添加类型化组合和生命周期原语](https://github.com/anomalyco/opencode/pull/52868)**  
    添加了声明依赖项和存储状态的内置函数，并对提供者、重复项和 IPC 冲突进行类型检查。

4. **[docs: add Persian (fa) README translation](https://github.com/anomalyco/opencode/pull/47783)**  
   Expands localization with Persian translation.

4. **[docs：添加波斯语 (fa) README 翻译](https://github.com/anomalyco/opencode/pull/47783)**  
    通过波斯语翻译扩展本地化。

5. **[fix(tui): keep question form highlights on the raised surface](https://github.com/anomalyco/opencode/pull/52872)**  
   Resolves visual inconsistency in question form panel highlighting.

5. **[fix(tui)：保持问题表单高亮在raised surface上](https://github.com/anomalyco/opencode/pull/52872)**  
    解决表单高亮在弹出表面上的视觉不一致问题。

6. **[fix(session-ui): space errors and grouped updates in timeline](https://github.com/anomalyco/opencode/pull/52876)**  
   Improves timeline spacing and grouped notice layout.

6. **[fix(session-ui)：在时间线中分隔错误和分组更新](https://github.com/anomalyco/opencode/pull/52876)**  
    改进时间线间距和分组通知布局。

7. **[fix(core): use the compaction agent's model for summaries](https://github.com/anomalyco/opencode/pull/52875)**  
   Fixes #44094—ensures `agents.compaction.model` is actually read and used.

7. **[fix(core)：使用压缩代理的模型进行摘要](https://github.com/anomalyco/opencode/pull/52875)**  
    修复 #44094 — 确保实际读取和使用 `agents.compaction.model`。

8. **[fix(opencode): wait for stdout writes before exit](https://github.com/anomalyco/opencode/pull/46912)**  
   Prevents piped JSON truncation in `export` and `session list` commands.

8. **[fix(opencode)：退出前等待 stdout 写入](https://github.com/anomalyco/opencode/pull/46912)**  
    防止 `export` 和 `session list` 命令中的管道 JSON 截断。

9. **[fix(plugin): support package subpath exports](https://github.com/anomalyco/opencode/pull/49863)**  
   Fixes plugin installation for npm packages with subpath exports (e.g., `opencode-pty/v2`).

9. **[fix(plugin)：支持包子路径导出](https://github.com/anomalyco/opencode/pull/49863)**  
    修复了具有子路径导出的 npm 包的插件安装问题（如 `opencode-pty/v2`）。

10. **[fix(windows): hide background subprocess windows](https://github.com/anomalyco/opencode/pull/52871)**  
    Hides detached background service, PTY daemon, and other subprocesses from appearing as visible windows.

10. **[fix(windows)：隐藏后台子进程窗口](https://github.com/anomalyco/opencode/pull/52871)**  
     隐藏分离的后台服务、PTY 守护进程和其他子进程，使其不显示为可见窗口。

---

## Feature Request Trends - 功能请求趋势

The most requested enhancements cluster around:

- **Model Expansion** — Requests for new models (Qwen3.8-27B, etc.) in the Go catalog
- **Session Continuity** — Auto-continue on token limits, better truncation handling
- **Desktop Visibility** — Panel showing loaded skills, plugins, MCPs, and per-session context costs
- **Plugin System** — Bounded hooks at session boundaries, skip fields for pre-execution gating

最常请求的增强功能集中在以下几个方面：

- **模型扩展** — 在 Go 目录中请求新模型（如 Qwen3.8-27B）
- **会话连续性** — 在 token 限制时自动继续，更好地处理截断
- **桌面可见性** — 显示已加载技能、插件、MCP 和每个会话上下文成本的面板
- **插件系统** — 会话边界的有界钩子，用于执行前跳过的字段

---

## Developer Pain Points - 开发者痛点

- **Billing & Payments** — Multiple issues around declined cards, misattributed usage, and quota display confusion
- **V2 Stability** — ESC interrupts, compaction configuration, background task completion detection
- **Performance** — Slow startup times remain unresolved
- **Tool Call Reliability** — Truncated outputs cause unrecoverable errors
- **CI/CD Friction** — Nix workflow gaps on V2 branches, stale hash issues

- **账单与支付** — 卡片被拒、错误归属使用量和配额显示混淆等多个问题
- **V2 稳定性** — ESC 中断、压缩配置、后台任务完成检测
- **性能** — 启动缓慢问题仍未解决
- **工具调用可靠性** — 截断输出导致不可恢复的错误
- **CI/CD 摩擦** — V2 分支上的 Nix 工作流差距，哈希陈旧问题

---

*Generated from GitHub data — anomalyco/opencode*

---

我需要检查是否需要保留任何额外的 Markdown 结构元素。标题、列表、链接和格式都保持完整。标题级别正确，列表编号保留，链接格式和 URL 都准确无误。现在准备输出最终的中文翻译版本。</think>

# OpenCode 社区速览 — 2026-10-03

## 今日焦点

OpenCode 社区正在积极解决 V2 稳定性和账单问题。支付问题已成为讨论焦点，用户报告了卡片被拒和账单归属错误的情况。与此同时，团队继续推进新功能开发，包括浏览器扩展和类型化组合原语，同时修复关键问题，如工具调用截断和压缩模型处理。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门问题

1. **[尽管卡片和银行均无问题，但三个月后支付被拒](https://github.com/anomalyco/opencode/issues/45278)** — 32 条评论，20 个赞  
   用户报告在连续数月成功交易后突然遭遇支付被拒。银行确认其端没有问题。这一高调账单问题影响订阅续费，需要调查 OpenCode 的支付处理流程。

2. **[OpenCode Go：明确哪些模型是自托管 vs 代理](https://github.com/anomalyco/opencode/issues/24649)** — 19 条评论，33 个赞  
   社区寻求关于 Go 计划模型基础设施的透明度——特别是哪些模型是真正自托管的，哪些是通过第三方代理的。对于订阅层的信任来说，文档透明度至关重要。

3. **[截断的工具调用被错误分类且无法恢复](https://github.com/anomalyco/opencode/issues/18108)** — 11 条评论，11 个赞  
   当输出超过 `maxOutputTokens` 时，JSON 工具调用会在中途被截断。OpenCode 将其错误地分类为无效，而不是向模型发出截断信号，导致会话退出或恢复循环。

4. **[功能请求：添加 Qwen3.8-27B](https://github.com/anomalyco/opencode/issues/42729)** — 10 条评论，13 个赞  
   请求将 Qwen3.8-27B 开源权重模型添加到 OpenCode Go 订阅目录。模型多样性一直是高度需求的功能。

5. **[V2：esc 中断功能失效](https://github.com/anomalyco/opencode/issues/42960)** — 8 条评论  
   ESC 中断在 CLI v2 中失效。Ctrl+C 并重新打开后，以前的任务继续在后台运行——这是 V2 的稳定性问题。

6. **[功能请求：模型达到输出 token 限制时自动继续](https://github.com/anomalyco/opencode/issues/17471)** — 7 条评论，14 个赞  
   请求在模型收到 `finish_reason: "length"` 时自动继续会话，这对于大型上下文窗口尤其重要（例如 100 万 token 上下文）。

7. **[使用 Muse Spark 两天内耗尽限额](https://github.com/anomalyco/opencode/issues/52371)** — 6 条评论  
   用户报告 Go 计划限额迅速耗尽，尽管日志中显示的消耗很少。可能是显示错误或使用量计算问题。

8. **[core：压缩功能忽略 agents.compaction.model](https://github.com/anomalyco/opencode/issues/44094)** — 6 条评论  
   自最近一次重构以来，V2 中的手动压缩总是使用会话的当前模型，而不是配置的 `agents.compaction.model`，静默破坏了用户配置。

9. **[启动 opencode 太慢](https://github.com/anomalyco/opencode/issues/22227)** — 6 条评论，7 个赞  
   启动需要约 1 分钟，许多用户都报告了这一痛点。这是一个影响用户体验的持续性能问题。

10. **[Nix 检查不在 v2 pull request 上运行](https://github.com/anomalyco/opencode/issues/52123)** — 5 条评论  
    `nix-eval.yml` 工作流仅在 `dev` 上触发，而不是默认的 `v2` 分支，导致哈希陈旧且构建失败未被检测到。

---

## 关键 PR 进展

1. **[fix(app)：将纯 @词视为文本](https://github.com/anomalyco/opencode/pull/52877)**  
   修复了评论中类似 Slack 的 @here 提及导致的虚假"文件未找到"警告。

2. **[feat(browser-extension)：添加 OpenCode Browser](https://github.com/anomalyco/opencode/pull/52818)**  
   浏览器扩展功能的新产品包。

3. **[feat(gui-extensions)：添加类型化组合和生命周期原语](https://github.com/anomalyco/opencode/pull/52868)**  
   添加了声明依赖项和存储状态的内置函数，并对提供者、重复项和 IPC 冲突进行类型检查。

4. **[docs：添加波斯语 (fa) README 翻译](https://github.com/anomalyco/opencode/pull/47783)**  
   通过波斯语翻译扩展本地化。

5. **[fix(tui)：保持问题表单高亮在 raised surface 上](https://github.com/anomalyco/opencode/pull/52872)**  
   解决了问题表单面板高亮在弹出表面上的视觉不一致问题。

6. **[fix(session-ui)：在时间线中分隔错误和分组更新](https://github.com/anomalyco/opencode/pull/52876)**  
   改进了时间线间距和分组通知布局。

7. **[fix(core)：使用压缩代理的模型进行摘要](https://github.com/anomalyco/opencode/pull/52875)**  
   修复 #44094 — 确保实际读取和使用 `agents.compaction.model`。

8. **[fix(opencode)：退出前等待 stdout 写入](https://github.com/anomalyco/opencode/pull/46912)**  
   防止 `export` 和 `session list` 命令中的管道 JSON 截断。

9. **[fix(plugin)：支持包子路径导出](https://github.com/anomalyco/opencode/pull/49863)**  
   修复了具有子路径导出的 npm 包的插件安装问题（如 `opencode-pty/v2`）。

10. **[fix(windows)：隐藏后台子进程窗口](https://github.com/anomalyco/opencode/pull/52871)**  
    隐藏分离的后台服务、PTY 守护进程和其他子进程，使其不显示为可见窗口。

11. **[feat(tui)：允许 /tui/select-session 聚焦单个附着的 TUI 实例](https://github.com/anomalyco/opencode/pull/52869)**  
    添加了新的 TUI 命令以支持单实例聚焦模式。

---

## 功能请求趋势

最常请求的增强功能集中在以下几个方面：

- **模型扩展** — 在 Go 目录中请求新模型（如 Qwen3.8-27B）
- **会话连续性** — 在 token 限制时自动继续，更好地处理截断
- **桌面可见性** — 显示已加载技能、插件、MCP 和每个会话上下文成本的面板
- **插件系统** — 会话边界的有界钩子，用于执行前跳过的字段

---

## 开发者痛点

- **账单与支付** — 卡片被拒、错误归属使用量和配额显示混淆等多个问题
- **V2 稳定性** — ESC 中断、压缩配置、后台任务完成检测
- **性能** — 启动缓慢问题仍未解决
- **工具调用可靠性** — 截断输出导致不可恢复的错误
- **CI/CD 摩擦** — V2 分支上的 Nix 工作流差距，哈希陈旧问题

---

*GitHub 数据生成 — anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this Pi Community Digest into Simplified Chinese, following the specific rules provided. Let me translate it carefully, maintaining the exact Markdown structure, tables, and technical terms while using natural technical Chinese.

Let me go through each section:</think>

# Pi 社区摘要 — 2026-10-03

## 今日要闻

Pi 社区在 TUI 性能修复和供应商扩展方面保持强劲势头。主要进展包括：已合并一项重要的 TUI 渲染优化、新增 Cloudflare Clef 分类器，以及围绕 Windows 支持和 OAuth 问题持续讨论。项目还在原生 llama.cpp 集成和 Azure Foundry 支持方面取得进展。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | 标题 | 重要性 | 反馈 |
|---|-------|--------|------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] How do you use Pi on windows?** | 72 条评论 — 关于 Windows 执行路径的活跃讨论（WSL、原生等）以及开发者精力的投入方向。社区寻求明确的支持配置。 | 👍 2 |
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **Move off Shrinkwrap** | 已关闭，26 条评论。解决了重复的 `pi-ai` 副本导致的模块级 Map 注册表冲突问题。 | — |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **[bug] High CPU usage on Mac OS with long session** | 18 条评论，10 👍 — 高优先级 bug：Mac 长时间会话时 CPU 占用 100%+（内存 600-800MB）。严重影响可用性。 | 👍 10 |
| [#10300](https://github.com/earendil-works/pi/issues/10300) | **ChatGPT OAuth ID token not persisted** | 12 条评论 — 导致扩展无法访问用户账户身份，Token 刷新也受影响。 | — |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | **TuiMainScreen full-screen redraw storm** | 10 条评论 — 长篇转录触发近乎全帧重绘；实时流式组件导致剧烈跳动。 | 👍 1 |
| [#10258](https://github.com/earendil-works/pi/issues/10258) | **[bug] ChatGPT OAuth Error 400 when signing in** | 7 条评论 — 用户因 `invalid_grant` 无法添加 OpenAI 提供商。`open-codex (legacy)` 可用。 | 👍 1 |
| [#10162](https://github.com/earendil-works/pi/issues/10162) | **[bug] Too many input images stop the agent task** | 6 条评论 — 大量图片的长时 agent 任务失败；与自动压缩工具相关。 | — |
| [#10256](https://github.com/earendil-works/pi/issues/10256) | **Terminal color query leaks into prompt, opens external editor** | 6 条评论 — mintty/Windows 启动时在提示中写入颜色查询数据并打开编辑器。0.99.x 版本回归。 | 👍 1 |
| [#10002](https://github.com/earendil-works/pi/issues/10002) | **Extension console output writes over the interactive TUI** | 5 条评论 — 扩展的 `console.error()` 破坏 TUI 布局，留下视觉残影。 | — |
| [#10314](https://github.com/earendil-works/pi/issues/10314) | **Reconsider Home/End defaults in fullscreen mode?** | 5 条评论 — 辩论：保持行编辑行为 vs. 全屏 TUI 中的滚动至顶部/底部。 | 👍 1 |

---

## 主要 PR 进展

| # | 标题 | 状态 | 意义 |
|---|-------|------|------|
| [#10383](https://github.com/earendil-works/pi/pull/10383) | **perf(tui): diff raw lines so unchanged lines keep pointer equality** | ✅ 已关闭 | 重大 TUI 性能提升：通过保持差分渲染中的对象标识，消除每帧全缓冲区字符串比较。 |
| [#10382](https://github.com/earendil-works/pi/pull/10382) | **feat(coding-agent): use llama.cpp classifier models natively** | 🔵 开放中 | 通过 `/v1/systemone` 查询 llama.cpp 模型；将决策模型（Julia-1、Laya、Kev 等）分类为类型安全的 system-one 分类器。 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **feat(ai): support Azure Foundry Chat Completions** | 🔵 开放中 | 将 Azure 提供商从 Responses API 扩展到支持 Foundry 部署的 Chat Completions（如 DeepSeek V4 Pro）。 |
| [#10328](https://github.com/earendil-works/pi/pull/10328) | **fix(ai): drop mismatched thinking blocks on Bedrock** | ✅ 已关闭 | 修复 #10324 — 发送带有 `drop_block` 行为的 `block_binding`，防止系统提示/工具变更后重放的 thinking block 触发 400 错误。 |
| [#10372](https://github.com/earendil-works/pi/pull/10372) | **feat(cpp): add Bazel build foundation** | ✅ 已关闭 | 添加 Bazel 8 工作区、模块宏、风格检查、clang-tidy 配置，以及 `IClock`/`SystemClock` 作为 C++ 核心代码的参考模块。 |
| [#10329](https://github.com/earendil-works/pi/pull/10329) | **fix(ai): add long-context pricing tier to OpenAI on Bedrock** | ✅ 已关闭 | 修复超额计费 — 对超过 272k token 的请求应用 2x 输入/缓存和 1.5x 输出费率。 |
| [#10368](https://github.com/earendil-works/pi/pull/10368) | **fix(coding-agent): keep hidden tool guidance out of rules** | ✅ 已关闭 | 隐藏工具（如隐藏的 `bash`）不再向 `<rules>` 或技能提示发出指导。 |
| [#10316](https://github.com/earendil-works/pi/pull/10316) | **feat(ai): add Cloudflare Clef classifiers** | ✅ 已关闭 | 在 Workers AI 中添加 `@cf/cloudflare/clef`（27B，$0.24/1M token）和 `@cf/cloudflare/clef-flash`（9B，$0.09/1M token）。 |
| [#10361](https://github.com/earendil-works/pi/pull/10361) | **fix(coding-agent): preserve multiline syntax highlighting** | ✅ 已关闭 | 修复 #10143 — 对 highlight.js 多行 span 中的每一行应用活动的 ANSI 格式化器。 |
| [#10332](https://github.com/earendil-works/pi/pull/10332) | **fix(coding-agent): update brace-expansion to 5.0.12** | ✅ 已关闭 | 修补 shrinkwrap 绕过的依赖项中的 GHSA-q2hr-2g5m-vwhj 漏洞。 |

---

## 热门讨论

### 想法

| # | 标题 | 摘要 |
|---|-------|------|
| [#10128](https://github.com/earendil-works/pi/discussions/10128) | **Add ability to disable the share feature?** | 提议添加开关以禁用分享功能，符合 Pi 的简约设计理念。 |
| [#10151](https://github.com/earendil-works/pi/discussions/10151) | **Working memory as prompt sections** | 想法：将工作记忆（任务 + 过去会话）规范化为 prompt 分段，会话日志作为闭环。 |
| [#10331](https://github.com/earendil-works/pi/discussions/10331) | **Qwen 3.8 26B fine-tuned for Pi** | 讨论针对 Pi agent 使用场景微调的 HuggingFace 模型。 |

### 问答 / 展示

| # | 标题 | 摘要 |
|---|-------|------|
| [#10230](https://github.com/earendil-works/pi/discussions/10230) | **codemode looks so freaking good, any benchmarks?** | 社区对 codemode "only" 模式印象深刻；询问 token 节省情况，提及 NVIDIA 的 SoL 研究。 |

---

## 功能请求趋势

1. **增强的 UI/UX 自定义** — 可开关功能（禁用分享、工具栏隐藏）、键盘行为默认值和语法着色改进的请求。
2. **跨平台一致性** — 对更好 Windows 支持的强烈需求，包括原生执行路径、终端兼容性（mintty、ConPTY）和更清晰的文档。
3. **扩展的提供商支持** — Azure Foundry Chat Completions、更多 Cloudflare 分类器和 llama.cpp 原生集成。
4. **长时 Agent 可靠性** — 上下文大小、图片处理、内存管理和后台任务持久化相关问题。
5. **大规模 TUI 性能** — 增量渲染、差分优化以及处理 800+ 消息会话。

---

## 开发者痛点

- **OAuth 和认证失败** — ChatGPT OAuth 400 错误、Token 刷新问题和 ID token 持久化的反复报告。
- **TUI 性能退化** — 大型会话中全量重绘导致滚动/输入卡顿；多行 token 语法高亮丢失。
- **内存和资源泄漏** — Mac 长时间会话时高 CPU；无限制的脚本输出增长；提示变更后 thinking block 重放触发 400 错误。
- **依赖冲突** — Shrinkwrap 导致重复模块副本；通过 shrinkwrap 拉取的易受攻击的 `brace-expansion` 版本。
- **图片处理** — Kitty 编码器硬编码 PNG 格式；WebP EXIF 解析循环；pi-web 中图片渲染回归。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this English Qwen Code Community Digest into Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and using appropriate technical Chinese terminology.

Key terms to translate:
- "Community Digest" → "社区动态"
- "Today's Highlights" → "今日要闻"
- "Releases" → "版本发布"
- "Hot Issues" → "热门 issue"
- "Key PR Progress" → "PR 进展"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"

Technical terms:
- "session management" → "会话管理"
- "token governance" → "令牌治理"
- "Managed Agent" → "托管 Agent"
- "workspace binding" → "工作区绑定"
- "session durability" → "会话持久化"

Let me do the translation now:</think>

# Qwen Code 社区动态 — 2026-10-03

## 今日要闻

Qwen Code 项目在会话管理、令牌治理和 Agent 架构方面持续活跃开发。**版本 v0.24.7-nightly.20261002.a011f66944** 修复了 Code Mode 文本对齐问题（与延迟工具发现相关）并解决了权限处理问题。社区讨论继续围绕托管 Agent 双路径架构提案（#12380，共 42 条评论），同时多个 PR 推进了工作区绑定会话功能和安全加固。

---

## 版本发布

| 版本 | 变更 |
|------|------|
| **v0.24.7-nightly.20261002.a011f66944** | **fix(core):** 对齐 Code Mode 文本与延迟工具发现 (#12990). **fix(permissions):** 遵守已批准的权限。 |

---

## 热门 Issue

| # | Issue | 优先级 | 评论数 | 为何重要 |
|---|-------|--------|--------|----------|
| #12380 | [proposal(serve): 定义托管 Agent 双路径架构并分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380) | P2 | 42 | 提出托管 Agent 双路径架构，将模型推理与工具环境配置分离，支持持久化会话所有权和工作区绑定。项目多 Agent 路线图的核心。 |
| #12028 | [tracking(core): 非会话上下文令牌治理](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | 18 | 跟踪系统提示、工具 Schema 和技能列表等每次请求都发送的上下文治理——在大上下文模型中，这些可能轻易超过会话令牌。 |
| #13004 | [perf(memory): 在无操作提取后添加有限冷却期](https://github.com/QwenLM/qwen-code/issues/13004) | P3 | 7 | 建议在合法的无操作后添加节流策略，防止过多的内存提取运行，减少不必要的提取器调用。 |
| #12952 | [feat(managed-agent): G 阶段 — 会话历史权威化、写入器隔离与接管](https://github.com/QwenLM/qwen-code/issues/12952) | P2 | 7 | 跟踪托管 Agent 路线图 G 阶段——外部化权威会话历史，支持写入器隔离和接管能力。 |
| #13157 | [Agent Host: 在权限流程之前运行隔离守护进程](https://github.com/QwenLM/qwen-code/issues/13157) | P2 | 6 | Bug：Agent Host 工具在工作区外解析时优先触发权限流程，自动拒绝并结束运行。需要在权限检查前执行守护。 |
| #12091 | [对活跃会话执行 `sessions/delete` 破坏转录](https://github.com/QwenLM/qwen-code/issues/12091) | P1 | 6 | Bug：删除已连接的会话会移除其转录文件；写入器会无头重建该文件，导致会话永久性损坏（degraded_history）。 |
| #13191 | [后续：PR #13142 中 AgentDefinition 评审的延期事项](https://github.com/QwenLM/qwen-code/issues/13191) | P3 | 6 | 跟踪 AgentDefinition 修订评审中 19 条延期建议的后续处理。 |
| #13175 | [Web Shell: 会话概览和分屏视图的键盘快捷键](https://github.com/QwenLM/qwen-code/issues/13175) | P3 | 5 | 功能请求：在 Web Shell 中添加 Cmd/Ctrl+Shift+O 打开会话概览——支持桌面端和 CLI 网页模式。 |
| #13130 | [所有工作区突然变为不受信任](https://github.com/QwenLM/qwen-code/issues/13130) | P2 | 5 | Bug：Qwen Code 桌面端所有工作区同时变为不可信任/只读，导致无法使用且无恢复路径。 |
| #13208 | [Side queries 可以请求 max_tokens >= context window](https://github.com/QwenLM/qwen-code/issues/13208) | P2 | 4 | Bug：输出预算在 llm-chat 之外不感知窗口大小——Side queries 可能请求超过模型上下文窗口的令牌数。 |

---

## PR 进展

| # | PR | 作者 | 摘要 |
|---|-----|------|------|
| #13247 | [feat(managed-agent): 允许创建者更改绑定会话的目录 (W2)](https://github.com/QwenLM/qwen-code/pull/13247) | wenshao | 实现 W2 切片：工作区绑定托管会话的受控工作目录变更，作为幂等的持久化操作。 |
| #13216 | [feat(sdk-java): 添加 SpotBugs 高置信度门禁、CodeQL Java 扫描、Maven dependabot](https://github.com/QwenLM/qwen-code/pull/13216) | wenshao | 添加绑定到 `mvn verify` 的 SpotBugs 门禁和 CodeQL Java 扫描——工程门禁的第一步。 |
| #13206 | [fix(web-shell): 跳过损坏的托管 SSE 帧并合并间隙同步](https://github.com/QwenLM/qwen-code/pull/13206) | wenshao | 健壮性修复：处理重放日志中损坏的持久化 SSE 帧，并在 Web Shell 中合并间隙同步。 |
| #13166 | [feat(managed-agent): 在新的 hosted-workspace /2 配置文件中支持 glob](https://github.com/QwenLM/qwen-code/pull/13166) | yiliang114 | 在配置文件版本 `hosted-workspace-files/2` 和 `hosted-workspace-shell/2` 后面向受邀用户添加只读 `glob` 工具。 |
| #7957 | [feat(cli): 粘贴复制的 Windows 文件](https://github.com/QwenLM/qwen-code/pull/7957) | zhuyuy | 添加 Windows 资源管理器文件剪贴板粘贴功能支持。 |
| #13168 | [feat(managed-agent): 为托管轮次提供工作区项目上下文](https://github.com/QwenLM/qwen-code/pull/13168) | yiliang114 | 托管轮次现在从其保存的会话工作目录接收 `QWEN.md` 和 `AGENTS.md`。 |
| #13174 | [feat(managed-agent): 采用下一代托管 Harness 代际 (G3)](https://github.com/QwenLM/qwen-code/pull/13174) | wenshao | 实现 G3：托管会话在重启时采用下一代 Harness，而非失败。 |
| #11501 | [fix(cli): 加载项目 .mcp.json 时展开 ${VAR} 占位符](https://github.com/QwenLM/qwen-code/pull/11501) | stdray | 项目 `.mcp.json` 条目现可在配置规范化前展开 `$VAR`/`${VAR}`。 |
| #13140 | [fix(cli): 加固 settings 失败和 sandbox 命令流处理](https://github.com/QwenLM/qwen-code/pull/13140) | doudouOUC | 修复原生部分读取输入核算问题，加固 settings/sandbox 错误处理。 |
| #13033 | [feat(core): 默认延迟声明 Agent 和 Goal](https://github.com/QwenLM/qwen-code/pull/13033) | yiliang114 | 使 Agent/Goal 协调工具默认按需发现——`agent`、`list_agents`、`get_goal` 等。 |

---

## 功能需求趋势

根据 Issue 分析，以下方向是当前功能请求的主流：

1. **会话持久化与状态管理** — 多项提案（#12380、#12952、#13124）聚焦持久化会话所有权、检查点和可恢复工具执行
2. **令牌/上下文优化** — 重点关注非会话上下文治理（#12028）、输出限制（#13208、#13252）和有限内存提取（#13004）
3. **托管 Agent 架构** — 托管 Agent 功能持续分阶段交付：工作区绑定、会话历史外部化、写入器隔离
4. **安全与信任** — 凭据安全（#13122）、工作区信任恢复（#13130）和权限流程顺序（#13157）
5. **Web Shell/UI 增强** — 键盘快捷键（#13175）、工具卡片差异换行（#13248）和 SSE 健壮性（#13206）

---

## 开发者痛点

- **TLS/SSL 连接问题** — 特定运营商链路上选择性连接重置，BoringSSL 与 OpenSSL 差异（#13234）
- **工作区信任状态** — 突然且无法恢复的信任状态变化，阻止所有工作区访问（#13130）
- **会话生命周期 Bug** — 活跃会话删除后留下孤立写入器，无头重建文件导致会话损坏（#12091）
- **令牌预算** — 主路径和 Side Query 路径不遵守上下文窗口限制（#13208、#10252）
- **CI 可靠性** — 夜间 CodeQL 扫描静默超时，连续 13 次运行失败（#13249）
- **模型选择** — 多密钥配置下 API 密钥优先级和配额耗尽的困惑（#12760）

---

*动态基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*