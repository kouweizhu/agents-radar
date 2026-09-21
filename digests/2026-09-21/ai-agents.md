# OpenClaw 生态日报 2026-09-21

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-21 00:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English OpenClaw project digest into Chinese, preserving all the Markdown structure exactly. I need to:

1. Translate the content into Chinese
2. Keep all Markdown formatting (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, project names, version tags, etc. as-is
4. Use natural technical Chinese register

Let me go through and translate section by section, keeping everything in proper Markdown format.</think>

# OpenClaw 项目简报 — 2026-09-21

## 今日概览

OpenClaw 项目活跃度持续高涨，**过去 24 小时内更新了 500 个 issue 和 500 个 PR**。Issue 追踪器显示 298 个开放/活跃问题，202 个已关闭；PR 方面则有 289 个开放，211 个已合并/关闭。今日无新版本发布。项目仍在持续解决关键稳定性问题，尤其是 SQLite 数据库管理、内存泄漏和子进程处理方面。多个高优先级（P0）缺陷影响了网关启动、事件循环阻塞和更新机制，表明系统在高负载下的可靠性仍面临挑战。

---

## 版本发布

过去 24 小时内**无新版本**发布。

最新版本说明来自 2026.9.5（见 issue #152759），用户报告该版本在更新尝试时出现 `doctor-failed` 状态。

---

## 项目进展

| PR | 描述 | 状态 |
|----|------|------|
| [#154204](https://github.com/openclaw/openclaw/pull/154204) | fix(discord): 保留语音元数据中的视觉附件 MIME 类型 | OPEN |
| [#154206](https://github.com/openclaw/openclaw/pull/154206) | fix(test): 文件间共享读取池退役 | OPEN |
| [#154170](https://github.com/openclaw/openclaw/pull/154170) | fix(ui): 刷新时保持展开的 Swarm 结果打开 | OPEN |
| [#154183](https://github.com/openclaw/openclaw/pull/154183) | test(openrouter): 为 cache-control payload 测试准备路由事实 | OPEN |
| [#154198](https://github.com/openclaw/openclaw/pull/154198) | fix: 对齐 MCP 证明夹具与纯 JavaScript 工具契约 | OPEN |
| [#154098](https://github.com/openclaw/openclaw/pull/154098) | fix(anthropic): 避免 OAuth 上的过时客户端版本拒绝 — **关闭 #94716** | OPEN |
| [#153839](https://github.com/openclaw/openclaw/pull/153839) | fix(update): 防止实时 SQLite 检查中止更新 — **关闭 #145995** | OPEN |
| [#154119](https://github.com/openclaw/openclaw/pull/154119) | fix(voice): 网关忙碌时保持音频流畅 | OPEN |
| [#154203](https://github.com/openclaw/openclaw/pull/154203) | fix: 保持启用 Workboard 时网关重启干净 | OPEN |
| [#154200](https://github.com/openclaw/openclaw/pull/154200) | fix: 源更新在前台网关关闭完成前失败 | OPEN |

关键进展：

- **SQLite 稳定性**：多个 PR 解决 WAL 检查点问题（#153839）和检查失败
- **OAuth 修复**：Anthropic 客户端版本拒绝修复解决过时 user-agent 问题
- **语音/音频**：解决网关负载下的音频卡顿问题
- **UI 改进**：Swarm 结果、会话菜单和布局性能增强

---

## 社区热点话题

| Issue | 标题 | 评论数 | 反应 | 优先级 |
|-------|------|--------|------|--------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 膨胀至 1.4–2.8 GB，尽管 wal_autocheckpoint=1000 | 35 | 👍 0 | P0 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP 服务器初始化超时导致网关崩溃 — 未捕获的拒绝 | 31 | 👍 0 | P1 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程，导致僵尸进程积累 | 31 | 👍 1 | P1 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏 — RSS 从 350MB 增长至 15.5GB，数天后 OOM 崩溃 | 29 | 👍 1 | P1 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步 Agent 持久化和转录维护在大规模下阻塞网关事件循环 | 21 | 👍 0 | P1 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话转录投影调和在持续写入下可能陷入活锁 | 21 | 👍 0 | P1 |

**分析：** 讨论最多的问题集中在**资源管理失败**：

- 数据库 WAL 文件无限增长
- 子进程僵尸积累
- 网关进程内存泄漏
- 同步操作阻塞事件循环

这些问题表明项目在多 Agent、长时间运行的部署场景中正面临可扩展性挑战。

---

## 缺陷与稳定性

### 严重（P0）— 活跃

| Issue | 标题 | 影响 | 状态 |
|-------|------|------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 膨胀至 1.4–2.8 GB，阻止网关启动（Windows） | 崩溃循环，ux-release-blocker | OPEN |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | 网关达到 ready 但从不服务；/health 超时（632 Agent 集群） | 崩溃循环 | OPEN |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | 网关启动在 sidecars.model-runtime 挂起约 17 分钟，然后失败 | 崩溃循环 | OPEN |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | OpenClaw 2026.9.5 将稳定环境变为 8 小时故障恢复 | 崩溃循环，ux-release-blocker | OPEN |
| [#153882](https://github.com/openclaw/openclaw/issues/153882) | 更新死锁：插件状态迁移延迟，导致 Doctor 中止 | 崩溃循环，ux-release-blocker | OPEN |

### 高优先级（P1）— 活跃

| Issue | 标题 | 影响 |
|-------|------|------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 未回收子进程 → 僵尸进程积累 | 消息丢失，崩溃循环 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP 服务器初始化超时导致网关崩溃 | 崩溃循环 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 内存泄漏：RSS 从 350MB 增至 15.5GB | 崩溃循环 |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 主动回复运行期间消息丢失 — 回归 | 消息丢失 |

**待修复 PR：**

- [#154098](https://github.com/openclaw/openclaw/pull/154098) — 修复 #94716（Anthropic OAuth）
- [#153839](https://github.com/openclaw/openclaw/pull/153839) — 修复 #145995（SQLite 检查）

---

## 特性请求与路线图信号

| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| [#45608](https://github.com/openclaw/openclaw/issues/45608) | 预重置 Agent 内存刷新 — /new 和每日重置应获得与压缩相同的内存刷新 | P2 | 用户请求的一致性功能 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 支持在单个 Openclaw 网关上运行多个 Azure/Teams 机器人 | P2 | 多租户企业用例 |
| [#110950](https://github.com/openclaw/openclaw/issues/110950) | 一切皆 cron — 统一心跳、监视器和计划自动化 | P2 | 架构简化 |
| [#131457](https://github.com/openclaw/openclaw/issues/131457) | 为飞书/ Lark 频道添加进度流式传输模式 | P3 | 与其他频道功能对齐 |

**路线图信号：** 对可靠性和资源管理的重点关注表明团队正在优先处理稳定性而非新功能。Cron 统一提案（#110950）和多机器人支持（#71058）表明长期架构方向是面向企业级多租户。

---

## 用户反馈总结

### 痛点

1. **更新失败具有破坏性**：多位用户报告 `openclaw update` 静默失败（#152759、#146887、#151467）。自动回滚成功但用户停留在旧版本且无任何可操作错误。

2. **近期升级（2026.9.5）导致回归**：用户报告稳定环境在升级后恶化（#153257）。一位用户描述了 8 小时的恢复会话。

3. **插件构建临时目录积累**：Issue #153246 报告来自未释放的 `openclaw-plugin-build-*` 目录每天增长约 7.5 GB。

4. **Telegram 心跳泄漏内部输出**：用户报告心跳轮询输出出现在公开的 Telegram 聊天中（#143278）。

### 满意度信号

- 维护者积极参与：多个报告的问题已有 PR 合并/审查中
- 长期问题修复进行中：SQLite 检查（#145995）、Anthropic OAuth（#94716）

---

## 待处理积压

### 过时但未解决（>30 天无更新，重要）

| Issue | 标题 | 自何时 stale | 差距 |
|-------|------|--------------|------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 使用 google-vertex/gemini-3.1-pro-preview 时出现"Cannot convert undefined or null to object" | 2026-09-20 | 2026.3.2 以来的回归 — 需要维护者审查 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 工作路径硬编码为 /Users/wangtao | 2026-09-20 | 令人尴尬的道路硬编码 bug — 需要产品决策 |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix 房间 Agent 在可见的非回复输出上循环 | 2026-09-20 | 会话重放问题 — 需要现场复现 |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) | NO_REPLY 抑制忽略 silentReply 策略 | 2026-09-20 | 功能回归 — 需要产品决策 |

### 待处理 PR

| PR | 标题 | 风险 | 状态 |
|----|------|------|------|
| [#111609](https://github.com/openclaw/openclaw/pull/111609) | fix(reef): 限制 JSONL 存储文件读取以防止 OOM | compatibility | 需要验证 |
| [#112811](https://github.com/openclaw/openclaw/pull/112811) | feat(msteams): 支持多个机器人账户 | compatibility, security-boundary | 需要验证 |
| [#149278](https://github.com/openclaw/openclaw/pull/149278) | fix(voice-call): 通话中的问题永远无法到达聊天 | message-delivery | 需要验证 |

---

*基于 OpenClaw GitHub 数据生成 — 2026-09-21*

---

## 横向生态对比

<think>The user wants me to translate the cross-project comparison report into Chinese, maintaining all the Markdown structure, tables, links, code references, etc. Let me produce a professional Chinese translation of this report.

I need to:
1. Keep all Markdown structure exactly as-is
2. Translate the content into natural technical Chinese
3. Keep all technical identifiers, URLs, issue numbers, etc. unchanged
4. Use Chinese developer newsletter register</think>

# 跨项目对比报告：开源个人 AI 助手生态系统

## 生态系统概览

个人 AI 助手与 Agent 开源领域正经历快速成熟期，五个主要项目——OpenClaw、Hermes Agent、IronClaw、ZeroClaw 和 QwenPaw——过去 24 小时内共处理超过 670 个 Issue 和 640 个 Pull Request。该生态系统呈现出明显的分化：OpenClaw 和 ZeroClaw 正在应对企业级挑战（多 Agent 协调、安全流水线、无界资源增长），而 Hermes Agent 和 QwenPaw 则聚焦于用户体验（Bot Mode 聊天体验、桌面端打磨、i18n）。IronClaw 保持较小规模，专注于依赖维护。贯穿所有项目的核心技术主题是**资源管理稳定性**（内存泄漏、进程僵尸、无界增长）、**安全加固**（认证、沙箱、命令确认）和**多租户**（Hub 功能、会话隔离、团队部署）。

---

## 活跃度对比

| 指标 | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | QwenPaw |
|--------|----------|--------------|----------|----------|---------|
| **Issue 更新数（24h）** | 500 | 50 | 0 | 50 | 24 |
| **Issue 开放/活跃** | 298 | 19 | 0 | 18 | 18 |
| **Issue 已关闭** | 202 | 31 | 0 | 32 | 6 |
| **PR 更新数（24h）** | 500 | 50 | 7 | 50 | 37 |
| **PR 开放** | 289 | 40 | 4 | 45 | 23 |
| **PR 已合并/关闭** | 211 | 10 | 3 | 5 | 14 |
| **Release（24h）** | 0 | 0 | 0 | 0 | 1 |
| **高优先级 Issue** | P0: 5+ 活跃 | P2: 3+ 活跃 | N/A | P1: 2+ 活跃 | High: 5+ 活跃 |
| **RFC/设计 Issue** | 低 | 低 | 无 | 高（26+ 已接受 RFC） | 中等 |

**活跃度排名：** OpenClaw > ZeroClaw ≈ Hermes Agent > QwenPaw > IronClaw

---

## OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw 的定位 | 同行对比 |
|-----------|---------------------|-----------------|
| **规模处理** | 企业级：已测试 632 Agent 集群，管理 1.4–2.8GB SQLite WAL | ZeroClaw 通过 RFC 方案应对；Hermes/QwenPaw 聚焦单 Agent |
| **问题复杂度** | 应对事件循环饥饿、死锁检测、同步持久化阻塞等 | OpenClaw 独有；代表最高复杂度层级 |
| **发布节奏** | 频繁小版本更新；2026.9.x 系列活跃中 | ZeroClaw 遵循 RFC 治理；Hermes/QwenPaw 迭代式发布 |
| **集成深度** | 10+ 频道集成（Discord、Slack、Teams、Telegram、飞书、Matrix 等） | Hermes 和 ZeroClaw 覆盖范围相近；QwenPaw 专注于 ModelScope |

### 技术路线差异

- **OpenClaw** 将**系统稳定性**置于功能迭代之上——大量投入诊断工具（doctor 命令、WAL 检查点、进程回收）
- **ZeroClaw** 采用**RFC 驱动治理**——架构决策需社区共识，迭代更慢但设计更清晰
- **Hermes Agent** 强调**用户体验打磨**——Bot Mode 聊天体验、emoji 反应、头像壁纸
- **QwenPaw** 瞄准**生态互操作性**——Chat Completions 兼容、ModelScope 集成、统一模型配置
- **IronClaw** 保持**极简维护**——依赖更新为主；用户可见功能很少

### 社区规模

OpenClaw 以绝对活跃量领先（每日 500 Issue + 500 PR），贡献者基数最大或 Issue 产生最快。ZeroClaw 的 50 Issue + 50 PR 配合 26+ 高评论 RFC，表明社区规模较小但架构参与度极高。Hermes 和 QwenPaw 处于中间层级，活跃量适中且功能讨论活跃。IronClaw 活跃度极低，暗示小众或成熟代码库、Bug 较少。

---

## 共同技术关注点

### 多项目涌现的需求

| 关注领域 | OpenClaw | Hermes | IronClaw | ZeroClaw | QwenPaw | 备注 |
|------------|----------|--------|----------|----------|---------|-------|
| **内存管理 / 生命周期** | ✅ | ✅ | — | ✅ | ✅ | WAL 增长 (#143524)、会话泄漏 (#64488)、内存解耦 (#6850)、上下文膨胀 (#7853) |
| **安全加固** | — | — | OAuth 修复 | ✅ | — | Shell 确认 (#7155)、沙箱策略 (#7821)、可插拔认证 (#7141) |
| **多租户 / 团队部署** | — | — | — | — | ✅ | QwenPaw Hub (2.2.0)、ZeroClaw 规范主体 |
| **服务商可靠性** | ✅ | — | — | — | ✅ | 403/400 错误、视觉能力门控、配额与认证混淆 |
| **配置动态化** | — | — | — | ✅ | — | 守护进程无需重载即可更新策略 (#7897) |
| **桌面 / 平台稳定性** | — | ✅ | — | — | — | SSH 后端连接池、快捷键规范化、TUI 泄漏 |
| **会话 / 轮次生命周期** | ✅ | — | — | ✅ | ✅ | 轮次取消 (#10801)、修剪行为 (#10696)、空闲清理 |

**共识领域：** 内存管理是跨项目最普遍挑战——除 IronClaw 外，每个项目都有针对内存生命周期、无界增长或会话持久化的活跃 Bug 或 RFC。安全是第二大聚合点，由 ZeroClaw 的 RFC 流程和 OpenClaw 的企业部署驱动。多租户正成为 QwenPaw 和 ZeroClaw 的 2026 年优先方向。

---

## 差异化分析

### 功能聚焦

| 项目 | 主要差异化 | 次要聚焦 | 目标用户 |
|---------|------------------------|-----------------|-------------|
| **OpenClaw** | 多 Agent 编排、企业级稳定性 | 丰富频道集成 | 运行 100+ Agent 的团队、企业 |
| **Hermes Agent** | 会话体验打磨 | 桌面应用、Bot Mode | 个人用户、聊天工作流为主 |
| **IronClaw** | 极简维护、稳定性 | Rust 生态、WASM | 想要嵌入式 Agent 的开发者 |
| **ZeroClaw** | RFC 驱动架构、安全 | 内存隔离、沙箱 | 安全敏感型运维、研发团队 |
| **QwenPaw** | 生态互操作性 | ModelScope、Chat Completions | 现有 LLM 技术栈集成商 |

### 技术架构

- **OpenClaw**：事件驱动 Gateway 架构；同步持久化是瓶颈；诊断工具完善
- **ZeroClaw**：RFC 治理产生清晰抽象；存储 / 增强层分离；风险配置
- **Hermes Agent**：桌面优先；Profile 感知本地存储
- **IronClaw**：Rust/WASM 运行时；基于扩展的插件模型
- **QwenPaw**：统一模型发现；基于会话的状态管理

### 目标用户

OpenClaw 和 ZeroClaw 竞争**企业 / 团队部署**用户市场，虽然 OpenClaw 在规模上领先（600+ Agent）但 ZeroClaw 在安全上更严格。Hermes Agent 服务追求精致桌面聊天体验的**个人用户**。QwenPaw 吸引基于现有模型服务商进行**集成开发**的用户。IronClaw 面向**嵌入式 / 边缘**场景。

---

## 社区活力与技术成熟度

### 活跃度层级

| 层级 | 项目 | 特征 |
|------|----------|-----------------|
| **快速迭代** | OpenClaw, QwenPaw | 高活跃量（500+/37 PR/日），大量开放 Bug，发布频繁，API 不稳定 |
| **活跃开发** | Hermes Agent, ZeroClaw | 中等活跃量（50 PR），RFC 治理（ZeroClaw）或功能打磨（Hermes），稳定改进 |
| **成熟维护** | IronClaw | 低活跃量，依赖更新为主，API 稳定，用户可见改动少 |

### 速度与稳定性权衡

- **OpenClaw**：高速迭代但已知不稳定——P0 Bug 持续跨版本；企业用户以风险换功能
- **ZeroClaw**：较慢迭代（RFC 最短 7 天）但设计一致性更高——系统化解决架构问题
- **QwenPaw**：快速迭代配合 Beta 发布——v2.2.2-beta.3 表明在大版本 2.2.0 前积极稳定化
- **Hermes Agent**：稳定交付功能；Bot Mode 和桌面打磨代表成熟、用户可见的改进
- **IronClaw**：极少变更——或代表稳定或代表低采用——社区信号有限

---

## AI Agent 开发者的趋势信号

### 社区反馈中的行业趋势

1. **多租户是下一个前沿** — QwenPaw Hub (2.2.0)、ZeroClaw 规范主体、OpenClaw 的 632 Agent 集群都指向团队/组织部署是下一个增长方向。开发者应投资于身份、隔离和访问控制。

2. **资源管理是基本功** — 内存泄漏、WAL 增长、进程僵尸、上下文窗口耗尽影响每个项目。生产部署需要资源边界策略、自动修剪和诊断工具。

3. **安全正在走向上游** — ZeroClaw 的沙箱策略、Shell 确认层级、可插拔认证 RFC 表明市场正从"够用"成熟到企业安全要求。预计安全配置将成为企业级竞争的差异化因素。

4. **UX 对采纳至关重要** — Hermes Agent 的 Bot Mode 打磨和 QwenPaw 的 Chat Completions 兼容表明，仅靠技术能力无法驱动采纳——自然会话体验和生态兼容性才行。

5. **协议互操作性正在扩展** — ZeroClaw 的 A2A 客户端、QwenPaw 的 Chat Completions 兼容、OpenClaw 的 MCP 服务器计划表明正向标准协议（OpenAI 兼容 API、A2A）收敛作为集成层。

### 对 AI Agent 开发者的价值

| 信号 | 可操作洞察 |
|--------|---------------------|
| 4/5 项目出现内存/隔离 RFC | 投资内存架构——分离会话历史与长期记忆是等待标准化的已解决问题 |
| ZeroClaw 出现安全 RFC | 安全加固（沙箱、认证、确认）将成为企业级交易的需求；架构设计需支持可插拔 |
| OpenClaw 渠道深度（10+） | 集成广度是差异化因素——支持更多协议/频道增加目标用户群 |
| ZeroClaw 的 RFC 治理 | 社区驱动的架构产生更高质量设计；复杂功能考虑 RFC 流程 |
| Hermes、QwenPaw 的桌面/WebUI | 用户体验靠会话感觉而非单纯能力竞争——为消费者采纳投资 UI/UX |

**总体评估：** 生态系统正从能力驱动开发（添加功能、新服务商）转向可靠性驱动开发（稳定性、安全、多租户）。首先解决资源管理和企业部署的项目将占据增长的团队/组织市场，而消费者导向项目将在会话体验打磨上竞争。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest from English to Chinese. I need to:
1. Translate all the content to Chinese
2. Keep the Markdown structure exactly the same
3. Keep URLs, issue/PR numbers, code references, etc. as-is
4. Use natural technical Chinese register

Let me go through and translate this carefully while preserving all the formatting.</think>

# Hermes Agent 项目摘要 — 2026-09-21

## 1. 今日概览

Hermes Agent 社区活跃度**较高**，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目正在积极修复稳定性问题——31 个 issue 已关闭，同时有 10 个 PR 已合并/关闭，显示出强劲的维护效率。重点关注领域包括桌面应用稳定性（TUI 会话泄漏、后端连接池）、Bot Mode 体验优化，以及跨平台 bug 修复（Windows PATH 处理、Telegram 内联查询）。今日无新版本发布。

---

## 2. 版本发布

过去 24 小时内**无新版本**发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#117721](https://github.com/NousResearch/hermes-agent/pull/117721) | feat(skills): 添加可选的优先发现根目录 | ✅ 已合并 |
| [#117716](https://github.com/NousResearch/hermes-agent/pull/117716) | fix(config): 已保存的 .env 值不再被重复行覆盖 | ✅ 已合并 |

### 推进中的活跃 PR

- [#84554](https://github.com/NousResearch/hermes-agent/pull/84554) — **feat(desktop): 添加配置文件感知壁纸** — 支持 PNG/JPEG/WebP 导入并优化渲染
- [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) — **feat(webapp): 在浏览器中运行 Desktop 渲染器** — 认证的浏览器托管 Desktop 模式
- [#117726](https://github.com/NousResearch/hermes-agent/pull/117726) — fix(moa): 使 Desktop 预设删除持久化
- [#117720](https://github.com/NousResearch/hermes-agent/pull/117720) — fix(install): 持久化原始 User PATH，保持 %VARS% 不变（Windows）
- [#117718](https://github.com/NousResearch/hermes-agent/pull/117718) — fix(desktop): 保留 bot RPC 错误码和数据
- [#117724](https://github.com/NousResearch/hermes-agent/pull/117724) — feat(bots): 房间消息添加 emoji 回应
- [#117709](https://github.com/NousResearch/hermes-agent/pull/117709) — feat(desktop): 机器人的聊天显示机器人头像
- [#117706](https://github.com/NousResearch/hermes-agent/pull/117706) — feat(desktop): 添加土耳其语 (tr) 本地化（~4100 条翻译）
- [#117707](https://github.com/NousResearch/hermes-agent/pull/117707) — feat(models): 跨界面共享模型选择器列表

---

## 4. 社区热点话题

### 活跃度最高的 Issue（按评论数）

| Issue | 标题 | 评论数 | 状态 |
|-------|-------|----------|--------|
| [#64488](https://github.com/NousResearch/hermes-agent/issues/64488) | Dashboard TUI 会话泄漏进程、内存和数据库行（Linux 原生） | 6 | 🟡 开启中 |
| [#117520](https://github.com/NousResearch/hermes-agent/issues/117520) | Bot Mode — 房间和 1:1 机器人聊天应该像真正的聊天 | 4 | 🟡 开启中 |
| [#32791](https://github.com/NousResearch/hermes-agent/issues/32791) | 多机器人自由响应频道陷入无限 ack 循环 | 3 | 🔴 已关闭 |
| [#94381](https://github.com/NousResearch/hermes-agent/issues/94381) | Desktop：池化远程后端描述符从未释放 | 3 | 🟡 开启中 |
| [#63408](https://github.com/NousResearch/hermes-agent/issues/63408) | 自定义 provider 响应包装器未展开 — 视觉功能失败 | 3 | 🟡 开启中 |

**分析：** #64488 TUI 会话泄漏是讨论最多的 issue，表明对 Linux 桌面部署有重大用户影响。#117520 Bot Mode 聊天体验反映了用户强烈需求，希望在群组/私聊机器人交互中获得更自然的对话 UI。多机器人 Discord ack 循环 (#32791) 已关闭，表明一个 P1 事件已解决。

---

## 5. Bug 与稳定性

### 严重/高优先级 Bug（P1-P2）

| Issue | 严重程度 | 描述 | 修复 PR？ |
|-------|----------|-------------|---------|
| [#64488](https://github.com/NousResearch/hermes-agent/issues/64488) | **P2** | Dashboard TUI 会话在各种失败场景下泄漏进程、内存、打开的数据库行 | — |
| [#94381](https://github.com/NousResearch/hermes-agent/issues/94381) | **P2** | Desktop SSH 后端池：描述符从未释放，存活检查卡在 (1/3) | — |
| [#63408](https://github.com/NousResearch/hermes-agent/issues/63408) | **P2** | 自定义 provider 包装器 `{"data": {...}}` 未展开 — 视觉功能失败 | — |
| [#117710](https://github.com/NousResearch/hermes-agent/issues/117710) | **P2** | API `/chat` 在自定义 provider 上每会话仅能调用一次 — 第二次调用返回 500 | — |
| [#117482](https://github.com/NousResearch/hermes-agent/issues/117482) | **P2** | Provider 配额耗尽（429）被报告为认证失败 | — |
| [#47630](https://github.com/NousResearch/hermes-agent/issues/47630) | **P2** | 生成的脚本载荷处理在 Unicode 标点符号处中断 | — |

### 中等严重程度（P3）

- [#117717](https://github.com/NousResearch/hermes-agent/issues/117717) — Telegram 内联选择器接受负偏移量 → PR [#117719](https://github.com/NousResearch/hermes-agent/pull/117719) 已开启
- [#117181](https://github.com/NousResearch/hermes-agent/issues/117181) — Windows：hub 安装的技能永远报告 "update_available"（CRLF vs LF）
- [#117722](https://github.com/NousResearch/hermes-agent/issues/117722) — web: `vite.config.ts` 类型检查失败 TS18048 → PR [#117723](https://github.com/NousResearch/hermes-agent/pull/117723) 已开启
- [#91611](https://github.com/NousResearch/hermes-agent/issues/91611) — Desktop 按键绑定规范化在 `KeyboardEvent.code` 缺失时崩溃

---

## 6. 功能请求与路线图信号

### 值得注意的功能请求

| Issue | 描述 | 需求信号 |
|-------|-------------|---------------|
| [#117520](https://github.com/NousResearch/hermes-agent/issues/117520) | Bot Mode 房间/私聊应该像真正的聊天（好友群组氛围） | 4 条评论 |
| [#117715](https://github.com/NousResearch/hermes-agent/issues/117715) | Desktop 自定义链接处理程序和内联本地文件导航设置 | 新建 |
| [#84554](https://github.com/NousResearch/hermes-agent/pull/84554) | 配置文件感知壁纸（PR 推进中） | 积极开发 |
| [#117709](https://github.com/NousResearch/hermes-agent/pull/117709) | 机器人聊天显示机器人头像（PR 推进中） | 积极开发 |
| [#117724](https://github.com/NousResearch/hermes-agent/pull/117724) | 房间消息 emoji 回应（PR 推进中） | 积极开发 |

**路线图信号：** Bot Mode 增强（房间即聊天、emoji 回应、机器人头像）表明优先改善 AI 交互的社交/聊天体验。Webapp 浏览器托管 (#93508) 表明扩展至原生 Desktop 之外。土耳其语本地化 (#117706) 显示持续投资国际化。

---

## 7. 用户反馈总结

### 发现的痛点

1. **会话泄漏（Linux Desktop）：** 用户报告当 TUI 标签页在浏览器重载后持续存在时，会产生孤立的 node 进程、内存增长和打开的数据库行——对长期运行部署造成重大稳定性影响。

2. **Bot Mode 用户体验：** 用户觉得 Bot Mode 对话"像会话，不像聊天"——消息缺少轻量级社交属性（头像、回应），房间读起来像状态报告而非自然的群组聊天。

3. **Windows 平台问题：** 多个 Windows 特定 bug — 安装时 PATH 损坏、技能更新误报（CRLF 转换）、某些 IME 输入下按键绑定崩溃。

4. **Provider/模型混淆：** DeepSeek 选择器提供已停用模型 ID；自定义 provider 视觉功能因展开问题失败；配额耗尽误报为认证失败。

### 积极信号

- 活跃 PR 解决桌面美化问题（壁纸、本地化、错误处理）
- 强劲的 issue 解决效率（今日关闭 31 个）
- 社区驱动的功能落地（土耳其语 locale、emoji 回应）

---

## 8. 待办关注

### 需要维护者关注的老问题

| Issue | 存在时间 | 优先级 | 描述 |
|-------|-----|----------|-------------|
| [#47630](https://github.com/NousResearch/hermes-agent/issues/47630) | 约 3 个月 | P2 | 生成的脚本载荷处理 — Unicode 标点符号导致脚本中断 |
| [#91611](https://github.com/NousResearch/hermes-agent/issues/91611) | 约 1 个月 | P3 | Desktop 按键绑定在 `KeyboardEvent.code` 缺失时崩溃（Windows） |
| [#64488](https://github.com/NousResearch/hermes-agent/issues/64488) | 约 2 个月 | P2 | TUI 会话泄漏 — 高用户影响，仍未关闭 |

### 等待审查/合并的 PR

| PR | 存在时间 | 状态 |
|----|-----|--------|
| [#84554](https://github.com/NousResearch/hermes-agent/pull/84554) | 约 1 个月 | 开启中 — 配置文件感知壁纸 |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | 约 1 个月 | 开启中 — webapp 浏览器托管 |
| [#33494](https://github.com/NousResearch/hermes-agent/pull/33494) | 约 4 个月 | 开启中 — config: 忽略损坏的安装戳记 |

---

*摘要基于 Hermes Agent GitHub 数据生成 — 2026-09-21*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep the exact Markdown structure
3. Keep URLs, numbers, code references, PR numbers, etc. as-is
4. Use natural technical Chinese register

Let me go through the content and translate it appropriately while preserving the structure.

Key terms to translate:
- Project digest → 项目简报
- Overview → 概览
- Releases → 发布
- Project Progress → 项目进展
- Community Hot Topics → 社区热点
- Bugs & Stability → Bug 与稳定性
- Feature Requests & Roadmap Signals → 功能请求与路线图信号
- User Feedback Summary → 用户反馈摘要
- Backlog Watch → 待办事项关注

Let me translate carefully, maintaining the table structure and Markdown formatting.</think>

# IronClaw 项目简报 — 2026年9月21日

## 今日概览

IronClaw（nearai/ironclaw）在2026年9月21日表现出中等活跃度。项目在过去24小时内处理了7个 Pull Request，其中3个已合并/关闭，4个保持开放。本期无新 Issues 开启或关闭，也无版本发布。活动主要围绕依赖项维护展开，除了一项解决 Google OAuth 配置问题的 Bug 修复。项目目前状态稳定，持续推进 Rust 生态依赖和 GitHub Actions 工作流的更新。

---

## 发布

过去24小时内无新版本发布。

---

## 项目进展

| PR | 状态 | 标题 | 作者 |
|----|------|------|------|
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | **已关闭** | fix(extensions): resolve provider-instance readiness live, administrator configuration first | henrypark133 |
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | **已关闭** | chore(deps): bump everything-else group (25 updates) | dependabot[bot] |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | **已关闭** | chore(deps): bump actions group (6 updates) | dependabot[bot] |

**关键进展：** PR #8102 修复了一个关键的激活问题——当运维人员通过 Web UI（管理员配置）而非环境变量配置 Google OAuth 客户端时，Gmail 和 Google Calendar 扩展无法激活。OAuth 流程本身成功完成（授权、换取 code、token 交换），但激活时因 provider 就绪状态检查而失败。此次修复将管理员配置的优先级提高至环境变量之上。

---

## 社区热点

过去24小时内无 Issues 活动。本期最值得注意的 PR 活动：

- **#8102 (OAuth 修复)** —— 这是唯一的特性/缺陷修复 PR，解决了一个实际部署场景：当用户在生产环境中通过 Web UI 配置 OAuth 时，无法激活 Google 关联扩展。这表明用户对生产部署中 Web UI OAuth 处理存在真实需求。

---

## Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|----------|------|------|
| **中等** | 通过 Web UI 管理员配置时 Google OAuth 激活失败 | **已修复** (PR #8102) |

OAuth 激活 Bug（#8102）已解决。过去24小时内无其他 Bug 或稳定性问题报告。

---

## 功能请求与路线图信号

本期无新功能请求开启。依赖更新 PR 表明项目持续进行现代化：

- **#7834** — WASM 依赖更新（wasmtime, wasmtime-wasi, wit-component, wit-parser）—— 表明项目持续投资 WebAssembly 运行时能力
- **#8078** — Tokio 生态更新（tower-http, tokio-tungstenite）—— 维护异步运行时健康

这些依赖更新虽属常规维护，但说明项目正跟进 Rust 生态的演进。

---

## 用户反馈摘要

本期暴露的主要用户痛点：

- **通过 Web UI 配置 OAuth** —— 运维人员通过 Web UI 配置 OAuth 的 IronClaw 部署用户无法激活 Gmail 和日历扩展。这代表了非环境变量工作流在部署灵活性方面的缺口。

本期无来自 Issues 或 PRs 的用户不满信号。

---

## 待办事项关注

| 项目 | 存续时间 | 状态 | 备注 |
|------|----------|------|------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 约29天 | 开放 | WASM 依赖更新（4个包）—— 中等规模，中等风险 |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | 约15天 | 开放 | Tokio 生态更新（2个包） |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | 约1天 | 开放 | GitHub Actions 更新（8个包） |
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | 约1天 | 开放 | 其他依赖更新（29个包） |

依赖类 PR（#7834, #8078, #8103, #8104）保持开放，等待合并。这些均为常规维护更新，不构成阻塞项。

---

*生成时间：2026年9月21日 | 数据来源：GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the QwenPaw Project Digest into Simplified Chinese, following specific rules:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, preserving the structure and technical accuracy.</think>

# QwenPaw 项目摘要 — 2026-09-21

## 1. 今日概览

QwenPaw 今日呈现**高开发活跃度**，过去 24 小时内有 24 个 issue 和 37 个 PR 更新。项目发布了 **v2.2.2-beta.3**，这是一个聚焦于控制台 UI 稳定性和端到端测试可靠性的补丁版本。社区参与度保持强劲，特别是围绕即将到来的 2.2.0 多租户 Hub 功能以及多个影响会话管理、工具执行和提供商集成的关键 bug。整体项目状态稳定但活跃——多个回归问题和安全相关问题需要关注。

---

## 2. 发版动态

### v2.2.2-beta.3 (Beta)

**发布页面：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.3

**变更内容：**

| PR | 描述 |
|---|---|
| #7851 | fix(console): restore assistant response actions |
| (E2E) | Re-anchor console selectors broken by #7502 redesign; harden session-list assertions |

**说明：** 这是一个聚焦于控制台 UI 稳定性和测试可靠性的定向补丁。无破坏性变更或迁移步骤要求。该版本在 4 小时验证窗口内通过了所有检查点。

---

## 3. 项目进展

### 已合并/关闭的 PR（14 个）

| PR | 状态 | 描述 |
|---|--------|-------------|
| #7904 | Closed | fix(pet): forward approval actor to native service (fixes #7856) |
| #7894 | Closed | test(console): +1027 frontend statements coverage (+3.19%) |
| #7901 | Closed | ci(release): unfreeze merges immediately after release |
| #7862 | Closed | ci(release): gate artifact publishing on test gate |
| #7887 | Closed | fix(agents): handle unknown audio part rejections |
| #7886 | Closed | fix(agents): handle unknown input_audio rejections |
| #7345 | Closed | Fix/tool card stuck calling after stop |
| #5836 | Closed | feat(desktop): auto-detect local paths in chat output |

**关键进展：**
- **提供商集成改进：** OpenCode 会话头支持 (#7869)，AgentScope Platform 作为内置提供商 (#7843)
- **控制台用户体验：** 认证后的多标签聊天终端 (#7861)，会话列表分组改进 (#7846)
- **测试：** 前端覆盖率显著提升
- **记忆功能：** ReMeLight 记忆写入支持独立模型 (#7719)

---

## 4. 社区热点话题

### 最活跃的 Issue（按评论数）

| Issue | 标题 | 评论数 | 表情反应 |
|-------|-------|----------|-----------|
| #7318 | **[讨论] QwenPaw Hub，多租户版，即将在 2.2.0 推出** | 31 | 👍 4 |
| #7853 | **[Bug] ToolResultPruner 跳过 media blocks (type="data")，导致 view_image base64 无界累积** | 6 | — |
| #7724 | **[Bug] 会话丢失** | 5 | — |
| #7884 | **[问题] 压缩刷新导致历史记录加载不完整** | 4 | — |
| #7888 | **[Bug] 聊天页面卡在"出了点问题"— insertBefore NotFoundError** | 4 | — |

**分析：** 多租户 Hub 讨论 (#7318) 是明确的社区焦点——31 条评论表明对团队部署的强烈需求。base64 累积 bug (#7853) 有 6 条评论，代表了一个**高优先级的功能问题**，影响上下文窗口限制。会话丢失 (#7724) 是反复出现的痛点，影响显著。

---

## 5. Bug 与稳定性

### 今日报告的关键 Bug

| 严重程度 | Issue | 描述 | 修复 PR |
|----------|-------|-------------|-----------|
| 🔴 **高** | #7853 | ToolResultPruner 跳过 `type="data"` 块——view_image base64 无界累积，撑爆上下文窗口 | — |
| 🔴 **高** | #7888 | 聊天页面卡在"出了点问题"— React commitPlacement 错误，font wrapper 问题 | — |
| 🔴 **高** | #7859 | 持久化提示词注入到 tool-result system-reminders（安全相关） | — |
| 🔴 **高** | #7905 | DoomLoopGate 在没有新工具调用证据时升级到 TERMINATE | #7906 (open) |
| 🟠 **中** | #7724 | 桌面应用关闭/重载后会话丢失 | — |
| 🟠 **中** | #7883 | 工具返回的 PDF 序列化错误——DeepSeek 返回 400 | — |
| 🟠 **中** | #7881 | kimi-code runner 绕过边界和 destructive-command 检查不一致 | — |
| 🟠 **中** | #7856 | qwenpaw-pet 0.1.1 破坏工具审批（丢失 `actor` 参数） | #7904 (已修复) |

**说明：** 三个 bug 已有关联修复 PR（#7906、#7904）。base64 累积 bug (#7853) 尤为严重，因为它导致**累积性上下文膨胀**，无法通过配置规避。

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 请求 | 预期影响 |
|-------|---------|-----------------|
| #7318 | **QwenPaw Hub（多租户）** — 团队部署、共享技能、管理功能 | 2.2.0 旗舰功能 |
| #7648 | 自定义网页标题以区分多实例 | 用户体验便利性 |
| #5182 | 统一模型配置（向量、文本、音视频模型） | 基础设施 |

### 近期路线图相关 PR

| PR | 功能 | 阶段 |
|----|---------|-------|
| #7899 | 统一模型发现、定价、选择、思考控制 | Open |
| #7890 | 零停机重载丢失插件运行时钩子（一致性问题） | Open |
| #7895 | 空闲清理在消费者关闭期间丢失消息 | Open |
| #7879 | MCP OAuth 握手在静态 Bearer Key 服务器上失败（QCC） | Open |

**预测：** **2.2.0 版本**可能包含 Hub 多租户功能和统一模型管理 (#7899)。会话稳定性和工具结果修剪修复是点版本的优先候选。

---

## 7. 用户反馈摘要

### 已识别的痛点

1. **会话丢失** (#7724)：用户报告应用重启或插件部署后对话完全消失——影响严重的数据丢失
2. **上下文窗口耗尽** (#7853)：图片查看导致 base64 无界累积；用户无法使用长图片工作流
3. **历史不完整** (#7884)：压缩/刷新后历史消息被截断——可追溯性差
4. **提供商可靠性** (#7882, #7599)：OpenCode "免费" 模型返回 403/400 错误——用户体验误导
5. **工具执行卡住** (#7321)：强制终止后 UI 仍显示"执行中"——状态混乱

### 积极信号

- 桌面自动检测文件路径 (#5836) 已合并——用户获得可点击的文件链接
- 社区驱动的 issue helper 技能 (#5567) 已在 ModelScope 发布
- 前端测试覆盖率提升 +3.19%

---

## 8. 待办关注

### 长期未回复的重要 Issue

| Issue | 存在时间 | 状态 | 关注点 |
|-------|-----|---------|---------|
| #7318 | 约 1 个月 | Open | Hub 多租户路线图——对团队采用至关重要 |
| #5182 | 约 3 个月 | Open | 统一模型配置——需要架构变更 |
| #5567 | 约 3 个月 | Closed | 社区贡献——应予以确认/跟进 |

### 停滞的 PR / 需要维护者关注

| PR | 存在时间 | 状态 | 阻塞原因 |
|----|-----|---------|----------|
| #7899 | 1 天 | Open | 大功能——需要优先审查 |
| #7869 | 3 天 | Open | 审查中——OpenCode 提供商修复 |
| #7719 | 9 天 | Open | 记忆功能——待审查 |
| #7846 | 3 天 | Open | 用户体验改进 |

---

*基于 GitHub 数据生成 — 2026-09-21*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the Project Digest to Chinese (Simplified Chinese). I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep technical terms, project names, issue numbers, URLs, etc. as-is
3. Use natural technical Chinese register - not literal word-for-word
4. Output ONLY the translation, no preamble or explanation

Let me go through and translate each section:

## 1. Today's Overview (今日概览)

I need to translate this maintaining the meaning but in natural Chinese. Let me start:

"ZeroClaw shows high RFC activity with 50 issues updated in the last 24 hours, all leading to closure—the project appears to be in a major feature-finalization phase."

Translation: "ZeroClaw 今日 RFC 活动频繁，过去 24 小时内更新了 50 个 Issue，全部已关闭——项目似乎正处于主要功能定稿阶段。"

Let me continue with the rest:

"Of the 50 PRs updated, 5 have been merged/closed, with 45 remaining open. No new releases were published today."

"更新的 50 个 PR 中，5 个已合并/关闭，45 个仍处于打开状态。今日未发布新版本。"

"The pattern suggests a significant release may be imminent, as multiple architectural RFCs covering memory, security, and provider integrations have reached "accepted" status."

"这一模式表明重大版本发布可能在即，因为多个涵盖内存、安全和提供商集成的架构 RFC 已进入'已接受'状态。"

"The maintainer team is actively processing the decision queue (Issue #8692), indicating disciplined RFC governance."

"维护团队正在积极处理决策队列（Issue #8692），表明 RFC 治理是有序的。"

## 2. Releases

"**No new releases today.** The last releases predate this digest period."

"**今日无新版本。** 上一个版本的发布早于本摘要期间。"

## 3. Project Progress

"Merged/Closed PRs (5 total):"

"已合并/关闭的 PR（共 5 个）："

Now I need to translate the table content and then continue with the rest of the document, ensuring all technical terms remain in their original form while the surrounding text flows naturally in Chinese.</think>

# ZeroClaw 项目摘要 — 2026-09-21

## 1. 今日概览

ZeroClaw 今日 RFC 活动频繁，过去 24 小时内更新了 50 个 Issue，全部已关闭——项目似乎正处于主要功能定稿阶段。更新 的 50 个 PR 中，5 个已合并/关闭，45 个仍处于打开状态。今日未发布新版本。

这一模式表明重大版本发布可能在即，因为多个涵盖内存、安全和提供商集成的架构 RFC 已进入"已接受"状态。维护团队正在积极处理决策队列（Issue #8692），表明 RFC 治理是有序的。

## 2. 发布

**今日无新版本。** 上一个版本的发布早于本摘要期间。

## 3. 项目进展

**已合并/关闭的 PR（共 5 个）：**

| PR | 作者 | 摘要 |
|----|------|------|
| [#9134](https://github.com/zeroclaw-labs/zeroclaw/pull/9134) | JordanTheJet | **fix(plugins): admit exact component payload bytes** — 保留组件在插件准入时的精确字节，而非重新打开 `wasm_path`；将可执行清单绑定到可选的 SHA-256。关闭于 2026-09-21。 |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) | Project516 | **feat(runtime): expose token accounting on history-trim events** — 在 trim 时报告 `tokens_before`/`tokens_after`，修复 Issue #9619。关闭于 2026-09-20。 |
| [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | JordanTheJet | **fix(browser): make full browser automation opt-in, separate from browser_open** — 分离浏览器工具注册；不再强制将完整 `browser` 自动化合并到自动审批中。关闭于 2026-09-20。 |

**正在进行的打开状态的 PR（值得关注的）：**

| PR | 作者 | 状态 | 摘要 |
|----|------|------|------|
| [#10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931) | Audacity88 | 打开 | **fix(service): bound Windows task stdout and stderr logs** — 用直接的服务运行器替换 Windows 计划任务的 `.cmd` 追加重定向，以捕获有界限的日志。 |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | Audacity88 | 打开 | **feat(runtime): coordinate agent lifecycle mutations** — 为守护进程 RPC、网关、通道和 CLI 的变更提供一个共享的实时配置权威。 |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | Audacity88 | 打开 | **feat(runtime): enforce execution-tree iteration budgets** — 添加 `max_execution_tree_iterations` 配置选项。 |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | Audacity88 | 打开 | **fix(runtime): recover from rejected image requests** — 通过省略失败图片重试来从 HTTP 400 中恢复。 |
| [#10696](https://github.com/zeroclaw-labs/zeroclaw/pull/10696) | Audacity88 | 打开 | **fix(runtime): trim history to a low-water target instead of the cap** — 重构 trimmer 以低于最大水位线为目标。 |

## 4. 社区热点话题

**评论数最高的 Issue：**

| Issue | 作者 | 评论数 | 状态 | 摘要 |
|-------|------|--------|------|------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | fanchanghu | 26 | 已关闭 | **RFC: Decouple memory lifecycle policy from storage backends** — 提出在持久化内存存储与高层生命周期策略之间建立清晰边界；将治理逻辑从后端实现中分离出来。 |
| [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | REL-mame | 25 | 已关闭 | **RFC: ZeroClaw Chat Completions profile** — 添加 OpenAI Chat Completions 协议兼容性，以集成 Open WebUI、LobeChat、Continue.dev、LangChain 和 OpenAI SDK。 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | NiuBlibing | 24 | 已关闭 | **RFC: Add a per-execution confirmation tier for high-risk shell commands** — 实现 Claude Code 风格的 allow/ask/deny 策略来控制 shell 执行。 |
| [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | vrurg | 23 | 已关闭 | **RFC: Goal mode v1 — bounded foreground Matrix work** — 跨多个 agent 轮次的持久化有界用户目标，与重启交接和异步工作解耦。 |
| [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) | metalmon | 22 | 已关闭 | **RFC: Realtime speech-to-speech channel for Gemini Live** — 添加可选的实时语音通道，Gemini Live 为首个提供商。 |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | yanchenko | 20 | 已关闭 | **RFC: Separate authoritative memory storage from optional enrichment connectors** — 存储层与 enrichment 层之间的架构边界。 |
| [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | ilteoood | 19 | 已关闭 | **RFC: Prefer a lighter ZeroClaw core through external integrations** — 评估集中式与周边集成，以减轻核心膨胀。 |

**分析：** 高影响力 Issue 主要为现已"已接受"状态的 RFC。主题如下：

1. **内存架构重构** — 三个 RFC（#6850、#9103、#9048）针对内存/存储分离，表明重大架构投入。
2. **安全加固** — Shell 命令确认（#7155）、可插拔认证（#7141）和安全管道（#7142）反映了生产级控制的需求。
3. **生态系统互操作性** — Chat Completions 配置文件（#8603）和 A2A 出站客户端（#9106）扩展协议兼容性。
4. **运维体验** — RFC 流程简化（#9496）和遥测（#9621）表明维护团队对社区反馈的响应性。

## 5. Bug 与稳定性

**正在修复的高优先级 Bug：**

| Issue/PR | 严重程度 | 状态 | 摘要 |
|----------|----------|------|------|
| [#10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931) | 高 | 打开 | Windows 任务 stdout/stderr 日志无界增长 — 修复用有界日志写入器替换 `.cmd` 重定向。 |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | 高 | 打开 | 图片请求拒绝导致轮次崩溃 — 运行时现通过重试失败的图片来从 HTTP 400 恢复。 |
| [#10696](https://github.com/zeroclaw-labs/zeroclaw/pull/10696) | 高 | 打开 | 历史 trimmer 触发过于频繁 — 重构为基于低水位目标而非上限触发。 |
| [#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) | 高 | 打开 | 流式协议守卫误抑制有效文本 — `StreamTextToolGuard` 错误地抑制了代码块中引用工具结果形状对象的回复。 |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | 高 | 打开 | Git 操作忽略允许的根目录 — 将 `git_operations` 限制为授权根目录，修复 Flaw #10334。 |
| [#10801](https://github.com/zeroclaw-labs/zeroclaw/pull/10801) | 高 | 打开 | ZeroCode 通知延迟取消正在运行的轮次 — 重载现避免取消活跃轮次。 |
| [#10904](https://github.com/zeroclaw-labs/zeroclaw/pull/10904) | 高 | 打开 | 视觉能力门控过于严格 — 即使标记未解析为图片，只要有图片标记存在就会使轮次失败。 |

**回归提示：** 今日无新回归报告。现有修复涉及 Windows 服务稳定性、token 计费准确性和浏览器自动化安全边界。

## 6. 功能请求与路线图信号

**高优先级 RFC（已接受，尚未合并）：**

| Issue | 优先级 | 摘要 |
|-------|--------|------|
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | P1 | **Pluggable inbound authentication and canonical principals** — OIDC 和可插拔提供商支持身份与访问。 |
| [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | P1 | **Per-model capability & context-window config** — 视觉、context_window 用于能力检查和 UI 显示。 |
| [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | P1 | **Per-execution shell confirmation tier** — Allow/ask/deny 策略模式。 |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | 高 | **Canonical sandbox_policy schema** — 在 `RiskProfileConfig` 上添加可扩展的 serde-defaulted 策略。 |
| [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | P2 | **Abstract KeySource trait** — 按来源/部署形式分类主密钥材料。 |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | P2 | **A2A outbound client (A2ATool)** — 启用主动的外部 A2A agent 调用。 |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | P2 | **AI-assisted PR pre-review** — 批准评论-only SOP 管道。 |

**预测：** 下一个版本（可能是 v0.9.x）似乎将包含：

- 安全基础（认证管道、沙箱策略、凭证分类）
- 内存架构分离（存储与 enrichment 分离、对话与长期记忆分离）
- 协议互操作性（Chat Completions、A2A 出站）
- 运维工具（执行预算、shell 确认层级）

## 7. 用户反馈摘要

**从 RFC 和 PR 中识别的痛点：**

1. **配置复杂性** — 多个 RFC（#7897、#9975）解决在无需完全守护进程重载的情况下应用安全/通道更新；运维人员需要动态策略更新。
2. **内存生命周期混淆** — 用户报告会话历史和长期记忆在概念上分离但实现中混合（#9048），导致意外行为。
3. **安全可见性** — 运维人员缺乏对 active 安全态势的了解；RFC #6971 解决检查和审计缺口。
4. **RFC 流程摩擦** — 社区反馈（Issue #9496）指出"比它支持的决策更慢更繁琐"，提及 7 天最短时限和广泛共识要求。
5. **集成膨胀** — Issue #6165 承认长尾集成扩展了核心配置和安全表面；用户希望更轻量的默认值。

**满意度信号：** 已接受 RFC 的高参与度（各 23-26 条评论）表明社区对项目架构方向的高度投入。维护者对主要 RFC 的响应式修订周期（多个"Rev N"更新）表明了贡献者所重视的迭代设计文化。

## 8. 待办关注

**需要维护者关注的 Issue：**

| Issue | 状态 | 存在时间 | 摘要 |
|-------|------|----------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 打开 | 约 3 个月 | **Maintainer decision queue for RFCs** — 待决决策的活跃追踪器；当前 15 条评论。 |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | 打开 | 约 3 个月 | **Sandbox policy schema** — 需要作者操作；标记 `needs-author-action`。 |
| [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | 打开 | 约 2 个月 | **Anthropic OAuth support** — 需要作者操作；标记 `needs-author-action`。 |
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | 打开 | 约 2 个月 | **Sender authorization for Bluesky/Reddit** — 需要维护者审查。 |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | 打开 | 约 1 个月 | **Git allowed roots** — 需要维护者审查；安全敏感。 |

**过时风险：** 前 30 个 Issue 均未显示过时标记；项目保持活跃的分诊纪律。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*