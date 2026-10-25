# OpenClaw 生态日报 2026-10-25

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-25 00:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the project digest into Chinese, following specific rules. Let me analyze the content and translate it appropriately while preserving all the formatting, links, numbers, and technical terms.

Key points:
1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Keep project names, issue/PR numbers, URLs, technical terms in original form
5. Keep emojis

Let me translate section by section:

## 1. Today's Overview
- 500 issues and 500 PRs updated in the last 24 hours → 最近24小时内更新了500个issue和500个PR
- high velocity → 保持高速开发
- replay-safe session recovery →  replay安全会话恢复
- critical P0 issues → 关键P0问题
- plugin capture performance → 插件捕获性能
- gateway stability → 网关稳定性

## 2. Releases
- Release Notes Highlights → 发布说明要点
- Replay-safe session recovery →  replay安全会话恢复
- interrupted sessions → 中断的会话
- recovery provenance → 恢复来源
- terminal recovery residue → 终端恢复残留
- Gateway-only extended-stable (LTS-equivalent) → 网关专属 extended-stable（LTS对等版）

## 3. Project Progress
- Recently Merged/Closed PRs → 最近合并/关闭的PR
- Active Development → 活跃开发
- Notable Open PRs → 值得注意的开放PR

## 4. Community Hot Topics
- Most Active Issues → 最活跃的Issue
- by comment count → 按评论数排序
- plugin performance → 插件性能
- regression issues → 回归问题


- session reliability → 会话可靠性
- UI/UX friction → UI/UX摩擦
- owner-signed responsibility gates → 所有者签名的责任门控
- privacy/security feature → 隐私/安全功能

I'll focus on the key translation nuances for Bug & Stability section. Critical issues involve plugin performance, session reliability, and system stability. I'll translate technical terms precisely while maintaining the original technical register. The section highlights significant challenges in performance, Windows-specific problems, and session management, emphasizing the need for careful technical translation that preserves the original technical context.

The most pressing issues include plugin capture blocking, state management problems, and regression challenges. These technical bottlenecks impact system reliability and require targeted resolution strategies. Windows-specific issues, particularly around auto-update failures and plugin staging, represent critical areas needing immediate attention.

Feature requests and roadmap signals indicate ongoing development priorities. The community shows active interest in provider resilience, model fallback mechanisms, and expanding the provider ecosystem. These signals suggest a strategic approach to system improvement, focusing on flexibility and performance optimization.

User feedback highlights significant pain points around gateway blocking, performance bottlenecks, and Windows-specific challenges. SSD wear, session reliability, and memory management emerge as key concerns. Conversely, positive signals include replay-safe session recovery and targeted performance fixes, demonstrating a commitment to continuous system refinement.

The backlog watch section reveals persistent issues requiring maintainer review. Long-unanswered problems span various categories - from tool parameter handling to matrix job preflight challenges. These stale issues underscore the complexity of maintaining a robust, scalable system.

The section highlights critical maintenance needs, with issues ranging from plugin capture blocking to auto-update failures. Key focus areas include gateway performance, checkpoint management, and Windows-specific technical hurdles.</think>

# OpenClaw 项目动态 — 2026-10-25

## 1. 今日概览

OpenClaw 保持高速开发节奏，**最近24小时内更新了500个issue和500个PR**，项目活跃度持续高涨。v2026.10.7 已发布，带来 replay 安全会话恢复等改进。社区参与积极，多个关键 P0 问题（插件捕获性能、网关稳定性）引发大量关注。近期 PR 以性能优化为主，同时存在多个影响 Windows 和会话处理的回归 bug 需要处理。

---

## 2. 版本发布

### v2026.10.7 — OpenClaw 2026.10.7
**发布说明要点：**
- **Replay 安全会话恢复：** 中断的会话现在保留恢复来源和未完成的工具结果；停止的对话在接收新消息前清除终端恢复残留；被拒绝的 Claude CLI 草稿不出现在最终回复中；大幅改进了会话恢复处理逻辑。

### v2026.9.34 — Gateway-only `extended-stable`（LTS 对等版）
- 2026年9月底的网关专属版本，包含关键安全更新、可靠性/性能修复和新模型支持功能。

---

## 3. 项目进度

