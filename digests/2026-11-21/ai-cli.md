# AI CLI 工具社区动态日报 2026-11-21

> 生成时间: 2026-11-21 03:24 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Keep issue/PR references like #12345 and their link text as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the structure and technical precision while making it read naturally in Chinese.

I'll go through section by section:

Title: AI CLI Tools Ecosystem — Cross-Tool Comparison Report
Date: 2026-11-21
Prepared by: AI Developer Tools Senior Analyst

Let me translate this now, maintaining all the markdown structure and technical terms.
</think>


# AI CLI 工具生态全景——跨工具对比报告

**日期：** 2026-11-21
**编制方：** AI 开发者工具高级分析师

---

## 1. 生态概览

AI CLI 工具生态正处于高速成熟阶段，过去 48 小时内七大主流平台均有重大更新发布。整体格局呈现清晰的分层结构：Anthropic、OpenAI 和 Microsoft 主要服务于需要深度集成的企业团队，而 Google 的 Gemini CLI、Pi 项目和 Qwen Code 则采取开源、多供应商的策略，吸引了追求供应商灵活性的高级用户和开发者。OpenCode 则占据了一个独特的细分市场——以浏览器为原生的 AI 编程环境，并具备桌面集成功能。本轮报告中最引人注目的模式是，所有工具都在共同投入**会话韧性**、**多智能体编排**和**平台可靠性**——尤其是 Windows 环境——这表明整个生态已从概念验证工具进化为生产级关键基础设施。

---

## 2. 活跃度对比

| 工具 | 最新版本 | Issues（过去 24h） | 合并的 PR | Discussions | 状态 |
|------|----------|-------------------|-----------|-------------|------|
| **Claude Code** | v2.1.330 | 50 个追踪中（展示前 30） | 1 个合并 | N/A | 活跃稳定版 |
| **OpenAI Codex** | rust-v0.173.0-alpha.4 | 0 个新提交（于 Discussions 追踪） | 19 个合并 | 5+ 个活跃 | 快速 alpha 迭代 |
| **Gemini CLI** | v0.71.0-nightly | 50 个追踪中（展示前 30） | 17 个合并 | N/A | 活跃 nightly 版 |
| **GitHub Copilot CLI** | v1.0.115-4 | N/A（上游 Issues 已禁用） | 0 个新提交 | 3 个活跃 | 稳定版；Issues 走官方支持渠道 |
| **OpenCode** | 24h 内无版本发布 | 50 个追踪中（展示前 30） | 20+ 个合并 | N/A | 活跃开发中 |
| **Pi** | v1.6.0 | 50 个追踪中（展示前 30） | 21 个合并 | 1 个活跃 | 活跃稳定版 |
| **Qwen Code** | v0.28.3 | 50 个追踪中（展示前 30） | 20+ 个合并 | N/A | 活跃稳定版 |

**说明：**

- **Copilot CLI** 的 GitHub Issues 已在上游禁用；社区反馈仅通过 Discussions 和官方支持渠道流转。
- **OpenCode** 是成熟项目，没有每日发版但 PR 吞吐量持续保持在高位——开发工作集中在特性分支上进行，周期性合并到稳定分支。
- **OpenAI Codex** 和 **Gemini CLI** 的 PR 量相对于 issue 量最高，说明内部开发活跃，外部报告的 issue 存在一定滞后。

---

## 3. 共同功能方向

以下需求出现在三个或以上工具社区中：

| 共同需求 | 受影响工具 | 具体表现 |
|----------|-----------|----------|
| **会话韧性与连续性** | Claude Code, Gemini CLI, OpenCode, Pi, Qwen Code | 恢复行为修复（Gemini）、会话崩溃恢复（Pi）、归档聊天可访问性（OpenCode）、Remote Control 会话存活（Claude Code）、超大索引缓存（Qwen Code） |
| **平台特定可靠性（Windows）** | Claude Code, OpenAI Codex, OpenCode, Qwen Code | Windows 启动挂起、Git Bash 截断、进程清理、argv 限制、任务栏集成 |
| **多智能体编排与子智能体管理** | Claude Code, Gemini CLI, Qwen Code | 子智能体恢复语义（Claude Code, Gemini CLI）、后台观察阶段（Qwen Code）、会话权限统一化 |
| **MCP（Model Context Protocol）服务器集成** | Claude Code, Gemini CLI, OpenCode, Pi, Qwen Code | 工具发现缺口、OAuth 刷新、预热策略、协议版本协商、tasks 扩展 |
| **成本与用量透明度** | Claude Code, OpenAI Codex, Pi | `claude usage` CLI 命令（Claude Code）、配额耗尽可见性（OpenAI Codex）、Token 计数准确性（Pi）、服务层级定价 |
| **Windows 桌面集成与任务栏功能** | OpenAI Codex, OpenCode | 任务栏进度条、会话徽章、闪动通知、窗口状态持久化 |
| **跨平台键盘与输入处理** | OpenCode, Gemini CLI, Copilot CLI | 非拉丁键盘布局支持、ANSI 粘贴处理、IME 提交序列、终端滚动行为 |
| **协作工作流安全加固** | Claude Code, Gemini CLI, Copilot CLI | Fork PR 中 `@claude` 执行防护、粘贴敏感信息拦截、递归危险命令检测 |
| **扩展/钩子表达力** | Gemini CLI, Pi | `beforeRequest` 拒绝语义、命名空间作用域工具可见性、自定义斜杠命令扩展 |
| **缓存预热与提示缓存对齐** | Gemini CLI, OpenAI Codex | 空闲缓存预热范围、TTL 配置、缓存 Token 报告准确性 |

---

## 4. 差异化分析

### 按目标用户

| 细分市场 | 工具 | 核心定位 |
|----------|------|----------|
| **企业 / GitHub 深度集成** | Claude Code, GitHub Copilot CLI | 深度 GitHub.com 和 Copilot 订阅集成、Admin Console 管理、团队级策略执行 |
| **云 / API 原生开发者** | OpenAI Codex | Responses API、browser-use 计算机使用、云端 threads 和 apps、企业 MCP 服务器 |
| **开源 / 多供应商高级用户** | Gemini CLI, Pi, Qwen Code | 跨供应商模型路由、自定义供应商注册、沙箱灵活性、无供应商锁定 |
| **浏览器原生 / 轻量化** | OpenCode | 无 Electron 依赖，~5 MB 二进制文件；浏览器渲染 UI 配合原生窗口管理 |

### 按技术路线

| 工具 | 架构理念 | 核心特色 |
|------|----------|----------|
| **Claude Code** | 桌面应用 + Admin Console 云端后端的一体化架构 | 最紧密的企业级绑定；订阅功能门控；v2.1 引入 easel mod 和组织级认证 |
| **OpenAI Codex** | Rust SDK + TypeScript 应用服务器 + MCP 服务器生态 | 协议驱动的可扩展性；云端/应用服务器分离清晰；alpha 版本快速迭代 |
| **Gemini CLI** | Node.js + TypeScript，基于文件的 skill/subagent 系统 | 零依赖沙箱愿景；AST 感知的工具建议；基于文件的持久化模型 |
| **Copilot CLI** | Electron 桌面 + GitHub APIs | 最深的 GitHub 集成；与 VS Code / GitHub Desktop 天然相邻 |
| **OpenCode** | 浏览器原生 + 桌面外壳包装 | 极简主义——无 Electron，约 5 MB 二进制；浏览器渲染 UI 配合原生窗口管理 |
| **Pi** | 供应商无关的多厂商抽象层 | 最强的跨供应商对等性；模型 ID 标准化；网关重试逻辑；ACP 扩展模型 |
| **Qwen Code** | 管理式智能体服务器架构，通道适配器 | 大量投入 CI/CD 基础设施；管理式智能体阶段；钉钉和 Teams 通道 |

### 按功能专长

| 工具 | 标志性能力 |
|------|-----------|
| **Claude Code** | Enterprise Admin Console、内置 MCP easel mod、`@claude` 提及执行、安全过滤器框架 |
| **OpenAI Codex** | Computer Use browser-use、云端 threads/apps、ACP 编辑器表单、Windows/macOS 桌面外壳 |
| **Gemini CLI** | 斜杠命令、skill/subagent 系统、`get-shit-done` 智能体模式、YOLO 审批模式 |
| **Copilot CLI** | ACP 扩展、辅助权限审批、`/gh` GitHub 集成、`/bug` 报告 |
| **OpenCode** | 浏览器原生架构、任务栏徽章/计数集成、快照压缩 |
| **Pi** | 供应商无关路由、ACP 扩展模型、持久化线程生命周期、网关抽象 |
| **Qwen Code** | 管理式智能体服务器阶段、后台观察持久化、管理式通道适配器（钉钉、Teams） |

---

## 5. 社区活跃度与成熟度

### 高活跃度项目

**OpenAI Codex** 和 **Qwen Code** 本周期开发速度最高，分别合并了 19 和 20+ 个 PR。Codex 的快速 alpha 发版节奏（24 小时内三个构建）表明团队正积极推进 rust-v0.173 版本的稳定化。Qwen Code 在管理式智能体阶段、通道适配器和 Web Shell UX 等多个方向同步推进，表明其贡献者群体规模较大。

**Gemini CLI** 和 **Pi** 展示了强劲且可持续的发展势头，分别合并了 17–21 个 PR，在修复 Bug 和架构改进之间取得了平衡。开源、多供应商的定位吸引了核心维护者之外的社区贡献。

### 成熟期项目

**Claude Code** 已进入稳定的发版节奏，最新版本为 v2.1.330；PR 数量低（24 小时内仅 1 个）说明项目正处于打磨和可靠性优化阶段，而非功能扩展期。社区通过 issue 追踪渠道保持着高度参与。

**OpenCode** 展示了成熟的开发实践——大量已解决的问题积压和持续的 PR 吞吐量——但没有每日发版；开发工作集中在特性分支上进行，周期性合并到稳定分支。

### 社区参与深度

| 工具 | 参与模式 | 深度信号 |
|------|----------|----------|
| **Claude Code** | 认证/安全类 issue 评论量大；400+ 条评论的讨论线程 | 企业用户深度参与 |
| **OpenAI Codex** | Computer Use bug 75 条评论、macOS 崩溃 53 条评论 | 平台可靠性问题占主导 |
| **Gemini CLI** | P1 issue 有 13+ 条评论，说明 triage 活跃 | 高优先级的可靠性关注 |
| **Copilot CLI** | 尽管 Issues 禁用但 Discussions 活跃；功能请求描述清晰 | 社区善于利用可用渠道 |
| **OpenCode** | 单个贡献者（Hona）贡献了 8 个 PR，说明专业集中度高 | 专注维护者提供的 Windows 集成深度 |
| **Pi** | P0 issue 有直接根因追踪，说明问题报告技术精度高 | Bug 报告的技术严谨性 |
| **Qwen Code** | 508 条评论的 CI 故障追踪；系统化 issue 管理 | 工程化的问题 triage 规范 |

---

## 6. 趋势信号

### 趋势一：Windows 晋升为一等平台

在多年将 Windows 视为次要目标后，本生态中的每个工具都在积极推进 Windows 专项工作。投入力度相当可观——任务栏集成、argv 限制处理、Git Bash 路径标准化、控制台生命周期管理，以及端点保护冲突（Cortex XDR）。**信号：** Windows 是 AI 辅助开发的重要生产环境，平台对等已成为竞争的必要条件。

### 趋势二：智能体隔离与沙箱架构走向成熟

多个工具正在独立开发沙箱架构：Pi 的实验性智能体沙箱核心、Gemini CLI 的零依赖沙箱愿景、Claude Code 的安全过滤器框架，以及 Qwen Code 的管理式智能体服务器阶段。**信号：** 行业正在向一个模型收敛——AI 智能体在具有明确权限边界的隔离执行环境中运行，而非裸 shell 访问。

### 趋势三：跨供应商抽象成为差异化因素

Pi 和 Qwen Code 明确瞄准多厂商路由，而 Claude Code、Codex 和 Copilot CLI 则采取垂直整合路线。Pi 社区围绕供应商对等性的高度参与（模型 ID 标准化、网关重试逻辑、思考层级映射）表明，**供应商锁定疲劳**是真实存在的，而保留供应商选择灵活性的工具拥有可守的市场定位。

### 趋势四：CI/CD 基础设施成为可信度信号

Qwen Code 在 CI 卫生方面的大量投入——管理式智能体门禁、E2E Docker 分片、CVE 审计、SpotBugs 基线——反映出生态正在走向成熟，**可靠的自动化测试**已成为社区信任的前提条件。508 条评论的 CI 故障追踪既是痛点，也说明用户对该项目有高可靠性要求。

### 趋势五：会话与上下文管理成为下一个前沿

大规模会话崩溃（Pi 超过 12 万条条目）、陈旧锁文件回收（Copilot CLI）、归档聊天可访问性（OpenAI Codex）、睡眠/唤醒后会话恢复（Gemini CLI, OpenCode）共同表明，**长时间运行的生产级 AI 工作流**已成为主流。下一代工具需要显式的会话生命周期管理，而不仅仅是会话式提示。

### 趋势六：MCP 协议普及与碎片化风险

五个工具都集成了 MCP，但各自实现的是不同的协议子集——tasks 扩展、notifications/tools/list_changed、服务器预热、协议版本降级。Pi 在版本不匹配时的 400 错误与 Codex 的优雅降级之间的差异表明，随着协议走向成熟，**MCP 互操作性测试**将成为生态系统的关键议题。

### 趋势七：开源社区 dynamics

Gemini CLI、Pi 和 Qwen Code 拥有基于 GitHub 的开放社区，提供了真正的社区反馈闭环。相比之下，Copilot CLI 的 Issues 渠道已禁用，意味着社区缺乏透明的 bug 追踪可见性。这种结构性差异既影响开发速度，也影响社区信任——**开放的 issue 追踪在开源生态中仍是竞争优势**。

