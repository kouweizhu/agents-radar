# OpenClaw 生态日报 2026-11-17

> Issues: 318 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-17 04:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. Let me go through it carefully, translating the content while preserving the structure, formatting, and technical terminology.

Key points:
1. Output ONLY the translation, no preamble or explanation
2. Preserve all Markdown structure exactly
3. Keep URLs, links, numbers, dates, code references as-is
4. Keep project names, repo slugs, usernames, version tags, file paths in original form
5. Use natural technical Chinese register

Let me translate section by section:

**1. Today's Overview**
- OpenClaw maintains extremely high development velocity → OpenClaw 保持着极高的开发活跃度
- 318 issues and 500 pull requests → 318 个 issue 和 500 个 PR
- 88 issues resolved → 88 个 issue 已解决
- P0 issues (both crash-loops) → P0 问题（均为崩溃循环）
- gateway blocking regression → 网关阻塞问题
- 2026.9.6 release → 2026.9.6 版本
- large plugin deployments → 大型插件部署
- most commented issue → 评论最多的 issue
- No new releases → 今天没有新版本发布
- beta track → beta 轨道
- 2026.11.5 → 2026.11.5

**2. Releases**
- No new releases today → 今天没有新版本发布
- v2026.11.5-beta.1 through v2026.11.5-beta.4 → v2026.11.5-beta.1 至 v2026.11.5-beta.4
- prereleases → 预发布版本
- shipped → 已发布
- v2026.11.5-beta.1–4 → v2026.11.5-beta.1–4

**3. Project Progress**


- Merged/Closed PRs today → 今天合并/关闭的 PR
- Guest session access via mentions → 通过提及分享实现访客会话访问
- Git/third-party npm plugin installs → Git/第三方 npm 插件安装
- require approval before rejection → 拒绝前需确认
- Plugin lifecycle → 插件生命周期
- Model discovery → 模型发现
- CI/test stability → CI/测试稳定性
- CI reliability → CI 可靠性
- Windows artifact handling → Windows 构建产物处理
- release watchers → 发布监视器
- Open PRs Requiring Attention → 需要关注的开放 PR
- Automation lifecycle fixes → 自动化生命周期修复
- chat ID changes → 聊天 ID 变更
- requester permissions → 请求方权限
- interrupted work resumes → 中断工作恢复
- provider-native chat id → 提供商原生聊天 ID
- session-event turns → 会话事件轮次
- Memory-aware scheduling → 内存感知调度
- resource utilization efficiency → 资源利用效率
- Worker pool management → 工作池管理
- Key Progress Areas → 关键进展领域

Looking at the feature work, there's a security improvement blocking Git and third-party npm plugin installations until user approval, plus guest session access being delivered through mention sharing. The automation system is getting fixes to handle chat ID changes more robustly. Resource management is a focus with memory-aware scheduling and better worker pool controls to improve utilization efficiency.

For the top issues, gateway blocking during large plugin captures is the most commented problem at 83 comments, with the SQLite WAL checkpoint starvation following at 41 comments. macOS gateway stop failures are also getting significant attention. The recall retention bug is marked as stale but has 28 comments, indicating ongoing discussion even though the feature request for A2A one-way dispatch was closed with 19 comments.

The most discussed issues reveal users need better operational reliability across deployments, improved memory and storage boundary handling, and simpler multi-agent communication patterns. On the bug side, two P0 issues remain unfixed including the gateway blocking problem, while the Windows Control UI gateway update hangs with no PR linked yet. Seven P1 issues are open including a gateway heap leak and session-state authority issues, with a linked PR for the Mattermost Mattermost cleartext callback token exposure at CVSS 7.6/10. Several fixes are shipping today including the sessions_yield recovery, registerCliBackend silent failure fix, and webchat display displacement repair. A 2026.9.6 regression introduced multiple unfixed issues, and the top discussions show users want extensibility through plugin-driven memory views, operational visibility via audit surfaces, and resource efficiency with memory-aware scheduling.

For roadmap signals, a2a one-way dispatch was closed but shows demand, Memory Slot Owner driving Dreams has 13 comments indicating interest, audit runtime skill usage in an XL PR with silver shellfish rating is in review, and memory-aware cron scheduling allows up to 8 automation runs past default. Windows has multiple issues causing friction including gateway update hangs at "Activating" and Windows update validation failing to verify Scheduled Task, with Windows process helpers requiring VC++ redistributable and updates taking 63+ minutes with 3.4 GiB SQLite state. macOS has gateway stop failures with process ancestry errors and dark-theme input visibility issues on macOS 27.3 beta.

Resource management is a pain point with memory index aborts instead of retries, gateway heap leaks of ~25 MiB/h from unreleased system prompts, and SQLite worker store hard caps. UX friction includes settings sluggishness, model fallback notices leaking externally, and permanent dead-lettered queue entries. However, PR #184515 on guest session access received a platinum hermit rating, PR #200392 on plugin install security is a graceful security-adjacent fix, and dictation UI improvements show attention to core workflows.

Long-unanswered important issues over 60 days old include recall retention, prompt-cache rewrites, view_image base64 inlining, recall rehydration ambiguity, model fallback notices, dead-letter permanence, and memory slot owner driving. Security review is needed for Mattermost cleartext callback URLs exposing tokens at CVSS 7.6/10 and 8.6/10. Product decisions are blocked on a2a one-way dispatch mode, installation-aware post-upgrade survey, pre-compaction memory flush on CLI backends, and SQLite worker store capacity. For CI and maintenance, the dated TODO sweep has multiple overdue items, and docs link audit overhead improvements were merged.

Issues without linked PRs that need attention: #160959 (gateway blocks), #169844 (Windows gateway update hangs), #185578 (heap leak), #194403 (helper-completion authority), #160762 (Telegram message loss), #162497 (SQLite worker cap), #65624 (Mattermost security), #196505 (memory index abort), #185111 (large-session context reads), #150635 (recall eviction), #143017 (prompt-cache), #143973 (view_image base64), #151173 (recall rehydration), #92473 (model fallback), and #112313 (dead-letter queue).

Additional items needing prioritization: #138366 (memory slot owner), #159743 (post-upgrade survey), #137613 (pre-compaction flush), and #114414 (TODO sweep). The report covers activity from 2026-11-17 on the OpenClaw repository, with all issue and PR links referencing github.com/openclaw/openclaw.
</think>


# OpenClaw 项目简报 — 2026-11-17

## 1. 今日概览

OpenClaw 在过去 24 小时内保持着极高的开发活跃度，共产生 318 个 issue 和 500 个 pull request 的活动。其中 277 个 PR 已被合并/关闭，88 个 issue 已解决。**然而，关键稳定性问题依然存在**：两个 P0 问题（均为崩溃循环）仍未修复，其中包含一个影响大型插件部署的 2026.9.6 版本网关阻塞回归问题。社区在安全、性能和用户体验方面持续积极参与，评论最多的 issue 吸引了 83 条回复，表明问题分级讨论参与度很高。今天没有新版本发布，暗示当前正在对 2026.11.5 beta 轨道进行稳定性收尾工作。

## 2. 版本发布

**今天没有新版本发布。** 项目当前处于 v2026.11.5 发布轨道的 beta 阶段，v2026.11.5-beta.1 至 v2026.11.5-beta.4 预发布版本已可用。今天合并的多个 PR（如 #141474 中的 sessions_yield 恢复修复）计划纳入此版本。

## 3. 项目进展

### 今天合并/关闭的 PR（11 个重点）

