# AI CLI 工具社区动态日报 2026-11-25

> 生成时间: 2026-11-25 05:00 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate it while following the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, project names, version tags, etc. as-is
- Use natural technical Chinese

Let me translate section by section.
</think>


# AI 开发者工具生态 —— 跨工具对比报告

**日期：** 2026-11-25

---

## 1. 生态总览

2026 年末，AI CLI 工具领域正进入**平台整合阶段**。本次调研覆盖的七款工具合计获得超过 40,000 GitHub stars，服务于不同但有所重叠的开发者群体。当日数据显示，所有工具均在积极迭代——最新版本涵盖稳定版更新（Claude Code v2.1.332、Copilot CLI v1.0.116-3）到高频 alpha 轮次（OpenAI Codex 在 24 小时内发布五个 alpha 版本）。贯穿所有社区的核心技术主线是**多 Agent 可靠性**：子 Agent 生命周期管理、会话持久化以及跨平台工具故障是社区反馈最集中的痛点。与此同时，**MCP（Model Context Protocol）**正在成为事实上的扩展层标准，各工具纷纷在 MCP 服务端技能、OAuth 流程和 IPC 可靠性方面投入资源。整个生态中悬而未决的关键问题是**会话与项目生命周期管理**——目前尚无一工具在持久化、可导航的多会话记忆中提供完全令人满意的方案。

---

## 2. 活跃度对比

| 工具 | 仓库 | Issue（总计 / 24h 内更新） | PR（总计 / 24h 内合并） | Discussions | Releases（24h） | 社区规模参考 |
|------|------|----------------------------|-------------------------|-------------|----------------|--------------------------|
| **Claude Code** | anthropics/claude-code | 50 / ~50 | 0 / 0 | **活跃** — 前三条置顶，社区 Show & Tell | **v2.1.332**（稳定版） | ~28k stars；star 数领先 |
| **OpenAI Codex** | openai/codex | 50 / ~50 | 35 / 0 | **活跃** — Ideas、Q&A、Show & Tell 板块 | 5 个 alpha 版本（v0.173–v0.174） | ~20k stars；活跃的 GitHub Discussions |
| **Gemini CLI** | google-gemini/gemini-cli | 50 / ~50 | — | — | 无 | 增长中，stars 较少 |
| **Copilot CLI** | github/copilot-cli | 36 / ~36 | 2 / 0 | — | **v1.0.116-0–3**（4 个补丁） | 企业导向；无公开 Discussions |
| **OpenCode** | anomalyco/opencode | 30 / ~30 | 20+ / ~9 closed，10 open | — | 无 | ~1.6k stars；推进速度快 |
| **Pi** | earendil-works/pi | — | — | — | 无 | 小众，垂直用户群 |
| **Qwen Code** | QwenLM/qwen-code | 50 / ~50 | 50 / ~10 merged | — | 无 | ~8k stars；内部 CI 活跃 |

**说明：**

- Gemini CLI、Copilot CLI、OpenCode、Pi 和 Qwen Code **不使用 GitHub Discussions**——社区交流在 Issues 和 PR 中进行。这并不代表这些工具"不活跃"，只是它们根本没有启用 Discussions 频道。
- Claude Code 和 OpenAI Codex 维护**活跃的 Discussion 看板**（Ideas、Q&A、Show & Tell），将其作为主要社区沟通渠道，与其庞大的用户基础和 Anthropic/OpenAI 的社区运营策略一致。
- 七款工具的 issue 更新量均较为显著，表明**社区参与和 issue 分类处理均处于活跃状态**，尽管各工具发布节奏不同。

---

## 3. 共同的功能方向

以下需求出现在多款工具的社区反馈、issue 或 PR 描述中，代表了真正的生态级需求：

### 多 Agent 生命周期与编排
| 需求 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| 后台子 Agent 完成后唤醒通知 | ✅ | ✅ | ✅ | — | — | ✅ |
| 子 Agent 孤儿/僵尸进程清理 | — | ✅ | ✅ | — | — | — |
| 恢复时子 Agent 模型一致性 | — | ✅ | — | — | — | — |
| TUI 中的多 Agent 导航 | — | ✅ | — | — | — | — |
| Agent 检查点/历史管理 | — | — | — | — | ✅ | ✅ |
| **信号：** 所有具备子 Agent 系统的工具都面临相同的生命周期缺陷。这是跨工具需求排名第一的功能。 |

### 记忆、上下文与压缩
| 需求 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| 项目级持久化记忆 | ✅ | ✅ | — | — | ✅ | ✅ |
| 可配置的记忆大小限制 | ✅ | — | ✅ | — | — | — |
| AST 感知文件读取（token 效率） | — | — | ✅ | — | — | — |
| 有界增长的压缩机制 | ✅ | — | ✅ | — | ✅ | ✅ |
| 启动时会话摘要 | — | ✅ | — | — | — | — |
| **信号：** 上下文管理是第二大普遍需求。每款工具都在独立重新发明记忆索引方案。 |

### 安全与执行防护
| 需求 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| Shell 命令权限钩子 | ✅ | — | — | — | ✅ | — |
| MCP OAuth / Token 安全 | — | — | ✅ | ✅ | — | — |
| YOLO / 无头模式安全守卫 | — | — | ✅ | — | — | — |
| SA 模拟 Token 白名单 | — | — | ✅ | — | — | — |
| **信号：** 在无头/CI 环境中实现自主执行正在催生对安全管控的迫切需求，且不能以牺牲自动化为代价。 |

### 平台一致性 & 桌面端
| 需求 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| Windows 专项修复（近期回归） | ✅ | ✅ | — | ✅ | ✅ | — |
| Passkey / WebAuthn 支持 | ✅ | — | — | — | — | — |
| TTY/TUI 能力集中化 | — | ✅ | — | — | ✅ | — |
| 剪贴板集成（WSL、tmux、Wayland） | — | — | ✅ | ✅ | — | — |
| **信号：** 平台碎片化是最大的持续维护负担。每款工具都有 3–6 个活跃的 Windows/macOS 专项 bug。 |

### MCP（Model Context Protocol）集成
| 需求 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| MCP 服务端技能（beta/稳定） | ✅（beta） | — | — | — | — | — |
| MCP OAuth 流程安全 | — | — | ✅ | — | — | — |
| MCP 工具过滤器解析 | — | — | ✅ | — | — | — |
| 重复 MCP 端点检测 | — | — | — | — | — | ✅ |
| **信号：** MCP 正在成为扩展标准。工具过滤、OAuth 和 IPC 可靠性均为当前痛点。 |

### 多服务商 / BYOK 灵活性
| 需求 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code |
|------|:-----------:|:------------:|:----------:|:-----------:|:--------:|:---------:|
| 多外部服务商支持 | — | — | — | ✅ | ✅ | — |
| 服务商配置时的模型发现 | — | — | — | — | — | ✅ |
| 模型偏好持久化 | — | — | — | — | — | ✅ |
| 自定义服务商注册表/机制 | — | — | — | — | ✅ | — |
| **信号：** BYOK 已是基础配置。各服务商希望接入自有模型，用户希望切换服务商时无需重新配置。 |

---

## 4. 差异化分析

### 按目标用户与使用场景

| 工具 | 主要受众 | 核心差异化点 | 企业就绪程度 |
|------|---------|-------------|------------|
| **Claude Code** | 使用 Anthropic 模型的开发者 | Hooks、Skills 以及 PreSkillShellCommand 安全模型 | 高——桌面应用成熟，配置选项丰富 |
| **OpenAI Codex** | OpenAI 生态用户；多 Agent 工作流 | Agent 记忆、A2A 协议、ChatGPT 集成、TUI 能力集中化 | 高——Microsoft 背书，企业 SSO |
| **Gemini CLI** | Google Cloud / Gemini 开发者 | 基于 bash 亲和性的 OS 级沙箱、Web 搜索集成、MCP OAuth | 中——依赖 Google Cloud |
| **Copilot CLI** | GitHub Copilot 订阅用户；企业开发者 | GitHub 原生集成、默认 Windows 沙箱、VS Code 功能对齐 | 很高——GitHub/Microsoft 企业栈 |
| **OpenCode** | 追求服务商灵活性的高级用户 | 服务商无关、开源、功能丰富的 TUI、自定义服务商 | 中——独立项目，推进速度快 |
| **Pi** | 注重流式响应性能的开发者和团队 | 线性时间流解析、终端优先、可扩展 SDK | 中——流式性能是明确差异化点 |
| **Qwen Code** | Qwen/阿里云生态用户 | Qwen 模型优化、Live Voice、Managed Agent SDK | 中——与 Qwen 模型家族绑定 |

### 按技术架构

| 工具 | 架构 | 扩展模型 | TUI 方案 |
|------|------|---------|---------|
| **Claude Code** | 单体架构；hooks 作为插件接口 | PreSkillShellCommand、MCP 服务端 | 专注终端，无独立 TUI 包 |
| **OpenAI Codex** | 模块化 CLI + Agent 服务；ACP 协议 | ACP 插件、MCP 服务端、Skill 系统 | 跨 7 个包的共享 `terminal_capabilities` 模块 |
| **Gemini CLI** | Agent 中心化 + 子 Agent 编排 | Skills、MCP 服务端 | CLI 优先，可配置审批模式 |
| **Copilot CLI** | 桌面优先 + CLI；嵌入式 web-shell | MCP 服务端、VS Code 扩展功能对齐 | 原生终端；桌面端使用 Web Shell |
| **OpenCode** | Reader/Composer 分离；v2 重写中 | MCP 服务端、自定义服务商 | 终端 Reader + 堆叠 PR，聚焦焦点保持 |
| **Pi** | 流式优先；事件驱动 SDK | 扩展事件（`onResponse`、`after_provider_response`） | 终端 + Live Voice 集成 |
| **Qwen Code** | 内核事件驱动架构；Managed Agent | Managed Agent 快速检查、A2A 任务、Spring Boot Starter | CLI + Live Voice + 混合代码模式 |

### 按社区治理

| 工具 | Issue 分类 | 发布节奏 | 社区渠道 |
|------|----------|---------|---------|
| **Claude Code** | 结构化标签；P0–P3 分级 | 每周稳定版 | GitHub Discussions + Issues |
| **OpenAI Codex** | 活跃标签系统；评论量大 | 快速 alpha 迭代（24h 内 5 个） | GitHub Discussions + Issues + PRs |
| **Gemini CLI** | 社区管理 | 间歇性 | 仅 Issues |
| **Copilot CLI** | 企业级追踪 | 补丁驱动稳定版 | 仅 Issues + PRs |
| **OpenCode** | 贡献者 Hona 活跃在 10+ PR 上 | 不规则；特性驱动 | 仅 Issues + PRs |
| **Pi** | 小团队；专注流式修复 | 缓慢 | 仅 Issues + PRs |
| **Qwen Code** | 内部 CI 驱动；内部团队庞大 | 不规则；受 CI 稳定性制约 | 仅 Issues + PRs |

---

## 5. 社区势能与成熟度

### 高势能（活跃、快速迭代）

**OpenAI Codex** — 24 小时内发布 5 个 alpha 版本，20+ PR 可见，活跃的 GitHub Discussions 看板上有社区自建工具（Memlayer、TernaryCode、Docsworth、CybeDefend）。TUI 能力集中化工作（7 个 PR）预示着一次重大架构推进。除 Claude Code 之外，社区生态最为活跃。

**Claude Code** — 每周稳定版发布，MCP 服务端技能进入 beta 阶段，社区讨论活跃。Issue #15942 拥有 158 条评论这一事实表明用户基础庞大且投入度高。成熟度高，但 MCP 桌面端 IPC 回归缺陷（#106608）与新功能同期发布。

