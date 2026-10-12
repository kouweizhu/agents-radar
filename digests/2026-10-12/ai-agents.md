# OpenClaw 生态日报 2026-10-12

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-12 01:40 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this project digest into Simplified Chinese, following the rules provided. Let me translate while:

1. Keeping the Markdown structure exactly
2. Preserving all URLs, numbers, issue/PR references
3. Using natural technical Chinese register
4. Not translating project names, repository slugs, usernames, etc.
5. Keeping code and technical identifiers as-is

Let me go through each section:

**Title:**
OpenClaw Project Digest — 2026-10-12
→ OpenClaw 项目简报 — 2026-10-12

**1. Today's Overview**
→ 1. 今日概览

**2. Releases**
→ 2. 版本发布

**3. Project Progress**
→ 3. 项目进展

**4. Community Hot Topics**
→ 4. 社区热点

**5. Bugs & Stability**
→ 5. BUG 与稳定性

**6. Feature Requests & Roadmap Signals**
→ 6. 功能需求与路线图信号

**7. User Feedback Summary**
→ 7. 用户反馈总结

**8. Backlog Watch**
→ 8. 待办事项关注

Let me translate the content while preserving all the technical details and structure.</think>

# OpenClaw 项目简报 — 2026-10-12

## 1. 今日概览

OpenClaw 保持高度开发活跃度，过去 24 小时内 issues 和 PRs 各有 500 条更新。项目发布了 **v2026.10.5-beta.1**，重点改进更新安全性和恢复机制。社区参与热度不减，置顶 issue（SQLite WAL 膨胀）已积累 122 条评论，反映出 Windows 数据库性能是用户痛点。Gateway 稳定性仍是关注焦点，多个 P0 级别的内存泄漏和崩溃循环问题正在讨论中。

---

## 2. 版本发布

### v2026.10.5-beta.1 — openclaw 2026.10.5-beta.1

**版本亮点：**
- **更安全的更新：** 更新现在可以在不同设备、文件系统、Windows 提权和中断的激活场景下可靠完成。该版本可从陈旧租约或变更的证据中恢复，避免安装卡死或阻塞后续更新。

