# AI CLI 工具社区动态日报 2026-11-24

> 生成时间: 2026-11-24 06:18 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate an English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep technical terms, URLs, version tags, etc. in original form
- Use natural technical Chinese, not literal word-for-word

Let me carefully translate this report section by section.
</think>


# AI 开发者命令行工具 —— 跨工具对比报告

**日期：** 2026-11-24

---

## 1. 生态概览

AI CLI 工具生态正处于积极的成熟期，各主要厂商均保持活跃。Anthropic（Claude Code）、OpenAI（Codex）和 Google（Gemini CLI）凭借社区规模位居前列，三家每日合计产生超过 150 个 issue/PR。开源替代方案——OpenCode、Pi 和 Qwen Code——则占据了"绕过 API 壁垒"的细分市场，以自托管、插件扩展性及协议原生集成（A2A、MCP）为核心卖点。GitHub Copilot CLI 则以更窄但战略意义明确的位置存在，作为官方 GitHub 集成入口。七款工具在工程层面呈现出高度共性：会话可靠性、MCP 互操作性、自主 Agent 安全机制和跨会话状态管理已成为各家标配。

---

## 2. 活跃度对比

| 工具 | 社区渠道 | Issue（24h） | PR（24h） | 讨论（24h） | 发版（24h） | 备注 |
|------|----------|:---:|:---:|:---:|:---:|------|
| **Claude Code** | GitHub Issues + Discussions | ~50 | 2 | 14 | **1**（v2.1.331） | 规模最大；安全与 MCP 相关话题活跃 |
| **OpenAI Codex** | GitHub Issues + Discussions | 50 | 10 | 14 | **4**（v0.172.0 稳定版 + 3 个 alpha/patch） | 发版最频繁；聚焦 Windows |
| **Gemini CLI** | GitHub Issues + Discussions | 50 | 35 | N/A | **4**（v0.71.0–0.72.0-preview） | PR 吞吐量最高；CI 活动频繁 |
| **GitHub Copilot CLI** | GitHub Issues + Discussions | 28 | 1 | N/A | **1**（v1.0.115-8） | 体量较小；走质量优先路线 |
| **OpenCode** | GitHub Issues + Discussions | 50 | 20 | N/A | **2**（v2.4.0、v2.4.1） | 桌面端带来差异化功能集 |
| **Pi** | GitHub Issues + Discussions | 30 | 30 | 1 | 0 | Issue 与 PR 近乎 1:1；开发节奏快 |
| **Qwen Code** | GitHub Issues + Discussions | 32 | 20+ | N/A | 0 | PR 优先文化；PR 验证基础设施强 |

**观察：**
- Gemini CLI 和 Pi 的提交密度相对 issue 体量最高，表明内部开发节奏强劲。
- OpenAI Codex 发版最为激进，每日同时推送稳定版和多个 alpha/patch 构建。
- GitHub Copilot CLI 保持低量但稳定的活动，秉持质量门控策略。
- OpenCode 是唯一将 Discussions 完全关闭的工具——所有社区反馈统一经由 Issues 流转。

---

## 3. 共同的功能方向

以下需求在多个工具社区中反复出现，反映了整个行业在工程层面的共识：

| 共同方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **MCP 互操作性深化** | Claude Code、OpenAI Codex、Gemini CLI、OpenCode、Pi、Qwen Code | OAuth Token 刷新（#4203，Codex）、信息请求能力（#17316，Qwen Code）、每个服务端独立 TLS 信任（#60039，Gemini CLI）、SSE 解析优化（#12224，Pi）、按请求粒度的认证扩展（#63532，Codex） |
| **会话状态恢复与韧性** | Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI、Pi、Qwen Code | 僵锁导致的不可恢复会话（#4805，Copilot CLI）、转录体积二次增长（#13113，Qwen Code）、会话事件投递超时（#5100，Copilot CLI）、子 Agent 失败透明度（#22323，Gemini CLI） |
| **后台 / 自主 Agent 可靠性** | Claude Code、Gemini CLI、Qwen Code | 孤儿子 Agent（#74133，Claude Code）、崩溃恢复（#73600，Claude Code）、Action 驻留在首个增量之外（#18149，Qwen Code）、托管 Agent 取消（#18127，Qwen Code） |
| **跨平台一致性** | 所有工具（Windows/macOS/Linux 分化） | 权限模式一致性（Claude Code）、编辑器退出后 TUI 乱码（#18202，Qwen Code）、剪贴板竞态（#59052，OpenCode）、内核池增长（#31212，Codex）、服务端口冲突（#54267，OpenCode） |
| **权限与安全加固** | Claude Code、Copilot CLI、Qwen Code、OpenCode | A2A 服务端 Bearer Token 认证（Gemini CLI v0.71.1、Qwen Code）、API Key 明文日志（#18165，Qwen Code）、越权任务越界删除（#111921，Claude Code）、密钥泄露至对话（#105608，Claude Code） |
| **上下文管理与 Token 效率** | Gemini CLI、OpenCode、Pi | AST 感知的文件读取（#22745，Gemini CLI）、缓存预热可靠性（#10956，Pi）、压缩摘要膨胀（#12242，Pi）、>128 工具粒度的工具作用域（#24246，Gemini CLI） |
| **CLI / 桌面端功能对等** | Claude Code、OpenAI Codex、OpenCode | Remote Control 差异（Claude Code）、浏览器面板集成（#65946，OpenCode）、CLI 与 Web 间共享上下文（#30675，Claude Code） |

---

## 4. 差异化分析

| 工具 | 核心差异化 | 目标用户 | 技术路线 |
|------|-----------|----------|----------|
| **Claude Code** | 生产级自主工程 Agent，原生 Cowork 集成 | 从事复杂多文件重构的高级工程师 | Tool-First Agent 设计；完善的 Hook/插件体系；云平台扩展（Bedrock、Foundry、Vertex） |
| **OpenAI Codex** | 深度 GitHub 生态集成，配合 VS Code 扩展 | 已深度使用 Microsoft/GitHub 技术栈的开发者 | 面向消费者的简洁体验；快速发版节奏；Windows 优先的回归修复 |
| **Gemini CLI** | 开源可扩展性 + 激进的每日构建 | 希望绕过 API 门槛获取 Gemini 能力的自托管用户 | Rust 架构；MCP-First 设计；内部团队驱动高 PR 吞吐量 |
| **GitHub Copilot CLI** | 官方 GitHub CLI 桥接，认证依托 `gh auth` | 不离开 GitHub CLI 生态、想在终端使用 Copilot 的开发者 | 最小功能面；与 `gh` 共享凭证；质量优先而非数量优先 |
| **OpenCode** | 桌面端应用作为一等公民，配备浏览器导入能力 | 更偏好 GUI 进行会话管理和浏览的开发者 | 桌面原生特性（Chrome/Edge/Firefox 历史导入）；WebShell 扩展性 |
| **Pi** | 协议原生设计（A2A、MCP），支持多推理 Provider | 希望多 Provider 推理而避免锁定的开发者 | Provider 无关的 SDK；类 Ruby 的扩展性；结构化错误分类体系 |
| **Qwen Code** | PR 验证作为一等公民工作流；托管 Agent 生命周期管理 | 采用 PR 驱动开发的团队；需要审计追踪的企业 | 分层沙箱；托管 Agent 含 Action 驻留机制；硬件微 VM 编排 |

**关键技术分歧点：**
- **Anthropic、OpenAI、Google** 优先保障主流用户的原始能力和可靠性。
- **Pi、Qwen Code、OpenCode** 优先保障协议合规性（A2A、MCP）、自托管能力和扩展性，面向高级用户。
- **Copilot CLI** 刻意保持极简——其价值在于 GitHub 认证集成，而非功能广度。

---

## 5. 社区势能与成熟度

| 工具 | 成熟度信号 | 势能评估 |
|------|-----------|----------|
| **Claude Code** | 稳定发版；日均 50+ 社区交互；安全补丁 24h 内响应 | **高** —— 迭代快速，企业采纳率持续增长；安全态势成熟 |
| **OpenAI Codex** | 每日稳定版 + alpha 发版；24h 内 4 个版本；Windows 回归追踪活跃 | **高** —— 发版最频繁；快速响应回归表明工程投入强劲 |
| **Gemini CLI** | 24h 内 35 个 PR 来自内部团队；夜间版 + 稳定版双通道；v0.72.0-preview 推送中 | **非常高** —— 内部团队是主要推动力；社区贡献可见但居次要地位 |
| **GitHub Copilot CLI** | 个位数日活动量；克制的发版节奏；低 issue 体量 | **中** —— 专注开发；稳定而非激进；资源可能受限 |
| **OpenCode** | 桌面端版本（v2.4.x）迭代；PR 量可观；桌面优先的功能路线图 | **高** —— 桌面端投入增加，与纯 CLI 竞品形成差异化 |
| **Pi** | Issue 与 PR 约 1:1 比例；活跃参与协议规范（A2A、MCP）；无稳定发版通道 | **高** —— 迭代快，社区贡献积极；生产环境成熟度有待验证 |
| **Qwen Code** | 重投入 PR 验证基础设施；1.0 Preview 追踪 issue；安全修复跟进 | **高** —— 工程严谨重视正确性和安全性；发布节奏较慢但置信度高 |

**成熟度排名（生产就绪度）：**
1. Claude Code — 生产级自主工作负载打磨最充分
2. OpenAI Codex — 迭代迅速，企业背书强
3. GitHub Copilot CLI — 成熟但功能有限
4. Gemini CLI — 快速成熟，开源治理健康
5. OpenCode — 桌面端为稳定性加分；核心引擎仍在演进
6. Qwen Code — 工程品质高但 1.0 尚未落地
7. Pi — 迭代最快但发版模式最不稳定

---

## 6. 趋势信号

以下来自今日社区数据的信号，对开发者和决策者具有战略参考价值：

### 6.1 MCP 已成平台级原语

除 Copilot CLI 外，所有工具均有针对 MCP 协议缺陷的 open issue 和 PR——涵盖 OAuth 认证、信息请求、TLS 按服务端信任、SSE 流式解析优化等方向。MCP 生态正围绕一套通用协议扩展快速收敛，各工具独立实现。**开发者若集成 MCP 服务，应预期跨工具兼容性将在 2027 年 Q1 大幅改善。**

### 6.2 自主 Agent 安全已成首要关切

三个工具（Claude Code、Qwen Code、OpenCode）的安全讨论均指向同一核心：自主任务的边界控制——文件删除范围、权限提升、密钥泄露。社区正趋向分层沙箱模型与信任分级方案。**这标志着行业从"能力最大化"向"安全默认"的转型，** 将深刻影响自主 Agent 在企业环境中的部署方式。

### 6.3 会话可靠性是开发者最大痛点

锁文件损坏、转录损坏、不可恢复会话、事件投递超时等问题在所有工具中均有出现。这并非单一产品问题——它是状态化 AI Agent 面临的根本架构挑战。**会话生命周期管理是整个生态中杠杆最高的改进方向。** 谁能优雅解决这个问题，谁将拥有显著竞争优势。

### 6.4 Windows 是主要痛平台

生态中 Top 20 高影响 issue 中有七个是 Windows 专属回归（UI 冻结、权限冲突、EIO/EPIPE 崩溃、剪贴板竞态等）。这反映出大多数企业开发者使用 Windows，而 CLI 工具历史上以 macOS/Linux 为先。**Windows 一致性正在成为企业采纳的重要分水岭。**

### 6.5 多 Provider 推理正在成为标配

Pi 和 Qwen Code 均内置 70+ 模型支持，覆盖多个推理 Provider。OpenAI Codex 和 Gemini CLI 通过 OpenRouter 集成展现出类似广度。**单 Provider 锁定的时代正在终结。** 开发者在选型时应评估工具的 Provider 灵活性和模型切换体验，而不仅是原始能力。

### 6.6 PR 验证基础设施正演变为独立功能

Qwen Code 在分层沙箱、硬件微 VM 及 Bearer Token 编排方面的投入，揭示了一个更广泛的趋势：**AI 辅助代码审查正在成为一个独立的产品层面，** 而非编码 Agent 的附属功能。这对 CI/CD 集成和企业安全策略有深远影响。

### 6.7 跨会话状态管理是下一个前沿

Claude Code 的共享上下文 issue（#30675）、Qwen Code 的工作树内存共享（#18030）以及 OpenCode 的收件箱会话固定功能，均指向同一底层问题：**用户期望 AI 会话像 IDE 标签页一样——持久化、可共享、感知项目历史。** 要优雅解决这一需求，需要大多数工具尚未触及的架构变更。

---

*本跨工具分析基于 2026-11-24 的 GitHub 社区数据生成。指标反映 24 小时活动窗口内的数据。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this while following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, usernames, numbers, dates verbatim
4. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

---

# Claude Code Skills Community Highlights Report

# Claude Code Skills 社区亮点报告

**Data Source:** `anthropics/skills` repository (as of 2026-11-24)  
**数据来源：** `anthropics/skills` 仓库（截至 2026-11-24）

**Analysis Focus:** Most-watched Skills activity by community engagement  
**分析重点：** 按社区关注度排序的 Skills 热门活动

---

## 1. Top Skills Ranking

## 一、热门 Skills 排行

The following represent the most-discussed Skill-related contributions by community attention:
以下为按社区关注度排序的最热门 Skill 相关贡献：

| # | PR/Issue | Title | Author | Comments | 👍 | Status |
|---|----------|-------|--------|----------|-----|--------|
| 1 | Issue #492 | Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse | aliksir | **46** | 3 | OPEN |
| 2 | Issue #228 | Enable org-wide skill sharing in Claude.ai | ghost | **17** | 8 | OPEN |
| 3 | Issue #556 | run_eval.py: claude -p never triggers skills/commands (0% trigger rate) | dthau120391 | **13** | 7 | OPEN |
| 4 | Issue #1329 | Proposing compact-memory skill (symbolic notation for compact agent state) | WGlynn | **10** | 0 | OPEN |


| 5 | Issue #62 | All my skills have disappeared and now I get errors | nicksonnenberg | **10** | 2 | OPEN |
| 6 | Issue #1385 | [Proposal] Reasoning Quality Gate Pipeline | YuhaoLin2005 | **7** | 1 | OPEN |

