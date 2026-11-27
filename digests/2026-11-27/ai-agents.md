# OpenClaw 生态日报 2026-11-27

> Issues: 367 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-27 04:29 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, project names, etc. verbatim
4. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully section by section, maintaining all formatting.

Key terms I need to translate consistently:
- "OpenClaw Project Digest" → "OpenClaw 项目摘要"
- "Today's Overview" → "今日概览"
- "Releases" → "版本发布"
- "Project Progress" → "项目进展"
- "Community Hot Topics" → "社区热点"
- "Bugs & Stability" → "缺陷与稳定性"
- "Feature Requests & Roadmap Signals" → "功能需求与路线图信号"
- "User Feedback Summary" → "用户反馈摘要"
- "Backlog Watch" → "待办事项关注"

Let me translate this whole document now.
</think>


# OpenClaw 项目摘要 — 2026-11-27

## 1. 今日概览

OpenClaw 保持极高的活跃度，过去 24 小时内有 **367 个 issue 和 500 个 PR** 更新，显示出项目极度活跃的状态。今日没有新版本发布，但社区合并了 213 个 PR，另有 287 个仍处于开放状态。项目当前重点关注稳定性，尤其是修复跨平台的内存管理回归问题以及更新路径中的边缘 case。Gateway RSS 增长、prompt 缓存行为和 Windows 更新失败等关键问题占据了近期讨论的主导地位。

---

## 2. 版本发布

