# AI CLI 工具社区动态日报 2026-10-01

> 生成时间: 2026-10-01 01:28 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the cross-tool comparison report into Simplified Chinese. I need to translate all the English content while preserving:
- All Markdown structure (headings, tables, lists, etc.)
- URLs, repository slugs, version numbers
- Issue/PR references
- Technical terms
- The overall tone and register of a Chinese developer newsletter

Let me go through and translate this carefully, keeping everything in the proper format.</think>

# 跨工具对比报告：AI CLI 工具生态系统

## 1. 生态系统概览

AI CLI 工具领域正在快速发展，七个主要玩家都在积极开发自主编程代理。每个工具都在追求不同的架构理念——从 Claude Code 的桌面-CLI 混合模式到 Qwen Code 的分阶段托管代理（Managed Agent）交付方式。各社区的共同主题包括会话持久性、多代理编排、安全加固和终端 UX 改进。市场正在围绕三个核心能力进行整合：自主规划与执行、带权限控制的工具使用、以及会话状态管理。竞争推动了功能迭代速度，大多数工具都在每周或每夜发布新版本，同时持续解决技术债务和安全漏洞问题。

---

## 2. 活跃度对比

| 工具 | 最新版本 | 24小时内更新 Issues | 24小时内更新 PRs | Discussions |
|------|----------|---------------------|-------------------|-------------|
| **Claude Code** | v2.1.286 (10月1日) | 约20条活跃 | 10 | 不适用（使用 Issues） |
| **OpenAI Codex** | v0.159.3 (10月1日) | 约20条活跃 | 10 | 7 |
| **Gemini CLI** | v0.64.0 (9月30日) | 50 | 32 | 不适用 |
| **GitHub Copilot CLI** | v1.0.91-0 (10月1日) | 约20条活跃 | 0 | 不适用 |
| **OpenCode** | v1.18.34 (10月1日) | 约20条活跃 | 16 | 不适用 |
| **Pi** | v0.99.2 (10月1日) | 50 | 15 | 2 |
| **Qwen Code** | v0.24.7 (9月30日) | 约20条活跃 | 10 | 不适用 |

**说明：**
- 七个工具都保持活跃开发，发布周期为每周或每夜一次
- GitHub Copilot CLI 在过去24小时内没有 PR 合并，可能是因为周末
- Gemini CLI 的 PR 活跃度最高（32个），表明迭代速度快
- Pi 是数据窗口内唯一有活跃 Discussions 的工具；其他工具主要使用 Issues
- 所有工具都跟踪约 50 个 Issues，表明问题管理已趋于成熟

---

## 3. 共同功能方向

