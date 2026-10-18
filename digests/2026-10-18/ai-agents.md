# OpenClaw 生态日报 2026-10-18

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-18 00:13 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this project digest from English to Simplified Chinese. I need to:
1. Keep all the Markdown structure (headings, tables, lists, etc.)
2. Keep URLs, issue numbers, project names, code identifiers as-is
3. Translate the content into natural technical Chinese
4. Output ONLY the translation, no preamble or explanation

Let me translate this carefully while maintaining the technical register and structure.</think>

# OpenClaw 项目简报 — 2026-10-18

---

## 1. 今日概览

OpenClaw 保持高活跃度，过去 24 小时内有 **500 个 issue 和 500 个 PR** 更新。当前有 335 个 open issue 和 262 个 open PR，近期在测试精简和基础设施重构方面取得显著进展。多个关键稳定性问题仍在积极排查中，尤其是 Gateway 事件循环阻塞、SQLite 争用以及 Android Talk 实时语音可靠性方面。本期无新版本发布。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

### 最近合并/关闭的 PR

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#1758](https://github.com/openclaw/openclaw/pull/1758) | feat: add gram skill for Instagram CLI | — | CLOSED |
| [#1756](https://github.com/openclaw/openclaw/pull/1756) | fix: use exact match for win32 platform detection | — | CLOSED |
| [#175902](https://github.com/openclaw/openclaw/pull/175902) | test(agents,integration,gateway): remove low-value tests (batch d243) | XL | CLOSED |
| [#175934](https://github.com/openclaw/openclaw/pull/175934) | refactor(a2a): let the HTTP boundary own dispatch failures | M | CLOSED |
| [#175556](https://github.com/openclaw/openclaw/pull/175556) | improve(sessions): faster inbound reply capture on agents with many conversation deliveries | S | CLOSED |

### 待合并的 PR

- **[#174599](https://github.com/openclaw/openclaw/pull/174599)** — feat(state): local client credential cutover (R0 PR1b) — 将客户端私钥迁移至独立版本化的本地 schema
- **[#157806](https://github.com/openclaw/openclaw/pull/157806)** — fix(sessions): preserve requester identity at execution admission — 解决委托任务丢失原始请求者权限的问题
- **[#175879](https://github.com/openclaw/openclaw/pull/175879)** — refactor: deslop normalization, infra and UI residues (wave-6 bundle F)
- **[#174152](https://github.com/openclaw/openclaw/pull/174152)** — feat(android): photo + voice note keep one message shape through send and transcription
- **[#165648](https://github.com/openclaw/openclaw/pull/165648)** — feat(tts-local-cli): declare and select voices for the local CLI provider

---

## 4. 社区热点

### 互动最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 点赞 | 优先级 |
|-------|------|--------|------|--------|
| [#99241](https://github.com/openclaw/openclaw/issues/99241) | Tool outputs sometimes render as image attachments and become unreadable to the agent | 26 | 👍 2 | P1 🐚 platinum |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale | 24 | 👍 2 | P1 🦞 diamond |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin source capture rewrites ~1.1–1.4 GB per CLI command (severe SSD wear) | 19 | 👍 0 | P1 🐚 platinum |
| [#164294](https://github.com/openclaw/openclaw/issues/164294) | Gateway state DB WAL auto-checkpoint never completes (pinned by in-process reader) | 19 | 👍 0 | P2 🦪 silver |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite unbounded growth: memory_index_chunks + memory_embedding_cache tables have no retention policy | 17 | 👍 0 | P2 🦞 diamond |

### 分析

讨论最热烈的问题集中在**大规模场景下的数据完整性和系统性能**：
- **Agent 可视性问题**：工具输出坍缩为图片占位符（#99241）导致 Agent 无法推理
- **事件循环阻塞**：同步持久化操作（#119720）和 WAL 检查点失败（#164294）造成严重卡顿
- **资源消耗**：插件捕获每次 CLI 命令写入 1.1–1.4 GB（#157989）导致 SSD 磨损；SQLite 无限增长（#114612）有磁盘耗尽风险

---

## 5. 缺陷与稳定性

### 严重（P0）问题

| Issue | 标题 | 影响 | 状态 |
|-------|------|------|------|
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | Gateway startup blocks event loop 40–200s; health monitor misreads as disconnect → restart loop | crash-loop | OPEN |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: state DB read-admission seal → "Worker environment inventory has closed" → unhandled rejection | crash-loop | CLOSED |
| [#175027](https://github.com/openclaw/openclaw/issues/175027) | Android realtime Talk reuses archived backing session, rejects GPT-Live agent consults | session-state | OPEN |
| [#166665](https://github.com/openclaw/openclaw/issues/166665) | Failed byte-triggered compaction suppresses itself; transcript grows unbounded (150x limit) | session-state | CLOSED |

### 高优先级（P1）回归/稳定性问题

| Issue | 标题 | 影响 | 状态 |
|-------|------|------|------|
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | Regression: 'restart recovery claim changed before agent adoption' reappears on 2026.7.2-beta.7 | session-state | OPEN |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite contention: 3 concurrent write handles cause ~33s event-loop stalls | crash-loop | OPEN |
| [#131768](https://github.com/openclaw/openclaw/issues/131768) | Android Talk drops live session when agent uses tools or waits | message-loss | OPEN |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | Android Talk drops with "no live response owner" on task-requiring turns | message-loss | OPEN |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | Context Overflow: large tool outputs exceed context window, compaction can't recover | session-state | OPEN |

### 安全相关问题

- **[#132303](https://github.com/openclaw/openclaw/issues/132303)** — `agents.list[].tools.deny` not enforced for claude-cli backend (tools stay always-on) — P1 🦞 diamond
- **[#150822](https://github.com/openclaw/openclaw/issues/150822)** — Native Codex children advertise OpenClaw tools without execution handler — P1 🐚 platinum
- **[#149564](https://github.com/openclaw/openclaw/issues/149564)** — Cron lane: scheduledToolPolicy.mode="account" resolves to denyAllToolPolicy — P1 🦞 diamond

---

## 6. 需求与路线图信号

### 值得关注的特性 Issue

| Issue | 标题 | 优先级 | 备注 |
|-------|------|--------|------|
| [#162164](https://github.com/openclaw/openclaw/issues/162164) | Feature: Opt-in personal identity in iOS/macOS while preserving Shared owner | P2 🌊 off-meta | 平台功能需求 |
| [#120244](https://github.com/openclaw/openclaw/issues/120244) | RFC: cron maintenance window with role isolation | P3 🌊 off-meta | 继 #79192/#119575 的后续讨论 |
| [#143017](https://github.com/openclaw/openclaw/issues/143017) | Prompt-cache: five ways a persistent session rewrites its prefix (21.3M cache-write tokens) | P2 🐚 platinum | 性能优化机会 |
| [#119992](https://github.com/openclaw/openclaw/issues/119992) | Per-turn send budget for the message tool (within-turn duplicate-answer storms) | P2 🦪 silver | 防刷量机制 |

### 信号分析

当前 issue 分布显示团队重点关注：
1. **核心稳定性** — 修复事件循环阻塞、SQLite 争用和启动性能问题
2. **移动端可靠性** — Android Talk/语音问题占比很高
3. **资源效率** — 减少不必要的磁盘 I/O 和内存增长
4. **平台对等** — iOS/macOS 个人身份功能

---

## 7. 用户反馈总结

### 主要痛点

1. **Agent 无法读取工具输出**（#99241）— 长时间运行的 ANSI 重度工作流导致工具结果渲染为图片附件；Agent 失去访问 stdout/stderr 文本的能力，而这些是推理所必需的

2. **Gateway 事件循环卡顿**（#119720、#117262、#162211）— 多个同步操作阻塞事件循环 33–200 秒，导致健康检查误判和重启循环

3. **Android 语音可靠性**（#131768、#138272、#175027）— 实时 Talk 在 Agent 执行工具或等待时持续断连；Discord 语音没有可靠的回退方案

4. **SQLite 无限增长**（#114612、#157989）— 内存表和插件捕获无清理机制，有磁盘耗尽和 SSD 磨损风险

5. **计费冷却**（#115642）— 提供商计费错误触发 5 小时锁定，无基于探测的恢复或手动重置

### 用户满意度指标

- 带有 **platinum hermit** 或 **diamond lobster** 评级的 issue 表示高用户影响
- 互动最活跃的 5 个 issue 中有 4 个评级为 🦞 diamond 或 🐚 platinum
- 多个"之前可用、现在失败"的回归报告表明近期变更引入了不稳定因素

---

## 8. 待处理事项

### 需要维护者关注的高优先级陈旧 Issue

| Issue | 标题 | 陈旧时长 | 优先级 | 阻塞原因 |
|-------|------|----------|--------|----------|
| [#129314](https://github.com/openclaw/openclaw/issues/129314) | Hidden "next-turn runtime context" message dispatched as standalone turn | stale | P1 🦐 gold | 需要信息 / 复现步骤 |
| [#116512](https://github.com/openclaw/openclaw/issues/116512) | Telegram progress duplicates first commentary when snapshot IDs change | stale | P2 🦪 silver | 需要维护者审查 |
| [#159789](https://github.com/openclaw/openclaw/issues/159789) | Close wedge: one failed native close permanently locks agent execution | stale | P2 🦪 silver | 需要产品决策 |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite contention: 3 concurrent write handles cause ~33s stalls | stale | P1 🦐 gold | 需要信息 |

### 等待作者/验证的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#122862](https://github.com/openclaw/openclaw/pull/122862) | fix(matrix): resolve exact room session routes | 📣 needs proof |
| [#163698](https://github.com/openclaw/openclaw/pull/163698) | fix(qianfan): DeepSeek replies arrive all at once instead of streaming | 📣 needs proof |
| [#165648](https://github.com/openclaw/openclaw/pull/165648) | feat(tts-local-cli): declare and select voices | 📣 needs proof |
| [#174152](https://github.com/openclaw/openclaw/pull/174152) | feat(android): photo + voice note keep one message shape | ⏳ waiting on author |

---

*基于 OpenClaw GitHub 数据生成 — 2026-10-18*

---

## 横向生态对比

<think>The user wants me to translate the English report into Chinese. Let me translate it while:
1. Keeping all markdown structure, tables, headings, etc.
2. Preserving all code, URLs, project names, version numbers, etc.
3. Using natural technical Chinese suitable for a developer newsletter
4. Keeping the tables aligned properly

Let me go through and translate this carefully.</think>

# 跨项目对比报告：个人 AI 助手生态系统

---

## 1. 生态系统概览

个人 AI 助手与自主代理领域正在经历多个开源项目的激烈开发冲刺。当日数据显示，四个活跃项目（OpenClaw、Hermes Agent、QwenPaw、ZeroClaw）在 24 小时内共同处理了 **648 个 issue** 和 **615 个 PR**——这表明该领域正在快速迭代，以应对真实部署场景中的反馈。业界正在向共同的技术挑战收敛：大规模会话管理、媒体处理稳定性、安全加固以及多平台支持。然而，每个项目在生态系统中占据着不同的细分领域——从面向企业的网关系统到轻量级 CLI 工具。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | IronClaw |
|--------|----------|--------------|---------|----------|----------|
| **Issue 更新（24h）** | 500 | 50 | 9 | 49 | 0 |
| **PR 更新（24h）** | 500 | 50 | 15 | 50 | 0 |
| **待处理 Issue** | 335 | ~50 | 9 | ~42 | — |
| **待处理 PR** | 262 | 47 | 14 | ~48 | — |
| **发布版本（24h）** | 0 | 0 | 0 | 0 | — |
| **活跃等级** | 🟢 极高 | 🟡 较高 | 🟠 中等 | 🟢 极高 | ⚪ 不活跃 |

---

## 3. OpenClaw 的定位

### 相对优势

- **规模与企业级成熟度**：OpenClaw 处理最多的 issue/PR 数量（各 500），表明这是一个生产级系统，拥有广泛的实际部署基础。Hermes Agent（50）和 ZeroClaw（49）虽展示类似的活动水平，但面向不同细分领域。
- **完善的 Issue 分类体系**：OpenClaw 使用复杂的优先级系统（platinum 🐚、diamond 🦞、gold 🐡、silver 🦪），映射到用户等级和服务级别——这一做法在其他项目中并不常见。
- **移动端优先的定位**：OpenClaw 特别强调 Android 语音可靠性与实时 Talk 会话管理，暗示其面向企业移动办公场景。

### 技术路线的差异

- **网关中心化架构**：OpenClaw 通过统一的 Gateway 运行时集中管理会话所有权，而 ZeroClaw 正在积极将整体式 runtime/gateway 拆分为独立服务（v0.9.0 第三阶段）。
- **插件系统**：ZeroClaw 开创性地支持 WASM 插件托管；OpenClaw 侧重于插件源捕获，但存在显著的 I/O 开销问题（每次 CLI 命令 1.1–1.4 GB）。
- **状态管理**：OpenClaw 面临 SQLite 在大规模场景下的竞争问题；Hermes Agent 最近的 Gateway 合并引入了不同的会话状态挑战。

### 社区规模

OpenClaw 每日 500 条的更新量代表了最活跃的社区，约为 QwenPaw 的 **10 倍**，与 ZeroClaw 相当。这表明其用户基数更大，或开发节奏更快（亦或两者兼有）。

---

## 4. 共同技术关注点

| 技术挑战 | 涉及项目 | 具体需求 |
|--------------------|-------------------|------------|
| **会话管理 / 状态** | OpenClaw, Hermes, ZeroClaw | 网关事件循环阻塞、会话所有权持久化、重连恢复 |
| **SQLite / 数据库稳定性** | OpenClaw, Hermes | WAL 检查点失败、无限制增长、内存表保留 |
| **安全加固** | ZeroClaw, OpenClaw | 命令允许列表绕过、凭证处理、进程隔离 |
| **媒体处理** | QwenPaw | 音频/视频拒绝识别、防止会话卡死 |
| **多平台桌面端** | Hermes, ZeroClaw | Windows 提升进程处理、桌面无障碍访问 |
| **插件架构** | ZeroClaw, Hermes | 插件生命周期、验证更新、沙箱执行 |

---

## 5. 差异化分析

### 功能定位

- **OpenClaw**：企业级大规模会话管理、移动端（Android）语音、计费/冷却系统、精细化优先级分诊
- **Hermes Agent**：统一网关运行时、凭证管理、定时/计划任务、多渠道（Discord、Telegram）支持
- **QwenPaw**：轻量级 CLI、媒体处理健壮性、UI 优化、模块化 v2.3.0 路线图
- **ZeroClaw**：安全优先设计、WASM 插件宿主、runtime/gateway 架构拆分、用户级隔离

### 目标用户

| 项目 | 主要用户群体 |
|---------|-------------|
| OpenClaw | 需要可靠多会话管理的企业/团队 |
| Hermes Agent | 通过 TUI/CLI/桌面端将 AI 集成到应用的开发者 |
| QwenPaw | 想要快速、可扩展 CLI 助手的个人开发者 |
| ZeroClaw | 部署自主代理时注重安全性的运维人员 |

### 技术架构

- **单体 → 模块化**：ZeroClaw 正在积极解耦；OpenClaw 与 Hermes 正在整合
- **Rust 核心**：ZeroClaw（有 RustlangLatam 贡献者参与）展示 Rust 系统编程能力；Hermes 使用 Go；OpenClaw 为多语言项目
- **WASM 前瞻**：ZeroClaw 是唯一实现 WASM 插件托管的项目，代表着面向未来的架构选择

---

## 6. 社区活力与技术成熟度

### 活跃度层级

| 层级 | 项目 | 解读 |
|------|----------|----------------|
| **快速迭代** | OpenClaw, ZeroClaw | 每天 500 条 PR/issue；功能密集开发；可能仍在 1.0 之前 |
| **活跃开发** | Hermes Agent | 稳定迭代；网关统一工作；趋于稳定 |
| **维护状态** | QwenPaw | 数量较低但持续；v2.3.0 模块化进行中 |
| **不活跃** | IronClaw | 24 小时无活动；已废弃或停滞 |

### 稳定性与破坏性变更

- **破坏性变更**：OpenClaw（近期 Gateway 合并）、Hermes（统一运行时合并）、ZeroClaw（runtime/gateway 在 v0.9.0 中拆分）
- **重构中**：QwenPaw（筹备 v2.3.0 模块化）
- **稳定期**：活跃项目中似乎都未进入仅维护阶段

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **网关架构是关键瓶颈**：四个项目中就有三个（OpenClaw、Hermes、ZeroClaw）正在重构网关/会话处理，这证实了集中式会话编排是规模化时的核心痛点。

2. **SQLite 在大规模场景下是普遍难题**：OpenClaw 和 Hermes 都报告了 WAL 竞争、无限制增长、事件循环卡死等问题——这对于使用本地状态的任何代理来说都是常见挑战。

3. **安全正在走向成熟**：ZeroClaw 明确的安全问题分诊（allowed_commands 绕过、凭证处理）和进程隔离工作，表明生态系统正从"能工作"走向"安全可靠"。

4. **媒体处理仍是容易摘取的果实**：QwenPaw 中围绕音频/视频拒绝的会话卡死 bug 表明，健壮地处理 LLM 提供商的拒绝仍未得到解决——高影响力的修复将惠及所有项目。

5. **模块化插件系统正在获得关注**：ZeroClaw 的 WASM 方案和 QwenPaw 的 v2.3.0 模块化努力表明，生态系统正在从单体工具转向可扩展架构。

6. **移动端代理支持尚处于早期**：只有 OpenClaw 在 Android/Talk 方面有显著投入；其他项目专注于桌面/Web——跨项目移动端对齐存在机会。

### 对 AI 代理开发者的价值

- **架构模式**：Gateway 拆分（ZeroClaw）与整合（Hermes）的争论为新项目提供了决策框架
- **常见陷阱**：数据库竞争、媒体拒绝处理和会话恢复在各项目中有详细文档——可借鉴前车之鉴
- **安全基线**：ZeroClaw 的安全优先分诊提供了威胁建模的模板
- **集成点**：多渠道支持（Discord、Slack、钉钉）分散——存在共享抽象的机会

---

*跨项目分析基于 2026-10-18 当日活动数据编译*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest from English to Simplified Chinese. Let me carefully follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - register of a Chinese developer newsletter, not literal word-for-word

Let me translate this carefully, maintaining all the structure and technical terms.

Key translations to consider:
- "Tracking issue" -> 跟踪issue / 追踪issue
- "post-merge fixes" -> 合并后修复
- "PR" -> PR (keep as is)
- "P0/P1/P2/P3" -> P0/P1/P2/P3 (keep as is)
- "closed/merged" -> 已关闭/已合并
- "CLI" -> CLI (keep)
- "TUI" -> TUI (keep)
- "Desktop" -> Desktop (keep, or use 桌面端)
- "gateway" -> 网关
- "session" -> 会话
- "skill" -> 技能
- "bot-mode" -> 机器人模式
- "cron" -> 定时任务
- "credentials" -> 凭据
- "bug" -> Bug
- "feature" -> 特性/功能
- "regression" -> 回归问题
- "dependency sync" -> 依赖同步

Let me translate now, keeping all the structure:</think>

# Hermes Agent 项目摘要 — 2026-10-18

## 今日概览

2026年10月18日，Hermes Agent 显示出高开发活跃度。过去24小时内，仓库共有 **50 个 issue 更新** 和 **50 个 PR 更新**，其中47个 PR 处于开放状态，3个已合并/关闭。没有发布新版本。目前项目主要聚焦于统一网关运行时的合并后修复工作（#106742），其跟踪 issue #134889 收到了大量关注（173条评论）。多个 P0/P1 级别的 Bug 正在处理中，主要涉及会话管理、网关所有权和 Desktop 客户端功能。整体健康状况表明开发活跃，多项稳定性改进正在推进中。

---

## 版本发布

过去24小时内**未发布新版本**。

---

## 项目进展

### 已合并/关闭的 PR（共计3个）

| PR | 标题 | 状态 |
|----|-----|------|
| [#129076](https://github.com/NousResearch/hermes-agent/pull/129076) | fix(local-runtime): vision capability probe must not autoload the model | **已关闭** |
| [#140752](https://github.com/NousResearch/hermes-agent/pull/140752) | fix(desktop): size the model menu by content instead of a fixed width | **已关闭** |
| [#19](https://github.com/NousResearch/hermes-agent/pull/19) | Enhance async tool execution and error handling in Hermes agent for Atropos integration | **已关闭** |

### 值得关注的开放 PR

| PR | 标题 | 关注领域 |
|----|-----|---------|
| [#140802](https://github.com/NousResearch/hermes-agent/pull/140802) | todo_list keeps 'done', 'complete' and 'in-progress' instead of resetting them to pending | 智能体行为 |
| [#140801](https://github.com/NousResearch/hermes-agent/pull/140801) | fix(bot-mode): preserve deliberate archive before reaper | 机器人模式 |
| [#140800](https://github.com/NousResearch/hermes-agent/pull/140800) | fix(cron): recheck delivery schema under the migration lock | 定时任务系统 |
| [#140799](https://github.com/NousResearch/hermes-agent/pull/140799) | fix(cron): serialize incident lifecycle mutations across processes | 定时任务系统 |
| [#140797](https://github.com/NousResearch/hermes-agent/pull/140797) | fix(bot-desktop): stop the Bot Desktop hiding its apps from computer_use | Bot Desktop |
| [#127836](https://github.com/NousResearch/hermes-agent/pull/127836) | feat(credentials): add /creds slash command + credential tool + encrypted store | 安全/用户体验 |

---

## 社区热点话题

### 互动最活跃的 Issue（按评论数排序）

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)** — **跟踪：一个网关拥有每个本地会话 — 合并后修复**（173条评论，P0）
   - *核心问题*：跟踪 `feat/unified-gateway-runtime`（#106742）10月14日合并后的修复工作。目标：所有与本地会话通信的入口应统一到一个网关下。
   - *潜在需求*：影响 CLI、网关、TUI 和 Desktop 组件的会话管理重大架构变更。由于用户遇到集成问题，社区关注度高。

2. **[#123864](https://github.com/NousResearch/hermes-agent/issues/123864)** — `[Bug]: hermes update 无法完成 PM 依赖同步`（5条评论，P2）
   - *核心问题*：虚拟插件工作区成员的额外依赖（`dev = pytest>=8,<9`）与核心开发组（`pytest==9.1.1`）冲突，导致 `hermes update` 失败。
   - *潜在需求*：依赖解析失败影响插件生态系统。

3. **[#135392](https://github.com/NousResearch/hermes-agent/issues/135392)** — `[Bug]: 新建 Nous Cloud 实例进入网关所有权重启循环`（4条评论，P0）
   - *核心问题*：新创建的 Nous Cloud 实例在环境更新后进入网关所有权/拒绝重启循环。
   - *潜在需求*：云端部署稳定性 — 对托管用户至关重要。

4. **[#119249](https://github.com/NousResearch/hermes-agent/issues/119249)** — `[Bug]: 自定义 provider 向不支持的 Ministral 模型发送 reasoning_effort`（4条评论，P2）
   - *核心问题*：`ministral-*` 系列模型不接受 `reasoning_effort` 参数，导致 API 错误。
   - *潜在需求*：模型兼容性 — 使用自定义 provider 路径配合 Mistral 模型的用户受影响。

---

## Bug 与稳定性

### 高危/严重级别（P0-P1）

| Issue | 标题 | 严重级别 | 修复 PR？ |
|-------|-----|---------|----------|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 统一网关合并后会话问题 | P0 | 进行中 |
| [#135392](https://github.com/NousResearch/hermes-agent/issues/135392) | Nous Cloud 网关所有权重启循环 | P0 | 无 |
| [#138934](https://github.com/NousResearch/hermes-agent/issues/138934) | Desktop — 作曲器队列条目重复，无法删除 | P2 | 无 |
| [#140758](https://github.com/NousResearch/hermes-agent/issues/140758) | 同模型后台审查丢失约40万预热缓存 token | P2 | 无 |

### 中等严重级别（P2）

| Issue | 标题 | 关注领域 |
|-------|-----|---------|
| [#123864](https://github.com/NousResearch/hermes-agent/issues/123864) | `hermes update` 无法完成 PM 依赖同步 | CLI/插件 |
| [#140403](https://github.com/NousResearch/hermes-agent/issues/140403) | 项目技能修复内容后仍被隔离 | 技能 |
| [#140720](https://github.com/NousResearch/hermes-agent/issues/140720) | Discord 原生斜杠命令启动从不自动建串 | Discord |
| [#140718](https://github.com/NousResearch/hermes-agent/issues/140718) | 异步委托完成静默挂起 | 网关 |
| [#140506](https://github.com/NousResearch/hermes-agent/issues/140506) | desktop 创建的会话恢复返回 not_found | 会话 |
| [#140706](https://github.com/NousResearch/hermes-agent/issues/140706) | 提升权限网关的客户端对等检查失败（Windows） | Desktop/Windows |

### 回归问题
Desktop 的看板通知策略问题（#138836）标记了近期网关变更引入的潜在回归问题。

---

## 特性请求与路线图信号

### 值得关注的特性请求

| Issue | 标题 | 优先级 | 潜在路线图信号 |
|-------|-----|-------|---------------|
| [#134024](https://github.com/NousResearch/hermes-agent/issues/134024) | 聊天消息列可选最大宽度限制（宽屏显示器可读行宽） | P3 | Desktop 用户体验改进 |
| [#132541](https://github.com/NousResearch/hermes-agent/issues/132541) | browser_vault_fill 无法触达跨域托管字段支付 iframe 内的卡号/CVV | P3 | 浏览器工具增强 |
| [#139612](https://github.com/NousResearch/hermes-agent/issues/139612) | 宿主机端持久化失败应像 OWNER_WAIT_S 那样分类 | P3 | 网关韧性 |
| [#140697](https://github.com/NousResearch/hermes-agent/issues/140697) | 特性：针对长时间运行任务的自主决策优先级技能 | P3 | 智能体能力 |
| [#96759](https://github.com/NousResearch/hermes-agent/issues/96759) | 支持 Desktop 实时转向中的截图/图片附件 | P3 | Desktop 用户体验 |

### 进行中的特性
- **#127836** — 凭据管理系统，含加密存储、`/creds` 命令和凭据工具（积极开发中）
- **#140750** — Dashboard 插件的按身份配置文件访问检查（积极开发中）

---

## 用户反馈总结

### 痛点识别

1. **会话管理碎片化** — 统一网关合并后，在 Desktop、CLI 和 TUI 中暴露了多个会话所有权问题。用户报告会话恢复失败、凭据不匹配、配置文件隔离失败等问题。

2. **Desktop 稳定性问题** — 多起报告涉及作曲器队列缺陷、模型选择器陈旧缓存、特定平台故障（Windows 提升权限网关）。

3. **缓存 Token 丢失** — 用户报告同模型后台审查时大量缓存 token 丢失（约40万预热 token，98% → 4%），直接影响成本效率。

4. **插件依赖冲突** — `hermes update` 因第三方插件额外依赖导致依赖同步失败，影响日常工作流。

### 积极信号
- 机器人模式改进（#140801）解决了长期存在的存档行为问题
- 定时任务系统修复（#140800、#140799）提高了计划任务交付的可靠性
- OpenCode 集成改进（#140755）与当前服务端点保持一致

---

## 待办关注

### 需要维护者关注的 Issue

| Issue | 标题 | 时长 | 关注原因 |
|-------|-----|-----|---------|
| [#108401](https://github.com/NousResearch/hermes-agent/issues/108401) | kanban boards list 在每行都打印活动看板的计数 | 约37天 | P3 但影响 CLI 可用性 |
| [#119249](https://github.com/NousResearch/hermes-agent/issues/119249) | 自定义 provider 向不支持的 Ministral 模型发送 reasoning_effort | 约26天 | 模型兼容性 |
| [#129076](https://github.com/NousResearch/hermes-agent/issues/129076) | 视觉能力探测自动加载模型（已关闭但仍有相关问题） | 已解决 | 监控后续反馈 |

### 长期运行的 PR
- **#127836**（凭据特性）— 自2026年9月29日开放；需持续关注以进行安全审查

---

*摘要基于 Hermes Agent 仓库数据生成 — 2026-10-18*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw project digest into Chinese (Simplified Chinese). I need to:

1. Translate all headings, body text, and table content
2. Keep all Markdown structure exactly as-is
3. Preserve URLs, issue/PR numbers, code references, version numbers
4. Use natural technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through the digest and translate section by section:

**Section 1: Today's Overview**
- "high development activity" → 高度开发活跃
- "new/active issues" → 新增/活跃issue
- "session-wedging bugs" → 会话卡死bug
- "regressions" → 回归问题

**Section 2: Releases**
- "No new releases" → 无新版本发布

**Section 3: Project Progress**
- "Merged/Closed PRs" → 已合并/关闭的PR
- "Opened/Active PRs" → 新开启/活跃的PR

**Section 4: Community Hot Topics**
- "Issues with Most Activity" → 活跃度最高的Issue

**Section 5: Bugs & Stability**
- "Reported Bugs" → 已报告的Bug
- "Ranked by Severity" → 按严重程度排序
- "session-wedging" → 会话卡死
- "permanent conversation breakage" → 会话永久性损坏

**Section 6: Feature Requests & Roadmap Signals**
- "Active Feature Request" → 活跃的功能请求

**Section 7: User Feedback Summary**
- "Pain Points Identified from Issues" → 从Issue中识别的痛点
- "Satisfaction Signals" → 满意度信号


- "Backlog Watch" → 待办事项关注
- "Long-Unanswered / High-Priority Items" → 长期未回复/高优先级事项

I'll ensure consistent use of Simplified Chinese terminology:
- PR → PR
- Issue → Issue
- UI → UI
- v2.2.2 → v2.2.2 (保持原样)
- Markdown → Markdown
- console → 控制台
- channel → 频道
- backend → 后端
- plugins → 插件

Technical translation principles require maintaining precision while ensuring readability in the target language.</think>

# QwenPaw 项目摘要 — 2026-10-18

## 1. 今日概览

2026年10月18日，QwenPaw 项目呈现**高度开发活跃**态势。过去24小时内共有 **24项** 更新：9个新增/活跃 Issue 和 15 个 PR（14个开启中，1个已合并）。所有 Issue 仍处于开启状态，表明调试和功能开发工作正在同步进行。近期发布的 **v2.2.2**（2026-10-15）似乎引入了若干回归问题，特别是围绕 UI 行为和媒体处理方面，这在多个 bug 报告中有所体现。项目同时释放了下一步主要方向信号——v2.3.0 将聚焦于模块化和可扩展性，并在积极修复媒体处理相关的关键会话卡死 bug。

---

## 2. 版本发布

**无新版本**发布。

最新版本仍为 **v2.2.2**（2026-10-15），该版本现已关联多个报告的 bug（见第五节）。

---

## 3. 项目进展

### 已合并/关闭的 PR（1个）

| PR | 标题 | 作者 |
|---|-------|--------|
| [#8296](https://github.com/agentscope-ai/QwenPaw/pull/8296) | fix(creator): 将 stale-pid 探测的 SystemError 视为 'peer not alive' | RerankerGuo |

此小修复解决了 creator 启动时探测过期进程 ID 时在 Windows 上的崩溃问题。

### 开启/活跃的 PR（14个）

重要进展：

| PR | 标题 | 规模 | 重点 |
|---|-------|------|-------|
| [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) | feat(apps): 新增 HarmonyOS 原生客户端 | XXXL | 新平台支持 |
| [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) | fix(agents): 停止向不支持视频的端点发送视频片段 | M | 媒体处理 — 修复 #8298 |
| [#8297](https://github.com/agentscope-ai/QwenPaw/pull/8297) | fix(memory): 升级 ReMe 并隔离内存监听器 | M | 内存子系统稳定性 |
| [#8231](https://github.com/agentscope-ai/QwenPaw/pull/8231) | fix(console): 持久化市场安装来源 | M | 插件生态 |
| [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) | fix(channels): 在显示边界隐藏注入的上下文块 | S | UI 优化 — 修复 #8293 |
| [#8287](https://github.com/agentscope-ai/QwenPaw/pull/8287) | fix(console): 修正思考强度滑块填充并稳定保存 | M | UX 修复 — 修复 #8286 |
| [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) | fix(agents): 识别 LM Studio 的音频零条数拒绝 | M | 媒体回退 — 修复 #8171 |
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | fix(agents): 识别 llama-server 和 DashScope 的音频拒绝 | S | 音频分类器增强 |

---

## 4. 社区热点

### 活跃度最高的 Issue（按评论数排序）

| Issue | 标题 | 评论数 |
|-------|-------|----------|
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | send_file_to_user 发送的音频文件导致会话永久卡死 | 5 |
| [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk 频道消息超过 3500 字符时退化为纯文本 | 4 |
| [#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) | Console 输入框发送后未清空 | 1 |
| [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | 视频文件导致会话永久卡死：422 video_url 错误 | 1 |

**分析：** 最高参与度的 Issue（#8171，5条评论）属于**一系列反复出现的媒体处理 bug**——通过 `send_file_to_user` 向 agent 发送音频/视频文件会导致会话卡死，后续所有对话轮次都会永久失效。这是一个自 #7015 就已存在的已知问题，在 #7024 中有部分修复，#7654 和 #8215 中仍在持续处理。该模式表明 QwenPaw 的媒体能力分类器在处理各类 LLM 提供商（LM Studio、DeepSeek、llama-server、DashScope）的拒绝响应时鲁棒性不足。

DingTalk Issue（#8278）凸显了一个特定频道的渲染回归：长消息的格式被静默丢失，影响了数据报告用例——这是一个功能性缺陷而非崩溃。

---

## 5. Bug 与稳定性

### 已报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 描述 | 修复 PR |
|----------|-------|-------------|--------|
| **严重** | [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) | 视频文件导致会话永久卡死（422 video_url 错误） | [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) |
| **严重** | [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | 音频文件导致会话永久卡死（LM Studio 400 错误） | [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) |
| **严重** | [#8290](https://github.com/agentscope-ai/QwenPaw/issues/8290) | 会话因视频拒绝而卡死（"At most 0 video(s) may be provided"） | — |
| **高** | [#8288](https://github.com/agentscope-ai/QwenPaw/issues/8288) | v2.2.2 大流对话冻结 UI，后端可能 SIGBUS 崩溃 | — |
| **中** | [#8300](https://github.com/agentscope-ai/QwenPaw/issues/8300) | Console 输入框发送后未清空（v2.2.2 回归） | — |
| **中** | [#8293](https://github.com/agentscope-ai/QwenPaw/issues/8293) | 注入的上下文块被暴露给频道用户作为助手文本 | [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) |
| **低** | [#8286](https://github.com/agentscope-ai/QwenPaw/issues/8286) | 思考强度滑块填充误导和闪烁 | [#8287](https://github.com/agentscope-ai/QwenPaw/pull/8287) |
| **低** | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk 超过 3500 字符时 Markdown/表格格式丢失 | — |

**关键观察：**
- **三个严重的会话卡死 bug** 均与向不支持的端点发送媒体（音频/视频）有关，导致会话永久性损坏。
- **v2.2.2 似乎引入了回归**（#8300、#8288），这些问题在 v2.2.1 中并不存在——大流对话冻结/SIGBUS 问题对生产稳定性尤其令人担忧。
- **多个修复 PR 已开启**（#8299、#8215、#8295、#8287），表明维护者正在积极处理这些问题。

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 描述 |
|-------|-------|-------------|
| [#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289) | 📢 让 QwenPaw 更轻量、更可扩展（将在 v2.3.0 中推出） | 插件重构以实现模块化；征集社区反馈 |

这是 **v2.3.0 的官方路线图信号**。团队正在积极征集以下方面的反馈：
- 用户需要的插件/扩展模式
- 当前架构的痛点
- 期望的模块化方向

### 可预测性评估
鉴于 Issue 明确标注"将在 v2.3.0 中推出"，且 #8164（HarmonyOS 客户端）同步进行，下一版本似乎聚焦于**平台扩展 + 架构模块化**。媒体处理相关修复可能会在 v2.3.0 之前的补丁版本中发布。

---

## 7. 用户反馈摘要

### 从 Issue 中识别的痛点

1. **会话持久性非常脆弱** — 用户报告发送单个音频/视频文件会导致对话永久损坏。这是影响最大的投诉（#8171、#8298、#8290）。用户无法恢复，必须开启新会话。

2. **v2.2.2 大对话回归** — 运行长时间 agent 对话的高级用户报告 UI 完全冻结和后端崩溃（SIGBUS），而这些问题在 v2.2.1 中未出现。

3. **DingTalk 格式丢失** — 依赖 DingTalk 进行数据报告的企业用户对长消息的 Markdown/表格格式静默退化感到沮丧。

4. **UI 细节待完善** — Console 输入框发送后未清空（#8300）和思考滑块视觉 bug（#8286）降低了 UI 质量信心，尽管功能上可接受。

### 满意度信号
- 社区活跃贡献：今天至少有 **两位首次贡献者** 开启了 PR（#8291、#7211）。
- 多个修复 PR 在推进中，表明维护响应迅速。

---

## 8. 待办事项关注

### 需要维护者关注的长期未回复/高优先级事项

| 事项 | 存在时间 | 描述 | 关注原因 |
|------|-----|-------------|---------|
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | 自 2026-09-09 起（约39天） | fix(agents): 识别 llama-server 和 DashScope 的音频拒绝 | 音频卡死修复链路的一部分；受分类器改进阻塞 |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 自 2026-08-21 起（约58天） | fix(runtime): 防止注入的上下文持久化（L，正在评审） | 大型 PR；处理上下文泄漏 — 高影响 |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | 自 2026-09-29 起（约19天） | fix(providers): 限制每个请求的内联媒体数 | 处理 payload 膨胀；网关字节限制 |
| [#8124](https://github.com/agentscope-ai/QwenPaw/pull/8124) | 自 2026-10-08 起（约10天） | fix(providers): 将内容检查错误路由到回退 | 影响阿里兼容网关可靠性 |
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | 自 2026-10-10 起（约8天） | 音频导致会话卡死 — 已知 bug 的第三次迭代 | 需要与 #8215、#7654 协调修复 |

**建议：** 音频/视频会话卡死 bug 系列（#8171、#8298、#8290、#7654、#8215）应作为单一协调修复进行优先处理，以避免分散的部分解决方案导致分歧。v2.2.2 中的大流对话冻结回归（#8288）也值得紧急调查，因为有明确的复现步骤和 v2.2.1 对比。

---

*基于 2026-10-18 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest to Simplified Chinese while preserving all the formatting, structure, and technical content exactly as it is. Let me go through and translate it while maintaining:

1. All Markdown headings
2. All tables (including alignment rows)
3. All lists (bullet and numbered)
4. Bold/italic formatting
5. URLs and links
6. Code references, issue/PR numbers
7. Technical terminology

Let me translate this carefully:

## 1. Today's Overview
## 2. Releases
## 3. Project Progress
## 4. Community Hot Topics
## 5. Bugs & Stability
## 6. Feature Requests & Roadmap Signals
## 7. User Feedback Summary
## 8. Backlog Watch

I'll maintain the table structures exactly as they are, including the alignment rows (|,---| etc.).</think>

# ZeroClaw 项目摘要 — 2026-10-18

## 1. 今日概览

ZeroClaw 今天呈现出**极高活动量**，过去 24 小时内有 49 个 Issue 和 50 个 PR 更新。项目正在积极推进 **v0.9.0 发布周期**，在运行时改进、网关分离和安全增强方面有大量开发工作。今天没有发布新版本，但有几个重要的 PR 推进到了审核阶段，包括工具选择变更和 Windows 守护进程进程隔离。Issue 追踪器显示第二阶段运行时工作（v0.8.6）和第三阶段网关分离（v0.9.0）正在持续推进，多个与安全相关的 bug 受到了关注。社区参与度很高，围绕 Discord 插件集成、技能审查功能和安全性加固等关键话题展开了讨论。

---

## 2. 发布

过去 24 小时内**未发布新版本**。

---

## 3. 项目进展

### 本日合并/关闭的 PR

| PR | 作者 | 描述 | 状态 |
|----|--------|-------------|--------|
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | JordanTheJet | **feat(tools): 添加可选的最小内置工具设置** — 内置工具现在通过 `[tools].optional` 选择，默认完整 (`["*"]`) | **已关闭** |
| [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) | IftekharUddin | **feat(cli): 添加 zeroclay plugin update 支持验证替换** — 插件更新支持失败回滚 | **已关闭** |
| [#11491](https://github.com/zeroclaw-labs/zeroclaw/issues/11491) | Audacity88 | 在 ZeroCode Config 中显示已保存与已应用配置的状态 | **已关闭** |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | Audacity88 | model_routing_config upsert_agent 配置重写 bug | **已关闭** |

### 活跃的重要 PR

| PR | 作者 | 描述 | 风险 |
|----|--------|-------------|------|
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | IftekharUddin | **fix(agents): 共享持久的重命名恢复** — 修复 agent 重命名后卡死状态 | **高** |
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | IftekharUddin | **feat(release): 交付 WASM 插件主机** — 集成工具选择变更和 Wasmtime 48.0.6 / Rustls 安全更新 | **高** |
| [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) | tidux | **fix(security): 在替换和子shell边界拆分 POSIX 命令** — Shell 命令扫描器改进 | — |
| [#11827](https://github.com/zeroclaw-labs/zeroclaw/pull/11827) | VladimirLewisII | **fix(daemon): 隔离 Windows 守护进程的进程树** — 带 kill-on-close 的 Job 对象 | — |
| [#11826](https://github.com/zeroclaw-labs/zeroclaw/pull/11826) | RustLangLatam | **fix(config): 使用 renameat2 发布密钥到 Android** | — |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | mov-xound-glitch | **fix(runtime): 拒绝泄露到文本中的工具调用信封** | **高** |
| [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) | mov-xound-glitch | **feat(runtime): 预轮次工具提示** (默认关闭标志) | **中** |

---

## 4. 社区热点话题

### 活跃度最高的 Issue（按评论数排序）

| Issue | 作者 | 标题 | 评论数 | 状态 |
|-------|--------|-------|----------|--------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Audacity88 | **[追踪] 运行时和网关交付 — v0.8.6 和 v0.9.0** | 10 | 进行中 |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | JonathanMcCormickJr | **Bug: "复制" 一键功能不工作** | 5 | 进行中 |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | JordanTheJet | **任务: 发布并验证 Discord 插件安装** | 4 | 进行中 |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | JordanTheJet | **Bug: SOP.toml 格式错误被静默丢弃** | 4 | 进行中 |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | Audacity88 | **功能: 为工具执行添加协作式取消** | 4 | 已关闭 |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | bryangruneberg | **Bug: Slack "正在思考…" 状态自 v0.8.5 起不再显示** | 3 | 进行中 |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | JordanTheJet | **功能: 完成公共运行时组合边界** | 3 | 进行中 |

### 分析

- **#7432** 作为第二阶段（v0.8.6）和第三阶段（v0.9.0）工作的中央追踪器，表明正在进行重大架构变更
- **#11418** 代表 TUI "复制" 功能中的一个影响工作流的用户-facing 问题
- **#10999** 追踪 Discord 插件集成，显示社区对频道集成的需求
- **#9786** 揭示了一个用户体验问题——配置验证静默失败，这是运维人员的常见痛点

---

## 5. Bug 与稳定性

### 严重（S0）— 数据丢失 / 安全风险

| Issue | 标题 | 严重级别 | 状态 |
|-------|-------|----------|--------|
| [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058) | `allowed_commands` 条目使高风险命令免受 `block_high_risk_commands` 限制 — 无提示运行、无审批、无日志 | S0 | 进行中 |
| [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | ZeroClaw 守护进程启动时提示输入 GitHub 凭证并阻塞 | S0 | 进行中 |

### 高（S1）— 工作流受阻

| Issue | 标题 | 严重级别 | 状态 |
|-------|-------|----------|--------|
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | "复制" 一键功能不工作 | S1 | 进行中 |
| [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | 循环检测器默认阈值过低 — 在大型图中阻止 agent | S1 | 进行中 |
| [#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087) | Windows — 关闭窗口后应用无法重新打开或退出 | S1 | 进行中 |

### 高（S2）— 降级行为

| Issue | 标题 | 严重级别 | 状态 | 修复 PR |
|-------|-------|----------|--------|--------|
| [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | max_image_turns 永不释放视觉路由 — 提供商在整个对话期间被锁定 | S2 | 进行中 | [#11716](https://github.com/zeroclaw-labs/zeroclaw/pull/11716) |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | 技能审查工具无法看到通过 skill_bundles 分配的技能 | S2 | 进行中 | — |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | 频道、网络钩子或网关轮次从不运行技能审查/创建 | S2 | 进行中 | — |
| [#9902](https://github.com/zeroclaw-labs/zeroclaw/issues/9902) | sop.max_concurrent_total 静默覆盖 per-SOP 配置，且未记录 | S2 | 进行中 | — |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | Slack "正在思考…" 状态不再在频道线程中显示 | S3→S2 | 进行中 | — |

---

## 6. 功能请求与路线图信号

### 活跃的功能工作（指向 v0.8.6 / v0.9.0）

| Issue | 标题 | 优先级 | 发布版本 |
|-------|-------|----------|---------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | **[追踪] 运行时和网关交付** | P2 | v0.9.0 |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | 完成公共运行时组合边界 | P1 | v0.8.7 |
| [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) | 添加带失败回滚的验证插件更新 | P1 | v0.8.6 |
| [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) | 在 call_local 中验证守护进程身份，共享一个 CLI 守护进程客户端 | P1 | — |
| [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) | 在 Windows 上验证命名管道服务器以实现实时身份验证编辑 | P2 | — |
| [#11793](https://github.com/zeroclaw-labs/zeroclaw/issues/11793) | 创建仅所有者可访问的数据目录，检查组/全局可写根目录 | — | v0.8.7 |
| [#11794](https://github.com/zeroclaw-labs/zeroclaw/issues/11794) | 配置生命周期锁的用户级运行时目录回退 | — | — |

### 本日新任务请求

| Issue | 标题 | 摘要 |
|-------|-------|---------|
| [#11788](https://github.com/zeroclaw-labs/zeroclaw/issues/11788) | 区分已配置但未选中的工具与不可用的工具 | 用于诊断显式内置配置无法生效的诊断信息 |
| [#11787](https://github.com/zeroclaw-labs/zeroclaw/issues/11787) | 对未知的 tools.optional 条目发出警告 | 对未知的可选工具名称发出警告 |

### 路线图信号

- **WASM 插件主机**将在支持的发布版本中交付（PR #11347）
- **Discord 插件**文档和端到端验证正在进行中（issue #10999）
- **运行时组合边界**重构正在推进（issue #10993）
- **工具选择**现在通过 `[tools].optional` 可选（PR #11221 已合并）

---

## 7. 用户反馈摘要

### 已识别的痛点

1. **配置静默失败** — 用户报告格式错误的 SOP.toml 完全静默（#9786），导致 SOP 不出现时令人困惑
2. **安全配置混淆** — `allowed_commands` 与 `block_high_risk_commands` 之间的交互令人费解，允许高风险命令在无审批的情况下运行（#11058）
3. **Windows 桌面问题** — 多次报告窗口关闭后应用无法重新打开或退出（#11087），影响桌面用户
4. **循环检测过于激进** — 默认 6 轮次的阈值阻止了复杂任务上的合法 agent 工作流（#11777）
5. **视觉路由粘连** — 多模态对话被永久锁定到视觉提供商，导致不必要的成本（#11706）
6. **技能包可见性** — 通过 skill_bundles 加载的技能对技能审查工具不可见（#11333）

### 积极信号

- 插件更新带验证替换已合并（#11262）
- 最小工具选择功能已合并（#11221）— 提供更多控制
- WASM 插件主机正在发布（#11347）
- 多方面正在进行安全性加固

---

## 8. 待处理事项

### 需要维护者关注的 Issue

| Issue | 标题 | 时长 | 状态 | 关注点 |
|-------|-------|-----|--------|---------|
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | SOP.toml 格式错误被静默丢弃 | ~2.5 月 | 已确认 | 用户影响：静默配置失败 |
| [#9902](https://github.com/zeroclaw-labs/zeroclaw/issues/9902) | sop.max_concurrent_total 未被记录，静默覆盖 | ~2 月 | 已确认 | 文档缺口 |
| [#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058) | allowed_commands 绕过安全阻止 | ~1 月 | 进行中 | 安全漏洞 |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | 技能审查工具无法看到 skill_bundles | ~2 周 | 已确认 | 功能回退 |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | 频道从不运行技能审查/创建 | ~2 周 | 已确认 | 学习循环不完整 |

### 待审核/处理的 PR

| PR | 标题 | 状态 | 备注 |
|----|-------|--------|-------|
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | 跨 CLI/网关/RPC 的 Agent 重命名恢复 | 进行中 | 需要作者处理，高风险 |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | 拒绝文本中的工具调用信封 | 进行中 | 与 #11299 叠加 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 委托超出轮次的 workspace/tool 上限 | 进行中 | 需要作者处理，高风险 |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | Anthropic 存储的 OAuth 配置文件 | 进行中 | 受信任贡献者，长期运行 |

---

*根据 ZeroClaw 活动数据生成 — 2026-10-18*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*