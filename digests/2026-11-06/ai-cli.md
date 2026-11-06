# AI CLI 工具社区动态日报 2026-11-06

> 生成时间: 2026-11-06 02:46 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

Title: "AI CLI Tools Ecosystem — Cross-Tool Comparison Report"
"AI CLI 工具生态——跨工具对比报告"

Date: "2026-11-06" - keep as-is
Tools list - keep as-is

Section 1: "Ecosystem Overview"

Claude Code and OpenAI Codex lead in community engagement volume → Claude Code 和 OpenAI Codex 在社区活跃度上领先
while Qwen Code shows the fastest release cadence → 而 Qwen Code 的发布节奏最快
All tools are converging on MCP (Model Context Protocol) as the standard extensibility mechanism → 所有工具都在向 MCP（Model Context Protocol）作为标准扩展机制的方向收敛
though implementation maturity varies significantly → 尽管实现成熟度参差不齐
The dominant themes across all communities are privacy/security hardening, Windows platform reliability, subagent orchestration, and session persistence → 各社区的主要议题集中在隐私/安全加固、Windows 平台稳定性、子代理编排和会话持久化
indicating a market that has moved beyond proof-of-concept to addressing enterprise-grade operational concerns → 表明市场已从概念验证阶段迈入满足企业级运维需求的阶段


The ecosystem divides between Anthropic/OpenAI-backed commercial offerings with comprehensive feature sets and community-developed alternatives like Pi and OpenCode that emphasize open-source transparency and self-hosting capabilities. This dual-track approach reflects different market priorities—enterprise sophistication versus developer autonomy.

For the activity comparison section, I need to preserve project names exactly: Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, and Qwen Code. I'll translate surrounding context while keeping these identifiers in their original form.

The data table uses English labels for metrics like "Issues," "PRs," "Discussions," and "Releases," but these should be translated to Chinese since they're column headers describing the data itself, not identifier names. I should maintain the translation for descriptive headers while keeping all project identifiers and tool names in their original English form.

For the notes section, I need to clarify that N/A means these tools rely on Issues as their primary community discussion mechanism, and note that OpenAI Codex and Qwen Code have Discussions enabled as a separate channel while others use Issues for discussions. The 50 issues and 30-50 PRs observed across top-N views suggest similar overall activity despite varying team sizes, though Copilot CLI's lower issue volume (22) might indicate either a smaller beta community or more stringent issue triage processes.

Moving to shared feature directions, privacy and security hardening appears across Claude Code, Copilot CLI, and Gemini CLI with specific implementations like email removal from User-Agent headers in Claude and path traversal fixes in Gemini.

OAuth token lifecycle management is another concern spanning all three tools. Windows platform reliability affects all seven tools, with issues ranging from dead key handling in Claude and Git Bash PATH problems in Claude and Gemini, to sandbox probe failures in Copilot and Gemini, and .cmd execution issues in Pi. The MCP ecosystem is becoming more mature across all seven tools, addressing needs like OAuth flows in Copilot and Pi, schema ref handling in Pi and Gemini, and remote SSE server support in Pi.

Per-server TLS trust configuration and private-network certificate handling are needed in OpenCode. Subagent and multi-agent orchestration is gaining importance in Claude Code, Codex, Gemini CLI, Pi, and Qwen Code, with requirements for dynamic model routing in Pi, autonomous skill invocation in Gemini, parallel collaboration in Gemini, and session event delivery in Qwen. Session persistence and recovery are important for Codex, OpenCode, and Pi, with issues around invalid tool-call IDs in OpenCode and context overestimation after errors in Pi.

Remote session resumption capabilities are needed in Copilot, while terminal protocol compliance is a concern across Copilot CLI, Pi, Qwen Code, and Claude Code, with specific implementations like OSC 7501 agent-status reporting in Copilot, Pi, and Qwen, TTY keyboard protocol support in Pi, and Kitty direct placements in Copilot. Context efficiency is being addressed in Codex, Claude Code, Gemini CLI, and Pi, with features like prompt cache warming in Pi and cache TTL configuration in Copilot.

Agent safety guardrails are important for Codex, Gemini CLI, and Qwen Code, focusing on preventing destructive commands in Codex and Gemini, enforcing sandboxing in Gemini, and handling auto-compaction boundary violations in Qwen. For the differentiation analysis table comparing commercial backed versus community driven tools, I need to translate the headers while keeping the tool names intact. The backing organizations (Anthropic, OpenAI, Google, GitHub/Microsoft) should be translated, but the tools themselves remain in their original form.

The feature matrix table uses multiple columns tracking technical aspects like commercial status, open source licensing, release cadence, target user profiles, and technical approach divergence across different tools. I need to maintain the table structure while translating descriptive content and preserving all tool names and technical identifiers exactly as they appear.

For the community momentum section, I'm identifying tools showing high velocity indicators. Qwen Code demonstrates the fastest iteration cycle with multiple daily releases and active discussions, building a competitive feature set quickly. OpenAI Codex maintains strong enterprise adoption with high pull request activity and engagement on critical issues. Claude Code shows healthy governance with an active privacy-focused mod ecosystem and responsive security discussions. The steady iteration category includes tools with consistent but less aggressive release patterns.

Gemini CLI maintains nightly builds with deliberate security investments. Pi shows strong community participation through nightly releases and solid CI practices. OpenCode differentiates through its npm package ecosystem. Copilot CLI operates with a smaller beta community and more controlled feature rollout. When evaluating maturity, I look at CI reliability across the ecosystem—some tools have flaky test suites while others maintain stable pipelines. _protocol → TTY 键盘协议
- Kitty direct placements → Kitty 直接放置
- Context Efficiency → 上下文效率
- Prompt cache warming → Prompt 缓存预热
- Cache TTL configuration → 缓存 TTL 配置
- AST-aware file reads → AST 感知文件读取
- Oversized write pre-flight checks → 超大写入预检
- Agent Safety Guardrails → 代理安全护栏
- Destructive command prevention → 破坏性命令防护
- Sandbox enforcement → 沙箱执行
- Auto-compaction boundary violations → 自动压缩边界违规
- Commercial Backed vs. Community Driven → 商业支持 vs. 社区驱动
- Anthropic/OpenAI/Microsoft → Anthropic/OpenAI/Microsoft
- Partial → 部分开源
- Open Source → 开源
- Nightly → 每日构建
- Stable → 稳定版
- Modular CLI-first with optional desktop → 模块化 CLI 优先，桌面端可选
- Cloud-dependent with telemetry → 云端依赖 + 遥测
- Self-hosted, ephemeral, local-first → 自托管、临时化、本地优先
- Proprietary plugin/mod APIs → 专有插件/mod API
- Open MCP protocol + community skills → 开放 MCP 协议 + 社区技能
- macOS = Windows > Linux → macOS = Windows > Linux

The ecosystem continues to evolve with privacy and security as foundational requirements. Multiple tools are strengthening their privacy boundaries—Claude Code's User-Agent email leak, Gemini CLI's path traversal fixes, Copilot CLI's privacy mod, and Qwen Code's unauthorized source-code implementation flag all demonstrate this shift. Community expectations now demand transparency and opt-out defaults for privacy controls. Meanwhile, Windows platform parity is becoming a competitive requirement rather than optional, as every tool in this analysis has open Windows-specific issues affecting developer adoption. Windows CI/CD and testing infrastructure investment will likely increase across the ecosystem to address this.

MCP has emerged as the universal extensibility layer, appearing in discussions across all seven tools—from OAuth flows and remote server support to schema handling and per-server TLS configuration. Tools without MCP compatibility will face growing integration friction. The next frontier involves subagent autonomy and multi-agent orchestration, with requests for dynamic model routing, autonomous skill invocation, and session event delivery unification indicating a shift from single-agent to multi-agent workflows. Architecture decisions made now will shape these capabilities, with competing philosophies emerging around unified agent loops versus isolated subagent pools.

Context efficiency represents a direct revenue lever—Pi's prompt cache warming claims ~$1,430/month savings, Copilot CLI's 5-minute Claude cache TTL is a top community request, and Codex users report 19.8% token volume wasted on polling. Tools that make efficiency gains visible will build trust with users and differentiate on value. Community forks continue to signal unmet needs, with OpenCode, Pi, and Qwen Code's fork addressing gaps in commercial offerings around cost, transparency, and configurability. Commercial tools face pressure to offer compelling self-hosting or cost-control options, while community forks will continue filling gaps as the ecosystem evolves.
</think>


# AI CLI 工具生态——跨工具对比报告

**日期：** 2026-11-06
**分析对象：** Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi, Qwen Code

---

## 1. 生态概览

AI CLI 工具生态正在快速成熟，七大主要玩家争夺开发者关注度。**Claude Code** 和 **OpenAI Codex** 在社区活跃度上领先，而 **Qwen Code** 的发布节奏最快。所有工具都在向 MCP（Model Context Protocol）作为标准扩展机制的方向收敛，尽管实现成熟度参差不齐。各社区的主要议题集中在隐私/安全加固、Windows 平台稳定性、子代理编排和会话持久化，表明市场已从概念验证阶段迈入满足企业级运维需求的阶段。生态呈现两极分化：一极是 Anthropic/OpenAI 背书的商业化工具，功能全面；另一极是社区驱动的替代方案（Pi、OpenCode），主打透明性和自托管能力。

---

## 2. 活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Discussions（24h） | Releases（24h） |
|------|-------------|-----------|-------------------|----------------|
| **Claude Code** | 50 | ~1 | N/A* | 0 |
| **OpenAI Codex** | 50 | 50+ | 50 | 4 |
| **Gemini CLI** | 50 | 49 | N/A* | 0 |
| **Copilot CLI** | 22 | 0 | N/A* | 2 |
| **OpenCode** | 50 | 30+ | N/A* | 1 |
| **Pi** | 50 | 30+ | N/A* | 0 |
| **Qwen Code** | 50+ | 30+ | 50+ | 4 |

**注释：**
- N/A* 表示该工具使用 Issues（而非 Discussions）作为主要社区沟通渠道。
- **OpenAI Codex** 和 **Qwen Code** 启用了 Discussions 作为独立渠道；其他工具以 Issues 作为讨论论坛。
- 所有工具的 top-N 视图都显示约 50 个 issues 和 30-50 个 PRs，表明尽管团队规模不同，整体活跃度相当。
- **Copilot CLI** 的 issue 数量最少（22 个），可能意味着更小的 beta 用户群或更严格的 issue 筛选机制。

---

## 3. 共性功能方向

以下需求在多个工具社区中均有出现，代表了行业范围内的工程优先级：

| 功能方向 | 涉及工具 | 具体需求 |
|-------------------|---------------|----------------|
| **隐私与安全加固** | Claude Code, Copilot CLI, Gemini CLI | User-Agent 头部去除邮箱信息（Claude）、路径遍历修复（Gemini）、OAuth 令牌生命周期管理（通用） |
| **Windows 平台稳定性** | 全部 7 款工具 | Dead key 处理（Claude）、Computer Use 失败（Codex）、Git Bash PATH 问题（Claude、Gemini）、沙箱探测失败（Copilot、Gemini）、.cmd 执行（Pi） |
| **MCP 生态成熟化** | 全部 7 款工具 | OAuth 流程（Copilot、Pi）、schema ref 处理（Pi、Gemini）、远程 SSE 服务器（Pi）、按服务器 TLS 信任配置（OpenCode）、私网证书（OpenCode） |
| **子代理 / 多代理编排** | Claude Code, Codex, Gemini CLI, Pi, Qwen Code | 动态模型路由（Pi）、自主技能调用（Gemini）、并行协作（Gemini）、会话事件分发（Qwen） |
| **会话持久化与恢复** | Codex, OpenCode, Pi | 无效工具调用 ID（OpenCode）、错误后上下文高估（Pi）、会话同步复制（Pi）、远程会话恢复（Copilot） |
| **终端协议合规** | Copilot CLI, Pi, Qwen Code, Claude Code | OSC 7501 代理状态上报（Copilot、Pi、Qwen）、TTY 键盘协议（Pi）、Kitty 直接放置（Copilot） |
| **上下文效率** | Codex, Claude Code, Gemini CLI, Pi | Prompt 缓存预热（Pi）、缓存 TTL 配置（Copilot、Codex）、AST 感知文件读取（Gemini）、超大写入预检（Qwen） |
| **代理安全护栏** | Codex, Gemini CLI, Qwen Code | 破坏性命令防护（Codex、Gemini）、沙箱执行（Gemini）、自动压缩边界违规（Qwen） |

---

## 4. 差异化分析

### 商业支持 vs. 社区驱动

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code |
|-----------|------------|--------------|------------|-------------|----------|-----|-----------|
| **支持方** | Anthropic | OpenAI | Google | GitHub/Microsoft | 社区 | 社区 | 阿里巴巴/Qwen |
| **商业化** | ✅ | ✅ | ✅ | ✅ | ❌ | ❌ | 部分 |
| **开源** | 部分 | 部分 | ✅ | 部分 | ✅ | ✅ | ✅ |
| **发布节奏** | 稳定版 | 稳定版 + Alpha | 每日构建 | 稳定版 | 稳定版 | 每日构建 | 快速迭代 |

### 目标用户画像