| 功能方向 | 提出需求的工具 | 具体需求 |
|----------|---------------|----------|
| **会话持久性/恢复** | Claude Code, OpenCode, Qwen Code, Pi | 崩溃后恢复会话、对话接管、历史记录保留、中断操作恢复 |
| **多代理编排** | Claude Code (#60082), Gemini CLI (#21968), OpenCode (#49389), Pi (#36423) | 实时协作、子代理任务管理、后台代理并发限制 |
| **安全加固** | Claude Code, GitHub Copilot CLI, Qwen Code | 沙箱改进、凭证安全、权限绕过修复、只读工作区策略 |
| **终端 UX 改进** | Claude Code, GitHub Copilot CLI, Pi, Qwen Code | 滚动位置保留、可点击超链接、全屏性能、颜色处理 |
| **MCP 集成** | Claude Code, GitHub Copilot CLI, Pi, OpenCode | MCP 服务器可靠性、OAuth 改进、工具名消歧 |
| **自适应资源分配** | Gemini CLI (#46658), OpenCode (#3282) | 智能模型/工具/子代理选择、配额管理 |
| **提供商灵活性** | Pi, Qwen Code | 多模型提供商、支持 BYOK、端点覆盖 |

---

## 4. 差异化分析

| 工具 | 主要定位 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 桌面-CLI 混合、权限透明度 | 企业、安全敏感团队 | 本地优先 + 云会话选项；强安全分类器 |
| **OpenAI Codex** | macOS 优先、安全优先开发 | macOS 开发者 | Rust 实现、严格沙箱策略、GitHub 集成 |
| **Gemini CLI** | 自动记忆、自主规划 | 想要放手自动化的高级用户 | 可扩展技能系统、分阶段工具发现 |
| **GitHub Copilot CLI** | 开发者工作流集成 | GitHub 生态用户 | GitHub 原生认证、代码审查聚焦 |
| **OpenCode** | 多提供商灵活性、扩展架构 | 多云用户 | 插件优先架构、广泛提供商支持 |
| **Pi** | 托管代理、持久钩子 | 高级自主工作流 | 分阶段托管代理交付、工作区托管 |
| **Qwen Code** | 企业托管会话 | 需要治理能力的企业团队 | 托管工作区模式、轮次/动作跟踪、可审计性 |

**核心差异化点：**

- **Claude Code** 注重权限透明度和进程稳定性
- **OpenAI Codex** 强调沙箱安全和 macOS 特定优化
- **Gemini CLI** 在自主规划能力方面领先，支持技能/子代理
- **GitHub Copilot CLI** 与 GitHub 工作流深度集成
- **OpenCode** 提供最广泛的提供商支持，采用扩展优先设计
- **Pi** 和 **Qwen Code** 以托管代理架构和持久会话状态瞄准企业用例

---

## 5. 社区活力与成熟度

### 高速度（每周发布 + 高 Issue 量）

- **Gemini CLI** — 24小时内32个 PR，积极的 alpha 轨道（v0.64.0 nightly），功能请求活跃
- **OpenCode** — 最近合并 16 个 PR，插件 API 快速扩展，社区讨论活跃
- **Qwen Code** — 托管代理路线图宏大，可见的多阶段交付进展

### 稳定速度（双周/月度发布）

- **Claude Code** — 成熟的 v2.x 发布，稳定的问题解决，聚焦进程稳定性
- **GitHub Copilot CLI** — 一致的 v1.x 发布，侧重安全加固
- **Pi** — v0.99.x 表明接近 1.0，积极修复 bug 和完善 OAuth
- **OpenAI Codex** — Rust 开发，定期 alpha 发布，速度较慢但稳定

### 社区参与度领先者

| 工具 | 最活跃 Issue 类型 | 社区信号 |
|------|------------------|----------|
| **Claude Code** | 安全/权限误报 | 强烈的 UX 聚焦，透明度问题 |
| **Gemini CLI** | 子代理挂起/崩溃 | 代理可靠性是主要痛点 |
| **OpenCode** | Go 订阅/认证问题 | 提供商可靠性对信任至关重要 |
| **Qwen Code** | 托管代理架构 | 企业功能驱动路线图 |
| **GitHub Copilot CLI** | 400 错误、权限提示 | 代码审查集成需要改进 |
| **Pi** | 思考/中断 UX | 交互式会话控制存在差距 |

---

## 6. 趋势信号

### 新兴行业模式

1. **托管代理架构** — Pi 和 Qwen Code 独立开发了具有持久会话、轮次管理和托管工作区的托管代理模式。这表明市场正在向"会话即服务"模式转变，而非无状态的工具调用。

2. **安全作为竞争壁垒** — Claude Code、OpenAI Codex 和 Qwen Code 都优先考虑安全加固（权限绕过、凭证处理、沙箱化）。这反映了企业对可审计、合规的 AI 编程工具的需求。

3. **MCP 标准化** — 多个工具（Claude Code、GitHub Copilot CLI、Pi、OpenCode）都在应对 MCP 集成挑战，验证了模型上下文协议作为新兴标准的价值——同时也揭示了 OAuth 和工具名处理方面的实现差距。

4. **提供商无关性** — OpenCode 和 Pi 强调多提供商灵活性，表明用户希望避免锁定并在模型间优化成本/性能。

5. **终端 UX 成熟化** — 滚动行为、颜色处理、可点击链接和全屏性能出现在多个仓库中，表明 CLI 体验正从"可用"向"精致"演进。

### 开发者决策信号

| 信号 | 解读 |
|------|------|
| 4个以上工具都会话持久性问题 | 用户期望长时间运行的自主工作流；会话中断是首要痛点 |
| OAuth/MCP 认证摩擦（Pi、GitHub Copilot CLI、OpenCode） | 设置复杂性是采用障碍；需要简化的认证流程 |
| 误报安全分类器（Claude Code、OpenAI Codex） | 过度拦截惹恼用户；需要更智能、可调的安全系统 |
| 配额/透明度投诉（OpenCode、 Gemini CLI） | 用户要求了解使用量和成本；不透明计费侵蚀信任 |
| 平台特定回归（Windows 闪烁、Linux 登录、macOS fontconfig） | 跨平台测试差距；Windows 可靠性仍具挑战性 |

### 开发者参考价值

- **构建 AI CLI？** 研究 Pi 和 Qwen Code 的托管代理设计，学习会话持久性模式
- **安全敏感部署：** 评估 Claude Code 的权限透明度和 OpenAI Codex 的沙箱策略
- **多提供商策略：** OpenCode 的扩展架构提供最灵活的模型
- **终端 UX 最佳实践：** Claude Code 和 Pi 有活跃的 UX 改进计划，值得参考
- **企业功能：** Qwen Code 的可审计性和轮次跟踪满足合规要求

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the Community Highlights Report from English to Chinese (Simplified Chinese). I need to:
1. Translate all the content
2. Keep all formatting (headings, tables, lists, links, code references)
3. Keep technical terms, project names, URLs, PR/Issue numbers as-is
4. Use natural technical Chinese register

Let me go through and translate this carefully:

Title: Claude Code Skills Community Highlights Report
Data as of 2026-10-01

## 1. Top Skills Ranking
- translate "Top Skills Ranking" to "热门技能排行"
- translate "The PR data shows 20 active skill contributions, though comment counts are not fully populated in this snapshot. Based on PR recency, activity indicators, and functionality scope, the following represent the most notable skill additions:"
- Keep the table structure

Let me translate section by section:</think>

# Claude Code 技能社区亮点报告
**数据截至 2026 年 10 月 1 日**

---

## 1. 热门技能排行

PR 数据显示共有 20 个活跃的技能贡献，不过评论数在此快照中未完整记录。根据 PR 的提交时间、活跃指标和功能范围，以下是最值得关注的技能新增：

| 排名 | PR | 功能描述 | 状态 |
|---|-----|---------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (`#1771`) | 为 Web3 开发者打造的智能体技能，可对 Solidity/Rust 智能合约进行自动化静态分析，并通过 ProofCore 的零存储默克尔协议将加密审计证明锚定到 TON 区块链。 | OPEN |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (`#1703`) | 零成本技能，可将 Markdown 文档编译为配有逼真人声旁白的专业 MP4 视频，基于 Marp 实现。 | OPEN |
| 3 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** (`#822`) | 开源 E2E 测试技能，赋予 Claude 视觉和浏览器控制能力，实现零代码自动化测试生成。 | OPEN |
| 4 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (`#723`) | 全栈测试技能，涵盖测试哲学、单元测试、React 组件测试及更广泛的模式。 | OPEN |
| 5 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** (`#1615`) | 通过基于配置文件的 SSH 和 Slurm 工作流，操作 SCNet HPC 集群的技能。 | OPEN |
| 6 | **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** (`#1245`) | 将产品/技术规范转化为具体的 Notion 任务，包含详细的实施计划、验收标准和进度追踪。 | OPEN |
| 7 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (`#514`) | 预防 AI 生成文档中的排版问题：孤行控制、段落孤行控制、编号对齐校正。 | OPEN |
| 8 | **[ODT](https://github.com/anthropics/skills/pull/486)** (`#486`) | 创建 OpenDocument 文本、填充模板及 ODT 到 HTML 的转换。 | OPEN |

---

## 2. 社区需求趋势

从 Issues 讨论中，最受期待的技术方向浮现如下：

| 趋势 | 证据 | Issue |
|-------|----------|-------|
| **安全与信任边界** | 43 条评论 — `anthropic/` 命名空间下的社区技能冒充官方技能，造成信任边界漏洞，用户可能向未经审计的社区贡献授予更高权限。 | [#492](https://github.com/anthropics/skills/issues/492) |
| **组织级技能共享** | 16 条评论 — 用户希望获得组织级技能库；目前需手动通过 Slack/Teams 分享 `.skill` 文件。 | [#228](https://github.com/anthropics/skills/issues/228) |
| **技能触发/执行可靠性** | 12 条评论 — `run_eval.py` 触发率为 0%；技能/命令在实际使用中无法调用。 | [#556](https://github.com/anthropics/skills/issues/556) |
| **智能体治理与安全** | 6 条评论 → 已关闭 — 提案：为技能提供治理模式教学，包括策略执行、威胁检测、信任评分和审计追踪。 | [#412](https://github.com/anthropics/skills/issues/412) |
| **元技能（质量/安全分析）** | 8 条评论 → 已关闭 — 面向市场的 skill-quality-analyzer 和 skill-security-analyzer 提案。 | [#83](https://github.com/anthropics/skills/issues/83) |

**新兴需求集群**：Notion/Jira 工作流自动化、强化测试/E2E 能力、智能合约/Web3 工具链，以及 HPC 集群集成。

---

## 3. 极具潜力的待上线技能

以下活跃 PR 展现出强劲功能，极有可能近期合入：

- **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** — Web3/智能合约存证（PR #1771，2026-09-15）
- **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** — Markdown 转视频配语音旁白（PR #1703，2026-09-01）
- **[AWT](https://github.com/anthropics/skills/pull/822)** — 基于 Claude 视觉的 E2E 测试（PR #822，2026-03-31）
- **[testing-patterns](https://github.com/anthropics/skills/pull/723)** — 全方位测试技能（PR #723，2026-03-22）
- **[blast-radius](https://github.com/anthropics/skills/pull/1776)** — 批量/破坏性写入安全检查清单（PR #1776，2026-09-17）

---

## 4. 技能生态洞察

> **社区最集中的需求是面向特定领域的自动化工作流技能**——尤其是测试、云/ HPC 基础设施和 Web3 领域——同时迫切需要治理和信任框架，以便安全地大规模分发社区贡献的技能。

---

*报告数据来源：anthropics/skills 仓库（采样 50 个 PR、50 个 Issues）。*

---

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following the specific rules provided. Let me go through it carefully:

1. Only output the translation, no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references, project names, etc. as-is
4. Use natural technical Chinese register

Let me translate section by section:

Title: Claude Code Community Digest
Date: 2026-10-01
Source: github.com/anthropics/claude-code

Highlights section:
- "ships with" = 带来
- "UX improvements" = 用户体验改进
- "fullscreen list navigation" = 全屏列表导航
- "auto-memory index visibility" = 自动记忆索引透明度
- "multi-user collaboration features" = 多用户协作功能
- "platform-specific bugs" = 平台特定问题

Releases:
- "What's changed:" = 更新内容:
- "Permission prompts" = 权限提示
- "count indicator" = 计数指示器
- "stacking up" = 堆积
- "improving user awareness" = 提高用户感知
- "Fullscreen mouse support" = 全屏鼠标支持
- "click-to-jump" = 点击跳转
- "hover and pressed states" = 悬停和按下状态
- "Process fixes" = 进程修复
- "stability issues" = 稳定性问题

Hot Issues table - translate summaries:
1. "Session cannot determine..." = 会话无法确定自动记忆索引是完整加载、截断还是未加载
2. "CVP-approved org..." = 已获 CVP 批准的组织仍被网络安全防护阻止


3. "All tools blocked..." = 所有工具在 reddit.com 上被阻止，显示"因安全限制不允许"
4. "Feature request..." = 功能请求：实时多用户协作
5. "Agents view..." = Agents 视图：添加搜索/筛选功能
6. "Windows MSIX..." = Windows MSIX：NVIDIA RTX 50 系列严重闪烁
7. "After Wi-Fi change..." = Wi-Fi 切换后，下一个请求在死连接上挂起 184 秒才重试
8. "Cloud session..." = 云端会话持续重新安排

PR 部分保持标题和描述的英文格式，用中文阐述功能。开发痛点部分需要准确传达问题：透明度差距、安全分类器误报、平台兼容性等关键技术挑战。

键盘快捷键、全屏导航模式、性能优化和缺陷修复构成了功能更新的主要框架。</think>

# Claude Code 社区动态

**日期：** 2026-10-01  
**来源：** github.com/anthropics/claude-code

---

## 今日要闻

Claude Code v2.1.286 带来了权限提示和全屏列表导航的用户体验改进，同时社区继续关注自动记忆索引透明度及多用户协作功能等重要议题。热门讨论主要围绕自动记忆索引可见性、实时多用户协作文能以及影响 Windows、Linux 和浏览器扩展的平台特定问题展开。

---

## 发布版本

### v2.1.286（最新）

**更新内容：**

- **权限提示**：当多个权限请求堆积时添加计数指示器（如"2/5"），提升用户对待审批项的感知
- **全屏鼠标支持**：全屏模式下的"N more"行现支持点击跳转功能，具备悬停和按下状态
- **进程修复**：解决了若干 Claude Code 进程稳定性问题

---

## 热门 Issues

| # | Issue | 摘要 | 评论 | 👍 |
|---|-------|------|------|-----|
| 1 | [#82056](https://github.com/anthropics/claude-code/issues/82056) | **会话无法确定自动记忆索引是完整加载、截断还是未加载** — 用户希望了解自动记忆实际加载的内容，特别是用于调试会话行为 | 64 | 1 |
| 2 | [#84689](https://github.com/anthropics/claude-code/issues/84689) | **已获 CVP 批准的组织仍被网络安全防护阻止** — 尽管已确认组织 ID，用户在批准后仍无法继续操作 | 19 | 5 |
| 3 | [#95326](https://github.com/anthropics/claude-code/issues/95326) | **reddit.com 上所有工具被阻止，显示"因安全限制不允许"** — 自 2026-09-18 以来的回归问题，影响 Chrome 扩展用户 | 18 | 22 |
| 4 | [#60082](https://github.com/anthropics/claude-code/issues/60082) | **功能请求：实时多用户协作编辑同一会话** — 类似 Google Docs/VS Code Live Share 的 Claude Code 聊天协作功能 | 12 | 21 |
| 5 | [#64575](https://github.com/anthropics/claude-code/issues/64575) | **Agents 视图：添加搜索/筛选功能以按名称或提示词查找会话** — 无法在 FleetView 中快速定位特定会话 | 5 | 8 |
| 6 | [#79220](https://github.com/anthropics/claude-code/issues/79220) | **Windows MSIX：NVIDIA RTX 50 系列严重闪烁** — `--disable-direct-composition` 可解决但 MSIX 版本阻止了此变通方案 | 5 | 0 |
| 7 | [#98184](https://github.com/anthropics/claude-code/issues/98184) | **Wi-Fi 切换后，下一个请求在死连接上挂起 184 秒才重试（Linux）** — 网络切换处理需要改进 | 4 | 0 |
| 8 | [#97567](https://github.com/anthropics/claude-code/issues/97567) | **云端会话每小时持续重新安排 PR 检查，无限制地消耗积分** — 无界限的重新调度行为 | 3 | 0 |
| 9 | [#98556](https://github.com/anthropics/claude-code/issues/98556) | **响应级安全分类器误报阻止良性回复** — 在完全正常的内容中途意外中断 | 2 | 0 |
| 10 | [#94353](https://github.com/anthropics/claude-code/issues/94353) | **代码标签页编写器中的斜杠命令菜单对屏幕阅读器（NVDA）完全静音** — Windows 桌面端无障碍功能缺口 | 2 | 0 |

---

## 主要 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|------|------|
| 1 | [#98555](https://github.com/anthropics/claude-code/pull/98555) | **diff：对话框打开每个列出的文件，关闭时无任何提示** — /diff 对话框行为用户体验问题 | OPEN |
| 2 | [#94847](https://github.com/anthropics/claude-code/pull/94847) | **diff：首个编辑仅在有文件可列出时才打开面板** — 修复空面板出现在被忽略/不同工作树文件上的问题 | OPEN |
| 3 | [#98357](https://github.com/anthropics/claude-code/pull/98357) | **diff：面板感知合并完成，对异常分支名保持静默** — 减少不必要的 git 轮询 | CLOSED |
| 4 | [#98445](https://github.com/anthropics/claude-code/pull/98445) | **diff：面板用一个 git 进程读取所有 hunks，而非每个文件一个** — 性能改进，尤其在 Windows 上 | CLOSED |
| 5 | [#98374](https://github.com/anthropics/claude-code/pull/98374) | **diff：变基完成后面板重新读取 diff** — 修复完成后变基出现的"Diff 不可用"问题 | CLOSED |
| 6 | [#97293](https://github.com/anthropics/claude-code/pull/97293) | **mods：声明携带 process.run 截断标志和列表条目的 mtimeMs** — 类型声明更新 | OPEN |
| 7 | [#97952](https://github.com/anthropics/claude-code/pull/97952) | **ci：GitHub Actions 工作流安全加固** — 为 Claude 触发的工作流添加出口防火墙运行器 | CLOSED |
| 8 | [#96434](https://github.com/anthropics/claude-code/pull/96434) | **security-guidance：将 denied 和 secret 文件排除在审查者接触范围之外** — 修复 #96276，从安全审查中排除 denied/secret 文件 | OPEN |
| 9 | [#39417](https://github.com/anthropics/claude-code/pull/39417) | **增强 SKILL.md 添加关键设计思维步骤** — 前端开发指南 | CLOSED |
| 10 | [#98568](https://github.com/anthropics/claude-code/issues/98568) | **[BUG] 桌面应用在自定义斜杠命令与 URL 组合时阻止发送消息** — 新回归问题 | OPEN |

---

## 功能请求趋势

根据 issue 分析，社区主要请求以下功能：

1. **协作功能** — 实时多用户会话共享（#60082）和跨会话对话频道（#87954）用于智能体间通信
2. **搜索与发现** — FleetView/Agents 视图中的会话搜索（#64575、#77784），以便浏览大量会话历史
3. **工作流确定性** — 工作流中直接执行 shell/命令步骤，无需子智能体（#98566）
4. **增强用户体验** — 按文件夹分组时的侧边栏筛选选项（#98565）、发布产物中的 URL 片段转发（#79520）
5. **平台改进** — `/diff` 支持额外工作目录（#92108）、更好的 Linux 网络韧性（#98184）
6. **无障碍功能** — 斜杠命令菜单的屏幕阅读器支持（#94353）

---

## 开发者痛点

1. **透明度差距** — 用户无法验证自动记忆实际加载的内容（#82056），造成调试困难
2. **安全分类器误报** — 良性回复在传输中途被终止（#98556），打断工作流
3. **平台特定问题** — Windows NVIDIA 闪烁（#79220）、Linux 登录死胡同（#94884）、Reddit Chrome 扩展被阻止（#95326）
4. **积分/资源消耗** — 云端会话无限制重新调度（#97567）静默消耗积分
5. **Git 集成摩擦** — Diff 面板行为问题（#98555、#94847）导致工作流困惑
6. **无障碍缺口** — 屏幕阅读器用户缺乏适当反馈（#94353）
7. **网络韧性** — Wi-Fi 切换导致 184 秒挂起（#98184）才重试
8. **认证问题** — awsAuthRefresh 不显示验证码（#82426）、GitHub 集成困惑（#98562、#98567）

---

*本动态至此结束。数据截至 2026-10-01。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this OpenAI Codex Community Digest from English to Chinese. Let me carefully follow the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter.

Let me translate this carefully while maintaining the structure and technical accuracy.

Title: "OpenAI Codex Community Digest — 2026-10-01" - This should stay in English or be translated to something like "OpenAI Codex 社区周报 — 2026-10-01"

Let me go through section by section:

## 今日要点 (Today's Highlights)

The Codex team shipped... - translate naturally

Let me start translating:</think>

# OpenAI Codex 社区周报 — 2026-10-01

## 今日要点

Codex 团队发布了 **rust-v0.159.3**，为本地 ChatGPT 会话新增了账户安全设置提醒功能，旨在提升账户安全性。与此同时，社区正在处理一个 **严重的 Windows 问题**：在处理请求期间终端窗口持续闪烁（Issue #48074），已吸引 130+ 条评论和 148 个 👍，成为今日讨论最多的话题。Alpha 版本继续在 0.160 和 0.161 轨道上推进。

---

## 版本发布

| 版本 | 摘要 |
|------|------|
| **rust-v0.159.3** | 为符合条件的本地 ChatGPT 登录会话新增可选的账户安全设置提醒功能。Backport of #49744。 |
| **rust-v0.161.0-alpha.5** | 0.161 轨道的 Alpha 版本。 |
| **rust-v0.161.0-alpha.4** | 0.161 轨道的 Alpha 版本。 |
| **rust-v0.161.0-alpha.3** | 0.161 轨道的 Alpha 版本。 |
| **rust-v0.160.0-alpha.6.2** | 0.160 轨道的 Alpha 版本。 |

完整变更日志：https://github.com/openai/codex/compare/rust-v0.159.2...rust-v0.159.3

---

## 热门问题

1. **[Windows] 终端窗口在处理请求期间持续闪烁** — Issue #48074（130 条评论，148 个 👍）
   - **问题原因：** 在 Windows 11 上，当 Codex 守护进程处理请求时，终端窗口会反复闪烁，严重影响用户体验。影响 CLI 0.157.0+ 版本用户。
   - **标签：** `windows-os`、`CLI`、`app-server`

2. **账户容量错误，尽管额度充足** — Issue #43337（67 条评论）
   - **问题原因：** Pro 用户即使周额度完全剩余，仍然看到容量错误，表明配额追踪与实际可用性之间存在不匹配。
   - **标签：** `rate-limits`、`CLI`、`Linux`

3. **[Windows] EFS 加密文件上的内置插件不可用** — Issue #25220（45 条评论）
   - **问题原因：** Computer Use、Browser、Chrome 和 LaTeX 插件在 Windows 11 上当文件位于 EFS 加密目录中时无法加载，阻碍了受影响用户的核心功能。
   - **标签：** `windows-os`、`app`、`skills`、`computer-use`、`browser`

4. **[Windows] Codex Desktop 在启动加载动画时卡住** — Issue #48333（26 条评论）
   - **问题原因：** Desktop 应用版本 26.924.1866.0 无法加载，启动加载动画一直停留，直到手动终止 app-server 进程。
   - **标签：** `windows-os`、`mcp`、`app`、`app-server`

5. **Windows execpolicy 误报** — Issue #40060（25 条评论）
   - **问题原因：** 包含 `Start-Process` 和 URL 的 PowerShell 脚本触发安全误报，阻止了合法代码执行。
   - **标签：** `windows-os`、`sandbox`、`CLI`

6. **[macOS] code-mode 任务缺少 send_message_to_thread** — Issue #40852（18 条评论，10 个 👍）
   - **问题原因：** 在 code-mode 任务中，`send_message_to_thread` 工具调用被省略，而读取工具保留，导致某些自动化工作流中断。
   - **标签：** `tool-calls`、`app`、`app-server`、`macOS`

7. **create_thread 将 Full Access 降级为 managed approval** — Issue #40125（16 条评论）
   - **问题原因：** 子工作树意外从 Full Access 降级为 managed approval 模式，导致意外的权限变更。
   - **标签：** `windows-os`、`sandbox`、`app`、`subagent`、`app-server`

8. **[Android][Remote] 桌面账户切换后授权循环** — Issue #48555（14 条评论，16 个 👍）
   - **问题原因：** 在桌面切换 ChatGPT 账户后，配对手机时出现无限授权循环，原因是跨账户环境状态未更新。
   - **标签：** `auth`、`app`、`remote`、`Linux`、`Android`

9. **[Windows] 内置 LaTeX 编译器失败** — Issue #48311（12 条评论，8 个 👍）
   - **问题原因：** Windows 上的 LaTeX 文档编译失败，提示"无法找到标准目录"错误，阻碍了文档生成工作流。
   - **标签：** `windows-os`、`tool-calls`、`app`

10. **[macOS][Remote iOS] Desktop 创建的线程在 iOS 上无法加载** — Issue #40558（10 条评论，6 个 👍）
    - **问题原因：** 在桌面上创建的活动线程无法在 iOS Remote 上加载，原因是存在活动写入者冲突，导致跨设备连续性中断。
    - **标签：** `iOS`、`app-server`、`remote`

---

## 关键 PR 进展

| PR | 摘要 |
|-----|------|
| #49801 | 更新 Rust 工具链 action 以支持参数注释 linting。 |
| #49800 | 允许清理缺少线程的仅重放侧对话。 |
| #49799 | 在 TUI 中保留服务器网络搜索设置——防止客户端设置覆盖服务器默认值。 |
| #49798 | 与 `Arc` 共享缓存的 exec-server 环境信息，避免重复的元数据克隆。 |
| #49796 | 对 Guardian 保留上下文遗漏通知进行去重。 |
| #49795 | 在 Guardian 分类器续集中避免重复的同步审查。 |
| #49793 | 为 Guardian v2 异步分类添加 `conversation` 模式（对比 `snapshot`）。 |
| #49792 | 为 Guardian 异步采样添加保留对话支持。 |
| #49787 | 从 Bazel 核心测试数据中移除 `AGENTS.md`。 |
| #49784 | 为浏览器注释 API 添加 requirements feature gate。 |

---

## 热门讨论

### 想法
- **超越 Auto 模式：学习分配模型、工具和子代理** — Discussion #46658（5 条评论，4 个 👍）
  - 提议将模型、推理强度、工具和子代理的选择视为共享的自适应分配问题，而非孤立的设置。

### 问答
- **Codex Desktop 本地执行器在 Windows 11 上失败** — Discussion #49259（1 条评论，1 个 👍）
  - 用户寻求帮助解决 Windows 11 上的 `helper_unknown_error`、`SetNamedSecurityInfoW failed: 5` 和沙箱设置失败问题。

### 综合
- **尽管 Code Review 显示 100% 剩余，仍显示"使用量已达上限"** — Discussion #8503（23 条评论，9 个 👍）
  - GitHub Connector 报告新 PR 立即达到使用量限制，尽管 Code Review 显示额度完全剩余。自 2025 年 12 月起持续存在的问题。

- **Codex CLI 全屏显示** — Discussion #49129（2 条评论，4 个 👍）
  - 新 CLI 行为使用完整终端窗口，启用可展开的 diff、固定 composer 和更丰富的 UI 功能。

---

## 功能请求趋势

根据 Issues 和 Discussions，最受请求的方向是：

1. **自适应资源分配** — 用户希望 Codex 自动智能分配模型、推理强度、工具和子代理（Discussion #46658）。
2. **无头 Linux 服务器支持** — 请求通过 CLI 或设备代码流程将 dot 直接连接到无头 Linux 服务器作为任务环境（Issue #49491）。
3. **GitHub Check Runs 支持 Codex Cloud PR 审查** — 将 Codex Cloud PR 审查显示为 GitHub Check Runs 以提高可见性（Issue #27691）。
4. **会话持久性改进** — 多个问题涉及会话持久性、重启后线程恢复和跨设备连续性。

---

## 开发者痛点

社区反复报告以下领域的挫败感：

- **Windows 沙箱/执行器可靠性** — 多个问题（#48333、#49025、#49299、#49731、#49789、#49777）描述了沙箱设置失败、WSL 集成中断和 Windows 上的辅助目录错误。
- **跨平台不一致性** — Linux、macOS 和 Windows 各有不同的失败模式（终端闪烁、fontconfig 损坏、LaTeX 编译、EFS 加密插件加载）。
- **速率限制可见性** — 用户无法将实际使用量与报告的配额/限制协调一致（Issue #43337、Discussion #8503）。
- **Remote/Control 功能** — Android 远程配对、iOS 远程线程加载和跨账户授权状态脆弱。
- **Shell/进程管理** — 失败的 shell 快照留下孤立进程；exec-server 进程创建在各种 WSL 配置中失败。

---

*周报基于 GitHub 数据生成 — github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this GitHub community digest into Chinese (Simplified Chinese). Let me carefully translate while preserving:

1. All Markdown structure (headings, tables, lists, bold, horizontal rules, emoji)
2. All URLs, issue/PR numbers, file paths, version tags
3. Project names, repository slugs
4. Numbers and dates

I need to use natural technical Chinese, the register of a Chinese developer newsletter. Let me translate section by section.</think>

# Gemini CLI 社区简报 — 2026 年 10 月 1 日

## 1. 今日要点

项目持续修复关键稳定性和可用性问题。夜间构建 **v0.64.0-nightly.20260930** 实现了非交互模式下的自主计划执行，并修复了截断行为。P1 级问题占据主导——尤其是子代理可靠性（挂起、崩溃和状态误报）以及会话管理边界情况。多个大型 PR 正在针对文件操作和历史管理中的长期数据丢失和性能问题进行攻关。

---

## 2. 版本发布

### v0.64.0-nightly.20260930.g38700b4b3

修复了两个核心问题：

- **fix(core): enable autonomous plan execution in non-interactive mode** — 允许 CLI 在批处理/无头模式下无需交互式提示即可运行自主工作流。
- **fix(core): disable truncation when maxChars <= 0** — 修正工具输出格式，在明确禁用截断时保留完整输出。

[发布提交](https://github.com/google-gemini/gemini-cli/commit/g38700b4b3)

---

## 3. 热点问题

### Issue #22323 — 子代理在 MAX_TURNS 后恢复时误报成功
**优先级：** P1 | **评论：** 13 | **投票：** 2  
`codebase_investigator` 子代理在达到 `MAX_TURNS` 未完成分析时仍报告 `status: "success"` 和终止原因 `"GOAL"`。这掩盖了失败，导致无法进行正确的重试逻辑。  
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)

### Issue #21409 — 通才代理无限挂起
**优先级：** P1 | **评论：** 8 | **投票：** 8  
当 `gemini-cli` 交由通才代理处理时，简单操作（如创建文件夹）会挂起长达一小时。社区关注度高——临时解决方案是明确指示模型避免使用子代理。  
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)

### Issue #19873 — 零依赖 OS 沙箱与执行后意图路由
**优先级：** P2 | **评论：** 9 | **投票：** 1  
提议利用模型原生的 bash 亲和性，结合零依赖 OS 沙箱和基于意图的命令路由。这是一个大范围增强目标，旨在不引入外部依赖的情况下提升安全性和用户体验。  
[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)

### Issue #22745 — 评估 AST 感知的文件读取、搜索和映射
**优先级：** P2 | **评论：** 7 | **投票：** 1  
追踪针对 AST 感知工具的调研，以实现更精确的代码导航和降低 token 消耗。可能会显著减少大文件读取带来的上下文膨胀。  
[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)

### Issue #21968 — Gemini 太少使用 skills 和子代理
**优先级：** P2 | **评论：** 6 | **投票：** 0  
用户反馈模型很少自主调用自定义 skills 和子代理，即使在高度相关的场景下也是如此。依赖于显式用户提示而非上下文感知。  
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)

### Issue #22267 — 浏览器代理忽略 settings.json 覆盖
**优先级：** P2 | **评论：** 4 | **投票：** 0  
浏览器代理完全忽略来自 `settings.json` 的配置覆盖（如 `maxTurns`），导致用户定义的行为失效。  
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)

### Issue #21983 — 浏览器子代理在 Wayland 下失败
**优先级：** P1 | **评论：** 4 | **投票：** 1  
浏览器子代理在 Wayland 显示服务器上崩溃或无法运行——这是特定平台的回归问题。  
[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)

### Issue #24246 — 工具数量超过 128 时报 400 错误
**优先级：** P2 | **评论：** 3 | **投票：** 0  
当可用工具超过约 128 个时，Gemini CLI 遇到 400 错误。用户期望更智能的工具范围控制。  
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)

### Issue #23571 — 模型在随机位置创建临时脚本
**优先级：** P2 | **评论：** 3 | **投票：** 0  
当 shell 执行受限后，模型会将临时编辑脚本散落在各个目录中，造成清理负担。  
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)

### Issue #22186 — get-shit-done 输出钩子导致崩溃
**优先级：** P1 | **评论：** 3 | **投票：** 0  
"get-shit-done" 输出钩子完成时反复崩溃，导致 `gemini` 在最终用户摘要生成期间崩溃。  
[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)

---

## 4. 关键 PR 进展

### PR #29568 — 追加式增量修补与有限历史窗口
**优先级：** P1 | **规模：** 特大  
用 `ChatRecordingService` 中的增量追加式修补替换全量历史重写和无限制内存消息保留。大幅提升持久化和内存效率。  
[#29568](https://github.com/google-gemini/gemini-cli/pull/29568)

### PR #29582 — 优化忽略过滤并启用子树剪枝
**优先级：** P1 | **规模：** 大  
引入分层目录级状态记忆化、通配符模式展开和符号链接缓存——解决大型代码库上数秒阻塞问题。  
[#29582](https://github.com/google-gemina/gemini-cli/pull/29582)

### PR #29584 — 防止快速退出时删除已恢复会话历史
**优先级：** P1 | **规模：** 大  
修复关键数据丢失：恢复会话后立即退出（通过 Ctrl+C 或 `/exit`）会永久删除对话历史文件。  
[#29584](https://github.com/google-gemini/gemini-cli/pull/29584)

### PR #29583 — 在不受信任文件夹中强制只读工作区设置
**优先级：** P1 | **规模：** 中  
防止在执行 `gemini mcp add` 等命令时，不受信任工作区通过"忽略即同步"的方式静默覆盖 `.gemini/settings.json`。  
[#29583](https://github.com/google-gemini/gemini-cli/pull/29583)

### PR #29586 — Ctrl+C 紧急中止可到达取消处理器
**优先级：** P2 | **规模：** 中  
修复输入处理问题，防止在活跃操作期间紧急停止被吞没，使用户无法中断运行中的代理。  
[#29586](https://github.com/google-gemini/gemini-cli/pull/29586)

### PR #29520 — 保留滚动位置并分区待处理高度预算
**优先级：** P1 | **规模：** 大  
解决流式输出、工具确认提示和无限制高度检查期间的视口滚动位置重置问题——提升终端用户体验。  
[#29520](https://github.com/google-gemini/gemini-cli/pull/29520)

### PR #29499 — 文件工具操作串行化并使写入原子化
**优先级：** P1 | **规模：** 大  
修复并发文件操作（尤其是并行子代理场景）中的竞态条件，导致静默丢失更新和差异不准确。  
[#29499](https://github.com/google-gemini/gemini-cli/pull/29499)

### PR #29557 — 防止代码中 @ 符号导致 CPU 挂起和引号吞噬
**优先级：** P1 | **规模：** 中  
修复无头模式下因作用域包（`@scope/pkg`）灾难性引号吞噬导致 100% CPU 不可中断锁死的输入处理问题。  
[#29557](https://github.com/google-gemini/gemini-cli/pull/29557)

### PR #29457 — 在读取多文件时用 glob 匹配替换模糊逻辑
**优先级：** P1 | **规模：** 特大  
修复上下文膨胀 bug：二进制资源因朴素子字符串匹配被错误地视为"显式请求"。  
[#29457](https://github.com/google-gemini/gemini-cli/pull/29457)

### PR #29580 — 按精确 ID 解析会话并处理监听器清理
**优先级：** P1 | **规模：** 大  
修复 ACP `session/load` 在恢复新创建但无对话轮次的会话时报"无效会话标识符"失败的问题。  
[#29580](https://github.com/google-gemini/gemini-cli/pull/29580)

---

## 5. 功能需求趋势

根据 issue 分析，社区正在推动开发向以下方向演进：

| 主题 | 描述 |
|------|------|
| **AST 感知工具** | 调研基于 AST 的文件读取、搜索和代码库映射，以降低 token 消耗并提升精度（#22745、#22746、#22747） |
| **自主子代理行为** | 改进子代理调用、技能使用和轨迹可见性，无需显式提示（#21968、#22598） |
| **会话管理健壮性** | 更好的会话恢复、历史保存和崩溃恢复（#29584、#29580） |
| **平台特定修复** | Wayland 浏览器支持、Windows 扩展锁、终端调整大小处理（#21983、#19013、#21924） |
| **安全加固** | OS 沙箱、只读工作区策略、破坏性命令 guardrails（#19873、#29583、#22672） |
| **任务追踪重构** | 从上下文内 todos 迁移到持久化基于文件的 CRUD 追踪（#18836、#21000） |

---

## 6. 开发者痛点

- **代理挂起与无响应**：通才代理和浏览器子代理的冻结仍是最大投诉（#21409、#21983）
- **误报成功**：子代理在 MAX_TURNS 中断时仍误导性地报告成功（#22323）
- **配置持久化**：settings.json 覆盖被浏览器代理及其他组件忽略（#22267）
- **竞态条件**：并发文件操作在多代理场景下导致数据丢失（#29499）
- **上下文膨胀**：大文件读取和二进制资源推高 token 使用（#29457）
- **会话数据丢失**：恢复会话后快速退出会擦除历史（#29584）
- **输入处理可靠性**：Ctrl+C 无法一致地到达取消处理器（#29586）

---

*简报基于 2026 年 10 月 1 日的 GitHub 数据生成*

---

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese. Let me analyze what I need to do:

1. Translate all the text content from English to Chinese
2. Keep the Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Preserve URLs, numbers, dates, issue numbers, code snippets, etc.
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through the content and translate it:

**Title:**
GitHub Copilot CLI 社区动态

**Date:** 2026-10-01 | **Repository:** github.com/github/copilot-cli

**1. Today's Highlights**
今天的亮点

GitHub Copilot CLI 发布了 v1.0.91-0，改进了只读 shell 管道的执行证据审查功能，并修复了 Windows 套接字问题。同时，社区仍在处理一些优先级别较高的问题，包括代码审查提示持续出现 400 错误、macOS 更新后 MCP 连接失败，以及交互模式工具白名单的功能请求。

**2. Releases**
最新版本

| Version | Date | Key Changes |
|---------|------|-------------|
翻译成：
| 版本 | 日期 | 关键变更 |

**3. Hot Issues**
热门问题

| # | Issue | Summary | 👍 | Status |
|---|-------|---------|---|--------|
翻译成：
| # | 问题 | 摘要 | 👍 | 状态 |

继续翻译其他内容...

让我仔细翻译整篇文章，确保：
- 保留所有Markdown结构
- 保留URL、编号等
- 使用自然的技术中文
- 保持表格格式</think>

# GitHub Copilot CLI 社区动态

**日期：** 2026-10-01 | **仓库：** github.com/github/copilot-cli

---

## 1. 今日亮点

GitHub Copilot CLI 发布了 **v1.0.91-0**，改进了只读 shell 管道的执行证据审查功能，并修复了 Windows 套接字问题。与此同时，社区仍在处理一些高优先级问题，包括代码审查提示持续出现 400 错误、macOS 更新后 MCP 连接失效，以及交互模式工具白名单的功能请求。

---

## 2. 最新版本

| 版本 | 日期 | 关键变更 |
|------|------|----------|
| **v1.0.91-0** | 2026-10-01 | **改进：** 完整的可静态分析的只读 shell 管道现在可以进入执行证据审查，而不完整或未绑定的管道则需要显式批准。**修复：** 为 Windows 上的 Node/npm EACCES 套接字拒绝提供沙盒网络绕过方案。 |
| **v1.0.90** | 2026-09-30 | 在模型选择中添加对 GPT-6.1 Sol 的支持。添加 `--mcp-github-auth` 用于将 GitHub 账户授权限定为经批准的 MCP 服务器来源。添加会话作用域的只读目录批准到路径访问提示。权限提示在恢复中断的会话后仍可回答。 |
| **v1.0.90-7** | 2026-10-01 | 修复和变更。 |
| **v1.0.90-6** | 2026-09-30 | 添加 GPT-6.1 Sol 支持。点击展开的工具调用任意位置可折叠。按住 Space 键并按 Ctrl+X V 可在语音模式关闭时进行解释。 |

---

## 3. 热门问题

| # | 问题 | 摘要 | 👍 | 状态 |
|---|------|------|---|------|
| **#1274** | [CLI 持续出现 400 错误：无效请求体](https://github.com/github/copilot-cli/issues/1274) | 95% 的代码审查 diff 尝试都以 400 错误失败。调试日志显示服务器端验证或请求构造存在问题。 | 13 | 待处理 |
| **#1973** | [功能请求：交互模式的工具白名单](https://github.com/github/copilot-cli/issues/1973) | 请求自动批准安全的只读操作（grep、cat、find、git log），无需手动批准或 /allow-all。 | 29 | 待处理 |
| **#2205** | [终端（Terminator）中的滚动问题](https://github.com/github/copilot-cli/issues/2205) | 鼠标滚动导航的是输入历史而非代理输出历史。 | 16 | 待处理 |
| **#3282** | [添加多 BYOK 模型能力](https://github.com/github/copilot-cli/issues/3282) | 启用多个 BYOK 模型并通过环境变量配置；在 TUI 中允许切换。 | 31 | 已关闭 |
| **#4438** | [disable-model-invocation: true 使技能无法访问](https://github.com/github/copilot-cli/issues/4438) | 带有此 frontmatter 的技能在列表中显示，但显式调用时返回“技能未找到”。 | 11 | 待处理 |
| **#5008** | [启动错误“读取模型提供商归属失败”](https://github.com/github/copilot-cli/issues/5008) | 竞态条件：授权约 3 秒完成后，启动时错误出现两次。 | 4 | 待处理 |
| **#2736** | ["posix_spawnp failed" 错误并误报命令](https://github.com/github/copilot-cli/issues/2736) | CLI 无法启动 shell 命令，随后错误地报告命令不存在。 | 6 | 已关闭 |
| **#4998** | [macOS 更新后 CLI 不可用——设备 ID 过期](https://github.com/github/copilot-cli/issues/4998) | macOS 安全更新/重启后，会话无法处理提示，因为 `.mcp-writer.binding` 中持久化了过期的文件系统设备 ID。 | 1 | 待处理 |
| **#4851** | [Azure MCP 服务器发送 HTTP 请求失败](https://github.com/github/copilot-cli/issues/4851) | 验证 Azure API Center MCP 注册表时出现 BrokenPipe 错误；夜间突然中断。 | 7 | 待处理 |
| **#3595** | [AutoPilot 模式应在用户输入时暂停](https://github.com/github/copilot-cli/issues/3595) | 请求：在代码审查场景中应用修复前暂停等待用户确认。 | 2 | 待处理 |

---

## 4. 主要 PR 进展

过去 24 小时内没有更新的拉取请求。

---

## 5. 热门讨论

未提供讨论数据。

---

## 6. 功能请求趋势

根据问题分析，最受关注的功能方向包括：

1. **细粒度权限控制** — 交互模式的工具白名单（#1973）、会话作用域只读批准
2. **多模型灵活性** — 多 BYOK 模型支持（#3282）、会话内模型切换
3. **改进的会话恢复** — 恢复时正确的滚动位置（#4894）、准确的用量数据（#524）、无竞态条件（#5008）
4. **AutoPilot 工作流增强** — 任务中途暂停等待用户输入（#3595）、会话中途切换到 AutoPilot（#2203）
5. **终端/用户体验改进** — 键盘可导航的分页器（#5015）、对话折叠/高亮（#4995）
6. **MCP 集成可靠性** — 注册表连接（#4949）、OAuth 路径处理（#4662）、设备 ID 持久化修复（#4998）

---

## 7. 开发者痛点

社区持续反馈以下方面的摩擦：

- **授权竞态** — 授权完成前的启动错误（#5008）
- **MCP 脆弱性** — 工作区 `.mcp.json` 已检测但未连接（#4542）；macOS 更新后设备 ID 过期导致 MCP 失效（#4998）
- **请求失败** — 有效代码审查请求的高失败率（#1274）
- **终端导航** — 滚动行为回退（#2205）、无法用键盘导航会话侧边栏（#4304）
- **工具批准疲劳** — 交互模式下每次工具调用都需要手动批准（#1973）
- **Azure MCP 回归** — 影响生产工作流的夜间中断（#4851）

---

*根据 2026-10-01 的 GitHub 数据生成*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode community digest from English to Chinese. Let me follow the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references, project names, etc. as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical accuracy.</think>

# OpenCode 社区简报 — 2026 年 10 月 1 日

## 今日要闻

OpenCode v1.18.34 针对 macOS 27+ 推出了关键的兼容性修复，同时优化了会话头处理以解决路由问题。社区正在积极讨论 XDG 基础目录规范违规、插件中的会话管理缺口，以及持续影响多个用户的 Go 订阅/认证问题。

---

## 版本发布

**v1.18.34** — 核心更新

- **会话头**：现在随模型请求发送命名空间会话和父会话身份头，解决了路由问题（#47763）
- **macOS 27+ 兼容性**：重新签名本地编译的二进制文件，确保在 macOS 27+ 上正常运行
- **Developer ID 签名**：macOS CLI 发布版本现使用 Developer ID 签名

感谢 3 位社区贡献者。

---

## 热门议题

| # | 议题 | 概要 | 为何重要 |
|---|-----|---------|----------------|
| [#27786](https://github.com/anomalyco/opencode/issues/27786) | **XDG 基础目录规范违规** | 运行时依赖安装到 `~/.config/opencode` 而非 `~/.local/share` | 违反 Linux 桌面标准；19 条评论，9 👍 |
| [#49389](https://github.com/anomalyco/opencode/issues/49389) | **五个会话功能插件无法访问** | 核心有会话枚举/压缩/移除但插件无法调用 | 限制插件扩展性；12 条评论，4 👍 |
| [#42935](https://github.com/anomalyco/opencode/issues/42935) | **Go 配额约 20 分钟耗尽** | DeepSeek V4 Flash 缓存读取降至 0，配额快速耗尽 | 订阅计费问题；10 条评论，4 👍 |
| [#36423](https://github.com/anomalyco/opencode/issues/36423) | **后台子代理无取消支持** | v2 子代理返回会话 ID 但无取消 API | 工作流中断受阻；6 条评论，7 👍 |
| [#47763](https://github.com/anomalyco/opencode/issues/47763) | **400 MissingSessionID - 头未发送** | Go 提供商请求因缺少 `x-opencode-session` 头失败 | 阻塞 Go 提供商使用；3 条评论，9 👍 |
| [#52367](https://github.com/anomalyco/opencode/issues/52367) | **gpt-6-luna 使用量报告但从未使用** | 仪表盘显示用户从未选择的模型使用量 | 计费透明度问题；3 条评论 |
| [#52371](https://github.com/anomalyco/opencode/issues/52371) | **Muse Spark 两天耗尽限额** | Go 订阅耗尽速度超出预期 | 订阅追踪问题；3 条评论 |
| [#52293](https://github.com/anomalyco/opencode/issues/52293) | **Go 订阅孤立** | CLI 可用但仪表盘显示无订阅，无支持响应 | 账户管理故障；2 条评论 |
| [#52267](https://github.com/anomalyco/opencode/issues/52267) | **Go 计划所有模型均 403** | 活跃订阅但所有 Go 模型返回 403 | 访问阻塞问题；2 条评论 |
| [#52404](https://github.com/anomalyco/opencode/issues/52404) | **TUI 可点击超链接** | 终端输出缺少 OSC 8 超链接支持 | UX 改进请求；2 条评论 |

---

## 关键 PR 进展

| # | PR | 状态 | 描述 |
|---|-----|--------|-------------|
| [#52369](https://github.com/anomalyco/opencode/pull/52369) | **refactor(app): 将 GUI 功能移至内置扩展** | OPEN | 扩展优先的 GUI 架构 — 桌面/网页功能作为内置扩展发布 |
| [#52323](https://github.com/anergyco/opencode/pull/52323) | **fix(tui): $EDITOR 支持参数和空格** | OPEN | 支持运行带参数的 Notepad++ |
| [#51787](https://github.com/anomalyco/opencode/pull/51787) | **fix(tui): 用引号路径启动编辑器** | OPEN | 修复含空格路径的 `/editor` 和 `/export` |
| [#52391](https://github.com/anomalyco/opencode/pull/52391) | **fix(opencode): 内联 Nemotron/Qwen 工具模式引用** | OPEN | 将 MCP `$ref` 参数作为 JSON 字符串处理 |
| [#52386](https://github.com/anomalyco/opencode/pull/52386) | **fix(core): 回滚中断的 shell 获取** | OPEN | 防止中断后 shell 管理器存活超过调用者 |
| [#52382](https://github.com/anomalyco/opencode/pull/52382) | **fix(core): 跳过直接读取指令的自动复制** | OPEN | 读取同一文件时防止冗余 `AGENTS.md` 复制 |
| [#50184](https://github.com/anomalyco/opencode/pull/50184) | **fix(core): 保留传统 apply_patch 权限规则** | OPEN | 为 `normalizeAction` 添加缺失的 `apply_patch` 别名 |
| [#52398](https://github.com/anomalyco/opencode/pull/52398) | **feat(theme): 添加 ZenBlue 主题** | OPEN | 新主题选项 |
| [#50844](https://github.com/anomalyco/opencode/pull/50844) | **fix: 支持自托管 GitLab Duo 实例** | OPEN | 使用配置的实例 URL 而非硬编码的 gitlab.com |
| [#43069](https://github.com/anomalyco/opencode/pull/43069) | **feat(cli): 添加无认证 serve 选项** | OPEN | 支持 `opencode serve --no-auth` 和 `OPENCODE_AUTH=false` |

**近期合并：**
- [#52384](https://github.com/anomalyco/opencode/pull/52384) — 修复 GitHub 代理发布破损会话链接（404）问题
- [#52387](https://github.com/anomalyco/opencode/pull/52387) — 向插件 API 暴露会话移除功能
- [#52385](https://github.com/anomalyco/opencode/pull/52385) — 向插件 API 暴露会话压缩功能
- [#52388](https://github.com/anomalyco/opencode/pull/52388) — 使模型能力默认值向前兼容 GPT-6、GLM-4.6+

---

## 功能请求趋势

1. **插件会话 API 扩展** — 多项请求（#49389、#52387、#52385）要求向插件暴露核心会话操作（枚举、压缩、移除）
2. **稳定模型路由别名** — 请求 `glm-flash-latest` 和 `deepseek-flash-latest` 别名（#52403）
3. **终端 UX 增强** — TUI 可点击超链接（#52404）
4. **macOS 兼容性** — 持续修复新版 macOS 问题
5. **无认证 serve 模式** — CLI 选项用于无密码部署（#43069）

---

## 开发者痛点

1. **Go 订阅/认证可靠性** — 多位用户报告订阅孤立、虽有活跃订阅但收到 403、仪表盘访问问题
2. **配额追踪透明度** — 用户对配额快速耗尽和虚假模型使用量（gpt-6-luna）感到困惑
3. **XDG 规范合规** — Linux 用户受目录放置错误影响
4. **TUI 编辑器集成** — 含空格路径和外部编辑器参数处理仍有问理
5. **提示缓存回退** — DeepSeek flash 模型显示缓存失效问题（#51993）
6. **子代理取消** — v2 中无方式终止后台子代理任务

---

*数据来源：github.com/anomalyco/opencode — 2026 年 10 月 1 日*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this GitHub digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, code references as-is
- Use natural technical Chinese register

Let me translate this carefully while preserving all formatting.</think>

# Pi 社区摘要 — 2026-10-01

## 今日要闻

v0.99.2 版本对 MCP 服务器处理进行了重要改进——默认 `codemode` 暴露的服务器现在不再阻挡首轮提示词，而是出现在简短的系统提示词区域。与此同时，社区正在积极解决几个高影响力问题：一个关于按 ESC 停止思考后 Pi 卡在"Working..."状态的 bug 已累积 18 条评论，开发者还在修复 OAuth 边缘情况，同时改进 MCP 工具名消歧和 SQLite 存储性能。

---

## 发布动态

### v0.99.2
**MCP 服务器不再挡道** — 具有默认 `codemode` 暴露的服务器不再列在 `codemode` 描述中，也不再阻挡首轮提示词。它们现在出现在简短的系统提示词区域，脚本通过 `searchTools()` 和 `describeName` 查找工具。

*过去 24 小时内无其他发布。*

---

## 热门 Issue

| Issue | 摘要 | 为何重要 | 反馈 |
|-------|------|----------|------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **按 ESC 停止思考后 Pi 卡在"Working..."** — 用户报告在用 ESC 中断思考后经常卡住；只有 `CTRL+c` 和恢复会话才能继续。自约 v0.84.0 起已活跃约一个月。 | 交互式会话的核心 UX 阻塞器；影响多台机器。 | 18 条评论，2 👍 |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | **context size 默认 128k 而非实际可用大小** — 当 `models.json` 条目重复了提供商暴露的模型 ID 时，Pi 错误地使用 128k 上下文和错误的 cost/maxTokens 值。 | 影响计费准确性和 token 规划；静默的错误行为。 | 9 条评论，4 👍 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | **TuiMainScreen 全屏重绘风暴** — 在长对话记录上，`doRender()` 在思考尾部增长时几乎每帧都触发全量重绘，导致剧烈跳动和文字重影。 | 长对话时严重的终端 UX 退化。 | 8 条评论，1 👍 |
| [#10162](https://github.com/earendil-works/pi/issues/10162) | **输入图片过多导致 agent 任务停止** — 引入视觉能力后，图片过多会导致 agent 停止。 | 限制多图分析工作流；影响长时间运行的 agent 会话。 | 6 条评论 |
| [#8331](https://github.com/earendil-works/pi/issues/8331) | **提供程序流停滞时 Agent 循环永久挂起** — 在 SSE 流停滞期间（如 Anthropic 529 过载），`streamAssistantResponse` 中的 `for await` 会永远等待。 | 提供商故障期间的生产可靠性问题。 | 6 条评论，2 👍 |
| [#9134](https://github.com/earendil-works/pi/issues/9134) | **Anthropic 适配器丢弃自定义工具 schema 的根级 anyOf** — 根级 `anyOf` 约束在面向模型的 `input_schema` 中被静默移除，尽管在 Pi 的验证器中保留了。 | 破坏使用 `anyOf` 进行复杂验证的工具定义；静默数据丢失。 | 5 条评论 |
| [#9852](https://github.com/earendil-works/pi/issues/9852) | **openai-responses: function_call 名称未转义** — 包含 `:` 的工具名（如 `mcp:server:tool`）未经转义就发送到 OpenAI Responses API，导致 400 错误。 | 破坏 MCP 工具在 OpenAI 兼容端点的使用。 | 3 条评论 |
| [#10257](https://github.com/earendil-works/pi/issues/10257) | **切换到 Codex 时自定义工具 ID 错误** — 会话中途切换模型失败，因为 codemode 回放使用 `fc_` ID 而非预期的 `ctc_` 前缀。 | 阻塞活跃会话中的模型切换。 | 4 条评论 |
| [#10169](https://github.com/earendil-works/pi/issues/10169) | **TUI 模式下的颜色溢出** — 选择带颜色的 AI 回复后，颜色会泄漏到后续文本。 | 终端 UI 视觉 bug；影响复制粘贴和搜索。 | 3 条评论 |
| [#8528](https://github.com/earendil-works/pi/issues/8528) | **复制 agent 输出时保留尾随空格** — Markdown 渲染将每行填充到终端宽度，粘贴时保留了尾随空格。 | 粘贴到 vim 等编辑器时令人烦恼。 | 3 条评论 |

---

## 关键 PR 进展

| PR | 摘要 | 状态 |
|----|------|------|
| [#10242](https://github.com/earendil-works/pi/pull/10242) | **Anthropic 提供程序：使用 SDK 工作负载身份联合** — 支持 `ANTHROPIC_FEDERATION_RULE_ID`、`ANTHROPIC_ORGANIZATION_ID` 等云认证环境变量。 | ✅ 已关闭 |
| [#10241](https://github.com/earendil-works/pi/pull/10241) | **消歧 MCP codemode 工具名** — 修复 `read-file` 和 `read_file` 规范化到相同标识符导致工具调用错误的碰撞问题。 | ✅ 已关闭 |
| [#10232](https://github.com/earendil-works/pi/pull/10232) **使 SQLite 存储异步** — 使适配器能在 harness 运行时外运行；新 `run`、`get`、`all` API。 | ✅ 已关闭 |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | **Anthropic OAuth 添加代码登录方式** — 支持远程 Pi 使用的代码登录，而非本地主机重定向。 | ✅ 已关闭 |
| [#10218](https://github.com/earendil-works/pi/pull/10218) | **在前导空格后完成斜杠命令** — 修复空格前缀错误触发补全的问题。 | ✅ 已关闭 |
| [#10197](https://github.com/earendil-works/pi/pull/10197) | **统一包工件验证** — 通过清单支持的内容寻址工件改进发布工作流。 | 🟡 开放中 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **支持 Azure Foundry Chat Completions 部署** — 将 Azure 提供程序从 Responses API 扩展到支持 Foundry 部署。 | 🟡 开放中 |
| [#10233](https://github.com/earendil-works/pi/pull/10233) | **添加 --base-url 和 --api-type 用于运行时的端点覆盖** — 支持针对不同主机的一次性运行，无需编辑 `models.json`。 | ✅ 已关闭 |
| [#10235](https://github.com/earendil-works/pi/pull/10235) | **嵌入式 Pi 的编程式提供程序配置** — 允许 agiquery 等外部应用在启动时注入模型配置。 | ✅ 已关闭 |
| [#10246](https://github.com/earendil-works/pi/pull/10246) | **重新加载 defaultTools 的新增内容** — 会话现在无需重启即可获取新的默认工具；保留显式启动选项。 | ✅ 已关闭 |

---

## 热门讨论

| 讨论 | 摘要 | 类别 |
|------|------|------|
| [#5936](https://github.com/earendil-works/pi/discussions/5936) | **Pi 为何不使用原生终端光标？** — 提议使用原生终端光标而非带反色的自定义块符号。 | 💡 想法 |
| [#10230](https://github.com/earendil-works/pi/discussions/10230) | **codemode 太棒了，有基准测试吗？** — 开发者对 codemode "only" 模式印象深刻，询问 token 节省情况；对比 Nvidia SoL 研究。 | 🚀 展示 |

---

## 功能请求趋势

基于 issue 和讨论分析，社区正在推动以下方向的进展：

1. **MCP 改进** — 工具名消歧、OAuth 完善（authServerMetadataUrl、空 scope 处理）、延迟服务器连接、可点击认证链接。
2. **提供程序灵活性** — 工作负载身份联合（Anthropic）、Azure Foundry Chat Completions、编程式提供程序配置、运行时端点覆盖。
3. **终端 UI 优化** — 原生光标支持、颜色溢出修复、全屏重绘优化、粘贴标记改进。
4. **Agent 可靠性** — 流停滞处理、视觉/图片限制、会话持久化边缘情况。
5. **Schema/工具链** — 保留 JSON Schema 关键字（`anyOf`、`oneOf`）、OpenAI 函数名转义、本地 schema 引用内联。

---

## 开发者痛点

- **卡在"Working..."** — ESC 中断思考后的挂起问题正严重影响多个用户的日常使用。
- **MCP OAuth 摩擦** — 空 scope 字段、缺失的 metadata URL 支持、长认证链接造成配置障碍。
- **模型切换失败** — 会话中途切换模型因 ID 前缀不匹配和工具 schema 问题而失败。
- **上下文大小误报** — 上下文窗口的静默错误配置导致计费/token估算不准确。
- **终端性能** — 长对话记录上的重绘风暴和 TUI 颜色溢出降低交互体验。

---

*摘要基于 2026-10-01 的 GitHub 数据为 earendil-works/pi 生成。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese. Let me analyze what I need to do:

1. Translate all English text to Simplified Chinese
2. Keep all Markdown structure exactly as-is
3. Preserve technical terms, code references, URLs, issue numbers, etc.
4. Use natural technical Chinese register - the kind used in Chinese developer newsletters

Let me go through and translate section by section, keeping the structure intact.

The main content to translate:
- Title and date
- Today's Highlights section
- Releases section
- Hot Issues section (title, descriptions, priority labels)
- Key PR Progress section (title, descriptions)
- Feature Request Trends section (title, descriptions, table)
- Developer Pain Points section (title, descriptions)
- Footer text

Let me do this translation carefully, preserving all formatting.</think>

# Qwen Code 社区动态 — 2026-10-01

## 今日要闻

Qwen Code 社区正在推进 **Managed Agent 架构** 的进展，在会话持久化、Turn 管理和工作区托管方面取得显著成果。有一个关键安全修复解决了 `cd` 命令的漏洞，该漏洞会在写权限拒绝检查中静默丢弃重定向目标。项目持续迭代分阶段交付模型，多个 PR 推进了 Stage G（会话历史/接管）和 Stage H（持久化钩子）的实现。

---

## 发布版本

### v0.24.7-nightly.20260930.57e720bc97
**发布日期：** 2026-09-30

**变更内容：**
- **fix(core):** 对齐 Code Mode 文本与延迟工具发现机制 ([#12990](https://github.com/QwenLM/qwen-code/pull/12990))
- **fix(permissions):** 正确应用已批准的权限配置

---

## 热门 Issue

### 1. [proposal(serve): 定义 Managed Agent 双路径架构与分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380)
**优先级：** P2 | **评论数：** 38 | **作者：** doudouOUC

定义了分阶段的 Managed Agent 架构，保持现有的 TypeScript agent 循环，将模型推理与工具环境配置分离，并赋予会话持久化所有权、工作区绑定、可恢复的工具执行以及稳定的 WebSocket 接口。这是新一代会话管理系统的奠基性提案。

### 2. [fix(core): cd 分段静默丢弃写拒绝检查中的重定向目标](https://github.com/QwenLM/qwen-code/issues/13106)
**优先级：** P1 | **评论数：** 4 | **作者：** he-yufeng

**安全漏洞：** `resolveCdTargetCwd` 函数调用了 `extractRedirects()` 但丢弃了结果，使得复合命令 `cd somedir > .qwen/settings.json` 能够绕过写权限拒绝检查。Shell 会截断重定向目标，而安全层看到的是零个提取的操作。

### 3. [A speculative accept that fails to apply files emits no telemetry at all](https://github.com/QwenLM/qwen-code/issues/13062)
**优先级：** P3 | **评论数：** 8 | **作者：** feiiiiii5

当一个推测性后续操作通过将推测的文件复制回工作树来接受时，如果某个复制失败，接受操作仍然报告成功，同时不发送任何遥测数据。这会导致失败的文件操作审计追踪出现空白。

### 4. [Qwen Code Desktop 因所有工作区突然变为不受信任而无法使用](https://github.com/QwenLM/qwen-code/issues/13130)
**优先级：** P2 | **评论数：** 3 | **作者：** skaf777

用户报告所有工作区突然变为只读/不受信任状态，且没有实际的恢复途径。发生此状态后，UI 没有提供重置信任配置的途径。

### 5. [proposal(managed-agent): 安全恢复过期的工具发布候选](https://github.com/QwenLM/qwen-code/issues/13019)
**优先级：** P2 | **评论数：** 8 | **作者：** doudouOUC

PR #12894 的后续。当某个分段 PUT 结果不确定且操作在其槽位仍为 `CANDIDATE` 状态时过期，重放机制需要使用相同的请求字节安全地恢复原始操作。

### 6. [feat(managed-agent): Stage D 持久化生命周期、Turn、Action 后续工作](https://github.com/QwenLM/qwen-code/issues/12867)
**优先级：** P2 | **评论数：** 11 | **作者：** wenshao

涵盖 Stage D 剩余项目：持久化生命周期、Turn、Action、`java_durable` 准入配置文件和 AgentDefinition。这是 Managed Agent 路线图 (#12380) 的一部分。

### 7. [perf(memory): 在 no-op 提取后添加有界冷却时间](https://github.com/QwenLM/qwen-code/issues/13004)
**优先级：** P3 | **评论数：** 5 | **作者：** yiliang114

建议在完成 no-op 之后对托管自动记忆提取实施有界节拍策略，防止在最近几次 Turn 未产生任何持久化内容时，每个成功的用户 Turn 后都运行新的派生提取器。

### 8. [fix(core): 扩展生命周期事件忽略隐私设置](https://github.com/QwenLM/qwen-code/issues/12770)
**优先级：** P2 | **评论数：** 4 | **作者：** 4ekuct25

扩展生命周期事件（安装、卸载、更新、启用、禁用）仍然被排队发送到 RUM 上传器，即使 `privacy.usageStatisticsEnabled: false` 已设置。

### 9. [LSP 诊断可能在查询失败或不可用时报告干净的结果](https://github.com/QwenLM/qwen-code/issues/12467)
**优先级：** P2 | **评论数：** 4 | **作者：** shenyankm

当诊断拉取失败时，系统以 `tool_result.isError: false` 报告"未发现诊断"，虚假地表明代码是干净的，而语言服务器实际上并未返回结果。

### 10. [feat(core): 添加 maxConcurrentBackgroundAgents 设置并在瞬态 API 错误时重试](https://github.com/QwenLM/qwen-code/issues/12959)
**优先级：** P3 | **评论数：** 4 | **作者：** kolya182

并行启动 6-7 个后台子 agent 时，所有请求同时发送推理请求，可能超出端点限制，导致 HTTP 400 错误。需要一个可配置的并发限制和重试逻辑。

---

## 关键 PR 进展

### 1. [feat(managed-agent): 实现持久化托管钩子 (H2)](https://github.com/QwenLM/qwen-code/pull/13129)
**作者：** wenshao

为私有托管工作区会话实现 H2：持久化钩子目录、固定出现计划、一次性意图执行记录、动态注册、本机事件调度以及原始所有者恢复。

### 2. [feat(managed-agent): 添加托管文件历史与撤销](https://github.com/QwenLM/qwen-code/pull/13110)
**作者：** wenshao

托管工作区写/编辑现在保留调度前的原始文件内容，并在模型继续之前整理文件历史。用户可以检查历史并将文件回滚到目标提示开始时的状态。

### 3. [feat(managed-agent): 在私有 ACP 子进程中托管 Managed 会话 (M2)](https://github.com/QwenLM/qwen-code/pull/13131)
**作者：** wenshao

实现普通主机 Managed 引擎设计的 M2 切片：托管主机作为私有 Managed 模式下的普通 `qwen --acp` 子进程，加上守护进程通道工厂。

### 4. [feat(managed-agent): 托管 Turn 接管与 G1 故障转移端到端](https://github.com/QwenLM/qwen-code/pull/13083)
**作者：** wenshao

实现 Stage G Turn 接管的 Harness 端部分。替换的托管 Harness 加载一个在 `await_runtime` / `results_ready` 检查点停靠的会话。

### 5. [feat(managed-agent): 让工作区绑定会话的创建者提交、取消和重命名](https://github.com/QwenLM/qwen-code/pull/13112)
**作者：** yiliang114

允许工作区绑定托管会话的创建者继续与之交互。当前 G0 只接受初始文件工具 Turn，后续提交会被拒绝。

### 6. [feat(web-shell): 在托管面板中显示和响应托管工具审批](https://github.com/QwenLM/qwen-code/pull/13107)
**作者：** yiliang114

在托管面板中显示待处理的托管工具审批，并允许会话创建者批准或拒绝它们。之前，等待权限的托管 Turn 没有 UI 途径。

### 7. [fix(managed-agent): 使用有界验证恢复发布过期](https://github.com/QwenLM/qwen-code/pull/13114)
**作者：** doudouOUC

区分飞行中发布截止日期过期、声明过期、围栏和临时争用与确定性拒绝。使用相同的请求字节恢复原始操作。

### 8. [fix(core): 将失败的提醒-less 通知 turn 恢复为 interrupted_prompt](https://github.com/QwenLM/qwen-code/pull/13126)
**作者：** yiliang114

修复 #12042 的剩余部分：在后台运行并中途失败的提示通知 turn 现在正确恢复为 `interrupted_prompt` 而不是 `clean`。

### 9. [feat(core): 默认延迟 agent 和 goal 声明](https://github.com/QwenLM/qwen-code/pull/13033)
**作者：** yiliang114

使 Agent 和 Goal 协调工具（`agent`、`list_agents`、`get_goal`、`update_goal`、`propose_goal`）默认按需发现，无需用户配置 `tools.eager` 设置。

### 10. [fix(cli): 在无缺失文件窗口的情况下发布设置](https://github.com/QwenLM/qwen-code/pull/13119)
**作者：** doudouOUC

通过在调用拥有的目录中暂存完整字节、在恢复前复制先前内容、使用一次替换重命名发布，保持整个保存过程中现有设置可读。

---

## 功能请求趋势

根据 Issue 分析，社区在以下主要方向提出请求：

| 趋势 | 描述 |
|-------|-------------|
| **Managed Agent 架构** | 多阶段交付托管 agent 能力，包括持久化生命周期、会话历史、Turn 管理、工作区绑定和故障转移机制 |
| **会话持久化** | 可恢复的工具执行、会话检查点、Turn 接管以及断连后的持久化会话状态 |
| **安全加固** | 修复凭据安全、权限执行和写拒绝绕过漏洞 |
| **内存与性能** | 有界冷却策略、后台 agent 并发限制以及长会话延迟优化 |
| **遥测与可观测性** | 改进推测接受、扩展生命周期事件和诊断操作的遥测 |
| **UI/UX 改进** | 信任配置恢复、大型数据上下文快照渲染以及工具审批工作流 |

---

## 开发者痛点

1. **工作区信任锁定** — 用户报告无法从"不受信任工作区"状态恢复，使桌面应用程序无法使用

2. **并发限制** — 运行多个后台子 agent 会同时发送推理请求，触发 HTTP 400 错误，因为超出端点请求限制，且没有可配置的解决方案

3. **LSP 误报** — 失败的诊断查询报告为"干净"代码，误导用户对实际代码质量的判断

4. **会话恢复复杂性** — 中途失败的后台通知 turn 被错误分类，导致终端结果不正确

5. **隐私设置绕过** — 扩展生命周期事件忽略用户隐私设置，仍然上传到 RUM

6. **设置发布竞态条件** — 设置文件在保存过程中可能暂时不可读

7. **托管会话单次 Turn 限制** — 工作区绑定的托管会话只能执行一次 Turn；创建者无法提交后续消息

---

*动态摘要基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*