**OpenCode** — 尽管 star 数较少，贡献者 Hona 独立负责 10+ 个 open PR，修复 UI 稳定性问题。项目在 v2 重写和多服务商支持方面推进迅速，贡献质量高。

### 中等势能（活跃、稳定）

**Gemini CLI** — 在 YOLO 模式、OAuth 流程、SA 模拟防护等安全加固以及浏览器 Agent 改进方面持续活跃。社区贡献不多，但核心团队稳定交付。

**Qwen Code** — 庞大的内部团队驱动着活跃的开发。CI 流水线不稳定是主要拖累；一旦解决，迭代速度很高。Live Voice 和 Managed Agent 功能具有差异化竞争力。

**Copilot CLI** — 企业导向，稳定补丁发布。当日 v1.0.116-0→3 的快速迭代周期表明正处于积极稳定阶段。社区规模较小，但 GitHub/Microsoft 的背书提供了长期可靠性保障。

### 小众 / 成熟期

**Pi** — 社区规模小但技术深度强（线性时间流解析、SDK 扩展）。专注于流式性能和边缘情况处理，对高级用户很有价值，但限制了广泛采用。

---

## 6. 趋势信号

### 🔴 高置信度趋势（多工具确认）

**1. 多 Agent 可靠性已为基础要求**
每款支持子 Agent 的工具都有开放中的缺陷报告，涵盖唤醒通知、孤儿清理和恢复时模型一致性。社区正在传递一个明确信号：多 Agent 工作流在日常使用中的重要性日益提升，而现有实现仍较为脆弱。预计这将成为 2027 年最大的工程投入方向。

**2. 平台一致性仍未解决**
5/7 的工具存在 Windows 专项 bug。具体故障模式各异（CRLF 损坏、发送按钮卡死、终端输出乱码、密钥链失败、路径解析问题），但模式一致：跨平台支持是最大的持续维护负担。那些能优雅解决平台一致性的工具将拥有显著的竞争优势。

**3. MCP 是新兴的扩展标准**
Claude Code（beta 技能）、Copilot CLI（服务端管理、重复检测）、Gemini CLI（OAuth、工具过滤）和 Qwen Code（无状态协议）同时在 MCP 上投入。MCP 生态正在分化为 MCP App（本地 IPC）和 MCP-over-HTTP（远程服务器）两条路径，各工具处理方式不一。标准化压力正在积累。

**4. 安全不能成为无头模式的遗留问题**
三款工具（Gemini CLI、Copilot CLI、OpenCode）有活跃的安全 PR，涉及 Shell 权限钩子、OAuth 验证、Token 白名单和浏览器技能拦截。随着这些 CLI 进入 CI/CD 流水线和非值守自动化场景，YOLO/无头安全模型正在经历重新设计。

### 🟡 涌现趋势（强信号，工具数较少）

**5. 语音集成正在获得关注**
Qwen Code（Live Voice、可配置语音检测）、Pi（Live Voice 集成）和 Claude Code（Voice 功能）均在语音能力方面有投入。差异化体现在语音检测模型（server_vad vs semantic_vad）和 ASR 服务商兼容性上。

**6. 记忆机制正从隐式走向显式**
社区自建工具如 Memlayer（OpenAI Codex）以及多工具上的开放记忆提案表明，自动记忆已不够用。用户需要精细化、项目化、带引用的记忆，且支持可配置限制——而不是一个黑盒。

**7. TUI 质量正在成为差异化因素**
OpenAI Codex 在终端能力集中化方面的投入，以及 OpenCode 在 Reader 定位上的多个 PR 表明，TUI 打磨正在成为竞争要素。随着更多开发者日常使用这些工具，终端体验（滚动、剪贴板、鼠标支持、窗口缩放）将成为生活质量层面的差异化因素。

**8. 订阅层级焦虑正在增长**
Claude Code 在 OpenAI Codex 上投票最高的 issue（#58530）以及多工具中的速率限制抱怨表明，用量配额透明性和可预测性正成为社区关注点。将工作流自动化的开发者需要可靠的成本建模，而意外的配额加速是一个信任问题。

### 技术决策者选型摘要

| 如果你需要... | 目前最佳选择 | 需要关注 |
|-------------|-------------|---------|
| **Anthropic 模型集成** | Claude Code | MCP 桌面 IPC 回归；Windows 认证稳定性 |
| **OpenAI 生态 + 记忆功能** | OpenAI Codex | Alpha 稳定性；CI 门禁可靠性 |
| **Google Cloud 集成** | Gemini CLI | OAuth 流程加固；无头安全模型 |
| **GitHub 企业工作流** | Copilot CLI | Ubuntu 密钥链；BYOK 多服务商一致性 |
| **服务商灵活性 + 开源** | OpenCode | UI 稳定性（大量 PR 待合并）；v2 迁移 |
| **极致流式性能** | Pi | 社区规模；扩展 API 成熟度 |
| **Qwen 模型优化** | Qwen Code | CI 稳定性；Live Voice ASR 兼容性 |

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me go through it carefully:

1. Keep all Markdown structure
2. Keep URLs, usernames, PR numbers, etc. as-is
3. Use natural technical Chinese
4. No preamble or explanation, just the translation
5. Preserve formatting like tables, lists, etc.

Let me translate section by section:

**Title**: Claude Code Skills Community Highlights Report
- 翻译: Claude Code Skills 社区亮点报告

**Source line**: Keep as is or translate the URL

**Section 1: Top Skills Ranking**
- "The following skills (Pull Requests) represent the most active development and community engagement."
- "Note: PR comment counts were unavailable in the dataset; ranking reflects recency, scope, and thematic significance."

**Table columns**: #, PR, Author, Description, Status
- Headers stay the same
- Content translated naturally

**Key Observations**:
- "All top PRs remain Open, indicating active review cycles"
- "Strong emphasis on security fixes (CWE-78, namespace trust boundaries)"
- "Windows compatibility emerging as a critical concern for cross-platform skills"

**Section 2: Community Demand Trends**
- "Analysis of Issues reveals five distinct demand clusters"

**Security & Trust section**:
- "Critical: Community skills distributed under anthropic/ namespace create impersonation risks. Users may grant elevated permissions believing they are official."

**Section 3: High-Potential Pending Skills**
- "These PRs have active development and may merge soon"

**Section 4: Skills Ecosystem Insight**
- "The community's most concentrated demand is for foundational infrastructure improvements"
- "rather than entirely new skill categories"

**Footer**: Keep as is or translate appropriately

Let me now write the full translation:
</think>


# Claude Code Skills 社区亮点报告

