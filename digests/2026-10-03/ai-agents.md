# OpenClaw 生态日报 2026-10-03

> Issues: 493 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-03 01:22 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the OpenClaw Project Digest into Simplified Chinese, following the specific rules provided. Let me translate while:

1. Preserving ALL Markdown structure exactly
2. Keeping all URLs, issue/PR numbers, version tags, file paths, etc. as-is
3. Using natural technical Chinese register
4. Outputting ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through and translate section by section:

---

# OpenClaw 项目简报 — 2026-10-03

## 今日概览

OpenClaw 继续保持极高活动度，过去 24 小时内 **493 个 issue** 和 **500 个 PR** 均有更新。项目保持着强劲的参与度——155 个 issue 已关闭，207 个 PR 已合并/关闭。**v2026.8.35** 作为 `extended-stable`（相当于 LTS）网关专用构建发布，标志着向生产部署更保守的发布周期的转变。多个关键的 P0/P1 缺陷仍然活跃，特别是在内存管理、会话稳定性和 Gateway 崩溃方面。维护团队正在积极推进重构工作——多个"deslop"PR 针对网关和 agent 核心的重复状态和冗余代码进行清理。

## 版本发布

### v2026.8.35 — Gateway 专用 extended-stable 版本

这是一个 **Gateway 专用** 版本，被标记为 `extended-stable`，相当于当前的 LTS 版本。包括：

- 基于 2026 年 8 月底的 OpenClaw 版本
- 关键安全更新
- 可靠性和性能修复
- 新模型支持功能

**迁移注意**：这是 Gateway 专用包；客户端和插件应保持在当前版本，除非明确指示。此稳定版本未宣布重大变更。

🔗 [版本详情](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35)

## 项目进展

### 今日合并/关闭的 PR（精选）

