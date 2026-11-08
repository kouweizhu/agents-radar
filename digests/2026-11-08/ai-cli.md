# AI CLI 工具社区动态日报 2026-11-08

> 生成时间: 2026-11-08 01:45 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:
1. Translate all the text while maintaining the Markdown structure
2. Keep URLs, code spans, numbers, dates, project names, issue/PR references exactly as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences around the whole output

Let me translate section by section:

Title: "AI CLI Tools Ecosystem Report" → "AI CLI 工具生态报告"

Date/Scope line needs translation

Section 1: "Ecosystem Overview" → "生态概览"

Section 2: "Activity Comparison" → "活跃度对比"

Section 3: "Shared Feature Directions" → "跨工具共性功能方向"

Section 4: "Differentiation Analysis" → "差异化分析"

Section 5: "Community Momentum & Maturity" → "社区活跃度与成熟度"

Section 6: "Trend Signals" → "趋势信号"

Let me work through this carefully, translating the content while keeping technical terms and identifiers intact.
</think>


# AI CLI 工具生态报告

**日期：** 2026-11-08
**范围：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi、Qwen Code

---

## 1. 生态概览

AI CLI 工具领域已进入成熟期，各大厂商正竞相为自主编程代理提供生产级可靠性保障。三种模式主导当前格局：Anthropic（Claude Code）和 OpenAI（Codex）将隐私/安全作为核心信任信号，而 Google（Gemini CLI）和 Qwen 则聚焦于扩展性和多模型支持。OpenCode 的开源模式驱动着激进的社区功能开发，Copilot CLI 则以封闭开发周期换取更缓慢但受控的发布节奏。跨工具共性主题包括远程控制/会话管理、MCP 生态集成、浏览器自动化和配额/计费透明度——这表明行业已在功能集上达成共识，差异化体现在实现质量和目标用户群上。

---

## 2. 活跃度对比

| 工具 | Issues（总计 / 24小时） | PRs（总计 / 24小时） | Discussions | Releases（24小时） | 社区渠道 |
|------|---------------------|-------------------|-------------|----------------|-------------------|
| **Claude Code** | 50 / 30 | 0 / 0 | 不适用 | 0 | GitHub Issues + PRs |
| **OpenAI Codex** | 50 / 30 | 42 / 20 | 11 / 2 | 1（alpha） | 全渠道 |
| **Gemini CLI** | 50 / 30 | 26 / 20 | 不适用 | 0 | GitHub Issues + PRs |
| **GitHub Copilot CLI** | 26 / 26 | 0 / 0 | 不适用 | 1 | GitHub Issues + PRs |
| **OpenCode** | 50 / 30 | 50 / 20 | 不适用 | 0 | GitHub Issues + PRs |
| **Pi** | 24 / 24 | 6 / 6 | 2 / 2 | 0 | 全渠道 |
| **Qwen Code** | 50 / 30 | 50 / 20 | 不适用 | 4 | GitHub Issues + PRs |

**观察：**

- **Qwen Code** 和 **OpenCode** 在绝对发布速度上领先（PR 合并数最高），表明开源社区贡献驱动的快速迭代。
- **Pi** 和 **Copilot CLI** 的 Issue 数量较少但维持稳定的日常活跃度，说明用户群体更聚焦，而非广泛采用。
- **OpenAI Codex**、**Pi** 和 **Qwen Code** 将 Discussions 论坛作为活跃社区渠道；其余工具仅依赖 Issues 和 PRs。
- **Claude Code**、**Gemini CLI** 和 **OpenCode** 尽管 Issue 讨论活跃，但过去 24 小时内零 PR 活动——可能是内部冲刺计划或周末周期所致。

---

## 3. 跨工具共性功能方向

以下需求出现在多个工具社区中，表明行业对下一代能力的共识：

| 功能方向 | 需求的工具 | 具体需求 |
|-------------------|-----------------|-------------------|
| **远程控制 / 会话管理** | Claude Code、OpenAI Codex、Gemini CLI | 附加终端到远程会话、在恢复选择器中持久化远程控制会话、子代理唯一会话 ID、浏览器锁定时会话接管 |
| **MCP（Model Context Protocol）生态** | Claude Code、Gemini CLI、Copilot CLI、OpenCode、Pi、Qwen Code | OAuth token 复用/缓存、不阻塞核心工作流的后台启动、目录变更时 MCP 服务器重启、作用域 npm 包支持 |
| **浏览器自动化 / Computer Use** | Claude Code、OpenAI Codex、Qwen Code | 窗口状态检查、锁定后会话恢复、本地开发域名信任、内容过滤器处理 |
| **配额 / 计费透明度** | Claude Code、OpenAI Codex、Gemini CLI、OpenCode | 准确的重置时间、15 倍 token 计费回退检测、配额耗尽后全局发送按钮禁用、免费套餐可靠性 |
| **终端 UI / TUI 增强** | Claude Code、Gemini CLI、Copilot CLI、OpenCode | OSC 133/7501 状态报告、硬件光标准确性、SIGWINCH 弹性、侧边栏键盘导航 |
| **隐私 / 安全加固** | Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI | User-Agent 邮箱暴露、Shell 转录附加密钥、凭据存储错误来源、污染命令始终允许防护 |
| **扩展性 / 插件系统** | Copilot CLI、OpenCode、Pi、Qwen Code | 登录时的自定义 provider、Web 应用 GUI 插件加载、每个工作区的 skill 目录、跨上下文的扩展生命周期 |
| **平台一致性（Windows/Linux/ARM）** | 所有工具 | 页面大小假设（jemalloc/16KB ARM64）、OneDrive 流弹性、Wayland 浏览器支持、winget 安装失败 |

---

## 4. 差异化分析

| 工具 | 核心聚焦 | 目标用户 | 技术路线 |
|------|--------------|-------------|-------------------|
| **Claude Code** | 隐私优先、企业安全 | 需要严格数据治理的开发者 | 保守的上下文管理；完善的权限系统；基于规则的自动化 |
| **OpenAI Codex** | Windows 生产力、IDE 集成 | Windows 桌面企业团队 | 持久云会话；Computer Use API；ACP 服务器模式用于无头部署 |
| **Gemini CLI** | 子代理编排、多模型支持 | 期望灵活模型路由的开发者 | OSC 7501 终端报告；AST 感知工具；子代理唯一会话 ID |
| **Copilot CLI** | GitHub 生态集成、扩展 API | GitHub 原生开发工作流 | 基于扩展的 skill 系统；`/` 斜杠命令；用于服务器部署的 ACP 模式 |
| **OpenCode** | 开源可定制性、免费套餐 | 成本敏感开发者、自托管用户 | 激进的功能速度；社区展示生态；Zen 免费套餐 |
| **Pi** | 持久化执行、记忆层 | 长时运行的自主研究代理 | 持久化任务调度器；Holo 支持的个人记忆；Neon/pgvector 记忆存储 |
| **Qwen Code** | 托管代理可扩展性、Web Shell | 需要托管代理的企业团队 | 多子进程托管会话；外部工作区执行；任务问答热力图 |

---

## 5. 社区活跃度与成熟度

### 高速度（快速迭代）

- **Qwen Code** — 24 小时内 4 个版本、50 个 PR，活跃的托管代理功能开发。强大的企业级聚焦，包含诊断和外部工作区执行。
- **OpenCode** — 可见 50 个 PR，激进推进免费套餐可靠性（单个 Issue 326 条评论）。最高的社区参与量。
- **Pi** — 聚焦的 PR 输出（24 小时 6 个），高影响力功能：Prompt 缓存预热（每月可节省约 $1,430）、Neon 记忆层、MiniMax/Wally provider。

### 中速度（稳定开发）

- **OpenAI Codex** — 全渠道稳定活动。强劲的 IDE 扩展工作（侧边栏导航、skill 标点符号）。Alpha 发布节奏。
- **Gemini CLI** — 安全相关的 PR 已合并（污染命令、错误报告隔离、OAuth 密钥）。子代理轮次管理改进。

### 低速度（稳定/成熟）

- **Claude Code** — 尽管 Issue 量高但 24 小时内无 PR。暗示内部开发或周末周期。隐私/安全主导社区关注。
- **Copilot CLI** — 1 个版本，少量 Issues。聚焦于扩展生命周期可靠性和 ACP 可观测性。

### 社区健康指标

- **Pi** 和 **OpenAI Codex** 在渠道使用上最均衡（Issues + PRs + Discussions），表明成熟的社区流程。
- **OpenCode 的** #59387（326 条评论）是所有工具中单个 Issue 参与度最高的——由免费套餐挫败感驱动，但证明了活跃的社区参与。
- **Claude Code 的** #107757（727 个点赞、104 条评论）关于隐私违规，表明即使没有 PR 活动，安全问题也能引发巨大的社区响应。

---

## 6. 趋势信号

以下信号来自社区反馈，为在此生态系统中构建或评估工具的开发者提供参考价值：

### 隐私正成为一等需求
Claude Code 的 User-Agent 邮箱暴露（#107757，727 个点赞）是所有工具中社区参与度最高的事件。**构建 AI 工具的开发者必须将隐私违规视为 P0 级别，无论功能优先级如何。** 用户越来越以数据处理能力而非功能能力来评估工具。

### MCP 生态已是生产关键
本报告中的每个工具都有 MCP 相关 Issue。OAuth token 缓存、后台启动、子进程管理和作用域包支持都被标记为可靠性问题。**MCP 不再是实验性的——它是生产依赖。** 工具开发者应投资于 MCP 测试基础设施。

### 持久化/长时运行会话可靠性是增长瓶颈
多个工具报告会话损坏、静默状态回退和不可恢复的会话（OpenAI Codex #50428、Claude Code #95231、Pi #11892）。**随着代理处理更长任务，会话持久性成为生产级采用的门控因素。** 这是整个生态系统中尚未解决的问题。

### Windows 是可靠性新前沿
每个工具都报告了 Windows 特定 bug：路径处理、OneDrive 弹性、jemalloc 页面大小、浏览器自动化和桌面 UI 渲染。**Windows 开发者是相对 macOS/Linux 服务不足的细分群体。** 在 Windows QA 上投入的厂商将捕获目前被可靠性问题阻碍的企业用户。

### "免费套餐问题"影响采用
OpenCode 的免费套餐 Issue（#59387）积累了 326 条评论——超过任何工具中任何技术功能请求。**无法可靠访问免费套餐的用户永远不会成为付费客户。** 免费套餐可靠性是一个转化漏斗问题，而不仅仅是 UX 问题。

### 浏览器自动化正在收敛但仍然脆弱
Computer Use API（窗口状态、内容过滤器、会话接管）正在 Claude Code、Codex 和 Qwen Code 中标准化，但所有工具都有未解决的 bug。**浏览器自动化是编程代理能力差异化的下一个战场，** 但当前实现尚未达到生产级稳定性。

### 终端集成标准正在形成
OSC 133（轮次边界）和 OSC 7501（状态报告）出现在至少三个工具中（Gemini CLI、Copilot CLI、Qwen Code）。**终端集成标准正在有机形成，尚未有正式规范。** 工具开发者应监控 OSC 协议采用情况以实现跨工具兼容性。

### 量化模型支持需要显式处理
Qwen Code 的 PR #16559（量化模型继承基础上下文窗口）解决了一个常见陷阱：AWQ/GPTQ/FP8 模型默认使用极小的上下文限制。**任何支持量化模型的工具都必须显式继承基础模型能力。** 随着 4 位模型激增，这将变得越来越普遍。

---

*跨工具分析基于 2026-11-08 所有主要 AI CLI 工具的 GitHub 数据编译。数据反映报告日期的仓库状态；趋势应通过后续版本验证。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure
2. Keep all URLs, links, code references, issue/PR numbers as-is
3. Keep project names, repository slugs, usernames, file paths in original form
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate this section by section.

**Title and intro:**
"Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区亮点报告"
"Repository:" → "仓库："
"Data as of:" → "数据截止："

**Section 1 - Top Skills Ranking:**
I need to translate the content while keeping URLs, numbers, usernames as-is.

**Section 2 - Community Demand Trends:**
Translate while preserving structure and links.

**Section 3 - High-Potential Pending Skills:**
Translate while preserving links and identifiers.

**Section 4 - Skills Ecosystem Insight:**
Translate the quote block.

Let me go through this carefully:

"Claude Code Skills Community Highlights Report"
→ "Claude Code Skills 社区亮点报告"

"Repository:" → "仓库："
"Data as of:" → "数据截止日期："

"1. Top Skills Ranking" → "一、最受欢迎技能排行"

"The following PRs represent the most-active Skill proposals and improvements by community engagement:"
→ "以下 PR 按社区参与度排序，代表最受关注的技能提案与改进："

"2. Community Demand Trends" → "二、社区需求趋势"

"Issues reveal concentrated demand in three areas:"
→ "Issues 数据显示社区需求集中在三大方向："

"3. High-Potential Pending Skills" → "三、极具潜力的待上线技能"

