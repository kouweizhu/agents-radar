# OpenClaw 生态日报 2026-09-18

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-18 00:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English OpenClaw project digest into Chinese. Let me go through it carefully and translate while following the rules:

1. Keep all markdown structure exactly
2. Keep URLs, numbers, issue/PR references, file paths as-is
3. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title**: OpenClaw Project Digest — 2026-09-18
→ OpenClaw 项目摘要 — 2026-09-18

**Section 1: Today's Overview**
- "OpenClaw shows very high activity" → OpenClaw 今日活动非常活跃
- "500 issues and 500 pull requests updated in the last 24 hours" → 过去24小时内有 500 个 issue 和 500 个 pull request 更新
- "The issue state is 322 open/active and 178 closed" → issue 状态为 322 个 open/active，178 个 closed
- "PRs show 291 open and 209 merged/closed" → PR 状态为 291 个 open，209 个 merged/closed
- "No new releases were published" → 未发布新版本
- "several high-severity issues" → 若干高严重性问题
- "Gateway reaches ready state but never serves requests" → Gateway 状态达到 ready 但无法响应请求
- "632-agent fleet experiencing event loop starvation" → 632个智能体的集群出现事件循环饥饿
- "P1 regression in 2026.9.2 causing message loss" → 2026.9.2 中的 P1 级回归导致消息丢失
- "when a second run displaces an in-flight turn" → 当第二次运行取代进行中的回合时
- "ongoing concerns about zombie process accumulation" → 持续关注僵尸进程积累问题
- "unreaped child processes" → 未回收的子进程


- "maintainer team is actively pushing fixes" → 维护团队正在积极推进修复工作
- "multiple PRs in 'ready for maintainer look' status" → 多个 PR 处于"待维护者审阅"状态

**Section 2: Releases**
- "No new releases in the last 24 hours" → 过去24小时内无新版本发布

**Section 3: Project Progress**
- "The project merged/closed 209 PRs in the last 24 hours" → 过去24小时内合并/关闭了 209 个 PR

Key advances include restoring Gateway startup under Bun, preventing unnecessary session rebuilds when cron bindings stay the same, and recovering corrupted secrets to prevent restart lockouts. Performance improvements focus on loading catalog choices without full session enumeration, while platform-specific fixes address Windows compatibility issues.

UI refinements are underway for mobile chat bubbles and task progress indicators, with improvements to reply metadata visibility. Telegram integration work covers message body rendering and post cancellation, while several pull requests are advancing toward maintainer review.

Critical concerns center on two major issues: zombie process accumulation from unreaped child processes causing runtime degradation, and MCP server timeouts that crash the Gateway due to unhandled rejections in child cleanup. A P3 umbrella tracks WebUI performance and stability, while message handling during active reply runs remains problematic—specifically when a second run displaces an in-flight turn, triggering a "Reply operation has no active tool authority snapshot" error that's marked as a regression in 2026.9.2.

The most severe issue involves the Gateway reaching ready state but failing to serve requests entirely, with every health probe timing out due to event loop starvation in a 632-agent fleet. Looking at the broader picture, multiple P1 regressions are emerging in the 2026.9.x release cycle around message handling, session state management, and Gateway stability under load. Zombie process leaks and MCP timeout crashes point to underlying resource management failures in the system.

Active development is evident across several fronts: the OpenAI Agents API harness is progressing as a new runtime alternative to Codex, UI improvements are underway for shared chat contexts, and sustained engineering focus is being applied to WebUI performance and stability—indicating these areas are prioritized for the next release cycle.

Users are experiencing real friction through migration challenges, with one report detailing a ~1-day manual repair process after upgrading from 2026.7.1-2 to 2026.9.4, including config migration failures, Telegram crash loops, iOS node re-approval requirements, and an empty Usage screen. Gateway boot times have ballooned from ~2 seconds to ~12 minutes on large deployments, and core exec/read tools are silently returning empty output as a regression in v2026.6.x.

Multiple crash-loops, message loss incidents, and session state corruption reports suggest 2026.9.x stability remains a concern. The development team appears responsive with active maintenance, though regression frequency in recent releases is becoming problematic.

Several stale issues need attention: MCP loopback transport reconnection failures, silent subagent execution without liveness monitoring on Telegram, Windows exec/read tool regressions, and cron agent job timeout handling all require maintainer follow-up. There's also a visibility mismatch in Telegram group sessions causing one-way failures. These lingering issues risk becoming technical debt if left unaddressed.</think>

# OpenClaw 项目摘要 — 2026-09-18

---

## 1. 今日概览

OpenClaw 今日活动非常活跃，**过去 24 小时内有 500 个 issue 和 500 个 pull request 更新**。Issue 状态为 322 个 open/active，178 个 closed；PR 状态为 291 个 open，209 个 merged/closed。未发布新版本。项目面临若干高严重性问题：一起 **P0 级别 bug**（Gateway 达到 ready 状态但从不响应请求，632 个智能体的集群出现事件循环饥饿）、一起 **P1 级别回归**（2026.9.2 中的消息丢失问题，当第二次运行取代进行中的回合时消息被丢弃），以及持续关注的**僵尸进程积累**问题（来自未回收的子进程）。维护团队正在积极推进修复工作，多个 PR 处于"待维护者审阅"状态。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 项目进展

项目在过去 24 小时内合并/关闭了 209 个 PR。主要进展包括：

- **#151269** — `fix(sqlite): restore Gateway startup under Bun`（维护者，P1）— 修复 Bun 1.4.0 全局安装时的 SQLite 快照清理错误。状态：👀 ready for maintainer look。  
  https://github.com/openclaw/openclaw/pull/151269

- **#151279** — `fix: avoid session-list rebuilds when cron bindings are unchanged` — 当 cron 事件绑定保持不变时，避免不必要的 session 行重建。  
  https://github.com/openclaw/openclaw/pull/151279

- **#151250** — `fix(secrets): recover Gateway tokens corrupted by redacted saves`（P0，合并风险：兼容性）— 修复当脱敏显示值替换存储的凭据时导致的 Gateway 重启锁定问题。状态：👀 ready for maintainer look。  
  https://github.com/openclaw/openclaw/pull/151250

- **#150831** — `perf(gateway): load catalog choices without enumerating sessions`（P2）— 通过不进行完整 session 枚举来加载目录描述，提升性能。状态：👀 ready for maintainer look。  
  https://github.com/openclaw/openclaw/pull/150831

- **#151016** — `fix(cli): preserve non-ASCII Windows agent launchers`（P1，合并风险：兼容性）— 修复当 Windows 智能体启动器路径无法用 OEM 代码页表示时 Gateway 启动中止的问题。状态：📣 needs proof。  
  https://github.com/openclaw/openclaw/pull/151016

- **#150518** — `fix(ui): preserve mobile chat bubble gutters`（P3）— 修复窄屏幕上转发消息和附件卡片贴近屏幕边缘的问题。状态：👀 ready for maintainer look。  
  https://github.com/openclaw/openclaw/pull/150518

