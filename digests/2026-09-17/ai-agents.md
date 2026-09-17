# OpenClaw 生态日报 2026-09-17

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-17 00:50 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the project digest to Chinese. Let me analyze what I need to do:

1. Translate the content into Simplified Chinese
2. Preserve all markdown structure exactly: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, issue/PR references, project names (OpenClaw), file paths, API/config identifiers as-is
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate section by section, maintaining the structure:

1. **Today's Overview** - 概述
2. **Releases** - 版本发布
3. **Project Progress** - 项目进展
4. **Community Hot Topics** - 社区热点
5. **Bugs & Stability** - 缺陷与稳定性
6. **Feature Requests & Roadmap Signals** - 功能请求与路线图信号
7. **User Feedback Summary** - 用户反馈总结
8. **Backlog Watch** - 待办事项关注

Let me translate carefully while preserving the exact markdown structure.</think>

# OpenClaw 项目双周报 — 2026-09-17

## 1. 今日概览

OpenClaw 保持高度活跃，过去 24 小时内有 500 个 issue 和 500 个 PR 出现更新。项目目前正在处理 2026.9.3/2026.9.4 版本发布周期内的重大稳定性问题，多个 P0 级别的更新失败和回归问题正在影响生产环境部署。社区参与度依然很高，最热门 issue（子进程泄漏 #97616）有 30 条评论。今天没有发布新版本，但维护者正在积极处理大量待处理的 Pull Request，涉及性能优化、插件架构和可靠性改进等方面。

---

## 2. 版本发布

