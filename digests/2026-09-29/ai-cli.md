# AI CLI 工具社区动态日报 2026-09-29

> 生成时间: 2026-09-29 02:15 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this cross-tool comparison report from English to Chinese. Let me carefully follow all the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, project names, repository slugs, version tags, numbers, dates verbatim
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, maintaining the exact structure:

Title: AI CLI Tools Ecosystem — Cross-Tool Comparison Report
Date: 2026-09-29

Section 1: Ecosystem Overview
Section 2: Activity Comparison (table)
Section 3: Shared Feature Directions (table)
Section 4: Differentiation Analysis (table)
Section 5: Community Momentum & Maturity (table)
Section 6: Trend Signals with subsections

I'll translate naturally while keeping technical terms, URLs, and identifiers in their original form.</think>

# AI CLI 工具生态系统 —— 跨工具对比报告

**日期：** 2026-09-29

---

## 1. 生态概览

AI CLI 工具领域正在走向多供应商市场，呈现出不同的架构理念。当前的快照揭示了三个活动层级：**Claude Code** 和 **OpenCode** 凭借 50+ Issue 领跑社区参与度；**OpenAI Codex**、**Gemini CLI** 和 **Qwen Code** 保持中等但稳定的活动量；**Pi** 尽管拥有 capable 代码库，但公开讨论甚少。共同主题包括可扩展性（模块化、插件化）、平台特定 bug 修复（Windows 回归问题占主导）以及 token/成本治理——反映了实际部署中的痛点。市场正在围绕基于聊天的用户体验进行整合，各供应商在自主智能体能力上各有侧重，有的优先企业集成，有的侧重本地执行，有的则专注于开发者体验。

---

## 2. 活动对比

| 工具 | 仓库 | Issue (24h) | PR (24h) | Discussions | Release (24h) | 值得关注趋势 |
|------|------------|--------------|-----------|-------------|----------------|---------------|
| **Claude Code** | anthropics/claude-code | 50 | 6 | 1 | ✅ v2.1.284 | Mods 可扩展性驱动参与度 |
| **OpenAI Codex** | openai/codex | ~50 | ~20 | 3 | 5 个版本（stable + alpha） | Windows 回归危机 |
| **Gemini CLI** | google-gemini/gemini-cli | 50 | ~20 | 0 | v0.63.0-nightly | 安全加固重点 |
| **GitHub Copilot CLI** | github/copilot-cli | 49 | 0 | 0 | 6 个版本（快速修复） | OAuth/MCP 认证不稳定 |
| **OpenCode** | anomalyco/opencode | 50 | 50 | 0 | v1.18.33 | 双高参与度（Issue + PR） |
| **Pi** | earendil-works/pi | 50 | 13 | 3 | 无 | Managed Agent 架构演进 |
| **Qwen Code** | QwenLM/qwen-code | 50 | 50 | 0 | 无 | 内存 + 远程执行重点 |

*注："0" 表示该时段内无新条目，而非上游禁用。*

---

