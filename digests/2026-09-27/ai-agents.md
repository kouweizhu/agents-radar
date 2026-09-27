# OpenClaw 生态日报 2026-09-27

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-27 00:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the OpenClaw Project Digest into Simplified Chinese, following the detailed translation guidelines provided. Let me work through this carefully.

Key points from the guidelines:
1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths as-is
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Overview

OpenClaw maintains high activity with **500 issues** and **500 PRs** updated in the past 24 hours. The project shows **473 open issues** and **425 open PRs**, with 27 issues and 75 PRs closed/merged. No new releases were published today. The issue landscape is dominated by P0/P1 stability concerns including crash-loops, resource leaks, and message loss—particularly around the recent 2026.9.5 and 2026.9.6 releases. The community is actively debugging regressions in model-catalog workers, session state management, and cross-channel messaging reliability.

翻译:
# OpenClaw 项目摘要 — 2026年9月27日

## 一、今日概览

过去24小时内，OpenClaw 项目保持高活跃度，共有 **500 个 Issue** 和 **500 个 PR** 更新。目前有 **473 个开放 Issue** 和 **425 个开放 PR**，其中27个 Issue 和75个 PR 已关闭/合并。今日未发布新版本。当前 Issue 分布以 P0/P1 稳定性问题为主，包括崩溃循环、资源泄漏和消息丢失——尤其集中在最近的 2026.9.5 和 2026.9.6 版本上。社区正在积极调试 model-catalog worker、会话状态管理和跨渠道消息传递方面的回归问题。

## 2. Releases

**No new releases** published in the last 24 hours.

## 3. Project Progress

我需要保持表格格式。让我继续翻译...

The translation maintains technical precision while adapting to Chinese newsletter conventions. Key decisions included rendering "community hot topics" as "社区热点话题" for natural flow, converting emoji severity indicators to Chinese labels like 🦞 (critical) as "严重", and using established technical terminology such as "回归问题" for regressions and "内存泄漏" for resource leaks.</think>

# OpenClaw 项目摘要 — 2026年9月27日

## 一、今日概览

过去24小时内，OpenClaw 项目保持高活跃度，共有 **500 个 Issue** 和 **500 个 PR** 更新。目前有 **473 个开放 Issue** 和 **425 个开放 PR**，其中27个 Issue 和75个 PR 已关闭/合并。今日未发布新版本。当前 Issue 分布以 P0/P1 稳定性问题为主，包括崩溃循环、资源泄漏和消息丢失——尤其集中在最近的 2026.9.5 和 2026.9.6 版本上。社区正在积极调试 model-catalog worker、会话状态管理和跨渠道消息传递方面的回归问题。

---

## 二、版本发布

过去24小时内**无新版本**发布。

---

## 三、项目进展

