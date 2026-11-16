# OpenClaw 生态日报 2026-11-16

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-16 02:21 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate a technical project digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, code, numbers, dates verbatim
4. Keep project names, slugs, version tags, file paths, API identifiers in original form
5. Use natural technical Chinese suitable for a Chinese developer newsletter

Let me translate section by section:

## 1. 今日概览

OpenClaw shows high development velocity with... - this is about the activity metrics
- 500 issues and 500 PRs updated in the past 24 hours
- 77 closed issues, 186 merged/closed PRs
- No new releases
- Windows reliability, macOS gateway operations, plugin loading performance
- Community engagement with 82 comments on top issue
- Gateway blocking regression since 2026.9.6

Let me translate this naturally:

OpenClaw 展现出极高的开发活跃度，过去 24 小时内共有 **500 条 issue 和 500 条 PR 产生更新**，其中包括 77 个已关闭的 issue 和 186 个已合并/关闭的 PR。今日未发布新版本。项目持续致力于解决各平台稳定性问题——特别是 Windows 可靠性、macOS 网关运行和插件加载性能——其中一项重要的 P1 修复已被合并。社区参与度依然强劲，置顶 issue 获得了 82 条评论，表明在 2026.9.6 引入的网关阻塞回归问题上有良好的协作。

## 2. 版本发布

**今日无新版本发布。** 项目仍维持在 2026.11.x 发布序列，过去 24 小时内未发布任何标记版本。

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#198302](https://github.com/openclaw/openclaw/pull/198302) | fix(plugins): 保持网关在初始插件加载期间的响应性 | **P1** — 修复了依赖较重的插件加载时网关卡顿问题 |

The table shows a critical fix for plugin loading responsiveness during initialization. The fix in #198302 addresses the Gateway freezing when plugins with heavy dependencies load, which is marked as P1 priority. 插件加载机制改进：依赖较重的插件现在通过异步方式在准备 worker 中执行回调。文档链接处理得到修复，CLI 在 JSON 模式下的错误诊断更加完善，Gmail 设置过程中的具体修正现在会通过 stderr 输出显示。持续集成方面新增了有界的无密钥 Goal 24 证明任务以提升测试覆盖率。

CLI 备份恢复、网络 UI 连接恢复（性能提升 40-56 秒）、插件 SDK 回复分发安全性和 EdgeAuth 无网关令牌的连接方案都在推进中。新的 `create-blobster` 技能已集成 CLI 渲染器，自动化回退机制也在开发中。

根据 provider 的限流策略动态调整自动化规模。

社区热点话题包括几个活跃讨论的 issue：大型外部插件导致网关阻塞数分钟的问题在所有平台上引发关注（82 条评论，P0 严重级别），Windows 启动缓慢、关闭异常和计划任务权限错误也在讨论中。

此外还有 SQLite 头部探测超时修复无法在 2026.10.10 到达的 P0 问题、CLI 支持的子代理 announce-wake 工具免费运行问题、P1 级别，以及五个方式导致持久会话重写其前缀的提示缓存问题。

关键 PR 方面，更新机制正在进行 Git 检出安装改革，多代理能力也在开发中允许代理有选择地参与群组对话，而会话功能则倾向于支持同通道线程召回功能。

底层需求分析显示 #160959 揭示了一个关键需求：异步插件加载机制避免阻塞网关事件循环。社区在调试 2026.9.6 以来的这个回归问题时投入了大量精力，Windows 部署问题表明在托管服务中存在摩擦。

#143017 中提示缓存问题则反映了长对话生成 21.3M 缓存写入令牌的扩展性问题。P0 级别问题包括 #160959 中大型插件导致网关阻塞数分钟的问题（所有平台），#170956 中 Windows 启动/关闭/更新可靠性问题，以及 #146860 中 Windows 托管更新交接卡顿的问题。

iOS App Store APNs registration 也存在问题，从未成功发布。

关键 P1 bug 包括 #196199 中原生 Codex 助手补全无法恢复父级的问题（影响会话状态和消息丢失），#194403 中助手补全延续会使自身权限失效的问题（阻止对话进行），以及 #162637 中原生 Codex 补全交接失败的问题。

此外还有 #181120 中 macOS 网关因 MessagePort 关闭而停止响应导致崩溃循环，#159799 中字节上限的历史水合破坏前缀缓存的问题，以及 #174681 中插件准备阻塞网关主线程的回归问题（已回滚的修复）。

今天的修复通过将依赖较重的插件改为异步加载解决了网关卡顿问题，但 #174681 跟踪的已回滚修复表明问题仍未完全解决。

关键功能包括根据代理限制和可用内存动态调整自动化规模、在 provider 限流时自动回退自动化，以及允许代理有选择性地参与群组对话等高价值功能。

此外还有消费 MCP 服务器配置的 MCP 事件、用户级密钥库、每个回合的模型和推理工作量的细粒度控制，以及语音收据开关等社区功能请求。

根据动态自动化规模调整和 provider 回退功能的组合来看，团队正在优先处理多租户服务器可靠性问题，而选择性群组对话参与功能则表明正在投资多代理协调能力。

用户反馈显示 Windows 可靠性存在痛点，特别是重启/更新仅在多次重试后失败的情况。

macOS 网关操作中 `gateway stop` 命令普遍失败，插件加载性能在大规模场景下导致数分钟的延迟，内存索引在 864 MiB 语料库上失败但 205 MiB 成功，上下文窗口管理问题使得每个回合的前缀缓存都被破坏。

平台特定问题中，Windows 存在 schtasks 权限错误阻止更新、插件在重启时关闭不干净、InteractiveToken 登录类型导致交接卡顿；macOS 存在网关停止命令普遍失败、深色主题下设置 UI 迟缓、MessagePort 关闭导致主线程阻塞；iOS 存在 APNs 中继注册未完成、应用商店版本配对成功但推送失败。

用户对复杂问题的积极参与表明平台投入度强，#198302 的快速修复周转显示出响应迅速的问题处理能力。

积压工作中有几个长期未解决的 P1 问题需要关注，包括 CLI 支持的子代理 announce-wake 工具免费运行、聊天会话命名集中化和子代理生命周期定义、十六个调用点发出相同的"启动工作时已更改"错误消息，以及 memory_search 在 15 秒处挂起且缺少每调用超时配置。

多个带有 `clawsweeper:needs-product-decision` 标签的问题已搁置 75 天以上待分类，另有 `clawsweeper:needs-security-review` 标志需要处理，还有几个带有 `clawsweeper:no-new-fix-pr` 标签的问题因贡献者可用性问题受阻。

维护债务包括 4 个未解决的 `clawsweeper:needs-product-decision` 问题已积压超过 75 天，以及多个有待处理的安全审查和贡献者可用性相关的待办事项。

现在准备生成完整的 Markdown 输出。
</think>


# OpenClaw 项目日报 — 2026-11-16

## 1. 今日概览

OpenClaw 展现出极高的开发活跃度，过去 24 小时内共有 **500 条 issue 和 500 条 PR 产生更新**，其中包括 77 个已关闭的 issue 和 186 个已合并/关闭的 PR。今日未发布新版本。项目持续致力于解决各平台稳定性问题——特别是 Windows 可靠性、macOS 网关运行和插件加载性能——其中一项重要的 P1 修复已被合并。社区参与度依然强劲，置顶 issue 获得了 82 条评论，表明在 2026.9.6 引入的网关阻塞回归问题上有良好的协作。

---

## 2. 版本发布

