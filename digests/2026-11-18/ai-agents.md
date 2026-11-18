# OpenClaw 生态日报 2026-11-18

> Issues: 486 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-18 03:49 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical terms, URLs, version numbers, issue/PR references, and code identifiers in their original form
3. Maintain the exact Markdown structure (tables, lists, headings, etc.)
4. Use natural technical Chinese register
5. Output only the translation, no preamble or explanation

Let me translate section by section:

**Section 1: Today's Overview**
- Translate the narrative description into natural Chinese
- Keep issue/PR numbers and metrics as-is

**Section 2: Releases**
- Translate descriptions
- Keep version numbers and issue references

**Section 3: Project Progress**
- Tables with PR info - translate titles but keep identifiers
- Note about rating sizes and PR labels

**Section 4: Community Hot Topics**
- Issue titles and descriptions
- "Underlying Needs Analysis" section

**Section 5: Bugs & Stability**
- Tables with bug info
- Keep severity indicators
- "Notable Regressions" and "Crash/Loop Reports"

**Section 6: Feature Requests & Roadmap Signals**
- Table with feature requests
- "Incoming PR Features" section
- "Roadmap Predictions"

**Section 7: User Feedback Summary**
- Tables and lists
- "Pain Points", "Positive Signals", "Dissatisfaction Themes"

**Section 8: Backlog Watch**
- Tables with issue info
- "Long-Unanswered Important Issues"
- "PRs Needing Maintainer Attention"
- "Stale Issues Requiring Resolution"

Let me translate:
</think>


# OpenClaw 项目动态 — 2026-11-18

## 1. 今日概览

OpenClaw 保持极高的开发活跃度，过去 24 小时内共有 **486 个 issue 和 500 个 PR** 产生更新。**v2026.11.5** 版本已发布，带有关键的会话重启安全和回滚改进。今日共有 252 个 PR 被合并/关闭，社区参与度在各类 issue 上都保持活跃。稳定性问题主要集中在 WAL 检查点、SQLite 竞争以及 Windows/macOS 上的启动回归。跨平台活动健康，多个修复针对网关行为、模型处理和记忆系统。

---

## 2. 版本发布

### v2026.11.5 — 发布于 2026-11-18