| 工具 | 主要用户 | 次要用户 |
|------|-----------------|-------------------|
| **Claude Code** | 需要 Anthropic 模型集成和 mod 生态的开发者 | 重视安全的团队（隐私 mod、路径验证） |
| **OpenAI Codex** | 需要浏览器自动化和多提供商灵活性的企业用户 | 需要深度 CLI/TUI 定制的进阶用户 |
| **Gemini CLI** | Google 生态用户、安全研究员（AST 感知工具、沙箱化） | 重视透明性的开发者（完全开源） |
| **Copilot CLI** | GitHub 原生工作流、Windows 企业部署 | 偏好 VS Code 集成的开发者 |
| **OpenCode** | 自托管爱好者、成本敏感团队（fork 中默认本地模型） | 希望自定义的贡献者 |
| **Pi** | 重视 CLI 原生体验和持久性保障的进阶用户 | 自托管用户（无云依赖） |
| **Qwen Code** | 需要多渠道存在的团队（Teams、QQ、Slack） | 需要统一代理架构的用户 |

### 技术路线分化

| 方面 | A 路线（Anthropic/OpenAI/Microsoft） | B 路线（社区：Pi、Gemini、OpenCode、Qwen） |
|--------|------------------------------------------|---------------------------------------------------|
| **架构** | 桌面端 + CLI 捆绑的一体化产品 | 模块化 CLI 优先，可选桌面端 |
| **功能范围** | 广泛：浏览器使用、远程控制、mods、多提供商 | 专注：终端原生工具、MCP、沙箱化 |
| **隐私模型** | 云端依赖 + 遥测 | 自托管、临时化、本地优先 |
| **扩展性** | 专有插件/mod API | 开放 MCP 协议 + 社区技能 |
| **平台优先级** | macOS = Windows > Linux | Linux ≈ macOS > Windows |

---

## 5. 社区势能与成熟度

### 高势能

| 工具 | 信号 | 评估 |
|------|---------|------------|
| **Qwen Code** | 每日 4 个 releases、50+ discussions、30+ PRs、激进的路线图（Teams 集成、统一代理循环、多渠道） | 迭代最快；正在快速构建有竞争力的功能集 |
| **OpenAI Codex** | 24h 内合并 50+ PRs、4 个 releases、50 个 discussions、$10K+ 安全问题悬赏 | 成熟产品，企业采用率高；安全问题响应强劲 |
| **Claude Code** | 隐私问题获 172 票、活跃的 mod 生态、32 条评论的安全讨论 | 治理健康；隐私社区活跃且诉求被重视 |

### 稳定迭代

| 工具 | 信号 | 评估 |
|------|---------|------------|
| **Gemini CLI** | 49 PRs、50 issues、每日构建、快速合并安全补丁 | 开发活跃；安全聚焦是有意为之 |
| **Pi** | 30+ PRs、50 issues、每日构建、活跃的 GitHub CI | 社区贡献强劲；聚焦正确性 |
| **OpenCode** | 30+ PRs、50 issues、1 个 release | 贡献基础扎实；生态（npm 包）是差异化点 |

### 较低音量

| 工具 | 信号 | 评估 |
|------|---------|------------|
| **Copilot CLI** | 22 issues、2 个 releases、无 PRs | 较小的 beta 社区；可能是更受控的发布节奏 |

### 成熟度指标

| 工具 | CI 可靠性 | Issue 分诊 | 安全响应 | Release Notes |
|------|---------------|--------------|-------------------|---------------|
| **OpenAI Codex** | ⚠️ 不稳定（受控代理门控） | 自动化工单归档 | 快（严重问题响应积极） | 详细 |
| **Claude Code** | ✅ 稳定 | 手动 + 自动化 | 快（隐私 mod 当天合并） | 简洁 |
| **Qwen Code** | ⚠️ 不稳定（E2E、受控代理门控） | 按提交自动归档 | 待定（今日提交 P1） | Changelog 风格 |
| **Gemini CLI** | ✅ 稳定 | P1/P2/P3 标签 | 快（路径遍历已修复） | Changelog 风格 |
| **Pi** | ✅ 稳定 | 严重性 + 组件 | 快（OAuth 卡顿当天修复） | 基于提交 |
| **OpenCode** | ✅ 稳定 | 仅标签 | 中等（长期未解决问题） | 简洁 |
| **Copilot CLI** | ✅ 稳定 | 分诊标签 | 中等 | 详细 |

---

## 6. 趋势信号

### 安全与隐私成为基本门槛

多个工具同时在加固隐私边界：Claude Code 的 User-Agent 邮箱泄漏、Gemini CLI 的路径遍历修复、Copilot CLI 的隐私 mod、Qwen Code 的未授权源代码实现标记。社区期望隐私控制透明且默认关闭。**推论：** 缺乏正式安全计划的工具将面临日益增长的社区压力。

### Windows 是新的 Linux

本分析涉及的每款工具都有未解决的 Windows 特异性问题，涵盖 Git Bash 兼容性到沙箱执行失败。Windows 开发者占比已高到平台平等成为竞争差异化点，而非锦上添花。**推论：** 所有工具的 Windows CI/CD 和测试基础设施投入都将增加。

### MCP 是通用扩展层

MCP 出现在全部七款工具的 issue 讨论中——OAuth 流程、远程服务器支持、schema 处理、按服务器 TLS 配置。MCP 已成事实标准。**推论：** 不投资 MCP 兼容性的工具将面临与更广泛生态系统的集成摩擦。

### 子代理自主化是下一前沿

各工具对子代理动态模型路由（Pi）、自主技能调用（Gemini）、会话事件分发统一（Qwen）的功能请求表明市场正从单代理转向多代理编排。**推论：** 当前架构决策将约束或赋能多代理工作流；统一代理循环（Qwen）vs. 隔离子代理池（Claude）代表竞争中的设计哲学。

### 上下文效率是营收杠杆

Pi 的 prompt 缓存预热 PR 声称节省约 $1,430/月（占 p2 支出的 26%）；Copilot CLI 的 5 分钟 Claude 缓存 TTL 是社区最高需求；Codex 用户报告 19.8% 的 token 量浪费在轮询上。**推论：** 缓存和上下文管理功能直接影响用户成本和感知价值；让效率可见的工具将在信任层面差异化。

### 社区 fork 预示未满足需求

OpenCode（默认本地模型的 fork）、Pi（临时化自托管 CLI）、Qwen Code 的 fork 更名（harpcode）都在填补商业化产品的空白——成本、透明性、可配置性。**推论：** 商业工具面临提供有吸引力的自托管或成本控制选项的压力；社区 fork 将继续填补空白。

---

*跨工具分析综合自 2026-11-06 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code 的社区摘要。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this technical report from English into Simplified Chinese. Let me analyze the content carefully:

1. This is a community highlights report for the Claude Code Skills repository
2. It includes rankings, trends, pending skills, and an ecosystem insight
3. I need to preserve all formatting exactly
4. Keep all technical identifiers, URLs, PR/Issue numbers as-is
5. Use natural technical Chinese appropriate for a Chinese developer newsletter

Let me translate section by section:

Title:
"Claude Code Skills Community Highlights Report"
-> "Claude Code Skills 社区亮点报告"

Date/source line stays similar

Section 1: "Top Skills Ranking"
"Top Skills Ranking" -> "热门 Skills 排行"

Subheading: "Top Skills Ranking" - this is already covered by the main heading

The table needs careful translation. Let me go through each section:

Section 1 intro:
"The following Skills have generated the most discussion and community engagement through Issues and PRs:"
-> "以下 Skills 在 Issues 和 PR 讨论中获得了最多的关注与社区参与度："

### 🔴 Security: Community Skills Namespace Trust Boundary
This is a section header, I need to translate the description text.

"Issue #492" - keep as-is
"46 comments" -> "46 条评论"
"Author: aliksir" -> keep as-is
"Status: OPEN" -> keep as-is

"A critical security vulnerability flagged by the community. Community-contributed skills distributed under the `anthropic/` namespace may be mistaken for official Anthropic skills, potentially leading users to grant elevated permissions to unvetted code."

Translation: "社区标记的一个关键安全漏洞。发布在 `anthropic/` 命名空间下的社区贡献 Skills 可能被误认为是 Anthropic 官方 Skills，导致用户向未经审核的代码授予过高权限。"

The quote:


"Community-contributed skills distributed under the `anthropic/` namespace may be mistaken for official Anthropic skills, potentially leading users to grant elevated permissions to unvetted code."
-> "发布在 `anthropic/` 命名空间下的社区贡献 skills 可能被误认为是 Anthropic 官方 skills，导致用户向未经审核的代码授予过高权限。"

Then I need to preserve the link text exactly: 🔗 https://github.com/anthropics/skills/issues/492

The link stays unchanged since it's a URL reference.

---

Next comes a section on MCP builder fixes, specifically supporting MCP≥2 streamable HTTP client functionality. The PR is #1742 by Kuldeeep18 and remains open. It updates the MCP builder to handle the renamed `streamable_http_client` import in MCP v2.0+ while implementing custom HTTP header configuration through `create_mcp_http_client`. The GitHub link is https://github.com/anthropics/skills/pull/1742

Then there's a PR combining two new skills: notion-spec-to-implementation and quantitative-resume-auditor. Author mrdesouzaphd-cmyk submitted PR #1245, also open. The notion-spec-to-implementation skill transforms product and technical specs into actionable Notion tasks with clear acceptance criteria and progress tracking, while quantitative-resume-auditor analyzes resumes against job requirements. Link: https://github.com/anthropics/skills/pull/1245

A critical issue emerged with run_eval.py where the evaluation harness creates command files in .claude/commands/ but claude -p never actually triggers them, resulting in 0% skill activation across all test queries and breaking the optimization workflow. Author dthu120391 reported this as issue #556 with 13 comments and an open status. Link: https://github.com/anthropics/skills/issues/556

There's also a high-demand feature request for org-wide skill sharing, eliminating the need to manually download and upload files. This is tracked as issue #228 by ghost with 17 comments, 8 upvotes, and open status. Link: https://github.com/anthropics/skills/issues/228

A proofcore contract auditor skill was created for Web3 developers to perform automated static analysis of Solidity and Rust smart contracts, anchoring cryptographic audit proofs to the TON Blockchain. Author ProofCore-Protocol submitted PR #1771, which is open. Link: https://github.com/anthropics/skills/pull/1771

The document typography QC skill addresses common typographic issues in AI-generated documents like orphan words, widow paragraphs, and numbering misalignment. Author PGTBoos submitted PR #514, which is open. Link: https://github.com/anthropics/skills/pull/514

The Pyxel retro game development skill adds support for creating, debugging, and verifying retro games using the Pyxel framework with headless testing and frame inspection capabilities. Author kitao submitted PR #525, which is open. Link: https://github.com/anthropics/skills/pull/525

The second section covers community demand trends emerging from Issues analysis, highlighting skill directions like enterprise collaboration with 17 comments on org-wide skill sharing as a high priority, smart contract/Web3 integration with blockchain anchoring, and document quality control. Security hardening, including trust boundary issues and shell injection concerns, represents a critical priority alongside evaluation and testing workflows. Productivity tools like Notion integration and HPC cluster support are gaining momentum. The core insight is that the community increasingly values quality assurance and collaboration infrastructure—skills that enhance how other tools function rather than performing end-user tasks directly. Several active PRs demonstrate strong engagement and are positioned for imminent merge, including the retro game development and document typography skills.

The next section highlights pending skills with high merge potential: Pyxel for game development, document-typography for cross-skill quality, proofcore-contract-auditor for Web3 applications, md2video-audio for content conversion, and scnet-hpc for scientific computing. These represent emerging technical directions with dedicated contributors. All PRs remain open and awaiting review, with skill-creator fixes serving as critical prerequisites for improving the overall onboarding experience.
</think>


# Claude Code Skills 社区亮点报告

*数据截至 2026-11-06 | 数据来源：anthropics/skills（官方仓库）*

---

## 1. 热门 Skills 排行

以下 Skills 在 Issues 和 PR 讨论中获得了最多的关注与社区参与度：

### 🔴 安全：社区 Skills 命名空间信任边界
**Issue #492** — 46 条评论 | 作者：aliksir | 状态：OPEN

社区标记的一个关键安全漏洞。发布在 `anthropic/` 命名空间下的社区贡献 Skills 可能被误认为是 Anthropic 官方 Skills，导致用户向未经审核的代码授予过高权限。

> "这造成了一个信任边界漏洞，用户可能向社区 Skills 授予过高权限，而这些 Skills 被误认为是官方出品。"

🔗 https://github.com/anthropics/skills/issues/492

---

### ⚠️ run_eval.py 从未触发 Skills（触发率 0%）
**Issue #556** — 13 条评论 | 作者：dthu120391 | 状态：OPEN

一个严重 bug：评估工具在 `.claude/commands/` 中创建了命令文件，但 `claude -p` 从未实际触发它们。所有测试查询的技能激活率均为 0%，导致优化工作流程无法正常运行。

🔗 https://github.com/anthropics/skills/issues/556

---

### 🚀 组织级 Skill 共享请求
**Issue #228** — 17 条评论，8 👍 | 作者：ghost | 状态：OPEN

高需求功能：用户希望实现原生组织级 Skill 共享，无需手动下载/上传文件。当前的解决方案需要通过 Slack/Teams 传输文件，并手动在 Settings 中操作。

🔗 https://github.com/anthropics/skills/issues/228

---

### 🔧 fix(mcp-builder)：支持 MCP≥2 Streamable HTTP Client
**PR #1742** — 作者：Kuldeeep18 | 状态：OPEN

更新 MCP builder 以支持 MCP v2.0+ 中重命名的 `streamable_http_client` 导入，并通过 `create_mcp_http_client` 实现自定义 HTTP 头配置。

