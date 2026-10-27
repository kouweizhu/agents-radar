# OpenClaw 生态日报 2026-10-27

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-27 01:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English OpenClaw Project Digest into Chinese (Simplified Chinese), following the specific rules provided. Let me translate while:

1. Keeping all Markdown structure exactly
2. Keeping URLs, numbers, dates, issue/PR references as-is
3. Keeping technical terms, usernames, repository names in original form
4. Using natural technical Chinese, register of a Chinese developer newsletter
5. Not adding any preamble, explanation, or markdown fences

Let me go through and translate section by section:

**1. Today's Overview**
- "OpenClaw remains a high-velocity project" - OpenClaw 仍是一个高速迭代的项目
- "500 issues and 500 PRs updated in the last 24 hours" - 过去24小时内有 500 个 issue 和 500 个 PR 更新
- "active items" - 活跃项
- "merge ratio" - 合并率
- "Critical stability issues" - 关键稳定性问题
- "Windows reliability problems" - Windows 平台可靠性问题
- "SQLite/WAL checkpoint failures" - SQLite/WAL 检查点失败

**2. Releases**
- "No new releases" - 无新版本发布

**3. Project Progress**
- "Project Progress" - 项目进展
- "Test cleanup campaign" - 测试清理行动

**4. Community Hot Topics**
- "Community Hot Topics" - 社区热点话题
- "Critical reliability and performance issues" - 关键可靠性和性能问题
- "SQLite checkpoint failure" - SQLite 检查点失败
- "plugin capture operations" - 插件捕获操作
- "event loop" - 事件循环
- "platform reliability" - 平台可靠性

**5. Bugs & Stability**
- "Bugs & Stability" - Bug 与稳定性


- "UX release blocker" - 用户体验版本阻塞项

**6. Feature Requests & Roadmap Signals**
- "Feature Requests & Roadmap Signals" - 功能需求与路线图信号
- "multi-user/multi-device scenarios" - 多用户/多设备场景
- "resource governance" - 资源治理
- "reliability for inter-agent messaging" - 代理间消息传递的可靠性

I'll continue translating the remaining sections, focusing on maintaining the precise technical language and Markdown structure while adapting to natural Chinese technical writing conventions.

The backlog reveals significant maintenance challenges. Over 50 issues require maintainer review, with approximately 60% having no proposed fix. Several issues have been open for extended periods, some spanning 2-6 months, indicating potential prioritization or resolution difficulties.

The long-unanswered issues cover critical areas:
- Session context optimization needs a clear product strategy
- Memory persistence lacks definitive guidance when write tools are restricted
- Performance and reliability defects remain unresolved

These backlog items suggest systemic engineering management challenges, highlighting the need for more proactive issue triage and resolution strategies.</think>

# OpenClaw 项目摘要

**日期：** 2026-10-27

---

## 1. 今日概览

OpenClaw 仍是一个高速迭代的项目，**过去 24 小时内有 500 个 issue 和 500 个 PR 更新**。问题积压中有 400 个活跃项，同时关闭了 100 个；PR 方面有 183 个开放，317 个已合并/关闭——合并率保持健康。无新版本发布。关键稳定性问题占据主导：Windows 可靠性问题（启动、插件生命周期管理、休眠/恢复）、SQLite/WAL 检查点故障，以及 prepared-model-catalog worker 中的内存泄漏持续引发大量讨论。近期 PR 聚焦于减少运行时重建风暴和优化创建路由，性能优化工作正在积极推进。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。

---

## 3. 项目进展

以下值得注意的 PR 已合并或取得进展：

