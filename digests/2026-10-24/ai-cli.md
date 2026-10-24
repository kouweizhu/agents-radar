# AI CLI 工具社区动态日报 2026-10-24

> 生成时间: 2026-10-24 00:59 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the entire report from English to Simplified Chinese. I need to:
1. Translate all the text content (headings, body text, list items, table content)
2. Keep all Markdown structure, tables, code, URLs, links, numbers exactly as-is
3. Use natural technical Chinese appropriate for a developer newsletter

Let me go through and translate this carefully while preserving all formatting and technical terms.</think>

# 跨工具对比：AI CLI 工具生态

## 生态概览

AI CLI 工具领域已显著成熟，七大平台正在争夺开发者的关注。市场呈现明显分化：**Claude Code** 和 **OpenAI Codex** 在社区参与度和发布频率上领先，而 **GitHub Copilot CLI** 则依托深度平台集成。**Qwen Code** 和 **Gemini CLI** 等新玩家分别专注于架构和终端渲染优化。所有工具的共同主题包括内存优化、可扩展性架构和跨平台可靠性——这表明该类别正从实验性功能转向生产级稳定性。

---

## 活动对比

| 工具 | 仓库 | Issue | PR | 讨论区 | 发布（24小时） |
|------|------|-------|-----|--------|----------------|
| **Claude Code** | anthropics/claude-code | 50（显示前30） | 0 | 未提供* | 1（v2.1.310） |
| **OpenAI Codex** | openai/codex | 50（显示前30） | 20+ | 活跃 | 3（v0.164.0） |
| **Gemini CLI** | google-gemini/gemini-cli | 50（显示前30） | 10+ | 未提供* | 1（v0.67.0） |
| **GitHub Copilot CLI** | github/copilot-cli | 31（显示前30） | 0 | 未提供* | 2（v1.0.104） |
| **OpenCode** | anomalyco/opencode | 50（显示前30） | 10+ | 未提供* | 0 |
| **Pi** | earendil-works/pi | 50（显示前30） | 10+ | 活跃 | 0 |
| **Qwen Code** | QwenLM/qwen-code | 50（显示前30） | 10+ | 未提供* | 1（v0.26.0） |

*这些仓库的讨论区未在采集数据中出现，但它们可能使用其他渠道（如 Discord、专属论坛）进行活跃讨论。

---

## 共同功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **多账户 / 配置管理** | Claude Code（#18435，947 👍）、GitHub Copilot CLI | 轻松切换工作/个人账户 |
| **跨设备会话同步** | OpenAI Codex（#14067，69 👍）、Pi | 线程跨机器持久化 |
| **内存优化** | Qwen Code（TUI/守护进程 OOM）、Claude Code（使用量消耗）、OpenCode（空闲 1GB+） | 进程内存限制、延迟加载 |
| **可扩展性 / 插件** | Claude Code（Mods #91870）、OpenCode（provider 扩展）、Gemini CLI（AST 感知工具） | 自定义技能调用、插件 API |
| **权限 / 安全加固** | Claude Code（非请求删除）、OpenCode（VPN 绕过漏洞）、Copilot CLI（可信文件夹） | 路径遍历、沙箱、凭证管理 |
| **终端渲染改进** | Gemini CLI（模糊宽度字符）、Pi（UTF-8 分块）、Copilot CLI（emoji/中文）、OpenCode（滚动延迟） | 跨终端兼容性 |
| **子代理自主性** | Claude Code（MAX_TURNS 恢复）、Gemini CLI（技能利用率）、Pi（exec 可靠性） | 更好的代理编排 |
| **Windows 平台差距** | Claude Code（CPU 循环、文件夹挂载）、Codex（沙箱、运行时）、Copilot CLI（PowerShell 冲突）、OpenCode（控制台闪烁）、Gemini CLI（Wayland） | 平台一致性 |

---

## 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级可扩展性、深度工具集成 | 需要高度定制 AI 工作流的开发者 | Mods/插件架构，配套工具生态丰富 |
| **OpenAI Codex** | 代理化工作流、IDE + CLI 对等 | 全栈开发者、复杂工具链团队 | ACP 协议、Server-sent events 流式传输、MCP 集成 |
| **Gemini CLI** | 终端原生 UX、高效流式传输 | CLI 优先开发者、终端爱好者 | 紧凑 JSON 架构、增量渲染、ACP 模式 |
| **GitHub Copilot CLI** | GitHub 生态集成 | 现有 GitHub 用户、企业团队 | 原生 GitHub 集成，权限模型与组织绑定 |
| **OpenCode** | 自托管、成本透明 | 成本敏感团队、自托管部署 | Go 语言，本地优先，细粒度成本报告 |
| **Pi** | 轻量 TUI、编码代理 | 极简开发者 | 紧凑 TUI、exec 流式传输、编码专用代理 |
| **Qwen Code** | 托管代理基础设施 | 企业/团队部署 | Kubernetes harness 池、守护进程 token 持久化、内存作用域 |

---

## 社区活力与成熟度

### 高速度 / 活跃开发
1. **OpenAI Codex** — PR 活动最活跃（20+），每周多次发布，漏洞修复积极
2. **Qwen Code** — PR 吞吐量强劲，架构工作（Managed Agent 双路径），每夜构建频繁
3. **Gemini CLI** — 安全修复积极，终端渲染改进，ACP 中途转向

### 稳定迭代
4. **Claude Code** — 发布稳定，但数据窗口内 0 PR 表明合并节奏较慢
5. **OpenCode** — 10 个 PR 包含重大功能（Go 配额显示、延迟图片加载）
6. **Pi** — 10 个 PR 聚焦正确性（UTF-8、ARM32 二进制、会话分支）

### 成熟期
7. **GitHub Copilot CLI** — 窗口内 0 PR，迭代较慢；专注权限模型简化

### 社区参与度排行
- **Claude Code**：可扩展性（#91870）269 条评论，多账户（#18435）947 👍 — 参与度最高
- **OpenAI Codex**：使用限制 59 条评论，同步功能 69 👍
- **Qwen Code**：架构提案 71 条评论，多 issue 跟踪的史诗级功能

---

## 趋势信号

### 产品规划者参考
1. **企业可扩展性是主战场** — Claude Code 的 Mods 提案（#91870）和 OpenCode 的动态 API 密钥支持（#1302）表明，为组织工作流定制是核心差异化因素。

2. **内存性能是基本门槛** — 每个工具都在投资内存优化。用户期望空闲内存 <1GB；OOM 崩溃是所有平台的 P1 问题。

3. **权限模型需要简化** — GitHub Copilot CLI 的 Assisted Permissions 去掉实验模式，以及 Claude Code 的权限处理改进，表明行业正朝着更低摩擦方向演进，而非增加配置。

4. **Windows 是新的 Linux** — 多个工具存在 Windows 特有 issue（沙箱失败、控制台闪烁、运行时降级）。跨平台一致性是竞争因素。

### 开发者参考
5. **子代理编排是难点** — 每个工具都在 MAX_TURNS 处理、子代理恢复和技能利用上吃力。这是需求高但未解决的技术难题。

6. **终端渲染碎片化** — 模糊宽度字符、UTF-8 分块、emoji 支持——这些边缘情况对国际用户很重要，表明成熟工具的严格要求。

7. **成本可见性很重要** — OpenCode 的按模型乘数、成本报告和 Go 配额功能响应企业对支出透明度的需求。

### 行业影响
8. **MCP 生态正在扩展** — 多个工具（Codex、Claude、Gemini）引用 Model Context Protocol 集成；标准化正在形成。

9. **ACP（代理通信协议）采用** — Gemini CLI 和 Codex 都在 ACP 模式上投入，表明行业正朝着代理间标准化通信发展。

10. **夜间构建 / CI 驱动开发** — 大多数工具现在每夜构建并快速迭代；功能开关实现快速回滚。

---

*跨工具分析基于各工具摘要汇编 — 2026 年 10 月 24 日*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the report into Simplified Chinese. I need to:

1. Translate the content while preserving the exact Markdown structure
2. Keep all URLs, issue numbers, code references, and technical identifiers as-is
3. Use natural technical Chinese register (like a developer newsletter)
4. Output ONLY the translation, no explanation or markdown fences

Let me translate:

Title: Claude Code Skills 社区动态报告

Date: 截至 2026 年 10 月 24 日

Let me go through and translate each section carefully while preserving structure.</think>

# Claude Code Skills 社区动态报告

*数据截至 2026 年 10 月 24 日*

---

## 1. 热门技能排行

所有 PR 的评论数均显示 `undefined`，因此本排名依据**更新时效、技术重要性和领域相关性**进行排序：

