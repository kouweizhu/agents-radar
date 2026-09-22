# OpenClaw 生态日报 2026-09-22

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-22 01:04 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this Project Digest into Chinese while following the rules. Let me analyze the content and translate it appropriately, maintaining the exact Markdown structure.

Key things to preserve:
- All headings, tables, lists, blockquotes
- Bold/italic formatting
- URLs and links
- Issue/PR numbers and links
- Version numbers and tags
- File paths and technical identifiers
- Emoji where present
- Numbers and dates

I need to translate the prose while keeping technical terms in their original form or using natural Chinese technical terms. The register should be that of a Chinese developer newsletter.

Let me translate section by section:

---

# OpenClaw 项目简报 — 2026-09-22

## 今日概览

OpenClaw 保持高活跃度，过去 24 小时内有 500 个 Issue 和 500 个 PR 更新。目前有 452 个活跃 Issue 和 313 个活跃 PR，期间关闭/合并了 48 个 Issue 和 187 个 PR。新发布了一个版本 (v2026.7.35) 作为 extended-stable（相当于 LTS）仅网关版本。围绕数据库检查点、内存管理以及近期 2026.9.x 版本线的回归报告，存在关键稳定性问题。

---

## 发布动态

**v2026.7.35** — *extended-stable* (仅网关)  
发布日期: 2026-09-22  
这是当前的 LTS 等效版本，代表 2026 年 7 月下旬的 OpenClaw，包含回填的关键安全更新、可靠性和性能修复以及新模型支持。最新开发版本为 **2026.9.5**。

> **迁移提示:** 遇到稳定性问题（见 Issue #153257、#154114）的 2026.9.x 用户可考虑回滚到此 extended-stable 版本。

---

## 项目进展