*数据截至 2026-11-25 | 数据来源：[anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Skills 排行榜

以下 Skills（Pull Requests）代表了最活跃的开发工作和社区参与度。注：PR 评论数据在数据集中不可用，排名依据为提交时间、影响范围及主题重要性。

| # | PR | 作者 | 描述 | 状态 |
|---|-----|--------|-------------|--------|
| 1 | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | **mcp-builder 修复** — 适配 `mcp>=2.0.0`，支持重命名后的 `streamable_http_client` 模块，并通过 `http_client` 参数实现自定义 HTTP 请求头配置。 | 开放中 |
| 2 | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | **webapp-testing 安全修复** — 移除 `with_server.py` 中 subprocess 调用的 `shell=True`，防止命令注入漏洞（CWE-78）。 | 开放中 |
| 3 | **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | **skill-creator Windows 及评测修复** — 隔离触发器评测逻辑，修复 Windows 环境下 `select()` 子进程失败问题，并正确处理运行时异常。 | 开放中 |
| 4 | **[#1245](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | **Notion 规范转实现 + 简历定量审计** — 将产品规格转换为可执行的 Notion 任务；新增定量简历分析能力。 | 开放中 |
| 5 | **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | **ProofCore 合约审计工具** — Web3 技能，支持 Solidity/Rust 智能合约静态分析，并可将 TON 区块链审计证明锚定上链。 | 开放中 |
| 6 | **[#525](https://github.com/anthropics/skills/pull/525)** | kitao | **Pyxel 复古游戏技能** — 指导使用 Pyxel 引擎创建、调试及无头验证 Python 游戏。 | 开放中 |
| 7 | **[#1703](https://github.com/anthropics/skills/pull/1703)** | 70v-Yoyo | **md2video-audio** — 将 Markdown 文档转换为 MP4 视频，配合 Marp 演示框架实现真实感配音。 | 开放中 |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** | PGTBoos | **document-typography** — 解决 AI 生成文档的排版问题：孤立单词、孤行段落、编号错位等。 | 开放中 |

**关键发现：**
- 所有头部 PR 均处于 **开放中** 状态，表明正在积极推进代码审查
- **安全修复** 受到高度关注（CWE-78、命名空间信任边界问题）
- **Windows 兼容性** 正成为跨平台 Skills 的关键痛点

---

## 2. 社区需求趋势分析

通过对 Issues 的分析，我们识别出五个核心需求方向：

### 🔐 安全与信任（最高优先级）
**[#492](https://github.com/anthropics/skills/issues/492) — 46 条评论**  
关键问题：以 `anthropic/` 命名空间分发的社区 Skills 存在身份冒充风险。用户可能在误认为官方的情况下授予过高权限。

### 🔧 工作流与基础设施
- **组织级 Skills 共享**（[#228](https://github.com/anthropics/skills/issues/228)，17 条评论）— 呼吁内置团队技能库功能
- **插件内容重复**（[#189](https://github.com/anthropics/skills/issues/189)，6 条评论）— `document-skills` 和 `example-skills` 安装了相同内容

### 📊 Skills 评测可靠性
- **run_eval.py 触发失败**（[#556](https://github.com/anthropics/skills/issues/556)，13 条评论）— 所有查询触发率均为 0%
- **并行 Worker UUID 冲突**（[#1352](https://github.com/anthropics/skills/issues/1352)，6 条评论）— 使用 `--num-workers > 1` 时静默失败

### 📝 文档与质量
- **失效链接**（[#1730](https://github.com/anthropics/skills/pull/1730)）— 替换文档中的 404 链接
- **Theme factory 说明不足**（[#2064](https://github.com/anthropics/skills/issues/2064)）— 缺少"何时使用"的使用指南

### 🚀 新功能请求
- **紧凑记忆体**（[#1329](https://github.com/anthropics/skills/issues/1329)）— 用符号标记代理状态的方案
- **代理治理**（[#412](https://github.com/anthropics/skills/issues/412)）— AI 代理系统的安全模式

---

## 3. 值得关注的新增 Skills

以下 PR 正在积极开发中，预计近期可能合入：

| Skill | PR | 亮点 | 就绪度 |
|-------|-----|------------|--------|
| **mcp-builder v2 兼容性** | [#1742](https://github.com/anthropics/skills/pull/1742) | MCP SDK 2.x 支持，自定义请求头 | 高 — 目标明确的修复 |
| **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | 零成本 Markdown→MP4 配音转换 | 中 — 功能已完成 |
| **pyxel 游戏开发** | [#525](https://github.com/anthropics/skills/pull/525) | 复古游戏创建流水线 | 中 — 评审周期较长 |
| **proofcore-contract-auditor** | [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 智能合约分析 | 中 — 细分领域 |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | SSH/Slurm 超算集群管理 | 高 — 范围明确的扩展 |

---

## 4. Skills 生态洞察

> **社区最集中的需求集中在基础设施层面的改进** — 安全加固（命令注入、命名空间信任边界）、跨平台可靠性（Windows 兼容、评测流水线稳定性）、以及工作流标准化（组织共享、评测准确性），而非全新类别的 Skills。

---

*本报告基于公开 GitHub 数据生成。实时动态请访问 [github.com/anthropics/skills](https://github.com/anthropics/skills)。*

---

<think>The user wants me to translate this Claude Code Community Digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, issue references as-is
4. Use natural technical Chinese register

Let me translate section by section:

标题: Claude Code 社区日报 — 2026-11-25

Today's Highlights section - translate naturally

Releases section - translate descriptions but keep version numbers and technical terms

Hot Issues - translate everything, keep #numbers, URLs, and technical terms

Key PR Progress - translate

Feature Request Trends - translate

Developer Pain Points - translate the 7 pain points

Let me do this carefully, maintaining the Chinese technical newsletter style.
</think>


# Claude Code 社区日报 — 2026-11-25

---

## 今日要闻

**v2.1.332** 版本正式支持 MCP 服务器技能（Beta），技能命名格式为 `server:skill`，现已可在 `/` 菜单中调用，同时新增 `PreSkillShellCommand` 钩子事件，方便安全要求较高的组织禁用内联 shell 命令执行。社区讨论热度不减，Visual Studio 2026 集成（#15942）持续获得 497 个 👍，而 Windows 用户近期反馈使用量限额异常加速（#105621），疑似存在回归问题。

---

## 版本更新

### v2.1.332（2026-11-25）
| 变更项 | 说明 |
|--------|------|
| **MCP 服务器技能（Beta）** | MCP 服务器加载的技能现在以 `server:skill` 格式显示在 `/` 菜单中；已有技能保持原有命名 |
| **PreSkillShellCommand 钩子** | 新增钩子事件，允许插件在加载阶段拒绝技能/命令的内联 shell 执行；同时修正了旧版本中缺失的配置键名 |

**迁移说明：** v2.1.331 及更早版本中，`PreSkillShellCommand` 钩子的配置键名存在错误——v2.1.332 已修复，新装用户无需额外操作。

---

## 热门 Issue

### 1. [enhancement] Add support for Visual Studio 2026 Integration
**#15942** | 497 👍 | 158 💬 | `area:ide`, `platform:windows`
呼声极高的功能需求，希望将 Claude Code 直接集成到 Visual Studio 2026 中，主要面向 Windows 平台开发者。评论数接近其他 Issue 的 3 倍，说明社区对此功能的期待程度极高。
🔗 [github.com/anthropics/claude-code/issues/15942](https://github.com/anthropics/claude-code/issues/15942)

### 2. [enhancement] RTL (Right-to-Left) Support for Hebrew & Arabic
**#38005** | 99 👍 | 50 💬 | `area:a11y`, `area:cowork`, `area:desktop`
无障碍功能请求：为 Claude Desktop 和 Cowork 添加希伯来语和阿拉伯语的从右到左（RTL）显示支持。评论数与点赞数之比偏高，说明相关设计讨论正在积极推进中。
🔗 [github.com/anthropics/claude-code/issues/38005](https://github.com/anthropics/claude-code/issues/38005)

### 3. [enhancement] Add `/delete` command to delete current session
**#26904** | 115 👍 | 28 💬 | `area:cli`
CLI 增强需求由来已久：希望提供原生命令来删除当前会话记录。目前用户只能使用粒度更粗的 `claude project purge <path>`，这会清除整个项目状态。精确的会话级删除将显著改善工作流卫生管理。
🔗 [github.com/anthropics/claude-code/issues/26904](https://github.com/anthropics/claude-code/issues/26904)

### 4. [enhancement] Desktop app: bring back the context-usage indicator
**#90708** | 37 👍 | 21 💬 | `area:statusline`, `area:desktop`
Windows 桌面用户强烈要求恢复状态栏的上下文窗口用量指示器。目前底部仅显示一个 5 小时制的用量限额环形图，实际参考价值有限，而更有参考意义的上下文计数器却隐藏不见。长时间运行 agent 会话的用户对此深感不便。
🔗 [github.com/anthropics/claude-code/issues/90708](https://github.com/anthropics/claude-code/issues/90708)

### 5. [bug] Background daemon never reaps stale workers (memory leak)
**#87891** | 6 👍 | 8 💬 | `area:agent-view`, `perf:memory`, `platform:macos`
严重的性能问题：后台守护进程持续累积未回收的工作进程，正常使用六周后可达到 **64 个泄漏进程、约 7.1 GB** 内存占用。复现路径清晰、诊断数据完备——此问题可能影响所有长时间运行的桌面部署场景。
🔗 [github.com/anthropics/claude-code/issues/87891](https://github.com/anthropics/claude-code/issues/87891)

### 6. [bug] Usage limits drain drastically faster since mid-October 2026
**#105621** | 4 👍 | 13 💬 | `area:cost`, `area:desktop`, `platform:windows`
Windows 桌面用户报告：自 2026 年 10 月中旬以来，使用量限额消耗速度明显加快，但工作流没有任何变化。考虑到用户侧未做任何代码或配置修改，这很可能指向桌面应用的 token 计数或缓存行为存在回归。
🔗 [github.com/anthropics/claude-code/issues/105621](https://github.com/anthropics/claude-code/issues/105621)

### 7. [bug] Built-in browser does not support passkey (WebAuthn) authentication
**#77473** | 17 👍 | 11 💬 | `area:desktop`, `platform:macos`
macOS 桌面用户的内置浏览器不支持 WebAuthn/平台认证器（Passkey）认证，导致无法通过内置浏览器登录 GitHub（及其他仅支持 Passkey 的网站）。这使得受影响用户完全无法使用 GitHub 登录——桌面应用的显著功能缺失。
🔗 [github.com/anthropics/claude-code/issues/77473](https://github.com/anthropics/claude-code/issues/77473)

### 8. [bug] MCP App tool calls fail with "IPC not available" in Desktop Code tab
**#106708** | 1 👍 | 7 💬 | `area:mcp`, `area:desktop`, `platform:macos`
桌面应用的回归问题：从 Claude Code 标签页调用 MCP App 工具时失败，报错 "IPC not available"。考虑到今日刚发布的 MCP 服务器技能功能，此 bug 可能会削弱桌面用户的 Beta 功能体验。
🔗 [github.com/anthropics/claude-code/issues/106708](https://github.com/anthropics/claude-code/issues/106708)

### 9. [bug] Claude in Chrome: sign-in lost on every full Chrome restart
**#97344** | 2 👍 | 5 💬 | `area:auth`, `area:browser-extension`, `platform:windows`
Chrome 扩展用户每次完全重启浏览器后都需要重新登录，导致无人值守自动化场景无法正常工作。尽管之前已成功登录，扩展仍会在每次启动时弹出授权页面——明显的认证持久化回归。
🔗 [github.com/anthropics/claude-code/issues/97344](https://github.com/anthropics/claude-code/issues/97344)

### 10. [enhancement] Make the auto-memory MEMORY.md index size limit configurable
**#79217** | 4 👍 | 14 💬 | `area:memory`
用户希望能够自定义 `MEMORY.md` 的 200 行 / 25KB 自动记忆索引限制。大型项目的记忆文件内容丰富，容易触及上限，硬编码的限制值阻碍了针对不同项目规模和记忆策略的调优空间。
🔗 [github.com/anthropics/claude-code/issues/79217](https://github.com/anthropics/claude-code/issues/79217)

---

## 重要 PR 进展

过去 24 小时内无合并或新开的 Pull Request。

---

## 功能需求趋势

综合 30 个追踪的 Issue，分析如下热门主题：

| 主题 | 代表性 Issue | 信号强度 |
|-------|----------------------|-----------------|
| **多会话与项目管理** | #107819, #106064, #85906, #111879 | 高 — 多项并发提案涉及会话分组、删除和项目级总览 |
| **平台专属增强** | #15942（VS 2026）、#77473（Passkey）、#90708（桌面 UX） | 高 — Windows 和 macOS 桌面功能缺口明显 |
| ** Agent 协作与子 Agent** | #110284, #112092, #109117 | 中 — 多 Agent 工作流正成为新焦点 |
| **上下文与记忆管理** | #79217, #105621 | 中 — 用户希望对 token 用量有更多控制和可见性 |
| **无障碍与国际化** | #38005（RTL 支持） | 中 — 无障碍需求正在获得更多关注 |
| **CLI 增强** | #26904, #85906, #111879 | 中 — 会话生命周期命令 |
| **钩子与扩展性** | #100057, #104216 | 中低 — 钩子行为改进建议 |

---

## 开发者痛点汇总

1. **会话生命周期粒度过粗** — 无法精确删除单个会话，用户只能选择留下陈旧记录或清空整个项目状态。`/delete` 命令请求自 2 月开放至今已获得 115 个 👍，始终未得到解决。

2. **Windows 桌面存在多项回归** — Chrome 认证持久化问题（#97344）、使用量限额异常加速（#105621）、MCP IPC 故障（#106708）多重叠加，导致 Windows 用户体验欠佳。

3. **长时间会话的内存泄漏** — 后台守护进程的工作进程泄漏（#87891）对持续运行 Claude Code 的开发者影响尤为严重——数周内静默占用 7 GB 以上内存。

4. **内置浏览器功能受限** — Passkey/WebAuthn 支持缺失（#77473）导致桌面应用内嵌浏览器无法完成 GitHub 登录，迫使部分用户回退到外部浏览器。

5. **MCP 集成稳定性存疑** — 今日上线的 MCP 服务器技能功能伴随着桌面 Code 标签页的 IPC 回归（#106708），Beta 功能稳定性有待验证。

6. **上下文用量不透明** — 长时间运行 agent 会话的用户无法持续看到剩余上下文窗口容量，遇到会话压缩时措手不及。恢复桌面状态栏该指示器的请求（#90708）自 8 月提出至今悬而未决。

7. **多项目协同盲区** — 管理 5-10 个并发项目的开发者缺乏全局总览机制，各项目的 coordinator 相互隔离（#110284, #107819）。

---

*生成日期：2026-11-25 | 数据来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it naturally while preserving all the structure, URLs, code references, and technical terms. Let me translate this carefully.
</think>


# OpenAI Codex 社区日报 — 2026-11-25

---

## 1. 今日要闻

OpenAI Codex 团队在 CLI/TUI 端完成了大规模的**终端能力集中化重构**，将剪贴板、图片渲染、鼠标捕获和缩放策略统一到一个共享的 `terminal_capabilities` 模块中，涉及 7 个合并的 PR。在 Windows 侧，**11 月 21 日的回归问题**导致新建对话丢失执行位置选择器和最大推理深度选项，引发了一系列高评论量 issue。社区热度最高的开放 issue（#58530）是一封政策请愿书，呼吁在即将到来的 **2026 年 12 月用量限制下保留 Plus 订阅用户的 ChatGPT High 和 Codex/Work 访问权限**——目前已获 67 个 👍 和 43 条评论。

---

## 2. 版本发布

| 标签 | 版本 | 说明 |
|------|------|------|
| `rust-v0.174.0-alpha.5` | 0.174.0-alpha.5 | v0.174 alpha 系列最新版 |
| `rust-v0.174.0-alpha.4` | 0.174.0-alpha.4 | |
| `rust-v0.174.0-alpha.3` | 0.174.0-alpha.3 | |
| `rust-v0.174.0-alpha.2` | 0.174.0-alpha.2 | |
| `rust-v0.173.0-alpha.5` | 0.173.0-alpha.5 | 上一条 alpha 发布链 |

> 以上五个版本均在过去 24 小时内发布，表明 Rust 核心开发节奏十分紧凑。稳定版通道暂无更新记录。

---

## 3. 热点 Issue

### 1. **2026 年 12 月用量限制：保留 Plus 用户的 ChatGPT High 和 Codex/Work 访问权限** — [#58530](https://github.com/openai/codex/issues/58530)
**重要性：** 这是队列中影响最大的政策类 issue——一位创作者直接呼吁在即将到来的配额变更中保留 Plus 层级用户的 ChatGPT High 和 Codex/Work 访问权限。目前已获 67 个 👍 和 43 条评论，说明社区对订阅层级变更普遍感到焦虑。  
**状态：** 开放 | 作者：HoshizoraArchive

### 2. **Work 模式在 BYOK 模式下启用浏览器/Computer Use 工具后阻止消息提交** — [#54841](https://github.com/openai/codex/issues/54841)
**重要性：** 对于自携密钥（BYOK）用户来说，这是一个关键功能回归：启用本地浏览器或 Computer Use 工具后，消息提交会静默失败。43 条评论表明这正在被作为认证 + 沙箱交互问题积极排查。  
**状态：** 开放 | 作者：Wizmann

### 3. **后台子代理完成后不会唤醒调用它的父代理** — [#15723](https://github.com/openai/codex/issues/15723)
**重要性：** 今日热度最高的 issue 中最早提出的问题。子代理的后台任务完成后不会通知父代理，从而破坏了多代理编排工作流。33 条评论表明这是一个长期存在的设计缺口，而非近期的回归问题。  
**状态：** 开放 | 作者：zoox101

### 4. **Windows：Send 按钮间歇性失效，即使输入框非空** — [#62393](https://github.com/openai/codex/issues/62393)
**重要性：** 一个阻塞用户体验的 Windows 特定 Bug，引入于 26.1111 版本。输入框内容非空时，Send 按钮仍间歇性无法点击，令应用看起来像卡死了。影响最新版 MSIX 包用户。  
**状态：** 开放 | 作者：halashao001

### 5. **Windows 系统级 UI 迟滞在使用 Computer Use 后持续存在** — [#56941](https://github.com/openai/codex/issues/56941)
**重要性：** Codex 的 Computer Use 功能运行后，整个 Windows 桌面变得迟缓，必须手动结束 `codex-computer-use.exe` 进程才能恢复。这是一个资源清理问题，对用户影响显著。  
**状态：** 开放 | 作者：scrudg

### 6. **11 月 21 日回归问题：新建对话丢失权限/执行位置选择器和最大推理深度** — [#62943](https://github.com/openai/codex/issues/62943)
**重要性：** 三个相关 issue（#62943、#62912、#62943）都追溯到 11 月 21 日的 Windows 更新。新建对话丢失了关键选择器，破坏了工作流自定义能力。该簇 issue 共积累 27 条评论。  
**状态：** 开放 | 作者：HTTNH

### 7. **macOS 上锁屏使用自动解锁功能失效** — [#32396](https://github.com/openai/codex/issues/32396)
**重要性：** macOS 上的 Computer Use 即使在设置中启用了自动解锁也未能成功解锁屏幕，导致该功能在 Apple 平台上完全不可用。自 7 月以来持续存在的一个 Bug，尚未解决。  
**状态：** 开放 | 作者：joshp123

### 8. **macOS：底部面板设置消失，终端布局被强制靠右** — [#62234](https://github.com/openai/codex/issues/62234)
**重要性：** 该 issue 近期**已关闭**，解决了 macOS 更新后出现的布局损坏问题——设置面板消失、终端被锚定到右侧。关闭意味着修复即将发布，但 23 个 👍 和持续评论说明用户希望确认已发布的修复。  
**状态：** 已关闭 | 作者：cocojem

### 9. **macOS 日文 IME 输入"tte"时删除已粘贴文本** — [#53972](https://github.com/openai/codex/issues/53972)
**重要性：** 一个本地化的 IME Bug，在输入日文罗马字时导致已粘贴内容消失——这是一个具体但真实的障碍，影响使用 Codex 的日文开发者。目前已关闭，说明问题已解决。  
**状态：** 已关闭 | 作者：JobAnyol

### 10. **CLI/TUI：macOS 上子代理条目和活动链接无法打开详情** — [#63819](https://github.com/openai/codex/issues/63819)
**重要性：** 今日提交的新 issue，是热度列表中最新的问题。CLI/TUI 中子代理视图内的导航功能已回归——条目和链接无法打开详情窗格。影响 macOS 上使用 Ghostty + tmux 的用户。  
**状态：** 开放 | 作者：iqdoctor

---

## 4. 重要 PR 进展

| # | PR 标题 | 影响 |
|---|---------|------|
| [#63821](https://github.com/openai/codex/pull/63821) | 为共享 MCP REPL 服务器启用固定启动目录 | 将 `mcp_shared_repl_cwd` 标记为稳定版；支持共享 MCP 连接使用固定工作目录 |
| [#63810](https://github.com/openai/codex/pull/63810) | 使用 ChatGPT 账户偏好设置驱动 Codex 语音聊天 | 通过读取共享账户偏好，统一 ChatGPT 和 Codex 的语音选项 |
| [#63809](https://github.com/openai/codex/pull/63809) | 在持续目标自动延续时保留已保存的 Daybreak 选择 | 修复自动目标延续过程中线程 Daybreak 注册信息丢失的问题 |
| [#63808](https://github.com/openai/codex/pull/63808) | 修复启动时和刷新时的 API 工作负载身份认证 | 解决 API 密钥工作负载的凭据撤销和 ChatGPT 身份缺失问题 |
| [#63807](https://github.com/openai/codex/pull/63807) | 从 HTTPS 网关自动发现模型目录 | 在自定义网关的 `/models` 路径自动探测，无需单独配置 `model_catalog_url` |
| [#63806](https://github.com/openai/codex/pull/63806) | 强化插件市场的 SSH 主机校验 | 修复模糊 SSH URL 可绕过市场白名单的安全漏洞 |
| [#63802–63789](https://github.com/openai/codex/pulls?q=63789) | 集中化 TUI 终端能力检查（7 个 PR） | 将剪贴板、图片、鼠标、缩放、兼容性和滚动逻辑统一到单一 `terminal_capabilities` 模块 |
| [#63788](https://github.com/openai/codex/pull/63788) | 在全屏转录模式下默认折叠轮次详情 | 减少转录视图噪音；可通过 `tui.collapse_turn_details = false` 选择退出 |
| [#63785](https://github.com/openai/codex/pull/63785) | 保留多行粘贴内容，不使用括号粘贴标记 | 防止 TUI 将粘贴的换行符误认为提交键 |
| [#63780](https://github.com/openai/codex/pull/63780) | 为 Codex 核心添加可选的 Statsig 初始化 | 在功能标志后引入 `Config::start_statsig`，用于特性门控实验 |

---

## 5. 热门讨论

### 💡 想法

**Codex 中的记忆功能** — [#12567](https://github.com/openai/codex/discussions/12567)  
热度最高的 idea 讨论帖，向社区提出两个问题：(1) Codex 使用记忆时引用之前的对话线程有多重要（1–5 分）？(2) 记忆功能应该是自动的还是可选的？43 条评论，普遍对项目级、用户管理的记忆感兴趣，并希望提供引用来源。  
*作者：jif-oai*

**在单个客户端中支持多个远程 Codex 机器/运行时** — [#27941](https://github.com/openai/codex/discussions/27941)  
提议允许单个桌面客户端管理多个远程 Codex 运行时（如每个仓库或服务器一个）。目前只有移动端支持远程监控。  
*作者：johnnykor82*

**恢复项目优先的导航和会话管理** — [#62449](https://github.com/openai/codex/issues/62449) *(以 Issue 形式提出的功能请求)*  
请求恢复以项目为中心的导航和持久化会话管理，反映了对当前以聊天为中心范式的不满。  
*作者：shashibimal-swiftlogics*

---

### 🛠️ 作品展示

| 项目 | 链接 | 概述 |
|------|------|------|
| **Memlayer v0.3.1** | [#63534](https://github.com/openai/codex/discussions/63534) | 为 Codex 提供可审查和修订的项目记忆的 MCP 服务器；展示每条召回规则的原始来源 |
| **TernaryCode** | [#62426](https://github.com/openai/codex/discussions/62426) | 原生应用（Rust 实现，无 Electron），跨所有项目展示正在等待你回复的 Codex/Claude Code 会话 |
| **Docsworth** | [#63816](https://github.com/openai/codex/discussions/63816) | 面向团队的文档 MCP 服务器，支持页面级所有者和评审日期元数据，开源 |
| **StoryDesk** | [#63634](https://github.com/openai/codex/discussions/63634) | 面向小说作者的本地写作 Agent；展示跨章节的角色/设定记忆 MemLayer 集成 |
| **indiebiz-evidence** | [#63536](https://github.com/openai/codex/discussions/63536) | 将带时间戳的 CSV/JSON 导入 SQLite，提供 15 个 MCP 工具帮助 Codex 交叉核验数据来源 |
| **CybeDefend** | [#63629](https://github.com/openai/codex/discussions/63629) | 安全审计技能（AGPL-3.0），运行开源扫描器（Opengrep、Trivy、Gitleaks）并附带漏洞验证测试 |
| **用户自建的 ChatGPT Projects 连续性架构** | [#51228](https://github.com/openai/codex/discussions/51228) | 非程序员构建的引导协议 + 外部规范状态变通方案，实现跨会话的连续性 |

---

## 6. 功能需求趋势

对所有开放 Issue 和 Discussion 的分析揭示了五个主导功能方向：

| 主题 | 证据 | 体量 |
|------|------|------|
| **持久化与项目级记忆** | #12567（记忆）、#63534（Memlayer）、#63634（StoryDesk）、#51228 | 高——多个独立项目同时填补同一缺口 |
| **多代理编排与生命周期控制** | #15723、#19197、#34220、#32614、#36433 | 持续——子代理唤醒、孤儿清理、恢复保真度 |
| **终端与 TUI 可靠性** | #63819、#63822、#63785、#63784、PR #63789–63802 | 积极开发中；集中化工作正在进行 |
| **跨平台一致性（Windows vs. macOS）** | #62393、#56941、#62943、#32396、#54198 | 反复出现——大量 Windows 回归问题和 macOS Computer Use 故障 |
| **订阅访问与速率限制透明度** | #58530、#63577、#63138、#61336 | 社区对 2026 年 12 月层级变更的担忧日益增长 |

---

## 7. 开发者痛点

1. **11 月 21 日更新后 Windows 批量回归** — 执行位置选择器消失、Send 按钮卡死、使用 Computer Use 后 UI 迟滞，三个问题在更新后 4 天内出现多份独立报告，形成问题簇。

2. **子代理生命周期端到端断裂** — 后台子代理不会唤醒父代理（#15723），恢复时会悄悄切换模型（#36433），重启后已完成状态丢失（#34220）。多代理系统看起来还远未完成。

3. **BYOK + Computer Use 不兼容** — 认证 BYOK 用户启用本地浏览器或 Computer Use 工具后消息提交失败（#54841）。这阻塞了一个重要的进阶使用场景。

4. **用量配额可见性和准确性** — 多份报告反映意外配额消耗（#63138、#61336）和 Pro 账户收到"容量已满"错误（#63577）。开发者无法信任自己的用量计量。

5. **TUI/CLI 在非主流终端上的不成熟** — Ghostty、tmux 和非标准剪贴板配置导致子代理导航（#63819）、粘贴处理（#63785）和图片渲染（PR #63789–63802）失败。能力集中化工作正在解决这些问题，但仍在推进中。

6. **Windows 上 Computer Use 清理不彻底** — `codex-computer-use.exe` 僵尸进程导致必须手动干预（#56941）。Computer Use 会话后的资源清理是一个反复出现的话题。

---

*日报基于 2026-11-25 GitHub.com/openai/codex 的活动数据生成。所有链接均指向官方仓库。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all headings, body text, and content
2. Preserve the Markdown structure (tables, lists, headings, etc.)
3. Keep URLs, issue numbers, repository paths, file names, and code as-is
4. Use natural technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output

Let me translate section by section:

Title: "Gemini CLI Community Digest — 2026-11-25" → "Gemini CLI 社区日报 — 2026-11-25"

Then translate each section with appropriate Chinese technical terminology.

Let me work through this carefully:
</think>


# Gemini CLI 社区日报 — 2026-11-25

## 今日要点

Gemini CLI 社区今日继续保持活跃的开发节奏，合并了多个安全关键和用户体验增强相关的 PR。**#30330** 中 MCP 工具过滤器的一个重大 bug（逗号分隔列表的包含/排除逻辑被静默反转）已通过 **#30332** 修复。同时，针对 YOLO 模式安全检查（#30268）和 MCP OAuth 流程（#30454）安全加固的工作也在推进。CLI 还新增了通过 `/fork` 命令实现的无损对话分支功能（#30464）。

---

## 版本发布

**过去 24 小时内无新版本发布。** 项目仍处于最新稳定版状态；下一版本周期预计将纳入今天的 PR 贡献。

---

## 热门 issue

### 1. 子代理达到 MAX_TURNS 却报告 GOAL 成功 — P1 | 14 条评论

`codebase_investigator` 子代理在达到最大轮次限制、尚未完成分析的情况下，仍会错误地报告 `status: "success"`，终止原因为 "GOAL"。这会向用户隐瞒真正的中断情况，破坏对可靠性的预期。**社区关注度很高**，因为它影响了信任度和调试效率。

### 2. 基于模型 Bash 亲和性的零依赖 OS 沙箱 — P2 | 9 条评论

提议利用 Gemini 3 原生的 bash 工具链能力实现 OS 级别的沙箱，无需外部依赖。这将能够在尊重用户安全边界的同时实现更安全的自主执行。代表了架构方向上的重大转变。

### 3. 被调用时通用代理挂起 — P1 | 8 条评论

一个关键的 UX 问题：通用代理在简单操作（如创建文件夹）时无限挂起。用户报告需要等待超过一小时才能取消。存在临时解决方案（禁用子代理延迟），但**这阻碍了许多用户的核心工作流程**。

### 4. AST 感知的文件读取、搜索和映射调研 — P2 | 7 条评论

追踪 AST 感知工具调研的 epic，可以实现精准的代码导航，减少"消防水带"式读取造成的 token 浪费。如果成功，可以显著提升大型代码库的场景效率。

### 5. Gemini 不会主动使用 Skills 和子代理 — P2 | 7 条评论

用户报告 Gemini CLI 即使在任务直接相关的情况下也不会调用自定义 skills 和子代理，需要显式指令。这削弱了可扩展代理能力的价值主张，是**一个高频请求的改进方向**。

### 6. 浏览器代理忽略 settings.json 覆盖配置 — P2 | 5 条评论

浏览器代理完全忽略 `maxTurns` 等配置的覆盖设置，破坏了自定义工作流程。问题源于 `AgentRegistry` 中的设置合并逻辑不正确。影响依赖自定义限制的持久化浏览器会话用户。

### 7. MCP 工具过滤器逗号分隔列表 Bug — 新 | 4 条评论

`gemini mcp add --include-tools tool1,tool2` 将整个字符串存储为单个数组元素而非进行拆分，实际上是反转了过滤器的行为。文档明确承诺支持逗号分隔解析，因此这是一个**明确的回归问题**。

### 8. 浏览器代理韧性：会话接管和锁恢复 — P2 | 4 条评论

当前在锁定的浏览器配置文件中采取快速失败策略，导致在使用持久化会话模式时无法恢复。提议自动会话接管和锁恢复，以提高多实例环境中的鲁棒性。

### 9. 浏览器子代理在 Wayland 下失败 — P1 | 4 条评论

浏览器子代理在 Wayland 显示服务器上失败，错误信息不明确。影响使用 Wayland 桌面环境的 Linux 用户。**已确认可复现**，失败时显示 "GOAL" 而非实际错误。

### 10. Bug 报告不包含子代理上下文 — P1 | 2 条评论

`/bug` 命令只捕获主会话上下文，遗漏了子代理状态。这大大降低了复杂多代理交互场景中 bug 报告的实用性。

---

## 关键 PR 进展

| PR | 标题 | 优先级 | 影响 |
|----|-------|----------|--------|
| [#30464](https://github.com/google-gemini/gemini-cli/pull/30464) | 添加 `/fork` 命令和回退分支选项 | — | 启用无损对话分支以支持实验性探索 |
| [#30468](https://github.com/google-gemini/gemini-cli/pull/30468) | 修复 `read_many_files` 中的二进制资源问题 | — | 恢复对工作区目录中 assets 的支持（#30211 引入的回归） |
| [#30467](https://github.com/google-gemini/gemini-cli/pull/30467) | 保留 Markdown 代码围栏边界 | — | 修复带围栏代码块的终端渲染问题 |
| [#30415](https://github.com/google-gemini/gemini-cli/pull/30415) | 为 Web 搜索添加超时并支持中止时停止重试 | P1 | 防止 Web 搜索停滞时无限挂起 |
| [#30268](https://github.com/google-gemini/gemini-cli/pull/30268) | 在污点检查和构建文件检查中尊重 YOLO 模式 | 安全 | 确保自主无头运行不会被确认提示打断 |
| [#30454](https://github.com/google-gemini/gemini-cli/pull/30454) | 在 MCP OAuth 流程中强制执行来源一致性 | P1 | 加强 token 端点验证的安全性 |
| [#30451](https://github.com/google-gemini/gemini-cli/pull/30451) | 检查 shell 包装器的命令替换变体 | — | 加强包装 shell 调用的策略执行 |
| [#30456](https://github.com/google-gemini/gemini-cli/pull/30456) | 通过主机白名单限制 SA 模拟 token 接收者 | 安全 | 通过验证接收者防止 token 外泄 |
| [#30332](https://github.com/google-gemini/gemini-cli/pull/30332) | 支持逗号分隔的 MCP 工具过滤器 | P2 | 修复损坏的 `--include-tools` / `--exclude-tools` 解析 |
| [#29546](https://github.com/google-gemini/gemini-cli/pull/29546) | 支持在非交互模式下通过 `/skill-name` 激活 skills | P2 | 启用 CI/无头环境中的 skills 使用 |

---

## 功能请求趋势

对 open issue 的分析揭示了几个主导性的功能方向：

| 主题 | 代表性 issue | 社区关注度 |
|-------|----------------------|-------------------|
| **代理可靠性和恢复** | #22323, #21409, #21983, #22232 | 🔥 高 — 挂起、崩溃和静默失败让用户深感挫败 |
| **Skills 和子代理编排** | #21968, #20195, #22598, #18287 | 🔥 高 — 用户期望自主调用 skills |
| **场景效率** | #22745, #19561, #18836 | 中 — AST 感知工具和任务追踪以减少 token 消耗 |
| **安全加固** | #30268, #30456, #30454, #22672 | 🔥 高 — YOLO 模式修复和 token 保护至关重要 |
| **平台灵活性** | #21983 (Wayland), #30330, #22267 | 中 — 跨平台和配置灵活性 |

---

## 开发者痛点

1. **代理挂起和无限循环** — 通用代理和 Web 搜索工具可能无限挂起，强制手动取消。缺少超时机制是**跨多个 issue 的反复出现的主题**。

2. **配置覆盖失败** — `settings.json` 中的设置被不一致地执行（浏览器代理忽略 `maxTurns`，MCP 环境变量在 `=` 字符处损坏）。这破坏了预期的自定义工作流程。

3. **MCP 工具过滤回归** — 逗号分隔列表解析 bug（#30330）静默反转了过滤器行为，导致意外的 tool 暴露或排除。

4. **子代理不透明** — Bug 报告和对话分享遗漏了子代理轨迹，使多代理会话的调试变得困难。

5. **YOLO 模式中断** — 即使使用 `--approval-mode=yolo`，某些场景下安全检查仍会提示确认，违背了自主执行的初衷。

6. **浏览器代理脆弱性** — 会话锁处理、Wayland 不兼容和持久化配置问题使浏览器代理在生产工作流程中不可靠。

7. **Token 浪费** — 大文件"消防水带"式读取消耗大量场景，任务追踪在提示历史中导致上下文腐烂。用户请求 AST 感知和基于持久化文件的替代方案。

---

*数据采集自 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)，时间：2026-11-25。点击链接可查看对应 GitHub 资源。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content into Simplified Chinese
2. Keep all markdown structure, URLs, issue references, version tags, etc. exactly as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation with no additional explanation or markdown fences

Let me go through the document section by section and translate it carefully.
</think>


# GitHub Copilot CLI 社区动态

**日期：** 2026-11-25
**仓库：** github.com/github/copilot-cli

---

## 今日要点

Copilot CLI 团队在短时间内连续发布了多个版本（v1.0.116-0 至 v1.0.116-3），重点改进了 MCP 服务器管理功能，包括重复端点检测、会话状态处理修复以及 Windows 沙箱增强。过去 24 小时内共有 36 个 issue 有更新，社区活跃度保持高位。Windows CRLF 换行符问题和 Ubuntu 密钥链认证问题仍是社区讨论的热点。

---

## 版本发布

### v1.0.116-3
**新增功能：**
- 时间轴全屏模式下添加"跳至最新"按钮，可快速定位最新输出并恢复自动跟随
- 支持在不修改保存默认值的情况下，为 ACP 兼容编辑器中的支持模型选择上下文大小
- 为 Copilot 启动的每个进程提供环境变量配置

### v1.0.116-2
**新增功能：**
- 当插件和独立 MCP 服务器连接到同一端点时发出警告，并提供通过 `/mcp` 禁用其中之一的指引

**问题修复：**
- 取消待处理提示时不再等待活动刷新
- 避免在与主机重连后将空闲会话显示为忙碌状态
- 改进 Unix 系统上已取消前台进程的处理逻辑

### v1.0.116-1
与 v1.0.116-2 相同的更改（补丁迭代版本）

### v1.0.116-0
**改进内容：**
- 对组织托管的 MCP 服务器，跳过单个慢连接和登录警告（Connector 除外）
- 启动时在需要关注时汇总 MCP 服务器状态
- 在打开浏览器进行身份验证前等待 `/mcp auth <name>` 命令完成

### v1.0.115
**新增功能：**
- 在支持表单的 ACP 编辑器中提供结构化澄清问题
- Windows 沙箱包查询默认启用（`sandbox.userPolicy.capabilities` 设为 `[]` 以选择退出）
- 在沙箱化命令中支持 macOS Mach 服务查找

---

## 热门 Issue

### 1. Windows 上的 CRLF 换行符损坏问题
**#1148** | 状态：已关闭 | 评论：8 | 👍: 9
**链接：** https://github.com/github/copilot-cli/issues/1148

即使原始文件使用 LF 换行符，Copilot CLI 也会将文件修改为 CRLF 换行符。这会破坏跨平台开发工作流和版本控制的差异比较。该问题报告针对 0.0.395 版本，目前已被关闭，表明已实现修复。

### 2. Ubuntu 密钥链支持失效
**#2165** | 状态：开放 | 评论：7 | 👍: 23
**链接：** https://github.com/github/copilot-cli/issues/2165

两个相关问题：(1) 官方文档关于 Ubuntu 的说明不正确，声称需要安装 `secret-tool`，而实际需求是 `libsecret-1-0`；(2) 密钥链访问失败且无清晰的错误提示。高社区关注度（23 个 👍）表明该问题影响大量 Linux 用户。

### 3. ACP：contextTier 会话配置选项缺失
**#4275** | 状态：已关闭 | 评论：8 | 👍: 5
**链接：** https://github.com/github/copilot-cli/issues/4275

交互式 CLI 允许通过 `/model` 在会话中途更改上下文窗口层级，但 ACP（Agent Context Protocol）客户端无法做到这一点——只能在生成时设置。此功能差距限制了 ACP 编辑器的集成能力。

### 4. Agent 检查点 Ref 制造 Git 噪音
**#5323** | 状态：开放 | 评论：7 | 👍: 5
**链接：** https://github.com/github/copilot-cli/issues/5323

每个 Agent 轮次都在 `refs/agents/<session-id>/checkpoints/turn/N` 下创建提交，污染用户的 Git 历史并出现在所有 ref 渲染工具中。用户请求提供完全禁用此功能的设置。

### 5. NumLock 关闭时数字键盘导航失效（Windows）
**#5171** | 状态：已关闭 | 评论：6 | 👍: 1
**链接：** https://github.com/github/copilot-cli/issues/5171

1.0.98 版本中的回归问题导致 NumLock 关闭时，笔记本电脑上的数字键盘（4/8/6/2）无法进行光标导航，同时 Delete 键功能也失效。

### 6. MCP OAuth Entra 拒绝 Localhost 回调
**#5040** | 状态：开放 | 评论：4 | 👍: 1
**链接：** https://github.com/github/copilot-cli/issues/5040

受 Microsoft Entra ID 保护的远程 HTTP MCP 服务器认证失败，错误信息为 `AADSTS50011`，原因是授权请求使用了 `http://127.0.0.1` 回调地址，而 Entra 不接受该地址。CLI 中不存在 localhost 主机覆盖选项。

### 7. WSL2 tmux/screen 中剪贴板失效
**#4191** | 状态：已关闭 | 评论：4 | 👍: 0
**链接：** https://github.com/github/copilot-cli/issues/4191

在标准 WSL2 终端中剪贴板复制功能正常，但在 VS Code 集成终端中运行 tmux 或 screen 会话时功能失效。

### 8. 会话在轮次结束时永久卡死
**#4755** | 状态：开放 | 评论：3 | 👍: 0
**链接：** https://github.com/github/copilot-cli/issues/4755

会话在完成一个轮次后可能进入永久卡死状态——既不空闲也不运行，不接受任何输入，队列中的消息被静默丢弃。只有终止进程才能恢复会话。

### 9. BYOK：支持多个外部模型/提供商
**#4976** | 状态：开放 | 评论：2 | 👍: 8
**链接：** https://github.com/github/copilot-cli/issues/4976

GitHub Copilot 应用支持多个外部提供商，但 Copilot CLI 仅支持单一 BYOK 配置。社区请求通过环境变量（如 `COPILOT_PROVIDER_BASE_URL`）实现功能对等。

### 10. macOS 上 TLS 1.3 回归问题
**#5559** | 状态：开放 | 评论：2 | 👍: 0
**链接：** https://github.com/github/copilot-cli/issues/5559

自 1.0.93-0 版本以来，macOS 上与 MCP 服务器的 TLS 1.3 连接中断，影响 Jenkins MCP Server 插件通过流式 HTTP 的连接。

---

## 重要 PR 进展

过去 24 小时内无 PR 合并。两个 devcontainer 配置 PR（#4316 和 #4428）已被关闭，表明正在完善开发环境基础设施。

---

## 功能需求趋势

分析近期 issue 揭示了以下几个主导功能方向：

| 类别 | 趋势 | 依据 |
|----------|-------|----------|
| **多提供商支持** | 对同时配置多个外部 AI 提供商/模型的需求强烈 | #4976 (8 👍) |
| **Agent 配置** | 请求可自定义的默认 Agent、检查点设置和子 Agent 钩子 | #5323, #5383, #5059 |
| **平台特定修复** | 影响 Windows 换行符、Linux 密钥链、macOS TLS 的持续性问题 | #1148, #2165, #5559 |
| **MCP 集成** | OAuth 处理、认证流程、重复检测、注册表验证 | #5040, #5568, #5175 |
| **会话管理** | 模型、推理级别、上下文大小的默认设置；会话卡顿问题 | #4275, #5383, #5565 |
| **无障碍访问** | CLI 编辑器的屏幕阅读器兼容性改进需求 | #1573 (NVDA 支持) |

---

## 开发者痛点

### 身份验证与密钥链问题
- Ubuntu 密钥链支持仍然失效，文档误导性强（#2165，23 个 👍）
- MCP 服务器登录过期后无法提供可操作的恢复路径（#5175）
- Microsoft Entra OAuth 回调被拒绝 localhost 地址（#5040）

### 平台不一致性
- Windows CRLF 换行符损坏问题持续存在，这是一个基础性问题（#1148）
- macOS TLS 1.3 回归问题中断 MCP 服务器连接（#5559）
- WSL2 中 tmux/screen 的剪贴板集成失效（#4191）

### MCP 服务器复杂性
- 虽已添加重复端点检测功能，但认证工作流仍令人困惑
- 注册表请求缺少 User-Agent 头导致 AWS WAF 验证失败（#5568）
- 组织托管的 MCP 服务器显示的警告行为不一致

### 会话与 Agent 行为
- 会话可能永久卡死，无超时或错误恢复机制（#4755、#5565）
- Agent 检查点 ref 用无禁用选项污染 Git 历史（#5323）
- 副会话在侧边栏聊天上下文中报告给错误的主聊天（#5570）

### 工具集成缺口
- `showReasoning` 设置对 Gemini 模型无效（#5532）
- 结构化提示中缺少 Markdown 渲染（#5084）
- `rg` 工具会损坏带数字后缀的文件名（#5560）

---

*本动态基于 github.com/github/copilot-cli 在 2026-11-25 的活动数据生成*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text while maintaining the Markdown structure
2. Keep technical terms, URLs, code references, issue numbers etc. as-is
3. Use natural technical Chinese, not literal word-for-word translation
4. Output only the translation, no preamble or explanation

Let me translate section by section:

## Today's Highlights
今天的亮点

Looking at the data: No new releases in the last 24h
观察数据：过去24小时无新版本发布

There's significant activity around bug fixes, especially around formatting/exact edits, shell permission checks, session UI issues
大量活动集中在错误修复领域，尤其是格式化/精确编辑、shell权限检查和会话UI问题

Several PRs were closed including performance improvements and bug fixes
多个PR已合并，包括性能改进和错误修复

Multiple issues around provider routing, desktop app features, and TUI issues
多个问题涉及提供商路由、桌面应用功能和TUI问题

## Releases
版本发布

No new releases published in the last 24 hours.
过去24小时无新版本发布。

---

## Hot Issues
热门问题

Let me continue with the issues and other sections...
</think>


# OpenCode 社区日报 — 2026-11-25

## 今日亮点

OpenCode 社区今日依然保持高度活跃——多个 PR 来自贡献者 Hona，聚焦于时间轴行变化时的阅读器定位问题。核心性能改进持续落地，包括 Code Mode 中 schema 冗余工作的削减和更智能的文件 diff 算法。然而若干影响重大的 bug 仍未修复：Go 提供商路由导致重复计费、Windows 桌面端 Ctrl+F 失灵，以及 shell 权限检查在重定向目录命令中被绕过。

## 版本发布

过去 24 小时无新版本发布。

---

## 热门问题

### 1. [恢复前台子代理执行](https://github.com/anomalyco/opencode/issues/64073) — 27 条评论，12 👍
**领域：** 核心 (v2)
恢复前台子代理执行能力的功能请求。这是一个重要的架构变更，将影响子代理在 OpenCode 工作流中的运行方式。27 条评论表明社区对该实现方案和使用场景进行了深入讨论。

### 2. [在 OpenCode Desktop 中添加删除项目功能](https://github.com/anomalyco/opencode/issues/28030) — 20 条评论，21 👍
**领域：** Desktop
这一长期功能请求（2026 年 5 月首次提交）现已 **关闭**，表明正在实施或已完成。高评论量和点赞数确认用户对桌面应用中项目生命周期管理的强烈需求。

### 3. [Go: 会话跨多个后端路由导致重复计费](https://github.com/anomalyco/opencode/issues/66067) — 19 条评论
**领域：** Providers (Inference/Go)
**严重程度：** 高
一个关键计费 bug：使用稳定会话头的对话被路由到不同的 DeepSeek 后端，每个后端维护独立的 prompt 缓存并对完整前缀重复计费。这直接影响 Go 用户的成本可预测性。

### 4. [更优的执行权限和沙箱隔离](https://github.com/anomalyco/opencode/issues/48411) — 14 条评论，7 👍
**领域：** 核心
三项增强请求：(1) 更便捷的权限模式访问；(2) 改进的 shell 沙箱隔离；(3) 更好的 LLM 生成命令安全性验证。回应了对安全要求较高的企业用户的安全关切。

### 5. [在模型对话框中提供可绑定的"设为此代理默认模型"](https://github.com/anomalyco/opencode/issues/47836) — 7 条评论
**领域：** TUI
目前 Ctrl+F 可以收藏模型，但没有 UI 方式将某个模型持久化为代理的默认选项。用户必须手动编辑 `opencode.json(c)` 或代理的 Markdown frontmatter——这是工作流定制中的一个摩擦点。

### 6. [根命令不再接受 `opencode -m provider/model`](https://github.com/anomalyco/opencode/issues/56218) — 7 条评论，5 👍
**领域：** 核心 (v2 回归)
从 v1 到 v2 的 CLI 回归问题：`-m`/`--model` 标志仅存在于子命令而非根命令上。破坏了依赖这一便捷语法的用户的肌肉记忆和脚本。

### 7. [桌面端 Ctrl+F 无任何反应；查找在命令面板中隐藏](https://github.com/anomalyco/opencode/issues/65962) — 6 条评论
**平台：** Windows，Desktop v2.4.1
Windows 桌面端的查找功能完全失灵——无查找栏、无高亮、无 Ctrl+K 面板入口。对话视图中完全缺少基本的文本搜索功能。

### 8. [全局配置中的自定义提供商在服务启动时未注册](https://github.com/anomalyco/opencode/issues/66166) — 6 条评论
**平台：** Linux，Service (v2)
在 `~/.config/opencode/opencode.json` 中定义的自定义提供商在后台服务启动时注册失败。使用这些模型的会话会报 `ModelUnavailableError`，直到手动触发。

### 9. [重启后恢复 Ollama 会话时报 ModelUnavailable](https://github.com/anomalyco/opencode/issues/62711) — 5 条评论
**状态：** 已复现
重启后恢复 Ollama 会话时模型不可用，尽管模型本身有效。表明会话持久化和模型注册时序存在问题。

### 10. [会话历史回放截断旧架构长会话](https://github.com/anomalyco/opencode/issues/61189) — 4 条评论，2 👍
**领域：** Session-UI
长会话在编辑并重新发送操作后，早期检查点之后的 UI 渲染丢失。数据完好无损但 UI 在某一点之后停止显示历史——使会话回溯变得困难。

---

## 关键 PR 进展

### 已关闭（已合并）

| PR | 描述 | 影响 |
|----|------|------|
| [#66130](https://github.com/anomalyco/opencode/pull/66130) | 为移动应用添加推送通知 | 新移动集成功能 |
| [#66251](https://github.com/anomalyco/opencode/pull/66251) | 在 Code Mode 目录中跳过冗余 schema 工作 | 性能改进 |
| [#66246](https://github.com/anomalyco/opencode/pull/66246) | 仅 diff 一次文件变更，跳过空端 diffing | 性能改进 |
| [#66257](https://github.com/anomalyco/opencode/pull/66257) | 仅在点击报告时发送生产环境崩溃至 Sentry | 减少错误监控噪音 |
| [#66248](https://github.com/anomalyco/opencode/pull/66248) | 在 ComposerQuote 中记录新的引用文本 | 文档更新 |
| [#66247](https://github.com/anomalyco/opencode/pull/66247) | 将引用作为纯回复风格块引用发送 | 改进引用格式 |
| [#66244](https://github.com/anomalyco/opencode/pull/66244) | 指明技能来自哪个 MCP 服务器 | 提高透明度 |
| [#66253](https://github.com/anomalyco/opencode/pull/66253) | 固定 OG Worker 中重命名的 OpenMono 字体模块 | 发布/部署修复 |

### 开放（审核中）

| PR | 描述 | 影响 |
|----|------|------|
| [#66263](https://github.com/anomalyco/opencode/pull/66263) | 保持精确编辑在格式化后稳定 | **关闭 #66262** — 对格式化用户至关重要 |
| [#66261](https://github.com/anomalyco/opencode/pull/66261) | 为聊天报告的模型 ID 测量上下文窗口 | Claude Agent 提供商 bug 修复 |
| [#66254](https://github.com/anomalyco/opencode/pull/66254) | 追踪后台压缩及其等待过程 | 压缩调试/可观测性 |
| [#66250](https://github.com/anomalyco/opencode/pull/66250) | 削减 Code Mode 运行中的重复工作 | 性能改进 |
| [#62014](https://github.com/anomalyco/opencode/pull/62014) | 创建时不要复用未迁移的 V1 会话 ID | **关闭 #61947** — 迁移修复 |
| [#66054](https://github.com/anomalyco/opencode/pull/66054) | 当行在其下方变化时保持文字位置 | UI 稳定性（基于 #66023） |
| [#65817](https://github.com/anomalyco/opencode/pull/65817) | 拒绝已拒绝浏览技能的加载 | **关联 #65737** — 权限安全 |
| [#66188](https://github.com/anomalyco/opencode/pull/66188) | 当读者在行内滚动时保持跟随回复 | UI 滚动行为 |
| [#66173](https://github.com/anomalyco/opencode/pull/66173) | 在行列表变化时保持挂载的时间轴行在文档中 | 焦点/滚动保持 |
| [#66156](https://github.com/anomalyco/opencode/pull/66156) | 在会话消息变化时保持事件行链接 | 焦点处理修复 |

---

## 功能请求趋势

汇总所有问题中的模式，揭示以下主导功能方向：

### 桌面体验
- **项目生命周期管理** — 删除项目、会话限制（64 会话上限）、作用域搜索改进
- **货币配置** — 成本显示硬编码为 USD；用户需要 CNY 支持
- **表情反应** — 轻量级消息反馈，不消耗 token
- **仅远程模式** — 为纯远程部署禁用内置本地服务器

### 核心工作流
- **模型偏好持久化** — 从 TUI 设置按代理的默认选项，无需编辑配置文件
- **后台压缩可观测性** — 追踪和理解压缩等待过程
- **速率限制配置** — 控制重试退避、`retry-after` 处理和尝试次数上限
- **CLI 一致性** — 恢复 v1 的 `opencode -m` 根命令行为

### 安全与沙箱
- **执行权限** — 更便捷的权限模式访问、改进的 shell 沙箱隔离、命令安全性验证
- **浏览技能拒绝** — 正确拒绝已拒绝的浏览技能

---

## 开发者痛点

### 🔴 高优先级

1. **提供商路由不稳定 (#66067)** — Go 用户因后端切换而遭遇意外重复计费。直接影响成本和信任。

2. **Shell 权限绕过 (#66053)** — 重定向目录命令（`cd . > file`）跳过所有权限检查。对不受信任代码执行存在安全风险。

3. **格式化器冲突 (#66262/#66263)** — 格式化后精确编辑失败；模型看不到最终格式化状态。对代码质量有要求的开发者常见挫败点。

### 🟡 中优先级

4. **会话持久化失败** — V1 迁移问题（#62014）、Ollama 恢复失败（#62711）和历史截断（#61189）表明会话可靠性持续面临挑战。

5. **Windows 桌面查找功能损坏 (#65962)** — 主要桌面平台上缺少基本功能。

6. **服务启动注册问题 (#66166)** — 自定义提供商静默加载失败，导致令人困惑的 `ModelUnavailableError` 消息。

### 🟢 持续改进

7. **UI 焦点/滚动稳定性** — 来自贡献者 Hona 的多个堆叠 PR 解决了时间轴行变化扰乱阅读器位置的问题。表明存在系统性 UI 渲染挑战。

8. **跨平台路径处理 (#66192)** — 脚本因路径分隔符不匹配在 Windows 上失败，尽管其他位置存在现成的规范化模式。

9. **PTY sidecar 线程问题 (#66121)** — `opencode-pty` 可能进入单线程忙循环，导致 shell 工具超时。

10. **无障碍差距** — 屏幕阅读器用户报告流式内容对无障碍树不可见（#54652、#57512），限制了视障开发者的使用。

---

*日报数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode) GitHub 数据，2026-11-25。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi community digest from English to Simplified Chinese. I need to:

1. Translate all the text content while preserving the markdown structure
2. Keep URLs, code references, issue/PR numbers, etc. as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output only the translation, no additional explanations or markdown fences

Let me go through the document section by section and translate it carefully.

Key things to remember:
- Project name "Pi" should stay as "Pi"
- Repository: github.com/earendil-works/pi stays as-is
- Issue/PR numbers like #10956 stay as-is
- Dates like 2026-11-25 stay as-is
- Technical terms should be rendered in natural Chinese technical language
- Preserve all formatting: headings, lists, tables, bold, etc.

Let me translate:
</think>


# Pi 社区摘要

**日期：** 2026-11-25
**来源：** github.com/earendil-works/pi

---

## 今日要点

Pi 社区今日在**流式处理性能与 Windows 兼容性**方面活动显著。一项关键修复已合并，解决了影响 MCP、AI、agent、coding-agent 和 TUI 包的流式读取器线性时间复杂度问题（#12451）。Windows 用户将受益于改进的 Git Bash 检测和终端输入修复。GitHub Copilot 集成收到了多项修复，涉及模型可见性和 reasoning opaque 处理，表明该提供商获得了更多关注。

---

## 版本发布

过去 24 小时内**无新版本**发布。

---

## 热门议题

### 1. [扩展处理 turn_end 后，cacheWarming "idle" 静默停止](https://github.com/earendil-works/pi/issues/10956)
**17 条评论 | 优先问题**
当扩展使用自定义消息或压缩消息处理 `turn_end` 时，空闲缓存预热机制无法触发。在 507 个 `cache_warming_decision` 事件全部显示 `continuationProbability: 1` 的情况下，用户报告运行稳定后会话立即显示 `Inactive (conversation context changed)`。这严重影响依赖空闲预热策略的用户的响应延迟。

### 2. [Windows：停止/退出后终端回显鼠标/Kitty 输入为乱码](https://github.com/earendil-works/pi/issues/12133)
**6 条评论 | Windows 专属**
在 Windows Terminal/PowerShell 中退出 Pi 后，鼠标移动和按键会在提示符处洪水般涌入 SGR 鼠标报告的回显（`[<35;69;10M^`）。这会使终端处于不可用状态，需要手动重置。

### 3. [压缩摘要无限增长（17k 到 164k 字符）](https://github.com/earendil-works/pi/issues/12242)
**6 条评论 | 性能**
经过九次压缩后，摘要从 17KB 增长到 164KB 字符，第九次压缩耗时 588 秒，消耗 75K 输出 token。第二台机器仅五次压缩后就达到 88KB。更新提示中"保留所有现有信息"的指令似乎导致了指数级增长。

### 4. [gemini-4-neon 在流式输出中途停止](https://github.com/earendil-works/pi/issues/12407)
**4 条评论 | 模型兼容性**
新版 gemini-4-neon 模型经常在流式输出中途停止且不恢复。诊断发现 OpenRouter 将 `MALFORMED_RESPONSE` 规范化为 OpenAI 格式，导致 Pi 将错误误判为正常停止而非失败。

### 5. [RPC 模式：session_start 期间扩展对话框无法响应](https://github.com/earendil-works/pi/issues/12147)
**2 条评论 | RPC 模式**
在 `--mode rpc` 下，`session_start` 期间显示的扩展对话框永远无法得到响应。Pi 发送 `extension_ui_request` 但不读取客户端的 `extension_ui_response`，约 20ms 后以状态码 0 退出。这破坏了自动化工作流。

### 6. [全屏文本选择后打字时仍保留](https://github.com/earendil-works/pi/issues/10592)
**4 条评论 | 用户体验**
鼠标文本选择区域在复制后和输入下一条提示时仍保持高亮。用户期望打字能清除已完成的选择，类似于点击其他位置。

### 7. [Windows：Program Files 外的 Git for Windows 未被找到](https://github.com/earendil-works/pi/issues/12408)
**4 条评论 | Windows 路径**
安装在自定义路径（如 `G:\Programmi Aggiuntivi\Git`）的 Git for Windows 永远无法被检测到。Pi 回退到 `System32\bash.exe`（WSL 启动器），导致当 WSL 被禁用时 bash 工具调用失败。

### 8. [Durable：从对话中止时返回撤回的输入 ID](https://github.com/earendil-works/pi/issues/12445)
**2 条评论 | API 增强**
调用方无法确定 `Conversation.abort(context)` 期间撤回了哪些排队的输入。在快照和中止之间接受的输入可能在没有任何通知的情况下被撤回，使得难以可靠地跟踪提交状态。

### 9. [gemini-4-neon 和 gemini-4-hydrogen 上的 xhigh thinking 失败](https://github.com/earendil-works/pi/issues/12443)
**3 条评论 | 模型配置**
在 Google 模型上设置 thinking 级别为 `xhigh` 失败，提示"不支持的 Google thinking 级别映射"错误，尽管根据 Google 文档 xhigh 是受支持的。

### 10. [拒绝 developer 角色的 OpenAI 兼容代理默认收到该角色](https://github.com/earendil-works/pi/issues/12433)
**2 条评论 | 兼容性**
Pi 默认发送 developer 角色（`getCompat supportsDeveloperRole 默认为 true`），导致通过 Kimi Coding 或 Qwen 等非 OpenAI 代理使用 reasoning 模型时每次对话都收到 400 错误。

---

## 关键 PR 进展

### 1. [[fix(mcp,ai,agent,coding-agent,tui)] 以线性时间读取大型流式行和事件](https://github.com/earendil-works/pi/pull/12451) — **已关闭**
解决了问题 #12224。之前，流式读取器将不完整的行/SSE 事件保存在不断增长的字符串中，并在每个数据块上搜索全部内容。V8 的字符串扁平化导致 O(n²) 复杂度。现在仅从保存的偏移量开始搜索，大幅提升大型事件的性能。

### 2. [[fix(ai)] 在 openai-completions 中重放 GitHub Copilot reasoning_opaque](https://github.com/earendil-works/pi/pull/12505) — **开放中**
修复了 #12418。捕获并重放 Copilot 的 `reasoning_opaque` 以及 `reasoning_text`，包括工具调用和仅推理的 assistant 消息。这对重放时保持对话连贯性至关重要。

### 3. [[fix(ai,coding-agent)] 向 onResponse 报告 HTTP 错误响应](https://github.com/earendil-works/pi/pull/12502) — **已关闭**
修复了 #12376。`onResponse` 和 `after_provider_response` 扩展事件现在在基于 SDK 的适配器上为 4xx/5xx 响应触发。之前，SDK 错误（如 429 转为 `APIError`）完全绕过回调。

### 4. [[fix(ai)] 从 Anthropic 的 models.dev 条目中移除 Claude thinking 支持](https://github.com/earendil-works/pi/pull/12489) — **已关闭**
修复了 #12429。Claude thinking "关闭"支持现在从 Anthropic 的 models.dev 目录中推导，而非手工编写每个提供商的列表，确保覆盖所有主机。

### 5. [[fix(coding-agent)] 在 Windows 上查找 PATH 中的 Git Bash](https://github.com/earendil-works/pi/pull/12494) — **已关闭**
修复了 #12408。Git 解析现在除了固定目录外还搜索 PATH，正确找到安装在非标准位置的 Git Bash。

### 6. [[fix(coding-agent)] 为启动对话框报告阻止的程序状态](https://github.com/earendil-works/pi/pull/12487) — **已关闭**
修复了 #12439。启动对话框（项目信任、缺失会话文件夹）现在发送 OSC 7501 `blocked` 状态，使主机工具能够检测 Pi 何时需要用户输入。

### 7. [[fix(ai)] 处理 OpenRouter native_finish_reason](https://github.com/earendil-works/pi/pull/12470) — **已关闭**
OpenRouter 在 `native_finish_reason` 中传递上游的结束原因。Pi 之前忽略此字段，导致上游失败（如 Gemini 的 `MALFORMED_RESPONSE`）显示为正常停止。

### 8. [[fix(ai)] 新启用的 GitHub Copilot 模型在 pi update --models 后仍隐藏](https://github.com/earendil-works/pi/pull/12325) — **开放中**
修复了 #11006。`filterModels` 使用过时的 `availableModelIds`，仅在 token 刷新时更新。模型刷新从不更新它，导致新启用的模型被隐藏。

### 9. [[fix(ai)] 避免在更长标识符内匹配溢出](https://github.com/earendil-works/pi/pull/12438) — **已关闭**
修复了 #12343。像 `my_plugin_request_too_large_flag` 这样的标识符被错误地分类为上下文溢出（零 token 使用量的 HTTP 400），触发了不必要的压缩-重试恢复。

### 10. [[feat(mcp,coding-agent)] 支持无状态 MCP 协议 2026-07-28](https://github.com/earendil-works/pi/pull/12479) — **开放中**
在 pi-mcp 和 Pi 的 MCP 扩展中添加了 MCP 协议版本 `2026-07-28`（无状态修订版）。早期版本保持兼容。

---

## 开发者痛点

### 反复出现的挫折

1. **Windows 路径处理** — 多个问题（#12408、#12133）凸显了 Pi 在处理 Windows 特定路径、Git 安装和终端行为方面的困难。开发者报告检测逻辑分散，无法覆盖常见配置。

2. **流式事件处理** — 流式读取器中的 O(n²) 复杂度（#12451）影响了五个包并导致实际性能下降。MCP SSE 事件处理中的类似问题表明了处理大型载荷流式数据的挑战。

3. **模型目录陈旧** — 自 2026-11-24 约 18:30 UTC 以来，main 和所有 PR 上的 CI 失败（#12492）原因是 models.dev 移除了模型（`github-copilot/claude-opus-5`、`github-copilot/claude-sonnet-5`），但 Pi 生成的类型未被重建。

4. **扩展 API 限制** — 开发者报告无法从 `turn_end` 处理器请求原生压缩（#12476），以及中止时缺少撤回的输入 ID（#12445），需要变通方案。

5. **HTTP 错误可见性** — 扩展无法访问 HTTP 错误码（#12376），developer 角色处理对 OpenAI 兼容代理默认为不安全（#12433），破坏了 reasoning 模型集成。

6. **压缩增长无界** — 摘要无限增长（#12242）浪费 token 和时间，用户报告耗时 588 秒的压缩操作消耗 75K 输出 token。

---

*生成于 2026-11-25 | 数据来源 github.com/earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, code spans, numbers, dates, project names, issue/PR references verbatim
- Use natural technical Chinese

Let me translate this carefully, maintaining the structure and making it read naturally in Chinese.
</think>


# Qwen Code 社区日报 — 2026-11-25

## 今日要点

Qwen Code 项目近期 CI 不稳定问题突出，Managed Agent gate 多次失败、E2E 测试回退等问题占据近期活动的主导地位。v1.0 Preview loop kernel 的落地工作仍在积极推进（Issue #17045），同时新 PR 为 CLI 带来了按模型记忆推理力度持久化、终端布局优化等增强功能。社区对 Voice/Live Voice 特性的讨论也很活跃，至少有三个相关 issue 和一个 PR 涉及 turn detection 配置。

---

## 版本发布

过去 24 小时内**无新版本**发布。发布流水线似乎受到持续 CI 故障的影响（参见 Issue #17201 关于 v0.27.2-nightly.20261113 版本发布失败的问题）。

---

## 热门 Issue

| # | Issue | 关键信息 | 重要性 |
|---|-------|------------|----------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failed: Managed Agent gate — no test identified | 546 条评论；10 月 19 日起跟踪；CI 持续不稳定 | 高优先级基础设施问题，影响所有 PR；评论数遥遥领先 |
| [#18252](https://github.com/QwenLM/qwen-code/issues/18252) | E2E Tests — cli/cron-tools.test.ts failure | 26 条评论；11 月 24 日创建；标记 provisional | 定时任务处理回退；阻塞合并就绪状态 |
| [#17045](https://github.com/QwenLM/qwen-code/issues/17045) | Tracking: land the 1.0 Preview loop kernel on main | 24 条评论；P1 优先级；进行中 | 引入事件驱动内核的核心架构变更；涉及面广 |
| [#16346](https://github.com/QwenLM/qwen-code/issues/16346) | ClassSizeRatchetTest.productionClassesStayWithinTheirSizeRatchet | 21 条评论；CI 反复失败 | Java SDK 质量门回归；影响 SDK 发布流水线 |
| [#10791](https://github.com/QwenLM/qwen-code/issues/10791) | Balanced content-only `<thinking>` blocks leak to output | 8 条评论；welcome-PR；修复见 PR #11188 | 用户可见的 bug：内部推理内容泄漏到输出中 |
| [#18149](https://github.com/QwenLM/qwen-code/issues/18149) | Widen Action parking beyond first increment | 8 条评论；承接 #18115；设计见 #18047 | Managed Agent 扩展性改进；降低会话内存占用 |
| [#17446](https://github.com/QwenLM/qwen-code/issues/17446) | CLI model discovery during custom provider setup | 7 条评论；P2 优先级 | 自定义 provider 接入的用户体验增强；社区呼声高 |
| [#17000](https://github.com/QwenLM/qwen-code/issues/17000) | Live Voice hardcoded `turn_detection` rejected by qwen-audio | 6 条评论；影响 DashScope `qwen-audio-3.0-realtime-plus` | Live Voice 功能在特定模型下失效；PR #17003 已处理此问题 |
| [#18298](https://github.com/QwenLM/qwen-code/issues/18298) | Web Shell renders unset boolean as OFF | 4 条评论；11 月 25 日创建 | 设置界面歧义；实验性 flag 错误显示 OFF 状态 |
| [#17668](https://github.com/QwenLM/qwen-code/issues/17668) | read_file reports nonexistent range '6-6 of 5' at EOF | 4 条评论；文件工具的边界情况 bug | 模型工具返回令人困惑的错误信息；影响 AI 工具可靠性 |

---

## 关键 PR 进展

| # | PR | 分类 | 概要 |
|---|-----|----------|---------|
| [#18316](https://github.com/QwenLM/qwen-code/pull/18316) | Persist reasoning effort and context window per model | CLI | 模型级偏好现可在会话重启和模型切换后保留 |
| [#17003](https://github.com/QwenLM/qwen-code/pull/17003) | Configurable turn_detection for realtime session.update | Live Voice | 解决 Issue #17000；根据模型能力自动检测 `server_vad` 与 `semantic_vad` |
| [#18310](https://github.com/QwenLM/qwen-code/pull/18310) | Scope Managed Agent fast checks by changed paths | CI/CD | 减少 CI 噪音；无关 PR 不再触发完整 SDK Java 测试套件 |
| [#18315](https://github.com/QwenLM/qwen-code/pull/18315) | Pin clock in scheduled-tasks reseat assertions | Testing | 通过 mock 挂钟时间修复 flaky 测试；仅涉及测试代码 |
| [#12276](https://github.com/QwenLM/qwen-code/pull/12276) | Local notes compaction with strategy selector | Core | 新增摘要/笔记+历史压缩策略选项；设置中可选开启 |
| [#11854](https://github.com/QwenLM/qwen-code/pull/11854) | Add hybrid code mode | Core | 新增 `tools.mode` 枚举（`direct`、`code_mode`、`code_mode_only`）；与 Codex 对齐 |
| [#17992](https://github.com/QwenLM/qwen-code/pull/17992) | Preserve completed bridge prompt outcomes | SDK | 多轮 usage 采集中保持 bridge 响应的稳定性 |
| [#17975](https://github.com/QwenLM/qwen-code/pull/17975) | Reject nonfinite and invalid timeout objects | SDK-Python | 对 timeout 参数做输入校验；防止运行时错误 |
| [#17823](https://github.com/QwenLM/qwen-code/pull/17823) | Keep A2A tasks recoverable after transcript read errors | Agents | 文件系统故障时返回可重试错误 `-32012`；支持任务恢复 |
| [#18303](https://github.com/QwenLM/qwen-code/pull/18303) | Park Shell approvals on version-0 public Shell Sessions | Managed Agent | 实现 #18149 的 S8a；改善公共会话的资源管理 |

---

## 功能需求趋势

基于本期 issue 和 PR，功能需求呈现以下趋势：

1. **Voice/Live Voice 增强** — 多个 issue（#17000、#18305）聚焦 ASR 模型支持缺口和 turn detection 配置问题。PR #17003 在 turn detection 灵活性上取得进展。

2. **CLI 与模型管理** — #17446 请求在自定义 provider 配置时支持模型发现；#18316 实现了按模型记忆推理力度持久化。用户期望更细粒度的 CLI 控制。

3. **Managed Agent 扩展性** — #18311 请求官方 Spring Boot Starter；#18289 提议由 host 提供执行定义输入。嵌入/托管能力正在走向成熟。

4. **Web Shell 定制化** — #18159 请求在不 fork 的情况下为内置 Web Shell 添加自定义面板。UI 扩展点需求强烈。

5. **内存与工作空间共享** — #18030 请求跨 Git worktree 共享 auto-memory。改善多工作空间开发者体验。

6. **会话与转录完整性** — #17559（已关闭）和 #17823 处理转录记录可靠性和 A2A 任务恢复问题。

---

## 开发者痛点

1. **CI 流水线不稳定** — 反复出现的 Managed Agent gate 失败（#14724、#16346、#18252、#18258、#18288、#18307）为贡献者带来摩擦。gate 正在阻塞合并和发布流程。

2. **发布流水线故障** — Issue #17201 显示 v0.27.2-nightly 在集成步骤失败；叠加 CI 问题，拖慢了交付节奏。

3. **Webhook/Transport 白名单过于僵化** — #18305 和 #17000 表明 Voice transport 层与特定模型族耦合过紧，导致使用新版 ASR 模型时失败。

4. **设置界面歧义** — #18298 表明"未设置"的布尔值渲染为 OFF，使用户对实际功能状态产生误解。

5. **Flaky 测试** — #18315 承认定时任务测试根据实时执行而失败，表明测试环境对时间敏感。

6. **上下文窗口继承 bug** — #13338 和 #18304（fix PR）揭示了同 provider 内切换模型时的配置解析问题。

---

*本日报数据来源为 GitHub，时间范围 2026-11-25。所有链接指向 QwenLM/qwen-code 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*