# OpenClaw 生态日报 2026-10-14

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-14 01:21 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English OpenClaw Project Digest into Chinese. I need to:
1. Keep all Markdown structure exactly (headings, tables, lists, etc.)
2. Keep URLs, numbers, dates, issue/PR references, project names, technical terms as-is
3. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this while maintaining the exact structure:</think>

# OpenClaw 项目简报 — 2026-10-14

## 今日概览

OpenClaw 保持高活跃度，过去24小时内有500个 issue 和500个 PR 更新。项目发布了两个新版本（v2026.10.3 和 v2026.10.5-beta.3），重点改进了 Gateway 稳定性、npm/pnpm 更新流程以及 macOS 上的 Bun 服务处理。社区参与度依然强劲，多个 P0/P1 问题得到积极关注，特别是围绕会话状态、消息丢失和 Windows 启动回退的问题。问题追踪器显示有292个 open issue 和315个 open PR，表明开发节奏健康但任务繁重。

## 发布版本

| 版本 | 类型 | 亮点 |
|---------|------|------------|
| **v2026.10.5-beta.3** | Beta | pnpm 12 安装现在可以在持久化安装路径保留 Gateway 服务和 openclaw launcher；Windows 更新支持限定的计划任务账户和已验证驱动；macOS 支持受保护的 Bun 服务配置 |
| **v2026.10.3** | Stable | 90 次提交 · 79 个 PR · 99 位贡献者 |

**迁移说明：** 发布说明中未标记重大变更。v2026.9.x 用户应可正常升级。

## 项目进展

**今日合并/关闭的 PR：**

- **#171525** — [chore(ui): 刷新控制面板界面区域设置](https://github.com/openclaw/openclaw/pull/171525) — 已关闭
- **#137878** — [fix(cli): 在 approvals get allowlist 表格中包含派生的 Scope 列](https://github.com/openclaw/openclaw/pull/137878) — 已关闭
- **#170724** — [Bug]: macOS 2026.10.2 重试设置导致 Gateway 更新不完整 — 已关闭

**推进中的关键 PR：**

- **#171526** — [feat(muse): 从模型设置登录 Muse Code](https://github.com/openclaw/openclaw/pull/171526) — 新的 Muse 登录集成
- **#171402** — [fix(memory): 减少大型源码发布期间的对话卡顿](https://github.com/openclaw/openclaw/pull/171402) — 解决内存核心卡顿问题
- **#171510** — [fix(auth): 将捆绑推理和登出 SQLite 移入 auth worker](https://github.com/openclaw/openclaw/pull/171510) — 安全与线程改进
- **#164442** — [fix(sessions): 长会话转录在解码时锁定数据库读取快照](https://github.com/openclaw/openclaw/pull/164442) — 长会话稳定性修复
- **#171476** — [feat(android): 在 CI 中验证手机和 Wear 发布](https://github.com/openclaw/openclaw/pull/171476) — Android/Wear OS CI 验证

## 社区热点话题