**相关链接：** GitHub Release: [openclaw/openclaw releases](https://github.com/openclaw/openclaw/releases)

---

## 3. 项目进展

今日合并/关闭的 PRs：

| PR | 描述 | 状态 |
|---|---|---|
| [#169247](https://github.com/openclaw/openclaw/pull/169247) | build(ui): upgrade Solid to 2.0.0-rc.14 | 已关闭 |
| [#169402](https://github.com/openclaw/openclaw/pull/169402) | fix(ui): new session shows "runner isn't ready" while page loads | 已关闭 |
| [#169326](https://github.com/openclaw/openclaw/pull/169326) | fix(control-ui): restore rail snapshots for large rosters and Pages | 已关闭 |

**当前开发重点：**
- UI/Control UI 优化（Solid 2 迁移、session runner 修复）
- ClickClack 投递改进
- Telegram 频道修复
- 进程/session 处理清理

---

## 4. 社区热点

### 评论最活跃的 Issues

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — **Agent SQLite WAL 在数天内膨胀至 1.4–2.8 GB**（122 条评论）
   - **严重程度：** P0，impact:message-loss, crash-loop, ux-release-blocker
   - **问题描述：** 在 Windows 上，尽管设置了 wal_autocheckpoint=1000，SQLite WAL 文件仍无限膨胀，达到 2865 MB 并导致 Gateway 无法启动
   - **用户诉求：** 需要在 Windows 文件系统上实现可靠的检查点机制

2. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — **严重：Gateway 内存泄漏 — RSS 从 350MB 增长至 15.5GB**（38 条评论）
   - **严重程度：** P0，maturity:stable
   - **问题描述：** 严重内存泄漏导致运行 2-3 天后 OOM 崩溃，触发重启循环
   - **用户诉求：** 长时间运行的部署需要生产级稳定性

3. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — **OpenClaw 泄漏未回收的 hook/tool 子进程**（18 条评论）
   - **严重程度：** P1，impact:crash-loop
   - **问题描述：** 僵尸进程累积导致运行时性能下降
   - **用户诉求：** 需要正确的进程生命周期管理

4. **[#148707](https://github.com/openclaw/openclaw/issues/148707)** — **回复丢失："Reply operation has no active tool authority snapshot"**（18 条评论）
   - **严重程度：** P1，impact:message-loss
   - **问题描述：** 交互式 session 在传递回复前终止，导致回复完全丢失

5. **[#157989](https://github.com/openclaw/openclaw/issues/157989)** — **插件源码捕获每个 CLI 命令重写约 1.1–1.4 GB**（15 条评论）
   - **严重程度：** P1，impact:ux-release-blocker
   - **问题描述：** 重复的字节复制和哈希计算导致严重的 SSD 磨损

---

## 5. BUG 与稳定性

### P0（严重）问题

| Issue | 标题 | 严重程度 | 修复 PR？ |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 膨胀至 1.4–2.8 GB（Windows） | P0 | 无 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 RSS 350MB→15.5GB | P0 | 无 |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway 崩溃：state DB read-admission seal | P0 | 无 |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | 2026.9.5 原生内存泄漏（~1 GiB/30s） | P0 | 无 |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | 更新因恢复互斥锁永久阻塞 | P0 | 无 |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | Gateway 关闭失败："Worker environment inventory closed" | P0 | 无 |

### 值得关注的回归问题

- **[#168955](https://github.com/openclaw/openclaw/issues/168955)** — 启动回归：2026.9.9 上 ready 约 1030s对比约 410s（Windows）；sidecars.control-ui-assets 阻塞 477s
- **[#164113](https://github.com/openclaw/openclaw/issues/164113)** — 更新在 updater-runtime-retention 失败，原因是非特权 LXC 内 FICLONE EPERM

---

## 6. 功能需求与路线图信号

### 进行中的功能 PRs

| PR | 描述 | 状态 |
|---|---|---|
| [#148193](https://github.com/openclaw/openclaw/pull/148193) | feat(llama-cpp): add managed local OCR and vision setup | 需验证 |
| [#163693](https://github.com/openclaw/openclaw/pull/163693) | feat: offer optional memory embedding setup | 维护者就绪 |
| [#169514](https://github.com/openclaw/openclaw/pull/169514) | feat(clawrouter): sidebar dashboard for subscription pool headroom | 进行中 |
| [#169512](https://github.com/openclaw/openclaw/pull/169512) | feat: start fresh Tauri installs with a local Gateway | 进行中 |

### 用户请求的功能增强

- **[#14785](https://github.com/openclaw/openclaw/issues/14785)** — 降低工具 schema token 开销（~3,500 tok/session）— P2，上下文成本显著
- **[#111143](https://github.com/openclaw/openclaw/issues/111143)** — 允许在 Control UI 侧边栏固定插件标签页
- **[#74481](https://github.com/openclaw/openclaw/issues/74481)** — feat: dynamic catalog refresh from configured provider /v1/models

---

## 7. 用户反馈总结

### 痛点

1. **Windows 性能表现：** 多个问题专门提到 Windows 特定问题——SQLite WAL 膨胀、启动回归、DataCloneError 导致的 cron 失败
2. **内存管理：** Gateway 内存泄漏（原生的和 V8 堆）导致 OOM 崩溃，影响生产稳定性
3. **更新可靠性：** 用户报告更新被永久阻塞且无修复路径；恢复机制失效
4. **插件系统：** 源码捕获在 Windows 上造成大量 SSD 写入和 staging 失败

### 积极信号

- v2026.10.5-beta.1 解决了多个 issue 中提出的核心更新安全问题
- 活跃的社区参与（置顶 issue 122 条评论）表明有投入度的用户群体
- UI/UX 改进持续推进（Solid 2 迁移、Control UI 修复）

---

## 8. 待办事项关注

### 长期未解决的重要问题

| Issue | 标题 | 时长 | 状态 |
|---|---|---|---|
| [#69242](https://github.com/openclaw/openclaw/issues/69242) | exec tool on Linux intermittently SIGKILLs broad find/grep | 约 6 个月 | 待处理，陈旧 |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro: textSignature bloat + think tags | 约 7 个月 | 待处理 |
| [#88087](https://github.com/openclaw/openclaw/issues/88087) | Poor UX for long-running background tasks | 约 5 个月 | 待处理，陈旧 |

### 需要维护者关注的 PRs

| PR | 描述 | 状态 |
|---|---|---|
| [#147629](https://github.com/openclaw/openclaw/pull/147629) | fix(update): preserve dirty checkouts by installing dev separately | 等待作者 |
| [#168718](https://github.com/openclaw/openclaw/pull/168718) | refactor(cron): extract prompt executor | 等待作者 |
| [#169431](https://github.com/openclaw/openclaw/pull/169431) | fix(codex): recover follow-up requests after failed thread preparation | 等待作者 |

---

*简报基于 OpenClaw GitHub 数据生成 — 2026-10-12*

---

## 横向生态对比

<think>The user wants me to translate the entire English report into Chinese, maintaining all the exact formatting including headings, tables, lists, code blocks, bold/italic, horizontal rules, emoji, URLs, numbers, dates, project names, version tags, issue/PR references, etc.

I need to:
1. Translate the content into natural technical Chinese
2. Keep all formatting exactly as-is
3. Preserve all non-translatable elements (URLs, code, numbers, project names, etc.)
4. Use appropriate Chinese punctuation while keeping the Markdown structure

Let me go through and translate section by section.</think>

# 跨项目对比：个人 AI 助手生态系统

---

## 1. 生态系统概览

个人 AI 助手与 Agent 框架领域正在快速成熟，各项目在架构、稳定性重点和社区活跃度方面存在显著差异。项目涵盖企业级平台（如 **OpenClaw**，issue 量庞大、发布周期成熟）到新兴生态系统（如 **ZeroClaw**，激进功能开发配合安全加固）和 **QwenPaw**（拓展移动端跨平台）。四个项目都在积极解决多 Agent 编排、持久化记忆和插件扩展性——这些都是生产级自主 Agent 系统的核心需求。各平台大量的 P0/P1 缺陷表明，整个行业正在应对自主 Agent 运行时固有的可靠性挑战。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Issue 更新（24h）** | 500 | 50 | 10 | 22 |
| **Open Issue** | 345 | 44 | 10 | 20 |
| **已关闭 Issue** | 155 | 6 | 0 | 2 |
| **PR 更新（24h）** | 500 | 50 | 20 | 50 |
| **Open PR** | 319 | 44 | 8 | 47 |
| **已合并/关闭 PR** | 181 | 6 | 12 | 3 |
| **新发布版本** | 1（v2026.10.5-beta.1） | 0 | 0 | 0 |
| **健康度评分** | 高（活跃发布，持续修 Bug） | 中（积压 Issue 较多） | 中（PR 稳步合并） | 中高（开发量大，安全修复待处理） |

*健康度评分是基于发布周期、Bug 修复速度和 open/closed 比率的综合估算。*

---

## 3. OpenClaw 的定位

### 优势

- **成熟的发布流程**：唯一拥有近期稳定版本和结构化 Beta 版本号的项目
- **社区规模最大**：关注度最高（500 条/24h），热门 Issue 有 122 条评论，而 Hermes 最多 21 条，其他项目约 3 条
- **企业特性**：专注于网关稳定性、插件源捕获和安全更新，符合生产部署需求

### 技术路线差异

| 方面 | OpenClaw | Hermes | QwenPaw | ZeroClaw |
|--------|----------|--------|---------|----------|
| **主要关注点** | 网关稳定性、企业级可靠性 | 桌面会话性能 | 跨平台（HarmonyOS） | 安全、插件生态 |
| **内存模型** | 插件制，源捕获 | 桌面会话持久化 | 服务端会话状态 | 按 Agent 作用域，持久化记忆 |
| **更新机制** | 带恢复的安全更新 | hermes update（过时警告） | — | — |
| **安全态势** | 插件沙箱 | API 密钥校验 | — | 按 Agent 所有权（S0 问题） |

### 社区规模对比

OpenClaw 122 条评论的 Issue 对比 Hermes Agent 21 条评论的热门 Issue，表明其社区活跃度显著更高。ZeroClaw 和 QwenPaw 的社区规模较小但参与度尚可（热门 Issue 分别有 10 条和 3 条评论）。

---

## 4. 共同技术重点

### 持久化记忆

- **OpenClaw**：插件源捕获和知识检索
- **ZeroClaw**：多平面持久化记忆（策划、相关性、可操作性）在 #8891 中追踪
- **QwenPaw**：会话级变更通知实现实时同步
- **Hermes Agent**：Profile 级心跳持久化

> *四个项目都在投资跨会话记忆能力——这是用户期望 Agent 在重启后能保留上下文和知识的根本需求。*

### 多 Agent 编排

- **ZeroClaw**：按 Agent 所有权作用域（S0 安全隔离）——#9646、#9647
- **QwenPaw**：按聊天审批级别，HarmonyOS 多设备支持
- **Hermes Agent**：按主题配置和委托
- **OpenClaw**：网关多租户稳定性

> *多 Agent 部署是共同架构目标，而安全隔离（数据泄露防护）是主要挑战。*

### 插件扩展性

- **ZeroClaw**：WASM 插件宿主、签名、验证更新、快速安装
- **QwenPaw**：插件市场，支持版本兼容性过滤
- **OpenClaw**：插件源捕获（1.1–1.4 GB 重写问题）
- **Hermes Agent**：MCP（Model Context Protocol）改进

> *插件生态正在走向成熟。ZeroClaw 的 WASM 插件宿主（#11347）代表了前沿技术方案。*

### 可靠性与稳定性

- **内存泄漏**：OpenClaw（RSS 从 350MB 飙升到 15.5GB），Hermes Agent（原生堆 + V8 堆）
- **启动回退**：OpenClaw，Hermes Agent 桌面端
- **连接处理**：ZeroClaw（Tailscale 隧道），QwenPaw（Codex 后端）
- **更新安全**：OpenClaw 的 v2026.10.5-beta.1，Hermes Agent 的过时警告

> *每个项目都在解决内存管理和连接恢复问题——这是长时间运行的自主 Agent 的基础挑战。*

---

## 5. 差异化分析

### 目标用户

| 项目 | 主要用户 |
|------|----------|
| OpenClaw | 企业部署、自托管 AI 基础设施 |
| Hermes Agent | 追求原生桌面 Agent 体验的开发者 |
| QwenPaw | 跨平台用户（网页端、桌面端、HarmonyOS） |
| ZeroClaw | 注重安全的多 Agent 运维人员、高级用户 |

### 技术架构

- **OpenClaw**：网关中心架构，SQLite（Windows 上 WAL 性能问题）
- **Hermes Agent**：桌面优先，本地 SQLite/FTS 会话存储
- **QwenPaw**：服务端会话状态，通道抽象层
- **ZeroClaw**：模块化通道架构，firejail 沙箱，WASM 插件宿主 |

### 功能重点差异

- **OpenClaw** → 生产稳定性、更新安全、企业插件管理
- **Hermes Agent** → 桌面交互体验、浏览器自动化、定时任务
- **QwenPaw** → 移动端（HarmonyOS）、快速启动、MCP 改进
- **ZeroClaw** → 安全隔离、暗工厂工作流、定时任务提取

---

## 6. 社区势头与成熟度

### 活动分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw、ZeroClaw | 40+ PR/24h，功能开发量大，安全加固并行 |
| **稳定开发** | Hermes Agent、QwenPaw | 20–50 条/24h，Bug 修复与功能开发平衡 |
| **趋于稳定** | — | 本期无项目处于此阶段 |

### 成熟度评估

- **最成熟**：OpenClaw — 结构化发布流程，定义清晰的 Beta/Stable 版本号，企业级定位
- **成长中**：ZeroClaw — 安全工作活跃，版本追踪积极，但 S0 问题表明安全加固处于早期
- **新兴阶段**：Hermes Agent、QwenPaw — 功能开发活跃，桌面/移动端重点，社区规模较小

### 速度与稳定性

| 项目 | 速度 | 稳定性关注 | 综合评估 |
|--------|----------|------------------|-----------------|
| OpenClaw | 高 | 解决 P0 内存/SQLite 问题 | 持续交付中 |
| ZeroClaw | 高 | S0 安全问题待处理 | 构建中 |
| QwenPaw | 中等 | Console/Bug 修复 | 稳步推进 |
| Hermes Agent | 中等 | 桌面会话问题 | 维护中 |

---

## 7. 趋势信号

### 行业趋势提炼

1. **持久化记忆是必备功能** — 四个项目都在投资跨会话记忆；用户期望 Agent 能"记住"重启后的上下文。ZeroClaw 的追踪器（#8891）和 OpenClaw 的知识检索代表了实现同一需求的不同架构路线。

2. **安全隔离是下一个前沿** — ZeroClaw 的 S0 级按 Agent 作用域问题（#9646、#9647）揭示了整个生态的关键空白。多 Agent 部署需要严格的数据隔离；目前没有项目完全解决了这个问题。

3. **插件生态正在爆发** — WASM 插件（ZeroClaw）、MCP 改进（QwenPaw、Hermes）、插件签名和市场表明行业正在走向可扩展的 Agent 平台。

4. **桌面性能是普遍痛点** — Hermes Agent 和 OpenClaw 都报告了桌面会话加载缓慢、阻塞 I/O 和 CPU 占满。本地优先的 Agent 使用场景需要更好的 SQLite/FTS 处理。

5. **Windows 支持仍碎片化** — OpenClaw 的 SQLite WAL 问题、Hermes Agent 的 PATH 问题、ZeroClaw 的 Windows 安装请求，表明跨平台支持参差不齐。

6. **发布周期差异显著** — OpenClaw 保持结构化的 Beta/Stable 发布；其他项目基于 PR 触发发布。Agent 框架行业尚未形成统一的发布模式。

### AI Agent 开发者的价值

- **若构建企业/自托管 Agent**：OpenClaw 的发布稳定性和更新机制最成熟
- **若构建桌面/原生应用**：Hermes Agent 在会话管理方面的经验可直接借鉴
- **若构建跨平台/移动端**：QwenPaw 的 HarmonyOS 客户端代表移动端拓展的早期尝试
- **若构建多 Agent 系统**：ZeroClaw 的安全作用域工作（虽未完成）为隔离需求提供了路线图

---

*跨项目对比报告基于 2026-10-12 的 GitHub 数据生成。*

---

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure:

---

# Hermes Agent 项目摘要

**日期：** 2026-10-12

---

## 1. 今日概览

Hermes Agent 今日开发活动频繁，**过去 24 小时内有 100 项更新**（50 个 issue + 50 个 PR）。开放与关闭项目的比例严重偏向开放状态（44 个开放 issue，44 个开放 PR），表明团队参与度高，但也存在待处理积压。值得注意的是，今天没有发布新版本。安全相关修复在最近的 PR 中较为突出，多个 P1/P2 缺陷影响了桌面端、CLI 和网关组件的核心功能。

---

## 2. 版本发布

**今天没有新版本**发布。稳定版仍为 v0.21.6。

---

## 3. 项目进展

过去 24 小时内合并/关闭的 PR：

| PR | 标题 | 状态 |
|---|---|---|
| #95595 | Desktop: switching to a warm session pegs renderer main thread | 已关闭 |
| #60747 | Desktop sessions freeze: synchronous SQLite/FTS session loading blocks event loop | 已关闭 |


| #131818 | Local skill correctly discovered by default profile is silently absent from sub-profile | 已关闭 |
| #66393 | Gate browser tool in non-interactive sessions | 已关闭 |
| #69776 | Async delegation dispatch note tells model to fabricate result | 已关闭 |
| #95044 | Desktop: tab switches stay slow on huge sessions | 已关闭 |

**主要进展：**
- 改进了桌面端的会话性能（解决 SQLite 阻塞问题）
- 处理了非交互环境下的浏览器工具安装问题
- 修复了异步委托行为

---

## 4. 社区热点话题

| Issue | 标题 | 评论数 | 表情 |
|-------|-------|--------|-------|
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | `hermes update` 在网关运行时留下"未重启运行中的网关"的持久警告 | 21 | 0 |
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | browser_exec 留下孤立的 browser_harness 守护进程 | 11 | 0 |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram DM topics：打开无关联消息的已投递主题 | 10 | 0 |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop 远程/VPS 会话加载缓慢，导航时取消 | 10 | 2 |
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | sk-ant-usr- 前缀的 Anthropic API 密钥被误分类为 OAuth | 6 | 6 👍 |

**分析：** 讨论最多的是 #107402，涉及更新生命周期管理——用户延迟重启时会收到持久警告。浏览器自动化 (#121095) 和 Telegram 集成 (#136567) 代表工具可靠性的痛点。Anthropic API 密钥误分类 (#133856) 同时收到了评论和反应 (6 👍)，表明用户对身份验证准确性的担忧。

---

## 5. 缺陷与稳定性

**关键 (P1) 缺陷：**

| Issue | 标题 | 严重程度 | 修复 PR |
|-------|-------|----------|--------|
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | Anthropic API 密钥被误分类为 OAuth 令牌 | P1 | — |
| [#136801](https://github.com/NousResearch/hermes-agent/issues/136801) | Telegram 网关因"余额不足"失败，尽管提供商有资金 | P2 | — |

**高优先级 (P2) 缺陷：**

| Issue | 标题 | 组件 |
|-------|-------|------|
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | hermes update 过期警告 | CLI/网关 |
| [#121095](https://github.com/NosResearch/hermes-agent/issues/121095) | 浏览器守护进程残留 | 工具 |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram DM 主题消息路由 | 网关 |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop VPS 会话加载问题 | 桌面端 |
| [#135037](https://github.com/NousResearch/hermes-agent/issues/135037) | Windows PATH 注册沙盒问题 | CLI/Windows |
| [#136842](https://github.com/NousResearch/hermes-agent/issues/136842) | write_file 相对于 TERMINAL_CWD 解析 | CLI |

**可用的修复 PR：**
- [#136879](https://github.com/NousResearch/hermes-agent/pull/136879) — Token count stamping
- [#136873](https://github.com/NousResearch/hermes-agent/pull/136873) — Nous Portal pricing tier estimates
- [#136876](https://github.com/NousResearch/hermes-agent/pull/136876) — pilk exclusion for cold-cache lock
- [#136765](https://github.com/NousResearch/hermes-agent/pull/136765) — Cron corrupted store errors

---

## 6. 功能请求与路线图信号

**高需求功能（按反应排序）：**

| Issue | 标题 | 反应 |
|-------|-------|-------|
| [#4431](https://github.com/NousResearch/hermes-agent/issues/4431) | Per-topic/per-chat configuration overrides (topic_configs) | 10 👍 |
| [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | Optional, Configurable Proactive Check-Ins | 8 👍 |
| [#125448](https://github.com/NousResearch/hermes-agent/issues/125448) | Support source-backed proactive follow-ups via gateway plugin | 3 |
| [#130197](https://github.com/NousResearch/hermes-agent/issues/130197) | Profile-level heartbeat that persists across sessions | 3 |

**引入功能的新 PR：**
- [#136855](https://github.com/NousResearch/hermes-agent/pull/136855) — `waypoint` 插件（会话状态 for Desktop）
- [#136874](https://github.com/NousResearch/hermes-agent/pull/136874) — `heartbeat2` 插件
- [#128926](https://github.com/NousResearch/hermes-agent/pull/128926) — OpenAI "Sign in with ChatGPT" provider

**预测：** 聊天级配置 (#4431) 和主动签到 (#9645) 具有强烈的社区兴趣，可能出现在即将到来的版本中。心跳和路标插件表明生态系统重点不断增长。

---

## 7. 用户反馈摘要

**今天报告的痛点：**

1. **Desktop 性能** — 远程/VPS 后端的用户经历 20 多秒的会话加载、导航时取消，以及标签页切换时的 100% CPU 占用。大型 `state.db` 文件（报告 284 MB）导致阻塞问题。

2. **浏览器工具可靠性** — 每次 `browser_exec` 调用都会留下孤立的守护进程，没有清理机制。这影响了长时间运行的会话。

3. **身份验证不稳定** — `hermes auth add` 在非交互式 shell 中崩溃或挂起。Anthropic API 密钥被误分类，影响计费和 OAuth 流程。

4. **Windows 特定问题** — PATH 注册将沙盒/checkout 目录写入共享用户环境，导致安装之间的交叉污染。

5. **Telegram 集成** — 论坛主题中的消息路由不可靠；休息室恢复将消息误路由到之前的主题。

**满意信号：** SQLite 阻塞问题 (#60747, #95595) 的关闭和新的 token 计数戳记 (#136879) 解决了长期的可观测性差距。围绕秘密混淆 (#136875, #129166, #129169) 的安全重点 PR 受到好评。

---

## 8. 积压关注

**需要维护者关注的重要问题：**

| Issue | 标题 | 时长 | 状态 |
|-------|-------|------|------|
| [#17873](https://github.com/NousResearch/hermes-agent/issues/17873) | tools/approval.py: Add reverse shell, download-execute patterns to DANGEROUS_PATTERNS | ~5 个月 | OPEN |
| [#37244](https://github.com/NousResearch/hermes-agent/issues/37244) | Robust SPA Clicking / Playwright Force Click | ~4 个月 | OPEN |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop 远程/VPS 会话加载问题 | ~3 个月 | OPEN (P2) |
| [#55369](https://github.com/NousResearch/hermes-agent/issues/55369) | Union integer\|string tool args drop leading zeros | ~3 个月 | OPEN |

**备注：**
- 安全增强 #17873（危险模式检测）尽管有 P2 优先级，但仍处于开放状态
- SPA 点击问题 (#37244) 持续数月，影响浏览器自动化可靠性
- Desktop VPS 性能 (#70445) 有 10 条评论，但尚无修复 PR

---

*根据 2026-10-12 的 Hermes Agent 活动生成*

---

The translation maintains the exact structure with 8 sections, preserves all markdown formatting including tables with alignment syntax, keeps code references like #12345 and file paths as-is, and uses natural technical Chinese appropriate for a developer newsletter context.</think>

# Hermes Agent 项目摘要

**日期：** 2026-10-12

---

## 1. 今日概览

Hermes Agent 今日开发活动频繁，**过去 24 小时内有 100 项更新**（50 个 issue + 50 个 PR）。开放与关闭项目的比例严重偏向开放状态（44 个开放 issue，44 个开放 PR），表明团队参与度高，但也存在待处理积压。值得注意的是，今天没有发布新版本。安全相关修复在最近的 PR 中较为突出，多个 P1/P2 缺陷影响了桌面端、CLI 和网关组件的核心功能。

---

## 2. 版本发布

**今天没有新版本**发布。稳定版仍为 v0.21.6。

---

## 3. 项目进展

过去 24 小时内合并/关闭的 PR：

| PR | 标题 | 状态 |
|---|---|---|
| #95595 | Desktop: switching to a warm session pegs renderer main thread | 已关闭 |
| #60747 | Desktop sessions freeze: synchronous SQLite/FTS session loading blocks event loop | 已关闭 |
| #131818 | Local skill correctly discovered by default profile is silently absent from sub-profile | 已关闭 |
| #66393 | Gate browser tool in non-interactive sessions | 已关闭 |
| #69776 | Async delegation dispatch note tells model to fabricate result | 已关闭 |
| #95044 | Desktop: tab switches stay slow on huge sessions | 已关闭 |

**主要进展：**
- 改进了桌面端的会话性能（解决 SQLite 阻塞问题）
- 处理了非交互环境下的浏览器工具安装问题
- 修复了异步委托行为

---

## 4. 社区热点话题

按参与度排序的最活跃 issue：

| Issue | 标题 | 评论数 | 表情 |
|-------|-------|--------|-------|
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | `hermes update` 在网关运行时留下"未重启运行中的网关"的持久警告 | 21 | 0 |
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | browser_exec 留下孤立的 browser_harness 守护进程 | 11 | 0 |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram DM topics：打开无关联消息的已投递主题 | 10 | 0 |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop 远程/VPS 会话加载缓慢，导航时取消 | 10 | 2 |
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | sk-ant-usr- 前缀的 Anthropic API 密钥被误分类为 OAuth | 6 | 6 👍 |

**分析：** 讨论最多的是 #107402，涉及更新生命周期管理——用户延迟重启时会收到持久警告。浏览器自动化 (#121095) 和 Telegram 集成 (#136567) 代表工具可靠性的痛点。Anthropic API 密钥误分类 (#133856) 同时收到了评论和反应 (6 👍)，表明用户对身份验证准确性的担忧。

---

## 5. 缺陷与稳定性

**关键 (P1) 缺陷：**

| Issue | 标题 | 严重程度 | 修复 PR |
|-------|-------|----------|--------|
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | Anthropic API 密钥被误分类为 OAuth 令牌 | P1 | — |
| [#136801](https://github.com/NousResearch/hermes-agent/issues/136801) | Telegram 网关因"余额不足"失败，尽管提供商有资金 | P2 | — |

**高优先级 (P2) 缺陷：**

| Issue | 标题 | 组件 |
|-------|-------|------|
| [#107402](https://github.com/NousResearch/hermes-agent/issues/107402) | hermes update 过期警告 | CLI/网关 |
| [#121095](https://github.com/NousResearch/hermes-agent/issues/121095) | 浏览器守护进程残留 | 工具 |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram DM 主题消息路由 | 网关 |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop VPS 会话加载问题 | 桌面端 |
| [#135037](https://github.com/NousResearch/hermes-agent/issues/135037) | Windows PATH 注册沙盒问题 | CLI/Windows |
| [#136842](https://github.com/NousResearch/hermes-agent/issues/136842) | write_file 相对于 TERMINAL_CWD 解析 | CLI |

**可用的修复 PR：**
- [#136879](https://github.com/NousResearch/hermes-agent/pull/136879) — Token count stamping
- [#136873](https://github.com/NousResearch/hermes-agent/pull/136873) — Nous Portal pricing tier estimates
- [#136876](https://github.com/NousResearch/hermes-agent/pull/136876) — pilk exclusion for cold-cache lock
- [#136765](https://github.com/NousResearch/hermes-agent/pull/136765) — Cron corrupted store errors

---

## 6. 功能请求与路线图信号

**高需求功能（按反应排序）：**

| Issue | 标题 | 反应 |
|-------|-------|-------|
| [#4431](https://github.com/NousResearch/hermes-agent/issues/4431) | Per-topic/per-chat configuration overrides (topic_configs) | 10 👍 |
| [#9645](https://github.com/NousResearch/hermes-agent/issues/9645) | Optional, Configurable Proactive Check-Ins | 8 👍 |
| [#125448](https://github.com/NousResearch/hermes-agent/issues/125448) | Support source-backed proactive follow-ups via gateway plugin | 3 |
| [#130197](https://github.com/NousResearch/hermes-agent/issues/130197) | Profile-level heartbeat that persists across sessions | 3 |

**引入功能的新 PR：**
- [#136855](https://github.com/NousResearch/hermes-agent/pull/136855) — `waypoint` 插件（桌面端会话状态）
- [#136874](https://github.com/NousResearch/hermes-agent/pull/136874) — `heartbeat2` 插件
- [#128926](https://github.com/NousResearch/hermes-agent/pull/128926) — OpenAI "Sign in with ChatGPT" provider

**预测：** 聊天级配置 (#4431) 和主动签到 (#9645) 具有强烈的社区兴趣，可能出现在即将发布的版本中。心跳和路标插件表明生态系统重点不断增长。

---

## 7. 用户反馈摘要

**今天报告的痛点：**

1. **桌面端性能** — 远程/VPS 后端的用户经历 20 多秒的会话加载、导航时取消，以及标签页切换时的 100% CPU 占用。大型 `state.db` 文件（报告 284 MB）导致阻塞问题。

2. **浏览器工具可靠性** — 每次 `browser_exec` 调用都会留下孤立的守护进程，没有清理机制。这影响了长时间运行的会话。

3. **身份验证不稳定** — `hermes auth add` 在非交互式 shell 中崩溃或挂起。Anthropic API 密钥被误分类，影响计费和 OAuth 流程。

4. **Windows 特定问题** — PATH 注册将沙盒/checkout 目录写入共享用户环境，导致安装之间的交叉污染。

5. **Telegram 集成** — 论坛主题中的消息路由不可靠；休息室恢复将消息误路由到之前的主题。

**满意信号：** SQLite 阻塞问题 (#60747, #95595) 的关闭和新的 token 计数戳记 (#136879) 解决了长期的可观测性差距。围绕密钥脱敏 (#136875, #129166, #129169) 的安全重点 PR 受到好评。

---

## 8. 积压关注

**需要维护者关注的重要问题：**

| Issue | 标题 | 时长 | 状态 |
|-------|-------|------|------|
| [#17873](https://github.com/NousResearch/hermes-agent/issues/17873) | tools/approval.py: Add reverse shell, download-execute patterns to DANGEROUS_PATTERNS | ~5 个月 | OPEN |
| [#37244](https://github.com/NousResearch/hermes-agent/issues/37244) | Robust SPA Clicking / Playwright Force Click | ~4 个月 | OPEN |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop 远程/VPS 会话加载问题 | ~3 个月 | OPEN (P2) |
| [#55369](https://github.com/NousResearch/hermes-agent/issues/55369) | Union integer\|string tool args drop leading zeros | ~3 个月 | OPEN |

**备注：**
- 安全增强 #17873（危险模式检测）尽管有 P2 优先级，但仍处于开放状态
- SPA 点击问题 (#37244) 持续数月，影响浏览器自动化可靠性
- Desktop VPS 性能 (#70445) 有 10 条评论，但尚无修复 PR

---

*根据 2026-10-12 的 Hermes Agent 活动生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all the content into natural technical Chinese
2. Keep all markdown structure, links, numbers, PR/issue references exactly as-is
3. Use the register of a Chinese developer newsletter
4. Output ONLY the translation, no explanation, no markdown fences

Let me go through each section and translate appropriately:

## 1. Today's Overview
- Translate to Chinese naturally
- Keep the numbers and data
- "nearai/ironclaw" stays as-is

## 2. Project Progress
- Translate table headers and content
- Keep PR numbers and links
- Translate status (Open -> 开放/开启, Closed -> 已关闭, Merged -> 已合并)

## 3. Community Hot Topics
- Translate

## 4. Bugs & Stability
- Translate

## 5. Feature Requests & Roadmap Signals
- Translate

## 6. User Feedback Summary
- Translate

## 7. Backlog Watch
- Translate table
- Keep PR numbers and links

Let me do the translation:</think>

# IronClaw 项目简报 — 2026-10-12

**仓库地址：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日概览

2026年10月12日，IronClaw 项目呈现中等维护活跃度。过去 24 小时内共有 7 个 Pull Request 更新：4 个仍处于开放状态，3 个已关闭/合并。值得注意的是，**Issue 零新增**，**发布零新增**。今日所有活动均聚焦于 Rust 依赖、GitHub Actions 和 WASM 工具链的例行更新，属于常规依赖维护而非功能开发或缺陷修复。项目当前处于稳定维护状态，未报告任何稳定性问题。

---

## 2. 项目进展

今日共有三个 Pull Request 完成合并/关闭：

| PR | 标题 | 状态 |
|----|------|------|
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | chore(deps): bump everything-else group with 31 updates | **已关闭** |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | chore(deps): bump actions group with 8 updates | **已关闭** |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | chore(deps): bump tokio-ecosystem group with 3 updates | **已关闭** |

以上三个合并的 PR 均为依赖更新，覆盖范围包括：
- Rust 生态 crates（thiserror、uuid、base64 等）
- GitHub Actions（claude-code-action、setup-node 等）
- Tokio 相关 crates（tokio-test、tower-http、tokio-tungstenite）

**评估：** 未推进任何功能特性；项目处于常规依赖维护状态。#8114 和 #8103（均创建于 9 月下旬）的关闭表明维护者正在积极处理 dependabot 队列。

---

## 3. 社区热点

过去 24 小时内未收到任何 Issue 提交或评论，因此暂无热点话题可分析。当前开放的 PR 均为 dependabot 发起，无评论、无反应，社区活跃度为零。

---

## 4. 缺陷与稳定性

过去 24 小时内未报告任何缺陷、崩溃或回归问题。基于现有数据，项目未出现稳定性风险。

---

## 5. 功能请求与路线图信号

过去 24 小时内未收到任何功能请求。当前开放的 PR 全部为依赖更新（dependabot），未透露任何功能特性或路线图相关信息。

---

## 6. 用户反馈汇总

过去 24 小时内未记录任何用户反馈（Issue、评论或反应）。依赖更新类 PR 均零评论、零点赞，表明用户对当前变更未表现出明显关注。

---

## 7. 积压关注

以下开放 Pull Request 尚未处理，建议维护者关注：

| PR | 标题 | 风险 | 存续时间 |
|----|------|------|----------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | chore(deps): bump wasm group with 4 updates | **中** | 约 50 天（2026-08-23） |
| [#8134](https://github.com/nearai/ironclaw/pull/8134) | chore(deps): bump everything-else group with 34 updates | 低 | 1 天 |
| [#8132](https://github.com/nearai/ironclaw/pull/8132) | chore(deps): bump tokio-ecosystem group with 4 updates | 低 | 1 天 |
| [#8133](https://github.com/nearai/ironclaw/pull/8133) | chore(deps): bump actions group with 10 updates | 低 | 1 天 |

**注意：** #7834 已开放约 50 天，风险等级标注为"中"（WASM 依赖更新）。尽管风险为中，但 WASM 工具链更新有时可能引入 WebAssembly 组件的运行时兼容性问题。维护者应优先审查此 PR，避免与 WASM 生态变化进一步脱节。

---

*简报基于 2026-10-12 GitHub 活动数据生成。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English project digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep the Markdown structure exactly as-is
3. Keep URLs, numbers, code references, issue numbers, etc. unchanged
4. Use natural technical Chinese suitable for a developer newsletter

Let me go through and translate section by section:

1. **Overview section** - translate to Chinese
2. **Releases** - translate to Chinese
3. **Project Progress** - translate tables
4. **Hot Topics** - translate
5. **Bugs & Stability** - translate
6. **Feature Requests** - translate
7. **User Feedback** - translate
8. **Backlog Watch** - translate
9. **Footer** - translate

Key terms to keep in English:
- PR, Issue, API, URL, CLI, MCP
- Model/Provider names (Aliyun, Codex, Tavily, HarmonyOS, etc.)
- Technical terms like "runtime", "backend", "cron"
- Code formatting

Let me do the translation now:</think>

# QwenPaw 项目动态 — 2026-10-12

## 1. 今日概览

QwenPaw 今日开发活动**较为活跃**，共处理 20 个 PR 更新（12 个已合并/关闭），10 个活跃 issue。未发布新版本。项目正在修复多个 bug（涉及控制台功能、插件管理和后端稳定性等方面），同时推进多项功能增强，包括 HarmonyOS 客户端、服务器端会话持久化以及技能管理系统。社区参与度保持稳定，issue 覆盖可用性、部署灵活性和系统可靠性等多个领域。

---

## 2. 版本发布

**今日无新版本发布。** 项目继续基于近期版本运行（根据 issue 报告为 v2.2.0/v2.2.1）。

---

## 3. 项目进展

### 已合并/关闭的 PR（12 个）

| PR | 作者 | 标题 | 领域 |
|----|--------|-------|--------|
| [#5732](https://github.com/agentscope-ai/QwenPaw/pull/5732) | wangfei010313 | feat: add 'none' memory backend to disable memory system | 记忆系统 |
| [#5661](https://github.com/agentscope-ai/QwenPaw/pull/5661) | wangfei010313 | feat: filter plugin market and CDN catalog by QwenPaw version compatibility | 插件 |
| [#5612](https://github.com/agentscope-ai/QwenPaw/pull/5612) | wangfei010313 | Fix/plugin market version routing | 插件 |
| [#5569](https://github.com/agentscope-ai/QwenPaw/pull/5569) | wangfei010313 | feat(desktop): eliminate startup white screen with instant splash loading | 桌面端 |
| [#1977](https://github.com/agentscope-ai/QwenPaw/pull/1977) | futuremeng | fix(runtime): harden mcp teardown and cron/channel exception handling | 运行时 |
| [#2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) | futuremeng | fix(runner): auto-recover context overflow with compaction retry | 运行器 |
| [#2520](https://github.com/agentscope-ai/QwenPaw/pull/2520) | futuremeng | fix(models): preflight active model and surface provider compute errors | 模型 |
| [#2052](https://github.com/agentscope-ai/QwenPaw/pull/2052) | futuremeng | fix(mcp): degrade connection errors to tool-level failure | MCP |
| [#1978](https://github.com/agentscope-ai/QwenPaw/pull/1978) | futuremeng | feat(mcp): improve import validation/preview and runtime status diagnostics | MCP |
| [#1848](https://github.com/agentscope-ai/QwenPaw/pull/1848) | futuremeng | feat(mcp): improve import templates and preserve description | MCP |
| [#1480](https://github.com/agentscope-ai/QwenPaw/pull/1480) | futuremeng | fix(ollama): default to 127.0.0.1 and surface original connection errors | 模型 |
| [#1883](https://github.com/agentscope-ai/QwenPaw/pull/1883) | futuremeng | feat(agents-square): add source browsing and import flow | 平台 |

### 审核中的开放 PR（8 个）

| PR | 作者 | 规模 | 标题 | 状态 |
|----|--------|------|-------|--------|
| [#8182](https://github.com/agentscope-ai/QwenPaw/pull/8182) | LUOSENGWA | XL | feat(chats): persist per-chat approval level on the server | 开放 |
| [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) | LUOSENGWA | XXXL | feat(apps): add HarmonyOS native client (apps/qwenpaw-harmony) | 开放 |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | grissiom | L | feat(skills): support nested (categorised) skill directories | 开放 |
| [#8156](https://github.com/agentscope-ai/QwenPaw/pull/8156) | LUOSENGWA | L | feat(api): add coding-cli management endpoints for worker containers | 开放 |
| [#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) | LUOSENGWA | M | feat(console): add an official "reduced effects" tier to Appearance & language | 审核中 |
| [#7973](https://github.com/agentscope-ai/QwenPaw/pull/7973) | yang0228 | M | fix(agents): recover from rejected media URLs | 开放 |
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | jcsong130 | S | fix(agents): recognize llama-server and DashScope URL audio rejections in audio-fallback classifier | 开放 |
| [#7127](https://github.com/agentscope-ai/QwenPaw/pull/7127) | haosong384 | S | docs: add --agent-id targeting guide to CLI docs | 开放 |

---

## 4. 社区热点

### 活跃度最高的 Issue（按互动量：评论数 + 最近活动时间排序）

| Issue | 标题 | 作者 | 评论数 | 状态 |
|-------|-------|--------|----------|--------|
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | [Feature]: 模型目录请为 Aliyun Token Plan 模型声明 thinking_param_style | Andykpa | 3 | 开放 |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | [Bug]: Console 聊天间歇性静默空完成——回合约 1 秒结束、output 为空、模型从未被调用 | feng183043996 | 3 | 开放 |
| [#8181](https://github.com/agentscope-ai/QwenPaw/issues/8181) | [Feature]: 会话级变更通知：让聊天区实时反映后端会话内容的变化，无需硬刷新页面 | One-sixth | 1 | 开放 |

**分析：** 讨论最多的 issue 揭示了三个不同的用户需求：
1. **模型目录完整性** — 使用 Aliyun Token Plan 模型的用户需要在 UI 控件中正确声明 thinking 参数，否则功能无法正常使用
2. **控制台可靠性** — Web 控制台聊天中的间歇性静默失败是影响生产部署的重大可用性问题
3. **实时同步** — 用户希望会话级变更通知功能，避免后端状态变化时必须强制刷新页面

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 标题 | 修复 PR？ |
|----------|-------|-------|---------|
| **高** | [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | Console 聊天间歇性静默空完成——1秒返回、output 为空、模型从未被调用 | 无 |
| **高** | [#8173](https://github.com/agentscope-ai/QwenPaw/issues/8173) | Codex 后端连接在重启后静默断开；"running" 状态的僵尸任务阻止恢复 | 无 |
| **高** | [#8175](https://github.com/agentscope-ai/QwenPaw/issues/8175) | ProviderManager.active_model 启动时未加载 + 静默异常处理导致定时任务失败 | 无 |
| **中** | [#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | 从 GitHub 安装技能会损坏二进制文件——非 UTF-8 字节被替换为 U+FFFD | 无 |
| **中** | [#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) | Console 硬编码 basename 为 /console，无法用于反向代理子路径部署 | 无 |
| **中** | [#8176](https://github.com/agentscope-ai/QwenPaw/issues/8176) | 插件商店"更新全部"仅更新官方插件，忽略第三方插件 | 无 |
| **低** | [#8180](https://github.com/agentscope-ai/QwenPaw/issues/8180) | 会话级审批级别存储在 localStorage 还是服务器端（设计问题） | 无 |

**稳定性担忧：** 三个高严重性 bug 影响生产稳定性：
- 静默控制台失败导致响应不完整
- 重启后 Codex 后端断开连接，产生僵尸任务
- 启动加载问题导致定时任务失败

今日报告的 bug 暂无修复 PR。

---

## 6. 功能需求与路线图信号

### 活跃的功能需求

| Issue | 标题 | 预期版本 |
|-------|-------|-----------------|
| [#8181](https://github.com/agentscope-ai/QwenPaw/issues/8181) | 会话级变更通知：实现聊天区实时更新，无需刷新页面 | v2.3.x |
| [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | web_search tavily provider 需要 API-key 配置入口 | v2.3.x |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | 支持嵌套（分类）技能目录 | 审核中 |
| [#8182](https://github.com/agentscope-ai/QwenPaw/pull/8182) | 在服务器端持久化每个聊天的审批级别 | 审核中 |
| [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164) | HarmonyOS 原生客户端 | 审核中 |

**路线图信号：** 开放中的 PR 表明下个版本将包含：
- HarmonyOS 原生客户端支持
- 服务器端会话状态持久化（审批级别）
- 嵌套技能目录组织
- 增强的插件/更新管理

---

## 7. 用户反馈总结

### 痛点

1. **部署灵活性** — 在反向代理后运行 QwenPaw 的用户需要可配置的控制台基础路径（[#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177)）
2. **二进制处理** — 从 GitHub 安装技能会损坏图片/字体文件（[#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179)）
3. **插件生态** — "更新全部"仅处理官方插件，令使用第三方插件的用户感到沮丧（[#8176](https://github.com/agentscope-ai/QwenPaw/issues/8176)）
4. **控制台可靠性** — 聊天中间歇性静默失败破坏了生产环境的信任度（[#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172)）
5. ** Provider 配置** — 内置 Tavily provider 缺少 API 密钥配置，无法使用付费配额（[#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)）

### 正面信号

- MCP 改进已合并（导入验证、运行时诊断、连接错误处理）
- 记忆系统现支持通过 "none" 后端完全禁用
- 桌面端启动体验优化，加入闪屏加载
- 插件市场版本兼容性过滤已添加

---

## 8. 积压待办

### 需要维护者关注的长等待 Issue

| Issue | 存在时间 | 标题 | 优先级 |
|-------|-----|-----|----------|
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 约 17 天 | Aliyun Token Plan 模型缺少 thinking_param_style 声明 | 中 |

今日其他 issue 均已收到至少 1 条评论/活动，24 小时内无遗漏。

---

*基于 2026-10-12 日 GitHub 数据为 agentscope-ai/QwenPaw 生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese, preserving the exact Markdown structure while using natural technical Chinese suitable for a Chinese developer newsletter. Let me go through and translate carefully.

Key points:
1. Keep all Markdown structure exactly (headings, tables, lists, etc.)
2. Keep URLs, issue/PR numbers, code references as-is
3. Use natural technical Chinese - not literal translation
4. Output only the translation, no preamble or explanation

Let me translate section by section:</think>

# ZeroClaw 项目摘要 — 2026-10-12

---

## 1. 今日概况

ZeroClaw 呈现高开发活跃度，过去 24 小时内有 **47 个开放 PR** 和 **20 个活跃 Issue**。项目正在处理关键的安全和稳定性工作：多个涉及 Agent 所有权隔离的 P1 级安全漏洞正在积极开发中，v0.8.6/v0.9.0 版本发布也在推进中。本周无新版本发布。社区积极提交 Bug 和功能需求，围绕安全加固、插件/WASM 基础设施和跨平台 Windows 支持的讨论尤为活跃。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。

---

## 3. 项目进展

### 已合并/关闭的 PR（3 个）

| PR | 标题 | 状态 |
|----|------|------|
| [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531) | fix(tunnel): 报告 Tailscale 实际为网关提供服务的 URL | **已关闭** |
| [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | [Bug]: ZeroCode 侧边栏在守护进程重启后将失败的会话显示为绿色 | **已关闭**（Issue） |
| [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | [Bug]: 在同一轮次中重新运行已批准的 shell 命令会导致 Agent 循环中止 | **已关闭**（Issue） |

### 正在开发的功能亮点

| PR | 标题 | 备注 |
|----|------|------|
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | feat(release): 在支持版本的发布包中附带 WASM 插件宿主 | 目标 v0.8.6 |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | feat(sessions): 添加持久会话提示附件 | 大功能，多通道 |
| [#11660](https://github.com/zeroclaw-labs/zeroclaw/pull/11660) | fix(web): 在整轮交互中保持聊天输入框聚焦 | 小型 UX 修复 |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | feat(tools): 默认启用 11 个内置工具并提供完整配置项 | Release v0.8.6 & v0.9.0 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | fix(delegate): 保持受限委托的 workspace、工具上限和命令策略边界 | 大型安全相关修复 |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | feat(quickstart): 从 zeroclaw quickstart 安装并激活工具插件 | 插件生态系统 |
| [#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302) | feat(plugins): 绑定通道实例并在安装时授予其权限 | 插件生态系统 |

---

## 4. 社区热点话题

### 最活跃的 Issue（按评论数和优先级）

| Issue | 标题 | 评论数 | 优先级 | 主题 |
|-------|------|--------|--------|------|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | [追踪]: 持久内存 - 将相关性、可操作性和管理平面的设计 wiring 到同等水平 | 10 | P2 | **内存架构** |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [追踪]: 运行时和网关交付 - v0.8.6 和 v0.9.0 | 6 | P2 | **发布路线图** |
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | [Bug]: firejail_args 被宣传和报告但从未应用到 firejail 调用中 | 4 | P1 | **运行时沙箱** |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | [Bug]: 会话/通道读写工具缺少 Agent 粒度的所有权隔离 | 4 | P1 | **安全 — 数据隔离** |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | [Bug]: 知识图谱没有按 Agent 进行归属 | 4 | P1 | **安全 — 数据隔离** |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | [Bug]: Telegram 发送路径忽略 429 retry_after | 2 | P1 | **通道可靠性** |
| [#11667](https://github.com/zeroclaw-labs/zeroclaw/issues/11667) | [功能]: 为其他 Agent 启动的轮次是否继承调用者的命令策略 | 1 | — | **委托设计** |

**分析：** 安全和隔离问题占据主导地位。两个关键的 S0 级 Bug（#9646、#9647）暴露了跨 Agent 数据访问漏洞，这对多 Agent 部署来说是重大安全隐患。持久内存追踪器（#8891）反映了社区对跨会话内存的强烈需求，而运行时/网关追踪器（#7432）表明版本发布节奏得到积极管理。

---

## 5. Bug 与稳定性

### 关键 Bug（P1 / 高风险）

| Issue | 严重程度 | 标题 | 修复 PR？ |
|-------|----------|------|----------|
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | S0 — 数据泄露 / 安全风险 | 会话/通道工具缺少 Agent 粒度的所有权隔离 | 无 |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | S0 — 数据泄露 / 安全风险 | 知识图谱没有按 Agent 进行归属 | 无 |
| [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | S1 — 工作流阻塞 | save_dirty 在未迁移的 V1/V2 配置上写入 schema_version = 3，导致 Agent 消失 | 无 |
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | S2 — 降级行为 | firejail_args 从未应用到 firejail 调用 | 无 |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | S1 — 工作流阻塞 | Telegram 忽略 429 retry_after，加剧限流问题 | 无 |

### 上次摘要后已修复的 Bug

- [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586): ZeroCode 侧边栏在守护进程重启后状态错误 — **已关闭**
- [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612): ACP 中重新运行已批准 shell 命令会中止 Agent 循环 — **已关闭**
- [#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531): Tailscale 隧道 URL 报告 — **已合并**

### 中低等级 Bug

- [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506): 邮件通道无法保留 CC 收件人（P2）
- [#10755](https://github.com/zeroclaw-labs/zeroclaw/issues/10755): 内存合并丢失偏好来源信息（P2）
- [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655): 核心冲突覆盖隐藏了不相关的记忆（S2）
- [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654): JPEG 在检查解码内存上限之前就进行复制（S3）
- [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658): 网页聊天输入框在回复后失去焦点（S3）

---

## 6. 功能需求与路线图信号

### 本日新增功能需求

| Issue | 标题 | 领域 |
|-------|------|------|
| [#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668) | 使网关 MAX_BODY_SIZE 可配置 + 返回拒绝状态码 + 大小信息 | 网关 |
| [#11665](https://github.com/zeroclaw-labs/zeroclaw/issues/11665) | 更好的 Windows 支持（安装程序、Docker、WSL） | 跨平台 |
| [#11664](https://github.com/zeroclaw-labs/zeroclaw/issues/11664) | 第五级暗工厂工作流（多 Agent 编排） | 多 Agent |
| [#11662](https://github.com/zeroclaw-labs/zeroclaw/issues/11662) | 将通道与核心分离（模块化通道） | 架构 |
| [#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) | 轮次合并的目标分类可配置 | 内存 |
| [#11667](https://github.com/zeroclaw-labs/zeroclaw/issues/11667) | 确定是否为其他 Agent 启动的轮次继承调用者的命令策略 | 委托 |

### 路线图相关的正在开发的工作

- **v0.8.6**: 发布包中附带 WASM 插件宿主（#11347），默认工具集变更（#11221），配置验证（#10499），插件快速安装（#11309）
- **v0.9.0**: 网关分离（#7432），持久内存平衡（#8891），多通道 Agent 粒度隔离（#9646、#9647）
- **架构**: Cron 抽取为独立的 zeroclaw-cron crate（#10546），通道模块化（#11662）

**预测:** Windows 安装程序改进（#11665）和可配置轮次合并（#11657）基于范围和维护者兴趣信号，很有可能进入 v0.9.0 或后续版本。

---

## 7. 用户反馈摘要

### 发现的痛点

1. **安全隔离缺陷** — 用户（特别是运行多 Agent 配置的用户）担心 Agent 可以在没有边界的情况下访问彼此的会话和知识图谱（#9646、#9647）。这是一个 S0 级问题，吸引了安全导向社区的关注。

2. **配置迁移脆弱性** — `save_dirty` Bug（#11579）导致在未迁移的 V1/V2 配置上保存后 Agent "消失"。从旧版本升级的用户受到影响。

3. **Windows 入局门槛** — 安装过程被描述为"非常漫长和复杂"（#11665）。Windows 新用户面临较高的入门障碍。

4. **Telegram 集成可靠性** — 429 重试 Bug（#11615）在限流时导致消息丢失。依赖 Telegram 进行生产工作流的用户将此视为阻塞性问题。

5. **邮件通道功能限制** — 无法保留 CC 收件人或发送真正的"回复所有人"（#9506），限制了专业邮件工作流中的使用。

6. **ACP Shell 行为异常** — 重新运行已批准 shell 命令会意外中止 Agent 循环（#11612），扰乱了受监管的工作流。

### 满意度信号

- ZeroCode UI 改进（#11660 — 聊天输入框聚焦修复）和 #11586（侧边栏状态）显示了对 UX 反馈的响应速度
- 插件生态系统快速成熟（签名、绑定、快速安装），表明用户对可扩展性有强烈需求

---

## 8. 待办事项关注

### 需要维护者关注的长线 Issue

| Issue | 存在时间 | 标题 | 状态 |
|-------|----------|------|------|
| [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 约 3 个月 | 持久内存追踪器（多 PR 史诗级任务）| 开放，进行中 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 约 4 个月 | 运行时和网关交付追踪器（v0.8.6 / v0.9.0）| 开放，进行中 |
| [#10546](https://github.com/zeroclaw-labs/zeroclaw/issues/10546) | 约 2 个月 | 将 cron 抽取为独立的 zeroclaw-cron crate | 开放 |
| [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | 约 3 个月 | 邮件通道 CC / 回复所有人保留 | 开放 |

### 依赖待合并的堆叠 PR

| PR | 标题 | 阻塞依赖 |
|----|------|----------|
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | 发布包中附带 WASM 插件宿主 | 堆叠在 #11311 之上 |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | 快速启动插件安装 | 堆叠；合并顺序：#11581 → #11302 → 本 PR |
| [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) | 带验证替换的插件更新 | 堆叠在 #11261 → #11236 → #11581 之上 |
| [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) | 采用能力的构造函数 | 需要 #11090 作为设计前置条件 |

**需要行动:** 维护者应优先合并基础性 PR（#11581、#11302、#11236）以疏通插件和发布流程。

---

*摘要基于 2026-10-12 的 GitHub 活动生成。所有 Issue/PR 链接指向 https://github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*