- **#150153** — `fix: keep task recovery working across shared Gateway updates`（P1，合并风险：兼容性）— 协调 Gateway 更新，防止缺少运行时模块时任务失败。状态：👀 ready for maintainer look。  
  https://github.com/openclaw/openclaw/pull/150153

- **#151176** — `feat(openai): add explicit Agents API MVP harness`（P2）— 提供 OpenAI Agents API 作为 Codex app-server 的替代方案。状态：📣 needs proof。  
  https://github.com/openclaw/openclaw/pull/151176

---

## 4. 社区热点话题

按评论数排名的最活跃 issue：

- **#97616** — `[Bug]: OpenClaw leaks unreaped hook/tool child processes, causing zombie accumulation and runtime degradation` — 31 条评论，P1，🦐 gold shrimp。  
  https://github.com/openclaw/openclaw/issues/97616

- **#144911** — `[Bug]: MCP server init timeout crashes the Gateway — unhandled rejection "service child cleanup identity lost"` — 29 条评论，P1，🦞 diamond lobster。  
  https://github.com/openclaw/openclaw/issues/144911

- **#149361** — `Umbrella: WebUI performance and stability` — 21 条评论，P3，🌊 off-meta tidepool。  
  https://github.com/openclaw/openclaw/issues/149361

- **#139847** — `[Bug]: message sent while a reply run is active is dropped — "Reply operation has no active tool authority snapshot"` — 15 条评论，P1，🦞 diamond lobster。2026.9.2 中的回归问题。  
  https://github.com/openclaw/openclaw/issues/139847

- **#149538** — `main (1611ca6d): Gateway reaches ready but never serves; every /health probe times out while the event loop is starved (632-agent fleet)` — 15 条评论，P0，🦐 gold shrimp。  
  https://github.com/openclaw/openclaw/issues/149538

**核心诉求**：热点 issue 反映出**资源管理失败**（僵尸进程、事件循环饥饿）、**超时处理缺口**（MCP 服务器初始化）以及近期 2026.9.x 版本中的**回归质量问题**。WebUI 汇总 issue 表明用户对界面性能的持续不满。

---

## 5. Bug 与稳定性

已报告/活跃的严重和高严重性 bug：

| Issue | 严重性 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| **#149538**：Gateway 达到 ready 但从不服务；事件循环饥饿导致每个 /health 超时（632 智能体集群） | **P0** | OPEN | — |
| **#148529**：Gateway 在 632 智能体集群上从启动到 ready 约需 12 分钟（回归） | **P1** | OPEN | — |
| **#97616**：OpenClaw 泄漏未回收的 hook/tool 子进程，导致僵尸进程积累和运行时降级 | **P1** | OPEN | — |
| **#144911**：MCP 服务器初始化超时导致 Gateway 崩溃 — 子清理中未捕获的拒绝 | **P1** | OPEN | — |
| **#139847**：回复运行活跃时发送的消息被丢弃（2026.9.2 回归） | **P1** | OPEN | — |
| **#148707**：回复丢失，显示"Reply operation has no active tool authority snapshot"（2026.9.4 回归） | **P1** | OPEN | — |
| **#127229**：Telegram 看门狗释放的持久化更新被错误标记为墓碑 | **P1** | OPEN | — |
| **#137332**：混合终端请求者-结算批次在所有权检查后永久重试 | **P1** | OPEN | — |
| **#119411**：内存文件监听器从不重建索引，报告 Dirty: no 但计数低于磁盘值 | **P1** | OPEN | — |
| **#110190**：运行时上下文载体置于用户消息之后导致严重模型混淆 | **P1** | OPEN | — |

**分析**：多个 P1 回归与 2026.9.x 发布周期相关，特别是消息处理、会话状态和 Gateway 高负载下的稳定性。僵尸进程泄漏（#97616）和 MCP 超时崩溃（#144911）是显著的资源管理故障。最高严重性 issue 未见直接的修复 PR，但相关基础设施修复正在推进中（如 #151269 针对 SQLite/Bun，#151016 针对 Windows 启动器）。

---

## 6. 功能请求与路线图信号

PR 中可见的活跃功能工作：

- **#151176** — `feat(openai): add explicit Agents API MVP harness`（P2）— 新增 OpenAI Agents API 作为 Codex 的替代运行时方案。可能成为近期发布的候选。  
  https://github.com/openclaw/openclaw/pull/151176

- **#150549** — `feat(ui): unify chat reply context and participant controls`（P3）— 改进共享聊天中的回复标记和参与者关联。  
  https://github.com/openclaw/openclaw/pull/150549

- **#149361**（汇总）— WebUI 性能与稳定性 — 表明对 WebUI 的持续工程投入。

**路线图信号**：OpenAI Agents API  harness（#151176）代表新的运行时选项，暗示扩展 Codex 之外的依赖。Gateway 和 WebUI 的性能和稳定性工作表明这些是下一版本的重点领域。

---

## 7. 用户反馈摘要

来自 issue 报告的真实用户痛点：

- **更新迁移失败**：Issue #150452 描述了从 2026.7.1-2 升级到 2026.9.4 后需要约 1 天手动修复，包括配置迁移失效、Telegram 崩溃循环、iOS 节点重新审批以及 Usage 页面空白。  
  https://github.com/openclaw/openclaw/issues/150452

- **Gateway 启动回归**：用户报告大型集群上 Gateway 启动时间从约 2 秒增加到约 12 分钟（#148529）。  
  https://github.com/openclaw/openclaw/issues/148529

- **Windows 工具回归**：exec/read 工具在 Windows 上静默返回空输出（v2026.6.x 回归）— #105528。  
  https://github.com/openclaw/openclaw/issues/105528

- **生产环境可靠性**：多个崩溃循环、消息丢失和会话状态损坏报告表明对 2026.9.x 稳定性的不满。Issue 评级显示多个 🦞 diamond lobster 和 🦐 gold shrimp 级别的 bug。

**满意度**：混合。积极开发和高维护 PR 数量表明工程响应迅速，但近期版本中回归频率令人担忧。

---

## 8. 待处理积压

需要维护者关注的重点 issue：

- **#98435** — `MCP loopback transport does not auto-reconnect on CLI side after gateway restart` — 13 条评论，P2，stale。  
  https://github.com/openclaw/openclaw/issues/98435

- **#101656** — `Telegram detached subagents can run silently without liveness or terminal notification` — 10 条评论，P2。  
  https://github.com/openclaw/openclaw/issues/101656

- **#105528** — `exec/read tools silently return empty output on Windows (v2026.6.x regression)` — 10 条评论，P1。  
  https://github.com/openclaw/openclaw/issues/105528

- **#45494** — `Cron agent jobs silently time out during sustained LLM API outages instead of fast-failing` — 10 条评论，P2，stale。  
  https://github.com/openclaw/openclaw/issues/45494