| Issue | 评论数 | 表情 | 主题 |
|-------|----------|-----------|-------|
| [#148707](https://github.com/openclaw/openclaw/issues/148707) — 回复丢失："Reply operation has no active tool authority snapshot"（2026.9.4 回退） | 19 | 0 | 会话状态 / 消息丢失 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — OpenClaw 泄露未回收的 hook/tool 子进程，导致僵尸进程累积 | 19 | 1 | 资源泄露 / 崩溃循环 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) — 2026.3.2 中 google-vertex/gemini-3.1-pro-preview 出现 "Cannot convert undefined or null to object" | 18 | 3 | Auth provider 回退 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) — SQLite 无限制增长：memory_index_chunks + memory_embedding_cache 表无保留策略 | 17 | 0 | 存储/膨胀 (P1) |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) — sessions_spawn 到 claude-cli-runtime 子进程失败，抛出 SessionTranscriptWriterClaimReboundError | 15 | 0 | 会话 spawn 回退 |

**分析：** 最活跃的讨论集中在**会话可靠性**——具体是消息丢失、僵尸进程和无限制数据库增长。这表明运行长时间会话的生产部署正在触及持久化边界。Auth provider 回退 (#38327) 和 SQLite 增长 (#114612) 表明随着用户累积数据，存在扩展性问题。

## 缺陷与稳定性

**P0 / 阻塞发布（Critical）：**

| Issue | 严重程度 | 状态 | 修复 PR？ |
|-------|----------|--------|---------|
| [#158390](https://github.com/openclaw/openclaw/issues/158390) — plugin-captures tmp 目录在 build/catalog 后未 GC — 磁盘无限填充 | 🦞 diamond lobster | Open | 无 |
| [#161379](https://github.com/openclaw/openclaw/issues/161379) — Gateway 永久固定一个 CPU 核心：预制模型目录刷新循环 | 🐚 platinum hermit | Open | 无 |
| [#166894](https://github.com/openclaw/openclaw/issues/166894) — Windows 多代理 Gateway 重启挂起 30+ 分钟至 2 小时 (2026.9.8) | 🦐 gold shrimp | Open | 无 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) — openclaw update 在 "global install swap" 失败 | 🦪 silver shellfish | Open | 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) — Gateway 启动耗时随启用的插件数量增长 | 🦪 silver shellfish | Open | 无 |

**关键回退：**

- **#168955** — 启动回退：Windows 上从 ~410s 增加到 ~1030s（2026.9.9）；sidecars.control-ui-assets 阻塞 477s
- **#163029** — 2026.9.7 仍在转译中途重新加载外部插件（主线程卡顿 40–70s）
- **#161436** — 云端 worker 工具调用绕过 before_tool_call（安全策略绕过）

## 功能请求与路线图信号

| Issue | 票数 | 请求 |
|-------|-------|---------|
| [#47910](https://github.com/openclaw/openclaw/issues/47910) — feat: 按故障类别提供 provider 回退 — 隔离 auth 出问题的 provider | 0 | Auth 故障处理 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) — webchat 中支持自托管 STT/TTS provider | 2 | 语音能力 |
| [#155633](https://github.com/openclaw/openclaw/issues/155633) — 添加 Databricks Unity Gateway 作为官方模型 provider | 0 | Provider 扩展 |
| [#91676](https://github.com/openclaw/openclaw/issues/91676) — skills.workshop.allowSandboxedAgents 可选启用 | 1 | 沙箱权限 |
| [#111143](https://github.com/openclaw/openclaw/issues/111143) — 允许固定控制面板侧边栏中的插件标签页 | 1 | UI 自定义 |

**信号分析：** Provider 多样化（Databricks、自托管语音）和 UI 自定义表明存在企业/高级用户需求。Auth 故障隔离 (#47910) 直接解决生产可靠性痛点，很可能被优先处理。

## 用户反馈摘要

**痛点：**

1. **Windows 启动回退** — 用户报告 Gateway 启动时间从 ~410s 翻倍至 ~1030s（2026.9.9 → 2026.10.1 升级后）（#168955）。对多代理部署的运营影响显著。
2. **磁盘空间问题** — 无限制的 SQLite 增长 (#114612) 和未回收的 tmp 目录 (#158390) 给长期运行的部署带来运营风险。
3. **消息丢失** — 多个问题涉及回复丢失 (#148707)、Telegram 死信 (#125764) 和子 agent 投递失败 (#155119)，表明会话可靠性存在挑战。
4. **更新失败** — npm 全局更新路径失败而直接安装成功 (#156112)；更新流程导致状态不一致 (#170331, #170332)。

**满意度信号：**

- 近期 PR 解决内存卡顿 (#171402)、会话数据库锁 (#164442) 和 auth 线程 (#171510) 直接针对高影响稳定性领域。
- Muse Code 登录集成 (#171526) 和 Android/Wear CI 验证 (#171476) 扩展了平台覆盖。

## 待办关注

**需要维护者关注的问题（无 PR / 停滞）：**

| Issue | 存在时长 | 状态 | 关注点 |
|-------|-----|---------|---------|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) — SQLite 无限制增长 | ~3 个月 | Open，无修复 PR | 需要产品决策保留策略 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) — 子进程僵尸泄露 | ~4 个月 | Open，需要现场复现 | 随时间推移的资源退化 |
| [#90840](https://github.com/openclaw/openclaw/issues/90840) — 子 agent 完成作为原始 worker 输出投递（回退） | ~4 个月 | Open | 消息/内容正确性 |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) — Telegram 单次尝试死信 | ~2 个月 | Open | 静默数据丢失 |

**等待审查/验证的 PR：**

- **#170534** — fix: 尊重静默结束轮次，不编造答案（等待作者）
- **#169722** — feat(sessions): 在配对设备的现有文件夹中运行会话（准备就绪，等待维护者）
- **#168703** — improve: 简化设置和配置帮助（准备就绪，等待维护者）
- **#171447** — fix(gateway): 慢启动后恢复 ACP 唯一存储（需要验证）

---

*简报基于 2026-10-14 的 OpenClaw GitHub 数据生成*

---

## 横向生态对比

<think>The user wants me to translate the entire report into Simplified Chinese, preserving all the formatting exactly as-is. I need to:

1. Keep all Markdown structure (headings, tables, lists, bold/italic, horizontal rules, emoji)
2. Keep all URLs, numbers, dates, issue/PR references (#12345), version tags, file paths, project names, repository slugs as-is
3. Translate only the actual text content into natural technical Chinese
4. Output ONLY the translation, no preamble or explanation

Let me go through and translate this carefully while preserving the structure.</think>

# 跨项目对比报告 — OpenClaw 生态系统

**日期：** 2026-10-14

---

## 1. 生态系统概览

个人 AI 助手与智能体框架领域正在经历快速细分，目前至少有五个针对类似核心架构的专业化实现。这些项目都围绕会话管理、工具编排和多提供商模型路由等基础问题展开，但发展重点差异显著——从 OpenClaw 的成熟企业级平台到 IronClaw 的轻量级扩展框架，不一而足。整个生态反映出更广泛的行业演进趋势："AI 智能体"这一抽象概念正在被分解为多个专业方向：持久化存储、插件生态、运行时交付和多模态交互。所有项目都在积极解决生产环境加固问题（可靠性、成本可视化、数据完整性），表明生态系统已超越原型阶段，进入可运营的成熟期。

---

## 2. 活动对比

| 项目 | 24 小时内更新 Issues | 开放 Issues | 开放 PRs | 24 小时内发布版本 | 健康度 |
|---------|---------------------|-------------|----------|----------------|---------------|
| **OpenClaw** | 500 | 292 | 315 | 2 | **优秀** |
| **Hermes Agent** | 50 | ~40 | 47 | 0 | 良好 |
| **ZeroClaw** | 24 | 24 | 45 | 0 | 良好 |
| **QwenPaw** | 20 | 16 | 22 | 0 | 中等偏良 |
| **IronClaw** | 1 | 1 | 1 | 0 | 较低 |

*健康度是综合指标，涵盖问题解决速度、发布周期和社区活跃度。近期有版本发布且 PR 吞吐量较高的项目得分更高。*

---

## 3. OpenClaw 的定位

### 相对优势

- **发布速度：** OpenClaw 是唯一保持双周发布节奏的项目（今日发布 v2026.10.3、v2026.10.5-beta.3），展示了成熟的 CI/CD 流程和清晰的版本策略。Hermes Agent、ZeroClaw 和 QwenPaw 过去 24 小时内均未发布新版本。
- **活动规模：** 24 小时内更新 500 个 issues 和 500 个 PR，OpenClaw 的活跃度是其最接近竞争对手（Hermes Agent、ZeroClaw 各约 50 个）的十倍，表明其拥有更大的贡献者群体和更多样化的用例场景。
- **企业就绪度：** OpenClaw 专注于多提供商降级、定时任务管理和生产级稳定性（最近的 PR 解决了内存阻塞、会话数据库锁等问题），是生态中面向企业需求最明确的产品。

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|-----------|----------|--------------|----------|----------|
| 核心定位 | 桌面智能体 + 插件生态 | 聊天/智能体编排 | 运行时交付、网关 | 智能体框架 |
| 内存模型 | 会话转录持久化 | 可配置限制的内存 | SQLite 会话后端 | SQLite + 插件状态 |
| 插件架构 | 声明式扩展面 | 技能式工具 | WASM 插件宿主 | 插件市场 |
| 发布周期 | 双周发布 | 不规则发布 | 按功能发布 | 按功能发布 |

### 社区规模对比

OpenClaw 的 issue 数量（292 个开放）和 PR 数量（315 个开放）超过其他所有项目之和，表明其拥有最大规模的活跃用户和贡献者群体。Hermes Agent 保持健康的互动（~47 个开放 PR），而 IronClaw 几乎没有活跃度（1 个 issue、1 个 PR）。

---

## 4. 共同技术关注点

### 各项目共同需求

| 关注领域 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|------------|----------|--------------|----------|---------|
| **会话/对话管理** | ✅ | ✅ | ✅ | ✅ |
| **插件/工具生态** | ✅ | ✅ | ✅ | ✅ |
| **持久化存储（SQLite）** | ✅ | ✅ | ✅ | ✅ |
| **多提供商路由** | ✅ | ✅ | ✅ | — |
| **成本追踪/可视化** | ✅ | — | ✅ | — |
| **后台任务处理** | ✅ | — | ✅ | ✅ |
| **热加载/重载安全** | ✅ | — | ✅ | ✅ |
| **主题/UI 扩展性** | — | — | — | ✅ |

### 具体共同需求

1. **无界数据增长管理** — OpenClaw (#114612)、ZeroClaw (#11420)、QwenPaw (#8228) 都出现了会话/聊天历史无限增长而缺乏保留策略的问题，导致超时和存储故障。

2. **会话可靠性** — 所有活跃度较高的项目都存在与消息丢失、静默失败和转录损坏相关的问题：
   - OpenClaw: "回复丢失"回归 (#148707)
   - Hermes Agent: 僵尸进程累积 (#97616)
   - ZeroClaw: 会话 created_at 被重写 (#11420)
   - QwenPaw: 控制台静默空完成 (#8172)

3. **提供商传输加固** — 多个项目正在处理缓存行为、速率限制和模型提供商的错误处理：
   - OpenClaw: 缓存重写 130K token (#10777)
   - Hermes Agent: 按故障类别提供提供商降级 (#47910)
   - ZeroClaw: OpenRouter $0.00 消费可见性 (#11204)

4. **插件生命周期管理** — WASM 插件宿主（ZeroClaw）、声明式扩展面（OpenClaw）和热加载（QwenPaw、ZeroClaw）表明这是一个共同的架构优先级。

---

## 5. 差异化分析

### 功能重点

| 项目 | 主要差异化定位 | 目标用户 |
|---------|------------------------|-------------|
| **OpenClaw** | 全功能桌面智能体，支持 Gateway、定时任务、npm/pnpm 更新流程、多提供商降级 | 需要全功能 AI 助手的企业开发者、高级用户 |
| **Hermes Agent** | Muse Code 登录集成、多样化 Auth 提供商、安全捆绑推理 | 需要模块化、安全优先的聊天编排的开发者 |
| **ZeroClaw** | 运行时交付架构、网关配对安全、WASM 插件宿主 | 专注于部署智能体运行时的基础设施团队 |
| **QwenPaw** | 插件市场、技能中心、控制台 UI/UX 基础、技能式工具 | 围绕可扩展技能市场构建开发者生态 |
| **IronClaw** | 轻量扩展框架，使用 hosted-MCP 元数据、声明式认证 | 想要Companion应用但不修改主机的第三方集成商 |

### 技术架构

- **OpenClaw** 和 **ZeroClaw** 都采用 SQLite 作为规范会话存储，但 ZeroClaw 的架构强调运行时交付（网关、传输层），而 OpenClaw 强调桌面端 UX 和 Gateway 服务管理。
- **QwenPaw** 通过技能/插件市场模型进行差异化（最近 PR 将 hub 移至 plugins），使其成为最具生态导向的平台。
- **IronClaw** 采用轻量级、集成优先的方式——无运行时交付，仅为外部 Companion 提供扩展面。
- **Hermes Agent** 将自身定位为编排层，具有强大的安全特性（Auth Worker 中的捆绑推理）。

---

## 6. 社区动能与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|----------|-----------------|
| **快速迭代** | OpenClaw | 每天 500 个 issues/PRs；双周发布；成熟的 CI/CD；企业驱动反馈循环 |
| **活跃开发** | Hermes Agent, ZeroClaw, QwenPaw | 每天 20–50 个 PRs/issues 更新；按功能发布；健康的贡献者活跃度 |
| **稳定期 / 低活跃** | IronClaw | 极少的更新；可能处于维护模式或早期探索阶段 |

### 哪些项目迭代较快？

- **OpenClaw** 按活动量明显领先，每周两次发布，拥有 99 名稳定贡献者。高 issue 与 PR 比率（292:315）表明社区驱动的功能请求和缺陷报告非常活跃。
- **QwenPaw** 展示了最高的 PR 关闭率（今日更新的 42 个中关闭 20 个），表明代码审查和合并流程执行得很好。近期的基础 UI/UX 改进 (#8217) 和技能中心模块化 (#8128) 代表了重大架构投入。
- **ZeroClaw** 处于发布关键阶段（v0.8.6/v0.9.0 在 #7432 中跟踪），PR 活动量很大（45 个开放）。跟踪 issue 格式表明有结构化的发布流程。

### 哪些项目趋于稳定？

- **IronClaw** 过去 24 小时没有任何有意义的活动。这可能表明代码库成熟稳定、需要更新的频率很低，或者项目处于维护模式。唯一的 issue（一个提案，而非缺陷）表明用户基数很小。

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **生产环境加固成为主导关注点。** 在所有活跃项目中，高优先级问题大多与可靠性相关（消息丢失、静默失败、会话数据损坏），而非新功能。这标志着生态系统已跨越原型阶段，正在为生产部署进行优化。

2. **多提供商路由和降级已是标配。** OpenClaw、Hermes Agent 和 ZeroClaw 都在提供程序抽象层上投入资源，近期工作涉及故障分类和降级策略。随着模型提供商激增（Anthropic、OpenAI、Google、自托管），这一能力变得不可或缺。

3. **插件生态正围绕 WASM 和声明式表面整合。** ZeroClaw 的 WASM 插件宿主和 OpenClaw 的声明式扩展面代表了趋同的架构选择。QwenPaw 的技能/插件市场模型在此基础上增加了分发层。

4. **成本可见性变得至关重要。** OpenClaw 的成本账本问题、ZeroClaw 的 OpenRouter $0.00 消费缺陷，以及类似问题表明用户运行这些智能体的规模已足够大，成本管理成为主要运营关注点。

5. **后台任务和定时任务处理尚不成熟。** 围绕定时任务取消（ZeroClaw）、后台任务处理（QwenPaw）和 Webhook 流式传输（Hermes Agent）的问题表明，异步任务模型是需要架构投入的领域。

6. **UI/UX 扩展性正在兴起。** QwenPaw 的主题扩展请求 (#8071) 和 OpenClaw 的 Control UI 改进表明，第一代智能体 UI 正在向自定义开放——这是生态成熟的标志。

### 对 AI 智能体开发者的价值

对评估这些项目的开发者：

- **企业 / 生产用途：** OpenClaw 提供最成熟的部署方案，包括 Gateway、定时任务和多提供商路由。
- **插件 / 生态构建：** QwenPaw 的市场模型和 ZeroClaw 的 WASM 插件宿主提供扩展框架。
- **基础设施 / 运行时交付：** ZeroClaw 的架构专为嵌入智能体运行时而设计。
- **安全优先的集成：** Hermes Agent 的 Auth Worker 设计和密钥重写特性满足安全敏感型部署需求。
- **轻量级集成：** IronClaw 的声明式扩展面适用于无需完整智能体部署的 Companion 场景。

---

*本报告基于 2026-10-14 五个 OpenClaw 生态项目的 GitHub 活动数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English project digest into Chinese while following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - register of a Chinese developer newsletter, not literal word-for-word

Let me translate this carefully while maintaining all the structure and technical terms.

Key points to translate:
- "Today's Overview" → "今日概览"
- "Releases" → "发布"
- "Project Progress" → "项目进展"
- "Merged/Closed PRs Today" → "今日合并/关闭的 PR"
- "Active PRs Advancing Features" → "正在推进功能的活跃 PR"
- "Community Hot Topics" → "社区热点话题"
- "Most Active Issues" → "最活跃的 Issue"
- "Bugs & Stability" → "缺陷与稳定性"
- "Critical & High Severity Bugs" → "严重和高优先级缺陷"
- "Feature Requests & Roadmap Signals" → "功能请求与路线图信号"
- "User Feedback Summary" → "用户反馈总结"
- "Pain Points Identified" → "痛点识别"
- "Positive Signals" → "积极信号"
- "Backlog Watch" → "积压关注"

I need to translate the content naturally while keeping all the technical elements intact.</think>

# Hermes Agent 项目简报 — 2026-10-14

## 今日概览

Hermes Agent 保持高活跃度，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目展现出良好的发展势头，有 47 个活跃 PR，仅 3 个已合并/关闭。今日无新版本发布。需要关注的关键问题是 P1 级别的检查点存储 bug 和 macOS 网关崩溃问题。社区正在积极参与委托、内存管理和会话处理等议题——这些是即将开展功能开发的重点领域。

---

## 发布

**今日无新版本。** 项目在过去 24 小时内没有发布新版本。

---

## 项目进展

### 今日合并/关闭的 PR

根据数据，50 个更新的 PR 中有 3 个已合并/关闭。主要合并的 PR（根据近期活动推断）：

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#103373](https://github.com/NousResearch/hermes-agent/pull/103373) | fix(compression): re-arm attempt budget after plugin context-engine compaction | Open |
| [#138130](https://github.com/NousResearch/hermes-agent/pull/138130) | fix(agent): send a fitting request when pre-API compression times out | Open |
| [#138128](https://github.com/NousResearch/hermes-agent/pull/138128) | fix(agent): re-probe the live Codex quota before benching an exhausted fallback candidate | Open |

### 正在推进功能的活跃 PR
- **#110907** — feat(security): exact-value redaction of .env secrets — 为前缀模式脱敏引擎补充精确值脱敏功能
- **#138126** — feat(gateway): support voice-only auto replies — 为语音消息提供可选的语音回复模式
- **#138127** — feat(api): add opt-in public speech Responses streaming — 分类评论投影
- **#138122** — perf(cron): resolve primary profile routes once per multiplex tick cycle — 解决 #138105 提到的问题

---

## 社区热点话题

### 最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 优先级 | 链接 |
|-------|-------|----------|----------|------|
| #131859 | Cannot open a pull request via API: CreatePullRequest permission error | 38 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/131859) |
| #5320 | feat(memory): raise/auto-scale memory_char_limit defaults and surface usage pressure | 13 | P3 | [查看](https://github.com/NousResearch/hermes-agent/issues/5320) |
| #80222 | Feature request: per-call model and reasoning_effort overrides on delegate_task | 8 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/80222) |
| #106592 | Remote Desktop update reports failure and leaves stale update state | 8 | P2 | [查看](https://github.com/NousResearch/hermes-agent/issues/106592) |
| #133212 | subagent_lifecycle v1.1 for plugin orchestrators | 7 | P3 | [查看](https://github.com/NousResearch/hermes-agent/issues/133212) |

**分析：** 最热门的话题是 GitHub API 权限错误导致无法创建 PR（#131859，38 条评论），这表明企业/用户认证流程存在问题。内存管理默认值（#5320）和委托灵活性（#80222）代表了用户对 AI 行为更精细控制方面的持续需求。

---

## 缺陷与稳定性

### 严重和高优先级缺陷（P1-P2）

| Issue | 描述 | 严重程度 | 修复 PR？ |
|-------|-------------|----------|---------|
| [#138039](https://github.com/NousResearch/hermes-agent/issues/138039) | over-cap checkpoint store flattens every project to one snapshot, ignoring max_snapshots — silent /rollback loss | **P1** | 否 |
| [#137838](https://github.com/NousResearch/hermes-agent/issues/137838) | macOS gateway repeatedly exits 75 after missed liveness probes | **P1** | 否 |
| [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) | Cannot open a pull request via API: CreatePullRequest permission error | P2 | 否 |
| [#106592](https://github.com/NousResearch/hermes-agent/issues/106592) | Remote Desktop update reports failure after successful systemd restart | P2 | 否 |
| [#118536](https://github.com/NousResearch/hermes-agent/issues/118536) | cron: provider-unreachable failures never retry (cause chain destroyed) | P2 | [#118548](https://github.com/NousResearch/hermes-agent/pull/118548) |
| [#129450](https://github.com/NousResearch/hermes-agent/issues/129450) | Delegation batch reports "Every task failed" when all succeeded | P2 | 否 |
| [#138115](https://github.com/NousResearch/hermes-agent/issues/138115) | Subdirectory AGENTS.md hints miss container-absolute paths with docker backend | P2 | [#138120](https://github.com/NousResearch/hermes-agent/pull/138120), [#138124](https://github.com/NousResearch/hermes-agent/pull/138124) |
| [#138105](https://github.com/NousResearch/hermes-agent/issues/138105) | Multiplex cron ticker O(profiles) config re-parses starving Discord heartbeat | P2 | [#138122](https://github.com/NousResearch/hermes-agent/pull/138122) |

**正在修复的问题：**
- **#103373**（压缩预算重新激活）— 解决 #103355
- **#118548**（离线重试）— 解决 #118536

---

## 功能请求与路线图信号

### 活跃的功能请求

| Issue | 请求 | 优先级 | 社区关注 |
|-------|---------|----------|-------------------|
| [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) | Raise/auto-scale memory_char_limit defaults | P3 | 👍 3 |
| [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) | Per-call model and reasoning_effort overrides on delegate_task | P2 | 👍 3 |
| [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | subagent_lifecycle v1.1 for plugin orchestrators | P3 | 👍 0 |
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | Tracking: one gateway owns every local session | P2 | 👍 0 |

**路线图信号：** 委托覆盖（#80222）和统一会话追踪（#134889）表明项目正在向更精细的 AI 代理行为控制和会话管理方向发展。内存扩展（#5320）解决了长时间运行会话的实际痛点。

---

## 用户反馈总结

### 识别到的痛点

1. **认证障碍** — 用户因权限错误无法通过 API 创建 PR；影响 fork 工作流
2. **内存限制** — 默认内存限制（2200 字符）对于生产环境使用来说太小，需要手动配置
3. **更新误报** — 桌面端更新机制在更新成功时仍报告失败
4. **模型选择器混乱** — 未显示不可用/已关机的模型筛选功能
5. **会话丢失** — 新 Desktop 聊天中的第一条提示可能静默消失；未向用户显示错误
6. **检查点损坏** — 超容量检查点存储静默丢失回滚能力

### 积极信号
- 安全加固正在进行（env 密钥脱敏，#110907）
- cron 多路复用性能改进（#138105，#138122）
- 语音/API 流式功能扩展（#138126，#138127）

---

## 积压关注

### 需要维护者关注的 Issue

| Issue | 时长 | 状态 | 关注点 |
|-------|-----|--------|---------|
| [#5320](https://github.com/NousResearch/hermes-agent/issues/5320) | 约 6 个月 | 开放 | 内存默认限制——频繁请求，尚未决定 |
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 6 天 | 开放 | 统一会话大型追踪 issue——需要合并决策 |
| [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | 9 天 | 开放 | 插件生命周期 v1.1——需要 needs-decision 标签，停滞 |
| [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) | 约 2 个月 | 开放 | 委托覆盖——需要 needs-decision，P2 优先级 |

**看起来没有停滞的 PR**（根据近期活动判断，所有 PR 都在 24 小时内有更新）。项目正在积极处理积压队列。

---

*数据来源：NousResearch/hermes-agent GitHub 数据，2026-10-14*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the IronClaw Project Digest into Simplified Chinese. I need to:
1. Translate all the content while maintaining the exact Markdown structure
2. Keep URLs, issue numbers, code, file paths, etc. as-is
3. Use natural technical Chinese register

Let me go through each section and translate it appropriately.

The content is about a GitHub project called IronClaw and its daily digest. I need to translate the narrative parts while keeping technical elements unchanged.

Let me translate section by section:

**Title**: "IronClaw 项目日报" (IronClaw Project Daily Digest)

**Date**: Keep as-is

**1. Today's Overview** → "今日概览"
- Translate the paragraph about activity level, issues, PRs, etc.

**2. Releases** → "版本发布"
- Translate the note about no releases

**3. Project Progress** → "项目进展"
- Translate the PR description and analysis

**4. Community Hot Topics** → "社区热点"
- Translate the issue summary and analysis

**5. Bugs & Stability** → "缺陷与稳定性"
- Translate the stability assessment

**6. Feature Requests & Roadmap Signals** → "功能请求与路线图信号"
- Translate the roadmap signals

**7. User Feedback Summary** → "用户反馈摘要"
- Translate the feedback summary

**8. Backlog Watch** → "待办事项关注"
- Translate the backlog assessment

**Footer**: Translate the note about data source

Let me do this translation now:</think>

# IronClaw 项目日报

**日期：** 2026-10-14
**仓库：** nearai/ironclaw

---

## 1. 今日概览

2026年10月14日，IronClaw 项目活动量较低。过去 24 小时内，仓库记录了 1 个开放的问题（issue）和 1 个开放的拉取请求（PR），均于 10 月 13 日提交。本期无版本发布、无合并的 PR，亦无已关闭的问题。总体活动水平维持在低点，仅有常规的依赖维护工作进行中。唯一的问题是一份社区驱动的提案，而非缺陷报告或紧急功能请求，表明项目运行稳定，外部贡献稳步推进。

---

## 2. 版本发布

过去 24 小时内无新版本发布。本期版本发布部分为空，项目在本周期内未发布任何版本更新。

---

## 3. 项目进展

过去 24 小时内无合并或关闭的拉取请求。唯一的活跃 PR 如下：

- **[#8137](https://github.com/nearai/ironclaw/pull/8137)** — **[dependencies, javascript] chore(deps): bump brace-expansion in /docs/internal/architecture-video**
  - **作者：** dependabot[bot]
  - **状态：** OPEN
  - **摘要：** 将 docs/internal/architecture-video 目录中的 `brace-expansion` 从 1.1.18 版本升级至 1.1.21。这是一次例行的安全性和兼容性更新，对核心功能无影响。

本期无功能推进，亦无缺陷修复合并。

---

## 4. 社区热点

最值得关注的社区参与是一个开放的问题，代表一项功能提案：

- **[#8136](https://github.com/nearai/ironclaw/issues/8136)** — **提案：使用声明式认证和出口的可选 hosted-MCP Plazmi 扩展**
  - **作者：** cairn-agent
  - **状态：** OPEN
  - **反应：** 0 👍
  - **评论：** 0
  - **摘要：** 作者提议利用现有的 hosted-MCP 元数据、API 密钥认证和出口能力，在声明式扩展面上集成可选的 Plazmi 伴侣应用。此方案避免了在主机应用中添加供应商特定逻辑。该提案参考了 Reborn 扩展指南，旨在利用现有的架构接口进行扩展。

**分析：** 该问题代表了一项深思熟虑的社区贡献，旨在通过第三方集成（Plazmi）扩展 IronClaw 的生态系统。作者展示了对该项目扩展架构的熟悉程度，并寻求在不污染核心主机逻辑的情况下增加价值。缺乏评论和反应表明其处于早期可见性阶段，但该提案看起来合理且符合项目的可扩展性目标。

---

## 5. 缺陷与稳定性

过去 24 小时内未报告任何缺陷、崩溃或回归。根据现有数据，项目未显示稳定性问题。

---

## 6. 功能请求与路线图信号

唯一与功能相关的活动是问题 #8136 中关于 Plazmi 集成的提案。由此可推断出以下路线图信号：

- **扩展生态系统增长：** 社区成员正在探索通过 hosted-MCP 框架集成第三方工具的方法。
- **声明式扩展模型：** 用户对利用声明式扩展面进行认证和出口配置感兴趣，表明对当前设计模式的认可。
- **供应商中立设计：** 该提案强调利用现有接口而非添加新主机逻辑来避免供应商锁定。

如果被接受，这将扩展 IronClaw 的合作伙伴生态系统。然而，鉴于缺乏维护者响应且提案处于早期阶段，在进一步讨论之前不太可能在下一版本中出现。

---

## 7. 用户反馈摘要

直接的用户反馈仅限于 cairn-agent 的单个问题。可推断出的痛点和使用场景如下：

- **生态系统扩展需求：** 用户希望集成第三方工具（Plazmi）而不修改核心主机逻辑。
- **对现有架构的认可：** 该提案专门利用现有的声明式扩展面，表明对当前设计模式的满意。
- **使用场景：** 一个用于增强功能的伴侣应用（Plazmi），利用现有的认证和出口机制。

过去 24 小时内未记录任何不满或关键反馈。

---

## 8. 待办事项关注

过去 24 小时窗口内未发现长期未回复的问题或 PR。唯一的问题（#8137）于 10 月 13 日提交，仍处于开放状态，但尚未收到维护者关注。依赖项 PR（#8137）正在等待自动化评审。无关键项目处于停滞或被忽视状态。

---

*本日报基于过去 24 小时的 GitHub 活动数据。更多详情，请访问 [IronClaw 仓库](https://github.com/nearai/ironclaw)。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this project digest into Chinese. I need to:
1. Translate all the content
2. Keep the markdown structure exactly as-is
3. Keep URLs, issue numbers, code, etc. as-is
4. Use natural technical Chinese suitable for a Chinese developer newsletter

Let me go through and translate section by section:

1. **Title**: "QwenPaw Project Digest — 2026-10-14" → "QwenPaw 项目摘要 — 2026-10-14"

2. **1. Today's Overview**:
- "QwenPaw shows **very high activity** today with 20 issues and 42 PRs updated in the last 24 hours." → "QwenPaw 今天表现出**非常高**的活跃度，过去 24 小时内有 20 个 issues 和 42 个 PRs 更新。"
- "The project is in a rapid development cycle with significant frontend and backend improvements landing." → "项目正处于快速迭代周期，大量前端和后端改进正在落地。"
- "No new releases today, but multiple substantial PRs were merged including SQLite hardening (#6459), UIUX foundation (#8217), and skill hub modularization (#8128)." → "今天没有新版本发布，但有多个重要的 PR 已合并，包括 SQLite 加固 (#6459)、UIUX 基础架构 (#8217) 和技能中心模块化 (#8128)。"
- "The bug backlog is notable—several high-impact issues around chat history bloat, plugin loading in ACP sessions, and Windows-specific problems remain open." → "Bug 积压情况值得关注——多个高影响力问题仍然存在，包括聊天历史膨胀、ACP 会话中的插件加载以及 Windows 特定问题。"

3. **2. Releases**: "**No new releases** in the past 24 hours." → "过去 24 小时内**没有新版本发布**。"


4. **3. Project Progress** needs careful translation of technical terminology. The table structure should remain intact with proper Chinese translations for headers like "标题" (Title), "状态" (Status). Merged PRs need accurate descriptions of their purposes, such as "fix(history): harden SQLite persistence, backup, and restore" becoming "修复(history): 加固 SQLite 持久化、备份和恢复".

For the Notable Open PRs section, I'll translate "add experimental Python Code Mode" as "添加实验性 Python 代码模式", ensuring technical accuracy while maintaining natural Chinese phrasing.

The Community Hot Topics table requires precise translation of issue titles and maintaining the comment counts and reaction numbers exactly as they appear in the original format.

Several issues stand out as particularly important: Plugin-facing theme extension point needs nuanced translation as "插件级主题扩展点（语义标记覆盖层）", Console chat intermittent silent empty completion becomes "控制台聊天偶发静默空完成", and Support custom Skill/Plugin market source should be translated as "支持自定义技能/插件市场源（自托管）".

The Background Task Callback / Notification Mechanism section requires careful handling of the technical terminology, translating it as "后台任务回调/通知机制", while send_file_to_user audio file wedges session should convey the error state accurately as "send_file_to_user 音频文件卡住会话（LM Studio 400 错误）".

For the High Severity bugs, Chat history bloat needs context about base64 encoding causing massive message sizes and timeouts, described as "聊天历史膨胀 — tool_result 中的 base64 导致消息超过 10MB+，触发 30 秒超时", and qwenpaw acp never loads installed plugins captures the core issue as "qwenpaw acp 从不加载已安装的插件 — 工具缺失，回调失败".</think>

# QwenPaw 项目摘要 — 2026-10-14

## 1. 今日概览

QwenPaw 今天表现出**非常高**的活跃度，过去 24 小时内有 20 个 issues 和 42 个 PRs 更新。项目正处于快速迭代周期，大量前端和后端改进正在落地。今天没有新版本发布，但有多个重要的 PR 已合并，包括 SQLite 加固 (#6459)、UIUX 基础架构 (#8217) 和技能中心模块化 (#8128)。Bug 积压情况值得关注——多个高影响力问题仍然存在，包括聊天历史膨胀、ACP 会话中的插件加载以及 Windows 特定问题。

---

## 2. 版本发布

过去 24 小时内**没有新版本发布**。

---

## 3. 项目进展

### 已合并/关闭的 PRs（20 个）

| PR | 标题 | 状态 |
|----|-------|--------|
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | fix(history): 加固 SQLite 持久化、备份和恢复 | 已关闭（审核中） |
| [#8217](https://github.com/agentscope-ai/QwenPaw/pull/8217) | feat(console): 建立 UIUX 基础架构 | 已关闭 |
| [#8128](https://github.com/agentscope-ai/QwenPaw/pull/8128) | feat(skill): 将 hub 移至插件 | 已关闭 |
| [#8221](https://github.com/agentscope-ai/QwenPaw/pull/8221) | fix(console): 限制后台轮询，解锁模型选择器 | 已关闭 |
| [#8190](https://github.com/agentscope-ai/QwenPaw/pull/8190) | fix(agents): 在过滤历史媒体前解析模型能力 | 已关闭 |
| [#8220](https://github.com/agentscope-ai/QwenPaw/pull/8220) | chore(deps): 将 agentscope 版本升级至 2.0.10 | 已关闭 |
| [#8212](https://github.com/agentscope-ai/QwenPaw/pull/8212) | fix: 在 GeneratorExit 期间结束工具流而不产生 | 已关闭 |
| [#8098](https://github.com/agentscope-ai/QwenPaw/pull/8098) | fix(agents): 为前台聊天超时返回结果 | 已关闭（审核中） |
| [#8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) | fix(skills): 在构建 staging 路径前清理 skill_name | 已关闭 |
| [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) | 路由至 chat_with_image 的图片在 Bash+PIL 循环中卡住 | 已关闭 |
| [#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) | chat_with_agent 前台超时问题 | 已关闭 |
| [#8186](https://github.com/agentscope-ai/QwenPaw/issues/8186) | 消息导航跳转覆盖手动滚轮滚动 | 已关闭 |

### 值得关注的开放 PRs

- **[#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224)** — feat: 添加实验性 Python 代码模式 (size/XXL)
- **[#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)** — feat(plugins): 添加干净的卸载和回滚安全的热重载 (size/XXXL)
- **[#8231](https://github.com/agentscope-ai/QwenPaw/pull/8231)** — fix(console): 持久化市场安装来源以支持"更新全部"
- **[#8230](https://github.com/agentscope-ai/QwenPaw/pull/8230)** — feat(console): 添加可选的主机导航白名单
- **[#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229)** — fix(chat): 截断过大的工具输出（解决 #8228）
- **[#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205)** — feat(models): 添加 TypeSafe 提供商和决策模型类型

---

## 4. 社区热点话题

### 参与度最高的 Issues（按评论数）

| Issue | 标题 | 评论 | 👍 |
|-------|-------|----------|-----|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 插件级主题扩展点（语义标记覆盖层） | 3 | 0 |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | 控制台聊天偶发静默空完成 | 3 | 0 |
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 支持自定义技能/插件市场源（自托管） | 2 | 0 |
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | 后台任务回调/通知机制 | 2 | 0 |
| [#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171) | send_file_to_user 音频文件卡住会话（LM Studio 400 错误） | 2 | 0 |
| [#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206) | Windows 上项目删除失败（WinError 5） | 2 | 0 |

### 分析

**主题扩展 (#8071)** — 插件作者希望获得比单一 `colorPrimary` 更深入的主题控制权限。这表明对更成熟的插件生态系统有需求。

**控制台静默完成 (#8172)** — 一个关键的可靠性问题：聊天在大约 1 秒后静默完成，未调用模型。影响生产部署。

**后台任务回调 (#7056)** — 用户需要比轮询更强大的任务状态机制。这是企业级事件驱动架构的常见需求。

---

## 5. Bug 与稳定性

### 高优先级

| Issue | 标题 | 状态 | 修复 PR |
|-------|-------|--------|--------|
| [#8228](https://github.com/agentscope-ai/QwenPaw/issues/8228) | 聊天历史膨胀 — tool_result 中的 base64 导致消息超过 10MB+，触发 30 秒超时 | 开放中 | [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) |
| [#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222) | qwenpaw acp 从不加载已安装的插件 — 工具缺失，回调失败 | 开放中 | — |
| [#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225) | 零停机热重载静默取消运行中的定时任务 | 开放中 | — |
| [#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213) | Hub 重启后原本应运行的本地运行时被停止 | 开放中 | — |
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | 控制台聊天偶发静默空完成 | 开放中 | — |

### 中优先级

| Issue | 标题 | 状态 |
|-------|-------|--------|
| [#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206) | Windows 上项目删除失败（WinError 5） | 开放中 |
| [#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | GitHub 技能安装损坏二进制文件（非 UTF-8 → U+FFFD） | 开放中 |
| [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) | 路由至 chat_with_image 的图片在 PIL 裁剪循环中卡住 | 已关闭 |
| [#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) | 控制台硬编码 /console 基础路径，阻止反向代理子路径 | 开放中 |

**正面进展：** PR [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) 已修复关键的聊天历史膨胀问题 (#8228)。

---

## 6. 功能请求与路线图信号

### 本日新增功能请求

| Issue | 标题 | 备注 |
|-------|-------|-------|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 插件级主题扩展点 | 语义标记覆盖层，用于插件 |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | 将技能池下载改为可取消的后台任务 | #8055 的后续 |
| [#8223](https://github.com/agentscope-ai/QwenPaw/issues/8223) | 可选的主机导航策略（侧边栏 + 设置） | 用于托管部署 |
| [#8211](https://github.com/agentscope-ai/QwenPaw/issues/8211) | 为受保护执行合约提示添加 i18n 支持 | 扩展现有 i18n 机制 |
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | 后台任务回调/通知机制 | 长期存在的企业需求 |

### 路线图信号

- **Python 代码模式** — PR [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224) 引入了实验性的 Python 工具编排。可能是未来版本的候选功能。
- **插件热重载** — PR [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 添加了干净的卸载和回滚安全的重载。重要的架构改进。
- **技能市场模块化** — #8128 将 hub 移至插件，支持自定义市场。

---

## 7. 用户反馈总结

### 痛点

1. **生产环境可靠性** — 多位用户报告间歇性故障：静默空完成 (#8172)、定时任务静默取消 (#8225)、Hub 重启后未恢复运行时 (#8213)。

2. **Windows 支持** — 项目删除在 Windows 上失败（日志写入后 #8206）。存在平台特定边界情况。

3. **数据膨胀** — 聊天历史存储 base64 使会话达到 10MB+，导致超时。用户需要更好的媒体处理。

4. **插件生态系统缺口** — ACP 不加载插件 (#8222)、主题自定义受限 (#8179)、技能二进制文件损坏。

### 正面反馈信号

- 功能 #8015（自定义市场源）已**关闭** — 表明已解决，可能通过 #8128。
- UIUX 基础架构 (#8217) 已合并 — 改善前端架构。
- SQLite 加固 (#6459) 审核中 — 解决并发问题。

---

## 8. 积压关注

### 长期未回复的重要 Issues

| Issue | 标题 | 时长 | 状态 |
|-------|-------|-----|--------|
| [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | 后台任务回调/通知机制 | 2026-08-15 | 开放中（2 条评论） |
| — | — | — | — |

### 需要维护者关注的 PRs

| PR | 标题 | 时长 | 状态 |
|----|-------|-----|--------|
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | feat(plugins): 添加干净的卸载和回滚安全的热重载 | 2026-09-04 | 开放中 (size/XXXL) |
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | fix(history): 加固 SQLite 持久化、备份和恢复 | 2026-07-24 | 已关闭（审核中） |

**注意：** #7056 自 8 月中旬开放以来暂无明确路线图。这是一个频繁请求的企业功能（后台任务回调）。建议维护者优先处理。

---

*基于 2026-10-14 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the ZeroClaw Project Digest from English to Chinese (Simplified Chinese - 简体中文). I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all formatting and technical terms.</think>

# ZeroClaw 项目简报 — 2026-10-14

**仓库地址：** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)  
**生成时间：** 2026-10-14

---

## 1. 今日概览

ZeroClaw 过去 24 小时开发活动频繁，共有 **24 个 Issue** 和 **50 个 PR** 更新。所有 Issue 均处于开启状态，表明问题正在积极分类和早期排查阶段。v0.8.6 版本准备工作正在推进，WASM 插件宿主已在支持版本的构建产物中交付，同时修复了多个关键问题。本日未发布新版本，但有五个 PR 已合并/关闭。Issue 积压较多，包括运行时、提供商集成和配置管理等多个 P1 级别的严重缺陷需要立即处理。

---

## 2. 版本发布

过去 24 小时**未发布**新版本。

---

## 3. 项目进展

### 本日合并/关闭的 PR（共计 5 个）

| PR | 标题 | 状态 |
|----|------|------|
| [#11435](https://github.com/zeroclaw-labs/zeroclaw/pull/11435) | fix(sop): settle rejected headless runs and retain reload retries | **CLOSED** |

### 当前活跃的重要 PR（v0.8.6 版本）

| PR | 标题 | 风险等级 | 规模 |
|----|------|----------|------|
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | feat(release): ship WASM plugin host in supported release artifacts | — | — |
| [#11304](https://github.com/zeroclaw-labs/zeroclaw/pull/11304) | fix(plugins): record socket and WebSocket egress denials | 高 | 巨大 |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | feat(quickstart): install and activate tool plugins from zeroclaw quickstart | 高 | 巨大 |
| [#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228) | fix(plugins): harden named TLS profile materialization | 高 | 巨大 |
| [#11676](https://github.com/zeroclaw-labs/zeroclaw/pull/11676) | fix(infra): preserve created_at of retained rows when replacing session transcript | 中 | 巨大 |

---

## 4. 社区热点

按评论活跃度排序的最热门话题：

| Issue/PR | 标题 | 评论数 | 讨论焦点 |
|----------|------|--------|----------|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session backend rewrites created_at of every message | 8 | 核心数据完整性缺陷；会话转录替换丢失每条消息的时间戳 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker: Runtime and gateway delivery - v0.8.6 and v0.9.0 | 6 | 第二/三阶段运行时工作追踪；关键版本里程碑 |
| [#11204](OpenRouter spend shows $0.00 and all tokens classified "free tok") | OpenRouter 消费显示 $0.00，usage.cost 未被摄入 | 5 | 成本追踪失效；无收入可见性 |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | Bind gateway pairing tokens to roster users | 5 | 远程主体作用域的安全架构 |
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger drops provider's total_tokens (Gemini reasoning tokens) | 4 | 隐藏推理模型 token 统计不足 |
| [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | thinking/effort config flips between turns, rewrites cached history | 3 | Anthropic 提供商缓存失效（每轮重写约 130K token） |

**深层需求：** 热点话题揭示三类用户关切：**(1)** 会话数据完整性和成本追踪可靠性，**(2)** 提供商传输层性能回归（缓存行为），**(3)** 多租户网关部署的安全架构。

---

## 5. 缺陷与稳定性

### P1 — 严重级别（需立即修复）

| Issue | 标题 | 状态 | 修复 PR？ |
|-------|------|------|------------|
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite rewrites created_at, losing per-message timestamps | 开启 | [#11676](https://github.com/zeroclaw-labs/zeroclaw/pull/11676) |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend shows $0.00 — usage.cost never ingested | 开启 | — |
| [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | thinking/effort config flips, rewrites 130K cached tokens per turn | 开启 | — |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | model_routing_config upsert_agent rewrites entire config | 开启 | — |

### P2 — 高优先级

| Issue | 标题 | 状态 | 修复 PR？ |
|-------|------|------|------------|
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger drops hidden reasoning tokens (Gemini) | 开启 | — |
| [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | cost.warn_at_percent warnings ignored by runtime | 开启 | — |
| [#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179) | Flaky test: sop::engine pending_park_retry_respects_pending_pool_cap | 开启 | — |
| [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675) | ACP session store re-stamps created_at on transcript replace | 开启 | — |
| [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | System prompt rebuilt from disk every turn (perf) | 开启 | — |

### P3 — 次要/行为异常

| Issue | 标题 | 状态 |
|-------|------|------|
| [#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) | ZeroCode Cost tab mixes UTC and local-day totals |
| [#11710](https://github.com/zeroclaw-labs/zeroclaw/issues/11710) | Truncated workspace file conflicting instructions |
| [#11704](https://github.com/zeroclaw-labs/zeroclaw/issues/11704) | Channel/agent system prompts carry date, busting cache at midnight |

---

## 6. 功能需求与路线图信号

### 已接受且开发中的功能

| Issue | 标题 | 目标版本 |
|-------|------|----------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Runtime and gateway delivery - v0.8.6 and v0.9.0 | v0.8.6 / v0.9.0 |
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | Ship WASM plugin host in release artifacts | v0.8.6 |
| [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) | Capability-taking constructors for turn entry points | v0.8.6 |
| [#11577](https://github.com/zeroclaw-labs/zeroclaw/pull/11577) | Run subagent on operator-declared model route | — |

### 新功能请求

| Issue | 标题 | 优先级 |
|-------|------|--------|
| [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207) | Document bounded Tsubasa custom-provider setup | P3 |
| [#11705](https://github.com/zeroclaw-labs/zeroclaw/issues/11705) | Proposal: Plazmi example for per-agent MCP grants | — |
| [#11721](https://github.com/zeroclaw-labs/zeroclaw/pull/11721) | Add Standard Compute model provider | 中 |
| [#11717](https://github.com/zeroclaw-labs/zeroclaw/pull/11717) | Add optional model to local Whisper transcription | 中 |
| [#11719](https://github.com/zeroclaw-labs/zeroclaw/pull/11719) | Add Oxocarbon dark theme | 低 |

---

## 7. 用户反馈摘要

### 从 Issue 中识别的痛点

1. **成本追踪完全失效** — 使用 OpenRouter 运行生产工作负载的用户看到消费报告显示 $0.00，所有 token 被错误归类为"free tok"（[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)）。这直接影响账单可视化和预算执行。

2. **会话数据完整性问题** — SQLite 会话后端重写整个转录内容的行为破坏了历史时间戳元数据（[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)、[#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675)），导致审计追踪不可靠。

3. **性能回归** — 多个性能问题浮现：系统提示每轮从磁盘重建（[#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696)）、缓存午夜失效（[#11704](https://github.com/zeroclaw-labs/zeroclaw/issues/11704)）、Anthropic 传输层每轮重写 130K token（[#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777)）。

4. **配置管理存在风险** — `model_routing_config upsert_agent` 操作会破坏整个配置文件，丢失字段并重置代理限制（[#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606)）。

5. **提供商特定问题** — Gemini 推理 token 统计不足（[#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)）；Telegram 速率限制 429 响应未被正确处理（[#11651](https://github.com/zeroclaw-labs/zeroclaw/pull/11651)）。

### 积极信号

- WASM 插件生态系统向生产发布迈进（[#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347)）
- 插件 TLS 配置文件安全性已加固（[#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228)）
- 新增转录和提供商集成正在贡献中（[#11717](https://github.com/zeroclaw-labs/zeroclaw/pull/11717)、[#11721](https://github.com/zeroclaw-labs/zeroclaw/pull/11721)）

---

## 8. 积压关注

### 需要维护者关注的长周期 Issue

| Issue | 存在时长 | 标题 | 状态 |
|-------|----------|------|------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 约 4 个月 | Tracker: Runtime and gateway delivery v0.8.6/v0.9.0 | 已接受，进行中 |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | 约 6 周 | Bind gateway pairing tokens to roster users | 已接受，后续跟进中 |

### 停滞项目

| Issue | 存在时长 | 标题 | 备注 |
|-------|----------|------|------|
| [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) (推断) | — | — | 未提供 PR 链接；请参考 Issue 列表 |

### 需要作者处理

| PR | 标题 | 备注 |
|----|------|------|
| [#11647](https://github.com/zeroclaw-labs/zeroclaw/pull/11647) | fix(providers): decouple vision support from system merge | 需要作者处理 |
| [#11718](https://github.com/zeroclaw-labs/zeroclaw/pull/11718) | fix(gateway): keep streamed webhook running on SSE disconnect | 需要作者处理 |
| [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) | feat(runtime): capability-taking constructors | 需要作者处理 |
| [#11651](https://github.com/zeroclaw-labs/zeroclaw/pull/11651) | fix(channels): honor Telegram 429 retry_after | 需要作者处理 |
| [#11297](https://github.com/zeroclaw-labs/zeroclaw/pull/11297) | fix(runtime): honour keep_tool_context_turns | 需要作者处理 |
| [#11577](https://github.com/zeroclaw-labs/zeroclaw/pull/11577) | feat(runtime): run subagent on operator-declared model route | 需要作者处理 |

---

*简报结束。所有 GitHub 链接指向 https://github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*