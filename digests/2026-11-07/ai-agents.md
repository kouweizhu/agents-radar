# OpenClaw 生态日报 2026-11-07

> Issues: 363 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-07 02:18 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate the content while preserving the Markdown structure exactly, including headings, tables, lists, bold/italic, horizontal rules, emoji, etc.

Let me translate this carefully, maintaining the technical register and natural Chinese expression.

Key things to remember:
- Output ONLY the translation, no preamble
- No markdown fences around the whole output
- Preserve all formatting exactly
- Keep URLs, numbers, dates, issue/PR numbers verbatim
- Keep technical identifiers in original form
- Use natural technical Chinese

Let me translate section by section:

Title: OpenClaw 项目日报 — 2026-11-07

Section 1: Overview
- "Today's Overview" → "今日概览"
- "OpenClaw maintains high development velocity" → "OpenClaw 保持高开发强度"
- "363 issues and 500 PRs updated in the last 24 hours" → "过去24小时内有363个 Issue 和 500 个 PR 发生更新"
- "indicating active daily engagement across the community" → "表明社区日常活跃度高"
- "No new releases today" → "今日无新版本发布"
- "the most pressing issue remains" → "最紧迫的问题仍然是"
- "P0 regression" → "P0 回归问题"
- "Gateway blocks for minutes" → "Gateway 阻塞数分钟"
- "Several P1 bugs affect" → "多个 P1 缺陷影响"
- "122 PRs were merged or closed" → "122 个 PR 被合并或关闭"
- "showing the team is actively triaging the backlog" → "表明团队正在积极处理积压"
- "the project appears healthy but under pressure" → "项目整体健康但面临压力"


- "Latest Releases" → "最新发布"
- "no new releases today" → "今日无新版本发布"
- "The latest stable release remains" → "最新稳定版仍为"
- "prerelease" → "预发布版"
- "Notable upcoming changes in prerelease" → "预发布版中的值得关注的更新"
- "Historical-state recovery" → "历史状态恢复"
- "collector child sessions" → "采集器子会话"
- "is now on main and passes" → "已进入 main 分支并通过"
- "tests at" → "测试位置"
- "Expected to ship in stable once validation completes" → "验证完成后将发布稳定版"

Merged/Closed PRs from the last 24 hours total 122 items. Key PRs include a fix for missing Access artwork in plugins, UI improvements for displaying only timestamps on same-day entries, and CI enhancements for worker reuse when test caches expand. Other notable changes involve canceling interrupted attachment downloads and refactoring dialog close behavior to use IconButton instead of move. Several active PRs are currently advancing, including a feature for gateway sessions.

The gateway feature allows sessions_send wake starts to be admitted, with related work on expiring cached onepassword secrets based on elapsed time, preserving UI state like collapsed groups during reloads and preventing Subagents from collapsing during chat reloads. A large feature for pairing browsers with short codes approved on the host is marked as P2 priority, alongside work on surfacing retriable work-start rejections as 409 conflicts. The overall focus spans UI/UX refinements, security hardening, and gateway reliability improvements. Community engagement shows the most active issue involves Gateway blocking for extended periods while capturing large external plugins, marking a regression since the 2026.9.6 release with 80 comments and P0 priority.

Additional issues include WAL auto-checkpoint never completing (39 comments, P2), native host exec integrity failures on the latest stable release (30 comments, P1), and dreaming deep phase failing to promote with short-term recall retention problems (25 comments, P2). Critical bugs range from P0 crashes and blocking issues like the gateway blocking during plugin capture, to P1 concerns including the integrity-admission error in the recent release and MCP groups remaining after agent turn completion. Web_fetch cold fallback synchronously captures unrelated plugins, causing cascading failures. Control UI enters retry loops when the ambient main session isn't visible. Gateway refuses to start after Kubernetes pod restarts due to fsGroup remounting issues. Pre-9.7 account-mode scheduled announce jobs fail entirely. Notable P2 issues include dreaming deep phase never promoting due to recall eviction bugs, Gateway stop failing on macOS, and short-term promotion returning 0/512 candidates. The MCP sessionIdleTtlMs setting isn't applied, allowing the spawn broker to fill to its 256 capacity. Multi-agent runtime publication fails on 2026.9.6, while large zstd transcript archives exceed Node's string limit—a regression from #170847. Feature requests show strong community interest in configurable Dream Diary language and prompt settings.

Per-model usage logging for cost tracking has been requested since February 2026 and is likely a near-term candidate. Control UI's archive shortcut (Ctrl+Shift+A) should be customizable, and agents should be hideable from the picker while remaining spawnable. Users want to browse and fork prior channel-chat segments after creating a new session. Microsoft Teams integration needs dynamic SharePoint site resolution. A setting to disable the hosted plugin catalog feed addresses enterprise and offline deployment scenarios. Pain points center on performance regressions, particularly gateway blocking and SQLite out-of-memory errors affecting users on versions 2026.9.6 and later. macOS incompatibility, memory system failures with promotion and prompt cache reuse issues, and multi-agent problems affecting complex deployments represent significant friction points. Cloud worker failures block cloud deployment users, while SQLite bottlenecks from WAL checkpoint blocking and broken session eviction threaten long-lived sessions.

Recent progress shows 159 issues resolved today, including investigations into short-term promotion, MCP child overflow, CLI double-spawning, reconnection rejections, and Codex image limits. Multiple contributors are actively engaging with UI fixes, CI improvements, and plugin corrections. Community localization efforts like Russian documentation expansion indicate growing international involvement. Long-unanswered issues needing maintainer attention include assistant turn rendering duplication with CLI backends (P2, stale), Telegram callback payloads being silently dropped (P1), and the need to centralize chat-session naming.

Several other items require clarification: 16 call sites emit identical errors without reason codes (P2), session maintenance in enforce mode doesn't properly bound the store (P2), cron jobs lack stop mechanisms (P3), and the tasks ledger doesn't record tokens or costs for delegated ACP runs (P2). PRs awaiting review span from agent description exposure features to gateway image capability scoping and Codex thread reasoning effort retention, with some stalled for months waiting on maintainer feedback or author proof of concept.
</think>


# OpenClaw 项目日报 — 2026-11-07

---

## 1. 今日概览

OpenClaw 保持高开发强度，过去 24 小时内有 **363 个 Issue 和 500 个 PR 发生更新**，表明社区日常活跃度非常高。今日无新版本发布，但项目持续推进关键回归问题的修复和新功能开发。当前最紧迫的问题是 **P0 回归问题（#160959）**——Gateway 在捕获大型外部插件时会阻塞数分钟，这是 2026.9.6 版本引入的回归。多个 P1 缺陷影响了会话状态管理和崩溃循环，同时有 122 个 PR 被合并或关闭，表明团队正在积极处理积压工作。总体来看，项目运行健康，但同时面临多个稳定性问题的压力。

---

## 2. 版本发布

**今日无新版本发布。** 最新稳定版仍为 **v2026.10.10**，预发布版 **v2026.11.5-beta.1** 正在测试中（包含 #187197 SQLite 头部探测超时修复）。

**预发布版中值得关注的更新：**
- 采集器子会话的历史状态恢复（#164445，`e02ae3ecb66`）已进入 `main` 分支，在 `c4d8a5ae171` 处通过 14/14 项测试
- 验证完成后预计将合并至稳定版发布

---

## 3. 项目进展