- **#53783** — `Telegram group: cross-agent sessions_list visibility mismatch causes one-way sessions_send failure` — 8 条评论，P2，stale，标记 security。  
  https://github.com/openclaw/openclaw/issues/53783

这些 stale 标记的 issue 存在成为长期技术债务的风险。Windows exec/read 回归（#105528）尤其影响核心工具功能。

---

## 横向生态对比

<think>The user wants me to translate this entire report into Chinese, maintaining the exact same structure (headings, tables, lists, formatting) while using natural technical Chinese appropriate for a developer newsletter.

Let me go through and translate section by section, keeping the structure intact:

1. **Ecosystem Overview** - Translate the paragraph about the OpenClaw ecosystem
2. **Activity Comparison** - Translate the table
3. **OpenClaw's Position** - Translate the advantages table and technical approach differences
4. **Shared Technical Focus Areas** - Translate the table
5. **Differentiation Analysis** - Translate the table
6. **Community Momentum & Maturity** - Translate both tables
7. **Trend Signals** - Translate the table

Key considerations:
- Keep all code/formats/numbers as-is
- Use natural technical Chinese
- Preserve all markdown formatting
- Don't add any explanatory text
- Keep emojis as-is

Let me translate:</think>

# OpenClaw 生态跨项目对比报告

## 1. 生态概览

截至 2026 年 9 月的个人 AI 助手与自主代理开源领域呈现出**多个项目同步高速开发**的态势，其中五个追踪的项目中有四个显示每日 40-50+ 条 pull request 更新。生态系统的核心关注点集中在 **Gateway 可靠性、多代理编排、上下文管理以及平台稳定性**（尤其是 Windows 和桌面端 UI）。过去 24 小时内所有项目均未发布版本，表明当前处于集中开发阶段而非发布周期。这些项目从 **基准测试导向的评估工具（IronClaw）** 到 **全功能代理运行时（OpenClaw、Hermes Agent、ZeroClaw）** 再到 **以 UI/控制台为中心的平台（QwenPaw）**，反映了解决个人 AI 助手问题的不同技术路径。

---

## 2. 活动对比

| 项目 | Issue 更新（24h） | 开启/活跃 | 已关闭 | PR 更新（24h） | 开启 | 已合并/关闭 | 发布版本（24h） | 健康度指标 |
|---------|---------------------|-------------|--------|-------------------|------|---------------|----------------|-------------------|
| **OpenClaw** | 500 | 322 | 178 | 500 | 291 | 209 | 0 | 高迭代速度，活跃修复回归问题 |
| **Hermes Agent** | 50 | 38 | 12 | 50 | 46 | 4 | 0 | 中等，专注于桌面稳定性 |
| **IronClaw** | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 极简 — 仅基准测试/评估 |
| **QwenPaw** | 20 | 19 | 1 | 41 | 24 | 17 | 0 | 高 PR 合并率，功能驱动 |
| **ZeroClaw** | 50 | 41 | 9 | 50 | 44 | 6 | 0 | 高活跃度，RFC 驱动治理 |

---

## 3. OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **PR 数量** | **500**（最高） | 50 | 41 | 50 |
| **回归测试关注** | **是** — v2026.9.x 稳定性 | 中等 | 中等 | 高 |
| **发布周期** | 0（24h） | 0 | 0 | 0 |
| **社区参与** | 8 个金/钻 lobster issue | 4 个高严重度 bug | 1 个严重（插件） | 3 个活跃 RFC |
| **平台覆盖** | Windows、macOS、WebUI | 桌面端（Windows 为主） | 桌面端、Docker | 多平台守护进程 |

### 技术路径差异

- **OpenClaw** 优先保障 **Gateway 在大规模集群场景下的稳定性**（632 代理场景），处理 MCP 服务器超时问题，优化 WebUI 性能 — 反映企业级/生产部署需求。
- **Hermes Agent** 专注于 **桌面应用可靠性**（Windows 渲染、缩放问题）和 token 预算管理 — 反映终端用户桌面体验。
- **QwenPaw** 强调 **控制台 UI 和实时语音聊天** — 反映基于 Web 的交互模式。
- **ZeroClaw** 通过 **RFC 驱动治理** 运作，包含会话历史、可持久化原语、投递回执等架构提案 — 反映系统性工程规范。

### 社区规模

OpenClaw 在绝对活动量上领先（500 issue/PR），有多位金虾（🦐 gold shrimp）和钻 lobster（🦞）标记的活跃参与。Hermes Agent 社区讨论活跃（#88584 有 112 条评论）。ZeroClaw 通过 RFC 维持结构化治理。

---

## 4. 共同技术关注点

以下需求在**多个项目**中均有体现：

| 关注领域 | 涉及项目 | 具体需求 |
|------------|-------------------|---------------|
| **MCP 服务器可靠性** | OpenClaw、Hermes Agent、ZeroClaw | 超时处理、自动重连、OAuth token 刷新、突发容错 |
| **上下文/窗口管理** | OpenClaw、QwenPaw、ZeroClaw | Token 预算强制执行、上下文淘汰、压缩触发器 |
| **Windows/桌面稳定性** | Hermes Agent、QwenPaw、OpenClaw | 高 DPI 渲染、exec/read 工具、路径编码、生命周期探测 |
| **插件/扩展隔离** | QwenPaw、OpenClaw | 事件循环沙箱、同步 I/O 阻塞、子进程清理 |
| **语音/音频功能** | ZeroClaw、QwenPaw | STT 转录、镜像回复、投递回执 |
| **多代理协调** | OpenClaw、Hermes Agent | 子代理Spawn、委托、并行运行、会话状态 |

---

## 5. 差异化分析

| 项目 | 主要目标用户 | 核心差异点 | 架构特点 |
|---------|---------------------|---------------------|--------------|
| **OpenClaw** | 企业/集群运营商 | Gateway 横向扩展能力（数百代理）、MCP 集成 | Gateway 中心化、SQLite 持久化 |
| **Hermes Agent** | 桌面端高级用户 | Token 预算控制、桌面集成 | CLI 优先、Codex 依赖 |
| **IronClaw** | AI 研究人员/评估者 | 基准测试性能分类法 | 基准测试框架 |
| **QwenPaw** | Web 控制台用户、开发者 | 实时语音聊天、中心模型治理 | 基于 AgentScope、Web 控制台 |
| **ZeroClaw** | 自托管部署者 | RFC 治理、仅追加事件历史、Rust 运行时 | Rust 守护进程、ACP 协议 |

---

## 6. 社区活力与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|----------|-------------------|
| **快速迭代** | OpenClaw、ZeroClaw | 每日 40-50+ PR，处理多个回归问题，维护者燃烧率高 |
| **稳定开发** | Hermes Agent、QwenPaw | 40-50 PR，聚焦功能（桌面、语音），稳定的问题流 |
| **维护状态** | IronClaw | 极低活动量 — 仅基准测试工具 |

