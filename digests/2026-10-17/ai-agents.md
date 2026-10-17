# OpenClaw 生态日报 2026-10-17

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-17 00:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English OpenClaw Project Digest into Chinese (Simplified Chinese), following the detailed translation rules provided. Let me carefully translate this while preserving:

1. All Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
2. All URLs, issue/PR references, numbers, dates, file paths, code identifiers as-is
3. Technical Chinese register - natural, like a developer newsletter
4. The tone and style of the original

Let me translate section by section:

---

# OpenClaw 项目简报 — 2026-10-17

## 1. 今日概览

OpenClaw 保持高活跃度，过去 24 小时内有 **500 个 issue** 和 **500 个 PR** 更新。项目呈现平衡的发展态势：220 个开放 PR 对比 280 个已合并/关闭，377 个开放 issue 对比 123 个已关闭。然而，本简报揭示了**重大稳定性问题**：多个 P0/P1 缺陷涉及消息丢失、崩溃循环和启动回归——尤其在 Windows 上。今天未发布新版本。社区参与度高，SQLite WAL 膨胀等问题收到了 131 条评论，但大量关键缺陷表明最近版本的用户面临较高的运维风险。

---

## 2. 版本发布

今天无新版本发布。

---

## 3. 项目进展

| PR | 标题 | 状态 |
|---|---|---|
| [#174726](https://github.com/openclaw/openclaw/pull/174726) | 重构(state): 移除重复的验证和工作线程生命周期所有者 | ⏳ 等待作者 |
| [#174259](https://github.com/openclaw/openclaw/pull/174259) | 修复(agents): 强制一个隔离的完成期限 | ⏳ 等待作者 |
| [#174881](https://github.com/openclaw/openclaw/pull/174881) | 修复: 在 OpenAI Responses 中保留引擎所有

权的历史记录 | ⏳ 等待作者 |
| [#174893](https://github.com/openclaw/openclaw/pull/174893) | 重构(auto-reply): 移除重复的回复诊断 | 开放 |
| [#174866](https://github.com/openclaw/openclaw/pull/174866) | 性能(ui): 按需加载展开的工具详情 | ⏳ 等待作者 |
| [#174874](https://github.com/openclaw/openclaw/pull/174874) | 性能(memory): 跨索引源批量写入块 | 开放 |
| [#174786](https://github.com/openclaw/openclaw/pull/174786) | 修复(database): 修复 PostgreSQL 网关启动和恢复 | 📣 需要验证 |
| [#174884](https://github.com/openclaw/openclaw/pull/174884) | 修复(telegram): 回复以文件形式发送的图片 | 📣 需要验证 |
| [#174425](https://github.com/openclaw/openclaw/pull/174425) | 修复(mcp): 向嵌入代理传递 MCP 服务器指令 | ⏳ 等待作者 |
| [#173773](https://github.com/openclaw/openclaw/pull/173773) | 功能(ui): 选择预设、生成或上传的代理头像 | ⏳ 等待作者 |

**关键主题:**

多个核心重构涉及状态和数据库层面的优化，包括 SQLite 和 PostgreSQL 的复杂度管理。同时在内存和 UI 方面进行了性能调优，代理隔离机制也得到改进以处理截止日期问题。PostgreSQL 支持持续完善，项目通过这些改进逐步强化基础设施，同时逐步优化用户体验。

社区关注的焦点集中在 SQLite WAL 膨胀问题——用户在 Windows 上经历 1.4-2.8 GB 的文件增长，导致网关启动阻塞，这是单一网关部署的关键故障。并发会话处理也存在持续性问题，涉及竞态条件导致重复或丢失回复，表明会话通道调度器存在未解决的并发边界情况。插件资源消耗严重，每次 CLI 命令重写 1.1-1.4 GB，表明源码捕获机制缺乏去重或缓存机制。

稳定性方面存在多个发布阻塞问题，包括 SQLite WAL 增长、启动阻塞、FICLONE EPERM 错误、插件激活失败和更新挂起等问题。高严重性缺陷涉及回复丢失、重复发送、启动回归、插件资源消耗和消息静默丢弃等问题。

Windows 相关问题尤为突出，涉及冷启动挂起、启动缓慢、任务计划问题等。消息丢失在多个问题中出现，表明生产部署存在关键风险，且所有高优先级问题都缺乏修复拉取请求，表明存在显著的工作积压。

功能需求方面包括 SecretRef 对象支持、重复保护功能、内存工具期限尊重和缓存优化等改进方向，这些暗示了版本更新的可能方向。性能优化和稳定性修复也在推进中。

用户反馈主要集中在数据库膨胀问题，特别是 SQLite WAL 文件膨胀导致的启动阻塞和 SSD 损耗问题。Windows 可靠性也引发担忧，冷启动延迟和启动缓慢影响使用体验。消息丢失问题缺乏重试和失败提示机制，插件资源消耗也存在类似问题。

并发运行还会产生重复回复。不过内存批量写入和 UI 延迟加载的改进得到了认可，PostgreSQL 支持和 Telegram 端到端加密功能也在持续进展中。

部分问题需要维护者关注，包括 Windows 冷启动超时、内存 dreaming 运行占用网关事件循环、Codex 应用服务器停滞等。

这些未解决的严重问题已持续超过三个月。

项目名称、用户名、版本标签和文件路径保持原样，技术术语采用自然的中文技术表达方式，避免逐字翻译。</think>

# OpenClaw 项目简报 — 2026-10-17

## 1. 今日概览

OpenClaw 保持高活跃度，过去 24 小时内有 **500 个 issue** 和 **500 个 PR** 更新。项目呈现平衡的发展态势：220 个开放 PR 对比 280 个已合并/关闭，377 个开放 issue 对比 123 个已关闭。然而，本简报揭示了**重大稳定性问题**：多个 P0/P1 缺陷涉及消息丢失、崩溃循环和启动回归——尤其在 Windows 上。今天未发布新版本。社区参与热度高，SQLite WAL 膨胀等问题收到了 131 条评论，但大量关键缺陷表明最近版本的用户面临较高的运维风险。

---

## 2. 版本发布

今天无新版本发布。

---

## 3. 项目进展

| PR | 标题 | 状态 |
|---|---|---|
| [#174726](https://github.com/openclaw/openclaw/pull/174726) | 重构(state): 移除重复的验证和工作线程生命周期所有者 | ⏳ 等待作者 |
| [#174259](https://github.com/openclaw/openclaw/pull/174259) | 修复(agents): 强制一个隔离的完成期限 | ⏳ 等待作者 |
| [#174881](https://github.com/openclaw/openclaw/pull/174881) | 修复: 在 OpenAI Responses 中保留引擎所有权的历史记录 | ⏳ 等待作者 |
| [#174893](https://github.com/openclaw/openclaw/pull/174893) | 重构(auto-reply): 移除重复的回复诊断 | 开放 |
| [#174866](https://github.com/openclaw/openclaw/pull/174866) | 性能(ui): 按需加载展开的工具详情 | ⏳ 等待作者 |
| [#174874](https://github.com/openclaw/openclaw/pull/174874) | 性能(memory): 跨索引源批量写入块 | 开放 |
| [#174786](https://github.com/openclaw/openclaw/pull/174786) | 修复(database): 修复 PostgreSQL Gateway 启动和恢复 | 📣 需要验证 |
| [#174884](https://github.com/openclaw/openclaw/pull/174884) | 修复(telegram): 回复以文件形式发送的图片 | 📣 需要验证 |
| [#174425](https://github.com/openclaw/openclaw/pull/174425) | 修复(mcp): 向嵌入代理传递 MCP 服务器指令 | ⏳ 等待作者 |
| [#173773](https://github.com/openclaw/openclaw/pull/173773) | 功能(ui): 选择预设、生成或上传的代理头像 | ⏳ 等待作者 |

**关键主题：**

- **状态/数据库重构** 占主导地位（#174726, #174786）—— 处理 SQLite/PostgreSQL 复杂度
- **性能优化** 涉及 memory 和 UI（#174874, #174866）
- **代理隔离改进**（#174259）—— 修复截止日期处理
- **PostgreSQL 支持** 持续完善（#174786）

---

## 4. 社区热点话题

### 参与度最高的 Issue

| Issue | 标题 | 评论数 | 反应数 | 优先级 |
|---|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 在数天内膨胀至 1.4–2.8 GB，尽管设置了 wal_autocheckpoint=1000 | 131 | 0 | P0 |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | llama.cpp manager 报告就绪但 embedding 子进程已退出 | 28 | 0 | P2 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大规模 SQLite 记录清理阻塞 gateway 事件循环 | 22 | 0 | P2 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 回复丢失："Reply operation has no active tool authority snapshot" | 21 | 0 | P1 |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同一会话通道的两次并发运行产生重复回复 | 19 | 1 | P1 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码捕获每个 CLI 命令重写约 1.1–1.4 GB | 18 | 0 | P1 |

**分析：**

1. **SQLite WAL 膨胀（#143524）** 是讨论最多的问题——运维人员遇到 **1.4–2.8 GB WAL 文件**永不checkpoint，在 Windows 上阻塞 Gateway 启动。这对单 Gateway 部署来说是**严重的运维故障**。

2. **并发会话处理** 是反复出现的主题（#148707, #111897）—— 都涉及并发场景下回复丢失或重复的竞态条件。这表明会话通道调度器存在未解决的并发边界情况。

3. **插件资源消耗（#157989）** — 每次 CLI 命令重写 1.1–1.4 GB 导致**严重的 SSD 损耗**，表明源码捕获机制缺乏去重或缓存机制。

---

## 5. 缺陷与稳定性

### P0（发布阻塞 / 严重）

| Issue | 标题 | 影响 | 修复 PR？ |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 膨胀至 1.4–2.8 GB | 消息丢失，崩溃循环 | 无 |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | 启动阻塞 Gateway 事件循环 40–200s，健康监控误判为断连 | 崩溃循环 | 无 |
| [#164113](https://github.com/openclaw/openclaw/issues/164113) | update 在 updater-runtime-retention 步骤因 FICLONE EPERM 失败（LXC 环境） | 用户体验-发布阻塞 | 无 |
| [#152275](https://github.com/openclaw/openclaw/issues/152275) | 提交后插件激活失败导致模型目录不可用 | 崩溃循环 | 无 |
| [#173764](https://github.com/openclaw/openclaw/issues/173764) | openclaw update 在激活后 doctor 步骤挂起（2026.10.10-beta.1） | 崩溃循环 | 无 |

### P1（高严重性）

| Issue | 标题 | 影响 |
|---|---|---|
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 第二次运行替换进行中的回合时回复丢失 | 消息丢失 |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 并发运行产生重复回复 | 会话状态 |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 启动回归：1030s vs 410s（2026.10.1） | 用户体验-卡顿 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码捕获每个 CLI 命令重写 1.1–1.4 GB，SSD 损耗 | 崩溃循环 |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 入站消息静默丢弃（零负载分发） | 消息丢失 |

**观察：**

- **Windows 特异性问题突出**：冷启动挂起（5-7 分钟或静默退出）、启动缓慢（1030s vs 410s）、通过 `schtasks` 重启不可靠，任务计划权限错误（#170956）、MSIX Codex 饥饿（#167406）
- **消息丢失** 出现在 4+ 个问题中——对生产部署至关重要
- **所有 P0 问题均无修复 PR**，表明存在大量积压

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 优先级 | 信号 |
|---|---|---|---|
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | 允许在 `mcp.servers[].env` schema 中使用 SecretRef 对象 | P2 | 安全最佳实践要求 secret 间接引用 |
| [#44965](https://github.com/openclaw/openclaw/issues/44965) | 功能请求：流式重复保护（暂停并确认） | P2 | 解决无限循环刷屏问题；10 条评论 |
| [#104719](https://github.com/openclaw/openclaw/issues/104719) | memory-wiki 补充穷举回退忽略工具截止日期 | P1 | 内存工具需要尊重截止日期 |
| [#143017](https://github.com/openclaw/openclaw/issues/143017) | 提示缓存：持久会话重写前缀的五种方式 | P2 | 浪费 21.3M 缓存写入 token——显著成本 |

**可能的下个版本信号：**

- **安全增强**：SecretRef 支持（#76493）和工具白名单（#174547 进行中）
- **内存优化**：批量块写入（#174874 今日合并）
- **稳定性修复**：SQLite checkpoint、Windows 启动、并发会话处理

---

## 7. 用户反馈总结

### 痛点

1. **数据库膨胀无法忍受**：多名用户报告 SQLite WAL 文件**在数天内达到 2.8 GB**，导致启动阻塞和 SSD 损耗。`wal_autocheckpoint=1000` 设置被忽略。
2. **Windows 可靠性堪忧**：通过任务计划模式冷启动挂起 5-7+ 分钟、静默退出、启动缓慢（1030s vs 410s）等问题占据主导。
3. **消息丢失静默发生**：用户报告回复消失（#148707）、消息静默丢弃（#112259），无重试、死信或失败提示 UI。
4. **插件源码捕获具有破坏性**：每个 CLI 命令重写 1.1–1.4 GB、每次 Gateway 启动重写 6.5 GB——用户警告**严重 SSD 损耗**。
5. **并发运行导致重复**：同一会话通道的两次运行都完成并发送冗余回复。

### 满意度信号

- **内存批量写入**（#174874）和 **UI 懒加载**（#174866）改进受到好评
- **PostgreSQL 支持** 持续推进（#174786）
- **Telegram E2E** 功能进展中（#123837）

---

## 8. 积压关注

### 需要维护者关注的问题（>7 天无活动）

| Issue | 标题 | 时长 | 状态 |
|---|---|---|---|
| [#140161](https://github.com/openclaw/openclaw/issues/140161) | Windows: Gateway 冷启动在任务计划模式挂起 5-7+ 分钟 | 2026-09-06 | ⏳ 停滞 |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming 运行占用 Gateway 事件循环约 10 分钟 | 2026-07-04 | ⏳ 停滞 |
| [#110702](https://github.com/openclaw/openclaw/issues/110702) | Codex app-server 停顿在稳定版 2026.6.11 仍会发生 | 2026-07-18 | ⏳ 停滞 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1: 入站图片阻塞主通道约 3 分钟 | 2026-06-25 | ⏳ 停滞 |
| [#106704](https://github.com/openclaw/openclaw/issues/106704) | 子代理首回合的 sessions_yield 静默终结运行 | 2026-07-13 | ⏳ 停滞 |

**注意：** 以上五项均标记为停滞但保持开放。它们代表了**持续 3+ 个月的未解决生产故障**。

---

*基于 OpenClaw GitHub 数据生成 — 2026-10-17*

---

## 横向生态对比

<think>The user wants me to translate this entire cross-project comparison report into Chinese. Let me analyze what I need to do:

1. Translate all the content into Simplified Chinese
2. Keep all Markdown structure exactly as-is
3. Keep all project names, URLs, issue numbers, version tags, etc. in their original form
4. Use natural technical Chinese register (the kind used in Chinese developer newsletters)
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through and translate section by section, maintaining the exact structure:

## 1. Ecosystem Overview
## 2. Activity Comparison (table)
## 3. OpenClaw's Position
### Advantages vs Peers
### Technical Approach Differences
### Community Size Comparison
## 4. Shared Technical Focus Areas
### Requirements Emerging Across Multiple Projects (table)
### Cross-Project Insight
## 5. Differentiation Analysis (table)
### Key Differentiators
## 6. Community Momentum & Maturity
### Activity Tiers (table)
### Which Are Rapidly Iterating, Which Are Stabilizing
### Maturity Signals
## 7. Trend Signals
### Industry Trends Extracted from Community Feedback (table)
### Value for AI Agent Developers

And all the content within each section.

Let me translate:</think>

# 跨项目对比报告：OpenClaw、Hermes Agent、QwenPaw、ZeroClaw

## 1. 生态概览

个人 AI 助手与智能体框架领域当前正经历所有主要开源项目的同步活跃期。从今天的快照来看，四个并行演进的生态系统——OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw——都在应对相似的技术挑战：数据库可靠性、并发会话处理、多平台消息集成以及 Windows 兼容性。整体格局由**快速迭代周期**（所有项目都保持每日多次 PR 更新）加上**显著的稳定性债务**所主导——特别是生产环境加固方面的问题，如消息丢失、启动回退和内存膨胀。本次四个项目均未发布新版本，说明当前的工作重点是进行中的稳定性修复，而非版本发布。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Issue（24小时）** | 500 | 50 | 14 | 33 |
| **PR（24小时）** | 500 | 50 | 30 | 50 |
| **Open Issues** | 377 | 40 | — | — |
| **Closed Issues** | 123 | 10 | — | — |
| **Open PRs** | 220 | 49 | — | 43 |
| **Merged/Closed PRs** | 280 | 1 | 7 | 7 |
| **Release（24小时）** | 0 | 0 | 0 | 0 |
| **最新版本** | — | — | v2.2.2 (2026-10-15) | — |
| **P0 Issue** | 5+ | 1 | 0 | 2 |

**健康度评估：**

- **OpenClaw**：高活动量，高风险——体量巨大但关键 bug 未解决（SQLite WAL、消息丢失）
- **Hermes Agent**：中等活动量，趋于稳定——统一网关重构后的修复包正在协调推进
- **QwenPaw**：中等活动量，健康——聚焦 bug 修复稳步推进，近期有稳定版本
- **ZeroClaw**：高活动量，中等风险——v0.9.0 在研中，存在一个阻塞用户的 S0 级别回归问题

---

## 3. OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw | 对比 |
|-----------|----------|------------|
| **活动规模** | 每日 500 issues/PR — 10 倍于 Hermes/QwenPaw | 按体量领先；表明用户基数更大或 issue 产生率更高 |
| **社区参与度** | Issue #143524（SQLite WAL）有 131 条评论 | 单 Issue 参与度最高；说明社区活跃于故障排查 |
| **发布节奏** | 当前无版本，但保持活跃 | Hermes 有稳定版本；QwenPaw 刚发布 v2.2.2；ZeroClaw 临近 v0.8.6 |
| **架构** | 统一网关运行时，SQLite 优先 | 比 Hermes 的多网关方案更统一 |

### 技术路线差异

- **OpenClaw** 采用统一网关架构，SQLite 作为主存储，针对单实例部署优化
- **Hermes Agent** 近期完成了同类迁移（统一网关 v0.9），从多网关模型转型而来
- **ZeroClaw** 正在推进 Phase 2/3 网关分离，有意**背离**统一架构，朝分布式运行时方向演进
- **QwenPaw** 以控制台优先、智能体插件/UI 为核心，商业模式与网关模式完全不同

### 社区规模对比

OpenClaw 每日 500 次更新表明其用户规模显著更大，或人均 issue 产生率更高。Hermes、QwenPaw 和 ZeroClaw 都保持在每日 30–50 PR 水平，用户基数较小但仍保持活跃。OpenClaw 的评论量（热点 issue 有 131 条）远超所有竞品，表明其社区文化更偏向故障排查驱动。

---

## 4. 共同技术焦点

### 多项目共同面临的需求

| 焦点领域 | OpenClaw | Hermes | QwenPaw | ZeroClaw | 备注 |
|------------|----------|--------|---------|----------|-------|
| **数据库可靠性** | ✅ | ✅ | ✅ | ✅ | SQLite WAL 膨胀（#143524）、检查点、transcript 清理阻塞事件循环 |
| **Windows 兼容性** | ✅ | ✅ | ✅ | ✅ | 启动卡顿、冷启动、ZIP 编码、schtasks 失败、区域设置问题 |
| **消息丢失/投递** | ✅ | ✅ | — | ✅ | 静默丢弃（#112259、#148707、#11257）、重复回复、卡死问题 |
| **并发会话处理** | ✅ | ✅ | — | ✅ | 会话通道、重复回复、运行时竞态条件 |
| **插件/技能管理** | — | ✅ | ✅ | ✅ | 下载取消、热重载、卸载安全、工作区钩子 |
| **启动性能** | ✅ | — | — | ✅ | 事件循环阻塞、40–200 秒延迟、回归问题 |
| **渠道集成** | ✅ | — | ✅ | ✅ | WhatsApp、Telegram、钉钉、邮件——媒体caption处理、回退失败 |
| **安全加固** | — | ✅ | ✅ | ✅ | 环境变量凭证、工具审批模式、技能守卫 |

### 跨项目洞察

**数据库可靠性危机**是四个项目共同面临的最紧迫问题。OpenClaw 的 1.4–2.8 GB WAL 增长、Hermes 的 transcript 清理阻塞、QwenPaw 的聊天记录膨胀（10 MB+ payloads）都指向一个根本性挑战：**如何处理无限制的会话状态，同时避免阻塞事件循环或消耗过多磁盘空间**。各项目正在独立迭代解决方案——这是跨项目技术交流的潜在领域。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---------|----------|--------------|---------|----------|
| **主要目标** | 网关运营商、自托管部署 | 高级用户、MCP 集成者 | 企业控制台用户 | 开发者导向、WASM 插件 |
| **核心模式** | 统一网关运行时 | 统一网关运行时（近期） | 控制台优先、聊天 UI | 进行中的网关分离 |
| **数据存储** | SQLite 优先 | PostgreSQL + SQLite | 文件式/控制台 | 配置驱动、文件式 |
| **稳定姿态** | P0 积压紧急 | 重构后稳定中 | 近期稳定版本 | 临近发布（v0.8.6） |
| **UI 强调** | 极简（网关） | 桌面端 + 网页 | 控制台 + Hub | ZeroCode UI |
| **安全重点** | 工具白名单 | 环境变量凭证、vault | 决策模型审批 | TLS 加固、所有权检查 |
| **社区文化** | 故障排查驱动（热点 issue 131 条评论） | 协调修复包模式 | 功能驱动 | 发布驱动 |

### 关键差异化因素

1. **OpenClaw** 是规模领导者，但稳定性债务最重；最适合需要最大化控制且能容忍活跃调试的用户。
2. **Hermes Agent** 处于重构后的有意稳定阶段；更适合想要更精致、近期经过加固的系统。
3. **QwenPaw** 面向企业控制台用户，提供精美的 UI；稳定性风险最低，但工作流最具强制性。
4. **ZeroClaw** 面向构建自定义智能体工作流的开发者；通过 WASM 和插件系统实现最快扩展路径。

---

## 6. 社区动能与成熟度

### 活动层级

| 层级 | 项目 | 指标 |
|------|------|------|
| **快速迭代** | OpenClaw、ZeroClaw | 每日 50+ PR，多个活跃修复包，P0 问题推进中 |
| **活跃开发** | Hermes Agent、QwenPaw | 每日 30–50 PR，稳步 bug 修复，近期稳定发布 |
| **稳定维护** | QwenPaw（v2.2.2 后） | Issue 量低，PR 关闭率高，维护模式 |
| **回归恢复** | Hermes Agent（#106742 后）、OpenClaw（P0 积压） | 活跃修复 PR 但关键 bug 未解决 |

### 快速迭代 vs 稳定中的项目

- **OpenClaw**：快速迭代但**不健康**——P0 bug 缺少修复 PR，表明资源紧张或分类积压
- **Hermes Agent**：快速迭代且**恢复中**——7 个协调修复包正在积极推进
- **QwenPaw**：v2.2.2 后趋于稳定——聚焦 bug 修复（聊天记录膨胀、钉钉、滚动）
- **ZeroClaw**：临近发布冲刺——v0.8.6/v0.9.0 跟踪中，有阻塞用户的回归 S0 问题

### 成熟度信号

- **发布节奏**：QwenPaw（最近）、ZeroClaw（即将）、Hermes（稳定）、OpenClaw（停滞）
- **安全态势**：四个项目都有活跃的安全修复；Hermes 领先于 CVE 追踪
- **文档建设**：Hermes 有结构化文档工作；QwenPaw 有 Hub 集成；OpenClaw/ZeroClaw 依赖 Issue 讨论

---

## 7. 趋势信号

### 从社区反馈中提炼的行业趋势

| 趋势 | 证据 | 影响 |
|------|------|------|
| **数据库可靠性是第一运营阻塞点** | 四个项目都面临 SQLite/transcript 膨胀问题 | 预计整个生态系统将投入大量重构资源；SQLite 替代方案（PostgreSQL、嵌入式 OLAP）关注度上升 |
| **Windows 是二等公民** | 启动卡顿、ZIP 编码、schtasks、冷启动——四个项目都受影响 | 跨平台一致性需要专门的 Windows 工程投入；考虑自动化 Windows CI |
| **消息投递保证不足** | 静默丢弃、重复回复、卡死——三个项目受影响 | 需要明确的投递回执、死信队列、重试上限；这是产品层面的差距 |
| **插件/技能生命周期不成熟** | 取消、热重载、钩子触发、去重——四个项目都在迭代 | 插件系统需要标准化；WASM 运行时（ZeroClaw）可能成为参考 |
| **企业功能正在涌现** | 全局技能分享（QwenPaw）、密钥引用（OpenClaw）、基于角色的访问（Hermes） | 项目正 converge 于企业就绪作为差异化因素 |
| **重构后稳定是可预测阶段** | Hermes 刚完成统一网关迁移；OpenClaw 正在经历危机 | 大架构变更（如网关统一）会造成 4–8 周不稳定窗口 |

### 对 AI 智能体开发者的价值

对于构建或贡献于 AI 智能体框架的开发者：

1. **避免在高容量会话中使用 SQLite**——生产环境考虑 PostgreSQL 或嵌入式 OLAP；四个项目都撞到了同样的天花板
2. **投资 Windows CI/CD**——跨项目的 Windows 痛点表明生态系统测试覆盖不足
3. **研究 Hermes 的修复包模式**——7 车道协调推进重构后稳定的方法，是管理复杂迁移的模板
4. **关注 ZeroClaw 的 WASM 插件工作**——如果成功，可能为智能体可扩展性建立新标准
5. **监控 QwenPaw 的 Hub/社区集成**——智能体"应用商店"模式是潜在增长向量

---

*跨项目分析基于 2026 年 10 月 17 日 OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw 的快照编制。*

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Chinese, following specific rules. Let me analyze the content and translate it appropriately while preserving the structure.

Key points to remember:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, issue/PR references, technical terms, code, numbers, dates as-is
- Use natural technical Chinese register (like a Chinese developer newsletter)

Let me translate section by section:

1. Title and date
2. Overview section
3. Releases section
4. Project Progress section
5. Community Hot Topics section
6. Bugs & Stability section
7. Feature Requests & Roadmap Signals section
8. User Feedback Summary section
9. Backlog Watch section
10. Footer with generation date

Let me do this translation:</think>

# Hermes Agent 项目摘要
## 2026-10-17

---

### 1. 今日概览

Hermes Agent 项目在过去 24 小时内保持高活动状态，共有 50 个 issue 和 50 个 PR 更新。今天的主要主题是围绕 10 月 14 日合并的重大 `feat/unified-gateway-runtime` PR (#106742) 展开的修复稳定化工作。一个大规模的协调工作正在进行中，涉及 7 个"修复包"，涵盖网关、ACP、桌面端和消息平台等方面的回归 bug。今天没有发布新版本，但项目 PR 活动活跃——过去一天内有 49 个开放的拉取请求，仅 1 个已合并/关闭。安全和稳定性问题是活跃 issue 列表中的重点内容，有几个 P1 级别的 bug 需要立即处理。

---

### 2. 发布动态

**今天没有新版本发布。** 项目的上一个标签版本似乎是 v0.22.2，在 issue #139099 中提及该稳定版频道在主分支的 git 安装上导致了更新失败。

---

### 3. 项目进展

过去 24 小时内正式 PR 合并有限（50 个更新中仅 1 个合并/关闭），表明项目正处于密集的代码审查和测试阶段。当前开发工作集中在统一网关运行时的修复包上：

- **第 7 个修复包** (#140138) 是主要焦点，有多个 PR 正在处理 5 条并行车道的修复：
  - PR #140187：网关本地机器人和花名册修复
  - PR #140186：WhatsApp TIME-WAIT、飞书、Discord 语音修复
  - PR #140191：serve/dashboard 会话写入修复
  - PR #140190：ACP 命名回复和覆盖首页修复
  - PR #140188：ACP 思考/计划/工具状态事件映射
  - PR #140185：Telegram 唤醒锚点和心跳修复
  - PR #140184：更新前 API 会话密钥采用
  - PR #140183：持久化会话重新打开修复
  - PR #140182：桌面端固定项移除和快照读取

- PR #140212：UTF-16 BOM 文件编辑修复（工具/文件）
- PR #140109：中断的本地模型下载恢复
- PR #140210：技能防护安全修复（缺少提供商令牌格式）
- PR #140211：浏览器保险库填充会话隔离
- PR #135733：Docker 代理浏览器暂存
- PR #140144：新增 field-academy 插件

---

### 4. 社区热点

最活跃的讨论围绕统一网关运行时迁移展开：

1. **[#134889] 追踪：一个网关拥有每个本地会话** — 131 条评论
   - 链接：https://github.com/NousResearch/hermes-agent/issues/134889
   - 重大 #106742 统一网关运行时重构后的修复追踪 issue。涵盖会话所有权、消息传递和平台兼容性。这是当前开发活动的中心。

2. **[#107402] `hermes update` 留下永久性的"未重启运行中的网关"警告** — 23 条评论
   - 链接：https://github.com/NousResearch/hermes-agent/issues/107402
   - 用户在更新器推迟网关重启时会看到持久性警告。舰队验证立即发生，而进行中的工作单元仍在完成中。

3. **[#62336] [安全] 终端环境快照将含凭据的环境变量捕获到磁盘** — 13 条评论
   - 链接：https:// NousResearch/hermes-agent/issues/62336
   - 一个安全问题：终端环境快照将所有环境变量（包括 `bws run --` 和 Bitwarden Secrets Manager 中的敏感凭据）持久化到 `cache/terminal/hermes...` 磁盘。

4. **[#50148] 添加 Nextcloud Talk 作为消息平台适配器** — 7 条评论，15 👍
   - 链接：https://github.com/NousResearch/hermes-agent/issues/50148
   - 社区贡献的功能请求，需要一个 Nextcloud Talk 适配器，遵循现有的 Mattermost/Signal/Telegram 适配器模式。作者表示已有可 PR 的实现。

5. **[#110126] 输出限制/截断是一个跨四个子系统的系统性故障类别** — 6 条评论
   - 链接：https://github.com/NousResearch/hermes-agent/issues/110126
   - 一个元 issue，追踪 35+ 个与输出截断（`finish_reason='length'`）相关的独立问题，被认定为跨四个独立子系统的系统性故障，DeepSeek V4 是根本原因。

---

### 5. Bug 与稳定性

**P0（紧急）：**

- **[#126351] 溢出的工具结果在 24 小时后被删除，但转录告诉模型文件"已在磁盘上"**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/126351
  - 超过持久化阈值的工具结果被删除，但转录指示模型不要重新请求它们，可能导致幻觉。

**P1（高）：**

- **[#134889] 统一网关运行时的合并后修复**（见第 4 节）
- **[#140041] 重新启动后网关崩溃循环，当陈旧的主机所有权记录的 PID 被重用时**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/140041
  - 网关在重新启动后以退出码 75 崩溃循环，原因是 PID 重用，启动时间匹配过于宽松。

- **[#107402] hermes update 留下永久性警告**（见第 4 节）

- **[#136281] 更新检查失败：hermes-assets.nousresearch.com 返回 404**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/136281
  - 稳定版频道 URL 返回 HTTP 404，导致更新检查失败。

- **[#133744] 重新启动后 PID 重用永远卡住受监管的网关**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/133744

**P2（中）：**

- **[#99988] Cron 故障总结器误标非认证错误**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/99988
  - 正则扫描错误地将各种错误归类为"提供商认证错误"。

- **[#129008] 桌面端下载非媒体附件失败**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/129008
  - 远程/SSH 模式下 PDF、DOCX、ZIP 等下载失败，提示"回复从未发送"。

- **[#140189] 网关无限重试未送达的进程完成通知**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/140189
  - 无退避、无上限、无解释的被拒绝通知。

- **[#133880] display_order 在约 3 万行上重放漂移**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/133880
  - 长转录由于渲染顺序与 ID 不一致，导致答案渲染在问题之上。

**已有修复 PR：** 第 3 节详述的第 7 个修复包 PR 解决了许多此类 bug。

---

### 6. 功能请求与路线图信号

- **[#50148] Nextcloud Talk 消息平台适配器** — 15 👍，准备 PR
  - 链接：https://github.com/NousResearch/hermes-agent/issues/50148
  - 社区对 Nextcloud 集成有强烈兴趣；实现已就绪。

- **[#44075] 会话历史的语义搜索（混合 BM25 + 向量）** — 4 条评论，1 👍
  - 链接：https://github.com/NousResearch/hermes-agent/issues/44075
  - 当前 FTS5 关键词匹配有限；向量搜索可实现"我们做了什么关于智能家居"这样的语义查询。

- **[#133601] 通过 `hermes mcp serve` 暴露本地桌面/CLI 会话**
  - 链接：https://github.com/NousResearch/hermes-agent/issues/133601
  - 通过 MCP 实现本地会话只读监督的功能请求。

- **[#43302] 供应商锚定的密钥格式模式用于严格作用域** — 安全功能进行中
  - 链接：https://github.com/NousResearch/hermes-agent/pull/43302

---

### 7. 用户反馈总结

**痛点：**

1. **更新系统故障：** 多名用户受 `hermes-assets.nousresearch.com/stable.json` 破损（Issue #136281）和 git 安装更新失败（#139099）影响。

2. **macOS 本地网络访问：** 桌面应用因缺少 `NSLocalNetworkUsageDescription`（#81563）而静默失败，无法访问本地网络设备。

3. **Windows 平台问题：** 报告了多个 Windows 特定 bug，包括 Edge 配置文件快照启动已退出登录（#133659）和 SSH 后端上的项目文件夹路径重写（#140204）。

4. **凭据安全：** 终端环境快照安全 issue（#62336）对敏感工作流程用户是一个重大担忧。

**积极信号：**

- 强大的社区贡献管道，有准备好的 PR 功能（#50148）
- 积极的安全姿态，修复了多个 CVE（Issue #127791、#134333）
- 强大的修复基础设施，协调多车道 PR 包

---

### 8. 待办事项关注

以下 issue 较旧或需要维护者关注：

- **[#110126] 输出限制/截断系统性故障** — 35+ 相关 issue，需要作为协调计划优先处理
  - 链接：https://github.com/NousResearch/hermes-agent/issues/110126

- **[#44075] 语义搜索功能** — 自 2026 年 6 月开放，有社区兴趣
  - 链接：https://github.com/NousResearch/hermes-agent/issues/44075

- **[#62336] 安全：终端环境快照凭据** — 自 2026 年 7 月开放，需要安全审查
  - 链接：https://github.com/NousResearch/hermes-agent/issues/62336

- **[#50148] Nextcloud Talk 适配器** — 实现就绪，等待 PR 审查
  - 链接：https://github.com/NousResearch/hermes-agent/issues/50148

- **[#59560] Desktop 忽略 custom_providers.models 列表** — 自 2026 年 7 月开放
  - 链接：https://github.com/NousResearch/hermes-agent/issues/59560

---

*生成时间：2026-10-17 | 数据来源：GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this QwenPaw project digest into Simplified Chinese. I need to:

1. Translate all the content into Chinese
2. Keep all the Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, code identifiers, file paths, etc. in their original form
4. Use natural technical Chinese register

Let me go through each section and translate while maintaining the structure.</think>

# QwenPaw 项目简报 — 2026-10-17

## 1. 今日概览

QwenPaw 保持高开发活跃度，过去 24 小时内共有 **30 个 PR** 和 **14 个 Issue** 更新。项目处于 v2.2.2 稳定版发布后的阶段，多项增强功能正在推进中。重点领域包括 **工具提供商扩展**（Firecrawl、Serply）、**控制台 UI 优化**（滚动、导航、配置编辑器），以及 **关键 bug 修复**（聊天历史膨胀、DingTalk 消息格式问题）。社区正在积极贡献新功能，同时稳定性问题也得到了及时关注。

---

## 2. 发布动态

### QwenPaw v2.2.2（稳定版）

- **发布日期：** 2026-10-15
- **状态：** 已验证，稳定
- **主要变更：** 本次稳定版发布包含共享模型配置、基于数据源的数据集选择、用户作用域分析会话，以及 QwenPaw-Data 运行时 0.3.3。
- **参考：** Issue #8262

*过去 24 小时内无新发布。*

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 |
|---|-----|------|
| [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875) | docs(pawapp): specify Creator create-video control plane | CLOSED |
| [#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205) | feat(models): add TypeSafe decision model configuration | CLOSED |
| [#8273](https://github.com/agentscope-ai/QwenPaw/pull/8273) | fix(console): update chat dependency for navigation | CLOSED |
| [#8263](https://github.com/agentscope-ai/QwenPaw/pull/8263) | fix(console): unblock config editors and polish chat controls | CLOSED |
| [#8239](https://github.com/agentscope-ai/QwenPaw/pull/8239) | feat(chat): support inline UI plugins and scoped message submission | CLOSED |
| [#8271](https://github.com/agentscope-ai/QwenPaw/pull/8271) | refactor(console): polish web search config guards and error icon | CLOSED |
| [#8272](https://github.com/agentscope-ai/QwenPaw/pull/8272) | fix(console): clear chat input on submission | CLOSED |

### 推进中的活跃 PR

| PR | 标题 | 规模 | 重点领域 |
|---|-----|------|----------|
| [#8285](https://github.com/agentscope-ai/QwenPaw/pull/8285) | feat(skills): make skill-pool downloads cancellable jobs | XL | 后端 |
| [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) | fix(chat): truncate oversized tool outputs when serving chat history | M | 核心功能 |
| [#8248](https://github.com/agentscope-ai/QwenPaw/pull/8248) | feat(plugins): add inline OpenUI support for Intelligent UI | XXXL | 插件系统 |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | feat(plugins): add clean unload and rollback-safe hot reload | XXXL | 插件系统 |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | feat(community): integrate QwenPaw community and inbox | XXXL | 社区功能 |
| [#8283](https://github.com/agentscope-ai/QwenPaw/pull/8283) | feat(security): add decision-model-backed tool approval mode | XL | 安全 |
| [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) | feat(tools): add Serply as a web_search provider | M | 工具 |
| [#8200](https://github.com/agentscope-ai/QwenPaw/pull/8200) | feat(tools): add Firecrawl as a web_search provider | M | 工具 |

---

## 4. 社区热点

### 互动最多的 Issue（按评论数排序）

| Issue | 标题 | 状态 | 评论 |
|-------|-----|------|------|
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | [Feature]: Make skill-pool download a cancellable background job | OPEN | 7 |
| [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | [enhancement] web_search built-in tavily provider has no API-key config surface | CLOSED | 4 |
| [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | [Bug]: DingTalk 通道在消息 >3500 字符时整条降级为纯文本 | OPEN | 3 |
| [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228) | Chat history bloat — file & screenshot tool outputs stored as base64 | OPEN | 2 |
| [#8251](https://github.com/agentscope-ai/QwenPaw/issues/8251) | [Bug][Console] Message-navigation directory cannot locate accurately | CLOSED | 2 |

**分析：** 最高互动围绕 **技能池下载可取消** 功能（#8126），反映了用户对非阻塞操作的需求。DingTalk 格式问题（#8278）和聊天历史膨胀（#8228）都指向大内容处理问题——可能与企业用户生成大量富含数据的对话相关。Tavily API 密钥配置缺口（#8174）已关闭，展示了响应式维护。

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度/影响排序）

| 严重程度 | Issue | 描述 | 修复 PR |
|----------|-------|------|---------|
| **高** | [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228) | 聊天历史膨胀：base64 工具输出使会话达到 10 MB+，触发 30 秒超时 | [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) |
| **高** | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk：消息超过 3500 字符降级为纯文本，Markdown/表格失效 | — |
| **高** | [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) | 控制台鼠标滚轮滚动卡住——消息区高度重新计算会将视图弹回 | — |
| **中** | [#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279) | 长期运行的 ReMe 监听器耗尽 AnyIO 线程限制器，导致 HTTP 端点阻塞 | — |
| **中** | [#8280](https://github.com/agentscope-ai/QwenPaw/issues/8280) | 缺少 file_id/file_data 导致 OpenAI 兼容提供商返回 400 拒绝 | — |
| **中** | [#8281](https://github.com/agentscope-ai/QwenPaw/issues/8281) | reload_agent() 不触发 workspace_created 钩子——运行时钩子被静默丢弃 | — |
| **中** | [#8270](https://github.com/agentscope-ai/QwenPaw/issues/8270) | Windows ZIP 文件名乱码，ZipFile 缺少编码参数 | — |
| **低** | [#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276) | ReMe 排序器接受空 api_key，失败以"意外错误"形式呈现 | — |

**修复进度：** PR #8229 已解决关键聊天历史膨胀问题。PR #8285 解决相关技能池下载问题。

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 理由 |
|-------|-----|------|
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | Make skill-pool download a cancellable background job | 大技能/池用户面临 30 秒超时；需要进度 UI + 明确取消 |
| [#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275) | 建议 QwenPaw Hub 支持全局 Skill 和 MCP 统一管理与共享 | 团队使用需要共享的全局 Skill/MCP——避免每个用户重复配置 |
| [#7712](https://github.com/agentscope-ai/QwenPaw/pull/7712) | Add Serply as web_search provider | BYOK 模式——通过 REST 添加 Google 结果，可选 |
| [#8200](https://github.com/agentscope-ai/QwenPaw/pull/8200) | Add Firecrawl as web_search provider | 替代搜索提供商，爬取更灵活 |
| [#8283](https://github.com/agentscope-ai/QwenPaw/pull/8283) | Decision-model-backed tool approval mode | 工具执行安全增强 |

**路线图信号：** 根据活跃 PR，下一版本可能重点关注：
1. **非阻塞操作**（技能下载、文件处理）
2. **企业级就绪**（全局 Skill/MCP 共享、DingTalk 表格支持）
3. **搜索提供商多元化**（Serply、Firecrawl 新增）
4. **控制台 UX 优化**（滚动、导航、配置流程）

---

## 7. 用户反馈总结

### 痛点识别

1. **长对话变得无法使用** — `tool_result` 中的 base64 文件存储产生 10 MB+  payloads，在典型网络速度下可靠地触发控制台超时。用户无法访问文件/截图历史。

2. **DingTalk 表格静默损坏** — 超过 3500 字符的消息丢失所有格式。这直接影响需要表格的数据报告用例。

3. **Windows ZIP 解压文件名校验** — 中国/亚洲区域 Windows 用户由于 ZipFile 处理缺少编码参数，无法导入技能或 Hub 下载。

4. **长会话滚动失效** — 控制台鼠标滚轮滚动"卡住"，因为消息区高度重新计算会将视图弹回，使得在扩展对话中导航令人沮丧。

### 满意度指标

- TypeSafe 决策模型配置（#8205）——因灵活性获积极反馈
- 控制台配置编辑器解锁（#8263）——解决了常见痛点
- 内联 UI 插件支持（#8239）——实现更丰富的交互体验

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 标题 | 存在时间 | 关注点 |
|-------|-----|----------|--------|
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | feat(plugins): add clean unload and rollback-safe hot reload | 约 6 周 | 大型 PR (XXXL) 待审；对插件稳定性关键 |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | feat(community): integrate QwenPaw community and inbox | 约 4 周 | 大型 PR (XXXL)；对平台增长战略重要 |
| [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) | Console wheel scrolling stuck | 1 天 | 新近但用户影响大 |
| [#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279) | ReMe watchers exhaust AnyIO thread limiter | 1 天 | 生产稳定性风险 |

**注意：** 大型插件和社区集成 PR（#7565、#7903）代表重大架构变更，可能需要加速审查以解锁依赖工作。

---

*简报根据 2026-10-17 的 GitHub 数据生成。所有链接指向 agentscope-ai/QwenPaw。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical terms, code, URLs, issue/PR numbers, and identifiers in their original form
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Preserve the exact Markdown structure including tables, lists, headings, etc.

Let me go through and translate section by section, maintaining the exact format.</think>

# ZeroClaw 项目动态 — 2026-10-17

## 1. 今日概览

ZeroClaw 今日开发活动频繁，过去 24 小时内有 **50 个 PR** 和 **33 个 Issue** 更新。项目正积极推进 **v0.9.0** 版本，重点关注第三阶段网关分离和运行时整合。今日未发布新版本，但多个高优先级 PR 正在审核中。问题追踪显示内存/冲突处理、渠道集成（尤其是 WhatsApp 和邮件）以及 ZeroCode UI 方面持续有改进。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 |
|----|-----|------|
| [#11181](https://github.com/zeroclaw-labs/zeroclaw/pull/11181) | feat(runtime): preserve per-message steering provenance | 已关闭 |
| [#11467](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) | feat(agent): add opt-in single-tool provider rounds | 已关闭 |
| [#11573](https://github.com/zeroclaw-labs/zeroclaw/pull/11573) | feat(zerocode): drag session rows and switch sessions by number | 已关闭 |
| [#11697](https://github.com/zeroclaw-labs/zeroclaw/pull/11697) | docs(runtime): propose holding-crate exceptions for cost limits | 已关闭 |
| [#11693](https://github.com/zeroclaw-labs/zeroclaw/pull/11693) | fix(tools): preserve targeted agent upserts | 已关闭 |

### 关键进展

- **单工具 Provider 轮次** (#11467)：已合并可选功能，允许 Agent 按序处理工具并显式控制原生 Provider。
- **会话持久化** (#11573)：用户现在可以在 ZeroCode 侧边栏拖拽会话行，并通过编号切换会话。
- ** Steering 溯源** (#11181)：Gateway WebSocket 和 RPC steering 现已为注入消息附加来源事实，提升可审计性。
- **Agent Upsert 修复** (#11693)：`model_routing_config upsert_agent` 现在保留省略字段，而非重建整个配置。

---

## 4. 社区热点话题

### 活跃度最高的 Issue（按评论数）

| Issue | 评论数 | 概要 |
|-------|--------|------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 8 | **[追踪]: Runtime 和 Gateway 交付 - v0.8.6 及 v0.9.0** — v0.8.6 的第二阶段 runtime 工作和 v0.9.0 的第三阶段网关分离 |
| [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | 4 | **Bug: Core 冲突覆盖隐藏了无关记忆** — 默认 embedding_provider="none" 导致整合时软隐藏无关的 Core 记忆 |
| [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | 3 | **Feature: 回合整合的目标分类可配置** — 请求 `memory.consolidation_category` 选项 |
| [#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) | 3 | **任务: x86_64 Linux 发布二进制文件接近 64 MiB 上限** — 需要决定发布大小门槛的处理方式 |
| [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | 3 | **Bug: ZeroCode Agent 回合禁用了重复工具保护** — 重复的 web_fetch 调用绕过了循环保护 |
| [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) | 3 | **Bug: OpenCode 429 重试间隔小于一秒** — 配额耗尽时应快速失败 |

### 分析

- **第二/三阶段追踪器** (#7432) 吸引最多关注，作为 v0.8.6 和 v0.9.0 交付物的协调中心。
- **内存整合** (#11655, #11657) 显示用户积极讨论 ZeroClaw 在回合期间如何处理持久化内存。
- **发布大小** (#11580) 表明团队即将发布 v0.8.6，但需先确定二进制大小策略。

---

## 5. Bug 与稳定性

### 严重和高优先级 Bug

| Issue | 严重程度 | 状态 | 概要 |
|-------|----------|------|------|
| [#11796](https://github.com/zeroclaw-labs/zeroclaw/issues/11796) | **S0** | 打开 | **ZeroClaw 守护进程启动时提示输入 GitHub 凭证并阻塞** — 突发回归，阻止守护进程启动 |
| [#11777](https://github.com/zeroclaw-labs/zeroclaw/issues/11777) | **S1** | 打开 | **循环检测器默认阈值过低** — 工作流被复杂图形操作阻塞 |
| [#11519](https://github.com/zeroclaw-labs/zeroclaw/issues/11519) | **S1** | 已关闭 | **恢复的工作区分割隐藏了已安装插件** — 修复进行中，将随 v0.8.6 发布 |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | **S1** | 已关闭 | **model_routing_config upsert_agent 重写整个配置** — 字段丢失，重置限制 |

### 中等优先级问题

- **WhatsApp Web** 丢弃入站图片/视频/文档的标题 (#11257)
- **邮件渠道** 重启后回复同一封邮件 (#11760)，获取时遗漏邮件 (#11761)
- **WhatsApp Web** 在无提示的情况下丢弃未转录的语音消息 (#11764)
- **Windows 插件锁定** 锁定插件目录及其祖先目录 (#11359)

---

## 6. 特性请求与路线图信号

### 活跃中的特性 PR

| PR | 概要 | 预计目标版本 |
|----|------|---------------|
| [#11460](https://github.com/zeroclaw-labs/zeroclaw/pull/11460) | 重命名 Config 中的 Provider 别名 | v0.9.0 |
| [#11465](https://github.com/zeroclaw-labs/zeroclaw/pull/11465) | 为工具暴露协作式取消上下文 | v0.9.0 |
| [#11692](https://github.com/zeroclaw-labs/zeroclaw/pull/11692) | 在 ZeroCode 中显示 cost warn_at_percent | 近期 |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) | ZeroCode 重启时重新打开已打开的会话 | 近期 |
| [#10994](https://github.com/zeroclaw-labs/zeroclaw/issues/10994) | 交付支持的 WASM 插件运行时工件 | v0.8.6 |

### 新特性请求

- **可配置的整合分类** (#11657)：允许按回合整合写入 Core 以外的分类
- **带原因说明的 Shell 策略拒绝** (#11799)：解释命令被拒绝的原因，接受操作员提示
- **每个用户的运行时目录回退** (#11794)：支持无 Unix 权限的文件系统（WSL、CIFS、FAT）
- **数据目录所有权检查** (#11793)：创建仅所有者可访问的目录并检测全局可写的根目录

**预测**：v0.8.6 很可能在近日内发布（待二进制大小决策），v0.9.0 将在数周后跟进，包含网关分离和 WASM 插件支持。

---

## 7. 用户反馈摘要

### 痛点

1. **守护进程凭证阻塞** (#11796) — 用户遇到启动时突然要求 GitHub 认证的回归问题，影响生产使用。
2. **内存行为困惑** (#11655) — 禁用默认向量的用户看到意外的内存隐藏，表明文档存在缺口。
3. **循环检测器过于激进** (#11777) — 用户因阈值过低无法运行复杂图形。
4. **WhatsApp 媒体处理** (#11257, #11764) — 媒体标题丢失让期望完整对话上下文的用户感到沮丧。

### 积极信号

- 会话持久化改进 (#11573, #11727) 解决了长期以来的 UX 请求
- 单工具 Provider 轮次 (#11467) 满足了高级控制需求
- Telegram 未授权通知可配置性 (#11728) 由社区贡献推动

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 状态 | 关注点 |
|-------|----------|------|--------|
| [#10994](https://github.com/zeroclaw-labs/zeroclaw/issues/10994) | 约 27 天 | 已接受 | WASM 插件运行时工件 — v0.8.6 关键交付物 |
| [#10761](https://github.com/zeroclaw-labs/zeroclaw/issues/10761) | 约 37 天 | 进行中 | TLS 物化加固 — 安全关键，仍需完成 |
| [#10770](https://github.com/zeroclaw-labs/zeroclaw/issues/10770) | 约 36 天 | 进行中 | 插件安装恢复 — 部分进展，剩余事项不明确 |
| [#10577](https://github.com/zeroclaw-labs/zeroclaw/issues/10577) | 约 44 天 | 已接受 | 单工具 Provider 轮次 — PR #11467 已关闭，追踪 Issue 可能已过时 |

### 停滞的 PR

| PR | 存在时间 | 状态 | 备注 |
|----|----------|------|------|
| [#11135](https://github.com/zeroclaw-labs/zeroclaw/pull/11135) | 约 21 天 | 打开 | DeepSeek DSML 工具调用恢复 — 需要作者处理 |

---

*基于 ZeroClaw GitHub 数据生成 — 2026-10-17*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*