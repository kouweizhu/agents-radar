# OpenClaw 生态日报 2026-11-13

> Issues: 436 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-13 02:51 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text while preserving the structure exactly
2. Keep all Markdown elements (headings, tables, lists, blockquotes, etc.)
3. Keep URLs, numbers, dates, version tags, repository names, issue/PR numbers as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation
6. No markdown fences around the whole output

Let me translate section by section:

## 1. Today's Overview
OpenClaw 在过去 24 小时内保持了较高的开发活跃度，合并 issue/PR 更新共 936 条（436 个 issue，500 个 PR）。今日未发布新版本，但项目正在积极处理一系列影响核心功能的 P1 回归问题——特别是 Codex 辅助补全、Linux 上的子进程回收以及 macOS 网关运行相关的回归。社区参与度依然强劲，今日提交了 17 个 PR，其中包括多个涉及关键稳定性和性能问题的修复。维护团队正在积极审查涉及内存管理、会话处理和网关线程优化的 PR。

## 2. Releases
**今日无新版本发布。** 最新稳定版仍为 **v2026.11.3**，beta 测试版 `v2026.11.5-beta.1` 和 `v2026.11.5-beta.2` 可供使用。

## 3. Project Progress
### PRs Merged/Closed Today

| PR | Description | Size | Status |
|----|-------------|------|--------|
| [#198025](https://github.com/openclaw/openclaw/pull/198025) | improve(ci): keep stale packages out of hosted dependency caches | S | CLOSED |
| [#198028](https://github.com/openclaw/openclaw/pull/198028) | fix(logging): keep log tailing from stalling Gateway chats | M | CLOSED |


| [#195711](https://github.com/openclaw/openclaw/pull/195711) | improve(ci): measure complete planner CLI flows | XL | CLOSED |

### Active PRs Advancing Today (24 items)

多个 PR 正在推进中，包括 [#197801](https://github.com/openclaw/openclaw/pull/197801) 关于减少受限 Gateway 启动压力（XL, P2）的修复，该修复通过推迟可选运行时并在减少启动内存压力的同时发出更小的运行时 JS 来优化性能。

此外还有会话路径检查从 Gateway 线程移出的修复（XL, P2）、Gateway 运行时检查从主线程剥离的修复（XL, P2），以及沙箱依赖模板预热功能（XL, P2）的改进，这些都在解决启动时的性能瓶颈和线程安全问题。

同时，针对沙箱会话压缩失败、带技能选择的场景修复（M, P1）正在进行中，以及长会话中的 bootstrap 补全保持功能也在推进中。

Codex 在活跃轮次期间收到的聊天行现在能够正确发送给 Codex 了。

## 4. Community Hot Topics

### 最活跃的 Issue（按评论数排序）

1. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway 状态数据库 WAL 自动检查点永不完成（40 条评论，P2）
   - **主题：** WAL 检查点自启动以来一直被进程内读者阻止；17,091 个日志帧未检查点
   - **潜在需求：** 并发读取负载下的数据库可靠性

2. **[#191944](https://github.com/openclaw/openclaw/issues/191944)** — macOS 上的 Gateway 停止/强制停止失败（27 条评论，P2）
   - **主题：** macOS 上的进程树检查不完整错误
   - **潜在需求：** 跨平台操作可靠性

3. **[#120385](https://github.com/openclaw/openclaw/issues/120385)** — 代码模式工具目录在计划任务/cron 轮次中不完整（26 条评论，P2）
   - **主题：** 定时任务中缺少 MCP 工具
   - **潜在需求：** 不同会话类型间工具可用性的一致性

4. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — 每个代理的梦境配置（17 条评论，已关闭）
   - **主题：** 所有工作区同时进入梦境导致内存峰值
   - **潜在需求：** 细粒度的内存管理控制

5. **[#44309](https://github.com/openclaw/openclaw/issues/44309)** — A2A 交接的单向调度模式（17 条评论，已关闭）
   - **主题：** 不通过回复回显方式将任务放入会话
   - **潜在需求：** 更高效的代理间通信模式

### 最活跃的 PR（按关注度/活跃度排序）

- **[#163267](https://github.com/openclaw/openclaw/pull/163267)** — feat(sessions): 允许同频道线程召回而不暴露代理范围（XL，P2）— 支持频道范围会话发现的重大功能
- **[#143882](https://github.com/openclaw/openclaw/pull/143882)** — feat(slack): 将流式推理渲染为任务卡片（XL，P2）— Slack 的富推理展示
- **[#177555](https://github.com/openclaw/openclaw/pull/177555)** — fix(slack): 通过选择性提及阻止无标签机器人循环（L，P2）— 防循环保护

## 5. Bugs & Stability

### P0/P1 关键问题（活跃中）

| Issue | Title | Severity | Trend |
|-------|-------|----------|-------|
| [#190563](https://github.com/openclaw/openclaw/issues/190563) | 无法恢复暂停的 Codex 聊天：provider review/原生线程不匹配 | P0 | 回归 |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 原生 Codex 辅助补全自 2026.10.10 起无法恢复父级 | P1 | 回归 |
| [#191841](https://github.com/openclaw/openclaw/issues/191841) — Linux glibc < 2.31 上'原生子进程回收不可用'导致 exec 失败 | P1 | 回归 |
| [#181459](https://github.com/openclaw/openclaw/issues/181459) — 3.5 GB 代理数据库使启动成为赌博；提交检查点已过期 | P1 | 稳定性 |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) — 配置热重载中断每个进行中的代理轮次 | P1 | 消息丢失 |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) — 长轮次丢失整个生成的回复（"没有活跃的工具权限快照"） | P1 | 消息丢失 |

多个关键问题需要立即关注：P0 级别的 Codex 聊天恢复问题、P1 级别的原生辅助补全和 exec 失败、以及内存压力和消息丢失问题。这些问题涉及稳定性、可靠性和跨版本兼容性。

### Notable Bug Fixes In Progress

- [#198028](https://github.com/openclaw/openclaw/pull/198028) — **已修复：** 日志追踪导致网关聊天卡顿（标量脱敏移至后台）
- [#198029](https://github.com/openclaw/openclaw/pull/198029) — **审核中：** 沙箱会话压缩失败（包含选定技能）
- [#198047](https://github.com/openclaw/openclaw/pull/198047) — **审核中：** 原生轮次期间到达的 Codex 聊天行未被发送
- [#198053](https://github.com/openclaw/openclaw/pull/198053) — **开启：** 浏览器面板错误可见性（被动刷新）

### Regression Watch

2026年10月10日的多个回归问题影响了生产部署。原生 Codex 辅助补全失败、RHEL 8 和 AlmaLinux 8 上的子进程回收失败，以及暂停的 Codex 聊天恢复失败都导致生产环境中断。

## 6. Feature Requests & Roadmap Signals

### 高价值功能请求

1. **[#163267](https://github.com/openclaw/openclaw/issues/163267)** — 同频道线程召回而不暴露代理范围 — **PR 审核中**（XL，P2）
   - 支持隐私敏感部署的频道范围会话发现

2. **[#143882](https://github.com/openclaw/openclaw/issues/143882)** — Slack 推理作为任务卡片（含续写）— **PR 审核中**（XL，P2）
   - 长推理链的富展示模式

3. **[#131457](https://github.com/openclaw/openclaw/issues/131457)** — 飞书进度流模式 —（10 条评论，P2）
   - 与 Slack/Discord/Telegram 流式功能对齐

4. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — 每个代理的梦境配置 —（已关闭，需产品决策）
   - 防止所有工作区的同步内存峰值

5. **[#52732](https://github.com/openclaw/openclaw/issues/52732)** — 每个代理的压缩和 contextPruning 覆盖 —（已关闭，需产品决策）
   - 允许每个代理的细粒度内存管理

### Predicted Next Version Focus

根据活跃的 P1 问题

和审核中的 PR，内存管理改进（启动压力、压缩、沙箱优化）将成为下一个版本的重点。网关线程稳定性同样关键，需要将同步 I/O 从主线程移出。Codex 可靠性修复和跨平台稳定性也在优先列表中。

## 7. User Feedback Summary

### 持续痛点

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| 大型数据库启动延迟 | 多份报告（#181459）| 代理不可用数分钟 |
| 并发梦境期间内存峰值 | #67413 | 6GB 系统 OOM 杀死 |
| 跨平台操作失败 | #191944, #191841 | 无法停止网关/exec 失败 |
| 长轮次消息丢失 | #144809, #144291 | 回复内容消失 |
| Slack 机器人循环 | #177555（审核中的修复）| 不必要的机器人回复 |

### 正面反馈指标

- 功能请求活跃参与（A2A 调度模式 17 条评论，每个代理梦境 17 条）
- 社区强劲的 PR 贡献（今日 17 个新 PR）
- 多个 PR 高效推进审核流程

### 不满意主题

运营可靠性问题突出——用户报告网关操作在特定平台上失败。回归节奏令人担忧，2026.10.10 的多个回归影响生产环境。文档滞后也值得关注。

### Live Docs 领先于 IsolatedSessions 功能的发布时间

## 8. Backlog Watch

### 长期未回复的重要问题（需维护者关注）

| Issue | Age | Comments | Needs |
|-------|-----|----------|-------|
| [#101929](https://github.com/openclaw/openclaw/issues/101929) — 上下文溢出估算器多算 2.3-2.6 倍 | 4+ 个月 | 14 | 源码复现，main 分支 PR 已合并 |
| [#141474](https://github.com/openclaw/openclaw/issues/141474) — sessions_yield 永远困住 agents_wait | 2+ 个月 | 16 | main 分支恢复 PR |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) — 每次启动重新获取 reindex 锁，19GB 孤立的临时数据库 | 2+ 个月 | 14 | 源码复现 |
| [#114067](https://github.com/openclaw/openclaw/issues/114067) — 插件键使根帮助慢 35 倍 | 4+ 个月 | 8 | 可排队的修复，源码复现 |
| [#180978](https://github.com/openclaw/openclaw/issues/180978) — 主动内存断路器永不开启 | ~3 周 | 8 | 产品决策 |

### 标记为过期的 Issue

许多标记为 `stale` 且带有 `clawsweeper:no-new-fix-pr` 的 issue 表明存在孤立工单，其中没有提交 PR、维护者审核待处理或需要产品决策。这些可以通过关闭或优先级清理来改善。

### 待作者处理的 PR

| PR | Status | Blocking |
|----|--------|----------|
| [#143882](https://github.com/openclaw/openclaw/pull/143882) — Slack 推理卡片 | ⏳ 等待作者 | 功能交付 |
| [#197975](https://github.com/openclaw/openclaw/pull/197975) — 主线程外的运行时检查 | ⏳ 等待作者 | 网关稳定性 |

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total Issues | 436 (262 open, 174 closed) |
| Total PRs | 500 (290 open, 210 merged/closed) |
| New PRs Today | 17 |
| Active P0/P1 Issues | 6 |
| PRs in Review | 24+ |
| Releases Today | 0 |

---

*Generated from OpenClaw repository data — github.com/openclaw/openclaw*
</think>


OpenClaw 项目动态

日期：2026-11-13

---

## 1. 今日概览

OpenClaw 在过去 24 小时内保持了较高的开发活跃度，合并 issue/PR 更新共 936 条（436 个 issue，500 个 PR）。今日未发布新版本，但项目正在积极处理一系列影响核心功能的 P1 回归问题——特别是 Codex 辅助补全、Linux 上的子进程回收以及 macOS 网关运行相关的回归。社区参与度依然强劲，今日提交了 17 个 PR，其中包括多个涉及关键稳定性和性能问题的修复。维护团队正在积极审查涉及内存管理、会话处理和网关线程优化的 PR。

---

## 2. 版本发布

**今日无新版本发布。** 最新稳定版仍为 **v2026.11.3**，beta 测试版 `v2026.11.5-beta.1` 和 `v2026.11.5-beta.2` 可供使用。

---

## 3. 项目进展

### 今日合并/关闭的 PR（5 项）

| PR | 描述 | 规模 | 状态 |
|----|-------------|------|--------|
| [#198025](https://github.com/openclaw/openclaw/pull/198025) | improve(ci): keep stale packages out of hosted dependency caches | S | CLOSED |
| [#198028](https://github.com/openclaw/openclaw/pull/198028) | fix(logging): keep log tailing from stalling Gateway chats | M | CLOSED |
| [#195711](https://github.com/openclaw/openclaw/pull/195711) | improve(ci): measure complete planner CLI flows | XL | CLOSED |

### 今日推进中的 PR（24 项）

正在 review 或等待作者操作的 PR：

- [#197801](https://github.com/openclaw/openclaw/pull/197801) — **fix(memory): reduce constrained Gateway startup pressure** (XL, P2) — 延迟可选运行时直到需要时才加载；发出更小的运行时 JS 同时降低启动内存压力
- [#197510](https://github.com/openclaw/openclaw/pull/197510) — **fix: move session path checks off the Gateway thread** (XL, P2) — 移除 Gateway 线程中可能导致请求卡顿的同步文件系统查询
- [#197975](https://github.com/openclaw/openclaw/pull/197975) — **fix: keep Gateway runtime checks off the main thread** (XL, P2) — 解决就绪检查期间的 Gateway 卡顿问题
- [#197953](https://github.com/openclaw/openclaw/pull/197953) — **fix: prewarm sandbox dependency templates between sessions** (XL, P2) — 优化首次沙箱会话启动
- [#198029](https://github.com/openclaw/openclaw/pull/198029) — **fix: compaction fails for sandboxed sessions with selected skills** (S, P1) — 沙箱会话压缩的关键修复
- [#198049](https://github.com/openclaw/openclaw/pull/198049) — **fix(agents): keep bootstrap completion in long sessions** (M) — 修复跳过续写模式下工作区指令被跳过的问题
- [#198047](https://github.com/openclaw/openclaw/pull/198047) — **fix(codex): chat rows that arrive during a native turn are never sent to Codex** (S) — 确保 Codex 在活跃轮次期间接收所有聊天消息

---

## 4. 社区热点话题

### 评论最活跃的 Issue（按评论数排序）

1. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway 状态数据库 WAL 自动检查点永不完成（40 条评论，P2）
   - **话题：** WAL 检查点自启动以来一直被进程内读取者阻塞；17,091 个日志帧未完成检查点
   - **潜在需求：** 并发读取负载下的数据库可靠性

2. **[#191944](https://github.com/openclaw/openclaw/issues/191944)** — macOS 上的 Gateway stop/force-stop 操作失败（27 条评论，P2）
   - **话题：** macOS 上出现"进程谱系无法完整检查"错误
   - **潜在需求：** 跨平台运维可靠性

3. **[#120385](https://github.com/openclaw/openclaw/issues/120385)** — Code Mode 工具目录在计划任务/cron 轮次中不完整（26 条评论，P2）
   - **话题：** 定时任务中 MCP 工具缺失（"Unknown tool id"）
   - **潜在需求：** 不同会话类型间工具可用性的一致性

4. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — 每个 Agent 的做梦配置（17 条评论，已关闭）
   - **话题：** 所有工作区同时进入"做梦"状态导致内存峰值
   - **潜在需求：** 细粒度的内存管理控制

5. **[#44309](https://github.com/openclaw/openclaw/issues/44309)** — A2A 交接的单向分发模式（17 条评论，已关闭）
   - **话题：** 将任务投入会话而不需要回复往返
   - **潜在需求：** 更高效的 Agent 间通信模式

### 评论最活跃的 PR（按关注度/活跃度排序）

- **[#163267](https://github.com/openclaw/openclaw/pull/163267)** — feat(sessions): 允许同频道线程召回而不暴露 Agent 级别可见性（XL, P2）— 一项重大功能，实现频道范围的会话发现
- **[#143882](https://github.com/openclaw/openclaw/pull/143882)** — feat(slack): 将流式推理渲染为任务卡片（XL, P2）— Slack 的富推理展示
- **[#177555](https://github.com/openclaw/openclaw/pull/177555)** — fix(slack): 通过选择性显式提及阻止无标签机器人循环（L, P2）— 防循环保护机制

---

## 5. Bug 与稳定性

### P0/P1 关键问题（活跃中）

| Issue | 标题 | 严重程度 | 趋势 |
|-------|-------|----------|-------|
| [#190563](https://github.com/openclaw/openclaw/issues/190563) | 无法恢复暂停的 Codex 聊天：provider review 与原生线程不匹配 | P0 | 回归 |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 原生 Codex 辅助补全自 2026.10.10 起无法恢复父级 | P1 | 回归 |
| [#191841](https://github.com/openclaw/openclaw/issues/191841) | '原生子进程回收不可用' 导致 Linux glibc < 2.31 上 exec 失败 | P1 | 回归 |
| [#181459](https://github.com/openclaw/openclaw/issues/181459) | 3.5 GB Agent 数据库使启动变成一场赌博；提交检查点已过期 | P1 | 稳定性 |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) | 配置热重载会中止所有进行中的 Agent 轮次 | P1 | 消息丢失 |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | 长轮次会丢失整个生成的回复（"no active tool authority snapshot"） | P1 | 消息丢失 |

### 正在修复的 Bug

- [#198028](https://github.com/openclaw/openclaw/pull/198028) — **已修复：** 日志尾随导致 Gateway 聊天卡顿（标量脱敏已移至后台）
- [#198029](https://github.com/openclaw/openclaw/pull/198029) — **审核中：** 带有选中技能的沙箱会话压缩失败
- [#198047](https://github.com/openclaw/openclaw/pull/198047) — **审核中：** 原生轮次期间到达的 Codex 聊天行从未发送给 Codex
- [#198053](https://github.com/openclaw/openclaw/pull/198053) — **开启：** 通过被动刷新提高浏览器面板错误可见性

### 回归监控

**2026.10.10** 的多个回归问题正在影响生产部署：
- 原生 Codex 辅助补全失败
- RHEL 8 / AlmaLinux 8 上子进程回收失败
- 暂停的 Codex 聊天恢复失败

---

## 6. 功能需求与路线图信号

### 高价值功能需求

1. **[#163267](https://github.com/openclaw/openclaw/issues/163267)** — 同频道线程召回而不暴露 Agent 级别可见性 — **PR 审核中**（XL, P2）
   - 为隐私敏感型部署启用频道范围的会话发现

2. **[#143882](https://github.com/openclaw/openclaw/issues/143882)** — Slack 推理作为任务卡片（含续写）— **PR 审核中**（XL, P2）
   - 长推理链的富展示模式

3. **[#131457](https://github.com/openclaw/openclaw/issues/131457)** — 飞书进度流模式 —（10 条评论，P2）
   - 将飞书与 Slack/Discord/Telegram 的流式功能对齐

4. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — 每个 Agent 的做梦配置 —（已关闭，需产品决策）
   - 防止所有工作区同时出现内存峰值

5. **[#52732](https://github.com/openclaw/openclaw/issues/52732)** — 每个 Agent 的压缩和 contextPruning 覆盖 —（已关闭，需产品决策）
   - 允许每个 Agent 的细粒度内存管理

### 预测下一版本重点

基于活跃的 P1 问题和审核中的 PR：
- **内存管理改进**（启动压力、压缩、沙箱优化）
- **Gateway 线程稳定性**（将同步 I/O 从主线程移出）
- **Codex 可靠性修复**（辅助补全、聊天消息传递）
- **跨平台稳定性**（macOS 网关停止、Linux 子进程回收）

---

## 7. 用户反馈摘要

### 持续痛点

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| 大型数据库启动延迟 | 多份报告（#181459）| Agent 不可用长达数分钟 |
| 并发做梦期间内存峰值 | #67413 | 6GB 系统 OOM |
| 跨平台运维失败 | #191944, #191841 | 无法停止 Gateway / exec 失败 |
| 长轮次消息丢失 | #144809, #144291 | 回复内容消失 |
| Slack 机器人循环 | #177555（修复正在审核中）| 不必要的机器人回复 |

### 正面反馈指标

- 功能需求的活跃参与（A2A 分发模式 17 条评论，每个 Agent 做梦 17 条评论）
- 社区强劲的 PR 贡献（今日 17 个新 PR）
- 多个 PR 高效推进审核流程

### 不满意主题

- **运维可靠性** — 用户报告 Gateway 操作在特定平台上失败
- **回归频率** — 2026.10.10 的多个回归影响生产环境
- **文档滞后** — Issue [#48920](https://github.com/openclaw/openclaw/issues/48920) 反映 Live Docs 领先于 IsolatedSessions 功能的发布时间

---

## 8. 积压关注

### 需要维护者关注的长期未回复重要问题

| Issue | 时长 | 评论数 | 需求 |
|-------|-----|----------|-------|
| [#101929](https://github.com/openclaw/openclaw/issues/101929) — context-overflow 估算器多算 2.3-2.6 倍 | 4+ 个月 | 14 | 源码复现，main 分支 PR 已合并 |
| [#141474](https://github.com/openclaw/openclaw/issues/141474) — sessions_yield 导致 agents_wait 永远困死 | 2+ 个月 | 16 | main 分支恢复 PR |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) — 每次启动重新获取 reindex 锁，产生 19GB 孤立临时数据库 | 2+ 个月 | 14 | 源码复现 |
| [#114067](https://github.com/openclaw/openclaw/issues/114067) — 带插件 key 的根帮助慢 35 倍 | 4+ 个月 | 8 | 可排队的修复，源码复现 |
| [#180978](https://github.com/openclaw/openclaw/issues/180978) — 主动内存断路器永不开启 | ~3 周 | 8 | 产品决策 |

### 标记为过期的 Issue

许多标记为 `stale` 且带有 `clawsweeper:no-new-fix-pr` 的 issue 表明存在孤立工单：
- 未提交 PR
- 维护者 review 待处理
- 需要产品决策

这些可能需要清理或优先级重排。

### 等待作者的 PR

| PR | 状态 | 阻塞 |
|----|--------|----------|
| [#143882](https://github.com/openclaw/openclaw/pull/143882) — Slack 推理卡片 | ⏳ 等待作者 | 功能交付 |
| [#197975](https://github.com/openclaw/openclaw/pull/197975) — 主线程外的运行时检查 | ⏳ 等待作者 | Gateway 稳定性 |

---

## 汇总统计

| 指标 | 数值 |
|--------|-------|
| 总 Issue 数 | 436（262 个开放，174 个关闭）|
| 总 PR 数 | 500（290 个开放，210 个已合并/关闭）|
| 今日新增 PR | 17 |
| 活跃 P0/P1 问题 | 6 |
| 审核中的 PR | 24+ |
| 今日发布版本 | 0 |

---

*数据来源：OpenClaw 仓库 — github.com/openclaw/openclaw*

---

## 横向生态对比

<think>The user wants me to translate the entire technical report from English to Simplified Chinese, following the rules about preserving formatting and not translating technical identifiers. Let me go through this carefully.

Key things to preserve as-is:
- URLs
- Repository slugs (github.com/openclaw/openclaw, etc.)
- Version tags (v2026.11.3, v0.23.1, v2.3.0, v0.9.1)
- Issue/PR numbers (#191944, #67413, etc.)
- Code/command references (sessions_yield, WAL, A2A, ACP, RBAC, etc.)
- Emoji
- File paths
- Technical terms that are standard in Chinese (like API, CLI, UX, etc.)

Let me translate this carefully, maintaining the natural Chinese technical register.
</think>


# Personal AI Agent 生态系统 — 跨项目对比报告

## 1. 生态系统概览

Personal AI 助手与 Agent 开源生态系统正处于**高速增长阶段**，五大主要项目虽定位各异但存在大量重叠需求。OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw 均呈现活跃开发态势（日均 20–50+ issue/PR 更新），IronClaw 则几乎处于停滞。五个项目共同聚焦三大核心挑战：**生产环境下的 Agent 可靠性**（长轮次稳定性、消息投递保证、会话连续性）、**安全加固**（工具白名单、RBAC、沙箱隔离、身份认证绕过防护）以及**多平台/多租户一致性**（Windows、Linux、macOS，跨平台 Channel 兼容）。版本发布节奏普遍较快（OpenClaw 约双周发版、QwenPaw 约月度发版、ZeroClaw 目标 v0.9.1），表明这些项目正在争夺 Agentic 助手从尝鲜走向基础设施化这一过程中的开发者心智份额。

---

## 2. 活动量对比

| 项目 | Issues（24h） | PRs（24h） | 今日发版 | 最新 Release | 活跃等级 |
|---------|:---:|:---:|:---:|---|---|
| **OpenClaw** | 436 | 500 | 0 | v2026.11.3（2026-11-10） | 🔴 Tier 1 — 最高 |
| **Hermes Agent** | 50 | 50 | 0 | v0.23.1 | 🟡 Tier 2 — 高 |
| **QwenPaw** | 22 | 50 | 0 | v2.3.0（2026-11-11） | 🟡 Tier 2 — 高 |
| **ZeroClaw** | 50 | 50 | 0 | v0.9.1（目标版本） | 🟡 Tier 2 — 高 |
| **IronClaw** | 1 | 0 | 0 | 未知 | ⚪ Tier 3 — 极低 |

**解读：** OpenClaw 的报告数字（436 issues、500 PRs）很可能是仓库累计总量而非 24 小时增量，表明其代码库成熟、积压较多。其他四个项目中 QwenPaw 积压最轻（22 issues），其余三者日更新量基本持平（~22–50 条），IronClaw 可视为实质性停更。

---

## 3. OpenClaw 的定位

### 相比同类项目的优势

OpenClaw 从多个维度看都处于生态系统的**最成熟位置**：

- **最大的代码库与社区：** 436 issues 与 500 PRs（累计）对比 Hermes/ZeroClaw 的各 50 条、QwenPaw 的 22 条，说明 OpenClaw 已吸收了更多生产用例与社区贡献。
- **先进的记忆与 Dreaming 系统：** Per-agent dreaming 配置（#67413）和 per-agent compaction 覆盖（#52732）表明 OpenClaw 已率先解决了其他项目才刚刚暴露的记忆管理问题。
- **A2A 协议主导地位：** Agent 间转交的 One-way dispatch 模式（#44309）及更广泛的 A2A（agent-to-agent）架构讨论，显示出 OpenClaw 正在引领 Agent 间通信模式的探索。
- **回归问题管理能力：** 尽管存在 6 个 P0/P1 级别回归问题，OpenClaw 同时拥有最活跃的 PR 审查流水线，24+ PR 并行推进。

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|-------------|---------|----------|
| **核心语言** | 未明确 | Python（推测） | Python（uv、pip） | Rust（主要） |
| **记忆模型** | Dreaming、compaction、活跃记忆熔断 | OpenViking、auto memory search（存在 503 风险） | Memory tags、定时任务记忆 | 多租户 per-sender RBAC |
| **Channel 集成** | Slack、Discord、Telegram、Matrix、Feishu | Slack、Discord、Telegram、Matrix、WeChat | Matrix、Feishu、WeChat | ZeroRelay 原生传输层 |
| **安全模型** | 工具白名单、斜杠指令门控 | Sudo askpass、斜杠指令审批 | 沙箱执行、Office COM 防护 | OIDC、delegate 工具白名单强制执行 |
| **Gateway 架构** | WAL 状态数据库、配置热重载 | 会话续接、ACP token 计费 | 插件化 Channel、cron 调度器 | OIDC 规范主体 |
| **桌面端** | Electron + Codex 集成 | Desktop 应用（支持 Linux GPU 流式，锯齿波问题） | Console TUI + 浏览器面板 | Dashboard + 运行时登录 |

### 社区规模对比

基于 issue/PR 体量、贡献者多样性及首次 PR 频率：

- **OpenClaw：** 社区规模最大（单日 17 条 PR），Maintainer review 文化活跃，长期 issue 积压说明持续关注度高。
- **Hermes Agent：** 社区活跃，今日有 8 位首次贡献者，但今日 PR 合并数为零，存在审查瓶颈。
- **ZeroClaw：** RFC 驱动文化（RFC #6996、#8396、#6293），贡献者规模较小但技术深度强。
- **QwenPaw：** 中国开发者社区（从 WeChat、Feishu 集成及项目命名推测），Plugin 生态方向突出。
- **IronClaw：** 实际为一人或极小团队项目。

---

## 4. 共同技术关注点

以下需求在多个项目中同步出现，代表了生态系统层面的真实挑战：

### A. 跨平台兼容性（所有项目）

| 项目 | 问题 |
|---------|-------|
| OpenClaw | macOS 上 Gateway stop 失败（#191944）；Linux glibc < 2.31 下子进程回收失败（#191841） |
| Hermes Agent | Linux 下 GPU 100% 锯齿波（#154701）；字节码包写入签名 macOS app（#154772） |
| QwenPaw | Windows 上附件路径截断为 `C:\`（#8655）；Linux 缺失 HOME 时 Channel 插件崩溃（#8682） |
| ZeroClaw | Windows 上 74 个测试失败（#7462）；x86_64 Linux 二进制体积压力（#11580） |
| IronClaw | 单条 CI lockfile 问题（#8170） |

**共同需求：** 所有项目都在进程生命周期、文件系统语义和 CI/CD 环境方面遭遇平台差异问题。目前尚无项目完全解决 Windows 一致性。

### B. 循环/死循环检测（OpenClaw、Hermes Agent、QwenPaw）

| 项目 | 问题 | 状态 |
|---------|-------|--------|
| OpenClaw | `sessions_yield` 导致 agents_wait 永久阻塞（#141474） | 尚无修复 PR |
| Hermes Agent | 死循环检测门误杀合法轮询（#8184） | 需架构决策 |
| QwenPaw | DoomLoopGate 在 agentscope 累积回复时从不触发（#8700） | 修复 PR #8701、#8702 进行中 |

**共同需求：** 三个项目独立发现，简单依赖回复计数的循环检测会产生误报（杀死合法长操作）和漏报（未能识别实际卡住的 Agent）。这表明该问题需要更丰富的检测信号。

### C. 会话连续性与记忆可靠性（OpenClaw、Hermes Agent、QwenPaw）

| 项目 | 问题 |
|---------|-------|
| OpenClaw | 配置热重载中止进行中轮次（#144291）；RUN_STALE_TAKEOVER_MS 后轮次丢失回复（#144809）；WAL 自动检查点永不完成（#164294） |
| Hermes Agent | Session reset 续接绑定到错误的父 chat_id（#150614）；ACP 恢复时重复计 token（#146475）；bot-relay mailbox root 歧义（#146035） |
| QwenPaw | Memory tag 索引返回 503 后从不重建（#8580）；auto memory search 产生重复查询陷阱（#8361）；定时任务记忆文件中断（#2306） |

**共同需求：** 持久化会话状态——包括记忆索引、WAL 检查点、续接绑定——在并发访问、长会话、配置变更场景下都很脆弱。三个项目均在独立构建修复方案。

### D. 安全架构（OpenClaw、Hermes Agent、ZeroClaw）

| 项目 | 问题 | 严重级别 |
|---------|-------|----------|
| OpenClaw | 原生 Codex helper 补全恢复失败 | P1 回归 |
| Hermes Agent | 明文 "yes" 绕过斜杠指令审批门（#151735） | P1 安全 |
| ZeroClaw | Delegate 绕过父级工具白名单（#8279） | S0 安全；RUSTSEC-2026-0459 阻塞所有合并（#12320） |

**共同需求：** 工具执行授权——尤其是多 Agent/delegate 场景下的授权——比预期困难得多。三个项目都存在授权绕过风险，需要架构层面修复而非补丁。

### E. 插件/扩展生态系统（OpenClaw、Hermes Agent、QwenPaw、ZeroClaw）

| 项目 | 关注方向 |
|---------|-------|
| OpenClaw | Code Mode 工具目录、MCP 工具溯源 |
| Hermes Agent | Plugin CLI 命令与扩展点（#8554）、plugin marketplace 更新（#8699） |
| QwenPaw | Plugin 数据目录文档、破坏性文件操作审计（#8686）、plugin channel 迁移（#8684） |
| ZeroClaw | 沙箱执行、air-gapped 模式（#6293）、scoped HTTP 凭证（#12408） |

**共同需求：** 四个活跃项目均在独立构建插件系统，表明围绕插件安全、生命周期管理和数据目录约定的共享模式正在汇聚。

---

## 5. 差异化分析

### 功能重点差异化

| 项目 | 核心差异化能力 | 次要重点 |
|---------|----------------------|-----------------|
| **OpenClaw** | A2A agent-to-agent 协议、per-agent dreaming/记忆 | 多 Channel（5+）、Codex helper 集成、Gateway 多线程 |
| **Hermes Agent** | Desktop-first UX、GPU 流式推送、丰富通知 UX | 多 Channel（WeChat、Slack、Discord、Matrix）、per-model 推理 effort |
| **QwenPaw** | 插件生态、cron/任务自动化 | 中国平台集成（WeChat、Feishu）、Windows 桌面端 |
| **ZeroClaw** | Rust 安全优先架构、OIDC/多租户 | 沙箱执行、air-gapped 模式、wire protocol 架构 |
| **IronClaw** | 极简/中性（仅 CI workflow） | 不适用 |
| **Hermes Agent** | Desktop 稳定性、安全加固 | 多 Profile、Channel 可靠性 |

### 目标用户差异化

- **OpenClaw：** 运行多 Agent 工作流的高级用户和开发者；Gateway 可靠性和 Codex 集成重点表明面向企业/技术受众。
- **Hermes Agent：** 以桌面端为核心的用户；GPU 流式推送和通知功能表明面向个人高级用户。
- **QwenPaw：** 中国市场及 cron/任务自动化用户；WeChat/Feishu 深度集成表明面向本土化企业场景。
- **ZeroClaw：** 安全敏感型多租户部署；Rust 架构、OIDC 和 air-gapped 模式表明面向基础设施/DevOps 受众。
- **IronClaw：** 实际上已不活跃；目标用户不明确。

### 技术架构差异化

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|-------------|---------|----------|
| **主要语言** | 未明确 | Python（推测） | Python | Rust |
| **记忆管理** | WAL 数据库、Dreaming、Compaction | OpenViking、标签索引 | Memory tags（存在 503 风险） | 多租户 RBAC 隔离 |
| **安全模型** | 工具白名单、per-agent 配置 | 审批门、askpass 辅助 | 沙箱执行、COM 防护 | OIDC、delegate 策略强制 |
| **部署模式** | Gateway 中心化 | Desktop-first | 插件化 Channel | Dashboard + 运行时 |

---

## 6. 社区势能与成熟度

### 活跃度分层

**Tier 1 — 快速迭代（OpenClaw）：**
- 体量高出一个数量级（436 issues、500 PRs）
- 回归问题追踪活跃，6 个 P0/P1 并行处理
- 单日 17 条新 PR，贡献者管道强劲
- 多条 RFC 并行推进（A2A、per-agent dreaming、one-way dispatch）
- **成熟度：** 最成熟——代码库庞大、模式稳定，但 WAL/Gateway 稳定性方面技术债务较重

**Tier 2 — 活跃开发（Hermes Agent、QwenPaw、ZeroClaw）：**
- 日均 ~22–50 条更新，活动量基本持平
- 均处于近期发版后消化期（Hermes v0.23.1、QwenPaw v2.3.0、ZeroClaw 目标 v0.9.1）
- 三者均有安全 issue 在途——均未实现安全完备
- Hermes 和 QwenPaw 首提贡献者参与度高
- **成熟度：** 中期——核心架构仍在通过 RFC 和 PR 驱动设计中积累技术债务

**Tier 3 — 极低/停滞（IronClaw）：**
- 24 小时内仅 1 个 issue、0 条 PR
- 无发版活动
- 实际处于维护或废弃状态
- **成熟度：** 早期或休眠——社区规模不足以支撑活跃开发

### 快速迭代项目

| 项目 | 迭代信号 | 证据 |
|---------|-----------------|----------|
| **OpenClaw** | 🔴 快速 | 单日 17 条 PR，24+ PR 并行 review，P1 回归修复周期 24–48h |
| **QwenPaw** | 🟡 快速 | v2.3.0 于 2026-11-11 发版，当日已关闭 5 个 issues，合并 13 条 PRs |
| **ZeroClaw** | 🟡 快速 | 今日多条新 PR（#12408、#12407、#12406、#12405、#12404、#12403、#12402），RFC 文化活跃 |
| **Hermes Agent** | 🟡 快速（今日停滞） | 50 条 PR 更新但 0 条合并——审查/审批环节存在瓶颈 |
| **IronClaw** | ⚪ 停滞 | 无实质性开发活动 |

### 趋稳项目

- **尚无项目明确进入趋稳阶段。** 四个活跃项目均有开放中的 P1 安全或稳定性问题，表明尚无项目进入"功能锁定→稳定性优先"阶段。
- **OpenClaw** 在功能集层面最接近趋稳（核心架构成熟），但仍有深层可靠性问题（WAL 检查点、长轮次消息丢失）待解决。

---

## 7. 趋势信号

跨项目分析揭示以下趋势，代表行业整体动向：

### A. 安全正成为一等公民需求

四个活跃项目均在独立处理授权绕过、多租户隔离和沙箱执行问题。这并非单个项目的特有问题，而是**行业层面的共识挑战**——随着 Agentic 系统从单用户个人助手走向多用户生产基础设施，安全问题的优先级大幅提升。

**面向开发者的信号：** Agent 授权（尤其是 delegate/sub-agent 场景下的授权）是目前最难解决的未决问题。在 RBAC（ZeroClaw #5982）、工具白名单（OpenClaw、ZeroClaw）和审批门（Hermes #151735）上投入的项目，将在企业采纳潮中获得竞争优势。

### B. 跨平台一致性仍是悬而未决的难题

尽管开源开发已历经多年，所有项目仍在 Windows/Linux/macOS 行为差异上挣扎。这在进程生命周期管理（Gateway 停止、子进程回收）和文件系统语义（路径分隔符、字符编码）方面尤为突出。

**面向开发者的信号：** 跨平台测试基础设施是瓶颈。任何能解决此问题的方案（可能是容器化或 WSL2 集成，正如 ZeroClaw 的 WSL2 重启风暴修复 #8633 所示）将大幅减少用户投诉的主要类别。

### C. 循环检测是未解难题

三个独立项目（OpenClaw、Hermes Agent、QwenPaw）均发现简单的回复计数阈值会产生误报（杀死合法长操作）和漏报（未能识别卡住的 Agent）。这表明该问题需要更丰富的信号——也许是任务图分析、用户预期建模或按工具类型可配置的阈值。

**面向开发者的信号：** 循环检测是高价值差异化功能。任何能交付稳健、可配置循环检测系统的项目都将获得强劲的用户采纳。

### D. 负载下的会话连续性与记忆可靠性

WAL 检查点、会话续接绑定、记忆索引损坏和 token 重复计数等问题的高度聚焦，指向一个系统性挑战：**Agent 规模下的持久化状态管理尚未解决。** 随着用户运行更长会话、更复杂上下文，这些问题将加剧。

**面向开发者的信号：** 投资于持久化会话状态管理（检查点、WAL compaction、记忆索引可靠性）是战略优先项。交付可靠会话持久化的项目将在运行自主 Agent 的高级用户中形成差异化。

### E. 插件生态系统正成为核心战场

四个活跃项目均在独立构建插件系统，QwenPaw 和 OpenClaw 走得最远。模式高度一致：CLI 命令基础设施、marketplace/更新机制、数据目录约定、第三方插件安全审计。

**面向开发者的信号：** 首个交付成熟、安全、文档完善的插件生态系统及 marketplace 的项目，将赢得第三方开发者的心智——类似于 VS Code 扩展 marketplace 如何成为竞争护城河。当前领先者：QwenPaw（CLI + marketplace + 更新基础设施并行推进）和 OpenClaw（Code Mode 工具目录）。

### F. 中国市场是一个独特的市场细分

QwenPaw 深度集成 WeChat、Feishu、支付宝，结合中文文档和社区（从 issue 作者推断），表明存在一个西方中心项目（OpenClaw、Hermes Agent、ZeroClaw）尚未服务到的地理差异化市场。该市场在平台偏好、监管要求和用户工作流上有显著不同。

**面向开发者的信号：** 中国 AI Agent 市场代表本地化和平台集成的重要机遇。已有中国平台集成的项目（QwenPaw）在该细分市场具有先发优势。

---

*本报告基于 2026-11-13 GitHub 活动数据编制，覆盖 OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw。适用于评估 Agent 基础设施投资的技术决策者，以及选择 Agentic 应用开源基础的开发者。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:
1. Translate all the text content while keeping the Markdown structure
2. Keep all URLs, code references, issue numbers, usernames, etc. as-is
3. Use natural technical Chinese suitable for a Chinese developer newsletter
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the whole output

Let me translate section by section:

**Section 1: Today's Overview**
- Translate the summary of activity
- Keep numbers and references intact

**Section 2: Releases**
- Translate "No new releases today" and the note about v0.23.1

**Section 3: Project Progress**
- Translate table headers and descriptions
- Keep PR numbers, usernames, component names, descriptions as-is where appropriate

**Section 4: Community Hot Topics**
- Translate the analysis of underlying needs
- Keep issue numbers and links

**Section 5: Bugs & Stability**
- Translate security and bug descriptions
- Keep issue numbers and fix PR references

**Section 6: Feature Requests & Roadmap Signals**
- Translate feature descriptions and predictions
- Keep PR numbers and descriptions

**Section 7: User Feedback Summary**
- Translate pain points and positive signals
- Keep quotes as translated quotes

**Section 8: Backlog Watch**
- Translate the lists
- Keep issue numbers and titles

Let me write this out in natural technical Chinese:
</think>


# Hermes Agent 项目速报 — 2026-11-13

## 1. 今日概览

Hermes Agent (NousResearch/hermes-agent) **过去 24 小时内有 50 条 issue 和 50 条 PR 发生更新**，开发活动十分活跃。今日无新版本发布。社区持续反馈关键 bug 和安全问题，同时推进功能开发。值得注意的是，**7 个 issue 已关闭**，而**尚无 PR 合并**，表明团队正在积极分类整理，但代码尚未落地。Bug 待处理队列仍然庞大，P2 严重级别的问题集中在 desktop、gateway 和 agent 三大组件。

---

## 2. 版本发布

**今日无新版本发布。** 根据 issue 数据中的版本引用，最近发布的版本应为 v0.23.1。

---

## 3. 项目进展

### 今日新开 PR（重点摘要）

| PR | 作者 | 组件 | 描述 |
|---|---|---|---|
| [#154792](https://github.com/NousResearch/hermes-agent/pull/154792) | probepark | agent, provider/anthropic | 修复 Anthropic 客户端在 fallback 到 anthropic_messages 时的构造问题 |
| [#154791](https://github.com/NousResearch/hermes-agent/pull/154791) | Code-city-ai | agent, provider/anthropic | 在 Anthropic 摘要中保留循环工具和缓存片段 |
| [#154789](https://github.com/NousResearch/hermes-agent/pull/154789) | doluz | plugins, tool/mcp | **新功能：MeetStream 插件** — 让 Hermes 作为机器人加入 Zoom、Google Meet、Teams 会议 |
| [#154788](https://github.com/NousResearch/hermes-agent/pull/154788) | Valvoa | gateway | 修复 relay 文件上传时非 Latin-1 文件名的处理（UnicodeEncodeError 修复） |
| [#154649](https://github.com/NousResearch/hermes-agent/pull/154649) | unsupportedpastels | tools, terminal | 安全修复：通过 askpass helper 传递 sudo 密码，而非注入 stdin |
| [#154772](https://github.com/NousResearch/hermes-agent/pull/154772) | BearHuddleston | desktop, macOS | 阻止 macOS 应用向自身签名包中写入字节码 |
| [#120385](https://github.com/NousResearch/hermes-agent/pull/120385) | pzprado | gateway, platform/matrix | 尊重 Matrix 的 `reply_to_mode` 配置来决定回复引用格式 |

**今日无 PR 合并。** 50 条 PR 更新均为开放状态的 PR 收到评论或 CI 活动。

---

## 4. 社区热点话题

### 互动最活跃的 Issue（按评论数排序）

| Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|
| #154701 | 5 | **[Bug][Linux/AMD] 流式传输到隐藏窗口时 GPU 呈锯齿状飙至 100%** | [查看](https://github.com/NousResearch/hermes-agent/issues/154701) |
| #150614 | 5 | gateway：session_reset 续接时绑定到错误的父 chat_id | [查看](https://github.com/NousResearch/hermes-agent/issues/150614) |
| #147594 | 5 | 配置往返丢失重新插入时的引号格式 | [查看](https://github.com/NousResearch/hermes-agent/issues/147594) |
| #89656 | 5 | **[功能请求] 通知声音更大 + 音量控制** | [查看](https://github.com/NousResearch/hermes-agent/issues/89656) |

### 深层需求分析

**1. Linux 平台 GPU 性能** (#154701) — 在 Linux 上使用独立显卡运行 Hermes Desktop 的用户，最小化窗口进行流式传输时会遇到剧烈的电源循环（0%↔100% 锯齿状波动）。这表明渲染循环在合成器可见性状态变化时存在效率问题。用户需要的是无论窗口焦点如何变化，桌面端都能稳定、静音运行。

**2. 会话连续性** (#150614) — 用户通过 `session_reset` 恢复对话时，新消息会"消失"，因为 UI 错误地显示了父对话。这破坏了多轮对话的工作流和会话记忆——而这正是 agent 型助手最核心的使用场景。

**3. 配置完整性** (#147594) — CLI 配置往返逻辑在重新排序列表项时会丢失引号语义。拥有复杂 `skills.external_dirs` 配置的用户面临静默数据损坏的风险。

**4. 桌面端用户体验** (#89656) — 通知声音太轻，难以听清，迫使用户不得不将系统音量调到不舒服的程度。这是自 2026 年 8 月以来长期存在的 ergonomics 问题。

---

## 5. Bug 与稳定性

### 安全问题（P1 级）

| Issue | 标题 | 严重程度 | 状态 | 修复 PR？ |
|---|---|---|---|---|
| [#151735](https://github.com/NousResearch/hermes-agent/issues/151735) | 纯文本 "yes" 可绕过斜杠命令审批门禁 | **P1** | 开放 | 无 |

**详情：** 启用斜杠命令门控后，用户可以通过回复纯文本 "yes" 来批准被拦截的操作，无需正确的管理员授权。这完全绕过了 `_check_slash_access` 防护机制。

### 安全问题（P2-P3 级）

| Issue | 标题 | 涉及组件 | 修复 PR |
|---|---|---|---|
| [#154609](https://github.com/NousResearch/hermes-agent/issues/154609) | 密钥源缓存使用 `Path.resolve()` 而非 `hermes_home_key()` 作为键 | cli, mcp | — |
| [#154589](https://github.com/NousResearch/hermes-agent/pull/154589) | 非映射类型的 `kanban` 配置段静默扩大了 dispatch profile 的作用域 | cli, cron | [#154589](https://github.com/NousResearch/hermes-agent/pull/154589) ✓ |
| [#154561](https://github.com/NousResearch/hermes-agent/pull/154561) | Discord/Matrix/Slack 机器人用户被标记为非机器人 | gateway, discord, slack, matrix | [#154561](https://github.com/NousResearch/hermes-agent/pull/154561) ✓ |
| [#154664](https://github.com/NousResearch/hermes-agent/pull/154664) | Satellite 的 webhook/操作缺少路由级别的隔离 | gateway, platforms | [#154664](https://github.com/NousResearch/hermes-agent/pull/154664) ✓ |

### 关键功能缺陷（P2 级）

| Issue | 标题 | 领域 | 修复 PR |
|---|---|---|---|
| [#154701](https://github.com/NousResearch/hermes-agent/issues/154701) | Linux 上流式传输到隐藏窗口时 GPU 锯齿状飙至 100% | desktop, streaming | — |
| [#150614](https://github.com/NousResearch/hermes-agent/issues/150614) | session_reset 续接时绑定到父 chat_id | gateway, sessions | — |
| [#146475](https://github.com/NousResearch/hermes-agent/issues/146475) | ACP PromptResponse 报告的是会话累计 token 数（重复计数） | acp, billing | — |
| [#150307](https://github.com/NousResearch/hermes-agent/issues/150307) | openai-codex 配置下 kanban worker 始终无法启动（Managed worker 丢失：EOFError） | gateway, kanban | — |
| [#146035](https://github.com/NousResearch/hermes-agent/issues/146035) | Bot-relay 邮箱根路径在不同 profile 间存在歧义 | gateway, profiles | — |
| [#82690](https://github.com/NousResearch/hermes-agent/issues/82690) | 辅助异步缓存在驱逐客户端时未关闭传输层 | agent, tools | — |
| [#107949](https://github.com/NousResearch/hermes-agent/issues/107949) | Desktop composer 遮盖了 per-model 的 `reasoning_overrides` 配置 | desktop, agent | — |
| [#146973](https://github.com/NousResearch/hermes-agent/issues/146973) | Kanban 在卡片已完成时仍写入错误的 `timed_out` 事件 | cli, kanban | — |

### 修复进展中的亮点

| PR | 描述 | 影响 |
|---|---|---|
| [#154772](https://github.com/NousResearch/hermes-agent/pull/154772) | macOS 应用字节码写入签名包问题 | 签名完整性 |
| [#154698](https://github.com/NousResearch/hermes-agent/pull/154698) | 在减弱透明度模式下移除静态 mask-image 渐变 | 120Hz 下降低 45% CPU 占用 |
| [#154649](https://github.com/NousResearch/hermes-agent/pull/154649) | 通过 askpass helper 传递 sudo 密码 | 凭据安全 |
| [#154788](https://github.com/NousResearch/hermes-agent/pull/154788) | 中继上传支持非 Latin-1 文件名 | 国际化支持 |

---

## 6. 功能请求与路线图信号

### 高互动功能请求

| Issue | 标题 | 评论数 | 采纳可能性信号 |
|---|---|---|---|
| [#89656](https://github.com/NousResearch/hermes-agent/issues/89656) | 通知声音更大 + 音量控制 | 5 | **高** — 长期存在，需求清晰 |
| [#154352](https://github.com/NousResearch/hermes-agent/issues/154352) | 为自定义 OpenAI 兼容提供商设置 per-model reasoning-effort 上限 | 3 | **中** — 与现有 effort-ladder 体系契合 |
| [#142950](https://github.com/NousResearch/hermes-agent/issues/142950) | 移动端发起跨设备群聊 | 2 | **中** — 多设备一致性 |
| [#113330](https://github.com/NousResearch/hermes-agent/issues/113330) | 允许 agent 在审批卡片上附加意图说明 | 3 | **中** — 提升人机信任 |

### 新插件/集成信号

| PR | 插件 | 描述 |
|---|---|---|
| [#154789](https://github.com/NousResearch/hermes-agent/pull/154789) | **MeetStream** | Zoom、Google Meet、Teams 会议机器人 — 战略价值高 |
| [#153607](https://github.com/NousResearch/hermes-agent/pull/153607) | **rea-video-hermes** | 逐帧视频逆向工程 |

### 近期重点预测

基于 PR 流量和 issue 模式，预计团队将重点推进：
1. **安全加固** — 多项 P2-P3 安全修复正在推进，暗示一轮安全专项冲刺
2. **桌面端稳定性** — macOS 性能问题（#154698）、包完整性（#154772）、GPU 问题（#154701）
3. **Kanban 可靠性** — Worker 启动失败和虚假状态转换问题亟待解决
4. **多 profile 正确性** — Bot relay、插件解析、profile 作用域相关 bug 贯穿全栈

---

## 7. 用户反馈摘要

### 痛点

**1. 桌面端可靠性**
> 用户反馈桌面应用在 Linux 上引发 GPU 不稳定（锯齿状 0↔100% 波动），在 macOS 上造成严重 CPU 占用（120Hz 下达 45%）。这些并非边缘案例——而是导致长时间使用时应用完全不可用的回归问题。

**2. 会话与对话连续性**
> 通过 `session_reset` 或崩溃后恢复会话时，会出现数据完整性问题——消息消失、对话显示错误。这破坏了用户对 agent 记忆和持久上下文的信任。

**3. 配置脆弱性**
> 包含外部目录、插件设置和 kanban profile 的复杂 CLI 配置在往返过程中可能静默损坏。用户报告的是难以察觉的静默数据丢失，直到后续才发现问题。

**4. 计费与 Token 追踪**
> ACP token 报告采用会话累计制而非 per-prompt，在恢复会话时产生重复计数。这对计量付费部署有直接的业务影响。

### 积极信号

- **新插件生态活力** — MeetStream 和 rea-video-hermes 表明外部贡献者正在基于 Hermes 构建生态
- **跨平台扩展** — Matrix reply-to-mode 和 Telegram bug 清理表明平台一致性在持续改善
- **安全意识** — 多项安全修复由核心团队和社区共同推进

---

## 8. 积压事项关注

### 长期未响应的重要 Issue

| Issue | 存在时长 | 标题 | 优先级 | 需要关注 |
|---|---|---|---|---|
| [#82690](https://github.com/NousResearch/hermes-agent/issues/82690) | 约 3 个月 | 辅助异步缓存在驱逐客户端时未关闭传输层 | P2 | 缓存/资源管理 |
| [#89656](https://github.com/NousResearch/hermes-agent/issues/89656) | 约 3 个月 | 通知声音更大 + 音量控制 | P3 | 用户体验优化 |
| [#103184](https://github.com/NousResearch/hermes-agent/issues/103184) | 约 2 个月 | session_search 静默隐藏全文搜索匹配结果 | P2 | 搜索可靠性 |
| [#107949](https://github.com/NousResearch/hermes-agent/issues/107949) | 约 2 个月 | Desktop composer 遮盖 per-model 推理覆盖配置 | P2 | 配置优先级 |
| [#113330](https://github.com/NousResearch/hermes-agent/issues/113330) | 约 2 个月 | 允许 agent 在审批卡片上附加意图说明 | P3 | 人机信任 |
| [#121974](https://github.com/NousResearch/hermes-agent/pull/121974) | 约 2 个月 | 为 Comet、BrowserOS、Vivaldi、Opera、Yandex 添加浏览器识别 | P2 | PR 待审核 |

### 需要维护者审核的 PR

| PR | 存在时长 | 标题 | 风险标记 |
|---|---|---|---|
| [#120385](https://github.com/NousResearch/hermes-agent/pull/120385) | 约 2 个月 | Matrix reply_to_mode 功能 | 风险-消息投递, 风险-兼容性 |
| [#121974](https://github.com/NousResearch/hermes-agent/pull/121974) | 约 2 个月 | 扩展浏览器识别范围 | — |
| [#66636](https://github.com/NousResearch/hermes-agent/pull/66636) | 约 4 个月 | 保留路径感知的文件 glob | 风险-兼容性, 爆炸范围可控 |
| [#149235](https://github.com/NousResearch/hermes-agent/pull/149235) | 约 1 周 | 报告因 URL 安全检查而被拦截的技能下载 | — |
| [#152426](https://github.com/NousResearch/hermes-agent/pull/152426) | 约 3 天 | 将 profile 文件操作移出事件循环 | — |

### 雷达项目

- **Telegram bug 清理** (#152380) — 339 个已识别 bug 中仍有 207 个开放；跟踪工作需要持续投入
- **多 profile 插件安装** (#154627) — 社区标记为"有意为之"，但需要确认/文档化
- **安全：逐轮污染追踪** (#147969) — 在读取不可信内容后请求审批升级的深层架构需求

---

*本速报数据来源：NousResearch/hermes-agent 于 2026-11-13 的活动记录。数据范围：24 小时内 50 条 issue、50 条 PR 更新。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me carefully translate the content while following the rules:

1. Only output the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, usernames, issue numbers, etc. verbatim
4. Use natural technical Chinese

Let me translate section by section:

Title and date:
# IronClaw 项目摘要
**日期：** 2026年11月13日
**仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

Section 1: Overview
1. 今日概览

IronClaw 在2026年11月13日的过去24小时内仅有一条 issue 更新记录，合并或关闭的 PR 数量为零。项目当前没有处于开放或活跃状态的 PR，说明开发活动处于相对平静的阶段。没有发布新版本，issue 队列也仅有唯一一条活跃条目，聚焦于 CI/CD 工作流的安全加固。综合来看，项目可能处于维护或规划阶段，而非活跃的功能开发期。

Section 2: Releases
2. 版本发布

**今日无新版本发布。**

近期项目未进入活跃的版本发布周期。建议生产环境用户继续使用最新的可用版本。

Section 3: Project Progress
3. 项目进展

| 指标 | 数量 |
|------|------|
| PR 合并/关闭（24小时内） | 0 |
| Issue 关闭（24小时内） | 0 |

过去24小时内没有 PR 被合并或关闭。项目开发速度似乎处于停滞状态，这一报告周期内没有代码变更或贡献被集成到代码库中。

Section 4: Community Hot Topics
4. 社区热点

### 最活跃的讨论

| Issue | 详情 |
|-------|------|
| **[#8170]** | **ci: add GitHub's workflow lockfile (actions.lock), two pins to refresh first** |
| | 作者: [coconux3](https://github.com/coconux3) · 创建时间: 2026-11-13 · 状态: **OPEN** |
| | 评论: 0 · 反应: 0 |
| | [在 GitHub 上查看](https://github.com/nearai/ironclaw/issues/8170) |

**分析:** 此 issue 代表了项目 CI/CD 基础设施的安全优化方向。发起者指出工作流目前基本已通过 commit SHA 固定到指定版本，他们将这个过程称为"困难的部分"。该提案旨在引入 GitHub 的工作流依赖锁定文件机制作为工作流安全配置的下一阶段目标。

Issue 中说明了当前存在的阻碍因素。这一话题反映出社区对 CI/CD 安全最佳实践日益重视，尤其是对可复现且防篡改构建环境的追求。

### Bugs & Stability

**今日未报告任何缺陷或回归问题。**

没有缺陷报告意味着项目稳定性良好。当前没有需要关注的活跃稳定性问题。

### Feature Requests & Roadmap Signals

**今日未记录任何功能请求。**

鉴于活动有限，无法根据今日的社区输入判断即将推出的功能或路线图优先级。唯一的问题（#8170）聚焦于基础设施安全优化，而非面向用户的功能特性。

### User Feedback Summary

**今日未收到通过 issue 或 PR 的直接用户反馈。**

社区参与度有限，难以评估用户满意度或从过去24小时内识别痛点。鼓励用户提供反馈或分享使用体验的用户通过开启 issue 或参与现有讨论来联系我们。

### Backlog Watch

### 需要维护者关注的 Issue

| Issue | 存在时间 | 状态 | 摘要 |
|-------|--------|------|------|
| [#8170](https://github.com/nearai/ironclaw/issues/8170) | 新增（今日） | 开放 | CI 工作流锁文件实现提案 |

**评估:** 队列中仅有这一个 issue，且是今日新开，说明积压工作中没有长期未回复的项目。但维护者应审查 [Issue #8170](https://github.com/nearai/ironclaw/issues/8170)，确认已收到这条安全改进提案并评估作者提到的阻碍因素。

---

*报告结束 — 基于 2026-11-13 的 GitHub 活动数据生成*
</think>


# IronClaw 项目摘要

**日期：** 2026年11月13日
**仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日概览

IronClaw 在2026年11月13日的过去24小时内仅有一条 issue 更新记录，合并或关闭的 PR 数量为零。项目当前没有处于开放或活跃状态的 PR，说明开发活动处于相对平静的阶段。没有发布新版本，issue 队列也仅有唯一一条活跃条目，聚焦于 CI/CD 工作流的安全加固。综合来看，项目可能处于维护或规划阶段，而非活跃的功能开发期。

---

## 2. 版本发布

**今日无新版本发布。**

近期项目未进入活跃的版本发布周期。建议生产环境用户继续使用最新的可用版本。

---

## 3. 项目进展

| 指标 | 数量 |
|------|------|
| PR 合并/关闭（24小时内） | 0 |
| Issue 关闭（24小时内） | 0 |

过去24小时内没有 PR 被合并或关闭。项目开发速度似乎处于停滞状态，这一报告周期内没有代码变更或贡献被集成到代码库中。

---

## 4. 社区热点

### 最活跃的讨论

| Issue | 详情 |
|-------|------|
| **[#8170]** | **ci: add GitHub's workflow lockfile (actions.lock), two pins to refresh first** |
| | 作者：[coconux3](https://github.com/coconux3) · 创建时间：2026-11-13 · 状态：**OPEN** |
| | 评论：0 · 反应：0 |
| | [在 GitHub 上查看](https://github.com/nearai/ironclaw/issues/8170) |

**分析：** 此 issue 代表了项目 CI/CD 基础设施的安全优化方向。作者指出工作流已在几乎所有位置通过 commit SHA 固定，他称之为"困难的部分"。该提案旨在引入 GitHub 的 workflow dependency lockfile 作为下一步安全加固措施。Issue 中提到了目前阻碍实现的因素。这一话题反映了社区对 CI/CD 安全实践的日益关注，特别是对可复现、防篡改构建环境的追求。

---

## 5. 缺陷与稳定性

**今日无缺陷或回归问题报告。**

缺陷报告的缺失是项目稳定性的积极信号。当前没有需要关注的活跃稳定性问题。

---

## 6. 功能请求与路线图信号

**今日无功能请求。**

鉴于活动有限，无法基于今日社区输入就即将推出的功能或路线图优先级作出判断。唯一的问题（#8170）聚焦于基础设施加固，而非面向用户的功能。

---

## 7. 用户反馈摘要

今日未记录通过 issue 或 PR 形式的直接用户反馈。

社区参与度有限，难以评估用户满意度或从过去24小时中识别痛点。鼓励有反馈意见或使用体验分享需求的用户通过新建 issue 或参与现有讨论来联系我们。

---

## 8. 积压工作关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 状态 | 摘要 |
|-------|--------|------|------|
| [#8170](https://github.com/nearai/ironclaw/issues/8170) | 新增（今日） | Open | CI 工作流锁文件实现提案 |

**评估：** 积压工作中仅有一条 issue 且为今日新建，未出现长期无人响应的条目。但维护者应查阅 [Issue #8170](https://github.com/nearai/ironclaw/issues/8170)，确认已了解该安全改进提案并评估作者提及的阻碍因素。

---

*摘要结束 — 基于 2026-11-13 的 GitHub 活动数据生成*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me go through the document and translate it carefully, following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate section by section:

---

# QwenPaw Project Digest — 2026-11-13

**Repository:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**Generated by:** AI Analyst Agent

---

## 1. Today's Overview

QwenPaw continues to show high development velocity on the eve of its v2.3.0 stable release (dropped 2026-11-11). Today's snapshot captures the project in a **regression-correction phase**: 22 issues and 50 PRs were updated in the last 24 hours, with 5 issues closed and 13 PRs merged/closed. The community is actively stress-testing 2.3.0 and filing bugs related to channel plugins, attachment handling, authentication, and sandbox stability. New contributor PRs are flowing in, covering 8 distinct first-time contributors today. Overall health is **good but busy** — the project is absorbing a significant post-release bug influx while still advancing new features (plugin CLI commands, plugin marketplace updates, channel transport hardening).

---

# QwenPaw 项目日报 — 2026-11-13

**仓库地址：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**生成方：** AI 分析师 Agent


---

## 1. 今日概览

QwenPaw 在 v2.3.0 正式版发布前夕（2026-11-11）依然保持着高强度的开发节奏。今日快照显示项目正处于**回归修正阶段**：过去 24 小时内有 22 个 issues 和 50 个 PRs 活跃更新，其中 5 个 issues 已关闭，13 个 PRs 已合并/关闭。社区正在积极压力测试 2.3.0 版本，提交了涉及 channel 插件、附件处理、身份验证和沙箱稳定性等方面的 bug 报告。新贡献者的 PR 持续涌入，今日涉及 8 位不同的首次贡献者。总体健康状况为**良好但繁忙**——项目在吸收大量发布后 bug 涌入的同时，仍在推进新功能（插件 CLI 命令、插件市场更新、channel 传输加固）。

## 2. 版本发布

**今日无新版本发布。** 最新的版本是 **v2.3.0**（2026-11-11）。今日数据中未发现 changelog 或发布说明。从早期版本升级的用户遇到了兼容性问题（详见下方"Bug 与稳定性"部分），维护者正在通过 PR 修复而非发布补丁版本来解决这些问题。

## 3. 项目进展

### 已合并/关闭的 PRs（13 个）

| # | 标题 | 作者 | 领域 |
|---|-------|--------|--------|
| [#8691](https://github.com/agentscope-ai/QwenPaw/pull/8691) | fix(console): refresh completed sessions and show favicon status | zhaozhuang521 | 控制台 |
| [#8704](https://github.com/agentscope-ai/QwenPaw/pull/8704) | fix(install): use the selected PyPI mirror when seeding the venv | shu-chen-dot-ca | 安装 |
| [#8703](https://github.com/agentscope-ai/QwenPaw/pull/8703) | fix(sandbox): probe Landlock without requiring securityfs | log-z | 沙箱 |
| [#8702](https://github.com/agentscope-ai/QwenPaw/pull/8702) | fix(cron): record a gate-terminated run as an error | MAOLVLHL | Cron |
| [#8701](https://github.com/agentscope-ai/QwenPaw/pull/8701) | fix(loop): record tool calls appended to one reply message | weweeeeee | 循环检测 |

### 审查中的 PRs（当前活跃推进）

| # | 标题 | 作者 | 规模 | 状态 |
|---|-------|--------|------|--------|
| [#8699](https://github.com/agentscope-ai/QwenPaw/pull/8699) | feat(channels): add plugin updates, version guards, and official marketplace releases | Luohh5 | XXL | Open |
| [#8694](https://github.com/agentscope-ai/QwenPaw/pull/8694) | feat(xiaoyi): add optional streaming and harden channel transport | hongxicheng | XXL | Open |
| [#8673](https://github.com/agentscope-ai/QwenPaw/pull/8673) | fix(community): community Optimization add github link & emoji | yuluo1007 | XXL | Open |
| [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588) | fix(memory): OpenViking follow-up cleanup, compatibility, and shutdown fixes | xypang33-sketch | XXL | Open |
| [#8671](https://github.com/agentscope-ai/QwenPaw/pull/8671) | feat(console): reconnect externally started chat runs | zhijianma | L | Open |
| [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) | fix(console): repair CJK emphasis boundaries in chat Markdown | BeiMu-new | L | Under Review |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) | feat(plugins): support CLI commands and extension points | Leirunlin | XXXL | Open |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | fix(ollama): size context window from num_ctx instead of 128k default | Li-john1021 | XL | Under Review |

**进展指标：**
- **插件生态**正在快速推进——CLI 支持（#8554）和市场/更新基础设施（#8699）均为大型 PR。
- 昨天发现的循环门 bug 已被多位贡献者修复（#8701、#8702、#8700）。
- **内存系统**后续工作（#8588）表明该项目在 2.3.0 发布后仍在持续投入。
- 今日有 3 个 PR 来自首次贡献者，表明项目在贡献者培养方面表现良好。

---

## 4. 社区热点

### 最活跃的 Issues（按评论数排序）

| # | 标题 | 评论数 | 类型 | 关键信息 |
|---|-------|----------|------|-------------|
| [#2306](https://github.com/agentscope-ai/QwenPaw/issues/2306) | 定时任务 Memory 文件被中断 | 12 | Question | 定时任务的内存操作不稳定，生产环境中控制台会被中断 |
| [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix channel plugin fails with 3 workspaces | 6 | Bug | 2.3.0b2 破坏了多工作区 Matrix 配置——共享启动窗口是单实例的 |
| [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | Feishu channel CHANNEL_NOT_CONNECTED on every start | 5 | Bug | Channel 插件启动竞态条件，将断开连接状态视为致命错误 |
| [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) | Context control failure → task interruption | 5 | Bug | 大请求（252k+ tokens）的上下文压缩失败，无优雅降级 |
| [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) | Memory tag index 503 — never rebuilds | 5 | Bug | `auto_memory_generate_tags=true` 生成标签但索引不可读，返回 503 |
| [#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184) | Doom-loop gate kills legitimate polling | 4 | Bug | 循环检测无法区分卡住的智能体和等待长时间任务的智能体 |
| [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) | Auto Memory Search → repeated memory_search → silent failure | 4 | Bug | 第 4 次相同查询触发去重，但后续回复生成失败 |

**需求分析：** 头部问题的核心主题是**生产环境下的可靠性**：定时任务、channel 启动、上下文窗口和内存索引都暴露了系统在理想情况下稳定但在并发、大输入或多工作区场景下脆弱的问题。社区正在有效地对 2.3.0 升级路径进行压力测试。

---

## 5. Bug 与稳定性

### 高危（阻塞核心功能）

| # | 标题 | 严重性 | 修复 PR? |
|---|-------|----------|---------|
| [#8698](https://github.com/agentscope-ai/QwenPaw/issues/8698) | Upgrade to 2.3.0 fails: `uv venv --seed` ignores PyPI mirror | 🔴 Critical | [#8704](https://github.com/agentscope-ai/QwenPaw/pull/8704) ✅ 已合并 |
| [#8695](https://github.com/agentscope-ai/QwenPaw/issues/8695) | Same-host reverse proxy bypasses API auth in 2.3.0 | 🔴 Critical | 暂无 |
| [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) | Attachment path truncated to `C:\` since 2.3.0-beta.1 | 🔴 Critical | 暂无 |
| [#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682) | Official channel plugins crash on Linux (missing HOME) | 🔴 Critical | 暂无 |
| [#8693](https://github.com/agentscope-ai/QwenPaw/issues/8693) | WeChat channel fails with ACCOUNT_IN_USE on every start | 🔴 Critical | 暂无 |

### 中危（功能降级）

| # | 标题 | 严重性 | 修复 PR? |
|---|-------|----------|---------|
| [#8696](https://github.com/agentscope-ai/QwenPaw/issues/8696) | Attachments fail when workspace path contains `#` | 🟡 Medium | 暂无 |
| [#8688](https://github.com/agentscope-ai/QwenPaw/issues/8688) | Tilde-comma in Python heredocs aborts deep path inspection | 🟡 Medium | 暂无 |
| [#8684](https://github.com/agentscope-ai/QwenPaw/issues/8684) | Upgrade doesn't migrate built-in channel plugins; Matrix stays on old source | 🟡 Medium | 暂无 |
| [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) | Context length exceeded → task interruption (no graceful fallback) | 🟡 Medium | 暂无 |
| [#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706) | Creation Assistant input lags on every keystroke (no memoization) | 🟡 Medium | 暂无 |
| [#8705](https://github.com/agentscope-ai/QwenPaw/issues/8705) | Cron task token usage not written to turns.jsonl → incomplete billing | 🟡 Medium | 暂无 |

### 低危

| # | 标题 | 严重性 | 修复 PR? |
|---|-------|----------|---------|
| [#8674](https://github.com/agentscope-ai/QwenPaw/issues/8674) | Query error dumps generate full JSON snapshots with no cleanup | 🟢 Low | 暂无 |
| [#8686](https://github.com/agentscope-ai/QwenPaw/issues/8686) | Plugins need documented data directory and destructive-op audit | 🟢 Low | 暂无 |

**稳定性评估：** v2.3.0（2026-11-11）引入了 channel 插件（微信、飞书、Matrix）、附件路径处理和安装流程的回归。2 个高危 bug（#8698、#8695）具有安全影响（安装失败和认证绕过）。维护者响应迅速——安装源镜像 bug 已在 24 小时内合并。然而，认证绕过（#8695）和路径截断（#8655）缺少修复 PR，应优先处理。

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| # | 标题 | 作者 | 领域 | 纳入可能性 |
|---|-------|--------|--------|-------------------------|
| [#8686](https://github.com/agentscope-ai/QwenPaw/issues/8686) | Documented plugin data directory + destructive file operation audit | BeiMu-new | Plugin System | 🟡 Medium — 解决第三方插件安全性 |
| [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605) | Browser tab title follows current session name | jamie9797 | Console UX | 🟢 High — 今日已合并（#8691 涵盖 favicon 状态） |
| [#8694](https://github.com/agentscope-ai/QwenPaw/pull/8694) | Add optional streaming to xiaoyi channel + harden transport | hongxicheng | Channels | 🟢 High — 大型 PR 审查中 |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) | Plugin CLI commands and extension points | Leirunlin | Plugin System | 🟢 High — XXXL PR 推进中 |
| [#8699](https://github.com/agentscope-ai/QwenPaw/pull/8699) | Channel plugin updates, version guards, marketplace | Luohh5 | Plugin System | 🟢 High — 基础设施 PR |
| [#8671](https://github.com/agentscope-ai/QwenPaw/pull/8671) | Reconnect externally started chat runs in Console | zhijianma | Console | 🟢 High — 积极开发中 |

**路线图信号：** 项目明确在三个方向持续投入：（1）**插件生态成熟度**（CLI、市场、版本更新基础设施）、（2）**channel 可靠性**（流式传输、传输加固、多工作区支持）、（3）**控制台 UX**（会话重连、标签页标题、CJK Markdown 渲染）。DoomLoopGate 和内存系统正在持续收 bug，表明这些是高价值功能在 2.3.0 后持续稳定化。

---

## 7. 用户反馈总结

### 痛点

1. **升级阻力（#8698）：** 非 PyPI 镜像环境（如国内部署）的用户因 `uv venv --seed` 使用默认源下载而无法升级到 2.3.0。这阻断了所有 2.3.0 改进的采用。
2. **2.3.0 后 channel 不稳定：** 多位用户报告自 2.3.0 起微信（#8693）、飞书（#8669）和 Matrix（#8538）channel 在每次启动时都会失败。这是目前最明显的回归问题簇。
3. **附件处理回归（#8655、#8696）：** 带特殊字符（`#`）的附件或 Windows 路径上的文件附件已损坏。上传文档或图片的用户无法在对话中访问它们。
4. **内存系统不可靠（#8580、#8361）：** 自动内存标签生成和搜索功能产生 503 错误和重复查询陷阱。依赖内存辅助工作流的用户被阻塞。
5. **循环门误报（#8184）：** 使用合法长轮询智能体的高级用户的任务被末日循环检测终止。门禁无法区分卡住的智能体和有意等待的智能体。

### 正面信号

- 功能请求 #8605（标签页标题）被快速采纳并合并，表明对 UX 反馈的响应性。
- 社区正在提交高度详细的 bug 报告，包含复现步骤、环境信息和根因假设（如 #8695 的认证绕过分析、#8682 的 HOME 目录追踪）。
- 首次贡献者活跃在多个子系统（安装、沙箱、cron、循环），表明文档和引导工作良好。

---

## 8. 待处理事项

需要维护者关注但在过去 24-48 小时内没有任何更新或回复的 Issues 和 PRs：

| # | 标题 | 存在时间 | 状态 | 关注点 |
|---|-------|-----|--------|---------|
| [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) | Context control failure causing task interruption | ~26 天 | Open | 无修复 PR；对大型代码库的高级用户影响大 |
| [#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184) | Doom-loop gate kills legitimate polling | ~32 天 | Open | 循环检测设计存在概念分歧；需要架构决策 |
| [#8674](https://github.com/agentscope-ai/QwenPaw/issues/8674) | Query error dumps generate unbounded JSON snapshots | ~2 天 | Open | 低严重性，但长期运行的部署有磁盘空间风险 |
| [#8686](https://github.com/agentscope-ai/QwenPaw/issues/8686) | Plugin data directory documentation request | ~1 天 | Open | 第三方插件安全性；尚无维护者回复 |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) | Plugin CLI commands (XXXL PR) | ~10 天 | Open | 大型 PR；需要全面审查以在下一版本前合并 |
| [#8018](https://github.com/agentscope-ai/QwenPaw/pull/8018) | fix(sandbox): never write sandbox ACE on volume root | ~45 天 | Under Review | Windows ACL 回归风险；需要最终审查 |
| [#8048](https://github.com/agentscope-ai/QwenPaw/pull/8048) | fix(security): guard Office COM automation | ~44 天 | Under Review | 安全修复待处理；应优先考虑 |

**待处理项优先级：**
1. **#8695** — 同主机反向代理的认证绕过是安全问题，需要立即审查。
2. **#8655** — Windows 附件路径截断阻塞核心文件功能。
3. **#8184** — 循环门设计需要维护者回复以打破讨论僵局。
4. **#8236** — Ollama 上下文窗口大小已审查 30 天；做出决定可以填补本地模型用户的空白。

---

*日报结束。所有 GitHub 链接均指向 `https://github.com/agentscope-ai/QwenPaw`。*</think>



</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese, maintaining the exact Markdown structure, tables, formatting, and technical precision. I need to use natural Chinese technical register while preserving all the original content exactly - just translating the prose. Let me carefully translate each section.
</think>


# ZeroClaw 项目简报 — 2026-11-13

## 1. 今日概览

ZeroClaw 今日继续保持高活跃度，过去 24 小时内共有 50 条 issue 和 50 条 PR 有更新，社区参与度十分强劲。项目正积极推进 **v0.9.1** 版本，安全性、稳定性与功能开发三条主线同步推进。当前存在若干关键阻塞项：一条 RUSTSEC 安全公告正在导致每次构建的 CI 安全门禁失败，阻止一切合并操作。路线图以 RFC 驱动的架构工作为核心（文件系统沙箱策略、有线协议优先设计、离线执行模式），同时社区正在解决 Windows 兼容性缺口与多租户安全功能问题。

---

## 2. 发布情况

**今日无新版本发布。**

项目当前围绕 **v0.9.1** 制定路线图，该版本需完成的工作项见 issue #7432：
- Runtime 与仪表盘登录完成
- Gateway 交付里程碑
- OIDC 标准主体与入站认证（#8289）
- ZeroRelay 原生传输就绪（#8358）
- x86_64 Linux 二进制包体积管理（#11580）

---

## 3. 项目进展

### 今日合并/关闭的 PR
*（基于 PR 数据中 "merged/closed: 4"）*

今日合并的 PR 未在快照中详细列出，但近期合并的工作包括：
- **#11082** — 合并了 OIDC 注册、gateway、private-memory 及迁移相关切片
- **#8633** — 组件supervisor 退避策略（解决了 WSL2 重启风暴的根本原因）
- **#10248、#10255、#10259、#10263、#10265** — OIDC 栈各组件独立 PR

### 活跃功能推进情况

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 每个 provider 配置文件中支持多模型 | XL | 待作者处理 |
| [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879) | Goal V1：休眠配置与命令语法 | XL | 待合并 |
| [#11878](https://github.com/zeroclaw-labs/zeroclaw/pull/11878) | Goal Mode：持久化任务生命周期基础设施 | XL | 待合并 |
| [#12258](https://github.com/zeroclaw-labs/zeroclaw/pull/12258) | `sessions_prompt` 工具：跨 agent 会话提示 | XL | 待合并 |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | 标准化 sandbox_policy schema | XL | 待合并 |
| [#12408](https://github.com/zeroclaw-labs/zeroclaw/pull/12408) | 作用域化 HTTP 凭证管理 | XL | 今日新增 |
| [#12197](https://github.com/zeroclaw-labs/zeroclaw/pull/12197) | Telegram 媒体字幕与语音路径处理 | XL | 待合并 |
| [#12406](https://github.com/zeroclaw-labs/zeroclaw/pull/12406) | Parallel 作为网络搜索 provider | S | 今日新增 |

---

## 4. 社区热点

### 讨论最活跃的 Issue

| Issue | 标题 | 评论数 | 核心主题 |
|-------|------|--------|---------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC：细粒度沙箱策略 — 文件系统限制 | 29 | 应用层与系统层沙箱安全架构趋于收敛 |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 上 74 个测试失败 | 19 | 跨平台兼容性危机；Unix 路径语义在 Windows 上断裂 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC：将有线协议提升为一等公民 | 19 | Provider 接入流程与架构现代化 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Runtime、仪表盘登录与 Gateway 交付追踪器 | 17 | v0.9.1 发布协调 |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 统一 providers 架构与 reqwest 客户端 | 12 | 代码重复与模型构造不一致 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 多租户部署的按发送方 RBAC | 12 | agent 交接场景下的身份与访问管理 |

### 深层需求分析

1. **跨平台一致性**：Issue #7462 暴露出 CI 仅在 Linux 上运行测试，导致 Windows 用户面临 74 个测试失败。项目成熟度提升过程中，这一用户体验缺口日益显著。

2. **安全架构统一**：RFC #6996 旨在协调历史上"逐步分化"的各层文件系统策略——这是一项具有安全影响的技术债务。

3. **多租户隔离**：多个 issue（#5982、#7743、#8279）共同揭示了委托工具白名单执行与 RBAC 作用域方面的缺口。

4. **Provider 生态扩展**：订阅原生认证（#5601）、多模型支持（#9809）及新 provider 接入等工作表明生态需求正在增长。

---

## 5. Bug 与稳定性

### 关键阻塞项（P0-P1）

| Issue | 标题 | 严重度 | 状态 | 影响 |
|-------|------|--------|------|------|
| [#12320](https://github.com/zeroclaw-labs/zeroclaw/issues/12320) | 安全任务失败：RUSTSEC-2026-0459（libsqlite3-sys 0.38.2） | S1 | 待处理 | **阻断所有合并** — CI 强制门禁失败，合并队列冻结 |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | 委托方绕过父级工具白名单 | S0 | 已确认 | 安全风险 — 子 agent 可调用被排除的工具 |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool-schema 克隆导致 RSS 无界增长 | P1 | 已确认 | agent 循环中的内存泄漏 |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | rumqttc 依赖有漏洞的 rustls-webpki（RUSTSEC 簇） | P1 | 阻塞中 | MQTT 安全漏洞 |

### 高优先级 Bug

| Issue | 标题 | 严重度 | 状态 |
|-------|------|--------|------|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | 中途停止 agent 会丢失工具调用与思考过程 | S1 | 处理中 |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | shell/skill_tool 子进程的进程内存限制 | P1 | 处理中 |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | agent 缺少其正在运行的定时任务的上下文 | P2 | 处理中 |

### 依赖/安全问题

| Issue | 标题 | 状态 |
|-------|------|------|
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | wasmtime-wasi CVE — cargo-audit/deny 漂移 | 待处理 |
| [#11853](https://github.com/zeroclaw-labs/zeroclaw/issues/11853) | npm audit 失败（@tailwindcss/typography） | 已关闭 |

---

## 6. 功能需求与路线图信号

### 重大 RFC 进展

| Issue | 标题 | 类型 | 优先级 |
|-------|------|------|--------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 细粒度沙箱策略 | RFC | P2，进行中 |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 有线协议一等公民化 | RFC | P2 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | 离线执行模式 | RFC | P2，阻塞中 |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | 定时任务的确定性前置条件门控 | 功能 | P2 |

### v0.9.1 预期纳入项

基于追踪 issue 与发布标签，v0.9.1 预计包含：
- **OIDC 里程碑** — 标准主体与入站认证（#8289）
- **ZeroRelay 原生传输** — v0.9.0 就绪（#8358）
- **多模型 provider** — #9809（已合并或接近合并）
- **Goal Mode 基础设施** — #11878、#11879（12 部分提案，早期切片）
- **Windows CI 覆盖** — #7461（扩展测试矩阵）

### 社区呼声高、功能推进中有望落地的需求

| Issue | 标题 | 评论数 | 信号 |
|-------|------|--------|------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 按发送方的 RBAC | 12 | 草稿 PR #11068 已存在 |
| [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) | 轮次前工具征询提示 | 6 | RFC #6969 衍生 |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | 订阅原生认证（Ollama Cloud、Z.AI、Kimi、Minimax） | 8 | 生态扩展 |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | 按 skill 的安全权限 | 4 | 作用域化 allow_scripts 需求 |

---

## 7. 用户反馈摘要

### 痛点

1. **Windows 兼容性问题**（#7462）：在 Windows 11 + 简体中文（代码页 936）环境下，用户遭遇 74 个测试失败。Agent 无法从 Telegram 媒体回复中读取文件内容。根本原因：CI 仅在 Linux 上运行测试。

2. **定时任务上下文丢失**（#6105）：响应定时触发事件的 agent 缺少对自身发送消息的引用，导致提醒类场景（agent 应知道自己的计划上下文）无法正常工作。

3. **内存耗尽**（#8642）：MCP tool-schema 克隆导致 RSS 无界增长，在 WSL2 环境中引发 OOM。

4. **委托方工具绕过**（#8279）：一项关键安全缺口——子 agent 可调用父级策略明确排除的工具。

5. **发布包体积压力**（#11580）：x86_64 Linux 二进制包距离 64 MiB 硬上限仅差 0.7 MB，发布门禁令人焦虑。

### 驱动开发的使用场景

- **多租户 agent 部署** — 共享基础设施需要按发送方的 RBAC
- **离线环境** — RFC #6293 面向离线执行场景的配套守护进程
- **跨 agent 协作** — `sessions_prompt` 工具（#12258）支持实况 RPC 会话提示
- **Provider 生态多样化** — 接入 Parallel 网络搜索（#12406）、多模型支持（#9809）

---

## 8. 待办事项关注

### 需维护者关注的长期待处理 Issue

| Issue | 标题 | 时长 | 状态 | 关注点 |
|-------|------|------|------|--------|
| [#3767](https://github.com/zeroclaw-labs/zeroclaw/issues/3767) | 跨渠道关键工具审批需强制 TOTP | 8+ 个月 | 已确认 | 安全策略缺口；4 条评论 |
| [#5601](https://github.com/zeroclaw-labs/zeroclaw/issues/5601) | 订阅原生 provider 认证（4 个 provider） | 7+ 个月 | 已确认 | 生态阻塞；8 条评论 |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | 确定性前置条件门控 | 7+ 个月 | 已确认 | 定时任务可靠性；6 条评论 |
| [#5775](https://github.com/zeroclaw-labs/zeroclaw/issues/5775) | 按 skill 的安全权限 | 7+ 个月 | 已确认 | 多租户隔离；4 条评论 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | 离线执行模式 | 6+ 个月 | 阻塞中 | 需架构决策 |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) | rumqttc 安全公告 | 6+ 个月 | 阻塞中 | 依赖更新瓶颈 |
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | 统一 providers 架构 | 7+ 个月 | 已确认 | 技术债务；PR #9809 涉及 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 按发送方的 RBAC | 7+ 个月 | 已确认 | 草稿 #11068 已存在 |

### 待审查/处理的 PR

| PR | 标题 | 规模 | 等待方 |
|----|------|------|--------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 每个 provider 支持多模型 | XL | 待作者处理 |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | 标准化 sandbox_policy schema | XL | 待审查 |
| [#12197](https://github.com/zeroclaw-labs/zeroclaw/pull/12197) | Telegram 媒体字幕 | XL | 待审查 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 有界委托工作区策略 | XL | 待作者处理 |
| [#11633](https://github.com/zeroclaw-labs/zeroclaw/pull/11633) | ZeroCode 本地文件路径 | XL | 待维护者审查 |

---

*生成时间：2026-11-13 | 数据来源：github.com/zeroclaw-labs/zeroclaw*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*