**今日无新版本发布。** 项目仍在稳定推进 2026.11.x 稳定版通道，多个阻塞性问题阻碍了发布进度。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 描述 | 评级 | 影响 |
|----|------|------|------|
| [#205105](https://github.com/openclaw/openclaw/pull/205105) | fix(ui): 不再将后台进程显示为侧边栏活动 | 🐚 Platinum Hermit | ux-friction |
| [#206358](https://github.com/openclaw/openclaw/pull/206358) | improve: 降低繁忙 Linux 主机上 Codex 关闭开销 | 🐚 Platinum Hermit | other |
| [#206288](https://github.com/openclaw/openclaw/pull/206288) | fix: 使知识库标注和文件错误更易于使用 | 🧂 Unranked Krab | ux-friction |
| [#200455](https://github.com/openclaw/openclaw/pull/200455) | fix: 重新打开 TUI 会话时显示完整回复 | 🦞 Diamond Lobster | ux-friction |
| [#206360](https://github.com/openclaw/openclaw/pull/206360) | fix(tests): 导航前安装角色名册 | — | test quality |
| [#206362](https://github.com/openclaw/openclaw/pull/206362) | test(ui): 隔离 agent 删除守卫 | — | test quality |
| [#206359](https://github.com/openclaw/openclaw/pull/206359) | test(ui): 整合过时名册响应的覆盖 | — | test quality |
| [#204344](https://github.com/openclaw/openclaw/pull/204344) | fix: 在旧校验器退出后完成健康的 Git 更新 | 🧂 Unranked Krab | P1 |

### 重点开放中的 PR

| PR | 描述 | 优先级 | 风险 |
|----|------|--------|------|
| [#206295](https://github.com/openclaw/openclaw/pull/206295) | fix(update): 停止将外来的恢复记录用于准入 | P1 | 🚨 session-state, 🚨 automation |
| [#206376](https://github.com/openclaw/openclaw/pull/206376) | fix: 放置后台结果后继续在空闲/每日重置后回复 | P1 | session-state |
| [#192350](https://github.com/openclaw/openclaw/pull/192350) | refactor(github): 将仓库集成迁移到插件 | XL | security, compatibility |
| [#194376](https://github.com/openclaw/openclaw/pull/194376) | feat(gateway): 允许 sessions_send 唤醒启动 | XL | — |
| [#204019](https://github.com/openclaw/openclaw/pull/204019) | fix(cron): 解耦命令作业与 agent 心跳启动 | XL | — |
| [#204362](https://github.com/openclaw/openclaw/pull/204362) | feat(apple): 添加 Talk 状态提示音 | XL | 🚨 compatibility |

---

## 4. 社区热点

### 讨论最热烈的 Issue

| # | 标题 | 评论数 | 优先级 | 状态 |
|---|------|--------|--------|------|
| [#204775](https://github.com/openclaw/openclaw/issues/204775) | 设计：prepared-release 更新（状态、所有权与计划） | 38 | P2 | OPEN |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | Prompt 缓存从未被复用 — `cache read dropped N → 0` | 29 | P2 | CLOSED |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog.worker.js：无界内存泄漏，约 4-5 GB/h | 29 | P1 | OPEN |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 策划型内存根目录被静默排除在 bootstrap 注入之外 | 28 | P0 | CLOSED |
| [#200756](https://github.com/openclaw/openclaw/issues/200756) | Windows beta.2 → beta.4 更新在 package-swap 阶段失败 | 22 | P2 | OPEN |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | Codex 辅助补全无法恢复父任务，导致目标暂停 | 21 | P1 | OPEN |
| [#200606](https://github.com/openclaw/openclaw/issues/200606) | Candidate Doctor 因插件迁移冲突阻止更新 | 21 | P1 | CLOSED |

### 潜在需求分析

1. **内存管理**：多个高评论 issue（#159662、#153426、#181432、#154812、#182369）表明存在系统性内存问题。用户需要在受限 ARM64 主机上获得可靠的 RSS 控制，并防止工作线程无界增长。

2. **更新/发布基础设施**：#204775 追踪 issue（38 条评论）表明团队正在协调修复更新路径。遇到更新失败的用户（#200756、#200606、#204816）需要可靠的版本过渡机制。

3. **平台一致性**：Windows 特定问题（#200756、#171831、#193673）凸显了平台差异，用户期望在正式投产前得到解决。

4. **会话状态完整性**：Issue #196199、#202518、#194664 表明会话生命周期管理存在问题，特别是在 Codex 集成和后台结果处理方面。

---

## 5. 缺陷与稳定性

### 关键（P0）问题

| # | 标题 | 影响 | 状态 |
|---|------|------|------|
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | MEMORY.md/USER.md 被静默排除在 bootstrap 之外（安全） | session-state, security | CLOSED |
| [#141413](https://github.com/openclaw/openclaw/issues/141413) | macOS 应用未为使用 SecretRef 的本地 Gateway 提供 token | auth-provider | OPEN |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex 保护性续写阻塞所有后续对话 | ux-release-blocker | OPEN |
| [#201472](https://github.com/openclaw/openclaw/issues/201472) | 已死的 Gateway 锁阻塞维护并回滚 2026.11.5 | ux-release-blocker | OPEN |
| [#202518](https://github.com/openclaw/openclaw/issues/202518) | claude-cli run 在 sessions_spawn + sessions_yield 后永不关闭 | ux-release-blocker | OPEN |

### 高优先级（P1）问题 — 内存/性能

| # | 标题 | 环境 | 状态 |
|---|------|------|------|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 工作线程泄漏约 4-5 GB/h | 平台无关 | OPEN |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 基线 RSS 1.9 GB，2026.10.5 中 SQLite 超时 | ARM64 Linux | OPEN |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | V8 堆外 RSS 失控导致 OOM | Linux x64 | OPEN |
| [#182369](https://github.com/openclaw/openclaw/issues/182369) | 堆外 RSS 约每小时增长 0.1 GiB | Linux x64 | OPEN |
| [#195497](https://github.com/openclaw/openclaw/issues/195497) | 17 小时内内存增长至约 3G | v2026.11.1 | OPEN |
| [#184843](https://github.com/openclaw/openclaw/issues/184843) | RSS 在 2-4 天内增长约 1 GiB 后被 OOM-killed | Ubuntu 26.04 | OPEN |

### Windows 特定问题

| # | 标题 | 影响 | 评论数 |
|---|------|------|--------|
| [#200756](https://github.com/openclaw/openclaw/issues/200756) | 更新在 package-swap 阶段失败（基线扫描失败） | ux-friction | 22 |
| [#171831](https://github.com/openclaw/openclaw/issues/171831) | 性能回退：启动时间从 55s 退化到 320s | crash-loop | 12 |
| [#193673](https://github.com/openclaw/openclaw/issues/193673) | 更新备份捕获在 EBUSY 时停止 | ux-friction | 8 |
| [#180892](https://github.com/openclaw/openclaw/issues/180892) | Doctor 因 DELETE-self 权限拒绝原生捕获 | ux-friction | 6 |

### 值得注意：部分问题已有修复 PR

- #204816 — 正在修复中（[#206372](https://github.com/openclaw/openclaw/pull/206372)）
- #200455 — **已合并**（TUI 截断修复）
- #204344 — **已合并**（旧校验器退出后 Git 更新修复）

---

## 6. 功能需求与路线图信号

### 活跃中的功能请求

| # | 标题 | 评论数 | 优先级 |
|---|------|--------|--------|
| [#151178](https://github.com/openclaw/openclaw/issues/151178) | 允许主动内存委托插件提供者决定升级策略 | 11 | P2 |
| [#103067](https://github.com/openclaw/openclaw/issues/103067) | 集中化聊天会话命名；定义子 agent 会话生命周期 | 13 | P2 |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron 作业无法结束：缺少 --until / --max-runs | 11 | P3 |

### 正在开发中的功能（通过 PR）

1. **Talk 状态提示音**（[#204362](https://github.com/openclaw/openclaw/pull/204362)）— Apple 平台特定的通话状态音频反馈
2. **GitHub 仓库插件迁移**（[#192350](https://github.com/openclaw/openclaw/pull/192350)）— 将 GitHub 集成移至捆绑插件
3. **sessions_send 唤醒准入**（[#194376](https://github.com/openclaw/openclaw/pull/194376)）— Gateway 拥有的类型化唤醒流量准入边界
4. **从记忆恢复继续学习**（[#206325](https://github.com/openclaw/openclaw/pull/206325)）— 从上次位置继续大型归档导入

### 下个版本的潜在信号

基于活跃的 P1 PR 和高互动 issue：
- **更新系统加固**（#206295、#206372）— 解决外来恢复记录问题
- **会话生命周期改进**（#206376）— 修复后台结果的空闲/重置行为
- **Windows 稳定性** — 很可能将 package-swap 和性能修复纳入目标版本

---

## 7. 用户反馈摘要

### 痛点

1. **内存不可预测性**：ARM64 和 Windows 用户报告基线 RSS 高达 1.9–2.5 GB，远在任何实际工作负载之前。根据配置不同，增长率为每小时 0.1–5 GB。这使得 OpenClaw 不适合资源受限的环境。

2. **更新失败**：更新机制在多个环节（package-swap、Doctor 验证、插件迁移）失败，且诊断信息不足。用户遇到回滚循环时没有明确的解决路径。

3. **Windows 平台差距**：启动时间比 Linux 慢 5-6 倍、事件循环阻塞、原生捕获权限问题，表明 Windows 并非一等公民。

4. **会话挂起**：Codex 辅助补全、claude-cli 运行和后台结果处理可能导致会话处于无响应状态，需要手动干预。

### 正面反馈信号

- TUI 会话记录完整性修复（[#200455](https://github.com/openclaw/openclaw/pull/200455)）解决了长期以来的 UX 投诉
- 知识库插件改进（[#206288](https://github.com/openclaw/openclaw/pull/206288)）使标注更加直观
- Codex 关闭开销降低（[#206358](https://github.com/openclaw/openclaw/pull/206358)）受到高级用户的赞赏

### 报告的使用场景

- 多 agent 部署，7+ 个 agent 和 22+ 个插件
- 跨平台：Linux ARM64、x64、Windows 11、macOS 均有覆盖
- 高频 cron 作业（50+ 个定时任务）
- 与 Telegram、Discord、飞书、Mattermost、Signal 集成

---

## 8. 待办事项关注

### 长期未响应的高优先级 Issue

| # | 标题 | 持续时间 | 评论数 | 最后更新 |
|---|------|----------|--------|----------|
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 刷新成功但 cron/心跳失败（10s 超时） | 约 6 个月 | 13 | 2026-11-26 |
| [#141172](https://github.com/openclaw/openclaw/issues/141172) | Run 在首次会话提交前终止导致 agent.run.started 泄漏 | 约 2.5 个月 | 15 | 2026-11-26 |
| [#136714](https://github.com/openclaw/openclaw/issues/136714) | 每个 Codex 子 agent 策略自 2026.8.2 起受限 | 约 3 个月 | 6 | 2026-11-26 |
| [#141413](https://github.com/openclaw/openclaw/issues/141413) | macOS 应用未为本地 Gateway 提供 token（安全） | 约 2.5 个月 | 10 | 2026-11-27 |

### 需要维护者审查的 Issue

以下 issue 标记了 `clawsweeper:needs-maintainer-review` 但尚无修复 PR：

- [#159662](https://github.com/openclaw/openclaw/issues/159662) — 工作线程内存泄漏
- [#154812](https://github.com/openclaw/openclaw/issues/154812) — RSS 失控导致 OOM
- [#182369](https://github.com/openclaw/openclaw/issues/182369) — 堆外 RSS 增长
- [#196199](https://github.com/openclaw/openclaw/issues/196199) — Codex 辅助恢复失败
- [#171831](https://github.com/openclaw/openclaw/issues/171831) — Windows 性能回退
- [#160485](https://github.com/openclaw/openclaw/issues/160485) — Windows 上插件加载 CPU 密集
- [#157605](https://github.com/openclaw/openclaw/issues/157605) — sessions.list 导致高 CPU 卡住
- [#157712](https://github.com/openclaw/openclaw/issues/157712) — CLI 状态读取泄漏 DB 快照

### 可能需要分类整理的陈旧 Issue

| # | 标题 | 持续时间 | 最后更新 |
|---|------|----------|----------|
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron 作业无法结束 | 约 3 个月 | 2026-11-27 |
| [#163107](https://github.com/openclaw/openclaw/issues/163107) | HEIC view_image 失败并泄漏 RSS | 约 2 个月 | 2026-11-27 |

---

*数据来源：OpenClaw GitHub — 2026-11-27*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese, following specific rules about preserving formatting and not translating certain elements.

Let me translate this carefully, maintaining the Markdown structure and using natural technical Chinese.

Let me go through it section by section:

**Title**: Personal AI Agent Ecosystem — Cross-Project Comparison Report
→ 个人 AI Agent 生态系统——跨项目对比报告

**Date and scope**: Keep as-is

**Section 1**: Ecosystem Overview
Translate naturally while preserving structure.

**Section 2**: Activity Comparison - table needs careful translation

**Section 3**: OpenClaw's Position with subsections

**Section 4**: Shared Technical Focus Areas with tables

**Section 5**: Differentiation Analysis with tables

**Section 6**: Community Momentum & Maturity

**Section 7**: Trend Signals with 8 numbered items

Let me do this carefully, ensuring technical terms are appropriately handled.
</think>


# 个人 AI Agent 生态系统——跨项目对比报告

**日期：** 2026-11-27 | **范围：** 五个开源个人 AI 助手与 Agent 项目

---

## 1. 生态系统全景

2026-11-27 的个人 AI 助手与 Agent 开源生态系统呈现出清晰的三层活跃度结构：**OpenClaw** 的规模远超同类项目，24 小时内处理了约 7 倍于其他活跃项目的 issue 更新和 10 倍于同类项目的 PR 活动。**Hermes Agent** 和 **ZeroClaw** 保持着健康的专注开发节奏，PR 更新量均为每日 50 条；**QwenPaw** 处于中等活跃度，有一条关键回归缺陷待处理；而 **IronClaw** 未检测到任何活动信号，其当前维护状态存疑。在所有活跃项目中，核心技术主题集中在**内存管理、会话生命周期完整性、跨平台一致性、凭证系统安全加固以及数据库可扩展性**——这些都反映出社区正在应对大规模运行 AI Agent 于生产环境中的实际工程挑战。

---

## 2. 活动量对比

| 项目 | 仓库 | Issue 更新 (24h) | PR 更新 (24h) | 今日合并 PR | 今日发版 | 开放 Issue | 关键健康指标 |
|---------|------|---------------------:|------------------:|-----------------:|---------------:|------------|-----------------------|
| **OpenClaw** | openclaw/openclaw | 367 | 500 | 213 | 0 | ~264 | ⚠️ 多条 P0/P1 缺陷；内存泄漏；Windows 回归 |
| **Hermes Agent** | NousResearch/hermes-agent | 50 | 50 | 6 | 0 | ~45 | ✅ 稳定；安全加固中；生态扩张 |
| **IronClaw** | nearai/ironclaw | 0 | 0 | — | — | — | ⚫ 无活动信号 |
| **QwenPaw** | agentscope-ai/QwenPaw | 21 | 43 | 15 | 0 | ~10 | 🔴 2.3.0-post1 回归缺陷；快速关闭 bug |
| **ZeroClaw** | zeroclaw-labs/zeroclaw | 13 | 50 | 0 | 0 | ~8 | 🟡 PR 管道积压；v1.0.0 路线图已开启；今日零合并 |

**健康度评分方法** — 综合以下维度：issue 关闭率、P1/P0 待办积压深度、回归缺陷频率、发版节奏、社区参与质量。

---

## 3. OpenClaw 的定位

### 相对于同行的优势

OpenClaw 的规模无出其右：24 小时内处理的 issue 和 PR 更新量超过其他四个项目的总和。这一体量反映出其拥有成熟的贡献者群体、高复杂度的代码库以及庞大的用户群。其优势包括：

- **平台覆盖广度**：活跃 issue 跨越 Linux ARM64、Linux x64、Windows、macOS 以及嵌入式/Telegram/Discord/飞书/Mattermost/Signal 集成——覆盖广度远超任何同行
- **Codex 集成深度**：在 helper 补全、延续块和 reasoning 预算方面拥有专门的架构，表明其多模型编排能力已达到先进水平
- **社区治理清晰**：clawesweeper 标签体系、prepared-release 设计文档（#204775，38 条评论）、结构化的 issue 分类（P0/P1/P2/P3）表明项目管理的规范性
- **更新基础设施投入**：多个 issue 和 PR 在积极改进更新机制（package-swap、Doctor 验证、恢复记录），体现了对生产级部署的高度重视

### 技术路径差异

OpenClaw 在多个架构层面与同行存在分歧：

- **Prepared releases 与状态所有权**：OpenClaw 的 `prepared-release` 机制（构建与发布之间的正式暂存流程）在其他项目中没有直接对应物
- **Gateway 中心的会话管理**：OpenClaw 的 Gateway 组件拥有会话准入边界，类型化的 wake 流量（`sessions_send`）被显式管理——比 Hermes Agent 的 cron 投递模型或 ZeroClaw 的 webhook 方案更为正式
- **Prepared model catalog worker**：`prepared-model-catalog.worker.js` 组件（每个工作线程每小时泄漏约 4–5 GB，#159662）反映了一种在同类项目中未曾出现的新型工作线程架构
- **精选 memory roots**：OpenClaw 通过精选的 memory roots（MEMORY.md/USER.md）进行引导注入，提供了结构化的初始化协议，而其他项目处理此事更为随意

### 社区规模对比

OpenClaw 24 小时内 367 条 issue 更新和 500 条 PR 更新，使其 50/50 的 Hermes Agent 和 13/50 的 ZeroClaw 黯然失色。即使考虑到 OpenClaw 更大的代码库体量，这一比例（约 7–10 倍于同类项目）也表明其贡献者社区规模大约高出一个数量级。QwenPaw 的 43 条 PR 反映出一支中等规模的团队，而 IronClaw 的沉寂则表明其团队极小或项目处于休眠状态。

---

## 4. 共同的技术关注领域

以下需求在多个项目中独立浮现，表明了生态系统层面的真实技术需求：

### 内存管理与性能

| 项目 | 具体问题 | 严重级别 |
|---------|---------------|----------|
| **OpenClaw** | 工作线程泄漏约 4–5 GB/h（#159662）；RSS 失控 OOM（#154812）；基线 RSS 1.9 GB（#181432） | P1–P0 |
| **Hermes Agent** | `idle_compact_after_seconds` 从未触发（#79357）；Prompt 缓存生命周期缺陷（#160651） | P2 |
| **QwenPaw** | Context meter 渲染不一致（#12743） | S3 |

**跨项目信号：** 每当有实质性活动的项目都在与内存消耗和压缩策略搏斗。生态系统尚未在空闲压缩、上下文裁剪或堆外内存管理方面收敛出一套标准方案。

### 会话生命周期与状态完整性

| 项目 | 具体问题 |
|---------|---------------|
| **OpenClaw** | Codex helper 补全无法恢复（#196199）；`claude-cli run` 从未关闭（#202518）；Gateway 死锁（#201472） |
| **Hermes Agent** | Cron 投递卡在 `delivery_queued`（#134092）；回执恢复循环（#155638）；`busy_result_mode` 子 Agent 结果处理（#136708） |
| **QwenPaw** | ToolCallBudgetGate 重复计数（#8943）；Doom-loop gate 从未触发（#8713） |
| **ZeroClaw** | 运行时 profile 成本限制偏差（#10635） |

**跨项目信号：** 会话生命周期管理——包括父子 Agent 关系、后端任务完成、Cron 投递语义和错误恢复——是所有项目报告中最一致的问题类别。目前没有项目拥有完全成熟的解决方案。

### 跨平台一致性

| 项目 | 问题 |
|---------|-------|
| **OpenClaw** | Windows 启动慢 5–6 倍（#171831）；更新在 package-swap 处失败（#200756）；插件加载 CPU 瓶颈（#160485） |
| **QwenPaw** | 12 个 plugin-install 测试在 Windows 上失败（#8941）；Windows Chrome 上控制台渲染差异（#12743） |
| **Hermes Agent** | Python 3.14 worker 继承了 cp311 site-packages（#139085） |
| **ZeroClaw** | Windows Chrome 上字体渲染高度不同（#12743） |

**跨项目信号：** Windows 在整个生态系统中仍是二等平台。Linux ARM64 支持（对边缘部署至关重要）同样参差不齐。社区需要共享的跨平台验证测试基础设施。

### 凭证与安全加固

| 项目 | 关注点 |
|---------|-------|
| **Hermes Agent** | 配置文件中安全策略密钥保护（#104697）；Approval gate 通过尾部重定向绕过（#160605） |
| **ZeroClaw** | SSH 保管库范围密码/TOTP 授权（#12659）；独立浏览器凭证授权（#12596）；原生 Rust SSH 任务代理（#12438） |
| **OpenClaw** | macOS 本地 Gateway 省略 token（#141413，P0 安全） |

**跨项目信号：** 安全是 Hermes Agent 和 ZeroClaw 的首要优先级——两者均在投资细粒度权限范围、原生实现以规避解释器注入风险，以及插件 OAuth 改进。OpenClaw 有一条关键身份验证缺陷待处理。

### 数据库可扩展性与持久化

| 项目 | 问题 |
|---------|-------|
| **Hermes Agent** | RFC：可插拔 SessionDB Provider 支持 PostgreSQL/MySQL（#23717，11 👍，26 条评论） |
| **OpenClaw** | 负载下 SQLite 超时（#181432）；Gateway RSS 失控（#154812） |
| **QwenPaw** | 会话存储 + 分页历史今日合并（#8532） |
| **ZeroClaw** | Markdown memory 后端竞态条件（现已修复 #10797） |

**跨项目信号：** SQLite 在整个生态系统中的扩展性已触及上限。社区已开始寻求多数据库支持，但尚无项目交付生产就绪的替代方案。这是一个战略性缺口。

### 更新与发版基础设施

| 项目 | 问题 |
|---------|-------|
| **OpenClaw** | 多处更新失败（#200756、#200606、#204816）；恢复记录损坏（#206295） |
| **Hermes Agent** | 后端迁移重启交接对齐（#160225，今日关闭） |
| **QwenPaw** | 2.3.0-post1 回归缺陷（#8949）；2.3.1b2 已流通 |
| **ZeroClaw** | v1.0.0 路线图已开启（#12712） |

**跨项目信号：** 每个项目都在积极改进其更新机制。生态系统缺少一套参考实现——具备原子回滚能力、清晰用户通知的安全更新方案。

---

## 5. 差异化分析

### 目标用户与用例定位

| 项目 | 主要用户画像 | 差异化用例 |
|---------|-----------------|------------------------|
| **OpenClaw** | 企业用户 / 高级用户 / 跨平台运维人员 | 7+ Agent、多达 22 个插件的生产级多 Agent 部署 |
| **Hermes Agent** | 自托管 / 开发者 / 多渠道团队 | 插件生态（Telegram、Discord、飞书、Matrix），Cron 驱动工作流，Webhook 集成 |
| **QwenPaw** | 桌面用户 / 本地模型爱好者 | 本地 LLM 集成（llama.cpp、Ollama）、Tauri 桌面应用、视频记忆、飞书渠道 |
| **ZeroClaw** | 安全敏感 / 企业 / 运维导向 | 凭证保管库（SSH、WebDAV、浏览器、TOTP）、原生 Rust 组件、XMPP/OMEMO |
| **IronClaw** | 未知（无活动） | — |

### 技术架构差异

**OpenClaw** 采用 Gateway 中心化架构，具有正式的准入边界、prepared releases 阶段性部署机制和精选的 memory bootstrap 系统。它是唯一一个拥有明确 P0/P1/P2/P3 优先级体系和 `clawsweeper` 分诊流程的项目。

**Hermes Agent** 采用插件优先架构，集成（Telegram、Discord、Matrix、飞书）作为一等公民的插件存在。它首创了 `lazy: true` MCP 模式，拥有最成熟的多渠道投递系统。SessionDB Provider RFC（#23717）表明其计划从 SQLite 原生存储转向可插拔架构。

**QwenPaw** 是最以桌面为中心的项目，基于 Tauri 构建跨平台桌面应用。它在本地模型集成（llama.cpp GPU 控制、运行时自动更新）方面最为成熟，是唯一拥有专用视频记忆子系统的项目。其架构在多模态工作流方面最具主见。

**ZeroClaw** 通过原生 Rust 组件（SSH broker、XMPP/OMEMO 栈）实现安全关键操作的差异化，尽量避免解释器执行。其凭证保管库架构（范围化 SSH 授权、TOTP、WebDAV 权限）瞄准企业安全需求。v1.0.0 路线图（#12712）的开启表明正朝 API 稳定化方向推进。

**IronClaw** 无近期活动，无法判断其当前状态。

### 平台策略

| 项目 | Linux | ARM64 | Windows | macOS | 移动端/嵌入式 |
|---------|------:|------:|--------:|------:|----------------:|
| **OpenClaw** | ✅ 主要平台 | ✅ | ⚠️ 二等平台 | ✅ | ✅ Telegram/Discord/Signal |
| **Hermes Agent** | ✅ 主要平台 | 部分 | ⚠️ 部分 | ✅ | ✅ 飞书/Mattermost/Discord |
| **QwenPaw** | ✅ 桌面 | ❌ | ✅ 桌面 | ✅ 桌面 | ❌ |
| **ZeroClaw** | ✅ 主要平台 | ❌ | ✅ | ✅ | ✅ Signal |
| **IronClaw** | 未知 | 未知 | 未知 | 未知 | 未知 |

---

## 6. 社区势能与成熟度

### 活跃度层级

**第一层 — 超大规模 / 走向成熟**
- **OpenClaw**：每日 367 条 issue + 500 条 PR 更新。在此速度下，项目正在以需要专门工具（clawsweeper 分诊、prepared releases）的规模管理复杂度。大量 P0/P1 缺陷和高内存回归积压表明技术债务在累积。项目处于高产出但高压状态——发版速度慢于开发速度。

**第二层 — 健康迭代 / 功能增长期**
- **Hermes Agent**：50/50 活动量。Issue 和 PR 速度均衡良好。今日 6 条合并表明闭环健康。插件生态正在扩张（ANKLE OS、reminders、hermes-shortcuts 0.2.0）。安全加固和 SessionDB Provider RFC 表明走向成熟。高关注度 issue（#23717、#28279）上的 `needs-decision` 标签表明团队在架构决策上保持审慎。
- **ZeroClaw**：50 条 PR 更新但零合并，表明 PR 审查瓶颈或刻意暂缓。v1.0.0 路线图开启是成熟度信号。高投入于凭证范围化和原生 Rust 组件表明安全优先定位。本地 small profile 请求（#5287，7 个月前）是一条待办积压。

**第三层 — 中等速度 / 回归风险**
- **QwenPaw**：43 条 PR + 21 条 issue，合并 15 条，关闭率不错。但最新版本的回归缺陷（#8949）和重复计数 bug（#8943）表明发版质量门控可能需要加强。`passionworkeer` 小 PR 的高速度对代码质量有益，但也表明大量边界情况正在被被动修复。

**第四层 — 休眠**
- **IronClaw**：无活动信号。无法评估当前状态。

### 发版节奏

| 项目 | 发版节奏 | 说明 |
|---------|-----------------|-------|
| OpenClaw | 间歇性（今日 0） | 受 P0/P1 修复阻塞；prepared-release 机制表明更长的周期 |
| Hermes Agent | 间歇性（今日 0） | 最近版本 v0.23.4；稳定 |
| QwenPaw | 活跃（2.3.0→2.3.1b2） | Beta 版流通中；回归缺陷表明 QA 需要收紧 |
| ZeroClaw | 今日无；规划 v1.0.0 | 路线图已开启；可能正走向首个稳定版 |
| IronClaw | 未知 | 无活动 |

---

## 7. 趋势信号

以下信号从所有活跃项目的社区反馈、issue 模式和技术主题聚合中浮现：

### 1. SQLite 在所有地方都在触及上限

每个有实质性规模的项目都遇到了 SQLite 的限制——热更新期间的 file-locking、WAL 维护导致的 RSS 增长、高并发读取下的超时。Hermes Agent 的 RFC（#23717，11 👍）是最清晰的信号，表明生态系统需要一个共享的、生产测试通过的替代方案。这对数据库抽象层来说是战略性机会，多个项目可以共同采用。

### 2. Windows 持续处于二等平台地位

尽管是主要桌面操作系统，每个项目都报告了 Windows 特定问题：启动更慢、symlink 权限要求、渲染差异、孤儿进程管理。这表明社区缺少共享的 Windows 测试基础设施。在 Windows 一致性上优先投入的项目将在企业采用中获得差异化优势。

### 3. 内存管理是最难解决且悬而未决的问题

从 OpenClaw 的 4–5 GB/h 工作线程泄漏，到 Hermes Agent 的空闲压缩失效，再到 QwenPaw 的 context meter 不一致，内存消耗是最突出的运维问题。目前没有项目拥有参考级质量的上下文压缩方案——即在不损害用户体验的前提下释放内存。这是影响最大的技术缺口。

### 4. Agent 间关系需要形式化

OpenClaw 的 Codex helper 补全、HERMES Agent 的异步委托子 Agent 结果、QwenPaw 的 doom-loop gate，以及 ZeroClaw 的命名 Agent 记忆保留，都涉及父子 Agent 关系的管理。生态系统目前没有 Agent 应如何通信、共享上下文、处理失败和干净终止的标准模型。这是一个根本性的架构缺口。

### 5. 安全正从可选项变为必选项

ZeroClaw 的范围化凭证保管库、Hermes Agent 的安全策略密钥保护、OpenClaw 的身份验证缺陷（#141413），以及 ZeroClaw 的原生 Rust SSH broker，都表明生态系统已成熟到面临对抗性场景。Hermes Agent 中 approval gate 通过尾部重定向绕过（#160605）表明即使设计良好的安全机制也存在微妙的绕过路径。随着这些工具进入生产级企业部署，安全加固将成为竞争性差异点。

### 6. 本地模型支持是日益增长的优先项

QwenPaw 的 llama.cpp GPU 控制和运行时自动更新、OpenClaw 的 prepared-model-catalog worker，以及 ZeroClaw 的紧凑型 local_small profile 请求（#5287，7+ 个月前）都表明对本地化、隐私优先部署的强烈需求。这部分由成本驱动（证据包括 OpenClaw 的 Codex 使用量展示 PRs 和 Hermes Agent 的 token 计量），部分由数据主权需求驱动。

### 7. 跨平台插件生态系统正在走向成熟

Hermes Agent 的 ANKLE OS 目录条目和 reminders 插件、ZeroClaw 的 WebDAV 和 XMPP 集成，以及 OpenClaw 的 22+ 插件部署，都表明插件架构正在交付价值。生态系统正从"插件是事后想法"转向"插件是一等价值交付机制"。这创造了共享插件发现、依赖解析和安全验证框架的机会。

### 8. 回归风险随发版速度增加而上升

QwenPaw 的 2.3.0-post1 回归缺陷（#8949）和 OpenClaw 持续的内存回归积压表明，随着项目发版越来越频繁，回归风险的增速快于测试覆盖的增速。生态系统将受益于共享的回归测试基础设施——特别是跨平台场景、内存分析和会话生命周期压力测试。

---

*跨项目对比基于 2026-11-27 OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw 的 GitHub 活动数据综合生成。健康度评分是基于 issue 关闭率、P1/P0 待办积压深度、回归缺陷频率和社区参与度指标的综合估算。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this entire project digest from English into Simplified Chinese. I need to:

1. Translate all headings, body text, and table content into Simplified Chinese
2. Preserve all Markdown structure exactly (tables, headings, lists, etc.)
3. Keep URLs, code references, issue numbers, version tags, etc. as-is
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section carefully, maintaining the technical accuracy and natural Chinese flow.

Key terms to translate consistently:
- "Digest" → 文摘 or 项目速览
- "Overview" → 概览
- "Releases" → 版本发布
- "Project Progress" → 项目进展
- "Community Hot Topics" → 社区热点
- "Bugs & Stability" → Bug 与稳定性
- "Feature Requests" → 功能需求
- "User Feedback" → 用户反馈
- "Backlog Watch" → 积压关注
- "High-Priority Bugs" → 高优先级 Bug
- "Notable Fixed Bugs" → 已修复的重要 Bug
- "Security Issue" → 安全问题
- "High-Interest Features" → 高需求功能
- "Predicted Next-Version Candidates" → 预计下版本内容
- "Pain Points" → 痛点
- "Satisfaction Signals" → 满意度信号
- "Long-Standing Issues" → 长期未决问题
- "PRs Approaching Staleness" → 趋于陈旧的 PR
- "Items Requiring Decision" → 待决策事项

Let me go through the entire document and translate it carefully.
</think>


# Hermes Agent 项目文摘 — 2026-11-27

## 1. 今日概览

Hermes Agent 保持高活跃度，**过去 24 小时内有 50 个 issue 和 50 个 PR 更新**，表明开发节奏持续稳定。今日未发布新版本。项目社区参与度健康，共关闭 5 个 issue、合并/关闭 6 个 PR。值得关注的主要趋势包括：插件生态持续扩展（ByteRover/RetainDB 迁移、ANKLE OS 加入、reminders 插件）、安全加固（approval gate 修复、配置守卫）以及针对 Windows 和桌面环境的平台特定 bug 修复。Issue 积压量较大（45 个 open），提示存在持续性的优先级排序挑战。

---

## 2. 版本发布

**今日无新版本发布。**

数据中提到的最新稳定版本为 **v0.23.4**（在 issue #160384 和 #160654 中提及）。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 类型 | 描述 | 状态 |
|----|------|-------------|--------|
| [#160225](https://github.com/NousResearch/hermes-agent/pull/160225) | Bug 修复 | 对齐后端迁移重启交接、systemd 及 UI 轮询超时 | Closed |
| [#144928](https://github.com/NousResearch/hermes-agent/pull/144928) | 功能 | 添加 ankle（ANKLE OS）社区插件目录项 | Closed |

### 重点 Open PR（活跃开发中）

**破坏性变更 — 内存 Provider 迁出核心模块：**
- [#159622](https://github.com/NousResearch/hermes-agent/pull/159622) — **ByteRover 和 RetainDB 迁出核心代码进入 Hermes Labs** — 现有用户将自动迁移并附带通知；新用户不受影响

**新功能：**
- [#160656](https://github.com/NousResearch/hermes-agent/pull/160656) — `hermes -c` 在另一个终端已打开 chat 时不再停止（跳过已锁定会话）
- [#158021](https://github.com/NousResearch/hermes-agent/pull/158021) — 新增 `sessions.tool_payload_retention_days` 配置项，用于在保留对话的同时清理旧工具输出
- [#84962](https://github.com/NousResearch/hermes-agent/pull/84962) — **Kubernetes session-pod 执行后端**，用于 terminal 工具
- [#153414](https://github.com/NousResearch/hermes-agent/pull/153414) — Plugin Hackathon 参赛作品：`hermes-ride`（摩托车头盔集成）
- [#159877](https://github.com/NousResearch/hermes-agent/pull/159877) — 将 reminders 插件加入插件目录
- [#151484](https://github.com/NousResearch/hermes-agent/pull/151484) — 在选择器中隐藏 cron 会话
- [#136708](https://github.com/NousResearch/hermes-agent/pull/136708) — `busy_result_mode` 将中段子代理结果保留到运行中的 turn

**Bug 修复：**
- [#160651](https://github.com/NousResearch/hermes-agent/pull/160651) — **修复 #160322**：超出 prompt cache 时长的回复不再导致重发
- [#146851](https://github.com/NousResearch/hermes-agent/pull/146851) — 修复：缓存在父会话重建后仍保持子代理可见
- [#160643](https://github.com/NousResearch/hermes-agent/pull/160643) — 在 provider-id digest 归一化后对工具调用 ID 去重（修复 IntegrityError）
- [#160654](https://github.com/NousResearch/hermes-agent/pull/160654) — 阻止 gateway 恢复流程进入首次运行设置（桌面端）
- [#140175](https://github.com/NousResearch/hermes-agent/pull/140175) — 修复： fenced behind lost turn 时撤回 prompt，在等待运行中的 turn 时发出警告
- [#140503](https://github.com/NousResearch/hermes-agent/pull/140503) — 修复：gateway 重连后恢复 reasoning 显示
- [#101793](https://github.com/NousResearch/hermes-agent/pull/101793) — 修复：Windows 上重建失败时命名非 Hermes 的 CWD 锁持有者

**安全：**
- [#104697](https://github.com/NousResearch/hermes-agent/pull/104697) — 在 `hermes config set/unset` 中守卫 security-policy 密钥

**插件更新：**
- [#160653](https://github.com/NousResearch/hermes-agent/pull/160653) — 升级 `hermes-shortcuts` 至 0.2.0

---

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 👍 | 优先级 | 链接 |
|-------|-------|----------|----|----------|------|
| #23717 | RFC：可插拔 SessionDB Provider — 支持 PostgreSQL、MySQL 等 | 26 | 11 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| #79357 | Bug：`idle_compact_after_seconds` 在 gateway 模式下从不触发 | 13 | 6 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/79357) |
| #28279 | 功能：每个 Chat 的内存隔离（作用域内存） | 11 | 2 | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/28279) |
| #134092 | Bug：cron 任务在 Bot Chat 投递完成后仍处于 "delivery_queued" 状态 | 10 | 0 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/134092) |
| #117886 | Turn 后台压缩：不再阻塞 turn | 10 | 0 | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/117886) |
| #127942 | Bug：MCP `lazy: true` 从不生效（SDK 默认 ttlMs=0） | 9 | 0 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/127942) |
| #155638 | Bug：收据恢复无限循环（UnscopedSecretError） | 7 | 0 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/155638) |
| #78975 | Bug：飞书 cron 投递失败（无效的 `receive_id_type`） | 7 | 0 | P2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/78975) |

### 深层需求分析

**会话状态与存储（#23717、#155638、#134092）：** 社区对 SQLite 以外的多数据库支持（PostgreSQL、MySQL）需求强烈。当前仅支持 SQLite 的架构给企业部署带来了热更新风险和扩展性限制。

**隐私与多用户隔离（#28279）：** 在多个平台（Telegram、Discord、Matrix）上运行 Hermes 的用户需要每个聊天独立的内存隔离，以防止上下文污染。

**性能与响应速度（#79357、#117886、#160651）：** 压缩/空闲压缩阻塞用户可见 turn 是反复出现的问题。Turn 后台压缩和 prompt cache 生命周期管理是当前活跃的开发领域。

**平台特定可靠性（#78975、#155638）：** 飞书集成和 Matrix 收据处理表明非主要平台的支撑存在缺口。

---

## 5. Bug 与稳定性

### 高优先级 Bug（P1-P2）

| Issue | 组件 | 概述 | 严重程度 | 修复 PR？ |
|-------|-----------|---------|----------|---------|
| [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) | gateway, compression | `idle_compact_after_seconds` 从不触发 — 看门狗在空闲检查前重置时间戳 | P2 | 否 |
| [#134092](https://github.com/NousResearch/hermes-agent/issues/134092) | cron | cron 任务在 Bot Chat 投递完成后仍处于 "delivery_queued" | P2 | 否 |
| [#127942](https://github.com/NousResearch/hermes-agent/issues/127942) | tools, MCP | MCP `lazy: true` 从不生效，原因是 SDK 默认 ttlMs=0 | P2 | 否 |
| [#155638](https://github.com/NousResearch/hermes-agent/issues/155638) | cron, Matrix | 收据恢复无限循环（UnscopedSecretError） | P2 | 否 |
| [#78975](https://github.com/NousResearch/hermes-agent/issues/78975) | plugins, Feishu | 飞书 cron 投递因字段校验错误失败 | P2 | 否 |
| [#147660](https://github.com/NousResearch/hermes-agent/issues/147660) | gateway | GUI 会话的 `hermes-session-reset-policy` 从不触发 | P2 | 否 |
| [#160634](https://github.com/NousResearch/hermes-agent/issues/160634) | gateway | `/v1/runs` 将 max-iterations 交接报告为 `run.failed` | P2 | 否 |
| [#158591](https://github.com/NousResearch/hermes-agent/issues/158591) | tools, SSH | SSH 环境 `__del__` 在事件循环上运行阻塞式 sync_back | P2 | 否 |
| [#139085](https://github.com/NousResearch/hermes-agent/issues/139085) | gateway, Windows | Python 3.14 worker 继承了 cp311 site-packages，启动时 pydantic_core 崩溃 | P2 | 否 |

### 已修复的重要 Bug

- [#99568](https://github.com/NousResearch/hermes-agent/issues/99568) — **已关闭**：session_search 恢复 footer 无法返回压缩后的行
- [#149642](https://github.com/NousResearch/hermes-agent/issues/149642) — **已关闭**：插件 oauth 为精确匹配的 redirect URI 暴露 redirect_port
- [#152732](https://github.com/NousResearch/hermes-agent/issues/152732) — **已关闭**：插件 oauth 支持逗号分隔的 scopes 和固定的 redirect port（支持 Linear 插件）

### 安全问题

| Issue | 组件 | 概述 | 严重程度 | 链接 |
|-------|-----------|---------|----------|------|
| [#160605](https://github.com/NousResearch/hermes-agent/issues/160605) | tools, terminal | Approval gate：三种命令形式将 `ask` 裁定变成 `allow` | P3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/160605) |

**注意：** 这是一个安全问题，尾随重定向（`cp ... > file`、`sed ... | sh`、`sh <file>`）可绕过 approval gate。

---

## 6. 功能需求与路线图信号

### 高需求功能（按 👍 或评论活跃度）

| Issue/PR | 标题 | 关注度 | 链接 |
|----------|-------|----------|------|
| [#23717](https://github.com/NousResearch/hermes-agent/issues/23717) | RFC：可插拔 SessionDB Provider | 11 👍，26 评论 | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) | `idle_compact_after_seconds` 修复 | 6 👍，13 评论 | [Issue](https://github.com/NousResearch/hermes-agent/issues/79357) |
| [#28279](https://github.com/NousResearch/hermes-agent/issues/28279) | 每个 Chat 的内存隔离 | 2 👍，11 评论 | [Issue](https://github.com/NousResearch/hermes-agent/issues/28279) |
| [#16106](https://github.com/NousResearch/hermes-agent/issues/16106) | First-visible-commitment SLO 和 provider 时序追踪 | 6 评论 | [Issue](https://github.com/NousResearch/hermes-agent/issues/16106) |
| [#130226](https://github.com/NousResearch/hermes-agent/issues/130226) | Async-delegation completions 在 api_server 会话上唤醒父会话 | 1 👍，4 评论 | [Issue](https://github.com/NousResearch/hermes-agent/issues/130226) |

### 预计下版本候选

基于活跃 PR 和 issue 优先级：

1. **内存 provider 迁移（#159622）** — 已在 PR 中，下版本发布概率高
2. **Kubernetes terminal 后端（#84962）** — PR 成熟，文档完整
3. **子代理可见性修复（#146851）** — 解决 Ctrl+T 监控的 UX 缺陷
4. **Prompt cache 生命周期修复（#160651）** — 修复重大性能回退
5. **CLI 会话锁定改进（#160656）** — 小而实用的用户体验提升
6. **工具载荷保留期（#158021）** — 解决数据库膨胀问题

---

## 7. 用户反馈摘要

### 发现的痛点

**多用户/多平台隐私（#28279）：**
> 在多个聊天平台上运营 Hermes 的用户报告，全局内存注入会造成隐私泄露——上下文会跨 Telegram、Discord 和 Matrix 会话污染。

**企业数据库限制（#23717）：**
> 在生产环境运行 Hermes 的组织报告，SQLite 的文件锁和缺乏网络访问能力造成了热更新不稳定，并阻碍了水平扩展。

**压缩 UX 劣化（#79357、#117886）：**
> 长对话在行内压缩时出现明显延迟，用户在上下文摘要期间经历"静默等待"。

**插件生态碎片化（#160647）：**
> 插件依赖冲突（如 `onnxruntime` 版本锁定导致 `mnemosyne` 无法安装）造成了安装摩擦。

**桌面端恢复 UX（#160654、#158264）：**
> 桌面用户在应用程序误判健康安装为异常时，会遇到令人困惑的"修复安装"提示，特别是网络克隆较慢的 Linux 环境。

### 满意度信号

- **插件 hackathon 参与**（#153414、#144928、#159877）表明社区贡献活跃
- **Bug 响应迅速** — 多个 issue 当日更新，维护者积极参与
- **破坏性变更沟通充分** — ByteRover/RetainDB 迁移包含用户迁移路径和通知

---

## 8. 积压关注

### 需要维护者关注的长期待办 Issue

| Issue | 时长 | 标题 | 状态 | 链接 |
|-------|-----|-------|--------|------|
| #23717 | 约 6 个月 | RFC：可插拔 SessionDB Provider | Open，待决策 | [Issue](https://github.com/NousResearch/hermes-agent/issues/23717) |
| #28279 | 约 6 个月 | 每个 Chat 的内存隔离 | Open，待决策 | [Issue](https://github.com/NousResearch/hermes-agent/issues/28279) |
| #84962 | 约 3 个月 | Kubernetes session-pod 执行后端 | Open，PR 较大 | [Issue](https://github.com/NousResearch/hermes-agent/pull/84962) |
| #16106 | 约 7 个月 | First-visible-commitment SLO 和 provider 时序追踪 | Open | [Issue](https://github.com/NousResearch/hermes-agent/issues/16106) |

### 趋于陈旧的 PR

| PR | 时长 | 标题 | 链接 |
|----|-----|-------|------|
| #84962 | 约 3 个月 | Kubernetes session-pod 执行后端 | [PR](https://github.com/NousResearch/hermes-agent/pull/84962) |
| #136708 | 约 1.5 个月 | busy_result_mode 中段子代理结果 | [PR](https://github.com/NousResearch/hermes-agent/pull/136708) |
| #104697 | 约 2.5 个月 | 在配置中守卫 security-policy 密钥 | [PR](https://github.com/NousResearch/hermes-agent/pull/104697) |

### 待决策/路线图不明事项

- **#23717**（SessionDB provider）— 标记 `needs-decision`，社区关注度高
- **#28279**（内存隔离）— 标记 `needs-decision`，涉及隐私影响
- **#117886**（后台压缩）— 标记 `needs-decision`，涉及性能权衡
- **#130226**（Async-delegation UX）— 标记 `needs-decision`，涉及 API 设计

---

*文摘数据来源：NousResearch/hermes-agent GitHub 仓库，2026-11-27*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully:

---

# QwenPaw 项目日报 — 2026-11-27

## 1. 今日概览

QwenPaw (github.com/agentscope-ai/QwenPaw) 在 2026 年 11 月 27 日呈现高度活跃状态，过去 24 小时内共有 **21 个 issue** 和 **43 个 pull request** 更新。过去 24 小时没有发布新版本。项目中正在推进多项 bug 修复和功能开发工作，共有 15 个 PR 合并/关闭，11 个 issue 解决。今日出现了两个需要维护者关注的问题：与近期 2.3.0-post1 版本相关的回归问题（#8949）以及波浪号渲染 bug（#8948）。在会话存储基础设施（#8532）、本地模型 GPU 控制（#8649）和控制台 UX 改进（#8859）方面有显著进展。

## 2. 版本发布

**过去 24 小时无新版本发布。** 最新稳定版为 **2.3.0.post1**，beta 版为 **2.3.1b2**。

## 3. 项目进展

### 已合并/关闭的 PR（15 个，节选）

| PR | 作者 | 规模 | 描述 |
|----|------|------|------|
| [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) | zhijianma | XXXL | **feat(chat):** 仅追加会话存储、分页历史记录和原生 Turn 分支 — 主要的持久性和 UX 基础设施升级 |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | LUOSENGWA | XL | **feat(desktop):** 为 Tauri 构建添加 Linux deb 和 AppImage 打包方式 — 解决了 Linux 桌面用户的长期需求 |
| [#8932](https://github.com/agentscope-ai/QwenPaw/pull/8932) | passionworkeer | XS | **fix(video_memory):** 在 `plan_segments()` 中将折叠短尾段限制在 `max_scene_sec` |
| [#8933](https://github.com/agentscope-ai/QwenPaw/pull/8933) | passionworkeer | XS | **fix(video_memory):** 在 `merged_graph_payload()` 中将根主题转换为 `str` 并处理 `null` |
| [#8909](https://github.com/agentscope-ai/QwenPaw/pull/8909) | passionworkeer | XS | **fix(web_grounding):** 在 `as_list` 中移除空项而非转换为 `'None'` |
| [#8917](https://github.com/agentscope-ai/QwenPaw/pull/8917) | passionworkeer | S | **fix(video_memory):** 在 `extract_json` 中扫描最长有效 JSON 以处理杂散的尾部括号 |
| [#8915](https://github.com/agentscope-ai/QwenPaw/pull/8915) | passionworkeer | S | **fix(creator):** 在 `_find_balanced_json` 中验证平衡的 JSON 候选 |
| [#8911](https://github.com/agentscope-ai/QwenPaw/pull/8911) | passionworkeer | XS | **fix(agents/utils):** 在 `_schema_permits_string` 中处理 `allOf`（此前仅检查 `anyOf`/`oneOf`） |
| [#8907](https://github.com/agentscope-ai/QwenPaw/pull/8907) | passionworkeer | XS | **fix(utils):** 在 `_first_text_in_list` 中跳过空文本块 |
| [#8905](https://github.com/agentscope-ai/QwenPaw/pull/8905) | passionworkeer | S | **fix(creator/json_pointer):** 强制使用 RFC 6901 数组索引标记以防止错误的元素写入 |
| [#8946](https://github.com/agentscope-ai/QwenPaw/pull/8946) | shaojunying | S | **fix(feishu):** 在飞书表格卡片中保留带围栏的代码块 — 解决了 #8945 |

### 审核中的活跃 PR（节选）

| PR | 作者 | 规模 | 聚焦领域 |
|----|------|------|----------|
| [#8713](https://github.com/agentscope-ai/QwenPaw/pull/8713) | BeiMu-new | L | **fix(loop):** 在回复中追加每个工具调用，使 do

om-loop 门控能够触发 |
| [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) | LXD-8 | L | **feat(local-models):** llama.cpp GPU 控制和运行时自动更新 |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | yaozy2020 | XXXL | **feat(console):** 通过 `QWENPAW_BASE_PATH` 支持运行时基础路径部署 |
| [#8859](https://github.com/agentscope-ai/QwenPaw/pull/8859) | zhaozhuang521 | XXXL | **fix(console):** 明确确认和审批交互 |
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | liyangxu1 | XL | **feat(models):** 支持自定义决策模型端点（首次贡献者） |
| [#8942](https://github.com/agentscope-ai/QwenPaw/pull/8942) | aiyili | S | **test(plugins):** 使 install-lock 和 provision 测试在 Windows 上通过 |
| [#8920](https://github.com/agentscope-ai/QwenPaw/pull/8920) | zhaozhuang521 | M | **fix(agents):** 重试不带媒体文件的通用媒体错误请求 |
| [#8950](https://github.com/agentscope-ai/QwenPaw/pull/8950) | rayrayraykk | L | **fix(relay):** 恢复 Platform 绑定和控制台框架 |

`passionworkeer` 账户持续在 video_memory、web_grounding 和 creator 模块上进行高频小规模 PR 提交，体现了稳定的质量提升工作。大型 PR（#8532、#8719、#8859）代表重要的架构或 UX 工作，处于审核阶段。

## 4. 社区热门话题

### 互动最高的开放 issue

**#8882 — 长期记忆的引用计数归档**（3 条评论，开放中）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8882  
**核心需求：** 用户反馈代理"总是遗忘"重要内容（参见 #7571），而陈旧记忆条目不断堆积。建议为精炼的长期记忆条目引入 TTL、引用跟踪和衰减机制，从基于删除的管理转向基于状态变化的归档方式。这涉及核心产品承诺（"永不遗忘"），很可能是路线图候选项目。

**#8845 — 控制台中的 Markdown 表格溢出消息气泡**（4 条评论，开放中）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8845  
**核心需求：** 超

过消息容器宽度的 Markdown 表格渲染时超出边界且无水平滚动，影响技术对话的可读性。获得 1 个 👍 和 4 条评论，表明正在积极调查。

**#8949 — 升级到 2.3.0-post1 后，前端停止显示最新任务状态**（2 条评论，开放中，今天）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8949  
**核心需求：** 任务执行显示加载动画无限旋转，刷新后才发现任务已完成。这是由最新补丁引入的**回归问题**，生产环境用户会遇到卡住的 UX 反馈，很可能是 WebSocket/流式传输修复的回归。

**#8948 — 单个 `~` 在控制台中被解析为删除线分隔符**（1 条评论，开放中，今天）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8948  
**核心需求：** 控制台的 markdown 渲染器将任意两个 `~` 字符视为删除线分隔符，破坏了 `64~128G` 或 `600~1500 t/s` 等常见模式，将其变为 `601500` 或 `170220`，影响 AI 回复中常见的数字范围表示。

**#8938 — 问：Composer 会从 textarea 迁移到 Lexical 吗？**（1 条评论，开放中）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8938  
**核心需求：** 用户询问聊天编辑器是否会有富文本编辑功能（例如引用回复渲染、更好的格式化）。

这表明对更精致的编辑体验有需求。

### 互动最高的已关闭 issue

**#8830 — Windows 孤儿 llama-server.exe 进程**（3 条评论，已关闭）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8830  
**根因已处理：** 通过 PR #8932（限制段数）及相关工作修复。孤儿进程在 Windows 后端重启时耗尽内存。

**#8727 — 响应续写摘要在推理预算耗尽时失败**（3 条评论，已关闭）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8727  
**影响：** 当模型默认推理消耗 4000 token 输出预算时，续写摘要静默失败。

**#8744 — 控制台缺少查看压缩归档历史条目的入口**（1 条评论，已关闭）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8744  
**影响：** 上下文压缩后，早期对话条目被写入归档但无 UI 入口——用户感知到数据丢失。

**#8776 — `classify_model_error` 将 400+quota 误分类为 bad_request**（1 条评论，已关闭）
🔗 https://github.com/agentscope-ai/QwenPaw/issues/8776  
**影响：** 当提供商返回包含"quota exceeded"的 HTTP 400（而非标准 429）时，回退逻辑被阻塞，导致"Internal error"而非优雅的模型切换。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 优先级 | Issue | 标题 | 状态 | 修复 PR？ |
|--------|-------|------|------|-----------|
| 🔴 **严重** | [#8949](https://github.com/agentscope-ai/QwenPaw/issues/8949) | **回归：升级到 2.3.0-post1 后前端任务状态冻结** | 开放中 | 暂无 |
| 🔴 **严重** | [#8943](https://github.com/agentscope-ai/QwenPaw/issues/8943) | **ToolCallBudgetGate 在每次迭代时重复计数工具调用** — N 的预算在约 √(2N) 次调用后就停止而非 N 次 | 开放中 | 暂无 |
| 🟠 **高** | [#8948](https://github.com/agentscope-ai/QwenPaw/issues/8948) | **控制台将 `~` 渲染为删除线分隔符** — 破坏所有 AI 回复中的数字范围 | 开放中 | 暂无 |
| 🟠 **高** | [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) | **控制台 Markdown 表格溢出消息气泡且无滚动** | 开放中 | 暂无 |
| 🟠 **高** | [#8945](https://github.com/agentscope-ai/QwenPaw/issues/8945) | **飞书表格卡片将代码块行视为表格行** | 开放中 | PR [#8946](https://github.com/agentscope-ai/QwenPaw/pull/8946) 存在 |
| 🟠 **高** | [#8941](https://github.com/agentscope-ai/QwenPaw/issues/8941) | **12 个插件安装测试在 Windows 上失败**（符号链接权限、慢启动超过 5 秒预算） | 开放中 | PR [#8942](https://github.com/agentscope-ai/QwenPaw/pull/8942) 审核中 |
| 🟡 **中** | [#8888](https://github.com/agentscope-ai/QwenPaw/issues/8888) | **内容高度缩小时转录跳回几屏** | 已关闭 | 已修复 |
| 🟡 **中** | [#8870](https://github.com/agentscope-ai/QwenPaw/issues/8870) | **Discord chunk_text 在分块边界重复代码围栏** | 已关闭 | 已修复 |
| 🟡 **中** | [#8832](https://github.com/agentscope-ai/QwenPaw/issues/8832) | **auto CLI 健康检查使用不支持的 HEAD /api/version** | 已关闭 | 已修复 |
| 🟡 **中** | [#8912](https://github.com/agentscope-ai/QwenPaw/issues/8912) | **extract_json_key 在有效非对象 JSON 上崩溃** | 已关闭 | 已修复 |
| 🟢 **低** | [#8725](https://github.com/agentscope-ai/QwenPaw/issues/8725) | **`/model` 无法切换频道中的固定会话级模型** | 开放中 | 暂无 |

关键问题包括：#8949 中的回归直接影响最新版本的用户体验，需要快速处理；#8943 中的 ToolCallBudgetGate 缺陷破坏了自定义循环模式下的预算执行。

---

## 6. 功能需求与路线图信号

### 活跃的功能需求

| # | 标题 | 描述 | 近期纳入可能性 |
|---|------|------|----------------|
| [#8882](https://github.com/agentscope-ai/QwenPaw/issues/8882) | 长期记忆的引用计数归档 | 记忆条目的 TTL、引用跟踪和衰减 | **高** — 与文档化的"永不遗忘"承诺相符 |
| [#8947](https://github.com/agentscope-ai/QwenPaw/issues/8947) | WebRouter 作为 `web_search` 提供商 | 将 WebRouter（Apache 2.0）作为 Tavily、AnySearch、Firecrawl 之外的第四个搜索提供商 | **中** — 外部维护者推动，范围清晰 |
| [#8938](https://github.com/agentscope-ai/QwenPaw/issues/8938) | Composer 迁移到富文本编辑器（Lexical） | 聊天编辑器是否会有富文本编辑功能的路线图问题 | **考虑中** — 尚未承诺 |
| [#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787) | 向插件主题公开语义颜色角色 | 插件主题扩展点超越 #8422 中的 6 个基本角色 | **高** — PR 审核中 |
| [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) | llama.cpp GPU 控制和运行时自动更新 | GPU 层选择、受管 llama.cpp 的自动更新 | **高** — PR 活跃审核中，作为 3-PR 本地模型功能栈的一部分 |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | 运行时基础路径部署 | 用于反向代理前缀部署的 `QWENPAW_BASE_PATH` | **高** — 大型 PR 审核中，修复 #8714 |
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | 自定义决策模型端点 | 允许自定义提供商在设置 → 模型中注册决策模型 | **中** — 首次贡献者 PR，需求明确 |

### 已关闭/已实现
- **Linux 桌面打包**（#8444）— 今日合并，满足 Linux 桌面用户多月需求
- **会话存储 + 分页历史 + Turn 分支**（#8532）— 今日合并，主要的持久性里程碑
- **自定义决策模型端点选择**（#8928）— PR 审核中

---

## 7. 用户反馈摘要

### 今日报告的痛点

1. **2.3.0-post1 回归**（#8949）：升级到最新补丁的用户遇到任务进度 UI 冻结——任务看似挂起，实际在加载动画后悄悄完成。这破坏了升级路径的信任，需要立即分类处理。

2. **控制台中的数字表示被破坏**（#8948）：包含 `~` 范围的 AI 回复（如模型大小、吞吐量规格）被渲染乱码。依赖技术 AI 输出（代码、规格、基准）的用户看到数字被破坏——这影响了控制台的核心价值主张。

3. **记忆"遗忘"与陈旧堆积的矛盾**（#8882）：产品承诺"永不遗忘"，但用户在两个方向上都遇到问题——重要上下文被丢弃而无关条目无限积累。这表明在长期运行的会话中，声明的设计契约与实际行为之间存在差距。

4. **压缩对话历史无法访问**（#8744 — 已关闭）：触发上下文压缩的用户无法查看早期条目，感知到数据丢失。（报告已解决，但底层 UX 差距表明用户高度依赖完整对话历史。）

5. **Windows 特定测试失败**（#8941）：由于符号链接权限要求、包初始化慢超过 5 秒预算、venv 启动器 pid 处理等问题，插件安装测试在标准 Windows 检出上失败。这阻止了 Windows 贡献者运行完整测试套件。

### 正面信号
- **Linux 打包已发布**（#8444）— 解决了 Linux 桌面用户数月的需求，可能会受到好评
- **会话存储基础设施**（#8532）— 解决了历史数据丢失问题的基础性持久性工作
- **高频小型修复速度** — `passionworkeer` PR 链显示 video_memory、web_grounding 和 JSON 处理方面的持续质量改进

---

## 8. 积压关注

重要、长期存在或面临停滞风险的 issue 和 PR：

| 项目 | 类型 | 年龄 | 状态 | 风险 |
|------|------|-----|------|------|
| [#8725](https://github.com/agentscope-ai/QwenPaw/issues/8725) | Issue | ~14 天 | 开放中 | `/model` 无法切换频道中的固定模型 — 生产环境用户无法在没有控制台访问权限的情况下从模型故障中恢复 |
| [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) | Issue | ~14 天 | 已关闭 | 自 11 月 13 日开放至今 — 确认已解决 |
| [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) | Issue | ~55 天 | 已关闭 | 运行时阻止 multimodal 模型报告 `supports_multimodal=true` 的图像输入 — 已开放约 2 个月 |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Issue | 未知 | 开放中（被引用） | #8882 引用的根因 — 代理"总是遗忘"重要内容而陈旧条目堆积；相关 issue 有 8 条评论表明持续的用户痛点 |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | PR（XXXL）| ~14 天 | 审核中 | 运行时基础路径部署 — 大型，影响核心路由；需要维护者审核以避免过时 |
| [#8713](https://github.com/agentscope-ai/QwenPaw/pull/8713) | PR（L）| ~14 天 | 审核中 | 噩梦循环门控修复 — 自引入以来从未触发；循环检测按设计工作的关键 |
| [#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787) | PR（XL）| ~10 天 | 审核中 | 插件主题颜色角色 — 审核被阻塞；延迟插件生态系统主题化 |

**建议维护者采取的行动：**
1. **紧急分类 #8949** — 最新版本的回归威胁用户信任
2. **审核 #8713** — 噩梦循环门控自引入以来一直未工作
3. **回应 #8882** — 这涉及核心产品承诺差距，具有明显的用户影响
4. **合并或关闭 #8719** — 大型 PR 如无反馈则面临过时风险

---

*日报根据 QwenPaw github.com/agentscope-ai/QwenPaw 2026-11-27 的活动生成。所有 GitHub 链接均指向 agentscope-ai/QwenPaw 仓库。*</think>



</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content to natural Simplified Chinese
2. Keep all formatting (headings, tables, lists, etc.) exactly as-is
3. Keep all URLs, code references, issue/PR numbers, usernames, project names, etc. in their original form
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate section by section carefully:

Title: ZeroClaw Project Digest — 2026-11-27
→ ZeroClaw 项目日报 — 2026-11-27

Let me go through each section systematically.
</think>


# ZeroClaw 项目日报 — 2026-11-27

## 1. 今日概览

ZeroClaw 保持高强度的开发节奏，过去 24 小时内共有 50 个 PR 有更新，但无新版本发布。当前项目正在推进多项关键安全改进——多个 PR 引入了针对 SSH、浏览器凭证和 TOTP 认证的细粒度权限隔离机制。[#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712) 已开启 v1.0.0 路线图追踪，表明团队正在向 API 稳定性目标迈进。今日共关闭 5 个 issue，其中包括两个高危缺陷（Markdown 内存数据丢失和图片重复发送），而 8 个新增或进行中的 issue 则反映了运行时、Web UI 和凭证管理等子系统的持续优化。

## 2. 版本发布

**无。** 过去 24 小时内无新版本发布。

---

## 3. 项目进展

### 今日关闭的 Issues（5 条）

| # | 标题 | 处理结果 | 影响范围 |
|---|-------|------------|--------|
| [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | Signal / Telegram / Discord 多频道中图片幽灵般重复发送 | 已修复 | 高 — 消除了多频道会话中的重复图片问题 |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | Markdown 内存后端在并发写入时静默丢失数据 | 已修复 | 严重 — 解决了 S0 级数据丢失竞态条件 |
| [#9562](https://github.com/zeroclaw-labs/zeroclaw/issues/9562) | WebChat 流式输出时自动滚动覆盖手动滚动 | 已修复 | 中 — 改善了 Agent 回复过程中的用户体验 |
| [#11892](https://github.com/zeroclaw-labs/zeroclaw/issues/11892) | 支持在内存召回查询中嵌入可配置前缀 | 已实现 | 功能 — 支持指令微调型嵌入模型 |
| [#11930](https://github.com/zeroclaw-labs/zeroclaw/issues/11930) | 支持通过网关 Webhook 进行更长的同步 Agent 调用 | 已实现 | 功能 — 扩展了 Webhook 超时处理能力 |

### 正在开发中的 PR（重点精选）

| # | 贡献者 | 涉及范围 | 规模 |
|---|--------|-------|------|
| [#12659](https://github.com/zeroclaw-labs/zeroclaw/pull/12659) | CastelloBrancoTecnologia | SSH 保险库授权，支持密码/TOTP 作用域隔离 | XL |
| [#12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) | vadelma-agent | Skills 向可执行文件传递字面参数，不经过 Shell | XL |
| [#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596) | CastelloBrancoTecnologia | 浏览器用户名/密码与 TOTP 独立授权 | XL |
| [#12695](https://github.com/zeroclaw-labs/zeroclaw/pull/12695) | CastelloBrancoTecnologia | WebDAV 远程文件操作，支持作用域控制 | XL |
| [#12438](https://github.com/zeroclaw-labs/zeroclaw/pull/12438) | CastelloBrancoTecnologia | 原生 Rust SSH 任务代理 | XL |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | CastelloBrancoTecnologia | 原生 Rust XMPP 协议，可选 OMEMO 端到端加密 | XL |
| [#12641](https://github.com/zeroclaw-labs/zeroclaw/pull/12641) | vadelma-agent | CLI：展示 Codex 订阅用量 | XL |
| [#12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) | vadelma-agent | Gateway：网页聊天中展示 Codex 订阅用量 | XL |

*全部 50 个有更新的 PR 均保持 Open 状态——今日合并数为零。*

---

## 4. 社区热点话题

### 互动最活跃的讨论

**1. 通往 v1.0.0 的路线图** — [#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712)（1 赞，2 评论）
- 替代 FND-001 §6 版本规划的新一代追踪器
- 表明社区对 API 稳定性和长期支持承诺有强烈诉求

**2. 紧凑型 local_small 运行时配置** — [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)（2 赞，11 评论）
- 本地模型模式下降低提示词冗余、避免指令泄漏的功能请求
- 高风险优先级，经历了 7 个月以上的讨论——本地优先部署场景下的痛点
- 关键词：`agent, config, runtime, tool, operator-ux`

**3. 运行时成本限额不一致** — [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635)（5 评论）
- P1 缺陷：配置文件中 max_cost_per_day_cents 报告为 4294967295，但 Agent 在 $10/天 即拒绝调用
- Audacity88 等用户高度参与；反映了生产环境账单可见性的真实问题

### 潜在需求分析

- **安全加固**：多个 PR（#12659、#12596、#12438、#12744）聚焦于细粒度权限隔离——社区高度重视最小特权凭证管理
- **外部集成**：WebDAV（#12695）、XMPP（#11847）、多频道路由（#12271）表明企业/团队使用场景的需求
- **成本透明度**：CLI 和 Web UI 展示 Codex 用量（#12641、#12691）反映了运维人员的成本控制需求
- **本地优先可靠性**：Markdown 内存（#10797，已修复）和上下文计量器渲染（#12743）等持续出现的问题，说明桌面端部署测试存在缺口

---

## 5. 缺陷与稳定性

### 公开的缺陷（按严重程度排序）

| 严重程度 | # | 标题 | 风险 | 状态 |
|----------|---|-------|------|--------|
| **P1** | [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | 运行时配置中成本限额与全局每日预算不一致 | 高 | 进行中 |
| **S3** | [#12746](https://github.com/zeroclaw-labs/zeroclaw/issues/12746) | 重连后聊天输入框无法重新获得焦点 | 低 | 新建 |
| **S3** | [#12743](https://github.com/zeroclaw-labs/zeroclaw/issues/12743) | Windows Chrome 上上下文计量器单元格高度不一致 | 低 | 新建 |
| **测试** | [#12719](https://github.com/zeroclaw-labs/zeroclaw/issues/12719) | macOS 隧道转发探测超时测试不稳定 | 低 | 新建 |

### 已修复的缺陷（值得注意）

- **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)** — Markdown 内存后端数据丢失（S0）— **已关闭**
- **[#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554)** — Signal / Telegram / Discord 重复发送图片— **已关闭**

### 依赖项风险监控

| # | 风险 | 描述 |
|---|------|-------|
| [#12322](https://github.com/zeroclaw-labs/zeroclaw/pull/12322) | 高 | 升级内置 SQLite + 移除 RUSTSEC-2026-0459 豁免；Matrix SDK 0.20.0 迁移 |

**#10635 的修复 PR**：未检测到关联 PR——需维护者认领。

---

## 6. 功能请求与路线图信号

### 新增的功能 Issue（公开）

| # | 标题 | 标签 | 优先级信号 |
|---|-------|------|-----------------|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 紧凑型 local_small 运行时配置 | `agent, config, runtime, tool, operator-ux` | 社区强烈需求；11 条评论 |
| [#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712) | 通往 v1.0.0 的路线图 | `type:tracker` | 官方稳定性承诺信号 |

### 预测的近期新增功能

基于 PR 流水线分析：

1. **细粒度凭证隔离** — SSH 保险库授权（#12659）、浏览器 TOTP 授权（#12596）、原生任务代理（#12438）
2. **外部保险库集成** — OpenBao（#12481）、云端保险库提供商（#12482）
3. **协议扩展** — XMPP/OMEMO（#11847）、WebDAV 远程文件（#12695）、外部对等路由（#12271）
4. **运维成本可视化** — CLI（#12641）和网页聊天（#12691）展示 Codex 用量
5. **Skills 执行加固** — 不经过 Shell 直接传递字面参数（#12744）

### 积压项指标

- local_small 运行时配置请求（#5287）历时 7 个月仍未解决——可能列入 v1.0.0 目标
- WebDAV 相关 issue 无进展，尽管 PR（#12695）正在活跃开发——待 PR 合并后可能推进

---

## 7. 用户反馈摘要

### 已识别的痛点

| 问题 | 用户反馈 | 涉及领域 |
|-------|-------------|---------|
| **成本困惑**（#10635） | "max_cost_per_day_cents = 4294967295，而实际在 $10 时就拒绝调用" | 运行时/配置 |
| **本地模型冗余**（#5287） | "提示词臃肿、回退解析过于宽松、指令泄漏" | Agent/运行时 |
| **手动滚动被覆盖**（#9562） | "Agent 回复时无法滚动查看历史记录" | Web UI |
| **字体渲染问题**（#12743） | "░ 单元格比 █ 单元格在 Windows Chrome 上更高" | Web UI |

### 正面信号

- **Issue 关闭效率**：今日解决 5 个问题，表明维护响应积极
- **路线图透明度**：v1.0.0 追踪器（#12712）体现了项目对用户沟通的重视
- **功能采纳**：指令微调嵌入支持（#11892）已关闭——反映了社区需求的响应

---

## 8. 积压关注清单

### 需要维护者关注的 Issues

| # | 历时 | 标题 | 风险 | 备注 |
|---|-----|-------|------|-------|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | 7+ 个月 | 紧凑型 local_small 运行时配置 | 高 | 状态为 `status:in-progress` 但无关联 PR；历时最长的活跃功能请求 |
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | 约 2 个月 | 成本限额不一致 | 高 | P1 缺陷，无关联修复 PR |
| [#12719](https://github.com/zeroclaw-labs/zeroclaw/issues/12719) | 1 天 | macOS 测试超时不稳定 | 低 | 新建；待分类 |
| [#12746](https://github.com/zeroclaw-labs/zeroclaw/issues/12746) | 1 天 | 重连后焦点丢失 | 低 | S3；待认领 |
| [#12743](https://github.com/zeroclaw-labs/zeroclaw/issues/12743) | 1 天 | Windows Chrome 渲染问题 | 低 | S3；修复可能简单 |

### 待清理的废弃任务

| # | 标题 | 操作 |
|---|-------|--------|
| [#12740](https://github.com/zeroclaw-labs/zeroclaw/issues/12740) | 移除未调用的 `init_skills_dir` 辅助函数 | 等待 PR |
| [#12722](https://github.com/zeroclaw-labs/zeroclaw/issues/12722) | 移除未调用的 `resolve_thinking_from_message` 辅助函数 | 等待 PR |

### 依赖风险

| # | 风险 | 描述 |
|---|------|-------|
| [#12322](https://github.com/zeroclaw-labs/zeroclaw/pull/12322) | 高 | SQLite 升级受 Matrix SDK 迁移阻塞；需移除 RUSTSEC 豁免 |

---

## 汇总指标

| 指标 | 数值 |
|--------|-------|
| 活跃 Issues（24h） | 13 |
| 活跃 PRs（24h） | 50 |
| 今日关闭 | 5 |
| 今日合并 | 0 |
| 新版本发布 | 0 |
| 公开 P1+ 缺陷 | 1 |
| 功能类 PR | 8（均为 XL 规模） |
| 社区活跃度 | 高（核心 issue 累计 15+ 条评论） |

*数据来源：ZeroClaw（zeroclaw-labs/zeroclaw）2026-11-27 活动记录。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*