### 成熟度指标

- **OpenClaw**：v2026.9.x 高回归量表明快速功能迭代伴随质量权衡；活跃的 issue 生命周期表明社区响应迅速。
- **ZeroClaw**：RFC 驱动治理（#8692 追踪器）表明架构流程成熟；多个 S1/S2 bug 表明处于积极加固阶段。
- **Hermes Agent**：桌面端问题占主导，表明在 Windows 上有生产级采用；"stale" PR 标记表明清理工作正在进行。
- **QwenPaw**：高 PR 合并率（17/41）表明审核吞吐健康；语音聊天开发中表明处于功能扩展阶段。

---

## 7. 趋势信号

### AI 代理开发者需关注

| 趋势 | 证据 | 启示 |
|-------|----------|-------------|
| **Gateway 中心化架构** | OpenClaw、ZeroClaw 均强调守护进程/Gateway 可靠性 | 部署正在从单代理场景扩展 |
| **MCP 作为集成层** | 所有项目均讨论 MCP 服务器超时、OAuth、重连 | MCP 正在成为工具/扩展集成的事实标准 |
| **上下文预算强制执行** | Hermes Agent（1800万 token 事件）、ZeroClaw（压缩） | 成本控制是生产环境刚需 |
| **Windows/桌面作为主要目标** | Hermes Agent（渲染）、QwenPaw（exec/read）、OpenClaw（启动器） | 桌面自动化仍是核心用例 |
| **语音交互正在兴起** | ZeroClaw（Matrix 镜像、STT）、QwenPaw（实时语音） | 多模态输入正在获得投资 |
| **RFC 治理采用** | ZeroClaw（3 个活跃 RFC）、OpenClaw（伞状 issue） | 结构化设计流程随着项目成熟而出现 |
| **回归测试意识** | OpenClaw、Hermes 中多处提及 v2026.9.x 回归 | 快速发布周期需要更多测试覆盖 |

---

*报告基于 2026-09-18 项目摘录数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese. Let me analyze the content and translate it while preserving the structure and technical accuracy.