---

*本报告汇总自 7 个 AI CLI 工具的社区摘要数据，日期为 2026-11-21。指标反映前 24 小时内的活动，另有说明除外。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me analyze the content and translate it while maintaining:

1. The exact Markdown structure (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
2. URLs, link targets, code spans, code blocks, numbers and dates verbatim
3. Project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
4. Issue/PR references like #12345 and their link text stay as-is
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

---

# Claude Code Skills Community Highlights Report

# Claude Code Skills 社区亮点报告

**Data as of: 2026-11-21**
**数据截至：2026-11-21**

**Source: [anthropics/skills](https://github.com/anthropics/skills)**
**来源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

## 一、热门 Skills 排行

The following PRs represent the most actively discussed or significant Skill contributions, ranked by engagement and potential impact:

以下 PR 按社区讨论热度和发展潜力排列，代表当前最受关注或影响最大的 Skill 贡献：

| # | PR | Author | Status | Focus |
|---|-----|---------|--------|-------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | OPEN | MCP ≥2 SDK compatibility fix |
| 2 | [#1980](https://github.com/anthropics/skills/pull/1980) | Pcmhacker-piro | OPEN | Security fix: eliminates shell injection risk |


| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) | mrdesouzaphd-cmyk | OPEN | Dual skill: Notion specs + resume auditing |
| 4 | [#525](https://github.com/anthropics/skills/pull/525) | kitao | OPEN | Pyxel retro game development |
| 5 | [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | OPEN | Smart contract auditing + TON blockchain anchoring |
| 6 | [#1703](https://github.com/anthropics/skills/pull/1703) | 70v-Yoyo | OPEN | Markdown-to-video with AI voiceovers |
| 7 | [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | OPEN | Document typography quality control |

### Skill Highlights

### Skill 亮点

**#1742 – mcp-builder MCP ≥2 Support** ([PR #1742](https://github.com/anthropics/skills/pull/1742))
**#1742 – mcp-builder MCP ≥2 支持** ([PR #1742](https://github.com/anthropics/skills/pull/1742))

- **Functionality:** Updates `mcp-builder` to support MCP SDK version 2.x, fixing the renamed `streamable_http_client` module and custom HTTP header configuration via `create_mcp_http_client`.
- **功能：** 更新 `mcp-builder` 以支持 MCP SDK 2.x 版本，修复了重命名的 `streamable_http_client` 模块，并通过 `create_mcp_http_client` 提供自定义 HTTP 头配置。

- **Significance:** Critical compatibility fix for users migrating to the MCP 2.0 protocol; ensures the builder skill remains functional with the latest SDK.
- **意义：** 对迁移至 MCP 2.0 协议的用户而言是关键的兼容性修复；确保 builder skill 在最新 SDK 下保持可用。

- **Status:** OPEN, last updated 2026-10-08.
- **状态：** OPEN，最后更新于 2026-10-08。

**#1980 – webapp-testing Security Fix** ([PR #1980](https://github.com/anthropics/skills/pull/1980))
**#1980 – webapp-testing 安全修复** ([PR #1980](https://github.com/anthropics/skills/pull/1980))

- **Functionality:** Eliminates `subprocess.Popen(..., shell=True)` in `with_server.py`, closing a command injection vulnerability (CWE-78) where unsanitized user/agent strings were passed to the system shell.
- **功能：** 移除 `with_server.py` 中的 `subprocess.Popen(..., shell=True)`，封堵命令注入漏洞（CWE-78）——此前未经清理的用户/代理字符串会被直接传入系统 shell。

- **Significance:** High-priority security patch; prevents potential remote code execution if malicious input reaches the skill.
- **意义：** 高优先级安全补丁；防止恶意输入到达 skill 时可能导致的远程代码执行。

- **Status:** OPEN, last updated 2026-11-01.
- **状态：** OPEN，最后更新于 2026-11-01。

**#1245 – Notion Spec-to-Implementation + Resume Auditor** ([PR #1245](https://github.com/anthropics/skills/pull/1245))
**#1245 – Notion 需求落地 + 简历审计** ([PR #1245](https://github.com/anthropics/skills/pull/1245))

- **Functionality:** Two skills in one PR: (1) transforms product/tech specs into actionable Notion tasks with acceptance criteria; (2) provides quantitative resume auditing for job seekers.
- **功能：** 一个 PR 包含两个 skill：(1) 将产品/技术需求转化为带验收标准的可执行 Notion 任务；(2) 为求职者提供量化简历审计。

- **Significance:** Bridges AI-generated specifications directly into project management workflows; addresses a gap in the skills ecosystem for Notion users.
- **意义：** 将 AI 生成的需求直接桥接到项目管理流程中；填补了 Skills 生态在 Notion 用户场景下的空白。

- **Status:** OPEN, last updated 2026-10-15.
- **状态：** OPEN，最后更新于 2026-10-15。

**#525 – Pyxel Retro Game Development** ([PR #525](https://github.com/anthropics/skills/pull/525))
**#525 – Pyxel 复古游戏开发** ([PR #525](https://github.com/anthropics/skills/pull/525))

- **Functionality:** Guides creation, debugging, and verification of retro games using the Pyxel Python library; includes headless input-driven runs and frame inspection.
- **功能：** 指导使用 Pyxel Python 库创建、调试和验证复古游戏；支持无头输入驱动运行和帧级检查。

- **Significance:** Expands Claude Code's reach into creative/game development tooling; targets a niche but enthusiastic developer community.
- **意义：** 将 Claude Code 的能力扩展到创意/游戏开发工具领域；面向小众但热情高涨的开发者社区。

- **Status:** OPEN, last updated 2026-11-01.
- **状态：** OPEN，最后更新于 2026-11-01。

**#1771 – Proofcore Contract Auditor** ([PR #1771](https://github.com/anthropics/skills/pull/1771))
**#1771 – Proofcore 合约审计** ([PR #1771](https://github.com/anthropics/skills/pull/1771))

- **Functionality:** Automated static analysis of Solidity and Rust smart contracts, with cryptographic audit proofs anchored to the TON Blockchain via a zero-storage Merkle protocol.
- **功能：** 对 Solidity 和 Rust 智能合约进行自动化静态分析，通过零存储 Merkle 协议将密码学审计证明锚定至 TON 区块链。

- **Significance:** First Web3-specific skill in the collection; targets blockchain developers requiring audit trails.
- **意义：** 生态中首个 Web3 专用 skill；面向需要可验证审计轨迹的区块链开发者。

- **Status:** OPEN, last updated 2026-09-16.
- **状态：** OPEN，最后更新于 2026-09-16。

**#1703 – md2video-audio** ([PR #1703](https://github.com/anthropics/skills/pull/1703))
**#1703 – md2video-audio** ([PR #1703](https://github.com/anthropics/skills/pull/1703))

- **Functionality:** Compiles Markdown documents into professional MP4 videos with realistic AI voiceovers using Marp for slide generation.
- **功能：** 使用 Marp 生成幻灯片，将 Markdown 文档编译为带逼真 AI 配音的专业级 MP4 视频。

- **Significance:** Enables non-technical users to create presentation content from written documentation; zero-cost alternative to commercial video tools.
- **意义：** 赋能非技术用户将书面文档转化为演示内容；商业视频工具的零成本替代方案。

- **Status:** OPEN, last updated 2026-09-15.
- **状态：** OPEN，最后更新于 2026-09-15。

**#514 – Document Typography QC** ([PR #514](https://github.com/anthropics/skills/pull/514))
**#514 – 文档排版质量控制** ([PR #514](https://github.com/anthropics/skills/pull/514))

- **Functionality:** Prevents typographic issues in AI-generated documents: orphan words, widow paragraphs, and numbering misalignment.
- **功能：** 预防 AI 生成文档中的排版问题：孤立单词、孤行段落、编号错位等。

- **Significance:** Addresses a persistent quality gap in Claude's document output; applies universally across all document-generation skills.
- **意义：** 解决 Claude 文档输出中长期存在的质量短板；适用于所有文档生成类 skill。

- **Status:** OPEN, last updated 2026-03-13.
- **状态：** OPEN，最后更新于 2026-03-13。

---

## 2. Community Demand Trends

## 二、社区需求趋势

Analysis of the top Issues reveals the following strategic demand vectors:

对热门 Issues 的分析揭示了以下战略性需求方向：

### Security & Trust Architecture
### 安全与信任架构

- **[#492](https://github.com/anthropics/skills/issues/492) — Security: Community skills impersonating official ones** (46 comments, 3 👍)
  - **[#492](https://github.com/anthropics/skills/issues/492) — 安全：社区 skill 冒充官方 skill** (46 条评论，3 个 👍)
  - Core concern: Community-contributed skills distributed under the `anthropic/` namespace create a trust boundary vulnerability where users may grant elevated permissions to skills they believe are officially endorsed.
  - 核心问题：以 `anthropic/` 命名空间分发的社区贡献 skill 形成了信任边界漏洞，用户可能误将高权限授予他们以为是官方背书的 skill。
  - **Trend signal:** Strong demand for namespace segregation, provenance verification, or official endorsement mechanisms.
  - **趋势信号：** 对命名空间隔离、来源验证或官方认证机制有强烈需求。

### Evaluation & Quality Assurance
### 评估与质量保障

- **[#556](https://github.com/anthropics/skills/issues/556) — run_eval.py 0% trigger rate** (13 comments, 7 👍)
  - **[#556](https://github.com/anthropics/skills/issues/556) — run_eval.py 触发率为 0%** (13 条评论，7 个 👍)
  - Core concern: The skill evaluation harness never triggers skills during `claude -p` runs, making optimization impossible.
  - 核心问题：skill 评估框架在 `claude -p` 运行期间从不会触发 skill，导致优化工作无法进行。
  - **[#1352](https://github.com/anthropics/skills/issues/1352) — Parallel workers corrupt skill UUIDs** (6 comments, 3 👍)
  - **[#1352](https://github.com/anthropics/skills/issues/1352) — 并行 worker 破坏 skill UUID** (6 条评论，3 个 👍)
  - Core concern: Multi-worker evaluation produces systematically wrong (near-zero) trigger rates.
  - 核心问题：多 worker 评估产生系统性错误（接近零）的触发率。
  - **Trend signal:** Heavy investment in testing/harness tooling; the ecosystem recognizes that skill quality requires robust evaluation infrastructure.
  - **趋势信号：** 评估/测试工具投入力度大；生态各方认识到 skill 质量需要可靠的评估基础设施支撑。

### Enterprise Collaboration
### 企业协作

- **[#228](https://github.com/anthropics/skills/issues/228) — Org-wide skill sharing** (17 comments, 8 👍)
  - **[#228](https://github.com/anthropics/skills/issues/228) — 组织级 skill 共享** (17 条评论，8 个 👍)
  - Core concern: No native mechanism for sharing skills within an organization; users resort to manual file distribution.
  - 核心问题：缺乏组织内共享 skill 的原生机制；用户只能靠手动分发文件。
  - **Trend signal:** Strong enterprise demand for built-in collaboration features beyond individual skill installation.
  - **趋势信号：** 企业对超越个人 skill 安装的原生协作功能有强烈需求。

### Skill Creator Maturity
### Skill Creator 成熟度

- **[#202](https://github.com/anthropics/skills/issues/202) — skill-creator best practices** (8 comments, 1 👍)
  - **[#202](https://github.com/anthropics/skills/issues/202) — skill-creator 最佳实践** (8 条评论，1 个 👍)
  - Core concern: The skill-creator reads as developer documentation rather than an actionable skill; verbose tone undermines token efficiency.
  - 核心问题：skill-creator 读起来像开发者文档而非可执行 skill；冗长的语调破坏了 token 使用效率。
  - **Trend signal:** Community seeks leaner, more operational guidance for skill authors.
  - **趋势信号：** 社区需要更精简、更具操作性的 skill 编写指南。

### Memory & State Management
### 记忆与状态管理

- **[#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory proposal** (10 comments)
  - **[#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory 提案** (10 条评论)
  - Core concern: Long-running agents consume excessive context on prose notes; a symbolic notation could compress persistent memory.
  - 核心问题：长时间运行的 agent 在纯文本笔记上消耗过多上下文；一种符号化表示法可以压缩持久记忆。
  - **Trend signal:** Interest in agent memory optimization skills.
  - **趋势信号：** 对 agent 记忆优化类 skill 有兴趣。

### Reasoning Quality Gates
### 推理质量门控

- **[#1385](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate Pipeline** (7 comments, 1 👍)
  - **[#1385](https://github.com/anthropics/skills/issues/1385) — 推理质量门控流水线** (7 条评论，1 个 👍)
  - Core concern: Proposes a three-gate pipeline (pre-task calibration → adversarial review → delivery verification) to catch AI output failures.
  - 核心问题：提出三门控流水线（任务前校准 → 对抗性审查 → 交付验证）来捕捉 AI 输出失败。
  - **Trend signal:** Emerging interest in meta-skills that govern AI reasoning quality.
  - **趋势信号：** 对治理 AI 推理质量的元 skill 兴趣初显。

---

## 3. High-Potential Pending Skills

## 三、极具潜力的待合并 Skill

These PRs have active discussion or represent significant new capability additions; they may be merged soon:

以下 PR 或有活跃讨论，或代表重要的新能力补充，预计近期可能合入：

| PR | Skill | Author | Key Value | Likelihood |
|----|-------|---------|-----------|------------|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing security patch | Pcmhacker-piro | Closes CWE-78 vulnerability | **High** — security fixes are prioritized |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 安全补丁 | Pcmhacker-piro | 封堵 CWE-78 漏洞 | **高** — 安全修复优先处理 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP ≥2 fix | Kuldeeep18 | SDK compatibility | **High** — unblocks MCP 2.0 users |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP ≥2 修复 | Kuldeeep18 | SDK 兼容性 | **高** — 解除 MCP 2.0 用户的阻塞 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice timeout handling | TINGyu123644 | Reliability improvement | **High** — fixes silent failures |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时处理 | TINGyu123644 | 可靠性提升 | **高** — 修复静默失败 |
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx external links fix | reginaldalfret | Correctness fix for formulas | **Medium-High** |
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx 外部链接修复 | reginaldalfret | 公式正确性修复 | **中高** |
| [#1245](https://github.com/anthropics/skills/pull/1245) | Notion + resume auditor | mrdesouzaphd-cmyk | Dual new capability | **Medium** — requires maintainer review |
| [#1245](https://github.com/anthropics/skills/pull/1245) | Notion + 简历审计 | mrdesouzaphd-cmyk | 双新能力 | **中** — 需要维护者审核 |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel retro games | kitao | Creative domain expansion | **Medium** — clear use case |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel 复古游戏 | kitao | 创意领域扩展 | **中** — 用例清晰 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | ProofCore-Protocol | Web3 domain expansion | **Medium** — niche but novel |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | ProofCore-Protocol | Web3 领域扩展 | **中** — 小众但新颖 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 70v-Yoyo | Content creation automation | **Medium** — high user appeal |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 70v-Yoyo | 内容创作自动化 | **中** — 用户吸引力高 |

---

## 4. Skills Ecosystem Insight

## 四、Skills 生态洞察

> **The community's most concentrated demand is for reliability and security hardening of existing skills** — particularly fixes to evaluation infrastructure, shell injection vulnerabilities, and SDK compatibility — signaling a maturation phase where the ecosystem is prioritizing trustworthiness over new capability expansion.

> **社区最集中的需求是对现有 skill 的可靠性和安全性加固**——尤其是评估基础设施修复、shell 注入漏洞封堵和 SDK 兼容性改进——这标志着生态正在进入成熟期，优先追求可信度而非新能力扩张。</think>



---

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it while preserving all the Markdown structure, URLs, numbers, issue references, etc. Let me translate this carefully maintaining the technical register appropriate for Chinese developers.
</think>


# Claude Code 社区日报 — 2026-11-21

## 今日要闻

Anthropic 发布了 **v2.1.330**，新增企业组织通过 Admin Console 登录功能，以及一个用于图表生成的内置 "easel" mod。社区活跃度保持稳定，共追踪 50 个 issue；近期讨论集中在身份验证问题、macOS 专属渲染 bug 以及针对嵌入式开发场景的安全过滤器误报。一个安全相关 PR 于本周期合并，防止了 `@claude` 指令在派生仓库的 PR 上执行。

---

## 版本发布

### v2.1.330（最新版）
**更新日志：**
- **企业 Admin Console 集成**：用户现可登录由 Anthropic 企业 Admin Console 托管的组织。执行 `claude auth login` 后，Claude Code 将应用组织设置并通过配置的云服务商或网关路由流量。
- **Easel 内置 Mod**：新增内置 mod，在请求时绘制图表，当 MCP 指标结果返回时触发激活。

[发布页面](https://github.com/anthropics/claude-code/releases/tag/v2.1.330)

---

## 热门 Issue

### 1. 验证邮件未送达 — 登录受阻 ([#79808](https://github.com/anthropics/claude-code/issues/79808))
**状态：** 开启 | 评论: 31 | 👍: 7
用户因验证邮件未到达而无法完成登录，且官方支持渠道缺乏升级通道。这是一个影响新用户注册的关键认证流程故障。

### 2. 终端大小调整时滚动内容重复 ([#51828](https://github.com/anthropics/claude-code/issues/51828))
**Status:** 开启 | 评论: 31 | 👍: 38
macOS 上 VS Code 集成终端的一个持续回归 bug，窗口大小调整时输出内容重复。高互动量表明该问题影响了大批使用终端的用户。

### 3. Model Picker 缺少 Opus Plan Mode 选项行 ([#89690](https://github.com/anthropics/claude-code/issues/89690))
**状态：** 开启 | 评论: 23 | 👍: 0
`modelPicker` 跳过了 `model: opusplan` 的行，导致 Opus Plan Mode 选择器在 UI 中完全缺失。用户无法显式选择该模式。

### 4. 提议内置用量统计命令 ([#33978](https://github.com/anthropics/claude-code/issues/33978))
**状态：** 开启 | 评论: 22 | 👍: 12
整合了 10 多个重复请求，期望提供 `claude usage` CLI 命令以直接在终端内显示 token 消耗和费用数据。

### 5. 桌面版自动更新导致远程控制会话中断 ([#95364](https://github.com/anthropics/claude-code/issues/95364))
**状态：** 开启 | 评论: 22 | 👍: 24
macOS 上，桌面应用在自动更新时静默退出并重启，所有远程控制会话被终止。对于远程访问机器的用户影响尤为严重。

### 6. 经典渲染器在窗口高度变化时丢失输出 ([#98019](https://github.com/anthropics/claude-code/issues/98019))
**状态：** 开启 | 评论: 12 | 👍: 11
经典渲染器在窗口可视区域上方内容高度变化时会出现输出损坏或丢失，启用 verbose 模式时尤为明显。

### 7. 折叠粘贴内容中的斜杠命令不被分发 ([#85654](https://github.com/anthropics/claude-code/issues/85654))
**状态：** 开启 | 评论: 8 | 👍: 2
在折叠的粘贴文本块内输入的斜杠命令会被当作普通消息处理，而非作为命令执行。

### 8. 跨设备会话连续性需求 ([#81835](https://github.com/anthropics/claude-code/issues/81835))
**状态：** 开启 | 评论: 7 | 👍: 0
用户请求桌面应用将磁盘上的转录文件暴露出来，以便在不同机器之间实现会话连续性。

### 9. 自动压缩因 Token 计数滞后触发 ([#92434](https://github.com/anthropics/claude-code/issues/92434))
**状态：** 开启 | 评论: 7 | 👍: 0
自动压缩逻辑使用上一轮的 token 计数来决定是否压缩，导致重新注入的指令文件在压缩激活前就已溢出上下文窗口。

### 10. 网页版会话不保留项目决策 ([#102045](https://github.com/anthropics/claude-code/issues/102045))
**状态：** 开启 | 评论: 6 | 👍: 0
Claude Code (网页版) 在不同会话之间丢失项目特定决策和上下文，尽管同一会话链接保持打开状态。

---

## 关键 PR 进展

### 已合并的 PR

| PR | 描述 | 状态 |
|----|------|------|
| [#111198](https://github.com/anthropics/claude-code/pull/111198) | 禁止在派生仓库的 PR 上运行 `@claude` 指令 | Closed |

**PR #111198 摘要**：安全加固修改，禁止 `@claude` 指令在来源于派生仓库的 PR 上执行，防范协作工作流中的潜在滥用风险。

### 已关闭的 Issue（本周期重要修复）

| Issue | 描述 | 领域 |
|-------|------|------|
| [#83720](https://github.com/anthropics/claude-code/issues/83720) | `CLAUDE_CODE_MAX_SUBAGENT_SPAWN_DEPTH` 现可通过云配置路径覆盖 | Agents, Web |
| [#110449](https://github.com/anthropics/claude-code/issues/110449) | Windows 桌面应用现可正确在侧边栏显示 Code 会话 | Desktop, Windows |
| [#94162-94167](https://github.com/anthropics/claude-code/issues?q=is%3Aissue+in%3A+94162+94163+94164+94165+94166+94167) | 已处理多个针对嵌入式固件开发的安全过滤器误报 | Security, Model |
| [#100347](https://github.com/anthropics/claude-code/issues/100347) | 子代理文档现包含 `effort` 参数及每次调用的模型值 | Docs, Agents |
| [#91146](https://github.com/anthropics/claude-code/issues/91146) | 自定义斜杠命令现可展开为内置命令调用 | CLI, Skills |
| [#94310](https://github.com/anthropics/claude-code/issues/94310) | 已解决子代理委托导致高 token 消耗的问题 | Cost, Agents |

---

## 功能需求趋势

对开放式增强请求的分析揭示以下主导主题：

### 1. **用量与成本可见性**（需求最高）
`claude usage` 命令请求（#33978）是得票最多的功能请求，获得 12 个 👍 和 22 条评论，整合了 10 多个重复的 issue。用户希望在 CLI 内直接获得实时 token 追踪。

### 2. **跨平台与设备连续性**
多个请求涉及跨机器的会话/转录持久化（#81835）和网页版会话状态保留（#102045）。用户期望在设备间无缝切换。

### 3. **增强的模型选择 UI**
Model Picker 缺少 Opus Plan Mode 选项行（#89690）凸显了模型选择器的功能缺口。用户希望对模型选择模式拥有更精细的控制。

### 4. **Skills 与自定义命令扩展**
已合并的 PR #91146 支持斜杠命令展开，这是迈向更强大自定义工作流的一步。社区期待更深入的 Claude Code 行为定制。

### 5. **文档缺口**
未文档化的环境变量如 `CLAUDE_SECURESTORAGE_CONFIG_DIR`（#79223）以及子代理参数的缺失（#100347）表明文档工作存在持续的技术债务。

---

## 开发者痛点

### 身份验证与访问（严重级别）
- **邮件验证失败**导致新用户注册受阻，且缺乏支持升级通道（#79808）
- 企业组织登录流程复杂，为团队部署带来摩擦

### macOS 稳定性问题
- **终端渲染 bug**：滚动内容重复（#51828）和输出丢失（#98019）困扰 macOS 用户
- **桌面版自动更新**静默中断远程控制会话（#95364）
- **远程控制开关**在 Windows 上自动关闭（#109419）

### 安全过滤器误报
一系列 issue（#94161-94167）表明安全过滤器会拦截合法的嵌入式系统工作（微控制器调试、固件开发），在正当的技术工作期间导致会话中止。

### 上下文管理失效
- 自动压缩使用滞后的 token 计数，导致溢出（#92434）
- 上下文环显示的百分比与配置的限额不一致（#93901）
- 子代理缺少重试状态可见性（#96231）

### 跨账户同步问题
不同账户的会话共享同步的 skill bucket，导致切换账户时回收站目录损坏（#98526）。

---

*本日报数据来源于 [anthropics/claude-code](https://github.com/anthropics/claude-code) GitHub 仓库，采集日期：2026-11-21*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the formatting and technical accuracy.

Key terms to translate consistently:
- digest = 简报/动态
- release = 发布版本
- hot issues = 热门议题
- key PR progress = 重要 PR 进展
- hot discussions = 热门讨论
- feature request trends = 功能需求趋势
- developer pain points = 开发者痛点
- pull request = 拉取请求
- issue = 问题
- merge = 合并
- alpha = alpha
- crash = 崩溃
- bug = 缺陷
- feature = 功能
- workspace = 工作区
- thread = 线程/对话
- agent = 代理
- SDK = SDK
- OAuth = OAuth
- remote = 远程
- local = 本地
- cloud = 云端
- macOS = macOS
- Windows = Windows
- CLI = CLI
- TUI = TUI

Let me translate this carefully now.
</think>


# OpenAI Codex 社区简报

**日期：** 2026-11-21
**来源：** github.com/openai/codex

---

## 1. 今日要闻

Codex 项目今日连发三个 alpha 版本（rust-v0.173.0-alpha.2/3/4），表明 Rust SDK 正在积极迭代中。本周期以关键平台缺陷为主——Windows 和 macOS 用户均报告最新版桌面应用出现了阻断启动的回归问题，其中 macOS 壁纸色偏移崩溃引发 53 条评论，Windows 蓝牙听写故障则跨越多个版本。另一方面，今日合并了 19 个 pull request，包括工具调用追踪、OAuth 启动协议、MCP 服务预热等重要改进。

---

## 2. 发布版本

| 版本 | 更新说明 |
|---------|---------|
| `rust-v0.173.0-alpha.4` | Alpha 发布；无变更日志 |
| `rust-v0.173.0-alpha.3` | Alpha 发布；无变更日志 |
| `rust-v0.173.0-alpha.2` | Alpha 发布；无变更日志 |

连续发布多个 alpha 版本表明 Rust SDK 处于活跃迭代状态。上述版本均未提供详细变更说明。

---

## 3. 热门议题

### 🔴 高影响平台缺陷

**1. [Windows Computer Use：截图后 capture 访问权限和显示边框未关闭](https://github.com/openai/codex/issues/57101)**
- **评论数：** 75 | **反应：** 👍 13
- **影响分析：** 影响 Windows 平台旗舰功能 Computer Use；UI 元素在产生截图的轮次后仍然存在，暗示 browser-use 插件存在资源清理缺陷。
- **影响范围：** 26.1021 版本的用户体验回归问题；75 条评论表明问题正在积极调查中。

**2. [[macOS] Codex 应用 26.1117.31558 在壁纸色偏移回退时崩溃](https://github.com/openai/codex/issues/62650)**
- **评论数：** 53 | **反应：** 👍 16
- **影响分析：** 阻断启动的回归问题，影响包括苹果自带壁纸在内的多种常见 macOS 壁纸配置。用户需回退到特定变通方案才能正常使用。
- **影响范围：** 阻断受影响用户的工作效率；变通方案可能要求用户放弃喜欢的壁纸。

**3. [Windows 桌面应用在应用内浏览器路由卸载时崩溃](https://github.com/openai/codex/issues/42006)**
- **评论数：** 13 | **反应：** 👍 1
- **影响分析：** 单日报告了五次可复现崩溃，Crashpad 报告一致指向路由卸载时的竞态条件。
- **影响范围：** 浏览器使用工作流程的稳定性问题。

**4. [macOS：底部面板设置消失，更新后终端布局被强制改为右侧](https://github.com/openai/codex/issues/62234)**
- **评论数：** 8 | **反应：** 👍 11
- **影响分析：** 布局回归问题，影响工作效率；用户会丢失已保存的面板配置。
- **影响范围：** 中等，但 11 个 👍 表明此问题影响面较广。

### ⚡ 功能与用户体验问题

**5. [🩹 从 Codex 主界面恢复存档对话的访问功能](https://github.com/openai/codex/issues/27207)**
- **评论数：** 9 | **反应：** 👍 18
- **影响分析：** 看起来是回归问题——两周前存档对话还可以在主界面访问，现在却隐藏到了设置菜单下。用户无法高效浏览存档的对话。
- **社区信号：** 18 个 👍 表明这是一个广泛存在的痛点。

**6. [Linear Agent SDK 无法启动云端代理](https://github.com/openai/codex/issues/20181)**
- **评论数：** 10 | **反应：** 👍 2
- **影响分析：** 阻断将 Codex 与 Linear 项目管理集成的企业工作流程；错误信息显示无可用工作区环境。

**7. [持久化云端线程没有删除操作](https://github.com/openai/codex/issues/50618)**
- **评论数：** 8 | **反应：** 👍 1
- **影响分析：** 云端 app-server 拒绝 `thread/delete` 请求并返回错误 `-32601`，导致孤立线程无法清理。

**8. [dot 云端浏览器：Google Cloud Console 返回"Site Unavailable"](https://github.com/openai/codex/issues/49754)**
- **评论数：** 6 | **反应：** 👍 1
- **影响分析：** 阻断云端浏览器中访问 GCP Console 这一关键企业工作流程，而本地 Chrome 正常工作——暗示 Codex 浏览器使用的 DNS 或代理配置存在问题。

**9. [macOS：云端存档对话无标题，取消存档后返回"thread not found"](https://github.com/openai/codex/issues/56642)**
- **评论数：** 6 | **反应：** 👍 0
- **影响分析：** 云端同步的数据完整性问题；存档对话变得无法访问，留下幽灵记录。

**10. [[Windows 应用] 本地 Work 执行器每秒重试确定性打包插件复制失败](https://github.com/openai/codex/issues/55440)**
- **评论数：** 5 | **反应：** 👍 2
- **影响分析：** 报告了 213,836 次重试——表明存在静默无限循环，持续消耗资源却未通知用户。

### 其他值得关注的议题

| 议题 | 平台 | 摘要 | 评论数 |
|-------|----------|---------|----------|
| [#62877](https://github.com/openai/codex/issues/62877) | macOS | Codex Remote Control 卡住/不可用 | 4 |
| [#62733](https://github.com/openai/codex/issues/62733) | Windows | 更新后蓝牙听写失败：clock=unavailable | 5 |
| [#62731](https://github.com/openai/codex/issues/62731) | Windows | 桌面应用启动时挂起（MoAppHang c6e5） | 3 |
| [#59398](https://github.com/openai/codex/issues/59398) | 跨平台 | 缓存上下文时配额约 5 分钟达到 98% | 3 |

---

## 4. 重要 PR 进展

### 🛠️ 核心基础设施

**1. [为分发的工具调用使用共享的 `ToolCallId`](https://github.com/openai/codex/pull/62888)**
- 引入专用 Rust 类型表示分发标识，使分发调用、模型可见的 Responses 调用和 Code Mode 每单元格运行时调用在 API 中的区别变得明确。

**2. [追踪显式网页搜索模式并在 SDK 中暴露 indexed](https://github.com/openai/codex/pull/62884)**
- 记录显式 `web_search` 设置是否与有效模式匹配；在 TypeScript SDK 中暴露 `indexed`，提升搜索状态可见性。

**3. [用最新的推理移除状态标记用户报告](https://github.com/openai/codex/pull/62883)**
- 根据最新采样请求在实时线程上设置 `cot_removed` 标签；提升重度推理工作流程的透明度。

**4. [跨网络配置层组合托管域名规则](https://github.com/openai/codex/pull/62882)**
- 允许 `[permissions.network]`、`[network_proxy]` 和 `[experimental_network]` 表跨源组合，解决需求来自不同配置层时的冲突。

**5. [请求 Responses API 省略回显的工具目录](https://github.com/openai/codex/pull/62863)**
- 通过设置 `x-codex-exclude: tools` 请求头减小载荷大小，避免冗余的工具目录传输。

**6. [在 ThreadStore 中添加有界条目读取](https://github.com/openai/codex/pull/31052)**
- 在 `ListItemsParams` 中添加可选的时间戳边界；为达到限制的实现添加 `ResourceExhausted` 错误。

### 🔐 认证与安全

**7. [在 app-server 启动时启用配置服务器 OAuth](https://github.com/openai/codex/pull/62867)**
- 允许在 app-server 启动前进行 OAuth 登录，实现组织要求设置的加载和验证。

**8. [定义配置服务器的启动 OAuth 协议](https://github.com/openai/codex/pull/62859)**
- 在 `account/gatewayOAuth/login` 中添加 `target` 字段；将 `{"kind":"configServer"}` 定义为启动 OAuth 目标。

**9. [TUI WebRTC 调用使用运行时认证](https://github.com/openai/codex/pull/62870)**
- 确保 TUI 本地创建的 WebRTC 调用在启用时使用运行时代理认证。

### ⚡ 性能与可靠性

**10. [准备工具模式时减少内存分配](https://github.com/openai/codex/pull/62849)**
- 在测量模式大小时消除不必要的克隆和 JSON 缓冲区分配；反序列化模式以直接进行预算检查。

**11. [在云端目录刷新时预热 MCP 服务器](https://github.com/openai/codex/pull/62876)**
- 在云端 skill 查找刷新期间排队 MCP 预热，即使刷新被取消也能防止首次响应延迟。

**12. [将监护响应重采样限制为一次重试](https://github.com/openai/codex/pull/62852)**
- 防止重试的响应也满足重采样条件时的无限循环；在重试调度时消耗原始提示词。

**13. [将 Windows 沙箱所有者恢复推迟到登录时](https://github.com/openai/codex/pull/62865)**
- 在会话变更信号上重试恢复，而非在会话/令牌缺失时启动失败。

### 🔧 开发者体验

**14. [允许新线程选择退出 Daybreak 传播](https://github.com/openai/codex/pull/62879)**
- 允许 app-server 客户端在服务器配置启用时为准备稍后使用的线程逐个跳过 Daybreak 传播。

**15. [在代理概览中保持云端线程状态最新](https://github.com/openai/codex/pull/62858)**
- 使用云端流通知在未附加对话流时更新线程状态并刷新代理概览中的线程元数据。

**16. [将内置 Default 模式指令推迟到 Plan 模式之后](https://github.com/openai/codex/pull/62857)**
- 在线程使用 Plan 模式之前省略绑定的 Default 模式指令，防止不必要的协作模式提示。

**17. [在 app-server 图像生成项中保留每图像元数据](https://github.com/openai/codex/pull/62871)**
- 将后端 `image_metadata` 作为可选的 `imageMetadata` 暴露在 app-server 图像生成项中。

**18. [为显式监护审查返回评估结果](https://github.com/openai/codex/pull/62846)**
- 要求每次成功的 `thread/guardianReview` 请求都必须包含 `assessment`，确保调用方收到判定结果。

**19. [为 HTTP 追踪和指标专门化 OpenTelemetry 提供者](https://github.com/openai/codex/pull/62854)**
- 从通用提供者中分离 OTLP/HTTP 追踪导出，减少未使用信号的分配。

---

## 5. 热门讨论

### 💡 创意想法

**[Codex 中的记忆功能](https://github.com/openai/codex/discussions/12567)** — *42 条评论，14 个 👍*
关于为 Codex 添加记忆能力的详细提案。作者正在积极征求社区对两个关键问题的意见：(1) 记忆来源答案的引用重要性（1-5 分制），(2) 用户对记忆范围的偏好。这是一个高需求的特性，社区参与度很高。

**[ChatGPT Projects 需要一个规范的项目状态层来支撑严肃的技术工作流程](https://github.com/openai/codex/discussions/33353)** — *2 条评论，1 个 👍*
专业用户体验报告，请求添加持久化项目状态层以改善高级多日工作流程的连续性。

**[综合功能需求：实时集成、安全登录和低延迟计算机使用](https://github.com/openai/codex/discussions/44795)** — *1 条评论，1 个 👍*
请求与日常使用的服务和应用程序进行一等集成，以实现可靠的任务完成。

**[支持在独立窗口中打开临时对话](https://github.com/openai/codex/discussions/62661)** — *1 条评论，1 个 👍*
窗口管理灵活性功能需求，以支持在运行长时间对话的同时处理其他工作。

### ❓ 问答

**[如何滚动查看对话历史？](https://github.com/openai/codex/discussions/2503)** — *10 条评论，38 个 👍*
关于 Codex CLI 中终端滚动查看长响应的常见问题。高反应数（38 个 👍）表明这是一个广泛存在的摩擦点，需要更好地宣传键盘快捷键。

**[如何使用不同模型供应商协调本地和远程编码代理？](https://github.com/openai/codex/discussions/37960)** — *10 条评论，1 个 👍*
讨论跨不同机器和代码库协调 Claude 系列和 Codex/GPT 系列代理的问题。

### 🎮 作品展示

**[Linux 上的 Codex CLI 在任务完成时发出铃声/音频通知](https://github.com/openai/codex/discussions/1303)** — *2 条评论，8 个 👍*
用户自制的解决方案，为 Linux 上的 Codex CLI 添加音频通知，包括远程 SSH 终端。在长时间任务运行期间解放开发者注意力。

**[使用 Codex 检查已发布证据的变化](https://github.com/openai/codex/discussions/62494)** — *3 条评论，1 个 👍*
LrrK Agent Desk 工作流程，使用 Codex 配合公共 MCP 服务器追踪已发布证据的变化。

**[Ragmir：为 Codex 提供代码、PDF 和 Office 文件的引用项目上下文](https://github.com/openai/codex/discussions/61475)** — *1 条评论，1 个 👍*
开源 AGPL-3.0 检索层，为 Codex 索引项目代码、规范、PDF 和 Office 文件以供引用。

**[我做了一个 Chrome 扩展来告诉 Codex 我指的是哪个按钮](https://github.com/openai/codex/discussions/62463)** — *1 条评论，1 个 👍*
元素选择器 Chrome 扩展，使 Codex Computer Use 能够精确定位按钮选择。

**[Cloud Alter Ego：一个记忆供所有 AI 对话使用](https://github.com/openai/codex/discussions/61997)** — *1 条评论，1 个 👍*
跨平台工具，在 ChatGPT、Claude 和其他 AI 助手之间提供记忆持久化。

**[TernaryCode：跨所有项目查看正在等待你的 Codex 会话](https://github.com/openai/codex/discussions/62426)** — *1 条评论，1 个 👍*
原生 Rust 应用（非 Electron），适用于 macOS/Windows/Linux，显示跨项目待处理的 Codex 会话。

---

## 6. 功能需求趋势

汇总 Issues 和 Discussions 中的信号，揭示以下主导功能方向：

| 趋势 | 证据 |
|-------|----------|
| **持久化记忆与跨对话上下文** | #12567（记忆提案，42 条评论），#61997（Cloud Alter Ego），#51228（连续性架构） |
| **改进的对话/线程管理** | #27207（存档对话 UI），#50618（线程删除），#62661（临时对话窗口） |
| **跨平台远程可靠性** | #62877，#62472，#61904，#29809（多个远程控制问题） |
| **增强的 Computer Use** | #57101，#42006，#49754（浏览器使用缺陷），#44795（集成需求） |
| **更好的 CLI 体验** | #2503（滚动交互），#1303（音频通知） |
| **项目级工作流程** | #33353（项目状态层），#62426（会话追踪），#61475（项目索引） |
| **更好的配额/用量可见性** | #59398，#62880（配额耗尽问题） |

---

## 7. 开发者痛点

### 🐛 平台稳定性（最高优先级）

1. **macOS 启动崩溃：** 26.1117.31558 版本在某些壁纸配置下启动时崩溃，影响包括苹果自带壁纸在内的常见 macOS 设置。

2. **Windows 远程与蓝牙：** 26.1117.x 版本多个回归问题影响蓝牙听写、应用挂起和远程控制功能。

3. **Windows 启动挂起：** `spawnSync` WSL PATH 探测无超时机制，导致启动时无限期挂起。

### 📦 云端同步与会话管理

4. **存档对话访问：** 回归问题移除了主界面对存档对话的访问；用户需通过设置菜单导航。

5. **云端线程状态：** 云端同步会话中出现标题缺失、取消存档失败和幽灵记录。

6. **远程历史为空：** iOS 远程历史显示无会话，而 Windows 正确显示同一主机的会话。

### ⚙️ 本地执行摩擦

7. **无限重试循环：** 本地 Work 执行器重试失败 213,000+ 次而未通知用户。

8. **Sites 发布被阻断：** Git DNS 解析失败阻断 Windows 上的 Codex Sites 工作流程。

### 💰 资源管理

9. **配额可见性：** 缓存上下文时配额快速耗尽；用户对使用模式缺乏清晰认知。

10. **MCP 服务延迟：** 云端 skill 查找缓慢延迟 MCP 启动，即使插件目录已就绪（#62876 已修复）。

---

**简报结束**

*数据来源：github.com/openai/codex，2026-11-21*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the content to natural, fluent Simplified Chinese
2. Preserve all Markdown structure (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
5. Keep issue/PR references like #12345 and their link text as-is
6. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output

Let me translate this carefully, section by section.

The content is a community digest for the Gemini CLI project. I need to use technical Chinese appropriate for a developer newsletter.

Let me go through it:

---

# Gemini CLI 社区动态

## 2026-11-21

---

### 1. 今日要闻

最新夜间版本 **v0.71.0-nightly.20261121.geecccfcd5** 包含两个关键修复：改进了 Windows 系统上波浪号（`~`）和反斜杠（`\`）的 home 相对路径处理，以及修正了会话恢复逻辑——现在优先恢复最近一次*活动*的会话而非最近一次*启动*的会话。今日还合并了大量高优先级 PR，涵盖模型调用超时、粘贴敏感信息泄露检测、危险命令识别等关键可靠性问题——这表明项目正强劲推进 v0.71 稳定版发布。

---

### 2. 版本发布

**v0.71.0-nightly.20261121.geecccfcd5** (2026-11-21)


我发现这个版本引入了两个重要的技术改进。首先是针对 Windows 平台的路径处理机制，解决了波浪号和反斜杠在不同操作系统中的兼容性问题。其次是对会话恢复逻辑的精细调整，确保系统能够更准确地追踪和恢复用户最近的会话状态。这些改动体现了项目对细节的持续优化和对用户体验的重视。

| 变更 | 说明 |
|--------|-------------|
| **Windows 路径展开修复** | 修复了在 Windows 系统上对 home 相对路径的波浪号（`~`）和反斜杠（`\`）处理不一致的问题。 |
| **会话恢复逻辑优化** | 调整了恢复策略，优先恢复最近一次*活动*的会话，而非最近一次*启动*的会话，提供更直观的交互体验。 |

---

### 3. 热门 Issue

我注意到这里收集了一系列用户反馈的问题，涵盖了从路径处理到会话管理的多个技术细节。这些问题反映了开发团队对产品细节的持续关注和改进。

| # | Issue | 优先级 | 影响范围 | 社区反馈 |
|---|-------|----------|----------------|-------------------|
| **#22323** | [子 Agent 在 MAX_TURNS 后恢复被报告为 GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 当子 Agent 触发 `MAX_TURNS` 限制时，系统错误地将状态标记为 `"success"` 并以 `"GOAL"` 作为终止原因，这会掩盖实际错误并隐藏中断信息。 | 13 条评论，2 👍 |
| **#21409** | [通用 Agent 挂起问题](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | Agent 在执行简单操作（如创建文件夹）时会无限期挂起，有时需要超过一小时才能手动取消。这严重影响了自动化使用场景的可靠性。 | 8 条评论，8 👍 |
| **#21763** | [Bug 报告未提供子 Agent 上下文信息](https://github.com/google-gemini/gemini-cli/issues/21763) | P1 | 执行 `/bug` 命令提交问题报告时，子 Agent 的执行上下文信息丢失，导致多 Agent 协作工作流的问题排查变得极为困难。 | 2 条评论，0 👍 |
| **#22186** | [get-shit-done 输出钩子导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | 输出钩子在生成最终总结时发生崩溃，使得任务完成工作流的关键功能完全失效。 | 3 条评论，0 👍 |
| **#21968** | [Gemini 对技能和子 Agent 的利用不足](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 系统配置了自定义技能和子 Agent，但模型很少主动调用它们，导致用户必须反复明确指示。 | 7 条评论，0 👍 |
| **#24246** | [超过 128 个工具时报 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | 当工具数量超过约 128 个时，用户会遇到 API 400 错误，表明工具的打包和过滤机制存在严重缺陷。 | 3 条评论，0 👍 |
| **#20079** | [符号链接的 Agent 文件无法识别](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | 通过 `~/.gemini/agents/` 下的符号链接定义的 Agent 被完全忽略，用户无法通过符号链接组织 Agent 文件。 | 4 条评论，0 👍 |
| **#22465** | [Gemini CLI 在创建 vite 应用时卡在交互提示符](https://github.com/google-gemini/gemini-cli/issues/22465) | P2 | 系统提示初始化 Vite 应用时，Agent 在交互式设置提示符处挂起，无法优雅地处理这类场景。 | 2 条评论，0 👍 |
| **#23571** | [模型在随机位置创建临时脚本](https://github.com/google-gemini/gemini-cli/issues/23571) | P2 | 当被限制执行 Shell 命令时，模型会在目录中散布临时编辑脚本，导致提交前需要额外的清理工作。 | 3 条评论，0 👍 |
| **#22672** | [抑制破坏性行为](https://github.com/google-gemini/gemini-cli/issues/22672) | P2 | 模型偶尔会使用不安全的命令如 `git reset --force` 或破坏性数据库操作，而非选择更安全的替代方案，需要更完善的安全检测机制。 | 3 条评论，1 👍 |

---

### 4. 关键 PR 进展

**近期合并**

我发现了一系列针对模型调用、命令执行和安全性的重要改进。这些变更涉及超时处理、危险命令识别、敏感信息保护等多个关键领域。

| PR | 标题 | 影响 |
|----|-------|--------|
| **#30174** | [阻止响应体超时中断/重放长耗时模型调用](https://github.com/google-gemini/gemini-cli/pull/30174) | 修复了关键可靠性问题：当流式调用涉及长耗时思考（超过 5 分钟）时，undici 超时会导致调用被中止并最多重试 3 次。 |
| **#30171** | [无

论标志位顺序如何都检测递归强制删除](https://github.com/google-gemini/gemini-cli/pull/30171) | 扩展了 `isDangerousCommand` 检测范围，现在能识别 `rm -rf`、`rm -R -f`、`rm -vrf`、`rm --recursive --force` 等所有变体，而不仅限于 `rm -rf`。堵住了危险命令绕过漏洞。 |
| **#30169** | [防止粘贴内容携带敏感信息](https://github.com/google-gemini/gemini-cli/pull/30169) | 安全修复：阻止粘贴的 Shell 记录自动附加 SSH 私钥或其他敏感信息到模型请求中。 |
| **#30170** | [防止本地子 Agent 等待停滞的模型调用](https://github.com/google-gemini/gemini-cli/pull/30170) | 为本地 Agent 执行器添加了每轮超时限制，避免在模型调用停滞时等待超过 3 分钟。 |
| **#30175** | [为所有模型应用本地子 Agent 的 generateContentConfig](https://github.com/google-gemini/gemini-cli/pull/30175) | 确保本地子 Agent 为所有模型值（而不仅是 `auto`）正确应用生成配置参数，包括 temperature、topP、topK 和 thinkingConfig。 |
| **#30173** | [在不信任目录中加载 ~/.gemini/.env](https://github.com/google-gemini/gemini-cli/pull/30173) | 解决了使用工作区账户时的登录循环问题，通过在非可信目录中恢复 `~/.gemini/.env` 读取功能并使用正确的允许列表机制。 |
| **#30172** | [在会话记录中为每个工具调用 ID 仅保留一个结果](https://github.com/google-gemini/gemini-cli/pull/30172) | 消除了会话保存和模型请求中的重复工具结果，解决了 `--resume` 功能的重复执行问题。 |

**正在审查中**

| PR | 标题 | 改进内容 |
|----|-------|------------|
| **#30268** | [在 YOLO 模式下遵守污点和构建文件检查规则](https://github.com/google-gemini/gemini-cli/pull/30268) | 确保 `--approval-mode=yolo`（`-y`）标志能够绕过 Shell 污染检查和构建文件风险提示，以及在自主运行模式下的 `POLICY_VIOLATION` 拒绝。 |
| **#30281** | [在 Node 26 上遵守配置的请求超时时间](https://github.com/google-gemini/gemini-cli/pull/30281) | 升级 undici 到 7.30.2 版本以修复与 Node 26 内置 fetch 的全局调度器符号兼容性问题。 |
| **#30267** | [通过 CLI 可执行文件路径检测本地 git clone 安装](https://github.com/google-gemini/gemini-cli/pull/30267) | 防止在从源代码目录外运行自动更新时触发意外的 `npm install -g` 行为。 |
| **#30279** | [在历史记录中保留修整后的函数调用名称](https://github.com/google-gemini/gemini-cli/pull/30279) | 通过保留函数调用名称中的空白字符修整，解决构造响应时出现的 400 `INVALID_ARGUMENT` 错误。 |
| **#30278** | [解释 Gemini API 请求失败原因](https://github.com/google-gemini/gemini-cli/pull/30278) | 为 Gemini API 失败添加网络故障排除指南，区分传输层错误和 503 等 HTTP 响应问题。 |
| **#30277** | [改进沙箱权限拒绝检测](https://github.com/google-gemini/gemini-cli/pull/30277) | 增强对 POSIX 沙箱拒绝的检测能力，并改善在受限或容器化执行环境中的处理逻辑。 |
| **#30273** | [统一退出码映射和致命错误层级](https://github.com/google-gemini/gemini-cli/pull/30273) | 在 `@google/gemini-cli-core` 中集中管理退出码，用一致的 `Fatal*Error` 层级结构替代硬编码的数字字面量。 |

---

### 5. 功能需求趋势

分析 50 个开放 Issue 后，我发现了这些主要的功能方向：

| 主题 | 说明 | 相关 Issue |
|-------|-------------|------------|
| **AST 感知工具** | 多个提案建议基于 AST 进行文件读取、搜索和代码库映射，以减少 token 消耗并提高精度。 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) |
| **子 Agent 编排** | 强烈需求改进子 Agent 利用率、共享内存、并行协作和轨迹可见性（如通过 `/chat share`）。 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#18287](https://github.com/google-gemini/gemini-cli/issues/18287) |
| **代码库调查器改进** | 请求重命名、重构和改进代码库调查器 Agent，改进上下文边界管理。 | [#18282](https://github.com/google-gemini/gemini-cli/issues/18282), [#18283](https://github.com/google-gemini/gemini-cli/issues/18283), [#20195](https://github.com/google-gemini/gemini-cli/issues/20195) |
| **零依赖沙箱** | 提议利用模型原生 bash 亲和性，通过 OS 沙箱和执行后意图路由，减少外部依赖。 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| **持久化任务跟踪** | 从上下文内 Todo 跟踪转向基于文件的 CRUD 任务管理，避免上下文腐蚀和会话内存丢失。 | [#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) |
| **自描述 Agent** | 让 CLI 能够准确地向用户描述自身的机制、快捷键和 CLI 标志。 | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) |

---

### 6. 开发者痛点

从 Issue 和 PR 活动中浮现的反复出现的痛点：

| 痛点 | 频率 | 证据 |
|------------|-----------|----------|
| **Agent 挂起和超时** | 🔴 高 | 多个 P1 Issue（#21409、#30170）和 PR #30174 确认了模型调用停滞导致的无限挂起或过度等待问题。 |
| **子 Agent 上下文丢失** | 🔴 高 | Bug 报告、会话恢复和输出钩子都未能保留子 Agent 执行上下文（#21763、#22323、#22186）。 |
| **工具范围错误** | 🟠 中 | 大规模工具集导致的 400 错误（#24246）和缺失的符号链接 Agent 检测（#20079）表明工具打包逻辑存在缺陷。 |
| **危险命令安全性** | 🟠 中 | `rm -rf` 绕过（#30171）和更安全 git/数据库操作请求（#22672）凸显了安全检测机制的持续缺口。 |
| **敏感信息泄露风险** | 🟠 中 | PR #30169 修复了一个关键路径问题——粘贴记录可能自动附加敏感信息，反映了安全意识的提升。 |
| **交互式提示符处理** | 🟡 较低 | Vite 应用脚手架挂起（#22465）和类似交互场景暴露了非流式提示符处理的不足。 |
| **工作区级策略** | 🟡 较低 | 按工作区跟踪策略的请求（#18397）与全局策略的对比表明多项目工作流存在局限。 |

---

*生成日期：2026-11-21 | 数据来源：[github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*</think>



</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate all the content while maintaining the Markdown structure, preserving technical terms, URLs, issue numbers, version tags, etc.

Let me translate this section by section, maintaining the technical register and natural Chinese expression.

Key points to remember:
- Keep all headings, tables, lists, formatting
- Preserve URLs, issue numbers, version tags
- Keep technical terms like MCP, OAuth, TTL, etc.
- Use natural technical Chinese
- No markdown fences around the output
- Output ONLY the translation
</think>


# GitHub Copilot CLI 社区速报

**日期：** 2026-11-21
**仓库：** github.com/github/copilot-cli

---

## 1. 今日要闻

v1.0.115 补丁系列修复了插件初始化竞态条件和 Windows 进程清理问题。一项重要的安全增强使 ACP 编辑器能够在支持表单的场景下发送结构化澄清问题。社区关注焦点集中在 Windows 平台与 Cortex XDR 的集成问题，以及会话管理的可靠性。

---

## 2. 版本更新

### v1.0.115-4（最新版）
**新增：**
- 在支持表单的 ACP 编辑器中启用结构化澄清问题

**修复：**
- 修复插件初始化竞态问题，避免阻塞新会话或导致现有会话恢复失败
- 在 Windows 上，清理 Git 命令、钩子和语言服务器检查的子进程

### v1.0.115-3
**修复：**
- 保持 @ 提及选择器可见，直到空搜索执行完毕，恢复其关闭时的常规 Ctrl+Y 和 Tab 行为

### v1.0.115-2
**新增：**
- 默认启用 Windows 沙盒包查询（可通过 `sandbox.userPolicy.capabilities: []` 禁用）
- 允许在沙盒化命令中查询特定 macOS Mach 服务，通过 `sandbox.userPolicy.seatbelt.extraMachLookups` 配置

---

## 3. 热门 Issue

### 🔴 平台稳定性

**#5478 - Cortex XDR 的 "parent_process_spoofing" 在 Copilot CLI 生成 git 进程时终止启动 shell** *(8 条评论, 1 👍)*
在 Windows 上，当 Copilot 在 Git 仓库中启动时运行 git 命令，Cortex XDR 会用 parent_process_spoofing 违规终止 cmd/PowerShell，实际上导致 shell 崩溃。这对企业级 Windows 环境是严重的阻断性问题。
[Issue #5478](https://github.com/github/copilot-cli/issues/5478)

**#5071 - Windows /upgrade 绕过 winget，导致程序与功能中有残留条目** *(1 条评论, 0 👍)*
内置更新程序在 Windows 上绕过 winget，直接覆盖命令别名而不更新包管理器记录。这在系统工具中造成版本混乱。
[Issue #5071](https://github.com/github/copilot-cli/issues/5071)

**#4632 - WorkIQ OAuth 回调在 Copilot CLI 运行于 WSL 时返回 404** *(0 条评论, 0 👍, 已关闭)*
OAuth 认证在 Windows 原生环境下成功，但在 WSL2 内部失败。回调路由似乎在 WSL 到 Windows 的网络路径中中断。
[Issue #4632](https://github.com/github/copilot-cli/issues/4632)

---

### 🔐 认证与权限

**#4203 - 远程 MCP OAuth：过期 access token 触发交互式重新认证而非静默刷新** *(5 条评论, 5 👍)*
当远程 MCP 服务器的缓存 access token 过期时，Copilot CLI 将其视为需要全新的交互式登录并丢弃该服务器的工具——即使存在有效的 refresh token。应该实现 RFC 6749 §6 的 refresh token grant 流程。
[Issue #4203](https://github.com/github/copilot-cli/issues/4203)

**#5066 - 辅助权限回归：过多命令需要审批** *(5 条评论, 1 👍, 已关闭)*
用户反馈辅助权限模式现在对原本应自动批准的良性命令也要求审批（如在当前目录中搜索文件的 PowerShell 命令）。社区怀疑是权限启发式算法的近期回归问题。
[Issue #5066](https://github.com/github/copilot-cli/issues/5066)

---

### 📦 MCP 与插件

**#5220 - 为 Claude 模型提供 1 小时 prompt 缓存 TTL 选项** *(4 条评论, 17 👍)*
Claude 5 分钟的默认缓存 TTL 在正常交互使用期间就会过期，强制重新处理整个对话。用户强烈请求可配置的缓存 TTL（5 👍 反应表明需求显著）。
[Issue #5220](https://github.com/github/copilot-cli/issues/5220)

**#5540 - Copilot CLI 对 task-required 工具不发送 MCP Tasks 增强** *(0 条评论, 0 👍)*
MCP Tasks 支持在初始化时声明，但在调用带有 `taskSupport: "required"` 的工具时实际并未发送。MCP 服务器拒绝调用，不启动任何任务。
[Issue #5540](https://github.com/github/copilot-cli/issues/5540)

**#5440 - Agent 插件 1.0：`.instructions.md` 文件被静默忽略** *(1 条评论, 1 👍)*
使用 1.0.0 模式格式打包插件时，Copilot CLI 加载了 skills、MCP 服务器和 agents，但静默忽略了 `.instructions.md` 文件和 `com.github.copilot/rules/` 中的 `applyTo` frontmatter。
[Issue #5440](https://github.com/github/copilot-cli/issues/5440)

---

### 💾 会话与状态

**#4805 - 会话变得无法恢复：过期的 `inuse.<pid>.lock` 从未被回收** *(4 条评论, 0 👍)*
保存的会话由于崩溃主机的陈旧锁文件而无法重新打开。会话数据完好，但生命周期管理从未清理孤立的锁。
[Issue #4805](https://github.com/github/copilot-cli/issues/4805)

**#5468 - GitHub Mobile 和 github.com 上远程控制失败** *(2 条评论, 1 👍)*
所有客户端上本地 Copilot CLI 会话的远程控制均失败。会话同步并显示，但控制操作失败，报错 "sealed value must bind this connection's challenge"。
[Issue #5468](https://github.com/github/copilot-cli/issues/5468)

---

### ⚠️ 关键安全

**#5541 - Agent 在 WSL 中执行 `rsync -a --delete <dir>/ /` 擦除了用户驱动器** *(0 条评论, 0 👍)*
内联 bash 脚本从 PowerShell 传递时出现的引用故障导致空变量，最终执行 `rsync -a --delete <dir>/ /` 不可挽回地擦除了用户驱动器。这揭示了跨 shell 命令处理中危险的边缘情况。
[Issue #5541](https://github.com/github/copilot-cli/issues/5541)

---

## 4. 关键 PR 进展

**过去 24 小时内无 PR 合并或更新。**

过去一周已关闭的 PR 包括 MCP OAuth 回调端口处理、`text/plain` 资源 blob 透传，以及环境密钥占位符注入的维护修复。

---

## 5. 功能请求趋势

通过对 open issue 和社区反馈的分析，揭示出以下主导功能方向：

| 主题 | 描述 | 证据 |
|-------|-------------|----------|
| **可配置 Prompt 缓存** | 为 Claude 模型提供超出 5 分钟默认值的更长 TTL 选项 | #5220 (17 👍) |
| **增强 ACP 扩展** | 为自定义客户端提供类似 `ask_user`/`ask_question` 的扩展方法 | #2109 (9 👍) |
| **跨平台一致性** | Windows、WSL、macOS 行为统一 | #4632, #5071, #5478 |
| **会话韧性** | 更好的锁管理、崩溃恢复、会话恢复 | #4805, #5535 |
| **权限简化** | 无需逐仓库重复的用户级持久规则 | #5539 |
| **MCP 协议完整性** | Tasks 增强、协议版本回退、大小写不敏感的服务匹配 | #5540, #5039, #5050 |
| **CI/非交互可靠性** | MCP 服务器启动失败时使用更严格的退出码 | #3064 (已关闭) |

---

## 6. 开发者痛点

### 反复出现的困扰

1. **Windows 集成不稳定**
   - 端点保护（Cortex XDR）与 git 子进程生成冲突
   - WSL2 OAuth 回调路由失败
   - Winget 升级绕过包管理器记录

2. **MCP 服务器可靠性**
   - OAuth token 刷新未遵循 RFC 6749 refresh token grant
   - 协议版本协商缺乏回退机制（版本不匹配时导致 HTTP 400）
   - required-task 工具不发送 Tasks 增强

3. **会话生命周期问题**
   - 崩溃后的陈旧锁文件阻止会话恢复
   - 跨客户端远程控制失败（移动端和网页端）
   - 长生命周期会话中模型变更应用不确定

4. **权限系统混乱**
   - 辅助模式对良性命令过度触发审批
   - 缺少简单的用户级只读规则持久化方式
   - 权限提示重置活动中的问题对话框

5. **启动性能**
   - 同步加载 MCP 服务器和插件阻塞 CLI 启动
   - 大型仓库环境加剧延迟

6. **终端体验缺陷**
   - 新输出到达时时间线滚动跳转到前方
   - `/diff` 缺乏多行注释支持
   - `/ask` 和 `/btw` 回答在对话框保持打开时变空白

---

*本速报基于 2026-11-21 github.com/github/copilot-cli 的活动生成*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while preserving the Markdown structure and keeping technical terms, URLs, code references, etc. in their original form.

Let me translate this carefully:

---

# OpenCode Community Digest — 2026-11-21

## 今日要闻

Windows 桌面端今天迎来大规模功能更新，贡献者 Hona 提交了 8 个 PR，涵盖任务栏集成、窗口状态管理和系统交互改进等多个领域。一个关键的快照存储缺陷浮出水面——影响拥有大量 git-ignore 文件目录的用户。与此同时，免费套餐使用问题持续引发社区热议，相关讨论已超过 400 条。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门议题

| # | 标题 | 作者 | 评论数 | 重要性 |
|---|-------|--------|----------|----------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | **[zen] Free tier issues: read this first** | neriousy | 400 | 免费套餐故障集中追踪帖，涵盖用量限制未重置、订阅弹窗、OpenCode Desktop 报错等问题。社区讨论活跃。 |
| [#64073](https://github.com/anomalyco/opencode/issues/64073) | **[FEATURE] Restore Foreground Subagent Execution** | wangzheruoyun | 24 | 子代理执行可见性功能请求，表明用户对多任务 UX 有较强需求。 |
| [#60839](https://github.com/anomalyco/opencode/issues/60839) | **TUI window returns to start screen after sleep/wake** | adamralph | 7 | 系统唤醒后会话连续性中断；PR #65311 正在修复中。 |
| [#65156](https://github.com/anomalyco/opencode/issues/65156) | **Qwen2.5-Coder 1.5B returns empty analyze tool calls with Ollama** | umastrodev12 | 7 | 热门本地模型的集成问题；已 CLOSED。 |
| [#52067](https://github.com/anomalyco/opencode/issues/52067) | **Edit tool reports "Could not find oldString" intermittently** | danse | 6 | 核心编辑可靠性问题；阻碍文件修改流程的顺畅性。 |
| [#64117](https://github.com/anomalyco/opencode/issues/64117) | **MCP notifications/tools/list_changed doesn't surface new tools** | CurelM | 4 | Windows 上的 MCP 服务器集成缺陷；新启用的工具无法被调用。 |
| [#65127](https://github.com/anomalyco/opencode/issues/65127) | **Snapshots capture includes git-ignored and >2 MiB files, packs 90 GB** | pextufvesson | 4 | 存储膨胀漏洞；快照功能未遵守 gitignore 和大小限制。 |
| [#55676](https://github.com/anomalyco/opencode/issues/55676) | **Keybinds fail on non-Latin layouts** | belomord | 3 | 国际化问题；Ctrl+F 和字母快捷键对俄语等输入法失效。 |
| [#64573](https://github.com/anomalyco/opencode/issues/64573) | **Shell cmd escapes embedded double quotes on Windows** | Ashitaka-Laputa-IV | 3 | Windows Shell 集成缺陷；引号参数被转义为字面量。 |
| [#49887](https://github.com/anomalyco/opencode/issues/49887) | **EISDIR error on Windows git-bash** | bluelovers | 2 | 长期存在的 Windows 路径处理问题，涉及 git-bash 环境。 |

---

## 重点 PR 进展

| # | 标题 | 作者 | 类型 | 影响 |
|---|-------|--------|------|--------|
| [#65323](https://github.com/anomalyco/opencode/pull/65323) | **fix(desktop): reopen snapped, moved and minimized windows where they were on Windows** | Hona | Bug fix | 重启后恢复 Windows 窗口位置。 |
| [#65324](https://github.com/anomalyco/opencode/pull/65324) | **fix(desktop): draw Windows caption buttons in contrast theme's text colour** | Hona | Bug fix | 无障碍修复，提升高对比度主题下的可访问性。 |
| [#65322](https://github.com/anomalyco/opencode/pull/65322) | **fix(browser): keep every open tab in the strip** | Hona | Bug fix | 浏览器标签页现可正确保留在桌面会话中。 |
| [#65320](https://github.com/anomalyco/opencode/pull/65320) | **feat(desktop): open in Windows Terminal and list only installed apps on Windows** | Hona | Feature | Windows Terminal 集成和新应用选择器。 |
| [#65321](https://github.com/anomalyco/opencode/pull/65321) | **fix(desktop): resync server event streams after Windows resumes from sleep** | Hona | Bug fix | 解决 TUI 唤醒后的重连问题。 |
| [#65319](https://github.com/anomalyco/opencode/pull/65319) | **feat(desktop): flash the Windows taskbar button for requests that wait on you** | Hona | Feature | 待处理操作的桌面通知改进。 |
| [#65318](https://github.com/anomalyco/opencode/pull/65318) | **feat(desktop): show a count badge for sessions that need you on the Windows taskbar** | Hona | Feature | 任务栏会话感知徽章。 |
| [#65317](https://github.com/anomalyco/opencode/pull/65317) | **feat(desktop): show session status on Windows taskbar progress bar** | Hona | Feature | 任务栏会话进度可视化。 |
| [#65311](https://github.com/anomalyco/opencode/pull/65311) | **fix(tui): retry session reads after reconnect instead of returning to start screen** | halisyilboga | Bug fix | 修复 #60839；网络事件后保持 TUI 会话上下文。 |
| [#65168](https://github.com/anomalyco/opencode/pull/65168) | **feat(core): add experimental agent sandbox core architecture foundation** | jhmaster2000 | Feature | 代理隔离的未来基础；部分实现 #48411。 |

---

## 功能需求趋势

基于议题和 PR 分析：

1. **会话管理** — 多项关于会话归档、固定、隐藏、排序和树状视图组织的需求（#61746, #60009）。

2. **Windows 桌面集成** — 任务栏特性、窗口状态持久化和原生工具集成领域投入巨大（今日 8 个 PR）。

3. **自定义与无障碍** — 消息主题色自定义（#60169）、高对比度主题修复、非拉丁键盘布局支持。

4. **MCP 与工具发现** — 动态工具注册问题，notifications/tools/list_changed 协议存在缺陷。

5. **休眠/唤醒后稳定性** — TUI 和桌面端保持会话状态的一致性需求。

---

## 开发者痛点

1. **免费套餐可靠性** — 用量限制未重置、订阅弹窗错误显示等问题持续投诉；#59387 仍是主要反馈入口。

2. **Windows Shell 集成** — cmd.exe 引号转义（#64573）、路径参数返回空（#65214）、Shell 整体可靠性问题。

3. **快照存储膨胀** — Git-ignore 文件和大文件被纳入快照，导致存储消耗达 90 GB（#65127）。

4. **Edit 工具脆弱性** — 编辑工具对存在的文本报错 "Could not find oldString"（#52067）。

5. **跨平台键盘处理** — 非拉丁键盘布局导致标准快捷键失效（#55676），影响国际开发者。

6. **MCP 服务器工具发现** — 动态 MCP 服务器通告新工具但模型无法调用（#64117）。

---

*数据来源：github.com/anomalyco/opencode • 生成时间：2026-11-21*</think>



</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate it carefully, maintaining the Markdown structure, keeping all technical identifiers as-is, and using natural technical Chinese register.

Let me go through section by section:

1. Today's Highlights
2. Releases
3. Hot Issues
4. Key PR Progress (table)
5. Hot Discussions
6. Feature Request Trends
7. Developer Pain Points

I need to be careful with:
- Technical terms: API, SDK, OAuth, TTL, etc.
- Emoji should stay
- Tables with alignment rows
- URLs and issue numbers
- Repository slugs and usernames

Let me translate this now, maintaining the exact structure.
</think>


# Pi 社区速报 — 2026-11-21

---

## 1. 今日要闻

**v1.6.0 上线 GPT-6.2 模型**，成为 `openai`、`azure` 和 `openai-codex` 三个 provider 的新默认选项，其中 GPT-6.2 Sol 升级为默认基础模型。过去 24 小时内合并了 17 个 PR，修复了 1.6.x 迭代中引入的回归问题和平台级 bug——包括 OpenAI reasoning item 丢弃问题、Windows Git Bash RPC 命令截断缺陷，以及历史对话条目超过 12 万条后 compaction 再加载导致的崩溃。当前仍有三个 P0 问题待解：Anthropic OAuth 范围在 Team/Enterprise 席位上的回归错误、GPT-6 openai-codex 条目上 reasoning effort 被硬编码为 medium，以及 ultrafast/Codex 层的 OpenAI 服务层级定价计算错误。

---

## 2. 版本发布

### v1.6.0 — GPT-6.2 Astra & Sol 正式发布
- **GPT-6.2 Astra** 和 **GPT-6.2 Sol** 现已在 `openai`、`azure` 和 `openai-codex` 三个 provider 上可用。
- **GPT-6.2 Sol** 晋升为三个 provider 的默认模型，取代此前的默认模型。
- 详见 [Providers 文档](https://github.com/earendil-works/pi/blob/v1.6.0/packages/coding-agent/docs/providers.md)，已更新模型列表及配置说明。

> **注意：** 此版本引入了当前在 Issue [#12367](https://github.com/earendil-works/pi/issues/12367)、[#12361](https://github.com/earendil-works/pi/issues/12361) 和 [#12308](https://github.com/earendil-works/pi/issues/12308) 中追踪的回归问题，修复补丁已在推进中。

---

## 3. 热门 Issue

### 🔴 P0 / 严重

**1. [OPEN, inprogress] Anthropic `/login` 在 Claude Team/Enterprise 席位上失败 — "Unknown scope"**  
[#12318](https://github.com/earendil-works/pi/issues/12318) · 4 条评论  
Team 或 Enterprise Claude 席位的 OAuth 请求在出现同意界面之前就被拒绝，错误为 `Invalid OAuth request — Unknown scope: user:invocation`。这导致所有企业用户无法通过 Pi 内置的 `/login` 流程完成认证。社区正在积极排查 scope 注册问题。

**2. [OPEN, prio:p0] OpenAI 丢弃 reasoning items（prefix_mismatch）**  
[#12367](https://github.com/earendil-works/pi/issues/12367) · 2 条评论  
升级到 1.6.0 后，TUI 中间歇性出现 `OpenAI dropped X reasoning items: prefix_mismatch` 错误，表明 Pi 内部 reasoning item 格式与 GPT-6.2 模型当前输出的格式之间存在 schema 不匹配。每次发生都会关联一条会话轨迹供根因分析。

**3. [OPEN, prio:p0] openai-codex GPT-6 模型：`--thinking high/xhigh` 实际只有 "medium" 推理力度**  
[#12361](https://github.com/earendil-works/pi/issues/12361) · 2 条评论  
尽管 GPT-6.2 条目已设置 `compat.supportsMidConvoEffort: true`，每次请求仍然硬编码 `reasoning.effort: "medium"`，完全忽略用户设置的 `--thinking` 参数。这使得在 Codex 层模型上选择 high/xhigh 推理等级形同虚设。

**4. [OPEN, prio:p0] OpenAI 服务层级定价：ultrafast 按 1x 计费，Codex fast/tiers 计算错误**  
[#12308](https://github.com/earendil-works/pi/issues/12308) · 2 条评论  
在以下三种 OpenAI 收取溢价费率的场景中，`usage.cost` 仍然按标准定价报告：ultrafast 层、Codex fast 响应，以及 `onPayload` 中设置的层。这导致成本报告对用户少算了费用。

---

### 🟡 值得关注的 / 平台级 Bug

**5. [OPEN] Windows Git Bash 对长 RPC bash 命令静默截断**  
[#12340](https://github.com/earendil-works/pi/issues/12340) · 3 条评论  
在 Windows Git Bash 环境下，超过约 8,186 字符的命令被静默截断——尾部部分从未执行，但 Pi 仍报告 `exitCode: 0` 且 `truncated: false`。已在 PR [#12369](https://github.com/earendil-works/pi/pull/12369) 中修复。

**6. [OPEN] Gemini 4 Hydrogen xhigh 宣称可用但被 Google 适配器拒绝**  
[#12177](https://github.com/earendil-works/pi/issues/12177) · 2 👍 · 2 条评论  
模型页面广告了 `xhigh` thinking 选项，但选择后以 `Unsupported Google thinking level mapping` 错误失败。`google-generative-ai` 和 `google-vertex` 适配器均缺少该映射，使广告功能形同虚设。

**7. [CLOSED] compaction 后条目数超过约 12 万条的会话无法加载**  
[#12154](https://github.com/earendil-works/pi/issues/12154) · 2 条评论  
compaction 后拥有约 12 万+ 条目的会话在加载时崩溃，错误为 `RangeError: Maximum call stack size exceeded`，发生在 `buildContextEntries` 期间。已在 PR [#12360](https://github.com/earendil-works/pi/pull/12360) 中修复。

---

### 🟢 功能提案 / UX

**8. [OPEN] 允许配置空闲缓存预热的窗口期**  
[#11127](https://github.com/earendil-works/pi/issues/11127) · 5 条评论  
TTL 短于 30 分钟的 prompt cache（如 60–120 分钟的用户）希望能够自定义缓存预热窗口，而不是使用硬编码的 30 分钟默认值。当前 `cacheWarming: "idle"` 配置下，若 TTL 为 60 分钟，预热触发时机在约 27 分钟和 54 分钟，造成不对齐。

**9. [OPEN] pi-durable：允许 `beforeRequest` 拒绝请求**  
[#11055](https://github.com/earendil-works/pi/issues/11055) · 2 条评论 · 1 👍  
`GenerationHooks.beforeRequest` 可以重写请求但无法中止——hook 中抛出异常只会在调用已被标记后才向上传播，请求仍然继续执行。用户希望在扩展 hook 中具备硬性拒绝请求的能力。

**10. [OPEN] ANSI 粘贴留下转义序列残渣；未终结的 bracketed paste 会卡死编辑器**  
[#11383](https://github.com/earendil-works/pi/issues/11383) · 3 条评论 · 1 👍  
粘贴包含 ANSI 转义序列的终端输出会将转义序列作为字面文本注入 prompt。未终结的 bracketed paste 会导致编辑器完全无响应，包括对 Ctrl+C 也无效。

---

## 4. 关键 PR 进展

| # | PR | 作者 | 概要 | 关闭的 Issue |
|---|---|---|---|---|
| 1 | [#12369](https://github.com/earendil-works/pi/pull/12369) | petrroll | **通过环境变量传递 Windows bash 命令** — 通过 `BASH_ENV` 环境变量传递长命令，绕过 Git Bash 8,186 字符参数截断和换行拆分问题。修复 [#12340](https://github.com/earendil-works/pi/issues/12340)。 | #12340 |
| 2 | [#12371](https://github.com/earendil-works/pi/pull/12371) | petrroll | **修复前缀式 Google 模型 ID 的 Gemini 3+ 检测 + `compat.supportsStrictMode`** — Google 适配器现已正确识别前缀式 ID（如 `randomprefix-gemini-4-argon`）为 Gemini 3+，启用严格工具模式。关闭 [#12321](https://github.com/earendil-works/pi/issues/12321)。 | #12321 |
| 3 | [#12365](https://github.com/earendil-works/pi/pull/12365) | robopipi[bot] | **通过 HTTPS_PROXY 解析 Bedrock SSO 凭证** — 修复设置 `HTTPS_PROXY` 时的挂起问题；SSO 客户端现使用支持代理的 `NodeHttpHandler`。关闭 [#12353](https://github.com/earendil-works/pi/issues/12353)。 | #12353 |
| 4 | [#12366](https://github.com/earendil-works/pi/pull/12366) | petrroll | **`createProvider` 模型目录每 publish 合并一次，而非每次读取合并一次** — 消除了带 `fetchModels` 的 provider 每次 `getModels()` 调用时 `findIndex` 的二次方复杂度。关闭 [#12311](https://github.com/earendil-works/pi/issues/12311)。 | #12311 |
| 5 | [#12360](https://github.com/earendil-works/pi/pull/12360) | robopipi[bot] | **加载 compaction 后条目极多的会话** — 在 `buildContextEntries` 中用循环替换无界展开，修复了约 12 万+ 条目会话的 `RangeError` 崩溃。 | — |
| 6 | [#12370](https://github.com/earendil-works/pi/pull/12370) | petrroll | **将重复 prompt 移至编辑器历史前端而非追加重复** — 作为 [#12279](https://github.com/earendil-works/pi/issues/12279) 的替代修复方案，解决树形导航在历史中重复追加分支 prompt 的问题。 | #12279 |
| 7 | [#12358](https://github.com/earendil-works/pi/pull/12358) | robopipi[bot] | **报告 OpenAI Decisions 的缓存读写 token 数** — `parseClassifierUsage()` 现已正确暴露 Decisions API 的 `cached_tokens` 和 `cache_write_tokens`，修复了 `gpt-6-luna` 分类器缓存指标始终为零的问题。 | — |
| 8 | [#12357](https://github.com/earendil-works/pi/pull/12357) | carenthomas | **区分 Google 内容被拒与流不完整** — Google 适配器现可在内容被阻止时返回可操作的 `promptFeedback` 诊断信息，而非静默终止流。 | — |
| 9 | [#12356](https://github.com/earendil-works/pi/pull/12356) | robopipi[bot] | **JSON 模式下最终响应失败时非零退出** — `pi --mode json` 现对 `stopReason: error` 或 `aborted` 返回退出码 1，与文本模式行为一致。 | — |
| 10 | [#12363](https://github.com/earendil-works/pi/pull/12363) | d4n-sec | **仅列出可达代码模式的命名空间** — 代码模式不再在 prompt 中广告已被精确允许列表完全禁用的扩展命名空间下的所有工具。 | — |

---

## 5. 热门讨论

### 💡 展示与分享

**1. "Show & tell: 在 Pi 中使用 Claude 订阅，无需安装 Claude Code"**  
[#12364](https://github.com/earendil-works/pi/discussions/12364) · leohenon · 0 条评论 · 1 👍  
社区编写的 npm 包 `pi-anthropic-oauth` 支持通过 Pi 原生工具、模型和 harness 访问 Claude Pro/Max 订阅，无需安装 Claude Code。包含演示视频和一键安装命令：`pi install npm:pi-anthropic-oauth`。

---

## 6. 功能提案趋势

在 50 个追踪 Issue 和 1 个讨论中，浮现出以下几个持续性主题：

| 主题 | 证据 | 热度 |
|---|---|---|
| **模型 Provider 对等性** — 社区要求 Google、Anthropic 和 OpenAI 的功能在各模型族和 ID 格式（前缀式 ID、thinking 级别、严格工具模式）间保持一致行为 | [#12321](https://github.com/earendil-works/pi/issues/12321)、[#12177](https://github.com/earendil-works/pi/issues/12177)、[#12318](https://github.com/earendil-works/pi/issues/12318)、[#12359](https://github.com/earendil-works/pi/issues/12359) | 高 |
| **缓存与预热可配置性** — 用户希望控制 prompt-cache TTL 对齐方式和空闲预热窗口参数 | [#11127](https://github.com/earendil-works/pi/issues/11127) | 中 |
| **扩展 Hook 的表达力** — 在 hook 中获得更强的控制力（拒绝请求、命名空间作用域、beforeRequest 语义） | [#11055](https://github.com/earendil-works/pi/issues/11055)、[#12265](https://github.com/earendil-works/pi/issues/12265) | 中 |
| **成本与定价精确性** — 跨 Provider 的精确 token 和服务层级成本报告 | [#12308](https://github.com/earendil-works/pi/issues/12308) | 中 |
| **Windows/平台可靠性** — Shell 命令截断、代理凭证链、控制台生命周期处理 | [#12340](https://github.com/earendil-works/pi/issues/12340)、[#12353](https://github.com/earendil-works/pi/issues/12353)、[#11889](https://github.com/earendil-works/pi/pull/11889) | 持续 |

---

## 7. 开发者痛点

**1. Windows 上平台相关的 Shell 边界情况。** Git Bash 参数截断（[#12340](https://github.com/earendil-works/pi/issues/12340)）、缺失的 SIGHUP 处理（[#11889](https://github.com/earendil-works/pi/pull/11889)）和冲突的系统 `pi` 包（[#12166](https://github.com/earendil-works/pi/issues/12166)）持续出现。PR [#12369](https://github.com/earendil-works/pi/pull/12369) 中的环境变量方案是针对性修复；Windows 平台的全面可靠性仍是一项持续性挑战。

**2. 新 GPT-6 模型的 reasoning effort 和 token 报告失准。** v1.6.0 默认切换到 GPT-6.2 Sol 引出了三个关联问题：用户设置的推理力度被硬编码为 medium（[#12361](https://github.com/earendil-works/pi/issues/12361)）、间歇性 reasoning item 丢弃（[#12367](https://github.com/earendil-works/pi/issues/12367)），以及 Decisions API 缓存 token 报告缺失（[#12358](https://github.com/earendil-works/pi/pull/12358) — 已修复）。三者共同表明 GPT-6 模型族引入了现有兼容性垫片未完全覆盖的 schema 行为。

**3. 代理和凭证链缺口。** 过去 24 小时内出现了两个独立的代理问题：Bedrock SSO 凭证忽略 `HTTPS_PROXY`（[#12353](https://github.com/earendil-works/pi/issues/12353)），以及网关中间流 SSE 错误帧未触发重试（[#12352](https://github.com/earendil-works/pi/pull/12352) — 已修复）。这些反映的是 Provider 栈凭证和网络层处理的更广泛缺口。

**4. 大规模会话状态脆弱性。** 约 12 万条目的崩溃（[#12154](https://github.com/earendil-works/pi/issues/12154)）和树形导航导致的历史重复问题（[#12279](https://github.com/earendil-works/pi/issues/12279)）都源于无界数据结构增长而缺乏相应的防御性限制。长期运行或频繁分支的会话用户会遇到在典型使用中罕见但触发时严重的边界情况。

**5. 模型 ID 格式异构性。** 第三方 Provider 以非标准前缀式 ID（如 `google/gemini-3-pro`）提供模型，这破坏了版本检测、严格模式逻辑和工具调用 ID 生成。PR [#12371](https://github.com/earendil-works/pi/pull/12371) 修复了直接问题，但 Google 适配器族中依赖 `gemini-N` 前缀的底层假设需要一个系统性的解决方案。

---

*本速报数据来源于 2026-11-21 的 [github.com/earendil-works/pi](https://github.com/earendil-works/pi) 活动记录。所有 Issue 和 PR 链接均指向该仓库的规范地址。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while preserving the exact Markdown structure and following all the rules specified.

Let me translate this carefully:

1. Title and sections
2. Tables - need to preserve column alignment rows
3. Lists - bullets and numbered
4. Emoji stay as-is
5. Technical terms should be natural in Chinese
6. Issue/PR numbers stay as-is
7. Version tags, file paths, etc. stay as-is

Let me go through this section by section:

**Title:** Qwen Code Community Digest — 2026-11-21
→ Qwen Code 社区日报 — 2026-11-21

**Section 1: Today's Highlights**
The v0.28.3 release landed today with CI workflow hardening and test infrastructure improvements. Two significant Web Shell UX enhancements merged—one introducing compact automatic-trigger cards for background tasks, and another adding a contract-driven chat column renderer for the unified chat surface migration. The community continues to grapple with recurring CI flakiness, with multiple "Main CI failed" issues accumulating hundreds of comments as maintainers investigate root causes across Managed Agent gates, E2E tests, and platform-specific test suites.

→ 今日 v0.28.3 版本发布，包含 CI 工作流加固和测试基础设施改进。两个重要的 Web Shell 用户体验增强已合并——一个为后台任务引入了紧凑型自动触发卡片，另一个为统一聊天界面迁移添加了契约驱动的聊天栏渲染器。社区仍在应对反复出现的 CI 不稳定性问题，多个"Main CI failed" issues 积累了数百条评论，维护者正在调查 Managed Agent gates、E2E 测试和平台特定测试套件的根本原因。

Wait, I need to be careful about technical terms. "CI flakiness" is commonly translated as "CI 不稳定性" or "CI 间歇性故障". Let me use natural Chinese technical register.

**Section 2: Releases**
Table with version info - need to preserve the formatting exactly.

**Section 3: Hot Issues**


A detailed table tracking issues, priority levels, summaries, and comment counts. I'll preserve all the # references and keep technical identifiers untranslated while rendering the descriptions naturally in Chinese.

**Section 4: Key PR Progress**
Table tracking PRs with authors, descriptions, and impact metrics. Maintain the structure with version numbers and file paths as specified.

**Section 5: Feature Request Trends**
Aggregated feature request data presented in table format showing trend patterns, supporting evidence, and priority indicators.

**Section 6: Developer Pain Points**
A table documenting common developer challenges with frequency ratings, underlying causes, and references to related issues. This section captures recurring themes in user feedback and technical debt.

Now I'll work through the complete translation, maintaining consistent terminology throughout and ensuring the Chinese reads naturally as technical documentation.
</think>


# Qwen Code 社区日报 — 2026-11-21

---

## 1. 今日要闻

v0.28.3 版本今日发布，包含 CI 工作流加固和测试基础设施改进。两个重要的 Web Shell 用户体验增强已合并——一个为后台任务引入了紧凑型自动触发卡片，另一个为统一聊天界面迁移添加了契约驱动的聊天栏渲染器。社区仍在应对反复出现的 CI 不稳定性问题，多个"Main CI failed" issues 积累了数百条评论，维护者正在调查 Managed Agent gates、E2E 测试和平台特定测试套件的根本原因。

---

## 2. 版本发布

| 版本 | 类型 | 概要 |
|------|------|------|
| **v0.28.3** | 稳定版 | 自动发布同步——在 main 分支上更新 `package.json` 版本和 `CHANGELOG.md`。包含 PR #17506 的测试基础设施加固（managed-agent E2E 循环观察）。 |
| **v0.28.1-preview.1** | 预览版 | 通过 `.github/release.yml` 生成 `release/v0.28.1-preview.1` 的版本说明。 |
| **v0.28.0-nightly.20261120** | 每日构建版 | 包含 PR #17506 的相同 E2E 测试修复；CI 流水线稳定性改进。 |

本期所有版本**无破坏性变更**报告。

---

## 3. 热门 Issue

| # | Issue | 优先级 | 概要 | 重要性 | 评论数 |
|---|-------|--------|------|--------|--------|
| **#14724** | Main CI failed: Managed Agent gate — no test identified | — | Managed Agent gate 反复出现 CI 失败，测试诊断信息未暴露。Bot 创建的 issue，追踪多次提交级别的失败。 | 这是流量最高的 issue（508 条评论），表明 CI 仪器化存在系统性问题，正在阻碍开发效率。 | 508 |
| **#11680** | Main CI failed: E2E Tests (Docker shard) | — | Linux Docker 上的 E2E 测试套件在测试结果报告前失败；工作流 `E2E Test (Linux) - sandbox:docker - shard 1/1` 崩溃。 | 第二高活跃度的 Bug 追踪器（100 条评论）；基于 Docker 的 E2E 不稳定性阻碍集成验证。 | 100 |
| **#13078** | Daily dependency CVE audit failed | Needs-triage | 计划的 CVE 审计工作流失败——可能存在新的高危漏洞或 npm audit 端点故障。 | 安全扫描失败可能遗漏关键 CVE；58 条评论表明调查正在进行。 | 58 |
| **#11678** | Main CI failed: Qwen Code CI (Windows/Node 22.x) | — | Windows-latest CI 在"Run tests and generate"步骤前失败，测试尚未被识别。 | Windows CI 覆盖率对桌面客户端可靠性至关重要；51 条评论表明持续投入。 | 51 |
| **#17980** | Peer discovery omits live sessions | P2 | Discovery 同时发送所有套接字探测；在有限描述符预算下，后发出的探测会返回"unknown"，即使对等节点仍存活。 | 这是**数据完整性 Bug**——有效会话会静默从发现结果中消失，导致分布式场景下的静默失败。 | 2 |
| **#17978** | TypeScript SDK quadratic drain on large bursts | P2 | 为每个缓冲消息移除数组第一个元素导致 O(n²) 行为；在大量输出突增后恢复的消费者会花费过多时间。 | 影响高吞吐场景的**性能退化**；可在 Node.js 和 Linux 上复现。 | 2 |
| **#17523** | Pre-admission load refusals consume retry budget | P2 | 非取消的 Turn 准备在守护进程端状态就绪前完成，导致 `POST /session/:id/load` 失败，但仍耗尽普通重试预算。 | 浪费重试容量，可能导致多智能体编排中的下游失败。 | 4 |
| **#17173** | Managed DingTalk adapter: coverage/hygiene follow-up | P3 | #17136 评审中发现的 9 个关键问题已在 `6928d9c33f` 中修复；跟进追踪剩余的非阻塞性卫生改进建议。 | 表明 DingTalk 集成质量仍在持续投入；10 条评论讨论延后的评审项目。 | 10 |
| **#17885** | Windows argv limit breach (32780-char payload) | P2 | `ExternalShellWorkerProtocolTest` 构建了一个超过 32 KiB 的捕获负载，超出 Windows 的 32767 argv 限制，自 commit `a27b12becf` 起引入。 | 自 #17478 引入的 **Windows 特定回归**；确定性失败阻塞 Windows CI 流水线。 | 3 |
| **#17188** | DeepSeek V3.1/V3.2 output limit fallback | P2 | 模型 ID 规范化导致 `deepseek-v3.1`、`deepseek-v3.2` 使用 32000 token 限制而非目录中的 65536。 | 热门 DeepSeek 模型的**错误 Token 计量**；用户可能遇到意外截断。 | 3 |

---

## 4. 重点 PR 进展

| # | PR | 作者 | 概要 | 影响 |
|---|-----|------|------|------|
| **#17970** | feat(web-shell): compact automatic trigger messages | wenshao | 为 cron 和 `/loop` 续运行用紧凑型卡片替代完整用户气泡，显示简洁摘要并可展开详情。 | **用户体验改进**——减少长时间运行会话记录中的视觉噪音。 |
| **#17952** | feat(web-shell): add contract-driven ChatSurface chat column | wenshao | 统一聊天界面的后端无关聊天栏渲染器；从会话视图模型渲染对话记录、工具审批、当前问题和编辑器。 | **多界面一致性基础**；支持未来跨平台聊天功能对等。 |
| **#17965 / #17964** | fix(managed-agent): ephemeral Runtime state directory at spawn | yiliang114 / wenshao | 将状态目录创建从 provider 工厂移至 spawn 时机，恢复 Runtime provider 构造不得触碰文件系统的规则。 | **可靠性修复**——防止 provider 初始化期间的副作用。 |
| **#17919** | refactor(managed-agent-server): retire SpotBugs exclusion | wenshao | 用分析器可见的断言惯用语替代 `acknowledgementReceiptCatalog` 的范围化 SpotBugs 基线条目。 | **代码质量**——改善回执目录完整性的静态分析覆盖率。 |
| **#17471** | feat(managed-agent): unify unbound Session authority | yiliang114 | #16023 拆分的一部分——将 unbound Session 主体所有权迁移至 `managed-agent` 的所有权行下。 | **安全/架构**——unbound 会话的一致授权模型。 |
| **#17953** | feat(managed-agent): runtime-owned background observation (Phase 3b) | doudouOUC | Phase 3b 首轮切片：后台 Shell/Monitor 监视器通过外部化输出摘要在 Harness 重启后存活。 | **韧性**——后台任务在 Harness 生命周期事件间持久化。 |
| **#17910** | fix(core): retain oversized transcript indexes in bounded cache | wenshao | 超大索引（>64 MiB）现获得专用的 256 MiB LRU 缓存，而非被拒绝准入。 | **可扩展性**——处理大型会话记录时不会产生索引逐出抖动。 |
| **#17902** | fix(core): correct usage token accounting | wenshao | 仪表盘和 `/stats` 现从每请求账本而非带重放历史的会话摘要获取 token 使用量。 | **准确性修复**——消除会话恢复导致的虚高 token 计数。 |
| **#17437** | feat(i18n): Arabic support with RTL layout | callmeYe | 在 CLI 和 Web Shell 中提供完整的阿拉伯语支持，包括 UI 中的 RTL 布局和导出的 HTML 记录。 | **国际化**——将 Qwen Code 无障碍访问扩展至阿拉伯语开发者。 |
| **#17968** | test(channels): strengthen DingTalk witnesses | wenshao | 修复 4 个因错误原因通过的 DingTalk 测试见证；为未覆盖的投递形态新增测试。 | **测试质量**——消除通道集成测试中的假阳性。 |

---

## 5. 需求趋势

汇总高优先级和频繁讨论的项目，揭示以下主导特性方向：

| 趋势 | 证据 | 优先级信号 |
|------|------|-----------|
| **会话韧性与持久化** | #17953（后台观察）、#17471/#17472（Session 授权/unbounded Workspace）、#17910（超大索引缓存） | P2–P3，roadmap/session-management 标签 |
| **多智能体编排** | #17523（准入前负载拒绝）、#13644（Agent Host 替换 provider 固定）、#17284（智能体循环跟进） | P2，roadmap/multi-agent |
| **Web Shell 功能对等与用户体验** | #17970（紧凑型触发器）、#17952（聊天栏渲染器）、#17237（worktree Codex 功能对等 P6/P7） | P2–P6，活跃开发中 |
| **通道集成扩展** | #17437（阿拉伯语 RTL）、#17903（Teams 通道门控）、#17173（DingTalk 卫生改进） | P3，area:managed |
| **SDK 可靠性** | #17980（对等节点发现）、#17978（二次方消耗）、#17188（DeepSeek token 限制） | P2，scope/sdk |
| **CI/CD 卫生** | #17039（稳定的 Managed Agent gate 名称）、#16832（死 PR 重审通道）、#13078（CVE 审计） | P1–P2，scope/ci-cd |

---

## 6. 开发者痛点

| 痛点 | 频率 | 根本原因 | 活跃 Issue |
|------|------|----------|------------|
| **CI 不稳定性与诊断缺口** | 🔴 高 | 测试结果报告前即出现测试识别失败；"no test identified" 模式在 Managed Agent、E2E、Windows 和 SDK Java 工作流中反复出现。 | #14724（508 条评论）、#11680、#11678、#16860、#16829 |
| **Windows 特定回归** | 🟠 中 | argv 长度限制（32 KiB）、路径处理差异；#17478 引入了确定性 Windows CI 失败。 | #17885、#17982 |
| **静态分析技术债** | 🟠 中 | `managed-agent-server` 积累了 SpotBugs 排除项；正在用断言惯用语替换。 | #17931、#17924 |
| **会话状态同步问题** | 🟠 中 | 守护进程端 Workspace 状态在 Turn 准备完成时未就绪；尝试加载前重试预算已耗尽。 | #17523 |
| **Token 计量不一致** | 🟡 中低 | 模型 ID 规范化与目录条目不匹配；会话摘要重放导致报告的使用量虚高。 | #17188、#17902 |
| **描述符预算耗尽** | 🟡 低 | 对等节点发现同时涌入探测；在有限描述符预算下，后发出的探测报告"unknown"。 | #17980 |

---

*日报数据来源：github.com/QwenLM/qwen-code 2026-11-21 活动记录。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*