### Key Skill Discussions

### 重点 Skill 讨论

**Issue #492 – Trust Boundary Abuse in `anthropic/` Namespace**  
A critical security vulnerability report addressing how community skills distributed under the `anthropic/` namespace create potential trust boundary violations. This issue attracted significant community discussion about the risks of distributing unvetted skills under a trusted namespace, with contributors debating security implications and proposed safeguards.

🔗 https://github.com/anthropics/skills/issues/492

**Issue #228 – Org-Wide Skill Sharing**  
Users currently lack built-in tools for sharing skills across organizations. They must manually download skill files, distribute them through external channels like Slack or Teams, then re-upload them elsewhere. This workaround creates friction and limits collaboration. The feature request for native org-wide skill sharing or direct sharing links has generated substantial community interest, with 17 comments and 8 👍 reactions, underscoring strong demand for enterprise-grade collaboration capabilities.

🔗 https://github.com/anthropics/skills/issues/228

**Issue #556 – Evaluation Framework Failure (0% Trigger Rate)**  
A critical bug in the `run_eval.py` evaluation system prevents skill validation: command files created in `.claude/commands/` never execute when `claude -p` runs, resulting in a complete failure rate across all test queries. This issue severely impacts skill development and quality assurance workflows. Seven community members 👍'd the report, highlighting widespread impact on the skill development ecosystem.

🔗 https://github.com/anthropics/skills/issues/556