| PR | 作者 | 描述 | 影响 |
|----|--------|-------------|--------|
| [#185250](https://github.com/openclaw/openclaw/pull/185250) | steipete | **fix(agents): stop runtime rebuild storms during auth cooldowns** | 防止提供商速率限制触发认证冷却期时反复重建 prepared-runtime |
| [#184293](https://github.com/openclaw/openclaw/pull/184293) | SunnyShu0925 | **fix(agents): keep compaction safety deadline on the monotonic clock** | 修复时钟漂移问题导致的压缩期限计算错误 |
| [#184994](https://github.com/openclaw/openclaw/pull/184994) | steipete | **perf: keep creation routes from loading chat early** | 减少 Worktrees、Claws 和 Roster 路由的不必要代码加载 |
| [#185301](https://github.com/openclaw/openclaw/pull/185301) | steipete | **perf(agents): reuse unchanged Code Mode store replay** | 消除持久化值的冗余重建 |
| [#185307](https://github.com/openclaw/openclaw/pull/185307) | steipete | **perf(gateway): retain prepared row facts across equivalent catalogs** | 防止策略未变更时不必要的 fact 重建 |
| [#185263](https://github.com/openclaw/openclaw/pull/185263) | hannesrudolph | **fix: avoid sign-in warnings for routine OAuth token expiry** | 将令牌过期与认证不可用区分开来 |

**测试清理行动：** 多个 PR（#185291、#185304、#185268、#185279）整合了冗余的测试 fixture，在保留契约覆盖的同时移除了约 2400 行低价值测试代码。

---

## 4. 社区热点话题

最活跃的讨论集中在关键可靠性和性能问题：

| Issue | 评论数 | 状态 | 主题 |
|-------|----------|--------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 139 | 已关闭 | SQLite WAL 在数天内膨胀至 1.4–2.8 GB，尽管设置了 wal_autocheckpoint=1000；阻塞网关启动（Windows） |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 57 | 开放 | 网关在捕获大型外部插件时阻塞数分钟（2026.9.6 回归问题） |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 26 | 开放 | prepared-model-catalog.worker.js：无限制内存泄漏，约 4-5 GB/小时，与提供商无关 |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 21 | 开放 | Windows：启动缓慢，插件关闭不干净，schtasks 权限错误导致重启/更新不可靠 |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | 16 | 开放 | Windows 休眠/恢复：唤醒后 UI/WebSocket 重连可能失败 30-60 秒以上 |

**分析：** 首位问题（#143524，139 条评论）表明存在严重的 SQLite 检查点故障，影响 Windows 生产环境，导致数据库膨胀并完全阻塞网关启动。问题 #160959 代表 2026.9.6 回归问题，大型插件捕获操作阻塞事件循环数分钟。这些讨论的共同主题是 **Windows 平台可靠性**——多个 P0 问题都针对 Windows 特定的启动、关闭、休眠/恢复和计划任务管理故障。

---

## 5. Bug 与稳定性

**今日报告的关键（P0）Bug：**

| Issue | 严重程度 | 状态 | 修复 PR？ |
|-------|----------|--------|---------|
| [#170956](https://github.com/openclaw/openclaw/issues/170956) — Windows 启动/关闭可靠性 | P0，用户体验版本阻塞项 | 开放 | 无 |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) — SQLite WAL 无限制增长 | P0 | 已关闭 | 无（已解决） |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) — 延迟回收提交检查点失败导致代理不可用 | P0，用户体验版本阻塞项 | 开放 | 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) — 网关在大插件捕获时阻塞 | P0 | 开放 | 无 |

**高严重程度（P1）Bug：**

| Issue | 严重程度 | 状态 | 主要影响 |
|-------|----------|--------|------------|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | P0 | 开放 | Worker 线程内存泄漏 4-5 GB/小时 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | P1 | 开放 | RSS 内存基线约 1.9 GB，SQLite 超时 |
| [#182476](https://github.com/openclaw/openclaw/issues/182476) | P1 | 开放 | Windows 更新修复失败，报错 OPENCLAW_STATE_LEASE_LOST |
| [#169953](https://github.com/openclaw/openclaw/issues/169953) | P1 | 开放 | npm update 始终失败，在 config.auth 处挂起 |

**注：** 多个 P0 问题带有 `impact:ux-release-blocker` 标签，表明它们可能阻塞即将发布的版本。大多数关键 Bug 缺少修复 PR，表明调查工作正在进行中。

---

## 6. 功能需求与路线图信号

**活跃的功能讨论：**

| Issue | 优先级 | 状态 | 请求 |
|-------|----------|--------|---------|
| [#162164](https://github.com/openclaw/openclaw/issues/162164) | P2 | 开放 | 在保留共享所有者的情况下为 iOS/macOS 提供可选的个人身份 |
| [#136271](https://github.com/openclaw/openclaw/issues/136271) | P2 | 开放 | msteams：动态解析团队 SharePoint 站点以支持频道文件上传 |
| [#112372](https://github.com/openclaw/openclaw/issues/112372) | P2 | 开放 | 为 sessions_send 添加可选的源绑定的延迟完成 |
| [#158800](https://github.com/openclaw/openclaw/issues/158800) | P2 | 开放 | 在 Control UI 中 /new 后可浏览和分叉之前的频道聊天片段 |
| [#161050](https://github.com/openclaw/openclaw/issues/161050) | P1 | 开放 | 为 sessions_spawn / 隔离的 cron 运行提供内存压力感知的准入控制 |

**路线图信号：** 个人身份（#162164）、SharePoint 集成（#136271）和内存压力感知准入（#161050）的活跃功能工作表明，下一阶段将重点关注**多用户/多设备场景**和**资源治理**。延迟完成功能（#112372）表明正在投资**代理间消息传递的可靠性**。

---

## 7. 用户反馈总结

**从活跃问题中识别的痛点：**

1. **Windows 平台不稳定** — 多位用户报告重启不可靠、更新反复失败、启动缓慢。问题 #170956 提到 Windows 重启"pas na veel proberen"（多次尝试后才能成功）。

2. **内存膨胀** — 用户反映升级后内存基线增加 1.9-4 GB，SQLite 事务超时导致性能下降（#181432）。

3. **会话/消息丢失** — 消息丢失（#166634）、隐藏的内部上下文被分发为可见消息（#129314）、以及幽灵用户消息（#151962）表明状态管理存在持续性问题。

4. **令牌浪费** — 会话上下文膨胀（#67419）导致每次轮次重新注入引导文件时浪费 20-30% 的令牌。

5. **更新失败** — 多起报告称 npm update 进程失败（#169953、#168895、#182476），导致用户停留在旧版本。

**满意度信号：** 活跃的测试清理行动和性能优化（#185250、#185301、#185307）表明响应迅速。修复 OAuth 令牌过期警告（#185263）以及 UI 渲染问题（#185264、#185229）显示对用户体验细节的关注。

---

## 8. 积压关注

**长期未答复的高优先级问题：**

| Issue | 存在时间 | 优先级 | 状态 | 所需 |
|-------|-----|----------|--------|--------|
| [#67419](https://github.com/openclaw/openclaw/issues/67419) | 约 6 个月 | P2 | 开放 | 产品决策：会话上下文优化 |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) | 约 2 个月 | P1 | 开放 | 产品决策：写入工具被拒绝时的内存持久化 |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | 约 3 个月 | P1 | 开放 | 冗余 SQLite 完整性检查的修复 |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) | 约 2 个月 | P1 | 开放 | 包含 6 类可靠性缺陷的现场报告；需要分类 |
| [#114414](https://github.com/openclaw/openclaw/issues/114414) | 约 3 个月 | P3 | 开放 | 过期的 TODO 清理 — CI/CD 工作流中的逾期项 |

**需要维护者审查的问题：** 50 多个问题带有 `clawsweeper:needs-maintainer-review` 标签，表明积压压力。几乎所有头部问题都带有 `clawsweeper:no-new-fix-pr` 标签，表明这些 Bug 缺乏提议的修复方案。

---

*基于 OpenClaw GitHub 数据生成 — 2026-10-27*

---

## 横向生态对比

<think>The user wants me to translate the cross-project comparison report into Simplified Chinese. I need to:
1. Output ONLY the translation
2. Preserve all Markdown structure exactly (headings, tables, lists, bold/italic, horizontal rules, emoji)
3. Keep all technical terms, project names, URLs, numbers, dates, code references as-is
4. Use natural technical Chinese register

Let me translate this carefully, maintaining all the structure and technical accuracy.</think>

# 跨项目对比：OpenClaw 生态系统

## 1. 生态系统概览

这四个项目代表的个人 AI 助手和智能体生态系统正处于成熟阶段，但呈现高度碎片化格局。OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw 各自追求不同的架构理念——从 OpenClaw 的通用智能体框架，到 Hermes Agent 的 Discord 自动化中心，再到 QwenPaw 的 Tauri 桌面应用，以及 ZeroClaw 的安全加固企业平台。跨项目的共同主题包括**上下文管理和内存**的持续挑战、**平台可靠性**（尤其是 Windows 和 Linux）、**多协议集成**（MCP、OIDC、Discord）以及**会话/状态持久化**。过去 24 小时内没有项目发布版本，表明处于活跃开发期而非分发阶段。汇总活动（4 个项目 24 小时内更新了 597 个 issue 和 627 个 PR）表明工程投入保持健康水平。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|-------------|---------|----------|
| **Issue（24h）** | 500（400 开放，100 已关闭） | 50（49 开放，1 已关闭） | 24（17 开放，7 已关闭） | 23（全开放） |
| **PR（24h）** | 500（183 开放，317 已合并/关闭） | 50（45 开放，5 已合并/关闭） | 48（33 开放，15 已合并/关闭） | 29（28 开放，1 已合并） |
| **发布（24h）** | 0 | 0 | 0 | 0（准备 v0.9.0） |
| **合并率** | 63.4% | 10.0% | 31.3% | 3.4% |
| **首要问题主题** | Windows 可靠性、SQLite、内存 | Discord 自动化、会话恢复 | MCP 集成、嵌入 | 安全、上下文管理 |
| **项目阶段信号** | 高速度、成熟 | 活跃开发中 | 成熟化、API 稳定 | 预发布（v0.9.0） |

**健康评估：**

- **OpenClaw**：合并率高（63.4%），体量大——表明维护活跃，贡献者响应迅速。
- **QwenPaw**：PR 合并率健康（31.3%），关闭活动可观——表明项目处于稳态，定期发布版本。
- **Hermes Agent**：合并率低（10%）但 PR 量高——可能是新 PR 集中涌现等待审查，而非停滞。
- **ZeroClaw**：合并率极低（3.4%）——大部分 PR 为新提交或审查中；处于 v0.9.0 准备阶段。

---

## 3. OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **社区规模** | 最大（每日 500 issue/PR） | 中等（每日 50） | 中等（每日 24/48） | 较小（每日 23/29） |
| **平台广度** | Windows、Linux、macOS | 桌面、云 | 桌面（Tauri） | 企业/云 |
| **集成深度** | 广泛（codex、agents、gateway） | 专注（Discord） | 中等 | 安全优先 |
| **发布频率** | 频繁 | 周期 | 稳定 | 预发布 |

### 技术路线差异

- **OpenClaw** 采用多进程架构（gateway、agent、runtime），使用 SQLite 持久化和插件优先生态。其 **prepared-runtime** 和 **延迟 Codex 消费者** 策略反映了一种优化优先的理念。
- **Hermes Agent** 针对 **事件驱动的 Discord 自动化** 进行优化，具备生命周期守卫和准入控制——最适合社区管理用例。
- **QwenPaw** 使用 Tauri 构建 **单二进制桌面应用**，优先考虑本地优先的用户体验，支持滚动历史和基于嵌入的记忆。
- **ZeroClaw** 优先考虑 **安全加固**（作用域主体、OIDC、RPC 拒绝原因），而非功能迭代速度——这是有意为之的企业定位。

### 社区规模

OpenClaw 每日 500 次更新远超其他项目，表明要么贡献者基数更大，要么人均活动更高。Hermes Agent 和 QwenPaw 处于同一中游水平。ZeroClaw 虽然体量较小，但安全导向的贡献模式表明这是一个专业化的、可能由企业驱动的社区。

---

## 4. 共同技术焦点领域

### 跨项目涌现的需求

| 焦点领域 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------------|----------|--------------|---------|----------|
| **内存/上下文管理** | ✓ | ✓ | ✓ | ✓ |
| **Windows 平台可靠性** | ✓ | — | ✓ | — |
| **Linux 桌面 parity** | — | — | ✓ | — |
| **MCP 协议支持** | — | ✓ | ✓ | — |
| **会话恢复** | ✓ | ✓ | — | — |
| **定时/计划任务** | — | ✓ | ✓ | — |
| **多供应商嵌入** | — | — | ✓ | — |
| **安全/加固** | — | — | — | ✓ |
| **OIDC/认证** | — | — | ✓ | ✓ |
| **滚动/历史管理** | — | — | ✓ | — |

### 具体共性需求

1. **内存/上下文优化**：四个项目都报告了与上下文膨胀、token 浪费和内存管理相关的问题。OpenClaw 用户报告了重复引导注入导致 20-30% 的 token 浪费。QwenPaw 通过滚动老化解决了 75% 的数据库膨胀。ZeroClaw 用户请求主动的 token 预算压缩。Hermes Agent 面临 worker 中的内存泄漏。

2. **平台可靠性**：OpenClaw 和 QwenPaw 都优先修复 Windows 问题（启动、关闭、编码）。QwenPaw 明确致力于 Linux 桌面 parity。

3. **协议集成**：MCP（Model Context Protocol）在 Hermes Agent 和 QwenPaw 中都是痛点——发现失败、配置 UI 问题、网络研究示例需要改进。

4. **定时任务执行**：Hermes Agent 和 QwenPaw 都有活跃的 cron 相关问题（重复调度、thinking_level 支持）。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **主要目标用户** | 开发者、高级用户 | 社区经理、Discord 服务器运营者 | 寻求桌面 AI 助手的终端用户 | 企业安全团队 |
| **架构风格** | 多进程（gateway + agent） | 事件驱动、生命周期管理 | 单二进制 Tauri 应用 | RPC 核心、作用域主体 |
| **核心差异化** | prepared-runtime、延迟加载 | Discord 自动化、准入控制 | 桌面 UX、滚动历史 | 安全加固、OIDC |
| **发布模式** | 滚动、频繁 | 滚动、周期 | 稳定发布 | 版本化（v0.9.0 即将发布） |
| **插件模型** | Codex、agents、gateway | 子生命周期、MCP | 技能、嵌套目录 | 作用域主体、SOP |

**战略定位：**

- **OpenClaw** = 通用智能体框架，在运行时优化方面有深度
- **Hermes Agent** = 面向 Discord/消息平台的垂直自动化工具
- **QwenPaw** = 桌面优先的个人 AI，本地记忆和文件处理
- **ZeroClaw** = 以安全为首要卖点的企业级平台

---

## 6. 社区活力与成熟度

### 活动层级

| 层级 | 项目 | 速度信号 |
|------|---------|-----------------|
| **快速迭代** | OpenClaw | 每日 500 次更新，63% 合并率，活跃的回归修复 |
| **活跃开发** | Hermes Agent | 每日 50 次更新，issue 与 PR 比值高，专注 Discord |
| **成熟/稳定** | QwenPaw | 24/48 平衡，31% 合并率，Linux parity 进行中 |
| **预稳定** | ZeroClaw | 23/29 聚焦 v0.9.0，安全加固阶段 |

### 哪些项目趋于稳定？

- **QwenPaw** 显示 API 和功能稳定的迹象；近期 PR 中没有重大破坏性变更；重心转向 parity（Linux）和 UX 打磨。
- **OpenClaw** 仍处于高变动维护状态，频繁出现回归（2026.9.6 内存泄漏、SQLite 检查点故障），表明是活跃的功能开发阶段，而非稳定阶段。
- **ZeroClaw** 处于预发布状态——v0.9.0 将是关键的成熟度拐点。

### 哪些项目快速迭代？

- **OpenClaw** 展示最高速度，可能由于贡献者基数更大、范围更广。
- **Hermes Agent** 正在积极迭代 Discord 特定可靠性（准入冲突、会话恢复）。

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

| 趋势 | 证据 | 项目 |
|-------|----------|----------|
| **内存/上下文成为首要成本驱动因素** | 四个项目都讨论 token 浪费、上下文膨胀、主动压缩 | 全部 |
| **桌面应用整合** | QwenPaw 的 Tauri 推进、ZeroClaw 的作用域仪表板、OpenClaw 的桌面可靠性聚焦 | OpenClaw、QwenPaw、ZeroClaw |
| **MCP 作为集成标准兴起** | 多个项目构建 MCP 支持、文档、降级方案 | Hermes Agent、QwenPaw |
| **安全加固成为一等公民** | ZeroClaw 的 9 个身份访问问题、作用域主体、OIDC | ZeroClaw、QwenPaw |
| **多供应商弹性** | 嵌入降级、视觉自动降级、模型元数据修复 | OpenClaw、QwenPaw |
| **跨平台不一致** | Windows 启动、Linux 桌面、GNOME 托盘、HDR 渲染 | OpenClaw、QwenPaw |
| **定时任务可靠性** | cron 重复调度、thinking_level 控制、唤醒管理 | Hermes Agent、QwenPaw |
| **插件生态成熟化** | 主题扩展点、技能目录、作用域工具 | OpenClaw、Hermes Agent、QwenPaw |

### AI 智能体开发者的价值洞察

1. **内存管理尚未解决**：没有项目完全实现 token 预算驱动的上下文压缩。这代表了差异化工具或方法论贡献的机会。

2. **平台可靠性仍是瓶颈**：Windows 问题在 OpenClaw 中占主导；跨平台桌面 bug 影响 QwenPaw。构建生产级智能体的团队应该在集成测试上投入大量时间。

3. **MCP 正在获得关注但仍不成熟**：发现失败和配置 UI 问题表明协议仍在成熟中。早期采用者应预期会遇到摩擦。

4. **安全正在成为一等特性**：ZeroClaw 的作用域主体和 RPC 拒绝原因反映了日益增长的企业需求。即使是非企业项目（OpenClaw、QwenPaw）也在添加 OIDC 和认证流程。

5. **Discord 作为自动化平台可行但复杂**：Hermes Agent 持续的准入冲突表明 Discord API 带来了独特的挑战（事件循环阻塞、速率限制、线程管理），需要专门的处理方式。

---

*跨项目分析基于 2026 年 10 月 27 日 OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw 的 GitHub 数据生成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese. Let me analyze the content and translate it appropriately while:

1. Keeping the exact Markdown structure (headings, tables, lists, etc.)
2. Preserving URLs, issue/PR references, code, numbers, dates
3. Keeping project names, repository names, usernames, version tags in original form
4. Using natural technical Chinese register (like a Chinese developer newsletter)

Let me translate section by section:

## 1. Today's Overview
Translate overview content - high activity, 50 issues/PRs, no releases, etc.

## 2. Releases
Translate - no new releases, latest v0.22.5

## 3. Project Progress
Translate table content and key advances

## 4. Community Hot Topics
Translate issue descriptions and analysis

## 5. Bugs & Stability
Translate bug descriptions and severity assessment

## 6. Feature Requests & Roadmap Signals
Translate feature descriptions and roadmap signals

## 7. User Feedback Summary
Translate pain points and positive signals

## 8. Backlog Watch
Translate backlog concerns

Let me now write the translation:</think>

# Hermes Agent 项目简报 — 2026-10-27

## 1. 今日概况

Hermes Agent 今日活跃度较高，过去 24 小时内有 50 个 Issue 和 50 个 PR 更新。项目处于活跃维护状态，大量 bug 修复正在推进中，主要涉及 Discord 自动化、会话管理和跨平台桌面问题方面。未发布新版本。Issue 待处理队列较大（49 个 open），但 PR 活动表明开发响应积极。主要关注点包括 Discord 线程接入冲突、会话恢复失败以及 MCP 传输稳定性问题。

---

## 2. 版本发布

**今日无新版本发布。** 最新 tagged 版本仍为 `v0.22.5`（多个 Issue 中有引用）。

---

## 3. 项目进展

| PR | 标题 | 状态 |
|----|-----|------|
| [#145317](https://github.com/NousResearch/hermes-agent/pull/145317) | feat(kanban): 编排器可以接管正在运行的任务卡 | OPEN |
| [#145316](https://github.com/NousResearch/hermes-agent/pull/145316) | feat(delegation): 根据 id 查询已完成的委托任务 | OPEN |
| [#145312](https://github.com/NousResearch/hermes-agent/pull/145312) | feat(mattermost): 在机器人被 @ 的线程中自由回复 | OPEN |
| [#145311](https://github.com/NousResearch/hermes-agent/pull/145311) | Google Workspace 技能可查询人员忙闲状态用于日程安排 | OPEN |
| [#145310](https://github.com/NousResearch/hermes-agent/pull/145310) | fix(a2a): 无令牌模式下拒绝浏览器发起的请求和跨域请求 | OPEN |
| [#145309](https://github.com/NousResearch/hermes-agent/pull/145309) | fix(model-metadata): 停止将 SGLang 端点误报为 ollama | OPEN |
| [#145307](https://github.com/NousResearch/hermes-agent/pull/145307) | fix(agent): 视觉回退到 auto 时不再复活不可用提供商的固定模型 | OPEN |
| [#145306](https://github.com/NousResearch/hermes-agent/pull/145306) | (修复技能编写指南文档) | OPEN |
| [#145305](https://github.com/NousResearch/hermes-agent/pull/145305) | fix(subagent-lifecycle): 保留原生摘要、溢出字段和 usage 信息到 result() | OPEN |
| [#145107](https://github.com/NousResearch/hermes-agent/pull/145107) | fix(webapp): 浏览器阻止弹窗时数秒内报告 | OPEN |
| [#145106](https://github.com/NousResearch/hermes-agent/pull/145106) | fix(webapp): 纯 HTTP 发送和复制、浏览器编辑菜单、构建安全的 chunk | CLOSED |
| [#75981](https://github.com/NousResearch/hermes-agent/pull/75981) | fix(projects): 当 primary_path 已拥有项目时拒绝创建 | CLOSED |
| [#41043](https://github.com/NousResearch/hermes-agent/pull/41043) | fix(cli): 本地 HEAD 移动时清除更新检查缓存 | CLOSED |

**重点进展：**
- **看板编排**：新增编排器代理可接管运行中任务卡功能（#145317）
- **委托查询**：现在可通过 ID 查询已完成的委托任务（#145316）
- **安全修复**：A2A 插件现在可在无令牌模式下正确拒绝浏览器发起的请求（#145310）
- **模型元数据**：SGLang 端点不再被误报为 Ollama（#145309）
- **视觉回退**：修复了不可用提供商的固定模型在回退时被错误复活的 bug（#145307）

---

## 4. 社区热点

### 最活跃的 Issue

| Issue | 标题 | 评论数 | 表情 |
|-------|------|--------|------|
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | 远程后端桌面会话无法恢复 — session.resume 报 not_found | 22 | 👍 1 |
| [#105758](https://github.com/NousResearch/hermes-agent/issues/105758) | 生命周期守卫误报阻止 Node.js CLI — Sep 3 scan-budget 提交后 | 15 | — |
| [#142461](https://github.com/NousResearch/hermes-agent/issues/142461) | Discord 自动化唤醒自动创建的线程时无限期被拒接入冲突 | 10 | 👍 6 |
| [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | [功能]：subagent_lifecycle v1.1 支持插件编排器 | 8 | — |
| [#143720](https://github.com/NousResearch/hermes-agent/issues/143720) | Discord 线程 process-completion 监视每 60 秒被永久拒绝接入冲突 | 6 | — |

**分析：**
- **Discord 集成**是主要痛点：前五大 Issue 中有三个涉及 Discord 线程自动化、接入冲突和 process-completion 监视。用户报告单日出现 2,641+ 次拒绝事件（#145261）。
- **远程会话管理**：桌面会话在宿主进程重启后无法恢复 — 这对分布式部署来说是严重的可用性阻塞问题。
- **生命周期守卫**：误报阻止合法 Node.js CLI 工具，表明安全扫描过于激进。
- **插件编排**：对 subagent_lifecycle v1.1 功能（steer、host-isolation transport）表现出强烈兴趣，表明插件生态系统正在增长。

---

## 5. Bug 与稳定性

### 关键（P2）Bug

| Issue | 组件 | 描述 | 修复 PR？ |
|-------|------|------|----------|
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | gateway, sessions | 远程后端桌面会话在进程重启后无法恢复 | — |
| [#142461](https://github.com/NousResearch/hermes-agent/issues/142461) | gateway, Discord | 自动创建的 Discord 线程唤醒无限期被拒（admission_conflict） | — |
| [#143720](https://github.com/NousResearch/hermes-agent/issues/143720) | gateway, Discord | Process-completion 监视每 60 秒永久拒绝；重试上限永不触发 | — |
| [#145261](https://github.com/NousResearch/hermes-agent/issues/145261) | gateway, Discord | 监视模式完成注入始终被拒（单日 2,641 次） | — |
| [#141878](https://github.com/NousResearch/hermes-agent/issues/141878) | cli, dashboard | 跨进程插件激活在登录限制的仪表板上返回 401 | — |
| [#119805](https://github.com/NousResearch/hermes-agent/issues/119805) | gateway, QQBot | 重启后群消息发送失败，直到收到入站消息（400 用户/群已注销） | — |
| [#119529](https://github.com/NousResearch/hermes-agent/issues/119529) | tools, web | 全新安装时 web_extract 失败 — 自动检测选中了仅搜索的 ddgs | — |
| [#144560](https://github.com/NousResearch/hermes-agent/issues/144560) | gateway, webhook | 缺少 aiohttp 时网关崩溃循环（66 处注解点） | — |
| [#145298](https://github.com/NousResearch/hermes-agent/issues/145298) | gateway, desktop | 消息平台会话上的桌面文件拖放失败（permission_denied） | — |
| [#145292](https://github.com/NousResearch/hermes-agent/issues/145292) | tools, MCP | MCP 传输关闭永不完成，永久阻塞服务器运行循环 | — |
| [#123923](https://github.com/NousResearch/hermes-agent/issues/123923) | agent, Anthropic | Anthropic 心跳延续导致 thinking 块重复 | — |

### 值得注意的 P3/回归问题

- **桌面 HDR 渲染**（#140633）：KDE Plasma Wayland 启用 HDR 后 UI 颜色发白
- **GNOME 托盘图标**（#145282）：屏幕锁定/解锁后托盘图标消失
- **Cron 静默模式**（#145314）：空会话被永久遗留

**严重程度评估**：Discord 相关 bug 对稳定性影响最严重，用户报告单日数千次接入冲突。远程后端的会话恢复问题影响生产部署。

---

## 6. 功能需求与路线图信号

| Issue | 描述 | 优先级 |
|-------|------|--------|
| [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | subagent_lifecycle v1.1：支持 steer、host-isolation transport、facade 上的 effort/route/follow-up | P2 |
| [#136614](https://github.com/NousResearch/hermes-agent/issues/136614) | 看板通知订阅：选择触发代理唤醒的事件类型 | P3 |
| [#145313](https://github.com/NousResearch/hermes-agent/issues/145313) | 插件目录：复用现有 Composio 用户凭证的官方方式 | P3 |
| [#85041](https://github.com/NousResearch/hermes-agent/pull/85041) | docs(skills)：本地 TTS 优化 playbook — MLX 并行引擎 | P3（文档） |

**路线图信号：**
- **看板/自动化改进**：功能需求活跃（接管运行中任务卡 #145317、通知订阅 #136614），表明看板编排是重点发展方向。
- **插件隔离**：subagent_lifecycle v1.1 表明持续投资安全多租户插件架构。
- **委托可调试性**：按 ID 查询（#145316）改善了后台委托任务的调试体验。

---

## 7. 用户反馈总结

### 痛点

1. **Discord 自动化可靠性**：用户对"admission_conflict"错误持续触发（单日 2,641 次，#145261）表达不满。重试上限"永不触发"和"notify-mode=off 无效"表明用户感到无计可施。

2. **会话可恢复性**：远程桌面会话在宿主重启后无法恢复是分布式工作流的严重阻塞问题。

3. **全新安装体验**：全新安装时 web_extract 因自动检测选择不兼容后端而立即失败，造成糟糕的开箱即用体验。

4. **跨平台桌面不一致**：桌面应用在不同平台表现各异（Linux 上 HDR 问题、GNOME 上托盘图标、消息平台上文件拖放均失败）。

### 积极信号

- 看板（#145317）和 Mattermost 线程回复（#145312）功能需求表明用户正在使用自动化工作流。
- Google Workspace 技能扩展（#145311）显示对生产力集成有需求。

---

## 8. 待办事项关注

### 长期未解决的重要 Issue

| Issue | 时长 | 状态 | 问题 |
|-------|------|------|------|
| [#105758](https://github.com/NousResearch/hermes-agent/issues/105758) | ~7 周 | OPEN | 生命周期守卫误报 — 需确定扫描方案 |
| [#119805](https://github.com/NousResearch/hermes-agent/issues/119805) | ~5 周 | OPEN | QQBot 群消息 — 重要的平台特定缺陷 |
| [#119529](https://github.com/NousResearch/hermes-agent/issues/119529) | ~5 周 | OPEN | 全新安装 web_extract 失败 — 体验回归 |
| [#123923](https://github.com/NousResearch/hermes-agent/issues/123923) | ~4 周 | OPEN | Anthropic thinking 块重复 — 影响生产 |
| [#94983](https://github.com/NousResearch/hermes-agent/pull/94983) | ~2 个月 | OPEN | 上下文引擎压缩权限 — 需决策 |

### 需要维护者关注的 PR

| PR | 状态 | 备注 |
|----|------|------|
| [#131461](https://github.com/NousResearch/hermes-agent/pull/131461) | OPEN | 修复审批：两个 bug 绕过/阻止 HITL — CI 需要维护者批准才能运行 |
| [#31734](https://github.com/NousResearch/hermes-agent/pull/31734) | OPEN | 系统预填折叠修复 — 5 个月前提出，解决兼容性问题 |

**待办问题**：多个 P2 bug 正在老化未解决（QQBot 平台问题、全新安装体验回归、Anthropic 提供商 bug）。审批修复 PR（#131461）需要手动激活 CI 可能表明流程存在摩擦。

---

*基于 Hermes Agent Issue/PR 数据生成 — 2026-10-27*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw project digest into Chinese. Let me carefully follow the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, project names, etc. as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section while keeping everything in exact Markdown format:

---

# QwenPaw 项目简报 — 2026-10-27

## 1. 今日概览

过去 24 小时内，QwenPaw **24 个 Issue** 和 **48 个 Pull Request** 有所更新。项目已关闭 7 个 Issue 和 15 个 PR（已合并/关闭），表明维护工作十分活跃。今日无新版本发布。Issue 队列以 bug 报告为主（约 17 个开放 Issue），其中包括 MCP 协议协商问题、cron 调度 bug 和内存管理等高优先级事项。PR 活动展示了桌面端功能对齐（Linux 打包）、内存/嵌入改进以及通道隔离到插件等方面的持续进展。

---

## 2. 版本发布

过去 24 小时内**未发布新版本**。

---

## 3. 项目进展

### 已合并/关闭的 PR（15 个）

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| #7923 | feat(scroll): 在 blocks_retention_days 后对 tool_result 块进行老化处理 | — | 已关闭 |
| #8165 | fix(providers): 在终端事件中恢复仅发送的 Responses 输出 | M | 已关闭 |
| #8062 | fix(memory): 当单个块超限时保留健康的嵌入向量 | L | 已关闭 |


| #8429 | feat(cron): 在 JobRuntimeSpec 中支持 thinking_level | — | 已关闭 |
| #8286 | Bug: 思考强度滑块存在误导性的填充 | — | 已关闭 |
| #8333 | Bug: source-group 标题与侧边栏首个对话重叠 | — | 已关闭 |

**关键进展：**

- **滚动历史优化** (#7923, #8443)：滚动系统现已能够对 tool_result 块进行独立老化处理

，不再与可搜索文本耦合，使生产实例的数据库膨胀减少约 75%，解决了长期运行部署的关键存储问题。
- **OpenAI Responses API 修复** (#8165)：修正了流式解析器以处理提供商在终端 `response.completed` 事件中而非增量增量中发送完整输出。
- **Cron 思考级别** (#8429)：定时任务现可独立控制 `thinking_level`（关闭/继承/启用），实现管道式任务的成本节省。

---

## 4. 社区热点话题

### 讨论最活跃的 Issue

| Issue | 标题 | 评论数 |
|-------|------|--------|
| #8071 | [功能] 面向插件的主题扩展点 | 12 |
| #8162 | [Bug] OpenAI Responses API 流式响应为空 | 8 |
| #8040 | [Bug] 嵌入重索引不完整：N 个块失败 | 6 |
| #7476 | [Bug] 定时任务重复调度 | 5 |
| #8270 | [Bug] Windows ZIP 编码乱码 | 4 |

### 分析

- **主题扩展** (#8071) 以 12 条评论领先讨论。插件作者寻求超越单一 `colorPrimary` 旋钮的更深层主题定制——用户已可自定义调色板，但插件无法实现。这标志着对更成熟插件生态系统的需求。
- **嵌入重索引** (#8040) 有 6 条评论，凸显关键可靠性问题：当单个 CJK 块超出提供商 token 限制时，整个批次静默丢弃，产生虚假的"成功"日志。
- **定时任务重复调度** (#7476) 已解决，但在定时任务误触发处理周围产生了重要讨论，表明用户在生产工作流中对调度任务的依赖。

---

## 5. Bug 与稳定性

### 关键/开放 Bug（按严重程度排序）

| Issue | 严重程度 | 描述 | 修复 PR |
|-------|----------|------|---------|
| **#8424** | 高 | MCP discover 返回 HTTP 404 + -32601 导致硬失败；传统 MCP 服务器无法回退 | #8445（开放）|
| **#8040** | 高 | 嵌入重索引静默失败块，假成功日志 | #8062（已合并，部分）|
| **#8279** | 高 | 长期 ReMe 监听器耗尽 AnyIO 线程限制，导致 HTTP 端点停滞 | 无 |
| **#8435** | 高 | 当速率限制器信号量永不释放时 LLM 流无限挂起（看门狗永不触发）| 无 |
| **#8312** | 中 | 上下文控制失败导致任务中断 | 无 |
| **#8417** | 中 | 上下文压缩 400 失败：glm-5.3-flash 与 `thinking.type=disabled` 不兼容 | 无 |
| **#8405** | 中 | 使用 HTTP/SSE 传输时 MCP 配置弹窗无法关闭 | 无 |
| **#8415** | 中 | edit_file 将 CRLF 转换为 LF，损坏 ISO-8859-1 文件 | 无 |
| **#8425** | 中 | 邮件监视器从完整地址构建无效的 `name@domain@domain` | 无 |

### 今日合并的修复
- **#8165**：OpenAI Responses API 流式响应恢复
- **#8062**：批处理失败时保留健康的嵌入向量
- **#8445**（开放）：MCP 对 HTTP 404 + -32601 的回退

---

## 6. 功能请求与路线图信号

### 值得注意的功能提案

| Issue | 标题 | 可预测性 |
|-------|------|----------|
| #8442 | Linux 桌面端对齐 — deb + AppImage、Computer Use (Wayland)、Chrome 原生消息传递 | 高（PR #8444 开放）|
| #8439 | 在 JobRuntimeSpec 中支持 thinking_level | 高（已合并 #8429）|
| #8071 | 面向插件的主题扩展点 | 中 |
| #8420 | 文件面板 — "使用默认应用打开"和"在 Finder/资源管理器中显示" | 中 |
| #7912 | 使用 Baizhi Agent 工具包的带身份验证 MCP 网络研究示例 | 低 |
| #8376 | PowerContext 预置上下文和 Artifact API | 高（PR 开放）|

**路线图信号：**
- **Linux 桌面端**：PR #8444 明确针对 Linux 功能对齐，使用 Tauri 进行 deb/AppImage 打包——这是迄今为止最明确的 Linux 桌面端信号。
- **内存/MCP 进展**：PowerContext 集成（#8376）、嵌套技能目录（#8178）以及通道插件提取（#8187）表明平台可扩展性优先事项。
- **本地模型支持**：#8437 添加 ChatGPT 订阅登录，扩展非 API 密钥认证选项。

---

## 7. 用户反馈总结

### 发现的痛点

1. **生产可靠性**：用户报告了影响生产稳定性的关键问题，包括定时任务调度（#7476）、嵌入失败（#8040）和流挂起（#8435）。
2. **跨平台不一致**：Windows ZIP 编码（#8270）、Linux 桌面端缺失（#8442）和 CRLF 处理（#8415）表明平台对齐存在差距。
3. **内存成本**：为 ReMeLight 内存写入使用单独模型（#7719）以及定时任务中的 thinking_level 控制（#8439）请求反映了成本优化优先事项。
4. **MCP 生态系统摩擦**：多个问题（#8424、#8405、#7912）表明 MCP 集成复杂性和文档缺口。
5. **插件成熟度**：主题扩展（#8071）和重排序器凭证处理（#8276）显示不断增长的插件生态系统需求。

### 满意度指标
- 滚动保留改进（#7923, #8443）解决了用户主要痛点（数据库膨胀）。
- OpenAI Responses API 修复（#8162, #8165）解决了流式可靠性问题。
- "每日论文"和 ReMe 功能持续活跃开发，表明用户对内存系统的参与度。

---

## 8. 待办事项关注

### 未答复的重要 Issue

| Issue | 存在时间 | 优先级 | 描述 |
|-------|----------|--------|------|
| #4946 | 约 4 个月 | 高 | 插件导入失败阻止启动 6+ 分钟，所有通道无响应 |
| #8040 | 约 1 个月 | 高 | 嵌入重索引不完整—已合并部分修复，但可能需要后续跟进 |
| #8123 | 约 20 天 | 中 | 每日论文在截断的模型输出上失败—无每篇论文重试 |
| #8276 | 约 11 天 | 中 | ReMe 重排序器接受空 api_key，显示为"意外错误" |

### 需要维护者关注的 PR

| PR | 存在时间 | 规模 | 阻塞因素 |
|----|----------|------|----------|
| #7874（重新设计 SDK/应用控制平面）| 约 1 个月 | XXXL | 大型，可能需要架构审查 |
| #8187（通道 → 插件）| 约 2 周 | XXXL | 审查中，重大重构 |
| #8376（PowerContext API）| 约 5 天 | XXXL | 审查中 |
| #8178（嵌套技能目录）| 约 2 周 | XL | 审查中，首次贡献者 |

---

*基于 QwenPaw GitHub 数据生成（2026-10-27）*</think>

# QwenPaw 项目简报 — 2026-10-27

## 1. 今日概览

过去 24 小时内，QwenPaw **24 个 Issue** 和 **48 个 Pull Request** 有所更新。项目已关闭 7 个 Issue 和 15 个 PR（已合并/关闭），表明维护工作十分活跃。今日无新版本发布。Issue 队列以 bug 报告为主（约 17 个开放 Issue），其中包括 MCP 协议协商问题、cron 调度 bug 和内存管理等高优先级事项。PR 活动展示了桌面端功能对齐（Linux 打包）、内存/嵌入改进以及通道隔离到插件等方面的持续进展。

---

## 2. 版本发布

过去 24 小时内**未发布新版本**。

---

## 3. 项目进展

### 已合并/关闭的 PR（15 个）

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| #7923 | feat(scroll): 在 blocks_retention_days 后对 tool_result 块进行老化处理 | — | 已关闭 |
| #8165 | fix(providers): 在终端事件中恢复仅发送的 Responses 输出 | M | 已关闭 |
| #8062 | fix(memory): 当单个块超限时保留健康的嵌入向量 | L | 已关闭 |
| #8429 | feat(cron): 在 JobRuntimeSpec 中支持 thinking_level | — | 已关闭 |
| #8286 | Bug: 思考强度滑块存在误导性的填充 | — | 已关闭 |
| #8333 | Bug: source-group 标题与侧边栏首个对话重叠 | — | 已关闭 |

**关键进展：**

- **滚动历史优化** (#7923, #8443)：滚动系统现已能够对 `tool_result` 块进行独立老化处理，不再与可搜索文本耦合，使生产实例的数据库膨胀减少约 75%，解决了长期运行部署的关键存储问题。
- **OpenAI Responses API 修复** (#8165)：修正了流式解析器以处理提供商在终端 `response.completed` 事件中发送完整输出而非增量数据的情况。
- **Cron 思考级别** (#8429)：定时任务现在可以独立控制 `thinking_level`（关闭/继承/启用），为管道式任务实现成本节省。

---

## 4. 社区热点话题

### 讨论最活跃的 Issue

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| #8071 | [功能] 面向插件的主题扩展点 | 12 | 开放 |
| #8162 | [Bug] OpenAI Responses API 流式响应为空 | 8 | 已关闭 |
| #8040 | [Bug] 嵌入重索引不完整：N 个块失败 | 6 | 开放 |
| #7476 | [Bug] 定时任务重复调度 | 5 | 已关闭 |
| #8270 | [Bug] Windows ZIP 编码乱码 | 4 | 已关闭 |
| #8312 | [Bug] 上下文控制失败 | — | 开放 |
| #8424 | [Bug] MCP discover 返回 404 | — | 开放 |
| #8276 | [Bug] ReMe 重排序器接受空 api_key | — | 开放 |
| #8279 | [Bug] 长期 ReMe 监听器耗尽 AnyIO | — | 开放 |
| #8405 | [Bug] MCP 配置弹窗无法关闭 | — | 开放 |
| #8123 | [Bug] 每日论文在截断输出时失败 | — | 开放 |
| #4946 | [Bug] 插件导入失败阻止启动 | — | 已关闭 |
| #8417 | [Bug] 上下文压缩 400 失败 | — | 开放 |
| #8415 | [Bug] edit_file 将 CRLF 转换为 LF | — | 开放 |
| #8425 | [Bug] 邮件监视器名称字段问题 | — | 开放 |
| #7912 | [文档] MCP 网络研究示例 | — | 开放 |

### 分析

- **主题扩展** (#8071) 以 12 条评论领先讨论。插件作者寻求超越单一 `colorPrimary` 旋钮的更深层主题定制——用户已可自定义调色板，但插件无法实现。这标志着对更成熟插件生态系统的需求。
- **嵌入重索引** (#8040) 有 6 条评论，凸显关键可靠性问题：当单个 CJK 块超出提供商 token 限制时，整个批次静默丢弃，产生虚假的"成功"日志。
- **定时任务重复调度** (#7476) 已解决，但在定时任务误触发处理周围产生了重要讨论，表明用户在生产工作流中对调度任务的依赖。

---

## 5. Bug 与稳定性

### 关键/开放 Bug（按严重程度排序）

| Issue | 严重程度 | 描述 | 修复 PR |
|-------|----------|------|---------|
| **#8424** | 高 | MCP discover 返回 HTTP 404 + -32601 导致硬失败；传统 MCP 服务器无法回退 | #8445（开放）|
| **#8040** | 高 | 嵌入重索引静默失败块，假成功日志 | #8062（已合并，部分）|
| **#8279** | 高 | 长期 ReMe 监听器耗尽 AnyIO 线程限制，导致 HTTP 端点停滞 | 无 |
| **#8435** | 高 | 当速率限制器信号量永不释放时 LLM 流无限挂起（看门狗永不触发）| 无 |
| **#8312** | 中 | 上下文控制失败导致任务中断 | 无 |
| **#8417** | 中 | 上下文压缩 400 失败：glm-5.3-flash 与 `thinking.type=disabled` 不兼容 | 无 |
| **#8405** | 中 | 使用 HTTP/SSE 传输时 MCP 配置弹窗无法关闭 | 无 |
| **#8415** | 中 | edit_file 将 CRLF 转换为 LF，损坏 ISO-8859-1 文件 | 无 |
| **#8425** | 中 | 邮件监视器从完整地址构建无效的 `name@domain@domain` | 无 |

### 今日合并的修复
- **#8165**：OpenAI Responses API 流式响应恢复
- **#8062**：批处理失败时保留健康的嵌入向量
- **#8445**（开放）：MCP 对 HTTP 404 + -32601 的回退

---

## 6. 功能请求与路线图信号

### 值得注意的功能提案

| Issue | 标题 | 可预测性 |
|-------|------|----------|
| #8442 | Linux 桌面端对齐 — deb + AppImage、Computer Use (Wayland)、Chrome 原生消息传递 | 高（PR #8444 开放）|
| #8439 | 在 JobRuntimeSpec 中支持 thinking_level | 高（已合并 #8429）|
| #8071 | 面向插件的主题扩展点 | 中 |
| #8420 | 文件面板 — "使用默认应用打开"和"在 Finder/资源管理器中显示" | 中 |
| #7912 | 使用 Baizhi Agent 工具包的带身份验证 MCP 网络研究示例 | 低 |
| #8376 | PowerContext 预置上下文和 Artifact API | 高（PR 开放）|

**路线图信号：**
- **Linux 桌面端**：PR #8444 明确针对 Linux 功能对齐，使用 Tauri 进行 deb/AppImage 打包——这是迄今为止最明确的 Linux 桌面端信号。
- **内存/MCP 进展**：PowerContext 集成（#8376）、嵌套技能目录（#8178）以及通道插件提取（#8187）表明平台可扩展性优先事项。
- **本地模型支持**：#8437 添加 ChatGPT 订阅登录，扩展非 API 密钥认证选项。

---

## 7. 用户反馈总结

### 发现的痛点

1. **生产可靠性**：用户报告了影响生产稳定性的关键问题，包括定时任务调度（#7476）、嵌入失败（#8040）和流挂起（#8435）。
2. **跨平台不一致**：Windows ZIP 编码（#8270）、Linux 桌面端缺失（#8442）和 CRLF 处理（#8415）表明平台对齐存在差距。
3. **内存成本**：为 ReMeLight 内存写入使用单独模型（#7719）以及定时任务中的 thinking_level 控制（#8439）请求反映了成本优化优先事项。
4. **MCP 生态系统摩擦**：多个问题（#8424、#8405、#7912）表明 MCP 集成复杂性和文档缺口。
5. **插件成熟度**：主题扩展（#8071）和重排序器凭证处理（#8276）显示不断增长的插件生态系统需求。

### 满意度指标
- 滚动保留改进（#7923, #8443）解决了用户主要痛点（数据库膨胀）。
- OpenAI Responses API 修复（#8162, #8165）解决了流式可靠性问题。
- "每日论文"和 ReMe 功能持续活跃开发，表明用户对内存系统的参与度。

---

## 8. 待办事项关注

### 未答复的重要 Issue

| Issue | 存在时间 | 优先级 | 描述 |
|-------|----------|--------|------|
| #4946 | 约 4 个月 | 高 | 插件导入失败阻止启动 6+ 分钟，所有通道无响应 |
| #8040 | 约 1 个月 | 高 | 嵌入重索引不完整—已合并部分修复，但可能需要后续跟进 |
| #8123 | 约 20 天 | 中 | 每日论文在截断的模型输出上失败—无每篇论文重试 |
| #8276 | 约 11 天 | 中 | ReMe 重排序器接受空 api_key，显示为"意外错误" |

### 需要维护者关注的 PR

| PR | 存在时间 | 规模 | 阻塞因素 |
|----|----------|------|----------|
| #7874（重新设计 SDK/应用控制平面）| 约 1 个月 | XXXL | 大型，可能需要架构审查 |
| #8187（通道 → 插件）| 约 2 周 | XXXL | 审查中，重大重构 |
| #8376（PowerContext API）| 约 5 天 | XXXL | 审查中 |
| #8178（嵌套技能目录）| 约 2 周 | XL | 审查中，首次贡献者 |

---

*基于 QwenPaw GitHub 数据生成（2026-10-27）*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Simplified Chinese, following specific rules. Let me translate it while:

1. Keeping all Markdown structure exactly
2. Preserving all URLs, issue numbers, code references
3. Using natural technical Chinese
4. Not adding any preamble or explanation

Let me go through section by section:

Title: "ZeroClaw 项目简报 — 2026-10-27"

Section 1: 今日概览
- "high development velocity" → 保持高开发速度
- "active triaging and discussion" → 积极进行分类和讨论
- "v0.9.0 release cycle" → v0.9.0 发布周期

Section 2: 发布动态 - "Releases" → 发布动态
- No new releases → 无新版本发布

Section 3: 项目进展
- "Notable PRs Advancing" → 值得关注的推进中 PR

Section 4: 社区热点
- "Most Active Issues" → 最活跃 Issue
- "comment count" → 评论数

Section 5: Bug 与稳定性
- "Critical (S1-S2) Bugs" → 关键（S1-S2）级 Bug
- "Security Bugs" → 安全类 Bug

Section 6: 功能请求与路线图信号
- "Roadmap Signals" → 路线图信号
- "Tracker" → 跟踪项

Section 7: 用户反馈摘要
- "Pain Points" → 痛点
- "Satisfaction Signals" → 满意度信号

Section 8: 积压关注
- "Backlog Watch" → 积压关注
- "Issues Needing Maintainer Attention" → 需要维护者关注的 Issue

Let me now produce the full translation with proper Chinese technical register.</think>

# ZeroClaw 项目简报 — 2026-10-27

## 1. 今日概览

ZeroClaw 保持高开发速度，过去 24 小时内共有 **23 个 Issue** 和 **29 个 PR** 更新。所有 Issue 仍处于开启状态，表明项目正在积极进行分类和讨论，而非直接解决。项目重点聚焦于安全加固（今日提交了 9 个身份访问相关的 Issue）和运行时优化。本期无版本发布。社区对 v0.9.0 发布周期参与度高，多个 PR 已标记该版本。

---

## 2. 发布动态

**无新版本** 发布。

项目正在准备 v0.9.0（多个 PR 标记 `release:v0.9.0`）和 v0.8.7（PR #12019 锁定文档翻译版本）。

---

## 3. 项目进展

### PR 合并/关闭情况（1 个）

- 数据窗口内未捕捉到明确的合并事件；大部分 PR 仍处于开启状态。

### 值得关注的推进中 PR

| PR | 标题 | 状态 | 聚焦领域 |
|----|------|------|----------|
| [#12039](https://github.com/zeroclaw-labs/zeroclaw/pull/12039) | fix(web): 保存后刷新配置表单 | OPEN | UI 修复 |
| [#12040](https://github.com/zeroclaw-labs/zeroclaw/pull/12040) | fix(plugins): 仅允许组件与其描述清单放在一起 | OPEN | 插件安全 |
| [#12044](https://github.com/zeroclaw-labs/zeroclaw/pull/12044) | feat(runtime): 延迟引导分区 | OPEN | 上下文优化 |
| [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) | feat(gateway): 通过核心层的受限仪表盘聊天 | OPEN | v0.9.0 功能 |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | feat(gateway): 可选的 OIDC 仪表盘登录 | OPEN | v0.9.0 功能 |
| [#11910](https://github.com/zeroclaw-labs/zeroclaw/pull/11910) | fix(runtime): 强制执行系统提示词大小预算（失败则关闭） | OPEN | 运行时安全 |
| [#11326](https://github.com/zeroclaw-labs/zeroclaw/pull/11326) | fix(rpc): 拒绝向受限主体提供持久化日志读取 | OPEN | 安全 |

---

## 4. 社区热点

### 最活跃 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 主题 |
|-------|------|--------|------|
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | 在守护进程 RPC 路径上持久化失败的 ACP 会话 | 4 | ACP 运行时 bug |
| [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | Qdrant 时间边界向量召回可能遗漏符合条件的返回结果 | 4 | 记忆/向量检索 |
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | 删除或实现无效的 context/history 配置键 | 4 | 配置债务 |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | 恢复主动式 token 预算上下文压缩 | 4 | 上下文管理 |
| [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | 裁剪长对话会永久删除更早的会话轮次 | 4 | 会话持久化 |

**分析：** 讨论最多的 Issue 集中于**上下文管理**（前 5 名中占 3 个）—— 具体而言，用户对看似能节省 token 但实际无效的配置选项感到困惑，同时也对缺乏主动式上下文压缩功能不满。这是关于成本控制的显著用户痛点。

---

## 5. Bug 与稳定性

### 关键（S1-S2）级 Bug 报告

| Issue | 严重级别 | 组件 | 状态 |
|-------|----------|------|------|
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | S1 | ACP 守护进程 RPC | 工作流阻塞器 |
| [#12045](https://github.com/zeroclaw-labs/zeroclaw/issues/12045) | S2 | channel/provider/tools | 响应体在大小检查前全部缓冲 |
| [#12043](https://github.com/zeroclaw-labs/zeroclaw/issues/12043) | S2 | security/sandbox | glob_search 误报可访问文件 |
| [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2 | session_sqlite | 裁剪时永久数据丢失 |
| [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | S2 | memory/qdrant | 向量召回遗漏 |

### 安全类 Bug（9 个 Issue，均标记 `topic:identity-access`）

今日由 **@IftekharUddin** 提交的安全 Issue：
- [#12053] /api/docs 加载未固定版本的第三方脚本
- [#12052] X-Forwarded-For 头利用
- [#12051] SOP 工坊权限提升
- [#12050] OIDC 登录 CSRF
- [#12049] 登录流程存储耗尽
- [#12048] OIDC redirect_uri 验证
- [#12047] OIDC bearer 验证无速率限制
- [#12046] 通配符工具选择器绕过

**修复 PR 存在：** [#12040](https://github.com/zeroclaw-labs/zeroclaw/pull/12040) 解决了清单组件配对问题（#11562）。

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 请求 | 预计目标 |
|-------|------|----------|
| [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | 记忆召回支持外部重排序阶段 | v0.9.x |
| [#12054](https://github.com/zeroclaw-labs/zeroclaw/issues/12054) | 为 OpenAI 运行时配置 thinking 层级 | v0.9.x |
| [#12041](https://github.com/zeroclaw-labs/zeroclaw/issues/12041) | Gitea/Forgejo 功能与 GitHub 持平 | 后续版本 |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | 统一文件摄入、解析与交付 | v0.9.x（跟踪项） |

### 跟踪项
- [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) 协调 RFC #9488 统一文件处理的实现——这是一项重要的架构变更。

**预测：** 下一版本（v0.9.0）可能包含：OIDC 仪表盘登录、受限主体、延迟引导分区以及安全补丁。鉴于上下文管理 Issue（#10780, #10781）讨论热度高，这些问题可能在 v0.9.0 中得到解决。

---

## 7. 用户反馈摘要

### 痛点

1. **配置困惑** — 用户设置了 `context_compression.*`、`history_pruning.keep_recent`、`collapse_tool_results`、`keep_tool_context_turns` 期望节省 token，但这些键是无效的。这是一个**信任问题**。

2. **上下文成本** — 用户需要主动式、token 预算驱动的上下文压缩，而不仅仅是按消息数量裁剪。当前行为强制用户手动干预。

3. **数据丢失感知** — 裁剪长对话会从会话存储中永久删除更早的轮次，这让依赖历史数据的用户感到担忧。

4. **外部评测** — ZeroClaw 在 Hlido 上获得 **79/100 分**（#12042），表明整体评价正面，但仍有提升空间。

### 满意度信号
- 活跃的安全研究（IftekharUddin 提交了 9 个 Issue）表明项目有参与度高的安全贡献者。
- 多个 PR 指向 v0.9.0，说明有清晰的发布路线图。

---

## 8. 积压关注

### 需要维护者关注的 Issue（超过 7 天无活动，高优先级）

| Issue | 标题 | 存在天数 | 优先级 |
|-------|------|----------|--------|
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | 恢复主动式 token 预算上下文压缩 | 46 天 | P1 |
| [#10781](https://github.com/zeroclaw-labs/zeroclaw/issues/10781) | 删除或实现无效的 context/history 配置键 | 46 天 | P2 |
| [#11562](https://github.com/zeroclaw-labs/zeroclaw/issues/11562) | discovery 可能将某次生成的清单与另一代的组件配对 | 21 天 | P2 |

### 长期未合并的 PR

| PR | 标题 | 存在天数 | 状态 |
|----|------|----------|------|
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | feat(channels): 添加原生 Rust XMPP 支持 | 8 天 | XL，活跃中 |
| [#11289](https://github.com/zeroclaw-labs/zeroclaw/pull/11289) | feat(rpc): 稳定的拒绝原因标识符 | 27 天 | XL，安全相关 |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | fix(rpc): 由当前授权方判断排队会话所有权 | 28 天 | XL，安全相关 |

**建议：** 优先处理上下文管理 Issue（#10780, #10781）—— 这些 Issue 用户讨论最多，代表显著的摩擦点。鉴于今日提交了多个相关安全 Issue，应加快安全相关 PR（#11234, #11289, #11230）的进度。

---

*基于 2026-10-27 的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*