Key things to preserve:
- Markdown headings
- Tables with alignment
- Lists (bulleted and numbered)
- Bold/italic text
- URLs
- Issue/PR numbers (#12345)
- Code spans and blocks
- Numbers and dates
- Project names, repository slugs
- Emoji

I need to use natural technical Chinese - the register of a Chinese developer newsletter. Let me translate section by section.</think>

# Hermes Agent 项目摘要 — 2026-09-18

## 1. 今日概览

Hermes Agent 今日开发活动频繁，过去 24 小时内共有 50 个 issue 和 50 个 PR 更新。项目关闭了 12 个 issue，合并/关闭了 4 个 PR，表明 bug 修复和功能开发稳步推进。值得注意的是，**今日无新版本发布**。多个关键稳定性问题正在处理中，特别是 Windows 桌面渲染、MCP 服务器连接和 cron/kanban 可靠性方面。社区活跃度高，多个高评论量 issue 围绕 Nous 集成、桌面 UI 缺陷和认证处理展开。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

**今日合并/关闭的 PR：**

数据显示有 4 个 PR 处于合并/关闭状态。主要 PR 活动包括：

| PR | 类型 | 描述 |
|---|---|---|
| [#114534](https://github.com/NousResearch/hermes-agent/pull/114534) | 功能 | 会话中切换 `/reasoning` 现可保持 Claude 提示缓存温热（带内 effort 更新） |
| [#114535](https://github.com/NousResearch/hermes-agent/pull/114535) | 修复 | 桌面：WSL 中连接 Linux 网关时为计算机操作选择 Windows 主机 |
| [#114351](https://github.com/NousResearch/hermes-agent/pull/114351) | 修复 | 认证：在启动清单中识别 `model.provider openrouter` |
| [#113693](https://github.com/NousResearch/hermes-agent/pull/113693) | 修复 | 委托：避免在系统提示中重复子目标 |
| [#114532](https://github.com/NousResearch/hermes-agent/pull/114532) | 功能 | 为计算机操作接入 Jev 决策 + Playwright 浏览器后端 |
| [#114530](https://github.com/NousResearch/hermes-agent/pull/114530) | 功能 | 将独立 Microsoft 365 插件添加到插件目录 |
| [#94238](https://github.com/NousResearch/hermes-agent/pull/94238) | 修复 | 邮件：在字符串使用前强制转换 compat32 Header 对象 |
| [#114520](https://github.com/NousResearch/hermes-agent/pull/114520) | 安全 | 保险库：清理 vault 列表元数据中的 unicode TAG/bidi 字符 |
| [#91320](https://github.com/NousResearch/hermes-agent/pull/91320) | 功能 | MCP：为每个服务器配置 `reconnect_backoff` 以应对突发端点故障 |
| [#114416](https://github.com/NousResearch/hermes-agent/pull/114416) | 修复 | 网关：Webhook 202 前要求持久化 cron 准入 |

---

## 4. 社区热点

**按评论数排名的最活跃 Issue：**

| Issue | 评论数 | 主题 |
|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 112 | **自动化 Nous 集成受阻** — Cron 任务与 `cron/jobs.py` 冲突，仪表板更新器卡在最后的 Enterkey 测试版本 |
| [#106665](https://github.com/NousResearch/hermes-agent/issues/106665) | 16 | 桌面渲染/点击问题（125% 缩放及长时间使用后，Windows 11） |
| [#98503](https://github.com/NousResearch/hermes-agent/issues/98503) | 8 | 桌面澄清卡片从不渲染 — `clarify.request` 事件在传输路由中丢失 |
| [#34271](https://github.com/NousResearch/hermes-agent/issues/34271) | 7 (8 👍) | **提案**：将 Mnemosyne 纳入官方记忆提供程序文档 |
| [#103746](https://github.com/NousResearch/hermes-agent/issues/103746) | 6 | MCP 服务器成功连接后约 60-90 秒断开 — "复活" 逻辑出错 |
| [#113683](https://github.com/NousResearch/hermes-agent/issues/113683) | 6 | 每天更新 Linux 后端后 Windows GUI 停止工作 |

**分析：** 排名第一的 issue（#88584，112 条评论）表明 Nous 到 Enterkey 合并的定时任务存在重大运营痛点。桌面应用问题占据热点话题主导地位，Windows 缩放和渲染问题反复出现。Mnemosyne 文档提案表明社区对扩展记忆提供程序选项的需求强烈。

---

## 5. 缺陷与稳定性

**关键（P0-P1）缺陷：**

| Issue | 严重程度 | 状态 | 描述 |
|---|---|---|---|
| [#114456](https://github.com/NousResearch/hermes-agent/issues/114456) | P0 | 开放 | 异步委托完成通知在繁忙会话后停滞 — 等待队列在 `/stop` 后未排空，历史插入使提示缓存失效 |
| [#104303](https://github.com/NousResearch/hermes-agent/issues/104303) | P1 | 已关闭 | 提供商流失败时 ReadError 永久持有轮次租约 — 会话锁定 |
| [#109824](https://github.com/NousResearch/hermes-agent/issues/109824) | P1 | 已关闭 | 两个 WAL 稳定性 bug：cron 写入器每 30 分钟导致 inode 冲突；`_refresh_tools` 在会话为 None 时崩溃 |
| [#109902](https://github.com/NousResearch/hermes-agent/issues/109902) | P1 | 已关闭 | 自引用 `.env` 行每次重载后增长直到 E2BIG |

**高优先级（P2）缺陷：**

| Issue | 组件 | 描述 |
|---|---|---|
| [#103746](https://github.com/NousResearch/hermes-agent/issues/103746) | MCP | MCP 服务器成功连接后约 60-90 秒断开 — "复活" 逻辑出错 |
| [#114395](https://github.com/NousResearch/hermes-agent/issues/114395) | ACP | ACP 工具调用永远无法到达最终状态 — 保持 `in_progress` |
| [#114464](https://github.com/NousResearch/hermes-agent/issues/114464) | TTS/语音 | `hermes update` 安装 huggingface-hub 1.24.0，破坏 TTS/语音路径 |
| [#114501](https://github.com/NousResearch/hermes-agent/issues/114501) | 认证 | 凭证池轮换在实时会话中永不回退 — 持续使用付费备用方案 |
| [#113646](https://github.com/NousResearch/hermes-agent/issues/113646) | 桌面 | 无法压缩上下文，尽管桌面客户端未达到上下文上限 |

**可用的修复 PR：** 今日已合并多个缺陷修复 PR，包括邮件头强制转换（#94238）、计算机操作 Windows 主机选择（#114535）以及 kanban/cron 稳定性修复。

---

## 6. 功能请求与路线图信号

**活跃的功能请求：**

| Issue | 组件 | 描述 |
|---|---|---|
| [#91713](https://github.com/NousResearch/hermes-agent/issues/91713) | Agent | 功能：按会话累计 token 预算（超限中止或警告） |
| [#113850](https://github.com/NousResearch/hermes-agent/issues/113850) | Agent/插件 | 功能：Jev 作为计算机操作的车道 |
| [#114364](https://github.com/NousResearch/hermes-agent/issues/114364) | 插件 | 提案：通过插件市场运行 extracted-memory-provider 试点 |
| [#114477](https://github.com/NousResearch/hermes-agent/issues/114477) | CLI | 功能：操作员精选的模型列表，供选择器使用；提供商范围的家庭别名 |
| [#114524](https://github.com/NousResearch/hermes-agent/pull/114524) | 桌面 | **已合并**：按活跃网关过滤配置文件 |

**路线图信号：** Jev 与计算机操作的集成（#113850）正在积极开发中（见今日合并的 PR #114532），表明这是近期优先事项。按会话 token 预算功能（#91713）针对最近 5 小时内消耗 1870 万 token 的事件——这可能成为下一版本的稳定性重点功能。

---

## 7. 用户反馈摘要

**痛点：**

1. **桌面应用不稳定（Windows）** — 用户报告 125% 缩放、长时间使用后会话固定到顶部栏等问题，以及 Linux 后端更新后 GUI 崩溃。多条重复报告已提交（#106665、#106661、#95713）。

2. **MCP 服务器可靠性** — 外部 MCP 服务器在成功连接后 60-90 秒内持续断开，影响工作流。OAuth 问题加剧了回调端口冲突。

3. **Cron/Kanban 稳定性** — kanban 系统存在多个边缘情况：配额受限的重试无限循环；依赖项被错误分类为 `needs_input`；超时后僵尸 worker 未清理。

4. **Token/成本管理** — 最近一次事件 5 小时内消耗 1870 万 token；用户希望按会话设置 token 预算并支持中止/警告。

5. **插件安装** — `hermes plugins install` 在公共目录仓库上因 git 认证提示被禁用而失败。

**积极信号：** Mnemosyne 提案获得 8 个 👍 投票，表明社区对扩展记忆提供程序选项的需求。MCP 每个服务器的重新连接退避功能解决了托管 HTTP API 可靠性问题。

---

## 8. 待办事项关注

**需要维护者关注的 Issue：**

| Issue | 时长 | 优先级 | 状态 | 描述 |
|---|---|---|---|---|
| [#88584](https://github.com/NousResearch/hermes-agent/issues/88584) | 约 1 个月 | P3 | 开放 | 自动化 Nous 集成受阻 — 112 条评论，重大运营影响 |
| [#34271](https://github.com/NousResearch/hermes-agent/issues/34271) | 约 4 个月 | P3 | 开放 | Mnemosyne 文档提案 — 需要决策，8 个 👍 |
| [#103633](https://github.com/NousResearch/hermes-agent/issues/103633) | 约 2 周 | P2 | 开放 | MCP OAuth code→token 交换对 `/mcp` 路径的服务器失败 |
| [#114467](https://github.com/NousResearch/hermes-agent/issues/114467) | 1 天 | P3 | 开放 | Cron ticker 漂移：任务逐渐延迟触发（低严重性） |
| [#114495](https://github.com/NousResearch/hermes-agent/issues/114495) | 1 天 | P3 | 开放 | `hermes -p <profile> gateway <action>` 未在 `--help` 中记录 |

**陈旧 PR：** PR #113887 标记了 265 个可能陈旧/已取代的 PR，标题包含 "refactor" — 批量整理的机会。

---

*生成时间：2026-09-18 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest from English to Simplified Chinese. I need to:
1. Preserve all headings, structure, formatting
2. Keep URLs, issue numbers, usernames, project names unchanged
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me translate this carefully:

---

# IronClaw 项目摘要 — 2026-09-18

## 1. 今日概览

IronClaw 是 nearai 的 AI 智能体基准测试项目，在 2026 年 9 月 18 日显示活动较少。该项目在过去 24 小时内记录了 **1 个更新问题** 和 **零个拉取请求** 合并或关闭。未发布新版本。唯一活跃的问题涉及 officeqa 基准套件的每日失败分类分析，表明当前重点是性能评估而非active开发或错误修复。项目似乎处于维护/评估阶段，社区焦点在于基准测试和质量评估，而非新功能开发。

## 2. 版本发布

过去 24 小时内未发布新版本。该项目目前没有版本发布活动可报告。

## 3. 项目进展

过去 24 小时内没有拉取请求更新、合并或关闭。这代表了代码贡献或审查活动的相对停滞期。

## 4. 社区热点话题

**Issue #8101: 每日 ironclaw 失败分类 — 2026-09-17**
- **作者**: pranavraja99
- **创建/更新**: 2026-09-17
- **评论**: 0 | **反应**: 0


- **链接**: https://github.com/nearai/ironclaw/issues/8101

The issue documents the daily failure taxonomy analysis for the ironclaw benchmark on 2026-09-17. It focuses on the officeqa suite, which had 35 non-pass tasks, and the failures are described as primarily model-quality errors. The project maintains a systematic approach to tracking and categorizing AI agent performance issues across different model configurations, though there were no bug reports or stability issues in the past 24 hours.

The model-quality errors in the officeqa suite represent a performance evaluation rather than unexpected failures, and no fix pull requests were filed. There are also no explicit feature requests or roadmap signals, with current activity centered on benchmarking rather than new feature proposals.

No feature requests were filed in the past 24 hours, and the current activity focuses on benchmarking and performance evaluation rather than community-driven feature proposals. The roadmap signals remain unclear from today's data.

User feedback indicates the primary mechanism is systematic performance evaluation, with users actively running benchmarks, categorizing failure patterns, and tracking model-quality issues. The lack of comments suggests this may be an automated or internal process rather than community-driven feedback, with no direct pain points explicitly reported today.

Given the limited activity with only one issue in 24 hours, there are no clearly identifiable long-unanswered important Issues or PRs requiring maintainer attention. The project shows no signs of neglected community contributions or stalled reviews that would warrant urgent maintainer intervention.</think>

# IronClaw 项目摘要 — 2026-09-18

## 1. 今日概览

IronClaw 是 nearai 的 AI 智能体基准测试项目，在 2026 年 9 月 18 日显示活动较少。该项目在过去 24 小时内记录了 **1 个更新issue** 和 **零个 PR** 合并或关闭。未发布新版本。唯一活跃的 issue 涉及 officeqa 基准套件的每日失败分类分析，表明当前重点是性能评估而非新功能开发或缺陷修复。项目似乎处于维护/评估阶段，社区焦点在于基准测试和质量评估，而非新功能开发。

## 2. 版本发布

过去 24 小时内未发布新版本。该项目目前没有版本发布活动可报告。

## 3. 项目进展

过去 24 小时内没有 PR 更新、合并或关闭。这代表了代码贡献或审查活动的相对停滞期。

## 4. 社区热点话题

**Issue #8101: 每日 ironclaw 失败分类 — 2026-09-17**
- **作者**: pranavraja99
- **创建/更新**: 2026-09-17
- **评论**: 0 | **反应**: 0
- **链接**: https://github.com/nearai/ironclaw/issues/8101

**摘要**: 此 issue 记录了 2026-09-17 的 ironclaw 基准测试运行每日失败分类分析。分析聚焦于 **officeqa** 套件，该套件记录了 **35 个未通过任务**。根据 issue，这些失败被描述为"绝大多数是真正的模型质量问题"，特别提到了 DeepSeek-V4-Flash 在任务失败中的表现。这表明该项目对不同模型配置的 AI 智能体性能问题保持系统性跟踪和分类。

**潜在需求**: 社区当前关注：
- 持续进行基准性能监控
- 失败模式分类
- 模型质量评估与对比

## 5. 缺陷与稳定性

过去 24 小时内没有明确的缺陷报告或稳定性问题。然而，Issue #8101 间接突出了 officeqa 基准套件中的 **模型质量问题**，其中 35 个任务未通过。这表明可能存在智能体性能方面的潜在调查领域，尽管这些似乎是预期的评估结果而非意外崩溃或回归。今天没有关联的修复 PR。

## 6. 功能请求与路线图信号

过去 24 小时内没有明确的功能请求。当前活动以基准测试和性能评估为中心，而非新功能提案。从今天的数据来看，项目的路线图信号尚不明确，没有发起社区驱动的功能请求或路线图讨论。

## 7. 用户反馈摘要

基于今天的 issue 活动，主要用户反馈机制似乎是 **系统性性能评估**。失败分类 issue 表明用户/维护者正在积极：
- 针对不同模型配置运行基准测试
- 分类和分析失败模式
- 跟踪模型质量问题

Issue #8101 缺乏评论或反应，表明这可能是一个自动化或内部跟踪流程，而非社区驱动的反馈。今天没有明确报告直接的用户痛点、用例或满意/不满意信号。

## 8. 待办事项关注

鉴于活动有限（24 小时内仅 1 个 issue），从今天的数据本身来看，没有明显需要维护者关注的长期未答复的重要 Issue 或 PR。该项目没有显示需要紧急维护者干预的迹象。

---

*基于 2026-09-18 的 GitHub 数据生成*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the project digest to Simplified Chinese. I need to:
1. Translate all headings, body text, and table content
2. Preserve the Markdown structure exactly
3. Keep technical terms, URLs, issue numbers, code references as-is
4. Use natural technical Chinese register

Let me go through and translate while maintaining the structure:

Key translations to consider:
- "Project Digest" → 项目动态
- "Today's Overview" → 今日概览
- "Releases" → 版本发布
- "Project Progress" → 项目进展
- "Community Hot Topics" → 社区热点
- "Bugs & Stability" → BUG 与稳定性
- "Feature Requests & Roadmap Signals" → 功能需求与路线图信号
- "User Feedback Summary" → 用户反馈概要
- "Backlog Watch" → 待办关注

Let me translate the full content now.</think>

# QwenPaw 项目动态 — 2026-09-18

---

## 1. 今日概览

2026 年 9 月 18 日，QwenPaw 表现出**高度活跃**态势，过去 24 小时内共更新 20 个 Issue 和 41 个 PR。项目正在积极修复 Bug，同时推进语音聊天、上下文管理和控制台改进等功能。暂无新版本发布。Issue 讨论主要围绕 subAgent 超时、上下文窗口管理以及控制台 UI 稳定性展开——这表明用户正在生产环境中大量使用 2.2.x 版本。

---

## 2. 版本发布

过去 24 小时内**暂无新版本发布**。当前稳定版本仍为 **v2.2.1**（多个 Bug 报告中均有所引用）。

---

## 3. 项目进展

### 本日合并/关闭的 PR（共 17 个）

| PR | 标题 | 状态 |
|----|-----|------|
| [#7808](https://github.com/agentscope-ai/QwenPaw/pull/7808) | refactor(loop): pass DoomLoopStageConfig objects from catalog factory | 已合并 |
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | feat(hub): add model gateway, member governance and usage dashboard | 已合并 |
| [#7802](https://github.com/agentscope-ai/QwenPaw/pull/7802) | feat(telemetry): report daily Runtime activity on Agent execution | 已合并 |
| [#7751](https://github.com/agentscope-ai/QwenPaw/pull/7751) | fix(docker): align app Python runtime with desktop | 已合并 |

### 重要进展

- **Hub Model Gateway** (#7779)：管理员现可在 Hub 保管库中发布模型并保留供应商密钥；成员选择 Hub 模型时无需处理凭证。
- **遥测** (#7802)：每日 Agent 执行的 Runtime 活动报告现已支持，便于更好地分析使用情况。
- **Docker 运行时对齐** (#7751)：应用 Python 运行时现已使用与桌面相同的 Python 3.11 固定版本，解决了 OpenSSL 兼容性问题。

---

## 4. 社区热点

### 讨论最活跃的 Issue（按评论数排序）

1. **#7678** — **[Bug]: spawn subAgent**（10 条评论）  
   *用户报告的关键问题*：在 Windows 2.2.0 上，无论超时设置如何，SubAgent 任务都会超时失败。AI 辅助调查追踪正在积极进行中。  
   🔗 https://github.com/agentscope-ai/QwenPaw/issues/7678

2. **#6318** — **[Feature]: 支持对话级模型配置**（7 条评论）  
   用户希望实现按对话覆盖模型配置，而非仅在 Agent 级别绑定。涉及核心/后端组件。  
   🔗 https://github.com/agentscope-ai/QwenPaw/issues/6318

3. **#7815** — **控制台懒加载页面分块加载失败**（4 条评论）  
   懒加载页面出错后无法恢复，需强制刷新。  
   🔗 https://github.com/agentscope-ai/QwenPaw/issues/7815

4. **#7840** — **[Bug]: 插件共享宿主事件循环**（3 条评论）  
   任何插件中的同步 I/O 操作都会冻结整个实例约 40 秒——无隔离、无监控。在 2.2.0 和 2.2.1 上均可复现。  
   🔗 https://github.com/agentscope-ai/QwenPaw/issues/7840

### 深层需求

- **多 Agent 工作流的可靠性**：SubAgent 失败（#7678）和事件循环隔离（#7840）表明用户正在运行复杂的 Agent 管道。
- **灵活的模型配置**：对话级模型覆盖（#6318）反映了企业/团队使用场景。
- **控制台健壮性**：多个 UI 相关问题（#7815、#7812、#7841）表明 Web 控制台正被重度使用和压力测试。

---

## 5. BUG 与稳定性

### 报告的关键 Bug

| Issue | 严重程度 | 描述 | 修复 PR？ |
|-------|----------|------|----------|
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | **严重** | 插件同步 I/O 冻结整个实例（约 40 秒） | 无 |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | **严重** | SubAgent  spawn 导致全局超时失败 | 无 |
| [#7818](https://github.com/agentscope-ai/QwenPaw/issues/7818) | **高** | UI 冻结，内存占用高 | 无 |
| [#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) | **高** | 会话同步遗漏孤立文件；保留清除导致 DB 损坏 | 无 |
| [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | **中** | 滚动驱逐导致工具密集段落中的用户消息丢失 | 无 |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | **中** | 控制台流在收到空 `null` SSE payload 时冻结 | 无 |

### 进行中的相关修复 PR

- **#7835** — fix(memory): stop leaking auto-memory-recall payload to channels
- **#7831** — fix(console): stream background tool output on demand

---

## 6. 功能需求与路线图信号

### 重要的功能 PR

| PR | 功能 | 状态 |
|----|------|------|
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | **实时语音聊天** — 支持提供商的语音输入、播放、打断配置 | Open |
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | **对话级模型配置** | Open（Issue） |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | **Agent 自主上下文管理** — Agent 参与上下文驱逐决策 | Open |
| [#7685](https://github.com/agentscope-ai/QwenPaw/pull/7685) | **飞书可折叠推理面板** | Open |
| [#7830](https://github.com/agentscope-ai/QwenPaw/issues/7830) | **OS 桌面模式应用注册 API** | Open |

### 基于 Issue 和 PR 趋势预测的下一版本优先级

1. **SubAgent 可靠性** — 修复 spawn/超时问题
2. **插件沙箱化** — 第三方插件的事件循环隔离
3. **语音聊天** — 实时能力向合并推进
4. **上下文管理重构** — 对话级模型 + Agent 感知驱逐

---

## 7. 用户反馈概要

### 痛点

- **SubAgent 超时**：Windows 2.2.0/2.2.1 多名用户报告，即使延长超时时间，spawn 的 SubAgent 仍普遍失败。
- **上下文爆炸**：用户报告上下文窗口超出配置限制（设为 131K 却达到 271K），压缩未按预期触发（#7810）。
- **控制台 UI 不稳定**：懒加载失败导致用户卡住；后端就绪时机问题导致启动时出现空白面板（#7841）。
- **插件隔离**：同步插件操作冻结整个部署——这在生产环境中风险很大。

### 满意度信号

- **Hub 改进**（#7779）因治理和模型管理功能获得积极响应。
- **Docker 运行时对齐**（#7751）解决了长期存在的环境差异问题。
- **语音聊天**（#7785）作为一种新的交互模式引发关注。

---

## 8. 待办关注

### 长期未答复的重要 Issue

| Issue | 存在时间 | 优先级 | 状态 |
|-------|----------|--------|------|
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) — 对话级模型配置 | 59 天 | 高 | Open，7 条评论 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) — Reranker UI 配置面板 | 57 天 | 中 | 审核中 |

### 需要维护者关注的 PR

| PR | 标题 | 存在时间 | 状态 |
|----|------|----------|------|
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | Add reranker UI config panel to ReMeLightMemoryCard | 57 天 | 审核中 |
| [#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) | perf(scroll): avoid repeated history integrity scans | 10 天 | Open |
| [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) | QwenPaw-Data app 0.3.0 | 10 天 | 审核中 |

---

*基于 QwenPaw GitHub 数据生成 — 2026-09-18*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest to Simplified Chinese. Let me translate it while:
1. Keeping all Markdown structure exactly
2. Preserving all URLs, issue numbers, usernames, etc.
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation
5. Not using markdown fences around the output

Let me go through each section:

## Today's Overview
- Remove all unnecessary words
- Keep technical terms as-is
- Use Chinese punctuation

Let me translate section by section:</think>

# ZeroClaw 项目简报 — 2026-09-18

## 今日概览

ZeroClaw 保持高开发活跃度，**过去 24 小时内更新了 50 个 issue 和 50 个 PR**。项目正在积极解决安全性和稳定性问题，特别是围绕图片标记处理和内容验证。RFC 活动依然活跃，三个活跃的 RFC 正在推动关于会话事件历史、RFC 投票改革和智能体-人交互原语的架构讨论。过去 24 小时未发布新版本。维护团队（主要是 Audacity88）正在处理大量堆叠的 PR 和跨领域修复。

---

## 版本发布

过去 24 小时内未发布新版本。

---

## 项目进展

以下 PR 今日**已合并或关闭**：

| PR | 作者 | 描述 | 状态 |
|----|--------|-------------|--------|
| [#10618](https://github.com/zeroclaw-labs/zeroclaw/pull/10618) | Audacity88 | feat(maintainers): surface approval carry-forward candidates | CLOSED |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | JordanTheJet | [Bug]: Telegram media-group listener tests time out under repeated parallel runtime | CLOSED (duplicate) |
| [#10292](https://github.com/zeroclaw-labs/zeroclaw/issues/10292) | Audacity88 | [Bug]: ACP session tools cannot list or inspect Code sessions | CLOSED |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | izelnakri | [Bug]: validate and document the nix run installation path | CLOSED |

**推进中的活跃 PR（重要特性）：**

- **#10621** — *feat(runtime): coordinate agent lifecycle mutations* — 将 daemon RPC、gateway、channels 和 CLI 的状态变更统一到共享的 live-config 权威之下（规模：XL，需要维护者审查）
- **#8966** — *feat(agent): carry live provider identity on usage events* — 从服务提供者解析上下文窗口（规模：XL，需要维护者审查）
- **#10351** — *feat(runtime): enforce execution-tree iteration budgets* — 添加 `max_execution_tree_iterations` 所有权控制（规模：XL）
- **#10811** — *fix(tools): preserve Windows PowerShell analysis cache* — 修复 Windows 上的模块发现环境断言（规模：M）
- **#10860** — *fix(providers): keep non-image data-URI markers in tool results as text* — 防止非图片 data-URI 被错误处理为图片

---

## 社区热点

按评论数排序的最活跃 issue：

| Issue | 标题 | 评论数 | 链接 |
|-------|-------|----------|------|
| #8692 | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #10549 | RFC: Simplify RFC voting by removing mandatory discussion windows | 12 | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) |
| #10526 | RFC: Append-only session event history, deterministic state replay | 11 | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) |
| #4853 | [Feature]: install skills from .well-known agent-skills discovery indexes | 7 | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) |
| #9899 | [Tracker]: triage and remove bitmaps unmaintained advisory waiver (RUSTSEC-2026-0247) | 5 | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |

**分析：** RFC 队列 (#8692) 是核心协调中心，维护者正在积极处理设计问题。RFC #10549 提议通过取消强制讨论窗口来简化投票流程——这一治理改进有望加速决策。RFC #10526 解决了一个根本性的架构需求：将分散在 TurnEvents、日志、工具收据和进程本地状态中的会话状态统一为追加写事件历史模型。

---

## Bug 与稳定性

**高优先级 Bug 报告：**

| Issue | 标题 | 严重程度 | 状态 | 修复 PR |
|-------|-------|----------|--------|--------|
| #10854 | [Bug]: Literal image marker in tool output is promoted into malformed provider image | S1 - 流程阻塞 | 进行中 | — |
| #10912 | [Bug]: Streaming text guard suppresses whole replies when prose quotes a tool-result-shaped object | S2 - 降级 | 进行中 | — |
| #10408 | [Bug]: second message during an active turn starts a parallel run → duplicate work | S2 - 降级 | 进行中 | — |
| #10889 | [Bug]: native Anthropic provider drops rolling cache breakpoint when last message ends with image block | S2 - 降级 | 已接受 | — |
| #10908 | [Bug]: Image markers in tool-result text are promoted to attachments without provenance | S2 - 降级 | 已接受 | — |
| #9882 | Image markers bypass content validation on the run_model_query direct-dispatch seam | S2 - 降级 | 进行中 | — |

**测试稳定性问题：**

- **#10875** — Telegram media-group 测试在不相关的 PR 上间歇性失败（Parallel Runtime Test）——*优先级：p1，进行中*
- **#10805** — control_plane 存活测试在 Windows 上与进程拆除竞争——*优先级：p2，进行中*

**注意：** 多个 Bug 涉及图片标记解析（#10854、#10908、#9882、#10860），表明这一系统领域需要加强。#10860 中的修复（已合并）解决了 data-URI 验证问题，但更广泛的照片标记处理栈仍需关注。

---

## 特性请求与路线图信号

| Issue | 标题 | 优先级 | 状态 |
|-------|-------|----------|--------|
| #10930 | RFC: One durable primitive for questions an agent asks a human | — | open |
| #10929 | RFC: Delivery receipts for outbound messages | — | open |
| #10932 | [Feature]: Surface voice-note transcript to user (STT echo) | p2 | 已接受 |
| #10925 | [Feature]: Support input-driven mirror voice replies on Matrix | p2 | 已接受 |
| #10926 | [Bug/Feature]: Matrix send_via treats peer user identities as room destinations | p2 | open |
| #8766 | [Feature]: Add user-behavior E2E coverage for first-run setup | p1 | 进行中 |
| #10780 | Restore proactive token-budget context compaction | p1 | 进行中 |
| #10546 | Extract cron into a dedicated zeroclaw-cron crate | p2 | 进行中 |

**信号：** 语音/音频功能正在获得关注（Matrix 镜像回复、STT 回显、送达回执）。关于持久原语（#10930）和送达回执（#10929）的 RFC 表明正在成熟地关注智能体到人交互的可靠性。上下文压缩（#10780）解决了 v0.8.5 中的已知回归问题。

---

## 用户反馈摘要

从 issue 讨论中观察到的实际痛点：

1. **重复智能体运行**：Issue #10408 报告用户在活动回合中发送第二条消息时遇到重复工作和重复回复——*直接用户体验降级*。
2. **Nix 安装路径困惑**：Issue #5269（现已关闭）指出 `cargo binstall zeroclaw` 文档缺失——用户 onboarding 摩擦。
3. **语音转录不可见**：用户无法看到语音消息的 STT 转录，无法检测语音识别错误（#10932）。
4. **图片标记误报**：工具输出文本中包含 `[IMAGE:...]` 形状的字符串被错误处理为实际图片，导致格式错误的提供者请求（#10854、#10908）。
5. **Telegram 测试不稳定**：在不相关 PR 上的间歇性 CI 失败（#10875）让贡献者沮丧并阻塞合并。

---

## 待办关注

需要维护者关注的重要 issue：

| Issue | 标题 | 存在时间 | 状态 |
|-------|-------|-----|--------|
| #4853 | [Feature]: install skills from .well-known agent-skills discovery indexes | ~6 个月 | 进行中 |
| #9511 | [Feature]: Surface diff-aware Semgrep findings as an advisory PR comment | ~2 个月 | 已接受，暂存 |
| #9708 | bug(daemon): bound service launcher stdout and stderr logs | ~1.5 个月 | 进行中 |
| #9899 | [Tracker]: triage and remove bitmaps unmaintained advisory waiver | ~1 个月 | open |
| #10546 | Extract cron into a dedicated zeroclaw-cron crate | ~2 周 | 进行中 |
| #10780 | Restore proactive token-budget context compaction | ~1 周 | 进行中，需要维护者审查 |

**观察：** 多个高优先级项目（#4853、#9511、#9708）已进行较长时间。安全咨询跟踪（#9899）保持开放，存在 CI 风险。上下文压缩（#10780）一周后标记为需要维护者审查——等待架构决策。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*