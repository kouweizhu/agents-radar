# AI CLI 工具社区动态日报 2026-09-22

> 生成时间: 2026-09-22 01:04 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the report into Chinese. Let me analyze what needs to be done:

1. Translate all the content into Simplified Chinese
2. Keep all Markdown structure exactly as is
3. Keep URLs, repository slugs, version numbers, issue numbers, code references as-is
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

Title: Cross-Tool Comparison: AI CLI Tools Ecosystem Report
-> 跨工具对比：AI CLI 工具生态系统报告

Let me go through the rest:

Section 1: Ecosystem Overview
The AI CLI tooling landscape has matured significantly, with seven active projects competing for developer mindshare. Today's activity reflects a mature market where differentiation hinges on platform coverage (Windows/WSL, macOS, Linux), enterprise features (MCP, OAuth, rate limiting), and developer experience (session management, permission flows). All tools are actively shipping releases on daily or weekly cadences, with the major vendors (Anthropic, OpenAI, Google, GitHub) maintaining rapid iteration alongside community-driven alternatives (OpenCode, Pi, Qwen). The space is defined by feature parity battles around session persistence, cost control, and sandboxing—while emerging directions like agent orchestration, remote control, and cross-session governance signal where the next competitive frontier lies.

Translation: AI CLI 工具生态已趋于成熟，七个活跃项目正在争夺开发者的关注。当前的活动反映了一个成熟的市场，差异化主要体现在平台覆盖（Windows/WSL、macOS、Linux）、企业级功能（MCP、OAuth、速率限制）和开发者体验（会话管理、权限流程）上。所有工具都在以每日或每周的节奏积极发布新版本，头部厂商（Anthropic、OpenAI、Google、GitHub）保持快速迭代，同时社区驱动的替代方案（OpenCode、Pi、Qwen）也在跟进。这个领域的竞争焦点围绕会话持久性、成本控制和沙箱化展开——而代理编排、远程控制和跨会话治理等新兴方向，预示着下一个竞争前沿的到来。

Section 2: Activity Comparison

Translation: 活动对比

Table headers and data:
- Releases (24h) -> 发布（24小时）
- Issues -> Issue
- PRs -> PR
- Discussions -> 讨论
- Status -> 状态

I'll translate the table content carefully, ensuring technical accuracy while maintaining the original data structure. The key is to preserve the precise information while adapting it to Chinese technical language conventions.

The tools show varied release frequencies and engagement metrics. Some have zero releases in the last 24 hours, while others like OpenAI Codex have 7 releases. Most tools maintain around 50 issues, with active participation across different categories. The status consistently shows "Active" for all listed tools.

I've noticed slight variations in some tool metrics, particularly around issues and discussions. The translation maintains the core meaning while adapting to Chinese technical communication standards.

*Note: "N/A" for Discussions indicates the channel is either not used or not tracked in the provided data.*
Translation: 注： Discussions 栏显示 "N/A" 表示该渠道未使用或未在提供的数据中追踪。

Shared Feature Directions -> 共同功能方向

The translation continues with feature comparison across different tools, highlighting cost control and session management as key shared areas of focus.

Specific Needs -> 具体需求

Rate limiting and cost visibility emerge as critical requirements. Tools want per-model limits displayed in statusline, transparent usage tracking, and proactive quota enforcement. This suggests a need for robust usage monitoring and control mechanisms across different CLI tools.

Session management represents another significant concern, with demands for reliable session resumption, branching capabilities, and robust cross-session state preservation. Remote and headless control functionalities are also gaining prominence, with tools seeking mobile integration, SSH workspace support, and daemon mode capabilities.

Platform consistency remains a challenge, particularly across Windows and WSL environments. Developers are navigating complex integration points like UNC paths, sandboxing, and terminal rendering to ensure seamless cross-platform experiences.

MCP and plugin ecosystems are evolving, with a focus on policy enforcement, scoped tool interactions, and extensibility. AST-aware tooling is emerging as a key strategy to optimize token usage and improve precise code navigation.

Memory and compaction robustness are critical, with an emphasis on preventing data loss, handling complex thinking messages, and maintaining session persistence. These technical requirements reflect the growing sophistication of developer tools and their need for reliable, flexible interactions.

The tool landscape reveals nuanced positioning: Claude Code targets enterprise reliability, OpenAI Codex emphasizes rapid AI-native development, while Gemini CLI prioritizes tool-use precision and efficient operations. Copilot CLI centers on CLI-first workflows, OpenCode champions self-hosting, and Pi focuses on extension architecture. Each tool strategically addresses different developer needs and preferences.

Enterprise readiness has become fundamental, moving beyond basic functionality to comprehensive compliance. Session persistence emerges as a critical competitive frontier, with multiple tools investing in resumability and robust workflow management. Remote and headless control represents an emerging trend, signaling a shift toward more flexible, daemon-style operational capabilities that support CI/CD and mobile integration.

Platform compatibility remains a key differentiator, with Windows and WSL reliability presenting significant challenges. The MCP ecosystem is rapidly consolidating, with MCP now considered a first-class feature across multiple tools. Cost transparency has become a universal expectation, as organizations demand granular insights into AI usage and expenditures.

Community-driven alternatives are proving increasingly viable, with open-source projects like OpenCode, Pi, and Qwen Code demonstrating the effectiveness of the open-core model. These community contributions are actively shaping the tool landscape, challenging traditional vendor-dominated approaches.

The report synthesizes insights from comprehensive community data across seven AI CLI tools, providing a detailed snapshot of the ecosystem's current state and emerging trends.</think>

# 跨工具对比：AI CLI 工具生态系统报告

## 1. 生态概览

AI CLI 工具生态已趋于成熟，七个活跃项目正在争夺开发者的关注。当前的活动反映了一个成熟的市场，差异化主要体现在平台覆盖（Windows/WSL、macOS、Linux）、企业级功能（MCP、OAuth、速率限制）和开发者体验（会话管理、权限流程）上。所有工具都在以每日或每周的节奏积极发布新版本，头部厂商（Anthropic、OpenAI、Google、GitHub）保持快速迭代，同时社区驱动的替代方案（OpenCode、Pi、Qwen）也在跟进。这个领域的竞争焦点围绕会话持久性、成本控制和沙箱化展开——而代理编排、远程控制和跨会话治理等新兴方向，预示着下一个竞争前沿的到来。

---

## 2. 活动对比

| 工具 | 发布（24h） | Issue | PR | 讨论 | 状态 |
|------|-------------|-------|-----|------|------|
| **Claude Code** | 0 | 50 | 2 | 0 | Active |
| **OpenAI Codex** | 7 | ~50 | 50 (已关闭) | 11 | Active |
| **Gemini CLI** | 1 | 50 | 10 | N/A | Active |
| **Copilot CLI** | 3 | ~30 | 2 | 3 | Active |
| **OpenCode** | 1 | 50 | 10 | N/A | Active |
| **Pi** | 1 | 50 | 18 (已关闭) | 2 | Active |
| **Qwen Code** | 4 | ~30 | 20 | N/A | Active |

*注：讨论栏显示 "N/A" 表示该渠道未使用或未在提供的数据中追踪。*

---

## 3. 共同功能方向

| 功能方向 | 涉及的工具 | 具体需求 |
|----------|------------|----------|
| **成本控制 / 速率限制** | Claude Code, Codex, Copilot CLI | 状态栏显示按模型速率限制、用量可视化、配额执行、昂贵代理确认提示 |
| **会话分支 / 持久化** | Codex, Copilot CLI, OpenCode | 分支会话同时保留历史、恢复可靠性、跨会话状态 |
| **远程 / 头less控制** | Claude Code, Codex, Copilot CLI, Pi | 守护进程模式、从移动端/ChatGPT 远程控制、SSH 工作区支持 |
| **平台一致性（Windows/WSL）** | 所有工具 | UNC 路径、WSL 沙箱化、SSH 剪贴板、终端渲染一致性 |
| **MCP / 插件生态** | Claude Code, Copilot CLI, OpenCode, Pi | MCP 策略执行、作用域工具调用、自定义请求头支持扩展、扩展 API 可扩展性 |
| **AST 感知工具** | Gemini CLI, Pi | 减少火蛇式文件读取的 token 消耗；精确代码导航 |
| **内存 / 压缩鲁棒性** | Codex, Gemini CLI, Pi | 防止压缩时数据丢失、处理思考消息、跨会话持久化 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路径 |
|------|----------|----------|----------|
| **Claude Code** | 可靠性、企业级沙箱、跨平台 | 企业开发者、安全敏感团队 | 强沙箱隔离、精细权限系统、桌面端一致性 |
| **OpenAI Codex** | 快速 AI 原生开发、代理化工作流 | 追求完全代理自主性的开发者 | 高发布频率（7 个 alpha/天）、广泛 MCP 支持、集成网页搜索 |
| **Gemini CLI** | 工具使用精度、AST 感知操作 | 优化 token 使用的开发者 | 创新沙箱方案（使用 POSIX 工具）、Epic 追踪架构变更 |
| **Copilot CLI** | CLI 优先工作流、企业集成 | GitHub 强力用户、CLI 爱好者 | 紧密 GitHub 集成、组织策略执行 |
| **OpenCode** | 自托管、本地优先 | 自托管部署、隐私敏感用户 | 本地 LLM 聚焦、社区贡献模型（Zen 市场） |
| **Pi** | 扩展架构、生命周期钩子 | 扩展开发者、高级用户 | 规范会话上下文、可操作生命周期钩子、厂商无关设计 |
| **Qwen Code** | 多会话主机、SSH 工作流 | 远程开发、企业团队 | 双路径托管代理架构、跨会话治理 |

---

## 5. 社区活力与成熟度

| 工具 | Issue 参与度 | PR 速度 | 成熟度信号 |
|------|--------------|---------|-------------|
| **OpenAI Codex** | 高 — 50 个 PR 已关闭，11 个活跃讨论 | 极高（7 个发布/24h） | 快速迭代；常见破坏性变更 |
| **Pi** | 高 — 快照中 18 个 PR 已关闭 | 高 | 架构精炼；v0.87 展现成熟度 |
| **Qwen Code** | 中等 — 突出显示 20 个 PR | 高（4 个发布） | 积极功能扩展；部分回归 |
| **Gemini CLI** | 中等 — 50 个 Issue 追踪 | 中等 | 夜间构建；核心 API 仍在演进 |
| **Claude Code** | 中等 — 50 个 Issue，2 个 PR | 低 | 稳定；变更少但影响大 |
| **Copilot CLI** | 低 — ~30 个 Issue，2 个 PR | 低 | 成熟；增量改进 |
| **OpenCode** | 中等 — 50 个 Issue，10 个 PR | 中等 | 社区驱动；快速社区贡献 |

**社区最活跃：** OpenAI Codex — 最高的 PR 关闭率、活跃的讨论论坛，以及激进的发布节奏，表明强劲的发展势头。

**增长最快的功能领域：** 远程/SSH 工作流（Qwen、Copilot、Pi）、MCP 扩展性（所有工具），以及成本治理（所有社区的普遍主题）。

---

## 6. 趋势信号

1. **企业级准备已成为标配** — 每个工具都在投资权限作用域、组织策略、速率限制和沙箱化。市场已从"能否工作"演进到"是否满足企业合规"。

2. **会话持久性是竞争焦点** — 四个工具将恢复能力、压缩安全性和会话分支作为活跃开发领域。这反映了长时运行代理化工作流的真实痛点。

3. **远程/头less控制正在兴起** — 三个不同工具（Codex、Copilot、Pi）有活跃的 RFC 或实现用于远程控制。这表明向守护进程式运行的转变，以支持 CI/CD 和移动端集成。

4. **平台覆盖仍是差异化因素** — WSL 和 Windows 特定问题在所有工具中持续存在。率先解决 Windows/WSL 可靠性的工具将获得显著的市场份额。

5. **MCP 生态正在整合** — MCP 现已成为 Claude Code、Copilot CLI、OpenCode 和 Pi 的首要关注点。工具提供商必须支持 MCP 才能保持竞争力。