**今日合并/关闭的重点 PR：**

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#154932](https://github.com/openclaw/openclaw/pull/154932) | fix(tasks): 避免重启期间的误报维护警告 | CLOSED |
| [#155217](https://github.com/openclaw/openclaw/pull/155217) | refactor: 统一嵌套 Markdown 列表测试 | CLOSED |

**推进中的活跃 PR：**

- [#150513](https://github.com/openclaw/openclaw/pull/150513) — **fix(agents): 重试超时的处理** — 正在审核中

，长工具循环中溢出压缩耗尽的问题已修复
- [#154707](https://github.com/openclaw/openclaw/pull/154707) — **perf(sessions): 重用工作节点成员快照** — 多视图网关性能大幅提升
- [#152727](https://github.com/openclaw/openclaw/pull/152727) — **fix(update): 限制中断更新的结算探测** — P1 级别，需提供证据，解决更新失败后的 CLI 卡顿
- [#153829](https://github.com/openclaw/openclaw/pull/153829) — **fix(telegram): 控制命令在活跃对话后不再卡顿** — P1 级别，已提供证据
- [#154051](https://github.com/openclaw/openclaw/pull/154051) — **feat(ui): 展开视频内导航** — 增强了聊天回合中的视频导航功能

社区讨论主要围绕几个关键问题展开。SQLite WAL 文件膨胀至 1.4-2.8 GB 导致启动受阻，引发 50 条评论，P0 级别需要紧急修复。网关内存泄漏从 350MB 攀升至 15.5GB，P1 级别存在崩溃风险。Codex PreToolUse 钩子中继产生 CPU 密集型进程，P0 级别影响 RPC 响应。转向模式无法在回合中途注入消息，P1 级别需要改进。版本 2026.9.5 将稳定环境变为 8 小时故障，P0 级别需要调查回归问题。

从这些问题可以看出几个关键模式：Windows 平台的可靠性问题、持续负载下的资源泄漏，以及 2026.9.x 版本对生产稳定性的影响。P0 级别的关键缺陷包括 SQLite WAL 增长至 2.8 GB 阻止启动、Codex 钩子中继 CPU 饱和导致 RPC 停滞、Write 工具缺少追加模式造成数据丢失，以及 2026.9.5 版本的回归问题导致 8 小时故障。

P1 级别的内存泄漏问题使 RSS 达到 15.5GB，僵尸进程累积，2026.9.4 版本出现回复丢失。

最近的功能改进集中在浏览器默认使用高效的无头模式、聊天中的视频导航和交付状态clarification，以及多阶段群体验证。一些高票功能请求包括按代理配置梦想模式、会话上下文膨胀导致引导文件每回合重新注入，以及 QA 工具默认套件 parity。

用户反馈揭示了几个关键问题：Windows 可靠性存在多个 P0 级别缺陷（ WAL 损坏、计划任务失败、npm 更新异常），2026.9.x 版本升级导致稳定环境变为 8 小时故障，资源泄漏表现为内存增长至 15.5GB、WAL 文件达 2.8GB、插件构建临时目录每日增长 7.5GB，还有消息丢失和交付失败的问题。

积极的方面包括稳定性修复和用户体验改进的活跃维护、社区参与度高，以及提供回滚路径的扩展稳定版本。一些重要问题需要维护者关注，包括会话上下文膨胀（引导重新注入）和 QA 工具默认套件 parity 的需求，还有消息列表分页等较小的功能请求。

几个 PR 正在等待作者行动，包括持久化后续队列、保留自动回退运行中的修正，以及压缩作业定价。

整体而言，项目活跃度高，稳定性问题正在修复，但仍存在 Windows 可靠性、资源泄漏和版本回归等需要持续关注的问题。</think>

# OpenClaw 项目简报 — 2026-09-22

## 今日概览

OpenClaw 保持高活跃度，过去 24 小时内有 500 个 Issue 和 500 个 PR 更新。目前有 452 个活跃 Issue 和 313 个活跃 PR，期间关闭/合并了 48 个 Issue 和 187 个 PR。新发布了一个版本 (v2026.7.35) 作为 extended-stable（相当于 LTS）仅网关版本。围绕数据库检查点、内存管理以及近期 2026.9.x 版本线的回归报告，存在关键稳定性问题。

---

## 发布动态

**v2026.7.35** — *extended-stable* (仅网关)  
发布日期: 2026-09-22  
这是当前的 LTS 等效版本，代表 2026 年 7 月下旬的 OpenClaw，包含回填的关键安全更新、可靠性和性能修复以及新模型支持。最新开发版本为 **2026.9.5**。

> **迁移提示:** 遇到稳定性问题（见 Issue #153257、#154114）的 2026.9.x 用户可考虑回滚到此 extended-stable 版本。

---

## 项目进展

**今日合并/关闭的重点 PR：**

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#154932](https://github.com/openclaw/openclaw/pull/154932) | fix(tasks): 避免重启期间的误报维护警告 | CLOSED |
| [#155217](https://github.com/openclaw/openclaw/pull/155217) | refactor: 统一嵌套 Markdown 列表测试 | CLOSED |

**推进中的活跃 PR：**

- [#150513](https://github.com/openclaw/openclaw/pull/150513) — **fix(agents): 重试溢出恢复预算** — P1，正在等待维护者审核。修复长工具循环中的溢出压缩耗尽问题。
- [#154707](https://github.com/openclaw/openclaw/pull/154707) — **perf(sessions): 重用工作节点成员快照** — 多视图 Gateway 性能大幅提升。
- [#152727](https://github.com/openclaw/openclaw/pull/152727) — **fix(update): 限制中断更新的结算探测** — P1，需提供证据。修复更新失败后 CLI 卡顿问题。
- [#153829](https://github.com/openclaw/openclaw/pull/153829) — **fix(telegram): 控制命令在活跃对话后不再卡顿** — P1，已提供证据。
- [#154051](https://github.com/openclaw/openclaw/pull/154051) — **feat(ui): 展开视频内导航** — 增强了聊天回合中的视频导航功能。

---

## 社区热点

**评论最活跃的 Issue：**

1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — SQLite WAL 膨胀至 1.4–2.8 GB，wal_autocheckpoint=1000 形同虚设 — **50 条评论** — P0，崩溃循环  
   *核心需求:* Windows Gateway 可靠性；用户报告 2.8 GB WAL 文件阻塞启动。

2. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — Gateway 内存泄漏：RSS 从 350MB 增至 15.5GB — **31 条评论** — P1  
   *核心需求:* 长期运行 Gateway 稳定性；2-3 天后 OOM 崩溃。

3. **[#91009](https://github.com/openclaw/openclaw/issues/91009)** — Codex PreToolUse 钩子中继产生 CPU 密集型进程 — **26 条评论** — P0  
   *核心需求:* Codex 集成性能；RPC 阻塞。

4. **[#48003](https://github.com/openclaw/openclaw/issues/48003)** — 转向模式无法在回合中途注入消息 — **20 条评论** — P1  
   *核心需求:* 可靠的多轮转向行为。

5. **[#153257](https://github.com/openclaw/openclaw/issues/153257)** — 2026.9.5 将稳定环境变为 8 小时故障 — **19 条评论** — P0  
   *核心需求:* 2026.9.x 回归调查。

**洞察:** 头部问题揭示三个反复出现的主题：(1) Windows 特定可靠性差距，(2) 持续负载下的资源管理泄漏，(3) 影响生产稳定性的近期 2026.9.x 回归。

---

## 缺陷与稳定性

**今日报告的 P0 关键缺陷：**

| Issue | 摘要 | 严重程度 | 修复 PR? |
|-------|---------|----------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 膨胀至 2.8 GB，阻塞启动 | P0, 崩溃循环, UX 阻塞 | — |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex 钩子中继 CPU 密集，阻塞 RPC | P0 | — |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 工具缺少追加模式 — 数据丢失 | P0, 数据丢失 | — |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 回归：稳定环境 → 8 小时故障 | P0, UX 阻塞 | — |
| [#154114](https://github.com/openclaw/openclaw/issues/154114) | 更新预演尽管认证正常仍失败 | P0, UX 阻塞 | — |

**值得注意的 P1 缺陷：**

- [#91588](https://github.com/openclaw/openclaw/issues/91588) — 内存泄漏至 15.5GB
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — 泄漏未回收子进程 → 僵尸进程累积
- [#148707](https://github.com/openclaw/openclaw/issues/148707) — 回复丢失，出现"no active tool authority snapshot"（2026.9.4 回归）

**近期关闭（与稳定性相关）：**
- [#154571](https://github.com/openclaw/openclaw/issues/154571) — `/tmp/openclaw-plugin-build-*` 目录泄漏（每轮约 430 MB）
- [#146637](https://github.com/openclaw/openclaw/issues/146637) — npm update 在 Linux Mint 上全局安装交换失败
- [#153246](https://github.com/openclaw/openclaw/issues/153246) — 插件构建临时目录每日增长约 7.5 GB

---

## 功能请求与路线图信号

**活跃中的功能 PR 指示方向：**

- [#154607](https://github.com/openclaw/openclaw/pull/154607) — improve(browser): 默认托管 Chromium 实现高效无头启动
- [#154051](https://github.com/openclaw/openclaw/pull/154051) — feat(ui): 在聊天回合中展开视频导航
- [#154365](https://github.com/openclaw/openclaw/pull/154365) — improve(chat): 澄清交付状态和恢复操作
- [#153627](https://github.com/openclaw/openclaw/pull/153627) — feat(swarm): 添加经过验证的混合阶段群体评估

**Issue 中的高票功能请求：**

- [#67413](https://github.com/openclaw/openclaw/issues/67413) — 逐代理 dreaming 配置 — 5 👍
- [#67419](https://github.com/openclaw/openclaw/issues/67419) — 会话上下文膨胀：引导文件每轮重复注入 — 2 👍
- [#80319](https://github.com/openclaw/openclaw/issues/80319) — QA tool-defaults 套件 parity — 1 👍
- [#60572](https://github.com/openclaw/openclaw/issues/60572) — 多槽位内存架构 — 3 👍

**路线图信号:** 性能优化（会话快照、工作节点复用）、用户体验改进（交付状态、视频导航）和内存架构改进似乎是活跃开发领域。逐代理配置（dreaming、TTS/STT）仍是请求中的增强功能。

---

## 用户反馈摘要

**痛点识别：**

1. **Windows 可靠性差距** — 多个 P0 问题（#143524、#91144）专门针对 Windows 环境。用户报告 WAL 损坏、计划任务失败和 Windows 主机上的 npm 更新问题。

2. **近期 2026.9.x 不稳定** — 多个问题（#153257、#154114、#148707）源于 9.4→9.5 升级路径。从稳定 9.x 版本升级的用户报告 8 小时恢复会话、迁移失败和回复丢失。

3. **持续负载下的资源泄漏** — 内存增长至 15.5GB、WAL 文件超过 2.8GB、插件构建临时目录每日累积 7.5GB，表明累积性资源管理失败。

4. **消息丢失与交付失败** — 跨 #48003、#87744、#148707、#90944 的反复主题：用户经历静默消息丢失、回复截断（约 1000-1100 字符）和交付确认失败。

**积极信号：**
- 活跃的维护响应：多个 PR 解决稳定性和用户体验问题
- 社区参与度保持高企（500 个 Issue/PR 活动）
- Extended-stable 版本为生产用户提供回滚路径

---

## 待办关注

**需要维护者关注的长等待重要 Issue：**

| Issue | 时长 | 优先级 | 状态 |
|-------|-----|----------|--------|
| [#67419](https://github.com/openclaw/openclaw/issues/67419) — 会话上下文膨胀（引导重复注入） | 约 5 个月 | P2 | 停滞 |
| [#80319](https://github.com/openclaw/openclaw/issues/80319) — QA tool-defaults 套件 parity | 约 4 个月 | P2 | 停滞 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) — 逐代理 dreaming 配置 | 约 5 个月 | P2 | 停滞 |
| [#71452](https://github.com/openclaw/openclaw/issues/71452) — 消息列表分页（25 条限制） | 约 5 个月 | P3 | 停滞 |
| [#85461](https://github.com/openclaw/openclaw/issues/85461) — 图像生成使用元数据 | 约 4 个月 | P3 | 停滞 |

**停滞 PR 需作者推动：**

| PR | 时长 | 状态 |
|----|-----|--------|
| [#82572](https://github.com/openclaw/openclaw/pull/82572) — 跨重启持久化后续队列 | 约 4 个月 | 等待作者 |
| [#151627](https://github.com/openclaw/openclaw/pull/151627) — 在自动后备运行中保留修正 | 约 4 天 | 等待作者 |
| [#155277](https://github.com/openclaw/openclaw/pull/155277) — 压缩作业定价 | 约 1 天 | 等待作者 |

---

*数据来源：OpenClaw 仓库 — 2026-09-22*

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese. I need to:
1. Translate all the text content into Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep all technical terms, project names, issue numbers, URLs, code, numbers as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate section by section, maintaining the exact structure.

Key points:
- Keep headings as-is (or translate meaningfully)
- Keep tables with alignment markers
- Keep issue/PR numbers, URLs, code blocks
- Use Chinese punctuation where appropriate but keep numbers/dates
- Technical terms can remain in English or be translated naturally

Let me translate:</think>

# 跨项目生态对比报告 — 2026-09-22

---

## 1. 生态概览

个人 AI 助手与自主代理开源领域正在经历快速成熟期，当前跟踪的五个项目代表了不同的架构理念和目标用户。生态呈现出明显的分层：**OpenClaw** 和 **ZeroClaw** 在原始活跃度上领先，而 **Hermes Agent** 侧重于上游集成和模型提供商灵活性。**QwenPaw** 专注于运行时稳定性和渠道集成，**IronClaw** 则保持小众的基准测试定位。所有项目的共同主题包括可靠性工程（内存泄漏、上下文管理）、安全加固（凭证处理、工具审批）以及多渠道消息传递。随着这些系统向生产部署迈进，领域正从功能堆砌转向运维稳定性。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|------|----------|--------------|----------|---------|----------|
| **Issue（24h）** | 500 | 50 | 1 | 17 | 50 |
| — Open/活跃 | 452 | 43 | 1 | 8 | 46 |
| — 已关闭 | 48 | 7 | 0 | 9 | 4 |
| **PR（24h）** | 500 | 50 | 1 | 33 | 50 |
| — Open | 313 | 49 | 0 | 17 | 49 |
| — 已合并/关闭 | 187 | 1 | 1 | 16 | 1 |
| **Release（24h）** | 1 | 1 | 0 | 0 | 0 |
| **健康状态** | 🟢 稳定 | 🟢 稳定 | 🟡 低活跃 | 🟢 活跃 | 🟢 活跃 |

---

## 3. OpenClaw 的定位

**相比同行的优势：**

- **最高的原始活跃度** — 每日 500 条 issue/PR 更新，表明贡献者社区和用户问题反馈规模最大
- **成熟的发布节奏** — 长期支持版（extended-stable）提供生产级可靠性保障，其他同行缺乏此机制
- **广泛的覆盖范围** — P0/P1 问题涵盖 Windows 可靠性、内存管理、消息投递和上下文压缩 — 表明企业级运维需求

**技术路径差异：**

| 维度 | OpenClaw | 同行项目 |
|------|----------|----------|
| **发布模式** | 双轨：前沿版本 + 长期支持版 | Hermes：滚动补丁；ZeroClaw/QwenPaw：临时发布 |
| **治理方式** | 正式路线图，带里程碑标签 | Hermes：RFC 驱动；ZeroClaw：Tracker 驱动；IronClaw：极简 |
| **范围** | 全栈代理平台 | Hermes：模型提供商编排；ZeroClaw：Rust 原生运行时；QwenPaw：运行时 + 渠道 |

**社区规模：** OpenClaw 每日 500 条更新 vs. Hermes/ZeroClaw 各 50 条，表明 OpenClaw 的活跃社区规模约为次活跃项目的 **10 倍**。IronClaw 的个位数活跃度表明这是一个专业、小众的项目。

---

## 4. 共同技术关注点

以下需求在多个项目中出现，反映了行业范围的优先级：

| 共同需求 | 受影响项目 | 证据 |
|----------|------------|------|
| **上下文/Token 预算管理** | OpenClaw (#40001, #48003), Hermes (#107516), QwenPaw (#10068) | 精简摘要、截断处理、压缩重试 |
| **内存/资源泄漏** | OpenClaw (#91588, #143524), Hermes (#118053), ZeroClaw (#10230) | WAL 增长、RSS 膨胀、守护进程溢出 |
| **多渠道消息投递** | OpenClaw (#87744), Hermes (#154365), ZeroClaw (#10929), QwenPaw (#7882, #10975) | WhatsApp、Telegram、Matrix 集成缺陷；投递回执 |
| **安全：凭证处理** | OpenClaw（API 密钥管理）, Hermes (#118651), ZeroClaw (#11026), QwenPaw (#7882) | 代理凭证脱敏、profile 凭证继承 |
| **平台可靠性（Windows）** | OpenClaw (#143524), Hermes (#118026), ZeroClaw (#10536) | fcntl、Seatbelt、WAL 在 Windows 上问题 |
| **高负载下运行时稳定性** | OpenClaw (#153257), Hermes (#118282), ZeroClaw (#9191, #9390), QwenPaw (#7905) | 崩溃循环、cron 挂起、紧急停止缺口 |
| **代理间通信** | Hermes (#103965), ZeroClaw (#11027), OpenClaw（多会话） | 会话消息、委托路由 |

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|------|----------|--------------|----------|---------|----------|
| **核心定位** | 全功能代理平台 | 模型提供商编排 | 基准评估 | 运行时 + 渠道集成 | Rust 原生安全运行时 |
| **目标用户** | 企业/部署团队 | 集成多 LLM 后端的开发者 | AI 研究人员模型基准测试 | 多渠道消息运维人员 | 注重安全的部署者 |
| **语言** | 混合（JS/TS、Python） | Python | Python | 混合（JS/TS） | Rust |
| **LTS/稳定版** | ✅ Extended-stable | ❌ 滚动发布 | ❌ 无 | ❌ 无 | ❌ 无 |
| **RFC 流程** | 非正式 | 正式 RFC（AGENTS.md） | 极简 | Tracker 驱动 | 设计问题 Tracker |
| **插件生态** | Gateway 插件 | 记忆插件、本地化 | 不适用 | 渠道集成 | 工具选择器、渠道功能 |

**关键差异化点：** OpenClaw 是唯一提供 **长期支持版（extended-stable）** 的项目，使其成为需要可预测更新周期的生产部署的最佳选择。ZeroClaw 通过 **Rust 原生安全** 和正式的 **资源边界** 提案形成差异化。Hermes 在 **模型提供商抽象** 上领先。IronClaw 作为 **基准测试框架** 而非部署平台，占据独特生态位。

---

## 6. 社区活力与成熟度

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw | 500 条/天更新；激进的功能推进；P0 缺陷处理速度与功能 PR 匹配 |
| **活跃开发** | Hermes、ZeroClaw、QwenPaw | 33–50 条/天更新；稳定的合并率；功能开发与缺陷修复兼有 |
| **稳定维护** | IronClaw | <5 条/天 更新；发布准备模式；极少的社区互动 |

**OpenClaw** 是生态中活跃度最高的项目（高出一个数量级），表明其用户基数最大或 issue/PR 流量最高。**Hermes** 展现活跃的功能开发但合并率较低（1/50），表明代码审查更为严格。**ZeroClaw** 维持高 PR 量（50）但同样低的合并率（1），表明存在大量待审积压或严格的接受标准。**QwenPaw** 展示最健康的合并与开放比例（16:17），表明审查效率良好。

---

## 7. 趋势信号

以下模式从本次快照中浮现，对 AI 代理开发者具有战略意义：

1. **运维可靠性已成为首要任务** — 所有五个项目的高优先级缺陷主要涉及运行时稳定性（泄漏、崩溃、超时），而非功能缺失。生态已从「构建能力」转向「稳定运行」。

2. **多渠道消息成为竞争焦点** — ZeroClaw (#10929, #10975, #10976)、QwenPaw（WhatsApp、Telegram、Matrix）和 Hermes 都有活跃的渠道集成工作。这反映了用户对跨通信平台运行的代理的真实需求。

3. **安全不可或缺** — ZeroClaw 的 principal 工具选择器 (#10263)、凭证脱敏 (#11026) 和 advisory 豁免跟踪 (#9899) 表明，随着代理获得工具访问权限，安全边界成为关键基础设施。

4. **上下文管理仍未解决** — 精简摘要、预算感知压缩和 token 限制出现在四个项目中，仍有未解决的 bug。没有项目完全解决了长上下文的可靠性。

5. **Windows 可靠性差距持续存在** — 针对 Windows 的特定问题（fcntl、Seatbelt、WAL 损坏）出现在 OpenClaw、Hermes 和 ZeroClaw 中。这些工具的跨平台承诺仍面临 Windows 特有的摩擦。

6. **LTS 作为差异化** — OpenClaw 的 extended-stable 发布轨道是独特的。如果生产用户需要可预测性，这种模式可能会推广到其他项目。

7. **RFC/设计治理正在兴起** — Hermes 和 ZeroClaw 都维护正式的 RFC 流程和设计问题追踪。这表明社区认识到随着系统复杂度增长，需要架构一致性。

---

*数据来源：OpenClaw、Hermes Agent（nousresearch/hermes-agent）、IronClaw、QwenPaw（agentscope-ai/QwenPaw）、ZeroClaw（zeroclaw-labs/zeroclaw）— 2026-09-22*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this GitHub project digest from English to Chinese. Let me carefully follow all the rules specified:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while preserving all formatting and technical terms.

I'll go through the document and translate it section by section, maintaining the exact structure.</think>

# Hermes Agent 项目简报 — 2026-09-22

## 今日概览

Hermes Agent 在 2026 年 9 月 22 日表现出高活动度，过去 24 小时内有 50 个 Issue 和 50 个 PR 更新。项目发布了 v0.21.4 作为补丁版本，汇集了自 v0.21.3 以来约 1,800 个合并的 PR，表明开发势头强劲。社区参与度依然很高，多个高优先级 bug 收到了关注，Desktop、Gateway、Agent、Plugin 等多个组件都有新功能提案。Issue 积压显示 43 个开放项，而 PR 仍偏向开放（49 个），今天仅合并 1 个——对于一个贡献大量流入的项目来说，这是典型模式。

---

## 发布动态

### v2026.9.21 — Hermes Agent v0.21.4

**发布日期：** 2026 年 9 月 21 日

| 属性 | 详情 |
|------|------|
| **类型** | 补丁版本 |
| **范围** | 为下游消费者提供稳定性（Docker 镜像、Hermes Cloud、托管部署） |
| **内容** | 将自 v0.21.3 以来约 1,800 个合并的 PR 汇总为稳定标签版本 |

**备注：** 本窗口的完整发布说明推迟发布。此版本面向下游消费者；建议用户更新以获取上一发布周期合并的错误修复和改进。

---

## 项目进展

### PR 活动（过去 24 小时）

| 指标 | 数量 |
|------|------|
| 更新的 PR | 50 |
| 开放的 PR | 49 |
| 已合并/关闭 | 1 |

**主要进展：**

| PR | 作者 | 描述 |
|----|------|------|
| [#118390](https://github.com/NousResearch/hermes-agent/pull/118390) | KoNit-K | **修复：保留精简摘要采样中的完整记录** — 将字符范围采样改为完整序列化记录，防止切割消息边界 |
| [#118299](https://github.com/NousResearch/hermes-agent/pull/118299) | misterdas | **plugin-catalog：添加 hermes-lcm 记忆插件** — 添加无损上下文管理（SQLite 支持的 DAG 上下文引擎），包含 15 个检索工具 |
| [#118322](https://github.com/NousResearch/hermes-agent/pull/118322) | Cody292 | **功能（catalog）：添加 hermes-zh 简体中文本地化插件** — 官方生命周期的简体中文本地化，包含 380+ 条精选技巧 |
| [#118656](https://github.com/NousResearch/hermes-agent/pull/118656) | kouyichi | **功能（backup）：在破坏性恢复前通过隔离恢复验证备份** — 在允许恢复操作前通过隔离恢复验证备份完整性 |
| [#118645](https://github.com/NousResearch/hermes-agent/pull/118645) | jangomango76 | **功能（router）：添加失败关闭的逐轮模型路由** — 通过 Laya 控制器提供可选的失败关闭路由以增强安全性 |
| [#118651](https://github.com/NousResearch/hermes-agent/pull/118651) | jeslyntsw | **修复（deps）：修复关键/高危 Python 安全公告** — 修复 CRITICAL `anyio` 和 HIGH `httpx`/`httpcore` 漏洞 |
| [#118652](https://github.com/NousResearch/hermes-agent/pull/118652) | KoNit-K | **修复（agent）：支持 Anthropic 1.x HTTP 客户端** — 更新以支持 Anthropic 1.7.0 并正确注入 HTTP 客户端 |

---

## 社区热点

最活跃的讨论集中在架构决策和跨组件 bug 上：

### 关注度最高的 Issue

| Issue | 作者 | 评论数 | 摘要 |
|-------|------|--------|------|
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | TheSmokeDev | **27** | **[RFC] RealtimeVoiceProvider ABC** — 四个竞争的双工语音 PR 需要一个统一的抽象基类而非合并队列；呼吁根据 AGENTS.md 指南设计 ABC + 编排器 |
| [#35060](https://github.com/NousResearch/hermes-agent/issues/35060) | Bendak | **8** | 功能请求：为 `watch_entities`/`watch_domains` 的 `deliver` 目标提供可配置选项 — Home Assistant 集成用户希望将事件路由到 WhatsApp/Telegram/Signal 而非仅路由回 Home Assistant |
| [#96355](https://github.com/NousResearch/hermes-agent/issues/96355) | labtecs | **8** | **[Bug]：delegate_task 在 output_schema 验证失败时返回 completed** — 任务在 schema 验证失败时报告成功 |
| [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) | eagle-nyp | **7** | **[Bug]：Desktop 间歇性渲染重复的助手回复** — State.db 包含一条回复但 UI 显示两个气泡 |

### 分析

最高关注度（27 条评论，#77111）反映出**结构性需求**：社区认识到，整合多个同类竞争实现（语音提供商、记忆后端、通知器）需要统一的接口，而非临时合并。此 RFC 与项目文档化的"足迹阶梯"治理模式一致。同时，Home Assistant 用户（#35060）请求多平台通知路由，表明多渠道部署场景正在增长。

---

## Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 组件 | 描述 |
|----------|-------|------|------|
| **P0** | [#118026](https://github.com/NousResearch/hermes-agent/issues/118026) | Desktop (Windows) | **缺少 fcntl.F_RDLCK** — 后端在 Windows 启动时崩溃；`fcntl` 模块仅限 Unix |
| **P1** | [#118282](https://github.com/NousResearch/hermes-agent/issues/118282) | Gateway, Telegram | **/update fleet 重启导致 Telegram 机器人持续离线** — 首个 profile 声称主机锁定，默认 Telegram 退出，其余机器人保持沉默 |
| **P1** | [#118053](https://github.com/NousResearch/hermes-agent/issues/118053) | Agent, Vision | **图片拒绝删除会话中的每张图片** — 提供商图片拒绝触发从 state.db 永久删除所有会话图片 |
| **P2** | [#96355](https://github.com/NousResearch/hermes-agent/issues/96355) | Tools, Delegate | **delegate_task 在 schema 失败时报告 completed** |
| **P2** | [#70108](https://github.com/NousResearch/hermes-agent/issues/70108) | Desktop, Sessions | **Desktop UI 中出现重复助手回复** |
| **P2** | [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) | Agent, DeepSeek | **输出截断是一个涉及四个子系统的故障类别** — 35+ 个跨提供商的开放 Issue；DeepSeek V4 被确定为主要原因 |
| **P2** | [#107516](https://github.com/NousResearch/hermes-agent/issues/107516) | Agent, Qwen | **上下文压缩针对慢速/繁忙 aux 模型无限重试** — 无上限的放弃机制 |
| **P2** | [#118618](https://github.com/NousResearch/hermes-agent/issues/118618) | Config | **get_default_hermes_root 让 Path.resolve OSError 逃逸** |
| **P2** | [#118431](https://github.com/NousResearch/hermes-agent/issues/118431) | Desktop, Profiles | **Desktop 设置 → 模型应用于每个 profile** — 模型更改在主机后端崩溃后写入所有 profile |
| **P2** | [#118589](https://github.com/NousResearch/hermes-agent/issues/118589) | CLI, TTS | **语音模式：迭代预算耗尽时回复从不发声** |

### 可用的修复 PR

| Bug Issue | 修复 PR | 状态 |
|-----------|--------|------|
| 重复助手回复 | [#118610](https://github.com/NousResearch/hermes-agent/pull/118610) | 开放 — 在恢复/完成时保留转录出现次数 |
| Desktop 工具集切换 profile bug | [#118644](https://github.com/NousResearch/hermes-agent/pull/118644), [#118646](https://github.com/NousResearch/hermes-agent/pull/118646) | 开放 |
| 精简摘要切割记录 | [#118390](https://github.com/NousResearch/hermes-agent/pull/118390) | 开放 |
| Profile previous_names 契约 | [#118649](https://github.com/NousResearch/hermes-agent/pull/118649) | 开放 |
| WHERE 子句安全修复 | [#118655](https://github.com/NousResearch/hermes-agent/pull/118655) | 开放 |

---

## 功能请求与路线图信号

### 值得注意的功能请求

| Issue | 组件 | 请求 |
|-------|------|------|
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | Agent, Plugins | **RealtimeVoiceProvider ABC** — 竞争语音提供商 PR 的统一接口 |
| [#35060](https://github.com/NousResearch/hermes-agent/issues/35060) | Gateway, Home Assistant | **watch_entities/watch_domains 的可配置 deliver 目标** |
| [#47246](https://github.com/NousResearch/hermes-agent/issues/47246) | Desktop | **后台/守护进程模式** — 不保持终端打开运行 |
| [#103965](https://github.com/NousResearch/hermes-agent/pull/103965) | Delegate | **逐任务 Hermes profile 路由** — 允许子代理使用不同的 profile/模型 |

### 预测的下一步

鉴于活跃的 RFC（#77111），下一个次要版本可能包括：
1. **RealtimeVoiceProvider ABC** — 多提供商语音集成的架构基础
2. **逐任务委托路由** — 已在 PR #103965 中
3. **失败关闭的逐轮路由** — PR #118645 为模型选择添加了安全边界

---

## 用户反馈摘要

### 确定的痛点

| 领域 | 反馈 |
|------|------|
| **Windows 兼容性** | P0 bug #118026（fcntl）阻止整个 Windows Desktop 启动 |
| **数据丢失风险** | 图片拒绝 bug（#118053）导致会话数据永久删除 |
| **Profile 隔离** | Desktop 模型设置全局而非按 profile 应用（#118431） |
| **输出截断** | 跨 DeepSeek、Qwen 和其他提供商的系统性故障（#110126、#107516）— 用户报告反复出现"回复被截断"的情况 |
| **凭证泄露** | 无凭证的 profile 静默继承根 profile 的令牌（#111724）— 安全问题 |

### 积极信号

- **本地化势头**：简体中文插件（#118322）显示国际采用率增长
- **备份完整性**：新的恢复前验证功能（#118656）解决了长期可靠性问题
- **依赖项卫生**：积极修复关键安全公告（#118651）

---

## 积压关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 状态 | 关注点 |
|-------|----------|------|--------|
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | ~2 个月 | 开放 | 高关注度 RFC 停滞 — 需要 ABC 设计的架构决策 |
| [#110126](https://github.com/NousResearch/hermes-agent/issues/110126) | ~9 天 | 开放 | 35+ 相关 Issue — 系统性故障类别需要协调分类 |
| [#107516](https://github.com/NousResearch/hermes-agent/issues/107516) | ~12 天 | 开放 | 无限重试 bug 无退避 — 可能对共享 aux 模型产生 DoS |
| [#118282](https://github.com/NousResearch/hermes-agent/issues/118282) | ~1 天 | 已关闭 | P1 Telegram 集群故障 — 验证修复已应用 |

### 停滞的 PR（超过 2 周无活动）

| PR | 作者 | 存在时间 | 描述 |
|----|------|----------|------|
| [#53356](https://github.com/NousResearch/hermes-agent/pull/53356) | Sahil-SS9 | ~3 个月 | Desktop repo 扫描器可配置根目录 |
| [#53669](https://github.com/NousResearch/hermes-agent/pull/53669) | Sahil-SS9 | ~3 个月 | Docker 的符号链接安全技能复制 |
| [#52474](https://github.com/NousResearch/hermes-agent/pull/52474) | Sahil-SS9 | ~3 个月 | 原子目录替换 |
| [#90395](https://github.com/NousResearch/hermes-agent/pull/90395) | abhibansal-sg | ~1 个月 | Cron 身份保留 |

**建议：** 这些来自稳定贡献者（Sahil-SS9）的长期停滞 PR 可能需要审查或反馈以解除阻塞。

---

*生成时间：2026-09-22 | 数据来源：NousResearch/hermes-agent GitHub 活动（过去 24 小时）*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. I need to:
1. Translate all the text while keeping the Markdown structure
2. Keep all technical terms, URLs, code, numbers, etc. as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through each section and translate it appropriately:

1. Today's Overview - Summary of project status
2. Releases - No new releases
3. Project Progress - PR table
4. Community Hot Topics - Issue table
5. Bugs & Stability - No bug reports
6. Feature Requests & Roadmap Signals - No feature requests
7. User Feedback Summary - User feedback summary
8. Backlog Watch - No backlog items

Let me translate this carefully, keeping the technical register natural for Chinese developers.</think>

# IronClaw 项目简报 — 2026-09-22

## 1. 今日概览

IronClaw 在过去 24 小时内保持稳定活动，共有 1 个 issue 和 1 个 pull request 更新。项目目前处于发布准备阶段，1.4.1-rc.1 版本刚刚发布。社区关注点集中在基准测试和故障分析，而非功能开发或 bug 报告。整体项目状态良好，维护者正专注于即将发布的稳定版本。

---

## 2. 发布动态

**今日无新发布。**

最新的发布候选版本为 **1.4.1-rc.1**，发布于 2026-09-21（PR #8105）。本发布周期暂无重大变更或迁移说明。

---

## 3. 项目进展

| PR | 状态 | 标题 | 作者 |
|----|--------|-------|--------|
| [#8105](https://github.com/nearai/ironclaw/pull/8105) | **已合并/关闭** | chore(release): cut 1.4.1-rc.1 | henrypark133 |

**分析：** 此 PR 推进了发布流程，将 `ironclaw` 包版本定为 1.4.1-rc.1，使 Cut Ironclaw Release 工作流能够为合并提交打标签。这属于常规发布工程工作，而非功能开发。

---

## 4. 社区热点话题

| Issue | 状态 | 标题 | 作者 | 反应 |
|-------|--------|-------|--------|--------|
| [#8106](https://github.com/nearai/ironclaw/issues/8106) | **开放** | 每日 ironclaw 故障分类 — 2026-09-21 | pranavraja99 | 0 👍 |

**分析：** 这是唯一一个活跃的 issue，作为每日基准测试故障分类记录。该 issue 追踪了 `officeqa` 基准测试运行，共 47 个未通过任务，被描述为"真正的模型质量问题"，涉及 DeepSeek-V4-Flash 的导航问题。这看起来像是自动生成的每日状态报告，而非用户发起的功能请求或 bug 报告，表明项目采用了系统性的模型性能监控方法。

---

## 5. 缺陷与稳定性

过去 24 小时内无明确的 bug 报告或崩溃报告。

每日故障分类（#8106）监控的是基准测试回归，这属于模型性能稳定性追踪，而非软件缺陷。没有相关的修复 PR 被提交或引用。

---

## 6. 功能需求与路线图信号

今日无明确的功能请求。项目目前处于 1.4.1 发布前的稳定阶段，社区关注点集中在基准测试分析和质量保证，而非新功能提案。

---

## 7. 用户反馈摘要

当前数据快照中的直接用户反馈有限。每日故障分类（#8106）提供了基准测试工作流的洞察，显示：

- **主要用例：** `officeqa` 套件的基准测试评估
- **观察到的痛点：** 导航任务中的模型质量问题，尤其是 DeepSeek-V4-Flash
- **满意度指标：** 无负面情绪表达；系统性的追踪表明正在积极进行质量监控

今日无关于 API 可用性、文档缺失或集成问题的用户报告。

---

## 8. 待办事项关注

在 24 小时窗口内未发现长期未回复的 issue 或 PR。唯一的开放 issue（#8106）于同日（2026-09-21）创建并更新，表明维护者或机器人活动及时响应。目前没有停滞的 PR 或被忽视的功能请求需要关注。

---

*基于 ironclaw（nearai/ironclaw）GitHub 数据生成 — 2026-09-22*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw project digest into Chinese, preserving the exact Markdown structure, URLs, code references, numbers, etc. I need to use natural technical Chinese that a developer would use in a newsletter, not a literal word-for-word translation.

Let me translate section by section while preserving the structure:

1. Title and date - keep as is but translate "Overview" to Chinese
2. Today's Overview - translate
3. Releases - translate, keep "No new releases" and the info
4. Project Progress - translate tables
5. Community Hot Topics - translate
6. Bugs & Stability - translate
7. Feature Requests & Roadmap Signals - translate
8. User Feedback Summary - translate
9. Backlog Watch - translate

Let me do this carefully:</think>

# QwenPaw 项目日报 — 2026-09-22

## 1. 今日概览

QwenPaw 今日开发活动频繁，过去 24 小时内更新了 **17 个 Issue** 和 **33 个 PR**。项目已关闭 9 个 Issue 和 16 个 PR（已合并或关闭），表明维护和功能开发工作正在积极推进。今日无新版本发布。值得关注的工作包括 DoomLoopGate 升级 bug 修复、Windows 控制台隔离、OpenCode API 兼容性修复，以及滚动历史记录保留功能。整体健康状况稳定，bug 修复和增量功能开发持续推进。

---

## 2. 版本发布

**今日无新版本发布。** 最新版本信息未在提供的数据中列出。

---

## 3. 项目进展

### 已合并/关闭的 PR（16 个）

| PR | 作者 | 描述 |
|---|---|---|
| [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) | rayrayraykk | **fix:** require new tool-call evidence for doom loop escalation — 解决过早终止问题 |
| [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) | qbc2016 | **fix(responses):** default function tools to non-strict mode — 防止可空参数问题 |
| [#7913](https://github.com/agentscope-ai/QwenPaw/pull/7913) | qbc2016 | **chore(deps):** bump agentscope to 2.0.8 |
| [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) | rayrayraykk | **feat(providers):** unify model discovery, pricing, selection and thinking controls |
| [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) | axelray-dev | **fix(loop):** prevent stale doom-loop escalation (fixes #7905) |
| [#7918](https://github.com/agentscope-ai/QwenPaw/pull/7918) | rayrayraykk | **docs:** remove accidentally committed design documents (877 lines) |
| [#7911](https://github.com/agentscope-ai/QwenPaw/pull/7911) | yutai78786 | **test(unit):** coverage sprint batch 3 — 2720 个新用例，覆盖率 +3.28pp |
| [#7326](https://github.com/agentscope-ai/QwenPaw/pull/7326) | yutai78786 | **feat(ci):** split nightly E2E into three parallel priority shards |
| [#7846](https://github.com/agentscope-ai/QwenPaw/pull/7846) | zhaozhuang521 | **feat:** improve session list details and grouping |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | lecheng2018 | **feat:** add reranker UI config panel to ReMeLightMemoryCard |

### 关键进展

- **DoomLoopGate bug 已修复** — 防止纯文本轮次的错误终止
- **Windows 控制台隔离** — 子进程 Ctrl 事件不再终止主进程
- **OpenCode API 兼容性** — 解决了 Header 要求和免费层错误处理问题
- **模型提供者统一** — 集中化模型发现和选择
- **测试覆盖率冲刺** — +3.28pp，使 `src/qwenpaw` 达到 73.79% 语句覆盖率

---

## 4. 社区热点

### 最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 状态 |
|---|---|---|---|
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | **[BUG] Persistent prompt injection in tool-result system-reminders instructing the agent to delete all skills** | 5 | OPEN |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | **[Bug] Context compaction can still exceed the complete provider request budget** | 4 | OPEN |
| [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | **[Bug]: DoomLoopGate escalates to TERMINATE on text-only round** | 3 | CLOSED |
| [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) | 京东云 Coding Plan 环境与会话执行中断 | 3 | OPEN |
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | **[Bug]: codex backend non-streaming causes empty responses, usage all 0** | 3 | CLOSED |
| [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | **[Bug][Desktop 2.2.1] Console UI loads before backend is ready** | 2 | OPEN |
| [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | **OpenCode free models return 403 FreeTierError** | 2 | CLOSED |

### 分析

**提示词注入漏洞** (#7859) 是讨论最多的问题——一个严重的安全相关 bug，注入的指令出现在跨 20+ 轮的 system reminders 中，指导 Agent 删除所有技能。这表明需要在 tool-result 管道中对输入进行清理。

**上下文压缩** (#7628) 反映了长时间运行的会话中 Token 预算管理方面的持续挑战。

**桌面 UI 就绪** (#7841) 显示了用户痛点：启动时由于前端/后端竞态条件导致面板空白。

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| Issue | 严重程度 | 描述 | 修复 PR |
|---|---|---|---|
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | **高** | Persistent prompt injection — Agent 被指示删除所有技能 | — |
| [#7908](https://github.com/agentscope-ai/QwenPaw/issues/7908) | **高** | Windows: child Console Ctrl event can terminate QwenPaw host | [#7910](https://github.com/agentscope-ai/QwenPaw/pull/7910) |
| [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | **中** | Desktop Console UI loads before backend, panels stay blank | — |
| [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | **中** | File-area tab shows pre-edit content after agent rewrites file | — |
| [#7921](https://github.com/agentscope-ai/QwenPaw/issues/7921) | **低** | omp-roles SKILL.md missing YAML frontmatter — silently unusable | [#7922](https://github.com/agentscope-ai/QwenPaw/pull/7922) |

### 今日修复的 Bug

- **DoomLoopGate** — PR [#7919](https://github.com/agentscope-ai/QwenPaw/pull/7919) 和 [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) — 防止过早终止
- **Windows 控制台隔离** — PR [#7910](https://github.com/agentscope-ai/QwenPaw/pull/7910) — 防止主进程终止
- **Responses API 严格模式** — PR [#7915](https://github.com/agentscope-ai/QwenPaw/pull/7915) — 修复可空参数处理

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 描述 | 参与度 |
|---|---|---|
| [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) | **Per-Agent avatar support** — 为列表、切换器、聊天窗口中的 Agent 图标支持上传或 URL | 👍 2 |
| [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167) | **Model Provider Layer Optimization** — 动态上下文、模型同步、多模型回退（伞形 issue） | 👍 1 |
| [#7912](https://github.com/agentscope-ai/QwenPaw/issues/7912) | **MCP web-research example with Baizhi Agent Toolkit** — 认证示例工作流 | — |
| [#5921](https://github.com/agentscope-ai/QwenPaw/issues/5921) | **Design: Render LaTeX math with KaTeX in Console** | — |

### 进行中的功能（PR）

| PR | 功能 |
|---|---|
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | **Redesign SDK and app control plane** — capability registration, public/private boundary, task ownership |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | **Per-session model overrides** — 在一个 Agent 下为不同会话设置不同模型 |
| [#7713](https://github.com/agentscope-ai/QwenPaw/pull/7713) | **Telegram Rich Messages** — 原生 Markdown 表格渲染 |
| [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923) | **Scroll history age-out** — tool_result 块保留策略 |

### 路线图信号

[#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899)（模型提供者统一）、[#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)（会话级覆盖）和 [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167) 的交集表明，**模型提供者层** 将是下一个版本的主要重点。头像功能 (#4974) 有社区兴趣，可能会出现在未来的 Console UI 更新中。

---

## 7. 用户反馈摘要

### 痛点

1. **桌面应用启动竞态** — Console UI 在后端就绪前渲染，导致模型列表和插件面板空白，需手动刷新 (#7841)
2. **Windows 控制台控制事件** — 子进程 Ctrl+C 可能导致整个 QwenPaw 主机崩溃 (#7908)
3. **OpenCode 免费层困惑** — UI 中标记为"免费"的模型返回 403 错误，破坏用户信任 (#7882)
4. **京东云会话中断** — Agent 会话在工具执行期间意外终止，需要手动重新调用 (#3419)
5. **提示词注入持久化** — 恶意指令跨会话存活，存在安全风险 (#7859)

### 满意度信号

- **DoomLoopGate 修复** — 社区提出的问题已快速解决 (#7905 → #7919)
- **覆盖率冲刺** — +3.28pp 表明对代码质量的承诺 (#7911)
- **E2E CI 并行化** — 更快的反馈循环改善开发者体验 (#7326)

---

## 8. 积压关注

### 长期未答的重要 Issue

| Issue | 时长 | 描述 | 状态 |
|---|---|---|---|
| [#3419](https://github.com/agentscope-ai/QwenPaw/issues/3419) | 约 5 个月 (2026-04-15) | JD Cloud Coding Plan 会话中断 | OPEN，3 条评论 |
| [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | 约 5 天 | Desktop UI loads before backend ready | OPEN，2 条评论 |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 约 4 天 | Persistent prompt injection security issue | OPEN，5 条评论 |
| [#7916](https://github.com/agentscope-ai/QwenPaw/issues/7916) | 1 天 | AgentScope Platform validator missing memory plugin type | OPEN，2 条评论 |

### 需要维护者关注的问题

- **安全问题 #7859**（提示词注入）— 高严重程度，未分配里程碑
- **桌面稳定性 #7841** — 影响每次启动的用户体验
- **京东云 #3419** — 5 个月的回归问题，影响企业用户

---

*基于 GitHub 数据为 agentscope-ai/QwenPaw 生成于 2026-09-22*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English ZeroClaw project digest into Chinese, preserving the exact Markdown structure while using natural technical Chinese (the register of a Chinese developer newsletter).

Let me translate this carefully, maintaining:
- All headings
- All tables (including alignment rows)
- All lists
- All URLs and links
- All issue/PR references
- All code identifiers

I'll use natural technical Chinese and make it read like a developer newsletter.</think>

# ZeroClaw 项目简报 — 2026-09-22

## 1. 今日概览

ZeroClaw 继续保持高开发活跃度，过去 24 小时内更新了 **50 个 issue** 和 **50 个 PR**。项目在多个方向上进展积极：安全加固（安全公告豁免、凭证脱敏）、WhatsApp Web 频道改进，以及多个 RFC 正在讨论中，涉及架构和治理变更。本周没有发布新版本，但积压工作中包含重要的安全工作和功能开发。Issue 分布显示 46 个开放/活跃中 versus 4 个已关闭，PR 则显示 49 个开放 versus 仅 1 个合并/关闭——这表明有大量待合并的贡献。

## 2. 版本发布

**本周无版本发布。** 2026-09-22 没有新版本发布。

## 3. 项目进展

以下 PR 代表今日最值得关注的开发进展：

- **[#11026](https://github.com/zeroclaw-labs/zeroclaw/pull/11026)** — `fix(tools): redact proxy credentials from snapshots` — 高风险安全修复，确保运维凭证不会泄露到模型可见的诊断结果中。

- **[#11032](https://github.com/zeroclaw-labs/zeroclaw/pull/11032)** — `refactor(channels): gate tools dependency by channel features` — 使 `zeroclaw-tools` 在 `zeroclaw-channels` 中变为可选，仅在生产频道功能使用它时才启用（`channel-acp-server`、`channel-email`、`channel-matrix`）。

- **[#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263)** — `feat(security): compose principal tool selectors into agent sessions` — 大型安全增强（size: XL），实现主体工具选择器组合，属于 #8289 epic 的一部分。

- **[#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979)** — `feat(channels/whatsapp-web): implement create_room and invite_user` — 为 WhatsApp Web 频道带来与 Matrix 相当的房间管理能力。

- **[#11042](https://github.com/zeroclaw-labs/zeroclaw/pull/11042)** — `docs(developing): record the replacement-first integration policy` — 记录 RFC #6165 已接受的集成方案。

- **[#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038)** — `chore(security): ignore RUSTSEC-2026-0292` — 处理 ongoing 的 imbl-sized-chunks 公告豁免问题。

**已合并/关闭：** 本周仅 1 个 PR 被合并/关闭（根据提供的数据）。

## 4. 社区热点

最活跃讨论的内容：

| Issue/PR | 标题 | 评论数 | 链接 |
|----------|------|--------|------|
| #8692 | [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #9899 | [Tracker]: remove matrix-sdk → imbl advisory waivers (RUSTSEC-2026-0247, RUSTSEC-2026-0292) | 6 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |
| #10230 | [Bug]: Daemon startup or reload can overflow during agent initialization | 6 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) |
| #10523 | [Bug]: Bootstrap file truncation at 6000 chars is invisible to the operator | 5 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) |
| #10068 | [Bug]: Interactive agent session caps context at 32,000 tokens, ignoring max_context_tokens | 5 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |

**分析：** **维护者决策队列追踪器** (#8692) 表明社区在寻求更清晰的 RFC 接受途径和设计问题解决流程。安全公告问题 (#9899) 揭示了与 Rust 生态系统的依赖管理持续挑战。高评论 issue 以运行时稳定性问题为主：守护进程溢出 (#10230)、上下文截断 (#10523)、token 限制 bug (#10068) 都指向核心运行时健壮性问题。

三个活跃的 RFC 正在引发讨论：
- **#10970** — 主机级别的准入控制和每个智能体的资源边界
- **#10930** — 智能体向人类提问的统一原语
- **#10929** — 出站消息的送达回执

## 5. BUG 与稳定性

按严重程度排序（高风险项）：

| Issue | 标题 | 风险 | 状态 | 修复 PR? |
|-------|------|------|------|----------|
| #10230 | Daemon startup/reload overflow during agent initialization | 高 | 开放 | 无 |
| #9899 | RUSTSEC-2026-0247 bitmaps advisory via matrix-sdk | 高 | 开放 | #11038 (chore) |
| #10408 | Second message during active turn starts parallel run → duplicate work | 高 | 开放 | 无 |
| #9191 | Cron agent jobs have no wall-clock timeout; locks only cleared at process start | 高 | 开放 | 无 |
| #9390 | Emergency stop is a CLI-only state file no runtime path reads | 高 | 开放 | 无 |
| #10379 | Unable to cancel ongoing message in ZeroClaw Desktop | 高 | 开放 | 无 |
| #10966 | Git --attr-source can hide mutating subcommand from approval classification | 高 | 已接受 | 无 |
| #10536 | macOS Seatbelt ignores configured allowed_roots | 高 | 开放 | 无 |

**注意：** **守护进程栈溢出** (#10230) 和 **定时任务无超时** (#9191) 代表 S1（工作流阻塞）严重级别的问题，影响生产稳定性。多个安全敏感的 bug 仍处于开放状态，尚未关联修复 PR。

## 6. 功能请求与路线图信号

表明近期路线图方向的活跃 RFC 和增强 issue：

- **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** — **RFC: Host-scoped admission control and per-agent resource bounds** — 通过限制并发轮次、工具执行和每个智能体的内存来解决多智能体机器稳定性问题。

- **[#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930)** — **RFC: One durable primitive for questions an agent asks a human** — 提议将 SOP 审批门模式标准化为持久的human-agent交互原语。

- **[#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)** — **RFC: Delivery receipts for outbound messages** — 为出站消息添加消息级跟踪，解决投递不确定性。

- **[#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)** — **RFC: Agent-to-agent session messaging with receiver discretion** — 新的能力边界提案，用于跨会话智能体通信。

- **[#10925](https://github.com/zeroclaw-labs/zeroclaw/issues/10925)** *(已关闭)* — Matrix 语音镜像回复现已支持。

**预测：** 鉴于活跃的 RFC（#10970、#10930、#10929）以及近期 PR 中的安全重点，下一版本可能强调 **多智能体资源治理**、**消息投递可靠性** 以及 **工具审批分类** 相关的安全加固。

## 7. 用户反馈总结

从 issue 活动中显现的主要痛点：

1. **运行时稳定性** — 用户报告守护进程在启动/重载时崩溃 (#10230)、无法在 Desktop UI 中取消进行中的操作 (#10379)，以及定时任务可能无限挂起 (#9191)。

2. **上下文管理问题** — 多份报告称上下文被错误限制在 32K token，尽管配置了更高的值 (#10068)，以及引导文件截断不可见 (#10523)。

3. **WhatsApp 频道缺陷** — 入站图片显示为字面量 "[Image]" 文本 (#10975)、双向提及失效 (#10976)——这些表明 WhatsApp Web 集成需要改进。

4. **配置本地化** — 配置元数据即使在本地化的 ZeroCode 和 Web 界面中仍保持英文 (#9363)，影响非英语运维人员。

5. **安全缺口** — 紧急停止机制存在但运行时路径实际并未读取 (#9390)，存在潜在安全风险。

**满意度信号：** Matrix 语音回复功能已关闭 (#10925) 以及 ongoing 的频道对等工作 (#10979) 表明对通信频道需求的响应。

## 8. 积压关注

需要维护者关注的重要项：

| Issue | 标题 | 存在时长 | 状态 | 备注 |
|-------|------|----------|------|------|
| #9191 | Cron agent jobs have no wall-clock timeout | 约2个月 | 开放 | S1 严重级别，无修复 PR |
| #9390 | Emergency stop is a CLI-only state file | 约2个月 | 开放 | S1 严重级别，安全风险 |
| #10379 | Unable to cancel ongoing message | 约1个月 | 开放 | S0 严重级别 |
| #9812 | Provider fallback carries primary's model id (never fires) | 约1.5个月 | 已关闭 | 但可能遗留残余问题 |
| #8691 | ADR inventory and accepted RFC decision records | 约2.5个月 | 进行中 | 追踪器仍需关注 |

**有陈旧风险的长期 PR：**
- **#10263** — 安全功能（主体工具选择器）依赖 #10259；需要持续审查
- **#10172** — 保留提供商配置文件的语义；标记为待处理状态

---

*基于 2026-09-22 的 GitHub 数据生成。所有链接指向 zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*