**主要变更：**
- **会话重启安全：** 排队消息、发送权限和最终聊天写入现在可在网关重启后保留（[#196923](https://github.com/openclaw/openclaw/issues/196923)、[#196540](https://github.com/openclaw/openclaw/issues/196540)、[#196493](https://github.com/openclaw/openclaw/issues/196493)）
- **更安全的更新：** Doctor 或网关启动失败时现可干净回滚，而不会留下部分状态

**破坏性变更：** 此版本无破坏性变更报告。

**迁移说明：** 无需迁移步骤；此版本在无需配置变更的情况下提升了系统韧性。

---

## 3. 项目进展

### 今日合并/关闭的 PR（精选）

| PR | 标题 | 影响范围 |
|----|-------|--------|
| [#200896](https://github.com/openclaw/openclaw/pull/200896) | fix(ci): 区分 PR 验收扫描与预哈希阶段 | CI 可靠性 |
| [#200968](https://github.com/openclaw/openclaw/pull/200968) | chore(release): 更新 v2026.11.5 的 appcast | macOS 分发 |
| [#200964](https://github.com/openclaw/openclaw/pull/200964) | improve(models): 避免启动时重复验证模型目录 | 启动性能 |
| [#200963](https://github.com/openclaw/openclaw/pull/200963) | fix: 替换已废弃的模型推荐 | 模型选择体验 |
| [#200960](https://github.com/openclaw/openclaw/pull/200960) | docs: 为 v2026.11.5 发布说明添加临时公告 | 文档 |

### 待 review 的开放 PR

| PR | 标题 | 评级 | 规模 |
|----|-------|--------|------|
| [#200869](https://github.com/openclaw/openclaw/pull/200869) | perf(update): 在单次更新运行中复用已验证的数据库摘要 | 🐚 铂金寄居蟹 | M |
| [#200946](https://github.com/openclaw/openclaw/pull/200946) | fix: 在缺失模型错误后保持健康的备用模型可用 | 🐚 铂金寄居蟹 | S |
| [#193550](https://github.com/openclaw/openclaw/pull/193550) | feat(plugins): 让插件在最终模型提供商请求前进行门控 | 🦪 银壳蛤蜊 | XL |
| [#193815](https://github.com/openclaw/openclaw/pull/193815) | feat(memory): 添加 CJK 二元语法 FTS 伴随索引 | 🦐 金虾 | L |
| [#193752](https://github.com/openclaw/openclaw/pull/193752) | fix(agents): 在故障转移时保留可信的每日配额断言 | 🐚 铂金寄居蟹 | L |

---

## 4. 社区热点

### 评论量最高的 Issue（按评论数排序）

1. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — 网关状态库 WAL 自动检查点永不完成（42 条评论）
   - **根本原因：** 进程内读取器持有 WAL 锁，导致检查点无法完成
   - **影响：** 状态库无限增长；长时间运行的实例面临存储问题

2. **[#191944](https://github.com/openclaw/openclaw/issues/191944)** — macOS 上 gateway stop/stop --force 命令失败（35 条评论）
   - **错误信息：** "无法完整检查进程谱系"
   - **影响：** macOS Intel 用户无法优雅地停止网关

3. **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — 短期记忆召回在夜间清除被召回的条目（29 条评论）
   - **影响：** 深度梦境阶段永不提升条目；512 条目上限导致夜间出现零召回批量注入
   - **严重程度：** 🦞 钻石龙虾（高影响）

4. **[#126360](https://github.com/openclaw/openclaw/issues/126360)** — AgentSelectionRequiredError 刷屏日志（21 条评论）
   - **触发条件：** 显式多智能体所有权且无默认智能体
   - **受影响场景：** 日志簿插件、控制 UI 全局 RPC、系统智能体轮次

5. **[#48003](https://github.com/openclaw/openclaw/issues/48003)** — 操控模式不会在轮次中途注入消息（20 条评论，4 👍）
   - **自 2026 年 3 月起的回归问题**
   - **用户需求：** 队列行为与文档中的操控语义不符

### 深层需求分析

头部 issue 揭示了三个主题：
- **数据库可靠性：** WAL 检查点和 SQLite 竞争影响长时间运行的部署
- **跨平台一致性：** macOS 和 Windows 特定故障表明平台特定代码路径需要加固
- **记忆系统健壮性：** 召回保留和记忆索引行为表明内存子系统在扩展到大型语料前需要关注

---

## 5. Bug 与稳定性

### 严重/高优先级 Bug

| Issue | 标题 | 严重程度 | 平台 | 是否有修复 PR？ |
|-------|-------|----------|----------|---------|
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite 竞争：3 个并发写入句柄导致约 33s 事件循环阻塞 | 🦞 钻石龙虾 | 全平台 | 无 |
| [#167406](https://github.com/openclaw/openclaw/issues/167406) | Windows MSIX：Codex 启用时网关启动饿死主线程 | P0 | Windows | 无 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 来源追溯棘轮后策展记忆根静默排除在引导之外 | P0 | 全平台 | 无 |
| [#152965](https://github.com/openclaw/openclaw/issues/152965) | 热重载非频道插件时销毁频道插件 | 🦞 钻石龙虾 | 全平台 | 无 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 刷新成功但 cron/心跳以 10s 超时失败 | P0 | 全平台 | 关联 PR 开放中 |

### 值得注意的回归问题

| Issue | 标题 | 引入版本 | 状态 |
|-------|-------|------------|--------|
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 启动回归：就绪时间约 1030s vs 约 410s（Windows） | 2026.10.1 | 开放中 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex 报 "无法将 undefined 或 null 转换为对象" | 2026.3.2 | 关联 PR 开放中 |
| [#142336](https://github.com/openclaw/openclaw/issues/142336) | Core /dashboard 遮盖 Telegram Mini App 启动器 | 2026.9.2+ | 开放中 |

### 崩溃/死循环报告

- **[#178359](https://github.com/openclaw/openclaw/issues/178359):** `doctor --fix --non-interactive` 空闲 15+ 分钟无输出（macOS）
- **[#181120](https://github.com/openclaw/openclaw/issues/181120):** macOS 网关停止响应，主线程阻塞在 MessagePort 写入

---

## 6. 功能需求与路线图信号

### 高价值功能请求

| Issue | 标题 | 点赞数 | 评论数 |
|-------|-------|-------|----------|
| [#150238](https://github.com/openclaw/openclaw/issues/150238) | 为超大会话的技能工坊添加上下文预算/跳过策略 | 1 👍 | 12 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 入职向导应包含记忆/嵌入设置 | 2 👍 | 10 |
| [#138990](https://github.com/openclaw/openclaw/issues/138990) | 为前台 WebChat 运行提供可执行的检查点和有限让渡 | 0 👍 | 11 |
| [#154524](https://github.com/openclaw/openclaw/issues/154524) | 无障碍：让屏幕阅读器将聊天消息暴露为标题 | 0 👍 | 9 |

### 即将合入的 PR 功能

- **[#193550](https://github.com/openclaw/openclaw/pull/193550)** — 插件钩子 `before_model_request`，用于请求门控（XL，兼容性风险）
- **[#193815](https://github.com/openclaw/openclaw/pull/193815)** — CJK 二元语法 FTS 索引（中文/日文查询支持）
- **[#159478](https://github.com/openclaw/openclaw/pull/159478)** — 在群组对话中选择性参与智能体

### 路线图预测

基于 PR 活动和 issue 量，预计近期重点将放在：
1. **模型提供商可靠性** — 备用模型处理、速率限制可见性
2. **多智能体健壮性** — 会话路由、消息传递、所有权语义
3. **记忆系统改进** — CJK 索引、召回保留、来源追溯处理
4. **跨平台对等** — macOS/Windows 网关行为对齐

---

## 7. 用户反馈摘要

### 痛点

| 类别 | Issue 数量 | 示例 |
|----------|-------------|----------|
| **会话/记忆** | 高 | 召回保留失败、记忆索引中止、策展记忆静默排除 |
| **数据库** | 高 | WAL 检查点阻塞、SQLite 竞争阻塞、启动时间回归 |
| **多智能体** | 中 | AgentSelectionRequiredError 刷屏、助手完成权限丢失、A2A 重复消息 |
| **平台特定** | 中 | macOS 网关停止失败、Windows MSIX 启动饿死 |
| **更新/回滚** | 中 | 安装后 Doctor WAL 验证失败、插件迁移死锁 |

### 正面信号

- **[#192667](https://github.com/openclaw/openclaw/issues/192667)** — 报告者确认更新至 v2026.11.5 后 macOS 设置缓慢和深色主题输入可见性问题均已解决
- 社区积极提交详细的复现步骤，包含版本信息、平台详情和追踪证据
- 今日多个 issue 由维护者 review 后关闭，表明活跃的分诊工作

### 不满主题

1. **恢复体验：** 状态迁移失败使插件陷入需要相互依赖的困境（doctor vs. 插件更新）
2. **可观测性：** 错误信息缺少原因码；"changed while starting work" 有 16 个相同的调用点
3. **更新安全：** 包回滚树在更新中途变化导致不可恢复状态

---

## 8. 待处理积压

### 长期未响应的重要 Issue

| Issue | 标题 | 存在时间 | 评论数 | 需求 |
|-------|-------|-----|----------|-------|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 操控模式不会在轮次中途注入消息 | 约 8 个月 | 20 | 维护者 review，关联 PR |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | Google-vertex/gemini 空对象错误 | 约 8 个月 | 18 | 关联 PR，需要复现 |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | SQLite 3 个并发写入句柄 | 约 4 个月 | 13 | 维护者 review |
| [#126360](https://github.com/openclaw/openclaw/issues/126360) | AgentSelectionRequiredError 刷屏 | 约 3 个月 | 21 | 产品决策 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 策展记忆根静默排除 | 约 2 个月 | 17 | 安全 review，产品决策 |

### 需要维护者关注的 PR

| PR | 标题 | 状态 | 等待方 |
|----|-------|--------|---------|
| [#197553](https://github.com/openclaw/openclaw/pull/197553) | fix(agents): 当无支持路由时省略消息 | 👀 等待维护者查看 | 维护者 |
| [#193550](https://github.com/openclaw/openclaw/pull/193550) | feat(plugins): 让插件在最终模型请求前进行门控 | 👀 等待维护者查看 | 维护者 |
| [#200869](https://github.com/openclaw/openclaw/pull/200869) | perf(update): 复用已验证的数据库摘要 | 👀 等待维护者查看 | 维护者 |
| [#200946](https://github.com/openclaw/openclaw/pull/200946) | fix: 在缺失模型错误后保持健康的备用模型可用 | 👀 等待维护者查看 | 维护者 |

### 需要清理的过期 Issue

- [#123792](https://github.com/openclaw/openclaw/issues/123792) — CLI 后端下助手轮次渲染两次（3 个月，过期）
- [#138561](https://github.com/openclaw/openclaw/issues/138561) — active-memory 插件停止召回（2.5 个月，已关闭）
- [#164279](https://github.com/openclaw/openclaw/issues/164279) — 自我学习后台回顾完成度 0%（1.5 个月，已关闭）

---

**动态生成日期：** 2026-11-18  
**数据来源：** GitHub openclaw/openclaw 活动（过去 24 小时）

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all text content naturally into Chinese technical register
2. Keep all Markdown structure exactly the same (headings, tables, lists, blockquotes, etc.)
3. Keep all URLs, repository names, version tags, issue/PR numbers, file paths as-is
4. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully, section by section.

The document is about comparing 5 open-source AI agent projects. Let me translate it with proper Chinese technical terminology:

- "Personal AI Agent Ecosystem" - 个人AI Agent生态系统
- "Cross-Project Comparison Report" - 跨项目对比报告
- "health score" - 健康度评分
- "closure rate" - 关闭率
- "release cadence" - 发布节奏
- "WAL" - WAL（预写日志）
- "SQLite" - SQLite
- "MCP" - MCP
- "plugin" - 插件
- "multi-agent" - 多Agent
- "memory system" - 记忆系统
- "cron" - 定时任务
- "enterprise" - 企业级
- "approval workflow" - 审批流程
- "cost enforcement" - 成本控制
- "SOP" - SOP（标准操作流程）
- "Feishu" - 飞书
- "WeChat" - 微信
- "Telegram" - Telegram
- "Slack" - Slack
- "WhatsApp" - WhatsApp
- "XXXL" - XXXL（指非常大的重构）
- "canary" - 灰度版
- "stable" - 稳定版
- "provider" - 提供商
- "backend" - 后端
- "benchmarking" - 基准测试
- "sandboxing" - 沙箱隔离
- "least-privilege" - 最小权限


- "connection pooling" - 连接池
- "context window" - 上下文窗口
- "thinking effort" - 思考深度
- "streaming" - 流式输出
- "OAuth" - OAuth
- "WASM" - WASM（WebAssembly）
- "wasmtime" - wasmtime
- "checkpoint" - 检查点
- "FTS" - 全文搜索

Now I'll translate the full report.
</think>


# Personal AI Agent 生态系统 — 跨项目对比报告
**日期：** 2026-11-18 | **范围：** OpenClaw · Hermes Agent · IronClaw · QwenPaw · ZeroClaw

---

## 1. 生态系统概览

个人 AI 助手与 Agent 开源生态系统正处于**高速增长阶段**，五个追踪项目中有三个展现出活跃的日常开发周期，每天 PR 更新量超过 40 条。社区正围绕共同的技术关切收敛——多 Agent 会话管理、记忆系统设计、跨平台网关可靠性以及安全控制——同时在平台（CLI 原生、桌面端、企业网关）、生态集成（微信、Telegram、Slack、飞书）和可扩展性（插件架构、MCP 提取）方面形成差异化。大多数项目都在积极应对 SQLite 并发、跨平台一致性以及功能迭代速度与运维稳定性之间的张力。没有单一项目占据主导地位；相反，生态系统呈现出一种健康的多样化格局，适用于不同的部署场景。

---

## 2. 活跃度对比

| 项目 | Issue（24小时） | PR（24小时） | Release（24小时） | Issue 关闭数 | PR 合并数 | 活跃度等级 |
|---------|-------------|-----------|----------------|---------------|------------|---------------|
| **OpenClaw** | 486（117 已关闭） | 500（252 已合并） | **1**（v2026.11.5） | 24% | 50% | 🥇 Tier 1 — 超高活跃 |
| **Hermes Agent** | 50（1 已关闭） | 50（4 已合并） | **1**（canary） | 2% | 8% | 🥈 Tier 2 — 高活跃 |
| **QwenPaw** | 15（9 已关闭） | 45（19 已合并） | 0 | 60% | 42% | 🥈 Tier 2 — 高活跃 |
| **ZeroClaw** | 21（0 已关闭） | 50（9 已合并） | 0 | 0% | 18% | 🥈 Tier 2 — 高活跃 |
| **IronClaw** | 0 | 10（0 已合并） | 0 | — | 0% | 🥉 Tier 3 — 静默 |

**健康度评分方法论**（活跃速度 + 关闭率 + 发布节奏的综合指标）：

| 项目 | 健康度评分 | 评级 |
|---------|-------------|--------|
| OpenClaw | 9.4 / 10 | 🟢 优秀 |
| QwenPaw | 8.1 / 10 | 🟢 良好 |
| Hermes Agent | 6.8 / 10 | 🟡 中等 |
| ZeroClaw | 6.2 / 10 | 🟡 中等 |
| IronClaw | 2.1 / 10 | 🔴 长期未维护 |

OpenClaw 在原始活跃量上领先（Issue 数量是其最近竞品的 10 倍），且保持着最健康的开放工作与关闭之间的平衡。QwenPaw 展现出强劲的 Issue 解决率（60% 关闭），但总贡献量较低。ZeroClaw 有高 PR 吞吐量但 Issue 关闭率接近零，呈现出一种 PR 推送型的开发模式。IronClaw 的活动完全由自动化工具驱动（Dependabot），表明人工维护者参与度极低。

---

## 3. OpenClaw 的定位

### 相对于同行的优势

| 维度 | OpenClaw | vs. Hermes Agent | vs. QwenPaw | vs. ZeroClaw | vs. IronClaw |
|-----------|----------|-----------------|-------------|--------------|--------------|
| **活跃量** | 486 issues/天 | 10 倍更高 | 32 倍更高 | 23 倍更高 | 49 倍更高 |
| **发布节奏** | 稳定版 + 灰度版 | 仅灰度版 | 无 | 预发布 | 无 |
| **社区互动** | Bug 讨论达 42 条评论 | 单个安全问题达 29 条评论 | 功能请求达 18 条评论 | 讨论 5 条评论 | 0 条评论 |
| **Bug 解决** | 覆盖 P0–P3 各级别 | Issue 较少，聚焦安全 | 聚焦 Windows/移动端 | 安全相关为主 | 无用户 Bug |
| **跨平台** | macOS、Windows、Linux（gateway） | 桌面端、CLI、Telegram、飞书 | 桌面端、Windows、微信 | ACP、MCP、企业级 | 内部工具 |

OpenClaw 以**10 倍于最近竞品的社区规模**运营，带来了更优的 Bug 发现覆盖率、更快的反馈闭环以及更大的贡献者池。其发布节奏（稳定版 + 灰度版）为生产用户提供了可靠性，同时为早期尝鲜者提供了测试通道——这是目前所有竞品都无法匹配的。

### 技术路线差异

- **OpenClaw** 构建的是一款**原生桌面 Agent**，深度集成操作系统，基于 SQLite 持久化状态，并配备插件系统。优先级是重启安全、数据库完整性和跨平台网关一致性。
- **Hermes Agent** 专注于**提供商集成和多渠道消息**（Telegram、飞书、WhatsApp），其 Agent 引擎负责跨提供商编排模型。
- **QwenPaw** 采用**多 Agent 和插件优先的路线**，通过 XXXL 级重构将 MCP 和本地模型管理提取为独立插件。
- **ZeroClaw** 面向**企业运维管控**场景，强调定时任务调度、成本执行、SOP 审批流程和安全沙箱隔离。
- **IronClaw** 似乎是一个**内部/基础设施导向的项目**，没有用户面向的 Issue 活动，主要是 Rust + wasmtime 基准测试工具。

---

## 4. 共享技术关注领域

### 跨多个项目浮现的需求

| 共同关切 | 受影响项目 | 具体表现 |
|----------------|-------------------|------------------------|
| **记忆系统可靠性** | OpenClaw、ZeroClaw、QwenPaw、Hermes Agent | OpenClaw：召回保留每夜驱逐条目（#150635）；ZeroClaw：Lucid 后端退役 + SQLite 迁移（#12521）；QwenPaw：ReMeLight 记忆模型分离（#7719）；Hermes Agent：短期召回保留失效 |
| **SQLite / WAL 竞争** | OpenClaw、Hermes Agent | OpenClaw：WAL 自动检查点永不完成（#164294），并发写入句柄导致 33 秒卡顿（#117262）；Hermes Agent：云端提供商的上下文窗口截断（#99943） |
| **跨平台一致性** | OpenClaw、QwenPaw、Hermes Agent、ZeroClaw | macOS gateway 停止失败（OpenClaw #191944，Hermes Agent #122494）；Windows 启动回归（OpenClaw #168955，QwenPaw #8547、#8716）；移动端安全区域渲染（QwenPaw #8796） |
| **多 Agent 会话管理** | OpenClaw、QwenPaw、ZeroClaw | 会话丢失（OpenClaw #168955，QwenPaw #7724、#7745）；Agent 切换删除会话（QwenPaw #7745）；子 Agent 运行中通信（OpenClaw #200971，Hermes Agent #157232） |
| **安全与凭证控制** | OpenClaw、ZeroClaw、Hermes Agent、QwenPaw | OpenClaw：CLI 绕过审批层（#59293）；ZeroClaw：CLI 仅能访问紧急停止状态文件（#9390），凭证作用域 RFC（#12422）；Hermes Agent：配置绕过的安全问题（#59293）；QwenPaw：SOP 审批绕过（#12514） |
| **定时任务鲁棒性** | OpenClaw、ZeroClaw、Hermes Agent | OpenClaw：doctor --fix 空闲超过 15 分钟（#178359）；ZeroClaw：定时任务无墙上时钟超时（#9191），调度器被长任务阻塞（#12489）；Hermes Agent：定时任务丢失 MCP 服务工具（#157167） |
| **渠道/平台集成** | Hermes Agent、QwenPaw、OpenClaw | 微信渠道失败（QwenPaw #8709、#8693）；Telegram 流式输出（Hermes Agent #151587）；Slack 集成（Hermes Agent #11744） |

### 值得关注的跨项目趋同

四个活跃项目都在独立地发现问题：**定时和后台任务系统**是最薄弱的子系统：定时任务阻塞整个调度器、墙上时钟超时机制缺失、后台工作的状态在重启后以不可预测的方式存活。这表明需要对后台任务生命周期管理进行**从第一性原理出发的重新设计**——这在整个生态系统中是共同的课题。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | IronClaw |
|-----------|----------|-------------|---------|----------|----------|
| **核心定位** | 深度 OS 集成的桌面 AI Agent | 多渠道消息编排 | 插件生态驱动的多 Agent 平台 | 企业运维管控与 SOP 自动化 | 内部延迟基准测试工具 |
| **目标用户** | 在 macOS/Windows/Linux 上寻求原生桌面体验的高级用户 | 需要多平台消息（Telegram、飞书、WhatsApp）的用户 | 需要多 Agent 工作流和插件扩展性的团队 | 需要审批流程、成本管控和合规保障的企业 | 内部性能工程师 |
| **架构理念** | 插件扩展的单体式集成应用 | 提供商无关的模型路由 + 渠道适配器 | 模块化插件提取（MCP、本地模型） | 安全优先 + 受监督的执行周期 | Rust + wasmtime 实现性能隔离 |
| **核心差异化** | WAL 检查点、重启安全的会话、模型选择器 UX | 多渠道流式输出、飞书进度直播、MCP 的 OAuth 集成 | XXXL 插件重构、按聊天切换模型、ReMeLight 记忆 | 紧急停止强制执行、成本执行模式、SOP 审批门控 | 基于 WASM 的延迟基准测试 |
| **最成熟子系统** | 数据库完整性、跨平台 gateway | 提供商集成、渠道适配器 | 插件架构、多 Agent 路由 | 安全控制、SOP 工作流 | 性能测量 |
| **最不成熟子系统** | 多 Agent 会话管理 | 成本控制、会话持久化 | 数据库并发、微信集成 | 定时任务/调度器鲁棒性、渠道流式输出 | 用户面向功能 |

**战略定位：**

- **OpenClaw** 在**可靠性和 UX 打磨**上竞争（重启安全、模型选择器、数据库完整性）
- **Hermes Agent** 在**平台覆盖范围**上竞争（多渠道、多提供商）
- **QwenPaw** 在**可扩展性和模块化**上竞争（插件优先架构、多 Agent 协作）
- **ZeroClaw** 在**企业治理**上竞争（安全、合规、运维控制）
- **IronClaw** 不面向用户；服务于内部基础设施需求

---

## 6. 社区势能与成熟度

### 活跃度等级分类

| 等级 | 项目 | 特征 |
|------|---------|------------------|
| **🥇 超高活跃** | OpenClaw | 400+ issue/PR 更新/天；关键 Bug 维护者响应 <24h；稳定版 + 灰度版发布节奏；活跃的安全响应 |
| **🥈 快速迭代** | Hermes Agent、QwenPaw、ZeroClaw | 15–50 更新/天；维护者数天内审核；灰度版或预发布重点；活跃的功能开发 |
| **🥉 维护态** | IronClaw | 纯 Dependabot；无社区互动；无发布；人类活动极低 |

### 成熟度指标

| 项目 | Issue 关闭率 | PR 合并率 | 发布节奏 | 陈旧项管理 |
|---------|-------------------|---------------|-----------------|----------------------|
| OpenClaw | 24%（117/486） | ~50%（252/500） | 稳定版 + 灰度版，约每周一次 | 活跃（5+ 项老化 2–8 个月） |
| Hermes Agent | 2%（1/50） | 8%（4/50） | 仅灰度版，不规律 | 中等（多项老化 4–8 个月） |
| QwenPaw | 60%（9/15） | 42%（19/45） | 近期无 | 中等（1 项 100 天前） |
| ZeroClaw | 0%（0/21） | 18%（9/50） | 预发布（v0.9.1） | 活跃（多项老化 4–5 个月） |
| IronClaw | 不适用 | 0%（0/10） | 无 | 无（仅自动化） |

**成熟度评估：**

- **OpenClaw** 是最成熟的社区：高活跃量、高关闭率、规律发布、活跃的分诊工作。
- **QwenPaw** 展现出最健康的单项目效率，尽管绝对量较低但 Issue 关闭率达 60%。
- **ZeroClaw** 的 Issue 关闭率为零（21 个 Issue 全部保持开放），令人担忧——尽管这可能反映了一种 PR 推送型开发模式，Issue 被有意保持开放。
- **Hermes Agent** 关闭率低，但正在积极交付（4 个 PR 合并，1 个灰度版发布）。
- **IronClaw** 没有社区成熟度指标，且很可能不面向外部用户。

---

## 7. 趋势信号

### 面向 AI Agent 开发者和技术决策者

| 趋势 | 证据 | 影响 |
|-------|----------|-------------|
| **1. 插件架构作为一等公民设计** | QwenPaw 将 MCP（#8469）、本地模型（#8499）和 CLI 命令（#8554）提取为插件；均为 XXXL 重构 | 模块化插件架构正在取代单体设计。预期生态将在插件 API 上收敛。 |
| **2. 多 Agent 协作是主战场** | OpenClaw：子 Agent 运行中消息共享（#200971）；Hermes Agent：批量子 Agent 发现交换（#157232）；QwenPaw：按聊天切换模型（#8600） | 多 Agent 会话管理是下一个前沿。开发者应规划 Agent 间通信协议。 |
| **3. 企业运维控制正在成熟** | ZeroClaw：成本执行模式、紧急停止、SOP 审批工作流；OpenClaw：重启安全的会话 | 从"AI 聊天工具"向"AI Agent 平台"的转变要求运维控制：成本限制、审批门控、执行超时和审计追踪。 |
| **4. 跨平台一致性仍是难题** | 四个活跃项目均有平台特定 Bug（macOS、Windows、移动端、微信） | 跨平台一致性是持久挑战。团队应在自动化平台特定 CI 上投入。 |
| **5. 记忆系统正在重新设计** | Lucid 后端退役（ZeroClaw）、SQLite 迁移（全部）、中日韩 FTS 索引（OpenClaw #193815）、ReMeLight 模型分离（QwenPaw #7719） | 记忆后端正在整合和重新架构。即将到来的变更可能需要迁移规划。 |
| **6. 安全控制正在加固** | OpenClaw：审批层绕过；ZeroClaw：紧急停止缺口、凭证作用域；QwenPaw：SOP 审批绕过 | Agent 安全正从"信任模型"演进到"运行时强制护栏"。预期将更加重视沙箱隔离和最小权限凭证处理。 |
| **7. 定时任务鲁棒性是共同短板** | ZeroClaw：无墙上时钟超时，调度器阻塞；OpenClaw：doctor 空闲；Hermes Agent：定时任务丢失工具 | 后台任务系统需要从第一性原理重新设计：超时、隔离、状态恢复和可观测性。 |
| **8. 数据库并发是规模化瓶颈** | OpenClaw：WAL 检查点失败、SQLite 33 秒卡顿；Hermes Agent：上下文窗口截断 | SQLite 在规模化场景下触及瓶颈。项目可能需要 WAL 改进、连接池或迁移到更高并发的存储引擎。 |
| **9. 可配置推理参数是刚性需求** | Hermes Agent：温度配置（#17565，获 18 👍）；OpenClaw：思考深度控制（#12054） | 硬编码的模型参数令用户沮丧。可配置的 temperature、思考深度和上下文窗口将成为标配功能。 |
| **10. 渠道多样性正在增长** | 微信（QwenPaw）、飞书（Hermes Agent）、WhatsApp（Hermes Agent）、Telegram（Hermes Agent）、Slack（Hermes Agent） | 多渠道部署正在成为标准。不支持主流平台的项目面临被渠道专用替代品抢走用户的风险。 |

### 推荐关注事项

- **OpenClaw v2026.12 版本** — 预计有重大记忆系统变更和多 Agent 改进
- **ZeroClaw v0.9.1** — 破坏性变更：Lucid 记忆后端移除；紧急停止安全加固
- **QwenPaw 插件提取 PR** — 三个 XXXL 级 PR（#8499、#8469、#8554）代表重大架构转变；需审查对生态的影响
- **Hermes Agent 安全修复**（#59293） — 审批层绕过问题需在生产部署前解决
- **IronClaw** — 无用户面向开发；不建议纳入生产评估

---

*本报告基于 2026-11-18 全部五个追踪仓库的 GitHub 活动数据编制。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure
2. Keep all URLs, numbers, version tags, issue/PR references, code, and identifiers in their original form
3. Use natural technical Chinese register
4. Output ONLY the translation with no preamble or explanation
5. Preserve all formatting: headings, tables, lists, etc.

Let me translate section by section:

Title: "Hermes Agent Project Digest — November 18, 2026"
→ "Hermes Agent 项目摘要 — 2026年11月18日"

Section 1: Today's Overview
Section 2: Releases
Section 3: Project Progress
Section 4: Community Hot Topics
Section 5: Bugs & Stability
Section 6: Feature Requests & Roadmap Signals
Section 7: User Feedback Summary
Section 8: Backlog Watch

Let me do this carefully, maintaining the technical Chinese register.
</think>


# Hermes Agent 项目摘要 — 2026年11月18日

## 1. 今日概览

Hermes Agent 项目在过去 24 小时内呈现出**极高活跃度**，共 50 个 issue 和 50 个 PR 有所更新。发布了一个 canary 版本（v0.23.2+canary.20261117T064624Z）。社区参与积极，其中一个关于 CLI 配置绕过安全检查的安全问题（29 条评论）引发热议，同时多个关于 gateway 和桌面端的性能回退问题也在热烈讨论中。今日有四个 PR 似乎已被合并或关闭，包括对 GPT-6.2 Astra 和 Sol 模型的支持。项目保持着健康的 PR 流水线，共有 46 个开放 PR 涉及各个组件。

---

## 2. 版本发布

### v0.23.2+canary.20261117T064624Z
- **发布日期：** 2026年11月17日
- **类型：** Canary 构建
- **下载渠道：**
  - macOS（Apple Silicon M 系列）：DMG 安装包
- **说明：** 这是一个 canary 版本。建议用户在测试后反馈问题。发布说明中未提供稳定版相关信息。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 | 备注 |
|----|------|------|------|
| [#157141](https://github.com/NousResearch/hermes-agent/pull/157141) | feat(models): support GPT-6.2 Astra and Sol | **已关闭** | 在 OpenAI/Codex 选择器中添加 GPT-6.2 Astra 和 Sol 模型，包含能力配置、上下文默认值、推理层级和定价 |
| [#157100](https://github.com/NousResearch/hermes-agent/pull/157100) | fmt(js): `pnpm run fix` auto-fix | **开启**（CI 通过后自动合并） | 机器人自动生成的 lint/格式化修复 |

### 推进中的活跃 PR

| PR | 标题 | 优先级 | 组件 | 内容 |
|----|------|--------|------|------|
| [#157232](https://github.com/NousResearch/hermes-agent/pull/157232) | 同一批次中的子 Agent 可以在运行中途相互发送结果 | P2 | agent | 允许并行批次中的子 Agent 在执行过程中共享简短信息 |
| [#157229](https://github.com/NousResearch/hermes-agent/pull/157229) | fix(reasoning): 当解析的 effort 无法到达网络层时发出警告 | P2 | agent | 当推理 effort 设置被提供商静默忽略时向用户发出警告 |
| [#157228](https://github.com/NousResearch/hermes-agent/pull/157228) | fix(kanban): 接受 JSON 对象字符串形式的 metadata | P2 | kanban | 修复 GLM 系列等模型返回的 JSON 编码 metadata 被拒绝的问题 |
| [#153065](https://github.com/NousResearch/hermes-agent/pull/153065) | fix(desktop): 隔离性能测试框架的消息平台 | P2 | desktop | 防止测试框架在 Wayland 上启动重复的消息适配器 |
| [#157089](https://github.com/NousResearch/hermes-agent/pull/157089) | fix(gateway): desktop_project 迁移 gateway 服务的桌面聊天 | P2 | gateway | 注册回调，在 gateway 路径上时将桌面聊天移入项目 |
| [#154878](https://github.com/NousResearch/hermes-agent/pull/154878) | fix(gateway): 启动时的自动恢复不再延迟到已确认的 admission | P2 | gateway | 修复中断会话的自动恢复被静默跳过的问题 |
| [#125967](https://github.com/NousResearch/hermes-agent/pull/125967) | perf(checkpoint): 跳过无操作的索引重新播种 | P2 | agent/cli/gateway | 通过跳过不必要的 git read-tree 操作来降低 checkpoint 开销 |
| [#153066](https://github.com/NousResearch/hermes-agent/pull/153066) | fix(desktop): 传播 profile-route 失败 | P2 | desktop | 防止 profile 路由失败时双重拨号 |
| [#151587](https://github.com/NousResearch/hermes-agent/pull/151587) | fix(streaming): 为 Codex Responses 恢复安全的临时状态 | P3 | streaming | 恢复 Telegram 上 Codex 工具执行的临时状态消息 |

---

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 👍 | 优先级 | 主题 |
|-------|------|--------|----|--------|------|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | hermes config set 绕过 system-config 写保护 | **29** | 0 | P3 | **安全：** CLI 禁用了 shell 写入 config.yaml 时需要通过的审批层 |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | 压缩器上下文窗口被钳制到 model.ollama_num_ctx | **14** | 0 | P2 | **缺陷：** 1M 上下文窗口在云提供商上静默降至 65,536 |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 功能请求：可配置的 Temperature 参数 | **14** | **18** | P3 | **功能：** 硬编码的 temperature 导致幻觉；用户需求明显 |
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287) | 桌面端转录随机重复/散列消息 | **13** | 1 | P2 | **缺陷：** 桌面应用中会话转录损坏 |
| [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) | Gateway 每秒进行 34k-99k 次文件系统元数据操作 | **11** | 0 | P2 | **性能：** 大量 profile 下 Windows 内核池持续增长 |

### 最近更新最活跃的 PR（按活动排序）

| PR | 标题 | 重点领域 |
|----|------|----------|
| [#157232](https://github.com/NousResearch/hermes-agent/pull/157232) | 同一批次中的子 Agent 可以在运行中途相互发送结果 | 多 Agent 协作 |
| [#153065](https://github.com/NousResearch/hermes-agent/pull/153065) | fix(desktop): 隔离性能测试框架的消息平台 | 桌面端/Wayland 兼容性 |

### 潜在需求分析

1. **安全管控一致性（#59293）：** 用户关注 CLI 的 `config set` 命令可以绕过保护 `config.yaml` 写入的审批层。这造成了一个不一致性——拥有终端访问权限的 Agent 可以通过 CLI 修改配置，但不应该能够直接修改。

2. **可配置推理参数（#17565）：** 点赞最多的功能请求（18 个赞）反映了对控制 temperature 的需求。用户反馈由于硬编码默认值导致"严重幻觉"。这是一个高价值的 UX 改进方向。

3. **Windows 性能问题（#146538）：** 当配置了 66 个 profile 时，gateway 每秒产生 34k-99k 次文件系统操作，导致内核池增长。这表明 Windows 上的扩展性存在挑战。

---

## 5. 缺陷与稳定性

### 严重/新缺陷（P2 及以上）

| Issue | 标题 | 严重程度 | 组件 | 状态 | 修复 PR |
|-------|------|----------|------|------|----------|
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | 上下文窗口静默钳制到 65,536 | **高** | agent/compression | 开启 | 无 |
| [#137287](https://github.com/NousResearch/hermes-agent/issues/137287) | 桌面端转录重复/散列消息 | **高** | desktop | 开启 | 无 |
| [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) | Gateway 在 Windows 上每秒 34k-99k 次文件系统操作 | **高** | gateway | 开启 | 无 |
| [#148540](https://github.com/NousResearch/hermes-agent/issues/148540) | restore_policy 拒绝 model=None/'' | **高** | gateway | 开启 | 无 |
| [#150690](https://github.com/NousResearch/hermes-agent/issues/150690) | 回退：群聊从侧边栏消失 | **高** | desktop | 开启 | 无 |
| [#63647](https://github.com/NousResearch/hermes-agent/issues/63647) | WhatsApp 发送 1000+ 条空消息 | **高** | plugins/whatsapp | 开启 | 无 |
| [#122494](https://github.com/NousResearch/hermes-agent/issues/122494) | macOS CLI 语音回复约 2 秒后中断 | **高** | cli | 开启 | 无 |
| [#150588](https://github.com/NousResearch/hermes-agent/issues/150588) | Worker 清理失败并报 invalid_params | **高** | gateway/tui-gateway | 开启 | 无 |
| [#157169](https://github.com/NousResearch/hermes-agent/issues/157169) | 重启后 Session FIFO 永久卡死 | **高** | gateway | **新** | 无 |
| [#157167](https://github.com/NousResearch/hermes-agent/issues/157167) | Cron 任务丢失 MCP 服务器工具 | **高** | tools/mcp | **新** | 无 |
| [#157091](https://github.com/NousResearch/hermes-agent/issues/157091) | v0.23.2 重放加密推理时被截断 | **高** | agent | **新** | 无 |

### 安全问题

| Issue | 标题 | 严重程度 | 风险 |
|-------|------|----------|------|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | hermes config set 绕过审批层 | P3 | **中等** — Agent 可以通过 CLI 禁用审批层 |

### 值得关注的回退

**Issue #150690：** 自 v0.22.6（commit `6ed94e3f6d`）以来，群聊在除创建者所在 profile 外的所有 profile 视图中都从侧边栏消失了。这是一个影响多 profile 用户的明确回退。

---

## 6. 功能请求与路线图信号

### 高需求功能

| Issue | 标题 | 👍 | 组件 | 分析 |
|-------|------|----|------|------|
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 可配置的 Temperature 参数 | **18** | agent | 呼声最高的功能请求；直接影响输出质量；近期实现可能性大 |
| [#47039](https://github.com/NousResearch/hermes-agent/issues/47039) | 支持每个自定义 provider 配置多个 API 端点 | 0 | agent | 最近已关闭并标记 sweeper；可能已解决 |
| [#11116](https://github.com/NousResearch/hermes-agent/issues/11116) | 注册表驱动的工具执行元数据与延迟报告 | 1 | agent/tools | 解决性能工作中的可观测性缺口 |

### 新功能请求（今日）

| Issue | 标题 | 组件 | 描述 |
|-------|------|------|------|
| [#157223](https://github.com/NousResearch/hermes-agent/issues/157223) | feat(gateway): 添加 gateway.client_only 模式 | gateway | 用于远程优先的 Desktop 主机跳过本地 gateway 自动启动 |
| [#142663](https://github.com/NousResearch/hermes-agent/issues/142663) | 安全的自然临时助手消息 | gateway | Codex Responses 在 Telegram 上的临时消息缺口（修复 PR #151587 已存在） |
| [#139025](https://github.com/NousResearch/hermes-agent/pull/139025) | feat(feishu): 显示实时每轮进度 | gateway/plugins | 可折叠的进度卡片，包含终端结果 |

### 预测近期优先级

1. **Temperature 配置** — 社区高需求，范围相对可控
2. **上下文窗口修复** — 影响云提供商的回退
3. **桌面端转录稳定性** — 用户可见的损坏直接影响体验
4. **多 Agent 通信改进** — PR #157232 表明此方向正在积极开发

---

## 7. 用户反馈摘要

### 痛点

1. **上下文窗口困惑：** 云提供商的用户不知道他们的 1M 上下文窗口被静默缩减到 65,536 token。当 `model.ollama_num_ctx` 被配置时，这会导致意外的截断且没有任何警告。

2. **会话状态不稳定：** 多份报告指出桌面会话损坏——消息重复、消息丢失、消息乱序。这直接影响用户对应用可靠性的信任。

3. **Windows 性能问题：** 配置了大量 profile 的用户报告了严重的资源消耗（占用一个完整的 CPU 核心，内核池持续增长），使得应用在 Windows 上无法规模化使用。

4. **macOS CLI 语音模式失效：** 语音回复在约 2 秒后中断，原因是两个缺陷叠加——`afplay` 截断 Ogg/Opus 文件，以及插件 TTS 提供商向 CLI 发送 Opus 数据。

5. **更新流程问题：** 两个新 issue（#157231、#157230）报告 `hermes update` 会抹除历史更新记录，并在没有恢复机制的情况下丢弃已提交的本地补丁。

### 用例与满意度

- **多 Agent 工作流：** 对启用子 Agent 运行中途通信的积极兴趣（受 Perplexity Computer Multiagent 启发，PR #157232 回应此需求）
- **平台集成：** 飞书实时进度卡片、Telegram 临时消息、WhatsApp 修复等工作持续推进
- **模型支持：** 新增 GPT-6.2 Astra 和 Sol 支持，表明维护响应及时

---

## 8. 待办事项关注

### 需要维护者关注的长期待办 Issue

| Issue | 存在时长 | 标题 | 评论数 | 优先级 | 关注点 |
|-------|----------|------|--------|--------|--------|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | 约 4.5 个月 | 安全：CLI 绕过审批层 | 29 | P3 | 活跃讨论中，需确定方案 |
| [#17565](https://github.com/NousResearch/hermes-agent/issues/17565) | 约 6.5 个月 | 可配置的 temperature | 14 | P3 | 社区高需求，18 个赞 |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | 约 2.5 个月 | 上下文窗口钳制 | 14 | P2 | 影响显著，需解决 |
| [#63647](https://github.com/NousResearch/hermes-agent/issues/63647) | 约 4 个月 | WhatsApp 发送 1000+ 条空消息 | 4 | P2 | 标记 needs-repro，近期无活动 |

### 停滞的 PR（近期无更新）

| PR | 标题 | 距上次更新天数 | 组件 |
|----|-------|----------------|------|
| [#144701](https://github.com/NousResearch/hermes-agent/pull/144701) | fix(gateway): 将有界控制读取移出串行队列 | 约 24 天 | gateway |
| [#152321](https://github.com/NousResearch/hermes-agent/pull/152321) | feat(kanban): 原子化发布 Triage 任务 | 约 8 天 | kanban |

### 维护标签备注

- **sweeper:implemented-on-main** — Issue #47039 已标记为已实现
- **sweeper:risk-session-state** — 多个 issue 被标记为会话状态风险
- **needs-decision** — Issue #59293 和 #17565 需要维护者做决策

---

*本摘要于 2026 年 11 月 18 日为 NousResearch/hermes-agent 生成。数据反映过去 24 小时内的活动。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>I need to translate this English technical report into Simplified Chinese. Let me carefully go through it section by section, maintaining the structure, tables, formatting, and technical terms. I'll use natural Chinese technical register.

Key points:
- Preserve all markdown structure (headings, tables, lists, code spans, links, etc.)
- Keep URLs, project names, version numbers, file paths as-is
- Use natural technical Chinese, not literal word-for-word translation
- Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: "IronClaw Project Digest — 2026-11-18" → "IronClaw 项目日报 — 2026-11-18"

Section 1: Overview
- "Today's Overview" → "今日概览"
- "routine dependency maintenance activity" → "例行依赖维护活动"
- "automated dependency bump PRs" → "自动化依赖升级 PR"
- "Dependabot" → Keep as-is (proper noun)
- "No new releases, issues, or merged PRs" → "本期无新版本、无 issue、无合并 PR"

Section 2: Releases
- "No new releases" → "本期无新版本发布"

Section 3: Project Progress
- "Merged/Closed PRs" → "已合并/已关闭 PR"
- "open PRs" → "待处理 PR"
- "awaiting review/merge" → "待审核/待合并"
- "Notable" → "值得注意"
- "minor version bump" → "次版本升级"
- "security fixes" → "安全修复"
- "centralized dependency management" → "统一依赖管理"

Section 4: Community Hot Topics
- "Community Hot Topics" → "社区热点"
- "inferred" → "推断"


- "proactive security posture" → "主动安全防护"
- "video documentation" → "视频文档"
- "architecture visualization" → "架构可视化"

Section 5: Bugs & Stability
- "Bugs & Stability" → "缺陷与稳定性"
- "regressions" → "回归问题"
- "XSS sanitization library" → "XSS 防护库"
- "CA bundle" → "CA 证书包"

Section 6: Feature Requests & Roadmap Signals
- "Feature Requests & Roadmap Signals" → "功能需求与路线图信号"
- "speculative outlook" → "推测性展望"
- "performance-critical benchmarking infrastructure" → "性能关键型基准测试基础设施"

Section 7: User Feedback Summary
- "User Feedback Summary" → "用户反馈汇总"
- "captured" → "采集"

Section 8: Backlog Watch
- "Backlog Watch" → "待办事项关注"
- "Attention Required" → "需优先处理"
- "Priority" → "优先级"
- "security patch" → "安全补丁"
- "test regression risk" → "测试回归风险"
- "build tool" → "构建工具"

Table content translation:
- "Type" → "类型"
- "Key Updates" → "主要更新"
- "Scope" → "范围"
- "JavaScript" → "JavaScript"
- "Rust" → "Rust"
- "GitHub Actions" → "GitHub Actions"
- "JS dev-dep" → "JS 开发依赖"

Footer: "Digest generated from nearai/ironclaw GitHub data" → "本日报基于 nearai/ironclaw GitHub 数据生成"

Now I need to ensure the table alignment is correct. Looking at the original:

| PR | Type | Key Updates | Scope |
|----|------|-------------|-------|

The dashes should be consistent. I'll preserve the original format.

Let me also check for any Chinese punctuation conventions:
- Use Chinese colons (：) in appropriate places
- Use Chinese commas (，) instead of English commas where appropriate in Chinese text
- But keep technical formatting, URLs, numbers as-is

Let me do the full translation now:

---

# IronClaw 项目日报 — 2026-11-18

---

## 1. 今日概览

IronClaw (nearai/ironclaw) 在 2026 年 11 月 18 日呈现**例行依赖维护活动**态势。过去 24 小时内提交的全部 10 个 pull request 均为 Dependabot 发起的自动化依赖升级 PR，涵盖 JavaScript（前端）、Rust（核心）、Python（e2e 测试）和 GitHub Actions 工作流。**本期无新版本发布、无 issue、无已合并 PR**。从数据快照来看，项目运行稳定，未见 bug、回归问题或社区驱动的功能开发动态。

---

## 2. 版本发布

**本期无新版本发布。**

---

## 3. 项目进展

**已合并/已关闭 PR（过去 24 小时）：** 0

待处理 PR 共 10 个，均为依赖更新，等待审核/合并：

| PR | 类型 | 主要更新 | 范围 |
|----|------|----------|------|
| [#8167](https://github.com/nearai/ironclaw/pull/8167) | JavaScript | `zod` → 4.6.7, `@remotion/cli`, `@remotion/tailwind-v4` | `/docs/internal/architecture-video` |
| [#8166](https://github.com/nearai/ironclaw/pull/8166) | Rust | `rustls` 0.23.43 → 0.23.46 | `/harness/latency/runner` |
| [#8165](https://github.com/nearai/ironclaw/pull/8165) | Rust | `rustls` 0.23.43 → 0.23.46 | 根工作区 |
| [#8162](https://github.com/nearai/ironclaw/pull/8162) | Rust | `rustls` 0.23.43 → 0.23.46 | `/harness/latency/runner` |

**值得注意：** `wasmtime` 从 47.0.3 跳升至 48.0.7，属次版本升级，可能包含性能优化或安全修复。`rustls` 的两次更新（#8165、#8166）分别针对不同工作区，反映出依赖版本管理分散的问题，建议统一升级策略。

---

## 4. 社区热点

过去 24 小时内记录的 PR 活动全部来自自动化 Dependabot 提

交，每个 PR 均无 👍 反馈，表明社区对这类常规维护任务关注度较低。

**推断的潜在需求：**
- **依赖健康度**：24 小时内 10 个 Dependabot PR 的高频提交反映出项目采用激进的自动化依赖扫描策略。虽然有利于安全防护，但若未能及时合并，可能造成积压风险。
- **Remotion 视频工具链**：`/docs/internal/architecture-video` 工作区依赖 Remotion（一款基于 React 的视频渲染器），说明项目活跃使用视频文档或架构可视化能力。

---

## 5. 缺陷与稳定性

过去 24 小时内无 bug 或回归问题。

依赖更新（尤其是 `dompurify` XSS 防护库和 `certifi` CA 证书包）反映出项目在主动维护安全防护。

---

## 6. 功能需求与路线图信号

今日无功能需求 issue 记录。

项目活动完全围绕依赖维护展开，无法从本期数据中提取用户面向功能、API 变更或路线图信号。

**推测性展望：** `ironclaw_webui` 集成 Storybook、Vitest 和 Vite，表明项目持续投入前端 UI 质量建设。`harness/latency/runner` 使用 Rust/wasmtime 则暗示性能关键型基准测试基础设施正在发展中。

---

## 7. 用户反馈汇总

过去 24 小时内无用户反馈数据（0 条带评论的 issue）。

---

## 8. 待办事项关注

**需优先处理：**

| 项目 | 时长 | 优先级 | 备注 |
|------|------|--------|------|
| [#8167](https://github.com/nearai/ironclaw/pull/8167) | 15 天 | 中 | docs 工作区的 Remotion 依赖，风险较低 |
| [#8166](https://github.com/nearai/ironclaw/pull/8166) | 16 天 | 低 | rustls 安全补丁，合并优先级高 |
| [#8165](https://github.com/nearai/ironclaw/pull/8165) | 16 天 | 低 | 重复的 rustls 升级（根 vs runner），建议合并处理 |
| [#8162](https://github.com/nearai/ironclaw/pull/8162) | 20 天 | 中 | wasmtime 次版本升级，存在测试回归风险 |
| [#8159](https://github.com/nearai/ironclaw/pull/8159) | 24 天 | 低 | GitHub Actions 11 个包更新，风险较低 |
| [#8158](https://github.com/nearai/ironclaw/pull/8158) | 26 天 | 低 | Storybook UI 测试框架升级 |
| [#8156](https://github.com/nearai/ironclaw/pull/8156) | 26 天 | 低 | Storybook Vitest 插件更新 |
| [#8155](https://github.com/nearai/ironclaw/pull/8155) | 26 天 | **高** | DOMPurify 安全修复（XSS 防护），建议优先合并 |
| [#8157](https://github.com/nearai/ironclaw/pull/8157) | 26 天 | 低 | Certifi CA 证书包续期 |
| [#8154](https://github.com/nearai/ironclaw/pull/8154) | 27 天 | 低 | Vite 构建工具升级 |

**⚠️ 需优先处理：** [#8155](https://github.com/nearai/ironclaw/pull/8155)（dompurify）因其前端安全影响应优先合并。`rustls` 补丁（#8165、#8166）涉及安全修复且已积压 16+ 天，同样需要尽快处理。

---

*本日报基于 nearai/ironclaw GitHub 数据生成 — 2026-11-18*</think>



</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the English text into Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, numbers, dates, issue/PR references, code, project names, repository slugs, version tags, etc. as-is
4. Use natural technical Chinese appropriate for a Chinese developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output

Let me translate section by section carefully.

Key terms to translate consistently:
- "Overview" → 概览
- "Releases" → 版本发布
- "Project Progress" → 项目进展
- "Community Hot Topics" → 社区热点
- "Bugs & Stability" → Bug 与稳定性
- "Feature Requests & Roadmap Signals" → 功能请求与路线图信号
- "User Feedback Summary" → 用户反馈摘要
- "Backlog Watch" → 待办关注

Technical terms:
- "session loss" → 会话丢失
- "hotfix" → 热修复
- "PR" → PR (keep as PR)
- "plugin" → 插件
- "theme extension point" → 主题扩展点
- "BiDi" → BiDi (keep)
- "RTL" → RTL (keep)
- "CJK" → CJK (keep)
- "llama.cpp" → llama.cpp (keep)
- "ReMeLight" → ReMeLight (keep)
- "MCP" → MCP (keep)
- "WeChat" → 微信
- "DoomLoopGate" → DoomLoopGate (keep)
- "safe-area-inset" → safe-area-inset (keep)

Let me go through the entire document carefully.
</think>


# QwenPaw 项目摘要 — 2026-11-18

---

## 1. 今日概览

QwenPaw 保持较高的开发活跃度，过去 24 小时内 **更新了 45 个 PR** 和 **处理了 15 个 Issue**，表明多线并行开发正在积极推进。Issue 中 9 个已关闭（60%），6 个保持 open/active 状态；PR 中 19 个达到 merged/closed 状态。今日未发布新版本，但多个中大型 PR 正在推进审查中（尤其是插件架构和本地模型管理方向）。社区积极反馈平台特定问题（Windows、移动端、微信渠道），同时功能开发聚焦于可扩展性（插件系统、CLI 命令、平台 Web 应用集成）。

---

## 2. 版本发布

**今日无新版本发布。** 项目当前稳定版仍为 2.3.0，热修复版本 2.3.0.post1 在部分 PR 中被引用。遇到版本相关问题的用户需确保已升级至最新补丁版本。

---

## 3. 项目进展

### 已合并/关闭的 PR（共 19 个）

| PR | 标题 | 规模 | 影响 |
|---|---|---|---|
| [#8795](https://github.com/agentscope-ai/QwenPaw/pull/8795) | fix(channels): 将最低 QwenPaw 版本要求降至 2.3.0.post1 | XS | 依赖对齐 |
| [#8151](https://github.com/agentscope-ai/QwenPaw/pull/8151) | fix(local_models): 正确解析 llama.cpp 构建号，避免误触发更新 | M | 本地模型检测稳定性修复 |
| [#8166](https://github.com/agentscope-ai/QwenPaw/pull/8166) | docs(heartbeat): 补充静默期、并发与重载机制文档 | S | 文档完善 |
| [#2367](https://github.com/agentscope-ai/QwenPaw/pull/2367) | fix(console): 强化会话删除流程的健壮性 | — | 会话管理健壮性提升 |
| [#2355](https://github.com/agentscope-ai/QwenPaw/pull/2355) | fix(console): 在机器人前缀与消息文本之间添加空格 | — | Telegram 机器人 UX 问题修复 |
| [#2142](https://github.com/agentscope-ai/QwenPaw/pull/2142) | fix: 为 RTL 语言添加 BiDi 文本支持 | — | 国际化（RTL 语言支持） |

**关键进展方向：**
- **会话管理** 在执行危险操作前增加备份快照，强化健壮性
- **本地模型处理** 改进了 llama.cpp 版本检测逻辑
- **国际化** 增强了 RTL 语言及 CJK 文本的支持

### 正在审查中的 Open PR（前 10 个）

| PR | 标题 | 规模 | 状态 |
|---|---|---|---|
| [#8799](https://github.com/agentscope-ai/QwenPaw/pull/8799) | fix(skills): 防止点击技能池删除按钮时误打开详情页 | S | 审查中 |
| [#8701](https://github.com/agentscope-ai/QwenPaw/pull/8701) | fix(loop): 将追加至同一条回复的工具调用记录下来 | M | 审查中 |
| [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) | fix(console): 修复聊天 Markdown 中 CJK 强调边界的渲染问题 | XL | 审查中 |
| [#8728](https://github.com/agentscope-ai/QwenPaw/pull/8728) | fix(providers): 使用声明的 Responses thinking-off 控制方式 | S | 审查中 |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | feat(memory): 支持为 ReMeLight 记忆写入配置独立模型 | XL | 审查中 |

---

## 4. 社区热点

### 讨论最活跃的 Issue

1. **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)** — 功能：插件级主题扩展点（18 条评论）  
   **摘要：** 插件作者希望在当前 `set(pluginId, { colorPrimary })` API 之外获得更深入的主题定制能力。用户可选择配色方案并自定义强调色，但插件的主题选项有限。  
   **核心需求：** 插件生态的可扩展性；用户界面与插件界面之间的主题一致性。  
   **状态：** OPEN

2. **[#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724)** — Bug：Windows 桌面端会话丢失（6 条评论）  
   **摘要：** 用户反映电脑空闲一段时间后对话完全丢失，且无法在控制台中找到相关会话。可能与模型配置丢失有关。  
   **核心需求：** 可靠的会话持久化和恢复机制。  
   **状态：** CLOSED

3. **[#7745](https://github.com/agentscope-ai/QwenPaw/issues/7745)** — Bug：切换 Agent 时删除 Agent 的上一条会话（4 条评论）  
   **摘要：** 每次切换 Agent 时触发会话账本缺陷，影响历史会话的可访问性。  
   **核心需求：** 多 Agent 工作流中的会话历史完整性。  
   **状态：** CLOSED

### 高活跃度功能 PR

- **[#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499)** (XXXL) — 将本地模型管理提取为独立插件：将模型下载和 llama.cpp 生命周期管理移至插件
- **[#8793](https://github.com/agentscope-ai/QwenPaw/pull/8793)** (XXXL) — 通过共享平台 Web 应用访问本地 QwenPaw：云端到本地工作空间的桥接
- **[#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554)** (XXXL) — 插件 CLI 命令与扩展点：插件系统可扩展性
- **[#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469)** (XXXL) — 将 MCP 提取为独立插件：模块化架构重构

---

## 5. Bug 与稳定性

### 报告的 Bug（按活跃度/影响排序）

| Issue | 标题 | 严重性信号 | 是否有修复 PR |
|---|---|---|---|
| [#8796](https://github.com/agentscope-ai/QwenPaw/issues/8796) | 移动端全屏模式下渲染在系统状态栏下方（顶部 safe-area-inset 缺失） | 影响最新 main 分支的移动端用户；viewport-fit=cover 修复引入的回归 | 无 |
| [#8700](https://github.com/agentscope-ai/QwenPaw/issues/8700) | DoomLoopGate 在 agentscope 累积回复时从不触发 | 循环检测静默失败；v2.3.0 和 main 分支均可复现 | [#8701](https://github.com/agentscope-ai/QwenPaw/pull/8701) |
| [#8789](https://github.com/agentscope-ai/QwenPaw/issues/8789) | 批量任务参数校验失败前会先分发同级子 Agent | 数据校验缺失；可能导致意外的 Agent 启动 | 无 |
| [#8709](https://github.com/agentscope-ai/QwenPaw/issues/8709) | 微信渠道 ACCOUNT_IN_USE 错误及 PLATFORM_RESULT_UNKNOWN | 渠道启动失败；v2.3.0 用户反馈 | 无 |
| [#8693](https://github.com/agentscope-ai/QwenPaw/issues/8693) | 微信渠道插件启动失败（ACCOUNT_IN_USE） | 启动时平台冲突；与 #8709 相关 | 无 |
| [#8716](https://github.com/agentscope-ai/QwenPaw/issues/8716) | Windows 端 source-intelligence 写入路径从原始 source_id 推导目录 | Windows 特定路径构建 Bug | 无 |
| [#8798](https://github.com/agentscope-ai/QwenPaw/issues/8798) | kilo-auto/free 模型收到 MODEL_QUOTA_EXCEEDED | 第三方 API 配额问题 | 不适用 |
| [#8547](https://github.com/agentscope-ai/QwenPaw/issues/8547) | Creator 灵感示例在 Windows 端无法打开 | #7291 的回归；Windows 路径处理问题 | 无 |

**重点观察：**
- **微信渠道问题**（#8709、#8693）反复出现，影响生产环境用户
- **移动端渲染回归** 鉴于 viewport-fit 变更，需紧急处理
- **循环检测 Bug**（#8700）已有对应修复 PR 正在审查

---

## 6. 功能请求与路线图信号

### 活跃中的功能请求

| Issue | 标题 | 社区关注度 | 近期实现可能性 |
|---|---|---|---|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 插件级主题扩展点 | 高（18 条评论） | 中 — 正在积极讨论 |
| [#8780](https://github.com/agentscope-ai/QwenPaw/issues/8780) | 为 qwenpawmail 添加 save_draft 工具 | 特定工作流需求 | 低 — 小众场景 |
| [#6952](https://github.com/agentscope-ai/QwenPaw/issues/6952) | 性能：工具 Schema 未排序导致的前缀缓存不稳定 | 性能关注点 | 中 — 需要技术修复 |

### 从 PR 中看出的路线图信号

1. **插件架构扩展** — 多个 XXXL 级别 PR 表明核心架构方向：
   - 本地模型管理提取（#8499）
   - MCP 提取为独立插件（#8469）
   - 插件 CLI 命令（#8554）
   - 平台 Web 应用集成（#8793）

2. **记忆系统增强** — ReMeLight 记忆写入支持独立模型（#7719）解决成本优化问题

3. **Advisor 系统改进** — 提升 worker-advisor 协作（#8797）

**预判：** 下一版本（预计 2.4.x）将重点强调插件模块化，本地模型管理和 MCP 将作为一等公民插件。记忆成本控制和平台集成是次要路线图项目。

---

## 7. 用户反馈摘要

### 痛点

| 类别 | 证据 | 影响 |
|---|---|---|
| **会话可靠性** | #7724、#7745、#2367 | 用户丢失工作成果；空闲或切换 Agent 后会话不可访问 |
| **微信集成** | #8709、#8693、#7767 | 渠道启动失败阻碍生产环境部署 |
| **平台特定问题** | #8716、#8547（Windows）、#8796（移动端） | 各操作系统体验不一致；近期移动端出现回归 |
| **模型配额困惑** | #8798 | 第三方 API 限制导致意外失败 |
| **批量任务校验** | #8789 | 无效输入导致不可预测的子 Agent 行为 |

### 正面信号

- **文档完善**（#8166）解决了运行时行为认知困惑
- **CJK 和 RTL 支持**（#8133、#2142）服务国际社区
- **双向文本** 支持扩展了 RTL 语言市场覆盖

### 浮现的使用场景

- **邮件草稿工作流** — 用户希望在草稿阶段执行操作而不立即发送
- **跨平台工作空间** — 云端到本地控制台访问（#8793）服务高级用户
- **成本优化** — 记忆操作用独立模型（#7719）解决费用担忧

---

## 8. 待办关注

### 长期未响应的重要 Issue

| Issue | 标题 | 持续时间 | 状态 | 优先级 |
|---|---|---|---|---|
| [#6952](https://github.com/agentscope-ai/QwenPaw/issues/6952) | 前缀缓存不稳定（工具 Schema 未排序导致） | 约 100 天 | OPEN | 中 — 性能相关 |
| [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | Guardrail 插件 Bug 报告（stale blob、cron 错发、tail-drop） | 约 65 天 | CLOSED | 已解决 |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Windows 端会话丢失 | 约 67 天 | CLOSED | 已解决 |

### 需要维护者关注的 PR

| PR | 标题 | 规模 | 等待时间 | 状态 |
|---|---|---|---|---|
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) | 将本地模型管理提取为独立插件 | XXXL | 约 20 天 | OPEN，审查中 |
| [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | 将 MCP 提取为独立插件 | XXXL | 约 21 天 | OPEN |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) | 插件 CLI 命令与扩展点 | XXXL | 约 15 天 | OPEN |
| [#8793](https://github.com/agentscope-ai/QwenPaw/pull/8793) | 通过平台 Web 应用访问本地 QwenPaw | XXXL | 约 1 天 | OPEN |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | 支持为 ReMeLight 记忆写入配置独立模型 | XL | 约 67 天 | OPEN，审查中 |

**建议行动：** 三个 XXXL 级别的架构重构 PR 已审查 15-21 天。维护者应优先安排代码审查或提供反馈，以解除插件架构计划的阻塞。

---

*生成日期：2026-11-18 | 数据来源：github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me carefully translate it while following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate section by section:

Title: ZeroClaw Project Digest — 2026-11-18
→ ZeroClaw 项目摘要 — 2026-11-18

## 1. Today's Overview

ZeroClaw shows high activity with 21 issues and 50 PRs updated in the last 24 hours, all issues remaining open. The project is actively preparing the v0.9.1 release, evidenced by multiple release-tagged bugs and PRs. Security concerns dominate discussion, with emergency-stop enforcement, credential scoping, and cron job timeouts drawing sustained attention. The Lucid memory backend retirement is advancing as a breaking change, while MCP OAuth 2.1 integration and channel streaming features progress through review.

→ ZeroClaw 今日活跃度较高，过去 24 小时内有 21 个 issue 和 50 个 PR 发生更新，所有 issue 保持开放状态。多个 issue 和 PR 被标记为 release，表明项目正在积极筹备 v0.9.1 版本发布。

Security concerns dominate discussion → 安全问题成为讨论焦点

with emergency-stop enforcement → 紧急停机机制的强制执行

credential scoping → 凭证作用域管理

cron job timeouts → 定时任务超时

drawing sustained attention → 持续受到关注

The Lucid memory backend retirement is advancing → Lucid 内存后端的废弃工作正在推进

as a breaking change → 作为一次破坏性变更

while MCP OAuth 2.1 integration → 同时，MCP OAuth 2.1 集成

and channel streaming features → 以及频道流式传输功能

progress through review → 正在推进审查

## 2. Releases

**No new releases today.** The v0.9.1 milestone is actively targeting bugs (see Bugs & Stability and PR #12521), but no tagged release has been published yet.

→ **今日无新版本发布。** v0.9.1 里程碑正积极修复 bug（参见"Bugs & Stability"及 PR #12521），但尚未发布正式 tag 版本。

## 3. Project Progress

### Merged/Closed PRs Today (9 total)

→ ### 今日合并/关闭的 PR（共 9 个）

| PR | Description | Risk |
|----|-------------|------|
| [#11780](https://github.com/zeroclaw-labs/zeroclaw/pull/11780) | fix(sop): document and name `max_concurrent_total` in capacity refusals | stale-candidate |
| [#11779](https://github.com/zeroclaw-labs/zeroclaw/pull/11779) | fix(sop): surface malformed SOP.toml failures in `sop list` | stale-candidate |
| [#11647](https://github.com/zeroclaw-labs/zeroclaw/pull/11647) | fix(providers): decouple vision support from system merge | medium |
| [#11598](https://github.com/zeroclaw-labs/zeroclaw/pull/11598) | feat(security): support glob matching in command allowlist | high |
| [#11238](https://github.com/zeroclaw-labs/zeroclaw/pull/11238) | fix(config): accept tagged declarative cron schedules | medium |
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | fix(runtime): make interactive Ctrl+C state-aware | medium |
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | feat(channels): add VoiceHost WebSocket bridge | high |

| PR | 描述 | 风险 |
|----|------|------|
| [#11780](https://github.com/zeroclaw-labs/zeroclaw/pull/11780) | fix(sop): 在容量拒绝响应中记录并命名 `max_concurrent_total` | stale-candidate |
| [#11779](https://github.com/zeroclaw-labs/zeroclaw/pull/11779) | fix(sop): 在 `sop list` 中暴露 SOP.toml 格式错误 | stale-candidate |
| [#11647](https://github.com/zeroclaw-labs/zeroclaw/pull/11647) | fix(providers): 将视觉支持与系统合并解耦 | medium |
| [#11598](https://github.com/zeroclaw-labs/zeroclaw/pull/11598) | feat(security): 支持命令白名单中的 glob 匹配 | high |
| [#11238](https://github.com/zeroclaw-labs/zeroclaw/pull/11238) | fix(config): 接受带标签的声明式 cron 调度配置 | medium |
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | fix(runtime): 让交互式 Ctrl+C 感知状态 | medium |
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | feat(channels): 添加 VoiceHost WebSocket 桥接 | high |

### Key Open PRs Advancing

→ ### 推进中的重要 Open PR

| PR | Description | Size |
|----|-------------|------|
| [#12521](https://github.com/zeroclaw-labs/zeroclaw/pull/12521) | **feat(memory)!: retire the Lucid memory backend** — Removes Lucid backend, migrates configs to SQLite | XL |
| [#12449](https://github.com/zeroclaw-labs/zeroclaw/pull/12449) | feat(mcp): generic OAuth 2.1 authorization-code + PKCE for remote MCP servers | XL |
| [#11882](https://github.com/zeroclaw-labs/zeroclaw/pull/11882) | feat(goal): supervise execution epochs and deferred controls [Goal V1 proposal 5/12] | XL |
| [#11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744) | feat(channels): stream model reasoning in Telegram and Slack drafts | XL |
| [#11741](https://github.com/zeroclaw-labs/zeroclaw/pull/11741) | build(container): publish `dist-broad` image variant with channels-full set | S |
| [#12509](https://github.com/zeroclaw-labs/zeroclaw/pull/12509) | fix(providers): leave unsigned thinking out of Anthropic replays | XS |
| [#12515](https://github.com/zeroclaw-labs/zeroclaw/pull/12515) | fix(web): show typed prompt and stored times in reloaded chat | XS |

| PR | 描述 | 规模 |
|----|------|------|
| [#12521](https://github.com/zeroclaw-labs/zeroclaw/pull/12521) | **feat(memory)!: 废弃 Lucid 内存后端** — 移除 Lucid 后端，将配置迁移至 SQLite | XL |
| [#12449](https://github.com/zeroclaw-labs/zeroclaw/pull/12449) | feat(mcp): 为远程 MCP 服务器提供通用 OAuth 2.1 授权码模式 + PKCE | XL |
| [#11882](https://github.com/zeroclaw-labs/zeroclaw/pull/11882) | feat(goal): 监督执行周期和延迟控制 [Goal V1 提案 5/12] | XL |
| [#11744](https://github.com/zeroclaw-labs/zeroclaw/pull/11744) | feat(channels): 在 Telegram 和 Slack 草稿中流式传输模型推理 | XL |
| [#11741](https://github.com/zeroclaw-labs/zeroclaw/pull/11741) | build(container): 发布包含 channels-full 集的 `dist-broad` 镜像变体 | S |
| [#12509](https://github.com/zeroclaw-labs/zeroclaw/pull/12509) | fix(providers): Anthropic 回放中排除未签名 thinking 块 | XS |
| [#12515](https://github.com/zeroclaw-labs/zeroclaw/pull/12515) | fix(web): 在重新加载的聊天中显示键入的提示词和存储时间 | XS |

## 4. Community Hot Topics

### Most Active Issues (by comment count)

→ ### 最活跃的 Issue（按评论数排序）

| Issue | Title | Comments | Severity |
|-------|-------|----------|----------|
| #8600 | **[Feature]: easy per-chat model switching for multi-model providers** | 5 | risk:high |
| #12401 | **Bug**: Tool-context collapse breaks Claude Opus 5.5 chats | 5 | S1 |
| #9191 | **Bug**: Cron agent jobs have no wall-clock timeout | 5 | S1 |
| #9644 | **Feature**: Retire Lucid memory backend in v0.9.1 | 4 | risk:high |
| #9390 | **Bug**: emergency stop is CLI-only state file no runtime reads | 4 | S1, security |
| #9802 | **RFC**: Complete emergency-stop enforcement for in-flight and network ops | 3 | risk:high |

| Issue | 标题 | 评论数 | 严重程度 |
|-------|------|--------|----------|
| #8600 | **[Feature]: 多模型提供商场景下实现便捷的逐对话模型切换** | 5 | risk:high |
| #12401 | **Bug**: 工具上下文折叠导致 Claude Opus 5.5 对话中断 | 5 | S1 |
| #9191 | **Bug**: Cron agent 任务缺少墙上时钟超时机制 | 5 | S1 |
| #9644 | **Feature**: 在 v0.9.1 中废弃 Lucid 内存后端 | 4 | risk:high |
| #9390 | **Bug**: 紧急停机仅存在于 CLI 状态文件，运行时路径未读取 | 4 | S1, security |
| #9802 | **RFC**: 为飞行中和网络操作完善紧急停机强制执行机制 | 3 | risk:high |

### Underlying Needs Analysis

→ ### 深层需求分析

- **Model flexibility**: Users migrating from Moltis expect provider-level model switching without agent recreation (#8600). This is a key UX gap.
  - **Model flexibility**: 从 Moltis 迁移过来的用户期望在提供商层面切换模型，无需重建 agent (#8600)。这是一个关键的 UX 缺口。

- **Security hardening**: The emergency-stop system has a documented gap where CLI-only state files are not enforced at runtime (#9390, #9802). The RFC proposes extending enforcement to in-flight tool work and network egress.
  - **Security hardening**: 紧急停机系统存在一个已知缺陷——CLI 状态文件在运行时不被强制执行 (#9390, #9802)。RFC 提议将强制执行范围扩展至飞行中的工具调用和网络出口。

- **Operational reliability**: Cron jobs blocking all scheduling (#12489, #9191) and lack of cost enforcement modes (#12477) indicate enterprise-grade operational controls are immature.
  - **Operational reliability**: Cron 任务阻塞整个调度器 (#12489, #9191) 以及成本强制模式缺失 (#12477)，表明企业级运维管控能力尚不成熟。

## 5. Bugs & Stability

Ranked by severity (S0/S1 = workflow blocked, S2 = degraded, S3 = minor):

→ 按严重程度排序（S0/S1 = 工作流阻塞，S2 = 降级，S3 = 轻微）：

### S0 — Data Loss / Security Risk

→ ### S0 — 数据丢失 / 安全风险

| Issue | Title | Link | Fix PR |
|-------|-------|------|--------|
| #12514 | supervised SOP asks for no approval when step 1's decide answer is no | [#12514](https://github.com/zeroclaw-labs/zeroclaw/issues/12514) | — |

| Issue | 标题 | 链接 | 修复 PR |
|-------|------|------|----------|
| #12514 | supervised SOP 在第一步 decide 答案为"否"时错误地不请求审批 | [#12514](https://github.com/zeroclaw-labs/zeroclaw/issues/12514) | — |

### S1 — Workflow Blocked

→ ### S1 — 工作流阻塞

| Issue | Title | Link | Fix PR |
|-------|-------|------|--------|
| #12401 | Tool-context collapse (`keep_tool_context_turns`) breaks Claude Opus 5.5 with thinking-signature 400 | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | — |
| #9191 | Cron agent jobs have no wall-clock timeout; in-flight locks only cleared at process start | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | — |
| #9390 | emergency stop is CLI-only state file no runtime path reads | [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | — |
| #12477 | `cost.enforcement.mode` is ignored; exceeded budget always stops turn even in "warn" mode | [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | — |

| Issue | 标题 | 链接 | 修复 PR |
|-------|------|------|----------|
| #12401 | 工具上下文折叠（`keep_tool_context_turns`）因 thinking-signature 400 导致 Claude Opus 5.5 对话中断 | [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401) | — |
| #9191 | Cron agent 任务缺少墙上时钟超时；飞行中的锁仅在进程启动时清理 | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | — |
| #9390 | 紧急停机仅存在于 CLI 状态文件，运行时路径未读取 | [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | — |
| #12477 | `cost.enforcement.mode` 被忽略；超出预算时即使在"warn"模式下也会停止轮次 | [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477) | — |

### S2 — Degraded Behavior

→ ### S2 — 功能降级

| Issue | Title | Link | Fix PR |
|-------|-------|------|--------|
| #12504 | Anthropic provider replays unsigned thinking block → 400 `signature: Field required` | [#12504](https://github.com/zeroclaw-labs/zeroclaw/issues/12504) | [#12509](https://github.com/zeroclaw-labs/zeroclaw/pull/12509) |
| #12492 | Dashboard chats ignore runtime profile's thinking settings | [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492) | — |
| #12476 | gateway logs every connection at INFO, flooding runtime trace | [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | — |
| #12489 | cron scheduler waits for whole due batch; one long agent job delays all others | [#12489](https://github.com/zeroclaw-labs/zeroclaw/issues/12489) | — |

| Issue | 标题 | 链接 | 修复 PR |
|-------|------|------|----------|
| #12504 | Anthropic provider 重放未签名的 thinking 块 → 400 `signature: Field required` | [#12504](https://github.com/zeroclaw-labs/zeroclaw/issues/12504) | [#12509](https://github.com/zeroclaw-labs/zeroclaw/pull/12509) |
| #12492 | Dashboard 对话忽略运行时 profile 的 thinking 设置 | [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492) | — |
| #12476 | gateway 以 INFO 级别记录每个连接，淹没运行时追踪 | [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | — |
| #12489 | cron 调度器等待整个到期批次；一个长时间运行的 agent 任务延迟所有其他任务 | [#12489](https://github.com/zeroclaw-labs/zeroclaw/issues/12489) | — |

### S3 — Minor

→ ### S3 — 轻微问题

| Issue | Title | Link |
|-------|-------|------|
| #12507 | Web chat shows runtime's `[CURRENT DATE & TIME: …]` prefix after chat reload | [#12507](https://github.com/zeroclaw-labs/zeroclaw/issues/12507) |
| #12400 | dashboard write-deadline test fails on Windows | [#12400](https://github.com/zeroclaw-labs/zeroclaw/issues/12400) |

| Issue | 标题 | 链接 |
|-------|------|------|
| #12507 | 聊天重新加载后，Web 界面显示运行时的 `[CURRENT DATE & TIME: …]` 前缀 | [#12507](https://github.com/zeroclaw-labs/zeroclaw/issues/12507) |
| #12400 | dashboard 写入超时测试在 Windows 上失败 | [#12400](https://github.com/zeroclaw-labs/zeroclaw/issues/12400) |

## 6. Feature Requests & Roadmap Signals

→ ## 6. 功能请求与路线图信号

### High-Engagement Feature Requests

→ ### 高参与度功能请求

| Issue | Title | Priority | Notes |
|-------|-------|----------|-------|
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | Easy per-chat model switching for multi-model providers | p2, risk:high | Migration path from Moltis; users expect provider-as-model-select |
| [#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) | Retire Lucid memory backend in v0.9.1 | p2, risk:high | **Active PR**: [#12521](https://github.com/zeroclaw-labs/zeroclaw/pull/12521) |
| [#12054](https://github.com/zeroclaw-labs/zeroclaw/issues/12054) | Honor runtime-profile thinking levels for OpenAI | — | Currently, profile thinking config is ignored for OpenAI native reasoning |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC: Scoped operator-managed service credentials | RFC, security | Credential scoping without exposing to model/chat/skill text |

| Issue | 标题 | 优先级 | 备注 |
|-------|------|--------|------|
| [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) | 多模型提供商场景下实现便捷的逐对话模型切换 | p2, risk:high | 从 Moltis 的迁移路径；用户期望以提供商身份选择模型 |
| [#9644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) | 在 v0.9.1 中废弃 Lucid 内存后端 | p2, risk:high | **活跃 PR**: [#12521](https://github.com/zeroclaw-labs/zeroclaw/pull/12521) |
| [#12054](https://github.com/zeroclaw-labs/zeroclaw/issues/12054) | 尊重 OpenAI 的运行时 profile thinking 级别 | — | 当前 profile thinking 配置对 OpenAI 原生推理无效 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC：作用域化的运维托管服务凭证 | RFC, security | 凭证作用域划分，不向 model/chat/skill 文本暴露 |

### Predicted v0.9.1 Contents
Based on release-tagged issues and PRs:

→ ### 预测 v0.9.1 包含内容
基于标记为 release 的 issue 和 PR：

- Lucid memory backend removal (PR #12521)
  → Lucid 内存后端移除（PR #12521）
- Anthropic unsigned thinking block fix (PR #12509)
  → Anthropic 未签名 thinking 块修复（PR #12509）
- SOP fail-closed decision handling (PR #12237)
  → SOP 故障安全决策处理（PR #12237）
- Dashboard write-deadline Windows fix (Issue #12400)
  → Dashboard 写入超时 Windows 修复（Issue #12400）
- Possibly: cost enforcement mode fix (Issue #12477)
  → 可能包含：成本强制模式修复（Issue #12477）

## 7. User Feedback Summary

→ ## 7. 用户反馈摘要

### Pain Points

→ ### 痛点

| Theme | Evidence |
|-------|----------|
| **Operational opacity** | Cron jobs block entire scheduler (#12489); locks persist across restarts (#9191) |
| **Config inconsistency** | `cost.enforcement.mode` is parsed but ignored (#12477); dashboard ignores profile thinking settings (#12492) |
| **Security gaps** | Emergency-stop enforcement incomplete (#9390); approval gate bypassed on "no" decisions (#12514) |
| **Provider parity** | Users from Moltis expect provider-level model switching, not agent-level (#8600) |
| **Web UX** | Chat reloads show synthetic timestamps and date prefixes (#12507) |
| **Dependency risk** | `chrono` and `chrono-tz` flagged as unmaintained (RUSTSEC-2026-0543, RUSTSEC-2026-0555) (#12505) |

| 主题 | 证据 |
|------|------|
| **运维不透明** | Cron 任务阻塞整个调度器 (#12489)；锁在重启后仍持续 (#9191) |
| **配置不一致** | `cost.enforcement.mode` 被解析但被忽略 (#12477)；Dashboard 忽略 profile thinking 设置 (#12492) |
| **安全缺口** | 紧急停机强制执行不完整 (#9390)；审批门在"否"决策时被绕过 (#12514) |
| **提供商对等性** | 从 Moltis 迁移的用户期望提供商级别的模型切换，而非 agent 级别 (#8600) |
| **Web UX** | 聊天重新加载显示合成时间戳和日期前缀 (#12507) |
| **依赖风险** | `chrono` 和 `chrono-tz` 被标记为停止维护 (RUSTSEC-2026-0543, RUSTSEC-2026-0555) (#12505) |

### Satisfaction Signals
- Positive engagement on MCP OAuth 2.1 PR (#12449) suggests strong demand for secure remote MCP integrations
- Channel streaming for Telegram/Slack (#11744) addresses long-standing multi-platform parity requests

→ ### 满意度信号
- MCP OAuth 2.1 PR (#12449) 获得积极反馈，表明对安全远程 MCP 集成的强烈需求
- Telegram/Slack 频道流式传输 (#11744) 满足了长期的多平台对等性需求

## 8. Backlog Watch

→ ## 8. 待办事项追踪

### Long-Unanswered / Stale Important Items

→ ### 长期未回复 / 陈旧的重要事项

| Issue | Age | Status | Link |
|-------|-----|--------|------|
| #8600 — Per-chat model switching | ~4.5 months | accepted, no-stale | [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) |
| #9191 — Cron wall-clock timeout | ~4 months | accepted, no-stale | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) |
| #9390 — Emergency stop gap | ~4 months | no-stale | [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) |
| #7821 — Canonical sandbox_policy schema | ~5 months | needs-author-action | [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) |

| Issue | 时长 | 状态 | 链接 |
|-------|------|------|------|
| #8600 — 逐对话模型切换 | 约 4.5 个月 | 已接受, no-stale | [#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) |
| #9191 — Cron 墙上时钟超时 | 约 4 个月 | 已接受, no-stale | [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) |
| #9390 — 紧急停机缺口 | 约 4 个月 | no-stale | [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) |
| #7821 — 规范 sandbox_policy schema | 约 5 个月 | 需要作者操作 | [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) |

### Items Needing Maintainer Attention

→ ### 需要维护者关注的事项

| Item | Type | Link |
|------|------|------|
| Chrono/chrono-tz RUSTSEC advisories | Issue tracking dependency retirement | [#12505](https://github.com/zeroclaw-labs/zeroclaw/issues/12505) |
| Python SSH task helper retirement | Tracking issue post-#12438 | [#12518](https://github.com/zeroclaw-labs/zeroclaw/issues/12518) |
| Dist-broad Trivy scan integration | Task pending first release | [#12523](https://github.com/zeroclaw-labs/zeroclaw/issues/12523) |
| Goal V1 proposal 5/12 | Large PR blocked on validation | [#11882](https://github.com/zeroclaw-labs/zeroclaw/pull/11882) |

| 项目 | 类型 | 链接 |
|------|------|------|
| Chrono/chrono-tz RUSTSEC 警告 | 追踪依赖废弃的 Issue | [#12505](https://github.com/zeroclaw-labs/zeroclaw/issues/12505) |
| Python SSH task helper 废弃 | #12438 后的追踪 Issue | [#12518](https://github.com/zeroclaw-labs/zeroclaw/issues/12518) |
| Dist-broad Trivy 扫描集成 | 等待首次发布后执行的任务 | [#12523](https://github.com/zeroclaw-labs/zeroclaw/issues/12523) |
| Goal V1 提案 5/12 | 等待验证的大型 PR | [#11882](https://github.com/zeroclaw-labs/zeroclaw/pull/11882) |

---

*Generated 2026-11-18. Data reflects activity from the preceding 24 hours.*

→ *生成于 2026-11-18。数据反映过去 24 小时内的活动。*</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*