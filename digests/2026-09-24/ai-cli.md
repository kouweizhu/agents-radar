# AI CLI 工具社区动态日报 2026-09-24

> 生成时间: 2026-09-24 00:50 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this entire English report into Chinese. I need to:

1. Translate all headings, body text, and table content
2. Keep all markdown formatting (tables, headings, lists, bold, etc.)
3. Keep technical terms, code references, URLs, version numbers as-is
4. Use natural technical Chinese register

Let me translate section by section:

---

**Section 1: Ecosystem Overview**

The AI CLI tooling landscape continues to mature rapidly, with six major platforms competing for developer mindshare. Today's digest data reveals distinct strategic positions: **Anthropic** and **OpenAI** focus on enterprise-grade reliability with security hardening, **Google** pushes bleeding-edge model integration (Gemini 3.8/3.5 Flash Lite), while **GitHub** emphasizes GitHub-native integration. Newer entrants **OpenCode** and **Pi** target self-hosted/custom deployment scenarios, and **Qwen Code** (Alibaba) anchors the open-source Chinese model ecosystem. Common themes across all platforms: Windows parity gaps, MCP (Model Context Protocol) infrastructure investment, and aggressive memory/context optimization for long-running agentic workflows.

翻译：
AI CLI 工具领域正在快速成熟，六大主要平台正在争夺开发者的关注。从今天的摘要数据来看，各平台的战略定位差异明显：**Anthropic** 和 **OpenAI** 专注于企业级可靠性与安全加固，**Google** 推进前沿模型集成（Gemini 3.8/3.5 Flash Lite），而 **GitHub** 强调 GitHub 原生集成。**OpenCode** 和 **Pi** 面向自托管/自定义部署场景，**Qwen Code**（阿里巴巴）则锚定开源中文模型生态。各平台的共同主题包括：Windows 平价差距、 MCP（Model Context Protocol）基础设施投资，以及针对长时间代理工作流的激进内存/上下文优化。

---
 
---

**Section 2: Activity Comparison**

I'll analyze the comparative data across different AI CLI tools, focusing on their recent release cycles and community engagement. The table reveals varied levels of development activity, with some platforms showing more frequent updates and community interactions than others. OpenAI Codex and Gemini CLI demonstrate particularly high release frequencies, while Claude Code and Copilot CLI maintain more conservative update patterns.

The data suggests nuanced development strategies, where some tools prioritize rapid iteration and community feedback, while others focus on stability and targeted improvements.

---

**Section 3: Shared Feature Directions**

The feature analysis highlights critical areas of convergence in AI command-line interface development. Security, memory management, and extensibility emerge as primary concerns across multiple platforms. 

MCP enhancements represent a key technical focus, with tools like Claude, OpenCode, Pi, and Qwen Code investing in robust authentication mechanisms and flexible server configurations. Windows compatibility remains a significant challenge, prompting cross-platform optimization efforts from major developers like Claude, Codex, Gemini, and Copilot.

Memory and context optimization strategies are becoming increasingly sophisticated, with platforms implementing advanced token reduction and bounded output techniques to improve overall system efficiency.

---

**Section 4: Differentiation Analysis**

我注意到不同工具在技术方法和目标用户方面展现出独特的策略。Claude Code 面向企业级开发团队，强调安全性和合规性，通过网关中心架构和 assume_role 技术实现精细的权限控制。OpenAI Codex 则专注于开发者生产力，通过 WebSocket 预热和 Guardian 上下文优化，为 VS Code 用户提供深度集成体验。

Google Gemini CLI 定位为前沿技术探索者，持续引入最新的 AI 模型能力，而 GitHub Copilot CLI 则紧密围绕 GitHub 生态系统，为 CLI 优先的开发者提供原生工作流支持。

OpenCode 面向自托管团队，Pi 针对高级用户和扩展作者，Qwen Code 则服务于开源开发者和中文市场，每个工具都有其独特的技术路径和目标用户群体。

---

**Section 5: Community Momentum & Maturity**

**Most Active (by volume):**

1. **OpenCode** — 20+ PRs in 24h, highest velocity; strong security focus
2. **OpenAI Codex** — 10 PRs + 5 discussions; Guardian modernization indicates architectural maturity
3. **Qwen Code** — 10 PRs + 2 releases; security patches (NTFS, Bash allow rules) show responsive maintenance
4. **Gemini CLI** — 4 releases in 24h; aggressive model integration cadence

**Moderate Activity:**

5. **Claude Code** — Steady flow; focus on quality over quantity (fewer but substantive PRs)
6. **Pi** — 10 PRs; extension API expansion indicates growing ecosystem
7. **Copilot CLI** — Lowest PR count (1); primarily issue-driven maintenance

**Maturity Indicators:**

- **Claude Code, OpenAI Codex**: Mature ecosystems with established issue/PR patterns; fewer releases demonstrate strategic, targeted improvements.

- **Gemini CLI, Qwen Code**: Dynamic development approach characterized by frequent nightly and preview releases, showing rapid iteration and continuous refinement.

- **OpenCode, Pi**: High-energy development with extensive pull requests, suggesting rapid feature expansion but potentially less stable interfaces.

---

**Section 6: Trend Signals**

**Industry Trends from Community Feedback:**

1. **MCP as Infrastructure Standard** — Unified approach emerging across AI tools, driving standardized tool discovery and authentication mechanisms.

2. **Security Becomes Essential** — Critical vulnerabilities exposed across platforms necessitate robust security frameworks and proactive threat mitigation.

3. **Windows Platform Dominance** — Persistent challenges on Windows platform highlight ongoing compatibility and integration complexities.

4. **Memory and Context Management Critical** — Fundamental technical hurdle requiring sophisticated optimization strategies across AI systems.

5. **Extension Ecosystem Expanding** — Diverse providers enabling dynamic model discovery and advanced prompt manipulation capabilities.

6. **Model Flexibility Imperative** — Developers rejecting vendor constraints, demanding adaptable and customizable AI solutions.

7. **Session Resilience Critical** — Emerging focus on robust session recovery and uninterrupted workflow maintenance.

**Strategic Selection Criteria:** Technical decision-makers should prioritize memory management, robust security infrastructure, and cross-platform Windows compatibility as core evaluation benchmarks.</think>

# 跨工具对比报告：AI CLI 生态系统

**日期：** 2026-09-24

---

## 1. 生态概览

AI CLI 工具领域正在快速成熟，六大主要平台正在争夺开发者的关注。从今天的摘要数据来看，各平台的战略定位差异明显：**Anthropic** 和 **OpenAI** 专注于企业级可靠性与安全加固，**Google** 推进前沿模型集成（Gemini 3.8/3.5 Flash Lite），而 **GitHub** 强调 GitHub 原生集成。**OpenCode** 和 **Pi** 面向自托管/自定义部署场景，**Qwen Code**（阿里巴巴）则锚定开源中文模型生态。各平台的共同主题包括：Windows 平价差距、MCP（Model Context Protocol）基础设施投资，以及针对长时间代理工作流的激进内存/上下文优化。

---

## 2. 活跃度对比

| 工具 | 发布（24h）| Issues（活跃）| PRs（24h）| 讨论（24h）|
|------|------------|----------------|------------|-------------|
| **Claude Code** | 1 | 30（显示前30） | 10+ | — |
| **OpenAI Codex** | 4 | 10（热门问题）| 10 | 5 |
| **Gemini CLI** | 4 | 10+ | 10 | 3 |
| **Copilot CLI** | 1 | 10 | 1 | — |
| **OpenCode** | 0 | 10+ | 20+ | — |
| **Pi** | 0 | 30 | 10 | 1 |
| **Qwen Code** | 2 | 10 | 10 | — |

*注：短横线（—）表示摘要中未提供数据，而非无活动。*

---

## 3. 共性功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **MCP 增强** | Claude、OpenCode、Pi、Qwen | 基于 OAuth 的 MCP 认证、远程 MCP 服务器、动态模型发现（自定义 provider） |
| **Windows 稳定性/平价** | Claude、Codex、Gemini、Copilot、Qwen | Shell 截断、sandbox 凭证处理、PATH 解析、WSL 集成 |
| **内存/上下文优化** | Claude、Codex、Gemini、Copilot、Pi、Qwen | 有界工具输出、压缩改进、AST 感知的文件读取、token 削减 |
| **安全加固** | Claude、Codex、OpenCode、Qwen | 凭证脱敏、权限绕过修复、不可信工作区隔离 |
| **扩展/插件 API** | Codex、Gemini、Pi | Provider 流事件、prompt 处置暴露、动态能力发现 |
| **会话持久化/恢复** | Claude、Codex、Gemini、Copilot | 子代理故障后恢复、模型恢复正确性、会话可发现性 |
| **模型灵活性** | Copilot、OpenCode、Pi、Qwen | 自定义端点、DeepSeek/OpenAI 兼容支持、推理级别控制 |

---

## 4. 差异化分析

| 工具 | 核心关注点 | 目标用户 | 技术路径 |
|------|------------|----------|----------|
| **Claude Code** | 企业级可靠性、策略驱动安全 | 需要合规的研发团队 | 网关中心架构、Bedrock assume_role |
| **OpenAI Codex** | 开发者生产力、IDE 集成 | VS Code/IDE 用户 | WebSocket 预热、Guardian 上下文重构、深度 VS Code 耦合 |
| **Gemini CLI** | Google AI 前沿模型集成 | Google 生态开发者 | 激进的模型更新（Gemini 3.8/3.5 Lite）、自适应分配提案 |
| **Copilot CLI** | GitHub 原生 CLI 工作流 | GitHub 用户、CLI 优先开发者 | 紧密 GitHub 集成、最小化配置 |
| **OpenCode** | 自托管/自定义部署 | 自托管团队 | 高 PR 速度（20+ 今天）、凭证安全重点 |
| **Pi** | 耐久性与可扩展性 | 高级用户、扩展作者 | 持久化测试基础设施、复杂扩展 API（prompt 处置、流事件） |
| **Qwen Code** | 中文模型生态、开源 | 开源开发者、中国市场 | Qwen CUA 驱动、NTFS 安全、会话提交跟踪 |

---

## 5. 社区活力与成熟度

**最活跃（按量）：**

1. **OpenCode** — 24h 内 20+ PRs，最高速度；安全重点突出
2. **OpenAI Codex** — 10 PRs + 5 讨论；Guardian 现代化表明架构成熟
3. **Qwen Code** — 10 PRs + 2 发布；安全补丁（NTFS、Bash allow rules）显示响应式维护
4. **Gemini CLI** — 24h 内 4 个发布；激进的模型集成节奏

**中等活跃：**

5. **Claude Code** — 稳定流入；质量优先于数量（PR 较少但实质）
6. **Pi** — 10 PRs；扩展 API 扩展表明生态成长
7. **Copilot CLI** — PR 数量最低（1）；主要是问题驱动维护