| PR | 作者 | 状态 | 描述 |
|----|------|------|------|
| [#159288](https://github.com/openclaw/openclaw/pull/159288) | steipete | 已关闭 | fix(slack): 避免持久化入口 ack 测试在高负载下闪断 |
| [#159281](https://github.com/openclaw/openclaw/pull/159281) | steipete | 已关闭 | fix(test): 清理 canonical state fixture 目录 |
| [#159244](https://github.com/openclaw/openclaw/pull/159244) | steipete | 就绪 | fix(channels): 在 channel 日志中包含运行时日志 |
| [#159290](https://github.com/openclaw/openclaw/pull/159290) | steipete | 开启中 | perf(ui): 阻止 :has() 选择器触发全局重绘 |
| [#158447](https://github.com/openclaw/openclaw/pull/158447) | carlosjarenom | 就绪 | fix(updater): 通过环境变量而非导入查询识别配置读取子进程 |
| [#159272](https://github.com/openclaw/openclaw/pull/159272) | steipete | 开启中 | fix(agents): 保持收集器启动顺序与提交顺序一致 |
| [#159286](https://github.com/openclaw/openclaw/pull/159286) | steipete | 开启中 | perf(gateway): 在报告就绪前预热会话行缓存 |
| [#159280](https://github.com/openclaw/openclaw/pull/159280) | steipete | 就绪 | fix: 保留无异步捕获能力的插件操作 |
| [#159289](https://github.com/openclaw/openclaw/pull/159289) | AdvaitKushe | 开启中 | fix(models): Anthropic 选择器展示账户无权使用的模型 |
| [#159169](https://github.com/openclaw/openclaw/pull/159169) | roboclaw-bot | 就绪 | fix(gateway): 恢复配对设备的本地读取探测 |

**核心主题：** 测试可靠性修复、UI/网关性能优化、以及针对老旧主机的异步捕获兼容性改进。

---

## 四、社区热点话题

### 评论最多的 Issue

| Issue | 评论数 | 标题 |
|-------|--------|------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 40 | OpenClaw 2026.9.5 将稳定环境变为8小时故障恢复会话 |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | 31 | Model-catalog 过期/重建循环占用满一个 CPU 核心 — readFullModelCatalog() 每次调用都触发 refreshExpiredCatalog() |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 20 | 回复运行期间发送的消息被丢弃 — 2026.9.2 回归问题 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | 19 | 混合终端请求器-结算批次在所有权检查后无限重试 |
| [#140129](https://github.com/openclaw/openclaw/issues/140129) | 13 | Anthropic 缓存停滞在约 46k 工具 — session:sanitized 重写历史指纹 |

**分析：** 最活跃的讨论集中在 **2026.9.x 近期版本的回归问题**，导致环境不稳定、资源/CPU 泄漏和消息投递失败。用户反馈升级破坏了原本稳定的配置。核心需求是 **强化回归测试** 和 **发布前的向后兼容性验证**。

---

## 五、缺陷与稳定性

### 今日报告的 P0 严重问题

| Issue | 严重程度 | 影响范围 | 状态 |
|-------|----------|----------|------|
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | P0 🦞 | macOS 应用就绪看门狗发送 SIGTERM 终止慢启动网关，引发重启循环 | 开启中 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | P0 🦪 | 卡住的 agent-DB 资源导致每个 agent 回复都以通用失败提示失败 | 开启中 |
| [#157568](https://github.com/openclaw/openclaw/issues/157568) | P0 🦪 | WSL Gateway 在4分钟内重新增长 7.5 GB 实时插件捕获，尽管有60秒回收机制 | 开启中 |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | P0 🦪 | Gateway 在 plugin-doctor-post-session-state 崩溃循环 (2026.9.6) | 开启中 |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | P0 🦪 | Model-catalog worker 泄漏 openclaw-plugin-build-* 捕获 (1-3 GB/分钟) | 开启中 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | P0 🦪 | openclaw update 在"全局安装交换"步骤失败 | 开启中 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | P0 🦪 | Gateway: V8 堆外 RSS 失控导致 OOM 和关闭超时 | 开启中 |
| [#157319](https://github.com/openclaw/openclaw/issues/157319) | P0 🐚 | 升级到 2026.9.6 验证失败：state-migrated-no-rollback | 开启中 |
| [#154679](https://github.com/openclaw/openclaw/issues/154679) | P0 🦞 | 中断的更新：重写的 sessions.json 被当作迁移源；gateway 退出码 78 | 开启中 |

**可用修复 PR：** #158447 (updater 修复), #159280 (异步捕获兼容性)

**根因模式：** 插件捕获内存泄漏、更新/迁移失败、会话状态损坏、以及 macOS/WSL 特定的资源管理问题。

---

## 六、功能需求与路线图信号

| Issue | 需求 | 优先级 |
|-------|------|--------|
| [#155633](https://github.com/openclaw/openclaw/issues/155633) | 新增 Databricks Unity Gateway 作为官方模型提供商 | P2 |
| [#156632](https://github.com/openclaw/openclaw/issues/156632) | Swarm agents.run 的有界启动契约 | P2 |
| [#71330](https://github.com/openclaw/openclaw/issues/71330) | 功能：可配置的内存提升目标文件 | P3 |
| [#28300](https://github.com/openclaw/openclaw/issues/28300) | 主题定制系统 — 预设主题 + 自定义主题工作室 | P3 |
| [#79223](https://github.com/openclaw/openclaw/issues/79223) | 功能：可配置的 Memory Dreaming 语言/提示词 | P2 |

**推进功能的 PR：** [#155442](https://github.com/openclaw/openclaw/pull/155442) (swarm 有界切换), [#159246](https://github.com/openclaw/openclaw/pull/159246) (AgentsAPI 隔离会话)

---

## 七、用户反馈摘要

**核心痛点：**

1. **升级不稳定** — 从 2026.9.4/9.5 升级到 9.6 的用户遇到迁移失败、崩溃循环和服务故障，导致网关数小时不可用。Issue [#153257](https://github.com/openclaw/openclaw/issues/153257) 记录了升级后长达8小时的恢复会话。
2. **资源泄漏** — 多份报告指出 model-catalog worker 和插件捕获存在磁盘空间泄漏（1-3 GB/分钟）和 CPU 满载（单核跑满），尤其在 Windows/WSL 环境中。
3. **消息丢失** — Telegram 群组、飞书多 Lane 负载和子 Agent 完成通知的跨渠道消息投递存在静默丢弃。
4. **Windows 专属缺陷** — 定时任务设置、exec/read 工具空输出和 Matrix E2EE 账户 CPU 激增等问题仅在 Windows 平台出现。

**满意度信号：** 测试修复的快速响应 (#159288, #159281) 以及 Telegram/Matrix/飞书重构 (#158923) 的积极维护展示了响应式社区治理。

---

## 八、积压关注

### 需要维护者关注的长时间未响应 Issue

| Issue | 存在时长 | 状态 | 障碍 |
|-------|----------|------|------|
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 约6个月 | 开启中 | sessions_send 重复消息 — 需要产品决策 |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | 约3个月 | 开启中 | Memory dreaming 运行使事件循环卡死约10分钟 — 需要现场复现 |
| [#106704](https://github.com/openclaw/openclaw/issues/106704) | 约2.5个月 | 开启中 | 子 Agent 首次轮次上的 sessions_yield — 需要产品决策 |
| [#107244](https://github.com/openclaw/openclaw/issues/107244) | 约2.5个月 | 开启中 | WhatsApp 群消息始终无法到达 inbound — 需要现场复现 |
| [#77249](https://github.com/openclaw/openclaw/issues/77249) | 约5个月 | 开启中 | 重连监督器在僵尸 WSS 上挂起 — 需要更多信息 |

**过期 Issue：** [#69242](https://github.com/openclaw/openclaw/issues/69242) (exec 工具 SIGKILL) 已标记为过期；[#71330](https://github.com/openclaw/openclaw/issues/71330) (内存提升目标) 已标记为过期。

---

*摘要基于 OpenClaw GitHub 数据生成 — 2026年9月27日*

---

## 横向生态对比

<think>The user wants me to translate this English report into Simplified Chinese, following the specific rules provided. Let me go through and translate while preserving all the formatting, technical terms, project names, numbers, links, etc.

I need to output ONLY the translation, no preamble, no explanation, no markdown fences. Just the Chinese text.

Let me translate section by section:

1. Title and intro
2. Activity Comparison table
3. Health Score table
4. OpenClaw's Position
5. Shared Technical Focus Areas
6. Differentiation Analysis
7. Community Momentum & Maturity
8. Trend Signals for AI Agent Developers

I need to keep:
- All headings
- All tables (including alignment rows)
- Lists
- Bold/italic
- URLs
- Issue/PR references (#xxxxx)
- Project names (OpenClaw, Hermes Agent, IronClaw, QwenPaw, ZeroClaw)
- Version numbers
- Emoji
- Code formatting

Let me translate:</think>

# 跨项目对比报告：个人 AI 助手生态全景

## 1. 生态概览

个人 AI 助手与 Agent 框架生态正处于工程活动密集期，背后的驱动力是向 Agentic 架构的快速演进。五个项目在过去 24 小时内都有活跃开发，综合 Issues 和 PR 数量蔚为可观。生态呈现两个明显梯队：**高吞吐量项目**（OpenClaw、ZeroClaw、Hermes Agent）日均处理 50+ 条更新，**低活跃项目**（IronClaw、QwenPaw）处于维护模式。各项目的共同主题包括：多渠道集成的可靠性、无值守运行的安全加固，以及向 RPC 网关架构的转型。所有项目今日均无 Release 发布，表明开发工作可能正处于协调冻结期，或在为即将到来的版本里程碑做准备。

---

## 2. 活动量对比

| 项目 | Issues (24h) | 开放 Issues | PRs (24h) | 开放 PRs | Releases (24h) | 严重程度重点 |
|---------|--------------|-------------|-----------|----------|----------------|----------------|
| **OpenClaw** | 500 | 473 | 500 | 425 | 0 | 9+ P0 问题 |
| **ZeroClaw** | 50 | 41 | 50 | 43 | 0 | 6+ P1/S0 问题 |
| **Hermes Agent** | 50 | 46 | 50 | 43 | 0 | 1 P0、1 P1 |
| **QwenPaw** | 3 | 3 | 3 | 3 | 0 | 1 中等 |
| **IronClaw** | 1 | 1 | 1 | 1 | 0 | 无 |

**健康度评分：**
| 项目 | 评分 | 依据 |
|---------|-------|-----------|
| OpenClaw | 🟡 中高 | 活动量大但 9+ 未解决 P0 缺陷；社区活跃 |
| ZeroClaw | 🟡 中高 | v0.9.0 开发活跃；专注安全；6+ P1 缺陷 |
| Hermes Agent | 🟢 健康 | PR 闭合均衡；Issues 数量稳定；桌面端打磨中 |
| QwenPaw | 🟢 健康 | 虽无严重缺陷；稳中有进 |
| IronClaw | 🔴 低迷 | 活动极少；单一功能请求；路线图不明 |

---

## 3. OpenClaw 的定位

### 相比同行的优势

OpenClaw 在**原始活动量**上遥遥领先——是 ZeroClaw 和 Hermes Agent 的 10 倍——说明其贡献者基数更大、用户社区更活跃。其**多渠道覆盖**（Telegram、Feishu、Matrix、WhatsApp）无出其右，是目前集成最全面的方案。项目对**回归测试改进**（#159288、#159281）和自动化代码质量工具的积极投入，表明其已具备与企业级项目相当的成熟 DevOps 文化。

### 技术路线差异

与 ZeroClaw 的 v0.9.0 网关拆分走向 RPC 对齐不同，OpenClaw 维持**单体网关架构**，但通过大量插件捕获和会话状态管理来补偿。OpenClaw 聚焦**资源泄漏治理**（模型目录 worker、插件捕获），这与 Hermes Agent 强调桌面体验和 CLI 改进形成对比。IronClaw 的区块链原生方案（NEARA 集成）则是完全不同的垂直领域。

### 社区规模对比

OpenClaw 日均 500 条更新对比 Hermes Agent 的 50 条，表明 OpenClaw 的**社区参与度是其 10 倍**。OpenClaw 高热度 Issues 上的评论密度（#153257 上 40 条评论）对比 Hermes Agent（#101318 上 9 条），进一步印证了这一差距。不过，ZeroClaw 在 RFC 治理设计上（#8692 上 15 条评论）体现了更结构化的流程，尽管活动量较低。

---

## 4. 共同技术关注点

### 跨项目需求分析

| 关注领域 | 涉及项目 | 具体需求 |
|------------|----------|------------|
| **无值守运行安全** | OpenClaw、ZeroClaw | ApprovalManager 绕过修复；cron/daemon/SOP 运行隔离 |
| **多渠道可靠性** | OpenClaw、Hermes Agent、ZeroClaw | 消息投递保证；富文本消息处理；Webhook 集成 |
| **资源管理** | OpenClaw、ZeroClaw | 内存泄漏检测；捕获回收；CPU 绑定防护 |
| **配置持久化** | OpenClaw、ZeroClaw | 并发写入安全；刷新竞态条件；迁移可靠性 |
| **供应商路由** | ZeroClaw、Hermes Agent | 多供应商回退；成本优化；类型化供应商族 |
| **定时任务系统** | QwenPaw、ZeroClaw、OpenClaw | Cron 抖动窗口；执行可靠性；任务追踪准确性 |

### 涌现模式

**安全加固**是最突出的共同关注点——三个项目（OpenClaw、ZeroClaw、Hermes Agent）都在积极修复 cron/daemon/SOP 场景下的批准绕过漏洞。这是 **Agentic 架构的基础性缺陷**，整个行业正在共同发现。**平台特定缺陷**（Windows 控制台窗口、WSL 资源泄漏、macOS Desktop 奇怪问题）在多个项目中出现，说明跨平台 Agent 部署的复杂性。**测试基础设施可靠性**在 OpenClaw 和 ZeroClaw 中被明确优先处理，表明这些项目已达到足够复杂度，需要自动化防 flake 机制。

---

## 5. 差异化分析

### 功能重点

| 项目 | 主要差异化 | 目标用户 |
|---------|------------------------|-------------|
| **OpenClaw** | 四平台以上的多渠道消息中枢 | 管理多个沟通渠道的高级用户 |
| **ZeroClaw** | OIDC/RPC 安全架构与供应商路由 | 需要精细化访问控制的企业部署 |
| **Hermes Agent** | 桌面优先 UX，统一设置控制台 | 终端用户效率；非技术用户 |
| **IronClaw** | 区块链/DeFi 集成（NEARA Launchpad） | 加密货币交易者和 DeFi 高级用户 |
| **QwenPaw** | Cron/脚本任务执行；国际化完备 | 构建工作流自动化的开发者 |

### 技术架构

**OpenClaw** 和 **ZeroClaw** 正在追求**对立的架构演进方向**：OpenClaw 在单体网关中增加复杂性（更多插件、捕获、状态），而 ZeroClaw 正在拆分为 RPC 微服务（v0.9.0 网关对齐）。Hermes Agent 保持**客户端优先架构**，桌面应用是主要入口。QwenPaw 运行在**基础设施层**（cron、控制台、i18n），不涉及消费级渠道。

### 目标用户细分

生态分为**三个层级**：(1) 企业/团队编排（OpenClaw、ZeroClaw），(2) 个人效率（Hermes Agent），(3) 垂直领域专用（IronClaw 面向 DeFi，QwenPaw 面向开发者）。OpenClaw 的日均 500 条更新表明它已吸引最大的开发者/运维人员受众。

---

## 6. 社区动能与成熟度

### 活动层级

| 层级 | 项目 | 速度 | 成熟度信号 |
|------|----------|----------|-----------------|
| **快速迭代** | OpenClaw | 500 更新/24h | 高周转；很可能处于 1.0 前；目标快速移动 |
| **活跃开发** | ZeroClaw、Hermes Agent | 50 更新/24h | 结构化发布；v0.9.x 路线图可见 |
| **维护态** | QwenPaw | 3 更新/24h | 功能完备；Bugfix 模式 |
| **停滞** | IronClaw | 1 更新/24h | 路线图不明；参与度低 |

### 稳定性评估

**OpenClaw** 表现出快速增长期的特征：9+ P0 缺陷、回归投诉（2026.9.x 升级失败）、Issue 数量高企。这表明项目处于**超增长状态**——优先功能而非打磨。**ZeroClaw** 展现出更成熟的姿态，其 RFC 流程（#11074、#11053）和安全优先方法（OIDC principals）表明处于**深思熟虑的架构阶段**。Hermes Agent 的 PR 合并率（50 条更新中 7 条已闭合）和会话 cookie 修复表明处于**稳态打磨期**。

---

## 7. AI Agent 开发者的趋势信号

### 提炼的行业趋势

1. **多渠道成为标配**：每个活跃项目都在投资 Telegram、WhatsApp 或类似集成。进入这个领域的开发者应尽早优先考虑渠道 SDK 抽象。

2. **无值守 Agent 的安全**：三个独立团队（OpenClaw、ZeroClaw、Hermes Agent）正在修复 cron/daemon/SOP 场景下的批准绕过。这是 **Agentic 架构的基础性缺陷**，整个行业正在共同发现。

3. **RPC 网关拆分**：ZeroClaw 的 v0.9.0 重构表明单体网关模式已达极限。规模化团队（10+ Agent、100+ 每日运行）应预期网关拆分。

4. **资源隔离成为特性**：内存泄漏（OpenClaw）、捕获增长（ZeroClaw）、僵尸任务条目（QwenPaw）表明随着 Agent 运行时间变长，**资源治理**正成为主要工程关注点。

5. **供应商多元化**：ZeroClaw 的 "Cheaper Inference" 供应商和 MiniMax TTS/STT 添加标志着向**成本优化的多供应商架构**转变——不再假设单一模型/供应商。

6. **桌面端作为一等公民**：Hermes Agent 的 readiness 截止日期临近和会话 cookie 修复表明 **GUI 支持的 Agent 体验不再是次要需求**。

### 决策者价值洞察

- **对于构建多 Agent 系统的团队**：从第一天起就优先考虑批准执行和资源隔离——这些缺陷在 5 个独立实现中一致出现。
- **对于平台团队**：跨渠道集成工作量巨大；将 30-40% 的路线图预算分配给跨平台可靠性。
- **对于投资者/评估者**：OpenClaw 展示最高社区牵引力；ZeroClaw 展示最严格的安全姿态；Hermes Agent 拥有最清晰的产品故事。每个都代表一种有效的架构理念。

---

*跨项目综合分析 — 2026-09-27*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English Hermes Agent project digest into Chinese. Let me carefully follow all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, preserving all formatting and technical elements:

## Today's Overview
-> 今日概况

## Project Progress
-> 项目进展

## Community Hot Topics
-> 社区热点

## Bugs & Stability
-> Bug 与稳定性

## Feature Requests & Roadmap Signals
-> 功能需求与路线图信号

## User Feedback Summary
-> 用户反馈摘要

## Backlog Watch
-> 待办事项关注

Now let me go through each section and translate it naturally in Chinese technical register.</think>

# Hermes Agent 项目简报 — 2026-09-27

## 今日概况

Hermes Agent 今日工程活动频繁，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目状态稳定，4 个 issue 已关闭，7 个 PR 已合并/关闭。多项重要工作正在进行中：Desktop 应用（就绪超时、会话 Cookie）、CLI/包管理器（工作区同步、Token 格式化）、API 服务器（推理流、事件循环修复）以及 cron/kanban 改进。今日未发布新版本。

---

## 项目进展

**已合并/关闭的 PR（7 个）：**

| PR | 作者 | 摘要 |
|----|------|------|
| [#124615](https://github.com/NousResearch/hermes-agent/pull/124615) | hermes-seaeye[bot] | `fmt(js)`: `npm run fix` 自动修复 |
| [#123008](https://github.com/NousResearch/hermes-agent/pull/123008) | austinpickett | fix(desktop): 内存中镜像远程会话 Cookie，401 时重试一次 |

**关键进展：**

- **压缩摘要器重构** ([#124595](https://github.com/NousResearch/hermes-agent/pull/124595))：现将指令作为 `system` 消息发送，将轮次作为 `user`（从 OpenHands SDK 移植）
- **CLI Token 格式化修复** ([#124596](https://github.com/NousResearch/hermes-agent/pull/124596))：不再显示 `1000.0K` — 正确四舍五入为 `1.0M`
- **Desktop 后端就绪时间延长** ([#122995](https://github.com/NousResearch/hermes-agent/pull/122995))：从 45 秒延长至 180 秒，以适配较慢的硬件
- **Cron 环境变量展开** ([#107164](https://github.com/NousResearch/hermes-agent/pull/107164))：每个作业的 model/provider 现支持 `${VAR}` 占位符
- **Kanban 改进**：提升功能现接受待分类卡片 ([#124603](https://github.com/NousResearch/hermes-agent/pull/124603))，计划状态修复 ([#124616](https://github.com/NousResearch/hermes-agent/pull/124616))，暂存区 containment guard 加强 ([#124604](https://github.com/NousResearch/hermes-agent/pull/124604))
- **API 服务器**：推理结果在 `/v1/runs` 事件中流式输出 ([#124605](https://github.com/NousResearch/hermes-agent/pull/124605))，agent 构建在事件循环之上以支持取消 ([#124606](https://github.com/NousResearch/hermes-agent/pull/124606))

---

## 社区热点

**最活跃的 Issue（按评论数排序）：**

1. **#122609** — [技能索引过期或降级](https://github.com/NousResearch/hermes-agent/issues/122609) — 9 条评论  
   *自动化新鲜度探测失败；索引已有 28.1 小时（限制 26 小时）。Skills Hub 依赖 cron 工作流重建的 `/docs/api/skills-index.json`。*

2. **#101318** — [macOS Desktop：底部编辑器拖拽太容易触发](https://github.com/NousResearch/hermes-agent/issues/101318) — 6 条评论（已关闭）  
   *用户报告意外拖出了聊天编辑器；请求添加禁用选项。*

3. **#63485** — [Telegram：顶级入站 rich_message 更新被静默忽略](https://github.com/NousResearch/hermes-agent/issues/63485) — 6 条评论（开启）  
   *Telegram Bot API 10.1 rich message 未被 Hermes 网关处理。*

4. **#61457** — [Desktop：远程网关会话 Cookie 在基础认证登录后永不持久化](https://github.com/NousResearch/hermes-agent/issues/61457) — 5 条评论（已关闭）  
   *OAuth 风格登录瞬间成功，但后续 REST 调用导致会话失效——401 无 Cookie 循环。*

5. **#62311** — [Desktop 更新器在 Windows 上因"venv shim 仍被锁定"而中止](https://github.com/NousResearch/hermes-agent/issues/62311) — 5 条评论（已关闭）  
   *当 gateway/dashboard 进程持有 venv 时更新器失败。*

**分析：** 社区高度关注 **Desktop 应用稳定性**（macOS 拖拽、Windows venv 锁定、会话持久化）和 **集成可靠性**（Telegram 网关、技能索引新鲜度）。技能索引问题 (#122609) 有 9 条评论，表明运维监控是痛点——用户依赖自动化工作流。

---

## Bug 与稳定性

**报告的严重/高优先级 Bug：**

| Issue | 严重级别 | 组件 | 状态 | 修复 PR |
|-------|----------|------|------|---------|
| [#123682](https://github.com/NousResearch/hermes-agent/issues/123682) | P0 | CLI/PM | 开启 | — |
| [#101880](https://github.com/NousResearch/hermes-agent/issues/101880) | P1 | Desktop | 开启 | — |
| [#124029](https://github.com/NousResearch/hermes-agent/issues/124029) | P2 | CLI/Gateway | 开启 | — |
| [#122425](https://github.com/NousResearch/hermes-agent/issues/122425) | P2 | CLI/PM | 开启 | — |
| [#122395](https://github.com/NousResearch/hermes-agent/issues/122395) | P2 | CLI/Cron/MCP | 开启 | — |

**值得关注的 Bug：**

- **#123682** (P0)：PM 在 musl Linux（Void/Alpine）上安装仅支持 glibc 的 Python/uv → 段错误，更新后 Hermes 不可用
- **#101880** (P1)：Desktop 在 macOS PrintCore 中打印 Google Doc 时崩溃（SIGSEGV）
- **#122425** (P2)：托管环境工作区副本在更新后漂移，缺少安装元数据（`vunknown`），`pm doctor` 崩溃
- **#124551** (P2)：Terminal 工具硬线规则误报 — 仅数据 heredoc 内容错误触发关闭规则
- **#124523** (P2)：`hermes profile export` 在每个导出的文件内部删除文本，导致脚本和配置损坏

**已修复（PR 已合并）：**
- Desktop 会话 Cookie 重试逻辑：[#123008](https://github.com/NousResearch/hermes-agent/pull/123008)
- Desktop 后端就绪截止时间：[#122995](https://github.com/NousResearch/hermes-agent/pull/122995)

---

## 功能需求与路线图信号

**活跃的功能需求（按参与度排序）：**

| Issue | 功能 | 组件 | 优先级 |
|-------|------|------|--------|
| [#52442](https://github.com/NousResearch/hermes-agent/issues/52442) | 在编辑器下拉菜单和编辑模型对话框中显示原始模型 ID | Desktop | P3 |
| [#105397](https://github.com/NousResearch/hermes-agent/issues/105397) | 将原生审查绑定到不可变候选项，强制检查工具 | Agent/Delegate | P3 |
| [#26549](https://github.com/NousResearch/hermes-agent/issues/26549) | Cron 调度支持每个作业的时区 | Cron | P3 |
| [#124291](https://github.com/NousResearch/hermes-agent/issues/124291) | 委托 — 子作用域的迭代预算检查点通知 | Agent | P3 |

**近期可能优先级：** 压缩修复 (#124595)、cron 改进 (#107164, #124607) 和 API 服务器增强 (#124605, #124606) 表明团队正在优先处理 **agent 可靠性**、**调度健壮性** 和 **API 流式传输对齐**。Desktop 改进（就绪超时、会话 Cookie）持续进行中，GUI 体验不断完善。

---

## 用户反馈摘要

**痛点：**

1. **macOS Desktop 交互**：底部编辑器拖拽太容易触发；用户请求添加禁用选项（已通过 #101318 关闭）
2. **Windows 稳定性**：当其他进程持有 venv 时更新器失败；install.ps1 在受限网络环境下缺少网络回退
3. **跨平台安装问题**：`.DS_Store` 在 macOS 上导致 pm 工具安装失败；musl Linux（Void/Alpine）更新后段错误（因 glibc 专用 Python）
4. **Telegram 集成**：Rich message 更新被静默忽略；缺少每聊天速率限额导致被封禁风险

**满意度信号：**

- Desktop 会话 Cookie 重试逻辑 ([#123008](https://github.com/NousResearch/hermes-agent/pull/123008)) 解决了一个已知问题
- 后端就绪截止时间从 45 秒延长至 180 秒解决了较慢硬件上的冷启动不稳定

---

## 待办事项关注

**长期未答的重要 Issue：**

| Issue | 时长 | 优先级 | 描述 |
|-------|------|--------|------|
| [#81451](https://github.com/NousResearch/hermes-agent/issues/81451) | ~2 个月 | P2 | Workdir cron 可能通过进程全局 TERMINAL_CWD 污染并发网关会话 |
| [#107612](https://github.com/NousResearch/hermes-agent/issues/107612) | ~17 天 | P2 | Telegram 出站路径缺少每聊天共享速率限额 — 洪水封禁风险 |
| [#102311](https://github.com/NousResearch/hermes-agent/issues/102311) | ~24 天 | P2 | 工具参数修复以错误顺序追加闭合符，破坏可修复参数 |
| [#102339](https://github.com/NousResearch/hermes-agent/issues/102339) | ~24 天 | P2 | 压缩硬上限竞态可绕过配置的备用路由 |

**这些问题涉及安全边界、消息传递可靠性和数据完整性 — 建议维护者关注。**

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest to Simplified Chinese, following the specific rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not literal word-for-word rendering

Let me translate this carefully while following all the rules.

Title: "IronClaw Project Digest — 2026-09-27" → "IronClaw 项目摘要 — 2026-09-27"

Let me go through section by section:

## 1. Today's Overview

IronClaw shows minimal activity on September 27, 2026, with only one issue and one pull request updated in the last 24 hours. The project remains in a maintenance state with no new releases. The open issue represents a feature request for blockchain integration (NEARA launchpad tools), while the open PR is an automated infrastructure refresh of the codebase knowledge graph. Overall, the project appears stable but with low recent engagement.

→

## 1. 今日概览

2026年9月27日，IronClaw 活跃度较低，过去24小时内仅有一个 issue 和一个 pull request 更新。项目处于维护状态，暂未发布新版本。开放的 issue 是一项区块链集成功能请求（NEARA launchpad 工具），而开放的 PR 则是代码库知识图的自动化基础设施更新。总体而言，项目运行稳定，但近期活跃度偏低。


---

I'll analyze the repository activity, focusing on the key metrics from the last day. The project shows minimal changes, with one pull request open but not yet merged. No releases were made, indicating a quiet period in development activity. The open PR relates to an automated knowledge graph refresh, suggesting routine maintenance work is underway.

The single open issue requests blockchain integration for a NEARA hosted-MCP extension, highlighting potential feature expansion in the cryptocurrency launchpad tools space. This indicates ongoing interest in enhancing platform capabilities.

The assessment suggests routine infrastructure updates are pending review, with automated processes needing maintainer attention to merge changes smoothly.

A new feature request for NEARA hosted-MCP extension represents a medium-priority blockchain integration opportunity. While currently showing low engagement, the specific nature of the request could inform future development strategies if additional user interest emerges.

The project lacks direct bug reports, with one external user proposing a feature related to NEAR launchpad interactions. This single data point provides limited but targeted insight into potential user needs around decentralized finance capabilities.

Prioritization focuses on routine infrastructure maintenance, recommending prompt review and merging of knowledge graph refresh tasks. Initial maintainer engagement with the new feature request remains critical for understanding potential development directions.

The digest maintains its original Markdown structure precisely, with all links, identifiers, and references preserved exactly as originally documented.</think>

# IronClaw 项目摘要 — 2026-09-27

## 1. 今日概览

2026年9月27日，IronClaw 活跃度较低，过去24小时内仅有一个 issue 和一个 pull request 更新。项目处于维护状态，暂未发布新版本。开放的 issue 是一项区块链集成功能请求（NEARA launchpad 工具），而开放的 PR 则是代码库知识图的自动化基础设施更新。总体而言，项目运行稳定，但近期活跃度偏低。

---

## 2. 发布动态

2026-09-27 无新版本发布。

---

## 3. 项目进展

| 项目 | 类型 | 状态 | 详情 |
|------|------|------|---------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | PR | OPEN | **chore(agents): refresh codebase knowledge graph** — 自动化夜间工作流刷新，提交默认分支的 codebase-memory bootstrap 快照。规模：XS，风险：low。过去24小时无合并动态。 |

*评估*：今日无 PR 被合并或关闭。代码库刷新待审查中。

---

## 4. 社区热点

| 项目 | 类型 | 评论 | 点赞 | 摘要 |
|------|------|----------|-----------|---------|
| [#8112](https://github.com/nearai/ironclaw/issues/8112) | Issue | 0 | 0 | **功能：NEARA hosted-MCP 扩展（无密钥 NEAR 代币发射台工具）** — 请求让 IronClaw 代理能够与 NEAR 代币发射台交互，涵盖新币上市、报价、发射及交易等功能。由 iwaterheater 于 2026-09-26 创建。 |

*分析*：唯一的活跃 issue 请求集成 NEAR 区块链发射台功能。这表明用户对 DeFi/链上代理能力有需求。目前零评论零点赞，尚未引发社区讨论，但反映出用户希望 IronClaw 代理在 NEAR 生态中运行的明确需求。

---

## 5. 缺陷与稳定性

2026-09-27 无缺陷报告或稳定性问题。

---

## 6. 功能需求与路线图信号

| Issue | 需求 | 相关性 |
|-------|---------|-----------|
| [#8112](https://github.com/nearai/ironclaw/issues/8112) | NEARA hosted-MCP 扩展，支持 NEAR 代币发射台工具 | **中等** — 代表一个具体且狭窄的区块链集成功能请求。"无密钥"特性表明对简化用户体验的关注。鉴于需求的具体性，如果与项目规划相符，未来版本可能会予以考虑。 |

*预测*：鉴于当前互动指标偏低，近期版本不太可能纳入，但若更多用户表达对 DeFi/链上集成的兴趣，可能影响长期路线图方向。

---

## 7. 用户反馈摘要

基于可用数据，直接用户反馈有限：

- **#8112**：一位外部用户（iwaterheater）明确请求一项功能，使代理能够与 NEAR 发射台进行交互。这反映了一个真实用例：用户希望 AI 代理能够自动化 NEAR 协议上的 DeFi 任务。
- 过去24小时内无关于现有功能、痛点或满意度的反馈。

---

## 8. 待办事项关注

| 项目 | 存续时间 | 状态 | 备注 |
|------|-----|--------|-------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | 约60天（2026-08-29 开启） | OPEN | 自动化 CI 刷新 PR — 规模小、风险低，但待维护者审查。应常规合并以保持知识图最新。 |
| [#8112](https://github.com/nearai/ironclaw/issues/8112) | 1天 | OPEN | 新功能请求 — 暂未收到维护者响应。 |

*建议*：优先审查并合并 #7988（基础设施维护）。功能请求 #8112 应收到维护者的初步响应，以确认收到请求并评估优先级。

---

**数据来源**：GitHub API（nearai/ironclaw）— 查询时间 2026-09-27。均为 UTC 时间。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English project digest into Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

# QwenPaw Project Digest — 2026-09-27
→ # QwenPaw 项目动态 — 2026年9月27日

## 1. Today's Overview
→ ## 1. 今日概览

QwenPaw (by agentscope-ai) shows moderate activity on September 27, 2026. The project has **3 open/active issues** and **3 open pull requests** updated in the last 24 hours, with **1 issue closed**. No new releases were published. The recent activity mix reflects typical maintenance work: one bug fix, two small improvements, and one long-standing feature request gaining traction. Overall project health appears stable, with no critical stability issues reported.
→ 
2026年9月27日，QwenPaw（由 agentscope-ai 开发）呈现中等活跃度。过去24小时内，项目有 **3 个开放/活跃 Issue** 和 **3 个开放 Pull Request**，其中 **1 个 Issue 已关闭**。未发布新版本。近期活动组合反映了典型的维护工作：1个 bug 修复、2个小改进，以及1个长期功能请求正在获得关注。总体项目健康状态稳定，无重大稳定性问题报告。

---

## 2. Releases

**No new releases** were published in the last 24 hours.
→ 
## 2. 版本发布

过去24小时内**未发布新版本**。

---

## 3. Project Progress

| PR | Title | Status | Author |
|----|-------|--------|--------|
| [#7993](https://github.com/agentscope-ai/QwenPaw/pull/7993) | fix(i18n): add two missing error strings used by unguarded call sites | OPEN | Bruce-Yii |
| [#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992) | fix(wecom): stop treating prose containing a pipe as a markdown table | OPEN | Bruce-Yii |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): unify settings UX and smooth conversation transitions | OPEN | ray

Two open pull requests address internationalization and WeChat Work integration. The i18n fix adds missing error strings, while the WeChat Work improvement prevents misinterpreting prose with pipe characters as markdown tables. The console enhancement focuses on standardizing settings interface and improving conversation flow transitions.

| PR | 标题 | 状态 | 作者 |
|----|-----|------|------|
| [#7993](https://github.com/agentscope-ai/QwenPaw/pull/7993) | fix(i18n): 为未保护的调用点添加两个缺失的错误字符串 | OPEN | Bruce-Yii |
| [#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992) | fix(wecom): 停止将包含竖线的文本误认为 markdown 表格 | OPEN | Bruce-Yii |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): 统一设置 UX 并优化对话切换体验 | OPEN | rayrayrayraykk |

Three PRs are currently open. PR #7956 represents a meaningful UX enhancement that consolidates settings and addresses UI transition issues. The other two PRs address minor fixes for i18n and WeChat Work message formatting. No PRs were merged recently.

| Issue/PR | Title | Comments | Activity |
|----------|-------|----------|----------|
| [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | [Feature] Cron: Support direct script/shell execution task type | 4 | 讨论最多，自2026年6月开放 |
| [#7804](https://github.com/agentscope-ai/QwenPaw/issues/7804) | [enhancement] management | 2 | 2026年9月26日关闭 |

Issue #4963 stands out as the most active, reflecting strong user demand for Cron tasks that can execute shell scripts directly—currently only text and agent task types are supported. This represents a valuable workflow automation feature that has remained open for nearly 4 months. Issue #7804 addressed a broad enhancement spanning multiple components.

| Issue/PR | 标题 | 评论数 | 活跃度 |
|----------|-----|--------|--------|
| [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | [功能] Cron：支持直接执行脚本/Shell 任务类型 | 4 | 讨论最多，自2026年6月开放 |
| [#7804](https://github.com/agentscope-ai/QwenPaw/issues/7804) | [增强] 管理功能 | 2 | 2026年9月26日关闭 |

The most active issue (#4963) reveals clear user demand for Cron task capabilities that go beyond text prompts and AI agent calls to enable direct shell and script execution. This represents a valuable workflow automation request that's remained open for nearly 4 months. Issue #7804 has been resolved, indicating responsiveness to cross-component improvement needs.

A medium-severity bug was identified on 2026-09-26 where the dashboard displays "2 running tasks" while the chat list API only shows 1 chat with status="running". This creates a discrepancy between the aggregate counter from task_tracker.get_global_status() and the per-chat counter from tracker.get_status(chat_id), which could confuse users relying on accurate task monitoring. No fix PR exists yet and requires maintainer attention. The Cron feature request (#4963) appears high-value given its 4-month shelf life and clear use case around scheduled backups and health checks—if prioritized, it could land in a near-term minor release as a straightforward enhancement. Pain points include zombie task entries where users depend on accurate running task counts for monitoring, missing i18n strings causing end-users to see raw translation keys instead of localized error messages, and markdown table false positives affecting WeCom channel users. The UX unification effort in PR #7956 addresses long-standing design consistency concerns, and the management enhancement in Issue #7804 was resolved, demonstrating responsiveness to cross-component feedback. Issue #4963 has remained open for approximately 4 months despite high user demand, affecting workflow automation capabilities, while Issue #7991 needs attention for its data consistency problem that could undermine user trust in the dashboard. The feature request appears well-formed and feasible for near-term implementation.</think>

# QwenPaw 项目动态 — 2026年9月27日

## 1. 今日概览

2026年9月27日，QwenPaw（由 agentscope-ai 开发）呈现中等活跃度。过去24小时内，项目有 **3 个开放/活跃 Issue** 和 **3 个开放 Pull Request**，其中 **1 个 Issue 已关闭**。未发布新版本。近期活动组合反映了典型的维护工作：1个 bug 修复、2个小改进，以及1个长期功能请求正在获得关注。总体项目健康状态稳定，无重大稳定性问题报告。

---

## 2. 版本发布

过去24小时内**未发布新版本**。

---

## 3. 项目进展

| PR | 标题 | 状态 | 作者 |
|----|-----|------|------|
| [#7993](https://github.com/agentscope-ai/QwenPaw/pull/7993) | fix(i18n): 为未保护的调用点添加两个缺失的错误字符串 | OPEN | Bruce-Yii |
| [#7992](https://github.com/agentscope-ai/QwenPaw/pull/7992) | fix(wecom): 停止将包含竖线的文本误认为 markdown 表格 | OPEN | Bruce-Yii |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): 统一设置 UX 并优化对话切换体验 | OPEN | rayrayrayraykk |

**概览：** 三个 PR 处于开放状态。PR #7956 是一项实质性的 UX 改进，统一了设置设计语言并修复了 UI 过渡问题。其他两个 PR（#7992、#7993）修复了 i18n 和 WeCom 频道格式化中的局部 bug。过去24小时内没有 PR 被合并。

---

## 4. 社区热点话题

| Issue/PR | 标题 | 评论数 | 活跃度 |
|----------|-----|--------|--------|
| [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | [功能] Cron：支持直接执行脚本/Shell 任务类型 | 4 | 讨论最多，自2026年6月开放 |
| [#7804](https://github.com/agentscope-ai/QwenPaw/issues/7804) | [增强] 管理功能 | 2 | 2026年9月26日关闭 |

**分析：** Issue #4963 是最活跃的讨论，反映了明确的用户需求：扩展 Cron 任务能力以支持直接执行 shell/脚本，而非仅支持文本提示和 AI 代理调用。这是一个**高价值的自动化工作流请求**，已开放近4个月，表明存在潜在的优先处理机会。已关闭的 Issue #7804 似乎解决了一个横跨多个组件（后端、前端、频道、CLI、文档）的广泛增强请求。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 描述 | 修复 PR |
|-------|----------|------|---------|
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | **中等** | TaskTracker `_runs` 僵尸条目导致 `running_task_count` 膨胀，与 `/api/chats` 数据不一致 | 暂无 |

**分析：** 2026年9月26日报告了一个中等严重程度的 bug。仪表板错误显示"2个运行中任务"，而聊天列表 API 仅返回1个状态为 "running" 的聊天。这表明聚合计数器（`task_tracker.get_global_status()`）与单聊计数器（`tracker.get_status(chat_id)`）之间存在差异。虽然不是崩溃，但这种不一致可能会混淆依赖任务状态监控的用户。目前尚无修复 PR——需要维护者关注。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 信号 |
|-------|------|------|
| [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | **Cron：支持直接执行脚本/Shell 任务类型** | 用户需求强烈，希望在无 AI 开销的情况下运行定时 shell 命令（如备份、健康检查）。目前仅支持 `text` 和 `agent` 任务类型。若获优先处理，可作为简单的增强功能在近版本发布。 |

**预测：** 鉴于近4个月的开放时间和明确的用例（定时备份、健康检查、cron 作业），该功能可能会被纳入近期的次要版本。实现看起来很直接（为 shell 执行添加新的 Cron 任务类型）。

---

## 7. 用户反馈总结

- **痛点：**
  - **僵尸任务条目**（Issue #7991）：用户依赖准确的运行任务计数进行监控；仪表板与 API 之间的差异造成困惑。
  - **缺失的 i18n 字符串**（PR #7993）：最终用户看到原始翻译键而非本地化错误消息——非英语用户体验不佳。
  - **Markdown 表格误判**（PR #7992）：WeCom 频道用户报告包含竖线的文本被错误格式化为表格。

- **满意度信号：**
  - UX 统一工作（PR #7956）解决了长期以来的设计一致性投诉。
  - Issue #7804（管理增强）已解决，表明对跨组件改进请求的响应能力。

---

## 8. 待办事项关注

| Issue | 存在时间 | 状态 | 为何重要 |
|-------|----------|------|----------|
| [#4963](https://github.com/agentscope-ai/QwenPaw/issues/4963) | 约4个月 | OPEN | 高需求功能；影响自动化工作流能力 |
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | 1天 | OPEN | 数据一致性问题；影响监控/仪表板信任度 |

**建议：** Issue #4963 是一个成熟的、高价值的请求，已历经多个发布周期。维护者应优先考虑实现或传达路线图时间表以管理社区预期。Issue #7991 需要迅速修复，以防止用户困惑加剧。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the ZeroClaw Project Digest into Simplified Chinese, following the specific rules provided. Let me carefully translate while:

1. Keeping the Markdown structure exactly (headings, tables, lists, etc.)
2. Preserving all URLs, numbers, dates, issue/PR references
3. Keeping technical terms and project names in original form
4. Using natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through each section:

**Title**: ZeroClaw Project Digest — 2026-09-27
→ ZeroClaw 项目简报 — 2026-09-27

**1. Today's Overview** → 今日概览

**2. Releases** → 版本发布

**3. Project Progress** → 项目进展

**4. Community Hot Topics** → 社区热点

**5. Bugs & Stability** → Bug 与稳定性

**6. Feature Requests & Roadmap Signals** → 功能需求与路线图信号

**7. User Feedback Summary** → 用户反馈摘要

**8. Backlog Watch** → 待办关注

Now let me translate the content section by section, making sure to:
- Use natural Chinese technical register
- Keep all URLs, numbers, issue numbers
- Preserve markdown formatting</think>

# ZeroClaw 项目简报 — 2026-09-27

## 1. 今日概览

ZeroClaw 今日 **活跃度极高**，共更新了 50 个 issue 和 50 个 pull request。项目正在推进 v0.9.0 gateway-split 计划，多个来自 JordanTheJet 的 PR 在持续堆叠，以实现 RPC  parity。安全仍是焦点——最近的 OIDC principals 合并 (#11082) 以及正在进行的 unattended  agents 审批执行工作 (#10968) 表明项目对安全架构高度重视。今日未发布新版本，但代码库正在积极演进，已合并/关闭 7 个 PR，仍有 43 个 open。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 类型 |
|----|------|------|
| [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) | feat(security): OIDC principals, enrollment and the gateway auth surface | 安全, XL |
| [#11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133) | fix(rpc): revalidate forwarded environment on session reuse | 安全, L |
| [#11189](https://github.com/zeroclaw-labs/zeroclaw/pull/11189) | fix(parser): preserve browser and search tool semantics | bugfix, M |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/pull/10793) | (Bug): three Windows-only test failures on advisory job | bug, 已关闭 |

### 功能推进中

- **RPC Gateway Parity**: 多个堆叠 PR (#11186, #11182, #11176, #11174, #11172, #11171, #11167, #11187) 正在推进 v0.9.0 的 core-to-RPC 迁移
- **新 CLI 工具**: #11076 新增 `agy_cli` 用于 Antigravity CLI 集成（Google 替代 Gemini CLI 的产品）
- **会话安全**: #9746 引入会话工具和 discord_search 的 per-agent 所有权作用域

---

## 4. 社区热点

### 按评论数排名的最活跃 Issue

| Issue | 标题 | 评论数 | 优先级 |
|-------|------|--------|--------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [追踪]: RFC 及设计问题的维护者决策队列 | 15 | P2 |
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | [功能]: WhatsApp Web: 实现 create_room 和 invite_user 支持群组创建 | 5 | P2 |
| [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | [Bug]: WhatsApp Web 在队列自动 TTS 时忽略 suppress_voice | 5 | P2 |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | [Bug]: config flush 可能覆盖并发写入 | 5 | P1 |

### 分析

**维护者决策队列** (#8692) 表明社区希望获得更清晰的 RFC 治理——追踪帖上有 15 条评论，说明设计不确定性已引发不满。**WhatsApp Web 频道** 讨论热度很高，前十名中有三个相关 issue，反映出该集成的使用率很高。

---

## 5. Bug 与稳定性

### 严重及高危 Bug

| Issue | 严重程度 | 状态 | 修复 PR? |
|-------|----------|------|----------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) — Unattended agent turns (cron, heartbeat, headless SOP, spawn_subagent) 运行时不经过 ApprovalManager，导致 risk-profile 工具审批被静默跳过 | **S0** / P1 | Open | 无 |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) — Git --attr-source 可能隐藏变异子命令，导致审批分类失效 | **S0** / P1 | Closed | 后续跟进 |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) — daemon 从未注册 channel-map factory，导致 webhook、cron 和 SOP turns 没有 channel 可用 | **高** / P1 | Open | 无 |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) — config flush 可能覆盖并发写入 | **高** / P1 | Open | 无 |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) — bounded child loop tools 的 fail-close 审批执行 | **高** / P1 | 进行中 | #10643 |
| [#10991](https://github.com/zeroclaw-labs/zeroclaw/issues/10991) — Windows 计划任务在登录时打开控制台窗口 | **高** / P1 | Open | 无 |

### 值得注意的修复

- [#11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133): 在会话复用时重新验证转发环境——修复了一个安全漏洞，会话可能在权限变更后保留陈旧的环境变量。

---

## 6. 功能需求与路线图信号

### 正在推进的功能

| Issue | 概要 | 状态 |
|-------|------|------|
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | WhatsApp Web 群组创建：通过 create_room 和 invite_user 实现 | 进行中 |
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) | 添加 Cheaper Inference 作为类型化 OpenAI 兼容提供商 | 进行中 |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | 恢复主动式 token-budget 上下文压缩 | 进行中 |
| [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) | 为 cron/heartbeat 调度添加 jitter 窗口 | 已接受 |
| [#10933](https://github.com/zeroclaw-labs/zeroclaw/issues/10933) | 添加 MiniMax TTS 和 STT 提供商系列 | 已接受 |

### 正在讨论的 RFC

| Issue | 标题 |
|-------|------|
| [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | RFC: search_routes — 基于 hint 的 web_search_tool 提供商路由 |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC: 知识图谱作为一等公民的 agent 记忆层 |

**信号**: **提供商路由** 和 **知识图谱作为记忆层** 的 RFC 活动表明 v0.9.x 将强调多提供商架构和改进的记忆语义。

---

## 7. 用户反馈摘要

### 痛点识别

1. **Unattended 执行的安全漏洞**: 多个 issue (#10968, #10643, #10966) 指出 cron/daemon/SOP 运行会绕过审批执行——依赖风险配置文件的用户感到不安。

2. **WhatsApp 频道可靠性**: 三个独立 bug（force_voice 路由、TTS 抑制、mentions）表明 WhatsApp Web 集成在生产使用前需要加固。

3. **配置持久性**: 影响并发写入的 config flush 竞态条件 (#9284) 是多实例部署的真实隐患。

4. **Windows 体验**: 登录时出现控制台窗口 (#10991) 是打磨问题，但影响用户对成熟度的感知。

### 积极信号

- OIDC 认证已落地 (#11082)——企业用户对此有需求
- RPC parity 工作展示了清晰的 v0.9.0 方向
- 多个提供商加入（Cheaper Inference、MiniMax TTS/STT）扩展了生态

---

## 8. 待办关注

### 长期.pending的重要 Issue

| Issue | 存在时间 | 优先级 | 关注点 |
|-------|----------|--------|--------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 约3个月 | P2 | RFC/设计决策队列停滞——维护者需要分类处理 |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | 约2周 | P1 | 上下文压缩回归——影响长对话使用场景 |
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 约1周 | P1 | 安全：unattended agents 无审批执行 |

### 需要维护者关注的 PR

| PR | 存在时间 | 状态 | 阻碍因素 |
|----|----------|------|----------|
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | 约2个月 | Open | needs-author-action |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 约1个月 | Open | needs-author-action, XL size |
| [#11039](https://github.com/zeroclaw-labs/zeroclaw/pull/11039) | 约1周 | Open | Docs 示例，低风险 |

---

*基于 ZeroClaw GitHub 数据生成 — 2026-09-27*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*