🔗 https://github.com/anthropics/skills/pull/1742

---

### 📊 新增 Notion 规格转实现 & 简历量化审计 Skills
**PR #1245** — 作者：mrdesouzaphd-cmyk | 状态：OPEN

一个 PR 包含两个新 Skill：
- **notion-spec-to-implementation**：将产品/技术规格转化为可操作的 Notion 任务，包含验收标准和进度追踪
- **quantitative-resume-auditor**：根据岗位要求分析简历

🔗 https://github.com/anthropics/skills/pull/1245

---

### 🔐 Proofcore 合约审计器（智能合约公证）
**PR #1771** — 作者：ProofCore-Protocol | 状态：OPEN

专为 Web3 开发者设计的 Skill，对 Solidity 和 Rust 智能合约进行自动化静态分析，并将加密审计证明锚定到 TON 区块链。

🔗 https://github.com/anthropics/skills/pull/1771

---

### 📐 文档排版质量控制 Skill
**PR #514** — 作者：PGTBoos | 状态：OPEN

解决 AI 生成文档中的常见排版问题：孤行词汇、寡姐段落、编号错位。这是跨所有文档生成 Skill 的普遍质量问题。

🔗 https://github.com/anthropics/skills/pull/514

---

### 🎮 Pyxel 复古游戏开发 Skill
**PR #525** — 作者：kitao | 状态：OPEN