### 今日合并/关闭的 PR（122 个）

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#194411](https://github.com/openclaw/openclaw/pull/194411) | fix(plugins): restore missing Access artwork | XS | ✅ 已关闭 |
| [#194190](https://github.com/openclaw/openclaw/pull/194190) | fix(ui): show only time for same-day timestamps | S | ✅ 已关闭 |
| [#194407](https://github.com/openclaw/openclaw/pull/194407) | fix(ci): preserve worker reuse when test caches grow | XS | ✅ 已关闭 |
| [#194405](https://github.com/openclaw/openclaw/pull/194405) | test(ui): wait for configured provider icons | XS | ✅ 已关闭 |
| [#194399](https://github.com/openclaw/openclaw/pull/194399) | fix(media): cancel interrupted attachment downloads | S | ✅ 已关闭 |
| [#194152](https://github.com/openclaw/openclaw/pull/194152) | ui: move dialog closes onto IconButton | L | ✅ 已关闭 |

### 推进中的活跃 PR

| PR | 标题 | 规模 | 优先级 | 状态 |
|----|------|------|--------|------|
| [#194376](https://github.com/openclaw/openclaw/pull/194376) | feat(gateway): admit sessions_send wake starts | L | — | 开放 |
| [#194412](https://github.com/openclaw/openclaw/pull/194412) | fix(onepassword): expire cached secrets on elapsed time | S | — | 开放 |
| [#193519](https://github.com/openclaw/openclaw/pull/193519) | fix(ui): preserve collapsed groups when reloading | XS | P2 | 开放 |
| [#194371](https://github.com/openclaw/openclaw/pull/194371) | fix(control-ui): prevent Subagents collapse during chat reload | L | P3 | 开放 |
| [#191513](https://github.com/openclaw/openclaw/pull/191513) | feat(pairing): pair a browser with a short code approved on host | XL | P2 | 开放 |
| [#192617](https://github.com/openclaw/openclaw/pull/192617) | fix(gateway): surface retriable work-start rejections as 409 conflicts | S | P2 | 开放 |

**主要主题：**
- UI/UX 优化持续进行（时间戳、对话框、会话侧边栏）
- 安全性和可靠性修复（onepassword 密钥过期、附件下载取消）
- sessions_send 唤醒流量相关的新 Gateway 准入功能

---

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

1. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归）  
   **80 条评论 | P0 | Diamond Lobster**  
   *潜在需求：2026.9.6 引入的插件生成捕获功能在处理大型外部/工作区插件时导致 Gateway 事件循环阻塞数分钟。用户需要 Gateway 不间断运行。*

2. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway 状态库 WAL 自动检查点永不完成  
   **39 条评论 | P2 | Silver Shellfish**  
   *潜在需求：SQLite WAL 检查点始终被进程内读取器阻塞，暗示可能存在死锁或资源竞争。*

3. **[#177656](https://github.com/openclaw/openclaw/issues/177656)** — 本地 host exec 返回共享状态完整性准入错误  
   **30 条评论 | P1 | Silver Shellfish**  
   *潜在需求：稳定版 2026.10.5 上出现 28+ 次失败，与子效果和完整性准入相关——影响生产环境稳定性。*

4. **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — Dreaming 深度阶段永不晋升（短期召回保留问题）  
   **25 条评论 | P2 | Diamond Lobster**  
   *潜在需求：短期召回存储达到 512 条目上限时，内存晋升系统不工作；用户失去自动内存优化功能。*

5. **[#191944](https://github.com/openclaw/openclaw/issues/191944)** — macOS 上 Gateway 停止失败  
   **23 条评论 | P2 | Silver Shellfish**  
   *潜在需求：macOS 用户无法正常停止 Gateway，造成操作上的阻碍。*

---

## 5. Bug 与稳定性

### P0 — 严重（崩溃循环 / 阻塞）

| Issue | 摘要 | 状态 | 修复 PR？ |
|-------|------|------|----------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 插件捕获期间 Gateway 阻塞数分钟 | 开放 | 无 |

### P1 — 高（崩溃循环 / 消息丢失 / 安全）

| Issue | 摘要 | 回归 | 修复 PR？ |
|-------|------|------|----------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | 2026.10.5 上本地 host exec 出现完整性准入错误 | 是 | 无 |
| [#155563](https://github.com/openclaw/openclaw/issues/155563) | MCP 分组在 Agent 轮次成功后仍保留（2026.9.5） | 是 | 无 |
| [#182647](https://github.com/openclaw/openclaw/issues/182647) | 云端 Worker 轮次失败："Session capability metadata requires worker preparation" | — | 无 |
| [#166641](https://github.com/openclaw/openclaw/issues/166641) | web_fetch 冷备降级同步捕获无关插件 | — | 无 |
| [#191847](https://github.com/openclaw/openclaw/issues/191847) | 大型会话杀死 SQLite Worker（ERR_WORKER_OUT_OF_MEMORY） | 是（2026.9.7→10.10） | 无 |
| [#157182](https://github.com/openclaw/openclaw/issues/157182) | Control UI 在环境主会话不可见时重试循环 | — | 无 |
| [#192959](https://github.com/openclaw/openclaw/issues/192959) | Kubernetes Pod 重启后 Gateway 拒绝启动（fsGroup 重新挂载） | — | 无 |
| [#162087](https://github.com/openclaw/openclaw/issues/162087) | 9.7 前账户模式作业的定时播报失败 | 是（9.7） | 无 |

### 值得关注的 P2 — 中（用户体验摩擦 / 会话状态）

| Issue | 摘要 | 修复 PR？ |
|-------|------|----------|
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | Dreaming 深度阶段永不晋升（召回驱逐 Bug） | 无 |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | macOS 上 Gateway 停止失败 | 无 |
| [#164923](https://github.com/openclaw/openclaw/issues/164923) | 短期晋升返回 0/512 个候选项 | 开放 PR #164445 |
| [#166017](https://github.com/openclaw/openclaw/issues/166017) | mcp.sessionIdleTtlMs 未生效 → 生成 Broker 填满至 256 上限 | 无 |
| [#158127](https://github.com/openclaw/openclaw/issues/158127) | 2026.9.6 上多 Agent 运行时发布失败 | 无 |
| [#185656](https://github.com/openclaw/openclaw/issues/185656) | 大型 zstd 转录存档超出 Node 字符串限制 | 是（#170847 的回归） |

---

## 6. 功能需求与路线图信号

### 高互动功能需求

| Issue | 摘要 | 评论数 | 标签 |
|-------|------|--------|------|
| [#79223](https://github.com/openclaw/openclaw/issues/79223) | 可配置的 Dream Diary 语言/提示词 | 11 | 功能 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 每个模型的用量日志以支持成本追踪 | 10 | 增强 |
| [#163739](https://github.com/openclaw/openclaw/issues/163739) | 使 Control UI 的 Ctrl+Shift+A（归档）可配置 | 12 | 功能 |
| [#166678](https://github.com/openclaw/openclaw/issues/166678) | 从选择器中隐藏 Agent 但仍可生成 | 8 | 功能 |
| [#158800](https://github.com/openclaw/openclaw/issues/158800) | /new 后可浏览/分支先前的 channel-chat 片段 | 9 | 功能 |
| [#136271](https://github.com/openclaw/openclaw/issues/136271) | msteams: 动态解析团队 SharePoint 站点 | 9 | 功能 |
| [#164620](https://github.com/openclaw/openclaw/issues/164620) | 提供禁用托管插件目录源设置的选项 | 7 | 功能 |

### 路线图信号分析

- **内存与召回**：对内存系统改进的需求强烈（Dream Diary 语言、晋升修复、召回保留）
- **成本追踪**：每个模型的用量日志（#13219）自 2026 年 2 月就被提出——可能是近期实现的目标
- **UI 定制化**：键盘快捷键可配置性（#163739）和 Agent 可见性控制（#166678）满足多用户/组织需求
- **插件灵活性**：禁用托管目录源（#164620）表明存在企业/离线部署需求

---

## 7. 用户反馈摘要

### 痛点识别

| 类别 | 证据 | 影响 |
|------|------|------|
| **性能回归** | #160959（Gateway 阻塞）、#191847（SQLite OOM） | 2026.9.6+ 用户遇到稳定性下降 |
| **macOS 兼容性** | #191944（Gateway 停止失败） | macOS 用户遇到操作障碍 |
| **内存系统故障** | #150635、#164923（晋升失败）、#182891（提示词缓存从不复用） | 用户失去自动内存优化功能 |
| **多 Agent 问题** | #158127（发布失败）、#166017（MCP 子进程溢出） | 复杂部署受影响 |
| **云端 Worker 失败** | #182647（capability metadata 错误） | 云端部署用户受阻 |
| **SQLite 瓶颈** | #164294（WAL 检查点阻塞）、#166017（会话驱逐故障） | 长期会话面临风险 |

### 正面信号

- **今日关闭的问题**：159 个问题被关闭，包括 #164923（短期晋升调查）、#166017、#164690（claude-cli 双重生成）、#165433（重连拒绝）和 #168794（Codex 图片限制）
- **活跃的 PR 参与**：多位贡献者提交了 UI 修复、CI 改进和插件修复
- **国际化进展**：俄语文档扩展（#181998）表明社区本地化工作的努力

---

## 8. 积压关注

### 需要维护者关注的长期待回复 Issue

| Issue | 存在时间 | 摘要 | 优先级 | 差距 |
|-------|----------|------|--------|------|
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | 约 3 个月 | CLI 后端时 Assistant 轮次渲染两次 | P2 | 已陈旧，无新修复 PR |
| [#126950](https://github.com/openclaw/openclaw/issues/126950) | 约 3 个月 | Telegram 回调载荷静默丢弃 | P1 | 无修复 PR |
| [#103067](https://github.com/openclaw/openclaw/issues/103067) | 约 4 个月 | 集中化 chat-session 命名；定义子 Agent 生命周期 | P2 | 需要产品决策 |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | 约 3 个月 | 16 处调用点发出相同错误但无原因码 | P2 | 无修复 PR |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | 约 3.5 个月 | session.maintenance enforce 模式不约束存储 | P2 | 无修复 PR |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | 约 2.5 个月 | Cron 作业无法结束（无 --until / --max-runs） | P3 | 已陈旧 |
| [#130257](https://github.com/openclaw/openclaw/issues/130257) | 约 2.5 个月 | 任务账本不记录委托 ACP 运行的 token/成本 | P2 | 已陈旧 |

### 待审查的 PR

| PR | 标题 | 状态 | 存在时间 |
|----|------|------|----------|
| [#75225](https://github.com/openclaw/openclaw/pull/75225) | feat(agents): 在 agents_list 中暴露配置的描述信息 | ⏳ waiting on maintainer | 约 6 个月 |
| [#161362](https://github.com/openclaw/openclaw/pull/161362) | fix(agents): 停止对已记录的核心工具组发出警告 | ⏳ waiting on author | 约 5 周 |
| [#125969](https://github.com/openclaw/openclaw/pull/125969) | fix(gateway): 限定图片 capability 发现范围 | 👀 ready for maintainer look | 约 3 个月 |
| [#125707](https://github.com/openclaw/openclaw/pull/125707) | fix(codex): 保留原生线程推理努力 | （无状态） | 约 3 个月 |
| [#130231](https://github.com/openclaw/openclaw/pull/130231) | ci(i18n): 添加非发布性质的原生语言刷新 | 📣 needs proof | 约 2.5 个月 |

---

**日报结束** — 下次更新：2026-11-08

---

## 横向生态对比

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate it accurately while preserving all formatting, technical terms, URLs, issue numbers, etc. The output should be natural technical Chinese suitable for a Chinese developer newsletter audience.

Let me work through this carefully section by section.
</think>




# Personal AI Assistant 与 Agent 开源生态：跨项目报告

## 2026-11-07 | 技术决策者简报

---

## 1. 生态概览

截至 2026 年 11 月，Personal AI Assistant 与 Agent 开源生态正处于活跃、高速增长的阶段。除 IronClaw（已无活跃状态）外，所有被追踪的项目在过去 24 小时内均有显著的日常提交和 PR 活动，四个活跃项目合计更新了 453 个 issue 和 635 个 PR。整个生态在核心工程挑战上高度一致——会话状态管理、多平台部署、记忆与检索可靠性、安全加固——但各项目在目标用户群体、技术架构选型和成熟度上各有侧重。OpenClaw 在绝对活动量上领先，处理的回归问题覆盖面最广；Hermes Agent 和 ZeroClaw 呈现出以安全为导向的开发模式；QwenPaw 则在对话体验迭代和中国市场兼容性上表现出快速推进的态势。今日所有项目均未发布新稳定版本，暗示整个生态正在进行一轮协调性的稳定化周期。

---

## 2. 活跃度对比

| 项目 | Issue（24h） | PR（24h） | 新版本发布 | 回归问题数 | 安全修复 | 健康信号 |
|---------|:-----------:|:---------:|:------------:|:---------------:|:--------------:|:-------------|
| **OpenClaw** | 363 | 500 | 0 | 5（2 P0/P1，3 P2） | 今日合并 0 个 | ⚠️ 高压状态 — 存在 P0 活跃回归，多处回归问题 |
| **Hermes Agent** | 50 | 50 | 0 | 3（1 P0，2 P2） | 今日合并 0 个 | ⚠️ 专注推进 — npm→pnpm 迁移后遗症，Windows P0 |
| **IronClaw** | 0 | 0 | 0 | 未知 | 0 | 🔴 已不活跃 — 无社区信号 |
| **QwenPaw** | 23 | 35 | 0 | 4（1 High，3 Medium） | 今日合并 0 个 | ✅ 稳健 — 对话体验快速迭代，关闭率高 |
| **ZeroClaw** | 17 | 50 | 0 | 4（2 S1，2 S2） | 今日合并 2 个 | ⚠️ 阻塞中 — 依赖安全漏洞阻塞所有合入 |

**观察：**

- OpenClaw 在绝对体量上大幅领先——约为第二活跃项目的 7 倍——但同时也承载了比例更高的回归问题负担。
- ZeroClaw 的 PR 与 Issue 比值（50:17）表明其开发模式为贡献者驱动型，PR 到来速度超过 Issue 分拣的处理能力。
- QwenPaw 今日的关闭率最为健康（18 个 PR 关闭/合并，12 个新开），说明维护者在积极管理吞吐量。
- Hermes Agent 的 npm→pnpm 迁移是整个生态中规模最大的协调性变更事件，后续的连锁工作量仍清晰可见于待办中。

---

## 3. OpenClaw 的定位

### 与竞品的优势对比

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **社区规模** | 活动量最大（363 issues，500 PRs/24h） | 中等 | 中等 | 规模较小但活跃 |
| **发版节奏** | 稳定约每月一次，beta 通道持续更新 | 约每月一次 | 约每两周一个 beta | v1.0 之前 |
| **插件生态** | MCP 分组、托管插件目录、外部插件捕获 | 核心插件 + labs 插件（源宝提取） | 丰富的插件市场 | 多源插件仓库（PR 中） |
| **企业特性** | Access artwork、fsGroup 支持、云端 Worker | 配对功能、账号模式任务 | 模型中心、reranker 设置 | 按 Agent 的所有权隔离、OIDC 认证 |
| **文档** | 俄语本地化进行中 | — | 死链已修复 | — |

### 技术方案差异

OpenClaw 的架构以 **Gateway** 事件循环作为会话权威中心，底层采用 WAL 模式的 SQLite 状态管理、Worker 复用池，以及梦境/记忆晋升（dreaming/memory promotion）系统。这与其他竞品的设计有根本性区别：

- **Hermes Agent** 采用 CLI 优先方案，拥有独立的 `hermes_cli` 工作区及 pnpm monorepo 结构
- **QwenPaw** 采用以 Agent 为中心的设计，具备自动召回、ReMe 重排序和多模型提供商配置能力
- **ZeroClaw** 采用 RPC 驱动的多节点架构，集成 OIDC 和 Matrix 频道支持

OpenClaw 的**梦境深度阶段**内存晋升（#150635，仍待解决）和 **MCP 子会话保留**（#155563，P1 级别回归）没有直接的对标竞品，表明其在自主内存管理上的投入深度已超出其他项目当前阶段。

### 社区规模对比

按原始活动量计，OpenClaw 比 Hermes Agent 和 QwenPaw 大约 7 倍，比 ZeroClaw 大约 21 倍。然而，活动量与回归面成正比：OpenClaw 当前有 5 个并发回归问题（含 1 个 P0），而 QwenPaw 只有 4 个中等严重度的缺陷，这说明 OpenClaw 更大的覆盖面也带来了成比例更高的维护负担。

---

## 4. 全生态共享的技术聚焦领域

以下需求和挑战正在多个项目中同步出现，表明整个生态系统正面临共同的工程压力：

### 记忆与召回系统

| 项目 | Issue | 描述 |
|---------|-------|-------------|
| **OpenClaw** | #150635, #164923 | 梦境深度阶段从未执行晋升；短期召回在 512 条目上限处失效 |
| **QwenPaw** | #8580, #8276 | 记忆标签索引返回 503；ReMe reranker 接受空的 api_key |

两个项目同时在记忆/检索可靠性上进行迭代。OpenClaw 的方案是自主式（梦境阶段、晋升机制），而 QwenPaw 采用监督式重排序（ReMe）。两者在这一领域的交集表明，整个生态正在触及同一道天花板——大规模自动化内存管理的难度超出了预期。

**对 AI Agent 开发者的启示**：记忆与召回系统是全生态共享开发最活跃的领域。可以预期未来会出现标准化的模式。OpenClaw 的收集器子会话历史状态恢复（#164445）有望成为参考实现。

### Windows 与跨平台兼容性

| 项目 | Issue | 具体问题 |
|---------|-------|------------------|
| **Hermes Agent** | #147938（P0） | Windows 上 `state.db` verify 错误地将正常锁识别为损坏 → 回退到过期快照 |
| **QwenPaw** | #8585 | Windows 上 `recall_history` 因 `\\?\` 扩展路径规范化而失效 |
| **OpenClaw** | #191944 | macOS 上 Gateway stop 失败 |
| **QwenPaw** | #8234（PR 中） | GBK/CP936 编码在中国版 Windows 文件上丢失字节 |
| **Hermes Agent** | #149861, #150146 | pnpm 迁移后 macOS Desktop 构建失败 |

四个活跃项目中有三个在同日报告了严重的 Windows 或 macOS 平台问题。QwenPaw 的 GBK 编码 PR（#8234，XXL）是整个生态中跨平台文件系统工作中最深的一次。

**对 AI Agent 开发者的启示**：跨平台正确性是系统性的短板领域。Windows 在 CI 覆盖中尤其被忽视。任何集成这些项目的系统都应预见到文件路径、Shell 调用和数据库路径相关的 Windows 特异性边界情况。

### 安全加固

| 项目 | 操作 | 范围 |
|---------|--------|-------|
| **ZeroClaw** | 合并 #12114 | XFF 代理跳数的速率限制 |
| **ZeroClaw** | 合并 #12233 | OIDC bearer 验证限制 |
| **ZeroClaw** | PR #12239（开放中） | 在会话副作用期间保持当前权限 |
| **ZeroClaw** | PR #9746（开放中，已 95 天） | 按 Agent 的所有权隔离 |
| **Hermes Agent** | Issue #145171 | 入口点切换到网关会话权威 |
| **QwenPaw** | PR #8550 | 模型配置校验强制执行 |

ZeroClaw 是整个生态中安全投入最大的项目，今日合并了 2 个安全修复。安全工作的跨项目汇聚——OIDC、速率限制、所有权隔离、配置校验——反映出随着这些工具从个人使用转向多用户和企业部署，整个生态正在进入一个成熟化阶段。

**对 AI Agent 开发者的启示**：安全特性（OIDC、速率限制、按 Agent 所有权隔离）在整个生态中尚未标准化。ZeroClaw 的安全模式有望成为多用户部署场景下的参考实现。

### 会话状态与持久化

| 项目 | Issue | 问题 |
|---------|-------|---------|
| **OpenClaw** | #191847 | 大会话下 SQLite OOM（2026.9.7→10.10 回归） |
| **OpenClaw** | #182647 | 云端 Worker 能力元数据失败 |
| **Hermes Agent** | #139818（已关闭） | 远程后端会话无法恢复（42 条评论，22 天） |
| **Hermes Agent** | #146643 | Gateway 每次变更都重新读取完整会话历史 |
| **ZeroClaw** | #12279 | 频道启动时，转录恢复期间可能丢失消息 |
| **QwenPaw** | #8596（已修复） | `/clear` 消息在聊天重新打开时被恢复 |

会话恢复、重启时的状态持久化以及转录完整性是四个活跃项目共同关注的问题。Hermes Agent 关闭 #139818（关于会话可恢复性的 42 条评论问题）是一个重要里程碑，可能会推动其他项目类似的修复工作。

**对 AI Agent 开发者的启示**：会话状态管理是差异化最大的领域——没有两个项目使用相同方案。OpenClaw 采用 WAL/SQLite 加梦境机制；Hermes Agent 使用 state.db 加 agent/main 会话分离；QwenPaw 使用会话转录加 ReMe；ZeroClaw 使用 RPC 会话权威。评估集成时应明确考察持久化保证。

### 依赖与构建系统升级

| 项目 | 事件 | 影响 |
|---------|-------|--------|
| **Hermes Agent** | npm→pnpm 迁移（#149746） | 6 个以上的后续 PR 和 Issue，macOS 构建失败 |
| **ZeroClaw** | vodozemac 0.11.0 RUSTSEC 问题（#12272） | **阻塞所有合入** — 项目级 S1 |
| **QwenPaw** | v2.3.0-beta.2 测试中 | 记忆标签索引回归（#8580） |

所有项目同时在经历重大的依赖迁移。ZeroClaw 的 RUSTSEC 漏洞（#12272）最为关键——它阻塞了每一个 PR 和 master 分支的构建，对依赖 ZeroClaw 的下游项目构成生态级风险。

**对 AI Agent 开发者的启示**：多项目同时进行依赖迁移增加了集成风险。在集成任何这些项目时，强烈建议锁定 Lockfile 并采用容器化构建。

---

## 5. 差异化分析

### 功能聚焦

| 项目 | 核心差异化特性 | 次要聚焦 |
|---------|----------------------|-----------------|
| **OpenClaw** | 自主式内存管理（梦境阶段、晋升机制、召回） | MCP 插件生态、云端 Worker、托管目录 |
| **Hermes Agent** | 桌面端与多平台对等（Electron 桌面端、Android、iOS） | CLI 工具链、systemd 集成、配对流程 |
| **QwenPaw** | 对话效率（引用、紧凑工具调用、ReMe 重排序） | 中国市场支持（GBK 编码、DeepSeek R1 离线）、多模型提供商 |
| **ZeroClaw** | 安全与多用户（OIDC、按 Agent 所有权隔离、速率限制） | 多节点 RPC、Matrix 频道、中继基础设施 |

### 目标用户

| 项目 | 主要用户画像 | 次要用户 |
|---------|----------------|-----------|
| **OpenClaw** | 追求自主内存 Agent 的高级用户和开发者 | 企业多 Agent 部署 |
| **Hermes Agent** | 桌面端优先用户、CLI 爱好者、自托管玩家 | 跨平台（Windows/macOS/Linux/Android）用户 |
| **QwenPaw** | 中国市场开发者、追求对话效率的用户 | 多模型部署（本地 + API 提供商） |
| **ZeroClaw** | 安全敏感型组织、多用户部署场景 | Matrix 频道用户、中继基础设施运营商 |

### 技术架构

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **状态后端** | SQLite WAL 模式，自定义检查点 | state.db，agent/main 会话分离 | 会话转录 + SQLite | RPC 会话权威 |
| **插件模型** | MCP 分组、外部/workspace 插件捕获 | 核心 + labs 插件，pnpm workspace | 丰富的市场，带依赖校验 | 多源插件仓库（PR 中） |
| **记忆系统** | 自主梦境/晋升 | Agent/main 会话分离 | ReMe 监督式重排序 | 点对点 RPC 状态 |
| **认证模型** | Gateway 会话权威 | 入口点切换跟踪 | 配置校验 | OIDC + 按 Agent 所有权隔离 |
| **发布阶段** | 成熟（v2026.10 stable） | 成熟（v0.23.0） | 活跃（v2.3.0 beta） | v1.0 之前（目标 v0.9.0） |

---

## 6. 社区动能与成熟度

### 活跃度分层

| 层级 | 项目 | 速度 | 状态 |
|------|---------|----------|---------|
| **第一层 — 大众市场** | **OpenClaw** | 363 issues / 500 PRs 每日 | 高速 + 高回归面；成熟但正承受回归问题压力 |
| **第二层 — 活跃增长** | **Hermes Agent**, **QwenPaw** | 每日 23–50 issues/PRs | 健康迭代；聚焦特定痛点；Issue 关闭迅速 |
| **第三层 — v1.0 前 / 阻塞中** | **ZeroClaw**, **IronClaw** | 每日 0–50 | ZeroClaw 被依赖漏洞阻塞；IronClaw 已不活跃 |

### 快速迭代中的项目

- **QwenPaw**：今日 PR 关闭/开启比最高（18:17），Issue 也是（11:12）。在修复回归问题的同时保持了迭代速度。大多数用户报告的缺陷都在当日或数日内关闭。
- **OpenClaw**：尽管面临回归问题，今日仍关闭了 159 个 Issue——说明团队在聚焦时能够驾驭庞大的体量。历史状态恢复（#164445）是一条技术深度很高、推进速度很快的功能线。
- **Hermes Agent**：npm→pnpm 迁移是一次重大的基础设施投入，一旦完成，将显著改善构建性能和依赖管理。

### 处于稳定化阶段的项目

- **ZeroClaw**：v0.9.0 发布被 #12272（RUSTSEC 漏洞）阻塞。一旦解决，项目应能发版。今日合并的安全 PR（#12114、#12233）展示了成熟的安全实践，有助于在解除阻塞后建立信心。

### 值得关注的信号

- **IronClaw**：在过去 24 小时内零活动，说明项目要么在收尾，要么存在严重的贡献者流失。决策者应寻求项目状态的明确信息。
- **OpenClaw 的 P0 回归**（#160959，插件捕获期间 Gateway 阻塞，80 条评论）是整个生态中最关键未解决的 Issue。该 Issue 自 2026.9.6 起开放，80 多条社区评论后仍未解决。
- **ZeroClaw 的依赖阻塞**（#12272）是项目层面的生存性风险。如果在数日内未解决，贡献者可能流失并出现分支。

---

## 7. 趋势信号

### 对 AI Agent 框架开发者的启示

1. **自主式内存管理已是入场券，但尚无定论。** OpenClaw 的梦境阶段、QwenPaw 的 ReMe 重排序和 OpenClaw 的召回存储都在从不同角度解决同一问题。目前没有哪个项目的方案已被其他项目采纳为参考实现。未来 3–6 个月极有可能产生一个主导性模式。

2. **跨平台正确性是系统性短板。** 三个活跃项目同时报告了严重的 Windows 或 macOS 问题。生态中缺乏针对平台特定行为的共享测试基础设施。在 Windows CI 上全面投入的项目将拥有竞争优势。

3. **企业级安全特性正在汇聚。** OIDC 集成、按 Agent 所有权隔离、速率限制和托管配置范围正独立出现在所有项目中。下一步很可能是标准化——通过共享的安全规范，或者采纳 ZeroClaw 的模式。

4. **插件生态碎片化。** 各项目都有自己的插件模型（MCP 分组、labs 插件、市场、多源仓库）。缺乏跨项目插件可移植性限制了生态的网络效应。

5. **依赖管理动荡期。** 多项目同时进行重大构建系统迁移（pnpm、RUSTSEC 审计）。这为下游项目和用户增加了集成风险。强烈建议采用锁定版本和容器化部署。

### 对生态评估决策者的启示

- **选择 OpenClaw**：当自主内存管理、MCP 生态深度和社区规模是优先考量时。当前回归压力属于暂时状态——该项目的维护响应速度一直保持高水平。
- **选择 Hermes Agent**：当桌面端对等、CLI 工具链和跨平台部署是优先考量时。pnpm 迁移将在数周内稳定；最终架构将更易于维护。
- **选择 QwenPaw**：当对话体验、中国市场支持和快速功能迭代是优先考量时。其 Issue 关闭率证明了健康的治理模式。
- **选择 ZeroClaw**：用于多用户、安全优先的部署场景。当前的依赖阻塞（#12272）是主要风险因素；在承诺投入前，建议在未来 5–7 天内观察是否得到解决。
- **暂不考虑 IronClaw**：直到项目状态得到明确澄清。

---

*本报告基于 2026-11-07 GitHub 社区活动数据编制，涵盖 OpenClaw、Hermes Agent、QwenPaw、ZeroClaw 和 IronClaw。所有指标反映报告日期前 24 小时内的活动。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me go through it carefully and translate it while following the rules:
- Only output the translation, no preamble
- Preserve Markdown structure exactly
- Keep URLs, numbers, dates, code, project names as-is
- Use natural technical Chinese register
- Keep issue/PR references as-is

Let me translate section by section:

## 1. Today's Overview
Hermes Agent (NousResearch/hermes-agent) 在 2026 年 11 月 7 日活动量激增，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目近期完成的 npm→pnpm 工作区迁移（合并为 #149746）正在产生大量后续工作，至少有 6 个 open 的 PR 和 5 个 issue 直接追踪迁移的遗留问题。开发速度在所有组件（gateway、CLI、desktop、plugin system）上保持强劲，共合并/关闭了 13 个 PR，多项修复直指安装程序稳定性和会话管理。今天没有新版本发布（无 tag），反映出团队正在为下一稳定版发布前进行清理和回归修复。

## 2. Releases
**今日无新版本发布。** 最新稳定版仍为 v0.23.0（tag 日期 2026.9.24）。多个 PR（#150406、#150407、#150411）已准备好在下一版本发布前合入，维护者正在按计划将这些 PR 有序排入，而非零散发布补丁版本。

## 3. Project Progress
### Merged / Closed PRs Today
虽然列出的 50 个 PR 目前全部为 **open** 状态，但其中 13 个在过去 24 小时内已合并或关闭（根据 37 open / 13 merged 的统计）。已合并的关键工作包括多个 PR，涉及 plugin ecosystem、build/pm 和 gateway 等多个领域。

新集成的功能包括 Yuanbao（腾讯聊天）从核心代码迁移到 `hermes-labs-plugins`，防止在 JS workspace 子文件夹中使用 npm 安装以保护 `npx` 和 `npm run` 命令，以及修复了 gateway 拒绝戳记测试的稳定性问题。

此外还完成了 pnpm 与 npmrc 脚本设置之间的兼容性桥接，以及 pnpm 版本在 `pm/lock.json` 和 `package.json devEngines` 之间的单源同步。多个 PR 正在推进功能开发，包括会话转录读取（无需附加）、Yuanbao 插件提取和新的社区插件如 Yandex Mail。

社区讨论中，远程后端桌面会话无法恢复的问题已获得 42 条评论并被标记为 P2 优先处理，这表明会话恢复是用户关注的重点。

网关在每次变更时重新读取完整会话历史导致 CPU 峰值和超时，P2 优先级的会话历史重新读取问题获得了 17 条评论。systemd 仪表板清单问题、有限托管房间转录的源用户丢失问题，以及 Windows 状态数据库锁定误判为损坏后恢复过期快照的 P0 问题也在讨论中，分别有 14、9 和 7 条评论。

入口点切换涉及服务、远程桌面和 Web 的网关会话授权问题获得 6 条评论，iPhone Safari 上的麦克风按钮双击问题则获得 5 条评论。底层需求分析表明会话弹性是主要关注点，已关闭的 #139818 问题（42 条评论，耗时 22 天）代表了用户对远程后端会话可恢复性的长期不满。

新的 #150102 转录读取 PR 满足了无需副作用即可查看会话状态的需求。pnpm 迁移的后续工作（#106960 已关闭，加上 #150035/#150036 已合并）表明社区能够容忍迁移中断但期望快速修复，而 #146643 问题则表明在规模化场景下会话存储性能需要改进。平台一致性也成为一个问题——macOS 桌面构建失败、Windows 状态数据库损坏和 iPhone Safari UX 摩擦等集合信号表明 Hermes 的多平台承诺需要进一步巩固。

P0 Windows state.db 问题是最严重的缺陷，因为它会悄悄地将健康数据覆盖为过时快照并错误地报告恢复失败——一个本应防止数据损坏的机制实际上导致了数据丢失。P2 网关会话重新读取问题同样代表着对已建立会话存储的用户构成系统性可靠性风险。Bounded transcript 驱逐移除引用用户导致 DiscussionValidationError，以及技能锁定阻止容器仓库中的所有 git 操作等 P2 问题也在优先级列表中。

P2 级别的 Anthropic 使用率报告错误将 1% 或更低的使用率乘以 100，导致报告超过 100%，而仅英语的失速防护意图检测器为非英语代理禁用了防失速功能。入口点切换追踪、配置文件路由子代理继承父工具集而不是目标配置文件的工具集，以及多路复用网关用进程 cwd 覆盖配置文件的 terminal.cwd 等 P3 问题也在列表中。

两个 install-root 查找不正确、降级防护无法查看包内的状态模块、可选导入防护在模块移动后回退错误、删除的包文件夹被留下隐藏了新位置的代码、更新拒绝目标缺少声明的启动文件等问题也在追踪中。

打包更改不会重建依赖环境。稳定性评估显示 P0 Windows state.db 问题是最令人担忧的 bug，它会静默地用过时快照覆盖健康数据。

P2 网关会话重新读取问题同样代表系统性可靠性风险。功能请求中，会话管理挫败感最为突出——#139818 已关闭表明用户对远程后端桌面会话可恢复性的持续挣扎得到解决，但 #146643 显示下一个挑战是规模化会话存储性能。跨平台问题也普遍存在，macOS 桌面构建失败和 Windows 状态数据库损坏等。

iPhone Safari 用户遇到 UX 摩擦。pnpm 迁移善后工作正在进行中，社区成员报告问题，维护者响应迅速。#148329 中技能锁定阻止不相关的 git 操作引发讨论——用户期望安全防护有范围限制而非全面覆盖。多个功能请求获得关注，包括移动端通知抑制和企业管理配置故事，相关追踪 issue 也在推进中。

#79836 存在 92 天未解决，桌面侧边栏缺少 raft 平台图标是个影响用户体验的回归问题。#133006 缺乏可复现案例，可能阻止分类。#147720 的工具集泄漏涉及安全风险，需要重新评估严重程度。多个 PR 和 issue 需要维护者关注，特别是 #137723 和 #148307。
</think>


# Hermes Agent 项目日报 — 2026-11-07

## 1. 今日概览

Hermes Agent (NousResearch/hermes-agent) 在 2026 年 11 月 7 日活动量激增，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目近期完成的 npm→pnpm 工作区迁移（合并为 #149746）正在产生大量后续工作，至少有 6 个 open 的 PR 和 5 个 issue 直接追踪迁移的遗留问题。开发速度在所有组件——gateway、CLI、desktop 和 plugin system——上保持强劲，共合并/关闭了 13 个 PR，多项修复直指安装程序稳定性和会话管理。今天没有新版本发布（无 tag），反映出团队正在为下一稳定版发布前进行清理和回归修复。

---

## 2. Releases

**今日无新版本发布。** 最新稳定版仍为 v0.23.0（tag 日期 2026.9.24）。多个 PR（#150406、#150407、#150411）已准备好在下一版本发布前合入，维护者正在按计划将这些 PR 有序排入下一版本，而非零散发布补丁版本。

---

## 3. 项目进展

### 今日合并/关闭的 PRs
虽然列出的 50 个 PR 目前全部为 **open** 状态，但其中 13 个在过去 24 小时内已合并或关闭（根据 37 open / 13 merged 的统计）。已合并的关键工作包括：

| PR | Author | 领域 | 概述 |
|----|--------|------|------|
| #150210 | teknium1 | 插件生态 | Yuanbao（腾讯聊天）从核心代码迁移至 `hermes-labs-plugins`；现有用户自动迁移 |
| #150364 | c2h5oh | 构建/pm | 拒绝在 JS workspace 子文件夹中使用 npm 安装，保留 `npx` 和 `npm run` |
| #150195 | teknium1 | Gateway | 修复 gateway 拒绝戳记测试的不稳定性（fake disk 边界情况恰好卡在 5 秒 deadline 上） |
| #150035 | alt-glitch | 构建/pm | 桥接 pnpm→npmrc 脚本设置的兼容性（node-gyp / node-pre-gyp 二进制镜像） |
| #150036 | alt-glitch | 构建/pm | 在 `pm/lock.json` 和 `package.json devEngines` 之间单源同步 pnpm 版本锁定 |

### 推进功能特性的 Open PRs
- **#150102** — `feat(gateway)`：无需 attach 即可读取存储的会话转录（picker 字段、压缩读取、子 agent 对话）。为前端插件能力提供支撑。
- **#150210** — Yuanbao 插件提取（open，CI 已 review）。
- **#150433** — 新增社区插件：Yandex Mail（锁定源版本 v0.4.3）。
- **#150323** — 新增插件：`cite-or-abstain` v0.2.0（AI 部署的证据门控；优先内部引用）。

---

## 4. 社区热点话题

参与度最高的讨论揭示了围绕**会话管理可靠性**、**跨平台安装程序正确性**和 **pnpm 迁移的连锁反应**的集中痛点。

| # | 类型 | 标题 | 评论数 | 链接 |
|---|------|-------|----------|------|
| #139818 | Bug (P2, closed) | 远程后端桌面会话无法恢复（`session.resume` → `not_found`） | **42** | [Issue #139818](https://github.com/NousResearch/hermes-agent/issues/139818) |
| #146643 | Bug (P2, open) | Gateway 每次变更都重新读取完整会话历史；CPU 飙升，超时 | **17** | [Issue #146643](https://github.com/NousResearch/hermes-agent/issues/146643) |
| #106960 | Bug (P3, closed) | systemd dashboard 在 hermes 更新后被登记为 manual-serve | **14** | [Issue #106960](https://github.com/NousResearch/hermes-agent/issues/106960) |
| #139347 | Bug (P2, open) | 有限制的 hosted-room 转录丢失源用户，导致 planner 验证失败 | **9** | [Issue #139347](https://github.com/NousResearch/hermes-agent/issues/139347) |
| #147938 | Bug (P0, open) | **Windows**：`state.db` verify 将 live lock 误判为损坏 → 恢复数月前的过期快照 | **7** | [Issue #147938](https://github.com/NousResearch/hermes-agent/issues/147938) |
| #145171 | Security (P3, open) | Entry-point 切换：serve、remote Desktop、web 尚未纳入 gateway session authority | **6** | [Issue #145171](https://github.com/NousResearch/hermes-agent/issues/145171) |
| #150369 | Bug (open) | iPhone Safari：麦克风按钮需要双击才能触发（AudioContext resume 受用户手势限制） | **5** | [Issue #150369](https://github.com/NousResearch/hermes-agent/issues/150369) |

**底层需求分析：**
- **会话韧性**是主导主题。#139818（现已 closed，42 条评论，历时 22 天）代表了用户对远程后端会话可恢复性的长期不满。它的今日关闭是一个重要里程碑。#146643 揭示了下一个前沿问题——规模化场景下的会话存储性能（数千个会话导致多核 CPU 消耗）。
- **pnpm 迁移遗留问题**（#106960 closed，加上 #150035/#150036 merged）表明社区能够容忍迁移中断但期望快速修复。追踪 issue #150041 确认后续工作正在积极推进中。
- **平台一致性** — macOS Desktop 构建失败（#149861、#150146）、Windows state.db 损坏（#147938）和 iPhone Safari UX 摩擦（#150369）共同表明 Hermes 的多平台承诺需要加强。Windows state.db 问题的 P0 严重程度是最明显的信号。

---

## 5. Bugs 与稳定性

按优先级排序，并标注修复状态：

| Priority | # | 组件 | 概述 | Fix PR? |
|----------|---|-----------|---------|---------|
| **P0** | #147938 | CLI / state | Windows：live `state.db` lock 被误判为损坏 → 恢复过期快照 | 尚无 |
| **P2** | #146643 | Gateway | 每次变更都重新读取完整会话历史；规模化时 CPU 饱和、超时 | 尚无 |
| **P2** | #139347 | Gateway | 有限制转录驱逐移除引用用户 → `DiscussionValidationError` | 尚无 |
| **P2** | #148329 | Tools | Skill lock 阻止 containing repo 中所有 git 写入（无 agent 侧变通方案） | 尚无 |
| **P2** | #146280 | Agent | Anthropic 使用率：`utilization ≤ 1%` 被乘以 100 → 报告值超过 100% | 尚无 |
| **P2** | #105163 | Agent | Stall-guard 意图检测器仅支持英语 → 非英语 agent 的防失速被禁用 | 尚无 |
| **P2** | #137723 | Agent | Codex 配额恢复成功后磁盘上仍显示"已耗尽" | 尚无 |
| **P3** | #145171 | CLI/Gateway | Entry-point 切换追踪：serve/remote/web 尚未迁移至 gateway session authority | 仅追踪 |
| **P3** | #147720 | Tools | Profile-route 子 agents 继承父级 toolset 而非目标 profile 的 | 尚无 |
| **Bug** | #150397 | Gateway | 多路复用 gateway 用进程 cwd 覆盖 profile 的 `terminal.cwd` | 尚无 |
| **Bug** | #150398 | CLI | `hermes_cli/` 中两个 install-root 查找在 main 分支上不正确 | PR #150408 open |
| **Bug** | #150399 | CLI | Downgrade guard 无法看到包内的 state modules | PR #150407 open |
| **Bug** | #150400 | CLI | 模块迁移后可选导入守卫回退逻辑错误 | Open |
| **Bug** | #150386 | CLI | 删除的包文件夹被遗留，隐藏了新位置的代码 | Open |
| **Bug** | #150385 | CLI | Update 拒绝目标中缺失声明的启动文件 | Open |
| **Bug** | #150387 | PM | 打包变更不会重建依赖环境 | Open |

**稳定性评估：** P0 Windows state.db 问题（#147938）是今日队列中最令人警觉的 bug。它静默地用过期快照覆盖健康数据，并将恢复报告为失败——一个本应防损坏的机制反而在造成数据丢失。这值得维护者立即优先处理。P2 gateway 会话重新读取问题（#146643）同样对拥有已建立会话存储的用户构成系统性可靠性风险。

---

## 6. 特性请求与路线图信号

引起关注的用户请求特性：

| # | 领域 | 请求 | 👍 | 展望 |
|---|------|---------|-----|---------|
| #148307 | Mobile | 当 Desktop 处于活跃状态时抑制常规移动通知（P3） | 1 | 近期可能实现；聚焦 UX 改进，风险低 |
| #150431 | Admin | 托管作用域：锁定 `mcp_servers` 以阻止用户添加服务器（P3） | 0 | 满足企业/admin 部署需求；可能在路线图上 |
| #150436 | Config | Config 保存不应删除托管作用域中用户设置的键值（P3） | 0 | 与 #150431 相关；两者共同定义更健壮的托管配置机制 |
| #150102 | Gateway | 无需 attach 即可读取存储的会话转录（已合并 PR，非请求） | — | 功能今日落地；预示会话内省成为一等 API 能力 |

**路线图信号：** #150431 和 #150436 的收敛指向一个明确的企业/admin 配置管理机制。Yuanbao 提取（#150210，今日合并）表明第三方平台正在转向有意图的插件优先架构。会话转录读取功能（#150102）可能预示着更广泛的对话 API surface 面向外部前端。

---

## 7. 用户反馈摘要

**会话管理挫败感：**
用户正积极应对会话恢复可靠性的问题。#139818（现已 closed，42 条评论）代表了远程后端桌面会话恢复的持续痛苦。用户期望会话可移植且可恢复；这里的失败削弱了对 Hermes 作为持久 agent 平台的信任。新 PR #150102 转录读取功能满足了一个相关需求——无需副作用即可查看会话状态。

**跨平台痛点：**
多个 macOS Desktop 构建失败（#149861、#150146）表明 pnpm 切换在 macOS 上的影响比 Linux 更严重。Windows 用户面临 P0 state.db 损坏问题（#147938），这对更新工作流是严重回归。iPhone Safari 用户遇到 UX 摩擦（#150369）。这些共同表明 Hermes 的多平台支持需要更完善的自动化 CI 覆盖。

**pnpm 迁移善后：**
社区成员正在积极报告 pnpm 相关遗留问题（#106960、#150041 追踪）。后续 PR 的快速周转（#150035、#150036、#150364、#150430、#150419）表明维护者响应迅速，但仍有 6+ 个 open PR 表明迁移力度较大。

**Git 工作流阻塞：**
#148329 — skill lock 阻止不相关的 git 操作——引发了热烈讨论。用户期望安全守卫有作用域限制，而非一刀切。

---

## 8. 积压关注清单

获得较少或无维护者响应、可能需要关注的重要 issues 或 PRs：

| # | 存在时间 | 组件 | 问题 | 评论数 | 状态 |
|---|-----|-----------|-------|----------|--------|
| #79836 | ~92 天 | Desktop | Messaging 侧边栏缺少 raft 和多个平台的分区/图标 | 6 | Open |
| #133006 | ~33 天 | Desktop | macOS Desktop 表单填写失败（浏览器目标过时） | 6 | Open，需复现 |
| #147720 | ~6 天 | Tools | Profile-route 子 agents 获得父级的完整 toolset 而非目标的 | 3 | Open |
| #149154 | ~3 天 | Agent | kanban 更新 drain 杀死运行中的 workers；admissions 在无会话的卡片上消耗 | 2 | Open |
| #150056 | ~1 天 | Desktop | Local Bot Chat 在压缩后收到 `admission_conflict` 拒绝 | 1 | Open，原因未知 |
| #137723 | ~25 天 | Agent | Codex 配额恢复成功后磁盘上仍显示"已耗尽" | 1 | Open |
| #148307 | ~4 天 | Mobile | Desktop 活跃时抑制移动通知 | 1 | Open |
| #150041 | ~1 天 | Build | 追踪：pnpm 切换后续工作（meta-issue） | 1 | Open |

**最需要维护者关注的：**
- **#79836**（92 天，6 条评论）— raft 平台在 Desktop 侧边栏中不可见，是一个长期存在、用户期待的 UX 回归。
- **#133006**（33 天，需复现）— macOS 表单填写失败阻塞了真实工作流，但缺少可复现案例，这可能阻碍了分类进度。
- **#147720**（6 天）— profile routes 中的 toolset 泄漏涉及安全风险，可能影响多租户部署；需要重新评估严重程度。

---

*日报数据来源：NousResearch/hermes-agent 2026-11-07 的活动记录。所有 issue 和 PR 链接分别使用 `https://github.com/NousResearch/hermes-agent/issues/<number>` 和 `https://github.com/NousResearch/hermes-agent/pull/<number>` 格式。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation
2. Preserve all Markdown structure
3. Keep URLs, code, numbers, dates as-is
4. Keep project names, usernames, version tags, etc. in original form
5. Use natural technical Chinese register

Let me go through section by section:

**Title**: QwenPaw 项目日报 — 2026-11-07

**Section 1**: Today's Overview → 今天概览
- "high development velocity" → 高开发活跃度
- "code throughput" → 代码吞吐量
- "concentrated fixes" → 集中修复
- "multi-defect reports" → 多重缺陷报告
- "diving deep into edge cases" → 深入挖掘边界情况
- "conversational productivity features" → 会话效率功能

**Section 2**: Releases → 版本发布
- "no new releases" → 无新版本发布
- "in testing" → 测试中
- "referenced in" → 在...中被提及

**Section 3**: Project Progress → 项目进展
- "Merged/Closed PRs" → 已合并/已关闭的 PR
- "Open PRs Under Review" → 待审核的开放 PR
- "New PRs" → 新建 PR

**Section 4**: Community Hot Topics → 社区热点
- "Most Active Issues" → 最活跃的 Issue
- "Most Active PRs" → 最活跃的 PR
- "Underlying needs" → 核心需求
- "Roadmap signals" → 路线图信号

**Section 5**: Bugs & Stability → BUG 与稳定性


- "Critical / High Severity" → 严重/高优先级
- "Medium / Low Severity" → 中等/低优先级
- "Stability note" → 稳定性说明
- "Windows-specific bugs" → Windows 特有的 bug
- "overrepresented" → 占比较高
- "pain point" → 痛点
- "CI/testing coverage" → CI/测试覆盖率

**Section 6**: Feature Requests & Roadmap Signals → 功能需求与路线图信号
- "High-Interest Requests" → 高需求功能
- "Infrastructure Features In Progress" → 基础设施特性进展中
- "Roadmap signals" → 路线图信号

**Section 7**: User Feedback Summary → 用户反馈摘要
- "Pain Points" → 痛点
- "Positive Signals" → 正面反馈
- "Dissatisfaction Themes" → 不满意主题

**Section 8**: Backlog Watch → 待办关注
- "Long-Unanswered or Stale Issues" → 长期未回复或过期的 Issue
- "PRs Awaiting Review" → 待审核的 PR
- "Backlog concern" → 待办问题
- "maintainer triage recommended" → 建议维护者进行分类

Now translating the content line by line.
</think>


# QwenPaw 项目日报 — 2026-11-07

## 1. 今天概览

QwenPaw（github.com/agentscope-ai/QwenPaw）在 2026-11-07 展现出高开发活跃度，过去 24 小时内有 23 个 Issue 和 35 个 PR 发生更新。本日未发布新版本，但团队在积极审核和合并 PR（已关闭/合并 18 个 vs 开放 17 个），代码吞吐量表现强劲。活动构成显示修复工作集中在内存/检索系统、Matrix 频道稳定性、Windows 兼容性以及控制台 UI/UX 打磨上。多重缺陷报告（如 Creator 审核阻塞）表明用户正在深入挖掘边界场景，而引用转追问和紧凑工具调用格式等特性 PR 则反映了会话效率功能的市场需求。

---

## 2. 版本发布

**本日无新版本发布。** 最新稳定版仍为 v2.2.2.post1；v2.3.0-beta.2 正在测试中（在 Issue #8580 中被提及）。

---

## 3. 项目进展

### 已合并/已关闭的 PR（18 项）

| PR | 作者 | 规模 | 摘要 |
|----|------|------|------|
| [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) | wuwenbo0626 | L | **Memory recall 重构** — 自动召回现在使用临时 `TextBlock` 引用而非合成工具调用序列，防止模型模仿并重新调用 `memory_search` |
| [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550) | xiong-wei1 | L | **Model config 校验修复** — 写入路径现强制执行 `thinking_budget >= 1` 和 `max_input_length >= 1000` 边界；此前无效值会被静默持久化，导致 provider 加载失败 |
| [#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) | hehuang139 | XL | **Matrix 会话恢复** — 启动时恢复缓存的会话和设备 E2EE 密钥，无需每次启动都重新输入密码认证 |
| [#8598](https://github.com/agentscope-ai/QwenPaw/pull/8598) | Luohh5 | XXXL | **Plugin 依赖检查重构** — 对 plugin 依赖验证逻辑进行了重大重构 |
| [#8535](https://github.com/agentscope-ai/QwenPaw/pull/8535) | liuxuyang1236 | S | **第三方 agent 定时任务修复** — Codex/Qoder cron 任务不再错误拒绝非空文本指令 |
| [#8600](https://github.com/agentscope-ai/QwenPaw/pull/8600) | yang0228 | M | **Chat 重置持久化修复** — 重新打开的聊天不再恢复过时的 `/clear` 命令气泡 |
| [#8604](https://github.com/agentscope-ai/QwenPaw/pull/8604) | lalaliat | XS | **Windows shell 取消测试** — 防止测试在 Windows 上挂起 |
| [#373](https://github.com/agentscope-ai/QwenPaw/pull/373) | valkryhx | — | **动态 MCP 工具持久化** — 动态注册的 MCP 工具现在跨会话轮次持久保留 |

### 待审核的开放 PR（精选）

| PR | 作者 | 规模 | 摘要 |
|----|------|------|------|
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | Li-john1021 | XXL | **GBK/CP936 编码支持** — `read_file`、`edit_file`、`grep_search` 现正确解码中文 Windows 文件而非丢弃字节 |
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | lecheng2018 | XXL | **Reranker 模型中心** — 为 reranker 设置页面新增服务测试、多查询精度验证和自动验证功能 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | Li-john1021 | XL | **Ollama context window 修复** — 读取 `num_ctx` 而非默认 128k |
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | lorenzozanee | L | **Agent 运行时媒体能力** — 解决 provider 发现与格式化之间的图片能力不匹配问题 |

### 新建 PR（本日）

| PR | 作者 | 规模 | 摘要 |
|----|------|------|------|
| [#8611](https://github.com/agentscope-ai/QwenPaw/pull/8611) | mango8853 | S | **Model 管理删除模式** — 在控制台 UI 中暴露删除 API，用于移除重复/不需要的模型 |
| [#8610](https://github.com/agentscope-ai/QwenPaw/pull/8610) | yang0228 | L | **紧凑工具调用格式** — 为 IM 频道显示新增 `full` / `name_only` / `compact` 选项 |
| [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609) | yang0228 | L | **引用转追问** — 选中文本后追加为 Markdown 块引用到草稿 |
| [#8608](https://github.com/agentscope-ai/QwenPaw/pull/8608) | yang0228 | S | **允许编辑默认 agent** — 在画廊和详情抽屉中启用编辑按钮 |
| [#8607](https://github.com/agentscope-ai/QwenPaw/pull/8607) | BeiMu-new | S | **Boolean schema 保留** — 在 tool schema 中保留 `additionalProperties: false`，不再用 `{"not": {...}}` 错误替换 |
| [#8606](https://github.com/agentscope-ai/QwenPaw/pull/8606) | leom1919 | XS | **Docs: 修复 5 个失效链接** — 涉及文档、e2e README 和 Terraform skill 引用 |

---

## 4. 社区热点

### 最活跃的 Issue（按评论数排序）

1. **[#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580)** — Memory tag index 返回 503 — 4 条评论
   - **根因**：自动生成的 memory tag 无法识别；index 不会重建
   - **信号**：v2.3.0b2 中内存/检索子系统存在静默失败模式

2. **[#8596](https://github.com/agentscope-ai/QwenPaw/issues/8596)** — `/clear` 消息在聊天重新打开后被恢复 — 4 条评论
   - **已在 PR #8600 中修复**，今日合并

3. **[#8276](https://github.com/agentscope-ai/QwenPaw/issues/8276)** — ReMe reranker 接受空 `api_key` — 4 条评论
   - **已在 PR #8550 中修复**

4. **[#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436)** — IM 频道的 `tool_call_format` 配置 — 3 条评论
   - **与新 PR #8610 对齐**，正好实现了此功能

5. **[#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110)** — 引用/参考文本用于追问 — 3 条评论
   - **与新 PR #8609 对齐**，正好实现了引用转追问功能

6. **[#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576)** — 默认 agent 编辑按钮被禁用 — 3 条评论
   - **已在 PR #8608 中修复**

### 最活跃的 PR

| PR | 热度 | 主题 |
|----|------|------|
| [#8598](https://github.com/agentscope-ai/QwenPaw/pull/8598) | XXXL | Plugin 依赖重构 |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | XXL | GBK/CP936 编码（中文 Windows） |
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | XXL | Reranker 模型中心 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | XL | Ollama context window 修复 |
| [#8411](https://github.com/agentscope-ai/QwenPaw/pull/8411) | XL | Matrix 会话恢复 |

**核心需求**：跨平台编码支持（GBK）、健壮的内存/检索、Matrix 频道可靠性以及会话效率功能（引用、紧凑工具展示）是社区的主要关注点。

---

## 5. BUG 与稳定性

### 严重 / 高优先级

| Issue | 标题 | 严重程度 | 状态 | 修复 PR |
|-------|------|----------|------|---------|
| [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) | Memory tag index 503 — tag 生成但无法识别 | **高** | 开放 | — |
| [#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592) | Creator 审核轮次永久无法决定（3 个捆绑缺陷） | **严重** | 开放 | — |
| [#8585](https://github.com/agentscope-ai/QwenPaw/issues/8585) | Windows 上 `recall_history` 失效 — `\\?\` 路径破坏 SQLite URI | **高** | 开放 | — |
| [#8595](https://github.com/agentscope-ai/QwenPaw/issues/8595) | Plugin 安装失败 "No package metadata"（`qwenpaw-creator`） | **高** | 开放 | — |
| [#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517) | Docker Hub 运行时以非 root 用户运行失败（Permission denied） | **中** | 开放 | — |
| [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | 多工作区 Matrix 插件激活失败（10 秒窗口期） | **中** | 开放 | — |
| [#8603](https://github.com/agentscope-ai/QwenPaw/issues/8603) | `run_code` 在 OpenAI 兼容 provider 上收到空参数调用 | **中** | 开放 | — |

### 中等 / 低优先级（值得注意）

| Issue | 标题 | 严重程度 | 状态 | 修复 PR |
|-------|------|----------|------|---------|
| [#8591](https://github.com/agentscope-ai/QwenPaw/issues/8591) | Creator UI：白色按钮在白色背景上 | **低** | 开放 | — |
| [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605) | 浏览器标签页标题不跟随会话名称 | **低** | 开放 | — |
| [#8590](https://github.com/agentscope-ai/QwenPaw/issues/8590) | Plugin 设置页面丢失左侧导航状态 | **低** | 开放 | — |

### 本日已修复

- `#8596` /clear 恢复 bug → [PR #8600](https://github.com/agentscope-ai/QwenPaw/pull/8600)
- `#8276` Reranker 空 api_key → [PR #8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)
- `#8549` Model config 校验绕过 → [PR #8550](https://github.com/agentscope-ai/QwenPaw/pull/8550)
- `#8365` Matrix 密码重新登录 → [PR #8411](https://github.com/agentscope-ai/QwenPaw/pull/8411)
- `#8576` 默认 agent 编辑被禁用 → [PR #8608](https://github.com/agentscope-ai/QwenPaw/pull/8608)
- `#8533` Codex/Qoder cron 空请求 → [PR #8535](https://github.com/agentscope-ai/QwenPaw/pull/8535)

**稳定性说明**：Windows 特有的 bug 占比偏高（SQLite 路径规范化、shell 取消挂起），表明 Windows 是当前 CI/测试覆盖率中的一个痛点。

---

## 6. 功能需求与路线图信号

### 高需求功能

| Issue | 需求 | 评论数 | 可能在下一版本中实现？ |
|-------|------|--------|---------------------|
| [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436) | IM 频道的 `tool_call_format` 配置（full/name_only/compact） | 3 | ✅ 在 PR [#8610](https://github.com/agentscope-ai/QwenPaw/pull/8610) 中 |
| [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | 从回复中引用/参考文本用于追问 | 3 | ✅ 在 PR [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609) 中 |
| [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605) | 浏览器标签页标题跟随当前会话名称 | 1 | 可能 |
| [#8591](https://github.com/agentscope-ai/QwenPaw/issues/8591) | Creator UI 无障碍修复（按钮对比度、开关状态） | 1 | 可能 |
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | 跨 agent 协作指导与通信触发机制 | 4 | 长期规划 |

### 进行中的基础设施功能

- **Reranker 模型中心**（[#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472)，XXL）— 为 memory 设置页面新增服务测试和多查询精度验证
- **GBK/CP936 文件编码**（[#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234)，XXL）— 对中文 Windows 用户至关重要
- **Ollama context window 从 `num_ctx` 读取**（[#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236)，XL）— 本地模型兼容性

**路线图信号**：内存/检索质量（reranker 中心、自动召回重构）和跨平台编码是战略优先级。IM 频道 UX（紧凑工具调用、引用）由用户需求驱动，正在快速推进。

---

## 7. 用户反馈摘要

### 痛点

1. **Windows 兼容性缺口**：`recall_history` 因 `\\?\` 扩展路径处理而在 Windows 上失效；shell 取消测试挂起；GBK 文件编码丢字节
2. **内存/检索脆弱性**：Tag 生成失败静默返回 503；召回生成合成轨迹会被模型模仿
3. **Creator 审核流程阻塞**：单个审核轮可能永久无法决定，完全阻断创意工作流
4. **Plugin 安装失败**：官方 `qwenpaw-creator` 插件通过 UI 和 CLI 均报元数据错误
5. **Matrix 多工作区激活**：10 秒启动窗口仅覆盖第一个工作区的 Matrix 频道

### 正面信号

- 跨 agent 协作功能正在被积极使用和迭代（Issue #2420 反馈）
- DeepSeek R1 在 CoPaw 离线部署中可正常连接（Qwen3/3.5 则不行）
- Memory recall 重构（PR #8457）和 reranker 改进（PR #8472）解决了长期以来的检索质量问题
- Matrix 会话恢复（PR #8411）解决了每次启动密码重新登录的烦扰

### 不满意主题

- **UI 无障碍**：Creator 面板存在白色按钮配白色背景；默认 agent 编辑无技术原因被禁用
- **可调试性**：空 api_key 被静默接受；超出范围的 model config 被持久化后重启才静默失败
- **多实例管理**：无法通过会话名称区分多个控制台标签页

---

## 8. 待办关注

### 需要维护者关注的长期待回复或过期 Issue

| Issue | 存在时间 | 标题 | 优先级 |
|-------|----------|------|--------|
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | 约 7 个月 | 跨 agent 协作 UX 反馈（4 个子问题） | 高 |
| [#1453](https://github.com/agentscope-ai/QwenPaw/issues/1453) | 约 8 个月 | CoPaw 离线安装：Qwen3/3.5 无法连接（DeepSeek R1 可以） | 中 |
| [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | 约 5 个月 | 引用/参考文本功能需求 | 中（PR 进行中） |
| [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436) | 约 2.5 个月 | `tool_call_format` 配置 | 中（PR 进行中） |
| [#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592) | 2 天 | **3 个捆绑的严重缺陷**在 Creator 审核流程中 | **严重 — 需要拆分/分类** |
| [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) | 3 天 | Memory tag index 503 错误 | 高 |

### 待审核的 PR

| PR | 存在时间 | 标题 | 阻塞情况 |
|----|----------|------|----------|
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | 约 3 周 | GBK/CP936 编码修复 | 规模 XXL，审核中 |
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | 约 10 天 | Reranker 模型中心 | 规模 XXL，审核中 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | 约 3 周 | Ollama context window | 规模 XL，审核中 |
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | 约 5 周 | Agent 运行时媒体能力 | 规模 L，审核中 |

**待办问题**：Issue #8592 捆绑了 3 个可独立复现的后端缺陷，但尽管被标注为"硬阻塞"仍未拆分。Creator 审核流程缺陷可能完全阻断创意用户。建议维护者进行分类处理。

---

*日报基于 QwenPaw（agentscope-ai/QwenPaw）2026-11-07 的活动数据生成。数据覆盖过去 24 小时内发生更新的 Issue 和 PR。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English technical project digest into Simplified Chinese. Let me carefully translate the content while:

1. Preserving all Markdown structure exactly (headings, tables, lists, bold/italic, horizontal rules, emoji)
2. Keeping URLs, link targets, code spans, numbers, dates, issue/PR references verbatim
3. Keeping project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
4. Using natural technical Chinese - not literal word-for-word
5. Outputting ONLY the translation, no preamble or explanation

Let me translate section by section:

---

# ZeroClaw 项目日报 — 2026-11-07

## 1. 今日概览

ZeroClaw 今日开发活跃度较高，过去 24 小时内有 17 个 issue 和 50 个 PR 更新。项目正在积极处理安全问题，已合并两个安全修复（#12114、#12233），同时有多项后续任务在进行中。目前有多个 S1（阻断工作流）和 S2（降级行为）级别的 bug 正在讨论中，包括一个关键的 provider 拒绝问题和一个 channel 启动时的数据丢失风险。社区正在推进 v0.9.0 版本的发布，多个高优先级 PR 以该版本为目标。

---

## 2. 版本发布

**今日无新版本发布。** 项目正在筹备 v0.9.0 版本，多个 PR 已标记进入该版本。

---

## 3. 项目进展

### 已合并/关闭的 PR（14）

| PR | 标题 | 领域 |
|----|------|------|
| [#12114](https://github.com/zeroclaw-labs/zeroclaw/pull/12114) | fix(gateway): 对代理追加的 XFF 跳数进行速率限制 | Gateway/Security |
| [#12233](https://github.com/zeroclaw-labs/zeroclaw/pull/12233) | fix(gateway): 在配置路由组上限制并封顶 OIDC bearer 验证 | Gateway/Security |

这两个已合并的 PR 修复了在 issue #12047 和 #12052 中报告的速率限制和 OIDC token 验证方面的关键安全漏洞。

### 进行中的开放 PR

| PR | 标题 | 影响 |
|----|------|------|
| [#12239](https://github.com/zeroclaw-labs/zeroclaw/pull/12239) | fix(rpc): 在会话效果中保留当前权限 | Security/P1, v0.9.0 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | fix(tools): 每个代理的作用域隔离 | Security, v0.9.0 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): 每个 provider profile 支持多个模型 | Feature/XL |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | feat(tools): 添加 agy_cli 编码-CLI 工具 | Feature/Integration |

---

## 4. 社区热点

### 活跃度最高的 Issue（按评论数）

1. **[#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)** — Matrix send_via 将对等用户身份作为 room 目标处理 — 9 条评论
   - *核心诉求*: Matrix channel 操作中的正确路由行为

2. **[#12047](https://github.com/zeroclaw-labs/zeroclaw/issues/12047)** — OIDC bearer 验证缺少请求次数限制 — 3 条评论（已关闭）
   - *核心诉求*: Gateway 认证安全加固

3. **[#12052](https://github.com/zeroclaw-labs/zeroclaw/issues/12052)** — 速率限制器以第一个 X-Forwarded-For 条目为键 — 2 条评论（已关闭）
   - *核心诉求*: 支持代理的安全控制

### 值得注意的开放讨论

| 项目 | 主题 | 信号 |
|------|------|------|
| [#12280](https://github.com/zeroclaw-labs/zeroclaw/issues/12280) | 转发的回环不应被视为本地连接 | 安全加固任务 |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | resolve_peer_set 允许向忽略的对等方发送消息 | 数据完整性问题 |
| [#12279](https://github.com/zeroclaw-labs/zeroclaw/issues/12279) | Channel 启动时可能丢失消息 | 潜在数据丢失（S2/S0） |

---

## 5. Bug 与稳定性

### 严重程度 S1 — 工作流阻断

| Issue | 标题 | 状态 |
|-------|-------|------|
| [#12263](https://github.com/zeroclaw-labs/zeroclaw/issues/12263) | 严格 provider 在长时间使用工具的会话中永久拒绝请求（缺少 `tool_call_id`，422 错误） | **开放** |
| [#12272](https://github.com/zeroclaw-labs/zeroclaw/issues/12272) | vodozemac 0.11.0 未通过 RUSTSEC-2026-0445 和 RUSTSEC-2026-0451 | **开放** |

**#12263**：在约 38 条包含工具调用的消息后，后续所有对话轮次都会被永久拒绝。这阻断了长时间运行的 agentic 工作流。

**#12272**：安全审计发现依赖存在漏洞，导致所有 PR 和 master 分支在质量门禁中构建失败。

### 严重程度 S2 — 降级行为

| Issue | 标题 | 修复 PR？ |
|-------|-------|-----------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Matrix send_via 将对等用户 ID 作为 room 目标 | — |
| [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | 64 个活跃 RPC 会话在空闲时从未释放 | — |
| [#12176](https://github.com/zeroclaw-labs/zeroclaw/issues/12176) | 延迟 MCP 工具列表的 HashMap 顺序破坏了 prompt 缓存 | — |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | 出站消息可能到达被忽略的对等方 | — |
| [#12279](https://github.com/zeroclaw-labs/zeroclaw/issues/12279) | Channel 启动期间可能在转录恢复时丢失消息 | — |

### 严重程度 S3 — 轻微

| Issue | 标题 |
|-------|-------|
| [#12155](https://github.com/zeroclaw-labs/zeroclaw/issues/12155) | 快速入门取消提示"未写入配置"，但配置实际存在 |
| [#12178](https://github.com/zeroclaw-labs/zeroclaw/issues/12178) | deliver_file 描述告知模型将 URI 写入回复文本 |

---

## 6. 功能请求与路线图信号

### 审查中的高影响力功能 PR

| PR | 标题 | 规模 | 信号 |
|----|------|------|------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 每个 provider profile 支持多个模型 | XL | 主要 provider 架构变更 |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | 添加 agy_cli 编码-CLI 工具用于 Antigravity CLI | XL | 响应 Gemini CLI 停用 |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | 支持多个插件注册源 | XL | 企业/自托管灵活性 |
| [#12276](https://github.com/zeroclaw-labs/zeroclaw/pull/12276) | 在文本生成期间合成 Telegram 语音回复 | XL | 无障碍/多模态 |
| [#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) | 通过中继服务守护进程的 Web 仪表板（第二阶段） | XL | 基础设施，v0.9.0 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | 添加配对设备语音设置和聊天控制 | XL | 用户体验改进 |

### Issue 中的功能请求

| Issue | 标题 | 诉求 |
|-------|-------|------|
| [#12261](https://github.com/zeroclaw-labs/zeroclaw/issues/12261) | 在会话/关闭效果之前重新检查当前 TUI | 安全一致性 |
| [#12248](https://github.com/zeroclaw-labs/zeroclaw/issues/12248) | 不要询问无法运行工具调用的批准 | 用户体验效率 |
| [#12249](https://github.com/zeroclaw-labs/zeroclaw/issues/12249) | 仪表板：对无法读取配置

的用户隐藏配置页面 | 访问控制用户体验 |
| [#12217](https://github.com/zeroclaw-labs/zeroclaw/issues/12217) | 仅包含工具的邮件文档应提及 IMAP 监听器 | 文档 |

---

## 7. 用户反馈摘要

### 报告的痛点

| 主题 | Issue | 描述 |
|------|-------|------|
| **数据丢失风险** | #12279 | 用户报告 channel 重启时可能出现消息丢失——在短暂的启动窗口内可能丢失一条消息 |
| **工作流阻断** | #12263 | 长时间使用工具的对话在约 38 条消息后会永久无法使用 |
| **依赖安全** | #12272 | 质量门禁失败正在阻断所有贡献——用户无法合并任何 PR |
| **Prompt 缓存失效** | #12176 | MCP 延迟工具列表顺序在每次会话时变化，导致 prompt 缓存优化失效 |
| **令人困惑的入门体验** | #12155 | 快速入门取消消息与实际情况不符 |

### 突出的用例

- **多 provider 部署**：#9809 满足了对 fallback 模型和每个 provider 支持多个模型的需求
- **编码辅助集成**：#11076 通过 Antigravity CLI 支持响应了 Google Gemini CLI 的停用
- **企业插件管理**：#12216 支持私有和公共插件注册表

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 优先级 | 标题 |
|-------|---------|--------|------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | 约 50 天 | P2 | Matrix send_via 对等路由 bug — 9 条评论，需要决策 |
| [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | 约 16 天 | S2 | RPC 会话泄漏 — 1 条评论，需要分类 |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | <1 天 | S2 | 被忽略的对等方仍可接收消息 — 需要确认 |

### 长期未合并的 PR

| PR | 存在时间 | 状态 | 阻塞 |
|----|---------|--------|------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 约 92 天 | 开放 | 主要架构变更，需要审查 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | 约 95 天 | 开放 | 安全修复，标记为 v0.9.0 |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | 约 45 天 | 开放 | 功能已完成，需要例外文档 |

### v0.9.0 的关键阻塞项

1. **#12272** — vodozemac 依赖中的 RUSTSEC 漏洞（阻断所有合并）
2. **#12263** — Provider 对长会话的拒绝（S1 工作流阻断）
3. **#9746** — 每个代理的所有权范围（需要作者操作）

---

*生成时间：2026-11-07 | 数据来源：zeroclaw-labs/zeroclaw GitHub 仓库*
</think>


# ZeroClaw 项目日报 — 2026-11-07

## 1. 今日概览

ZeroClaw 今日开发活跃度较高，过去 24 小时内有 17 个 issue 和 50 个 PR 更新。项目正在积极处理安全问题，已合并两个安全修复（#12114、#12233），同时有多项后续任务在进行中。目前有多个 S1（阻断工作流）和 S2（降级行为）级别的 bug 正在讨论中，包括一个关键的 provider 拒绝问题和一个 channel 启动时的数据丢失风险。社区正在推进 v0.9.0 版本的发布，多个高优先级 PR 以该版本为目标。

---

## 2. 版本发布

**今日无新版本发布。** 项目正在筹备 v0.9.0 版本，多个 PR 已标记进入该版本。

---

## 3. 项目进展

### 已合并/关闭的 PR（14）

| PR | 标题 | 领域 |
|----|------|------|
| [#12114](https://github.com/zeroclaw-labs/zeroclaw/pull/12114) | fix(gateway): 对代理追加的 XFF 跳数进行速率限制 | Gateway/Security |
| [#12233](https://github.com/zeroclaw-labs/zeroclaw/pull/12233) | fix(gateway): 在配置路由组上限制并封顶 OIDC bearer 验证 | Gateway/Security |

这两个已合并的 PR 修复了在 issue #12047 和 #12052 中报告的速率限制和 OIDC token 验证方面的关键安全漏洞。

### 进行中的开放 PR

| PR | 标题 | 影响 |
|----|------|------|
| [#12239](https://github.com/zeroclaw-labs/zeroclaw/pull/12239) | fix(rpc): 在会话效果中保留当前权限 | Security/P1, v0.9.0 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | fix(tools): 每个代理的作用域隔离 | Security, v0.9.0 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): 每个 provider profile 支持多个模型 | Feature/XL |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | feat(tools): 添加 agy_cli 编码-CLI 工具 | Feature/Integration |

---

## 4. 社区热点

### 活跃度最高的 Issue（按评论数）

1. **[#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926)** — Matrix send_via 将对等用户身份作为 room 目标处理 — 9 条评论
   - *核心诉求*: Matrix channel 操作中的正确路由行为

2. **[#12047](https://github.com/zeroclaw-labs/zeroclaw/issues/12047)** — OIDC bearer 验证缺少请求次数限制 — 3 条评论（已关闭）
   - *核心诉求*: Gateway 认证安全加固

3. **[#12052](https://github.com/zeroclaw-labs/zeroclaw/issues/12052)** — 速率限制器以第一个 X-Forwarded-For 条目为键 — 2 条评论（已关闭）
   - *核心诉求*: 代理感知的安全控制

### 值得注意的开放讨论

| 项目 | 主题 | 信号 |
|------|------|------|
| [#12280](https://github.com/zeroclaw-labs/zeroclaw/issues/12280) | 转发的回环不应被视为本地连接 | 安全加固任务 |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | resolve_peer_set 允许向忽略的对等方发送消息 | 数据完整性问题 |
| [#12279](https://github.com/zeroclaw-labs/zeroclaw/issues/12279) | Channel 启动时可能丢失消息 | 潜在数据丢失（S2/S0） |

---

## 5. Bug 与稳定性

### 严重程度 S1 — 工作流阻断

| Issue | 标题 | 状态 |
|-------|-------|------|
| [#12263](https://github.com/zeroclaw-labs/zeroclaw/issues/12263) | 严格 provider 在长时间使用工具的会话中永久拒绝请求（缺少 `tool_call_id`，422 错误） | **开放** |
| [#12272](https://github.com/zeroclaw-labs/zeroclaw/issues/12272) | vodozemac 0.11.0 未通过 RUSTSEC-2026-0445 和 RUSTSEC-2026-0451 | **开放** |

**#12263**：在约 38 条包含工具调用的消息后，后续所有对话轮次都会被永久拒绝。这阻断了长时间运行的 agentic 工作流。

**#12272**：安全审计发现依赖存在漏洞，导致所有 PR 和 master 分支在质量门禁中构建失败。

### 严重程度 S2 — 降级行为

| Issue | 标题 | 修复 PR？ |
|-------|-------|-----------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Matrix send_via 将对等用户 ID 作为 room 目标 | — |
| [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | 64 个活跃 RPC 会话在空闲时从未释放 | — |
| [#12176](https://github.com/zeroclaw-labs/zeroclaw/issues/12176) | 延迟 MCP 工具列表的 HashMap 顺序破坏了 prompt 缓存 | — |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | 出站消息可能到达被忽略的对等方 | — |
| [#12279](https://github.com/zeroclaw-labs/zeroclaw/issues/12279) | Channel 启动期间可能在转录恢复时丢失消息 | — |

### 严重程度 S3 — 轻微

| Issue | 标题 |
|-------|-------|
| [#12155](https://github.com/zeroclaw-labs/zeroclaw/issues/12155) | 快速入门取消提示"未写入配置"，但配置实际存在 |
| [#12178](https://github.com/zeroclaw-labs/zeroclaw/issues/12178) | deliver_file 描述告知模型将 URI 写入回复文本 |

---

## 6. 功能请求与路线图信号

### 审查中的高影响力功能 PR

| PR | 标题 | 规模 | 信号 |
|----|------|------|------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 每个 provider profile 支持多个模型 | XL | 主要 provider 架构变更 |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | 添加 agy_cli 编码-CLI 工具用于 Antigravity CLI | XL | 响应 Gemini CLI 停用 |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | 支持多个插件注册源 | XL | 企业/自托管灵活性 |
| [#12276](https://github.com/zeroclaw-labs/zeroclaw/pull/12276) | 在文本生成期间合成 Telegram 语音回复 | XL | 无障碍/多模态 |
| [#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) | 通过中继服务守护进程的 Web 仪表板（第二阶段） | XL | 基础设施，v0.9.0 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | 添加配对设备语音设置和聊天控制 | XL | 用户体验改进 |

### Issue 中的功能请求

| Issue | 标题 | 诉求 |
|-------|-------|------|
| [#12261](https://github.com/zeroclaw-labs/zeroclaw/issues/12261) | 在会话/关闭效果之前重新检查当前 TUI | 安全一致性 |
| [#12248](https://github.com/zeroclaw-labs/zeroclaw/issues/12248) | 不要询问无法运行工具调用的批准 | 用户体验效率 |
| [#12249](https://github.com/zeroclaw-labs/zeroclaw/issues/12249) | 仪表板：对无法读取配置的用户隐藏配置页面 | 访问控制用户体验 |
| [#12217](https://github.com/zeroclaw-labs/zeroclaw/issues/12217) | 仅包含工具的邮件文档应提及 IMAP 监听器 | 文档 |

---

## 7. 用户反馈摘要

### 报告的痛点

| 主题 | Issue | 描述 |
|------|-------|------|
| **数据丢失风险** | #12279 | 用户报告 channel 重启时可能出现消息丢失——在短暂的启动窗口内可能丢失一条消息 |
| **工作流阻断** | #12263 | 长时间使用工具的对话在约 38 条消息后会永久无法使用 |
| **依赖安全** | #12272 | 质量门禁失败正在阻断所有贡献——用户无法合并任何 PR |
| **Prompt 缓存失效** | #12176 | MCP 延迟工具列表顺序在每次会话时变化，导致 prompt 缓存优化失效 |
| **令人困惑的入门体验** | #12155 | 快速入门取消消息与实际情况不符 |

### 突出的用例

- **多 provider 部署**：#9809 满足了对 fallback 模型和每个 provider 支持多个模型的需求
- **编码辅助集成**：#11076 通过 Antigravity CLI 支持响应了 Google Gemini CLI 的停用
- **企业插件管理**：#12216 支持私有和公共插件注册表

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 优先级 | 标题 |
|-------|---------|--------|------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | 约 50 天 | P2 | Matrix send_via 对等路由 bug — 9 条评论，需要决策 |
| [#11962](https://github.com/zeroclaw-labs/zeroclaw/issues/11962) | 约 16 天 | S2 | RPC 会话泄漏 — 1 条评论，需要分类 |
| [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | <1 天 | S2 | 被忽略的对等方仍可接收消息 — 需要确认 |

### 长期未合并的 PR

| PR | 存在时间 | 状态 | 阻塞 |
|----|---------|--------|------|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 约 92 天 | 开放 | 主要架构变更，需要审查 |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | 约 95 天 | 开放 | 安全修复，标记为 v0.9.0 |
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | 约 45 天 | 开放 | 功能已完成，需要例外文档 |

### v0.9.0 的关键阻塞项

1. **#12272** — vodozemac 依赖中的 RUSTSEC 漏洞（阻断所有合并）
2. **#12263** — Provider 对长会话的拒绝（S1 工作流阻断）
3. **#9746** — 每个代理的所有权范围（需要作者操作）

---

*生成时间：2026-11-07 | 数据来源：zeroclaw-labs/zeroclaw GitHub 仓库*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*