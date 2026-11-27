# AI CLI 工具社区动态日报 2026-11-27

> 生成时间: 2026-11-27 04:29 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. Let me go through it carefully and translate while preserving all formatting, structure, and technical terms.

Key things to remember:
1. Output ONLY the translation, no preamble or fences
2. Preserve all Markdown structure exactly
3. Keep URLs, numbers, dates, code, version tags, project names as-is
4. Use natural technical Chinese register
5. Don't translate project names, slugs, version numbers, issue/PR references

Let me translate section by section:

Title: "AI CLI Tools Ecosystem — Cross-Tool Comparison Report" → "AI 命令行工具生态——跨工具对比报告"

Date format stays the same.

I'll go through each section and translate naturally while keeping the technical register appropriate for a Chinese developer audience.
</think>


# AI 命令行工具生态——跨工具对比报告

**日期：** 2026-11-27

---

## 1. 生态概览

AI CLI 工具生态正处于快速并行演进的阶段。每个主流工具都在向同一架构模型收敛——智能体编排、多轮会话管理、工具/扩展/插件系统以及 MCP（Model Context Protocol）集成——但在解决这些问题时，各家采用了截然不同的工程理念。Anthropic 的 Claude Code 和 OpenAI 的 Codex 优先注重桌面原生体验和企业部署场景，而 Google 的 Gemini CLI、社区驱动的 OpenCode 以及阿里的 Qwen Code 则更强调 CLI 优先、可脚本化和高可扩展的工作流。Copilot CLI 则占据了一个独特的细分市场——作为 GitHub 原生的轻量级封装器。在所有工具中，社区关注的核心议题包括：内存/资源管理、平台特定回归（尤其是 Windows 和 Linux）、多账户和权限处理，以及安全性（沙箱、审批流程）与开发者体验（自动化工作流、无值守执行）之间的根本矛盾。

---

## 2. 活跃度对比

| 工具 | 今日发布 | 近期 Issues | 近期 PRs | Discussions | 社区渠道模式 |
|---|---|---|---|---|---|
| **Claude Code** | 0 | 共 50 条，互动活跃 | 4（1 open, 3 closed） | N/A | 仅 Issues + PRs |
| **OpenAI Codex** | 2 个 alpha（v0.174.0-alpha.7/8） | 高量级，按评论数排名前 30 | **20 条已合并** | 活跃（8 条） | 三渠道全开——总体活跃度最高 |
| **Gemini CLI** | 0 | 共 50 条，互动活跃 | 20（3 新建, 17 活跃） | N/A | 仅 Issues + PRs |
| **GitHub Copilot CLI** | 3 个（v1.0.117-3/4/5） | 共 34 条，中等活跃 | 0 | N/A | 仅 Issues + PRs；社区规模最小 |
| **OpenCode** | 0 | 共 50 条，互动非常活跃 | 共 50 条，活跃 | N/A | 仅 Issues + PRs；待审 PR 积压最多 |
| **Pi** | 0 | 共 50 条，互动活跃 | 18（10+ 新建） | N/A | 仅 Issues + PRs |
| **Qwen Code** | 4 个（stable + nightly + SDK） | 显示 30 条，互动活跃 | 10（全部 open/活跃） | N/A | 仅 Issues + PRs |

**观察：**

- **OpenAI Codex** 在原始吞吐量上领先——24 小时内合并了 20 条 PR，加上活跃的讨论量，显示出密集的开发冲刺节奏，很可能正面向某个重要里程碑。
- **GitHub Copilot CLI** 社区规模最小，但保持着最严格的发布节奏（三天内三个补丁版本），表明其 CI/CD 成熟、代码覆盖面精简。
- **OpenCode** 积压了最多的待审 PR（共 50 条），说明要么贡献者兴趣高涨，要么评审吞吐不足。
- **没有任何工具** 将 Discussions 作为主要社区渠道；七款工具全部依赖 Issues 进行缺陷报告和功能请求。OpenAI Codex 是例外，拥有不可忽视的讨论量，反映出更产品化的社区运营模式。

---

## 3. 共同功能方向

以下需求在多个工具社区中反复出现，表明了真实的跨生态系统痛点：

### 智能体与会话可靠性
- **内存泄漏与进程清理：** Claude Code（fseventsd、守护进程 worker 泄漏）、Gemini CLI（已释放会话仍持有闭包）、Copilot CLI（凭据管理器膨胀）、Qwen Code（冷启动扫描索引重建风暴）和 Pi（AgentSession GC 保留）均报告了内存或进程管理问题。这是跨工具出现频率最高的问题。
- **崩溃恢复：** Claude Code 的守护进程崩溃、Gemini CLI 的崩溃恢复、Qwen Code 的托管会话冷恢复以及 Copilot CLI 的网络重连处理，都各自独立地被提出。
- **子智能体/智能体挂起：** Claude Code（通用智能体挂起）、Gemini CLI（子智能体 MAX_TURNS 上报）和 Pi（AgentSession.dispose GC）——这些并行故障表明多智能体编排的架构复杂度是系统性挑战。

### 多账户与多提供商身份
- **多账户支持：** Claude Code（#18435，1,114 👍）拥有所有工具中单一 Issue 最高点赞数——社区对多配置文件切换的需求非常强烈。OpenCode、Copilot CLI 和 Qwen Code 也独立提出了多账户场景的需求。
- **模型/提供商发现：** Gemini CLI、OpenCode 和 Qwen Code 均请求更好的模型发现机制，以配合提供商设置流程。

### MCP 生态
- **MCP 服务器稳定性：** Claude Code（Gmail MCP 隐私）、Gemini CLI（stdio 连接超时）、Copilot CLI（MCP 工具持久化）、Qwen Code（MCP OAuth 令牌固定）和 OpenCode（MCP 连接断开处理）均独立报告了 MCP 可靠性问题。
- **TLS/证书信任：** Copilot CLI（自定义 CA 支持）、Gemini CLI（自签名证书）和 Qwen Code（私网证书）都在构建相同的信任基础设施。

### 安全与权限边界
- **沙箱限制带来的摩擦：** Claude Code（子智能体文件写入）、Copilot CLI（git 子模块阻止）、Gemini CLI（破坏性操作警告）和 OpenCode（Promise 工具权限提示）都在安全性和自动化之间艰难取舍。
- **凭据隔离：** Qwen Code（fork 审查凭据）、Copilot CLI（凭据管理器膨胀）和 Gemini CLI（OS 沙箱）都需要更好的凭据生命周期管理。

### 平台特定问题
- **Windows 回归：** Claude Code、Codex、Copilot CLI 和 OpenCode 均报告了 Windows 特定故障——最常见的是网络访问阻断、沙箱限制以及更新后的 UI 选择器回归。
- **Linux 桌面支持：** Claude Code（fseventsd）、Qwen Code（AppImage/Mesa）和 Copilot CLI（GHE.com 更新程序）各有独特的 Linux 特定问题，尽管 Linux 用户占比相对较小。

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 | 独特差异化点 |
|---|---|---|---|---|
| **Claude Code** | 桌面原生智能体 IDE | 专业开发者、资深用户 | 坚定默认值、MCP 中心化、桌面优先 | 单一 Issue 点赞数最高；最大功能请求（多账户 1,114 👍）；激进的 MCP 集成 |
| **OpenAI Codex** | Web/CLI 混合，TUI 卓越 | 全平台开发者 | 20+ PR/天 的吞吐量；TUI 密集型；Chrome 扩展桥接 | 最快发布周期；活跃的讨论论坛；广泛的平台对等努力 |
| **Gemini CLI** | CLI 优先可扩展性 | 想要自定义工具链的开发者 | 插件/钩子架构；AST 感知工具调查；skill 系统 | AST 感知文件分析（epic 级别）、可配置的单工具超时、skill 调用系统 |
| **GitHub Copilot CLI** | GitHub 原生轻量封装器 | GitHub Copilot 订阅用户 | 最小化代码覆盖面；仅 CLI；策略驱动安全 | 最紧密的 GitHub 集成；最严格的发布节奏；最小占用空间 |
| **OpenCode** | 社区驱动的开源替代方案 | 开源社区、自托管用户 | 完整 CLI + 桌面；积极向上游贡献 | 50 条待审 PR；增长最快的 PR 积压；社区治理模式 |
| **Pi** | SDK 优先可扩展性 | SDK 集成商、harness 开发者 | SDK 架构；Mod 运行时；Pi Durable 持久化任务 | Mod 插件系统；Harness kernel 集成；pi-image API；遥测透明度 |
| **Qwen Code** | Kernel 集成，注重隐私 | 企业和中文用户 | 基于 kernel 的架构；默认关闭用量统计 | Harness kernel 集成；冷恢复；作用域化模型默认值；fork 审查凭据隔离 |

**核心差异化：**

- **Claude Code** 押注于桌面原生体验和 MCP 生态深度；**OpenAI Codex** 押注于原始吞吐量和 TUI 打磨。
- **Gemini CLI** 通过 SDK 优先设计和 AST 感知工具实现差异化；**Pi** 通过 Mod 运行时和持久化任务架构实现差异化。
- **GitHub Copilot CLI** 有意保持轻量，而 **Qwen Code** 是隐私意识最强的（默认关闭用量统计，loopback 凭据服务）。
- **OpenCode** 是唯一社区治理的项目，其激励结构不同——功能反映直接贡献者需求，而非企业路线图。

---

## 5. 社区势能与成熟度

| 工具 | 势能信号 | 成熟度信号 |
|---|---|---|
| **Claude Code** | 单个功能请求 1,100+ 点赞，258 条评论讨论 | 产品成熟，发布节奏稳定；Issue 反映的是精细化优化而非核心功能缺陷 |
| **OpenAI Codex** | 20 PRs/天，活跃讨论，2 个 alpha 发布 | 快速迭代；回归风险升高（11 月 21 日更新后多个 Windows bug） |
| **Gemini CLI** | 稳定的 issue/PR 量，多个 P1 并行 | 积极开发中，核心稳定性问题尚未解决（智能体挂起、内存泄漏） |
| **GitHub Copilot CLI** | 稳定 3 版本/天的节奏，Issue 量较小 | CI/CD 最成熟；代码覆盖面最小意味着更少回归 |
| **OpenCode** | 50 条待审 PR，活跃的 Issue 分流 | 高贡献者兴趣；PR 积压暗示评审瓶颈或活跃功能开发 |
| **Pi** | 18 条 PR，多样化功能工作（遥测、image API、Mods） | 架构投资阶段；多个 epic 级别功能并行推进 |
| **Qwen Code** | 4 个版本，10 条活跃 PR，冷恢复 + kernel 集成 | 快节奏推进，重大架构变更并行；CI 慢性失败表明成长中的痛点 |

**社区健康度总结：**
- **最成熟：** GitHub Copilot CLI（严格的发布节奏，最小代码覆盖面）和 Claude Code（稳定的用户基础，高互动度）。
- **推进最快：** OpenAI Codex（20 PRs/天）和 Qwen Code（4 个版本 + kernel 集成）。
- **社区能量最高：** OpenCode（50 条 PR 积压，社区驱动）和 Claude Code（单一 Issue 点赞数最高）。
- **波动最大：** Gemini CLI 和 OpenAI Codex（均有多条 P1 bug 并行开放）。

---

## 6. 趋势信号

### 给开发者的选型建议

1. **MCP 已是基础标配。** 每个工具都在构建 MCP 服务器支持、TLS 信任基础设施和连接弹性。差异化在于深度——Claude Code 的 MCP 生态最成熟；Gemini CLI 的单工具超时和 AST 感知分析代表下一代方向。

2. **安全与体验是核心设计张力。** 每个工具都在同一取舍中挣扎：激进的沙箱会阻断合法工作流；宽松的安全策略能实现自动化但存在破坏性操作风险。行业正趋向于交互式审批模式（Claude Code 的 `/approve`、Copilot CLI 的辅助权限）作为折中方案。

3. **平台一致性仍未解决。** Windows 和 Linux 回归问题出现在每个工具的 Issue 追踪器中。macOS 生态最稳定；Windows 持续面临沙箱、网络和 UI 问题；Linux 支持在各处都是附带考虑。这是一个需要 12–18 个月才能解决的长期问题。

4. **子智能体和多智能体编排是下一个主战场。** Claude Code 的多账户需求、Gemini CLI 的子智能体 MAX_TURNS bug、Pi 的 Mod 运行时和 Qwen Code 的持久化调度，都指向多智能体协作作为下一个重大功能维度。

5. **社区驱动的工具正在快速缩小功能差距。** OpenCode 的 50 条 PR 积压和 Qwen Code 的 kernel 集成代表了非企业贡献者的重大工程投入，表明开源生态系统不仅仅是功能复制，而是在推动架构演进。

6. **隐私感知设计正在兴起。** Qwen Code 默认关闭遥测和 Copilot CLI 为 fork 审查提供的 loopback 凭据服务，释放出一个信号：企业级和注重隐私的用户群体正在壮大，生态系统开始有针对性地回应这一需求。

7. **CLI 工具正在演化为全功能平台。** 插件系统（Gemini CLI hooks）、Mod 运行时（Pi）、kernel 集成（Qwen Code）和扩展 API（OpenCode）的存在表明，CLI 工具已不再是单一用途的实用程序——它们正在成为具有显著生态锁定潜力的可扩展开发平台。

---

*本报告基于 2026-11-27 七个 AI CLI 工具社区摘要数据生成。指标反映公开 GitHub 仓库中可见的活跃情况。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content while preserving the markdown structure
2. Keep all URLs, code snippets, technical identifiers as-is
3. Keep issue/PR numbers and their link text as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me go through and translate section by section.

Title and subtitle:
"Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区亮点报告"
"Data as of 2026-11-27 | Source: github.com/anthropics/skills" → "数据截至 2026-11-27 | 数据来源：github.com/anthropics/skills"

Section 1: "Top Skills Ranking"
"Skills (PRs) generated the most discussion and engagement:" → "以下 Skills（PR）在讨论量和社区参与度上名列前茅："

Table content translation...

Section 2: "Community Demand Trends"
Analysis of Issues reveals these emerging directions → 从 Issues 分析可以看出以下需求趋势

Section 3: "High-Potential Pending Skills"
These PRs show active development and may merge soon → 以下 PR 正处于活跃开发阶段，有望近期合并

Section 4: "Skills Ecosystem Insight"
The Claude Code Skills community is most concentrated on → Claude Code Skills 社区的核心关注点集中在

Let me translate this carefully, maintaining the natural technical Chinese register.
</think>


# Claude Code Skills 社区亮点报告

*数据截至 2026-11-27 | 数据来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

以下 Skills（PR）在讨论量和社区参与度上名列前茅：

