# OpenClaw 生态日报 2026-11-10

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-10 04:16 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text while keeping the Markdown structure intact
2. Keep URLs, numbers, code references, issue/PR numbers as-is
3. Use natural technical Chinese
4. Output ONLY the translation with no preamble or markdown fences

Let me carefully translate section by section.

Key terms I need to be consistent with:
- OpenClaw - keep as-is
- Issue/PR - 保持英文
- P0/P1/P2 - keep as-is
- GitHub - keep as-is
- README - keep as-is
- API - keep as-is
- CLI - keep as-is
- Kubernetes - keep as-is
- SQLite - keep as-is
- Docker - keep as-is
- RHEL - keep as-is
- fsGroup - keep as-is
- PVC - keep as-is
- glibc - keep as-is
- Telegram - keep as-is
- Android - keep as-is
- MCP - keep as-is
- CLAW.md - keep as-is
- Gateway - 翻译为 "网关"
- Template(s) - 模板
- Release - 发布版本
- Bug - Bug（可以保留）
- Crash-loop - 崩溃循环
- Regressions - 回归问题
- UX - 可以保留或翻译为 "用户体验"

Let me translate section by section carefully:

Title: OpenClaw 项目日报 — 2026-11-10

Section 1: 今日概览
- high maintenance velocity - 高维护活跃度
- updated in last 24 hours - 过去 24 小时内更新
- actively addressing - 正在积极处理
- critical stability regressions - 关键稳定性回归问题
- Linux child process handling - Linux 子进程处理


- Windows reliability - Windows 可靠性
- Templates feature initiative - 模板功能计划
- No new releases shipped today - 今日未发布新版本
- issue tracker - issue 追踪
- tension between rapid feature development and regression prevention - 快速功能开发与回归预防之间的张力
- "UX release blocker" tagged items - 标记为"用户体验版本阻断"的事项

Section 2: 发布版本
- No new releases today - 今日无新发布版本
- release pipeline - 发布流程
- visible in PR - 在 PR 中可见
- no tagged versions - 无标签版本

Section 3: 项目进展

Section 4: 社区热点话题

Section 5: 问题与稳定性

Section 6: 功能需求与路线图信号

Section 7: 用户反馈摘要

Section 8: 积压待办关注

我需要确保整个翻译保持技术文档的专业性和准确性，同时保持与原始英文版本相同的结构和格式。
</think>


# OpenClaw 项目日报 — 2026-11-10

## 1. 今日概览

OpenClaw 今日呈现 **高维护活跃度**，过去 24 小时内有 500 个 Issue 和 500 个 PR 发生更新。项目正在积极处理多项关键稳定性回归问题（尤其是 Linux 子进程处理和 Windows 可靠性方面），同时由单一贡献者主导推进模板系统（Templates）大型功能开发。今日未发布新版本，但多个 P0/P1 问题已得到解决。Issue 追踪反映出快速功能开发与回归预防之间的持续张力，标记为"用户体验版本阻断"的多个事项仍在开放状态。

---

## 2. 发布版本