"These PRs have active development momentum and could land soon:"
→ "以下 PR 正在积极开发中，有望近期合并："


The community is increasingly focused on strengthening evaluation infrastructure, hardening security measures around namespace trust boundaries, and enhancing organization-level collaboration capabilities. This shift reflects a move away from simply adding more skills toward prioritizing reliability, safety, and measurable outcomes.
</think>


# Claude Code Skills 社区亮点报告

**仓库：** [anthropics/skills](https://github.com/anthropics/skills)  
**数据截止日期：** 2026-11-08

---

## 一、最受欢迎技能排行

以下 PR 按社区参与度排序，代表最受关注的技能提案与改进：

| # | 技能 / PR | 作者 | 状态 | 亮点 |
|---|------------|--------|--------|----------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | OPEN | 新增 Web3 智能合约审计功能，支持 Solidity/Rust 静态分析，并通过零存储 Merkle 协议实现 TON 区块链审计证明锚定。面向需要对合约安全性进行自动化公证的开发者。 |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | 70v-Yoyo | OPEN | 零成本的 Markdown 转 MP4 工具，使用 Marp 生成幻灯片并配以逼真配音。将文档编译为专业演示视频。 |
| 3 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | kitao | OPEN | 基于 Python Pyxel 引擎的复古游戏开发技能。涵盖无头输入驱动运行、帧检查及任务特定状态验证。 |
| 4 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** | lql341 | OPEN | 基于模板的 SSH/Slurm 工作流，支持 SCNet HPC 集群，涵盖作业生成、集群发现和计算节点管理。 |
| 5 | **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | OPEN | 将产品规格/技术规格转化为具体 Notion 任务，含验收标准和进度追踪。与 `quantitative-resume-auditor` 配合可实现简历评分。 |
| 6 | **[document-typography](https://github.com/anthropics/skills/pull/514)** | PGTBoos | OPEN | AI 生成文档的排版质量控制——防止孤立词、孤行段落和编号错位。旨在解决所有文档输出中常见的用户体验问题。 |
| 7 | **[compact-memory](https://github.com/anthropics/skills/issues/1329)** | WGlynn | OPEN | 用于代理长期运行会话中紧凑状态管理的符号记法技能。建议用结构化、词元高效的记忆格式替代冗长的文字笔记。 |

---

## 二、社区需求趋势

Issues 数据显示社区需求集中在三大方向：

| 主题 | 核心 Issue | 描述 |
|-------|-----------|-------------|
| **信任与安全** | [#492](https://github.com/anthropics/skills/issues/492) — *46 条评论* | 关键问题：`anthropic/` 命名空间下的社区技能造成身份冒用风险。用户可能在误认为官方技能的情况下授予过高权限。 |
| **评估可靠性** | [#556](https://github.com/anthropics/skills/issues/556) — *13 条评论* | `run_eval.py` 报告所有查询触发率为 0%——技能评估框架存在根本性问题。 |
| **组织级共享** | [#228](https://github.com/anthropics/skills/issues/228) — *17 条评论* | 缺少组织内技能共享机制；用户需手动通过 Slack/Teams 和设置导航分发技能。 |
| **上下文窗口管理** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` 技能单次注入约 156k 词元，单次调用即耗尽上下文。 |
| **质量门禁** | [#1385](https://github.com/anthropics/skills/issues/1385) — *7 条评论* | 提议三阶段门禁流水线：任务前校准 → 对抗性审查 → 交付验证。 |

**趋势方向：** 社区正从"增加更多技能"转向关注**质量、安全性和评估基础设施**——确保现有技能可靠、安全且可衡量。

---

## 三、极具潜力的待上线技能

以下 PR 正在积极开发中，有望近期合并：

| PR | 技能 | 领域 | 亮点 |
|----|-------|-------|---------|
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation | 规格 → Notion 任务转换 | 双技能捆绑，含简历审计功能 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Web3 智能合约分析 | 创新的 TON 区块链集成 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Markdown 转视频生成 | 零成本制作流程 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | 复古游戏开发 | 面向小众但活跃的游戏开发群体 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | HPC 集群运维 | 科学计算垂直领域 |

**关键待修复问题**（阻塞其他工作）：

- [#556](https://github.com/anthropics/skills/issues/556) — 评估框架修复
- [#1390](https://github.com/anthropics/skills/issues/1390) — MCP 评估对真实服务器评分 0/N
- [#1394](https://github.com/anthropics/skills/issues/1394) — eval-viewer 中的 XSS 漏洞

---

## 四、技能生态洞察

> **社区最集中的需求在于：健全的评估基础设施、安全加固（尤其是命名空间信任边界），以及组织级协作功能——这标志着关注点正从技能数量转向技能可靠性、安全性和可衡量性。**

---

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the content to Simplified Chinese
2. Keep all Markdown structure intact
3. Keep URLs, code spans, numbers, dates, issue references (#12345), project names, version tags, etc. as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: Claude Code Community Digest - 2026-11-08
→ Claude Code 社区日报 - 2026年11月8日

"Today's Highlights" section needs translation...
"Releases" section...
"Hot Issues" section - need to translate descriptions but keep issue titles as-is
"Key PR Progress" section...
"Feature Request Trends" section...
"Developer Pain Points" section...
"Summary Statistics" section...

Let me work through this carefully, maintaining the formal technical Chinese register.
</think>


# Claude Code 社区日报

## 2026年11月8日

---

## 今日要闻

Claude Code 社区今日保持高度活跃，在隐私和安全方面的讨论尤为热烈。最紧迫的问题是 **User-Agent 隐私泄露**（#107757），获得 727+ 赞同，用户反馈网络搜索时个人邮箱地址被暴露——这一根本性的安全问题需要立即处理。自最新自动更新以来，macOS 上的桌面应用出现了 MCP 小组件渲染的显著回退，而 Max 套餐升级相关的计费问题在社区持续反馈下仍未得到解决。

---

## 版本更新

**过去 24 小时内无新版本发布。**

最新稳定版仍为 **Claude Desktop 4.23118.0**（CLI 版本 2.1.317），用户反馈该版本在 macOS 上引入了 MCP 应用渲染回退和输入性能问题。

---

## 热门 Issue

### 1. [隐私泄露：User-Agent 向第三方暴露邮箱](https://github.com/anthropics/claude-code/issues/107757)
**评论: 104 | 👍: 727 | macOS/Linux | 优先级: 紧急**

仓库内赞同数最高的 Issue。用户反馈 Claude Code 的网络搜索功能会在 `User-Agent` 请求头中包含个人邮箱地址，将此信息暴露给任意第三方服务。社区要求完全移除，而非提供退出机制。这是一个根本性的隐私泄露，应作为安全事件处理。

### 2. [无头模式 `claude -p` 消耗 1.8 倍上下文窗口](https://github.com/anthropics/claude-code/issues/97074)
**评论: 72 | 👍: 154 | Linux | 优先级: 高**

`claude -p` 命令（SDK-CLI 入口）处理相同工作负载时，比交互式 CLI 模式快 80% 消耗 5 小时上下文窗口。这对自动化管道和批处理工作流造成了显著的 API 费用浪费。Issue 中提供了可复现的基准测试。

### 3. [无法从 Max 5x 升级至 Max 20x：支付始终失败](https://github.com/anthropics/claude-code/issues/56281)
**评论: 51 | 👍: 13 | 平台: macOS | 优先级: 高**

Max 5x 套餐用户多次尝试升级至 Max 20x 始终失败，支付处理静默失败。客服一直未响应。这阻碍了重度用户获取更高速率限制，既造成收入损失，也损害了用户体验。

### 4. [远程控制：移动端发起消息被 `user_asked` 拒绝](https://github.com/anthropics/claude-code/issues/102828)
**评论: 13 | 👍: 9 | macOS | 优先级: 中**

使用移动设备进行远程控制时，从移动端发送的用户消息被 `user_asked` 验证失败并拒绝。这破坏了移动端发起会话的远程控制工作流。

### 5. [Auto 模式通过过度宽泛的 `pkill` 杀死所有 macOS GUI 应用](https://github.com/anthropics/claude-code/issues/100684)
**评论: 8 | 👍: 2 | macOS | 优先级: 高**

Auto 模式下 Claude Code 执行了 `pkill -f "cat"`，该命令通过子串匹配 `/Applications` 导致 Safari、Chrome、Claude 自身及其他关键应用被终止。`pkill -f` 的模式匹配对生产环境使用来说过于宽泛。

### 6. [浏览器面板回退：本地主机子资源被阻止](https://github.com/anthropics/claude-code/issues/96508)
**评论: 8 | 👍: 7 | Windows | 优先级: 中**

影响 Windows 的回退问题，浏览器面板阻止了对解析为 127.0.0.1 的主机名的同源子资源加载（如通过 hosts 文件将 `dev.example.test` 解析至 127.0.0.1）。这破坏了常见的本地开发工作流。

### 7. [远程控制会话在恢复选择器中不可见](https://github.com/anthropics/claude-code/issues/95231)
**评论: 7 | 👍: 3 | 平台: macOS/Linux | 优先级: 中**

通过 `claude remote-control`（sdk-cli 入口）创建的会话不会出现在 `--resume` 选择器中，导致无法继续或回顾远程控制会话，除非直接访问文件系统的转录文件。

### 8. [账户邮箱检查阻止本地 Bash 操作](https://github.com/anthropics/claude-code/issues/107144)
**评论: 6 | 👍: 2 | Linux | 优先级: 中**

近期 CLI 版本（2.1.317+）因过度严格的账户邮箱验证检查，阻止了合法的本地 Bash 操作——如 heredoc 文件写入、curl 到 127.0.0.1。这破坏了标准的开发工作流。

### 9. [MCP 应用小组件在桌面聊天中不渲染](https://github.com/anthropics/claude-code/issues/108122)
**评论: 5 | 👍: 0 | macOS | 优先级: 高**

桌面应用自动更新至 4.23118.0 后，来自本地 stdio 服务器的 MCP 应用不再渲染其 UI 小组件。工具执行了，但 `ui://` 资源从未被请求，导致 MCP 应用集成无法工作。

### 10. [桌面输入延迟：macOS 上 CPU 占用 45-98%](https://github.com/anthropics/claude-code/issues/108216)
**评论: 4 | 👍: 0 | macOS | 优先级: 中**

桌面应用在消息框输入时出现严重卡顿，渲染进程 CPU 占用 45%，主进程 CPU 占用 58-98%。其他应用不受影响，表明是 Claude Desktop 特有的性能问题。

---

## PR 进展

**过去 24 小时内无 PR 合并或更新。**

仓库无近期合并记录，团队可能正在处理 Issue 分诊或内部开发工作，尚未对社区可见。

---

## 功能请求趋势

对公开 Issue 和功能请求的分析揭示以下需求模式：

### 远程控制增强
- **在远程控制会话中附加终端**（#87190）—— 允许开发者通过本地终端与远程 Claude Code 会话交互
- **改进会话可见性** — 多个 Issue（#95231、#94546）请求更好地将远程控制会话与恢复/会话管理集成
- **可配置的空闲超时**（#104361） — 用户希望调整远程控制连接的空闲超时设置，目前硬性限制为 4 小时

### 浏览器面板改进
- **信任本地开发域名**（#98551） — 支持解析至 127.0.0.1 的本地开发域名，如 `*.lndo.site`、`*.ddev.site` 等
- **在新标签页中打开链接**（#106887） — 添加 Cmd+点击、中键点击和右键支持，在新的浏览器面板标签页中打开链接

### 桌面应用优化
- **保持侧边栏状态**（#104942） — 跨会话保持收起状态的项目分组
- **定时任务改进**（#94628、#108242） — 修复更新后数据丢失问题并明确 UI 指示

### 语音与输入功能
- **可配置的语音听写**（#108241） — 允许用户调整点击模式的语音听写静默超时和最大时长

---

## 开发者痛点

### 1. 权限与安全系统令人困惑
多个 Issue（#107144、#107860、#107761）反馈权限系统拒绝操作时无明确说明。工具访问被拒时未提供规则、来源或修复指导，迫使开发者猜测根本原因。

### 2. MCP 集成不稳定
MCP 功能呈现回退模式：
- 桌面应用中小组件渲染失效（#108122）
- 重连后 ToolSearch 被拒绝（#107860）
- 桌面 SSH MCP 服务器失败（#107761）
- Claude Docs 连接器可访问性问题（#108161）

### 3. 跨平台不一致性
相同 Claude Code 版本在不同平台上表现不同：
- 浏览器面板问题主要在 Windows（#96508）
- 本地网络权限为 macOS 特有（#103230）
- Linux 上 API 密钥用户的计费/认证问题（#106458）

### 4. 上下文窗口管理
无头模式低效（#97074）结合安全分类器误报（#104652），表明系统可能对上下文分配过于保守，在常规编码任务上浪费资源。

### 5. 自动更新回退
桌面应用的自动更新机制已引入多个回退：
- 从 4.16336.0 → 4.23118.0 升级后 MCP 小组件停止渲染
- 更新后定时任务和会话列表被清空（#94628）
- 更新后输入性能下降（#108216）

---

## 汇总统计

| 类别 | 数量 |
|----------|-------|
| 公开 Issue 总数 | 50 |
| 24 小时内更新的 Issue | 30 |
| 24 小时内合并的 PR | 0 |
| 24 小时内的版本发布 | 0 |
| 最活跃 Issue | #107757（104 条评论） |
| 最高赞同 Issue | #107757（727 👍） |

---

*日报数据来源于 [anthropics/claude-code](https://github.com/anthropics/claude-code) GitHub 仓库，2026 年 11 月 8 日生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content into natural, fluent Simplified Chinese
2. Keep all Markdown structure intact
3. Keep URLs, issue numbers, PR numbers, version tags, file paths, API names etc. in their original form
4. Use technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation, no preamble, no markdown fences

Let me translate section by section:

**Title**: OpenAI Codex 社区速报 — 2026-11-08

**Today's Highlights**: 今日要闻

**The Codex community is grappling with...**: Codex 社区正面临多个高影响力的问题：Windows 上的 Computer Use 存在严重回归——`get_window_state` API 中断导致浏览器自动化工作流受阻；同时 `AbsolutePathBuf` 反序列化错误持续影响 Windows 桌面的持久化聊天和分支功能。好消息是，本周期合并了大量 PR，带来了显著的 UX 改进，包括侧边栏键盘导航、技能提及标点处理以及 Code Mode 会话的增量 exec 工具更新。

Let me continue translating carefully, maintaining the technical register and natural flow.
</think>


# OpenAI Codex 社区速报 — 2026-11-08

## 今日要闻

Codex 社区正面临多个高影响力的问题：Windows 上的 Computer Use 存在严重回归——`get_window_state` API 中断导致浏览器自动化工作流受阻；同时 `AbsolutePathBuf` 反序列化错误持续影响 Windows 桌面的持久化聊天和分支功能。好消息是，本周期合并了大量 PR，带来了显著的 UX 改进，包括侧边栏键盘导航、技能提及标点处理以及 Code Mode 会话的增量 exec 工具更新。

## 版本发布

| 版本 | 类型 | 概要 |
|------|------|------|
| [rust-v0.169.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.3) | Alpha | Rust 运行时的预发布版本。暂无变更日志。 |

## 热门 Issue

1. **[#51524](https://github.com/openai/codex/issues/51524)** — **[Windows] Computer Use 在 get_window_state 处停止：无法获取当前浏览器 URL** *(74 条评论, 👍9)*
   自 10 月 6 日左右引入的回归问题破坏了 Windows 上浏览器窗口检测功能。应用/窗口枚举成功，但调用 `sky.get_window_state({window, include_text:true})` 会立即终止轮次，导致任何点击或输入自动化都无法执行。同时影响 Chrome 和 Edge。**最高优先级** — 74 条评论表明影响范围广泛；目前尚不清楚是否有变通方案。

2. **[#50428](https://github.com/openai/codex/issues/50428)** — **Windows 桌面：持久化聊天轮次/启动及线程/分支失败，AbsolutePathBuf 反序列化时缺少基础路径** *(42 条评论, 👍3)*
   Windows Codex Desktop 可以读取已有的持久化/云端聊天，但纯文本提交和同目录分支在执行前就会失败。涉及多个桌面版本（26.928–26.930）。Windows 用户的核心持久化功能和多轮工作流已损坏。

3. **[#35420](https://github.com/openai/codex/issues/35420)** — **当 Windows 工作区位于 OneDrive 挂载路径下且 OneDrive 处于降级状态时，Work/Codex 流反复断开** *(37 条评论, 👍0)*
   在 OneDrive 降级情况下，即使重试也会报"流在完成前断开"错误。影响使用 ChatGPT Work/Codex Windows 界面的生产用户。表明文件系统云同步状态变化时的韧性不足。

4. **[#48369](https://github.com/openai/codex/issues/48369)** — **OpenAI 用量耗尽后，发送按钮全局禁用且无法恢复** *(16 条评论, 👍8)*
   一旦用户的 OpenAI 配额耗尽，发送按钮将全局禁用——不仅影响当前模型，用户也无法切换模型或上下文继续使用。影响 Plus 和 Team 计划。八人点赞表明这是常见痛点。

5. **[#43776](https://github.com/openai/codex/issues/43776)** — **Windows：Codex 创建的 .agents 文件权限破坏了沙箱配置和应用内浏览器控制** *(15 条评论, 👍3)*
   Codex 在 Windows 上创建的文件/目录继承了错误的权限，导致沙箱权限失败和应用内浏览器控制失效。影响 Windows 的安全隔离和自动化可靠性。

6. **[#56600](https://github.com/openai/codex/issues/56600)** — **Android Codex Remote 配对失败，QR 码和手动码均无效** *(10 条评论, 👍1)*
   用户无法通过 QR 码或手动输入 6 位数字将 Android Codex Remote 配对到 Windows 桌面。阻止了移动优先工作流。

7. **[#54979](https://github.com/openai/codex/issues/54979)** — **终端缩小时 TUI 因 SIGWINCH 未被处理而 panic："索引超出缓冲区"** *(5 条评论, 👍0)*
   终端大小调整与信号处理之间存在竞态条件，导致 panic。在 macOS Orca 终端上观察到，但该失败模式与终端无关。任何在 Codex 运行期间可能丢失或与 `SIGWINCH` 产生竞态的终端都会受影响。

8. **[#59808](https://github.com/openai/codex/issues/59808)** — **[Dots] 云端工作区反复消失/回滚——一天内发生三次** *(5 条评论, 👍0)*
   长时间运行的 Dots 体验在一天内发生三次独立的状态回滚/丢失事件。Dot 标识保持不变但云端工作区状态被静默回滚。生产环境使用存在数据完整性隐患。

9. **[#58811](https://github.com/openai/codex/issues/58811)** — **VS Code 扩展 (26.1021.22027) 启动失败，提示"Codex 无法启动其用户界面"(renderer_ready_timeout)，原因是 3,203 个模块块的过度 eager modulepreload** *(4 条评论, 👍0)*
   由于过度积极的模块预加载策略，VS Code 扩展经常在 30 秒后无法启动其 UI。日志显示渲染器初始化失败。大量用户受到影响。

10. **[#59690](https://github.com/openai/codex/issues/59690)** — **GPT-6.1 Terra：自 11 月 5 日起每次调用消耗的 Codex 限额约为正常的 15 倍；缓存输入似乎按原价计费** *(3 条评论, 👍1)*
    自 11 月 5 日起，GPT-6.1 Terra 调用消耗的 Codex token 限额约为预期的 15 倍。缓存输入似乎按原价而非缓存折扣价计费。暗示 Terra 模型集成中的计费或 token 化存在回归。

## 重点 PR 进展

| PR | 状态 | 概要 |
|----|------|------|
| [#60188](https://github.com/openai/codex/pull/60188) | ✅ 已合并 | **Code Mode 增量工具消息的模型覆盖** — 新增 `exec_tools_update_hint` 和 `exec_tools_removed_definitions_header`，通过字面量字符串覆盖渲染 Code Mode 目录更新。 |
| [#60186](https://github.com/openai/codex/pull/60186) | ✅ 已合并 | **允许在登录时创建自定义 Provider** — 在登录选择器中添加"创建自定义 Provider 或网关"，移除了必须有已保存网关配置的前置条件。 |
| [#60181](https://github.com/openai/codex/pull/60181) | ✅ 已合并 | **为侧边栏标签页添加键盘和鼠标导航** — 新增可配置的 `sidebar_up`/`sidebar_down` 操作，默认绑定 `Shift-Tab`/`Tab`、`Up`/`Down`、`k`/`j`，以及鼠标滚轮滚动。 |
| [#60180](https://github.com/openai/codex/pull/60180) | ✅ 已合并 | **将标点符号附加到已完成的技能提及** — 当技能提及后紧跟逗号、句号等标点时，用标点替换尾部空格。 |
| [#60177](https://github.com/openai/codex/pull/60177) | ✅ 已合并 | **为增量 exec 目录更新添加指标** — 发送 `codex.tools.exec_entry_updates` 事件，包含 `added`、`schema_changed` 和 `removed` 标签用于可观测性。 |
| [#60173](https://github.com/openai/codex/pull/60173) | ✅ 已合并 | **测试 exec 目录在会话和压缩变更后的持久性** — 覆盖恢复、分支、工具模式切换和后台压缩场景下的 exec 工具设置和目录变更。 |
| [#60163](https://github.com/openai/codex/pull/60163) | ✅ 已合并 | **将增量 exec 工具更新接入 Code Mode 会话** — 通过工具路由传递结构化 exec 定义，避免完整重新声明 `functions.exec`。 |
| [#60157](https://github.com/openai/codex/pull/60157) | ✅ 已合并 | **支持增量 Code Mode 工具定义** — 渲染嵌套工具定义的稳定条目，并为已删除条目发送显式移除事件。 |
| [#60152](https://github.com/openai/codex/pull/60152) | ✅ 已合并 | **持久化本地工作区副聊天并添加标签关闭控制** — 将副聊天保存为附件，重启后可从侧边栏重新打开，并为侧边栏标签页添加关闭控制。 |
| [#60080](https://github.com/openai/codex/pull/60080) | ✅ 已合并 | **允许异步模型请求预算检查** — 将 `budget_exhausted` 改为返回 `ExtensionFuture`，实现模型请求期间的非阻塞预算检查。 |

**仍在 review 中：**

| PR | 状态 | 概要 |
|----|------|------|
| [#30880](https://github.com/openai/codex/pull/30880) | Open（已 code review） | **检测 Vite+ 管理的 Codex 安装** — 从包布局检测 Vite+ 全局安装，使用 `vp install -g @openai/codex` 进行更新/修复。 |
| [#30509](https://github.com/openai/codex/pull/30509) | Open | **允许在 MCP 后台启动期间进行 review** — 将 MCP 初始化与前台任务状态解耦，使 `/review` 能在服务器启动期间执行。 |
| [#30500](https://github.com/openai/codex/pull/30500) | Open（已 code review） | **在 MCP 服务器未完成时运行 review** — Review 子会话不再等待未完成的 MCP 客户端，提升响应速度。 |

## 热门讨论

### 创意提案
- **[#21742](https://github.com/openai/codex/discussions/21742)** — **Windows Codex App：安装位置和存储控制** *(12 👍)* — 用户将 SDK 和项目数据放在不同驱动器上，请求透明化的安装路径配置。与关联的功能请求（#21074）相关。

### 作品展示
- **[#60185](https://github.com/openai/codex/discussions/60185)** — **agent-recap：在本地跨 Codex 和 Claude Code 转录文本搜索** *(1 👍)* — 在浏览器内联合搜索 Codex 和 Claude Code 的 JSONL 转录文本。无需账号或上传。
- **[#59121](https://github.com/openai/codex/discussions/59121)** — **agent-harness：让 Codex 完成工作的技能、规则和 Stop 钩子** *(1 👍)* — 一套技能/钩子包，防止 Codex 半途停下，强制其一次只做一件事。
- **[#60116](https://github.com/openai/codex/discussions/60116)** — **Pushary：在手机上审批 Codex 请求** *(1 👍)* — 付费托管服务，通过钩子拦截 shell 命令、`apply_patch` 编辑和 MCP 调用，将审批请求推送到手机。
- **[#59147](https://github.com/openai/codex/discussions/59147)** — **SnipToss：对 Codex 生成的图片和视频进行标注** *(1 👍)* — 可视化标注 Codex 生成的图片/视频，并将批注作为文件回传，以实现更精确的编辑。
- **[#60084](https://github.com/openai/codex/discussions/60084)** — **LISA：同时观察你的 Codex 会话、Claude Code 和 Aider** *(1 👍)* — MIT 许可的本地助手，监控正在运行的 agents，在出现卡死会话、并发编辑等情况时发出警告。
- **[#59708](https://github.com/openai/codex/discussions/59708)** — **Ordewell：将目标转化为计划并委托给 Codex** *(1 👍)* — 一个规划型 agent，将目标分解为任务图并委托给 Codex（或其他 agents）执行，支持可配置的运行器和模型。
- **[#59844](https://github.com/openai/codex/discussions/59844)** — **面向 Codex、Claude Code 和 OpenCode 的 macOS 技能目录** *(1 👍)* — 跨多个编码 agents 技能目录的技能目录，桥接不同 agents 的技能目录结构。
- **[#55013](https://github.com/openai/codex/discussions/55013)** — **CSV 交接套件：保字型 CSV 转 XLSX 浏览器演示** *(1 👍)* — 面向小型电子表格交接的免费浏览器工具，将 ID 和公式外观值保留为文本。

## 功能需求趋势

对 Issue 和 Discussion 的分析揭示了以下反复出现的主题：

| 主题 | 证据 | 信号强度 |
|------|------|----------|
| **Windows 可靠性与功能对等** | 15+ 个带 Windows 标签的 issue；Computer Use、持久化聊天、沙箱、浏览器均存在问题 | 非常强 |
| **扩展/插件生态** | 对公开 Extension API（#51138）和 Vite+ 安装检测（#30880）的强烈需求 | 高 |
| **项目/会话管理 UX** | 侧边栏改进（#35124）、隐藏本地项目（#35749）、工作区存储控制（#21742） | 中-高 |
| **多 agent 与跨工具互操作** | agent-recap、LISA、Ordewell、跨 agent 技能目录——全部由社区构建 | 中 |
| **移动/远程工作流** | Android Remote 配对失败（#56600）、移动审批（Pushary）、跨设备会话一致性（#37659） | 中 |
| **速率限制与配额 UX** | 全局发送按钮禁用（#48369）、疑似 15 倍 token 计费回归（#59690） | 中 |
| **MCP（Model Context Protocol）改进** | 后台启动（#30509）、未完成服务器时 review（#30500）、MCP 表单自动拒绝（#60158） | 中 |

## 开发者痛点

1. **Windows 回归问题正在累积。** Computer Use、持久化聊天、沙箱隔离、浏览器自动化和路径处理都有针对 Windows 的未解决 bug。集中度表明 Windows 的验证覆盖可能不如 macOS/Linux。

2. **持久化/云端状态不可靠。** 多个 issue（#50428、#59808、#26925）报告持久化会话静默丢失或回滚状态，削弱了将 Codex 作为长期运行编程助手使用的信任。

3. **速率限制 UX 令人困惑且过于激进。** 全局发送按钮禁用（#48369）和疑似 15 倍 token 计费回归（#59690）表明，配额管理以一种阻碍正常工作而非优雅降级的方式呈现给用户。

4. **VS Code 扩展启动脆弱。** 由于 modulepreload 膨胀（#58811）导致的 renderer_ready_timeout 意味着该扩展——许多开发者的主要界面——经常无法启动。

5. **终端缩放下 TUI 稳定性是已知崩溃向量。** SIGWINCH 竞态条件（#54979）在各种终端模拟器上导致 panic，类似的高负载下连接回归（#57650）表明 TUI 对环境变化的韧性需要加强。

6. **MCP 初始化阻塞核心工作流。** Review 等命令被 MCP 启动（#30509）阻塞，会话状态泄漏死端点（#58060）。MCP 系统功能强大但其失败模式具有破坏性。

---

*速报数据来源：github.com/openai/codex，日期 2026-11-08。所有条目链接使用 GitHub 标准 issue/PR/discussion URL。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate an English technical report (a GitHub community digest for Gemini CLI) into Simplified Chinese. I need to:

1. Translate all the text content while keeping technical terms, URLs, code references, issue numbers, etc. in their original form
2. Preserve the Markdown structure exactly
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate each section:

**Title**: "Gemini CLI Community Digest" → "Gemini CLI 社区动态"
"2026-11-08" stays the same

**Section 1 - Today's Highlights**:
- Focus on hardening subagent reliability → 聚焦于强化子代理可靠性
- session isolation → 会话隔离
- turn handling → 轮次处理
- configuration propagation → 配置传递
- Security enhancements → 安全增强
- protections preventing secret leakage → 防止密钥泄露的保护机制
- pasted content → 粘贴内容
- tainted shell commands → 污染的 shell 命令
- The interactive TUI gains terminal status reporting via OSC 7501 → 交互式 TUI 新增 OSC 7501 终端状态报告功能
- improving multi-session visibility → 提升多会话可见性

**Section 2 - Releases**:
- No new releases in the last 24 hours → 过去 24 小时内无新版本发布

**Section 3 - Hot Issues**:
Table headers: #, Issue, Comments, Summary stay the same
- Critical Bug → 严重缺陷
- Subagents report → 子代理报告
- status: "success" → 保持英文
- GOAL termination → GOAL 终止
- hitting max turn limits → 达到最大轮次限制
- Affects → 影响


- codebase_investigator → 保持原样
- multi-repo investigations → 多仓库调查
- Feature Request → 功能请求
- Users want → 用户希望
- wrapper integration → 包装器集成
- Enterprise users → 企业用户
- official support → 官方支持
- API key authentication → API 密钥认证
- Epic Investigation → 重大调研
- Evaluates → 评估
- Abstract Syntax Tree-aware → AST 感知的
- turn misalignment → 轮次错位

I'll focus on translating technical terminology precisely while maintaining the original document's structure and intent. Technical terms like "turn handling", "configuration propagation", and "multi-repo investigations" require careful translation to preserve their technical meaning in the Chinese context.

The next thinking continues the technical translation work, focusing on key concepts in agent and browser interaction technologies. The translation emphasizes improving autonomous agent capabilities, addressing configuration challenges, and resolving platform-specific implementation issues.

Specific areas of focus include enhancing skill and sub-agent invocation mechanisms, managing configuration settings more effectively, and implementing robust session recovery strategies for browser environments. The technical approach aims to standardize interaction patterns across different platforms and configurations.

The security and reliability challenges highlight critical infrastructure needs, such as preventing secret leakage, managing shell command execution, and ensuring consistent performance across diverse network and platform environments.

The PR highlights demonstrate a systematic approach to addressing technical debt, with an emphasis on security, agent behavior, and system resilience. Key priorities include preventing data exposure, managing subprocess interactions, and improving configuration propagation across local agent systems.

Security enhancements focus on preventing command injection risks and securing error reporting mechanisms. The core development track centers on refining system prompt interactions, terminal status reporting, and URL parsing reliability.

Subagent reliability improvements target session isolation and turn handling, with particular attention to configuration propagation. Browser agent challenges span configuration management, platform compatibility, and session recovery in persistent environments.

Configuration gaps and security concerns highlight the need for robust context management, tool limit handling, and protection against potential secret exposure from pasted content.
</think>


# Gemini CLI 社区动态

## 2026-11-08

---

### 1. 今日要闻

Gemini CLI 社区正聚焦于强化子代理可靠性，针对会话隔离、轮次处理和配置传递等问题推出多项高优先级修复。安全增强同样是重点工作，新保护机制可防止粘贴内容中的密钥泄露，并对污染的 shell 命令施加更严格的处理。交互式 TUI 新增 OSC 7501 终端状态报告功能，提升多会话场景下的可见性。

---

### 2. 版本发布

过去 24 小时内无新版本发布。

---

### 3. 热门 Issue

| # | Issue | Comments | 概要 |
|---|-------|----------|---------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | 13 | **严重缺陷**：子代理在达到最大轮次限制且未完成分析时，仍报告 `status: "success"` 和 `GOAL` 终止原因。影响 `codebase_investigator` 在多仓库调查场景下的行为。 |
| [#29112](https://github.com/google-gemini/gemini-cli/issues/29112) | 功能请求：追加系统提示词 | 8 | **功能请求**：用户期望 `--append-system-prompt` / `GEMINI_APPEND_SYSTEM_MD` 来扩展而非替换系统提示词。当前 `GEMINI_SYSTEM_MD` 会完全替换现有提示词，不利于包装器集成。 |
| [#29689](https://github.com/google-gemini/gemini-cli/issues/29689) | 支持 Gemini 4 Argon/Pro 企业版 | 7 | **功能请求**：企业用户请求通过 OAuth 和 API 密钥认证正式支持 Gemini 4 Argon (Gemini 4 Pro)。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知的文件读取、搜索和映射 | 7 | **重大调研**：评估 AST 感知工具能否通过精确定位方法边界来减少轮次错位和 token 噪音。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 未能充分利用 skills 和子代理 | 7 | **行为缺陷**：模型很少自主调用自定义 skills 或子代理，即便上下文高度相关。用户必须显式指令。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 settings.json 配置覆盖 | 5 | **缺陷**：Browser Agent 完全忽略 `settings.json` 配置（如 `maxTurns`），尽管 `AgentRegistry` 在初始化时正确合并了设置。 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser Agent 韧性：会话接管 | 4 | **增强**：请求在持久会话模式下遇到浏览器配置文件锁定时自动进行会话接管和锁恢复。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser 子代理在 Wayland 下失败 | 4 | **平台缺陷**：Browser 子代理在 Wayland 环境下失败，返回 `GOAL` 终止原因。 |
| [#28683](https://github.com/google-gemini/gemini-cli/issues/28683) | 缺失的 usageMetadata 被记录为零值 | 3 | **数据完整性**：当 API 响应缺少 `usageMetadata` 时，零值记录无法与真实的零 token 响应区分，影响遥测分析。 |
| [#29182](https://github.com/google-gemini/gemini-cli/issues/29182) | CLI 在 play.googleapis.com 不可达时挂起 | 3 | **可靠性缺陷**：非交互式运行时，即便实际 API 端点可达，只要 `play.googleapis.com` 不可达就会无限挂起。 |

---

### 4. 重要 PR 进展

| # | PR | 领域 | 概要 |
|---|-----|------|---------|
| [#30169](https://github.com/google-gemini/gemini-cli/pull/30169) | 防止粘贴内容中的 @ 文本附加密钥 | 安全 (P1) | 防止粘贴的 shell 记录在未经用户确认的情况下自动将 SSH 私钥附加到模型请求中。 |
| [#30175](https://github.com/google-gemini/gemini-cli/pull/30175) | 为所有模型应用本地子代理的 generateContentConfig | Agent | 本地子代理现在能正确为所有模型值（包括 `auto`、别名和具体名称）传递生成配置（temperature、topP、topK、thinkingConfig）。 |
| [#30171](https://github.com/google-gemini/gemini-cli/pull/30171) | 无论标志位置如何都标记递归和强制删除 | 安全 (P1) | 修复 `isDangerousCommand` 以检测所有等效于 `rm -rf` 的命令形式（`-Rf`、`--recursive --force` 等）。 |
| [#30170](https://github.com/google-gemini/gemini-cli/pull/30170) | 阻止本地子代理等待停滞的模型调用 | Agent (P1) | 为每个轮次添加超时限制，防止子代理在单个停滞的模型调用上等待超过 3 分钟。 |
| [#30196](https://github.com/google-gemini/gemini-cli/pull/30196) | 阻止污染的 shell 命令使用始终允许规则 | 安全 | 污染的命令（非可信标志、文件更改后的构建命令）现在需要逐会话审批，而非保存持久允许规则。 |
| [#30088](https://github.com/google-gemini/gemini-cli/pull/30088) | 将错误报告排除在共享临时目录外 | 安全 (P2) | 将错误报告从 `os.tmpdir()` 移至 `~/.gemini/tmp/error-reports/`，并设置仅用户可访问权限以防止信息泄露。 |
| [#29919](https://github.com/google-gemini/gemini-cli/pull/29919) | 通过 --append-system-prompt 追加系统提示词 | Core (P3) | 新增 `--append-system-prompt`、`--append-system-prompt-file` 和 `GEMINI_APPEND_SYSTEM_MD`，支持扩展而非替换系统提示词。 |
| [#29918](https://github.com/google-gemini/gemini-cli/pull/29918) | 通过 OSC 7501 向终端报告 working/blocked/idle 状态 | Core (P3) | 交互式 TUI 现通过 OSC 7501 报告程序状态，使终端 UI 能够显示需要关注的会话。 |
| [#29912](https://github.com/google-gemini/gemini-cli/pull/29912) | 去除 web_fetch URL 末尾的标点符号 | Core | 修复 URL 解析，移除逗号分隔的 web fetch 参数末尾的标点符号（逗号、括号等）。 |
| [#20273](https://github.com/google-gemini/gemini-cli/pull/20273) | 为子代理生成唯一会话 ID | Core (P1) | 子代理现在接收唯一会话 ID 而非继承父会话 ID，防止在突然退出时会话记录冲突。 |

---

### 5. 功能请求趋势

**系统提示词灵活性**
- 追加模式的系统提示词扩展（`--append-system-prompt`）是高度请求的功能，利于包装器兼容性
- AST 感知的文件操作，支持精确的方法级读取和减少 token 噪音

**模型支持**
- Gemini 4 Argon/Pro 支持企业 OAuth 用户
- 子代理配置中更广泛的模型 ID 处理

**代理智能化**
- 无需显式提示即可自主调用 skills 和子代理
- 改进的危险命令警告和安全替代方案
- AST 感知的代码库映射工具

**浏览器代理**
- 持久模式下的会话接管和锁恢复
- Wayland 环境支持
- Settings.json 配置合规性

---

### 6. 开发者痛点

**子代理可靠性**
- 会话 ID 冲突导致记录冲突
- 轮次限制被错误报告为成功
- 停滞的模型调用导致过度等待

**浏览器代理问题**
- 忽略配置覆盖
- Wayland 上失败
- 持久会话中锁恢复不佳

**安全隐患**
- 污染的 shell 命令可能保存持久允许规则
- 错误报告存放在共享临时目录
- 粘贴内容自动附加密钥

**配置缺口**
- 上下文管理设置未能传递到核心
- 工具数量过多导致 400 错误
- Web fetch URL 解析失败处理标点符号

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 社区*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI community digest from English to Simplified Chinese. I need to:

1. Translate all the text content to Chinese
2. Preserve all the Markdown structure exactly (headings, tables, lists, blockquotes, formatting, etc.)
3. Keep URLs, issue numbers, version tags, file paths, and technical identifiers in their original form
4. Use natural technical Chinese appropriate for a Chinese developer newsletter
5. Output ONLY the translation, no preamble or explanation
6. No markdown fences around the output

Let me translate section by section:

---

# GitHub Copilot CLI 社区动态

**日期：** 2026-11-08
**仓库：** github.com/github/copilot-cli

---

## 今日要点

GitHub Copilot CLI 团队发布了 **v1.0.108-1**，修复了 Grok 4.x 型号上的 PDF 渲染回归问题，并解决了沙箱目录变更导致的本地 MCP 服务器保留过期路径限制的 bug。过去 24 小时内社区活跃度仍然很高，共有 26 个 issue 更新，重点领域包括扩展生命周期管理、ACP 模式可观测性以及跨平台沙箱执行。

---

## 版本发布

### v1.0.108-1
**发布日期：** 2026-11-07

| 修复项 | 说明 |
|-----|-------------|
| PDF 渲染 | 修复了 Grok 4.7 和 Grok 4.6 上 PDF 附件导致整个对话轮次失败的回归问题；现已优雅降级为文件引用。 |
| 沙箱 MCP 重启 | 启用 CLI 沙箱时，运行中的本地 MCP 服务器现可在 `/cd` 后正确重启，确保其遵守新目录的拒绝路径，而不是沿用前一个会话的限制。 |

---

## 热门 Issue

### 1. 

终端集成增强

通过 OSC 7501 程序状态协议向支持的终端报告代理状态（工作中、阻塞、思考中）。这使得高级 TUI 应用能够显示实时代理活动指示器，在长时间运行操作期间提高透明度。

🔗 [github/copilot-cli#5112](https://github.com/github/copilot-cli/issues/5112)

---

### 2. MCP OAuth 令牌在会话间不能可靠重用

MCP 服务器在处理 OAuth（PKCE，公共客户端）认证时出现重复的缓存键条目，导致频繁重新认证。用户在存在有效缓存令牌的情况下仍被要求重新授权，影响了开发者使用认证 MCP 工具的体验。

🔗 [github/copilot-cli#4695](https://github.com/github/copilot-cli/issues/4695)

---

### 3. 键盘快捷键不一致：Ctrl+Enter 与 Ctrl+Q

CLI 文档显示 "ctrl+enter 入队" 但实际执行换行操作，而 "ctrl+q" 才执行入队功能。这种不匹配造成了用户困惑，尤其是在 Windows 上。已修复文档以与实际行为保持一致。

🔗 [github/copilot-cli#3760](https://github.com/github/copilot-cli/issues/3760)

---

### 4. 会话恢复失败，代码变更指标被屏蔽

当 `toolTelemetry.metrics` 计数器以屏蔽字符串而非数字形式存储时，会话变得永久不可恢复。关机会话期间的数据类型不匹配导致恢复时出现反序列化错误，影响了用户的工作流程连续性。

🔗 [github/copilot-cli#5023](https://github.com/github/copilot-cli/issues/5023)

---

### 5. 打包的 ripgrep 在 16KB 页 ARM64 内核（Asahi Linux）上中止

打包的 ripgrep 中的静态链接 jemalloc 分配器假设系统页大小为 4KB。在使用 16KB 页面的 Asahi Linux（苹果硅芯片 Linux）上，二进制文件立即中止并报错"不支持的系统页面大小"，导致搜索工具对这一日益增长的用户群体完全不可用。

🔗 [github/copilot-cli#4977](https://github.com/github/copilot-cli/issues/4977)

---

### 6. 融合/自动模式下代理输出被

在 Copilot Fusion/自动模式中，代理输出长时间停止显示，使代理看起来像冻结了一样。所有累积的输出只在用户发送另一条消息后才一起到达。这种 UX 问题显著影响自主代理工作流程的感知响应性。

🔗 [github/copilot-cli#5370](https://github.com/github/copilot-cli/issues/5370)

---

### 7. 技能在 `new_context` 后消失，会话无法恢复

通过 `skillDirectories` 注册的扩展技能在 `session.context_cleared` 事件（由 `new_context` 触发）后消失。恢复的会话完全失去技能访问权限。这在长时间运行或中断的工作流中破坏了基于扩展的工具。

🔗 [github/copilot-cli#5382](https://github.com/github/copilot-cli/issues/5382)

---

### 8. 扩展工具在提示模式下阻止执行，`--allow-tool` 无法指定

在提示模式下（`copilot -p`），扩展工具触发永不解决的权限请求，导致运行无限等待。此外，`--allow-tool` 标志无法通过名称引用扩展工具，限制了自动化可能性。

🔗 [github/copilot-cli#5381](https://github.com/github/copilot-cli/issues/5381)

---

### 9. 通过 `create_session` 创建的会话在切换前不启动扩展

通过 `create_session` 工具创建的会话在不启动扩展进程、工具、技能或钩子的情况下开始。只有当用户手动切换到会话时，扩展才初始化，与主会话相比造成行为不一致。

🔗 [github/copilot-cli#5380](https://github.com/github/copilot-cli/issues/5380)

---

### 10. ACP 模式不发出任何 OpenTelemetry 追踪或指标

作为 ACP 服务器运行（`copilot --acp`）时，CLI 不导出任何 OpenTelemetry 信号——没有追踪、没有指标——尽管托管设置中已启用 OTel。这阻碍了无头部署场景中的企业可观测性和调试。

🔗 [github/copilot-cli#5376](https://github.com/github/copilot-cli/issues/5376)

---

## 关键 PR 进展

*过去 24 小时内没有 Pull Requests 更新。*

---

## 功能需求趋势

对近期 issue 的分析揭示了以下主导功能方向：

| 趋势 | 证据 | 重要性 |
|-------|----------|--------------|
| **扩展生命周期健壮性** | #5382, #5381, #5380 | 扩展需要跨会话、上下文和权限模式获得完整生命周期支持 |
| **终端和 TUI 增强** | #5112, #5378 | 社区需要更丰富的终端集成和整个界面的键盘导航 |
| **自定义和配置** | #5375, #5371 | 在所有模式中禁用内置命令和使用自定义模型提供商的能力 |
| **平台平价（Linux/ARM）** | #4977, #4918 | Ripgrep 和工具二进制文件需要支持 ARM64 Linux 上的非标准页面大小 |
| **ACP/无头可观测性** | #5376 | 企业部署需要在非交互模式中支持 OpenTelemetry |
| **斜杠命令管理** | #5375 | 组织希望替换或禁用内置斜杠命令以保持一致性 |

---

## 开发者痛点

### 1. 扩展状态持久化

多个 issue（#5382, #5380, #5381）强调扩展在上下文变更、会话创建或非交互模式中无法存活。在这些模式中工作的开发者面临基本的可靠性差距。

### 2. MCP 服务器可靠性

OAuth 令牌缓存失败（#4695）和沙箱路径跟踪缺陷导致重复重新认证和手动干预，破坏了依赖认证 MCP 工具的工作流程。

### 3. 会话恢复脆弱性

数据类型不匹配导致的会话状态损坏（#5023）使得长时间运行的任务存在风险，因为中断的会话可能永久无法恢复。

### 4. 平台特定故障

Ripgrep/jemalloc 页面大小问题（#4977, #4918）表明 ARM64 Linux 兼容性，特别是 Asahi Linux 等前沿发行版上，存在持续挑战。

### 5. ACP 模式功能平价

关键企业功能——自定义模型提供商（#5371）、OpenTelemetry（#5376）——在 ACP/服务器模式中无法正常工作，限制了无头和程序化使用场景。

### 6. 键盘和输入不一致

尽管有修复（#3760），持续的问题（#5004, #5378）表明键盘交互模式在上下文间变化不一致（提示模式 vs 提问模式 vs 正常模式）。

---

*动态基于 2026-11-08 的 GitHub Copilot CLI 社区数据生成。*
</think>


# GitHub Copilot CLI 社区动态

**日期：** 2026-11-08
**仓库：** github.com/github/copilot-cli

---

## 今日要点

GitHub Copilot CLI 团队发布了 **v1.0.108-1**，修复了 Grok 4.x 型号上的 PDF 渲染回归问题，并解决了沙箱目录变更导致的本地 MCP 服务器保留过期路径限制的 bug。过去 24 小时内社区活跃度仍然很高，共有 26 个 issue 更新，重点领域包括扩展生命周期管理、ACP 模式可观测性以及跨平台沙箱执行。

---

## 版本发布

### v1.0.108-1
**发布日期：** 2026-11-07

| 修复项 | 说明 |
|-----|-------------|
| PDF 渲染 | 修复了 Grok 4.7 和 Grok 4.6 上 PDF 附件导致整个对话轮次失败的回归问题；现已优雅降级为文件引用。 |
| 沙箱 MCP 重启 | 启用 CLI 沙箱时，运行中的本地 MCP 服务器现可在 `/cd` 后正确重启，确保其遵守新目录的拒绝路径，而不是沿用前一个会话的限制。 |

---

## 热门 Issue

### 1. 终端的 OSC 7501 程序状态支持
**#5112** | `[area:terminal-rendering]` | **CLOSED** | 👍 20 | 💬 7

通过 OSC 7501 程序状态协议向支持的终端报告代理状态（工作中、阻塞、思考中）。支持更紧密的高级 TUI 应用集成，能够显示实时代理活动指示器。在长时间运行操作期间增强透明度。

🔗 [github/copilot-cli#5112](https://github.com/github/copilot-cli/issues/5112)

---

### 2. MCP OAuth 令牌在会话间不能可靠重用
**#4695** | `[area:authentication, area:mcp]` | **OPEN** | 👍 2 | 💬 4

使用 OAuth（PKCE，公共客户端）的 HTTP 类型 MCP 服务器因重复的缓存键条目而经历重复的身份验证。用户报告即使存在有效的缓存令牌也会被提示重新授权。这影响了依赖认证 MCP 工具的工作流程中的开发者体验。

🔗 [github/copilot-cli#4695](https://github.com/github/copilot-cli/issues/4695)

---

### 3. 键盘快捷键不一致：Ctrl+Enter vs Ctrl+Q
**#3760** | `[area:input-keyboard, area:platform-windows]` | **CLOSED** | 👍 12 | 💬 4

CLI 显示"ctrl+enter 入队"但实际向提示符添加换行符，而"ctrl+q"执行入队操作。这种不匹配造成了用户困惑，尤其是在 Windows 上。已修复文档以与实际行为保持一致。

🔗 [github/copilot-cli#3760](https://github.com/github/copilot-cli/issues/3760)

---

### 4. 会话恢复因屏蔽的代码变更指标而失败
**#5023** | `[area:sessions]` | **CLOSED** | 💬 3

当 `toolTelemetry.metrics` 计数器存储为屏蔽字符串而非数字时，会话变得永久不可恢复。关机期间的数据类型不匹配导致恢复时出现反序列化错误，破坏了受影响用户的工作流程连续性。

🔗 [github/copilot-cli#5023](https://github.com/github/copilot-cli/issues/5023)

---

### 5. 打包的 ripgrep 在 16KB 页 ARM64 内核（Asahi Linux）上中止
**#4977** | `[area:platform-linux, area:tools]` | **CLOSED** | 👍 1 | 💬 2

打包的 ripgrep 二进制文件中的静态链接 jemalloc 分配器假设 4KB 页面大小。在使用 16KB 页面的 Asahi Linux（苹果芯片 Linux）上，二进制文件立即中止并报错"不支持的系统页面大小"，使该增长中的用户群体的搜索工具完全不可用。

🔗 [github/copilot-cli#4977](https://github.com/github/copilot-cli/issues/4977)

---

### 6. Fusion/自动模式下代理输出被扣留到下一个用户轮次
**#5370** | `[area:agents, area:tools]` | **OPEN** | 💬 1

在 Copilot Fusion/自动模式中，代理输出在长时间内停止出现，使代理看起来像冻结了一样。所有累积的输出只在用户发送另一条消息后才一起到达。这个 UX 问题显著影响自主代理工作流程的感知响应性。

🔗 [github/copilot-cli#5370](https://github.com/github/copilot-cli/issues/5370)

---

### 7. 技能在 `new_context` 后消失，会话无法恢复它们
**#5382** | `[area:extensions]` | **OPEN** | `triage`

通过 `skillDirectories` 注册的扩展技能在 `session.context_cleared` 事件（由 `new_context` 触发）后消失。恢复的会话完全失去技能访问权限。这在长时间运行或中断的工作流中破坏了基于扩展的工具。

🔗 [github/copilot-cli#5382](https://github.com/github/copilot-cli/issues/5382)

---

### 8. 扩展工具在提示模式下阻止，`--allow-tool` 无法命名它们
**#5381** | `[area:extensions]` | **OPEN** | `triage`

在提示模式下（`copilot -p`），扩展工具触发永不解决的权限请求，导致运行无限等待。此外，`--allow-tool` 标志无法通过名称引用扩展工具，限制了自动化可能性。

🔗 [github/copilot-cli#5381](https://github.com/github/copilot-cli/issues/5381)

---

### 9. `create_session` 创建的会话在切换前不启动扩展
**#5380** | `[area:extensions]` | **OPEN** | `triage`

通过 `create_session` 工具创建的会话在没有扩展进程、工具、技能或钩子的情况下启动。扩展只在用户手动切换到会话时才初始化，与主会话相比造成行为不一致。

🔗 [github/copilot-cli#5380](https://github.com/github/copilot-cli/issues/5380)

---

### 10. ACP 模式不发出任何 OpenTelemetry 追踪或指标
**#5376** | `[area:non-interactive, area:enterprise]` | **OPEN**

作为 ACP 服务器运行（`copilot --acp`）时，CLI 不导出任何 OpenTelemetry 信号——没有追踪、没有指标——尽管托管设置中已启用 OTel。这阻碍了无头部署场景中的企业可观测性和调试。

🔗 [github/copilot-cli#5376](https://github.com/github/copilot-cli/issues/5376)

---

## 关键 PR 进展

*过去 24 小时内没有 Pull Requests 更新。*

---

## 功能需求趋势

对近期 issue 的分析揭示了以下主导功能方向：

| 趋势 | 证据 | 重要性 |
|-------|----------|--------------|
| **扩展生命周期健壮性** | #5382, #5381, #5380 | 扩展需要跨会话、上下文和权限模式获得完整生命周期支持 |
| **终端和 TUI 增强** | #5112, #5378 | 社区需要更丰富的终端集成和整个界面的键盘导航 |
| **自定义和配置** | #5375, #5371 | 在所有模式中禁用内置命令和使用自定义模型提供商的能力 |
| **平台平价（Linux/ARM）** | #4977, #4918 | Ripgrep 和工具二进制文件需要支持 ARM64 Linux 上的非标准页面大小 |
| **ACP/无头可观测性** | #5376 | 企业部署需要在非交互模式中支持 OpenTelemetry |
| **斜杠命令管理** | #5375 | 组织希望替换或禁用内置斜杠命令以保持一致性 |

---

## 开发者痛点

### 1. 扩展状态持久化

多个 issue（#5382, #5380, #5381）强调扩展在上下文变更、会话创建或非交互模式中无法存活。在这些模式中工作的开发者面临基本的可靠性差距。

### 2. MCP 服务器可靠性

OAuth 令牌缓存失败（#4695）和沙箱路径跟踪缺陷导致重复重新认证和手动干预，破坏了依赖认证 MCP 工具的工作流程。

### 3. 会话恢复脆弱性

数据类型不匹配导致的会话状态损坏（#5023）使得长时间运行的任务存在风险，因为中断的会话可能永久无法恢复。

### 4. 平台特定故障

Ripgrep/jemalloc 页面大小问题（#4977, #4918）表明 ARM64 Linux 兼容性，特别是 Asahi Linux 等前沿发行版上，存在持续挑战。

### 5. ACP 模式功能平价

关键企业功能——自定义模型提供商（#5371）、OpenTelemetry（#5376）——在 ACP/服务器模式中无法正常工作，限制了无头和程序化使用场景。

### 6. 键盘和输入不一致

尽管有修复（#3760），持续的问题（#5004, #5378）表明键盘交互模式在上下文间变化不一致（提示模式 vs 提问模式 vs 正常模式）。

---

*动态基于 2026-11-08 的 GitHub Copilot CLI 社区数据生成。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all headings, body text, and table content
2. Keep URLs, issue numbers, PR numbers, code references, repository names intact
3. Use natural technical Chinese register
4. Preserve all Markdown formatting exactly (tables, lists, bold, headings, etc.)
5. Output only the translation, no preamble or explanation
6. No markdown fences around the whole output

Let me translate section by section:

**Title:** OpenCode Community Digest — 2026-11-08
→ OpenCode 社区速递 — 2026-11-08

**Section 1: Today's Highlights**
The community's attention is firmly fixed on **free tier reliability**, with Issue #59387 accumulating 326 comments as users report persistent "usage exceeded" messages despite scheduled resets. On the development side, contributors shipped several high-impact fixes including a **DeepSeek DSML tool-call parsing fix** and a **Gemini content-filter retry loop prevention**, while a new feature for **message timestamps in session lists** is progressing through review.

→ 社区的关注焦点集中在了**免费层级的稳定性**上，Issue #59387 已积累 326 条评论，用户反映即便在计划重置时间之后仍然持续收到"用量已超"的提示。在开发侧，贡献者们提交了多个高影响力的修复，包括 **DeepSeek DSML 工具调用解析修复**和**Gemini 内容过滤器重试循环的防止机制**，而**会话列表消息时间戳**新功能也正在审核推进中。

**Section 2: Releases**
**No new releases in the last 24 hours.**
→ **过去 24 小时内无新版本发布。**


**Section 3: Hot Issues**
I'll now translate the hot issues section, focusing on the most impactful discussions from the past week.

The table contains detailed issue information that needs careful translation while maintaining the structure and technical accuracy. I'll preserve all the issue numbers, titles, comment counts, and descriptions while converting to natural Chinese technical language.

**Section 4: Key PR Progress**
I'll translate the PR descriptions, emphasizing what each pull request accomplishes and its relevance to the codebase.

**Section 5: Feature Request Trends**
The feature request section maps out emerging patterns in user needs, translating the theme descriptions and their supporting evidence into Chinese while keeping technical terms precise.

**Section 6: Developer Pain Points**
I'll address the most frequent frustrations developers encounter, starting with the reliability issues in the free tier that create the highest volume of complaints. The reset mechanism is unreliable, and users see incorrect "usage exceeded" messages—this damages trust during the critical onboarding phase. The plugin system also has significant vulnerabilities, particularly with TUI plugins from npm packages that crash during storage operations, scoped packages that fail with storage errors, and external TSX transformations that don't apply reliably in packaged builds—the plugin loading pipeline needs substantial hardening. Additionally, there are Windows-specific ecosystem gaps: winget installation fails silently, desktop UI rendering varies between machines due to GPU acceleration differences, and ResizeObserver loop storms on Windows 11 produce large renderer dumps, indicating underlying performance issues in the desktop application.
</think>


# OpenCode 社区速递 — 2026-11-08

---

## 1. 今日要闻

社区的关注焦点集中在了**免费层级的稳定性**上，Issue #59387 已积累 326 条评论，用户反映即便在计划重置时间之后仍然持续收到"用量已超"的提示。在开发侧，贡献者们提交了多个高影响力的修复，包括 **DeepSeek DSML 工具调用解析修复**和**Gemini 内容过滤器重试循环的防止机制**，而**会话列表消息时间戳**新功能也正在审核推进中。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门议题

| # | 标题 | 评论数 | 重要性说明 |
|---|-------|----------|----------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | **[zen] 免费层级问题：请先阅读此帖** | 326 | 流量最高的议题。用户反映免费用量限制错误触发，重置功能完全失效。这是影响最广泛用户群体的核心可靠性问题。 |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) | **原生 Claude Code hooks 兼容性（PreToolUse、PostToolUse、Stop）** | 21 | OpenCode 已支持 Claude Code 的 rules 和 skills，但 hooks 系统——工作流自动化的关键——尚未实现。这一缺口限制了 Claude Code 高阶用户的迁移。 |
| [#60760](https://github.com/anomalyco/opencode/issues/60760) | **【已复现】OpenAI 兼容流在错误无 message 字段时失败** | 7 | 当 OpenAI 兼容 provider 发出的错误响应缺少 `message` 字段时，会话会中断。这是一个破坏非标准 provider 集成的 schema 校验问题。 |
| [#47665](https://github.com/anomalyco/opencode/issues/47665) | **cli(v2)：即使使用 --server，位置参数目录仍会在本地解析** | 7 | 远程工作流被破坏：`opencode2 <dir> --server <url>` 在目录仅存在于服务器端时抛出 ENOENT。CLI 在考虑 `--server` 之前先在本地解析了位置参数。 |
| [#55268](https://github.com/anomalyco/opencode/issues/55268) | **big-pickle 将思维链泄露到可见文本中** | 5 | 当模型的自我推理中包含字面量 `</think>` 标签时，big-pickle 会错误地终止推理通道，将后续思维链内容泄露到可见消息中。 |
| [#54371](https://github.com/anomalyco/opencode/issues/54371) | **【已复现】ACP：斜杠命令执行但从不流式输出结果** | 5 | ACP 智能体（如在 JetBrains Rider 中）能成功执行斜杠命令但不显示任何输出。命令在无形中运行，IDE 集成体验大打折扣。 |
| [#37844](https://github.com/anomalyco/opencode/issues/37844) | **【bug、perf、core】缓存位置导致 MCP 子进程成倍增长** | 5 | 严重的性能泄漏：每个缓存的 Location 保留完整的 MCP 子进程集，导致单个服务下产生约 50 个孤儿进程。在 `0.0.0-next-15839` 上复现。 |
| [#62675](https://github.com/anomalyco/opencode/issues/62675) | **VSCode 中选择能力（复制/粘贴）在短暂可用后失效** | 4 | 在 SSH 连接的 VS Code 集成终端中，文本选择最初有效，但在几次复制粘贴操作后失效。鼠标事件被会话捕获/锁定。 |
| [#62634](https://github.com/anomalyco/opencode/issues/62634) | **【已复现】TUI：来自作用域 npm 包的插件存储访问时崩溃，显示"Invalid storage segment"** | 4 | 从作用域 npm 包安装的 TUI 插件在首次存储访问时崩溃，原因是原始插件 ID 的键组合不正确。 |
| [#61252](https://github.com/anomalyco/opencode/issues/61252) | **app：汉堡菜单显示消息模板（`{{path}}/{{error}}`）而非项目标签** | 3 | 桌面应用的汉堡菜单渲染出原始模板占位符而非本地化标签。底层操作仍正常工作，但用户体验受损。 |

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 改动内容 |
|---|-------|--------|--------------|
| [#60575](https://github.com/anomalyco/opencode/pull/60575) | **fix(ai)：恢复泄露到消息文本中的 DeepSeek DSML 工具调用** | OPEN | 修复 DeepSeek 通道 DSML 标记转换失败或未配置时的工具调用提取问题。关闭 #50206。 |
| [#62671](https://github.com/anomalyco/opencode/pull/62671) | **feat(server)：在会话列表中包含消息时间** | OPEN | 通过 `GET /api/session` 在会话列表中添加最后存储的用户和助手消息时间戳，避免逐会话请求消息。解决 #62655。 |
| [#62679](https://github.com/anomalyco/opencode/pull/62679) | **fix(ai,core)：在内容过滤器阻止时阻止 Gemini 继续重试** | OPEN | 当 `promptFeedback.blockReason` 阻止内容时停止传输继续循环，并处理空流完成的情况。 |
| [#62670](https://github.com/anomalyco/opencode/pull/62670) | **feat(tui)：在 Mini 中发出 OSC 133 轮次边界** | OPEN | 在 Mini 中实现 OSC 133 终端转义序列以标记轮次边界，解决 Mini 的终端/tmux 所有滚动区域的行为问题。 |
| [#62480](https://github.com/anomalyco/opencode/pull/62480) | **fix(core)：将大小压缩输出限制在缩短请求后剩余的空间中** | OPEN | 修复自动会话压缩错误地限制摘要 token 限额的问题。关闭 #62185。 |
| [#61950](https://github.com/anomalyco/opencode/pull/61950) | **feat(app)：在 Web 应用中加载配置的 GUI 插件** | OPEN | 使 Web 应用能够从服务服务器加载 GUI 插件。现有的 `./gui-experimental` CommonJS 捆绑包无需重新构建即可工作。 |
| [#62176](https://github.com/anomalyco/opencode/pull/62176) | **fix(core)：保持 Code Mode 目录更新小而稳定** | OPEN | 减少在服务器连接/断开时重新打乱所有工具列表的嘈杂目录更新，避免每次重新陈述浪费约 2.2k token。 |
| [#62667](https://github.com/anomalyco/opencode/pull/62667) | **fix(desktop)：阻止登录 shell 探测阻塞启动** | OPEN | 当登录 shell 探测失败时桌面不再阻塞启动。之前 `$SHELL -il -c` 中的 `env -0` 可能无限挂起。 |
| [#62661](https://github.com/anomalyco/opencode/pull/62661) | **docs：杀毒软件 HTTPS 扫描及 W-9 税表** | CLOSED | 添加 Anomaly Innovations Inc. 签署的 W-9 表格及杀毒软件 HTTPS 扫描相关文档。 |
| [#62150](https://github.com/anomalyco/opencode/pull/62150) | **feat(app)：在命令面板和设置搜索中匹配英文原文** | CLOSED | 非英文界面的命令面板和设置搜索现在匹配英文原文而非仅匹配本地化字符串。关闭 #62148。 |

---

## 5. 功能需求趋势

基于议题和 PR 分析，社区愿望清单主要集中在以下方向：

| 主题 | 依据 |
|-------|----------|
| **免费层级可靠性** | #59387（326 条评论）、#62452、#62456 — 用户要求重置时间保持一致，配额执行准确。 |
| **插件生态扩展** | #39986、#62666、#62634 — TUI 插件支持外部 TSX、作用域 npm 包和响应式信号的呼声很高。 |
| **Claude Code 功能对等** | #12472 — Hooks 兼容性（PreToolUse、PostToolUse、Stop）将实现 Claude Code 工作流的直接迁移。 |
| **API 完善度** | #62655、#62454 — 会话时间戳、MCP 工具就绪事件和更丰富的会话元数据是普遍需求。 |
| **终端集成** | #62670 — OSC 133 轮次边界以控制终端复用器的滚动区域。 |
| **IDE/桌面端优化** | #62675、#62601、#62436 — 选中行为、归档快捷键和会话分组需要打磨。 |
| **Provider 错误容错** | #60760、#55268、#54861 — OpenAI 兼容接口和模型特定的错误处理及内容分类边缘场景。 |

---

## 6. 开发者痛点

社区中反复出现的挫折主要集中在三个领域：

1. **免费层级不一致**：作为大多数新用户的入口，免费层级产生了最高的投诉量。重置时间不可靠，"用量已超"提示错误出现。这在最关键的入门阶段侵蚀了用户信任。

2. **插件系统脆弱性**：来自 npm 包的 TUI 插件在存储访问时崩溃，作用域包报"Invalid storage segment"错误，外部 TSX 转换在打包构建中不能可靠应用。插件加载管线需要加固。

3. **Windows 生态缺口**：winget 安装静默失败，桌面 UI 在不同机器上渲染不一致（可能与 GPU 加速差异有关），Windows 11 上的 ResizeObserver 循环风暴产生 33–37 MB 的渲染器转储。

---

*速递正文结束 — 数据来源：anomalyco/opencode GitHub 仓库，2026-11-08。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Keep issue/PR references like #12345 and their link text as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

Title: Pi Community Digest — 2026-11-08 → Pi 社区日报 — 2026-11-08

Today's Highlights → 今日要点

Paragraph about activity... → Pi 社区在身份验证和提供商集成方面活动频繁，数个 MCP OAuth 缺陷（issue #11918、#11919）已修复，两个提供商也已合并（MiniMax OAuth、Wally）。针对 prompt 缓存预热的开放 PR #11857 仍是重点，作者估算每月可节省约 1,430 美元的成本。Windows 使用相关问题及 TUI 选择语义持续引发大量讨论。

Releases → 发布

No new releases... → 过去 24 小时内无新版本发布。

Hot Issues → 热门 Issue

For each issue, I need to translate the content while keeping technical terms, URLs, issue numbers, etc. as-is.

Let me go through systematically:

1. [#7547] → [#7547]
   Windows sink-thread usage (OPEN) → Windows sink-thread 使用方式 (OPEN)
   Description about Windows platform... → 一个综合性 issue，寻求明确 Pi 在 Windows 上的运行方式及开发工作的优先级。
</think>


# Pi 社区日报 — 2026-11-08

## 今日要点

Pi 社区在身份验证和提供商集成方面活动频繁，数个 MCP OAuth 缺陷（issue #11918、#11919）已修复，两个提供商也已合并（MiniMax OAuth、Wally）。针对 prompt 缓存预热的开放 PR #11857 仍是重点，作者估算每月可节省约 1,430 美元的成本。Windows 使用相关问题及 TUI 选择语义持续引发大量讨论。

---

## 发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

1. **[#7547](https://github.com/earendil-works/pi/issues/7547)** — *Windows sink-thread 使用方式 (OPEN)*  
   一个综合性 issue，寻求明确 Pi 在 Windows 上的运行方式及开发工作的优先级。目前以 94 条评论成为参与度最高的开放 issue——社区成员反馈了 WSL、原生及容器化等多种运行方式。**重要性：** Windows 是重要平台但执行路径分散；解决此问题有望吸引大量新用户。

2. **[#10862](https://github.com/earendil-works/pi/issues/10862)** — *鼠标选择时硬件光标跳到错误列 (OPEN)*  
   v1.2.0 中 `showHardwareCursor: true` 导致活动选区时光标定位错误，根源在 `extractCursorPosition()` 的列计算。**社区反应：** 👍 0，但 9 条评论表明正在积极调试；可能影响将 Pi 用作终端编辑器的开发者。

3. **[#11021](https://github.com/earendil-works/pi/issues/11021)** — *ChatGPT 登录显示 272K 上下文，但 GPT-6.1 Sol 账号应有 500K (OPEN)*  
   OpenAI provider 报告硬编码的 272K 限制，但实时模型目录显示支持 500K，导致 Pi 的压缩预算被压榨。**重要性：** 付费账号用户未能充分利用可用上下文；8 个 👍 来自受影响开发者。

4. **[#5372](https://github.com/earendil-works/pi/issues/5372)** — *自定义 OAuth 回调页面渲染 (OPEN)*  
   功能请求：让 SDK 调用方提供自己的回调渲染器，而非使用 Pi 内置的 `oauthSuccessHtml()`/`oauthErrorHtml()`。**重要性：** 影响需要品牌化 OAuth 流程的 SDK 集成方；6 条评论讨论当前 `renderPage()` API 的限制。

5. **[#8829](https://github.com/earendil-works/pi/issues/8829)** — *wrapUIPromptContext 在类实例上丢失原型方法 (OPEN)*  
   `wrapUIPromptContext` 工具使用对象展开运算符，会跳过原型方法——Pi 自身的 TUI/RPC UI 正常，但基于类的 UI 实现静默失效。**重要性：** 影响任何使用自定义 UI 类的 SDK 用户；6 条评论附有提议的变通方案。

6. **[#11122](https://github.com/earendil-works/pi/issues/11122)** — *schemaToType 在 allOf 约束存在时将字符串渲染为 `unknown` (OPEN)*  
   Code Mode 的 `schemaToType()` 在处理 Zod 4 中带有多个 `.regex()` 约束的字符串 schema 时出错，将参数渲染为 `unknown`。**重要性：** 破坏了使用高级 Zod 验证的 codemode 脚本的类型安全。

7. **[#11026](https://github.com/earendil-works/pi/issues/11026)** — *pi-durable：永久删除会话 (OPEN, durable)*  
   功能请求：提供 `harness.deleteConversation(id, ctx)` API，安全地删除会话的条目、文档、收件箱项和调度器状态。**重要性：** Durable 执行存储会持续积累数据；用户需要清理机制。4 个 👍，标记为 durable（高优先级）。

8. **[#11317](https://github.com/earendil-works/pi/issues/11317)** — *SDK：自定义身份 preamble 而非替换默认提示段 (OPEN)*  
   当前 `customPrompt` 会剥离 Pi 的默认工具、规则和文档；SDK 用户希望仅交换开头的身份文本。**重要性：** 可在不重写工具描述的前提下实现自定义智能体角色；相关 PR #11904 今日已合并。

9. **[#11916](https://github.com/earendil-works/pi/issues/11916)** — *Mistral GLM 流将 delta.content 作为数组传递 → `[object Object]` 刷屏 (CLOSED)*  
   Mistral 非标准的 `delta.content` 格式（数组而非字符串）导致 openai-completions 中的视觉刷屏。24 小时内修复/关闭。**社区反应：** 👍 0，但快速响应表明维护状态活跃。

10. **[#11919](https://github.com/earendil-works/pi/issues/11919)** — *MCP 重连阻塞 2–4 分钟；重新认证重新握手所有服务器 (CLOSED)*  
    Pi 1.5.0（Linux + macOS）中，带有过期/缺失凭证的 OAuth MCP 服务器阻塞顺序重连尝试（每次 30–60 秒）。此外，对一个服务器重新认证会触发所有服务器的完整重握手。**重要性：** 破坏了多服务器工作流（如 Google Workspace MCP 栈）；当天关闭。

---

## 重点 PR 进展

1. **[#11857](https://github.com/earendil-works/pi/pull/11857)** *(OPEN)* — **p2 中的 prompt 缓存预热**  
   作者：`mitsuhiko`。实现 Anthropic/Radius 5 分钟 prompt 缓存的刷新逻辑，避免 305 秒间隔后的完整 prompt 重写。对 10 月 12 日至 11 月 5 日会话的分析显示，共 789 次此类事件，月成本约 1,430 美元（占 p2 支出的 26%）。按成本节省衡量，这是影响力最高的开放 PR。

2. **[#11910](https://github.com/earendil-works/pi/pull/11910)** *(CLOSED)* — **Neon + pgvector 记忆层 for Cline (MVP)**  
   按规范 NLTPI-MEM-003 替换被阻塞的 Mem0 路径。引入 `NeonMemoryStore`（通过 pgvector 的余弦搜索，含 pg_trgm 回退）和 `EmbedRunner`（基于 Neon Postgres）。规范/文档位于 `docs/`，实现位于 `src/memory`。

3. **[#11904](https://github.com/earendil-works/pi/pull/11904)** *(CLOSED)* — **SDK 自定义 system prompt preamble**  
   允许 SDK 用户通过 `systemPromptOptions.sections.preamble` 替换开头的身份文本，同时保留 Pi 的默认工具、规则和文档。直接回应 issue #11317。

4. **[#11907](https://github.com/earendil-works/pi/pull/11907)** *(CLOSED)* — **Orchestra supervisor + shotd + add-all**  
   按用户请求为 coding-agent 编排 supervisor 添加 `add-all` 覆盖。当天合并。

5. **[#11906](https://github.com/earendil-works/pi/pull/11906)** *(CLOSED)* — **防止本地文件/会话读取 abort 时未捕获的 AbortError**  
   修复 `AbortSignal` 在待处理 `read` 工具调用期间 abort 时导致的崩溃——这会导致 `pi` 以未捕获错误退出。影响 `codemode` 脚本中未等待的文件读取中途返回的情况。

6. **[#10810](https://github.com/earendil-works/pi/pull/10810)** *(CLOSED)* — **在 CompactionStatusIndicator 中支持 override colorFn**  
   修复 issue #10809：此前缺少 `borderColor` 的主题无法在嵌入式压缩指示器中 override `colorFn`。现在与 `WorkingIndicator` 的 override 行为保持一致。

7. **[#11915](https://github.com/earendil-works/pi/pull/11915)** *(CLOSED — via issue)* — **添加 MiniMax OAuth 登录**  
   合并了 `minimax` 和 `minimax-cn` 两个 provider 的 MiniMax OAuth 支持，此前仅支持 API key 认证。

8. **[#11903](https://github.com/earendil-works/pi/pull/11903)** *(CLOSED — via issue)* — **添加 Wally 为内置 provider**  
   将 Wally（RunAnywhere 托管的开放权重模型 API）添加为内置 provider，提供 OpenAI 兼容的 chat completions 端点。

9. **[#11908](https://github.com/earendil-works/pi/pull/11908)** *(CLOSED — via issue)* — **在新命名 id 时拆分重用的 tool-call 索引**  
   修复 `openai-completions` 解析器区分两个复用同一流 `index` 但具有不同 id 的工具调用的能力——当前一个调用的参数在结构上关闭时开始一个新块。

10. **[#11913](https://github.com/earendil-works/pi/pull/11913)** *(CLOSED — via issue)* — **为严格的 OpenAI 兼容 provider 剥离工具 schema 中的 uniqueItems**  
    通过从附加的工具 schema 中剥离非标准的 `uniqueItems` JSON Schema 关键字，防止严格的 provider（如 Liquid LFM）返回 400 错误。

---

## 热门讨论

### 展示与演示

- **[#11912](https://github.com/earendil-works/pi/discussions/11912)** — *agentswarm.space 任务发现 skill for Pi*  
  发布了一个用于查找合适公开任务（必要时注册一次）并提交结果的 Pi skill。可通过 `pi install git:github.com/andrewsiah/agentswarm-pi@v1.0.0` 安装。👍 1，1 条评论。

### 问答

- **[#11911](https://github.com/earendil-works/pi/discussions/11911)** — *研究工作用 Pi 还是 OMP（GPT/DeepSeek）：科学推理、实验设计和 token 效率？*  
  CS 学生评估是否从 Pi 切换到 OMP（Pi 的 fork）。询问在 GPT/DeepSeek 研究任务上的对比表现。0 条评论，1 个 👍——社区可提供指导的机会。

---

## 功能请求趋势

从开放 issue 和讨论中汇总，社区需求集中在以下主题：

| 主题 | 证据 |
|-------|----------|
| **提供商 & 认证扩展** | MiniMax OAuth (#11915)、Wally provider (#11903)、自定义 OAuth 回调 (#5372)、OpenCode 会话兼容性 (#9690) |
| **SDK 可定制性** | 身份 preamble 自定义 (#11317, #11904)、codemode 中的轻量级 text-model 调用 (#11909)、MCP 滚动位置可扩展性 (#11914) |
| **Durable 执行控制** | 永久会话删除 (#11026)、任务卡在 waiting 状态修复 (#11892) |
| **Windows 平台一致性** | Windows 使用方式分散 (#7547，94 条评论) |
| **Schema / 工具鲁棒性** | `uniqueItems` 剥离 (#11913)、`schemaToType` allOf 修复 (#11122)、tool-call 索引重用 (#11908) |
| **TUI 细节打磨** | 硬换行保留 (#8019)、硬件光标选区 bug (#10862)、Shell 输出固定 (#11905) |
| **中断 / 控制流** | 中断但不 abort (#11917)、prompt 缓存预热 (#11857) |

---

## 开发者痛点

1. **Windows 平台碎片化** — 社区缺乏针对 Windows 用户的清晰推荐路径，导致变通方案讨论分散，增加支持负担。

2. **MCP 中的 Auth Header 传播** — MCP 服务器的 OAuth 令牌在登录后未能持续传递（#11918），破坏了众多开发者依赖的 Google Workspace 集成。

3. **MCP 重连阻塞** — 过期的 OAuth 凭证导致所有 MCP 服务器依次超时数分钟，破坏多服务器工作流（#11919）。

4. **SDK 原型方法丢失** — 构建自定义 UI 类的开发者由于 `wrapUIPromptContext` 的对象展开行为静默丢失方法（#8829）。

5. **上下文窗口不匹配** — 硬编码或过时的上下文限制（如 GPT-6.1 Sol 报告 272K 而实际可用 500K）导致 token 预算不优（#11021）。

6. **工具 Schema 严格性** — 严格的 OpenAI 兼容 provider 拒绝标准 JSON Schema 关键字（`uniqueItems`），需要手动剥离 schema（#11913）。

7. **pi-durable 存储积累** — 没有内置机制清理已完成或不需要的会话，导致存储持续增长却无清理路径（#11026）。

8. **TUI 选择语义** — 鼠标选择复制时的软换行和硬换行处理仍不一致（#8019），令依赖准确剪贴板内容的用户感到沮丧。

---

*日报数据来源于 [earendil-works/pi](https://github.com/earendil-works/pi) GitHub 仓库，日期：2026-11-08。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the above English technical report into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation, no preamble
2. Preserve the Markdown structure exactly
3. Keep URLs, version tags, issue numbers, etc. as-is
4. Use natural technical Chinese
5. Keep all tables, lists, headings, etc.

Let me translate section by section:

Title: Qwen Code Community Digest — 2026-11-08
→ Qwen Code 社区日报 — 2026-11-08

Section 1: Today's Highlights
→ 今日要闻

Section 2: Releases
→ 发版情况

Section 3: Hot Issues
→ 热门 Issue

Section 4: Key PR Progress
→ 重要 PR 进展

Section 5: Hot Discussions
→ 热门讨论

Section 6: Feature Request Trends
→ 功能需求趋势

Section 7: Developer Pain Points
→ 开发者痛点

Let me go through the entire document and translate it carefully into natural Simplified Chinese technical language.
</think>


# Qwen Code 社区日报 — 2026-11-08

---

## 1. 今日要闻

Qwen Code 发布了 **v0.27.0** 正式版及 desktop-v0.27.0，managed-agent 带来大量改进，包括多子问题支持（子问题可无序回答，每条线路独立草稿/错误状态）以及 Web Shell 任务问答热力图功能。一项 P1 安全提案（[#16514](https://github.com/QwenLM/qwen-code/issues/16514)）正在推进，计划使用一次性 runner 隔离外部 PR CI，避免自托管基础设施上的凭证泄露风险。TypeScript SDK 升至 v0.1.30，内置同分支构建的 CLI 0.27.0。

---

## 2. 发版情况

| 版本 | 主要变更 |
|------|---------|
| **v0.27.0** | Managed-agent 多子会话支持：子问题无序回答，各路径独立草稿/错误状态；Web Shell 新增任务 Q&A 热力图及"提问"功能 |
| **desktop-v0.27.0** | 含 [@wenshao](https://github.com/wenshao) 修复的 GitHub 入站恢复（[#16402](https://github.com/QwenLM/qwen-code/issues/16402)）|
| **sdk-typescript-v0.1.30** | 捆绑 CLI 0.27.0，源码与当前分支一致 |
| **v0.26.9-nightly.20261107** | 每日构建，commit 65e1f1aeaa |

---

## 3. 热门 Issue

| # | Issue | 优先级 | 影响说明 | 评论数 |
|---|-------|--------|----------|--------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | **Main CI 失败：Managed Agent gate — 未识别测试** | — | CI 反复失败阻塞合入；226 条评论表明问题排查较深 | 226 |
| [#16514](https://github.com/QwenLM/qwen-code/issues/16514) | **使用一次性 runner 隔离外部 PR CI** | P1 | 安全问题：外部 PR 在自托管 runner 上执行贡献者可控的 CI 脚本，存在凭证泄露风险 | 11 |
| [#13820](https://github.com/QwenLM/qwen-code/issues/13820) | **Live Voice 挂断后永久卡在"停止中"** | P1 | 用户反映 Live 通话挂断后卡住，转录任务未完成；唯一解决方式是重启 daemon | 4 |
| [#16355](https://github.com/QwenLM/qwen-code/issues/16355) | **sidebar=false 仍每 5 秒轮询所有 workspace** | P1 | 性能问题：嵌入式 Web Shell 在空闲欢迎页仍轮询所有受信任 workspace，浪费资源 | 4 |
| [#12040](https://github.com/QwenLM/qwen-code/issues/12040) | **web-shell 凭证存储在错误 origin 下** | P2 | 安全问题：拒绝 `?daemon=` 覆盖时，token fragment 被存到页面 origin 的 key 下而非目标主机 | 4 |
| [#16320](https://github.com/QwenLM/qwen-code/issues/16320) | **Session 数量增长导致控制面 SQL 膨胀** | P2 | 性能：驻留 Session SQL 工作负载无上限增长，需要优化 | 5 |
| [#15875](https://github.com/QwenLM/qwen-code/issues/15875) | **SDK stream-json thinking 后 message ID 变化** | P2 | SDK bug：thinking 流式传输时 `message_start` 与最终快照的 message ID 不一致 | 4 |
| [#13966](https://github.com/QwenLM/qwen-code/issues/13966) | **Chrome 扩展无限重试 WebSocket 升级** | P3 | 扩展无退避策略持续重试，导致 `qwen serve` 日志被刷屏 | 4 |
| [#14465](https://github.com/QwenLM/qwen-code/issues/14465) | **--disable-mcp-server glob 排除规则无法解除** | P2 | MCP 排除标志持久化，与运行时配置取并集；会话内启用无法覆盖 | 4 |
| [#14594](https://github.com/QwenLM/qwen-code/issues/14594) | **Desktop Web Preview 保存版本显示空白** | P2 | macOS Desktop bug：保存的产物预览区显示白屏，原因是 `about:srcdoc` iframe 被加入屏蔽列表 | 3 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 描述 | 状态 |
|---|-----|------|------|------|
| [#16488](https://github.com/QwenLM/qwen-code/pull/16488) | **feat(managed-agent): add opt-in personal memory backed by Holo** | Feature | 为 managed agent 引入基于 Holo 存储的个人记忆能力（可选开启）| Open |
| [#15684](https://github.com/QwenLM/qwen-code/pull/15684) | **feat(managed-agent): enable external workspace execution** | Feature | 支持托管 workspace 外部文件的沙箱执行，并配有边界发现机制 | Open |
| [#16475](https://github.com/QwenLM/qwen-code/pull/16475) | **feat(managed-agent): add persisted session diagnostics** | Feature | 记录已提交请求上下文、模型统计、Skills/MCP 资源及工具/Skill 调用活动日志 | Open |
| [#16578](https://github.com/QwenLM/qwen-code/pull/16578) | **fix(serve): throttle WebSocket upgrade rejection logs** | Bug Fix | 将重复的 403 拒绝日志限流为同一 reason@client-address 每分钟最多一条 | Open |
| [#16559](https://github.com/QwenLM/qwen-code/pull/16559) | **fix(core): quantized builds get base model's context window** | Bug Fix | AWQ、GPTQ、FP8 量化模型现在继承基座模型的完整 131K context window | Open |
| [#16277](https://github.com/QwenLM/qwen-code/pull/16277) | **fix(ci): report main CI runs a job timeout cancelled** | CI | 区分任务超时取消与并发覆盖，明确命名被取消的任务 | Open |
| [#16462](https://github.com/QwenLM/qwen-code/pull/16462) | **fix(ci): run failure patrol on ECS** | CI | 将 CI 失败巡逻移至自托管 ECS 池；分离沙箱镜像拉取时序 | Open |
| [#13835](https://github.com/QwenLM/qwen-code/pull/13835) | **fix(cli): settle Live call stops after failure** | Bug Fix | 通过 drain deadline 和转录持久化完成失败的 Live 通话停止流程 | Closed |
| [#16021](https://github.com/QwenLM/qwen-code/pull/16021) | **fix(web-shell): bump @datafe-open/markdown-chart to 0.4.1** | Dependency | 修复 markdown-chart 渲染器中 ECharts 挂载失败处理问题 | Open |
| [#16576](https://github.com/QwenLM/qwen-code/pull/16576) | **feat(channels): give bound sessions role guidance** | Feature | PR 绑定会话获得角色专属指导（reviewer/verifier），不依赖操作员模板 | Open |

---

## 5. 热门讨论

*（数据集未提供讨论数据。）*

---

## 6. 功能需求趋势

综合分析 open issues 和 PR，发现以下高频主题：

| 主题 | 代表性 Issue | 描述 |
|------|-------------|------|
| **Managed Agent 容量与资源管理** | [#15082](https://github.com/QwenLM/qwen-code/issues/15082), [#16320](https://github.com/QwenLM/qwen-code/issues/16320) | 需求：容量限制文档化、空闲回收机制，以及使用量增长时的内存/SQL 优化 |
| **自定义 Provider 上下文预算指导** | [#12886](https://github.com/QwenLM/qwen-code/issues/12886) | 需要在预检阶段发出警告或提供文档，说明所选工具超过 32K 上下文预算的情况 |
| **Web Shell UI 增强** | [#16569](https://github.com/QwenLM/qwen-code/issues/16569), [#16562](https://github.com/QwenLM/qwen-code/issues/16562), [#15280](https://github.com/QwenLM/qwen-code/issues/15280) | 需求：滚动到底部按钮、模型提供商徽章、可展开的 MCP 工具详情卡片 |
| **外部 Workspace 执行** | [#15684](https://github.com/QwenLM/qwen-code/pull/15684) | 启用外部 workspace 文件的沙箱化执行，配有边界发现机制 |
| **Agent 个人记忆** | [#16488](https://github.com/QwenLM/qwen-code/pull/16488) | 为 managed agent 提供基于 Holo 的可选持久化个人记忆 |
| **进程级配置** | [#10984](https://github.com/QwenLM/qwen-code/issues/10984) | CLI 支持进程级配置目录覆盖选项 |

---

## 7. 开发者痛点

| 痛点 | 证据 | 影响 |
|------|------|------|
| **Managed Agent CI Gate 不稳定** | [#14724](https://github.com/QwenLM/qwen-code/issues/14724)（226 条评论）| 所有合入被阻塞；开发者对 gate 失去信心 |
| **Live Voice 挂断后卡死** | [#13820](https://github.com/QwenLM/qwen-code/issues/13820) | 需要重启 daemon 才能恢复；语音工作流被打断 |
| **WebSocket 升级重试日志刷屏** | [#13966](https://github.com/QwenLM/qwen-code/issues/13966), [#16578](https://github.com/QwenLM/qwen-code/pull/16578) | 无退避策略导致连接异常时日志无界增长 |
| **凭证存储到错误 Origin** | [#12040](https://github.com/QwenLM/qwen-code/issues/12040) | 跨 origin 使用 daemon 覆盖时存在安全风险 |
| **MCP Server 排除规则无法解除** | [#14465](https://github.com/QwenLM/qwen-code/issues/14465) | 启动参数与运行时配置取并集，会话内启用无法覆盖 |
| **量化模型丢失上下文窗口** | [#16559](https://github.com/QwenLM/qwen-code/pull/16559) | AWQ/GPTQ/FP8 模型被截断为极小的默认 context 而非基座模型的 131K |
| **Desktop Web Preview 空白** | [#14594](https://github.com/QwenLM/qwen-code/issues/14594) | macOS 上保存的产物预览失效；about:srcdoc iframe 被屏蔽 |
| **后台记忆 Agent 暴露原始 Token** | [#13465](https://github.com/QwenLM/qwen-code/issues/13465) | 用户看到内部 `MAX_TURNS` token 而非友好的错误提示 |

---

*数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) GitHub 数据 — 2026-11-08*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*