## 3. 共同功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|------------------|----------------|----------------|
| **可扩展性 / 模块化** | Claude Code, Pi, Qwen Code | 自定义行为的钩子、插件、函数注册表 (#91870, #10040, #12380) |
| **本地 / Llama.cpp 支持** | Gemini CLI, Pi, Qwen Code | 托管 llama.cpp 服务器模式、上下文窗口处理、Response API 修复 |
| **Token / 成本治理** | Claude Code, OpenCode, Qwen Code | 非对话上下文的可见性（系统提示、工具模式）、内存压缩控制 |
| **内存管理** | Claude Code, OpenCode, Pi, Qwen Code | 结构化召回的自动内存、可配置的压缩阈值、持久化内存 |
| **平台稳定性（Windows）** | OpenAI Codex, Copilot CLI, Gemini CLI | 终端闪烁、窗口弹出、进程生成、认证回归 |
| **MCP 集成** | Claude Code, Copilot CLI, Gemini CLI | OAuth 流程、凭据处理、stdio 服务器资源泄漏 |
| **多智能体 / 远程执行** | Claude Code (Cowork), Qwen Code, Pi | 持久会话生命周期、远程 Shell 结果交付、跨实例通信 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术方案 |
|------|---------------|-------------|---------------------|
| **Claude Code** | Mods 可扩展性、1M 上下文窗口 | 追求深度定制的开发者 | 工具优先架构，支持钩子和函数注册表；默认使用 Sonnet 5.5 |
| **OpenAI Codex** | 桌面集成、Windows 稳定性 | Windows 开发者、Codex Desktop 用户 | TUI 优先，复制即选，全屏模式；快速迭代 alpha 版本 |
| **Gemini CLI** | 安全加固、认证可靠性 | 企业用户、Google Cloud 用户 | 策略驱动安全、安全策略目录、受限递归 |
| **Copilot CLI** | GitHub 集成、MCP OAuth | GitHub 用户、MCP 服务器运维者 | 认证优先；修复节奏快（2 天 6 版本） |
| **OpenCode** | 广泛 provider 支持、UI 响应性 | 多模型用户、资深用户 | PR 吞吐量最高；双高活动量（Issue + PR） |
| **Pi** | Managed Agent 架构、本地模型 | 本地 / LLM 爱好者 | 双路径 Managed Agent 设计；基于 WASM 的 codemode |
| **Qwen Code** | 远程执行、结构化内存 | 企业部署 | 持久化远程 Shell；Mem0 集成；内存治理 |

**核心差异化：**
- **企业就绪度**：Claude Code（可扩展性）、Qwen Code（持久执行）、Gemini CLI（安全性）
- **开发者体验**：OpenCode（provider 广度）、Copilot CLI（GitHub 原生）、Codex（TUI 打磨）
- **本地优先**：Pi（托管 llama.cpp）、Gemini CLI（Nix 支持）、Qwen Code（私有部署）
- **创新速度**：OpenCode 和 Qwen Code 均显示 50 PR/24h — 最高迭代频率

---

## 5. 社区活力与成熟度

| 工具 | 社区健康指标 | 成熟度评估 |
|------|------------------------------|---------------------|
| **Claude Code** | #91870 (Mods) = 223 条评论，128 👍 — 参与度最高 | **成熟且活跃** — 企业级功能，强大的社区反馈循环 |
| **OpenCode** | 每日 50 Issue + 50 PR — 双高吞吐量 | **快速迭代** — 最活跃的 PR 引擎；前沿功能 |
| **OpenAI Codex** | 66 条评论的 issue (#48074)，112 👍 — 信号强劲 | **成长中** — Windows 稳定化是首要任务；活跃的 issue 分类 |
| **Qwen Code** | 双 50 PR/Issue；带 37 条评论的架构提案 | **早期成熟** — 复杂的工程讨论 |
| **Gemini CLI** | 安全导向修复；中等 issue 量 | **稳定** — 企业级；社区讨论较少 |
| **Copilot CLI** | 今日 0 PR；49 条 Issue — 回归问题居多 | **被动响应** — 聚焦 bug 修复；认证稳定性是长期问题 |
| **Pi** | 13 条 PR，3 条讨论；架构演进 | **小众活跃** — 专注的开发者社区；Managed Agent 方向 |

**成熟度排名（从高到低）：**
1. Claude Code — 成熟稳定，高参与度，企业功能完善
2. Gemini CLI — 稳定，安全加固，讨论较少
3. OpenAI Codex — 成长中，专注 Windows
4. Qwen Code — 架构复杂，PR 速度快
5. OpenCode — 快速迭代，前沿功能
6. Copilot CLI — 被动响应回归问题
7. Pi — 能力可观但公开讨论少

---

## 6. 趋势信号

### 社区反馈反映的行业趋势

1. **可扩展性是杀手级功能** — 七个工具中的三个（Claude Code、Pi、Qwen Code）都有活跃的可扩展性提案。用户想要钩子、插件和自定义行为——而不仅仅是模型切换。

2. **Token 成本可见性日益受到关注** — 多个社区（Claude Code、OpenCode、Qwen Code）都指出系统提示、工具模式和内存带来的隐藏 token 成本。用户需要治理和可见性。

3. **Windows 是不稳定平台** — OpenAI Codex、Copilot CLI 和 Gemini CLI 都出现了 Windows 特有的回归问题（终端闪烁、窗口弹出、进程泄漏）。该平台需要专门投入。

4. **本地模型正在获得关注** — Llama.cpp 集成出现在 Gemini CLI、Pi 和 Qwen Code 中。托管本地执行（自动启动、清理）正在成为预期功能。

5. **安全正在被事后加强** — Gemini CLI（策略目录、凭据脱敏）、Copilot CLI（OAuth 修复）、Qwen Code（模型选择器中的凭据暴露）。安全问题正在被被动发现和修复。

6. **内存管理正在趋同** — 结构化召回的自动内存出现在 Claude Code、OpenCode、Pi 和 Qwen Code 中。这一模式表明内存是一个尚未解决的问题，需要多种方法。

7. **智能体架构走向双轨** — Pi 和 Qwen Code 都在向 Managed/Dual-path 架构演进，将模型推理与工具环境配置分离——这表明市场在智能体架构上正在形成共识。

### 决策者价值

- **企业级采用**：Claude Code（可扩展性）、Gemini CLI（安全性）、Qwen Code（持久远程执行）领先
- **开发者体验**：OpenCode（provider 广度）、Codex（TUI 打磨）、Copilot CLI（GitHub 集成）
- **本地 / 敏感工作流**：Pi、Gemini CLI、Qwen Code 提供自托管选项
- **前沿功能**：OpenCode 和 Qwen Code 迭代最快
- **稳定优先于创新**：Claude Code 和 Gemini CLI 优先加固

---

*跨工具分析基于各仓库快照编制 —— 2026-09-29*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills 摘要生成失败。

---

<think>The user wants me to generate a Claude Code community digest for 2026-09-29 based on the provided GitHub data. Let me analyze the data and create a structured digest with the requested sections.

Let me go through the data:

**Releases:**
- v2.1.284 - Added Claude Sonnet 5.5, now default Sonnet model with 1M context, $2/$10 per Mtok with $0.20/Mtok cache reads
- Added a "Yes, but ask again next time" answer to auto mode's prompt

**Latest Issues (top 30 by comment count):**
1. #91870 - Mods - make Claude 10x more extensible (223 comments, 128 👍) - enhancement, hooks, plugins
2. #91188 - Feature request: make the auto-memory MEMORY.md compaction reminder threshold configurable (58 comments)
3. #20697 - [FEATURE] Sync Skills between Claude Desktop and Claude Code CLI (48 comments, 157 👍)
4. #93482 - [BUG] Cowork: device_commit_files reports success on overwrites but the on-disk content lags (15 comments)
5. #57998 - [FEATURE] CLAUDE_DATA_DIR env var or config key to relocate on Windows (15 comments, 25 👍)
6. #91683 - [BUG] bypassPermissions mode now prompts on `cd DIR && grep …` when a Read() deny rule is configured (10 comments, 27 👍)
7. #87772 - [BUG] Days permanently disappear from the desktop usage heatmap (4 comments)
8. #94478 - [BUG] Desktop app spawns ~17 git processes per second continuously (Windows) (4 comments)
9. #91939 - [BUG] Fable 5.1: final answer emitted as a thinking block (4 comments)


10. #96402 - [BUG] SIGILL on x86-64 CPU without AVX (Linux) (3 comments)
11. #94479 - [QUESTION] Does stats-cache.json rebuild lose history (2 comments)
12. #95601 - [BUG] Every background Agent-tool completion delivers two separate parent-turn events (2 comments)
13. #94265 - [BUG] Worktrees outside .claude/worktrees/ cost one approval prompt per switch (2 comments)
14. #95987 - [BUG] Code tab missing from Claude Desktop app (Windows) (2 comments)
15. #9

1120 - [FEATURE] Bash tab-completion for the claude CLI (2 comments)
16. #96867 - [FEATURE] Start new Claude Desktop Code sessions from the mobile app (1 comment)
17. #92307 - [BUG] Claude Code 2.1.261 crashes (1 comment)
18. #98035 - [FEATURE] Do not warn when a user-scope MCP server intentionally shadows a plugin's server (1 comment) - CLOSED
19. #98033 - [invalid] higgsfield ai (1 comment)
20. #97997 - [BUG] Fable weekly usage counted with zero Fable requests (1 comment)
21. #98017 - [Bug] Safety classifier blocks legitimate admin UI code generation (1 comment)
22. #89274 - [MODEL] Prose hard-wrapping and max-width capping recur across sessions (1 comment)
23. #98023 - [BUG] 2.1.284 freezes on first Enter: new sandbox glob expander (1 comment)
24. #97987 - [BUG] Figma MCP tool calls fail with SSE JSON parse error (1 comment)
25. #94001 - [BUG] VS code extension: Long commands get abbreviated (1 comment)
26. #97160 - [BUG] Project on the cloud env stuck when usage limit hit 100% (1 comment)
27. #98041 - [Bug] Anthropic API Error: Safety guardrails blocking legitimate cybersecurity educational content (0 comments)
28. #98039 - [GitHub integration] (0 comments)
29. #98038 - [GitHub integration] org is not linked (0 comments)
30. #98037 - [BUG] Stats "Longest session" is the first-to-last message span (0 comments)

**Pull Requests:**
1. #94847 [

I'm noticing several new entries that appear to be variations of existing issues - #95987 shows up twice with different descriptions (Figma MCP and Code tab issues), suggesting some duplication or overlap in reporting. The PR list appears to be truncated and needs completion.</think>

# Claude Code Community Digest — 2026-09-29

## Today's Highlights

The v2.1.284 release delivers **Claude Sonnet 5.5** as the new default Sonnet model on the Anthropic API, featuring 1M context window at $2/$10 per million tokens with $0.20/Mtok cache reads. Community engagement remains intense, with the **Mods extensibility proposal** (#91870, 223 comments) driving significant discussion around making Claude 10x more extensible via function hooks. Several regressions and bugs in the latest release are generating attention, including a critical freeze issue on Linux (#98023) and the now-reverted agents-md/diff mods changes.

---

## Releases

| Version | Summary |
|---------|---------|
| **v2.1.284** | Added Claude Sonnet 5.5 (`claude-sonnet-5-5`) as the default Sonnet model — now supports 1M context at $2/$10 per Mtok with $0.20/Mtok cache reads. Also added a "Yes, but ask again next time" answer to auto mode's prompt before read operations outside working directories. |

---

## Hot Issues

| Issue | Title | Why It Matters | Reactions |
|-------|-------|----------------|-----------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | Mods - make Claude 10x more extensible | **Top community priority.** Proposal for function hooks to dramatically extend Claude's capabilities. Team committed to shipping "in weeks." | 👍 128, 💬 223 |
| [#91188](https://github.com/anthropics/claude-code/issues/91188) | Make auto-memory MEMORY.md compaction threshold configurable | Users want control over when the 200-line/25KB compaction reminder triggers. Currently hardcoded. | 💬 58 |
| [#20697](https://github.com/anthropics/claude-code/issues/20697) | Sync Skills between Claude Desktop and Claude Code CLI | High-demand feature (157 👍) to unify Skills across Desktop and CLI for workflow portability. | 👍 157, 💬 48 |
| [#93482](https://github.com/anthropics/claude-code/issues/93482) | Cowork: silent stale write — content lags one commit behind | **Data loss risk.** Device commit reports success but files are stale on disk. Critical for collaborative workflows. | 💬 15 |
| [#57998](https://github.com/anthropics/claude-code/issues/57998) | CLAUDE_DATA_DIR env var to relocate on Windows | Windows users need to move the AppData folder for disk space or organizational reasons. | 👍 25, 💬 15 |
| [#91683](https://github.com/anthropics/claude-code/issues/91683) | bypassPermissions regression: prompts on `cd DIR && grep …` with deny rule | Regression in 2.1.259 breaks workflows. 27 👍 indicate widespread impact. | 👍 27, 💬 10 |
| [#94478](https://github.com/anthropics/claude-code/issues/94478) | Desktop app spawns ~17 git processes per second (Windows) | **Performance nightmare.** ~2M processes/day, causes kernel pool leak amplifying to ~6GB/day. | 💬 4 |
| [#96402](https://github.com/anthropics/claude-code/issues/96402) | SIGILL on x86-64 CPU without AVX (Linux) | Native installer 2.1.280 and npm 2.1.197 crash on older CPUs. 2.1.112 (JS bundle) works. | 💬 3 |
| [#98023](https://github.com/anthropics/claude-code/issues/98023) | 2.1.284 freezes on first Enter: sandbox glob expander walks `~` | **Critical regression.** New sandbox glob expander synchronously walks entire home directory for `~/**/…` denyRead patterns. Freezes on first Enter. | 💬 1 |
| [#97997](https://github.com/anthropics/claude-code/issues/97997) | Fable weekly usage counted (20%) with zero Fable requests | Usage tracking bug — users charged for Fable they never used. | 💬 1 |

---

## Key PR Progress

| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | Diff: first edit opens pane only when it has a file to list | OPEN | Fixes empty diff pane appearing on writes outside repo, to ignored files, or different worktrees. |
| [#98018](https://github.com/anthropics/claude-code/pull/98018) | mods: revert two changes (agents-md truncated reads, diff forced colors) | **CLOSED** | Reverts #96363 and #96364 — returns agents-md and diff mods to earlier behavior. |
| [#96364](https://github.com/anthropics/claude-code/pull/96364) | agents-md: auto-paginated Read no longer counts as delivering | **CLOSED** | Fixes nested AGENTS.md detection when Read is paginated due to token cap. |
| [#96363](https://github.com/anthropics/claude-code/pull/96363) | diff: pass --no-color so forced git colors don't empty diff body | **CLOSED** | Fixes empty diff body when `color.ui=always` or `color.diff=always` is configured. |
| [#97952](https://github.com/anthropics/claude-code/pull/97952) | ci: security hardening for GitHub Actions | OPEN | Adds egress firewall, permission restrictions, and OIDC hardening for Claude-calling workflows. |
| [#31204](https://github.com/anthropics/claude-code/pull/31204) | Add AI Learning Roadmap interactive canvas | **CLOSED** | New interactive canvas app for visualizing AI learning paths with React/Vite, node-and-edge graph system. |

---

## Feature Request Trends

1. **Extensibility & Mods** — The #91870 proposal for function hooks is the dominant theme. Community strongly favors a plugin-like architecture to extend Claude.
2. **Cross-platform Configuration** — CLAUDE_DATA_DIR (#57998), bash tab-completion (#91120), mobile-to-desktop session initiation (#96867).
3. **Skills/Workflow Sync** — #20697 requests unified Skills between Claude Desktop and CLI.
4. **Memory Customization** — Configurable MEMORY.md thresholds (#91188), persistent prose formatting preferences (#89274).
5. **MCP Enhancements** — User-scope MCP server shadowing warnings (#98035, now closed).

---

## Developer Pain Points

- **Performance & Resource Waste**: The Windows git process spawning bug (#94478) creating ~2M processes/day is a major resource drain.
- **Data Loss Concerns**: The Cowork stale write bug (#93482) silently commits without persisting data.
- **Regression Frustrations**: Multiple regressions in 2.1.284 (freeze on Enter #98023, permissions prompts #91683) and 2.1.280 (AVX crash #96402).
- **Platform Inconsistencies**: Worktree approval prompts on every switch (#94265), Code tab missing on Windows (#95987), heatmap data loss on macOS (#87772).
- **Usage Tracking Accuracy**: Fable usage counted incorrectly (#97997) leads to billing confusion.
- **Safety Classifier Over-blocking**: Legitimate admin UI code (#98017) and cybersecurity educational content (#98041) being blocked.

---

*Generated from github.com/anthropics/claude-code — 2026-09-29*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>Let me analyze this GitHub data and create a structured digest for the OpenAI Codex community.

The data is from 2026-09-29, so this is a future date. Let me extract the key information:

**Releases:**
- rust-v0.158.0 - with new features for copy-on-select, right-click paste, MCP OAuth support
- rust-v0.160.0-alpha.3, alpha.2
- rust-v0.159.0-alpha.13, alpha.12

**Top Issues (by comments):**
1. #48074 - Windows terminal flashing during requests (66 comments, 112 👍)
2. #48208 - Linux Desktop UI hangs after update (27 comments) - CLOSED
3. #26984 - MCP stdio servers leak pipe fds (26 comments)
4. #41622 - Add setting to disable automatic conversation recaps (23 comments)
5. #48059 - Windows terminal windows pop up (22 comments)
6. #47855 - Windows Desktop second message hangs (16 comments)
7. #40231 - Windows app-server killed with STATUS_CONTROL_C_EXIT (16 comments)
8. #47511 - Missing button for git commit and push (15 comments)
9. #48313 - Windows app launches to blank white screen (15 comments)
10. #48277 - CLI persistent terminal windows (15 comments)

**Top PRs:**
- #49130 - Move content-filter guidance into shared Responses retry handler
- #49127 - Deduplicate cloud and executor skill listings
- #49119 - Add recovery guidance to content-filter retries
- #49118 - Correct provider authentication storage documentation
- #49117 - Attribute analytics requests to each thread's product SKU
- #49114 - Point remote compaction tests at mock ChatGPT server


- #49112 - Add X11 primary selection and middle-click paste support
- #49106 - Add history pagination to agent command center
- #49105 - Resume unsent TUI input after reconnecting
- #49103 - Balance Windows Bazel test shards using duration estimates
- #49102 - Preserve SQLite vacuum modes and surface pool initialization errors
- #49100 - Reuse HTTP connection pool for remote plugin requests
- #49099 - Cache parsed plugin manifests across plugin workflows
- #49098 - Resolve Windows sandbox PowerShell fallbacks
- #49097 - Notify lifecycle extensions of compaction usage

I'm seeing continued improvements to the plugin system, with better resource management through caching and connection pooling. The team is addressing platform-specific issues, particularly around Windows testing and sandbox configuration. There's also focus on improving user experience with X11 support and better handling of unsent inputs.

**Discussions:**
1. #3057 - Codex using Python to make edits to files (21 comments)
2. #8503 - "usage limit reached" despite Code Review showing 100% (22 comments)
3. #39516 - CtxWise: local Codex context audits (2 comments)
4. #48926 - When did remote connections become easier? (1 comment)
5. #49129 - Codex CLI goes fullscreen (new)
6. #49107 - Physical ONCE/ALWAYS/REJECT for permission prompts (new)
7. #49001 - Codex Attachment Manager (new)
8. #48958 - Built with Codex: three-scene illustrated video starter
9. #48948 - Trusted App Development Agencies

The discussion around Python-based edits suggests users are interested in more flexible code modification options. There's also evident frustration with usage limit reporting inconsistencies, particularly around code review features. New community projects are emerging around permission management and content organization, with users sharing their own Codex-powered tools and applications.</think>

# OpenAI Codex Community Digest

**Date:** 2026-09-29

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.158.0** with significant TUI enhancements including configurable copy-on-select and right-click paste, plus Markdown formatting preservation for copied selections. Windows users continue to face terminal flashing issues (#48074, 66 comments, 112 👍) following recent updates—a persistent regression drawing significant community attention. The latest alpha releases (0.160.0-alpha.3, 0.159.0-alpha.13) indicate active development on upcoming features.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.158.0** | Stable | Configure copy-on-select and right-click paste in fullscreen TUI; copied transcript selections preserve Markdown formatting (#47639, #47896, #48118); connect to MCP servers requiring pre-registered OAuth client secrets |
| **rust-v0.160.0-alpha.3** | Alpha | Release 0.160.0-alpha.3 |
| **rust-v0.160.0-alpha.2** | Alpha | Release 0.160.0-alpha.2 |
| **rust-v0.159.0-alpha.13** | Alpha | Release 0.159.0-alpha.13 |
| **rust-v0.159.0-alpha.12** | Alpha | Release 0.159.0-alpha.12 |

---

## 3. Hot Issues

| Issue | Comments | 👍 | Summary |
|-------|----------|-------|---------|
| **#48074** | 66 | 112 | **Windows: terminal windows repeatedly flash during requests** — Regression in 0.157.0 causing severe UX disruption; users report flashing during every Codex request |
| **#48208** | 27 | 17 | **[Linux Desktop] UI hangs after update** — Thread hydration timeout; app-server remains responsive but UI stuck on spinner (CLOSED) |
| **#26984** | 26 | 7 | **MCP stdio servers leak pipe fds + orphan child processes** — Cumulative EMFILE errors ("Too many open files") on long-running sessions |
| **#41622** | 23 | 89 | **Add setting to disable automatic conversation recaps** — Highly requested config option for users who don't need AI-generated summaries |
| **#48059** | 22 | 44 | **Terminal windows repeatedly pop up on Windows** — Related to #48074; persistent window spam during normal use |
| **#47855** | 16 | 0 | **Windows Desktop: second message hangs indefinitely** — First message works, second never reaches app-server |
| **#40231** | 16 | 0 | **Windows: app-server killed with STATUS_CONTROL_C_EXIT** — Mid-command execution failures, regression from 26.818.5229 |
| **#47511** | 15 | 36 | **Missing button for git commit and push** — Regression removing visible commit/push UI in desktop app |
| **#48313** | 15 | 1 | **Windows app launches to permanent blank white screen** — After update to 26.924.1866.0 |
| **#48277** | 15 | 3 | **~20 persistent terminal windows open after update** — Windows CLI users experiencing window proliferation |

---

## 4. Key PR Progress

| PR | Summary |
|----|---------|
| **#49130** | Move content-filter guidance into shared Responses retry handler |
| **#49127** | Deduplicate cloud and executor skill listings before budgeting |
| **#49119** | Add recovery guidance to content-filter retries |
| **#49118** | Correct provider authentication storage documentation |
| **#49117** | Attribute analytics requests to each thread's product SKU |
| **#49112** | Add X11 primary selection and middle-click paste support |
| **#49106** | Add history pagination to agent command center |
| **#49105** | Resume unsent TUI input after reconnecting |
| **#49102** | Preserve SQLite vacuum modes and surface pool initialization errors |
| **#49099** | Cache parsed plugin manifests across plugin workflows |

---

## 5. Hot Discussions

### Ideas & Feedback
- **#49129** — [General] "Codex CLI goes fullscreen" (0 comments, 1 👍)
  > New CLI release now uses entire terminal window, enabling expanded diffs, pinned composer, and improved text copying.

- **#3057** — "Codex using Python to make edits to files" (21 comments, 34 👍)
  > Users observing Codex prefer Python scripting over File Edit tool—discussion on whether this indicates tool limitations.

- **#8503** — "usage limit reached" despite Code Review showing 100% remaining (22 comments, 9 👍)
  > GitHub Connector reports usage limits immediately on new PRs despite Code Review showing full allocation.

### Q&A
- **#48926** — "When did remote connections via Codex become easier to use?" (1 comment, 1 👍)
  > User notes simplified remote connection workflow compared to earlier Tailscale requirements.

### Show and Tell
- **#49107** — Physical ONCE/ALWAYS/REJECT for permission prompts (Windows) (0 comments, 1 👍)
  > Community project: desk device showing permission prompts on LCD with physical buttons.

- **#49001** — Codex Attachment Manager (0 comments, 1 👍)
  > Tool to selectively choose which images from conversation history to include in next message.

- **#48958** — Built with Codex: three-scene illustrated video starter (0 comments, 1 👍)
  > AI-assisted project providing editable starter for illustrated video creation.

---

## 6. Feature Request Trends

1. **Windows Stability & UX** — Multiple issues highlight Windows-specific regressions (terminal flashing, window popups, app-server crashes)
2. **Configurability** — Strong demand for disableable features: conversation recaps (#41622), auto-summaries
3. **TUI/CLI Enhancements** — Fullscreen mode, copy-on-select, X11 support, history pagination
4. **MCP Improvements** — Better OAuth handling, resource leak fixes
5. **Cross-Platform Consistency** — Linux UI hangs, macOS/Windows project chat separation issues

---

## 7. Developer Pain Points

- **Windows Regression Crisis** — Multiple high-comment issues (#48074, #48059, #48277, #48313) indicate recent Windows updates introduced significant usability problems
- **Usage Limit Confusion** — Discrepancy between reported usage limits and actual availability (#8503)
- **Linux Desktop Instability** — UI hangs, crashes on startup, stuck loading states
- **MCP Resource Leaks** — Long-running sessions hit file descriptor limits (#26984)
- **Auth/Remote Issues** — Cross-account pairing loops, WebSocket TLS failures, archive failures without accounts

---

*End of Digest — Data sourced from github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to generate a GitHub community digest for Gemini CLI based on the provided data. Let me analyze the data and create a structured digest.

Looking at the data:
1. **Releases**: There's one release - v0.63.0-nightly.20260929.gfe6350238 with a fix for auth issues
2. **Issues**: 50 issues total, top 30 provided with various bugs and feature requests
3. **PRs**: 35 PRs total, top 20 provided

Let me structure this according to the requirements:

1. **Today's Highlights** - Key summary
2. **Releases** - The nightly release
3. **Hot Issues** - 10 noteworthy issues
4. **Key PR Progress** - 10 important PRs
5. **Hot Discussions** - No discussion data was provided, so I'll omit this section
6. **Feature Request Trends** - Based on issues
7. **Developer Pain Points** - Based on issues

Let me select the most important items:

**Releases:**
- v0.63.0-nightly.20260929.gfe6350238 - fix for auth infinite loop

**Hot Issues (selecting 10):**
1. #22323 - Subagent recovery after MAX_TURNS reported as GOAL success (P1, 13 comments)
2. #29290 - Nested .gitignore patterns with trailing slash anchored incorrectly (P2, 10 comments)
3. #21409 - Generalist agent hangs (P1, 8 comments, 8 👍)
4. #28415 - GlobTool symlink path issues (P2, 7 comments)
5. #22745 - AST-aware file reads/search epic (P2, 7 comments)
6. #21968 - Gemini doesn't use skills and sub-agents enough (P2, 6 comments)


7. #28584 - Sandbox Dockerfile on Node 20 EOL (P1, 4 comments)
8. #29309 - Unbounded _execute recursion loop (P2, 5 comments)
9. #29311 - Insecure policy dirs skip permission checks (P2, 4 comments)
10. #29317 - Logger ignores LOG_LEVEL and logs without redaction (P1, 4 comments)

I'll continue selecting critical issues that highlight key technical challenges. These issues range from agent behavior problems to security vulnerabilities and performance concerns. The selected issues represent significant areas needing attention in the Gemini CLI project.

The next set of PRs appears to focus on core infrastructure improvements, particularly around policy enforcement, sandboxing, and logging mechanisms. Each PR targets specific technical debt or security gaps in the current implementation.

Key areas include fixing input handling, addressing policy directory permissions, resolving security logging concerns, and improving process management. The changes span multiple system components, indicating a comprehensive approach to system stability and security enhancement.

The proposed modifications tackle critical technical challenges like UTF-8 offset handling, session exit processes, and tool output formatting, demonstrating a proactive approach to system refinement.</think>

# Gemini CLI Community Digest — 2026-09-29

## Today's Highlights

Today's snapshot shows active progress on security hardening and bug fixes across core, agent, and enterprise components. The team addressed a critical auth loop vulnerability and closed several high-priority issues around sandbox recursion limits, policy directory permissions, and logging redaction. The release cadence continues with v0.63.0-nightly.

---

## Releases

**v0.63.0-nightly.20260929.gfe6350238**  
🔗 [Release](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-n) | [PR #29448](https://github.com/google-gemini/gemini-cli/pull/29448)

- **Fix(auth):** Prevents infinite auth loop caused by file contention, headless keyring issues, and supervisor state drops

---

## Hot Issues

| # | Issue | Priority | Why It Matters | Community |
|---|-------|----------|----------------|-----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success, hiding interruption | P1 | Subagents hit max turns but falsely report success—misleads users about task completion | 13 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs forever | P1 | Core functionality blocker—CLI defers to generalist agent and never returns | 8 comments, 8 👍 |
| [#28584](https://github.com/google-gemini/gemini-cli/issues/28584) | Sandbox Dockerfile on Node 20 (EOL April 2026) | P1 | Security risk—using deprecated Node version in production containers | 4 comments |
| [#29317](https://github.com/google-gemini/gemini-cli/issues/29317) | Logger ignores LOG_LEVEL and logs request bodies without redaction | P1 | Security/privacy—credentials may be exposed in logs | 4 comments |
| [#29311](https://github.com/google-gemini/gemini-cli/issues/29311) | Insecure user/workspace policy dirs skip permission checks | P2 | Policy directory validation only runs on system dir, leaving user dirs unchecked | 4 comments |
| [#29290](https://github.com/google-gemini/gemini-cli/issues/29290) | Nested .gitignore patterns with trailing slash anchored incorrectly | P2 | `build/` pattern in nested .gitignore only matches immediate directory, not recursive | 10 comments |
| [#28415](https://github.com/google-gemini/gemini-cli/issues/28415) | GlobTool returns raw symlink paths but uses resolved paths internally | P2 | Causes read_file/edit failures on macOS and symlinked workspaces | 7 comments |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini does not use skills and sub-agents enough | P2 | Agent underutilizes custom skills despite explicit relevance—reduces automation value | 6 comments |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC: Assess impact of AST-aware file reads, search, and mapping | P2 | Strategic investigation for reducing token noise and improving precision | 7 comments, 1 👍 |
| [#29309](https://github.com/google-gemini/gemini-cli/issues/29309) | Unbounded _execute recursion on sandbox_expansion_required can loop forever | P2 | Can cause heap exhaustion and crash—Denial of service vector | 5 comments |

---

## Key PR Progress

| # | PR | Area | Status | Summary |
|---|-----|------|--------|---------|
| [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) | fix(core): secure non-system policy directories against write permissions | enterprise | **Merged** — Extends `isDirectorySecure` validation to all policy tiers (user, workspace) |
| [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) | fix(a2a-server): honour LOG_LEVEL and keep credentials out of log | security | **Merged** — Respects LOG_LEVEL env var and prevents credential leakage in logs |
| [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) | fix(core): bound how often one call may expand the sandbox | core | **Merged** — Adds recursion depth limit to prevent infinite loop on repeated `sandbox_expansion_required` |
| [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) | fix(sdk): honour AgentShellOptions env and timeoutSeconds | agent | **Merged** — Respects env vars and timeout in shell exec, fixing hang on long-running commands |
| [#29324](https://github.com/google-gemini/gemini-cli/pull/29324) | fix(core): don't anchor nested .gitignore patterns with trailing slash | core | **Merged** — Fixes #29290 by counting only slashes before the last character |
| [#29330](https://github.com/google-gemini/gemini-cli/pull/29330) | fix(cli): keep input typed before logger answers, read once | core | **Merged** — Fixes StrictMode violation in useInputHistoryStore |
| [#29436](https://github.com/google-gemini/gemini-cli/pull/29436) | fix(cli): prevent 100% CPU hang from @ within quotes in stdin | core | **Open** — Fixes catastrophic backtracking when `@` appears in quoted strings |
| [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) | fix(core): use UTF-8 offsets for web-fetch citations | agent | **Open** — Handles multibyte characters properly in citation positioning |
| [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) | fix(cli,core): prevent process hang on session exit | core | **Open** — Proper stdin cleanup to prevent event loop hangs |
| [#29539](https://github.com/google-gemini/gemini-cli/pull/29539) | fix(core): enable autonomous plan execution in non-interactive mode | core | **Open** — Allows plan mode to execute autonomously in headless environments |

---

## Feature Request Trends

Based on issue analysis, the following themes dominate feature discussions:

1. **AST-aware tooling** — Multiple issues (#22745, #22746) request AST-based file reads and search to reduce token noise and improve precision in codebase investigation
2. **Improved subagent visibility** — Requests for trajectory sharing (#22598) and better bug report context (#21763)
3. **Cross-workspace session management** — Feature request for `--list-all-sessions` flag (#28595)
4. **Enhanced agent self-awareness** — The agent should better understand its own CLI flags and hotkeys (#21432)
5. **Browser agent resilience** — Auto session takeover and lock recovery for persistent browser profiles (#22232)

---

## Developer Pain Points

Recurring frustrations surfaced in recent issues:

- **Agent hangs and infinite loops** — Multiple reports of CLI freezing during generalist agent delegation (#21409), subprocess execution (#29314), and session exit (#29435)
- **Configuration overrides ignored** — Browser agent ignores settings.json (#22267), shell options are silently dropped (#29316)
- **Path resolution inconsistencies** — GlobTool symlink handling breaks file operations on macOS (#28415)
- **Billing model confusion** — Users confused by CLI's claim of using "internal quota" leading to unexpected costs (#27668)
- **Destructive behavior control** — Agent uses risky commands (git reset --force) without sufficient warning (#22672)

---

*No discussion data was available for this period.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to generate a GitHub Copilot CLI community digest based on the provided data. Let me analyze the data and structure it properly.

From the data:
1. Latest Releases (last 24h):
- v1.0.90-1: Fixed MCP OAuth sign-in reuse issue and withdrawn running prompts
- v1.0.90-0: Fixes and changes
- v1.0.89: 2026-09-28 - Left-click support for ask_user, Claude Code rule files support, session blue dot indicator
- v1.0.89-7: Fixes and changes
- v1.0.89-6: PR creation follows templates, TGREP_FILE_COUNT_THRESHOLD config, shell output fix

2. Latest Issues (49 total, showing top 30):
- Several open issues with authentication problems
- OAuth redirect URI port mismatch
- Nix/direnv environments
- Windows issues
- MCP related issues

3. Latest Pull Requests: 0 items (none in last 24h)

Now let me create the digest with the requested sections. I'll pick the most noteworthy items:

**Releases** - I have several versions to cover

**Hot Issues** - I'll pick 10 important ones:
1. #1274 - CLI constantly getting 400 errors for invalid request body (29 comments, 12 👍)
2. #4929 - Process-local auth token stops refreshing (13 comments)
3. #4971 - Every hour Authorization error (3 comments)
4. #4606 - Google Workspace MCP OAuth fails (3 comments)
5. #4968 - OAuth redirect URI port mismatch (2 comments)
6. #4985 - MCP server env secret placeholders not passed (1 comment)
7. #4972 - Windows MCP worker survives exit (3 comments)
8. #4983 - Remote MCP server slow initialize fails
9. #1838 - CLI hangs in Nix/direnv (7 comments, 12 👍)


10. #2216 - Text selection low contrast (6 comments)

I notice several platform-specific and environment-related issues emerging. The problems span authentication, OAuth, and environment configuration across different systems like Windows, Nix, and direnv. These issues highlight the complexity of cross-platform CLI development and the need for robust environment-specific testing and implementation.

The key challenges involve OAuth authentication flows, particularly with Google Workspace, and environment-specific configuration problems. I'll focus on the most critical and commented issues that represent broader platform compatibility challenges.</think>

# GitHub Copilot CLI Community Digest

**Date:** 2026-09-29

---

## 1. Today's Highlights

The Copilot CLI team shipped a rapid succession of releases (v1.0.89 through v1.0.90-1) addressing critical OAuth and session handling bugs. Notable fixes include MCP OAuth token caching issues with Datadog, withdrawn prompts staying removed after session resume, and improved PR template support. However, authentication-related issues remain hotly discussed, with users reporting recurring authorization errors every hour and OAuth redirect URI port mismatches breaking MCP server logins.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.90-1** | 2026-09-29 | **Fixed:** MCP OAuth sign-in to servers such as Datadog reuses a still-valid cached token. Withdrawn running prompts stay removed after session resume. |
| **v1.0.90-0** | 2026-09-29 | Fixes and changes |
| **v1.0.89** | 2026-09-28 | Left-clicking supported ask_user and elicitation form inputs focuses them and places cursor at clicked position. Added support for Claude Code rule files in `.claude/rules` as custom instructions. Sessions in sidebar show blue dot when they finished a turn you have not opened. |
| **v1.0.89-7** | 2026-09-28 | Fixes and changes |
| **v1.0.89-6** | 2026-09-28 | **Improved:** PR creation now follows repository pull request templates, preserving required sections and checklist structure. Configure automatic indexed search activation with `TGREP_FILE_COUNT_THRESHOLD`. **Fixed:** Shell output no longer shows trailing command completion metadata. |

---

## 3. Hot Issues

| # | Issue | Summary | Reactions |
|---|-------|---------|-----------|
| **#1274** | [CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274) | ~95% of code review attempts on diff files result in 400 errors. Users report server-side validation issues or invalid request crafting. Debug logs included. | 29 comments, 12 👍 |
| **#4929** | [Process-local auth token stops refreshing; all prompts fail until restart](https://github.com/github/copilot-cli/issues/4929) | Long-running Copilot CLI process permanently loses authentication. Every prompt returns authorization error. `/login` does not recover—only restart works. | 13 comments |
| **#1838** | [CLI hangs in Nix/direnv environments due to subprocess I/O deadlock](https://github.com/github/copilot-cli/issues/1838) | **CLOSED.** Copilot CLI v0.0.421 hangs indefinitely when launched from Nix flake-based dev environments managed by direnv. Bash tool fails with timeout. | 7 comments, 12 👍 |
| **#2216** | [Text selection highlight has very low contrast on dark terminal backgrounds](https://github.com/github/copilot-cli/issues/2216) | **CLOSED.** Selection background color (dark purple/indigo) is nearly indistinguishable from dark terminal backgrounds, making selected text unreadable. | 6 comments, 2 👍 |
| **#3392** | [Bash tool breaks on NixOS with version >=1.0.49](https://github.com/github/copilot-cli/issues/3392) | **CLOSED.** Bash tool errors with "Failed to start bash process" on NixOS when updated to v1.0.49 or 1.0.50. | 5 comments, 13 👍 |
| **#2958** | [Support per-mode default model configuration](https://github.com/github/copilot-cli/issues/2958) | **CLOSED.** Feature request to allow users to configure a default AI model per interaction mode (plan vs. autopilot) via CLI config. | 5 comments, 16 👍 |
| **#1250** | [copilot command silently fails on Windows due to getCACertificates('system') error](https://github.com/github/copilot-cli/issues/1250) | **CLOSED.** CLI silently exits without output on Windows 11, making diagnosis extremely difficult. | 5 comments, 4 👍 |
| **#4971** | [Every hour I get Authorization error](https://github.com/github/copilot-cli/issues/4971) | Authorization errors occurring approximately every hour. Running `/login` or `mcp reload` does not fix the issue. | 3 comments |
| **#4606** | [Google Workspace MCP OAuth fails on accounts.google.com trailing-slash issuer mismatch](https://github.com/github/copilot-cli/issues/4606) | Native HTTP MCP authentication fails for Google's official Workspace MCP endpoints before browser authorization flow begins due to issuer mismatch. | 3 comments, 1 👍 |
| **#4968** | [OAuth redirect URI port mismatch breaks login to most MCP servers](https://github.com/github/copilot-cli/issues/4968) | CLI publishes CIMD with fixed loopback redirect URI but binds ephemeral port at runtime, causing OAuth failures for most MCP servers. | 2 comments |

---

## 4. Key PR Progress

No pull requests were updated in the last 24 hours.

---

## 5. Hot Discussions

No discussion data was provided in the source data.

---

## 6. Feature Request Trends

Based on the issue analysis, the most requested feature directions are:

1. **Enhanced Authentication Resilience**
   - Auto-refreshing tokens without manual intervention
   - Better error messaging for auth failures
   - Cross-platform OAuth consistency (especially Windows and MCP)

2. **Platform-Specific Compatibility**
   - Improved Nix/NixOS support beyond v1.0.49
   - Better Windows integration (terminal handling, process management)
   - direnv environment handling

3. **Customization & Configuration**
   - Per-mode model selection (plan vs. autopilot)
   - Claude Code rule file support (recently shipped in v1.0.89)
   - Configurable search thresholds

4. **UX Improvements**
   - Better text selection contrast for accessibility
   - PR template integration (recently shipped)
   - Multi-line paste support on Windows

---

## 7. Developer Pain Points

The community's most recurring frustrations:

1. **Authentication Instability** — Multiple reports of tokens expiring hourly and not auto-refreshing, forcing users to restart the CLI or re-authenticate repeatedly.

2. **OAuth/MCP Integration Failures** — Google's Workspace OAuth and generic MCP server logins are breaking due to redirect URI mismatches and issuer validation issues.

3. **NixOS Compatibility** — The CLI breaks on Nix systems since v1.0.49, preventing developers in that ecosystem from using Copilot CLI effectively.

4. **Poor Error Diagnostics** — Silent failures (especially on Windows) and 400 errors without clear remediation steps frustrate debugging.

5. **Platform Inconsistencies** — Different behavior across platforms (Windows vs. macOS/Linux) for core features like MCP secret passing and terminal handling.

---

*Generated from github.com/github/copilot-cli | Data period: 2026-09-28 to 2026-09-29*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest into Simplified Chinese. Let me follow the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

# OpenCode 社区周报 — 2026-09-29

## 1. 今日要闻

OpenCode 团队发布了 **v1.18.33** 版本，带来多项稳定性修复，包括为 Cloudflare AI Gateway 模型正确处理超时响应、改进 MCP 浏览器启动失败时的错误报告，以及在调试配置中隐藏凭据信息。过去 24 小时内社区依然非常活跃，共收到 50 个新 issue 和 50 个 pull request。GPT-5.6 Sol 模型服务器过载问题 (#39653) 获得广泛关注，已有 17 条评论和 11 个 👍 支持。

## 2. 版本发布

### v1.18.33 — 2026-09-29

| 类别 | 变更内容 |
|------|----------|
| **Bugfix** | Cloudflare AI Gateway 模型现在会正确遵循提供商响应和流式超时设置。([@danlapid](https://github.com/danlapid)) |
| **Bugfix** | 当 MCP 浏览器启动器立即退出时，现在会报告启动失败错误。 |
| **Bugfix** | 调试配置输出现在会隐藏凭据和敏感头信息。 |


| **Bugfix** | Gemini thinking 默认行为已明确（在源码中截断）。 |

**[查看完整发布说明 →](https://github.com/anomalyco/opencode/releases)**

---

## 3. 热门 Issue

| # | Issue | 摘要 | 关注度 |
|---|-------|--------|------------|
| 1 | [#39653](https://github.com/anomalyco/opencode/issues/39653) | **GPT-5.6 Sol 服务器过载** — 用户在使用 Sol 模型时反复遇到服务器过载错误，而 Pi 和 Codex 模型则正常运行。 | 17

我注意到这个问题涉及不同 AI 模型的服务器响应异常。用户报告了特定的 Sol 模型存在稳定性问题，而其他模型如 Pi 和 Codex 工作正常。这可能暗示了底层基础设施或服务配置的潜在不一致性。需要进一步调查服务器负载、请求处理机制和资源分配策略。

评论和点赞数量显示了用户对这一技术问题的关注程度。

Windows 11 用户在使用 Ollama 和 Gmail 时遇到集成困难，尽管硬件配置充足（64GB RAM）。最新的 UI 更新引入了回归问题，导致模式切换功能失效。用户报告查询响应时间显著延长，从 10 分钟到 60 分钟不等。还有关于轻量级聊天模式的技术反馈，以及 GLM-5.2 模型在不同使用场景下可能出现 HTTP 429 错误的问题。

Windows 桌面应用启动超时，Kimi K3 模型的 Token 使用标签存在误导性，GLM-5.2 未显示推理过程。移动端 UI 存在侧边栏导航问题，影响用户体验。

最新代码更新聚焦于增强系统稳定性和用户体验。核心改进包括路由缓存优化、图像裁剪稳定性、推理轮次处理、中文本地化以及模型推理能力支持。

重点修复涉及 OAuth 令牌刷新并发处理、错误信息展示、循环命令功能和最近关闭标签页的快速恢复机制。同时解决了 WASM 加载相关的技术问题。

当前重点开发方向集中在文档编辑、用户界面定制和会话管理功能上。开发团队正在推进多项增强用户体验的创新特性。

技术痛点主要集中在网络连接、提供商集成和会话稳定性方面，存在较高的技术挑战。桌面 UI 回归问题也引起开发者关注，需要持续优化解决。

账单和使用情况的不确定性进一步增加了开发复杂性。</think>

# OpenCode 社区周报 — 2026-09-29

## 1. 今日要闻

OpenCode 团队发布了 **v1.18.33** 版本，带来多项稳定性修复，包括为 Cloudflare AI Gateway 模型正确处理超时响应、改进 MCP 浏览器启动失败时的错误报告，以及在调试配置中隐藏凭据信息。过去 24 小时内社区依然非常活跃，共收到 50 个新 issue 和 50 个 pull request。GPT-5.6 Sol 模型服务器过载问题 (#39653) 获得广泛关注，已有 17 条评论和 11 个 👍 支持。

## 2. 版本发布

### v1.18.33 — 2026-09-29

| 类别 | 变更内容 |
|------|----------|
| **Bugfix** | Cloudflare AI Gateway 模型现在会正确遵循提供商响应和流式超时设置。([@danlapid](https://github.com/danlapid)) |
| **Bugfix** | 当 MCP 浏览器启动器立即退出时，现在会报告启动失败错误。 |
| **Bugfix** | 调试配置输出现在会隐藏凭据和敏感头信息。 |
| **Bugfix** | Gemini thinking 默认行为已明确（在源码中截断）。 |

**[查看完整发布说明 →](https://github.com/anomalyco/opencode/releases)**

---

## 3. 热门 Issue

| # | Issue | 摘要 | 关注度 |
|---|-------|--------|------------|
| 1 | [#39653](https://github.com/anomalyco/opencode/issues/39653) | **GPT-5.6 Sol 服务器过载** — 用户在使用 Sol 模型时反复遇到服务器过载错误，而 Pi 和 Codex 模型则正常运行。 | 17 条评论，11 个 👍 |
| 2 | [#37762](https://github.com/anomalyco/opencode/issues/37762) | **Ollama 集成问题** — Windows 11 用户拥有 64GB 内存，但无法让 Ollama + Gmail 正常工作，尽管配置正确。 | 9 条评论 |
| 3 | [#38655](https://github.com/anomalyco/opencode/issues/38655) | **无法切换 plan/build 模式** — 最新更新后的回归问题导致 UI 中无法切换模式。 | 6 条评论 |
| 4 | [#39527](https://github.com/anomalyco/opencode/issues/39527) | **响应速度极慢** — 用户报告最新更新后，简单查询也要等待 10-60 分钟。 | 5 条评论 |
| 5 | [#39399](https://github.com/anomalyco/opencode/issues/39399) | **简易聊天功能请求** — opencode.json 中的简易聊天仍会向模型发送提示；用户想要真正的轻量模式。 | 5 条评论 |
| 6 | [#37666](https://github.com/anomalyco/opencode/issues/37666) | **NVIDIA API 429 错误** — 通过 OpenCode 使用 GLM-5.2 时返回 HTTP 429，但直接调用 API 则正常。 | 4 条评论 |
| 7 | [#37748](https://github.com/anomalyco/opencode/issues/37748) | **Kimi K3 Token 使用量困惑** — "2x usage" 标签存在误导；用户账单显示相反行为。 | 4 条评论 |
| 8 | [#39494](https://github.com/anomalyco/opencode/issues/39494) | **Sidecar 启动超时** — Windows Desktop 无法启动，报错 "Sidecar did not become ready within 60000ms"。 | 4 条评论 |
| 9 | [#39553](https://github.com/anomalyco/opencode/issues/39553) | **GLM 5.2 思考过程未显示** — GLM-5.2 不像其他模型那样显示思考/thinking 提示。 | 4 条评论 |
| 10 | [#37746](https://github.com/anomalyco/opencode/issues/37746) | **移动端侧边栏 UX 问题** — 会话侧边栏在选择后保持打开状态，遮挡窄屏上的内容。 | 3 条评论 |

---

## 4. 关键 PR 进展

| PR | 作者 | 描述 |
|----|------|------|
| [#51981](https://github.com/anomalyco/opencode/pull/51981) | opencode-agent[bot] | **fix(ai): 为 Messages 路由启用缓存** — 为六个 Messages 路由（Alibaba、Cloudflare、Meta、MiniMax、Moonshot、ZAI）启用默认缓存策略。 |
| [#51986](https://github.com/anomalyco/opencode/pull/51986) | carson2222 | **fix(core): 保持图像裁剪在多轮对话中稳定** — 修复 `boundImages` 重复计算截止索引导致图像保留不一致的问题。 |
| [#51090](https://github.com/anomalyco/opencode/pull/51090) | opencode-agent[bot] | **fix(app): 在纯推理轮次中保持 Working 状态** — 在纯推理轮次中隐藏 "Used 1 Thought" 行，保留 Working 可见。 |
| [#51983](https://github.com/anomalyco/opencode/pull/51983) | imyu37 | **fix(i18n): 对齐 zh/zht 翻译** — 修正中文locale中的术语错误（例如 "代理" → "智能体"）。 |
| [#50283](https://github.com/anomalyco/opencode/pull/50283) | zhengkaics | **fix(core): 暴露模型推理能力** — 恢复 models.dev 目录中被 V2 能力构建丢弃的 `reasoning` 标志。 |
| [#51979](https://github.com/anomalyco/opencode/pull/51979) | holny | **fix(opencode): 共享并发的 MCP OAuth 刷新** — 实现单次获取以去重并行 OAuth 令牌刷新请求。 |
| [#51978](https://github.com/anomalyco/opencode/pull/51978) | rekram1-node | **fix(ai): 显示提供商错误体** — 当无法识别标准消息字段时，显示提供商的错误说明。 |
| [#51974](https://github.com/anomalyco/opencode/pull/51974) | rudolf-blue | **feat(opencode): 添加 /loop 命令** — 新增基于计时器的循环命令，支持计数/重试直到成功场景。 |
| [#51973](https://github.com/anomalyco/opencode/pull/51973) | iamdavidhill | **feat(app): 显示最近关闭的标签页菜单** — 右键点击可重新打开已关闭会话，显示项目头像和溢出标题。 |
| [#51969](https://github.com/anomalyco/opencode/pull/51969) | rkilchmn | **fix(opencode): 修复 LLM bash 工具中的 WASM 加载错误** — 修复 LLM 运行 bash 工具时 `undefined is not an object` 错误。 |

---

## 5. 热门讨论

*本次数据源中未提供讨论数据。*

---

## 6. 功能需求趋势

以下主题从今天的 issue 和 PR 中涌现：

| 主题 | 相关内容 |
|------|----------|
| **文档编辑** | docx/HTML/Markdown 的 WYSIWYG 预览 (#39611) |
| **UI 定制** | TUI 中的光标样式选项 (#39338)、主题自动切换 (#38506) |
| **会话管理** | 最近关闭的标签页菜单 (#51973)、plan/build 模式切换 (#38655) |
| **命令扩展** | 用于迭代的 /loop 命令 (#51974) |
| **模型功能** | 推理能力暴露 (#50283)、GLM 思考过程显示 (#39553) |

---

## 7. 开发者痛点

| 痛点 | 出现频率 | 示例 |
|------|----------|------|
| **网络/连接问题** | 高 | #39316（LAN oMLX ENETUNREACH）、#39293（上游故障）、#39653（服务器过载） |
| **提供商集成 bug** | 高 | #37666（NVIDIA 429）、#39399（简易聊天无效）、#37762（Ollama 配置） |
| **会话稳定性** | 中 | #39515（崩溃）、#39494（sidecar 超时）、#39527（响应慢） |
| **桌面 UI 回归** | 中 | #38655（模式切换）、#39455（下拉框失效）、#37746（移动端侧边栏） |
| **账单/用量困惑** | 中 | #37748（Kimi K3 用量困惑）、#39188（免费额度超限）、#39470（Go→Zen 余额迁移） |

---

*本周报基于 2026-09-29 的 GitHub 数据生成*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Chinese. I need to:
1. Translate all headings, body text, and content
2. Keep all formatting (tables, lists, code, etc.)
3. Keep technical terms, URLs, issue numbers, file paths, etc. in their original form
4. Use natural technical Chinese appropriate for a developer newsletter

Let me go through and translate section by section:

**Title:**
# Pi Community Digest — 2026-09-29
→
# Pi 社区简报 — 2026-09-29

**Today's Highlights:**
The Pi community sees active development across multiple fronts. Notable PRs introduce managed llama.cpp server mode and codemode with MCP support, while the issue tracker highlights persistent problems with reasoning models hitting context ceilings and ESC interrupting AI thinking. A new discussion proposes making GitHub releases immutable for supply-chain security.

→
今日焦点：Pi 社区多方面开发进展活跃。多个 PR 引入了托管 llama.cpp 服务器模式及 Codemode MCP 支持；问题追踪器则持续关注推理模型触及上下文上限以及 ESC 键中断 AI 思考的问题。新讨论提议使 GitHub 发行版不可变，以增强供应链安全。

---

**Releases:**
No new releases in the past 24 hours.
→
过去 24 小时内无新发行版。

---

**Hot Issues:**
1. **[#10031](https://github.com/earendil-works/pi/issues/10031)** — **Pi sporadically stuck in "Working..." when thinking is stopped with ESC** *(17 comments, Open)*
   - Users report Pi freezes in "Working..." state when ESC is pressed to stop thinking. Only Ctrl+C and `pi -c` resume works. Present since ~v0.84.0 across machines. **High-impact usability issue.**
   
   问题标题翻译：#10031 — ESC 键停止思考时 Pi 偶发卡在"Working..."状态 *（17 条评论，已开启）*
   - 用户反馈按 ESC 键停止思考时 Pi 会卡在"Working..."状态。

只有 Ctrl+C 和 `pi -c` 恢复才能解决。此问题自 v0.84.0 起在多台机器上出现。**高影响力可用性问题。**

#3159 问题显示 edit tool 被终止并超时，涉及 9 条评论和已关闭状态。Qwen 27b 在新版本中频繁收到 edit tool "terminated" 错误，可能是 edit 操作超时不足导致。

#9508 问题涉及 pi-ai 向兼容提供商发送不支持的 OpenAI 特定请求字段，有 8 条评论和已开启状态。Pi 发送的 OpenAI 特定字段、角色和认证头被兼容提供商拒绝，返回 400/422 错误，导致原本可用的提供商配置失效。

#10033 问题关于压缩提示包含所有思考文本并超出上下文窗口，共 7 条评论现已关闭。自动压缩在长会话中使用推理模型（如 DeepSeek V4.1）时失败，因为 `serializeConversation()` 包含完整思考块，超出令牌限制。

#9974 问题指出 pi 错误处理 llama.cpp 返回的 Responses API 工具调用，有 6 条评论已关闭。使用 llama.cpp 的 Responses API 时，Pi 执行重复和损坏的工具调用，问题出在 SSE 流处理。

#9905 问题关于 Anthropic thinking.display 始终以"摘要"形式发送，共 6 条评论已关闭。无法通过 CLI 更改 Anthropic 模型的 `thinking.display`，目前仅支持"摘要"或"省略"。

#9409 问题涉及推理模型在上下文上限时永久卡住，共 4 条评论已开启。推理模型的会话在上下文上限时永久停滞，`stopReason` 显示为"length"。自动压缩无法恢复。**长会话的关键问题。**

#10074 问题关于 Anthropic 工具调用中非 ASCII 编辑参数损坏，共 4 条评论已开启。编辑包含韩文的文件时操作频繁失败，有时会损坏文件。`u` 从 `\uXXXX` 中丢失导致控制字符。

#6393 问题允许禁用 /share，共 3 条评论已关闭—

无操作。安全考虑：`/share` 命令容易泄露敏感数据。已关闭，参考更优雅的解决方案 #6358。

#10077 问题涉及 llama.cpp 模型的 contextWindow 重置为 128000，共 3 条评论已开启。`models-store.json` 中的上下文窗口错误重置为 128000，尽管 `presets.ini` 设置为 65536。

---

关键 PR 进展：

1. **[#10146](https://github.com/earendil-works/pi/pull/10146)** — **fix(coding-agent): preserve pasted text during editor restoration** *(Open)*
   - Prevents Pi from submitting literal `[paste #x +y lines]` markers instead of actual pasted text when restoring queued messages.

#10146 处理编辑器恢复时保留粘贴文本，防止 Pi 在恢复排队消息时提交字面量 `[paste #x +y lines]` 标记而非实际粘贴文本。

2. **[#10040](https://github.com/earendil-works/pi/pull/10040)** — **feat(coding-agent): Codemode and MCP** *(Open)*
   - Major new feature: runs model-written JavaScript in QuickJS WASM VM inside a worker. Enables per-session store, model catalog access, and classifiers.

#10040 引入 Codemode and MCP，在 worker 中的 QuickJS WASM VM 内运行模型编写的 JavaScript，支持每会话存储、模型目录访问和分类器。

3. **[#10122](https://github.com/earendil-works/pi/pull/10122)** — **feat(coding-agent): add managed llama.cpp server mode** *(Open)*
   - Pi can now auto-start llama-server with detached supervisor, random port/API key. Server starts on first model use, stops when last pi disconnects.

#10122 实现托管 llama.cpp 服务器模式，Pi 可通过分离的监督器自动启动 llama-server，使用随机端口和 API 密钥。服务器在首次模型调用时启动，最后一个 pi 断开连接时停止。

4. **[#10035](https://github.com/earendil-works/pi/pull/10035)** — **feat(coding-agent): Virtual models** *(Closed)*
   - Extensions can register virtual models via `pi.registerVirtualModel()`. Routes requests to physical models based on routing policies.

#10035 添加虚拟模型支持，扩展可通过 `pi.registerVirtualModel()` 注册虚拟模型，根据路由策略将请求转发至物理模型。

5. **[#9714](https://github.com/earendil-works/pi/pull/9714)** — **feat(ai): support Azure Foundry Chat Completions deployments** *(Open)*
   - Extends Azure provider beyond Responses API to support Chat Completions (e.g., DeepSeek V4 Pro on Foundry).

#9714 扩展 Azure 提供商支持，除 Responses API 外还支持 Chat Completions（如 Foundry 上的 DeepSeek V4 Pro）。

6. **[#10136](https://github.com/earendil-works/pi/pull/10136)** — **fix(coding-agent,tui): paste Finder file paths instead of icons** *(Closed)*
   - macOS: `Ctrl+V` now pastes original file paths instead of Finder file icons. Reads copied Finder file URLs before clipboard image data.

#10136 修复 macOS 上的文件路径粘贴行为，`Ctrl+V` 现在粘贴原始文件路径而非 Finder 文件图标，优先读取复制的 Finder 文件 URL。

7. **[#10142](https://github.com/earendil-works/pi/pull/10142)** — **fix(ai): send reasoning effort to OpenAI models on Bedrock Converse** *(Open)*
   - Bedrock Converse adapter now sends thinking fields for OpenAI models (previously only Claude). Fixes reasoning effort always defaulting to "medium".

#10142 修复 Bedrock Converse 适配器，现在为 OpenAI 模型发送 thinking 字段（此前仅支持 Claude），修正推理努力始终默认为"medium"的问题。

8. **[#10135](https://github.com/earendil-works/pi/pull/10135)** — **fix(coding-agent): normalise compaction usage to prevent footer crash on resume** *(Closed)*
   - Persisted `summaryUsage` normalized to prevent footer crash on session resume after compaction.

#10135 规范化 `summaryUsage` 以防止压缩后会话恢复时页脚崩溃。

9. **[#10134](https://github.com/earendil-works/pi/pull/10134)** — **fix(coding-agent): preserve tool prompt fields in built-in-tool-renderer example** *(Closed)*
   - Example now correctly copies tool prompt fields beyond just description, parameters, and execute.

#10134 修复内置工具渲染器示例，正确保留工具提示字段（包括描述、参数和执行信息）。

10. **[#9993](https://github.com/earendil-works/pi/pull/9993)** — **feat(ai,coding-agent): add Anthropic Claude support to Google Vertex AI provider** *(Closed)*
    - Vertex AI Model Garden now supports Anthropic Claude models (Opus, Sonnet, Haiku) using Google Cloud credentials.

#9993 在 Vertex AI Model Garden 添加 Anthropic Claude 模型支持（Opus、Sonnet、Haiku），使用 Google Cloud 凭据。

---

热门讨论：

**意见 / 功能请求：**

- **[#10126](https://github.com/earendil-works/pi/discussions/10126)** — *使 GitHub 发行版不可变？*（2 👍）
  - 提议为供应链安全使 GitHub 发行版不可变，参考 terragrunt 实现。

- **[#10128](https://github.com/earendil-works/pi/discussions/10128)** — *添加禁用分享功能？*（1 👍）
  - 跟进已关闭的问题 #6393，质疑 `/share` 是否应允许禁用。

**展示：**

- **[#10069](https://github.com/earendil-works/pi/discussions/10069)** — *展示与分享：agent-chat — 独立 Pi 代理的点对点消息*（1 👍）
  - 支持跨不同工作树的独立 Pi 会话共享 Docker 容器、端口和数据库的扩展，无需编排器。

---

从问题和讨论中提取的关键主题包括模型/提供商兼容性、推理模型改进、安全/隐私、本地模型支持、TUI/UX 优化和扩展系统。其中推理模型在上下文上限处卡顿是一个主要痛点，其次是 ESC 停止 AI 思考导致频繁冻结。

编辑工具超时、本地模型失败、非 ASCII 文件损坏、macOS 剪贴板混淆等问题也需要关注。

大扩展加载性能影响显著，70 多个扩展导致会话创建延迟从 4 秒增加到 280 秒。翻译时需要使用简体中文标题如"发布动态"、"热点问题"等来保持格式一致性。

日期格式应为 2026-09-29。保持链接、编号和文件路径不变，将所有中文内容转换为简体中文。</think>

# Pi 社区简报 — 2026-09-29

## 今日焦点

Pi 社区多方面开发进展活跃。多个 PR 引入了托管 llama.cpp 服务器模式及 Codemode MCP 支持；问题追踪器则持续关注推理模型触及上下文上限以及 ESC 键中断 AI 思考的问题。新讨论提议使 GitHub 发行版不可变，以增强供应链安全。

---

## 发布动态

过去 24 小时内无新发行版。

---

## 热点问题

1. **[#10031](https://github.com/earendil-works/pi/issues/10031)** — **ESC 键停止思考时 Pi 偶发卡在"Working..."状态** *(17 条评论，已开启)*
   - 用户反馈按 ESC 键停止思考时 Pi 会卡在"Working..."状态。只有 Ctrl+C 和 `pi -c` 恢复才能解决。此问题自 v0.84.0 起在多台机器上出现。**高影响力可用性问题。**

2. **[#3159](https://github.com/earendil-works/pi/issues/3159)** — **edit tool 被终止 — 超时** *(9 条评论，已关闭)*
   - Qwen 27b 在新版本中频繁收到 edit tool "terminated" 错误。可能是 edit 操作超时不足导致。

3. **[#9508](https://github.com/earendil-works/pi/issues/9508)** — **pi-ai 向兼容提供商发送不支持的 OpenAI 特定请求字段** *(8 条评论，已开启)*
   - Pi 发送 OpenAI 特定字段、角色和认证头，这些会被兼容提供商拒绝，导致 400/422 错误。导致原本可用的提供商配置失效。

4. **[#10033](https://github.com/earendil-works/pi/issues/10033)** — **压缩提示包含所有思考文本并超出上下文窗口** *(7 条评论，已关闭)*
   - 自动压缩在长会话中使用推理模型（如 DeepSeek V4.1）时失败，因为 `serializeConversation()` 包含完整思考块，超出令牌限制。

5. **[#9974](https://github.com/earendil-works/pi/issues/9974)** — **pi 错误处理 llama.cpp 返回的 Responses API 工具调用** *(6 条评论，已关闭)*
   - 使用 llama.cpp 的 Responses API 时，Pi 执行重复和损坏的工具调用。SSE 流处理 bug。

6. **[#9905](https://github.com/earendil-works/pi/issues/9905)** — **Anthropic thinking.display 始终发送为"summarized"** *(6 条评论，已关闭)*
   - CLI 无法更改 Anthropic 模型的 `thinking.display`。目前仅支持"summarized"或"omitted"。

7. **[#9409](https://github.com/earendil-works/pi/issues/9409)** — **推理模型会话在上下文上限处永久卡住** *(4 条评论，已开启)*
   - 推理模型的会话在上下文上限处永久停滞，`stopReason` 为"length"。自动压缩无法恢复。**长会话的关键问题。**

8. **[#10074](https://github.com/earendil-works/pi/issues/10074)** — **Anthropic 工具调用：非 ASCII 编辑参数损坏** *(4 条评论，已开启)*
   - 编辑包含韩文的文件时操作频繁失败，有时会损坏文件。`u` 从 `\uXXXX` 中丢失导致控制字符。

9. **[#6393](https://github.com/earendil-works/pi/issues/6393)** — **允许禁用 /share** *(3 条评论，已关闭——无操作)*
   - 安全考虑：`/share` 命令容易泄露敏感数据。已关闭，参考更优雅的解决方案 #6358。

10. **[#10077](https://github.com/earendil-works/pi/issues/10077)** — **llama.cpp 模型：contextWindow 被重置为 128000** *(3 条评论，已开启)*
    - `models-store.json` 中的上下文窗口错误重置为 128000，尽管 `presets.ini` 设置为 65536。

---

## 主要 PR 进展

1. **[#10146](https://github.com/earendil-works/pi/pull/10146)** — **fix(coding-agent): 恢复编辑器时保留粘贴文本** *(已开启)*
   - 防止 Pi 在恢复排队消息时提交字面量 `[paste #x +y lines]` 标记而非实际粘贴文本。

2. **[#10040](https://github.com/earendil-works/pi/pull/10040)** — **feat(coding-agent): Codemode 和 MCP** *(已开启)*
   - 主要新功能：在 worker 中的 QuickJS WASM VM 内运行模型编写的 JavaScript。实现每会话存储、模型目录访问和分类器。

3. **[#10122](https://github.com/earendil-works/pi/pull/10122)** — **feat(coding-agent): 添加托管 llama.cpp 服务器模式** *(已开启)*
   - Pi 现在可以使用分离的监督器自动启动 llama-server，使用随机端口/API 密钥。服务器在首次模型使用時启动，最后一个 pi 断开时停止。

4. **[#10035](https://github.com/earendil-works/pi/pull/10035)** — **feat(coding-agent): 虚拟模型** *(已关闭)*
   - 扩展可以通过 `pi.registerVirtualModel()` 注册虚拟模型。根据路由策略将请求路由到物理模型。

5. **[#9714](https://github.com/earendil-works/pi/pull/9714)** — **feat(ai): 支持 Azure Foundry Chat Completions 部署** *(已开启)*
   - 将 Azure 提供商从 Responses API 扩展到支持 Chat Completions（如 Foundry 上的 DeepSeek V4 Pro）。

6. **[#10136](https://github.com/earendil-works/pi/pull/10136)** — **fix(coding-agent,tui): 粘贴 Finder 文件路径而非图标** *(已关闭)*
   - macOS：`Ctrl+V` 现在粘贴原始文件路径而非 Finder 文件图标。优先读取复制的 Finder 文件 URL 再读取剪贴板图像数据。

7. **[#10142](https://github.com/earendil-works/pi/pull/10142)** — **fix(ai): 向 Bedrock Converse 上的 OpenAI 模型发送 reasoning effort** *(已开启)*
   - Bedrock Converse 适配器现在为 OpenAI 模型发送 thinking 字段（此前仅支持 Claude）。修复 reasoning effort 始终默认为"medium"的问题。

8. **[#10135](https://github.com/earendil-works/pi/pull/10135)** — **fix(coding-agent): 规范化压缩使用以防止恢复时页脚崩溃** *(已关闭)*
   - 持久化的 `summaryUsage` 被规范化以防止压缩后会话恢复时页脚崩溃。

9. **[#10134](https://github.com/earendil-works/pi/pull/10134)** — **fix(coding-agent): 在 built-in-tool-renderer 示例中保留工具提示字段** *(已关闭)*
   - 示例现在正确复制工具提示字段，不仅限于 description、parameters 和 execute。

10. **[#9993](https://github.com/earendil-works/pi/pull/9993)** — **feat(ai,coding-agent): 在 Google Vertex AI 提供商中添加 Anthropic Claude 支持** *(已关闭)*
    - Vertex AI Model Garden 现在支持 Anthropic Claude 模型（Opus、Sonnet、Haiku），使用 Google Cloud 凭据。

---

## 热点讨论

**意见 / 功能请求：**

- **[#10126](https://github.com/earendil-works/pi/discussions/10126)** — *使 GitHub 发行版不可变？* (2 👍)
  - 提议不可变 GitHub 发行版以增强供应链安全。参考了 terragrunt 的实现。

- **[#10128](https://github.com/earendil-works/pi/discussions/10128)** — *添加禁用分享功能？* (1 👍)
  - 跟进已关闭的问题 #6393。质疑鉴于安全问题，`/share` 是否应允许禁用。

**展示与分享：**

- **[#10069](https://github.com/earendil-works/pi/discussions/10069)** — *展示与分享：agent-chat — 独立 Pi 代理的点对点消息* (1 👍)
  - 使不同工作树中的独立 Pi 会话能够共享 Docker 容器、端口和数据库的扩展。无需编排器。

---

## 功能请求趋势

问题与讨论中的主要主题：

| 主题 | 频率 | 示例 |
|------|------|------|
| **模型/提供商兼容性** | 高 | #9508 (OpenAI 字段)、#9714 (Azure Foundry)、#9993 (Vertex + Claude) |
| **推理模型改进** | 高 | #10033 (压缩)、#9409 (上下文上限)、#10142 (Bedrock reasoning) |
| **安全/隐私** | 中 | #6393、#10128 (禁用 /share) |
| **本地模型支持** | 中 | #10122 (托管 llama.cpp)、#10077 (contextWindow)、#9974 (Responses API) |
| **TUI/UX 优化** | 中 | #9828 (回滚)、#9999 (剪贴板)、#10141 (冻结帧) |
| **扩展系统** | 中低 | #10124 (类型化 TUI)、#10035 (虚拟模型)、#10040 (codemode/MCP) |

---

## 开发者痛点

1. **推理模型在上下文上限处卡住** — 使用 DeepSeek、o1 等的会话永久停滞；自动压缩反复失败。影响长期编码会话。

2. **ESC 键停止 AI 思考** — 频繁卡住需要杀死进程。自 v0.84.0 以来严重的可用性回归。

3. **Edit 工具超时** — 本地模型（llama.cpp、Qwen）在新版本中 edit 操作失败并报"terminated"错误。

4. **非 ASCII 文件损坏** — 编辑包含韩文/Unicode 的文件时经常损坏，导致数据丢失。

5. **扩展加载性能** — 大型扩展设置（70+ 扩展）导致会话创建延迟从 4 秒增加到 280 秒；每次会话累积成本。

6. **macOS 剪贴板混淆** — `Ctrl+V` 根据最近的 Finder 活动粘贴 Finder 图标而非文件或图像。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. I need to:
1. Translate all the text content
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue/PR references, code, numbers, dates as-is
4. Use natural technical Chinese register

Let me go through and translate this carefully, preserving the exact structure.

Key points:
- Headings need translation
- Tables need translation (header rows and content)
- Lists need translation
- Keep all code/technical references as-is
- Use natural Chinese technical register

Let me translate section by section:</think>

# Qwen Code 社区动态 — 2026-09-29

## 今日要闻

Qwen Code 社区近期聚焦于两大架构演进：Managed Agent 双路径架构提案 (#12380) 获得广泛关注，收到了 37 条评论；同时一个关键的 Remote-SSH 缺陷 (#12416) 正在影响Companion 0.24.2 用户，在生产环境中导致 `write EPIPE` 错误。此外，Token 治理和结构化 Auto Memory 改进 (#12028, #10151) 也在路线图上持续推进，同时安全团队正在处理模型选择器中的凭证暴露问题 (#12856)。

---

## 版本发布

**过去 24 小时内无新版本发布。** `v0.24.6-nightly.20260927.3f5ae3ffeb` 的发布工作流失败（问题 #12880），`integration_none` 任务遇到问题。

---

## 热门 issue

### 1. [proposal(serve): 定义 Managed Agent 双路径架构和分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380)
**优先级 P2 | 37 条评论**  
提出分阶段 Managed Agent 架构，在保持 TypeScript agent 循环的同时，将模型推理与工具环境配置解耦。引入 Sessions 具备持久化所有权、Workspace 绑定、可恢复的工具执行以及稳定的 WebSocket API。这是多 agent 和平台分发路线图的基础架构。

### 2. [Remote-SSH: 每次 POST /session 都失败，提示 `write EPIPE` / `BridgeChannelClosedError`](https://github.com/QwenLM/qwen-code/issues/12416)
**优先级 P1 | 17 条评论**  
严重缺陷：在 Qwen Code Companion 0.24.2 中，通过聊天面板创建任何 session 时，使用 Remote-SSH 会失败并提示 `write EPIPE` 或 `BridgeChannelClosedError`，尽管独立运行捆绑 CLI 正常工作。影响使用单文件夹工作区的 Linux 生产环境用户。

### 3. [feat(acp-bridge): 配对的 Legacy 和 Managed 引擎的 Stage B 主机集成](https://github.com/QwenLM/qwen-code/issues/12737)
**优先级 P3 | 13 条评论**  
追踪配对主机基础的 Stage B 集成工作，保留 M1 保护和 M3 配置兼容性，同时将普通本地 `qwen serve` Managed 执行推迟到第一个 Hosted Managed 分支之后。

### 4. [tracking(core): 非会话上下文的 Token 治理](https://github.com/QwenLM/qwen-code/issues/12028)
**优先级 P2 | 11 条评论**  
追踪非会话上下文——系统提示词、工具 schema、`QWEN.md` 文件和 skill 列表——的治理，这些内容在每次请求时都会被发送并计费。在大上下文模型上，这个区块的 token 开销可能远超对话本身，是用户看不到的隐藏成本。

### 5. [追踪 main 分支上结构化 Auto Memory 的发布就绪状态](https://github.com/QwenLM/qwen-code/issues/12947)
**优先级 P2 | 7 条评论**  
追踪 main 分支上结构化 Auto Memory 的正确性、有效性和验证工作，然后才能进行更广泛发布。作为更广泛的 token 治理 umbrella #12028 的子追踪，聚焦于结构化召回改进。

### 6. [Aux-model 选择器持久化了一个 NUL 分隔的 baseUrl，每个公共界面都原样输出](https://github.com/QwenLM/qwen-code/issues/12856)
**优先级 P2 | 6 条评论**  
安全问题：五个设置键（`visionModel`、`imageModel`、`advisorModel`、`fastModel`、`compcmactionModel`）将模型选择器持久化为 `authType:<id>\0<baseUrl>` 的形式。当 provider 的 `baseUrl` 包含用户信息（`https://user:sk-...@host/v1`）时，该后缀作为凭证会在各个公共界面原样暴露。

### 7. [使用结构化召回和无损迁移改进 Auto Memory](https://github.com/QwenLM/qwen-code/issues/10151)
**优先级 P2 | 6 条评论**  
建议为 memory 文件添加结构化检索元数据，同时将现有 Auto Memory 路径保留为兼容回退方案，引入按需、结构化元数据的无损召回。

### 8. [添加支持 IMAP 和 SMTP 的邮件通道](https://github.com/QwenLM/qwen-code/issues/8281)
**优先级 P3 | 6 条评论**  
功能请求：添加官方支持的邮件通道，让用户可以通过专用邮箱与 Qwen Code agent 通信，支持与提供商无关的 IMAP/SMTP 来接收和发送消息。

### 9. [follow-up(memory): 解决 #10183 后的非阻塞审查技术债](https://github.com/QwenLM/qwen-code/issues/12853)
**优先级 P3 | 6 条评论**  
推迟 PR #10183 的非阻塞审查发现，该 PR 已超过五轮审查。根据仓库策略，只有正确性/安全/数据丢失/回归阻塞问题才应继续扩展 PR。

### 10. [即使排除了 Skill 工具，Skill 列表仍然被注入](https://github.com/QwenLM/qwen-code/issues/12835)
**优先级 P2 | 5 条评论**（已关闭）  
缺陷：运行 `qwen -e none --core-tools read_file --exclude-tools skill` 时，系统事件中仍然包含带有 skill 列表的 `<system-reminder>`，尽管 Skill 工具已从工具列表中排除。

---

## 关键 PR 进展

### 1. [docs(managed-agent): 将本地引擎交付推迟到 Hosted 之后](https://github.com/QwenLM/qwen-code/pull/12920)
将普通主机 Managed 引擎工作（M2 和 M4–M6）推迟到第一个可交付 Hosted Managed 分支之后，同时保留已合并的配对主机基础、M1 保护和 M3 兼容性评估。

### 2. [feat(managed-agent): 添加持久的远程 Shell 结果传递](https://github.com/QwenLM/qwen-code/pull/12894)
为前台 Hosted Shell 调用添加 O2 远程结果路径：受限的原始 stdout/stderr 发布、不可变目录和对象存储、固定版本范围读取、Session 收据接收、Broker/worker 工具 v3 路由以及 Hosted 恢复。

### 3. [feat(memory): 将 Mem0 与主 CLI 捆绑](https://github.com/QwenLM/qwen-code/pull/12891)
在主 Qwen Code CLI 中添加可选的 Mem0 连接。使用 `memory.mem0` 配置端点和 `envKey`，凭证在顶层设置的 `env` 字段中定义。

### 4. [fix(managed-agent): 结束 event replay 的合并后审查](https://github.com/QwenLM/qwen-code/pull/12968)
跟进 #12840（event replay，Stage D3）的合并后审查建议。身份回填不再列出内存中的每个 Session，并解决了覆盖范围缺口。

### 5. [feat(managed-agent): 实现私有 Hosted MCP 运行时（H1）](https://github.com/QwenLM/qwen-code/pull/12946)
为 Stage H1 添加私有 `hosted-workspace-mcp/1` 配置文件，包括 Hosted → Broker → Runtime 接线。Runtime 拥有 stdio、Streamable HTTP 和 SSE 连接及凭证。

### 6. [test(hosted): 为 Shell 输出捕获失败添加门控（FG6f）](https://github.com/QwenLM/qwen-code/pull/12954)
添加 Shell 输出的 FG6f 部分：在持久化 1 MiB 输出前缀后终止 publisher/worker，在 SQL 中拒绝收据事务，并在该事务提交后丢失响应。

### 7. [feat(web-shell): 添加自适应导航栏和统一的 Live 设置](https://github.com/QwenLM/qwen-code/pull/12943)
添加自适应侧边栏：仅 Home 的主机保留单个 300px session 列；有额外配置条目主机获得 56px 导航栏。折叠栏布局后仅保留导航栏。

### 8. [fix(core): 展示所有失败的 LSP 请求](https://github.com/QwenLM/qwen-code/pull/12286)
保留服务器成功响应但无匹配项时的空 LSP 结果，同时在每个Dispatched请求都失败时传播最后一个请求错误。

### 9. [fix(core): 对没有 Skill 工具的工具策略的子 agent 隐藏 SkillManager](https://github.com/QwenLM/qwen-code/pull/12545)
工具策略中没有 Skill 工具的子 agent 不再持有 session 的 SkillManager，允许嵌套 Agent 工具的捆绑引用路由解析为 `inline`。

### 10. [feat(core): 在 Code Mode 中延迟加载延迟工具](https://github.com/QwenLM/qwen-code/pull/12898)
为实验性 Code Mode 添加延迟工具发现。延迟的描述和 schema 通过顶级 `tool_search` 加载，为后续 `exec` 调用返回完整的参数 schema。

---

## 功能需求趋势

根据 issue 和 PR 分析，最受关注的功能方向如下：

| 类别 | 趋势 | 相关 issue |
|----------|-------|----------------|
| **架构** | Managed Agent 双路径架构，分阶段交付和持久化生命周期 | #12380, #12737, #12867, #12952 |
| **Memory** | 结构化 Auto Memory，无损召回和元数据迁移 | #10151, #12028, #12947, #12929 |
| **远程执行** | 私有 Hosted MCP 运行时和持久化远程 Shell 结果传递 | #12894, #12946, #12954 |
| **多 Agent** | Session 历史权威外部化、写作者隔离和接管 | #12952, #12847 |
| **集成** | 支持 IMAP/SMTP 的邮件通道 | #8281 |
| **Web Shell** | 自适应 UI 导航和会话管理 | #12943, #12919, #12738 |

---

## 开发者痛点

1. **Remote-SSH 连接失败**：使用 Remote-SSH 的 Companion 0.24.2 用户无法创建 session，因为持续出现 `write EPIPE` 错误，阻塞了生产工作流。

2. **Token 成本不透明**：非会话上下文（系统提示词、工具 schema、skill 列表）在每次请求时都被发送，但对用户显示为很小的百分比，导致大上下文模型上出现意外的 token 成本。

3. **凭证暴露风险**：模型选择器将包含嵌入式凭证的 baseUrl 持久化为 NUL 分隔格式，这些内容会在公共 UI 元素中原样显示 (#12856)。

4. **Memory 迁移停滞**：Legacy managed-memory 元数据迁移在工具完成交互轮次后没有进展，导致主题未迁移 (#12929)。

5. **审批模式回归**：AUTO 模式的用户审批永远无法到达分类器，阻塞无法被覆盖，审批模式在 session 重建时回退为 AUTO (#11019)。

6. **排除后仍然包含 Skill**：即使通过 `--exclude-tools skill` 明确排除，Skill 工具列表仍被注入系统提示词，导致意外行为 (#12835)。

7. **发布流水线不稳定**：夜间构建 `v0.24.6-nightly.20260927.3f5ae3ffeb` 失败，表明 CI 可靠性问题持续存在。

---

*动态基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*