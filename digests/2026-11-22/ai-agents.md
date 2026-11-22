# OpenClaw 生态日报 2026-11-22

> Issues: 412 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-22 02:35 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure exactly the same
2. Keep URLs, numbers, dates, code references, issue/PR numbers, project names, etc. in their original form
3. Use natural technical Chinese suitable for a Chinese developer newsletter
4. Output ONLY the translation with no preamble or explanation

Let me translate section by section:

**Section 1: Today's Overview**
- "OpenClaw continues to experience high community activity" - OpenClaw 社区保持高度活跃
- "No new releases today" - 今日无新版本发布
- "The project is navigating a cluster of update-related regressions" - 项目正在处理一系列更新相关的回退问题
- "Overall health shows moderate stress" - 整体健康状况显示中等压力

**Section 2: Releases**
- "No new releases today" - 今日无新版本发布
- "The last documented activity centers on beta candidates" - 最新活动主要围绕 beta 候选版本
- "Users on stable releases should monitor for pending patches" - 稳定版用户应关注待发布的补丁

**Section 3: Project Progress**
- Merged/Closed PRs - 已合并/已关闭的 PR
- Notable Open PRs - 值得关注的开放 PRs
- "needs proof" - 需要提供证明
- "waiting on author" - 等待作者
- "ready for maintainer" - 等待维护者审查
- "waiting on maintainer" - 等待维护者

**Section 4: Community Hot Topics**
- "Most Active Issues" - 最活跃的 Issues
- "Most Active PRs" - 最活跃的 PRs
- "Signal" - 信号/说明
- "Regression since" - 自某版本以来的回退
- "Broad impact" - 影响范围广


- "Cold fallback" and "crash-loop" are technical terms related to system failure modes - 冷备降级 and 崩溃循环
- "Data integrity" and "blocked rollback" describe database consistency issues - 数据完整性和回滚受阻
- "Liveness stalls" refers to system responsiveness - 活性停滞
- "Message loss" and "session lock" are concurrency problems - 消息丢失 and 会话锁定
- "Performance regression" indicates degraded performance compared to baseline - 性能回退
- "Auth provider" and "Memory pressure" are infrastructure and resource concerns - 认证提供方 and 内存压力
- "Crash-loop" again, "Scheduled task" - 崩溃循环 and 定时任务
- "Platform parity" and "Cross-platform push" - 平台一致性和跨平台推进

**Section 6: Feature Requests & Roadmap Signals**
- "High-Engagement Feature Requests" - 高参与度的功能请求
- "Predicted Next Version Indicators" - 预测的下一版本指标
- "UX collision" - UX 冲突
- "Enterprise integration gap" - 企业集成缺口
- "Multi-tenant/enterprise model routing need" - 多租户/企业模型路由需求

**Section 7: User Feedback Summary**
- "Pain Points" - 痛点
- "Satisfying Patterns" - 令人满意的模式
- "Community engagement remains strong" - 社区参与度依然强劲

**Section 8: Backlog Watch**
- "Long-Unanswered Critical Issues" - 长期未解决的严重问题
- "Issues Needing Product Decision" - 需要产品决策的问题
- "Needs product decision" - 需要产品决策
- "Needs maintainer review" - 需要维护者审查

需要保持报告的专业性和清晰度，同时在技术细节和用户体验之间找到平衡。这些术语涵盖了从基础设施到企业集成的各个层面，反映了项目的复杂性和多维度的发展需求。
</think>


# OpenClaw 项目日报 — 2026-11-22

## 1. 今日概览

过去 24 小时内，OpenClaw 社区保持高度活跃，共更新了 412 个 issues 和 500 个 pull requests。今日无新版本发布。最近的活动主要围绕 beta 候选版本（2026.11.5-beta.x），用户反馈了跨 Windows 和 macOS 的更新回退问题。社区贡献者今日新开了 14 个 PR，包括多个针对网关稳定性和平台特定更新失败的高优先级修复。整体健康状况显示中等压力——关键回退问题正在处理中，但更新流程问题正在阻塞部分 beta 通道用户。

---

## 2. 版本发布

**今日无新版本发布。** 最新活动主要围绕 beta 候选版本（2026.11.5-beta.x），用户反馈了更新失败问题。稳定版（2026.11.3）用户应关注待发布的补丁。

---

## 3. 项目进展

### 已合并/已关闭的 PR（今日）

