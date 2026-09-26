# AI CLI 工具社区动态日报 2026-09-26

> 生成时间: 2026-09-26 00:49 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this English report about AI CLI tools into Chinese. Let me follow the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code blocks, etc. verbatim
4. Keep project names, repository slugs, version tags in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully, maintaining the table structure and formatting exactly as-is.

Key terms to translate:
- Cross-Tool Comparison -> 跨工具对比
- AI CLI Developer Tools Landscape -> AI CLI 开发工具全景
- Ecosystem Overview -> 生态概览
- Activity Comparison -> 活动对比
- Shared Feature Directions -> 共同功能方向
- Differentiation Analysis -> 差异化分析
- Community Momentum & Maturity -> 社区活力与成熟度
- Trend Signals -> 趋势信号
- Enterprise -> 企业级
- Mods (keep as is - it's a proper noun)
- Managed Agent (keep as is)
- Subagent -> 子代理
- Authentication -> 认证
- TUI -> TUI (keep as is, common term)
- Issues -> Issues (keep)
- PRs -> PRs (keep)
- Discussions -> Discussions (keep)
- Release Cadence -> 发布节奏
- Pricing -> 定价 (but keep "pricing" in context of Pi's feature)

Let me translate the tables carefully:

The main table headers:
- Tool -> 工具
- Issues (Open/Visible) -> Issues（开放/可见）
- PRs (Last 24h) -> PRs（过去24小时）
- Discussions -> Discussions
- Releases (Last 24h) -> Releases（过去24小时）

The second table:


I'll focus on translating the feature direction columns, maintaining the technical precision and original format. The table tracks various feature requests across different tools, highlighting their specific needs and collaborative potential. Each row represents a unique feature request, showing which tools are requesting it and their specific implementation requirements.

The third table captures the primary focus of each tool, identifying target users and their technical approach. This provides a comprehensive view of the tool ecosystem, showing how different tools differentiate themselves in the market.

The fourth table reveals community activity and development speed, indicating the maturity of each tool through metrics like PR volume, release cadence, and iteration speed. This offers insights into the ongoing development and community engagement for each tool.</think>

# 跨工具对比：AI CLI 开发工具全景

## 生态概览

2026 年底的 AI CLI 工具领域呈现出成熟但竞争激烈的态势。主要提供商（Anthropic、OpenAI、Google、GitHub）凭借企业级产品占据主导地位，而开源替代方案（OpenCode、Pi、Qwen Code）则在可扩展性和自托管方面推动创新。所有工具的共同主题包括：认证可靠性、多代理协调、模型灵活性以及跨平台一致性。"托管代理"（Managed Agent）架构和可扩展性框架（如 Claude 的 Mods、Qwen 的双轨架构）的出现，标志着向更深度 IDE 集成和团队协作工作流的转变。

---

## 活动对比

| 工具 | Issues（可见） | PRs（过去24小时） | Discussions | Releases（过去24小时） |
|------|----------------------|----------------|-------------|---------------------|
| **Claude Code** | 50 | 6 | N/A* | 1（v2.1.283）|
| **OpenAI Codex** | 50 | 50 | 9 | 4（v0.157.0 + alphas）|
| **Gemini CLI** | ~50 | ~50 | N/A* | 1（v0.62.0-nightly）|
| **Copilot CLI** | 50 | 0 | 0 | 1（v1.0.89-4）|
| **OpenCode** | 50 | 50 | N/A* | 0 |
| **Pi** | 50 | 13 | N/A* | 0 |
| **Qwen Code** | 44 | 50 | N/A* | 2（v0.24.6 + nightly）|

*标记为"N/A"的工具主要使用 Issues 作为社区沟通渠道； Discussions 存在但并非唯一沟通方式。

**关键观察：**
- **最高活跃度**：OpenAI Codex 和 Qwen Code 的 PR 数量领先（各 50 个），表明迭代速度极快。
- **发布节奏**：OpenAI（4 个发布）、Qwen（2 个）、Claude（1 个）均在 24 小时内完成了发布。
- **Copilot CLI** 虽无 PR 但有发布——表明采用的是更稳定的发布节奏，而非持续活跃的开发状态。
- **Discussions**：仅有 Codex 活跃使用（9 个主题）；其他工具主要依赖 Issues。

---

## 共同功能方向

| 功能方向 | 需求的工具 | 具体需求 |
|-------------------|---------------------|----------------|
| **多账户/多提供商支持** | Claude Code、Copilot CLI | 同一连接器（如 GitHub）下的不同账户；支持多个组织的企业计划 |
| **子代理/多代理协调** | Claude Code、Gemini CLI、Qwen Code、Pi | 后台任务恢复、重复工作预防、协调间隙 |
| **可扩展性/插件 API** | Claude Code（Mods）、Qwen Code（托管代理）、OpenCode | 钩子、自定义工具、声明式配置 |
| **模型灵活性/自定义提供商** | 所有工具 | 自定义 OpenAI 兼容端点、本地模型、提供商特定适配 |
| **认证可靠性** | 所有工具 | OAuth 令牌刷新、无头/WSL/Windows 处理、凭证持久化 |
| **跨平台一致性** | Claude Code、Gemini CLI、Copilot CLI、Qwen Code | 跨 Windows/macOS/Linux 的 TUI、权限、行为一致 |
| **TUI/交互体验改进** | Gemini CLI、OpenCode、Pi | 思考层级控制、滚动行为、鼠标追踪、颜色模式 |

---

## 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------------|--------------|-------------------|
| **Claude Code** | 通过 Mods 实现企业级扩展，支持 LLM 网关提示头 | 使用自定义 LLM 基础设施的企业开发者、团队 | 声明式钩子系统、安全优先设计 |
| **OpenAI Codex** | 深度 VS Code/终端集成，与 ChatGPT 认证 | 需要 IDE 集成编码的 Pro/Plus 订阅用户 | Rust 构建、WebSocket 流式传输、紧耦合 OpenAI |
| **Gemini CLI** | 代理行为、文件操作安全、AST 感知工具 | 希望获得 AI 辅助探索的开发者 | 子代理架构、可序列化文件操作 |
| **Copilot CLI** | 模型切换、插件市场 | 希望获得 CLI AI 辅助的 GitHub 用户 | 轻量级、npm 分发 |
| **OpenCode** | 提供商多样性、自定义模型支持 | 使用多个 LLM 提供商的开发者 | 多提供商抽象、MCP 集成 |
| **Pi** | 定价准确性、推理/思考控制、压缩 | 价格敏感用户、推理模型爱好者 | 思考显示控制、成本追踪 |
| **Qwen Code** | 托管代理架构、桌面中继、持久化会话 | 需要多代理编排的团队、企业部署 | 双轨架构、工作区绑定、持久化日志 |

---

## 社区活力与成熟度

| 工具 | 社区活跃度 | 迭代速度 | 成熟度信号 |
|------|-------------------|------------------|------------------|
| **OpenAI Codex** | 最高（50 PRs，9 discussions）| 极快（4 个发布）| 活跃开发，但认证回退表明快速迭代的代价 |
| **Qwen Code** | 高（50 PRs）| 快（2 个发布）| 托管代理提案显示架构成熟度 |
| **Claude Code** | 中等（6 PRs，1 发布）| 稳定 | 企业稳定性优先；多账户需求获 390+ 👍 表明市场需求 |
| **Gemini CLI** | 中等 | 快 | 功能丰富但子代理 bug 表明复杂性挑战 |
| **OpenCode** | PR 量大 | 无近期发布 | 活跃修复 bug；社区驱动 |
| **Pi** | 中等（13 PRs）| 无近期发布 | 小众聚焦推理模型；价格/成本追踪 |
| **Copilot CLI** | 低（0 PRs）| 缓慢但稳定 | 近期开发有限；产品成熟 |

---

## 趋势信号

1. **认证成为首要痛点** — 每个工具的社区都报告了认证问题（令牌刷新、OAuth 失败、401 错误）。这是整个生态系统中影响最大的摩擦点。

2. **多代理协调成为下一个前沿** — Claude（Mods）、Gemini（子代理）、Qwen（托管代理）和 Pi 都在积极开发后台任务处理、协作和恢复功能。行业正在从单轮交互演进。

3. **企业级功能日趋成熟** — 多账户支持、工作区绑定和持久化会话标志着从个人开发者工具向团队协作工作流的转变。

4. **可扩展性模式尚未收敛** — Claude Code 采用声明式钩子（Mods），Qwen 采用基于契约的架构（W0a/W0b 切片），而其他工具依赖插件市场。最佳模式尚未定论。

5. **跨平台一致性仍是难题** — 几乎每个工具的 bug 跟踪器都出现了 Windows 特定问题。AI 工具对 macOS/Linux 的偏好仍是企业 Windows 采纳的痛点。

6. **成本/定价透明度提升** — Pi 的 OpenRouter 定价修复和 Claude 的网关提示头表明提供商正在优化成本控制和多提供商路由。

---

*数据来源于 2026-09-26 的 GitHub 公开 API。活跃度统计反映可见的社区贡献；Discord 等私下讨论未纳入统计。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report from English to Simplified Chinese. I need to:
1. Translate all the content while maintaining the exact Markdown structure
2. Keep all URLs, code references, numbers, dates, issue/PR numbers as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me translate the content:</think>

# Claude Code Skills 社区亮点报告

**数据截至：2026-09-26**

---

## 1. 技能排行榜

由于本数据集中 PR 评论数均为 undefined，无法按评论数排名。以下基于活跃度、功能意义等因素，列出最值得关注的技能提交：

| # | PR | 技能 | 功能 | 状态 |
|---|----|----|---------------|--------|
| 1 | [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | 面向 Web3 开发者的智能合约静态分析自动化 Agent 技能，通过 ProofCore 零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | 开放 |
| 2 | [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | 零成本技能，可将 Markdown 文档合成为带有逼真人声的专业 MP4 视频，采用 Marp 转换幻灯片 | 开放 |
| 3 | [#822](https://github.com/anthropics/skills/pull/822) | `AWT` (AI Watch Tester) | 开源端到端测试技能，为 Claude 赋予视觉和浏览器控制能力，实现零代码自动化测试生成 | 开放 |
| 4 | [#1776](https://github.com/anthropics/skills/pull/1776) | `blast-radius` | 批量/破坏性操作检查清单技能——归档用户、撤销权限、删除行、批量发件——弥合查询正确性与世界状态正确性之间的鸿沟 | 开放 |
| 5 | [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` 修复 | 修复 MCP≥2.0.0 `streamable_http_client` 重命名问题及自定义请求头配置，通过 `create_mcp_http_client` 实现 | 开放 |
| 6 | [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` + `quantitative-resume-auditor` | 将产品/技术规格转化为具体 Notion 任务；审核简历中的可量化指标 | 开放 |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | `testing-patterns` | 全栈测试技能，涵盖测试奖杯理念、单元测试（AAA 模式）、React 组件测试等 | 开放 |
| 8 | [#83](https://github.com/anthropics/skills/pull/83) | `skill-quality-analyzer` + `skill-security-analyzer` | 元技能，从结构/文档（20%）、安全性等维度评估 Claude Skills | 开放 |

**要点：**
- 所有高排名 PR 当前均为 **开放** 状态——本数据集中未显示合并操作
- Web3/智能合约审计代表新垂直领域（`proofcore-contract-auditor`）
- 多媒体生成（`md2video-audio`）和端到端测试（`AWT`）表明技能边界正在从代码任务扩展

---

## 2. 社区需求趋势

从 Issue 讨论来看，以下主题最受期待：

### 核心需求

| 主题 | Issue | 描述 |
|-------|-------|-------------|
| **安全与信任** | [#492](https://github.com/anthropics/skills/issues/492) (43 条评论) | **关键问题：** `anthropic/` 命名空间下的社区技能冒充官方技能，造成信任边界滥用——用户可能向欺骗性社区技能授予 elevated 权限 |
| **组织级共享** | [#228](https://github.com/anthropics/skills/issues/228) (16 条评论) | 期望在 Claude.ai 中实现组织层面的技能共享，无需手动文件分发 |
| **评估/触发** | [#556](https://github.com/anthropics/skills/issues/556) (12 条评论) | `run_eval.py` 报告 0% 触发率——技能在评估中从未激活，阻塞 PR 验证 |

### 次要需求

| 主题 | Issue | 描述 |
|-------|-------|-------------|
| **治理与安全** | [#412](https://github.com/anthropics/skills/issues/412) | 提议 `agent-governance` 技能：策略执行、威胁检测、信任评分、审计追踪 |
| **插件冲突** | [#189](https://github.com/anthropics/skills/issues/189) | `document-skills` 和 `example-skills` 内容完全相同，造成重复 |
| **上下文耗尽** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` 技能单次调用注入约 156k token，导致上下文耗尽 |
| **MCP 集成** | [#16](https://github.com/anthropics/skills/issues/16) | 将 Skills 暴露为 MCP，实现标准化 API 封装 |

### 新兴方向
- **符号化记忆**（Issue #1329，`compact-memory`）：适用于长时间运行上下文的紧凑 Agent 状态表示法

---

## 3. 高潜力待发布技能

以下 PR 正在积极开发，可能即将合并：

| PR | 技能 | 理由 |
|----|----|-----------|
| [#1792](https://github.com/anthropics/skills/pull/1792) | `docx` 修复 | LibreOffice 超时错误处理 + 输出验证——实用缺陷修复 |
| [#1790](https://github.com/anthropics/skills/pull/1790) | `docx` 修复 | 创建缺失的 `document.xml.rels`——解决文档损坏问题 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` | 修复 MCP≥2.0.0 兼容性——应对破坏性变更 |
| [#1734](https://github.com/anthropics/skills/pull/1734) | `docx` 孤立检测 | 检测孤立的 Word 批注——体验改善 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` | 触发评估隔离、Windows 支持、运行时故障处理——基础设施级改进 |

---

## 4. 技能生态洞察

**一句话总结：** 社区最集中的需求是**安全治理**（技能命名空间的信任边界）配合**组织基础设施**（团队级技能共享和评估工具），而技能组合正快速向 Web3、多媒体和端到端测试垂直领域扩展。

---

*报告基于 GitHub anthropics/skills 仓库数据生成（PR 和 Issue 各 50 条，显示前 20 条）*

---

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following the detailed rules provided. Let me analyze what I need to do:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, issue/PR references, code spans, file paths as-is
4. Keep project names, repository slugs, usernames, version tags in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate while maintaining the structure and using appropriate technical Chinese register.

Key translations to consider:
- "Claude Code Community Digest" → "Claude Code 社区动态"
- "Today's Highlights" → "今日要点"
- "Releases" → "版本更新"
- "Hot Issues" → "热门议题"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"
- "View Release" → "查看版本"
- "Summary" → "摘要"
- "Reaction" → "反馈"
- Keep issue titles in English or translate the concept but keep proper nouns
- Use Chinese punctuation throughout (，。：；？！""『』)
- Convert numbers to Chinese numerals where appropriate for natural flow
- Maintain table structure

Let me translate this carefully:</think>

# Claude Code 社区动态 — 2026-09-26

## 1. 今日要点

v2.1.283 版本为请求分组添加了网关提示头，并新增 `availableModelsMatch` 设置用于模型校验。社区热点集中在 Mods 可扩展性提案（#91870，216 条评论）和多账户 Connector 支持的重大功能请求（#27302，390 👍）。多个影响 Windows VS Code 集成和模型行为（Opus 5.5 任务聚焦）的回归 bug 也引发了大量关注。

---

## 2. 版本更新

**v2.1.283** — [查看版本](https://github.com/anthropics/claude-code/releases/tag/v2.1.283)

- **`x-claude-code-prompt-id` 请求头**：添加至网关提示头，使 LLM 网关能够对服务于同一用户提示的请求进行分组。可通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 启用。
- **`availableModelsMatch` 托管设置**：新增设置项，支持 `"exact"` 值以严格匹配 `availableModels` 中的模型条目。

---

## 3. 热门议题

| # | 议题 | 摘要 | 反馈 |
|---|------|------|------|
| **#27302** | [支持多个 Connector 账户](https://github.com/anthropics/claude-code/issues/27302) | 功能请求：允许在 Claude Code 和 claude.ai/web 中为同一 Connector（如 GitHub）配置多个账户。对使用多个组织账号的开发者至关重要。 | 🔥 390 👍，256 条评论 |
| **#91870** | [Mods — 让 Claude 扩展性提升 10 倍](https://github.com/anthropics/claude-code/issues/91870) | 可扩展性重大提案，正在推进函数钩子功能。社区反馈正积极塑造设计方向。 | 🔥 126 👍，216 条评论 |
| **#43477** | [VS Code 中 Ctrl+C 复制失效](https://github.com/anthropics/claude-code/issues/43477) | 在 VS Code 的 Claude Code 窗口中，Ctrl+C 复制文本在 Windows 上失效。 | 16 条评论，6 👍 |
| **#97305** | ["falsifiable" vs "verifiable" 用词混淆](https://github.com/anthropics/claude-code/issues/97305) | 模型在应该使用 "verifiable" 时始终写成 "falsifiable"。4 个月内复现 4 次；项目级修正无法跨会话转移。 | 5 条评论 |
| **#97117** | [Opus 5.5 范围蔓延回归](https://github.com/anthropics/claude-code/issues/97117) | Opus 5.5 出现严重的范围蔓延和任务聚焦丢失问题，相比 Opus 4.6 明显退化。用户被迫中途回退版本。 | 3 条评论 |
| **#96096** | [MCP「始终允许」被忽略](https://github.com/anthropics/claude-code/issues/96096) | 2.1.280 回归：MCP 工具在绕过模式下每次调用都弹出提示，「始终允许」设置无效。 | 2 条评论，1 👍 |
| **#94804** | [MCP OAuth prompt=consent 硬编码](https://github.com/anthropics/claude-code/issues/94804) | 禁用了用户同意的 Entra 租户会因此配置损坏。影响 CLI、Web Connector 和桌面应用。#49722 曾因此关闭但未修复。 | 2 条评论 |
| **#94041** | [/goal Stop 钩子无限触发](https://github.com/anthropics/claude-code/issues/94041) | Linux 上，会话作用域的 /goal Stop 钩子会无限触发，无法确认解除。 | 2 条评论 |
| **#87739** | [CLI 启动时 CPU 100%](https://github.com/anthropics/claude-code/issues/87739) | Claude Code CLI 原生二进制在 VS Code Remote-SSH、Ubuntu 26.04 上启动后 CPU 占用约 100%。 | 2 条评论 |
| **#73325** | [权限提示不一致](https://github.com/anthropics/claude-code/issues/73325) | 终端 CLI 中「1」= 同意，但 Windows 桌面应用中「1」= 拒绝——肌肉记忆导致误点拒绝。 | 3 条评论（已关闭） |

---

## 4. PR 进展

| # | PR | 摘要 |
|---|-----|------|
| **#97293** | [mods：process.run 截断标志 + mtimeMs](https://github.com/anthropics/claude-code/pull/97293) | 在 mod 声明中为 `$.process.run` 结果添加 `isStdoutTruncated`/`isStderrTruncated`，为 `$.fs.list` 条目添加 `mtimeMs`。 |
| **#97241** | [sec-default：系统提示分段](https://github.com/anthropics/claude-code/pull/97241) | 扩展系统提示的分段，超出用户层级的安全默认值范围。 |
| **#96953** | [diff：focus 钩子元素命名](https://github.com/anthropics/claude-code/pull/96953) | 修复 diff mod 的 `ui.focus` 钩子，改用注册的插件名称（`cc-plugin-diff`）匹配元素。（已关闭） |
| **#96930** | [telemetry 测试插件](https://github.com/anthropics/claude-code/pull/96930) | 测试插件按名称挂接和调用收集器流，作为事件的遥测替代方案。（已关闭） |
| **#96917** | [telemetry：log 和 mark 钩子](https://github.com/anthropics/claude-code/pull/96917) | 重构遥测，改为使用 `telemetry.log` 和 `telemetry.mark` 事件的钩子。（已关闭） |
| **#41611** | [添加缺失的 source](https://github.com/anthropics/claude-code/pull/41611) | 为 Claude Code 添加缺失的 source。 |

---

## 5. 功能需求趋势

从议题分析来看，需求最多的功能方向为：

1. **多账户 Connector 支持** — 对管理多个组织/账户（GitHub 等）的开发者至关重要（高优先级）
2. **Mods/插件可扩展性** — 函数钩子、更深度的自定义（社区高度关注）
3. **Artifact 管理** — 删除/取消发布 Artifact 的能力
4. **跨平台一致性** — 统一权限提示、键盘快捷键（CLI/桌面端一致）
5. **MCP 改进** — OAuth 同意处理、权限绕过可靠性、机器级失败缓存修复
6. **模型行为优化** — 用词一致性（verifiable/falsifiable）、任务聚焦保持

---

## 6. 开发者痛点

- **权限提示混乱**：各界面行为不一致（CLI vs 桌面端 vs 绕过模式），「始终允许」设置失效
- **Windows/VS Code 集成问题**：Ctrl+C 复制失效、浏览器面板重复渲染、Remote-SSH 下 CPU 100%
- **模型回归**：Opus 5.5 范围蔓延、重复的模型降级消息、用词混淆
- **MCP 可靠性**：OAuth 同意导致 Entra 租户损坏、工具提示在设置后仍每次弹出
- **会话/线程 bug**：任务标签页注入错误线程、/compact 后会话记录数据丢失、运行中任务徽章卡死
- **跨账户状态**：切换 Claude 账户后 Chrome 浏览器识别丢失

---

*数据来源：GitHub — github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest from English to Chinese (Simplified). Let me carefully translate this while:

1. Preserving all Markdown structure exactly
2. Keeping URLs, issue/PR numbers, project names, version tags, etc. as-is
3. Using natural technical Chinese register
4. Not adding any preamble or explanation
5. Not using markdown fences around the output

Let me translate section by section:

**Today's Highlights**
- "The past 24 hours have been dominated by a significant authentication incident" - 过去24小时内，一个重大认证问题成为焦点
- "401 Unauthorized errors" - 401 未授权错误
- "invalid `sk-svcac...` API key" - 无效的 `sk-svcac...` API 密钥
- "rendering Codex completely unusable" - 导致 Codex 完全无法使用
- "is overshadowing the release" - 使该版本黯然失色
- "terminal window spawning issues" - 终端窗口不断弹出的问题

**Releases**
- "Stable" - 稳定版
- "Alpha" - Alpha版
- "Key Changes" - 主要更新

**Hot Issues**
- Translate the issue titles while keeping numbers and links
- Use natural Chinese for descriptions

**Key PR Progress**
- Translate "Summary" to "摘要" or "内容"
- Keep PR numbers and status

**Hot Discussions**
- Translate "Ideas", "Show and Tell", "Q&A" to appropriate Chinese terms
- Keep discussion numbers

**Feature Request Trends** - 功能需求趋势

**Developer Pain Points** - 开发者痛点

Let me write the full translation now:</think>

# OpenAI Codex 社区简报 — 2026-09-26

## 今日要闻

过去 24 小时内，一个重大认证问题成为焦点。受影响的是跨平台使用 Codex 的用户——许多 ChatGPT 认证用户在 OAuth 登录后收到 401 未授权错误，Codex 错误地发送了格式错误的无效 `sk-svcac...` API 密钥而非正确的 OAuth 令牌，导致大量 Pro 和 Plus 订阅用户完全无法使用 Codex。虽然团队已发布 rust-v0.157.0，新增 GPT-6 Sol 和 Luna 模型支持，但这一 widespread 的大范围认证回归问题使该版本黯然失色。Windows 用户还面临近期更新后终端窗口持续弹出的问题。

---

## 版本发布

| 版本 | 类型 | 主要更新 |
|---------|------|-------------|
| **rust-v0.157.0** | 稳定版 | 新增 GPT-6 Sol 和 Luna 模型，支持 Amazon Bedrock 并提供迁移提示。默认启用全屏转录。添加 Shift+点击扩展文本选择功能。为符合条件的配置默认启用自动后台服务器启动。 |
| **rust-v0.159.0-alpha.1/2/3** | Alpha 版 | 0.159.0 渐进式 Alpha 发布 |
| **rust-v0.158.0-alpha.13/14/15** | Alpha 版 | 0.158.0 渐进式 Alpha 发布 |

---

## 热门问题

### 1. 🔴 认证回归 — 401 错误并显示无效的 `sk-svcac` 凭据
**Issue #48237** | [在 GitHub 查看](https://github.com/openai/codex/issues/48237)  
93 条评论 | 101 👍

Windows、macOS 和 Linux 用户均遭遇即使通过 ChatGPT OAuth 登录仍收到 `401 未授权` 错误的状况。Codex 错误地发送了格式错误的 `sk-svcac...` API 密钥而非正确的 OAuth 令牌。这是目前关注度最高的问题，看起来是近期版本引入的系统性认证 bug。

### 2. 🔴 频繁的 WebSocket 重连循环
**Issue #18960** | [在 GitHub 查看](https://github.com/openai/codex/issues/18960)  
62 条评论 | 54 👍

macOS Pro 用户报告 Codex 反复断开连接，显示 "websocket closed by server before response.completed"，导致长时间会话完全无法使用。

### 3. 🔴 macOS：沙箱启动失败并显示 TIOCSTI 错误
**Issue #45119** | [在 GitHub 查看](https://github.com/openai/codex/issues/45119)  
27 条评论

macOS 14.2（Apple Silicon）用户无法启动沙箱，导致代码执行完全受阻。

### 4. 🔴 Windows：Codex CLI 0.157.0 守护进程权限错误
**Issue #48043** | [在 GitHub 查看](https://github.com/openai/codex/issues/48043)  
9 条评论 | 10 👍

Windows 用户报告 CLI 0.157.0 无法启动并出现守护进程权限错误，而 0.156.1 正常工作——这是一个明确的回归问题。

### 5. 🔴 Windows：更新后终端窗口不断增殖
**Issue #48059** | [在 GitHub 查看](https://github.com/openai/codex/issues/48059)  
4 条评论 | 12 👍

Windows 上的 Codex CLI 会弹出约 20 个持续打开的终端窗口，用户手动关闭后会弹出更多。

### 6. 🟡 VS Code Server / serve-web 激活失败
**Issue #47357** | [在 GitHub 查看](https://github.com/openai/codex/issues/47357)  
13 条评论 | 20 👍

Codex 无法在 VS Code Server 中激活，因为所需的 Codex Audio 扩展仅支持桌面端，阻断了远程开发工作流。

### 7. 🟡 OAuth 回退使用硬编码的虚拟 API 密钥
**Issue #37192** | [在 GitHub 查看](https://github.com/openai/codex/issues/37192)  
12 条评论

网络变更后，Codex 静默回退到硬编码的虚拟 API 密钥而非提示重新认证，导致 401 错误。

### 8. 🟡 Windows：浏览器请求头策略加载失败
**Issue #46129** | [在 GitHub 查看](https://github.com/openai/codex/issues/46129)  
4 条评论

Windows 用户看到"无法加载浏览器请求头策略"错误——Statsip 有效载荷（约 4.8MB）超出了 nodeRepl.fetch 响应限制。

### 9. 🟡 Linux Desktop：任务卡在"正在启动您的任务"
**Issue #48212** | [在 GitHub 查看](https://github.com/openai/codex/issues/48212)  
3 条评论 | 2 👍

Linux Desktop 26.924.20706 显示任务无限期卡住，而 CLI 正常工作，表明是桌面端特有的回归问题。

### 10. 🟢 Windows：CODEX_HOME 状态损坏
**Issue #46987** | [在 GitHub 查看](https://github.com/openai/codex/issues/46987)  
5 条评论 | 3 👍

Windows Desktop 遭遇全局状态损坏，重置项目/线程分组同时保留各个会话，导致严重的用户体验中断。

---

## 关键 PR 进展

| PR | 状态 | 摘要 |
|----|--------|---------|
| **#48272** | 已关闭 | 阻止 Windows 守护进程启动时保留启动器 stdio |
| **#48238** | 已关闭 | 使用 `CREATE_NO_WINDOW` 标志抑制本地 Windows MCP 服务器的控制台窗口 |
| **#48229** | 已关闭 | 将 Responses 解析失败提取到独立模块（`responses_error.rs`） |
| **#48224** | 已关闭 | 在压缩期间保留模型和访问程序对，防止服务器拒绝 |
| **#48222** | 已关闭 | 为截断的 code-mode 调用保留延迟结果元数据 |
| **#48213** | 已关闭 | 在 Linux CLI 测试中隔离可执行文件副本，防止 `ETXTBSY` 错误 |
| **#48211** | 已关闭 | 在外部编辑器交接期间通过保留最后一帧保持 Codex 可见 |
| **#48207** | 已关闭 | 为 code-mode 终止期间的观察者保留排队输出 |
| **#48206** | 已关闭 | 在警告查看器中添加"保留并继续"操作（`k` 键） |
| **#48205** | 已关闭 | 关闭查看器时清除已查看的 TUI 警告 |

---

## 热门讨论

### 想法

**#14067 — 功能建议：跨设备同步 Codex 线程和会话上下文**  
[在 GitHub 查看](https://github.com/openai/codex/discussions/14067)  
12 条评论 | 63 👍

用户请求跨设备同步 Codex 线程和会话上下文。目前线程绑定到本地环境，迫使开发者在切换机器时重新创建上下文。

### 展示

**#47730 — ghfs：将 GitHub Issues 作为只读本地文件**  
[在 GitHub 查看](https://github.com/openai/codex/discussions/47730)  
1 条评论 | 1 👍

ghfs 将 GitHub issues 作为 Markdown 文件挂载到仓库的 `.ghfs/` 目录，使 Codex 能够在任务中通过 `cat` 读取 issues 而非调用 GitHub API。

**#42876 — Codex 托管通道：远程 macOS SSH 会话**  
[在 GitHub 查看](https://github.com/openai/codex/discussions/42876)  
1 条评论 | 1 👍

一个开源 SSH 边界，允许 Codex Desktop 使用现有远程 Mac，同时保留官方认证和插件。

**#47986 — Crest：从 MacBook 刘海处回应 Codex 批准请求**  
[在 GitHub 查看](https://github.com/openai/codex/discussions/47996)  
0 条评论 | 1 👍

一款生活在刘海的 Mac 应用，在所有显示器上显示 Codex 批准请求并提供拒绝/允许选项。

### 问答

**#48032 — 功能建议：持久化 Google Drive 指令和文件创建**  
[在 GitHub 查看](https://github.com/openai/codex/discussions/48032)  
0 条评论 | 1 👍

请求 Codex 在 Windows 上为使用 Drive 作为事实来源的团队工作流保持持久的 Google Drive 指令和文件创建能力。

---

## 功能需求趋势

根据 Issues 和 Discussions，以下主题浮现：

1. **跨设备同步** — 强烈需求线程/会话跨机器持久化
2. **远程开发** — VS Code Server 支持和基于 SSH 的工作流程日益重要
3. **平台一致性提升** — Linux Desktop 和 Windows 问题表明用户需要所有平台的一致体验
4. **外部集成** — Google Drive、GitHub 等云存储集成需要持久化配置

---

## 开发者痛点

1. **认证不稳定** — 401/凭据问题正在阻断整个工作流；用户无法依赖 Codex 进行生产工作
2. **Windows 体验落后** — 终端窗口弹出、沙箱失败和权限错误使 Windows 成为令人沮丧的平台
3. **macOS 回归** — WebSocket 断开和 OAuth 令牌撤销问题持续存在
4. **平台特定 bug** — 许多 bug 局限于单一平台（Windows、macOS、Linux），表明跨平台测试不足
5. **令牌/会话管理** — 刷新令牌撤销处理不够优雅；用户面临无明确恢复路径的认证循环

---

*简报基于 GitHub 数据生成 — github.com/openai/codex | 2026-09-26*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the Gemini CLI Community Digest into Simplified Chinese, following the detailed translation rules provided. Let me analyze the content and translate it appropriately.

Key points to remember:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, issue/PR references, project names, version tags, file paths as-is
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate section by section:

## Today's Highlights
今天的重点

## Releases
版本发布

## Hot Issues
热门 Issue

## Key PR Progress
关键 PR 进展

## Feature Request Trends
功能需求趋势

## Developer Pain Points
开发者痛点

Now let me translate the full content...</think>

# Gemini CLI 社区周报 — 2026-09-26

## 今天的重点

Gemini CLI 项目持续快速迭代，发布了 v0.62.0-nightly.20260925.gbedef96ef，其中包含了最近 v0.61.0 和 v0.61.0-preview.1 版本的更新日志。一个值得注意的 P1 认证修复已合并（#29448），解决了 Windows/WSL/无头环境中的无限认证循环问题——这是一个影响广泛的用户-facing问题。与此同时，社区正在积极讨论核心的代理改进：AST感知的文件操作、操作系统沙箱策略以及子代理行为仍然是热门话题。

---

## 版本发布

**v0.62.0-nightly.20260925.gbedef96ef**  
[Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260925.gbedef96ef) | [Changelog PR #29469](https://github.com/google-gemini/gemini-cli/pull/29469) | [Changelog PR #29472](https://github.com/google-gemini/gemini-cli/pull/29472)

变更内容：
- v0.61.0-preview.1 和 v0.61.0 的更新日志
- 修复：区分缺失的 MCP 启用配置与格式错误的配置

---

## 热门 Issue

### 1. 子代理在 MAX_TURNS 后中断但隐藏了中断信息
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — P1 Bug | 13 条评论  
**为什么重要：** `codebase_investigator` 子代理在达到最大轮次未完成分析时仍报告 GOAL 成功，掩盖了实际失败。这在任务完成追踪中造成了误报。  
**社区反馈：** 2 👍；标记为需重新测试。

### 2. 零依赖操作系统沙箱与执行后意图路由
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — P2 增强 | 9 条评论  
**为什么重要：** 提议利用 Gemini 3 原生的 bash 亲和性实现零依赖操作系统沙箱，有望在无需外部工具链的情况下同时提升安全性和用户体验。  
**社区反馈：** 1 👍；标记为大工作量。

### 3. 通用代理挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — P1 Bug | 8 条评论  
**为什么重要：** 当 Gemini CLI 回退到通用代理时，它会无限挂起——即使在简单的操作（如创建文件夹）时也是如此。用户报告等待时间长达一小时。一种解决方法是显式禁用子代理。  
**社区反馈：** 8 👍；标记为需重新测试。

### 4. 评估 AST 感知文件读取的影响
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — P2 功能 | 7 条评论  
**为什么重要：** 追踪调研 AST 感知工具以实现精确的方法边界读取，减少因文件读取错位导致的 token 浪费。  
**社区反馈：** 1 👍

### 5. Gemini 没有充分利用技能和子代理
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — P2 Bug | 6 条评论  
**为什么重要：** 尽管存在自定义技能（如 gradle、git）且描述清晰，Gemini 很少主动调用它们——只有在明确指示时才会使用，限制了自动化潜力。

### 6. 添加确定性重daction并减少 Auto Memory 日志记录
[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — P2 Bug | 5 条评论  
**为什么重要：** Auto Memory 在重daction发生之前就发送了转录内容给模型，造成了安全漏洞。敏感信息在提取代理处理之前可能已经在上下文中了。

### 7. 阻止 Auto Memory 无限重试低信号会话
[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — P2 Bug | 4 条评论  
**为什么重要：** 被标记为"低信号"而跳过的会话始终未被处理，可能会反复出现，浪费提取周期。

### 8. 浏览器代理忽略 settings.json 覆盖
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — P2 Bug | 4 条评论  
**为什么重要：** 浏览器代理完全忽略 `settings.json` 中的配置覆盖（如 `maxTurns`），限制了用户对浏览器子代理行为的控制。

### 9. 增强浏览器代理弹性：自动会话接管
[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — P3 功能 | 4 条评论  
**为什么重要：** 提议对持久的浏览器会话进行锁定恢复，减少遇到孤立进程时的快速失败行为。

### 10. 浏览器子代理在 Wayland 下失败
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — P1 Bug | 4 条评论  
**为什么重要：** 浏览器子代理在 Wayland 环境下失败，限制了 CLI 在运行 Wayland 显示服务器的 Linux 桌面上的可用性。

---

## 关键 PR 进展

### 1. 修复认证：防止无限认证循环
[#29448](https://github.com/google-gemini/gemini-cli/pull/29448) — P1 | 已合并  
修复了 Windows/WSL/无头环境中由伴侣工具（VS Code 扩展）文件争用和密钥库问题导致的无限认证循环。

### 2. 修复核心：序列化文件工具操作
[#29499](https://github.com/google-gemini/gemini-cli/pull/29499) — P1 | 进行中  
解决了并行子代理之间并发文件操作的竞态条件，使写入原子化以防止静默丢失更新。

### 3. 修复 CLI：解决按 Enter 键挂起问题
[#29476](https://github.com/google-gemini/gemini-cli/pull/29429476) — P1 | 进行中  
修复了在 IDE 集成终端中工具确认提示符下 Enter 键无响应的问题。

### 4. 修复核心：将模糊匹配替换为 glob 用于批量读取文件
[#29457](https://github.com/google-gemini/gemini-cli/pull/29457) — P1 | 进行中  
修复了关键的上下文膨胀 bug：模糊子字符串匹配错误地包含了二进制资源（图片、PDF）。

### 5. 修复 ACP：在配置初始化前解析会话
[#29463](https://github.com/google-gemini/gemini-cli/pull/29463) — P1 | 已关闭  
解决了在同一 UTC 分钟内调用 `session/new` 后立即调用 `session/load` 时的会话查找失败问题。

### 6. 修复：支持 rootless Podman 配合 keep-id
[#29505](https://github.com/google-gemini/gemini-cli/pull/29505) — P1 | 进行中  
通过保留主机 UID/GID 映射，使沙箱能够为 rootless Podman 启动。

### 7. 修复核心：Shell 退出时清理临时目录
[#29437](https://github.com/google-gemini/gemini-cli/pull/29437) — P1 | 已关闭  
确保为后台进程追踪创建的临时目录被正确清理。

### 8. 修复核心：移除无效的 diff.external 覆盖
[#29467](https://github.com/google-gemini/gemini-cli/pull/29467) — P1 | 已关闭  
移除了导致执行沙箱中出现致命"cannot spawn"错误的无效 Git diff 配置。

### 9. 重构 A2A 服务器：V1 到 V2 设置迁移
[#29450](https://github.com/google-gemini/gemini-cli/pull/29450) — P1 | 进行中  
在 a2a-server 配置加载器中实现了向后兼容的 V1→V2 设置迁移。

### 10. 修复 CLI：添加 Homebrew 弃用通知
[#28844](https://github.com/google-gemini/gemini-cli/pull/28844) — 已关闭  
添加了 Homebrew 安装方式的弃用通知；引导用户通过 npm 获取更新。

---

## 功能需求趋势

| 主题 | 相关 Issue | 信号 |
|-------|----------------|--------|
| **AST 感知工具** | #22745, #22746 | 史诗级追踪；调研精确代码导航 |
| **代理自我意识** | #21968, #21432 | 技能/子代理利用不足；需要 CLI 标志/热键文档 |
| **安全加固** | #26525, #26522 | Auto Memory 重daction和重试逻辑 |
| **操作系统沙箱** | #19873 | 零依赖沙箱，利用模型 bash 亲和性 |
| **浏览器代理鲁棒性** | #22267, #22232, #21983 | Wayland 支持、配置覆盖、会话恢复 |

---

## 开发者痛点

1. **交互模式下代理挂起** — 多篇报告指出通用代理和浏览器子代理无限挂起；用户只能通过禁用子代理等变通方案。

2. **无头/WSL 环境下的认证失败** — 认证循环 bug（#29448）凸显了非标准环境下开发者的持续摩擦。

3. **文件操作竞态条件** — 并行子代理的并发写入导致静默数据丢失；序列化修复（#29499）是一项关键的即将到来的改进。

4. **二进制资源导致的上下文膨胀** — 批量读取文件中的模糊匹配错误地包含图片/PDF，显著增加了 token 使用量。

5. **浏览器子代理环境差异** — Wayland 和配置覆盖问题限制了跨平台可靠性。

6. **Auto Memory 可靠性** — 低信号会话处理和重daction时序既涉及安全问题，也影响效率。

---

*周报基于 2026-09-26 的 GitHub 数据生成。可能存在数据源限制。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese (Simplified). I need to:

1. Translate all the text content while keeping the structure intact
2. Preserve all markdown elements (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, project names, version tags, etc. as-is
4. Use natural technical Chinese appropriate for a developer newsletter

Let me translate section by section, maintaining the exact markdown structure:

Key translations to consider:
- "Community Digest" → 社区简报
- "Today's Highlights" → 今日要闻
- "Releases" → 版本更新
- "Hot Issues" → 热门问题
- "Key PR Progress" → 重要 PR 进展
- "Hot Discussions" → 热门讨论
- "Feature Request Trends" → 功能需求趋势
- "Developer Pain Points" → 开发者痛点
- "disable-model-invocation" → disable-model-invocation (keep as-is in code style)
- "Mission Control" → Mission Control (dashboard name, keep English)
- "Ctrl+Backspace" → Ctrl+Backspace
- "Zod validation" → Zod 校验 (Zod is a library name)
- "MCP" → MCP (Model Context Protocol, keep as is)
- "OAuth" → OAuth (authentication protocol name)
- Various technical terms should be kept in English or use natural Chinese equivalents

Let me go through and translate everything while preserving the exact structure.</think>

# GitHub Copilot CLI 社区简报

**日期：** 2026-09-26

---

## 1. 今日要闻

GitHub Copilot CLI v1.0.89-4 发布了路由层自动建议和切换后快速反馈提示功能，改进了模型切换的用户体验。与此同时，社区正在积极调试一个关键的认证回归问题：长时间运行的会话会永久丢失认证令牌（#4929），而开发者们正在请求系统提示词的可配置性以减少令牌开销（#2627，收获 20 个 👍）。

---

## 2. 版本更新

**v1.0.89-4** (2026-09-26)

**新增：**
- 自动建议路由层，并提供快捷键/点击切换方式
- 手动切换模型后会出现快速反馈提示

**改进：**
- 插件的直接安装现在可以启用和禁用；禁用的插件将停止加载

---

## 3. 热门问题

| # | 问题 | 摘要 | 反馈 |
|---|------|------|------|
| **#4438** | [disable-model-invocation 导致技能不可用](https://github.com/github/copilot-cli/issues/4438) | 带有 `disable-model-invocation: true` 的技能在 `copilot skill list` 和模型工具中完全不可访问——即使显式调用也返回"技能未找到" | 👍 11 |
| **#232** | [为 Copilot-CLI 添加 System Prompt 参数](https://github.com/github/copilot-cli/issues/232) | 请求添加 `--system-prompt` 标志以在仓库特定文件外部传递全局指令 | 👍 11 |
| **#4929** | [进程本地认证令牌停止刷新](https://github.com/github/copilot-cli/issues/4929) | 长时间运行的 CLI 进程永久丢失认证；`/login` 无法恢复；需要完全重启 | 👍 0 |
| **#4775** | [Mission Control 仪表盘链接 404](https://github.com/github/copilot-cli/issues/4775) | 仪表盘链接到 `/copilot/tasks/<uuid>` 但会话实际位于 `/agents/tasks/<uuid>` | 👍 2 |
| **#2627** | [可配置的系统提示词](https://github.com/github/copilot-cli/issues/2627) | 系统提示词在会话启动时消耗约 20,500 个令牌（占 200K 上下文的 10%）；请求减少开销 | 👍 **20** |
| **#4680** | [CLI 向自定义 OpenAI 端点发送错误的模型 ID](https://github.com/github/copilot-cli/issues/4680) | CLI 发送 `gpt-5.4-nano` 而非配置的自定义模型名称，导致会话中断 | 👍 0 |
| **#4960** | [企业托管的自定义模型显示但无法选择](https://github.com/github/copilot-cli/issues/4960) | 自定义企业模型在 `/model` 选择器中显示但无法选中 | 👍 0 |
| **#4710** | [空闲时文件搜索线程失控占用 CPU](https://github.com/github/copilot-cli/issues/4710) | 后台 `copilot-file-search` 线程在空闲会话期间持续占用 CPU 并写入无限制的日志 | 👍 0 |
| **#4907** | [MCP 重连通知刷屏对话](https://github.com/github/copilot-cli/issues/4907) | 周期性 MCP 重连消息在空闲时也 spam 对话历史 | 👍 0 |
| **#4969** | [插件市场添加失败（描述 > 1024 字符）](https://github.com/github/copilot-cli/issues/4969) | 严格的 Zod 校验规则拒绝任何单个插件描述超过 1024 字符的整个市场 | 👍 0 |

---

## 4. 重要 PR 进展

过去 24 小时内没有更新任何 pull request。

---

## 5. 热门讨论

源数据中未提供讨论数据。

---

## 6. 功能需求趋势

根据问题分析，社区主要请求的功能包括：

| 主题 | 相关问题 |
|------|----------|
| **系统提示词自定义** | #232、#2627 — 减少令牌开销；添加全局 `--system-prompt` 标志 |
| **模型/代理灵活性** | #4637、#3138、#3053 — 更好的技能调用控制；模型切换时不丢失草稿；推理强度选择 |
| **跨平台/集成** | #4082 — CLI 与 Desktop 之间的会话同步；#4089 Atlassian MCP 工具暴露 |
| **输入/UX 改进** | #2199 — Ctrl+Backspace 单词删除；#3501 滚动条对齐修复 |
| **插件/扩展系统** | #4103、#4969 — 私有仓库的 Git 凭据处理；市场校验健壮性 |

---

## 7. 开发者痛点

1. **认证失败** — 长时间运行的会话永久丢失认证；不重启无法恢复（#4929）
2. **令牌开销** — 系统提示词 + 工具定义在用户内容之前消耗约 29K 令牌，限制了大项目的上下文（#2627）
3. **仪表盘链接失效** — Mission Control 显示 404 URL，阻止远程会话访问（#4775）
4. **技能调用 Bug** — `disable-model-invocation` 使技能完全不可用，而非仅非自动调用（#4438）
5. **自定义模型配置错误** — 向 OpenAI 兼容端点发送错误的模型 ID，破坏自定义配置（#4680）
6. **MCP 集成问题** — OAuth 成功但零工具暴露；周期性重连刷屏对话（#4089、#4907）
7. **资源泄漏** — 空闲会话的后台线程保持失控的 CPU/磁盘使用（#4710）

---

*数据来源：github.com/github/copilot-cli — 2026-09-26*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>用户要求我翻译这个社区摘要，但我需要仔细阅读并理解翻译规则：

1. 输出纯翻译，不要有前言、解释或markdown fences
2. 保留Markdown结构：标题、表格、列表、引用、粗体、斜体、水平线、emoji
3. 保持URL、链接目标、代码块等不变
4. 项目名、仓库slug、用户名、版本标签、文件路径和API/配置标识符保持原样
5. Issue/PR引用如#12345保持原样
6. 使用自然的技术中文，像中文开发者通讯的语调

让我逐段翻译：

1. Today's Highlights  - 今日要闻
2. Releases - 版本发布
3. Hot Issues - 热门问题
4. Key PR Progress - 关键PR进展
5. Feature Request Trends - 功能请求趋势
6. Developer Pain Points - 开发者痛点

让我开始翻译：</think>

# OpenCode 社区摘要 — 2026-09-26

## 今日要闻

今日的活跃度显示社区正聚焦于稳定性和用户体验问题。最紧迫的担忧是 TUI 在显示比例跳升至 4 时崩溃、模型选择器显示异常，以及后台子代理行为存在缺陷。多项 PR 正在推进配置加载、OAuth 处理和 UI 完善——表明下一个版本发布前正在积极打磨。

**过去 24 小时内无新版本**发布。

---

## 热门问题

| # | 问题 | 摘要 | 评论 | 👍 |
|---|------|------|------|-----|
| **#6169** | [Model TUI picker doesn't display all custom provider models](/anomalyco/opencode/issues/6169) | 在 `opencode.jsonc` 中定义的自定义模型加载正常，但不会出现在 `/model` TUI 选择器中——只有最近使用的模型会显示。 | 13 | 1 |
| **#42094** | [TUI SIGILL crash when compositor scale jumps to 4](/anomalyco/opencode/issues/42094) | 当显示器比例切换到 4 时，OpenCode TUI 以 `SIGILL` (`ud2`) 中止。每次都在同一个指令指针处发生——严重的运行时崩溃。 | 8 | 3 |
| **#41249** | [Live Subagents sidebar in TUI](/anomalyco/opencode/issues/41249) | 请求在 TUI 中添加实时"子代理"侧边栏作为 TUI 插件。已作为外部 npm 包构建；请求原生集成。 | 8 | 1 |
| **#50236** | [ACP session/new catalog ignores config providers since 2.0.4](/anomalyco/opencode/issues/50236) | 自 v2.0.4 以来，`opencode acp` 停止加载自定义 providers、agents 和默认模型——目录中只显示内置模型。 | 7 | 3 |
| **#51419** | [Incorrect API key provided: sk](/anomalyco/opencode/issues/51419) | OpenCode 发送提示时返回 401 错误，提示"Incorrect API key"。社区正在积极调试凭证处理。 | 7 | 12 |
| **#49847** | [ChatGPT OAuth uses Zen API key](/anomalyco/opencode/issues/49847) | OpenAI provider 被错误绑定到 Zen 集成，向 ChatGPT 的 OAuth 专用端点发送 Zen API key。 | 7 | 2 |
| **#41206** | [Go quota doesn't match usage history](/anomalyco/opencode/issues/41206) | OpenCode Go 周/月配额显示与实际使用历史不符——账单透明度令人困惑。 | 6 | 1 |
| **#34644** | [GitHub Copilot provider not found for Student plan](/anomalyco/opencode/issues/34644) | OAuth 后，`github-copilot` provider 不出现在 Copilot Student（仅 Auto）计划的模型选择器中。 | 5 | 21 |
| **#48826** | [Subagent background work marked completed early](/anomalyco/opencode/issues/48826) | 带有 `background: true` 的 V2 子代理在工作仍在运行时报告已完成——父代理收到提前回复。 | 4 | 0 |
| **#47553** | [Sidecar OOM crash](/anomalyco/opencode/issues/47553) | 桌面应用 sidecar 进程反复崩溃，提示 JavaScript 堆内存不足（~3GB+）。 | 4 | 0 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|------|
| **#51422** | [fix(core): resolve configured instructions](/anomalyco/opencode/pull/51422) | 恢复 V1 中缺失的 `instructions` 配置字段解析器。关闭 #51341。 |
| **#49691** | [fix(shell): unescape backslash-escaped chars](/anomalyco/opencode/pull/49691) | 修复 shell 工具正确处理 bash 路径参数中的反斜杠转义字符。 |
| **#50994** | [fix(core): serialize MCP OAuth refreshes](/anomalyco/opencode/pull/50994) | 防止多个进程同时刷新同一 MCP OAuth token 时出现竞态条件。 |
| **#51417** | [fix(tui): honor thinking opacity on collapsed reasoning](/anomalyco/opencode/pull/51417) | 折叠推理现在一致地遵循 `theme.thinkingOpacity`。 |
| **#51413** | [fix(core): recover stale event sequence](/anomalyco/opencode/pull/51413) | 修复当事件序列落后时，持久化聚合体变为永久不可写的问题。 |
| **#50955** | [fix(core): count websocket stream failures](/anomalyco/opencode/pull/50955) | 改进 WebSocket 流失败追踪（空闲超时和响应解析）。 |
| **#46225** | [fix(app): encode server credentials as UTF-8](/anomalyco/opencode/pull/46225) | 修复基本认证头中的非 ASCII 凭证编码。 |
| **#46131** | [fix(opencode): write auth.json atomically](/anomalyco/opencode/pull/46131) | 在锁下原子式写入 `auth.json` 防止凭证丢失。 |
| **#50911** | [fix(config): retain numeric MCP timeout entries](/anomalyco/opencode/pull/50911) | 保留 MCP server 条目中的数字超时值。 |
| **#50899** | [fix(core): ignore file references in JSONC comments](/anomalyco/opencode/pull/50899) | 防止 V2 将 JSONC 注释中的 `{file:...}` 解析为实际文件引用。 |

---

## 功能请求趋势

| 方向 | 相关问题 |
|------|----------|
| **TUI 增强** | 实时子代理侧边栏 (#41249)、向插件公开 V2 composer (#51209)、元素标注队列 (#51421) |
| **Provider 集成** | GitHub Copilot Student 支持 (#34644)、OAuth 凭证处理修复 (#49847, #51419) |
| **子代理改进** | 后台工作完成处理 (#48826, #50751)、主/子模型对齐 (#51361) |
| **本地模型支持** | 本地模型的子代理工具定义 (#51268) |

---

## 开发者痛点

1. **TUI 稳定性** —  compositor 比例变化时的 SIGILL 崩溃 (#42094) 是影响高 DPI 显示器用户的关键可靠性问题。
2. **模型选择器可见性** — 自定义模型不显示在选择器中 (#6169) 尽管后端加载正确，却造成困惑。
3. **后台子代理行为** — 后台任务完成和通知的多个问题 (#48826, #50751) 表明 V2 子代理处理存在架构缺陷。
4. **配置回归** — ACP 目录忽略用户配置 (#50236) 自 2.0.4 以来破坏了工作流集成。
5. **内存问题** — 桌面端 sidecar OOM 崩溃 (#47553) 阻碍长时间运行会话。
6. **凭证处理** — API key 和 OAuth 问题 (#51419, #49847) 指向多提供商认证的持续复杂性。

---

*数据来源：GitHub — anomalyco/opencode*

---

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this Pi Community Digest from English to Chinese (Simplified Chinese - zh-CN). I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep all URLs, issue/PR numbers, code identifiers, technical terms as-is
3. Use natural technical Chinese register
4. Not add any preamble, explanation, or markdown fences
5. Preserve all formatting: headings, tables, lists, bold, etc.

Let me translate this carefully while maintaining the structure and technical accuracy.

Key terms to translate:
- "Hot Issues" → 热门 Issue
- "Key PR Progress" → 关键 PR 进展
- "Feature Request Trends" → 功能请求趋势
- "Developer Pain Points" → 开发者痛点
- "Today's Highlights" → 今日要闻
- "Releases" → 版本发布
- "Compaction" → 压缩
- "Thinking text/reasoning" → 思考文本/推理
- "Regression" → 回归问题
- "Stream/streaming" → 流式/流式传输
- "Provider" → 提供商
- "CLI" → CLI
- "TUI" → TUI

Let me translate now:</think>

# Pi 社区简报 — 2026-09-26

## 今日要闻

Pi 项目今日迎来大量 bug 修复工作，包括终端退出行为和定价计算的修复。同时，围绕思考文本处理和压缩的若干长期问题持续引发讨论。#10040 引入了实验性的虚拟模型和 MCP 集成，带来重大更新。

过去 24 小时内**无版本发布**。

---

## 热门 Issue

| # | Issue | 重要性 | 评论数 |
|---|-------|--------|--------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **Pi 在按 ESC 停止思考后随机卡在"Working..."状态** — 自 v0.84.0 左右的回归问题导致 Pi 无限卡顿。用户必须用 `CTRL+c` 强制终止并通过 `pi -c` 恢复。 | 15 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search 未索引新发布的 pi-packages** — 已发布的包不会出现在 `npm search` 或 pi.dev/packages 列表中，导致包发现机制失效。 | 15 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | **0.86.0 回归：RPC 转向成功无法与 extension 处理的输入关联** — RPC 客户端无法可靠地识别经过 extension handler 处理后被加入队列的输入。 | 11 |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | **mistral-conversations：空内容 delta 打开文本块（GLM 5.x）** — 零长度内容 delta 创建空文本块，导致回放时出现空白和 400 错误。 | 7 |
| [#8913](https://github.com/earendil-works/pi/issues/8913) | **全屏渲染器无条件启用鼠标追踪且无法关闭** — 内部存在 `mouse` 选项但从未传递；无 CLI 参数禁用 `?1003` 任意事件追踪。 | 6 |
| [#9980](https://github.com/earendil-works/pi/issues/9980) | **OpenRouter 模型定价对于热门开源模型偏差 2-3 倍** — 使用最便宜的提供商定价，但实际使用其他提供商时成本高出 2-3 倍。 | 5 |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | **Pi 错误处理 llama.cpp 的 Responses API 工具调用** — 错误/损坏的 SSE 流处理导致执行重复和损坏的工具调用。 | 5 |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | **压缩提示包含所有思考文本并超出上下文窗口** — 序列化包含完整思考块，导致长对话（使用推理模型时）无法自动压缩。 | 5 |
| [#9918](https://github.com/earendil-works/pi/issues/9918) | **Codex 回放空的签名最终答案** — 空或仅空白字符的 final-answer 项被持久化并回放，破坏会话连续性。 | 5 |
| [#9905](https://github.com/earendil-users/pi/issues/9905) | **Anthropic thinking.display 始终发送为"summarified"，CLI 无法覆盖** — 用户无法从 CLI 将其改为"omitted"或完全省略该字段。 | 4 |

---

## 关键 PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| [#10057](https://github.com/earendil-works/pi/pull/10057) | **fix(tui): .stdout 消失时不退出进程** — 修复 EPIPE/ECONNRESET 处理，避免终端消失时产生虚假崩溃报告。 |
| [#10051](https://github.com/earendil-works/pi/pull/10051) | **feat(client): 为 MCP OAuth 动态客户端注册添加可操作错误映射** — 检测不支持的 OAuth 服务器并提供用户可操作的指导。 |
| [#10050](https://github.com/earendil-works/pi/pull/10050) | **fix(coding-agent): 将扩展控制台输出移出交互式 TUI** — 防止扩展代码的 `console.error()`/日志干扰 TUI 显示。 |
| [#10044](https://github.com/earendil-works/pi/pull/10044) | **fix(ai): 升级 openai SDK 至 7.19.0** — 新增 GPT-6 Fast 模式"fast"服务层支持；修复成本记录为 1x 而非 2x 的问题。 |
| [#10040](https://github.com/earendil-works/pi/pull/10040) | **feat(coding-agent): Codemode 和 MCP** — 大型 PR，为 Pi 添加 codemode 功能和 MCP 集成。 |
| [#10039](https://github.com/earendil-works/pi/pull/10039) | **fix(coding-agent): 在自定义主题中遵循 truecolor** — 在主题构建前从环境解析颜色模式。 |
| [#10037](https://github.com/earendil-works/pi/pull/10037) | **Perf/collapse historical tool output** — 工具输出渲染性能优化。 |
| [#10035](https://github.com/earendil-works/pi/pull/10035) | **Virtual models** — 实验性虚拟模型支持。 |
| [#10027](https://github.com/earendil-works/pi/pull/10027) | **fix(ai,coding-agent): 流式传输健壮性、推理限制、压缩有效性、编辑恢复** — OpenAI 兼容提供商的一系列健壮性修复。 |
| [#6933](https://github.com/earendil-works/pi/pull/6933) | **fix(coding-agent): 默认禁用 undici 空闲超时以支持本地 LLM** — 将默认值从 5 分钟改为禁用，以支持慢速本地后端（vLLM、LM Studio、Ollama）。 |

---

## 功能请求趋势

1. **可配置 TUI 行为** — 鼠标滚动步长配置（#9758）、全屏鼠标追踪开关（#8913）、转录中隐藏工具行（#10011）
2. **双向思考层级循环** — 多个请求（#3790、#6281）希望在循环推理级别时支持反向快捷键
3. **提供商定价准确性** — OpenRouter 成本计算使用最便宜提供商，导致 2-3 倍低估（#9980）
4. **Prompt/RPC 处置可见性** — 请求在 RPC 响应中添加 `data.disposition` 字段以区分已处理 vs 已加入队列的 prompt（#9098）
5. **TypeScript 7 迁移** — 用稳定的 TypeScript 7 替代 `@typescript/native-preview` 和已弃用包（#9965）

---

## 开发者痛点

- **压缩中的思考文本** — 序列化包含所有思考块，导致使用推理模型的长会话无法自动压缩（#10033）
- **会话持久化间隙** — 会话文件直到首个 assistant 消息才写入；首轮失败会丢失整个会话（#10000）
- **定价错误** — OpenRouter 成本计算不准确；GPT-6 Fast 层记录错误价格（#9980、#10034）
- **终端/stdout 处理** — stdout 失败时进程退出，使丢失终端看起来像崩溃（#10056，已通过 #10057 修复）
- **工具调用渲染 bug** — 字符串拼接而非数值相加导致 `read` 工具行号错误（#9887）
- **流式传输健壮性** — SSE 流处理多个问题：空响应、轮次边界错误（#9974、#9918、#10048）

---

*数据来源：GitHub — 2026-09-26*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest into Simplified Chinese. I need to:

1. Translate the content while preserving the Markdown structure exactly
2. Keep all URLs, issue/PR references, version numbers, file paths, etc. as-is
3. Use natural technical Chinese register
4. Output ONLY the translation with no preamble or explanation

Let me go through each section and translate it appropriately:

1. Title - Qwen Code 社区简报 (Community Digest)
2. Today's Highlights
3. Releases
4. Hot Issues - 需要翻译issue标题和内容
5. Key PR Progress - 翻译PR标题
6. Hot Discussions
7. Feature Request Trends
8. Developer Pain Points

I'll translate while maintaining the exact Markdown structure, tables, formatting, etc.</think>

# Qwen Code 社区简报 — 2026-09-26

## 1. 今日要闻

Qwen Code 项目发布了 **v0.24.6** 版本，同时带来了托管代理（Managed Agent）架构的多项改进。Java SDK 现已支持托管 Harness 私有客户端，核心团队则修复了多个 P1 级问题，包括 vendored 工具（ripgrep）执行权限丢失以及 PreToolUse 钩子竞态条件等问题。托管代理提案（#12380）持续推进，已合并双路径架构定义和工作区绑定契约。

---

## 2. 版本发布

| 版本 | 摘要 |
|------|------|
| **v0.24.6** | 标准版本 — 详见更新日志。 |
| **v0.24.5-nightly.20260925.c3a4058a0c** | 2026-09-25 的夜间构建版本。 |

**SDK 更新：**
- `sdk-typescript` v0.1.15 于 2026-09-24 发布。

---

## 3. 热门 Issue

| # | Issue | 优先级 | 为何重要 | 评论数 |
|---|-------|--------|----------|--------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | **proposal(serve): 定义托管代理双路径架构与分阶段交付** | P2 | 提出了分阶段托管代理架构，包含持久化会话、工作区绑定和可恢复的工具执行。这是多代理编排的基础设计。 | 21 |
| [#472](https://github.com/QwenLM/qwen-code/issues/472) | **is_background 属性缺失且非布尔值** | — | 长期存在的 bug，即使更新了内存文档，`is_background` 验证仍然失败。影响工具配置。 | 14 |
| [#11872](https://github.com/QwenLM/qwen-code/issues/11872) | **Web Terminal：macOS 上提示"PTY not available"** | P1 | Web Terminal 的 PTY 创建失败，原因是 `@lydell/node-pty` 已声明但未打包，且 macOS 代码签名阻止了本地安装的预构建。 | 14 |
| [#12416](https://github.com/QwenLM/qwen-code/issues/12416) | **Remote-SSH：POST /session 报错 `write EPIPE` / `BridgeChannelClosedError`** | P1 | 通过聊天面板创建会话时，Remote-SSH 伴随模式（v0.24.2）下每次都失败，而独立 CLI 则正常。 | 12 |
| [#8586](https://github.com/QwenLM/qwen-code/issues/8586) | **追踪 activeWork 和后台代理恢复** | P2 | 请求对深度守护进程健康状态和后台代理恢复路径进行显式 `activeWork` 追踪。 | 10 |
| [#8097](https://github.com/QwenLM/qwen-code/issues/8097) | **后台代理协调缺口** | P2 | 多个后台 Explore 子代理存在重复工作、过早完成以及非交互式 `send_message` 失败的问题。 | 9 |
| [#12589](https://github.com/QwenLM/qwen-code/issues/12589) | **功能请求：可选的系统一决策门** | P3 | 提议一个快速分类层（von-install + /superfast），以避免为"这是聊天消息吗？"这类cheap决策唤醒完整的系统二 LLM。 | 6 |
| [#12679](https://github.com/QwenLM/qwen-code/issues/12679) | **全新全局安装时 vendored ripgrep 权限为 0644** | P1 | 全新安装的 ripgrep 二进制文件没有执行权限，且没有自修复路径来恢复权限。 | 4 |
| [#12683](https://github.com/QwenLM/qwen-code/issues/12683) | **PreToolUse 钩子决策竞态：最后完成的钩子胜出** | P1 | 当多个钩子匹配一个工具调用时，`deny` 可能会被另一个钩子的 `allow` 静默覆盖——安全竞态条件。 | 4 |
| [#12699](https://github.com/QwenLM/qwen-code/issues/12699) | **web_fetch：https 升级回退遗漏 EHOSTUNREACH/ENETUNREACH** | P3 | 无法在 443 端口访问的纯 HTTP 主机在 https 升级失败后不会重试。 | 4 |

---

## 4. 关键 PR 进展

| PR | 标题 | 类型 | 意义 |
|----|------|------|------|
| [#12722](https://github.com/QwenLM/qwen-code/pull/12722) | **chore(release): v0.24.6** | 版本发布 | 自动同步 package.json 和 CHANGELOG.md 的版本发布。 |
| [#12709](https://github.com/QwenLM/qwen-code/pull/12709) | **feat(managed-agent): 允许无执行权限的工作区绑定会话** | 功能 | 新增 W0b 准入切片，用于托管代理会话——允许创建绑定到工作区的会话而不立即执行。 |
| [#11799](https://github.com/QwenLM/qwen-code/pull/11799) | **feat(computer-use): 通过 node_repl 中继让远程会话使用您的桌面** | 功能 | 允许在无头 Linux 服务器上运行的 Qwen Code 通过 node_repl 中继在用户的 Mac 上使用 Computer Use。 |
| [#12693](https://github.com/QwenLM/qwen-code/pull/12693) | **feat(core): 持久化托管会话日志与故障转移** | 功能 | 添加语义会话权限、JSONL/HTTP 存储适配器、检查点以及持久化会话的转录投射。 |
| [#12692](https://github.com/QwenLM/qwen-code/pull/12692) | **feat(managed-agent): Spring 控制平面与双路径 WebShell** | 功能 | 拆分 Spring 托管代理控制平面和可选的 Java 托管 WebShell 面板；持久化租户作用域会话。 |
| [#12689](https://github.com/QwenLM/qwen-code/pull/12689) | **fix(core): 在钩子聚合中优先最严格的 PreToolUse 权限决策** | Bug 修复 | 修复钩子聚合逻辑，使用最严格的决策（deny > ask > allow）而非最后配置胜出。 |
| [#12681](https://github.com/QwenLM/qwen-code/pull/12681) | **feat(sdk-java): 添加 W0a 托管工作区绑定契约** | 功能 | 实现托管代理提案的 W0a 切片——将新会话绑定到工作区。 |
| [#12673](https://github.com/QwenLM/qwen-code/pull/12673) | **fix(cli): 在托管 npm 更新激活时恢复 ripgrep 执行权限** | Bug 修复 | 修复自更新后 vendored ripgrep 变为不可执行的问题，在激活时恢复执行权限。 |
| [#12680](https://github.com/QwenLM/qwen-code/pull/12680) | **perf(cli): 当 env 文件仅包含模型凭证时保持原地运行** | 性能优化 | 当 `.env` 文件仅包含模型凭证/端点时，CLI 不再重启自身。 |
| [#12559](https://github.com/QwenLM/qwen-code/pull/12559) | **fix(cli): 匹配 ink 的 OpenTUI 弹出窗口几何与补全截断** | Bug 修复 | 修正 OpenTUI 弹出窗口渲染以符合 ink 的裁剪几何，并正确截断补全下拉框。 |

---

## 5. 热门讨论

*（数据源中未提供讨论内容。）*

---

## 6. 功能需求趋势

根据 Issue 和 PR 活动，以下功能方向需求最高：

1. **托管代理架构** — 双路径会话管理、工作区绑定、持久化日志/故障转移以及后台代理恢复是当前主导主题。W0a/W0b 契约定义正在积极实现中。

2. **多代理协调** — 后端子代理之间的重复工作、过早完成以及非交互式 `send_message` 失败等问题仍有待解决（#8097）。

3. **系统一决策门** — 轻量级分类层以避免为cheap决策唤醒完整 LLM（#12589）。

4. **代理团队可见性** — 请求在实时代理列表中显示代理团队成员（#11069）。

5. **Computer Use 的桌面中继** — 通过 node_repl 中继实现远程会话访问本地桌面（#11799）。

---

## 7. 开发者痛点

| 痛点 | 频率 | 根本原因 |
|------|------|----------|
| **Ripgrep 执行权限在安装/自更新时丢失** | 高（多个 issue） | npm/pnpm 打包仅对 `bin` 条目保留执行权限；全新安装和自更新都未能恢复权限。 |
| **PreToolUse 钩子竞态条件** | 高 | 同一工具调用上的多个钩子导致最后完成的胜出——deny 会被 allow 静默覆盖。 |
| **Remote-SSH 会话失败** | 中 | 伴随模式下每次 POST /session 都报 `write EPIPE` / `BridgeChannelClosedError`；独立 CLI 正常。 |
| **macOS 上 Web Terminal PTY 不可用** | 中 | `@lydell/node-pty` 未打包，macOS 代码签名阻止预构建。 |
| **Batch API 绕过固定调度器** | 中 | Batch API 上传直接调用全局 `fetch`，忽略配置的调度器——在代理/TLS 拦截环境下失败。 |
| **VP 模式内容截断** | 低 | 终端缓冲区模式在底部截断内容，无滚动。 |

---

*基于 GitHub 数据生成 — 2026-09-26*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*