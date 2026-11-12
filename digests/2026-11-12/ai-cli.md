# AI CLI 工具社区动态日报 2026-11-12

> 生成时间: 2026-11-12 03:17 UTC | 覆盖工具: 7 个

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

1. Translate the content while keeping technical terms and code references as-is
2. Use natural technical Chinese register
3. Preserve all Markdown structure exactly
4. Keep URLs, repository slugs, version numbers, etc. in original form
5. No preamble, no explanation, no markdown fences
6. Output only the translation

Let me carefully translate this report section by section.
</think>


# AI CLI 工具生态 —— 跨工具对比报告

**报告日期：** 2026-11-12
**范围：** Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Pi · Qwen Code

---

## 1. 生态概览

截至本报告日期，AI CLI 工具领域已大幅超越"基础对话封装"阶段。所有六款工具都建立在相同的架构基线之上——多轮 agent 循环、工具调用、会话管理以及某种形式的扩展能力——但在执行优先级上正在急剧分化。OpenAI Codex 和 GitHub Copilot CLI 正在深化企业集成（CI/CD、Azure/GCP 托管、MCP），OpenCode 正在构建最广泛的社区生态系统和最平易近人的上手体验，Claude Code 在推进自主 agent 推理和上下文管理的边界，而 Gemini CLI 和 Qwen Code 都在大力投资多后端模型支持。整个行业共同面对的工程难题——多 agent 协调、上下文窗口管理、Windows 稳定性以及 MCP 服务隔离——横跨每一个项目，揭示了一个事实：尽管表面差异化在加速，但整个生态正在向一组共同的核心问题收敛。

---

## 2. 活跃度对比

| 工具 | Issues（近24小时） | PR 合并数（近24小时） | Discussions | Releases（近24小时） |
|------|:-----------------:|:---------------------:|:-----------:|:-------------------:|
| **Claude Code** (anthropics) | 50 | 1 | N/A | 0 |
| **OpenAI Codex** (openai) | 50 | **18** | 7 | **7** |
| **Gemini CLI** (google-gemini) | 50 | 29 | N/A | 0 |
| **GitHub Copilot CLI** (github) | 42 | 0 | N/A | 2 |
| **OpenCode** (anomalyco) | 50 | 23 | N/A | 1 |
| **Pi** (earendil-works/pi) | 50 | 23 | 1 | 0 |
| **Qwen Code** (QwenLM) | 50 | 10+ | N/A | 1 |

> **关于 Discussions 的说明：** Claude Code、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code 均未将 GitHub Discussions 作为社区互动渠道——这些平台以 Issues 作为主要甚至唯一的社区接口。因此将这些字段标记为"N/A"，而非将其视为活跃度不足，以准确反映上游工具选择的实际状况。

**解读：** OpenAI Codex 在 PR 吞吐量（18个合并）和发布频率（7个版本）上领先，表明其迭代节奏最为激进。Gemini CLI、OpenCode 和 Pi 的提交吞吐量同样可观（23–29 个 PR），但本期无版本发布，说明处于集中开发而非发布阶段。Claude Code 虽issue队列活跃，但合并量极低，处于相对平稳的阶段。GitHub Copilot CLI 更新频率最为保守，与其成熟稳定产品的定位一致。

---

## 3. 共同的功能方向

在两个或以上工具社区中反复出现的需求，揭示了整个生态共同识别的能力缺口：

| 功能方向 | 工具 | 具体需求 |
|---|---|---|
| **多 agent 编排** | Claude Code、Codex、Gemini CLI、Qwen Code、Pi | 原生支持并发运行子 agent 而不产生冲突；共享任务归属与交接协议 |
| **上下文压缩 / 记忆管理** | Claude Code、Gemini CLI、Codex、Qwen Code、Pi | 长任务中自动化、模型可调用或需授权的上下文缩减机制；token 配额强制执行 |
| **MCP 服务隔离与生命周期** | Claude Code、Gemini CLI、Codex、OpenCode | 跨环境同名 MCP 服务、OAuth token 持久化、热重载（无需重启） |
| **Windows 平台稳定性** | Claude Code、Codex、Gemini CLI、Copilot CLI、Pi、OpenCode | Store/MSIX 包锁定问题、WSL2 剪贴板、自更新重启、沙盒代理、ARM64 兼容性 |
| **会话持久化与容错** | Claude Code、OpenCode、Pi、Qwen Code | 备份系统、跨设备连续性、崩溃或断网后恢复 |
| **插件 / 扩展 API** | OpenCode、Gemini CLI、Codex | V2 插件钩子、自定义工具注册、扩展生命周期管理 |
| **成本 / 用量监控** | Claude Code、Gemini CLI、Codex、Copilot CLI | 每会话用量追踪、账户自动均衡、速率限制可视化 |
| **语音 / 交互模式** | Claude Code、Gemini CLI、Copilot CLI | TTS 响应、持续监听、可配置转录语言 |
| **远程 / 跨设备会话** | Codex、Copilot CLI、Pi | 远程终端、RDP/WebShell 集成、会话同步 |

---

## 4. 差异化分析

### Claude Code（Anthropic）
**目标用户：** 优先考虑深度自主推理而非快速原型开发的高级开发者、AI 工程师和 power user。该工具倾向于追求复杂的 agent 行为——模型可调用的压缩、条件化工作流触发器、git-worktree 会话管理——而非广泛的易用性。

**技术路线：** 以工具为核心的设计理念，高度重视上下文窗口优化和工具权限粒度。桌面应用存在但仍处于次要地位。

**差异化要点：** 最先进的上下文管理功能；每个 issue 下的评论密度最高，表明用户群体技术素养较高。

---

### OpenAI Codex（OpenAI）
**目标用户：** 深度嵌入 Microsoft/Azure/GCP 生态、需要与现有 CI/CD 流水线、VS Code 和云端托管模型紧密集成的企业团队。

**技术路线：** 多平台一致性（Windows/macOS/Linux）、rust 编写的守护进程架构以提升性能、ACP（Agentic Code Protocol）作为一等公民的协作层，以及在 MCP 集成和托管 API 可靠性上的持续投入。

**差异化要点：** 最深度的企业集成；最大的 PR 吞吐量；强大的社区工具生态（Pushary、Concord、TreeHarbor、claude-bulkhead）。

---

### Gemini CLI（Google）
**目标用户：** 深度使用 Google AI 生态的开发者、Android/Flutter 开发者，以及追求多后端模型灵活性的用户。

**技术路线：** Node.js/Bun 架构，具备强大的子 agent 架构、skill 系统和浏览器 agent 能力。ACP 模式对标是明确优先级。

**差异化要点：** 原生 Google AI 模型集成；基于 skill 的工具调用方式；用于 Web 交互的浏览器 agent；多模型灵活性。

---

### GitHub Copilot CLI（GitHub/Microsoft）
**目标用户：** 已在 VS Code 中使用 GitHub Copilot、只需轻量级 CLI 入口的开发者。学习曲线最低，默认配置最"固执己见"。

**技术路线：** 固执己见的封闭生态，深度集成 GitHub 身份认证。感知 ACP 但专注于简洁性而非可配置性。

**差异化要点：** 最快上手时间；与 GitHub 身份认证和 Copilot 订阅层级的最佳集成；最精简的功能集。

---

### OpenCode（Anomaly）
**目标用户：** 追求全功能 agent 且不希望被供应商绑定的最广泛受众——个人开发者、团队和企业。定价最亲民，平台支持最广。

**技术路线：** 桌面优先，拥有强大的 TUI、广泛的插件生态、会话管理和多账户支持。Zen 模式面向个人开发者；完整 CLI 面向 power user。

**差异化要点：** 最大的社区驱动功能集；最广泛的第三方工具和扩展生态；除 Codex 外社区参与度最高。

---

### Pi（Earendil Works）
**目标用户：** 优先考虑自托管、对 agent 运行时追求细粒度控制和持久性的开发者。垂直细分但社区参与度极高。

**技术路线：** Rust + Node.js 混合架构；基于 p2/Chord 的分布式会话存储；强力的备份系统和崩溃恢复能力；pi-durable 用于长时间运行的自主任务。

**差异化要点：** 最复杂的持久化和容错架构；Radius 备份集成；最强的自托管故事。

---

### Qwen Code（阿里/Qwen）
**目标用户：** 追求开源、多语言模型后端且希望获得 Qwen 模型深度优化的开发者。当前处于预览阶段的统一 agent 体验。

**技术路线：** Qoder 与 Qwen Code 的预览阶段统一；基于事件总线的 agent 循环重架构；托管 Agent 基础设施用于托管会话。

**差异化要点：** Qwen/Qoder 模型优化；基于事件总线的 agent 循环；Web shell 和托管会话基础设施；小型项目中发布节奏最快。

---

## 5. 社区势能与成熟度

| 工具 | 社区规模信号 | 迭代速度 | 成熟度 | 整体趋势 |
|------|----------------------|--------------------|----------|-------------------|
| **OpenAI Codex** | issue/PR 密度最高；24小时内18个PR + 7个版本；丰富的 Show-and-Tell 生态 | 🔥🔥🔥 极高 | 中期 —— 活跃稳定化中 | 快速攀升 |
| **OpenCode** | 50个 issue + 23个 PR + 强劲的 👍/评论比 | 🔥🔥 高 | 早中期 —— 快速增长 | 强势上扬 |
| **Claude Code** | 50个 issue；每个 issue 评论深度最高；点赞比强劲 | 🔥 中等 | 成熟 —— 核心稳定 | 稳中有进，以功能为导向 |
| **GitHub Copilot CLI** | Issue 量低；2个版本表明有节制的更新节奏 | 🟡 中等 | 成熟 —— 稳定 | 增量迭代，稳定 |
| **Pi** | 50个 issue + 23个 PR + 1个 discussion；热情的垂直社区 | 🔥 高 | 中期 —— 架构演进中 | 功能加速 |
| **Qwen Code** | 50个 issue + 10+个 PR + 1个重大预览版发布 | 🔥 高 | 早期 —— v1.0 预览中 | 初期快速爬升 |
| **Gemini CLI** | 50个 issue + 29个 PR；无版本发布；多为内部开发活动 | 🔥 高 | 中期 —— 活跃开发中 | 活跃，无公开发布 |

**关键观察：** 在高频用户可见发布节奏（Codex、Copilot CLI）和大力建设基础设施但未公开发布（Gemini CLI、Pi、Qwen Code）的工具之间，存在显著分化。后者可能处于高强度内部开发阶段，或正在筹备重大版本发布。

---

## 6. 趋势信号

### 1. 多 Agent 是下一个主战场
每个工具社区都在应对多 agent 协调问题。Claude Code 有两个并行的模型可调用压缩提案，Codex 有原生 ACP 及社区构建的编排层（Concord、TreeHarbor、claude-bulkhead），Gemini CLI 有自适应编排提案，Qwen Code 正在基于事件总线重架构 agent 循环。整个生态正在收敛于一个认知：单 agent 循环不足以应对复杂工作流，而每个项目都在独立地面对一个事实——最难的问题在于协调，而非能力本身。

### 2. 上下文管理正在成为差异化分水岭
上下文窗口管理——压缩、token 预算、精准文件读取、AST 感知工具——在至少四个社区中被列为最高优先级。Claude Code 关于模型可调用 `/compact` 的 25 条评论大战是最显眼的信号，但底层问题（如何在不丢失关键信息的前提下将长任务保持在上下文限制内）是普遍的。那些优雅地解决这一问题的工具将获得显著竞争优势。

### 3. MCP 已经赢得扩展层之战
MCP 现在以功能或痛点的形式存在于每个工具社区中。共同面临的挑战——跨环境同名服务、OAuth token 生命周期、热重载、archive/terminal 调用拒绝——表明 MCP 被采纳的速度远超其周边工具链的成熟速度。预计在接下来 6–12 个月内，MCP 基础设施（服务隔离、凭证管理、权限模型）将成为所有工具的主要投入方向。

### 4. Windows 是整个生态最大的软肋
没有一款工具彻底解决了 Windows 稳定性问题。具体故障模式各异——MSIX 包锁定、WSL2 剪贴板、自更新重启、PowerShell 解析、沙盒代理、托管启动器——但模式是统一的。Windows 代表了潜在用户最大的安装基数，也是最高的维护负担。相比之下，原生桌面 IDE 扩展在 Windows 上已有多年打磨时间，这是所有 CLI 工具的结构性劣势。

### 5. 容错和持久化正在成为必备条件
Pi 的 p2 备份协调器、OpenCode 的 Zen 模式会话持久化、Qwen Code 的崩溃安全文件历史备份，以及 Codex 压缩后模型状态的跨流持久化，都指向同一个结论：用户期望 agent 能经受崩溃、断网和重启而不丢失工作。2024 年这是锦上添花；2026 年这是刚性需求。缺乏健壮容错机制的工具将在长时间运行的自主任务中面临越来越高的用户流失。

### 6. 企业级可观测性需求正在攀升
OpenCode 暴露 skill 名称的遥测数据、Codex 压缩后跨会话的模型状态持久化、Gemini CLI 日志中的 prompt 元数据，以及 Copilot CLI 的 `/usage` 命令，都释放了同一个信号：企业客户希望对 agent 的行为有可见性。随着各组织将 agent 部署到生产环境，对审计追踪、用量归因和成本分摊的需求将加剧。可观测性正在从企业专属需求向主流需求过渡。

### 7. 语音和交互模式正在缓慢浮现
Claude Code、Gemini CLI 和 Copilot CLI 都在不同成熟度阶段推进语音模式。尚无一者交付了令人信服的端到端语音工作流（持续监听、TTS 响应、无需手动提交）。真正的挑战不在语音识别本身，而在于轮次管理、打断处理和面向语音优先交互的 UX 设计。这仍是一个开放的问题空间，蕴含着巨大的未开发潜力。

---

*本报告数据来源于 2026-11-12 对全部六个仓库的 GitHub 数据采集。Discussion 计数仅反映 GitHub Discussions 平台的活动情况；部分工具以 Issues 作为主要社区渠道，相关字段已标注为 N/A 以准确反映上游工具选择的实际状况。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Preserve all Markdown structure exactly
2. Use natural technical Chinese register
3. Keep URLs, project names, usernames, PR/issue references, numbers, dates as-is
4. No preamble, no explanation, no markdown fences around the output
5. Translate everything else naturally

