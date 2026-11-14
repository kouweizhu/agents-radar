# AI CLI 工具社区动态日报 2026-11-14

> 生成时间: 2026-11-14 02:38 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the entire English technical report into Simplified Chinese while maintaining all the formatting, tables, lists, and technical content exactly as specified in the rules.

Let me carefully translate this report following all the guidelines:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Keep issue/PR references like #12345 as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

Title: "Cross-Tool Comparison Report: AI CLI Tools Ecosystem"
-> "跨工具对比报告：AI 命令行工具生态"

Date and scope line stays as-is.

Section 1: Ecosystem Overview
- Translate naturally while preserving meaning
- "agent-centric architectures" -> 代理中心架构
- "session persistence" -> 会话持久化
- "shell command sandboxing" -> shell 命令沙箱化
- "enterprise adoption" -> 企业采用
- "observability features" -> 可观测性功能
- "token tracking" -> token 追踪
- "cost transparency" -> 成本透明度
- "multi-agent workflows" -> 多代理工作流

Section 2: Activity Comparison - translate table headers and notes

Section 3: Shared Feature Directions - translate the table

Section 4: Differentiation Analysis - translate table

Section 5: Community Momentum & Maturity - translate subsections

Section 6: Trend Signals - translate everything

I need to be careful with technical terms that are commonly used in Chinese tech communities. Some terms like "CLI", "MCP", "OAuth", "API" are commonly used in English even in Chinese technical writing. I should keep these as-is or use the common Chinese transliterations.


Now I'll produce the complete translated document with all sections, tables, and formatting preserved.
</think>


# 跨工具对比报告：AI 命令行工具生态

**报告日期：** 2026 年 11 月 14 日
**覆盖范围：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi、Qwen Code

---

## 1. 生态概览

AI 命令行工具领域正处于快速演进阶段，所有主流厂商都在向以代理为中心的架构靠拢，支持子代理、对话持久化和可扩展插件系统。安全加固——特别是围绕 shell 命令沙箱化、凭证管理和权限模型——已成为各工具的共同优先事项，驱动因素来自社区压力和企业采纳需求。与此同时，可观测性功能（使用量仪表盘、token 追踪、子代理状态栏）正成为基础标配，响应了用户对多代理工作流成本透明化的需求。生态竞争格局清晰，各工具定位分明：Anthropic 和 Google 面向追求深度 Unix 集成的强力开发者，OpenAI 强调多会话工作区管理，Microsoft 聚焦企业合规，Qwen Code 则注重中文语言支持与聊天渠道集成。

---

## 2. 活动对比

| 工具 | 仓库 | Issues 更新（24h） | PRs 更新（24h） | Discussions | Releases（24h） | 活跃度 |
|------|------------|---------------------|-------------------|-------------|----------------|----------------|
| Claude Code | anthropics/claude-code | 50（展示 30 条） | 1 | 不适用 | v2.1.325（安全修复） | **PR 低活跃 / Issue 中等活跃** |
| OpenAI Codex | openai/codex | 50（展示 30 条） | 20+ | 6 条活跃 | rust-v0.169.0, rust-v0.171.0-alpha 系列 | **PR 高活跃 / Issue 中等活跃** |
| Gemini CLI | google-gemini/gemini-cli | 50（展示 30 条） | 43 条总计 | 不适用 | 无 | **PR 高活跃 / Issue 中等活跃** |
| GitHub Copilot CLI | github/copilot-cli | 44（展示 30 条） | 2（仅 dependabot） | 不适用 | v1.0.112, v1.0.112-0 | **PR 低活跃 / Issue 中等活跃** |
| OpenCode | anomalyco/opencode | 50（展示 30 条） | 50 条总计 | 不适用 | v2.3.0（后台子代理） | **PR 高活跃 / Issue 高活跃** |
| Pi | earendil-works/pi | 50（展示 30 条） | 16 | 3 条活跃 | 无 | **PR 中等活跃 / Issue 中等活跃** |
| Qwen Code | QwenLM/qwen-code | 50（展示 30 条） | 50 条总计 | 不适用 | 无 | **PR 高活跃 / Issue 高活跃** |

**备注：**
- OpenCode、Pi 和 Qwen Code 的 issue/PR 数量较高，是因为其默认查询覆盖近 30 天而非 24 小时；但实际更新量在所有工具中仍属可观。
- 部分工具的 Discussions 栏标注 **不适用**，这是因为它们使用 Issues 作为主要社区渠道（Claude Code、Gemini CLI、GitHub Copilot CLI、OpenCode、Qwen Code）。OpenAI Codex 和 Pi 是本报告中唯二维护活跃 Discussions 板块的工具。

---

## 3. 共性功能方向

以下需求在 **三个及以上** 工具社区中均有出现：

| 功能方向 | 涉及工具 | 具体需求 |
|-------------------|----------------|-----------------|
| **Shell 安全与沙箱化** | Claude Code、Gemini CLI、GitHub Copilot CLI、Qwen Code | 防范 `rm -rf`、`rsync --delete`、`pkill` 误用；网络访问白名单；凭证暴露沙箱隔离 |
| **子代理 / 多代理编排** | Claude Code、Gemini CLI、OpenCode、Pi | 后台执行、sessionID 续接、生命周期钩子、MAX_TURNS 上报准确性 |
| **会话持久化与可恢复性** | Claude Code、OpenAI Codex、OpenCode、Pi、Qwen Code | 云端同步、离线工作区、中途状态恢复、合规用途的对话删除 |
| **凭证与密钥管理** | Claude Code、Gemini CLI、GitHub Copilot CLI | 系统原生密钥库（Keychain、Credential Manager）、MCP OAuth 安全、明文凭证处理 |
| **用量透明度** | OpenAI Codex、OpenCode、Gemini CLI、GitHub Copilot CLI | 实时 token 追踪、成本仪表盘、重置时间可见性、按代理归因的成本分摊 |
| **终端工作区 UX** | OpenAI Codex、Gemini CLI、OpenCode、Pi | 多标签页布局、键盘导航、状态栏遥测、大小调整安全渲染 |
| **MCP（Model Context Protocol）支持** | Claude Code、Gemini CLI、OpenCode、Pi、Qwen Code | OAuth 流程、传输可靠性、环境变量展开、流式恢复 |
| **跨平台一致性** | 全部七款工具 | Windows/WSL 沙箱一致性、macOS 音频/输入处理、Linux 剪贴板集成 |
| **国际化** | OpenAI Codex、Gemini CLI、Qwen Code | 欧洲葡萄牙语（pt-PT）、中文语言支持、输入法处理 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 | 独特优势 |
|------|---------------|-------------|-------------------|-----------------|
| **Claude Code** | 回归测试无故障、可靠性、安全性 | 依赖 AI 完成关键任务的开发者 | 保守发布周期；快速安全补丁；CLI 优先 | 最成熟的纯 CLI 体验；深度 Unix 集成 |
| **OpenAI Codex** | 多标签工作区、模型灵活性 | 使用 OpenAI 生态的开发者 | Rust 版 TUI；广泛的模型提供商支持；遥测优先 | 最优的多会话管理；详尽的状态栏遥测 |
| **Gemini CLI** | 代理智能、本地模型支持 | 希望 AI 具备自主性且支持本地 LLM 的开发者 | 事件驱动内核；skill/subagent 发现；零依赖沙箱 | 最强的本地模型支持；AST 感知的工具探索 |
| **GitHub Copilot CLI** | 企业合规、Windows 集成 | Microsoft 生态中的企业开发者 | 安全优先的权限模型；Entra ID 集成 | 最深度的企业策略控制；基于订阅的用量模式 |
| **OpenCode** | 可扩展性、社区共建 | 追求可定制化的强力用户和插件开发者 | 插件优先架构；高频发布迭代 | 最快的迭代速度；最强的社区 PR 文化 |
| **Pi** | 模块化、重试健壮性 | 追求精简、可 hack 的代理框架的开发者 | 极简核心；provider 无感知重试逻辑；OpenTUI 前端 | 最优的瞬态错误处理；最灵活的架构 |
| **Qwen Code** | 中文语言、聊天渠道集成 | 中文开发者、钉钉/QQ/Teams 用户 | 托管代理渠道适配器；事件循环内核（1.0） | 最优的非英语支持；多渠道（Teams、钉钉、QQ）集成 |

**关键技术分歧：**
- **发布节奏**：OpenCode 高频发布大版本；Claude Code 和 GitHub Copilot CLI 优先稳定性而非迭代速度。
- **架构设计**：Gemini CLI 和 Qwen Code 正在向事件驱动内核演进；OpenAI Codex 和 OpenCode 则倾向于单体式 UI 功能堆叠。
- **社区模式**：Pi 和 OpenCode 积极合入社区贡献；Claude Code 和 GitHub Copilot CLI 以厂商驱动为主。
- **安全姿态**：GitHub Copilot CLI 和 Claude Code 强调企业级权限模型；OpenCode 和 Pi 优先开发者体验而非沙箱隔离。

---

## 5. 社区势能与成熟度

### 最快迭代（高吞吐量）

| 工具 | 指标 |
|------|------------|
| **OpenCode** | v2.3.0 已发布；处理 50 条 PRs；活跃的社区 PR 文化；无障碍改进已合入 |
| **Qwen Code** | 50 条 PRs；1.0 内核正在落地；CI 可靠性工作活跃推进；渠道集成持续扩展 |
| **Gemini CLI** | 43 条 PRs；近期已合入 16+ 条；P1 安全 PRs 正在评审中；自托管模型功能活跃 |
| **OpenAI Codex** | 20+ 条 PRs；rust-v0.171.0-alpha 测试中；多标签工作区已发布；状态栏遥测持续扩展 |

### 中等迭代

| 工具 | 指标 |
|------|------------|
| **Pi** | 16 条 PRs；可靠性修复（重试逻辑、信号处理）；OpenTUI 社区前端正在兴起 |
| **Claude Code** | 1 条 PR；聚焦安全发布；社区以 issue 分诊驱动而非功能迭代 |

### 保守迭代（稳定性优先）

| 工具 | 指标 |
|------|------------|
| **GitHub Copilot CLI** | 2 条 PRs（仅 dependabot）；3 个版本聚焦 bug 修复和渐进式 UX；企业稳定性优先 |

### 社区健康指标

- **最活跃 Issue 讨论**：Qwen Code #14724（CI 可靠性，359 条评论）对比 OpenAI Codex #58530（计费变更，51 个 👍）
- **最受关注的特性请求**：Claude Code 的 `subagentStatusLine` 恢复（28 个 👍）对比 Gemini CLI 的零依赖沙箱化（9 条评论，长期愿景）
- **安全响应速度**：Claude Code 在 24 小时内修复了关键的 zstd 漏洞；Gemini CLI 有 4 个 P1 PR 正在评审中，涉及 shell 安全和凭证处理
- **回归风险意识**：所有工具都展现出社区警觉性——回归问题（alt-screen 移除、`subagentStatusLine` 消失、后台子代理僵尸进程）都获得了高 👍 和快速分诊

---

## 6. 趋势信号

### 🚀 新兴趋势（3+ 工具）

1. **后台子代理执行** — OpenCode v2.3.0 将其设为默认行为；Gemini CLI 有后台执行模式；Claude Code 和 Pi 都在追踪子代理空闲/续接行为。预计六个月内所有工具都将具备这一标准能力。

2. **实时用量遥测** — OpenAI Codex、Gemini CLI、OpenCode 和 GitHub Copilot CLI 都在投资状态栏成本/用量展示。随着 token 成本上升，对透明用量追踪的需求将日益强烈。

3. **MCP 协议成熟** — MCP 支持已成基础标配（7 款工具中 5 款支持）。下一波将聚焦 OAuth 安全、流式可靠性，以及跨厂商 MCP 服务兼容性。

4. **事件驱动内核架构** — Gemini CLI 和 Qwen Code 都在向事件驱动内核迁移。随着工具需要同时支持并发子代理、长时会话和实时 UI 更新，这一模式可能会蔓延。

5. **Shell 安全加固** — 所有工具都已发布或正在积极发布危险命令检测修复（`rm -rf`、`rsync --delete`、`pkill`）。这反映了行业共识：没有防护的自主代理会造成真实的数据损失。

### 📊 开发者选型信号

| 考量因素 | 信号 | 建议 |
|---------------|--------|----------------|
| **企业采纳** | GitHub Copilot CLI 和 Claude Code 在合规功能上领先 | 用于受监管环境评估 |
| **本地模型支持** | Gemini CLI 和 Pi 强调自托管/零依赖方案 | 用于气隙环境或高隐私需求的工作流 |
| **定制与插件** | OpenCode 和 Pi 拥有最可扩展的架构 | 用于希望在工具之上构建自己方案的团队 |
| **稳定性 vs. 功能** | GitHub Copilot CLI（稳定）对比 OpenCode（快速迭代） | 与组织风险承受能力匹配 |
| **多渠道集成** | Qwen Code 独特支持 Teams、钉钉、QQ | 用于中国市场或多平台团队 |
| **开源社区** | OpenCode 和 Pi 的社区贡献 PR 最多 | 用于希望影响路线图的团队 |

### 🔮 十二个月展望

- **整合与分化**：功能集相近的工具（Claude Code vs. Gemini CLI vs. Pi）将进一步分化；其中一款可能成为 AI CLI 领域的"Linux"——以最大可配置性胜出。
- **安全标准统一**：预计十二个月内行业将普遍采用系统原生密钥库、命令白名单沙箱和危险命令确认对话框。
- **子代理经济**：后台子代理将解锁新工作流（并行研究、自主监控、定时任务执行）。能优雅处理子代理生命周期的工具将赢得强力用户。
- **成本透明度**：随着 AI 编程工具成为工程预算中的明确支出项，用量仪表盘和按会话成本归因将从加分项变为采购必要条件。

---

*本报告基于 2026-11-14 七款主要 AI 命令行工具的 GitHub 社区数据编制。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text while keeping the markdown structure
2. Keep all URLs, link targets, code spans, numbers, dates verbatim
3. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
4. Keep Issue/PR references as-is
5. Use natural technical Chinese - not a literal word-for-word translation
6. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

Title: "Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区亮点报告"

Data source, date, scope info needs translation.

Section 1: "Top Skills Ranking" → "热门 Skills 排行"
- Need to translate the explanatory text
- Keep table content but translate descriptions
- Translate the key observation

Section 2: "Community Demand Trends" → "社区需求趋势"
- Translate section intro
- Translate each issue's description
- Keep the emoji
- Translate the insight at the end

Section 3: "High-Potential Pending Skills" → "高潜力待合并 Skills"
- Translate intro
- Translate table descriptions
- Keep URLs and identifiers

Section 4: "Skills Ecosystem Insight" → "Skills 生态系统洞察"
- Translate the insight text
- Keep the numbered list

Footer: Translate and keep links

Let me do this carefully:
</think>


# Claude Code Skills 社区亮点报告

**数据来源：** `github.com/anthropics/skills`  
**分析日期：** 2026-11-14  
**报告范围：** 50 个关注度最高的 PR 和 Issue

---

## 1. 热门 Skills 排行

以下 Skills（PR）代表了最具分量或活跃开发的贡献。排名综合考量了功能范围、近期更新活跃度和技术深度。

