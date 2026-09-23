# AI CLI 工具社区动态日报 2026-09-23

> 生成时间: 2026-09-23 00:53 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this report from English to Chinese, following the specific rules provided. Let me carefully translate while:

1. Keeping all Markdown structure exactly as-is
2. Preserving URLs, version numbers, issue references, project names, etc.
3. Using natural technical Chinese register (like a developer newsletter)
4. Not adding any preamble, explanation, or markdown fences

Let me go through and translate section by section:

---

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report

## 2026-09-23

---

## Ecosystem Overview

The AI coding assistant CLI landscape has matured into a fragmented but highly competitive market. Six major players—Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code—are now competing for developer mindshare, each leveraging different foundation models (Anthropic Claude, OpenAI GPT, Google Gemini, Qwen) and targeting distinct user segments. Today's activity reflects a maturing market: all tools are iterating rapidly on **session/state management**, **provider configuration robustness**, and **cross-platform stability**, while differentiated feature directions (self-evolving agents, AST-aware tooling, sandbox security) reveal divergent philosophies on where AI CLI tools should heading.

---

## Activity Comparison

| Tool | Issues | PRs | Discussions | Releases (24h) | Model Default |
|------|--------|-----|-------------|----------------|---------------|
| **Claude Code** | 50 | 1 | N/A (issues-only) | 1 (v2.1.280) | Claude Opus 5.5 |
| **OpenAI Codex** | 50 | 20 | 11 (active) | 1 (rust-v0.156.0) | Codex default |


| **Gemini CLI** | 50 | 28 | N/A (issues-only) | 1 (nightly) | Gemini 2.5 |
| **GitHub Copilot CLI** | ~30 | 1 | N/A (issues-only) | 3 (v1.0.88–v1.0.89-0) | Claude Opus 5.5 |
| **OpenCode** | 50 | 50 | N/A (issues-only) | 0 | OpenCode default |

The AI CLI ecosystem shows significant variation in developer engagement. Gemini CLI has strong activity with 28 pull requests, while Claude Code remains relatively quiet with just one PR. OpenCode demonstrates the most active development, matching its issue count with 50 PRs. Most tools are maintaining regular releases, though OpenCode hasn't published a release in the past 24 hours.

| **Pi** | 50 | 26 | 1 | 1 (v0.87.1) | Grok 4.7 |
| **Qwen Code** | 50 | 50 | N/A (issues-only) | 5 (preview + nightlies) | Qwen3 |

**Notes:**
- **OpenCode** and **Qwen Code** show the highest PR activity (50 each), indicating aggressive iteration
- **OpenAI Codex** is the only tool with active Discussions usage; others rely solely on Issues
- **Claude Code** and **GitHub Copilot CLI** have minimal PR activity but high issue engagement
- **GitHub Copilot CLI** is the only tool where Issues and PRs are not publicly visible (uses GitHub Enterprise Issues internally)

---

## Shared Feature Directions

The following requirements appear across multiple tool communities:

| Feature Direction | Tools Requesting | Specific Needs |
|-------------------|------------------|----------------|
| **Session/State Reliability** | Claude Code, Copilot CLI, Gemini CLI, Pi | Fix OOM during compaction, session recovery after timeouts, prevent transcript truncation |
| **Provider/Model Discovery Robustness** | Claude Code, Copilot CLI, Pi, Gemini CLI | Fix silent provider drops due to config errors, improve error messaging for missing fields |
| **Cross-Platform Stability** | Codex, Copilot CLI, OpenCode | Windows ARM64, Linux/WSL clipboard, FreeBSD support, Wayland |
| **Multi-Account/Connector Support** | Claude Code, Copilot CLI | Support multiple accounts on same provider (GitHub, AWS) without re-auth |
| **Memory/Context Optimization** | Codex, Pi, Gemini CLI | AST-aware file reads, deterministic redaction, token-frugal code discovery |
| **Configuration Validation** | OpenCode, Copilot CLI, Pi | Clearer error messages when config fails; don't silently drop providers/models |

---

## Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Desktop-first AI coding | Enterprise + Individual devs | Native desktop app with deep OS integration, Opus models |
| **OpenAI Codex** | Fullscreen TUI, self-evolving agents | Power users, researchers | Voice-first, Agent Mode, network policy enforcement |
| **Gemini CLI** | AST-aware codebase analysis | Large repo developers | Static analysis, zero-dependency sandboxing, skill orchestration |
| **Copilot CLI** | Developer workflow integration | GitHub ecosystem users | CLI-first, MCP integration, VS Code parity |
| **OpenCode** | Open-source flexibility | Self-hosted/enterprise | Open-source, extensive plugin system, multi-provider |
| **Pi** | Multi-provider gateway | Developers wanting model choice | Aggregates providers (Anthropic, OpenAI, Google, xAI), Grok default |
| **Qwen Code** | Chinese market + Qwen models | Qwen ecosystem users | Managed Agent architecture, sandbox hardening, MCP support |

**Key Differentiation Themes:**

- **Model Lock-in vs. Agnostic**: Pi positions as a multi-provider gateway; others default to their parent company's model
- **Desktop vs. CLI-first**: Claude Code and Codex prioritize desktop apps; Copilot CLI and Gemini CLI are CLI-native
- **Open vs. Closed**: OpenCode is fully open-source; others are source-available or proprietary

---

## Community Momentum & Maturity

### High Velocity (25+ PRs in 24h)

- **OpenCode** (50 PRs) — Highest iteration rate; aggressive bug fixes and features
- **Qwen Code** (50 PRs) — Fast-moving with strong RFC/architecture discussions
- **Gemini CLI** (28 PRs) — Active security hardening and auth loop fixes

### Moderate Velocity (5–20 PRs)

- **Pi** (26 PRs) — Steady progress on session management and provider discovery
- **OpenAI Codex** (20 PRs) — Network policy enforcement driving most PRs

### Low Velocity (1–5 PRs)

- **Claude Code** (1 PR) — Focus on issue triage; PRs may be internal
- **GitHub Copilot CLI** (1 PR) — Primarily issue-driven iteration

### Community Engagement (Issue Comments + Reactions)

