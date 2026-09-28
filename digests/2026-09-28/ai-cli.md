# AI CLI 工具社区动态日报 2026-09-28

> 生成时间: 2026-09-28 01:06 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this report into Chinese, following specific rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, project names, version tags, etc. as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure and using natural technical Chinese.</think>

# 跨工具对比：AI CLI 工具生态

## 生态概览

AI CLI 工具领域正处于快速演进阶段，七个活跃项目竞相成为 AI 辅助编程的默认开发者界面。今日动态揭示了三个主要的成熟度梯队：**OpenAI Codex** 和 **Qwen Code** 是最激进的产品迭代者，每日发布版本，管理大量 Issue 和 PR。**Claude Code** 保持稳定的后端发布节奏，同时在解决 Windows 平台回退问题上发力。**GitHub Copilot CLI** 专注于渐进式的用户体验优化，而 **OpenCode** 和 **Pi** 则服务规模较小但专注的社区，提供本地优先或离线能力等差异化用例。跨生态的主导技术主题是 **Agent 可靠性**：管理状态、恢复机制，以及人与 AI 之间的多轮交互。

---

## 活跃度对比

| 工具 | 发布 (24h) | Issue (活跃) | PR (活跃) | 讨论 | 社区渠道 |
|------|------------|--------------|-----------|------|----------|
| Claude Code | 5 | 50 | 1 | N/A | 仅 Issues |
| OpenAI Codex | 1 | 50 | 50 | 8 | Issues + 讨论 |
| Gemini CLI | 0 | 50 | 14 | N/A | 仅 Issues |
| GitHub Copilot CLI | 1 | ~15 | 10 | N/A | 仅 Issues |
| OpenCode | 0 | 50 | 50 | N/A | 仅 Issues |
| Pi | 0 | 29 | 5 | 4 | Issues + 讨论 |
| Qwen Code | 0 | 50 | 50 | N/A | 仅 Issues |

*注："N/A" 表示该渠道未使用或今日快照中未出现。OpenAI Codex 和 Pi 是仅有的两个将 Discussions 作为社区渠道的工具。*

---

## 共同的功能方向

| 功能方向 | 涉及的工具 | 具体需求 |
|----------|------------|----------|
| **多供应商 / 模型灵活性** | Claude Code, Copilot CLI, Qwen Code, Pi | 在多个模型间切换（包括 BYOK/本地），供应商特定工具处理，可配置的思考过程展示 |
| **安全与权限控制** | Claude Code, Qwen Code | 工具白名单，日志凭证清理，路径遍历防护，沙箱隔离 |
| **内存 / 上下文管理** | Claude Code, Codex, Gemini CLI, Qwen Code | 压缩可靠性，AST 感知读取以减少 token 消耗，内存峰值防护，技能清单持久化 |
| **平台可靠性 (Windows/Linux)** | Claude Code, Codex, Gemini CLI | 终端闪烁，启动卡顿，SIGCHLD 处理器回退，路径处理 |
| **MCP/服务器集成** | Claude Code, Codex, OpenCode, Qwen Code | 服务器生命周期管理，工具验证，重连处理 |
| **会话持久化与恢复** | Claude Code, Codex, Gemini CLI, Qwen Code, Pi | 子 Agent 恢复，检查点处理，会话分支，持久化关闭/归档/删除 |
| **配置灵活性** | Copilot CLI, OpenCode, Pi | 可配置的系统提示，环境变量控制，设置覆盖处理 |

---

## 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级可靠性，安全钩子 | 需要精细控制的开发者 | 深度集成 Anthropic API，sec-default 组织控制 |
| **OpenAI Codex** | 桌面应用打磨，广泛平台支持 | 通用开发者，Windows/Linux 用户 | 高频发布，重度投资 TUI/终端体验 |
| **Gemini CLI** | 自适应模型分配，沙箱隔离 | 追求控制权的高级用户 | 零依赖 OS 沙箱提案，模型智能 |
| **GitHub Copilot CLI** | GitHub 生态集成 | GitHub 用户，现有 Copilot 订阅者 | 交互式审批模式，会话管理 |
| **OpenCode** | 扩展生态，本地优先 | 插件开发者，自托管用户 | 广泛的插件 API，供应商市场 |
| **Pi** | 离线能力，轻量级 | 需要本地执行的开发者 | 离线优先设计，轻量内存占用 |
| **Qwen Code** | 受管 Agent 架构，A2A 协议 | 企业部署 | 双路径架构（Legacy + Managed），分阶段记录提交 |

**核心差异化：** Claude Code 强调企业合规的**安全钩子**；OpenAI Codex 专注**桌面打磨**和每日发布；Gemini CLI 追求模型选择的**自适应智能**；GitHub Copilot CLI 利用 **GitHub 集成**；OpenCode 和 Pi 专注**本地/离线**细分市场；Qwen Code 押注 **Agent 到 Agent（A2A）** 协议作为未来方向。

---

## 社区活力与成熟度

**高速迭代**（100+ 待办事项，每日发布）：
- **OpenAI Codex** — 50 个活跃 PR，今日 1 个发布，针对 Windows/Linux 回退的高强度补丁节奏
- **Qwen Code** — 50 个活跃 PR，受管 Agent 架构势头强劲，安全修复活跃
- **Claude Code** — 5 个后端发布，在平台稳定性问题上持续发力

**稳定迭代**（中等活跃度，月度发布节奏）：
- **GitHub Copilot CLI** — 聚焦改进，v1.0.89-5 已发布，优化用户体验
- **Gemini CLI** 今日无发布，但安全相关 PR 已合并

**小众社区**（低频迭代，专业化定位）：
- **OpenCode** — 扩展生态强劲，但大多数 Issue 评论数个位数
- **Pi** — 离线优先小众受众，29 个 Issue，聚焦功能开发

**成熟度信号：**
- Codex、Claude Code、Qwen Code 均在快速响应**安全漏洞**（路径遍历、凭证泄露、派生进程中的密钥泄露）
- 除 Pi 外，所有工具都在投入**多轮会话可靠性**建设——这标志市场正在从单轮交互演进到多轮协作
- OpenCode 和 Pi 的较低迭代速度未必是劣势——两者都服务于需要稳定性的差异化场景（扩展优先、离线优先）

---

## 趋势信号

1. **Agent 状态管理成为新战场** —— 每个工具都在解决子 Agent 恢复、会话持久化和压缩问题。这反映了从单轮完成到多轮协作工作流的范式转变。

2. **安全不再是可选项** —— 三个工具（Claude Code、Qwen Code、Gemini CLI）今日都修复了安全问题：凭证清理、路径遍历防护、派生进程中的密钥隔离。

3. **平台一致性仍难以达成** —— Windows 和 Linux 回退问题占据 Claude Code 和 Codex 的热门 Issue。构建一致的跨平台 CLI 仍具技术挑战。

4. **"MCP 问题" 是普遍现象** —— MCP 服务器生命周期管理（重连、资源限制、工具验证）出现在 Claude Code、Codex、OpenCode 和 Qwen Code 中。Model Context Protocol 正在获得采用，但周边工具链仍不成熟。

5. **BYOK 和本地模型正在崛起** —— 在 Copilot CLI、Gemini CLI 和 Pi 中都出现了在多个模型（包括 BYOK 和本地供应商）间切换的功能需求。这表明企业希望拥有可选的 AI 后端供应商。

6. **内存/token 效率是普遍关注点** —— 所有工具都在探索减少 token 浪费的方法（AST 感知读取、可配置提示词、更智能的压缩）。上下文窗口在增长，但成本敏感度也在上升。

7. **A2A 协议崭露头角** —— Qwen Code 的 PR #12851 为工作区 Agent 添加了 A2A 1.0 访问能力，预示着对 Agent 间通信未来能力的关注。

---

*报告基于 GitHub 数据编译 — 2026-09-28*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report about Claude Code Skills community highlights into Simplified Chinese. I need to:

1. Translate the content while preserving all Markdown structure
2. Keep URLs, PR/Issue numbers, file paths, usernames, and technical identifiers exactly as-is
3. Use natural technical Chinese register
4. Maintain tables, headings, lists, etc.

Let me go through and translate:

**Title:**
# Claude Code Skills 社区动态报告

**Subtitle:**
**数据来源：anthropics/skills，统计截至 2026-09-28**

**Section 1:**
## 1. 热门技能排行榜

The first paragraph needs translation. Looking at it:
- "The Pull Request data shows all open PRs with no merged skills visible in the top 20." → "Pull Request 数据显示，排名前 20 的均为开放状态的 PR，未见已合并的技能。"
- "Based on recency and substantive functionality, these represent the most active Skill submissions:" → "以下按提交时间和功能完整性排序，为当前最活跃的技能提交："

Table: Keep headers but translate the description parts
- # → 序号
- PR → PR
- Author → 作者
- Functionality → 功能描述
- Status → 状态

The note:
> **Note:** All top PRs remain OPEN. The Skills ecosystem shows healthy submission volume but no visible merges in the current dataset.
→ 
> **注意：** 排行榜中的 PR 均为开放状态。技能生态提交活跃，但当前数据中尚未看到合并记录。

**Section 2:**
## 2. 社区需求趋势

Translation of the intro paragraph and table structure:

Issues reveal clear demand signals:
→ Issues 数据揭示了明确的社区需求：

Table headers:
- Trend → 趋势
- Issue → Issue
- Summary → 概述

Key Insight:
**关键洞察：** 社区正在积极讨论治理、安全验证和企业级规模部署机制——这标志着需求已从"如何创建技能？"转向"如何规模化地信任、共享和管理技能？"


**Section 3:**
## 3. 潜力待发技能

These PRs are active, substantive, and likely to land soon:
→ 以下 PR 状态活跃、内容充实，有望近期合并：

The list needs translation while keeping all technical identifiers intact (PR numbers, usernames, file names).