**成熟度指标：**

- **Claude Code、OpenAI Codex**：成熟的生态系统，issue/PR 模式稳定；发布较少但更有针对性
- **Gemini CLI、Qwen Code**：快速迭代；频繁的 nightly/preview 发布
- **OpenCode、Pi**：高 PR 速度表明活跃开发，但 API 可能不够稳定

---

## 6. 趋势信号

**社区反馈中的行业趋势：**

1. **MCP 成为基础设施标准** — 所有工具都在大力投资 MCP；预计将在 MCP 驱动的工具发现和认证上趋同

2. **安全成为必备条件** — 跨工具多起安全问题（凭证脱敏、权限绕过、sandbox 隔离）；现在已是主要评估标准

3. **Windows 是新战场** — 持续的 Windows 问题（shell 截断、sandbox 失败、NTFS 文件 ID、PATH 解析）表明微软平台平价仍是差异化因素

4. **内存/上下文管理是最大痛点** — 六个工具都有无界内存增长、压缩、token 优化的开放问题；这是最大的技术挑战

5. **扩展 API 正在扩展** — Pi、Codex、Gemini 都在添加 provider 流事件、prompt 处置、动态模型发现——标志着平台化可扩展性的走向

6. **模型灵活性需求** — 跨所有工具持续出现自定义端点、DeepSeek 支持、推理级别控制的需求；用户拒绝供应商锁定

7. **会话/状态恢复** — 子代理故障、恢复正确性、会话可发现性反复出现；生产就绪的顾虑

**决策价值：** 评估 AI CLI 工具的组织应将内存管理、安全态势和 Windows 稳定性作为主要评估标准——这些是所有生态系统的共同痛点。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report about Claude Code Skills Community into Chinese. Let me carefully follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - register of a Chinese developer newsletter, not literal word-for-word

Let me translate this carefully:

---

# Claude Code Skills 社区亮点报告

**数据来源：** github.com/anthropics/skills（截至 2026-09-24）
**分析范围：** 50 个 PR，50 个 Issue

---

## 1. Skills 排行榜

PR 数据显示大多数提交都几乎没有互动（0 条评论）。根据 Issue 活动（社区讨论的主要驱动力），最活跃的领域如下：