6. **成本透明度是普遍诉求** — 按模型限制、配额可视化和昂贵操作前的确认在所有工具社区中都有需求。这反映了专业工作流中按量计费 AI 使用的转变。

7. **社区替代方案切实可行** — OpenCode、Pi 和 Qwen Code 以比某些主要厂商更快的速度推出竞争性功能，表明开源核心模式正在发挥作用。每个摘要中都可见社区贡献（模型支持、错误修复）。

---

*本报告基于 2026-09-22 七个 AI CLI 工具的社区摘要数据生成。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English report about Claude Code Skills Community Highlights into Chinese. I need to:

1. Translate all the text content (not the structure)
2. Keep all Markdown elements exactly as-is (headings, tables, lists, bold, etc.)
3. Keep URLs, numbers, code references, issue/PR numbers unchanged
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation, no preamble, no markdown fences

Let me translate section by section:

**Title:**
Claude Code Skills 社区亮点报告
**Data: anthropics/skills as of 2026-09-22**
数据来源：anthropics/skills（截至 2026-09-22）

**1. Top Skills Ranking**
1. 热门技能排行榜

The rest of the text... Let me go through carefully.

I'll translate while maintaining:
- Table structure
- List structure
- Bold text
- URLs
- Numbers and dates
- Code/project names

Let me do this carefully.</think>

# Claude Code Skills 社区亮点报告

**数据来源：anthropics/skills（截至 2026-09-22）**

---

## 1. 热门技能排行榜

仓库共有 50 个 PR，均处于开放状态。以下是按功能完整度和质量筛选出的最重要的技能提案：

| PR # | 技能 | 功能 | 状态 |
|------|------|------|------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | 为 Web3 开发者打造的智能体技能，可对 Solidity/Rust 智能合约进行自动化静态分析，并通过 ProofCore 零存储默克尔协议将加密审计证明锚定到 TON 区块链 | 开放中 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本技能，可将 Markdown 文档合成为配有逼真人声旁白的专业 MP4 视频（通过 Marp 转换） | 开放中 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 面向 Python 的复古游戏开发技能——指导实现、确定性无头运行、帧检查和状态验证 | 开放中 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 预防 AI 生成文档中的排版问题：孤行单词、孤立段落、编号错位 | 开放中 |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | 开源 E2E 测试技能，赋予 Claude 视觉和浏览器控制能力——零代码测试生成 | 开放中 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | 基于配置文件的 SSH/Slurm 工作流技能，用于 SCNet HPC 集群操作 | 开放中 |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | OpenDocument 格式（.odt、.ods、.odf）创建、模板填充和 HTML 转换 | 开放中 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 全栈测试技能：测试理念（测试 Trophy）、单元测试（AAA 模式）、React 组件测试 | 开放中 |

---

## 2. 社区需求趋势

基于 Issues 讨论热度（按评论数排序）：