| 排名 | PR | Skill / 修复内容 | 作者 | 状态 | 核心关注点 |
|------|-----|-------------|--------|--------|-----------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2.0 HTTP 客户端修复** | Kuldeeep18 | OPEN | 适配 MCP v2 协议变更，更新 `streamable_http_client` 导入路径及自定义请求头配置 |
| 2 | [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing: 移除 shell=True（安全修复）** | Pcmhacker-piro | OPEN | 修复服务器启动过程中的 CWE-78 命令注入漏洞；关键安全补丁 |
| 3 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: 触发评估及 Windows 兼容性修复** | MartinCajiao | OPEN | 解决触发评估误判、Windows 子进程管道失败及运行时异常被吞没等问题 |
| 4 | [#1792](https://github.com/anthropics/skills/pull/1792) | **docx: LibreOffice 超时处理** | TINGyu123644 | OPEN | 超时时返回正确错误码，并在确认输出 DOCX 无修订标记后才判定成功 |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) | **xlsx: 外部链接检测增强** | reginaldalfret | OPEN | 通过处理工作表作用域的已命名区域及别名，修复 `external_links_at_risk` 的误报问题 |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel: 复古游戏开发 Skill** | kitao | OPEN | 指导基于 Pyxel 的 Python 游戏开发，支持无头测试、帧检测及任务级验证 |
| 7 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor: 智能合约分析** | ProofCore-Protocol | OPEN | 对 Solidity/Rust 合约进行静态分析，通过零存储 Merkle 协议实现 TON 区块链审计证明锚定 |

**讨论亮点：**

- **安全意识突出**：PR #1980 修复了真实的命令注入风险，表明社区对生产环境安全的高度警觉
- **MCP 生态快速演进**：PR #1742 反映了 MCP v2 协议快速迭代带来的 Skill 维护需求
- **跨平台兼容性**：PR #1298 解决了 Windows 子进程处理的特定问题——这是跨环境支持中一个显著的短板

---

## 2. 社区需求趋势

从 Issues 分析可以看出以下需求趋势：

| 趋势 | Issue | 需求信号 | upvotes |
|-------|-------|---------------|---------|
| **安全与信任** | [#492](https://github.com/anthropics/skills/issues/492) | 社区 Skills 分发在 `anthropic/` 命名空间下存在信任边界滥用风险（46 条评论） | 3 |
| **组织级协作** | [#228](https://github.com/anthropics/skills/issues/228) | 需求在 Claude.ai 中实现组织级 Skills 直接共享（17 条评论） | 8 |
| **评估可靠性** | [#556](https://github.com/anthropics/skills/issues/556), [#1352](https://github.com/anthropics/skills/issues/1352) | `run_eval.py` 触发率为 0%；并行 worker 导致 UUID 匹配错乱（合计 19 条评论） | 10 |
| **内存效率** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` skill 单次调用注入约 156k tokens，耗尽上下文 | 0 |
| **Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) | 安全模式提案：策略执行、威胁检测、可信度评分、审计追踪 | 0 |
| **质量门禁** | [#1385](https://github.com/anthropics/skills/issues/1385) | 三阶段流水线：任务前校准 → 对抗性审查 → 交付验证 | 1 |

**核心洞察**：社区最关心的是**运维可靠性**（评估工具静默失败）、**安全与信任**（命名空间混淆、治理模式）以及**规模化协作**（组织级共享）。

---

## 3. 高潜力待合并 Skills

以下 PR 正处于活跃开发阶段，有望近期合并：

| PR | Skill | 就绪指标 | 亮点功能 |
|----|-------|---------------------|------------------|
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** + **quantitative-resume-auditor** | 双 Skill PR，社区讨论活跃 | 将 Notion 规格文档转化为实现任务；审计简历以优化 ATS 适配度 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 目标明确，零成本工作流 | Markdown → Marp 幻灯片 → MP4（配真实语音旁白） |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | 专注细分领域 | 基于配置的 SSH/Slurm 工作流，用于 HPC 集群运维 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 解决普遍痛点 | 防止 AI 生成文档中出现孤行词、寡母行、编号错位等问题 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator** 直接执行修复 | 维护状态活跃 | 支持独立运行 `package_skill.py`；更新文档字符串及 CLI 帮助信息 |

---

## 4. Skills 生态洞察

> **Claude Code Skills 社区的核心关注点集中在生产环境加固上**——修复安全漏洞（命令注入、命名空间信任滥用）、提升评估可靠性，以及改善跨平台兼容性——而非扩展全新的 Skill 领域。

---

*本报告数据来源于官方 anthropics/skills 仓库。所有 GitHub 链接均指向原始 PR/Issue，可直接查阅。*

---

<think>The user wants me to translate the entire Claude Code Community Digest from English into Simplified Chinese. I need to:

1. Translate all the text content while preserving the exact Markdown structure
2. Keep all URLs, link references, issue/PR numbers, code, technical identifiers as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

Title: "Claude Code Community Digest — 2026-11-27"
→ "Claude Code 社区日报 — 2026-11-27"

## Today's Highlights
"Today's Highlights" → "今日要点"
"Today's Highlights" section content needs translation

## Releases
"Releases" → "版本发布"

## Hot Issues
"Hot Issues" → "热门 issue"

### 1. Multi-Account Profile Switching
Translate the content about the multi-account feature request

### 2. Gmail MCP Privacy Bug
Translate the privacy bug report

... and so on for all sections.

Let me be careful about:
- Technical terms: MCP, PR, issue, GitHub-specific terms - these can stay or be adapted naturally
- Emoji should be preserved
- Tables need careful translation of cell content while keeping structure
- URLs stay exactly the same
- Bold text like "FEATURE", "BUG", "ENHANCEMENT" can be kept or translated appropriately

Let me write the full translation now:
</think>


# Claude Code 社区日报 — 2026-11-27

## 今日要点

多账号管理功能成为今日讨论焦点（Issue #18435 获得超过 1,100 个 👍），同时 macOS 上集中出现了一批内存和进程管理相关的 bug，表明系统资源清理机制存在问题。团队近期提交了一个 PR，改进对可复现 issue 的 stale 标记策略，预示着 bug 分诊响应机制正在优化。

---

## 版本发布

过去 24 小时内无新版本发布。团队在 v2.1.x 正式发布后似乎正处于稳定期。

---

## 热门 Issue

### 1. 🔥 多账号配置文件切换（1,114 👍 | 258 条评论）
**【功能】在 Claude Desktop 中增加多 Claude 账号管理能力，支持便捷的配置文件切换**
[Issue #18435](https://github.com/anthropics/claude-code/issues/18435)

仓库内关注度最高的 issue。用户请求原生支持多账号管理，无需注销即可在个人/工作 Claude 账号间切换。社区反馈：强烈需求，已成为高级用户的工作障碍。

---

### 2. 🔐 Gmail MCP 隐私漏洞 — 追踪链接注入（29 条评论 | 15 👍）
**【Bug】Gmail MCP 向 URL 中注入 Google 追踪参数**
[Issue #66010](https://github.com/anthropics/claude-code/issues/66010)

用户反映 Gmail MCP 服务器会在 URL 后追加 Google 追踪参数，引发隐私顾虑。对于使用 MCP 进行邮件自动化的用户而言，这是一个重要的安全隐患。

---

### 3. 💾 macOS fseventsd 内存灾难（20 条评论 | 1 👍）
**【Bug】重度使用 Claude Code 的 Mac 上 fseventsd 失控 — 占用 24 GB 内存，核心进程持续满载数天**
[Issue #98769](https://github.com/anthropics/claude-code/issues/98769)

影响重度 Claude Code 用户的严重性能回退。系统监控守护进程（`fseventsd`）消耗了超出预期 800 倍的内存，且没有自我修复机制。在某些情况下会阻止启动。

---

### 4. 📝 子 Agent Write 工具过度拦截（18 条评论 | 35 👍）
**【Bug】子 Agent 的 Write 工具拒绝创建名为 "report"/"summary"/"findings"/"analysis" 的 .md 文件**
[Issue #44657](https://github.com/anthropics/claude-code/issues/44657)

原本用于防止子 Agent 意外写报告的安全机制，现在错误地拦截了合法的文件名。用户无法使用常见的专业命名约定创建 Markdown 文件，且该拦截无法关闭。

---

### 5. 📈 压缩命令导致的二次增长问题（14 条评论 | 1 👍）
**【Bug】第二次执行 /compact 会重复追加历史记录，导致转录长度二次增长**
[Issue #92089](https://github.com/anthropics/claude-code/issues/92089)

一个可稳定复现的 bug：连续执行 `/compact` 命令会导致转录长度指数级增长。每次压缩错误地将已摘要内容再次追加，随着时间推移性能持续下降。

---

### 6. 📊 会话问卷无法关闭（14 条评论 | 22 👍）
**【改进】桌面应用：无法禁用"这轮会话中 Claude 表现如何？"问卷**
[Issue #94710](https://github.com/anthropics/claude-code/issues/94710)

用户反馈会话内反馈问卷无法在设置中关闭或隐藏。对于不想参与实时反馈收集的开发者来说，这会打断工作流。

---

### 7. 🧟 后台守护进程资源泄漏（9 条评论 | 6 👍）
**【Bug】后台守护进程从不回收过期的 worker — 六周后泄漏 64 个进程、约 7.1 GB 内存**
[Issue #87891](https://github.com/anthropics/claude-code/issues/87891)

长期运行的内存泄漏：后台守护进程无法清理孤立的 worker 进程。六周后用户观察到 64 个泄漏进程消耗了大量内存。

---

### 8. 🔗 文件查看器路径限制（8 条评论 | 6 👍）
**【Bug】桌面应用文件查看器无法打开 additionalDirectories 下文件的链接**
[Issue #94446](https://github.com/anthropics/claude-code/issues/94446)

文件查看器面板只能解析主工作目录内的链接。通过 `additionalDirectories` 添加的文件虽然显示为可点击链接，但无法打开，用户体验不一致。

---

### 9. 📂 外部文件链接回退（7 条评论 | 13 👍）
**【Bug】工作目录外的文件路径不再以内联方式打开 — 更新后的回退问题**
[Issue #73338](https://github.com/anthropics/claude-code/issues/73338)

Claude Desktop 的回退问题：工作目录外的文件显示"此文件在工作目录之外"而非以内联方式打开。影响了将笔记存放在 `~/.claude/projects/` 的用户。

---

### 10. 💳 配额异常快速耗尽（7 条评论 | 已最近关闭）
**【Bug / 计费】Ultra 周配额被错误地快速耗尽**
[Issue #111685](https://github.com/anthropics/claude-code/issues/111685)

*最近已关闭。* 用户报告在一天内配额被耗尽，尽管实际使用量很小。已关闭——可能已解决或转交计费团队处理。

---

## 关键 PR 进展

### 1. ✅ PowerShell 默认插件已合并
**添加 powershell-default 插件：在所有平台上将 PowerShell Preview 作为默认 shell**
[PR #35761](https://github.com/anthropics/claude-code/pull/35761)

通过 SessionStart hook 在所有平台上提供 PowerShell 7+ 作为默认 shell。启用 PowerShell 语法高亮并改善 Windows 脚本支持。

---

### 2. ✅ Chrome 扩展桥接修复已合并
**添加 bridge-fix 插件：修复 Chrome 扩展桥接连接失败问题**
[PR #35684](https://github.com/anthropics/claude-code/pull/35684)

修复 Max 订阅用户使用 Chrome 扩展时 `tengu_copper_bridge` 连接失败的问题。以更干净的插件方式替代了之前的尝试。

---

### 3. ✅ 终端滚动回退已修复
**添加 scroll-fix 插件：修复终端滚动置顶回退问题（所有平台）**
[PR #35683](https://github.com/anthropics/claude-code/pull/35683)

通过拦截同步输出块中的光标上移事件，修复影响所有平台的滚动置顶回退问题。同时提供手动 Ctrl+6 冻结切换作为备用方案。

---

### 4. 🚧 改进 stale issue 分诊
**不对可复现或高影响 issue 标记为 stale**
[PR #112436](https://github.com/anthropics/claude-code/pull/112436)

*进行中。* 自动清理 bot 将不再对带有 `has repro`、`reproduced`、`data-loss` 或 `high-priority` 标签的 issue 进行 stale 标记或关闭。提升了可操作 bug 报告的保留率。

---

## 功能需求趋势

通过对 open issue 和讨论的分析，这些方向的功能需求最为突出：

| 主题 | 代表性 Issue |
|-------|----------------------|
| **账号管理** | 多账号切换、配置文件隔离 (#18435) |
| **无人值守 / 自动化** | 电脑使用 MCP 预审批应用 (#86649)、定时 Agent 支持 |
| **隐私控制** | 关闭会话问卷 (#94710)、MCP URL 追踪退出 (#66010) |
| **平台一致性** | WSL 文件链接 (#94446)、Windows 远程控制持久化 (#110759) |
| **成本透明度** | 分模型用量明细 (#110655)、主动用量提醒 |
| **内存与进程管理** | macOS 进程清理 (#104888, #87891)、空闲会话处理 |

---

## 开发者痛点

**内存与资源管理（macOS 为主）**

多个相互关联的 issue 指向系统清理机制的整体性故障：fseventsd 失控、守护进程 worker 泄漏、空闲会话进程累积。重度用户报告正常使用数周后产生 20–26 GB 内存开销。

**文件访问限制**

文件操作的安全模型造成了摩擦：子 Agent 无法写 "report" 文件、文件查看器忽略额外目录、外部文件链接回退。在多个项目目录间工作的开发者受影响尤为明显。

**计费透明度**

用户报告配额异常耗尽却没有告警。缺乏分模型明细和实时用量通知引发了焦虑，尤其是国际用户（涉及巴西雷亚尔、欧元等货币）。

**远程控制脆弱性**

Windows 用户报告远程控制会话在应用重启后重置。远程控制恢复可能覆盖本地转录历史，导致数据丢失 (#104123)。

**平台特定故障**

macOS 问题在 issue  tracker 中占主导，Windows 和 Linux 用户报告了不同的故障模式——表明 CI/CD 中平台特定测试存在盲区。

---

*生成时间：2026-11-27 | 数据来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. Let me go through the content carefully and translate it while following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, issue references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths as-is
5. Use natural technical Chinese register

Let me translate section by section:

Title: OpenAI Codex Community Digest — 2026-11-27
→ OpenAI Codex 社区日报 — 2026-11-27

Let me translate the rest carefully, maintaining the technical register and natural Chinese expression.
</think>


OpenAI Codex 社区日报 — 2026-11-27

---

## 1. 今日要闻

Codex 社区正在应对一组由 11 月 21 日更新引发的 Windows 回归问题：新的 Work 对话中执行位置选择器和权限选择器消失、网络访问到本地服务的连接被阻断，部分情况下发送按钮甚至被禁用。这些问题合计影响了大多数 Windows 桌面端用户。与此同时，团队在过去 24 小时内合并了 **20 个 Pull Request**，全部针对 TUI（终端用户界面）进行打磨——涵盖渲染稳定性、Markdown 预览、侧边栏行为和 Wayland 支持——表明团队正在集中进行 CLI/TUI 体验的专项迭代。

---

## 2. 版本发布

Rust SDK 在 `0.174.0-alpha` 系列中发布了两个新的预发布版本：

| 版本 | 概要 |
|---|---|
| **0.174.0-alpha.8** | 增量 alpha 版本；发布说明中未提供变更详情。 |
| **0.174.0-alpha.7** | 增量 alpha 版本；发布说明中未提供变更详情。 |

两者均标记为预发布版本，未宣布破坏性变更。使用 Rust SDK 的开发者若无 alpha 功能测试需求，建议继续使用稳定版。([Releases 页面](https://github.com/openai/codex/releases))

---

## 3. 热门 Issue

| # | Issue | 为何重要 | 社区反馈 |
|---|---|---|---|
| **#11023** | **[已关闭] Codex 桌面端 Linux 应用** | 这个长期高票请求（953 个 👍）终于关闭——很可能是因为团队正在积极推进 Linux 桌面版构建的讨论。意味着团队确实在推进 Linux 支持。 | 207 条评论；用户纷纷庆祝，部分用户提到 macOS 上的功耗问题。 |
| **#62943** | **[Windows] 11 月 21 日回归——选择器缺失 & 最大推理强度** | 最新 Windows 更新从新 Work 对话中剥离了核心 UI 元素：执行位置和权限选择器消失，最大推理强度设置也不见了。影响所有 Windows 上的 ChatGPT Work 用户。 | 39 条评论，20 个 👍；多名用户确认同样的症状。 |
| **#53278** | **[Windows] 即使启用了网络，`networkAccess=false` 仍然生效** | Windows 上的沙箱配置错误，即使用户明确启用了网络访问也会静默阻断——这是安全/权限配置的混乱，损害用户信任。 | 29 条评论；各构建版本中均有报告。 |
| **#62918** | **[Windows] 新 Work 对话中发送按钮被禁用；连接错误** | 新 Work 对话无法发送第一条消息；现有对话正常工作。伴随重新启动时的主进程错误——两个症状指向同一个初始化 bug。 | 25 条评论；用户反映完全被阻塞。 |
| **#62669** | **[Windows] 文件路径面包屑持续闪烁** | Windows 上特定窗口宽度下，文件路径面包屑反复重新渲染，造成刺眼的视觉闪烁。 | 19 条评论；Windows 10 和 11 均可复现。 |
| **#62195** | **GPT-6.2 SOL：指令遵循相比 GPT-6.1 退化** | 赞同数最高的 bug 报告之一（16 个 👍）：记录了 GPT-6.2 SOL 在简单编码任务上表现不如 6.1 SOL，尤其是通过计算机操作时。 | 9 条评论；用户称其为严重的可靠性降级。 |
| **#63466** | **GPT-6.2 Astra & Sol：行为退化，过度监督** | 多款之前正常工作的应用被最新模型的持续行为问题破坏。影响依赖 Codex 完成生产任务的职业用户。 | 11 条评论，6 个 👍；对模型质量的担忧正在升温。 |
| **#45061** | **Codex 标题中出现赌博/成人内容词汇** | Codex 自动生成的对话标题中包含无关的中文垃圾信息/赌博内容——这是模型污染问题，可能带来品牌和安全风险。 | 12 条评论；0 个赞同，但内容令人担忧。 |
| **#17003** | **WebSocket 死连接最长 5 分钟才被检测到** | CLI 用户在网络变化杀死连接后，仍会看到"Working"状态持续 5 分钟以上——浪费时间且令人困惑。影响全平台。 | 11 条评论，10 个 👍；跨平台问题。 |
| **#64246** | **[Linux 桌面端] 严重内存耗尽 — 使用 22.6 GiB，触发 OOM** | Linux 桌面端消耗超过 22 GiB 内存和 15.6 GiB swap，导致 systemd-oomd 杀死了 323 个进程。可能是之前内存泄漏（#44525）的回归。 | 2 条评论；对 Linux 用户尤其紧迫，尤其在资源受限的系统上。 |

**值得关注的已关闭 Issue：** #63627（Xcode MCP 回归）已关闭——团队解决了一个导致 Xcode MCP 桥接无法暴露任何工具的服务器/发现工具结果错误。([#11023](https://github.com/openai/codex/issues/11023) · [#62943](https://github.com/openai/codex/issues/62943) · [#53278](https://github.com/openai/codex/issues/53278) · [#62918](https://github.com/openai/codex/issues/62918) · [#62669](https://github.com/openai/codex/issues/62669) · [#62195](https://github.com/openai/codex/issues/62195) · [#63466](https://github.com/openai/codex/issues/63466) · [#45061](https://github.com/openai/codex/issues/45061) · [#17003](https://github.com/openai/codex/issues/17003) · [#64246](https://github.com/openai/codex/issues/64246))

---

## 4. 重要 PR 进展

团队在过去 24 小时内合并了 **20 个 PR**，全部来自 `copyberry[bot]`，聚焦于 TUI 稳定性和用户体验：

| PR | 变更内容 | 重要性 |
|---|---|---|
| **#64256** | 在动画禁用时保持 TUI 状态计时器继续走动 | 修复了动画关闭后经过时间显示停滞的问题。 |
| **#64254** | 在 TUI 回复中内联渲染本地 Markdown 图片 | Markdown 图片 alt 文本现已在支持图片渲染的终端中显示真实图片预览——对文档类工作流是重大体验提升。 |
| **#64253** | 用工作区快捷键恢复隐藏的侧边栏 | `Ctrl+X, s` 现可正确恢复侧边栏内容，不再静默失败。 |
| **#64236** | TUI 恢复时清除陈旧的回合和审查状态 | 解决了崩溃或重连后残留的"进行中"回合和卡住的审查模式。 |
| **#64235** | 修复终端 UI 中 `fd` 搜索摘要的显示 | `-Hd 1` 等深度参数不再泄漏到搜索摘要中，让探索输出更易读。 |
| **#64221** | MCP 启动时不显示 TUI 为 Working 状态 | MCP 服务器初始化不再在用户回合开始前错误报告"Working"。 |
| **#64219** | 点击空白区域时聚焦侧边栏选择器 | 改善了鼠标交互后侧边栏的键盘导航连续性。 |
| **#64214** | 修复模糊文件搜索中的 Unicode 高亮 | 路径中的 Emoji 和组合标记不再导致逐字高亮偏移错误。 |
| **#64211** | 在 TUI 中打开并高亮文件行范围 | `src/search.ts:42-44` 这类文件引用现在打开完整范围并高亮，不再只跳到起始行。 |
| **#64207** | 在 TUI 回滚模式下保存并切换侧对话 | 侧对话现可保存并从父对话历史中重新打开。 |
| **#64192** | 在 Wayland 会话中支持 PRIMARY 选择区 | PRIMARY（鼠标中键粘贴）现在在 Wayland 上正常工作，消除了长期存在的 Linux 限制。 |
| **#64187** | 从根线程配置 Guardian V3 影子审查 | 修复了影子审查路由，使根线程提供的 Guardian V3 设置在全局生效。 |
| **#64184** | 添加 Statsig 更新和评估的指标 | 改善了特性开关评估失败的可见性，助力诊断工作。 |
| **#64204** | 插入 TUI 历史时批量写入终端 | 减少历史回放时的行缓冲刷新开销，改善滚动性能。 |
| **#64202** | 平滑 TUI 推理标题之间的切换 | 推理摘要现以 3.5 秒为周期更新，不再杂乱地流式输出。 |
| **#64199** | 修复部分加载历史时的 TUI 提示编辑 | 未加载的转录页上的提示不再映射到错误的历史条目。 |
| **#64195** | 在 Apple Terminal 中保持 TUI 行着色跨重绘持久 | 着色行背景色在 Apple Terminal 重绘后不再丢失。 |
| **#64193** | 保持跨隐藏推理区域的 TUI 工具调用分组 | 仅被转录专用推理摘要分隔的工具调用现在正确分组。 |
| **#64232** | 整合 TUI 测试并精简快照 | 内部质量改进；用表驱动测试替换重复的测试用例。 |
| **#64230** | 在 TUI 中仅渲染一次匹配文件链接标签 | `[docs/guide.md](docs/guide.md)` 这类 Markdown 链接现仅渲染一次，不再重复。 |

([PR 列表](https://github.com/openai/codex/pulls?q=is%3Apr+updated%3A2026-11-26..2026-11-27))

---

## 5. 热门讨论

### Ideas（想法）
- **#61614 — 用量限制重置后自动恢复任务**（1 个 👍）：提议在用户配额重置时自动恢复被中断的任务。解决了长时间运行的工程任务在中间遇到速率限制时，手动重新触发的痛点。([#61614](https://github.com/openai/codex/discussions/61614))
- **#44419 — VS Code Codex 历史分页扩展到 50 个会话以上**（2 个 👍）：VS Code 扩展只展示最新的 50 个未归档本地会话，而 Codex Desktop 则显示全部。用户期望一致的翻页和搜索功能。([#44419](https://github.com/openai/codex/discussions/44419))

### Q&A
- **#62436 — 支持的 Codex 架构方案：跨运行的项目所有权**（1 个 👍）：开发者正在构建一套使用 Codex 工作节点、NATS/JetStream 和持久化项目记录的个性化协调系统——寻求官方对其架构模式的支持指引。([#62436](https://github.com/openai/codex/discussions/62436))
- **#64176 — Codex Desktop 两次故障的恢复和诊断步骤**（1 个 👍）：用户合并了两条 bug 报告，寻求官方诊断流程，而非重复提交。([#64176](https://github.com/openai/codex/discussions/64176))
- **#64076 — 如何在 `command/exec` 前验证 MXC-or-refusal 和有效权限**（1 个 👍）：Windows App Server 中关于预检查权限验证的问题——与企业安全配置相关。([#64076](https://github.com/openai/codex/discussions/64076))

### Show and Tell（展示与分享）
- **#34350 — Codex Skins：一键壁纸主题**（2 个 👍）：社区通过 CDP 注入构建的主题画廊，运行时重新着色整个 Codex 窗口。可完全撤销，无配置残留。([#34350](https://github.com/openai/codex/discussions/34350))
- **#64218 — Project Board：Codex 任务的本地看板**（1 个 👍）：构建用于追踪从 Codex 聊天历史中提取的任务建议为看板卡片，并带有指向原始对话的反向链接。([#64218](https://github.com/openai/codex/discussions/64218))
- **#61667 — 重新加载后重新打开的交接笔记**（1 个 👍）：展示工作区集成模式，交接笔记持久化并在下一次编辑时重新打开。([#61667](https://github.com/openai/codex/discussions/61667))
- **#64185 — 表单保存线索计数的 Codex 冒烟测试**（1 个 👍）：Codex 修改表单前验证表单分析正确性的实用测试脚本模式。([#64185](https://github.com/openai/codex/discussions/64185))

---

## 6. 功能需求趋势

汇总 Issue 和 Discussion 中的信号，最受关注的功能方向如下：

1. **Linux 桌面端应用** — 单个 Issue 获得了 953 个赞同。社区已达成明确共识：Linux 桌面支持刻不容缓。#11023 的关闭状态表明团队正在积极推进。
2. **VS Code 扩展功能对等** — 需求集中在翻页、搜索和完整历史访问方面，让 IDE 扩展与 Codex Desktop 能力保持一致。
3. **任务自动恢复** — 用户期望被中断的任务在速率限制清除后自动恢复，而非手动重新触发。
4. **可配置的侧边栏和 UI** — 用户希望能够设置显示的最近对话数量、自定义主题、控制侧边栏行为。
5. **改进的模型行为控制** — 用户希望每个对话能够细粒度控制使用哪个模型，并减少模型版本间的回归。

---

## 7. 开发者痛点

以下问题在 Issue 跟踪器中反复出现：

| 痛点 | 证据 |
|---|---|
| **Windows 更新引发回归** | #62943、#62918、#53278、#62925、#63913、#63112 — 11 月 21 日更新从多个维度破坏了 Windows 桌面端的核心功能（连接性、UI 选择器、启动、发送）。 |
| **GPT-6.2 模型质量回归** | #62195（16 个 👍）、#63466、#60133 — 多份报告指出 GPT-6.2 SOL/Astra 在指令遵循、任务完成和回合结束行为上不如 6.1。 |
| **Linux 平台被忽视** | #11023、#64246 — Linux 用户同时面临功能缺失（无原生桌面应用）和严重回归（22+ GiB 内存耗尽）。 |
| **速率限制体验差** | #63577、#58883 — 速率限制导致静默数分钟级退避，且 TUI 在首次 WebSocket 重试时隐藏相关信息，使调试困难。 |
| **Windows 沙箱和权限不一致** | #53278、#49718、#62982 — Windows 沙箱配置产生不一致结果：`networkAccess=false` 被错误应用，受管理的工作空间中 DNS/HTTPS 被阻断，启动挂起与权限配置文件执行相关。 |
| **WebSocket 弹性不足** | #17003 — 死连接最长 5 分钟才被检测到，浪费开发者时间。 |
| **内存管理问题** | #64246 — Linux 内存耗尽至 OOM 条件；可能与之前泄漏 #44525 相关。 |
| **模型污染** | #45061 — 自动生成的对话标题中注入无关赌博/垃圾信息，属于内容安全风险。 |

---

*本日报数据来源为 openai/codex 在 2026-11-27 的 GitHub 数据。所有关联条目均包含原始 GitHub 链接供进一步阅读。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate the entire digest while:
1. Preserving all Markdown structure exactly
2. Keeping URLs, code spans, numbers, dates, usernames, etc. verbatim
3. Using natural technical Chinese in the register of a Chinese developer newsletter
4. Outputting ONLY the translation with no preamble or explanation

Let me translate section by section:

**Title and intro:**
- "Gemini CLI Community Digest" → "Gemini CLI 社区动态"
- "Date:" → "日期："
- "Repository:" → "仓库："

**Section 1: Today's Highlights**
- Keep the structure, translate content naturally

**Section 2: Releases**
- Translate the note about no releases

**Section 3: Hot Issues**
- Translate table headers: "Priority" → "优先级", "Comments" → "评论数", "Summary" → "摘要"
- Translate priority labels: "Critical Priority Issues" → "高优先级问题", "Enhancement & Bug Issues" → "功能与缺陷问题"
- Translate the P1, P2 labels if they appear in Chinese context - I'll keep them as-is or translate as "P1" (严重), "P2" (重要)
- Translate issue titles and summaries naturally

**Section 4: Key PR Progress**
- Table headers: "Author" → "作者", "Size" → "规模", "Area" → "领域", "Summary" → "摘要", "Priority" → "优先级"
- Translate PR titles and summaries

**Section 5: Hot Discussions**
- Translate the note about no data

**Section 6: Feature Request Trends**
- Translate section title and content
- Table: "Theme" → "主题", "Frequency" → "频次", "Key Issues" → "相关 Issue"


- Section 7 needs translation for "Developer Pain Points" as "开发者痛点", with the numbered list items rendered in natural technical Chinese. The footer should become "本动态基于 GitHub 数据生成。获取实时更新，请访问..." with the URL preserved as-is.
</think>


# Gemini CLI 社区动态

**日期：** 2026-11-27  
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日要闻

社区正在积极应对智能体稳定性方面的关键问题——多个与子智能体挂起和崩溃相关的 P1 级别缺陷已经浮出水面，同时新的 PR 引入了急需的体验改进，包括可配置的逐工具超时机制和增强的钩子系统功能。ACP（智能体通信协议）层也在获得重点关注，修复了会话管理和 token 追踪相关的问题。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。** 最近的活动包括 2026 年 9 月的自动化夜间版本更新（#29300, #29291），目前已被标记为过期。

---

## 3. 热门 Issue

### 🔴 高优先级问题

| # | Issue | 优先级 | 评论数 | 摘要 |
|---|-------|----------|----------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 14 | **子智能体在达到 MAX_TURNS 后仍报告 GOAL 成功** — `codebase_investigator` 子智能体在达到最大轮次限制而未完成分析时，会错误地报告成功状态。这掩盖了任务失败的事实，让用户对实际完成情况产生困惑。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 | **通用智能体无限挂起** — 当 Gemini CLI 交由通用智能体处理时，即使是创建文件夹这样的简单操作也会无限挂起。用户反映需要等待一个多小时才能取消。临时解决方案：指示模型不要使用子智能体。 |
| 3 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | 3 | **get-shit-done 输出钩子导致崩溃** — 当 "get-shit-done" 输出钩子即将完成用户摘要打印时，会反复崩溃，导致 CLI 不稳定。 |
| 4 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | **浏览器子智能体在 Wayland 环境下失败** — 浏览器智能体在 Wayland 环境下无法运行，限制了跨平台兼容性。 |

### 🟡 功能与缺陷问题

| # | Issue | 优先级 | 评论数 | 摘要 |
|---|-------|----------|----------|---------|
| 5 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | **通过模型 bash 亲和性实现零依赖操作系统沙箱** — 提出利用原生 bash 功能实现安全性而无需外部依赖，允许模型串联 POSIX 工具（`grep`、`cat`、`sed`、`awk`）进行更高效的代码库探索。 |
| 6 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | **AST 感知的文件读取、搜索和映射（Epic）** — 追踪关于 AST 感知工具是否能通过精确定位方法边界和导航代码结构来减少工具调用次数和 token 使用量的调研。 |
| 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | **Gemini 使用技能和子智能体的频率不够** — 用户反映自定义技能（如 "gradle"、"git"）被忽略，除非明确指示，限制了自动化潜力。 |
| 8 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 5 | **浏览器智能体忽略 settings.json 覆盖配置** — 浏览器智能体不遵循 `settings.json` 配置（如 `maxTurns`），导致不同智能体之间的行为不一致。 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | 3 | **工具数量超过 128 时返回 400 错误** — 当可用工具超过约 400 个时遇到 400 错误。用户期望更智能的工具作用域控制。 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | P2 | 3 | **智能体应避免破坏性行为** — 模型有时会使用危险的命令（如 `git reset --force`），而存在更安全的替代方案，且缺乏对数据库修改风险的认识。 |

---

## 4. 重要 PR 进展

### 新建 PR（过去 24 小时）

| # | 作者 | 规模 | 领域 | 摘要 |
|---|--------|------|------|---------|
| 1 | [ayam04](https://github.com/ayam04) | S | Agent | **feat(hooks): 在 BeforeTool 和 AfterTool 中包含 tool_call_id** — 在钩子输入中添加 `tool_call_id`，使钩子能够通过 ID 关联 before/after 事件，而非依赖到达顺序。修复 #29975。（[PR #30491](https://github.com/google-gemini/gemini-cli/pull/30491)） |
| 2 | [bitwizard25](https://github.com/bitwizard25) | S | CLI | **fix: 向 getDisplayString 传递 config 以正确显示自定义模型 displayName** — 通过传递 config 对象解决自定义模型定义在页脚中显示不正确的问题。（[PR #30490](https://github.com/google-gemini/gemini-cli/pull/30490)） |
| 3 | [bitwizard25](https://github.com/bitwizard25) | M | Core | **fix: 在 write_file diff 中规范化 CRLF 行尾** — 在计算 diff 前将 `\r\n` 规范化为 `\n`，同时保留原始内容以供行尾检测使用。修复 #30480。（[PR #30489](https://github.com/google-gemini/gemini-cli/pull/30489)） |

### 评审中的 PR

| # | 作者 | 规模 | 优先级 | 领域 | 摘要 |
|---|--------|------|----------|------|---------|
| 4 | [harshpujari](https://github.com/harshpujari) | L | P3 | Core | **feat: 添加可配置的逐工具调用超时（`tools.callTimeout`）** — 引入 `tools.callTimeout` 设置（秒数），用于限制单个工具调用的墙上时间，实现可恢复的 `TOOL_CALL_TIMEOUT` 错误，让模型能够自适应调整。（[PR #30212](https://github.com/google-gemini/gemini-cli/pull/30212)） |
| 5 | [paolo-perrone](https://github.com/paolo-perrone) | L | P2 | Core | **fix: 限制 grep_search 输出大小并提示模型缩小搜索范围** — 通过实施匹配数量上限和指示模型细化查询来解决大规模搜索导致的过度 token 使用问题。（[PR #30109](https://github.com/google-gemini/gemini-cli/pull/30109)） |
| 6 | [sanvisasanapuri](https://github.com/sanvisasanapuri) | L | P1 | Core | **fix: 为网络搜索添加时间限制并在中止时停止重试** — 通过为 `google_web_search` 工具请求添加时间限制来解决挂起问题。修复 #29594。（[PR #30415](https://github.com/google-gemini/gemini-cli/pull/30415)） |
| 7 | [ArnabOPP](https://github.com/ArnabOPP) | M | — | ACP | **fix: 发送审批模式更新时处理拒绝情况** — 防止当 ACP 连接关闭时出现未处理的 Promise 拒绝而导致进程终止。（[PR #30487](https://github.com/google-gemini/gemini-cli/pull/30487)） |
| 8 | [sayaklearner-prog](https://github.com/sayaklearner-prog) | L | — | ACP | **fix: 标准化 token 使用追踪和配额元数据** — 通过在已取消的轮次中保留 `PromptResponse.usage` 来解决 token 追踪不一致问题（#24280, #27985）。（[PR #30353](https://github.com/google-gemini/gemini-cli/pull/30353)） |
| 9 | [bitwizard25](https://github.com/bitwizard25) | M | — | Core | **fix: 从豁免检索字节预算中排除已驱逐的二进制负载** — 通过使用保留字节大小而非计算历史大小，防止单个大图像 `read_file` 消耗过多预算。修复 #30446。（[PR #30473](https://github.com/google-gemini/gemini-cli/pull/30473)） |
| 10 | [phon-t](https://github.com/phon-t) | S | P2 | Extensions | **feat: 添加 gemini-2.5-flash-image 模型配置** — 添加新的模型别名，设置 `responseModalities: ['TEXT', 'IMAGE']` 以支持图像生成。（[PR #30470](https://github.com/google-gemini/gemini-cli/pull/30470)） |

---

## 5. 热门讨论

*源数据中未提供讨论数据。*

---

## 6. 功能需求趋势

通过对 50+ 个 issue 的分析，揭示出以下主导性功能方向：

| 主题 | 频次 | 相关 Issue |
|-------|-----------|------------|
| **智能体可靠性与恢复** | 高 | 子智能体挂起（#21409）、MAX_TURNS 处理（#22323）、崩溃防护（#22186） |
| **AST 感知工具** | 增长中 | Epic 追踪（#22745, #22746, #22747）用于精准代码发现和降低 token 消耗 |
| **子智能体编排** | 高 | 技能/子智能体调用（#21968）、并行协作（#18287）、后台执行（#22741） |
| **工具作用域与限制** | 高 | Grep 输出限制（#30109）、超过 128 工具的限制（#24246）、逐工具超时（#30212） |
| **浏览器智能体改进** | 中等 | settings.json 覆盖（#22267）、Wayland 支持（#21983）、会话弹性（#22232） |
| **安全与沙箱** | 中等 | 通过 bash 亲和性实现 OS 沙箱（#19873）、破坏性操作警告（#22672）、YOLO 模式遵循（#30268） |
| **上下文管理** | 中等 | 节省 token 的文件读取（#19561）、持久化任务追踪（#18836）、文件夹截断标记（#30419） |

---

## 7. 开发者痛点

基于 issue 数量和评论互动，开发者最为困扰的问题包括：

1. **智能体挂起与无限循环** — 通用智能体和浏览器子智能体可能无限挂起且无超时机制，强制手动取消并丢失工作进度。

2. **配置行为不一致** — 某些智能体（尤其是浏览器智能体）忽略 settings.json 覆盖配置，导致不同工具之间行为不可预测。

3. **过度 Token 消耗** — 大文件读取"大水漫灌"式推送上下文，大范围搜索可能返回 150K+ 字符，导致 token 膨胀和性能下降。

4. **Bug 报告中缺少子智能体上下文** — `/bug` 命令输出不包含子智能体状态，使多智能体会话调试困难（#21763）。

5. **破坏性操作无警告** — 智能体有时会在没有适当防护或用户确认的情况下执行危险的 git 操作或数据库修改。

6. **跨平台浏览器问题** — Wayland 用户无法使用浏览器子智能体，限制了 Linux 发行版上的功能。

7. **技能使用需手动干预** — 开发者必须明确指示模型使用可用技能，而非让智能体主动发现并根据上下文应用。

---

*本动态基于 GitHub 数据生成。获取实时更新，请访问 [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the text while keeping the Markdown structure
2. Keep URLs, version tags, issue numbers, etc. as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the output

Let me translate section by section:

---

# GitHub Copilot CLI Community Digest

**Date:** 2026-11-27
**Repository:** github.com/github/copilot-cli

---

## Today's Highlights

The Copilot CLI team shipped three incremental releases (v1.0.117-3/4/5) addressing permission handling, terminal UI, and sandbox TLS proxy support. Community activity remains high with 34 issues updated in the last 24 hours, including a significant feature request for disabling agent checkpoint refs and several critical bugs affecting Windows sandboxing, session management, and MCP server connectivity.

翻译:
# GitHub Copilot CLI 社区周报

**日期：** 2026-11-27
**仓库：** github.com/github/copilot-cli

---

## 今日要闻

Copilot CLI 团队发布了三个增量版本（v1.0.117-3/4/5），修复了权限处理、终端 UI 和沙箱 TLS 代理支持等问题。过去 24 小时内社区活跃度保持高位，共有 34 个 issue 获得更新，包括一项关于禁用 agent checkpoint 引用的重要功能请求，以及多个影响 Windows 沙箱、会话管理和 MCP 服务器连接的关键 bug。

---

## Releases

### v1.0.117-5 (2026-11-27)
**Added**
- New `sandbox.userPolicy.network.extraCaCertificates` setting (user or managed) enables trust of custom CA certificates for sandboxed commands through TLS-intercepting proxies, improving enterprise proxy compatibility.


**新增**
- 新增 `sandbox.userPolicy.network.extraCaCertificates` 配置项（user 或 managed），支持通过 TLS 拦截代理信任自定义 CA 证书，提升企业代理兼容性。

### v1.0.117-4 (2026-11-27)
**Fixed**
- Resolved Page Down stalling issue at pinned prompts in 10-row terminals when tabs are enabled.

### v1.0.117-4 (2026-11-27)
**修复**
- 修复了在启用标签页时，10 行终端中固定提示处的 Page Down 键卡顿问题。

### v1.0.117-3 (2026-11-26)
**Improved**
- Assisted Permissions now avoids unnecessary confirmation prompts when Copilot stops a process it started in the same session by process ID.

**改进**
- Assisted Permissions 现在在 Copilot 停止同一会话中按进程 ID 启动的进程时，不再显示不必要的确认提示。

**Fixed**
- Approving an MCP server's tools for the session or location no longer also approves Copilot's built-in requests (e.g., shell commands).

**修复**
- 批准 MCP 服务器的工具权限（会话级或位置级）不再同时批准 Copilot 的内置请求（如 shell 命令）。

---

## Hot Issues

### 1. Feature Request: Disable Agent Checkpoint Refs [#5323](https://github.com/github/copilot-cli/issues/5323)
**Status:** OPEN | 8 comments | 👍 7

Every agent turn creates commits under `refs/agents/<session-id>/checkpoints/turn/N` using the user's git identity, cluttering ref listings and potentially exposing session metadata. Users request a configuration setting to disable checkpoint refs entirely. This impacts repositories with strict git hygiene requirements.

---

### 1. 功能请求：禁用 Agent Checkpoint 引用 [#5323](https://github.com/github/copilot-cli/issues/5323)
**状态：** 开启 | 8 条评论 | 👍 7

每个 agent 轮次都会使用用户的 git 身份在 `refs/agents/<session-id>/checkpoints/turn/N` 下创建提交，这会弄乱引用列表并可能暴露会话元数据。用户请求添加配置选项以完全禁用 checkpoint 引用。这影响了有严格 git 规范要求的仓库。

---

### 2. Remote Environment Hosting Blocked on Copilot Free [#5283](https://github.com/github/copilot-cli/issues/5283)
**Status:** OPEN | 4 comments | 👍 9

Personal GitHub accounts with Copilot Free cannot enable Copilot CLI remote access despite local settings showing enabled. The `host.start` request fails for environment hosting, affecting developers who need multi-machine workflows without organizational accounts.

---

### 2. Copilot Free 用户无法使用远程环境托管功能 [#5283](https://github.com/github/copilot-cli/issues/5283)
**状态：** 开启 | 4 条评论 | 👍 9

个人 GitHub 账户即使在本地设置中启用了 Copilot CLI 远程访问功能，也无法真正启用。`host.start` 请求在环境托管场景下失败，影响了需要在多台机器间协作但没有组织账户的开发者。

---

### 3. Tool Approvals Silently Lost in Parallel Sessions [#3563](https://github.com/github/copilot-cli/issues/3563)
**Status:** CLOSED | 4 comments

When multiple `copilot` CLI sessions run simultaneously and each persists tool approvals ("Always allow"), one session's approval can silently overwrite the other's in `~/.copilot/permissions-config.json`. This race condition causes unpredictable permission loss.

---

### 3. 并行会话中的工具授权静默丢失 [#3563](https://github.com/github/copilot-cli/issues/3563)
**状态：** 已关闭 | 4 条评论

当多个 `copilot` CLI 会话同时运行并各自持久化工具授权（"始终允许"）时，一个会话的授权可能会静默覆盖 `~/.copilot/permissions-config.json` 中另一个会话的授权。这种竞争条件导致不可预测的权限丢失。

---

### 4. Stdio MCP Server Connection Timeout Bug [#5464](https://github.com/github/copilot-cli/issues/5464)
**Status:** CLOSED | 3 comments

When a stdio MCP server takes longer than ~10s to start, Copilot CLI sends a legacy `initialize` on the same connection after giving up on `server/discover`, causing the MCP Python SDK to reject it with error -32022. This breaks reliable MCP server initialization.

---

### 4. Stdio MCP 服务器连接超时 Bug [#5464](https://github.com/github/copilot-cli/issues/5464)
**状态：** 已关闭 | 3 条评论

当 stdio MCP 服务器启动时间超过约 10 秒时，Copilot CLI 在放弃 `server/discover` 后会通过同一连接发送旧版 `initialize` 请求，导致 MCP Python SDK 以错误 -32022 拒绝连接。这破坏了 MCP 服务器初始化的可靠性。

---

### 5. Expose Assisted Approval in ACP Mode [#5047](https://github.com/github/copilot-cli/issues/5047)
**Status:** CLOSED | 2 comments

ACP clients (like T3 Code) request access to Copilot's built-in assisted approval safety judge to automatically approve low-risk actions while requesting human approval for others. This would standardize permission handling across third-party integrations.

---

### 5. 在 ACP 模式下暴露 Assisted Approval 功能 [#5047](https://github.com/github/copilot-cli/issues/5047)
**状态：** 已关闭 | 2 条评论

ACP 客户端（如 T3 Code）请求访问 Copilot 内置的 assisted approval 安全判断器，以自动批准低风险操作，同时对其他操作请求人工批准。这将标准化第三方集成的权限处理流程。

---

### 6. Windows Sandbox Blocks TCP Despite Allowlist [#5580](https://github.com/github/copilot-cli/issues/5583)
**Status:** OPEN | 1 comment

Copilot CLI 1.0.109 on Windows blocks direct TCP connections to internal servers (e.g., Nexus) even when hostname and IP are in the allowlist, failing with `SocketErrorCode: AccessDenied` (Windows error 10013). This prevents access to common enterprise infrastructure.

---

### 6. Windows 沙箱在允许列表配置下仍阻止 TCP 连接 [#5580](https://github.com/github/copilot-cli/issues/5583)
**状态：** 开启 | 1 条评论

Windows 上的 Copilot CLI 1.0.109 会阻止到内部服务器（如 Nexus）的直接 TCP 连接，即使主机名和 IP 已添加到允许列表，仍会以 `SocketErrorCode: AccessDenied`（Windows 错误 10013）失败。这阻止了对常见企业基础设施的访问。

---

### 7. Remote CLI Session Switch Hangs with Memory Leak [#5577](https://github.com/github/copilot-cli/issues/5577)
**Status:** OPEN | 1 comment

Switching from local CLI to a Copilot CLI session on another machine fails to yield a responsive session. Users observe continued memory growth until the local machine becomes unusable, suggesting resource management issues in remote session handoff.

---

### 7. 远程 CLI 会话切换卡死并伴随内存泄漏 [#5577](https://github.com/github/copilot-cli/issues/5577)
**状态：** 开启 | 1 条评论

从本地 CLI 切换到另一台机器上的 Copilot CLI 会话时，无法获得响应式会话。用户观察到内存持续增长直到本地机器无法使用，指向远程会话交接时的资源管理问题。

---

### 8. GHE.com-Only Login Updater Failure [#5571](https://github.com/github/copilot-cli/issues/5571)
**Status:** OPEN | 1 comment

On Windows with GitHub Enterprise Cloud on `*.ghe.com`, the auto-updater fails with "GitHub credential owner did not provide a token." Affects users on Copilot CLI 1.0.115-4/7/8, requiring manual workaround.

---

### 8. GHE.com 专属登录更新器故障 [#5571](https://github.com/github/copilot-cli/issues/5571)
**状态：** 开启 | 1 条评论

在 Windows 上使用 `*.ghe.com` 域名的 GitHub Enterprise Cloud 时，自动更新器失败并报错"GitHub 凭据所有者未提供令牌"。影响 Copilot CLI 1.0.115-4/7/8 版本用户，需要手动处理。

---

### 9. Git Submodule Update Blocked in Sandbox [#5593](https://github.com/github/copilot-cli/issues/5593)
**Status:** OPEN | 0 comments

With local sandboxing enabled, `git submodule update` fails even when submodules are already at their recorded commit (no-op). This breaks CI/CD workflows and build scripts that call submodule commands, a regression from v1.0.99-2.

---

### 9. 沙箱阻止 Git Submodule 更新 [#5593](https://github.com/github/copilot-cli/issues/5593)
**状态：** 开启 | 0 条评论

启用本地沙箱后，即使 submodules 已经处于记录提交的版本（无操作），`git submodule update` 仍会失败。这破坏了调用 submodule 命令的 CI/CD 工作流和构建脚本，是 v1.0.99-2 引入的回归问题。

---

### 10. Windows Credential Manager Flooding [#5591](https://github.com/github/copilot-cli/issues/5591)
**Status:** OPEN | 0 comments

Copilot CLI accumulates hundreds of `copilot-mcp-oauth` and `copilot-keychain-chunk` entries in Windows Credential Manager without cleanup, eventually preventing all applications from writing credentials (error 8). This blocks tools like `az devops login` and `cmdkey`.

---

### 10. Windows 凭据管理器条目泛滥 [#5591](https://github.com/github/copilot-cli/issues/5591)
**状态：** 开启 | 0 条评论

Copilot CLI 在 Windows 凭据管理器中累积了数百个 `copilot-mcp-oauth` 和 `copilot-keychain-chunk` 条目且不进行清理，最终导致所有应用无法写入凭据（错误 8）。这阻止了 `az devops login` 和 `cmdkey` 等工具的正常使用。

---

## Key PR Progress

**No Pull Requests merged or opened in the last 24 hours.**

The team focused on incremental patch releases rather than larger feature PRs during this period.

---

## 重要 PR 进展

**过去 24 小时内无 PR 合并或创建。**

团队在此期间专注于增量补丁版本，而非大型功能 PR。

---

## Feature Request Trends

Analysis of open issues reveals several dominant feature directions:

1. **Permission & Security Granularity**
   - Disable agent checkpoint refs ([#5323](https://github.com/github/copilot-cli/issues/5323))
   - Expose assisted approval to ACP ([#5047](https://github.com/github/copilot-cli/issues/5047))
   - Session-scoped prompt history ([#5576](https://github.com/github/copilot-cli/issues/5576))

2. **Enterprise & Proxy Compatibility**
   - Custom CA certificate trust ([shipped in v1.0.117-5](https://github.com/github/copilot-cli/releases))
   - UNC path handling on Windows ([#5586](https://github.com/github/copilot-cli/issues/5586))
   - BYOK provider OTel file exports ([#5583](https://github.com/github/copilot-cli/issues/5583))

3. **Model Routing & Fusion**
   - Local OpenAI-compatible server routing ([#5581](https://github.com/github/copilot-cli/issues/5581))
   - Org-level agent model selection ([#5585](https://github.com/github/copilot-cli/issues/5585))
   - ACP quota reading ([#5587](https://github.com/github/copilot-cli/issues/5587))

4. **Plugin & MCP Ecosystem**
   - MCP server case-insensitive matching ([#5050](https://github.com/github/copilot-cli/issues/5050))
   - Plugin marketplace error handling ([#5582](https://github.com/github/copilot-cli/issues/5582))
   - Skill slash command argument parsing ([#5578](https://github.com/github/copilot-cli/issues/5578))

5. **Observability & Telemetry**
   - Instance ID in OTel metrics ([#5005](https://github.com/github/copilot-cli/issues/5005))
   - Notification disposition tracking ([#5596](https://github.com/github/copilot-cli/issues/5596))
   - Exit telemetry disposition ([#5597](https://github.com/github/copilot-cli/issues/5597))

---

## 功能需求趋势

对 open 状态 issue 的分析揭示了几个主要的功能方向：

1. **权限与安全细粒度控制**
   - 禁用 agent checkpoint refs（[#5323](https://github.com/github/copilot-cli/issues/5323)）
   - 向 ACP 暴露 assisted approval（[#5047](https://github.com/github/copilot-cli/issues/5047)）
   - 会话级提示词历史（[#5576](https://github.com/github/copilot-cli/issues/5576)）

2. **企业与代理兼容性**
   - 自定义 CA 证书信任（[已在 v1.0.117-5 中发布](https://github.com/github/copilot-cli/releases)）
   - Windows 上的 UNC 路径处理（[#5586](https://github.com/github/copilot-cli/issues/5586)）
   - BYOK 供应商 OTel 文件导出（[#5583](https://github.com/github/copilot-cli/issues/5583)）

3. **模型路由与融合**
   - 本地 OpenAI 兼容服务器路由（[#5581](https://github.com/github/copilot-cli/issues/5581)）
   - 组织级 agent 模型选择（[#5585](https://github.com/github/copilot-cli/issues/5585)）
   - ACP 配额读取（[#5587](https://github.com/github/copilot-cli/issues/5587)）

4. **插件与 MCP 生态系统**
   - MCP 服务器大小写不敏感匹配（[#5050](https://github.com/github/copilot-cli/issues/5050)）
   - 插件市场错误处理（[#5582](https://github.com/github/copilot-cli/issues/5582)）
   - Skill 斜杠命令参数解析（[#5578](https://github.com/github/copilot-cli/issues/5578)）

5. **可观测性与遥测**
   - OTel 指标中的实例 ID（[#5005](https://github.com/github/copilot-cli/issues/5005)）
   - 通知处置跟踪（[#5596](https://github.com/github/copilot-cli/issues/5596)）
   - 退出遥测处置（[#5597](https://github.com/github/copilot-cli/issues/5597)）

---

## Developer Pain Points

The following issues represent recurring developer frustrations based on frequency and engagement:

### 1. Sandbox Restrictions Blocking Legitimate Workflows
Multiple reports of sandbox policies blocking common operations:
- `git submodule update` ([#5593](https://github.com/github/copilot-cli/issues/5593))
- TCP connections with proper allowlists ([#5580](https://github.com/github/copilot-cli/issues/5580))
- Cypress component tests on macOS ([#5588](https://github.com/github/copilot-cli/issues/5588))

### 2. MCP Server Reliability
- Connection timeouts and fallback failures ([#5464](https://github.com/github/copilot-cli/issues/5464))
- Case-sensitive server name matching ([#5050](https://github.com/github/copilot-cli/issues/5050))

### 3. Configuration Hot-Reload Missing
Settings and hooks changes require full CLI restart with no notification:
- Hook scripts never fire for running sessions ([#5595](https://github.com/github/copilot-cli/issues/5595))
- AHP connection refresh retries indefinitely ([#5594](https://github.com/github/copilot-cli/issues/5594))

### 4. Permission State Management
- Parallel session approval conflicts ([#3563](https://github.com/github/copilot-cli/issues/3563))
- Permission prompts truncating URLs with shell variables ([#5257](https://github.com/github/copilot-cli/issues/5257))
- Windows Credential Manager exhaustion ([#5591](https://github.com/github/copilot-cli/issues/5591))

### 5. Remote Session Stability
- Session switch hangs with memory leaks ([#5577](https://github.com/github/copilot-cli/issues/5577))
- Large session handling crashes ([#5592](https://github.com/github/copilot-cli/issues/5592))
- Gemini 4 Neon tool call size limits ([#5590](https://github.com/github/copilot-cli/issues/5590))

### 6. Enterprise Authentication Gaps
- GHE.com-only updater failures ([#5571](https://github.com/github/copilot-cli/issues/5571))
- BYOK without GitHub sign-in OTel issues ([#5583](https://github.com/github/copilot-cli/issues/5583))
- Remote hosting blocked on personal accounts ([#5283](https://github.com/github/copilot-cli/issues/5283))

---

## 开发者痛点

以下 issue 基于频率和互动量代表了反复出现的开发者困扰：

### 1. 沙箱限制阻止合法工作流
多个报告指出沙箱策略阻止了常见操作：
- `git submodule update`（[#5593](https://github.com/github/copilot-cli/issues/5593)）
- 配置了允许列表的 TCP 连接（[#5580](https://github.com/github/copilot-cli/issues/5580)）
- macOS 上的 Cypress 组件测试（[#5588](https://github.com/github/copilot-cli/issues/5588)）

### 2. MCP 服务器可靠性问题
- 连接超时和回退失败（[#5464](https://github.com/github/copilot-cli/issues/5464)）
- 大小写敏感的服务器名称匹配（[#5050](https://github.com/github/copilot-cli/issues/5050)）

### 3. 缺少配置热重载
设置和钩子的变更需要完全重启 CLI 且无任何通知：
- 钩子脚本对运行中的会话永不触发（[#5595](https://github.com/github/copilot-cli/issues/5595)）
- AHP 连接刷新无限重试（[#5594](https://github.com/github/copilot-cli/issues/5594)）

### 4. 权限状态管理问题
- 并行会话授权冲突（[#3563](https://github.com/github/copilot-cli/issues/3563)）
- 权限提示截断包含 shell 变量的 URL（[#5257](https://github.com/github/copilot-cli/issues/5257)）
- Windows 凭据管理器耗尽（[#5591](https://github.com/github/copilot-cli/issues/5591)）

### 5. 远程会话稳定性问题
- 会话切换卡死并伴随内存泄漏（[#5577](https://github.com/github/copilot-cli/issues/5577)）
- 大型会话处理崩溃（[#5592](https://github.com/github/copilot-cli/issues/5592)）
- Gemini 4 Neon 工具调用大小限制（[#5590](https://github.com/github/copilot-cli/issues/5590)）

### 6. 企业认证缺陷
- GHE.com 专属更新器故障（[#5571](https://github.com/github/copilot-cli/issues/5571)）
- 无 GitHub 登录的 BYOK OTel 问题（[#5583](https://github.com/github/copilot-cli/issues/5583)）
- 个人账户无法使用远程托管（[#5283](https://github.com/github/copilot-cli/issues/5283)）

---

*Digest generated from GitHub Copilot CLI community data. For more details, visit [github.com/github/copilot-cli](https://github.com/github/copilot-cli).*

---

*本摘要由 GitHub Copilot CLI 社区数据生成。更多详情，请访问 [github.com/github/copilot-cli](https://github.com/github/copilot-cli)。*</think>



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate the content naturally into Chinese
2. Preserve all markdown structure (headings, tables, lists, etc.)
3. Keep URLs, numbers, issue/PR references as-is
4. Keep technical terms, project names, usernames in original form
5. Use natural technical Chinese register

Let me go through section by section and translate it.

Title: "OpenCode Community Digest — 2026-11-27" → "OpenCode 社区速报 — 2026-11-27"

Section 1: Today's Highlights
- "The community is grappling with a surge in **free tier usage issues**" → 社区正面临**免费版使用问题**激增的困扰
- "a mega-thread (#59387) has accumulated 413 comments" → 专题帖 (#59387) 已累计 413 条评论
- "signaling widespread user frustration" → 反映出用户广泛的沮丧情绪
- "On the positive side" → 积极的一面是
- "significant progress is underway" → 取得了显著进展
- "target connection resilience, TLS trust, and tool persistence" → 聚焦连接韧性、TLS 信任和工具持久化
- "A notable CLI bug (#65932)" → 一个值得关注的 CLI 缺陷 (#65932)
- "affecting ~10% of standalone sessions" → 影响约 10% 的独立会话
- "is also drawing attention" → 也引发了关注
- "as it silently breaks MCP tool availability" → 因为它静默破坏了 MCP 工具的可用性

Section 2: Releases
- "No new releases in the last 24 hours." → 过去 24 小时无新版本发布。

Section 3: Hot Issues
Table headers and content...
- "Why It Matters" → "重要性"


- "Highest-traffic issue." → "热度最高的问题。"
- "Free users report..." → "免费版用户反映..."
- "suggesting a backend quota or clock issue" → "指向后端配额或时间计算问题"
- "Community is pooling repro steps." → "社区正在汇总复现步骤。"

I'll translate the table with precision, maintaining the original structure and technical details. The translation focuses on accurately conveying the technical context while using natural Chinese technical terminology. Key terms like "免费版使用问题" and "后端配额" capture the nuanced technical discussion.

The next thinking reveals a potential feature request for subagent execution. I'll translate the key points carefully, emphasizing the technical context of re-enabling foreground functionality in version 2.

The core challenge involves session resilience against network interruptions. The proposed solution involves expanding retry mechanisms beyond current `ECONNRESET` handling to support multiple transient failure scenarios. This would prevent premature session termination during temporary network instabilities.

The translation captures the technical nuance of network error handling, highlighting the need for more comprehensive retry logic to improve user experience and system reliability.

A critical issue emerges in CLI standalone mode, where MCP server registration fails silently in roughly 10% of sessions. This prevents MCP tools from functioning throughout the entire session without generating any error notifications, significantly impacting continuous integration and scripted workflow reliability.

Desktop interface users experience scroll instability, with rapid upward scrolling triggering unexpected downward snapping. This disrupts smooth navigation during extended conversational interactions, particularly in lengthy desktop environments.

Emerging macOS network restrictions pose additional challenges. Version 15+ systems now block OpenCode's access to local area network MCP servers, creating potential connectivity limitations. Resolving this requires package signing strategies to re-establish network communication permissions.

Context management remains problematic. Automatic compression triggers unpredictably during large file processing, even when within established operational limits. User authentication workflows also encounter barriers, with multi-account ChatGPT configurations experiencing workspace scope restrictions.

Plugin ecosystem enhancements are under development. Proposed improvements include enabling cross-plugin tool interactions and resource access through existing MCP connection frameworks. User interface refinements continue, with alphabetical skill organization gaining community support.

Emerging development priorities focus on connection resilience and multi-account scenarios. Key initiatives target MCP server reliability, including reconnection mechanisms, TLS configuration, and private network accessibility. Per-account ChatGPT client isolation represents a critical authentication workflow improvement.

Proposed system enhancements address core reliability challenges. Plugin hot reload mechanisms now maintain previous configurations during failures. Permission check scoping prevents unintended interactive prompts during automated operations, significantly improving unattended execution reliability.

Critical pain points include free tier service disruptions affecting core user workflows and intermittent CLI session failures that silently compromise automation pipeline integrity. Permission prompt disruptions in unattended runs and macOS network access restrictions further complicate system usability.

Performance bottlenecks emerge in terminal interface cold starts, multi-account support limitations, silent retry behaviors, and local model token output management. These challenges underscore the need for robust error handling, transparent retry mechanisms, and flexible configuration options across diverse deployment environments.

I'll carefully translate the technical details, maintaining precise terminology while ensuring linguistic authenticity in the Chinese rendering. The goal is capturing nuanced technical language without sacrificing readability or accuracy.

The translation requires meticulous attention to technical concepts, preserving original meaning while adapting to Chinese technical communication standards. Precise word choice becomes crucial in representing complex technical descriptions accurately.

Free tier usage challenges emerge prominently, with a significant community discussion thread highlighting widespread user frustration around backend quota management and potential time calculation discrepancies. The community is systematically documenting reproduction steps to diagnose underlying issues.

A major user experience request centers on enhancing subagent execution capabilities, with users advocating for restored foreground interaction feedback mechanisms beyond current background tab limitations.

Session reliability improvements target network resilience, proposing a more comprehensive error handling strategy that extends beyond existing connection reset protocols. The proposed approach would gracefully manage diverse transient network disruptions without terminating sessions prematurely.

A persistent CLI challenge involves intermittent server registration failures during standalone execution, which silently compromises tool availability across approximately 10% of sessions. This issue particularly impacts continuous integration and scripted workflow environments, creating subtle but significant operational disruptions.

Desktop interface navigation experiences scroll instability, with rapid upward movement triggering unexpected downward snapping that fragments chat history browsing continuity.

Emerging platform constraints on macOS 15+ now restrict OpenCode's local network server connectivity, necessitating potential .app bundle signing strategies to restore cross-network communication capabilities.

Context management mechanisms trigger unexpected compression during large file processing, even when within predefined operational thresholds.

Multi-account authentication workflows encounter workspace scoping restrictions that limit flexible account integration, with ongoing development (#64945) targeting client registration per account resolution.

Plugin ecosystem expansion proposals aim to enable cross-plugin tool interactions and resource access, leveraging existing model context protocol connections to minimize redundant infrastructure spawning.

Interface refinement efforts focus on alphabetical skill organization across multiple interaction surfaces, addressing user experience friction in expansive plugin-provided skill environments.

Key development priorities center on robust multi-protocol connectivity, emphasizing connection resilience, transport layer security trust establishment, and adaptive private network accessibility configurations.

Authentication workflow enhancements target granular account isolation mechanisms, implementing client-level workspace bindings to support flexible multi-account scenarios while maintaining clean operational boundaries.

Plugin ecosystem expansion continues through targeted fixes enabling hot reload resilience, granular permission scoping, and tool persistence across transient network interruptions. Proposed enhancements include certificate trust initialization and per-server cryptographic configuration capabilities.

Significance tracking indicates emerging interest in network reliability, permission management, and flexible deployment configurations across collaborative development environments.

Community feedback reveals critical infrastructure pain points: free tier service reliability, developer experience friction in CLI interactions, and permission handling complexities that disrupt automated workflow continuity. Specific attention focuses on silent failures, network access restrictions, and startup performance bottlenecks.

Proposed improvements target multi-account ChatGPT integration, addressing authentication workflow limitations and connection stability challenges across different execution contexts.

Technical considerations include comprehensive error handling for network interruptions, robust retry mechanisms, and granular token management strategies to optimize system responsiveness and resource utilization.
</think>


# OpenCode 社区速报 — 2026-11-27

## 1. 今日要闻

社区正面临**免费版使用问题**激增的困扰——专题帖 (#59387) 已累计 413 条评论，显示出免费用户广泛的焦虑情绪。积极的一面是，**MCP 可靠性**方面正在取得显著进展：多个 PR 聚焦连接韧性、TLS 信任和工具持久化。一个值得关注的 CLI 缺陷 (#65932) 影响约 10% 的独立会话，也引发了热议，因为它静默破坏了 MCP 工具的可用性。

---

## 2. 版本发布

过去 24 小时无新版本发布。

---

## 3. 热门 Issue

| # | 标题 | 作者 | 评论数 | 重要性 |
|---|------|------|--------|--------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | Free tier issues: read this first | neriousy | 413 | **热度最高的问题。**免费版用户反馈"用量超限"错误始终无法重置，指向后端配额或时间计算问题。社区正在汇总复现步骤。 |
| [#64073](https://github.com/anomalyco/opencode/issues/64073) | [FEATURE] Restore Foreground Subagent Execution | wangzheruoyun | 38 | v2 的核心 UX 请求：恢复在前景运行 subagent 的能力，支持直接反馈而非仅后台 tab。 |
| [#30611](https://github.com/anomalyco/opencode/issues/30611) | Sessions fail on transient network errors instead of retrying | literally-dan | 12 | 重试逻辑目前仅处理 `ECONNRESET`；其他瞬时失败（超时、`ECONNREFUSED`）会直接终止会话。已关闭并提出修复方案。 |
| [#65932](https://github.com/anomalyco/opencode/issues/65932) | CLI `opencode run --standalone` intermittently registers no MCP servers (~10% of sessions) | willturner-maker | 11 | 静默失败：整个会话期间 MCP 工具不可用，但无任何错误提示。影响 CI 和脚本化使用场景。 |
| [#56285](https://github.com/anomalyco/opencode/issues/56285) | Desktop: fast scroll up snaps back down, history loads one chunk at a time | Railander | 12 | 桌面端长会话的可用性缺陷：快速向上滚动后会被弹回，聊天历史只能逐块加载。 |
| [#58080](https://github.com/anomalyco/opencode/issues/58080) | macOS Local Network Privacy blocks background service from LAN hosts | belgaied2 | 9 | macOS 15+ 新增隐私限制，OpenCode 无法访问局域网 MCP 服务器（`192.168.x.x`、`10.x.x.x`）。需通过签名 .app 包修复。 |
| [#56862](https://github.com/anomalyco/opencode/issues/56862) | Subagents kept failing with context compaction despite known limit | PiRomant | 8 | 即使在已知限制内读取大文件，上下文压缩仍会意外触发。 |
| [#56298](https://github.com/anomalyco/opencode/issues/56298) | Adding a second ChatGPT account fails with workspace scope denied | KomeijiReimu | 6 | 多账户用户被锁定；PR #64945 正在 review 中，修复账户绑定的客户端注册问题。 |
| [#53514](https://github.com/anomalyco/opencode/issues/53514) | [FEATURE] Let plugins call tools and read resources on engine's MCP connections | Skeptomenos | 5 | 扩展性请求：插件希望能复用已有的 MCP 连接，而非自行启动连接。 |
| [#66596](https://github.com/anomalyco/opencode/issues/66596) | [FEATURE] Sort skills alphabetically in `/skills`, autocomplete, and API | mathworld | 4 | 插件提供的 skill 越来越多，未排序的列表难以浏览。简单但高影响的 QOL 改进。 |

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 概要 |
|---|------|------|------|------|
| [#66648](https://github.com/anomalyco/opencode/pull/66648) | fix(ai): keep the prompt cache when switching effort on Copilot GPT | rekram1-node | OPEN | 防止 Copilot GPT 模型在会话中途切换推理力度时导致缓存失效。 |
| [#66717](https://github.com/anomalyco/opencode/pull/66717) | fix(core): read effort and system update flags from models.dev | rekram1-node | OPEN | 配套修复：`models.dev` 现记录各 API 是否支持力度调整。 |
| [#66369](https://github.com/anomalyco/opencode/pull/66369) | fix(plugin): keep previous plugin set when hot reload fails | four1er | OPEN | 热重载失败不再清除工作中的插件集，providers 和 models 保持可用。 |
| [#66715](https://github.com/anomalyco/opencode/pull/66715) | fix(plugin): scope Promise tool permission checks to each call | akasakariko | OPEN | 修复 #66698：Promise 风格工具不再在无人值守运行时触发交互式提示。 |
| [#62756](https://github.com/anomalyco/opencode/pull/62756) | feat(core): keep MCP tools through dropped connections and reconnect on demand | rekram1-node | OPEN | MCP 工具在连接断开后保留；模型仅在每个服务器首次连接时感知"新"，而非每次重连。 |
| [#60041](https://github.com/anomalyco/opencode/pull/60041) | feat(mcp): trust private-network server certificates on first use | karup | OPEN | 首次使用时信任私有 MCP 服务器的自签名证书（基于 #60039 的堆叠）。 |
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | feat(mcp): support per-server TLS trust for remote MCP servers | karup | OPEN | 为每个 MCP 服务器添加 `tls` 配置块，支持自签名/私有 CA 证书。 |
| [#64945](https://github.com/anomalyco/opencode/pull/64945) | fix(core): register a new ChatGPT client when adding an account | rekram1-node | OPEN | 关闭 #56298：每个 ChatGPT 账户现使用独立的客户端/工作区绑定。 |
| [#66678](https://github.com/anomalyco/opencode/pull/66678) | fix(core): back off repeated SharedCache failures and honor Retry-After | hearnadam | OPEN | 通过遵守 `Retry-After` 响应头，减少 PlanetScale 停滞期间的负载。 |
| [#65700](https://github.com/anomalyco/opencode/pull/65700) | fix(ai): zstd-compress ChatGPT sign-in requests again | rekram1-node | OPEN | 恢复 ChatGPT OAuth 请求的 zstd 压缩，将逻辑移入 ai 包。 |

---

## 5. 热门讨论

本期无讨论数据。

---

## 6. 功能请求趋势

通过对近期 issue 和 PR 的分析，揭示以下高频主题：

| 主题 | 代表性 Issue | 趋势 |
|------|-------------|------|
| **MCP 可靠性与连接** | #62756, #60041, #60039, #58080 | 健壮的 MCP 服务器处理需求旺盛——重连、TLS 信任和私有网络访问。 |
| **多账户与认证** | #56298, #64945 | 用户期望无缝的多 ChatGPT 账户支持；当前行为在第二个账户时失效。 |
| **Agent 执行控制** | #64073, #58858 | 对前景 subagent 执行和 agent 工作期间保持计算机活跃的需求。 |
| **插件扩展性** | #53514, #66702, #66689 | 社区希望插件能调用 MCP 工具并获得服务端启用/禁用控制。 |
| **桌面端 UX** | #56285, #66601, #59597 | TUI 冷启动慢（14.6 秒）、滚动缺陷和按提交审阅是摩擦点。 |
| **CLI / 脚本化可靠性** | #65932, #66699 | CI 环境中静默失败（工具缺失、空 stderr）阻碍自动化。 |
| **Skill 组织** | #66596, #66706 | MCP 服务器指令在 skill 列表中的字母排序和正确处理。 |

---

## 7. 开发者痛点

1. **免费版服务不可靠 (#59387)** — 用户遇到"用量超限"但无法重置，阻断核心工作流。社区需要明确的解决路径。

2. **MCP 服务器发现失败 (#65932)** — 约 10% 的 CLI 会话启动时无 MCP 工具，静默破坏自动化管道。

3. **无人值守运行的权限提示 (#66698)** — Promise 风格插件工具在自动化运行中触发交互式提示，导致超时和失败。

4. **macOS 私有网络访问限制 (#58080)** — macOS 15+ 的新沙盒限制使 OpenCode 无法访问局域网 MCP 服务器；只有签名 .app 包才能解决。

5. **TUI 冷启动延迟 (#59597)** — 大仓库首次渲染耗时 14.6 秒，开发者无法快速交互。

6. **多账户 ChatGPT (#56298)** — 添加第二个 ChatGPT 账户失败，限制了多工作区用户的使用。

7. **静默重试循环 (#62319)** — 上游 provider 停滞时导致无限挂起，无用户可见错误或日志。

8. **Ollama 输出上限被忽略 (#66249)** — `max_completion_tokens` 已发送但 Ollama 忽略它，导致本地环境中输出无限。

---

*速报结束。数据来源：github.com/anomalyco/opencode，数据截至 2026-11-27。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical digest about the Pi community into Simplified Chinese. Let me go through this carefully and translate it while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, links, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

---

# Pi 社区速报 — 2026-11-27

## 今日要点

Pi 社区今日活动重点集中在稳定性和可扩展性方面。一个影响扩展注册的 providers 忽略默认模型设置的严重 bug 仍处于开放状态并有活跃讨论（12 条评论）。在 PR 方面，多个关键修复已经合并，包括改进的 Copilot reasoning 复现、Kitty 图像处理改进和新的遥测文档。团队还合并了 Pi Durable 任务调度方面的重要主机集成增强功能。

## 热门议题

### 1. 扩展注册的 Providers 忽略默认设置 [#8810](https://github.com/earendil-works/pi/issues/8810) *(开放, 12 评论)*
**重要性：** 当 provider 由扩展注册时，新会话会间歇性地忽略 `defaultProvider`/`defaultModel`，导致静默回退到其他 provider 的默认值。这破坏了任何基于扩展 provider 配置的预期启动行为。
**社区反应：** 5 👍 点赞；12 条评论的持续讨论表明这是一个可复现且令人沮丧的问题。
 
### 2. 普通模式下 Kitty 图片丢失 / 回滚被清除 [#12548](https://github.com/earendil-works/pi/issues/12548) *(已关闭)*
**重要性：** 顺序打印的图片在后续输出出现时会消失，Konsole 的回滚会因回退重绘行为而被清除。
**解决方案：** 通过 PR #12596（图片 ID 范围）和 #12597（在普通模式下追加而不完全重绘）修复。

### 3. AgentSession Dispose() 保留闭包，阻止 GC [#12546](https://github.com/earendil-works/pi/issues/12546) *(已关闭)*
**重要性：** 长时间运行的 SDK 进程会出现内存泄漏，因为已释放的 `AgentSession` 和 `SessionManager` 实例在 OOM 之前一直保留在 V8 堆中。
**解决方案：** 关闭为无操作；似乎是已知限制，正在单独追踪。

### 4. Windows: Pi 崩溃后键盘报告状态保持开启 [#12564](https://github.com/earendil-works/pi/issues/12564) *(已关闭)*
**重要性：** Windows 上崩溃的 Pi 会让终端处于崩溃状态，PowerShell 变得无法使用。
**解决方案：** 通过 PR #12601 修复并改进文档。

### 5. /reload 重新排列系统提示词工具列表 [#12547](https://github.com/earendil-works/pi/issues/12547) *(开放)*
**重要性：** 重新加载未更改的代码会改变系统提示词工具列表的顺序，导致 Anthropic 提示词缓存未命中并丢弃 thinking blocks。
**状态：** P0 优先级，等待分类。

### 6. 项目本地技能排除重复条目 [#12550](https://github.com/earendil-works/pi/issues/12550) *(已关闭)*
**重要性：** 为家庭技能选择"跳过"时，会在 `.pi/settings.json` 中同时保存路径和减号条目，创建冗余配置。
**状态：** 关闭为无操作。

### 7. 重试分类器忽略 SSE 流错误 [#12605](https://github.com/earendil-works/pi/issues/12605) *(已关闭)*
**重要性：** 启用自动重试时，上游 SSE 流错误会停止会话而不是触发重试，降低可靠性。
**状态：** 审查中修复。

### 8. Bash 工具没有默认超时 [#12561](https://github.com/earendil-works/pi/issues/12561) *(已关闭)*
**重要性：** 卡住的命令可以无限期运行（一个报告：2小时6分钟），阻塞会话。
**状态：** 关闭为无操作；可能在即将进行的工作中解决。

### 9. codemode 解析错误缺少源码摘录 [#12510](https://github.com/earendil-works/pi/issues/12510) *(开放)*
**重要性：** 语法错误仅报告文件/行/列，没有源码上下文，迫使模型猜测问题所在。
**影响：** 使调试基于 shell 的 codemode 脚本变得不必要地困难。

### 10. 发布 mcp.json 的 JSON Schema [#12563](https://github.com/earendil-works/pi/issues/12563) *(进行中)*
**重要性：** 其他配置（settings、models、keybindings、theme）都有发布的 schema；mcp.json 需要保持一致以改善开发者体验和 IDE 支持。
**状态：** 进行中。

---

## 主要 PR 进展

| PR | 标题 | 重要性 |
|----|-------|--------|
| [#12604](https://github.com/earendil-works/pi/pull/12604) | fix(ai): GitHub Copilot mai-code models 不支持 temperature | 解决使用 Copilot mai-code 模型时的错误 |
| [#12603](https://github.com/earendil-works/pi/pull/12603) | 让主机选择 Pi Durable 在哪里启动可运行任务 | 重要的主机集成改进；允许自定义调度 |
| [#12505](https://github.com/earendil-works/pi/pull/12505) | fix(ai): 在 openai-completions 中复现 GitHub Copilot reasoning_opaque | 修复 Copilot reasoning 复现；解决 #12418 |
| [#12597](https://github.com/earendil-works/pi/pull/12597) | fix(tui): 在普通模式下追加 Kitty 图片而不完全重绘 | 修复追加图片时回滚清除 |
| [#12596](https://github.com/earendil-works/pi/pull/12596) | fix(tui): 将 Kitty 图片 ID 保持在有符号 32 位范围内 | 修复 Konsole 中的图片丢失 |
| [#12602](https://github.com/earendil-works/pi/pull/12602) | feat(coding-agent): 在 OSC 7577 resume 中添加重复限制和资源标志 | 改进终端恢复功能 |
| [#12595](https://github.com/earendil-works/pi/pull/12595) | feat(coding-agent): 添加 --agent-dir 并在恢复命令中保留它 | 在会话间保留 agent 目录 |
| [#12601](https://github.com/earendil-works/pi/pull/12601) | docs(coding-agent): Pi 被杀后重置终端 | 修复 Windows 终端恢复文档 |
| [#12535](https://github.com/earendil-works/pi/pull/12535) | feat(ai): 添加 pi-image API | 新的图片生成协议，用于 provider 兼容性 |
| [#12584](https://github.com/earendil-works/pi/pull/12584) | docs(coding-agent): 记录遥测和网络请求 | 提高数据收集的透明度 |

---

## 功能请求趋势

根据 issue 和 PR 活动，社区在以下领域推动发展：

1. **Provider 生态扩展** — 对 ModelScope 作为内置 provider (#8393)、OpenAI Images API 支持 (#12545) 和统一 pi-image API (#12535) 的请求。

2. **终端和 TUI 改进** — 多个问题涉及 Kitty 图片处理、崩溃后终端模式恢复以及模式切换期间的页眉/页脚行为。

3. **Durable/Harness 增强** — 主机控制的任务调度 (#12603)、对话删除 (#12562, #12582) 和暂停/清空方法 (#12512)。

4. **扩展和 SDK 优化** — 公共 MCP 扩展钩子 (#12600)、扩展符号链接验证 (#12599) 和内存管理改进。

5. **透明度和控制** — Transcript 边车裁剪 (#12506)、预压缩消息可见性 (#12565)、DO_NOT_TRACK 合规性 (#12556) 和遥测文档。

---

## 开发者痛点

以下问题在 issue 和 PR 中反复出现：

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| **缺少错误上下文** — 解析错误、工具故障和上游错误通常缺乏可操作的细节 | 高 | 强制手动调试；减慢 AI 辅助工作流 |
| **SDK 内存泄漏** — 已释放的会话保留在 V8 堆中导致最终 OOM | 高 | 破坏长时间运行的集成 |
| **终端状态损坏** — 崩溃导致终端处于不可用状态 | 中 | 需要手动恢复；尤其影响 Windows |
| **工具无超时机制** — Bash 工具允许无限挂起 | 中 | 阻塞会话数小时 |
| **提示词缓存未命中** — 工具列表重新排序意外失效缓存 | 中 | 浪费 token；减慢响应 |
| **文件变更冲突** — 硬链接和符号链接导致竞态条件 | 中低 | 数据完整性风险 |
| **Bun standalone 限制** — undici.install() 无操作影响 HTTP 配置 | 低 | 降级 Bun 环境中的诊断功能 |

---

*过去 24 小时内无新版本发布。参见 [Pi 仓库](https://github.com/earendil-works/pi) 获取完整活动。*
</think>


# Pi 社区速报 — 2026-11-27

## 今日要点

Pi 社区今日活动重点集中在稳定性和可扩展性方面。一个影响扩展注册的 providers 忽略默认模型设置的严重 bug 仍处于开放状态并有活跃讨论（12 条评论）。在 PR 方面，多个关键修复已经合并，包括改进的 Copilot reasoning 复现、Kitty 图像处理改进和新的遥测文档。团队还合并了 Pi Durable 任务调度方面的重要主机集成增强功能。

## 热门议题

### 1. 扩展注册的 Providers 忽略默认设置 [#8810](https://github.com/earendil-works/pi/issues/8810) *(开放, 12 评论)*
**重要性：** 当 provider 由扩展注册时，新会话会间歇性地忽略 `defaultProvider`/`defaultModel`，导致静默回退到其他 provider 的默认值。这破坏了任何基于扩展 provider 配置的预期启动行为。
**社区反应：** 5 👍 点赞；12 条评论的持续讨论表明这是一个可复现且令人沮丧的问题。

### 2. 普通模式下 Kitty 图片丢失 / 回滚被清除 [#12548](https://github.com/earendil-works/pi/issues/12548) *(已关闭)*
**重要性：** 顺序打印的图片在后续输出出现时会消失，Konsole 的回滚会因回退重绘行为而被清除。
**解决方案：** 通过 PR #12596（图片 ID 范围）和 #12597（在普通模式下追加而不完全重绘）修复。

### 3. AgentSession Dispose() 保留闭包，阻止 GC [#12546](https://github.com/earendil-works/pi/issues/12546) *(已关闭)*
**重要性：** 长时间运行的 SDK 进程会出现内存泄漏，因为已释放的 `AgentSession` 和 `SessionManager` 实例在 OOM 之前一直保留在 V8 堆中。
**解决方案：** 关闭为无操作；似乎是已知限制，正在单独追踪。

### 4. Windows: Pi 崩溃后键盘报告状态保持开启 [#12564](https://github.com/earendil-works/pi/issues/12564) *(已关闭)*
**重要性：** Windows 上崩溃的 Pi 会让终端处于崩溃状态，PowerShell 变得无法使用。
**解决方案：** 通过 PR #12601 修复并改进文档。

### 5. /reload 重新排列系统提示词工具列表 [#12547](https://github.com/earendil-works/pi/issues/12547) *(开放)*
**重要性：** 重新加载未更改的代码会改变系统提示词工具列表的顺序，导致 Anthropic 提示词缓存未命中并丢弃 thinking blocks。
**状态：** P0 优先级，等待分类。

### 6. 项目本地技能排除重复条目 [#12550](https://github.com/earendil-works/pi/issues/12550) *(已关闭)*
**重要性：** 为 home skill 选择"跳过"时，会在 `.pi/settings.json` 中同时保存路径和减号条目，创建冗余配置。
**状态：** 关闭为无操作。

### 7. 重试分类器忽略 SSE 流错误 [#12605](https://github.com/earendil-works/pi/issues/12605) *(已关闭)*
**重要性：** 启用自动重试时，上游 SSE 流错误会停止 turn 而不是触发重试，降低可靠性。
**状态：** 审查中修复。

### 8. Bash 工具没有默认超时 [#12561](https://github.com/earendil-works/pi/issues/12561) *(已关闭)*
**重要性：** 卡住的命令可以无限期运行（一个报告：2 小时 6 分钟），阻塞会话。
**状态：** 关闭为无操作；可能在即将进行的工作中解决。

### 9. codemode 解析错误缺少源码摘录 [#12510](https://github.com/earendil-works/pi/issues/12510) *(开放)*
**重要性：** 语法错误仅报告文件/行/列，没有源码上下文，迫使模型猜测问题所在。
**影响：** 使调试基于 shell 的 codemode 脚本变得不必要地困难。

### 10. 发布 mcp.json 的 JSON Schema [#12563](https://github.com/earendil-works/pi/issues/12563) *(进行中)*
**重要性：** 其他配置（settings、models、keybindings、theme）都有发布的 schema；mcp.json 需要保持 parity 以改善开发者体验和 IDE 支持。
**状态：** 进行中。

---

## 关键 PR 进展

| PR | 标题 | 重要性 |
|----|-------|--------|
| [#12604](https://github.com/earendil-works/pi/pull/12604) | fix(ai): GitHub Copilot mai-code models 不支持 temperature | Resolves error when using Copilot mai-code models |
| [#12603](https://github.com/earendil-works/pi/pull/12603) | 让主机选择 Pi Durable 在哪里启动可运行任务 | 重要的主机集成改进；允许自定义调度 |
| [#12505](https://github.com/earendil-works/pi/pull/12505) | fix(ai): 在 openai-completions 中 replay GitHub Copilot reasoning_opaque | 修复 Copilot reasoning 复现；address #12418 |
| [#12597](https://github.com/earendil-works/pi/pull/12597) | fix(tui): 在普通模式下追加 Kitty 图片而不完全重绘 | 修复追加图片时回滚清除 |
| [#12596](https://github.com/earendil-works/pi/pull/12596) | fix(tui): 将 Kitty 图片 ID 保持在有符号 32 位范围内 | 修复 Konsole 中的图片丢失 |
| [#12602](https://github.com/earendil-works/pi/pull/12602) | feat(coding-agent): 在 OSC 7577 resume 中添加 repeat restriction 和 resource flags | 改进终端 resume 功能 |
| [#12595](https://github.com/earendil-works/pi/pull/12595) | feat(coding-agent): 添加 --agent-dir 并在 resume 命令中携带它 | 在会话间保留 agent 目录 |
| [#12601](https://github.com/earendil-works/pi/pull/12601) | docs(coding-agent): Pi 被杀后重置终端 | 修复 Windows 终端恢复文档 |
| [#12535](https://github.com/earendil-works/pi/pull/12535) | feat(ai): 添加 pi-image API | 新的图片生成协议，用于 provider parity |
| [#12584](https://github.com/earendil-works/pi/pull/12584) | docs(coding-agent): 记录遥测和网络请求 | 提高数据收集的透明度 |

---

## 功能请求趋势

根据 issue 和 PR 活动，社区在以下领域推动发展：

1. **Provider 生态扩展** — 对 ModelScope 作为内置 provider (#8393)、OpenAI Images API 支持 (#12545) 和统一 pi-image API (#12535) 的请求。

2. **终端 & TUI 改进** — 多个问题 addressing Kitty 图片处理、崩溃后终端模式恢复以及模式切换期间的 footer/header 行为。

3. **Durable/Harness 增强** — 主机控制的任务调度 (#12603)、对话删除 (#12562, #12582) 和 pause/drain 方法 (#12512)。

4. **扩展 & SDK 优化** — 公共 MCP 扩展 hooks (#12600)、扩展 symlink 验证 (#12599) 和内存管理改进。

5. **透明度和控制** — Transcript 边车 elision (#12506)、预 compaction 消息可见性 (#12565)、DO_NOT_TRACK 合规性 (#12556) 和遥测文档。

---

## 开发者痛点

以下问题在 issue 和 PR 中反复出现：

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| **缺少错误上下文** — 解析错误、工具故障和上游错误通常缺乏可操作的细节 | 高 | 强制手动调试；减慢 AI 辅助工作流 |
| **SDK 内存泄漏** — 已释放的会话保留在 V8 堆中导致最终 OOM | 高 | 破坏长时间运行的集成 |
| **终端状态损坏** — 崩溃导致终端处于不可用状态 | 中 | 需要手动恢复；尤其影响 Windows |
| **工具无超时机制** — Bash 工具允许无限挂起 | 中 | 阻塞会话数小时 |
| **提示词缓存未命中** — 工具列表重新排序意外失效缓存 | 中 | 浪费 tokens；减慢响应 |
| **文件变更冲突** — 硬链接和 symlink 导致竞态条件 | 低-中 | 数据完整性风险 |
| **Bun standalone 限制** — undici.install() no-op 影响 HTTP 配置 | 低 | 降级 Bun 环境中的 diagnostics |

---

*过去 24 小时内无新版本发布。参见 [Pi 仓库](https://github.com/earendil-works/pi) 获取完整活动。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the above JSON technical report from English into Simplified Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the JSON structure exactly
3. Keep URLs, numbers, dates, code references as-is
4. Use natural technical Chinese
5. Keep project names, repository slugs, usernames, version tags, file paths in original form

Let me translate each field carefully while maintaining the technical register appropriate for Chinese developers.

Key terms to translate:
- "Highlights" → 重点速览
- "Releases" → 版本更新
- "Hot Issues" → 热门问题
- "Key PR Progress" → 重要 PR 进展
- "Hot Discussions" → 热门讨论
- "Feature Request Trends" → 功能需求趋势
- "Developer Pain Points" → 开发者痛点

Let me work through each section:
</think>


{
  "date": "2026-11-27",
  "product": "Qwen Code",
  "section1_Highlights": "Qwen Code CLI 现已登陆 Harness kernel，隐私保护的使用量统计默认为关闭状态，可与更广泛的 Qwen 生态实现更紧密的集成。托管会话新增冷恢复能力，支持在工具审批、问答或后台工作期间暂停，并在 Harness 崩溃后无缝恢复。Web-shell 获得显著的 UI/性能改进，包括延迟转录渲染和新任务的范围化模型默认值。",
  "section2_Releases": {
    "v0.28.7": {
      "summary": "最新稳定版。Qwen Code CLI 现已登陆 Harness kernel，默认关闭使用量统计（由 privacy.usageStatisticsEnabled 控制是否开启）。重复工具调用的拒绝信息现在包含解释性说明。",
      "breakingChanges": [],
      "securityFixes": []
    },
    "v0.28.6": {
      "summary": "托管会话现支持在等待工具审批、提问或后台工作时暂停，并可通过冷恢复在 Harness 崩溃后恢复。SDK TypeScript v0.1.36 捆绑 CLI 0.28.6。",
      "breakingChanges": [],
      "securityFixes": []
    },
    "v0.28.6-nightly.20261126.6b0cd79b": {
      "summary": "每日构建版本，包含 CLI 在 Harness kernel 集成的最新进展。",
      "breakingChanges": [],
      "securityFixes": []
    }
  },
  "section3_HotIssues": [
    {
      "number": 18486,
      "title": "Desktop AppImage：在当前 Mesa 驱动上显示灰色窗口 — 捆绑的 libwayland-client 缺少 wl_fixes_interface",
      "url": "https://github.com/QwenLM/qwen-code/issues/18486",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "使用现代 Mesa 驱动的 Linux 桌面用户（Bluefin/Fedora）在 Mesa/EGL 渲染时遇到灰色窗口问题，原因是捆绑的过时 libwayland-client 库与宿主机 EGL 冲突。这影响了相当大比例的 Linux 桌面用户。",
      "communityReaction": "3 条评论；PR #18491 已提交，旨在当宿主库被错误捆绑时使 AppImage 冒烟测试失败。"
    },
    {
      "number": 17889,
      "title": "bug(serve)：转录分页每次请求都重新解析完整 JSONL — limit=1 与 limit=500 成本相同",
      "url": "https://github.com/QwenLM/qwen-code/issues/17889",
      "priority": "P1",
      "status": "OPEN",
      "whyItMatters": "关键性能缺陷，导致大会话上事件循环阻塞。每次转录请求无论分页参数如何都需付出完整的 JSONL 重解析代价，严重降低守护进程在高负载下的响应能力。",
      "communityReaction": "3 条评论；PR #18480 解决了索引重建风暴和增量转录索引问题。"
    },
    {
      "number": 17851,
      "title": "Main CI 失败：Managed Agent 全量层级 — Hosted 故障转移 E2E runtime_preparation_timeout（自 2026-11-11 起持续）",
      "url": "https://github.com/QwenLM/qwen-code/issues/17851",
      "priority": "P1",
      "status": "OPEN",
      "whyItMatters": "Managed Agent 全量层级在 main 分支上已持续失败两周以上，表明存在影响生产级部署的系统性基础设施问题。",
      "communityReaction": "4 条评论；wenshao 正在积极调查中。"
    },
    {
      "number": 18475,
      "title": "fix(serve)：会话删除时对不可读的工作树 sidecar 采取 fail-closed 策略",
      "url": "https://github.com/QwenLM/qwen-code/issues/18475",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "会话删除可能静默留下不可读的工作树 sidecar 和孤立 checkout，在多工作区环境中造成数据不一致和潜在存储泄漏。",
      "communityReaction": "3 条评论；wenshao 提交 PR 实现 fail-closed 行为。"
    },
    {
      "number": 16259,
      "title": "用户消息被系统提醒 / 记忆目录（60KB+）淹没 — 模型以「无任务」响应",
      "url": "https://github.com/QwenLM/qwen-code/issues/16259",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "用户的实际任务指令淹没在超过 60KB 的冗长系统提醒和记忆目录中，导致模型完全忽略用户请求。这对面向任务的工作流是严重的 UX 失效。",
      "communityReaction": "4 条评论；正在讨论上下文窗口管理和指令优先级问题。"
    },
    {
      "number": 18030,
      "title": "feat(memory)：在工作区和 Git worktree 之间共享项目自动记忆",
      "url": "https://github.com/QwenLM/qwen-code/issues/18030",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "每个 Git worktree 当前获得隔离的项目自动记忆，破坏了开发者在创建 worktree 修复 bug 时的知识连续性。worktree 中学到的经验不会传回主工作区。",
      "communityReaction": "4 条评论；功能请求在 worktree 间共享自动记忆。"
    },
    {
      "number": 17446,
      "title": "feat(cli)：在自定义 provider 配置期间发现模型",
      "url": "https://github.com/QwenLM/qwen-code/issues/17446",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "用户在配置自定义 provider（OpenAI、Anthropic 兼容）时缺乏模型发现能力，被迫手动输入模型 ID。这增加了 provider 配置工作流的摩擦。",
      "communityReaction": "8 条评论；PR #17692 为自定义 provider 实现模型发现。"
    },
    {
      "number": 15649,
      "title": "MCP OAuth：访问令牌在连接时固定 — 令牌过期后会话失去所有工具",
      "url": "https://github.com/QwenLM/qwen-code/issues/15649",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "使用 OAuth 的 HTTP MCP 服务器在访问令牌过期后失去所有工具，因为令牌在连接时缓存而非动态刷新。",
      "communityReaction": "3 条评论；需要实现令牌刷新机制。"
    },
    {
      "number": 18422,
      "title": "proposal(harness)：为产品插件托管 Mods 的 kernel 边界设计",
      "url": "https://github.com/QwenLM/qwen-code/issues/18422",
      "priority": "P2",
      "status": "OPEN",
      "whyItMatters": "提议在 Harness kernel 中扩展宿主无关的扩展点，允许产品插件集成 Mod 运行时，实现更广泛的生态系统扩展性。",
      "communityReaction": "3 条评论；架构讨论进行中。"
    },
    {
      "number": 11680,
      "title": "Main CI 失败：E2E Tests — 未识别到测试",
      "url": "https://github.com/QwenLM/qwen-code/issues/11680",
      "priority": "P2",
      "status": "CLOSED",
      "whyItMatters": "长期运行的 CI 可靠性问题，积累 107 条评论。E2E 测试在报告任何结果之前就失败，使调试困难并拖慢开发速度。",
      "communityReaction": "107 条评论积累；按提交追踪，持续进行分诊。"
    }
  ],
  "section4_KeyPRProgress": [
    {
      "number": 18491,
      "title": "fix(desktop)：当宿主库被错误捆绑时使 AppImage 冒烟测试失败",
      "url": "https://github.com/QwenLM/qwen-code/pull/18491",
      "status": "OPEN",
      "description": "加强 AppImage 发布验证，检测捆绑库是否应来自宿主机，防止问题 #18486 报告的 Mesa/EGL 渲染问题。"
    },
    {
      "number": 18215,
      "title": "fix(serve)：为持久化会话恢复 detached 后台 shell 活性",
      "url": "https://github.com/QwenLM/qwen-code/pull/18215",
      "status": "OPEN",
      "description": "使 web shell 能够检测非连接守护进程拥有的会话（守护进程重启后）的 detached 后台 shell 是否仍在运行，提高会话状态可靠性。"
    },
    {
      "number": 18370,
      "title": "fix(ci)：在 authority-surface PR 和环境凭证探测上 fail-closed",
      "url": "https://github.com/QwenLM/qwen-code/pull/18370",
      "status": "OPEN",
      "description": "改进自动化 review 分诊，评估 PR 实际能触及的范围，而非仅做可疑短语模式匹配，防止 PR 工作流中的凭证泄露。"
    },
    {
      "number": 18483,
      "title": "perf(web-shell)：延迟屏幕外转录的高亮和渲染",
      "url": "https://github.com/QwenLM/qwen-code/pull/18483",
      "status": "OPEN",
      "description": "实现惰性语法高亮，仅对接近滚动容器的内容进行渲染，减少大转录的初始加载时间和内存占用。"
    },
    {
      "number": 18470,
      "title": "fix(ci)：隔离 fork review 的模型凭证",
      "url": "https://github.com/QwenLM/qwen-code/pull/18470",
      "status": "OPEN",
      "description": "Fork 生命周期 review 现在使用 GitHub Actions token 而非维护者 PAT，模型凭证通过回环代理提供，防止在不信任上下文中的泄露。"
    },
    {
      "number": 18490,
      "title": "feat(web-shell)：为新任务添加范围化模型默认值",
      "url": "https://github.com/QwenLM/qwen-code/pull/18490",
      "status": "OPEN",
      "description": "允许为新任务配置每个模型的默认值，包括上下文窗口限制、思考设置和努力级别，支持独立的用户和工作区标签页配置。"
    },
    {
      "number": 18476,
      "title": "feat(web-shell)：将 ChatPane 迁移到共享 ChatSurface（第四部分）",
      "url": "https://github.com/QwenLM/qwen-code/pull/18476",
      "status": "OPEN",
      "description": "将守护进程分屏视图和侧边任务聊天面板迁移到共享后端无关的聊天界面，淘汰重复的转录、工具审批和编辑器编排代码。"
    },
    {
      "number": 18112,
      "title": "feat(web-shell)：在会话内暴露和控制会话调度的任务",
      "url": "https://github.com/QwenLM/qwen-code/pull/18112",
      "status": "OPEN",
      "description": "在 Web Shell 对话视图中展示持久化调度任务和内存中的会话调度（cron 任务、循环唤醒），提供内联暂停、立即运行、删除和停止控制。"
    },
    {
      "number": 18480,
      "title": "perf(core)：持久化提示时 sidecar、绑定冷扫描范围、增量扩展转录索引",
      "url": "https://github.com/QwenLM/qwen-code/pull/18480",
      "status": "OPEN",
      "description": "解决关键转录分页性能问题（#17889），消除重复的全量索引重建并实现增量索引更新。"
    },
    {
      "number": 18488,
      "title": "feat(mods)：让 Mods 读取环境和设置，并记录遥测数据",
      "url": "https://github.com/QwenLM/qwen-code/pull/18488",
      "status": "OPEN",
      "description": "扩展 Mod 运行时能力，支持环境变量访问（$.env.get）、设置读取（$.settings.read）和遥测数据记录（$.telemetry.log/mark），适用于所有 Mod 宿主。"
    }
  ],
  "section5_HotDiscussions": null,
  "section6_FeatureRequestTrends": [
    {
      "category": "CLI 与 Provider 管理",
      "requests": [
        "在自定义 provider 配置期间发现模型（OpenAI、Anthropic 兼容）",
        "扩展 CLI 在多种 kernel 环境中的可用性",
        "改进凭证处理和隔离机制"
      ],
      "frequency": "High"
    },
    {
      "category": "记忆与上下文管理",
      "requests": [
        "在 Git worktree 之间共享项目自动记忆",
        "更好地处理淹没用户指令的冗长系统提醒",
        "增量转录索引以提升性能"
      ],
      "frequency": "High"
    },
    {
      "category": "会话与工作流管理",
      "requests": [
        "在会话内可视化调度任务并进行控制",
        "托管会话的冷恢复能力",
        "每个工作区/任务的范围化模型默认值"
      ],
      "frequency": "Medium"
    },
    {
      "category": "平台与集成",
      "requests": [
        "通过 kernel 边界实现 Mod 运行时扩展性",
        "MCP OAuth 令牌刷新机制",
        "跨平台兼容性修复（Linux AppImage）"
      ],
      "frequency": "Medium"
    }
  ],
  "section7_DeveloperPainPoints": [
    {
      "issue": "CI 不稳定性",
      "description": "E2E 测试和 Managed Agent 门禁间歇性失败，报告「未识别到测试」或超时问题，积累 100+ 评论线程，拖慢开发速度。",
      "frequency": "High"
    },
    {
      "issue": "转录性能问题",
      "description": "每次转录请求无论分页参数如何都重新解析完整 JSONL，导致大会话上事件循环阻塞。",
      "frequency": "High"
    },
    {
      "issue": "Linux 桌面渲染问题",
      "description": "AppImage 在 Mesa 驱动上出现灰色窗口问题，原因是捆绑库冲突，影响大量 Linux 用户。",
      "frequency": "High"
    },
    {
      "issue": "上下文溢出",
      "description": "系统提醒和记忆目录超过 60KB，完全淹没用户指令，导致模型忽略任务指示。",
      "frequency": "Medium"
    },
    {
      "issue": "Worktree 隔离",
      "description": "Git worktree 获得隔离的自动记忆，导致学到的经验无法传回主工作区。",
      "frequency": "Medium"
    },
    {
      "issue": "MCP OAuth 令牌过期",
      "description": "访问令牌在连接时缓存，过期后导致工具完全丢失，需要重新连接。",
      "frequency": "Medium"
    },
    {
      "issue": "会话删除数据完整性",
      "description": "会话删除时可能留下不可读的工作树 sidecar，产生孤立状态。",
      "frequency": "Low"
    }
  ]
}

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*