**今日无新版本发布。** 最近发布的版本（2026.9.3 和 2026.9.4）存在稳定性问题，正在接受缺陷报告（见第 5 节）。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#150415](https://github.com/openclaw/openclaw/pull/150415) | 重构(agents)：集中化管理 tool block 合约 | Open |
| [#150414](https://github.com/openclaw/openclaw/pull/150414) | 重构(fs)：复用前缀解析与有界读取 | Open |
| [#150405](https://github.com/openclaw/openclaw/pull/150405) | 重构(tts)：从 schema 派生配置合约 | Open |
| [#150404](https://github.com/openclaw/openclaw/pull/150404) | 重构(config)：从 schema 派生 Talk 合约 | Open |
| [#150413](https://github.com/openclaw/openclaw/pull/150413) | 重构(agents)：派生 provider 请求合约 | Open |
| [#150196](https://github.com/openclaw/openclaw/pull/150196) | 修复(gateway)：保持内存中的会话列表为最新 | Open |
| [#150234](https://github.com/openclaw/openclaw/pull/150234) | 特性(plugins)：显示安装进度与生命周期指示器 | Open |
| [#150235](https://github.com/openclaw/openclaw/pull/150235) | 特性(plugins)：按清单元数据对内置插件设置进行分组 | Open |
| [#149533](https://github.com/openclaw/openclaw/pull/149533) | 改进：降低冷启动会话目录列表的 CPU 占用 | Open（性能hold） |

**重点方向：** 合约整合（schema 驱动的 TypeScript 类型）、插件系统改进、会话管理性能、安装体验优化。

---

## 4. 社区热点

### 按评论数排名的热门 Issue

| Issue | 标题 | 评论数 | 点赞 |
|-------|------|--------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程，导致僵尸进程累积 | 30 | 👍 1 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 严重：Gateway 内存泄漏 — RSS 从 350MB 增长到 15.5GB | 25 | 👍 1 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP 服务器初始化超时导致 Gateway 崩溃 | 24 | — |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同一会话车道的并发运行产生重复回复 | 19 | 👍 1 |
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | Windows：2026.9.3 更新候选快照失败；SQLite 超时 | 14 | — |

**分析：** 参与度最高的 issue 集中在资源泄漏（子进程、内存）和会话并发缺陷。用户正在经历 2026.9.x 版本带来的生产级稳定性问题，高评论量表明社区正在积极 Debug 并寻找临时解决方案。

---

## 5. 缺陷与稳定性

### 严重（P0）— 需要立即处理

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | Windows 更新候选快照失败；SQLite 超时 | P0 / 用户体验发布阻塞 | Open |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway 到达 ready 状态但无法提供服务；事件循环饥饿（632 个 agent 集群） | P0 / 崩溃循环 | Open |
| [#146394](https://github.com/openclaw/openclaw/issues/146394) | 更新失败：global-install-failed（2026.9.3） | P0 / 用户体验发布阻塞 | Open |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | [追踪] 2026.9.3 / 2026.9.4 更新/升级可靠性 | P0 | Open |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) | npm update 针对 schema-17 候选状态运行 2026.9.3 | P0 | Open |
| [#148681](https://github.com/openclaw/openclaw/issues/148681) | 更新失败：finalize:doctor（2026.9.4） | P0 / 用户体验发布阻塞 | Open |
| [#146719](https://github.com/openclaw/openclaw/issues/146719) | Windows：candidate-snapshot mkdir 因未展开的 OPENCLAW_STATE_DIR 失败 | P0 | Open |

### 高优先级（P1）— 重大影响

| Issue | 标题 | 影响 |
|-------|------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏 → 僵尸进程累积 | 崩溃循环、消息丢失 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 从 350MB 增长到 15.5GB（内存泄漏） | OOM 崩溃 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP 服务器初始化超时导致 Gateway 崩溃 | 崩溃循环 |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 并发会话负载下产生重复回复 | 消息丢失 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | 混合终端批次无限重试 | 会话状态异常 |

**修复 PR 状态：** 未发现针对严重更新失败问题的修复 PR；这些问题似乎需要维护者介入处理。

---

## 6. 功能请求与路线图信号

### 值得注意的功能请求

| Issue | 标题 | 优先级 |
|-------|------|--------|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) | **[功能]：** 无 AI  harness 的 Gateway-lite 模式，用于确定性部署 | P2 |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | **[功能]：** 添加 A2A 交接的单向分发模式 | P2 |
| [#49259](https://github.com/openclaw/openclaw/issues/49259) | **[功能]：** 从仪表板清理陈旧的孤立会话 | P3 |
| [#44291](https://github.com/openclaw/openclaw/issues/44291) | **[功能]：** 添加原生 PowerShell 覆盖率 | P3 |
| [#76247](https://github.com/openclaw/openclaw/issues/76247) | **[功能]：** 原生分发着陆 ACK / 接收方入口遥测 | P3 |

**信号分析：** 社区对轻量级/非 AI 部署模式（#86881）和增强可观测性（#76247）的兴趣，表明对企业级和生产强化功能的需求。单向分发请求（#44309）表明存在 fire-and-forget agent 工作流的使用场景。

---

## 7. 用户反馈总结

### 真实用户痛点

1. **更新/升级失败（反馈最多）：** 多位用户报告升级到 2026.9.3/2026.9.4 时出现候选快照、mkdir 或 Doctor 错误 — 阻塞了生产环境更新。
2. **资源泄漏：** Gateway 内存泄漏（350MB → 15.5GB）和子进程僵尸累积导致运行时数天后出现生产故障。
3. **会话并发缺陷：** 重复回复和并发车道分发问题在高负载场景下导致消息丢失。
4. **Windows 平台问题：** 更新失败特别影响 Windows 用户，涉及超长路径和 SQLite 超时。
5. **ARM64 性能：** Raspberry Pi 用户报告每个 agent 轮次 CPU 占用接近 100%。

### 用户满意度信号
- 今天没有出现正面满意度指标的 issue；所有高评论 issue 都代表缺陷或阻塞问题。
- WebUI 性能研究（#149361）显示团队正在持续投资用户界面稳定性。

---

## 8. 待办事项关注

### 长期未回应但重要的 Issue

| Issue | 标题 | 存在时长 | 需要 |
|-------|------|----------|------|
| [#86881](https://github.com/openclaw/openclaw/issues/86881) | Gateway-lite 模式功能请求 | 约 4 个月 | 产品决策 |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | A2A 单向分发 | 约 6 个月 | 产品决策 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | 内存文件监听器永不重新索引 | 约 1.5 个月 | 信息 / 现场复现 |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | Gateway 每次启动都重新获取重新索引锁 | 约 2 周 | 维护者审查 |

**需要采取的行动：** 这些 issue 最近几周评论数为 0–1 条，需要产品决策或维护者分类才能推进。

---

*双周报基于 OpenClaw GitHub 数据生成 — 2026-09-17*

---

## 横向生态对比

<think>The user wants me to translate this entire cross-project ecosystem comparison report into Simplified Chinese. I need to:
1. Translate all the text content (headings, body, table content) into Chinese
2. Keep all Markdown structure (tables, headings, lists, bold, etc.)
3. Keep all technical identifiers, project names, URLs, numbers, dates, code references as-is
4. Use natural technical Chinese register

Let me go through the document section by section.

---

# Cross-Project Ecosystem Comparison — 2026-09-17

Translation: # 跨项目生态对比 — 2026年9月17日

---

## 1. Ecosystem Overview

Translation: ## 1. 生态概览

The personal AI assistant and agent open-source landscape remains highly active across all major projects, with collective development showing strong iteration cycles. **OpenClaw** dominates in absolute volume (500+ items/day), while **ZeroClaw** and **QwenPaw** show concentrated feature development around enterprise and multi-tenant capabilities. **Hermes Agent** maintains balanced throughput with good issue-resolution ratios. **IronClaw** appears dormant with no recent activity. The sector is transitioning from single-user assistants toward team/multi-tenant deployments, with significant investment in reliability hardening, security enforcement, and plugin architectures.

Translation: 个人AI助手与Agent开源领域在主要项目中保持高度活跃，呈现强劲的迭代周期。**OpenClaw**在绝对数量上占据主导（500+条/日），而**ZeroClaw**和**QwenPaw**围绕企业级和多租户能力进行功能集中开发。**Hermes Agent**保持均衡的吞吐量和良好的问题解决率。**IronClaw**似乎处于休眠状态，没有近期活动。该领域正在从单一用户助手向团队/多租户部署转型，大量投入于可靠性加固、安全防护和插件架构。

---

## 2. Activity Comparison

Translation: ## 2. 活跃度对比


| Project | Issues Updated (24h) | Open Issues | Closed Issues | PRs Updated (24h) | Open PRs | Merged/Closed PRs | Releases (24h) | Health Score |
|---------|---------------------|-------------|---------------|--------------------|----------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 323 | 177 | 500 | 287 | 213 | 0 | ⚠️ High volume, P0 instability |
| **Hermes Agent** | 50 | 11 |

I can see a clear activity breakdown showing OpenClaw leads in both issues and PRs with 500 updates in 24 hours, while Hermes Agent shows more modest engagement with 50 issues. The data reveals OpenClaw faces significant P0-level instability despite its high volume, whereas Hermes Agent demonstrates more balanced metrics across open and closed items.

| **Hermes Agent** | 50 | 11 | 39 | 50 | 31 | 19 | 0 | ✅ Good throughput |
| **IronClaw** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ❌ Dormant |
| **QwenPaw** | 25 | 13 | 12 | 37 | 25 | 12 | 0 | ✅ Active dev |
| **ZeroClaw** | 36 | 35 | 1 | 50 | 47 | 3 | 0 | ⚠️ High volume, many open |

| 项目 | 24小时内更新的Issue | 待处理Issue | 已关闭Issue | 24小时内更新的PR | 待处理PR | 已合并/关闭的PR | 24小时内发布 | 健康度 |
|---------|---------------------|-------------|---------------|--------------------|----------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 323 | 177 | 500 | 287 | 213 | 0 | ⚠️ 高

IronClaw shows complete inactivity with zero across all metrics, while QwenPaw and ZeroClaw both display active development patterns but with different characteristics—QwenPaw maintains a more balanced ratio between open and closed work, whereas ZeroClaw has a high volume of open pull requests.

Now examining OpenClaw's position reveals significant strengths across several dimensions. It dominates in sheer activity volume at 500 items daily compared to Hermes Agent's 50 and QwenPaw's moderate output. The project has reached a mature stage with v1.x stability, whereas Hermes Agent and ZeroClaw are still in active development phases. OpenClaw also boasts the largest community engagement, with 8 issues exceeding 30 comments, substantially outpacing the others. Its release cadence is notably frequent with the ongoing 2026.9.x series updates.

Looking at technical approaches, each project takes distinctly different paths. OpenClaw emphasizes update reliability and schema migration through MCP integration and plugin system development—indicating a platform-focused strategy. Hermes Agent prioritizes session isolation, MoA transparency, and cron/kanban automation to ensure multi-session correctness. QwenPaw centers on consumer desktop usability with WebUI, voice chat, and Hub multi-tenant functionality as a more user-centric product. ZeroClaw distinguishes itself through enterprise-grade security measures including RPC authentication and plugin payload validation, targeting DevOps and SRE workflows.

Across these projects, several shared technical requirements emerge. Memory and resource leak fixes appear consistently—Gateway memory exhaustion, child process zombies, and image cache eviction plague OpenClaw, Hermes Agent, and QwenPaw alike. Multi-tenant capabilities are actively being built out, with Hub systems, member governance, and usage dashboards in development. Security and validation concerns drive work on OpenClaw and ZeroClaw, while session and concurrency correctness dominates Hermes Agent and OpenClaw discussions. Platform reliability remains critical across Hermes Agent's Telegram integration, OpenClaw's Windows support, and QwenPaw's operations. Context and token management present challenges for QwenPaw, Hermes Agent, and ZeroClaw as they scale.

Memory management emerges as the universal pain point—every project is wrestling with resource leaks and context inflation. Multi-tenant features are appearing across the board, signaling market demand for team deployments. Security hardening is particularly prominent in OpenClaw and ZeroClaw, suggesting enterprise adoption requires a security-first approach. Token economics are becoming a driving architectural concern as teams tackle context limits and accounting.

The platform landscape shows OpenClaw leading in volume with 500 items daily, Hermes Agent maintaining steady development around 50 items, and ZeroClaw aggressively pursuing pre-1.0 features. Each targets distinct user segments: QwenPaw serves consumers with voice and WebUI, OpenClaw appeals to developers through MCP and plugins, ZeroClaw targets DevOps with SOPs and security, and Hermes Agent focuses on power users managing multiple sessions. Rapid iteration projects like OpenClaw and ZeroClaw show 300-500 items daily with strong contributor engagement, while stable development efforts maintain healthy close rates.

Across projects, I'm noticing memory management emerges as the universal pain point, multi-tenant capabilities are becoming standard rather than optional, and security hardening is now non-negotiable for enterprise adoption. Context management remains technically challenging, browser and tool automation features are expanding rapidly, and design governance is maturing through formal review processes. This suggests personal assistant tools are plateauing while team-oriented features are driving the next wave of innovation.</think>

# 跨项目生态对比 — 2026年9月17日

## 1. 生态概览

个人AI助手与Agent开源领域在主要项目中保持高度活跃，呈现强劲的迭代周期。**OpenClaw**在绝对数量上占据主导（500+条/日），而**ZeroClaw**和**QwenPaw**围绕企业级和多租户能力进行功能集中开发。**Hermes Agent**保持均衡的吞吐量和良好的问题解决率。**IronClaw**似乎处于休眠状态，没有近期活动。该领域正在从单一用户助手向团队/多租户部署转型，大量投入于可靠性加固、安全防护和插件架构。

---

## 2. 活跃度对比

| 项目 | 24小时内更新的Issue | 待处理Issue | 已关闭Issue | 24小时内更新的PR | 待处理PR | 已合并/关闭的PR | 24小时内发布 | 健康度 |
|---------|---------------------|-------------|---------------|--------------------|----------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 323 | 177 | 500 | 287 | 213 | 0 | ⚠️ 高频活跃，P0级不稳定 |
| **Hermes Agent** | 50 | 11 | 39 | 50 | 31 | 19 | 0 | ✅ 吞吐量良好 |
| **IronClaw** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | ❌ 休眠 |
| **QwenPaw** | 25 | 13 | 12 | 37 | 25 | 12 | 0 | ✅ 活跃开发中 |
| **ZeroClaw** | 36 | 35 | 1 | 50 | 47 | 3 | 0 | ⚠️ 高频活跃，大量待处理 |

---

## 3. OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **规模** | 主导（500条/日） | 中等（50） | 中等（25→37） | 较高（36→50） |
| **成熟度** | 成熟，v1.x 稳定 | v0.21.x 活跃开发中 | v2.2.0 开发中 | 早期（pre-1.0） |
| **社区** | 最大（8条Issue 30+评论） | 活跃（会话问题） | Hub导向（29条评论） | 设计导向 |
| **发布节奏** | 频繁（2026.9.x系列） | 活跃（v0.21.x） | 即将发布 v2.2.0 | Pre-1.0 |

### 技术路线差异

- **OpenClaw** 优先保障更新可靠性和schema迁移，积极推进MCP集成和插件系统。代码库规模大（500条/日），表明走平台化路线。
- **Hermes Agent** 专注于会话隔离、MoA（Mixture of Agents）透明度和定时/看板任务编排——强调多会话正确性。
- **QwenPaw** 面向消费者桌面用户，提供WebUI、语音聊天和Hub多租户系统——更侧重终端用户体验。
- **ZeroClaw** 追求企业级安全（RPC认证、插件负载验证、安全公告）和SOP自动化——面向DevOps/SRE工作流。

---

## 4. 共同技术关注点

### 跨项目需求

| 关注领域 | 相关项目 | 具体需求 |
|------------|----------|----------|
| **内存/资源泄漏修复** | OpenClaw, Hermes Agent, QwenPaw | 网关内存耗尽、子进程僵尸、图像缓存驱逐 |
| **多租户/团队部署** | QwenPaw, Hermes Agent, ZeroClaw | Hub系统、成员治理、使用量仪表盘 |
| **插件安全与验证** | OpenClaw, ZeroClaw | 精确负载字节、shell逃逸、认证主体 |
| **会话/并发正确性** | Hermes Agent, OpenClaw | 会话隔离、重复回复、并发lane调度 |
| **平台可靠性** | Hermes Agent（Telegram）、OpenClaw（Windows）、QwenPaw | 平台回归修复、API兼容性 |
| **上下文/Token管理** | QwenPaw, Hermes Agent, ZeroClaw | 上下文大小限制、Token核算、历史裁剪 |

### 观察

- **内存管理** 是普遍痛点——每个项目都在修复资源泄漏或上下文膨胀。
- **多租户功能** 正在各项目中涌现，表明市场对团队部署有强烈需求。
- **安全加固**（认证、负载验证）在OpenClaw和ZeroClaw中尤为突出。

---

## 5. 差异化分析

### 功能定位

| 项目 | 核心焦点 | 目标用户 | 架构特点 |
|---------|---------------|-------------|--------------|
| **OpenClaw** | MCP集成、schema迁移、插件生命周期 | 开发者、企业 | 网关中心化、npm生态 |
| **Hermes Agent** | 会话隔离、MoA透明化、定时/看板自动化 | 高级用户、自动化团队 | Agent优先、事件驱动 |
| **QwenPaw** | 桌面UI、语音聊天、Hub多租户 | 消费者/小团队 | WebUI优先、移动端友好 |
| **ZeroClaw** | 安全加固、SOP自动化、OCI注册表 | DevOps、SRE、企业 | Rust原生、RPC中心化 |

### 目标用户细分

- **消费者/专业消费者**：QwenPaw（语音、WebUI、易用性）
- **开发者/平台**：OpenClaw（MCP、插件、schema管理）
- **自动化/SRE**：ZeroClaw（SOP、安全、执行预算）
- **多会话运维者**：Hermes Agent（会话正确性、定时任务）

---

## 6. 社区活力与成熟度

### 活跃度层级

| 层级 | 项目 | 特征 |
|------|----------|------------------|
| **快速迭代** | OpenClaw, ZeroClaw | 300-500条/日，大量开放PR，贡献者规模大 |
| **稳定开发** | Hermes Agent, QwenPaw | 25-50条/日，健康的问题关闭率，路线图清晰 |
| **休眠** | IronClaw | 无活动，可能已停止维护 |

### 成熟度评估

- **OpenClaw**：成熟平台，正在应对规模挑战（更新可靠性、Windows支持）。V1发布后进入稳定阶段。
- **Hermes Agent**：中等成熟度，正积极巩固v0.21.x，聚焦安全与会话正确性。
- **QwenPaw**：V2.2.0发布前，增长阶段——Hub功能表明正在从个人向团队使用拓展。
- **ZeroClaw**：早期阶段（pre-1.0），高活跃度但多项架构决策待定（RFC、维护者队列）。

---

## 7. 趋势信号

### 行业趋势（来自社区反馈）

| 趋势 | 证据 | 启示 |
|------------|----------|--------------|
| **多租户是下一前沿** | QwenPaw Hub（29条评论）、Hermes Agent团队讨论、ZeroClaw治理功能 | 个人助手 → 团队平台 |
| **可靠性优先于功能** | OpenClaw P0级更新失败、Hermes Agent Telegram回归、QwenPaw内存耗尽 | 生产级加固是首要任务 |
| **安全是不可妥协的** | ZeroClaw RPC认证、OpenClaw shell逃逸、Hermes Agent供应链（WhatsApp） | 企业采用需要安全优先 |
| **上下文管理很难** | QwenPaw上下文限制被忽视、Hermes Agent提示缓存、ZeroClaw Token核算 | Token经济驱动架构 |
| **浏览器/自动化工具扩展** | QwenPaw web_research、ZeroClaw浏览器注册、OpenClaw MCP | Agent ↔ 工具集成加深 |
| **设计流程规范化** | ZeroClaw维护者队列（15条评论）、Hermes Agent RFC追踪 | 项目治理走向成熟 |

### AI Agent开发者的价值洞察

1. **不成熟不发布**：生态表明对团队部署有强烈需求——单一助手已趋于平稳。
2. **修不好内存就流失用户**：资源泄漏是所有项目中的首要投诉。
3. **安全是卖点**：ZeroClaw的安全优先路线和OpenClaw的加固工作获得了关注。
4. **会话正确性是难点**：并发会话隔离尚未解决——差异化实现存在机会。
5. **可观测性很重要**：Token核算、使用量仪表盘、上下文透明度是各项目都在需求的功能。

---

*跨项目分析基于2026年9月17日GitHub活跃数据。分析项目：OpenClaw、Hermes Agent、IronClaw、QwenPaw、ZeroClaw。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR numbers verbatim
4. Keep technical identifiers (repo names, usernames, version tags, file paths, API/config names) in their original form
5. Use natural technical Chinese, register of a Chinese developer newsletter

Let me translate section by section, maintaining the exact structure:

## 1. Today's Overview
→ 今日概览

## 2. Releases
→ 版本发布

## 3. Project Progress
→ 项目进展

## 4. Community Hot Topics
→ 社区热点

## 5. Bugs & Stability
→ Bug 与稳定性

## 6. Feature Requests & Roadmap Signals
→ 功能请求与路线图信号

## 7. User Feedback Summary
→ 用户反馈摘要

## 8. Backlog Watch
→ 待办事项关注

Let me go through and translate each part carefully:</think>

# Hermes Agent 项目摘要 — 2026-09-17

## 1. 今日概览

2026年9月17日，Hermes Agent 展现出高开发活跃度，过去24小时内有50个 issue 和 50 个 PR 更新。该项目关闭了 39 个 issue 和 19 个 PR，表明其具备强劲的问题解决能力。今日无新版本发布。Issue 分布显示出在会话隔离、回退提供商机制、平台集成（Telegram、Discord、Feishu）以及 Desktop UI 优化方面的活跃工作。一个 P0 PR 正在处理提供商限额时的图片驱逐以保留 Anthropic prompt-cache 前缀。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时内项目未发布任何版本。

---

## 3. 项目进展

### 已合并/关闭的 PR（19 个）

| PR | 标题 | 组件 |
|---|---|---|
| [#113213](https://github.com/NousResearch/hermes-agent/pull/113213) | fix(installer): Setup app and desktop install logs no longer show ANSI escape garbage | installer |
| [#113211](https://github.com/NousResearch/hermes-agent/pull/113211) | fix(sessions): one-shot runs launched from TUI/Desktop no longer persist as tui chats | agent, cli |
| [#113210](https://github.com/NousResearch/hermes-agent/pull/113210) | fix(cli): /branch, /resume and /sessions refuse to switch mid-turn | cli |
| [#113208](https://github.com/NousResearch/hermes-agent/pull/113208) | docs(kanban): ready card held by active_pr recovered through review lane | cron |
| [#113205](https://github.com/NousResearch/hermes-agent/pull/113205) | fix(kanban): worker guidance applies only to the owning worker | agent, cron |
| [#113204](https://github.com/NousResearch/hermes-agent/pull/113204) | fix(agent): system watchdog interrupts attributed to their issuer | agent, gateway, cron |
| [#113202](https://github.com/NousResearch/hermes-agent/pull/113202) | fix(gateway): multi-question clarify stops at first unanswered question | gateway |
| [#113201](https://github.com/NousResearch/hermes-agent/pull/113201) | fix(desktop): pasted PR-comment deep link lands as text | desktop |
| [#113200](https://github.com/NousResearch/hermes-agent/pull/113200) | fix(desktop): Windows exe identity stamp survives rcedit lock | desktop |
| [#113199](https://github.com/NousResearch/hermes-agent/pull/113199) | fix(desktop): reloading plugin no longer leaks gateway-event listeners | desktop |
| [#113198](https://github.com/NousResearch/hermes-agent/pull/113198) | fix(desktop): inline message edit stays open after clicking sent message | desktop |

### 待合并的 PR（31 个）

| PR | 标题 | 优先级 |
|---|---|---|
| [#113619](https://github.com/NousResearch/hermes-agent/pull/113619) | fix(agent): evict images at provider limits to preserve prompt-cache prefix | **P0** |
| [#113618](https://github.com/NousResearch/hermes-agent/issues/113618) | Telegram stall watchdog rebuilds but never recovers | P1 |
| [#113636](https://github.com/NousResearch/hermes-agent/pull/113636) | fmt(js): npm run fix auto-fix | — |
| [#113635](https://github.com/NousResearch/hermes-agent/pull/113635) | catalog: add hud-teach | — |
| [#113617](https://github.com/NousResearch/hermes-agent/pull/113617) | fix(feishu): infer union_id receive type from on_ prefix | — |
| [#113634](https://github.com/NousResearch/hermes-agent/pull/113634) | fix(desktop/tips): retire local-runtime-update tip on dismiss | — |
| [#113633](https://github.com/NousResearch/hermes-agent/pull/113633) | fix(discord): persist unthreaded recovery replies | — |
| [#113556](https://github.com/NousResearch/hermes-agent/pull/113556) | fix(gateway): keep multiplexed direct platforms awake | P2 |
| [#112944](https://github.com/NousResearch/hermes-agent/pull/112944) | fix(desktop): guard Escape's edit-composer cancel against torn-down core | — |
| [#113551](https://github.com/NousResearch/hermes-agent/pull/113551) | fix(desktop): grant local-network permission for macOS 27+ | P2 |

---

## 4. 社区热点

### 按评论数排名的最活跃 Issue

| Issue | 标题 | 评论数 | 状态 |
|---|---|---|---|
| [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Bug: Concurrent sessions cross-contaminate (shared memory injection + shared git worktree) | **8** | OPEN |
| [#54509](https://github.com/NousResearch/hermes-agent/issues/54509) | WebUI model badge does not reflect runtime model during fallback activation | 3 | OPEN |
| [#112623](https://github.com/NousResearch/hermes-agent/issues/112623) | Bug: fallback to provider=moa leaves agent.provider as virtual "moa" | 3 | CLOSED |
| [#112359](https://github.com/NousResearch/hermes-agent/issues/112359) | MoA UX: make it obvious the aggregator slot is the acting model that gets billed | 3 | CLOSED |
| [#112382](https://github.com/NousResearch/hermes-agent/issues/112382) | WhatsApp bridge body-parser override pins vulnerable version (1.20.6) — 3 moderate npm advisories | 3 | CLOSED |

### 分析

**会话隔离**（#46303）是最受关注的话题，反映出用户对并发会话安全性的担忧——这对多会话用户来说是一个关键的正确性问题。**MoA（混合智能体）用户体验** 讨论串（#112359、#112623、#112525）表明，用户强烈要求在发生回退时对计费和运行时模型有更高的透明度。**WhatsApp 安全公告**（#112382）显示了对供应链安全的关注。

---

## 5. Bug 与稳定性

### 本日报告的 Bug（按严重程度排序）

| Issue | 标题 | 优先级 | 修复 PR？ |
|---|---|---|---|
| [#113618](https://github.com/NousResearch/hermes-agent/issues/113618) | Telegram stall watchdog rebuilds the poller but never recovers; gateway stays connected and deaf until restart | **P1** | 否 |
| [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions cross-contaminate (shared memory injection + shared git worktree) | P2 | 否 |
| [#113611](https://github.com/NousResearch/hermes-agent/issues/113611) | kanban respawn guard does not cover repeated clean-exit-without-transition — 16 consecutive respawns | P3 | 否 |
| [#113610](https://github.com/NousResearch/hermes-agent/issues/113610) | kanban run row stays 'running' after worker exits rc=0 with no terminal transition | P3 | 否 |
| [#113608](https://github.com/NousResearch/hermes-agent/issues/113608) | cron: bot-chat delivery books a completed turn as a 600s timeout | P3 | 否 |
| [#113609](https://github.com/NousResearch/hermes-agent/issues/113609) | kanban auto-heartbeat bridge silently fails for workers inheriting HERMES_DELEGATED_CHILD_CONTEXT | P3 | 否 |
| [#113031](https://github.com/NousResearch/hermes-agent/issues/113031) | [Bug] NO_REPLY silence marker on heartbeat turns rejected by human-silence guard (warning spam) | P1 | 否 |
| [#112473](https://github.com/NousResearch/hermes-agent/issues/112473) | Oversize request rejections reported as HTTP 400 bypass image-shrink recovery | P2 | 否 |

### 稳定性说明

- **Telegram 网关回归**：Issue #113618 报告 v0.21.3 引入的 stall watchdog bug 导致网关在 171 秒无进展后"失聪"，需要重启进程。这对生产环境中的 Telegram 部署来说是 **P1 可靠性问题**。
- **安全公告待处理**：WhatsApp 桥接器使用存在漏洞的 `body-parser@1.20.6` 版本，有 3 个中等严重程度的 npm 公告（#112382）。
- **Cron/kanban 边缘情况**：今日提交了多个 P3 kanban 和 cron bug，表明任务自动化层的使用量在增长，但退出条件处理尚不完善。

---

## 6. 功能请求与路线图信号

### 值得注意的功能请求

| Issue | 标题 | 优先级 |
|---|---|---|
| [#112359](https://github.com/NousResearch/hermes-agent/issues/112359) | MoA UX: make it obvious the aggregator slot is the acting model that gets billed | P2 |
| [#54509](https://github.com/NousResearch/hermes-agent/issues/54509) | WebUI model badge does not reflect runtime model during fallback activation | P3 |
| [#112426](https://github.com/NousResearch/hermes-agent/issues/112426) | Cron: no way for an agent run to report failure — delegated child failures recorded as success | P3 |

### 路线图信号

**MoA（混合智能体）用户体验改进**（#112359、#112623、#112525、#54509）的集中出现表明该功能正在为生产使用进行强化。P0 PR [#113619](https://github.com/NousResearch/hermes-agent/pull/113619)（在提供商限额时驱逐图片以保留 prompt-cache 前缀）表明正在进行 Anthropic 提供商成本优化工作——这可能是下一个次版本发布的候选内容。

---

## 7. 用户反馈摘要

### 发现的痛点

1. **会话隔离失败**：运行并发 Desktop 会话的用户通过共享内存注入和共享 git worktree 体验到交叉污染（#46303）。这破坏了多租户或多项目工作流程。
2. **MoA 计费不透明**：按量订阅的用户（如 Codex）无法确定 MoA 堆栈中哪个模型正在计费，导致困惑和意外费用（#112359）。
3. **Telegram 可靠性回归**：v0.21.3 上的生产 Telegram 部署在短暂卡顿后出现完全的消息传递故障，需要手动重启（#113618）。
4. **Desktop UX 回归**：消息编辑困难（#112935）、GitHub 链接的粘贴处理程序回归（#112479）以及会话状态显示错误（#113029）表明近期的 Desktop 改进引入了用户摩擦。

### 积极信号

- 社区对安全问题的积极参与（#112382）表明漏洞处理是负责任的。
- kanban 恢复文档的改进（#113208）反映了对运维工作流的响应能力。

---

## 8. 待办事项关注

### 长期未解决的重要 Issue

| Issue | 标题 | 存在时间 | 状态 |
|---|---|---|---|
| [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions cross-contaminate | 约 3 个月（2026-06-14） | OPEN，8 条评论 |
| [#54509](https://github.com/NousResearch/hermes-agent/issues/54509) | WebUI model badge does not reflect runtime model | 约 3 个月（2026-06-28） | OPEN，3 条评论 |

### 缺乏维护者关注的 Issue

- **会话隔离**（#46303）：自 6 月以来处于开放状态的高严重程度 bug，有 8 条评论但尚无分配的修复 PR。对多会话用户至关重要。
- **WhatsApp 安全**（#112382）：自 2026-09-15 起有 3 个中等严重程度的 npm 公告待处理；尚无修复 PR。
- **Telegram P1 回归**（#113618）：今日提交，暂无分配者；对生产部署紧急。

---

*摘要基于 2026-09-17 的 GitHub 数据生成。所有链接指向 NousResearch/hermes-agent。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all headings
2. Translate all body text
3. Keep all markdown structure exactly as-is
4. Keep URLs, issue numbers, code, technical terms, project names, etc. in their original form
5. Use natural technical Chinese register

Let me go through and translate:

---

# QwenPaw 项目简报 — 2026-09-17

## 1. 今日概览

QwenPaw 今天显示出**较高的开发活跃度**，过去 24 小时内有 25 个 issue 和 37 个 PR 更新。项目正处于**功能丰富阶段**——多项重大改进正在审核中，包括实时语音聊天、统一聊天工作台 shell 以及 Hub 多租户系统。过去 24 小时内没有发布新版本。Issue 组合表明 v2.2.x 的稳定工作与为即将到来的 2.2.0 Hub 版本开展的前瞻性功能开发并行进行。社区参与度很高，QwenPaw Hub 讨论收到了 29 条评论。

---

## 2. 版本发布

过去 24 小时内**没有新版本**发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（共计 12 个）

| PR | 标题 | 状态 |
|----|-------|--------|
| [#7120](https://github.com/agentscope-ai/QwenPaw/pull/7120) | security: enable shell evasion checks by default | 已关闭 |
| [#7783](https://github.com/agentscope-ai/QwenPaw/pull/7783) | fix(ACP): Improves delegation to external ACP runners | 已关闭 |


| [#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569) | fix(console): suppress EIO/EPIPE print errors after detached TTY | 已关闭 |
| [#7805](https://github.com/agentscope-ai/QwenPaw/pull/7805) | fix: match settings menu font weight | 已关闭 |

### 推进中的关键 PR（审核中/就绪）

| PR | 标题 | 状态 |
|----|-------|--------|
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | feat(voice): add realtime voice chat | 开

放中 |
| [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) | feat(console): add unified chat workbench shell | 开放中 |
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | feat(hub): add model gateway, member governance and usage dashboard | 开放中 |
| [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | fix(workspace): replace blocking watchfiles.awatch with threaded polling | 开放中 |
| [#7816](https://github.com/agentscope-ai/QwenPaw/pull/7816) | fix(pack): force-include console channel in PyInstaller bundle | 开放中 |
| [#7811](https://github.com/agentscope-ai/QwenPaw/pull/7811) | fix(token-usage): show measured context size in chat context ring | 开放中 |
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | fix: avoid duplicate tool result when MCP returns structuredContent | 开放中 |
| [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) | fix(shell): add user-local bin dirs to subprocess PATH | 开放中 |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | fix(browser): self-heal dead Playwright driver connections | 开放中 |
| [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) | feat(qwenpaw-data): QwenPaw-Data app 0.3.0 | 开放中 |

## 4. 社区热点话题

### 活跃度最高的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 表情 |
|-------|-------|----------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | [讨论] QwenPaw Hub 多租户版即将上线 2.2.0：接下来我们应该做什么？ | 29 | 👍 4 |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | [Bug]: spawn subAgent — 任务因超时失败 | 9 | — |
| [#

7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | [Bug]: 内存耗尽通过三条路径叠加 | 5 | — |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console 在加载延迟页面块失败后无法恢复 | 4 | — |
| [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) | [Bug]: Console 仍然无法显示通过 send_file_to_user 发送的图片（疑似 #5320 复发） | 4 | — |

### 分析

- **QwenPaw Hub (#7318)** 是主要讨论话题——团队正在向社区征集 2.2.0 版多租户 Hub 的需求建议。这反映了社区对团队/企业部署功能的强烈需求

，目前的定位是个人助手模型。
- **SubAgent 超时问题 (#7678)** 表明 Agent 生成存在系统性问题，影响可靠性。
- **内存耗尽 (#7722)** 是关键稳定性问题，涉及三条叠加路径——表明团队正在深入调查根本原因。

---

## 5. Bug 与稳定性

### 严重/高优先级

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|-------|----------|---------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 内存耗尽：无限制的流缓冲区、keep-alive 堆叠、doom-loop gate 规避 | **高** | — |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | SubAgent 生成导致持续的超时失败 | **高** | — |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | Console 流在 SSE 帧载荷为纯 `null` 字面量时冻结 | **中** | — |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | SSE: _strip_event_headlines 发出纯 null；stream_one 在失败时不发送终端事件 | **中** | — |

### 中等/低优先级

| Issue | 标题 | 严重程度 |
|-------|-------|----------|
| [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) | Console 无法显示通过 send_file_to_user 发送的图片（复发） | 中等 |
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | PDF 文档块在 #7621 后仍被发送到多模态端点 | 中等 |
| [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | 微信视频/音频附件变成无效的 file:// URL → 400 错误 | 中等 |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console 无法从延迟页面加载失败中恢复 | 低 |
| [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) | 启动后立即输入斜杠命令会作用于 fallback session | 低 |

---

## 6. 功能需求与路线图信号

### 开发中的功能

| Issue/PR | 功能 | 信号 |
|----------|---------|--------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **QwenPaw Hub（多租户）** | 已确认用于 2.2.0；正在征集社区意见 |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | **实时语音聊天** | 正在积极开发 |
| [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) | **统一聊天工作台 shell** | 正在积极开发 |
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | **Hub 模型网关、成员治理、使用量仪表板** | 正在积极开发 |
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | **官方主题支持**（强调色、字体、间距） | 增强功能请求 |
| [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | **工具审批 i18n** — 硬编码的英文字符卡 | 功能请求 |
| [#7801](https://github.com/agentscope-ai/QwenPaw/issues/7801) | **聊天模式选择器** — Discuss vs Execute | 功能请求 |
| [#7797](https://github.com/agentscope-ai/QwenPaw/issues/7797) | **过滤输出产物** — 排除中间/临时文件 | 增强功能请求 |
| [#7800](https://github.com/agentscope-ai/QwenPaw/issues/7800) | **任务完成通知** — 底部栏视觉指示器（橙色） | 增强功能请求 |

### 可能即将新增的功能

根据活跃的 PR 和讨论热度：
1. **Hub 多租户系统** — 2.2.0 版本的确定性很高
2. **实时语音聊天** — 正在积极开发，可能很快推出
3. **上下文大小准确性修复** (#7811 merged) — 解决了用户的痛点
4. **Playwright 自动恢复** (#6776) — 提升浏览器稳定性

---

## 7. 用户反馈总结

### 已识别的痛点

| 类别 | Issue | 用户声音 |
|----------|-------|------------|
| **上下文管理** | 限制未生效；上下文膨胀至 271k，尽管设置了 131k；压缩未触发 | "每次提交会话都是 271k 这个问题...到底在哪设置？" (#7810) |
| **多租户/团队使用** | 反复请求团队部署；当前设置仅限单人使用 | "started as a personal AI assistant, but community repeatedly asked for a better way to run it for a team" (#7318) |
| **图片显示** | 图片在流式输出结束后消失；仅短暂可见 | "只在流式输出期间短暂显示该图片...图片消失" (#7799) |
| **MCP 工具** | 通道参数无法传递给 MCP 工具；LLM 重写存在风险 | "LLM 来传，会有被改写的风险" (#7650) |
| **内存/稳定性** | 生产环境中内存耗尽；三条路径叠加 | "Container memory exhaustion (fills at ~1MB/s)" (#7722) |
| **离线回退** | 插件目录失败后未回退到记录的离线状态 | "escape the documented offline fallback" (#7730) |

### 满意度信号
- **Hub 引发热议**：29 条评论和路线图讨论的积极参与 (#7318)
- **安全加固**：Shell  evasion 检查现已默认启用 (#7120) — 积极的安全态势

---

## 8. 待办事项关注

### 需要维护者关注的 Issue（较旧/停滞）

| Issue | 标题 | 存在时间 | 状态 |
|-------|-------|-----|--------|
| [#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472) | JSON 文件在编程模式下不显示行号（2.0.1 升级后） | 约 2 个月 | 开放中 |
| [#7326](https://github.com/agentscope-ai/QwenPaw/issues/7326) | （与多用户访问请求相关） | — | — |

### 等待审核的高价值 PR

| PR | 标题 | 状态 |
|----|-------|--------|
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | feat: add memory-distill tool plugin with title-diffing engine | 审核中 |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | feat(memory): add OpenViking memory plugin | 审核中 |
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | fix: avoid duplicate tool result when MCP returns structuredContent | 审核中 |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | fix(browser): self-heal dead Playwright driver connections | 审核中 |

---

*基于 2026-09-17 的 GitHub 数据生成。所有链接指向 https://github.com/agentscope-ai/QwenPaw。*</think>

# QwenPaw 项目简报 — 2026-09-17

## 1. 今日概览

QwenPaw 今天显示出**较高的开发活跃度**，过去 24 小时内有 25 个 issue 和 37 个 PR 更新。项目正处于**功能丰富阶段**——多项重大改进正在审核中，包括实时语音聊天、统一聊天工作台 shell 以及 Hub 多租户系统。过去 24 小时内没有发布新版本。Issue 组合表明 v2.2.x 的稳定工作与为即将到来的 2.2.0 Hub 版本开展的前瞻性功能开发并行进行。社区参与度很高，QwenPaw Hub 讨论收到了 29 条评论。

---

## 2. 版本发布

过去 24 小时内**没有新版本**发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（共计 12 个）

| PR | 标题 | 状态 |
|----|-------|--------|
| [#7120](https://github.com/agentscope-ai/QwenPaw/pull/7120) | security: enable shell evasion checks by default | 已关闭 |
| [#7783](https://github.com/agentscope-ai/QwenPaw/pull/7783) | fix(ACP): Improves delegation to external ACP runners | 已关闭 |
| [#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569) | fix(console): suppress EIO/EPIPE print errors after detached TTY | 已关闭 |
| [#7805](https://github.com/agentscope-ai/QwenPaw/pull/7805) | fix: match settings menu font weight | 已关闭 |

### 推进中的关键 PR（审核中/就绪）

| PR | 标题 | 状态 |
|----|-------|--------|
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | feat(voice): add realtime voice chat | 开放中 |
| [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) | feat(console): add unified chat workbench shell | 开放中 |
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | feat(hub): add model gateway, member governance and usage dashboard | 开放中 |
| [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | fix(workspace): replace blocking watchfiles.awatch with threaded polling | 开放中 |
| [#7816](https://github.com/agentscope-ai/QwenPaw/pull/7816) | fix(pack): force-include console channel in PyInstaller bundle | 开放中 |
| [#7811](https://github.com/agentscope-ai/QwenPaw/pull/7811) | fix(token-usage): show measured context size in chat context ring | 开放中 |
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | fix: avoid duplicate tool result when MCP returns structuredContent | 开放中 |
| [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) | fix(shell): add user-local bin dirs to subprocess PATH | 开放中 |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | fix(browser): self-heal dead Playwright driver connections | 开放中 |
| [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) | feat(qwenpaw-data): QwenPaw-Data app 0.3.0 | 开放中 |

---

## 4. 社区热点话题

### 活跃度最高的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 表情 |
|-------|-------|----------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | [讨论] QwenPaw Hub 多租户版即将上线 2.2.0：接下来我们应该做什么？ | 29 | 👍 4 |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | [Bug]: spawn subAgent — 任务因超时失败 | 9 | — |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | [Bug]: 内存耗尽通过三条路径叠加 | 5 | — |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console 在加载延迟页面块失败后无法恢复 | 4 | — |
| [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) | [Bug]: Console 仍然无法显示通过 send_file_to_user 发送的图片（疑似 #5320 复发） | 4 | — |

### 分析

- **QwenPaw Hub (#7318)** 是主导话题——团队正在向社区征集 2.2.0 版多租户 Hub 的需求建议。这反映了社区对团队/企业部署功能的强烈需求，超出了当前个人助手模型的定位。
- **SubAgent 超时问题 (#7678)** 表明 Agent 生成存在系统性问题，影响可靠性。
- **内存耗尽 (#7722)** 是关键稳定性问题，涉及三条叠加路径——表明团队正在深入调查根本原因。

---

## 5. Bug 与稳定性

### 严重/高优先级

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|-------|----------|---------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 内存耗尽：无限制的流缓冲区、keep-alive 堆叠、doom-loop gate 规避 | **高** | — |
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | SubAgent 生成导致持续的超时失败 | **高** | — |
| [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | Console 流在 SSE 帧载荷为纯 `null` 字面量时冻结 | **中** | — |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | SSE: _strip_event_headlines 发出纯 null；stream_one 在失败时不发送终端事件 | **中** | — |

### 中等/低优先级

| Issue | 标题 | 严重程度 |
|-------|-------|----------|
| [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) | Console 无法显示通过 send_file_to_user 发送的图片（复发） | 中等 |
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | PDF 文档块在 #7621 后仍被发送到多模态端点 | 中等 |
| [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) | 微信视频/音频附件变成无效的 file:// URL → 400 错误 | 中等 |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console 无法从延迟页面加载失败中恢复 | 低 |
| [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) | 启动后立即输入斜杠命令会作用于 fallback session | 低 |

---

## 6. 功能需求与路线图信号

### 开发中的功能

| Issue/PR | 功能 | 信号 |
|----------|---------|--------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **QwenPaw Hub（多租户）** | 已确认用于 2.2.0；正在征集社区意见 |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | **实时语音聊天** | 正在积极开发 |
| [#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790) | **统一聊天工作台 shell** | 正在积极开发 |
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | **Hub 模型网关、成员治理、使用量仪表板** | 正在积极开发 |
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | **官方主题支持**（强调色、字体、间距） | 增强功能请求 |
| [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | **工具审批 i18n** — 硬编码的英文字符卡 | 功能请求 |
| [#7801](https://github.com/agentscope-ai/QwenPaw/issues/7801) | **聊天模式选择器** — Discuss vs Execute | 功能请求 |
| [#7797](https://github.com/agentscope-ai/QwenPaw/issues/7797) | **过滤输出产物** — 排除中间/临时文件 | 增强功能请求 |
| [#7800](https://github.com/agentscope-ai/QwenPaw/issues/7800) | **任务完成通知** — 底部栏视觉指示器（橙色） | 增强功能请求 |

### 可能即将新增的功能

根据活跃的 PR 和讨论热度：
1. **Hub 多租户系统** — 2.2.0 版本的确定性很高
2. **实时语音聊天** — 正在积极开发，可能很快推出
3. **上下文大小准确性修复** (#7811 已合并) — 解决了用户的痛点
4. **Playwright 自动恢复** (#6776) — 提升浏览器稳定性

---

## 7. 用户反馈总结

### 已识别的痛点

| 类别 | Issue | 用户声音 |
|----------|-------|------------|
| **上下文管理** | 限制未生效；上下文膨胀至 271k，尽管设置了 131k；压缩未触发 | "每次提交会话都是 271k 这个问题...到底在哪设置？" (#7810) |
| **多租户/团队使用** | 反复请求团队部署；当前设置仅限单人使用 | "started as a personal AI assistant, but community repeatedly asked for a better way to run it for a team" (#7318) |
| **图片显示** | 图片在流式输出结束后消失；仅短暂可见 | "只在流式输出期间短暂显示该图片...图片消失" (#7799) |
| **MCP 工具** | 通道参数无法传递给 MCP 工具；LLM 重写存在风险 | "LLM 来传，会有被改写的风险" (#7650) |
| **内存/稳定性** | 生产环境中内存耗尽；三条路径叠加 | "Container memory exhaustion (fills at ~1MB/s)" (#7722) |
| **离线回退** | 插件目录失败后未回退到记录的离线状态 | "escape the documented offline fallback" (#7730) |

### 满意度信号
- **Hub 引发热议**：29 条评论和路线图讨论的积极参与 (#7318)
- **安全加固**：Shell evasion 检查现已默认启用 (#7120) — 积极的安全态势

---

## 8. 待办事项关注

### 需要维护者关注的 Issue（较旧/停滞）

| Issue | 标题 | 存在时间 | 状态 |
|-------|-------|-----|--------|
| [#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472) | JSON 文件在编程模式下不显示行号（2.0.1 升级后） | 约 2 个月 | 开放中 |
| [#7326](https://github.com/agentscope-ai/QwenPaw/issues/7326) | （与多用户访问请求相关） | — | — |

### 等待审核的高价值 PR

| PR | 标题 | 状态 |
|----|-------|--------|
| [#4171](https://github.com/agentscope-ai/QwenPaw/pull/4171) | feat: add memory-distill tool plugin with title-diffing engine | 审核中 |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | feat(memory): add OpenViking memory plugin | 审核中 |
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | fix: avoid duplicate tool result when MCP returns structuredContent | 审核中 |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | fix(browser): self-heal dead Playwright driver connections | 审核中 |

---

*基于 2026-09-17 的 GitHub 数据生成。所有链接指向 https://github.com/agentscope-ai/QwenPaw。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical identifiers (issue numbers, usernames, PR numbers, URLs, code references) unchanged
3. Preserve the markdown structure exactly
4. Use natural technical Chinese register

Let me translate section by section:

## 1. Today's Overview
- 36 issues updated in last 24h → 过去24小时内更新了36个issue
- 35 open/active, 1 closed → 35个开放/活跃，1个已关闭
- 50 PRs updated → 更新了50个PR
- 47 open, 3 merged/closed → 47个开放，3个已合并/关闭
- 0 new releases → 0个新版本

The rest needs careful translation while preserving the structure. Let me go through each section:

## 2. Releases - 版本发布
## 3. Project Progress - 项目进展
## 4. Community Hot Topics - 社区热点话题
## 5. Bugs & Stability - 缺陷与稳定性
## 6. Feature Requests & Roadmap Signals - 功能需求与路线图信号
## 7. User Feedback Summary - 用户反馈摘要
## 8. Backlog Watch - 待办事项关注

I'll translate while keeping all technical terms, usernames, issue numbers, URLs, etc. in their original form.</think>

# ZeroClaw 项目简报 — 2026-09-17

## 1. 今日概览

ZeroClaw 今日呈现**极高的开发活跃度**，过去 24 小时内更新了 36 个 issue 和 50 个 pull request。项目暂无新版本发布，但在多个方向上取得了实质性进展：安全加固（认证、插件 payload 校验）、用户体验改进（ZeroCode UI 整合）以及缺陷修复。开放 issue（35 个）与已关闭（1 个）的比例、以及开放 PR（47 个）与已合并/关闭（3 个）的比例，表明项目正处于活跃的开发周期中，大量变更等待审核或合并。社区围绕 Rust 反垃圾策略技术债务追踪器和维护者决策队列展开了热烈讨论。

---

## 2. 版本发布

**今日无新版本发布。** 版本追踪显示过去 24 小时内未发布任何新版本。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 作者 | 描述 | 规模 |
|----|--------|-------------|------|
| [#10134](https://github.com/zeroclaw-labs/zeroclaw/pull/10134) | JordanTheJet | fix(runtime): keep agent dispatch panic-free | M |

### 推进中的活跃 PR

| PR | 作者 | 描述 | 规模 |
|----|--------|-------------|------|
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | Audacity88 | feat(runtime): coordinate agent lifecycle mutations | XL |
| [#10911](https://github.com/zeroclaw-labs/zeroclaw/pull/10911) | Audacity88 | feat(config): publish atomic live revisions | XL |
| [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) | JordanTheJet | feat(tools): add web_research delegate and scope raw web_search to it | XL |
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | JordanTheJet | feat(zerorelay): relay-terminated browser enrollment frontdoor (phase 1) | XL |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | JordanTheJet | feat(security): enforce authenticated principals on RPC | XL |
| [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) | Audacity88 | fix(channels): restore supervised shell approval routing | XL |
| [#10879](https://github.com/zeroclaw-labs/zeroclaw/pull/10879) | Audacity88 | feat(zerocode): combine Sessions Queue and Plan in one dock | XL |
| [#9283](https://github.com/zeroclaw-labs/zeroclaw/pull/9283) | minato32 | fix(tools): decompress gzip/brotli/deflate web_fetch responses | XL |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | Audacity88 | feat(runtime): enforce execution-tree iteration budgets | XL |
| [#9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) | JordanTheJet | fix(plugins): admit exact component payload bytes | L |
| [#10914](https://github.com/zeroclaw-labs/zeroclaw/pull/10914) | Audacity88 | fix(tools): preserve string arguments during fallback parsing | M |
| [#10913](https://github.com/zeroclaw-labs/zeroclaw/pull/10913) | Audacity88 | test(acp): exercise deliver_file over JSON-RPC | M |
| [#10907](https://github.com/zeroclaw-labs/zeroclaw/pull/10907) | Audacity88 | feat(channels): stamp external ingress provenance | S |

---

## 4. 社区热点话题

### 评论数最多的活跃 Issue

| Issue | 作者 | 评论数 | 主题 |
|-------|--------|----------|-------|
| [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | JordanTheJet | 16 | [追踪] Rust 反垃圾策略技术债务清理 |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Audacity88 | 15 | [追踪] RFC 与设计问题的维护者决策队列 |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | rhinterndorfer | 9 | [缺陷] Nextcloud Talk 使用正确的 bot 消息 API *(已关闭)* |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | ArmanAvanesyan | 5 | [追踪] 整理并移除 bitmaps 维护不善的安全警告 (RUSTSEC-2026-0247) |
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | NiuBlibing | 5 | [功能] 浏览器工具仅暴露 100+ 命令中的 16 个 |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | bheatwole | 4 | RFC: 用于插件存储的 OCI 兼容注册表 |
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | Audacity88 | 4 | [缺陷] 工具返回的图片在无关工具调用后消失 |

**分析：** 社区高度关注**技术债务清理**（Rust 反垃圾、安全警告）和**架构决策**（维护者队列、OCI 注册表）。Nextcloud Talk API 缺陷修复 (#6157) 因其安全影响而备受关注。浏览器工具局限性 (#9945) 反映了 agent-browser 能力与 ZeroClaw 暴露程度之间的差距。

---

## 5. 缺陷与稳定性

### 按严重程度分类的缺陷

| Issue | 严重程度 | 状态 | 描述 | 修复 PR? |
|-------|----------|--------|-------------|---------|
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | **高** (安全) | 开放 | RUSTSEC-2026-0247 bitmaps crate 安全警告失败 | — |
| [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885) | **高** | 进行中 | 工具返回的图片在无关工具调用后消失 | — |
| [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | **高** | 进行中 | 非视觉能力门禁在标记形状文本上失败 | — |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | **高** (安全) | 已关闭 | Nextcloud Talk 错误的 bot 消息 API | — |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | **中** | 已确认 | Telegram media-group 监听器测试在并行 CI 中超时 | — |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | **高** | 进行中 | Agent 无法获知自身正在执行的定时任务 | — |
| [#10912](https://github.com/zeroclaw-labs/zeroclaw/issues/10912) | **中** | 开放 | 流式文本防护在 prose 引述类工具结果对象时抑制回复 | — |

**稳定性说明：** 与安全相关的缺陷（Nextcloud Talk API、bitmaps 安全警告）正在被积极追踪。运行时正在修复 panic 场景（#10134 已合并）和 token 统计相关问题。

---

## 6. 功能需求与路线图信号

### 高优先级功能开发

| Issue | 领域 | 描述 | 预计下版本发布? |
|-------|--------|-------------|----------------------|
| [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704) | provider | 支持 OpenAI Responses 异步函数工具 | 很可能 |
| [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) | tool | 添加 web_research 委托 (活跃 PR) | 很可能 |
| [#10634](https://github.com/zeroclaw-labs/zeroclaw/issues/10634) | architecture | 网络中断的 provider 轮次恢复，无需重放 | 可能 |
| [#9022](https://github.com/zeroclaw-labs/zeroclaw/issues/9022) | channel | 可选 Slack Events API 模式，支持零缩放 | 可能 |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | architecture | RFC: 用于插件存储的 OCI 兼容注册表 | 未来 |
| [#9687](https://github.com/zeroclaw-labs/zeroclaw/issues/9687) | SOP | SOP 运行时支持操作员主动暂停 | 可能 |
| [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) | docs | 使用 llmfit 指导本地模型选择 | 可能 |

**路线图信号：** 活跃的 PR（#9833、#10621、#10911）表明下个版本将重点关注** Agent 生命周期协调**、**配置原子性**和**网络研究委托**。安全功能（#10259）也接近完成。

---

## 7. 用户反馈摘要

### 从 Issue 中识别的痛点

| Issue | 用户痛点 | 反馈频率 |
|-------|-----------------|-----------|
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | 浏览器工具仅暴露 16/100+ 命令 — iframe、对话框、标签页、表单控件无法访问 | 5 条评论 |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent 无法获知自身正在执行的定时任务 — 无法引用自己的提醒消息 | 3 条评论 |
| [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) | 缺乏本地模型选择指南 — 用户需自行收集分散的硬件/运行时/量化信息 | 2 条评论 |
| [#10579](https://github.com/zeroclaw-labs/zeroclaw/issues/10579) | 参考 CLI 和 Config 页面缺失，但仍在目录中且被 39 处链接引用 | 2 条评论 |

### 积极信号

- ZeroCode UI 整合工作 (#10879) 正在进行中，解决用户工作区组织问题
- RPC 安全强制 (#10259) 解决了企业部署担忧
- Token 统计可见性 (#9713) 解决了历史裁剪操作的不透明问题

---

## 8. 待办事项关注

### 长期未解决的重要 Issue

| Issue | 存在时间 | 状态 | 描述 | 需要维护者介入 |
|-------|-----|--------|-------------|------------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 约 75 天 | 已确认 | RFC 与设计问题的维护者决策队列 | **是** |
| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | 约 98 天 | 受阻 | RFC: 用于插件存储的 OCI 兼容注册表 | **是** |
| [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) | 约 50 天 | 已确认 | 使用 llmfit 指导本地模型选择 | 待审核 |
| [#9686](https://github.com/zeroclaw-labs/zeroclaw/issues/9686) | 约 46 天 | 已确认 | zerocode SOP 面板 — 鼠标运行/恢复控制 | **是** |
| [#9687](https://github.com/zeroclaw-labs/zeroclaw/issues/9687) | 约 46 天 | 已确认 | SOP 引擎 — 操作员主动暂停 SOP | **是** |
| [#9677](https://github.com/zeroclaw-labs/zeroclaw/issues/9677) | 约 46 天 | 受阻 | 移除 ZeroCode 命令目录兼容性回退 | **是** |

**需要行动：** 维护者决策队列 (#8692) 对于解除设计问题的阻塞至关重要。OCI 注册表 RFC (#7497) 和多个 SOP 相关功能需要架构评审才能推进。

---

*基于 ZeroClaw GitHub 数据生成 — 2026-09-17*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*