# OpenClaw 生态日报 2026-09-26

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-26 00:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this project digest from English to Chinese. Let me go through and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code references, issue/PR numbers as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## Today's Overview
今天的概览

OpenClaw maintains extremely high activity with **500 issues** and **500 PRs** updated in the last 24 hours. No new releases were published, though a **2026.9.7 Fixes Tracker** (#157531) is active. The project is managing significant stability concerns: multiple critical P0 bugs are reported around versions 2026.9.5–2026.9.7, including memory leaks, CPU burn loops, and update failures. Community engagement remains intense, with several high-comment threads indicating active troubleshooting and feature discussion.

OpenClaw 保持着极高的活跃度，过去 24 小时内更新了 **500 个 issue** 和 **500 个 PR**。虽然未发布新版本，但 **2026.9.7 缺陷修复追踪** (#157531) 已在运行中。项目正在处理多个稳定性问题：2026.9.5 至 2026.9.7 版本报告了多个 P0 级别的严重 bug，包括内存泄漏、CPU 跑满循环和更新失败。社区参与度依然很高，多个高评论量的帖子表明用户正在积极排查问题和讨论功能。

---

## Releases

**没有新版本** 在过去 24 小时内发布。

一个 **2026.9.7 缺陷修复追踪** (#157531) 正在进行中，表明团队正在积极开发下一个补丁版本。

---

## 项目进度

Let me continue with the table...

I'll continue translating the rest of the content following the same principles - maintaining structure, keeping technical terms and references in their original form, using natural technical Chinese register.</think>

# OpenClaw 项目简报 — 2026-09-26

## 今日概览

OpenClaw 保持着极高的活跃度，过去 24 小时内更新了 **500 个 issue** 和 **500 个 PR**。虽然未发布新版本，但 **2026.9.7 缺陷修复追踪** (#157531) 已在运行中。项目正在处理严重的稳定性问题：2026.9.5 至 2026.9.7 版本报告了多个 P0 级别的严重 bug，包括内存泄漏、CPU 跑满循环和更新失败。社区参与度依然很高，多个高评论量的帖子表明用户正在积极排查问题和讨论功能。

---

## 版本发布

过去 24 小时内**没有新版本**发布。

**2026.9.7 缺陷修复追踪** (#157531) 正在进行中，表明团队正在积极开发下一个补丁版本。

---

## 项目进度

| PR | 状态 | 描述 |
|---|--------|-------------|
| [#158498](https://github.com/openclaw/openclaw/pull/158498) | **已关闭** | `chore(ui)`: 刷新控制台 UI 本地化 |
| [#157972](https://github.com/openclaw/openclaw/pull/157972) | 开放中 | `fix(release)`: 恢复卡死的更新并保留已保留的会话数据 |
| [#158500](https://github.com/openclaw/openclaw/pull/158500) | 开放中 | `feat(release)`: 在单个父级审批下发布 npm 子包 |
| [#158501](https://github.com/openclaw/openclaw/pull/158501) | 开放中 | `perf(plugins)`: 减少重复的流数据原型检查 |
| [#158492](https://github.com/openclaw/openclaw/pull/158492) | 开放中 | `improve(chat)`: 跳过未更改的流式快照准备 |
| [#158489](https://github.com/openclaw/openclaw/pull/158489) | 开放中 | `perf(gateway)`: 保持长聊天流响应 |

**关键进展：**
- 发布自动化改进 (#158500)
- 流式处理和插件数据处理性能优化 (#158501, #158492, #158489)
- UI 本地化同步已完成 (#158498)

---

## 社区热点话题

**评论最多的 Issue：**

| Issue | 评论数 | 话题 |
|-------|----------|-------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 34 | **OpenClaw 2026.9.5 将稳定环境变为 8 小时失败恢复会话** — 严重崩溃/UX 发布阻塞问题 |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | 29 | 模型目录过期/重建循环导致一个 CPU 核心跑满 — 性能 bug |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 24 | **功能**：网关层面的按智能体成本预算控制 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 20 | **功能**：分层引导文件加载，实现渐进式上下文控制 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | 18 | 混合终端请求者-解决批次在所有权检查后无限重试 |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | 14 | **2026.9.6**: 预准备模型目录工作进程每个智能体轮次保留约 77 MB（堆内存未释放）|
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 13 | 2026.9.7 缺陷修复追踪 |

**分析：**
- 用户正在积极调试 **2026.9.5/9.6 回归问题** — 升级路径导致严重问题
- **成本控制** (#42475，24 条评论) 和 **上下文/代币优化** (#22438，20 条评论) 表明企业用户重视预算和效率
- 模型目录工作进程是 **常见的不稳定来源**（CPU 跑满、内存泄漏）

---

## Bug 与稳定性

**严重 (P0) — 需要立即关注：**

| Issue | 严重程度 | 描述 | 修复 PR？ |
|-------|----------|-------------|---------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 🐚 platinum hermit，UX 阻塞 | OpenClaw 2026.9.5 将稳定环境变为 8 小时失败恢复会话 | 无 |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | 🦪 silver shellfish，崩溃循环 | 模型目录过期/重建循环导致一个 CPU 核心跑满 | 无 |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | 🦞 diamond lobster，UX 阻塞 | 预准备模型目录工作进程每个轮次保留约 77 MB（超过 512 MB 限制）| 无 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | 🦪 silver shellfish | Gateway：堆外 RSS 失控导致 OOM | 无 |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | 🦪 silver shellfish，回归 | minimax-portal 在 2026.9.5 升级后丢失模型目录 | 无 |
| [#154114](https://github.com/openclaw/openclaw/issues/154114) | 🦪 silver shellfish，UX 阻塞 | `openclaw update` 候选演练失败，尽管在线 Gateway 认证正常 | 无 |

**更新失败报告（多个 P0 问题）：**
- [#157603](https://github.com/openclaw/openclaw/issues/157603): 更新失败 — 正在修复 (2026.9.5)
- [#155094](https://github.com/openclaw/openclaw/issues/155094): 更新失败 — 意外错误 (2026.9.4)
- [#153049](https://github.com/openclaw/openclaw/issues/153049): 更新失败 — doctor 失败 (2026.9.4)
- [#155290](https://github.com/openclaw/openclaw/issues/155290): 更新失败 — 全局安装失败 (2026.9.4)
- [#156986](https://github.com/openclaw/openclaw/issues/156986): openclaw update 在 update-candidate-state 阶段卡住

**高优先级 (P1)：**
- [#137332](https://github.com/openclaw/openclaw/issues/137332): 混合终端请求者-解决批次在所有权检查后无限重试
- [#144809](https://github.com/openclaw/openclaw/issues/144809): claude-cli 在 RUN_STALE_TAKEOVER_MS 后丢失生成的回复
- [#154572](https://github.com/openclaw/openclaw/issues/154572): sessions_spawn 到 claude-cli-runtime 子进程失败，提示 SessionTranscriptWriterClaimReboundError

---

## 功能请求与路线图信号

**高参与度的活跃功能讨论：**

| Issue | 优先级 | 评论数 | 近期可能实现？ |
|-------|----------|----------|-------------------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | P2 | 24 | **是** — 成本控制是企业级关键需求 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | P2 | 20 | **是** — 代币优化是常见需求 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | P2 | 10 | 可能 — 减少工具模式代币开销 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | P2 | 10 | 可能 — 按智能体 dreaming 配置 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | P1 | 7 | **是** — 投递队列 TTL 是明确的功能缺口 |
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | P2 | 9 | 可能 — 自托管 STT/TTS 提供商支持 |

**路线图信号：**
- **2026.9.7 缺陷修复追踪** (#157531) 表明重点在稳定性修复
- **成本强制执行** (#42475) 和 **上下文优化** (#22438, #14785) 符合用户对效率的需求
- **投递队列 TTL** (#16555) 解决了已知的持久性缺口

---

## 用户反馈总结

**用户反馈的主要痛点：**

1. **更新机制损坏**：多个用户报告从 2026.9.4 → 2026.9.5/9.6 更新失败，症状包括：
   - 尽管认证有效，候选演练仍然失败 (#154114)
   - 全局安装失败 (#155290, #154924)
   - Doctor 检查失败 (#153049)
   - 在 update-candidate-state 阶段卡住 (#156986)

2. **2026.9.5/9.6 回归问题**：从稳定版 2026.9.4 升级的用户报告：
   - 完整失败恢复会话持续 8+ 小时 (#153257)
   - 模型目录工作进程导致 CPU 跑满 (#155753) 和内存泄漏 (#157842)
   - minimax-portal 升级后丢失模型目录 (#152804)

3. **Gateway 稳定性**：RSS 失控/OOM 问题 (#154812)，Matrix E2EE 导致空闲时 CPU/磁盘使用 (#154104)

4. **会话/消息可靠性**：CLI 辅助子智能体在无工具运行时丢失生成的回复 (#121661)，消息丢失问题 (#137332, #153859)

**用户情绪**：对升级路径和近期版本不稳定感到沮丧，特别是 2026.9.5/9.6 引入的模型目录工作进程。企业用户对成本控制需求表达强烈。

---

## 待关注积压问题

**需要维护者关注的长期未解决的重要 Issue：**

| Issue | 存在时间 | 优先级 | 状态 |
|-------|-----|----------|--------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 约 6 个月 | P2 | 功能请求 — 按智能体成本预算 |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 约 7 个月 | P2 | 功能请求 — 分层引导加载 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 约 5 个月 | P2 | 功能请求 — 按智能体 dreaming 配置 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 约 7 个月 | P2 | 改进 — 减少工具模式代币开销 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 约 6 个月 | P0 | 回归 — 实时文档领先于版本发布 |

**观察：**
- 多个 2026 年初的 P2 功能请求仍未得到处理
- **实时文档领先于版本发布** 回归问题 (#48920) 是 P0 但似乎停滞
- 多个带有 `clawsweeper:needs-product-decision` 标签的问题表明待定的战略决策

---

*基于 OpenClaw GitHub 数据生成 — 2026-09-26*

---

## 横向生态对比

<think>The user wants me to translate this cross-project ecosystem report into Simplified Chinese. I need to:
1. Translate all headings, body text, and table content
2. Preserve all Markdown formatting (tables, headings, lists, horizontal rules, bold, italic)
3. Keep all technical identifiers, URLs, issue numbers, project names, code references unchanged
4. Use natural technical Chinese register - not literal word-for-word translation

Let me go through the report section by section and translate it appropriately while maintaining the structure.</think>

# 跨项目生态报告 — AI 智能体 / 个人助理领域

## 1. 生态概览

个人 AI 助理和智能体的开源生态正在经历一个 intense 成熟化和架构演进的时期。在分析的五个项目——**OpenClaw**、**Hermes Agent**、**IronClaw**、**QwenPaw** 和 **ZeroClaw**——中，社区正在共同应对基础性挑战：安全加固（认证、授权、OIDC）、运行时可靠性（内存管理、会话持久化）以及用户体验优化（控制台 UI、跨平台支持）。过去 24 小时内没有任何项目发布版本，表明当前处于活跃开发阶段而非发布周期。领域呈现出两极分化态势：一端是面向大规模企业级应用的项目（OpenClaw：每日 500 个 issue/PR），另一端是专注于细分场景的小型项目（IronClaw：活动极少）。共同主题包括向插件化架构的演进、per-agent 资源治理，以及持久化消息传递语义的改进。

---

## 2. 活动对比

| 项目 | Issue 更新（24h） | 开启 / 关闭 | PR 更新（24h） | 开启 / 已合并-关闭 | 发布版本（24h） | 活跃度等级 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 458 / 42 | 500 | 376 / 124 | 0 | 🚀 **快速迭代** |
| **ZeroClaw** | 50 | 37 / 13 | 50 | 41 / 9 | 0 | 🚀 **快速迭代** |
| **Hermes Agent** | 50 | 36 / 14 | 50 | 24 / 26 | 0 | 🚀 **快速迭代** |
| **QwenPaw** | 12 | 12 / 0 | 13 | 13 / 0 | 0 | 🟢 **活跃开发** |
| **IronClaw** | 0 | 0 / 0 | 2 | 2 / 0 | 0 | 🔵 **低活跃度** |

**健康度推导**（以 PR 合并率作为吞吐量和稳定性的代理指标）：
- OpenClaw: 124/500 = **24.8%** 合并率 — 吞吐量健康
- ZeroClaw: 9/50 = **18%** 合并率 — 中等水平
- Hermes Agent: 26/50 = **52%** 合并率 — 表现优秀
- QwenPaw: 0/13 = **0%** — 需要关注
- IronClaw: 0/2 = **0%** — 停滞或静默

---

## 3. OpenClaw 的定位

### 相比同行的优势

| 维度 | OpenClaw | 对比 Hermes | 对比 ZeroClaw | 对比 QwenPaw |
|---|---|---|---|---|
| **规模** | 每日 500 issue/PR | 10 倍量级 | 10 倍量级 | 40 倍量级 |
| **社区参与度** | 34+ 条评论讨论串 | 14 条评论讨论串 | 15 条评论 RFC 讨论串 | 最多 7 条评论 |
| **企业级特性** | per-agent 成本预算、成本控制 | 非重点方向 | 主机级别的准入控制 | 非重点方向 |
| **成熟度信号** | 2026.9.7 修复进行中 | 活跃的 Windows 修复 | v0.9.0 准备就绪 | 早期功能 PR |

### 技术路线差异

- **OpenClaw** 优先关注**大规模场景下的内存和会话可靠性**（77MB 泄漏追踪、模型目录 worker 优化、会话状态持久化）
- **Hermes Agent** 聚焦**平台特定稳定性**（Windows PM 运行时、macOS 快速用户切换、桌面更新循环）
- **ZeroClaw** 投入**架构基础设施**建设（OIDC、RPC 安全面、插件系统、SOP 框架）
- **QwenPaw** 强调**控制台 UX 和跨平台渠道**（控制台 UI、QQ/WhatsApp/Mattermost、浏览器 SDK）
- **IronClaw** 保持**最小化占用**，专注于运行时正确性

### 社区规模

OpenClaw 每日 500 次更新远超其他项目，表明其拥有庞大的用户群和贡献者群体。Hermes Agent 和 ZeroClaw 的规模均为前者的 10%，但 PR 合并率更高，表明团队更加专注且吞吐量较高。QwenPaw 和 IronClaw 代表的是更小众、垂直的投入。

---

## 4. 共同技术关注点

| 关注领域 | OpenClaw | Hermes | ZeroClaw | QwenPaw | IronClaw |
|---|---|---|---|---|---|
| **安全 / 认证** | — | OAuth 失败、profile 级别认证 | OIDC 主体、RPC 认证面 | — | — |
| **内存 / 运行时** | 77MB 泄漏、模型目录 CPU 绑定 | 网关 RSS 失控 | RPC 工作区隔离 | 上下文窗口目录 | — |
| **会话持久化** | 会话状态、消息投递 | chat_with_agent 超时 | — | 历史记录加载失败 | — |
| **控制台 / UI** | — | 桌面更新循环 | — | 表格滚动、控制台输入 | — |
| **渠道 / 平台** | — | Windows PM 运行时 | Webhook 分发 | QQ、WhatsApp、浏览器 SDK | — |
| **成本 / 资源** | per-agent 成本预算 | — | 主机级别准入控制 | — | — |
| **插件架构** | — | MCP | 统一能力目录 | — | — |

### 共识需求（生态级）

1. **可靠的会话和消息投递** — OpenClaw (#137332, #153859)、QwenPaw (#7884)
2. **资源治理** — OpenClaw（成本）、ZeroClaw（准入控制）、Hermes（RSS 限制）
3. **内存管理** — 每个项目都在处理某种形式的泄漏或保留问题
4. **平台特定稳定性** — Windows（Hermes）、macOS（Hermes）、多渠道（QwenPaw、ZeroClaw）

---

## 5. 差异化分析

| 项目 | 主要差异化点 | 目标用户 | 架构风格 |
|---|---|---|---|
| **OpenClaw** | 企业级成本控制、大规模会话持久化 | 大规模部署、成本敏感型企业 | 集中式网关 + per-agent 预算 |
| **Hermes Agent** | 平台特定鲁棒性（Windows、macOS、桌面） | 桌面和工作站用户 | 本地优先 + 网关模式 |
| **ZeroClaw** | 安全优先的 RPC、SOP 框架、插件架构 | 安全敏感团队、devops | RPC 原生 + OIDC + 主体强制 |
| **QwenPaw** | 多渠道控制台（QQ、WhatsApp、Telegram）、UI 打磨 | 多平台团队协作 | 渠道聚合网关 |
| **IronClaw** | 最小化运行时、带符号时间操作 | 垂直嵌入式用例 | 轻量级运行时 |

### 技术架构分化

- **集中式 / 网关主导**：OpenClaw、Hermes Agent、QwenPaw — 均通过网关进程路由
- **RPC 原生 / 分布式**：ZeroClaw — 强调 RPC 组合边界、对等凭证
- **轻量 / 嵌入式**：IronClaw — 最小化依赖占用

---

## 6. 社区活力与成熟度

### 活跃度等级

| 等级 | 项目 | 特征 |
|---|---|---|
| **快速迭代** | OpenClaw、Hermes Agent、ZeroClaw | 每日 50+ PR、高 issue 量、RFC 讨论频繁 |
| **活跃开发** | QwenPaw | 稳定流水、首次贡献者、PR 待审核 |
| **低活跃 / 停滞** | IronClaw | 变化极少、PR 开放 >20 天 |

### 趋势信号

- **OpenClaw**：快速迭代但正在处理**回归问题**（2026.9.5/9.6 不稳定）— 处于危机响应模式的项目
- **Hermes Agent**：安全重点推进 **OAuth/OIDC 完善** — 接近功能成熟
- **ZeroClaw**：活跃的 RFC 治理（#8692）和**插件架构**迁移 — 架构演进阶段
- **QwenPaw**：功能驱动，UI/UX 为重点 — **早期成熟**，稳定的 bug 修复节奏
- **IronClaw**：鉴于活动极少，可能处于**稳定**或维护模式

---

## 7. 趋势信号 — AI 智能体开发者的价值参考

### 新兴行业需求

| 趋势 | 证据 | 战略意义 |
|---|---|---|
| **per-agent 资源治理** | OpenClaw 成本预算、ZeroClaw 准入控制 | 多租户和多智能体部署需要细粒度资源控制 |
| **安全面加固** | ZeroClaw OIDC (#11082)、Hermes 认证修复、OpenClaw 会话隔离 | 处理敏感数据的智能体需要企业级认证 |
| **会话和消息持久化** | OpenClaw (#153257)、QwenPaw (#7884)、ZeroClaw RFC #10929 | 用户期望有保证的消息投递；需要"至少一次"语义 |
| **插件 / 能力目录** | ZeroClaw #6489、Hermes MCP 工作 | "一切皆插件"趋势降低二进制体积并提高可扩展性 |
| **平台可靠性** | Hermes Windows/macOS 修复 | 桌面智能体部署需要操作系统特定的鲁棒性工程 |
| **控制台和 UI 投入** | QwenPaw 控制台 PR、OpenClaw UI 本地化 | 用户期望与消费级聊天界面相当的 UX 水平 |

### 开发者建议

- **如果构建企业级智能体**：关注 OpenClaw 的成本执行模式和 ZeroClaw 的 SOP 框架 — 两者都满足生产运营需求
- **如果构建桌面 / 工作站智能体**：Hermes Agent 的 Windows 和 macOS 经验可以直接借鉴
- **如果构建多渠道机器人**：QwenPaw 的渠道聚合模式提供集成模式参考
- **如果优先考虑安全**：ZeroClaw 的 OIDC 和主体强制工作代表了智能体认证设计的前沿

---

*跨项目分析基于 2026-09-26 的 GitHub 活动数据综合整理。*

---

规则：
- 仅输出翻译内容。不添加前言、解释，不使用 markdown 代码块包裹整个输出。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、引用块、粗体/斜体、水平线。
- 保留 URL、链接目标、数字和日期原样不变。
- 保持项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译。
- Issue/PR 引用如 #12345 及其链接文字保持不变。
- 使用自然的技术中文，即中文开发者技术 newsletter 的语感——而非逐字直译。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English project digest into Chinese (Simplified Chinese - 简体中文), maintaining the exact Markdown structure while using natural technical Chinese register. Let me translate this carefully, following all the rules specified.

Let me go through the content and translate it naturally:

## Today's Overview
- Change to: 今日概览

## Releases
- Change to: 发布动态

## Project Progress
- Change to: 项目进展

## Community Hot Topics
- Change to: 社区热点

## Bugs & Stability
- Change to: 缺陷与稳定性

## Feature Requests & Roadmap Signals
- Change to: 功能需求与路线图信号

## User Feedback Summary
- Change to: 用户反馈摘要

## Backlog Watch
- Change to: 待办事项关注

I need to translate the content in a natural, technical Chinese register while preserving all the structure, URLs, numbers, dates, issue/PR references, etc.</think>

# Hermes Agent 项目摘要 — 2026年9月26日

## 今日概览

Hermes Agent 在 2026年9月26日 显示高度活跃，过去24小时内有50个 Issue 和 50 个 PR 更新。项目保持健康的消耗速率，其中14个 Issue 已关闭，26 个 PR 已合并/关闭。本日无新版本发布。最受关注的问题集中在 Windows 平台兼容性（PM 运行时、pydantic_core ABI 不匹配）、桌面端更新循环以及认证失败。社区正在积极报告平台特定的缺陷，同时多个安全和稳定性修复正在审核中。

---

## 发布动态

**本日无新版本发布。** 项目过去24小时内无版本发布记录。

---

## 项目进展

### 本日合并/关闭的 PR（26个）

| PR | 作者 | 摘要 |
|----|--------|---------|
| [#121360](https://github.com/NousResearch/hermes-agent/pull/121360) | pmaho | **fix(gateway): 关闭 state.db WAL 生成间隙** — 通过在关闭前连接分离的会话卫生压缩器，解决共享网关 `state.db` 上反复出现的 `DeletedWalGenerationError`，修复 KillMode=control-group 问题，并锁定 Python 3.12 |
| [#102772](https://github.com/NousResearch/hermes-agent/pull/102772) | chelsealong | **fix(stream): 区分干净 EOF 无 finish_reason 与传输丢弃** — 通过区分真正的传输中断和干净 EOF 场景，修复 #102766 |

### 进行中的活跃 PR（24个开放）

| PR | 作者 | 关注领域 |
|----|--------|------------|
| [#123240](https://github.com/NousResearch/hermes-agent/pull/123240) | JoaoMarcos44 | **fix(backup): 验证恢复源** — 防止损坏的快照静默替换健康的 `state.db` |
| [#123233](https://github.com/NousResearch/hermes-agent/pull/123233) | JoaoMarcos44 | **fix(mcp): 跨配置文件采用前比较有效连接输入** — 多路复用网关的安全修复 |
| [#123234](https://github.com/NousResearch/hermes-agent/pull/123234) | kokhlo | **fix(pm): 固定解释器移动时使 venv 货币失效** — 检测被静默跳过的 Python 版本升级（3.13→3.14） |
| [#122550](https://github.com/NousResearch/hermes-agent/pull/122550) | kshitijk4poor | **fix(gateway): 辅助配置文件机器人根据自己的允许列表进行授权** — 多路复用下 Telegram 内联按钮的安全修复 |
| [#123239](https://github.com/NousResearch/hermes-agent/pull/123239) | chelsealong | **fix(desktop): 恢复链式"更新全部"操作** — 修复 #121209 同意拆分导致的回归 |
| [#123232](https://github.com/NousResearch/hermes-agent/pull/123232) | jonpol01 | **fix(mattermost): 仅下载授权发送者的附件** — 安全 + 媒体上限合规性 |
| [#123243](https://github.com/NousResearch/hermes-agent/pull/123243) | lrporto | **fix(cli): 为 Codex OAuth 添加连接器作用域** — 修复成功 OAuth 后的 HTTP 401 |

---

## 社区热点

### 按评论数排名的最活跃 Issue

1. **[#122183](https://github.com/NousResearch/hermes-agent/issues/122183)** — Windows 网关在 PM 运行时下前置旧版 venv，导致 `hosted_room_worker` 崩溃（P1，14条评论）
   - *核心需求*: 从传统迁移到 PM 管理的 Python 在 Windows 上路径中断；Windows 用户无法更新

2. **[#122656](https://github.com/NousResearch/hermes-agent/issues/122656)** — 桌面端在每次后端启动时切换到无操作更新器，无限重建（P2，7条评论）
   - *核心需求*: 源码安装用户经历重复重建；对开发者来说是阻塞性问题

3. **[#120545](https://github.com/NousResearch/hermes-agent/issues/120545)** — macOS 快速用户切换在网关运行时阻塞20-30秒（P2，6条评论）
   - *核心需求*: 多用户 macOS 系统受到负面影响；launchd 网关设计缺陷

4. **[#122495](https://github.com/NousResearch/hermes-agent/issues/122495)** — Windows `hermes update` 在带 venv 重定向器的配置式网关上中止（P2，6条评论）
   - *核心需求*: Windows 配置式部署无法更新

5. **[#122490](https://github.com/NousResearch/hermes-agent/issues/122490)** — bot-to-bot DM 投递运行器缺少第三方依赖（ruamel 死亡）（P2，5条评论）
   - *核心需求*: 机器人间消息投递因隔离运行器中缺失依赖而失败

6. **[#68680](https://github.com/NousResearch/hermes-agent/issues/68680)** — 功能：为 Docusaurus 文档添加 pt-BR 语言环境（P3，5条评论）
   - *核心需求*: 需要巴西葡萄牙语文档；CLI 已支持 pt 语言环境

7. **[#88891](https://github.com/NousResearch/hermes-agent/issues/88891)** — delegate_task 每任务模型/推理强度覆盖（P3，3评论，3 👍）
   - *核心需求*: 细粒度控制委托通道；高价值编排功能

---

## 缺陷与稳定性

### 关键（P1）缺陷

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#122183](https://github.com/NousResearch/hermes-agent/issues/122183) | Windows PM 运行时覆盖破坏 pydantic_core ABI — 导致网关崩溃 | 开放，14条评论 |
| [#122736](https://github.com/NousResearch/hermes-agent/issues/122736) | Windows store Python 覆盖旧版 venv site-packages → ABI 不匹配 | 开放，1条评论 |
| [#83185](https://github.com/NousResearch/hermes-agent/issues/83185) | 当 `gateway.platforms` 是列表时网关崩溃 | 已关闭 |

### 高优先级（P2）缺陷

| Issue | 描述 | 修复 PR |
|-------|-------------|--------|
| [#122656](https://github.com/NousResearch/hermes-agent/issues/122656) | 桌面端无操作更新器在每次启动时循环 | — |
| [#122783](https://github.com/NousResearch/hermes-agent/issues/122783) | PM 管理的安装从不重入 venv → 内存提供者死亡 | — |
| [#122513](https://github.com/NousResearch/hermes-agent/issues/122513) | prepare_launch() 使用 absolute() 而非 resolve() → 重新启动循环 | — |
| [#122490](https://github.com/NousResearch/hermes-agent/issues/122490) | bot-to-bot DM 运行器缺少 ruamel 依赖 | — |
| [#123210](https://github.com/NousResearch/hermes-agent/issues/123210) | OpenAI Codex OAuth 在重新认证后返回 401 | [#123243](https://github.com/NousResearch/hermes-agent/pull/123243) |
| [#103694](https://github.com/NousResearch/hermes-agent/issues/103694) | 配置式 OAuth 打印"已添加"但未持久化 | — |

---

## 功能需求与路线图信号

### 值得注意的功能需求

| Issue | 描述 | 社区兴趣 |
|-------|-------------|-------------------|
| [#88891](https://github.com/NousResearch/hermes-agent/issues/88891) | delegate_task: 每任务模型 / 推理强度覆盖 | 3 👍, P3 |
| [#68680](https://github.com/NousResearch/hermes-agent/issues/68680) | 为文档站点添加 pt-BR 语言环境 | 5条评论 |
| [#118381](https://github.com/NousResearch/hermes-agent/issues/118381) | MCP 客户端: 向模型公开 `initialize_result.instructions` | 2条评论 |
| [#122489](https://github.com/NousResearch/hermes-agent/pull/122489) | *开放 PR*: 在会话标签页开始时显示所属配置身份 | — |

**预测**: 每任务覆盖 (#88891) 和 MCP 指令公开 (#118381) 符合项目的代理编排方向，可能在近期版本中出现。pt-BR 文档本地化是低复杂度的社区贡献，可能很快就会合并。

---

## 用户反馈摘要

### 痛点

1. **Windows 平台不稳定** — 多位 Windows 用户报告升级到 PM 运行时后网关崩溃。venv 覆盖问题导致 pydantic_core ABI 不匹配。这是今日报告最多的问题。

2. **桌面端更新循环** — 使用源码安装的开发者报告每次后端启动时都无限重建。这扰乱了活跃的开发工作流。

3. **macOS 多用户阻塞** — 运行网关时快速用户切换被阻塞20-30秒，影响团队环境。

4. **OAuth 持久化失败** — 用户成功完成 OAuth 流程但凭据未保存，特别是配置式和 Codex 认证。

### 满意信号

- WAL 生成间隙修复 (#121360) 解决了长期存在的数据库稳定性问题
- MCP 跨配置采用和 Mattermost 附件的安全修复表明对多租户问题的响应能力
- 桌面 UI 改进（标签页中的配置身份、内联预览颜色）表明对用户体验的关注

---

## 待办事项关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 优先级 | 状态 |
|-------|-----|----------|--------|
| [#53328](https://github.com/NousResearch/hermes-agent/issues/53328) | 2026-06-26 | P2 | 已关闭（但可能需要验证） |
| [#68261](https://github.com/NousResearch/hermes-agent/issues/68261) | 2026-07-20 | P2 | 已关闭 |
| [#59848](https://github.com/NousResearch/hermes-agent/issues/59848) | 2026-07-06 | P3 | 已关闭 |
| [#58275](https://github.com/NousResearch/hermes-agent/issues/58275) | 2026-07-04 | P3 | 已关闭 |
| [#112646](https://github.com/NousResearch/hermes-agent/issues/112646) | 2026-09-16 | P3 | 开放 — 多配置部署跟踪，需要持续协调 |

待办事项显示良好的关闭率。多配置部署跟踪 (#112646) 作为企业用户的协调中心保持开放 — 维护者应继续参与其中。

---

*生成时间：2026年9月26日 | 数据来源：GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese, following specific rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, numbers, dates, code references, issue/PR numbers verbatim
- Use natural technical Chinese register

Let me translate section by section, maintaining the structure and style:

## 1. Today's Overview
Keep as ## 1. 今日概览

## 2. Releases
Keep as ## 2. 发布版本

## 3. Project Progress
Keep as ## 3. 项目进展

## 4. Community Hot Topics
Keep as ## 4. 社区热点

## 5. Bugs & Stability
Keep as ## 5. 缺陷与稳定性

## 6. Feature Requests & Roadmap Signals
Keep as ## 6. 功能请求与路线图信号

## 7. User Feedback Summary
Keep as ## 7. 用户反馈摘要

## 8. Backlog Watch
Keep as ## 8. 待办事项关注

Now let me translate the content:

"Project activity on 2026-09-26 shows low engagement with **2 pull requests updated in the last 24 hours** and **no issues or releases**. Both active PRs are open and not yet merged. The repository maintains a minimal change footprint today, suggesting either a stable state or potential quiet period in the development cycle. The codebase knowledge graph refresh workflow (PR #7988) indicates ongoing CI infrastructure maintenance, while the substantial feature addition in PR #8108 demonstrates continued investment in the `builtin.time` functionality. No critical stability or community concerns were raised today."

Translation: 2026-09-26 的项目活动显示参与度较低，过去 24 小时内有 **2 个拉取请求更新**，**无问题或发布**。两个活跃的 PR 均处于开放状态，尚未合并。

The project appears stable with minimal recent changes, indicating either a quiet period or steady state. The codebase knowledge graph refresh workflow (PR #7988) signals routine CI maintenance, while PR #8108's substantial feature addition demonstrates continued investment in `builtin.time` functionality. No critical stability or community concerns emerged today.

Today's activity shows zero merged or closed PRs, with both open and under review. PR #8108 represents a large feature addition introducing signed time shift operations to `builtin.time`, including `operation: "shift"` for signed seconds, minutes, hours, days, and weeks, plus support for relative shifts from explicit timestamps or "now" with fixed durations for days and weeks using a wide accumulator.

PR #7988 is routine CI maintenance updating the committed codebase-memory bootstrap snapshot from the current default branch via the nightly `Codebase Graph Refresh` workflow.

No issues or pull requests received comments, reactions, or significant community engagement in the last 24 hours. Both open PRs show zero reactions and no recorded comments, indicating a quiet community day.

No bugs, crashes, or regressions were reported in the last 24 hours, with no stability-related issues in the current snapshot.

PR #8108 represents the most substantial feature work—a large enhancement adding signed time shift capabilities to `builtin.time` and likely including typed input improvements. This runtime and standard library enhancement fills a meaningful gap in time-based operations.

No direct user feedback was recorded in the last 24 hours. The backlog includes PR #7988 as routine CI maintenance, while PR #7988 requires maintainer review as a routine CI infrastructure task.</think>

# IronClaw 项目摘要 — 2026-09-26

## 1. 今日概览

2026-09-26 的项目活动显示参与度较低，过去 24 小时内有 **2 个拉取请求更新**，**无问题或发布**。两个活跃的 PR 均处于开放状态，尚未合并。代码库今天的变更痕迹极少，表明项目处于稳定状态或开发周期中的平静期。代码库知识图谱刷新工作流（PR #7988）表明 CI 基础设施正在维护，而 PR #8108 中的重大功能添加则显示 `builtin.time` 功能持续有投入。今天没有提出关键的稳定性或社区问题。

---

## 2. 发布版本

过去 24 小时内**没有新版本**发布。当前数据中没有记录该项目的版本。

---

## 3. 项目进展

| PR | 标题 | 状态 | 规模 | 领域 | 贡献者 |
|----|------|------|------|------|--------|
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | fix(host-runtime): add builtin.time shift and typed input issues | **OPEN** | XL | 运行时/标准库 | new |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | **OPEN** | XS | CI/基础设施 | core |

**今日活动：** 零个合并或关闭的 PR。两个 PR 保持开放状态，等待审查。

**PR #8108 分析：** 这是一个**大型功能添加**（XL 规模），为 `builtin.time` 引入了带符号时间偏移操作。主要能力包括：
- `operation: "shift"` 支持带符号的秒、分钟、小时、天和周偏移
- 支持从明确时间戳或"现在"开始的相对偏移
- 天和周的固定时长
- 宽累加器用于表示带符号的取消操作

**PR #7988 分析：** 一个常规的 CI 维护任务，更新当前默认分支提交的代码库内存引导快照，由夜间 `Codebase Graph Refresh` 工作流生成。

---

## 4. 社区热点

过去 24 小时内没有问题或拉取请求收到评论、反应或显著的社区参与。两个开放的 PR 均显示 **0 个反应 (👍)** 且没有记录评论。这表明今天是社区平静日，没有需要分析师关注的活跃讨论或辩论。

---

## 5. 缺陷与稳定性

过去 24 小时内**没有报告缺陷、崩溃或回归**。当前数据快照中没有显示与稳定性相关的问题。

---

## 6. 功能请求与路线图信号

**PR #8108** 是今天可见的最重要的功能工作：
- **增强的时间操作**：为 `builtin.time` 添加带符号时间偏移功能，解决时间算术方面的空白
- **类型化输入改进**：可能包括时间相关输入的类型处理改进（摘要中未完全详述）
- **范围**：运行时和标准库增强

这个 PR 规模大（XL）且涉及核心运行时功能，表明该功能可能针对即将发布的版本。带符号时间偏移的添加填补了时间操作方面的显著空白，而这通常是代理运行时中经常请求的功能。

---

## 7. 用户反馈摘要

过去 24 小时内没有记录直接的用户反馈（问题、评论或反应）。当前数据窗口无法呈现真实的用户痛点或满意度指标。

---

## 8. 待办事项关注

| 项目 | 存在时长 | 状态 | 优先级信号 |
|------|---------|------|-----------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | 约 28 天（创建于 2026-08-29） | OPEN | 低 — 常规 CI 维护 |
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | 约 4 天（创建于 2026-09-22） | OPEN | 中 — 大型功能，需审查 |

**备注：**
- **PR #7988** 作为夜间刷新任务已开放约一个月，等待维护者审查和合并作为常规 CI 基础设施工作。
- **PR #8108** 是一个较新的重大功能添加，合并前需要彻底的代码审查。鉴于其规模（XL）和范围（运行时功能），需要维护者关注。

---

*摘要基于 github.com/nearai/ironclaw 的 GitHub 数据生成 — 2026-09-26*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English project digest into Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, code blocks as-is
4. Keep project names, repository slugs, usernames in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate the content while maintaining the exact structure:

**Title**: QwenPaw Project Digest — 2026-09-26
→ QwenPaw 项目动态 — 2026年9月26日

**Overview section**: Need to translate naturally
- "high development activity" → 高度开发活跃
- "first-time contributors" → 新贡献者

Let me go through the entire document systematically:</think>

# QwenPaw 项目动态 — 2026年9月26日

## 今日概况

QwenPaw 今日表现出**高度开发活跃**状态，过去 24 小时内有 12 个 issues 和 13 个 pull requests 更新。暂无 PR 合并和版本发布，说明团队正在积极审核传入的贡献并处理已报告的 bug。问题分布涵盖 bug 报告（5 个）、功能请求（4 个）和改进建议（3 个），表明团队在稳定性修复和新功能开发之间保持了平衡。值得注意的是，有 5 个 PR 来自新贡献者。

---

## 版本发布

过去 24 小时内**无新版本**发布。

---

## 项目进展

今日无 pull requests 被合并或关闭。以下 13 个 PR 保持开放状态，正在积极开发中：

| PR | 作者 | 描述 |
|---|---|---|
| [#7989](https://github.com/agentscope-ai/QwenPaw/pull/7989) | dawNotPoi | fix(console): 保持 Markdown 表格滚动可及 |
| [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) | dawNotPoi | fix(tools): 在 grep 搜索中跳过二进制和内部文件 |
| [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) | dawNotPoi | fix(browser): 支持 Playwright 默认参数排除 |
| [#7986](https://github.com/agentscope-ai/QwenPaw/pull/7986) | Bruce-Yii | fix(providers): 自定义端点跳过上下文模式表 |
| [#7985](https://github.com/agentscope-ai/QwenPaw/pull/7985) | Bruce-Yii | fix(i18n): 为代码片段标签添加复数后缀 |
| [#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) | iluv7 | 修复 QQ 消息重放问题 |
| [#7982](https://github.com/agentscope-ai/QwenPaw/pull/7982) | xuxiaowei1985 | fix(providers): 在原生 Gemini 提供商中转发 Gemini thought_signature |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | AaronZ345 | feat(chat): 添加工具调用可见性开关 |
| [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | AaronZ345 | feat(providers): 暴露每媒体内联能力 |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | rayrayrayraykk | feat(console): 优化设置工作流和侧边栏交互 |
| [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923) | shadowabi | feat(scroll): 在 blocks_retention_days 后老化工具结果块 |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | auwc | feat(chats): 添加滚动回溯消息分页 |
| [#7825](https://github.com/agentscope-ai/QwenPaw/pull/7825) | kabishou11 | fix(crons): 将数字 DOW 步进/范围展开为 crontab 周名称 |

**重点进展：**
- **Provider 修复**：三个 PR 解决上下文窗口处理、 Gemini 集成和 i18n 问题
- **用户体验改进**：表格滚动、控制台设置和滚动回溯分页正在审核中
- **平台修复**：QQ 消息重放和 Browser SDK 问题正在处理

---

## 社区热点话题

引发最多讨论的 issues：

1. **[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)** — 上下文压缩超出提供商预算（7 条评论）
   - *核心问题*：压缩逻辑未考虑完整的提供商请求负载，导致活跃轮次失败
   - *用户需求*：在复杂 agent 工作流中更可预测的内存管理

2. **[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)** — 前端历史记录刷新后未能完全加载（5 条评论）
   - *核心问题*：用户报告刷新页面后对话历史被截断
   - *用户需求*：可靠地访问完整对话历史

3. **[#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957)** — 手动停用预置模型/频道（3 条评论）
   - *功能请求*：允许用户隐藏未使用的默认模型和频道
   - *用户需求*：针对特定用例提供更简洁的界面

4. **[#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948)** — Web 控制台设计缺陷导致用户输入异常（3 条评论）
   - *Bug*：控制台界面干扰文本输入功能

5. **[#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924)** — Markdown 表格溢出控制台宽度（2 条评论）
   - *用户体验问题*：表格超出容器宽度；水平滚动条位置不便

**潜在趋势**：用户当前优先关注**对话可靠性**（上下文管理、历史记录加载）和**界面/体验优化**（控制台设计、表格渲染、可定制界面）。

---

## Bug 与稳定性

| Issue | 严重程度 | 状态 | 修复 PR |
|---|---|---|---|
| [#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) grep_search 匹配二进制 WAL 文件导致会话状态污染 | **高** | 开放 | [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) |
| [#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984) Browser SDK --disable-extensions 阻止配置文件扩展 | **高** | 开放 | [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) |
| [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) QQ 网关在会话恢复时重放事件 | **中** | 开放 | [#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) |
| [#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) chat_with_agent 超时误导性报告用户中断 | **中** | 开放 | — |
| [#7979](https://github.com/agentscope-ai/QwenPaw/issues/7979) 本地 llama.cpp 上下文窗口误判（32k → 1M） | **中** | 开放 | [#7986](https://github.com/agentscope-ai/QwenPaw/pull/7986) |
| [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) Web 控制台设计缺陷影响输入 | **低-中** | 开放 | — |

**重点关注**：两个高严重程度 bug 已有对应的修复 PR 提交（均由新贡献者 dawNotPoi 贡献）。grep_search 二进制过滤问题（#7980）尤为值得关注，因为它可能通过状态污染导致不可恢复的 doom 循环。

---

## 功能请求与路线图信号

| Issue | 类别 | 近期实现可能性 |
|---|---|---|
| [#7978](https://github.com/agentscope-ai/QwenPaw/issues/7978) 跨 agent「最近会话」面板 | UI/导航 | **高** — 符合当前控制台改进工作 |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) 为阿里云 Token Plan 模型添加 thinking_param_style | 模型支持 | **高** — 目录修复，工作量小 |
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) 手动停用预置模型/频道 | 体验/定制 | **中** — 改进功能，非关键 |
| [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924) Markdown 表格自动宽度 | UI 优化 | **高** — PR #7989 已解决滚动问题，已有部分方案 |

**预测下版本重点方向**：
1. 控制台 UI 优化（表格渲染、侧边栏、设置工作流）
2. 本地 provider 上下文窗口处理改进
3. 平台特定修复（QQ 重放、Browser SDK 扩展）

---

## 用户反馈总结

**反馈痛点：**
- **历史丢失焦虑**：用户对刷新前端后无法访问早期对话消息感到沮丧（#7884）
- **内存管理不可预测**：上下文压缩在复杂 agent 链中表现出乎意料（#7628）
- **界面杂乱**：请求隐藏未使用的默认项（#7957）和切换工具调用可见性（#7357）
- **平台集成缺口**：QQ 重放导致重复，Browser SDK 阻止扩展

**满意度信号：**
- 新贡献者参与积极（今日 5 个 PR）
- 社区驱动的 bug 修复（grep_search、Browser SDK 问题均由贡献者报告并修复）

---

## 待处理关注

需要维护者关注的问题（开放超过 3 天且活动有限）：

| Issue | 存在时间 | 状态 |
|---|---|---|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) 前端历史加载 | 7 天 | 5 条评论，需要分类 |
| [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) 控制台输入 bug | 3 天 | 3 条评论，需要修复 |
| [#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) chat_with_agent 超时行为 | 1 天 | 需要调查 |

**无长期未响应的关键问题** — 过去一周报告的所有问题均至少有 1 条评论或关联 PR。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese. I need to:
1. Translate all the text content into Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, usernames, code references, etc. as-is
4. Use natural technical Chinese register

Let me go through the digest and translate section by section.</think>

# ZeroClaw 项目摘要 — 2026-09-26

## 今日概览

ZeroClaw 保持高开发节奏，过去 24 小时内有 **50 个 issue** 和 **50 个 PR** 更新。项目在安全、运行时和通道子系统方面表现活跃。本日无新版本发布，但合并/关闭的 PR 数量（9 个）表明各项重要功能正在持续集成中。安全相关的 RFC 和 OIDC 实现工作占据主导地位，反映出项目正处于重大架构演进阶段。Issue 关闭率（13/50）表明在持续提交新 issue 的同时，问题也在被积极解决。

---

## 版本发布

**本日无新版本。** 最近的里程碑活动主要围绕 issue #8358（ZeroRelay 原生传输）展开，追踪 v0.9.0 准备工作。

---

## 项目进展

### 今日合并/关闭的 PR

| PR | 作者 | 摘要 |
|----|------|------|
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | SheaHawkins | **feat(agents):** 导出 agent 为便携式bundle — 支持 `zeroclaw agents export <alias> --out <dir>` 实现 agent 便携迁移 |
| [#11046](https://github.com/zeroclaw-labs/zeroclaw/pull/11046) | Audacity88 | **fix(tools):** 停止将 base64 内联到截图结果中 — 移除输出中的冗余 data URI |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | JordanTheJet | **feat(security):** 对 RPC 强制执行认证主体，使用 native+peercred（#8289 第三阶段） |
| [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) | JordanTheJet | **feat(security):** 将主体工具选择器组合到 agent 会话中（#8289） |
| [#10397](https://github.com/zeroclaw-labs/zeroclaw/pull/10397) | wromansky | **fix(mcp):** 发送工具结果文本块，而非整个 CallToolResult 包装器 |
| [#11072](https://github.com/zeroclaw-labs/zeroclaw/pull/11072) | rtimush | **fix(nix):** 在 flake 包上设置 meta.mainProgram |

### 活跃中的重要 PR

| PR | 作者 | 摘要 |
|----|------|------|
| [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) | JordanTheJet | **feat(security):** OIDC 主体、注册流程和网关认证面 — 将 8 个前置 PR 整合为一个堆叠分支 |
| [#11132](https://github.com/zeroclaw-labs/zeroclaw/pull/11132) | JordanTheJet | **feat(runtime):** RPC 转向、汇总和会话操作的完全对等 |
| [#11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133) | Aarlington | **fix(rpc):** 在会话复用时重新验证转发的环境变量（安全修复） |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | Audacity88 | **feat(runtime):** 协调 agent 生命周期变更 — 跨 RPC、网关、通道的共享实时配置权威 |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | Audacity88 | **fix(runtime):** 从被拒绝的镜像请求中恢复 — 镜像承载终端 HTTP 400 的重试逻辑 |

---

## 社区热点

### 活跃度最高的 Issue（按评论数排序）

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — [追踪] RFC 维护者决策队列 | 15 条评论  
   *追踪需要维护者决策的活跃 RFC 和设计 Issue — 核心治理事项。*

2. **[#8586](https://github.com/zeroclaw-labs/zeroclaw/issues/8586)** — 重构(gateway): 集中化 webhook 通道消息分发 | 10 条评论 *（已关闭）*  
   *集中化 webhook 到通道的入口处理，用于自动保存、agent 分发、回复投递。*

3. **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)** — [追踪] 统一能力目录和插件迁移路线图 | 9 条评论  
   *关键架构转变："一切皆插件" — 整合 Integrations 和 WASM 插件视图。*

4. **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** — RFC：主机范围的准入控制和 per-agent 资源边界 | 8 条评论  
   *提议在多 agent 主机上限制并发轮次、工具执行和 per-agent 内存。*

5. **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)** — feat(ci): 改进 Rust 构建缓存和 CI 关键路径 | 8 条评论  
   *解决小型 PR 改动 15-20 分钟 CI 时间问题 — 高影响力的开发者体验事项。*

### 引发讨论的活跃 RFC

- **#10930**（已关闭）— *RFC：一个持久的原语用于 agent 向人类提问* — 利用现有 SOP 审批门实现持久化
- **#10929**（已关闭）— *RFC：出站消息的投递回执* — 解决消息投递不确定性
- **#11027**（已关闭）— *RFC：带接收方决定权的 agent 间会话消息*
- **#11017**（已关闭）*RFC：保留适用的审查并简化快速合并决策*

---

## 缺陷与稳定性

### 严重/高优先级缺陷

| Issue | 严重级别 | 状态 | 摘要 |
|-------|----------|------|------|
| **[#11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110)** | P1 / S0 | 打开 | **缺陷：** RPC 工作区隔离保留可重定向的 cwd 符号链接 — 安全风险（授权后符号链接可被重定向） |
| **[#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055)** | P1 / 中 | 打开 | **缺陷：** Daemon 始终未注册通道映射工厂 — webhook、cron 和 SOP 轮次没有通道可用 |
| **[#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519)** | P1 / 高 | 打开 | **缺陷：** 协调 cargo-audit 忽略项并修复 wasmtime-wasi CVE — 依赖安全 drift |
| **[#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)** | P2 / 高 | 打开 | **缺陷：** 保留浏览器和搜索工具语义，而非将调用重写为 shell |
| **[#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059)** | P2 / 中 | 打开 | **缺陷：** WhatsApp Web 忽略 force_voice — 无法将轮次路由到语音 |

### 可用的修复 PR

- [#11133](https://github.com/zeroclaw-labs/zeroclaw/pull/11133) — 修复 RPC 会话环境变量重新验证（安全问题）
- [#11046](https://github.com/zeroclaw-labs/zeroclaw/pull/11046) — 修复截图工具 base64 内联问题（已合并）
- [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) — 修复运行时从被拒绝的镜像请求恢复（打开）

---

## 功能需求与路线图信号

### 高影响力的功能工作

| Issue | 类型 | 摘要 |
|-------|------|------|
| **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)** | 追踪 | **统一能力目录和插件迁移** — "一切皆插件"北极星目标 |
| **[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)** | 追踪 | **将可选通道和工具从编译时特性迁移到运行时插件** — 减少二进制体积 |
| **[#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)** | 功能 | **完成公共运行时组合边界** — 支持嵌入运行时时显式声明能力 |
| **[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)** | 追踪 | **SOP 里程碑：daemon 拥有的 SOP 控制平面达到 5/5** — 13 项能力推进中 |
| **[#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)** | 追踪 | **ZeroRelay 原生传输和 v0.9.0 就绪** |
| **[#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103)** | 功能 | **添加 Cheaper Inference 作为类型化的 OpenAI 兼容提供商** |

### 路线图信号

OIDC/安全相关 PR 群（#11082, #10259, #10263, #10321）表明 **安全基础设施接近完成**。运行时组合工作（#10993, #6864）和插件迁移（#6489, #8850）暗示 **模块化** 是 2026-2027 年的优先事项。主机级资源边界（#10970）解决了多 agent 运行时的资源争用问题。

---

## 用户反馈摘要

基于 issue 活动，主要痛点包括：

1. **通道注册失败** — Issue #11055（daemon 通道映射工厂）阻塞了生产部署中的 webhook、cron 和 SOP 工具
2. **CI 延迟** — Issue #7108 突出开发者对小 PR 需要 15-20 分钟构建的不满
3. **消息投递不确定性** — RFC #10929（投递回执）和 #10930（持久问题）解决 agent 无法确认人类通信成功的问题
4. **多 agent 资源争用** — RFC #10970 请求主机级准入控制，以管理运行大量 agent 的机器

积极信号：Agent 导出功能（#9986 已合并）满足便携性需求；OIDC 整合为单一 PR（#11082）体现响应式治理。

---

## 待办事项关注

### 需要维护者关注的老旧 Issue

| Issue | 存在时间 | 状态 | 摘要 |
|-------|----------|------|------|
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | 2026-05-06 起 | 进行中 | 统一能力目录 — 关键架构转变 |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | 2026-05-23 起 | 已关闭（近期） | 反转 zeroclaw-channels → zeroclaw-runtime 依赖 |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | 2026-06-02 起 | 已接受 | CI Rust 构建缓存 — 高影响力 DX 问题 |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | 2026-06-24 起 | 进行中 | SOP 里程碑追踪器 — 多 PR 推出进行中 |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 2026-06-30 起 | 已接受 | cargo-audit/wasmtime CVE 修复 — 安全债务 |

### 需要作者操作的 Issue

- [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) — 需要维护者审查（Cheaper Inference 提供商）
- [#10308](https://github.com/zeroclaw-labs/zeroclaw/pull/10308) — 需要作者操作（共享工作区配置门控）

---

*摘要基于 2026-09-26 的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*