| Issue # | 主题 | 需求信号 |
|---------|------|----------|
| [#492](https://github.com/anthropics/skills/issues/492) | **安全与信任** — 社区技能冒充 anthropic/ 命名空间下的官方技能 | 43 条评论 — **最高优先级**：信任边界漏洞 |
| [#228](https://github.com/anthropics/skills/issues/228) | **组织级技能共享** — 支持团队/库共享，无需手动上传 | 16 条评论 — 企业协作缺口 |
| [#556](https://github.com/anthropics/skills/issues/556) | **触发评估失败** — run_eval.py 报告 0% 触发率 | 12 条评论 — 核心工具缺陷 |
| [#1329](https://github.com/anthropics/skills/issues/1329) | **compact-memory** 技能提案 — 紧凑智能体状态的符号表示法 | 9 条评论 — 智能体内存效率 |
| [#202](https://github.com/anthropics/skills/issues/202) | **skill-creator 最佳实践** — 冗长/教学式语调影响 token 效率 | 8 条评论 — 技能质量标准 |

**核心需求主题：**
- **安全与信任边界**（讨论最热烈）
- **企业协作**（组织级共享）
- **开发者体验**（触发评估可靠性）
- **智能体效率**（内存、token 使用）

---

## 3. 潜力较大的待上线技能

以下活跃 PR 功能完备，可能即将合并：

| PR # | 技能 | 上线可能性 |
|------|------|------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 修复** | 修复 #1668——解决与 mcp>=2.0.0 的关键兼容性问题（streamable_http_client 重命名、自定义请求头） |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Web3 细分需求，静态分析 + 区块链存证功能明确 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本视频生成满足常见内容创作需求 |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator 修复** | 修复 #1721——修正触发检测中 0% 召回率的 bug |
| [#1790](https://github.com/anthropics/skills/pull/1790) | **docx 修复** | 为批注创建缺失的 document.xml.rels——缺陷修复 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求是生产级文档处理技能（DOCX、PDF、ODT、排版）以及企业级安全与协作功能——这反映出 Claude Code 正从实验性工具向职场生产力平台演进。**

---

*报告基于 GitHub PR/Issue 数据生成。所有 PR 截至 2026-09-22 仍为开放状态。*

---

<think>The user wants me to translate the entire Claude Code Community Digest into Simplified Chinese, following the translation rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and using appropriate Chinese technical terminology.</think>

# Claude Code 社区日报 — 2026-09-22

## 今日要闻

过去 24 小时内，社区活动主要集中在跨平台兼容性问题上，Windows 平台的 UNC 路径支持受到特别关注。同时，一个影响 git worktrees 的 macOS 沙盒严重回归问题已被关闭，而围绕成本控制和主题定制等高影响力的功能需求也在持续增长。

**过去 24 小时无新版本发布。**

---

## 热门 Issue

### 1. [Windows 平台缺少 UNC 路径支持](https://github.com/anthropics/claude-code/issues/45297) — 29 条评论，30 👍
**优先级：** 高 | **状态：** 开启中 | **领域：** cowork, Windows

Cowork 文件夹功能在 Windows 上不支持 UNC 路径（\\server\share），这限制了依赖网络共享的企业环境。这是一个长期存在的功能缺口，29 条评论表明用户对此问题持续关注。

### 2. [拼写检查无法关闭](https://github.com/anthropics/claude-code/issues/58693) — 18 条评论，10 👍
**优先级：** 中 | **状态：** 开启中 | **领域：** desktop, Windows

用户反映无法在桌面应用中关闭拼写检查，导致所有输入的文本都带有拼写标记，对那些更倾向于依赖自己校对或外部工具的用户造成不便。

### 3. [macOS 沙盒中 git worktrees 超出 ARG_MAX](https://github.com/anthropics/claude-code/issues/73468) — 11 条评论，6 👍
**优先级：** 高 | **状态：** 已关闭 | **领域：** sandbox, macOS

当存在多个 git worktrees 时，通过 `sandbox-exec -p` 内联传递的沙盒配置文件超出 ARG_MAX 限制，导致沙盒完全无法使用。**状态：已关闭** — 表明修复已合并。

### 4. [CJK 文本在全屏渲染器中出现乱码](https://github.com/anthropics/claude-code/issues/66269) — 9 条评论，1 👍
**优先级：** 中 | **状态：** 已关闭 | **领域：** tui, macOS

从终端复制中文/日文/韩文文本时，使用无闪烁/全屏渲染器会产生乱码。设置 `tui: "default"` 可以解决此问题。**状态：已关闭。**

### 5. [桌面应用：自定义主题/强调色](https://github.com/anthropics/claude-code/issues/79305) — 9 条评论，19 👍
**优先级：** 高 | **状态：** 开启中 | **领域：** desktop, UI

用户希望桌面应用能够支持 CLI 的自定义主题系统。目前桌面应用仅提供浅色/深色/高对比度三种模式，使得 Claude 窗口在多显示器环境中难以与其他应用区分。社区支持强烈（19 👍）。

### 6. [自 2026 年 3 月起超过 6000 个 "has repro" Issue 被自动关闭](https://github.com/anthropics/claude-code/issues/87647) — 8 条评论，59 👍
**优先级：** 高 | **状态：** 开启中 | **领域：** 流程

一个元 Issue 指出，超过 6000 个标记为 "has repro" 的 Issue 被自动关闭。社区成员认为这一自动化处理过于激进，导致大量有价值的 Bug 报告丢失。反应最为强烈（59 👍）。

### 7. [VSCode 中 MCP  elicitation 请求被自动拒绝](https://github.com/anthropics/claude-code/issues/79174) — 7 条评论，3 👍
**优先级：** 中 | **状态：** 已关闭 | **领域：** MCP, VSCode

MCP 的 `elicitation` 能力已声明，但在交互式 VSCode 会话中请求被自动拒绝，没有任何 UI 提示，尽管该会话能够渲染其他权限请求。**状态：已关闭。**

### 8. [跨会话 send_message 永远无法送达](https://github.com/anthropics/claude-code/issues/86279) — 6 条评论，1 👍
**优先级：** 高 | **状态：** 已关闭 | **领域：** core, Windows

`mcp__ccd_session_mgmt__send_message` 函数返回成功，但目标会话无限期挂起，不会产生新的对话轮次。**状态：已关闭** — 修复可能已部署。

### 9. [状态栏：显示每个模型的周限流](https://github.com/anthropics/claude-code/issues/73770) — 6 条评论，18 👍
**优先级：** 中 | **状态：** 开启中 | **领域：** cost, statusline

功能请求：向状态栏命令的 stdin JSON 暴露 Opus/Sonnet/Fable 的限流信息，使自定义状态栏能够显示与 `/status` 相同的计量器。社区兴趣浓厚。

### 10. [建议：在启动昂贵的 Agent 前请求用户确认](https://github.com/anthropics/claude-code/issues/95313) — 6 条评论，0 👍
**优先级：** 高 | **状态：** 开启中 | **领域：** agents, 权限

用户希望在 Claude 生成昂贵的后台 Agent 之前显示确认提示，因为这些 Agent 可能消耗大量 Token 且未经用户批准。

---

## 关键 PR 进展

### 1. [#95932](https://github.com/anthropics/claude-code/pull/95932) — GitHub 连接问题 Issue 模板
**状态：** 已关闭 | **作者：** dicksontsai

为 claude.ai 上的 GitHub 连接问题添加了专门的 Issue 表单。包含现有的 `github-integration` 标签，并收集截图、预期操作、实际结果和诊断信息。

### 2. [#95423](https://github.com/anthropics/claude-code/pull/95423) — diff：跳过只读 shell 命令的重新获取
**状态：** 进行中 | **作者：** poteat

优化 diff 面板以避免不必要的重新获取。之前，该面板在每次 Bash/PowerShell 调用后都会重新获取。现在它从 shell 读取 `isReadOnly` 状态，对只读命令（`ls`、`git status`、`cat`、grep）跳过重新获取，从而提升性能。

---

## 功能需求趋势

基于 Issue 分析，以下主题是需求最集中的方向：

1. **跨平台一致性** — 桌面应用主题定制、UNC 路径支持、多语言拼写检查
2. **成本透明度与控制** — 状态栏显示每个模型的限流、昂贵 Agent 的用户确认、后台子代理的 Token/轮次/时间上限
3. **沙盒改进** — macOS ARG_MAX 处理、git worktrees 兼容性
4. **无头/CI 支持** — 非交互式认证路径（DesignSync）、CI 兼容的工作流
5. **TUI 增强** — Markdown 渲染修复（有序列表重新编号）、只读会话的讨论模式

---

## 开发者痛点

Issue 追踪器中最常见的挫败感：

- **平台特定的回归问题：** Windows UNC 路径、macOS worktrees 沙盒失败、CJK 文本损坏
- **Bug 报告被自动关闭：** 大规模自动关闭 "has repro" Issue（6000+）引发强烈社区反弹
- **成本不可预测：** 后台子代理消耗 170 万 Token，没有任何可见的成本或审批流程
- **VSCode 扩展限制：** 多根工作区文件选择器损坏、交互式会话中 MCP elicitation 不工作
- **桌面插件发现：** 本地会话从不显示市场安装的插件

---

*数据来源：GitHub — anthropics/claude-code | 2026-09-22*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest from English to Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure exactly as-is
2. Keep URLs, link targets, numbers, dates, code spans, file paths, issue numbers, etc. in their original form
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through and translate this carefully:

---

# OpenAI Codex 社区速报 — 2026-09-22

## 今日要闻

Codex 今日活动频繁，核心围绕配额和用量限制问题——多位用户反映 GPT-6 Astra 消耗 Plus 5 小时配额的速度远超预期。团队发布了七个新的 Rust alpha 版本（v0.155–v0.157），并合并了 50 个 PR，包括网络搜索和实时连接的代理配置改进。Windows 桌面端问题占据 Issue 榜首，同时社区持续推动远程控制功能和更完善的密钥管理方案。

---

## 版本发布

| 版本 | 说明 |
|---------|-------|
| **rust-v0.157.0-alpha.2** | v0.157 系列最新 alpha |
| **rust-v0.157.0-alpha.1** | v0.157 初始 alpha |
| **rust-v0.156.0-alpha.17** | v0.156 持续迭代 |
| **rust-v0.156.0-alpha.16** | — |
| **rust-v0.156.0-alpha.14** | — |
| **rust-v0.156.0-alpha.13** | — |
| **rust-v0.155.0-alpha.16.1** | v0.155 系列补丁版本 |

所有版本均为 Rust CLI alpha。

---

## 热点 Issue

| # | Issue | 关键问题 | 优先级 |
|---|-------|----------------|-----------|
| **#42987** | **[bug, windows-os, rate-limits, CLI] GPT-6 Astra Medium 在两次简短对话后耗尽 Plus 5 小时配额** — 26 条评论，15 👍 | Astra 在几分钟而非数小时内耗尽配额，影响付费 Plus 订阅用户。 | ⚠️ 高优先级 |
| **#42739** | **[bug, windows-os, app, session] Windows 桌面更新后本地项目从侧边栏消失** — 22 条评论 | Windows 更新导致本地项目从侧边栏消失，破坏工作流连续性。 | ⚠️ |
| **#18115** | **[enhancement, skills] 仓库级别的应用市场与项目配置中的插件管理** — 16 条评论，67 👍 | 高度需求的功能：团队希望将插件/市场配置与代码库一起发布，而不仅限于用户级别。 | ✅ 热门需求 |
| **#32614** | **[bug, app, subagent, remote] Agent 创建的顶层任务在桌面搜索和 Codex 移动端远程中不可见** — 14 条评论 | 子 Agent 任务不会出现在搜索中，导致远程工作流中无法发现。 | ⚠️ |
| **#40880** | **[bug, windows-os, rate-limits, CLI] 自重新引入以来，Codex 5 小时用量限制的消耗速度明显加快** — 11 条评论 | 续接 #42987 — Windows 上的用量限制行为异常。 | ⚠️ |
| **#39178** | **[bug, windows-os, app, pets] 隐藏的 avatarOverlay 占用已完成的线程；主 UI 仍显示"思考中"** — 11 条评论 | 线程完成后 UI 卡在"思考中"状态，使用户感到困惑。 | 🐛 |
| **#46613** | **[bug, windows-os, auth, app] 重置/重装后 ChatGPT 桌面端卡在"无法加载登录要求"** — 9 条评论 | 全新 Windows 安装无法登录——阻止所有操作。 | 🔴 阻塞性问题 |
| **#32315** | **[bug, windows-os, sandbox, CLI] Windows 提权沙箱设置助手在 Base64 负载超过 CreateProcessW 限制时返回 os error 206** — 9 条评论 | 复杂负载导致沙箱失败，阻止安全执行。 | 🐛 |
| **#31864** | **[bug, CLI, subagent, Papercuts 2026] 所有 GPT-5.6 Sol 对话失败，因为 MultiAgentV2 使用了保留的 collaboration.spawn_agent** — 8 条评论，18 👍 | 所有 GPT-5.6 Sol 会话因保留工具错误而中断。 | 🔴 严重问题 |
| **#44363** | **[bug, context, app, session] 上下文压缩就地重写存储的 rollout 并永久破坏对话记录** — 7 条评论 | 压缩破坏历史记录——严重的数据完整性问题。 | 🔴 数据丢失 |

**完整链接：** [#42987](https://github.com/openai/codex/issues/42987) · [#42739](https://github.com/openai/codex/issues/42739) · [#18115](https://github.com/openai/codex/issues/18115) · [#32614](https://github.com/openai/codex/issues/32614) · [#40880](https://github.com/openai/codex/issues/40880) · [#39178](https://github.com/openai/codex/issues/39178) · [#46613](https://github.com/openai/codex/issues/46613) · [#32315](https://github.com/openai/codex/issues/32315) · [#31864](https://github.com/openai/codex/issues/31864) · [#44363](https://github.com/openai/codex/issues/44363)

---

## PR 进展

| # | PR | 变更内容 |
|---|----|--------------|
| **#47142** | 为独立网页搜索配置系统代理 | 网络搜索现在遵循已配置的系统代理 (`respect_system_proxy`)。 |
| **#47132** | 支持网络代理中调用方提供的 MITM CA | 添加了 `network.mitm_ca` 配置项用于自定义证书/密钥文件。 |
| **#47130** | 从 `gpt-5.6-sol` 中移除 `ultrafast` 服务层级 | `gpt-5.6-sol` 现仅提供 `priority` 层级。 |
| **#47129** | 在扩展工具环境中保留外部工作目录 | 扩展工具现可接收非原生路径的工作目录环境变量。 |
| **#47122** | 将 OpenAI 文件 blob 上传超时从 60 秒提升至 5 分钟 | 大文件上传不再超时。 |
| **#47121** | 将线程 ID 传递给附件上传 | 附件存储现支持基于线程的放置。 |
| **#47118** | 支持 Code Mode 工具消息的模型目录覆盖 | Code Mode 工具消息现使用目录覆盖，支持自定义 `exec`/`wait` 描述。 |
| **#47116** | 在远程插件请求中遵循配置的产品 SKU | 远程插件现尊重 `apps_mcp_product_sku` 配置而非硬编码 `codex`。 |
| **#47114** | 保留并暴露线程项的生命周期时间戳 | 为线程项添加了 `startedAtMs` / `completedAtMs`。 |
| **#47101** | 为实时 WebSocket 连接遵循配置的代理 | 语音实时 WebSocket 现使用代理管道。 |

**完整链接：** [#47142](https://github.com/openai/codex/pull/47142) · [#47132](https://github.com/openai/codex/pull/47132) · [#47130](https://github.com/openai/codex/pull/47130) · [#47129](https://github.com/openai/codex/pull/47129) · [#47122](https://github.com/openai/codex/pull/47122) · [#47121](https://github.com/openai/codex/pull/47121) · [#47118](https://github.com/openai/codex/pull/47118) · [#47116](https://github.com/openai/codex/pull/47116) · [#47114](https://github.com/openai/codex/pull/47114) · [#47101](https://github.com/openai/codex/pull/47101)

---

## 热门讨论

### 想法

| # | 讨论 | 摘要 |
|---|------------|---------|
| **#9200** | **[Ideas] 添加从 ChatGPT 应用远程控制 codex 的能力** — 51 条评论，191 👍 | 请求无头/守护进程模式，支持从 ChatGPT 移动应用远程控制。非常受欢迎。 |
| **#47058** | **使指令加载、功能可用性和执行证据可见且可审计** — 1 条评论，1 👍 | 用户希望看到加载了哪些指令、哪些功能处于活跃状态以及执行了什么工作。 |
| **#47107** | **Sarge：拒绝运行的规则检查，而不是指令文件中的另一行** — 0 条评论，1 👍 | 可执行的规则检查而非建议性指令文件。 |

### 综合

| # | 讨论 | 摘要 |
|---|------------|---------|
| **#7782** | **弃用 Codex 中的 `chat/completions` 支持** — 15 条评论，21 👍 | 官方公告弃用旧的 `chat/completions` API，转向 `responses`。 |
| **#8503** | **尽管代码审查用量显示剩余 100%，但显示"达到用量限制"** — 20 条评论，9 👍 | GitHub Connector 报告达到用量限制，即使配额显示已满——持续混乱。 |
| **#47057** | **通过将 V4.1 Flash 设为原生子 Agent，我将 Astra 用量在 23 小时构建中减少了 94%** — 0 条评论，1 👍 | 社区使用 Flash 作为子 Agent 来解决 Astra 配额问题的变通方案。 |

### 展示分享

| # | 讨论 | 摘要 |
|---|------------|---------|
| **#38815** | **基于 Codex 构建：九家提供商的质量调整后 LLM API 成本对比** — 3 条评论，1 👍 | TokenGauge Workbench — 使用 Codex 构建的独立成本对比工具。 |
| **#46967** | **WeChat 的 ClawBridge — ChatGPT Work、项目聊天和显式只读 Codex** — 1 条评论，1 👍 | WeChat 与 Codex/Work 的本地桥接集成。 |
| **#47027** | **我为 WezTerm 制作了每个面板的 Codex 状态行** — 0 条评论，1 👍 | WezTerm 面板状态指示器用于多面板 Codex 使用。 |

**完整链接：** [#9200](https://github.com/openai/codex/discussions/9200) · [#47058](https://github.com/openai/codex/discussions/47058) · [#47107](https://github.com/openai/codex/discussions/47107) · [#7782](https://github.com/openai/codex/discussions/7782) · [#8503](https://github.com/openai/codex/discussions/8503) · [#47057](https://github.com/openai/codex/discussions/47057) · [#38815](https://github.com/openai/codex/discussions/38815) · [#46967](https://github.com/openai/codex/discussions/46967) · [#47027](https://github.com/openai/codex/discussions/47027)

---

## 功能请求趋势

1. **仓库级插件/应用市场配置** — 团队希望在 `.codex/` 中捆绑插件和市场定义，而非仅用户级配置。
2. **远程控制/无头守护进程模式** — 强烈需求将 Codex 作为后台服务运行，支持从移动设备控制（#9200 获 191 👍）。
3. **本地密钥存储** — API 密钥、SSH、数据库密码的安全凭证管理。
4. **可审计性/指令加载可见性** — 用户希望看到加载了哪些指令、哪些功能处于活跃状态以及执行了什么工作。
5. **可执行规则检查** — 超越建议性指令文件的强制规则检查（Sarge 概念）。
6. **每面板/多实例 UI 指示器** — 终端复用器的状态行（WezTerm、tmux）。
7. **活动摘要扩展** — 桌面应用中默认展开的工具调用摘要。

---

## 开发者痛点

- **配额/用量追踪不一致** — 用户在配额显示满额时仍看到"达到用量限制"；Astra 在几分钟内耗尽 5 小时配额（#42987、#40880、#8503）。
- **Windows 桌面不稳定** — 更新后项目消失、登录失败、"思考中"UI 卡死、选择器无法点击。
- **上下文压缩数据丢失** — 压缩永久破坏对话记录（#44363）。
- **OOM/内存问题** — 大型会话 JSONL 上 `codex resume` 耗尽内存（#28866、#30932）。
- **Linux MCP 问题** — `app-server` 到 MCP 进程的文件描述符泄漏（#46960）。
- **GPT-5.6 Sol 故障** — 保留工具错误阻止所有 Sol 会话（#31864）。
- **浏览器/计算机使用崩溃** — UIElementTreeTransformation 中的 SIGTRAP 错误，macOS 浏览器阻止已认证站点。
- **远程缺少斜杠命令** — 安卓缺少 `/compact`、`/side`、`/fork`、`/feedback`、`/review`。

---

*基于 GitHub 数据生成 — 2026-09-22*

---

规则：
- 仅输出翻译内容。不加前言、解释或markdown围栏。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、水平线、emoji。
- 保留 URL、链接目标、代码片段、代码块、数字和日期原样。
- 项目名称、仓库路径、用户名、版本标签、文件路径和 API/配置标识符保持原形——不翻译。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文，中国开发者通讯的语调——而非逐字直译。</think>

# OpenAI Codex 社区速报 — 2026-09-22

## 今日要闻

Codex 今日活动频繁，核心围绕配额和用量限制问题——多位用户反映 GPT-6 Astra 消耗 Plus 5 小时配额的速度远超预期。团队发布了七个新的 Rust alpha 版本（v0.155–v0.157），并合并了 50 个 PR，包括网络搜索和实时连接的代理配置改进。Windows 桌面端问题占据 Issue 榜首，同时社区持续推动远程控制功能和更完善的密钥管理方案。

---

## 版本发布

| 版本 | 说明 |
|---------|-------|
| **rust-v0.157.0-alpha.2** | v0.157 系列最新 alpha |
| **rust-v0.157.0-alpha.1** | v0.157 初始 alpha |
| **rust-v0.156.0-alpha.17** | v0.156 持续迭代 |
| **rust-v0.156.0-alpha.16** | — |
| **rust-v0.156.0-alpha.14** | — |
| **rust-v0.156.0-alpha.13** | — |
| **rust-v0.155.0-alpha.16.1** | v0.155 系列补丁版本 |

所有版本均为 Rust CLI alpha。尚未附上变更日志；使用这些版本的用户应做好快速迭代和潜在破坏性变更的准备。

---

## 热点 Issue

| # | Issue | 为何重要 | 情绪 |
|---|-------|----------------|-----------|
| **#42987** | **[bug, windows-os, rate-limits, CLI] GPT-6 Astra Medium 在两次简短对话后耗尽 Plus 5 小时配额** — 26 条评论，15 👍 | 用户反映 Astra 在几分钟而非数小时内耗尽配额。这对付费 Plus 订阅用户影响重大。 | ⚠️ 高优先级 |
| **#42739** | **[bug, windows-os, app, session] Windows 桌面更新后本地项目从侧边栏消失** — 22 条评论 | Windows 更新导致本地项目从侧边栏消失，破坏工作流连续性。 | ⚠️ |
| **#18115** | **[enhancement, skills] 仓库级别的应用市场与项目配置中的插件配置** — 16 条评论，67 👍 | 高度需求的功能：团队希望在项目中附带插件/市场配置，而非仅用户级配置。 | ✅ 热门请求 |
| **#32614** | **[bug, app, subagent, remote] Agent 创建的顶层任务在桌面搜索和 Codex 移动端远程中不可见** — 14 条评论 | 子 Agent 任务不会出现在搜索中，导致远程工作流中无法发现。 | ⚠️ |
| **#40880** | **[bug, windows-os, rate-limits, CLI] 自重新引入以来，Codex 5 小时用量限制的消耗速度显著加快** — 11 条评论 | 续接 #42987 — Windows 上的用量限制行为异常。 | ⚠️ |
| **#39178** | **[bug, windows-os, app, pets] 隐藏的 avatarOverlay 占用了已完成的线程；主 UI 仍显示"思考中"** — 11 条评论 | 线程完成后 UI 卡在"思考中"状态，使用户感到困惑。 | 🐛 |
| **#46613** | **[bug, windows-os, auth, app] 重置/重装后 ChatGPT 桌面端卡在"无法加载登录要求"** — 9 条评论 | 全新 Windows 安装无法登录——阻止所有使用。 | 🔴 阻塞 |
| **#32315** | **[bug, windows-os, sandbox, CLI] Windows 提权沙箱设置助手在 Base64 负载超过 CreateProcessW 限制时触发 os error 206** — 9 条评论 | 复杂负载导致沙箱失败，阻止安全执行。 | 🐛 |
| **#31864** | **[bug, CLI, subagent, Papercuts 2026] 所有 GPT-5.6 Sol 对话失败，因为 MultiAgentV2 使用了保留的 collaboration.spawn_agent** — 8 条评论，18 👍 | 保留工具错误阻止所有 GPT-5.6 Sol 会话。 | 🔴 严重 |
| **#44363** | **[bug, context, app, session] 上下文压缩就地重写存储的 rollout 并永久破坏对话记录** — 7 条评论 | 压缩破坏历史记录——严重的数据完整性问题。 | 🔴 数据丢失 |

**完整链接：** [#42987](https://github.com/openai/codex/issues/42987) · [#42739](https://github.com/openai/codex/issues/42739) · [#18115](https://github.com/openai/codex/issues/18115) · [#32614](https://github.com/openai/codex/issues/32614) · [#40880](https://github.com/openai/codex/issues/40880) · [#39178](https://github.com/openai/codex/issues/39178) · [#46613](https://github.com/openai/codex/issues/46613) · [#32315](https://github.com/openai/codex/issues/32315) · [#31864](https://github.com/openai/codex/issues/31864) · [#44363](https://github.com/openai/codex/issues/44363)

---

## 关键 PR 进展

| # | PR | 变更内容 |
|---|----|--------------|
| **#47142** | 为独立网页搜索配置系统代理 | 网页搜索现尊重已配置的系统代理（`respect_system_proxy`）。 |
| **#47132** | 支持网络代理中调用方提供的 MITM CA | 添加了 `network.mitm_ca` 配置项，用于自定义证书/密钥文件。 |
| **#47130** | 从 `gpt-5.6-sol` 中移除 `ultrafast` 服务层级 | `gpt-5.6-sol` 现仅提供 `priority` 层级。 |
| **#47129** | 在扩展工具环境中保留外部工作目录 | 扩展工具现可接收非原生路径的工作目录环境。 |
| **#47122** | 将 OpenAI 文件 blob 上传超时从 60 秒提升至 5 分钟 | 大文件上传不再超时。 |
| **#47121** | 将线程 ID 传递给附件上传 | 附件存储现支持基于线程的放置。 |
| **#47118** | 支持 Code Mode 工具消息的模型目录覆盖 | Code Mode 工具消息现使用目录覆盖，启用自定义 `exec`/`wait` 描述。 |
| **#47116** | 在远程插件请求中遵循配置的产品 SKU | 远程插件现尊重 `apps_mcp_product_sku` 配置，而非硬编码 `codex`。 |
| **#47114** | 保留并暴露线程项的生命周期时间戳 | 为线程项添加了 `startedAtMs` / `completedAtMs`。 |
| **#47101** | 为实时 WebSocket 连接遵循配置的代理 | 语音实时 WebSocket 现使用代理管道。 |

**完整链接：** [#47142](https://github.com/openai/codex/pull/47142) · [#47132](https://github.com/openai/codex/pull/47132) · [#47130](https://github.com/openai/codex/pull/47130) · [#47129](https://github.com/openai/codex/pull/47129) · [#47122](https://github.com/openai/codex/pull/47122) · [#47121](https://github.com/openai/codex/pull/47121) · [#47118](https://github.com/openai/codex/pull/47118) · [#47116](https://github.com/openai/codex/pull/47116) · [#47114](https://github.com/openai/codex/pull/47114) · [#47101](https://github.com/openai/codex/pull/47101)

---

## 热门讨论

### 想法

| # | 讨论 | 摘要 |
|---|------------|---------|
| **#9200** | **[Ideas] 添加从 ChatGPT 应用远程控制 codex 的能力** — 51 条评论，191 👍 | 请求无头/守护进程模式，支持从 ChatGPT 移动应用远程控制。非常受欢迎。 |
| **#47058** | **使指令加载、可用功能和执行证据可见且可审计** — 1 条评论，1 👍 | 用户希望看到加载了哪些指令、哪些功能处于活跃状态以及执行了什么工作。 |
| **#47107** | **Sarge：拒绝运行的规则检查，而不是指令文件中的另一行** — 0 条评论，1 👍 | 可执行的规则检查，而非建议性指令文件。 |

### 综合

| # | 讨论 | 摘要 |
|---|------------|---------|
| **#7782** | **弃用 Codex 中的 `chat/completions` 支持** — 15 条评论，21 👍 | 官方公告弃用旧的 `chat/completions` API，转向 `responses`。 |
| **#8503** | **尽管代码审查用量显示剩余 100%，但显示"达到用量限制"** — 20 条评论，9 👍 | GitHub Connector 报告达到用量限制，即使配额显示已满——持续混乱。 |
| **#47057** | **通过将 V4.1 Flash 设为原生子 Agent，我将 Astra 用量在 23 小时构建中减少了 94%** — 0 条评论，1 👍 | 社区使用 Flash 作为子 Agent 来解决 Astra 配额问题的变通方案。 |

### 展示分享

| # | 讨论 | 摘要 |
|---|------------|---------|
| **#38815** | **基于 Codex 构建：九家提供商的质量调整后 LLM API 成本对比** — 3 条评论，1 👍 | TokenGauge Workbench — 使用 Codex 构建的独立成本对比工具。 |
| **#46967** | **WeChat 的 ClawBridge — ChatGPT Work、项目聊天和显式只读 Codex** — 1 条评论，1 👍 | WeChat 与 Codex/Work 的本地桥接集成。 |
| **#47027** | **我为 WezTerm 制作了每面板的 Codex 状态行** — 0 条评论，1 👍 | WezTerm 面板状态指示器，用于多面板 Codex 使用。 |

**完整链接：** [#9200](https://github.com/openai/codex/discussions/9200) · [#47058](https://github.com/openai/codex/discussions/47058) · [#47107](https://github.com/openai/codex/discussions/47107) · [#7782](https://github.com/openai/codex/discussions/7782) · [#8503](https://github.com/openai/codex/discussions/8503) · [#47057](https://github.com/openai/codex/discussions/47057) · [#38815](https://github.com/openai/codex/discussions/38815) · [#46967](https://github.com/openai/codex/discussions/46967) · [#47027](https://github.com/openai/codex/discussions/47027)

---

## 功能请求趋势

1. **仓库级插件/应用市场配置** — 团队希望在 `.codex/` 中捆绑插件和市场定义，而非仅用户级配置。
2. **远程控制/无头守护进程模式** — 强烈需求将 Codex 作为后台服务运行，支持从移动设备控制（#9200 获 191 👍）。
3. **本地密钥存储** — API 密钥、SSH、数据库密码的安全凭证管理。
4. **可审计性/指令加载可见性** — 用户希望看到加载了哪些指令、哪些功能处于活跃状态以及执行了什么工作。
5. **可执行规则检查** — 超越建议性指令文件的强制规则检查（Sarge 概念）。
6. **每面板/多实例 UI 指示器** — 终端复用器的状态行（WezTerm、tmux）。
7. **活动摘要扩展** — 桌面应用中默认展开的工具调用摘要。

---

## 开发者痛点

- **配额/用量追踪不一致** — 用户在配额显示满额时仍看到"达到用量限制"；Astra 在几分钟内耗尽 5 小时配额（#42987、#40880、#8503）。
- **Windows 桌面不稳定** — 更新后项目消失、登录失败、"思考中"UI 卡死、选择器无法点击。
- **上下文压缩数据丢失** — 压缩永久破坏对话记录（#44363）。
- **OOM/内存问题** — 大型会话 JSONL 上 `codex resume` 耗尽内存（#28866、#30932）。
- **Linux MCP 问题** — `app-server` 到 MCP 进程的文件描述符泄漏（#46960）。
- **GPT-5.6 Sol 故障** — 保留工具错误阻止所有 Sol 会话（#31864）。
- **浏览器/计算机使用崩溃** — UIElementTreeTransformation 中的 SIGTRAP 错误，macOS 浏览器阻止已认证站点。
- **远程缺少斜杠命令** — 安卓缺少 `/compact`、`/side`、`/fork`、`/feedback`、`/review`。

---

*基于 GitHub 数据生成 — 2026-09-22*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this GitHub community digest from English to Chinese. I need to translate the content while:
1. Preserving all Markdown structure exactly
2. Keeping all URLs, issue/PR numbers, code, file paths, version tags as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate while maintaining the structure:

- Title: "GitHub Community Digest" → "GitHub 社区动态"
- Dates need to stay as-is
- Priority labels (P1, P2, P3) stay as-is
- Issue/PR numbers stay as-is
- Code/technical terms stay as-is
- URLs stay as-is

Let me translate section by section:

**Today's Highlights** → **今日要闻**

**Releases** → **版本发布**

**Hot Issues** → **热门 Issue**

**Key PR Progress** → **重要 PR 进展**

**Feature Request Trends** → **功能需求趋势**

**Developer Pain Points** → **开发者痛点**

Now for the content:

"the project continues shipping rapid nightly fixes" → "项目继续快速推送 nightly 版本修复"

Let me translate the full content now.</think>

# GitHub 社区动态 — 2026-09-22

## 今日要闻

项目继续快速推送 nightly 版本修复，最新版本为 **v0.62.0-nightly.20260921.gcfbcaa8df**。多个高优先级问题正在解决中：一项关键的 P1 修复 (#29244) 实现了原子文件写入，防止并行工具执行时的静默数据丢失；另一项 P1 修复 (#29436) 解决了 stdin 中引号内包含 `@` 导致的 100% CPU 卡死问题。社区也在积极讨论 AST 感知工具 (#22745) 和零依赖操作系统沙箱 (#19873) 作为长期架构改进方向。

---

## 版本发布

| 版本 | 变更 |
|------|------|
| **v0.62.0-nightly.20260921.gcfbcaa8df** | Nightly 构建版本。对比 [v0.62.0-nightly.20260920.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df) 查看增量变更。 |

---

## 热门 Issue

| # | Issue | 优先级 | 为何重要 | 反馈 |
|---|-------|--------|----------|------|
| **#22323** | [子代理在达到 MAX_TURNS 后报告为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 子代理即使达到最大轮次未完成分析也报告成功（终止原因："GOAL"）——这会掩盖实际失败。 | 13 条评论，2 👍 |
| **#19873** | [零依赖操作系统沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 提出利用 Gemini 3 原生 bash 亲和性，结合使用 POSIX 工具的创新零依赖沙箱方案。 | 9 条评论，1 👍 |
| **#21409** | [通用代理卡住](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | **阻塞问题：** CLI 在调用通用代理时无限卡死——即使创建简单文件夹也会卡住长达一小时。 | 8 条评论，8 👍 |
| **#22745** | [评估 AST 感知文件读取、搜索和映射的影响](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 追踪 AST 感知工具是否能减少 token 消耗并提升方法边界读取的精确度。 | 7 条评论，1 👍 |
| **#21968** | [Gemini 不够频繁使用技能和子代理](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 模型无法自主调用自定义技能和子代理——即使高度相关也需要用户明确指示。 | 6 条评论 |
| **#26525** | [添加确定性脱敏并减少 Auto Memory 日志](https://github.com/google-gemini/gemini-cli/issues/26525) | P2 | **安全问题：** Auto Memory 在脱敏前将转录内容发送到模型上下文； secrets 可能通过日志泄露。 | 5 条评论 |
| **#26522** | [阻止 Auto Memory 无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522) | P2 | Auto Memory 不断重新浮现未处理的低信号会话，造成无限重试循环。 | 4 条评论 |
| **#21983** | [browser 子代理在 wayland 上失败](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 浏览器代理在 Wayland 显示服务器上失败——重要的平台兼容性缺口。 | 4 条评论，1 👍 |
| **#20079** | [~/.gemini/agents/filename.md 符号链接无法识别](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | `~/.gemini/agents/` 中的符号链接代理文件无法被识别为有效的子代理。 | 4 条评论 |
| **#22672** | [代理应劝阻破坏性行为](https://github.com/google-gemini/gemini-cli/issues/22672) | P2 | 模型偶尔会使用风险命令如 `git reset --force`，而存在更安全的替代方案。 | 3 条评论，1 👍 |

---

## 重要 PR 进展

| # | PR | 领域 | 摘要 |
|---|-----|------|------|
| **#29244** | [修复：使工具文件写入原子化并序列化同路径写入](https://github.com/google-gemini/gemini-cli/pull/29244) | 核心 | **关键 P1 修复：** 并行工具执行时针对同一文件的编辑会静默丢失——现已对同路径写入进行序列化。 |
| **#29436** | [修复：防止 stdin 中引号内的 @ 导致 100% CPU 卡死](https://github.com/google-gemini/gemini-cli/pull/29436) | 核心 | 修复管道/粘贴内容包含双引号内 `@`（如 `@scope/pkg` 导入）时的无限循环问题。 |
| **#29440** | [修复：web-fetch 引用使用 UTF-8 偏移量](https://github.com/google-gemini/gemini-cli/pull/29440) | 代理 | 修复非 ASCII 响应中 `web-fetch` 引用位置错误的问题，正确处理 UTF-8 字节偏移。 |
| **#29435** | [修复：防止会话退出时进程卡住](https://github.com/google-gemini/gemini-cli/pull/29435) | cli/core | 正确清理 stdin，修复 MCP 传输终止，防止会话退出时进程卡住。 |
| **#29437** | [修复：后台 shell 执行退出时清理临时目录](https://github.com/google-gemini/gemini-cli/pull/29437) | 核心 | 确保 `gemini-shell-*` 临时目录在后台进程完成后自动清理。 |
| **#29432** | [修复：调度器销毁时处理排队的工具调用](https://github.com/google-gemini/gemini-cli/pull/29432) | 核心 | 拒绝排队的工具批次，在调度器销毁时阻止剩余工具启动。 |
| **#29429** | [修复：显示服务器报告的限制和重置窗口](https://github.com/google-gemini/gemini-cli/pull/29429) | 企业版 | 在发生 `RESOURCE_EXHAUSTED` 错误时向用户显示配额限制和重置窗口。 |
| **#29423** | [修复：在沙箱中持久化文件夹信任](https://github.com/google-gemini/gemini-cli/pull/29423) | 平台 | podman/docker 沙箱中的文件夹信任决策现在持久化到主机的 `trustedFolders.json`。 |
| **#28422** | [修复：扩展 checkout 期间解析引用歧义](https://github.com/google-gemini/gemini-cli/pull/28422) | cli | 通过将引用解析为具体提交 SHA 来提升扩展克隆/checkout 的健壮性。 |
| **#29319** | [修复：SDK 中 sendStream 的工具调用参数 JSON.parse 防护](https://github.com/google-gemini/gemini-cli/pull/29319) | SDK | 在 `sendStream` 中防护 `JSON.parse`，防止因格式错误的工具调用参数导致崩溃。 |

---

## 功能需求趋势

1. **AST 感知工具** — 多个 Issue (#22745, #22746, #19561) 请求支持抽象语法树以实现精确代码导航，减少"消防水带"式文件读取带来的 token 消耗。
2. **子代理自主性** — 强烈期望模型能够自主调用技能和子代理，无需显式提示 (#21968)。
3. **持久化任务跟踪** — 请求用基于文件的 CRUD 操作替代上下文内 TODO 跟踪 (#18836)。
4. **安全加固** — Auto Memory 的确定性脱敏 (#26525) 和更好处理破坏性操作 (#22672)。
5. **平台兼容性** — 浏览器代理的 Wayland 支持 (#21983)、终端 resize 性能改进 (#21924)。

---

## 开发者痛点

- **代理卡死** — 通用代理 (#21409) 和交互式提示 (#22465) 导致的无限卡死问题仍未解决。
- **内存泄漏/会话持久化** — `/compress` 命令在会话间不保持状态 (#21335)，恢复会话时丢失状态。
- **工具写入冲突** — 并行文件编辑静默丢失数据（正在 #29244 中修复）。
- **配额可见性** — 用户直到请求失败才知道速率限制——正在通过 #29429 改善。
- **环境配置摩擦** — 每次启动沙箱都重新出现文件夹信任提示 (#29423)。

---

*动态内容来源于 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 于 2026-09-22 的活动。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese (Simplified). I need to:

1. Translate all headings, body text, and table content
2. Keep all Markdown formatting exactly as-is
3. Keep URLs, issue numbers, code, technical terms, and identifiers verbatim
4. Use natural technical Chinese suitable for a developer newsletter

Let me go through and translate section by section, making sure to preserve all formatting.

Key points:
- "GitHub Copilot CLI Community Digest" → "GitHub Copilot CLI 社区周报"
- "Today's Highlights" → "今日要闻"
- "Releases" → "版本更新"
- "Hot Issues" → "热门问题"
- "Key PR Progress" → "重要 PR 进展"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"

I need to be careful with:
- Tables - translate content, keep structure
- Links - keep URLs
- Issue/PR numbers - keep as-is
- Technical terms - keep in English where appropriate
- Emoji - keep
- Dates - keep format

Let me translate this carefully:</think>

# GitHub Copilot CLI 社区周报

**日期：** 2026-09-22

---

## 1. 今日要闻

GitHub 发布了 **v1.0.88-0** 和 **v1.0.88-1**，为 Ghostty 和 WezTerm 带来了终端通知支持，改进了命名空间自定义技能的发现机制，并修复了多个权限处理和会话管理相关的问题。社区持续关注长时间会话的内存和流式输出问题，同时关于自定义模型配置和会话分支的功能请求仍然热度不减。

---

## 2. 版本更新

### v1.0.88-1 (2026-09-22)
**修复：**
- 在托管设置刷新失败时保留 `/allow-all` 并记住缺失路径的精确会话授权，无需授予父目录；精确授权可在 `/list-dirs` 中查看，并通过 `/reset-allowed-tools` 清除
- 修复代理隧道失败导致的沙盒网络拒绝问题

### v1.0.88-0 (2026-09-22)
**新增：**
- 为 Ghostty 和 WezTerm 直连会话添加可选的 OSC 777 终端通知
- 支持命名空间自定义技能，并在技能发现过程中忽略指定的技能目录
- MCP 和插件视图显示服务器显示名称和插件描述，状态更清晰

**改进：**
- 改进了会话恢复机制

### v1.0.87 (2026-09-21)
**新增：**
- 为 Auto 路由层级添加用户级和托管级启动默认值，包括严格模式和用户可覆盖的组织策略
- 同一模式下的连续转向提示合并为一条待处理消息；按 ↑ 键可调出空聊天输入进行编辑，包括粘贴的文本

---

## 3. 热门问题

| # | 问题 | 摘要 | 重要性 | 点赞 |
|---|-----|---------|----------------|-----------|
| **#3385** | [WSL 升级后无法运行 copilot cli](https://github.com/github/copilot-cli/issues/3385) | CLI 在 WSL 版本 6.6.114.1 升级后卡住 | Windows/WSL 用户升级后无法使用 CLI；自 5 月起持续讨论中 | 👍 9 |
| **#1313** | [会话分支](https://github.com/github/copilot-cli/issues/1313) | 请求允许在保留对话历史的同时创建分支会话 | 广受欢迎的工作流功能，便于尝试替代方案 | 👍 13 |
| **#3399** | [允许 BYOK 使用自定义请求头](https://github.com/github/copilot-cli/issues/3399) | 允许为 BYOK LLM 服务器配置自定义 HTTP 头（如 X-Tenant-ID） | 企业用户需要多租户请求头支持；社区需求强烈 | 👍 14 |
| **#3749** | [终端流式渲染器损坏输出](https://github.com/github/copilot-cli/issues/3749) | 流式输出时出现字符重复、令牌截断、行重复 | 影响日常使用；推理/思考内容和最终输出都被损坏 | 👍 8 |
| **#4699** | [长时间 --resume 会话 OOM 崩溃](https://github.com/github/copilot-cli/issues/4699) | 长时间恢复会话期间 V8 堆内存耗尽；崩溃转储写入工作目录 | 高级用户的关键稳定性问题；诊断文件污染工作目录 | 👍 6 |
| **#4211** | [无法处理结构化 MCP 响应中的 BigInt](https://github.com/github/copilot-cli/issues/4211) | 返回大数字的 MCP 服务器导致 `TypeError: Do not know how to serialize a BigInt` | 破坏数字密集型工具的 MCP 集成 | 👍 3 |
| **#2486** | [MCP 服务器被策略阻止](https://github.com/github/copilot-cli/issues/2486) | 个人 Pro+ 账户突然无法使用 MCP 服务器，尽管之前一直正常 | 令人沮丧的策略执行，无明确解决路径 | 👍 0 |
| **#4218** | [允许用户配置 Auto 模式使用的模型池](https://github.com/github/copilot-cli/issues/4218) | 用户无法定义 Auto 模式允许使用哪些模型 | 成本和行为可预测性关注点；16 个赞显示强烈需求 | 👍 16 |
| **#3704** | [希伯来语应为 RTL 但显示为 LTR](https://github.com/github/copilot-cli/issues/3704) | 希伯来语和阿拉伯语等 RTL 语言显示不正确 | 非 LTR 语言用户无障碍访问问题 | 👍 0 |
| **#4844** | [--yolo 启动标志被预认证失败关闭旁路吞掉](https://github.com/github/copilot-cli/issues/4844) | 策略解析后 `--yolo`/`--allow-all` 未被保留 | 企业环境中旁路权限无法可靠应用 | 👍 0 |

---

## 4. 重要 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|---------|--------|
| **#4739** | [docs: 为终端拥有的 macOS 通知提出方案](https://github.com/github/copilot-cli/pull/4739) | 记录 macOS 通知点击问题，提供 MIT 许可的终端通知示例和可移植回归测试 | OPEN |
| **#4770** | [记录 WebSocket 响应 opt-out](https://github.com/github/copilot-cli/pull/4770) | 记录当 WebSocket 传输不可用时的应急方案（网络阻塞 WS 或会话因 400 input item ID 错误失败） | OPEN |

---

## 5. 功能需求趋势

**最热门需求方向：**

1. **模型配置灵活性** — 用户希望对 Auto 模式使用的模型进行细粒度控制，为 BYOK 设置自定义请求头，以及配置模型池以控制成本和行为。

2. **会话管理** — 在保留历史的同时分支会话，改进会话 ID 跟踪以便调试，以及更好地处理长时间/恢复的会话而不发生 OOM 崩溃。

3. **MCP 增强** — BigInt 值更好的错误处理，更清晰的政策消息，以及与 GPT 模型架构验证行为的更改。

4. **终端/平台改进** — RTL 语言支持，Windows/WSL 可靠性，终端通知自定义，以及流式输出修复。

5. **权限与策略控制** — 工具（bash、文件访问）的细粒度组织策略，更好的旁路标志持久化，以及插件启用状态管理。

---

## 6. 开发者痛点

- **内存稳定性**：长时间恢复的会话反复因 V8 堆 OOM 崩溃，诊断文件倾泻到工作目录 — 严重影响工作流。
- **流式输出损坏**：终端渲染器产生重复字符、截断令牌和重复行，降低 CLI 日常使用体验。
- **WSL/Windows 可靠性**：升级后 WSL 上的 CLI 功能失效，无明确解决路径。
- **MCP 集成缺陷**：策略阻止、BigInt 序列化失败，以及与 GPT 模型架构验证错误造成摩擦。
- **配置发现**：用户级指令文件未出现在 `/instructions` 中，Windows 上的符号链接行为未记录，新工作树会话中自定义 agent 发现失败。
- **权限持久化**：`--yolo` 和 `--allow-all` 标志在预认证期间被吞掉，插件启用状态在重启后未自动修正。

---

*数据来源：github.com/github/copilot-cli — 2026-09-22*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this OpenCode Community Digest from English to Chinese (Simplified). I need to:

1. Translate all the content while maintaining the exact Markdown structure
2. Keep all technical terms, URLs, code references, issue numbers, usernames, version tags as-is
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me go through and translate carefully:

---

# OpenCode 社区周报 — 2026-09-22

## 今日要点

v1.18.32 版本发布，修复了两个有针对性的 bug：Bedrock 图片附件现在仅针对 Claude、Nova 和 Llama 4 模型进行提升，Together AI 流式使用的报告问题也已修复。社区贡献者 @dc85 持续扩展模型支持，新增 DeepSeek V4.1 Flash 和 Grok 4.7。与此同时，社区正在积极排查影响 v1.18.30 用户的"SystemPrompt.environment"崩溃问题，已收到多份重复报告。

---

## 版本发布

### v1.18.32
**发布日期：** 2026-09-22

**核心问题修复：**
- 修复 Bedrock 图片附件提升逻辑，现在仅对 Claude、Nova 和 Llama 4 模型进行提升
- 修复 Together AI 流式使用报告问题

**社区贡献：**
- @dc85 在 Zen 中新增 DeepSeek V4.1 Flash（#49897）
- @dc85 在 Zen 中新增 Grok 4.7

**GitHub 发布：** [anomalyco/opencode/releases/tag/v1.18.32](https://github.com/anomalyco/opencode/releases/tag/v1.18.32)

---

## 热门 issue

### 1. macOS 提示词失败："undefined is not an object (evaluating 'a.name')"
**#48811** | 状态：已关闭 | 评论：10 | 👍: 47

v1.18.30 中的一个严重回归问题导致 macOS 上所有提示词都失败，错误为 `TypeError: undefined is not an object (evaluating 'a.name')`，发生在 `SystemPrompt.environment` 中。错误在会话启动时出现，无需特殊输入。已提交多个重复 issue，影响范围广泛。**已在后续版本中修复。**

[Issue #48811](https://github.com/anomalyco/opencode/issues/48811)

### 2. SystemPrompt.environment TypeError — v1.18.18 运行正常
**#48645** | 状态：已关闭 | 评论：10 | 👍: 18

用户报告升级到 v1.18.30 后，每个提示词都立即失败，提示"Unexpected server error"。这个问题在 v1.18.18 上未出现，表明最近的改动破坏了系统提示词的组装流程。**现已解决。**

[Issue #48645](https://github.com/anomalyco/opencode/issues/48645)

### 3. 远程 SSH 控制台中剪贴板复制功能失效
**#2773** | 状态：已关闭 | 评论：28 | 👍: 3

这个长期存在的问题（创建于 2025-09-25）是指在远程 SSH 控制台中运行的 OpenCode 缺少 Claude Code 提供的剪贴板复制功能。用户无法在远程会话中复制所选文本。这一功能缺失影响了远程开发工作流。

[Issue #2773](https://github.com/anomalyco/opencode/issues/2773)

### 4. 添加 OpenRouter API 后出现"Unexpected Server Error"
**#29748** | 状态：开放中 | 评论：18 | 👍: 2

直接添加 OpenRouter API 并切换项目后，用户遇到"Unexpected server error"，即使重启应用也无法解决。这个阻塞性问题影响了受影响用户的正常使用。

[Issue #29748](https://github.com/anomalyco/opencode/issues/29748)

### 5. 推理内容 `encrypted_content` 未授予给调用者
**#48973** | 状态：开放中 | 评论：12 | 👍: 8

使用 Muse Spark 1.3 Free 配合 OpenCode Zen 时，用户收到："[invalid_request_error] reasoning `encrypted_content` was not issued to this caller"。这似乎是影响免费套餐的提供商/API 不匹配问题。

[Issue #48973](https://github.com/anomalyco/opencode/issues/48973)

### 6. 特性请求：手动刷新模型列表
**#4734** | 状态：已关闭 | 评论：10 | 👍: 9

用户请求能够手动刷新模型列表的功能。目前没有 UI 选项来触发模型列表刷新，这在新增模型或缓存过期时是必要的。**现已通过 PR #50456 实现。**

[Issue #4734](https://github.com/anomalyco/opencode/issues/4734)

### 7. 通过 CLI/TUI 创建的会话永远不会出现在 Web 首页
**#45011** | 状态：开放中 | 评论：8 | 👍: 2

通过 `opencode run`、TUI 或 agent 创建的会话永远不会出现在 Web UI 首页。即使 CLI 显示有数十个会话，项目侧边栏也显示为空。这似乎是当项目未在浏览器中手动添加时，客户端项目注册的问题。

[Issue #45011](https://github.com/anomalyco/opencode/issues/45011)

### 8. 免费额度用尽 — 重试计时器不断递增
**#50093** | 状态：开放中 | 评论：8 | 👍: 5

免费套餐用户报告，超过使用限额后，重试计时器会大幅递增。等待超过 6 小时后切换到另一个免费模型，结果等待时间更长（例如 6小时16分钟 → 更长）。这给免费套餐用户带来了糟糕的体验。

[Issue #50093](https://github.com/anomalyco/opencode/issues/50093)

### 9. Web 首页隐藏全局项目会话
**#46444** | 状态：开放中 | 评论：6 | 👍: 0

从非 git 仓库目录运行 `opencode web` 时，首页显示空的会话列表，尽管 CLI 显示有数十个会话。在 git 仓库外创建的会话在 Web UI 中不可见。

[Issue #46444](https://github.com/anomalyco/opencode/issues/46444)

### 10. LLM 流式输出时 TUI 文本消失 — TreeSitter Worker 栈溢出
**#42264** | 状态：开放中 | 评论：5 | 👍: 4

在 LLM 流式输出期间，语法高亮 worker 在 tree-sitter 的 `captures()` 中发生 WASM 栈溢出。因为流式代码路径不独立于高亮结果更新文本缓冲区，worker 崩溃会导致显示的代码冻结在上一个状态。

[Issue #42264](https://github.com/anomalyco/opencode/issues/42264)

---

## PR 进展

### 1. feat(tui): 添加自动标签页模式
**#50456** | 状态：已关闭 | 贡献者：opencode-agent[bot]

用 `tabs.mode` 替代布尔值标签页设置，值可为 `auto`、`on` 或 `off`。默认为 `auto`，当 `HERDR_ENV=1` 时禁用会话标签页。保持与 `tabs.enabled` 的向后兼容性。这实现了 issue #4734 中的功能请求。

[PR #50456](https://github.com/anomalyco/opencode/pull/50456)

### 2. feat(app): 通过浏览器登录 OpenCode Go 和 Console
**#50267** | 状态：开放中 | 贡献者：Hona

OpenCode Go / OpenCode Console 的桌面端入门流程现在直接重定向到基于浏览器的 Console 登录。API 密钥路径现在是底部的一个小链接。这简化了新用户的认证流程。

[PR #50267](https://github.com/anomalyco/opencode/pull/50267)

### 3. feat: chat.model 钩子
**#50448** | 状态：已关闭 | 贡献者：dmouse

新增 `chat.model` 钩子，允许插件在每个 provider turn 之前动态选择模型，而不是整个任务使用单一模型。这实现了多模型工作流中的运行时模型切换。

[PR #50448](https://github.com/anomalyco/opencode/pull/50448)

### 4. fix(client): 保留服务启动失败状态
**#50462** | 状态：开放中 | 贡献者：abpai

在两个 service clients 中保留首次启动失败。当重叠进程无法绑定端口时，捕获的错误现在会显示给用户，而不是丢失。

[PR #50462](https://github.com/anomalyco/opencode/pull/50462)

### 5. fix(app): 保持快捷键筛选器在输入时获得焦点
**#49815** | 状态：开放中 | 贡献者：fschrhunt

修复了 Settings → Shortcuts 筛选输入框在输入第一个字符后失去焦点的 bug。现在筛选器保持焦点，可连续输入。

[PR #49815](https://github.com/anomalyco/opencode/pull/49815)

### 6. fix(codemode): 实时 Map/Set forEach，生成器原型，重复函数声明
**#50450** | 状态：已关闭 | 贡献者：rekram1-node

五个小的 JS 一致性修复：实时 Map/Set forEach 迭代、生成器原型处理、重复函数声明，以及对非引用的 delete 操作。

[PR #50450](https://github.com/anomalyco/opencode/pull/50450)

### 7. feat(codemode): 在 unknown-tool 错误中提示最接近的工具名
**#50455** | 状态：已关闭 | 贡献者：rekram1-node

调用不存在的工具现在会推荐最接近的真实工具：`Unknown tool 'github.get-me'. Did you mean tools.github.get_me?`

[PR #50455](https://github.com/anomalyco/opencode/pull/50455)

### 8. fix(cli): run 空闲时刷新遗漏的部分
**#50453** | 状态：开放中 | 贡献者：BoYanZh

修复非交互式 `opencode run --format json` 中偶发的空 stdout 问题，即使后端已记录输出。这解决了程序化使用中的数据完整性问题。

[PR #50453](https://github.com/anomalyco/opencode/pull/50453)

### 9. feat(core): 恢复 GitLab 工作流发现并添加 OAuth 登录
**#50422** | 状态：开放中 | 贡献者：vglafirov

恢复 GitLab 工作流发现功能，并为内置的 GitLab Duo provider 添加 OAuth 登录支持。

[PR #50422](https://github.com/anomalyco/opencode/pull/50422)

### 10. docs(ecosystem): 添加 opencode-mesh 插件
**#50460** | 状态：已关闭 | 贡献者：divisionseven

将 opencode-mesh 添加到生态系统的插件表中。支持跨不同用户和机器的会话间实时消息传递。

[PR #50460](https://github.com/anomalyco/opencode/pull/50460)

---

## 热门讨论

*(源数据中未提供讨论数据。)*

---

## 功能请求趋势

根据 issue 分析，最常请求的功能方向是：

| 类别 | 请求数 | 示例 |
|----------|----------|----------|
| **UI/UX 改进** | 多个 | 手动刷新模型列表（#4734）、标签页快捷键（#37077）、Web UI 会话可见性（#45011、#46444） |
| **模型/Provider 灵活性** | 增长中 | 动态模型选择（#50448）、免费套餐可用性（#50093）、OAuth 吞吐量（#39864） |
| **远程/无头支持** | 持续存在 | SSH 剪贴板（#2773）、无头服务器项目注册（#44216、#37096） |
| **开发者体验** | 进行中 | 快捷键筛选器焦点（#49815）、工具建议（#50455） |

---

## 开发者痛点

### 高影响 bug
1. **SystemPrompt.environment 崩溃** — 多个重复 issue（每个 10+ 评论，30-47 👍）表明 v1.18.30 的这个回归问题严重影响了生产使用。用户回滚到 v1.18.18/v1.18.20 以恢复功能。

2. **Web UI 会话可见性** — 通过 CLI/TUI 创建的会话不会出现在 Web 首页，造成工作存储位置的困惑。影响 git 和非 git 项目场景。

3. **免费套餐用户体验** — 使用限额 enforcement 与递增的重试计时器造成糟糕的用户体验；用户报告等待 6+ 小时仍不清楚重置时间。

### 反复出现的问题
- **平台特定问题**：Windows（TUI 流式输出、剪贴板、项目注册）、macOS（提示词崩溃）、Linux/SSH（剪贴板）各有不同问题
- **模型/provider 兼容性**：推理内容加密错误、DeepSeek V4/MiMo 工具调用失败、OAuth 吞吐量差异
- **数据完整性**：Bash 工具多字节输出时的 stdout 损坏（#50458）、JSON 模式空 stdout（#50453）

---

*数据来源：GitHub — anomalyco/opencode*

---

规则：
- 仅输出翻译内容。不需要前言、解释或在整个输出外包裹 markdown 标记。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、引用、粗体/斜体、水平线。
- 保留 URL、链接目标、代码片段、代码块、数字和日期原样。
- 保持项目名称、仓库路径、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文，开发团队通讯的语调——不是逐字直译。</think>



</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese. Let me analyze the content and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, preserving all the structure and technical terms.</think>

# Pi 社区周报 — 2026-09-22

## 今日要闻

v0.87.0 引入了规范的会话上下文编辑功能，配合可操作的生命周期钩子，使编辑模型上下文无需重写历史。同时，社区正在解决 0.86.x 中的严重性能回退问题——尤其是全屏 TUI 渲染风暴和 RPC 转向无法关联的问题——贡献者则快速合并了 18 个 PR，修复了诸多 bug 并增加了新的 provider 支持。

---

## 版本发布

**v0.87.0** — *2026-09-22*
> [发布说明](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)

- **规范的会话上下文与扩展边界** — 引入 `ContextEditEntry`，支持编辑模型上下文而无需重写历史，同时为扩展开发者提供可操作的生命周期钩子，以拦截和修改会话状态变更。

---

## 热门 Issue

| # | 标题 | 为何重要 | 社区反馈 |
|---|-------|----------|----------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | Mac OS 长会话下 CPU 占用过高 | 用户报告 CPU 飙升至 50-110%，内存占用 600-800MB，与会话时长直接相关。 | 17 条评论，10 👍 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` 静默禁用了所有 provider 模型发现功能 | 文档未记载此行为：PI_OFFLINE 原意仅禁用启动时的 housekeeping，但实际也阻断了整个会话的模型目录发现。 | 12 条评论 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | RPC steer 成功无法与扩展处理的输入关联 | 自 0.86.0 起，RPC steer 穿过扩展处理器但成功响应未标识排入队列的内容——客户端无法可靠地关联。 | 9 条评论 |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | 压缩包含 thinking 消息导致溢出 | 本地 Qwen3.8 会话达到 16K token 输出限制时仍在"思考"，导致压缩包含了实际从未请求过的消息。 | 6 条评论 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | 大型对话记录每帧都重新渲染；调整大小时重新发送整个 transcript | Windows 11 双核机器上，长对话会使 1 个核心饱和——每帧都触发完整 transcript 重新发送。 | 6 条评论 |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | `before_provider_request` 未在压缩/摘要时触发 | 扩展钩子文档称在任何 provider 请求前触发，但在压缩/分支摘要时从不触发，限制了扩展的可观测性。 | 5 条评论 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | 全屏 TUI 中，位于视口上方的变更行引发重绘风暴 | 长对话记录导致剧烈跳动和文字重影；几乎每帧都走 fullRender 路径。 | 5 条评论，1 👍 |
| [#9784](https://github.com/earendil-works/pi/issues/9784) | 元 Issue：允许扩展访问供应商特定的响应字段 | 反复请求访问 provider 特定的响应字段——`AssistantMessage` 是张"普罗克鲁斯之床"，剥离了扩展需要的供应商数据扩展。 | 3 条评论 |
| [#9829](https://github.com/earendil-works/pi/issues/9829) | 扩展无法观察每次尝试的 provider 重试 | 速率限制重试对扩展事件不可见；pi-ai 有重试回调但 coding-agent 仅为其连接了压缩。 | 3 条评论 |
| [#9792](https://github.com/earendil-works/pi/issues/9792) | `SessionManager.create()` 在首个 assistant 消息前不写入会话文件 | 返回 `isPersisted() === true` 并带有路径，但磁盘上实际没有 `.jsonl` 文件——进程崩溃会丢失会话。 | 2 条评论 |

---

## 关键 PR 进展

| # | 作者 | 摘要 |
|---|------|------|
| [#9866](https://github.com/earendil-works/pi/pull/9866) | YxinMiracle | 修复：重放前验证持久化的工具参数——防止架构变更后遗留的 schema 值被执行。 |
| [#9861](https://github.com/earendil-works/pi/pull/9861) | beantownbytes | 修复：在速率限制 429 时遵守 Google 重试延迟 (RESOURCE_EXHAUSTED)。 |
| [#9859](https://github.com/earendil-works/pi/pull/9859) | SASUKE40 | 功能：通过 xAI Responses 目录添加 Grok 4.7 支持（500K 上下文，图像输入）。 |
| [#9851](https://github.com/earendil-works/pi/pull/9851) | jubingainwell | 修复：从 Bedrock 目录中移除裸 Anthropic 模型 ID——AWS 不再支持按需调用。 |
| [#9850](https://github.com/earendil-works/pi/pull/9850) | kedarpotdar-nv | 进行中：原生 Ollama provider。 |
| [#9848](https://github.com/earendil-works/pi/pull/9848) | Frank-zhu0404 | 文档：在 TUI README 中将 `Component.invalidate()` 标注为必需。 |
| [#9846](https://github.com/earendil-works/pi/pull/9846) | mitsuhiko | 修复：在上下文处理器之间保持 prompt 和工具状态——防止扩展压缩时丢失工具声明。 |
| [#9842](https://github.com/earendil-works/pi/pull/9842) | rwachtler | 修复：独立于滚动条可见性居中"跳转末尾"标签（修复 #9136）。 |
| [#9830](https://github.com/earendil-works/pi/pull/9830) | christianklotz | 修复：使用诊断信息报告无效的 prompt frontmatter，而非静默丢弃模板。 |
| [#9829](https://github.com/earendil-works/pi/pull/9829) | Jeyapaul | 修复：向扩展暴露 provider 重试尝试（解决 #9829）。 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | jsanter27 | 功能：支持 Azure Foundry Chat Completions 部署 (DeepSeek V4 Pro)。 |

---

## 热门讨论

**展示与分享**
- [#1558](https://github.com/earendil-works/pi/discussions/1558) — **CursorAI Agent CLI 定制 provider for Pi** — 社区成员发布了 `@netandreuse/pi-cursor-provider`，寻求与其他 provider 获得同等曝光。 | 4 条评论，9 👍

**想法 / 问答**
- [#3337](https://github.com/earendil-works/pi/discussions/3337) — **使用 pi-agent-core 作为客户托管定时 agent 平台的运行时** — 产品团队评估 pi-agent-core 用于定时 agent 功能；寻求指导此方向是否受欢迎。 | 1 条评论，5 👍

---

## 功能请求趋势

1. **扩展 API 可扩展性** — 多项请求要求扩展访问供应商特定的响应字段、观察 provider 重试，以及拦截压缩/摘要请求。
2. **Provider 模型发现控制** — 用户希望 PI_OFFLINE 真正仅禁用启动检查，而非所有基于网络的模型目录操作。
3. **原生 provider 扩展** — Ollama 原生 provider 正在积极开发中；社区贡献了 Grok 4.7 和 Azure Foundry 支持。
4. **大规模 TUI 性能** — 长对话渲染、滚动条处理和全屏模式可靠性是反复出现的主题。
5. **会话持久化健壮性** — 更好地处理文件写入时机、子会话在 /resume 选择器中的组织，以及退出时滚动条完整性。

---

## 开发者痛点

- **0.86.x 回退** — LiteLLM 中间流程错误、Codex 工具调用泄漏为原始文本、RPC 关联在扩展处理输入时失效。
- **压缩脆弱性** — thinking 消息溢出问题、过期条目损坏会话、传输选项在摘要时丢失。
- **工具参数验证** — 空/格式错误的工具调用导致 400 错误螺旋；持久化的参数在重放时未根据当前 schema 验证。
- **跨平台 TUI bug** — 全屏模式图像渲染、Windows 10 重绘问题、滚动条相关 UI 跳动。
- **Provider 特定问题** — Anthropic 阻止 Pi 订阅、Kimi 退出时挂起、GLM 推理 effort 分发失败。

---

*来源：github.com/earendil-works/pi — 2026-09-22*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the text content
2. Keep all markdown structure exactly as-is
3. Keep URLs, code references, issue numbers, usernames, version tags, file paths as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate this carefully while preserving the structure.

Let me translate section by section:

---

# Qwen Code 社区简报 — 2026-09-22

## 今日要闻

Qwen Code v0.24.3 发布了，包含了 Web Shell 结构化 Shell 结果、可选轨迹指标、主机设置白名单以及移动端导航修复。发布包还包括 SDK TypeScript v0.1.14（CLI 0.24.3）和 Desktop v0.24.3。一个关键的 P1 问题（#11872）影响了 macOS 用户：Web Terminal 显示"PTY not available"，因为 `@lydell/node-pty` 已声明但未打包，且 macOS 代码签名阻止了本地安装的预构建版本。0.24.2 版本的 Remote-SSH 用户遇到了回归问题，每次 `POST /session` 调用都会导致 `write EPIPE` 错误（#12416）。

---

## Release 发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v0.24.3** | 稳定版 | 结构化 Shell 结果、轨迹指标、主机白名单、移动端导航修复 |
| **v0.24.3-nightly.20260921** | 每日构建 | 同 v0.24.3 |
| **sdk-typescript-v0.1.14** | SDK | 包含 CLI 0.24.3 |


| **desktop-v0.24.3** | 桌面端 | ACP 权限队列作用域、共享输出模式 |

*无破坏性变更。*

---

## 热门 Issue

| # | 优先级 | 标题 | 原因 | 评论数 |
|---|----------|-------|----------------|----------|
| **#11872** | P1 | Web Terminal 在 macOS 上显示"[Error: PTY not available]" | 终端功能在 macOS 上不可用；`@lydell/node-pty` 未打包，预构建被阻止 | 13 |
| **#12287** | P2 | 工作流重试-历史记录：强化后续 | 大型 PR（1000→1900 行）拆分以提高可审查性；涉及运行器恢复、检查点模式 | 9 |
| **#11847** | P3 | 会话回顾始终使用英文生成 | 回顾忽略对话语言—无本地化支持 | 8 |
| **#12303** | P2 | 跨会话门控：多会话主机中的会话上限和命名 | 有关在承载多个会话的主机中会话管理的开放问题 | 8 |
| **#12416** | P1 | Remote-SSH：0.24.2 版本中每次 `POST /session` 都会出现 `write EPIPE` / `BridgeChannelClosedError` | 关键回归问题破坏了所有 Remote-SSH 会话创建 | 7 |
| **#12414** | P1 | Windows 构建失败—未发布 artifact | CI 在 pwsh 下运行了 bash 安装；v0.24.2 Windows 版本缺失 | 6 |
| **#11878** | P2 | 会话概览表格从不显示无工作区会话 | 缺少会话类型；点击行打开错误上下文 | 6 |
| **#12381** | P2 | HTTP 网关超时时恢复 session-create 结果 | 超时后会话 ID 丢失；客户端无法安全重试或提示 | 6 |
| **#8835** | P2 | 2026-W33 只读调查结果（8 项） | ACP 会话 cwd / allowed-roots 验证中的安全隔离 bug | 6 |
| **#11815** | P3 | `splitCompoundCommandSegments` 在尾随 `#` 注释内拆分运算符 | 命令解析在注释上表现异常；权限提示不正确 | 6 |

---

## 关键 PR 进展

| # | 作者 | 标题 | 影响 |
|---|--------|-------|--------|
| **#12429** | holny | 修复 CodeModeOnly 工具搜索防护 | 修复 #12425 — 防止工作流关键字桥接发出隐藏工具 |
| **#12412** | yiliang114 | 无需刷新页面即可浏览远程工作区文件夹 | 改进了添加工作区对话框中的用户体验；在原地获取建议 |
| **#12322** | wenshao | 在非环回监听器上启用过期 QR 配对 | 移动端 QR 访问经认证的非环回；60秒过期，45秒刷新 |
| **#12255** | wenshao | 支持无远程守护进程的 SSH 工作区 | 通过 SSH 工作，本地守护进程；凭据/历史记录保留在本地 |
| **#12183** | jkxiao | 从目录加载部署管理的扩展 | `--managed-extensions` CLI 标志；部署控制的扩展 |
| **#12134** | holny | 将会话计划固定在转录上方 | 可折叠的计划条带带步骤计数器；重用终端粘性待办 |
| **#12345** | Lilian0122 | 为主机添加模型管理控件 | `modelManagement={{ allowAdd, allowDelete }}` 用于嵌入式 shell |
| **#12258** | samuelhsin | 支持更大的 MCP 应用、作用域工具调用、隔离来源 | 修复了 Tableau 应用渲染；受限资源、服务端发起工具 |
| **#12391** | doudouOUC | 添加托管工具执行状态 | 托管工具的私有状态契约：幂等创建、分发所有权 |
| **#12404** | ytahdn | 跨重新加载保留引用标签 | 文件/MCP/扩展引用在刷新/重新打开后保留标签 |

---

## 功能请求趋势

1. **UI 自定义** — 用户请求可调整的 UI 字体大小（#12406）、嵌入式 shell 的模型管理控件（#12345）
2. **会话管理** — 多工作区会话目录 API（#12249）、跨会话治理（#12303）、会话超时恢复（#12381）
3. **平台覆盖** — 改进了 PowerShell 的 Windows 守护进程防护（#12375）、WSL2 剪贴板修复（#6829）
4. **托管代理架构** — 持久会话所有权的双路径架构提案（#12380）
5. **性能优化** — 一次性无头延迟和内存基线（#12405）
6. **SSH 工作流** — 无守护进程的远程工作区访问（#12255）、工作树管理（#12154）

---

## 开发者痛点

- **macOS Web Terminal 不可用** — P1 问题 #11872 阻止终端使用；临时解决方案不明确
- **Remote-SSH 会话创建失败** — 0.24.2 版本的 P1 回归问题 #12416 阻止所有远程会话
- **Windows 构建失败** — CI 配置 bug（#12414）导致 artifact 缺失
- **会话回顾语言锁定** — 仅英文回顾（#11847）令非英语用户沮丧
- **命令解析误报** — 尾随注释触发错误拆分（#11815），导致虚假权限提示
- **发布管道不稳定** — 多个每日构建版本质量门禁失败（#12401、#12382）
- **MCP 集成差距** — 飞书渠道媒体/上下文丢失（#11554）、无限制的 mime 标签接受（#12290）

---

*基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

---

现在检查每个部分的翻译：

1. 标题和副标题 - 正确翻译
2. 表格 - 保持结构，正确翻译
3. 列表 - 保持格式，正确翻译
4. Issue 链接 - 保持 #12345 格式
5. 代码片段 - 保持原样
6. URL - 保持原样

需要调整几个地方：
- "Rules" 部分不应该出现在输出中，这是给翻译的指令
- 一些技术术语可能需要更自然的表达

让我重新审视一些翻译：

1. "Release 发布" - 改为"版本发布"更自然
2. "Hot Issues" - "热门 Issue" 可以，或者"活跃 Issue"
3. "Key PR Progress" - "关键 PR 进展" 或 "重要 PR 进展"
4. "Feature Request Trends" - "功能请求趋势" 或 "功能需求趋势"
5. "Developer Pain Points" - "开发者痛点" 或 "开发者面临的挑战"

"Rules" 部分应该完全移除。

检查所有代码引用是否保持原样：
- #11872 ✓
- @lydell/node-pty ✓
- POST /session ✓
- write EPIPE ✓
- BridgeChannelClosedError ✓
- splitCompoundCommandSegments ✓
- CodeModeOnly ✓
- --managed-extensions ✓
- modelManagement={{ allowAdd, allowDelete }} ✓
- MCP ✓
- ACP ✓
- v0.24.3 ✓

URL 和链接都保持原样。

代码片段保持原样：
- `{{ allowAdd, allowDelete }}` ✓

现在生成最终输出。</think>

# Qwen Code 社区简报 — 2026-09-22

## 今日要闻

Qwen Code v0.24.3 发布了，包含 Web Shell 结构化 Shell 结果、可选轨迹指标、主机设置白名单以及移动端导航修复。发布包还包括 SDK TypeScript v0.1.14（CLI 0.24.3）和 Desktop v0.24.3。一个关键的 P1 问题（#11872）影响了 macOS 用户：Web Terminal 显示"PTY not available"，因为 `@lydell/node-pty` 已声明但未打包，且 macOS 代码签名阻止了本地安装的预构建版本。0.24.2 版本的 Remote-SSH 用户遇到了回归问题，每次 `POST /session` 调用都会导致 `write EPIPE` 错误（#12416）。

---

## 版本发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v0.24.3** | 稳定版 | 结构化 Shell 结果、轨迹指标、主机白名单、移动端导航修复 |
| **v0.24.3-nightly.20260921** | 每日构建 | 同 v0.24.3 |
| **sdk-typescript-v0.1.14** | SDK | 包含 CLI 0.24.3 |
| **desktop-v0.24.3** | 桌面端 | ACP 权限队列作用域、共享输出模式 |

*无破坏性变更。*

---

## 热门 Issue

| # | 优先级 | 标题 | 为何重要 | 评论数 |
|---|----------|-------|----------------|----------|
| **#11872** | P1 | Web Terminal 在 macOS 上显示"[Error: PTY not available]" | 终端功能在 macOS 上不可用；`@lydell/node-pty` 未打包，预构建被阻止 | 13 |
| **#12287** | P2 | 工作流重试-历史记录：强化后续 | 大型 PR（1000→1900 行）拆分以提高可审查性；涉及运行器恢复、检查点模式 | 9 |
| **#11847** | P3 | 会话回顾始终使用英文生成 | 回顾忽略对话语言—无本地化支持 | 8 |
| **#12303** | P2 | 跨会话门控：多会话主机中的会话上限和命名 | 有关在承载多个会话的主机中会话管理的开放问题 | 8 |
| **#12416** | P1 | Remote-SSH：0.24.2 版本中每次 `POST /session` 都会出现 `write EPIPE` / `BridgeChannelClosedError` | 关键回归问题破坏了所有 Remote-SSH 会话创建 | 7 |
| **#12414** | P1 | Windows 构建失败—未发布 artifact | CI 在 pwsh 下运行了 bash 安装；v0.24.2 Windows 版本缺失 | 6 |
| **#11878** | P2 | 会话概览表格从不显示无工作区会话 | 缺少会话类型；点击行打开错误上下文 | 6 |
| **#12381** | P2 | HTTP 网关超时时恢复 session-create 结果 | 超时后会话 ID 丢失；客户端无法安全重试或提示 | 6 |
| **#8835** | P2 | 2026-W33 只读调查结果（8 项） | ACP 会话 cwd / allowed-roots 验证中的安全隔离 bug | 6 |
| **#11815** | P3 | `splitCompoundCommandSegments` 在尾随 `#` 注释内拆分运算符 | 命令解析在注释上表现异常；权限提示不正确 | 6 |

---

## 关键 PR 进展

| # | 作者 | 标题 | 影响 |
|---|--------|-------|--------|
| **#12429** | holny | 修复 CodeModeOnly 工具搜索防护 | 修复 #12425 — 防止工作流关键字桥接发出隐藏工具 |
| **#12412** | yiliang114 | 无需刷新页面即可浏览远程工作区文件夹 | 改进了添加工作区对话框中的用户体验；在原地获取建议 |
| **#12322** | wenshao | 在非环回监听器上启用过期 QR 配对 | 移动端 QR 访问经认证的非环回；60秒过期，45秒刷新 |
| **#12255** | wenshao | 支持无远程守护进程的 SSH 工作区 | 通过 SSH 工作，本地守护进程；凭据/历史记录保留在本地 |
| **#12183** | jkxiao | 从目录加载部署管理的扩展 | `--managed-extensions` CLI 标志；部署控制的扩展 |
| **#12134** | holny | 将会话计划固定在转录上方 | 可折叠的计划条带带步骤计数器；重用终端粘性待办 |
| **#12345** | Lilian0122 | 为主机添加模型管理控件 | `modelManagement={{ allowAdd, allowDelete }}` 用于嵌入式 shell |
| **#12258** | samuelhsin | 支持更大的 MCP 应用、作用域工具调用、隔离来源 | 修复了 Tableau 应用渲染；受限资源、服务端发起工具 |
| **#12391** | doudouOUC | 添加托管工具执行状态 | 托管工具的私有状态契约：幂等创建、分发所有权 |
| **#12404** | ytahdn | 跨重新加载保留引用标签 | 文件/MCP/扩展引用在刷新/重新打开后保留标签 |

---

## 功能请求趋势

1. **UI 自定义** — 用户请求可调整的 UI 字体大小（#12406）、嵌入式 shell 的模型管理控件（#12345）
2. **会话管理** — 多工作区会话目录 API（#12249）、跨会话治理（#12303）、会话超时恢复（#12381）
3. **平台覆盖** — 改进了 PowerShell 的 Windows 守护进程防护（#12375）、WSL2 剪贴板修复（#6829）
4. **托管代理架构** — 持久会话所有权的双路径架构提案（#12380）
5. **性能优化** — 一次性无头延迟和内存基线（#12405）
6. **SSH 工作流** — 无守护进程的远程工作区访问（#12255）、工作树管理（#12154）

---

## 开发者痛点

- **macOS Web Terminal 不可用** — P1 问题 #11872 阻止终端使用；临时解决方案不明确
- **Remote-SSH 会话创建失败** — 0.24.2 版本的 P1 回归问题 #12416 阻止所有远程会话
- **Windows 构建失败** — CI 配置 bug（#12414）导致 artifact 缺失
- **会话回顾语言锁定** — 仅英文回顾（#11847）令非英语用户沮丧
- **命令解析误报** — 尾随注释触发错误拆分（#11815），导致虚假权限提示
- **发布管道不稳定** — 多个每日构建版本质量门禁失败（#12401、#12382）
- **MCP 集成差距** — 飞书渠道媒体/上下文丢失（#11554）、无限制的 mime 标签接受（#12290）

---

*基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*