| PR | 技能/变更 | 功能 | 状态 |
|----|--------------|---------------|--------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder` 修复 | 更新 MCP 技能构建器以支持 `mcp>=2.0.0` — 包括 `streamable_http_client` 重命名及通过 `create_mcp_http_client` 配置自定义 HTTP 头 | OPEN |
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` 修复 | 隔离触发器评估、修复 Windows 兼容性（子进程管道处理）、改进运行时故障处理 | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` | 将产品/技术规范转化为具体的 Notion 任务，包含实施计划、验收标准和进度追踪 | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | 面向 Solidity/Rust 智能合约的自动化静态分析，提供锚定到 TON 区块链的加密审计证明 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | 零成本 Markdown 转 MP4 视频生成，使用 Marp 合成逼真人声旁白 | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | Python 复古游戏开发技能 — 指导实现、帧状态检查和无头测试 | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | 预防 AI 生成的文档中出现排版问题：孤行/寡行、编号错位 | OPEN |

**要点分析：**
- **MCP 构建器** 更新（PR #1742）反映了关键的依赖演进 — 保持技能与最新版 Model Context Protocol 的兼容性
- **智能合约审计**（PR #1771）表明 Web3 开发者社区的关注度在增长
- **复古游戏开发**（PR #525）和**文档排版**（PR #514）展现了细分领域但热情不减的专业需求

---

## 2. 社区需求趋势

高评论 Issue 揭示了以下重点方向：

| Issue | 评论数 | 主题 |
|-------|----------|-------|
| [#492](https://github.com/anthropics/skills/issues/492) | **46** | **安全**：社区技能冒充官方 `anthropic/` 命名空间 — 信任边界滥用 |
| [#228](https://github.com/anthropics/skills/issues/228) | 17 | **协作**：Claude.ai 中的组织级技能共享（目前需手动文件传输） |
| [#556](https://github.com/anthropics/skills/issues/556) | 13 | **评估**：`run_eval.py` 技能触发率为 0% |
| [#1329](https://github.com/anthropics/skills/issues/1329) | 10 | **新技能**：`compact-memory` — 长时间运行会话中用于紧凑智能体状态的符号化表示 |

**核心需求信号：**
1. **安全与信任** — 安全相关讨论（第 492 号，46 条评论）远超其他话题，表明社区对技能来源和命名空间完整性的高度警觉
2. **企业协作** — 组织级共享需求（17 条评论）反映出团队工作流的需求
3. **评估/测试** — 技能触发问题的 Bug 报告（第 556 号）揭示了基础设施层面的缺陷
4. **智能体记忆** — 紧凑符号记忆提案（第 1329 号）针对持久化智能体的上下文窗口优化

---

## 3. 高潜力待发布技能

以下活跃 PR 具有创新功能且近期有更新 — 近期可能合并：

- **[#1245](https://github.com/anthropics/skills/pull/1245)** — `notion-spec-to-implementation` — 桥接产品规范与可执行的 Notion 任务
- **[#1771](https://github.com/anthropics/skills/pull/1771)** — `proofcore-contract-auditor` — Web3 安全审计，带区块链锚定证明
- **[#1703](https://github.com/anthropics/skills/pull/1703)** — `md2video-audio` — 带旁白的 markdown 转视频（零成本商业工具替代方案）
- **[#525](https://github.com/anthropics/skills/pull/525)** — `pyxel` — 复古游戏开发（细分但需求明确）
- **[#1615](https://github.com/anthropics/skills/pull/1615)** — `scnet-hpc` — 通过 SSH/Slurm 进行高性能计算集群操作

以上均为 OPEN 状态，近期更新持续至 2026 年 9-10 月。

---

## 4. 技能生态洞察

> **社区最集中的需求在于安全加固和企业级协作功能** — 第 492 号（命名空间信任滥用，46 条评论）与第 228 号（组织级共享，17 条评论）合计代表了最高参与度的话题，热度远超单个技能提案。

---

*报告数据来源：github.com/anthropics/skills 仓库（50 个 PR，50 个 Issue）*

---

<think>The user wants me to translate the English Claude Code Community Digest into Simplified Chinese, following the detailed translation rules provided. Let me work through this carefully:

1. I need to translate ONLY - no preamble, no explanation, no markdown fences
2. Preserve exact Markdown structure: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter, not literal word-for-word

Let me translate section by section:

## Today's Highlights

The Claude Code team released **v2.1.310** with Monitor tool support for Bedrock, Vertex, and Foundry, plus critical fixes for gateway compatibility issues. Community engagement remains high, with the **Mods extensibility proposal** (#91870, 269 comments) driving significant discussion, and a long-standing **multi-account management feature** (#18435) gathering 947 upvotes—indicating strong demand for improved profile handling in Claude Desktop.

翻译：
Claude Code 团队发布了 **v2.1.310**，新增 Bedrock、Vertex 和 Foundry 的 Monitor 工具支持，并修复了网关兼容性问题的关键修复。社区热度不减，**Mods 扩展性提案**（#91870，269 条评论）引发热议，长期存在的**多账户管理功能**（#18435）获得 947 个赞同——表明用户对 Claude Desktop 个人资料管理有强烈需求。

---
 
## Releases

### v2.1.310 — 2026年10月24日

I notice the table structure needs careful handling in translation while preserving the format. The key is maintaining the Markdown table alignment and Chinese terminology that reflects technical documentation standards.

The update introduces cross-platform monitoring capabilities alongside performance refinements. I've added support for Bedrock, Vertex, and Foundry environments while addressing gateway compatibility concerns and preventing unnecessary foreground delays when nonessential services are disabled.

The release notes are accessible through the provided link to the GitHub repository.

---

## Hot Issues

### 1. Mods — 让 Claude 扩展性提升 10 倍

**#91870** | [anthropics/claude-code#91870](https://github.com/anthropics/claude-code/issues/91870) | 269 条评论 | 131 👍

The plugin architecture proposal has generated substantial community participation with biweekly incremental updates. Developer feedback is actively shaping the extensibility framework—while the team committed to shipping within weeks as of early October, they're maintaining flexibility in the implementation timeline.

A highly-requested profile management feature for switching between multiple Claude accounts has gained significant traction with 947 upvotes. The detailed preflight checklist and problem statement indicate this is ready for implementation, addressing a common workflow friction point for users managing work and personal contexts.

A critical data integrity issue affects Windows Cowork users: file content consistently lags one commit behind despite success reporting, creating silent stale writes that risk corrupting user workflows.

The Code tab's end-of-turn prompt with answer buttons now interrupts natural conversation flow, representing a UX regression. This has attracted considerable community attention, reaching 47 upvotes within just nine days.

A Windows-specific regression since early July causes nested folder structures to detach silently, breaking cloud execution mode. The Add-folder dialog shows no confirmation, disrupting enterprise workflows.

Hook payloads contain inconsistent data—the SubagentStop event fires during internal summarizer calls with a never-created `agent_transcript_path`, causing automation failures for developers dependent on hook events.

A TUI rendering issue on macOS corrupts output when content above the visible window changes height. This becomes frequent in verbose mode, interfering with terminal-based workflows.

An LSP plugin format change from earlier this year silently breaks existing installations. Plugins installed before the `lspServers` manifest-format update become non-functional without warning, and `plugin update` can't restore them. The low visibility of this breaking change creates significant user frustration.

A Windows 11 regression removes visibility into token and context usage—the hover tooltip that displayed this information has disappeared.

A performance issue affects Windows laptops running computer-use mode. After taking screenshots, `TextInputHost.exe` enters a CPU loop that causes the device to overheat, with no on-screen indication of what's happening. This appears to be Windows 11 specific.

No pull requests were updated in the last 24 hours.

Based on issue trends, several directions have strong community demand. Multi-account and profile management remains the top request with 947 upvotes, followed by extensibility and mods for plugin architecture. Desktop UX needs improvement around session sidebar controls and reducing UI interruptions. Windows platform support for computer-use tools is requested, along with cost controls including toggles for Usage Credits and paid token overages. Cowork features like zoom persistence in the built-in browser are also being tracked.

High-impact issues cluster around data loss risks—unrequested recursive deletion can delete user data, password field refusal in testing environments causes problems, and artifact publishing won't accept owner-created instances. Windows platform gaps exist in Cowork folder mounting and CPU loops with computer-use screenshots. Plugin and extensibility friction comes from silent LSP plugin breakage after manifest changes and hook payloads missing critical fields. Quality-of-life issues include non-functional debug access grants, send_later loops silently draining usage, and iOS dictation stopping when apps background. I need to verify the Markdown structure is preserved correctly, particularly the emphasis tags and emojis. Checking the horizontal rules and ensuring URLs remain intact as I finalize the translation.</think>

# Claude Code 社区周刊 — 2026年10月24日

## 今日要闻

Claude Code 团队发布了 **v2.1.310**，新增 Bedrock、Vertex 和 Foundry 的 Monitor 工具支持，并修复了网关兼容性问题的关键修复。社区热度不减，**Mods 扩展性提案**（#91870，269 条评论）引发热议，长期存在的**多账户管理功能**（#18435）获得 947 个赞同——表明用户对 Claude Desktop 个人资料管理有强烈需求。

---

## 版本发布

### v2.1.310 — 2026年10月24日

| 变更类型 | 说明 |
|----------|------|
| **新增 Monitor 工具** | 为 Bedrock、Vertex 和 Foundry 环境添加了 Monitor 工具和插件监控器 |
| **睡眠行为优化** | 当遥测或非必要流量被禁用时，阻止长时间的前台睡眠 |
| **网关兼容性修复** | 解决了部分网关和兼容服务器拒绝 `effort-2025-` 头部导致的请求失败问题 |

[查看发布说明 →](https://github.com/anthropics/claude-code/releases/tag/v2.1.310)

---

## 热门 Issue

### 1. Mods — 让 Claude 扩展性提升 10 倍
**#91870** | [anthropics/claude-code#91870](https://github.com/anthropics/claude-code/issues/91870) | 269 条评论 | 131 👍

**核心价值**：这是 Claude Code 团队推出的旗舰级扩展性提案。社区讨论活跃，每两周发布一次小更新。用户正在积极参与塑造未来的插件架构。

> *"我们将在几周内发布"* — 团队，2026年10月1日

---

### 2. [功能需求] 添加多账户支持与便捷的个人资料切换
**#18435** | [anthropics/claude-code#18435](https://github.com/anthropics/claude-code/issues/18435) | 216 条评论 | 947 👍

**核心价值**：这是仓库中赞同数最高的功能需求之一。用户希望在不必退出的情况下管理工作和个人账户。该 issue 包含详细的前置检查清单和问题陈述——已准备好进入开发阶段。

---

### 3. [Bug] Cowork：device_commit_files 报告成功但实际覆盖 — 写入延迟
**#93482** | [anthropics/claude-code#93482](https://github.com/anthropics/claude-code/issues/93482) | 22 条评论 | 2 👍

**核心价值**：**数据完整性问题** — 文件内容恰好滞后一个提交版本，但报告成功。影响启用了 Cowork 的 Windows 用户。静默的延迟写入可能破坏用户的工作流程。

---

### 4. [功能需求] Desktop："next-step" 框打断正常对话
**#102273** | [anthropics/claude-code#102273](https://github.com/anthropics/claude-code/issues/102273) | 20 条评论 | 47 👍

**核心价值**：Code 标签页的 UI 回归问题 — 带有答案按钮的轮次结束提示打断了自然的对话流程。社区关注度高（9 天内获得 47 个赞）。

---

### 5. [Bug] Cowork (Windows)：项目上下文文件夹在新会话中从不挂载
**#76187** | [anthropics/claude-code#76187](https://github.com/anthropics/claude-code/issues/76187) | 18 条评论 | 4 👍

**核心价值**：**自 7 月 8 日以来的 Windows 回归问题** — 嵌套文件夹结构静默分离，云执行模式中断。添加文件夹对话框无法确认。影响企业级工作流程。

---

### 6. Hooks：PreCompact/PostCompact 为子代理触发但缺少 Agent 字段
**#91910** | [anthropics/claude-code#91910](https://github.com/anthropics/claude-code/issues/91910) | 11 条评论 | 4 👍

**核心价值**：Hook 载荷数据不一致 — `SubagentStop` 为内部总结器调用触发，但 `agent_transcript_path` 从未创建。依赖 Hook 事件的开发者其自动化流程会中断。

---

### 7. [Bug] 经典渲染器在高度变化时丢失/覆盖输出
**#98019** | [anthropics/claude-code#98019](https://github.com/anthropics/claude-code/issues/98019) | 6 条评论 | 7 👍

**核心价值**：macOS 上的 TUI 渲染问题 — 当可视窗口上方内容高度变化时，输出会损坏。详细模式（verbose）下频繁出现。干扰基于终端的工作流程。

---

### 8. [Bug] LSP 插件以静默空壳形式加载（清单格式变更）
**#78604** | [anthropics/claude-code#78604](https://github.com/anthropics/claude-code/issues/78604) | 5 条评论 | 2 👍

**核心价值**：**现有插件的破坏性变更** — 在 `lspServers` 清单格式变更之前安装的 LSP 插件静默失效。`plugin update` 无法修复。低调的变更带来高挫败感。

---

### 9. [Bug] Desktop (Windows)：上下文使用量悬停提示缺失
**#102176** | [anthropics/claude-code#102176](https://github.com/anthropics/claude-code/issues/102176) | 5 条评论 | 3 👍

**核心价值**：Windows 11 回归问题 — 用户失去了查看 token/上下文使用量的途径。显示此信息的悬停提示消失了。

---

### 10. [Bug] 计算机使用截图触发 97-99% CPU 循环 (Windows)
**#97945** | [anthropics/claude-code#97945](https://github.com/anthropics/claude-code/issues/97945) | 3 条评论 | 1 👍

**核心价值**：**性能 + 硬件问题** — 截图后 `TextInputHost.exe` 进入 CPU 循环。笔记本发热；没有屏幕指示显示原因。仅限 Windows 11。

---

## PR 进展

*过去 24 小时内没有更新任何 Pull Request。*

---

## 功能需求趋势

根据 Issue 分析，以下方向是用户最迫切需要的：

| 类别 | 相关 Issue |
|------|------------|
| **多账户 / 个人资料管理** | #18435 (947 👍) — 轻松在工作/个人 Claude 账户间切换 |
| **扩展性 / Mods** | #91870 (269 条评论) — 插件架构、Mods 系统 |
| **Desktop UX 改进** | #102273、#104506 — 会话侧边栏控制、减少 UI 干扰 |
| **Windows 平台计算机使用** | #82300 — Windows CLI 支持计算机使用工具 |
| **成本控制** | #92087、#95772 — 禁用/启用 Usage Credits 和付费 token 超额消费的开关 |
| **Cowork 功能** | #97937 — 内置浏览器中的缩放持久化 |

---

## 开发者痛点

### 高影响力 Issue

1. **数据丢失风险**
   - 非请求的 `Remove-Item -Recurse -Force` 删除用户数据 (#94453)
   - 测试环境中的密码字段拒绝填充 (#65358)
   - 工件发布拒绝所有者创建的实例 (#102551)

2. **Windows 平台缺陷**
   - Cowork 文件夹挂载失败 (#76187、#93482)
   - 计算机使用截图触发 CPU 循环 (#97945)
   - Desktop 面板布局在首条消息后重置 (#104748)

3. **插件/扩展性摩擦**
   - 清单变更后 LSP 插件静默失效 (#78604)
   - Hook 载荷缺少关键字段 (#91910)
   - 子代理停止事件为内部总结器触发

4. **体验问题**
   - 调试访问授权激活但无效 (#100991)
   - send_later 循环静默消耗用量 (#95305)
   - iOS 语音输入在应用置于后台时停止 (#103405)

---

*周刊基于 GitHub 数据生成 — 2026年10月24日*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this English digest about OpenAI Codex into Chinese, following specific rules about preserving formatting and using natural technical Chinese register.

Let me go through and translate while:
1. Keeping all markdown structure exactly the same
2. Preserving URLs, issue numbers, code blocks, etc.
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation

Let me start translating section by section:

---

# OpenAI Codex 社区动态 — 2026-10-24

## 今日要闻

Codex 发布 **v0.164.0**，带来重大工作流改进：新增 `/presets` 支持将可复用提示词和斜杠命令保存到 10 个编号槽位，并通过键盘菜单快速调用；同时支持内联 `/model` 和 `/permissions` 参数直接配置。不过该平台正面临严峻的 Windows 稳定性问题——"无法加载组织设置"缺陷已累计 48 条评论，Windows 沙盒失败、计算机使用超时、运行时降级等多个问题也引发社区强烈关注。

---

## 版本发布

### rust-v0.164.0
**发布说明：**
- **预设系统**：将可复用的提示词和斜杠命令保存到 10 个编号的 `/presets` 槽位，通过键盘菜单快速访问。（[#54380](https://github.com/openai/codex/issues/54380)、[#54381](https://github.com/openai/codex/issues/54381)）
- **内联配置**：通过内联 `/model` 和 `/permissions` 参数直接设置模型、推理强度、速度和权限配置。（[#54378](https://github.com/openai/codex/issues/54378)、[#54383](https://github.com/openai/codex/issues/54383)）

### 其他版本
- [rust-v0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1) — Alpha 预览版


- [rust-v0.164.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.11.1) — 补丁版本

---

## 热门议题

| # | 议题 | 关注原因 | 反馈 |
|---|------|----------|------|
| [#48324](https://github.com/openai/codex/issues/48324) | **Windows 桌面端："无法加载组织设置"** 导致 Codex composer 完全无法启动，网页版和 CLI 正常工作。| 关键阻塞问题——用户无法启动任何 Codex 会话。| 48 条评论，8 👍 |
| [#49383](https://github.com/openai/codex/issues/49383) | **Windows 计算机使用** 截图捕获失败，出现 FrameArrived 超时和 E_INVALIDARG 错误。| Windows 上的计算机使用功能完全不可用。| 35 条评论，1 👍 |
| [#56076](https://github.com/openai/codex/issues/56076) | **绑定的 Node.js 运行时** 落后于 10 月 21 日安全版本（v24.22.1）。| 安全隐患——绑定的运行时使用 v24.19/21，未包含最新补丁。| 5 条评论，6 👍 |
| [#55271](https://github.com/openai/codex/issues/55271) | **iPadOS Safari** 出现 DisposableStack 错误和云服务器错误。| 导致 iPad 上的 Codex 云端版本无法使用。| 10 条评论，8 👍 |
| [#53287](https://github.com/openai/codex/issues/53287) | **macOS 应用启动时崩溃**，在 ares_llist_replace_destructor 中触发 EXC_BREAKPOINT。| 完全阻止 macOS 桌面端使用。| 8 条评论，1 👍 |
| [#41031](https://github.com/openai/codex/issues/41031) | **Linux 密钥链服务** 锁定导致会话无法使用，退出挂起。| 破坏 Linux 命令行工作流。| 7 条评论，1 👍 |
| [#33741](https://github.com/openai/codex/issues/33741) | **Windows 沙盒竞态条件**，涉及 `cap_sid` 文件——最后写入者获胜，工作区变为不可写。| 多实例场景下的数据完整性风险。| 7 条评论 |
| [#21292](https://github.com/openai/codex/issues/21292) | **Playwright Chromium** 在 macOS 沙盒中失败，出现 MachPortRendezvousServer 权限被拒绝错误。| 浏览器自动化工作流中断。| 9 条评论，8 👍 |
| [#56616](https://github.com/openai/codex/issues/56616) | **install.sh 返回 404**，位于 chatgpt.com/codex/install.sh。| CLI 安装/更新失败。| 3 条评论 |
| [#54998](https://github.com/openai/codex/issues/54998) | **安全检查阻止** 已授权的漏洞赏金工作（启用 Daybreak）。| 误报阻止合法工作。| 5 条评论，3 👍 |

---

## 关键 PR 进展

| PR | 标题 | 影响 |
|----|------|------|
| [#56560](https://github.com/openai/codex/pull/56560) | **GCP 项目/位置提供商设置** | 支持在配置中直接指定 Vertex AI 项目和位置——无需再使用环境变量。|
| [#56554](https://github.com/openai/codex/pull/56554) | **本地代理签名的蒙版 AWS 凭证** | 支持本地 MITM 设置中的 AWS SigV4 签名。|
| [#56552](https://github.com/openai/codex/pull/56552) | **NFS 上的 SQLite DELETE 日志模式** | 修复网络文件系统上的数据库损坏问题。|
| [#56524](https://github.com/openai/codex/pull/56524) | **追踪中的轮次、工具和技能归属** | 更好的可观察性——发射 `codex.turn_profile` 事件，包含重试次数。|
| [#56515](https://github.com/openai/codex/pull/56515) | **轮次启动/响应流追踪插装** | 新指标：`codex.response.receive_wait_ms` 用于流事件延迟。|
| [#56514](https://github.com/openai/codex/pull/56514) | **工具调度全流程保留追踪上下文** | 从调度到执行的全链路覆盖。|
| [#56525](https://github.com/openai/codex/pull/56525) | **移除模型目录的 1 MiB 响应限制** | 允许大体积显式目录而无需截断。|
| [#56543](https://github.com/openai/codex/pull/56543) | **后端逐个的恢复选择器分页** | 线程目录跟踪每个后端的光标、待处理请求和耗尽状态。|
| [#56516](https://github.com/openai/codex/pull/56516) | **TUI 启动时的服务端批准策略默认值** | 尊重服务端配置的默认值，而非本地覆盖。|
| [#56553](https://github.com/openai/codex/pull/56553) | **线程钩子列表中的环境钩子** | 列出执行环境中的钩子，而非仅工作目录。|

---

## 热门讨论

### 创意
- **[#14067](https://github.com/openai/codex/discussions/14067)** — **跨设备同步线程/上下文**：69 👍。用户希望在机器间保持会话连续性。
- **[#33528](https://github.com/openai/codex/issues/33528)** — **Apple Watch 应用**：语音提示和监控功能请求，3 👍。
- **[#56472](https://github.com/openai/codex/discussions/56472)** — **高级运行时测试和持久化 Linux 会话**：逆向工程支持请求。

### 问答
- **[#2251](https://github.com/openai/codex/discussions/2251)** — **Codex 使用限制**：59 条评论，57 👍。已确认：Plus 档位每周 3000 次思考额度——与 ChatGPT 应用相同。
- **[#37960](https://github.com/openai/codex/discussions/37960)** — 协调本地（Claude）和远程（Codex）代理，使用不同供应商。
- **[#56069](https://github.com/openai/codex/discussions/56069)** — MCP 应用在 macOS 上是否支持画中画功能？

### 展示
- **[#55421](https://github.com/openai/codex/discussions/55421)** — **TAHU**：代理授权网关原型，用于代理发送邮件时不暴露员工备注。
- **[#56181](https://github.com/openai/codex/discussions/56181)** — **pytest-codex**：将 AGENTS.md 规则转换为 pytest 检查，支持离线回放。
- **[#56564](https://github.com/openai/codex/discussions/56564)** — **Haru Café**：用 Codex 构建公司——保留代理身份/历史记录。
- **[#56548](https://github.com/openai/codex/discussions/56548)** — **OffiAI**：展示 3D 办公室，Codex CLI 会话作为工位。
- **[#56176](https://github.com/openai/codex/discussions/56176)** — Agent Relay Check：验证 AGENTS.md 更改是否在新会话中生效。

---

## 功能请求趋势

从议题和讨论中统计，最热门的需求方向：

1. **跨设备同步** — 线程和会话上下文应在机器间持久化（讨论 #14067 上 69 👍）
2. **移动/穿戴集成** — Apple Watch 应用用于语音提示和监控（多个请求）
3. **Linux 可靠性** — 更好地处理密钥链服务、沙盒稳定性
4. **Windows 稳定性** — 组织设置加载、运行时版本管理、沙盒竞态条件
5. **权限改进** — GitHub 连接器"始终允许"未被遵守；重复提示
6. **安全工具** — Daybreak 访问检查误阻授权工作

---

## 开发者痛点

- **Windows 桌面端不稳定**：组织设置加载失败、运行时降级、沙盒执行错误
- **iPadOS/Safari 不兼容**：DisposableStack 错误阻止网页版 Codex
- **安装问题**：install.sh 404 错误，升级器掩盖 curl 失败
- **绑定运行时安全滞后**：Node.js 版本落后于当前安全补丁
- **权限疲劳**：即使设置了"始终允许"仍重复授权提示
- **Linux 边缘情况**：密钥链服务锁定、NFS 文件系统 SQLite 日志模式

---

*数据来源：GitHub — 2026-10-24*</think>

# OpenAI Codex 社区动态 — 2026-10-24

## 今日要闻

Codex 发布 **v0.164.0**，带来重大工作流改进：新增 `/presets` 支持将可复用提示词和斜杠命令保存到 10 个编号槽位，并通过键盘菜单快速调用；同时支持内联 `/model` 和 `/permissions` 参数直接配置。不过该平台正面临严峻的 Windows 稳定性问题——"无法加载组织设置"缺陷已累计 48 条评论，Windows 沙盒失败、计算机使用超时、运行时降级等多个问题也引发社区强烈关注。

---

## 版本发布

### rust-v0.164.0
**发布说明：**
- **预设系统**：将可复用的提示词和斜杠命令保存到 10 个编号的 `/presets` 槽位，通过键盘菜单快速访问。（[#54380](https://github.com/openai/codex/issues/54380)、[#54381](https://github.com/openai/codex/issues/54381)）
- **内联配置**：通过内联 `/model` 和 `/permissions` 参数直接设置模型、推理强度、速度和权限配置。（[#54378](https://github.com/openai/codex/issues/54378)、[#54383](https://github.com/openai/codex/issues/54383)）

### 其他版本
- [rust-v0.165.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.165.0-alpha.1) — Alpha 预览版
- [rust-v0.164.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.164.0-alpha.11.1) — 补丁版本

---

## 热门议题

| # | 议题 | 关注原因 | 反馈 |
|---|------|----------|------|
| [#48324](https://github.com/openai/codex/issues/48324) | **Windows 桌面端："无法加载组织设置"** 导致 Codex composer 完全无法启动，网页版和 CLI 正常工作。 | 关键阻塞问题——用户无法启动任何 Codex 会话。 | 48 条评论，8 👍 |
| [#49383](https://github.com/openai/codex/issues/49383) | **Windows 计算机使用** 截图捕获失败，出现 FrameArrived 超时和 E_INVALIDARG 错误。 | Windows 上计算机使用功能完全不可用。 | 35 条评论，1 👍 |
| [#56076](https://github.com/openai/codex/issues/56076) | **绑定的 Node.js 运行时** 落后于 10 月 21 日安全版本（v24.22.1）。 | 安全隐患——绑定的运行时使用 v24.19/21，未包含最新补丁。 | 5 条评论，6 👍 |
| [#55271](https://github.com/openai/codex/issues/55271) | **iPadOS Safari** 出现 DisposableStack 错误和云服务器错误。 | 导致 iPad 上的 Codex 云端版本无法使用。 | 10 条评论，8 👍 |
| [#53287](https://github.com/openai/codex/issues/53287) | **macOS 应用启动时崩溃**，在 ares_llist_replace_destructor 中触发 EXC_BREAKPOINT。 | macOS 桌面端使用完全受阻。 | 8 条评论 |
| [#41031](https://github.com/openai/codex/issues/41031) | **Linux 密钥链服务** 锁定导致会话无法使用，退出挂起。 | Linux CLI 工作流被破坏。 | 7 条评论，1 👍 |
| [#33741](https://github.com/openai/codex/issues/33741) | **Windows 沙盒竞态条件**，涉及 `cap_sid` 文件——最后写入者获胜，工作区变为不可写。 | 多实例场景下存在数据完整性风险。 | 7 条评论 |
| [#21292](https://github.com/openai/codex/issues/21292) | **Playwright Chromium** 在 macOS 沙盒中失败，出现 MachPortRendezvousServer 权限被拒绝错误。 | 浏览器自动化工作流中断。 | 9 条评论，8 👍 |
| [#56616](https://github.com/openai/codex/issues/56616) | **install.sh 返回 404**，位于 chatgpt.com/codex/install.sh。 | CLI 安装/更新失败。 | 3 条评论 |
| [#54998](https://github.com/openai/codex/issues/54998) | **安全检查阻止** 已授权的漏洞赏金工作（启用 Daybreak 时）。 | 误报阻止合法工作。 | 5 条评论，3 👍 |

---

## 关键 PR 进展

| PR | 标题 | 影响 |
|----|------|------|
| [#56560](https://github.com/openai/codex/pull/56560) | **GCP 项目/位置提供商设置** | 支持在配置中直接指定 Vertex AI 项目和位置，无需再使用环境变量。 |
| [#56554](https://github.com/openai/codex/pull/56554) | **本地代理签名的蒙版 AWS 凭证** | 支持本地 MITM 场景下的 AWS SigV4 签名。 |
| [#56552](https://github.com/openai/codex/pull/56552) | **NFS 上的 SQLite DELETE 日志模式** | 修复网络文件系统上的数据库损坏问题。 |
| [#56524](https://github.com/openai/codex/pull/56524) | **追踪中的轮次、工具和技能归属** | 更强的可观测性——发射 `codex.turn_profile` 事件，包含重试次数。 |
| [#56515](https://github.com/openai/codex/pull/56515) | **轮次启动/响应流追踪插装** | 新增指标：`codex.response.receive_wait_ms` 用于流事件延迟。 |
| [#56514](https://github.com/openai/codex/pull/56514) | **工具调度全流程保留追踪上下文** | 从调度到执行的全链路覆盖。 |
| [#56525](https://github.com/openai/codex/pull/56525) | **移除模型目录的 1 MiB 响应限制** | 允许大体积显式目录而无需截断。 |
| [#56543](https://github.com/openai/codex/pull/56543) | **后端逐个的恢复选择器分页** | 线程目录跟踪每个后端的光标、待处理请求和耗尽状态。 |
| [#56516](https://github.com/openai/codex/pull/56516) | **TUI 启动时的服务端批准策略默认值** | 尊重服务端配置的默认值，而非本地覆盖。 |
| [#56553](https://github.com/openai/codex/pull/56553) | **线程钩子列表中的环境钩子** | 列出执行环境中的钩子，而非仅工作目录。 |

---

## 热门讨论

### 创意
- **[#14067](https://github.com/openai/codex/discussions/14067)** — **跨设备同步线程/上下文**：69 👍。用户希望在机器间保持会话连续性。
- **[#33528](https://github.com/openai/codex/issues/33528)** — **Apple Watch 应用**：语音提示和监控功能请求，3 👍。
- **[#56472](https://github.com/openai/codex/discussions/56472)** — **高级运行时测试和持久化 Linux 会话**：逆向工程支持请求。

### 问答
- **[#2251](https://github.com/openai/codex/discussions/2251)** — **Codex 使用限制**：59 条评论，57 👍。已确认：Plus 档位每周 3000 次思考额度——与 ChatGPT 应用相同。
- **[#37960](https://github.com/openai/codex/discussions/37960)** — 协调本地（Claude）和远程（Codex）代理，使用不同供应商。
- **[#56069](https://github.com/openai/codex/discussions/56069)** — macOS 上 MCP 应用是否支持画中画功能？

### 展示
- **[#55421](https://github.com/openai/codex/discussions/55421)** — **TAHU**：代理授权网关原型，用于代理发送邮件时不暴露员工备注。
- **[#56181](https://github.com/openai/codex/discussions/56181)** — **pytest-codex**：将 AGENTS.md 规则转换为 pytest 检查，支持离线回放。
- **[#56564](https://github.com/openai/codex/discussions/56564)** — **Haru Café**：用 Codex 构建公司——保留代理身份和历史记录。
- **[#56548](https://github.com/openai/codex/discussions/56548)** — **OffiAI**：3D 办公室展示，Codex CLI 会话作为工位。
- **[#56176](https://github.com/openai/codex/discussions/56176)** — Agent Relay Check：验证 AGENTS.md 更改是否在新会话中生效。

---

## 功能请求趋势

从议题和讨论中统计，最热门的需求方向：

1. **跨设备同步** — 线程和会话上下文应在机器间持久化（讨论 #14067 上 69 👍）
2. **移动/穿戴集成** — Apple Watch 应用用于语音提示和监控（多个请求）
3. **Linux 可靠性** — 更好地处理密钥链服务、沙盒稳定性
4. **Windows 稳定性** — 组织设置加载、运行时版本管理、沙盒竞态条件
5. **权限改进** — GitHub 连接器"始终允许"未被遵守；重复提示
6. **安全工具** — Daybreak 访问检查误阻授权工作

---

## 开发者痛点

- **Windows 桌面端不稳定**：组织设置加载失败、运行时降级、沙盒执行错误
- **iPadOS/Safari 不兼容**：DisposableStack 错误阻止网页版 Codex
- **安装问题**：install.sh 404 错误，升级器掩盖 curl 失败
- **绑定运行时安全滞后**：Node.js 版本落后于当前安全补丁
- **权限疲劳**：即使设置了"始终允许"仍重复授权提示
- **Linux 边缘情况**：密钥链服务锁定、NFS 文件系统 SQLite 日志模式

---

*数据来源：GitHub — 2026-10-24*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the GitHub community digest from English to Chinese. Let me follow the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, maintaining the exact structure:

## Today's Highlights needs to become 今日要闻

Let me translate all the content while preserving the structure:</think>

# Gemini CLI 社区动态 — 2026-10-24

## 今日要闻

Gemini CLI 团队发布了 **v0.67.0-nightly.20261023.ga713410ab**，其中包含针对令牌使用元数据保留和模型轮次间思维签名对齐的关键修复。社区正在积极调试高优先级的智能体行为问题——特别是 MAX_TURNS 后的子智能体恢复和通用智能体卡顿——同时多个 PR 正在解决终端渲染、安全漏洞和跨平台兼容性等问题。

---

## 发布动态

**v0.67.0-nightly.20261023.ga713410ab** — 2026-10-23

- **修复(a2a-server,core)：** 保留扩展的令牌使用元数据并对齐按轮次报告 ([#29834](https://github.com/google-gemini/gemini-cli/pull/29834))
- **修复(core)：** 确保所有包含函数调用的模型轮次都收到思维签名

**完整变更日志：** https://github.com/google-gemini/gemini-cli/compare/v0.66.0...v0.67.0-nightly.20261023.ga713410ab

---

## 热门 Issue

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子智能体在达到 MAX_TURNS 后被报告为 GOAL success，掩盖了中断
   - **优先级：** P1 | **评论：** 13 | **为何重要：** `codebase_investigator` 子智能体即使达到最大轮次限制而未完成分析，也会虚假地报告成功，掩盖了实际失败并破坏了可靠性预期。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 通过零依赖 OS 沙箱和执行后意图路由利用模型的 bash 亲和性
   - **优先级：** P2 | **评论：** 9 | **为何重要：** 提议启用原生 POSIX 工具链（grep、cat、sed、awk）进行代码探索，同时不牺牲安全性——这是一项重要的架构增强。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通用智能体无限卡顿
   - **优先级：** P1 | **评论：** 8 | **👍：** 8 | **为何重要：** 当 Gemini CLI 委派给通用智能体时，它会在简单任务（如创建文件夹）上卡顿数小时，使其在实践中无法使用。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知文件读取、搜索和映射的影响
   - **优先级：** P2 | **评论：** 7 | **为何重要：** 追踪调查抽象语法树感知工具是否能减少令牌膨胀并提高代码库导航精度。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 不够频繁使用 skills 和子智能体
   - **优先级：** P2 | **评论：** 7 | **为何重要：** 用户报告 Gemini 即使任务与其文档化的能力相符，也很少自主调用自定义 skills/子智能体。

6. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — Gemini CLI 在工具数量超过 128 时遇到 400 错误
   - **优先级：** P2 | **评论：** 3 | **为何重要：** 用户在工具数量超过限制时遇到 HTTP 400 错误，表明智能体需要更智能的工具范围界定。

7. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** — get-shit-done 输出钩子导致崩溃
   - **优先级：** P1 | **评论：** 3 | **为何重要：** 当输出钩子完成时终端崩溃，表明存在竞态条件或清理不当。

8. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** — 模型经常在随机位置创建临时脚本
   - **优先级：** P2 | **评论：** 3 | **为何重要：** 通过在目录中散布编辑脚本而不是使用集中式临时位置来产生清理开销。

9. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** — 智能体应该停止/阻止破坏性行为
   - **优先级：** P2 | **评论：** 3 | **为何重要：** 模型有时会使用风险的命令（如 `git reset --force`），而更安全的替代方案存在。

10. **[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)** — Bugreport 没有提供子智能体的上下文
    - **优先级：** P1 | **评论：** 2 | **为何重要：** Bug 报告缺少子智能体上下文，使多智能体会话调试变得困难。

---

## 关键 PR 进展

1. **[#29904](https://github.com/google-gemini/gemini-cli/pull/29904)** — 修复(cli)：在终端宽度变化后限制内联历史记录重新渲染
   - 在终端调整大小时限制内联渲染器执行的工作；减少重复输出伪影。

2. **[#29884](https://github.com/google-gemini/gemini-cli/pull/29884)** — 修复(core)：允许 Android (Termux) 上的受信任系统路径以解析 ripgrep
   - 通过添加受信任系统目录前缀，在 Termux 环境中启用 ripgrep 执行。

3. **[#29876](https://github.com/google-gemini/gemini-cli/pull/29876)** — 修复(core)：在传统检查点回退中防止路径遍历
   - 安全修复：解决 `Logger._getCheckpointPath()` 和 `Logger.deleteCheckpoint()` 中的路径遍历漏洞。

4. **[#29879](https://github.com/google-gemina/gemini-cli/pull/29879)** — 修复(core,cli,sdk)：在流中错误或重试时丢弃缓冲的工具调用
   - 防止在模型流错误、重试或异常终止后执行过时的工具调用。

5. **[#29905](https://github.com/google-gemini/gemini-cli/pull/29905)** — 修复(cli)：处理将不确定宽度字符渲染为宽度的终端
   - 修复 #24181：处理 Terminal.app、iTerm2、GNOME Terminal、WezTerm 等终端中的东亚不确定宽度字符渲染。

6. **[#29901](https://github.com/google-gemini/gemini-cli/pull/29901)** — 功能(acp)：允许客户端引导正在运行的轮次
   - 在 ACP 模式中添加轮次中引导功能——客户端可以在不取消轮次的情况下注入用户消息。

7. **[#29881](https://github.com/google-gemini/gemini-cli/pull/29881)** — 修复(core,cli)：发出 ACP 重试进度更新并强制执行重试延迟上限
   - 修复 #29805：在 429 重试期间正确发出进度信号，正确处理配额重置消息。

8. **[#29838](https://github.com/google-gemini/gemini-cli/pull/29838)** — 修复(core)：相对于活动 IDE 工作区根目录解析相对文件路径
   - 相对于 IDE 工作区根目录解析文件路径，而不是 `config.getTargetDir()`，防止错误的文件操作。

9. **[#29895](https://github.com/google-gemini/gemini-cli/pull/29895)** — 修复(cli)：在无头模式中保留结构化 API 错误
   - 修复 #29892：防止结构化 API 错误在无头模式下变成 `[object Object]` 字符串。

10. **[#29859](https://github.com/google-gemini/gemini-cli/pull/29859)** — 修复(cli)：在任务树中显示正在执行的子智能体工具调用
    - 修复通过在调度程序更新中保留 `executing` 状态来显示执行中的子智能体工具调用。

---

## 功能需求趋势

| 主题 | 相关 Issue |
|-------|----------------|
| **智能体自主性** | 更好地利用自定义 skills/子智能体，自主工具选择 |
| **AST/语法感知** | AST 感知文件读取、grep 和代码库映射，以减少令牌膨胀 |
| **终端渲染** | 不确定宽度字符支持，高性能调整大小处理 |
| **安全加固** | 路径遍历防护，命令安全警告，OS 沙箱 |
| **IDE 集成** | 相对于 IDE 工作区解析相对路径，IDE 重连后恢复 |
| **非交互模式** | 结构化错误保留，重试进度可见性，轮次中引导 |
| **浏览器智能体** | 会话接管，锁恢复，Wayland 支持，设置覆盖 |

---

## 开发者痛点

1. **智能体可靠性：** 多个 P1 Issue 报告智能体卡顿、虚假报告成功或静默失败——这破坏了自动化工作流程的信任。

2. **工具管理：** 超过 128 个工具的限制触发 HTTP 400 错误；开发者需要更智能的工具范围界定和组织。

3. **终端不一致：** 东亚字符渲染问题、调整大小闪烁和不确定宽度处理在不同的终端模拟器中造成糟糕的用户体验。

4. **跨平台差距：** Android/Termux、Wayland 和符号链接支持差距使开发者体验碎片化。

5. **调试困难：** Bug 报告缺少子智能体上下文，崩溃日志没有捕获足够的诊断信息。

6. **令牌/性能浪费：** 大文件读取"消防水带"式推送上下文（+15k 令牌/轮），临时脚本散布在工作区中。

---

*基于 GitHub 数据生成 — 2026-10-24*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, keeping all the formatting and technical terms intact while making it read naturally in Chinese.

I'll go through each section:

1. **Title**: GitHub Copilot CLI 社区通讯 → keep as is but translate
2. **Date**: 2026-10-24 → keep as is
3. **Section 1: Today's Highlights** → 今日要闻
4. **Section 2: Releases** → 版本发布
5. **Section 3: Hot Issues** → 热门问题
   - Need to translate the category labels (🔴 Critical / High-Impact, 🟡 Notable Features / Regression Reports, 🟢 UX / Developer Experience)
6. **Section 4: Key PR Progress** → 关键 PR 进展
7. **Section 5: Feature Request Trends** → 功能需求趋势
8. **Section 6: Developer Pain Points** → 开发者痛点

Let me translate carefully:</think>

# GitHub Copilot CLI 社区通讯

**日期：** 2026-10-24

---

## 1. 今日要闻

GitHub 发布了 1.0.104-0 和 1.0.104-1 版本，**辅助权限（Assisted Permissions）现无需启用实验模式即可使用** —— 这大大简化了权限管理流程。该版本还修复了一个关键问题：当保存的 Auto 偏好设置不可用时，Auto 之前会在每轮对话中失败，现在会正确回退到默认偏好。社区持续关注后台子代理超时、权限模型复杂度以及 MCP 认证挑战等重要问题。

---

## 2. 版本发布

| 版本 | 重要变更 |
|------|----------|
| **v1.0.104-1** | 修复和问题变更 |
| **v1.0.104-0** | 改进 — **辅助权限（Assisted Permissions）现无需启用实验模式即可使用** |

**重要修复：** 当保存的 Auto 偏好设置不再可用时，Auto 现在会正确回退到其默认偏好设置，而不是在每轮对话中失败。

---

## 3. 热门问题

### 🔴 严重 / 高影响

1. **[#869] 由于系统证书与内置证书重复导致 CA 证书冲突，模型列表获取失败**（已关闭）
   - **作者：** a1mersnow | 28 条评论 | 👍 4
   - **影响：** 用户每次请求都会因证书冲突而报错
   - **链接：** https://github.com/github/copilot-cli/issues/869

2. **[#5232] 信任文件夹在手动模式下静默自动批准 shell 执行，即使命令具有不可预测的副作用**
   - **作者：** ph-preis | 2 条评论
   - **影响：** 安全隐患 — 基于路径的管控无法判断命令行为，允许脚本、sqlcmd、curl 等直接执行而无需确认
   - **链接：** https://github.com/github/copilot-cli/issues/5232

3. **[#5223] 交互式自动驾驶在 600 秒后停止，而后台子代理仍在运行（1.0.102 回归问题）**
   - **作者：** bsiegel | 1 条评论
   - **影响：** 长时间运行的后台任务会被提前终止；建议使用 COPILOT_TASK_WAIT_TIMEOUT_SECONDS 环境变量作为临时方案
   - **链接：** https://github.com/github/copilot-cli/issues/5223

### 🟡 重要功能 / 回归问题报告

4. **[#5053] 1.0.89 回归问题：ACP 会话停止为对话历史和使用情况建立索引，session-store.db 不再更新**
   - **作者：** yfoel | 3 条评论
   - **影响：** 已完成的 ACP 会话不再填充本地对话/使用索引，影响会话持久化
   - **链接：** https://github.com/github/copilot-cli/issues/5053

5. **[#1783] 可折叠的后台代理面板，显示活跃的子代理、模型、推理级别和任务描述**
   - **作者：** bertat | 2 条评论 | 👍 4
   - **影响：** 功能请求：希望能看到已启动的子代理信息（explore、task、general-purpose、code-review）
   - **链接：** https://github.com/github/copilot-cli/issues/1783

6. **[#5225] 在压缩后保留 sessionStart 钩子的 additionalContext**
   - **作者：** naoki1213mj | 1 条评论
   - **影响：** 压缩后，模型会丢失 sessionStart 钩子提供的 additionalContext，直到会话恢复
   - **链接：** https://github.com/github/copilot-cli/issues/5225

7. **[#5049] 计算机使用插件在 ACP 模式下不可用，尽管 CLI 中已启用（Windows，1.0.91）**
   - **作者：** formulahendry | 1 条评论
   - **影响：** ACP 模式宣传支持 /computer 命令，但内置插件和 MCP 服务器不可用
   - **链接：** https://github.com/github/copilot-cli/issues/5049

8. **[#5145] 思考模式下返回 400 `reasoning_text`—— 由后台 shell 退出后运行时合成的助手消息触发**
   - **作者：** eruvalca | 1 条评论 | 👍 1
   - **影响：** 使用自定义 OpenAI 兼容提供商（如 DeepSeek）的会话在后台 shell 执行后会崩溃
   - **链接：** https://github.com/github/copilot-cli/issues/5145

### 🟢 用户体验 / 开发者体验

9. **[#4181] 无法在 /btw 讨论中粘贴图片**
   - **作者：** petrroll | 1 条评论
   - **影响：** 当提示词以 /btw 开头时无法粘贴图片；临时解决方案是先粘贴图片再添加 /btw
   - **链接：** https://github.com/github/copilot-cli/issues/4181

10. **[#1177] 更新插件时出错—— 资源忙或被锁定**
    - **作者：** saikoumudi | 3 条评论 | 👍 4
    - **影响：** 无法更新或卸载插件；删除 installed-plugins 目录并重启后问题依然存在
    - **链接：** https://github.com/github/copilot-cli/issues/1177

---

## 4. 关键 PR 进展

*过去 24 小时内没有更新任何 Pull Request。*

---

## 5. 功能需求趋势

根据问题分析，最热门的功能需求方向为：

| 主题 | 描述 | 相关问题 |
|------|------|----------|
| **增强子代理可见性** | 改进 UI 以显示活跃的后台/工作代理、其模型、推理级别和任务描述 | #1783 |
| **改进权限控制** | 对信任文件夹中的 shell 执行进行更精细的控制；支持从 Auto 选择中排除特定模型 | #5232, #5231 |
| **更好的会话持久化** | 在压缩后保留 sessionStart 钩子上下文；在 ACP 会话中维护对话历史 | #5225, #5053 |
| **MCP 增强** | 远程 MCP 的 OAuth 令牌刷新；Windows Entra 代理令牌缓存；MCP 认证流程修复 | #5233, #5236, #5234 |
| **代理/企业网络支持** | 企业代理后的 STT 模型；仅代理环境中的 web_fetch DNS 验证 | #5245, #5230 |

---

## 6. 开发者痛点

### 高频摩擦点

1. **证书和网络问题** — 重复 CA 证书导致模型列表获取失败（#869），代理环境破坏 STT 和 web_fetch（#5245, #5230）

2. **后台任务超时** — 交互式自动驾驶在 600 秒时任意停止，而子代理仍在运行（#5223），导致工作丢失

3. **权限模型困惑** — 信任文件夹自动批准潜在危险命令（#5232）；HOME 覆盖触发误报（#5107）

4. **插件和 MCP 不稳定** — 计算机使用插件在 ACP 模式下不可用（#5049）；MCP OAuth 令牌不刷新（#5233）；Windows 令牌缓存始终为空（#5236）

5. **会话状态丢失** — ACP 会话不索引历史（#5053）；压缩后丢失 sessionStart 上下文（#5225）；50 张图片后缓存失效效率低（#5238）

6. **Windows 特定问题** — PowerShell 版本冲突（#5247）；MCP 认证导致 CLI 无法使用（#5234）；某些场景下图片粘贴被阻止（#4181）

---

*数据来源：github.com/github/copilot-cli | 统计截止时间：2026-10-24*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English digest into Simplified Chinese, following the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep technical terms, project names, API identifiers in their original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while preserving the structure and using appropriate technical Chinese.</think>

# OpenCode 社区动态

**日期：** 2026-10-24

---

## 1. 今日要闻

OpenCode 社区正在积极处理免费配额滥用、供应商可靠性和桌面应用功能方面的关键问题。社区发现了一个值得关注的安全问题：使用 VPN 绕过免费模型速率限制（Issue #34344），同时多个 PR 正在推进成本追踪和 Go 配额可见性功能。团队还在处理 deepseek 模型卡顿和 Windows 控制台窗口闪烁问题。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 热门议题

| 议题 | 摘要 | 评论数 | 为何重要 |
|-----|------|-------|---------|
| [#34344](https://github.com/anomalyco/opencode/issues/34344) | **opencode 模型无限使用漏洞** — 免费模型的速率限制与 IP 地址绑定；VPN 轮换可绕过限制 | 35 | **严重的计费/安全问题**，可通过 VPN 轮换实现无限免费模型使用 |
| [#1302](https://github.com/anomalyco/opencode/issues/1302) | **支持通过 apiKeyHelper 动态配置 API 密钥** — 通过可配置的辅助脚本实现 JWT 令牌轮换的功能请求 | 14 | 高需求功能（58 👍），用于企业认证工作流 |
| [#50650](https://github.com/anomalyco/opencode/issues/50650) | **desktop: 自定义供应商保存始终显示"此服务器上不可用"** — 设置 → 提供商中的表单无法在任何服务器上保存（包括本地）| 13 | 桌面应用阻塞问题；自定义供应商功能完全失效 |
| [#41358](https://github.com/anomalyco/opencode/issues/41358) | **【BUG】自动压缩后代理继续思考/行动而无需确认** — 上下文压缩后代理失去对原始任务目标的追踪 | 11 | 长会话中的严重可靠性问题，导致代理"遗忘"任务 |
| [#57495](https://github.com/anomalyco/opencode/issues/57495) | **provider: 缓慢的插件设置导致所有 github-copilot 模型被禁用** — 500ms+ 的插件设置导致所有 Copilot 模型永久性被禁用 | 8 | 影响所有 Copilot 用户的回归问题（当插件较慢时）|
| [#52266](https://github.com/anomalyco/opencode/issues/52266) | **Windows: 每个生成的控制台进程都会闪烁黑色窗口** — git.exe 和其他进程每约 1 秒创建一个可见控制台窗口，未使用 CREATE_NO_WINDOW | 6 | Windows 上的烦人 UX 问题；频繁 git 操作时尤为明显 |
| [#52054](https://github.com/anomalyco/opencode/issues/52054) | **client: 设置 HTTP 代理后事件流无限循环** — TUI 通过代理路由到 localhost 的流量，导致流永远无法完成 | 6 | 代理用户经历无限挂起；错误处理不佳 |
| [#40524](https://github.com/anomalyco/opencode/issues/40524) | **【2.0】V2: 使供应商目录与 /models 端点保持一致** — 应从供应商端点获取实时模型列表而非静态目录 | 6 | V2 核心架构改进，用于模型发现 |
| [#58080](https://github.com/anomalyco/opencode/issues/58080) | **macOS 本地网络隐私阻止后台服务** — macOS 15+ 上到 LAN 地址的 TCP 连接失败，显示 EHOSTUNREACH | 3 | macOS 15+ 兼容性问题，阻止本地网络功能 |
| [#55536](https://github.com/anomalyco/opencode/issues/55536) | **Desktop: "切换侧边栏"没有任何作用** — macOS 桌面应用上会话切换器侧边栏不可见 | 3 | UI 回归问题；核心导航功能失效 |

---

## 4. PR 进展

| PR | 摘要 | 类型 |
|----|------|------|
| [#58567](https://github.com/anomalyco/opencode/pull/58567) | **feat(core): 无需 OpenAI 密钥即可通过 OpenCode Console 连接提供 GPT-Live** — 使 iOS 应用的服务器语音选择器可以列出仅具有 OpenCode Console 语音凭证的服务器 | 新功能 |
| [#58562](https://github.com/anomalyco/opencode/pull/58562) | **feat(core): 记录报告的成本和 Go 配额** — 追踪 OpenCode 网关所支持的所有协议（ref #43818, #35765）的报告成本 | 新功能 |
| [#58566](https://github.com/anomalyco/opencode/pull/58566) | **feat(app): 会话免费时显示 Go 配额** — 当成本为 $0 时显示 Go 配额的 UI | 新功能 |
| [#58560](https://github.com/anomalyco/opencode/pull/58560) | **fix(app): 停止让省略的工具图片保持其负载存活** — 修复工具结果截图导致的 1.7 GB 内存泄漏（ref #58427）| Bug 修复 |
| [#58338](https://github.com/anomalyco/opencode/pull/58338) | **fix(core): 获取每文件补丁时传递字面路径规范** — 修复名称中包含 glob/冒号魔法的文件 git 补丁失败问题 | Bug 修复 |
| [#58337](https://github.com/anomalyco/opencode/pull/58337) | **fix(server): 以恒定时间比较服务器密码** — 防止 authorized() 中密码比较的时序攻击 | 安全修复 |
| [#58433](https://github.com/anomalyco/opencode/pull/58433) | **feat(tui): 提示中的实时 IDE 跟随标签** — 添加编辑位置镜像的 opt-in TUI 实验 `live-follow` | 新功能 |
| [#58552](https://github.com/anomalyco/opencode/pull/58552) | **feat(i18n): 完整的捷克语本地化** — 主要翻译改进，包含纠正的语法和 235 个之前缺失的字符串 | 新功能 |
| [#58549](https://github.com/anomalyco/opencode/pull/58549) | **fix(core): 在迁移期间保留 1.19 API 消息** — 升级到 V2 时保留通过 1.19 的 `/api/session` 创建的消息 | Bug 修复 |
| [#57729](https://github.com/anomalyco/opencode/pull/57729) | **feat(app: 按需加载用户附件** — 惰性加载会话中的图片，而非 upfront 下载全部（大幅减少数据库大小）| 新功能 |

---

## 5. 功能需求趋势

根据议题分析，最受关注的功能方向包括：

1. **增强的身份验证和凭证** — 动态 API 密钥轮换（#1302）、无需重启即可刷新凭证（#43281）、安全的密码比较（#58337）
2. **桌面应用改进** — 语音/语音输入（#33300）、可用的自定义供应商（#50650）、功能正常的侧边栏（#55536）、内存优化
3. **资源和性能控制** — 限制并行子代理（#27110）、处理缓慢的插件设置（#57495）、解决模型目录同步（#40524）
4. **平台特定修复** — Windows 控制台窗口闪烁（#52266）、macOS 15+ 网络限制（#58080）、代理处理（#52054）
5. **成本可见性** — 每模型使用倍数文档（#52026）、成本报告（#58562）、Go 配额显示（#58566/#58565）

---

## 6. 开发者痛点

社区正在经历以下持续性困扰：

- **免费配额困惑与滥用**：多个议题（#34344、#58284、#58285、#58550）报告即使零使用或少量使用也显示"免费使用配额已用尽"，而 VPN 绕过漏洞破坏了整个免费配额体系
- **桌面功能失效**：自定义供应商保存全面失败（#50650）、侧边栏切换无响应（#55536）、Electron 内存占用仍然很高（空闲时约 1GB）
- **错误处理不佳**：流错误仅记录但从不向客户端报告（#58496），导致会话无限"挂起"
- **平台不兼容**：Windows 控制台闪烁、macOS 15+ 网络限制、符号链接配置目录时的 inotify 失败（#54933）
- **代理可靠性**：自动压缩破坏代理任务追踪（#41358）、shell 工具在会话中悄然消失（#57541）、计划模式允许文件变更（#58537）

---

*动态基于 2026-10-24 的 GitHub 数据为 anomalyco/opencode 生成*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese. I need to:

1. Keep all Markdown structure exactly as-is
2. Keep all technical identifiers, URLs, issue numbers, code, etc. as-is
3. Translate the narrative content into natural technical Chinese
4. Preserve the tables and formatting

Let me go through this carefully:

- **Headings** - translate
- **Tables** - translate cell content, keep structure
- **Lists** - translate text
- **Bold/Italic** - translate the content inside
- **Links** - keep URL, translate link text if it's descriptive
- **Code spans/blocks** - keep as-is
- **Numbers, dates, URLs** - keep as-is
- **Issue/PR references** - keep as-is

Let me start translating:</think>

# Pi 社区日报 — 2026-10-24

## 今日要闻

Pi 项目在多条战线上都有积极进展：多个重要的性能和正确性 bug 已修复（exec 中的 UTF-8 处理、ARM32 二进制选择、会话分叉），而 OpenAI Codex 的连接可靠性仍然是最受关注的话题。Kimi Coding K3.1 模型、Orca 终端图像支持以及 MCP 协议增强等新功能正在开发中。

**过去 24 小时内无版本发布。**

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|---------|------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex 连接可靠性问题** — 交互式 TUI 停在 `Working...` 界面，无文本流出、无工具调用、无错误提示。恢复需要按 Escape，导致对话记录为中止。 | Codex 用户的关键体验阻塞器；87 条评论表明影响范围广泛。 | 👍 35 |
| [#10063](https://github.com/earendil-works/pi/issues/10063) | **Anthropic OAuth 对 Claude Opus 5/5.5 返回 `Invalid effort level`** | 影响顶级 Claude 模型的思考/推理功能；阻塞 p0 级用例。 | 👍 1 |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | **编辑参数中的非 ASCII 字符（韩文）损坏** — 丢弃的 `u` 导致 `\uXXXX` 变成控制字符，文件损坏。 | 数据损坏风险；多语言文件在 3 周内频繁失败。 | — |
| [#9265](https://github.com/earendil-works/pi/issues/9265) | **流式处理中工具调用参数的 O(n²) 重新解析** — 每次增量都重新解析整个累积 JSON，导致嵌入运行时冻结。 | 高容量代理部署的性能杀手；二次方复杂度扩展性差。 | 👍 3 |
| [#9656](https://github.com/earendil-works/pi/issues/9656) | **鼠标滚轮在 Windows + Zellij 全屏模式下滚动历史而非对话** | Windows 多路复用终端用户的体验回退。 | 👍 4 |
| [#9807](https://github.com/earendil-works/pi/issues/9807) | **完整重渲染导致 800+ 消息会话中出现滚动/输入卡顿** | 长会话中 TUI 响应性下降；需要增量 diff 优化。 | 👍 3 |
| [#11267](https://github.com/earendil-works/pi/issues/11267) | **仅包含自定义条目的会话未创建会话文件** | #10000 后破坏了纯自定义消息工作流的持久化。 | — |
| [#10416](https://github.com/earendil-works/pi/issues/10416) | **支持无状态 MCP（2026-07-28）** — 同时支持 stdio 和 Streamable HTTP 的双时代 MCP | 对齐最新 MCP 规范；兼容现代 MCP 服务器。 | 👍 3 |
| [#11112](https://github.com/earendil-works/pi/issues/11112) | **让 prepareArguments 查看（并修复）解析失败的工具调用参数** — Sonnet 5 写成 `"oldText">` 而非 `"oldText": "`** | 从模型 JSON 错误中优雅恢复；减少编辑失败。 | — |
| [#11088](https://github.com/earendil-works/pi/issues/11088) | **npm 包安装失败时启动崩溃，显示原始堆栈跟踪** — 未写入 `crashes.json`。 | 未捕获的拒绝导致整个应用崩溃；配置错误的体验很差。 | — |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|------|
| [#11355](https://github.com/earendil-works/pi/pull/11355) | **fix(ai): 支持 Kimi Coding K3.1 Pro 模型** | 根据 effort 元数据派生 K3 wire preset；暴露 low/high/max 推理，发送 `reasoning_effort`，保留 reasoning 内容。 |
| [#11320](https://github.com/earendil-works/pi/pull/11320) | **fix(tui): 裁剪全屏视口上方滚动的 boxed 图像** | 修复多行 Kitty 图像在有填充/颜色边框中滚动出视野时消失的问题。 |
| [#11325](https://github.com/earendil-works/pi/pull/11325) | **fix(ai): 在 Gemini 工具 schema 中将 const 发送为 enum** | TypeBox 发出 `const` 被 Gemini 忽略；现改为发送为 enum 修复参数验证。 |
| [#9569](https://github.com/earendil-works/pi/pull/9569) | **fix(ai): 强制转换 JSON 编码的工具参数中的对象和数组** | 当模型对工具参数中的 JSON 字符串进行双重编码时进行恢复。 |
| [#11348](https://github.com/earendil-works/pi/pull/11348) | **fix(tui,coding-agent): 在所有滚动列表中处理选择页面键** | 修复 `/model` 等列表忽略 `pageUp`/`pageDown` 键的问题；取代之前的尝试。 |
| [#11288](https://github.com/earendil-works/pi/pull/11288) | **fix(coding-agent): 通过单个 fd 写入分叉会话** | 用单次写入替换每条目的 `appendFileSync`；大幅加速大型会话分叉。 |
| [#11330](https://github.com/earendil-works/pi/pull/11330) | **fix(coding-agent): 在 pi.exec 中保留拆分的 UTF-8 输出** | 使用 `StringDecoder` 处理跨 stdout 块拆分的字符（如 "你好" → "���好"）。 |
| [#11343](https://github.com/earendil-works/pi/pull/11343) | **fix(coding-agent): 在不支持的架构上跳过 fd/rg 下载** | 正确映射 ARM32（`arm`）而非回退到 x86-64。 |
| [#11340](https://github.com/earendil-works/pi/pull/11340) | **fix(tui): 为全屏双击选择使用 iterm2 单词字符** | 在选择边界中添加 `+ ~ _ .`；修复路径中 `~` 无法被选中。 |
| [#11341](https://github.com/earendil-works/pi/pull/11341) | **fix(coding-agent): 对不可用的代理 URL 退出并显示清晰错误** | 对 socks5、缺少协议、代理 URL 中有路径等情况显示优雅错误而非原始堆栈。 |

---

## 热门讨论

| # | 讨论 | 类别 |
|---|------|------|
| [#11307](https://github.com/earendil-works/pi/discussions/11307) | **pi-better-web-search** — 一个 `web_search` 工具，支持原始提供者结果和跨提供者回退 | 展示 |
| [#11306](https://github.com/earendil-works/pi/discussions/11306) | **pi-continuity** — 用量限制和中断后自动恢复编码计划 | 展示 |

---

## 功能请求趋势

1. **增强 MCP 支持** — 无状态 MCP（2026-07-28）、MCP 引发（MCP elicitation）、MCP HTTP JSON 响应遵循 `maxMessageBytes`
2. **改进模型/提供者配置** — 带模型别名的提供者扩展、每包工具暴露覆盖
3. **终端/平台兼容性** — Orca 终端图像支持、Windows+Zellij 鼠标滚轮处理、iterm2 单词边界
4. **会话/持久性增强** — 从最后看到的条目恢复持久的 `watchEvents`、自定义条目会话文件、`session_before_shutdown` 否决权
5. **推理 Effort 标准化** — Bedrock GLM-5.3 推理 effort 支持、Gemini 的 const-as-enum

---

## 开发者痛点

1. **OpenAI Codex 可靠性** — 工具执行期间的间歇性卡顿导致工作丢失；无自动回退到 SSE
2. **Anthropic 模型错误** — 无效 effort level 错误阻塞 Claude Opus 5/5.5 和 Fable 5；编辑中的 JSON schema 损坏
3. **大规模性能** — O(n²) 解析、完整重渲染、慢速会话分叉在大会话中降低体验
4. **UTF-8 处理** — `pi.exec()` 中的拆包损坏、韩文编辑参数
5. **启动/崩溃处理** — npm 包安装失败时的未捕获拒绝导致崩溃且无崩溃日志
6. **平台边缘情况** — ARM32 二进制选择、socks 代理支持、Windows 多路复用终端

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English Qwen Code Community Digest into Chinese (Simplified Chinese, based on the context). I need to:

1. Translate all English text to Chinese
2. Keep all technical terms, code references, URLs, issue numbers, etc. in their original form
3. Preserve the Markdown structure exactly
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me carefully translate this digest while maintaining the structure and formatting.</think>

# Qwen Code 社区简报 — 2026-10-24

## 今日要闻

Qwen Code 项目持续推进 v0.26.0 版本，重点关注守护进程改进和内存优化。值得注意的新增功能包括守护进程令牌持久化（方便远程连接）以及 TUI 剪贴板处理修复。目前已出现多个高优先级的内存问题，包括 macOS TUI 的 V8 内存溢出崩溃和 VS Code 伴侣守护进程的堆内存无限增长，需要团队立即关注。

---

## 版本发布

### v0.26.0-nightly.20261023.5a0be33432

**更新内容：**
- **feat(serve):** 添加守护进程令牌持久化 ([#15023](https://github.com/QwenLM/qwen-code/pull/15023)) — 支持令牌在守护进程重启后保持，改善了在远程机器上运行长时间 `qwen serve` 实例的工作流程。
- **fix(release):** 覆盖所有生成的供应商二进制文件 — 确保所有供应商二进制文件在发布流程中被正确追踪。

---

## 热门议题

### 1. [proposal(serve): 定义托管代理双路径架构与分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380)
**优先级：** P2 | **状态：** 进行中 | **评论：** 71

一份重要的架构提案，概述托管代理的双路径交付模型。这是一份高影响力的设计文档，将塑造会话管理、多代理编排和平台分发的未来。关于分阶段交付里程碑的讨论正在进行中。

### 2. [Main CI 失败：托管代理门禁 — HostedMcpStoreFaultGatesIT.storeRejectDrainedKeepsTheOwnerAndHasNoDrainReceiptOnMySql](https://github.com/QwenLM/qwen-code/issues/14713)
**优先级：** P1 | **状态：** 打开 | **评论：** 24

托管代理故障门禁的关键 CI 失败。测试 `HostedMcpStoreFaultGatesIT.storeRejectDrainedKeepsTheOwnerAndHasNoDrainReceiptOnMySql` 失败，阻止了托管 MCP 集成的进度。

### 3. [tracking(runtime): Kubernetes 工具运行时进度与跨平台交付门禁](https://github.com/QwenLM/qwen-code/issues/13395)
**优先级：** P2 | **状态：** 进行中 | **评论：** 20

追踪 Kubernetes 工具运行时进度与跨平台交付门禁的议题。团队在推进平台分发里程碑的过程中定期发布进度更新。

### 4. [Main CI 失败：Qwen Code CI — 将'纯单次提示词'路由到'进程内'](https://github.com/QwenLM/qwen-code/issues/12714)
**优先级：** P1 | **状态：** 打开 | **评论：** 11

另一个阻止核心功能的 CI 失败 — 纯单次提示词到进程内处理器的路由测试正在失败。

### 5. [feat(desktop, web-shell): 持久化保存的守护进程连接并允许记住令牌](https://github.com/QwenLM/qwen-code/issues/14947)
**优先级：** P2 | **状态：** 待人工确认 | **评论：** 6

在桌面客户端中持久化守护进程连接地址并启用令牌记住功能的需求。解决了用户重新连接到远程守护进程实例时的摩擦。需要在实施前讨论。

### 6. [ci: 四种独立机制使运行器队列保持深度（容量追踪）](https://github.com/QwenLM/qwen-code/issues/14859)
**优先级：** P2 | **状态：** 进行中 | **评论：** 6

调查 CI 队列深度问题，发现有四种不相关的机制导致积压。其中两个需要在编码前做出决定。对 CI 吞吐量优化至关重要。

### 7. [E2E 测试 — interactive/context-compress-interactive.test.ts 失败](https://github.com/QwenLM/qwen-code/issues/15173)
**优先级：** P1 | **状态：** 打开 | **评论：** 6

使用 `/compress` 命令进行聊天压缩的 E2E 测试失败。当前正在调查中。

### 8. [托管代理：在工作区会话中提供 web_fetch 和 todo_write](https://github.com/QwenLM/qwen-code/issues/15076)
**优先级：** P2 | **状态：** 打开 | **评论：** 6

在工作区会话中公开 `web_fetch` 和 `todo_write` 工具的请求。这两个工具已存在于共享核心中，并在 `qwen serve` 会话中可用。

### 9. [Qwen Code 0.26.0 TUI 在 macOS 长时间运行时因 V8 内存溢出而崩溃](https://github.com/QwenLM/qwen-code/issues/15344)
**优先级：** P1 | **状态：** 需要信息 | **评论：** 5

P1 内存问题：macOS 上的 TUI 会话因 V8 内存溢出错误而崩溃。报告者使用 macOS 26.5.1。需要环境详情和复现步骤。

### 10. [VS Code 伴侣：qwen serve 守护进程堆内存无限增长，在运行时上限约 4 GB 时因 OOM 崩溃](https://github.com/QwenLM/qwen-code/issues/15071)
**优先级：** P1 | **状态：** 打开 | **评论：** 5

VS Code 伴侣守护进程中的内存泄漏 — 堆内存无限增长直到达到 VS Code 的约 4 GB 运行时限制，然后崩溃。影响会话管理，需要立即关注。

---

## 关键 PR 进展

### 1. [feat(memory): 为 CLI 和 HTTP 添加作用域外部导入任务](https://github.com/QwenLM/qwen-code/pull/14281)
**状态：** 打开 | **Autofix:** 接管

为 CLI 和云集成添加 Qwen 自有的外部内存导入服务。客户端可以提交相对 Markdown 路径、检查确定性预览、选择部分并启动持久的后台整合。

### 2. [fix(cli): 在草稿恢复时保留 OpenTUI 剪贴板源](https://github.com/QwenLM/qwen-code/pull/15396)
**状态：** 打开

修复剪贴板处理以在大粘贴保持在编辑器中折叠的同时，提供 Ink 的精确转义源块。维护原始人类文本、显示文本和源映射之间的区别。

### 3. [feat(cli): 添加 /autofix-pr 反应层](https://github.com/QwenLM/qwen-code/pull/15385)
**状态：** 打开

实现 `/autofix-pr` 命令的反应层（设计交付第 3 步）。通过四种自动化反应类型启用 PR 监控、修复、推送和回答。

### 4. [fix(serve): 在后台重新验证技能快照](https://github.com/QwenLM/qwen-code/pull/14890)
**状态：** 打开

工作区技能清单查询现在立即返回保留的快照并在后台重新验证，启动节流为每秒一次。

### 5. [fix(core): 为等效的模型选择器共享压缩缓存](https://github.com/QwenLM/qwen-code/pull/15318)
**状态：** 打开 | **Review:** 自我报告

确保在显式选择当前模型进行压缩时仍保留缓存共享资格，当解析的模型、认证类型和端点保持不变时。

### 6. [feat(managed-agent): 通过环境为托管 Harness 提供其 Broker](https://github.com/QwenLM/qwen-code/pull/15244)
**状态：** 打开

托管 Harness 现在从环境变量（`QWEN_MANAGED_RUNTIME_BROKER_URL` 和 `QWEN_MANAGED_RUNTIME_BROKER_TOKEN`）获取其运行时 Broker，而不是命令行参数。

### 7. [fix(managed-agent): 为池 Harness 提供 Broker 对 serve 移除的配对](https://github.com/QwenLM/qwen-code/pull/15394)
**状态：** 打开

Kubernetes Harness 池现在作为环境变量提供 Broker URL 和令牌，与 systemd Harness 方法一致。

### 8. [fix(managed-agent): 为其第一个自动化动词创建永不附加的会话](https://github.com/QwenLM/qwen-code/pull/14561)
**状态：** 打开 | **Closes:** #14548

修复了使用无输入创建的会话上的自动化动词被拒绝为 `managed_session_not_found` 的问题。

### 9. [feat(managed-agent): 为 Kubernetes 添加共享 Harness 池](https://github.com/QwenLM/qwen-code/pull/15255)
**状态：** 已关闭 | **合并于：** 2026-10-24

成功合并：添加了可选的托管 Harness 池，具有持久的租户/工作区/实例/启动放置和单调轮次。

### 10. [fix(ci): 对合并后重运行跳过主要失败议题](https://github.com/QwenLM/qwen-code/pull/15250)
**状态：** 打开 | **Review:** 自我报告

防止主 CI 失败追踪器在 PR 合并后启动的重运行中提交回归议题。

---

## 功能请求趋势

| 趋势 | 描述 |
|-------|-------------|
| **守护进程连接持久化** | 多个请求要求在会话间持久化守护进程连接和令牌 (#14947, #15023) |
| **内存优化** | 多个针对 TUI、VS Code 伴侣和守护进程中内存泄漏和 OOM 条件的 P0 问题 |
| **工作流自动化** | `/autofix-pr` 命令自动化 PR 监控、修复和 CI 反馈循环 (#15056, #15385) |
| **跨平台交付** | 积极推进 Kubernetes 工具运行时和平台分发门禁 (#13395, #12380) |
| **UI/UX 改进** | 请求移除 Web Shell 中的旋转加载短语 (#15353)，自定义思考引号 (#2034) |
| **托管代理工具** | 扩展工作区会话中可用工具（web_fetch, todo_write）(#15076) |

---

## 开发者痛点

1. **内存问题占据讨论主导** — 多个影响 TUI、VS Code 伴侣和守护进程的高优先级内存相关漏洞。两个 P1 问题 (#15344, #15071) 报告内存溢出崩溃。

2. **CI 不稳定性** — Main CI 在多个测试套件（托管代理门禁、E2E 测试、SDK Java）中持续出现失败，在开发工作流中造成摩擦。CI 队列深度问题 (#14859) 凸显了系统复杂性。

3. **剪贴板处理复杂性** — 多个 PR (#15396, #15283) 专注于修复 TUI 中的剪贴板行为，表明粘贴和召回功能的用户体验持续存在挑战。

4. **发布二进制覆盖** — 需要修复以确保所有供应商二进制文件在发布流程中被正确追踪。

5. **测试基础设施** — JUnit 报告放置 (#15392)、门禁端口竞态 (#15224) 和集成测试时序 (#15237) 的问题表明测试基础设施需要改进。

---

*简报基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*