| PR | 标题 | 状态 |
|----|-----|------|
| [#163905](https://github.com/openclaw/openclaw/pull/163905) | ci: pin the OpenClaw Bun fork 13311 prerelease | ✅ 已关闭 |
| [#163605](https://github.com/openclaw/openclaw/pull/163605) | refactor(sessions): move async durable transcript reads off the Gateway thread | ✅ 已关闭 |
| [#163838](https://github.com/openclaw/openclaw/pull/163838) | fix: restore MIT license detection | ✅ 已关闭 |
| [#163805](https://github.com/openclaw/openclaw/pull/163805) | fix(test): keep subprocess fixtures consistent across Node and Bun | ✅ 已关闭 |
| [#163807](https://github.com/openclaw/openclaw/pull/163807) | fix(agents): prevent shared SQLite stores in model-switch tests | ✅ 已关闭 |
| [#163806](https://github.com/openclaw/openclaw/pull/163806) | fix(codex): restore catalog lint checks | ✅ 已关闭 |
| [#163804](https://github.com/openclaw/openclaw/pull/163804) | fix: put QuickJS plugin mascot on white | ✅ 已关闭 |
| [#163789](https://github.com/openclaw/openclaw/pull/163789) | ci: use Blacksmith for default fork lint checks | ✅ 已关闭 |
| [#159514](https://github.com/openclaw/openclaw/pull/159514) | Bug: catalog worker rebuilds discovery registry on nearly every request | ✅ 已关闭 |
| [#143196](https://github.com/openclaw/openclaw/pull/143196) | fix(codex): transcribe voice notes in bound conversations | ✅ 已关闭 |

### 关键进展

- **会话性能**：转录加载已从 Gateway 线程移出 (#163605)，解决了压缩和重置钩子期间的事件循环阻塞问题
- **Provider 重构**：大规模 provider 系列清理 (#163827)，移除了传输、凭据暂存和目录投影的重复代码
- **macOS 应用清理**：macOS 应用重构中移除了约 1,000 行净生产代码 (#163892)
- **Gateway/Agent Deslop**：在 79 个生产文件中移除了 1,007 行净生产代码 (#163919)
- **测试基础设施**：多个 Bun 兼容性修复 (#163805) 和许可证检测修复 (#163838)

## 社区热点话题

### 评论最活跃的 Issue

1. **[#116201](https://github.com/openclaw/openclaw/issues/116201)** — **实时语音工作可能保留无限制的 provider 和咨询状态**（59 条评论）
   - *严重程度：P2 | 影响范围：会话状态*
   - 实时语音会话保留已过时的咨询工作、大型 provider 帧以及缓慢/突发条件下的预就绪音频
   - **核心需求**：长时间语音会话的资源管控

2. **[#144911](https://github.com/openclaw/openclaw/issues/144911)** — **MCP 服务器初始化超时导致 Gateway 崩溃**（31 条评论，已关闭）
   - *严重程度：P1 | 影响范围：崩溃循环*
   - 当 stdio MCP 服务器在 30 秒内初始化失败时，子进程清理路径中的未处理 promise 拒绝
   - **核心需求**：MCP 集成的健壮超时和清理处理

3. **[#102175](https://github.com/openclaw/openclaw/issues/102175)** — **嵌入提示缓存跨越 room-event、policy 和 Responses 边界时失效**（21 条评论）
   - *严重程度：P2 | 影响范围：安全*
   - 长生命周期的嵌入会话在回合跨越各种边界时失去提示缓存重用
   - **核心需求**：会话状态转换间的缓存一致性

4. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — **OpenClaw 泄漏未回收的钩子/工具子进程**（17 条评论）
   - *严重程度：P1 | 影响范围：消息丢失*
   - 钩子/工具执行产生的僵尸进程累积，随时间推移降低运行时性能
   - **核心需求**：正确的子进程生命周期管理

5. **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — **2026.3.2 版本中 gemini-3.1-pro 出现"无法将 undefined 或 null 转换为对象"**（17 条评论）
   - *严重程度：P0 | 影响范围：用户体验-发布阻塞*
   - 使用 Google Vertex 的嵌入 agent 所有消息都中断的回归问题
   - **核心需求**：Provider 兼容性测试

### 受到关注的活跃 PR

| PR | 标题 | 状态 |
|----|-----|------|
| [#163919](https://github.com/openclaw/openclaw/pull/163919) | refactor(gateway): deslop gateway and agent core | 👀 等待维护者审核 |
| [#163827](https://github.com/openclaw/openclaw/pull/163827) | refactor(providers): deslop provider family | 👀 等待维护者审核 |
| [#163916](https://github.com/openclaw/openclaw/pull/163916) | refactor(media): deslop media generation and understanding | 👀 等待维护者审核 |
| [#163917](https://github.com/openclaw/openclaw/pull/163917) | improve(qa): verify deferred Codex tool discovery | ⏳ 等待作者 |
| [#162759](https://github.com/openclaw/openclaw/pull/162759) | fix(webhooks): preserve callbacks while retiring implicit ports | 👀 等待维护者审核 |

## 缺陷与稳定性

### 关键/高严重性缺陷（P0-P1）

| Issue | 标题 | 严重程度 | 状态 | 修复 PR？|
|-------|------|----------|------|----------|
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway 崩溃：状态数据库读取密封 → "Worker 环境清单已关闭" → 未处理的拒绝 | P0 | 开启 | 否 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动时间随启用的插件数量线性增长 | P0 | 开启 | 否 |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | 主会话回合期间 Gateway V8 堆内存溢出；重启恢复导致崩溃循环 | P0 | 开启 | 否 |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | prepared-model-catalog worker 每 5 分钟泄漏约 1 GiB | P1 | 开启 | 否 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源捕获每次 CLI 命令重写 1.1–1.4 GB（SSD 损耗） | P1 | 开启 | 否 |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite 争用导致约 33 秒的事件循环阻塞 | P1 | 开启 | 否 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 回归：Gemini 出现"无法将 undefined 或 null 转换为对象" | P0 | 开启 | 否 |
| [#161953](https://github.com/openclaw/openclaw/issues/161953) | Windows：sessions.create 失败并显示"发布者不再是当前所有者" | P0 | 已关闭 | 是 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP 服务器初始化超时导致 Gateway 崩溃 | P1 | 已关闭 | — |

### 关键观察

- **内存问题占主导**：多个 P0/P1 问题涉及堆内存溢出、目录 worker 内存泄漏和无限制资源保留
- **会话稳定性问题**：多个问题涉及会话重放循环、重启恢复失败和转录处理
- **平台特定缺陷**：Windows 特定的会话创建失败 (#161953) 已修复；macOS 应用启动循环问题持续存在 (#115256)
- 2026.9.x 版本中的回归簇影响启动时间、目录 worker 行为和会话创建

## 功能请求与路线图信号

### 值得注意的功能请求

1. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — **每个 agent 的 dream 配置**（12 条评论，5 👍）
   - 允许对每个 agent 控制 memory-core dream，而不是同时处理
   - **可能性**：中等 — 解决实际内存峰值问题；符合当前内存系统工作

2. **[#103198](https://github.com/openclaw/openclaw/issues/103198)** — **WebChat 图片附件未映射到 media store 路径**（8 条评论，3 👍）
   - 图片工具收到 "image_0" 而不是实际文件路径
   - **可能性**：高 — 简单的修复，影响用户体验

3. **[#91804](https://github.com/openclaw/openclaw/issues/91804)** — **2026.6.5 中的内部推理泄漏**（8 条评论，1 👍）
   - 隐私/用户体验回归，向用户暴露内部 agent 推理
   - **可能性**：高 — 安全/隐私问题，可能被优先处理

### 路线图信号

- **Extended-stable 发布模式**：v2026.8.35 作为 LTS 等效版本表明双轨发布策略（快速创新 + 稳定长期支持）
- **重构重点**：多个"deslop"PR 表明系统性清理阶段，可能为未来功能工作做准备
- **Provider 整合**：provider 系列重构 (#163827) 表明多扩展支持的统一——新 provider 可能更容易添加

## 用户反馈总结

### 痛点

1. **内存与资源管理**
   - "prepared-model-catalog worker 每 5 分钟泄漏约 1 GiB" (#160548)
   - "插件源捕获每次 CLI 命令重写约 1.1–1.4 GB" (#157989) — 用户报告 SSD 损耗担忧
   - "主会话回合期间 Gateway V8 堆内存溢出" (#115424)

2. **会话与状态稳定性**
   - "Matrix 房间 agent 可能在可见的无回复输出上循环" (#114211)
   - "Windows：sessions.create 始终失败" (#161953) — 现已修复
   - "Telegram DM 回复在过时的 DM 范围清理后回退" (#111519)

3. **回归挫败感**
   - 多名用户在 2026.9.x 升级后报告问题 (#155859, #159514)
   - Control UI 缺少导航到功能页 (#108182)
   - "内部推理泄漏" (#91804) — 隐私问题

### 积极信号

- Windows 会话创建修复快速响应 (#161953)
- 积极重构减少代码重复（主要清理中移除 1,000+ 行）
- Bun 兼容性改进扩展测试基础设施选项

## 待办关注

### 长期未回复的重要 Issue

| Issue | 标题 | 时长 | 评论数 | 状态 |
|-------|------|------|--------|------|
| [#114414](https://github.com openclaw/openclaw/issues/114414) | Dated TODO sweep | 2026-07-27 | 11 | 开启 |
| [#53783](https://github.com/openclaw/openclaw/issues/53783) | Telegram group: cross-agent sessions_list visibility mismatch | 2026-03-24 | 9 | 开启 |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | memory-lancedb memory_store not exposed as callable tool | 2026-05-19 | 7 | 开启 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after container restart | 2026-07-27 | 7 | 开启 |

### 需要维护者关注的 PR

| PR | 标题 | 状态 |
|----|-----|------|
| [#160338](https://github.com/openclaw/openclaw/pull/160338) | perf(lint): bound selected core checker working sets | ⏳ 等待作者 |
| [#150992](https://github.com/openclaw/openclaw/pull/150992) | fix(onboard): reruns overwrite trusted-proxy authentication | ⏳ 等待作者 |
| [#145850](https://github.com/openclaw/openclaw/pull/145850) | fix(agents): ignore empty stream heartbeats as model progress | ⏳ 等待作者 |
| [#148066](https://github.com/openclaw/openclaw/pull/148066) | fix(daemon): avoid premature recovery failure during launchd throttling | 👀 等待维护者审核 |

---

*基于 OpenClaw GitHub 数据生成 — 2026-10-03*</think>

# OpenClaw 项目简报 — 2026-10-03

## 今日概览

OpenClaw 继续保持极高活动度，过去 24 小时内 **493 个 issue** 和 **500 个 PR** 均有更新。项目保持着强劲的参与度——155 个 issue 已关闭，207 个 PR 已合并/关闭。**v2026.8.35** 作为 `extended-stable`（相当于 LTS）网关专用构建发布，标志着向生产部署更保守的发布周期的转变。多个关键的 P0/P1 缺陷仍然活跃，特别是在内存管理、会话稳定性和 Gateway 崩溃方面。维护团队正在积极推进重构工作——多个"deslop"PR 针对网关和 agent 核心的重复状态和冗余代码进行清理。

---

## 版本发布

### v2026.8.35 — Gateway 专用 extended-stable 版本

这是一个 **Gateway 专用** 版本，被标记为 `extended-stable`，相当于当前的 LTS 版本。包括：

- 基于 2026 年 8 月底的 OpenClaw 版本
- 关键安全更新
- 可靠性和性能修复
- 新模型支持功能

**迁移注意**：这是 Gateway 专用包；客户端和插件应保持在当前版本，除非明确指示。此稳定版本未宣布重大变更。

🔗 [版本详情](https://github.com/openclaw/openclaw/releases/tag/v2026.8.35)

---

## 项目进展

### 今日合并/关闭的 PR（精选）

| PR | 标题 | 状态 |
|----|-----|------|
| [#163905](https://github.com/openclaw/openclaw/pull/163905) | ci: pin the OpenClaw Bun fork 13311 prerelease | ✅ 已关闭 |
| [#163605](https://github.com/openclaw/openclaw/pull/163605) | refactor(sessions): move async durable transcript reads off the Gateway thread | ✅ 已关闭 |
| [#163838](https://github.com/openclaw/openclaw/pull/163838) | fix: restore MIT license detection | ✅ 已关闭 |
| [#163805](https://github.com/openclaw/openclaw/pull/163805) | fix(test): keep subprocess fixtures consistent across Node and Bun | ✅ 已关闭 |
| [#163807](https://github.com/openclaw/openclaw/pull/163807) | fix(agents): prevent shared SQLite stores in model-switch tests | ✅ 已关闭 |
| [#163806](https://github.com/openclaw/openclaw/pull/163806) | fix(codex): restore catalog lint checks | ✅ 已关闭 |
| [#163804](https://github.com/openclaw/openclaw/pull/163804) | fix: put QuickJS plugin mascot on white | ✅ 已关闭 |
| [#163789](https://github.com/openclaw/openclaw/pull/163789) | ci: use Blacksmith for default fork lint checks | ✅ 已关闭 |
| [#159514](https://github.com/openclaw/openclaw/pull/159514) | Bug: catalog worker rebuilds discovery registry on nearly every request | ✅ 已关闭 |
| [#143196](https://github.com/openclaw/openclaw/pull/143196) | fix(codex): transcribe voice notes in bound conversations | ✅ 已关闭 |

### 关键进展

- **会话性能**：转录加载已从 Gateway 线程移出 (#163605)，解决了压缩和重置钩子期间的事件循环阻塞问题
- **Provider 重构**：大规模 provider 系列清理 (#163827)，移除了传输、凭据暂存和目录投影的重复代码
- **macOS 应用清理**：macOS 应用重构中移除了约 1,000 行净生产代码 (#163892)
- **Gateway/Agent Deslop**：在 79 个生产文件中移除了 1,007 行净生产代码 (#163919)
- **测试基础设施**：多个 Bun 兼容性修复 (#163805) 和许可证检测修复 (#163838)

---

## 社区热点话题

### 评论最活跃的 Issue

1. **[#116201](https://github.com/openclaw/openclaw/issues/116201)** — **实时语音工作可能保留无限制的 provider 和 consult 状态**（59 条评论）
   - *严重程度：P2 | 影响范围：会话状态*
   - 实时语音会话保留已过时的 consult 工作、大型 provider 帧以及缓慢/突发条件下的预就绪音频
   - **核心需求**：长时间语音会话的资源管控

2. **[#144911](https://github.com/openclaw/openclaw/issues/144911)** — **MCP server 初始化超时导致 Gateway 崩溃**（31 条评论，已关闭）
   - *严重程度：P1 | 影响范围：崩溃循环*
   - 当 stdio MCP server 在 30 秒内初始化失败时，子进程清理路径中的未处理 promise 拒绝
   - **核心需求**：MCP 集成的健壮超时和清理处理

3. **[#102175](https://github.com/openclaw/openclaw/issues/102175)** — **embedded prompt cache 跨越 room-event、policy 和 Responses 边界时失效**（21 条评论）
   - *严重程度：P2 | 影响范围：安全*
   - 长生命周期的 embedded 会话在 turn 跨越各种边界时失去 prompt-cache 重用
   - **核心需求**：会话状态转换间的缓存一致性

4. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — **OpenClaw 泄漏未回收的 hook/tool 子进程**（17 条评论）
   - *严重程度：P1 | 影响范围：消息丢失*
   - Hook/tool 执行产生的僵尸进程累积，随时间推移降低运行时性能
   - **核心需求**：正确的子进程生命周期管理

5. **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — **2026.3.2 版本中 gemini-3.1-pro 出现"Cannot convert undefined or null to object"**（17 条评论）
   - *严重程度：P0 | 影响范围：用户体验-发布阻塞*
   - 使用 Google Vertex 的 embedded agent 所有消息都中断的回归问题
   - **核心需求**：Provider 兼容性测试

### 受到关注的活跃 PR

| PR | 标题 | 状态 |
|----|-----|------|
| [#163919](https://github.com/openclaw/openclaw/pull/163919) | refactor(gateway): deslop gateway and agent core | 👀 等待维护者审核 |
| [#163827](https://github.com/openclaw/openclaw/pull/163827) | refactor(providers): deslop provider family | 👀 等待维护者审核 |
| [#163916](https://github.com/openclaw/openclaw/pull/163916) | refactor(media): deslop media generation and understanding | 👀 等待维护者审核 |
| [#163917](https://github.com/openclaw/openclaw/pull/163917) | improve(qa): verify deferred Codex tool discovery | ⏳ 等待作者 |
| [#162759](https://github.com/openclaw/openclaw/pull/162759) | fix(webhooks): preserve callbacks while retiring implicit ports | 👀 等待维护者审核 |

---

## 缺陷与稳定性

### 关键/高严重性缺陷（P0-P1）

| Issue | 标题 | 严重程度 | 状态 | 修复 PR？|
|-------|------|----------|------|----------|
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway 崩溃：state DB read-admission seal → "Worker environment inventory has closed" → unhandled rejection | P0 | Open | 否 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动墙钟时间随启用的插件数量增长 | P0 | Open | 否 |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | 主会话 turn 期间 Gateway V8 堆 OOM；restart-recovery 创建崩溃循环 | P0 | Open | 否 |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | prepared-model-catalog worker 每 5 分钟泄漏约 1 GiB | P1 | Open | 否 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件 source capture 每个 CLI 命令重写 1.1–1.4 GB（SSD 损耗） | P1 | Open | 否 |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite 争用导致约 33 秒事件循环阻塞 | P1 | Open | 否 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 回归：Gemini 出现"Cannot convert undefined or null to object" | P0 | Open | 否 |
| [#161953](https://github.com/openclaw/openclaw/issues/161953) | Windows：sessions.create 失败并显示"publication owner is no longer current" | P0 | Closed | 是 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init timeout 崩溃 Gateway | P1 | Closed | — |

### 关键观察

- **内存问题占主导**：多个 P0/P1 问题涉及堆 OOM、目录 worker 内存泄漏和无限制资源保留
- **会话稳定性问题**：多个问题涉及会话 replay 循环、restart recovery 失败和 transcript 处理
- **平台特定缺陷**：Windows 特定的会话创建失败 (#161953) 已修复；macOS app 启动循环问题持续存在 (#115256)
- 2026.9.x 版本中的回归簇影响启动时间、目录 worker 行为和会话创建

---

## 功能请求与路线图信号

### 值得注意的功能请求

1. **[#67413](https://github.com/openclaw/openclaw/issues/67413)** — **Per-agent dreaming 配置**（12 条评论，5 👍）
   - 允许对每个 agent 控制 memory-core dreaming，而不是同时处理
   - **可能性**：中等 — 解决实际内存峰值问题；符合当前内存系统工作

2. **[#103198](https://github.com/openclaw/openclaw/issues/103198)** — **WebChat 图片附件未映射到 media store 路径**（8 条评论，3 👍）
   - 图片 tool 收到 "image_0" 而不是实际文件路径
   - **可能性**：高 — 简单的修复，影响用户体验

3. **[#91804](https://github.com/openclaw/openclaw/issues/91804)** — **2026.6.5 中的内部 Reasoning 泄漏**（8 条评论，1 👍）
   - 隐私/用户体验回归，向用户暴露内部 agent reasoning
   - **可能性**：高 — 安全/隐私问题，可能被优先处理

### 路线图信号

- **Extended-stable 发布模式**：v2026.8.35 作为 LTS 等效版本表明双轨发布策略（快速创新 + 稳定长期支持）
- **重构重点**：多个"deslop"PR 表明系统性清理阶段，可能为未来功能工作做准备
- **Provider 整合**：provider 系列重构 (#163827) 表明多扩展支持的统一——新 provider 可能更容易添加

---

## 用户反馈总结

### 痛点

1. **内存与资源管理**
   - "prepared-model-catalog worker 每 5 分钟泄漏约 1 GiB" (#160548)
   - "插件 source capture 每个 CLI 命令重写约 1.1–1.4 GB" (#157989) — 用户报告 SSD 损耗担忧
   - "主会话 turn 期间 Gateway V8 堆 OOM" (#115424)

2. **会话与状态稳定性**
   - "Matrix 房间 agents 可能在可见的无回复输出上循环" (#114211)
   - "Windows：sessions.create 始终失败" (#161953) — 现已修复
   - "Telegram DM 回复在 stale DM-scope 清理后回退" (#111519)

3. **回归挫败感**
   - 多名用户在 2026.9.x 升级后报告问题 (#155859, #159514)
   - Control UI 缺少导航到功能页 (#108182)
   - "内部 Reasoning 泄漏" (#91804) — 隐私问题

### 积极信号

- Windows sessions.create 修复快速响应 (#161953)
- 积极重构减少代码重复（主要清理中移除 1,000+ 行）
- Bun 兼容性改进扩展测试基础设施选项

---

## 待办关注

### 长期未回复的重要 Issue

| Issue | 标题 | 时长 | 评论数 | 状态 |
|-------|------|------|--------|------|
| [#114414](https://github.com/openclaw/openclaw/issues/114414) | Dated TODO sweep | 2026-07-27 | 11 | Open |
| [#53783](https://github.com/openclaw/openclaw/issues/53783) | Telegram group: cross-agent sessions_list visibility mismatch | 2026-03-24 | 9 | Open |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | memory-lancedb memory_store not exposed as callable tool | 2026-05-19 | 7 | Open |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | Usage-cost refresh lock never releasable after container restart | 2026-07-27 | 7 | Open |

### 需要维护者关注的 PR

| PR | 标题 | 状态 |
|----|-----|------|
| [#160338](https://github.com/openclaw/openclaw/pull/160338) | perf(lint): bound selected core checker working sets | ⏳ 等待作者 |
| [#150992](https://github.com/openclaw/openclaw/pull/150992) | fix(onboard): reruns overwrite trusted-proxy authentication | ⏳ 等待作者 |
| [#145850](https://github.com/openclaw/openclaw/pull/145850) | fix(agents): ignore empty stream heartbeats as model progress | ⏳ 等待作者 |
| [#148066](https://github.com/openclaw/openclaw/pull/148066) | fix(daemon): avoid premature recovery failure during launchd throttling | 👀 等待维护者审核 |

---

*基于 OpenClaw GitHub 数据生成 — 2026-10-03*

---

## 横向生态对比

<think>The user wants me to translate this cross-project comparison report from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
4. Issue/PR references like #12345 stay as-is
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the exact structure and keeping all technical identifiers in their original form.

Let me go through it section by section:

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem is experiencing intense development activity across multiple projects, each tackling the core challenge of enabling autonomous agentic behavior with varying architectural philosophies.

个人AI助手与智能体开源生态系统正处于高度活跃的开发阶段，多个项目各自采用不同的架构理念，核心目标都是实现自主智能体行为。

"OpenClaw" dominates in sheer activity volume, while "Hermes Agent" and "ZeroClaw" maintain steady high-velocity development.

OpenClaw在活动量上遥遥领先，而Hermes Agent和ZeroClaw保持着稳定的高频开发节奏。

The landscape shows a clear split between provider-agnostic frameworks (OpenClaw, Hermes Agent) targeting multi-model orchestration, and integrated solutions (QwenPaw, ZeroClaw) focused on specific deployment contexts.

当前生态呈现出明显的分化：OpenClaw、Hermes Agent等provider无关框架致力于多模型编排，而QwenPaw、ZeroClaw等集成方案则聚焦特定部署场景。

Notably, all actively-maintained projects are addressing similar cross-cutting concerns: memory/resource management, session stability, security hardening, and multi-instance collaboration — suggesting these are the critical unsolved problems the industry is collectively tackling.


值得注意的是，所有活跃维护的项目都在处理类似的横切关注点：内存/资源管理、会话稳定性、安全加固和多实例协作——这些正是行业共同面临的关键未解难题。

Now looking at the activity comparison table across different projects. The data tracks issues and PRs updated over 24 hours, along with release frequency and engagement metrics like issue close rates and open items. OpenClaw shows the highest activity with 493 issues and 500 PRs updated daily, though it has a moderate close rate of 31%. In contrast, Hermes Agent has 50 issues and PRs updated, with a lower 22% close rate but similar open volumes. The pattern continues with QwenPaw and ZeroClaw showing progressively lower activity levels but varying close rates, with ZeroClaw having the lowest issue closure rate at just 6%. This suggests varying development priorities and team capacities across the ecosystem.

Looking at OpenClaw specifically, its ~10x activity volume compared to peers indicates the largest active developer community and user base. The introduction of an `extended-stable` (LTS-equivalent) track with v2026.8.35 demonstrates a more mature release strategy compared to peers still on rapid-iteration models. OpenClaw's extensive provider family refactoring (#163827) suggests deeper multi-provider support than Hermes Agent's focused approach. Additionally, the "deslop" initiative — removing 1,000+ production lines across gateway/agent core — signals commitment to long-term maintainability.

In terms of technical differentiation, OpenClaw uses a gateway-centric architecture with MCP integration, while Hermes Agent follows a daemon-first design. ZeroClaw emphasizes security hardening (identity/access control) as a core differentiator; OpenClaw prioritizes session reliability and memory management. QwenPaw is the only project with a desktop-first deployment model (Tauri-based).

Across all projects, several technical challenges emerge as common priorities: resource management appears in OpenClaw's OOM issues and catalog worker leaks, Hermes Agent's FTS5 corruption, ZeroClaw's subprocess watchdog. Session and state persistence is a universal concern—transcript handling and replay loops in OpenClaw, SQLite contention and state.db issues in Hermes, conversation page access in QwenPaw, and directory regression in ZeroClaw. Cross-instance collaboration is becoming increasingly important, with Hermes Agent's cross-gateway bots, QwenPaw's cross-instance agents, and OpenClaw's MCP server integration all addressing this need.

Security hardening is another shared focus, particularly around MCP timeout crashes, Copilot token protection, password authentication, and key storage. Mobile and responsive UI development is more selective—QwenPaw leads here with mobile drawer and console adaptation work. Provider routing complexity appears across multiple projects, from embedded prompt caches to provider fallback logic, provider caps, and Ollama/llama.cpp controls.

Looking at differentiation, the target audiences vary significantly: OpenClaw serves developers building multi-agent systems, Hermes Agent appeals to AI engineers needing precise control, QwenPaw targets end-users wanting local-first AI capabilities, and ZeroClaw focuses on teams requiring secure enterprise deployment. Their core architectures reflect these priorities—OpenClaw emphasizes gateway orchestration and MCP integration, Hermes Agent prioritizes daemon-based runtime, QwenPaw leads with WebUI-first desktop experience, and ZeroClaw centers on security-first daemon with ZeroCode DSL.

Looking at activity tiers, OpenClaw operates at rapid iteration with aggressive refactoring and dual-release tracks (rapid + LTS), while Hermes Agent and ZeroClaw maintain steady 50 PRs daily with RFC-driven governance. QwenPaw focuses on UX improvements and mobile adaptation despite lower volume, and IronClaw appears dormant. OpenClaw shows the most maturity through its LTS release track, systematic code cleanup via "deslop," and large community. ZeroClaw has operational RFC governance and advanced security hardening, Hermes Agent has active community engagement despite less formal governance, and QwenPaw is still emerging.

The critical insight is that resource governance—memory leaks, OOM conditions, and unbounded retention—is the primary unsolved challenge across all platforms. Multi-agent collaboration is emerging as a major competitive feature, with OpenClaw's MCP server integration, Hermes Agent's cross-gateway bots, QwenPaw's cross-instance agents, and ZeroClaw's A2A protocol all racing to deliver this capability.

Security is shifting from optional to baseline—ZeroClaw's password authentication, Hermes Agent's Copilot token fixes, and OpenClaw's extended-stable releases all reflect this maturation. User-facing reliability consistently outweighs feature velocity, as duplicate messages, regression bugs, and access failures generate disproportionate complaint volume. Platform-specific issues—Windows DLL locks, macOS restores, Linux/FTS5 corruption—continue to create outsized friction despite their apparent simplicity.</think>

# 跨项目对比：个人AI助手与智能体开源生态

## 1. 生态概览

个人AI助手与智能体开源生态系统正处于高度活跃的开发阶段，多个项目各自采用不同的架构理念，核心目标都是实现自主智能体行为。**OpenClaw**在活动量上遥遥领先，而**Hermes Agent**和**ZeroClaw**保持着稳定的高频开发节奏。当前生态呈现出明显的分化：OpenClaw、Hermes Agent等provider无关框架致力于多模型编排，而QwenPaw、ZeroClaw等集成方案则聚焦特定部署场景。值得注意的是，所有活跃维护的项目都在处理类似的横切关注点：内存/资源管理、会话稳定性、安全加固和多实例协作——这些正是行业共同面临的关键未解难题。

---

## 2. 活动对比

| 项目 | Issue更新 (24h) | PR更新 (24h) | Release (24h) | Issue关闭率 | 开放Issue | 开放PR |
|---------|---------------------|-------------------|----------------|-----------------|-------------|----------|
| **OpenClaw** | 493 | 500 | 1 | 31% (155/493) | 338 | 293 |
| **Hermes Agent** | 50 | 50 | 0 | 22% (11/50) | 39 | 38 |
| **IronClaw** | 0 | 0 | 0 | N/A | — | — |
| **QwenPaw** | 10 | 12 | 0 | 0% (0/10) | 10 | 5 |
| **ZeroClaw** | 50 | 50 | 0 | 6% (3/50) | 47 | 48 |

---

## 3. OpenClaw的定位

**相对优势：**

- **社区规模**：OpenClaw 24小时内493个issue + 500个PR的更新量约为同行的10倍，表明其拥有最活跃的开发者社区和用户基础
- **发布节奏成熟度**：v2026.8.35版本引入`extended-stable`（类LTS）分支，展示了比仍处于快速迭代阶段的同行更成熟的发布策略
- **provider覆盖广度**：OpenClaw正在进行的大规模provider家族重构（#163827）表明其多provider支持深度优于Hermes Agent的聚焦策略
- **代码质量投入**："deslop"倡议——从gateway和agent核心中移除超过1000行生产代码——表明其对长期可维护性的承诺

**技术路线差异：**
- OpenClaw采用**gateway中心架构** + MCP集成；Hermes Agent采用**daemon优先**设计
- ZeroClaw将**安全加固**（身份认证/访问控制）作为核心差异化；OpenClaw优先关注**会话可靠性**和**内存管理**
- QwenPaw是唯一采用**桌面优先**部署模式的项目（Tauri内核）

---

## 4. 共同技术关注点

### 多项目涌现的需求

| 关注领域 | OpenClaw | Hermes | QwenPaw | ZeroClaw | 说明 |
|------------|----------|--------|---------|----------|-------|
| **内存/资源管理** | ✅ P0 OOM问题、catalog worker泄漏 | ✅ FTS5损坏、Chrome泄漏 | — | ✅ 子进程监控 | 全平台关键问题 |
| **会话/状态稳定性** | ✅ Transcript处理、回放循环 | ✅ SQLite竞争、state.db问题 | ✅ 对话页面访问 | ✅ ZeroCode目录回归 | 持久化可靠性是普遍需求 |
| **跨实例协作** | — | ✅ 跨gateway机器人 | ✅ 跨实例Agent | — | 高需求功能正在涌现 |
| **安全加固** | ✅ MCP超时崩溃 | — | — | ✅ 密码认证、密钥保护 | 企业级需求正在成熟 |
| **移动端/响应式UI** | — | — | ✅ 移动端抽屉、控制台适配 | — | 桌面/Web客户端正在适配移动端 |
| **provider路由** | ✅ 内嵌prompt缓存 | ✅ provider/model回退逻辑 | ✅ provider上限 | ✅ Ollama/llama.cpp控制 | 多provider复杂性共通 |

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|-------------|---------|----------|
| **目标用户** | 构建多智能体系统的开发者 | 需要精细控制的AI工程师 | 想要本地优先AI的终端用户 | 需要安全企业部署的团队 |
| **核心架构焦点** | Gateway编排 + MCP | 基于daemon的智能体运行时 | WebUI优先的桌面客户端 | 安全优先的daemon + ZeroCode DSL |
| **部署模式** | 自托管，gateway中心 | 自托管，daemon优先 | 桌面应用（Tauri） | 自托管，容器化 |
| **差异化特性** | provider家族整合、"deslop"重构 | 跨gateway机器人协作 | Monaco语言支持（游戏开发） | RFC治理流程、A2A协议crate |
| **平台侧重** | 跨平台（Windows、macOS、Linux） | 跨平台，Docker重点 | 桌面优先（Web + Tauri） | Linux服务器 + Windows支持 |

---

## 6. 社区活力与成熟度

### 活动分层

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw | 高频迭代（500 PRs/24h）、激进重构、双发布分支（rapid + LTS） |
| **稳定开发** | Hermes Agent、ZeroClaw | 稳定的50 PRs/24h、RFC驱动治理、聚焦里程碑目标 |
| **功能打磨** | QwenPaw | 低频但有意义的UX改进、移动端适配进行中 |
| **休眠** | IronClaw | 24小时内无活动——状态不明 |

### 成熟度指标

- **OpenClaw**：最成熟——LTS发布分支、系统性代码清理（"deslop"）、大型社区
- **ZeroClaw**：RFC治理流程已运作，安全加固走在前列
- **Hermes Agent**：活跃但治理流程较不那么正式；社区参与度高（热门issue有33条评论）
- **QwenPaw**：新兴阶段；桌面优先但仍需解决稳定性问题

---

## 7. 趋势信号

### 从社区反馈中提炼的行业趋势

1. **资源治理是头号未解难题**
   - 每个项目都报告内存泄漏、OOM条件或无限制的资源保留问题
   - 子进程监控、内存守护和上下文缓存都是活跃的工作项

2. **多智能体/多实例协作正在成为主要功能竞赛**
   - OpenClaw：MCP服务器集成实现工具协作
   - Hermes Agent：跨gateway机器人协作（#97681，33条评论）
   - QwenPaw：跨实例Agent通信（#8080）
   - ZeroClaw：A2A协议crate RFC（#11254）

3. **安全加固正从可选变为基准**
   - ZeroClaw的密码认证、花名册验证、Windows密钥保护
   - Hermes Agent针对Copilot token回退的安全修复
   - OpenClaw的extended-stable版本包含"关键安全更新"

4. **用户可见的可靠性优先于功能速度**
   - 桌面端重复消息（#122167 Hermes）、回归bug（#11387 ZeroClaw）、对话页面访问失败产生的投诉音量不成比例
   - 关闭率较高的项目（OpenClaw 31%）响应似乎更及时

5. **平台特定bug造成不成比例的摩擦**
   - Windows DLL锁、macOS快照恢复、Linux/FTS5损坏——平台可靠性仍是持续痛点

### 对AI智能体开发者的价值

| 信号 | 启示 |
|--------|-------------|
| 所有项目都在关注内存/资源管理 | 避免嵌入长期运行的子进程；实现明确的资源限制 |
| 会话状态持久化问题 | 为崩溃恢复设计；避免单点故障状态 |
| 跨实例协作需求旺盛 | 从一开始就规划多智能体编排 |
| 全生态都在进行安全加固 | 假设企业用户需要身份认证/访问控制 |
| RFC治理（ZeroClaw、Hermes） | 及早参与设计讨论以影响上游 |

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all the headings, content, and table text
2. Keep the Markdown structure exactly as-is (tables, lists, headings, etc.)
3. Keep technical terms, URLs, issue numbers, code references as-is
4. Use natural technical Chinese register

Let me go through each section and translate it while maintaining the structure.</think>

# Hermes Agent 项目简报 — 2026-10-03

## 1. 今日概览

Hermes Agent 过去 24 小时内保持高强度的开发活动，共更新了 50 个 issue 和 50 个 PR。项目维持着健康的比例：39 个 open issue 对比 11 个 closed，38 个 open PR 对比 12 个 merged/closed。社区参与度高，跨网关机器人协作成为最热话题，同时多个平台特定 bug（尤其是 Windows 和 macOS）正在接受重点关注。桌面客户端稳定性仍是需要关注的问题区域，重复消息渲染和会话状态问题在多个报告中反复出现。

---

## 2. 版本发布

**无新版本发布** — 过去 24 小时内项目未发布任何版本。

---

## 3. 项目进展

### 今日合并/关闭的 PR（12 个）

| PR | 标题 | 风险 | 状态 |
|----|------|------|------|
| #90981 | fix(tests): handle windows signal compatibility in live system guard guarded_kill | — | Closed |
| #90577 | fix(process_registry): make _worker_memory_max_bytes cross-platform | — | Closed |
| #70528 | feat(gemini): support native context caching (cachedContents) | — | Closed |

**值得注意的合并 PR：**
- **#70528** — 为大系统提示词添加了 Gemini 上下文缓存支持（40k+ tokens），关闭了 #29818 和 #70554
- **#90981** — 修复了 Windows 测试套件中的 `WinError 87` 关闭崩溃问题
- #90577 — 进程注册表的跨平台内存检测（处理了 Windows 上缺失的 `os.sysconf`）

### 推进中的活跃 PR（38 个 open）

进行中的关键 PR：
- **#131919** — 批准在 yolo 模式下存活，阻止无人值守的提示词（Cowork 灵感）
- **#131881** — 停止在 Copilot 中使用 gh auth 作为 token 回退（安全修复，风险 0.85）
- **#131895** — 将 Docker 复用限定为不可变配置
- **#131896** — 压缩分叉后看板自动订阅绑定
- **#131917** — 桌面推荐默认值跳过 Anthropic frontier 层

---

## 4. 社区热门话题

### 按评论数排列的最活跃 Issue

| Issue | 标题 | 评论数 | 点赞 |
|-------|------|--------|------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 让机器人在网关间协作 | 33 | 👍 4 |
| [#122167](https://github.com/NousResearch/hermes-agent/issues/122167) | 桌面：消息消失 + 助手回复渲染两次 | 13 | 👍 1 |
| [#123347](https://github.com/NousResearch/hermes-agent/issues/123347) | 群聊 worker 启动：_DeadlockError via frozen_importlib | 9 | — |
| [#124807](https://github.com/NousResearch/hermes-agent/issues/124807) | Windows hermes 更新失败：删除 libcrypto DLL 时报 WinError 5 | 7 | — |
| [#111389](https://github.com/NousResearch/hermes-agent/issues/111389) | [Wave] state.db / WAL 可靠性 — 落地证据风格 | 5 | — |

**分析 — 潜在需求：**

1. **#97681（跨网关机器人协作）** — 这是最突出的功能请求，反映了社区对 Hermes 机器人在不同机器上、甚至不同所有者之间协作的强烈需求。33 条评论表明仍需大量设计讨论。

2. **#122167（桌面重复消息）** — 多个重复渲染问题（#36763、#131775 也有报告）表明桌面客户端存在系统性 bug，可能在显示投影层。这严重影响了用户信任。

3. **#124807 和 #128827（Windows 更新失败）** — Windows 平台特定的更新问题反复出现，表明 Windows 上的 Python 版本管理需要加强。

---

## 5. Bug 与稳定性

### 高优先级（P1）— 活跃中

| Issue | 组件 | 描述 | 修复 PR？ |
|-------|------|------|----------|
| [#131851](https://github.com/NousResearch/hermes-agent/issues/131851) | agent, docker | 非正常容器停止后 FTS5 影子表 B 树结构频繁损坏 | — |
| [#127010](https://github.com/NousResearch/hermes-agent/issues/127010) | cli, sessions | macOS 快照恢复：更新后的 guard 覆盖健康的 state.db；OAuth token 回滚 | — |

### 中优先级（P2）— 活跃中

| Issue | 组件 | 描述 |
|-------|------|------|
| [#122167](https://github.com/NousResearch/hermes-agent/issues/122167) | desktop | 消息消失，助手回复渲染两次（服务端投影 bug）|
| [#131793](https://github.com/NousResearch/hermes-agent/issues/131793) | desktop | 网关抖动后推理芯片卡在"Checking inference" |
| [#118969](https://github.com/NousResearch/hermes-agent/issues/118969) | agent | 回退持久化不可能的 provider:model 组合（xai + deepseek-v4-flash）|
| [#128827](https://github.com/NousResearch/hermes-agent/issues/128827) | cli, windows | Windows 更新失败：轮换 Python 时被锁定的 DLL |
| [#124807](https://github.com/NousResearch/hermes-agent/issues/124807) | cli, windows | Windows hermes 更新失败：删除 libcrypto DLL 时报 WinError 5 |
| [#131822](https://github.com/NousResearch/hermes-agent/issues/131822) | tools, browser | 无进程 agent-browser socket 目录被 rm -rf 但未杀死守护进程 — 泄露的 Chrome 占用 7/10 核心运行 3d10h |
| [#131862](https://github.com/NousResearch/hermes-agent/issues/131862) | cli | rebrand_text 将真实世界字符串重写为不存在的引用 |

### 平台特定稳定性概览
- **Windows：** 4 个活跃 P2 bug（更新失败、DLL 锁定、兼容性）
- **macOS：** 3 个活跃 bug（快照恢复、桌面重复消息）
- **Linux/Docker：** 1 个 P1 bug（非正常停止后的 FTS5 损坏）

---

## 6. 功能请求与路线图信号

### 活跃中的功能请求

| Issue | 组件 | 请求 | 优先级 |
|-------|------|------|--------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | gateway, agent | 机器人在网关间协作（跨机器、跨所有者）| P2 |
| [#91030](https://github.com/NousResearch/hermes-agent/issues/91030) | desktop | 将项目和会话分离为独立的侧边栏部分 | P3 |
| [#131814](https://github.com/NousResearch/hermes-agent/issues/131814) | tools, browser | Vault 集成：处理 Bitwarden allowed_origins 的 Pydantic extra_forbidden | P2 |

**路线图信号：**
- **跨网关协作 (#97681)** 被明确描述为构建"基础"功能，以实现未来的多所有者协调 — 可能是即将发布版本的战略优先项
- **桌面侧边栏重新设计 (#91030)** 表明计划对桌面客户端进行用户体验优化
- Wave 计划针对 **state.db/WAL 可靠性 (#111389)** 表明后端稳定性工作正在进行中

---

## 7. 用户反馈摘要

### 今日报告的痛点

1. **Windows 更新可靠性** — 用户对在 Windows 上更新 Hermes 时反复出现 `WinError 5` 失败感到沮丧；影响日常维护的生产力
2. **桌面消息渲染** — 重复的助手回复和消息消失削弱了用户对桌面客户端会话处理的信任
3. **Provider/Model 回退逻辑** — 不可能的 provider:model 组合在回退后仍然持久化，导致用户混淆实际运行的是哪个模型
4. **内存/资源泄露** — 无头 Chrome 泄露（#131822）导致生产机器连续 3 天 CPU 使用率 70% — 严重的资源影响
5. **看板数据丢失** — 默认看板上任务行的静默删除（#131844）是严重的数据完整性问题

### 满意度信号
- **#97681** 获得 4 个 👍 反应，表明社区对协作功能有强烈热情
- 活跃的 PR 参与度（38 个 open，今日 12 个 closed）表明维护者响应迅速

---

## 8. 待办关注

### 长期未回复的重要 Issue

| Issue | 时长 | 优先级 | 状态 | 关注点 |
|-------|------|--------|------|--------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 约 35 天 | P2 | Open | 功能设计仍在讨论中（33 条评论）— 需要维护者综合 |
| [#111389](https://github.com/NousResearch/hermes-agent/issues/111389) | 约 18 天 | P3 | Open | state.db 可靠性的 Wave 计划 — 可能需要架构审查 |
| [#91030](https://github.com/NousResearch/hermes-agent/issues/91030) | 约 44 天 | P3 | Open | 桌面用户体验增强 — 待优先排序 |

### 需要维护者关注的 Issue

1. **#127010** (P1) — macOS 快照恢复 bug 涉及安全问题；尚无修复 PR
2. **#131851** (P1) — 容器停止后的 FTS5 损坏；数据完整性关键问题
3. **#131822** (P2) — 资源泄露导致严重 CPU 影响；需要根因修复
4. **#128827** (P2) — Windows 更新边缘情况下的 DLL 锁定；需要 Windows 特定调查

---

*简报基于 2026-10-03 的 GitHub 数据生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese. Let me translate the content while:
1. Preserving all Markdown structure exactly
2. Keeping URLs, issue/PR references, usernames, version tags, file paths as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Maintaining all tables, headings, lists, etc.

Let me go through each section carefully:

**1. Today's Overview**
- Translate to Chinese naturally
- Keep all technical terms and references

**2. Releases**
- Simple, translate directly

**3. Project Progress**
- Table headers and content
- PR titles/summaries

**4. Community Hot Topics**
- Table format, translate descriptions

**5. Bugs & Stability**
- Table format

**6. Feature Requests & Roadmap Signals**
- Table format

**7. User Feedback Summary**
- Translate pain points and positive signals

**8. Backlog Watch**
- Table format

Let me now produce the Chinese translation:</think>

# QwenPaw 项目摘要 — 2026-10-03

## 1. 今日概览

2026年10月3日，QwenPaw 展现出**高开发活跃度**，过去24小时内有10个 issue 和 12 个 pull request 更新。项目呈现 bug 修复与功能开发的健康混合，虽然本日未发布新版本。社区参与度依然强劲，多项功能提案聚焦于核心 UX 改进（移动端适配、消息编辑、跨实例通信），同时伴随着 V2.2.2.beta4 版本的若干关键 bug 报告。本日共 7 个 PR 成功合并/关闭，推进了移动端 UI 优化、窗口状态持久化以及无障碍功能。

---

## 2. 版本发布

本日无新版本发布。

---

## 3. 项目进展

**已合并/关闭的 PR（7 个）：**

| PR | 作者 | 摘要 |
|---|---|---|
| [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347) | AaronZ345 | **修复：保持富文本输入光标可见** — 解决了长多行提示词可能导致活动输入行隐藏在编辑器视口下方的问题 |
| [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | AaronZ345 | **功能(桌面端)：记住窗口几何尺寸** — 使用官方 window-state 插件持久化 Tauri 桌面窗口的位置和大小 |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | AaronZ345 | **功能(控制台)：添加聊天滚动锁定** — 允许用户滚动离开流式响应内容，无需自动跟随新消息 |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | AaronZ345 | **功能(聊天)：添加工具调用可见性开关** — 用户现在可以隐藏工具调用卡片以减少对话视图中的噪音 |
| [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | AaronZ345 | **功能(providers)：暴露每个媒体的嵌入能力** — 添加 provider 级别的图像/视频/音频能力及 provider 默认值 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | AaronZ345 | **功能(mcp)：添加可配置的工具调用超时** — 每个客户端的工具调用截止时间默认为 300s，保留更长值的兼容性 |
| [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) | AaronZ345 | **功能(控制台)：支持游戏开发文件语言** — 为 C# 脚本、Unity、Godot 等添加了 Monaco 语言支持 |

**新开启的 PR（5 个）：**

| PR | 作者 | 摘要 |
|---|---|---|
| [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) | LeafS825 | **功能(控制台)：将设置导航移入移动端抽屉** — 通过将 21 个分区导航移至抽屉，解决 ≤768px 屏幕上的导航拥挤问题 |
| [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) | LUOSENGWA | **修复(agents)：拒绝超长提示词并返回空的模型回复** — 通过显示可见错误而非静默失败来处理上下文溢出 |
| [#8079](https://github.com/agentscope-ai/QwenPaw/pull/8079) | LUOSENGWA | **修复(app)：当重载耗尽超时到期时通知房间并取消进行中的运行** — 修复配置变更重载处理 |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | shuziP | **功能(tools)：添加 view_audio 工具用于音频理解** — 继现有 view_image/view_video 工具后补全音频模态 |
| [#7936](https://github.com/agentscope-ai/QwenPaw/pull/7936) | lihongyuan99 | **修复(i18n)：翻译中文版访问控制用户名标签** — 补充缺失的中文本地化 |

---

## 4. 社区热点话题

| Issue/PR | 标题 | 评论数 | 分析 |
|---|---|---|---|
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | [功能] 在 WebUI 中支持消息撤回/编辑和工作区回滚 | 8 | **参与度最高。** 用户希望编辑/撤回已发送消息，并支持自动对话截断和可选的文件快照回滚——这是长时间运行会话的重要 UX 改进 |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Web 控制台移动端适配 | 6 | 由来已久的移动端响应式控制台请求；PR [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) 已部分解决此问题 |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 用户输入渲染 Markdown | 4 | 用户期望自己的消息也能支持 markdown，以匹配 AI 响应格式 |
| [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | [功能请求] 跨实例 Agent 通信 | 1 | 雄心勃勃的去中心化多机器 agent 协作提案——反映出分布式部署需求 |

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 状态 | 说明 |
|---|---|---|---|
| [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | **高** | 开启 | V2.2.2.beta4 局域网设备访问本地服务时无法进入对话页——V2.2.1 以来的回归问题 |
| [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) | **高** | 开启 | Qoder 第三方 agent：自定义模型不可见/无法使用 + 用量统计隐藏（3 个缺陷） |
| [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | **中** | 开启 | 跨会话消息被注册为独立聊天，导致同一会话内 UI 碎片化 |
| [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) | **中** | 开启 | 输出截断静默丢弃 `finish_reason="length"`——用户无法区分完整响应与被截断响应 |

*修复 PR：[#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) 处理提示词溢出，[#8079](https://github.com/agentscope-ai/QwenPaw/pull/8079) 处理重载超时。*

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 近期纳入可能性 |
|---|---|---|
| [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) / [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | 添加 `view_audio` 内置工具 | **高** — PR 已开启，遵循现有 view_image/view_video 模式 |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 消息编辑/撤回 + 工作区回滚 | **中-高** — 8 条评论，交互式会话用例清晰 |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 移动端控制台适配 | **中** — 由来已久，[#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) 已部分解决 |
| [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | 跨实例 Agent 通信 | **低** — 雄心勃勃，需重大架构变更 |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 用户消息 Markdown 渲染 | **中** — 直接的增强功能 |

---

## 7. 用户反馈总结

**已识别的痛点：**

1. **V2.2.2.beta4 回归问题** — 用户报告局域网设备连接时无法进入对话页面，表明存在网络/回归问题（[#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073)）
2. **第三方集成失效** — Qoder agent 的自定义模型无法使用，阻塞了使用自定义模型的用户（[#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077)）
3. **静默失败** — 超长提示词返回空响应且无说明；截断用户无感知（[#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084)，[#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085)）
4. **移动端排除** — 尽管移动端使用量增长，Web 控制台在移动设备上仍难以使用（[#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)）

**积极信号：**

- 近期 UX 改进获得强烈好评：聊天滚动锁定、工具可见性开关、窗口几何尺寸记忆
- 社区积极提出与 QwenPaw 多模态愿景相符的功能（音频理解、markdown 支持）

---

## 8. 待办事项关注

| Issue/PR | 存在时长 | 状态 | 关注点 |
|---|---|---|---|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 约 75 天 | 开启 | 移动端控制台适配——7 月以来的需求，部分解决但未完成 |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 约 180 天 | 开启 | 用户消息 markdown——4 月以来的需求，中等复杂度 |
| [#8082](https://github.com/agentscope-ai/QwenPaw/issues/8082) | 1 天 | 开启 | 心跳文档缺口——新问题，凸显文档不完整 |
| [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | 1 天 | 开启 | 跨实例通信——架构意义重大，需维护者评估 |

---

*基于 2026-10-03 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest from English to Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter, not literal word-for-word translation

Let me translate this carefully, maintaining all the formatting and structure while making it read naturally in Chinese.</think>

# ZeroClaw 项目简报 — 2026-10-03

## 1. 今日概览

ZeroClaw 今日继续保持高开发活跃度，**过去 24 小时内有 50 个 issue 和 50 个 PR 更新**。项目正在积极修复即将发布的 v0.8.6 版本的关键稳定性问题，同时推进多个重大架构计划，包括身份/访问安全、provider 路由增强以及新的 A2A 协议 crate。2 个 PR 已合并/关闭，今日未发布新版本。Issue 积压情况显示维护者参与度很高，多个 P1 缺陷正在处理中，多个 RFC 也在推进中。

## 2. 版本发布

**今日无新版本**发布。当前数据快照中未提供最新版本信息。

## 3. 项目进展

以下重要 PR 今日有所推进：

| PR | 标题 | 风险 | 规模 |
|----|------|------|------|
| [#11414](https://github.com/zeroclaw-labs/zeroclaw/pull/11414) | feat(web): add focused workspaces and Admin hub | 高 | XL |
| [#11471](https://github.com/zeroclaw-labs/zeroclaw/pull/11471) | fix(runtime): preserve container launcher environment | 中 | M |
| [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) | feat(tools): add opt-in subprocess memory watchdog | 中 | L |
| [#11451](https://github.com/zeroclaw-labs/zeroclaw/pull/11451) | fix(secrets): protect Windows key files at creation | 高 | XL |
| [#11468](https://github.com/zeroclaw-labs/zeroclaw/pull/11468) | fix(providers): honor Ollama and llama.cpp thinking controls | 中 | M |
| [#11467](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) | feat(agent): add opt-in single-tool provider rounds | 高 | XL |
| [#11469](https://github.com/zeroclaw-labs/zeroclaw/pull/11469) | fix(security): recognize the null device on every host | 低 | S |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | fix(cli): publish authorization edits into running daemon | 高 | XL |
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | feat(cli): zeroclaw user commands for roster password lifecycle | 高 | XL |

**过去 24 小时内有 2 个 PR** 已合并/关闭（根据 50 个 PR 更新中包含 2 个已合并/关闭的数据）。

## 4. 社区热点话题

| Issue | 标题 | 评论数 | 关注点 |
|-------|------|--------|--------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [追踪]: RFC 和设计问题的维护者决策队列 | 15 | **架构治理** — 活跃队列跟踪需要维护者/负责人做出决策的 RFC 和设计问题 |
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | [Bug]: zerocode 再次忽略启动目录（#10609 的回归） | 5 | **CLI 回归** — P1 问题：ZeroCode 强制使用 agent workspace 作为 cwd，而非尊重启动目录 |
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | [功能]: 实时语音-host 通道（后端无关的 WS 客户端） | 5 | **语音集成** — 请求后端无关的 WebSocket 语音主机，支持 CrispASR、Wyoming 协议 |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | 功能: shell/skill_tool 子进程执行时的进程内存限制 | 4 | **安全/运行时** — P1：添加内存限制以防止容器因无限制子进程分配而 OOM |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | [Bug]: llama.cpp 和自定义 provider 对模型使用错误的 url/uri | 4 | **Provider 配置** — 自定义 provider URI 未正确用于模型路由 |

**分析：** 最活跃的讨论集中在**架构治理**（#8692），表明社区对 RFC 流程的参与度很高。回归缺陷（#11387）也引发了大量关注，反映出用户对目录处理问题反复出现的挫败感。

## 5. 缺陷与稳定性

### 严重（P1）— 进行中

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode 忽略启动目录（回归） | S2 | 进行中 |
| [#11369](https://github.com/zeroclaw-labs/zeroclaw/issues/11369) | Docker 镜像启动时退出，存在 DB strand 风险 | S1 | **已关闭** |
| [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) | ZeroCode RPC 无法到达配置的通道 | S1 | 进行中 |

### 高优先级（P2）

| Issue | 标题 | 严重程度 | 修复 PR? |
|-------|------|----------|----------|
| [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | plugin info 将运行时拒绝的插件报告为 [loads] | S2 | — |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | Skill review 工具无法看到 bundle 中的 skills | S2 | — |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | Skill review 从未对 web/gateway turn 运行 | S2 | — |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp 自定义 provider 使用错误的 URL | S3 | — |
| [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) | 成本记录使用 daemon 生命周期的 session ID | — | — |
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Windows 上 Ctrl+C 导致强制退出 | S2 | — |

**注意：** 多个缺陷标记了 `release:v0.8.6`，表明这些问题针对的是下一个补丁版本。

## 6. 功能请求与路线图信号

### 正在开发的 RFC

| Issue | 标题 | 领域 | 优先级 |
|-------|------|------|--------|
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A 协议 crate（zeroclaw-a2a） | 架构 | P2 |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: 知识语料库 — 文档检索（RAG） | 架构 | P2 |
| [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) | 将 zeroclaw-gw 作为独立 IPC 客户端发布 | 架构 | P2（阻塞） |

### 重要功能 PR

- **#11467**: 可选的单工具 provider 轮次 — 支持细粒度的单工具模型选择
- **#11456**: 可选的子进程内存看门狗 — 解决容器 OOM 风险
- **#7943**: 实时语音-host 通道 — 后端无关的 WebSocket 语音客户端

**路线图预测：** 鉴于 RFC 和安全相关 PR（#11265、#11264、#11313）的活跃开发，下一个次要版本（v0.8.6+）可能会重点强调**身份/访问安全加固**和 **provider 路由改进**，RAG 能力预计在 v0.9.0 推出。

## 7. 用户反馈总结

### 痛点

1. **目录处理回归**：用户对反复出现的目录忽略问题（#11387）感到沮丧 — 被称为"#10609 的回归"
2. **插件配置困惑**（#11336）：CLI 报告插件已加载，但运行时因缺少 `config_schema` 而拒绝注册
3. **Skill bundle 可见性**（#11333）：通过 bundle 加载的 skills 对 skill review 工具不可见
4. **Windows 稳定性**（#9028）：Ctrl+C 导致强制退出，退出代码 1073741510
5. **剪贴板功能**（#11418）：ZeroCode UI 中的"复制"按钮无法工作

### 积极信号

- 安全功能（#11264、#11265、#11451）的积极开发表明对企业用例的响应
- 容器运行时改进（#11471、#11456）解决了生产部署问题

## 8. 积压关注

### 需要维护者关注的 Issue

| Issue | 标题 | 状态 | 信号 |
|-------|------|------|------|
| [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) | verify named-pipe server on Windows for live config edits | 开启，需要维护者审查 | P2, follow-up |
| [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) | verify daemon identity in call_local | 开启，需要维护者审查 | P1, follow-up |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate | 开启 | P2, type:rfc |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus RAG | 开启 | P2, type:rfc |
| [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) | Ship zeroclaw-gw as standalone | 开启，阻塞 | P2, release:v0.9.0 |

### 长期未解决的问题（>90 天，仍活跃）

- [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836): 工具执行的协作取消（自 2026-04-17 起）
- [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743): 委托交接的审批转发（自 2026-06-15 起）
- [#9226](https://github.com/zeroclaw-labs/zeroclaw/issues/9226): eval harness 的隔离内存注入（自 2026-07-21 起）

---

*简报基于 ZeroClaw GitHub 数据生成 — github.com/zeroclaw-labs/zeroclaw*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*