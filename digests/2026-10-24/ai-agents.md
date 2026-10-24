# OpenClaw 生态日报 2026-10-24

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-24 00:59 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English OpenClaw Project Digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering

Let me translate this carefully, maintaining the structure and tone.</think>

# OpenClaw 项目动态 — 2026-10-24

## 1. 今日概览

过去24小时内，OpenClaw 的 Issues 和 PRs 继续保持高活跃度，各有 500 条更新。项目维护力度强劲（291 个 PR 已合并/关闭），但多个来自近期版本（2026.9.x 和 2026.10.x）的关键回归问题引发了社区广泛关注。本周没有新版本发布。Bug 积压仍然较多，有多个 P0 级别的问题涉及 Windows 可靠性、启动性能回归和插件生命周期管理。

---

## 2. 版本发布

过去 24 小时内**没有新版本**发布。

---

## 3. 项目进展

近期合并/关闭的 PR：

| PR | 标题 | 状态 |
|---|---|---|
| [#159863](https://github.com/openclaw/openclaw/pull/159863) | fix(agents): 在工具描述中说明 sessions_spawn agentId 允许的目标 | ✅ 已关闭 |
| [#180690](https://github.com/openclaw/openclaw/issues/180690) | 约 800 个 agent 状态下 doctor --fix 在 6GB 堆内存时 OOM（issue） | ✅ 已关闭 |

**今日重要进展：**

- **插件系统增强**：PR [#182069](https://github.com/openclaw/openclaw/pull/182069) 实现了插件对已验证用户首次登录的响应功能——支持访客入职流程。
- **内存诊断**：PR [#182036](https://github.com/openclaw/openclaw/pull/182036) 修复了内存诊断功能，现已包含嵌套的 PostgreSQL 桥接器，提升了运维人员的可见性。
- **Codex 子代理修复**：PR [#181591](https://github.com/openclaw/openclaw/pull/181591) 在子代理完成后保留了所有者线程，解决了问题 #181580。
- **Windows 可靠性**：多个 PR 针对 Windows 特定问题，包括配置补丁挂起（[#177823](https://github.com/openclaw/openclaw/pull/177823)）和发布工具修复（[#182050](https://github.com/openclaw/openclaw/pull/182050)、[#182047](https://github.com/openclaw/openclaw/pull/182047)）。
- **UI 改进**：PR [#182040](https://github.com/openclaw/openclaw/pull/182040)（访客从"涉及我的"过滤器开始）、[#182067](https://github.com/openclaw/openclaw/pull/182067)（文件导航中的显示文件功能）和 [#182068](https://github.com/openclaw/openclaw/pull/182068)（气泡UI改进）。

---

## 4. 社区热点

讨论最活跃的话题：

1. **[Issue #160959](https://github.com/openclaw/openclaw/issues/160959)** — 捕获大型外部插件时 Gateway 阻塞数分钟（2026.9.6 回归问题）— **44 条评论**
   - **根本原因**：自插件生成捕获功能在 #144252 中实现（2026.9.6 版本发布）后，Gateway 在启动或重新发布包含外部/工作区插件（依赖树较大）的预制模型运行时时，事件循环会被阻塞数分钟。
   - **用户需求**：捕获操作不应阻塞事件循环。

2. **[Issue #164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway 状态数据库 WAL 自动检查点永不完成 — **29 条评论**
   - **根本原因**：针对 `state/openclaw.sqlite` 的 WAL 检查点被进程内读取器阻塞，自启动以来从未完成。
   - **用户需求**：数据库检查点不应无限期卡住。

3. **[Issue #42475](https://github.com/openclaw/openclaw/issues/42475)** — 网关层面的按代理成本预算执行 — **28 条评论**
   - **用户需求**：运维人员希望在调度模型调用前实现可选的按代理成本预算（日/月上限），防止费用失控。

4. **[Issue #180690](https://github.com/openclaw/openclaw/issues/180690)** — 约 800 个 agent 状态下 doctor --fix 在 6GB 堆内存时 OOM — **20 条评论** ✅ *已关闭*
   - **根本原因**：从 v28 到 v31 的 schema 迁移需要三遍执行，耗时约 110 分钟，第二遍因 V8 堆内存耗尽而失败。

5. **[Issue #156112](https://github.com/openclaw/openclaw/issues/156112)** — openclaw update 在"全局安装交换"步骤失败 — **18 条评论**
   - **根本原因**：更新命令在 npm 全局安装时的全局安装交换步骤确定失败，而直接 `npm install -g` 可以成功。

6. **[Issue #168955](https://github.com/openclaw/openclaw/issues/168955)** — 2026.10.1 启动回归：就绪时间约 1030s vs 2026.9.9 的约 410s（Windows）— **18 条评论**
   - **根本原因**：在 2026.10.1 版本中，`sidecars.control-ui-assets` 在启动期间阻塞了 477 秒。

---

## 5. Bug 与稳定性

### P0 — 严重（发布阻塞）

| Issue | 标题 | 状态 | 修复 PR？ |
|---|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 捕获大型外部插件时 Gateway 阻塞数分钟（2026.9.6 回归） | 开启 | — |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | openclaw update 在"全局安装交换"步骤失败 | 开启 | — |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows：启动慢、插件关闭不干净、schtasks 权限错误导致重启/更新不可靠 | 开启 | — |
| [#158592](https://github.com/openclaw/openclaw/issues/158592) | 主机睡眠/唤醒后，预制模型运行时发布超时且永不恢复 | 开启 | — |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 延迟回收提交检查点失败导致崩溃恢复后代理不可用 | 开启 | — |
| [#155563](https://github.com/openclaw/openclaw/issues/155563) | [2026.9.5 回归] 成功代理轮次后 service-child relay/anchor 仍保留 | 开启 | — |
| [#170928](https://github.com/openclaw/openclaw/issues/170928) | Windows 2026.10.2 网关需要 7–9 分钟才能就绪 | 开启 | — |

### P1 — 高优先级

| Issue | 标题 | 状态 | 修复 PR？ |
|---|---|---|---|
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 启动回归：Windows 上约 1030s vs 约 410s（2026.10.1） | 开启 | — |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures 临时目录未 GC — 磁盘无限填充 | 开启 | — |
| [#164799](https://github.com/openclaw/openclaw/issues/164799) | 版本变更后代理逐个 admit，长达数分钟 | 已关闭 | — |
| [#180690](https://github.com/openclaw/openclaw/issues/180690) | doctor --fix 在 6GB 堆内存时 OOM | 已关闭 | — |
| [#167791](https://github.com/openclaw/openclaw/issues/167791) | Android/Termux：Gateway 和 Doctor 因 EACCES 创建 SQLite 只读快照失败 | 开启 | — |
| [#158127](https://github.com/openclaw/openclaw/issues/158127) | 2026.9.6 多代理运行时发布失败和 Codex 启动超时 | 开启 | — |
| [#156895](https://github.com/openclaw/openclaw/issues/156895) | 代理创建的任务因"计划的账户...不可用"而失败 | 开启 | — |

**稳定性总结**：7 个 P0 问题开启，多数与 Windows 可靠性、2026.9.x/2026.10.x 启动回归和插件生命周期管理相关。2026.10.x 版本似乎在 Windows 上引入了显著的启动回归。

---

## 6. 功能需求与路线图信号

| Issue | 标题 | 优先级 | 信号 |
|---|---|---|---|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 网关层面的按代理成本预算执行 | P2 | 高社区兴趣（28 条评论，1 👍），但较陈旧 |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 添加适合配套工具的 SQLite 转录/会话接缝 | P3 | 陈旧，但支持高级集成 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 按代理配置梦境功能 | P2 | 5 👍 — 解决内存峰值问题 |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 将子代理完成与父上下文隔离 | P3 | 减少父会话膨胀 |
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | 添加 A2A 切换的单向调度模式 | P2 | 陈旧，但请求用于更清晰的代理间工作流 |
| [#85461](https://github.com/openclaw/openclaw/issues/85461) | 捕获图像生成提供商使用元数据 | P3 | 提供商可见性功能 |

**预测**：考虑到 P2/P3 优先级和社区兴趣，**按代理成本预算**（#42475）和**按代理梦境配置**（#67413）是接下来 sprint 的强有力候选，特别是考虑到 #67413 中提到的近期内存峰值问题。

---

## 7. 用户反馈总结

### 痛点

1. **Windows 不可靠性**：多份报告（[#170956](https://github.com/openclaw/openclaw/issues/170956)、[#170928](https://github.com/openclaw/openclaw/issues/170928)、[#156112](https://github.com/openclaw/openclaw/issues/156112)）描述启动慢（7-9 分钟）、关闭不干净、重启/更新失败。用户描述为"只能多次重试后成功"。

2. **启动回归**：从 2026.9.9 升级到 2026.10.1/2026.10.2 后，Windows 启动时间翻倍以上（[#168955](https://github.com/openclaw/openclaw/issues/168955)）。`control-ui-assets` sidecar 在启动期间阻塞近 8 分钟。

3. **插件生命周期泄漏**：临时插件捕获目录从未清理，导致磁盘无限期填充（[#158390](https://github.com/openclaw/openclaw/issues/158390)）。插件重新实例化也会在进程内复制模块图。

4. **数据库检查点停滞**：网关自身状态数据库的 WAL 自动检查点自启动以来从未完成（[#164294](https://github.com/openclaw/openclaw/issues/164294)），表明存在长期阻塞问题。

5. **更新失败**：`openclaw update` 命令在 npm 全局安装时的全局安装交换步骤失败，而直接 `npm install -g` 可以成功——这阻碍了自动化部署。

### 积极信号

- **多代理功能持续推进**：新 PR 支持插件附加呈现（[#179763](https://github.com/openclaw/openclaw/pull/179763)）、Codex 子代理线程保留（[#181591](https://github.com/openclaw/openclaw/pull/181591)）和访客访问元数据（[#182044](https://github.com/openclaw/openclaw/pull/182044)），表明多代理工作流方面持续投入。
- **访客入职**：带有首次登录触发器的新访客访问插件（PR [#182069](https://github.com/openclaw/openclaw/pull/182069)）解决了关键的入职缺口。

---

## 8. 积压关注

以下较旧或被忽视的问题需要维护者关注：

| Issue | 标题 | 时长 | 需要关注的原因 |
|---|---|---|---|
| [#69242](https://github.com/openclaw/openclaw/issues/69242) | Linux 上 exec 工具间歇性 SIGKILL 广域 find/grep 命令 | 约 6 个月 | 无复现，影响 Linux 用户 |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后写/执行工具参数静默丢弃 | 约 7 个月 | 静默数据丢失，需要信息 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 隔离的 cron agentTurn 因"设置在 runner 启动前超时"失败 | 约 5 个月 | 需要信息，阻塞 cron 自动化 |
| [#102534](https://github.com/openclaw/openclaw/issues/102534) | 严重超时后 Cron 调度器计时器永久停止触发 | 约 3.5 个月 | 重启后仍存在，关键影响计划任务 |
| [#113149](https://github.com/openclaw/openclaw/issues/113149) | CLI-backend 空响应回退重启误杀无关并发会话 | 约 3 个月 | 范围过广，误杀无关进程 |
| [#84110](https://github.com/openclaw/openclaw/issues/84110) | Codex app-server 在轮次中段重写 prompt，破坏 OpenAI 缓存 | 约 5 个月 | 缓存效率从 93% 降至 47% |

**建议**：cron 相关问题（[#82662](https://github.com/openclaw/openclaw/issues/82662)、[#102534](https://github.com/openclaw/openclaw/issues/102534)）和 exec 工具静默丢弃问题（[#53408](https://github.com/openclaw/openclaw/issues/53408)）应优先处理——这些问题影响核心功能，且已悬而未决数月而没有解决路径。

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese while preserving all the formatting, technical terms, project names, URLs, numbers, etc. Let me translate it carefully, maintaining the exact structure.

I need to output ONLY the translation, no preamble, no explanation, no markdown fences.</think>

# 跨项目对比报告：AI 智能体与个人助手生态系统

---

## 1. 生态系统概览

2026年10月的个人AI助手和智能体开源领域呈现出成熟但快速演变的态势。五个 prominent 项目——OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw——代表了构建AI智能体的不同路径，从企业级网关（OpenClaw、ZeroClaw）到个人助手平台（Hermes Agent、QwenPaw）再到轻量级客户端工具（IronClaw）。所有五个项目都显示出活跃的开发状态，但 velocity 和侧重点差异显著：OpenClaw 和 ZeroClaw 优先考虑安全性和多租户基础设施，而 QwenPaw 和 Hermes Agent 强调 UI/UX 打磨和插件生态。这些项目的共同点是解决"智能体"gap——超越简单的聊天补全，走向持久的、有状态的、多轮工作流，具备适当的会话管理、工具强制执行和插件可扩展性。过去24小时内没有项目发布重大版本，但 QwenPaw（v2.3.0）和 ZeroClaw（v0.9.0）都处于 active 开发冲刺中。

---

## 2. 活动对比

| 项目 | 问题（24h） | PR（24h） | 发布（24h） | Velocity | 健康度 |
|---------|-------------|-----------|----------------|----------|--------------|
| **OpenClaw** | 500（384 开放 / 116 已关闭） | 500（209 开放 / 291 已合并） | 0 | 极高 | ⚠️ 紧张（P0 bug，回归） |
| **Hermes Agent** | 50（42 开放 / 8 已关闭） | 50（12 开放 / 38 已合并） | v0.22.5 | 中等 | ✅ 稳定 |
| **IronClaw** | 0（0 开放 / 0 已关闭） | 5（4 开放 / 1 已合并） | 0 | 极低 | 🔸 休眠 |
| **QwenPaw** | 25（18 开放 / 7 已关闭） | 50（38 开放 / 12 已合并） | 0 | 高 | ✅ 活跃 |
| **ZeroClaw** | 28（27 开放 / 1 已关闭） | 50（50 开放 / 0 已合并） | 0 | 高 | ⚠️ 安全导向（S0 bug） |

*健康度评分：✅ Active/Stable = 健康 velocity，轻微问题；⚠️ 紧张 = 大量 P0/S0 bug 或回归；🔸 休眠 = 低活动；🚧 不稳定 = 关键 ongoing 问题。*

---

## 3. OpenClaw 的定位

**相对同行的优势：**

- 最高的绝对开发 velocity（24小时内 500 issue + 500 PR），表明拥有庞大且活跃的贡献者群体
- 强大的多智能体编排能力，包括子智能体线程保留、升级钩子和每智能体成本预算——这些特性在同行中尚未突出
- 企业级功能：网关级访问控制、访客访问元数据、ACP（智能体通信协议）支持
- 活跃的插件生态，带有首次登录触发器用于访客入职——这是其他项目尚未优先处理的能力

**技术路径差异：**

- OpenClaw 采用网关中心架构（会话状态存储在 SQLite 并使用 WAL checkpointing），而 Hermes Agent 和 QwenPaw 更依赖内存会话管理和可选持久化
- 插件架构强调 reaction hooks 和 presentation attachment，与 ZeroClaw 更静态的插件模型不同
- Hermes Agent 使用"companion-friendly transcript"设计，而 OpenClaw 明确面向企业/部署场景，强调每智能体隔离

**社区规模：** OpenClaw 按原始活动量拥有最大的社区足迹，尽管 Hermes Agent 稳定的 v0.22.5 发布周期表明其贡献者基础更加成熟、不那么不稳定。IronClaw 几乎零社区参与度，表明它可能是一个较小的内部或研究项目。

---

## 4. 共同技术关注点

以下需求和痛点出现在多个项目中，表明行业范围内的挑战：

| 关注领域 | 受影响项目 | 具体需求 |
|------------|------------------|------------|
| **会话状态持久性** | OpenClaw, Hermes Agent, QwenPaw | 跨重启会话恢复；transcript 压缩；跨设备恢复 |
| **插件/扩展架构** | OpenClaw, QwenPaw, ZeroClaw | 动态插件加载，生命周期管理，依赖隔离 |
| **安全强制执行** | OpenClaw, ZeroClaw, Hermes Agent | 工具白名单强制执行，每智能体所有权作用域，权限升级防护 |
| **渠道/平台可靠性** | QwenPaw, Hermes Agent | WebSocket 处理，平台特定怪癖（Windows, Linux），异步 I/O |
| **性能回归追踪** | OpenClaw, ZeroClaw | 启动时间回归，内存增长，checkpoint 停滞 |
| **多租户/团队隔离** | OpenClaw, ZeroClaw | 网关作用域仪表板，每工作区访问控制 |

---

## 5. 差异化分析

| 项目 | 主要关注点 | 目标用户 | 架构 |
|---------|--------------|--------------|--------------|
| **OpenClaw** | 企业网关，多智能体编排，插件市场 | 部署 AI 智能体的 DevOps/IT 团队 | 网关中心，SQLite 支持，每智能体成本预算 |
| **Hermes Agent** | 个人伴侣，桌面客户端，多平台同步 | 个人最终用户，桌面高级用户 | 桌面优先，临时会话模型 |
| **IronClaw** | 轻量级客户端，最小占用 | 极简用户，CLI 优先 | 数据非常有限 |
| **QwenPaw** | 中国平台集成，插件生态，UI 打磨 | 中国市场用户，开发者 | 前端优先，渠道优先，模块化插件 |
| **ZeroClaw** | 安全加固，CLI 优先，OIDC/仪表板 | 安全意识强的企业，开发者 | Rust 构建，安全优先，仅 CLI 构建 |

**技术架构分歧：**

- OpenClaw 和 ZeroClaw 都强调网关和安全，但 ZeroClaw 更侧重于 Rust 构建和仅 CLI 集成的强安全性，而 OpenClaw 则倾向于具有丰富插件钩子的 Python/网关架构
- QwenPaw 独特地优先考虑渠道广度（钉钉、飞书、QQ、XMPP）和 UI 打磨（composer，滚动处理），这些领域 Hermes Agent 并不强调
- Hermes Agent 的"doc-chain"基质（RFC #143379）代表了一种新颖的持久化知识管理方法，其他项目尚未采用

---

## 6. 社区动力与成熟度

**活动层级：**

| 层级 | 项目 | 特征 |
|------|----------|----------------|
| 🚀 **快速迭代** | OpenClaw, ZeroClaw, QwenPaw | 高 PR/issue 量，活跃发布周期，大量回归待修复 |
| 🔄 **稳定** | Hermes Agent | 中等 velocity，可预测的补丁发布（v0.22.5），成熟的代码库 |
| 🛠️ **成熟中** | ZeroClaw | 高安全关注，大量 stacked PR，趋向首个稳定版本 |
| 💤 **休眠** | IronClaw | 几乎零活动，仅依赖更新，路线图不明确 |

**成熟度信号：**

- Hermes Agent 显示出稳定态势：补丁发布，中等 velocity，成熟的功能集
- OpenClaw velocity 高但紧张：大量 P0 回归来自近期发布，表明快速功能开发超出 QA 能力
- ZeroClaw 处于 v0.9.0 的"功能冻结"阶段，安全 PR 正在 review——趋向稳定
- QwenPaw 的 v2.3.0 路线图显示有意的重构（更轻量、更可扩展），表明架构成熟度

---

## 7. 趋势信号

以下趋势从跨项目社区反馈中浮现，对 AI 智能体开发者具有价值：

1. **会话持久性是第一用户痛点。** OpenClaw（transcript 重写 bug）、Hermes Agent（恢复失败）、QwenPaw（composer 草稿泄漏）都报告会话状态问题。用户期望智能体在重启和跨设备时"正常工作"——当前没有项目完全实现。

2. **安全性不再是可选项。** ZeroClaw 的 S0 级 delegate 绕过和工具白名单问题，加上 OpenClaw 的近期回归，表明随着智能体获得工具访问权限，攻击面也在扩大。两个项目都在下次发布前优先处理安全 PR。

3. **插件生态正在整合。** OpenClaw 的 reaction hooks 和 QwenPaw 的渠道即插件隔离（PR #8187）表明从静态集成转向动态沙盒插件系统——这是 2026-2027 年的趋势。

4. **网关与 CLI 的权衡正在积极探索。** ZeroClaw 的仅 CLI 构建（PR #11976）和 OpenClaw 的网关中心设计代表了部署频谱的两端，用户正在争论智能体应该"驻留"在哪里。

5. **平台特定可靠性仍未解决。** Windows 问题困扰着 OpenClaw（7-9 分钟启动）、Hermes Agent（流关闭）、QwenPaw（飞书异步阻塞）。跨平台一致性是反复出现的用户需求。

6. **每智能体资源控制正在兴起。** OpenClaw 的每智能体成本预算和 ZeroClaw 的每智能体所有权作用域表明在多智能体系统内走向细粒度资源治理——对企业部署很重要。

---

*基于日期为 2026-10-24 的项目摘要汇编。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Chinese, preserving the exact Markdown structure while using natural technical Chinese suitable for a developer newsletter. Let me go through and translate each section:

1. **Today's Overview** - High activity (50 issues, 50 PRs), v0.22.5 release, unified gateway causing issues

2. **Releases** - v0.22.5 is a patch release with ~81 PRs merged

3. **Project Progress** - 38 PRs merged/closed today, many fixes

4. **Community Hot Topics** - Top issues by comments:
   - #129993: Desktop duplicate bubble (17 comments)
   - #68128: WhatsApp bridge WinError 5 (14 comments)
   - #139818: Remote-backend sessions unresumable (11 comments)
   - #46303: Concurrent sessions cross-contaminate (11 comments)
   - #143547: Unified gateway problems (10 comments)
   - #143379: RFC doc-chain substrate (10 comments)

5. **Bugs & Stability** - Various bugs, some with fixes

6. **Feature Requests** - Several RFCs and feature requests

7. **User Feedback** - Pain points around sessions, desktop, gateway

8. **Backlog** - Need to look for long-unanswered issues

Let me translate this into natural technical Chinese, preserving the exact Markdown structure:</think>

# Hermes Agent 项目简报 — 2026年10月24日

## 1. 今日概览

Hermes Agent 过去 24 小时保持高开发活跃度，共更新 **50 个 issue** 和 **50 个 PR**。项目已于 10 月 22 日发布 **v0.22.5** 补丁版本，包含约 81 个已合并的 PR。统一网关（unified gateway）上线后的问题仍在持续发酵，社区正在积极调试会话恢复、桌面插件加载和跨平台兼容性等难题。整体健康状态稳定但活跃——多个 P2 级别 bug 正在修复中，同时新功能也在推进审核。

---

## 2. 发布动态

### v0.22.5 — Hermes Agent（2026年10月22日）

**发布说明：** 补丁版本，汇集了自 v0.22.4 以来合并的约 81 个 PR，为 GitHub（CLI/安装器）、Microsoft Store 应用、Docker 和 Hermes Cloud 提供稳定版本。完整版本说明将在 v0.23.0 中一并发布。

**标签：** `patch` `stable`

---

## 3. 项目进度

**已合并/关闭的 PR（38 个）：**

| PR | 标题 | 涉及领域 |
|---|-----|---------|
| #143821 | fix(desktop): serialize writers of desktop-plugins root (ENOTEMPTY on boot) | Desktop |
| #143822 | fix(plugins): portable plugin skills named after plugin | Plugins |
| #143811 | fix: leaving -w session no longer deletes branch with no remote | CLI |
| #143820 | fix(goals): migrate standing goals across session-id rotation | Agent |
| #143819 | fix(discord): skip empty chunks (400 error prevention) | Discord |
| #143545 | fix(gateway): host native viewer adopts served-login Desktop row | Gateway |
| #81818 | fix(hermes_cli): keep same-URL custom providers on selected credentials | Auth |
| #87641 | fix(models): resolve callable key_cmd credentials | Auth |
| #108585 | fix(bedrock): don't replay dropped toolUse from tool_calls | Bedrock |
| #97010 | fix(mcp-oauth): make Google Workspace MCP servers authenticate | MCP |

---

## 4. 社区热点话题

**最活跃的 Issue（按评论数排序）：**

| Issue | 标题 | 评论数 | 点赞 |
|-------|-----|-------|-----|
| [#129993](https://github.com/NousResearch/hermes-agent/issues/129993) | Desktop: assistant reply rendered twice (duplicate bubble) | 17 | 👍2 |
| [#68128](https://github.com/NousResearch/hermes-agent/issues/68128) | WhatsApp bridge fails with WinError 5 — missing `windows_detach_flags_without_breakaway()` | 14 | 👍1 |
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | Remote-backend desktop sessions unresumable — `session.resume` fails with `not_found` | 11 | — |
| [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions cross-contaminate (shared memory + git worktree) | 11 | 👍1 |
| [#143547](https://github.com/NousResearch/hermes-agent/issues/143547) | Unified gateway: post-merge problems on main | 10 | 👍1 |
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | RFC: The doc-chain substrate's network | 10 | — |

**分析：** 桌面会话问题占据讨论主流。重复气泡 bug（#129993）和会话恢复失败（#139818、#46303）表明统一网关的改动（#143547）引入了会话状态管理方面的回归问题。WhatsApp 桥接器问题（#68128）则反映出 Windows 平台兼容性仍有待完善。

---

## 5. Bug 与稳定性

**报告的严重/高优先级 Bug：**

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|---------|------|--------|
| [#143775](https://github.com/NousResearch/hermes-agent/issues/143775) — Stale post-boot host record permanently blocks gateway start | P2 | Open | — |
| [#143704](https://github.com/NousResearch/hermes-agent/issues/143704) — Windows: shutdown() never wakes blocked read, stalls stream timeout | P2 | Open | — |
| [#143806](https://github.com/NousResearch/hermes-agent/issues/143806) — Logging overload: unbounded queue retains exception tracebacks | P2 | Open | — |
| [#131199](https://github.com/NousResearch/hermes-agent/issues/131199) — First-run Windows install fails at Python dependencies | P2 | Open | — |
| [#143793](https://github.com/NousResearch/hermes-agent/issues/143793) — Webhook admission maps permanent error to retryable 503 | P2 | Open | — |

**其他值得关注的 Bug：**

- **#123680**（已关闭）：Discord 语音回复无法播放 — MP3 被上传为 Ogg 格式；已通过转码修复
- **#138329**（已关闭）：httpx2 2.12.0 的 1 MiB SSE 限制导致大型 tools/list MCP 服务器崩溃
- **#143305**：任何带有 Python 依赖的插件在准入时失败（Android 上的 uv.lock 冲突）

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 优先级 | 信号 |
|-------|-----|--------|-----|
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | RFC: Doc-chain substrate's network (read, governance, compaction) | P2 | 活跃的 RFC——可能近期实现 |
| [#136931](https://github.com/NousResearch/hermes-agent/issues/136931) | Skill self-improvement: distinguish durable lessons from temporary fixes | P3 | 需维护者决策 |
| [#96906](https://github.com/NousResearch/hermes-agent/issues/96906) | Delegation closeout: hold terminal response until background work finishes | P3 | 默认关闭，可选开启提案 |
| [#118181](https://github.com/NousResearch/hermes-agent/issues/118181) | Paste files from OS file manager (Ctrl+C → Ctrl+V in composer) | P3 | 与 Slack/Discord 功能对标 |
| [#133010](https://github.com/NousResearch/hermes-agent/issues/133010) | Run browser_exec's Python harness inside Docker sandbox | P3 | 安全边界考量 |
| [#40470](https://github.com/NousResearch/hermes-agent/issues/40470) | Prompt & Response Sanitization Layer for sensitive data | P3 | 安全功能请求 |
| [#98540](https://github.com/NousResearch/hermes-agent/issues/98540) | API server: expose project/workspace association on sessions | P2 | Desktop/API 功能对齐 |

**预测：** Doc-chain substrate RFC（#143379）和会话状态改进很可能出现在 v0.23.0 中，基于当前的开发活跃度和讨论热度。

---

## 7. 用户反馈总结

**痛点识别：**

1. **会话管理脆弱性** — 用户反映会话在不同设备间难以恢复，压缩周期后问题加剧；统一网关（#143547）使这些问题更加严重
2. **桌面体验 bug** — 重复消息气泡、恢复通知闪烁、更新失败等问题令桌面用户感到沮丧
3. **Windows 平台缺陷** — 首次运行安装失败、WhatsApp 桥接器报错、流关闭卡顿等问题表明 Windows 支持仍需改进
4. **插件生态摩擦** — 带 Python 依赖的插件准入失败、目录引导不足等问题阻碍了插件推广
5. **MCP 认证复杂性** — Google Workspace 等 MCP 服务器的 OAuth 流程静默失败，造成用户困惑

**满意度信号：** v0.22.5 补丁版本被视为稳定；MCP 信任门机制（#96703）收获"非常好"的评价。Skill 自我改进功能仍被用户所重视。

---

## 8. 待办事项关注

**长期未回复的重要 Issue：**

| Issue | 标题 | 创建时间 | 状态 |
|-------|-----|---------|------|
| [#46303](https://github.com/NousResearch/hermes-agent/issues/46303) | Concurrent sessions cross-contaminate | 2026-06-14 | Open（11 条评论，P2） |
| [#68128](https://github.com/NousResearch/hermes-agent/issues/68128) | WhatsApp bridge WinError 5 | 2026-07-20 | Open（14 条评论，P3） |
| [#98801](https://github.com/NousResearch/hermes-agent/issues/98801) | lifecycle_guard: docs blocked in-gateway | 2026-08-30 | Open（5 条评论，P3） |
| [#96906](https://github.com/NousResearch/hermes-agent/issues/96906) | Delegation closeout proposal | 2026-08-28 | Open（3 条评论，P3，需决策） |
| [#40470](https://github.com/NousResearch/hermes-agent/issues/40470) | Prompt & Response Sanitization Layer | 2026-06-06 | Open（2 条评论，P3） |

**需要维护者关注：** 并发会话交叉污染 bug（#46303，已开放 4+ 个月）和 WhatsApp 桥接器 Windows 问题（#68128，已开放 3+ 个月）是影响用户体验的重要问题，需要工程资源投入。

---

*基于 Hermes Agent 仓库数据生成 — 2026年10月24日*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all headings and body text
2. Keep all technical terms, code, URLs, numbers, and identifiers as-is
3. Preserve the markdown structure exactly
4. Use natural technical Chinese appropriate for a developer newsletter

Let me translate section by section:

## 1. Today's Overview
今日概况

## 2. Releases
发版动态

## 3. Project Progress
项目进展

## 4. Community Hot Topics
社区热点

## 5. Bugs & Stability
缺陷与稳定性

## 6. Feature Requests & Roadmap Signals
功能需求与路线图信号

## 7. User Feedback Summary
用户反馈概要

## 8. Backlog Watch
待办事项关注

Let me translate the full content now:</think>

# IronClaw 项目动态 — 2026-10-24

## 1. 今日概况

IronClaw 是 nearai 团队开发的 AI Agent 与个人 AI 助手开源项目。2026年10月24日该项目处于**低活跃状态**。过去24小时内无 Issue 更新，也无新版本发布。当前的活动主要来自 Dependabot 的自动化依赖更新，共处理了 5 个 Pull Request（4 个开放，1 个已关闭）。所有更新均针对 JavaScript/前端和 Python 依赖，涵盖 web UI 和 e2e 测试模块，属于常规维护而非功能开发。项目整体稳定，当前报告期间无已知 bug、崩溃或回归问题。

## 2. 发版动态

**过去24小时内无新版本发布。** 项目当前无版本发布动态可供报告。

## 3. 项目进展

| PR | 状态 | 类型 | 描述 |
|----|--------|------|-------------|
| [#8157](https://github.com/nearai/ironclaw/pull/8157) | 开放 | 依赖（Python） | 将 /tests/e2e 中的 certifi 从 2026.7.22 升级至 2026.10.19 |
| [#8156](https://github.com/nearai/ironclaw/pull/8156) | 开放 | 依赖（JS） | 将 @storybook/addon-vitest 从 10.5.7 升级至 10.6.2 |
| [#8158](https://github.com/nearai/ironclaw/pull/8158) | 开放 | 依赖（JS） | 将 storybook 从 10.5.7 升级至 10.6.2 |
| [#8155](https://github.com/nearai/ironclaw/pull/8155) | 开放 | 依赖（JS） | 将 dompurify 从 3.4.12 升级至 3.4.17 |
| [#8149](https://github.com/nearai/ironclaw/pull/8149) | 已关闭 | 依赖（JS） | 将 dompurify 从 3.4.12 升级至 3.4.16 |

**总结：** 当日进展全部为常规依赖维护。PR #8149 已关闭（可能已合并），同时有4个新的依赖更新 PR 处于开放状态。前端和 e2e 测试基础设施是这些更新的重点。

## 4. 社区热点

**过去24小时内无附带显著评论/反应的活跃 Issue 或 Pull Request。** 当前所有 PR 均为 Dependabot 自动生成的依赖更新，无任何互动和社区参与。这表明社区驱动的讨论或功能请求处于平静期。

## 5. 缺陷与稳定性

**过去24小时内无 bug、崩溃或回归问题报告。** 基于现有数据，项目未显示稳定性问题。

## 6. 功能需求与路线图信号

**过去24小时内无功能需求记录。** 当前活动模式（仅依赖更新）未提供关于下一版本功能或路线图方向的任何信号。若需推断潜在的后续版本内容，需查阅更早期的 Issue 或项目的公开路线图，这些不在今日数据范围内。

## 7. 用户反馈概要

**过去24小时内无用户反馈**（Issue、评论或反应）记录。用户主动报告的痛点或满意度/不满信号均未出现，可能表明：
- 用户群体稳定，无紧急问题，或
- 该时段 GitHub 平台上的互动量较低

## 8. 待办事项关注

**过去24小时内无需要维护者关注的长等待答 Issue 或 PR。** 当前跟踪的全部5个项目均为近期创建（2026-10-20 至 2026-10-23），且保持活跃或最近已关闭。当前无需整理的待办事项。

---

*本动态基于 nearai/ironclaw GitHub 数据生成 — 2026-10-24*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English project digest into Chinese, following the specific rules provided. Let me analyze what I need to do:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

**Overview:**
- "QwenPaw maintains high development velocity" - QwenPaw 保持高开发强度
- "updated in the last 24 hours" - 过去24小时内更新
- "no new releases were published today" - 今日无新版本发布

**Project Progress:**
- "PRs Merged/Closed Today" - 今日合并/关闭的PR
- "Key Advances in Open PRs" - 开放PR中的关键进展

**Community Hot Topics:**
- "Most Active Issues (by comments)" - 最活跃Issue（按评论数）
- "Hot PRs (Under Review)" - 热门PR（审核中）

**Bugs & Stability:**
- "Critical/High Severity Bugs" - 严重/高优先级Bug
- "Regression Fixes Completed" - 已完成的回归修复

**Feature Requests & Roadmap Signals:**
- "Key Feature Requests" - 关键功能请求
- "Roadmap Alignment" - 路线图对齐


- "User Feedback Summary" - 用户反馈总结
- "Pain Points Identified" - 发现的痛点
- "Positive Signals" - 积极信号
- "Backlog Watch" - 待办事项关注
- "Long-Unanswered Important Issues" - 长期未答复的重要Issue
- "PRs Stalled/Needs Maintainer Input" - 停滞/需要维护者介入的PR

Now I'll proceed with the translation:</think>

# QwenPaw 项目简报 — 2026-10-24

## 今日概览

QwenPaw 保持高开发强度，过去24小时内有 **25 个 Issue** 和 **50 个 PR** 更新。项目在多条战线上进展活跃：插件架构重构（v2.3.0路线图）、渠道隔离至子进程、桌面冷启动优化。**今日无新版本发布**，v2.2.2.post1 发布后验证已顺利完成。社区参与度高，Issue 涵盖 UI Bug、平台渠道问题和架构增强等方面。

---

## 版本发布

**今日无新版本。** 最新版本仍为 **v2.2.2.post1**（2026-10-22），已通过安装验证。团队正在积极推进 **v2.3.0**（参见 Issue #8289），主要方向为模块化和轻量化。

---

## 项目进展

### 今日合并/关闭的 PR（12 个）

| PR | 作者 | 描述 |
|---|------|-------|
| [#8399](https://github.com/agentscope-ai/QwenPaw/pull/8399) | zhaozhuang521 | fix(hub): 刷新时保留模型策略草稿 |
| [#8383](https://github.com/agentscope-ai/QwenPaw/pull/8383) | yutai78786 | test(security): 使 sips 预检用例平台中立 |
| [#8381](https://github.com/agentscope-ai/QwenPaw/pull/8381) | yutai78786 | test(unit): 使顾问列表和 tui 耗尽断言平台稳定 |
| [#8382](https://github.com/agentscope-ai/QwenPaw/pull/8382) | yutai78786 | test(pawapp): 用原始 socket 响应 answer sidecar probe |

**开放 PR 中的关键进展：**

| PR | 规模 | 重点 |
|---|------|-------|
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | XXXL | **重构 SDK 与应用控制平面** — PawApps 通过共享 Host 合约暴露持久化工作 |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | XXXL | **将渠道提取为插件**，采用子进程隔离（Console 除外） |
| [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347) | XXL | **ReMe 0.4.2.0 集成** — 决策压缩、图片、实体标签 |
| [#8398](https://github.com/agentscope-ai/QwenPaw/pull/8398) | L | **桌面冷启动优化** 与冰冻 WebView 恢复 |
| [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) | M | **/steer 命令** 用于执行中期 agent 引导 |

---

## 社区热点话题

### 最活跃 Issue（按评论数）

1. **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)** — 功能：面向插件的主题扩展点（8 条评论）
   - *深层需求*：插件需要更深入的主题控制能力，期望语义化 token 覆盖层

2. **[#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284)** — Bug：长对话滚轮卡顿（3 条评论，已关闭）
   - *根因*：转录高度重新估算时，滚动视图被 snap 回 1.1–2.2k px

3. **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)** — 功能：让 QwenPaw 更轻量、更可扩展（3 条评论，1 👍）
   - *战略*：v2.3.0 重大主题；插件重构实现模块化

4. **[#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351)** — Bug：Composer 草稿按 agent 而非按会话键控（3 条评论）
   - *用户体验影响*：草稿文本在不同 agent 的会话间残留

**热门 PR（审核中）：**
- [#8287](https://github.com/agentscope-ai/QwenPaw/pull/8287) — fix(console): thinking slider 填充与保存稳定性
- [#8124](https://github.com/agentscope-ai/QwenPaw/pull/8124) — fix(providers): 将内容检查错误路由至 fallback

---

## Bug 与稳定性

### 严重/高优先级 Bug

| Issue | 优先级 | 描述 | 修复状态 |
|-------|----------|-------------|------------|
| [#8394](https://github.com/agentscope-ai/QwenPaw/issues/8394) | **高** | 小艺渠道长回复时不发送 working/status 帧，静默断开 WS | 待处理 |
| [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | **高** | 钉钉最终回复在 sessionWebhook 过期时静默丢弃（errcode=300001） | 待处理 |
| [#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359) | **高** | Docker 容器中 Hub：就绪探针硬编码为 127.0.0.1（Errno 111） | 待处理 |
| [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) | **高** | 飞书渠道在主事件循环上执行同步网络调用 — 网络不可达时服务挂起 | 待处理 |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | 中 | QQ 渠道启用标志静默重置为 false，无警告 | 待处理 |

### 已完成的回归修复
- [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) — 滚轮滚动 snapback（已关闭）
- [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) — send_file_to_user 视频永久卡住会话（已关闭）
- [#8396](https://github.com/agentscope-ai/QwenPaw/issues/8396) — 删除当前会话 404 错误（已关闭）

---

## 功能请求与路线图信号

### 关键功能请求

| Issue | 功能 | 纳入下个版本的可能性 |
|-------|---------|---------------------------|
| [#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289) | **插件重构** — 更轻量、更模块化的 QwenPaw | **高** — v2.3.0 核心主题 |
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 面向插件的主题扩展（语义化 token） | 高 |
| [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | 桌面端流式输出时自动滚动开关 | 中 |
| [#8404](https://github.com/agentscope-ai/QwenPaw/issues/8404) | 控制台抽屉中 Office 文件预览（docx/xlsx/pptx） | 中 |

### 路线图对齐
活跃的 PR [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)、[#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) 和 [#8347](https://github.com/agentscope-ai/QwenPaw/pull/8347) 直接支撑 v2.3.0 **更轻量 + 更可扩展** 的架构愿景。

---

## 用户反馈总结

### 发现的痛点

1. **平台渠道可靠性**
   - 钉钉长回复静默丢弃
   - 飞书在主事件循环上阻塞网络请求
   - 小艺 WebSocket 静默断开无用户通知

2. **Docker/Hub 部署摩擦**
   - 容器中 Hub 因硬编码 localhost 就绪探针失败
   - HUB 模式下本地模型配置显示异常

3. **桌面体验**
   - 流式输出时自动滚动无禁用开关
   - 冷启动性能问题
   - WebView 冻结

4. **数据持久化问题**
   - Chat Composer 草稿跨会话残留（按 agent 而非按会话）
   - QQ 渠道启用标志静默重置

### 积极信号
- v2.2.2.post1 发布验证通过
- 社区积极贡献插件和首个修复（如 #8345、#8400）
- 测试基础设施正针对跨平台稳定性加固

---

## 待办事项关注

### 长期未答复的重要 Issue

| Issue | 存续时间 | 描述 | 需要关注 |
|-------|-----|-------------|-----------------|
| [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | 约3周 | 跨会话消息（chat_with_agent）被注册为独立聊天 — UI 拆分同一 session | 已分类，需设计决策 |
| [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) | 约2个月 | 桌面端自动滚动开关请求 | 功能优先级排序 |
| [#8335](https://github.com/agentscope-ai/QwenPaw/issues/8335) | 约5天 | 设计：聊天历史中的媒体 — 48MB 请求体、会话卡死 | 需架构评审 |

### 停滞/需要维护者介入的 PR

| PR | 存续时间 | 状态 |
|-----|---------|-------|
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | 约1个月 | XXXL 重构 — 需要核心维护者投入 |
| [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | 约1个月 | 准备就绪，待维护者审核（仅升级工具策略钩子） |

---

*简报基于 2026-10-24 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese, following the specific rules provided. Let me translate this carefully while:

1. Preserving all Markdown structure exactly (headings, tables, lists, etc.)
2. Keeping URLs, issue/PR numbers, code, and technical terms unchanged
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation
5. Outputting ONLY the translation

Let me go through each section:

**1. Today's Overview**
- "ZeroClaw shows very high activity today" → "ZeroClaw今日活动非常活跃"
- "in an intense development push toward v0.9.0" → "正在大力推进v0.9.0版本的开发"
- "No releases have been published today" → "今日未发布新版本"
- Keep the activity numbers and labels

**2. Releases**
- Translate while keeping the "No new releases today" message

**3. Project Progress**
- Keep the table structure, translate text

**4. Community Hot Topics**
- Translate the discussion points

**5. Bugs & Stability**
- Keep the table, translate descriptions

**6. Feature Requests & Roadmap Signals**
- Translate while keeping technical terms

**7. User Feedback Summary**
- Translate the pain points

**8. Backlog Watch**
- Translate while keeping the table

Let me do a complete translation now:</think>

# ZeroClaw 项目简报 — 2026-10-24

---

## 1. 今日概览

ZeroClaw今日活动非常活跃，过去24小时内有 **28个issue** 和 **50个pull request** 更新。项目正在大力推进 **v0.9.0** 版本的开发，大量issue和PR都带有 `release:v0.9.0` 标签。今日未发布新版本。活动涉及安全加固、网关增强（包括OIDC登录和WebSocket修复）、频道改进以及构建配置优化。大量项目标记为安全相关且标记为"高风险"，表明项目正在针对即将发布的版本解决关键问题。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去24小时内没有PR被合并或关闭。所有50个PR均保持开放状态，代表的是活跃的开发流水线而非已合并的代码。

推动v0.9.0的关键PR：

| PR | 标题 | 规模 | 关注点 |
|----|------|------|--------|
| [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) | feat(gateway): scoped dashboard chat through the core | XL | 网关，安全，release:v0.9.0 |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | feat(gateway): opt-in OIDC dashboard sign-in | — | 网关，安全，release:v0.9.0 |
| [#11976](https://github.com/zeroclaw-labs/zeroclaw/pull/11976) | ci(cli-only): build and test the CLI-only feature set | L | CLI，release:v0.9.0 |
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | feat(session): implement append-only session event history | XL | Session，核心 |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | fix(rpc): judge queued session ownership by current authority | XL | 安全，priority:p1 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | fix(tools): per-agent ownership scoping for session tools and discord_search | XL | 安全，priority:p1 |

---

## 4. 社区热点话题

按评论数排名的最活跃讨论：

**Issue [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)** — [Tracker]: Runtime, dashboard sign-in and gateway delivery  
- **评论:** 15 | **状态:** 开放 | **标签:** enhancement, priority:p2, risk:high, release:v0.9.0
- **摘要:** 这是一个高层级的实施追踪器，协调v0.9.0剩余的runtime和网关路线图，包括版本分配、排序和验收依据。
- **分析:** 此追踪器是当前发布周期的中心协调点，反映了社区和维护者对完成网关交付和dashboard登录功能的关注。

**Issue [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)** — [Bug]: delegate bypasses parent's tool allowlist  
- **评论:** 5 | **状态:** 开放 | **标签:** bug, priority:p1, risk:high, security
- **摘要:** `delegate` 工具使用未过滤的父工具集过滤`parent_tools`，允许子代理调用父策略明确排除的工具。
- **分析:** 这是一个关键的安全漏洞（S0 - 数据丢失/安全风险），允许在代理委托工作流中进行权限升级。5条评论表明正在积极讨论修复方案。

**Issue [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711)** — [Bug]: trimming a long conversation permanently deletes its older turns  
- **评论:** 3 | **状态:** 开放 | **标签:** bug, runtime
- **摘要:** 当网关对话增长超过其上下文预算时，历史修trim持久化通过重写记录进行，导致永久数据丢失。
- **分析:** 这影响了会话持久化的可靠性，这是一个面向用户的核心功能。

---

## 5. 缺陷与稳定性

按严重程度排序（S0/S1 = 严重）：

| 严重程度 | Issue | 标题 | 修复PR? |
|----------|-------|------|---------|
| **S0 - 数据丢失/安全风险** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate bypasses parent's tool allowlist | 无 |
| **S1 - 工作流阻塞** | [#11957](https://github.com/zeroclaw-labs/zeroclaw/issues/11957) | OIDC enrollment sends raw client credentials in Basic header, breaking client_credentials and device-grant enrollment | 无 |
| **S2** | [#11951](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) | gateway WebSocket upgrades fail over the built-in TLS listener | 无 |
| **S2** | [#11989](https://github.com/zeroclaw-labs/zeroclaw/issues/11989) | per-channel excluded_tools is never applied | 无 |
| **S2** | [#11991](https://github.com/zeroclaw-labs/zeroclaw/issues/11991) | outbound email HTML carries raw markup and arbitrary image URLs | 无 |
| **S2** | [#11970](https://github.com/zeroclaw-labs/zeroclaw/issues/11970) | agents delete/rename skip owned-state cascade in gateway-less builds | 无 |
| **S2** | [#12008](https://github.com/zeroclaw-labs/zeroclaw/issues/12008) | cron announcements go through disabled channel instances | 无 |
| **S3** | [#12005](https://github.com/zeroclaw-labs/zeroclaw/issues/12005) | PowerShell dialect rejects any command with bare `@` | 无 |
| **S3** | [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | daemon's 64 live RPC sessions never released when idle | 无 |
| **S3** | [#11987](https://github.com/zeroclaw-labs/zeroclaw/issues/11987) | Inline nosemgrep comments don't stop Semgrep alerts | 无 |

**注:** 大多数缺陷在数据中没有关联的修复PR，表明它们是新报告的或正在等待修复开发。

---

## 6. 功能请求与路线图信号

指向v0.9.0及后续版本的关键功能请求：

| Issue | 标题 | 标签 | 信号 |
|-------|------|------|------|
| [#11961](https://github.com/zeroclaw-labs/zeroclaw/issues/11961) | Dashboard sign-in with OIDC | enhancement, gateway, security, release:v0.9.0 | **进行中** — PR #11965 |
| [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | Dashboard chat for signed-in accounts without administrator rights | enhancement, gateway, release:v0.9.0 | **进行中** — PR #11986 |
| [#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) | Build ZeroClaw without the gateway or dashboard (CLI-only) | enhancement, cli, release:v0.9.0 | **进行中** — PR #11976 |
| [#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | Email channel: operator templates and sanitised HTML body | feature, channel | 新功能 |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | Unified file intake, resolver, and delivery implementation | tracker, priority:p2, risk:high | 追踪中 |
| [#12000](https://github.com/zeroclaw-labs/zeroclaw/issues/12000) | Add DeepSeek Web Search provider | enhancement | 新功能 |
| [#12001](https://github.com/zeroclaw-labs/zeroclaw/issues/12001) | RFC: MITM egress proxy to control agent access | rfc, security | 新RFC |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | Add configurable XMPP/Prosody channel with OMEMO | feature, channel | PR审核中 |

**预测:** v0.9.0版本可能包含OIDC dashboard登录、作用域dashboard聊天、CLI-only构建选项，以及关键安全漏洞的修复（delegate bypass、OIDC凭证编码）。XMPP频道和统一文件处理可能是后续版本的功能候选。

---

## 7. 用户反馈摘要

从issue报告中浮现的真实痛点：

1. **安全边界失效** — delegate工具allowlist绕过（[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)）和shell命令allowlist绕过（[#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061) 已在PR中合并）表明用户正在积极测试并暴露安全策略漏洞。

2. **构建配置摩擦** — 用户报告`metrics`和`embedded-web`特性将整个网关编译到headless构建中（[#11969](https://github.com/zeroclaw-labs/zeroclaw/issues/11969)），并且代理删除/重命名操作在没有网关时行为不正确（[#11970](https://github.com/zeroclaw-labs/zeroclaw/issues/11970)）。这推动了CLI-only构建功能（[#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971)）。

3. **邮件频道可用性** — 邮件频道生成的原始HTML和允许来自代理输出的任意图片URL（[#11991](https://github.com/zeroclaw-labs/zeroclaw/issues/11991)），并且per-channel excluded_tools未被应用（[#11989](https://github.com/zeroclaw-labs/zeroclaw/issues/11989)），显示用户对生产环境中频道行为的不满。

4. **会话数据丢失问题** — 长对话trimming永久删除较早轮次（[#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711)）直接影响用户对会话持久化的信任。

5. **运维CLI问题** — `get-paircode`命令在失败时返回退出码0（[#11972](https://github.com/zeroclaw-labs/zeroclaw/issues/11972)），导致自动化脚本静默失败。

---

## 8. 待办关注

需要维护者关注的老旧或高影响力issue/PR：

| 项目 | 存在时间 | 状态 | 关注点 |
|------|----------|------|--------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 自2026年6月9日开放 | 开放 | 重要版本追踪器 — v0.9.0关键路径 |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 自2026年6月24日开放 | 开放 | 安全S0 — 尚无修复PR，高风险 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | 自2026年8月4日开放 | 开放 | XL安全PR，priority:p1 — 需要审核 |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | 自2026年9月29日开放 | 开放 | XL安全PR，priority:p1 — 需要审核 |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | 自2026年9月29日开放 | 开放 | XL安全PR，priority:p1 — 依赖于#11225 |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | 自2026年10月1日开放 | 开放 | XL安全PR，priority:p1 — 需要维护者审核 |

**总结:** 待办事项由大型、以安全为重点的PR主导（size:XL, priority:p1, risk:high），这些PR相互依赖且等待审核。关键的delegate bypass缺陷（[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)）在4个月后仍无修复PR。维护者应优先审核这些堆叠的安全PR以疏通v0.9.0版本的发布流程。

---

*基于2026-10-24的GitHub数据为zeroclaw-labs/zeroclaw生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*