| PR | 标题 | 领域 | 优先级 |
|----|------|------|--------|
| [#203384](https://github.com/openclaw/openclaw/pull/203384) | chore(ui): 刷新 control ui 本地化文件 | web-ui | — |
| [#203369](https://github.com/openclaw/openclaw/pull/203369) | fix: 允许访客从项目对话中提交 GitHub issues | web-ui, gateway | P2 |
| [#202733](https://github.com/openclaw/openclaw/pull/202733) | fix(ui): 保持右侧停靠 Home 操作区不受窗口控件遮挡 | web-ui | P2 |

### 值得关注的开放 PRs（今日）

| PR | 标题 | 领域 | 优先级 | 状态 |
|----|------|------|--------|--------|
| [#203382](https://github.com/openclaw/openclaw/pull/203382) | fix: 让更新后的 Mac 应用将 Gateway 迁移到新版本而非直接退出 | macOS, cli | **P0** | 需要提供证明 |
| [#203375](https://github.com/openclaw/openclaw/pull/203375) | fix: 保持纯文本模型的聊天图片生成功能正常工作 | gateway | **P1** | 需要提供证明 |
| [#203362](https://github.com/openclaw/openclaw/pull/203362) | fix(cron): 按交接和投递回执对失败告警截止时间进行分类 | gateway | P2 | 需要提供证明 |
| [#203364](https://github.com/openclaw/openclaw/pull/203364) | fix: 将已结算的模型 token 计入 Goal 预算 | gateway, agents | P2 | 等待维护者审查 |
| [#203063](https://github.com/openclaw/openclaw/pull/203063) | feat: 按所有者或参与情况过滤共享会话 | web-ui, gateway | P2 | 等待作者 |
| [#203062](https://github.com/openclaw/openclaw/pull/203062) | fix: 内存搜索命中结果在长片段中间截断 | memory-core | P2 | 等待维护者审查 |
| [#203066](https://github.com/openclaw/openclaw/pull/203066) | fix: 长回复拆分成多条消息时保持链接完整 | Slack | P2 | 需要提供证明 |
| [#202306](https://github.com/openclaw/openclaw/pull/202306) | feat: 将没有项目的对话移入某个项目 | web-ui, gateway | P2 | 等待作者 |

---

## 4. 社区热点话题

### 最活跃的 Issues

1. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — 加载大型外部插件时 Gateway 阻塞数分钟 *(85 条评论, P0)*  
   **信号：** 自 2026.9.6 以来的回退。使用外部/工作区插件的用户在启动时和模型运行时代理发布遇到事件循环阻塞。社区参与度最高，表明对使用自定义插件的高级用户影响范围广。

2. **[#191944](https://github.com/openclaw/openclaw/issues/191944)** — macOS 上 `gateway stop` / `stop --force` 执行失败 *(38 条评论, P2)*  
   **信号：** macOS 特定问题，进程祖先检查失败。影响用户执行受控网关关闭。

3. **[#197083](https://github.com/openclaw/openclaw/issues/197083)** — 安装后 Doctor WAL 验证导致 11.3 更新部分完成 *(32 条评论, P0)*  
   **信号：** npm 升级路径中的 SQLite WAL 提交问题。用户更新后处于不一致状态。

4. **[#182891](https://github.com/openclaw/openclaw/issues/182891)** — Prompt 缓存从未被复用 *(22 条评论, P2)*  
   **信号：** 每次请求的缓存读取都降为 0。对于频繁恢复会话的用户，token 和性能成本显著。

5. **[#200606](https://github.com/openclaw/openclaw/issues/200606)** — Candidate Doctor 因迁移冲突阻止 2026.11.5 更新 *(19 条评论, P1)*  
   **信号：** Beta 更新流程失败。用户无法从 2026.11.3 升级到 2026.11.5。

### 最活跃的 PRs

1. **[#202306](https://github.com/openclaw/openclaw/pull/202306)** — feat: 将没有项目的对话移入某个项目 *(XL 规模, 等待作者)*  
   **信号：** 用户强烈要求的对话管理 UX 改进。涉及 5 个领域（文档、web-ui、gateway、脚本、agents）。

2. **[#203106](https://github.com/openclaw/openclaw/pull/203106)** — fix(cron): 聊天创建的自动化任务向用户告知失败情况 *(P1, 等待作者)*  
   **信号：** 静默的自动化失败是主要痛点。用户有 3 天未检测到失败。

---

## 5. Bug 与稳定性

### P0 — 严重（活跃中）

| Issue | 标题 | 影响 | 更新于 |
|-------|------|------|--------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 加载大型插件时 Gateway 阻塞数分钟 | 崩溃循环、事件循环停滞 | 2026-11-21 |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 安装后 Doctor WAL 导致更新部分完成 | 数据完整性、回滚受阻 | 2026-11-21 |
| [#169844](https://github.com/openclaw/openclaw/issues/169844) | Windows 上 Control UI Gateway 更新卡在"激活中" | 崩溃循环、定时任务被禁用 | 2026-11-21 |
| [#166641](https://github.com/openclaw/openclaw/issues/166641) | web_fetch 冷备降级在主线程捕获无关插件 | 活性停滞 | 2026-11-22 |

### P1 — 高优先级

| Issue | 标题 | 影响 | 修复 PR? |
|-------|------|------|----------|
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 回退：Codex helper 补全无法恢复父会话 | 消息丢失、会话锁定 | — |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 2026.10.5 基准 RSS 内存过高（约 1.9 GB） | 内存压力、SQLite 超时 | — |
| [#197515](https://github.com/openclaw/openclaw/issues/197515) | 2026.11.3 上 Codex "数据/设置升级未完成"持续存在 | 认证提供方问题 | — |
| [#169797](https://github.com/openclaw/openclaw/issues/169797) | Gateway 在单 CPU 主机上使用约 2.5 倍内存（2026.9.9/2026.10.1） | 性能回退 | — |

### P2 — 中优先级

值得关注的 Windows/macOS 更新失败：
- [#200756](https://github.com/openclaw/openclaw/issues/200756) — Windows beta.2 → beta.4 更新在 package-swap 阶段失败
- [#200224](https://github.com/openclaw/openclaw/issues/200224) — 2026.11.5 beta 拒绝已弃用的 `agents.defaults.heartbeat`

---

## 6. 功能需求与路线图信号

### 高参与度的功能请求

| Issue | 标题 | 评论数 | 信号 |
|-------|------|--------|------|
| [#163739](https://github.com/openclaw/openclaw/issues/163739) | 使 Control UI 的 Ctrl+Shift+A（归档）可配置 | 16 | 与浏览器快捷键冲突让高级用户苦不堪言 |
| [#138990](https://github.com/openclaw/openclaw/issues/138990) | 为前台 WebChat 运行提供可强制执行的检查点和有界让出 | 12 | 需要对长时间运行的代理具备可见性和控制能力 |
| [#178373](https://github.com/openclaw/openclaw/issues/178373) | Agent 循环没有运行级 turn/token 预算；工具循环检测是可选的 | 11 | 成本控制和安全顾虑日益增长 |
| [#116052](https://github.com/openclaw/openclaw/issues/116052) | MCP OAuth: 支持对不支持 DCR 的 auth 服务器使用预注册客户端 | 8 | 企业集成缺口 |
| [#140213](https://github.com/openclaw/openclaw/issues/140213) | 允许多个策略别名解析到同一个已配置的模型 | 9 | 多租户/企业模型路由需求 |

### 预测的下一版本指标
- **会话管理**改进（PRs #203063, #202306）暗示即将推出 UI 优化
- **Cron/自动化可见性**修复（PRs #203106, #203362）表明可靠性工作重点
- **平台一致性**工作（macOS gateway 更新、Windows 更新修复）显示跨平台推进

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 严重程度 |
|------|------|----------|
| **更新流程失败** | 5+ 个 Windows/macOS beta 更新路径问题 | 高 |
| **内存回退** | 多台主机报告 1.9 GB 基准 RSS | 高 |
| **静默自动化失败** | PR #203106 中记录了 3 天未检测到的 cron 失败 | 高 |
| **Prompt 缓存效率低下** | 每次请求缓存复用率为零（22 条评论，1 个👍） | 中 |
| **Gateway 关闭问题** | macOS 进程祖先检查失败阻塞 stop 命令 | 中 |

### 令人满意的模式
- 社区参与度依然强劲（500 个 PR 更新，85 条评论的讨论帖）
- 多位贡献者提交跨平台修复
- 自动化工具（roboclaw-bot）保持本地化文件和文档最新

---

## 8. 待办事项关注

### 长期未解决的严重问题（>7 天无 PR）

| Issue | 标题 | 时长 | 优先级 | 障碍 |
|-------|------|------|--------|------|
| [#136405](https://github.com/openclaw/openclaw/issues/136405) | 远程 embedding 停滞时 memory_search 在 15s 处挂起 | 约 80 天 | P2 | 需要产品决策超时配置 |
| [#178373](https://github.com/openclaw/openclaw/issues/178373) | 无运行级 turn/token 预算；工具循环检测是可选的 | 约 33 天 | P2 | 需要产品决策 |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron 任务无法结束：无 --until / --max-runs | 约 88 天 | P3 | 需要产品决策 |
| [#153899](https://github.com/openclaw/openclaw/issues/153899) | Gateway 排空等待完整 TimeoutStopSec；定时器对已关闭资源触发 | 约 63 天 | P1 | 需要维护者审查 |
| [#151178](https://github.com/openclaw/openclaw/issues/151178) | 让 Active Memory 将升级决策委托给插件提供方 | 约 66 天 | P2 | 需要产品决策 |

### 需要产品决策的问题
- [#163739](https://github.com/openclaw/openclaw/issues/163739) — 归档快捷键可配置性
- [#178373](https://github.com/openclaw/openclaw/issues/178373) — Agent 循环的 token/turn 预算
- [#138990](https://github.com/openclaw/openclaw/issues/138990) — 前台运行的检查点策略
- [#187264](https://github.com/openclaw/openclaw/issues/187264) — 非所有者频道的调用方作用域调度

---

*生成时间：2026-11-22 | 数据来源：github.com/openclaw/openclaw*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, links, numbers, dates, project names, issue references as-is
4. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully, section by section.

Title: Personal AI Assistant & Agent Open-Source Ecosystem — Cross-Project Digest
Date and Audience lines
Section 1: Ecosystem Overview
Section 2: Activity Comparison - with the big table
Section 3: OpenClaw's Position
Section 4: Shared Technical Focus Areas
Section 5: Differentiation Analysis
Section 6: Community Momentum & Maturity
Section 7: Trend Signals

Let me work through this carefully with proper technical Chinese.
</think>


# Personal AI Assistant & Agent 开源生态 — 跨项目摘要报告
**日期：** 2026-11-22 | **覆盖范围：** 五个活跃项目 | **受众：** 技术决策者、平台工程师、AI Agent 开发者

---

## 1. 生态概览

个人 AI 助手和 Agent 开源生态正处于**高速度增长阶段**，五个追踪项目在单一 24 小时内合计更新了超过 1,000 条事项（Issue + PR）。所有项目今日均无新版本发布——这一模式表明当前处于**发布后稳定期和新版本准备期**的循环，而非开发停滞。整体格局正在分化出两个层级：**大规模、多渠道平台**（OpenClaw、ZeroClaw、Hermes Agent）拥有数百个活跃 Issue 和广泛的插件架构，以及**小而精的工具**（IronClaw、QwenPaw）功能集更有针对性，社区活跃度较低。整个生态中浮现的主导技术主题是**多平台可靠性**、**成本管控与可观测性**、**凭证安全管理**以及**语音/多模态输入处理**。值得注意的是，所有项目今日均无新版本发布——这是一个强烈信号，表明整个生态正在消化近期版本并加固更新流水线，为下一波发布做准备。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|---|---|---|---|---|---|
| **Issue 更新数（24h）** | 412 | 50 | 18 | 6 | 1 |
| Issue 开放/活跃 | 295 | 42 | 12 | 4 | 1 |
| Issue 已关闭 | 117 | 8 | 6 | 2 | 0 |
| **PR 更新数（24h）** | 500 | 50 | 50 | 10 | 0 |
| PR 开放 | 297 | 34 | 42 | 10 | 0 |
| PR 已合并/关闭 | 203 | 16 | 8 | 0 | 0 |
| **新版本数** | 0 | 0 | 0 | 0 | 0 |
| **今日新增 PR** | 14 | — | — | — | 0 |
| **活跃 P0/P1 缺陷** | 8 | 1 | 2 | 0 | 0 |
| **健康评分** | 🟡 中度承压 | 🟢 高吞吐量 | 🟢 高吞吐量 | 🟡 缺陷队列增长中 | ⚪ 活动极少 |
| **主要焦点** | 平台稳定性 | 会话可靠性 | 多渠道运营 | Web/运行时修复 | 提供商目录 |

**解读：**

- **OpenClaw** 在原始数量上领先，但缺陷负担最重——8 个活跃 P0/P1 问题，相比之下更小规模的项目均为零。
- **Hermes Agent 和 ZeroClaw** 的 PR/Issue 比率最健康，合并率可观（分别为 16 和 8）。
- **QwenPaw** 值得注意：10 个开放 PR，零合并——PR 队列积压严重，表明代码审核环节存在瓶颈。
- **IronClaw** 在本 24 小时窗口内基本处于休眠状态，无新增贡献。

---

## 3. OpenClaw 的定位

### 相比同类项目的优势

| 维度 | OpenClaw | 与同类对比 |
|---|---|---|
| **社区规模** | 遥遥领先——295 个开放 Issue，297 个开放 PR | 次大的项目（ZeroClaw、Hermes Agent）各自仅有约 34–42 个开放 Issue |
| **插件生态** | 成熟的外部/workspace 插件架构，带事件循环生命周期 | Hermes Agent 和 ZeroClaw 有插件目录但范围更窄 |
| **多平台覆盖** | Desktop、Web、macOS 网关、Windows CLI、Slack 渠道 | ZeroClaw 覆盖范围相似；Hermes Agent 以 daemon/TUI 为中心 |
| **国际化** | roboclaw-bot 机器人持续更新本地化文件和文档 | 同类项目中未见同等自动化机制 |

### 技术路线差异

OpenClaw 作为**单体网关 + 控制台平台**运行，以 Doctor 自检系统和基于 WAL 的 SQLite 持久化层为核心。其架构假设单个网关进程管理整个 Agent 生命周期。相比之下：

- **Hermes Agent** 采用 **daemon 优先架构**（Hermes daemon、TUI、CLI），基于看板的任务自动化和 Profile 生命周期管理——模块化程度更高，运行时与 Agent 构建的职责分离更清晰。
- **ZeroClaw** 是**多渠道原生**设计，Telegram、Matrix、WhatsApp 和 Discord 适配器作为一等公民存在，渠道被视为对等实体而非事后集成的功能。
- **IronClaw** 是一个**极简 Rust crate**，以提供商目录为核心理念——架构简洁本身就是卖点。
- **QwenPaw** 是**Web 优先控制台**，内置技能打包和控制台插件系统作为前端扩展。

### 社区规模对比

| 项目 | 开放 Issue | 开放 PR | 合计 | 生态排名 |
|---|---|---|---|---|
| **OpenClaw** | 295 | 297 | **592** | **按数量排名第 1** |
| **ZeroClaw** | 12 | 42 | **54** | 第 3 |
| **Hermes Agent** | 42 | 34 | **76** | 按 PR 合并率排名第 1 |
| **QwenPaw** | 4 | 10 | **14** | 第 4 |
| **IronClaw** | 1 | 0 | **1** | 第 5 |

OpenClaw 的合计数量（592）是第二大项目（Hermes Agent 的 76）的**约 10 倍**，表明它是整个生态的**参考平台**。然而，这一数量也反映出更高的缺陷暴露面和更长的 Issue 解决周期。

---

## 4. 跨项目共性技术焦点

### 跨项目技术趋同

以下需求在多个项目中独立出现，表明这是整个生态的真实需求，而非项目特定的问题：

| 共性需求 | 相关项目 | 具体表现 |
|---|---|---|
| **更新流水线可靠性** | OpenClaw, Hermes Agent | Windows/macOS Beta 更新失败（OpenClaw #200756、#191944；Hermes Agent #154275），WAL 校验问题（OpenClaw #197083），安装后 Doctor 卡死 |
| **多渠道消息一致性** | OpenClaw, ZeroClaw | 编辑消息处理：ZeroClaw 有 Telegram/Matrix PR（#12371、#12426）；OpenClaw 有 Slack 链接碎片化问题（#203066） |
| **会话持久化与恢复** | OpenClaw, Hermes Agent | OpenClaw #196199（Codex 补全恢复失败）；Hermes Agent #153426（state.db 不可用时对话轮次丢失）——**两者均已在本日修复** |
| **内存和成本管理** | OpenClaw, ZeroClaw | OpenClaw #181432（基线 RSS 1.9 GB）；ZeroClaw #12627（子 Agent 成本上限被绕过）和 #12637（Cost Overview 数值条缩放） |
| **插件生态可靠性** | OpenClaw, Hermes Agent, QwenPaw | OpenClaw #160959（大型插件阻塞网关）；Hermes Agent #138219（目录固定失败）；QwenPaw #8851（插件路由注册失败） |
| **凭证与安全管理** | ZeroClaw, Hermes Agent | ZeroClaw #12422（作用域操作员托管凭证）；ZeroClaw #12596（浏览器凭证作用域与 TOTP）；Hermes Agent #42307（邮件工具沙箱隔离） |
| **语音和多模态输入** | OpenClaw, ZeroClaw, QwenPaw | OpenClaw #203375（纯文本模型触发聊天图片生成）；ZeroClaw #12632/#12633（语音自动发送 Bug）；QwenPaw #8303（审批提示送达） |
| **平台特定稳定性（Windows）** | OpenClaw, Hermes Agent, ZeroClaw | OpenClaw #200756/#169844；Hermes Agent #158640/#152435；ZeroClaw #12484/#12400 |

### AI Agent 开发者关键洞察

最显著的跨项目趋同集中在**更新和持久化可靠性**——这是生产级 AI Agent 的基础性基础设施问题。五个项目中三个在以下方面存在开放 Issue：
- 数据库在瞬时不可用时的持久化失败
- 平台特定的更新流水线失败
- 静默的自动化失败，连续数天未被察觉

这表明**状态管理、更新安全性和运维可观测性是整个生态尚未解决的核心问题**。

---

## 5. 差异化分析

### 功能焦点对比

| 功能领域 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|---|---|---|---|---|---|
| **核心范式** | 网关 + 控制台 UI | Daemon + 看板自动化 | 多渠道路由中枢 | Web 控制台 + 技能包 | Rust 提供商目录 |
| **多渠道支持** | Slack、Web、Desktop | 终端优先（TUI/CLI） | Telegram、Matrix、WhatsApp、Discord、Signal、LINE | Web 插件应用 | 无 |
| **插件系统** | 外部/workspace 插件，带生命周期钩子 | AgentScope 目录集成 | Webhook 和渠道适配器 | 控制台插件应用 | 提供商扩展 |
| **自动化能力** | 网关定时任务、计划任务 | 看板任务自动化，含任务分解 | 渠道级路由自动化 | 技能包，Anthropic 同步 | 无 |
| **成本控制** | Goal 预算、Token 计数 | 路由降级强制执行 | 成本上限、警告模式、路由降级模型 | 未明确 | 无 |
| **记忆系统** | Active Memory、嵌入阻塞 | OpenViking、记忆检索 | 基于插件的记忆 | 控制台记忆 | 无 |
| **平台覆盖** | macOS、Windows、Linux、Desktop、Web | macOS、Linux、Docker | Windows、Linux、Docker、树莓派（已停止维护） | Linux 为中心 | 跨平台 Rust crate |
| **主要语言** | Node.js/TypeScript | Python（主）、Rust 组件 | Rust（运行时、网关）、TypeScript（Web） | Python | Rust |

### 目标用户对比

| 项目 | 主要用户 | 次要用户 | 企业就绪？ |
|---|---|---|---|
| **OpenClaw** | 需要插件能力的高级用户、开发者 | 需要多会话管理的团队 | 部分就绪——更新流水线存在回归问题 |
| **Hermes Agent** | 开发者、CLI 优先的运维人员 | 使用看板的自动化工程师 | 部分就绪——会话恢复存在问题 |
| **ZeroClaw** | 多渠道运营者、社区管理者 | 有成本管控需求的企业运维 | 就绪——安全、成本强制执行、OIDC |
| **QwenPaw** | Web 化团队、Anthropic 技能用户 | 控制台插件开发者 | 部分就绪——运行时竞态条件 |
| **IronClaw** | 集成 AI 的 Rust 开发者 | 轻量化部署 | 就绪——Rust 简洁性，无外部依赖 |

### 架构哲学

- **OpenClaw**：**集成平台** — UI、网关、插件系统、Agent 共处一个进程内。高度内聚，但级联故障风险更高（事件循环阻塞、WAL 问题）。
- **Hermes Agent**：**模块化 Daemon** — 分离的 daemon、TUI、CLI 和看板 Worker。故障隔离更好，但部署复杂度更高。
- **ZeroClaw**：**路由优先** — 架构以渠道与 Agent 之间的消息路由为核心，成本和安全在路由层强制执行。最适合多渠道运营团队。
- **QwenPaw**：**技能中心** — 控制台作为插件宿主，技能打包分发。Anthropic 工作流集成能力强，但以 Web Dashboard 为中心。
- **IronClaw**：**库优先** — 设计为可嵌入的 Rust crate，而非独立运行。占用最小，集成灵活性最高。

---

## 6. 社区势能与成熟度

### 活跃度层级

| 层级 | 项目 | 特征 |
|---|---|---|
| **第一层 — 生产规模** | OpenClaw | 每日 500+ 条更新，8 个活跃 P0/P1 缺陷，成熟的插件生态，最大的社区。呈现出**技术债务积累**的迹象（关键缺陷存在 80 天未解、内存回归问题）。 |
| **第二层 — 活跃开发** | Hermes Agent, ZeroClaw | 每日 50 条更新，PR 合并率健康（16/50、8/50），功能开发活跃。两者都处于**快速迭代**状态，工程卫生良好。ZeroClaw 安全能力更强；Hermes Agent 会话恢复实践更优。 |
| **第三层 — 孵化阶段** | QwenPaw | 每日 10 条更新，今日 PR 合并数为零，缺陷队列持续增长。PR 审核瓶颈明显。**需要维护者投入**来消化积压的 10 个开放 PR。 |
| **第四层 — 活动极少** | IronClaw | 每日 1 条更新，在本窗口内基本休眠。未必不健康——可能已稳定且功能完备。 |

### 吞吐量分析

| 项目 | 今日更新 PR | 今日合并 | 合并率 | 吞吐量评分 |
|---|---|---|---|---|
| **Hermes Agent** | 50 | 16 | **32%** | 🟢 高 |
| **OpenClaw** | 500 | 203 | 40.6% | 🟢 高（绝对值） |
| **ZeroClaw** | 50 | 8 | 16% | 🟢 中高 |
| **QwenPaw** | 10 | 0 | **0%** | 🔴 停滞 |
| **IronClaw** | 0 | 0 | N/A | ⚪ 休眠 |

### 稳定性与创新平衡

| 项目 | 稳定性投入 | 创新投入 | 平衡评估 |
|---|---|---|---|
| **OpenClaw** | 高 — 修复回归问题、内存、更新流水线 | 中 — PR 中有新功能 | ⚠️ 需要加大稳定性投入 |
| **Hermes Agent** | 高 — P1 会话持久化缺陷已合并修复 | 高 — Profile 生命周期、Gemini 选择器 | 🟢 平衡健康 |
| **ZeroClaw** | 中 — 语音 Bug、会话状态修复 | 高 — 多渠道、凭证作用域、成本强制执行 | 🟢 平衡健康 |
| **QwenPaw** | 中 — 运行时竞态条件 | 低 — 文档和小修复 | ⚠️ 审核瓶颈 |
| **IronClaw** | N/A — 活动极少 | 低 — 提供商目录扩展 | ⚪ 稳定但疏离 |

---

## 7. 趋势信号

### AI Agent 平台开发者须知

**1. 更新流水线可靠性是生产环境的 #1 阻断问题**
每个有多平台存在的项目（OpenClaw、Hermes Agent、ZeroClaw）都在其更新/安装路径上存在活跃 Issue。这是整个生态中出现频率最高的主题，也是企业采纳的最大障碍。构建 AI Agent 平台的开发者应优先考虑：
- 支持回滚的原子更新机制
- 平台特定的验证（WAL 提交、进程谱系、服务替换）
- 不阻塞更新路径的健康检查

**2. 瞬时故障下的状态持久化**
三个最大规模项目中的两个（OpenClaw、Hermes Agent）独立遇到并修复了数据库短暂不可用时 Agent 对话轮次丢失的 Bug。这是一个**结构性模式**——在有状态 AI Agent 系统中的共性问题，并非巧合。它表明整个生态正在认识到：
- Agent 对话轮次必须在 LLM 调用前乐观写入，而非之后
- 状态写入需要异步提交配合重试语义
- 恢复路径必须能容忍部分写入

**3. 多渠道一致性正成为基础需求**
ZeroClaw 在 Telegram/Matrix 编辑消息处理和 LINE 文件传递上的活跃开发表明，运营者期望的是**渠道原生行为**——而非最低公倍数式的支持。OpenClaw 的 Slack 链接碎片化问题从反面确认了同样的需求。多渠道 AI 助手正在从"锦上添花"演变为基线期望。

**4. 成本强制执行正从功能特性转向基础设施**
ZeroClaw 拥有最成熟的成本强制执行模型（成本上限、警告模式、路由降级模型、路由降级兜底、按 Agent 预算）。OpenClaw 有 Goal 预算和 Token 计数。这已不再是可选项——随着 Agent 在生产环境中部署并产生真实 API 成本，整个生态正在将财务护栏作为一等基础设施来构建。

**5. 凭证安全正在向上游迁移**
ZeroClaw 关于作用域操作员托管凭证（#12422）和浏览器凭证作用域（#12596）的 RFC 表明了一次成熟度跃迁：Agent 正在被用于委托工作流场景，即运营者授权特定任务而不向模型层暴露完整凭证访问权限。这种模式很可能将向其他项目蔓延。

**6. 语音和多模态输入仍在成熟过程中**
三个项目（OpenClaw、ZeroClaw、QwenPaw）在语音/多模态处理上同时存在活跃 Bug。这是目前碎片化最严重的功能领域——没有任何一个项目拥有稳定、跨平台的语音输入方案。开发者应预期这一领域将经历重大演进，并应设计能够吸收语音处理语义变化的插件架构。

**7. 插件生态以相似方式暴露问题**
QwenPaw 的插件路由注册失败、Hermes Agent 的目录固定问题、以及 OpenClaw 大型插件阻塞网关的问题有一个共同的根本原因：**插件生命周期管理缺乏规范**。整个生态需要标准化的插件生命周期钩子、版本兼容性保障，以及不会阻塞主事件循环的懒加载策略。

### 信号摘要表

| 趋势 | 相关项目 | 置信度 | 对开发者的启示 |
|---|---|---|---|
| 更新流水线脆弱性 | OpenClaw, Hermes Agent, ZeroClaw | 🔴 高 | 优先考虑原子更新和回滚机制 |
| 状态持久化缺口 | OpenClaw, Hermes Agent | 🔴 高 | 乐观写入 + 重试语义 |
| 多渠道一致性需求 | ZeroClaw, OpenClaw | 🟡 中高 | 渠道原生功能正成为基线期望 |
| 成本强制执行作为基础设施 | ZeroClaw, OpenClaw | 🟡 中 | 财务护栏作为一等特性 |
| 凭证作用域/安全管理 | ZeroClaw | 🟡 中 | 委托工作流需要安全的凭证管理 |
| 语音输入不稳定 | OpenClaw, ZeroClaw, QwenPaw | 🟡 中 | 为波动性设计；暂缓深度集成 |
| 插件生命周期缺乏规范 | 除 IronClaw 外的所有项目 | 🟡 中 | 标准化插件生命周期，延迟懒加载决策 |

---

*跨项目摘要报告来源：OpenClaw (openclaw/openclaw)、Hermes Agent (NousResearch/hermes-agent)、IronClaw (nearai/ironclaw)、QwenPaw (agentscope-ai/QwenPaw) 和 ZeroClaw (zeroclaw-labs/zeroclaw) — 2026-11-22*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
5. Issue/PR references and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully, maintaining the structure and using appropriate technical Chinese terminology.

Key terms to translate consistently:
- Hermes Agent - Hermes Agent (keep as-is, it's a proper name)
- Pull Request / PR - PR / Pull Request
- Issue - Issue / 问题
- tracking issue - 追踪 Issue
- profile - profile / 配置文件
- lifecycle - 生命周期
- Kanban - Kanban (keep as-is)
- gateway - gateway (keep as-is in technical context, or 网关)
- Desktop - Desktop (the product name)
- terminal - 终端
- merge - 合并
- bug - Bug
- feature - Feature / 功能
- P1/P2/P3 - keep as-is
- ci-reviewed - CI 审核通过
- hot topics - 热门话题
- community - 社区
- roadmap - 路线图
- backlog - 待办事项
- pain points - 痛点
- use cases - 使用场景
- satisfaction signals - 满意度信号

Let me go through the report section by section.
</think>


# Hermes Agent 项目日报 — 2026-11-22

## 1. 今日概览

2026年11月22日，Hermes Agent 保持**极高开发节奏**，过去24小时内有50个 Issue 和50个 PR 产生更新。团队关闭了8个 Issue，合并了16个 PR，反映出报告输入与交付成果之间的健康平衡。今日未发布新版本。最重要的进展是解决了 P1 级别的会话状态持久化 Bug，同时社区正在积极讨论 profile 生命周期设计、Kanban 自动化可靠性以及影响 Desktop、Windows 网关和 Docker 环境的跨平台稳定性问题。

---

## 2. Releases

*过去24小时内无新版本发布。*

---

## 3. 项目进展

### 今日合并/关闭的 PR（共16个）

| PR | 标题 | 优先级 | 影响范围 |
|---|---|---|---|
| [#153426](https://github.com/NousResearch/hermes-agent/pull/153426) | fix(gateway): 当 state.db 不可用时构建的 agent 所对应的 turn 仍能写入 state.db | **P1** | 会话历史恢复；修复 `/resume` 和 Desktop 会话显示 |
| [#158166](https://github.com/NousResearch/hermes-agent/pull/158166) | fix(kanban): 在生成 worker 前拒绝无法解析模型的卡片 | **P2** | 防止配置错误的 profile 导致 worker 空转和莫名其妙的 400 错误 |
| [#158748](https://github.com/NousResearch/hermes-agent/pull/158748) | fix(kanban): 限制 rate-limit 复活循环，防止配额耗尽后持续计费 | **P2** | 成本保护 — 防止卡片停滞时无限计费 |
| [#158747](https://github.com/NousResearch/hermes-agent/pull/158747) | fix(profiles,pm,gateway): 使 v0.23.3 进程在延迟导入新 tree 时仍能正常工作 | **P2** | 更新后运行中的 gateway/worker/TUI 进程的稳定性 |
| [#149888](https://github.com/NousResearch/hermes-agent/pull/149888) | test(e2e): 客户端在 turn 中途断连不会停止该 turn | **P3** | 为会话隔离契约添加回归测试 |
| [#157942](https://github.com/NousResearch/hermes-agent/pull/157942) | catalog: 将 inbox-sentinel 重新固定到 e6d4213 | **P3** | 插件目录刷新至八模块模块化邮件平台 |
| [#157430](https://github.com/NousResearch/hermes-agent/pull/157430) | feat(gateway): 迁移 --backends --apply/--restore/--status 并支持回滚 | **P3** | serve-to-gateway 迁移栈第 6/9 部分 |
| [#157791](https://github.com/NousResearch/hermes-agent/issues/157791) | Scratch 清理删除运行中进程的 provider-plugin 快照副本 | **P2** | Bug 已关闭 — 约24小时后出现 `No module named` 错误 |
| [#158700](https://github.com/NousResearch/hermes-agent/issues/158700) | Desktop: 每个 profile 的主题合并为一个全局主题 | **P2** | Bug 已关闭 — 外观始终不显示 profile 分配的皮肤 |
| [#156315](https://github.com/NousResearch/hermes-agent/pull/156315) | Feature: 在 Herdr 窗格中运行时发出 OSC 7501 状态序列 | **P3** | Herdr 集成的终端会话状态通知 |
| [#42307](https://github.com/NousResearch/hermes-agent/issues/42307) | Feature: 面向不受信任输入面的原生、无 shell 邮件工具 | **P3** | 邮件工作流中的提示词注入安全加固 |
| [#138147](https://github.com/NousResearch/hermes-agent/issues/138147) | 在 CLI/TUI 中支持 OSC 7501 Program Status Protocol | **P3** | Feature 已关闭 — 终端标签页中的多会话状态可见性 |

**关键要点：** 今日合并的会话状态持久化 P1 修复（#153426）解决了一个长期问题——当 agent 构建过程中 state.db 短暂不可用时，turn 可能从 sessions 中消失，直接影响 `/resume` 和 Desktop 会话连续性。

---

## 4. 社区热门话题

### 评论最多的 Issue（按评论数排序）

**#155595 — 追踪：profile 创建与生命周期**（18条评论）  
[Issue #155595](https://github.com/NousResearch/hermes-agent/issues/155595)  
*作者：kshitijk4poor | 开放于 2026-11-14*  
这是 profile-creation/lifecycle 战役的集中追踪 Issue，汇集了以下工作：正式调研、gateway 所有权与恢复、共享配置与凭证、模型继承、克隆安全性、Honcho 提取、provider 边界和客户端反馈。高评论数反映出多个子团队之间的活跃设计讨论。

**#75444 — kanban 自动分解器无限阻塞反弹**（14条评论）  
[Issue #75444](https://github.com/NousResearch/hermes-agent/issues/75444)  
*作者：Zazzles2908 | 开放于 2026-07-31*  
当任务耗尽 `block_recurrences` 后，会带着 `block_kind` 路由回 `triage`，但自动分解器并未排除这些任务——形成无限反弹循环。这是一个**历时4个月以上的长期 P2 Bug**，对自动化影响重大。

**#141973 — 中途发送不可靠，无法引导**（12条评论）  
[Issue #141973](https://github.com/NousResearch/hermes-agent/issues/141973)  
*作者：albayazid | 开放于 2026-10-20*  
在活跃的 Desktop turn 中发送消息时有三种不同的失败模式：(1) 消息被排队而非引导，(2) UI 显示"已发送"但 harness 未收到，(3) Steer 按钮静默无响应。影响用户与 agent 的实时交互。

### 评论最多的 PR（按评论数排序）

**#141295 — Gemini 选择器列出可访问的 AI Studio 模型**  
[PR #141295](https://github.com/NousResearch/hermes-agent/pull/141295)  
*作者：teknium1 | 开放于 2026-10-18 | ci-reviewed*  
此 PR 将 Gemini 模型选择器改为通过 `models.list` 查询 Google 的实时模型目录，而非仅依赖 Hermes 的静态精选列表。显著改善了使用自定义 AI Studio 密钥的用户体验。

**#155992 — feat(line): 通过 flex 下载按钮向 LINE 用户交付文件（xlsx/pdf）**  
[PR #155992](https://github.com/NousResearch/hermes-agent/pull/155992)  
*作者：markchiu2026 | 开放于 2026-11-15*  
解决 LINE Messaging API 不支持原生文档推送的问题——通过 flex 消息下载按钮交付文件。

**#158716 — build(deps): 添加 google-re2 及 musl 源码构建**  
[PR #158716](https://github.com/NousResearch/hermes-agent/pull/158716)  
*作者：c2h5oh | 开放于 2026-11-21*  
stdlib `re` → Google RE2 迁移的第一阶段。在所有发布目标（包括 musl 和 Termux）中添加 `google-re2==1.1.20251105` 作为核心依赖。

**底层需求信号：** Profile 生命周期（#155595）和 Kanban 可靠性（#75444）的讨论表明，社区强烈需要 (1) 更强大的多 profile 管理能力和 (2) 不会无限空转或静默失败的可靠自动化。

---

## 5. Bug 与稳定性

按严重程度（P1–P2）和近期活跃度排序：

| # | Bug 概述 | 优先级 | 状态 | 修复 PR？ |
|---|---|---|---|---|
| [#153426](https://github.com/NousResearch/hermes-agent/pull/153426) | 在 state.db 不可用期间构建的 turn agent 在 sessions 中缺失 | **P1** | **已合并** | — |
| [#141973](https://github.com/NousResearch/hermes-agent/issues/141973) | 中途发送：排队、"已发送"无送达，或 Steer 无响应 | **P2** | 开放 | 无 |
| [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) | Kanban 自动分解器无限阻塞反弹（升级至 triage 的任务） | **P2** | 开放（4个月） | 无 |
| [#140892](https://github.com/NousResearch/hermes-agent/issues/140892) | Docker 后备 profile 的 Bot Screen 在多路复用 `hermes serve` 中从不流式输出 | **P2** | 开放 | 无 |
| [#144503](https://github.com/NousResearch/hermes-agent/issues/144503) | macOS 主机休眠后会话 turn 租约过期 | **P2** | 开放 | 无 |
| [#152435](https://github.com/NousResearch/hermes-agent/issues/152435) | Windows 网关进程在 `hermes gateway stop` 后仍存活 | **P2** | 开放 | 无 |
| [#137357](https://github.com/NousResearch/hermes-agent/issues/137357) | provider 重试耗尽时不触发 end-of-turn 插件钩子 | **P2** | 开放 | 无 |
| [#127722](https://github.com/NousResearch/hermes-agent/issues/127722) | 未匹配身份的轮换在健康池条目空闲时拒绝轮换 | **P2** | 开放 | 无 |
| [#149085](https://github.com/NousResearch/hermes-agent/issues/149085) | 终端预执行守卫在进程身份探测时卡死（61次/天，90条泄漏线程） | **P2** | 开放 | 无 |
| [#158640](https://github.com/NousResearch/hermes-agent/issues/158640) | Windows 上的 Hermes Desktop 启动时无法激活 Cloud gateway | **P2** | 开放 | 无 |
| [#158734](https://github.com/NousResearch/hermes-agent/issues/158734) | kimi-k3 tool_call 桥接收所有延迟调用的空参数 `{}` | **P2** | 开放（今日） | 无 |
| [#154404](https://github.com/NousResearch/hermes-agent/issues/154404) | 长构建会话中上下文压缩超时 — turn 中止且无恢复 | **P2** | 开放 | 无 |
| [#147400](https://github.com/NousResearch/hermes-agent/issues/147400) | Webapp 粘性提示裁剪在 CSS 缩放 ≠ 100% 时失效 | **P2** | 开放 | [#149241](https://github.com/NousResearch/hermes-agent/pull/149241) |

**关键观察：**
- P1 Bug（#153426）**今日成功解决** — 这是会话持久化的重大稳定性胜利。
- Windows 平台问题**占比过高**：网关进程存活（#152435）、Cloud gateway 激活失败（#158640），以及 kanban rate-limit 计费问题（#158748 今日已修复）。
- Kanban 计费 Bug（现已在 #158748 修复）是一个**成本安全隐患**——配额墙上的无限复活循环正在产生持续费用。

---

## 6. 功能请求与路线图信号

### 值得关注的 Feature Issue

**#146434 — 一个 agent 对外显示一个名称，ID 仅内部使用**  
[Issue #146434](https://github.com/NousResearch/hermes-agent/issues/146434)  
*作者：BorisZhangYYY | P2 | 开放*  
请求在所有 Desktop/TUI/Web 界面上将显示名称与内部 ID 解耦。贡献者计划在设计确认后提交 PR。

**#140724 — Agent 可调用的强制 MCP 工具重新发现**  
[Issue #140724](https://github.com/NousResearch/hermes-agent/issues/140724)  
*作者：fyzanshaik | P3 | 开放*  
请求扩展 agent 驱动的已配置 MCP 服务器重新发现功能，独立于 Desktop 重载控件。

**#76863 — feat(desktop): 添加巴西葡萄牙语（pt-BR） locale**  
[PR #76863](https://github.com/NousResearch/hermes-agent/pull/76863)  
*作者：celsocba1 | P3 | 开放于 2026-08-02*  
2,967 行，2,003 个 key，与 `en.ts` 100% 对齐——等待合并。来自葡萄牙语社区的强烈 i18n 信号。

**#155992 — 通过 flex 下载按钮向 LINE 交付文件**  
[PR #155992](https://github.com/NousResearch/hermes-agent/pull/155992)  
*作者：markchiu2026 | P3 | 开放*  
解决 LINE 平台不支持原生文档推送的差距。

**路线图信号：**
- **Profile 生命周期管理**是主导主题（#155595），表明即将进行架构投入。
- **平台一致性**：Windows Desktop 和网关差距正在累积（4+ 个开放的 P2 Windows 问题）。
- **MCP 生态扩展**（#140724）和 **i18n**（#76863）显示了非英语、多工具平台采用的增长。

---

## 7. 用户反馈摘要

### 痛点

| 痛点 | 证据 | 严重程度 |
|---|---|---|
| **主机休眠后会话丢失** | Issue #144503：休眠约298秒后 turn 被"在其生命周期内保持锁定"强制中断 | 高 |
| **Windows 网关僵尸进程** | Issue #152435：进程在 `hermes gateway stop` 后仍存活，涉及 v0.21.6、v0.23.0 和当前主线 | 高 |
| **Discord 自动 TTS 从不在 VC 中播放** | Issue #101185：bot 转录但不语音回复语音频道 | 中 |
| **Webapp 终端 WebSocket 连接失败** | Issue #150864：多网关测试期间 host-terminal WebSocket 无法连接 | 中 |
| **移动端上下文菜单回归** | Issue #155011：HERMES MOBILE Android Build 44 丢失了 Build 22 中的长按菜单（复制、选择、分享、分支） | 中 |
| **插件目录固定失败** | Issue #138219：bot-forge 固定 b313916 因缺少 `yaml` 依赖声明导致注册 0 个工具 | 低 |

### 使用场景与满意度信号

- **OSC 7501 Program Status Protocol**（#138147，今日关闭）获得了 **5 👍** — 在终端标签页中运行多个 Hermes 会话的用户希望无需切换窗口即可看到会话状态。
- **邮件安全加固**（#42307，今日关闭）解决了提示词注入风险——持有 `terminal` 工具的 agent 可能通过 `sed -i`/`perl -i` 不安全地重写 YAML。

---

## 8. 待办关注

以下 Issue 和 PR **年代久远、影响重大或进展停滞**，需要维护者关注：

| # | 标题 | 时长 | 优先级 | 状态 | 关注原因 |
|---|---|---|---|---|---|
| [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) | Kanban 自动分解器无限阻塞反弹 | **约4个月** | P2 | 开放 | 自动化可靠性；无限循环消耗资源 |
| [#101185](https://github.com/NousResearch/hermes-agent/issues/101185) | Discord 自动 TTS 从不在 VC 中播放 | **约2.5个月** | P2 | 开放 | 语音频道集成损坏 |
| [#127722](https://github.com/NousResearch/hermes-agent/issues/127722) | 未匹配身份的轮换在健康条目空闲时拒绝轮换 | **约2个月** | P2 | 开放 | 凭证池效率低下，安全边界风险 |
| [#149085](https://github.com/NousResearch/hermes-agent/issues/149085) | 终端预执行守卫卡死（61次/天，90条泄漏线程） | **约18天** | P2 | 开放 | 生产环境 macOS 网关上资源泄漏 |
| [#108762](https://github.com/NousResearch/hermes-agent/pull/108762) | fix: 从传出消息中剥离 llama.cpp 媒体标记 | **约2.5个月** | P2 | 开放 | 本地模型兼容性修复 |
| [#82451](https://github.com/NousResearch/hermes-agent/pull/82451) | fix(compression): 防止与旧版 SessionDB 的无操作压缩 | **约3.5个月** | P2 | 开放 | 上下文压缩回归 |

**需要关注：**
- Kanban 无限循环 Bug（#75444）已开放4个月，直接损害了对 Hermes 自动化功能的信任。
- Discord TTS 回归（#101185）影响一个可见的外部平台集成。
- 终端守卫卡死（#149085）正在生产环境 macOS 系统上每天泄漏线程。

---

*日报数据来源：NousResearch/hermes-agent GitHub 数据 — 2026-11-22*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the content into Simplified Chinese
2. Preserve all the formatting: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep technical terms, URLs, repository slugs, usernames, version tags, file paths, API/config identifiers, and issue/PR references in their original form
4. Use natural technical Chinese register
5. Output ONLY the translation with no preamble or explanation

Let me translate section by section:

1. Title - IronClaw 项目日报 — 2026-11-22
2. Today's Overview section
3. Releases section
4. Project Progress section with table
5. Community Hot Topics section
6. Bugs & Stability section with table
7. Feature Requests & Roadmap Signals section with table
8. User Feedback Summary section
9. Backlog Watch section with table
10. Summary Table section
11. Footer note

I need to be careful with:
- Technical terminology
- Table alignment rows (|---|---|
- Emoji should be kept
- URLs and links should be preserved
- File paths like `crates/domains/ironclaw_llm/assets/providers.json` should stay in English
- Repository name `nearai/ironclaw`
- Issue numbers like #8174
- Usernames like `knowhycodata`
- API endpoints like `https://llmtr.com/v1`

Let me translate:
</think>


# IronClaw 项目日报 — 2026-11-22

## 1. 今日概览

2026-11-22 IronClaw 项目近 24 小时动态显示，仅有 **1 条活跃 issue**，**无 pull request** 更新。过去 24 小时内无新版本发布，表明开发工作处于相对平稳阶段。唯一追踪到的 issue 是一条功能请求，希望扩展内置 LLM provider 列表，反映出社区对更广泛模型支持的持续需求。总体而言，项目运行稳定，无稳定性问题或代码回退报告。

---

## 2. 版本发布

**本日无版本发布。**

---

## 3. 项目进展

| 指标 | 数量 |
|---|---|
| PR 合并/关闭（24h） | 0 |
| Issue 关闭（24h） | 0 |
| 活跃开发动态 | 未见 |

今日无 pull request 更新、合并或关闭。PR 活动的缺失表明项目可能处于发布后稳定期，或维护者正在专注于未体现在 24 小时窗口内的审查/协调工作。

---

## 4. 社区热点话题

### 最活跃 Issue

**#8174 — feat: 将 LLMTR 添加为内置 OpenAI 兼容 LLM provider**
- **提交者：** knowhycodata
- **创建/更新时间：** 2026-11-21
- **评论数：** 1 | **反应数：** 0
- **链接：** [nearai/ironclaw#8174](https://github.com/nearai/ironclaw/issues/8174)
- **摘要：** 请求将 LLMTR（`https://llmtr.com/v1`）作为一级条目加入 `crates/domains/ironclaw_llm/assets/providers.json` 中的内置 provider 目录，与 Groq、Together、Cerebras、MiniMax 等现有 providers 并列。

**分析：** 此请求反映出用户对扩展 IronClaw LLM provider 生态的强烈需求。用户日益追求多 provider 灵活性，以平衡成本、延迟和模型可用性。该提案采用 OpenAI 兼容网关，表明集成难度较低。1 条评论表明该请求正在审查中，但尚未有维护者确认。

---

## 5. Bug 与稳定性

**未报告 bug、崩溃或代码回退。**

| 严重级别 | 数量 |
|---|---|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 0 |

无 fix PR 提交或关联至现有 issue。

---

## 6. 功能请求与路线图信号

| 请求 | 描述 | 潜在优先级 |
|---|---|---|
| LLM Provider 扩展 (#8174) | 将 LLMTR 添加为内置 OpenAI 兼容 provider | **中** — 实现成本低，满足真实用户需求 |

**预测：** 鉴于项目已陆续添加 Groq、Together、Cerebras、MiniMax 等 providers，LLMTR 的纳入有望在满足兼容性和政策标准后，成为下次小版本更新的候选项。维护者可能根据用户需求和集成难度决定优先级。

---

## 7. 用户反馈摘要

**痛点识别：**

- **Provider 目录受限：** 用户希望获得更多内置 LLM provider 选项。LLMTR 通过提供替代网关和厂商命名空间模型来解决这一问题。

**用例反映：**

- 用户希望利用 LLMTR 的定价或模型可用性优势。
- 倾向于使用一级（内置）provider 支持，而非手动配置。

**满意度信号：**

- 项目已支持多 provider，表明对多 provider 工作流程的响应能力。
- 采用 OpenAI 兼容 API 标准，降低了使用门槛。

---

## 8. 待办事项关注

| 项目 | 状态 | 存在时间 | 备注 |
|---|---|---|---|
| #8174 — 添加 LLMTR provider | **OPEN** | 1 天 | 等待维护者审查；复杂度低，有望快速解决 |

**维护者需关注：**

- **#8174：** 目前有 1 条评论但无维护者回复，明确决策（接受/拒绝/延期）将提升社区信任度。若接受，JSON 配置修改简单，可作为快速成果。

---

## 摘要总览

| 类别 | 状态 |
|---|---|
| 版本发布 | 🟢 无（无回退风险） |
| PR 活动 | 🔴 无活动 |
| Issue 活动 | 🟡 1 条功能请求 |
| Bug 报告 | 🟢 无 |
| 社区参与度 | 🟡 中等（1 条活跃 issue） |

---

*日报数据来源：nearai/ironclaw GitHub 仓库，统计日期 2026-11-22。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the content while preserving the Markdown structure, tables, formatting, and technical terms. I should use natural technical Chinese, keeping URLs, code references, and technical identifiers in their original form.

Let me translate section by section:

1. Title and date
2. Overview
3. Releases
4. Project Progress
5. Community Hot Topics
6. Bugs & Stability
7. Feature Requests & Roadmap Signals
8. User Feedback Summary
9. Backlog Watch

Key translations needed:
- "Project Digest" → 项目动态
- "Overview" → 今日概览
- "Releases" → 发布动态
- "Project Progress" → 项目进展
- "Community Hot Topics" → 社区热点
- "Bugs & Stability" → 问题与稳定性
- "Feature Requests & Roadmap Signals" → 功能需求与路线图信号
- "User Feedback Summary" → 用户反馈摘要
- "Backlog Watch" → 待办关注
- "Open" → 开启/Open
- "Closed" → 已关闭
- "Under Review" → 审核中
- "Bug" → Bug
- "Feature" → 功能
- "Question" → 提问

Technical terms like API, PATCH, PUT, XL, M, etc. should remain as-is.

Let me translate this carefully:
</think>


# QwenPaw 项目动态 — 2026-11-22

## 1. 今日概览

QwenPaw（agentscope-ai/QwenPaw）在 2026 年 11 月 22 日呈现**中等活跃度**，过去 24 小时内有 6 个 Issue 和 10 个 Pull Request 更新。值得注意的是，**今日无新版本发布**，且 **10 个 PR 均未合并**——所有 PR 状态仍为"Open"。两个长期搁置的功能请求（#6475、#7583）已被关闭，同时有 4 个新 Issue 涉及 Bug、文档缺失和用户体验问题。当前 Bug 队列正在增长，3 个新报告的 Bug 分别影响 Console、文档和前端插件系统。

---

## 2. 发布动态

**今日无新版本发布。**

暂无可用数据。如需查看版本历史，请访问：https://github.com/agentscope-ai/QwenPaw/releases

---

## 3. 项目进展

### 今日合并/关闭的 PR
**无。** 今日更新的 10 个 PR 状态均为"Open"，无合并活动。

### 审核中的重要 PR

| PR # | 标题 | 规模 | 状态 | 聚焦领域 |
|------|------|------|------|----------|
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | feat(console)：支持运行时 base-path 部署 | XL | 审核中 | Console/运行时 |
| [#8770](https://github.com/agentscope-ai/QwenPaw/pull/8770) | fix(runtime)：在后台启动完成前拒绝聊天 | XL | Open | 运行时稳定性 |
| [#8303](https://github.com/agentscope-ai/QwenPaw/pull/8303) | fix(approvals)：将审批提示发送至触发它的聊天频道 | M | 审核中 | 审批/频道 |
| [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588) | fix(memory)：OpenViking 后续清理、兼容性和关闭修复 | XXL | 审核中 | 内存/插件 |
| [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479) | feat(skills)：同步 Office 技能与 Anthropic 2026 年 7 月更新 | XXL | 审核中 | 技能包 |

### 近期关闭的 Issue
- [#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475) — 功能：`notice_after_complete` 工具（关闭于 2026-11-21）
- [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583) — 功能：AgentScope 社区集成（关闭于 2026-11-21）

---

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

1. **[#8840](https://github.com/agentscope-ai/QwenPaw/issues/8840)** — Bug：LICENSE 文件拼写错误（2 条评论）
   - Contribution 定义中多了一个"the"
   - 修复 PR [#8849](https://github.com/agentscope-ai/QwenPaw/pull/8849) 已提交

2. **[#8843](https://github.com/agentscope-ai/QwenPaw/issues/8843)** — Bug：配置文档对 `/envs` API 描述有误（2 条评论）
   - 文档遗漏了 `PATCH` 端点，误述了 `PUT` 的行为
   - 修复 PR [#8846](https://github.com/agentscope-ai/QwenPaw/pull/8846) 已提交

3. **[#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851)** — Bug：Console import map 导致插件路由注册失败（1 条评论）
   - 前端插件应用报错 `PawApp <id> did not register its app route`
   - **高用户影响** — 影响所有插件开发者

### 潜在需求分析
- **文档准确性**：今日有两个 Issue（#8840、#8843）是文档/文本修正，表明社区在积极参与完善工作
- **插件生态系统健康**：Issue #8851 揭示了一个影响插件开发者的关键前端 Bug
- **用户引导**：Issue #8848 提出误导性错误信息可能导致数据丢失的担忧

---

## 5. 问题与稳定性

### 开放的 Bug 报告（按严重程度排序）

| 优先级 | Issue # | 标题 | 影响范围 |
|----------|---------|-------|----------|
| **高** | [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851) | Console import map 重映射入口块，插件路由无法注册 | 插件生态系统故障 |
| **中** | [#8843](https://github.com/agentscope-ai/QwenPaw/issues/8843) | 配置文档对 envs API 的描述具有误导性 | 潜在数据丢失风险 |
| **中** | [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848) | compact 失败后提示 `/clear` 误导用户 | 上下文丢失风险 |
| **低** | [#8840](https://github.com/agentscope-ai/QwenPaw/issues/8840) | LICENSE 文件拼写错误 | 外观/合规 |

### 已提交待合并的修复 PR
- [#8849](https://github.com/agentscope-ai/QwenPaw/pull/8849) — 修复 #8840（LICENSE 拼写错误）
- [#8846](https://github.com/agentscope-ai/QwenPaw/pull/8846) — 修复 #8843（配置文档）
- [#8847](https://github.com/agentscope-ai/QwenPaw/pull/8847) — 修复 Console 中 Markdown 表格溢出问题

### 运行时稳定性问题
- **[#8770](https://github.com/agentscope-ai/QwenPaw/pull/8770)**：修复了运行时初始化完成前提交的聊天被接受（HTTP 200）但永久挂起的竞态条件。这是一个**关键稳定性修复**，等待合并。

---

## 6. 功能需求与路线图信号

### 今日新增功能请求
- **[#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848)** — 提问：改进 compact 失败消息（当前提示 `/clear`，有上下文丢失风险）
  - **信号**：用户希望更安全的错误处理和更清晰的后续恢复路径

### 近期关闭的功能请求（移至待办或暂不采纳）
- **[#6475](https://github.com/agentscope-ai/QwenPaw/issues/6475)** — `notice_after_complete` 长时间任务通知工具
  - **状态**：已关闭，暂无实施计划
  - **社区需求**：多任务工作流场景下高实用性

- **[#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583)** — AgentScope 社区集成（登录、反馈）
  - **状态**：已关闭，暂无实施计划
  - **信号**：用户希望更紧密的生态系统集成

### 进行中的功能
- **[#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)** — 运行时 base-path 部署，支持反向代理场景
- **[#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479)** — Office 技能与 Anthropic 2026 年 7 月更新同步

### 路线图信号
1. **插件系统改进** — 插件注册修复（#8851）表明插件生态系统是重点方向
2. **企业/部署功能** — Base-path 部署支持（#8719）表明正在推进企业级采用
3. **技能对等** — 与 Anthropic 技能更新保持同步（#8479）显示对功能对等的重视

---

## 7. 用户反馈摘要

### 已识别痛点

| 痛点 | 来源 | 频率 | 影响 |
|------------|--------|-----------|----------|
| 插件应用路由注册静默失败 | [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851) | 多名用户受影响 | 高 |
| 配置文档对 env vars API 描述有误 | [#8843](https://github.com/agentscope-ai/QwenPaw/issues/8843) | 用户遇到数据丢失场景 | 中 |
| 审批提示未发送至发起频道 | [#8303](https://github.com/agentscope-ai/QwenPaw/pull/8303) | 已知问题 #6695，根因 #6819 | 中 |
| compact 失败后提示具有破坏性的 `/clear` 命令 | [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848) | 用户担忧上下文丢失 | 中 |

### 积极信号
- **贡献者活跃度高**：今日 10 个 PR 中有 4 个来自首次贡献者
- **响应速度快**：Bug 报告（#8840、#8843）在 1 天内即有对应修复 PR 提交
- **文档质量关注**：多个小型文档修复（#8850、#8846、#8847）表明社区在积极提升质量

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue # | 存在时间 | 标题 | 优先级 | 状态 |
|---------|-----|-------|----------|--------|
| [#8843](https://github.com/agentscope-ai/QwenPaw/issues/8843) | 2 天 | 配置文档具有误导性——存在数据丢失风险 | 中 | Open，已有修复 PR |
| [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851) | 1 天 | 插件路由注册故障 | 高 | Open，暂无修复 PR |
| [#8848](https://github.com/agentscope-ai/QwenPaw/issues/8848) | 1 天 | 具有误导性的 `/clear` 提示 | 中 | Open |

### 等待审核的 PR

| PR # | 存在时间 | 标题 | 规模 | 阻塞项 |
|------|-----|-------|------|----------|
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | 9 天 | 运行时 base-path 部署 | XL | 审核中 |
| [#8303](https://github.com/agentscope-ai/QwenPaw/pull/8303) | 35 天 | 审批提示发送修复 | M | 审核中（修复 #6695） |
| [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588) | 17 天 | OpenViking 清理后续 | XXL | 审核中 |
| [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479) | 25 天 | Office 技能同步 | XXL | 审核中 |
| [#8770](https://github.com/agentscope-ai/QwenPaw/pull/8770) | 6 天 | 运行时启动竞态条件修复 | XL | Open |

### 维护者建议
1. **紧急**：审查 [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851) — 插件生态系统已故障
2. **高优先级**：合并 [#8770](https://github.com/agentscope-ai/QwenPaw/pull/8770) — 修复运行时稳定性竞态条件
3. **中优先级**：处理审批提示发送 Bug（[#8303](https://github.com/agentscope-ai/QwenPaw/pull/8303)）— 自 10 月 18 日起开放至今

---

*QwenPaw（agentscope-ai/QwenPaw）项目动态 — 2026-11-22*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content into natural technical Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, code spans, numbers, dates, project names, usernames, version tags, issue/PR references verbatim
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate this carefully, maintaining the technical register appropriate for a Chinese developer newsletter.

Let me go through section by section:

Title: "ZeroClaw Project Digest — 2026-11-22" - Keep as is

Section 1: Today's Overview
- "maintained high development velocity" - 保持高开发节奏
- "shows particular momentum in" - 在...方面表现尤为突出
- "security hardening" - 安全加固

Section 2: Releases
- "No new releases today" - 今日无新版本发布
- "remains in preparation" - 仍在准备中
- "release-blocked items" - 版本阻塞项

Section 3: Project Progress
- "Recently Merged/Closed PRs" - 最近合并/关闭的 PR
- "Active Feature Development" - 活跃的功能开发
- "Multi-Channel Enhancement" - 多渠道增强
- "Security & Credentials" - 安全与凭证
- "Web Dashboard Improvements" - Web 控制台改进

Section 4: Community Hot Topics
- "Most Active Issues" - 最活跃的 Issue
- "Trending PRs" - 热门 PR
- "Underlying Community Needs" - 社区潜在需求

Section 5: Bugs & Stability
- "Critical/High Severity Bugs" - 严重/高危缺陷
- "Medium/Low Severity Bugs" - 中/低等级缺陷


- "Bugs Fixed Today" - 今日修复的缺陷
- "Windows Platform Status" - Windows 平台状态

Section 6: Feature Requests & Roadmap Signals
- "High-Impact Feature Proposals" - 高影响力功能提案
- "Infrastructure Improvements" - 基础设施改进
- "Likely v0.9.1 Contents" - 可能的 v0.9.1 内容

Section 7: User Feedback Summary
- "Pain Points Identified" - 痛点识别
- "Positive Signals" - 正面信号

Section 8: Backlog Watch
- "Issues Needing Maintainer Attention" - 需要维护者关注的 Issue
- "Long-Running Issues" - 长期未解决的 Issue
- "PRs Requiring Author Action" - 需要作者处理的 PR

Summary Table and footer - 摘要表和页脚

Translating tables requires careful attention to alignment markers and maintaining all table formatting. For lists, I need to convey the same meaning naturally in Chinese. Technical terms like "bounded delegation" should be rendered as bounded delegation with Chinese explanation or as 边界受限委托 depending on context.
</think>


# ZeroClaw 项目摘要 — 2026-11-22

## 1. 今日概览

2026年11月22日，ZeroClaw 在代码仓库中保持了高强度的开发节奏，共更新了50个 PR 和18个 Issue。项目在多渠道消息处理（Telegram/Matrix 编辑消息处理）、Web 控制台优化（语音控制、成本可视化）和安全加固（作用域凭证管理、OIDC scope 配置）方面表现尤为突出。8个 PR 已合并/关闭，42个处于开放状态并持续接受评审。今日无新版本发布，v0.9.1 仍在准备中，多个版本阻塞项正在处理中。整体项目状态健康，Rust 运行时、gateway 和 Web 控制台各组件均有 bug 修复、功能开发和基础设施改进。

## 2. 版本发布

**今日无新版本发布。** v0.9.1 仍在准备中，以下为版本阻塞项：
- #12400: Windows 控制台测试修复（进行中）
- #12497: OIDC scope 配置（需要评审）
- 多个 Web 和渠道修复等待合并

---

## 3. 项目进展

### 最近合并/关闭的 PR（8 项）

| PR | 作者 | 变更内容 | 影响 |
|---|---|---|---|
| [#12519](https://github.com/zeroclaw-labs/zeroclaw/pull/12519) | CastelloBrancoTecnologia | docs(runtime): 有界通道进度本地化 ADR | 记录通道进度字符串的设计决策 |
| [#12643](https://github.com/zeroclaw-labs/zeroclaw/pull/12643) | joelvaradon | fix(log): 失败时删除临时文件，跳过启动目录扫描 | 提升日志轮转可靠性 |
| [#12634](https://github.com/zeroclaw-labs/zeroclaw/pull/12634) | JordanTheJet | fix(web): 草稿编辑时取消语音自动发送 | 修复语音输入 UX 问题 |
| [#12635](https://github.com/zeroclaw-labs/zeroclaw/pull/12635) | JordanTheJet | fix(gateway/web): 在单独保存一项时保持其他语音设置不变 | 改善设置持久化 |
| [#12642](https://github.com/zeroclaw-labs/zeroclaw/pull/12642) | tidux | fix(rpc): 拒绝在 turn 进行中的会话上执行配置写入和 session/configure | 防止竞态条件 |
| [#11931](https://github.com/zeroclaw-labs/zeroclaw/pull/11931) | m-ridha | feat(gateway): webhook turn 使用长运行时超时 | 改善 webhook 处理 |
| [#12371](https://github.com/zeroclaw-labs/zeroclaw/pull/12371) | RO-mix | feat(channels): Telegram edited_message 处理与合并 | 支持消息编辑 |
| [#12641](https://github.com/zeroclaw-labs/zeroclaw/pull/12641) | vadelma-agent | feat(cli): 显示 Codex 订阅用量 | CLI 可观测性 |

### 活跃功能开发

**多渠道增强（大型 PR）：**
- [#12271](https://github.com/zeroclaw-labs/zeroclaw/pull/12271) — 通用对等路由到显式目标（XL 规模，评审中）
- [#12371](https://github.com/zeroclaw-labs/zeroclaw/pull/12371) — Telegram 编辑消息处理（L 规模）
- [#12426](https://github.com/zeroclaw-labs/zeroclaw/pull/12426) — Matrix 编辑消息处理（L 规模，需要作者处理）

**安全与凭证：**
- [#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596) — 浏览器授权分离：用户名/密码与 TOTP 独立授予（XL 规模，draft catalog 和 WebUI 支持）

**Web 控制台改进：**
- [#12376](https://github.com/zeroclaw-labs/zeroclaw/pull/12376) — 显示分离的聊天轮次，并在结束后加载回复
- [#12637](https://github.com/zeroclaw-labs/zeroclaw/pull/12637) — 成本概览柱状图以配置限额为基准

---

## 4. 社区热点

### 讨论最活跃的 Issue（按评论数排序）

1. **[#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)** — RFC：操作员托管服务凭证的作用域化使用
   - **6 条评论** | 创建于 2026-11-14 | 安全 RFC
   - **分析：** 操作员需要在不向模型暴露凭证的情况下授权代理执行任务。这是一个重要的安全架构提案，可能开启新的委托模式。

2. **[#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987)** — 将 WhatsApp Web 投票结果以 `[choice]` 消息形式呈现
   - **5 条评论** | 已关闭 2026-11-21 | 增强功能，WhatsApp 渠道
   - **分析：** 已完成功能，WhatsApp 投票处理与 Signal 实现对等。体现了渠道功能完整性目标。

3. **[#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)** — 浏览器子进程无限等待（S1 严重级别）
   - **4 条评论** | 已关闭 2026-11-21 | 高风险缺陷
   - **分析：** 修复了一类关键缺陷——卡住的浏览器 CLI 可能导致代理轮次无限挂起。

4. **[#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896)** — 后端为 sqlite 时内存状态报告为"none"
   - **2 条评论** | 已关闭 2026-11-21 | P2 缺陷
   - **分析：** 修复了误导性的状态输出——提升了操作员对可观测性的信任。

### 热门 PR（按规模和讨论热度排序）

- **[#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596)** (XL) — 浏览器凭证作用域化，用户名/密码与 TOTP 独立授权
- **[#12271](https://github.com/zeroclaw-labs/zeroclaw/pull/12271)** (XL) — 外部对等体的通用路由
- **[#12641](https://github.com/zeroclaw-labs/zeroclaw/pull/12641)** (XL) — CLI 显示 Codex 订阅用量

### 社区潜在需求

从趋势来看：
1. **多渠道一致性** — 用户希望在 Telegram、Matrix、WhatsApp、Discord 等渠道获得一致的行为
2. **无摩擦的安全保障** — 不向模型暴露凭证的委托机制是主要诉求
3. **运营可见性** — 成本追踪、订阅用量和状态准确性对操作员至关重要
4. **语音输入可靠性** — 多个并发 bug 提交和同日修复表明语音功能使用活跃

---

## 5. 缺陷与稳定性

### 严重/高危缺陷（开放中）

| Issue | 严重级别 | 组件 | 描述 |
|---|---|---|---|
| [#12627](https://github.com/zeroclaw-labs/zeroclaw/issues/12627) | S2，风险:中 | runtime/daemon | 边界委托中的子代理不受逐跳成本上限约束 |
| [#12626](https://github.com/zeroclaw-labs/zeroclaw/issues/12626) | 风险:高 | agent/config | cost.enforcement.mode = "route_down" 应切换为 route_down_model |

### 中/低等级缺陷（开放中）

| Issue | 严重级别 | 组件 | 描述 |
|---|---|---|---|
| [#12638](https://github.com/zeroclaw-labs/zeroclaw/issues/12638) | S3 | web 控制台 | 智能体卡片在花费恰好为 $0 时显示 "<$0.01" |
| [#12633](https://github.com/zeroclaw-labs/zeroclaw/issues/12633) | S2 | web 控制台 | 语音设置页面会将设备恢复为浏览器服务识别 |
| [#12632](https://github.com/zeroclaw-labs/zeroclaw/issues/12632) | S2 | web 控制台 | 语音自动发送可能在听写结束后发送输入的文字 |
| [#12630](https://github.com/zeroclaw-labs/zeroclaw/issues/12630) | S3 | web 控制台 | 概览页渠道列表只显示约4个渠道 |
| [#12628](https://github.com/zeroclaw-labs/zeroclaw/issues/12628) | 风险:中 | agent | warn 模式应在调用超出限额后通知会话 |
| [#12625](https://github.com/zeroclaw-labs/zeroclaw/issues/12625) | — | skills/shell | 允许 shell 工具直接运行程序而不经过 shell，以支持自由格式参数 |
| [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | — | gateway | 会话状态写入失败会使 `running` 保持到重启 |
| [#12621](https://github.com/zeroclaw-labs/zeroclaw/issues/12621) | — | scripts | 废弃 Raspberry Pi 部署脚本（生命周期终止） |

### 今日修复的缺陷

- **#10987**: WhatsApp 投票结果以 `[choice]` 消息形式呈现（Signal 对等功能实现）
- **#9946**: 浏览器子进程无限等待问题已解决
- **#9896**: 内存状态误导性输出已修正
- **#12145**: 插件商店限流器内存预算绕过问题已修复
- **#12484**: Windows 插件移除失败问题已修复
- **#12634**: 草稿编辑时取消语音自动发送（PR 已合并）
- **#12635**: 语音设置跨保存同步（PR 已合并）

### Windows 平台状态

Windows CI 持续存在插件操作（#12484 — 已修复）和控制台测试（#12400 — v0.9.1 进行中）相关问题。

---

## 6. 功能提案与路线图信号

### 高影响力功能提案

1. **[#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422)** — **RFC：作用域化操作员托管凭证**
   - 状态：开放 RFC（安全触发器）
   - 影响：将实现不向模型暴露凭证的安全委托
   - 预测：鉴于其安全分类，很可能在 v0.10 中优先实现

2. **[#12628](https://github.com/zeroclaw-labs/zeroclaw/issues/12628)** — **Warn 模式通知**
   - 当 `cost.enforcement.mode = "warn"` 允许调用超出限额时，通知会话
   - 低复杂度，高操作员价值

3. **[#12626](https://github.com/zeroclaw-labs/zeroclaw/issues/12626)** — **路由降级模型回退**
   - 使 `route_down` 实际切换到 `route_down_model` 而非拒绝调用
   - 解决成本强制功能不完整的问题

4. **[#12625](https://github.com/zeroclaw-labs/zeroclaw/issues/12625)** — **Shell 工具直接执行程序**
   - 移除 shell 包装，以支持参数中的自由格式文本
   - 使处理任意内容的 skills 得以实现

### 基础设施改进

- **[#12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613)** — **Deslop 追踪器**：废弃代码、失效功能、注释清理、冗余文档删除
- **[#12641](https://github.com/zeroclaw-labs/zeroclaw/pull/12641)** — Codex 订阅用量 CLI 显示（可能进入 v0.9.1）
- **[#12637](https://github.com/zeroclaw-labs/zeroclaw/pull/12637)** — 成本概览柱状图以配置限额为基准（可能进入 v0.9.1）

### 可能的 v0.9.1 内容
- Windows 控制台测试修复
- OIDC 可配置 scopes
- 语音设置改进（已在 PR 中）
- 成本概览柱状图缩放修复
- Telegram/Matrix 编辑消息处理（如果评审完成）

---

## 7. 用户反馈摘要

### 痛点识别

**运营可见性：**
- 状态输出显示误导性信息（sqlite 活跃时内存显示"none"）损害操作员信任
- 零花费智能体的成本显示为 "<$0.01" 造成困惑
- 概览页渠道列表截断使多渠道部署监控困难

**语音输入可靠性：**
- 多个并发 bug（#12633、#12632）表明用户活跃使用语音功能
- 听写结束后自动发送以及设置刷新问题表明语音工作流存在缺口

**多渠道期望：**
- Telegram 和 Matrix 用户需要编辑消息支持（两个 PR 同步推进）
- WhatsApp 投票用户期望与 Signal 行为一致（现已交付）

**凭证安全：**
- 对不向模型暴露机密的托管凭证作用域化管理有强烈需求
- 浏览器凭证分离（用户名/密码与 TOTP）满足企业安全需求

### 正面信号

- Bug 报告具体明确，严重级别标注准确，附有复现步骤
- 社区成员跨技术栈贡献（Rust、Web、文档、脚本）
- 多渠道功能在 Telegram、Matrix 和 WhatsApp 之间协调开发

---

## 8. 待办关注

### 需要维护者关注的 Issue（3天以上无更新）

| Issue | 存在时间 | 优先级 | 状态 | 备注 |
|---|---|---|---|---|
| [#12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613) | 2 天 | P2 | 追踪中，进行中 | Deslop 清理工作需要协调 |
| [#12609](https://github.com/zeroclaw-labs/zeroclaw/pull/12609) | 2 天 | XS | 文档 PR | ADR 例外记录等待评审 |
| [#12640](https://github.com/zeroclaw-labs/zeroclaw/pull/12640) | 1 天 | XS | 文档 PR | #12498 OIDC 行审批记录 |
| [#12198](https://github.com/zeroclaw-labs/zeroclaw/pull/12198) | 20 天 | L | 需要作者处理 | 无别名代理的转录回退 |

### 长期未解决的 Issue

| Issue | 创建时间 | 活动状态 | 备注 |
|---|---|---|---|
| [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | 2026-11-21 | 新建 | 会话状态写入失败导致 `running` 标记残留 |
| [#12627](https://github.com/zeroclaw-labs/zeroclaw/issues/12627) | 2026-11-21 | 新建 | 委托中子代理成本上限绕过 |

### 需要作者处理的 PR

| PR | 存在时间 | 规模 | 阻塞项 |
|---|---|---|---|
| [#12426](https://github.com/zeroclaw-labs/zeroclaw/pull/12426) | 8 天 | L | Matrix 编辑消息 — 需要作者修订 |
| [#12198](https://github.com/zeroclaw-labs/zeroclaw/pull/12198) | 20 天 | L | 转录 default_provider 回退 |

---

## 摘要表

| 指标 | 数值 |
|---|---|
| Issue 更新（24h） | 18（12 开放，6 关闭） |
| PR 更新（24h） | 50（42 开放，8 合并/关闭） |
| 新版本发布 | 0 |
| 开放严重缺陷 | 0 |
| 开放高危缺陷 | 2 |
| 开放中等级缺陷 | 4 |
| 活跃 XL 规模 PR | 3 |
| 活跃 RFC | 1 |
| v0.9.1 版本阻塞项 | ~5 |

---

*数据来源：ZeroClaw (zeroclaw-labs/zeroclaw) GitHub 数据，2026-11-22*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*