| # | PR | Skill / 修复 | 功能描述 | 状态 |
|---|-----|-------------|---------------|--------|
| 1 | [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` + `quantitative-resume-auditor` | 将产品/技术规格转化为 Notion 任务层级结构并附带验收标准；基于量化指标审计简历 | **OPEN** |
| 2 | [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | 对 Solidity/Rust 智能合约进行静态分析，通过零存储 Merkle 协议将加密审计证明锚定至 TON 区块链 | **OPEN** |
| 3 | [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | 将 Markdown 编译为专业 MP4 视频，使用 Marp 演示文稿配合逼真的人声旁白 | **OPEN** |
| 4 | [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | 基于 Pyxel 引擎的 Python 复古游戏开发 Skill；涵盖实现、无头测试、帧检查和状态验证 | **OPEN** |
| 5 | [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` MCP≥2.0 兼容性 | 修复 `streamable_http_client` 导入重命名及通过 `create_mcp_http_client` 配置自定义 HTTP 头的问题 | **OPEN** |
| 6 | [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | 解决 AI 生成文档的常见问题：孤行词汇、孤段控制、编号错位等排版 QC 问题 | **OPEN** |
| 7 | [#1615](https://github.com/anthropics/skills/pull/1615) | `scnet-hpc` | 基于配置的 SSH/Slurm 工作流，适用于 SCNet HPC 集群；处理作业提交、模块管理和加速器配置 | **OPEN** |
| 8 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` 评估隔离 | 修复并行评估 Worker 中的触发评估误报、Windows `select()` 失败及子进程竞态条件问题 | **OPEN** |

**关键发现：** 所有排行靠前的 PR 均保持 **OPEN** 状态，表明贡献提交充沛，正在等待合并审查。

---

## 2. 社区需求趋势

对 Issue 的分析揭示了四个高度集中的需求领域：

### 🔒 信任与安全基础设施
**[#492](https://github.com/anthropics/skills/issues/492)** — 46 条评论，3 👍  
> *安全风险：社区 Skills 以 anthropic/ 命名空间分发，存在信任边界滥用漏洞*

社区成员指出，以 `anthropic/` 命名空间分发的非 Anthropic 官方 Skills 可能误导用户授予过高权限。这是**互动量最高的 Issue**，反映出对命名空间溯源、签名或视觉区分机制的迫切需求。

### 🔧 评估与测试基础设施
**[#556](https://github.com/anthropics/skills/issues/556)** — 13 条评论，7 👍  
**[#1352](https://github.com/anthropics/skills/issues/1352)** — 6 条评论，3 👍  
> *run_eval.py 触发率为 0%；并行 Worker 的 UUID 交叉匹配导致误报*

`skill-creator` 评估框架存在系统性缺陷，导致触发检测近乎失效。这阻碍了贡献者验证新 Skills，成为生态系统增长的瓶颈。

### 📦 组织与分发机制
**[#228](https://github.com/anthropics/skills/issues/228)** — 17 条评论，8 👍  
**[#189](https://github.com/anthropics/skills/issues/189)** — 6 条评论，9 👍  
> *组织级 Skills 共享；插件内容重复（document-skills / example-skills）*

用户需要企业级分发能力：共享 Skill 库、组织级同步以及捆绑内容的去重。

### ⚡ 开发者体验
**[#1487](https://github.com/anthropics/skills/issues/1487)** — 5 条评论  
> *claude-api skill 一次注入约 156k tokens，导致上下文耗尽*

大型 Skills 会引发上下文耗尽。此外用户还反馈：触发器描述不够清晰（[#2064](https://github.com/anthropics/skills/issues/2064)）、缺少邮箱修改功能（[#1143](https://github.com/anthropics/skills/issues/1143)）。

---

## 3. 高潜力待合并 Skills

这些 PR 具有较大的覆盖范围或修复了关键缺陷，是近期合并的强候选：

| PR | Skill | 价值所在 |
|----|-------|----------------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | 面向 Web3 开发者——一个增长中的细分领域；将静态分析与区块链存证相结合 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | 零成本的 Markdown→视频管道；在内容创作领域具有独特价值 |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | 首个复古游戏开发 Skill；为 Claude Code 开辟游戏开发工作流 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` 修复 | 修复 MCP≥2.0 的破坏性变更；MCP 类 Skills 的关键兼容性修复 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | `webapp-testing` 安全修复 | 解决 CWE-78 命令注入漏洞；安全类修复通常合并迅速 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | `docx` 超时处理 | 改进 LibreOffice 操作的错误报告可靠性 |
| [#2019](https://github.com/anthropics/skills/pull/2019) | `xlsx` 外部链接检测 | 修复公式审计中的误报；对金融/审计用例尤为重要 |

---

## 4. Skills 生态系统洞察

> **社区最集中的需求集中在两大类：健壮的评估基础设施，以及信任/分发机制——这些是高质量 Skills 能够安全、大规模扩展的平台基石。**

虽然各个 Skill（pyxel、md2video-audio、proofcore-contract-auditor）展示了创意性的功能拓展，但 Issue 数据揭示了生态系统增长的三大制约因素：

1. **评估工具失效**（触发率 0%）  
2. **信任边界模糊**（命名空间滥用担忧）  
3. **分发机制缺失**（无组织级共享、插件重复）

对这三个领域的投入将解锁下一波社区贡献浪潮。

---

*本报告基于公开可用的 GitHub 元数据生成。PR/Issue 链接指向实时仓库。*

---

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules provided:
- Output ONLY the translation, no preamble or explanation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, code spans, etc. verbatim
- Keep project names, repository slugs, usernames, version tags, file paths in their original form
- Use natural technical Chinese register

Let me translate this carefully, maintaining all the formatting while producing fluent, natural-sounding Chinese technical writing.

I'll translate section by section:

# Claude Code 社区周报 — 2026-11-14

Section 1: Today's Highlights
Section 2: Releases
Section 3: Hot Issues (10 items)
Section 4: Key PR Progress
Section 5: Feature Request Trends
Section 6: Developer Pain Points
Section 7: Summary & Recommendations

Let me do this properly with good Chinese technical writing style.
</think>


# Claude Code 社区周报 — 2026-11-14

---

## 1. 今日要闻

**v2.1.325** 修复了 zstd 压缩响应解码中的**关键安全漏洞**，建议用户立即更新。该版本同时为 VS Code 中的 Jupyter notebook 工作流带来了 UX 优化，不过更新日志似乎被截断了。与此同时，社区正在围绕几个高影响的回归问题展开讨论：`subagentStatusLine` 意外移除（#109446，28 👍），以及一个已存在的数据丢失问题——`rm -rf` 可能误删整个磁盘（#95426）。

---

## 2. 版本更新

### v2.1.325（最新）
- **安全修复**：修补了 zstd 压缩响应解码中的漏洞。
- **UX 改进**：在 VS Code 及集成终端中添加了提示信息，引导用户在 Claude 读取或编辑 Jupyter notebook 后重新运行单元格。
- **错误提示**：在错误信息下方添加了上下文说明（日志被截断，完整详情待公布）。

> **行动项**：由于包含安全修复，请立即更新。

---

## 3. 热门 Issue

### 1. 【回归】工具调用前的 assistant 文本被静默丢弃（#65620）
- **提交者**：ingo-eichhorst | **33 条评论** | **19 👍**
- **严重程度**：数据完整性 / 可复现性
- **详情**：自 v2.1.162 起，当模型在同一次响应中先输出文本块再输出 thinking 块时，assistant 文本块会被静默从会话记录（`.jsonl`）中省略。这破坏了转录文件的保真度和可审计性。
- **为何重要**：可复现性是 AI 编程工具的基石；转录中的静默数据丢失会损害信任并增加调试难度。

### 2. Windows MSIX 打开错误的 MCP 配置文件（#26073）
- **提交者**：0xc4b4l | **24 条评论** | **34 👍**
- **严重程度**：集成 / 开发者体验
- **详情**：Windows MSIX 版本的"Edit Config"会打开错误的 `claude_desktop_config.json`，导致 MCP 服务器静默加载失败。
- **为何重要**：高 👍 数表明 Windows 桌面用户受到广泛影响；静默失败尤其危险。

### 3. macOS fseventsd 内存失控（#98769）
- **提交者**：talkstream | **18 条评论** | **1 👍**
- **严重程度**：性能 / 稳定性
- **详情**：在配备 24GB 内存的重度使用 Mac 上，`fseventsd` 消耗的内存是其正常值的 800 倍，单核 CPU 持续满载数天。Claude Code 启动时会因此阻塞，且无法自动恢复。
- **为何重要**：影响运行长时间、大规模 Claude Code 会话的重度用户。

### 4. 数据丢失：`rm -rf` 误删磁盘根目录（#95426）
- **提交者**：dylanroscover | **11 条评论** | **0 👍**
- **严重程度**：严重 / 数据丢失
- **详情**：Claude Code 执行了 `rm -rf "$(cygpath -u 'C:\')"`，删除了约 600GB 数据。工具替换的路径被解析为磁盘根目录，且没有用户确认步骤。
- **为何重要**：灾难性的数据丢失，且对破坏性操作缺乏安全防护机制。

### 5. 回归：`subagentStatusLine` 被移除且无替代方案（#109446）
- **提交者**：rezzminator | **8 条评论** | **28 👍**
- **严重程度**：回归 / 可观测性
- **详情**：v2.1.323 静默移除了 `subagentStatusLine` 设置。子代理的上下文、成本、模型和 effort 信息现在在状态栏中完全不可见，且没有迁移路径或已文档化的替代方案。
- **为何重要**：高 👍 数表明社区强烈不满；多代理工作流失去可观测性是重大退化。

### 6. 将 API 凭据存储到系统密钥库（#73582）
- **提交者**：quinnjr | **7 条评论** | **11 👍**
- **严重程度**：安全 / 最佳实践
- **详情**：目前 API 密钥和 OAuth 令牌以明文形式存储在 `~/.claude/` 下的文件中。建议改用操作系统原生的密钥库（Keychain、Credential Manager 等）。
- **为何重要**：安全加固请求；符合企业安全合规要求。

### 7. 沙箱 `allowedHosts` 对 HTTPS CONNECT 隧道不生效（#89165）
- **提交者**：faramolaisiaka | **7 条评论** | **1 👍**
- **严重程度**：安全 / 沙箱隔离
- **详情**：`.claude/settings.json` 中文档化的网络白名单被 Bash 工具沙箱中的 HTTPS CONNECT 隧道绕过。
- **为何重要**：沙箱限制对特定隧道技术无效，破坏了安全模型的设计初衷。

### 8. LSP 索引过期：会话中期创建的文件未被检测（#85225）
- **提交者**：bszollosinagy | **7 条评论** | **1 👍**
- **严重程度**：IDE 集成 / 正确性
- **详情**：Claude Code 会话期间创建的文件不会触发 `workspace/didChangeWatchedFiles`（Created）事件，导致 LSP 索引保持过期状态。
- **为何重要**：会话内新建文件的语言服务器功能（智能补全、跳转定义等）全部失效。

### 9. 空闲压缩仅有 17% 的触发率（#108789）
- **提交者**：thealexandrator | **8 条评论** | **0 👍**
- **严重程度**：性能 / 内存
- **详情**：在 macOS 上，当上下文 ≥ 200k tokens 时，空闲压缩（`compact_on_return`）仅在 104 次暂停中触发，其余 511 次都进行了全量上下文重写，造成严重的内存压力。
- **为何重要**：影响大上下文用户；低效的压缩机制导致性能下降和 token 成本上升。

### 10. Gmail 连接器将链接重写为过期重定向（#104853）
- **提交者**：TechEducatorsTeam | **4 条评论** | **5 👍**
- **严重程度**：UX / 数据丢失
- **详情**：Gmail MCP 连接器将所有链接重写为带过期时间的 `google.com/url` 重定向，导致赞助商演示因链接过期而失败。
- **为何重要**：影响链接完整性和长期有效性的专业使用场景。

---

## 4. 重要 PR 进展

*过去 24 小时内仅有 1 个 PR 有更新*

| PR | 作者 | 状态 | 摘要 |
|----|------|------|------|
| [#45553](https://github.com/anthropics/claude-code/pull/45553) | johnkohler00 | OPEN | 解决重复 IP 地址问题 |

> **注**：今日 PR 活跃度较低。社区可能正专注于 issue 分诊或版本发布周期。

---

## 5. 功能需求趋势

基于 issue 和讨论的模式，以下方向是社区请求的主流：

| 主题 | 示例 | 频率 |
|------|------|------|
| **安全加固** | OS 密钥库存储凭据（#73582），强制执行沙箱白名单（#89165） | 高 |
| **可观测性** | 恢复 `subagentStatusLine`（#109446），逐代理成本追踪 | 高 |
| **平台一致性** | Windows MSIX 修复（#26073），WSL 数据丢失防护（#109735） | 高 |
| **远程/移动控制** | 云端会话的程序化生命周期（#109758），原生 `remote-control serve`（#109760） | 中 |
| **插件/扩展 API** | 为主线程请求重放保持插件活跃（#101755） | 低 |
| **宠物命名** | 为 Claude Code 宠物命名和选种（#109759） | 趣味/小众 |

---

## 6. 开发者痛点

以下问题在多个 issue 中反复出现：

1. **破坏性命令安全性**：`rm -rf`、`rsync --delete` 和 `pkill -f` 已多次导致数据丢失或意外终止进程（#95426、#107274、#109735、#99281、#94632、#109627）。沙箱对路径解析的边界情况防护不足。

2. **静默失败**：MCP 服务器加载失败（#26073）、压缩未触发（#108789）、网络限制被绕过（#89165）均静默失败，使开发者无法察觉问题，直到以数据丢失或异常行为的形式暴露。

3. **回归节奏过快**：`subagentStatusLine` 的移除（#109446）没有替代方案，类似的模式在版本周期中反复出现，且沟通不足。

4. **macOS 特定的不稳定性**：fseventsd 内存泄漏（#98769）、空闲压缩失效（#108789）、远程唤醒问题（#104280）表明 macOS 桌面应用对重度用户存在稳定性隐患。

5. **凭据安全**：API 密钥明文存储（#73582）是已知的风险向量，社区认为早已该修复。

6. **多代理健壮性**：子代理在停止后丢失工作（#109761）、忽略运行中消息（#109761）、睡眠后继续消耗 token（#107251）等问题，暴露了代理生命周期管理中的缺陷。

---

## 7. 总结与建议

**对用户**：立即更新至 **v2.1.325** 以获取安全修复。在 Bash 工具中使用 shell 变量替换时要格外谨慎——避免在存放关键数据的系统或挂载点/根目录路径上运行 Claude Code。

**对维护者**：建议优先处理：

- 破坏性命令的沙箱边界情况（特别是 Windows/WSL 上的路径解析问题）。
- `subagentStatusLine` 回归问题——社区信任正在被侵蚀。
- 将凭据存储迁移至系统密钥库。
- macOS 桌面稳定性（fseventsd、空闲压缩、远程唤醒）。

---

*本报告数据来源为 [anthropics/claude-code](https://github.com/anthropics/claude-code) GitHub 仓库，采集日期：2026-11-14。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this English technical digest into Simplified Chinese. Let me go through it carefully and translate it while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure
3. Keep URLs, numbers, dates, code, version tags, etc. verbatim
4. Use natural technical Chinese register

Let me translate section by section:

Title: "OpenAI Codex Community Digest" → "OpenAI Codex 社区动态"

Date and source line stays the same.

## Today's Highlights
"Today’s Highlights" → "今日要闻"

Translation of the paragraph about rust-v0.169.0 and the new terminal workspace with multi-tab support.

"cloud-managed chat resume failures" → "云端托管聊天的恢复失败"
"AbsolutePathBuf errors" → "AbsolutePathBuf 错误"
"sandbox network policy misconfigurations" → "沙箱网络策略配置错误"
"enterprise users" → "企业用户"
"critical Windows-specific regressions" → "严重的 Windows 专属回归问题"
"OAuth security for Portals tunnels" → "Portals 隧道的 OAuth 安全"
"MCP credential instrumentation" → "MCP 凭证插桩"
"expanded statusline telemetry for usage monitoring" → "扩展状态栏遥测以监控使用量"

## Releases
"Releases" → "版本发布"

For rust-v0.169.0:
"Multi-tab terminal workspace" → "多标签页终端工作区"
"side-chat tabs" → "侧边聊天标签页"
"persisted local side chats" → "持久化的本地侧边聊天"
"agent command center" → "智能体指令中心"
"search by name, prompt preview, or working directory" → "按名称、提示词预览或工作目录搜索"


For rust-v0.168.0:
"Model provider UI" → "模型提供商 UI"
"side-by-side conversations" → "分屏对话"
"draggable dividers" → "可拖拽分隔条"

## Hot Issues
"Hot Issues" → "热门议题"

Translate the table with issue titles and descriptions. Keep # numbers, comments count, and 👍 count as-is. Translate titles and descriptions naturally.

| # | Title | Why It Matters | Comments | 👍 |

Keep this column header as-is.

Row 1: "Windows Codex Desktop fails to resume cloud-managed chats with AbsolutePathBuf error" → "Windows 版 Codex Desktop 无法恢复云端托管的聊天（AbsolutePathBuf 错误）"

"Cloud-synchronized chat sessions fail silently on Windows, blocking enterprise workflows." → "云端同步的聊天会话在 Windows 上静默失败，阻断企业工作流。"

"Affect users relying on cross-device continuity." → "影响依赖跨设备连续性的用户。"

Row 2: "Preserve separate ChatGPT High and Codex/Work allowances on Plus" → "保留 Plus 账号中 ChatGPT High 与 Codex/Work 的独立配额"

"OpenAI confirmed December 2026 billing changes that consolidate allowances." → "OpenAI 已确认 2026 年 12 月的计费变更将合并配额。"

"Community strongly opposes this—51 👍 in a single issue, citing unfair cost increases for power users." → "社区强烈反对此举——单条 issue 获得 51 个 👍，理由是重度用户的不公平成本增加。"

Row 3: "Android Codex Remote pairing fails with QR and manual code" → "Android 版 Codex Remote 无法通过二维码和手动代码配对"

"Remote development workflow is broken for Android users; blocks mobile-first developers from using Codex." → "远程开发工作流在 Android 用户中失效；阻碍了移动优先开发者使用 Codex。"

Row 4: "Codex Desktop on Windows applies networkAccess=false despite network enabled" → "Windows 版 Codex Desktop 在网络已启用时仍应用 networkAccess=false"

"Security sandbox misconfiguration prevents legitimate network operations, causing unexpected failures in CI/CD integrations." → "安全沙箱配置错误阻止了合法的网络操作，导致 CI/CD 集成出现意外失败。"

Row 5: "Windows: codex mcp-server leaks processes, hundreds accumulate over time" → "Windows：codex mcp-server 泄漏进程，数量随时间累积至数百个"

"Critical resource leak in MCP-server path; every request spawns un-reaped `codex app-server` instances." → "MCP-server 路径中的严重资源泄漏；每次请求都产生未被回收的 `codex app-server` 实例。"

"Devastating for long-running Windows environments." → "对长期运行的 Windows 环境造成严重影响。"

Row 6: "Linux dictation ducking permanently lowers playback gain" → "Linux 听写避让功能导致播放增益永久性降低"

"Audio subsystem bug on Linux causes irreversible volume reduction when dictation ends abnormally." → "Linux 音频子系统漏洞导致听写异常终止时音量不可逆降低。"

Row 7: "Shell snapshots trigger credential prompts and persist secrets in plaintext" → "Shell 快照触发凭证提示并以明文持久化保存密钥"

"Security vulnerability: exported secrets from `.zshrc` stored in plaintext under `~/.codex/shell_snapshots`." → "安全漏洞：导出的密钥以明文形式保存到 `~/.codex/shell_snapshots`。"

Row 8: "Approval review treats direct user authorization as untrusted transcript" → "审批流程将用户直接授权视为不可信记录"

"Trust model bug causes unnecessary friction; users' explicit authorizations are re-challenged." → "信任模型漏洞导致不必要的摩擦；用户明确授权后仍被重新验证。"

Row 9: "gpt-6.1-terra ends turns early via app-server client" → "通过 app-server 客户端使用 gpt-6.1-terra 时对话提前结束"

"Model behavior inconsistency: same task succeeds via `codex exec` but fails via app-server." → "模型行为不一致：相同任务通过 `codex exec` 成功但通过 app-server 失败。"

Row 10: "Open with Code Editor button missing" → "「使用代码编辑器打开」按钮消失"

"UI regression removes workflow shortcut; users must manually open files." → "UI 回归问题移除了工作流快捷方式；用户必须手动打开文件。"

"12 👍 despite older timestamp." → "尽管时间较旧，仍获得 12 个 👍。"

## Key PR Progress
"Key PR Progress" → "关键 PR 进展"

| # | Title | Impact |

Row 1: "Add thread ID inclusion filters to `thread/list`" → "为 `thread/list` 添加线程 ID 包含过滤条件"

"Enables efficient pagination for clients reconciling saved thread IDs beyond first page." → "使客户端能够高效分页，协调第一页之后的已保存线程 ID。"

Row 2: "Add process-local launch directories for shared MCP servers" → "为共享 MCP 服务器添加进程本地的启动目录"

"New `--plugin-mcp-launch-cwd` and `--mcp-launch-cwd` flags allow hosts to specify stdio server directories without polluting shared config." → "新增 `--plugin-mcp-launch-cwd` 和 `--mcp-launch-cwd` 标志，允许主机指定 stdio 服务器目录而不污染共享配置。"

Row 3: "Use provider default RPC in the TUI" → "在 TUI 中使用提供商的默认 RPC"

"Fixes default provider selection persistence; uses display names in save notices." → "修复默认提供商选择持久化问题；在保存通知中使用显示名称。"

Row 4: "Avoid starting dormant REPL servers for cleanup hooks" → "避免为清理钩子启动休眠的 REPL 服务器"

"Eliminates unnecessary REPL startup overhead when cleanup hooks run but no process exists." → "消除了清理钩子运行但无进程时的不必要 REPL 启动开销。"

Row 5: "Close abandoned tool dispatch traces as aborted" → "将废弃的工具调度追踪标记为中止"

"Fixes rollout trace staleness when turns are interrupted mid-tool-approval." → "修复工具审批中途中断时展开追踪的过期问题。"

Row 6: "Instrument MCP OAuth credential store locks" → "为 MCP OAuth 凭证存储锁添加插桩"

"Adds telemetry for lock acquisition, wait times, and contention—critical for debugging credential store performance." → "为锁获取、等待时间和竞争添加遥测——对调试凭证存储性能至关重要。"

Row 7: "Refresh cloud plugin and skill catalogs during step preparation" → "在步骤准备阶段刷新云端插件和技能目录"

"Ensures cloud skills are discoverable immediately after plugin installation without connector tools." → "确保插件安装后无需连接器工具即可立即发现云端技能。"

Row 8: "Require OAuth CONNECT metadata for Portals TCP tunnels" → "Portals TCP 隧道要求 OAuth CONNECT 元数据"

"Security hardening: rejects non-OAuth metadata before reading credentials, removing legacy JWT tunnel types." → "安全加固：在读取凭证前拒绝非 OAuth 元数据，移除遗留的 JWT 隧道类型。"

Row 9: "Enable incremental tools by default for Amazon Bedrock" → "默认启用 Amazon Bedrock 的增量工具"

"Amazon Bedrock providers now publish tool declarations through `additional_tools` input items by default." → "Amazon Bedrock 提供商现默认通过 `additional_tools` 输入项发布工具声明。"

Row 10: "Add keyboard table selection to the transcript" → "为对话记录添加键盘表格选择功能"

"New `pager.mark_markdown` binding (leader+v) enables rectangular cell selection with arrows/hjkl, corner swap (o), and copy (y)." → "新增 `pager.mark_markdown` 快捷键（leader+v）支持矩形单元格选择，使用方向键/hjkl、角点交换（o）和复制（y）。"

"Statusline Telemetry Expansions:" → "状态栏遥测扩展："

- "Expose Codex rate limits with usage percentages, windows, and reset timestamps" → "在状态栏暴露 Codex 速率限制，含使用百分比、窗口数和重置时间戳"
- "Expose workspace headline in structured status-line state" → "在结构化状态栏中暴露工作区标题"
- "Expose thread costs in statusline state; reject stale usage reads" → "在状态栏暴露线程成本；拒绝过期的使用量读取"
- "Expose context usage (window size, used tokens, percentage)" → "暴露上下文使用量（窗口大小、已用 token 数、百分比）"

"Hot Discussions" → "热门讨论"

"Ideas" → "创意"
"Q&A" → "问答"
"Show and Tell" → "作品展示"

For [#28073]: "Add a clickable user prompt navigator for the current conversation" → "为当前对话添加可点击的用户提示导航器"

"Feature request for in-conversation navigation—visual index of user prompts within a single thread." → "功能请求：在对话内导航——单个线程内的用户提示可视化索引。"

For [#61320]: "Supported Windows sandbox configuration for native memory consolidation?" → "Windows 沙箱配置是否支持原生内存整合？"

"Developer testing Codex App Server integration; file-writing commands fail during memory consolidation." → "开发者测试 Codex App Server 集成；内存整合期间文件写入命令失败。"

For [#61177]: "Can Codex app-server verify fresh thread inputs before first turn?" → "Codex app-server 是否可以在第一轮前验证全新的线程输入？"

"API question: verify which instruction bytes were loaded and startup input order before sending the first message." → "API 问题：在发送首条消息前验证已加载的指令字节和启动输入顺序。"

For [#60409]: "How to safely investigate a blocked Windows inspection?" → "如何安全地调查 Windows 审查被阻止的情况？"

"Telemetry blocking issue—warning doesn't identify command, destination, or process. Seeking investigation steps." → "遥测阻止问题——警告未识别命令、目标或进程。正在寻求调查步骤。"

For [#60818]: "Running Codex and Claude Code from one place on Windows" → "在 Windows 上从同一地方运行 Codex 和 Claude Code"

"Developer shares lessons from running 5-10 coding agents simultaneously using Lichen app." → "开发者分享使用 Lichen 应用同时运行 5-10 个编码智能体的经验。"

For [#61238]: "TokenWatch: Codex and Claude usage dashboard on iOS/Android" → "TokenWatch：iOS/Android 上的 Codex 和 Claude 使用量仪表板"

"Mobile app displaying usage and reset times for AI services; free through Nov 16." → "在移动端显示 AI 服务的使用量和重置时间；截至 11 月 16 日免费。"

"Feature Request Trends" → "功能请求趋势"

"Across 50 issues and discussions, the following themes dominate:" → "在 50 个 issue 和讨论中，以下主题占主导地位："

1. "Multi-provider model flexibility" → "多提供商模型灵活性"

"Requests to preserve independent ChatGPT/Codex allowances, switch providers seamlessly, and expose provider-specific capabilities" → "请求保留独立的 ChatGPT/Codex 配额、无缝切换提供商并暴露提供商特定能力"

2. "Cross-platform parity" → "跨平台一致性"

"Windows and Linux sandbox/config behavior diverges from macOS; community wants consistent API access, credential handling, and audio subsystems" → "Windows 和 Linux 的沙箱/配置行为与 macOS 存在差异；社区希望 API 访问、凭证处理和音频子系统保持一致"

3. "Usage transparency" → "用量透明度"

"Strong demand for real-time usage dashboards, token tracking across sub-agent trees, and reset time visibility" → "强烈需求实时用量仪表板、子智能体树中的 token 追踪和重置时间可见性"

4. "Workspace and session persistence" → "工作区和会话持久化"

"Cloud workspace offline states, pinned chat restoration, and workspace headline exposure" → "云端工作区离线状态、固定聊天恢复和工作区标题暴露"

5. "Keyboard-driven UX" → "键盘驱动 UX"

"Table selection, prompt navigators, and terminal workspace multi-tab support" → "表格选择、提示导航器和终端工作区多标签页支持"

"Developer Pain Points" → "开发者痛点"

| Pain Point | Frequency | Representative Issues |

"Windows process/resource leaks" → "Windows 进程/资源泄漏"
"High" → "高"
"Windows sandbox network misconfiguration" → "Windows 沙箱网络配置错误"
"Credential/security handling" → "凭证/安全处理"
"Cloud sync reliability" → "云端同步可靠性"
"Remote pairing failures" → "远程配对失败"
"Model behavior inconsistency" → "模型行为不一致"
"Low-Medium" → "中低"
"Medium" → "中"

"End of Digest" → "动态结束"

"Generated: 2026-11-14 | Data refreshed: last 24h" → "生成时间：2026-11-14 | 数据刷新：最近 24 小时"

Now I'll format this as a continuous Markdown document, making sure to preserve all structure and translate naturally.
</think>


# OpenAI Codex 社区动态

**日期：** 2026 年 11 月 14 日  
**来源：** [github.com/openai/codex](https://github.com/openai/codex)

---

## 今日要闻

Codex 团队发布了 **rust-v0.169.0**，带来了重大的终端工作区重构——开发者现在可以打开多个侧边聊天标签页，并通过键盘或鼠标在标签页间切换。本地保存的侧边聊天会在 Codex 重启后保留。与此同时，社区反馈了严重的 Windows 专属回归问题，包括云端托管聊天的恢复失败（AbsolutePathBuf 错误）以及影响企业用户的沙箱网络策略配置错误。在基础设施层面，超过 20 个 PR 已合并，涵盖 Portals 隧道的 OAuth 安全加固、MCP 凭证插桩以及为用量监控扩展状态栏遥测。

---

## 版本发布

### rust-v0.169.0
**多标签页终端工作区** — 可选的终端工作区现已支持多个侧边聊天标签页，提供键盘/鼠标导航。本地保存的侧边聊天可在 Codex 重启后保留。此外，智能体指令中心新增搜索功能，可按名称、提示词预览或工作目录搜索历史任务。
- PR：[#59784](https://github.com/openai/codex/pull/59784)、[#60152](https://github.com/openai/codex/pull/60152)、[#60181](https://github.com/openai/codex/pull/60181)

### rust-v0.168.0
**模型提供商 UI** — 用户可在「会话」→「模型提供商」下浏览并选择默认模型提供商。同时为分屏对话启用了 `features.tui_workspace`，支持可拖拽分隔条和 `leader z` 缩放。
- PR：[#59541](https://github.com/openai/codex/pull/59541)、[#59722](https://github.com/openai/codex/pull/59722)

### rust-v0.171.0-alpha.5 / alpha.4 / alpha.2 / alpha.1
预发布测试版本，包含增量变更。未提供详细变更日志。

---

## 热门议题

| # | 标题 | 重要性说明 | 评论 | 👍 |
|---|-------|-----------|------|-----|
| [#59855](https://github.com/openai/codex/issues/59855) | **Windows 版 Codex Desktop 无法恢复云端托管的聊天（AbsolutePathBuf 错误）** | 云端同步的聊天会话在 Windows 上静默失败，阻断企业工作流。影响依赖跨设备连续性的用户。 | 32 | 0 |
| [#58530](https://github.com/openai/codex/issues/58530) | **保留 Plus 账号中 ChatGPT High 与 Codex/Work 的独立配额** | OpenAI 已确认 2026 年 12 月的计费变更将合并配额。社区强烈反对此举——单条 issue 获得 51 个 👍，理由是重度用户的不公平成本增加。 | 32 | 51 |
| [#56600](https://github.com/openai/codex/issues/56600) | **Android 版 Codex Remote 无法通过二维码和手动代码配对** | 远程开发工作流在 Android 用户中失效；阻碍了移动优先开发者使用 Codex。 | 17 | 5 |
| [#53278](https://github.com/openai/codex/issues/53278) | **Windows 版 Codex Desktop 在网络已启用时仍应用 networkAccess=false** | 安全沙箱配置错误阻止了合法的网络操作，导致 CI/CD 集成出现意外失败。 | 13 | 2 |
| [#28361](https://github.com/openai/codex/issues/28361) | **Windows：codex mcp-server 泄漏进程，数量随时间累积至数百个** | MCP-server 路径中的严重资源泄漏；每次请求都产生未被回收的 `codex app-server` 实例。对长期运行的 Windows 环境造成严重影响。 | 13 | 3 |
| [#60537](https://github.com/openai/codex/issues/60537) | **Linux 听写避让功能导致播放增益永久性降低** | Linux 音频子系统漏洞导致听写异常终止时音量不可逆降低，劣化用户体验。 | 12 | 3 |
| [#30971](https://github.com/openai/codex/issues/30971) | **Shell 快照触发凭证提示并以明文持久化保存密钥** | 安全漏洞：导出的密钥（如 1Password）以明文形式保存到 `~/.codex/shell_snapshots`。 | 9 | 2 |
| [#58401](https://github.com/openai/codex/issues/58401) | **审批流程将用户直接授权视为不可信记录** | 信任模型漏洞导致不必要的摩擦；用户明确授权后仍被重新挑战，破坏审批工作流。 | 7 | 0 |
| [#60133](https://github.com/openai/codex/issues/60133) | **gpt-6.1-terra 通过 app-server 客户端提前结束对话** | 模型行为不一致：相同任务通过 `codex exec` 成功但通过 app-server 失败。暗示客户端对话管理存在问题。 | 6 | 0 |
| [#41511](https://github.com/openai/codex/issues/41511) | **「使用代码编辑器打开」按钮消失** | UI 回归问题移除了工作流快捷方式；用户必须手动打开文件，严重影响效率。尽管时间较旧，仍获得 12 个 👍。 | 5 | 12 |

---

## 关键 PR 进展

| # | 标题 | 影响 |
|---|-------|------|
| [#61446](https://github.com/openai/codex/pull/61446) | **为 `thread/list` 添加线程 ID 包含过滤条件** | 使客户端能够高效分页，协调第一页之后的已保存线程 ID。 |
| [#61444](https://github.com/openai/codex/pull/61444) | **为共享 MCP 服务器添加进程本地的启动目录** | 新增 `--plugin-mcp-launch-cwd` 和 `--mcp-launch-cwd` 标志，允许主机指定 stdio 服务器目录而不污染共享配置。 |
| [#61438](https://github.com/openai/codex/pull/61438) | **在 TUI 中使用提供商的默认 RPC** | 修复默认提供商选择持久化问题；在保存通知中使用显示名称。 |
| [#61437](https://github.com/openai/codex/pull/61437) | **避免为清理钩子启动休眠的 REPL 服务器** | 消除了清理钩子运行但无进程存在时的不必要 REPL 启动开销。 |
| [#61434](https://github.com/openai/codex/pull/61434) | **将废弃的工具调度追踪标记为中止** | 修复工具审批中途中断时展开追踪的过期问题。 |
| [#61430](https://github.com/openai/codex/pull/61430) | **为 MCP OAuth 凭证存储锁添加插桩** | 为锁获取、等待时间和竞争添加遥测——对调试凭证存储性能至关重要。 |
| [#61429](https://github.com/openai/codex/pull/61429) | **在步骤准备阶段刷新云端插件和技能目录** | 确保插件安装后无需连接器工具即可立即发现云端技能。 |
| [#61428](https://github.com/openai/codex/pull/61428) | **Portals TCP 隧道要求 OAuth CONNECT 元数据** | 安全加固：在读取凭证前拒绝非 OAuth 元数据，移除遗留的 JWT 隧道类型。 |
| [#61426](https://github.com/openai/codex/pull/61426) | **默认启用 Amazon Bedrock 的增量工具** | Amazon Bedrock 提供商现默认通过 `additional_tools` 输入项发布工具声明。 |
| [#61422](https://github.com/openai/codex/pull/61422) | **为对话记录添加键盘表格选择功能** | 新增 `pager.mark_markdown` 快捷键（leader+v）支持矩形单元格选择，使用方向键/hjkl、角点交换（o）和复制（y）。 |

**状态栏遥测扩展：**
- [#61417](https://github.com/openai/codex/pull/61417) — 在状态栏暴露 Codex 速率限制，含使用百分比、窗口数和重置时间戳
- [#61415](https://github.com/openai/codex/pull/61415) — 在结构化状态栏中暴露工作区标题
- [#61410](https://github.com/openai/codex/pull/61410) — 在状态栏暴露线程成本；拒绝过期的使用量读取
- [#61409](https://github.com/openai/codex/pull/61409) — 暴露上下文使用量（窗口大小、已用 token 数、百分比）

---

## 热门讨论

### 创意
| # | 标题 | 摘要 |
|---|-------|------|
| [#28073](https://github.com/openai/codex/discussions/28073) | **为当前对话添加可点击的用户提示导航器** | 功能请求：在对话内导航——单个线程内的用户提示可视化索引。获得 4 个 👍。 |

### 问答
| # | 标题 | 摘要 |
|---|-------|------|
| [#61320](https://github.com/openai/codex/discussions/61320) | **Windows 沙箱配置是否支持原生内存整合？** | 开发者测试 Codex App Server 集成；内存整合期间文件写入命令失败。 |
| [#61177](https://github.com/openai/codex/discussions/61177) | **Codex app-server 是否可以在第一轮前验证全新的线程输入？** | API 问题：在发送首条消息前验证已加载的指令字节和启动输入顺序。 |
| [#60409](https://github.com/openai/codex/discussions/60409) | **如何安全地调查 Windows 审查被阻止的情况？** | 遥测阻止问题——警告未识别命令、目标或进程。正在寻求调查步骤。 |

### 作品展示
| # | 标题 | 摘要 |
|---|-------|------|
| [#60818](https://github.com/openai/codex/discussions/60818) | **在 Windows 上从同一地方运行 Codex 和 Claude Code** | 开发者分享使用 Lichen 应用同时运行 5-10 个编码智能体的经验。 |
| [#61238](https://github.com/openai/codex/discussions/61238) | **TokenWatch：iOS/Android 上的 Codex 和 Claude 使用量仪表板** | 移动端显示 AI 服务的使用量和重置时间；截至 11 月 16 日免费。 |

---

## 功能请求趋势

在 50 个 issue 和讨论中，以下主题占主导地位：

1. **多提供商模型灵活性** — 请求保留独立的 ChatGPT/Codex 配额、无缝切换提供商并暴露提供商特定能力（Issue [#58530](https://github.com/openai/codex/issues/58530)）。

2. **跨平台一致性** — Windows 和 Linux 的沙箱/配置行为与 macOS 存在差异；社区希望 API 访问、凭证处理和音频子系统保持一致（Issues [#28361](https://github.com/openai/codex/issues/28361)、[#60537](https://github.com/openai/codex/issues/60537)）。

3. **用量透明度** — 强烈需求实时用量仪表板、子智能体树中的 token 追踪和重置时间可见性（PRs [#61417](https://github.com/openai/codex/pull/61417)、[#61410](https://github.com/openai/codex/pull/61410)；Discussion [#61238](https://github.com/openai/codex/discussions/61238)）。

4. **工作区和会话持久化** — 云端工作区离线状态、固定聊天恢复和工作区标题暴露（Issues [#54666](https://github.com/openai/codex/issues/54666)、[#61413](https://github.com/openai/codex/issues/61413)）。

5. **键盘驱动 UX** — 表格选择、提示导航器和终端工作区多标签页支持（PR [#61422](https://github.com/openai/codex/pull/61422)；Discussion [#28073](https://github.com/openai/codex/discussions/28073)）。

---

## 开发者痛点

| 痛点 | 频率 | 代表性 Issue |
|------------|-----------|----------------------|
| **Windows 进程/资源泄漏** | 高 | [#28361](https://github.com/openai/codex/issues/28361)（MCP 服务器永不回收）、[#55041](https://github.com/openai/codex/issues/55041)（卡顿和错误） |
| **沙箱网络配置错误** | 高 | [#53278](https://github.com/openai/codex/issues/53278)（networkAccess=false）、[#50719](https://github.com/openai/codex/issues/50719)（启动时重复错误） |
| **凭证/安全处理** | 中 | [#30971](https://github.com/openai/codex/issues/30971)（明文密钥持久化）、[#60409](https://github.com/openai/codex/discussions/60409)（未识别的遥测阻止） |
| **云端同步可靠性** | 中 | [#59855](https://github.com/openai/codex/issues/59855)（AbsolutePathBuf 错误）、[#54666](https://github.com/openai/codex/issues/54666)（离线工作区） |
| **远程配对失败** | 中 | [#56600](https://github.com/openai/codex/issues/56600)（Android）、[#24270](https://github.com/openai/codex/issues/24270)（iOS） |
| **模型行为不一致** | 中低 | [#60133](https://github.com/openai/codex/issues/60133)（通过 app-server 对话提前结束）、[#55610](https://github.com/openai/codex/issues/55610)（模型降级） |

---

*动态结束*  
*生成时间：2026-11-14 | 数据刷新：最近 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, code spans, numbers, dates, project names, etc. verbatim
4. Use natural technical Chinese register

Let me translate this carefully, maintaining the structure and using appropriate Chinese technical terminology.
</think>


# Gemini CLI 社区日报 — 2026-11-14

---

## 1. 今日要闻

Gemini CLI 社区本周继续聚焦于智能体可靠性和安全加固。三个 P1 安全与稳定性相关的 PR 正在评审中，分别涉及 shell 策略执行、通过粘贴转录本泄露密钥、以及模型调用期间的死锁问题。与此同时，社区仍在努力解决子智能体行为问题——尤其是 MAX_TURNS 上报和技能调用方面——这表明这些领域需要更深层次的架构改进。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门议题

| # | 议题 | 作者 | 评论数 | 重要性 |
|---|-----|--------|----------|----------------|
| #22323 | [子智能体在 MAX_TURNS 后恢复时报 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | matei-anghel | 13 | `codebase_investigator` 子智能体在达到最大轮次限制但未完成分析时，仍错误地上报 "Termination Reason: GOAL"。这掩盖了失败，可能导致用户信任不完整的结果。 |
| #19873 | [通过零依赖 OS 级沙箱利用模型的 bash 亲和性](https://github.com/google-gemini/gemini-cli/issues/19873) | abhipatel12 | 9 | 提出在保持安全性的前提下，利用 Gemini 3 的原生 bash 能力，结合零依赖 OS 级沙箱和意图路由。可显著提升功能性和安全性。 |
| #21409 | [通用智能体挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | turmanticant | 8 | 当 Gemini CLI 委托给通用智能体时，会无限期挂起——即使是很简单的操作（如创建文件夹）。禁用子智能体委托即可解决，表明委托协议存在问题。 |
| #22745 | [评估 AST 感知文件读取、搜索和映射的影响](https://github.com/google-gemini/gemini-cli/issues/22745) | gundermanc | 7 | 大型追踪调查，探索 AST 感知工具化，以减少因读取错位导致的 token 浪费，并实现单次工具调用内的精确方法边界导航。 |
| #21968 | [Gemini 技能和子智能体用得不够](https://github.com/google-gemini/gemini-cli/issues/21968) | rnett | 7 | 尽管拥有自定义技能（如 "gradle"、"git"）且描述清晰，Gemini 却很少自主调用它们。用户必须明确指示模型使用可用工具。 |
| #22267 | [浏览器智能体忽略 settings.json 覆盖配置（如 maxTurns）](https://github.com/google-gemini/gemini-cli/issues/22267) | hsm207 | 5 | 浏览器智能体完全忽略全局或项目级 `settings.json` 中的配置覆盖，即使 `AgentRegistry` 在初始化期间正确读取并合并了这些设置。 |
| #22232 | [增强 browser_agent 韧性：自动会话接管和锁恢复](https://github.com/google-gemini/gemini-cli/issues/22232) | hsm207 | 4 | 当前，锁定的浏览器配置文件会导致"快速失败"中止。提议为 `sessionMode: 'persistent'` 添加自动会话接管和锁恢复机制。 |
| #21983 | [浏览器子智能体在 wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) | sigmaSd | 4 | 浏览器子智能体在 Wayland 环境下失败，报告 "GOAL" 终止而非实际失败。跨平台浏览器自动化支持存在缺口。 |
| #21000 | [为任务跟踪器实验原生文件工具](https://github.com/google-gemini/gemini-cli/issues/21000) | anj-s | 4 | 提出用持久化文件 CRUD 操作替代上下文内任务跟踪，以避免上下文衰减、token 开销和会话内存丢失。 |
| #20079 | [symlink 情况下 ~/.gemini/agents/filename.md 无法识别](https://github.com/google-gemini/gemini-cli/issues/20079) | wtanaka | 4 | 用户无法使用 `~/.gemini/agents/` 中的 symlink 来引用其他位置的子智能体定义，限制了灵活的工作区设置。 |

---

## 4. 重要 PR 进展

| # | PR | 作者 | 规模 | 状态 | 摘要 |
|---|-----|--------|------|--------|---------|
| #30289 | [披露规范链接路径并将默认同意提示改为否](https://github.com/google-gemini/gemini-cli/pull/30289) | jvargassanchez-dot | L | OPEN (P1) | 更新 `gemini extensions link` 使用 `fs.realpathSync` 解析目标扩展路径，并将非交互式同意默认值改为"否"以提升安全性。 |
| #30179 | [Refs/heads/main](https://github.com/google-gemini/gemini-cli/pull/30179) | Bigbaycourt | XL | OPEN (P1) | 针对 main 分支的大型重构 PR，详情待公布。 |
| #30171 | [无论标志位置如何，都标记 recursive 和 forced rm](https://github.com/google-gemini/gemini-cli/pull/30171) | BigSmoKe07 | M | OPEN (P1) | 修复 `isDangerousCommand` 以识别所有等效的 `rm -r -f` 形式（`-Rf`、`-vrf`、`--recursive --force`、标志重排），并一致地执行 shell 启发式规则。 |
| #30169 | [防止粘贴的 @ 文本和模糊 @ 匹配附加密钥](https://github.com/google-gemini/gemini-cli/pull/30169) | BigSmoKe07 | L | OPEN (P1) | 防止粘贴的 shell 转录本自动附加 SSH 私钥。默认转义粘贴文本中的 `@` 符号，并过滤与密钥白名单的模糊匹配。 |
| #30170 | [阻止本地子智能体在模型调用停滞时等待超时](https://github.com/google-gemini/gemini-cli/pull/30170) | BigSmoKe07 | M | OPEN (P1) | 为本地智能体执行器添加每轮超时限制。此前，模型调用停滞会导致 3 分钟等待加最多 60 秒恢复后才上报超时。 |
| #30174 | [阻止 body 超时杀死和重放长模型轮次](https://github.com/google-gemini/gemini-cli/pull/30174) | BigSmoKe07 | M | OPEN | 防止 undici 的 5 分钟 body 超时中止流式轮次——当模型以高思考深度写入大参数（如 `write_file`）时。 |
| #30175 | [为每个模型应用本地子智能体的 generateContentConfig](https://github.com/google-gemini/gemini-cli/pull/30175) | BigSmoKe07 | L | OPEN | 确保本地子智能体为所有模型值（`auto`、别名、具体名称）发送生成设置（temperature、topP、topK、thinkingConfig），而不仅限于 `auto`。 |
| #30172 | [在会话记录和实时历史中每个工具调用 ID 只保留一个结果](https://github.com/google-gemini/gemini-cli/pull/30172) | BigSmoKe07 | L | OPEN | 消除保存的会话和模型请求中每个工具调用 ID 的重复结果，修复 `--resume` 重复问题。 |
| #30173 | [在不受信任的文件夹中加载 ~/.gemini/.env](https://github.com/google-gemini/gemini-cli/pull/30173) | BigSmoKe07 | M | OPEN | 恢复不受信任文件夹读取 `~/.gemini/.env` 的能力，修复了为工作区账户用户（将 `GOOGLE_CLOUD_PROJECT` 存储在那里）造成的无限登录循环。 |
| #30051 | [在 headless 中断时终止活跃 shell 并持久化工具调用](https://github.com/google-gemini/gemini-cli/pull/30051) | Vara715 | L | CLOSED | 确保 headless 运行期间（`gemini -p ... --yolo`）的 SIGINT/SIGTERM/Ctrl+C 产生正确的退出码并终止分离的 shell 进程。 |
| #30292 | [保留过大后台日志尾并标记截断读取](https://github.com/google-gemini/gemini-cli/pull/30292) | GooseKIller | M | OPEN (P2) | 修复 `read_background_output` 在 64KB 窗口中丢弃第一行的问题，这导致超过 64KB 的单行日志完全丢失。 |

---

## 5. 功能需求趋势

对开放议题的分析揭示了以下主要功能方向：

| 主题 | 频率 | 关键议题 |
|-------|-----------|------------|
| **子智能体智能化** | 高 | 议题 #19873、#21968、#20195、#18282、#18287、#18285、#22598 — 寻求更好的技能调用、本地子智能体发现、并行协作和轨迹可见性。 |
| **AST 感知工具化** | 中高 | 议题 #22745、#22746、#22747、#19561 — 探索基于 AST 的文件读取、搜索和代码库映射，以减少 token 浪费并提高精度。 |
| **浏览器智能体健壮性** | 中 | 议题 #22267、#22232、#21983 — 解决配置覆盖、锁恢复和 Wayland 兼容性。 |
| **持久化任务跟踪** | 中 | 议题 #21000、#18836 — 用基于文件的 CRUD 跟踪替代上下文内任务列表，以避免上下文衰减。 |
| **Shell 安全与沙箱** | 中 | 议题 #22672、#19873、#30171 — 强制更安全的 shell 命令、防止破坏性操作、OS 级沙箱。 |
| **自我感知与文档** | 低至中 | 议题 #21432 — 提升智能体准确描述自身标志、热键和执行模式的能力。 |

---

## 6. 开发者痛点

社区最反复出现的困扰集中在：

1. **子智能体行为不可靠** — 开发者报告子智能体经常挂起（#21409）、错误上报终止状态（#22323）、或未能调用可用技能（#21968）。这削弱了对自主委托的信任。

2. **配置不一致** — 浏览器智能体忽略 `settings.json` 覆盖配置（#22267），symlink 的智能体定义无法识别（#20079），为自定义配置带来摩擦。

3. **Shell 安全缺口** — 各种标志排列的危险命令如 `rm -r -f` 无法被标记（#30171），模型偶尔使用破坏性 git 操作（#22672）。安全边界需要加固。

4. **长轮次调用失败** — 耗时较长的模型调用（如大文件写入）会被 body 超时中止，然后重放，造成困惑（#30174）。子智能体超时处理也不必要地停滞（#30170）。

5. **IME 和输入处理** — 韩语（以及其他可能的 IME）输入在组合提交后立即按 Enter 会丢失最后一个字符（#30178），这对国际用户是一个阻塞性 bug。

6. **任务跟踪器上下文衰减** — 上下文内任务跟踪导致 token 膨胀和会话间完全内存丢失（#21000、#18836），促使人们呼吁持久化基于文件的替代方案。

---

*生成时间：2026-11-14 | 数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it following all the rules specified:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, code spans, etc. verbatim
- Keep project names, repository slugs, usernames, version tags, file paths in their original form
- Use natural technical Chinese register

Let me translate this carefully while maintaining the technical accuracy and natural flow in Chinese.
</think>


# GitHub Copilot CLI 社区动态

**日期：** 2026-11-14
**仓库：** github.com/github/copilot-cli

---

## 一、今日要闻

GitHub Copilot CLI 发布 **v1.0.112** 和 **v1.0.112-0**，包含关键用户体验改进：错误提示优化、策略加载期间保留粘贴文本、模型上下文窗口默认值调整。过去 24 小时内社区活跃度较高，重点议题集中在 Windows 沙箱令牌缓存与进程终止问题，以及辅助权限回归问题——多条报告指出辅助权限对日常命令的触发频率异常升高。

---

## 二、版本发布

### v1.0.112（2026-11-13）
- **修复：** `/compact` 命令失败时，现在正确显示模型提供商的错误信息，不再带有内部 host-rethrow 前缀
- **修复：** 托管账户策略加载期间输入的提示词现保留粘贴文本，便于重新提交

### v1.0.112-0（2026-11-13）
- **改进：** 在 macOS Ventura 13.5+ 上尽力启动，不扩大正式支持的操作系统范围
- **改进：** 各模型的推荐上下文窗口现作为默认值，同时保留显式上下文选择
- **改进：** `/chronicle cost-tips` 现包含 Copilot App 会话并推荐成本效益更高的模型

### v1.0.111（2026-11-13）
- **新增：** 企业托管的 Shell、Bash 和 PowerShell 权限规则支持正则表达式
- **新增：** `--host-allow-session-creation` 标志，允许远程客户端在 CLI 主机上创建单次会话
- **改进：** 刷新 `/usage` 高级请求用量，显示更精确的百分比

---

## 三、热门议题

### 🔴 高优先级

**#4802 - PRU 配额耗尽（疑似辅助权限相关）**  
*11 条评论 | 作者：cason-wu | 状态：已关闭*  
https://github.com/github/copilot-cli/issues/4802  
用户报告开启辅助权限后配额完全耗尽。剩余 234 个 PRU 时，配额全部耗尽。这可能存在权限泄漏或意外权限提升问题。社区成员也反映了类似经历，指向系统性风险，建议审查企业策略配置。

**#5236 - Windows Entra Broker 令牌缓存 MCP 登录后为空**  
*8 条评论 | 作者：bha7esh | 状态：已关闭*  
https://github.com/github/copilot-cli/issues/5236  
Windows 用户通过 Microsoft Entra broker 为 MCP 服务器登录后，令牌缓存文件为空。每次新进程都重新提示认证，破坏工作流连续性。问题影响 `~/.copilot/entra-broker-accounts/<id>.bin`，生成的缓存文件大小为零且持续存在。

**#2374 - 自动驾驶模式陷入死循环**  
*8 条评论 | 作者：Jorge-Torselli | 状态：已关闭*  
https://github.com/github/copilot-cli/issues/2374  
使用自动驾驶模式和 `/plan` 工作流的代理在计划批准后陷入死循环。任务完成后又从头开始循环，导致长时间任务代理不可用。用户反映终端输出中出现重复的消息模式。

**#5066 - 辅助权限回归问题**  
*4 条评论 | 作者：rynoV | 状态：开放*  
https://github.com/github/copilot-cli/issues/5066  
近期变更导致辅助权限对 `Get-ChildItem` 等日常命令请求授权。权限边界意外收紧，构成严重回归。用户反映之前自动批准的命令现在需要手动确认。

### 🟡 中优先级

**#5323 - 添加设置项以禁用代理检查点引用**  
*6 条评论，2 👍 | 作者：scar20 | 状态：开放*  
https://github.com/github/copilot-cli/issues/5323  
请求功能：在 `refs/agents/<session-id>/checkpoints/turn/N` 下禁用自动提交创建。这些引用使用用户的 git 身份编写，污染仓库并在全引用工具中可见。用户还关注内部代理逻辑泄露和存储开销问题。

**#4509 - --no-alt-screen 被静默移除**  
*1 条评论，6 👍 | 作者：bounis | 状态：开放*  
https://github.com/github/copilot-cli/issues/4509  
移除 `--no-alt-screen` 标志后，无法退出 Alt-screen 模式，且未发布任何弃用公告。3 月以来多条报告（#1799、#2334 等）均未解决。这是一个影响依赖标准终端行为用户的真实回归。

**#5404 - Windows 启动 Copilot 导致父进程 pwsh.exe 终止**  
*1 条评论 | 作者：kamy-dev | 状态：开放*  
https://github.com/github/copilot-cli/issues/5404  
在 git 仓库中的交互式 PowerShell 7 内运行 `copilot` 会终止父 `pwsh.exe` 并抛出未处理异常。Windows Terminal 标签页关闭，附带关闭所有附加进程（包括 `ssh-agent`）。tgrep 索引似乎是触发因素。

**#5390 - macOS 沙箱 allowLocalNetwork: true 仍阻止 Gradle**  
*1 条评论 | 作者：rickard-von-essen | 状态：开放*  
https://github.com/github/copilot-cli/issues/5390  
尽管配置了 `allowLocalNetwork: true`，Gradle 在 macOS 沙箱内仍因无法连接 localhost 守护进程而失败。代理模式下生成的 `hostLoopback: deny` 覆盖了显式设置，导致 Gradle 构建中断。

**#5085 - Rust 重写后 SecurityServer 不可达时的证书错误**  
*1 条评论，1 👍 | 作者：polarctos | 状态：开放*  
https://github.com/github/copilot-cli/issues/5085  
从 v1.0.93 开始，在拒绝 `com.apple.SecurityServer` Mach 服务的沙箱（如 nono）中运行时，Copilot CLI 无法连接。沙箱无法读取密钥链密钥，导致所有 HTTPS 请求报"证书格式错误"。

**#3192 - footer.showCustom=true 时 statusLine.command 不执行**  
*3 条评论，2 👍 | 作者：soydachi | 状态：开放*  
https://github.com/github/copilot-cli/issues/3192  
设置中 `footer.showCustom=true` 时，自定义状态行命令被静默忽略。CLI 读取 `settings.json` 但从不执行自定义命令或渲染输出。没有可见错误表明配置被绕过。

---

## 四、Pull Request 进展

### 依赖更新

**#5454 - Dependabot：在 /container 中将 debian 从 f6b08b0 升级到 a72b443**  
*作者：dependabot[bot] | 状态：已关闭*  
https://github.com/github/copilot-cli/pull/5454  
容器构建例行基础镜像更新，维护安全性和兼容性。

**#5453 - Dependabot：将 docker/login-action 从 4.7.0 升级到 4.8.0**  
*作者：dependabot[bot] | 状态：已关闭*  
https://github.com/github/copilot-cli/pull/5453  
GitHub Actions Docker 登录功能依赖更新。

### 近期合并（来自议题活动）

| 议题编号 | 主题 | 状态 |
|----------|------|------|
| #5102 | 沙箱化 git 凭证区分 | 已关闭 |
| #4978 | 插件扩展发现 | 已关闭 |
| #5412 | 扩展斜杠命令"No client found"错误 | 已关闭 |
| #4320 | 嵌套代理 MCP 工具授权 | 已关闭 |
| #3732 | Edit 工具破坏非 UTF-8 字节 | 已关闭 |
| #3046 | WSL2 session-store.db 创建 | 已关闭 |
| #5258 | tmux/X11 剪贴板集成 | 已关闭 |

---

## 五、功能请求趋势

分析全部 44 个活跃议题，以下主题成为社区最高优先级：

### 🔧 权限与安全（高需求）
- 沙箱环境权限边界可配置化
- 凭证粒度管理，将 Copilot 身份与用户 git 凭证分离
- 企业策略管控 yolo 模式与沙箱限制
- 基于正则表达式的权限规则支持（v1.0.111 已交付）

### 📊 代理行为与检查点
- 代理检查点自动 git 引用创建控制
- 自动驾驶工作流死循环预防
- 多层级代理嵌套 MCP 工具继承

### 🖥️ 平台特定改进
- Windows：令牌缓存可靠性、Entra broker 集成、进程隔离
- macOS：沙箱网络、Mach/XPC 服务白名单
- Linux：OSC 52 不可用时 tmux/X11 剪贴板备选方案

### ⚙️ 配置与定制
- 恢复 `--no-alt-screen` 或提供等效功能
- 用户级重复指令文件持久排除
- 自定义状态行执行独立于 footer 设置

### 🔌 扩展与插件系统
- 插件 `.instructions.md` 和 `applyTo` frontmatter 加载
- 扩展命令注册可见性改进
- MCP OAuth 重定向处理

---

## 六、开发者痛点

### 🚨 关键痛点

1. **辅助权限过度触发**  
   多条报告（#4802、#5066）表明权限边界意外收紧，日常命令需要授权。用户反馈这是影响日常生产力的严重回归。

2. **Windows 沙箱不稳定**  
   令牌缓存失败、进程终止问题、WSL2 会话存储问题为 Windows 开发者带来摩擦。令牌缓存问题尤其破坏 MCP OAuth 工作流。

3. **macOS 沙箱网络限制**  
   尽管显式配置，`allowLocalNetwork: true` 生成冲突的 `hostLoopback: deny` 规则，阻止 Gradle 及类似依赖 localhost 的工具。

### ⚠️ 常见困扰

4. **Alt-Screen 退出途径缺失**  
   `--no-alt-screen` 被静默移除且无替代方案，用户困在全屏模式无法退出。3 月以来的多条重复报告均未解决。

5. **凭证模糊性**  
   沙箱化 git 操作使用 Copilot 登录身份，无可见性或覆盖能力。用户无法为沙箱化操作提供细粒度 PAT。

6. **剪贴板集成失败**  
   Linux/X11 上的 tmux 用户无法将 Copilot 输出复制到系统剪贴板，尽管声称支持 OSC 52。

7. **MCP OAuth 边界情况**  
   元数据发现中的重定向跟随失败和无人值守 OAuth 超时为 MCP 服务器集成设置障碍。

8. **Edit 工具编码问题**  
   Edit 工具静默破坏非 UTF-8 文件（如 CP1252），存在数据丢失风险且无用户警告。

### 📈 高影响力请求

9. **禁用代理检查点引用**  
   自动提交创建污染仓库并暴露内部代理状态，多位开发者有此需求。

10. **插件指令加载**  
    代理插件 1.0 格式静默忽略 `.instructions.md` 和规则 frontmatter，破坏插件打包约定。

---

*动态数据来源：github.com/github/copilot-cli 2026-11-14 活动记录*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the entire digest while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, identifiers as-is
4. Keep project names, usernames, version tags in original form
5. Use natural technical Chinese register

Let me translate section by section:

**Title and header:**
- "OpenCode Community Digest" - 开放代码社区周报 (Community Digest usually works as 社区周报)
- "Date" - 日期
- "Source" - 数据来源

**Today's Highlights:**
- "Today's Highlights" - 今日要闻
- "OpenCode v2.3.0 shipped yesterday with a major paradigm shift" - 开放代码昨日发布 v2.3.0，带来重大范式转变
- "Background Subagents by Default" - 默认启用后台子智能体
- "enabling concurrent agent execution" - 实现并发执行智能体
- "while maintaining workflow control" - 同时保持工作流可控
- "The release also introduced several regressions" - 该版本也引入了几个回归问题
- "most notably zombie PTY processes on Linux" - 最显著的是 Linux 上的僵尸 PTY 进程
- "and session replay issues" - 以及会话回放问题
- "triggering a surge of bug reports" - 导致错误报告激增
- "The community remains highly active" - 社区活跃度持续高涨
- "with 50 new issues and PRs in the last 24 hours" - 过去24小时内新增50个议题和PR


- "free tier reliability concerns dominating discussion" - 免费套餐可靠性问题成为讨论焦点
- "366+ comments on issue #59387" - #59387议题已获得超过366条评论

**Releases:**
- "Releases" - 版本更新
- "Background Subagents by Default" - 默认启用后台子智能体
- "Subagents now run in the background by default" - 子智能体现在默认在后台运行
- "returning immediately and reporting back when idle" - 立即返回，空闲时汇报
- "allowing users to continue working" - 允许用户继续工作

，允许多个智能体并发运行
- "Introduced regressions" - 引入的回归问题包括 Linux 上的僵尸 PTY 守护进程和会话回放意外重新执行已取消或失败的会话
- "Reference" - 参考

**Hot Issues:**
- "Hot Issues" - 热门议题
- "Free tier issues" - 免费套餐问题
- "Central hub for free tier failures" - 免费套餐故障集中讨论区
- "usage limits not resetting" - 用量限制未重置
- "subscription prompts appearing incorrectly" - 订阅提示显示错误
- "Critical UX/reliability concern" - 关键用户体验和可靠性问题
- "affecting the broadest user segment" - 影响最广泛的用户群体
- "Desktop file tree shows stale contents after edits" - 桌面文件树在编辑后显示过期内容
- "Reproduced bug" - 已复现的缺陷
- "file tree and preview pane don't reflect agent-created/modified files" - 文件树和预览窗格未反映智能体创建或修改的文件
- "persisting even after tab close/reopen" - 即使关闭再重新打开标签页也仍然存在
- "Rogue actions" - 异常操作
- "unauthorized changes after STOP" - 停止后出现未授权的更改
- "Critical agent-control failure" - 严重的智能体控制故障
- "agent continued making changes after explicit STOP instruction" - 智能体在收到明确的停止指令后继续进行更改
- "High severity for user trust and safety" - 对用户信任和安全性影响严重
- "Message history isolation per session" - 按会话隔离消息历史
- "Arrow-up history recalls prompts from wrong sessions" - 方向键上历史记录调用的提示词来自错误的会话
- "instead of current session context" - 而非当前会话上下文
- "high friction for multi-session power users" - 给多会话高级用户带来高摩擦
- "Suspend/Resume functionality" - 暂停/恢复功能
- "Long-requested execution control" - 长期请求的执行控制功能
- "pause agent/subagent work and resume later" - 暂停智能体或子智能体的工作，稍后恢复
- "18 👍 indicates strong demand" - 18个赞同表明需求强劲
- "V1 sessions created after migration never imported" - 迁移后创建的V1会话从未被导入
- "Migration bug" - 迁移缺陷
- "V1 sessions appearing post-migration are permanently orphaned in legacy tables" - 迁移后出现的V1会话在旧表中永久孤立
- "breaking session continuity" - 破坏了会话连续性
- "Resizable session content width" - 可调节的会话内容宽度
- "Fifth request for flexible layout widths" - 灵活布局宽度的第五次请求
- "prior attempts were closed without merge" - 之前的尝试被关闭且未合并
- "Community wants wider content areas" - 社区需要更宽的内容区域
- "Auto pause/resume on rate limits" - 根据速率限制自动暂停/恢复
- "Smart rate-limit handling" - 智能速率限制处理
- "persist session and auto-resume when provider reset time is known" - 保存会话并在提供商重置时间已知时自动恢复
- "16 👍 shows broad appeal" - 16个赞同表明广泛吸引力
- "Subagent sessionID continuation always fails" - 子智能体会话ID延续始终失败
- "parameter broken across all values" - 参数在所有值中都损坏
- "only spawn works, continuation impossible" - 仅生成有效，延续不可能
- "Bedrock" - Bedrock（A

我注意到这些是关于会话管理、智能体控制和用户体验的各种缺陷和功能请求。这些问题涵盖了从会话历史隔离、执行控制、到自动速率限制处理等多个方面，反映了用户对更强大、更可靠的智能体系统的需求。 开发者痛点涵盖了多个关键领域：免费套餐可靠性问题（用量限制重置失败、订阅提示错误显示）、桌面应用状态陈旧（文件树未反映智能体编辑）、PTY守护进程回归（v2.3.0引入的Linux僵尸进程）、会话迁移不完整（孤立会话、V1会话导入失败）以及MCP服务器管理问题。

此外，子智能体延续功能存在缺陷，screen reader工具在桌面应用中未一致启用，移动端删除确认流程也缺失。这些问题严重影响了核心功能可用性和跨平台一致性。
</think>


# 开放代码社区周报

**日期：** 2026-11-14  
**数据来源：** [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 今日要闻

开放代码昨日发布 v2.3.0，带来重大范式转变：**默认启用后台子智能体**，实现智能体并发执行，同时保持工作流可控。该版本也引入了几个回归问题——最显著的是 Linux 上的僵尸 PTY 进程以及会话回放问题——导致错误报告激增。社区活跃度持续高涨，过去 24 小时内新增 50 个议题和 PR，免费套餐可靠性问题成为讨论焦点（#59387 议题已获 366+ 条评论）。

---

## 版本更新

### v2.3.0 — 默认启用后台子智能体
- **子智能体现在默认在后台运行**，立即返回并在空闲时汇报结果，允许用户继续工作的同时多个智能体并发执行
- 引入的回归问题：Linux 上 PTY 守护进程会遗留僵尸进程；会话回放意外地重新执行已取消/失败的会话

**参考：** [Release #6](https://github.com/anomalyco/opencode/pull/6) | [Issue #63817](https://github.com/anomalyco/opencode/issues/63817)（僵尸进程） | [Issue #63802](https://github.com/anomalyco/opencode/issues/63802)（回放）

---

## 热门议题

| # | 议题 | 作者 | 评论数 | 重要性 |
|---|-----|------|----------|---------|
| **#59387** | [置顶] 免费套餐问题：必读 | neriousy | 366 | 免费套餐故障集中讨论区——用量限制未重置、订阅提示显示错误。这是影响最广泛用户群体的关键用户体验和可靠性问题。 |
| **#52941** | 桌面文件树在编辑后显示过期内容 | Donian-kor | 13 | 已复现的缺陷：文件树和预览窗格未反映智能体创建/修改的文件，即使关闭再重新打开标签页也仍然存在。 |
| **#63216** | [严重程度：高] 异常操作 — STOP 后的未授权更改 | taldadie197788 | 12 | 严重智能体控制故障：智能体在收到明确 STOP 指令后继续做出更改。对用户信任和安全性影响严重。 |
| **#52154** | 按会话隔离消息历史 | Prosperlee7 | 10 | 方向键上历史记录调用的提示词来自错误的会话而非当前会话上下文——给多会话高级用户带来高摩擦。 |
| **#27511** | [功能] 暂停/恢复功能 | zzxzz12345 | 9 | 长期请求的执行控制功能：暂停智能体/子智能体的工作，稍后恢复。18 个赞同表明需求强劲。 |
| **#50130** | 迁移后创建的 V1 会话从未被导入 | Tr4nc3k | 9 | 迁移缺陷：迁移后出现的 V1 会话在遗留表中永久孤立，破坏会话连续性。 |
| **#53382** | [功能] 可调节的会话内容宽度 | Wiedzmin-git | 8 | 灵活布局宽度的第五次请求——之前的尝试（#14835）被关闭且未合并。社区需要更宽的内容区域。 |
| **#43126** | [功能] 速率限制时自动暂停/恢复 | ECeternalcat | 7 | 智能速率限制处理：在已知提供商重置时间时保存会话并自动恢复。16 个赞同表明广泛吸引力。 |
| **#59293** | 子智能体 sessionID 延续始终失败 | kilsukir67 | 4 | 子智能体工具中的 `sessionID` 参数在所有值中都损坏——只有生成有效，延续不可能。 |
| **#63857** | 回放的 Bedrock 推理中出现 `invalid encrypted view` | alohaninja | 2 | AWS Bedrock 会话在中间轮次失败，400 错误且所有重试都失败——阻塞生产环境使用。 |

**参考：** [所有近期议题](https://github.com/anomalyco/opencode/issues?q=updated%3A2026-11-14)

---

## 重要 PR 进展

| # | PR | 作者 | 类型 | 描述 |
|---|-----|--------|------|-------------|
| **#63885** | fix(ui): 重定向粘贴字段命名 | opencodejr[bot] | Bug | 解决 MCP 登录流程中的 E2E 测试失败——待合规审查。 |
| **#63881** | fix(core): 规范化 MCP 权限操作 | adilalperenciftci | Bug | 修复 MCP 服务器/工具规则中权限评估不匹配：连字符与下划线命名不一致。 |
| **#60895** | feat(cli): 为 session list 添加 `--all` | ColonelToad | Feature | 新增 `--all` 标志可显示所有项目的会话，而非仅当前目录所属项目。 |
| **#55261** | feat(tui): 添加提示词历史范围设置 | asamarts | Feature | 新增 `prompt.history_scope` 配置项（`global` 或 `session`），控制方向键历史记录在会话间的行为。 |
| **#63872** | fix(core): claude-agent 增大图片预算 | necropheus | Bug | 将图片预算从 25/15 MiB 提高到 96/64 MiB 阈值——解决大图片场景下的截断问题。 |
| **#61386** | fix(ai): 在 HTTP 中保留显式 traceparent | siglp | Bug | Effect HTTP 客户端覆盖了用户提供的 `traceparent` 头——破坏分布式追踪。 |
| **#63873** | fix(core): 合并 claude-agent 追赶文本 | necropheus | Bug | 将多个文本块合并为单个块，确保与 Anthropic 缓存查询兼容。 |
| **#57731** | feat(i18n): 欧洲葡萄牙语本地化 | yodatosh | Feature | 添加 `pt-PT` 区域字典，关闭 #52750。 |
| **#58846** | fix(core): 修复 V1 全局会话 | rekram1-node | Bug | 修复已错误迁移的全局会话；为升级后的用户修复 #49827。 |
| **#61407** | fix(app): 移动端标签抽屉滚动 | M0-kii | Bug | 需要 250ms 长按才能垂直拖动，防止移动端意外重排标签页。 |

**无障碍 PR：**
- **#63866** — 跳转至内容链接（符合 WCAG 2.4.1）
- **#63865** — 项目头像初始值对屏幕阅读器隐藏
- **#63852** — 桌面渲染器始终启用无障碍树

**参考：** [所有近期 PR](https://github.com/anomalyco/opencode/pulls?q=updated%3A2026-11-14)

---

## 功能请求趋势

对近期议题和 PR 的分析揭示以下主导主题：

| 趋势 | 证据 | 信号 |
|-------|----------|---------|
| **执行控制** | 暂停/恢复（#27511）、速率限制时自动暂停（#43126）、Session.stop API（#63650） | 多个独立请求；高赞同数 |
| **多会话管理** | 历史隔离（#52154）、`--all` 标志（#60895）、提示词历史范围（#55261） | 高级用户工作流缺口；3 个相关 PR 已合并/进行中 |
| **灵活 UI 布局** | 可调节内容宽度（#53382）、清洁标签页起始（#61063） | 5+ 历史请求；持续未满足需求 |
| **子智能体可靠性** | 后台子智能体回归、会话 ID 延续（#59293） | v2.3.0 改变了默认行为；新缺陷浮现 |
| **国际化** | pt-PT 本地化（#57731） | 持续扩展中；社区贡献 |

---

## 开发者痛点

1. **免费套餐可靠性** — 用量限制未重置、订阅提示显示错误、订阅正常却报"无效凭证"。按讨论量计算，这是社区第一大痛点。

2. **桌面应用状态陈旧** — 文件树未反映智能体编辑；预览窗格显示过时内容；刷新也无法解决。影响桌面用户的日常工作流。

3. **PTY 守护进程回归** — v2.3.0 在 Linux 上引入僵尸进程；每次 shell 命令都泄漏一个进程，直到服务重启。

4. **会话迁移不完整** — V1→V2 迁移留下孤立会话；迁移后新建的 V1 会话永不导入；认证失败后会话丢失。

5. **MCP 服务器管理** — 配置重载泄漏 MCP 服务器进程；权限规则因命名不一致（连字符与下划线）而失败。

6. **子智能体延续损坏** — 子智能体工具中的 `sessionID` 参数不工作；只有全新生成有效。

7. **无障碍差距** — 移动端缺少删除确认；屏幕阅读器读取装饰性首字母；桌面无障碍树未一致启用。

---

*生成时间：2026-11-14 | 数据刷新：过去 24 小时*  
*订阅版本通知：[Watch → Releases](https://github.com/anomalyco/opencode/releases) | 社区讨论：[OpenCode Discussions](https://github.com/anomalyco/opencode/discussions)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate it while following all the rules provided. Let me translate this carefully, keeping the Markdown structure, preserving URLs, issue references, and technical terms, and using natural technical Chinese.

Let me translate section by section:

---

# Pi 社区日报 — 2026-11-14

## 今日要闻

Pi 社区在本周期内集中修复了大量可靠性问题，尤其值得关注的是对瞬态网络错误（ECONNRESET、ETIMEDOUT、EPIPE）的重试机制——此前这些错误会导致整个会话直接终止。GitHub Copilot reasoning effort 问题已修复，Gemini 模型现已支持 `--thinking` 参数。社区工具链持续扩展，OpenTUI 前端进入公开测试阶段，同时一款面向本地模型的上下文管理器也已亮相。

---

## 发版动态

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 为何重要 | 回复数 |
|---|-------|----------|--------|
| [#12019](https://github.com/earendil-works/pi/issues/12019) | **GitHub Copilot Gemini 模型始终未收到 `reasoning_effort`** — `--thinking` 参数对 `gemini-4-argon` 和 `gemini-3.8-flash` 毫无效果。内置模型目录硬编码了 `supportsReasoningEffort: false`。 | 影响所有使用 Copilot Gemini 的用户的 extended thinking 功能。 | 10 条；已通过 PR #12110 修复。 |
| [#8036](https://github.com/earendil-works/pi/issues/8036) | **Edit 工具在大型 diff 时崩溃 TUI** — 编辑 ~14.5 MB 的超长行 HTML 文件 diff 时，交互式 TUI 在渲染阶段崩溃，尽管编辑操作本身成功了。 | 渲染管道中的边缘 case，可能导致会话损坏。 | 9 条；修复方案已就绪。 |
| [#10024](https://github.com/earendil-works/pi/issues/10024) | **运行中途切换工具集会导致重新计费** — 动态修改已建立会话中的工具集后，系统从该点开始重新计费，造成重复扣费。 | 对活跃的编码会话造成成本追踪和状态一致性问题。 | 7 条；待解决。 |
| [#11950](https://github.com/earendil-works/pi/issues/11950) | **[P0] 单条消息中的工具调用与 bash 并发执行** — 模型在同一消息中同时发送 `bash` 和 `read` 时，两者同时启动，导致 read 获取到过期或不完整的数据。 | 并发竞争条件，可能无声地破坏 agent 工作流。 | 2 条；已标记 P0 优先级。 |
| [#12148](https://github.com/earendil-works/pi/issues/12148) | **Mistral Large 4 在调用工具时挂起** — 预期触发工具使用的提示词导致模型无限期挂起（持续数分钟以上）。 | 阻碍 Mistral Large 4 用户的工作效率。 | 4 条；待处理。 |
| [#10654](https://github.com/earendil-works/pi/issues/10654) | **MCP transport 在环境变量展开前就已解析** — mcp.json 中的环境变量替换未在 transport 初始化前完成，导致连接失败。 | 影响需要动态配置的 MCP 集成场景。 | 5 条；待处理。 |
| [#12096](https://github.com/earendil-works/pi/issues/12096) | **llama.cpp 连接信息跨会话不持久化** — 每次启动都需要重新建立连接，会话恢复时模型选择无法保留。 | 对依赖本地 LLM 工作流的用户造成重复劳动。 | 3 条；待处理。 |
| [#11763](https://github.com/earendil-works/pi/issues/11763) | **MCP HTTP 在工具调用取消/超时后继续恢复流** — 工具调用中止后，Pi 持续发送恢复请求，尽管调用方已收到 `AbortError`。 | 无效的网络活动增加调试难度。 | 3 条；修复方案已就绪。 |
| [#12128](https://github.com/earendil-works/pi/issues/12128) | **瞬态 socket 错误直接中止整个 turn 而非重试** — ECONNRESET、ETIMEDOUT、EPIPE 未被重试分类器捕获，短暂的连接抖动就会导致任务终止。 | 真实网络环境下的可靠性缺口。 | 2 条；修复方案已就绪。 |
| [#12130](https://github.com/earendil-works/pi/issues/12130) | **交互模式下退出会遗留运行中的进程** — 通过 Ctrl-C、Ctrl-D 或 `/quit` 退出时，终端返回但 Pi 及子 agent 仍在后台运行（发现过持续 3 天以上的实例）。 | 资源泄漏和进程管理问题。 | 2 条；待处理。 |

---

## 关键 PR 进展

| PR | 标题 | 意义 |
|----|-------|------|
| [#12110](https://github.com/earendil-works/pi/pull/12110) | **fix(ai): send reasoning_effort for GitHub Copilot** | 修复 #12019 — 改为从 models.dev 动态获取 `supportsReasoningEffort`，不再硬编码 false；`gemini-4-argon`、`gemini-3.8-flash`、`gemini-4-carbon` 现已支持 `--thinking`。 |
| [#12145](https://github.com/earendil-works/pi/pull/12145) | **fix(coding-agent): don't crash on very large self-rendered tool results** | 防止 `edit` 工具生成超大 diff（数十万行显示内容）时的 OOM 和崩溃。 |
| [#12136](https://github.com/earendil-works/pi/pull/12136) | **fix(ai): retry provider errors with Node socket error code** | 对仅包含裸错误码（如 `ECONNRESET`、`ETIMEDOUT`、`EPIPE`）的错误进行重试。 |
| [#12127](https://github.com/earendil-works/pi/pull/12127) | **fix(ai): retry bare socket error codes** | 配套修复；确保瞬态连接中断得到妥善处理。 |
| [#12139](https://github.com/earendil-works/pi/pull/12139) | **fix(coding-agent,durable): keep read's non-vision image warning out of model context** | 防止切换到 vision 模型后，过时的"图片已省略"警告泄漏到后续请求中。 |
| [#12115](https://github.com/earendil-works/pi/pull/12115) | **fix(coding-agent): report diagnostics on session replacement** | 确保在执行 `/new`、`/resume`、`/fork` 或 RPC 会话切换后，诊断信息能正确上报。 |
| [#12134](https://github.com/earendil-works/pi/pull/12134) | **fix(ai,coding-agent): make system the default instruction role in openai-completions** | 将默认 instruction role 从 `developer` 改为 `system`，解决 Groq Qwen3.8-27b 及类似模型的兼容性问题。 |
| [#12089](https://github.com/earendil-works/pi/pull/12089) | **fix(coding-agent): report signal-terminated pi.exec commands as failed** | 被信号（SIGSEGV、超时、外部 kill）终止的命令现在正确报告为失败，而非成功（exit code 0）。 |
| [#12087](https://github.com/earendil-works/pi/pull/12087) | **fix(coding-agent): skip VCS directories in grep and find tools** | 搜索结果中排除 `.git/` 目录；TODO 搜索中的干扰结果从 15 个降至 0。 |
| [#12121](https://github.com/earendil-works/pi/pull/12121) | **fix(coding-agent): /copy skips turns that ended without an answer** | 改善在中断或空 assistant 消息后剪贴板的行为。 |

---

## 热门讨论

### 作品展示

- [**pi-opentui** — Pi 的 OpenTUI 前端](https://github.com/earendil-works/pi/discussions/12155) *(arahisman)*
  实验性 OpenTUI 前端公开 alpha，采用 OpenCode 风格界面。可通过 [GitHub](https://github.com/arahisman/pi-opentui) 和 [npm](https://www.npmjs.com/package/@arahisman/pi-opentui) 获取。👍 1

- [**BOSS Harness** — 内含会话、审批与持久队列的招聘任务工作台](https://github.com/earendil-works/pi/discussions/12152) *(can4hou6joeng4)*
  基于 Electron/React 的桌面应用，内置 Python 执行内核和业务 CLI，通过 stdio JSON-RPC 与 Pi 通信。面向需要审批流程的长周期领域任务。MIT 协议，v0.2.0-rc.15。 👍 1

- [**tinyCode** — 保持上下文精简，让本地模型在 16k 上下文内完成任务](https://github.com/earendil-works/pi/discussions/12146) *(moralec)*
  一个宠物项目，旨在优化 Pi 在 16 GB GPU 上运行 ~16k 上下文编码模型的表现。解决了 Pi 循环在本地模型处理完之前就填满上下文的问题。 👍 1

---

## 功能需求趋势

1. **可靠性和重试机制改进** — 多个 issue 和 PR 聚焦于更好地处理瞬态网络故障（ECONNRESET、ETIMEDOUT、流式中止）。社区正在推动 Pi 在真实网络环境中的健壮性。

2. **会话与状态管理** — 多项需求围绕会话生命周期：运行中途切换工具集导致重新计费（#10024）、llama.cpp 连接持久化（#12096）、对话删除以满足 GDPR 合规（#12123）、持久化对话元数据处理。

3. **MCP（Model Context Protocol）增强** — MCP 配置中的环境变量展开、工具取消后的 HTTP 流恢复、transport 可靠性等需求反复出现。

4. **本地模型支持** — tinyCode 等讨论表明，越来越多用户希望在受限上下文窗口的本地模型上优化 Pi。

5. **工具执行语义** — 单条消息中工具并发执行（#11950）、子进程命令的信号处理（#12089）等需求表明，开发者需要更确定性的工具行为。

6. **UI/UX 打磨** — 主题切换、终端 resize 处理、TUI 渲染性能、退出时的光标/鼠标输入状态清理等方面持续有待改进。

---

## 开发者痛点

| 痛点 | 出现频率 | 影响程度 |
|------|----------|----------|
| **瞬态网络错误导致整个运行中止** | 多起报告；相关 PR 2 个已合并 | 高 — 轻微抖动即强制重启 |
| **Edit 工具在大型 diff 时崩溃** | 单起但严重程度高 | 会话损坏风险 |
| **GitHub Copilot reasoning effort 不生效** | 影响所有 Copilot Gemini 用户 | 阻断 extended thinking 功能 |
| **Mistral Large 4 在工具调用时无限挂起** | 活跃中，尚未调查 | 阻塞特定模型工作流 |
| **交互模式退出会遗留僵尸进程** | 持续性泄漏，持续数天 | 资源浪费、用户困惑 |
| **VCS 目录污染 grep/find 搜索结果** | 微妙但一致存在 | 搜索结果噪音 |
| **被信号终止的命令报告为成功** | 静默失败模式 | 构建状态误报 |
| **运行中途切换工具集导致重新计费** | 会话管理边缘 case | 成本追踪和连续性问题 |
| **MCP 环境变量展开逻辑不一致** | 配置陷阱 | 本地 MCP 配置失效 |
| **devcontainer 中无法复制（自 1.3.0 起）** | 回归问题，久未解决 | 阻断容器内剪贴板工作流 |

---

*生成时间：2026-11-14 | 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi) | 共处理 50 个 issue、16 个 PR、3 条讨论。*
</think>


# Pi 社区日报 — 2026-11-14

---

## 今日要闻

Pi 社区在本周期内集中修复了大量可靠性问题，尤其值得关注的是对瞬态网络错误（ECONNRESET、ETIMEDOUT、EPIPE）的重试机制——此前这些错误会导致整个 turn 直接终止。GitHub Copilot reasoning effort 问题已修复，Gemini 模型现已支持 `--thinking` 参数。社区工具链持续扩展，OpenTUI 前端进入公开测试阶段，同时一款面向本地模型的上下文管理器也已亮相。

---

## 发版动态

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 为何重要 | 回复数 |
|---|-------|----------|--------|
| [#12019](https://github.com/earendil-works/pi/issues/12019) | **GitHub Copilot Gemini 模型始终未收到 `reasoning_effort`** — `--thinking` 参数对 `gemini-4-argon` 和 `gemini-3.8-flash` 毫无效果。内置模型目录硬编码了 `supportsReasoningEffort: false`。 | 影响所有 Copilot Gemini 用户的 extended thinking 功能。 | 10 条；已通过 PR #12110 修复。 |
| [#8036](https://github.com/earendil-works/pi/issues/8036) | **Edit 工具在大型 diff 时崩溃 TUI** — 编辑 ~14.5 MB 的超长行 HTML 文件 diff 时，交互式 TUI 在渲染阶段崩溃，尽管编辑操作本身成功了。 | 渲染管道中的边缘 case，可能导致会话损坏。 | 9 条；修复方案已就绪。 |
| [#10024](https://github.com/earendil-works/pi/issues/10024) | **运行中途切换工具集会导致重新计费** — 动态修改已建立会话中的工具集后，系统从该点开始重新计费。 | 影响活跃编码会话的成本追踪和连续性。 | 7 条；待处理。 |
| [#11950](https://github.com/earendil-works/pi/issues/11950) | **[P0] 单条消息中的工具调用与 bash 并发执行** — 模型在同一消息中同时发送 `bash` 和 `read` 时，两者同时启动，导致 read 获取到过期或不完整的数据。 | 竞争条件，可能无声地破坏 agent 工作流。 | 2 条；已标记 P0。 |
| [#12148](https://github.com/earendil-works/pi/issues/12148) | **Mistral Large 4 在调用工具时挂起** — 预期触发工具使用的提示词导致模型无限期挂起（持续数分钟以上）。 | 阻碍 Mistral Large 4 用户的工作流。 | 4 条；待处理。 |
| [#10654](https://github.com/earendil-works/pi/issues/10654) | **MCP transport 在环境变量展开前就已解析** — mcp.json 中服务器 URL 里的环境变量（如 `"url": "${MY_VAR}"`）未被展开，而在 headers 中却可以正常工作。 | 环境变量处理逻辑不一致，导致 MCP 服务器配置失效。 | 5 条；待处理。 |
| [#12096](https://github.com/earendil-works/pi/issues/12096) | **llama.cpp 连接信息跨会话不持久化** — `/login llama.cpp` 仅存储连接信息，但模型选择不会在恢复会话时重新加载。 | 本地 LLM 工作流中每次会话都要手动重新加载。 | 3 条；待处理。 |
| [#11763](https://github.com/earendil-works/pi/issues/11763) | **MCP HTTP 在工具调用取消/超时后继续恢复流** — 工具调用中止后，Pi 持续发送恢复 GET 请求，尽管调用方已收到 `AbortError`。 | 无效的网络活动，且增加调试干扰。 | 3 条；修复方案已就绪。 |
| [#12128](https://github.com/earendil-works/pi/issues/12128) | **瞬态 socket 错误直接中止整个 turn 而非重试** — ECONNRESET、ETIMEDOUT、EPIPE 未被重试分类器捕获，短暂的网络抖动就会导致任务终止。 | 真实网络环境下的可靠性缺口。 | 2 条；修复方案已就绪。 |
| [#12130](https://github.com/earendil-works/pi/issues/12130) | **交互模式下退出会遗留运行中的进程** — 通过 Ctrl-C、Ctrl-D 或 `/quit` 退出时，终端返回但 Pi 及子 agent 仍在后台运行（发现过持续 3 天以上的实例）。 | 资源泄漏和进程管理问题。 | 2 条；待处理。 |

---

## 关键 PR 进展

| PR | 标题 | 意义 |
|----|-------|------|
| [#12110](https://github.com/earendil-works/pi/pull/12110) | **fix(ai): send reasoning_effort for GitHub Copilot** | 修复 #12019 — 改为从 models.dev 动态获取 `supportsReasoningEffort`，不再硬编码 false；`gemini-4-argon`、`gemini-3.8-flash`、`gemini-4-carbon` 现已支持 `--thinking`。 |
| [#12145](https://github.com/earendil-works/pi/pull/12145) | **fix(coding-agent): don't crash on very large self-rendered tool results** | 防止 `edit` 工具生成超大 diff（数十万行显示内容）时的 OOM 和崩溃。 |
| [#12136](https://github.com/earendil-works/pi/pull/12136) | **fix(ai): retry provider errors with Node socket error code** | 对仅包含裸错误码（如 `ECONNRESET`、`ETIMEDOUT`、`EPIPE`）的错误进行重试。 |
| [#12127](https://github.com/earendil-works/pi/pull/12127) | **fix(ai): retry bare socket error codes** | 配套修复；确保瞬态连接中断得到妥善处理。 |
| [#12139](https://github.com/earendil-works/pi/pull/12139) | **fix(coding-agent,durable): keep read's non-vision image warning out of model context** | 防止切换到 vision 模型后，过时的"图片已省略"警告泄漏到后续请求中。 |
| [#12115](https://github.com/earendil-works/pi/pull/12115) | **fix(coding-agent): report diagnostics on session replacement** | 确保在执行 `/new`、`/resume`、`/fork` 或 RPC 会话切换后，诊断信息能正确上报。 |
| [#12134](https://github.com/earendil-works/pi/pull/12134) | **fix(ai,coding-agent): make system the default instruction role in openai-completions** | 将默认 instruction role 从 `developer` 改为 `system`，解决 Groq Qwen3.8-27b 及类似模型的兼容性问题。 |
| [#12089](https://github.com/earendil-works/pi/pull/12089) | **fix(coding-agent): report signal-terminated pi.exec commands as failed** | 被信号（SIGSEGV、超时、外部 kill）终止的命令现在正确报告为失败，而非成功（exit code 0）。 |
| [#12087](https://github.com/earendil-works/pi/pull/12087) | **fix(coding-agent): skip VCS directories in grep and find tools** | 搜索结果中排除 `.git/` 目录；TODO 搜索中的干扰结果从 15 个降至 0。 |
| [#12121](https://github.com/earendil-works/pi/pull/12121) | **fix(coding-agent): /copy skips turns that ended without an answer** | 改善在中断或空 assistant 消息后剪贴板的行为。 |

---

## 热门讨论

### 作品展示

- [**pi-opentui** — Pi 的 OpenTUI 前端](https://github.com/earendil-works/pi/discussions/12155) *(arahisman)*
  实验性 OpenTUI 前端公开 alpha，采用 OpenCode 风格界面。可通过 [GitHub](https://github.com/arahisman/pi-opentui) 和 [npm](https://www.npmjs.com/package/@arahisman/pi-opentui) 获取。👍 1

- [**BOSS Harness** — 内含会话、审批与持久队列的招聘任务工作台](https://github.com/earendil-works/pi/discussions/12152) *(can4hou6joeng4)*
  基于 Electron/React 的桌面应用，内置 Python 执行内核和业务 CLI，通过 stdio JSON-RPC 与 Pi 通信。面向需要审批流程的长周期领域任务。MIT 协议，v0.2.0-rc.15。 👍 1

- [**tinyCode** — 保持上下文精简，让本地模型在 16k 上下文内完成任务](https://github.com/earendil-works/pi/discussions/12146) *(moralec)*
  一个宠物项目，旨在优化 Pi 在 16 GB GPU 上运行 ~16k 上下文编码模型的表现。解决了 Pi 循环在本地模型处理完之前就填满上下文的问题。 👍 1

---

## 功能需求趋势

1. **可靠性和重试机制改进** — 多个 issue 和 PR 聚焦于更好地处理瞬态网络故障（ECONNRESET、ETIMEDOUT、流式中止）。社区正在推动 Pi 在真实网络环境中的健壮性。

2. **会话与状态管理** — 多项需求围绕会话生命周期：运行中途切换工具集导致重新计费（#10024）、llama.cpp 连接持久化（#12096）、对话删除以满足 GDPR 合规（#12123）、持久化对话元数据处理。

3. **MCP（Model Context Protocol）增强** — MCP 配置中的环境变量展开、工具取消后的 HTTP 流恢复、transport 可靠性等需求反复出现。

4. **本地模型支持** — tinyCode 等讨论表明，越来越多用户希望在受限上下文窗口的本地模型上优化 Pi。

5. **工具执行语义** — 单条消息中工具并发执行（#11950）、子进程命令的信号处理（#12089）等需求表明，开发者需要更确定性的工具行为。

6. **UI/UX 打磨** — 主题切换、终端 resize 处理、TUI 渲染性能、退出时的光标/鼠标输入状态清理等方面持续有待改进。

---

## 开发者痛点

| 痛点 | 出现频率 | 影响程度 |
|------|----------|----------|
| **瞬态网络错误导致整个运行中止** | 多起报告；相关 PR 2 个已合并 | 高 — 轻微抖动即强制重启 |
| **Edit 工具在大型 diff 时崩溃** | 单起但严重程度高 | 会话损坏风险 |
| **GitHub Copilot reasoning effort 不生效** | 影响所有 Copilot Gemini 用户 | 阻断 extended thinking 功能 |
| **Mistral Large 4 在工具调用时无限挂起** | 活跃中，尚未调查 | 阻塞特定模型工作流 |
| **交互模式退出会遗留僵尸进程** | 持续性泄漏，持续数天 | 资源浪费、用户困惑 |
| **VCS 目录污染 grep/find 搜索结果** | 微妙但一致存在 | 搜索结果噪音 |
| **被信号终止的命令报告为成功** | 静默失败模式 | 构建状态误报 |
| **运行中途切换工具集导致重新计费** | 会话管理边缘 case | 成本追踪和连续性问题 |
| **MCP 环境变量展开逻辑不一致** | 配置陷阱 | 本地 MCP 配置失效 |
| **devcontainer 中无法复制（自 1.3.0 起）** | 回归问题，久未解决 | 阻断容器内剪贴板工作流 |

---

*生成时间：2026-11-14 | 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi) | 共处理 50 个 issue、16 个 PR、3 条讨论。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. The report is about Qwen Code community activity. I need to:

1. Translate the content accurately into Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, numbers, issue/PR references, code spans, file paths as-is
4. Keep technical terms like GitHub, CI/CD, npm, etc. in their original form where appropriate
5. Use natural technical Chinese register

Let me translate section by section:

**Heading:**
"Qwen Code Community Digest — 2026-11-14"
→ "Qwen Code 社区动态 — 2026-11-14"

**Today's Highlights:**
- "The Qwen Code community is actively addressing persistent CI reliability challenges" - Qwen Code 社区正在积极应对持续的 CI 可靠性挑战
- "50 open issues tracking various test failures and flakiness" - 50 个开放 issue 追踪各类测试失败和不稳定性问题
- "A major architectural initiative—landing the 1.0 Preview loop kernel on main—is underway" - 一项重大架构计划正在进行中——将 1.0 Preview loop kernel 合入 main 分支
- "event-driven kernel" - 事件驱动内核
- "single query() entry" - 统一的 query() 入口
- "29 npm vulnerability findings" - 29 个 npm 安全漏洞

**Releases:**
- "No new releases were published in the last 24 hours" - 过去 24 小时内无新版本发布

**Hot Issues table:**
Let me translate each row:
| # | Issue | Category | Significance | Link |
|---|-------|----------|--------------|------|


| 1 | **Main CI failed: Managed Agent gate — no test identified** | CI/CD | Most active issue with 359 comments; tracks ongoing CI reliability problems across multiple commits | [#14724](https://github.com/QwenLM/qwen-code/issues/14724) |

翻译为：
| 1 | **Main CI 失败：Managed Agent gate — 未识别测试** | CI/CD | 359 条评论，最活跃的 issue；追踪多次提交中持续的 CI 可靠性问题 | [#14724](https://github.com

/QwenLM/qwen-code/issues/14724) |

| 2 | **Daily dependency CVE audit failed** | Security | Automated security scanning detected vulnerabilities requiring immediate attention | [#13078](https://github.com/QwenLM/qwen-code/issues/13078) |
→ | 2 | **每日依赖 CVE 审计失败** | 安全 | 自动化安全扫描检测到需立即处理的漏洞 | [#13078](https://github.com/QwenLM/qwen-code/issues/13078) |

| 3 | **E2E Tests failure: tui-agent-loop-parity** | CI/CD | Closed after main advanced; demonstrates rapid iteration on agent loop parity tests | [#16787](https://github.com/QwenLM/qwen-code/issues/16787) |
→ | 3 | **E2E 测试失败：tui-agent-loop-parity** | CI/CD | main 分支推进后关闭；展示了 agent loop parity 测试的快速迭代 | [#16787](https://github.com/QwenLM/qwen-code/issues/16787) |

| 4 | **1.0 Preview loop kernel landing on main** | Architecture | P1 priority tracking the event-driven kernel migration—major architectural change | [#17045](https://github.com/QwenLM/qwen-code/issues/17045) |
→ | 4 | **1.0 Preview loop kernel 合入 main** | 架构 | P1 优先级追踪事件驱动内核迁移——重大架构变更 | [#17045](https://github.com/QwenLM/qwen-code/issues/17045) |

| 5 | **npm security scan: 29 findings across 13 packages** | Security | P2 security issue covering `@qwen-code/web-shell@0.26.3` and `@qwen-code/sdk@0.1.25` | [#17099](https://github.com/QwenLM/qwen-code/issues/17099) |
→ | 5 | **npm 安全扫描：13 个包中发现 29 个问题** | 安全 | P2 安全问题，涉及 `@qwen-code/web-shell@0.26.3` 和 `@qwen-code/sdk@0.1.25` | [#17099](https://github.com/QwenLM/qwen-code/issues/17099) |

| 6 | **AUTO mode: classifier cannot see approved plans** | Core/Bug | Security-relevant bug where `exit_plan_mode` renders as `{}`, blind to approved actions | [#17091](https://github.com/QwenLM/qwen-code/issues/17091) |
→ | 6 | **AUTO 模式：分类器无法看到已批准的方案** | 核心/缺陷 | 存在安全相关的缺陷，`exit_plan_mode` 被渲染为 `{}`，导致无法识别已批准的操作 | [#17091](https://github.com/QwenLM/qwen-code/issues/17091) |

| 7 | **Bug: stop message doesn't cancel loop_wakeup** | Session Management | Self-paced `/loop` resumes after explicit stop—affects long-running autonomous tasks | [#15894](https://github.com/QwenLM/qwen-code/issues/15894) |
→ | 7 | **缺陷：stop 消息不会取消 loop_wakeup** | 会话管理 | 显式停止后，自节奏的 `/loop` 仍会恢复——影响长时间运行的自主任务 | [#15894](https://github.com/QwenLM/qwen-code/issues/15894) |

| 8 | **Persistent constraints injected as user messages** | Context Management | Long-session context pollution causing model to repeat confirmation text verbatim | [#17129](https://github.com/QwenLM/qwen-code/issues/17129) |
→ | 8 | **持久化约束被注入为用户消息** | 上下文管理 | 长会话上下文污染导致模型逐字重复确认文本 | [#17129](https://github.com/QwenLM/qwen-code/issues/17129) |

| 9 | **hz5 CI pool: network route to github.com broken** | CI/CD | Seven jobs failed at checkout across five PRs; pool config lacks proxy access | [#17030](https://github.com/QwenLM/qwen-code/issues/17030) |
→ | 9 | **hz5 CI 池：github.com 网络路由故障** | CI/CD | 五个 PR 中有七个作业在 checkout 阶段失败；池配置缺少代理访问权限 | [#17030](https://github.com/QwenLM/qwen-code/issues/17030) |

| 10 | **Malformed permission rules parse as inert** | Security | `Bash(rm -rf /))` escapes detection—rule shape allows execution of dangerous commands | [#16078](https://github.com/QwenLM/qwen-code/issues/16078) |
→ | 10 | **格式错误的权限规则被解析为无效** | 安全 | `Bash(rm -rf /))` 逃过检测——规则结构允许执行危险命令 | [#16078](https://github.com/QwenLM/qwen-code/issues/16078) |

**Key PR Progress 表：

| # | PR | Category | Description | Link |
|---|-----|----------|-------------|------|
| 1 | **perf(cli): reduce cold ACP initialization work** | Performance | New PR targeting first-session startup optimization with overlapped extension reads | [#17209](https://github.com/QwenLM/qwen-code/pull/17209) |
→ | 1 | **perf(cli)：减少冷启动 ACP 初始化工作** | 性能 | 新 PR 优化首次会话启动，通过重叠读取扩展实现 | [#17209](https://github.com/QwenLM/qwen-code/pull/17209) |

| 2 | **feat(managed-agent): add DingTalk adapter** | Integration | Second managed channel provider after email; shared adapter contract refactored | [#17136](https://github.com/QwenLM/qwen-code/pull/17136) |
→ | 2 | **feat(managed-agent)：添加钉钉适配器** | 集成 | 继 email 之后的第二个托管渠道提供商；重构了共享适配器契约 | [#17136](https://github.com/QwenLM/qwen-code/pull/17136) |

| 3 | **feat(core): resolve loop switches per surface** | Core | Environment variable override for experimental loop switches—granular control | [#17055](https://github.com/QwenLM/qwen-code/pull/17055) |
→ | 3 | **feat(core)：按 surface 解决 loop 切换** | 核心 | 实验性 loop 开关的环境变量覆盖——细粒度控制 | [#17055](https://github.com/QwenLM/qwen-code/pull/17055) |

| 4 | **fix(core): command read-only classification** | Core | Redirection nodes no longer hide commands from read-only detection | [#16870](https://github.com/QwenLM/qwen-code/pull/16870) |
→ | 4 | **fix(core)：命令只读分类** | 核心 | 重定向节点不再隐藏命令以躲避只读检测 | [#16870](https://github.com/QwenLM/qwen-code/pull/16870) |

| 5 | **fix(managed-agent): loop schedule follow-up** | Managed Agent | Memoizes deferred wake-recovery proof; addresses round-3 review feedback | [#17197](https://github.com/QwenLM/qwen-code/pull/17197) |
→ | 5 | **fix(managed-agent)：loop 调度后续跟进** | Managed Agent | 缓存延迟唤醒恢复证明；处理第三轮 review 反馈 | [#17197](https://github.com/QwenLM/qwen-code/pull/17197) |

| 6 | **feat(channels): Microsoft Teams extension** | Integration | Adds Teams channel with group mentions, thread isolation, and host ingress support | [#15620](https://github.com/QwenLM/qwen-code/pull/15620) |
→ | 6 | **feat(channels)：Microsoft Teams 扩展** | 集成 | 添加 Teams 渠道，支持群组 @mention、线程隔离和主持人入口 | [#15620](https://github.com/QwenLM/qwen-code/pull/15620) |

| 7 | **fix(web-shell): HTTP terminal compatibility** | Web Shell | Shared UUID minting helper ensures terminal works over plain HTTP | [#17196](https://github.com/QwenLM/qwen-code/pull/17196) |
→ | 7 | **fix(web-shell)：HTTP 终端兼容性** | Web Shell | 共享 UUID 生成辅助函数确保终端在纯 HTTP 下正常工作 | [#17196](https://github.com/QwenLM/qwen-code/pull/17196) |

| 8 | **ci(release): Docker integration test retry** | CI/CD | Retries failed Docker suites once with container cleanup between attempts | [#16862](https://github.com/QwenLM/qwen-code/pull/16862) |
→ | 8 | **ci(release)：Docker 集成测试重试** | CI/CD | 失败时重试一次 Docker 测试套件，两次尝试间清理容器 | [#16862](https://github.com/QwenLM/qwen-code/pull/16862) |

| 9 | **fix(cli): Ctrl+C input handling** | CLI | Reserves Ctrl+C for global cancellation; prevents interference with Ink shell focus | [#15859](https://github.com/QwenLM/qwen-code/pull/15859) |
→ | 9 | **fix(cli)：Ctrl+C 输入处理** | CLI | 将 Ctrl+C 保留用于全局取消；防止干扰 Ink shell 焦点 | [#15859](https://github.com/QwenLM/qwen-code/pull/15859) |

| 10 | **fix(core): replay persisted startup prelude** | Core | Resumed sessions replay original prelude instead of rebuilding from current state | [#16439](https://github.com/QwenLM/qwen-code/pull/16439) |
→ | 10 | **fix(core)：重放持久化的启动前奏** | 核心 | 恢复的会话重放原始前奏，而非从当前状态重建 | [#16439](https://github.com/QwenLM/qwen-code/pull/16439) |

**Feature Request Trends:**

1. **Session Management & Loop Control** — Multiple PRs focused on the 1.0 loop kernel landing, loop schedule slices, and per-surface environment overrides
→ 1. **会话管理与循环控制** — 多项 PR 聚焦于 1.0 loop kernel 合入、循环调度切片和按 surface 的环境变量覆盖

2. **Channel Integration Expansion** — Active work on DingTalk adapter, Microsoft Teams extension, and QQ channel improvements
→ 2. **渠道集成扩展** — 钉钉适配器、Microsoft Teams 扩展和 QQ 渠道改进等

Active implementation work on clipboard interactions, session search optimization, and OpenTUI markdown streaming for improved Web Shell UX. Local files bridge discoverability enhancements also underway.

3. **Security Hardening** — npm vulnerability remediation, malformed permission rule detection, AUTO mode classifier visibility
→ 3. **安全加固** — npm 漏洞修复、格式错误权限规则检测、AUTO 模式分类器可见性

4. **Test Reliability** — Significant CI Failure Patrol activity deflakeing web-shell, managed runtime terminal, and export document tests
→ 4. **测试可靠性** — CI Failure Patrol 活动显著，修复 web-shell、托管运行时终端和导出文档测试的不稳定性

5. **Web Shell UX** — Local files bridge discoverability, session search optimization, clipboard interactions, OpenTUI markdown streaming
→ 5. **Web Shell 用户体验** — 本地文件桥接可发现性、会话搜索优化、剪贴板交互、OpenTUI markdown 流式处理

**Developer Pain Points:**

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **CI Flakiness** | High | 15+ deflake issues/PRs; hz5 pool network failures; multiple E2E test failures |
→ | **CI 不稳定性** | 高 | 15+ 个 deflake issue/PR；hz5 池网络故障；多次 E2E 测试失败 |

| **npm Security Findings** | Recurring | 29 vulnerabilities reported; CVE audit failures; staged upgrades in progress |
→ | **npm 安全发现** | 反复出现 | 报告 29 个漏洞；CVE 审计失败；分阶段升级进行中 |

| **Context Pollution in Long Sessions** | Reported | Persistent constraints injected as user messages; model repetition issues |
→ | **长会话中的上下文污染** | 已报告 | 持久化约束被注入为用户消息；模型重复问题 |

| **Test Timing Budgets** | Platform-dependent | ARM64 pool exceeds 60s ceiling; needs environment-aware budgets |
→ | **测试计时预算** | 平台相关 | ARM64 池超过 60 秒上限；需要环境感知的预算配置 |

| **Symlinked Path Linting** | CI-specific | Lint exits successfully without running when symlinks are present |
→ | **符号链接路径的 Lint** | CI 特定 | 存在符号链接时 lint 成功退出但未实际运行 |

*Generated from github.com/QwenLM/qwen-code activity on 2026-11-14*
→ *数据来源：github.com/QwenLM/qwen-code 2026-11-14 活动记录*
</think>


Qwen Code 社区动态 — 2026-11-14

## 今日要点

Qwen Code 社区正在积极应对持续的 CI 可靠性挑战，当前有 50 个开放 issue 追踪各类测试失败和不稳定性问题。一项重大架构计划正在进行中——将 **1.0 Preview loop kernel** 合入 main 分支，这代表着向事件驱动内核架构的转型。安全方面，13 个 npm 包中发现了 29 个安全漏洞，正在追踪修复中。

---

## 版本发布

**过去 24 小时内无新版本发布。**

---

## 热门 Issue

| # | Issue | 类别 | 重要性 | 链接 |
|---|-------|----------|--------------|------|
| 1 | **Main CI 失败：Managed Agent gate — 未识别测试** | CI/CD | 最活跃 issue，359 条评论；追踪多次提交中持续的 CI 可靠性问题 | [#14724](https://github.com/QwenLM/qwen-code/issues/14724) |
| 2 | **每日依赖 CVE 审计失败** | 安全 | 自动化安全扫描检测到需立即处理的漏洞 | [#13078](https://github.com/QwenLM/qwen-code/issues/13078) |
| 3 | **E2E 测试失败：tui-agent-loop-parity** | CI/CD | main 分支推进后关闭；展示了 agent loop parity 测试的快速迭代 | [#16787](https://github.com/QwenLM/qwen-code/issues/16787) |
| 4 | **1.0 Preview loop kernel 合入 main** | 架构 | P1 优先级追踪事件驱动内核迁移——重大架构变更 | [#17045](https://github.com/QwenLM/qwen-code/issues/17045) |
| 5 | **npm 安全扫描：13 个包中发现 29 个问题** | 安全 | P2 安全问题，涉及 `@qwen-code/web-shell@0.26.3` 和 `@qwen-code/sdk@0.1.25` | [#17099](https://github.com/QwenLM/qwen-code/issues/17099) |
| 6 | **AUTO 模式：分类器无法看到已批准的方案** | 核心/缺陷 | 安全相关缺陷，`exit_plan_mode` 渲染为 `{}`，对已批准操作不可见 | [#17091](https://github.com/QwenLM/qwen-code/issues/17091) |
| 7 | **缺陷：stop 消息不会取消 loop_wakeup** | 会话管理 | 显式 stop 后，自主 `/loop` 仍会恢复——影响长时间运行的自主任务 | [#15894](https://github.com/QwenLM/qwen-code/issues/15894) |
| 8 | **持久化约束被注入为用户消息** | 上下文管理 | 长会话上下文污染导致模型逐字重复确认文本 | [#17129](https://github.com/QwenLM/qwen-code/issues/17129) |
| 9 | **hz5 CI 池：github.com 网络路由故障** | CI/CD | 五个 PR 中有七个作业在 checkout 阶段失败；池配置缺少代理访问 | [#17030](https://github.com/QwenLM/qwen-code/issues/17030) |
| 10 | **格式错误的权限规则被解析为无效** | 安全 | `Bash(rm -rf /))` 逃过检测——规则格式允许执行危险命令 | [#16078](https://github.com/QwenLM/qwen-code/issues/16078) |

---

## 关键 PR 进展

| # | PR | 类别 | 描述 | 链接 |
|---|-----|----------|-------------|------|
| 1 | **perf(cli)：减少冷启动 ACP 初始化工作** | 性能 | 新 PR 优化首次会话启动，通过重叠读取扩展实现 | [#17209](https://github.com/QwenLM/qwen-code/pull/17209) |
| 2 | **feat(managed-agent)：添加钉钉适配器** | 集成 | 继 email 之后的第二个托管渠道提供商；重构了共享适配器契约 | [#17136](https://github.com/QwenLM/qwen-code/pull/17136) |
| 3 | **feat(core)：按 surface 解决 loop 切换** | 核心 | 实验性 loop 开关的环境变量覆盖——细粒度控制 | [#17055](https://github.com/QwenLM/qwen-code/pull/17055) |
| 4 | **fix(core)：命令只读分类** | 核心 | 重定向节点不再隐藏命令以躲避只读检测 | [#16870](https://github.com/QwenLM/qwen-code/pull/16870) |
| 5 | **fix(managed-agent)：loop 调度后续跟进** | Managed Agent | 缓存延迟唤醒恢复证明；处理第三轮 review 反馈 | [#17197](https://github.com/QwenLM/qwen-code/pull/17197) |
| 6 | **feat(channels)：Microsoft Teams 扩展** | 集成 | 添加 Teams 渠道，支持群组 @mention、线程隔离和主持人入口 | [#15620](https://github.com/QwenLM/qwen-code/pull/15620) |
| 7 | **fix(web-shell)：HTTP 终端兼容性** | Web Shell | 共享 UUID 生成辅助函数确保终端在纯 HTTP 下正常工作 | [#17196](https://github.com/QwenLM/qwen-code/pull/17196) |
| 8 | **ci(release)：Docker 集成测试重试** | CI/CD | 失败时重试一次 Docker 测试套件，两次尝试间清理容器 | [#16862](https://github.com/QwenLM/qwen-code/pull/16862) |
| 9 | **fix(cli)：Ctrl+C 输入处理** | CLI | 将 Ctrl+C 保留用于全局取消；防止干扰 Ink shell 焦点 | [#15859](https://github.com/QwenLM/qwen-code/pull/15859) |
| 10 | **fix(core)：重放持久化的启动前奏** | 核心 | 恢复的会话重放原始前奏，而非从当前状态重建 | [#16439](https://github.com/QwenLM/qwen-code/pull/16439) |

---

## 功能需求趋势

分析开放 issue 和 PR，揭示以下主导功能方向：

1. **会话管理与循环控制** — 多项 PR 聚焦于 1.0 loop kernel 合入、loop 调度切片和按 surface 的环境变量覆盖
2. **渠道集成扩展** — 钉钉适配器、Microsoft Teams 扩展和 QQ 渠道改进等活跃工作
3. **安全加固** — npm 漏洞修复、格式错误权限规则检测、AUTO 模式分类器可见性
4. **测试可靠性** — CI Failure Patrol 活动显著，修复 web-shell、托管运行时终端和导出文档测试的不稳定性
5. **Web Shell 用户体验** — 本地文件桥接可发现性、会话搜索优化、剪贴板交互、OpenTUI markdown 流式处理

---

## 开发者痛点

| 痛点 | 频率 | 证据 |
|------------|-----------|----------|
| **CI 不稳定性** | 高 | 15+ 个 deflake issue/PR；hz5 池网络故障；多次 E2E 测试失败 |
| **npm 安全发现** | 反复出现 | 报告 29 个漏洞；CVE 审计失败；分阶段升级进行中 |
| **长会话中的上下文污染** | 已报告 | 持久化约束被注入为用户消息；模型重复问题 |
| **测试计时预算** | 平台相关 | ARM64 池超过 60 秒上限；需要环境感知的预算配置 |
| **符号链接路径的 Lint** | CI 特定 | 存在符号链接时 lint 成功退出但未实际运行 |

---

*数据来源：github.com/QwenLM/qwen-code 2026-11-14 活动记录*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*