### 最近合并/关闭的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#182934](https://github.com/openclaw/openclaw/pull/182934) | perf(sessions): share resident actor entries across projections | CLOSED |
| [#182982](https://github.com/openclaw/openclaw/pull/182982) | fix: restore standalone helper launches | CLOSED |
| [#182984](https://github.com/openclaw/openclaw/pull/182984) | fix: CLI runs stall for minutes scanning an agent database the Gateway already opened | CLOSED |
| [#155419](https://github.com/openclaw/openclaw/pull/155419) | refactor(mentions): keep Inbox database work off the Gateway thread | CLOSED |
| [#153812](https://github.com/openclaw/openclaw/pull/153812) | feat(ui): show session mention notifications | CLOSED |

### 活跃开发中（值得注意的开放 PR）

- [#183047](https://github.com/openclaw/openclaw/pull/183047) — perf(plugins): reuse prepared policy on recurring reads
- [#183042](https://github.com/openclaw/openclaw/pull/183042) — perf(ui): defer dormant chat work during cold boot (XL size, ci:full)
- [#183034](https://github.com/openclaw/openclaw/pull/183034) — improve(sessions): reduce transcript turn database round trips (XL size)
- [#183015](https://github.com/openclaw/openclaw/pull/183015) — fix(postgres): avoid full-table sorts for limited ordered reads
- [#182951](https://github.com/openclaw/openclaw/pull/182951) — fix(cli): route config mutations through a running Gateway (P0, blocking)
- [#176567](https://github.com/openclaw/openclaw/pull/176567) — fix(openai): realtime voice sockets bypass the managed proxy on Bun

---

## 4. 社区热点

### 评论最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 优先级 | 链接 |
|-------|------|--------|--------|------|
| #160959 | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | 50 | P0 | [查看](https://github.com/openclaw/openclaw/issues/160959) |
| #164294 | Gateway state DB WAL auto-checkpoint never completes (pinned by in-process reader) | 30 | P2 | [查看](https://github.com/openclaw/openclaw/issues/164294) |
| #159356 | llama.cpp manager reports ready while embedding child exits; embedding requests return HTTP 500 | 29 | P2 | [查看](https://github.com/openclaw/openclaw/issues/159356) |
| #157989 | Plugin source capture rewrites ~1.1–1.4 GB per CLI command (severe SSD wear) | 23 | P1 | [查看](https://github.com/openclaw/openclaw/issues/157989) |
| #53408 | Write/exec tool parameters silently dropped after long conversations | 15 | P2 | [查看](https://github.com/openclaw/openclaw/issues/53408) |
| #159789 | One failed native close permanently locks agent execution until gateway restart | 13 | P2 | [查看](https://github.com/openclaw/openclaw/issues/159789) |
| #164394 | Control UI WebChat transcript jitters continuously when scrolling | 12 | P2 | [查看](https://github.com/openclaw/openclaw/issues/164394) |
| #96675 | Owner-signed responsibility gates for assistant memory, actions, skills | 12 | P2 | [查看](https://github.com/openclaw/openclaw/issues/96675) |

### 分析
- **插件性能** 是主导主题：#160959 和 #157989 都涉及 2026.9.5-6 回归问题，关于外部插件捕获导致的严重阻塞和 SSD 损耗
- **会话可靠性** 问题（#159356、#159789）表明状态管理和恢复存在问题
- **UI/UX 摩擦** 出现在 #164394（滚动抖动）和 #53408（参数丢弃）
- **增强提案** #96675 请求为持久化记忆/技能复用添加所有者确认门控 — 这是一个隐私/安全功能

---

## 5. Bug 与稳定性

### 关键（P0）问题

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|------|----------|-----------|
| #160959 | Gateway blocks for minutes while capturing large external plugins | 🦞 diamond lobster, crash-loop | 无 |
| #182476 | update repair fails with OPENCLAW_STATE_LEASE_LOST on Windows | 🦐 gold shrimp, crash-loop | 无 |
| #181660 | Session read batch cannot reenter an active SQLite writer admission | 🦪 silver shellfish, UX release blocker | 无 |
| #153426 | Curated memory roots silently excluded from bootstrap injection | 🦞 diamond lobster, security, session-state | 无 |
| #150822 | Native Codex children advertise tools without execution handler | 🐚 platinum hermit, security | 无 |
| #166634 | Late reclamation commit checkpoint failure leaves agent unavailable | 🦪 silver shellfish, message-loss | 无 |
| #182951 | CLI config mutations fail when Gateway is running (regression) | 🐚 platinum hermit (P0) | 开放 PR |

### 已识别的回归问题
- **2026.9.6**：插件捕获阻塞（#144252 回归）
- **2026.10.5 → 2026.10.6**：Codex 应用服务器执行预算超时（每次主要轮次都失败）
- **2026.10.10-beta.3**：CLI config set/unset 在 Gateway 运行时拒绝操作（v2026.10.9 回归）

---

## 6. 功能请求与路线图信号

### 社区关注的活跃功能请求

| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| #96675 | Owner-signed responsibility gates for assistant memory, actions, skills | P2 | 12 条评论，功能增强 |
| #182712 | Limit-aware model fallback — skip candidates on exhausted provider account | P2 | 7 条评论，功能特性 |
| #155633 | Add Databricks Unity Gateway as official model provider | P2 | 10 条评论，集成 |
| #139477 | Honor `tools.toolSearch` for bundle-MCP CLI backends | 🦞 diamond lobster | 9 条评论 |
| #150598 | Proposal: completion-wake delivery semantics | 🌊 off-meta tidepool | 7 条评论 |

### 路线图信号
- **PostgreSQL 优化**（#183015）表明数据库后端成熟度工作正在进行
- **模型回退改进**（#182712）表明提供商弹性是优先事项
- **记忆/来源棘轮**（#153426）可能需要产品决策来确定策展语义
- **Databricks 集成**（#155633）显示提供商生态系统的扩展

---

## 7. 用户反馈总结

### 痛点

1. **网关阻塞与性能**
   - 外部插件加载阻塞事件循环数分钟（#160959）
   - WAL 检查点永不完成，从启动就阻塞（#164294）
   - 插件源捕获每个 CLI 命令重写约 1.1–1.4 GB，导致严重 SSD 损耗（#157989）

2. **Windows 特定问题**
   - 自动更新反复失败，有多种失败模式（#157812）
   - 插件暂存重新逐个实例化 npm 包，永不收敛（#162585）
   - 更新修复失败，报 lease lost（#182476）

3. **会话可靠性**
   - 一次 native close 失败就永久锁定 agent 执行，需重启网关（#159789）
   - 子 agent 完成消息静默丢失最终文本（#154299）
   - 会话自动压缩导致 23 分钟卡顿（#148292）

4. **记忆与状态**
   - MEMORY.md/USER.md 在来源被标记为不可信后静默排除在 bootstrap 之外（#153426）
   - 长对话后 Write/exec 工具参数静默丢弃（#53408）

### 满意度信号
- **v2026.10.7** 的 Replay 安全会话恢复解决了已知痛点
- **PostgreSQL 全表排序修复**（#183015）解决了性能投诉
- **CLI 数据库扫描卡顿修复**（#182984）解决了 Auto Review 工具慢的问题

---

## 8. 待办事项关注

### 长期未答的重要 Issue（陈旧，无修复 PR）

| Issue | 标题 | 存在时间 | 优先级 | 状态 |
|-------|------|----------|--------|------|
| #53408 | Write/exec tool parameters silently dropped after long conversations | 约7个月 | P2 | 陈旧，需要信息 |
| #145937 | QQ channel broken in 2026.9.x — crashes on every inbound | 约1.5个月 | P2 | 陈旧 |
| #149631 | PR preflight throws at 121 jobs against 120 Node matrix cap | 约1个月 | P2 | 陈旧 |
| #146902 | Same-session tool-set churn defeats prompt-cache reuse | 约1个月 | P2 | 陈旧 |
| #154104 | Idle Gateway with Matrix E2EE: ~50% CPU, 52 MB/min writes | 约1个月 | P2 | 陈旧 |

### 需要维护者审核的 Issue（高评论数，无修复 PR）

| Issue | 标题 | 评论数 | 需要 |
|-------|------|--------|------|
| #160959 | Gateway blocks for minutes (plugin capture) | 50 | 维护者审核，产品决策 |
| #164294 | WAL auto-checkpoint never completes | 30 | 维护者审核 |
| #159356 | llama.cpp embedding child exits | 29 | 维护者审核 |
| #157989 | Plugin source capture SSD wear | 23 | 维护者审核 |
| #157812 | Windows auto-update fails | 12 | 维护者审核 |

---

*本动态基于 OpenClaw GitHub 数据生成 — 2026-10-25*

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese, following specific rules about how to handle various elements. Let me go through the rules:

1. Output ONLY the translation - no preamble, explanation, or markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form - don't translate them
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter, not literal word-for-word

Let me translate this carefully, keeping the technical register appropriate for Chinese developers who work in this field.

Key terms to handle:
- "cross-project comparison report" - 跨项目对比报告
- "Personal AI Assistant Ecosystem" - 个人AI助手生态
- "Activity Comparison" - 活动对比
- "Health Score" - 健康度
- "session reliability" - 会话可靠性
- "plugin ecosystem" - 插件生态
- "memory system" - 内存系统
- "channel integrations" - 频道集成
- "LTS releases" - LTS版本（长期支持版）
- "Gateway-centric architecture" - 网关中心化架构
- "PostgreSQL backend" - PostgreSQL后端
- "release cadence" - 发布节奏
- "rolling releases" - 滚动发布
- "regression guards" - 回归防护

Let me translate the full report now:</think>

# 跨项目对比报告 — 个人AI助手生态

**日期：** 2026-10-25  
**范围：** OpenClaw、 Hermes Agent、 QwenPaw、 ZeroClaw、 IronClaw

---

## 1. 生态概览

2026年末的个人AI助手和智能体框架领域呈现出成熟但高度碎片化的格局。五个活跃项目（OpenClaw、 Hermes Agent、 QwenPaw、 ZeroClaw、 IronClaw）正在积极开发具备不同侧重点的自主智能体运行时：插件生态、频道集成、内存系统和企业级功能。市场正在向共同需求收敛——会话可靠性、多渠道支持、内存持久化、供应商灵活性——但在架构方法上存在分歧。除IronClaw外，所有项目近期活动都很活跃（24小时内更新了50–500条内容），IronClaw似乎已陷入停滞。

---

## 2. 活动对比

| 项目 | 问题更新（24小时） | PR更新（24小时） | 发布（24小时） | 健康度 |
|------|:-----------------:|:---------------:|:--------------:|:------:|
| **OpenClaw** | 500 | 500 | 2（v2026.10.7、v2026.9.34） | 🟢 极高 |
| **ZeroClaw** | 18 | 50 | 1（v0.8.7） | 🟢 极高 |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 高 |
| **QwenPaw** | 4 | 11 | 0 | 🟡 中等 |
| **IronClaw** | 0 | 0 | 0 | 🔴 停滞 |

*健康度：🟢 极高（>40条PR/天+近期发布）、🟢 高（活跃、有发布）、🟡 中等（有活动）、🔴 停滞（无活动）*

---

## 3. OpenClaw 的定位

### 相对优势

- **最高活动频率** — 24小时内更新了500个issue和500个PR，是下一个最活跃项目（ZeroClaw，50个PR）的10倍
- **发布节奏** — 持续推出小版本更新，包含回放安全的会话恢复功能，区别于仍在迭代核心稳定性的其他项目
- **社区规模** — 408个开放issue + 241个开放PR，表明贡献者基础远超QwenPaw（3个开放issue）或Hermes Agent（43个开放issue）
- **PostgreSQL后端** — 正在进行积极优化（全表排序修复、WAL检查点改进），为企业部署就绪度奠定基础

### 技术路线差异

- **网关中心化架构** — OpenClaw将持久化运行的Gateway守护进程作为核心，不同于Hermes Agent的独立CLI模式或ZeroClaw的守护进程+任务架构
- **LTS风格发布** — "extended-stable"（v2026.9.34）模式表明了对企业级稳定性的承诺，这在其他项目中尚未出现

### 社区规模对比

OpenClaw的issue/PR数量（500）表明其社区规模约为QwenPaw（4个issue，11个PR）的10倍，与Hermes Agent相当（50/50），但历史合并输出显著更多（259个已关闭PR vs Hermes的8个）。

---

## 4. 共同技术关注点

### 多项目共同需求

| 关注领域 | OpenClaw | Hermes | QwenPaw | ZeroClaw | 具体需求 |
|----------|:--------:|:------:|:-------:|:--------:|----------|
| **会话/内存可靠性** | ✅ | ✅ | ✅ | ✅ | 回放安全恢复、审计追踪、持久化内存与一致性 |
| **插件生态** | ✅ | ✅ | — | ✅ | Vault后端、延迟工具模式、准入控制 |
| **多渠道支持** | — | — | ✅ | ✅ | QQ流式传输、XMPP/OMEMO、邮件、Matrix |
| **Windows稳定性** | ✅ | ✅ | — | ✅ | 自动更新失败、state.db超时、租约文件 |
| **供应商灵活性** | — | ✅ | — | ✅ | 自定义OpenAI兼容端点、模型回退、上下文窗口处理 |
| **数据库优化** | ✅ | — | — | ✅ | PostgreSQL排序、WAL检查点、audit.db |

**观察：** 会话/内存可靠性和插件生态是四个活跃项目的共同关注点。这表明市场正在优先解决基础稳定性问题，而非功能扩展。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------|----------|--------------|---------|----------|
| **主要侧重点** | 网关可靠性、插件捕获性能 | 桌面客户端体验、会话可视化 | QQ/飞书频道、多智能体编排 | 频道生态（邮件、XMPP）、SOP引擎 |
| **目标用户** | 自托管高级用户、企业 | 桌面优先的终端用户 | 中国市场聊天平台（QQ、飞书） | 需要SOP/工作流自动化的开发者 |
| **架构** | 持久化Gateway守护进程 | 独立CLI + 桌面UI | AgentScope平台集成 | 守护进程 + 定时任务 + SOP引擎 |
| **发布模式** | 小版本 + LTS等价版本 | 滚动发布 | 偶尔补丁 | 频繁补丁（v0.8.x系列） |
| **内存系统** | Bootstrap注入、溯源追踪 | 插件内存、自动召回 | ReMe 0.4.2集成 | Markdown后端（并发写入问题） |
| **特色功能** | 回放安全会话恢复 | 浏览器Vault插件 | QQ C2C流式传输 | XMPP + OMEMO加密 |

---

## 6. 社区活力与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw、ZeroClaw | 50–500条PR/天，每周发布，积极功能开发 |
| **活跃开发** | Hermes Agent | 50条PR/天，稳定改进，专注于打磨 |
| **稳步推进** | QwenPaw | 11条PR/天，针对性优化频道功能 |
| **稳定/成熟** | — | 暂无项目明显进入维护模式 |
| **停滞** | IronClaw | 零活动——可能已弃用或无人维护 |

### 项目成熟度信号

- **最成熟**：OpenClaw（LTS发布、回放安全会话）和Hermes Agent（桌面打磨、回归防护）
- **快速演进**：ZeroClaw（频繁发布、频道扩展，但S0数据丢失bug表明仍在加固中）
- **细分聚焦**：QwenPaw（QQ/飞书集成）——社区规模较小但定位明确

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **网关/持久化运行时成为标配** — OpenClaw的网关中心化模式和ZeroClaw的守护进程架构都指向持久化运行时优于无状态CLI调用，更适合复杂智能体工作流

2. **企业级需求浮现** — 上下文窗口配置、供应商回退、审计日志、负责人签名责任门（OpenClaw #96675）表明企业采用正在推进

3. **频道持续扩张** — ZeroClaw（XMPP、邮件）、QwenPaw（QQ流式传输）、Hermes（Matrix恢复）都在大力投资多频道支持——可能受统一通信中心需求驱动

4. **内存系统趋同** — 四个活跃项目都在迭代内存持久化，涉及bootstrap注入、自动溯源和自动替代问题，表明这是关键待解决问题

5. **Windows作为一线平台** — 多个项目报告Windows特定问题（state.db超时、更新失败、PowerShell方言bug）——Windows部署显然是重要用户群体，需要专门关注

6. **插件安全与沙箱** — 插件源码捕获重写（OpenClaw）、Vault后端作用域（Hermes）、准入控制（ZeroClaw）表明随着采用增长，生态正在应对插件安全问题

### 智能体开发者的价值判断

- **构建企业智能体**：OpenClaw的PostgreSQL优化和LTS发布提供最坚实基础
- **构建消费者/桌面助手**：Hermes Agent的会话可视性和终端CPU让步解决了关键体验痛点
- **构建通信平台**：QwenPaw（QQ/飞书）和ZeroClaw（XMPP/邮件）的频道集成领先于OpenClaw
- **构建工作流/SOP智能体**：ZeroClaw的SOP引擎差异化最突出，尽管存在一些稳定性问题

---

*报告基于2026-10-25的GitHub活动数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English project digest into Chinese. I need to:
1. Translate all the text content
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, code identifiers as-is
4. Use natural technical Chinese register

Let me go through and translate this carefully while preserving the structure.</think>

# Hermes Agent 项目简报
**日期：** 2026-10-25

---

## 1. 今日概览

Hermes Agent 今日活跃度较高，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目正在积极处理桌面端会话管理、网关稳定性以及插件生态扩展等问题。今日无新版本发布。社区参与度依然强劲，多个 P1/P2 级别 bug 正在修复中，多个功能 PR 持续推进。维护者们的重点似乎放在桌面客户端和网关组件的稳定性改进上，同时继续扩展插件目录，推出新的集成方案。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进度

### 今日合并/关闭的 PR
| PR | 标题 | 状态 |
|----|-----|------|
| [#144203](https://github.com/NousResearch/hermes-agent/pull/144203) | plugin-catalog: CoreWeave Inference tier verified | 已关闭 |
| [#134556](https://github.com/NousResearch/hermes-agent/pull/134556) | feat(plugins): pre_send_message hook to rewrite or drop any outbound message | 已关闭 |

### 值得关注的活跃 PR
| PR | 标题 | 详情 |
|----|-----|------|
| [#144211](https://github.com/NousResearch/hermes-agent/pull/144211) | Model downloads keep progress when killed | 接管 #143453 — 可恢复中断的下载 |
| [#144207](https://github.com/NousResearch/hermes-agent/pull/144207) | Agent terminal commands can yield CPU | 新增 `terminal.process_priority: low` 配置项 |
| [#144201](https://github.com/NousResearch/hermes-agent/pull/144201) | Fix streaming worker stale kill | P2 修复，解决轮次卡顿问题 |
| [#144204](https://github.com/NousResearch/hermes-agent/pull/144204) | Describe images in configured language | 修复视觉描述中的中文提示 bug |
| [#144198](https://github.com/NousResearch/hermes-agent/pull/144198) | Honor on_all_adapters_down=stay_alive | 修复 #144181 启动冲突处理 |
| [#144180](https://github.com/NousResearch/hermes-agent/pull/144180) | tool_search and plugin install improvements | 将插件加载到运行中的网关 |

---

## 4. 社区热点话题

### 评论最多的 Issue
| Issue | 标题 | 评论数 | 表情 |
|-------|------|--------|------|
| [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) | 会话可见性与通知 — 未读标记、needs-input 提示和系统徽章 | 12 | 👍 3 |
| [#133253](https://github.com/NousResearch/hermes-agent/issues/133253) | 桌面端更新受阻 - state.db 30秒超时（约1GB） | 8 | — |
| [#48997](https://github.com/NousResearch/hermes-agent/issues/48997) | 桌面端应明确关闭已放弃的运行时会话 | 6 | — |
| [#143715](https://github.com/NousResearch/hermes-agent/issues/143715) | Bot Chat 投递被拒绝：当规范标题被未绑定的 tui-source 会话持有时 | 4 | — |
| [#142839](https://github.com/NousResearch/hermes-agent/issues/142839) | model.default 带斜杠前缀被原样转发（导致 503 model_not_found） | 4 | — |
| [#18964](https://github.com/NousResearch/hermes-agent/issues/18964) | 添加 Reticulum 作为消息网关 | 4 | 👍 3 |

### 分析
参与度最高的 issue（#50718，12 条评论）针对的是桌面客户端的基本体验差距——用户无法轻松区分工作中的、已完成的或需要输入的会话。这反映出对更好的会话状态可见性的强烈需求。Reticulum 网关功能（#18964，4 条评论，3 个 👍）显示出对去中心化、无服务器通信方案的关注。

---

## 5. Bug 与稳定性

### 高优先级（P1）Bug
| Issue | 标题 | 状态 |
|-------|------|------|
| [#136189](https://github.com/NousResearch/hermes-agent/issues/136189) | 网关关闭时 flush 文件写入 adapter 的 session key 下 — 重启恢复失败 | 进行中，4 条评论 |

### P2 Bug（按活跃度排序）
| Issue | 标题 | 状态 |
|-------|------|------|
| [#133253](https://github.com/NousResearch/hermes-agent/issues/133253) | 桌面端更新受阻 - state.db 30秒超时 | 进行中，8 条评论 |
| [#143715](https://github.com/NousResearch/hermes-agent/issues/143715) | Bot Chat 投递被拒绝 not_found | 进行中，4 条评论 |
| [#142839](https://github.com/NousResearch/hermes-agent/issues/142839) | model.default 斜杠前缀被原样转发 | 进行中，4 条评论 |
| [#133026](https://github.com/NousResearch/hermes-agent/issues/133026) | config set reasoning_effort none 保存为 null | 进行中，4 条评论 |
| [#144140](https://github.com/NousResearch/hermes-agent/issues/144140) | 仪表板列出会话但无法打开 | 进行中，3 条评论 |
| [#144003](https://github.com/NousResearch/hermes-agent/issues/144003) | Python 3.14 上插件准入失败（onnxruntime） | 进行中，2 条评论 |

### 已有修复 PR 的 Bug
- [#144181] 网关启动冲突 → 修复 PR [#144198](https://github.com/NousResearch/hermes-agent/pull/144198)
- [#131786] 网关 completion tail 丢弃 JSON → 暂无修复 PR
- [#136012] DM 会话无限增长 → 暂无修复 PR

---

## 6. 功能请求与路线图信号

### 活跃的功能请求
| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) | 会话可见性与通知 | P3 | 社区高度关注（12 条评论，3 个 👍） |
| [#48997](https://github.com/NousResearch/hermes-agent/issues/48997) | 显式关闭已放弃的运行时会话 | P2 | 桌面端会话生命周期缺口 |
| [#18964](https://github.com/NousResearch/hermes-agent/issues/18964) | 添加 Reticulum 消息网关 | P3 | 去中心化通信需求（3 个 👍） |
| [#98004](https://github.com/NousResearch/hermes-agent/issues/98004) | Bot 模式按群组的自动继续预算 | P3 | #89545 路线图延续 |
| [#143053](https://github.com/NousResearch/hermes-agent/issues/143053) | 插件目录准入指南 | P3 | 插件作者文档缺口 |

### 新插件集成
| PR | 插件 | 状态 |
|----|------|------|
| [#144192](https://github.com/NousResearch/hermes-agent/pull/144192) | conxt memory provider | 进行中 |
| [#134790](https://github.com/NousResearch/hermes-agent/pull/134790) | Frihet ERP connector | 进行中 |
| [#144210](https://github.com/NousResearch/hermes-agent/pull/144210) | Frihet v0.2.1 catalog bump | 进行中 |
| [#143585](https://github.com/NousResearch/hermes-agent/pull/143585) | Hermes Live 多提供商语音 | 进行中（草稿） |

---

## 7. 用户反馈摘要

### 痛点识别
1. **桌面端会话管理** — 用户难以在侧边栏中跟踪会话状态（工作中/已完成/需要输入）
2. **大型 state.db 超时** — 约 1GB 数据库的 Windows 用户无法完成桌面端更新
3. **Bot Chat 投递失败** — 当规范标题被未绑定的会话持有时出现 "not_found" 错误，造成困惑
4. **网关 DM 会话增长** — 长期运行的 DM 会话无限增长，缺乏轮换机制
5. **Python 3.14 兼容性** — 插件准入因 onnxruntime 缺少 Android wheel 而失败

### 积极信号
- 浏览器保险库插件支持（#143964）解决了插件生态系统的可扩展性问题
- 模型下载恢复（#144211）提高了大型模型文件的可靠性
- 终端 CPU 让出（#144207）解决了资源争用问题

---

## 8. 待处理事项

### 需要维护者关注的 Issue
| Issue | 标题 | 存在时间 | 状态 |
|-------|------|----------|------|
| [#50718](https://github.com/NousResearch/hermes-agent/issues/50718) | 会话可见性与通知 | 4 个月 | 进行中，12 条评论 |
| [#48997](https://github.com/NousResearch/hermes-agent/issues/48997) | 桌面端关闭已放弃的会话 | 4 个月 | 进行中，6 条评论 |
| [#18964](https://github.com/NousResearch/hermes-agent/issues/18964) | 添加 Reticulum 网关 | 5 个月 | 进行中，4 条评论 |
| [#133253](https://github.com/NousResearch/hermes-agent/issues/133253) | state.db 超时（Windows） | 20 天 | 进行中，8 条评论 |
| [#136189](https://github.com/NousResearch/hermes-agent/issues/136189) | 关闭 flush 恢复 | 15 天 | 进行中，P1 |

### 停滞的 PR
在前 20 个活跃 PR 中未发现明显停滞的 PR。该项目保持活跃的审核吞吐量，今日有 8 个 PR 已关闭/合并。

---

*基于 2026-10-25 的 GitHub 数据生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. Let me translate it while preserving the Markdown structure exactly as instructed.

I need to:
1. Keep all headings, tables, lists, blockquotes, formatting
2. Keep URLs, numbers, dates, issue/PR references as-is
3. Keep technical terms, project names, usernames in original form
4. Use natural technical Chinese register

Let me translate section by section:</think>

# QwenPaw 项目简报 — 2026-10-25

## 1. 今日概览

QwenPaw (github.com/agentscope-ai/QwenPaw) 在 2026 年 10 月 25 日呈现**高开发活跃度**。项目在过去 24 小时内处理了 11 个 Pull Request 和 4 个 Issue，其中 1 个 PR 已合并（修复 Matrix 会话恢复），1 个关键 Bug Issue 已关闭。10 个待合并的 PR 表明功能开发活跃，主要集中在 QQ 频道流式消息、记忆系统升级和控制台改进方面。本日无新版本发布。

---

## 2. 版本发布

过去 24 小时内**无新版本**发布。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 作者 | 摘要 |
|----|--------|---------|
| [#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) | hehuang139 | **[已关闭]** fix(matrix): 恢复缓存会话和缺失的设备密钥 — 修复 #8365。使用密码认证的 Matrix 频道现在可在重启后复用加密密钥，而非重新上传，解决了健康报告误报问题。 |

### 推进功能开发的活跃 PR

| PR | 作者 | 摘要 |
|----|--------|---------|
| [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | no-teasy | **feat(channels):** 新增 QQ C2C 流式消息支持，使用官方流式消息 API（`POST /v2/users/{user_openid}/stream_messages`），通过 `QQ_STREAMING_ENABLED` 开关控制。实现了 on_streaming_start/delta/end 钩子。 |
| [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347) | jinliyl | **feat(memory):** 将 ReMe 依赖从 `0.4.1.11` 升级到 `0.4.2.0`。新增可选决策压缩、图像记忆和实体标签生成功能。 |
| [#8408](https://github.com/agentscope-ai/QwenPaw/pull/8408) | Wiziechen | **feat(console):** 助手消息显示模式的服务端默认值 — 回应功能请求 #8407。在 `config.json` 中新增 `chat_display.assistant_message_display_mode` 配置项。 |
| [#8410](https://github.com/agentscope-ai/QwenPaw/pull/8410) | hehuang139 | **fix(console):** 允许从模型池中移除模型 — 修复 #8195。为提供商管理的条目新增带确认的移除操作。 |
| [#7390](https://github.com/agentscope-ai/QwenPaw/pull/7390) | c020627 | **test(providers):** 为阿里云 Coding Plan 添加回归防护 — 修复 #6551。确保模型目录对齐。 |
| [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) | TerebiSAMA | **fix(memory):** 阻止自动记忆召回负载泄漏到频道（如飞书）。防止合成追踪记录出现在外发消息中。 |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | AGImentu | **fix(runtime):** 防止注入的上下文持久化 — 修复 #6360/#6358。保持 HookContext.inject_context() 请求级别作用域。 |

### 文档修复（低优先级）

- [#8403](https://github.com/agentscope-ai/QwenPaw/pull/8403)、[#8402](https://github.com/agentscope-ai/QwenPaw/pull/8402)、[#8401](https://github.com/agentscope-ai/QwenPaw/pull/8401)：修复文档锚点大小写问题（邮箱、安全章节）。

---

## 4. 社区热点话题

| Issue/PR | 互动量 | 摘要 |
|----------|----------|---------|
| [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) | **4 条评论** | **[已关闭]** 严重 Bug：Agent 之间的调用被静默取消，CancelledError 异常 — 同秒配对导致零输出，取消操作未记录发起方或原因。多 Agent 编队（编排器/推理器/执行器/审查器/防御者）+ 飞书频道场景。 |
| [#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407) | **1 条评论** | 功能请求：助手消息显示模式的服务端默认值 — 当前偏好存储在浏览器 localStorage，清除缓存或跨设备时会丢失。自托管部署无法设置组织级默认值。 |

**分析：** 已关闭的 Issue #8252（Agent 静默取消）产生了最高讨论量（4 条评论），表明这是多 Agent 编队场景中的关键可靠性问题。功能请求 #8407 解决了跨设备/团队部署痛点，体现了企业对友好配置的需求。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|----------|--------|--------|
| [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) | **高** | 已关闭 | — |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | **中** | 待处理 | — |
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | **中** | 待处理 | — |

### Bug 详情

1. **[#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406)** — QQ 频道启用标志静默重置为 false，无任何警告。提交者：gcy529。暂无修复 PR。

2. **[#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412)** — `governance/audit.db`（表 `audit_events`）即使在 policy.yaml 中设置 `audit_level: all`，也停止按 Agent 记录工具调用。一旦某个 Agent 的记录停止，就不会恢复。影响合规审计工作流。

---

## 6. 功能请求与路线图信号

| Issue | 摘要 | 近期实施可能性 |
|-------|---------|----------------------------------------|
| [#8407](https://github.com/agentscope-ai/QwenPaw/issues/8407) | 助手消息显示模式的服务端默认值 | **高** — PR #8408 已实现此功能 |
| [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | QQ C2C 流式消息支持 | **高** — 正在积极开发中 |

**路线图信号：** 根据活跃 PR ，近期版本可能重点关注：
- QQ 频道能力增强（流式消息支持）
- 记忆系统升级（ReMe 0.4.2.0 集成）
- 控制台/模型池管理改进
- 治理/审计增强（工具调用记录待修复）

---

## 7. 用户反馈总结

### 痛点

1. **多 Agent 可靠性**：Issue #8252（虽已关闭但可能仍在验证中）反映了用户对 Agent 调用静默取消的挫败感 — 输出丢失且无诊断信息。
2. **配置持久化**：用户希望助手消息显示偏好存储在服务端，而非浏览器 localStorage（#8407）。
3. **审计合规缺口**：治理审计数据库按 Agent 停止记录工具调用，原因不明（#8412），引发合规担忧。
4. **QQ 频道可靠性**：标志重置问题 #8406 导致频道静默停止工作。

### 积极信号

- Matrix 频道加密密钥恢复（#8411）解决了自托管部署的已知痛点。
- 文档锚点修复体现了对帮助文档用户体验的关注。

---

## 8. 积压关注

| 项目 | 历时 | 状态 | 关注点 |
|------|-----|--------|---------|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 约 65 天（2026-08-21） | 待合并，审查中 | 运行时上下文注入修复 — 关联 #6360/#6358。需要维护者关注以推进合并。 |
| [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) | 约 38 天（2026-09-17） | 待合并，审查中 | 记忆负载泄漏到频道 — 影响飞书等外发集成。 |
| [#7390](https://github.com/agentscope-ai/QwenPaw/pull/7390) | 约 88 天（2026-08-28） | 待合并 | 阿里云 Coding Plan 回归防护 — 优先级低但提升模型目录可靠性。 |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | 2 天 | 待处理 | QQ 频道标志重置 Bug — 无人认领。 |
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | 1 天 | 待处理 | 审计库记录 Bug — 无人认领。 |

**建议：** PR #7211 和 #7835 已审查 2+ 个月，应优先处理合并或反馈，以避免贡献者疲劳。Bug #8406 和 #8412 需要认领关注。

---

*简报基于 2026-10-25 的 GitHub 数据生成。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese. I need to:
1. Keep all the Markdown structure exactly the same
2. Translate the content into natural technical Chinese
3. Keep all identifiers (issue numbers, PR numbers, URLs, version tags, etc.) as-is
4. Use the register of a Chinese developer newsletter

Let me translate this carefully, preserving all formatting and structure.</think>

# ZeroClaw 项目动态 — 2026-10-25

## 今日概览

ZeroClaw 今日开发活动频繁，过去 24 小时内有 18 个 issue 和 50 个 pull request 更新。项目刚刚发布了 **v0.8.7**（PR #12011），这是 v0.8.x 系列的第七个补丁版本。当前活动涉及多个领域：关键运行时 bug 正在修复（SOP 步骤顺序、内存后端数据丢失），新通道功能持续推进（XMPP 配 OMEMO、仅入站邮件），会话历史和目标配置的重大架构工作也在进行中。今日有 3 个 PR 已合并/关闭，剩余 47 个开放。

---

## 版本发布

### v0.8.7 — 发布于 2026-10-24
**PR：** [#12011](https://github.com/zeroclaw-labs/zeroclaw/pull/12011)

补丁版本，将协调工作区从 v0.8.6 升级到 v0.8.7。包含针对安全通告（RUSTSEC-2026-0385、RUSTSEC-2026-0386）、守护进程重载后网关连接处理以及 SOP 引擎步骤顺序问题的修复。无破坏性变更。

---

## 项目进展

### 今日合并/关闭的 PR（3 个）
| PR | 标题 | 状态 |
|----|-------|--------|
| [#12011](https://github.com/zeroclaw-labs/zeroclaw/pull/12011) | chore(release): bump version to v0.8.7 | 已关闭 |
| [#12009](https://github.com/zeroclaw-labs/zeroclaw/issues/12009) | 安全任务每次构建都失败：RUSTSEC-2026-0385 和 RUSTSEC-2026-0386 | 已关闭（issue） |
| [#11899](https://github.com/zeroclaw-labs/zeroclaw/issues/11899) | 守护进程重载后，已停止的网关仍在服务已接受的连接 | 已关闭（issue） |

### 值得关注的推进中功能

| PR | 标题 | 影响 |
|----|-------|--------|
| [#12017](https://github.com/zeroclaw-labs/zeroclaw/pull/12017) | fix(runtime): treat the context window as model metadata, not configuration | 修复了自定义 OpenAI 兼容提供商的上下文窗口回退问题 |
| [#12007](https://github.com/zeroclaw-labs/zeroclaw/pull/12007) | fix(tools): serve deferred tool schemas from live tools, not assembly copy | 修复了配置重载后的过期 schema 问题 |
| [#11997](https://github.com/zeroclaw-labs/zeroclaw/pull/11997) | feat(tools): send files through send_via under the read policy | 支持通过显式路径在邮件通道中发送附件 |
| [#12003](https://github.com/zeroclaw-labs/zeroclaw/pull/12003) | feat(channels): allow inbound-only email channels without SMTP | 现在支持仅 IMAP 的邮箱 |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | feat(channels): add configurable XMPP/Prosody channel with optional OMEMO | 新通道：支持 OMEMO 加密的 XMPP |
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | feat(session): implement append-only session event history | 会话历史可追加的重大架构改进 |

---

## 社区热点

### 讨论最活跃的 Issue（按评论数）
1. **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)** — [追踪]：持久化内存 — 将策展平面、相关性平面和可操作平面连接到奇偶校验  
   *12 条评论* | 增强功能 | 优先级 P2 | 内存子系统路线图

2. **[#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)** — [Bug]：SOP 引擎在记录步骤的输出 schema 拒绝之前提升并运行后续步骤  
   *5 条评论* | 优先级 P0 | 高严重性 — 工作流阻塞

3. **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)** — [Bug]：markdown 内存后端在 `store()` 调用重叠时静默丢失存储的条目  
   *3 条评论* | 优先级 P1 | 数据丢失/安全风险 — 并发写入问题

4. **[#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592)** — fix(tools): probe the saved provider alias after model-routing updates  
   *3 条评论* | 后续 issue | 已修复

**分析：** 持久化内存追踪器（#8891）正在引发大量讨论——用户和贡献者正在协调跨会话内存奇偶校验的多 PR 推出计划。SOP 引擎 bug（#10066）和内存后端并发问题（#10797）表明存在运行时稳定性问题，可能需要优先关注。

---

## Bug 与稳定性

### 严重/高优先级 Bug（开放中）
| Issue | 严重性 | 描述 | 修复 PR？|
|-------|----------|-------------|--------|
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | S0 — 数据丢失 | Markdown 内存后端在并发 store() 调用时丢失条目 | 无 |
| [#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014) | S1 — 工作流阻塞 | 自定义 OpenAI 提供商在未设置时假设 32K 上下文窗口，导致有效轮次被拒绝 | [#12017](https://github.com/zeroclaw-labs/zeroclaw/pull/12017) |
| [#12005](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) | S2 — 回归 | PowerShell 方言拒绝带 `@` 的命令（破坏邮件 CLI） | 无 |
| [#12006](https://github.com/zeroclaw-labs/zeroclaw/issues/12006) | S3 — 小问题 | tool_search 在重载后提供过期的延迟工具 schema | [#12007](https://github.com/zeroclaw-labs/zeroclaw/pull/12007) |
| [#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) | 高 | npm audit 失败 — @tailwindcss/typography 中等漏洞 | 无 |

### v0.8.7 中已修复
- **#10066** — SOP 步骤顺序已修复
- **#11899** — 守护进程重载后的网关连接处理
- **#12009** — RustSec 通告（ctutils、tokio）

---

## 功能请求与路线图信号

### 高关注度的功能请求（开放中）
| Issue | 功能 | 优先级 |
|-------|---------|----------|
| [#11799](https://github.com/zeroclaw-labs/zeroclaw/issues/11799) | Shell 策略拒绝应说明原因，并接受操作符提示 | 功能 |
| [#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | 邮件通道：操作符模板和 send_via 的净化 HTML 正文 | 功能 |
| [#11996](https://github.com/zeroclaw-labs/zeroclaw/issues/11996) | send_via：显式附件在读策略下检查 | 功能 |
| [#12016](https://github.com/zeroclaw-labs/zeroclaw/issues/12016) | 允许嵌入二进制文件向聊天和定时任务添加钩子 | 功能 |
| [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879) | Goal V1：休眠配置和命令语法 | 提案（Goal V1 系列第 2/12 个） |

**路线图信号：** 邮件通道增强功能（#11992、#11996、#12003）、XMPP 通道（#11847）和持久化内存追踪器（#8891）的组合表明 v0.9.0 可能聚焦于**通道生态扩展**和**内存子系统成熟度**。Goal V1 提案系列（#11879 是第 2/12 个）表明正在开展基于目标的智能体编排的长期架构工作。

---

## 用户反馈总结

### 痛点
1. **数据丢失风险** — Markdown 内存后端并发 bug（#10797）被标记为 S0 严重性（数据丢失/安全风险），表明用户经历过静默数据丢失。

2. **PowerShell 不兼容** — Issue #12005 报告 PowerShell 方言拒绝带 `@` 的有效命令，破坏了邮件 CLI 工具。这似乎是一个回归问题。

3. **提供商配置摩擦** — 自定义 OpenAI 兼容提供商的上下文窗口处理（#12014）导致意外拒绝，表明文档或开发者体验存在差距。

4. **安全任务阻塞 CI** — RUSTSEC 通告（#12009）导致安全任务在每次构建时失败，阻塞了合并直到 v0.8.7 发布。

### 积极信号
- 邮件通道开发活跃（#12003、#11997、#11992）表明用户对健壮的邮件集成有需求。
- 带 OMEMO 的 XMPP 通道（#11847）满足了安全消息用例。
- 会话事件历史（#11921）为调试和重放带来了显著的 UX 改进。

---

## 待办关注

### 需要维护者关注的长周期或停滞 Issue
| Issue | 历时 | 状态 | 关注点 |
|-------|-----|--------|---------|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 约 3.5 个月 | 开放中 | 持久化内存追踪器 — 7 个开放项（4 个 issue、3 个 PR）— 需要协调 |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | 约 3 个月 | 开放中 | Anthropic OAuth 配置文件支持 — 大 PR，信任贡献者 |
| [#10446](https://github.com/zeroclaw-labs/zeroclaw/pull/10446) | 约 2 个月 | 开放中 | 安全修复：拒绝泄露到文本中的工具调用信封 — 高风险安全修复 |
| [#11441](https://github.com/zeroclaw-labs/zeroclaw/pull/11441) | 约 3 周 | 开放中 | 定时任务绑定到对话 — 依赖于 #11438 |
| [#11945](https://github.com/zeroclaw-labs/zeroclaw/issues/11945) | 3 天 | 开放中 | SOP 过期副本测试覆盖 — 新issue，需要关注 |
| [#11946](https://github.com/zeroclaw-labs/zeroclaw/issues/11946) | 3 天 | 开放中 | SOP 过期副本状态文件保护 — 新issue，与 #10066 相关 |

**注意：** SOP 过期副本工作流（#11945、#11946）正在通过针对性测试和修复 PR 积极处理，表明维护者对 v0.8.7 bug 报告响应良好。

---

*数据来源：github.com/zeroclaw-labs/zeroclaw，生成于 2026-10-25*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*