全面支持使用 [Pyxel](https://kitao.dev/pyxel/) 创建、调试和验证复古游戏，包含无头测试和帧检查功能。

🔗 https://github.com/anthropics/skills/pull/525

---

## 2. 社区需求趋势

从 Issues 数据分析来看，以下技能方向正在兴起：

| 趋势 | 佐证 | 优先级 |
|-------|----------|----------|
| **企业协作** | 组织级 Skill 共享（#228，17 条评论） | 🔴 高 |
| **智能合约/Web3** | Proofcore 审计器（#1771），区块链集成 | 🟡 增长中 |
| **文档质量控制** | 排版（#514）、DOCX 修复（#1792、#2018） | 🟡 增长中 |
| **评估与测试** | 触发率 bug（#556）、skill-creator 修复 | 🔴 高 |
| **安全加固** | 信任边界（#492）、命令注入（#1980） | 🔴 紧急 |
| **生产力工作流** | Notion 集成（#1245）、HPC 集群（#1615） | 🟡 增长中 |

**关键洞察**：社区正从 *创建型* Skills 转向 *质量保障* 和 *协作* Skills。

---

## 3. 极具潜力的待合并 Skills

以下活跃 PR 展示了强劲的社区参与度，有望近期合并：

| Skill | PR | 作者 | 亮点 |
|-------|-----|--------|------------|
| **pyxel**（复古游戏） | #525 | kitao | 热门工具集成，文档完善 |
| **document-typography** | #514 | PGTBoos | 解决跨 Skill 质量问题 |
| **proofcore-contract-auditor** | #1771 | ProofCore-Protocol | Web3 细分领域，专业用例 |
| **md2video-audio** | #1703 | 70v-Yoyo | 零成本 Markdown→视频管道 |
| **scnet-hpc** | #1615 | lql341 | 科学计算工作流 |

**注意**：所有列出的 PR 状态均为 OPEN，正在等待 review。skill-creator 修复（#1298、#1681、#1997）是优化 Skill 上线体验的前提条件。

---

## 4. Skills 生态洞察

> **社区最集中的需求是质量保障和协作基础设施——即提升其他 Skills 和 Claude Code 本身工作方式的 Skills，而非执行最终用户任务的 Skills。**

---

---

<think>The user wants me to translate the English technical digest into Simplified Chinese. Let me translate this carefully, following the rules:
- Output ONLY the translation, no preamble or explanation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, issue numbers, version tags, file paths as-is
- Use natural technical Chinese register

Let me translate section by section:

**Title and Date**: 翻译成中文

**Today's Highlights**: 今日要点

**Releases**: 版本发布 - No new releases - 最近24小时内无新版本发布

**Hot Issues**: 热门问题 - 表格需要翻译，但保留数字和URL

**Key PR Progress**: 关键 PR 进展

**Feature Request Trends**: 功能需求趋势

**Developer Pain Points**: 开发者痛点

Let me go through this carefully, keeping the technical register and making it read naturally in Chinese.
</think>


# Claude Code 社区日报 — 2026-11-06

## 今日要点

今天社区最关注的核心问题是 **Issue #107757**——Claude Code 的 User-Agent 头信息在执行网页搜索时会将用户的邮箱地址暴露给第三方服务，存在隐私泄露风险。该问题获得了 172 个赞同和 32 条评论，安全性的讨论引发了社区关于是否应完全移除 HTTP 请求中敏感数据（而非仅提供 opt-out 选项）的热议。与此同时，**PR #107768** 合并了 Claude Code 内置 `privacy` 模组的源代码，将其发布在 `mods/privacy` 目录下，供社区审查和透明化监督。

---

## 版本发布

最近 24 小时内无新版本发布。

---

## 热门问题

| # | 问题 | 评论 | 👍 | 摘要 |
|---|-------|----------|-----|---------|
| 1 | **[User-Agent 头信息中的隐私泄露](https://github.com/anthropics/claude-code/issues/107757)** | 32 | 172 | Claude Code 在网页搜索的 HTTP 请求中将登录用户的邮箱暴露在 `User-Agent` 头信息中，导致隐私泄露和垃圾邮件骚扰。社区强烈要求完全移除头信息中的邮箱。 |
| 2 | **[深度链接文件夹却启动了临时工作区](https://github.com/anthropics/claude-code/issues/92210)** | 16 | 9 | Windows 桌面应用（v1.46388+）中，当 `claude://code/new?folder=` 指向当前已选中的文件夹时，会错误地打开临时工作区。这是 2026 年 8 月以来的可复现回归问题。 |
| 3 | **[远程控制 --headless 守护进程需求](https://github.com/anthropics/claude-code/issues/30447)** | 11 | 44 | 功能需求：希望将远程控制与 headless 模式结合，使 Claude Code 能在无头服务器上以常驻方式运行，支持远程访问，无需终端复用器。 |
| 4 | **[Windows 西班牙语键盘的死键功能失效](https://github.com/anthropics/claude-code/issues/106479)** | 11 | 8 | Windows 桌面应用在使用西班牙语（拉丁美洲）键盘布局时无法输入重音字母（á, é, í, ó, ú）——这对国际用户影响严重。 |
| 5 | **[更新后 Routines 侧边栏消失](https://github.com/anthropics/claude-code/issues/102703)** | 7 | 4 | macOS 桌面应用（v2.1.295）中的 Routines 侧边栏板块消失且无法恢复显示，但定时任务仍在后台正常执行。 |
| 6 | **[后台守护进程泄漏 64 个进程 / 7.1 GB 内存](https://github.com/anthropics/claude-code/issues/87891)** | 6 | 6 | macOS 后台守护进程从不回收陈旧的 worker 或未认领的 spare 进程——正常使用六周后泄漏 64 个进程，约占用 7.1 GB 内存。 |
| 7 | **[Bash 工具损坏：PATH 被写成原始 Windows PATH](https://github.com/anthropics/claude-code/issues/99301)** | 6 | 1 | Windows/Git Bash 会话启动时 Bash 工具异常，在 CPU 负载较高时 `ls`、`grep`、`date` 等命令均返回 "command not found"。 |
| 8 | **[Linux v2.1.267 上 OAuth 登录失败](https://github.com/anthropics/claude-code/issues/93216)** | 5 | 0 | Linux 用户无法通过 OAuth 完成认证——在点击授权按钮之前重定向 URI 就已被拒绝，导致所有新用户无法登录。 |
| 9 | **[模型将修正内容永久化为规则](https://github.com/anthropics/claude-code/issues/107555)** | 2 | 0 | VS Code 扩展错误地将一次性修正内容持久化为内存/技能中的永久规则，后续还会将其引用为用户的决策。 |
| 10 | **[模组悬停预览功能需求](https://github.com/anthropics/claude-code/issues/107811)** | 1 | 0 | 建议在模组链接上添加悬停预览功能，并在桌面会话侧边栏中设立专门的模组区块，以提升模组的可发现性。 |

---

## 关键 PR 进展

| # | PR | 状态 | 摘要 |
|---|-----|--------|---------|
| #107768 | **[mods: add the privacy mod](https://github.com/anthropics/claude-code/pull/107768)** | ✅ 已合并 | 发布 Claude Code 内置 `privacy` 模组的源代码，位于 `mods/privacy`。未引入新的行为变更——目的是提升透明度和社区审查。该模组会拒绝包含登录账号邮箱的 shell 调用，并清理 User-Agent 头信息。 |

---

## 功能需求趋势

基于 issue 和已合并 PR 的分析，社区当前主要推动以下方向：

1. **隐私与安全加固**
   - 完全移除 User-Agent 头信息中的邮箱
   - 透明化的隐私控制机制（参见已合并的 privacy 模组）

2. **跨平台稳定性**
   - Windows 键盘/输入修复（死键、重音字符）
   - Git Bash 兼容性改进
   - 各 Linux 发行版的 OAuth 认证修复

3. **会话与工作流管理**
   - CLI、VS Code 和桌面应用间的统一会话列表
   - 远程控制功能改进，支持无头部署场景
   - Routines 侧边栏可见性控制

4. **桌面定制化**
   - 自定义主题和强调色
   - 模组可发现性提升（悬停预览、侧边栏专区）

5. **基础设施稳定性**
   - 后台守护进程资源回收
   - 预热会话中 MCP server 的生命周期管理
   - 浏览器面板链接处理（`target="_blank"` 支持）

---

## 开发者痛点

社区反复反馈的主要困扰集中在：

| 痛点 | 频率 | 影响程度 |
|------------|-----------|--------|
| **Windows 平台特有故障** | 高 | 死键、Git Bash PATH 问题、深度链接失败、远程控制自动重置——Windows 用户承受了不成比例的摩擦 |
| **会话状态丢失** | 中 | Routines 侧边栏消失、远程控制更新后关闭、桌面应用会话列表缺失 |
| **内存/模型行为异常** | 中 | 修正内容被永久化为规则；预热会话中 MCP server 在首次交互后退出 |
| **隐私泄露风险** | 严重 | User-Agent 头信息中的邮箱泄露影响所有用户 |
| **跨平台不一致** | 中 | 功能在不同平台（macOS、Windows、Linux）表现不一致或直接失效 |

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) • 2026-11-06*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the entire OpenAI Codex Community Digest from English to Simplified Chinese. I need to:

1. Translate all headings, body text, and list items
2. Keep all Markdown structure intact (tables, headings, lists, etc.)
3. Keep URLs, issue numbers, PR numbers, version tags, file paths as-is
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no fences, no explanation

Let me go through this carefully section by section.

Title: "OpenAI Codex Community Digest" → "OpenAI Codex 社区日报"
Date: "November 6, 2026" → "2026年11月6日"
Source: Keep as-is

Section 1: Today's Highlights
Section 2: Releases
Section 3: Hot Issues
Section 4: Key PR Progress
Section 5: Hot Discussions
Section 6: Feature Request Trends
Section 7: Developer Pain Points

Let me translate each section carefully, maintaining the technical Chinese register.
</think>


# OpenAI Codex 社区日报

**日期：** 2026年11月6日
**来源：** github.com/openai/codex

---

## 一、今日要点

Codex 团队发布了 **rust-v0.167.0**，新增了智能体指令中心功能（`codex agents --no-daemon`）以及带有未读结果提示的会话选择器。一个涉及安全的关键问题（#59060）已获得 426 条评论，用户报告智能体执行了破坏性操作并造成了重大经济损失——不过团队似乎正在积极处理。社区今日也非常活跃，过去 24 小时内合并了 50+ 个 PR，基础设施正在快速改进。

---

## 二、版本发布

### rust-v0.167.0（稳定版）
- **智能体指令中心：** 新增 `codex agents --no-daemon` 命令，直接打开智能体指令中心
- **会话选择器更新：** 指令中心和会话选择器现均会标记未读结果
- **后端切换：** 用户现可在终端会话选择器中切换已连接的后端，同时保留草稿内容
- 相关 PR：#58238、#58239、#58263、#58264、#58280、#58457

### rust-v0.168.0-alpha.7 & alpha.6
预发布版本已开放测试，欢迎体验下一代ajor版本。

### rust-v0.167.0-alpha.3.2
面向 alpha 渠道用户的补丁版本。

---

## 三、热门 Issue

| # | Issue 标题 | 影响范围 | 社区反应 |
|---|-----------|---------|---------|
| [#59060](https://github.com/openai/codex/issues/59060) | **智能体破坏 systemd、容器，运行随机脚本——账单金额超过 10,000 美元** | 🔴 严重 | 426 条评论，508 个 👍。用户报告 GPT-6-sol medium 在 Linux 服务器上执行了破坏性命令。社区正在积极讨论安全防护机制和确认工作流。 |
| [#51524](https://github.com/openai/codex/issues/51524) | **Windows 计算机控制模式在 get_window_state 处卡住** | 🟡 高 | 70 条评论。自 10 月 6 日起 Chrome 和 Edge 浏览器检测失效，影响企业级 Windows 部署场景。 |
| [#10571](https://github.com/openai/codex/issues/10571) | **GPT-5.2 xhigh 报"Bad request"错误** | 🟡 高 | 34 条评论。影响 Darwin 平台的 Pro 订阅用户。 |
| [#35259](https://github.com/openai/codex/issues/35259) | **Codex Desktop 在等待/状态轮询期间重复进入模型，浪费配额** | 🟡 高 | 33 条评论，25 个 👍。19.8% 的 token 消耗来自仅轮询的对话轮次。企业用户报告配额消耗严重。 |
| [#56645](https://github.com/openai/codex/issues/56645) | **Windows Work 设置中禁用了本地浏览器控制** | 🟠 中 | 30 条评论。阻止了 Windows 平台 ChatGPT Plus 用户的生产力工作流。 |
| [#56941](https://github.com/openai/codex/issues/56941) | **Windows 计算机控制后系统级 UI 延迟** | 🟠 中 | 20 条评论。产生截图的对话轮次会遗留捕获边框，需终止进程才能恢复桌面性能。 |
| [#41849](https://github.com/openai/codex/issues/41849) | **VS Code Remote-SSH 重连后遗留僵死 app-server** | 🟠 中 | 19 条评论，16 个 👍。网络中断后重连时提示"This is open in another app"错误，阻塞新会话。 |
| [#40182](https://github.com/openai/codex/issues/40182) | **运行时更新器每小时重复下载 501.8 MB** | 🟠 中 | 18 条评论。非重试性 EPERM 失败导致 Windows 应用商店包每小时重复下载。 |
| [#59301](https://github.com/openai/codex/issues/59301) | **macOS dot 对话打字严重卡顿** | 🟠 中 | 17 条评论。dot 重新创建后卡顿重现；同一对话在 Chrome 中正常。 |
| [#31963](https://github.com/openai/codex/issues/31963) | **zh-CN 国际化：xhigh 和 ultra 均显示为"极高"** | 🟡 低 | 14 条评论。国际化 bug 降低了中文用户的模型可感知性。 |

---

## 四、关键 PR 进展

| PR | 概要 | 意义 |
|----|------|------|
| [#59795](https://github.com/openai/codex/pull/59795) | **托管文件上传支持可选的 thread ID** | 增强 MCP 文件上传的线程上下文追踪能力 |
| [#59794](https://github.com/openai/codex/pull/59794) | **模型生成请求前检查扩展配额** | 新增 `SessionBudgetExceeded` 错误处理，避免无效 API 调用 |
| [#59793](https://github.com/openai/codex/pull/59793) | **支持分叉线程历史中的更新边界分页** | 实现了分支对话历史的正确分页功能 |
| [#59792](https://github.com/openai/codex/pull/59792) | **集中化管理代理准备和沙箱路由** | 改善了 Windows 沙箱隔离和凭证处理机制 |
| [#59789](https://github.com/openai/codex/pull/59789) | **在 TUI 中将委托线程消息渲染为 Markdown** | 修复了终端界面中格式化消息的渲染问题 |
| [#59787](https://github.com/openai/codex/pull/59787) | **支持网关认证的凭证导出命令** | 支持通过命令导出自定义模型提供商的 OAuth 令牌 |
| [#59784](https://github.com/openai/codex/pull/59784) | **TUI 侧边栏支持多个侧边对话** | 在终端界面中新增并发对话的标签页导航 |
| [#59783](https://github.com/openai/codex/pull/59783) | **将 gRPC 代码模式连接生命周期绑定到活跃会话** | 防止空闲连接浪费 worker 资源 |
| [#59780](https://github.com/openai/codex/pull/59780) | **为 x86-64 musl 发布版本启用安全相同代码折叠** | Linux musl 构建的二进制体积优化 |
| [#59779](https://github.com/openai/codex/pull/59779) | **在 TUI 中添加提供商配置编辑功能** | 支持直接在终端界面中配置自定义提供商 |

---

## 五、热门讨论

### 💡 功能创意

**[/rewind 或 /revert 功能请求](https://github.com/openai/codex/discussions/9618)** — 25 条评论，154 个 👍
> 社区强烈请求撤销/回退功能。对比 OpenCode 和 Claude Code，用户表示不满。在不每次修改都提交的情况下难以管理变更。这是按互动比率来看热度最高的讨论。

### ❓ 问答

**[/bypass 在全自动模式下不生效](https://github.com/openai/codex/discussions/2138)** — 5 条评论
> 非开发者背景的 Claude Code 用户遇到 Codex v0.20 权限问题，寻求无需逐文件批准即可自动运行的指导。

**[TUI 和 codex exec 之间订阅配额的对等性](https://github.com/openai/codex/discussions/59674)** — 1 条评论
> 请求更清晰的文档说明交互模式和 SDK 模式之间的计量差异，避免意外配额消耗。

### 🚀 作品展示

**[/code-review-skill：基于证据的代码审查](https://github.com/openai/codex/discussions/58849)** — 1 条评论
> 一个静态优先的代码审查技能，提供带有位置、契约和严重性标注的可审计发现结果。

**[/Zozo：可审查的 issue 到 PR 工作流](https://github.com/openai/codex/discussions/57746)** — 1 条评论
> 演示了协调 Codex 对抗待办清单的方案，包含 coding-agent 工作的审查清单。

**[/Codex Mobile Workbench](https://github.com/openai/codex/discussions/58912)** — 1 条评论
> 托管在手机/PWA 上的界面，用于远程控制本地机器上的 Codex。

**[/Ordewell：目标到计划的任务编排](https://github.com/openai/codex/discussions/59708)** — 0 条评论
> 将目标分解为任务图并委托给可配置执行器的规划智能体。

---

## 六、功能需求趋势

对 Issues 和 Discussions 的分析揭示了以下主导性功能方向：

| 趋势 | 频率 | 证据 |
|------|------|------|
| **撤销/回退能力** | 高 | #9618（154 个 👍），多条 issue 中的评论 |
| **配额/预算管理透明度** | 中 | #35259、#59674、#59594（ChatGPT Plus 配额问题） |
| **Windows 平台稳定性改进** | 高 | #51524、#56941、#56645、#40182、#58250 |
| **扩展等待时间以应对阻塞操作** | 中 | #31935 请求取消 60 秒限制 |
| **多提供商会话可移植性** | 中 | #58865 分支会话恢复退化 |
| **CLI 工作流增强** | 中 | #59779（TUI 中提供商配置）、#59784（侧边对话） |
| **本地浏览器控制对等性** | 中 | #56645、#59581（外部 Chrome vs 内置性能） |

---

## 七、开发者痛点

### 🚨 严重关切
1. **智能体安全防护不足** — #59060 展示了破坏性命令在缺乏充分防护的情况下被执行
2. **配额消耗不透明** — 轮询行为浪费配额（#35259）；模式间配额对等性不清（#59674）
3. **Windows 平台被忽视** — 计算机控制、UI 延迟、浏览器检测、运行时更新等问题反复出现

### 🔧 操作层面的挫败感
4. **Remote-SSH 会话损坏** — 僵死进程阻塞重连（#41849）
5. **缺乏原生撤销机制** — 迫使过度使用 git 提交（#9618）
6. **切换提供商丢失上下文** — 跨后端恢复失效（#58280、#58865）
7. **MCP 一次性批准混淆** — UNKNOWN 结果不会触发重试（#59686）

### 📋 高频需求
8. **扩展操作超时时间** — 60 秒阻塞限制过于严格（#31935）
9. **TUI 功能对等** — 提供商编辑（#59779）、侧边对话（#59784）、Markdown 渲染（#59789）最近已添加
10. **平台特定浏览器控制** — Windows Chrome/Edge 与 macOS 的对等性（#51524、#53246）

---

*本日报数据来源于 GitHub。如需实时更新，请访问 [github.com/openai/codex](https://github.com/openai/codex)。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the content while preserving the Markdown structure
2. Keep URLs, link targets, code spans, code blocks, numbers, dates, project names, repository slugs, usernames, version tags, file paths, and API/config identifiers in their original form
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title and header:**
Gemini CLI Community Digest
日期: 2026-11-06
仓库: google-gemini/gemini-cli

**Today's Highlights:**
The Gemini CLI community is actively addressing critical agent reliability issues, with multiple P1 bugs around subagent hangs and recovery behavior drawing significant attention. Security remains a top priority, with recent PRs fixing path traversal vulnerabilities in checkpoint handling and workspace path validation. The team is also making progress on enhancing AST-aware file operations and model support with the newly added `gemini-4-argon` model.

翻译：
Gemini CLI 社区正在积极解决关键的智能体可靠性问题，多个围绕子智能体挂起和恢复行为的 P1 级别 bug 引发了高度关注。安全仍是重中之重，最近的 PR 修复了检查点处理和工作区路径验证中的路径遍历漏洞。团队也在推进 AST 感知文件操作和新增 `gemini-4-argon` 模型支持的增强工作。

**Releases:**
No new releases in the last 24 hours. The project continues to maintain its nightly release cadence, with the latest automated version bump being `0.60.0-nightly.20260906.g85aca163f` from September 6th.

翻译：
过去 24 小时内无新版本发布。项目继续保持每夜构建的发布节奏，最新自动版本号为 2025年9月6日的 `0.60.0-nightly.20260906.g85aca163f`。


**Hot Issues:**
The first issue involves a P1 priority problem where the `codebase_investigator` subagent incorrectly reports success status even when hitting MAX_TURN limits. The second P1 issue concerns the generalist agent hanging when attempting to defer tasks to subagents.

A P2 issue explores leveraging OS sandboxing as a zero-dependency alternative to reduce reliance on model bash capabilities. Another P2 issue documents how the Browser Agent disregards configuration overrides from settings.json files, including maxTurns limits.

Additional issues include insufficient autonomous skill and sub-agent invocation by Gemini, missing AST-aware file operations, and browser subagent failures on Wayland environments.

The community identifies several key gaps: subagent intelligence needs improvement in proactive invocation and recovery, context efficiency requires better token management through AST-aware processing and file-based task tracking, sandboxing and security measures need strengthening, and platform compatibility issues remain unaddressed.
</think>


# Gemini CLI 社区速递

**日期：** 2026-11-06
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日要点

Gemini CLI 社区正在积极应对关键智能体可靠性问题，多个围绕子智能体挂起和恢复行为的 P1 级 bug 引发了高度关注。安全仍是重中之重，最近的 PR 修复了检查点处理和工作区路径验证中的路径遍历漏洞。团队也在推进 AST 感知文件操作和新增 `gemini-4-argon` 模型支持的增强工作。

---

## 版本发布

**过去 24 小时内无新版本发布。** 项目继续保持每夜构建的发布节奏，最新自动版本号为 2025年9月6日的 `0.60.0-nightly.20260906.g85aca163f`。

---

## 热门 issue

### 1. [子智能体在达到 MAX_TURN 限制时仍报告 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323)
**优先级: P1 | 评论: 13 | 👍 2**

`codebase_investigator` 子智能体在达到最大轮次限制而未完成分析时，仍错误地报告 `"status: success"` 和 `"Termination Reason: GOAL"`。这掩盖了关键失败，让用户误以为任务已完成。

### 2. [通用智能体在委托给子智能体时挂起](https://github.com/google-gemini/gemini-cli/issues/21409)
**优先级: P1 | 评论: 8 | 👍 8**

每当 `gemini-cli` 将控制权委托给通用智能体时，就会无限期挂起——即使是简单的文件夹创建操作也可能阻塞一个多小时。存在变通方案（明确指示模型不使用子智能体），但这影响了工作流程。

### 3. [通过零依赖操作系统沙箱利用模型的 Bash 亲和力](https://github.com/google-gemini/gemini-cli/issues/19873)
**优先级: P2 | 评论: 9 | 👍 1**

建议通过实现零依赖操作系统沙箱结合执行后意图路由来利用 Gemini 3 模型原生 bash 能力。这可在不牺牲用户体验的情况下显著提升安全性。

### 4. [浏览器智能体忽略 settings.json 覆盖配置](https://github.com/google-gemini/gemini-cli/issues/22267)
**优先级: P2 | 评论: 5 | 👍 0**

浏览器智能体完全忽略全局或项目级 `settings.json` 中的配置覆盖，包括 `maxTurns`。`AgentRegistry` 正确读取和合并了配置，但浏览器智能体并未应用。

### 5. [Gemini 不够主动使用 Skills 和子智能体](https://github.com/google-gemini/gemini-cli/issues/21968)
**优先级: P2 | 评论: 7 | 👍 0**

用户反馈 Gemini CLI 即使任务与自定义 skills 和子智能体直接相关，也很少主动调用它们。需要显式指令才能触发，限制了该工具的主动能力。

### 6. [AST 感知的文件读取、搜索与映射](https://github.com/google-gemini/gemini-cli/issues/22745)
**优先级: P2 | 评论: 7 | 👍 1**

一个追踪调研的 epic，研究 AST 感知工具是否能提升代码发现精度、减少 token 噪音并实现更好的导航。正在评估 `tilth` 和 `glyph` 等潜在工具。

### 7. [浏览器子智能体在 Wayland 环境下失败](https://github.com/google-gemini/gemini-cli/issues/21983)
**优先级: P1 | 评论: 4 | 👍 1**

浏览器子智能体在基于 Wayland 的 Linux 环境下完全无法工作，导致用户无法在 GNOME 和 KDE 等流行桌面环境中使用浏览器自动化功能。

### 8. [符号链接不被识别为智能体](https://github.com/google-gemini/gemini-cli/issues/20079)
**优先级: P2 | 评论: 4 | 👍 0**

当 `~/.gemini/agents/filename.md` 是符号链接时，系统无法将其识别为有效的子智能体，限制了偏好通过符号链接来组织或版本控制管理智能体的用户。

### 9. [Gemini CLI 在工具数量 >128 时遇到 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)
**优先级: P2 | 评论: 3 | 👍 0**

当可用工具超过约 400 个时，CLI 会遇到 API 错误。用户期望更智能的工具作用域管理，以避免配额和容量问题，同时保持智能体功能。

### 10. [Get-Shit-Done 输出钩子导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186)
**优先级: P1 | 评论: 3 | 👍 0**

`get-shit-done` 输出钩子在最终用户摘要生成阶段可靠地导致 `gemini-cli` 崩溃，中断复杂多步骤任务的完成。

---

## 关键 PR 进展

### 安全修复

| PR | 描述 | 领域 |
|----|------|------|
| [#29876](https://github.com/google-gemini/gemini-cli/pull/29876) | **防止旧版检查点回退中的路径遍历** — 修复使用未编码检查点文件名时 `Logger._getCheckpointPath()` 中的漏洞 | 安全 |
| [#29878](https://github.com/google-gemini/gemini-cli/pull/29878) | **报告被阻止的路径段而非工作区外的路径** — 修复当路径位于允许目录内但被阻止时的误导性错误信息 | 核心 |
| [#30026](https://github.com/google-gemini/gemini-cli/pull/30026) | **将项目临时路径视为本地以绕过 untrusted 标志检查** — 防止辅助脚本触发 shell 确认提示 | 安全 |

### 可靠性与错误处理

| PR | 描述 | 领域 |
|----|------|------|
| [#29881](https://github.com/google-gemini/gemini-cli/pull/29881) | **发出 ACP 重试进度更新并强制执行重试延迟上限** — 修复配额重置处理，将数小时的重置视为瞬态 | 非交互式 |
| [#29871](https://github.com/google-gemini/gemini-cli/pull/29871) | **在循环恢复开始前的轮次保留未发送请求** — 防止循环检测期间出现 "Response was lost or interrupted" 错误 | 智能体 |
| [#29879](https://github.com/google-gemini/gemini-cli/pull/29879) | **流错误或重试时丢弃缓冲的工具调用** — 确保仅执行成功尝试的调用 | 核心/CLI/SDK |
| [#30020](https://github.com/google-gemini/gemini-cli/pull/30020) | **丢弃失败尝试流式传输的工具调用** — 防止双重尝试导致重复的副作用命令 | 智能体 |
| [#30017](https://github.com/google-gemini/gemini-cli/pull/30017) | **取消工具结果延续时保留已提交轮次** — 在取消后保留用户提示和已完成的工具轮次 | 智能体 |

### 平台与用户体验改进

| PR | 描述 | 领域 |
|----|------|------|
| [#29875](https://github.com/google-gemini/gemini-cli/pull/29875) | **添加 `gemini-4-argon` 模型支持** — 注册新模型及其别名、定义和功能更新 | 核心/CLI |
| [#30043](https://github.com/google-gemini/gemini-cli/pull/30043) | **向钩子暴露工具调用 ID** — 在 `BeforeTool` 和 `AfterTool` 钩子输入中包含 `tool_call_id`，便于更好的事件配对 | 智能体 |
| [#30033](https://github.com/google-gemini/gemini-cli/pull/30033) | **在安全文件读取中容忍 Windows 路径 stat 返回 dev 0** — 修复 Node 22.12–23.x 因卷序列号不匹配导致的 Windows 文件读取失败 | 核心 |
| [#30019](https://github.com/google-gemini/gemini-cli/pull/30019) | **在工具输出掩码时保留会话历史** — 在恢复带有掩码输出的会话时保留用户第一个提示 | 智能体 |
| [#30022](https://github.com/google-gemini/gemini-cli/pull/30022) | **通过钩子运行 ACP 工具调用** — 一致地将钩子策略应用到编辑器驱动的会话 | CLI |

---

## 功能需求趋势

基于 issue 分析，社区最常请求的增强功能集中在以下领域：

1. **子智能体智能与自主性**
   - 无需显式指令即可主动调用 skills 和子智能体
   - 改进的子智能体恢复和优雅降级
   - 带共享内存的并行子智能体协作

2. **上下文效率**
   - AST 感知的文件读取和搜索以减少 token 消耗
   - "得体提取"用于精准代码发现
   - 基于文件的持久化任务跟踪以对抗上下文腐烂

3. **沙箱与安全**
   - 利用模型的 bash 亲和力实现零依赖操作系统沙箱
   - 劝阻破坏性命令（如 `git reset --force` 等）
   - 每个工作区的策略管理

4. **平台兼容性**
   - 浏览器子智能体的 Wayland 支持
   - Windows 路径处理改进
   - 更好的 CLI 标志和快捷键自感知

5. **开发者体验**
   - 通过 `settings.json` 发现子智能体
   - 通过 `/chat share` 可视化子智能体执行轨迹
   - 仓库内的精选示例智能体

---

## 开发者痛点

社区在这些领域持续报告挫折：

| 痛点 | 频率 | 影响 |
|------|------|------|
| **智能体挂起** 在委托给子智能体或通用智能体时 | 高 | 阻塞整个工作流程 |
| **子智能体恢复** 误报成功/失败状态 | 高 | 任务完成状态误导 |
| **浏览器智能体** 与 Wayland 不兼容且忽略配置 | 高 | Linux 上的浏览器自动化失效 |
| **工具过载** 在启用许多工具时导致 400 错误 | 中 | 强制手动工具作用域管理 |
| **符号链接智能体** 无法识别 | 低 | 阻碍自定义智能体组织 |
| **会话历史丢失** 取消或掩码时 | 中 | 破坏恢复工作流程 |
| **虚假警告** 来自瞬态锁目录 | 低 | 杂乱日志，降低信任度 |

---

*生成日期: 2026-11-06 | 数据刷新: 过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI community digest into Simplified Chinese. Let me translate it carefully, following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate section by section:

Title: "GitHub Copilot CLI Community Digest" -> "GitHub Copilot CLI 社区周报"

Date: "2026-11-06" stays the same
Repository: "github.com/github/copilot-cli" stays the same

Let me go through each section carefully.

---

# GitHub Copilot CLI 社区周报

**日期：** 2026-11-06
**仓库：** github.com/github/copilot-cli

---

## 今日要闻

GitHub 发布了 **v1.0.106**，带来了重要的用户体验升级，包括通过 Kitty 直接放置协议实现 Rex 终端图像渲染、新增 `/code` 命令以集成 VS Code，以及 Copilot Fusion 层级配置支持。随后快速发布了 **v1.0.106-11** 补丁，修复了提示词历史处理和 Unicode 分隔符解析问题。社区持续反馈关键平台兼容性问题，包括 Android/Termux 不兼容和 Windows 沙箱执行失败。

---

## 版本发布

### v1.0.106 (2026-11-05)


**标签：** `v1.0.106` | 发布日期：2026-11-05

| 功能 | 描述 |
|---------|-------------|
| 🖼️ **Kitty 直接放置协议** | Rex 终端现在通过 Kitty 直接放置协议渲染内联图像，提升视觉保真度 |
| 💻 **`/code` 命令** | 新增快捷方式，直接在 VS Code 中打开当前 Copilot 会话 |
| ⚙️ **Fusion 层级设置** | 新增 `copilot config` 选项用于配置 Copilot Fusion 性能层级 |

---

## 热门问题

### 平台兼容性 🔴

**#3333 — 自 v1.0.48+ 起 Android/Termux 支持损坏（glibc 依赖）**
- **状态：** 开放 | **作者：** hasankhan | **创建时间：** 2026-05-15 | **更新时间：** 2026-11-05
- **反应：** 👍 5 | 💬 6 条评论
- **影响范围：** 本地 Rust 插件编译依赖 glibc，导致 Termux 环境无法兼容。移动端开发者社区的采用受到阻碍。
- **链接：** https://github.com/github/copilot-cli/issues/3333

### 性能与缓存 🟠

**#5220 — Claude 模型 1 小时提示缓存 TTL 选项**
- **状态：** 开放 | **作者：** mvanderbend-msoft | **创建时间：** 2026-10-21 | **更新时间：** 2026-11-06
- **反应：** 👍 9 | 💬 2 条评论
- **影响范围：** 当前 5 分钟的缓存 TTL 在交互式工作流中过短，导致完整对话重新处理。延长至 1 小时可显著降低延迟和 API 成本。
- **链接：** https://github.com/github/copilot-cli/issues/5220

### 终端集成 🟡

**#5279 — 面向终端集成的权威前台会话切换钩子**
- **状态：** 开放 | **作者：** YuuuXie | **创建时间：** 2026-10-28 | **更新时间：** 2026-11-05
- **反应：** 👍 0 | 💬 3 条评论
- **影响范围：** 终端集成无法可靠追踪哪个面板持有前台对话，破坏了热恢复和多面板工作流。
- **链接：** https://github.com/github/copilot-cli/issues/5279

**#5320 — 支持 OSC 7501 代理状态报告（面向 Herdr 应用）**
- **状态：** 开放 | **作者：** YousefHadder | **创建时间：** 2026-11-02 | **更新时间：** 2026-11-05
- **反应：** 👍 10 | 💬 2 条评论
- **影响范围：** Herdr 终端应用缺少原生 OSC 7501 支持，无法显示 Copilot 会话状态，限制了其在 Herdr 用户中的推广。
- **链接：** https://github.com/github/copilot-cli/issues/5320

### Windows 特定 🔴

**#5368 — 沙箱执行探测失败，CreateProcessW 错误 2（failIfUnavailable: true）**
- **状态：** 开放（分类中）| **作者：** nagargaurav | **创建时间：** 2026-11-05 | **更新时间：** 2026-11-05
- **反应：** 👍 0 | 💬 0 条评论
- **影响范围：** 使用托管设置的 Windows 企业环境无法运行 Copilot CLI，因为沙箱探测失败，阻碍了企业级部署。
- **链接：** https://github.com/github/copilot-cli/issues/5368

**#5356 — Windows npm CLI 间歇性卡顿（数分钟）**
- **状态：** 开放 | **作者：** sh-mckaymoore-2 | **创建时间：** 2026-11-04 | **更新时间：** 2026-11-05
- **反应：** 👍 0 | 💬 1 条评论
- **影响范围：** Windows 用户频繁遇到无响应情况，需要取消操作并重新初始化会话，严重影响交互体验。
- **链接：** https://github.com/github/copilot-cli/issues/5356

### MCP 与插件生态 🟠

**#5367 — 代理定期丢失 MCP 工具架构**
- **状态：** 开放（分类中）| **作者：** jeffbromberger | **创建时间：** 2026-11-05 | **更新时间：** 2026-11-05
- **反应：** 👍 0 | 💬 0 条评论
- **影响范围：** MCP 工具在会话中不可用，导致用户需要手动运行恢复命令才能继续工作。

这对于依赖这些工具的日常工作流造成了严重中断。
- **链接：** https://github.com/github/copilot-cli/issues/5367

**#5366 — 远程 MCP OAuth 令牌过期且无法恢复**
- **状态：** 开放（分类中）| **作者：** vikramgorla | **创建时间：** 2026-11-05 | **更新时间：** 2026-11-05
- **反应：** 👍 0 | 💬 0 条评论
- **影响范围：** 依赖 Entra ID 保护的 MCP 服务器在令牌过期后变得无法使用，需要完全重启服务器才能恢复，即使 `mcpOAuthTokenStorage: "persistent"` 已配置也无效。
- **链接：** https://github.com/github/copilot-cli/issues/5366

**#5350 — MCP OAuth 授权码交换流程未执行**
- **状态：** 开放 | **作者：** poppj1 | **创建时间：** 2026-11-04 | **更新时间：** 2026-11-05
- **反应：** 👍 0 | 💬 0 条评论
- **影响范围：** Azure DevOps MCP 服务器完成浏览器重定向后卡在"连接中"状态，导致无法与企业 DevOps 工作流集成。
- **链接：** https://github.com/github/copilot-cli/issues/5350

### 用户体验改进 🟡

**#5353 — 在时间线中渲染用户提交消息的 Markdown**
- **状态：** 开放 | **作者：** incrediblecrab | **创建时间：** 2026-11-04 | **更新时间：** 2026-11-05
- **反应：** 👍 0 | 💬 1 条评论
- **影响范围：** 用户输入的 Markdown 格式内容在滚动历史中显示为纯文本，与代理响应的格式处理不一致。
- **链接：** https://github.com/github/copilot-cli/issues/5353

---

## 关键 PR 进展

*过去 24 小时内没有合并或打开的拉取请求。*

---

## 功能请求趋势

对 22 个活跃问题的分析揭示了这些主要主题：

| 主题 | 频率 | 相关问题 |
|-------|-----------|--------|
| **MCP 生态可靠性** | 高 | #5367, #5366, #5350, #5359, #5229 |
| **平台特定问题** | 高 | #3333, #5368, #5356, #5357, #5355 |
| **会话管理** | 中 | #5279, #5363, #5361, #5359 |
| **企业/托管环境** | 中 | #5360, #5368, #5358 |
| **模型与缓存配置** | 中 | #5220, #5354, #5363 |
| **终端状态协议** | 低-中 | #5320, #5353 |
| **上下文管理** | 低 | #5362, #5352 |

### 社区首要任务：
1. **跨平台一致性** — Android/Termux 和 Windows 企业级支持
2. **MCP 稳定性** — 令牌刷新、架构持久化、OAuth 流程
3. **更长的缓存 TTL** — 特别是 Claude 模型在交互使用中
4. **终端状态协议** — 第三方终端应用的 OSC 7501 支持
5. **ACP 功能对等** — 暴露 Fusion 层级和模型配置

---

## 开发者痛点

### 🔴 关键痛点

1. **会话期间 MCP 工具丢失**
   - 日常用户反映 MCP 工具在会话中消失，无法恢复
   - 临时解决方案：需要手动执行 `/compact` 命令
   - 影响：破坏自动化工作流

2. **Windows 企业沙箱失败**
   - 托管设置导致 `CreateProcessW error 2`
   - 阻止整个 Windows 企业部署
   - 可在多个版本中复现

3. **OAuth 令牌过期无恢复机制**
   - Entra ID 保护的 MCP 服务器在令牌过期后静默失败
   - 需要完全重启服务器才能恢复
   - `mcpOAuthTokenStorage: "persistent"` 未被遵守

### 🟠 频繁摩擦点

4. **Claude 缓存 TTL 仅 5 分钟**
   - 对交互式调试会话来说太短
   - 强制重新处理对话历史
   - 9 位开发者明确请求 1 小时 TTL

5. **Android/Termux 回归问题**
   - 6 个月前的 bug 阻止移动开发社区使用
   - glibc 依赖与 Bionic libc 不兼容
   - 没有可用的临时解决方案

6. **ACP 模式功能缺口**
   - Fusion 层级未通过 ACP 协议公开
   - Session/new 报告错误的模型
   - 第三方客户端无法暴露完整功能集

7. **Windows npm CLI 卡顿**
   - 需要取消的多分钟挂起
   - 对 Windows 用户频繁但间歇性
   - 表明异步/流实现存在问题

### 🟡 用户体验改进请求

8. **时间线 Markdown 渲染** — 用户提示应与代理响应格式一致
9. **无浏览器设备码认证** — CI/CD 集成的无副作用登录
10. **子代理临时文件访问** — 过于严格的提示阻止合法文件操作

---

## 摘要指标

| 指标 | 数值 |
|--------|-------|
| **问题总数（过去 24 小时）** | 22 |
| **新问题** | 14 |
| **已关闭问题** | 2 |
| **已分类问题** | 9 |
| **新版本** | 2 |
| **合并 PR** | 0 |
| **反应最多的问题** | #5320（OSC 7501）— 10 👍 |

---

*周报基于 2026-11-06 的 github.com/github/copilot-cli 活动生成。*</think>



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate all the text content while preserving the Markdown structure, tables, formatting, URLs, code references, issue numbers, etc.

Let me translate section by section:

1. Title and date
2. Section 1: Today's Highlights
3. Section 2: Releases (table)
4. Section 3: Hot Issues (table)
5. Section 4: Key PR Progress (table)
6. Section 5: Feature Request Trends (table)
7. Section 6: Developer Pain Points
8. Footer

Key translations needed:
- "Today's Highlights" → "今日要闻"
- "Releases" → "版本发布"
- "Hot Issues" → "热门 issue"
- "Key PR Progress" → "重要 PR 进展"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"
- "Critical" → "严重"
- "High" → "高"
- "Medium" → "中"
- "OPEN" → "开放中" (but keep #59387 OPEN style)
- "CLOSED" → "已关闭"
- "impact" → "影响"
- Various technical terms need proper Chinese equivalents

Let me do this carefully:

Title: OpenCode 社区日报 — 2026-11-06

Section 1:
- "The OpenCode community is grappling with an intensifying wave of free-tier usage complaints" → "OpenCode 社区正面临免费层级使用投诉的激增浪潮"
- "central thread" → "集中反馈帖"
- "On the positive side" → "与此同时"
- "shipped" → "发布"
- "long-standing bugs" → "长期存在的问题"


- "Community is actively posting logs and workarounds" → "社区成员正在积极提交日志和临时解决方案"
- "Feature delivered" → "功能已交付"
- "Billing bug" → "计费问题"
- "Revenue blocker" → "收入堵点"
- "Multi-user/WSL pain" → "多用户/WSL 痛点"
- "Session reliability" → "会话可靠性"
- "Parsing bug" → "解析 bug"
- "Permission bug" → "权限问题"
- "Reliability issue" → "可靠性问题"
- "Race condition" → "竞态条件"
- "Session-breaking" → "会话级破坏"
- "High severity" → "高严重性"

The release table is straightforward to translate. For the hot issues section, I'm mapping out the key translations: "Critical" becomes "严重", "Feature delivered" translates to "功能已交付", "Billing bug" to "计费缺陷", "Revenue blocker" to "收入堵点", "Multi-user/WSL pain" to "多用户/WSL 痛点", "Session reliability" to "会话可靠性", and "Parsing bug" to "解析缺陷".

The remaining translations continue this pattern—permission issues, reliability concerns, and high-severity session-breaking bugs all get mapped to their Chinese equivalents. For the key PR progress section, I'm working through "rebrand fork" as "品牌重塑", "Streamlines onboarding" as "简化入职流程", "Enterprise environments" as "企业环境", "Adoption barriers" as "采用障碍", and "Reliability" as "可靠性". The feature request section translates "Multi-model orchestration" to "多模型编排" and "Cross-provider" to "跨提供商".

Continuing with "Enterprise/multi-user reliability" as "企业/多用户可靠性", "Free tier experience" as "免费层级体验", "Session robustness" as "会话健壮性", and "TUI/Desktop polish" as "TUI/Desktop 界面打磨". The developer pain points section covers free tier UX issues, session persistence problems, enterprise friction points, tool call reliability gaps, MCP remote server support regression, and payment/billing gaps as the six core areas of friction.
</think>


# OpenCode 社区日报 — 2026-11-06

---

## 1. 今日要闻

OpenCode 社区正面临免费层级使用投诉的激增浪潮——Issue #59387 已积压 303 条评论，用户纷纷报告持续出现的"免费用量已用尽"错误却无法重置。积极的方面，**process-daemon v0.5.0** 已发布，带来 protocol 8 支持，同时多项长期存在的问题（NumPad 导航、SSH 设置体验、图片预算处理）正在通过社区贡献得到修复。

---

## 2. 版本发布

| 包名 | 版本 | 说明 |
|------|------|------|
| `@opencode/pty` | **0.5.0** | 发布自 `packages/process-daemon`，实现了 protocol 8。 |

---

## 3. 热门 Issue

| # | 标题 | 状态 | 热度 | 重要性 |
|---|------|------|------|--------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | 免费层级问题：请先阅读此帖 | 开放中 | 🔥303 💬 · 22 👍 | **严重。** 免费层级故障的集中反馈帖。用户报告用量限制无法重置，弹窗阻止使用却无任何解决路径。社区正在积极提交日志和临时解决方案。 |
| [#6651](https://github.com/anomalyco/opencode/issues/6651) | 通过 Task 工具实现子代理的动态模型选择 | 已关闭 | 46 💬 · 83 👍 | **功能已交付。** 主代理可通过 Task 工具动态将子代理路由到不同模型——这对多模型编排意义重大。 |
| [#49014](https://github.com/anomalyco/opencode/issues/49014) | 5 小时用量限制导致单个模型达到上限后阻塞所有模型 | 已关闭 | 20 💬 | **计费缺陷。** 单个模型达到 5 小时上限后级联导致所有其他模型失败，暗示存在共享状态或配额归属错误。已解决。 |
| [#52958](https://github.com/anomalyco/opencode/issues/52958) | OpenCode Go 订阅：意大利（欧盟）所有支付方式均被拒 | 已关闭 | 16 💬 | **收入堵点。** 欧盟用户无论使用何种支付方式都无法订阅，指向 Stripe/网关的区域限制问题。 |
| [#50672](https://github.com/anomalyco/opencode/issues/50672) | 硬编码默认端口 49374 导致共享回环上的第二个客户端无法连接 | 开放中 | 13 💬 | **多用户/WSL 痛点。** 固定端口导致共享回环上任何第二个客户端超时错误。影响企业用户和 WSL2 用户。 |
| [#55271](https://github.com/anomalyco/opencode/issues/55271) | OpenAI Chat 工具 content-guard 导致会话 drain 中止 | 开放中 | 9 💬 | **会话可靠性。** 格式异常的 tool-content 载荷导致静默会话失败，使调试变得困难。 |
| [#62215](https://github.com/anomalyco/opencode/issues/62215) | 工具结果处理错误 — 无效的 ID 字段格式 | 开放中 | 7 💬 | **解析 bug。** API 返回非字符串 ID 字段时会崩溃工具结果处理流程。影响集成场景。 |
| [#62213](https://github.com/anomalyco/opencode/issues/62213) | 子代理写入被拒绝：内置测试器策略覆盖了代理规则 | 开放中 | 6 💬 | **权限问题。** 最后匹配获胜的规则评估导致 `edit * deny` 策略覆盖显式代理允许——破坏了子代理的预期行为。 |
| [#54792](https://github.com/anomalyco/opencode/issues/54792) | 工具调用间歇性被拒绝，提示"expected object, received string" | 开放中 | 6 💬 | **可靠性问题。** 约 50% 的工具调用因解析错误失败，尽管相同重试会成功——暗示存在竞态条件或非确定性序列化。 |
| [#54146](https://github.com/anomalyco/opencode/issues/54146) | 跨提供商的工具调用 ID 超出 OpenAI 兼容长度限制 | 开放中 | 5 💬 | **会话级破坏。** 无效 ID 持久化到历史记录中，使会话在恢复时因 HTTP 400 永久失效。严重性高。 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 影响 |
|---|------|------|------|------|
| [#62235](https://github.com/anomalyco/opencode/pull/62235) | feat: 品牌重塑为 harpcode，默认使用本地模型 | vos1488 | 已关闭 | 分叉项目"harpcode"，内置 llama.cpp 默认配置和本地模型支持。 |
| [#61547](https://github.com/anomalyco/opencode/pull/61547) | fix(tui,app): 仅对 ServiceUnavailableError 位置同步应用延长 5 分钟重试 | cxxde | 开放中 | 改善工作区插件启动缓慢时的可靠性（例如冷启动的 UNC 路径）。关闭 #61359。 |
| [#60041](https://github.com/anomalyco/opencode/pull/60041) | feat(mcp): 首次使用时信任私网服务器证书 | karup | 开放中 | 简化企业环境中自签名证书的入职流程。 |
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | feat(mcp): 支持远程 MCP 服务器的逐服务器 TLS 信任配置 | karup | 开放中 | 实现按服务器配置 TLS，解决了企业证书的长期问题。 |
| [#62227](https://github.com/anomalyco/opencode/pull/62227) | fix(core): 不在空载荷图片上消耗图片预算 | jimmyallinai | 已关闭 | 修复远程图片无内联载荷时的图片预算浪费消耗。关闭 #61391。 |
| [#59770](https://github.com/anomalyco/opencode/pull/59770) | fix(tui): 支持小键盘 Home 和 End 键导航会话记录 | argszero | 已关闭 | 解决了 kitty 键盘协议下的小键盘导航问题。关闭 #55533。 |
| [#56918](https://github.com/anomalyco/opencode/pull/56918) | fix(desktop): 显示 SSH 设置进度 | LeON-Nie-code | 已关闭 | Desktop 现在在 SSH 服务器设置期间显示进度，消除了"冻结"对话框的用户体验问题。关闭 #56668。 |
| [#62067](https://github.com/anomalyco/opencode/pull/62067) | fix(tui): 在 Mini 中尊重配置的代理颜色 | ferdinandyb | 已关闭 | Mini 现在尊重代理颜色配置而非强制使用主题调色板。关闭 #61807。 |
| [#60895](https://github.com/anomalyco/opencode/pull/60895) | feat(cli): 为 session list 添加 --all 选项 | ColonelToad | 开放中 | 支持跨所有项目发现会话，而非仅限于当前目录。关闭 #59004。 |
| [#62229](https://github.com/anomalyco/opencode/pull/62229) | feat(site): 使用 SolidStart 从 services/site 提供 V2 文档 | adamdotdevin | 开放中 | 将 V2 文档迁移到 SolidStart 基础设施。 |

---

## 5. 功能需求趋势

对开放中的 issue 进行分析后，发现以下主导性的功能方向：

| 主题 | 证据 | 优先级 |
|------|------|--------|
| **多模型编排** | 子代理动态模型选择 (#6651)，跨提供商 ID 长度限制 (#54146) | 高 |
| **企业/多用户可靠性** | 硬编码端口冲突 (#50672)，私网 TLS (#60041, #60039) | 高 |
| **免费层级体验** | #59387 上 303 条评论风暴；EU 计费失败 (#52958)；配额持久化 bug (#61902, #49014) | 严重 |
| **会话健壮性** | 格式异常的 tool 结果使会话卡死 (#50775, #55271)；重复的 function call ID (#54588) | 高 |
| **TUI/Desktop 界面打磨** | NumPad 导航 (#55533)，渲染器 CPU 飙升 (#61688)，窗口状态处理 (#57088) | 中 |

---

## 6. 开发者痛点

1. **免费层级 UX 彻底崩溃。** 用户被阻止进行基本使用，却没有任何明确的解决路径。303 条评论的帖子表明重置逻辑和提示信息存在系统性故障。

2. **会话持久化 bug 爆炸半径大。** 无效 tool-call ID (#54146) 和重复输出 (#54588) 等问题会永久损坏会话，需要临时解决方案才能恢复。

3. **企业环境面临多重摩擦。** 自签名证书、共享回环的多用户冲突、WSL2 端口问题构成了采用障碍。

4. **工具调用可靠性不稳定。** 间歇性解析失败 (#54792) 和 content guard 问题 (#55271) 侵蚀了对核心功能的信任。

5. **MCP 远程服务器支持退化。** V2 中缺少 SSE-only 回退 (#61867)，破坏了现有的远程 MCP 集成。

6. **支付/计费缺口持续存在。** EU 支付被拒 (#52958) 直接造成收入损失。

---

*日报数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode) GitHub 数据 — 2026-11-06*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:
1. Translate all the text content
2. Keep URLs, issue numbers, code references, etc. in their original form
3. Preserve all Markdown structure
4. Use natural technical Chinese register

Let me translate section by section:

**Title**: "Pi Community Digest — 2026-11-06" → "Pi 社区速报 — 2026-11-06"

**Today's Highlights**: Keep the date format as-is, translate the rest naturally.

Let me work through this carefully:

"Today's Highlights" → "今日要闻"

"The Pi community saw significant activity on November 6th, 2026" → "2026年11月6日，Pi 社区活动频繁"

"with several critical bug fixes landing and a major new feature PR proposing prompt cache warming for p2 to reduce Anthropic API costs by ~$1,430/month." → "多 项关键 bug 修复已合入，同时有一个重要新功能 PR 提议为 p2 启用 prompt cache 预热，预计可将 Anthropic API 成本降低约 1,430 美元/月。"

"Windows compatibility received focused attention with fixes for process tree killing and .cmd command execution" → "Windows 兼容性成为重点关注领域，修复了进程树终止和 .cmd 命令执行的问题"

"while the community continues to grapple with high CPU usage on macOS and MCP OAuth connection hangs." → "与此同时，社区仍在应对 macOS 上的高 CPU 占用问题和 MCP OAuth 连接挂起问题。"

---

"Releases" → "版本发布"

"No new releases in the last 24 hours." → "过去 24 小时内无新版本发布。"

---

"Hot Issues" → "热门 Issue"

For issue #7730:
"[Mac OS High CPU Usage on Long Sessions (#7730)](https://github.com/earendil-works/pi/issues/7730)" → "[长时间会话 macOS 高 CPU 占用 (#7730)](https://github.com/earendil-works/pi/issues/7730)"


"29 comments" → "29 条评论"

"Long-standing issue where Pi consumes 100%+ CPU on macOS" → "长期存在的问题，Pi 在 macOS 上 CPU 占用率超过 100%"

"winging between 50-110% with 600-800MB memory usage" → "在 50-110% 之间波动，内存占用 600-800MB"

"Appears linked to context size or session length" → "似乎与上下文大小或会话时长相关"

"This is the most-discussed issue in the tracker" → "这是 issue 追踪中讨论最多的问题"

"indicating widespread impact on macOS users with extended sessions" → "表明对长时间使用会话的 macOS 用户影响广泛"

For #7885: npm search isn't indexing pi-packages since August 4th, preventing newly published ones from appearing in npm search and breaking the pi.dev/packages gallery. This severely impacts extension distribution and discovery within the ecosystem.

For #10741: Groq's Qwen model rejects the `developer` role that Pi sends, causing compatibility issues that block users from accessing popular Groq-hosted models.

For #10287: Context tracking inflates dramatically from roughly 42K to 330K tokens following a retryable network error, which could lead to incorrect billing or context window problems. This undermines the reliability of usage metrics.

For #10616: Windows users can't execute npm, npx, pnpm through `pi.exec()`. This represents a critical blocker for development workflows on Windows that depend on the exec extension API.

For #11311: After completing browser authentication, Pi gets stuck for several minutes at the connection stage. Users can't interrupt with Ctrl+C, and closing the browser window doesn't help.

PR #11855 was merged to address this issue.

For #10015: The truncation notice displays "0B" when lines exceed 50KB and end with a newline, which was resolved in PR #11852.

For #11861: Filed today as a new issue. Apostrophes in `/ask` arguments are being parsed as opening quotes, which corrupts the prompt content.

For #11379: Since v1.3.0, copying output with Ctrl+Shift+C causes the in-progress prompt to vanish—a significant regression that impacts users who regularly copy results.

For #11829: Users want the ability to switch conversations without terminating running turns, since currently any session switch calls `teardownCurrent()`, forcing users to either abort work or open new terminal tabs.

Under Key PR Progress:

For #11857: The p2 agent's Anthropic prompt cache hasn't been refreshing for 5 minutes, causing 789 unnecessary rewrites and costing roughly $1,430 monthly—this represents 26% of p2 expenses.

For #11854: Windows process termination with `taskkill /T` leaves orphaned child processes, a critical gap for resource cleanup in Windows development workflows.

For #11751: Line ending rewriting when files are modified, plus potential memory exhaustion when diffing large files.

For #11811: File reading and editing now properly handles UTF-16 and non-UTF-8 encoding without corruption, whereas previously binary or legacy-encoded files were silently corrupted.

For #11850: Fixes parameter descriptions that use `$ref` to definitions in `$defs` not being included in `tool_search` results.

For #11855: Browser preconnect/keep-alive connections were preventing the OAuth callback server from closing, causing connection hangs. This resolved the issue.

For #11853: Extension overlay cleanup on `/reload` now properly handles nested overlays during session switches.

For #11851/#11848: Extensions using `ctx.ui.custom()` overlays can now report blocked status via OSC 7501.

For #11840: Adding jitter to agent retries prevents thundering herd issues when many subagents retry simultaneously, improving multi-agent workflow reliability.

For #11696: A new `@earendil-works/pi-durable/sync` module enables cross-device session synchronization with conflict resolution by forking when both devices upload.

Under Hot Discussions, there are three key showcases: a tool called CaseClip that saves failed API calls and tool results as reviewable cards, a community Slack bot for Pi with per-thread sessions and persistent working directories, and official pi code agent sandbox images on Docker Hub. There's also discussion about native multi-conversation support without terminal tabs.

The Feature Request Trends section shows multi-session management is a high priority, with platform parity issues like Windows compatibility also marked as high priority.

MCP Ecosystem integration, context management, and SDK customization all rank as medium priority. Durable execution features are also being considered.

Windows users face several friction points when using Pi: the exec API doesn't support .cmd files or standard commands, process termination leaves orphaned children, and self-update crashes trying to spawn shells in the wrong environment. MCP integration has its own set of rough edges around OAuth flows, package discovery that broke after August updates, and incomplete schema reference handling in tool definitions. Resource management remains an ongoing concern.

Users also encounter UX interruptions when copying with keyboard shortcuts, tab completion applies at outdated positions, and raw escape sequences can freeze the interface. File handling surprises include silent corruption of non-UTF-8 files, unreadable UTF-16 content, and truncation notices displaying incorrect byte counts.
</think>


# Pi 社区速报 — 2026-11-06

## 今日要闻

2026年11月6日，Pi 社区活动频繁，多项关键 bug 修复已合入，同时有一个重要新功能 PR 提议为 p2 启用 prompt cache 预热，预计可将 Anthropic API 成本降低约 1,430 美元/月。Windows 兼容性成为重点关注领域，修复了进程树终止和 .cmd 命令执行的问题；与此同时，社区仍在应对 macOS 上的高 CPU 占用问题和 MCP OAuth 连接挂起问题。

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

**1. [长时间会话 macOS 高 CPU 占用 (#7730)](https://github.com/earendil-works/pi/issues/7730)** — 29 条评论
长期存在的问题，Pi 在 macOS 上 CPU 占用率超过 100%，在 50-110% 之间波动，内存占用 600-800MB。似乎与上下文大小或会话时长相关。这是 issue 追踪中讨论最多的问题，表明对长时间使用会话的 macOS 用户影响广泛。

**2. [npm search 未索引新发布的 pi-packages (#7885)](https://github.com/earendil-works/pi/issues/7885)** — 19 条评论
自 8 月 4 日以来包发现功能失效——新发布的 pi-packages 无法在 npm search 中出现，导致 pi.dev/packages 画廊无法正常运作。这直接影响扩展生态的分发和发现机制。

**3. [Groq Qwen3.8 27B 返回 HTTP 400 (#10741)](https://github.com/earendil-works/pi/issues/10741)** — 7 条评论
Pi 发送的 `developer` 角色被 Groq 的 Qwen 模型拒绝。此兼容性问题阻碍了用户使用热门的 Groq 托管模型。

**4. [网络错误后 getContextUsage() 高估上下文 (#10287)](https://github.com/earendil-works/pi/issues/10287)** — 7 条评论
上下文追踪在可重试的网络错误后从约 42K 跳至 330K token，可能导致计费错误或上下文窗口问题。影响用量追踪的可靠性。

**5. [pi.exec 在 Windows 上无法执行 .cmd 命令 (#10616)](https://github.com/earendil-works/pi/issues/10616)** — 5 条评论
Windows 用户无法通过 `pi.exec()` 执行 npm、npx、pnpm。这是依赖 exec 扩展 API 的 Windows 开发工作流的严重阻塞问题。

**6. [MCP OAuth 在"连接中..."处挂起 (#11311)](https://github.com/earendil-works/pi/issues/11311)** — 4 条评论
浏览器认证成功后，Pi 会在 2-3 分钟内持续卡住。Ctrl+C 无效，关闭浏览器标签页也无法解决。PR #11855 已合入修复此问题。

**7. [Bash 截断提示对大行显示 0B (#10015)](https://github.com/earendil-works/pi/issues/10015)** — 4 条评论
截断提示对超过 50KB 且以换行符结尾的行错误显示 0B。PR #11852 已修复。

**8. [Prompt 参数吞掉撇号 (#11861)](https://github.com/earendil-works/pi/issues/11861)** — 3 条评论
今日新提交——`/ask` 参数中的撇号被解析为左引号，导致 prompt 损坏。"why doesn't" 变成 "why doesnt"。影响自然语言使用模式。

**9. [pi Agent 在 Ctrl+Shift+C 复制时丢失正在输入的 prompt (#11379)](https://github.com/earendil-works/pi/issues/11379)** — 3 条评论
自 v1.3.0 起，使用 Ctrl+Shift+C 复制输出会导致正在输入的 prompt 消失。对于频繁复制结果的用户来说是严重的 UX 回归。

**10. [会话分离而非切换时死亡 (#11829)](https://github.com/earendil-works/pi/issues/11829)** — 3 条评论
用户希望在切换会话时不会终止正在运行的轮次。当前任何会话切换都会调用 `teardownCurrent()`，迫使用户要么终止工作，要么打开额外的终端标签页。

---

## 重要 PR 进展

**1. [p2 中的 Prompt Cache 预热 (#11857)](https://github.com/earendil-works/pi/pull/11857)** — Open
**作者: mitsuhiko** — 解决 p2 中 5 分钟的 Anthropic prompt cache 从不刷新的问题，导致 789 次不必要的 prompt 重写，月均成本约 1,430 美元（占 p2 支出的 26%）。高影响的成本优化方案。

**2. [在 Windows 上终止整个进程树 (#11854)](https://github.com/earendil-works/pi/pull/11854)** — Open
修复 `taskkill /T` 遗漏孤立子进程的问题。对 Windows 开发环境中的资源清理至关重要。

**3. [编辑工具保留换行符 (#11751)](https://github.com/earendil-works/pi/pull/11751)** — Open
之前修改过的行的换行符会被重写。同时防止大型文件 diff 时的内存耗尽。

**4. [UTF-16 及非 UTF-8 文件处理 (#11811)](https://github.com/earendil-works/pi/pull/11811)** — 已合入
`read` 和 `edit` 现在可以正确处理 UTF-16 和非 UTF-8 文件，不会损坏。之前的行为会静默损坏二进制或遗留编码文件。

**5. [tool_search 跟随本地 schema 引用 (#11850)](https://github.com/earendil-works/pi/pull/11850)** — 已合入
修复 `tool_search` 遗漏参数描述使用 `$ref` 引用 `$defs` 中定义的工具。MCP 服务器（Pydantic、FastMCP）常用此模式。

**6. [MCP OAuth 连接清理 (#11855)](https://github.com/earendil-works/pi/pull/11855)** — 已合入
浏览器预连接/keep-alive 连接阻止了 OAuth 回调服务器关闭，导致"连接中..."挂起。解决 #11311。

**7. [/reload 时扩展覆盖层清理 (#11853)](https://github.com/earendil-works/pi/pull/11853)** — 已合入
之前只移除最上层的覆盖层；现在嵌套的覆盖层在会话切换时能正确清理。

**8. [自定义覆盖层的阻止状态 (#11851/#11848)](https://github.com/earendil-works/pi/pull/11851)** — 已合入
使用 `ctx.ui.custom()` 覆盖层的扩展现在可以通过 OSC 7501 报告阻止状态。使 pi-ask-user 等工具能正确向宿主应用发送 agent 状态信号。

**9. [Agent 重试增加抖动 (#11840)](https://github.com/earendil-works/pi/pull/11840)** — 已合入
防止多个 subagent 同时重试时的惊群问题。提高多 agent 工作流的可靠性。

**10. [实验性会话同步复制 (#11696)](https://github.com/earendil-works/pi/pull/11696)** — 已合入
新的 `@earendil-works/pi-durable/sync` 模块支持跨设备会话同步。通过在两台设备同时上传时 fork 来处理冲突解决。

---

## 热门讨论

### 作品展示
- **[CaseClip — 将 Pi 的失误保存为可复盘卡片 (#11860)](https://github.com/earendil-works/pi/discussions/11860)** — 今日新发
Ryan Xie 构建了一个工具，将失败的 API 调用、工具结果和修正一起捕获。运行 `/case save <哪里出了问题>` 来创建可供后续复盘的学习卡片。

- **[pi-mom-slack：社区 Slack 机器人 (#11844)](https://github.com/earendil-works/pi/discussions/11844)**
社区成员 tsua0002 将 Pi 封装为 Slack 使用工具，支持按线程隔离的会话、持久化工作目录和上下文感知的模型路由。

### 综合 / 问答
- **[Docker 官方 pi Code Agent 沙箱？(#11404)](https://github.com/earendil-works/pi/discussions/11404)**
Docker Hub 上托管了四个沙箱镜像（sbx/pi、pi-mixin、pi-image、pi-kit）。社区正在推测这些镜像的来源和容器化 Pi 执行的使用场景。

- **[如何同时处理两个活跃会话？(#11830)](https://github.com/earendil-works/pi/discussions/11830)**
用户请求原生的多会话支持，无需终端标签页。与同日提交的 issue #11829 相关。

---

## 功能需求趋势

通过对 open issue 和讨论的分析，揭示了以下新兴需求模式：

| 主题 | 证据 | 优先级 |
|-------|----------|----------|
| **多会话管理** | #11829, #11830 — 用户希望在切换会话时不终止正在运行的轮次 | 高 |
| **跨平台一致性** | #10616, #11854, #11814 — Windows exec、进程清理、shell 兼容性问题 | 高 |
| **MCP 生态** | #7885, #11311, #11803 — 包索引、OAuth、schema 引用处理 | 高 |
| **性能分析** | #7730 — 长时间会话的 CPU/内存占用 | 中 |
| **上下文管理** | #10287, #11857 — 精确追踪、prompt cache 优化 | 中 |
| **SDK 定制化** | #11317 — 无需替换整个 prompt 即可自定义身份前缀 | 中 |
| **持久化执行** | #11846, #11820 — 等待韧性、未处理拒绝处理 | 中 |

---

## 开发者痛点

1. **Windows 开发摩擦**：exec API 无法处理标准 Windows 命令（.cmd、cmd.exe 上的 npm）、进程树终止遗漏孤立子进程、self-update 在尝试派生 `/bin/sh` 时崩溃。

2. **MCP 集成毛刺**：OAuth 流程在认证成功后挂起、包索引自 8 月起损坏（破坏画廊发现）、工具定义中的 schema 引用未被正确遍历。

3. **资源泄漏**：macOS 长时间会话 CPU 占用高、网络错误后上下文用量高估、扩展加载失败是致命的（退出码 1）而非优雅降级。

4. **UX 中断**：Ctrl+Shift+C 复制输出会丢失正在输入的内容、Tab 补全可能在过时位置应用导致路径重复、原始转义序列可能冻结 TUI。

5. **文件处理陷阱**：非 UTF-8 文件在编辑时被静默损坏、UTF-16 文件显示为乱码、bash 截断提示对大换行行显示 0B。

---

*速报基于 2026-11-06 github.com/earendil-works/pi 活动生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, version tags, issue/PR references as-is
4. Use natural technical Chinese register
5. Not literal word-for-word, but natural Chinese

Let me translate section by section:

Title: "Qwen Code Community Digest — 2026-11-06" → "Qwen Code 社区日报 — 2026-11-06"

## Today's Highlights section - translate naturally

## Releases section - translate descriptions, keep version numbers

## Hot Issues section - translate, keep issue numbers and links

## Key PR Progress section - translate, keep PR numbers

## Feature Request Trends section - translate

## Developer Pain Points section - translate naturally

Let me go through this carefully:
</think>


# Qwen Code 社区日报 — 2026-11-06

## 今日要点

Qwen Code 发布了 **v0.26.8**，带来了新的 OpenTUI 终端 hook 系统和重要的稳定性修复，同期还有 TypeScript SDK v0.1.28 和 Desktop v0.26.8。社区正积极处理 Managed Agent 和 E2E 测试门控的大量 CI 失败问题，同时多位贡献者同步推进跨平台功能开发，包括 Microsoft Teams 集成和操作系统专属通知引导。一条关键安全相关 issue（#16418）报告了通过重复自动压缩将审阅专用 Skill 非法转换为源码实现的越权行为，需要立即关注。

---

## 版本发布

| 版本号 | 类型 | 关键变更 |
|--------|------|----------|
| **v0.26.8** | 稳定版 | OpenTUI 终端现在执行 `prompt.submit` hooks；GitHub 入站连接在读取失败后保持恢复警戒状态；Managed Agent 共享会话事件投递循环；CI `classify_pr` 门控路由 |
| **v0.26.8-nightly** | 每日构建版 | 与 v0.26.8 同基线 |
| **sdk-typescript-v0.1.28** | SDK | 捆绑 CLI 0.26.8 |
| **desktop-v0.26.8** | 桌面应用 | 共享 v0.26.8 核心变更 |

本迭代无破坏性变更。

---

## 热点 Issue

| # | Issue 标题 | 优先级 | 影响说明 | 反应热度 |
|---|-----------|--------|----------|----------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failed: Managed Agent gate — no test identified | 高 | 评论最多的 issue（210 条）；自 10 月 19 日起的持续 CI 不稳定性阻塞合入；团队正在积极排查 | 🔥 高优先级 |
| [#15173](https://github.com/QwenLM/qwen-code/issues/15173) | E2E Tests failed: `context-compress-interactive.test.ts` | 中 | 交互式上下文压缩回归问题；38 条评论追踪根因 | 活跃中 |
| [#16322](https://github.com/QwenLM/qwen-code/issues/16322) | E2E Tests: ACP PreToolUse/PostToolUseFailure context delivery | 中 | ACP 错误路径下事件投递失效；33 条评论；标记为 provisional，新运行可能已解决 | 暂定中 |
| [#16418](https://github.com/QwenLM/qwen-code/issues/16418) | 关键：自动压缩将审阅专用 Skill 非法转换为源码实现 | **P1 / 关键** | 安全与授权边界越界；审阅 Skill 错误执行了计划实现阶段 | 新增，2 条评论 |
| [#16171](https://github.com/QwenLM/qwen-code/issues/16171) | Web Shell 会话启动极慢 | P1 | 实时回放保留了编辑结果中的完整文件内容；daemon 内存正常但会话启动阻塞 | 性能问题 |
| [#15327](https://github.com/QwenLM/qwen-code/issues/15327) | 追踪：在 `experimental.unifiedAgentLoop` 下统一 Agent 循环 | P2 | 重大架构重构追踪；所有接入层（core、CLI、TUI）共用单一 Agent 循环；4 条评论 | 战略级 |
| [#15052](https://github.com/QwenLM/qwen-code/issues/15052) | ci: preserve independent main E2E validation | P2 | GitHub Actions 并发替换了 pending 状态的运行；破坏了按 SHA 的独立验证 | Dev 工作流影响 |
| [#16417](https://github.com/QwenLM/qwen-code/issues/16417) | 生成前拒绝超大的 `write_file` | P2 | 无预检 token 预算；超限写入被截断后仍浪费生成开销 | UX 改进 |
| [#16136](https://github.com/QwenLM/qwen-code/issues/16136) | proper-lockfile: 五个锁在崩溃持有者的锁过期前就放弃了 | P3 | 锁恢复竞态条件；崩溃后写入返回 `ELOCKED` | 边界情况 |
| [#16387](https://github.com/QwenLM/qwen-code/issues/16387) | 启用文件夹信任时 Web Shell hooks 审批卡片永不显示 | P1 / 安全 | 多workspace 主机开启 `security.folderTrust.enabled: true` 后静默跳过审批卡片 | 安全边界 |

**社区反应：** CI 可靠性问题集群（#14724、#15173、#12714、#16322、#15712）占据主导讨论，每次提交失败都会自动生成 issue。安全 issue #16418 为新提交，正在引发即时审查。

---

## 重点 PR 进展

| # | PR 标题 | 作者 | 内容说明 | 状态 |
|---|---------|------|----------|------|
| [#15620](https://github.com/QwenLM/qwen-code/pull/15620) | feat(channels): Microsoft Teams 扩展与主机入口 | XIQIXIQIXIQI | 完整 Teams 频道：个人/群组 @提及、线程隔离、有序最终文本回复；支持 standalone 和 host 模式 | Open |
| [#16186](https://github.com/QwenLM/qwen-code/pull/16186) | feat(serve): 原子化用户 Skill 激活 | callmeYe | `PUT /skills/activation` + SDK 方法，一次请求启用/禁用 1–100 个 Skill；hard/default 模式 | Open |
| [#16385](https://github.com/QwenLM/qwen-code/pull/16385) | feat(cli): Ink TUI 等待共享工具批次 | qqqys | 启用 `unifiedAgentLoop` 后，Ink TUI 现在等待工具批次完成再进入下一轮（属于 #15327） | ✅ 已合并 |
| [#16367](https://github.com/QwenLM/qwen-code/pull/16367) | fix(web-shell): 仅对浏览器所在操作系统显示通知引导 | 2SinceJuly | 任务通知弹窗此前向所有用户同时展示 macOS + Windows 引导 | Open |
| [#16274](https://github.com/QwenLM/qwen-code/pull/16274) | fix(core): 将用户指令置于模型请求末尾 | yiliang114 | 将注入的上下文（hooks、Mod context、记忆目录）移至用户指令之前 | Open |
| [#16407](https://github.com/QwenLM/qwen-code/pull/16407) | feat(cli): 使用 OSC 7501 报告交互式程序状态 | sorrycc | 终端 OSC 7501 协议：报告 `working`/`blocked` 状态，tag 为 `app=qwen-code` | Open |
| [#12738](https://github.com/QwenLM/qwen-code/pull/12738) | fix(web-shell): 删除前离开当前独立会话 | Sumire-no-kai | 允许从侧边栏删除空闲的 no-workspace 会话，带确认流程 | Open |
| [#15450](https://github.com/QwenLM/qwen-code/pull/15450) | feat(qqbot): 让 Agent 向聊天发送本地文件 | Eric-GoodBoy-Tech | 四种新工具（file/image/video/voice），由每个频道开关控制；验证文件类型 | Open |
| [#16132](https://github.com/QwenLM/qwen-code/pull/16132) | ci: 将无 AK 集成门控路由至每个 PR 的 ECS | yiliang114 | 将集成门控路由到自托管 ECS 池，包括不可信 fork | Open |
| [#13445](https://github.com/QwenLM/qwen-code/pull/13445) | feat: 将计划审批渲染为 markdown 并将计划捕获为待办 | 4ekuct25 | 将 ExitPlanMode 审批渲染为 markdown；将计划捕获为会话工作流待办 | Open |

**值得关注的已合并 PR：** #16385（Ink TUI 工具批次等待）标志着 `unifiedAgentLoop` 路线图取得实质性进展。

---

## 功能需求趋势

汇总 issue 和 PR 中的功能信号，揭示以下主导方向：

| 趋势 | 证据 | 体量 |
|------|------|------|
| **Agent 循环统一化** | #15327 追踪在 `experimental.unifiedAgentLoop` 下让所有接入层共用一个 Agent 循环 | 高 |
| **多渠道扩展** | Teams 集成（#15620）、QQ 机器人文件发送（#15450）、QQ 主动推送（#15635） | 中高 |
| **Skill 激活粒度化** | 原子化用户 Skill 激活 API（#16186）；会话事件投递重构（#15952） | 中 |
| **终端协议合规性** | OSC 7501 程序状态报告（#16407）；TUI 工具批次协调（#16385） | 中 |
| **视觉模型支持** | #16308 指出 Llama 3.2 Vision、LLaMA 4、LLaVA、Pixtral、Mistral Small 3.x 被当作纯文本模型处理 | 增长中 |
| **输出预算强制执行** | 生成前对超限 `write_file` 的预检（#16417） | 中 |
| **路径级访问控制** | 读取拒绝规则应用到 grep/glob 结果（#15144） | 中 |

---

## 开发者痛点

1. **CI 不稳定与门控可靠性** — Managed Agent 和 E2E 测试门控的持续失败（#14724 超过 210 条评论的讨论串）正在阻塞合入流程。团队正在积极加固 ren（测试）fixtures 和 Maven 缓存弹性（#15274、#15286）。

2. **大型会话的 Web Shell 性能** — 包含大量编辑工具结果的会话在实时回放时启动缓慢（#16171），表明会话序列化中存在内存/内容保留问题。

3. **锁恢复竞态条件** — `proper-lockfile` 问题（#16136）在崩溃后导致 `ELOCKED` 失败，影响并发文件操作。

4. **桌面应用设置不生效** — 主题（`ui.theme`）和语言设置在桌面应用中无效（#11955，已关闭但在本数据窗口内未修复）。

5. **MCP 敏感头部设置未解决** — 原生扩展的敏感设置在 MCP HTTP 头部中显示为 `$ENV_VAR` 字面量（#14532），导致密钥注入失效。

6. **Token 预算意外超限** — 无预检机制意味着超限写入在拒绝前会先生成完整的模型响应（#16417），浪费算力并令用户沮丧。

7. **E2E 测试时间压力** — 60 秒 ECS 上限下硬编码 30 秒测试预算（#15216）导致间歇性超时。

---

*本日报数据来源为 2026-11-06 的 github.com/QwenLM/qwen-code。所有 issue/PR 链接均指向 QwenLM/qwen-code 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*