- **Claude Code**: Highest single-issue engagement (#27302: 253 comments, 387 👍) — indicates strong user advocacy for multi-account connectors
- **OpenAI Codex**: #29343 (#29343) has 33 comments on Chrome plugin issues; RFC #40575 (31 comments) shows research-oriented community
- **Gemini CLI**: #21409 (8 comments, 8 👍) on agent hangs signals production-critical concerns

---

## Trend Signals

1. **Reliability Over Features** — Multiple tools are prioritizing bug fixes (OOM, session crashes, config validation) over new features. This suggests the market is maturing from "ship fast" to "ship stable."

2. **Provider Abstraction Is Hard** — Silent provider drops, model discovery failures, and config normalization issues appear across 4+ tools. The abstraction layer between CLI and backends remains fragile.

3. **Self-Evolving Agents Gaining Mindshare** — OpenAI Codex's RFC on self-evolving agents and Gemini CLI's `/learn` proposal indicate a shift toward agents that modify their own instructions — a potential paradigm shift.

4. **Cross-Platform Gaps** — Windows ARM64, FreeBSD, Wayland, and Linux/WSL clipboard issues appear across multiple tools. Platform-specific engineering remains a differentiator.

5. **Security Hardening** — Gemini CLI's bubblewrap sandbox and Qwen Code's sandbox settings hardening indicate increasing focus on safe tool execution — critical for enterprise adoption.

6. **Memory/Context Optimization** — AST-aware reads, deterministic redaction, and token-frugal approaches signal awareness of context window economics as models and sessions grow larger.

---

**Recommendation for Developers:** The ecosystem is consolidating around session reliability and provider robustness as table stakes. Tools differentiating on agent autonomy (self-evolving, AST-aware) and security (sandbox hardening) are positioned for enterprise adoption. For teams prioritizing model flexibility, Pi and OpenCode offer the most agnostic architectures.

---

Now I need to translate to Chinese. Let me go through carefully, preserving format and using natural technical Chinese:

# AI CLI 工具生态 —— 跨工具对比报告

## 2026-09-23

---

## 生态概览

AI 编码辅助 CLI 领域已经演变成一个碎片化但竞争激烈的市场。七大主要玩家——Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code——正在争夺开发者关注度，各自基于不同的基础模型（Anthropic Claude、OpenAI GPT、Google Gemini、Qwen）并面向不同用户群体。

今天的活动反映出市场正在走向成熟：所有工具都在快速迭代**会话/状态管理**、**Provider 配置稳定性**和**跨平台兼容性**，而差异化的功能方向（自主进化 Agent、AST 感知工具、沙盒安全）则揭示了 AI CLI 工具未来走向的不同理念。

---

## 活动对比

| 工具 | Issues | PRs | Discussions | 发布 (24h) | 默认模型 |
|------|--------|-----|-------------|------------|----------|
| **Claude Code** | 50 | 1 | N/A（仅 Issues） | 1 (v2.1.280) | Claude Opus 5.5 |
| **OpenAI Codex** | 50 | 20 | 11（活跃） | 1 (rust-v0.156.0) | Codex 默认 |
| **Gemini CLI** | 50 | 28 | N/A（仅 Issues） | 1 (nightly) | Claude Sonnet 4 |
| **OpenCode** | 50 | 50 | N/A（仅 Issues） | 0 | OpenCode 默认 |
| **Pi** | 50 | 26 | 1 | 1 (v0.87.1) | Grok 4.7 |
| **Qwen Code** | 50 | 50 | N/A（仅 Issues） | 5 (preview + nightlies) | Qwen3 |

**备注：**
- **OpenCode** 和 **Qwen Code** 的 PR 活动最活跃（各 50 个），表明迭代速度很快
- **OpenAI Codex** 是唯一使用 Discussions 的工具；其他仅依赖 Issues
- **Claude Code** 和 **GitHub Copilot CLI** 的 PR 活动较少，但 Issues 参与度很高
- **GitHub Copilot CLI** 是唯一一个 Issues 和 PR 不公开可见的工具（使用 GitHub Enterprise Issues 内部管理）

---

## 共性功能方向

以下需求出现在多个工具社区中：

| 功能方向 | 涉及的

工具 | 具体需求 |
|-------------------|------------------|----------------|
| **会话/状态稳定性** | Claude Code, Copilot CLI, Gemini CLI, Pi | 修复压缩时 OOM、会话超时恢复、防止记录截断 |
| **Provider/模型发现稳定性** | Claude Code, Copilot CLI, Pi, Gemini CLI | 修复因配置错误导致的 Provider 静默丢失、改善缺失字段的错误提示 |
| **跨平台稳定性** | Codex, Copilot CLI, OpenCode | Windows ARM64、Linux/WSL 剪贴板、FreeBSD 支持、Wayland |
| **多账号/连接器支持** | Claude Code, Copilot CLI | 支持同一 Provider 下多个账号（GitHub、AWS）无需重新认证 |
| **内存/上下文优化** | Codex, Pi, Gemini CLI | AST 感知文件读取、确定性脱敏、节省 token 的代码发现 |
| **配置验证** | OpenCode, Copilot CLI, Pi | 配置失败时错误信息更清晰；不再静默丢弃 Provider/模型 |

---

## 差异化分析

| 工具 | 主要焦点 | 目标用户 | 技术路线 |
|------|---------------|-------------|-------------------|
| **Claude Code** | 桌面优先 AI 编码 | 企业 + 个人开发者 | 深度 OS 集成的原生桌面应用，Opus 模型 |
| **OpenAI Codex** | 全屏 TUI、自主进化 Agent | 高级用户、研究人员 | 语音优先、Agent 模式、网络策略执行 |
| **Gemini CLI** | AST 感知代码库分析 | 大仓库开发者 | 静态分析、零依赖沙盒、Skill 编排 |
| **Copilot CLI** | 开发者工作流集成 | GitHub 生态用户 | CLI 优先、MCP 集成、VS Code 体验对齐 |
| **OpenCode** | 开源灵活性 | 自托管/企业 | 开源、丰富插件系统、多 Provider |
| **Pi** | 多 Provider 网关 | 想要模型选择权的开发者 | 聚合 Provider（Anthropic、OpenAI、Google、xAI），默认 Grok |
| **Qwen Code** | 中国市场 + Qwen 模型 | Qwen 生态用户 | 受管 Agent 架构、沙盒加固、MCP 支持 |

**关键差异化主题：**

- **模型锁定 vs 无关性**：Pi 定位为多 Provider 网关；其他默认使用其母公司模型
- **桌面 vs CLI 优先**：Claude Code 和 Codex 优先做桌面应用；Copilot CLI 和 Gemini CLI 是原生 CLI
- **开源 vs 闭源**：OpenCode 完全开源；其他为源码可用或闭源

---

## 社区活跃度与成熟度

### 高速度（24 小时内 25+ PRs）

- **OpenCode**（50 PRs）—— 最高迭代速度；激进的 bug 修复和新功能
- **Qwen Code**（50 PRs）—— 快速推进，RFC/架构讨论活跃
- **Gemini CLI**（28 PRs）—— 安全加固和认证循环修复活跃

### 中等速度（5–20 PRs）

- **Pi**（26 PRs）—— 会话管理和 Provider 发现的稳定推进
- **OpenAI Codex**（20 PRs）—— 网络策略执行驱动大部分 PRs

### 低速度（1–5 PRs）

- **Claude Code**（1 PR）—— 专注于 Issue 分类；PR 可能在内部进行
- **GitHub Copilot CLI**（1 PR）—— 主要由 Issue 驱动的迭代

### 社区参与度（Issue 评论 + 反应）

- **Claude Code**：最高单 Issue 参与度（#27302：253 条评论，387 个 👍）—— 表明用户对多账号连接器的强烈诉求
- **OpenAI Codex**：#29343 有 33 条评论关于 Chrome 插件问题；RFC #40575（31 条评论）显示社区偏向研究导向
- **Gemini CLI**：#21409（8 条评论，8 个 👍）关于 Agent 挂起，表明生产环境关键问题

---

## 趋势信号

1. **稳定性优先于功能** —— 多个工具优先修复 bug（OOM、会话崩溃、配置验证）而非开发新功能。这表明市场正在从"快速发布"走向"稳定交付"。

2. **Provider 抽象仍然困难** —— Provider 静默丢失、模型发现失败、配置规范化问题出现在 4+ 个工具中。CLI 与后端之间的抽象层仍然脆弱。

3. **自主进化 Agent 获得关注** —— OpenAI Codex 关于自主进化 Agent 的 RFC 和 Gemini CLI 的 `/learn` 提案表明，Agent 修改自身指令的方向正在兴起——这可能是一个范式转变。

4. **跨平台差距** —— Windows ARM64、FreeBSD、Wayland 和 Linux/WSL 剪贴板问题出现在多个工具中。平台特定工程仍然是差异化因素。

5. **安全加固** —— Gemini CLI 的 bubblewrap 沙盒和 Qwen Code 的沙盒设置加固表明，对安全工具执行的关注日益增加——这对企业采用至关重要。

6. **内存/上下文优化** —— AST 感知读取、确定性脱敏和节省 token 的方法表明，随着模型和会话规模增长，开发者对上下文窗口经济性的认识在提升。

---

**给开发者的建议：** 生态正在将会话稳定性和 Provider 鲁棒性视为基础门槛。在 Agent 自主性（自主进化、AST 感知）和安全（沙盒加固）上差异化的工具将在企业市场占据优势。对于优先考虑模型灵活性的团队，Pi 和 OpenCode 提供了最无偏的架构。

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.</think>

# AI CLI 工具生态 —— 跨工具对比报告

## 2026-09-23

---

## 生态概览

AI 编码辅助 CLI 领域已经演变成一个碎片化但竞争激烈的市场。七大主要玩家——Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code——正在争夺开发者关注度，各自基于不同的基础模型（Anthropic Claude、OpenAI GPT、Google Gemini、Qwen）并面向不同用户群体。

今天的数据反映出市场正在走向成熟：所有工具都在快速迭代**会话/状态管理**、**Provider 配置稳定性**和**跨平台兼容性**，而差异化的功能方向（自主进化 Agent、AST 感知工具、沙盒安全）则揭示了 AI CLI 工具未来走向的不同理念。

---

## 活动对比

| 工具 | Issues | PRs | Discussions | 发布 (24h) | 默认模型 |
|------|--------|-----|-------------|------------|----------|
| **Claude Code** | 50 | 1 | N/A（仅 Issues） | 1 (v2.1.280) | Claude Opus 5.5 |
| **OpenAI Codex** | 50 | 20 | 11（活跃） | 1 (rust-v0.156.0) | Codex 默认 |
| **Gemini CLI** | 50 | 28 | N/A（仅 Issues） | 1 (nightly) | Gemini 2.5 |
| **GitHub Copilot CLI** | ~30 | 1 | N/A（仅 Issues） | 3 (v1.0.88–v1.0.89-0) | Claude Opus 5.5 |
| **OpenCode** | 50 | 50 | N/A（仅 Issues） | 0 | OpenCode 默认 |
| **Pi** | 50 | 26 | 1 | 1 (v0.87.1) | Grok 4.7 |
| **Qwen Code** | 50 | 50 | N/A（仅 Issues） | 5 (preview + nightlies) | Qwen3 |

**备注：**

- **OpenCode** 和 **Qwen Code** 的 PR 活动最活跃（各 50 个），表明迭代速度很快
- **OpenAI Codex** 是唯一使用 Discussions 的工具；其他仅依赖 Issues
- **Claude Code** 和 **GitHub Copilot CLI** 的 PR 活动较少，但 Issues 参与度很高
- **GitHub Copilot CLI** 是唯一一个 Issues 和 PR 不公开可见的工具（使用 GitHub Enterprise Issues 内部管理）

---

## 共性功能方向

以下需求出现在多个工具社区中：

| 功能方向 | 涉及的工具 | 具体需求 |
|-------------------|------------------|----------------|
| **会话/状态稳定性** | Claude Code, Copilot CLI, Gemini CLI, Pi | 修复压缩时 OOM、会话超时恢复、防止记录截断 |
| **Provider/模型发现稳定性** | Claude Code, Copilot CLI, Pi, Gemini CLI | 修复因配置错误导致的 Provider 静默丢失、改善缺失字段的错误提示 |
| **跨平台稳定性** | Codex, Copilot CLI, OpenCode | Windows ARM64、Linux/WSL 剪贴板、FreeBSD 支持、Wayland |
| **多账号/连接器支持** | Claude Code, Copilot CLI | 支持同一 Provider 下多个账号（GitHub、AWS）无需重新认证 |
| **内存/上下文优化** | Codex, Pi, Gemini CLI | AST 感知文件读取、确定性脱敏、节省 token 的代码发现 |
| **配置验证** | OpenCode, Copilot CLI, Pi | 配置失败时错误信息更清晰；不再静默丢弃 Provider/模型 |

---

## 差异化分析

| 工具 | 主要焦点 | 目标用户 | 技术路线 |
|------|---------------|-------------|-------------------|
| **Claude Code** | 桌面优先 AI 编码 | 企业 + 个人开发者 | 深度 OS 集成的原生桌面应用，Opus 模型 |
| **OpenAI Codex** | 全屏 TUI、自主进化 Agent | 高级用户、研究人员 | 语音优先、Agent 模式、网络策略执行 |
| **Gemini CLI** | AST 感知代码库分析 | 大仓库开发者 | 静态分析、零依赖沙盒、Skill 编排 |
| **Copilot CLI** | 开发者工作流集成 | GitHub 生态用户 | CLI 优先、MCP 集成、VS Code 体验对齐 |
| **OpenCode** | 开源灵活性 | 自托管/企业 | 开源、丰富插件系统、多 Provider |
| **Pi** | 多 Provider 网关 | 想要模型选择权的开发者 | 聚合 Provider（Anthropic、OpenAI、Google、xAI），默认 Grok |
| **Qwen Code** | 中国市场 + Qwen 模型 | Qwen 生态用户 | 受管 Agent 架构、沙盒加固、MCP 支持 |

**关键差异化主题：**

- **模型锁定 vs 无关性**：Pi 定位为多 Provider 网关；其他默认使用其母公司模型
- **桌面 vs CLI 优先**：Claude Code 和 Codex 优先做桌面应用；Copilot CLI 和 Gemini CLI 是原生 CLI
- **开源 vs 闭源**：OpenCode 完全开源；其他为源码可用或闭源

---

## 社区活跃度与成熟度

### 高速度（24 小时内 25+ PRs）

- **OpenCode**（50 PRs）—— 最高迭代速度；激进的 bug 修复和新功能
- **Qwen Code**（50 PRs）—— 快速推进，RFC/架构讨论活跃
- **Gemini CLI**（28 PRs）—— 安全加固和认证循环修复活跃

### 中等速度（5–20 PRs）

- **Pi**（26 PRs）—— 会话管理和 Provider 发现的稳定推进
- **OpenAI Codex**（20 PRs）—— 网络策略执行驱动大部分 PRs

### 低速度（1–5 PRs）

- **Claude Code**（1 PR）—— 专注于 Issue 分类；PR 可能在内部进行
- **GitHub Copilot CLI**（1 PR）—— 主要由 Issue 驱动的迭代

### 社区参与度（Issue 评论 + 反应）

- **Claude Code**：最高单 Issue 参与度（#27302：253 条评论，387 个 👍）—— 表明用户对多账号连接器的强烈诉求
- **OpenAI Codex**：#29343 有 33 条评论关于 Chrome 插件问题；RFC #40575（31 条评论）显示社区偏向研究导向
- **Gemini CLI**：#21409（8 条评论，8 个 👍）关于 Agent 挂起，表明生产环境关键问题

---

## 趋势信号

1. **稳定性优先于功能** —— 多个工具优先修复 bug（OOM、会话崩溃、配置验证）而非开发新功能。这表明市场正在从"快速发布"走向"稳定交付"。

2. **Provider 抽象仍然困难** —— Provider 静默丢失、模型发现失败、配置规范化问题出现在 4+ 个工具中。CLI 与后端之间的抽象层仍然脆弱。

3. **自主进化 Agent 获得关注** —— OpenAI Codex 关于自主进化 Agent 的 RFC 和 Gemini CLI 的 `/learn` 提案表明，Agent 修改自身指令的方向正在兴起——这可能是一个范式转变。

4. **跨平台差距** —— Windows ARM64、FreeBSD、Wayland 和 Linux/WSL 剪贴板问题出现在多个工具中。平台特定工程仍然是差异化因素。

5. **安全加固** —— Gemini CLI 的 bubblewrap 沙盒和 Qwen Code 的沙盒设置加固表明，对安全工具执行的关注日益增加——这对企业采用至关重要。

6. **内存/上下文优化** —— AST 感知读取、确定性脱敏和节省 token 的方法表明，随着模型和会话规模增长，开发者对上下文窗口经济性的认识在提升。

---

**给开发者的建议：** 生态正在将会话稳定性和 Provider 鲁棒性视为基础门槛。在 Agent 自主性（自主进化、AST 感知）和安全（沙盒加固）上差异化的工具将在企业市场占据优势。对于优先考虑模型灵活性的团队，Pi 和 OpenCode 提供了最无偏的架构。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report from English to Chinese (Simplified Chinese), following the specific rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully, maintaining the structure and using appropriate technical Chinese:

- "Claude Code Skills Community Highlights Report" -> "Claude Code 技能社区亮点报告"
- "Data Source" -> "数据来源"
- "Top Skills Ranking" -> "热门技能排行"
- "Community Demand Trends" -> "社区需求趋势"
- "High-Potential Pending Skills" -> "高潜力待合并技能"
- "Skills Ecosystem Insight" -> "技能生态洞察"

I'll translate the table content, keeping the numbers, URLs, and technical terms as-is. I need to use appropriate Chinese punctuation while preserving the table structure.

Let me go through each section carefully:</think>

# Claude Code 技能社区亮点报告

**数据来源：** anthropics/skills (GitHub) — 截至 2026-09-23

---

## 1. 热门技能排行

*注：PR 评论数据在数据集中不可用。排名依据近期活跃度、技术意义和社区参与度指标。*

| PR # | 技能 | 作者 | 状态 | 简介 |
|------|------|------|------|------|
| [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | kishormorol | OPEN | 大规模或破坏性写操作的"预检"清单技能——归档用户、撤销权限、删除行、批量邮件。弥合查询正确性与操作安全性之间的差距。 |
| [#1790](https://github.com/anthropics/skills/pull/1790) | **docx: document.xml.rels 修复** | TINGyu123644 | OPEN | 修复 `comment.py` 在缺失时未能创建 `word/_rels/document.xml.rels` 的缺陷，导致 DOCX 评论功能失效。 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | ProofCore-Protocol | OPEN | Web3 方向的技能，用于自动化静态分析 Solidity/Rust 智能合约，通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链。 |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator 触发器修复** | ChiFungHillmanChan | OPEN | 关键修复：触发器评估曾对每个技能都报告 100% 精确率 / 0% 召回率，导致对技能描述的所谓"优化"产生错误。 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: mcp≥2 支持** | Kuldeeep18 | OPEN | 将 `mcp-builder` 更新至 `mcp>=2.0.0` — 修复 `streamablehttp_client` → `streamable_http_client` 重命名及通过 `create_mcp_http_client` 处理自定义请求头。 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 70v-Yoyo | OPEN | 零成本技能，将 Markdown 文档编译为带有逼真人声旁白的专业 MP4 视频，采用 Marp 实现。 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: Windows/运行时修复** | MartinCajiao | OPEN | 隔离每个 worker 的触发器评估，处理 Windows 兼容性，管理错误通过负例的运行时故障。 |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | ksgisang | OPEN | 端到端测试技能，赋予 Claude 视觉和浏览器控制能力，实现零代码自动化测试生成。 |

---

## 2. 社区需求趋势

*源自高评论量 Issue（#492、#228、#556、#62、#1329）：*

| 趋势 | 证据 | 优先级 |
|------|------|--------|
| **安全与信任边界** | Issue #492（43 条评论）—— 社区技能置于 `anthropic/` 命名空间下会冒充官方技能，导致信任边界被滥用。 | 🔴 紧急 |
| **企业协作** | Issue #228（16 条评论）—— 请求在 Claude.ai 中直接实现组织级技能共享，避免手动文件分发。 | 🟠 高 |
| **可靠的触发器评估** | Issue #556（12 条评论）—— `run_eval.py` 报告 0% 触发率；阻碍技能验证。 | 🟠 高 |
| **持久化技能存储** | Issue #62（10 条评论）—— 用户在文件移动/重命名时丢失技能；需要稳健的存储方案。 | 🟠 高 |
| **智能体内存效率** | Issue #1329（9 条评论）—— `compact-memory` 技能提案，使用符号化表示法降低上下文开销。 | 🟡 中 |

**新兴技能方向：** 针对开发者体验的技能（HPC 集群、复古游戏开发、智能合约、端到端测试）显示社区正将 Claude Code 拓展到专业技术领域，而非仅限通用任务。

---

## 3. 高潜力待合并技能

*近期更新的活跃 PR（2026 年 9 月），可能即将合并：*

| PR | 技能 | 更新日期 | 合并可能性高的原因 |
|----|------|----------|--------------------|
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 2026-09-18 | 创新的安全导向技能；解决真实操作风险。 |
| [#1790](https://github.com/anthropics/skills/pull/1790) | docx: document.xml.rels | 2026-09-19 | 小而精的缺陷修复；风险低。 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 2026-09-16 | Web3 小众但规格明确；契合代码生成用例。 |
| [#1765](https://github.com/anthropics/skills/pull/1765) | office: UTF-8 解码 | 2026-09-14 | 修复 Windows 本地化问题；实际影响大。 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 2026-09-15 | 零成本创意技能；价值主张鲜明。 |

---

## 4. 技能生态洞察

> **社区最集中的需求是稳健、可靠的技能基础设施** —— 特别是触发器评估准确性、跨平台兼容性（Windows）、企业级共享和安全加固 —— 而非仅仅开发新的技能类型。新技能 pipeline 十分活跃，但基础层面（skill-creator、评估机制、安全边界）需要稳定下来。

---

---

<think>The user wants me to translate this Claude Code Community Digest from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate while keeping all the formatting and technical elements intact:

---

# Claude Code 社区简报 — 2026-09-23

## 今日要闻

Claude Code v2.1.280 正式发布 **Claude Opus 5.5** 作为新的默认模型，提供 1M 上下文窗口，缓存读取费用仅为 $0.20/Mtok。该版本还为全屏模式列表和 `/skills` 滚轮添加了鼠标交互支持。与此同时，社区热度不减——热门 issue 吸引了 250+ 条评论，对多账户连接器和可配置工作树的呼声极高。

---

## 版本发布

| 版本 | 重大更新 |
|---------|-------------|
| **v2.1.280** | 新增 Claude Opus 5.5 作为默认 Opus 型号 — 1M 上下文，$4/$20 每 Mtok，$0.20/Mtok 缓存读取。鼠标支持扩展到 `/skills` 列表滚动和全屏模式下 `/plugin` 状态选项点击。 |

---

## 热门 Issue

| # | Issue | 重要性 | 反馈 |
|---|-------|----------------|-----------|


| **#27302** | **[功能] 支持同一连接器的多个账户** | 团队使用 Claude Code 和 claude.ai/web 时需要在同一提供商（如 GitHub、AWS）上切换多个账户。目前的限制迫使用户必须重新认证。 | 253 条评论，387 👍 |
| **#89467** | **[Bug] Windows：应用窗口始终置顶，无法关闭** | Windows 用户无法控制窗口层级——没有设置或快捷方式来关闭此功能，影响正常的多窗口工作流程。 | 37 条评论，75 👍 |

**#27282** 请求将工作树目录位置配置为独立目录，而非强制放在 `.claude/worktrees` 子目录中。这破坏了仓库组织的常规做法。13 条评论，68 👍

**#65051** 修复了守护进程会话中文本块丢失的问题——混合工具使用的文本被静默丢弃，导致对话历史损坏。13 条评论，9 👍

**#73386** 解决了在共享文件夹的 VM（VirtualBox、Parallels）中编辑目标文件时出现的文件编辑失败问题，这是容器化流程的阻碍。9 条评论，1 👍

**#40346** 允许通过钩子或工具进行程序化会话/线程重命名，以支持自动化场景。

无需手动执行 `/rename` 命令，即可根据 GitHub issues/PRs 自动重命名会话。8 条评论，14 👍

**#80261** 需要在主屏幕显示使用限制或持久化使用指示器，让用户无需在菜单中查找即可了解 token 使用情况，对按层级收费的团队尤为重要。6 条评论，22 👍

**#91498** 指出 macOS 上 zsh 环境中的"Bash"工具实际运行 zsh，但命名具有误导性，导致 LLM 在处理仅 bash 语法时出现问题。5 条评论，1 👍

**#94553** 修复了自 2.1.26x 版本以来持久化监控被限制在 30 分钟内的问题，尽管设置了 `persistent: true` 仍会超时，这是文档记录行为的意外变更。5 条评论，5 👍

**#91618** 修复了 Windows 上大小写不敏感文件系统因大小写敏感的检查而错误拒绝不同驱动器号上的有效工作树的问题。4 条评论，0 👍

---

## 关键 PR 进展

| PR | 状态 | 摘要 |
|----|--------|---------|
| **#95409** | **已关闭** | `mods/agents-md`：在 `mods/agents-md/` 下添加了 AGENTS.md 项目指令 mod——包含 manifest、钩子模块、测试和 README。通过 `instructionFiles` 选项读取 `AGENTS.md`，方式与引擎读取 `CLAUDE.md` 相同。 |

*注：过去 24 小时内仅有 1 个 PR 更新。社区功能开发可能在分支中进行或等待审核。*

---

## 功能请求趋势

根据 issue 分析，以下主题主导了社区请求：

1. **多账户/多连接器支持** — 团队需要在同一提供商的不同账户之间切换而无需重新认证 (#27302)
2. **工作树自定义** — 强烈要求控制 git 工作树的位置，包括 `.claude` 之外的同级目录 (#27282)
3. **桌面应用体验改进** — 持久化使用指示器 (#80261)、窗口管理修复 (#89467)、会话侧边栏稳定性 (#92179)
4. **平台特定修复** — Windows VM 兼容性 (#73386)、大小写敏感路径问题 (#91618)、Linux 后台会话回归 (#65051)
5. **自动化与钩子** — 程序化会话重命名 (#40346)、全局 AGENTS.md 支持 (#95795)

---

## 开发者痛点

- **Windows 桌面问题**：窗口始终置顶行为、VM 共享文件夹写入失败和大小写敏感驱动器号检查阻碍了开发流程
- **后台会话回归**：守护进程会话中的文本块丢失 (#65051) 和 Monitor 超时 (#94553) 破坏了长时间运行任务的可靠性
- **认证复杂性**：CVP（Claude 供应商计划）审批困惑 (#88961) 和单一连接器限制 (#27302) 让企业用户感到沮丧
- **命名混淆**："Bash" 工具实际运行用户的登录 shell (#91498)，误导用户和 AI 模型
- **工作树池化**：会话到工作树分配错误 (#91405) 存在未提交工作丢失的风险——数据安全隐患</think>

# Claude Code 社区简报 — 2026-09-23

## 今日要闻

Claude Code v2.1.280 正式发布 **Claude Opus 5.5** 作为新的默认模型，提供 1M 上下文窗口，缓存读取费用仅为 $0.20/Mtok。该版本还为全屏模式列表和 `/skills` 滚轮添加了鼠标交互支持。与此同时，社区热度不减——热门 issue 吸引了 250+ 条评论，对多账户连接器和可配置工作树的呼声极高。

---

## 版本发布

| 版本 | 重大更新 |
|---------|-------------|
| **v2.1.280** | 新增 Claude Opus 5.5 作为默认 Opus 型号 — 1M 上下文，$4/$20 每 Mtok，$0.20/Mtok 缓存读取。鼠标支持扩展到 `/skills` 列表滚动和全屏模式下 `/plugin` 状态选项点击。 |

---

## 热门 Issue

| # | Issue | 重要性 | 反馈 |
|---|-------|----------------|-----------|
| **#27302** | **[功能] 支持同一连接器的多个账户** | 团队使用 Claude Code 和 claude.ai/web 时需要在同一提供商（如 GitHub、AWS）上切换多个账户。目前的限制迫使用户必须重新认证。 | 253 条评论，387 👍 |
| **#89467** | **[Bug] Windows：应用窗口始终置顶，无法关闭** | Windows 用户无法控制窗口层级——没有设置或快捷方式来关闭此功能，影响正常的多窗口工作流程。 | 37 条评论，75 👍 |
| **#27282** | **[功能请求] 可配置的工作树目录位置，支持同级目录** | 开发者希望控制 git 工作树的放置位置，而非被迫放在 `.claude/worktrees` 子目录中。当前设计破坏了仓库组织惯例。 | 13 条评论，68 👍 |
| **#65051** | **[Bug] 后台（守护进程）会话丢失助手文本块（2.1.160 → 2.1.161 回归）** | 守护进程会话的回归问题破坏了转录完整性——混有 tool_use 的文本被静默丢弃，导致对话历史损坏。 | 13 条评论，9 👍 |
| **#73386** | **[Bug] 编辑/写入在 VM 共享文件夹驱动器上失败，显示 "ENOENT: fchmod"** | 在带有共享文件夹的 VM（VirtualBox、Parallels）中开发时，目标文件已存在的情况下会出现文件编辑失败——这是容器化工作流的阻塞问题。 | 9 条评论，1 👍 |
| **#40346** | **[功能请求] 通过钩子或工具实现程序化会话/线程重命名** | 自动化场景急需此功能——可根据 GitHub issues/PRs 自动重命名会话，而非手动执行 `/rename` 命令。 | 8 条评论，14 👍 |
| **#80261** | **[功能请求] 在主屏幕显示使用限制 / 持久化使用指示器** | 用户希望无需在菜单中查找即可查看 token 使用情况——对于按层级收费的团队尤为重要。 | 6 条评论，22 👍 |
| **#91498** | **[Bug] `Bash` 工具执行用户的登录 shell，应该叫 "shell" 而非 "bash"** | 在 macOS 上使用 zsh 时，"Bash" 工具实际运行 zsh——这种命名误导会导致 LLM 被 bash 特有的语法绊倒。 | 5 条评论，1 👍 |
| **#94553** | **[Bug] 带有 `persistent: true` 的 Monitor 自 2.1.26x 起被限制在 30 分钟** | 长时间运行的监控任务尽管设置了 `persistent: true` 仍会在 30 分钟后静默过期——文档记录的行为未经通知就改变了。 | 5 条评论，5 👍 |
| **#91618** | **[Bug] Windows：isolation-worktree 安全检查因大小写敏感的驱动器号比较而拒绝有效工作树** | 大小写不敏感的 Windows 文件系统未能通过大小写敏感的安全检查，错误地拒绝了不同驱动器号上的有效工作树。 | 4 条评论，0 👍 |

---

## 关键 PR 进展

| PR | 状态 | 摘要 |
|----|--------|---------|
| **#95409** | **已关闭** | `mods/agents-md`：在 `mods/agents-md/` 下添加了 AGENTS.md 项目指令 mod——包含 manifest、钩子模块、测试和 README。通过 `instructionFiles` 选项读取 `AGENTS.md`，方式与引擎读取 `CLAUDE.md` 相同。 |

*注：过去 24 小时内仅有 1 个 PR 更新。社区功能开发可能在分支中进行或等待审核。*

---

## 功能请求趋势

根据 issue 分析，以下主题主导了社区请求：

1. **多账户/多连接器支持** — 团队需要在同一提供商的不同账户之间切换而无需重新认证 (#27302)
2. **工作树自定义** — 强烈要求控制 git 工作树的位置，包括 `.claude` 之外的同级目录 (#27282)
3. **桌面应用体验改进** — 持久化使用指示器 (#80261)、窗口管理修复 (#89467)、会话侧边栏稳定性 (#92179)
4. **平台特定修复** — Windows VM 兼容性 (#73386)、大小写敏感路径问题 (#91618)、Linux 后台会话回归 (#65051)
5. **自动化与钩子** — 程序化会话重命名 (#40346)、全局 AGENTS.md 支持 (#95795)

---

## 开发者痛点

- **Windows 桌面问题**：窗口始终置顶行为、VM 共享文件夹写入失败和大小写敏感驱动器号检查阻碍了开发流程
- **后台会话回归**：守护进程会话中的文本块丢失 (#65051) 和 Monitor 超时 (#94553) 破坏了长时间运行任务的可靠性
- **认证复杂性**：CVP（Claude 供应商计划）审批困惑 (#88961) 和单一连接器限制 (#27302) 让企业用户感到沮丧
- **命名混淆**："Bash" 工具实际运行用户的登录 shell (#91498)，误导用户和 AI 模型
- **工作树池化**：会话到工作树分配错误 (#91405) 存在未提交工作丢失的风险——数据安全隐患

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this GitHub community digest from English to Chinese. I need to follow the rules provided:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences around the whole output
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, issue/PR references verbatim
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the formatting and structure while making it read naturally in Chinese.</think>

# OpenAI Codex 社区动态

**日期：** 2026-09-23

---

## 今日要闻

Codex v0.156.0 带来重大 UI 升级，推出可选的全屏 TUI 模式，支持搜索对话记录、鼠标选中和右键复制。语音对话现为默认启用，支持 F8 快捷键切换和 `/voice settings` 配置面板。本次发布还包括多项网络策略强化改进，确保 Codex 各组件的网络限制策略始终保持一致。

---

## 版本发布

### rust-v0.156.0
**主要功能：**
- **全屏界面** — 新增 `/tui` 命令启动可选全屏界面，支持对话搜索、鼠标文本选中和右键复制（#46732、#46734、#46883、#46895）
- **语音对话默认启用** — F8 键盘快捷键切换，`/voice settings` 语音配置面板，集成音频文件

### rust-v0.157.0-alpha.10
alpha 版本持续迭代中。

---

## 热门 Issue

| # | Issue | 摘要 | 评论数 |
|---|-------|---------|----------|
| 1 | **[#29343](https://github.com/openai/codex/issues/29343)** | Chrome 插件、浏览器和 computer-use 拒绝与某些网站交互 — Codex 静默拒绝加载使用 Chrome 插件的特定网站 | 33 |
| 2 | **[#40575](https://github.com/openai/codex/issues/40575)** | [RFC] 迈向自演进智能体：交互式指令蒸馏（/learn）与 AGENTS.md 规则代谢机制 | 31 |
| 3 | **[#42739](https://github.com/openai/codex/issues/42739)** | Windows：本地项目在侧边栏中消失 — Windows 桌面更新后项目区显示"无项目" | 26 |
| 4 | **[#44696](https://github.com/openai/codex/issues/44696)** | Windows 沙盒辅助程序失败，错误码 helper_unknown_error：setup refresh 在每次 exec_command 和文件读取时均报错 | 17 |
| 5 | **[#32492](https://github.com/openai/codex/issues/32492)** | Windows 应用卡在"完成 Windows 设置" — 沙盒设置从未触发真正的 UAC 提示 | 16 |
| 6 | **[#44398](https://github.com/openai/codex/issues/44398)** | [Bug] Astra composer 闪光动画阻止 kitty 中的鼠标文本选中和复制（0.154.0）— **已关闭** | 14 |
| 7 | **[#40550](https://github.com/openai/codex/issues/40550)** | Windows 应用安装失败，错误码 helper_failed / Access Denied，codex-windows-sandbox-setup.exe | 14 |
| 8 | **[#29156](https://github.com/openai/codex/issues/29156)** | 桌面端自定义 providers 无法与现有对话和模型选择器配合使用 — 35 👍 | 13 |
| 9 | **[#19984](https://github.com/openai/codex/issues/19984)** | TUI 在状态回放/恢复后丢失或错误报告活跃轮次计时器 | 10 |
| 10 | **[#24053](https://github.com/openai/codex/issues/24053)** | 桌面端 x64 构建缺少 computer-use appshot 服务，导致"无法附加 appshot" | 9 |

**值得关注：**
- Windows 平台问题占据半壁江山（前 10 中占 5 个），表明安装和稳定性存在显著障碍
- #29156 社区呼声最高（35 个赞）— 自定义模型 provider 集成是强烈诉求
- #40575 显示对自演进智能体功能的浓厚兴趣
- Computer-use 和沙盒问题影响核心功能

---

## 关键 PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| 1 | **[#47411](https://github.com/openai/codex/pull/47411)** | 在嵌入式 Codex 启动过程中应用共享网络策略 |
| 2 | **[#47410](https://github.com/openai/codex/pull/47410)** | 远程控制中遵循网络策略并恢复远程执行 |
| 3 | **[#47408](https://github.com/openai/codex/pull/47408)** | 为 AWS 认证和遥测强制执行应用网络策略 |
| 4 | **[#47407](https://github.com/openai/codex/pull/47407)** | 在 app-server 请求中强制执行应用网络策略 |
| 5 | **[#47405](https://github.com/openai/codex/pull/47405)** | [hotfix 0.156.0] 将 GPT-6 Sol 和 Luna 添加到模型目录 |
| 6 | **[#47398](https://github.com/openai/codex/pull/47398)** | 为登录和启动请求添加系统代理回退机制 |
| 7 | **[#47399](https://github.com/openai/codex/pull/47399)** | 全屏和浮层中尊重 tmux 鼠标设置 |
| 8 | **[#47397](https://github.com/openai/codex/pull/47397)** | 刷新捆绑的模型元数据和指令 |
| 9 | **[#47393](https://github.com/openai/codex/pull/47393)** | 重试 OpenAI 文件 blob 上传的瞬态失败 |
| 10 | **[#47389](https://github.com/openai/codex/pull/47389)** | 在 HTTP 和 WebSocket 请求中强制执行网络策略 |

**亮点：** 本周期内网络策略相关工作覆盖 6+ 个 PR — 在整个应用中强化一致的安全态势。

---

## 热门讨论

### 建议
- **[#40291](https://github.com/openai/codex/discussions/40291)** — 请求为 Codex 和智能体功能提供固定价格的高用量个人套餐
- **[#7366](https://github.com/openai/codex/discussions/7366)** — 引用被 gitignore 的文件（7 👍）
- **[#46658](https://github.com/openai/codex/discussions/46658)** — 超越 Auto 模式：学习分配模型、工具和子智能体
- **[#47211](https://github.com/openai/codex/discussions/47211)** — 汽车市场应用程序开发服务

### 问答
- **[#14104](https://github.com/openai/codex/discussions/14104)** — 在 Codex CLI 中插入新行（Shift+Enter）— 18 👍
- **[#45938](https://github.com/openai/codex/discussions/45938)** — PreToolUse 可以阻止/重写调用，但无法替换工具结果 — 这是刻意设计的边界吗？
- **[#47020](https://github.com/openai/codex/discussions/47020)** — 浏览器扩展问题

### 展示
- **[#47404](https://github.com/openai/codex/discussions/47404)** — DevRecap — 将你的 Codex + Claude + Git 历史转化为有据可查的工作报告
- **[#47278](https://github.com/openai/codex/discussions/47278)** — 作为远程 MCP 服务器的 GTD 看板
- **[#47231](https://github.com/openai/codex/discussions/47231)** — 移动端 Codex — 在 Android 上直接运行 Codex，无需远程 PC
- **[#47308](https://github.com/openai/codex/discussions/47308)** — GPT-5.6 Luna 不在 Codex 模型目录中 — Ubuntu 变通方案

---

## 功能需求趋势

1. **自演进智能体** — 交互式指令蒸馏（`/learn`）和规则代谢机制，实现智能体指令的持久化自定义
2. **增强的模型/工具分配** — 超越"Auto"模式，实现模型、推理强度、工具和子智能体的自适应分配
3. **自定义 provider 集成** — 桌面应用支持自定义模型 provider 与现有对话和模型选择器配合使用
4. **终端体验改进** — Shift+Enter 插入新行，更好地引用 gitignore 文件
5. **定价灵活性** — 为重度用户提供固定价格的高用量个人套餐

---

## 开发者痛点

1. **Windows 平台不稳定** — 沙盒设置、侧边栏项目消失、Windows 更新后安装失败等问题频发
2. **Computer-use 故障** — Chrome 插件/浏览器拒绝与特定网站交互，x64 构建缺少 appshot 服务
3. **语音/对话状态** — TUI 在状态回放后丢失轮次计时器，语音对话在线程导航时中断
4. **上下文压缩 bug** — 原地重写 rollout，导致对话记录永久丢失
5. **模型目录问题** — GPT-6 Sol/Luna 不在目录中，模型 404 错误，Astra 推理级别重置
6. **网络代理处理** — 登录/启动失败需要系统代理回退

---

*基于 GitHub 数据生成 • [openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this GitHub community digest from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate while keeping all the technical terms and structure intact:

The content includes:
- A title with date
- Today's Highlights section
- Releases section with a table
- Hot Issues section with 10 numbered items (P1 and P2)
- Key PR Progress section with a table
- Feature Request Trends section with a numbered list
- Developer Pain Points section with bullet points
- A horizontal rule at the end

Let me translate this carefully:</think>

# Gemini CLI 社区摘要 — 2026年09月23日

## 今日要闻

Gemini CLI 项目发布了新的夜间版本 **v0.62.0-nightly.20260922.gd5b3e3acc**，修复了代理互操作和 ACP 模式工具调用顺序问题。关键 P1 问题仍是焦点：子代理恢复 bug 将 MAX_TURNS 终止错误报告为 GOAL 成功，以及通用代理在委托给子代理时无限挂起。社区还在积极讨论零依赖操作系统沙箱和 AST 感知的代码库导航作为长期架构方向。

---

## 版本发布

| 版本 | 变更 |
|------|------|
| **v0.62.0-nightly.20260922.gd5b3e3acc** | **2 个修复**<br>• **fix(core)**: 规范化 proxy-agent 的 esbuild 互操作，解决环境代理解析问题 ([#29401](https://github.com/google-gemini/gemini-cli/pull/29401))<br>• **fix(cli)**: 在 ACP 模式下，于 request_permission 之前发出 tool_call 更新 ([#urielefrenvirtusa](https://github.com/google-gemini/gemini-cli/pull/urielefrenvirtusa)) |

---

## 热门 Issue

### P1 — 严重缺陷

1. **#22323 — MAX_TURNS 后子代理恢复被报告为 GOAL 成功**  
   **问题所在**: `codebase_investigator` 子代理在达到最大轮次限制未完成分析时，仍会虚假报告 `status: "success"` 和 `Termination Reason: "GOAL"`。这掩盖了中断情况，误导用户对任务完成的判断。  
   *13 条评论，2 👍*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/22323

2. **#21409 — 通用代理挂起**  
   **问题所在**: 每当 Gemini CLI 委托给通用代理时，它都会无限挂起——简单操作（如创建文件夹）会停滞长达一小时。这是完全的工作流阻塞器。  
   *8 条评论，8 👍*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/21409

3. **#21983 — 浏览器子代理在 wayland 上失败**  
   **问题所在**: 浏览器子代理在 Wayland 显示服务器上失败，限制了非 X11 的 Linux 环境下的 CLI 功能。  
   *4 条评论，1 👍*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/21983

4. **#22186 — get-shit-done 输出钩子导致崩溃**  
   **问题所在**: get-shit-done 代理在最终输出生成期间崩溃，抛出错误并阻止任务完成。  
   *3 条评论*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/22186

### P2 — 高优先级 Issue

5. **#19873 — 通过零依赖操作系统沙箱利用模型的 bash 亲和性**  
   **问题所在**: 一项重要的架构提案，旨在不牺牲安全性的前提下利用 Gemini 3 的原生 POSIX 工具亲和性（grep、cat、sed、awk）。将从根本上改进代码库探索和编辑能力。  
   *9 条评论，1 👍*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/19873

6. **#22745 — 评估 AST 感知文件读取、搜索和映射的影响**  
   **问题所在**: 一个 EPIC 追踪调查研究——AST 感知工具可以减少因文件读取不对齐导致的 token 浪费，并在单次工具调用中实现精确的方法边界检测。  
   *7 条评论，1 👍*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/22745

7. **#21968 — Gemini 没有充分利用 skills 和子代理**  
   **问题所在**: 用户报告 Gemini 即使在任务直接相关时也很少自主调用自定义 skills 或子代理——需要明确提示才能激活，违背了 skill 定义的初衷。  
   *6 条评论*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/21968

8. **#26525 — 添加确定性脱敏并减少自动记忆日志记录**  
   **问题所在**: 自动记忆在脱敏之前将转录内容发送给模型，服务可能会记录敏感信息——对敏感代码库存在安全风险。  
   *5 条评论*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/26525

9. **#22267 — 浏览器代理忽略 settings.json 覆盖**  
   **问题所在**: 浏览器代理完全忽略 `settings.json` 中的配置覆盖（如 `maxTurns`），导致无法进行按项目定制。  
   *4 条评论*  
   🔗 https://github.com/google-gemini/gemini-cli/issues/22267

10. **#26522 — 停止自动记忆重试低信号会话**  
    **问题所在**: 自动记忆无限重试标记为低信号的会话，浪费后台提取资源且永远无法取得进展。  
    *4 条评论*  
    🔗 https://github.com/google-gemini/gemini-cli/issues/26522

---

## 关键 PR 进展

| PR | 优先级 | 描述 |
|----|--------|------|
| **#29448** | P1 | **fix(auth)**: 防止因文件争用、headless keyring 和 supervisor 状态丢失导致的无限认证循环——解决 Windows/WSL/headless 环境的认证死锁 |
| **#29451** | P1 | **fix(core)**: 限制工具输出大小并优化长时间运行的代理循环中的内存生命周期——防止高频率工具调用中的无限制内存增长 |
| **#29452** | P1 | **fix(cli)**: 将工具确认与 IDE diff RPC 解耦以防止 UI 冻结——修复 IDE 集成终端中回车键冻结问题 |
| **#29445** | P1 | **fix(cli)**: 区分不可读的 MCP 启用配置与缺失的配置——防止损坏的配置启用所有 MCP 服务器 |
| **#29446** | P1 | **fix(cli)**: 区分缺失的 MCP 启用配置与格式错误的 JSON——保护现有配置不被覆盖 |
| **#29444** | P1 | **fix(cli)**: gemini mcp enable/disable 从未匹配任何服务器——修复了损坏的服务器名称匹配 |
| **#29449** | — | **feat(skills)**: 添加 pkgdiet 依赖防护——自动检查 npm/yarn/pnpm 包是否健康/包大小/弃用 (PkgDiet MCP) |
| **#29443** | P1 | **功能**: 添加 Gemini 3.8 Flash 和 Gemini 3.5 Flash Lite 支持——Flash 系列的最新 GA 模型 |
| **#29450** | — | **refactor(a2a-server)**: 实现 V1 到 V2 设置迁移逻辑——配置架构的向后兼容 |
| **#29447** | P2 | **fix(sdk)**: 将 env、timeoutSeconds 和外部信号接入 SdkAgentShell——之前被静默丢弃 |

---

## 功能需求趋势

根据 Issue 分析，社区正在推动的方向：

1. **AST 感知工具** — 通过语法树分析实现精确代码导航，减少 token 浪费并提高文件读取准确性 (#22745, #22746)
2. **操作系统级沙箱** — 零依赖沙箱，在不牺牲安全性的前提下利用模型的原生 bash 亲和性 (#19873)
3. **改进的子代理利用** — 无需明确提示即可自主调用 skills 和子代理 (#21968)
4. **持久化任务追踪** — 用基于文件的 CRUD 追踪替代上下文中的 WriteToDo，以在会话恢复后保留 (#18836, #21000)
5. **精细/精准读取** — 节约 token 的代码发现层级，优先使用 grep_search 而非完整文件读取 (#19561)
6. **增强的记忆控制** — 确定性脱敏、会话重试限制和无效补丁的收件箱隔离 (#26525, #26522, #26523)

---

## 开发者痛点

Issue 追踪器中最常见的挫折：

- **代理挂起**: 通用代理的死锁在某些情况下阻止任何工作 (#21409)
- **配置被忽略**: 浏览器代理和其他子代理忽视 `settings.json` 覆盖，强制使用全局设置 (#22267)
- **内存膨胀**: 长时间运行的代理循环在工具输出无限制的情况下消耗无界内存 (#29451)
- **认证循环**: Windows/WSL/headless 用户遇到无限认证周期 (#29448)
- **MCP 服务器配置错误**: 损坏或缺失的启用配置静默启用所有服务器，造成安全/理智问题 (#29445, #29446)
- **工具截断 bug**: UTF-16 代理对在显示截断期间被静默丢弃，导致输出中的 emoji 损坏 (#29304)

这些问题整体上凸显了核心代理工作流的不稳定性、配置管理缺陷，以及持续使用中的内存/性能问题。

---

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese. I need to:

1. Translate all the content while keeping the exact Markdown structure
2. Preserve headings, tables, lists, etc.
3. Keep URLs, issue numbers, project names, etc. as-is
4. Use natural technical Chinese suitable for a developer newsletter

Let me go through and translate each section:

**Title:**
# GitHub Copilot CLI 社区简报 — 2026-09-23

**Today's Highlights:**
今天要闻

**Releases:**
版本发布

**Hot Issues:**
热门问题

**Key PR Progress:**
重要 PR 进展

**Feature Request Trends:**
功能需求趋势

**Developer Pain Points:**
开发者痛点

Now let me translate the full content...</think>

# GitHub Copilot CLI 社区简报 — 2026-09-23

---

## 今天要闻

GitHub Copilot CLI 发布了 **v1.0.89-0**，新增 Claude Opus 5.5 支持并改进了 Connector 同意流程的用户体验。团队还修复了与 Ghostty 和 WezTerm 的终端通知兼容性问题。不过仍有数个高优先级问题待解决：会话压缩持续导致内存溢出，`/ask` 命令在自动模式下失效，以及插件市场注册出现回归，导致自定义市场配置静默失败。

---

## 版本发布

| 版本 | 日期 | 主要更新 |
|------|------|----------|
| **v1.0.89-0** | 2026-09-23 | 新增 `claude-opus-5.5` 支持。改进托管 Connector 同意流程，连接/重连时授权 URL 可复制。 |
| **v1.0.88** | 2026-09-22 | 新增可选的 OSC 777 终端通知，兼容 Ghostty 和 WezTerm 直连会话。修复底部锚定对话框中的文本选择问题（设备登录码）。刷新托管设置失败时保留 `/allow-all` 设置，并记住缺失路径的精确会话授权。 |
| **v1.0.88-2** | 2026-09-22 | 修复底部锚定对话框中的文本选择问题。 |

---

## 热门问题

### 1. [disable-model-invocation: true 使技能无法访问](https://github.com/github/copilot-cli/issues/4438) — 7 条评论，9 👍
**领域：** 智能体  
技能 `SKILL.md` 前置matter 中设置了 `disable-model-invocation: true` 的项目技能完全无法访问——即使显式调用也返回"技能未找到"。技能在 `copilot skill list` 中可见，但模型的 `skill()` 工具无法调用它。社区反馈：9 个点赞表明这破坏了一个已文档化的功能。

### 2. [服务器管理的 extraKnownMarketplaces 注册失败](https://github.com/github/copilot-cli/issues/4556) — 4 条评论，2 👍
**领域：** 插件、配置  
服务器管理的市场条目成功获取和解析，但从未合并到插件/市场代码路径。这种静默的认证失败意味着 `copilot plugin marketplace list` 只显示默认值，用户困惑于配置的市场为何不生效。

### 3. [rubber-duck: model 参数静默覆盖互补策略](https://github.com/github/copilot-cli/issues/4432) — 3 条评论
**领域：** 智能体  
rubber-duck 子智能体特意省略 `model:` 以利用跨模型家族的第二意见互补策略。然而，`task` 工具暴露了一个不透明的 `model` 参数，会覆盖此行为，没有任何警告。

### 4. [event-storage 耗尽触发重试风暴和内存溢出](https://github.com/github/copilot-cli/issues/4639) — 3 条评论
**领域：** 分诊  
远程 event-storage 耗尽的长会话触发级联反应：反复尝试刷新 500 事件，强制 GC/压缩，桥接确认泛洪，最终导致 Node 内存溢出。没有优雅降级。

### 5. [会话在回合结束时因排队消息永久卡死](https://github.com/github/copilot-cli/issues/4755) — 3 条评论
**领域：** 智能体会话  
当排队通道消息在回合结束时到达，会话进入永久卡死状态：既不空闲也不运行，不接受任何输入，排队的消息静默无效。只有结束进程才能恢复。

### 6. [会话压缩内存溢出且永不完成](https://github.com/github/copilot-cli/issues/4780) — 3 条评论，3 👍
**领域：** 会话  
会话压缩进入不可恢复的崩溃循环：`session.compaction_start` 触发，压缩永不完成，进程在默认约 4.3 GB 堆限制下内存溢出。每次后续 `--resume` 都会重新进入崩溃循环。

### 7. [/ask 在自动模式下不工作](https://github.com/github/copilot-cli/issues/4919) — 3 条评论
**领域：** 分诊  
自动模式用户反复在使用 `/ask` 侧切时收到"不支持的模型"错误。影响 v1.0.86。简单复现：切换到自动模式，运行长时间任务，尝试 `/ask`。

### 8. [Copilot CLI 支持自定义模型端点](https://github.com/github/copilot-cli/issues/4003) — 3 条评论
**领域：** 模型  
VS Code 的语言模型面板支持本地/私有模型的自定义端点。Copilot CLI 缺少此功能，阻止了本地模型开发、企业私有模型使用，以及 IDE 中可能的测试工作流。

### 9. [扩展 SDK 重连时销毁会话钩子处理器](https://github.com/github/copilot-cli/issues/4590) — 3 条评论（已关闭）
**领域：** 智能体会话、插件  
当多个扩展活动时，任何 MCP 主机重新加载都会重启整个组。每个重启的扩展对同一会话调用 `session.resume`，SDK 连接拆除销毁钩子处理器，导致"会话 ID 未配置钩子处理器"错误。

### 10. [postToolUse 钩子 additionalContext 未注入智能体上下文](https://github.com/github/copilot-cli/issues/2980) — 3 条评论，4 👍（已关闭）
**领域：** 上下文内存、插件  
当 `postToolUse` 钩子发出 `additionalContext` 时，CLI 捕获输出但不转发到智能体的上下文窗口。上下文实际上丢失了。

---

## 重要 PR 进展

### 1. [#4770 — 文档说明 WebSocket 响应 opt-out](https://github.com/github/copilot-cli/pull/4770) — 开放中
**作者：** 1fanwang  
宣传 WebSocket 响应的模型默认使用它。当传输不可用（网络阻止 WebSocket 或会话因"400 输入项 ID 不属于此连接"失败）时，有逃生舱——但缺乏文档。此 PR 添加了缺失的文档。

> **注意：** 过去 24 小时内仅有一个 PR 更新。

---

## 功能需求趋势

基于问题分析，需求最多的功能方向是：

1. **自定义模型端点** — 用户希望与 VS Code 的自定义端点支持对等，用于本地/私有模型（#4003）
2. **插件切换功能** — 启用/禁用插件无需完全卸载的请求（#2714）
3. **会话压缩可靠性** — 不会导致内存溢出或使会话永久无法恢复的健壮压缩（#4780、#4639）
4. **自动模式 /ask 兼容性** — 修复自动模式下的 `/ask`（#4919）
5. **BYOK 模型思考令牌** — 无论端点如何，思考令牌/文本应在 BYOK 模型上工作（#3736）

---

## 开发者痛点

本周社区反复出现的挫败感集中在以下方面：

- **内存与压缩失败** — 多个问题（#4639、#4780、#4663）报告会话压缩导致内存溢出、重试风暴或永久性会话损坏。这是影响最大的痛点集群。
- **静默认证/配置失败** — 插件市场注册静默退出（#4556），并发写入时托管设置丢失（#4900），认证令牌停止刷新且无法恢复（#4929）。
- **模式特定故障** — `/ask` 在自动模式下损坏（#4919），rubber-duck 策略被 model 参数覆盖（#4432），BYOK Deepseek 停止工作（#4840）。
- **UI/UX 差距** — 底部锚定对话框中的文本选择刚刚修复，硬编码颜色破坏浅色主题（#3750），v1.0.74/75 中退出摘要消失（#4268）。
- **模型灵活性** — 缺乏自定义端点支持强制用户只能使用 IDE 工作流，自定义模型压缩因"工具选择必须是 auto"失败（#4646）。

---

*基于 github.com/github/copilot-cli 生成 — 2026-09-23*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English digest into Simplified Chinese, following the detailed rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
5. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate while maintaining the structure and technical accuracy.</think>

# OpenCode 社区简报 — 2026年9月23日

## 今日要闻

今日主要围绕 bug 修复和稳定性改进展开。关键问题包括 Windows ARM64 原生二进制 TUI 初始化失败、配置规范化静默丢弃 provider，以及多个会话管理问题。积极的方面包括：项目合并了 OAuth 凭证错误日志记录、Kimi 推理细节回放和 FreeBSD 源码构建支持的修复。

**本周无新版本**发布。

---

## 热门 Issue

### 1. Windows ARM64 原生版：OpenTUI 初始化失败
**#19130** | [查看 Issue](https://github.com/anomalyco/opencode/issues/19130) | 27 条评论 | 13 👍

在 Windows 11 ARM64 上，原生 ARM64 OpenCode 二进制文件的 CLI 命令（`--version`、`--help`）正常工作，但 TUI 初始化失败。问题涉及尝试运行交互式会话时 Bun FFI dlopen TinyCC 报错。这是依赖完整 OpenCode 体验的 ARM64 Windows 用户的一个重大阻塞问题。

### 2. Ollama 的自动压缩在每次工具调用后都触发
**#49965** | [查看 Issue](https://github.com/anomalyco/opencode/issues/49965) | 6 条评论

自动压缩功能对 Ollama（openai 兼容）provider 的每次工具调用步骤都会无条件运行，即使远未达到上下文限制。这给本地模型用户带来不必要的开销和潜在的上下文干扰。

### 3. 服务端插件重载静默丢失自定义 Agent
**#49982** | [查看 Issue](https://github.com/anomalyco/opencode/issues/49982) | 5 条评论

以后台服务方式运行（`opencode serve --service`）时，配置编辑反复失败，报错 `ERROR failed to reload plugins — TypeError: pe is not a function`。重载失败后，运行中的服务静默丢失所有文件发现的自定义 agent 和命令，直到重启——这是一个静默数据丢失问题。

### 4. 超大工作区差异导致 OOM 和约 30GB 数据库
**#43551** | [查看 Issue](https://github.com/anomalyco/opencode/issues/43551) | 3 条评论

当工作区中的文本文件持续增长时（例如 MCP 服务器追加的 API 日志达到 292 MB 和 407 MB），OpenCode 会跟踪变更并在消息摘要中嵌入文件差异。这些大型差异在每次 `message.updated` 事件时被完整重新序列化，导致严重的内存膨胀和数据库增长。

### 5. 配置规范化不指明出错的字段
**#50756** | [查看 Issue](https://github.com/anomalyco/opencode/issues/50756) | 3 条评论

配置规范化诊断 `skipped malformed recognized value` 仅报告 provider 根路径，不指明具体出错的字段。单个错误的 `package` ID 会静默丢弃整个 provider 及其下的所有模型，catalog 中毫无线索。

### 6. 模型 capabilities 缺少 tools 字段时静默跳过 provider
**#50340** | [查看 Issue](https://github.com/anomalyco/opencode/issues/50340) | 3 条评论

在原生 V2 配置中，模型条目的 `capabilities` 省略 `tools` 会导致验证失败，整个 provider 条目被静默跳过。其模型从选择界面消失，仅在服务器日志中留下一行记录。这种未记录的行为会破坏从 V1 迁移的自定义 provider 配置。

### 7. 从侧边栏创建的新会话永不响应
**#49561** | [查看 Issue](https://github.com/anomalyco/opencode/issues/49561) | 3 条评论 | 1 👍

OpenCode Desktop（Windows 11）从侧边栏创建新聊天窗口，但发送消息后没有助手回复，也没有可见错误。同一个项目上 CLI 正常工作，表明是桌面版特定的会话初始化 bug。

### 8. 当 capabilities 省略 tools 时自定义 provider 被静默跳过
**#49912** | [查看 Issue](https://github.com/anomalyco/opencode/issues/49912) | 3 条评论

从 V1 迁移的自定义 provider 在模型的 `capabilities` 省略 `tools` 时被静默跳过。V1 模型只有 `modalities`（无 `tool_call`），所以字面迁移得到 `capabilities: {input, output}` 不含 `tools`——整个 provider 消失。

### 9. 波斯语文字不显示 RTL
**#50747** | [查看 Issue](https://github.com/anomalyco/opencode/issues/50747) | 2 条评论

波斯语文本不渲染为从右到左。字母显示为断开连接，文本方向保持 LTR，使波斯用户难以阅读内容。

### 10. 主题 Token 重命名静默破坏插件文字颜色
**#49922** | [查看 Issue](https://github.com/anomalyco/opencode/issues/49922) | 2 条评论

OpenCode 2.0.9 重命名了解析后的文字主题 token（`text.subdued` → `text.muted`、`text.feedback.<kind>.default` → `text.feedback.<kind>.base`）而未保留别名。使用旧名称的 TUI 插件得到 `undefined`，导致文字回退到终端默认值。

---

## 关键 PR 进展

### 1. FreeBSD 源码构建支持
**#48655** | [查看 PR](https://github.com/anomalyco/opencode/pull/48655) | Open

添加 FreeBSD 源码构建支持。在 FreeBSD 上，`bun install` 跳过 `@ff-labs/fff-bun`（无 freebsd 条目），导致静态导入崩溃。PR 用动态解析替代静态导入。

### 2. 在 Toast 中显示 API 错误消息
**#50778** | [查看 PR](https://github.com/anomalyco/opencode/pull/50778) | Open

修复 TUI 对所有 MCP 服务器登录错误都显示"认证失败"的问题。服务器现在记录真实失败消息，但 TUI 需要向用户正确显示。

### 3. 记录 MCP OAuth 和凭证失败的错误消息
**#50767** | [查看 PR](https://github.com/anomalyco/opencode/pull/50767) | Merged

`ErrorSummary.from` 将每个错误简化为 `type`、`code` 和 `errno`，丢失了实际错误消息。此修复在日志中保留 OAuth 和凭证失败的错误详情，涉及九个调用点。

### 4. 降级而非崩溃：处理格式错误的工具结果内容
**#50776** | [查看 PR](https://github.com/anomalyco/opencode/pull/50776) | Open

当工具结果内容格式错误时，防止 `prepare` 中的崩溃。PR 对意外内容结构优雅降级而非抛出错误。

### 5. 导出完整会话记录
**#50733** | [查看 PR](https://github.com/anomalyco/opencode/pull/50733) | Merged

Markdown `/export` 和记录复制现在格式化完整的服务端会话导出，而非截断数据。

### 6. 后台任务缺失时前台任务失败
**#50774** | [查看 PR](https://github.com/anomalyco/opencode/pull/50774) | Open

当 `BackgroundJob` 注册表中没有前台子 agent 会话的条目时，父 `TaskTool` 之前渲染的是文本为空的 `completed` 任务结果。此 PR 正确失败而非静默返回假成功。

### 7. 存储 API 密钥时保持控制台登录可见
**#50763** | [查看 PR](https://github.com/anomalyco/opencode/pull/50763) | Merged

从 v1 升级的用户在*热门 provider*中失去 OpenCode Console 行。此修复在存储了 `opencode` API 密钥时保持登录可见。

### 8. 重启前等待服务关闭
**#50042** | [View PR](https://github.com/anomalyco/opencode/pull/50042) | Open

托管服务器可能在进程退出前删除其注册文件。此 PR 确保 `service restart` 在启动替代服务前等待正确关闭。

### 9. 在没有流式索引的情况下回放 Kimi 推理细节
**#50383** | [查看 PR](https://github.com/anomalyco/opencode/pull/50383) | Merged

修复启用了推理的 Kimi K3 会话在第二次 LLM 请求时死亡的问题。provider 拒绝回放包含流式索引的推理细节。

### 10. 协调 OAuth 凭证刷新
**#50760** | [查看 PR](https://github.com/anomalyco/opencode/pull/50760) | Open

协调本地实例间的 OAuth 凭证刷新，防止竞态条件和重复刷新尝试。

---

## 功能请求趋势

基于 Issue 分析，最多的功能请求方向包括：

1. **更好的会话压缩控制** — 用户希望在压缩会话时能够注入自定义指令（#42574），以及空闲时压缩和插件触发的压缩（#50777）

2. **增强的 Provider 配置验证** — 多个 issue 突出表明需要在配置失败时提供更清晰的错误消息，而不是静默丢弃 provider 或模型

3. **改进的 RTL 支持** — 波斯语文本渲染问题表明对正确双向文本支持的需求

4. **语音模式和高级自动化** — 功能请求 #50753 请求语音模式、一流浏览器自动化、目标驱动的任务循环和应用内插件发现

5. **TUI 插件 API 增强** — 请求向插件暴露当前模型/agent 选择（#50315）和更好的会话事件处理

---

## 开发者痛点

本周反复出现的挫折集中在**静默失败**：

- **配置静默丢弃**：当配置有微小问题时 provider 和模型消失，没有清晰的错误消息（缺少 `tools` 字段、格式错误的 package ID）
- **会话状态丢失**：插件重载失败静默擦除自定义 agent；更新后原有会话消失
- **错误消息丢失**：OAuth 和凭证失败被简化为通用错误代码，使调试困难
- **数据库膨胀**：增长的工作区文件因完整差异序列化导致大量内存和数据库增长
- **平台特定问题**：Windows ARM64、FreeBSD 和跨平台行为差异造成体验不一致
- **主题破坏性变更**：token 重命名未保留别名，破坏现有插件

这些模式表明在配置和会话管理流程中需要更强的防御性错误处理和面向用户的反馈。

---

*简报基于 2026年9月23日的 GitHub 数据生成*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Chinese (Simplified). I need to:

1. Translate the content into Simplified Chinese
2. Keep all the markdown structure, tables, links, code references, issue/PR numbers exactly as-is
3. Use natural technical Chinese register (like a Chinese developer newsletter)
4. Output ONLY the translation with no preamble or explanation

Let me translate this carefully while preserving the structure:

Key points to translate:
- Title: "Pi Community Digest — 2026-09-23"
- Today's Highlights section
- Releases section (v0.87.1)
- Hot Issues table
- Key PR Progress table
- Hot Discussions table
- Feature Request Trends
- Developer Pain Points

Let me translate:</think>

# Pi 社区摘要 — 2026-09-23

## 今日要闻

v0.87.1 版本带来了 **Claude Opus 5.5、GPT-6 Sol 和 GPT-6 Luna** 的支持，同时 **Grok 4.7 成为新的默认模型**。社区活跃度保持高位，过去 24 小时内有 50 个 issue 和 26 个 PR 更新。主题主要包括全屏模式下的性能回归、提供商模型发现 bug，以及多个会话/转录处理问题。

---

## 版本发布

### v0.87.1
- **前沿模型支持**：Claude Opus 5.5、GPT-6 Sol 和 GPT-6 Luna 现已通过支持的提供商可用，包括 GitHub Copilot
- **默认模型升级**：Grok 4.7 现为默认模型
- **文档**：发布了新的模型选择指南

**参考**：[选择模型](https://github.com/earendil-works/pi/blob/v0.87.1/packages/coding-agent/docs/models.md#select-a-model)

---

## 热门 Issue

| # | Issue | 为何重要 | 评论数 |
|---|-------|----------|--------|
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search 不索引新发布的 pi-packages** — 带有 `pi-package` 关键字和清单的包不会出现在 `npm search` 结果中，导致 pi.dev/packages 画廊无法使用 | 破坏了整个包生态系统的可发现性 | 13 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | **PI_OFFLINE 静默禁用所有提供商模型发现** — 文档说明仅禁用启动时的维护工作，但实际上会禁用整个会话期间的所有网络调用 | 影响依赖离线模式进行非网络操作的用户 | 12 |
| [#9843](https://github.com/earendil-works/pi/issues/9843) | **0.86.x 回归：litellm.APIConnectionError 长请求超时** — 通过 LiteLLM 代理的 OpenAI 兼容请求在中途出现错误 | 影响生产工作流的 0.85.1 回归 | 10 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **全屏模式滚轮滚动速度比普通模式慢 3 倍** — TUI 全屏模式中的用户体验回归 | 10 条评论，6 👍 — 影响用户体验的性能问题 | 10 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | **0.86.0 回归：RPC steer 成功无法与扩展处理的输入关联** — RPC 客户端无法可靠地确定 steer 通过扩展处理器后哪条输入被排队 | 破坏 RPC 扩展集成 | 10 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **大型转录每帧都重新渲染；每次调整大小都重新发送整个转录** — 导致 Windows 11 上大型会话时 1 个核心被占满 | 影响工作效率的严重性能回归 | 7 |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | **压缩被 Anthropic Claude Fable 拒绝** — 因为思考块被转录到总结提示中，触发了分类器拒绝 | 破坏特定模型的会话压缩 | 7 |
| [#9884](https://github.com/earendil-works/pi/issues/9884) | **可用性检查互相取消，在启动时静默替换配置的默认模型** — 并发的可用性检查无序发布，导致模型选择错误 | 微妙的启动行为 bug | 3 |
| [#9784](https://github.com/earendil-works/pi/issues/9784) | **元问题：允许扩展访问响应体中的提供商特定字段** — AssistantMessage 是一个"普洛克鲁斯忒斯之床"，剥离了提供商特定数据 | 社区对扩展 API 扩展性的反复请求 | 3 |
| [#9930](https://github.com/earendil-works/pi/issues/9930) | **session-manager 元数据条目可能成为会话的叶子节点，静默截断转录** — 以 session_info 元数据结尾的会话文件被截断 | 会话处理中的数据丢失风险 | 3 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| [#9934](https://github.com/earendil-works/pi/pull/9934) | **feat(ai,coding-agent): 添加 Yolo-Auto 提供商** — 新的内置 OpenAI 兼容订阅网关，支持运行时模型自动发现（`qwen3.8-flash`、`yolo`、`yolo-small`） | 已合并 |
| [#9569](https://github.com/earendil-works/pi/pull/9569) | **fix(ai): 强制转换 JSON 编码的对象和数组工具参数** — 修复模型双重编码嵌套 JSON 值的问题 | 开放 |
| [#9908](https://github.com/earendil-works/pi/pull/9908) | **fix(coding-agent): 避免 Fable 分段总结拒绝** — 通过将对话内容与指令分离来修复 #9652 | 已合并 |
| [#9926](https://github.com/earendil-works/pi/pull/9926) | **feat(coding-agent): 添加自定义提供商显示名称** — 允许在 `models.json` 中配置状态栏显示的名称 | 已合并 |
| [#9924](https://github.com/earendil-works/pi/pull/9924) | **showHardwareCursor 为 true 时不渲染假光标** — 尊重终端光标形状配置（如 kitty 的 `beam`） | 已合并 |
| [#8398](https://github.com/earendil-works/pi/pull/8398) | **feat: 添加颜色值和主题样式** — 重构 TUI/主题以直接暴露颜色，支持代理样式和未来 UI | 开放 |
| [#9921](https://github.com/earendil-works/pi/pull/9921) | **feat(coding-agent): 添加 enableShareCommand 设置** — 允许通过 settings.json 禁用 `/share` 命令 | 已合并 |
| [#9920](https://github.com/earendil-works/pi/pull/9920) | **fix(ai): Replay 时省略空的 Codex 最终答案** — 通过过滤孤立的空消息来修复 #9918 | 已合并 |
| [#9916](https://github.com/earendil-works/pi/pull/9916) | **更新 Claude Code 版本至 2.1.280** — 支持 Opus 5.5 所需 | 已合并 |
| [#9902] | **保留模型切换时的思考层级** — 修复重新应用全局默认值的模型切换回归 | 开放 |

---

## 热门讨论

| # | 讨论 | 分类 |
|---|------------|----------|
| [#3373](https://github.com/earendil-works/pi/discussions/3373) | **你最喜欢与 Pi 代理一起使用的插件、附加组件或扩展是哪些？** | 展示与分享 |

*社区分享最爱的扩展和插件 — 18 条评论，9 👍*

---

## 功能请求趋势

根据 issue 和讨论，最请求的方向是：

1. **提供商扩展性** — 反复请求扩展访问提供商特定的响应字段（issue #9784）
2. **性能优化** — 全屏滚动、大型转录渲染、会话列表效率
3. **配置灵活性** — 将压缩阈值与 reserveTokens 分离，可自定义思考显示设置
4. **模型发现可靠性** — 修复可用性检查竞态条件，PI_OFFLINE 行为明确性
5. **会话完整性** — 元数据截断 bug、会话文件损坏预防

---

## 开发者痛点

1. **静默破坏性变更** — PI_OFFLINE 范围蔓延和 RPC steer 关联 bug 导致微妙的生产问题
2. **回归模式** — 多个 0.86.x 回归影响 LiteLLM、RPC、模型切换和压缩
3. **文档缺口** — Component.invalidate() 缺失文档，RPC 命令路径/位置不匹配
4. **提供商兼容性** — Ollama 模型路径识别在 0.86.0 后损坏，llama.cpp 在特定模型下崩溃
5. **规模化性能** — 大型会话导致帧饱和渲染和重新渲染风暴

---

*基于 github.com/earendil-works/pi 生成 — 2026-09-23*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest into Chinese. I need to:
1. Translate all the text content
2. Keep URLs, numbers, issue numbers, code, etc. as-is
3. Maintain the Markdown structure exactly
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate section by section:

---

# Qwen Code 社区速览 — 2026-09-23

## 今日要闻

Qwen Code 项目持续推进架构演进，新的 **Managed Agent 双向架构提案** 已提上日程，同时围绕工具执行的 **沙箱安全加固** 也在持续优化。CLI 新增多个 Linux/WSL 环境下剪贴板相关的修复，Desktop 客户端也解决了侧边栏收起时的 UI 对齐问题。每日构建版本正在向 v0.24.5 推进，桌面端 v0.24.4 稳定版现已发布。

---

## 版本发布

| 版本 | 类型 | 变更摘要 |
|------|------|---------|
| **v0.24.5-preview.0** | 预览版 | 下一稳定版的候选版本 |
| **v0.24.4** | 稳定版 | 当前稳定版本 |
| **v0.24.4-nightly.20260922** | 每日构建 | 最新每日构建版本 |
| **desktop-v0.24.4** | 桌面端 | Qwen Code 桌面端稳定版 — 包含 review 覆盖率修复和从 plan 读取覆盖率分母的功能 |

*v0.24.4 关键修复：* 修正了 deferred-tool 桥接路径的遗留行为，使其不再导致某些路径处于 stale/untested 状态；在系统提示词指导中新增 monitor 工具相关说明。

---

## 热门 Issue

### 1. 

这个 RFC 旨在实现可靠的自动内存召回机制，包括三个阶段：已合并的遥测数据收集、审查中的有界初始轮次召回和确定性快速路径，以及多语言评估相关的召回精度优化。该功能将直接影响上下文性能和后台自动化能力。

### 2. 

提议构建分阶段的 Managed Agent 架构，保留现有的 TypeScript agent 循环，使模型推理独立于工具环境供应，并赋予会话持久的所有权、工作区绑定、可恢复的工具执行和稳定的 WebSocket 接口。

这解决了会话管理、多代理和平台分发的路线图问题。

### 3. 

终端 UI 在移动设备软键盘 / Termux 上使用 append-only Static 路径（`ui.useTerminalBuffer: false`）时会丢失 transcript 行，因为捆绑的 ink 7.0.3 早于上游的 rows-shrink 修复。虚拟化历史路径未受影响，影响移动设备上的交互式 CLI 使用。

### 4. 

该提案旨在推进工具执行沙箱设置的安全加固。在 PR #12267 将 Linux bubblewrap 隔离从整个 CLI 迁移到各个工具执行后，经过五轮审查，已验证并修复了边界问题。

现在需要跟踪剩余的正确性工作，这对 Linux 沙箱安全至关重要。

### 5. 

`POST /session` 可能成功但向客户端返回网关超时，导致会话 ID 丢失。客户端无法安全地提交第一个提示或重试创建，影响守护进程/web-shell 场景中的会话管理可靠性。

### 6. 

当 Linux/WSL2 中缺少 `wl-paste`/`xclip` 时，Ctrl+V 完全失败，没有错误或备选方案。没有图片附件，没有文本粘贴，没有消息提示，影响 Linux 上的交互式 CLI 工作流。

### 7. 

当会话启动时的 `available_commands_update` 通知超过 `MAX_JSON_NODES`（10,000）限制时，ACP 桥接器会关闭式拆除通道，终止子进程，并丢弃会话。

这属于严重级别的问题，导致后续所有请求都返回"No session with id"错误。

### 8. 

左侧边栏收起时，"新建任务"图标与其他图标的垂直对齐出现问题，目前已在 Windows x64 web-shell 上复现。

### 9. 

诊断拉取失败被误报为"No diagnostics found"并标记为 `is_error: false`，这会造成代码已通过检查的错误印象，影响语言服务器集成的核心可靠性。

### 10. 

MCP 客户端将 tools-only 服务器对 prompts/list 和 resources/list 请求返回的 `-32601` 响应视为传输错误，导致错误地标记为已断开连接，影响 MCP 集成的稳定性。

---

## 关键 PR 进展

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#12506](https://github.com/QwenLM/qwen-code/pull/12506) | doudouOUC | **feat(cli):** 新增托管运行时证明 worker — 最小化证明 Runtime 的引导路径，无需加载 CLI/model/Harness/Session |
| [#12507](https://github.com/QwenLM/qwen-code/pull/12507) | holny | **fix(cli):** 使用 Linux 特有的不可用消息处理剪贴板粘贴失败场景 (#12504) |
| [#12456](https://github.com/QwenLM/qwen-code/pull/12456) | wenshao | **docs(verify-pr):** 新增 persisted-state、steady-state 和 skip-coverage 规则 |
| [#12308](https://github.com/QwenLM/qwen-code/pull/12308) | callmeYe | **feat(serve):** 支持在会话创建时选择模型和推理策略 |
| [#12473](https://github.com/QwenLM/qwen-code/pull/12473) | holny | **fix(acp-bridge):** 恢复时删除遗留的 file:// 记录，强制转为临时状态 |
| [#12497](https://github.com/QwenLM/qwen-code/pull/12497) | waybarrios | **test(core):** 在单元测试层面固定 CodeModeOnly 桥接行为 |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | jkxiao | **feat(extensions):** 支持从目录加载部署管理的扩展 |
| [#12439](https://github.com/QwenLM/qwen-code/pull/12439) | callmeYe | **fix(web-shell):** 空闲时清理过时的流式消息 |
| [#12107](https://github.com/QwenLM/qwen-code/pull/12107) | callmeYe | **perf(core):** 并行化扩展加载循环 |
| [#12495](https://github.com/QwenLM/qwen-code/pull/12495) | waybarrios | **fix(core):** 将 sed `--quiet`/`--silent` 分类为只读操作 |
| [#11854](https://github.com/QwenLM/qwen-code/pull/11854) | DragonnZhang | **feat:** 新增混合代码模式 — `tools.mode` 枚举支持 `direct`、`code_mode`、`code_mode_only` |
| [#12475](https://github.com/QwenLM/qwen-code/pull/12475) | qwen-code-dev-bot | **feat(channels):** 将组成员访问与发送者策略解耦 |

---

## 功能需求趋势

根据 issue 分析，以下功能方向显示出强烈的社区需求：

1. **会话管理与容错** — 超时后会话恢复、多工作区路由、会话持久化
2. **Agent 架构** — Managed Agent 双向架构、后端代理、多代理编排
3. **安全加固** — 工具执行沙箱（Linux bubblewrap）、Auto 模式下 git 命令门控
4. **MCP 集成** — tools-only 服务器的更好处理、作用域化工具调用、更广泛的应用支持
5. **浏览器/Web 集成** — 通过 Daemon + WebUI 复活 Chrome 扩展、直接浏览器控制（Qwen WebBridge）
6. **剪贴板可靠性** — Linux/WSL 剪贴板回退、PowerShell 互操作、更完善的错误提示

---

## 开发者痛点

1. **Linux 剪贴板故障** — 缺少 `wl-paste`/`xclip` 时多种静默失败，用户得不到任何反馈
2. **大通知后会话中断** — ACP 桥接器在超大的 `available_commands_update` 时关闭，导致后续请求全部失败
3. **MCP 断连误报** — tools-only MCP 服务器被错误标记为已断开
4. **编辑器缺失时仍提供编辑选项** — 即使配置的编辑器不可用，仍会向用户展示外部编辑器选项
5. **移动端 TUI 行丢失** — 移动设备/软键盘调整视口大小时，终端 UI 会丢失 transcript 行
6. **扩展加载性能** — 串行扩展加载导致冷启动延迟（正在并行化中）

---

*速览内容基于 GitHub 数据生成 — 2026-09-23*</think>

# Qwen Code 社区速览 — 2026-09-23

## 今日要闻

Qwen Code 项目持续推进架构演进，新的 **Managed Agent 双向架构提案** 已提上日程，同时围绕工具执行的 **沙箱安全加固** 也在持续优化。CLI 新增多个 Linux/WSL 环境下剪贴板相关的修复，Desktop 客户端也解决了侧边栏收起时的 UI 对齐问题。每日构建版本正在向 v0.24.5 推进，桌面端 v0.24.4 稳定版现已发布。

---

## 版本发布

| 版本 | 类型 | 变更摘要 |
|------|------|---------|
| **v0.24.5-preview.0** | 预览版 | 下一稳定版的候选版本 |
| **v0.24.4** | 稳定版 | 当前稳定版本 |
| **v0.24.4-nightly.20260922** | 每日构建 | 最新每日构建版本 |
| **desktop-v0.24.4** | 桌面端 | Qwen Code 桌面端稳定版 — 包含 review 覆盖率修复和从 plan 读取覆盖率分母的功能 |

*v0.24.4 关键修复：* 修正了 deferred-tool 桥接路径的遗留行为，使其不再导致某些路径处于 stale/untested 状态；在系统提示词指导中新增 monitor 工具相关说明。

---

## 热门 Issue

### 1. [RFC: 可靠的自动内存召回机制](https://github.com/QwenLM/qwen-code/issues/7040) — 11 条评论
**优先级 P2 | 功能需求 | 已关闭**

定义了可靠的自动内存召回机制的多阶段路线图：交付遥测（已合并）、有界初始轮次召回 + 确定性快速路径（审核中）、以及召回精度 + 多语言评估（审核中）。这直接影响上下文性能和后台自动化能力。

### 2. [提案：定义 Managed Agent 双向架构](https://github.com/QwenLM/qwen-code/issues/12380) — 10 条评论
**优先级 P2 | 功能需求 | 进行中**

提出了分阶段的 Managed Agent 架构方案：保留现有的 TypeScript agent 循环，使模型推理独立于工具环境供给，并赋予会话持久的所有权、工作区绑定、可恢复的工具执行和稳定的 WebSocket 接口。解决了会话管理、多 agent 和平台分发的路线图问题。

### 3. [TUI 在 rows-only 收缩时丢失一行 transcript](https://github.com/QwenLM/qwen-code/issues/12449) — 10 条评论
**优先级 P3 | Bug | 进行中**

终端 UI 在移动端软键盘 / Termux 上使用 append-only Static 路径（`ui.useTerminalBuffer: false`）时会丢失 transcript 行，因为捆绑的 ink 7.0.3 早于上游的 rows-shrink 修复。虚拟化历史路径未受影响。影响移动设备上的交互式 CLI 使用。

### 4. [tracking(cli): 跟进工具执行沙箱设置加固](https://github.com/QwenLM/qwen-code/issues/12417) — 7 条评论
**优先级 P2 | 安全 | 进行中**

PR #12267 将 Linux bubblewrap 隔离范围从整个 CLI 缩小到单个工具执行，此为后续跟进。经过五轮审查，边界发现已修复并验证 — 目前正在进行剩余的正确性工作。对 Linux 沙箱安全至关重要。

### 5. [feat(daemon): HTTP 网关超时后恢复 session-create 结果](https://github.com/QwenLM/qwen-code/issues/12381) — 7 条评论
**优先级 P2 | 功能需求 | 进行中**

`POST /session` 可能成功但向客户端返回网关超时，导致会话 ID 丢失。客户端无法安全地提交首个 prompt 或重试创建。影响 daemon/web-shell 场景下的会话管理可靠性。

### 6. [Bug：Linux/WSL 上剪贴板粘贴静默失败](https://github.com/QwenLM/qwen-code/issues/12488) — 6 条评论
**优先级 P2 | Bug | 进行中**

当 Linux/WSL2 上缺少 `wl-paste`/`xclip` 时，Ctrl+V 完全失败，没有错误也没有任何回退方案。不支持图片粘贴、不支持文本粘贴、不显示任何消息。影响 Linux 上的交互式 CLI 工作流。

### 7. [serve/acp: 超大的 available_commands_update 触发 MAX_JSON_NODES](https://github.com/QwenLM/qwen-code/issues/11908) — 5 条评论
**优先级 P1 | Bug | 进行中**

会话启动时的 `available_commands_update` 通知超过 `MAX_JSON_NODES`（10,000）时，ACP 桥接器会 fail-close 式拆除通道，终止子进程，并丢弃会话。随后的所有请求都返回"No session with id"。严重级别 — 导致后续所有请求都失败。

### 8. [UI：侧边栏收起时新建任务图标错位](https://github.com/QwenLM/qwen-code/issues/12453) — 5 条评论
**优先级 P3 | Bug | 进行中（中文）**

左侧边栏收起后，"新建任务"图标与其他图标的垂直对齐不一致。已在 Windows x64 web-shell 上复现。

### 9. [LSP 诊断将失败查询报告为正常结果](https://github.com/QwenLM/qwen-code/issues/12467) — 3 条评论
**优先级 P2 | Bug | 进行中**

失败的诊断拉取被报告为"No diagnostics found"并带有 `is_error: false`，错误地表示代码没有问题。影响语言服务器集成的核心可靠性。

### 10. [MCP 客户端将 tools-only 服务器标记为已断开](https://github.com/QwenLM/qwen-code/issues/12496) — 3 条评论
**优先级 P2 | Bug | 进行中**

MCP 客户端将对 prompts/list / resources/list 请求返回 `-32601` 响应视为传输错误，将 tools-only 服务器标记为已断开。影响 MCP 集成的可靠性。

---

## 关键 PR 进展

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#12506](https://github.com/QwenLM/qwen-code/pull/12506) | doudouOUC | **feat(cli):** 新增托管运行时证明 worker — 最小化证明 Runtime 的引导路径，无需加载 CLI/model/Harness/Session |
| [#12507](https://github.com/QwenLM/qwen-code/pull/12507) | holny | **fix(cli):** 剪贴板粘贴失败时使用 Linux 特有的不可用消息 (#12504) |
| [#12456](https://github.com/QwenLM/qwen-code/pull/12456) | wenshao | **docs(verify-pr):** 新增 persisted-state、steady-state 和 skip-coverage 规则 |
| [#12308](https://github.com/QwenLM/qwen-code/pull/12308) | callmeYe | **feat(serve):** 支持在会话创建时选择模型和推理策略 |
| [#12473](https://github.com/QwenLM/qwen-code/pull/12473) | holny | **fix(acp-bridge):** 恢复时删除遗留的 published file:// 记录，写入时强制转为临时 |
| [#12497](https://github.com/QwenLM/qwen-code/pull/12497) | waybarrios | **test(core):** 在单元测试层面固定 CodeModeOnly 桥接行为 |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | jkxiao | **feat(extensions):** 支持从目录加载部署管理的扩展 |
| [#12439](https://github.com/QwenLM/qwen-code/pull/12439) | callmeYe | **fix(web-shell):** 空闲时清理过时的流式消息 |
| [#12107](https://github.com/QwenLM/qwen-code/pull/12107) | callmeYe | **perf(core):** 并行化扩展加载循环 |
| [#12495](https://github.com/QwenLM/qwen-code/pull/12495) | waybarrios | **fix(core):** 将 sed `--quiet`/`--silent` 分类为只读操作 |
| [#11854](https://github.com/QwenLM/qwen-code/pull/11854) | DragonnZhang | **feat:** 新增混合代码模式 — `tools.mode` 枚举支持 `direct`、`code_mode`、`code_mode_only` |
| [#12475](https://github.com/QwenLM/qwen-code/pull/12475) | qwen-code-dev-bot | **feat(channels):** 将组成员访问与发送者策略解耦 |

---

## 功能需求趋势

根据 issue 分析，以下功能方向显示出强烈的社区需求：

1. **会话管理与容错** — 超时后会话恢复、多工作区路由、会话持久化
2. **Agent 架构** — Managed Agent 双向架构、后端代理、多代理编排
3. **安全加固** — 工具执行沙箱（Linux bubblewrap）、Auto 模式下 git 命令门控
4. **MCP 集成** — tools-only 服务器的更好处理、作用域化工具调用、更广泛的应用支持
5. **浏览器/Web 集成** — 通过 Daemon + WebUI 复活 Chrome 扩展、直接浏览器控制（Qwen WebBridge）
6. **剪贴板可靠性** — Linux/WSL 剪贴板回退、PowerShell 互操作、更完善的错误提示

---

## 开发者痛点

1. **Linux 剪贴板故障** — 缺少 `wl-paste`/`xclip` 时多种静默失败，用户得不到任何反馈
2. **大通知后会话中断** — ACP 桥接器在超大的 `available_commands_update` 时关闭，导致后续请求全部失败
3. **MCP 断连误报** — tools-only MCP 服务器被错误标记为已断开
4. **编辑器缺失时仍提供编辑选项** — 即使配置的编辑器不可用，仍会向用户展示外部编辑器选项
5. **移动端 TUI 行丢失** — 移动设备/软键盘调整视口大小时，终端 UI 会丢失 transcript 行
6. **扩展加载性能** — 串行扩展加载导致冷启动延迟（正在并行化中）

---

*速览内容基于 GitHub 数据生成 — 2026-09-23*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*