**Section 4:**
## 4. 生态洞察

> **The community's most concentrated demand is for governance, security validation, and enterprise-grade skill distribution mechanisms** — reflecting a shift from "how do we create skills?" to "how do we trust, share, and manage skills at scale?"
→ 
> **社区最集中的需求集中在治理、安全验证和企业级技能分发机制**——这反映了从"如何创建技能？"到"如何规模化地信任、共享和管理技能？"的转变。

Footer:
*Report generated from github.com/anthropics/skills activity data (50 PRs, 50 Issues sampled)*
→ *报告数据来自 github.com/anthropics/skills 活动记录（采样 50 个 PR 和 50 个 Issue）*</think>

# Claude Code Skills 社区动态报告

**数据来源：anthropics/skills，统计截至 2026-09-28**

---

## 1. 热门技能排行榜

Pull Request 数据显示，排名前 20 的均为开放状态的 PR，未见已合并的技能。以下按提交时间和功能完整性排序，为当前最活跃的技能提交：

| # | PR | 作者 | 功能描述 | 状态 |
|---|-----|--------|---------------|--------|
| 1 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | ProofCore-Protocol | 自动化静态分析工具，支持 Solidity/Rust 智能合约的加密审计证明，通过零存储 Merkle 协议锚定至 TON 区块链 | OPEN |
| 2 | **[#1742](https://github.com/anthropics/skills/pull/1742)** - fix(mcp-builder) | Kuldeeep18 | 修复 `mcp>=2.0.0` 兼容性问题：`streamable_http_client` 重命名及自定义 HTTP 标头配置（通过 `create_mcp_http_client`） | OPEN |
| 3 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 70v-Yoyo | 零成本技能，将 Markdown 文档合成为专业 MP4 视频，配备逼真的人声旁白（基于 Marp） | OPEN |
| 4 | **[#1298](https://github.com/anthropics/skills/pull/1298)** - fix(skill-creator) | MartinCajiao | 隔离触发器评估、处理 Windows/运行时失败，修复命令探针选择中的误判和无效评分问题 | OPEN |
| 5 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | ksgisang | 开源端到端测试技能，为 Claude 提供视觉和浏览器控制能力，实现零代码测试生成 | OPEN |
| 6 | **[#525](https://github.com/anthropics/skills/pull/525)** - pyxel | kitao | 复古游戏开发技能，涵盖 Python 实现、无头输入驱动运行、帧检查和状态验证 | OPEN |
| 7 | **[#723](https://github.com/anthropics/skills/pull/723)** - testing-patterns | 4444J99 | 全栈测试技能，覆盖 Testing Trophy 理念、单元测试（AAA 模式）、React 组件测试及 Testing Library | OPEN |
| 8 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation | mrdesouzaphd-cmyk | 将产品/技术规格转化为 Notion 任务，含详细实施计划、验收标准和进度追踪 | OPEN |

> **注意：** 排行榜中的 PR 均为开放状态。技能生态提交活跃，但当前数据中尚未看到合并记录。

---

## 2. 社区需求趋势

Issues 数据揭示了明确的社区需求：

| 趋势 | Issue | 概述 |
|-------|-------|---------|
| **安全与信任** | [#492](https://github.com/anthropics/skills/issues/492) (43 条评论) | **关键问题：** 社区技能冒充官方 `anthropic/` 命名空间，存在信任边界滥用风险。用户可能在不知情的情况下授予 elevated 权限。 |
| **企业协作** | [#228](https://github.com/anthropics/skills/issues/228) (16 条评论) | 企业内跨组织技能共享需求强烈——目前 Claude.ai 中需要手动分发文件。 |
| **评估/工具** | [#556](https://github.com/anthropics/skills/issues/556) (12 条评论) | `run_eval.py` 报告 0% 触发率 — 技能在评估期间从未激活，阻塞了正常测试流程。 |
| **元技能** | [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer 和 skill-security-analyzer，用于 marketplace 治理。 |
| **治理** | [#412](https://github.com/anthropics/skills/issues/412) | agent-governance 技能提案，涵盖策略执行、威胁检测、信任评分、审计追踪。 |
| **内存/效率** | [#1329](https://github.com/anthropics/skills/issues/1329) | compact-memory 技能，为长时间运行的 agent 提供符号化记号以降低上下文开销。 |

**关键洞察：** 社区正在积极讨论治理、安全验证和企业级规模部署机制——这标志着需求已从"如何创建技能？"转向"如何规模化地信任、共享和管理技能？"

---

## 3. 潜力待发技能

以下 PR 状态活跃、内容充实，有望近期合并：

- **[#1792](https://github.com/anthropics/skills/pull/1792)** — `fix(docx)`：将 LibreOffice 超时报告为错误，验证输出的 DOCX 无修订标记（近期活动，2026-09-25）
- **[#1681](https://github.com/anthropics/skills/pull/1681)** — `fix(skill-creator)`：支持直接执行 `package_skill.py`，更新过时路径（更新于 2026-09-27）
- **[#1776](https://github.com/anthropics/skills/pull/1776)** — `blast-radius`：危险批量操作清单技能 — 归档、权限撤销、批量删除安全检查
- **[#1734](https://github.com/anthropics/skills/pull/1734)** — 检测孤立的 docx 批注
- **[#1615](https://github.com/anthropics/skills/pull/1615)** — `scnet-hpc`：基于配置文件的 SSH/Slurm 工作流，用于 HPC 集群操作
- **[#514](https://github.com/anthropics/skills/pull/514)** — document-typography：防止 AI 生成文档中的孤行/寡行、编号错位问题

---

## 4. 生态洞察

> **社区最集中的需求集中在治理、安全验证和企业级技能分发机制**——这反映了从"如何创建技能？"到"如何规模化地信任、共享和管理技能？"的转变。

---

*报告数据来自 github.com/anthropics/skills 活动记录（采样 50 个 PR 和 50 个 Issue）*

---

<think>The user wants me to translate the Claude Code Community Digest into Chinese. I need to:

1. Translate the content while keeping the same structure (headings, tables, lists, etc.)
2. Keep all URLs, issue/PR references (#numbers), technical terms, code blocks as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. No preamble, no explanation, just the translated content
5. No markdown fences around the output

Let me translate this carefully, maintaining the exact structure and technical accuracy.</think>

# Claude Code 社区digest — 2026-09-28

## 今日要闻

GitHub issue 追踪器显示 Windows 平台 bug 和 Cowork 协作功能相关问题显著增加。一个关键的安全相关 issue（#94675）突出了 UserPromptSubmit 钩子可能存在的提示词注入风险。唯一活跃的 PR（#97688）解决了 sec-default 组织的收集器记录权限问题。

---

## 版本发布

*过去24小时内无新版本发布。*

---

## 热门 issue

1. **[#76694](https://github.com/anthropics/claude-code/issues/76694)** — **Cowork：新项目丢失了"选择文件夹"功能**（35 条评论，28 个👍）  
   Chat/Cowork 合并后，上下文菜单被替换为仅支持上传的知识菜单，破坏了新项目的文件夹选择流程。严重影响依赖 Cowork 进行项目管理的用户。

2. **[#89398](https://github.com/anthropics/claude-code/issues/89398)** — **斜杠命令选择器只在 "/" 作为首字符时才能打开**（15 条评论，7 个👍）  
   在 Windows 上，当 "/" 出现在输入框中间时，自动完成选择器无法打开，但提交时命令仍会执行——静默失败导致用户体验混乱。

3. **[#93482](https://github.com/anthropics/claude-code/issues/93482)** — **Cowork：device_commit_files 报告成功但内容滞后一个提交**（14 条评论）  
   新鲜 mtime 的静默过期写入可能导致数据同步问题——用户可能误以为文件已正确保存。

4. **[#94675](https://github.com/anthropics/claude-code/issues/94675)** — **UserPromptSubmit 对 agent/系统注入的消息触发，且无 prompt_source/is_meta**（3 条评论，1 个👍）  
   安全问题：钩子无法区分 agent 注入的消息和用户输入的消息，产生提示词注入风险。来自跨会话 SendMessage、子 agent 完成和循环重注入的消息都以相同方式触发钩子。

5. **[#93967](https://github.com/anthropics/claude-code/issues/93967)** — **claude auth login / claude setup-token 在 Windows 上 OAuth 403 失败**（3 条评论，1 个👍）  
   CLI 认证在 Windows 上报错 "missing user:profile scope"，而 Claude Desktop 登录正常工作——阻止了无头工作流的使用。

6. **[#89938](https://github.com/anthropics/claude-code/issues/89938)** — **SendMessage 对未送达的消息返回 {"success":true}**（3 条评论，1 个👍）  
   长期会话变得"失聪"，显示 "Connected" 但 workers 为 0 的过时桥接指针——导致分布式设置中的消息丢失。

7. **[#88128](https://github.com/anthropics/claude-code/issues/88128)** — **当可选的缓存提示省略时，MCP tools/list 被拒绝**（1 条评论）  
   协议 2026-07-28 回归：省略可选的 `ttlMs`/`cacheScope` 导致整个服务器工具被静默丢弃——脆弱的 MCP 集成。

8. **[#82017](https://github.com/anthropics/claude-code/issues/82017)** — **压缩继续的会话丢失技能清单**（1 条评论）  
   自动压缩后，模型对所有之前注册的技能变得"路由盲"——只有增量公告跟随，破坏基于技能的路由。

9. **[#97409](https://github.com/anthropics/claude-code/issues/97409)** — **Windows：Bash 工具将每对反斜杠减半**（1 条评论）  
   任何 *n* 个连续反斜杠到达 bash 时变成 *n/2*——破坏 Windows 路径处理和 PowerShell 命令。

10. **[#97058](https://github.com/anthropics/claude-code/issues/97058)** — **Desktop：已完成的 Project 线程保持活跃会话，阻止新会话**（1 条评论）  
    已完成的 Project 线程持有活跃会话，填满进程上限，阻止新 Project 会话启动。

---

## 关键 PR 进展

1. **[#97688](https://github.com/anthropics/claude-code/pull/97688)** — **sec-default：收集器记录延续到用户层之后**  
   允许具有 sec-default 席位的组织配置插件行为，使发送到收集器的记录不再被丢弃或重写。将收集器流的 `telemetry.log` 扩展到用户层之后，与 `classic.*` 和 `settings.read` 行为保持一致。

---

## 功能请求趋势

| 主题 | 证据 |
|-------|----------|
| **增强终端颜色支持** | #74447：/color 命令支持任意十六进制颜色（已关闭，已合并） |
| **Windows 路径处理** | #76490、#97409：驱动器号路径匹配、反斜杠加倍修复需求 |
| **MCP 可靠性** | #88128：可选字段的协议合规性 |
| **会话持久化** | #82017：跨压缩的技能清单保留 |
| **安全钩子清晰度** | #94675：区分用户消息与注入消息 |

---

## 开发者痛点

- **Windows 平台差距**：多个 issue（#89398、#93967、#97409、#97058）表明 Windows 平台测试不足——认证、路径、斜杠命令都有平台特定故障。
- **Cowork 回归**：Chat/Cowork 合并引入了多个回归（#76694、#93482、#76453）——协作功能感觉不稳定。
- **静默失败**：多个 issue 描述操作报告成功但产生不正确结果（#93482、#89938、#76584）——侵蚀对工具的信任。
- **MCP 脆弱性**：协议合规问题（#88128、#76238）导致工具静默消失，使 MCP 集成不可靠。
- **资源泄漏**：无头会话（#76185）和会话上限耗尽（#97058）中的内存泄漏导致生产故障。

---

*Digest 基于 GitHub 数据生成 — 2026-09-28*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the GitHub digest into Chinese. Let me go through it carefully and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code, version numbers as-is
4. Keep project names, issue/PR numbers, file paths in original form
5. Use natural technical Chinese register

Let me translate section by section:

**Title:**
# OpenAI Codex 社区动态 — 2026-09-28

**Today's Highlights:**
The past 24 hours saw intense activity around the **26.924 desktop release**, with multiple critical issues emerging on Windows and Linux platforms. Linux users are experiencing hangs and startup failures requiring rollbacks, while Windows users face terminal flashing, startup spinner hangs, and console window flashes during daemon operations. The team shipped 6 Rust releases (v0.158–v0.159 alpha series) and closed 20 PRs, including improvements to thread archiving, voice RTP alignment, and TUI rendering.

过去 24 小时内，**26.924 桌面版**发布引发大量活动，Windows 和 Linux 平台均出现多个关键问题。Linux 用户遭遇卡顿和启动失败，需要回滚版本；Windows 用户则面临终端闪烁、启动轮盘卡死以及守护进程期间的控制台窗口闪烁。团队发布了 6 个 Rust 版本（v0.158–v0.159 alpha 系列），并合并了 20 个 PR，涵盖线程归档、语音 RTP 对齐和 TUI 渲染等方面的改进。

**Releases:**
Six new Rust releases landed in the last 24h, all targeting the app-server backend:

过去 24 小时内发布了 6 个新的 Rust 版本，均针对 app-server 后端：

- **rust-v0.159.0-alpha.11** 到 **alpha.7** — v0.159 系列连续五个 alpha 版本


- **rust-v0.158.0-alpha.15.3** — v0.158 稳定分支的补丁版本

这些版本没有附带变更日志，看起来是常规的后端迭代，为桌面应用版本提供支持。

**Hot Issues:**
表格部分需要保持格式，包括列标题和对齐。Issue #48074 涉及 Windows 终端在请求期间反复闪烁，安装 Codex 守护进程后每次请求都会触发可见终端闪烁，严重影响 CLI 体验。

Issue #48189 中 Linux Desktop 26.924 版本在"Starting your task"处卡住，用户需要回滚到 26.917.71314 才能恢复使用。Issue #48554 中 Linux 系统上 Electron 替换了 libuv 的 SIGCHLD 处理器，导致子进程无法被回收，shell 环境超时，Git 不可用。Issue #48333 中 Windows Desktop 26.924 版本在启动轮盘处卡住，必须手动终止 app-server codex.exe 进程。

Issue #48422 中 Windows 系统的 shell 进程子节点每次会话/轮次都会弹出可见的 cmd.exe 窗口。Issue #48417 中 Linux 回归问题：Codex 26.924.22138 版本在每个提示处卡住，降级到 26.901.41600 后恢复正常。Issue #44768 中 Windows 系统的 app-server 守护进程为每个钩子和 shell 命令打开可见控制台。Issue #42739 中本地项目在 Windows 桌面更新后从侧边栏消失，磁盘上的文件仍然存在但项目显示"无项目"。

Issue #44102 中 Windows Desktop 26.903 版本无法在第一轮后发送后续消息。Issue #48463 中 Windows 桌面应用在更新后卡在加载屏幕，app_start bootstrap 超时。

PR #48829 在 Windows 沙箱预配置服务启动期间等待短暂时间，轮询服务状态最多 5 秒以避免完整预配置超时。PR #48828 允许在第一次轮次前归档线程，在查找前持久化加载的线程，支持新启动线程的归档。PR #48827 在 Ghostty 和 Kitty 中显示Transcript 中的链接显示手型指针，提高终端捕获模式下的可发现性。PR #48824 保持语音 RTP 时间戳与 20 毫秒数据包对齐，修复音频被拒绝的问题。PR #48819 使用显式直方图桶处理工具和技能上下文指标。PR #48814 保留 Mermaid 标签中的标点和分号。PR #48812 为空闲线程添加历史感知的预热。PR #48807 在 TUI 完成页脚中显示短轮次持续时间。PR #48805 允许在模态打开时使用滚轮滚动 Transcript。PR #48800 使用终端调色板处理有序 Markdown 列表标记。

在 Ideas 类别中，#46658 讨论了超越 Auto 模式的学习模型、工具和子代理分配方案，#26397 探讨了同时使用 Codex 和 Claude Code 时项目上下文管理的困境。在 Q&A 中，#48589 反映了批准选项 2 对不同参数的 git add 和 git commit 仍会重复提示的问题，#48512 询问了运行自定义部署模型的相关文档。

Show and Tell 展示了两个项目：#48529 的 Jev Social 作为 Codex 技能支持 Instagram/TikTok/LinkedIn 研究，#48733 的 Codex Monitor 是 Windows 上的微型常驻顶部配额监控工具。General 类别中 #42983 讨论了使用限制的透明度问题，用户反映低-tier 模型的配额消耗速度与高-tier 模型相当。

功能需求方面，开发者希望在 UI 中显示项目/工作区上下文、动态对话标题、持久化外部指令、自适应模型分配和跨工具项目内存。稳定性方面存在几个关键痛点：Linux 桌面应用在 26.924 版本上广泛出现问题、Windows 终端用户体验不佳、使用限制不透明、审批持久化不一致以及 Windows 桌面更新导致项目上下文丢失。</think>

# OpenAI Codex 社区动态 — 2026-09-28

## 今日要闻

过去 24 小时内，**26.924 桌面版**发布引发大量活动，Windows 和 Linux 平台均出现多个关键问题。Linux 用户遭遇卡顿和启动失败，需要回滚版本；Windows 用户则面临终端闪烁、启动轮盘卡死以及守护进程期间的控制台窗口闪烁。团队发布了 6 个 Rust 版本（v0.158–v0.159 alpha 系列），并合并了 20 个 PR，涵盖线程归档、语音 RTP 对齐和 TUI 渲染等方面的改进。

---

## 版本发布

过去 24 小时内发布了 6 个新的 Rust 版本，均针对 app-server 后端：

- **rust-v0.159.0-alpha.11** 到 **alpha.7** — v0.159 系列连续五个 alpha 版本
- **rust-v0.158.0-alpha.15.3** — v0.158 稳定分支的补丁版本

这些版本没有附带变更日志，看起来是常规的后端迭代，为桌面应用版本提供支持。

---

## 热门 Issue

| # | Issue | 为何重要 | 反应 |
|---|-------|----------------|----------|
| [#48074](https://github.com/openai/codex/issues/48074) | **Windows：请求期间终端窗口反复闪烁** — 安装 Codex 守护进程后，每次请求都会触发 Windows 11 上的可见终端闪烁。 | 严重降低 CLI 体验；守护进程模式对许多开发者来说无法使用。 | 40 条评论，74 👍 |
| [#48189](https://github.com/openai/codex/issues/48189) | **Linux Desktop 26.924 在"Starting your task"处卡住** — 用户必须回滚到 26.917.71314 才能恢复。 | 完全阻止 Linux 用户使用；最新版本无法用于本地 Codex 任务。 | 24 条评论，42 👍 |
| [#48554](https://github.com/openai/codex/issues/48554) | **Linux：Electron 替换了 libuv SIGCHLD 处理器** — 子进程永远不会被回收；shell 环境超时，Git 不可用。 | 26.924 中多个 Linux 故障的根本原因；Electron 级别的严重回归。 | 22 条评论，12 👍 |
| [#48333](https://github.com/openai/codex/issues/48333) | **Windows：Desktop 26.924 卡在启动轮盘上** — 必须手动终止 app-server codex.exe。 | 用户根本无法访问 Codex；应用永远无法恢复。 | 22 条评论，7 👍 |
| [#48422](https://github.com/openai/codex/issues/48422) | **Windows：shell 进程子节点的控制台窗口闪烁** — 每次会话/轮次都会弹出可见的 cmd.exe 窗口。 | 与 #48074 类似的困扰，但影响更新的 0.157.1 CLI。 | 16 条评论，17 👍 |
| [#48417](https://github.com/openai/codex/issues/48417) | **Linux 回归：26.924.22138 版本中 Codex 在每个提示处卡住** — 回退到 26.901.41600 后正常工作。 | 另一个 Linux 特有的卡顿问题，确认是 26.924 引入的回归。 | 16 条评论，4 👍 |
| [#44768](https://github.com/openai/codex/issues/44768) | **Windows：app-server 守护进程为每个钩子和 shell 命令打开可见控制台** | 充满Transient窗口；破坏工作流专注度。 | 13 条评论，4 👍 |
| [#42739](https://github.com/openai/codex/issues/42739) | **Windows 桌面更新后本地项目从侧边栏消失** — 项目显示"No projects"，但文件在磁盘上存在。 | 用户失去项目上下文；Windows 桌面应用的严重回归。 | 32 条评论 |
| [#44102](https://github.com/openai/codex/issues/44102) | **Windows Desktop 26.903：第一轮后无法发送后续消息** | 破坏会话连续性；用户必须重启会话。 | 29 条评论 |
| [#48463](https://github.com/openai/codex/issues/48463) | **Windows 桌面应用更新后卡在加载屏幕上** — app_start bootstrap 超时。 | 另一个完全阻止访问的 Windows 启动失败。 | 15 条评论 |

---

## 重要 PR 进展

| # | PR | 改动内容 |
|---|-----|--------------|
| [#48829](https://github.com/openai/codex/pull/48829) | **Windows 沙箱预配置服务启动时短暂等待** — 在启动期间轮询服务状态最多 5 秒，避免完整预配置超时。 |
| [#48828](https://github.com/openai/codex/pull/48828) | **允许在第一次轮次前归档线程** — 在查找前持久化加载的线程，支持归档新启动的线程。 |
| [#48827](https://github.com/openai/codex/pull/48827) | **在 Ghostty 和 Kitty 中 Transcript 链接显示手型指针** — 提高终端捕获模式下链接的可发现性。 |
| [#48824](https://github.com/openai/codex/pull/48824) | **保持语音 RTP 时间戳与 20 ms 数据包对齐** — 修复静音/抖动后接收方因期望固定时长帧而拒绝音频的问题。 |
| [#48819](https://github.com/openai/codex/pull/48819) | **为工具和技能上下文指标使用显式直方图桶** — 为片段大小添加对数边界，为技能计数添加整数边界。 |
| [#48814](https://github.com/openai/codex/pull/48814) | **保留 Mermaid 标签中的标点和分号** — 修复包含括号、分号和数组语法的标签渲染。 |
| [#48812](https://github.com/openai/codex/pull/48812) | **为空闲线程添加历史感知的预热** — 使用会话历史准备 WebSocket 响应，减少下一轮延迟。 |
| [#48807](https://github.com/openai/codex/pull/48807) | **在 TUI 完成页脚中显示短轮次持续时间** — 显示所有已知持续时间，包括亚秒级的"Worked..." |
| [#48805](https://github.com/openai/codex/pull/48805) | **允许在模态打开时使用滚轮滚动 Transcript** — 在"Implement this plan?"提示期间可查看长计划中的早期步骤。 |
| [#48800](https://github.com/openai/codex/pull/48800) | **使用终端调色板渲染有序 Markdown 列表标记** — 使用浅蓝色而非强调色渲染编号列表。 |

---

## 热门讨论

### 创意

- [#46658](https://github.com/openai/codex/discussions/46658) — **超越 Auto 模式：学习分配模型、工具和子代理** — 将模型选择、推理投入和工具分配视为统一的自适应问题。（4 条评论，3 👍）
- [#26397](https://github.com/openai/codex/discussions/26397) — **同时使用 Codex 和 Claude Code，厌倦了在两个地方维护项目上下文？** — 讨论跨 AI 开发者工具统一项目内存约定。（4 条评论，3 👍）

### 问答

- [#48589](https://github.com/openai/codex/discussions/48589) — **批准选项 2 仍然对不同的 `git add` 和 `git commit` 参数重复提示** — 用户报告批准不适用于命令参数，导致需要反复确认。（1 条评论，1 👍）
- [#48512](https://github.com/openai/codex/discussions/48512) — **如何使用自定义部署的 OpenAI 模型和 API 密钥运行 Codex** — 询问自定义模型端点的文档。（1 条评论，1 👍）

### 展示

- [#48529](https://github.com/openai/codex/discussions/48529) — **Jev Social：基于浏览器的社交研究作为 Codex Skill** — 用于 Instagram/TikTok/LinkedIn 研究的开源技能，使用 pinned CLI。（2 👍）
- [#48733](https://github.com/openai/codex/discussions/48733) — **Codex Monitor — 微型 Windows 常驻顶部监控器** — 显示剩余配额和重置倒计时的小组件。（1 👍）

### 综合

- [#42983](https://github.com/openai/codex/discussions/42983) — **使用限制感觉不太对** — 报告 Luna low 消耗 5h 限制的速度与 Astra high 一样快；4% 的下降对应 96 词的回复。（2 条评论，8 👍）

---

## 功能需求趋势

1. **UI 中的项目/工作区上下文** — 多个请求希望在 thread UI 中显示当前项目、cwd 和 Git 分支（Issue #28977）。
2. **动态会话标题** — 模型可用于随着会话演进重命名对话的工具（Issue #14044）。
3. **持久化外部指令** — 持久化 Google Drive 指令和在 Codex for Windows 中创建文件（Discussion #48032）。
4. **自适应模型分配** — 学习动态分配模型、推理投入、工具和子代理（Discussion #46658）。
5. **跨工具项目内存** — 统一 Codex 和 Claude Code 之间的上下文（Discussion #26397）。

---

## 开发者痛点

- **Linux 桌面应用稳定性** — 26.924 版本在 Linux 上广泛损坏；卡顿、启动失败和进程管理回归迫使用户回滚。
- **Windows 终端用户体验** — 守护进程操作、钩子执行和 Git 查询期间控制台窗口反复闪烁，使 CLI 难以使用。
- **使用限制透明度** — 用户报告令人困惑的配额行为，低-tier 模型消耗限制的速度与高-tier 模型一样快。
- **批准持久化** — Guardian 批准设置（选项 2 表示"批准此命令类型"）在不同参数组合下不会持久化，导致重复提示。
- **项目上下文丢失** — Windows 桌面更新导致项目从侧边栏消失，失去工作区上下文。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following specific rules:
- Only output the translation, no preamble
- Preserve markdown structure exactly
- Keep URLs, numbers, issue/PR references, technical terms in original form
- Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully while maintaining all the formatting and technical accuracy.

I'll translate:
- "Community Digest" -> "社区动态"
- "Today's Highlights" -> "今日要点"
- "Hot Issues" -> "热门问题"
- "Key PR Progress" -> "关键 PR 进展"
- "Feature Request Trends" -> "功能需求趋势"
- "Developer Pain Points" -> "开发者痛点"

I need to translate the issue descriptions and PR descriptions naturally while keeping technical terms, numbers, URLs, etc. as-is.</think>

# Gemini CLI 社区动态

**日期：** 2026-09-28  
**数据来源：** github.com/google-gemini/gemini-cli

---

## 1. 今日要点

过去 24 小时没有新版本发布，但安全相关的 PR 活动显著增加，有四个安全补丁解决了路径遍历、环境变量泄露和检查点漏洞等问题。与此同时，P1 级别的代理挂起和子代理行为问题持续积累评论，表明代理系统的可靠性仍面临挑战。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 热门问题

| # | 问题 | 优先级 | 评论数 | 为何重要 |
|---|------|--------|--------|----------|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)：子代理在达到 MAX_TURNS 后恢复，报告为 GOAL 成功** | P1 | 13 | 子代理在达到最大回合限制时仍报告成功（`status: "success"`，`Termination Reason: "GOAL"`），向用户隐瞒了实际的中断情况。破坏了代理结果的可信度。 |
| 2 | **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)：利用零依赖 OS 沙箱发挥模型的 bash 亲和力** | P2 | 9 | 提案利用零依赖 OS 沙箱和执行后意图路由来发挥 Gemini 原生 POSIX 工具链训练的优势——可能带来重大的 UX/安全改进。 |
| 3 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)：通用代理挂起** | P1 | 8 | 关键 bug：Gemini CLI 在调用通用代理时无限挂起，即使对于创建文件夹等简单操作也是如此。阻塞工作流。 |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)：评估 AST 感知文件读取、搜索和映射的影响** | P2 | 7 | 研究使用 AST 感知工具精确定位方法边界，减少因读取错位导致的 token 浪费。可能显著减少上下文膨胀。 |
| 5 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)：Gemini 没有充分使用 skills 和 sub-agents** | P2 | 6 | 用户反映 Gemini 很少自主调用自定义 skills/sub-agents，需要明确提示。限制了自动化潜力。 |
| 6 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)：添加确定性脱敏并减少 Auto Memory 日志** | P2 | 5 | 安全问题：Auto Memory 在脱敏前将转录内容发送给模型，服务可能记录敏感信息。需要确定性清理。 |
| 7 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)：停止 Auto Memory 无限重试低信号会话** | P2 | 4 | 内存系统效率问题：低信号会话保持未处理状态并持续被重新出现，浪费资源。 |
| 8 | **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)：Browser Agent 忽略 settings.json 覆盖** | P2 | 4 | 配置 bug：Browser Agent 完全忽略 `settings.json` 中的 `maxTurns` 等覆盖配置。破坏用户配置。 |
| 9 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)：Browser subagent 在 Wayland 上失败** | P1 | 4 | 平台特定 bug：影响 Linux/Wayland 用户——browser subagent 以 GOAL 终止失败。 |
| 10 | **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)：模型经常在随机位置创建 tmp 脚本** | P2 | 3 | 模型在被限制 shell 执行时会在各目录中散布创建临时脚本，造成清理负担。 |

---

## 4. 关键 PR 进展

| # | PR | 规模 | 关注点 | 描述 |
|---|-----|------|--------|------|
| 1 | **[#29527](https://github.com/google-gemini/gemini-cli/pull/29527)** | M | Core (P1) | 修复历史记录以模型 turn 结尾时（如 `/rewind` 或流中断后）导致的 400 Bad Request 错误。 |
| 2 | **[#29528](https://github.com/google-gemini/gemini-cli/pull/29528)** | M | CLI (P1) | 修复 headless 模式下 `useFolderTrust` 对不受信任工作区错误报告信任变更的问题。 |
| 3 | **[#29525](https://github.com/google-gemini/gemini-cli/pull/29525)** | S | A2A Server (P1) | 防止从调用方提供的 `agentSettings` 在 `createTask` 中派生工作区信任。 |
| 4 | **[#29523](https://github.com/google-gemini/gemini-cli/pull/29523)** | M/L | Security (P2) | **安全修复**：限制外部安全检查器的输出，并从派生进程中移除敏感环境变量（`GEMINI_API_KEY` 等）。 |
| 5 | **[#29522](https://github.com/google-gemini/gemini-cli/pull/29522)** | M | Security | **安全修复**：Glob 工具现在验证模式以防止路径遍历（例如，防止 `/etc/*.conf` 逃离 `cwd`）。 |
| 6 | **[#29521](https://github.com/google-gemini/gemini-cli/pull/29521)** | M | Security (P1) | **安全修复**：将遗留检查点路径限制在安全范围内，防止标签名中的 `..` 造成路径遍历。 |
| 7 | **[#29411](https://github.com/google-gemini/gemini-cli/pull/29411)** | M | CLI (P2) | `resume --latest` 现在解析为最近活动的会话（按活动时间），而非最新开始时间。 |
| 8 | **[#29407](https://github.com/google-gemini/gemini-cli/pull/29407)** | M | Core (P2) | 保留 JSON 序列化中的共享引用——修复 OpenTelemetry 数组导出中的循环引用处理。 |
| 9 | **[#29404](https://github.com/google-gemini/gemini-cli/pull/29404)** | L | CLI (P3) | 新命令：`gemini models list -o json` 用于程序化发现模型，无需硬编码 ID。 |
| 10 | **[#29508](https://github.com/google-gemini/gemini-cli/pull/29508)** | XL | Dependencies | npm 依赖更新：76 个包升级，包括 `simple-git` 3.28→3.36 和 `@modelcontextprotocol/sdk`。 |

---

## 5. 功能需求趋势

根据问题分析，社区正在请求：

| 主题 | 请求数 | 描述 |
|------|--------|------|
| **代理可靠性** | #22323, #21409, #21968 | 修复子代理终止报告、挂起行为和自主技能调用 |
| **安全加固** | #26525, #19873 | 确定性脱敏、OS 沙箱和敏感信息隔离 |
| **内存/上下文效率** | #22745, #19561 | AST 感知读取实现精准代码发现，减少 token 膨胀 |
| **配置灵活性** | #22267, #20079 | 尊重 `settings.json` 覆盖，支持符号链接的代理文件 |
| **平台支持** | #21983 | 修复 Wayland 上 browser subagent 的兼容性 |
| **工具** | #18836, #21000 | 持久化基于文件的任务跟踪，而非上下文中的 todos |

---

## 6. 开发者痛点

1. **代理挂起**：通用代理在简单操作上挂起，阻塞工作 (#21409)
2. **状态报告不可靠**：子代理在达到最大回合时虚假报告成功 (#22323)
3. **配置被忽略**：Browser Agent 和其他组件忽视用户设置 (#22267)
4. **安全问题**：敏感信息泄露给外部检查器，路径验证不足 (#26525, #29521, #29522)
5. **工具膨胀**：400+ 工具触发 400 错误；代理需要更智能的作用域管理 (#24246)
6. **临时文件混乱**：模型在各目录散布创建临时脚本 (#23571)
7. **内存系统循环**：Auto Memory 无限重试低信号会话 (#26522)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Chinese. I need to follow the rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate the digest:</think>

# GitHub Copilot CLI 社区周报

**日期：** 2026-09-28

---

## 1. 今日要闻

GitHub Copilot CLI v1.0.89-5 带来了三项体验优化：表单输入框支持点击定位光标位置、新增 `.claude/rules` 目录下的 Claude Code 规则文件支持、侧边栏会话新增未读对话气泡标记。与此同时，社区对权限控制的需求持续升温——交互模式下的工具白名单功能（Issue #1973）获得大量关注，开发者们也在强烈呼吁支持在多个模型（包括 BYOK/本地模型）之间自由切换。

---

## 2. 版本发布

**v1.0.89-5** (2026-09-27)

- **输入交互优化**：左键点击 `ask_user` 和 elicitation 表单输入框时，会聚焦该输入框并将光标置于点击位置
- **自定义指令支持**：新增对 `.claude/rules` 目录下 Claude Code 规则文件的支持，可作为自定义指令使用
- **会话未读提醒**：侧边栏中的会话在存在未读对话时会显示蓝色圆点

[查看发布详情 →](https://github.com/github/copilot-cli/releases)

---

## 3. 热门 Issue

| Issue | 标题 | 重要性 | 反馈 |
|-------|------|--------|------|
| [#1973](https://github.com/github/copilot-cli/issues/1973) | 交互模式的工具白名单功能 | 目前每次工具调用都需要手动审批，即使是安全的只读操作也概莫能外。用户希望能够精细控制哪些工具可以自动放行、哪些需要逐个确认。 | 📢 29 👍, 13 条评论 |
| [#1857](https://github.com/github/copilot-cli/issues/1857) | 支持取消或移除排队中的消息 | 无法取消通过 `Ctrl+Q` / `Ctrl Enter` 放入队列、等待 agent 空闲时执行的消息。长时间任务中苦不堪言。 | 📢 29 👍, 12 条评论 |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | 支持 /model 在多个模型间切换，包括 BYOK/本地 providers | BYOK 模式将会话锁定在单一模型；`/model` 选择器不显示本地 provider 的模型。不支持本地部署的用户需求。 | 📢 33 👍, 8 条评论 |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | 进程本地的 auth token 停止刷新；所有 prompt 都会失败直到重启 | 长时间运行的进程会永久丢失认证状态；`/login` 也无法恢复。必须重启才能恢复正常。 | 🔴 7 条评论 |
| [#4905](https://github.com/github/copilot-cli/issues/4905) | 桌面应用：会话在启动几分钟后失效 — "GitHub 凭证注册已不可用" | 桌面应用的会话因 MCP 服务器目录过期而变得不可用，严重影响工作效率。 | 🔴 6 条评论, 4 👍 |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | 可配置的系统提示词 — 允许用户精简固定 token 开销 | 系统提示词在会话启动时消耗约 20,500 个 token（200K 上下文的 ~10%）。加上工具定义约 8,500 个 token，用户希望减少这一开销。 | 💡 21 👍, 6 条评论 |
| [#2753](https://github.com/github/copilot-cli/issues/2753) | 插件技能未包含在主 agent 的 available_skills 中 | 插件市场的技能在 `/skills` UI 中可见，但不会被注入到 `<available_skills>` 块中——导致技能功能失效。 | 🐛 4 条评论 |
| [#4531](https://github.com/github/copilot-cli/issues/4531) | 从 Copilot CLI 启动 VS Code 时设置了空的 GIT_CONFIG_VALUE，破坏 Git 发现功能 | Copilot CLI 导出了空的 `GIT_CONFIG_VALUE_*` 块，导致 VS Code 的 Git 集成失效。 | 🐛 3 条评论, 2 👍 |
| [#4907](https://github.com/github/copilot-cli/issues/4907) | MCP 周期性重连通知不断刷屏对话历史 | MCP 生命周期消息在空闲会话期间也会重复追加，严重污染对话。 | 🐛 3 条评论 |
| [#4950](https://github.com/github/copilot-cli/issues/4950) | BYOK 自定义 providers：CLI 强制使用贪婪采样导致推理模型退化 | CLI 1.0.81+ 强制所有请求使用 `temperature=0`，破坏了小型思考模型，导致静默卡死。 | 🐛 2 条评论 |

---

## 4. 关键 PR 进展

| PR | 标题 | 状态 |
|----|------|------|
| [#1305](https://github.com/github/copilot-cli/issues/1305) | 为远程 OAuth MCP 服务器支持 CIMD | ✅ 已关闭 |
| [#1977](https://github.com/github/copilot-cli/issues/1977) | 设置预算后显示负数的"剩余请求数" | ✅ 已关闭 |
| [#2033](https://github.com/github/copilot-cli/issues/2033) | Markdown 链接未转换为 OSC 8 超链接 | ✅ 已关闭 |
| [#2075](https://github.com/github/copilot-cli/issues/2075) | Agent 可以在计划模式下进行编辑 | ✅ 已关闭 |
| [#2285](https://github.com/github/copilot-cli/issues/2285) | 从 copilot cli 复制命令时包含不可见字符 | ✅ 已关闭 |
| [#2551](https://github.com/github/copilot-cli/issues/2551) | 使用 opus 4.5 和 sonnet 4.5 时 copilot cli 报错 | ✅ 已关闭 |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | 可配置的系统提示词 - 允许用户精简固定 token 开销 | ✅ 已关闭 |
| [#2753](https://github.com/github/copilot-cli/issues/2753) | 插件技能未包含在主 agent 的 available_skills 中 | ✅ 已关闭 |
| [#3125](https://github.com/github/copilot-cli/issues/3125) | MCP tools/list_changed 通知：更新的工具直到下一轮用户输入才可见 | ✅ 已关闭 |
| [#3195](https://github.com/github/copilot-cli/issues/3195) | 因未处理 BYOK providers 的 reasoning 字段，AssistantMessageDeltaEvent 和 AssistantReasoningEvent 未触发 | ✅ 已关闭 |
| [#3817](https://github.com/github/copilot-cli/issues/3817) | kCreate "#" | 🔵 开放中 |

---

## 5. 功能需求趋势

本周 Issue 中最集中的需求方向：

- **精细化工具权限** — 用户希望在交互模式下设置工具白名单，自动批准安全的只读操作，同时保留对危险工具的逐个审批
- **多模型灵活性** — 强烈希望 `/model` 能在 GitHub 托管模型、BYOK 和本地 providers 之间自由切换，不受单会话单模型限制
- **可配置系统提示词** — 会话启动时的 ~20,500 token 开销过高；用户希望能够自定义或精简固定指令
- **消息队列管理** — 在长时间 agent 任务中，允许取消或编辑排队中待执行的消息
- **会话分叉** — 基于共享上下文将会话分支为并行会话（已关闭——状态不明）

---

## 6. 开发者痛点

- **长时间会话的认证失效** — Token 刷新停止后无法恢复，`/login` 也不行，必须重启
- **桌面应用集成问题** — 会话因 GitHub 凭证过期而失效；新 worktree 中的自定义 agent 不可见
- **Token 开销过高** — 系统提示词 + 工具定义占用约 29,000 token 才开始处理用户内容，亟需定制化
- **MCP 服务器可靠性** — 重连通知在空闲会话中反复刷屏；工具更新在当轮对话中不可见
- **CLI-GUI 互操作** — 从 CLI 启动 VS Code 因导出空的 `GIT_CONFIG_VALUE` 破坏了 Git 发现
- **复制粘贴问题** — 复制命令时包含不可见字符，导致 "command not found" 错误

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the entire digest into Simplified Chinese, following the specific rules provided. Let me work through this carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve exact Markdown structure: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code spans, etc. verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

---

**Original:**
# OpenCode Community Digest — 2026-09-28

**Translation:**
# OpenCode 社区速报 — 2026-09-28

---

**Original:**
## Today's Highlights

The OpenCode community is tackling several high-impact issues today. A critical clipboard bug affecting CLI users (#13984, 64 comments) remains open despite showing "copied to clipboard" confirmation. The v2 TUI continues to see usability issues, with tab key behavior inverted (#49133) and layout problems in short terminals (#51563). On the positive side, the project merged several quality-of-life improvements including better model recovery, notification support for Termux, and documentation for new providers.

**Translation:**
## 今日要闻

OpenCode 社区今日聚焦多个高影响力问题的解决。影响 CLI 用户的剪贴板关键 bug（#13984，64 条评论）仍然悬而未决，尽管界面显示"已复制到剪贴板"。v2 TUI 持续出现可用性问题：Tab 键行为反转（#49133）、短终端布局错乱（#51563）。积极的一面是，项目合并了多项体验优化，包括模型恢复增强、Termux 通知支持，以及新 provider 文档。

---

**Original:**
---

## Hot Issues

**Translation:**
---

## 热门 Issue

---

Now the table - need to translate carefully:

| # | Issue | Summary | Why It Matters | 💬 |
|---|-------|---------|----------------|---|
| **#13984** | [can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984) | CLI shows "copied to clipboard" but Ctrl+V pastes nothing | Blocks fundamental workflow for CLI users; 64 comments and 32 👍 indicate widespread impact | 64 |


| **#32157** | [[2.0] FEATURE: Configurable mid-run prompt delivery](https://github.com/anomalyco/opencode/issues/32157) | Request for first-class distinction between `queue`, `steer`, and `break` for user prompts | 84 👍 makes this the highest-voted feature request; addresses core UX behavior | 9 |

| **#49133** | [tui: tab key does not switch agents, shift+tab cycles instead](https://github.com/anomalyco/opencode/issues/49133) | Tab/Shift+Tab behaviors are inverted in v2.0.3 | Confusing UX regression in core navigation; affects daily productivity | 16 |

| **#51003** | [mcp: global stdio servers spawn once per loaded directory](https://github.com/anomalyco/opencode/issues/51003) | Each loaded directory spawns separate MCP server copies, exhausting memory | Memory leak for users with many directories; critical for power users | 4 |

| **#37495** | [SQLite WAL grows unbounded (10–15 GB)](https://github.com/anomalyco/opencode/issues/37495) | Multiple SQLite connections prevent WAL checkpointing, filling disk | Disk space hazard; requires full quit to recover | 4 |

| **#37888** | [FEATURE: add OPENCODE_DISABLE_INSTALL env var](https://github.com/anomalyco/opencode/issues/37888) | Skip npm installs at startup for Docker/CI environments | Valuable for containerized workflows; reduces startup time | 5 |

| **#51717** | [FEATURE: Reopen Closed Tab](https://github.com/anomalyco/opencode/issues/51717) | Add "Reopen closed tab" functionality like browsers | Common browser UX expected by users; easy win | 4 |

| **#49389** | [FEATURE: Five session capabilities unreachable from plugin](https://github.com/anomalyco/opencode/issues/49389) | Plugins lack access to certain core session features | Limits plugin extensibility; affects integration developers | 4 |

| **#51723** | [Inline code with slash treated as file path](https://github.com/anomalyco/opencode/issues/51723) | Text like `write/edit` incorrectly rendered as clickable link | False positive file path detection; poor UX | 3 |

| **#51563** | [TUI home screen: wrapped footer overlaps row above](https://github.com/anomalyco/opencode/issues/51563) | Layout bug in short terminals causes visual overlap | Usability issue for users with constrained terminal sizes | 3 |

I'm seeing consistent patterns across these issues: CLI clipboard handling problems, UI/UX regressions in tab navigation and layout rendering, memory management concerns with directory-specific server spawning, and feature requests around session capabilities and environment variable controls. The issues range from low to high comment activity, with the most engagement around core workflow blockers and visual rendering bugs. 我注意到这些功能的 Vote 数量相当高，用户对可恢复关闭标签、会话能力扩展、文件路径检测准确性和终端布局等方面有明确需求。

---

接下来需要处理关键 PR 进展的部分，翻译相关的 PR 内容。</think>

# OpenCode 社区速报 — 2026-09-28

## 今日要闻

OpenCode 社区今日聚焦多个高影响力问题的解决。影响 CLI 用户的剪贴板关键 bug（#13984，64 条评论）仍然悬而未决，尽管界面显示"已复制到剪贴板"。v2 TUI 持续出现可用性问题：Tab 键行为反转（#49133）、短终端布局错乱（#51563）。积极的一面是，项目合并了多项体验优化，包括模型恢复增强、Termux 通知支持，以及新 provider 文档。

---

## 热门 Issue

| # | Issue | 概要 | 为何重要 | 💬 |
|---|-------|------|----------|---|
| **#13984** | [can not copy and paste in opencode CLI](https://github.com/anomalyco/opencode/issues/13984) | CLI 显示"已复制到剪贴板"但 Ctrl+V 无法粘贴 | 阻断 CLI 用户的基础工作流；64 条评论和 32 个 👍 表明影响广泛 | 64 |
| **#32157** | [[2.0] FEATURE: Configurable mid-run prompt delivery](https://github.com/anomalyco/opencode/issues/32157) | 呼吁对用户提示的 `queue`、`steer`、`break` 进行一级区分 | 84 个 👍 创下功能请求最高票；直指核心 UX 行为 | 9 |
| **#49133** | [tui: tab key does not switch agents, shift+tab cycles instead](https://github.com/anomalyco/opencode/issues/49133) | v2.0.3 中 Tab/Shift+Tab 行为反转 | 核心导航出现令人困惑的可用性回退；影响日常效率 | 16 |
| **#51003** | [mcp: global stdio servers spawn once per loaded directory](https://github.com/anomalyco/opencode/issues/51003) | 每个加载的目录都单独创建 MCP 服务器副本，导致内存耗尽 | 大量目录的用户会遭遇内存泄漏；重度用户深受其害 | 4 |
| **#37495** | [SQLite WAL grows unbounded (10–15 GB)](https://github.com/anomalyco/opencode/issues/37495) | 多个 SQLite 连接阻止 WAL 检查点，磁盘满载 | 磁盘空间隐患；需完全退出才能恢复 | 4 |
| **#37888** | [FEATURE: add OPENCODE_DISABLE_INSTALL env var](https://github.com/anomalyco/opencode/issues/37888) | 新增启动时跳过 npm install 的环境变量 | 容器化工作流刚需；缩短启动时间 | 5 |
| **#51717** | [FEATURE: Reopen Closed Tab](https://github.com/anomalyco/opencode/issues/51717) | 添加类似浏览器的"重新打开关闭标签页"功能 | 用户期待浏览器常见 UX；实现成本低 | 4 |
| **#49389** | [FEATURE: Five session capabilities unreachable from plugin](https://github.com/anomalyco/opencode/issues/49389) | 插件无法访问部分核心 session 功能 | 限制插件扩展性；影响集成开发者 | 4 |
| **#51723** | [Inline code with slash treated as file path](https://github.com/anomalyco/opencode/issues/51723) | 类似 `write/edit` 的文本被误渲染为可点击链接 | 误判文件路径；UX 糟糕 | 3 |
| **#51563** | [TUI home screen: wrapped footer overlaps row above](https://github.com/anomalyco/opencode/issues/51563) | 短终端布局 bug 导致页脚与上一行重叠 | 受限终端用户的可用性问题 | 3 |

---

## 关键 PR 进展

| # | PR | 概要 | 状态 |
|---|-----|------|------|
| **#51743** | [fix(core): fail oversized MCP stdio frames without closing transport](https://github.com/anomalyco/opencode/pull/51743) | 本地 MCP 服务器返回大消息（>10 MiB）时不断开连接 | ✅ OPEN |
| **#51741** | [fix(core): fail length finishes that return no content](https://github.com/anomalyco/opencode/pull/51741) | 处理 provider 返回 "length" 但未实际发送内容的边界情况 | ✅ OPEN |
| **#46912** | [fix(opencode): wait for stdout writes before exit](https://github.com/anomalyco/opencode/pull/46912) | 修复 `export`、`session list`、`db` 命令输出被截断的问题 | ✅ OPEN |
| **#51736** | [feat(opencode): add --no-open to `opencode web`](https://github.com/anomalyco/opencode/pull/51736) | 启动 web 服务但不打开浏览器——适合 systemd/容器场景 | ✅ OPEN |
| **#38283** | [docs: add opencode-quota to ecosystem](https://github.com/anomalyco/opencode/pull/38283) | 将 opencode-quota 插件纳入生态文档 | ✅ OPEN |
| **#51734** | [docs: add Bee by HEOSSI provider setup](https://github.com/anomalyco/opencode/pull/51734) | 新增 OpenAI 兼容 provider 文档 | ✅ OPEN |
| **#50221** | [chore(nix): update nixpkgs for Bun 1.4](https://github.com/anomalyco/opencode/pull/50221) | 更新 flake.lock 以支持 Bun 1.4.2+ | ✅ OPEN |
| **#45759** | [fix(core): recover Console models after startup failures](https://github.com/anomalyco/opencode/pull/45759) | 网络恢复后模型不再消失 | ✅ CLOSED |
| **#45754** | [fix(tui): keep recent models in provider groups](https://github.com/anomalyco/opencode/pull/45754) | Recent 中的模型不会从 provider 分类中消失 | ✅ CLOSED |
| **#45676** | [feat(CLI): add notification adaptor for Termux](https://github.com/anomalyco/opencode/pull/45676) | 为 Android Termux 环境启用通知功能 | ✅ CLOSED |

---

## 功能请求趋势

从近期 issue 分析，社区主要在请求：

1. **配置与环境控制** — 更多环境变量选项（`OPENCODE_DISABLE_INSTALL`）、更合理的配置文件行为、配置目录一致性
2. **Session 与插件扩展性** — 开放隐藏的 session 能力给插件、改善 MCP 服务器生命周期管理
3. **UI/UX 打磨** — 重新打开关闭的标签页、Mermaid 预览支持、终端布局优化
4. **Provider 灵活性** — 更多 provider 文档（Bee by HEOSSI）、凭证问题错误处理改进
5. **内存与性能** — SQLite WAL 管理、MCP stdio 服务器资源限制

---

## 开发者痛点

1. **剪贴板可靠性** — #13984 复制/粘贴 bug 阻断基础 CLI 使用
2. **v2 回退** — Tab 导航反转、LSP 诊断被砍（issue #50916）、配置行为变化
3. **订阅/认证困惑** — 多个 issue（#51689、#51388、#50885）反馈 OpenCode Go 认证失败
4. **资源耗尽** — 按目录创建 MCP 服务器、无限制增长的 SQLite WAL
5. **数据库迁移缺失** — 删除 session 后遗留废弃旧数据行（#50260）

---

*速报基于 GitHub 数据生成 — 分析了 50 个 issue、50 个 PR*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this Pi Community Digest from English to Chinese. I need to translate it following the rules provided:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully, maintaining the structure and technical accuracy.</think>

# Pi 社区摘要 — 2026-09-28

## 1. 今日要闻

9 月 27 日，Pi 开发者社区活动频繁，共更新 29 个 issue，5 个 PR 发生变动。影响会话稳定性和扩展加载性能的严重 bug 成为当日焦点。有两个新扩展发布：codemode（MCP 集成）和免费的长时间任务手机推送通知系统。

## 2. 发布动态

过去 24 小时内无新版本发布。

## 3. 热门 Issue

### #10031 — 按 ESC 停止思考时，Pi 偶尔卡在"Working..."状态
**状态：** 已关闭（无需处理）| **评论：** 16 | **👍：** 2  
**链接：** https://github.com/earendil-works/pi/issues/10031  
用户反馈在按 ESC 停止思考后，Pi 经常卡在"Working..."界面，需要按 CTRL+c 才能恢复。该 bug 自约 v0.84.0 版本以来在多台机器上均有出现。

### #7739 — 设置启动时间预算，目标达到 jcode 相当的延迟和内存
**状态：** 进行中 | **评论：** 10 | **👍：** 0  
**链接：** https://github.com/earendil-works/pi/issues/7739  
一项性能优化倡议，旨在将 Pi 的启动时间和内存占用降至与 jcode 相当的水平。目前针对与 pi 0.62.0 版本的差距进行测量和修复。

### #5581 — 使用 `triggerTurn: true` 的自定义消息会绕过 `before_agent_start` 事件
**状态：** 进行中 | **评论：** 8 | **👍：** 3  
**链接：** https://github.com/earendil-works/pi/issues/5581  
API 设计缺陷：`pi.sendMessage()` 配合 `triggerTurn: true` 时直接调用 `_runAgentPrompt` 而非 `prompt()`，导致 `emitBeforeAgentStart` 事件被跳过，扩展钩子失效。

### #8810 — 扩展注册的 providers 偶尔忽略 defaultProvider/defaultModel
**状态：** 进行中 | **评论：** 7 | **👍：** 2  
**链接：** https://github.com/earendil-works/pi/issues/8810  
新会话偶尔会忽略配置的 `defaultProvider`/`defaultModel`，尤其是当该 provider 由扩展注册时，会静默回退到其他 provider 的默认值。

### #10033 — 压缩提示包含全部思考文本，超出上下文窗口
**状态：** 进行中 | **评论：** 6 | **👍：** 1  
**链接：** https://github.com/earendil-works/pi/issues/10033  
使用推理模型（如 DeepSeek V4.1）时，长会话的自动压缩功能失效，原因是 `serializeConversation()` 将完整的思考块也加入了摘要提示，导致超出上下文限制。

### #9974 — pi 错误处理 llama.cpp 返回的 Responses API 工具调用
**状态:** 进行中 | **评论:** 6 | **👍:** 0  
**链接:** https://github.com/earendil-works/pi/issues/9974  
Bug：当使用 llama.cpp 服务器返回的 OpenAI Responses API 时，Pi 会执行重复和损坏的工具调用。

### #7658 — 扩展 API：持久化 API 密钥凭据（auth.json）
**状态:** 进行中 | **评论:** 5 | **👍:** 0  
**链接:** https://github.com/earendil-works/pi/issues/7658  
功能请求：为扩展提供程序化 API 以将 API 密钥持久化到 `auth.json`，支持自定义 provider 的凭据管理。

### #9905 — Anthropic: thinking.display 始终以 "summarized" 形式发送
**状态:** 进行中 | **评论:** 5 | **👍:** 0  
**链接:** https://github.com/earendil-works/pi/issues/9905  
Pi 为 Anthropic 硬编码了 `thinking.display: "summarized"`，且无 CLI 覆盖选项，尽管 API 支持 "omitted" 参数。

### #9010 — 上下文压缩导致本地 LLM 内存激增
**状态:** 进行中 | **评论:** 3 | **👍:** 0  
**链接:** https://github.com/earendil-works/pi/issues/9010  
压缩在主进程中运行而非独立工作线程，会将对话历史作为大字符串复制，导致显著的内存激增——对本地 LLM 影响尤为严重。

### #10092 — 当 provider 用量缺少 `cost` 时，压缩导致页脚崩溃
**状态:** 已关闭 | **评论:** 2 | **👍:** 0  
**链接:** https://github.com/earendil-works/pi/issues/10092  
恢复时的崩溃 bug：由未记录 `usage.cost` 的 provider 写入的压缩条目，在渲染页脚时会崩溃 TUI。

---

## 4. PR 进展

### #10040 — feat(coding-agent): Codemode 和 MCP
**状态:** 进行中 | **作者:** mitsuhiko  
**链接:** https://github.com/earendil-works/pi/pull/10040  
重大 PR，为 Pi 添加 codemode 和 MCP（Model Context Protocol）支持。使得 Jev 等模型能在更好的沙盒环境中工作。

### #8572 — feat(ai): Amazon Bedrock Mantle
**状态:** 进行中 | **作者:** cristinaponcela  
**链接:** https://github.com/earendil-works/pi/pull/8572  
新增对 Amazon 新型 Mantle API 的支持，用于访问 GPT-5.x 型号，对应 issue #5363。当前进行中，等待 API 密钥权限审批。

### #10100 — fix(ai): 保留仅签名推理详情 deltas
**状态:** 已关闭 | **作者:** Serenity-2026  
**链接:** https://github.com/earendil-works/pi/pull/10100  
修复了通过 OpenRouter 流式传输时，仅有推理签名而无文本的 Claude 消息被丢弃的问题——签名现可正确到达 thinking 块。

### #10099 — 第一次Git实验作业：jiaqitang-1
**状态:** 已关闭 | **作者:** jiaqitang-1  
**链接:** https://github.com/earendil-works/pi/pull/10099  
学习练习——首次 Git 实验提交。

### #10091 — 为用户和助手文本暴露消息装饰钩子
**状态:** 已关闭 | **作者:** ajunwalker  
**链接:** https://github.com/earendil-works/pi/pull/10091  
添加 `ctx.ui.setMessageDecorator((role, content, theme) => component)` 钩子用于装饰普通用户消息和助手文本。包含 TUI 文档。

---

## 5. 热门讨论

### 展示与分享

**#10107 — omp-ntfy: 免费零配置的 iOS/Android 推送通知**  
**作者:** hakkm | **👍:** 1  
**链接:** https://github.com/earendil-works/pi/discussions/10107  
Pi 和 oh-my-pi 的扩展，通过 ntfy.sh 向 iOS/Android 发送即时推送通知。解决了长时间运行 agent 任务时无需盯着终端的问题。

### 综合讨论

**#3373 — 你最喜欢哪些插件、附加组件或扩展？**  
**作者:** eterps | **评论:** 20 | **👍:** 9  
**链接:** https://github.com/earendil-works/pi/discussions/3373  
社区帖子分享大家最爱的 Pi 扩展和插件。

**#10098 — 在我的 fork 中修复了两件事**  
**作者:** Pyrolistical | **👍:** 1  
**链接:** https://github.com/earendil-works/pi/discussions/10098  
用户提交的修复：(1) `/new` 现在保持当前模型而非恢复默认；(2) 无请求体的 413 错误现在正确触发压缩。

---

## 6. 功能需求趋势

从 issue 和讨论数据来看，以下功能方向需求最多：

1. **Provider/API 灵活性** — 支持更多 provider（Amazon Mantle、额外的 OpenAI 兼容端点）、可配置的 thinking 显示选项、凭据管理 API
2. **性能优化** — 启动时间预算、扩展加载效率、压缩内存管理、会话创建延迟
3. **UX 自定义** — 可配置的"操作已中止"消息、CMD 模式下的 outputPad、消息装饰钩子
4. **扩展系统** — 更好的 provider 注册处理、auth 持久化 API、内部 LLM 调用的可见性（用于可观测性）

---

## 7. 开发者痛点

1. **会话创建性能** — 拥有大量扩展（70+）的用户报告会话创建从 4 秒退化到 280+ 秒，因为扩展在每次新会话时都会重新加载
2. **上下文压缩失败** — 本地 LLM 内存激增、恢复时因 provider 缺少 `cost` 数据导致崩溃、思考文本膨胀提示词
3. **Provider/模型切换** — 切换到 OpenAI-Responses 模型时，如果转录包含其他 provider 冲突的工具调用 ID，会导致失败
4. **扩展钩子缺口** — API 设计问题如 `triggerTurn: true` 绕过事件、内部 LLM 调用对可观测性工具不可见
5. **思考/推理处理** — 硬编码的 "summarized" 显示模式、仅签名的推理 deltas 被丢弃、推理模型导致上下文溢出

---

*本摘要基于 2026-09-28 的 GitHub 数据为 earendil-works/pi 生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the content to Chinese
2. Keep the Markdown structure exactly as-is
3. Keep URLs, issue/PR references (#12345), project names, technical terms, etc. in their original form
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate this carefully while preserving the format.</think>

# Qwen Code 社区周报 — 2026-09-28

## 今日要闻

Qwen Code 社区正在推进两大架构计划：**托管代理（Managed Agent）双路径架构**（Issue #12380，36 条评论）已进入 Stage B 主机集成阶段，以及持久化工作区代理执行（PR #11206）。此外发现了一个**P1 安全问题**：aux-model 选择器的 baseUrl 中包含凭据信息会持久化泄露（Issue #12856）。同时，Webview 因 CodeMirror EditorView 更新竞态条件而崩溃（Issue #12826），影响 v0.24.6 版本的 Remote-SSH 用户。

---

## 发布动态

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 摘要 | 重要性 |
|---|-------|---------|----------------|
| 1 | **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** | 托管代理双路径架构提案（36 条评论） | 定义分阶段架构，保留现有 TypeScript 代理循环，将模型推理与工具环境配置分离，实现持久化的会话所有权和工作区绑定 |
| 2 | **[#12737](https://github.com/QwenLM/qwen-code/issues/12737)** | 面向传统引擎与托管引擎配对的 Stage B 主机集成（9 条评论） | 继承 ACP Bridge 双引擎构建后续工作，使普通 `qwen serve` 主机能同时使用两种引擎 |
| 3 | **[#12826](https://github.com/QwenLM/qwen-code/issues/12826)** | Webview 因 CodeMirror EditorView.update 竞态条件崩溃（7 条评论） | **P1 缺陷** — v0.24.6 版本的 Remote-SSH 用户使用 @file 引用时发生崩溃 |
| 4 | **[#12856](https://github.com/QwenLM/qwen-code/issues/12856)** | Aux-model 选择器以 NUL 分隔的 baseUrl 持久化凭据（5 条评论） | **安全问题** — 五个设置项（`visionModel`、`imageModel`、`advisorModel`、`fastModel`、`compactionModel`）嵌入的凭据会出现在日志中 |
| 5 | **[#12874](https://github.com/QwenLM/qwen-code/issues/12874)** | macOS 上右侧面板切换按钮失效（4 条评论） | 首次打开后切换按钮无响应；影响 v0.24.6 版本的 macOS Desktop 用户 |
| 6 | **[#12835](https://github.com/QwenLM/qwen-code/issues/12835)** | 即使 Skill 工具被排除仍注入技能列表（5 条评论） | 缺陷：设置 `--exclude-tools skill` 后仍显示 `<available_skills>` 提醒 |
| 7 | **[#12859](https://github.com/QwenLM/qwen-code/issues/12859)** | fastjson2 2.0.65 导致负数精度小数无法读取（4 条评论） | Runtime Broker 接受负数精度的 `BigDecimal` 值，但 JDBC 持久化后无法读回 |
| 8 | **[#12829](https://github.com/QwenLM/qwen-code/issues/12829)** | 代理配置不适用于原生 payload 下载（4 条评论） | CUA SDK 在 macOS 下载原生 payload 时忽略 HTTP(S) 代理设置 |
| 9 | **[#12844](https://github.com/QwenLM/qwen-code/issues/12844)** | `qwen mcp reconnect` 在禁用统计时仍发送使用数据（4 条评论） | CLI 即使在 `privacy.usageStatisticsEnabled: false` 时仍发送 `session_start` 事件 |
| 10 | **[#12670](https://github.com/QwenLM/qwen-code/issues/12670)** | Runtime Broker 执行永久锁定 LOST 绑定（4 条评论） | 主机重启场景下，执行中（in-flight）的 `LOST` 绑定会被永久锁定 |

---

## 关键 PR 进展

| # | PR | 摘要 | 影响 |
|---|-----|---------|--------|
| 1 | **[#12107](https://github.com/QwenLM/qwen-code/pull/12107)** | perf(core): 并行化扩展加载循环 | 扩展加载现以有限并发运行，同时保留目录顺序；刷新失败时保留前一个缓存 |
| 2 | **[#12848](https://github.com/QwenLM/qwen-code/pull/12848)** | feat(serve): 添加带门控的托管前台 Shell 轮次 | 在 `hosted-workspace-shell/1` 配置文件中为私有托管工作区循环添加 Shell 轮次，完整保留 stdout/stderr |
| 3 | **[#12881](https://github.com/QwenLM/qwen-code/pull/12881)** | feat(managed-agent): Stage D4 — 持久化关闭、归档、删除 | 将会话关闭、归档、删除改为持久化操作，返回 `202` 响应 |
| 4 | **[#11206](https://github.com/QwenLM/qwen-code/pull/11206)** | feat(agents): 持久化工作区代理执行 | 持久化工作区代理栈的第二条 PR；将持久化状态转为可选执行服务 |
| 5 | **[#12862](https://github.com/QwenLM/qwen-code/pull/12862)** | fix(cli): 清除 aux-model 选择器输出中的 userinfo 凭据 | 修复 #12856 — 在输出到日志前清除 aux-model 设置中的凭据 |
| 6 | **[#12838](https://github.com/QwenLM/qwen-code/pull/12838)** | fix(core): 当未注册 Skill 工具时跳过技能列表 | 排除 Skill 工具时，启动时不再注入 `<available_skills>` 或备用消息 |
| 7 | **[#12855](https://github.com/QwenLM/qwen-code/pull/12855)** | feat(managed-agent): 提交 Stage H 记录并提供任务列表服务（H0c） | 会话授权提交 Stage H 记录；控制平面从记录重建任务列表 |
| 8 | **[#11959](https://github.com/QwenLM/qwen-code/pull/11959)** | feat(core): 从 models.dev 目录解析模型限制和模态 | 添加 models.dev 目录以推断上下文窗口、输出限制和输入模态，缓存 24 小时 |
| 9 | **[#12851](https://github.com/QwenLM/qwen-code/pull/12851)** | feat(agents): 工作区代理的 A2A 访问和共享 | 添加对持久化工作区代理的 A2A 1.0 JSON-RPC 访问，通过短期令牌实现代理共享 |
| 10 | **[#12183](https://github.com/QwenLM/qwen-code/pull/12183)** | feat(extensions): 从目录加载部署管理的扩展 | 新增 `--managed-extensions <root>` CLI 参数用于加载部署管理的扩展 |

---

## 功能请求趋势

根据 Issue 分析，社区主要关注以下功能需求：

1. **托管代理架构** — 持久化会话管理、工作区绑定、可恢复的工具执行、多代理编排（Issues #12380、#12737、#12793、#12867）
2. **增强的记忆与上下文** — Auto Memory 的结构化召回和无损迁移（#10151）；提升上下文性能
3. **MCP 工具支持** — ScreenContextAgent MCP 工具示例，用于获取带时间戳的错误/规范信息（#12832）
4. **Runtime Broker 可靠性** — 重启后的工作线程采纳（#12766），主机重启后的 LOST 绑定处理（#12670）
5. **UI 改进** — 将选中消息文本引用到提示词编辑器（#12682），隐藏状态栏设置（#12354）
6. **A2A 协议支持** — 代理间通信和共享能力（#12851）

---

## 开发者痛点

1. **凭据泄露安全风险** — aux-model 选择器的 baseUrl 中的凭据会原样输出到日志中（已在 #12862 修复）
2. **Webview 稳定性** — CodeMirror 竞态条件崩溃影响 Remote-SSH 工作流
3. **macOS Desktop UI** — 右侧面板切换按钮首次打开后失效
4. **扩展加载性能** — #12107 已解决缓慢的顺序加载问题
5. **代理配置** — CUA SDK 原生 payload 下载忽略系统代理设置
6. **使用统计隐私** — CLI 在明确禁用后仍发送遥测数据
7. **批量翻译可靠性** — 已交付和保留部分的报告不一致

---

*基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*