Let me translate section by section:

Title and date/source line stay mostly the same, just translate the labels.

Section 1 - Top Skills Ranking:
- Translate the intro paragraph
- Keep the table with proper Chinese formatting
- Keep the bullet list items with proper Chinese
- Keep the "Key Discussion Highlights" section
- Translate but keep technical terms appropriately

Section 2 - Community Demand Trends:
- Translate the intro
- Translate table headers and content
- Translate the top 3 list
- Keep blockquotes

Section 3 - High-Potential Pending Skills:
- Translate intro
- Translate table
- Translate "Critical Fixes Also Pending" section

Section 4 - Ecosystem Insight:
- Translate the blockquote

Appendix - keep table but translate labels

Let me write this out in natural technical Chinese:
</think>


# Claude Code Skills 社区亮点报告

*数据截至 2026-11-12 | 数据来源：github.com/anthropics/skills*

---

## 1. Skills 排行榜

从仓库的 PR 活动来看，以下 Skill 贡献获得了较高的关注度和影响力。注：PR 评论数据在数据集中显示为 undefined，故排名综合考虑了时效性、涉及范围及关联 issues 的情况。

| 排名 | PR # | Skill / 修复内容 | 作者 | 状态 | 概要 |
|------|------|-----------------|--------|--------|---------|
| 1 | #1742 | **mcp-builder: MCP ≥2.0 兼容性修复** | Kuldeeep18 | OPEN | 解决 `streamable_http_client` 重命名及 MCP SDK 2.x 自定义请求头配置问题。对 Model Context Protocol 用户至关重要。 |
| 2 | #1980 | **webapp-testing: 安全修复（命令注入）** | Pcmhacker-piro | OPEN | 修补 `with_server.py` 中的 `shell=True` 命令注入漏洞（CWE-78）。 |
| 3 | #1771 | **proofcore-contract-auditor** | ProofCore-Protocol | OPEN | 面向 Web3 开发者的新 Skill：对 Solidity/Rust 智能合约进行静态分析，并支持 TON 区块链审计锚定。 |
| 4 | #1703 | **md2video-audio** | 70v-Yoyo | OPEN | 将 Markdown 文档转换为 MP4 视频，配备逼真配音——零成本的演示文档生成流水线。 |
| 5 | #525 | **pyxel: 复古游戏开发** | kitao | OPEN | 使用 Pyxel 引擎在 Python 中创建、调试和验证复古游戏。 |
| 6 | #1245 | **notion-spec-to-implementation + quantitative-resume-auditor** | mrdesouzaphd-cmyk | OPEN | 双 Skill 组合：产品需求文档 → Notion 任务分解；简历定量评分审计。 |
| 7 | #1615 | **scnet-hpc** | lql341 | OPEN | 基于配置文件的 SSH/Slurm 工作流，用于 SCNet 超算集群操作。 |
| 8 | #514 | **document-typography** | PGTBoos | OPEN | 消除 AI 生成文档中的孤行词、孤段及编号错位问题。 |

**核心讨论亮点：**
- **安全优先：** webapp-testing 的 `shell=True` 修复（#1980）以及更广泛的信任边界问题（#492，46 条评论）表明，社区正在积极强化 Skills 抵御注入和冒名风险。
- **MCP SDK 演进：** PR #1742 应对 MCP ≥2.0 的破坏性变更，凸显该协议在生态中的重要依赖地位。
- **新领域拓展：** Web3 审计（#1771）、超算（#1615）、复古游戏（#525）等方向显示 Skills 正超越传统开发者工具范畴。

