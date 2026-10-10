# AI CLI 工具社区动态日报 2026-10-10

> 生成时间: 2026-10-10 01:53 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this cross-tool comparison report into Chinese. Let me go through the translation carefully:

1. I need to output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve exact Markdown structure: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, version tags, paths as-is
4. Keep project names, usernames, issue/PR references as-is (don't translate them)
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

**Title:**
# 跨工具对比报告：AI CLI 工具生态

**Date:** 2026年10月10日

**1. 生态系统概览**

The AI CLI tools landscape is entering a consolidation phase, with leading tools (Claude Code, OpenAI Codex) shipping stable releases while rapidly iterating on multi-agent architectures and platform reliability. Open-source alternatives (OpenCode, Pi, Qwen Code) are gaining traction by targeting niche needs—OpenCode's MCP protocol completeness, Pi's multi-provider flexibility, and Qwen Code's Kubernetes-native runtime. Common themes across all tools: session durability, enhanced extensibility, and cross-platform Windows/Linux reliability remain the dominant development priorities, reflecting a maturation from feature-flashing to production-hardening.

AI CLI 工具领域正在进入整合阶段，头部工具（Claude Code、OpenAI Codex）发布稳定版本的同时，快速迭代多智能体架构并提升平台可靠性。开源替代方案（OpenCode、Pi、Qwen Code）正在获得关注，它们瞄准特定需求——OpenCode 完善的 MCP 协议、Pi 的多供应商灵活性，以及 Qwen Code 的 Kubernetes 原生运行时。所有工具的共同主题是：会话持久性、增强的可扩展性，以及跨平台 Windows/Linux 可靠性，这些仍是主要开发优先事项，反映出从功能炫技到生产实用的成熟转变。

Let me continue with the activity comparison table carefully:

| Tool | Issues | PRs (24h) | Discussions | Releases (24h) |


|------|--------|-----------|-------------|----------------|
| **Claude Code** | 50 (30 shown) | 7 | N/A* | 1 (v2.1.296) |
| **OpenAI Codex** | 40 | 20 | 13 | 3 (v0.162.1 + 2 alphas) |
| **Gemini CLI** | 50 | 20 | 0 | 2 (nightly + preview) |
| **GitHub Copilot CLI** | 43 | 2 | 0 | 5 (patch series) |

The table shows activity metrics across the main AI CLI tools. Claude Code and OpenAI Codex lead in releases with stable versions shipping, while OpenCode shows no recent releases despite being actively developed.

| **OpenCode** | 30 | 20 | 0 | 0 |
| **Pi** | 30 | 10 | 3 | 0 |
| **Qwen Code** | 30 | 20 | 0 | 2 (preview + nightly) |

OpenCode and Qwen Code maintain high PR activity despite lacking releases, suggesting they're in active development phases. Pi has the lowest activity across all metrics.

All tools demonstrate healthy PR activity between 7-20 daily, indicating vigorous development. OpenAI Codex and Gemini CLI lead in volume, while Claude Code, OpenCode, and Qwen Code maintain balanced backlogs. GitHub Copilot CLI's minimal PR count but high release frequency (5) indicates a patch-driven release strategy rather than feature development.

The system tracks several key requirements across platforms: session persistence and checkpoint recovery appears in Claude Code, OpenAI Codex, Qwen Code, and OpenCode; context window configurability surfaces in Claude Code, GitHub Copilot CLI, and Pi; multi-device synchronization shows up in OpenAI Codex and Claude Code; enhanced sandbox security is noted in GitHub Copilot CLI and Claude Code; Windows reliability improvements span Claude Code, OpenAI Codex, Gemini CLI, and Pi; MCP protocol completeness appears in OpenCode, Claude Code, and GitHub Copilot CLI; platform-specific features like ARM64 and Wayland are tracked in OpenAI Codex, OpenCode, and Pi; and extensibility through plugins is documented in Claude Code (Mods), Gemini CLI (skills), and OpenCode (plugins).

The tools differentiate themselves through primary focus areas and target audiences. Claude Code targets enterprise developers with sophisticated permission models and a Mods architecture designed for exponential extensibility. OpenAI Codex emphasizes cross-platform reliability across Windows and Linux with comprehensive platform coverage and token replay debugging. Gemini CLI optimizes for large monorepos using hierarchical file discovery and AST-based surgical reads. GitHub Copilot CLI leverages GitHub ecosystem integration with native Entra authentication and interactive sandbox with per-command credential injection. OpenCode prioritizes MCP protocol leadership and V2 feature parity with deep MCP client implementation and opencode:// deep linking. Pi focuses on multi-provider flexibility and terminal UX customization with a provider-agnostic architecture and custom Cloudflare gateway support. Qwen Code targets enterprise devops teams with K8s CSI driver and staged Managed Agent architecture with durable sessions.

Looking at community momentum, Claude Code shows strong activity with 50 issues and 248 comments on the top issue, featuring security-focused PRs and a mature ecosystem. OpenAI Codex maintains high velocity with 20 PRs daily and 13 active discussions, iterating quickly on cross-platform features. Gemini CLI has high PR throughput but lower engagement on issues, suggesting strong internal development with less external community participation. GitHub Copilot CLI has released 5 patches in 24 hours, indicating active stabilization. Qwen Code is driving rapid development with Stage D/G/H multi-agent roadmap and active design discussions.

Pi shows lower volume but high-quality feature requests with strong Windows focus, while OpenCode maintains balanced activity focused on V2 parity without frequent releases.

Looking at industry trends, multi-agent architectures are emerging as the next frontier—Qwen Code's staged Managed Agent design, Claude Code's Mods proposal, and OpenCode's plugin ecosystem all point toward multi-agent orchestration as the defining capability for 2027. All tools are prioritizing production reliability over novelty, with bug fixes like crashes, memory leaks, and session recovery taking precedence over flashy features—the average PR-to-issue ratio of 0.4-0.7 indicates bug-fix heavy cycles.

Enterprise features are gaining traction with HIPAA settings in OpenAI Codex, secure gateway policies in Claude Code, and session auditability in Qwen Code positioning these as competitive differentiators. Windows remains problematic—at least four of seven tools have explicit Windows-specific issues blocking users across input rendering, sandbox, ARM64, and clipboard, making this a systemic ecosystem challenge rather than tool-specific. MCP is emerging as a standard with OpenCode's deep implementation and Gemini CLI's skill system suggesting the protocol is becoming the de facto extensibility layer. Context management remains difficult—token bloat, auto-compaction, and context ceiling parsing appear across multiple tools, indicating this is a fundamental unsolved problem requiring architectural solutions.

Data compiled from GitHub activity on October 10, 2026, with technical decision-makers evaluating AI CLI tooling in mind.

Now I'm formatting the Markdown table to match the original specification exactly. I need to verify the spacing and alignment markers (|:---, |:---:, |---: ) are consistent across all header rows. The table should preserve column widths and formatting as specified in the original document.</think>

# 跨工具对比报告：AI CLI 工具生态

**日期：** 2026年10月10日

---

## 1. 生态系统概览

AI CLI 工具领域正在进入整合阶段，头部工具（Claude Code、OpenAI Codex）发布稳定版本的同时快速迭代多智能体架构，并持续提升平台可靠性。开源替代方案（OpenCode、Pi、Qwen Code）正在获得关注，它们瞄准特定需求——OpenCode 完善的 MCP 协议、Pi 的多供应商灵活性，以及 Qwen Code 的 Kubernetes 原生运行时。所有工具的共同主题是：会话持久性、增强的可扩展性，以及跨平台 Windows/Linux 可靠性仍是主要开发优先事项，反映出从功能炫技到生产实用的成熟转变。

---

## 2. 活跃度对比

| 工具 | Issues | PRs (24h) | Discussions | Releases (24h) |
|:-----|:-------|:---------:|:-----------:|:---------------:|
| **Claude Code** | 50（显示30个） | 7 | N/A* | 1（v2.1.296） |
| **OpenAI Codex** | 40 | 20 | 13 | 3（v0.162.1 + 2 个 alpha） |
| **Gemini CLI** | 50 | 20 | 0 | 2（nightly + preview） |
| **GitHub Copilot CLI** | 43 | 2 | 0 | 5（补丁系列） |
| **OpenCode** | 30 | 20 | 0 | 0 |
| **Pi** | 30 | 10 | 3 | 0 |
| **Qwen Code** | 30 | 20 | 0 | 2（preview + nightly） |

*Claude Code 使用 Issues 和 PRs 作为主要渠道； Discussions 并非其主要社区界面。

**观察：** 所有工具的 PR 活跃度都很健康（7–20 个 PR/天），表明开发活跃。OpenAI Codex 和 Gemini CLI 在总量上领先；Claude Code、OpenCode 和 Qwen Code 的待办 backlog 较为平衡。GitHub Copilot CLI 的 PR 数量低（2个）但发布数量高（5个），表明其采用补丁驱动的发布模式。

---

## 3. 共同功能方向

| 需求 | 出现在 |
|------|--------|
| **会话持久性 / 检查点恢复** | Claude Code、OpenAI Codex、Qwen Code、OpenCode |
| **上下文窗口可配置性** | Claude Code、GitHub Copilot CLI、Pi |
| **跨设备 / 多设备同步** | OpenAI Codex、Claude Code |
| **增强的沙盒安全性** | GitHub Copilot CLI、Claude Code |
| **Windows 可靠性修复** | Claude Code、OpenAI Codex、Gemini CLI、Pi |
| **MCP 协议完善度** | OpenCode、Claude Code、GitHub Copilot CLI |
| **平台特性支持（ARM64、Wayland）** | OpenAI Codex、OpenCode、Pi |
| **可扩展性 / 插件架构** | Claude Code（Mods）、Gemini CLI（skills）、OpenCode（plugins） |

---

## 4. 差异化分析

| 工具 | 主要聚焦 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级扩展性，通过 hookify 实现，安全的网关策略 | 企业、对安全性敏感的开发者 | 成熟的权限模型；Mods 架构实现 10 倍可扩展性 |
| **OpenAI Codex** | 跨平台可靠性，Windows/Linux 覆盖 | 需要广泛平台支持的开发者 | 全面的平台覆盖；token 回放用于调试 |
| **Gemini CLI** | AST 感知的代码库操作，性能优化 | 大型单仓项目的开发者 | 层级式文件发现优化；基于 AST 的精准读取 |
| **GitHub Copilot CLI** | GitHub 生态系统集成，沙盒安全性 | 现有 GitHub 用户 | 原生 Entra 认证；交互式沙盒，支持单命令凭证注入 |
| **OpenCode** | MCP 协议领先地位，V2 功能 parity | MCP 工具开发者 | 深度 MCP 客户端实现；通过 `opencode://` 实现深度链接 |
| **Pi** | 多供应商灵活性，终端 UX 定制 | 多模型用户、终端高级用户 | 供应商无关架构；自定义 Cloudflare 网关支持 |
| **Qwen Code** | 多智能体编排，Kubernetes 原生运行时 | 企业 DevOps 团队 | K8s CSI 驱动；分阶段 Managed Agent 架构，支持持久化会话 |

---

## 5. 社区活力与成熟度

**最活跃社区：**

1. **Claude Code** — 50 个 issues，置顶 issue（#91870）有 248 条评论，安全相关 PR 占主导（7 个 PR 中有 4 个是安全修复）。成熟的生态系统，有完善的 issue 分类机制。
2. **OpenAI Codex** — 每天 20 个 PR，活跃讨论 13 个，跨平台重点明确。在头部工具中迭代速度最快。
3. **Gemini CLI** — PR 吞吐量高，但 issue 评论较少（置顶 issue 9–13 条）。内部开发强劲，外部社区参与度较低。

**快速迭代：**
- **GitHub Copilot CLI** — 24 小时内发布 5 个版本（补丁系列），表明正在积极稳定中。
- **Qwen Code** — Stage D/G/H 多智能体路线图驱动频繁 PR；设计讨论活跃。

**新兴/较不活跃：**
- **Pi** — Issue 数量较低但功能请求质量高；聚焦 Windows 的重点明确。
- **OpenCode** — 活跃度平衡但发布较少；聚焦 V2 parity。

---

## 6. 趋势信号

**来自社区反馈的行业趋势：**

1. **多智能体架构是下一个前沿** — Qwen Code 的分阶段 Managed Agent 设计、Claude Code 的 Mods 提案，以及 OpenCode 的插件生态，都指向多智能体编排将成为 2027 年的决定性能力。

2. **生产可靠性优先于新奇特性** — 所有工具都在优先修复 bug（崩溃、内存泄漏、会话恢复），而非推出炫酷功能。平均 PR:issue 比（约 0.4–0.7）表明以 bug 修复为主的开发周期。

3. **企业级功能日益受到重视** — HIPAA 设置（OpenAI Codex）、安全网关策略（Claude Code）、会话审计（Qwen Code）都表明企业级就绪正在成为竞争差异化点。

4. **Windows 是问题平台** — 7 个工具中至少有 4 个有明确的 Windows 特定问题阻碍用户（输入渲染、沙盒、ARM64、剪贴板）。这是系统性生态问题，非工具特定。

5. **MCP 成为标准** — OpenCode 的深度 MCP 实现和 Gemini CLI 的 skill 系统表明，MCP 协议正在成为事实上的可扩展性层。

6. **上下文管理是难题** — 多个工具都出现 token 膨胀、自动压缩和上下文上限问题，表明这是需要架构方案解决的根本性未解决问题（AST 感知读取、动态截断预算）。

---

*数据来源于 2026 年 10 月 10 日 GitHub 活动。为评估 AI CLI 工具的技术决策者提供。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English report about Claude Code Skills Community Highlights into Simplified Chinese. I need to:

1. Translate the headings, body text, and table content
2. Keep all technical elements, URLs, code, numbers, dates unchanged
3. Preserve the exact Markdown structure including tables
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate section by section:

**Title:**
# Claude Code Skills 社区亮点报告

**Data as of: 2026-10-10** → **数据截止日期：2026年10月10日**

**Section 1: Top Skills Ranking**
Based on PR activity, recency, and engagement signals, these represent the most notable Skill contributions:
→ 根据 PR 活跃度、时效性和互动数据，以下是值得关注的核心 Skill 贡献：

**Table header:**
| PR | Author | Description | Status |
|---|---|---|---|
→ | PR | 作者 | 描述 | 状态 |

Keep all the PR numbers, usernames, descriptions as-is but translate the context.

**Section 2: Community Demand Trends**
→ 2. 社区需求趋势

Key themes from Issues reveal what the community most urgently needs:
→ 从 Issue 中提炼的关键主题揭示了社区最迫切的需求：

**Categories:**
- 🔴 Security & Trust → 🔴 安全与信任
- 🔵 Collaboration & Sharing → 🔵 协作与共享
- 🟠 Tooling & Reliability → 🟠 工具与可靠性
- 🟢 Workflow Enhancement → 🟢 工作流优化

**Section 3: High-Potential Pending Skills**
→ 3. 高潜力待合并 Skills

These active PRs show strong engagement and appear close to merge:
→ 这些活跃的 PR 展现出强劲的社区参与度，看起来即将合并：

**Section 4: Skills Ecosystem Insight**
→ 4. Skills 生态洞察

**The community's most concentrated demand is for robust, security-hardened tooling around skill evaluation, testing, and cross-platform reliability** — the infrastructure to build and validate skills reliably, rather than new domain-specific skills alone.


→ **社区最集中的需求是围绕 Skill 评估、测试和跨平台可靠性的健壮、安全加固工具**——即用于可靠构建和验证 Skills 的基础设施，而不仅仅是新的领域特定 Skills。

**Footer:**
*Report generated from GitHub data. All PR/Issue links point to `github.com/anthropics/skills`.*
→ *报告数据来源于 GitHub。所有 PR/Issue 链接均指向 `github.com/anthropics/skills`。*

Now I'll proceed with translating the full report.</think>

# Claude Code Skills 社区亮点报告

**数据截止日期：2026年10月10日**

---

## 1. 核心 Skills 排行榜

根据 PR 活跃度、时效性和互动数据，以下是值得关注的核心 Skill 贡献：

| PR | 作者 | 描述 | 状态 |
|----|------|------|------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | **mcp-builder 修复**：更新 MCP Skill 构建器以支持 `mcp>=2.0.0`，包括重命名的 `streamable_http_client` 和通过 `create_mcp_http_client` 实现自定义 HTTP 头 | OPEN |
| [#1298](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | **skill-creator 改进**：隔离触发器评估、修复 Windows 子进程故障并正确处理运行时错误 | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | **proofcore-contract-auditor**：新增 Web3 Skill，提供自动化 Solidity/Rust 静态分析，并支持 TON 区块链审计证明锚定 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | 70v-Yoyo | **md2video-audio**：零成本 Skill，将 Markdown 编译为带逼真语音的 MP4 视频（基于 Marp） | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | mrdesouzaphd-cmyk | **Notion-spec-to-implementation**：将产品规格转化为可执行的 Notion 任务；包含 quantitative-resume-auditor | OPEN |
| [#1961](https://github.com/anthropics/skills/pull/1961) | Joncik91 | **eval-viewer 安全加固**：修复脚本逃逸、DNS 重绑定、跨站 POST 和转义漏洞 | OPEN |
| [#822](https://github.com/anthropics/skills/pull/822) | ksgisang | **AWT (AI Watch Tester)**：端到端测试 Skill，赋予 Claude 浏览器自动化和视觉能力 | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | PGTBoos | **document-typography**：防止 AI 生成文档中的孤行/寡行段落和编号错位 | OPEN |

---

## 2. 社区需求趋势

从 Issue 中提炼的关键主题揭示了社区最迫切的需求：

### 🔴 安全与信任
- **#492** (43 条评论)：社区 Skills 冒充官方 `anthropic/` 命名空间，导致信任边界被滥用
- **#1394** (4 条评论)：eval-viewer display-path 中的 XSS 漏洞
- **#1980** (OPEN)：webapp-testing 避免使用 `shell=True` 以防止命令注入（CWE-78）

### 🔵 协作与共享
- **#228** (16 条评论)：用户希望实现组织级 Skill 共享，无需手动分发文件
- **#189** (6 条评论)：来自 `document-skills` 和 `example-skills` 插件的重复 Skills 导致上下文污染

### 🟠 工具与可靠性
- **#556** (12 条评论)：`run_eval.py` 显示 0% 触发率——Skills 在评估中从未触发
- **#1383**, **#1352**：静默的基准测试失败、Windows 上触发评估损坏、并行 worker UUID 交叉匹配错误

### 🟢 工作流优化
- **#1487** (4 条评论)：`claude-api` 注入约 156k tokens，单次调用即耗尽上下文
- **#1329** (9 条评论)：提议使用紧凑记忆（compact-memory）Skill，通过符号表示法管理智能体状态

---

## 3. 高潜力待合并 Skills

这些活跃的 PR 展现出强劲的社区参与度，看起来即将合并：

| PR | Skill | 优先级理由 |
|----|-------|-----------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP v2 支持 | 关键的上游依赖修复；维护活跃 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator Windows/运行时修复 | 核心工具改进；修复多个问题 |
| [#1961](https://github.com/anthropics/skills/pull/1961) | eval-viewer 安全加固 | 修复本地服务器中的 CVE 级漏洞 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 验证 | 通过正确的错误检测提高输出可靠性 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api 死链修复 | 文档质量改进 |

---

## 4. Skills 生态洞察

**社区最集中的需求是围绕 Skill 评估、测试和跨平台可靠性的健壮、安全加固工具**——即用于可靠构建和验证 Skills 的基础设施，而不仅仅是新的领域特定 Skills。

---

*报告数据来源于 GitHub。所有 PR/Issue 链接均指向 `github.com/anthropics/skills`.*

---

<think>The user wants me to translate the Claude Code Community Digest into Simplified Chinese, following the detailed rules provided. Let me analyze the content and translate it appropriately while:

1. Keeping all Markdown structure exactly as-is (headings, tables, lists, bold/italic, etc.)
2. Preserving URLs, issue/PR numbers, version tags, file paths, etc.
3. Using natural technical Chinese suitable for a developer newsletter
4. Translating the narrative content while keeping technical terms in their original form when appropriate

Let me go through each section:

## Today's Highlights
- Need to translate the summary about v2.1.296 and the Mods extensibility discussion
- Keep version numbers, issue numbers, and emoji

## Releases
- Translate description but keep version numbers and technical identifiers

## Hot Issues
- Translate the "Issue" and "Why It Matters" columns
- Keep issue numbers, emoji, and technical terms
- The table structure with alignment needs to be preserved

## Key PR Progress
- Translate PR descriptions
- Keep PR numbers and technical terms

## Feature Request Trends
- Translate naturally

## Developer Pain Points
- Translate the list items

Let me do this translation now:</think>

# Claude Code 社区速览 — 2026-10-10

---

## 今日要闻

**v2.1.296** 版本随网关策略增强和 `autoCompactWindow` 子代理支持一同发布，进一步扩展了 Claude Desktop 的可扩展性。与此同时，社区正围绕 Mods 可扩展性提案（#91870）展开热烈讨论，已有 248 条评论——这表明用户对深度自定义功能的需求十分强烈。Windows 用户面临多个新问题，包括 Docker、远程控制和桌面窗口行为方面的故障。

---

## 发布动态

### v2.1.296
- 为 Claude 应用网关的 `managed.policies[]` 添加了 **`code`** 键——与 `cli` 设置保持一致，同时适用于 Claude Desktop 的 Code 标签页并支持网关模式
- 为子代理 frontmatter 和 `--agents` 定义添加了 **`autoCompactWindow`**

---

## 热门 Issue

| # | Issue | 关注原因 | 社区热度 |
|---|-------|----------|----------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **[Mods] 让 Claude 可扩展性提升 10 倍** — 10 月 1 日发布社区微更新，预计"几周后"发布。主要的可扩展性重构，248 条评论，131 👍 | **热度最高** — 强烈表明社区对 hookify 之外的插件/钩子有强烈需求 | 🔥🔥🔥 |
| [#28304](https://github.com/anthropics/claude-code/issues/28304) | **Claude Desktop 1.1.4173 启动时崩溃** — 无窗口渲染，进程在任务管理器中可见 | 影响用户正常使用；41 条评论，31 👍 | 🔥🔥 |
| [#29214](https://github.com/anthropics/claude-code/issues/29214) | **尽管使用了 `--dangerously-skip-permissions`，远程控制仍弹出权限请求** — 手机端每次编辑/bash 操作都会弹出请求 | 破坏移动端远程控制体验；32 条评论，81 👍 | 🔥🔥 |
| [#56281](https://github.com/anthropics/claude-code/issues/56281) | **无法从 Max 5x 升级到 20x：支付失败，客服无响应** | 直接影响收入；29 条评论 | 🔥 |
| [#51828](https://github.com/anthropics/claude-code/issues/51828) | **调整终端大小时出现滚动回退重复**（VS Code 集成终端，macOS）— 在 2.1.116 中仍然存在 | 回归问题；28 条评论，36 👍 | 🔥 |
| [#100730](https://github.com/anthropics/claude-code/issues/100730) | **Auto 模式分类器阻止账户所有者自己的定时任务** — 阻止所有者两台机器之间的文件传输 | 高级用户的严重回归；16 条评论 | 🔥 |
| [#95580](https://github.com/anthropics/claude-code/issues/95580) | **Windows：桌面窗口在使用电脑后卡在置顶状态**（WS_EX_TOPMOST） | Windows 特定的用户体验回归；7 条评论 | 🐛 |
| [#73338](https://github.com/anthropics/claude-code/issues/73338) | **工作目录外的文件路径不再以内联方式打开** — 更新后的回归问题 | 6 条评论，11 👍；影响常见工作流 | 🐛 |
| [#100114](https://github.com/anthropics/claude-code/issues/100114) | **Windows：应用重新启动后远程控制未恢复** — 移动端显示会话已归档 | 移动端与桌面端同步断开；4 条评论 | 🐛 |
| [#100901](https://github.com/anthropics/claude-code/issues/100901) | **Claude Desktop 启动时 Docker Desktop 崩溃** — MSIX AppData 下的 AF_UNIX 套接字故障 | 开发者工具链集成损坏；2 条评论 | 🐛 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|------|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | **feat: 开源 claude code** — 重大工程，关闭 #59, #456, #2846, #22002, #41434 | 🆕 |
| [#100293](https://github.com/anthropics/claude-code/pull/100293) | **添加 HIPAA 配置示例** — `settings-hipaa.json`、`managed-mcp-hipaa.json`、`README-hipaa.md`，用于合规配置 | ✅ |
| [#85716](https://github.com/anthropics/claude-code/pull/85716) | **fix(hookify): 从父级 .claude 目录加载规则** — 防止静默绕过，修复 #85613 | 🔐 |
| [#84747](https://github.com/anthropics/claude-code/pull/84747) | **fix(hookify): 强制执行正确的规则评估范围和安全文件读取** — 防止错误的规则触发 | 🔐 |
| [#84711](https://github.com/anthropics/claude-code/pull/84711) | **fix(安全): 解决 yaml 注入和符号链接凭据覆盖问题** — 修复 #76580 | 🔐🔐 |
| [#84365](https://github.com/anthropics/claude-code/pull/84365) | **fix(scripts): 允许用户通过差评阻止自动关闭** — 与去重机器人承诺保持一致 | 👤 |
| [#84364](https://github.com/anthropics/claude-code/pull/84364) | **fix(hookify): 在 pretooluse 钩子异常时关闭失败** — 防止错误时执行未授权操作 | 🔐 |

> **注：** 过去 24 小时内的 7 个 PR 中有 4 个是 hookify 插件的安全相关修复，表明可扩展性层正在进行积极加固。

---

## 功能需求趋势

从 Issue 和近期活动来看，最迫切的需求方向包括：

1. **深度可扩展性** — Mods、超越 hookify 的插件（#91870）、技能加载时机修复（#100813）
2. **国际化/本地化** — 旋转状态文字应可翻译（#91878）
3. **项目自定义** — 项目中的自定义标签页应可移除（#100950）
4. **跨平台可靠性** — Windows/macOS/Linux 远程控制、权限和文件处理的一致性

---

## 开发者痛点

- **桌面稳定性回归** — 启动崩溃（#28304）、窗口状态问题（#95580）、文件路径处理（#73338）
- **权限模型混乱** — `--dangerously-skip-permissions` 未被远程控制尊重（#29214）；Auto 模式分类器意外阻止用户批准的操作（#100730, #100941）
- **Windows 集成缺陷** — MSIX AppData 下 Docker 套接字失败，Bash 命令截断（#100936）
- **移动端与桌面端同步** — 远程控制会话在重新启动后未恢复（#100114）
- **Linux 边缘情况** — 线程创建失败时 SIGABRT（#100545）导致后台任务终止

---

*基于 GitHub 数据生成 — 2026-10-10*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest from English to Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure exactly
2. Keep URLs, code references, issue numbers, project names, version tags, etc. as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section, maintaining the exact structure:

- Headings
- Tables (including alignment rows)
- Lists
- Blockquotes
- Bold/italic
- Horizontal rules
- Emoji

Let me proceed with the translation:</think>

# OpenAI Codex 社区周刊 — 2026-10-10

## 今日要闻

Codex 团队发布了 **rust-v0.162.1**，修复了 TUI 崩溃和启动兼容性检查问题，同时推出了两个 alpha 版本（0.163.0-alpha.4/5）。社区正在积极报告 Windows 相关问题——尤其是沙盒配置和点号启动任务——与此同时多个重要 PR 已合并，包括输出令牌重放、code-mode 的 gRPC over stdio，以及 exec-server 连接观察器。本周平台相关问题占据主导，macOS 远程控制和 Windows 连接问题最受关注。

---

## 版本发布

| 版本 | 类型 | 摘要 |
|------|------|------|
| **rust-v0.162.1** | 稳定版 | 修复了异步问题包含多行时 TUI 崩溃问题（保留换行符和超链接目标）。修复了后台服务器与 CLI 默认值之间功能设置不匹配导致的启动失败问题。 |
| **rust-v0.163.0-alpha.5** | Alpha 版 | 0.163.0-alpha.5 版本 |
| **rust-v0.163.0-alpha.4** | Alpha 版 | 0.163.0-alpha.4 版本 |

---

## 热门 Issue

| Issue | 评论数 | 为何重要 |
|-------|--------|----------|
| **[#49458](https://github.com/openai/codex/issues/49458)** — Windows 点号启动的本地任务缺少 Computer Use 工具 | 67 | Windows 用户使用点号（`.`）运行 Codex 时无法使用 Computer Use 工具，而标准本地会话正常工作。这打破了许多开发者的自动化工作流。 |
| **[#37403](https://github.com/openai/codex/issues/37403)** — macOS Desktop 无法恢复远程控制：`already has an active writer` | 65 | 自 2026 年 8 月以来的回归问题导致 macOS 用户无法恢复远程控制会话，打破了在移动端和桌面端之间切换的工作流。 |
| **[#3355](https://github.com/openai/codex/issues/3355)** — Macbook 睡眠后报错 | 58 | 长时间运行的任务（>30 秒）在 Macbook 合盖或睡眠时失败，这是自 2025 年以来的持续问题，影响工作效率。 |
| **[#51634](https://github.com/openai/codex/issues/51634)** — Windows 沙盒配置失败，os error 32 | 34 | 0.162.0-alpha.2 中的回归问题导致只要有任何运行时文件被使用就会中止沙盒设置，阻塞了 Windows 开发环境。 |
| **[#42520](https://github.com/openai/codex/issues/42520)** — Windows Chrome 集成：chrome-native-hosts-v2.json 从未被创建 | 22 | Windows 上的 Chrome Browser Use 因更新后缺少配置文件而失败，导致用户无法使用浏览器自动化。 |
| **[#50526](https://github.com/openai/codex/issues/50526)** — Guardian 实验重新引入了已弃用的 thread_context | 20 | 即使 config.toml 是干净的，桌面应用仍显示持续的去弃用警告，表明存在配置迁移 bug。 |
| **[#42973](https://github.com/openai/codex/issues/42973)** — 无头 SSH 任务在桌面更新后失去线程消息传递 | 17 | 回归问题破坏了通过 SSH 委托给子代理的功能，远程工作流中丢失线程上下文和工具访问权限。 |
| **[#24638](https://github.com/openai/codex/issues/24638)** — app-server 缺少 cwd 作用域的环境契约 | 14 | 不同启动模式下的本地命令执行使用不一致的环境源，导致静默的行为差异。 |
| **[#51675](https://github.com/openai/codex/issues/51675)** — 云任务在重启后从侧边栏消失（macOS） | 14 | macOS Desktop 在重启后丢失云任务可见性，而 Dots 列表中显示它们，直接读取也可以工作——数据持久化 bug。 |
| **[#50887](https://github.com/openai/codex/issues/50887)** — macOS Dots 授权收据测试被拒绝为不受信任 | 14 | Dots 协调因委托同意错误而失败，破坏了依赖线程消息传递的多代理工作流。 |

---

## 重要 PR 进展

| PR | 状态 | 变更内容 |
|----|------|----------|
| **[#52742](https://github.com/openai/codex/pull/52742)** — 为 OpenAI 请求添加可选的输出令牌重放 | 已合并 | 添加了默认禁用的 `output_token_replay` 功能，用于请求加密的 OpenAI 提供商内容，保留消息和工具调用输出。 |
| **[#52736](https://github.com/openai/codex/pull/52736)** — 允许模型目录覆盖增量工具通知 | 已合并 | 添加了 `model_messages.tools.incremental_tools` 覆盖，用于更新提示和命名空间指令。 |
| **[#52725](https://github.com/openai/codex/pull/52725)** — 使用 OSC 7501 报告终端程序状态 | 已合并 | 将生命周期状态报告从 iTerm2 扩展到其他终端，支持 `idle`、`working` 或 `blocked` 状态。 |
| **[#52724](https://github.com/openai/codex/pull/52724)** — 添加初始 exec-server 连接尝试的观察器 | 已合并 | 暴露了从配置到客户端实例化的连接尝试指标（耗时、结果）。 |
| **[#52723](https://github.com/openai/codex/pull/52723)** — 为 code-mode 主机添加可选的 gRPC over stdio | 已合并 | 添加了 `grpc+stdio://` 传输方式和 `code_mode_host_grpc` 功能标志，用于跨 code-mode 会话共享 HTTP/2 通道。 |
| **[#52721](https://github.com/openai/codex/pull/52721)** — 说明服务器关闭期间的会话创建失败 | 已合并 | 在拒绝错误中添加了结构化的关闭原因，提高了用户对会话创建失败原因的可视性。 |
| **[#52707](https://github.com/openai/codex/pull/52707)** — 将 Windows MXC 沙盒迁移到分离的 MXC crate | 已合并 | 用分离的 crate 替换 `mxc-sdk` 以处理过渡性 Windows 构建上的 PSEC API 符号。 |
| **[#52702](https://github.com/openai/codex/pull/52702)** — 在请求失败后通过系统代理重试 bootstrap GET | 已合并 | 启用 bootstrap GET 在初始连接失败后通过系统代理重试，提高了可靠性。 |
| **[#52700](https://github.com/openai/codex/pull/52700)** — 将 exec-server 稳定版兼容性基准更新为 0.162.1 | 已合并 | 将 Bazel 发布存档从 0.156.1 提升到 0.162.1，用于 `exec-server-stable-release-test`。 |
| **[#52696](https://github.com/openai/codex/pull/52696)** — 修复 Windows 挂接点的市场路径匹配 | 已合并 | 修复了文件系统规范化后市场来源和管理根目录的路径匹配。 |

---

## 热门讨论

### 创意

| 讨论 | 摘要 |
|------|------|
| **[#14067](https://github.com/openai/codex/discussions/14067)** — 跨设备同步 Codex 线程和会话上下文 | 高度请求（66 👍）：用户希望在线程和会话上下文在多设备工作流中同步。 |
| **[#51299](https://github.com/openai/codex/discussions/51299)** — 在桌面审查窗格中支持 Jujutsu (jj) 工作区 | 请求为 JJ 工作区（`.jj` 无 `.git`）启用审查窗格。 |

### 问答

| 讨论 | 摘要 |
|------|------|
| **[#49826](https://github.com/openai/codex/discussions/49826)** — 本地集成中真人输入的受支持边界 | 寻求可信賴身份的原始人工输入的受支持接口。 |
| **[#52181](https://github.com/openai/codex/discussions/52181)** — Windows Codex 预执行策略拒绝：支持的诊断方式？ | 请求对 Windows 预执行策略拒绝进行支持的诊断，而非变通方案。 |

### 展示分享

| 讨论 | 摘要 |
|------|------|
| **[#52372](https://github.com/openai/codex/discussions/52372)** — Selvedge：通过 MCP 检索被拒绝的方法 | Python CLI + MCP 服务器，用于记录和检索与实体关联的编码决策（包括被拒绝的方法）。 |
| **[#45486](https://github.com/openai/codex/discussions/45486)** — UI Design Agent Kit | 设计工作流技能：研究 → 冻结计划 → 设计合同 → 浏览器验证的 UI（11 个演示，2 个可玩 3D）。 |
| **[#37765](https://github.com/openai/codex/discussions/37765)** — Codex 全双工语音 + 宠物皮肤 | 免手操作的 Codex 操作，支持全双工语音；桌面端 orb 现在支持 Codex 宠物皮肤。 |
| **[#52198](://github.com/openai/codex/discussions/52198)** — cloud-alter-ego：Codex 的持久记忆 | 学习用户偏好、项目和历史跨会话的记忆系统。 |
| **[#52402](https://github.com/openai/codex/discussions/52402)** — Moyu：Codex 工作时的终端游戏 | 通过 Ctrl+] 访问的迷你终端游戏，休息时无需离开 Codex 会话。 |
| **[#52163](https://github.com/openai/codex/discussions/52163)** — Lampo：视频的 MCP 审查循环 | 带 MCP 的视频审查应用，用于对 Codex 渲染的 MP4 进行帧精确标注。 |

---

## 功能请求趋势

基于 Issue 和讨论，最请求的方向是：

1. **跨设备同步** — 线程和会话上下文同步（#14067 上 66 👍）
2. **Windows 可靠性** — 改进沙盒、Chrome 集成和 BitLocker 处理
3. **远程/SSH 改进** — 更好的线程持久化、委托工具保留和无头支持
4. **VCS 集成** — 审查窗格中支持 Jujutsu (jj) 工作区
5. **增强 CLI 控制** — `--effort` 标志用于推理努力选择（#48321）
6. **输入身份边界** — 本地集成中人工输入验证的受支持接口

---

## 开发者痛点

- **macOS 睡眠/恢复失败**：Macbook 睡眠或合盖时 >30 秒的任务失败（#3355）
- **Windows 沙盒回归**：配置期间 os error 32 破坏开发环境（#51634）
- **远程控制卡死**：macOS Desktop 无法恢复会话，造成工作流中断（#37403）
- **线程持久化**：重启后云任务消失，SSH 会话丢失上下文（#51675、#42973）
- **配置迁移 bug**：尽管 config.toml 干净，已弃用设置仍重新出现（#50526）
- **平台特定 Chrome 失败**：Windows Chrome 集成在更新后损坏（#42520）

---

*周刊基于 GitHub 数据生成 — 2026-10-10*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire English digest into Chinese. I need to:
1. Preserve all the Markdown structure exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
2. Keep URLs, numbers, dates, version tags, file paths, API/config identifiers, issue/PR references as-is
3. Use natural technical Chinese - the register of a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through and translate while maintaining the structure:

Title: "Gemini CLI Community Digest" → "Gemini CLI 社区动态"

Date format: "2026-10-10" stays as-is in Chinese context (dates in Chinese tech context are often kept in ISO format)

Let me translate section by section:

1. **Today's Highlights** → "今日要闻"
2. **Releases** → "版本发布"
3. **Hot Issues** → "热门 issue"
4. **Key PR Progress** → "PR 进展"
5. **Feature Request Trends** → "功能需求趋势"
6. **Developer Pain Points** → "开发者痛点"

I need to translate the content while keeping the technical terms, URLs, code, and identifiers in their original form or using standard Chinese technical terms.

Let me translate each section carefully:</think>

# Gemini CLI 社区动态

**日期：** 2026-10-10  
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日要闻

过去 24 小时内发布了两版更新：**v0.65.0-nightly** 修复了 JSON 解析和字符串截断问题，**v0.64.0-preview.1** 是包含补丁的预览版。代理子系统仍存在不稳定因素——多个 P1 级 issue 涉及子代理挂起、浏览器代理失败和目标成功状态被掩盖等问题，同时团队正在推进文件发现和终端 UI 响应性方面的性能优化。

---

## 2. 版本发布

| 版本 | 日期 | 变更内容 |
|------|------|----------|
| **v0.65.0-nightly.20261010.g9b6e0265d** | 2026-10-10 | **[fix](https://github.com/google-gemini/gemini-cli/pull/29658)** — 处理 `fetchJson` 中的 JSON 解析和响应流错误。**[fix](https://github.com/google-gemini/gemini-cli/pull/29673)** — 在 `truncateString` 中保留行终止符。 |
| **v0.64.0-preview.1** | 2026-10-10 | 补丁版本，回移了主线的安全修复 [#29672](https://github.com/google-gemini/gemini-cli/pull/29672)。 |

---

## 3. 热门 Issue

| Issue | 优先级 | 评论数 | 为何重要 |
|-------|--------|--------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 子代理在达到 MAX_TURNS 后报告为 GOAL 成功 | P1 | 13 | 子代理达到最大轮次限制后错误地报告 `status: "success"` 并以 `Termination Reason: "GOAL"` 终止，掩盖了中断事实，隐藏了关键的诊断上下文。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 通才代理挂起 | P1 | 8 (👍 8) | CLI 将控制权交给通才代理后，在简单操作（如创建文件夹）时无限挂起——有时超过一小时才允许取消。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — 浏览器子代理在 Wayland 下失败 | P1 | 4 | 浏览器代理在 Wayland 显示服务器上完全失败，没有明确的解决路径，阻断了 Linux 桌面用户的使用。 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — get-shit-done 输出钩子导致崩溃 | P1 | 3 | 输出钩子在 get-shit-done 代理运行的用户总结阶段导致 Gemini CLI 崩溃。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用模型的 bash 亲和性实现零依赖 OS 沙箱 | P2 | 9 | 提案零依赖 OS 沙箱和执行后意图路由，以充分利用 Gemini 3 原生的 POSIX 工具链能力，同时不牺牲安全性。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知文件读取/搜索/映射的影响 | P2 | 7 | 研究 AST 感知工具是否能减少因文件读取错位导致的 token 膨胀，并实现精准的代码导航。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 没有充分利用技能和子代理 | P2 | 7 | 自定义技能和子代理除非明确指示，否则不会被使用——模型无法自主识别利用它们的机会。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — 浏览器代理忽略 settings.json 覆盖 | P2 | 4 | 浏览器代理完全忽略 `settings.json` 配置覆盖（如 `maxTurns`），破坏了用户对自定义功能的预期。 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — ~/.gemini/agents/filename.md 符号链接不被识别 | P2 | 4 | 代理目录中的符号链接不被识别为代理，限制了代理文件管理的灵活性。 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 超过 128 个工具时报 400 错误 | P2 | 3 | 当可用工具超过约 128 个时 Gemini CLI 抛出 400 错误，表明工具作用域逻辑存在问题。 |

---

## 4. PR 进展

| PR | 优先级 | 规模 | 描述 |
|----|--------|------|------|
| [#29672](https://github.com/google-gemini/gemini-cli/pull/29672) | — | L | **安全修复：** 消除不可信上下文跟踪器的误报——移除因 shell 变量展开问题和过于宽泛的 token 索引导致的虚假安全警告和确认中止。 |
| [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) | P1 | L | **性能优化：** 通过层级目录级状态记忆化、通配符目录模式展开和内存符号链接缓存优化文件发现和忽略过滤——解决大型仓库中数秒阻塞延迟问题。 |
| [#29476](https://github.com/google-gemini/gemini-cli/pull/29476) | P1 | L | **UX 修复：** 修复 IDE 集成终端中工具确认提示符上 Enter 键无响应问题。 |
| [#29468](https://github.com/google-gemini/gemini-cli/pull/29468) | P1 | L | **UX 修复：** 在连接恢复（429/503 错误）期间显示重试进度指示器，修复永远卡在"Thinking..."的状态。 |
| [#29644](https://github.com/google-gemini/gemini-cli/pull/29644) | P1 | M/L | **UI 修复：** 恢复终端宽度变化时的去抖静态 UI 刷新（100ms 去抖），修复内联模式下水平调整大小的渲染问题。 |
| [#29683](https://github.com/google-gemini/gemini-cli/pull/29683) | P1 | L | **A2A Server 修复：** 在批量调用中将工具拒绝隔离到当前活动调用——当模型输出一批文件修改调用时，拒绝一个不再错误地拒绝后续调用。 |
| [#29439](https://github.com/google-gemini/gemini-cli/pull/29439) | P1 | M | **ACP 流程修复：** 在 ACP 模式下请求权限前发出 `pending` 状态的 `tool_call` 更新，确保客户端 UI 正确显示待处理状态。 |
| [#29699](https://github.com/google-gemini/gemini-cli/pull/29699) | — | M | **Unicode 修复：** 修正反向历史搜索（Ctrl+R）中字符如 `İ`（其小写形式长度增加）的 UTF-16 子串高亮偏移量 off-by-one 错误。 |
| [#29695](https://github.com/google-gemini/gemini-cli/pull/29695) | P2 | L | **调试控制台修复：** 修复调试控制台（F12）高度计算 bug，并在 `terminalBuffer` 模式启用增量渲染以减少闪烁。 |
| [#29700](https://github.com/google-gemini/gemini-cli/pull/29700) | P2 | L | **构建可靠性：** 同步工作区 `package.json` 版本与 lockfile 并在 CI 中强制一致性——解决 Nix 等下游 hermetic 构建工具的问题。 |

---

## 5. 功能需求趋势

综合 issue 和 PR 的方向，社区正在请求以下功能：

1. **代理可靠性与正确性** — 修复虚假成功报告、子代理挂起和跨平台（Wayland、IDE 集成）浏览器代理失败问题。
2. **AST 感知代码库操作** — 探索基于 AST 的文件读取、搜索和映射，以减少 token 膨胀并实现精准代码导航。
3. **增强的工具与技能利用** — 让模型能够自主发现和利用自定义技能/子代理，而无需明确提示。
4. **安全加固** — 改进不可信命令标志检测，同时消除误报；添加执行后意图路由。
5. **终端 UI 优化** — 修复终端调整大小时闪烁、调试控制台布局和进度指示器渲染问题。
6. **灵活的代理配置** — 支持符号链接代理文件、每工作区策略和健壮的 `settings.json` 覆盖处理。
7. **Token 效率** — 实现"精准提取"逻辑进行精细化文件读取；探索基于文件的持久化任务跟踪以减少上下文衰减。

---

## 6. 开发者痛点

- **代理挂起与虚假成功** — 子代理和通才代理无限挂起或以"GOAL 成功"掩盖失败，导致开发者卡住或被误导。
- **平台兼容性** — 浏览器代理在 Wayland 上失败；凭证缓存阻止账户切换；基于符号链接的代理文件不工作。
- **Token 与性能成本** — 大文件读取"大水漫灌"式地消耗上下文（+15k tokens/轮）；大型仓库中文件发现阻塞数秒。
- **配置不一致** — 关键子系统（浏览器代理）忽略 `settings.json` 中的设置。
- **终端 UI 困扰** — 调整大小事件导致闪烁；调试控制台布局错乱；可重试错误上"Thinking..."永不结束。

---

*动态基于 2026-10-10 的 GitHub 数据生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI Community Digest from English to Chinese. I need to:

1. Translate all the text content to Chinese
2. Keep all the Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, version tags, file paths, code identifiers as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through this carefully:

**1. Today's Highlights:**
- The team shipped v1.0.96 with key improvements to interactive sessions—git repository sessions now reach the input prompt faster, and the timeline now shows who (user, Assisted Permissions, policy, or unattended fallback) made each permission decision. A notable regression fix addresses /add-dir granting sandbox access to added directories. On the issue front, a critical Node.js memory leak causing OOM crashes after ~37 minutes needs attention from affected users.

Translation: 团队发布了 v1.0.96，改进了交互式会话体验——git 仓库会话现在能更快进入输入提示符，时间线现在显示每条权限决策是由用户、辅助权限策略还是无人值守回退模式做出的。值得注意的是，回归修复解决了 /add-dir 为已添加目录授予沙盒访问权限的问题。在 issue 方面，受影响的用户需要关注一个关键的 Node.js 内存泄漏问题，该问题会导致约 37 分钟后 OOM 崩溃。

**2. Releases table - needs careful translation while keeping version numbers and URLs**

**3. Hot Issues table - translate summaries while keeping numbers, URLs, and emoji**

**4. Key PR Progress table - translate while keeping PR numbers and URLs**

**5. Feature Request Trends - translate the categories and descriptions**

**6. Developer Pain Points - translate each point**

Let me do this systematically:</think>

# GitHub Copilot CLI 社区简报

**日期：** 2026-10-10

---

## 1. 今日要闻

团队发布了 v1.0.96，改进了交互式会话体验——git 仓库会话现在能更快进入输入提示符，时间线现在显示每条权限决策是由用户、辅助权限策略还是无人值守回退模式做出的。值得注意的是，回归修复解决了 `/add-dir` 为已添加目录授予沙盒访问权限的问题。在 issue 方面，受影响的用户需要关注一个关键的 Node.js 内存泄漏问题，该问题会导致约 37 分钟后 OOM 崩溃。

---

## 2. 发布版本

| 版本 | 变更内容 |
|---------|---------|
| **v1.0.96-1** | **新增：** 交互式沙盒设置建议使用环境密钥，并允许在保存前添加掩码主机。**修复：** 企业策略解析期间保持 `/allow-all` 可用。 |
| **v1.0.96-0** | **改进：** git 仓库中的交互式会话更快进入输入提示符。时间线现在显示每条权限决策是由你、辅助权限、策略还是无人值守回退模式做出的。**修复：** `/add-dir` 为当前会话中已添加的目录授予沙盒访问权限。 |
| **v1.0.95** | 在 macOS 上使用本地 Microsoft Entra 代理身份验证（可用时），失败时回退到浏览器。`copilot config` 支持沙盒凭据 `injectHosts` 键，Bash、Zsh 和 Fish 中提供键补全。`--context` 现在适用于新建和恢复的 ACP 会话。 |
| v1.0.95-3, v1.0.95-2 | 修复和变更。 |

---

## 3. 热门 Issue

| Issue | 摘要 | 为何重要 | 反馈 |
|-------|---------|----------------|-----------|
| [#4313](https://github.com/github/copilot-cli/issues/4313) | 支持使用鼠标滚轮/PageUp/PageDown 滚动浏览会话历史 | 终端用户无法导航长对话——高级用户的重大体验障碍。 | 9 💬 |
| [#3355](https://github.com/github/copilot-cli/issues/3355) | 允许为 Claude Opus 4.6 配置上下文窗口（当前 200K 上限 vs 1M 模型能力） | 当前 200K 上限导致深度技术会话中频繁自动压缩，浪费了模型 80% 的潜在上下文。 | 5 💬, 4 👍 |
| [#4686](https://github.com/github/copilot-cli/issues/4686) | Node.js OOM 崩溃约 37 分钟后——31,965 个异步 libuv 句柄泄漏（SEA 忽略 NODE_OPTIONS） | 在 Linux 上使用 Node v24.20.0 时会话会可靠地在约 37 分钟后崩溃，使长时间工作无法进行。 | 4 💬 |
| [#5076](https://github.com/github/copilot-cli/issues/5076) | `/add-dir` 未将目录添加到沙盒允许列表 | 用户无法在沙盒模式下访问已添加的目录——使该命令失去意义。 | 4 💬 |
| [#3035](https://github.com/github/copilot-cli/issues/3035) | 工具可调用的 `cwd`（等同于 TUI `/cwd`） | 插件/技能无法更改工作目录或触发技能重新扫描——限制了自动化。 | 3 💬 |
| [#2536](https://github.com/github/copilot-cli/issues/2536) | Atlassian MCP 每次调用都需要授权 | 每次都必须重新认证——破坏了日常 MCP 工具使用的工作流程。 | 3 💬, 3 👍 |
| [#3081](https://github.com/github/copilot-cli/issues/3081) | NixOS 密钥链支持损坏 | 尽管安装了 libsecret/GNOME Keyring，Copilot 无法访问系统密钥链。 | 2 💬, 3 👍 |
| [#939](https://github.com/github/copilot-cli/issues/939) | 斜杠命令 Tab 补全 | 斜杠命令参数（如模型名称）没有补全提示——可发现性差。 | 2 💬 |
| [#5102](https://github.com/github/copilot-cli/issues/5102) | 回归：沙盒 git 无法使用与 Copilot/gh 登录身份不同的凭据 | 无法为沙盒 git 提供细粒度 PAT——阻止了仓库访问模式。 | 0 💬 |
| [#4516](https://github.com/github/copilot-cli/issues/4516) | 沙盒 RW 路径授权未被 JVM 进程遵守 | 尽管配置了沙盒路径，Maven/Gradle 仍失败并显示 "Operation not permitted"——Java 开发受阻。 | 1 💬 |

---

## 4. PR 进展

| PR | 摘要 | 状态 |
|----|---------|--------|
| [#5093](https://github.com/github/copilot-cli/pull/5093) | **install: 验证校验和条目与下载的 tarball 匹配** — 修复通过 `--ignore-missing` 进行虚假验证的问题，并验证校验和是否针对正确的文件，而不只是验证文件是否存在。 | 🟢 OPEN |
| [#5106](https://github.com/github/copilot-cli/pull/5106) | 创建 index.html | 🟢 OPEN |

---

## 5. 功能请求趋势

从 issue 队列来看，最受关注的功能方向包括：

- **终端/UX 改进：** 可滚动会话历史（#4313）、对话视图时间戳显示（#2535）、斜杠命令 Tab 补全（#939）、编辑工具差异渲染（#3249）
- **上下文与内存：** Claude Opus 4.6 可配置上下文窗口（#3355）、更大文件处理（#4633）
- **平台兼容性：** NixOS 密钥链支持（#3081）、Windows Ramdisk 访问（#3535）、macOS 沙盒 + Gradle 网络（#5105）
- **沙盒与安全：** 插件工具可调用的 cwd（#3035）、JVM 沙盒路径授权（#4516）、git 凭据灵活性（#5102）、辅助消息仅显示钩子（#5099）
- **会话可靠性：** 会话事件超时处理（#5100）、MCP 重连循环（#5091）

---

## 6. 开发者痛点

社区对以下反复出现的问题表示不满：

1. **内存与稳定性：** Node.js 内存泄漏导致约 37 分钟后可预测的 OOM 崩溃（#4686）——无解决方法，阻断了生产使用。
2. **沙盒限制：** `/add-dir` 不工作（#5076）、JVM 路径授权被忽略（#4516）、git 凭据缺乏灵活性（#5102）——沙盒对 Java/Gradle/Maven 工作流程限制过多。
3. **平台差距：** NixOS 密钥链损坏（#3081）、Windows 捆绑 git 派生失败（#5094）、macOS Entra 认证问题——Linux/macOS 支持碎片化。
4. **认证疲劳：** Atlassian MCP 每次调用都重新认证（#2536）——MCP 认证状态未持久化。
5. **体验摩擦：** 无会话历史滚动（#4313）、无斜杠命令补全（#939）——终端交互相比 GUI 替代方案显得受限。

---

*简报基于 github.com/github/copilot-cli 生成*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest from English to Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, issue references, etc. as-is
- Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while preserving all formatting and technical terms.</think>

# OpenCode 社区周报 — 2026-10-10

## 今日要点

OpenCode 社区正在积极解决平台兼容性和用户体验问题。值得注意的是，Windows ARM64 支持（#45875）和 MCP 服务器认证处理（#54225）正在通过 PR 推进，同时团队持续优化 v2 功能，包括会话持久化、符号链接支持和系统托盘功能。内部重要的 Effect 4.0.1 升级（#54198）正在进行中，以保持依赖稳定性。

---

## 发布动态

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 概要 | 评论数 |
|---|-------|---------|----------|
| **#54095** | [无法连接 API：自签名证书](https://github.com/anomalyco/opencode/issues/54095) | 在使用固定网络的企业环境用户遇到 SSL 证书错误，而热点连接则正常工作。问题可能在于 OpenCode 未正确使用系统 CA 证书。 | **12** |
| **#51856** | [MCP Client 缺少 elicitation/form 处理](https://github.com/anomalyco/opencode/issues/51856) | OpenCode 在 MCP 握手时声明了 `elicitation.form` 能力，但从未处理 `elicitation/create` 请求，导致工具调用挂起超时。这是核心 MCP 协议缺口。 | **10** 👍 2 |
| **#47545** | [Auto 模式触发虚假权限通知](https://github.com/anomalyco/opencode/issues/47545) | 在 Auto 模式下，权限通知不断弹出，尽管权限已自动批准且无需用户输入。客户端在服务器发出权限事件后才进行批准。 | **9** 👍 2 |
| **#51020** | [v2 中 Silent part 持久化失败](https://github.com/anomalyco/opencode/issues/51020) | 桌面端辅助进程启动后（v2.0.12+），`opencode.db` 中未写入任何 `message` 或 `part` 行——会话虽然持久化，但对话历史丢失。关键数据完整性问题。 | **4** |
| **#45875** | [Windows ARM64 原生构建失败](https://github.com/anomalyco/opencode/issues/45875) | 在 Windows ARM64（骁龙 X 笔记本）上原生构建失败，因为稳定版 Bun 中没有 `bun:ffi`，且 `bun-pty` 仅提供 x64 DLL。TUI 和 PTY 会话在运行时失败。 | **4** |
| **#53648** | [TUI 将 LaTeX 渲染为原始源码](https://github.com/anomalyco/opencode/issues/53648) | 数学表达式如 `\(0.5^5 \approx 3\%\)` 显示为原始 LaTeX 而非渲染后的公式。TUI 的 markdown 组件缺少数学支持。 | **4** |
| **#54180** | [拒绝的工具调用被记录为关闭](https://github.com/anomalyco/opencode/issues/54180) | 当用户拒绝权限请求时，该回合被错误地记录为服务器关闭，导致拒绝的回合在服务器重启后继续执行——这是会话状态管理的逻辑错误。 | **3** |
| **#54217** | [Windows 桌面托盘图标缺失](https://github.com/anomalyco/opencode/issues/54217) | Windows 上的 OpenCode 桌面版未注册系统托盘图标，导致无法通过 UI 完全退出应用（包括后台服务）。与 #50633 相关。 | **3** |
| **#53614** | [长时间运行的进程在会话中不可见](https://github.com/anomalyco/opencode/issues/53614) | 在 harness 外部启动的进程（例如通过工具调用中的 `&`）约一小时后变得不可见——没有会话级注册表来追踪它们。 | **3** |
| **#51916** | [v2 缺少自定义首页 Logo 功能](https://github.com/anomalyco/opencode/issues/51916) | V1 插件可以通过 `home_logo` 槽位替换首页 Logo；V2 没有等价实现。这是插件生态兼容性缺口。 | **3** 👍 2 |

---

## 关键 PR 进展

| # | PR | 概要 |
|---|-----|---------|
| **#54198** | [chore: 升级 Effect 至 4.0.1](https://github.com/anomalyco/opencode/pull/54198) | 重要内部升级：从 Effect `4.0.0-rc.118` 升级至稳定版 `4.0.1`。修复了运行时 schema 处理问题，客户端生成器无法再检测到如 `SessionID` 这样的 branded 类型。 |
| **#53906** | [feat(tui): 仅有一个 Agent 可用时简化 UI](https://github.com/anomalyco/opencode/pull/53906) | TUI 可用性改进——当只有一个 Agent 可用时隐藏多余的 Agent 选择器。 |
| **#51482** | [fix(core): 支持 AI SDK v4 媒体输入](https://github.com/anomalyco/opencode/pull/51482) | 修复 #50960 — 版本化 AI SDK v4 提供商将工具图像序列化为 null。现在正确处理支持媒体的模型的输入。 |
| **#54225** | [fix(mcp): 工具调用因 401 被拒绝时标记服务器需要认证](https://github.com/anomalyco/opencode/pull/54225) | 当远程 MCP 服务器在 OAuth 刷新失败后持续拒绝令牌时，服务器状态现在正确显示需要重新认证，而非保持"已连接"。 |
| **#54011** | [fix(core): 不通过发现保持配置的本地模型可用](https://github.com/anomalyco/opencode/pull/54011) | 修复 #53341 — 即使模型发现超时、失败或返回空结果，显式配置的本地模型仍然保持可用。 |
| **#54187** | [feat(desktop): 通过 opencode:// 深度链接打开会话](https://github.com/anomalyco/opencode/pull/54187) | 支持通过 `opencode://` URL 方案启动会话——增强桌面集成和工作流自动化。 |
| **#54174** | [fix(core): 将遗留 MCP 超时迁移至启动预算](https://github.com/anomalyco/opencode/pull/54174) | 修复 #54184 — 将 V1 每个服务器的标量 `timeout` 映射到 V2 目录和执行预算，包括 MCP 初始化的启动预算。 |
| **#54219** | [feat(sdk): 在恢复前植入主机插件](https://github.com/anomalyco/opencode/pull/54219) | 加强嵌入式 workerd 消费者——插件不再需要注册两次，且 `resumeSuspendedSessions` 现在在正确的层生命周期阶段运行。 |
| **#54218** | [fix(core): 说明无法分析的命令](https://github.com/anomalyco/opencode/pull/54218) | 当可移植 shell 扫描器无法分析命令时改进错误消息——Agent 现在获得可操作的反馈，而非不透明的原因代码。 |
| **#49084** | [refactor(vscode): 对齐扩展与 v2 CLI 并解析符号链接](https://github.com/anomalyco/opencode/pull/49084) | VS Code 扩展重大更新——对齐 v2 CLI 约定，在 shim 中添加符号链接解析，并移除已弃用的 `--port` 标志处理。 |

---

## 功能请求趋势

基于 Issue 分析，最多的功能请求集中在以下领域：

1. **平台扩展**：Windows ARM64 原生支持（#45875）、项目选择中的符号链接处理（#54018）
2. **MCP 协议完整性**：完整的 elicitation 表单处理（#51856）、改进的认证流程（#54225）
3. **V2 功能向 V1 看齐**：自定义首页 Logo（#51916）、LSP/格式化程序服务移植（#38528）、子 Agent 模型/上下文显示（#54043）
4. **会话与进程管理**：会话级进程注册表（#53614）、改进的长时间运行进程可见性（#51020）
5. **桌面集成**：带干净关闭的系统托盘（#50633、#54217）、深度链接支持（#54187）

---

## 开发者痛点

- **证书/网络问题**：企业网络用户在使用自签名 CA 时遇到 SSL 错误——没有明确的解决方法（#54095）
- **数据持久化缺口**：v2 会话在辅助进程重启后丢失消息历史（#51020）
- **权限 UX**：Auto 模式仍显示令人困惑的权限通知（#47545）和提示音（#53525）
- **Windows 桌面 UX**：没有系统托盘图标无法干净地退出应用（#54217、#50633）
- **插件兼容性**：预发布构建跳过有效插件（#53647）；V1 插件槽位如 `home_logo` 没有 V2 等价物（#51916）
- **模型提供商 Schema 错误**：Gemini 持续触发可空类型的 schema 验证错误（#48073、#34130、#54033）

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Simplified Chinese. I need to:
1. Translate all the content into Chinese
2. Keep all the technical elements, URLs, code, numbers, headings exactly as they are
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation

Let me go through and translate carefully:

## Today's Highlights - 今日要闻

The Pi community is grappling with several high-impact issues heading into the weekend. A critical bug affecting Bun-compiled executables (#10645) is causing all image attachments to be omitted since v0.87.x, while Windows users continue to face UI rendering problems (#6300) and session context issues (#10082). On the positive side, contributors have shipped notable improvements around OpenRouter model filtering, Cloudflare AI gateway customization, and CJK text rendering in the TUI.

Pi 社区在周末前夕正面临多个高影响力问题。影响 Bun 编译可执行文件的关键 bug（#10645）导致自 v0.87.x 以来所有图片附件被忽略，同时 Windows 用户持续遇到 UI 渲染问题（#6300）和会话上下文问题（#10082）。积极的一面是，贡献者已交付了 OpenRouter 模型过滤、Cloudflare AI 网关自定义和 TUI 中文渲染方面的显著改进。

---

## Releases - 发布

No new releases in the last 24 hours.

过去 24 小时内无新版本发布。

---

## Hot Issues - 热门问题

| # | Issue | Summary | Comments |
|---|-------|---------|----------|
| **#7547** | **[Windows] How do you use Pi on windows?** | A meta-issue gathering feedback on Windows usage patterns, documentation gaps, and configuration approaches. The community is voting on which Windows workflows to prioritize. | [79](https://github.com/earendil-works/pi/issues/7547) |


| **#10480** | **[bug] Direct openai connection not recognizing manual usage limit reset** | Users with ChatGPT Pro 100 plans report that Pi doesn't recognize banked usage resets, showing "usage limit reached" despite available credits. Workaround: re-authenticate with `/logout` then `/login openai-codex`. | [17](https://github.com/earendil-works/pi/issues/10480) |
| **#8643** | **Bedrock: OpenAI models reject images nested in toolResult.content** | 需要将图片从 toolResult 中提取出来，作为独立的用户内容块供 Bedrock 托管的 OpenAI 模型使用，类似于 `openai-completions.ts` 的现有处理方式。修复已在 fork 上准备就绪。 | [12](https://github.com/earendil-works/pi/issues/8643) |
| **#9773** | **before_provider_request 不为压缩/摘要请求触发** | 文档声明在"任何 provider 请求"前触发的 `before_provider_request` 钩子实际上不会在压缩或分支摘要操作时触发，导致需要修改 payload 的使用场景失效。 | [11](https://github.com/earendil-works/pi/issues/9773) |
| **#6300** | **[bug] Windows: Input line is redrawn on every keystroke** | 在 Windows 10/11 上，TUI 中输入时光标会在每按一个键后跳到新行，这是一个长期影响命令行和 Windows Terminal 的 bug。 | [11](https://github.com/earendil-works/pi/issues/6300) |
| **#10497** | **[bug] OpenRouter 返回 400 错误** | 注入文件内容的扩展偶尔会触发上下文长度错误

（最大 1,048,576 token）。 | [11](https://github.com/earendil-works/pi/issues/10497) |
| **#9656** | **[bug] 鼠标滚轮在 Windows + Zellij 环境下错误地滚动提示历史而非对话** | 全屏模式下鼠标滚轮错误地滚动编辑器历史，在 Zellij 的原生 Windows 环境中出现问题；Linux 上配合 tmux 或不使用多路复用器时功能正常。 | [5](https://github.com/earendil-works/pi/issues/9656) |
| **#10645** | **[进行中] resizeImage 在编译的 (Bun) 可执行文件中解析为 null** |

在 Bun 编译的二进制文件中，从 v0.87.x 版本开始，所有图片附件都被省略。图片调整大小的 worker 返回 null，完全破坏了打包 Pi 的图片功能。

| **#10393** | **在基于 xterm 的终端中复制 Pi CLI 内文本功能损坏** | 文本选择/复制在周围终端中正常工作，但一旦运行 Pi CLI 就失效，影响使用 xterm.js 的 WebPi 和浏览器端 Pi 终端。 | [5](https://github.com/earendil-works/pi/issues/10393) |
| **#10187** | **将 `deviceId` 移出全局设置** | 设

备特定的标识符不应存放在共享的 dotfile 中；跨机器同步配置的用户会遇到冲突。 | [3](https://github.com/earendil-works/pi/issues/10187) |

### 主要 PR 进展

多个 pull request 正在推进中。`pi.dev` 配置架构已被纳入编码代理功能中，同时支持自定义 Cloudflare AI 网关域名和访问凭证。OpenRouter 模型过滤功能也在开发中。

现在可以限制仅显示用户密钥允许的模型。此外，还添加了禁用鼠标光标重新定位的选项，并修复了编码代理中的工具结果处理问题，确保在运行时销毁前完成持久化。

对话代理现在会在自定义消息启动时触发 `before_agent_start` 事件，同时清理孤立的消息。文本渲染方面也得到改进，支持中文粗体显示。还需要防止提示和树形导航的重叠问题。

CLI 认证流程增加了继续授权的支持，允许接收 base64url 编码的 JSON 载荷来完成认证。社区讨论中有人提出在工具调用时暂停运行的想法，这样可以让用户批准结果后再继续执行。

另外有用户建议让模型提供商列表只显示已配置过的选项。还有人展示了一个基于 Pi 构建的本地工具，它能在独立的 Pi 会话间维护项目上下文。

目前有几个功能需求比较集中：首先是跨平台一致性的问题，Windows 上的 bug 特别多；其次是提供商灵活性，用户希望能自定义 Cloudflare AI 网关域名和 OpenRouter 模型过滤；还有配置管理方面，用户想把设备 ID 从共享配置中分离出来；最后是人机协作的工作流，比如工具执行时的暂停和恢复功能。

此外，钩子扩展性也很重要，像 `before_provider_request` 这样的钩子应该能支持所有类型的请求。

开发者遇到的主要问题包括：Jiti 模块缺失导致 Bun 安装的 Pi 无法加载任何扩展；macOS 和 Node 24 上的图片处理存在竞态条件，会导致整个 Pi 进程中止；以及图片功能完全失效的问题。

会话管理方面也存在缺陷，包括并发写入同一会话文件时没有锁机制，reload 无法检测到导入的 .mjs/.cjs 文件的更改。TUI 还有多个问题需要修复，比如 CJK 文本渲染经常出问题、全屏模式下剪贴板选择会复制意外内容、Windows SSH 上的 OSC 颜色查询会泄露到输入中。某些提供商也有特定问题，比如 Groq Qwen3.8 27B 因为 Pi 发送的 developer 角色而失败，OpenRouter 图片模型需要使用不同的端点。</think>

# Pi 社区摘要 — 2026-10-10

## 今日要闻

Pi 社区在周末前夕正面临多个高影响力问题。影响 Bun 编译可执行文件的关键 bug（#10645）导致自 v0.87.x 以来所有图片附件被忽略，同时 Windows 用户持续遇到 UI 渲染问题（#6300）和会话上下文问题（#10082）。积极的一面是，贡献者已交付了 OpenRouter 模型过滤、Cloudflare AI 网关自定义和 TUI 中文渲染方面的显著改进。

---

## 发布

过去 24 小时内无新版本发布。

---

## 热门问题

| # | 问题 | 摘要 | 评论 |
|---|-------|---------|----------|
| **#7547** | **[Windows] How do you use Pi on windows?** | 一个收集 Windows 使用反馈的元问题，涉及使用模式、文档缺口和配置方案。社区正在投票决定优先处理哪些 Windows 工作流。 | [79](https://github.com/earendil-works/pi/issues/7547) |
| **#10480** | **[bug] Direct openai connection not recognizing manual usage limit reset** | 拥有 ChatGPT Pro 100 计划的用户报告 Pi 不识别储备使用重置，尽管有可用额度仍显示"使用限额已触及"。临时解决方案：使用 `/logout` 后再执行 `/login openai-codex` 重新认证。 | [17](https://github.com/earendil-works/pi/issues/10480) |
| **#8643** | **Bedrock: OpenAI models reject images nested in toolResult.content** | 需要将图片从 toolResult 中提取出来，作为独立的用户内容块供 Bedrock 托管的 OpenAI 模型使用，类似于 `openai-completions.ts` 的现有处理方式。修复已在 fork 上准备就绪。 | [12](https://github.com/earendil-works/pi/issues/8643) |
| **#9773** | **before_provider_request 不为压缩/摘要请求触发** | 文档声明在"任何 provider 请求"前触发的 `before_provider_request` 钩子实际上不会在压缩或分支摘要操作时触发，导致需要修改 payload 的使用场景失效。 | [11](https://github.com/earendil-works/pi/issues/9773) |
| **#6300** | **[bug] Windows: Input line is redrawn on every keystroke** | 在 Windows 10/11 上，TUI 中输入时每个字符都会渲染到新行——一个影响命令提示符和 Windows Terminal 的长期 bug。 | [11](https://github.com/earendil-works/pi/issues/6300) |
| **#10497** | **[bug] OpenRouter 返回 400 错误** | 注入文件内容的扩展偶尔会触发上下文长度错误（最大 1,048,576 token）。 | [11](https://github.com/earendil-works/pi/issues/10497) |
| **#9656** | **[bug] 鼠标滚轮滚动提示历史而非对话内容（Windows + Zellij）** | 全屏模式下鼠标滚轮错误滚动编辑器历史，在原生 Windows 的 Zellij 中表现异常；在 Linux 配合 tmux 或不使用多路复用器时工作正常。 | [5](https://github.com/earendil-works/pi/issues/9656) |
| **#10645** | **[进行中] resizeImage 在编译的 (Bun) 可执行文件中解析为 null** | **严重：** 自 v0.87.x 以来，Bun 编译的二进制文件中所有图片附件被忽略。图片调整大小的 worker 返回 null，完全破坏了打包 Pi 的图片功能。 | [5](https://github.com/earendil-works/pi/issues/10645) |
| **#10393** | **在基于 xterm 的终端中复制文本功能损坏** | 文本选择/复制在周围终端正常工作，但一旦运行 Pi CLI 就失效，影响使用 xterm.js 的 WebPi 和浏览器端 Pi 终端。 | [5](https://github.com/earendil-works/pi/issues/10393) |
| **#10187** | **将 `deviceId` 移出全局设置** | 设备特定标识符不应存放在共享 dotfile 中；跨机器同步配置的用户会遇到冲突。 | [3](https://github.com/earendil-works/pi/issues/10187) |

---

## 关键 PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| **#10751** | **feat(coding-agent): use pi.dev configuration schemas** | 使 pi.dev schema 端点成为规范的 `$id` 值；在内置主题和示例中使用已发布的 theme schema。 |
| **#10747** | **feat: allow custom Cloudflare AI gateway domains and access credentials** | 支持 Cloudflare AI Gateway 的自定义域名和访问凭证，修复 #10627。 |
| **#10672** | **feat(ai,coding-agent): list only the OpenRouter models a key may use** | 根据用户密钥权限过滤 OpenRouter 模型目录，将内置模型与 `/models/user` 结果结合以获取准确的上下文大小和定价信息。 |
| **#10745** | **Option to disable cursor repositioning with mouse** | 添加 `editorClickMovesCursor` 设置项和 `PI_EDITOR_CLICK_MOVES_CURSOR` 环境变量以控制左键点击时光标定位行为。 |
| **#9126** | **fix(coding-agent): settle tool results before disposal** | 通过等待 `session.abort()` 确保工具结果和最终助手消息在运行时销毁前持久化。 |
| **#10739** | **fix(coding-agent): emit before_agent_start for runs started by custom messages** | 修复使用 `sendCustomMessage({ triggerTurn: true })` 时系统提示中途变更的问题。 |
| **#10734** | **fix(ai): drop orphaned tool results in transformMessages** | 清除截断/压缩后仍保留的无对应助手调用的孤立工具结果。 |
| **#10730** | **fix(tui): render CJK emphasis next to fullwidth punctuation** | 修复中文粗体渲染失效问题，当 `**` 位于中文标点和后续字符之间时无法正确闭合。 |
| **#9155** | **fix(coding-agent): prevent prompt and tree navigation overlap** | 拒绝重叠的提示准备和树导航，防止上下文消失。 |
| **#10663** | **feat(cli): pi auth --continue** | 添加通用延续handoff入口点，用于完成在其他地方启动的认证流程，接受 base64url 编码的 JSON payloads。 |

---

## 热门讨论

### 想法
- **#10632**: *“在工具调用时暂停运行，直到人类批准或客户端结果到达”* — 一位用户提出了需要人类批准或客户端数据的工具模式，运行在执行前停止，待处理调用持久化（不保存在内存中），批准后恢复。 [2 条评论](https://github.com/earendil-works/pi/discussions/10632)

### 问答
- **#5572**: *“如何注销 huggingface 作为模型提供商？”* — 一位用户希望 `pi --list-models` 只显示已配置的服务商。 [1 条评论](https://github.com/earendil-works/pi/discussions/5572)

### 展示
- **#10432**: *“Threshold：基于 Pi 构建的项目根级 harness”* — 一个用于跨独立 Pi 会话延续软件项目的本地 harness，允许 workers 变更同时通过检查点和消息维护项目上下文。 [0 条评论](https://github.com/earendil-works/pi/discussions/10432)

---

## 功能需求趋势

1. **跨平台一致性**：跨平台 bug 占主导——输入渲染、鼠标滚轮行为、剪贴板集成以及 Zellij/多路复用器兼容性都需要关注。
2. **提供商灵活性**：支持自定义 Cloudflare AI 网关域名、细粒度 OpenRouter 模型过滤以及模型提供商的 MFA 正在推进中。
3. **配置管理**：用户希望设备特定标识符（deviceId）与共享 dotfile 分离。
4. **人机协作工作流**：工具执行暂停/恢复以等待批准或外部数据是反复出现的需求。
5. **钩子扩展性**：`before_provider_request` 应为所有请求类型触发，包括压缩/摘要。

---

## 开发者痛点

- **Bun + Node 运行时冲突**：Bun 安装的 Pi 配合 Node 运行时因缺少 `jiti` 模块而无法加载任何扩展（#10719）。
- **图片处理回归**：macOS/Node 24 上的图片调整 worker 销毁竞态导致整个 Pi 进程中止（#10695）；Bun 编译的可执行文件完全忽略图片（#10645）。
- **会话持久化缺口**：同一会话文件的并发写入无锁机制（#8848）；reload 不获取导入的 `.mjs`/`.cjs` 文件的更改（#6000）。
- **TUI 怪癖**：中文文本渲染频繁失效；全屏模式下表格的剪贴板选择复制意外内容；Windows SSH 上的 OSC 10/11/4 颜色查询泄露到输入中。
- **提供商特定问题**：Groq Qwen3.8 27B 因 Pi 发送 `developer` 角色而失败；OpenRouter 图片模型需要与聊天补全不同的端点。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the text content while keeping the Markdown structure exactly as-is
2. Keep URLs, issue/PR numbers, version tags, file paths, technical terms as-is
3. Use natural technical Chinese register
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title:**
# Qwen Code Community Digest — October 10, 2026
→ # Qwen Code 社区速报 — 2026年10月10日

**Today's Highlights:**
The Qwen Code project continues its rapid iteration on the Managed Agent architecture, with two releases shipping in the last 24 hours that fix remote host binding issues. Major developments center on the Stage G/H multi-agent work—particularly session durability, checkpoint recovery, and the new Kubernetes runtime. Community discussions highlight strong interest in the dual-path Managed Agent architecture proposal (51 comments) and cross-platform tool delivery.
→ 
Qwen Code 项目继续快速迭代 Managed Agent 架构，过去 24 小时内发布了两个版本，修复了远程主机绑定问题。重大开发进展集中在 Stage G/H 多代理工作——特别是会话持久化、检查点恢复和新的 Kubernetes 运行时。社区讨论显示对双路径 Managed Agent 架构提案（51 条评论）和跨平台工具交付非常关注。

**Releases section:**
Releases → 版本发布
Summary → 概要

**Hot Issues section:**
Issue → 问题
Why It Matters → 重要性
Comments → 评论数

**Key PR Progress section:**
Title → 标题
Significance → 重要性

**Feature Request Trends:**
Feature Request Trends → 功能需求趋势
1. Multi-Agent Architecture → 多代理架构
2. Kubernetes Runtime → Kubernetes 运行时


3. Dynamic MCP Integration → 动态 MCP 集成
4. Session Recovery & Checkpoints → 会话恢复与检查点
5. Context-Aware Compression → 上下文感知压缩
6. Multi-Agent Public API → 多代理公共 API

I'll focus on the emerging trend of multi-agent public API integration. This represents a significant advancement in enabling developers to leverage complex, interconnected AI agent systems across different platforms and use cases. The trend suggests a move towards more flexible and interconnected AI agent architectures, where multiple specialized agents can collaborate and share capabilities through standardized interfaces.

The pain points reveal critical technical challenges that need addressing. These range from session management issues, parsing complications, HTTP transport problems, and infrastructure-level constraints like disk exhaustion. Each point represents a potential roadblock in creating robust, reliable multi-agent systems.

The project continues its rapid iteration on the Managed Agent architecture, with recent releases addressing remote host binding complexities. Development is now concentrated on multi-agent work, particularly focusing on session durability, checkpoint recovery, and the innovative Kubernetes runtime. Community interest is particularly high in the dual-path Managed Agent architecture proposal, which has garnered 51 comments, and cross-platform tool delivery mechanisms.</think>

# Qwen Code 社区速报 — 2026年10月10日

## 今日要点

Qwen Code 项目继续快速迭代 Managed Agent 架构，过去 24 小时内发布了两个版本，修复了远程主机绑定问题。重大开发进展集中在 Stage G/H 多代理工作——特别是会话持久化、检查点恢复和新的 Kubernetes 运行时。社区讨论显示对双路径 Managed Agent 架构提案（51 条评论）和跨平台工具交付非常关注。

---

## 版本发布

| 版本 | 概要 |
|------|------|
| **[v0.25.1-preview.1](https://github.com/QwenLM/qwen-code/releases/tag/release/v0.25.1-preview.1)** | 修复 agents：替换选中的远程 Hosts 时保留绑定关系 (#13430)。包含 test/core 更新。 |
| **[v0.25.0-nightly.20261009.085a44f336](https://github.com/QwenLM/qwen-code/releases/tag/release/v0.25.0-nightly.20261009.085a44f336)** | 夜间构建版本，包含相同的远程 Host 绑定修复。 |

---

## 热门 Issue

| # | Issue | 重要性 | 评论数 |
|---|-------|--------|--------|
| **[#12380](https://github.com/QwenLM/qwen-code/issues/12380)** | **proposal(serve): 定义 Managed Agent 双路径架构和分阶段交付** — 提议一种分阶段 Managed Agent 架构，保留现有的 TypeScript agent 循环，将模型推理独立于工具环境配置运行，并支持持久的 Session 所有权、Workspace 绑定和可恢复的工具执行。 | 这是 Qwen Code 多代理能力下一主要阶段的基础设计文档。51 条评论表明社区参与度极高。 | 51 |
| **[#13395](https://github.com/QwenLM/qwen-code/issues/13395)** | **tracking(runtime): Kubernetes 工具运行时进度与跨平台交付门禁** — 跟踪 Kubernetes CSI 驱动实现进度，支持私有的有限 Read/Write/Edit 操作。 | 对于在容器化/K8s 环境中运行 Qwen Code 至关重要。PR #13526 正在交付运行时。 | 19 |
| **[#12867](https://github.com/QwenLM/qwen-code/issues/12867)** | **feat(managed-agent): Stage D 后续工作：持久生命周期、Turns、Actions、持久准入和 AgentDefinition** | 涵盖 Stage D 交付物，包括持久生命周期、Turns、Actions 和 AgentDefinition——这是会话持久化的关键。 | 19 |
| **[#6710](https://github.com/QwenLM/qwen-code/issues/6710)** | **fix(acp): 区分用户取消的 turn 与恢复后的意外中断** — P1 bug，需要区分用户取消的 turn 和恢复后的意外中断。 | 影响恢复场景下的会话可靠性。在最新提交上验证可复现。 | 15 |
| **[#2596](https://github.com/QwenLM/qwen-code/issues/2596)** | **Qwen CLI 持续在末尾添加 `\n`** — 长期存在的 bug，CLI 添加尾随换行符。 | 影响输出一致性。在最新版本上验证但尚未解决。 | 9 |
| **[#13632](https://github.com/QwenLM/qwen-code/issues/13632)** | **feat(mcp): 在 notifications/tools/list_changed 时刷新服务器工具** — 请求在交互式会话中处理 MCP 服务器发来的 `notifications/tools/list_changed`。 | 支持 MCP 工具的动态更新而无需重启会话——对 MCP 服务器集成很重要。 | 8 |
| **[#13492](https://github.com/QwenLM/qwen-code/issues/13492)** | **XML 工具调用恢复丢失包含引用工具标记的外层调用** — 部分修复已合并；外层调用恢复后续工作在 PR #13579。 | XML 解析 bug，可能导致工具调用被静默丢弃。 | 8 |
| **[#12952](https://github.com/QwenLM/qwen-code/issues/12952)** | **feat(managed-agent): Stage G 权威 Session 历史、写入者 fencing 和接管** — Stage G 跟踪项：外部化权威 Session 历史/检查点并实现写入者 fencing。 | 对多代理会话管理和接管能力至关重要。 | 7 |
| **[#13796](https://github.com/QwenLM/qwen-code/issues/13796)** | **HTTP 服务器的 MCP 工具在整个会话期间保持未注册状态** — HTTP MCP 服务器显示"Connected"但工具仍未注册。 | 破坏 MCP HTTP 传输功能。10 月 10 日新报告的问题。 | 4 |
| **[#13800](https://github.com/QwenLM/qwen-code/issues/13800)** | **fix(managed-agent): 被恢复阻塞的 Session 导致同一守护进程的后续 Session 卡住** — P1 bug，阻塞的 Session 导致同一守护进程的后续 turn 挂起。 | 关键的守护进程稳定性问题。 | 3 |

---

## 关键 PR 进展

| PR | 标题 | 重要性 |
|----|------|--------|
| **[#13712](https://github.com/QwenLM/qwen-code/pull/13712)** | **feat(core): 记录提示词执行上下文** — 在用户聊天记录中持久化 `executionContext` 快照（modelId、authType、approvalMode）。 | 启用会话的可审计性和上下文重建。 |
| **[#13669](https://github.com/QwenLM/qwen-code/pull/13669)** | **fix(cli): 窗口化 OpenTUI 转录本以修复空白屏幕恢复** — 仅挂载视口附近的项，而非整个会话历史。 | 长会话的主要 UI 性能修复。 |
| **[#13530](https://github.com/QwenLM/qwen-code/pull/13530)** | **feat(managed-agent): 执行固定的 AgentDefinition 修订版** — 存储的 AgentDefinition 现在在 D8b、D8c-1、D8c-2 上驱动 Session 执行。 | 启用版本化、可复现的 agent 定义。 |
| **[#13786](https://github.com/QwenLM/qwen-code/pull/13786)** | **feat(managed-agent): H4d-a 会话消息记录契约和子延续规则** — managed 子代理工作的 H4d 片段的记录契约。 | 推进多代理会话延续工作。 |
| **[#13599](https://github.com/QwenLM/qwen-code/pull/13599)** | **feat(core): 在自动压缩前根据剩余空间收缩工具结果** — 根据实际上下文剩余空间动态收缩工具结果，而非静态预算。 | 智能上下文管理——减少 token 浪费。 |
| **[#13219](https://github.com/QwenLM/qwen-code/pull/13219)** | **fix(managed-agent): 使用终态限制重试循环** — 在 managed-agent 堆栈的重试循环中添加预算和终态。 | 防止无限重试循环和卡住的投影。 |
| **[#13769](https://github.com/QwenLM/qwen-code/pull/13769)** | **feat(managed-agent): 可重启恢复的前台子代理等待** — 使前台子代理等待可重启恢复（修复 #13708）。 | 对子代理执行期间的会话持久化至关重要。 |
| **[#13330](https://github.com/QwenLM/qwen-code/pull/13330)** | **fix(managed-agent): R2 审查后的连接器和代理鲁棒性** — 八个后续修复，包括在重启后存活的生命周期 fence。 | 来自合并后审查的生产加固。 |
| **[#12559](https://github.com/QwenLM/qwen-code/pull/12559)** | **fix(cli): 匹配 ink 的 OpenTUI 弹出窗口几何和完成截断** — 修复弹出窗口大小以匹配 ink 行为，并正确截断完成下拉列表。 | 终端渲染的 UI 一致性修复。 |
| **[#13188](https://github.com/QwenLM/qwen-code/pull/13188)** | **fix(cli): 关闭 #13083 合并后接管发现项** — 交付三个关于 Hosted Turn 接管 / G1 故障转移的关键发现。 | 改进故障转移可靠性。 |

---

## 功能需求趋势

1. **多代理架构** — Managed Agent 双路径架构、会话持久化和子代理编排（Stage D、G、H）有强劲发展势头。
2. **Kubernetes 运行时** — K8s CSI 驱动和跨平台工具交付正在积极开发中（#13395）。
3. **动态 MCP 集成** — 请求在运行时刷新工具而无需重启会话（#13632）。
4. **会话恢复与检查点** — 多个 PR/Issue 聚焦于可重启恢复的会话、写入者 fencing 和接管能力。
5. **上下文感知压缩** — 根据实际上下文压力动态截断工具结果（#13599, #2566）。
6. **多代理公共 API** — 提议在公共契约上暴露 agent-identity 维度，以支持可归因的树形执行（#13785）。

---

## 开发者痛点

1. **会话卡死问题** — 恢复阻塞的 Session 导致下游 Session 挂起（#13800, #13708）被标记为 P1。
2. **XML 恢复 bug** — 孤立的工具调用闭合标签泄漏为纯文本，外层调用恢复丢弃有效调用（#10700, #13492）。
3. **MCP HTTP 传输** — HTTP MCP 服务器显示"Connected"但工具保持未注册（#13796）是新的阻塞问题。
4. **CLI 输出问题** — 持续添加尾随换行符（#2596）虽经多次关注仍未解决。
5. **上下文上限解析** — 服务器报告的上下文上限被解析后丢弃，导致响应式恢复按照推断的窗口大小进行（#13432）。
6. **Docker 磁盘耗尽** — 夜间发布 CI 达到磁盘限制；近期修复（#13481）添加了 BuildKit 缓存清理。

---

*速报基于 GitHub 数据生成 — 2026年10月10日*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*