| # | Issue/PR | 关注领域 | 评论数 | 状态 |
|---|----------|------------|----------|--------|
| 1 | [#492](https://github.com/anthropics/skills/issues/492) | 安全：社区 skills 冒充官方 `anthropic/` 命名空间 | 43 | 开放 |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | 在 Claude.ai 中启用组织级 skill 共享 | 16 | 开放 |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` — 所有查询触发率为 0% | 12 | 开放 |


| 4 | [#1329](https://github.com/anthropics/skills/issues/1329) | 提案：`compact-memory` skill（代理状态的符号化表示） | 10 | 开放 |
| 5 | [#62](https://github.com/anthropics/skills/issues/62) | Skills 消失 + 报错 | 10 | 开放 |

**核心发现：**
- **安全 (#492)** 是最受关注的话题——社区对信任边界滥用问题高度关注，用户可以在 `anthropic/` 命名空间下创建看似官方的 skills
- **共享基础设施 (#228)** 是强烈需求——用户希望拥有组织级的 skill 库，而非手动文件分发
- **评估/触发 bug (#556)** 代表系统性问题，影响 skill 质量验证

社区正在从"创建 skills"转向"治理 skills"——安全、评估可靠性和企业级部署是主要关注点。安全与信任边界是首要任务，企业协作和评估基础设施紧随其后。

高潜力的待处理 skills 包括最近提交的 PR，展示了活跃的开发势头但尚未合并。

我注意到 PR #1771 引入了 ProofCore-Protocol 的 proofcore-contract-auditor，用于 Solidity/Rust 静态分析和 TON 区块链锚定。#1776 提供了 blast-radius skill，用于批量操作的检查清单。其他 PR 如 #1792、#1703 和 #1742 分别处理 LibreOffice 超时、Markdown 转 MP4 和 MCP v2.0.0 支持等修复。#723 引入了全面的测试栈，覆盖单元测试、React 和端到端测试。

更有可能快速合并的是 bug 修复和明确定义的工具类 skills。

社区最迫切的需求不是新技能类型，而是基础设施可靠性——安全的命名空间处理、可信的评估管道和企业级共享机制。技能创建生态是健康的，但信任机制存在问题。

Skills 的评估也不可靠，表现为触发率为零和指标失真。报告数据来自 github.com/anthropics/skills（2026-09-24）。</think>

# Claude Code Skills 社区亮点报告

**数据来源：** github.com/anthropics/skills（截至 2026-09-24）
**分析范围：** 50 个 PR，50 个 Issue

---

## 1. Skills 排行榜

PR 数据显示大多数提交几乎没有互动（0 条评论）。根据 Issue 活动（社区讨论的主要驱动力），最活跃的领域如下：

| # | Issue/PR | 关注领域 | 评论数 | 状态 |
|---|----------|------------|----------|--------|
| 1 | [#492](https://github.com/anthropics/skills/issues/492) | 安全：社区 skills 冒充官方 `anthropic/` 命名空间 | 43 | 开放 |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | 在 Claude.ai 中启用组织级 skill 共享 | 16 | 开放 |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) | `run_eval.py` — 所有查询触发率为 0% | 12 | 开放 |
| 4 | [#1329](https://github.com/anthropics/skills/issues/1329) | 提案：`compact-memory` skill（代理状态的符号化表示） | 10 | 开放 |
| 5 | [#62](https://github.com/anthropics/skills/issues/62) | Skills 消失 + 报错 | 10 | 开放 |

**核心发现：**
- **安全 (#492)** 是讨论焦点 — 社区高度关注信任边界滥用问题，社区 skills 借 `anthropic/` 命名空间冒充官方技能
- **共享基础设施 (#228)** 呼声很高 — 用户渴望组织级技能库，而非手动文件分发
- **评估/触发 bug (#556)** 是系统性工具问题，影响技能质量验证

---

## 2. 社区需求趋势

从 Issue 分析来看，最受期待的功能方向：

| 趋势 | 证据 | 优先级 |
|-------|----------|----------|
| **安全与信任边界** | #492（43 条评论），#1487（上下文耗尽） | 紧急 |
| **企业协作** | #228（组织级共享），#189（重复 skills） | 高 |
| **评估与测试基础设施** | #556（触发率），#1390（MCP 评估），#1298 PR | 高 |
| **Web3 / 智能合约 Skills** | #1771 PR（proofcore-contract-auditor） | 新兴 |
| **代理治理与安全** | #412 提案（agent-governance skill） | 新兴 |
| **Bedrock / 云端部署** | #29（AWS Bedrock 使用） | 潜在 |

**总结：** 社区正从「技能创建」转向「技能治理」阶段 — 安全、评估可靠性和企业级部署成为关注焦点。

---

## 3. 高潜力待处理 Skills

这些近期提交的 PR 显示出活跃的开发势头，但尚未合并：

| PR | 作者 | Skill | 关注点 |
|----|--------|-------|-------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | `proofcore-contract-auditor` | Solidity/Rust 静态分析 + TON 区块链锚定 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | kishormorol | `blast-radius` | 批量/破坏性操作检查清单（归档、撤销、删除） |
| [#1792](https://github.com/anthropics/skills/pull/1792) | TINGyu123644 | `docx` 修复 | LibreOffice 超时处理 + 输出验证 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | 70v-Yoyo | `md2video-audio` | Markdown → MP4 语音合成 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | `mcp-builder` 修复 | MCP v2.0.0 streamable_http_client 支持 |
| [#723](https://github.com/anthropics/skills/pull/723) | 4444J99 | `testing-patterns` | 全栈测试模式（单元、React、E2E） |

**即将合并：** Bug 修复（#1792、#1742）和边界清晰的工具类 skills（#1703、#1776）。

---

## 4. Skills 生态系统洞察

> **社区最集中的需求不是新的技能类型 — 而是基础设施可靠性：安全的命名空间处理、可信的评估管道，以及企业级共享机制。**

信号与噪声：
- 技能**创建**很健康（大量 PR 提交）
- 技能**信任**出了问题（安全问题、冒名顶替担忧）
- 技能**评估**不可靠（0% 触发率、虚假指标）

---

*报告数据来自 github.com/anthropics/skills（2026-09-24）*

---

<think>用户要求我将英文的Claude Code社区摘要翻译成中文。我需要：
1. 严格遵循翻译规则
2. 保留所有Markdown结构（标题、表格、列表、块引用等）
3. 保留所有URL、编号、代码等不翻译
4. 使用自然的技术中文风格

让我逐段翻译：

## 标题
Claude Code 社区摘要 — 2026-09-24

## 今日要点
v2.1.281 版本带来了重要的网关改进：支持新版 Claude Desktop 策略键（`blockReadsOutsideWorkingDirectories`、`disableBypassPermissionsMode`）以及 Bedrock 上游的 IAM 角色模拟。社区参与度依然很高，其中一个值得注意的错误报告（#87647）揭露了自 2026 年 3 月以来已有超过 6000 个"has repro"标签的问题被自动关闭——引发了关于问题生命周期管理的热烈讨论。

## 发布版本
**v2.1.281** — [查看发布](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

- 为 `desktop` 策略块新增了**新版 Claude Desktop 密钥的 Claude 应用网关支持**：
  - `blockReadsOutsideWorkingDirectories`
  - `disableBypassPermissionsMode`
- 为 Claude 应用网关 Bedrock 上游新增了 **`assume_role` 支持**：网关现可使用 IAM 角色调用 Bedrock
  
热门问题包括 VSCode 中遗留的锁定面板问题（影响日常多文件工作流）、用户钩子和托管设置被忽略导致沙箱平台不匹配、以及用户对禁用单个 Claude 插件技能的请求。超过 6000 个标记为"has repro"的问题被自动关闭，引发了对问题分类自动化的担忧。

## 关键 PR 进展

遥测行现在包含 `$.session.version()` 提供 `{ version, base?, builtAt? }`，便于外部遥测识别构建版本。安全指导方面修复了 #96276，防止安全审查提示暴露被权限阻止的文件。差异处理现在传递 `--no-color` 以避免用户配置 `color.ui=always` 或相关设置时导致的差异输出损坏。

agents-md 中自动分页的读取不再错误地计为已传递，解决了大 AGENTS.md 文件的分页问题。文档更新使 code-review README 与当前验证命令实现保持一致。

功能请求集中在几个方面：用户想要更精细的插件/技能控制、持久化会话设置、跨表面会话管理、桌面-VSCode 体验对等，以及权限系统强化。开发痛点包括 Windows 稳定性问题。

Hook/权限失败导致子代理工具调用中的安全绕过被忽视，MCP 因架构问题导致工具静默丢弃，模型在 /compact 或扩展会话后停止遵循 CLAUDE.md 规则，而问题分类自动化的受挫感导致有效 bug 被批量关闭。</think>

# Claude Code 社区摘要 — 2026-09-24

## 今日要点

v2.1.281 版本带来了重要的网关改进：支持新版 Claude Desktop 策略键（`blockReadsOutsideWorkingDirectories`、`disableBypassPermissionsMode`）以及 Bedrock 上游的 IAM 角色模拟。社区参与度依然很高，其中一个值得注意的 bug 报告（#87647）揭露了自 2026 年 3 月以来已有超过 6000 个"has repro"标签的问题被自动关闭——引发了关于问题生命周期管理的热烈讨论。

---

## 发布版本

**v2.1.281** — [查看发布](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

- 为 `desktop` 策略块新增了**新版 Claude Desktop 密钥的 Claude 应用网关支持**：
  - `blockReadsOutsideWorkingDirectories`
  - `disableBypassPermissionsMode`
- 为 Claude 应用网关 Bedrock 上游新增了 **`assume_role` 支持**：网关现可使用 IAM 角色调用 Bedrock

---

## 热门问题

| # | 问题 | 为何重要 | 👍 |
|---|------|----------|-----|
| **#20324** | **[BUG] Claude 在 VSCode 中遗留锁定面板** — 关闭状态，24 条评论。通过 VSCode/Cursor 扩展打开新标签页会创建锁定标签组，干扰多文件工作流。 | 影响 VSCode 用户管理多个 Claude Code 会话的日常工作效率。 | 19 |
| **#40495** | **Cowork 会话忽略用户钩子和托管设置** — 沙箱平台不匹配导致所有设置解析失败。 | 对依赖 cowork 协作的团队至关重要；安全设置可能被绕过。 | 22 |
| **#14920** | **添加禁用单个 Claude 插件技能的能力** — 用户希望精细控制插件命令（例如保留 `:commit` 但禁用 `commit-commands:commit-push-pr`）。 | 高需求（94 👍）；实现工作流定制。 | 94 |
| **#87647** | **自 2026 年 3 月起，超过 6k 个标注"has repro"的问题被自动关闭** — 社区标记有效 bug 报告被批量自动关闭的问题。 | 引发对问题分类自动化和丢失 bug 报告的担忧。 | 66 |
| **#77003** | **VS Code 扩展：显示模型、Ultracode/模式、effort 和使用量指示器** — 桌面应用功能对等请求。 | 桌面功能对等是反复出现的主题；用户希望在 VSCode 中一目了然地看到会话状态。 | 7 |
| **#72435** | **让 Ultracode / 默认"运行级别"可持久设置** — 当前仅限会话级别；用户希望持久化多 agent 编排默认值。 | 使团队能在会话间标准化多 agent 工作流。 | 2 |
| **#76726** | **子 agent 工具调用：PreToolUse 拒绝不会上报给父级** — 钩子执行中的静默安全绕过。 | 安全漏洞：子 agent 的权限拒绝静默失败。 | 0 |
| **#95512** | **从 TUI 复制的文本粘贴时多出换行符** — 复制的文本在发送消息中显示不正确。 | 影响 TUI 文本处理的 UX 回归。 | 4 |
| **#96326** | **尽管 CLAUDE.md 要求使用日语，但回复在阅读英语工具输出后切换为英语** — 模型在工具输出后停止遵循语言指令。 | 凸显指令跟随回归（#13689）。 | 0 |
| **#90421** | **Shell 快照在 Windows 上静默截断至约 7.2KB** — 每个 Bash 调用都以意外 EOF 失败。 | 破坏所有 shell 操作的严重 Windows bug。 | 0 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|------|
| **#96487** | **telemetry: 行携带引擎版本信息** — 遥测行现包含 `$.session.version()` 提供 `{ version, base?, builtAt? }`。改善外部遥测中的构建识别。 |
| **#96434** | **security-guidance: 将被拒绝/保密文件保持在审查者触及范围之外** — 修复 #96276。防止安全审查者提示暴露会话权限本应阻止的文件。 |
| **#96363** | **diff: 传递 --no-color** — 修复用户 git 配置中有 `color.ui=always` 或 `color.diff=always` 时差异输出损坏的问题。 |
| **#96364** | **agents-md: 自动分页的 Read 不再计为已传递** — 修复大 AGENTS.md 文件的分页读取错误触发"已传递"逻辑的问题。 |
| **#79150** | **docs: 对齐 code-review README** — 更新过时文档以匹配当前基于验证的命令实现。 |

---

## 功能请求趋势

跨问题的最热门方向：

1. **精细的插件/技能控制** — 用户希望禁用单个插件命令（#14920）
2. **持久化会话设置** — Ultracode/effort 级别持久化（#72435）和工作流默认值
3. **跨表面会话管理** — VSCode 会话对 MCP 会话工具不可见（#82313）
4. **桌面-VSCode 功能对等** — 状态指示器、与桌面应用一致的 UI 元素（#77003）
5. **权限系统加固** — 保护主 checkout 免受 agent 写入（#82322）、修复钩子执行（#76726）

---

## 开发者痛点

- **Windows 稳定性问题**：Shell 截断（#90421）、项目密钥按路径大小写拆分（#85344）、cowork Plan9 挂载失败（#95910）
- **Hook/权限失败**：子 agent 工具调用中的静默安全绕过（#76726）和 cowork 设置被忽略（#40495）
- **MCP 可靠性**：因 schema 问题导致工具静默丢弃（#95504、#88049）
- **指令漂移**：/compact（#95745）或长会话后模型停止遵循 CLAUDE.md（#96326、#13689）
- **问题分类挫败感**：有效"has repro"bug 被批量自动关闭（#87647）

---

*基于 GitHub 数据生成 — [anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English digest into Chinese, following the strict rules provided. Let me translate the content while:

1. Keeping all Markdown structure exactly the same (headings, tables, lists, etc.)
2. Keeping URLs, numbers, dates, issue/PR numbers, code references, file paths, version tags exactly as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble, explanation, or markdown fences
5. Preserving all formatting like bold, italic, tables, etc.

Let me go through and translate this carefully:

Title: "OpenAI Codex 社区动态" (OpenAI Codex Community Digest)
Date: Keep as is

Let me translate section by section:

**1. Today's Highlights** → 今日要闻

**2. Releases** → 版本发布

**3. Hot Issues** → 热门 issue

For the issues, I need to translate the descriptions but keep the issue numbers and URLs.

**4. Key PR Progress** → 关键 PR 进展

**5. Hot Discussions** → 热门讨论

**6. Feature Request Trends** → 功能需求趋势

**7. Developer Pain Points** → 开发者痛点

Let me do this translation now, making sure to preserve all formatting and technical terms.</think>

# OpenAI Codex 社区动态

**日期：** 2026-09-24

---

## 1. 今日要闻

Codex 团队发布了 **rust-v0.156.1**，在模型选择器中新增了 GPT-6 Sol 和 GPT-6 Luna，并更新了针对 Luna 的速率限制说明。Windows 桌面端问题占据了 issue 追踪器的主导地位，报告集中在消息发送失败、沙箱凭证问题和插件加载错误等方面。Guardian 上下文处理现代化正在大力推进中——今日合并了 6 个相关 PR，简化了线程上下文的捕获机制。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| [rust-v0.156.1](https://github.com/openai/codex/releases/tag/rust-v0.156.1) | 稳定版 | 在模型选择器中新增 GPT-6 Sol 和 GPT-6 Luna；速率限制提示现在推荐使用 GPT-6 Luna (#47405) |
| [rust-v0.158.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.6) | Alpha | 预发布测试 |
| [rust-v0.158.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.5) | Alpha | 预发布测试 |
| [rust-v0.157.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.11) | Alpha | 预发布测试 |

---

## 3. 热门 Issue

### Windows 桌面端消息发送故障（严重）
- **[#42215](https://github.com/openai/codex/issues/42215)** — Windows ChatGPT Work："无法使用此项目进行本地聊天" — 项目上下文同步在文件系统阶段反复失败 *(38 条评论)*  
  **问题影响：** 用户无法在现有 ChatGPT 项目中启动本地 Work 聊天——这是核心工作流程的阻断问题。自 9 月初以来持续受影响。

- **[#45626](https://github.com/openai/codex/issues/45626)** — 首轮对话完成后后续消息被禁用；现有会话无法发送消息 *(30 条评论, 👍5)*  
  **问题影响：** 对话在首次交互后变为只读状态。发送按钮保持禁用/灰色状态，导致会话无法继续使用。

- **[#46299](https://github.com/openai/codex/issues/46299)** — 首轮对话后后续消息无限期挂起 *(5 条评论, 👍2)*  
  **问题影响：** 加载动画持续运行但无错误提示。重新安装仅能临时修复。

### Windows 稳定性与沙箱
- **[#44342](https://github.com/openai/codex/issues/44342)** — 现有聊天被 loading-local-config / pending codex-home 阻塞 *(18 条评论, 👍6)*  
  **问题影响：** Work 会话启动时冻结；仅在重新加载主窗口后可临时恢复。

- **[#40231](https://github.com/openai/codex/issues/40231)** — app-server 在命令执行中途被 STATUS_CONTROL_C_EXIT (0xC000013A) 终止 *(13 条评论)*  
  **问题影响：** 桌面端 shell 在运行 agent 命令几分钟后崩溃；纯聊天会话不受影响。

- **[#35380](https://github.com/openai/codex/issues/35380)** — 工作区位于 \\wsl.localhost UNC 路径时 Windows 沙箱设置失败 *(7 条评论, 👍2)*  
  **问题影响：** WSL2 用户无法使用沙箱模式执行本地 shell 命令——这是常见的开发场景。

### 插件与扩展加载失败
- **[#46744](https://github.com/openai/codex/issues/46744)** — Windows Codex App 26.915.4065.0 无法加载 openai-bundled 插件；Browser、Computer Use、Image Gen 不可用 *(6 条评论)*  
  **问题影响：** 受影响用户完全无法使用核心功能。

- **[#42679](https://github.com/openai/codex/issues/42679)** — Browser Use 阻止本地文件 URL 访问，尽管已设置"始终允许" *(5 条评论, 👍4)*  
  **问题影响：** 用户即使明确批准后仍无法访问本地 file:// 链接。

### 配置与认证
- **[#47043](https://github.com/openai/codex/issues/47043)** — 桌面设置对 features.thread_tools 发出未识别警告 *(6 条评论, 👍4)*  
  **问题影响：** 虚假警告困扰用户；表明配置/模式存在不匹配。

---

## 4. 关键 PR 进展

| PR | 摘要 |
|----|---------|
| [#47701](https://github.com/openai/codex/pull/47701) | **WebSocket 预热** — 允许空闲线程预热并在下一轮前修复 WebSocket 连接 |
| [#47695](https://github.com/openai/codex/pull/47695) | **Windows 沙箱凭证** — 在配置期间修复被拒绝的 Windows 沙箱凭证 |
| [#47691](https://github.com/openai/codex/pull/47691) | **跨 Agent 持久化** — 为待处理的跨 Agent 消息实现部署持久化 |
| [#47686](https://github.com/openai/codex/pull/47686) | **Guardian 上下文** — 使线程拥有的 Guardian 上下文始终启用；弃用 `guardianv2.thread_context` 标志 |
| [#47689](https://github.com/openai/codex/pull/47689) | **Guardian 捕获** — 使 Guardian 线程上下文捕获变为无条件执行 |
| [#47690](https://github.com/openai/codex/pull/47690) | **移除废弃分支** — 删除过时的 Guardian 上下文捕获模式分支 |
| [#47688](https://github.com/openai/codex/pull/47688) | **授权清理** — 删除遗留的 Guardian 授权证据路径 |
| [#47679](https://github.com/openai/codex/pull/47679) | **扩展钩子** — 在扩展 API 中添加 `ModelRequestContributor` 和 `ModelResponseInterceptor` |
| [#47683](https://github.com/openai/codex/pull/47683) | **能力发现 V2** — 添加执行器能力发现 V2 基础设施 |
| [#47678](https://github.com/openai/codex/pull/47678) | **Mermaid 图表** — 在 Mermaid 流程图中支持引号标签和 & 符号 |

---

## 5. 热门讨论

### 需求建议
- **[#46658](https://github.com/openai/codex/discussions/46658)** — 超越 Auto 模式：学习分配模型、工具和子 Agent *(3 条评论, 👍2)*  
  提议将模型、推理强度、工具和子 Agent 的选择视为共享的自适应分配问题。

- **[#47058](https://github.com/openai/codex/discussions/47058)** — 使指令加载、能力和执行证据可见且可审计 *(1 条评论, 👍1)*  
  请求：指令加载报告、能力可见性以及工作执行审计跟踪作为标准产品保护措施。

- **[#47526](https://github.com/openai/codex/discussions/47526)** — 闪烁的标题"[ ! 需要操作 ]"不应改变其宽度 *(0 条评论, 👍1)*  
  闪烁的字符串导致 IDE 标签页水平跳动；请求使用固定长度的占位符。

### 展示分享
- **[#47231](https://github.com/openai/codex/discussions/47231)** — 移动端 Codex — 直接在 Android 上运行 Codex *(1 条评论, 👍1)*  
  社区开发的 Android 应用，将 Codex 引擎与移动端 UI 绑定，实现本地文件访问。

- **[#47434](https://github.com/openai/codex/discussions/47434)** — 可在 31 小时后恢复的 Codex 运行 *(0 条评论, 👍1)*  
  演示超过 31 小时的 Codex 任务在 Windows 重启后通过确定性工件状态恢复。

### 问答
- **[#40773](https://github.com/openai/codex/discussions/40773)** — 为什么 IntelliJ IDEA 终端中的用户输入区域这么暗？ *(1 条评论, 👍1)*  
  报告回归问题：终端输入区域从浅灰色变为深色 (v0.149.1)。

---

## 6. 功能需求趋势

1. **自适应模型/工具分配** — 用户希望 Codex 能够学习最优的模型、推理强度、工具和子 Agent 分配，而非手动选择
2. **可审计的执行** — 需求可见的指令加载报告、能力可见性以及确定性执行审计跟踪作为标准功能
3. **Windows 平台对等** — 多项请求实现与 macOS/Linux 功能集对齐的稳定 Windows 桌面体验
4. **增强的 Mermaid 支持** — 更丰富的图表渲染（引号标签、& 符号）
5. **可配置性** — 用户请求可选的完成时间戳和时钟格式控制 (#47676)

---

## 7. 开发者痛点

- **Windows 桌面端不稳定** — 评论最多的 issue 大多数是 Windows 特定问题：消息发送失败、沙箱凭证问题、插件加载崩溃和文件系统同步问题
- **后续消息发送中断** — 一个反复出现的模式：首条消息正常但后续消息失败或无限期挂起
- **沙箱故障阻断工作** — Windows 沙箱设置失败（尤其是 WSL2 路径）阻止任何本地命令执行
- **插件/扩展损坏** — Browser Use、Computer Use 和 Image Gen 因插件加载失败而不可用
- **配置污染** — 用户报告 `~/.codex/config.toml` 过大，因为它混合了用户设置和生成的运行时状态

---

*本期动态结束。数据来源：github.com/openai/codex，2026-09-24。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following specific rules about what to translate and what to preserve.

Let me go through the content:

1. The title "Gemini CLI Community Digest — 2026-09-24" should become "Gemini CLI 社区周报 — 2026-09-24" (Community Digest → 社区周报 or 社区摘要)

2. The "Today's Highlights" section - translate the English content into Chinese, keeping technical terms, version numbers, PR numbers etc.

3. Releases table - translate descriptions, keep version numbers, types

4. Hot Issues section - translate issue titles and descriptions, keep #numbers, comment counts

5. Key PR Progress table - translate descriptions, keep PR numbers

6. Feature Request Trends - translate

7. Developer Pain Points - translate

Let me do this carefully, preserving all formatting, URLs, code, numbers:

---

# Gemini CLI 社区周报 — 2026-09-24

## 今日要闻

过去 24 小时内，Gemini CLI 团队已发布多个版本，包括 **v0.61.0** 稳定版和 **v0.62.0-preview.0**，以及新的每日构建版本，新增 **Gemini 3.8 Flash** 和 **Gemini 3.5 Flash Lite** 模型支持。多个高优先级修复正在审核中，包括长时间运行 agent 的内存优化、IDE 集成改进，以及修复引号内 `@` 符号导致的严重 CPU 卡死问题。

---

## 版本发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v0.62.0-nightly.20260923** | 每日构建 | 新增 **Gemini 3.8 Flash** 和 **Gemini 3.5 Flash Lite** 模型支持 ([#29443](https://github.com/google-gemini/gemini-cli/pull/29443)) |


| **v0.62.0-preview.0** | 预览版 | 包含 A2A 服务器元数据端点修复 ([#29334](https://github.com/google-gemini/gemini-cli/pull/29334)) |
| **v0.61.0** | 稳定版 | 最新稳定版；完整更新日志已发布 |
| **v0.61.0-preview.1** | 补丁版 | 针对发布分支的 cherry-pick 修复 |

---

## 热门 issue

### 🔴 P1 — 严重 / 阻塞

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子 agent 在 MAX_TURNS 报告为 GOAL 成功后的恢复问题，导致中断被隐藏
   - *问题原因：* 子 agent 在达到轮次限制未完成分析时仍错误报告成功，误导用户对任务完成状态的判断
   - *反馈：* 13 条评论，2 👍

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通才 agent 无

限期挂起
   - *问题原因：* 需要调用通才 agent 的任何任务都会无限期卡死，即使只是创建文件夹这样简单的操作。临时解决方案是禁用子 agent 功能
   - *反馈：* 8 条评论，8 👍（社区关注度高）

3. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 浏览器子 agent 在 Wayland 环境下失败
   - *问题原因：* Wayland 显示服务器上的浏览器自动化功能完全不可用

4. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** — `get-shit-done` 输出钩子导致崩溃
   - *问题原因：* 最终输出生成时出现崩溃，破坏任务结束时的摘要信息

### 🟡 P2 — 重要

5. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 通过零依赖 OS 沙箱充分利用模型的 bash 亲和性
   - *问题原因：* 探索利用 Gemini 3 原生 POSIX 工具链能力同时保持安全性的重大架构方向
   - *反馈：* 9 条评论

6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知文件读取、搜索和映射的影响
   - *问题原因：* 研究 AST 基础工具是否能减少令牌膨胀并提高代码导航精度

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 对技能和子 agent 的利用不足
   - *问题原因：* 用户反映 Gemini 不会主动使用自定义技能和子 agent，必须明确指示，限制了自动化潜力

8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — 添加确定性脱敏并减少自动内存日志记录
   - *问题原因：* 安全问题——自动内存将转录发送给提取 agent；需要在包含到上下文之前进行确定性脱敏

9. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — 防止自动内存无限重试低信号会话
   - *问题原因：* 内存系统可能陷入低信号会话的无限重试循环

10. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — 浏览器 agent 忽略 `settings.json` 覆盖配置
    - *问题原因：* `maxTurns` 等配置选项被静默忽略，破坏了自定义 agent 配置

---

## 关键 PR 进展

| PR | 优先级 | 描述 |
|----|----------|-------------|
| **[#29451](https://github.com/google-gemini/gemini-cli/pull/29451)** | P1 | **限制工具输出大小并优化长时间运行 agent 循环的内存生命周期**——防止扩展工作流中的无限制内存增长 |
| **[#29468](https://github.com/google-gemini/gemini-cli/pull/29468)** | P1 | 显示连接恢复期间的重试进度指示器（修复 429/503 错误时"思考中..."界面卡住） |
| **[#29452](https://github.com/google-gemini/gemini-cli/pull/29452)** | P1 | 将工具确认与 IDE diff RPC 解耦——修复在 IDE 终端的确认提示上按 Enter 时 UI 冻结 |
| **[#29457](https://github.com/google-gemini/gemini-cli/pull/29457)** | P1 | 在 `read-many-files` 中用 glob 匹配替换模糊字符串匹配——修复关键上下文膨胀 bug，避免错误包含二进制资源 |
| **[#29466](https://github.com/google-gemini/gemini-cli/pull/29466)** | P1 | 防止不受信任的工作区静默覆盖 `settings.json`——防止关键数据丢失 |
| **[#29467](https://github.com/google-gemini/gemini-cli/pull/29467)** | P1 | 移除无效的 `diff.external` 覆盖——修复 Git 操作中的致命 `cannot spawn` 错误 |
| **[#29436](https://github.com/google-gemini/gemini-cli/pull/29436)** | P1 | 防止引号内 `@` 在 stdin 中导致 100% CPU 卡死（例如 `"@scope/pkg"` 导入） |
| **[#29450](https://github.com/google-gemini/gemini-cli/pull/29450)** | — | 实现 V1 到 V2 设置迁移以支持 A2A 服务器配置 |
| **[#29329](https://github.com/google-gemini/gemini-cli/pull/29329)** | P2 | 当管道stdin 超时丢失输入时发出警告——改进慢速 stdin 的反馈 |
| **[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)** | — | 修复文本截断期间的代理对分割——修复显示中的表情符号损坏 |

---

## 功能请求趋势

根据 issue 分析，社区最关注的是：

1. **Agent 可靠性与恢复** — 子 agent 挂起检测、优雅失败处理和准确状态报告
2. **内存与上下文优化** — AST 感知读取、令牌精简、精确提取
3. **安全加固** — 确定性脱敏、不受信任的工作区隔离、安全 Git 执行
4. **浏览器自动化** — Wayland 支持、会话锁定恢复、配置尊重
5. **技能/子 agent 发现** — 无需显式提示即可自动调用自定义技能

---

## 开发者痛点

- **Agent 挂起** 是最突出的问题——特别是通才 agent 和浏览器子 agent
- **配置被忽略**（settings.json、maxTurns）损害了用户控制权
- **长时间运行的会话容易导致内存溢出**，需要紧急处理
- **二进制资源被错误包含** 在上下文中，因为文件匹配逻辑不够精确
- **安全漏洞** 存在于不受信任的工作区行为和自动内存数据处理中

---

*数据来源于 GitHub — 2026-09-24*</think>

# Gemini CLI 社区周报 — 2026-09-24

## 今日要闻

过去 24 小时内，Gemini CLI 团队已发布多个版本，包括 **v0.61.0** 稳定版和 **v0.62.0-preview.0**，以及新的每日构建版本，新增 **Gemini 3.8 Flash** 和 **Gemini 3.5 Flash Lite** 模型支持。多个高优先级修复正在审核中，包括长时间运行 agent 的内存优化、IDE 集成改进，以及修复引号内 `@` 符号导致的严重 CPU 卡死问题。

---

## 版本发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v0.62.0-nightly.20260923** | 每日构建 | 新增 **Gemini 3.8 Flash** 和 **Gemini 3.5 Flash Lite** 模型支持 ([#29443](https://github.com/google-gemini/gemini-cli/pull/29443)) |
| **v0.62.0-preview.0** | 预览版 | 包含 A2A 服务器元数据端点修复 ([#29334](https://github.com/google-gemini/gemini-cli/pull/29334)) |
| **v0.61.0** | 稳定版 | 最新稳定版；完整更新日志已发布 |
| **v0.61.0-preview.1** | 补丁版 | 针对发布分支的 cherry-pick 修复 |

---

## 热门 Issue

### 🔴 P1 — 严重 / 阻塞

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子 agent 在 MAX_TURNS 报告为 GOAL 成功后的恢复问题，掩盖了中断
   - *问题所在：* 子 agent 在达到轮次限制而未完成分析时错误地报告成功，向用户掩盖了失败。
   - *反馈：* 13 条评论，2 👍

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通才 agent 无限期卡死
   - *问题所在：* 任何需要通才 agent 的任务都会无限卡死——即使是创建文件夹这样的简单操作。临时解决方法是禁用子 agent。
   - *反馈：* 8 条评论，8 👍（社区关注度高）

3. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 浏览器子 agent 在 Wayland 上失败
   - *问题所在：* Wayland 显示服务器上的浏览器自动化功能无法工作。

4. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** — `get-shit-done` 输出钩子导致崩溃
   - *问题所在：* 最终输出生成时发生崩溃，破坏了任务结束时的摘要信息。

### 🟡 P2 — 重要

5. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 通过零依赖 OS 沙箱利用模型的 bash 亲和性
   - *问题所在：* 利用 Gemini 3 原生 POSIX 工具链能力同时保持安全性的重大架构方向提案。
   - *反馈：* 9 条评论

6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知文件读取、搜索和映射的影响
   - *问题所在：* 研究 AST 工具是否能减少 token 膨胀并提高代码导航精度。

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 不够主动使用技能和子 agent
   - *问题所在：* 用户反映 Gemini 会忽略自定义技能和子 agent，除非明确指示，限制了自动化潜力。

8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — 添加确定性脱敏并减少自动内存日志记录
   - *问题所在：* 安全问题——自动内存将转录发送给提取 agent；在包含到上下文前需要确定性脱敏。

9. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — 防止自动内存无限重试低信号会话
   - *问题所在：* 内存系统可能在低信号会话上陷入无限重试循环。

10. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — 浏览器 Agent 忽略 `settings.json` 覆盖配置
    - *问题所在：* `maxTurns` 等配置选项被静默忽略，破坏了自定义 agent 配置。

---

## 关键 PR 进展

| PR | 优先级 | 描述 |
|----|----------|-------------|
| **[#29451](https://github.com/google-gemini/gemini-cli/pull/29451)** | P1 | **限制工具输出大小并优化长时间运行 agent 循环的内存生命周期**——防止扩展工作流中的无限制内存增长 |
| **[#29468](https://github.com/google-gemini/gemini-cli/pull/29468)** | P1 | 显示重试进度指示器（修复 429/503 错误时"Thinking..."界面卡住） |
| **[#29452](https://github.com/google-gemini/gemini-cli/pull/29452)** | P1 | 将工具确认与 IDE diff RPC 解耦——修复在 IDE 终端确认提示上按 Enter 时 UI 冻结 |
| **[#29457](https://github.com/google-gemini/gemini-cli/pull/29457)** | P1 | 在 `read-many-files` 中用 glob 匹配替换模糊匹配——修复关键上下文膨胀 bug，二进制资源被错误包含 |
| **[#29466](https://github.com/google-gemini/gemini-cli/pull/29466)** | P1 | 防止不受信任的工作区静默覆盖 `settings.json`——关键数据丢失修复 |
| **[#29467](https://github.com/google-gemini/gemini-cli/pull/29467)** | P1 | 移除无效的 `diff.external` 覆盖——修复 Git 操作中的 fatal `cannot spawn` 错误 |
| **[#29436](https://github.com/google-gemini/gemini-cli/pull/29436)** | P1 | 防止引号内 `@` 在 stdin 中导致 100% CPU 卡死（如 `"@scope/pkg"` 导入） |
| **[#29450](https://github.com/google-gemini/gemini-cli/pull/29450)** | — | 实现 V1 到 V2 设置迁移，支持 A2A 服务器配置 |
| **[#29329](https://github.com/google-gemini/gemini-cli/pull/29329)** | P2 | 管道 stdin 超时丢失输入时发出警告——改进慢速 stdin 反馈 |
| **[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)** | — | 修复截断期间的代理对分割——显示中表情符号不再损坏 |

---

## 功能请求趋势

根据 issue 分析，社区最关注的是：

1. **Agent 可靠性与恢复** — 子 agent 挂起检测、优雅失败处理和准确状态报告
2. **内存与上下文优化** — AST 感知读取、token 精简、精确提取
3. **安全加固** — 确定性脱敏、不受信任工作区隔离、安全 Git 执行
4. **浏览器自动化** — Wayland 支持、会话锁定恢复、配置尊重
5. **技能/子 agent 发现** — 无需显式提示即可自动调用自定义技能

---

## 开发者痛点

- **Agent 挂起** 是最突出的问题——特别是通才 agent 和浏览器子 agent
- **配置被忽略**（settings.json、maxTurns）损害了用户控制权
- **长时间运行会话的内存膨胀** 需要紧急处理
- **二进制资源被错误包含** 在上下文中，原因是文件匹配逻辑粗糙
- **安全漏洞** 围绕不受信任的工作区行为和自动内存数据处理

---

*Digest 源自 GitHub 数据 — 2026-09-24*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese. I need to:
1. Translate all the text content
2. Keep URLs, issue numbers, version tags, etc. as-is
3. Keep the Markdown structure exactly as-is
4. Use natural technical Chinese register

Let me go through each section:

1. Title and date - translate
2. Today's Highlights - translate
3. Releases - translate table headers and content
4. Hot Issues - translate table content
5. Key PR Progress - translate
6. Hot Discussions - translate
7. Feature Request Trends - translate
8. Developer Pain Points - translate

Let me do this translation now.</think>

# GitHub Copilot CLI 社区摘要

**日期：** 2026年9月24日

---

## 1. 今日要闻

GitHub Copilot CLI v1.0.89-1 推出了 GPT-6 Sol 和 Luna 模型支持，同时修复了一个关键的可用性问题——在空聊天输入中按 Up 键的行为。社区正在积极处理几个高影响力问题，特别是认证令牌刷新失败和内存存储操作，这些问题持续困扰着预发布版本。

---

## 2. 发布

**v1.0.89-1** (2026-09-23)

| 变更类型 | 描述 |
|------------|-------------|
| ✨ 新增 | 在模型选择器中添加了 GPT-6 Sol 和 GPT-6 Luna 模型（当可用时） |
| 🐛 修复 | View 工具现在在提供商发送扁平化的 `view_range` 参数时正确处理行范围 |
| 🐛 修复 | 在本地会话中，在空聊天输入上按 Up 键现在可以正确调出待处理消息，同时将排队的提示保留在队列中 |

---

## 3. 热门问题

| 问题 | 标题 | 评论数 | 为何重要 |
|-------|-------|----------|----------------|
| [#4535](https://github.com/github/copilot-cli/issues/4535) | v1.0.81 预发布版中 `store_memory` 失败：`需要实例 ID` | 10 | 内存持久化在预发布版中损坏；影响用户无法使用上下文记忆功能 |
| [#2995](https://github.com/github/copilot-cli/issues/2995) | 无法使用 DeepSeek API | 9 | 社区对 OpenAI 兼容提供商支持的需求；9 个 👍 表明强烈兴趣 |
| [#2421](https://github.com/github/copilot-cli/issues/2421) | HTTP/2 GOAWAY 竞态条件导致级联重试失败 | 8 | 静默浪费高级请求；19 个 👍 表明影响广泛 |
| [#4847](https://github.com/github/copilot-cli/issues/4847) | 自动 managed-settings 刷新破坏 IDE MCP 重新加载 | 4 | 在长时间运行的 VS Code 会话中破坏 `/allow-all` |
| [#4003](https://github.com/github/copilot-cli/issues/4003) | 在 Copilot CLI 中支持自定义模型端点 | 4 | 与 VS Code 功能对等；支持本地/私有模型使用 |
| [#4521](https://github.com/github/copilot-cli/issues/4521) | 无法禁用沙箱 | 4 | 配置不匹配导致沙箱在"禁用"后仍保持活动状态 |
| [#3331](https://github.com/github/copilot-cli/issues/3331) | CLI 启动时自动更新插件 | 4 | 团队需要自动插件更新；手动 `plugin update` 存在摩擦 |
| [#4844](https://github.com/github/copilot-cli/issues/4844) | `--yolo` 启动标志被预认证失败关闭策略吞没 | 4 | 启动时无法应用安全策略绕过 |
| [#4663](https://github.com/github/copilot-cli/issues/4663) | 失败的压缩重试次数每轮保持不变 | 3 | 无退避的无界计费重试；上下文单调增长 |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | 进程本地认证令牌停止刷新 | 3 | 所有提示失败直到重启；`/login` 无法恢复 |

---

## 4. PR 进展

| PR | 标题 | 状态 |
|----|-------|--------|
| [#4948](https://github.com/github/copilot-cli/pull/4948) | 更新 github-script action pin | 待审核 |

*注：过去 24 小时内仅更新了 1 个 PR。这是一个依赖维护 PR，将 `actions/github-script` 更新至 v9.0.0。*

---

## 5. 热门讨论

*本期未提供讨论数据。*

---

## 6. 功能请求趋势

以下主题从近期问题和功能请求中浮现：

| 类别 | 请求 |
|----------|----------|
| **模型灵活性** | 自定义模型端点支持 (#4003)、DeepSeek API 兼容性 (#2995)、更多提供商选项 |
| **插件生态** | 启动时自动更新插件 (#3331)、市场驱动的插件管理 |
| **权限管理** | 会话启动时自动授权 (#3877)、持久化 `/allow-all` 设置 |
| **UI/UX 改进** | 速率限制使用量可见性 (#2827)、会话选择器键盘快捷键 (#3779)、长时间运行的命令实时输出 (#2682)、可折叠的子代理面板 (#1783) |
| **安全** | `/security-review` 命令 (#1133) 用于自动化漏洞检测 |
| **终端集成** | 终端主题颜色尊重 (#4843)、键盘事件处理改进 (#4213) |

---

## 7. 开发者痛点

| 痛点 | 频率 | 影响 |
|------------|------------|--------|
| **认证失败** | 高 | 认证令牌刷新完全停止 (#4929)；不重启无法恢复 |
| **内存/上下文问题** | 高 | `store_memory` 失败 (#4535)；压缩重试无界 (#4663) |
| **网络可靠性** | 中 | HTTP/2 GOAWAY 竞态条件 (#2421) 导致静默请求失败 |
| **配置摩擦** | 中 | 沙箱无法禁用 (#4521)、`--config-dir` 不一致 (#2197)、日志级别导致崩溃 (#4297) |
| **MCP 集成** | 中 | OAuth 失败 (#4901)、managed-settings 刷新破坏 MCP (#4847)、策略获取失败时阻止本地 MCP (#4512) |
| **安装/更新** | 中 | 预发布版查找使用户滞留 (#4605)、语音模式 NuGet 认证失败 (#4814, #4667) |

---

*摘要结束。数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English digest into Chinese, following specific translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code references, issue/PR numbers verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the exact structure and formatting.</think>

# OpenCode 社区周报 — 2026年9月24日

## 今日热点

OpenCode 社区正面临一个广泛影响免费套餐用户的问题："OpenCode's free tier can only be used from within OpenCode"（免费套餐只能在 OpenCode 内部使用）错误已在多条重复报告中引发大量关注，评论数超过 54 条。与此同时，项目仍在积极开发中：并行插件加载改进、MCP OAuth 刷新序列化修复和凭证脱敏功能已合并。

---

## 版本发布

过去 24 小时内**无新版本**发布。

---

## 热门议题

| # | 议题 | 评论数 | 重要性 |
|---|------|--------|--------|
| [#49433](https://github.com/anomalyco/opencode/issues/49433) | **免费套餐使用错误** - "OpenCode's free tier can only be used from within OpenCode" | 54 | 严重阻塞问题，影响多个 v1.3.17 版本用户；疑似套餐验证回归 bug |
| [#988](https://github.com/anomalyco/opencode/issues/988) | **功能建议：MCP 远程使用 OAuth** | 41 | 高需求功能（122 👍）；通过 OAuth 2.1 流程简化 MCP 服务器安装 |
| [#45278](https://github.com/anomalyco/opencode/issues/45278) | 三个月后支付被拒绝 | 22 | 订阅/账单阻塞问题；用户报告卡片突然被拒，尽管支付方式有效 |
| [#50201](https://github.com/anomalyco/opencode/issues/50201) | 仪表板迁移后账户丢失 | 7 | 付费工作区迁移后不可用；Go 订阅和发票消失 |
| [#50258](https://github.com/anomalyco/opencode/issues/50258) | DeepSeek-V4.1-Flash 上游丢弃提示缓存 | 6 | 成本影响：约 50% 的计费使用是不必要的完整上下文重读 |
| [#43176](https://github.com/anomalyco/opencode/issues/43176) | Linux PRIMARY 选择（鼠标中键粘贴） | 5 | Linux 用户体验增强；当前仅 CLIPBOARD 选择有效 |
| [#45856](https://github.com/anomalyco/opencode/issues/45856) | v2 serve：Basic Auth 始终返回 401 | 4 | v2 serve 认证回归；阻止使用固定凭证 |
| [#51003](https://github.com/anomalyco/opencode/issues/51003) | MCP 全局 stdio 服务器耗尽内存 | 0 | 内存泄漏：每个加载的目录都会生成独立的 MCP 服务器副本 |
| [#51005](https://github.com/anomalyco/opencode/issues/51005) | RTL/双向文本支持 | 0 | 新功能请求：支持库尔德语、阿拉伯语、波斯语、希伯来语 |
| [#50915](https://github.com/anomalyco/opencode/issues/50915) | 调试配置中凭证脱敏 | 5 | 安全问题；API 密钥以明文形式暴露（PR #50956 已修复） |

---

## 关键 PR 进展

| # | PR | 状态 | 摘要 |
|---|-----|------|------|
| [#51004](https://github.com/anomalyco/opencode/pull/51004) | fix(cli): distinguish MCP servers in auth login | **已合并** | 登录时将 AI provider 与 MCP 服务器区分标记；MCP 服务器排在前面 |
| [#47391](https://github.com/anomalyco/opencode/pull/47391) | perf(plugin): parallel internal plugin loading | **已合并** | 并行化插件初始化以加快启动速度 |
| [#47392](https://github.com/anomalyco/opencode/pull/47392) | fix(lsp): idle TTL timeout and LRU eviction | **已合并** | 为 LSP 客户端添加空闲 TTL 和 LRU 驱逐策略，防止无限增长 |
| [#51001](https://github.com/anomalyco/opencode/pull/51001) | fix(app): start MCP sign-in from row click | **已合并** | 行点击现在可发起登录，而非仅切换开关 |
| [#50956](https://github.com/anomalyco/opencode/pull/50956) | fix(opencode): redact credentials in debug config | **已合并** | 脱敏所有凭证命名值、HTTP 头部和含凭证的 URL |
| [#50994](https://github.com/anomalyco/opencode/pull/50994) | fix(core): serialize MCP OAuth refreshes | **开放** | 防止多个进程同时刷新 OAuth 令牌时的竞态条件 |
| [#42660](https://github.com/anomalyco/opencode/pull/42660) | feat(provider): dynamic model discovery | **开放** | 为自定义 OpenAI 兼容 provider 启用动态模型发现 |
| [#50997](https://github.com/anomalyco/opencode/pull/50997) | fix(i18n): correct Catalan locale | **开放** | 完成加泰罗尼亚语翻译并添加 Console 支持 |
| [#51000](https://github.com/anomalyco/opencode/pull/51000) | feat(session-ui): show GitHub mark on Markdown links | **开放** | 在网页聊天的 GitHub 链接前显示主题色 GitHub favicon |
| [#51002](https://github.com/anomalyco/opencode/pull/51002) | feat(desktop): refresh platform icons | **开放** | 更新 macOS/Windows 图标，使用原生遮罩和材质效果 |

---

## 功能请求趋势

从议题分析来看，最Requested的增强功能集中在以下领域：

1. **MCP 增强** — OAuth 认证（#988）、自定义 provider 支持、远程 MCP 服务器安装
2. **平台/UX 改进** — Linux PRIMARY 选择（#43176）、RTL/双向文本支持（#51005）、v2 中的模型收藏（#50969）
3. **安全与凭证** — 调试输出中的凭证脱敏（已解决）、OAuth 令牌处理
4. **账单/账户** — 改进的订阅管理、仪表板迁移可靠性
5. **SDK 扩展性** — 将 agent/model/variant 选项绑定到排队提示（#48356）、多仓库变更跟踪（#45498）

---

## 开发者痛点

社区反复报告的问题集中在以下方面：

- **免费套餐验证错误**：用户被阻止使用免费套餐，没有明确的解决路径
- **支付/账单可靠性**：正常工作数月后突然支付被拒，迁移期间账户数据丢失
- **认证回归**：v2 serve 中 Basic Auth 失败，MCP OAuth 竞态条件
- **内存/资源问题**：MCP stdio 服务器按目录生成导致内存耗尽
- **TUI 不一致**：模型选择器消失，v2 中收藏开关损坏，markdown 渲染 bug
- **调试工作流风险**：调试期间凭证以明文暴露

---

*基于 GitHub 数据为 anomalyco/opencode 生成 — 2026年9月24日*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Simplified Chinese. I need to:

1. Translate all the content while keeping the Markdown structure exactly
2. Keep URLs, issue/PR numbers, code references, and technical terms as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me go through and translate:

**Title**: # Pi 社区摘要 — 2026-09-24

**Today's Highlights**: 今日热点

**Releases**: 发布

**Hot Issues**: 热门 Issue

**Key PR Progress**: 关键 PR 进展

**Hot Discussions**: 热门讨论

**Feature Request Trends**: 功能需求趋势

**Developer Pain Points**: 开发者痛点

Let me translate the full content now, being careful with:
- Technical terms (TUI, npm, SSH, etc.)
- Issue/PR numbers and links
- Emoji
- Tables and their structure
- Bold text
- Code spans
- Lists

I'll preserve the exact Markdown formatting including the horizontal rules, tables, etc.</think>

# Pi 社区摘要 — 2026-09-24

## 今日热点

Pi 社区在 Windows shell 解析、npm 包索引和扩展 API 改进方面有大量活动。一个值得注意的修复解决了 SSH 容器中的剪贴板复制失败问题，同时多个 PR 带来了 GPT-6 支持、TUI 性能优化和扩展的提供者流事件暴露。

---

## 发布

过去 24 小时内**无新版本**。

---

## 热门 Issue

| # | Issue | 重要性 | 👍 |
|---|-------|--------|---|
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm 搜索未索引新发布的 pi-packages** — 自 8 月 4 日起，具有正确清单的已发布包不会出现在 `npm search` 或 pi.dev 画廊中。这阻碍了新社区包的发现。 | 14 |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | **Windows: 扩展加载时 `shellPath` 被非确定性忽略** — 在 Windows 上，当扩展处于活动状态时，Bash 工具解析回退到 PATH，导致不可预测的 shell 选择。 | 10 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **大型对话记录每帧都重新渲染；1 核 CPU 饱和** — 完整对话记录在每次调整大小时重新发出，导致单核机器 CPU 100%。这是主要的 TUI 性能回归。 | 8 |
| [#5581](https://github.com/earendil-works/pi/issues/5581) | **带 `triggerTurn: true` 的自定义消息绕过 `before_agent_start` 事件** — 扩展编写的事件消息跳过生命周期钩子，破坏了依赖于代理前初始化的场景。 | 7 |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | **mistral-conversations: 空内容 delta 打开文本块 (GLM 5.x)** — 零长度 delta 创建空块，导致回放时出现空白问题和 400 错误。 | 6 |
| [#9098](https://github.com/earendil-works/pi/issues/9098) | **在 RPC 响应中暴露 prompt 处置方式** — 请求在响应中添加 `data.disposition: "handled" | "queued" | "started"`，以区分扩展消费的 prompt 和代理启动的 prompt。 | 5 |
| [#9506](https://github.com/earendil-works/pi/issues/9506) | **`models.json` samplingParams 在 openai-completions 工具调用轮次中被丢弃** — 工具能力请求忽略每个模型的采样配置，导致行为不一致。 | 3 |
| [#9757](https://github.com/earendil-works/pi/issues/9757) | **`parseChunkUsage` 丢弃 provider 特定的使用量字段** — 仅保留修复的 OpenAI 键；provider 特定的字段如 `upstream_inference_cost` 被静默丢弃。 | 3 |
| [#9886](https://github.com/earendil-works/pi/issues/9886) | **`clearQueue()` 静默销毁扩展投递的自定义消息** — 扩展排队的消息在未返回的情况下丢失，破坏了"编辑排队消息"模式。 | 3 |
| [#9887](https://github.com/earendil-works/pi/issues/9887) | **`read` 工具 TUI 渲染在行号为字符串时崩溃** — 某些 provider（如 xiaomi/mimo-v2.6-flash）的 offset/limit 使用字符串连接而非数值相加。 | 2 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **[进行中] 当响应包含时使用 provider 报告的成本** — 回退到目录费率；读取 Vercel AI Gateway 等 provider 的 `usage.cost` 和 `cost_details.upstream_inference_cost`。 |
| [#8398](https://github.com/earendil-works/pi/pull/8398) | **添加颜色值和主题样式** — 重构 TUI/主题以直接暴露颜色；支持代理样式和未来非终端 UI。 |
| [#9977](https://github.com/earendil-works/pi/pull/9977) **导出一致性测试套件** — 通过 `@earendil-works/pi-durable/testing` 暴露与 runner 无关的测试用例。 |
| [#9459](https://github.com/earendil-works/pi/pull/9459) | **恢复时优先使用记录的模型更改** — 修复会话恢复从回显的助手消息名称恢复错误模型的问题。 |
| [#9964](https://github.com/earendil-works/pi/pull/9964) | **使用 GPT-6 API 上下文限制** — 将 GPT-6 Astra/Sol/Luna 上下文设置为 1,050,000 token，保留 128K 输出。 |
| [#9948](https://github.com/earendil-works/pi/pull/9948) | **统一图像和分类器模型基础设施** — 支持聊天模型之外的模型类型。 |
| [#9901](https://github.com/earendil-works/pi/pull/9901) | **向扩展暴露 provider 流事件** — 添加 `onProviderStreamEvent`，向 coding-agent 扩展公开 `provider_stream_event`。 |
| [#9956](https://github.com/earendil-works/pi/pull/9956) | **在 prompt 预检之前按 Enter 绘制用户消息** — 通过乐观渲染修复 Enter→聊天气泡延迟。 |
| [#9941](https://github.com/earendil-works/pi/pull/9941) | **中止 unwind 期间的 steer 转为新 prompt** — 修复快速按 Escape 然后 Enter 时的 prompt 丢失问题。 |
| [#7937](https://github.com/earendil-works/pi/pull/7937) | **在响应式网格中渲染启动扩展** — 紧凑型扩展标签现在以对齐、宽度感知的网格渲染。 |

---

## 热门讨论

| # | 讨论 | 类别 | 评论 |
|---|------------|----------|----------|
| [#3373](https://github.com/earendil-works/pi/discussions/3373) | **您最喜欢与 Pi 代理一起使用哪些插件、附加组件或扩展？** | 展示与分享 | 19 |

---

## 功能需求趋势

1. **扩展 API 扩展** — 多项请求要求供应商特定的响应字段 (#9784)、provider 流事件 (#9901 已实现)，以及 prompt 处置方式暴露 (#9098)。
2. **Windows/Linux 一致性** — Shell 路径解析一致性 (#9361)，PATH 处理改进。
3. **TUI 性能** — 对话记录重新渲染修复 (#9549)，图像渲染优化。
4. **模型/provider 灵活性** — Ollama 推理级别 "max" 支持 (#9981)，GPT-6 限制，采样参数保留。
5. **包生态系统** — npm 包搜索索引 (#7885)，可选命名空间 (#8834 已实现)。
6. **开发者体验** — 配置模式发布 (#9880)，扩展重载延迟 (#7948)。

---

## 开发者痛点

- **npm 包发现失效** — 社区包作者自 8 月以来无法让新包被索引。
- **容器中剪贴板失败** — OSC 52 复制回归 (#9688) 破坏 SSH 容器工作流程。
- **内存问题** — 大型 Codex 响应时 SSE 解析器 OOM (#9036)。
- **模型恢复不一致** — 会话恢复选择错误模型；需要 model_change 跟踪。
- **HTTP 错误处理不透明** — API 失败时无法结构化访问 HTTP 状态码 (#5623)。
- **扩展消息生命周期** — 自定义消息绕过钩子 (#5581) 或在清除时静默丢失 (#9886)。

---

*基于 2026-09-24 的 GitHub 数据为 earendil-works/pi 生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese. Let me go through the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, project names, version tags, issue/PR references as-is
4. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully:

# Qwen Code 社区动态 — 2026-09-24

## 今日要闻

项目发布了 **v0.24.4-nightly.20260923**，修复了 deferred-tool bridge 中的关键问题，纠正了之前导致行为过时或未测试的缺陷。同时多个安全漏洞正在处理中——包括 Windows NTFS 文件 ID 处理（Issue #11848）、Bash allow rule 绕过（Issue #11764）和遥测数据脱敏（Issue #11198）。web-shell 包中存在无法解析的 `@/` 类型导入（Issue #12185），这是一个 P1 级别的打包回归问题，现已着手修复。

---

## 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v0.24.4-nightly.20260923.d0cd622a68** | 修复 core/docs：纠正 deferred-tool bridge 导致的过时或未测试行为（PR #12355） |
| **cua-driver-rs v0.20.11** | 更新 Qwen CUA Driver 预编译二进制文件（macOS: codesigned + notarized universal；Linux: unsigned x86_64+arm64；Windows: unsigned UIAccess worker + native SDK） |

---

## 热门 Issue

### 1. [#12185](https://github.com/QwenLM/qwen-code/issues/12185) — web-shell: 发布的包包含无法解析的 `@/` 类型导入


**优先级: P1 | 分类: bug | 范围: packaging, build-system, web-shell**
新发布的 `@qwen-code/web-shell` 包包含无法解析的 `@/` 类型导入，且内联了六个声明的运行时依赖，直接影响 npm 消费者使用。

### 2. [#11198](https://github.com/QwenLM/qwen-code/issues/11198) — 使用统计遥测上传未经脱敏的原始 tool-error 文本
**优先级: P1 | 分类: security | 范围: shell, data-privacy, credential-security**
默认启用的使用统计通道将包含敏感信息的错误数据上传到 RUM 端点，存在数据泄露风险。

### 3. [#11764](https://github.com/QwenLM/qwen-code/issues/11764) — 安全问题：Bash allow rule 在单引号内第一个命令以反斜杠结尾时授权第二个命令
**优先级: P2 | 分类: security | 范围: shell, vulnerability**
保存的 `Bash(...)` 允许规则会在第一个命令以反斜杠结尾时错误地授权不相关的第二个命令执行。

### 4. [#12061](https://github.com QwenLM/qwen-code/issues/12061) — CLI 回调标识变更可能导致活动工具调度器被替换
**优先级: P2 | 分类: bug | 范围: interactive, cli**
`useReactToolScheduler` 在回调标识变更时会重新创建 `CoreToolScheduler`，这可能替换掉持有活动批处理任务的调度器。

### 5. [#11848](https://github.com/QwenLM/qwen-code/issues/11848) — 64 位 NTFS 文件 ID 导致 `isSameFile` 在 Windows 上开放失败
**优先级: P2 | 分类: security | 范围: file-operations, Windows**
两个标识符比较器在具有 64 位文件 ID 的卷上降级为较弱的检查，因为它们使用 `{ bigint: true }` 进行 stat 操作时存在问题。

### 6. [#12496](https://github.com/QwenLM/qwen-code/issues/12496) — MCP 客户端将仅工具服务器标记为断开连接（-32601 被视为传输错误）
**优先级: P2 | 分类: bug | 范围: MCP**
MCP 客户端将 -32601 响应（对 prompts/list / resources/list 的查询）视为传输错误，错误地将仅工具服务器标记为断开连接。

### 7. [#12514](https://github.com/QwenLM/qwen-code/issues/12514) — 会话提交注册未覆盖所有路径或拼写
**优先级: P2 | 分类: security | 范围: shell, git, core**
会话提交流程未能完整验证所有路径变体和拼写方式，导致虚假的"非代理操作"阻止。

### 8. [#12270](https://github.com/QwenLM/qwen-code/issues/12270) — Windows lane 自 #12067 以来一直失败：bwrap 执行套件在 win32 上运行
**优先级: P2 | 分类: bug | 范围: sandbox, Windows, testing**
新增的 bwrap 执行套件在 Windows 上崩溃并抛出 'Sandbox assets are missing' 错误，使 nightly 的 Windows 分支保持失败状态。

### 9. [#12578](https://github.com/QwenLM/qwen-code/issues/12578) — save-artifact 的 isSameFile 覆写保护缺少硬链接见证
**优先级: P2 | 分类: enhancement | 范围: file-operations, testing**
#11848 的后续：覆写保护缺少针对三个输入路径的硬链接见证测试。

### 10. [#12579](https://github.com/QwenLM/qwen-code/issues/12579) — 代理重新调查已在对话历史中的内容
**优先级: P3 | 分类: feature-request | 范围: token-management, memory**
当用户询问已讨论过的事项时，代理不是从历史记录中读取而是重新调查，这对本地 LLM 造成浪费。

---

## 关键 PR 进展

| PR | 描述 |
|----|------|
| [#12539](https://github.com/QwenLM/qwen-code/pull/12539) | **fix(core): 保持 deferred-tool bridge 两端使用相同的工具** — 解决 #10410 的两个审查问题 |
| [#12556](https://github.com/QwenLM/qwen-code/pull/12556) | **fix(core): 覆盖会话提交注册中的每种提交拼写和提升路径** — 弥合 #12514 中的缺口 |
| [#12581](https://github.com/QwenLM/qwen-code/pull/12581) | **fix(review): 在 save-artifact 覆写保护中添加硬链接见证测试** — 为硬链接场景添加 3 行测试 |
| [#12258](https://github.com/QwenLM/qwen-code/pull/12258) | **fix(mcp): 支持更大的应用、作用域工具调用和隔离来源** — 显著的 MCP 改进 |
| [#12549](https://github.com/QwenLM/qwen-code/pull/12549) | **fix(core): 标记每个重新附加的图像以防止旧图像被误读为当前** — 防止过

期图像混淆 |
| [#12531](https://github.com/QwenLM/qwen-code/pull/12531) | **fix(core): 防止 MCP 服务器规则授权冲突服务器** — 模式比较不再使用有损清理 |
| [#12540](https://github.com/QwenLM/qwen-code/pull/12540) | **fix(cli): 关闭延迟的 /context accounting 跟进** — 处理 #12119 推迟的建议 |
| [#10954](https://github.com/QwenLM/qwen-code/pull/10954) | **feat(serve): 公开主管正在运行的背景代理** — 新增 `GET /background-agents` 端点 |
| [#12358](https://github.com/QwenLM/qwen-code/pull/12358) | **feat(managed-agent): 添加独立托管代理堆栈** — 端到端托管代理架构预览 |
| [#12552](https://github.com/QwenLM/qwen-code/pull/12552) | **feat(sdk-java): 仅在认证后采用托管运行时** — 在将租约记录为就绪前进行认证 |

---

## 功能需求趋势

基于 issue 和 PR 分析，最热门的方向包括：

1. **Token/上下文优化** — 减少冗余调查（#12579）、动态绑定 eager 工具表面（#12326）、缩短代理函数描述（#12272）
2. **会话可发现性** — 绑定会话列表中缺失的控制器会话（#12576）、在对话中搜索（#12231）
3. **平台分发** — 退出 Desktop 自动更新检查（#12575）、Qwen Live 统一 Web Shell 端点（#12530）
4. **内存/钩子** — 第三方通知托管内存变化（#12558, #12561）
5. **模型/推理控制** — 会话创建时选择（#12308）、子代理的每模型并发上限（#12461）

---

## 开发者痛点

- **web-shell 打包安全回归** — 直接影响 npm 消费者的 P1 问题
- **Windows 测试失败** — 多项问题：NTFS 文件 ID、bwrap 执行套件、ECS runner 队列过期
- **MCP 客户端可靠性** — 仅工具服务器被错误标记为断开；服务器规则授权冲突
- **deferred-tool bridge 不一致** — 架构指纹和隐藏工具调用问题需要多 PR 修复
- **CI/CD 不稳定** — 审查运行器 ESM 加载问题、ECS 队列更新失败
- **UI/UX 缺口** — 长时间代理轮次期间排队消息指示器消失；会话可发现性差距

---

*来自 GitHub 数据 — github.com/QwenLM/qwen-code*</think>

# Qwen Code 社区动态 — 2026-09-24

## 今日要闻

项目发布了 **v0.24.4-nightly.20260923**，修复了 deferred-tool bridge 中的关键问题，纠正了之前导致行为过时或未测试的缺陷。同时多个安全漏洞正在处理中——包括 Windows NTFS 文件 ID 处理（Issue #11848）、Bash allow rule 绕过（Issue #11764）和遥测数据脱敏（Issue #11198）。web-shell 包中存在无法解析的 `@/` 类型导入（Issue #12185），这是一个 P1 级别的打包回归问题，现已着手修复。

---

## 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v0.24.4-nightly.20260923.d0cd622a68** | 修复 core/docs：纠正 deferred-tool bridge 导致的过时或未测试行为（PR #12355） |
| **cua-driver-rs v0.20.11** | 更新 Qwen CUA Driver 预编译二进制文件（macOS: codesigned + notarized universal；Linux: unsigned x86_64+arm64；Windows: unsigned UIAccess worker + native SDK） |

---

## 热门 Issue

### 1. [#12185](https://github.com/QwenLM/qwen-code/issues/12185) — web-shell: 发布的包包含无法解析的 `@/` 类型导入

**优先级: P1 | 分类: bug | 范围: packaging, build-system, web-shell**

新发布的 `@qwen-code/web-shell` 包包含无法解析的 `@/` 类型导入，且内联了六个声明的运行时依赖，直接影响 npm 消费者使用。

### 2. [#11198](https://github.com/QwenLM/qwen-code/issues/11198) — 使用统计遥测上传未经脱敏的原始 tool-error 文本

**优先级: P1 | 分类: security | 范围: shell, data-privacy, credential-security**

默认开启的使用统计通道会将原始 tool-error 文本（包括 shell 命令行）上传至 RUM 端点，且未进行任何脱敏处理——自 `main` 分支一直存在。

### 3. [#11764](https://github.com/QwenLM/qwen-code/issues/11764) — 安全问题：Bash allow rule 在单引号内第一个命令以反斜杠结尾时授权第二个命令

**优先级: P2 | 分类: security | 范围: shell, vulnerability**

保存的 `Bash(...)` allow rule 会在第一个命令以反斜杠结尾于单引号内时，授权执行一个不相关的第二个命令。该额外命令将无确认直接运行。

### 4. [#12061](https://github.com/QwenLM/qwen-code/issues/12061) — CLI 回调标识变更可能替换活动中的 tool scheduler

**优先级: P2 | 分类: bug | 范围: interactive, cli**

`useReactToolScheduler` 在回调标识变更时会重新创建其 `CoreToolScheduler`，可能替换掉拥有活动批处理任务的 scheduler。

### 5. [#11848](https://github.com/QwenLM/qwen-code/issues/11848) — 64 位 NTFS 文件 ID 导致 `isSameFile` 在 Windows 上 fail open

**优先级: P2 | 分类: security | 范围: file-operations, Windows**

两个标识比较器在具有 64 位文件 ID 的卷上会降级为更弱的检查，因为它们 stat 时未使用 `{ bigint: true }`。

### 6. [#12496](https://github.com/QwenLM/qwen-code/issues/12496) — MCP 客户端将仅工具服务器标记为断开连接（-32601 视为传输错误）

**优先级: P2 | 分类: bug | 范围: MCP**

MCP 客户端将 -32601 响应（对 prompts/list / resources/list 的查询）视为传输错误，错误地将仅工具服务器标记为断开连接。

### 7. [#12514](https://github.com/QwenLM/qwen-code/issues/12514) — 会话提交注册未覆盖每种路径拼写

**优先级: P2 | 分类: security | 范围: shell, git, core**

会话提交注册未覆盖可生成提交的每种路径拼写，导致虚假的 "not made by the agent" amend 拦截。

### 8. [#12270](https://github.com/QwenLM/qwen-code/issues/12270) — Windows lane 自 #12067 以来变红：bwrap 执行套件在 win32 上运行

**优先级: P2 | 分类: bug | 范围: sandbox, Windows, testing**

新增的 bwrap 执行套件在 Windows 上失败，抛出 'Sandbox assets are missing' 错误，导致 nightly 的 Windows 分支持续变红。

### 9. [#12578](https://github.com/QwenLM/qwen-code/issues/12578) — save-artifact 的 isSameFile 覆写保护缺少硬链接见证

**优先级: P2 | 分类: enhancement | 范围: file-operations, testing**

#11848 的后续：覆写保护对三个输入路径缺少硬链接见证测试。

### 10. [#12579](https://github.com/QwenLM/qwen-code/issues/12579) — Agent 重新调查已在对话历史中的内容

**优先级: P3 | 分类: feature-request | 范围: token-management, memory**

用户询问已讨论过的事项时，agent 不是从历史回答而是重新调查——对本地 LLM 尤其浪费 token。

---

## 关键 PR 进展

| PR | 描述 |
|----|------|
| [#12539](https://github.com/QwenLM/qwen-code/pull/12539) | **fix(core): 保持 deferred-tool bridge 两端使用相同工具** — 解决 #10410 的两个审查发现 |
| [#12556](https://github.com/QwenLM/qwen-code/pull/12556) | **fix(core): 覆盖会话提交注册中的每种提交拼写和提升路径** — 弥合 #12514 的缺口 |
| [#12581](https://github.com/QwenLM/qwen-code/pull/12581) | **fix(review): 在 save-artifact 覆写保护中添加硬链接见证测试** — 为硬链接场景添加 3 行测试 |
| [#12258](https://github.com/QwenLM/qwen-code/pull/12258) | **fix(mcp): 支持更大 Apps、作用域工具调用和隔离来源** — 显著的 MCP 改进 |
| [#12549](https://github.com/QwenLM/qwen-code/pull/12549) | **fix(core): 标记每个重新附加的图像以防止旧图像被误读为当前** — 防止过期图像混淆 |
| [#12531](https://github.com/QwenLM/qwen-code/pull/12531) | **fix(core): 阻止 MCP 服务器规则授权冲突服务器** — 模式比较不再使用有损清理 |
| [#12540](https://github.com/QwenLM/qwen-code/pull/12540) | **fix(cli): 关闭延期的 /context accounting 跟进** — 处理 #12119 延后的建议 |
| [#10954](https://github.com/QwenLM/qwen-code/pull/10954) | **feat(serve): 公开 supervisor 正在运行的 background agents** — 新增 `GET /background-agents` 端点 |
| [#12358](https://github.com/QwenLM/qwen-code/pull/12358) | **feat(managed-agent): 添加独立托管代理栈** — 端到端托管代理架构预览 |
| [#12552](https://github.com/QwenLM/qwen-code/pull/12552) | **feat(sdk-java): 仅在认证后采用托管运行时** — 在将租约记录为就绪前进行认证 |

---

## 功能需求趋势

基于 issue 和 PR 分析，最热门的需求方向是：

1. **Token/上下文优化** — 减少冗余调查（#12579）、动态绑定 eager 工具表面（#12326）、缩短 agent 函数描述（#12272）
2. **会话可发现性** — 修复会话列表中缺失的控制器会话（#12576）、在对话中搜索（#12231）
3. **平台分发** — 退出 Desktop 自动更新检查（#12575）、Qwen Live 统一 Web Shell 端点（#12530）
4. **内存/钩子** — 托管内存变更时第三方通知（#12558, #12561）
5. **模型/推理控制** — 会话创建时选择（#12308）、子代理的每模型并发上限（#12461）

---

## 开发者痛点

- **web-shell 打包安全回归** — P1 issue，直接影响 npm 消费者
- **Windows 测试失败** — 多项问题：NTFS 文件 ID、bwrap 执行套件、ECS runner fleet 过时
- **MCP 客户端可靠性** — 仅工具服务器被错误标记为断开；服务器规则授权冲突
- **deferred-tool bridge 不一致** — schema 指纹和隐藏工具调用问题，需要多 PR 修复
- **CI/CD 不稳定** — 审查 runner ESM 加载问题，ECS fleet 更新失败
- **UI/UX 缺口** — 长时间 agent 轮次期间排队消息指示器消失；会话可发现性差距

---

*来自 GitHub 数据 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*