[查看所有 PR →](https://github.com/anthropics/skills/pulls)

---

## 2. 社区需求趋势

Issue 活动揭示了以下高需求方向：

| 趋势 | Issue # | 评论数 | 关键洞察 |
|-------|---------|----------|---------|
| **🔒 安全与信任** | #492 | 46 | 分发在 `anthropic/` 命名空间下的社区 Skills 存在冒名风险；用户可能向非官方内容授予过高权限。 |
| **👥 组织内共享** | #228 | 17 | 缺乏组织内 Skills 共享的原生机制——用户只能通过 Slack/Teams 手动分发。 |
| **⚡ 评估可靠性** | #556, #1352 | 合计 19 | `run_eval.py` 产生 0% 触发率；并行 worker 损坏 skill UUID。Skill 验证流水线亟待稳定化。 |
| **📦 插件重复** | #189 | 6 | `document-skills` 和 `example-skills` 插件包含相同内容，浪费上下文窗口。 |
| **📏 上下文耗尽** | #1487 | 5 | `claude-api` skill 单次注入约 156k tokens，导致上下文崩溃。 |
| **🧠 推理质量** | #1385 | 7 | 提出三门质量管控流水线：任务前校准 → 对抗性审查 → 交付验证。 |
| **💾 紧凑记忆** | #1329 | 10 | 使用符号记号表示智能体状态，以减少长时运行会话中的文本开销。 |

**三大预期 Skill 方向：**
1. **治理与安全** — 安全模式、信任评分、审计追踪、命名空间完整性。
2. **团队协作** — 组织级 Skill 库、同步机制、重复内容去重。
3. **评估与优化** — 可靠的触发测试、YAML 解析正确性、推理质量门控。

[查看所有 Issues →](https://github.com/anthropics/skills/issues)

---

## 3. 高潜力待合并 Skills

以下 PR 正在积极开发中，近期可能合并：

| PR # | Skill | 价值所在 | 时效 |
|------|-------|----------------|---------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | 首个专注 Web3 智能合约公证的 Skill；基于 TON 区块链的零存储 Merkle 证明。 | 2026-09-15 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本 Markdown → MP4 流水线，配备类人配音；文档团队高实用价值。 | 2026-09-01 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 支持 Python 复古游戏开发与验证；垂直领域明确，用户群体清晰。 | 2026-03-05 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | 填补 HPC 工作流空白；基于配置文件的 SSH/Slurm 集成。 | 2026-08-20 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion + resume-auditor** | 双用途：需求文档 → Notion 任务拆解 + 简历定量评分。 | 2026-06-02 |

**同样待合并的关键修复：**
- [#1980](https://github.com/anthropics/skills/pull/1980) — 安全：消除 webapp-testing 中的命令注入
- [#1742](https://github.com/anthropics/skills/pull/1742) — MCP ≥2.0 SDK 兼容性
- [#1298](https://github.com/anthropics/skills/pull/1298) — 触发评估隔离；Windows 兼容性

---

## 4. Skills 生态洞察

> **社区最集中的需求集中在安全加固（信任边界、注入防护）和协作基础设施（组织内共享、评估可靠性）两大方向，表明 Skills 正从个人生产力工具向企业级、可分享扩展件转型，进入成熟化阶段。**

---

## 附录：快速链接

| 资源 | 链接 |
|----------|-----|
| Skills 仓库首页 | https://github.com/anthropics/skills |
| Open PR 列表 | https://github.com/anthropics/skills/pulls?q=is%3Apr+is%3Aopen |
| Open Issues 列表 | https://github.com/anthropics/skills/issues?q=is%3Aissue+is%3Aopen |
| Skill Creator | https://github.com/anthropics/skills/tree/main/skills/skill-creator |

*报告基于 2026-11-12 的仓库快照生成。*

---

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the text content
2. Keep URLs, numbers, issue references, usernames, code, etc. as-is
3. Maintain the Markdown structure
4. Use natural technical Chinese register
5. Output ONLY the translation with no preamble or explanation
6. Use proper Chinese punctuation throughout
</think>


# Claude Code 社区日报 — 2026-11-12

## 今日要闻

社区在上下文管理方面的开发持续活跃，针对模型可调用的 `/compact` 工作流提出了两个竞争性方案（#19877、#96713），引发了热烈讨论。一项影响大上下文 Windows 用户的严重网络回归问题于昨夜浮出水面（#109170），同时多个面向 Pro 订阅者的认证 bug 陆续出现（#72027、#109155）。今日唯一的 PR 动态是路径验证钩子功能的关闭（#26230）。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | 标题 | 作者 | 评论数 | 重要性说明 |
|---|------|------|--------|------------|
| [#19877](https://github.com/anthropics/claude-code/issues/19877) | Claude 可调用的条件式 `/compact`，用于自动化工作流 | bmstettin | 25 | 提议让 Claude 自身可调用 `/compact` 并支持条件触发，从而在 CI/CD 流水线中实现自动化的上下文管理。25 条评论表明社区对程序化压缩控制有强烈需求。 |
| [#72027](https://github.com/anthropics/claude-code/issues/72027) | 个人 Pro 订阅者被阻止访问：'组织已禁用' → '需要 Max 或 Pro' | vizzzi | 10 | **Bug（已关闭）：** 授权同步失败导致合法 Pro 用户被阻止。表明认证基础设施可能存在影响付费用户的问题。 |
| [#81024](https://github.com/anthropics/claude-code/issues/81024) | VS Code：将 git-worktree 会话纳入会话列表 | nirevcom | 10 | 特性请求，支持多 worktree 开发工作流。当前硬编码排除 worktree，影响管理多个功能分支的开发者。 |
| [#92246](https://github.com/anthropics/claude-code/issues/92246) | Windows 桌面应用在运行会话时自动更新和重启 | Maison | 9 | 九天内被迫重启九次且无法关闭自动更新。对于 Windows 桌面用户而言是严重的 UX 问题，会在无预警或无法延迟的情况下丢失工作。 |
| [#98032](https://github.com/anthropics/claude-code/issues/98032) | macOS 上运行约 6 分钟后挂起，随后报"连接断开（ECONNRESET）" | oculogit-agent-byte | 6 | 自 2026-09-28 起突然出现的网络回归问题，仅影响特定 Mac 上的长时运行会话。稳定的失败模式表明可能存在环境相关的 API 或网络栈问题。 |
| [#84424](https://github.com/anthropics/claude-code/issues/84424) | Bash 工具对包含 `<` 的带引号参数进行 stdin 重定向检测时失效 | yuntan | 6 | **Bug（已复现）：** stdin 检测中的引号识别缺陷导致包含 shell 配置文件时命令挂起。影响 `command "<file"` 等常见模式。 |
| [#96713](https://github.com/anthropics/claude-code/issues/96713) | 模型可调用、权限管控的 Compact 工具 | NotAbdelrahmanelsayed | 5 | 相比 #19877 的替代方案——建议 Claude 显式调用 compact 并触发权限确认，从而原生支持 persist → compact → 重新读取的工作流。 |
| [#94446](https://github.com/anthropics/claude-code/issues/94446) | 桌面应用文件查看器无法打开通过 additionalDirectories 添加的链接 | dev-globeparts | 5 | 文件查看器面板仅解析主工作目录中的文件；通过 `--add-dir` 添加的文件显示为死链。影响多目录项目工作流。 |
| [#102545](https://github.com/anthropics/claude-code/issues/102545) | 语音模式：添加 TTS 回应、持续监听、自动提交 | masedri | 4 | 请求实现端到端语音工作流：语音输入、语音回应、无需手动提交。当前 15 秒静音 / 2 分钟硬性限制对偏好语音优先的开发者而言过于受限。 |
| [#90290](https://github.com/anthropics/claude-code/issues/90290) | 桌面应用中"复制会话链接"：原生 claude:// 链接 | samofwise | 4 | 特性请求，支持通过 deep link 分享特定聊天会话，便于协作和异步代码审查工作流。 |

---

## 重要 PR 进展

| # | 标题 | 作者 | 状态 | 摘要 |
|---|------|------|------|------|
| [#26230](https://github.com/anthropics/claude-code/pull/26230) | 特性/路径验证钩子 | gabrilend | 已关闭 | 通过阻止代理工具调用中的相对路径实现安全沙箱化。关闭表明可能已通过其他途径合并或已被替代方案取代。 |

---

## 特性请求趋势

**上下文管理** 仍是主导主题：
- 自动/条件式压缩触发器（#19877、#101309、#82701）
- 任务执行期间模型发起的压缩（#98123）
- 权限管控的程序化压缩访问（#96713）

**平台特定增强：**
- VS Code git-worktree 支持（#81024）
- 桌面应用会话通过 `claude://` URL 分享（#90290）
- Linux 云会话远程文件夹访问（#106592）

**语音与交互：**
- 完整的 TTS 回应和持续监听（#102545）
- 本地命令输出作为临时弹窗（#109151）

**成本与用量控制：**
- 暴露 advisor 工具的 `caching` 参数（#91110）
- 订阅方案中用量积分开关（#92087）

---

## 开发者痛点

**认证与授权（高优先级）：**
多名用户报告认证失败：Pro 订阅者被阻止访问（#72027、#109155）。表明订阅基础设施可能存在持续的授权同步问题。

**Windows 桌面稳定性：**
运行中会话被迫重启（#92246）、配置移除后自动压缩循环持续存在（#108987）、MCP 自动模式输入被重写（#108921）。Windows 桌面应用稳定性似乎不如 CLI 版本。

**网络回归问题：**
今天提交了两个连接断开问题：macOS 上约 6 分钟后挂起（#98032）和 Windows 上大 token 请求失败（#109170，日期为 2026-11-11 约 22:50 UTC）。大上下文请求似乎尤为脆弱。

**Bash 工具脆弱性：**
带引号的参数下 stdin 重定向检测失效（#84424）——这是一个微妙但常见的问题，影响 shell 配置文件较多的环境。

**权限系统复杂性：**
自动模式与钩子的交互导致权限阻止（#108921）、文件查看器范围限制（#94446）、MCP 归档/终端调用被拒绝，表明权限系统边缘情况需要完善。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the entire technical digest from English to Simplified Chinese. Let me carefully translate this maintaining all the formatting, tables, markdown structure, and keeping technical terms, usernames, version numbers, etc. in their original form.

Let me work through this section by section.
</think>


# OpenAI Codex 社区速报 — 2026-11-12

---

## 1. 今日要闻

**rust 0.167.2 stable** 版本为 Google Cloud Vertex AI 引入了增量工具更新功能（可通过 `config.toml` 中的 `incremental_tools_legacy_gcp = false` 禁用），这是面向 GCP 用户的一项重要的流式传输可靠性改进。与此同时，项目在过去 24 小时内合并了 **18 个 pull request**，几乎全部来自 `copyberry[bot]`，涵盖 OAuth 安全认证、Window 沙箱完整性、模型状态持久化以及 CLI 健壮性等方面——表明团队正在集中推进发布质量的稳定性工作。在 issue 侧，**Windows 应用商店 MSIX 包锁定** 问题（23 条评论）仍是流量最高的问题，而今天内出现的关于 **macOS 上一个天气查询耗时 33 分钟** 的新性能投诉，则暗示团队可能正在遭遇异常负载或回归问题。

---

## 2. 版本发布

| 版本 | 通道 | 变更要点 |
|---|---|---|
| **0.170.0-alpha.2** | alpha | 预发布版本；暂无变更说明。 |
| **0.167.2** | stable | **增量工具更新** 现已作为 Google Cloud Vertex AI 上的默认行为。在 `config.toml` 的 `[features]` 部分设置 `incremental_tools_legacy_gcp = false` 即可回退。对托管在 GCP 上的 Codex 部署的流式行为有影响。 |
| **0.170.0-alpha.1** | alpha | 预发布版本；暂无变更说明。 |
| **0.169.0-alpha.11.1** | alpha | 预发布版本；暂无变更说明。 |
| **0.169.0-alpha.11** | alpha | 预发布版本；暂无变更说明。 |
| **0.167.0-alpha.4.3** | alpha | 预发布版本；暂无变更说明。 |
| **0.169.0-alpha.10** | alpha | 预发布版本；暂无变更说明。 |

> **行动项：** GCP 用户如果在工具输出中观察到意外的截断或乱序现象，应检查 `config.toml` 中是否已应用了新的默认行为。

---

## 3. 热门 Issue

| # | Issue | 作者 | 评论数 | 👍 | 重要性说明 |
|---|---|---|---|---|---|
| **#25770** | **[Windows Store] MSIX 包更新后仍然被锁定** | zyzhen | 23 | 5 | 长期存在的应用商店部署缺陷：旧版 Codex MSIX 包因被运行中的进程锁定而无法卸载，导致反复更新失败。在 5 个赞同和 23 条评论的参与度下，这是今天社区关注度最高的缺陷。 |
| **#42695** | **压缩上下文后恢复过时指令，产生错误的执行报告** | HS7097 | 22 | 1 | 一个由 `send_message_to_thread` 触动的、尚在执行中的回合，可能因自动上下文压缩而遭到破坏，回退到之前已完成的一条指令。对于自动化工作流来说严重程度很高。 |
| **#60676** | **GPT-6.1 Sol 在刷新后的模型目录中消失（Linux，ChatGPT Plus）** *（已关闭）* | lloyd-copilot | 15 | 2 | 模型目录刷新后，最新的旗舰模型虽然存在于捆绑的目录中，却未出现在界面里。影响 Linux Plus 订阅用户；现已关闭，表明修复可能已在推进中。 |
| **#59931** | **Windows Desktop 重启后不自动重连已启用的 SSH 主机** | archasek | 13 | 8 | 在 Codex Desktop 中配置的远程 SSH 连接在应用重启后不会自动重新建立，破坏了自动化工作流。8 个赞同使其成为社区优先事项。 |
| **#45006** | **Codex Chrome 浏览器控制失效** *（已关闭）* | beinimaliesi | 12 | 0 | 系统安装的 Chrome 浏览器无法被 Codex 控制，原因是 Darwin 25 上的权限或命令路由问题。面向 Pro 订阅用户报告；现已关闭。 |
| **#53278** | **Codex Desktop 在 Windows 上即使启用了网络访问也应用了 `networkAccess=false`** | GiangNguyen2210 | 11 | 1 | 即使用户明确启用了网络访问，沙箱网络隔离仍然被应用，导致依赖外部 HTTP 调用的工具无法工作。 |
| **#51636** | **[macOS][Work] 新消息无法通过回车或发送按钮提交** | ra000sh-jpg | 9 | 0 | 在 macOS 版 ChatGPT 桌面应用的工作对话中，回车键和发送按钮均无法提交消息——只有完全重启应用才能暂时解决。影响日常生产力。 |
| **#35972** | **Codex Mobile Remote 的项目分配无法与 Desktop 端协调一致** | xiaoxuesheng123467 | 8 | 0 | 通过 Codex Mobile Remote 创建的项目在 Desktop 端显示为独立会话，而非被正确分配到桌面项目，导致会话历史碎片化。 |
| **#56951** | **Codex 在审查/检查点里程碑后结束回合，尽管承认工作尚未完成** | daveladouceur | 6 | 0 | Windows 上的 CLI 0.164.0 在遇到审查检查点后终止回合，即使模型明确表示工作尚未完成，造成上下文丢失。 |
| **#51658** | **提案：为子代理引入自适应原生编排** | Karikatun | 3 | 1 | 一项架构提案，旨在将子代理、模型选择、推理工作量、技能和审查统一到一个原生编排层下，以更低的成本和开销运行。这不是一个缺陷，而是一个前瞻性的功能需求，持续吸引着关注。 |

---

## 4. 关键 PR 进展

| # | PR | 作者 | 概要 |
|---|---|---|---|
| **#60981** | **使响应式 MCP OAuth 刷新支持取消安全** | copyberry[bot] | 在响应式 OAuth 令牌刷新期间取消 MCP HTTP 请求，不再中断凭证持久化。收到 `401` 的并发请求现在会复用新刷新的令牌，而不会触发冗余的刷新操作。 |
| **#60977** | **在请求中保留已分配响应的项目 ID** | copyberry[bot] | 请求准备阶段此前会剥离没有下划线前缀的响应项目 ID，即使这些 ID 携带了分配元数据。现在 ID 会被正确保留。 |
| **#60972** | **在模型状态行中将服务层级名称小写显示** | copyberry[bot] | 服务层级名称（例如 Fast、Ultrafast）现在在 `model-with-reasoning` 状态行项中以小写渲染，同时在终端标题中保持其显示用大小写。 |
| **#60969** | **在短暂流丢失后重连空闲的云端对话** | copyberry[bot] | 云端回复流丢失后，此前需要手动重新打开对话。空闲对话现在会自动恢复，并将输入排队等待流恢复。 |
| **#60964** | **在发送请求前验证 issue 标签器的 API 密钥** | copyberry[bot] | issue 标签器现在会对 `OPENAI_API_KEY` 进行空白字符修剪，并拒绝空值或非可打印 ASCII 字符，提供清晰的 `Invalid API key format` 错误提示。 |
| **#60944** | **在服务权限错误后调和 Windows 运行时注册** | copyberry[bot] | 当另一个部署已注册了相同版本的运行时包时，Windows 会报告服务权限错误。配置程序现在接受该注册并继续执行。 |
| **#60943** | **在重复 Windows 沙箱设置中保留文件权限** | copyberry[bot] | 在注册式沙箱设置期间重新应用目录 ACL 时，会更改已移入沙箱的现有文件的权限。修复程序现在在 `ProvisionOnly` 设置期间验证持久化状态以防止此问题。 |
| **#60942** | **在重放和压缩期间保留线程本地的模型 ID 状态** | copyberry[bot] | 项目和上下文窗口 ID 生成器现按线程初始化并在恢复时复用；历史重建使用自己的项目生成器，并从检查点替换历史中恢复项目序号。 |
| **#60905** | **跨环境保持同名 MCP 服务器的独立性** | copyberry[bot] | 在不同执行器上发现的 MCP 服务器现在可以共享名称而不会冲突。一个默认禁用的环境键将工具和资源独立地区分开来。 |
| **#60904** | **版本化答案显示指令并限制不支持的载荷** | copyberry[bot] | 用带版本号的 `1` 契约替换自由格式的 `AgentMessageDisplay` 操作（`show`、`hide`、`block` 模式，包含类型化注解、阻止原因和可信联系人处理）。不支持的载荷现可被安全丢弃。 |

---

## 5. 热门讨论

### 问答
| # | 主题 | 作者 | 评论数 | 👍 |
|---|---|---|---|---|
| **#24717** | **处理过时或错误记忆的推荐方式是什么？** | gjwhhhh | 3 | 1 |
> Codex 的记忆功能目前没有任何机制来清除、重置、检查或有选择地删除已存储的记忆。这是按时间排序前三的讨论，持续表明用户对记忆管理功能的需求。

| # | 主题 | 作者 | 评论数 | 👍 |
|---|---|---|---|---|
| **#34373** | **【已解答】如何卸载 Codex CLI？** *（已解答）* | rxvndotcc | 1 | 2 |
> 确认了通过官方安装脚本在 Arch Linux 上卸载的方法。已标记为已解答。

### 作品展示
| # | 项目 | 作者 | 概要 |
|---|---|---|---|
| **#60116** | **Pushary** — 在手机上审批 Codex 操作或触发 git push | aadilghani1 | 付费托管的 MCP 服务，拦截 Codex 的钩子（shell 命令、`apply_patch` 编辑、MCP 调用）并按策略校验。被阻止的操作需要人工审批；问题会推送到你的手机。 |
| **#60861** | **claude-bulkhead** — 运行 Codex 时保护其他代理的守卫钩子 | dooly6276 | 防止同一台机器上多个编程代理相互杀死对方的服务（例如 `pkill node` 冲突）。 |
| **#60852** | **Desktop remoto RDP** — 通过 Codex 控制 Windows RDP 会话 | Kad26 | 本地 Windows 插件，通过 RDP 读取屏幕截图并向测试机发送鼠标/键盘输入。 |
| **#60834** | **Concord** — 让 Codex 会话互相通信，本地或通过云端 | alexechoi | 开源的 MCP 服务器，用于协调多个编程代理在同一项目上的工作；支持共享任务所有权、文件认领和交接。 |
| **#60818** | **在 Windows 上从一个地方同时运行 Codex 和 Claude Code** | jarkillo | 在 Windows 上同时运行 5–10 个代理的运维经验，包括终端管理策略。 |
| **#60762** | **AGENTS.md Check** — 对 Codex 指令文件进行离线检查 | yangdoh | MIT 许可的 `AGENTS.md` 文件检查工具：检测合并冲突标记、不可见的双向控制字符、无效 UTF-8 和重复长行。 |
| **#60722** | **TreeHarbor** — 在工作区清理后保留代理补丁** | ArtAndrew | 面向多编程代理协作处理同一 GitHub 仓库的团队：在工作区移除后保存已提交的补丁并打开草稿 PR。 |

### 创意点子
| # | 主题 | 作者 | 评论数 | 👍 |
|---|---|---|---|---|
| **#60954** | **允许 ChatGPT Pro 用户选择用量窗口（5 小时版 vs 周版）** | 0246808642 | 建议让 Pro 订阅用户在其速率限制的滚动 5 小时窗口和滚动周窗口之间切换。葡萄牙语帖子；获得 1 个赞同。 |

---

## 6. 功能需求趋势

综合 Issues 和 Discussions 的信号，呈现以下主导主题：

1. **多代理协作** — 最强劲的有机增长趋势。多款社区工具（Concord、TreeHarbor、claude-bulkhead、Lichen）和原生编排提案（#51658）都在解决同一个缺口：在同一代码库上运行多个代理而不产生冲突。生态系统正在外部填补这一空白，表明第一方解决方案备受期待。

2. **Windows 可靠性与性能** — Windows 特定缺陷主导了 issue 列表（MSIX 锁定、SSH 重连、网络沙箱覆盖、内存膨胀、样式重算渲染器降级）。Windows 用户是社区中声音最大的群体。

3. **记忆与上下文管理** — 用户希望对 Codex 的记忆功能拥有精细控制：检查、有选择地删除和重置。当前不透明的行为在长期项目中造成了信任问题。

4. **远程与跨设备工作流一致性** — Desktop ↔ Mobile Remote ↔ CLI 之间的会话/项目管理差距，在代理切换设备时制造了摩擦。

5. **模型目录与认证健壮性** — 模型目录刷新后消失（#60676）以及 GPT-6.1 Sol 认证失败（#60970）表明，随着新旗舰模型的发布，模型部署和认证流水线需要加强。

6. **MCP 服务器隔离** — 关于同名 MCP 服务器（#60905）和 OAuth 持久化（#43216）的 PR 和 issue 表明，跨环境 MCP 部署正在变得普遍，需要更好的命名空间和凭证生命周期管理。

---

## 7. 开发者痛点

| 痛点 | 频率 / 严重程度 | 证据 |
|---|---|---|
| **Windows 应用商店 / MSIX 更新失败** | 高严重程度，持续 5 个月以上 | #25770（23 条评论，持续中） |
| **Windows 上远程 SSH 自动重连** | 高影响，易复现 | #59931（13 条评论，8 个赞同） |
| **macOS Work 消息提交冻结** | 日常可用性阻断 | #51636（9 条评论） |
| **沙箱网络隔离被错误应用** | 破坏工具功能 | #53278（11 条评论） |
| **压缩破坏回合中状态** | 自动化流水线的关键风险 | #42695（22 条评论） |
| **Code Mode 执行输出未与工具证据分开预算** | 上下文管理问题 | PR #60914（已添加 Guardian 预算预留） |
| **MCP OAuth 令牌重启后未持久化** | 阻塞 CI/CD 中的 MCP 服务器使用 | #43216（3 条评论） |
| **Windows 上 Computer Use 期间高虚拟内存占用** | 系统稳定性风险 | #58696（3 条评论，报告 VMM 54+ GB） |
| **响应缓慢（今天报告 33 分钟天气查询）** | 极端回归，1 个新报告 | #60989（1 条评论，33 分钟） |
| **无记忆检查/删除 API** | 长期存在，日渐突出 | 讨论 #24717（3 条评论，8 个月以上） |

> **总结：** 代码库正在经历大规模的稳定性和健壮性投入（今天合并了 18 个 PR，覆盖 OAuth 安全认证、Windows 运行时注册、沙箱权限和模型状态持久化），但 Windows 平台可靠性和跨设备工作流一致性仍是社区进入 2026 年末面临的首要运维痛点。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate an English technical report (the Gemini CLI Community Digest) into Simplified Chinese. I need to:

1. Translate all the text content into natural Simplified Chinese
2. Keep all markdown structure intact
3. Keep URLs, code references, issue/PR numbers, etc. as-is
4. Use appropriate technical Chinese terminology
5. Output ONLY the translation, no preamble or explanation

Let me carefully translate this piece by piece:

**Title and header:**
"Gemini CLI Community Digest" → "Gemini CLI 社区日报"
"Date:" → "日期："
"Repository:" → "仓库："

**Today's Highlights section:**
I need to translate this into natural Chinese while keeping the technical accuracy.

**Releases section:**
"No new releases in the last 24 hours." → "过去 24 小时内无新版本发布。"

**Hot Issues section:**
Each issue title and description needs to be translated.

**Key PR Progress section:**
"Status: CLOSED" → "状态：已关闭"
"Status: OPEN" → "状态：进行中"
"✅" and "🔄" can stay as they are
"Priority:" → "优先级："
"Area:" → "领域："

**Feature Request Trends section:**
Keep the table structure with translations for the theme names and descriptions.

**Developer Pain Points section:**
Translate each pain point description.

Let me do a full translation now:

---

# Gemini CLI 社区日报

**日期：** 2026-11-12
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日要闻

社区持续关注智能体可靠性，多个 P1 级问题聚焦于子智能体行为与恢复机制。本周期的重要 PR 解决了 Unicode 处理（会话预览）、Windows PowerShell 解析性能以及 ACP 模式钩子执行等关键 UX 问题。生态持续演进，遥测增强为企业环境提供更好支持，CI/CD 工作流持续完善。

---

## 版本发布

**过去 24 小时内无新版本发布。**

---

## 热门 Issue

### 1. [Subagent recovery reports GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)
**优先级：P1 | 评论数：13 | 👍：2**

`codebase_investigator` 子智能体在达到最大轮次限制且未完成分析时，虚假报告成功状态。这掩盖了实际失败并阻止了适当的错误处理。社区影响：对生产环境可靠性至关重要。

### 2. [Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)
**优先级：P2 | 评论数：9 | 👍：1**

建议利用 Gemini 3 的原生 bash 亲和力，通过操作系统级沙箱化实现，无需外部依赖。此增强可显著提高安全性和模型效率。社区关注度：高级用户高度关注。

### 3. [Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)
**优先级：P1 | 评论数：8 | 👍：8**

当 Gemini CLI 调用通用智能体时，会无限挂起——简单操作（如创建文件夹）会卡住数小时。存在变通方法（禁用子智能体），但这限制了功能性。社区影响：阻塞核心工作流。

### 4. [AST-aware file reads, search, and mapping assessment](https://github.com/google-gemini/gemini-cli/issues/22745)
**优先级：P2 | 评论数：7 | 👍：1**

追踪 AST 感知工具调查的 epic，用于更精确的方法边界和减少 token 噪音。潜在显著效率提升。社区关注：战略级增强。

### 5. [Gemini doesn't use skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)
**优先级：P2 | 评论数：7 | 👍：0**

尽管拥有自定义技能（gradle、git）且描述清晰，Gemini 很少主动调用它们，除非有明确指示。社区挫败感：自定义技能投资未被充分利用。

### 6. [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)
**优先级：P2 | 评论数：5 | 👍：0**

浏览器智能体完全忽略 `settings.json` 中的配置覆盖，破坏了用户对自定义的期望。注册表正确读取设置，但执行时忽略它们。

### 7. [Browser Agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)
**优先级：P3 | 评论数：4 | 👍：0**

当前在锁定的浏览器配置上快速失败的策略阻止了持久会话中的优雅恢复。请求自动接管和锁恢复机制增强。

### 8. [Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
**优先级：P1 | 评论数：4 | 👍：1**

浏览器子智能体在 Wayland 环境下完全失败，限制了 Linux 桌面兼容性。社区影响：Linux 用户影响重大。

### 9. [Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)
**优先级：P2 | 评论数：3 | 👍：1**

模型偶尔使用危险命令（`git reset --force`），而存在更安全的替代方案。请求增强以在复杂场景中阻止破坏性操作。

### 10. [Bugreport doesn't include subagent context](https://github.com/google-gemini/gemini-cli/issues/21763)
**优先级：P1 | 评论数：2 | 👍：0**

`/bug` 命令仅捕获主会话上下文，遗漏了有助于调试的关键子智能体信息。社区影响：阻碍故障排除。

---

## 关键 PR 进展

### 1. [Telemetry: expose skill_name in safe tool metadata whitelist](https://github.com/google-gemini/gemini-cli/pull/30010) ✅
**状态：已关闭 | 领域：企业级**

当 `logPrompts` 禁用时，在遥测元数据中暴露 `skill_name`，在无 PII 风险的情况下实现更好的可观测性。

### 2. [CI: add OSS Exit Gate npm publishing workflow](https://github.com/google-gemini/gemini-cli/pull/30009) ✅
**状态：已关闭**

添加通过 Google OSS 管道自动发布 `@google/gemini-cli`、`@google/gemini-cli-a2a-server` 和 `@google/gemini-cli-core` 的工作流。

### 3. [CLI: use default value when env var is set but empty](https://github.com/google-gemini/gemini-cli/pull/30003) ✅
**状态：已关闭**

修复当 VAR 被设置但为空时 `${VAR:-default}` 使用默认值，与 Bash/POSIX 语义对齐。对配置可预测性至关重要。

### 4. [ACP: fire SessionStart and Notification hooks](https://github.com/google-gemini/gemini-cli/pull/30148) 🔄
**状态：进行中**

确保钩子在 ACP 模式下正确触发，提高跨执行环境的一致性。

### 5. [CLI: report hook-blocked prompts over ACP](https://github.com/google-gemini/gemini-cli/pull/30134) 🔄
**状态：进行中**

当提示被 ACP 模式下的钩子阻止时提高可见性，提供清晰的反馈而非静默失败。

### 6. [CLI: initialize output listeners and flush stderr in ACP mode](https://github.com/google-gemini/gemini-cli/pull/30144) 🔄
**状态：进行中**

在 ACP 会话期间实时 stderr 输出，而非缓冲到进程退出，改善调试和 UX。

### 7. [Preserve Unicode prompts and strip ANSI fragments](https://github.com/google-gemini/gemini-cli/pull/30220) ✅
**状态：已关闭**

修复会话预览和搜索中的国际字符支持及 ANSI 转义序列处理——对非英语用户至关重要。

### 8. [Avoid blocking PowerShell parsing during shell checks](https://github.com/google-gemini/gemini-cli/pull/30247) 🔄
**状态：进行中 | 优先级：P2**

在 Windows 上 PowerShell 命令解析期间防止 Node.js 事件循环阻塞，消除加载动画冻结。

### 9. [Quote IDE CLI path for cmd.exe on Windows](https://github.com/google-gemini/gemini-cli/pull/30246) 🔄
**状态：进行中**

修复当 VS Code 在带空格的文件夹中时 `/ide install` 失败——解决常见的 Windows 安装路径问题。

### 10. [Support skill activation via /skill-name in non-interactive mode](https://github.com/google-gemini/gemini-cli/pull/29546) 🔄
**状态：进行中 | 优先级：P2 | 需要帮助**

将斜杠命令支持扩展到交互式 UI 外的技能激活，实现脚本和自动化用例。

---

## 功能需求趋势

对开放 issue 的分析揭示了几个主要主题：

| 主题 | 频率 | 关键 Issue |
|-------|-----------|------------|
| **子智能体智能化** | 高 | 自主技能/子智能体调用、恢复处理、上下文保持 |
| **浏览器智能体增强** | 中高 | Wayland 支持、设置覆盖、会话弹性、锁恢复 |
| **Token 效率** | 中 | AST 感知工具、精确代码读取、优雅提取逻辑 |
| **Shell 执行安全性** | 中 | 破坏性命令预防、临时脚本管理、PowerShell 优化 |
| **智能体自我意识** | 中 | CLI 参数理解、热键文档、自我执行能力 |
| **持久化与状态** | 中 | 基于文件的跟踪、工作树保留、会话连续性 |

---

## 开发者痛点

1. **子智能体行为不可靠** — 频繁挂起、虚假成功报告以及 bug 报告中缺乏上下文，使多智能体工作流调试变得困难。

2. **浏览器智能体不一致** — 平台特定失败（Wayland）、忽略设置以及糟糕的锁恢复为自动化用例创造障碍。

3. **自定义技能未被充分利用** — 尽管自定义技能和子智能体有投资，模型很少自主利用它们，降低了其价值。

4. **Windows PowerShell 性能** — 同步解析阻塞整个 UI，使 Windows 环境相比 Unix 系统感觉迟钝。

5. **大型代码库 Token 膨胀** — 消防水带式文件读取消耗过多上下文，模型创建分散的临时脚本使清理复杂化。

6. **配置清晰度** — 环境变量占位符解析语义与记录行为不同，导致意外的配置失败。

7. **ACP 模式成熟度** — ACP 模式中的钩子执行和输出缓冲落后于交互模式，在执行上下文间造成不一致行为。

---

*日报数据来源于 GitHub。获取实时更新，请关注 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)。*
</think>


# Gemini CLI 社区日报

**日期：** 2026-11-12
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日要闻

社区持续聚焦智能体可靠性问题，多个 P1 级 bug 均与子智能体行为和恢复机制相关。本周期的关键 PR 着重解决了会话预览中的 Unicode 处理、Windows PowerShell 解析性能以及 ACP 模式钩子执行等核心体验问题。生态持续演进，遥测功能增强为企业的可观测性提供更好支持，CI/CD 工作流也在不断完善。

---

## 版本发布

**过去 24 小时内无新版本发布。**

---

## 热门 Issue

### 1. [Subagent recovery reports GOAL success after MAX_TURNS](https://github.com/google-gemini/gemini-cli/issues/22323)
**优先级：P1 | 评论数：13 | 👍：2**

`codebase_investigator` 子智能体在达到最大轮次限制且未完成分析时，仍会虚假报告成功状态。这掩盖了实际失败并阻止了适当的错误处理。社区影响：对生产环境的可靠性至关重要。

### 2. [Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)
**优先级：P2 | 评论数：9 | 👍：1**

提议利用 Gemini 3 的原生 bash 亲和力，通过操作系统级沙箱实现，无需外部依赖。此增强可能显著提升安全性和模型效果。社区关注度：高级用户需求强烈。

### 3. [Generalist agent hangs indefinitely](https://github.com/google-gemini/gemini-cli/issues/21409)
**优先级：P1 | 评论数：8 | 👍：8**

Gemini CLI 调用通用智能体时会无限挂起——简单操作（如创建文件夹）会卡住数小时。存在变通方案（禁用子智能体），但这会牺牲功能性。社区影响：核心工作流被阻塞。

### 4. [AST-aware file reads, search, and mapping assessment](https://github.com/google-gemini/gemini-cli/issues/22745)
**优先级：P2 | 评论数：7 | 👍：1**

追踪 AST 感知工具调研的史诗任务，以实现更精确的方法边界定位并减少 token 噪音。潜在效率提升显著。社区关注：战略性增强方向。

### 5. [Gemini doesn't use skills and sub-agents autonomously](https://github.com/google-gemini/gemini-cli/issues/21968)
**优先级：P2 | 评论数：7 | 👍：0**

尽管配置了自定义技能（gradle、git）且描述清晰，Gemini 很少主动调用它们，除非用户明确指示。社区痛点：自定义技能投资未被充分利用。

### 6. [Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)
**优先级：P2 | 评论数：5 | 👍：0**

浏览器智能体完全忽略 `settings.json` 中的配置覆盖项，破坏了用户对自定义行为的预期。注册表正确读取了设置，但执行层却忽略它们。

### 7. [Browser Agent resilience: session takeover and lock recovery](https://github.com/google-gemini/gemini-cli/issues/22232)
**优先级：P3 | 评论数：4 | 👍：0**

当前在检测到浏览器配置被锁定时快速失败的策略，无法在持久会话中实现优雅恢复。请求增加自动接管和锁恢复机制。

### 8. [Browser subagent fails on Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
**优先级：P1 | 评论数：4 | 👍：1**

浏览器子智能体在 Wayland 环境下完全无法运行，限制了 Linux 桌面的兼容性。社区影响：Linux 用户受影响显著。

### 9. [Agent should discourage destructive behavior](https://github.com/google-gemini/gemini-cli/issues/22672)
**优先级：P2 | 评论数：3 | 👍：1**

模型偶尔会使用危险命令（如 `git reset --force`），而存在更安全的替代方案。请求在复杂场景中增加阻止破坏性操作的增强。

### 10. [Bugreport doesn't include subagent context](https://github.com/google-gemini/gemini-cli/issues/21763)
**优先级：P1 | 评论数：2 | 👍：0**

`/bug` 命令仅捕获主会话上下文，遗漏了对调试至关重要的子智能体信息。社区影响：阻碍问题排查。

---

## 关键 PR 进展

### 1. [Telemetry: expose skill_name in safe tool metadata whitelist](https://github.com/google-gemini/gemini-cli/pull/30010) ✅
**状态：已关闭 | 领域：企业级**

当 `logPrompts` 禁用时，在遥测元数据中暴露 `skill_name`，在无 PII 泄露风险的情况下实现更好的可观测性。

### 2. [CI: add OSS Exit Gate npm publishing workflow](https://github.com/google-gemini/gemini-cli/pull/30009) ✅
**状态：已关闭**

新增通过 Google OSS 管道自动发布 `@google/gemini-cli`、`@google/gemini-cli-a2a-server` 和 `@google/gemini-cli-core` 的工作流。

### 3. [CLI: use default value when env var is set but empty](https://github.com/google-gemini/gemini-cli/pull/30003) ✅
**状态：已关闭**

修复当环境变量被设置但为空时 `${VAR:-default}` 仍使用默认值的问题，与 Bash/POSIX 语义对齐。对配置的可预测性至关重要。

### 4. [ACP: fire SessionStart and Notification hooks](https://github.com/google-gemini/gemini-cli/pull/30148) 🔄
**状态：进行中**

确保钩子在 ACP 模式下正确触发，提升跨执行环境的一致性。

### 5. [CLI: report hook-blocked prompts over ACP](https://github.com/google-gemini/gemini-cli/pull/30134) 🔄
**状态：进行中**

当提示被 ACP 模式下的钩子阻止时提高可见性，提供清晰的反馈而非静默失败。

### 6. [CLI: initialize output listeners and flush stderr in ACP mode](https://github.com/google-gemini/gemini-cli/pull/30144) 🔄
**状态：进行中**

在 ACP 会话期间实时输出 stderr，而非缓冲到进程退出时再输出，改善调试体验和用户交互。

### 7. [Preserve Unicode prompts and strip ANSI fragments](https://github.com/google-gemini/gemini-cli/pull/30220) ✅
**状态：已关闭**

修复会话预览和搜索中的国际字符支持及 ANSI 转义序列处理——对非英语用户至关重要。

### 8. [Avoid blocking PowerShell parsing during shell checks](https://github.com/google-gemini/gemini-cli/pull/30247) 🔄
**状态：进行中 | 优先级：P2**

在 Windows 上 PowerShell 命令解析期间防止 Node.js 事件循环阻塞，消除加载动画冻结现象。

### 9. [Quote IDE CLI path for cmd.exe on Windows](https://github.com/google-gemini/gemini-cli/pull/30246) 🔄
**状态：进行中**

修复当 VS Code 安装在带空格的文件夹中时 `/ide install` 失败的问题——解决常见的 Windows 安装路径场景。

### 10. [Support skill activation via /skill-name in non-interactive mode](https://github.com/google-gemini/gemini-cli/pull/29546) 🔄
**状态：进行中 | 优先级：P2 | 需要帮助**

将斜杠命令支持扩展到交互式 UI 之外的技能激活场景，实现脚本和自动化用例。

---

## 功能需求趋势

对开放 issue 的分析揭示了几个主要主题：

| 主题 | 频率 | 关键 Issue |
|-------|-----------|------------|
| **子智能体智能化** | 高 | 自主技能/子智能体调用、恢复处理、上下文保持 |
| **浏览器智能体增强** | 中高 | Wayland 支持、设置覆盖、会话弹性、锁恢复 |
| **Token 效率优化** | 中 | AST 感知工具、精确代码读取、智能提取逻辑 |
| **Shell 执行安全性** | 中 | 破坏性命令预防、临时脚本管理、PowerShell 优化 |
| **智能体自我意识** | 中 | CLI 参数理解、热键文档、自我执行能力 |
| **持久化与状态管理** | 中 | 基于文件的跟踪、工作树保留、会话连续性 |

---

## 开发者痛点

1. **子智能体行为不可靠** — 频繁挂起、虚假成功报告以及 bug 报告中缺乏上下文，使多智能体工作流调试困难重重。

2. **浏览器智能体不一致** — 平台特定失败（Wayland）、设置被忽略、锁恢复机制薄弱，为自动化用例制造障碍。

3. **自定义技能未被充分利用** — 尽管投入资源构建自定义技能和子智能体，模型很少主动利用它们，价值难以体现。

4. **Windows PowerShell 性能问题** — 同步解析阻塞整个 UI，使 Windows 环境相比 Unix 系统明显迟钝。

5. **大型代码库 Token 膨胀** — 粗放式文件读取消耗过多上下文，模型创建的分散临时脚本使清理工作复杂化。

6. **配置语义不清晰** — 环境变量占位符解析与文档描述的行为存在差异，导致意外的配置失败。

7. **ACP 模式成熟度不足** — ACP 模式中的钩子执行和输出缓冲落后于交互模式，在不同执行上下文间造成行为不一致。

---

*日报数据来源于 GitHub。获取实时更新，请关注 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully:

---

# GitHub Copilot CLI Community Digest

**Date:** 2026-11-12
**Source:** github.com/github/copilot-cli

---

## 1. Today's Highlights

The Copilot CLI team shipped two patch releases (v1.0.110-2 and v1.0.110-3) addressing critical UX and stability issues, including fixes for broken clipboard operations on WSL2 ARM64 and improved error handling for deleted working directories. The community continues to report active issues around session management, MCP authentication, and cross-platform compatibility, with 42 total issues updated in the past 24 hours and zero PRs merged.

---

## 2. Releases

### v1.0.110-3
**Released:** 2026-11-12

| Category | Change |
|----------|--------|
| **Fixed** | Eliminated unnecessary error popups during Microsoft Entra sign-in when an organization account is available |
| **Fixed** | Screen readers now identify the current session and announce when sessions need attention or are idle in the Sessions list |
| **Fixed** | `/usage` model rows now wrap at terminal width instead of breaking awkwardly |

### v1.0.110-2
**Released:** 2026-11-12

| Category | Change |


|----------|--------|
| **Fixed** | Partial responses and reasoning from interrupted or failed attempts are now correctly labeled as incomplete while preserving their text |
| **Fixed** | Starting `copilot` from a directory that has since been deleted now displays a clear error message instead of crashing with a Node stack trace |

---

## 3. Hot Issues

### 1. WSL2 (ARM64): `/copy` fails with `clip.exe exited with code 1` due to cmd.exe quoting
**#3534** | Status: CLOSED | Comments: 9

The first patch release focused on improving error handling and user experience. Specifically, it addressed scenarios where previous partial or failed attempts could be confusing. Now, when an operation is interrupted or fails, the system clearly labels these attempts as incomplete, maintaining text integrity. Additionally, a common frustration with deleted directories has been resolved, providing users with a more graceful error message instead of a technical crash.

The community has highlighted several critical issues, with clipboard operations on WSL2 ARM64 systems being a significant pain point. These clipboard problems have been a long-standing challenge, indicating complex cross-platform compatibility issues that impact developer workflows.

The next issue involves a regression in session handling. ACP sessions have stopped indexing conversation history and usage in the session store database, breaking core functionality for users who rely on tracking their interaction history. This regression, introduced in version 1.0.89, represents a serious workflow disruption.

A related authentication problem emerged with Google Workspace MCP OAuth. Users are experiencing authentication failures due to a subtle trailing-slash issue in their account configuration, which prevents seamless integration with protected resources.

The slash command for allowing permissions continues to show persistent permission prompts, undermining the expected behavior of suppressing execution dialogs. This creates friction in interactive sessions and contradicts the command's intended functionality.

Context window handling has also shown instability, with a previous fix proving incomplete. The rollover mechanism continues to fail, suggesting underlying complexity in managing conversational context and system resources.

These technical challenges highlight the ongoing need for robust error handling, cross-platform compatibility, and consistent authentication mechanisms in complex developer tools. 用户需要一种灵活的方式将现有的聊天会话关联到特定项目中，以便保持对话上下文和工作流的连贯性。

升级到 Pro 版本并完成付款后，CLI 仍然报告模型不可用，这可能源于订阅配置或账户变更后的认证问题。

用户期望能够灵活配置语音转录语言设置，以获得更好的国际化体验，特别是对于非英语用户。

过去 24 小时内没有合并或更新任何 Pull Request，开发团队似乎更专注于针对现有问题的补丁发布，而非新功能开发。

当前未提供讨论数据。

分析开放问题揭示了以下主要功能请求主题：

| 主题 | 频率 | 代表性问题 |
|-------|-----------|----------------------|
| **会话管理** | 高 | 将聊天附加到 Projects (#4922)、会话摘要显示 (#2330)、恢复会话 MCP 工具变更 (#5359) |
| **MCP 集成** | 高 | 禁用内置斜杠命令 (#5375)、本地 stdio MCP 服务器掉线 (#4920)、Google Workspace OAuth (#4606) |
| **配置灵活性** | 中 | 可配置语音语言 (#5226)、禁用内置斜杠命令 (#5375)、`/config` 交互式编辑器 (#3352) |
| **平台特定优化** | 中 | WSL2 剪贴板 (#3534)、Linux ARM64 执行 (#5424)、VS Code 文件链接 (#5423) |
| **权限与安全** | 中 | `/allow-all` 有效性 (#2955)、权限提示超时 (#5018) |

开发者最常见的痛点集中在几个关键领域：

1. **跨平台一致性** — WSL2 剪贴板故障、Windows 沙箱 .NET 构建问题、Linux ARM64 执行错误和 VS Code 在 Linux 上的集成问题表明非 macOS 开发者仍面临持续挑战。

2. **MCP 认证与生命周期** — Google Workspace OAuth 失败、过期动态客户端注册无法刷新、MCP 服务器重连问题给依赖 MCP 扩展的用户带来困扰。

3. **会话持久化与恢复** — ACP 会话索引回归、上下文窗口回滚失败、会话 ID 交换问题导致开发者意外丢失对话历史和上下文。

4. **权限系统 UX** — `/allow-all` 无法抑制提示，权限主机确认超时表明权限模型需要改进，以获得更流畅的交互体验。

5. **模型/Provider API 错误** — HTTP 422 阻止合法请求，自定义提供商的 400 错误，订阅变更后的模型可用性问题暗示 AI 后端接口不稳定。

6. **终端 UI 边缘情况** — 简洁转录模式渲染问题、`/usage` 表格换行、API 路径被误

识别为斜杠命令等终端特定 UX 问题突出显示。

I'm translating the developer pain points section, focusing on the key challenges developers are experiencing with the platform. The content highlights six critical areas of concern that impact user experience and system reliability. The translation maintains the original structure and technical terminology while presenting the information in Chinese. I'll carefully translate the technical digest into Chinese, ensuring precise and natural-sounding technical language while preserving the original structure and content.

The technical digest appears to be a comprehensive community report for GitHub Copilot CLI, covering recent updates, issue tracking, and feature requests. I'll focus on maintaining the technical accuracy and readability of the translation.

The digest includes details about patch releases addressing critical user experience and stability issues, highlighting improvements in clipboard operations and error handling. The community continues to actively report and discuss various technical challenges, with significant activity around session management, authentication, and cross-platform compatibility.

Two recent patch releases (v1.0.110-2 and v1.0.110-3) have been shipped, targeting specific technical problems like unnecessary error popups during sign-in processes and improving screen reader identification of current sessions. These updates demonstrate ongoing refinement of the CLI's user interface and accessibility features.

In the latest release, critical fixes include preventing terminal text wrapping issues, ensuring partial responses are correctly labeled, and providing clear error messages when attempting to access deleted directories. The development team has addressed several key technical challenges, though no new pull requests were merged recently.

The community has highlighted multiple pressing issues, with WSL2 ARM64 clipboard operations representing a significant pain point. These clipboard failures have persisted across different system configurations, causing frustration for developers using Copilot CLI in Windows Subsystem for Linux environments.

Specific technical challenges include ACP session indexing problems, OAuth failures with Google Workspace, and persistent permission dialogs despite using `/allow-all`. The team is actively investigating these interconnected issues, which impact developer productivity across various development workflows.

A critical context window rollover failure was recently closed, with users reporting recurring technical obstacles that suggest complex underlying system interactions. HTTP 422 errors are currently blocking legitimate debugging workflows, further complicating the user experience.

The latest development involves a 400 `reasoning_text` error during thinking mode interactions, particularly when runtime-synthesized assistant turns occur after background shell processes terminate. This appears to specifically affect custom OpenAI-compatible providers like DeepSeek, indicating potential API interaction challenges.

Developers have also proposed enhancements like attaching existing chats to projects and addressing model availability issues after account upgrades. A voice configuration request highlights ongoing needs for more flexible interaction modes, with no new pull requests merged in the past 24 hours.

Feature request trends show high demand for session management, MCP integration, and configuration flexibility. Pain points center on cross-platform inconsistencies, particularly around WSL2 clipboard and authentication challenges that create friction for users.

Key technical frustrations emerge from session persistence problems, permissions system usability, and API errors that block legitimate developer workflows. These issues suggest deeper architectural challenges in maintaining consistent cross-platform performance.

The most significant pain points include MCP authentication failures, unpredictable session behaviors, and permission-related interaction disruptions that undermine developer confidence in the tool's reliability.

Specific technical challenges manifest in clipboard operations, model availability, and API response handling across different environments, particularly highlighting cross-platform compatibility and user experience limitations.
</think>


# GitHub Copilot CLI 社区周报

**日期：** 2026-11-12
**来源：** github.com/github/copilot-cli

---

## 1. 今日要点

Copilot CLI 团队发布了两个补丁版本（v1.0.110-2 和 v1.0.110-3），修复了关键的用户体验和稳定性问题，包括 WSL2 ARM64 环境下的剪贴板操作故障，以及改进已删除工作目录的错误处理。过去 24 小时内社区共更新了 42 个 issues，暂无 PR 合并，热点问题主要集中在会话管理、MCP 认证和跨平台兼容性方面。

---

## 2. 版本发布

### v1.0.110-3
**发布日期：** 2026-11-12

| 类别 | 变更内容 |
|----------|--------|
| **修复** | 消除了使用组织账号登录 Microsoft Entra 时弹出不必要错误提示的问题 |
| **修复** | 屏幕阅读器现在能正确识别当前会话，并在会话列表中播报需要关注或处于空闲状态的会话 |
| **修复** | `/usage` 的模型行现在能根据终端宽度自动换行，不再出现尴尬的截断 |

### v1.0.110-2
**发布日期：** 2026-11-12

| 类别 | 变更内容 |
|----------|--------|
| **修复** | 中断或失败的部分响应和推理内容现在能正确标记为未完成，同时保留其文本 |
| **修复** | 从已被删除的目录启动 `copilot` 时，现在会显示清晰的错误信息，而非抛出 Node 堆栈跟踪导致崩溃 |

---

## 3. 热门 issue

### 1. WSL2 (ARM64)：`/copy` 因 cmd.exe 引号处理问题导致 `clip.exe exited with code 1` 失败
**#3534** | 状态：已关闭 | 评论：9 | 👍：7
**链接：** https://github.com/github/copilot-cli/issues/3534

Windows `cmd.exe` 包装器中的引号处理缺陷导致剪贴板操作在 WSL2 ARM64 系统上失败。这是过去 24 小时内讨论最多的 issue，反映了 WSL2 环境中用户面临的严重痛点。

### 2. v1.0.89 回归：ACP 会话停止向 session-store.db 索引对话历史和用量数据
**#5053** | 状态：开启 | 评论：4 | 👍：1
**链接：** https://github.com/github/copilot-cli/issues/5053

v1.0.89 引入的回归问题导致 ACP（Agentic Code Protocol）会话无法正常写入本地 `session-store.db`，破坏了对话历史和用量追踪功能。用户无法回顾过去的交互内容或追踪用量指标。

### 3. Google Workspace MCP OAuth 在 accounts.google.com issuer 尾部斜杠不匹配时失败
**#4606** | 状态：开启 | 评论：4 | 👍：2
**链接：** https://github.com/github/copilot-cli/issues/4606

原生 HTTP MCP 认证因 protected-resource 元数据中的尾部斜杠不匹配问题，无法成功对接 Google 官方 Workspace MCP 端点。这阻碍了企业用户对 Google Workspace MCP 服务器的认证流程。

### 4. `/allow-all` 无法抑制 bash 工具执行提示
**#2955** | 状态：开启 | 评论：4 | 👍：2
**链接：** https://github.com/github/copilot-cli/issues/2955

尽管文档记载了 `/allow-all` 的行为，但 CLI 仍会在每次 bash/shell 工具调用时显示权限对话框。这削弱了权限管理功能的可用性，在交互式会话中造成了不必要的摩擦。

### 5. 上下文窗口回滚在 #5205 关闭后仍然失败：checkpoint.md 缺失问题在 v1.0.105 复现
**#5312** | 状态：已关闭 | 评论：4 | 👍：0
**链接：** https://github.com/github/copilot-cli/issues/5312

用户在 #5205 关闭且无关联 PR、commit 或发布说明的情况下重新打开此 issue。上下文窗口回滚失败问题持续发生，暗示原始修复不完整或已回退。

### 6. 重复的 HTTP 422 网络安全风险标记阻止了合法的本地 flaky-test 调试
**#5335** | 状态：开启 | 评论：3 | 👍：0
**链接：** https://github.com/github/copilot-cli/issues/5335

过于激进的 HTTP 422 拦截正在阻止涉及间歇性测试崩溃的合法调试工作流。开发者无法调查本地开发问题，严重影响了工作效率。

### 7. reasoning 模式中 HTTP 400 错误：必须回传 `reasoning_text` — 由后台 shell 退出后运行时合成的 assistant turn 触发
**#5145** | 状态：开启 | 评论：3 | 👍：1
**链接：** https://github.com/github/copilot-cli/issues/5145

自定义 OpenAI 兼容提供商（如 DeepSeek）在模型调用跟随运行时合成的无模型 assistant turn 时会遇到 HTTP 400 错误。这破坏了使用自定义提供商配置用户的功能体验。

### 8. 功能请求：将现有聊天或会话附加到 Project
**#4922** | 状态：开启 | 评论：2 | 👍：0
**链接：** https://github.com/github/copilot-cli/issues/4922

GitHub Copilot 应用将普通聊天和 Project 会话严格分离，无法在会话开始后将对话关联到 Project。用户必须创建新会话，从而丢失原始对话的上下文。

### 9. 升级并支付旧账单后无模型可用
**#5419** | 状态：开启 | 评论：1 | 👍：0
**链接：** https://github.com/github/copilot-cli/issues/5419

用户反映升级到 Pro 并完成支付后，CLI 仍报告"无可用模型"。这表明订阅配置或账户变更后的身份验证刷新可能存在问题。

### 10. Voice：使转录语言可配置（当前硬编码为 `"auto"`）
**#5226** | 状态：开启 | 评论：1 | 👍：1
**链接：** https://github.com/github/copilot-cli/issues/5226

`/voice` 命令对 Nemotron 流式模型使用自动语言检测，这会导致非英语使用者的转录延迟。用户希望能够配置语言设置以获得更好的国际化体验。

---

## 4. 重要 PR 进展

过去 24 小时内无 PR 合并或更新。开发团队似乎正专注于为现有 issue 发布补丁版本，而非新功能开发。

---

## 5. 热门讨论

*本期无讨论数据。*

---

## 6. 功能请求趋势

对 open issue 的分析揭示了以下主要功能请求主题：

| 主题 | 频率 | 代表性 issue |
|-------|-----------|----------------------|
| **会话管理** | 高 | 将聊天附加到 Projects (#4922)、会话摘要显示 (#2330)、恢复会话 MCP 工具变更 (#5359) |
| **MCP 集成** | 高 | 禁用内置斜杠命令 (#5375)、本地 stdio MCP 服务器掉线 (#4920)、Google Workspace OAuth (#4606) |
| **配置灵活性** | 中 | 可配置语音语言 (#5226)、禁用内置斜杠命令 (#5375)、`/config` 交互式编辑器 (#3352) |
| **平台特定优化** | 中 | WSL2 剪贴板 (#3534)、Linux ARM64 执行 (#5424)、VS Code 文件链接 (#5423) |
| **权限与安全** | 中 | `/allow-all` 有效性 (#2955)、权限提示超时 (#5018) |

---

## 7. 开发者痛点

社区最常反馈的挫败感集中在：

1. **跨平台一致性不足** — WSL2 剪贴板故障、Windows 沙箱 .NET 构建问题、Linux ARM64 执行错误和 VS Code 在 Linux 上的集成问题表明非 macOS 开发者仍面临持续挑战。

2. **MCP 认证与生命周期问题** — Google Workspace OAuth 失败、过期动态客户端注册无法刷新、MCP 服务器重连问题给依赖 MCP 扩展的用户带来困扰。

3. **会话持久化与恢复缺陷** — ACP 会话索引回归、上下文窗口回滚失败、会话 ID 交换问题导致开发者意外丢失对话历史和上下文。

4. **权限系统用户体验问题** — `/allow-all` 无法抑制提示，权限主机确认超时表明权限模型需要改进，以获得更流畅的交互体验。

5. **模型/Provider API 错误频发** — HTTP 422 阻止合法请求、自定义提供商的 400 错误、订阅变更后的模型可用性问题暗示 AI 后端接口存在不稳定性。

6. **终端 UI 边界情况** — 简洁转录模式渲染问题、`/usage` 表格换行、API 路径被误识别为斜杠命令等终端特定 UX 问题突出显示。

---

*本期周报完。下一期：2026-11-13*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me carefully translate it following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure exactly
3. Keep URLs, code, numbers, dates verbatim
4. Keep project names, slugs, usernames, version tags, file paths, config identifiers in original form
5. Use natural technical Chinese register

Let me translate section by section:

---

# OpenCode Community Digest — 2026-11-12

→ # OpenCode 社区速报 — 2026-11-12

## Today's Highlights

→ ## 今日要点

The OpenCode community saw significant activity with bug fixes targeting clipboard functionality, terminal polling efficiency, and dialog consistency across platforms. A new experimental feature for auto-balancing OpenCode Go accounts by usage is under review, while the process-daemon package received a minor protocol update (v0.5.2). The free tier experience remains a pain point, generating 355 comments in a dedicated mega-thread.

→ OpenCode 社区今日活跃度较高，主要修复集中在剪贴板功能、终端轮询效率和跨平台对话框一致性方面。一项按用量自动均衡 OpenCode Go 账户的新实验性功能正在审核中，同时 process-daemon 包发布了小版本协议更新（v0.5.2）。免费套餐体验仍是痛点，在专属 mega-thread 中引发了 355 条评论。

---

## Releases

→ ## 版本发布

### process-daemon v0.5.2
A minor protocol update to the `opencode-pty` package, advancing protocol version to 8. Published to npm as `@opencode/pty@0.5.2`.

→ ### process-daemon v0.5.2
`opencode-pty` 包的协议小版本更新，协议版本升至 8。已发布至 npm，标识为 `@opencode/pty@0.5.2`。

---

## Hot Issues

→ ## 热门 Issue

| # | Issue | Summary | Status | Impact |
|---|-------|---------|--------|--------|


| #59387 | **[zen] Free tier issues** | Mega-thread consolidating free usage exceeded errors, reset failures, and subscription prompts. 355 comments from affected users. | OPEN | 🔴 High — Core UX for free users |

→ | # | Issue | 概述 | 状态 | 影响 |
|---|-------|---------|--------|--------|
| #59387 | **[zen] Free tier issues** | 整合免费用量超限报错、重置失败和订阅提示的 mega-thread，共 355 条用户反馈。 | OPEN | 🔴 高 — 面向免费用户的核心交互体验 |

I'll continue translating the next issue entry, focusing on the clipboard functionality problem with 160 comments and 135 👍.

The issue involves a clipboard copy malfunction where text selection from responses fails to copy to the system clipboard. It has been resolved, representing a significant bug for desktop and terminal user interfaces.

A plugin ecosystem gap exists with V2 TUI, as the new version lacks an equivalent to V1's `client.tui.appendPrompt()` method, potentially limiting plugin extensibility. This medium-impact issue has garnered 12 comments and remains open.

A full-screen reconnection prompt appearing every 10 seconds severely disrupts user interaction for Home Assistant deployments, preventing any typing. This high-priority issue, marked in orange, impacts enterprise and self-hosted environments.

The core problem involves a configuration management flaw where custom agent settings silently revert after partial configuration reload failures. This medium-priority issue specifically impacts custom model and permission configurations, creating a potential silent data corruption scenario for advanced users.

Ripgrep binary downloads frequently fail behind Windows system proxies, particularly in corporate network environments. The tool silently ignores WinINET proxy settings, causing persistent download failures for Windows users.

A recent desktop browser tab regression on Windows prevents attachment functionality, which has been closed after resolution. Another terminal color probe issue involves SSH connections where color detection replies fragment, potentially contaminating input prompts with unexpected text sequences.

The mobile fix addresses a critical Android 17 device networking problem where missing local network permissions block server pairing, representing a significant regression affecting mobile users.

Wide monitor users experience session column display limitations, with hardcoded width restrictions causing potential content truncation for detailed diagrams or complex tables.

The developer notes reveal nuanced technical challenges across platform-specific environments, highlighting persistent clipboard and network configuration issues in desktop and terminal interfaces.

Key pain points include free tier reliability concerns, with over 355 user comments indicating significant friction in reset mechanisms, subscription interactions, and message delivery. Windows desktop environments show particularly complex challenges, with multiple reports of browser tool failures, installation script complications, and network proxy problems.

Terminal user interface stability remains a critical concern. Technical issues like OSC escape sequence handling, shell completion notification accumulation, and scroll behavior inconsistencies are generating substantial user feedback. Configuration hot-reload mechanisms appear fragile, with potential for silent data corruption when partial configuration reloads occur unexpectedly.

Clipboard interaction across different environments continues to present persistent usability challenges, suggesting underlying system integration complexities that require comprehensive investigation.

Mobile platform compatibility, especially for Android 17, reveals significant pairing protocol vulnerabilities that could disrupt remote server connectivity and user experience.

*Generated from GitHub data for [anomalyco/opencode](https://github.com/anomalyco/opencode) on 2026-11-12.*

→ *数据来源：anomalyco/opencode GitHub，2026-11-12。*
</think>


# OpenCode 社区速报 — 2026-11-12

## 今日要点

OpenCode 社区今日活跃度较高，主要修复集中在剪贴板功能、终端轮询效率和跨平台对话框一致性方面。一项按用量自动均衡 OpenCode Go 账户的新实验性功能正在审核中，同时 process-daemon 包发布了小版本协议更新（v0.5.2）。免费套餐体验仍是痛点，在专属 mega-thread 中引发了 355 条评论。

---

## 版本发布

### process-daemon v0.5.2
`opencode-pty` 包的协议小版本更新，协议版本升至 8。已发布至 npm，标识为 `@opencode/pty@0.5.2`。

---

## 热门 Issue

| # | Issue | 概述 | 状态 | 影响 |
|---|-------|---------|--------|--------|
| #59387 | **[zen] Free tier issues** | 整合免费用量超限报错、重置失败和订阅提示的 mega-thread，共 355 条用户反馈。 | OPEN | 🔴 高 — 面向免费用户的核心交互体验 |
| #4283 | **Copy To Clipboard not working** | 从响应中选中文本后无法复制到系统剪贴板。160 条评论，135 👍。 | CLOSED | 🟢 已修复 — 桌面端/TUI 重大交互缺陷 |
| #12393 | **How to unarchive in desktop** | 用户不清楚如何取消归档会话。21 条评论。 | CLOSED | 🟢 已修复 — 用户引导问题 |
| #62797 | **Plan mode reminder persists** | Plan mode 提醒在退出后仍然残留。13 条评论。 | CLOSED | 🟢 已修复 — TUI bug |
| #51209 | **Expose V2 TUI composer to plugins** | V1 插件使用 `client.tui.appendPrompt()`，但 V2 缺少等价 API。12 条评论。 | OPEN | 🟡 中 — 插件生态断层 |
| #54513 | **Continuous polling /dev/snd/timer** | 声音播放完成后仍在持续轮询 `/dev/snd/timer`，导致 CPU 占用。9 条评论。 | CLOSED | 🟢 已修复 — 性能问题 |
| #63345 | **Shell completion notices accumulate** | Shell 补全提示在当前输入下方不断累积。7 条评论。 | CLOSED | 🟢 已修复 — TUI bug |
| #63417 | **Client reconnect splash every ≤10s** | HA（Home Assistant）部署下每 10 秒弹一次全屏重连提示，导致无法输入。 | OPEN | 🔴 高 — 企业/自托管用户的阻断性问题 |
| #63229 | **Windows desktop: browser tab missing** | Windows 桌面版浏览器工具附件失败。6 条评论。 | OPEN | 🟠 高 — Windows 平台回归 |
| #62002 | **default_agent silently reverts on hot config reload** | 自定义主 agent 的模型和权限在部分配置热重载失败后静默回退，无需重启即可触发。 | OPEN | 🟡 中 — 配置可靠性问题 |
| #51022 | **ripgrep auto-download fails behind Windows system proxy** | 按需下载 ripgrep 二进制文件时忽略 WinINET 代理设置，在企业内网环境下静默失败。 | OPEN | 🟡 中 — Windows 企业用户痛点 |
| #57345 | **Delayed OSC 10/11 replies leak into prompt** | SSH 环境下终端颜色探测回复碎片化泄漏到输入框，混入 `:ffff/ffff/ffff`。 | OPEN | 🟡 中 — SSH 工作流用户 |
| #62934 | **Android 0.3.0: can't connect to LAN servers (SDK 37 permission)** | 缺少 `ACCESS_LOCAL_NETWORK` 权限导致 Android 17 设备无法与局域网服务器配对。 | CLOSED | 🟢 已修复 — 移动端回归 |
| #54800 | **Session column capped at 744px on wide monitors** | 宽屏上 Mermaid 图表和表格因硬编码 max-width 被截断。v2.0.27 起从 1000px 下调。 | OPEN | 🟡 中 — 宽屏桌面用户体验 |
| #63352 | **Windows: install script requires WSL to install** | Windows 安装脚本在非 WSL 环境下无法正常运行。6 条评论。 | OPEN | 🟡 中 — Windows 安装体验 |
| #57517 | **Cursor position jumps after pressing Tab** | 按 Tab 补全后光标位置跳变到已完成的文本开头。5 条评论。 | OPEN | 🟡 中 — TUI 输入体验 |
| #63303 | **Unbounded parallel MCP calls cost a lot** | 多个 MCP 调用并行无上限执行导致用量激增，缺乏内置限流机制。 | OPEN | 🟡 中 — 成本控制 |
| #27110 | **Add concurrency limit for parallel agents** | 并行 agent 数量无上限导致高额用量，请求内置并发限制。 | OPEN | 🟡 中 — 成本控制 |
| #58666 | **TUI scroll jumps into thinking blocks** | TUI 中滚动行为跳入 thinking block 区域，导致输入丢失。5 条评论。 | OPEN | 🟡 中 — TUI 滚动行为 |
| #63352 | **Windows install script requires WSL to install** | 安装脚本在非 WSL 环境下无法工作。 | OPEN | 🟡 中 — Windows 安装问题 |
| #62981 | **Dynamic variant flyout sizing** | Variant flyout 菜单宽度固定，无法根据内容自适应调整。4 条评论。 | OPEN | 🟡 中 — 桌面端 UI 体验 |
| #63232 | **Scheduled/recurring automations** | 希望 OpenCode 原生支持定时任务（如每日抓取/扫描），目前只能依赖系统 cron 或 Task Scheduler。 | OPEN | 🟡 中 — 自动化功能需求 |

---

## 关键 PR 进展

| # | PR | 概述 | 状态 | 类别 |
|---|-----|---------|--------|----------|
| #63261 | **feat(core): publish MCP events on the bus** | 将 MCP 服务端事件发布到总线，使插件和客户端可在重连后订阅 MCP 事件。 | OPEN | ✨ 功能 |
| #63227 | **feat(core): bound subagent concurrency** | 为每个会话的并发 subagent 数量添加硬上限，解决用量控制问题（#63303, #27110）。 | OPEN | ✨ 功能 |
| #63354 | **feat(core): auto-balance opencode go accounts by usage** | 新增 `experimental.auto_balance_accounts` 实验标志，按凭证选择用量最低的账户，缓存 5 分钟。 | OPEN | ✨ 功能 |
| #63427 | **feat(app): hide and mute sessions in Recent sidebar** | 桌面端跟进：允许用户隐藏 Recent 列表中的行并通过会话搜索找回；mute 隐藏未读红点。 | CLOSED | ✨ 功能 |
| #54487 | **feat(core): add experimental.stopping continuation hook** | 新增 `experimental.stopping` continuation hook，允许插件在 agent 停止前执行清理操作。 | CLOSED | ✨ 功能 |
| #63424 | **fix(core): retry the ripgrep binary resolution after a failure** | 将 ripgrep 解析器移出 `Effect.cached`，使临时网络故障不会永久阻塞下载（#51022）。 | OPEN | 🐛 Bug 修复 |
| #63443 | **fix(ai): accept System One refusals and send PDFs in OpenRouter state** | 三个修复项，解决 System One 协议在 OpenRouter Decisions 兼容模式下的拒绝和 PDF 传输问题。 | CLOSED | 🐛 Bug 修复 |
| #63437 | **fix(ai): accept developer messages in native compaction responses** | 解决 #63434 — 允许 compaction 响应携带 developer 角色消息。 | OPEN | 🐛 Bug 修复 |
| #63432 | **fix(app): use consistent dialog sizes** | 统一对话框尺寸规格，消除分散的 override，统一为 `size="large"` (640×480)。 | OPEN | 🐛 Bug 修复 |
| #54434 | **fix(tui): stop audio output after playback** | 声音播放完成后取消 `/dev/snd/timer` 空闲轮询，解决 #54513。 | CLOSED | 🐛 Bug 修复 |
| #54498 | **fix(desktop): surface attachment size limit errors** | 将原生的附件大小超限错误通过桌面端 IPC 传递，包括新的 picker 状态机拒绝。 | CLOSED | 🐛 Bug 修复 |
| #63436 | **feat(core): stream fetch response bodies** | 对 fetch 响应体进行流式处理，改善大文件传输效率。 | OPEN | ✨ 功能 |

---

## 功能需求趋势

分析 open issue 和 PR 可见以下持续性需求：

| 趋势 | 证据 |
|-------|----------|
| **插件在 V2 中的可扩展性** | #51209 — V2 TUI composer 需要一个等价于 V1 `client.tui.appendPrompt()` 的插件钩子 |
| **定时/循环自动化** | #63232 — 原生任务调度器支持每日抓取/扫描作业，目前只能通过系统 cron 或 Task Scheduler 实现 |
| **账户管理与成本控制** | #63354 — 按用量自动均衡账户；#63227 — 限制 subagent 并发数 |
| **跨平台代理支持** | #51022 — Windows 系统代理（WinINET）未被 on-demand 工具下载尊重 |
| **会话 UI 灵活性** | #54800 — 宽屏下更宽的会话列；#62981 — variant flyout 动态尺寸 |
| **MCP 生态深化** | #63261 — 将 MCP 事件暴露到总线，支持更广泛的订阅和集成场景 |

---

## 开发者痛点

1. **免费套餐可靠性** (#59387)：评论数最多的 issue（355 条）。用户反映重置计时器失效、订阅提示混乱、消息发送无反馈。这是用户获取和留存的主要摩擦点。

2. **Windows 桌面端回归问题**：多条报告显示浏览器工具失败 (#63229)、安装脚本需要 WSL (#63352)、代理/网络问题 (#51022)。Windows 仍是支持负担最重的平台。

3. **TUI 稳定性问题**：OSC 转义序列处理导致提示中泄漏文本 (#57345, #57517)、shell 补全提示在当前输入下方累积 (#63345)、滚动行为跳入 thinking block (#58666)。终端用户群体反应强烈。

4. **配置热重载脆弱性** (#62002)：部分配置热重载失败时自定义 agent 设置静默回退且不通知用户——这是一种静默数据损坏场景。

5. **剪贴板交互** (#4283)：尽管已关闭，160 条评论表明剪贴板交互在 TUI 和桌面端环境中仍不够可靠。

6. **现代 Android 上的移动端配对** (#62934)：缺少权限导致 Android 17 设备立即配对失败，影响局域网服务器工作流。

---

*数据来源：anomalyco/opencode GitHub，2026-11-12。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. They've provided very specific rules about how to handle the translation - preserving markdown structure, keeping technical terms in original form, using natural technical Chinese, etc.

Let me carefully translate this report section by section.

Key points to remember:
- Keep all markdown structure intact
- Keep URLs, code, numbers, dates as-is
- Keep technical identifiers like #12345, file paths, API names in original form
- Use natural technical Chinese register
- Don't put markdown fences around the output
- Output only the translation

Let me translate:

Title: "Pi Community Digest — 2026-11-12" -> "Pi 社区日报 — 2026-11-12"

Section headers need to be translated naturally.

Let me work through this systematically.
</think>


# Pi 社区日报 — 2026-11-12

## 今日要闻

Pi 项目今日重点聚焦于持久化、可靠性和可扩展性。最大亮点是全新的 **p2 备份协调器** 及其 Radius 集成，实现了会话历史的健壮复制。关键修复涉及 Windows 进程挂起问题（`pi -p` 永不退出）、会话恢复时 MCP 工具持久化，以及 bash 输出截断的边界情况。Responses API 收到三项互补的 PR，增强了企业部署场景下的 Vercel AI Gateway 集成。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 影响范围 | 社区反馈 |
|---|-------|---------|---------|
| [#3005](https://github.com/earendil-works/pi/issues/3005) | **"UPDATE AVAILABLE" 消息应可开关** (已关闭) | NixOS 及复杂环境用户无法自动更新；持续显示的黄色提示条影响使用体验。9 条评论表明用户对"静默启动"开关有强烈需求。 | 👍 2 |
| [#10162](https://github.com/earendil-works/pi/issues/10162) | **输入图片过多时 Agent 任务中断** | 运行长时间任务（PR 监护、QA）时 Agent 在图片输入累积后失败。影响依赖自主运行的高级用户。 | 👍 0 |
| [#11026](https://github.com/earendil-works/pi/issues/11026) | **Durable: 永久删除会话** | 请求 `harness.deleteConversation(id, ctx)` 并附带运行中保护——满足 GDPR 合规需求和存储清理需要。 | 👍 6 |
| [#10386](https://github.com/earendil-works/pi/issues/10386) | **Durable: 支持 coding-agent 扩展** | 提议基于 AgentSession 的 Durable 运行时或 ExtensionAPI 对齐方案——将 pi-durable 向完整扩展生态开放。 | 👍 1 |
| [#11956](https://github.com/earendil-works/pi/issues/11956) | **文件打开期间取消读取导致崩溃** (已关闭) | `Promise.all` 工具调用失败时未捕获 AbortError；已通过正确错误处理修复。 | 👍 0 |
| [#12068](https://github.com/earendil-works/pi/issues/12068) | **Windows 上 `pi -p` 永不退出** (P0, 已关闭) | 1.5.1/1.5.2 回归问题：会话使用工具后扩展调用 `pi.exec()` 时 `pi -p` 无限挂起。对 CI/CD 流水线影响严重。 | 👍 0 |
| [#10317](https://github.com/earendil-works/pi/issues/10317) | **向扩展发送 `queue_update` 事件** | 通过 `sendUserMessage` 注入输入的扩展无法获得确认；`queue_update` 事件可实现可观测的丢弃行为。 | 👍 0 |
| [#12049](https://github.com/earendil-works/pi/issues/12049) | **strict: 错误地启用了 OpenAI strict 采样** | 未类型化数组项的模式生成有误导致 API 拒绝；影响 LSP 集成用户。 | 👍 0 |
| [#11933](https://github.com/earendil-works/pi/issues/11933) | **条件化引用 AGENTS.md** (已关闭) | 提议领域特定的 Agent 文档（AGENTS_JAVA.md、AGENTS_INFRA.md）以实现模块化指令管理。 | 👍 0 |
| [#12019](https://github.com/earendil-works/pi/issues/12019) | **github-copilot: Gemini 模型忽略 reasoning_effort** (P0) | `--thinking` 参数对 Copilot Gemini 模型无效；捆绑目录错误设置 `supportsReasoningEffort: false`。 | 👍 0 |

---

## 关键 PR 进展

| # | PR | 描述 | 状态 |
|---|-----|------|------|
| [#12072](https://github.com/earendil-works/pi/pull/12072) | **feat(ai): 将延迟 Responses 工具分组到命名空间** | 为延迟函数提供可选命名空间描述，在托管环境中工具加载前减少输入 token 消耗。 | Closed |
| [#12071](https://github.com/earendil-works/pi/pull/12071) | **fix(ai): 保留托管 Responses 的工具搜索历史** | 在 assistant 消息上持久化 `tool_search_call`/`tool_search_output` 条目，防止无状态请求的缓存丢失。 | Closed |
| [#12069](https://github.com/earendil-works/pi/pull/12069) | **fix(ai): 通过 Responses 路由 Vercel OpenAI 模型** | 将 `openai/*` 目录模型路由到 `openai-responses` 端点，使 Responses 功能可通过 Vercel AI Gateway 使用。 | Closed |
| [#12059](https://github.com/earendil-works/pi/pull/12059) | **feat(p2): 备份到 Radius** | 扩展 p2 备份协调器以支持 Radius 存储后端，作为文件系统备份的补充。 | Open (进行中) |
| [#11990](https://github.com/earendil-works/pi/pull/11990) | **添加 Radius 会话同步适配器原型** | 为 Radius 实现 Chord 远程存储契约，解耦协调器逻辑与 Radius HTTP API。 | Open (进行中) |
| [#12058](https://github.com/earendil-works/pi/pull/12058) | **fix(coding-agent): 尾部被截断时保留 bash 输出** | 修复短首行加一行超长行导致部分保留尾部时快照为空的问题。 | Closed |
| [#12042](https://github.com/earendil-works/pi/pull/12042) | **feat(p2): 备份协调器** | 引入 Chord 会话存储的复制就绪备份系统，为跨实例持久化奠定基础。 | Closed |
| [#12055](https://github.com/earendil-works/pi/pull/12055) | **fix(durable,env): 跳过列举 listDir 期间被移除的条目** | 解决读取器在 `readdir` + `lstat` 列举过程中遇到 `.reclaim` 文件变化时的 ENOENT 错误。 | Closed |
| [#12054](https://github.com/earendil-works/pi/pull/12054) | **fix(coding-agent): 扩展仅隐藏自身工具时保留恢复的 MCP 工具** | 防止 `setActiveToolsByName()` 在仅扩展自有工具切换时丢弃所有待处理的 MCP 工具。 | Closed |
| [#12046](https://github.com/earendil-works/pi/pull/12046) | **修复独立二进制无法解析扩展依赖** | Bun `--compile` 现于运行时读取 `package.json`，修复 Shiki 等扩展依赖解析问题。 | Closed |

---

## 热门讨论

### 综合

| # | 讨论 | 概要 |
|---|------|------|
| [#12063](https://github.com/earendil-works/pi/discussions/12063) | **有人对 Pi + Concord 集成感兴趣吗？** | 提议集成 Concord MCP 服务器以实现共享工作状态（在线状态、文件声明、任务上下文、交接），与 Claude Code 和 Cursor 并列。 |

---

## 功能需求趋势

1. **用户体验与控制**
   - 可配置的启动通知（UPDATE AVAILABLE 开关、静默模式）
   - 条件化引用 AGENTS.md 以实现领域特定指令；
   - 支持 Kitty 剪贴板协议（OSC 5522）以适配 SSH/容器环境

2. **持久化与存储**
   - 从 pi-durable 存储中永久删除会话；
   - 支持多后端的备份协调器（文件系统、Radius）；
   - 扩展的原子 completion 入队-唤醒 API

3. **AI Provider 集成**
   - ant-ling provider 迁移到 Ling 3.x Flash 模型；
   - github-copilot 的 Gemini reasoning_effort 支持；
   - 托管环境的 Responses API 命名空间工具

4. **工具系统增强**
   - 取消 codemode 中的工具截断；
   - coding-agent 模型调用的准入门控；
   - 扩展注入输入的可观测队列更新

---

## 开发者痛点

1. **Windows 平台问题**
   - 扩展调用 `pi.exec()` 时 `pi -p` 进程挂起（1.5.1/1.5.2 回归）；
   - 托管启动器的 Node.js 路径验证问题；
   - Alacritty 键盘事件回显回归（0.13-0.14）

2. **剪贴板与输入**
   - `Ctrl+C` 无确认直接清空整个提示符；
   - macOS 上 Cmd+V 粘贴忽略剪贴板图片；
   - `/login` 过程中屏幕上显示 API 密钥

3. **MCP 与工具持久化**
   - 通过 `tool_search` 加载的工具在会话恢复时丢失；
   - 扩展工具停用影响无关的 MCP 工具；
   - 工具参数中的孤立代理字破坏后续请求

4. **上下文管理**
   - 压缩时静默退出循环而非执行压缩；
   - 尾部超过缓冲区时 bash 输出消失（单个超长行）；
   - Claude 5.5 叙述块渲染为隐藏思考

5. **输出与渲染**
   - HTML 导出显示原始 OSC 8 转义序列；
   - 全屏重绘后丢失 Kitty 图片；
   - 内联 Markdown 图片后的硬换行丢失

---

*生成于 2026-11-12 | 数据来源 github.com/earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this GitHub community digest from English to Simplified Chinese. Let me translate it carefully, following the rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly
3. Keep URLs, links, numbers, dates, code spans, etc. verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

**Title:**
"Qwen Code Community Digest" → "Qwen Code 社区动态"

**Date and repository info:**
Keep as-is for the most part, just translate the descriptive text.

**Section 1: Today's Highlights**
"The Qwen Code project released v1.0.0-preview, marking a significant milestone that unifies agent capabilities from Qoder and Qwen Code for code understanding, implementation, debugging, and testing. The release is accompanied by active development across core features including crash-safe file history backups, a new Managed Web Terminal, and event-bus based agent loop re-architecture. Meanwhile, the community is grappling with multiple CI failures and test flakiness issues, with several P1/P2 bugs requiring immediate attention."

Translation:
"Qwen Code 项目发布了 v1.0.0-preview，标志着 Qoder 与 Qwen Code 的 Agent 能力正式完成统一整合，涵盖代码理解、代码实现、代码调试与代码测试。当前版本同步推进多项核心功能开发，包括崩溃安全的文件历史备份、全新的托管 Web Terminal，以及基于事件总线的 Agent 循环重构。与此同时，社区正面临多重 CI 失败和测试不稳定问题，多个 P1/P2 级别缺陷亟待解决。"

**Section 2: Releases**


The first release introduces the initial preview of Qwen Code 1.0, combining agent capabilities from Qoder and Qwen Code to support code understanding, implementation, debugging, and testing. The release notes indicate the system supports both Qwen and Qoder accounts, with the caveat that interfaces, configuration options, and behaviors are subject to change during the preview phase. The next section will continue with Hot Issues, translating the detailed tracking information for critical problems affecting the system. The context indicates this is a summary of ongoing technical issues in a GitHub repository. The next section appears to be continuing the list of critical issues, with new items being added to the existing tracking list. One particularly urgent item involves a directory restoration problem where the /rewind command after changing directories can inadvertently overwrite files in unintended locations. Another issue relates to a web interface usage quota that remains frozen despite extended inactivity periods. 核心功能包括安全备份机制，通过每个调用独立的临时文件实现原子性发布，以及托管代理的交互式 Web 终端功能。

文件恢复机制现在采用基于窗口的预算计算来修复压缩后的恢复问题，同时支持 CJK 字符处理。代理循环架构正在重新设计，利用事件总线原语（Conversation、Llm 和 Tool 处理器）进行重建。

所有 AgentCore 模型轮次将通过统一代理循环路由，使子代理、后台代理和工作流代理都能共享该循环。权限管理方面需要调整——AUTO 模式分类器应排除待处理的工具调用，同时用户授权判断需要基于授权而非动作一致性。

此外，正在将内存测试仓库迁移到 H2 上的 JDBC 仓库以保持一致性，并实现基于 Session journal 的持久化自节奏循环唤醒机制。

文档层面需要修正沙箱代理示例中的主机范围描述。核心功能方向集中在程序化工具调用能力、验证后修复循环机制、Web Shell 和 UI 改进（包括模型选择器内容插槽、联系人观察的白名单建议和频道投递的出站 Webhook 支持）以及工作目录配置等方面。

CI/CD 可靠性已成为最高优先级问题——主 CI 失败追踪 issue 上超过 326 条评论反映了开发者面临的生产力损失和挫败感。文档过时、Token 计算 bug、会话管理缺陷和自托管部署障碍进一步加剧了这些挑战。
</think>


# Qwen Code 社区动态

**日期：** 2026-11-12
**仓库：** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)
**来源：** github.com/QwenLM/qwen-code

---

## 一、今日要闻

Qwen Code 项目发布了 **v1.0.0-preview**，标志着 Qoder 与 Qwen Code 的 Agent 能力正式完成统一整合，涵盖代码理解、代码实现、代码调试与代码测试。版本同步推进多项核心功能开发，包括崩溃安全的文件历史备份、全新的托管 Web Terminal，以及基于事件总线的 Agent 循环重构。与此同时，社区正面临多重 CI 失败和测试不稳定问题，多个 P1/P2 级别缺陷亟待解决。

---

## 二、版本发布

| 版本 | 概要 |
|------|------|
| **v1.0.0-preview** | Qwen Code 1.0 初始预览版。整合 Qoder 与 Qwen Code 的 Agent 能力，支持代码理解、代码实现、代码调试与代码测试。支持 Qwen 和 Qoder 账号。*注意：预览期内接口、配置项和行为均可能发生变化。* |

---

## 三、热点 Issue

| # | Issue | 优先级 | 评论数 | 重要性说明 |
|---|-------|--------|--------|------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failed: Managed Agent gate — no test identified | — | 326 | 活跃度最高的 Issue，持续追踪自动化 CI 失败问题。Bot 自动生成的 Issue 已积累大量关于测试识别问题的讨论。 |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | Daily dependency CVE audit failed | needs-triage | 49 | 安全相关：定时依赖漏洞扫描失败，可能导致已知 CVE 无法被及时检出。 |
| [#11680](https://github.com/QwenLM/qwen-code/issues/11680) | E2E Tests — no test identified | bug | 48 | 持续性 E2E 测试失败，影响集成交付验证的可靠性。 |
| [#11678](https://github.com/QwenLM/qwen-code/issues/11678) | Qwen Code CI — no test identified | bug, autofix/in-progress | 26 | Windows/Node 22.x 测试在 CI 流水线中失败，需深入调查。 |
| [#13009](https://github.com/QwenLM/qwen-code/issues/13009) | E2E Tests — cli/cron-tools.test.ts failures | bug, autofix/approved | 21 | 具体 cron tools 注册测试失败，涉及多个 commit。 |
| [#16425](https://github.com/QwenLM/qwen-code/issues/16425) | Workflow agent permission approval never renders | P1 | 10 | **已关闭** — 严重 UX 缺陷，权限审批弹窗无法渲染，导致工作流运行无限挂起。已在 0.26.6 和 0.26.8 中复现。 |
| [#15486](https://github.com/QwenLM/qwen-code/issues/15486) | Post-compaction token estimate counts pending tool result twice | P1 | 4 | Token 统计 Bug：自动压缩期间，若存在 pending 的工具调用结果，会导致请求被中断或以 `max_tokens: 1` 发出。 |
| [#16915](https://github.com/QwenLM/qwen-code/issues/16915) | Task reports two errors and cannot continue | P2 | 7 | 用户反馈：API 连接中断导致任务无法完成。 |
| [#16982](https://github.com/QwenLM/qwen-code/issues/16982) | /rewind after /cd restores checkpoint to wrong directory | P1, ready-for-human | 2 | **今日新增** — 严重文件操作 Bug：执行 `/cd` 切换目录后使用 `/rewind` 时，可能静默覆盖无关目录中的文件。 |
| [#16851](https://github.com/QwenLM/qwen-code/issues/16851) | Web UI weekly usage limit stuck | support | 3 | 用户反馈：coder.qwen.ai 上的用量配额在数周不活跃后仍未重置。 |

---

## 四、关键 PR 进展

| PR | 标题 | 类别 | 状态 | 概要 |
|----|------|------|------|------|
| [#16926](https://github.com/QwenLM/qwen-code/pull/16926) | publish file-history backups atomically | core | OPEN | 将预览分支的崩溃安全备份捕获移植到主分支。采用每次调用独立的临时文件 + 独占复制策略防止数据丢失。 |
| [#16866](https://github.com/QwenLM/qwen-code/pull/16866) | add the Managed Web Terminal | managed-agent | OPEN | 为托管 Agent 会话添加通过 WebSocket 中继的交互式 Web Terminal。弥合 `web_terminal` 能力差距。 |
| [#16895](https://github.com/QwenLM/qwen-code/pull/16895) | bound post-compaction restoration by the context window | core | OPEN | 使用正确的基于上下文窗口的预算计算来修复压缩后的文件恢复问题，支持 CJK 字符。 |
| [#16938](https://github.com/QwenLM/qwen-code/pull/16938) | re-express the agent loop on the event bus (opt-in) | core | OPEN | 基于事件总线原语重新构建共享 Agent 循环，包含 Conversation、Llm、Tool 三类 Handler。 |
| [#16880](https://github.com/QwenLM/qwen-code/pull/16880) | send AgentCore's model rounds through the shared agent loop | core | OPEN | 启用 `experimental.unifiedAgentLoop` 后，将所有 AgentCore 模型轮次（子 Agent、后台 Agent、工作流 Agent）路由到共享循环。 |
| [#16857](https://github.com/QwenLM/qwen-code/pull/16857) | keep the pending call out of the classifier's prior actions | permissions | OPEN | 修复 AUTO 模式分类器，从 transcript prior actions 列表中排除 pending 的工具调用。 |
| [#16858](https://github.com/QwenLM/qwen-code/pull/16858) | judge user authorization in the AUTO classifier | permissions | OPEN | 优化分类器 Prompt，改为判断用户授权而非动作与用户消息的一致性。 |
| [#16953](https://github.com/QwenLM/qwen-code/pull/16953) | retire the InMemory runtime broker repositories | managed-agent | OPEN | 移除内存测试仓库，将测试迁移到 H2 上的 JDBC 仓库以确保一致性。 |
| [#16835](https://github.com/QwenLM/qwen-code/pull/16835) | durable self-paced /loop wakeups for Managed Sessions | managed-agent | OPEN | 通过 Session journal 而非进程本地定时器实现自节奏 `/loop` 唤醒的持久化。 |
| [#16989](https://github.com/QwenLM/qwen-code/pull/16989) | correct the host scope described for the sandbox proxy example | docs | OPEN | 修复文档：沙箱代理示例中的描述与实际允许的域名不符。 |

---

## 五、功能需求趋势

分析近期 Issue 和 PR，功能方向集中在以下领域：

### 核心 Agent 能力
- **程序化工具调用**（[#16944](https://github.com/QwenLM/qwen-code/issues/16944)）— 允许 Agent 在沙箱中将多个工具调用编排为代码执行
- **验证-修复循环**（[#16941](https://github.com/QwenLM/qwen-code/issues/16941)）— 将编辑后验证作为核心机制，支持 clean-context verifier

### Web Shell 与 UI
- **Model Picker 内容插槽**（[#16893](https://github.com/QwenLM/qwen-code/issues/16893)、[#16933](https://github.com/QwenLM/qwen-code/pull/16933)）— 允许嵌入方自定义 Model Picker 内容区域
- **基于联系人观察的 Channel 白名单**（[#16931](https://github.com/QwenLM/qwen-code/issues/16931)）— 自动推荐发件人，无需手动输入平台 ID
- **通过 Channel 投递的出站 Webhook**（[#16751](https://github.com/QwenLM/qwen-code/issues/16751)、[#16753](https://github.com/QwenLM/qwen-code/issues/16753)）— **已完成** — 支持平台 Webhook，含 DingTalk 适配器

### 配置与设置
- **Conversations 工作目录可配置**（[#15298](https://github.com/QwenLM/qwen-code/issues/15298)）— **已完成** — `qwen serve` 支持 `--conversations-dir` 参数

---

## 六、开发者痛点

### CI/CD 可靠性（高优先级）
最突出的问题是**普遍存在的 CI 不稳定**：
- 多个 E2E 测试在不同分片和平台上失败
- 每日 CVE 审计失败
- Lint Gate 存在不一致性，放行格式问题合入主分支
- 资源竞争环境下单元测试超时
- TUI Agent 循环一致性和 SSH 引导测试存在不稳定

**对社区的影响：** 主 CI 失败追踪 Issue 上 326+ 条评论表明开发者面临严重的效率损失和挫败感。

### 文档陈旧
- MCP 文档仍要求添加服务器后重启（[#16925](https://github.com/QwenLM/qwen-code/issues/16925)）— 热重载已实现但未写入文档
- 事件总线设计文档中包含错误的 PR 状态引用（[#16952](https://github.com/QwenLM/qwen-code/pull/16952)）

### 会话管理问题
- 压缩后 Token 计数 Bug 导致 `max_tokens: 1` 失败
- 当 Turn 在工具调用上稳定时，出现虚假的"请求已中断"横幅
- `/cd` 后 `/rewind` 对工作目录的错误处理

### 自托管部署障碍
- 自托管 Qwen3-Coder 的工具调用失败（[#124](https://github.com/QwenLM/qwen-code/issues/124)）— 7 个 👍 表明广泛关注
- API 内容过滤错误阻止了合法使用场景

---

*动态完。下一期：2026-11-13*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*