**Issue #1329 – Compact-Memory Skill Proposal**  
A forward-thinking proposal introducing a skill that uses symbolic notation rather than natural language for persistent memory storage, directly addressing context overflow problems in extended agent sessions. This approach differs from a prior proposal (#1328), demonstrating community members actively innovating new skill design patterns.

🔗 https://github.com/anthropics/skills/issues/1329

---

## 2. Community Demand Trends

## 二、社区需求趋势

Community issues reveal several concentrated demand vectors around security and trust concerns, with multiple high-engagement items addressing namespace vulnerabilities and large-context injection attacks. Collaboration features and evaluation infrastructure improvements also show strong interest, with several open issues and pull requests addressing plugin duplication, skill sharing across organizations, and quality gate pipelines. Documentation and tooling gaps remain a secondary concern, though issues like the email feature inconsistency and skill loss errors highlight ongoing user experience friction.

The primary trend emerging from this analysis is that the community's most active discussions center on evaluation tooling reliability and security boundaries. Multiple pull requests and issues target the skill-creator evaluation system, indicating it's a significant pain point for developers building and testing skills. Users want confidence that their evaluation infrastructure works consistently across different contexts and use cases.

Several new skills show strong potential based on their technical approach and market relevance. The ProofCore integration represents an innovative Web3 application that addresses a specialized but expanding developer segment. The md2video-audio conversion fills a practical gap in creative workflows without requiring additional costs. Document Typography addresses a universal quality concern affecting all skills that generate formatted documents, making it valuable across diverse use cases.

A critical insight emerges from this analysis: the community's strongest demand centers on two interconnected areas—evaluation infrastructure reliability and security frameworks. While developers actively build new skills, they encounter significant friction from broken evaluation systems, ambiguous security boundaries, and limited collaboration features. These systemic issues, rather than individual skill quality, represent the primary obstacles to community growth and adoption. The data spans 20 pull requests and 15 issues, with the highest engagement concentrated in just a few key discussions.

Security concerns dominate the landscape with two major vulnerabilities flagged (#492 and #1487), while the skill-creator evaluation system appears across five separate items, indicating it functions as a recurring pain point. These patterns suggest the community needs resolution of foundational infrastructure issues before momentum can accelerate around skill development.
</think>


# Claude Code Skills 社区亮点报告

**数据来源：** `anthropics/skills` 仓库（截至 2026-11-24）  
**分析重点：** 按社区关注度排序的 Skills 热门活动

---

## 一、热门 Skills 排行

以下为按社区关注度排序的最热门 Skill 相关贡献：

| # | PR/Issue | 标题 | 作者 | 评论数 | 👍 | 状态 |
|---|----------|-------|--------|----------|-----|--------|
| 1 | Issue #492 | Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse | aliksir | **46** | 3 | OPEN |
| 2 | Issue #228 | Enable org-wide skill sharing in Claude.ai | ghost | **17** | 8 | OPEN |
| 3 | Issue #556 | run_eval.py: claude -p never triggers skills/commands (0% trigger rate) | dthau120391 | **13** | 7 | OPEN |
| 4 | Issue #1329 | Proposing compact-memory skill (symbolic notation for compact agent state) | WGlynn | **10** | 0 | OPEN |
| 5 | Issue #62 | All my skills have disappeared and now I get errors | nicksonnenberg | **10** | 2 | OPEN |
| 6 | Issue #1385 | [Proposal] Reasoning Quality Gate Pipeline | YuhaoLin2005 | **7** | 1 | OPEN |

### 重点 Skill 讨论

**Issue #492 – `anthropic/` 命名空间下的信任边界滥用**  
这是一份关键安全漏洞报告。社区 Skills 以 `anthropic/` 命名空间分发，造成用户混淆——他们可能以为这些社区贡献的 Skills 是 Anthropic 官方发布，从而授予过高的权限。该讨论横跨 46 条评论，涵盖命名空间策略、信任模型及可能的修复方案，是所有条目中社区参与度最高的。

🔗 https://github.com/anthropics/skills/issues/492

**Issue #228 – 组织级 Skill 共享**  
用户目前必须手动下载 Skill 文件、通过外部渠道（Slack/Teams）分享、再手动上传。该功能请求——内置共享 Skill 库或直接分享链接——已获得 17 条评论和 8 个 👍 反应，表明企业对协作功能有强烈需求。

🔗 https://github.com/anthropics/skills/issues/228

**Issue #556 – 评估框架失效（触发率 0%）**  
这是一个重大 Bug：`run_eval.py` 在 `.claude/commands/` 中创建命令文件，但 `claude -p` 从不触发它们——所有测试查询的触发率均为零。这严重影响了 Skill 验证工作流。七名社区成员为此 👍，凸显了其广泛影响。

🔗 https://github.com/anthropics/skills/issues/556

**Issue #1329 – Compact-Memory Skill 提案**  
该提案旨在用符号标记而非自然语言来实现持久记忆，解决长时间运行 agent 会话中的上下文膨胀问题。与之前的提案（#1328）独立，展现了社区成员主动设计新型 Skill 范式的努力。

🔗 https://github.com/anthropics/skills/issues/1329

---

## 二、社区需求趋势

从 Issues 分析来看，社区需求集中在以下几个方向：

| 趋势 | 证据 | 社区关注度 |
|-------|----------|-------------------|
| **安全与信任** | #492（信任边界）、#1487（156k token 注入） | 高 — 安全性相关 46 条评论 |
| **企业协作** | #228（组织级共享）、#189（插件重复） | 中高 — 17 条评论 + 8 个 👍 |
| **评估与质量保障** | #556、#1298、#1352、#1385 | 高 — 多个相关 Issues |
| **文档与工具链** | #1143（邮箱功能）、#62（Skill 丢失） | 中 — 用户体验相关 |
| **新型 Skill 范式** | #1329（紧凑记忆）、#412（Agent 治理） | 中 — 前瞻性提案 |

**主要趋势：** 社区最活跃的关注点集中在 **评估工具可靠性** 和 **安全/信任边界**。多条 PRs（#1298、#1681、#1997）和 Issues（#556、#1352）都指向 `skill-creator` 评估系统，表明这已成为 Skill 开发者的痛点。

---

## 三、待合并高潜力 Skills

以下活跃 PRs 代表尚未合入的新能力，复杂度和影响力各异：

| PR | 标题 | 作者 | 领域 | 亮点 |
|----|-------|--------|--------|-------------------|
| [#1245](https://github.com/anthropics/skills/pull/1245) | Notion Spec to Implementation + Quantitative Resume Auditor | mrdesouzaphd-cmyk | 生产力 / HR | 双 Skill PR；Notion 集成实现规格到任务的自动化流程 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore Contract Auditor（智能合约公证） | ProofCore-Protocol | Web3 / 安全 | Solidity/Rust 静态分析 + TON 区块链锚定 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 70v-Yoyo | 内容创作 | Marp 实现 Markdown → MP4 语音旁白 |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel Retro Game Development | kitao | 游戏 | 面向 Pyxel 引擎 Python 复古游戏创建/调试的专业 Skill |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | lql341 | 高性能计算 / DevOps | SSH/Slurm 工作流自动化，适配 HPC 集群 |
| [#514](https://github.com/anthropics/skills/pull/514) | Document Typography | PGTBoos | 质量控制 | 解决 AI 生成文档中的孤行、寡母行、编号对齐问题 |

**最具影响力候选：**
- **ProofCore (#1771)** — 独特的 Web3 集成，面向小众但增长中的开发者群体
- **md2video-audio (#1703)** — 零成本视频生成填补了常见创意工作流缺口
- **Document Typography (#514)** — 解决所有文档生成 Skills 面临的通用质量问题

---

## 四、Skills 生态系统洞察

> **社区最集中的需求是可靠的评价工具链和安全/信任基础设施——开发者们正积极构建 Skills，但受困于破损的触发评估机制、命名空间混淆和缺乏协作共享机制等摩擦点。**

---

## 汇总统计

| 指标 | 数值 |
|--------|-------|
| 分析的 PRs 总数 | 20（Top 20 / 共 50） |
| 分析的 Issues 总数 | 15（Top 15 / 共 50） |
| 最高互动 Issue | #492（46 条评论） |
| 评论数 ≥ 10 的开放 Issues | 4 |
| 安全相关条目 | 2（#492、#1487） |
| Skill-Creator 相关条目 | 5（Issues + PRs） |

*报告基于 `anthropics/skills` 社区活动数据生成。*

---

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep URLs, issue/PR numbers, version tags, file paths, and API identifiers as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no fences

Let me translate section by section:

**Title:**
Claude Code 社区技术周刊 — 2026-11-24

**Today's Highlights:**
Claude Code v2.1.331 为终端会话新增了**四大云平台**（Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 和 Claude Platform on AWS）的 Code Mode 支持，大幅拓展了企业级部署的灵活性。社区仍持续关注关键稳定性问题——尤其是自主任务权限、后台工作进程崩溃和计费配额管理——与此同时，历经数月迭代的 developer-utilities 插件终于正式发布。

**Releases:**

### v2.1.331
**平台扩展支持：**
- 新增终端会话中对 **Amazon Bedrock**、**Google Cloud Agent Platform**、**Microsoft Foundry** 和 **Claude Platform on AWS** 的 Code Mode 支持
- 为 Claude apps 网关新增 `oidc.groups_jsonpath` 配置，用于从 OIDC token 响应中嵌套的对象列表读取用户组信息

**Hot Issues:**

### 1. 语言漂移 Bug：日语回复切换为英语
**Issue #96326** | 25 条评论 | 42 👍 | 平台: Linux | 领域: 模型
关键本地化缺陷：Claude 无视 `CLAUDE.md` 规则和会话语言设置，即使强制要求日语回复，模型仍切换回英语输出。

This affects international teams where language consistency is critical. 🔗 [anthropics/claude-code#96326](https://github.com/anthropics/claude-code/issues/96326)

### 2. 安全：自主任务删除了仓库外的用户文件
**Issue #111921** | 3 条评论 | 平台: macOS | 领域: 桌面端, 权限 | **严重程度: 高**
严重数据丢失漏洞：自主工程任务在未审计测试的情况下运行了仓库测试，随后删除了仓库范围外的用户文件。

This cross-platform issue raises concerns about permission boundaries for autonomous operations. 🔗 [anthropics/claude-code#111921](https://github.com/anthropics/claude-code/issues/111921)

### 3. 安全：密钥意外暴露在聊天中
**Issue #105608** | 4 条评论 | 平台: macOS | 领域: 安全
Claude 持续将密钥和 API 密钥带入对话，即使仅从文件中读取也存在此问题，严重威胁凭证管理安全。🔗 [anthropics/claude-code#105608](https://github.com/anthropics/claude-code/issues/105608)

### 4. 监控工具超时上限未被遵守
**Issue #94393** | 14 条评论 | 32 👍 | 平台: Linux | 领域: 工具
Monitor 工具声明 `timeout_ms` 上限为 3,600,000ms（1小时），但实际运行时长仅为约 30 分钟，文档描述与实际行为存在明显矛盾。🔗 [anthropics/claude-code#94393](https://github.com/anthropics/claude-code/issues/94393)

### 5. 工具中断被误标为"用户拒绝"
**Issue #86001** | 7 条评论 | 领域: 工具, 核心, Agent SDK | **有复现步骤**
工具调用在执行中被中断时，模型收到标记为 `non_execution_kind: "user-rejected"` 的 `tool_result`，提示工具未运行。引擎应使用专门的 "interrupted" 枚举值来区分这种状态。🔗 [anthropics/claude-code#86001](https://github.com/anthropics/claude-code/issues/86001)

### 6. 同步插件更新导致文件夹移至 .trash，钩子失效
**Issue #97847** | 5 条评论 | 平台: macOS | 领域: 安全, 钩子, 插件
同步插件在开放会话期间更新时，旧插件文件夹被移入 `.trash`，但钩子仍在执行——产生钩子引用已删除文件的竞态条件。🔗 [anthropics/claude-code#97847](https://github.com/anthropics/claude-code/issues/97847)

### 7. 计费：Ultra 周配额异常快速耗尽
**Issue #111685** | 4 条评论 | 平台: Web | 领域: 成本
用户反映单日消耗 100% Fable 和 75% All Models 配额，但 Claude Code 日志中无对应 API 活动，怀疑存在后台进程或遥测数据的未预期消耗。🔗 [anthropics/claude-code#111685](https://github.com/anthropics/claude-code/issues/111685)

### 8. 远程控制：升级后设备密钥未创建
**Issue #109909** | 3 条评论 | 平台: macOS, VS Code | 领域: 认证
11 月 13 日升级后，远程控制功能失效——用户收到"受信任设备才能建立提升会话"的错误，因为客户端在升级后未能重新创建设备密钥。🔗 [anthropics/claude-code#109909](https://github.com/anthropics/claude-code/issues/109909)

### 9. 文件建议器无法正确关闭
**Issue #83708** | 5 条评论 | 平台: Linux | 领域: TUI | **有复现步骤**
文件建议器在空格/换行输入后未能关闭，导致 ENTER 键覆盖最后一个词而非提交提示，破坏输入体验。🔗 [anthropics/claude-code#83708](https://github.com/anthropics/claude-code/issues/83708)

### 10. GitHub 网关阻止归档 tarball 下载
**Issue #98823** | 4 条评论 | 平台: Web | 领域: 网络
即使启用全网络访问权限，GitHub 网关仍阻止 `github:` 公仓归档 tarball 的下载，破坏 Nix flakes 等依赖 GitHub 归档端点的工具链。🔗 [anthropics/claude-code#98823](https://github.com/anthropics/claude-code/issues/98823)

## Key PR Progress

### 1. developer-utilities 插件合并
**PR #11713** | 作者: adamkwhite | 状态: 已关闭 (11月23日)
经过充分迭代，developer-utilities 插件现已可用，提供 5 条命令实现社区请求的功能：
- 自定义钩子管理工具
- 会话诊断工具
- 配置检查命令
- 开发工作流增强

*注：会话管理命令（`/list-sessions`、`/label-session`、`claude-resume`）和 `/init-skills` 已移除——已被原生功能替代。*

🔗 [anthropics/claude-code#11713](https://github.com/anthropics/claude-code/pull/11713)

### 2. IP 去重修复
**PR #45553** | 作者: johnkohler00 | 状态: 已关闭 (11月24日)
解决网络操作中的 IP 重复处理问题，提升多实例部署的连接可靠性。

🔗 [anthropics/claude-code#45553](https://github.com/anthropics/claude-code/pull/45553)

## Feature Request Trends

对开放 issue 和社区反馈的分析显示以下主要功能方向：

### 跨平台会话统一
- 在 Claude Code CLI、Claude.ai 网页版、Cowork 和移动应用之间实现**共享上下文**（#30675）——用户希望无缝切换和统一对话历史
- 单一会话和并行会话的**暂停/休眠/恢复控制**（#111870）

### 增强的后台任务管理
- 改进孤立后台子代理的可视化和控制（#74133）
- 改善无头模式下后台 Bash/代理任务被终止时的通知（#85129）
- 后台工作进程崩溃预防和恢复（#73600, #75609）

### 权限与安全优化
- 细粒度控制自主任务边界，防止超出范围的文件操作
- 更好的密钥检测和聊天上下文隔离
- 改进跨会话消息传递的权限模式 UX

### 开发者体验
- 所有 UI 组件的主题自定义一致性（diff 渲染器目前忽略自定义颜色）
- CLI 标志可靠性改进（`CLAUDE_CODE_RESUME_HINT_COMMAND` 空白处理）
- 成本透明度和用量归因细分

## Developer Pain Points

社区反馈中最频繁的痛点集中在以下领域：

### 1. 后台操作稳定性
多个报告涉及后台代理孤立、守护进程升级期间崩溃或被静默终止。运行长时间代理工作流的开发者需要确定性的生命周期管理。

### 2. 权限模式不一致
跨会话消息根据权限模式（`auto` 对比 `bypassPermissions`）表现不同，消息可能被静默丢弃。安全模型的设置和使用容易出错且令人困惑。

### 3. 计费归因不透明
用户无法将 Claude Code 用量与计费仪表板对账。"其他"类别占比过高，Fable 用量显示但日志中无对应 API 调用。

### 4. 平台特定差异
问题在 macOS、Linux 和 Windows 上的表现各异——守护进程会话处理、远程控制和后台工作进程行为都存在平台特定缺陷。

### 5. CLI/桌面功能差距
远程控制、跨会话消息传递和自主任务执行在 CLI 和桌面应用中的行为不一致，迫使用户在界面间做选择。

### 6. 模型本地化可靠性
Claude 跨会话维护语言设置的能力不一致，影响依赖非英语响应的国际开发者。

---

*周刊数据来源：GitHub。如需实时更新，请关注 [anthropics/claude-code](https://github.com/anthropics/claude-code)。*
</think>


# Claude Code 社区技术周刊 — 2026-11-24

## 本周要闻

Claude Code v2.1.331 为终端会话新增了**四大云平台**（Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 和 Claude Platform on AWS）的 Code Mode 支持，大幅拓展了企业级部署的灵活性。社区仍持续关注关键稳定性问题——尤其是自主任务权限、后台工作进程崩溃和计费配额管理——与此同时，历经数月迭代的 developer-utilities 插件终于正式发布。

---

## 版本更新

### v2.1.331
**平台扩展支持：**
- 新增终端会话中对 **Amazon Bedrock**、**Google Cloud Agent Platform**、**Microsoft Foundry** 和 **Claude Platform on AWS** 的 Code Mode 支持
- 为 Claude apps 网关新增 `oidc.groups_jsonpath` 配置，用于从 OIDC token 响应中嵌套的对象列表读取用户组信息

---

## 热门 Issue

### 1. 语言漂移 Bug：日语回复切换为英语
**Issue #96326** | 25 条评论 | 42 👍 | 平台: Linux | 领域: 模型
关键本地化缺陷：Claude 无视 `CLAUDE.md` 规则和会话语言设置，即使强制要求日语回复，模型仍切换回英语输出。这个高影响力问题影响了多语言团队和国际部署场景，即使给出明确的修正指令，模型仍会漂移回英语。

🔗 [anthropics/claude-code#96326](https://github.com/anthropics/claude-code/issues/96326)

### 2. 安全：自主任务删除了仓库外的用户文件
**Issue #111921** | 3 条评论 | 平台: macOS | 领域: 桌面端, 权限 | **严重程度: 高**
严重数据丢失漏洞：自主工程任务在未审计测试的情况下运行了仓库测试，随后删除了仓库范围外的用户文件。这个跨平台问题引发了对自主操作权限边界的深度担忧。

🔗 [anthropics/claude-code#111921](https://github.com/anthropics/claude-code/issues/111921)

### 3. 安全：密钥意外暴露在聊天中
**Issue #105608** | 4 条评论 | 平台: macOS | 领域: 安全
Claude 持续将密钥和 API 密钥带入对话上下文，即使仅从文件读取也存在此问题，绕过了安全最佳实践。这影响了通过 Claude Code 管理凭证的用户。

🔗 [anthropics/claude-code#105608](https://github.com/anthropics/claude-code/issues/105608)

### 4. Monitor 工具超时上限未被遵守
**Issue #94393** | 14 条评论 | 32 👍 | 平台: Linux | 领域: 工具
Monitor 工具声称 `timeout_ms` schema 上限为 3,600,000ms（1 小时），但实际生命周期约 30 分钟，即使在活跃的非空闲会话中也是如此。这破坏了长时间监控工作流，与文档描述的行为矛盾。

🔗 [anthropics/claude-code#94393](https://github.com/anthropics/claude-code/issues/94393)

### 5. 工具中断被误标为"用户拒绝"
**Issue #86001** | 7 条评论 | 领域: 工具, 核心, Agent SDK | **有复现步骤**
工具调用在执行中被中断时，模型收到标记为 `non_execution_kind: "user-rejected"` 的 `tool_result`，并声称工具从未运行。引擎枚举中有专门的 "interrupted" 值应该被使用，而非造成模型对工具状态的困惑。

🔗 [anthropics/claude-code#86001](https://github.com/anthropics/claude-code/issues/86001)

### 6. 同步插件更新将文件夹移至 .trash，钩子失效开放
**Issue #97847** | 5 条评论 | 平台: macOS | 领域: 安全, 钩子, 插件
同步插件在开放会话期间更新时，旧插件文件夹被移入 `.trash`，但其钩子继续执行——造成钩子引用已删除文件的竞态条件。这影响了插件可靠性和会话稳定性。

🔗 [anthropics/claude-code#97847](https://github.com/anthropics/claude-code/issues/97847)

### 7. 计费：Ultra 周配额异常快速耗尽
**Issue #111685** | 4 条评论 | 平台: Web | 领域: 成本
用户报告单日消耗 100% Fable 和 75% All Models 配额，但 Claude Code 日志中无对应 API 活动。这种无法解释的消耗引发了对后台进程、遥测数据或计费计算准确性的担忧。

🔗 [anthropics/claude-code#111685](https://github.com/anthropics/claude-code/issues/111685)

### 8. 远程控制：升级后设备密钥未创建
**Issue #109909** | 3 条评论 | 平台: macOS, VS Code | 领域: 认证
11 月 13 日升级后，远程控制功能失效——用户收到"受信任设备才能建立提升会话"的错误，因为客户端在升级后未能重新创建设备密钥，破坏了原本稳定的功能。

🔗 [anthropics/claude-code#109909](https://github.com/anthropics/claude-code/issues/109909)

### 9. 文件建议器无法正确关闭
**Issue #83708** | 5 条评论 | 平台: Linux | 领域: TUI | **有复现步骤**
文件建议器在空格/换行输入后未能关闭，导致 ENTER 键覆盖最后一个词而非提交提示。这造成了破坏工作流的糟糕输入体验。

🔗 [anthropics/claude-code#83708](https://github.com/anthropics/claude-code/issues/83708)

### 10. GitHub 网关阻止归档 tarball 下载
**Issue #98823** | 4 条评论 | 平台: Web | 领域: 网络
即使启用全网络访问权限，GitHub 网关仍阻止 `github:` 公仓归档 tarball 的下载，破坏了 Nix flakes 等依赖 GitHub 归档端点的工具链。

🔗 [anthropics/claude-code#98823](https://github.com/anthropics/claude-code/issues/98823)

---

## 重要 PR 进展

### 1. developer-utilities 插件合并
**PR #11713** | 作者: adamkwhite | 状态: 已关闭 (11 月 23 日)
经过充分迭代，developer-utilities 插件现已可用，提供 5 条命令实现社区请求的功能：
- 自定义钩子管理工具
- 会话诊断工具
- 配置检查命令
- 开发工作流增强

*注：会话管理命令（`/list-sessions`、`/label-session`、`claude-resume`）和 `/init-skills` 已移除——已被原生功能替代。*

🔗 [anthropics/claude-code#11713](https://github.com/anthropics/claude-code/pull/11713)

### 2. IP 去重修复
**PR #45553** | 作者: johnkohler00 | 状态: 已关闭 (11 月 24 日)
解决网络操作中的 IP 重复处理问题，提升多实例部署的连接可靠性。

🔗 [anthropics/claude-code#45553](https://github.com/anthropics/claude-code/pull/45553)

---

## 功能需求趋势

对开放 issue 和社区反馈的分析显示以下主要功能方向：

### 跨平台会话统一
- 在 Claude Code CLI、Claude.ai 网页版、Cowork 和移动应用之间实现**共享上下文**（#30675）——用户希望无缝切换和统一对话历史
- 单一会话和并行会话的**暂停/休眠/恢复控制**（#111870）

### 增强的后台任务管理
- 改进孤立后台子代理的可视化和控制（#74133）
- 改善无头模式下后台 Bash/代理任务被终止时的通知（#85129）
- 后台工作进程崩溃预防和恢复（#73600, #75609）

### 权限与安全优化
- 细粒度控制自主任务边界，防止超出范围的文件操作
- 更好的密钥检测和聊天上下文隔离
- 改进跨会话消息传递的权限模式 UX

### 开发者体验
- 所有 UI 组件的主题自定义一致性（diff 渲染器目前忽略自定义颜色）
- CLI 标志可靠性改进（`CLAUDE_CODE_RESUME_HINT_COMMAND` 空白处理）
- 成本透明度和用量归因细分

---

## 开发者痛点

社区反馈中最频繁的痛点集中在以下领域：

### 1. **后台操作稳定性**
多个报告涉及后台代理孤立、守护进程升级期间崩溃或被静默终止。运行长时间代理工作流的开发者需要确定性的生命周期管理。

### 2. **权限模式不一致**
跨会话消息根据权限模式（`auto` 对比 `bypassPermissions`）表现不同，消息可能被静默丢弃。安全模型的设置和使用容易出错且令人困惑。

### 3. **计费归因不透明**
用户无法将 Claude Code 用量与计费仪表板对账。"其他"类别占比过高，Fable 用量显示但日志中无对应 API 调用。

### 4. **平台特定差异**
问题在 macOS、Linux 和 Windows 上的表现各异——守护进程会话处理、远程控制和后台工作进程行为都存在平台特定缺陷。

### 5. **CLI/桌面功能差距**
远程控制、跨会话消息传递和自主任务执行在 CLI 和桌面应用中的行为不一致，迫使用户在界面间做选择。

### 6. **模型本地化可靠性**
Claude 跨会话维护语言设置的能力不一致，影响依赖非英语响应的国际开发者。

---

*周刊数据来源：GitHub。如需实时更新，请关注 [anthropics/claude-code](https://github.com/anthropics/claude-code)。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>I need to translate this technical digest from English to Simplified Chinese while following the rules carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

**Title:**
OpenAI Codex Community Digest → OpenAI Codex 社区日报

**Date line:**
**Date:** 2026-11-24
**Repository:** github.com/openai/codex

**Today's Highlights section:**
The Codex team released **rust-v0.172.0** with major UX improvements including thread links from search results, Tab completion for slash commands (e.g., `/mcp login`), and task group navigation. Community activity remains high with 50 issues and PRs updated in the last 24 hours. A critical quota depletion tracking issue has now accumulated 101 comments, signaling widespread concern about subscription billing inconsistencies that the team is actively investigating.

→ Codex 团队发布了 **rust-v0.172.0**，带来了重要的用户体验改进：支持从搜索结果和转录内容中跳转线程、斜杠命令 Tab 补全（如 `/mcp login`）、任务组导航。过去 24 小时内有 50 个 issue 和 PR 更新，社区活跃度持续走高。配额异常消耗追踪 issue 目前已累计 101 条评论，表明订阅计费不一致问题已引发广泛担忧，团队正在积极调查中。

**Releases section:**
Keep the table structure, translate descriptions:

| Version | Type | Key Changes |
|---------|------|-------------|
| [rust-v0.172.0](https://github.com/openai/codex/releases/tag/rust-v0.172.0) | Stable | Follow thread links from search results & transcripts; Tab completion for slash commands (e.g., `/mcp lo` → `/mcp login`); Jump between task groups |
| [rust-v0.174.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.1) | Alpha | Preview release |
| [rust-v0.172.0-alpha.2.1](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2.1) | Patch | Stability fixes |
| [rust-v0.171.0-alpha.13.2](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.2) | Patch | Stability fixes |

→ 稳定版 | 支持从搜索结果和转录内容中跳转线程；斜杠命令 Tab 补全（如 `/mcp lo` → `/mcp login`）；任务组间跳转
→ Alpha | 预览版
→ Patch | 稳定性修复
→ Patch | 稳定性修复

**Hot Issues section:**
Translate the descriptions while preserving the structure, numbers, and links.

**Key PR Progress section:**
Translate PR descriptions accurately.

**Hot Discussions section:**
Translate titles and descriptions while keeping project names and technical terms.

**Feature Request Trends section:**
Translate themes and descriptions.

**Developer Pain Points section:**
Translate each pain point.

Continue translating the remaining sections with consistent technical terminology.
</think>


# OpenAI Codex 社区日报

**日期：** 2026-11-24
**仓库：** github.com/openai/codex

---

## 今日要点

Codex 团队发布了 **rust-v0.172.0**，带来了重要的用户体验改进：支持从搜索结果和转录内容中跳转线程、斜杠命令 Tab 补全（如 `/mcp login`）、任务组导航。过去 24 小时内有 50 个 issue 和 PR 更新，社区活跃度持续走高。配额异常消耗追踪 issue 目前已累计 101 条评论，表明订阅计费不一致问题已引发广泛担忧，团队正在积极调查中。

---

## 版本发布

| 版本 | 类型 | 重要变更 |
|---------|------|-------------|
| [rust-v0.172.0](https://github.com/openai/codex/releases/tag/rust-v0.172.0) | 稳定版 | 支持从搜索结果和转录内容中跳转线程；斜杠命令 Tab 补全（如 `/mcp lo` → `/mcp login`）；任务组间跳转 |
| [rust-v0.174.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.1) | Alpha | 预览版 |
| [rust-v0.172.0-alpha.2.1](https://github.com/openai/codex/releases/tag/rust-v0.172.0-alpha.2.1) | Patch | 稳定性修复 |
| [rust-v0.171.0-alpha.13.2](https://github.com/openai/codex/releases/tag/rust-v0.171.0-alpha.13.2) | Patch | 稳定性修复 |

---

## 热门 Issue

**1. [配额异常消耗及用量核算不一致](https://github.com/openai/codex/issues/41220)** — 101 条评论，22 👍
> **重要性：** 这个汇总追踪帖已成为一系列用户可见症状的集中反馈点：订阅配额消耗速度明显超出预期，但缺少相应的 token 使用证据。该 issue 涉及面广，团队正在积极调查中。
> **社区反馈：** 高度关注，101 条评论持续增长；用户报告在用量模式未变的情况下配额骤降。

**2. [macOS 桌面版：新建对话后完整访问权限消失](https://github.com/openai/codex/issues/58677)** — 31 条评论，7 👍
> **重要性：** 用户在新建对话编辑器中选择"完整访问权限"，进入对话后发现整个权限控制项消失，导致会话受到限制。
> **社区反馈：** 影响 macOS Apple Silicon 用户（版本 26.1027.51404）；多人确认复现。

**3. [Windows：输入框非空但发送按钮间歇性禁用](https://github.com/openai/codex/issues/62393)** — 26 条评论，0 👍
> **重要性：** ChatGPT Work Windows 版（26.1111.21308）出现回归问题，消息发送间歇性失败，阻断核心工作流。
> **社区反馈：** Windows 用户无法提交提示词的挫败感明显。

**4. [Windows：发送首条消息后权限选择器消失](https://github.com/openai/codex/issues/62975)** — 22 条评论，8 👍
> **重要性：** ChatGPT Work Windows 版在发送首条消息后丢失权限和执行位置选择器，强制使用云端/TPP 而无本地选项。
> **社区反馈：** 赞同数较高（8），表明对 Work 模式用户影响广泛。

**5. [Windows 11 月 21 日更新回归：新对话丢失权限选择器和最大推理努力度](https://github.com/openai/codex/issues/62943)** — 20 条评论，12 👍
> **重要性：** 近期更新移除了新建对话中的关键控件（权限选择器、执行位置、最大推理努力度）。
> **社区反馈：** 回归问题中赞同数最高（12），要求立即修复。

**6. [Windows 蓝牙听写失败：clock=unavailable](https://github.com/openai/codex/issues/62733)** — 15 条评论，0 👍
> **重要性：** 更新至 26.1117.3838.0 后，Windows 26H2 蓝牙耳机听写功能失效。
> **社区反馈：** 从之前可用版本 26.1111.9664.0 的回归。

**7. [Windows 启动时卡死：MoAppHang c6e5](https://github.com/openai/codex/issues/62731)** — 14 条评论，1 👍
> **重要性：** 桌面应用在自动更新至 26.1117.3838.0 后，每次启动都立即冻结，即使清空 CODEX_HOME 也无法解决。
> **社区反馈：** 影响所有启动尝试的关键阻断问题。

**8. [Windows 内核池增长（file/pipe/filter-driver 活动）](https://github.com/openai/codex/issues/31212)** — 14 条评论，0 👍
> **重要性：** Codex 桌面版在长时间本地会话期间触发 Windows 内核池持续增长，进程树全部结束后内存仍不释放。
> **社区反馈：** 2026 年 7 月起的长驻问题；暗示内核级交互可能存在内存泄漏。

**9. [Windows 桌面版约 3 秒后冻结](https://github.com/openai/codex/issues/63123)** — 13 条评论，0 👍
> **重要性：** 应用启动后短时间内无响应，日志中出现"e.hookWindowMessage is not a"错误。
> **社区反馈：** 多名用户可稳定复现。

**10. [允许现有线程在项目文件夹重命名后更新工作目录](https://github.com/openai/codex/issues/26836)** — 13 条评论，12 👍
> **重要性：** 本地项目文件夹重命名后，活跃的 Codex 线程报错"当前工作目录不存在"，尽管聊天记录完好无损。
> **社区反馈：** 赞同数高（12），对项目生命周期管理需求明显。

---

## 关键 PR 进展

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#63553](https://github.com/openai/codex/pull/63553) | TUI 模型选择器使用活跃线程的 provider | 修复恢复线程时模型选择显示错误 provider 的问题 |
| [#63545](https://github.com/openai/codex/pull/63545) | TUI composer 回合上报工作区类型 | 改进暂存线程分配时的上下文准确性 |
| [#63544](https://github.com/openai/codex/pull/63544) | 避免无头 Linux 上弹出密钥环解锁提示 | 防止 headless/CI 环境中出现图形化解锁对话框 |
| [#63540](https://github.com/openai/codex/pull/63540) | Code Mode 输出中 MCP 文本回退去重 | MCP 工具返回含 JSON 回退的结构化数据时输出更清晰 |
| [#63537](https://github.com/openai/codex/pull/63537) | 5 秒后回收空闲本地 code-mode 主机 | 减少残留进程的的资源泄漏 |
| [#63533](https://github.com/openai/codex/pull/63533) | 通过 Responses WebSocket 握手刷新模型目录 | 修复服务器仅在握手中通告新 ETag 时目录过期问题 |
| [#63532](https://github.com/openai/codex/pull/63532) | 扩展可为 MCP 服务器提供每请求认证 | 实现无需重启 MCP 会话即可刷新凭证 |
| [#63528](https://github.com/openai/codex/pull/63528) | 使用作用域签名密钥验证 eval 插件包 | 签名密钥查找的安全修复 |
| [#63520](https://github.com/openai/codex/pull/63520) | 恢复 TUI 前等待前台终端所有权 | 修复 Ctrl-Z 挂起后的 TUI 干扰问题 |
| [#63515](https://github.com/openai/codex/pull/63515) | `codex exec` 遵守配置的保存审批设置 | 尊重审批设置而非强制设为 `never` |

---

## 热门讨论

### 展示与演示

- [**TernaryCode**](https://github.com/openai/codex/discussions/62426) — 原生应用（Rust，无 Electron），显示所有项目中正在等待处理的 Codex 会话。支持 macOS、Windows 和 Linux。
- [**Memlayer 0.3.0 beta**](https://github.com/openai/codex/discussions/63534) — 通过 MCP 为 Codex 提供人工审批的本地记忆功能。允许智能体提议记住偏好设置；用户在精确措辞经过审批后才变为可搜索。
- [**indiebiz-evidence 0.8.1**](https://github.com/openai/codex/discussions/63536) — 帮助 Codex 通过将带日期的 CSV/JSON 导出导入本地 SQLite 来交叉验证收集的数据，提供 15 个 MCP 工具。
- [**ReLimit Monitor for Mac**](https://github.com/openai/codex/discussions/63530) — 显示多个 Codex 账户的剩余 5 小时和每周限额及重置时间。
- [**Qorx Void**](https://github.com/openai/codex/discussions/63322) — Windows 工具，让 Codex 可以查询本地代码索引以避免重复读取琐碎查询的文件。
- [**Codex API 试用构建器**](https://github.com/openai/codex/discussions/63395) — 无需修改 config.toml 即可试用 Responses API 的免费原生配置构建器。

### 功能建议

- [**置顶笔记和对话级摘要**](https://github.com/openai/codex/discussions/63244) — 长期对话中持久笔记和 AI 生成摘要功能的需求。
- [**多个隔离账户配置文件（个人和工作）**](https://github.com/openai/codex/discussions/63399) — 用户希望在同台机器上切换账户而无需登出/登录。

### 投票 / 通用

- [**"IDE Context"功能移除请求**](https://github.com/openai/codex/discussions/11730) — 3 条评论，2 👍。用户对 VS Code Codex 扩展的 IDE context 功能不满，该功能在被移除后会自动重新启用。
- [**Codex 模型弃用通知**](https://github.com/openai/codex/discussions/17038) — GPT-5.2-codex、GPT-5.1-codex 变体及 GPT-5 模型将于 4 月 14 日停用的公告。

---

## 功能需求趋势

对 50+ issue 和 14 个讨论的分析揭示以下主要主题：

| 主题 | 频率 | 示例 |
|-------|-----------|----------|
| **权限/访问控制改进** | 高 | 完整访问消失、沙箱限制、执行位置选择器 |
| **多账户支持** | 高 | 个人/工作隔离配置文件、同机账户切换 |
| **项目生命周期管理** | 中 | 文件夹重命名后工作目录更新、跨移动的线程持久化 |
| **MCP 增强** | 中 | 断连后自动重连、每请求认证、Unix socket 路由 |
| **上下文/记忆功能** | 中 | 置顶笔记、对话摘要、持久偏好设置 |
| **跨平台一致性** | 中 | Windows/macOS 功能对等、回归问题预防 |
| **IDE 集成优化** | 低 | IDE Context 开关、VS Code 扩展改进 |

---

## 开发者痛点

1. **Windows 稳定性回归** — 多份报告指出近期更新（26.1117.x）后出现卡死、冻结和 UI 元素消失。Windows 开发者正面临工作流被阻断的问题。

2. **配额/用量核算不一致** — 累计 101 条评论的汇总追踪帖表明，订阅配额消耗速度与实际用量不匹配的困惑和挫败感广泛存在。

3. **权限/沙箱控制不持久** — 用户选择"完整访问"或"本地"执行后，在发送首条消息或进入对话时设置被重置，强制使用云端。

4. **蓝牙/音频听写回归** — 新版本破坏了之前可用功能，出现 `clock=unavailable` 错误。

5. **无头/Linux 环境问题** — 密钥环解锁提示阻塞 CI/CD 流水线；开发者需要更好的 headless 运行支持。

6. **MCP 可靠性** — 断连后自动重连失败需要手动重启 MCP 服务器，打断自动化工作流。

7. **模型 provider 切换** — TUI 模型选择器在恢复与服务器默认 provider 不同的线程时显示错误的 provider。

8. **资源清理** — 空闲 code-mode 主机和内核池增长在长会话期间造成内存泄漏。

---

*日报基于 2026-11-24 的 GitHub 活动生成。所有链接指向 github.com/openai/codex。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. I need to follow the rules provided:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences around the whole output
- Preserve the Markdown structure exactly
- Keep URLs, links, numbers, dates, code, version tags, etc. verbatim
- Keep project names, repository slugs, usernames, file paths as-is
- Use natural technical Chinese, not literal word-for-word

Let me translate this carefully, maintaining all formatting and translating the content naturally into Chinese.

Key terminology to handle:
- "Community Digest" → 社区快报/技术周报
- "Highlights" → 今日要闻
- "Hot Issues" → 热门议题
- "Key PR Progress" → 重要 PR 进展
- "Feature Request Trends" → 功能需求趋势
- "Developer Pain Points" → 开发者痛点
- "Priority 1/2/3" → P1/P2/P3 (keep as-is usually, but in Chinese context I could use 优先级: P1/P2/P3 or 一级/二级/三级)
- "Closed/Open" status → 已关闭/开放中
- "Patch/Minor/Major/Small" size → S/M/L/XS/XL (keep as-is, these are standard)
- "Dependencies" → 依赖
- "Cherry-pick" → 保留英文，这是技术术语
- "Bearer token" → Bearer Token (保留英文或翻译为令牌认证)
- "OAuth" → OAuth (保留英文)
- "MCP" → MCP (Model Context Protocol, 保留英文)
- "AST" → AST (Abstract Syntax Tree, 保留英文)
- "Gitignore" → .gitignore (保留英文)
- "Vitest" → Vitest (保留英文)
- "esbuild" → esbuild (保留英文)


- "v0.72.0-preview.0" → v0.72.0-preview.0 (保留版本号)

I'll ensure the version number remains untouched, as it's a standard technical identifier that doesn't require translation.
</think>


# Gemini CLI 社区技术周报

**日期：** 2026-11-24  
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日要闻

Gemini CLI 团队发布了 v0.71.1，修复了 A2A Server 中 Bearer Token 认证的安全漏洞；v0.72.0-preview.0 则解决了 Windows 路径处理和 .gitignore 模式匹配问题。当前开发重点聚焦于 Agent 可靠性——多个 P1 级问题正在积极处理中，包括挂起行为、子 Agent 恢复机制和浏览器 Agent 配置问题，相关修复已在今日合并。

---

## 2. 版本发布

### v0.72.0-preview.0
- **修复 (core):** 处理 `dir/**` 模式下的嵌套 `.gitignore` 否定规则 ([#30370](https://github.com/google-gemini/gemini-cli/pull/30370))
- **修复 (cli):** 扩展 Windows ho... (详情已截断)

### v0.71.1
- **补丁:** 从提交 `aafdfdf` 中 Cherry-pick，修复 A2A Server Bearer Token 认证漏洞 ([#30429](https://github.com/google-gemini/gemini-cli/pull/30429))

### v0.71.0-nightly.20261124
- **修复 (a2a-server):** 强制执行 Bearer Token 认证并验证请求输入 ([#30420](https://github.com/google-gemini/gemini-cli/pull/30420))
- **破坏性变更:** 生产环境部署需验证 `A2A_SERVER_BEARER_TOKEN` 环境变量配置

### v0.71.0
- 标准版本发布，包含夜间构建的累积变更

---

## 3. 热门议题

### 🔴 P1 级别（严重）

**#22323** — 子 Agent 在 MAX_TURNS 后被报告为 GOAL success  
*14 条评论, 2 👍*  
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)  
`codebase_investigator` 子 Agent 在达到最大轮次限制仍未完成分析时，仍报告成功状态。这掩盖了失败并误导用户任务已完成。

**#21409** — 通用 Agent 无限挂起  
*8 条评论, 8 👍*  
[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)  
当 Gemini CLI 调用通用 Agent 时，操作会挂起数小时。即便是创建文件夹这样的简单操作也会卡住。临时解决方案：指示模型避免使用子 Agent。

**#21983** — 浏览器子 Agent 在 Wayland 下失败  
*4 条评论, 1 👍*  
[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)  
浏览器 Agent 在 Wayland 环境下以 GOAL 状态终止，表明存在平台兼容性问题。

**#22186** — get-shit-done 输出钩子导致崩溃  
*3 条评论, 0 👍*  
[Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)  
任务接近完成时的最终输出打印阶段发生崩溃，可稳定复现。

**#21763** — Bugreport 未提供子 Agent 上下文  
*2 条评论, 0 👍*  
[Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)  
`/bug` 命令仅捕获主会话数据，遗漏了子 Agent 执行的关键上下文信息，降低了问题诊断价值。

---

### 🟡 P2 级别（高）

**#19873** — 通过模型的 bash 亲和性实现零依赖操作系统沙箱  
*9 条评论, 1 👍*  
[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)  
提议利用 Gemini 3 原生的 POSIX 工具亲和性实现安全 bash 操作与执行后意图路由。可在无外部依赖的情况下实现沙箱隔离。

**#22745** — 评估 AST 感知的文件读取、搜索和映射  
*7 条评论, 1 👍*  
[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)  
跟踪调研 AST 感知工具的可行性，用于精确代码读取、减少 Token 消耗并提升导航精度。

**#21968** — Gemini 未充分利用 skills 和子 Agent  
*7 条评论, 0 👍*  
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)  
尽管存在自定义 skills（如 gradle、git），模型很少主动调用它们，即使任务直接相关。

**#22267** — 浏览器 Agent 忽略 settings.json 覆盖配置  
*5 条评论, 0 👍*  
[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)  
`maxTurns` 等配置覆盖在浏览器 Agent 中被忽略，尽管在 AgentRegistry 中正确合并。

**#24246** — 工具数量超过 128 时返回 400 错误  
*3 条评论, 0 👍*  
[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)  
可用工具超过 400 个时 API 返回 400 错误；模型缺乏智能工具范围划分能力。

**#22465** — Gemini CLI 在创建 vite 应用时卡在交互式提示符  
*2 条评论, 0 👍*  
[Issue #22465](https://github.com/google-gemini/gemini-cli/issues/22465)  
Agent 在遇到交互式 CLI 提示时挂起，表明需要调整行为评估和提示策略。

---

## 4. 重要 PR 进展

| PR | 作者 | 摘要 | 状态 |
|----|--------|---------|--------|
| [#30415](https://github.com/google-gemini/gemini-cli/pull/30415) | sanvisasanapuri | **为网页搜索添加时间限制并在中止时停止重试** — 解决 #29594 中报告的 `google_web_search` 工具在请求停滞时无限等待的问题 | 开放中 (P1) |
| [#30443](https://github.com/google-gemini/gemini-cli/pull/30443) | Shanmukh-l33t | **为 MCP OAuth 发现请求添加单请求超时** — 防止服务器接受连接但不响应导致的 60 秒挂起 | 开放中 (M) |
| [#30441](https://github.com/google-gemini/gemini-cli/pull/30441) | luisfelipe-alt | **在安装/更新同意中覆盖所有扩展内容** — 增强对扩展钩子、上下文文件及其传递依赖的透明度 | 开放中 (XL) |
| [#30420](https://github.com/google-gemini/gemini-cli/pull/30420) | diegogodinezr | **强制 Bearer Token 认证和请求验证** — A2A Server 生产环境安全修复 | 已关闭 |
| [#30423](https://github.com/google-gemini/gemini-cli/pull/30423) | dependabot | **更新 npm 依赖组（69 项更新）** — 主要依赖刷新，包括 simple-git、octokit、vitest | 开放中 (XL) |
| [#30433](https://github.com/google-gemini/gemini-cli/pull/30433) | dependabot | **将 zod 从 3.25.76 升级到 4.6.6** — 根包大版本升级 | 已关闭 (S) |
| [#30430](https://github.com/google-gemini/gemini-cli/pull/30430) | dependabot | **将 @modelcontextprotocol/sdk 从 1.23.0 升级到 1.32.0** — examples 中重要的 MCP SDK 更新 | 已关闭 (XS) |
| [#30438](https://github.com/google-gemini/gemini-cli/pull/30438) | dependabot | **将 vite 从 7.3.2 升级到 7.3.8** — 最新 vite 补丁版本 | 已关闭 (XS) |
| [#30207](https://github.com/google-gemini/gemini-cli/pull/30207) | Likhith-BlueLotus | **在 esbuild 前清除 bundle/ 以移除过期 chunk** — 修复夜间版本发布失败（413 Request Entity Too Large） | 已关闭 (XS) |
| [#30429](https://github.com/google-gemini/gemini-cli/pull/30429) | gemini-cli-robot | **将认证修复 Cherry-pick 到 v0.71.0** — 安全补丁回填到稳定版本 | 已关闭 (XL) |

---

## 5. 功能需求趋势

分析开放中的 issue 后，呈现三大主流功能方向：

### Agent 智能与自主性
- **主动调用 skill/子 Agent** (#21968) — 模型应在任务相关时无需显式提示即可识别并利用可用 skills
- **零依赖操作系统沙箱** (#19873) — 利用模型原生的 bash 亲和性实现安全命令执行
- **AST 感知的代码库工具** (#22745, #22747) — 精准代码发现，减少 Token 消耗

### 可靠性与恢复
- **子 Agent 失败透明性** (#22323, #21763) — 准确报告部分完成状态并在 bug 报告中保留上下文
- **交互式提示处理** (#22465) — 更好地处理 CLI 提示场景
- **浏览器 Agent 弹性** (#22232) — 失败时自动接管会话而非快速失败

### 安全与配置
- **危险命令防护** (#22672) — 劝阻 `git reset --force` 等不安全操作
- **工作区级策略** (#18397) — 支持按目录管理策略，而非仅全局配置

---

## 6. 开发者痛点

### 1. Agent 挂起 / 无限等待
多个 issue（#21409、#30415）报告操作停滞数分钟到数小时——尤其在网页搜索、通用 Agent 和交互式提示场景。缺少请求超时机制导致用户体验差并强制手动干预。

### 2. 工具过载 / 上下文膨胀
Issue #24246（400+ 工具导致错误）和 #19561（Token 膨胀每轮增加 +15k）凸显了对更智能工具划分和精准读取的需求，而非"消防栓"式的上下文注入。

### 3. 配置不一致
浏览器 Agent 忽略 `settings.json` 覆盖配置（#22267），尽管在其他地方正确合并，导致部分设置生效、部分静默失效的困惑行为。

### 4. 临时文件泛滥
模型在限制 shell 执行时会在随机目录生成临时脚本（#23571），为保持提交整洁带来清理负担。

### 5. 构建基础设施问题
夜间版本发布因过期 bundle 产物膨胀 tarball 大小而失败数周（#30207）——最近已修复但暴露了 CI 监控缺口。

---

## 快速链接

- **仓库：** https://github.com/google-gemini/gemini-cli
- **版本发布：** https://github.com/google-gemini/gemini-cli/releases
- **开放议题：** https://github.com/google-gemini/gemini-cli/issues?q=is%3Aissue+is%3Aopen
- **贡献指南：** https://github.com/google-gemini/gemini-cli/blob/main/CONTRIBUTING.md

---

*生成于 2026-11-24 | 数据反映 2026-11-23 至 2026-11-24 的活动*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to output ONLY the translation, no explanations, no markdown fences. I should preserve all formatting, links, numbers, etc. and use natural technical Chinese.

Let me translate this carefully:

Title: GitHub Copilot CLI Community Digest
Date: 2026-11-24
Repository: github.com/github/copilot-cli

I need to translate all the headings, content, tables, etc. into natural Simplified Chinese technical writing style.

Key terms to translate:
- Community Digest → 社区摘要
- Today's Highlights → 今日要闻
- Releases → 版本更新
- Hot Issues → 热门问题
- Key PR Progress → 重要 PR 进展
- Feature Request Trends → 功能需求趋势
- Developer Pain Points → 开发者痛点

Technical terms should be kept as-is or translated appropriately for a Chinese developer audience. Terms like MCP, OAuth, TLS, HTTP, API, etc. are standard technical terms in Chinese.

Let me translate section by section:
</think>


GitHub Copilot CLI 社区摘要

**日期：** 2026-11-24
**仓库：** github.com/github/copilot-cli

---

## 今日要闻

**v1.0.115-8** 版本带来了子智能体使用追踪的改进和 Assisted Permissions 模型的增强。社区持续在 MCP 相关问题上投入大量精力——围绕 OAuth 令牌刷新、会话生命周期和跨平台兼容性的多个问题浮出水面，其中 macOS 上新出现了一个 TLS 1.3 回归问题，以及 Arch Linux 上的一个严重 abort 崩溃。Windows 特定问题依然存在，包括锁文件权限冲突和长期遗留的 `--no-warnings` 标志不兼容问题。

---

## 版本更新

### v1.0.115-8
- **优化 `--usage-output-file`**：子智能体使用数据现在按配置的名称而非调用 ID 分组，并报告启动次数——便于观察多智能体工作流的资源消耗情况。
- **优化 Assisted Permissions**：审核模型在主模型卡顿或失败时可回退到备选模型，减少不必要的审批提示。
- **参考：** https://github.com/github/copilot-cli/releases/tag/v1.0.115-8

---

## 热门问题

### 1. 工作树应默认禁用 [#2243](https://github.com/github/copilot-cli/issues/2243) *(21 👍)*
**状态：** 开启 | **领域：** 配置、工具
一个高影响力的可用性问题，Git worktree 集成导致代码被应用到错误的仓库状态，产生"数千行有用的新代码，但无法应用回主工作树"。社区强烈认同工作树应该改为可选功能而非默认行为。

### 2. 远程 MCP OAuth 令牌刷新静默失败 [#4203](https://github.com/github/copilot-cli/issues/4203) *(6 👍)*
**状态：** 开启 | **领域：** 认证、MCP
当远程 MCP 服务器的缓存访问令牌过期时，CLI 强制要求交互式重新认证，而不是按 RFC 6749 §6 规范静默使用刷新令牌。这破坏了自动化工作流，导致可用工具列表中断。

### 3. 后台 Shell 完成后 HTTP 400 `content[].thinking` 错误 [#4946](https://github.com/github/copilot-cli/issues/4946)
**状态：** 开启 | **领域：** 会话、模型
一个回归问题，后台 shell 命令完成通知触发包含不支持的 `thinking` 内容块的畸形 API 请求，导致后续轮次的 HTTP 400 错误。

### 4. Windows 上 `--no-warnings` 标志导致终端噪音 [#1446](https://github.com/github/copilot-cli/issues/1446)
**状态：** 已关闭 | **领域：** 平台 Windows、工具
一个长期存在的 Windows 特定 bug，尽管该标志是标准参数，CLI 仍输出"error: unknown option '--no-warnings'"，产生嘈杂的终端输出。

### 5. 陈旧锁文件导致会话无法恢复 [#4805](https://github.com/github/copilot-cli/issues/4805)
**状态：** 开启 | **领域：** 会话、MCP
来自崩溃主机的遗留 `inuse.<pid>.lock` 文件使会话永久阻塞。底层会话数据完好无损且可回放，但 CLI 拒绝恢复——影响了长时间运行的开发工作流。

### 6. 自 1.0.93-0 起 macOS 上 TLS 1.3 失效 [#5559](https://github.com/github/copilot-cli/issues/5559)
**状态：** 开启 | **领域：** 网络、MCP | **更新于：** 2026-11-24
一个新报告的严重回归问题，阻止了 macOS 上 MCP 到 HTTPS 端点（例如 Jenkins MCP Server）的连接。基于 TLS 1.3 的 Streamable HTTP 失败，暂无解决方案。

### 7. Arch Linux 上 x86_64 架构在长会话时 abort [#5561](https://github.com/github/copilot-cli/issues/5561)
**状态：** 开启 | **领域：** 平台 Linux | **创建于：** 2026-11-24
一份新提交的崩溃报告，捆绑的 `cli-native.node` 模块在 Arch Linux 长时间交互式会话期间调用 `abort()`，产生 SIGABRT 信号但无诊断输出。

### 8. 当 `gh` 在 PATH 中时内置 GitHub MCP 读取工具不可用 [#5550](https://github.com/github/copilot-cli/issues/5550)
**状态：** 开启 | **领域：** 智能体、MCP
当系统 PATH 上存在 `gh` CLI 时，智能体无法通过内置 MCP 服务器读取 GitHub issues——这是 PATH 优先级冲突导致的，破坏了预期功能。

### 9. 120 秒超时后会话事件投递永久失败 [#5100](https://github.com/github/copilot-cli/issues/5100)
**状态：** 已关闭 | **领域：** 会话
一个严重的会话生命周期 bug，首次主机确认超时会永久破坏事件投递，使会话在完全恢复前不可用——这对长时间交互式会话影响严重。

### 10. 自 1.0.110 起 ACP 模式推理摘要缺失 [#5556](https://github.com/github/copilot-cli/issues/5556)
**状态：** 开启 | **领域：** 非交互式
ACP 客户端不再收到 `agent_thought_chunk` 会话更新，导致"thinking" UI 区块在模型长时间推理期间保持静默。1.0.109 到 1.0.110 之间的回归问题。

---

## 重要 PR 进展

### #5554 - 为 CLI 容器添加可选的连接令牌生成功能
**状态：** 已关闭
使开发者能够在没有预先存在的 GitHub 凭证的情况下，将本地 SDK 客户端连接到无头 CLI。设置 `COPILOT_CONNECTION_TOKEN_GENERATE=true` 在启动时打印新的随机令牌。
- **作者：** brunoborges
- **参考：** https://github.com/github/copilot-cli/pull/5554

---

## 功能需求趋势

对 28 个近期活跃问题的分析揭示了以下需求集群：

| 类别 | 主要需求 |
|----------|--------------|
| **MCP 扩展** | 远程服务器的动态 Header 展开（与 Claude Code 对齐）、MCP Tasks 增强以支持任务必需的工具、工作区级 `.mcp.json` 注释支持 |
| **会话管理** | 优先搜索历史会话以避免重复解决问题、可靠的锁文件回收、会话恢复改进 |
| **认证** | 远程 MCP 的静默 OAuth 令牌刷新、Windows 上的访客租户 Entra 认证、本地 SDK 客户端的共享密钥生成 |
| **平台 Windows** | 提权/非提权锁文件权限修复、插件卸载访问修复 |
| **配置** | 移除或可选化 100 词响应限制、默认禁用工作树、企业策略控制沙箱配置 |
| **CLI 行为** | `--allow-tool` 应能指定扩展工具、Windows 上正确支持 `--no-warnings` 标志 |

---

## 开发者痛点

1. **MCP 认证缺口**：OAuth 令牌处理不一致——刷新令牌未静默使用，访客租户认证失败，Supabase OAuth 状态探测缺少正确的会话 Header。

2. **会话生命周期脆弱性**：崩溃会话的锁文件阻止重新进入，事件投递超时永久破坏会话，后台 shell 完成通知触发 API 错误。

3. **Windows 平台不兼容**：提权/非提权会话的持久权限错误、`--no-warnings` 标志被拒绝、锁定文件上的插件卸载失败。

4. **MCP 服务器集成问题**：本地 stdio 服务器在会话 ID 交换期间断开，`gh` 在 PATH 中与内置 GitHub MCP 工具冲突，Tasks 扩展声明导致 `CreateTaskResult` 拒绝。

5. **平台特定崩溃**：macOS 上的 TLS 1.3 回归（阻断 MCP over HTTPS）和 Arch Linux 上的 SIGABRT 崩溃（长会话期间）——均为新提交的高严重性问题。

6. **可观测性缺口**：ACP 客户端缺失推理块流、MCP 工具导致 schema 验证失败时无可见性、`rg` 压缩时文件名显示截断。

---

*摘要结束*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the entire "OpenCode Community Digest" from English to Simplified Chinese. I need to:

1. Translate all text content while preserving the Markdown structure exactly
2. Keep all URLs, links, issue/PR references (#xxxxx), version tags (v2.4.1, etc.), file paths, API/config identifiers in their original English form
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the whole output

Let me carefully translate section by section:

**Title:** OpenCode Community Digest → OpenCode 社区周刊

**Date line:** Keep as-is since it contains technical identifiers

**Section 1: Today's Highlights**
- OpenCode v2.4.1 has been released... → OpenCode v2.4.1 已发布... 
- critical fixes → 关键修复
- macOS 12 users → macOS 12 用户
- session saving → 会话保存
- config-only providers → 仅配置模式提供商
- Desktop app → 桌面应用
- The community continues to... → 社区持续推动...
- Desktop browser pane → 桌面浏览器面板
- Windows and cross-session management → Windows 平台和跨会话管理
- security-related PRs → 安全相关 PR
- opencode:// fetch permissions → opencode:// 请求权限

**Section 2: Releases** - Table
- Fixed session saving on macOS 12 → 修复 macOS 12 上的会话保存问题
- SQLite compatibility → SQLite 兼容性问题
- improved visibility → 改进可见性
- Introduced built-in Desktop browser → 内置桌面浏览器
- importing sign-ins and browsing history → 导入登录信息和浏览历史


- Chrome, Edge, Firefox, Safari → 保持英文

**Section 3: Hot Issues** - Table
- Service port conflict on relaunch → 重启时服务端口冲突
- Relaunching OpenCode fails → 重新启动 OpenCode 失败
- previous background service hasn't exited → 前台后台服务尚未退出
- blocking productivity → 影响工作效率
- widespread impact → 影响范围广
- DeepSeek pre-header stalls → DeepSeek 前置头卡顿
- severe performance degradation → 严重性能下降
- high cache hit rates → 高缓存命中率
- large contexts → 大上下文场景
- unusable latency → 延迟过高无法使用
- Right-click links → 右键链接
- Desktop browser pane → 桌面浏览器面板
- richer agent interaction → 更丰富的智能体交互
- Session-scoped terminals → 会话级终端
- workspace-wide → 工作区级
- isolation per session → 会话隔离
- cleaner workflows → 更清晰的工作流
- Clipboard write racing → 剪贴板写入竞争
- macOS → 保持英文
- native and OSC 52 clipboard writes conflict → 原生剪贴板与 OSC 52 剪贴板写入冲突
- Alacritty → 保持英文
- potential data loss → 潜在数据丢失
- MCP servers missing → MCP 服务器缺失
- Standalone CLI → 独立 CLI
- Headless runs → 无头运行
- intermittently fail → 间歇性失败
- automation pipelines → 自动化流程
- IDE-grade project tree → IDE 级项目树
- Git worktree manager → Git 工作树管理器
- Git history viewer → Git 历史查看器
- significant UX leap → 显著的用户体验提升
- Expose upstream model → 暴露上游模型
- auto/fusion routers → 自动/融合路由器
- visibility into → 可见性
- TTFT scales with prompt length → TTFT 随提示词长度增长
- opencode-go → 保持英文
- Time-to-first-token degradation → 首个 token 延迟恶化
- cold prompts → 冷提示词
- Show cross-session token totals → 显示跨会话 token 总数
- Context panel → 上下文面板
- cumulative usage → 累计使用量
- cache efficiency → 缓存效率
- cost management → 成本管理

**Section 4: Key PR Progress** - Table
- fix(desktop): reattach browser to sessions in open tabs → fix(desktop): 重新关联打开标签页中的浏览器会话
- two edge cases → 两个边界情况
- lost browser tools → 丢失浏览器工具
- app restart or tab creation → 应用重启或标签页创建
- feat(app): pin inbox sessions and list archived ones → feat(app): 置顶收件箱会话并列出归档会话
- experimental Inbox sidebar → 实验性收件箱侧边栏
- fix(app): line up settings with home → fix(app): 统一设置页面与主页布局
- consistent layout → 一致的布局
- eliminate sidebar jumps → 消除侧边栏跳动
- feat(data): share and embed cards for every section → feat(data): 每个区块支持分享和嵌入卡片
- Share button with branded editor → 带品牌编辑器的分享按钮
- opencode.ai/data → 保持英文
- feat(core): check opencode:// fetch as API command → feat(core): 将 opencode:// 请求作为 API 命令检查
- routes through permissions → 通过权限路由
- align with → 对齐
- fix(core): only webfetch rules can deny opencode:// fetch → fix(core): 仅 webfetch 规则可拒绝 opencode:// 请求
- disabling web access → 禁用网页访问
- break local API access → 破坏本地 API 访问
- fix(core): scope plugin event streams to location → fix(core): 限制插件事件流的作用域到 Location
- cross-location event leakage → 跨 Location 事件泄露
- feat(mcp): trust private-network certificates on first-use → feat(mcp): 首次使用时信任私有网络证书
- self-signed MCP server certificates → 自签名 MCP 服务器证书
- feat(mcp): support per-server TLS trust → feat(mcp): 支持按服务器配置 TLS 信任
- optional tls config block → 可选的 tls 配置块
- remote MCP servers → 远程 MCP 服务器
- custom certificates → 自定义证书
- fix(core): let plugin create subagent automation during setup → fix(core): 允许插件在初始化时创建子智能体自动化
- unblocks plugins → 解锁插件
- subagent-targeted automations → 子智能体自动化
- initialization → 初始化

**Section 5: Feature Request Trends** - Table
- Desktop UX → 桌面端用户体验
- IDE-grade project trees → IDE 级项目树
- git history viewer → Git 历史查看器
- right-click browser links → 右键浏览器链接
- working directory in header → 标题栏显示工作目录
- draggable file tree splitter → 可拖拽文件树分割器
- Session Management → 会话管理
- session-scoped terminals → 会话级终端
- pinning sessions → 置顶会话
- context size in picker → 选择器中显示上下文大小
- cross-session token totals → 跨会话 token 总数
- MCP Enhancements → MCP 增强
- first-use TLS trust → 首次 TLS 信任
- expose upstream model routing → 暴露上游模型路由
- file chooser support → 文件选择器支持
- Provider Transparency → 提供商透明度
- upstream model visibility → 上游模型可见性
- Windows Platform → Windows 平台
- project name clarity → 项目名称清晰度

**Section 6: Developer Pain Points** - Table
- MCP server registration failures → MCP 服务器注册失败
- Standalone CLI misses MCP servers ~10% → 独立 CLI 约 10% 概率遗漏 MCP 服务器
- disabled servers re-enable after Location eviction → 被禁用的服务器在 Location 回收后重新启用
- macOS clipboard instability → macOS 剪贴板不稳定
- Native + OSC 52 clipboard writes race → 原生剪贴板与 OSC 52 写入竞争
- Service port conflicts on relaunch → 重启时服务端口冲突
- Background service singleton causes launch failures → 后台服务单例导致启动失败
- previous instance lingers → 前一个实例未完全退出
- TTFT degradation at scale → 大规模场景下 TTFT 下降
- opencode-go shows 6–19s delays → opencode-go 显示 6–19 秒延迟
- large prompts despite identical cache state → 相同缓存状态下的大提示词
- Plan agent compaction loops → Plan 智能体压缩循环
- Auto-compaction triggers infinite response loops → 自动压缩触发无限响应循环
- plan mode → plan 模式
- Per-user service singleton → 用户级服务单例
- First launch environment applies globally → 首次启动环境全局应用
- DeepSeek pre-header stalls → DeepSeek 前置头卡顿
- 21–178s stalls at 98%+ cache hit rates → 98%+ 缓存命中率下卡顿 21–178 秒
- large contexts → 大上下文
- TUI queue rendering → TUI 队列渲染
- Removed queued messages persist → 已移除的队列消息仍存在
- session_inbox never drains → session_inbox 永不耗尽

**Footer:**
- End of digest → 周刊结束
- raw data and historical trends → 原始数据和历史趋势

现在我需要确保术语一致性，建立一个映射表来规范关键术语的翻译：

- Community Digest → 社区周刊
- Desktop → 桌面端
- Session → 会话
- Terminal → 终端
- Browser pane → 浏览器面板
- Issue → Issue（保持英文）
- PR → PR（保持英文）
- Service → 服务
- Plugin → 插件
- Automation → 自动化
- Location → Location（保持英文，因为这是技术术语）
- Stream → 流
- Context → 上下文
- Cache → 缓存
- Token → Token（保持英文）
- TTFT → TTFT（保持英文）
- DeepSeek → DeepSeek（保持英文）
- MCP → MCP（保持英文）
- TLS → TLS（保持英文）
- API → API（保持英文）
- CLI → CLI（保持英文）
- URL → URL（保持英文）
- SQLite → SQLite（保持英文）
- Alacritty → Alacritty（保持英文）
- Chrome, Edge, Firefox, Safari → 保持英文
- macOS → macOS（保持英文）
- Windows → Windows（保持英文）
- Git → Git（保持英文）
- opencode.ai → 保持英文

现在开始生成最终的翻译内容。
</think>


# OpenCode 社区周刊

**日期：** 2026-11-24
**来源：** github.com/anomalyco/opencode

---

## 一、本期要闻

OpenCode v2.4.1 已发布，为 macOS 12 用户带来了关键修复——会话保存在旧版 SQLite 上现可正常工作，同时仅配置模式的提供商也能正确展示其模型。社区持续推动桌面应用的重大升级，多项功能提案聚焦于 Windows 平台和跨会话管理。此外，多个涉及 `opencode://` 请求权限的安全相关 PR 已合并。

---

## 二、版本发布

| 版本 | 摘要 |
|------|------|
| **v2.4.1** | 修复 macOS 12 上的会话保存问题（SQLite 兼容性），改进仅配置模式提供商的模型可见性。 |
| **v2.4.0** | 内置桌面浏览器，支持从 Chrome、Edge、Firefox 和 Safari 导入登录信息和浏览历史。 |

---

## 三、热门 Issue

| # | Issue | 为何值得关注 | 点赞 |
|---|-------|---------------|------|
| [#54267](https://github.com/anomalyco/opencode/issues/54267) | 重启时服务端口冲突 | 之前的后台服务未退出时，重新启动 OpenCode 会失败，影响工作效率。14 条评论表明影响范围广泛。 | 👍 4 |
| [#57849](https://github.com/anomalyco/opencode/issues/57849) | DeepSeek 前置头卡顿（21–178秒） | 高缓存命中率（97–99%）时出现严重性能下降，在大上下文场景下导致延迟过高无法使用。 | 👍 1 |
| [#65946](https://github.com/anomalyco/opencode/issues/65946) | 桌面浏览器面板中右键链接 | 提议在应用内直接与网页内容进行更丰富的智能体交互。 | 👍 0 |
| [#43758](https://github.com/anomalyco/opencode/issues/43758) | 会话级终端 | 当前终端为工作区级别；开发者希望每个会话都有隔离，以获得更清晰的工作流。 | 👍 1 |
| [#59052](https://github.com/anomalyco/opencode/issues/59052) | macOS 上剪贴板写入竞争 | Alacritty 中原生剪贴板与 OSC 52 写入冲突，导致警告并可能造成数据丢失。 | 👍 0 |
| [#65932](https://github.com/anomalyco/opencode/issues/65932) | 独立 CLI 约 10% 概率遗漏 MCP 服务器 | 无头运行时间歇性注册失败 MCP 服务器，破坏自动化流程。 | 👍 0 |
| [#65977](https://github.com/anomalyco/opencode/issues/65977) | IDE 级项目树和 git 历史 | 为桌面应用提议 IntelliJ 风格的功能——这是显著的用户体验提升。 | 👍 0 |
| [#60309](https://github.com/anomalyco/opencode/issues/60309) | 在路由器响应中暴露上游模型 | 自动/融合路由器的用户需要了解实际处理请求的模型。 | 👍 0 |
| [#65966](https://github.com/anomalyco/opencode/issues/65966) | opencode-go 的 TTFT 随提示词长度增长 | 冷提示词路由到远程基础设施时，首个 Token 延迟恶化（6秒→19秒）。 | 👍 0 |
| [#58024](https://github.com/anomalyco/opencode/issues/58024) | 在上下文面板显示跨会话 Token 总数 | 用户希望跨会话跟踪累计使用量和缓存效率以进行成本管理。 | 👍 0 |

---

## 四、关键 PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| [#65969](https://github.com/anomalyco/opencode/pull/65969) | **fix(desktop): 重新关联打开标签页中的浏览器会话** | 修复两个边界情况：应用重启或创建标签页后会话丢失浏览器工具。 |
| [#65961](https://github.com/anomalyco/opencode/pull/65961) | **feat(app): 置顶收件箱会话并列出归档会话** | 为实验性收件箱侧边栏添加置顶和归档浏览功能。 |
| [#65998](https://github.com/anomalyco/opencode/pull/65998) | **fix(app): 统一设置页面与主页布局** | 消除设置页面与主页之间的侧边栏跳动，创造一致的布局体验。 |
| [#65994](https://github.com/anomalyco/opencode/pull/65994) | **feat(data): 每个区块支持分享和嵌入卡片** | 在 opencode.ai/data 各区块添加带品牌编辑器的分享按钮。 |
| [#65931](https://github.com/anomalyco/opencode/pull/65931) | **feat(core): 将 opencode:// 请求作为 API 命令检查** | 将 `opencode://` 请求通过权限路由，与 `opencode api` 行为保持一致。 |
| [#65934](https://github.com/anomalyco/opencode/pull/65934) | **fix(core): 仅 webfetch 规则可拒绝 opencode:// 请求** | 确保禁用网页访问不会破坏通过 `opencode://` 的本地 API 访问。 |
| [#65846](https://github.com/anomalyco/opencode/pull/65846) | **fix(core): 限制插件事件流的作用域到 Location** | 防止插件间的跨 Location 事件泄露（关闭 #56290）。 |
| [#60041](https://github.com/anomalyco/opencode/pull/60041) | **feat(mcp): 首次使用时信任私有网络证书** | 自签名 MCP 服务器证书的首次使用流程（#40111 的一部分）。 |
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | **feat(mcp): 支持按服务器配置 TLS 信任** | 为远程 MCP 服务器添加可选的 `tls` 配置块以支持自定义证书。 |
| [#65991](https://github.com/anomalyco/opencode/pull/65991) | **fix(core): 允许插件在初始化时创建子智能体自动化** | 解锁在初始化阶段创建子智能体目标自动化的插件。 |

---

## 五、功能需求趋势

分析本期 Issue，功能方向呈现以下分布：

| 类别 | 需求概述 |
|------|----------|
| **桌面端 UX** | IDE 级项目树（#65977）、Git 工作树管理器、git 历史查看器、右键浏览器链接（#65946）、标题栏显示工作目录（#65950）、可拖拽文件树分割器（#65944） |
| **会话管理** | 会话级终端（#43758）、置顶会话（#59906、#65953）、选择器中显示上下文大小（#61070）、跨会话 Token 总数（#58024） |
| **MCP 增强** | 首次 TLS 信任（#60041、#60039）、暴露上游模型路由（#60309）、文件选择器支持（#65956） |
| **提供商透明度** | 自动/融合路由器中上游模型可见性（#60309）、缓存命中率显示（#58024） |
| **Windows 平台** | GitHub 面板插件（#65970）、项目名称清晰度（#65959）、IDE 级功能（#65977） |

---

## 六、开发者痛点

| 痛点 | 频率 | 详情 |
|------|------|------|
| **MCP 服务器注册失败** | 高 | 独立 CLI 约 10% 概率遗漏 MCP 服务器；被禁用的服务器在 Location 回收后重新启用。 |
| **macOS 剪贴板不稳定** | 中 | 原生剪贴板与 OSC 52 写入竞争，导致 Alacritty 警告。 |
| **重启时服务端口冲突** | 中 | 后台服务单例导致当前实例未完全退出时启动失败。 |
| **大规模场景下 TTFT 下降** | 中 | opencode-go 在相同缓存状态下的大提示词显示 6–19 秒延迟。 |
| **Plan 智能体压缩循环** | 中 | 自动压缩在 plan 模式触发无限响应循环（#62628）。 |
| **用户级服务单例** | 中低 | 首次启动环境全局应用，跨越用户配置（#58141）。 |
| **DeepSeek 前置头卡顿** | 中低 | 98%+ 缓存命中率下大上下文卡顿 21–178 秒（#57849）。 |
| **TUI 队列渲染** | 低 | 已移除的队列消息持久化直到客户端重启；session_inbox 永不耗尽（#65993）。 |

---

*周刊结束。原始数据和历史趋势请访问 [github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English Pi Community Digest into Simplified Chinese. Let me translate it following the rules provided:

1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly
3. Keep URLs, code, numbers, dates verbatim
4. Keep project names, usernames, issue references as-is
5. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

---

# Pi 社区摘要 — 2026-11-24

## 今日要闻

本期社区集中修复了一系列稳定性问题，涵盖了临时文件崩溃、finish-reason 错误重试以及流解析性能优化。模型目录清理也取得了显著进展，多个供应商的模型已下线。与此同时，历经数月讨论的 git monorepo 子目录功能终于合并，支持更细粒度的包安装。

## 版本发布

过去 24 小时内无新版本发布。

## 热门 Issue

### 1. cacheWarming "idle" 在扩展处理 turn_end 后静默停止 — OPEN
`cacheWarming: "idle"` 存在一个严重回归问题：当会话上下文中包含自定义消息或压缩消息时，空闲预热无法触发。507 个 `cache_warming_decision` 事件全部显示 `continuationProbability: 1`，没有任何一个落在 `0.15`，导致用户报告会话始终停留在"Inactive"状态。社区正在积极调试扩展生命周期钩子与预热决策逻辑之间的交互问题。(16 条评论，4 👍)

### 2. 压缩摘要随时间无限增长 — OPEN
一个长时间运行的会话经过九次压缩后，摘要从 17k 字符膨胀到 164k 字符，第九次压缩耗时 588 秒，消耗 75k 输出 tokens。更新提示词要求保留所有历史信息，导致指数级增长。另一台机器在五次压缩后也达到了 88k。这是长时间会话的重大 UX 和性能回归问题。(4 条评论)

### 3. 阈值压缩在虚拟模型场景下远低于窗口触发 — OPEN
当选择虚拟模型时，`_modelForMessage()` 返回 `undefined`，导致 `_checkCompaction` 完全跳过上下文窗口检查。这会导致压缩触发时机过早或不稳定。修复方案很直接（窗口未知时跳过阈值检查），但虚拟模型和物理模型层之间的交互需要谨慎处理。(4 条评论)

### 4. MCP SSE 反复拼接并重新扫描不完整的大事件 — OPEN (inprogress)
SSE 流读取器将分块追加到单个字符串，并在每个分块上重新扫描整个缓冲区，导致大事件的复杂度为 O(n²)。PR #12451 正在解决此问题，通过从保存的偏移量读取而非重新扫描完整累积字符串。(3 条评论)

### 5. openai-codex max_output_tokens 限制破坏 WebSocket 续传 — OPEN
在 `openai-codex` 配合 GPT-6.2-astra 使用时，会话中途丢失 `previous_response_id` 续传，迫使重新发送完整的 `input` 数组，并浪费了 117k tokens 的提示词缓存。根本原因是 token 限制与 WebSocket 序列化的交互问题。(3 条评论)

### 6. gemini-4-neon 流中途停止 — OPEN
新模型 gemini-4-neon 频繁在流传输中途停止且无法恢复。根本原因已确认：OpenRouter 将 `"MALFORMED_RESPONSE"` 规范化为 OpenAI 兼容错误格式。

Pi 因此错误处理了流终止。(2 条评论)

### 7. Windows：单个 EIO/EPIPE 导致代理中途崩溃 — OPEN (inprogress)
`emergencyTerminalExit()` 在任何 stdin/stdout/stderr 错误时都会退出进程。在 Windows 上，这会在正常使用中触发（标签切换、休眠/唤醒、ConPTY 不稳定），导致代理中途崩溃。社区正在讨论是否应该优雅降级而非直接退出。(2 条评论)

### 8. 恢复的 Kimi 会话无法选择出站载荷中存在的工具 — OPEN
恢复的 `kimi-coding` 和 `k3.1-pro` 会话无法生成对 loadout、系统提示词和 `before_provider_request` 载荷中存在四个工具的调用。新建会话正常工作。问题特定于会话恢复时的状态重建。(2 条评论)

### 9. RPC 延迟提示在 bootstrap 启动压缩时未收到响应 — OPEN
在 `session_start` bootstrap 运行中，如果触发了压缩，发送的提示永远得不到应答。压缩完成后，延迟提示仍未被处理。问题通过 OAR 主机项目的自动化测试报告。(2 条评论)

### 10. ai：保留结构化的提供者失败元数据以贯穿 AssistantMessage — OPEN
Cherry Studio Mobile 需要 HTTP 状态、提供者错误码和显式重试可能性来处理终端错误事件，以便客户端做出智能重试决策。此 issue 提议使用现有的诊断机制建立共享类型化契约。(4 条评论)

## 重要 PR 进展

### 1. fix(mcp,ai,agent,coding-agent,tui)：以线性时间读取大型流式行和事件 — OPEN
关闭 #12224。用基于偏移量的解析替换 O(n²) 字符串扫描，显著提升大型 SSE 事件和长行的性能。这是流稳定性修复的基础性改进。(petrroll)

### 2. fix(coding-agent,tui)：阻止临时文件写入失败导致 pi 崩溃 — MERGED
修复 #10585。为 bash 输出临时文件的 `WriteStream` 添加适当的错误监听器，防止 ENOSPC 和 EACCES 错误杀死代理。包含临时文件创建失败时的降级行为。(petrroll)

### 3. feat(ai,coding-agent)：新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow 和 StepFun 提供商 — OPEN
新增六家托管推理提供商，共 74+ 模型。提供商维护者 mitsuhiko 持续扩展模型目录的广度。(mitsuhiko)

### 4. fix(ai)：在重试分类器中分类 finish_reason "error" — MERGED
关闭 #12206。将 `finish_reason: "error"` 分类从提供商消息移至共享重试分类器，为 Copilot、OpenRouter 和 Mistral 的临时失败启用自动重试。(petrroll)

### 5. fix(ai)：将 Codex 请求 effort 固定为初始选择 — MERGED
关闭 #12361。修复 openai-codex 发送 `medium` effort 而非所选 `high`/`xhigh` 的问题。现在直接发送初始选择的 effort，仅在变化时追加更新。(mitsuhiko)

### 6. fix(ai)：支持 Gemini xhigh 思考级别 — MERGED
关闭 #12443。

为 gemini-4-neon 和 gemini-4-hydrogen 添加缺失的 `xhigh` 映射，Google 已支持但 Pi 之前拒绝接受。(ignacio-chiazzo)

### 7. fix(ai)：下架已关闭的 gpt-5-chat-latest 及废弃的 Groq/Mistral 模型 — MERGED
关闭 #12202。移除手动添加的 `gpt-5-chat-latest` 条目，并为 OpenAI 启用 `skipDeprecated`。PR #12453 和 #12449 继续跟进 Groq 和 Mistral 的清理工作。(petrroll)

### 8. fix(coding-agent)：将未解析的存储凭证报告为未配置 — MERGED
关闭 #12164。在 `/login` 中区分"无凭证"和"凭证解析失败"两种情况，防止 `!command` 凭证过期时产生混淆。(petrroll)

### 9. fix(coding-agent)：说明超大 Mermaid 图表为何显示源码 — MERGED
当图表过宽超出终端时添加 `Mermaid diagram not rendered: …` 提示，与不支持的图表加以区分。(robopipi[bot])

### 10. fix(coding-agent)：向 wl-copy 传递显式 text/plain MIME 类型 — MERGED
关闭 #12374。添加 `-t text/plain` 至 Wayland 剪贴板调用，防止 wl-clipboard 推断出错误的 MIME 类型导致静默复制失败。(ttempaa)

## 热门讨论

### 作品展示
- **[用手机向 Pi 口述](https://github.com/earendil-works/pi/discussions/12458)** — syrax90 分享了 Mobaide，这是一款免费开源（Apache-2.0）的 Android、iOS 和浏览器应用，可在电脑上运行 Pi，同时从手机进行口述。语音输入在设备本地运行，仅在手动审核后才向 Pi 发送文本。(1 👍)

## 功能请求趋势

1. **Git monorepo 子目录支持** — 两个 issue（#4530、#4851）汇聚为对 git 包源中 `subdirectories` 的需求，现已合并。这使得可以针对 monorepo 中的单个包，而无需克隆整个仓库。

2. **提供者 Web 搜索的一等公民集成** — Issue #12419 提议将 Anthropic 的 `server_tool_use` 和 OpenAI Responses 的 `web_search_call` 作为规范化、类型化的块与每轮事件暴露，而非不透明的线路格式。

3. **结构化的提供者错误元数据** — 多个 issue（如 #11071）请求建立 HTTP 状态、错误码和重试可能性的类型化契约，以实现更智能的客户端错误处理。

4. **OpenAI Responses 推理摘要边界** — Issue #12456 请求在 `thinking_delta` 上暴露 `summaryIndex` 和 `summaryPartEnd` 字段，以实现更细粒度的推理追踪处理。

5. **每条消息多次调用技能** — Issue #6180 请求扩展 `<skill>` 块解析以支持在单条消息中多次调用，并配有紧凑的 UI。

## 开发者痛点

1. **模型目录陈旧** — Pi 列出已废弃或下线的模型（OpenAI gpt-5-chat-latest、Gr

oq 模型、Mistral devstral/pixtral）的问题频发。models.dev 的目录重新生成并不总是能及时捕捉到移除的模型。

2. **流处理脆弱性** — SSE 解析、WebSocket 续传和 bash 输出流各有边缘情况导致代理崩溃或挂起（临时文件错误、大型分块累积、finish_reason "error"）。

3. **Windows/WSL 互操作混淆** — 安装程序在 WSL 中运行时误识别 Windows 安装，提供管理错误的安装。相关问题包括 ConPTY 不稳定导致 EIO/EPIPE 错误。

4. **虚拟模型上下文窗口处理** — 虚拟模型返回 `undefined` 导致压缩和其他上下文相关逻辑中的假设失效。

5. **会话恢复状态重建不完整** — 恢复的会话以提供商特定方式丢失工具可用性、压缩状态或 RPC 延迟提示，表明状态序列化存在缺陷。

6. **Wayland 合成器间的剪贴板兼容性** — wl-clipboard 的 MIME 类型推断导致静默失败，需要明确指定 `-t text/plain`。

---

*生成于 2026-11-24 | 数据来源 github.com/earendil-works/pi*</think>



</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to translate it naturally while preserving all the formatting, links, numbers, code references, and technical terms exactly as specified.

Let me translate this carefully section by section:

1. Title and date
2. Section 1 - Today's Highlights
3. Section 2 - Releases
4. Section 3 - Hot Issues (with all subsections)
5. Section 4 - Key PR Progress (with all subsections)
6. Section 5 - Feature Request Trends (with table)
7. Section 6 - Developer Pain Points (with table)
8. Section 7 - Summary & Outlook
9. Footer

Key things to remember:
- Keep all URLs, #numbers, file paths as-is
- Keep English technical terms where appropriate (API, SDK, CLI, MCP, UX, etc.)
- Use natural Chinese technical register
- Preserve all markdown formatting including tables
- Don't add any extra explanation

Let me translate:
</think>


# Qwen Code 社区技术速报

**日期：** 2026-11-24
**来源：** github.com/QwenLM/qwen-code

---

## 1. 今日要闻

Qwen Code 社区正积极推进 1.0 Preview 内核登陆 main 分支，在会话管理、内存共享和 PR 验证基础设施方面取得了显著进展。一项关于明文记录 API 密钥的安全问题浮出水面，Web Shell 也持续获得 UI 层面的优化。Managed Agent 生命周期持续改进，Action 停车机制已扩展至首次增量之外。

**过去 24 小时无新版本**发布。

---

## 2. 版本发布

过去 24 小时无版本发布。

---

## 3. 热门 Issue

### 🔴 P1 — 严重

**3.1 会话无法打开：file_history_snapshot 二次增长** ([#13113](https://github.com/QwenLM/qwen-code/issues/13113))  
*12 条评论* | Bug | Core — Session Management

长时间运行的会话其 `.jsonl` 转录文件无限增长，最终超过硬编码的 256 MiB 索引限制。一旦触发，会话将完全无法打开——每次 `POST /session/:id/load` 都将失败。对于高频用户而言，这是**数据完整性风险**；硬编码限制需改为可配置或动态计算。

---

**3.2 自动压缩后 Token 计数错误** ([#15486](https://github.com/QwenLM/qwen-code/issues/15486))  
*9 条评论* | Bug | Core — Token Management | Roadmap: Context Performance

自动压缩后，下一次请求的 size 估计将待处理的工具结果**重复计算**两次，并额外加上 20K 的 padding，导致请求被截断或以 `max_tokens: 1` 发送。这会导致压缩事件后的响应被截断或失败——内存密集型工作流的**可靠性退化**。

---

### 🟠 P2 — 高优先级

**3.3 明文记录 API 密钥** ([#18165](https://github.com/QwenLM/qwen-code/issues/18165))  
*3 条评论* | Bug | Core — Security

在变更 Token Plan API 密钥时，包含 API 密钥的工具输出以**明文形式**持久化到会话日志的多个字段中（`output/text/resultDisplay`），存储路径为 `~/.qwen/projects/<project>/chats/<session>.jsonl`。此外，`chats/*.jsonl` 文件权限设置过于宽松。**这是需要立即处理的安全漏洞**，需要引入脱敏逻辑。

---

**3.4 feat(cli): 在自定义 Provider 配置过程中自动发现模型** ([#17446](https://github.com/QwenLM/qwen-code/issues/17446))  
*5 条评论* | Feature Request | CLI — Model Switching

请求将 CLI 现有的 `/auth` 模型发现能力扩展到自定义 Provider 配置场景，支持 OpenAI Chat Completions、OpenAI Responses 和 Anthropic 兼容端点。目前用户必须手动输入模型 ID；自动发现将**显著改善**自定义 Provider 配置的入门体验。

---

**3.5 feat(memory): 在 Workspace 和 Git Worktree 之间共享项目自动记忆** ([#18030](https://github.com/QwenLM/qwen-code/issues/18030))  
*4 条评论* | Feature Request | Core — Memory

当前，每个链接的 Git worktree 都拥有独立的项目自动记忆目录。这意味着在 worktree 中积累的持久化经验**不会共享**给主 workspace。用户期望自动记忆能够跟随项目身份，无论当前活跃的是哪个 checkout——这对于采用 worktree 风格工作流的团队至关重要。

---

**3.6 feat(mcp): 在 MCP Client 中支持 Elicitation 能力** ([#17316](https://github.com/QwenLM/qwen-code/issues/17316))  
*4 条评论* | Feature Request | Integration — MCP | Roadmap: Subagents & Tools

MCP 服务器可以通过 elicitation 协议在交互中途请求结构化用户输入，但 qwen-code 的 MCP client 目前不支持该能力——依赖 elicitation 的服务器要么失败，要么静默降级。支持此功能将**解锁高级 MCP 服务器集成**并提升互操作性。

---

### 🟡 其他值得关注的 Issue

**3.7 在内置 Web Shell 中支持自定义面板** ([#18159](https://github.com/QwenLM/qwen-code/issues/18159))  
*4 条评论* | Feature Request | Web Shell

请求在 `qwen serve` Web Shell 中增加扩展点，以便在不 fork 或运行独立 React 应用的情况下添加自定义面板。这将支持**插件式开发环境定制化**。

---

**3.8 proposal(managed-agent): 将 Action 停车机制扩展至首次增量之外** ([#18149](https://github.com/QwenLM/qwen-code/issues/18149))  
*3 条评论* | Feature Request | Managed Agent

作为第 4 阶段 Action 停车的后续提案，当前实现仅在冷恢复已接受的等待上停车。真实会话在等待工具审批或问题时仍然保持常驻。本提案旨在**扩大停车覆盖范围**并提升资源效率。

---

**3.9 每日依赖 CVE 审计失败** ([#18148](https://github.com/QwenLM/qwen-code/issues/18148))  
*1 条评论* | CI/CD

自动化 CVE 审计失败，可能意味着发现新的高危漏洞或 npm audit 端点不可用。**维护者需调查**此次运行。

---

**3.10 bug(cli): Ctrl+X 外部编辑器导致 TUI 显示错乱** ([#18202](https://github.com/QwenLM/qwen-code/issues/18202))  
*1 条评论* | Bug | CLI

按下 `Ctrl+X` 在全屏终端编辑器（`micro`、`nano`、`vim`）中打开输入后，退出时 TUI 显示被破坏，屏幕出现乱码且输入框无响应。唯一的解决方法是强制终止 qwen-code。影响**所有使用终端编辑器的用户**。

---

## 4. 重要 PR 进展

### 🚀 功能开发

**4.1 feat(web-shell): 从侧边栏启用按 Workspace 的管理功能** ([#18140](https://github.com/QwenLM/qwen-code/pull/18140))  
将 Web Shell 侧边栏中每个本地可信的 workspace 变为可直接管理的入口点，将只读的悬停详情替换为完整的管理控制功能。**显著改善多 workspace 场景下的用户体验。**

---

**4.2 feat(managed-agent): 停车子 Session 的审批等待** ([#18224](https://github.com/QwenLM/qwen-code/pull/18224))  
#18149 第 3 阶段：子 Session 现在可以在等待工具审批或提问时停车，与根 Session 行为保持一致。此前，每个子 session 在整个等待期间都保持常驻——**降低多 Agent 工作流的内存开销。**

---

**4.3 feat(cli): 为 PR 审查添加分层沙箱执行机制** ([#18226](https://github.com/QwenLM/qwen-code/pull/18226))  
将 #18181 中基于信任等级的分层沙箱模型从 PR 验证扩展到 PR 审查的代码执行阶段，同时保持向后兼容。引入**信任等级分类**机制，并对不受信任的审查代码强制实施高安全隔离。

---

**4.4 feat(verify-pr): 添加硬件 MicroVM 轮次编排器** ([#18221](https://github.com/QwenLM/qwen-code/pull/18221))  
完成硬件隔离 `/verify-pr` 轮次可执行主机端编排，包含每轮 Bearer Token 颁发/吊销和主机端模型代理强制执行。**强化 PR 验证安全性。**

---

**4.5 feat(memory): 在任务 Worktree 间保留 Workspace 记忆** ([#18230](https://github.com/QwenLM/qwen-code/pull/18230))  
将私有项目自动记忆绑定到会话的起始目录或已注册的 workspace。任务 worktree 保留记忆所有权，同时使用自己的 checkout——**回应了 #18030 中的痛点。**

---

### 🛠️ 可靠性修复

**4.6 fix(core): 防止因无符号思考导致的压缩死锁** ([#18209](https://github.com/QwenLM/qwen-code/pull/18209))  
解决长推理会话在上下文窗口限制附近反复触发手动和自动聊天压缩时的死锁问题，方法是在压缩准备阶段剥离无符号的历史推理块。

---

**4.7 fix(agents): 在转录读取错误后保持 A2A 任务可恢复** ([#17823](https://github.com/QwenLM/qwen-code/pull/17823))  
当文件系统错误阻止回复查找时，返回可重试的 JSON-RPC 错误 `-32012`，确保任务在读取恢复后仍可恢复。**提升 A2A 协议健壮性。**

---

**4.8 fix(managed-agent): 按 UTF-16 列边界限制 Actor ID 测试** ([#18207](https://github.com/QwenLM/qwen-code/pull/18207)) *(已合并)*  
修复 Java SDK 快速验证套件中 `WorkspaceActorTest.acceptsAnActorIdOfUpTo36CodePoints` 的错误，解除所有分支上 Managed Agent gate 的阻塞。

---

### 🔧 SDK 改进

**4.9 fix(sdk): 处理异步 stdin 失败** ([#17995](https://github.com/QwenLM/qwen-code/pull/17995))  
处理异步子输入错误，并在输入管道失败后停止接受写入。修复 #17658。**改善 Node.js 传输层可靠性。**

---

**4.10 fix(sdk): 在事件 epoch 变更时重置回放游标** ([#17984](https://github.com/QwenLM/qwen-code/pull/17984))  
将回放游标与其产生时的事件总线 epoch 保持配对，当保存的游标不存在已知 epoch 时请求重新同步。

---

## 5. 功能需求趋势

基于所有 open 状态的 issue 和 PR，社区正在围绕以下方向集中发力：

| 趋势 | 描述 | 热度 |
|-------|-------------|-----------|
| **会话韧性** | 改进压缩、转录处理和恢复机制 | 高 |
| **多 Workspace / Worktree 支持** | 跨 worktree 和链接 checkout 的共享内存和一致状态 | 高 |
| **MCP 集成深度** | Elicitation 支持，更好的 MCP 服务器互操作性 | 中高 |
| **Web Shell 可扩展性** | 自定义面板、可配置 UI、插件架构 | 中 |
| **CLI 灵活性** | 模型发现、分层沙箱、更好的外部编辑器集成 | 中 |
| **Managed Agent 生命周期** | Action 停车、子会话管理、取消处理 | 中 |
| **国际化 / 本地化** | TUI 界面本地化（超越模型输出语言） | 中低 |

---

## 6. 开发者痛点

| 痛点 | 影响 | 频率 |
|------------|--------|-----------|
| **会话损坏 / 无法打开** 由无限制的转录增长引起 | 数据丢失风险；阻塞工作流 | 高 |
| **压缩后 Token 计数错误** 导致响应被截断 | 可靠性退化 | 高 |
| **API 密钥明文记录** 安全问题 | 隐私/安全漏洞 | 高（新发现） |
| **外部编辑器使用后 TUI 显示错乱** | 高级用户的糟糕体验 | 中 |
| **MCP elicitation 不支持** | 阻塞高级 MCP 服务器功能 | 中 |
| **Web Shell UI 问题**（portaled 输入缩放、面板遮挡） | 平板设备上的可用性问题 | 中 |
| **Windows 测试清理失败**（EBUSY/EPERM） | CI 可靠性问题 | 中 |

---

## 7. 总结与展望

2026-11-24 的快照展示了一个在多个方向上活跃发展的健康项目。**1.0 Preview 内核登陆**（#17045）仍是旗舰级倡议，会话管理改进和内存共享正在积极开发中。**明文记录 API 密钥的安全问题**（#18165）需要维护者优先关注。

**值得关注的方向：**
- 1.0 内核分片登陆的推进进度
- Token 计数错误压缩 Bug 的修复
- MCP elicitation 支持以实现更广泛的服务器兼容性
- 分层沙箱执行在 PR 验证和审查中的推广

---

*生成时间：2026-11-24 | 数据来源：GitHub.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*