**今日无新版本发布。** 项目仍维持在 2026.11.x 发布序列，过去 24 小时内未发布任何标记版本。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#198302](https://github.com/openclaw/openclaw/pull/198302) | fix(plugins): 保持网关在初始插件加载期间的响应性 | **P1** — 修复了依赖较重的插件加载时网关卡顿问题；可执行绑定现已异步回调到 preparation worker |
| [#199626](https://github.com/openclaw/openclaw/pull/199626) | fix(memory-wiki): 保持导入 Markdown 链接指向生成的页面 | **P2** — 修复了目标包含括号/空格时链接断裂的问题 |
| [#199639](https://github.com/openclaw/openclaw/pull/199639) | fix(cli): 在 JSON 中显示可操作的推理预检错误 | **P2** — 改进了 JSON 模式下的错误诊断 |
| [#199642](https://github.com/openclaw/openclaw/pull/199642) | fix(cli): 在 JSON 失败中保留 Gmail 设置补救措施 | **P2** — 在 JSON stderr 输出中暴露具体修正 |
| [#199784](https://github.com/openclaw/openclaw/pull/199784) | test(ci): 添加有界的 secretless Goal 24 证明任务 | **P3** — 测试覆盖率改进 |

### 推进中的活跃 PR

- [#199887](https://github.com/openclaw/openclaw/pull/199887) — Web UI 连接恢复修复（40-56 秒改进）
- [#199700](https://github.com/openclaw/openclaw/pull/199700) — 插件 SDK 回复分发安全修复（防止 retired 状态）
- [#199693](https://github.com/openclaw/openclaw/pull/199693) — 无 Gateway 令牌通过 EdgeAuth 连接（安全敏感）
- [#199178](https://github.com/openclaw/openclaw/pull/199178) — 新 `create-blobster` 技能（CLI 渲染器）
- [#197395](https://github.com/openclaw/openclaw/pull/197395) — 提供商限流时自动化回退
- [#197394](https://github.com/openclaw/openclaw/pull/197394) — 根据代理限制和可用内存动态调整自动化规模

---

## 4. 社区热点

### 评论最多的 Issue

| Issue | 标题 | 评论数 | 严重性 | 主题 |
|---|---|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 网关在加载大型外部插件时阻塞数分钟 | **82** | P0 | **核心稳定性回归** |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows: 启动慢、关闭不干净、schtasks 权限错误 | **33** | P0 | 平台可靠性 |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | macOS 网关停止失败，提示"无法完整检查进程谱系" | **28** | P2 | 平台可靠性 |
| [#193962](https://github.com/openclaw/openclaw/issues/193962) | SQLite header-probe 超时修复在 2026.10.10 无法触及 | **26** | P0 | 更新机制 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI 支持的子代理 announce-wake 以工具免费方式运行 | **18** | P1 | 代理行为 |
| [#143017](https://github.com/openclaw/openclaw/issues/143017) | 提示缓存：持久会话重写前缀的五种方式 | **17** | P2 | 性能/内存 |

### 关注度最高的 PR

| PR | 标题 | 主题 |
|---|---|---|
| [#199706](https://github.com/openclaw/openclaw/pull/199706) | feat(update): 从 releases 运行 Git checkout 安装 | 更新机制重构 |
| [#159478](https://github.com/openclaw/openclaw/pull/159478) | feat: 让代理有选择性地参与群组对话 | 多代理能力 |
| [#163267](https://github.com/openclaw/openclaw/pull/163267) | feat(sessions): 允许同通道线程召回 | 隐私与访问控制 |

### 深层需求分析

#160959 揭示了一个关键需求：**异步插件加载**，不阻塞网关事件循环。社区在调试 2026.9.6 以来的这个回归问题时投入了大量精力。Windows 问题 (#170956) 表明托管服务存在部署摩擦。提示缓存问题 (#143017) 凸显了长对话生成 21.3M 缓存写入令牌的扩展性挑战。

---

## 5. Bug 与稳定性

### 活跃中的 P0 关键问题

| Issue | 标题 | 平台 | 状态 |
|---|---|---|---|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 大型插件加载时网关阻塞数分钟 | 全平台 | Open（82 条评论） |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows 启动/关闭/更新可靠性 | Windows | Open（33 条评论） |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | Windows 托管更新交接卡顿 | Windows | Open（12 条评论） |
| [#146791](https://github.com/openclaw/openclaw/issues/146791) | iOS App Store APNs 注册从未发布 | iOS | Open（10 条评论） |

### 需要关注的 P1 Bug

| Issue | 标题 | 影响 |
|---|---|---|
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 原生 Codex 助手补全无法恢复父级 | 会话状态，消息丢失 |
| [#194403](https://github.com/openclaw/openclaw/issues/194403) | 助手补全延续使自身权限失效 | 阻止对话进行 |
| [#162637](https://github.com/openclaw/openclaw/issues/162637) | 原生 Codex 补全交接失败，错误 SESSION_WORK_START_CHANGED | 会话状态 |
| [#181120](https://github.com/openclaw/openclaw/issues/181120) | macOS 网关因 MessagePort 关闭停止响应 | 崩溃循环 |
| [#159799](https://github.com/openclaw/openclaw/issues/159799) | 字节上限的历史水合破坏前缀缓存 | 用户体验摩擦 |
| [#174681](https://github.com/openclaw/openclaw/issues/174681) | 回归：插件准备阻塞网关主线程 | 崩溃循环 |

### 今日合并的修复
- **#198302** 解决了初始插件加载期间的网关卡顿（依赖较重的插件现在异步加载）

### 值得注意的回归
- **#174681** 追踪一个被回滚的修复 (#172750)，该修复导致相反问题——插件准备现在再次阻塞主线程；后续修复 #198302 解决了这个问题

---

## 6. 功能请求与路线图信号

### 高价值功能 PR

| PR | 标题 | 战略价值 |
|---|---|---|
| [#197394](https://github.com/openclaw/openclaw/pull/197394) | 根据代理限制和可用内存调整自动化规模 | **基础设施扩展** |
| [#197395](https://github.com/openclaw/openclaw/pull/197395) | 提供商推送回来时自动化回退 | **可靠性** |
| [#159478](https://github.com/openclaw/openclaw/pull/159478) | 让代理有选择性地参与群组对话 | **多代理智能** |
| [#166586](https://github.com/openclaw/openclaw/issues/166586) | 消费配置 MCP 服务器的 MCP 事件 | **集成扩展性** |
| [#197297](https://github.com/openclaw/openclaw/issues/197297) | 每个用户的密钥库 | **安全/多租户** |

### 按需求排序的社区功能请求

- **每用户密钥** (#197297, 7 条评论) — 多用户网关安全模型
- **MCP 事件订阅** (#166586, 8 条评论) — 事件驱动的代理触发
- **每回合模型 + 推理投入** (#156774, 7 条评论) — 细粒度模型控制
- **语音回执开关** (#184803, 8 条评论) — Talk UX 自定义

### 路线图指标
动态自动化规模调整 (#197394) 和提供商回退 (#197395) 的结合表明团队正在优先处理**多租户服务器可靠性**。选择性群组对话参与 (#159478) 表明在**多代理协调**方面投入。

---

## 7. 用户反馈摘要

### 痛点

| 类别 | 证据 | 影响 |
|---|---|---|
| **Windows 可靠性** | #170956 — 重启/更新"仅在多次重试后失败" | 生产停机 |
| **macOS 网关操作** | #191944 — `gateway stop` 普遍失败 | 运维摩擦 |
| **插件加载性能** | #160959, #174681 — 数分钟的卡顿 | 用户体验 |
| **内存索引** | #196505 — 864 MiB 语料库失败，205 MiB 成功 | 可扩展性 |
| **上下文窗口管理** | #159799 — 每回合前缀缓存被破坏 | Token 预算浪费 |

### 平台特定问题

**Windows：**
- schtasks 权限错误阻止更新
- 重启时插件关闭不干净
- InteractiveToken 登录类型导致交接卡顿

**macOS：**
- 网关停止命令普遍失败
- 深色主题下设置 UI 迟缓
- MessagePort 关闭导致主线程阻塞

**iOS：**
- APNs 中继注册从未完成
- App Store 版本配对成功但推送失败

### 满意度信号
用户在复杂问题上积极互动（#160959 获得 82 条评论）表明对平台的强烈投入。#198302 的快速修复周转显示响应迅速。

---

## 8. 积压待办观察

### 长期未响应的关键问题

| Issue | 时长 | 标题 | 需求 |
|---|---|---|---|
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | ~97 天 | CLI 支持的子代理 announce-wake 以工具免费方式运行 | 产品决策 + 安全审查 |
| [#103067](https://github.com/openclaw/openclaw/issues/103067) | ~131 天 | 集中化聊天会话命名；定义子代理生命周期 | 产品决策 |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | ~87 天 | 十六个调用点发出相同的"启动工作时已更改"错误 | 产品决策 |
| [#136405](https://github.com/openclaw/openclaw/issues/136405) | ~75 天 | memory_search 在 15s 卡顿；无每调用超时配置 | 产品决策 |

### 需要整理的陈旧问题

带有 `stale` 标签且有重要讨论的问题：
- [#180941](https://github.com/openclaw/openclaw/issues/180941) — 代理反复调用 sessions_yield
- [#157827](https://github.com/openclaw/openclaw/issues/157827) — 接地种子引用错误引用
- [#156953](https://github.com/openclaw/openclaw/issues/156953) — 记录 MaxListenersExceededWarning
- [#157537](https://github.com/openclaw/openclaw/issues/157537) — 助手消息重复发出

### 需要维护者关注的 PR

| PR | 时长 | 标题 | 状态 |
|---|---|---|---|
| [#199887](https://github.com/openclaw/openclaw/pull/199887) | 今日 | Web UI 连接恢复 | 👀 准备就绪等待维护者查看 |
| [#199869](https://github.com/openclaw/openclaw/pull/199869) | 今日 | CLI 备份恢复补救措施 | 👀 准备就绪等待维护者查看 |
| [#198070](https://github.com/openclaw/openclaw/pull/198070) | 3 天 | Templates: 无计划控制 UI 聊天 | ⏳ 等待维护者 |
| [#177555](https://github.com/openclaw/openclaw/pull/177555) | 28 天 | Slack: 停止无标签机器人循环 | ⏳ 等待维护者 |
| [#127770](https://github.com/openclaw/openclaw/pull/127770) | 87 天 | PDF: OpenAI 原生文档选择加入 | ⏳ 等待维护者 |

### 维护债务
- 4 个带有 `clawsweeper:needs-product-decision` 的问题已搁置 75+ 天未解决
- 多个 `clawsweeper:needs-security-review` 标志等待处理
- 若干带有 `clawsweeper:no-new-fix-pr` 的问题因贡献者可用性问题受阻

---

*日报基于 OpenClaw 项目 2026-11-16 数据生成。所有链接均指向 https://github.com/openclaw/openclaw。*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to output ONLY the translation, no preamble, no explanation, no markdown fences. I should preserve the exact Markdown structure, tables, lists, blockquotes, formatting, etc.

Let me translate this carefully, maintaining technical accuracy and natural Chinese technical register.

Key points to remember:
- Keep URLs, project names, repo slugs, usernames, version tags, file paths, API/config identifiers in original form
- Keep issue/PR references like #12345 as-is
- Use natural technical Chinese, not literal word-for-word
- Preserve all Markdown structure
- No markdown fences around output

Let me translate section by section:

Title: Personal AI Agent Ecosystem — Cross-Project Comparison Report
- This should be translated naturally

Let me go through the entire document...
</think>


# Personal AI Agent 生态系统 — 跨项目对比报告

**报告日期：** 2026-11-16 | **覆盖范围：** OpenClaw · Hermes Agent · IronClaw · QwenPaw · ZeroClaw

---

## 1. 生态系统总览

个人 AI 助手与 Agent 开源生态正处于多向量并行增长阶段。对五个项目的分析呈现出明显的成熟度分层：**OpenClaw 和 ZeroClaw** 作为高迭代速度的企业级平台，日处理数百次更新，具备深度插件架构和多渠道支持能力。**Hermes Agent** 居中，以稳定的发布节奏和云端可移植性、桌面端 UX 为重点。**QwenPaw** 在多平台渠道集成（微信、飞书、Matrix、Telegram）方面表现突出，贡献者社区活跃。**IronClaw** 规模较小但架构权重不成比例——其基于成本的预算系统和多 Provider 编排能力代表了一种基础设施级别的特性，有潜力成为整个生态的参考标准。没有任何单一项目占据主导地位；相反，生态正沿着平台定位（桌面端 vs. 服务器端 vs. 本地 LLM）、部署模式（云托管 vs. 自托管）和 Agent 自主性理念等维度分化。

---

## 2. 活跃度对比

| 项目 | Issues 更新（24h） | PRs 更新（24h） | 已合并/关闭 PRs | Releases（24h） | 活跃度等级 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | 186 | 0 | 🔥🔥🔥 极高 |
| **ZeroClaw** | 29 | 50 | 1 | 0 | 🔥🔥 高 |
| **Hermes Agent** | 50 | 50 | 16 | 1（canary） | 🔥 中高 |
| **QwenPaw** | 15 | 15 | 2 | 0 | 🟡 中 |
| **IronClaw** | 3 | 1 | 0 | 0 | 🟢 低 |

**健康度观察：**

- **OpenClaw** 原始活跃度最高，但 Bug 量也最大（4 个活跃 P0/P1 问题，12+ 个 P2 Bug，4 个安全关切）。活跃度与持续的回归修复工作高度相关。
- **ZeroClaw** 的 PR 与合并比率异常高（49 个 open，1 个 merged），表明一个大型的 V5 配置模式重构正在进行中，尚未通过评审。
- **Hermes Agent** 是唯一保持规律 canary 发布节奏的项目，表明其具备持续部署的规范化发布流程。
- **IronClaw** 活跃度极低，但正在攻克高影响力的特性（基于成本的 USD 预算编制），该特性受困于定价数据的准确性。

---

## 3. OpenClaw 的生态位

### 相比同类项目的优势

| 维度 | OpenClaw 的优势 |
|---|---|
| **社区规模** | 500 次/天 vs. 排名第二（ZeroClaw）的 50 次——相差一个数量级的贡献者规模 |
| **插件生态** | 成熟的插件加载架构，包含 preparation workers 和运行时隔离；同类项目尚在追赶 |
| **多 Agent 协调** | 群组对话中的选择性 Agent 参与正在积极开发中（#159478） |
| **回归治理** | 维护优先级标签（P0–P3）并记录回归历史（如 #174681 回滚 #172750） |
| **发布节奏** | 稳定推进 v2026.11.x 系列，附带稳定性修复文档 |

### 技术路线差异

OpenClaw 在其 **Gateway 中心化架构** 上与同类项目形成分野——一个统一的守护进程，multiplex 所有入口类型（CLI、TUI、Desktop、API、bots、cron）。这与以下路线不同：

- **ZeroClaw 的** 模块化 Rust 原生方案，具有类型化的领域对象和独立 crates
- **QwenPaw 的** 渠道独立进程模型，插件以独立仓库分发
- **IronClaw 的** 轻量级 Agent 优先设计，带有层级化的预算传播机制

Gateway 架构提供了一致性，但也引入了文档中记录的风险——插件加载时的主线程阻塞（Issues #160959、#174681）。

### 社区规模指标

- **Issue 互动深度**：OpenClaw 置顶 Issue（#160959）有 82 条评论；Hermes Agent 置顶 Issue 有 73 条；ZeroClaw 置顶 Issue 仅 6 条
- **贡献者广度**：OpenClaw 展示了跨插件、UI、CLI、memory 和自动化子系统的命名作者贡献
- **跨项目采用**：OpenClaw 的架构（Gateway、subagents、skill 系统）似乎影响了 Hermes Agent 的设计决策

---

## 4. 共同技术聚焦领域

多个需求在多个项目中独立出现，表明这是整个生态的共性需求：

### 4.1 凭证与密钥管理

| 项目 | 具体需求 |
|---|---|
| **ZeroClaw** | 作用域化的运维人员托管凭证（#12422），云端密钥库（1Password、AWS、Azure、GCP）目录配置（#12482），只写 WebUI 凭证（#12473） |
| **QwenPaw** | 微信凭证按 Agent 工作空间隔离（#8755、#8756） |
| **Hermes Agent** | 多用户 Gateway 的独立密钥库（#197297） |
| **OpenClaw** | 外部插件热重载安全，从已退役运行时回调 SDK 的安全分发（#199700） |

**跨项目信号**：多租户需求正在推动凭证隔离需求。目前没有项目具备成熟的密钥管理系统；这是整个生态应共同解决的缺口。

### 4.2 成本可视化与控制

| 项目 | 具体需求 |
|---|---|
| **IronClaw** | 基于成本的 USD 预算编制，替代迭代次数/时间限制（#2843） |
| **OpenClaw** | Prompt 缓存扩展（21.3M tokens），会话限制错误处理（#118793），按轮次推理投入控制 |
| **ZeroClaw** | 成本强制模式不生效（#12477），按会话的运行成本（#12353），上下文窗口假设导致的 tokens 浪费（#12014） |

**跨项目信号**：Token 和成本管理正在成为第一优先级特性。随着 Agent 运行更长会话，**以成本为货币的模型**（按会话、按用户、按任务设置预算）将成为平台级别的必需能力。

### 4.3 多用户与工作空间隔离

| 项目 | 具体需求 |
|---|---|
| **Hermes Agent** | 独立配置文件的多用户 Gateway（#197297） |
| **QwenPaw** | 企业/家庭部署的多用户支持（#8751） |
| **OpenClaw** | Profile-route subagent 工具集泄漏（#147720），路径作用域文件访问（#92424） |
| **ZeroClaw** | 有限委托中的工具级审批（#11138），向工具执行层传递用户身份（#12441） |

**跨项目信号**：五个项目都在独立地处理用户/Agent 隔离问题。各项目方案不同（Hermes 用 profiles，OpenClaw 用 routes，ZeroClaw 用有限委托），但底层需求是普适的。

### 4.4 多 Agent 协调

| 项目 | 具体需求 |
|---|---|
| **OpenClaw** | 群组对话中的选择性 Agent 参与（#159478），CLI 后端 subagent 工具执行（#121661） |
| **Hermes Agent** | A2A 1.0 协议支持（accept-then-poll 模式）（#141947） |
| **IronClaw** | 带成本传播的 Subagent 编排 |
| **ZeroClaw** | 带工具级审批的有限委托（#11138） |

**跨项目信号**：Agent 间通信尚处萌芽期，但已在各项目中浮现。Hermes Agent 对 A2A 1.0 的采用有望成为事实标准。

### 4.5 本地 / 自托管 LLM 支持

| 项目 | 具体需求 |
|---|---|
| **IronClaw** | 注册表实例间的 Provider 故障转移（Ollama → Ollama）（#8173），慢速本地 LLM 的可配置空闲超时（#8172） |
| **QwenPaw** | 自定义 Provider 的上下文窗口处理 |
| **ZeroClaw** | OpenAI 兼容 Provider 的默认参数（#12014），流式空闲超时调优（#10884） |
| **OpenClaw** | 平台特定运行时要求（macOS gateway、Windows schtasks） |

**跨项目信号**：随着用户追求隐私保护、成本控制和离线运行能力，自托管部署正在增长。所有项目都需要更好地处理本地 LLM 延迟波动性。

---

## 5. 差异化分析

| 项目 | 核心聚焦 | 目标用户 | 架构模式 | 核心差异化 |
|---|---|---|---|---|
| **OpenClaw** | Gateway 可靠性、Agent 记忆、Skill 系统 | 开发者、进阶用户、团队 | 统一 Gateway 进程，插件化 | 生态最成熟，插件模型最完善 |
| **Hermes Agent** | 云端可移植性、桌面端 UX、多渠道 | 消费级和专业用户 | 每 profile 多路复用 gateway | 最佳桌面体验，云端迁移工具链 |
| **IronClaw** | 成本控制、Provider 编排、本地 LLM | 成本敏感和隐私优先的运维者 | 轻量级 Agent，带预算层级 | 唯一的成本即货币模型，层级化预算 |
| **QwenPaw** | 多渠道（微信、飞书、Matrix、Telegram）、国际化 | 中国市场和エンタープライズ用户 | 渠道独立进程，插件独立分发 | 最深的渠道集成，本地化支持 |
| **ZeroClaw** | Rust 原生可靠性、凭证管理、V5 schema | 企业 DevOps、安全敏感团队 | 模块化 Rust crates，领域类型化架构 | 最强的类型安全，云端密钥库集成，原生 SSH broker |

### 架构分化

- **OpenClaw 与 Hermes Agent** 在统一 gateway 设计上趋同，但在迁移策略上分化（OpenClaw 近期整合 vs. Hermes 的 v0.23.x 迁移仍在进行中）
- **ZeroClaw 的** Rust 优先方案（SSH broker 替代 Python 依赖）面向与 Python 同类项目完全不同的部署环境
- **QwenPaw 的** 渠道独立进程模型以网关简洁性换取渠道隔离，更能抵抗单一渠道故障，但管理成本更高
- **IronClaw 的** Agent 中心化设计（预算从用户 → 项目 → 任务 → 线程的传播层级）在所有同类项目中架构上独树一帜，将成本作为第一优先级原语

---

## 6. 社区势能与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 |
|---|---|---|
| **快速迭代** | OpenClaw、ZeroClaw | >50 次更新/天，庞大贡献者群体，高 Bug 量，频繁回归，活跃架构重构 |
| **规范化开发** | Hermes Agent、QwenPaw | ~15–50 次更新/天，规律发布节奏，Bug 队列可控，特性驱动开发 |
| **专注开发** | IronClaw | <5 次更新/天，小规模贡献者，高影响力但推进缓慢，被依赖项阻塞 |

### 哪些项目正在趋于稳定？

- **Hermes Agent** 看起来最接近稳定。canary 发布周期、今日 16 个 PR 合并、Bug 量下降（仅中优先级的 open issues）表明其已步入成熟期。
- **QwenPaw** 处于 v2.3.0 后稳定期，正在处理升级迁移 Bug 和渠道插件回归。预期在 1–2 个发布周期内稳定。

### 哪些项目正在快速迭代？

- **OpenClaw** 处于活跃的回归修复模式，导火索是 2026.9.6 的 gateway 阻塞回归。高活跃度反映的是危机响应，而非新特性开发。
- **ZeroClaw** 正在进行 V5 重构中期。11 个 PR 的堆叠架构意味着项目在 V5 schema 落地前处于架构不稳定状态。高 PR 量是重构开销，而非特性吞吐量。

### 哪些项目在增长？

- **QwenPaw** 呈现最健康的增长轨迹：新贡献者提交 PR（Olostep-devs、xiaoka76、AdityaxDeore），渠道生态持续扩展，国际社区增长（意大利语本地化请求）。
- **Hermes Agent** 通过差异化特性（云端迁移、备份与迁移 UI）实现健康增长，吸引了新的用户群体。

---

## 7. 趋势信号

以下趋势从跨项目社区反馈中提炼，对 AI Agent 开发者具有战略价值：

### 7.1 多租户是下一个前沿

每个项目都在独立地构建用户/Agent 隔离。缺乏统一的模型意味着在任何单一平台上构建的开发者都会继承其专有的隔离语义。**机遇**：一个共享的隔离 API（profile/route/workspace 抽象层）将加速整个生态的演进。

### 7.2 成本管理将成为第一优先级原语

IronClaw 基于成本的预算设计以及 OpenClaw 的缓存扩展挑战（21.3M tokens）表明，Token 预算管理不能继续作为配置层面的事后考虑。随着 Agent 运行更长、服务更多用户，**以成本为货币的模型**（按会话、按用户、按任务设置预算）将成为平台级别的必需能力。

### 7.3 本地 LLM 部署正在增长

五个项目中有四个存在与本地 LLM 支持相关的活跃 Issue（超时配置、上下文窗口发现、Provider 故障转移）。这反映了用户对**隐私保护和离线可用 Agent**的需求。开发者应优先考虑延迟感知的架构，而非假设云端 LLM 的响应能力。

### 7.4 Agent 互操作性处于萌芽但不可避免

Hermes Agent 对 A2A 1.0 的采用、OpenClaw 的群组对话参与以及 ZeroClaw 的有限委托都代表了向 **Agent 间通信标准** 迈出的早期步伐。未来 6–12 个月很可能催生一个事实上的互操作协议；Hermes Agent 的 A2A 工作具有先发优势。

### 7.5 插件架构之争尚未终结

OpenClaw 的插件加载卡顿（#160959、#174681）和 QwenPaw 的 v2.3.0 迁移失败（#8684）表明，插件系统在架构层面仍不成熟。整个生态需要一个**共享的插件生命周期模型**，覆盖加载、迁移、版本管理和安全边界。

### 7.6 Rust 正在渗透

ZeroClaw 的原生 Rust SSH broker（#12438）和共享 HTTP 传输层（#12455）代表了一种趋势，即用 Rust 处理性能关键子系统。这并不预示整个生态的 Python→Rust 大迁移，但**在传输层、解析层和凭证管理层使用 Rust 组件**可能在 Agent 平台中变得常见。

### 7.7 渠道多元化正在加速

QwenPaw 的深度覆盖（微信、飞书、Matrix、Telegram）、Hermes Agent 的平台覆盖（Desktop、iOS、CLI、API）和 ZeroClaw 的 10+ 渠道集成表明，**渠道对等能力是一个竞争差异化因素**。新进入者或专注型项目可以通过将单一渠道做到极致来捕获价值。

---

*本报告综合了 OpenClaw、Helmes Agent、IronClaw、QwenPaw 和 ZeroClaw GitHub 仓库截至 2026-11-16 的 24 小时数据。活跃度指标、Issue 严重等级和 PR 状态反映报告生成时的快照数据。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this technical report from English into Simplified Chinese. Let me carefully translate it following all the rules:

1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, links, numbers, dates, code, etc. verbatim
4. Keep project names, repo slugs, usernames, version tags, file paths, config identifiers in original form
5. Issue/PR references stay as-is
6. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate section by section:

Title: Hermes Agent 项目速览 — 2026年11月16日

Section 1: Today's Overview
Section 2: Releases
Section 3: Project Progress
Section 4: Community Hot Topics
Section 5: Bugs & Stability
Section 6: Feature Requests & Roadmap Signals
Section 7: User Feedback Summary
Section 8: Backlog Watch
Summary Table
Footer

Let me do this carefully, making sure to:
- Use Chinese punctuation (，。：；？！""『』)
- Maintain proper Chinese phrasing
- Keep all technical terms, URLs, code, etc. in original form
- Preserve table alignment
- Keep markdown formatting (headings, lists, etc.)
</think>


# Hermes Agent 项目速览 — 2026年11月16日

## 1. 今日概览

Hermes Agent 保持着极高的开发活跃度，过去 24 小时内共有 **50 个 issue 和 50 个 PR 产生更新**，各组件的开发工作全面铺开。项目已发布 canary 版本 **v0.23.1+canary.20261115T064406Z**，其中 16 个 PR 已合并或关闭，9 个 issue 已解决。今日的重点工作集中在**网关稳定性**（统一网关合并后的遗留问题）、**Desktop 应用可靠性**（流式渲染、会话恢复）以及**安全加固**（委托子代理的工具集隔离、生命周期的 guard 绕过）等方向。社区围绕统一网关迁移（#143547，73 条评论）表现出强烈关注，多项关于会话管理和多配置文件的特性提案也正在积攒人气。

---

## 2. 版本发布

### v0.23.1+canary.20261115T064406Z（2026年11月15日）

**状态：** Apple Silicon macOS 版 Canary 构建（提供 DMG 下载）

该 canary 版本延续了 v0.23.x 的稳定迭代。Release notes 中未提及破坏性变更或迁移注意事项。使用 canary 更新通道的用户将陆续收到以下问题的修复：

- Desktop 会话恢复相关修复
- Telegram 私信话题可见性改善
- 生命周期 guard 绕过安全补丁
- Kanban 提供商故障与配额不足的区分逻辑

> **链接：** [Release v0.23.1+canary.20261115T064406Z](https://github.com/NousResearch/hermes-agent/releases)

---

## 3. 项目进展

### 今日合并/关闭的 PR（16 个）

| PR | 作者 | 描述 | 优先级 |
|---|---|---|---|
| [#154868](https://github.com/NousResearch/hermes-agent/pull/154868) | chanyang721 | fix(kanban): 区分提供商故障与配额不足 | **P2** — Kanban worker 现可正确报告故障类型，不再将服务宕机误报为配额问题 |
| [#154853](https://github.com/NousResearch/hermes-agent/pull/154853) | chanyang721 | fix(gateway): 拒绝的 bot 消息不再延长 chain 冷却时间 | **P2** — 避免因反复拒绝导致 chain 无限延续 |
| [#154817](https://github.com/NousResearch/hermes-agent/pull/154817) | SHL0MS | feat(desktop): 迁移至 Hermes Cloud | 新增云端迁移工作流的插件包 |
| [#154816](https://github.com/NousResearch/hermes-agent/pull/154816) | SHL0MS | feat: 将配置迁移至 Hermes Cloud，支持回退 | 实现 `hermes move` 命令及撤销能力 |
| [#156114](https://github.com/NousResearch/hermes-agent/pull/156114) | teknium1 | Desktop: 备份 agent，或以本地版本替换云端 agent | **设置 → 备份与传输** UI 集成 |
| [#156242](https://github.com/NousResearch/hermes-agent/pull/156242) | teknium1 | hermes move: 将 agent 携带至另一个 Hermes 实例 | 支持选择性替换或追加的导入导出 |
| [#98784](https://github.com/NousResearch/hermes-agent/pull/98784) | Navlem | test: 选定 venv 缺失套件依赖时报警告 | 提升 CI 可靠性 |
| [#152148](https://github.com/NousResearch/hermes-agent/pull/152148) | romanzdk | Telegram 私信话题恢复修复（已关闭） | 解决话题不可见/无法打开的问题 |
| [#144547](https://github.com/NousResearch/hermes-agent/pull/144547) | davidsylau | 安全: 修复生命周期 guard 绕过（已关闭） | 堵住 `hermes update` 规避 guard 的漏洞 |
| [#84411](https://github.com/NousResearch/hermes-agent/pull/84411) | NealZhouPanda | Desktop background_review 模型锁定项不可见（已关闭） | 修复设置项被隐藏的问题 |
| [#140704](https://github.com/NousResearch/hermes-agent/pull/140704) | lucasfdale | Heredoc body 命令层级绕过修复（已关闭） | 强化 shell 审批 guard 的安全性 |
| [#76883](https://github.com/NousResearch/hermes-agent/pull/76883) | NealZhouPanda | 记忆变更可逆性（已关闭） | 记忆工具改为归档而非删除的语义 |
| [#17940](https://github.com/NousResearch/hermes-agent/pull/17940) | CNSeniorious000 | 自定义 provider 支持 declares supports_vision（已关闭） | 允许本地/自定义 provider 模型启用视觉能力 |
| [#142354](https://github.com/NousResearch/hermes-agent/pull/142354) | NealZhouPanda | 朗读首句截断修复（已关闭） | 提升 Desktop TTS 可靠性 |
| [#156236](https://github.com/NousResearch/hermes-agent/pull/156236) | jocelynlopez | Mistral Large 4 流式输出崩溃修复（已关闭） | 处理 list 类型的 delta.content |
| [#142456](https://github.com/NousResearch/hermes-agent/pull/142456) | jtstothard | fix(cli): chat -q 继承自动化会话 source 的问题 | 修复会话标签回归 |
| [#156077](https://github.com/NousResearch/hermes-agent/pull/156077) | — | **P2**: 隔离降级模型的解析逻辑，防止主模型泄露 | **P2** — 活跃更新中 |
| [#152402](https://github.com/NousResearch/hermes-agent/pull/152402) | — | **P2**: 修复 dashboard 面板阻塞网关聊天恢复 | **P2** — 活跃更新中 |
| [#141947](https://github.com/NousResearch/hermes-agent/pull/141947) | — | A2A 1.0 accept-then-poll 工作流，实现 agent 间通信 | 活跃 PR |
| [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) | — | 重新设计 agent 工作区，保留经典模式恢复选项 | 活跃 PR |
| [#156330](https://github.com/NousResearch/hermes-agent/pull/156330) | — | Desktop 备份与传输 UI（设置集成） | 活跃 PR |
| [#156332](https://github.com/NousResearch/hermes-agent/pull/156332) | — | MiniMax `image-01` 图像生成后端 | 活跃 PR |

---

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

**#143547 — 统一网关合并后的遗留问题** 🔥
- **发起人：** dokterdok | **评论数：** 73 | **优先级：** P2
- **概述：** 统一网关迁移（#106742，2026年10月14日）后，CLI、TUI、Desktop、API server、编辑器、bot、cron 任务等多端现在共用一个网关进程。合并后出现的各种问题正在此 issue 下跟踪，承接 issue #134889。
- **链接：** [Issue #143547](https://github.com/NousResearch/hermes-agent/issues/143547)
- **分析：** 该 issue 的讨论热度远超其他，反映出此次架构变更的影响范围之广。社区关注点主要集中在会话隔离、状态管理以及向后兼容性等方面。

**#127621 — Desktop 重复渲染 Bug**
- **发起人：** GabrielaSilang | **评论数：** 14 | **👍：** 9
- **概述：** Desktop 应用中有时会出现助手回复被渲染两次的情况——同一段落以一个重复块的形式连续出现两次。已排除是模型重复问题。
- **链接：** [Issue #127621](https://github.com/NousResearch/hermes-agent/issues/127621)
- **分析：** 这是影响用户体验的视觉问题，且 👍 数较多（9）。大概率是流式传输或渲染协调环节的竞态条件导致的。

**#122928 — macOS 环境切换后 PYTHONPATH 泄漏**
- **发起人：** 01startsales | **评论数：** 11
- **概述：** 在 macOS 上切换运行环境后，长期运行的后端进程会通过 `PYTHONPATH` 将已废弃的 runtime venv 泄漏到终端子进程。
- **链接：** [Issue #122928](https://github.com/NousResearch/hermes-agent/issues/122928)
- **分析：** 这是影响 macOS 开发者工作流程的环境隔离回归问题。

**#143150 — Desktop 会话恢复时出现 storage unavailable**
- **发起人：** Relogys | **评论数：** 9
- **概述：** 从按配置独立运行的网关迁移到多路复用模式后，Desktop 无法恢复之前的聊天记录，提示 `storage_unavailable` 错误，原因是 state_meta 中存在未迁移的路由。
- **链接：** [Issue #143150](https://github.com/NousResearch/hermes-agent/issues/143150)
- **分析：** 这是迁移路径中的痛点，影响升级至新网关架构的用户。

### 👍 较多的功能提案

| Issue | 功能 | 👍 | 链接 |
|---|---|---|---|
| #138147 | CLI/TUI 会话状态可见性的 OSC 7501 Program Status Protocol | 4 | [链接](https://github.com/NousResearch/hermes-agent/issues/138147) |
| #92424 | 配置级别的路径范围文件访问（文件夹限制） | 1 | [链接](https://github.com/NousResearch/hermes-agent/issues/92424) |
| #91505 | 最小权限子代理提权 + 确定性测试工具链 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/91505) |

---

## 5. Bug 与稳定性

### 活跃的 P1/P2 Bug（按优先级和时效排序）

| # | Bug | 优先级 | 状态 | 是否有修复 PR | 链接 |
|---|---|---|---|---|---|
| 1 | **MiniMax thinking budget_tokens 被忽略**（reasoning_effort 形同虚设） | P2 | Open | 无 | [#143065](https://github.com/NousResearch/hermes-agent/issues/143065) |
| 2 | **Desktop 重复响应渲染** | P2 | Open | 无 | [#127621](https://github.com/NousResearch/hermes-agent/issues/127621) |
| 3 | **网关迁移后会话恢复时 storage unavailable** | P2 | Open | 无 | [#143150](https://github.com/NousResearch/hermes-agent/issues/143150) |
| 4 | **配置路由子代理继承父级工具集**（安全风险） | P3 | Open | 无 | [#147720](https://github.com/NousResearch/hermes-agent/issues/147720) |
| 5 | **macOS 环境切换后 PYTHONPATH 泄漏** | P2 | Open | 无 | [#122928](https://github.com/NousResearch/hermes-agent/issues/122928) |
| 6 | **Desktop 压缩后对话记录行序错乱** | P2 | Open | 无 | [#139942](https://github.com/NousResearch/hermes-agent/issues/139942) |
| 7 | **Bot Mode 首条私信静默 fork 聊天** | P2 | Open | 无 | [#155955](https://github.com/NousResearch/hermes-agent/issues/155955) |
| 8 | **Windows 环境下带空格的 MEDIA 路径被发送两次** | P2 | Open | 无 | [#148565](https://github.com/NousResearch/hermes-agent/issues/148565) |
| 9 | **Desktop「保存图片」对 blob: 来源失败** | P2 | Open | 无 | [#156032](https://github.com/NousResearch/hermes-agent/issues/156032) |
| 10 | **xAI TTS 未按设备采样率重采样** | P2 | Open | 无 | [#154516](https://github.com/NousResearch/hermes-agent/issues/154516) |
| 11 | **Cron 同步将规范触发时间记为失败** | P2 | Open | 无 | [#156323](https://github.com/NousResearch/hermes-agent/issues/156323) |
| 12 | **Smart approval max_tokens=16 导致推理模型异常** | P2 | Open | 无 | [#68263](https://github.com/NousResearch/hermes-agent/issues/68263) |

### 安全问题

- **#144547（已关闭）** — 生命周期 guard 被 `hermes update` 绕过；已在 PR #144547 中修复
- **#147720（开放）** — 配置路由子代理忽略目标配置的 toolset；低信任配置仍可执行 shell 命令
- **#140704（已关闭）** — Heredoc body 绕过命令层级 guard；已在 PR #140704 中修复

### 回归问题

- **v0.22.1 回归：** `chat -q` 从自动化上下文继承了 `HERMES_SESSION_SOURCE=kanban`（#142456）— 修复 PR 已提交
- **v0.19.0 回归：** Mistral Large 4 list 类型的流式 delta 导致崩溃 — 已在 #156236 中关闭

---

## 6. 功能提案与路线图信号

### 高关注度的功能提案

| 功能 | 优先级 | 👍 | 信号 | 链接 |
|---|---|---|---|---|
| **CLI/TUI 会话状态可见性的 OSC 7501 Program Status Protocol** | P3 | 4 | 多会话用户需要一目了然的状态显示 | [#138147](https://github.com/NousResearch/hermes-agent/issues/138147) |
| **配置级别的路径范围文件访问**（文件夹限制） | P3 | 1 | 多配置场景下低信任助手的隔离需求 | [#92424](https://github.com/NousResearch/hermes-agent/issues/92424) |
| **最小权限子代理提权**，附带作用域审批 token | P3 | 0 | 安全加固方向；参考 ultraworkers/claw-code | [#91505](https://github.com/NousResearch/hermes-agent/issues/91505) |
| **A2A 1.0 协议支持**（accept-then-poll + 临时重试） | P3 | — | 活跃 PR #141947；预示 agent 互操作路线图 | [#141947](https://github.com/NousResearch/hermes-agent/pull/141947) |
| **Kanban CLI 和 agent 工具中的任务级推理控制** | P3 | 0 | Kanban 已支持但 CLI 未暴露 | [#105339](https://github.com/NousResearch/hermes-agent/issues/105339) |
| **记忆变更可逆性**（归档而非删除） | P3 | 0 | PR #76883 已关闭；有望在近期版本落地 | [#76883](https://github.com/NousResearch/hermes-agent/issues/76883) |
| **MiniMax image-01 图像生成后端** | P3 | — | 活跃 PR #156332 | [#156332](https://github.com/NousResearch/hermes-agent/pull/156332) |
| **Desktop 重新设计的工作区**，保留经典恢复模式 | — | — | 活跃 PR #152168 | [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) |

**路线图预测：** 从当前活跃开发（备份与传输 UI、Hermes Cloud 迁移、A2A 协议）来看，v0.24.x 周期似乎聚焦于**多设备/云端可移植性**和 **agent 互操作性**。路径范围文件访问（#92424）与企业安全需求契合，若安全问题（#147720）得到解决，可能被优先纳入计划。

---

## 7. 用户反馈摘要

### 从 Issue 中归纳的痛点

| 主题 | 频率 | 案例 |
|---|---|---|
| **网关迁移复杂性** | 高 | 会话恢复失败（#143150）、storage_unavailable 错误、多路复用的配置处理（#130676） |
| **Desktop 稳定性问题** | 中高 | 重复渲染（#127621）、对话记录排序（#139942）、TTS 问题（#154516、#142354）、blob 协议错误（#156032） |
| **多配置隔离缺失** | 中 | 子代理工具集泄漏（#147720、#146318）、路径限制未实现（#92424） |
| **macOS 环境管理** | 中 | PYTHONPATH 泄漏（#122928）、运行时 venv 污染 |
| **开发者体验** | 低中 | 缓存清理提示语不清晰（#143577）、venv 依赖警告（#98784） |

### 正面信号

- **云端迁移工作流落地** — 用户需求的 agent 便携备份功能已通过 PR #154816、#154817、#156114、#156242 提供完整的导出/导入及回退能力
- **Telegram 恢复机制改善** — Issue #152148 已关闭，说明平台相关的边缘情况得到了及时处理
- **Kanban 可靠性提升** — 区分故障类型与配额不足（#154868）改善了运维可观测性

---

## 8. 待处理积压事项

### 需要维护者关注的长期未响应或停滞的 Issue

| # | Issue | 时长 | 状态 | 关注点 | 链接 |
|---|---|---|---|---|---|
| 1 | #68263 — Smart approval max_tokens=16 导致推理模型异常 | 约 4 个月 | Open | 辅助路由静默截断；暂无变通方案 | [链接](https://github.com/NousResearch/hermes-agent/issues/68263) |
| 2 | #92424 — 配置级别的路径范围文件访问 | 约 3 个月 | Open | 多配置信任隔离高价值需求；等待决策 | [链接](https://github.com/NousResearch/hermes-agent/issues/92424) |
| 3 | #91505 — 最小权限子代理提权 | 约 3 个月 | Open | 安全提案；需要明确态度 | [链接](https://github.com/NousResearch/hermes-agent/issues/91505) |
| 4 | #143065 — MiniMax thinking budget_tokens 被忽略 | 约 1 个月 | Open | 影响 MiniMax Anthropic 端点用户；已知参数形同虚设 | [链接](https://github.com/NousResearch/hermes-agent/issues/143065) |
| 5 | #147720 — 配置路由子代理工具集泄漏 | 约 2 周 | Open | 安全风险：低信任配置可通过委托执行 shell | [链接](https://github.com/NousResearch/hermes-agent/issues/147720) |
| 6 | #105339 — Kanban 缺少推理控制 UI | 约 2 个月 | Open | 功能对等缺口；Kanban 有能力但 CLI 未暴露 | [链接](https://github.com/NousResearch/hermes-agent/issues/105339) |
| 7 | #143577 — 常见问题：cache/uv/ 占 1.0 GB 但不在清理工具范围内 | 约 3 周 | Open | 用户面对错误信息却无补救指引 | [链接](https://github.com/NousResearch/hermes-agent/issues/143577) |
| 8 | #138147 — OSC 7501 Program Status Protocol | 约 1 个月 | Open | 简单功能且有 4 个 👍；尚无维护者回应 | [链接](https://github.com/NousResearch/hermes-agent/issues/138147) |

---

## 汇总表

| 指标 | 数值 |
|---|---|
| 活跃 Issue（24h） | 50 |
| 活跃 PR（24h） | 50 |
| 合并/关闭的 PR | 16 |
| 关闭的 Issue | 9 |
| 新版本 | v0.23.1+canary.20261115T064406Z |
| 关键 Bug（P1） | 0 个活跃 |
| 高优先级 Bug（P2） | 12 个活跃 |
| 安全问题 | 2 个开放，2 个已关闭 |
| 开放的功能 PR | 8+ |
| 讨论最多的 Issue | #143547（73 条评论 — 统一网关） |
| 👍 最多的开放 Issue | #127621（9 👍 — Desktop 重复渲染） |

---

*本速览基于 2026-11-16 的 Hermes Agent 项目数据生成。所有链接均指向 GitHub 上的 NousResearch/hermes-agent 仓库。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me go through it carefully and translate while following all the rules specified:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title**: IronClaw Project Digest — 2026-11-16
IronClaw 项目摘要 — 2026-11-16

**Section 1: Today's Overview**
"steady maintenance activity" - 稳定的维护活动
"open status" - 开放状态
"development rather than deployment focus" - 聚焦于开发而非部署
"infrastructure improvements" - 基础设施改进
"configurability gaps" - 配置灵活性缺口
"long-running" - 长期的/长期悬而未决的
"sprint" - 冲刺迭代/本轮开发周期

Let me translate the full document now:

---

**Section 1: 今日概览**

IronClaw 在 2026 年 11 月 16 日显示出稳定的维护活动，过去 24 小时内有 3 个 issue 和 1 个 pull request 更新——所有内容均保持开放状态。没有发布新版本，表明当前重点在开发而非部署。项目当前冲刺迭代似乎以基础设施改进为核心：一个价格模型修正 PR 解决了 LLM 成本计算的准确性问题，同时两个来自社区的新 issue 针对本地 LLM 部署的供应商故障转移和空闲超时处理方面的配置灵活性提出了需求。

The cost-based budgeting enhancement (#2843) received continued attention, signaling progress on this high-impact architectural change.

---

**Section 2: Releases**

**今日无新版本发布。** 项目的最后一个稳定版本仍为 1.4.1（在托管预发环境 QA bug 报告 #8172 中提及）。

---

**Section 3: 项目进展**

| 类型 | 数量 | 状态 |
|------|-------|--------|
| Issue 更新 | 3 | 全部开放/活跃 |
| Pull Request 更新 | 1 | 开放（未合并） |
| 合并/部署 | 0 | — |

**活跃 PR：**
- **#8171** — `fix(common): price models from the llm-prices table` — 作者：Mattbusel — 修正了 GPT-5.5、GPT-5.2-pro、Opus 4.5/4.6 及 Haiku 4.5 等多个模型的过时定价。值得注意的是，此修正是 issue #2843 中 USD 预算工作的依赖项，成为成本预算功能的阻塞项。

---

**Section 4: 社区热点话题**

### 最活跃的讨论

| Issue/PR | 标题 | 作者 | 评论数 | 点赞数 | 优先级信号 |
|----------|-------|--------|----------|-----------|-----------------|
| #2843 | 基于成本的预算：用 USD 预算替代迭代次数/时间上限 | ilblackdragon | 1 | 0 | **高**（风险：高） |

**分析：** Issue #2843 代表近期历史上最重要的架构讨论。

这个 2026 年 4 月提出的方案建议用级联的 USD 预算系统替代当前硬上限（50 次迭代、5 分钟 Python VM 超时、500 次工作线程迭代），在用户→项目→任务→线程→子线程的层级中实现。这是资源控制和计费方式的根本性变革。Issue 标记为高风险且影响多个领域（agent、db、config），表明需要大量规划工作。PR #8171 对准确定价数据的依赖关系显示社区贡献的修复与核心架构工作之间的相互关联。

---

### 新提出的社区关注点

- **#8173** — 注册表供应商故障转移限制：`NEARAI_FALLBACK_MODEL` 目前仅对 NEAR AI 后端有效；使用 Ollama 等注册表供应商时，回退路径错误地通过 `create_llm_provider_with_config()` 路由，该函数始终构造 NearAi 供应商。这表明多供应商弹性架构存在缺口。

- **#8172** — 本地 LLM 空闲超时不

可配置：无法配置 `PRIMARY_MODEL_CALL_IDLE_TIMEOUT`，导致在开发者机器上运行缓慢的本地 LLM 时出现问题。这对自托管部署造成了障碍。

---

## 5. 缺陷与稳定性

| Issue | 严重性 | 领域 | 状态 | 修复 PR？ |
|-------|----------|------|--------|---------|
| #8172 | 中等 | Agent 循环 / 模型调用空闲看门狗 | 开放 | 无 |

**缺陷概要：**
- **#8172（QA 缺陷）：** `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 被硬编码，导致无法运行慢速本地 LLM（如开发者硬件上的 Ollama）而不触发误报看门狗超时。这是一个自托管开发工作流的回归风险。环境：托管预发环境（crab shack），版本 1.4.1。

**稳定性说明：**
- 过去 24 小时内无崩溃或回归报告。
- 价格模型不准确（#8171）可能导致计费/支出差异——视为中等严重性。

---

## 6. 功能需求与路线图信号

### 活跃功能需求

| Issue | 标题 | 范围 | 优先级指标 |
|-------|-------|-------|---------------------|
| #2843 | 基于成本的 USD 级联预算 | agent、db、config | 高风险、多范围、架构级 |
| #8173 | 注册表供应商故障转移支持 | llm、providers | 新增、社区反馈缺口 |
| #8172 | 本地 LLM 的可配置空闲超时 | agent、config | QA 验证、阻碍本地开发 |

### 路线图预测

基于当前活动模式，下一版本可能解决：

1. **价格模型修正**（#8171）——低风险、高价值对计费准确性；可能近期合并。
2. **空闲超时可配置性**（#8172）——简单的配置变更；可能针对 1.4.2 或 1.5.0。
3. **基于成本的预算**（#2843）——主要工作；依赖 #8171 合并；鉴于多范围需求，可能是 1.6+ 的功能。
4. **多注册表故障转移**（#8173）——需要供应商初始化架构审查；时间线不确定。

---

## 7. 用户反馈摘要

### 已识别的痛点

| 主题 | 证据 | 影响 |
|-------|----------|--------|
| **本地 LLM 部署摩擦** | #8172：硬编码超时导致开发者在 Ollama 上出现问题 | 阻碍自托管开发 |
| **多供应商弹性缺口** | #8173：回退机制仅适用于 NEAR AI 后端 | 限制生产环境可靠性 |
| **定价准确性担忧** | #8171：多个模型的 USD 价格有误 | 计费/支出可见性问题 |

### 代表性用例

- **自托管/本地开发**：用户希望使用本地 Ollama 实例运行 IronClaw，以保护隐私、节省成本或实现离线访问。
- **生产环境多供应商设置**：用户需要在等效供应商之间进行故障转移（如服务器 A 上的 Ollama → 服务器 B 上的 Ollama）。
- **成本管理**：持续的成本预算工作表明用户需要精细的支出可见性和控制。

### 满意度信号

- 社区活跃参与（24 小时内 3 个新 issue 报告）表明用户基础参与度高。
- 自愿提交的价格模型修正表明上游参与健康。

---

## 8. 待办事项关注

| Issue/PR | 年龄 | 作者 | 优先级 | 状态 | 需要维护者行动 |
|----------|-----|--------|----------|--------|--------------------------|
| #2843 | 约 7 个月 | ilblackdragon | 高 | 开放 | **需要设计评审** — 需要对预算层级进行架构决策；阻塞于 PR #8171 |
| #8171 | 1 天 | Mattbusel | 中等 | 开放 | **需要代码评审** — #2843 的依赖项；应优先处理 |

### 长期未回复事项

- **#2843** 自 2026 年 4 月开放以来仅有 1 条评论。尽管其重要性很高（高风险、多范围），但缺乏维护者参与细节。社区贡献者在等待对拟议设计的反馈。
- **#8173** 和 **#8172** 是新提出的（1 天），但缺乏任何维护者确认——早期参与将提升贡献者信心。

### 维护者建议

1. **确认 #2843** — 即使是"我们正在审查"的评论也能表明这项工作已在关注范围内。
2. **评审 #8171** — 快速处理此 PR，因为它解锁了基于成本的预算功能。
3. **分类 #8173 和 #8172** — 标记并分配所有权以防止 issue 失效。

---

*摘要生成日期：2026-11-16 | 数据来源：GitHub nearai/ironclaw*
</think>


# IronClaw 项目摘要 — 2026-11-16

## 1. 今日概览

IronClaw 在 2026 年 11 月 16 日显示出稳定的维护活动，过去 24 小时内有 3 个 issue 和 1 个 pull request 更新——所有内容均保持开放状态。没有发布新版本，表明当前重点在开发而非部署。项目当前冲刺迭代似乎以基础设施改进为核心：一个价格模型修正 PR 解决了 LLM 成本计算的准确性问题，同时两个来自社区的新 issue 针对本地 LLM 部署的供应商故障转移和空闲超时处理方面的配置灵活性提出了需求。长期悬而未决的成本预算增强功能 (#2843) 也获得了更新，显示出这一高影响力架构变更仍在持续推进。

---

## 2. Releases

**今日无新版本发布。** 项目的最后一个稳定版本仍为 1.4.1（在托管预发环境 QA bug 报告 #8172 中提及）。

---

## 3. 项目进展

| 类型 | 数量 | 状态 |
|------|-------|--------|
| Issue 更新 | 3 | 全部开放/活跃 |
| Pull Request 更新 | 1 | 开放（未合并） |
| 合并/部署 | 0 | — |

**活跃 PR：**
- **[#8171](https://github.com/nearai/ironclaw/pull/8171)** — `fix(common): price models from the llm-prices table` — 作者：Mattbusel — 修正了 GPT-5.5、GPT-5.2-pro、Opus 4.5/4.6 及 Haiku 4.5 等多个模型的过时定价。值得注意的是，此修正是 issue #2843 中 USD 预算工作的依赖项，成为成本预算功能的阻塞项。

---

## 4. 社区热点话题

### 最活跃的讨论

| Issue/PR | 标题 | 作者 | 评论数 | 点赞数 | 优先级信号 |
|----------|-------|--------|----------|-----------|-----------------|
| [#2843](https://github.com/nearai/ironclaw/issues/2843) | 基于成本的预算：用 USD 预算替代迭代次数/时间上限 | ilblackdragon | 1 | 0 | **高**（风险：高） |

**分析：** Issue #2843 代表近期历史上最重要的架构讨论。作者于 2026 年 4 月提出，提议用级联的 USD 预算系统替代当前的硬性上限（50 次迭代、5 分钟 Python VM 超时、500 次工作线程迭代），覆盖以下层级：**user → project → mission → thread → sub-thread**。这是对资源消耗控制和计费方式的根本性变革。该 issue 被标记为高风险且影响多个领域（agent、db、config），表明需要大量的规划工作。PR #8171 对准确定价数据的依赖关系显示社区贡献的修复与核心架构工作之间的相互依赖。

### 新提出的社区关注点

- **[#8173](https://github.com/nearai/ironclaw/issues/8173)** — 注册表供应商故障转移限制：目前，`NEARAI_FALLBACK_MODEL` 仅对 NEAR AI 后端有效；当使用 Ollama 等注册表供应商时，回退路径错误地通过 `create_llm_provider_with_config()` 路由，该函数始终构造 NearAi 供应商。这表明多供应商弹性架构存在缺口。

- **[#8172](https://github.com/nearai/ironclaw/issues/8172)** — 本地 LLM 空闲超时不具备可配置性：`PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 无法配置，导致在开发者机器上运行慢速本地 LLM 时出现问题。这对自托管部署构成了摩擦点。

---

## 5. 缺陷与稳定性

| Issue | 严重性 | 领域 | 状态 | 修复 PR？ |
|-------|----------|------|--------|---------|
| [#8172](https://github.com/nearai/ironclaw/issues/8172) | 中等 | Agent 循环 / 模型调用空闲看门狗 | 开放 | 无 |

**缺陷概要：**
- **#8172（QA 缺陷）：** `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 被硬编码，导致无法运行慢速本地 LLM（如开发者硬件上的 Ollama）而不触发误报看门狗超时。这是一个**本地开发工作流的回归风险**。环境：hosted-staging（crab shack），版本 1.4.1。

**稳定性说明：**
- 过去 24 小时内无崩溃或回归报告。
- 价格模型不准确（#8171）可能导致计费/支出差异——视为中等严重性。

---

## 6. 功能需求与路线图信号

### 活跃功能需求

| Issue | 标题 | 范围 | 优先级指标 |
|-------|-------|-------|---------------------|
| [#2843](https://github.com/nearai/ironclaw/issues/2843) | 基于成本的 USD 级联预算 | agent、db、config | 高风险、多范围、架构级 |
| [#8173](https://github.com/nearai/ironclaw/issues/8173) | 注册表供应商故障转移支持 | llm、providers | 新增、社区反馈缺口 |
| [#8172](https://github.com/nearai/ironclaw/issues/8172) | 本地 LLM 的可配置空闲超时 | agent、config | QA 验证、阻碍本地开发 |

### 路线图预测

基于当前活动模式，下一版本可能涵盖：

1. **价格模型修正**（#8171）——低风险、高价值对计费准确性；可能近期合并。
2. **空闲超时可配置性**（#8172）——简单的配置变更；可能针对 1.4.2 或 1.5.0。
3. **基于成本的预算**（#2843）——主要工作；依赖 #8171 合并；鉴于多范围需求，可能是 1.6+ 的功能。
4. **多注册表故障转移**（#8173）——需要供应商初始化架构审查；时间线不确定。

---

## 7. 用户反馈摘要

### 已识别的痛点

| 主题 | 证据 | 影响 |
|-------|----------|--------|
| **本地 LLM 部署摩擦** | #8172：硬编码超时导致开发者在 Ollama 上出现问题 | 阻碍自托管开发 |
| **多供应商弹性缺口** | #8173：回退仅对 NEAR AI 后端有效 | 限制生产环境可靠性 |
| **定价准确性担忧** | #8171：多个模型的 USD 价格有误 | 计费/支出可见性问题 |

### 代表性用例

- **自托管/本地开发**：用户希望使用本地 Ollama 实例运行 IronClaw，以保护隐私、节省成本或实现离线访问。
- **生产环境多供应商设置**：用户需要在等效供应商之间进行故障转移（如服务器 A 上的 Ollama → 服务器 B 上的 Ollama）。
- **成本管理**：持续进行的成本预算工作表明用户需要精细的支出可见性和控制。

### 满意度信号

- 社区活跃参与（24 小时内 3 个新 issue 报告）表明用户基础参与度高。
- 自愿提交的价格模型修正表明上游参与健康。

---

## 8. 待办事项关注

| Issue/PR | 存续时间 | 作者 | 优先级 | 状态 | 需要维护者行动 |
|----------|-----|--------|----------|--------|--------------------------|
| [#2843](https://github.com/nearai/ironclaw/issues/2843) | 约 7 个月 | ilblackdragon | 高 | 开放 | **需要设计评审** — 需要对预算层级进行架构决策；阻塞于 PR #8171 |
| [#8171](https://github.com/nearai/ironclaw/pull/8171) | 1 天 | Mattbusel | 中等 | 开放 | **需要代码评审** — #2843 的依赖项；应优先处理 |

### 长期未回复事项

- **#2843** 自 2026 年 4 月开放以来仅有 1 条评论。尽管其重要性很高（高风险、多范围），但缺乏维护者参与细节。社区贡献者在等待对拟议设计的反馈。
- **#8173** 和 **#8172** 是新提出的（1 天），但缺乏任何维护者确认——早期参与将提升贡献者信心。

### 维护者建议

1. **确认 #2843** — 即使是"我们正在审查"的评论也能表明这项工作已在关注范围内。
2. **评审 #8171** — 快速处理此 PR，因为它解锁了基于成本的预算功能。
3. **分类 #8173 和 #8172** — 标记并分配所有权以防止 issue 失效。

---

*摘要生成日期：2026-11-16 | 数据来源：GitHub nearai/ironclaw*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully:

## 1. Today's Overview

QwenPaw development remains highly active with 15 issues and 15 PRs updated in the last 24 hours. The project is currently addressing stability issues from the recent v2.3.0 release, with multiple critical bugs (channel worker crashes, plugin migration failures) successfully closed today. Two PRs were merged — notably the channel plugin versioning system and the Linux HOME directory fix — indicating maintainer focus on reliability. However, 11 new/open issues were created, including several regression reports and feature requests for multi-user support and additional web search providers. Overall health appears stable but busy, with the team actively triaging v2.3.0 fallout while advancing new capabilities.

QwenPaw 今日开发活跃度依旧高涨，过去 24 小时内共有 15 个 issue 和 15 个 PR 产生更新。项目当前正着力解决近期 v2.3.0 发布后的稳定性问题，今日已成功关闭多个关键 bug（channel worker 崩溃、插件迁移失败等）。两个 PR 已被合并——分别是 channel 插件版本控制系统和 Linux HOME 目录修复——显示出维护团队对稳定性的重视。但同时有 11 个新 issue / open issue 被创建，其中包含若干回归报告，以及关于多用户支持和更多 web search provider 的功能需求。总体而言，项目状态稳定但工作饱满，团队在处理 v2.3.0 遗留问题的同时，亦在稳步推进新功能开发。

---

## 2. Releases

**No new releases today.** The most recent release remains **v2.3.0** (released 2026-11-11), which introduced official channel plugins (moving WeChat and Feishu out-of-tree), plugin marketplace, and E2EE dependency fixes. Users upgrading from earlier versions should note the migration issues documented in Issue [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684).

**今日无新版本发布。** 最新版本仍为 **v2.3.0**（发布于 2026-11-11），该版本引入了官方 channel 插件（将 WeChat 和 Feishu 移出核心仓库）、插件市场以及 E2EE 依赖修复。从早期版本升级的用户需注意 Issue [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684) 中记录的迁移问题。

---

## 3. Project Progress

### Merged/Closed PRs Today

| PR | Title | Impact |
|----|-------|--------|
| [#8699](https://github.com/agentscope-ai/QwenPaw/pull/8699) | feat(channels): add plugin updates, version guards, and official marketplace releases | **Major** — Implements automated channel plugin versioning, update actions, and marketplace metadata distribution |
| [#8692](https://github.com/agentscope-ai/QwenPaw/pull/8692) | fix(channels): preserve runtime directory context in channel workers | **High** — Fixes Linux channel worker crash (RuntimeError: Could not determine home directory) |

### Open PRs Under Active Review

| PR | Author | Size | Status | Focus |
|----|--------|------|--------|-------|
| [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) | BeiMu-new | L | Under Review | Repair CJK emphasis boundaries in chat Markdown |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | AGImentu | L | Ready for Human Review | Prevent injected context from persisting |
| [#8477](https://github.com/agentscope-ai/QwenPaw/pull/8477) | BeiMu-new | L | Under Review | Staged pool skill installation via rename (not copy) |
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | hehuang139 | XL | Open | Show built-in tool docs and parameters in Console |
| [#8741](https://github.com/agentscope-ai/QwenPaw/pull/8741) | Olostep-devs | M | Open | Add Olostep as web_search provider |
| [#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628) | AdityaxDeore | M | Open | Add model fallback metadata to chat response |
| [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) | AdityaxDeore | L | Open | Preserve enabled state on partial channel updates |
| [#8749](https://github.com/agentscope-ai/QwenPaw/pull/8749) | kidding1412 | S | Open | Keep Feishu reconnect supervisor alive after cleanup errors |
| [#8753](https://github.com/agentscope-ai/QwenPaw/pull/8753) | xiaoka76 | S | Open | Decode percent-encoded file names in Feishu uploads |
| [#8754](https://github.com/agentscope-ai/QwenPaw/pull/8754) | b84330808 | S | Open | Suppress reply-completion notification for subagent turns |
| [#8756](https://github.com/agentscope-ai/QwenPaw/pull/8756) | sdxwmlyl | S | Open | Scope WeChat credentials per agent workspace |
| [#8721](https://github.com/agentscope-ai/QwenPaw/pull/8721) | Luohh5 | XS | Open | Retry recovery before enabling plugins |
| [#8295](https://github.com/agentscope-ai/QwenPaw/pull/8295) | BeiMu-new | M | Open | Hide internal scaffolding at display boundary |

---

## 4. Community Hot Topics

### Most Active Issues (by comments)

1. **[#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361)** — **[Bug] Automatic Memory Search causes repeated memory_search calls, reply generation fails after intercept** (4 comments) — *Status: CLOSED*
   - **Underlying need**: Reliable memory search behavior; users expect protection against repeated queries without breaking response generation

2. **[#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684)** — **[Bug] Upgrade does not migrate built-in channel plugins** (2 comments) — *Status: CLOSED*
   - **Underlying need**: Seamless upgrades; users expect bundled plugin fixes to apply automatically post-upgrade

3. **[#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)** — **[Bug] Official channel plugin workers crash on Linux** (2 comments) — *Status: CLOSED (fixed in #8692)*
   - **Underlying need**: Cross-platform reliability; Linux users expect channel workers to start without environment configuration

4. **[#8751](https://github.com/agentscope-ai/QwenPaw/issues/8751)** — **[Feature] Multi-user support** (2 comments) — *Status: CLOSED*
   - **Underlying need**: Enterprise/family deployment; multiple users sharing one installation need isolated accounts and agents

5. **[#8747](https://github.com/agentscope-ai/QwenPaw/issues/8747)** — **Console sidebar missing "Checkpoints" entry** (2 comments) — *Status: OPEN*
   - **Underlying need**: Full feature parity post-upgrade; v2.3.0 upgrade broke checkpoint navigation despite API being functional

6. **[#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736)** — **[Bug] Subagent completions trigger "Reply completion" notification** (2 comments) — *Status: OPEN*
   - **Underlying need**: Clean notification UX; users don't want noise from background agent activity

### Notable Feature Request Trends

- **Web search provider expansion**: Three separate proposals for new providers (Keenable [#8758](https://github.com/agentscope-ai/QwenPaw/issues/8758), Olostep [#8740](https://github.com/agentscope-ai/QwenPaw/issues/8740), with PR [#8741](https://github.com/agentscope-ai/QwenPaw/pull/8741) open for Olostep)
- **Localization**: Italian UI locale request ([#8750](https://github.com/agentscope-ai/QwenPaw/issues/8750)) for enterprise aerospace deployment
- **Provider integration**: Native QianwenAI platform support request ([#8759](https://github.com/agentscope-ai/QwenPaw/issues/8759)) for pay-per-use and Token Plan

---

## 5. Bugs & Stability

### Critical Bugs (Regression/Severity)

| Priority | Issue | Description | Status | Fix PR |
|----------|-------|-------------|--------|--------|
| 🔴 **Critical** | [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684) | Channel plugin upgrade leaves Matrix on old source; 2.3.0 fixes never apply | CLOSED | — |
| 🔴 **Critical** | [#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682) | Linux channel workers crash at startup (missing HOME) | CLOSED | [#8692](https://github.com/agentscope-ai/QwenPaw/pull/8692) ✅ Merged |
| 🟠 **High** | [#8747](https://github.com/agentscope-ai/QwenPaw/issues/8747) | Console checkpoints navigation broken after v2.3.0 upgrade (parentId points to removed element) | OPEN | — |
| 🟠 **High** | [#8755](https://github.com/agentscope-ai/QwenPaw/issues/8755) | Shared frontend, two WeChat accounts: upgrade causes credential collision | OPEN | [#8756](https://github.com/agentscope-ai/QwenPaw/pull/8756) |
| 🟠 **High** | [#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757) | WeChat inbound polling silently dies (no logging/recovery, cursor never resets) | OPEN | — |
| 🟡 **Medium** | [#8746](https://github.com/agentscope-ai/QwenPaw/issues/8746) | Tasks submitted during background startup are silently swallowed | OPEN | — |
| 🟡 **Medium** | [#8752](https://github.com/agentscope-ai/QwenPaw/issues/8752) | Feishu uploads percent-encoded filenames for non-ASCII names | OPEN | [#8753](https://github.com/agentscope-ai/QwenPaw/pull/8753) |
| 🟡 **Medium** | [#8748](https://github.com/agentscope-ai/QwenPaw/issues/8748) | Feishu reconnect supervisor exits permanently on cleanup error | OPEN | [#8749](https://github.com/agentscope-ai/QwenPaw/pull/8749) |
| 🟡 **Medium** | [#8736](https://github.com/agentscope-ai/QwenPaw/issues/8736) | Subagent completions incorrectly trigger desktop notification | OPEN | [#8754](https://github.com/agentscope-ai/QwenPaw/pull/8754) |
| 🟢 **Low** | [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) | Memory search repeated calls block final reply generation | CLOSED | — |

**Assessment**: v2.3.0 introduced regressions primarily around channel plugins (migration, Linux support, credential scoping) and console navigation. Fix PRs exist for most critical items. WeChat polling death (#8757) is concerning as it silently loses messages with no error logging.

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests

| Request | Issue | Demand Signal | Likelihood of Near-Term Inclusion |
|---------|-------|---------------|----------------------------------|
| **Multi-user support** | [#8751](https://github.com/agentscope-ai/QwenPaw/issues/8751) | 2 comments, enterprise use case (aerospace company), already closed | 🔥 High — Critical enterprise gap |
| **Italian localization** | [#8750](https://github.com/agentscope-ai/QwenPaw/issues/8750) | 1 comment, enterprise PoC context | 🟡 Medium — Depends on i18n framework work |
| **Olostep web search provider** | [#8740](https://github.com/agentscope-ai/QwenPaw/issues/8740) | PR [#8741](https://github.com/agentscope-ai/QwenPaw/pull/8741) open, first-time contributor | 🔥 High — PR ready for review |
| **Keenable web search provider** | [#8758](https://github.com/agentscope-ai/QwenPaw/issues/8758) | 1 comment, follows existing provider pattern | 🟡 Medium — Low implementation effort |
| **QianwenAI platform preset** | [#8759](https://github.com/agentscope-ai/QwenPaw/issues/8759) | 1 comment, native ecosystem integration | 🟡 Medium — Strategic but requires vendor partnership |
| **Built-in tool documentation in Console** | [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | XL PR, long-standing request | 🔥 High — Community demand, under review |
| **Model fallback metadata in responses** | [#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628) | 1 comment, observability improvement | 🟢 Low-Medium — Nice-to-have, not urgent |

### Roadmap Signals

The volume of channel plugin bug reports (7+ issues) suggests the v2.3.0 plugin architecture is still maturing. Expect near-term work on:
- Plugin migration and update reliability
- Multi-agent/workspace isolation (credentials, data)
- Enhanced web search provider ecosystem

---

## 7. User Feedback Summary

### Pain Points

1. **Upgrade friction**: Multiple users report that upgrading to v2.3.0 breaks channel functionality ([#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684), [#8755](https://github.com/agentscope-ai/QwenPaw/issues/8755)). The move to out-of-tree plugins created migration gaps.

2. **Linux incompatibility**: Channel worker crashes on Linux ([#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682)) block server deployments — now fixed but represents a significant testing gap.

3. **Silent failures**: WeChat polling death ([#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757)) and swallowed startup tasks ([#8746](https://github.com/agentscope-ai/QwenPaw/issues/8746)) give users no indication something went wrong.

4. **Multi-user gap**: Enterprise and family users cannot share one installation with isolated agents/credentials ([#8751](https://github.com/agentscope-ai/QwenPaw/issues/8751)).

### Positive Signals

- Quick turnaround on critical bugs (Linux crash fixed same day)
- Active community contribution (first-time contributors submitting quality PRs)
- Feature request alignment with ecosystem (Olostep, Keenable providers, QianwenAI integration)

---

## 8. Backlog Watch

### Issues Needing Maintainer Attention (Open >3 days, no recent activity)

| Issue | Age | Status | Notes |
|-------|-----|--------|-------|
| [#8746](https://github.com/agentscope-ai/QwenPaw/issues/8746) | 1 day | OPEN | Background startup task swallowing — only 1 comment, needs triage |
| [#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757) | 1 day | OPEN | WeChat silent polling death — critical for production deployments |
| [#8759](https://github.com/agentscope-ai/QwenPaw/issues/8759) | <1 day | OPEN | QianwenAI platform request — may need product decision |
| [#8750](https://github.com/agentscope-ai/QwenPaw/issues/8750) | 1 day | OPEN | Italian localization — depends on i18n architecture decision |

### Long-Running PRs Needing Review

| PR | Age | Size | Status | Blockers |
|----|-----|------|--------|----------|
| [#6325](https://github.com/agentscope-ai/QwenPaw/pull/6325) | ~4 months | XL | OPEN | Tool documentation UI design decisions |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | ~3 months | L | Ready for Human Review | Needs final maintainer sign-off |
| [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) | ~5 weeks | L | Under Review | CJK Markdown edge case testing |
| [#8477](https://github.com/agentscope-ai/QwenPaw/pull/8477) | ~3 weeks | L | Under Review | Performance optimization, needs benchmark data |

**Recommendation**: Priority review for PR [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) (context injection fix) given it's been refreshed and marked ready-for-human-review.

---

*Digest generated from QwenPaw (agentscope-ai/QwenPaw) GitHub data for 2026-11-16. Data sourced from 15 updated issues and 15 updated PRs.*</think>



</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:
1. Translate the content while maintaining the exact Markdown structure
2. Keep URLs, issue numbers, code, config names, usernames as-is
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: "ZeroClaw Project Digest — 2026-11-16" → "ZeroClaw 项目日报 — 2026-11-16"

Section 1: "Today's Overview" → "今日概况"
- Translate naturally
- Keep numbers and URLs

Section 2: "Releases" → "版本发布"
- Simple section

Section 3: "Project Progress" → "项目进展"

Section 4: "Community Hot Topics" → "社区热点"

Section 5: "Bugs & Stability" → "缺陷与稳定性"

Section 6: "Feature Requests & Roadmap Signals" → "功能需求与路线图信号"

Section 7: "User Feedback Summary" → "用户反馈摘要"

Section 8: "Backlog Watch" → "积压跟踪"

Let me translate carefully, maintaining the technical register and natural Chinese expressions.
</think>


# ZeroClaw 项目日报 — 2026-11-16

## 1. 今日概况

ZeroClaw 在过去 24 小时内展现出极高的开发活跃度，29 个 issue 和 50 个 PR 均有更新，且全部保持 open 状态。项目正处于向 V5 配置布局迈进的重大架构重构阶段，贡献者 **NiuBlibing** 主导了一个包含 11 个 PR 的系列重构计划，涵盖聊天连接/超时机制分离、建立领域类型以及添加注册表编辑能力。今天未发布任何版本。Issue 队列中暴露了多个 S1 级别的 bug，阻断工作流，主要集中在提供商上下文窗口、成本强制执行以及 Claude Opus 5.5 工具上下文崩溃等问题上。Windows 平台兼容性持续成为关注焦点。

---

## 2. 版本发布

**今日无新版本发布。** 自上一跟踪版本周期以来，项目尚未发布新版本。

---

## 3. 项目进展

### PR 更新情况（50 个总计；1 个已合并/关闭）

| PR | 标题 | 状态 | 关键变更 |
|----|------|------|----------|
| [#12188](https://github.com/zeroclaw-labs/zeroclaw/pull/12188) | fix(channels): 保持工具结果信封完整性 | OPEN | 防止后续轮次跟随工具结果时出现 JSON 合并错误 |
| [#11634](https://github.com/zeroclaw-labs/zeroclaw/pull/11634) | ci(rust): 升级例行工具链至 1.100.0 | OPEN | 统一所有 CI/构建镜像中的编译器版本 |
| [#12070](https://github.com/zeroclaw-labs/zeroclaw/pull/12070) | fix(channels): 每轮技能刷新后重新应用系统提示词上限 | OPEN | 在技能变更后恢复 max_system_prompt_chars 强制执行 |

### V5 重构系列（全部 OPEN，需按依赖顺序合并）

以下 PR 代表了向 V5 配置 schema 迈进的协同架构迁移：

| PR | 范围 | 目的 |
|----|------|------|
| [#12448](https://github.com/zeroclaw-labs/zeroclaw/pull/12448) | `feat(config): 建立 V5` | 引入 schema 版本 5；冻结 V4 布局 |
| [#12454](https://github.com/zeroclaw-labs/zeroclaw/pull/12454) | `feat(config): 提供商注册表领域类型` | 连接/能力的独立类型化对象 |
| [#12457](https://github.com/zeroclaw-labs/zeroclaw/pull/12457) | `feat(config): 嵌套注册表反射` | 通过扁平化 Configurable 前缀实现 CRUD |
| [#12456](https://github.com/zeroclaw-labs/zeroclaw/pull/12456) | `refactor(providers): 分离聊天连接与超时` | 区分请求截止时间与读取空闲超时 |
| [#12446](https://github.com/zeroclaw-labs/zeroclaw/pull/12446) | `feat(api): 聊天请求构建器` | 配置无关的 `CallSampling` 和构建器 |
| [#12444](https://github.com/zeroclaw-labs/zeroclaw/pull/12444) | `refactor(providers): 集中化能力契约` | ASR/TTS、embedding、System One 归入 providers |
| [#12445](https://github.com/zeroclaw-labs/zeroclaw/pull/12445) | `refactor(parser): 共享增量响应解析` | 状态机移入共享 parser crate |
| [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) | `feat(web): 编辑规范注册表` | 支持草稿/保存比较交换的注册表编辑器 |
| [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) | `feat(zerocode): 规范提供商模型` | Zerocode 中的精确模型引用 |
| [#12455](https://github.com/zeroclaw-labs/zeroclaw/pull/12455) | `refactor(providers): 共享 HTTP 传输层` | 共享的原生 OpenAI 兼容协议 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | `feat(providers): 支持每个提供商多个模型` | 拆分为 11 个依赖 PR；保留用于 V4 布局参考 |

### 基础设施与工具

| PR | 标题 | 意义 |
|----|------|------|
| [#12438](https://github.com/zeroclaw-labs/zeroclaw/pull/12438) | `feat(ssh): 原生 Rust 任务代理` | 移除 Linux 上的 Python/tomli/cryptography 依赖 |
| [#12408](https://github.com/zeroclaw-labs/zeroclaw/pull/12408) | `feat(web): 管理作用域 HTTP 凭证` | HTTP Basic 和 API token 的密钥标签页 |
| [#12482](https://github.com/zeroclaw-labs/zeroclaw/pull/12482) | `feat(web): 在云端密钥库中配置目录凭证` | 支持 1Password Connect、Azure Key Vault、AWS Secrets Manager、GCP Secret Manager |
| [#11997](https://github.com/zeroclaw-labs/zeroclaw/pull/11997) | `feat(tools): 通过 send_via 发送文件` | 支持邮件频道附件发送 |
| [#12275](https://github.com/zeroclaw-labs/zeroclaw/pull/12275) | `feat(mcp): 暴露本地配置控制` | 用于 gateway 配置 API 的 Python stdio MCP server |
| [#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) | `feat(tools): 任务持有的 SSH 传输复用` | 每个逻辑任务独立的传输池 |

---

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

1. **[#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014)** — 自定义 OpenAI 兼容提供商未指定 `context_window` 时静默假设为 32,000 → 6 条评论
   - **根本原因**: `ModelContextWindowSource::CompatibilityFallback` 硬编码 32,000
   - **影响**: 超过假设限制后有效轮次在本地被拒绝
   - **需求**: 在未指定上下文窗口时进行优雅降级或显式报错

2. **[#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401)** — 工具上下文崩溃导致 Claude Opus 5.5 对话中断 → 5 条评论
   - **触发条件**: `keep_tool_context_turns` 窗口过期
   - **影响**: S1 级工作流阻断；几个工具调用轮次后出现 400 错误
   - **需求**: 长时间 Opus 对话中的稳定上下文管理

3. **[#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541)** — Matrix 频道会话历史范围控制 → 4 条评论
   - **请求**: 在 Matrix 中支持会话/对话范围的订阅式历史记录
   - **需求**: 超越投递锚点的会话边界控制

4. **[#11138](https://github.com/zeroclaw-labs/zeroclaw/issues/11138)** — 有限委托中的工具级审批 → 4 条评论
   - **请求**: 定义子代理是否遵循调用者的工具级审批
   - **需求**: 委托任务的细粒度安全控制

5. **[#12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373)** — 仅写的 WebUI 凭证管理 → 3 条评论
   - **请求**: 操作员专属的凭证目录，仅允许写入式创建/替换
   - **关联 PR**: [#12402](https://github.com/zeroclaw-labs/zeroclaw/pull/12402)（仅写 TLS 绑定）
   - **需求**: 多用户部署场景下的密钥卫生管理

### 新兴多 Issue 主题

| 主题 | 相关 Issue | 社区驱动者 |
|------|-----------|-----------|
| **凭证与密钥管理** | #12373, #12422, #12408, #12482, #12447 | CastelloBrancoTecnologia |
| **平台可移植性（Windows）** | #12484, #12483, #12400 | vadelma-agent, JordanTheJet |
| **成本可见性与控制** | #12353, #12477 | mov-xound-glitch, IftekharUddin |
| **SSH/原生传输** | #12438, #11869 | CastelloBrancoTecnologia |

---

## 5. 缺陷与稳定性

### S1 — 工作流阻断（4 个 Issue）

| Issue | 标题 | 严重级别 | 平台 | 是否有修复 PR |
|-------|------|----------|------|--------------|
| [#12014](https://github.com/zeroclaw-labs/zeroclaw/issues/12014) | OpenAI 兼容提供商的 context_window 假设为 32,000 | S1 | 全平台 | 无 |
| [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | keep_tool_context_turns 导致 Claude Opus 5.5 崩溃 | S1 | 全平台 | 无 |
| [#10901](https://github.com/zeroclaw-labs/zeroclaw/issues/10901) | Mattermost 新建私信时丢失首条消息 | S1 | 全平台 | 无 |
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | cost.enforcement.mode 被忽略；预算总是停止轮次 | S1 | 全平台 | 无 |

### S2 — 功能降级（12+ 个 Issue）

| Issue | 标题 | 备注 |
|-------|------|------|
| [#10884](https://github.com/zeroclaw-labs/zeroclaw/issues/10884) | 流式客户端硬编码 300s 空闲超时 | 慢首 token 请求失败；进行中 |
| [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) | OpenAI STT 忽略环境变量凭证 | 仅读取 config.api_key |
| [#12118](https://github.com/zeroclaw-labs/zeroclaw/issues/12118) | cmd.exe 从工作区解析裸命令（白名单绕过） | Windows 上 S0/S1 安全风险 |
| [#12289](https://github.com/zeroclaw-labs/zeroclaw/issues/12289) | 禁用的代理仍通过操作员聊天/RPC 运行 | 强制执行缺口 |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | resolve_peer_set 访问了被忽略的对等节点 | 对等组逻辑缺陷 |
| [#12413](https://github.com/zeroclaw-labs/zeroclaw/issues/12413) | OpenCode Go 上下文窗口发现返回无容量 | 提供商目录问题 |
| [#12412](https://github.com/zeroclaw-labs/zeroclaw/issues/12412) | OpenCode Go 使用 Zen 的模型目录 | 错误的提供商来源 |
| [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | Gateway 在 INFO 级别记录每个连接，淹没追踪日志 | 自 #11901 以来 |
| [#12390](https://github.com/zeroclaw-labs/zeroclaw/issues/12390) | Shell 工具在非零退出时返回空错误字符串 | stderr 被吞没 |
| [#12484](https://github.com/zeroclaw-labs/zeroclaw/issues/12484) | Windows 上 plugin remove() 失败（ErrorKind::NotFound 丢失） | Windows 常见故障 |
| [#12483](https://github.com/zeroclaw-labs/zeroclaw/issues/12483) | a_stopped_gateway_releases_its_port_before_its_drain_ends 在 Windows 上失败 | Windows 常见故障 |

### S3 — 次要问题

| Issue | 标题 | 备注 |
|-------|------|------|
| [#12236](https://github.com/zeroclaw-labs/zeroclaw/issues/12236) | 缓存的 HTTP 客户端跨测试运行时共享 | Mock 请求间歇性失败 |
| [#12400](https://github.com/zeroclaw-labs/zeroclaw/issues/12400) | Windows 上 Dashboard 测试失败 | Socket 缓冲区测试平台相关 |

### 稳定性观察

- **Windows 平台**：三个 Issue（#12484、#12483、#12400）代表了持续的 Windows 测试失败，表明近期工作中未解决的平台相关竞态条件或 API 差异。
- **安全**：Issue #12118 在 `ShellDialect::WindowsCmd` 下存在白名单绕过风险，工作区写入的 `git.bat` 可作为白名单中的 `git` 执行。
- **回归风险**：V5 重构系列涉及 11+ 个 PR，触及核心 provider、config 和 channel 基础设施；维护者的审核节奏将至关重要。

---

## 6. 功能需求与路线图信号

### 社区高关注度功能

| Issue | 标题 | 优先级信号 | 可能纳入下一版本？ |
|-------|------|-----------|------------------|
| [#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541) | Matrix 会话范围历史记录 | p2，已接受 | 可能 |
| [#11138](https://github.com/zeroclaw-labs/zeroclaw/issues/11138) | 有限委托中的工具级审批 | p2，已接受 | 可能 |
| [#12373](https://github.com/zeroclaw-labs/zeroclaw/issues/12373) | 仅写凭证管理 | PR #12402 进行中 | 是（草稿 PR 已存在） |
| [#12441](https://github.com/zeroclaw-labs/zeroclaw/issues/12441) | 向工具执行传递用户身份 | 新增，1 条评论 | 可能 |
| [#12353](https://github.com/zeroclaw-labs/zeroclaw/issues/12353) | 显示每个对话的运行成本 | 新增，1 条评论 | 可能 |
| [#12480](https://github.com/zeroclaw-labs/zeroclaw/issues/12480) | 默认网页搜索提供商决策 | 新增，0 条评论 | 大概 |
| [#12447](https://github.com/zeroclaw-labs/zeroclaw/issues/12447) | Wazuh 调查工具 | 新增，0 条评论 | 长期规划 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC：作用域操作员管理服务凭证 | RFC，0 条评论 | 审核中 |

### V5 配置 Schema（进行中）

NiuBlibing 的 11-PR 系列表明 V5 是下一个即将发布的主要 schema：

1. 领域类型分离（#12454）
2. 嵌套注册表反射（#12457）
3. 聊天连接/超时解耦（#12456）
4. Web 注册表编辑器（#12453）
5. 每个提供商多个模型（#9809，拆分为依赖 PR）

**迁移提示**：V4 布局将作为冻结 fixture 保留，参见 [#12448](https://github.com/zeroclaw-labs/zeroclaw/pull/12448)。

---

## 7. 用户反馈摘要

### 痛点

1. **上下文窗口假设问题** — 自定义提供商用户在模型超过硬编码的 32,000 回退值时会遇到静默拒绝，且没有明确指示配置错误。

2. **成本强制执行不透明** — 用户报告 `cost.enforcement.mode = "warn"` 未按文档描述工作；无论模式设置为何，运行时会始终在预算超支时停止轮次。

3. **Windows 兼容性问题** — Windows 上多个持续性测试失败给 Windows 用户和贡献者带来阻力；该平台被视为次要目标。

4. **凭证管理缺口** — 多用户部署缺少操作员专属的密钥目录；当前凭证暴露在配置中或需要临时解决方案。

5. **Shell 工具错误可见性** — `shell` 命令失败时 stderr 被吞没，代理收到空错误字符串，限制了问题诊断能力。

### 正面信号

- **活跃的 RFC 流程**：像 [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)（作用域服务凭证）这样的安全相关变更遵循 RFC 流程，表明治理机制成熟。
- **丰富的生态工作**：SSH 代理（#12438）、MCP server（#12275）和云端密钥库集成（#12482）表明 ZeroClaw 正在从核心代理能力扩展到运维工具领域。
- **全面的提供商支持**：V5 重构覆盖 15+ 个 provider 和 10+ 个 channel，反映了真实部署场景的多样性。

---

## 8. 积压跟踪

### 长期无响应的重要 Issue（无近期活动）

| Issue | 标题 | 存在时间 | 最后更新 | 风险等级 |
|-------|------|----------|----------|---------|
| [#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541) | Matrix 会话历史范围控制 | 约 5 个月 | 2026-11-15 | 高 |
| [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) | OpenAI STT 忽略环境变量凭证 | 约 5 个月 | 2026-11-15 | 中 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/issues/9809) | 每个提供商支持多个模型 | 约 3 个月 | 2026-11-16 | 高 |

### 需要维护者处理的 Issue

| Issue | 标题 | 阻塞项 |
|-------|------|--------|
| [#12456](https://github.com/zeroclaw-labs/zeroclaw/pull/12456) | V5 依赖链 | 需先合并以解锁 6 个下游 PR |
| [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) | Web 注册表编辑器 | 需要作者操作 + 依赖合并 |
| [#12438](https://github.com/zeroclaw-labs/zeroclaw/pull/12438) | 原生 Rust SSH 代理 | 准备就绪，等待审核 |
| [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | 成本强制模式 bug | 无修复 PR；需要分配 |

### 停滞指标

- **维护者无响应**（>14 天）：#12484、#12483、#12480、#12477、#12476、#12447、#12441
- **已接受但未启动**：#8541、#11138
- **需要作者操作**：#12456、#12453、#12275、#12408、#11869

---

*日报生成日期：2026-11-16。所有链接指向 https://github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*