**今日无新发布版本。** 发布流程保持活跃（可见于相关 PR #193499，涉及发布订阅机制），但 2026-11-10 无标签版本发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR（重点）
| PR | 作者 | 领域 | 摘要 |
|----|------|------|------|
| [#196373](https://github.com/openclaw/openclaw/pull/196373) | RomneyDa | 发布 | 支持大型恢复 Docker 归档传输（修复约 1.8 GB 归档哈希校验中止问题） |

### 活跃开发中（开放 PR）
- **模板系统全面重构**（Patrick-Erichsen — 5+ 个 PR）：
  - [#196427](https://github.com/openclaw/openclaw/pull/196427) — 发布前内联包审查
  - [#196349](https://github.com/openclaw/openclaw/pull/196349) — 通过原生管理机制安装捆绑插件
  - [#196348](https://github.com/openclaw/openclaw/pull/196348) — 捆绑完整 skill 目录并执行原生信任检查
  - [#196322](https://github.com/openclaw/openclaw/pull/196322) — 在 CLAW.md 清单中配置 Templates
  - [#196411](https://github.com/openclaw/openclaw/pull/196411) — 保留自定义引导初始化流程

- **修复类 PR 审核中**：
  - [#196305](https://github.com/openclaw/openclaw/pull/196305) — 允许静默原生完成回退（agents）
  - [#196099](https://github.com/openclaw/openclaw/pull/196099) — config set 拒绝越界数组索引
  - [#196426](https://github.com/openclaw/openclaw/pull/196426) — 重启探测认证拒绝分类
  - [#196394](https://github.com/openclaw/openclaw/pull/196394) — 修复 fsGroup 重新挂载后的铸造私有存储（Kubernetes）

---

## 4. 社区热点话题

### 评论最活跃的 Issue（按评论数排序）
| Issue | 作者 | 评论数 | 话题 |
|-------|------|--------|------|
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Rene-F | 30 | **Windows 启动缓慢、插件关闭异常、schtasks 报错** — P0 阻断 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | marknilsn | 27 | 深度梦境阶段因召回淘汰永不晋升 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | jlapenna | 27 | 崩溃后延迟回收提交检查点失败 |
| [#193962](https://github.com/openclaw/openclaw/issues/193962) | karam2022 | 24 | 2026.10.10 起 SQLite header-probe 超时修复无法访问 |
| [#166133](https://github.com/openclaw/openclaw/issues/166133) | hugogu | 16 | MCP tool_call 包装器将整数参数强制转换为字符串 |

### 深层需求分析
1. **平台可靠性（Windows/Linux）**：三个独立 P0/P1 问题集中于进程生命周期管理——旧版 glibc 上的子进程回收（#191841）、Windows schtasks 可靠性（#170956）以及 Kubernetes fsGroup 挂载（#192959）。用户需要网关重启在各种环境下都能可预测地工作。

2. **内存/梦境系统**：Issue #150635 表明召回晋升管道在大规模场景下存在问题（512 条目上限导致夜间淘汰）。这是核心 AI 记忆功能，可能需要架构层面的审查。

3. **MCP 互操作性**：整数强制转换 Bug（#166133）阻碍 MCP 工具推广——需要类型安全的包装器修复。

---

## 5. Bug 与稳定性

### P0 紧急（用户体验版本阻断）
| Issue | 严重程度 | 状态 | 对应修复 PR？ |
|-------|----------|------|--------------|
| [#170956](https://github.com/openclaw/openclaw/issues/170956) — Windows 启动/重启可靠性 | 崩溃循环 | 开放 | 无 |
| [#193962](https://github.com/openclaw/openclaw/issues/193962) — SQLite probe 超时修复无法访问 | 用户体验阻断 | 已关闭 | 隐含已解决 |

### P1 高优先级
| Issue | 影响 | 状态 | 对应修复 PR？ |
|-------|------|------|--------------|
| [#191841](https://github.com/openclaw/openclaw/issues/191841) — Linux glibc < 2.31 上的原生子进程回收回归 | RHEL 8 上所有 exec 失效 | 开放 | 无 |
| [#190307](https://github.com/openclaw/openclaw/issues/190307) — 网关重启后 agents 进入"降级"状态 | 会话状态异常 | 开放 | 无 |
| [#157255](https://github.com/openclaw/openclaw/issues/157255) — 泳道超时后未释放 turn claim | 会话卡死 90+ 分钟 | 开放 | 无 |
| [#174895](https://github.com/openclaw/openclaw/issues/174895) — 活跃网关锁文件被错误回收 | 虚假重启触发 | 开放 | 无 |
| [#192959](https://github.com/openclaw/openclaw/issues/192959) — Kubernetes PVC 重新挂载后网关拒绝启动 | 安全/崩溃 | 开放 | [#196394](https://github.com/openclaw/openclaw/pull/196394) |
| [#166641](https://github.com/openclaw/openclaw/issues/166641) — web_fetch 回退逻辑阻塞主线程 | 存活探测停滞 | 开放 | 无 |

### 显著回归问题
- **2026.10.10**：子进程回收回归（#191841）导致 RHEL 8/AlmaLinux 8 上所有 `spawn`/`exec` 失效
- **2026.10.3**：新网关启动可能使主 agent 准入被覆盖（#172628）——现已关闭
- **2026.10.10**：SQLite header-probe 修复对之前版本不可达（#193962）——已关闭

---

## 6. 功能需求与路线图信号

### 高互动功能请求
| Issue | 作者 | 评论数 | 摘要 |
|-------|------|--------|------|
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | Cyb3rb1ade | 12 | 让内存槽位所有者驱动梦境页面 |
| [#138990](https://github.com/openclaw/openclaw/issues/138990) | JPKay-AI | 9 | 为长时间前台运行提供可强制执行的检查点 |
| [#140213](https://github.com/openclaw/openclaw/issues/140213) | oshaughnessy-junior | 7 | 允许每个模型配置多个策略别名 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | igorrius | 12 | 死信队列条目永久存在（无 TTL/CLI 清理机制） |

### 预计下一版本候选
1. **模板系统** — Patrick-Erichsen 的 5+ 个协同 PR 表明模板功能完成已近在咫尺
2. **MCP 2.0 迁移**（#119294）— 跟踪迁移至无状态 MCP 规范
3. **Android 用户体验对齐**（#175826）— 匹配浏览器端 in-chat 工作流

---

## 7. 用户反馈摘要

### 持续痛点
| 主题 | 证据 | 严重程度 |
|------|------|----------|
| **Windows 可靠性** | 多份报告指出重启失败、schtasks 权限错误、插件关闭异常 | 高 |
| **Kubernetes 兼容性** | fsGroup 重新挂载破坏凭证存储和 GitHub 身份信息 | 高 |
| **内存晋升机制失效** | 深度梦境阶段条目无法突破 512 上限 | 中 |
| **配置诊断陷阱** | `config get` 隐藏 auth.password，恢复期间误导用户（#173313） | 中 |
| **CI 矩阵限制** | PR 预检在 121 个任务时中止（上限 120）（#149631） | 中低 |

### 用户满意度信号
- Issue #182891（提示缓存从未复用）收到 1 个 👍 —— 表明缓存性能是已知问题但尚未广泛阻断
- 多项 Telegram 频道改进表明多渠道部署用例正在增长

---

## 8. 积压待办关注

### 长期未响应重要 Issue
| Issue | 存在时长 | 作者 | 优先级 | 问题描述 |
|-------|----------|------|--------|----------|
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 约 4 个月 | igorrius | P2 | 死信队列条目永久存在——无清理机制 |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | 约 2 个月 | Cyb3rb1ade | P2 | 内存槽位所有者驱动梦境页面 |
| [#138990](https://github.com/openclaw/openclaw/issues/138990) | 约 2 个月 | JPKay-AI | P2 | 为长时间运行提供可强制执行的检查点 |
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | 约 5 个月 | guscamara | P2 | 模型回退通知泄露至外部渠道 |

### 需维护者关注的 PR
| PR | 作者 | 状态 | 障碍 |
|----|------|------|------|
| [#196305](https://github.com/openclaw/openclaw/pull/196305) | indra622 | 👀 等待维护者审查 | — |
| [#196472](https://github.com/openclaw/openclaw/pull/190472) | amittell | 👀 等待维护者审查 | 需要 PR 上下文 |
| [#196099](https://github.com/openclaw/openclaw/pull/196099) | YangManBOBO | ⏳ 等待作者响应 | — |
| [#196323](https://github.com/openclaw/openclaw/pull/196323) | Patrick-Erichsen | 需要补充验证 | — |

---

*日报基于 OpenClaw/openclaw 仓库 2026-11-10 活动数据生成*

---

## 横向生态对比

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me translate this carefully, following all the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, issue/PR references, version tags, etc. as-is
4. Use natural technical Chinese register

Let me go through the report section by section and translate it.

Key terms to handle:
- "Personal AI Assistant" - 个人 AI 助手
- "Agent" - Agent（保留不翻译，或译为"智能体"）
- "Ecosystem" - 生态
- "Cross-Project Comparison Report" - 跨项目对比报告
- "Releases" - Release/版本发布
- "Community" - 社区
- "Pull Request" - PR（保留）
- "Issue" - Issue/工单
- "Bug" - Bug/缺陷
- "Critical" - Critical/严重
- "High severity" - 高优先级/高严重性
- "Security" - 安全
- "Plugin" - 插件
- "Architecture" - 架构
- "Health signals" - 健康信号/健康度指标
- "Triage" - 分诊/筛选
- "Release cadence" - 发布节奏
- "Regression" - 回归问题
- "Session state" - 会话状态
- "SQLite" - SQLite（保留）
- "Local model" - 本地模型
- "Multi-platform" - 多平台
- "Channel integration" - 渠道集成
- "Enterprise" - 企业级
- "Zero-trust" - 零信任
- "OIDC" - OIDC（保留）


- "Audit logging" - 审计日志
- "Hash-chain" - 哈希链
- "OMEMO" - OMEMO（保留）
- "MLX" - MLX（保留）
- "llama.cpp" - llama.cpp（保留）
- "Ollama" - Ollama（保留）
- "MCP" - MCP（保留）
- "Gateway" - 网关
- "Relay" - 中继/Relay
- "Telegram" - Telegram（保留）
- "WeChat" - 微信
- "WhatsApp" - WhatsApp（保留）
- "QQ" - QQ（保留）
- "XMPP" - XMPP（保留）
- "Kubernetes" - Kubernetes（保留）
- "Windows" - Windows（保留）
- "Linux" - Linux（保留）
- "macOS" - macOS（保留）
- "Android" - Android（保留）
- "GBK/CP936" - GBK/CP936（保留）
- "Unicode" - Unicode（保留）
- "fsGroup" - fsGroup（保留）
- "schtasks" - schtasks（保留）
- "WAL" - WAL（保留）
- "API" - API（保留）
- "CLI" - CLI（保留）
- "JSON-RPC" - JSON-RPC（保留）
- "SDK" - SDK（保留）
- "GPU" - GPU（保留）
- "CUDA" - CUDA（保留）
- "Metal" - Metal（保留）
- "Apple Silicon" - Apple Silicon（保留）

现在我准备开始处理这份文件。
</think>


# 跨项目生态对比报告
## 个人 AI 助手与 Agent 开源生态 — 2026-11-10

---

## 1. 生态总览

截至 2026 年 11 月，个人 AI 助手与 Agent 开源生态正处于**高速扩张阶段**。四个被追踪的项目中，有三个保持着每日超过 50 个 PR 的持续提交频率，而 IronClaw 则没有任何活动记录——其维护状态令人担忧。整个生态集体反映出一个日趋成熟的格局：核心基础设施问题（会话状态可靠性、SQLite 持久化、跨平台进程生命周期管理）在各项目中普遍存在，而差异化则体现在部署拓扑（Relay 直连 vs. 中继）、渠道集成广度（Telegram、微信、QQ、WhatsApp、XMPP）以及本地 AI 模型支持策略上。多个项目共同收敛于插件架构、成本估算功能和跨平台消息可靠性，表明各方对"生产就绪的个人 AI"需要什么已形成共识。生态正在同步推进企业级特性（OIDC、OMEMO、Kubernetes 兼容性），同时仍在 Beta 迭代中解决基本的用户体验回归问题。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|-------------|---------|----------|
| **Issue 更新（24h）** | **500** | 50 | 17 | 28 |
| 开放 Issue | 282 | 50 | 15 | 20 |
| 已关闭 Issue | 218 | 0 | 2 | 8 |
| **PR 更新（24h）** | **500** | **50** | **50** | **50** |
| 开放 PR | 346 | 48 | 42 | 38 |
| 已合并/关闭 PR | 154 | 2 | 8 | 12 |
| **今日发布版本** | 0 | **1** (v0.23.1) | **1** (v2.3.0-beta.3) | 0 |
| **置顶 Issue 评论数** | **30** | 10 | 4 | 6+ |
| **开放中的严重级别 Issue** | 2 P0、7 P1 | 4 P0、8 P1 | 2 Critical、3 High | 2 S1、4 S2 |
| **进行中的重大特性** | Templates 系统 | 插件 JSON-RPC | MLX + 本地 GPU | OIDC 设备引导 |
| **活跃的渠道集成** | Telegram、Android | 微信、Telegram、WhatsApp | QQ、Telegram、微信 | （Relay/网页为主） |
| **安全类 Issue 追踪** | 2 P0/P1 | 1 P1 | 1 High | 2 S1/S2 |
| **社区健康信号** | 高流转、高互动 | 聚焦、趋于稳定 | Beta 回归问题、活跃 | 安全优先、企业导向 |

**解读：** OpenClaw 在原始数量上领先一个数量级，表明其拥有更大的贡献者群体或大量自动化批量更新行为。Hermes Agent 和 ZeroClaw 展现出最健康的发布节奏和最系统的缺陷分诊流程。QwenPaw 正处于 Beta 迭代中期，有文件在案的回归问题。IronClaw 已不活跃。

---

## 3. OpenClaw 的定位

### 相比同行的优势

| 维度 | OpenClaw 的定位 | 与同行对比 |
|-----------|-------------------|-----------|
| **Issue 体量与社区广度** | 500 个 Issue/PR/天；置顶 Issue 达 30 条评论 | 按原始互动量计，比任何同行**高出 2–10 倍** |
| **功能覆盖面** | Templates、MC P2.0、Gateway、Android、多渠道 | 功能矩阵比 QwenPaw（创作者导向）或 ZeroClaw（Relay 导向）更宽 |
| **发布节奏** | 高频发布；今日无正式版本 | 活跃但缺乏 Hermes Agent 那种结构化的 Rollup 规范 |
| **Windows 生态** | 积极支持 Windows，有已知回归问题 | 与 QwenPaw 持平；比 Hermes Agent 的 Windows 覆盖更成熟 |

### 技术路线差异

- **OpenClaw vs. Hermes Agent：** OpenClaw 采用以 Gateway 为核心的 Relay 架构，支持直接部署 Agent；Hermes Agent 则维护更丰富的多渠道消息适配层（微信、WhatsApp、Telegram 统一在通用抽象之后）。Hermes Agent 的 SQLite 会话状态模型更有纪律性；OpenClaw 的会话管理有更多 P1 级回归。
- **OpenClaw vs. QwenPaw：** OpenClaw 面向专业/开发者用户，以 CLI 为首要工作流，依赖 MCP 扩展性；QwenPaw 强调面向消费者的创作者工具、本地模型支持（MLX）以及中文市场需求。OpenClaw 的插件模型更结构化（基于 Manifest 打包）；QwenPaw 的更动态（SDK 插件转换进行中）。
- **OpenClaw vs. ZeroClaw：** OpenClaw 的架构以 Agent 为中心，Gateway 为 Relay；ZeroClaw 以身份和安全为首要，采用 OIDC 设备引导、哈希链审计日志和 OMEMO 加密。ZeroClaw 面向企业零信任部署；OpenClaw 面向个人高级用户。

### 社区体量指标

- 置顶 Issue 评论数 **30**（OpenClaw）vs. 10（Hermes）、6+（ZeroClaw）、4（QwenPaw），确立 OpenClaw 为生态中**讨论最活跃**的项目。
- Templates 功能由单一贡献者（Patrick-Erichsen）提出 5+ 个协同 PR 推动——这一模式表明核心团队规模小或专业高度集中。
- OpenClaw 开放 Issue 282 个 vs. Hermes Agent 的 50 个，提示要么积压更多，要么 Issue 分诊/关闭不够激进。

---

## 4. 各项目共享的技术焦点

以下需求在各项目中独立出现，揭示了生态层面的趋同：

### A. 会话状态持久化（OpenClaw、Hermes Agent、QwenPaw、ZeroClaw）

| 项目 | 具体问题 | 证据 |
|---------|---------------|----------|
| OpenClaw | Gateway 重启导致 Agent 降级；SQLite 头部探测超时 | P0 #170956、#193962 |
| Hermes Agent | 消息未持久化到 state.db；中断时部分轮次文本丢失；SQLite 连接泄漏 | P0 #121750、P1 #96152、#140823 |
| QwenPaw | Windows 长路径下 Recall 历史失效；SQLite TimeoutError 误判 | #8585、#8620 |
| ZeroClaw | AuditLogger 哈希链污染；配置写入器丢弃并发更新 | #10359、#12347 |

**统一需求：** 四个项目都在独立发现，基于 SQLite 的会话状态需要谨慎的句柄生命周期管理、WAL 提交纪律和平台特定路径处理。这是整个生态最紧迫的共享工程挑战。

### B. 多平台渠道可靠性（OpenClaw、Hermes Agent、QwenPaw）

| 项目 | 受影响渠道 | 具体问题 |
|---------|-------------------|----------------|
| OpenClaw | Telegram、Android | Telegram 多消息轮次处理；Android 插件激活 |
| Hermes Agent | 微信、Telegram、WhatsApp | 持久化失败；WhatsApp 网关退出；媒体上传误报失败 |
| QwenPaw | QQ、Telegram、微信 | 仅图片消息被丢弃；纯文本审批绕过 |

**统一需求：** 随着 Agent 成为多渠道枢纽，在各消息平台（各有不同的速率限制、消息顺序保证和附件处理方式）之间维护一致的会话语义，正暴露出系统性脆弱性。

### C. 本地 AI 模型支持（QwenPaw、OpenClaw）

| 项目 | 方案 | 证据 |
|---------|----------|---------|
| QwenPaw | MLX 引擎（Apple Silicon）、llama.cpp GPU 控制、Ollama 上下文窗口检测 | PR #8647、#8649、#8236 |
| OpenClaw | 原生子进程回收、MCP 工具封装、web_fetch 降级 | Issue #191841、#166133、#166641 |
| Hermes Agent | 通过刷新绑定池化 Anthropic 账号 | PR #12361 |

**统一需求：** 生态正在共同构建一级本地模型支持——从 OpenAI 兼容的 API 封装走向平台特定的 GPU 加速（Metal、CUDA）和上下文窗口自动检测。这是面向隐私敏感部署的成熟信号。

### D. 插件架构扩展（OpenClaw、Hermes Agent、QwenPaw、ZeroClaw）

| 项目 | 插件演进 | 证据 |
|---------|-----------------|---------|
| OpenClaw | 基于 Manifest 的插件打包 Templates 系统 | Patrick-Erichsen 的 5+ 个 PR |
| Hermes Agent | JSON-RPC 方法、会话作用域事件、Schema 扩展 | PR #142005、#142056 |
| QwenPaw | 创作者插件生态、SDK 插件转换（Whisper） | PR #8654、#8431 |
| ZeroClaw | OIDC 设备引导、OMEMO 加密模块 | PR #12317、#11847 |

**统一需求：** 每个项目都在独立扩展其插件模型，方向包括更深入的系統集成、更丰富的进程间通信、更细粒度的权限/信任模型。这种趋同暗示生态正在共同发现：AI Agent 需要一个**平台 OS 抽象**，而非单体应用。

### E. Windows 平台可靠性（OpenClaw、Heremes Agent、QwenPaw）

| 项目 | 具体故障 | 证据 |
|---------|------------------|---------|
| OpenClaw | 启动缓慢、插件关闭失败、schtasks 错误 | #170956（30 条评论） |
| Hermes Agent | 误报损坏恢复、state.db 回滚 | #148628（P0） |
| QwenPaw | LTSC 启动挂起、长路径规范化、中文路径编码 | #8616、#8627、#8234 |
| ZeroClaw | install.sh 中 musl/glibc 检测 | #12153（已关闭） |

**统一需求：** Windows 仍是整个生态最具挑战性的平台，故障集中在路径处理（长路径、Unicode/GBK）、进程生命周期（schtasks、启动时序）和 SQLite URI 兼容性。各项目均未拥有完整的 Windows 预发布测试矩阵。

---

## 5. 差异化分析

### 功能定位差异化

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|-------------|---------|----------|
| **主要用户** | 开发者/高级用户 | 多渠道通信者 | 创作者/消费者 | 企业运维者 |
| **核心创新** | Templates 系统、MCP 2.0 | 统一消息枢纽、插件 JSON-RPC | 本地 AI（MLX）、创作者工具 | OIDC 安全、Relay 架构 |
| **平台优先级** | 跨平台（Windows/Linux/macOS/Android） | 多渠道消息 | 中国市场、本地模型 | 企业零信任 |
| **发布纪律** | 高频、非正式 | 结构化 Rollup（618 PRs/v0.23.1） | Beta 周期驱动 | 功能门控发布 |
| **安全姿态** | 标准 | 标准 | 标准 | **审计日志、哈希链、OMEMO** |
| **扩展模型** | 基于 Manifest 的 Templates | JSON-RPC + 会话事件 | SDK 插件转换 | OIDC 设备引导 |

### 技术架构差异

- **OpenClaw** 采用轻量 Gateway + 车道式轮次管理 + SQLite 会话状态，侧重 MCP 协议采纳。架构倾向于简洁和广泛兼容性。
- **Hermes Agent** 实现了更丰富的多渠道适配层，每个消息平台有独立的持久化路径。其插件架构是生态中最成熟的（会话作用域事件、Schema 扩展）。
- **QwenPaw** 是唯一拥有专属**创作者**插件生态和一级**本地模型**支持（MLX、llama.cpp、Ollama）的项目。其架构最面向消费者。
- **ZeroClaw** 在架构上独树一帜：唯一将**哈希链审计日志**、**OMEMO 加密**和**OIDC 设备证书引导**作为一等公民特性的项目。其 Relay 拓扑从底层贯彻零信任原则。

### 目标用户分群

```
OpenClaw   ──► 开发者 / 高级用户 / CLI 优先
Hermes     ──► 统一消息枢纽用户 / 多渠道通信者
QwenPaw    ──► 创作者 / 消费者 / 中文市场 / 本地 AI 爱好者
ZeroClaw   ──► 企业 IT / 安全敏感 / 零信任运维者
```

---

## 6. 社区动力与成熟度

### 活跃度梯队

| 梯队 | 项目 | 解读 |
|------|---------|----------|
| **第一梯队 — 高速迭代** | OpenClaw | 500 PRs/天暗示庞大的分布式团队或高自动化活动。高互动但高流转。趋于成熟但尚未稳定。 |
| **第二梯队 — 结构化迭代** | Hermes Agent、QwenPaw、ZeroClaw | 均为约 50 PRs/天。Hermes Agent 发布管理最具纪律性。QwenPaw 处于 Beta 中期。ZeroClaw 安全与功能并重。 |
| **第三梯队 — 不活跃** | IronClaw | 报告窗口内无活动记录。维护状态不明。 |

### 快速迭代中的项目

| 项目 | 证据 | 趋势 |
|---------|----------|-----------|
| **OpenClaw** | 24h 内合并 154 个 PR；2 个 P0 Issue 今天已解决 | 功能扩展与回归修复同步进行 |
| **QwenPaw** | 24h 内合并 8 个 PR；仅 MLX 相关就有 3 个 PR；GBK 修复在审 | 快速冲刺本地 AI 能力对等 |
| **ZeroClaw** | 24h 内关闭/合并 12 个 PR；OIDC 和 XMPP 重大功能推进中 | 企业功能完备化冲刺 |

### 趋于稳定中的项目

| 项目 | 证据 | 趋势 |
|---------|----------|-----------|
| **Hermes Agent** | 结构化 v0.23.1 Rollup 了 618 个 PR；系统性 Telegram Bug 扫除（仍有 207 个待处理，共 790 个） | 从高速功能增长转向系统性质量改进 |
| **OpenClaw** | 500 PR 活动量下今日零新版本发布 | 可能进入稳定窗口期，等待下一版本发布 |

---

## 7. 趋势信号

以下信号从跨项目社区反馈和开发活动中浮现，对 AI Agent 开发者和决策者具有高度参考价值：

### A. SQLite 是整个生态的命门
**信号强度：** 🔴 严重  
每个活跃项目都独立暴露出 SQLite 会话状态问题——连接泄漏、WAL 提交失败、长路径 URI 处理、句柄生命周期 Bug 和 TimeoutError 误判。这不是某个项目的问题；而是整个生态共同承受的架构选择。**建议：** 各项目应考虑将会话状态迁移至更可靠的存储（PostgreSQL、RocksDB），或投入建设 SQLite 可靠性层（更好的句柄管理、连接池、超时传递）。

### B. Windows 作为二等平台在生产规模下已不可接受
**信号强度：** 🟠 高  
OpenClaw（#170956，30 条评论）、QwenPaw（LTSC 崩溃、长路径、GBK 编码）、Hermes Agent（误报损坏恢复）和 ZeroClaw（musl/glibc 检测）都有平台特定的 Windows Bug，阻碍真实部署。中国 Windows 市场（GBK/CP936 编码、Unicode 路径）尤被忽视。**建议：** 各项目在发布功能前，都需要一套专用的 Windows 预发布测试矩阵。

### C. 插件架构正趋同于类 OS 模型
**信号强度：** 🟠 高  
四个项目都在独立构建更丰富的插件模型，包含进程间通信、会话作用域事件、信任边界和 Schema 扩展。这种趋同表明生态正在共同发现：AI Agent 需要一个**平台 OS 抽象**，而非单体应用。**建议：** 开发者应从第一天就设计具备 JSON-RPC、能力型权限和会话作用域事件总线的插件系统。

### D. 本地模型支持已是近期预期
**信号强度：** 🟠 高  
QwenPaw 的 MLX + llama.cpp PR 集和 OpenClaw 的原生执行改进表明，用户越来越期望无需 API 依赖的本地模型支持。Ollama 上下文窗口自动检测（QwenPaw #8236）和池化凭证管理（Hermes Agent #12361）印证了这一趋势。**建议：** AI Agent 开发者现在应优先构建本地模型抽象层，用户需求已切实存在且持续增长。

### E. 企业级特性已不再是可选项
**信号强度：** 🟡 中等（增长中）  
ZeroClaw 的 OIDC 设备引导、哈希链审计日志和 OMEMO 加密代表了企业基线。OpenClaw 的 Kubernetes fsGroup 兼容性问题（#192959）和 Hermes Agent 的多租户会话隔离需求表明，企业需求（SSO、审计跟踪、安全边界）正在进入主流。**建议：** 面向专业部署的项目应在企业需求曲线陡峭化之前，投入 OIDC、审计日志和最小特权会话模型。

### F. 多渠道消息枢纽是核心用例
**信号强度：** 🟡 中等  
Hermes Agent、QwenPaw 和 OpenClaw 都在多渠道适配器（Telegram、微信、QQ、WhatsApp）上大力投入。这一用例——用一个 AI Agent 作为跨多个消息平台统一接口——是最终用户最切实的"个人 AI 助手"价值主张。**建议：** 渠道适配器抽象模式已足够成熟，可提炼为共享库或协议。

### G. IronClaw 的不活跃值得生态关注
**信号强度：** 🟢 观望  
Near AI 的 IronClaw 在 2026-11-10 无记录活动。这可能意味着项目归档、维护休整或 near.ai 战略重心的转移。更广泛的生态失去一个潜在集成点，如果项目被废弃的话。**建议：** 社区成员和 near.ai 应澄清 IronClaw 的状态；开发者不应在活跃的核心项目上构建依赖。

---

*本报告基于 2026-11-10 OpenClaw、Hermes Agent、QwenPaw、ZeroClaw 和 IronClaw 的 GitHub 活动数据编制。所有发现均有 Issue/PR 元数据、严重性标签、评论数和发布说明作为数据支撑。时间戳均反映过去 24 小时窗口。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me go through it carefully and translate it while following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, links, numbers, dates verbatim
4. Keep project names, repository slugs, etc. in original form
5. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

---

# Hermes Agent 项目日报 — 2026年11月10日

## 1. 今日概览

进入11月10日，Hermes Agent 保持了较高的活跃度：过去24小时内共更新了 **50 个 Issue** 和 **50 个 PR**，并发布了新的补丁版本（v0.23.1）。项目仍处于高频率开发状态，618个PR已合并入最新版本。社区参与度高，多个关键缺陷正在积极讨论中，多个PR聚焦于会话状态可靠性、平台集成（尤其是Telegram）以及基础设施稳定性方面。今日无Issue关闭——表明维护者正在积极进行分类和准备修复，而非直接解决——同时有2个PR合并，48个仍处于开放状态。

## 2. 版本发布

### ✅ v0.23.1 — Hermes Agent 补丁版本
**发布日期：** 2026年11月9日  
**版本类型：** 补丁（汇总版本）

> 本次发布整合了自 v0.23.0 以来合并的约 **618 个 PR**，现已面向所有分发渠道稳定发布：
> - GitHub release（CLI 及安装包）
> - Microsoft Store 应用
> - Docker 镜像
> - Hermes Cloud

**重要说明：**
- 这是一个经过筛选的稳定化窗口，详细的变更日志将延后至 **v0.24.0** 发布。
- 建议用户尽快更新，以获得累积的缺陷修复和性能改进。


- 本次补丁无破坏性变更。

**相关链接：** [Release v0.23.1](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.1)

## 3. 项目进展

### 今日合并/关闭的 PR（共2个）

| PR | 标题 | 组件 | 影响 |
|----|-------|-----------|--------|
| [#142005](https://github.com/NousResearch/hermes-agent/pull/142005) | feat(plugins): plugin JSON-RPC methods and session-scoped plugin events | CLI, Gateway, Plugins | **功能增强** — 支持前端插件通过JSON-RPC调用网关侧Python方法；启用会话范围的插件事件机制。关闭 #141975，属 #141982 的一部分。 |
| — | *其他PR正在审核中* | — | — |

### 今日取得进展的开放PR

| PR | 标题 | 优先级 | 状态 |
|----|-------|----------|--------|
| [#96152](https://github.com/NousResearch/hermes-agent/pull/96152) | fix(gateway): 关闭每个state.db读取句柄并限制fd增长 | **P1** | 修复SQLite连接泄漏，防止运行22天以上后出现"文件描述符过多"错误 |
| [#124943](https://github.com/NousResearch/hermes-agent/pull/124943) | fix(gateway): 迁移后开机时启用存活的unit | **P1** | 防止禁用的systemd unit在迁移后静默启动失败 |
| [#123361](https://github.com/NousResearch/hermes-agent/pull/123361) | fix(agent): 在预请求刷新时保持连接池绑定的Anthropic账号 | **P1** | 凭证池令牌解析的安全边界修复 |
| [#151809](https://github.com/NousResearch/hermes-agent/pull/151809) | fix(telegram): 提问与随后发送的照片被合为一个turn | **P2** | 改进Telegram多消息turn处理 |
| [#151797](https://github.com/NousResearch/hermes-agent/pull/151797) | fix(telegram): 媒体上传等待Telegram响应，而非将已送达文件报为失败 | **P2** | 修复大文件上传时的误报"超时"/"无法送达"错误 |
| [#148271](https://github.com/NousResearch/hermes-agent/pull/148271) | 移除旧版Skills Hub和Plugins Hub；引导至Marketplace | **P3** | 弃用旧版UI，引导用户使用新版Marketplace |
| [#152416](https://github.com/NousResearch/hermes-agent/pull/152416) | feat(plugin-catalog): 注册proactive-agent governor | **P3** | 新增目录项，用于turn治理和子代理监督插件 |
| [#152327](https://github.com/NousResearch/hermes-agent/pull/152327) | fix(process): 每个后台进程轮询tick仅执行一条沙箱命令 | **P2** | 将每个轮询周期的冗余沙箱命令从3条减少到1条 |

## 4. 社区热点话题

### 评论最多的Issue（按评论数排序）

| Issue | 标题 | 评论数 | 优先级 | 领域 |
|-------|-------|----------|----------|--------|
| [#141988](https://github.com/NousResearch/hermes-agent/issues/141988) | process_manage: 分页后台进程输出时抛出TypeError 'slice indices must be integers' | **10** | P2 | 终端 / 工具 |
| [#145183](https://github.com/NousResearch/hermes-agent/issues/145183) | 桌面端在Linux上窗口半透明，但设置行被隐藏——该效果无法关闭 | **9** | P2 | 桌面端 / 设置 |
| [#142488](https://github.com/NousResearch/hermes-agent/issues/142488) | 桌面端模型切换在profile-following会话中因元组`moved`崩溃（rename map遮蔽） | **7** | P2 | Gateway / 认证 |
| [#143290](https://github.com/NousResearch/hermes-agent/issues/143290) | 对刚结束的run调用POST /v1/runs/{id}/stop会中断下一条turn——新消息被静默丢弃 | **7** | P2 | Gateway / 会话 |
| [#142969](https://github.com/NousResearch/hermes-agent/issues/142969) | 未配对的WhatsApp适配器导致gateway退出——v0.22.4后每次CLI聊天均失败 | **5** | **P1** | Gateway / 插件 |
| [#140823](https://github.com/NousResearch/hermes-agent/issues/140823) | Gateway消息（WeChat/Telegram）自v0.22.1起未持久化至state.db | **4** | **P1** | Gateway / 会话 |

### 深层需求分析

**终端及进程管理（10条评论）：**  
Issue #141988揭示了macOS上后台进程输出分页器的缺陷。用户期望在管理长时间运行的任务时能可靠地获取日志，TypeError指向分页逻辑中的整数类型转换问题——一个狭窄但具有阻断性的bug。

**桌面端UI完整性（9条评论）：**  
Linux上的半透明效果无法通过UI开关控制（#145183），这反映了跨平台UI不一致性。Linux用户无法禁用该效果，表明平台能力检测存在缺陷。

**会话与模型切换脆弱性（各7条评论）：**  
#142488和#143290指向模型切换和run生命周期事件期间的脆弱会话状态转换。"静默失败"模式（消息被丢弃、错误被吞没）的反复出现，表明需要更好的错误暴露机制。

**平台集成可靠性（4–5条评论）：**  
WhatsApp（#142969）和WeChat/Telegram（#140823）的持久化问题表明，多平台消息适配器在近期版本中存在回归。将Hermes作为统一消息中心的用户正面临数据丢失和工作流中断。

## 5. 缺陷与稳定性

### 严重级别（P0）—— 4个活跃Issue

| Issue | 标题 | 严重程度 | 状态 |
|-------|-------|----------|--------|
| [#121750](https://github.com/NousResearch/hermes-agent/issues/121750) | fix(compression): 原地压缩后保留未见的turn | P0 | 会话状态风险 |
| [#111786](https://github.com/NousResearch/hermes-agent/issues/111786) | fix(agent): 保留可缓存的prompt上下文 | P0 | 缓存风险 |
| [#148628](https://github.com/NousResearch/hermes-agent/issues/148628) | fix(update): 停止误报损坏恢复和过期的state.db回滚 | P0 | Windows数据丢失风险 |
| [#128603](https://github.com/NousResearch/hermes-agent/issues/128603) | fix(desktop): 后台teardown退出编辑时保留脏的队列编辑缓冲区 | P0 | 桌面编辑数据丢失 |

### 高优先级（P1）—— 8个活跃Issue

| Issue | 标题 | 组件 | 是否有修复PR？ |
|-------|-------|-----------|---------|
| [#142969](https://github.com/NousResearch/hermes-agent/issues/142969) | 未配对的WhatsApp适配器导致gateway退出 | Gateway | — |
| [#140823](https://github.com/NousResearch/hermes-agent/issues/140823) | Gateway消息未持久化至state.db | Gateway | — |
| [#139599](https://github.com/NousResearch/hermes-agent/issues/139599) | Steers/队列prompt无来源归属 | Agent, Desktop | — |
| [#135544](https://github.com/NousResearch/hermes-agent/issues/135544) | 所有工具均被阻止的Cron运行被记录为成功 | Cron | — |
| [#136160](https://github.com/NousResearch/hermes-agent/issues/136160) | 被中断的turn：部分assistant文本应持久化 | Agent, Gateway | — |
| [#96152](https://github.com/NousResearch/hermes-agent/pull/96152) | state.db上的SQLite连接泄漏 | Gateway | **有** |
| [#124943](https://github.com/NousResearch/hermes-agent/pull/124943) | 迁移后开机时启用存活的unit | Gateway | **有** |
| [#123361](https://github.com/NousResearch/hermes-agent/pull/123361) | 在预请求刷新时保持池绑定的Anthropic账号 | Agent | **有** |

### 中等优先级（P2）—— 新增/近期重要缺陷

| Issue | 标题 | 组件 | 提交日期 |
|-------|-------|-----------|------------|
| [#152216](https://github.com/NousResearch/hermes-agent/issues/152216) | MCP `_connected_summary` 对已采纳的共享连接误报"失败" | MCP | 11月9日 |
| [#152284](https://github.com/NousResearch/hermes-agent/issues/152284) | aarch64-darwin无法构建——pnpm-deps-hash不匹配 | 构建 | 11月9日 |
| [#152228](https://github.com/NousResearch/hermes-agent/issues/152228) | 桌面端在提升"This device"后仍持续连接旧远程 | Desktop | 11月9日 |
| [#149682](https://github.com/NousResearch/hermes-agent/issues/149682) | 导入的群聊：每位成员的首个gateway turn均因runtime_draining失败 | Gateway | 11月5日 |
| [#149232](https://github.com/NousResearch/hermes-agent/issues/149232) | 关闭会话标签页时桌面端从不请求session.close | Desktop | 11月5日 |
| [#149223](https://github.com/NousResearch/hermes-agent/issues/149223) | Hosted-room驱动每个已settle的task重新打开SQLite；CPU随历史记录增长 | Gateway | 11月5日 |
| [#149841](https://github.com/NousResearch/hermes-agent/issues/149841) | scratch prune在一小时内删除新鲜副本（mtime保留问题） | CLI | 11月6日 |
| [#149837](https://github.com/NousResearch/hermes-agent/issues/149837) | 托管worker内核在持有SQLite WAL写锁时停泊 | Agent | 11月6日 |

### 稳定性评估

**会话状态可靠性**是本周期的主要关注点。至少8个P1/P0问题涉及SQLite状态管理（连接泄漏、写入缺失、压缩损坏、回滚风险）。Telegram/gateway缺陷清理专项（#152380）正在追踪790个Telegram相关Issue中剩余的207个开放缺陷——表明系统性的质量改进工作正在进行，但积压量仍然很大。

**平台适配器回归**（WhatsApp、WeChat、Telegram）指向集成代码在边界条件下（未配对适配器、持久化时序、多消息turn）的脆弱性。

## 6. 功能请求与路线图信号

### 活跃的功能PR

| PR | 标题 | 信号 |
|----|-------|--------|
| [#142005](https://github.com/NousResearch/hermes-agent/pull/142005) | feat(plugins): 插件JSON-RPC方法与会话范围的插件事件 | **重大** — 实现插件与网关间的双向通信；解锁更丰富的前端集成 |
| [#142056](https://github.com/NousResearch/hermes-agent/pull/142056) | feat(plugins): 插件可扩展另一工具的schema并设置注册选项 | 允许插件扩充内置工具（如memory、file）自定义字段和执行参数 |
| [#148271](https://github.com/NousResearch/hermes-agent/pull/148271) | 移除旧版Skills Hub和Plugins Hub；引导至Marketplace | Marketplace优先方向；弃用旧版发现UI |
| [#151471](https://github.com/NousResearch/hermes-agent/pull/151471) | Catalog: 添加tap-giving (Tap.Giving的NFC Tap Builder) | 扩展物理世界集成能力（NFC tap-to-give） |
| [#152416](https://github.com/NousResearch/hermes-agent/pull/152416) | feat(plugin-catalog): 注册proactive-agent governor | 长时间交互会话的turn治理；子代理监督 |

### 路线图指标

1. **插件架构扩展：** 多个PR（#142005、#142056、#151471、#152416）表明项目正推动更丰富的插件生态系统和更深入的系统集成。
2. **Marketplace作为中心枢纽：** #148271确认Marketplace已成为主要发现机制，替代了旧版hub。
3. **会话与状态健壮性：** 会话状态修复（SQLite泄漏、压缩、回滚、持久化）的数量表明下一版本可能有一个集中的稳定性冲刺。
4. **多平台消息：** Telegram修复和WeChat重试逻辑的持续投入表明项目将继续投资于统一的多平台代理接口。

## 7. 用户反馈总结

### 痛点

| 主题 | 证据 | 严重程度 |
|-------|----------|----------|
| **会话中断时的数据丢失** | 部分assistant文本丢失（#136160）；队列编辑被丢弃（#128603）；压缩turn过早归档（#121750） | 严重 |
| **SQLite不稳定** | 连接泄漏（#96152）；消息未持久化（#140823）；Windows上误报损坏恢复（#148628） | 高 |
| **平台适配器故障** | WhatsApp阻止gateway启动（#142969）；WeChat丢失出站消息；Telegram媒体上传误报（#151797） | 高 |
| **桌面端UX缺陷** | Linux半透明效果无开关（#145183）；Bot Chat无法打开api_server行（#152072）；提升后路由到过期远程（#152228） | 中 |
| **ARM平台构建失败** | aarch64-darwin pnpm哈希不匹配（#152284）阻碍macOS ARM贡献者 | 中 |

### 积极信号

- **Telegram修复快速落地** — PR #151809和#151797解决了长期存在的多消息和媒体上传问题，社区测试积极。
- **插件可扩展性持续增强** — JSON-RPC方法和schema扩展API表明项目正在完善其扩展模型。
- **Marketplace上线** — 以Marketplace为中心的集中发现机制替代旧版hub，表明社区贡献的可发现性得到改善。

## 8. 积压待关注

### 需要维护者关注的长期待回复重要Issue

| Issue | 标题 | 存在时长 | 优先级 | 待解决项 |
|-------|-------|-----|----------|-----|
| [#139599](https://github.com/NousResearch/hermes-agent/issues/139599) | Steers/队列prompt无来源归属；重复行持久化；压缩转录污染 | 约25天 | P1 | 无回复；多症状问题，影响桌面压缩 |
| [#135544](https://github.com/NousResearch/hermes-agent/issues/135544) | 所有工具均被阻止的Cron运行被记录为成功 | 约32天 | P1 | 无回复；失败检测依赖脆弱的模型输出解析 |
| [#136160](https://github.com/NousResearch/hermes-agent/issues/136160) | 被中断的turn：部分assistant文本应持久化 | 约31天 | P1 | 无回复；流式中断场景下重要的UX缺陷 |
| [#85342](https://github.com/NousResearch/hermes-agent/pull/85342) | fix(docker): 当run配置漂移时拒绝持久化重用 | 约89天 | P2 | 开放PR；安全性和兼容性影响 |
| [#141876](https://github.com/NousResearch/hermes-agent/issues/141876) | fix(memory): 恢复读取操作（56ee8a5cc6的14行反转） | 约21天 | P2 | PR开放；106次提交和6275行变更未能修复原问题 |

### 待审核的高价值PR（停滞）

| PR | 标题 | 存在时长 | 优先级 | 瓶颈 |
|----|-------|-----|----------|------------|
| [#111786](https://github.com/NousResearch/hermes-agent/pull/111786) | fix(agent): 保留可缓存的prompt上下文 | 约56天 | P0 | 集成进行中；头节点位于daf8ccd9 |
| [#121750](https://github.com/NousResearch/hermes-agent/pull/121750) | fix(compression): 原地压缩后保留未见的turn | 约47天 | P0 | 需决策 |
| [#123361](https://github.com/NousResearch/hermes-agent/pull/123361) | fix(agent): 在预请求刷新时保持池绑定的Anthropic账号 | 约45天 | P1 | 安全边界修复；需审核 |
| [#96152](https://github.com/NousResearch/hermes-agent/pull/96152) | fix(gateway): 关闭每个state.db读取句柄 | 约75天 | P1 | 修复已就绪；需合并 |
| [#124943](https://github.com/NousResearch/hermes-agent/pull/124943) | fix(gateway): 迁移后开机时启用存活的unit | 约44天 | P1 | 修复已就绪；需合并 |

---

## 摘要表

| 指标 | 数值 |
|--------|-------|
| 更新Issue数（24小时） | 50 |
| 更新PR数（24小时） | 50 |
| 合并/关闭PR数（24小时） | 2 |
| 新版本发布数 | 1（v0.23.1） |
| 活跃P0 Issue数 | 4 |
| 活跃P1 Issue数 | 8+ |
| 待合并的关键修复PR | 5 |
| 社区讨论热度（最高Issue） | 10条评论（#141988） |

---

*日报生成日期：2026年11月10日。所有链接指向 https://github.com/NousResearch/hermes-agent。*</think>



</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me carefully translate it while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, links, numbers, dates, code, project names, usernames, version tags, etc. verbatim
4. Use natural technical Chinese - not literal word-for-word

Let me go through this systematically section by section.

I'll translate:
- Headings
- Tables
- Lists
- Bold/italic text
- Emojis
- Technical terms in a natural Chinese way

Let me start translating:
</think>


# QwenPaw 项目日报 — 2026-11-10

## 1. 今日概览

2026年11月10日，QwenPaw 保持了较高的开发节奏，过去 24 小时内有 **50 个 PR 更新**，**17 个 Issues 活跃**。新版 beta — **v2.3.0-beta.3** — 已发布，带来了文档更新和桌面插件安装修复。今日工作的主要重心是稳定性修复：2.3.0-beta 系列中存在多个 Windows 平台回归 bug（启动崩溃、长路径规范化、中文路径下的 HTML 预览问题），同时一个大型三-PR 本地模型功能集（MLX 引擎 + llama.cpp GPU 控制台 + 控制台 UI）正在接受 review。社区参与度活跃，包括跨平台文件编码修复（GBK/CP936）、打包桌面构建中的通道激活修复，以及持续进行的工具调用视觉一致性优化工作。

---

## 2. 版本发布

### v2.3.0-beta.3
**发布时间：** 2026-11-09

| 变更内容 | 贡献者 | PR |
|---------|--------|----|
| `docs(memory)`：新增多模态记忆和 Memory Tags 双语文档博客 | @wang-qisen | [#8506](https://github.com/agentscope-ai/QwenPaw/pull/8506) |
| `fix(channels)`：修复桌面端插件安装和修复失败问题 | @Luohh5 | （发布说明中关联） |

> **注意：** 此为 beta 预发布版本。正式发布验证跟踪 issue（[#8643](https://github.com/agentscope-ai/QwenPaw/issues/8643)）已开启并处于截止日期监控中。Beta 通道用户在生产环境采用前，应等待各平台检查点全部通过（green/pass）后再行动。

---

## 3. 项目进展

### 已合并 / 已关闭的 PR（过去 24 小时）

| # | PR | 规模 | 摘要 |
|---|-----|------|------|
| [#8639](https://github.com/agentscope-ai/QwenPaw/pull/8639) | fix(test): 修复依赖安装测试中的 BOM 解码问题 | XS | 修复 CI 测试中的 BOM 处理边界情况 |
| [#8640](https://github.com/agentscope-ai/QwenPaw/pull/8640) | test: 修复 Windows 权限和 UTF-8 BOM 断言 | XS | 将 POSIX 权限检查与社区事件保留逻辑分离；将 `0600` 断言限定为非 Windows 平台 |
| [#8641](https://github.com/agentscope-ai/QwenPaw/pull/8641) | fix(ci): 将 macOS 桌面构建超时时间延长至 90 分钟 | XS | 解决 macOS 桌面构建超时问题 |

> 另有三个 PR 标记为已关闭，但未出现在 top-20 列表中；其已合并状态表明还有进一步的 CI/测试稳定化工作。

### 正在推进功能和修复的活跃 PR

| # | PR | 规模 | 领域 | 描述 |
|---|-----|------|------|------|
| [#8654](https://github.com/agentscope-ai/QwenPaw/pull/8654) | `feat(creator)`：发布 2.0.5 — 安全资源与音频更新 | XXXL | Creator 插件 | 将 QwenPaw Creator 从 2.0.4 升级至 2.0.5；修复 [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595) 中报告的插件安装 bug |
| [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) | `fix(channels)`：保留桌面端通道启动时的运行时 ABI 检查 | S | Channels | 修复 [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644) 的关联问题 — 解决打包桌面构建中的 AttributeError → WORKER_START_FAILED |
| [#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647) | `feat(local-models)`：添加托管 MLX 引擎和运行时自动更新 | XXL | 本地模型 | 基于 #8649 构建；新增 Apple Silicon MLX 支持和运行时自动更新 |
| [#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) | `feat(console)`：添加本地引擎、GPU 和自动更新控制项 | XL | 控制台 UI | 为本地引擎选择、GPU 控制和自动更新提供控制台侧 UI |
| [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) | `feat(local-models)`：添加 llama.cpp GPU 控制和运行时自动更新 | L | 本地模型 | MLX 功能集的底层依赖；添加 llama.cpp GPU 卸载控制 |
| [#8638](https://github.com/agentscope-ai/QwenPaw/pull/8638) | `feat(shell)`：为命令卡片添加意图标题 | M | Shell/工具 | 为 `execute_shell_command` 添加仅展示用的 `title`；解决 [#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612) 中的 UI 不一致性反馈 |
| [#8636](https://github.com/agentscope-ai/QwenPaw/pull/8636) | `fix(agents)`：排除被拒绝的历史媒体文件 | S | Agents | 修复 [#8629](https://github.com/agentscope-ai/QwenPaw/issues/8629)；在重试时剥离超尺寸图片载荷和误导性的"图片已加载"文本 |
| [#8631](https://github.com/agentscope-ai/QwenPaw/pull/8631) | `fix(console)`：浏览器标签页标题跟随当前对话名称 | XL | 控制台 | 更新浏览器标签页标题以反映当前会话名称；添加未读完成指示器 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | `fix(ollama)`：从 num_ctx 而非 128k 默认值推断上下文窗口大小 | XL | Ollama | 修正 Ollama 上下文窗口检测；使用 `num_ctx` 而非硬编码的 128k |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | `fix(tools)`：在 read/edit/grep 中解码 GBK/CP936 而非丢弃字节 | XXL | 工具 | 对中文 Windows 用户至关重要；修复读取非 UTF-8 文件时的静默字节丢失问题 |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | `feat(skills)`：支持嵌套（分类）skill 目录结构 | XXL | Skills | 允许 `<root>/<category>/<skill>/SKILL.md` 布局，与扁平化的 `<root>/<skill>/SKILL.md` 并存 |

---

## 4. 社区热点话题

### 讨论最活跃的 Issues（按评论数排序）

| # | 标题 | 评论数 | 主题 |
|---|-------|----------|-------|
| [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595) | 插件安装失败——qwenpaw-creator 提示"No package metadata was found" | 4 | **高影响**：官方插件安装路径中断 |
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 对话中经常出现没有答复内容 + Ctrl+C 复制需多次 + UI 流畅性问题 | 4 | **多症状**：UX 回归；包含恢复旧版 UI 切换的需求 |
| [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644) | 打包后的桌面端构建中通道插件无法激活 | 2 | 桌面构建回归；直接由 [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) 修复 |
| [#8651](https://github.com/agentscope-ai/QwenPaw/issues/8651) | QQ 通道静默丢弃纯图片的 C2C 消息 | 2 | 通道数据丢失 bug |
| [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) | Checkpoint 服务在 Git 长路径前缀 + WeChat DEPENDENCY_ENVIRONMENT_AMBIGUOUS 时失败 | 2 | Windows 长路径 + 通道交互问题 |
| [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 在 Windows 11 IoT LTSC 上无法启动 | 2 | Windows LTSC 上的关键启动回归 |

### 热点话题揭示的深层需求

1. **插件生态可靠性**：#8595 中的 qwenpaw-creator 安装失败表明插件分发流程需要加固。即將发布的 2.0.5 版本（#8654）直接针对此问题。
2. **Windows 11 LTSC / 边缘平台支持**：多个 2.3.0-beta bug 聚集在 Windows 边缘场景（长路径、LTSC、中文路径名）。项目需要在发布前建立更系统的 Windows 测试矩阵。
3. **UI 一致性和复古模式需求**：#8521 明确请求 UI 切换按钮以恢复 2.3 之前的界面 — 这是一个强烈的信号，表明重新设计给高级用户引入了摩擦。
4. **本地 AI 引擎功能对等**：MLX 功能集（三 PR 堆叠）是本周期票数最多的功能请求（#8646）。用户希望获得 GPU 可见性和 Apple Silicon 官方支持。

---

## 5. Bug 与稳定性

### 严重 Bug（2.3.0-beta 系列的回归）

| 严重度 | # | 标题 | 平台 | 修复 PR | 状态 |
|----------|---|-------|----------|--------|--------|
| 🔴 严重 | [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 在 Windows 11 IoT LTSC 上无法启动（AppHang） | Windows LTSC | — | 开启中 |
| 🔴 严重 | [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644) | 打包桌面构建中通道插件无法激活（WORKER_START_FAILED） | Desktop | [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) | 修复 PR 已开启 |
| 🟠 高 | [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595) | 插件安装失败——找不到 qwenpaw-creator 元数据 | 全平台 | [#8654](https://github.com/agentscope-ai/QwenPaw/pull/8654) | 修复 PR 已开启 |
| 🟠 高 | [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) | Checkpoint 服务在 Git 长路径前缀下失败 | Windows | — | 开启中 |
| 🟠 高 | [#8629](https://github.com/agentscope-ai/QwenPaw/issues/8629) | 超尺寸图片在每次模型调用时重复发送；误导性的"图片已加载"文本持续出现 | 全平台 | [#8636](https://github.com/agentscope-ai/QwenPaw/pull/8636) | 修复 PR 已合并 |
| 🟡 中 | [#8651](https://github.com/agentscope-ai/QwenPaw/issues/8651) | QQ 通道静默丢弃纯图片的 C2C 消息 | Linux | — | 开启中 |
| 🟡 中 | [#8619](https://github.com/agentscope-ai/QwenPaw/issues/8619) | `MemorySpace.search` 对同一命中行进行双重轮次边界解析 | 全平台 | — | 开启中 |
| 🟡 中 | [#8620](https://github.com/agentscope-ai/QwenPaw/issues/8620) | 即使已超过截止时间，SQLite 错误仍被转换为 TimeoutError | 全平台 | — | 开启中 |
| 🟡 中 | [#8603](https://github.com/agentscope-ai/QwenPaw/issues/8603) | 自定义 OpenAI 兼容 provider 调用 `run_code` 时传入空参数 `{}` | 全平台 | — | 开启中 |
| 🟡 中 | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 缺少回复内容 + Ctrl+C 需多次 + UI 延迟 | 全平台 | — | 开启中 |
| 🟢 低 | [#8652](https://github.com/agentscope-ai/QwenPaw/issues/8652) | 任务在切换模型后仍继续使用旧模型 | 全平台 | — | 开启中 |

### 近期已关闭（近期修复）

| # | 标题 | 修复方式 |
|---|-------|--------|
| [#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585) | recall_history 在 Windows 上损坏：`\\?\` 扩展长度路径导致 SQLite 只读 URI 读取失败 | 已关闭 |
| [#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502) | 桌面端 HTML 预览「在浏览器中打开」失效（中文路径、文件在 workspace 外） | 已关闭 |

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| # | 标题 | 描述 | 社区信号 |
|---|-------|-------------|-----------------|
| [#8646](https://github.com/agentscope-ai/QwenPaw/issues/8646) | 为 QwenPaw Local 添加托管 MLX 引擎和 GPU 控制 | 暴露 Metal GPU 卸载可见性；为 Apple Silicon 添加官方 MLX 支持 | **高优先级** — 3 个 PR 正在 active review（#8647, #8648, #8649） |
| [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) | 思考块与工具卡片：视觉不一致，左边缘跳动 | 统一思考卡片和工具调用卡片的视觉样式，以提升长任务可读性 | UI 打磨；PR #8638 部分解决了关联问题 |
| [#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612) | 执行类工具调用看不出在做什么 | 长任务中执行类工具调用缺少描述性标签 | 由 #8638 解决（shell 意图标题） |
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 请求恢复旧版 UI 切换按钮 | 用户明确请求 UI 切换功能 — 最强烈的直接用户 UI 控制需求 | 当前无 PR；需产品决策 |

### 近期可能的路线图项目

| 可能性 | 功能 | 依据 |
|------------|---------|----------|
| **确认下个版本** | MLX 引擎 + llama.cpp GPU 控制 | 3 个 PR 堆叠 review 中，首 PR 规模 L，作者相同（@LXD-8） |
| **确认下个版本** | GBK/CP936 文件编码支持 | PR #8234（规模 XXL）正在 Under Review；对中文 Windows 用户影响重大 |
| **较可能** | 嵌套 skill 目录结构 | PR #8178（规模 XXL，首次贡献者）正在 review；符合社区惯例 |
| **可能** | 复古 UI 切换 | #8521 中明确用户请求；尚无 PR；取决于产品决策 |
| **可能** | QQ 通道纯图片消息支持 | 今日提交的 issue #8651；修复范围小 |

---

## 7. 用户反馈摘要

### 痛点

- **Beta 在 Windows 上稳定性差**：多份报告确认 2.3.0-beta.1/2 在 Windows 11 上引入了回归（启动卡死在 LTSC、长路径破坏、中文字符文件名路径）。这是今日用户投诉最集中的问题集群。
- **插件安装路径中断**：官方 `qwenpaw-creator` 插件（v2.0.4）无法通过 UI 和 CLI 安装——这阻碍了新用户使用 creator 工作流。
- **桌面端通道激活失效**：打包桌面构建（冻结/PyInstaller）无法激活任何通道插件（飞书、微信、元宝）。这是相较于之前版本的回归。
- **UI 重构带来的摩擦**：#8521 中的用户明确偏好 2.3 之前的 UI，理由是模型选择界面浪费屏幕空间且响应性下降。这是一个值得注意的满意度回归信号。
- **记忆搜索正确性**：两个 issue（#8619、#8620）指出了 MemorySpace 搜索路径中的隐蔽但真实存在的正确性 bug——这些问题影响依赖记忆增强型 agent 的用户。

### 正面信号

- **本地模型功能集**（MLX + GPU 控制台）获得社区强烈支持，PR 结构完善——表明开发者路线图与用户需求对齐。
- **Ollama 上下文窗口修复**（PR #8236）展示了对本地模型边缘情况的响应速度。
- **Whisper SDK 插件转换**（PR #8431，规模 XXXL）表明项目在插件扩展性模型上的持续投入。
- 今日合并的三个小型 CI/测试修复表明维护工作正在积极进行。

---

## 8. 待处理事项观察

需要维护者关注的重要、未回复或长期运行的 issue 或 PR：

| # | 类型 | 存续时间 | 标题 | 备注 |
|---|------|-----|-------|-------|
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | Issue | 约 11 天 | 多症状 UX bug + UI 切换请求 | 4 条评论；无人认领；影响全平台 |
| [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | Issue | 约 3 天 | Windows 11 IoT LTSC 启动崩溃 | 无关联 PR；阻塞特定 Windows SKU |
| [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) | Issue | 约 2 天 | Git 长路径 + 微信通道交互问题 | 需要分类；影响 Windows 高级用户 |
| [#8431](https://github.com/agentscope-ai/QwenPaw/pull/8431) | PR（XXXL） | 约 15 天 | 将本地 Whisper 转换为 SDK 插件 | 范围大；无 review 状态更新 |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | PR（XXL） | 约 27 天 | GBK/CP936 编码修复 | 自 10 月 14 日处于 Under Review 状态；对中文用户群体影响重大 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | PR（XL） | 约 27 天 | Ollama 上下文窗口修复 | 自 10 月 14 日处于 Under Review 状态；影响本地 Ollama 用户 |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | PR（XXL） | 约 30 天 | 嵌套 skill 目录结构 | 首次贡献者；需要 review |
| [#8619](https://github.com/agentscope-ai/QwenPaw/issues/8619) | Issue | 约 2 天 | MemorySpace 双重边界解析 | 评论少但影响正确性 |

---

*日报基于 QwenPaw（agentscope-ai/QwenPaw）2026-11-10 的 GitHub 活动数据生成。数据来源：17 个 issues，50 个 PRs，1 个 release。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate an English technical report about a GitHub project (ZeroClaw) into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

Title: "ZeroClaw Project Digest — 2026-11-10" → "ZeroClaw 项目日报 — 2026-11-10"

I need to be careful with technical terms and make sure the Chinese sounds natural for a developer newsletter audience.

Let me start the translation:
</think>


# ZeroClaw 项目日报 — 2026-11-10

## 1. 今日概览

ZeroClaw 在 2026-11-10 保持了较高的活跃度，仓库共更新了 28 个 issue 和 50 个 PR。项目目前正在处理一个严重的 S1 级安全漏洞（RUSTSEC-2026-0459），该漏洞阻塞了所有 CI 合入流程，同时 OIDC 设备证书引导（#12317）和原生 Rust XMPP（#11847）等主要功能也在同步推进。社区参与度保持强劲，多位贡献者在 zerocode、channels、web dashboard 和安全等领域提交了 bug 和功能需求。今日无新版本发布；团队似乎正专注于 v0.9.0 版本的稳定工作。

---

## 2. 版本发布

**今日无新版本发布。**

v0.9.0 正在开发中，多个 PR 标记了 `release:v0.9.0` 标签等待合入（#12359、#12355）。

---

## 3. 项目进展

### 已合并/关闭（过去 24 小时）
根据 issue 关闭情况，以下问题已解决：

| Issue | 概述 | 领域 |
|-------|---------|--------|
| [#10359](https://github.com/zeroclaw-labs/zeroclaw/issues/10359) | AuditLogger 哈希链投毒修复 | 安全 |
| [#11009](https://github.com/zeroclaw-labs/zeroclaw/issues/11009) | Agent 别名重命名时的权限配置级联更新 | 配置/安全 |
| [#12153](https://github.com/zeroclaw-labs/zeroclaw/issues/12153) | install.sh musl/glibc 检测修复 | 新手入门 |
| [#11919](https://github.com/zeroclaw-labs/zeroclaw/issues/11919) | Web 聊天界面折叠思考过程框的开关 | Web |
| [#12087](https://github.com/zeroclaw-labs/zeroclaw/issues/12087) | 工具启用/禁用的自动保存 UI 修复 | Web Dashboard |
| [#12064](https://github.com/zeroclaw-labs/zeroclaw/issues/12064) | Discord 机器人可绕过明文审批 | Channel |
| [#11952](https://github.com/zeroclaw-labs/zeroclaw/issues/11952) | 生命周期目录路径以 `-` 开头的修复 | 配置 |
| [#12312](https://github.com/zeroclaw-labs/zeroclaw/issues/12312) | OIDC 注册端点 URL 策略 | 安全 |

### 进行中的活跃 PR

| PR | 概述 | 规模 | 风险 |
|----|---------|------|------|
| [#12317](https://github.com/zeroclaw-labs/zeroclaw/pull/12317) | **feat(zerocode)：无配对 OIDC 登录与凭证保存** | XL | 高 |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | **feat(channels)：原生 Rust XMPP 支持 OMEMO** | XL | 高 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | feat(web)：配对设备的语音设置 | XL | — |
| [#11911](https://github.com/zeroclaw-labs/zeroclaw/pull/11911) | fix(channels)：保留工具结果与有界恢复 | XL | — |
| [#11868](https://github.com/zeroclaw-labs/zeroclaw/pull/11868) | fix(agent)：停止重复调用并保留收尾逻辑 | XL | 高 |
| [#12360](https://github.com/zeroclaw-labs/zeroclaw/pull/12360) | **feat(cost)：显示当前对话的费用估算** | XL | — |
| [#12352](https://github.com/zeroclaw-labs/zeroclaw/pull/12352) | fix：识别 claude-opus-5-5 及仅支持自适应模式的模型 | XL | — |
| [#12355](https://github.com/zeroclaw-labs/zeroclaw/pull/12355) | fix(zerorelay)：刷新 TLS 写入（S1 仪表盘挂起） | S | — |
| [#12359](https://github.com/zeroclaw-labs/zeroclaw/pull/12359) | fix(zerocode)：受限制账户启动问题（S2） | M | — |

---

## 4. 社区热点话题

### 讨论最活跃的议题

**1. OIDC 设备证书引导（[#12317](https://github.com/zeroclaw-labs/zeroclaw/pull/12317)、[#12337](https://github.com/zeroclaw-labs/zeroclaw/issues/12337)）**
- PR #12317 引入了 `zerocode login <oidc-alias> <target>` 命令，支持无密码的设备证书认证，无需手动配对
- 由此催生了 6+ 个后续 issue：凭证清理（#12339）、客户端证书语义（#12338）、引导冒烟测试（#12334）、账本 actor 前缀（#12333）、azp/client_id 冲突测试（#12331）、文档说明（#12332）
- **核心诉求：** 企业用户希望在 CLI 到远程守护进程的认证过程中摆脱传统配对流程的复杂性

**2. TLS 刷新回归（[#12354](https://github.com/zeroclaw-labs/zeroclaw/issues/12354)、[#12355](https://github.com/zeroclaw-labs/zeroclaw/pull/12355)）**
- S1 级别：zerorelay 未刷新 TLS 写入，导致仪表盘响应在 300 秒空闲超时前持续挂起
- 修复 PR #12355 已于今日合并
- **核心诉求：** 中继拓扑下 Web 界面的可靠性；这阻碍了使用 relay 架构的生产部署

**3. 费用估算功能（[#12353](https://github.com/zeroclaw-labs/zeroclaw/issues/12353)、[#12360](https://github.com/zeroclaw-labs/zeroclaw/pull/12360)）**
- 用户请求在 ZeroCode 和 Web 聊天界面中显示实时的美元费用汇总
- PR #12360 正在各聊天界面实现，每 2 秒刷新一次
- **核心诉求：** 有预算限制的用户需要实时了解费用消耗情况

**4. 原生 XMPP 频道（[#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847)）**
- 大型 XL PR，添加 Rust 原生 XMPP 协议支持，可选启用 OMEMO 加密
- 依赖于 #12015（ChaCha20Poly1305 统一）
- **核心诉求：** 消除外部 C 语言库依赖；提升频道可靠性和安全性

---

## 5. Bug 与稳定性

### 严重（S1）— 阻塞工作流

| Issue | 概述 | 修复 PR | 状态 |
|-------|---------|--------|--------|
| [#12320](https://github.com/zeroclaw-labs/zeroclaw/issues/12320) | 安全检查任务每次构建均失败：RUSTSEC-2026-0459（libsqlite3-sys 0.38.2） | — | 待处理，3 条评论 |
| [#12354](https://github.com/zeroclaw-labs/zeroclaw/issues/12354) | zerorelay TLS 刷新缺失；仪表盘挂起 | [#12355](https://github.com/zeroclaw-labs/zeroclaw/pull/12355) | 修复 PR 进行中 |

### 高优先级（S2）— 功能降级

| Issue | 概述 | 修复 PR | 状态 |
|-------|---------|--------|--------|
| [#12357](https://github.com/zeroclaw-labs/zeroclaw/issues/12357) | 受限账户启动时 zerocode 退出 | [#12359](https://github.com/zeroclaw-labs/zeroclaw/pull/12359) | 修复 PR 进行中 |
| [#12330](https://github.com/zeroclaw-labs/zeroclaw/issues/12330) | zerocode 在配置解析失败时丢弃已保存的远程配置 | [#12336](https://github.com/zeroclaw-labs/zeroclaw/pull/12336) | 修复 PR 进行中 |
| [#12064](https://github.com/zeroclaw-labs/zeroclaw/issues/12064) | Discord 机器人可解析明文审批请求 | — | 待处理 |
| [#12325](https://github.com/zeroclaw-labs/zeroclaw/issues/12325) | 文档规范 URL 每次发版都会变化（SEO 退化） | — | 待处理 |

### 值得关注的功能回归

| Issue | 概述 | 备注 |
|-------|---------|-------|
| [#10359](https://github.com/zeroclaw-labs/zeroclaw/issues/10359) | AuditLogger 在写入前推进哈希链（安全风险） | 今日关闭；源于 #10142 的历史问题 |

### 轻微（S3）— 影响有限

- [#12351](https://github.com/zeroclaw-labs/zeroclaw/issues/12351)：测试 `ordinary_failure_then_real_anthropic_server_fallback` 偶发失败
- [#12350](https://github.com/zeroclaw-labs/zeroclaw/issues/12350)：Telegram 频道测试在 CI 中挂起（30 分钟超时）
- [#12347](https://github.com/zeroclaw-labs/zeroclaw/issues/12347)：zerocode 配置写入器可能丢失并发更新
- [#12153](https://github.com/zeroclaw-labs/zeroclaw/issues/12153)：install.sh 选错 musl/glibc 版本
- [#12326](https://github.com/zeroclaw-labs/zeroclaw/issues/12326)：已裁剪的文档版本返回 GitHub Pages 404
- [#12324](https://github.com/zeroclaw-labs/zeroclaw/issues/12324)：Rustdoc API 树索引未被 robots/canonical 保护

---

## 6. 功能需求与路线图信号

### 今日新提交的功能

| Issue | 概述 | 领域 | 纳入 v0.9.0 的可能性 |
|-------|---------|--------|---------------------|
| [#12353](https://github.com/zeroclaw-labs/zeroclaw/issues/12353) | 显示当前对话的实时费用估算 | 费用/计费 | **高** — PR #12360 审核中 |
| [#11919](https://github.com/zeroclaw-labs/zeroclaw/issues/11919) | Web 聊天界面开关：保持思考过程框折叠状态 | UX | **高** — 已关闭 |
| [#12337](https://github.com/zeroclaw-labs/zeroclaw/issues/12337) | OIDC 设备证书引导的操作员主动授权 | 安全/网关 | **高** — 与 #12317 相关 |
| [#12317](https://github.com/zeroclaw-labs/zeroclaw/pull/12317) | 无配对 OIDC 登录与凭证保存 | 认证 | **确定纳入 v0.9.0** |

### 路线图相关工作

| PR | 信号 |
|----|--------|
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | 原生 XMPP 频道使 ZeroClaw 具备企业 IM 集成能力 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | 浏览器语音听写/播报表明可访问性方面有所投入 |
| [#11845](https://github.com/zeroclaw-labs/zeroclaw/pull/11845)、[#11846](https://github.com/zeroclaw-labs/zeroclaw/pull/11846) | OpenRouter 余额报告表明项目在推进提供商无关的计费方案 |

---

## 7. 用户反馈汇总

### 从 Issue 中提炼的痛点

1. **CI 可靠性：** 捆绑的 SQLite 中存在 RUSTSEC-2026-0459 漏洞，阻塞了所有代码合入 — 用户无法发布版本。依赖升级刻不容缓。

2. **Relay 部署障碍：** TLS 刷新 bug（#12354）仅在使用中继时才会暴露，使得零信任架构的生产环境变得脆弱。通过 zerorelay 访问仪表盘的用户会遇到静默失败。

3. **企业认证复杂性：** 围绕 OIDC 证书语义、azp 冲突和凭证生命周期的多个 issue 表明，企业运维人员在当前认证模型面前颇感吃力。新的设备引导机制旨在简化这一流程。

4. **权限级联盲区：** Agent 别名重命名未级联更新权限配置（#11009，现已关闭）表明配置管理工具存在缺口。

5. **文档 SEO 脆弱性：** 规范 URL 不稳定（#12325）和缺失 404 处理（#12326）令引用文档的用户感到沮丧。

### 正面信号

- 思考过程框开关、工具自动保存 UI 等功能修复，表明对 UX 反馈响应迅速
- 费用估算功能在提出需求的当天就提交了 PR，显示了良好的产品-市场契合度

---

## 8. 待办事项追踪

### 长期未响应/需要维护者关注的事项

| Issue | 等待时间 | 概述 | 风险 |
|-------|-----|---------|------|
| [#12319](https://github.com/zeroclaw-labs/zeroclaw/issues/12319) | 1 天 | 追踪 XMPP/OMEMO 统一中的受限重复 crate 配额 | 低 |
| [#12340](https://github.com/zeroclaw-labs/zeroclaw/issues/12340) | 1 天 | 文档：澄清设备授权的 PKCE 机制 | 文档 |
| [#12338](https://github.com/zeroclaw-labs/zeroclaw/issues/12338) | 1 天 | 确定无 CA 情况下的客户端证书语义 | 安全 |

### 阻塞中/待审核的 PR

| PR | 阻塞条件 | 规模 | 备注 |
|----|----------|------|-------|
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | 依赖 #12015 | XL | 原生 XMPP 功能门控 |
| [#11911](https://github.com/zeroclaw-labs/zeroclaw/pull/11911) | 依赖 #12323 | XL | 频道恢复修复 |
| [#11868](https://github.com/zeroclaw-labs/zeroclaw/pull/11868) | `needs-maintainer-review` | XL | Agent 调用去重 |
| [#12317](https://github.com/zeroclaw-labs/zeroclaw/pull/12317) | 规模大；催生了 6 个后续 issue | XL | OIDC 引导核心功能 |

### 高优先级维护事项

- **RUSTSEC-2026-0459 更新：** 更新 libsqlite3-sys 依赖以解除所有 CI 的阻塞
- **TLS 刷新发版：** #12355 需要加速审核以纳入 v0.9.0
- **受限账户 zerocode：** #12359 的修复是企业最小权限用户部署的刚需

---

*日报数据来源于 ZeroClaw（zeroclaw-labs/zeroclaw）2026-11-10 的活动记录。所有 issue/PR 链接格式为 `https://github.com/zeroclaw-labs/zeroclaw/[issue|PR]/<number>`。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*