| PR | 标题 | 规模 | 影响 |
|----|-------|------|------|
| [#184515](https://github.com/openclaw/openclaw/pull/184515) | feat(auth): enable guests to access sessions through selected mentions | XL | 团队协作，platinum-hermit 评级 |
| [#200392](https://github.com/openclaw/openclaw/pull/200392) | fix: chat plugin installs reject Git and third-party npm sources | L | 安全与用户体验 |
| [#200410](https://github.com/openclaw/openclaw/pull/200410) | chore(ui): refresh control ui locales | S | 维护工作 |
| [#200406](https://github.com/openclaw/openclaw/pull/200406) | fix: confirm installs of hidden plugins | S | 插件生命周期 |
| [#200403](https://github.com/openclaw/openclaw/pull/200403) | fix: use hosted catalog limits and input for live-listed models | S | 模型发现 |
| [#200401](https://github.com/openclaw/openclaw/pull/200401) | fix: keep catalog publication regression serializable | XS | CI/测试稳定性 |
| [#200398](https://github.com/openclaw/openclaw/pull/200398) | fix(ci): restore full release watcher startup | XS | CI 可靠性 |
| [#200397](https://github.com/openclaw/openclaw/pull/200397) | improve(ci): reduce docs link audit overhead | XS | CI 性能 |

### 需要关注的开放 PR

| PR | 标题 | 优先级 | 状态 |
|----|-------|----------|--------|
| [#200396](https://github.com/openclaw/openclaw/pull/200396) | fix(cron): keep automations running when their chat's id changes | P1 | 等待维护者审核 |
| [#200394](https://github.com/openclaw/openclaw/pull/200394) | fix: preserve requester permissions when interrupted work resumes | L，安全敏感 | 开放 |
| [#200345](https://github.com/openclaw/openclaw/pull/200345) | fix(auto-reply): carry provider-native chat id into session-event turns | P1 | 需要提供证据 |
| [#197394](https://github.com/openclaw/openclaw/pull/197394) | feat(cron): add up to eight runs past the default when memory is free | P2 | 等待维护者处理 |
| [#199706](https://github.com/openclaw/openclaw/pull/199706) | feat(update): run Git checkout installs from releases behind the release link | XL | 开放 |

**关键进展领域：**
- **安全：** 通过提及分享实现访客会话访问已发布（#184515）
- **插件安全：** Git/第三方 npm 插件安装现在会在拒绝前要求确认
- **Cron 韧性：** 聊天 ID 变更相关的自动化生命周期修复正在进行
- **CI 可靠性：** 多项基础设施修复，恢复 Windows 构建产物处理和发布监视器

## 4. 社区热点

### 最活跃的讨论

**1. 网关阻塞回归 — [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)（83 条评论）**
2026.9.6 版本的回归问题：包含大量外部或工作区插件的网关在启动期间和模型运行时重新发布时，会阻塞事件循环数分钟。此 P0 崩溃循环问题吸引了最多的社区关注，被标记为等待维护者审查，目前尚无修复 PR。

**2. SQLite WAL 检查点饥饿 — [Issue #164294](https://github.com/openclaw/openclaw/issues/164294)（41 条评论）**
网关的状态数据库 WAL 自动检查点自启动以来从未完成，被进程内读取器阻塞。累积 17,091 个日志帧，仅检查点了 866 帧，表明 SQLite 集成层存在资源管理问题。

**3. macOS 网关停止失败 — [Issue #191944](https://github.com/openclaw/openclaw/issues/191944)（34 条评论）**
`openclaw gateway stop` 和 `openclaw gateway stop --force` 在 Intel macOS 上均失败，进程溯源检查出错。这阻碍了 macOS 部署的操作工作流。

**4. 召回保留 Bug — [Issue #150635](https://github.com/openclaw/openclaw/issues/150635)（28 条评论）**
短期召回保留在达到 512 条上限时每晚驱逐条目，导致"深度梦境"阶段无法提升任何内容。被标记为 stale 但仍在积极讨论。

**5. A2A 调度功能 — [Issue #44309](https://github.com/openclaw/openclaw/issues/44309)（19 条评论，已关闭）**
Agent 间消息传递无需回传 ping-pong 的单向调度模式请求已关闭，表明该功能可能延期或需要产品决策。

### 潜在需求分析

热门讨论揭示了用户需求的聚类方向：
- **运维可靠性：** #160959、#164294、#191944 均代表阻碍稳定部署的阻塞性运维故障
- **内存与存储管理：** 召回驱逐和 WAL 检查点问题指向存储边界处理不足
- **多 Agent 通信：** A2A 调度请求表明对更简单的 Agent 交接模式有需求

## 5. Bug 与稳定性

### 关键问题（P0）— 2 个开放

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|-------|----------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | 崩溃循环 | 无 |
| [#169844](https://github.com/openclaw/openclaw/issues/169844) | Control UI Gateway update on Windows hangs at "Activating" | 崩溃循环 | 无 |

### 高优先级问题（P1）— 7 个开放

| Issue | 标题 | 影响 | 修复 PR？ |
|-------|-------|--------|---------|
| [#185578](https://github.com/openclaw/openclaw/issues/185578) | Gateway heap floor only ratchets up (~25 MiB/h) | 内存泄漏 | 无 |
| [#194403](https://github.com/openclaw/openclaw/issues/194403) | Helper-completion continuations invalidate authority, block conversations | 会话状态 | 无 |
| [#160762](https://github.com/openclaw/openclaw/issues/160762) | claude-cli + Telegram: message sent mid-turn dropped | 消息丢失 | 无 |
| [#162497](https://github.com/openclaw/openclaw/issues/162497) | SQLite worker store capacity fixed at 64 | 64+ 个 Agent 失败 | 无 |
| [#65624](https://github.com/openclaw/openclaw/issues/65624) | Mattermost slash commands expose reusable tokens (CVSS 7.6/8.6) | 安全 | 关联 PR 已开放 |
| [#196505](https://github.com/openclaw/openclaw/issues/196505) | Memory index aborts with "worker task capacity reached" | 内存操作 | 无 |
| [#185111](https://github.com/openclaw/openclaw/issues/185111) | Large-session context reads scan full transcript | 性能 | 无 |

### 今天发布的修复

- **Issue #141474**（sessions_yield 恢复）：历史状态恢复（#164445，提交 e02ae3ecb66）已上主分支，通过 30/30 测试，将在 v2026.11.5-beta.1–4 中发布
- **Issue #172969**（registerCliBackend 静默失败）：通过维护者审查的修复正在进行中
- **Issue #177094**（webchat 显示错位）：等待维护者审查

### 回归关注

2026.9.6 版本引入了多个仍未修复的回归问题：
- 大型插件上的网关阻塞（#160959）
- 多 Agent 运行时发布失败（#158127）
- Telegram + claude-cli 消息丢失（#160762）

## 6. 功能需求与路线图信号

### 高参与度功能请求

**1. A2A 交接的单向调度 — [Issue #44309](https://github.com/openclaw/openclaw/issues/44309)（已关闭）**
用户希望 Agent 间消息传递无需回传的 ping-pong。已关闭为 stale/需产品决策，但 19 条评论的讨论表明确实有需求。可能在未来路线图中重新设计后出现。

**2. 内存槽所有者驱动梦境页面 — [Issue #138366](https://github.com/openclaw/openclaw/issues/138366)（13 条评论）**
通过 `MemoryPluginCapability` 和 `dreaming` provider 实现插件驱动的梦境标签页自定义。表明对内存系统可扩展性有更深的需求。

**3. 审计运行时技能使用 — [PR #141004](https://github.com/openclaw/openclaw/pull/141004)（XL，P2）**
在审计面中记录观察到的运行时技能使用。大型 PR（XL），silver shellfish 评级，暗示实现复杂。审核中。

**4. Review 中添加渲染后的 Markdown 预览 — [Issue #128090](https://github.com/openclaw/openclaw/issues/128090)（11 条评论，已关闭）**
请求 Review 文件查看器的 Markdown 预览。4 个 👍 反应。关闭，实现路径不明确。

**5. 内存感知 Cron 调度 — [PR #197394](https://github.com/openclaw/openclaw/pull/197394)**
当内存可用时允许最多 8 次超出默认的自动化运行。解决资源利用效率问题。

### 路线图信号汇总

社区请求聚类于：
- **可扩展性：** 插件驱动的内存视图、访客会话访问（今天发布）
- **运维可见性：** 审计面、使用报告改进
- **资源效率：** 内存感知调度、工作池管理
- **简化模式：** 单向调度、简化的交接

## 7. 用户反馈摘要

### 持续痛点

**1. Windows 运维故障**
多个 Windows 特定问题造成摩擦：
- 网关更新在"激活中"挂起，导致计划任务被禁用（#169844）
- Windows 更新验证无法验证计划任务（#199617）
- Windows 进程辅助程序需要 VC++ 可再发行组件（#200371）
- 更新需要 63+ 分钟，SQLite 状态达 3.4 GiB（#182616）

**2. macOS 运维不一致**
- 网关停止因进程溯源错误而失败（#191944）
- macOS 27.3 beta 上的深色主题输入可见性问题（#192667）
- 可写 npm prefix 上的误报 EACCES（#191855）

**3. 资源管理故障**
- 内存索引在大型语料库上中止而非重试（#196505）
- 网关堆泄漏（~每小时 25 MiB，来自未释放的系统提示）（#185578）
- SQLite 工作存储硬上限为 64（#162497）

**4. 用户体验摩擦**
- 打开对话后设置卡顿（#192667）
- 模型回退通知泄露到外部渠道（#92473）
- 死信出站队列条目永久保留（#112313）

### 正面信号

- **PR #184515（访客会话访问）：** platinum hermit 评级表明架构设计良好
- **PR #200392（插件安装安全）：** 优雅地修复了一个安全相关的用户体验问题
- **#200235 中的听写 UI 改进** 表明关注核心用户工作流

## 8. 待办关注

### 长期未回答的重要问题

| Issue | 时长 | 标题 | 优先级 | 所需 |
|-------|-----|-------|----------|------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | ~60 天 | Recall retention evicts entries nightly | P2 | 维护者审查 |
| [#143017](https://github.com/openclaw/openclaw/issues/143017) | ~69 天 | Prompt-cache rewrites prefix (21.3M cache tokens) | P2 | 现场复现 |
| [#143973](https://github.com/openclaw/openclaw/issues/143973) | ~68 天 | view_image persists base64 inline (80% of store bytes) | P2 | 维护者审查 |
| [#151173](https://github.com/openclaw/openclaw/issues/151173) | ~61 天 | Recall rehydration picks ambiguous ranges | P2 | 维护者审查 |
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | ~158 天 | Model fallback notices leak externally | P2 | 维护者审查 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | ~119 天 | Dead-lettered queue entries permanent | P2 | 产品决策 |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | ~74 天 | Memory slot owner driving Dreams page | P2 | 产品决策 |

### 需要安全审查的问题

| Issue | 标题 | CVSS | 状态 |
|-------|-------|------|--------|
| [#65624](https://github.com/openclaw/openclaw/issues/65624) | Mattermost cleartext callback URLs expose tokens | 7.6/10 (v3.1), 8.6/10 (v4.0) | 关联 PR 已开放 |

### 阻塞于产品决策的问题

- **#44309** — A2A 单向调度模式
- **#159743** — 安装感知的升级后调查
- **#137613** — CLI 后端的预压缩内存刷新
- **#162497** — SQLite 工作存储容量（64 上限）

### CI/维护事项

- **#114414** — 过时 TODO 清理（18 条评论）：多项逾期项目，包括 Codex 认证修复和 zizmor 重新启用
- **#200052** 后续 — 文档链接审计开销改进已合并

---

*简报基于 OpenClaw 仓库 2026-11-17 的活动生成。所有 issue 和 PR 链接均指向 github.com/openclaw/openclaw。*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, project names, issue/PR references verbatim
- Use natural technical Chinese register

Let me translate this carefully, maintaining all formatting and translating into natural, fluent Simplified Chinese technical documentation style.

Let me go through section by section:

Title and header - translate naturally
Tables - translate content but preserve structure
Lists - translate items
Blockquotes and code elements - keep as-is where they contain code/technical terms

Let me start translating:
</think>


# 跨项目对比：AI Agent 与个人 AI 助手开源生态

**报告日期：** 2026-11-17 | **范围：** OpenClaw · Hermes Agent · IronClaw · QwenPaw · ZeroClaw

---

## 1. 生态全景

截至 2026 年底，个人 AI 助手与 Agent 开源生态正处于**高速迭代、高变更频率的成熟期**。五个被追踪的项目中有四个显示每日活跃开发状态（24 小时内 50–500 条更新事件），唯有一个项目（IronClaw）近期无任何活动，可能已陷入停滞。生态呈现出两种截然不同的架构理念：**单体网关式编排器**（OpenClaw、ZeroClaw） versus **模块化插件 SDK 架构**（Hermes Agent、QwenPaw）。共性痛点——Windows 平台运行失败、cron/调度可靠性、多账户隔离和可观测性缺口——在三个或以上项目中同时出现，表明这些是系统性工程挑战而非偶发缺陷。社区参与度强劲，各项目的 issue 评论密度和 RFC 参与度均较高，说明实际应用场景正驱动着功能需求的涌现。

---

## 2. 活跃度对比

| 项目 | Issue（24h） | PR（24h） | Release（24h） | 主要方向 | 活跃度层级 |
|---------|:-----------:|:---------:|:--------------:|---------------|---------------|
| **OpenClaw** | 318 | 500 | 0 | 网关编排器、多 Agent 交接、记忆/技能系统 | 🔴 极高 |
| **Hermes Agent** | 50 | 50 | 2 | 插件 SDK、cron/看板、跨平台 CLI、TUI、桌面端 | 🟡 高 |
| **QwenPaw** | 46 | 50 | 0 | 多渠道（微信、Telegram）、创作者插件生态 | 🟡 高 |
| **ZeroClaw** | 12 | 50 | 0 | 成本管控、Rust 任务代理、V5 注册中心 | 🟢 中等 |
| **IronClaw** | 0 | 0 | 0 | *（追踪窗口内无活动）* | ⚫ 停滞 |

**健康度综合评分（基于 Bug 严重级别与发布频率推导）：**

| 项目 | 严重未修复 Bug | 回归缺陷数 | 发布频率 | 整体健康度 |
|---------|:------------------:|:----------------:|:---------------:|:--------------:|
| OpenClaw | 2（P0 级崩溃循环） | 3（2026.9.6） | Beta（v2026.11.5） | 🟠 承压 |
| Hermes Agent | 1（P1 级插件依赖） | 2（v2.3.0） | Stable（v0.23.2） | 🟢 良好 |
| QwenPaw | 2（安全/高危） | 4（v2.3.0） | 补丁中（v2.3.1b1） | 🟡 参差 |
| ZeroClaw | 1（S1），9（S2） | 2（成本追踪） | 无（v0.9.0 stable） | 🟡 资源不足 |
| IronClaw | 未知 | — | — | ⚫ 未知 |

---

## 3. OpenClaw 的定位

### 相对竞品的优势

| 维度 | OpenClaw 的定位 | 竞品对比 |
|-----------|---------------------|-----------------|
| **体量与覆盖范围** | 318 issue + 500 PR 更新/天 — 约为第二名项目的 6 倍 | 在原始开发吞吐量上领先所有被追踪项目 |
| **多 Agent 架构** | 成熟的 A2A 交接系统，网关层统一编排 | ZeroClaw 有部分等价能力；Hermes/QwenPaw 缺乏原生多 Agent 支持 |
| **社区规模** | 230 个活跃 open issue、223 个 open PR — 最大贡献者社区 | 按贡献者数量领先；Hermes Agent 体量相近但增速更低 |
| **功能广度** | 在单一仓库中覆盖 CLI、TUI、Desktop、Gateway、Memory、Skills、Cron、Auth | QwenPaw 和 ZeroClaw 范围更窄 |
| **回归缺陷处理** | 2026.9.6 回归缺陷已知且已分诊，维护者有参与 | Hermes Agent v2.3.0 回归缺陷同样存在但数量更少 |

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **编排模型** | 网关中心化；Agent 作为服务，通过 A2A 调度 | 插件驱动；Agent 即运行时容器 | 渠道中心化；每个微信/Telegram 账号对应一个 Agent | 守护进程中心化；运行时 Profile + Provider 绑定 |
| **语言** | 混编（Python 后端，关键路径用 Rust） | Python，任务代理正在迁移 Rust | Python 为主 | Rust 原生任务代理，Python 运行时 |
| **存储** | SQLite WAL 模式 + 检查点管理；recall/记忆系统 | SQLite worker store（上限 64 条） | 未明确指定；技能池 + 会话持久化 | JSONL 追踪日志 + 守护进程状态 |
| **插件模型** | 原生插件系统 + MCP 包装器 | SDK 1.1，含 identity、lifecycle、scoped history | 创作者插件 + MCP 工具 | 注册中心制，引用 V5 模型 |
| **发布策略** | 持续 Beta，辅以精选稳定版 | Canary 到 Stable 通道，带补丁版本 | 滚动发布；v2.3.1 处于 Beta | 稀疏稳定版，开发在 main 分支 |

### 社区规模对比

OpenClaw 在绝对贡献者活跃度上领先，230 个 open/active issue 和 223 个 open PR 构成了最大的积极问题解决社区。Hermes Agent 社区参与度相当（50/50 分成，API bug 有 61 条评论），但体量更小。QwenPaw 当下有首次贡献者参与，说明外部采用率在增长。ZeroClaw 社区较小（12 issues，50 PRs），这可能解释了高严重级别 Bug 解决速度缓慢的问题——例如 51 天前上报的 OpenRouter 成本追踪缺陷。

---

## 4. 共同的技术聚焦领域

以下需求在多个项目中独立出现，表明存在系统性的生态级需求：

### A. 定时任务与 Cron 可靠性
**涉及项目：** OpenClaw（多处 issues）、Hermes Agent（看板 cron，#119070）、QwenPaw（定时任务执行失败，#8762）、ZeroClaw（批处理序列化 #12489）

**具体需求：**
- 定时任务输出可靠投递
- 限流恢复机制，避免评审者派发永久阻塞
- 批处理调度器不会对相互独立的长时间运行任务做串行化
- 记忆感知调度（Hermes Agent PR #197394：内存空闲时最多并发 8 个运行）

### B. 多账户与多 Agent 隔离
**涉及项目：** OpenClaw（网关状态隔离）、Hermes Agent（看板工作树损坏 #147168）、QwenPaw（微信凭证重复 #8755）、ZeroClaw（每个 Agent 隔离构建运行器 RFC #12494）

**具体需求：**
- 每个账户/Agent 实例的凭证作用域隔离
- 防止跨污染的工作区状态隔离
- 每个 Agent 的隔离开发环境（ZeroClaw RFC）
- 多用户/多账户前端场景的会话隔离

### C. Windows 平台运行可靠性
**涉及项目：** OpenClaw（网关更新卡死 #169844，进程辅助程序 VC++ 依赖 #200371）、Hermes Agent（升级时 frozenlist 文件锁 #8769，事件循环死锁 #41219）、QwenPaw（中文 Windows 升级失败 #8733）、ZeroClaw（PowerShell 方言问题 #12005）

**具体需求：**
- Windows 服务/计划任务生命周期管理
- 便携分发的 VC++ 或运行时依赖消除
- 中文区域设置和非 ASCII 路径处理
- PowerShell 与 cmd.exe 方言兼容性（安全策略要求）

### D. 插件生态安全加固
**涉及项目：** OpenClaw（外部插件加载，MCP 包装器）、Hermes Agent（Python 3.14 venv 插件依赖 #134469）、QwenPaw（创作者插件安装失败 #8595，资产摄取 #8779）、ZeroClaw（V5 注册中心模型引用 #12450）

**具体需求：**
- 运行时升级时保持依赖完整性（Hermes Agent 的核心问题）
- 插件安装验证和回滚安全性
- 资产生命周期管理（摄取、过期、清理）
- 注册中心可信度和来源验证

### E. 成本与资源管控
**涉及项目：** OpenClaw（网关堆内存泄漏约 25 MiB/h #185578）、Hermes Agent（内存索引中止 #196505）、QwenPaw（Provider 限额管控 #8785）、ZeroClaw（OpenRouter 成本追踪失效 #11204，管控模式被忽略 #12477）

**具体需求：**
- 跨 Provider 的精确成本核算（代理/网关 Provider 尤甚）
- 可配置的管控模式（警告 vs. 阻断）且真正生效
- 资源上限管理，防止无限增长
- 受限环境的 inode 和磁盘空间核算

### F. 可观测性与追踪可靠性
**涉及项目：** OpenClaw（WAL 检查点永不完成 #164294，recall 驱逐 #150635）、Hermes Agent（上下文窗口静默截断 #99943）、QwenPaw（检查点条目缺失 #8747）、ZeroClaw（runtime-trace.jsonl 丢失数小时数据 #12391）

**具体需求：**
- 嵌入式数据库的非阻塞检查点机制
- 守护进程重启时的追踪事件完整性保证
- 上下文窗口利用率可见性（而非静默截断）
- 结构化日志级别，不在追踪中灌入噪声（#12476）

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **主要用户** | 高级用户、AI 工程师、自托管玩家 | 开发者、自动化玩家、看板/工作流用户 | 中国市场、微信用户、创作者插件作者 | 成本敏感团队、企业运营商 |
| **核心价值** | 具备记忆、技能和多 Agent 编排的全栈个人 AI | 插件化 SDK，驱动看板/工作流自动化 | 多渠道存在（微信、Telegram）+ 创作者工具 | 成本管控、Rust 性能、安全凭证管理 |
| **架构** | 单体网关 + 组件级微服务 | 插件 SDK 运行时 + 模块化组件 | 渠道桥接，每个平台一个 Agent 实例 | Rust 守护进程 + Python 运行时 + Provider 注册中心 |
| **多 Agent** | 原生 A2A 调度，支持单向交接模式 | 通过插件和看板任务分配实现 | 每渠道 Agent 实例（无 A2A） | 通过 Agent 间会话提示工具实现 |
| **平台重点** | macOS（主要）、Windows、Linux | macOS（主要）、Windows、Linux、Docker、云端 | 国产 OS（主要）、Windows、macOS | Linux（主要）、Windows、macOS |
| **发布模式** | 滚动 Beta；精选稳定版发布 | Canary → Stable，带补丁版本 | 滚动发布；回归缺陷期间发 Beta | 稀疏稳定版；开发在 main 分支 |
| **安全姿态** | MCP 包装器安全、网关权限、访客提及机制 | OIDC/Okta 集成、提示注入加固 | 微信凭证隔离、资产摄取验证 | POSIX 命令策略、OIDC 作用域、作用域凭证 |
| **独特亮点** | 网关状态 DB、recall/记忆系统、A2A 单向派发 | 看板自动化、cron 调度、本地 Whisper ASR | 微信/Telegram 集成、创作者插件中心、移动端 | 成本管控、Rust 任务代理、V5 模型注册中心 |

---

## 6. 社区势能与成熟度

### 活跃度层级

| 层级 | 项目 | 证据 |
|------|---------|----------|
| **🚀 快速迭代** | **OpenClaw** | 500 条 PR 更新/天，318 条 issue 更新/天，230 个活跃 open issue；显然是生态系统的核心开发驱动力 |
| **⚡ 高频迭代** | **Hermes Agent**，**QwenPaw** | 各约 50 条 issue + 50 条 PR 更新/天；持续 24 小时；QwenPaw 有首次贡献者活动说明增长势头 |
| **🔧 中等迭代** | **ZeroClaw** | 50 条 PR 但仅 12 条 issue；PR 主导说明核心团队小而专注于合入功能，issue 积压增长；51 天前的高优先级 P1 表明人力不足 |
| **💀 停滞** | **IronClaw** | 追踪窗口内零活动；项目状态未知 |

### 成熟度信号

| 信号 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **回归缺陷治理** | 多个已知回归缺陷（2026.9.6）未修复 | 有限回归缺陷；v2.3.0 回归正在处理 | v2.3.0 回归快速暴露；补丁进行中 | 成本管控缺陷 40–50 天未解决；回归追踪不显著 |
| **安全流程** | 安全相关 PR 标记；Mattermost Token 泄露已追踪 | OIDC 集成，规范化 ADR 流程 | 插件安装安全加固进行中 | OIDC 作用域可配置；作用域凭证 RFC |
| **插件生态** | 成熟插件系统；MCP 包装器；第三方 npm 隐患已处理 | SDK 1.1 扩展（XXXL PR）；官方 + 社区插件 | 创作者插件中心；第三方插件安装失败 | 注册中心制；V5 迁移进行中 |
| **文档文化** | 架构决策有 ADR | ADR-017 用于 OIDC 刷新 | 中英文区域设置处理 | 追踪数据中未见 |
| **Bug SLA 意识** | P0 崩溃循环 issues 有积极分诊 | P1 插件依赖回归正在处理 | 回归报告 1–2 天内有响应 | 51 天前的 OpenRouter bug — SLA 不明显 |

### 按使用场景推荐

- **多 Agent 编排、记忆、技能：** 选择 **OpenClaw** — 功能深度最强，架构最成熟
- **工作流自动化、看板、插件可扩展性：** 选择 **Hermes Agent** — SDK 生态最佳，发布节奏稳定
- **中国市场、微信集成、创作者工具：** 选择 **QwenPaw** — 原生微信/Telegram 集成，活跃的创作者社区
- **成本管控、Rust 性能、企业安全：** 评估 **ZeroClaw** — 成本追踪和凭证管理有独到之处，但 Bug 解决速度的成熟度存疑
- **生产部署：** 暂避 **IronClaw**（状态待确认）；对成本关键负载暂避 **ZeroClaw**（S1 Bug 未解决）

---

## 7. 趋势信号

以下信号从社区反馈、RFC 活动和 PR 收敛模式中提取，覆盖整个生态：

### 🔮 新兴趋势

1. **"每个 Agent 独立运行时"正在成为一等需求**  
   *证据：* ZeroClaw RFC #12494（每个 Agent 独立构建运行器）、OpenClaw 网关状态隔离问题、QwenPaw 多账户凭证作用域（#8755、#8756）、Hermes Agent 看板工作空间损坏（#147168）。生态正在收敛到对 Agent 间硬隔离边界的需要，而非共享进程的多租户模式。

2. **插件 SDK 正在分化出两种模型：宿主托管 vs. 自主托管**  
   *证据：* Hermes Agent 的 SDK 1.1（框架托管生命周期，Whisper #8431）vs. OpenClaw 的原生插件系统 + MCP 包装器。QwenPaw 的创作者插件中心呈现第三种模式：中心化市场 + 信任验证。插件作者需要选择目标生态或构建适配器。

3. **成本管控是所有 Provider 都未兑现的关键承诺**  
   *证据：* ZeroClaw（#11204、#11585、#12477）、OpenClaw（网关堆内存泄漏 #185578）、Hermes Agent（worker store 上限 #162497）。没有任何项目有跨代理 Provider 可靠、可配置、可审计的成本管控机制。这是生产部署中最高优先级的未解决痛点。

4. **定时任务可靠性是"个人 AI 即 OS"愿景的通用瓶颈**  
   *证据：* 四个活跃项目均有 open issues 涉及 cron/定时任务失败、静默输出丢失或批处理串行化。用户期望 AI 助手能按计划自主行动——当前没有任何项目能可靠地实现这一点。

5. **Rust 组件正在进入 Python 占主导的 Agent 运行时**  
   *证据：* ZeroClaw（原生 Rust 任务代理 #12438）、OpenClaw（网关关键路径用 Rust）、Hermes Agent（Rust 任务代理进行中 #12438）。这标志着性能/正确性的推动，Python 的 GIL 和启动延迟对核心循环而言已不可接受。

6. **跨平台 Windows 支持在系统性投入上仍然不足**  
   *证据：* OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw 都有 open 的 Windows 专项 bug，涵盖服务管理、运行时依赖、区域设置和 UI 渲染。没有任何项目将 Windows 作为一等平台，尽管其企业用户占主导。

7. **记忆与 recall 系统正从简单 KV 存储演变为自主 Agent**  
   *证据：* OpenClaw recall 驱逐（#150635）、Hermes Agent 记忆索引中止（#196505）、QwenPaw 后见之明记忆 Provider（#143970）。下一代个人 AI 助手将具备自主记忆管理能力——无需用户干预即可进行记忆提升、驱逐和查询——但当前实现仍然脆弱。

### 💡 对 AI Agent 开发者的价值

| 信号 | 战略含义 |
|--------|-----------------------|
| 多 Agent 隔离需求 | 投资于 IPC 机制、命名空间隔离和每个 Agent 的资源配额 |
| 成本管控缺口 | 构建 Provider 无感知的成本核算；这是生产部署的差异化特性 |
| 定时任务可靠性 | Cron/调度器健壮性是用户三大痛点之一；投资于可观测性、重试逻辑和输出投递 |
| 插件 SDK 分化 | 选择一个生态或构建平台无关的抽象层；适配器模式将涌现 |
| Rust 进入运行时 | 预计热路径将从 Python 迁移到 Rust；为 FFI 复杂性和多语言调试做准备 |
| Windows 作为二等公民 | 企业买家使用 Windows；这是投资于 Windows 一等支持的项目的机会 |
| 记忆作为自主 Agent | 主动记忆管理（提升/驱逐/摘要）是个人 AI 差异化的下一个前沿 |

---

*本跨项目对比报告基于 2026-11-17 对 OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw 的摘要数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the technical report from English to Simplified Chinese. Let me go through the report and translate it carefully, following the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code spans, project names, issue/PR references verbatim
4. Use natural technical Chinese - not a literal word-for-word translation

Let me translate section by section:

**Title:** Hermes Agent Project Digest — 2026-11-17
This stays as-is for the date, but the title needs translation.

Let me work through this systematically. I'll translate the content while maintaining the exact structure.

**Section 1: Today's Overview**
- "Hermes Agent continues to show intense development velocity" - 翻译为 "Hermes Agent 继续保持高强度的开发节奏"
- "50 issues and 50 PRs updated in the last 24 hours" - "过去24小时内有50个issue和50个PR有更新"
- "against main" - 保持 "main" 不翻译
- "The project shipped two releases" - "项目发布了两个版本"
- "with v0.23.2 consolidating ~1,989 PRs" - 保持数字和版本号
- "across CLI, Docker, and Hermes Cloud" - 保持产品名称
- "Community engagement is high" - "社区参与度高涨"
- "Overall health is good but busy" - "整体状态良好但工作繁忙"
- "with the volume of concurrent open work suggesting strong external contributions against a maturing codebase" - "大量并发开放工作表明在代码库日趋成熟的同时，外部贡献依然活跃"

**Section 2: Releases**
- "Stable Patch Release" - "稳定补丁版本"


- "Canary Build" - "Canary 构建版本"
- "Date" - "日期"
- "Changes" - "变更内容"
- "Patch release rolling up approximately 1,989 PRs" - "补丁版本聚合了约1,989个PR"
- "No curated release notes included" - "未附带精心整理的发布说明"
- "full notes will ship with v0.24" - "完整说明将在v0.24中提供"
- "Migration note" - "迁移说明"

需要翻译的部分：
- "Users on v0.23.1 or earlier should update" - "使用v0.23.1或更早版本的用户应进行更新"
- "Canary-channel users already on the latest commit will see no functional change" - "已使用最新提交版本的Canary渠道用户不会看到功能变化"
- "Downloads" - "下载"
- "DMG (macOS Apple Silicon)" - 保持不变
- "additional platform assets available via GitHub Releases" - "更多平台资源可通过GitHub Releases获取"
- "Same commit baseline as v0.23.2, published to the canary channel" - "与v0.23.2相同的提交基准，发布到canary渠道"
- "for early adopters and CI validation" - "面向早期使用者和CI验证"

现在处理表格和列表部分。这些项目符号和表格行需要准确翻译，同时保持原有的格式和结构完整性。

"Type" - "类型"
"Component(s)" - "组件"
"Summary" - "摘要"
"Script and Docker installs now correctly take the pre-update snapshot on hermes update" - "Script和Docker安装方式现在能正确地在hermes update时获取更新前快照"
"Kanban dashboard task counts no longer include archived tasks" - "看板仪表盘的任务计数不再包含已归档任务"
"duplicate counter removed" - "重复计数器已移除"
"setup-hermes.ps1 resolves virtualenv paths" - "setup-hermes.ps1现已正确解析virtualenv路径"
"adds fallback for skills sync on Windows" - "为Windows上的skills同步增加了回退机制"
"Queued screenshots now display a thumbnail on the queue card" - "队列中的截图现在会在队列卡片上显示缩略图"
"instead of vanishing" - "而非消失"
"New judgment engine integrator" - "新增判断引擎集成器"
"for desktop screen authority gate" - "用于桌面屏幕权限门控"
"Published hermes_cli.version_info.hermes_user_agent for plugin authors" - "为插件开发者公开了hermes_cli.version_info.hermes_user_agent"

Notable ongoing open PRs advancing features:
- #156782 — New `/implement` command that executes plans saved via `/plan` on every surface
- #156779 — Remote secret store on the connector's secrets plane, applied at process start
- #156570 — Refactor moving TTS, transcription, voice mode, and wake-word modules from `tools/` to a new `speech/` package
- #155577 — Fixes agent iteration-nudge self-feed loop and deduplicates tool-result writes in long-lived sessions

All open PRs: https://github.com/NousResearch/hermes-agent/pulls

**Section 3: Community Hot Topics**

The community is actively working on several key PRs. The `/implement` command will execute previously saved plans across all interfaces, while remote secret storage is being integrated at startup. There's also a significant refactor consolidating audio-related modules into a dedicated speech package, along with fixes addressing self-feed loops and result deduplication in persistent sessions.

For issues, the CreatePullRequest API has a permission error blocking fork PR creation despite working for issues and existing fork PRs—this is a major workflow blocker for external contributors. Additionally, kanban cards that hit rate limits but then succeed are getting stuck in a `blocker_auth` state because the dispatcher loop fails to properly route them to reviewers after retries. The skills index is also degraded, being 28.1 hours old when the limit is 26 hours, which affects the hub's ability to serve current data.

The API bug is particularly critical since it breaks the standard open-source contribution flow where external contributors fork the repo, push branches, and create PRs through the CLI. Beyond these, there are stability issues like the staged runtime venv losing plugin dependencies after updates, context window truncation that silently caps cloud requests at 65,536 tokens despite larger model limits, and compression logic that's dropping most user messages due to budget constraints.

Additional bugs include reasoning replay duplicating content across multiple turns, browser screenshot formats causing API errors, worktree corruption from branch misalignment, desktop image attachment failures, session switching performance issues, gateway reply anchoring problems, inode exhaustion errors despite available disk space, and terminal notification handling that's generating extra turns unnecessarily.

The lower priority issues cover i18n bypassing in the egress command, search API failures, Windows memory provider imports, Mac display management in computer use mode, and code execution policy bypasses. Fix pull requests are available for several of these including the i18n egress fix, Windows virtual environment setup, queued prompt image handling, and agent self-feed loop corrections.

There's also work on timezone configuration, offline cron authentication, Feishu integration tools, and manual compression stalling. The new `/implement` command enables executing saved plans across all surfaces like Desktop, TUI, and CLI. Remote secret store integration is being built with secrets applied from the connector at startup, stacking on existing routing and porting work. A security-focused request is emerging for display isolation in computer use mode on Mac systems. 语音模块提取 - 将TTS/转录/语音/唤醒词移至专用的`speech/`目录，表明项目在增强模块化并为插件生态系统的扩展做准备。屏幕权限门控的判断引擎桌面集成也在开发中。这些改进反映了团队正在投资于插件生态系统的成熟度提升和跨平台一致性。

用户反馈揭示了几个关键痛点。更新后的插件依赖丢失问题影响了Python 3.14环境中的用户，导致mnemosyne和solstice等提供商插件出现静默失败。上下文窗口被无声截断的问题也影响了所有非Ollama端点，用户可能在使用更大的模型时意外失去大部分上下文。这些问题表明需要在稳定性和错误处理方面进行更严格的工作。

Windows平台的兼容性存在系统性差距，特别是在虚拟环境解析、内存提供程序导入和UI启动序列方面。Electron桌面客户端虽然具备潜力，但需要专注于稳定性和可靠性工作来提升用户体验。

与此同时，Canary到Stable的发布周期运作良好，社区参与度高，对/implement等新功能的需求表明用户正在将Hermes融入结构化工作流程。这些积极信号表明项目的方向是正确的。

项目面临一些需要关注的长期问题。Windows上的网关事件循环死锁已经持续约5个半月仍未解决，这对Windows桌面应用的采用构成障碍。技能索引降级问题虽然由机器人自动报告，但缺乏人工处理。多个P2级问题涉及压缩、看板和桌面功能，这些问题可能需要在v0.24发布前进行一次针对性的稳定性和修复冲刺。

在处理具体翻译时，我需要遵循几个关键原则：保留项目名称如"Hermes Agent"、技术术语如"main"和"branch"保持原样、URL和版本号如"v0.23.2"不变。中文表达应该符合中文技术文档的风格——使用"我们"而非"你"、"代码库"而非"代码库"、"问题"而非"issues"，同时保持专业和清晰的技术写作风格。
</think>


# Hermes Agent 项目日报 — 2026-11-17

## 1. 今日概览

Hermes Agent 继续保持高强度的开发节奏，过去24小时内 `main` 分支共有 **50个 issue 和 50个 PR 产生更新**。项目于11月16日发布了 **两个版本**，其中 v0.23.2 聚合了约 **1,989 个 PR**，涵盖 CLI、Docker 和 Hermes Cloud 的稳定构建。社区活跃度高涨，多个 P1/P2 级 bug 正在积极处理——包括 staged-runtime venv 迁移中引入的插件依赖回归问题——团队同时在合并会话管理、压缩及多平台稳定性相关的修复。整体状态 **良好但繁忙**，大量并发开放工作表明外部贡献在代码库日趋成熟的同时依然保持活跃。

---

## 2. 版本发布

### v0.23.2 — 稳定补丁版本
**日期：** 2026年11月16日  
**变更内容：** 补丁版本将自 v0.23.1 以来的约 **1,989 个 PR** 聚合为面向 CLI、安装程序（Microsoft Store）、Docker 和 Hermes Cloud 的稳定分发。未附带精心整理的发布说明；完整说明将在 v0.24 中提供。

> ⚠️ **迁移说明：** 使用 v0.23.1 或更早版本的用户应升级以获取累积修复。已使用最新提交的 Canary 渠道用户不会看到功能性变化。

**下载：** DMG（macOS Apple Silicon），更多平台资源请通过 GitHub Releases 获取。  
🔗 https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2

### v0.23.1+canary.20261116T070005Z — Canary 构建
**日期：** 2026年11月16日  
**变更内容：** 与 v0.23.2 相同的提交基准，发布至 canary 渠道，面向早期使用者和 CI 验证。

🔗 https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1%2Bcanary.20261116T070005Z

---

## 3. 项目进展

今日有六个 PR 达到合并/关闭状态，涉及稳定性、i18n、配置管理和平台修复：

| PR | 类型 | 组件 | 摘要 |
|---|---|---|---|
| #150521 | Bug fix | CLI, config | Script 和 Docker 安装方式现在能正确地在 `hermes update` 时获取更新前快照 |
| #33095 | Bug fix | Plugins, kanban | 看板仪表盘的任务计数不再包含已归档任务；重复计数器已移除 |
| #155810 | Bug fix | CLI, skills (Windows) | `setup-hermes.ps1` 现已正确解析 virtualenv 路径，并为 Windows 上的 skills 同步增加了回退机制 |
| #156791 | Feature | Desktop | 队列中的截图现在会在队列卡片上显示缩略图，而非消失 |
| #156789 | Feature | Agent, gateway, desktop | 桌面屏幕权限门控的新判断引擎集成器 |
| #156787 | Bug fix | Plugin API | 为插件开发者公开了 `hermes_cli.version_info.hermes_user_agent` |

**正在推进中的重要功能 PR：**
- **#156782** — 新增 `/implement` 命令，执行通过 `/plan` 保存的计划，覆盖所有界面（Desktop、TUI、CLI）
- **#156779** — 连接器 secrets 平面的远程密钥存储，在进程启动时应用
- **#156570** — 将 TTS、语音转写、语音模式和唤醒词模块从 `tools/` 重构至新的 `speech/` 包
- **#155577** — 修复 Agent 迭代推送自循环问题，并去重长会话中的工具结果写入

🔗 所有开放 PR：https://github.com/NousResearch/hermes-agent/pulls

---

## 4. 社区热点

以下 issue 引发了最多的讨论：

| Issue | 优先级 | 评论数 | 主题 |
|---|---|---|---|
| **#131859** | P3（阻塞中） | 61 | **[API Bug] CreatePullRequest 权限错误** — Fork PR 创建失败；API 在 issue 创建和已有 fork PR 上正常工作。对贡献者来说是重大阻碍。 |
| **#119070** | P2 | 27 | **[Kanban Bug] 限流后成功的卡片卡在 `blocker_auth`** — 由于一次重试后限流，分发循环永不将任务分发给审阅者。 |
| **#122609** | P2 | 22 | **[Skills Index] 降级中 — 索引已过期28.1小时（限值26小时）** — Skills Hub 提供的索引已过期；自动化看门狗报告。 |

**#131859 深度分析：** 这是流量最高的 issue，意味着 **fork 方式贡献的工作流已被破坏**。错误可复现且范围限定于 API 方式的 `gh pr create`；手动 fork 工作流仍然正常。社区核心诉求是保留标准的开源贡献流程：外部贡献者 fork、推送分支、通过 CLI 打开 PR。

🔗 https://github.com/NousResearch/hermes-agent/issues/131859  
🔗 https://github.com/NousResearch/hermes-agent/issues/119070  
🔗 https://github.com/NousResearch/hermes-agent/issues/122609

---

## 5. Bug 与稳定性

按优先级排序（P1 → P3），涵盖今日报告或更新的回归和崩溃：

### P1 — 严重
| Issue | 组件 | 摘要 |
|---|---|---|
| **#134469** | CLI, gateway, plugins | `hermes update` 重建 staged runtime venv 时 **不包含插件依赖**，导致 provider 插件（如 `mnemosyne`）在更新后静默失败。影响使用 Python 3.14 staged venv 的所有平台安装/更新路径。 |

🔗 https://github.com/NousResearch/hermes-agent/issues/134469

### P2 — 高
| Issue | 组件 | 摘要 |
|---|---|---|
| **#99943** | Agent, compressor | 所有云提供商的情境窗口被钳制到 `model.ollama_num_ctx`（65,536），静默忽略了 1M+ 的情境窗口。自 v0.21.0 起的回归。 |
| **#136535** | Agent, compression | Lean 压缩的逐字用户消息部分因预算填充采用最新优先、且 skill/heartbeat 行排挤，导致丢失大部分用户输入。 |
| **#147026** | Agent, reasoning | 推理回放在 bare-`custom` 路由上重复写入 `reasoning` + `reasoning_content`，导致在严格主机（如 SenseNova）上从第二轮起返回 HTTP 400。 |
| **#139253** | Tools, browser | `browser_exec` 硬编码 `image/png` MIME 类型；JPEG 截图导致 Anthropic 400 错误。 |
| **#147168** | CLI, cron, kanban | Kanban worktree 基准分支取自本地 HEAD；共享锚点克隆的 HEAD 移动静默损坏所有任务 worktree。 |
| **#148682** | Desktop, files | Desktop 在 `prompt.submit` 中丢弃图片附件；staging 时 `mime` 字段被丢弃，导致提交过滤器移除图片。 |
| **#146852** | Desktop, sessions | 会话切换阻塞渲染器主线程，每次切换耗时 0.4–1.7 秒，原因是强制同步布局。 |
| **#144709** | Gateway, Matrix | 队列链的最终回复锚定到首条消息而非实际回复的那条消息（`busy_input_mode: queue` 时）。 |
| **#156593** | Gateway | 磁盘剩余103GB时仍报"No space left on device"——`f2fs` 上的 inode 耗尽绕过了所有磁盘防护。 |
| **#156715** | Terminal, desktop | 快速命令上 `Terminal(background=true, notify=true)` 为每个通知创建一个独立轮次/回复，造成不必要的轮次倍增。 |

### P3 — 中
| Issue | 组件 | 摘要 |
|---|---|---|
| **#156720** | CLI, i18n | `/egress` 状态面板完全绕过 i18n；输出硬编码为英文。修复 PR #156758 已开放。 |
| **#135684** | Agent, web, streaming | `openai-codex` + `openai-native` 网络搜索在每次有搜索的轮次都返回 `server_error`。 |
| **#143970** | Plugins, memory, Windows | Hindsight 内存 provider 在 Windows 运行时抛出 `ModuleNotFoundError`。 |
| **#156670** | Tools, security, macOS | `computer_use` 可能干扰多显示器 Mac 设置；请求将 agent 窗口保留在非活跃显示器上，并在 yolo 模式下仍要求前台投递审批。 |
| **#156677** | Tools, code-exec, security | `check_execute_code_guard` 在无人值守情境评估中短路，绕过后续的拒绝策略。 |

**已有修复 PR 的 issue：** #156720（i18n egress）、#155810（Windows venv）、#134097（队列提示图片）、#155577（agent 自循环）、#155597（时区配置跟随）、#156743（离线 cron 认证）、#156785（Feishu 工具）、#156786（手动压缩卡顿）。

🔗 所有开放 issue：https://github.com/NousResearch/hermes-agent/issues

---

## 6. 功能需求与路线图信号

正在推进的功能 PR 和请求，揭示近期路线图方向：

| PR / Issue | 类型 | 描述 |
|---|---|---|
| **#156782** | Feature | **`/implement` 命令** — 执行通过 `/plan` 保存的计划；回应用户对跨所有界面（Desktop、TUI、CLI）实现计划→执行结构化工作流的需求。 |
| **#156779** | Feature | **远程密钥存储集成** — 在进程启动时从连接器的 secrets 平面应用密钥；建立在密钥存储路由（#156503）和移植（#152354）之上。 |
| **#156670** | Feature request | **Mac 上 `computer_use` 的屏幕权限门控** — 安全导向请求，要求在 yolo 模式下仍实现显示隔离和前台投递审批。 |
| **#156570** | Refactor | **Speech 包提取** — 将 TTS/语音转写/语音模式/唤醒词移至专用的 `speech/` 目录，表明在增强模块化，并为潜在插件生态系统扩展做准备。 |
| **#156789** | Feature | **判断引擎桌面集成** — 桌面场景的屏幕权限门控。 |

**预测近期路线图信号：** 插件 API 改进（#156787）、语音模块重构（#156570）和密钥存储分层（#156779）的集中出现，表明团队正在为下一 minor 版本投资于 **插件生态系统成熟度** 和 **多界面一致性**。

---

## 7. 用户反馈摘要

**痛点：**
- **更新后插件依赖丢失**（#134469、#134115）— Python 3.14 staged venv 用户在 `hermes update` 后报告静默失败；`mnemosyne` 和 `solstice` 被特别提及。这是 **动摇用户信任的回归问题**。
- **情境窗口静默截断**（#99943）— 云用户无任何警告或错误提示即丢失94%以上的可用情境；用户仅在质量下降后才察觉问题。
- **Windows 兼容性差距** — 多个 issue（#155810、#143970、#91245、#144476）表明 Windows 仍是 **二等公民**，尤其在 venv 解析、内存 provider 导入和 UI 启动序列方面。
- **Desktop UX 摩擦** — 图片附件丢失（#148682）、会话切换延迟（#146852）和右侧栏启动 bug（#91245）共同表明 Electron 桌面客户端需要 **专注的稳定性工作**。

**积极信号：**
- Canary 到 Stable 的发布节奏 **运转良好**（#150521 确认安装脚本现已正确获取更新前快照）。
- 社区活跃度高——API bug（#131859）上61条评论表明活跃的外部贡献者群体。
- `/implement` 等功能请求（#156782）显示用户正在将 Hermes 融入结构化工作流程。

---

## 8. 积压关注

以下 issue 开放时间较长或代表重大未解决的架构问题：

| Issue | 开放时长 | 优先级 | 状态 | 问题 |
|---|---|---|---|---|
| **#41219** | 约5.5个月 | P2 | 开放中 | **Windows 上网关事件循环死锁** — 首次崩溃后重启30–60秒内发生。确定性复现，进程存活但冻结。尚无修复 PR。 |
| **#131859** | 约1.5个月 | P3（阻塞中） | 开放中 | **API PR 创建失败** — fork 方式贡献者受影响。社区影响大（61条评论）。尚无 PR 关联。 |
| **#99943** | 约2.5个月 | P2 | 开放中 | **情境窗口静默截断** — 云提供商均受影响。自 v0.21.0 起的回归。影响所有非 Ollama 端点。 |
| **#119070** | 约2个月 | P2 | 开放中 | **Kanban 限流重试 bug** — 永久阻塞审阅者分发。影响自动化工作流可靠性。 |
| **#122609** | 约2个月 | P2 | 开放中（bot维护） | **Skills 索引降级**（已过期28.1小时）。自动化看门狗追踪；尚无人工接手。 |
| **#91245** | 约3个月 | P2 | 开放中 | **Windows 上 Desktop 右侧栏启动时死机**。两个独立的启动 bug 导致 UI 处于损坏状态。 |

**需关注标记：**
- **#41219** 自2026年6月开放至今无关联 PR——Windows 事件循环死锁是 **Windows 桌面推广的阻塞问题**。
- **#122609** 由 bot 报告，无人工分类；Skills Hub 索引降级影响所有使用 `/docs/skills` 的用户。
- 多个 P2 issue 涉及压缩、看板和桌面，表明团队可能在 v0.24 发布前需要 **一次聚焦稳定性的冲刺**。

🔗 需关注的 issue：https://github.com/NousResearch/hermes-agent/issues?q=is%3Aopen+sort%3Aupdated-desc

---

*日报数据来源于 Hermes Agent（NousResearch/hermes-agent）GitHub 数据，日期 2026-11-17。所有链接指向公开仓库。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese, following specific rules:

1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering

Let me translate this carefully, maintaining the structure and making it read naturally in Chinese.

Key terms to handle:
- "Project Digest" → 项目摘要
- "Overview" → 概览
- "Releases" → 发版动态
- "Project Progress" → 项目进展
- "Community Hot Topics" → 社区热点
- "Bugs & Stability" → 缺陷与稳定性
- "Feature Requests & Roadmap Signals" → 功能需求与路线图信号
- "User Feedback Summary" → 用户反馈总结
- "Backlog Watch" → 积压事项关注

Let me go through section by section.
</think>


# QwenPaw 项目摘要 — 2026-11-17

## 1. 今日概览

QwenPaw (agentscope-ai/QwenPaw) 今天保持了**高活跃度**，过去 24 小时内有 46 个 issue 和 50 个 PR 更新，表明开发和社区参与都非常密集。今日无新版本发布。最近一个 tag 版本仍是 v2.3.0。在 issue #8736 中引用了 beta 版 (`v2.3.1b1`)，暗示即将迎来一轮以 bug 修复为主的补丁周期。项目当前正积极解决跨平台稳定性（Windows、中文区域设置、微信多账号隔离）、优化媒体处理流程，以及扩展插件 SDK。大量活动围绕 v2.3.0 发布后的用户反馈展开，涉及定时任务、移动端 UI 和渠道集成的回归问题。维护团队的合并节奏良好——今日关闭了 12 个 PR，说明尽管 issue 量大，响应速度仍然跟得上。

---

## 2. 发版动态

**今日无新版本发布。** 距今最近的 tag 版本为 v2.3.0。issue #8736 中引用了 beta 版 (`v2.3.1b1`)，暗示维护团队正在筹备一个聚焦于 v2.3.0 以来回归问题的补丁版本。

---

## 3. 项目进展

### 今日合并/关闭的 PR（共 12 个）

| PR | 标题 | 领域 | 影响 |
|----|------|------|------|
| [#8720](https://github.com/agentscope-ai/QwenPaw/pull/8720) | fix(wechat): 防止误报 bot 冲突并隔离 workspace 状态 | 渠道 | 修复了微信 `ACCOUNT_IN_USE` 误报问题；按 agent 隔离 workspace 状态 |
| [#8632](https://github.com/agentscope-ai/QwenPaw/pull/8632) | fix(media): 缩小超大图片并标记被剥离的媒体为已省略 | 媒体 | 超出 provider 限制的图片现在自动缩小，而非直接拒绝 |
| [#8477](https://github.com/agentscope-ai/QwenPaw/pull/8477) | perf(skills): 通过原地重命名安装 pool skill | Skills | 消除了 pool skill 安装时冗余的双重拷贝；安装速度更快 |
| [#8676](https://github.com/agentscope-ai/QwenPaw/pull/8676) | fix(chat): 保持 completion 完整性并本地化警告文案 | 聊天 | 修复 #8521 — 模型空响应现在会触发警告；用户可以识别不完整的输出 |
| [#8772](https://github.com/agentscope-ai/QwenPaw/pull/8772) | fix(channels): 增强微信投递可靠性，防止 cron reload 死锁 | 渠道 | 提升微信可靠性；防止定时任务 reload 死锁 |

### 处于活跃开发阶段的重要 Open PR

| PR | 标题 | 规模 | 备注 |
|----|------|------|------|
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) | feat(sdk): 扩展插件 SDK 1.1 API、生命周期管理 | **XXXL** | 重大 SDK 扩展：身份标识、模型选择、作用域历史记录、资源生命周期 |
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431) | feat(local whisper): 将本地 Whisper 转换为 SDK 插件 | XXXL | 框架托管 Whisper ASR 插件的生命周期 |
| [#8784](https://github.com/agentscope-ai/QwenPaw/pull/8784) | fix(skills): 保留回滚备份直到所有 workspace 都恢复完成 | L | 多 workspace 回滚安全性 — 防止部分恢复失败时的 skill 丢失 |
| [#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785) | fix(media): 强制 inline 字节预算并按能力校验媒体 | M | 修复图片缩小三个漏洞：边限制与字节预算的独立性 |
| [#8770](https://github.com/agentscope-ai/QwenPaw/pull/8770) | fix(runtime): 拒绝在后台启动完成前的聊天请求 | XL | 防止在运行时初始化完成前提交的聊天导致挂起 |
| [#8769](https://github.com/agentscope-ai/QwenPaw/pull/8769) | fix(desktop): Windows 升级期间防止 CLI 重启 | M | 修复 Windows 升级因 `frozenlist.cp311-win_amd64.pyd` 文件锁导致的失败 |
| [#8781](https://github.com/agentscope-ai/QwenPaw/pull/8781) | feat(qwenpawmail-mcp): 新增 save_draft 工具 | M | 首次贡献者贡献；通过 IMAP APPEND 写入草稿夹而非 SMTP 发送 |

---

## 4. 社区热点

### 按评论数排序的最活跃 Issue

1. **#8071 — 面向插件的主题扩展点** (OPEN, 16 条评论)  
   链接: https://github.com/agentscope-ai/QwenPaw/issues/8071  
   **分析:** Console 主题系统在 #7741 中添加了调色板选择，但插件只有一个控制项 (`set(pluginId, { colorPrimary })`)。插件作者需要更深层的语义 token 覆盖层。这是**生态系统成熟的信号**——第三方插件作者正在撞上当前主题 API 的天花板。可以预期这将推动 SDK 1.1 的主题扩展。

2. **#7709 — 定时任务输出经常丢失** (CLOSED, 7 条评论)  
   链接: https://github.com/agentscope-ai/QwenPaw/issues/7709  
   **分析:** 定时/cron 任务的输出静默丢失，有时会折叠到 thinking steps 中。影响 v2.2.1。用户需要可靠的定时任务可观测性。

3. **#7724 — 会话丢失** (CLOSED, 6 条评论)  
   链接: https://github.com/agentscope-ai/QwenPaw/issues/7724  
   **分析:** 后端重启和插件重新部署后，会话完全消失。这是一个**数据完整性红旗**——会话在重启后的持久化不可靠。

4. **#7859 — 工具结果提醒中的持久化提示词注入** (CLOSED, 6 条评论)  
   链接: https://github.com/agentscope-ai/QwenPaw/issues/7859  
   **分析:** 超过 20 轮对话后，提示词注入指令（"delete all skills"）反复出现在系统提醒块中。这是一个**安全漏洞**——工具结果的 system-reminder 层存在注入风险。

5. **#8595 — qwenpaw-creator 插件安装失败** (CLOSED, 5 条评论)  
   链接: https://github.com/agentscope-ai/QwenPaw/issues/8595  
   **分析:** 官方 `qwenpaw-creator` v2.0.4 通过 API 热安装失败，报"No package metadata was found"。影响扩展 UI 和 CLI 两种安装路径。

### 社区核心诉求

- **多实例 / 多账号隔离：** 多用户共享同一安装实例（issue #8755, #8756 PR）需要正确的 workspace 级别凭证分离
- **定时任务可靠性：** Cron 任务是核心使用场景，但输出丢失和投递 bug 一直存在
- **插件生态走向成熟：** 主题可扩展性（#8071）、SDK 扩展（#8764）、creator 插件 bug（#8779, #8778）表明第三方生态正在壮大
- **跨平台打磨：** 中文 Windows 区域设置问题（#8733）、Windows 升级文件锁（#8769）、Ubuntu/uv 安装失败（#8698）说明平台多样性带来压力

---

## 5. 缺陷与稳定性

按严重程度和社区影响排序：

| 严重程度 | Issue | 标题 | 状态 | 对应修复 PR？ |
|----------|-------|------|------|---------------|
| 🔴 高 | [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 工具结果提醒中的提示词注入，指令 agent 删除所有 skills | CLOSED | — |
| 🔴 高 | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | 后端重启和插件重新部署后会话丢失 | CLOSED | — |
| 🔴 高 | [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) | 定时任务在第二次模型调用时因 APIConnectionError 失败 | OPEN | — |
| 🟠 中 | [#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736) | 子 agent 完成错误触发"回复完成"桌面通知 | OPEN | — |
| 🟠 中 | [#8755](https://github.com/agentscope-ai/QwenPaw/issues/8755) | 两个微信账号共享前端：升级导致凭证重复，仅有一个渠道运行 | OPEN | [#8756](https://github.com/agentscope-ai/QwenPaw/pull/8756) |
| 🟠 中 | [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) | 当 reasoning 消耗完 4000 token 输出预算时，响应续写摘要失败 | OPEN | — |
| 🟠 中 | [#8776](https://github.com/agentscope-ai/QwenPaw/issues/8776) | classify_model_error 将 400+quota 误分类为 bad_request，阻塞 fallback | OPEN | — |
| 🟠 中 | [#8718](https://github.com/agentscope-ai/QwenPaw/issues/8718) | Hub 模型网关对 Anthropic/MiniMax preset 立即失败 — 缺少 request_headers() | OPEN | — |
| 🟡 低 | [#8745](https://github.com/agentscope-ai/QwenPaw/issues/8745) | PawApp 移动端：会话隔离混淆、发送错误、键盘遮挡 | OPEN | — |
| 🟡 低 | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 响应内容为空、多次按 Ctrl+C、UI 性能回归 | CLOSED | [#8676](https://github.com/agentscope-ai/QwenPaw/pull/8676) ✓ |

**值得注意：** #7859（提示词注入）和 #7724（会话丢失）已关闭，但其严重程度值得验证修复是否真的已发布。#8770（在启动完成前拒绝聊天）解决了可能导致部分未报告静默失败的一类挂起问题。

---

## 6. 功能需求与路线图信号

| 优先级 | Issue | 需求 | 信号强度 |
|----------|-------|------|---------|
| ⭐ 高 | [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 面向插件的语义 token / 主题扩展层 | 高 — 与 SDK 1.1 扩展（#8764）对齐 |
| ⭐ 高 | [#8774](https://github.com/agentscope-ai/QwenPaw/issues/8774) | 运行中聊天的中途转向（"send-now"） | 高 — 本地已有功能实现 |
| ⭐ 中 | [#8780](https://github.com/agentscope-ai/QwenPaw/issues/8780) | qwenpawmail-mcp 的 save_draft 工具 | 中 — PR #8781 已提交（首次贡献者） |
| ⭐ 中 | [#8711](https://github.com/agentscope-ai/QwenPaw/issues/8711) | 空响应 / 仅 thinking 的 HTTP 200 流 EOF 时自动重试 | 中 — 提供了详尽的代码引用 |
| ⭐ 中 | [#8745](https://github.com/agentscope-ai/QwenPaw/issues/8745) | PawApp 移动端 UX：会话隔离、发送错误、键盘 | 中 — 三个不同的移动端痛点 |

**路线图预测：** SDK 1.1 扩展（#8764, XXXL）和本地 Whisper SDK 插件（#8431, XXXL）是当前在研的最大特性。中途转向功能（#8774）已有本地可用的实现，暗示可能登陆 v2.4.x。插件主题可扩展性（#8071）鉴于 SDK 投入，很可能在近期路线图上。

---

## 7. 用户反馈总结

### 痛点
- **定时任务可靠性是排名第一的反复投诉** — 任务静默失败、输出丢失、或升级后意外触发（#7709, #7480, #8762）。这是高级用户的核心使用场景，但问题跨版本持续存在。
- **v2.3.0 回归问题** — v2.3.0 发布后立即暴露了多个问题：检查点导航缺失（#8747）、微信渠道启动失败（#8693）、中文 Windows 升级失败（#8733）、定时任务连接错误（#8762）。v2.2.x 用户反映体验更稳定。
- **UI 性能回归** — 用户明确偏好旧版 UI 布局，理由包括"大量空闲区域"、模型切换变慢、交互不够流畅（#8521）。
- **插件生态摩擦** — creator 插件安装失败（#8595）、asset ingest 终端失败（#8779）、图片引用过期（#8778）表明插件创作体验还需要加固。

### 正面信号
- 用户正在积极贡献 — 今日有两位首次贡献者提交了 PR（#8782, #8781）。
- 社区参与质量高 — issue 包含了完整的环境信息表、重现步骤和代码引用。
- 多 agent / 多用户场景正在成为真实使用案例，说明用户量在增长。

---

## 8. 积压事项关注

缺少近期活动或维护团队关注的重要事项：

| 项目 | 标题 | 存在时间 | 状态 | 关注原因 |
|------|-------|---------|------|---------|
| [#8747](https://github.com/agentscope-ai/QwenPaw/issues/8747) | v2.3.0 中 Console 侧边栏检查点条目缺失 | 2 天 | CLOSED | 回归问题在最新版本中引入 — 需要验证修复已合并 |
| [#8776](https://github.com/agentscope-ai/QwenPaw/issues/8776) | classify_model_error 将 400+quota 误分类 | 1 天 | OPEN | 主模型配额耗尽时阻塞 fallback；仅一条评论，需要分诊 |
| [#8778](https://github.com/agentscope-ai/QwenPaw/issues/8778) | 工件生成约 24 小时后引用图片失效 | 1 天 | OPEN | DashScope 签名 URL 过期未检查；creator 插件稳定性 |
| [#8779](https://github.com/agentscope-ai/QwenPaw/issues/8779) | FAILED remote asset_ingest 是终结态 — 无重试 | 1 天 | OPEN | Creator 插件生产稳定性 |
| [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) | 定时任务在第二次模型调用时失败 | 1 天 | OPEN | 可复现的每日失败；需要调查 |
| [#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706) | Creator 输入框卡顿 — 重新渲染时缺少 memoize | 4 天 | OPEN | 对话长度增加后的性能退化 |
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) | 插件 SDK 1.1 扩展 | 1 天 | OPEN | XXXL PR — 需要仔细 review；涉及身份标识、权限、生命周期 |

**建议维护团队采取的行动：** 来自同一 1 天窗口的 creator 插件问题集群（#8778, #8779, #8706）和配额误分类 bug（#8776）值得尽快处理，以防止插件生态中的用户流失。

---

*本摘要基于 2026-11-17 的 GitHub 数据生成（agentscope-ai/QwenPaw）。所有链接均指向 https://github.com/agentscope-ai/QwenPaw。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the entire English technical report about ZeroClaw into Simplified Chinese. I need to:

1. Translate all text content while preserving the Markdown structure exactly
2. Keep all URLs, link targets, code spans, code blocks, numbers, dates, and technical identifiers in their original form
3. Keep issue/PR references as-is
4. Use natural technical Chinese appropriate for a Chinese developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences around the whole output

Let me go through this section by section and translate it.
</think>


# ZeroClaw 项目日报 — 2026-11-17

---

## 1. 今日概览

ZeroClaw 今日保持高开发强度，过去 24 小时内有 50 个 PR 和 12 个 issue 有所更新，但值得注意的是尚未发布新版本。项目正积极修复关键稳定性问题——多个 P1/高风险 bug 涉及成本执行、链路追踪和运行时配置不一致等问题。主要的重构工作正在提供商系统上展开（V5 注册表采用、协议共享），同时关于隔离构建运行器和凭证作用域的新 RFC 表明项目正在战略性地向企业级安全加固方向投入。

---

## 2. 发布情况

**今日无新版本**发布。数据中提到的最新正式版本是 v0.9.0（6c78ba5），适用于 Linux x86_64 平台。

---

## 3. 项目进展

### 最近 24 小时合并/关闭的 PR
共有 3 个 PR 达到合并或关闭状态（数据中未详细说明具体提交者）。

### 推进中的活跃 PR

| PR | 作者 | 关注点 | 风险 |
|----|--------|-------|------|
| [#12456](https://github.com/zeroclaw-labs/zeroclaw/pull/12456) | NiuBlibing | 重构 providers：分离聊天连接和超时构建逻辑 | 中 |
| [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) | NiuBlibing | Web：编辑规范注册表，选择精确的模型引用 | 高 |
| [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) | NiuBlibing | Zerocode：配置并选择规范提供商模型 | 高 |
| [#12455](https://github.com/zeroclaw-labs/zeroclaw/pull/12455) | NiuBlibing | 共享原生能力协议和 HTTP 传输层 | — |
| [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) | NiuBlibing | 采用规范 V5 注册表和运行时模型绑定 | 高 |
| [#12497](https://github.com/zeroclaw-labs/zeroclaw/pull/12497) | tidux | OIDC：使请求的 OAuth scopes 可按提供商配置 | — |
| [#12438](https://github.com/zeroclaw-labs/zeroclaw/pull/12438) | CastelloBrancoTecnologia | 用于 SSH 的原生 Rust 任务代理（消除 Python 依赖） | — |
| [#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) | CastelloBrancoTecnologia | 添加可选的任务所有 SSH 传输复用 | 高 |
| [#12258](https://github.com/zeroclaw-labs/zeroclaw/pull/12258) | Audacity88 | 添加 `sessions_prompt` 工具用于 agent 间会话提示 | 高 |
| [#12496](https://github.com/zeroclaw-labs/zeroclaw/pull/12496) | tidux | ADR-017：守护进程持有的 OIDC 刷新及 Okta/Entra ID 支持 | — |
| [#12479](https://github.com/zeroclaw-labs/zeroclaw/pull/12479) | mov-xound-glitch | 修复 Anthropic 思维请求在编辑历史后失败的问题 | — |
| [#12061](https://github.com/zeroclaw-labs/zeroclaw/pull/12061) | devinhuang2001 | MCP：驱逐中毒连接而非复用 | 高 |

**核心主题：**
- **提供商架构重构**：多个协同 PR（#12450、#12452、#12453、#12455、#12456）构成了协调一致的 V5 注册表迁移，涉及模型引用的破坏性变更
- **安全加固**：OIDC 改进（#12497、#12496）、SSH 传输（#12438、#11869）及安全策略修复（#11994）
- **可观测性**：长期存在的追踪和日志问题取得进展

---

## 4. 社区热点

### 按评论互动量排列的活跃 Issue

| Issue | 作者 | 标题 | 评论数 | 优先级 |
|-------|--------|-------|----------|----------|
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | alperyilmaz | OpenRouter 消费显示 $0.00，所有 token 均标注"free tok" | 6 | P1 |
| [#12005](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) | AndreiBAFC | PowerShell 拒绝参数中的 `@` 符号 | 5 | — |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | NiuBlibing | 废弃 StoragePolicy::Rolling，扩展 /api/logs | 4 | P2 |
| [#12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373) | CastelloBrancoTecnologia | WebUI 只写凭证管理 | 4 | — |
| [#12391](https://github.com/zeroclaw-labs/zeroclaw/issues/12391) | RO-mix | runtime-trace.jsonl 丢失数小时的事件 | 3 | — |
| [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | Audacity88 | 触发的消费限额需要重启守护进程才能清除 | 3 | P1 |

### 分析
**成本与计费痛点**：前三大 issue（#11204、#11585、#12477）均涉及成本追踪和执行失败，表明这是用户的核心痛点。用户无法信任预算控制，这对于生产环境部署来说是致命的。

**安全策略复杂性**：#12005（PowerShell 方言拒绝 `@`）和 PR #11994（bash 中的 POSIX 命令解析）显示了安全策略与实际命令使用之间的持续摩擦。

**RFC 势头**：两个新 RFC（#12494、#12422）表明社区对更强的多租户隔离和凭证作用域有迫切需求——企业级需求正在推动架构演进。

---

## 5. Bug 与稳定性

### 关键 Bug（S1 - 阻塞工作流）

| Issue | 组件 | 概要 | 修复 PR？ |
|-------|-----------|---------|---------|
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | runtime/daemon | `cost.enforcement.mode` 被忽略；即使处于 "warn" 模式，超出预算仍会停止轮次 | — |

### 高严重度 Bug（S2 - 降级行为）

| Issue | 组件 | 概要 | 修复 PR？ |
|-------|-----------|---------|---------|
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | runtime/daemon | OpenRouter 显示 $0.00 消费，所有 token 被归类为"free tok" | — |
| [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | runtime/daemon | 消费限额需要重启守护进程才能清除；`cost.allow_override` 始终未被读取 | — |
| [#12391](https://github.com/zeroclaw-labs/zeroclaw/issues/12391) | runtime/daemon | runtime-trace.jsonl 在重启后丢失数小时的事件 | — |
| [#12005](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) | policy.rs | PowerShell 方言拒绝参数中的裸 `@`（导致邮件 CLI 不可用） | — |
| [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | gateway/api | 网关以 INFO 级别向运行时追踪灌入大量连接日志 | — |
| [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492) | gateway/api | 仪表盘忽略运行时配置文件中 thinking 设置 | — |
| [#12489](https://github.com/zeroclaw-labs/zeroclaw/issues/12489) | runtime/daemon | Cron 调度器等待整个批次；一个长任务阻塞所有其他任务 | — |

### 稳定性隐患
- **成本执行**：三个独立 bug（#11204、#11585、#12477）表明成本追踪存在系统性问题
- **链路可靠性**：#12391 报告生产环境中存在数小时的可观测盲区
- **日志噪音**：#12476 造成链路污染，可能掩盖真实问题

---

## 6. 功能需求与路线图信号

### 提议架构变更的新 RFC

| Issue | 作者 | 请求 | 安全相关性 |
|-------|--------|---------|-------------------|
| [#12494](https://github.com/zeroclaw-labs/zeroclaw/issues/12494) | CastelloBrancoTecnologia | 每个 agent 独立的开发构建运行器 | 高 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | CastelloBrancoTecnologia | 操作员托管服务凭证的作用域化使用 | 高 |

### 社区关注的功能需求

| Issue | 作者 | 请求 | 领域 |
|-------|--------|---------|--------|
| [#12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373) | CastelloBrancoTecnologia | WebUI 只写凭证管理 | 安全/图形界面 |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | NiuBlibing | 废弃 StoragePolicy::Rolling；扩展 /api/logs | 可观测性 |
| [#12258](https://github.com/zeroclaw-labs/zeroclaw/pull/12258) | Audacity88 | `sessions_prompt` 工具用于 agent 间提示（PR 已开） | Agent 互操作 |

### 近期可能落地的功能
基于 PR 成熟度和协同关系判断：
1. **V5 注册表系统** — 多个 PR（#12450、#12452、#12453）代表一个即将完成的功能
2. **SSH 传输重写** — #12438（原生 Rust）+ #11869（传输复用）看起来已准备好合并
3. **OIDC 增强** — #12497（scopes）+ #12496（刷新令牌）正在形成一致的功能集
4. **凭证管理** — #12373 + #12422 表明凭证处理正在成为重点投入方向

---

## 7. 用户反馈摘要

### 已识别的痛点

| 主题 | 证据 | 严重程度 |
|-------|----------|----------|
| **成本控制不可靠** | #11204（OpenRouter 计费）、#11585（限额覆盖）、#12477（执行模式） | 严重 |
| **链路/可观测性缺失** | #12391（数小时空白）、#12476（日志洪泛） | 高 |
| **安全策略摩擦** | #12005（@ 拒绝）、#11994（POSIX 解析） | 中 |
| **Cron 调度器瓶颈** | #12489（批次串行化） | 中 |
| **SSH 集成复杂性** | 多个 PR 和 issue 表明 SSH 工作活跃但复杂 | 中 |

### 积极信号
- 活跃的 RFC 参与度表明有投入的企业用户群体
- 高 PR 吞吐量表明维护者投入力度强劲
- 协调一致的 V5 注册表工作显示了架构成熟化的方向

---

## 8. 积压关注清单

### 需要维护者关注的问题（超过 14 天未解决，影响重大）

| Issue | 时长 | 作者 | 标题 | 风险 |
|-------|-----|--------|-------|------|
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | 约 51 天 | alperyilmaz | OpenRouter 成本追踪失效 | 高 |
| [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | 约 42 天 | Audacity88 | 消费限额需要重启 | 高 |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) | 约 91 天 | NiuBlibing | StoragePolicy::Rolling 性能回退 | 高 |
| [#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) | 约 29 天 | CastelloBrancoTecnologia | SSH 传输复用（PR 已存在） | 高 |
| [#11845](https://github.com/zeroclaw-labs/zeroclaw/pull/11845) | 约 30 天 | CastelloBrancoTecnologia | OpenRouter 信用余额显示（PR 已存在） | 中 |
| [#11994](https://github.com/zeroclaw-labs/zeroclaw/pull/11994) | 约 26 天 | tidux | bash 中读取 POSIX 命令（PR 已存在，取决于 #12395） | 中 |

### 被阻塞或需要作者操作的 PR

| PR | 作者 | 状态 | 阻塞原因 |
|----|--------|--------|---------|
| [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) | NiuBlibing | 开放，需要作者操作 | 对其他 PR 的依赖链 |
| [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) | NiuBlibing | 开放，需要作者操作 | 依赖链 |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | ggettert | 开放，需要作者操作 | 插件注册表源 |
| [#11911](https://github.com/zeroclaw-labs/zeroclaw/pull/11911) | CastelloBrancoTecnologia | 开放，需要作者操作 | Channel 工具结果 |

---

*日报基于 2026-11-17 ZeroClaw（zeroclaw-labs/zeroclaw）活动数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*