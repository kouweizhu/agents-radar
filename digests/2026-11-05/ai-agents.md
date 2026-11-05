# OpenClaw 生态日报 2026-11-05

> Issues: 395 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-05 02:43 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the content accurately
2. Preserve the exact Markdown structure
3. Keep all URLs, code spans, issue/PR numbers as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me carefully translate each section.
</think>


# OpenClaw 项目日报 — 2026-11-05

---

## 1. 今日概览

过去 24 小时内 OpenClaw 共更新了 **500 个 PR** 和 **395 个 Issue**，反映出社区活跃度高、开发节奏快。本次发布了 **v2026.11.5-beta.1**，包含两大核心功能方向——Knowledge Scribes 和 PostgreSQL 数据层支持，标志着项目在长期记忆架构和企业级存储灵活性方面进行战略性投入。当前活跃问题中，平台稳定性问题是主要矛盾：Windows 可靠性、内存管理回退、跨平台插件加载瓶颈等问题仍未解决。社区活跃度良好，今日合并/关闭 197 个 PR，多个高优先级修复正在推进中。

---

## 2. 版本发布

### v2026.11.5-beta.1 — 今日发布

| 组件 | 变更内容 |
|-----------|--------|
| **Knowledge Scribes** | 实现一流的知识捕获机制和可复用的工作流（#185583、#185637、#185974、#186270、#186455、#187659）。由 @jalehman 贡献。 |
| **PostgreSQL 数据层** | 新增 PostgreSQL 后端状态存储，支持在 SQLite 之外选择其他数据库，适合大规模部署场景。 |

**迁移说明：** 本次 beta 版本无破坏性变更。PostgreSQL 支持为增量式添加，现有 SQLite 用户不受影响。

**参考：** [openclaw/openclaw Releases v2026.11.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)

---

## 3. 项目进展

### 已合并/关闭的 PR（更新总数 197 个）

| PR | 领域 | 变更内容 | 状态 |
|----|------|--------|--------|
| [#186117](https://github.com/openclaw/openclaw/pull/186117) | iMessage | 修复 Gateway 更新后 iMessage 账户状态显示正常但无法发送消息的问题（Automation 发送失败且无恢复提示） | **已合并** |
| [#192378](https://github.com/openclaw/openclaw/pull/192378) | Storage | 前向移植 SQLite 接入和租约清理修复（冷启动 SQLite 死锁、离线维护期间租约清理） | **已合并** |
| [#191830](https://github.com/openclaw/openclaw/pull/191830) | Codex | 前向移植 2026.10.10 线程所有权的原生跟进失败修复 | **已合并** |
| [#192606](https://github.com/openclaw/openclaw/pull/192606) | Scripts | 使 nitSweep 摘要验证错误具有可操作性 | **已合并** |
| [#188681](https://github.com/openclaw/openclaw/pull/188681) | exec-host | 在发送前拒绝超大的 macOS 应用请求（≥256,000 字节） | **已合并** |

### 推进中的 Open PR（精选高优先级）

| PR | 领域 | 变更内容 | 优先级 |
|----|------|--------|----------|
| [#193132](https://github.com/openclaw/openclaw/pull/193132) | Update | 修复 verified update 某步骤失败后 `repair` 命令永久拒绝重试的问题 | P1 |
| [#192053](https://github.com/openclaw/openclaw/pull/192053) | Signal | 当接收任务停滞时限制 monitor 的清理时间 | P2 |
| [#192573](https://github.com/openclaw/openclaw/pull/192573) | Gateway | 修复 CLI-owner 工具在 roles 启用时无法读取托管会话的问题 | P2 |
| [#192985](https://github.com/openclaw/openclaw/pull/192985) | Code Mode | 停止 Code Mode 中稳定的三工具循环（`exec` → `read` → `write` 轮转） | P2 |
| [#193137](https://github.com/openclaw/openclaw/pull/193137) | Voice-call | 保留 Twilio 问候语并在静音后恢复监听 | — |
| [#188057](https://github.com/openclaw/openclaw/pull/188057) | Knowledge | 添加决策模型召回门控（可选项：关键词搜索短名单） | P2 |
| [#191513](https://github.com/openclaw/openclaw/pull/191513) | Pairing | 通过主机审批的短码配对浏览器 | P2 |
| [#191344](https://github.com/openclaw/openclaw/pull/191344) | Codex | 对普通线程使用 OpenClaw 的基础提示词（消除冗余的 Codex 引导） | — |
| [#182383](https://github.com/openclaw/openclaw/pull/182383) | Plugin SDK | 发布访问策略修订版，用于保留重检场景 | P2 |

---

## 4. 社区热点话题

### 评论最活跃的 Issue（按评论数排序）

1. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — Gateway 在捕获大型外部插件时阻塞数分钟 *(70 条评论，P0，🔴 回退)*
   - **需求：** 自 2026.9.6 以来出现的严重性能回退，大型依赖树插件加载时事件循环阻塞数分钟。
   - **标签：** `clawsweeper:source-repro`、`impact:crash-loop`

2. **[#177656](https://github.com/openclaw/openclaw/issues/177656)** — 原生 host exec 返回共享状态完整性准入错误 *(28 条评论，P1)*
   - **需求：** 2026.10.5 稳定版上至少 28 次失败；子效果未被证明；阻塞生产部署。
   - **标签：** `clawtributor-review`

3. **[#170956](https://github.com/openclaw/openclaw/issues/170956)** — Windows：启动缓慢、插件退出不干净、schtasks 权限错误 *(28 条评论，P1)*
   - **需求：** 三个关联的可靠性问题导致 Windows 托管服务安装时重启/更新频繁失败。
   - **标签：** `impact:ux-release-blocker`

4. **[#120385](https://github.com/openclaw/openclaw/issues/120385)** — Code Mode 工具目录对 scheduled/cron 和 memory-flush turn 不完整 *(25 条评论，P2)*
   - **需求：** MCP 工具缺失（"Unknown tool id"），在 cron 作业中表现为"⚠️ 🛠️ Exec failed"。
   - **标签：** `impact:ux-friction`

5. **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — 短期召回保留每夜驱逐条目，Dreaming 从不提升 *(24 条评论，P2)*
   - **需求：** Dreaming 深度阶段在短期召回达到 512 条上限后从不提升内容；每夜零召回条目填满配额。
   - **标签：** `impact:session-state`、`issue-rating: 🦞 diamond lobster`

### 热门 PR（讨论和 review 活跃度高）

- **[#193132](https://github.com/openclaw/openclaw/pull/193132)** — Update 修复循环（P1，社区关注度高）
- **[#192053](https://github.com/openclaw/openclaw/pull/192053)** — Signal 清理修复（解决阻塞问题 #191401）
- **[#191513](https://github.com/openclaw/openclaw/pull/191513)** — 通过短码配对浏览器（解决无头 Gateway 认证缺口）

---

## 5. Bug 与稳定性

### 严重级别（P0）— 活跃中

| Issue | 摘要 | 持续时间 | 修复 PR？ |
|-------|---------|-----|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回退） | 37 天 | 否 |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) | `doctor --fix` 与 `plugins update` 互为前置条件；插件卡在前一版本 | 36 天 | 否 |
| [#169844](https://github.com/openclaw/openclaw/issues/169844) | Windows 上 Control UI Gateway 更新卡在"Activating"，导致计划任务被禁用 | 24 天 | 否 |

### 高优先级（P1）— 活跃中

| Issue | 摘要 | 持续时间 | 修复 PR？ |
|-------|---------|-----|---------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | 2026.10.5 原生 host exec 完整性准入错误 | 17 天 | 否 |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows 启动缓慢、退出不干净、schtasks 权限错误 | 23 天 | 否 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 失控（V8 堆外）导致 OOM 和关闭超时 | 45 天 | 否 |
| [#121558](https://github.com/openclaw/openclaw/issues/121558) | Cron 隔离运行将 claude-cli 叙述混入公告消息 | 87 天 | 否 |
| [#150822](https://github.com/openclaw/openclaw/issues/150822) | 原生 Codex 子节点宣传 OpenClaw 工具但无执行处理器 | 49 天 | 否 |
| [#190307](https://github.com/openclaw/openclaw/issues/190307) | Gateway 重启后多个 agent 永久处于"degraded"状态（准入超时） | 4 天 | 否 |
| [#185578](https://github.com/openclaw/openclaw/issues/185578) | Gateway 堆底线只升不降；每次运行的字符串保持可达（每小时约 25 MiB） | 9 天 | 否 |
| [#162087](https://github.com/openclaw/openclaw/issues/162087) | 计划公告失败，提示"Scheduled account X is unavailable"（9.7 前的任务） | 36 天 | 否 |
| [#192141](https://github.com/openclaw/openclaw/issues/192141) | 中断轮次的续写输出了套话而没有原始用户消息 | 2 天 | 否 |
| [#138629](https://github.com/openclaw/openclaw/issues/138629) | 绑定的 Codex ACP 适配器对终态失败轮次返回 end_turn | 62 天 | 否 |

### 近期已修复的问题

| Issue | 状态 | 摘要 |
|-------|--------|---------|
| [#160610](https://github.com/openclaw/openclaw/issues/160610) | **已关闭** | Discord autoPresence 报告"runtime degraded"（使用 SecretRef/env 凭证时） |
| [#185656](https://github.com/openclaw/openclaw/issues/185656) | **已关闭** | 大型 zstd 转录归档超出 Node 字符串限制（#170847 的回退） |
| [#163900](https://github.com/openclaw/openclaw/issues/163900) | **已关闭** | Memory-core 预算压缩从不删除"## Consolidated Memory"章节 |

---

## 6. 功能请求与路线图信号

### 高关注度功能请求（按互动量排序）

| Issue | 功能 | 评论数 | 优先级 | 实现可能性 |
|-------|---------|----------|----------|------------|
| [#91676](https://github.com/openclaw/openclaw/issues/91676) | 可选项 `skills.workshop.allowSandboxedAgents`：允许沙箱化 agent 使用 skill_workshop 工具 | 10 | P2 | 中 |
| [#192632](https://github.com/openclaw/openclaw/issues/192632) | Claude 网页搜索提供方（通过 Messages API 的 Anthropic 服务端 `web_search`） | 9 | P3 | 中 |
| [#158800](https://github.com/openclaw/openclaw/issues/158800) | 在 Control UI 中浏览并 fork 历史频道聊天片段（`/new` 之后） | 8 | P2 | 低 |
| [#17840](https://github.com/openclaw/openclaw/issues/17840) | 可选项：基于 emoji 反应的 agent 轮次（emoji 选项投票、实时反应） | 8 | P2 | 中 |
| [#137110](https://github.com/openclaw/openclaw/issues/137110) | Telegram `sendDice` 支持（message 工具） | 7 | P3 | 中 |
| [#184803](https://github.com/openclaw/openclaw/issues/184803) | Talk：可选关闭或替换 agent-consult 来电时的语音任务确认 | 6 | P3 | 中 |
| [#139586](https://github.com/openclaw/openclaw/issues/139586) | 将 Gateway 级自动化管理扩展到原生 macOS 和 Talk admin turn | 6 | P3 | 低 |
| [#151178](https://github.com/openclaw/openclaw/issues/151178) | 允许 Active Memory 将升级决策委托给插件提供方 | 6 | P3 | 低 |

### 路线图信号

- **知识基础设施** 是明确的战略重点：今天的 beta 包含 Knowledge Scribes 和决策模型召回门控（#188057），表明项目持续投入记忆/知识系统。
- **企业级存储** 正在推进，PostgreSQL 数据层已在 beta 中提供支持。
- **跨平台一致性** 问题（Windows、macOS、Signal、iMessage）占据 bug 待办列表的主导地位，暗示平台可靠性将是下阶段重点。

---

## 7. 用户反馈摘要

### 持续性痛点

| 痛点 | 证据 | 严重程度 |
|------------|----------|----------|
| **Windows 可靠性** | 多个 Issue（#170956、#169844、#163139、#162585）描述 Windows 重启失败、插件损坏、更新卡顿 | 🔴 严重 |
| **内存泄漏 / 堆增长** | #154812（RSS 失控至 9.32 GiB）、#185578（每小时 25 MiB 堆增长）表明存在系统性内存管理问题 | 🔴 严重 |
| **插件加载性能** | #160959 大型插件树阻塞事件循环数分钟；#162585 在 Windows 上重复物化插件包 | 🔴 严重 |
| **会话状态损坏** | #166634 检查点失败、#150635 Dreaming 从不提升、#163900 预算压缩 bug | 🟠 高 |
| **Code Mode 不稳定** | #120385 cron/memory-flush 时 MCP 工具目录不完整、#192985 稳定三工具循环 | 🟠 高 |
| **跨平台清理** | #191401 Signal 清理挂起、#191944 macOS gateway stop 失败 | 🟠 高 |

### 用户满意度信号

- 今日关闭的 Issue（#160610、#185656、#163900、#166289、#165391）表明 bug 修复响应及时。
- 推进中的功能 PR（#191513 配对、#188057 知识召回门控）符合用户对更好身份认证和记忆功能的需求。
- **社区参与度** 保持在高位（热点 Issue 70+ 评论），说明用户积极参与分类和协作。

---

## 8. 待办关注

### 长期无响应的重要 Issue（>30 天，无修复 PR）

| Issue | 摘要 | 持续时间 | 评论数 | 阻塞类型 |
|-------|---------|-----|----------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在大型插件捕获时阻塞数分钟 | 37 天 | 70 | P0 回退 |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) | doctor --fix ↔ plugins update 死锁 | 36 天 | 17 | P0 ux-release-blocker |
| [#162087](https://github.com/openclaw/openclaw/issues/162087) | 计划公告对 9.7 前的账户模式任务失败 | 36 天 | 6 | P1 安全 |
| [#150822](https://github.com/openclaw/openclaw/issues/150822) | 原生 Codex 工具宣传无执行处理器 | 49 天 | 12 | P1 安全 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | 失控 RSS 导致宿主机 OOM | 45 天 | 14 | P1 crash-loop |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 短期召回每夜驱逐条目；Dreaming 停滞 | 49 天 | 24 | P2 session-state |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) | Code Mode MCP 工具对 cron/memory-flush 缺失 | 89 天 | 25 | P2 ux-friction |
| [#121558](https://github.com/openclaw/openclaw/issues/121558) | Cron 运行将 claude-cli 叙述混入消息 | 87 天 | 12 | P1 session-state |
| [#138629](https://github.com/openclaw/openclaw/issues/138629) | Codex ACP 对终态失败返回 end_turn | 62 天 | 7 | P1 |

### 需要维护者关注的 PR

| PR | 摘要 | 状态 | 等待 |
|----|---------|--------|------------|
| [#193132](https://github.com/openclaw/openclaw/pull/193132) | Update 修复循环 | OPEN | 维护者 review |
| [#192573](https://github.com/openclaw/openclaw/pull/192573) | roles 启用时 CLI-owner 工具读取托管会话 | OPEN | 维护者 look |
| [#192985](https://github.com/openclaw/openclaw/pull/192985) | 停止稳定三工具循环 | OPEN | 需要补充证明 |
| [#191513](https://github.com/openclaw/openclaw/pull/191513) | 通过短码配对浏览器 | OPEN | 需要补充证明；security-review-required |
| [#193136](https://github.com/openclaw/openclaw/pull/193136) | 重启后目标延续监护权保持 | OPEN | 依赖 #193103、#193024 |

---

## 汇总指标

| 指标 | 数值 | 趋势 |
|--------|-------|-------|
| Issue 更新（24h） | 395 | 高 |
| PR 更新（24h） | 500 | 很高 |
| 开放 Issue | 226 | — |
| 开放 PR | 303 | — |
| 合并/关闭 PR | 197 | — |
| 新版本发布 | 1（beta） | — |
| P0 活跃问题 | 3 | 无变化 |
| P1 活跃问题 | 11+ | 高 |
| 今日合并修复 PR | 5 | — |

---

*日报数据来源于 2026-11-05 的 OpenClaw GitHub 数据。所有 Issue/PR 链接均指向 https://github.com/openclaw/openclaw。*

---

## 横向生态对比

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, version tags, PR/issue references as-is
4. Use natural technical Chinese register

Let me translate section by section carefully, maintaining the tables, headings, and formatting.

This is a very long report with multiple tables, so I'll need to be thorough and accurate.
</think>


# 跨项目对比报告 — AI Agent 与个人 AI 助手开源生态

**日期：** 2026年11月5日
**分析项目：** OpenClaw、Hermes Agent、IronClaw、QwenPaw、ZeroClaw

---

## 1. 生态概览

当日个人 AI 助手与 Agent 开源生态呈现清晰的三层结构。**OpenClaw** 和 **ZeroClaw** 运转于最高迭代速度，每日合并 50+ PR 并持续交付重大架构级功能，表明已达到生产级开发成熟度。**QwenPaw** 和 **Hermes Agent** 处于中间层级，活跃度适中但稳定，每日处理 50 个 PR 和 10–50 个 Issues，同时积极评审大型功能 PR。**IronClaw** 活动量极少，与其作为维护阶段依赖库或内部工具项目的定位相符。整体生态共同聚焦于多渠道集成（Matrix、XMPP、Zulip、Signal、DingTalk 等）、记忆架构（知识抄写员、检查点、会话持久化）以及跨平台加固（Windows 可靠性问题主导各项目的缺陷积压）。核心技术主题是 **主体感知多 Agent 隔离** —— 这是用户将 Agent 部署在共享、多租户或企业环境中的直接回应。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|------|----------|-------------|----------|---------|---------|
| **Issues 更新（24h）** | 395 | 50 | 0 | 10 | 21 |
| **公开/活跃 Issues** | 226 | 49 | 0 | 7 | 12 |
| **已关闭 Issues** | 169 | 1 | 0 | 3 | 9 |
| **PRs 更新（24h）** | 500 | 50 | 1 | 50 | 50 |
| **开放 PRs** | 303 | 44 | 1 | 35 | 46 |
| **已合并/关闭 PRs** | 197 | 6 | 0 | 15 | 4 |
| **新发布版本（24h）** | 1（beta） | 0 | 0 | 0 | 0 |
| **活跃 P0 Issues** | 3 | 0 | 0 | 0 | 0 |
| **活跃 P1 Issues** | 11+ | 1 | 0 | 2 | 2 |
| **每日合并数** | ~197 | 6 | 0 | 15 | 4 |
| **社区规模信号** | 非常大 | 大 | 非常小 | 大 | 大 |
| **健康度等级** | 🟡 高压状态 | 🟢 稳定 | ⚪ 静止状态 | 🟢 稳定 | 🟡 安全密集型 |

**观察：**

- **OpenClaw** 的关闭率极高（24 小时内合并 197 个 PR），但同时背负最重的缺陷包袱——3 个 P0 和 11+ 个 P1——属于持续高压运行状态。
- **ZeroClaw** 合并节奏保守（开放 46 个 PR 但仅合并 4 个），表明其针对安全敏感型代码库执行了严格的评审标准。
- **IronClaw** 对外社区开发层面基本处于休眠状态。

---

## 3. OpenClaw 的定位

### 相对于同行的优势

| 维度 | OpenClaw 的地位 |
|--------|--------------------|
| **规模** | 活跃量是最近竞品的 10 倍（500 个 PR/天 vs ~50 个）；按社区吞吐量计算为第一大项目 |
| **功能广度** | 知识抄写员、PostgreSQL 数据层、多渠道（Discord、Signal、飞书、iMessage、Telegram、Slack）、Control UI、原生 Codex 集成 —— 集成覆盖面最广 |
| **发布节奏** | Beta 版本持续发布，采用语义化版本控制；今日发布了 v2026.11.5-beta.1 |
| **平台覆盖** | macOS、Windows、Linux、iOS、Raspberry Pi；平台矩阵最全面 |
| **缺陷管理** | 24 小时内合并 197 个 PR —— 生态内最快的问题解决周期 |

### 技术路线差异

| 方面 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|--------|----------|-------------|----------|---------|
| **架构** | 网关中心化 + 分布式 Agent 派生 | Bot 模式 + Kanban 调度器 | RPC 客户端/网关传输模型 | 渠道无关插件架构 |
| **记忆策略** | 知识抄写员 + 活跃记忆 + Dreaming 晋升 | 检查点默认开启 + 文件编辑回滚 | 主体感知记忆隔离 | SQLite 只追加模式 + 分页历史 |
| **存储** | SQLite（默认）+ PostgreSQL（beta） | SQLite | SQLite | SQLite |
| **多租户** | 基于角色的会话管理 | 基于 Profile 的隔离 | 严格的主体作用域强制 | 基于 Provider 的隔离 |
| **插件系统** | OpenClaw Plugin SDK，含访问策略修订 | CaMeL 安全卫士插件 | 多注册来源（进行中） | OpenViking 记忆插件 |

### 社区规模对比

OpenClaw 在置顶 Issues 上的评论量（#160959 有 70+ 条评论）和 PR 数量（每天约 500 个）表明，其社区规模比 Hermes Agent、QwenPaw 或 ZeroClaw **大 5–10 倍**。IronClaw 无活跃社区互动。

---

## 4. 共同的技术关注领域

### 各项目共同浮现的需求

| 技术关注点 | 涉及项目 | 具体需求 |
|-----------------|-------------------|--------------------|
| **Windows 平台可靠性** | OpenClaw、Hermes Agent、QwenPaw、ZeroClaw | 启动缓慢、Shell 超时、命名管道安全、会话租约过期、AppContainer 沙箱 |
| **会话状态持久化** | OpenClaw、Hermes Agent、QwenPaw、ZeroClaw | 冷启动恢复、只追加存储、检查点回放、重启后会话隔离 |
| **记忆架构** | OpenClaw、Hermes Agent、QwenPaw、ZeroClaw | 知识抄写员、Dreaming 晋升、检查点、主体感知隔离、标签索引 |
| **多渠道集成** | OpenClaw、Hermes Agent、QwenPaw、ZeroClaw | Matrix、XMPP、Zulip、Signal、DingTalk、飞书、微信、Rocket.Chat —— 协议多元化 |
| **插件生态扩展** | OpenClaw、Hermes Agent、QwenPaw、ZeroClaw | 多注册来源、安全卫士、第三方记忆插件、头舱/监控插件 |
| **多租户隔离** | OpenClaw、ZeroClaw、Hermes Agent | 主体作用域强制、自有会话隐私、非管理员工具限制 |
| **代码模式 / 工具执行** | OpenClaw、Hermes Agent、QwenPaw | 稳定的三工具循环、参数冲突、MCP 工具目录完整性 |
| **Cron / 定时任务可靠性** | OpenClaw、Hermes Agent、QwenPaw | 每次运行独立会话、隔离执行、通知器失败、Cron 重新分配缺陷 |
| **编码 / 国际化** | OpenClaw、QwenPaw | GBK/CP936 支持、多语言渠道格式、DingTalk 3500 字符降级 |
| **安全加固** | OpenClaw、ZeroClaw、Hermes Agent | CaMeL 卫士插件、主体感知工具扣留、fail-closed SOP 决策、配对码过期 |

### 优先级收敛

**Windows 可靠性缺口** 是全生态通用问题 —— 四个活跃项目均存在 Windows 专项 Issues，涵盖 Shell 执行、启动性能、沙箱兼容性和更新机制。这代表了整个生态最大的共同技术债务。

---

## 5. 差异化分析

### 功能聚焦差异化

| 项目 | 核心差异化 | 目标用户画像 |
|--------|------------------------|--------------------|
| **OpenClaw** | 最广的协议覆盖 + Control UI + 原生 Codex 集成 | 需要多渠道 AI 中心能力的高级用户和企业 |
| **ZeroClaw** | 主体感知安全架构 + RPC 基础设施 + OIDC 控制台 | 对安全有要求、部署在多租户或受监管环境中的团队 |
| **Hermes Agent** | Kanban 调度器 + Bot 间编排 + 检查点默认开启 | 构建 Agent 流水线和任务自动化的开发者 |
| **QwenPaw** | 中国企业渠道 + 本地模型运行时 + 插件生态 | 中国企业和运行本地模型的开发者 |
| **IronClaw** | 极小作用域（仅为依赖） | 下游库使用者 |

### 技术架构差异

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | QwenPaw |
|-----------|----------|----------|-------------|---------|
| **编排模型** | 网关管理 Agent + Control UI | RPC 客户端 + 网关传输 | Kanban 调度器 + Bot 工作节点 | 渠道无关插件 |
| **记忆持久化** | 多层级（短期 → Dreaming → 知识抄写员） | 主体作用域记忆隔离 | 只追加检查点 | SQLite 只追加 + 分页 |
| **发布模型** | 每隔数天一个 Beta 版本 | 基于标签、合并保守 | 稳定版轨道 | Beta（v2.3.0-beta.2） |
| **安全姿态** | 基于角色、工具访问策略 | 主体感知、fail-closed | CaMeL 卫士可选启用 | 基于 Provider 的隔离 |
| **社区来源** | 通用型 AI 助手 | 安全优先 Agent 平台 | 开发者工作流自动化 | 中国企业 / 本地 AI |

### 目标用户

- **OpenClaw**：需要功能最全的个人 AI 助手的开发者和企业，优先追求最大协议支持和 UI 控制能力。
- **ZeroClaw**：安全意识强的团队，在多租户或合规要求严格的环境中部署 Agent，主体隔离不可或缺。
- **Hermes Agent**：构建 Agent 流水线、工作流自动化和 Bot 间协作系统的开发者。
- **QwenPaw**：需要微信/钉钉/飞书集成、使用本地模型的中国企业用户和开发者。
- **IronClaw**：下游库使用者（仅维护，不是独立产品）。

---

## 6. 社区动能与成熟度

### 活跃度层级

| 层级 | 项目 | 速度 | 趋势 |
|------|---------|----------|-------|
| **第一层 — 快速迭代** | OpenClaw | ~500 PRs/天，~197 合并/天 | 加速中；今日发布了 v2026.11.5-beta.1 |
| **第二层 — 活跃开发** | ZeroClaw、QwenPaw、Hermes Agent | 50 PRs/天，4–15 合并/天 | 稳定；各自均有大型 PR 在审 |
| **第三层 — 维护状态** | IronClaw | ~1 PR/周 | 稳定；依赖项目 |

### 快速迭代中的项目

- **OpenClaw**：生态内最高速度。快速功能交付背后背负着显著的缺陷债务（3 个 P0、11+ 个 P1）。每天 197 次合并的速率表明该项目要么拥有大规模自动化贡献流水线，要么拥有非常庞大的贡献者群体。风险：若 P0 积压继续增长，可能出现质量回归。
- **QwenPaw**：活跃的 PR 流水线，有重大聊天历史重构（XXXL）在审。Windows Hub 问题与 DingTalk 渠道缺陷表明项目正承受生产环境的成熟化压力。

### 趋于稳定的项目

- **ZeroClaw**：合并节奏保守（开放 50 个但只合并 4 个），表明其针对安全敏感范畴设置了评审门槛。今日合并了两个关键安全修复（#11266、#12213），表明在专注安全冲刺。多个 XL PR 在审中老化（XMPP、Windows 命名管道安全），表明维护者带宽受限。
- **Hermes Agent**：稳定发布节奏，定向修复。有检查点默认开启 PR（#149206）推进评审 —— 表明会话管理正在走向成熟。

### 值得关注的问题

- **OpenClaw 的 P0 积压**：3 个 P0 未解决（最老的已超过 37 天）且无修复 PR 提交，是预警信号。高速度 + 高债务模式需要持续监控。
- **ZeroClaw 的老化 XL PRs**：XMPP（开放 17 天）和 Windows 安全（开放 19 天）PR 需要维护者优先处理。
- **QwenPaw 的无修复关闭 Issues**：Issue #8278（DingTalk 文本降级）已关闭但无修复 PR —— 存在社区困惑风险。

---

## 7. 趋势信号

以下信号代表跨多个项目可见的持久性模式，对 AI Agent 开发者和决策者具有参考价值：

### 技术趋势

| 趋势 | 证据 | 影响 |
|-------|----------|-------------|
| **主体感知多租户** | ZeroClaw 的作用域强制、OpenClaw 的角色系统、Hermes Agent 的非管理员工具限制 | 生产部署需要严格的用户、会话和 Agent 之间隔离 |
| **持久化记忆架构** | 知识抄写员（OpenClaw）、检查点（Hermes）、只追加 SQLite（QwenPaw、ZeroClaw） | 从临时记忆向持久化 Agent 记忆 + 回滚能力演进 |
| **渠道协议多元化** | 各项目均有 XMPP、Zulip、Matrix、Signal、DingTalk、飞书等跨项目集成 | 无单一协议主导；Agent 需原生支持多种协议 |
| **企业存储灵活性** | OpenClaw Beta 版 PostgreSQL 数据层、各项目均用 SQLite | PostgreSQL 采用信号企业需求；SQLite 仍为默认以保持简洁 |
| **插件安全加固** | CaMeL 卫士（Hermes）、主体无关工具扣留（ZeroClaw）、访问策略修订（OpenClaw） | 开放插件生态需要运行时安全策略，而非仅依赖静态沙箱 |

### 市场趋势

| 趋势 | 证据 | 影响 |
|-------|----------|-------------|
| **中国企业采用** | QwenPaw 的钉钉/飞书/微信聚焦、GBK/CP936 修复、本地模型运行时 | 存在显著的 non-Anthropic/OpenAI 市场，有着独特的协议和编码要求 |
| **小型机器部署** | Hermes Agent 的 `headroom` 插件（1–4 GB VPS、树莓派） | Agent 平台目标正在从桌面端扩展到边缘/低资源环境 |
| **BIM / 专业垂直领域** | Hermes Agent 的 `hermes-bim-studio` 插件 | AI Agent 平台正在超越通用助手，开始垂直专业化 |
| **控制台民主化** | ZeroClaw 的 OIDC 控制台、QwenPaw 的作用域聊天、Hermes Agent 的 Control UI | 非技术用户需要托管的、角色感知的 Web 界面，而不只是 CLI |

### 开发者体验趋势

| 趋势 | 证据 | 影响 |
|-------|----------|-------------|
| **Cron/定时可靠性** | OpenClaw、Hermes Agent、QwenPaw 均有 Cron 相关缺陷和特性 | 定时 Agent 自动化是核心用例，需要独立的会话隔离保障 |
| **Windows 作为一等公民** | 所有项目均存在跨项目 Windows 缺陷 | Windows 是主要部署目标；与 macOS/Linux 的功能对等尚未实现 |
| **代码模式 / 工具执行稳定性** | 稳定工具循环（OpenClaw）、参数冲突（QwenPaw）、MCP 目录缺口（OpenClaw） | 在循环中执行工具的 Agent 需要更强的稳定性保证和执行策略 |
| **多注册插件** | OpenClaw、Hermes Agent、ZeroClaw 均有此需求 | 插件生态正在超越单一注册模型；可发现性和信任机制成为关注点 |

### AI Agent 开发者的决策要点

1. **基于 OpenClaw 构建**：在 Windows 生产部署前监控 P0 缺陷积压（尤其是 #160959、#161921）；PostgreSQL 数据层处于 Beta 阶段，适合评估试用。
2. **基于 ZeroClaw 构建**：主体感知架构是生态内最成熟的多租户隔离模型；关注 XMPP 和多注册功能在 v0.9.0 的落地。
3. **基于 QwenPaw 构建**：聊天历史重构（#8532）是基础性变更 —— 合并后将改变会话管理语义；GBK/CP936 修复（#8234）对中国部署场景有参考价值。
4. **基于 Hermes Agent 构建**：检查点默认开启 PR（#149206）和技能来源追踪（#149216）代表有意义的 UX 改进，值得围绕其合并时间点规划发布节奏。

---

*本跨项目分析基于 2026-11-05 的各项目摘要数据。指标代表各项目 24 小时滚动活动窗口数据。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate it maintaining all the Markdown structure, tables, formatting, and technical content while using natural technical Chinese register.

Let me carefully translate section by section, paying attention to:
1. Preserving all Markdown structure exactly
2. Keeping URLs, numbers, version tags, etc. as-is
3. Using natural Chinese technical register
4. Translating tables properly with correct column alignment

Let me go through the document systematically.
</think>


# Hermes Agent 项目日报 — 2026-11-05

## 1. 今日概览

Hermes Agent 在过去 24 小时内保持高强度的工程输出，50 个 issue 和 50 个 PR 均有更新，显示出活跃的开发节奏和社区参与度。今日无新版本发布。项目中 bug 修复与功能开发并行推进，尤其在插件生态、检查点与文件编辑改进方面表现突出。当前 bug 待处理队列值得关注——多个 P1/P2 级别问题涉及会话管理、Windows 兼容性和跨 profile 状态一致性，表明团队正在维护一个复杂的多平台架构。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次版本发布活动早于本报告周期。

---

## 3. 项目进展

### 已合并 / 已关闭的 PR
| PR | 描述 | 组件 |
|----|------|------|
| [#134601](https://github.com/NousResearch/hermes-agent/pull/134601) | fix(photon): 丢弃聊天动作而非转发为不可读消息 | plugins |

### 活跃中的重要 PR（近期有更新）
| PR | 描述 | 影响范围 |
|----|------|----------|
| [#149206](https://github.com/NousResearch/hermes-agent/pull/149206) | **feat(checkpoints): 默认启用检查点，/undo 同时回退文件编辑** | 重大 UX 改进；关闭 #130589、#144769 |
| [#148903](https://github.com/NousResearch/hermes-agent/pull/148903) | fix(gateway): 终结 bot 间 ping-pong（运行时跳转上限） | 稳定性；解决 4.6 万+ 模型调用失控问题 |
| [#149224](https://github.com/NousResearch/hermes-agent/pull/149224) | fix(acp): 保持严格的会话恢复语义 | 会话完整性 |
| [#149214](https://github.com/NousResearch/hermes-agent/pull/149214) | fix(gateway): 防止 hosted stop 恢复期间执行器饥饿 | 可靠性 |
| [#149210](https://github.com/NousResearch/hermes-agent/pull/149210) | perf(bots): 房间视图仅读取日志增量 | 性能（Bots 架构优化计划） |
| [#149218](https://github.com/NousResearch/hermes-agent/pull/149218) | statusbar: 滚动均值旁边显示仅解码的 t/s | UX；吞吐量显示更准确 |
| [#149213](https://github.com/NousResearch/hermes-agent/pull/149213) | fix(kanban): 确保 epoch bump 时交接过程有隔离保护 | 可靠性 |
| [#149209](https://github.com/NousResearch/hermes-agent/pull/149209) | fix(relay): provision 被拒绝后不再拨打无凭证的 connector | 错误处理 |

### 插件目录新增（3 个新条目）
| PR | 插件 | 用途 |
|----|------|------|
| [#149222](https://github.com/NousResearch/hermes-agent/pull/149222) | headroom | 在小内存机器（1-4 GB VPS、树莓派）上保持 Hermes 存活 |
| [#149221](https://github.com/NousResearch/hermes-agent/pull/149221) | hermes-bim-studio | 工程工作流中的 BIM 检查 |
| [#149220](https://github.com/NousResearch/hermes-agent/pull/149220) | hermes-notify | 实时将发布工作流通知推送到手机 |
| [#149193](https://github.com/NousResearch/hermes-agent/pull/149193) | fashion-design | 纸样绘制、尺寸放码、面料用量估算 |

### 安全 / 架构层面
| PR | 描述 |
|----|------|
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | feat(security): 可选启用的 CaMeL guard 插件，带可复现基准测试 |

---

## 4. 社区热点话题

### 讨论最活跃的 Issue（按评论数排序）

**1. [Issue #139796](https://github.com/NousResearch/hermes-agent/issues/139796)** — Desktop `session.resume` 返回 `not_found`（6 条评论）| P1
> **核心问题：** Desktop 重启后，冷启动会话和被 WS orphan reaper 驱逐的会话无法恢复，因为缺少冷加载路径。
> **现象：** Desktop v0.22.1+247 用户在 gateway 重启后完全丢失会话状态。

**2. [Issue #141521](https://github.com/NousResearch/hermes-agent/issues/141521)** — Desktop 将 fenced 代码降级为正文渲染（4 条评论）| P2
> **核心问题：** 带显式语言标识的 fenced 代码块有时被渲染为纯文本，导致 PowerShell 代码块失去复制功能。
> **现象：** 开发者用户期望可靠的代码渲染和复制按钮。

**3. [Issue #148958](https://github.com/NousResearch/hermes-agent/issues/148958)** — Kanban worker 崩溃导致卡片阻塞（4 条评论）| P2
> **核心问题：** Gateway 所有者 stall 导致 worker 1 退出并被计为崩溃；连续两次崩溃会永久阻塞 Kanban 卡片。
> **现象：** 生产环境多 profile 用户面临工作流死锁。

### 社区核心诉求
- **会话可靠性：** 多个 issue（#139796、#148742、#148762、#148930、#149033）反映了 Desktop/CLI/Gateway 在会话状态管理方面的脆弱性。
- **多 profile 完整性：** Profile 隔离和跨 profile 状态同步需要加强。
- **生产环境稳定性：** Kanban 调度器可靠性（#148958、#148843）是高级用户的持续痛点。
- **插件生态成熟度：** Feature request（#148739、#149219）表明用户期望更深入的插件集成和技能溯源追踪。

---

## 5. Bug 与稳定性

### 关键级别（P1）— 今日有更新
| Issue | 描述 | 关联修复 PR？ |
|-------|------|---------------|
| [#139796](https://github.com/NousResearch/hermes-agent/issues/139796) | Desktop session.resume 对冷启动/驱逐会话失效 | 无 |

### 高优先级（P2）— 今日有更新
| Issue | 描述 | 关联修复 PR？ |
|-------|------|---------------|
| [#148958](https://github.com/NousResearch/hermes-agent/issues/148958) | Kanban worker 崩溃导致卡片阻塞 | 无 |
| [#148742](https://github.com/NousResearch/hermes-agent/issues/148742) | 升级后遗留 state.db 出现 NULL-id 行 | 无 |
| [#148762](https://github.com/NousResearch/hermes-agent/issues/148762) | 同一会话 ID 在两个 profile store 中均未结束 | 无 |
| [#148861](https://github.com/NousResearch/hermes-agent/issues/148861) | Kanban notifier 投递已过期的通知事件 | 无 |
| [#148857](https://github.com/NousResearch/hermes-agent/issues/148857) | Gateway 会话在最后一个 fallback 停住 | 无 |
| [#148930](https://github.com/NousResearch/hermes-agent/issues/148930) | Kanban workers 在首次保存会话时崩溃 | 无 |
| [#149014](https://github.com/NousResearch/hermes-agent/issues/149014) | 多路复用的 gateway 中 MCP `${VAR}` 占位符未解析 | 无 |
| [#149033](https://github.com/NousResearch/hermes-agent/issues/149033) | Restore 拒绝后入站消息永久丢失 | 无 |
| [#148988](https://github.com/NousResearch/hermes-agent/issues/148988) | 会话预览显示 channel_context 而非用户消息 | 无 |
| [#148923](https://github.com/NousResearch/hermes-agent/issues/148923) | 规范组忽略迁移后的 bot avatar key | 无 |

### 中优先级（P2）— Desktop / Chat 相关问题
| Issue | 描述 |
|-------|------|
| [#148859](https://github.com/NousResearch/hermes-agent/issues/148859) | 行内代码中的美元符号被渲染为带反斜杠（`\$`） |
| [#148846](https://github.com/NousResearch/hermes-agent/issues/148846) | Desktop 排队中的 prompt 丢失 Edit 和 Steer 控件 |
| [#148823](https://github.com/NousResearch/hermes-agent/issues/148823) | Desktop 文件树不对包含 Git 变更的父文件夹做标记 |

### 性能问题（P2）
| Issue | 描述 |
|-------|------|
| [#148783](https://github.com/NousResearch/hermes-agent/issues/148783) | `[Windows]` GET /api/memory 每次调用耗时 8-11 秒 |

### 跨平台问题
| Issue | 平台 | 描述 |
|-------|------|------|
| [#148830](https://github.com/NousResearch/hermes-agent/issues/148830) | Windows | PID 复用后活跃会话租约变为永久状态 |
| [#148766](https://github.com/NousResearch/hermes-agent/issues/148766) | 全平台 | TUI 重试提示硬编码为 Alt+K，实际绑定为 Cmd+K/Ctrl+K |

**稳定性小结：** 6 个 P2 bug 有对应的修复 PR 在推进中（Kanban 修复、检查点改进、relay 修复）。会话管理问题群（P1-P2）尚无修复 PR，是当前最紧迫的维护缺口。

---

## 6. 功能请求与路线图信号

### 用户提出的功能需求
| Issue/PR | 描述 | 社区诉求 |
|----------|------|----------|
| [#149219](https://github.com/NousResearch/hermes-agent/issues/149219) / [#149216](https://github.com/NousResearch/hermes-agent/pull/149216) | 创建技能时记录其存在原因（`origin:`）| 用户期望技能溯源追踪 |
| [#148739](https://github.com/NousResearch/hermes-agent/issues/148739) | 允许插件通过公开路由创建 profile | 插件生态扩展 |
| [#149206](https://github.com/NousResearch/hermes-agent/pull/149206) | 检查点默认启用 + /undo 回退文件编辑 | **高度需求** — 解决了主要 UX 缺口 |
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | 敏感工具调用的 CaMeL guard 插件 | 安全意识较强的企业用户 |

### 可能近期落地的功能
1. **检查点作为默认行为** — PR #149206 已有 CI review，暗示即将合并。
2. **技能来源追踪** — 配套的 issue/PR 表明设计方向已对齐。
3. **插件目录持续增长** — 今日提交了 4 个新插件，表明生态活跃。

---

## 7. 用户反馈摘要

### 痛点
| 主题 | 证据 | 严重程度 |
|------|------|----------|
| **重启后会话丢失** | 多例报告（#139796、#148742、#148762）显示 gateway 重启后 state.db 损坏或会话找不到 | 高 |
| **Kanban 不稳定** | Worker 崩溃、卡片阻塞、投递过期通知（#148958、#148861） | 高 |
| **Windows 兼容性** | PID 复用导致陈旧租约（#148830）、内存 API 慢（#148783）、Alt+K 提示错误（#148766） | 中 |
| **Desktop 代码渲染** | 复制按钮缺失（#141521）、美元符号转义问题（#148859） | 低-中 |
| **MCP 配置脆弱性** | 不可读的配置会重新启用所有禁用的技能（#148812），占位符解析顺序问题（#149014） | 中 |

### 突出使用场景
- **生产级家庭实验室** 使用多 profile Kanban 调度器（参见 #148843：本地面向 13 次提交的补丁系列）。
- **BIM/工程工作流** 通过新插件目录条目（#149221）。
- **小内存设备部署** 通过 headroom 插件支持 1-4 GB VPS/树莓派（#149222）。
- **发布监控** 通过手机通知（#149220）。

### 正面信号
- Desktop 复制按钮功能获得好评（#141521 作者以建设性方式提交 issue）。
- 多位社区成员为插件目录贡献条目 = 生态参与健康。

---

## 8. 积压待办关注

### 长期未回应但重要的问题
| Issue | 存在时间 | 描述 | 优先级 |
|-------|---------|------|--------|
| [#141521](https://github.com/NousResearch/hermes-agent/issues/141521) | 约 17 天 | Desktop 代码渲染回归 | P2 |
| [#139796](https://github.com/NousResearch/hermes-agent/issues/139796) | 约 20 天 | Desktop session.resume 冷加载路径缺失 | P1 |

### 需要维护者关注的 PR
| PR | 存在时间 | 描述 | 是否受阻？ |
|----|---------|------|-----------|
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | 约 7 个月 | CaMeL 安全插件 — 可选启用的基准测试 | 安全价值高 |
| [#113666](https://github.com/NousResearch/hermes-agent/pull/113666) | 约 49 天 | Desktop useMessageStream 重构 | UI 稳定性相关 |
| [#133030](https://github.com/NousResearch/hermes-agent/pull/133030) | 约 31 天 | 将 supervisor 命令绑定到安装根目录 | 安装可靠性相关 |

### 关键维护缺口
1. **会话管理问题群：** P1 #139796 及 4+ 个 P2 会话相关 bug 均无修复 PR。
2. **Kanban 可靠性：** Worker 崩溃问题（#148958、#148930、#149213）需要统一关注。
3. **Windows 平台一致性：** 报告了 3 个 Windows 专项 bug，尚无修复 PR。

---

*本日报基于 nousresearch/hermes-agent 2026-11-05 的活动数据生成。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the IronClaw Project Digest from English to Simplified Chinese. I need to:

1. Translate the content naturally into Chinese technical register
2. Preserve all Markdown structure exactly (headings, tables, lists, bold, links, etc.)
3. Keep URLs, version numbers, issue numbers, usernames, file paths in original English
4. Keep the title "IronClaw Project Digest" and dates as-is
5. Output only the translation, no preamble or explanation

Let me translate section by section:

Title: "IronClaw Project Digest" stays the same

Date: "2026-11-05" stays the same

Section 1: Today's Overview - translate naturally
Section 2: Releases - translate naturally
Section 3: Project Progress - translate naturally, keep PR title, numbers, URLs as-is
Section 4: Community Hot Topics - translate naturally
Section 5: Bugs & Stability - translate naturally
Section 6: Feature Requests & Roadmap Signals - translate naturally
Section 7: User Feedback Summary - translate naturally
Section 8: Backlog Watch - translate naturally, keep URLs and numbers

Let me write this out:
</think>


# IronClaw Project Digest

**Date:** 2026-11-05
**Repository:** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日概览

2026 年 11 月 5 日，IronClaw 项目在过去 24 小时内活动量极低，无 issues 或 releases 记录。唯一的近期动态是 Dependabot 提交的一份关于 `zip` Rust 依赖包更新的 PR。整体项目状态稳定，无待处理的 bug 或需要社区关注的讨论。低活动量可能表明项目正处于维护期或为后续版本发布做准备。

---

## 2. Releases

**今日无新版本发布。** 过去 24 小时内项目未发布任何版本。

---

## 3. 项目进展

| 类型 | 数量 | 详情 |
|------|-------|---------|
| **开启的 PR** | 1 | 依赖更新 |
| **合并/关闭的 PR** | 0 | — |

**进行中的 Pull Request：**

- **[#8168](https://github.com/nearai/ironclaw/pull/8168)** — `[dependencies, rust] chore(deps): bump zip from 8.6.0 to 9.0.5`
  - **作者：** dependabot[bot]
  - **创建/更新时间：** 2026-11-04
  - **摘要：** 将 `zip` crate 从 8.6.0 版本升级至 9.0.5，引入上游 `zip-rs/zip2` 项目的 bug 修复和改进。
  - **状态：** Open，等待维护者审核

---

## 4. 社区热点

**今日无活跃讨论。** 在报告周期内，无 issues 或 pull requests 获得显著的社区关注（评论或 reactions）。

---

## 5. Bugs 与稳定性

**今日无 bugs 或稳定性问题报告。** 无 issue 活动记录表明目前没有用户或贡献者报告回归问题、崩溃或严重错误。

---

## 6. 需求 & 路线图信号

**今日无需求记录。** 当前 issue 队列中无社区建议或增强提案。

---

## 7. 用户反馈摘要

**今日无用户反馈记录。** 无新增 issues 表明目前无用户报告痛点、用例讨论或满意度/不满意度信号。

---

## 8. 待办事项关注

以下事项基于近期活动模式被标记为待维护者关注：

| 事项 | 链接 | 状态 | 备注 |
|------|------|--------|---------|
| 依赖更新 | [#8168](https://github.com/nearai/ironclaw/pull/8168) | Open | 等待审核合并 `zip` crate 升级（8.6.0 → 9.0.5） |

**建议：** 应尽快审核并合并 Dependabot 的 #8168 PR，以确保项目与上游 bug 修复和安全补丁保持同步。

---

*End of Digest*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate a technical report from English to Simplified Chinese. Let me carefully translate this following all the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly
3. Keep URLs, links, numbers, dates verbatim
4. Keep project names, usernames, version tags, etc. as-is
5. Use natural technical Chinese register

Let me translate section by section:

**Title:**
QwenPaw 项目日报 — 2026-11-05

**Repository:**
Repository: → 仓库：
Report Date: → 报告日期：

**1. Today's Overview → 1. 今日概览**
"high development velocity" → 高开发活跃度
"closed-to-open issue ratio" → 已关闭与新开 Issue 比例
"High activity - 10 issues and 50 PRs updated" → 高活跃度——过去 24 小时内有 10 个 Issue 和 50 个 PR 获得更新
"No new releases" → 今日无新版本发布
"moderate health" → 健康度中等

**2. Releases → 2. 版本发布**
"No new releases" → 今日无新版本发布
"v2.3.0-beta.2" stays as-is

**3. Project Progress → 3. 项目进展**
"Merged / Closed PRs" → 已合并/已关闭的 PR
"feat" → feat（功能）
"fix" → fix（修复）
"Under review" → 审核中
"Open" → 开放
Size labels: XXXL stays as-is, XXL stays as-is, L stays as-is, M stays as-is, S stays as-is, XS stays as-is

**4. Community Hot Topics → 4. 社区热点**
"Most Active Issues" → 最高活跃度 Issue


"Hot PRs" → 高热度 PR
"Interest Driver" → 关注点
"Underlying Need Analysis" → 深层需求分析
"multi-workspace / multi-channel reliability" → 多工作空间/多渠道可靠性
"encoding & internationalization" → 编码与国际化的支持
"restricted environment compatibility" → 受限环境兼容性

**5. Bugs & Stability → 5. 缺陷与稳定性**
"Reported Bugs" → 已报告缺陷
"Apparent Severity" → 初步严重程度
"Critical Concern" → 重点关注
"fix PR?" → 是否有修复 PR？

**6. Feature Requests & Roadmap Signals → 6. 功能需求与路线图信号**
"User-Requested Features" → 用户请求的功能
"Viability" → 可行性
"Roadmap Signal" → 路线图信号
"chat storage reliability" → 聊天存储可靠性
"encoding robustness" → 编码健壮性
"cron job management" → 定时任务管理
"tool UX improvements" → 工具用户体验改进

**7. User Feedback Summary → 7. 用户反馈摘要**
"Pain Points" → 痛点
"Evidence" → 证据
"Frequency" → 出现频率
"Use Cases Highlighted" → 重点使用场景
"Satisfaction Signals" → 满意度信号
"good maintainer responsiveness" → 维护者响应及时

**8. Backlog Watch → 8. 待处理事项关注**
"Long-Unanswered / Important Issues" → 长期未响应/重要 Issue
"Notable Gap" → 明显缺口
"closed as 'won't fix'" → "won't fix" 状态关闭
"cross-referencing" → 交叉引用

Now I'll translate the full document, making sure the Chinese is natural and flows well while preserving all the markdown structure and technical details.

**Table translations:**

1. Merged / Closed PRs:
| PR | 作者 | 描述 | 规模 |

2. Significant PRs under review:
| PR | 作者 | 影响 | 状态 |

3. Most Active Issues:
| Issue | 标题 | 作者 | 评论数 | 趋势 |

4. Hot PRs:
| PR | 关注驱动 | 链接 |

5. User-Requested Features:
| 请求 | Issue | 可行性 | 链接 |

6. Long-Unanswered Issues:
| Issue | 时长 | 状态 | 优先级 | 链接 |

**Issue titles translation:**
- "DingTalk channel degrades to text when message >3500 chars (Markdown/tables fail)" → DingTalk 渠道消息超 3500 字符时降级为纯文本（Markdown/表格失效）
- "Hub Local runtime cannot start on Windows (AppContainer, CPU arch, reverse-tunnel)" → Hub 本地运行时无法在 Windows 上启动（AppContainer、CPU 架构、反向隧道）
- "Matrix channel plugin fails with multiple workspaces (10s startup window only covers first)" → Matrix 渠道插件多工作空间激活失败（10 秒启动窗口仅覆盖首个空间）
- "v2.3.0b2 crashes on restricted environment (fnOS sandbox)" → v2.3.0b2 在受限环境中崩溃（fnOS 沙箱）
- "dependency_maintenance bypasses $HOME" → dependency_maintenance 绕过 $HOME

**Bug titles:**
- "Code mode crash: tools with `name` parameter cause `TypeError`" → 代码模式崩溃：工具含 `name` 参数时触发 `TypeError`
- "Disabling a provider leaves stale agent run-config" → 禁用 Provider 后遗留陈旧代理运行配置
- "Hub Local runtime fails on Windows" → Hub 本地运行时在 Windows 上失败
- "Desktop window forced always-on-top" → 桌面窗口强制置顶
- "Memory tag index never rebuilds" → 内存标签索引永不重建
- "Matrix channel plugin activation fails" → Matrix 渠道插件激活失败
- "Default agent edit button disabled" → 默认代理编辑按钮被禁用
- "DingTalk degrades to plain text" → DingTalk 降级为纯文本

**Feature titles:**
- "Browser/OS-level notification push" → 浏览器/系统级通知推送
- "Append-only session storage" → 追加写入式会话存储
- "GBK/CP936 file decoding" → GBK/CP936 文件解码
- "Per-run cron sessions" → 每次运行独立定时会话
- "Stale daily notes surfaced as reminders" → 过期日记作为提醒浮出
- "OpenViking memory plugin" → OpenViking 内存插件

**Pain Points:**
- "DingTalk text degradation" → DingTalk 文本降级
- "Windows Hub failures" → Windows Hub 故障
- "Matrix multi-workspace" → Matrix 多工作空间问题
- "Desktop always-on-top" → 桌面窗口置顶问题
- "Provider disable staleness" → Provider 禁用后配置陈旧
- "Memory tag index 503" → 内存标签索引 503 错误

**Use Cases:**
- "Enterprise multi-channel" → 企业多渠道场景
- "Chinese enterprise Windows" → 中国企业 Windows 环境
- "Long-context data reporting" → 长文本数据报告
- "Cron automation" → 定时任务自动化

**Satisfaction Signals:**
- "Quick response" → 快速响应

**Table cells translation:**

- "Open" → 开放
- "Under Review" → 审核中
- "Closed ✅" → 已关闭 ✅
- "Open" → 开放
- "None" → 无
- "✅ Implemented" → ✅ 已实现
- "✅ Merged" → ✅ 已合并
- "✅ Under review" → ✅ 审核中
- "✅ Open" → ✅ 开放
- "None" → 无
- "None" → 无
- "No fix PR" → 无修复 PR
- "🔴 High" → 🔴 高
- "🟠 Medium" → 🟠 中
- "🟡 Low" → 🟡 低

**Severity levels:**
- "🔴 High" → 🔴 高
- "🟠 Medium" → 🟠 中
- "🟡 Low" → 🟡 低

**Status labels:**
- "Closed ✅" → 已关闭 ✅
- "Open" → 开放
- "Under Review" → 审核中
- "None" → 无

**Footer:**
"Digest generated from QwenPaw GitHub activity data for 2026-11-05. All issue/PR links point to https://github.com/agentscope-ai/QwenPaw." → 此日报基于 2026-11-05 的 QwenPaw GitHub 活动数据生成。所有 Issue/PR 链接指向 https://github.com/agentscope-ai/QwenPaw。
</think>


# QwenPaw 项目日报 — 2026-11-05

**仓库：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**报告日期：** 2026 年 11 月 5 日

---

## 1. 今日概览

2026-11-05，QwenPaw 呈现**高开发活跃度**，过去 24 小时内共有 10 个 Issue 和 50 个 PR 获得更新。今日无新版本发布。项目正处于多线并行修复状态，涵盖跨平台 Bug（Windows Hub、Matrix 插件）、用户可见的回归问题（桌面置顶、代码模式参数冲突），以及若干审核中的重大功能 PR（含一项聊天历史重构）。已关闭与新开 Issue 比例为 3:7，表明 Bug 分类与新报告涌入并行推进。整体健康度中等——存在多个中高严重级别问题，但维护团队响应迅速，正在针对具体问题推出修复方案。

---

## 2. 版本发布

**今日无新版本发布。** 项目当前仍维持在 v2.3.0-beta.2 稳定版。

---

## 3. 项目进展

### 已合并 / 已关闭的 PR（今日）

| PR | 作者 | 描述 | 规模 |
|----|--------|-------------|------|
| [#8573](https://github.com/agentscope-ai/QwenPaw/pull/8573) | Xinji-Mai | feat(local-models)：安装 Piccolo 运行时并选择模型来源 | XXL |
| [#8567](https://github.com/agentscope-ai/QwenPaw/pull/8567) | Luohh5 | fix(plugins)：修复平台依赖歧义 Bug | XXL |
| [#8575](https://github.com/agentscope-ai/QwenPaw/pull/8575) | jinglinpeng | fix(desktop)：将自动更新 manifest 限定为稳定版发布 | S |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | xypang33-sketch | feat(memory)：新增 OpenViking 内存插件 | XXL |

### 重点审核中 PR

| PR | 作者 | 影响 | 状态 |
|----|--------|--------|--------|
| [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) | zhijianma | **聊天历史全面重构**：追加写入式 SQLite 存储、分页历史记录、原生 Turn 分支 | 审核中（XXXL） |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | RerankerGuo | fix(providers)：将内联媒体上限从"每文件"改为"每请求"粒度控制 | 审核中（XXL） |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | Li-john1021 | fix(tools)：支持 GBK/CP936 解码，而非直接丢弃无法识别的字节 | 审核中（XXL） |
| [#8578](https://github.com/agentscope-ai/QwenPaw/pull/8578) | BeiMu-new | feat(tools)：将过期日记作为去重收件箱提醒展示 | 开放（L） |
| [#8557](https://github.com/agentscope-ai/QwenPaw/pull/8557) | ningblue | feat(crons)：每次运行独立会话，防止定时任务历史无限增长 | 审核中（M） |
| [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550) | xiong-wei1 | fix(providers)：写入路径上拒绝超出范围的模型配置值 | 审核中（M） |
| [#8582](https://github.com/agentscope-ai/QwenPaw/pull/8582) | zhaozhuang521 | fix(console)：保留新任务的项目目录 | 开放（M） |
| [#8583](https://github.com/agentscope-ai/QwenPaw/pull/8583) | rayrayraykk | fix(code-mode)：允许工具声明名为 `name` 的参数 | 开放（XS） |

**重要进展：** 聊天历史重构 PR（#8532，XXXL）是当前规模最大的活跃 PR，引入了持久化 SQLite 会话存储，将显著改善 Turn 分支和断线重连场景下的数据一致性。

---

## 4. 社区热点

### 最高活跃度 Issue（按评论数排序）

| Issue | 标题 | 作者 | 评论数 | 趋势 |
|-------|-------|--------|----------|-------|
| [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk 渠道消息超 3500 字符时降级为纯文本（Markdown/表格失效） | tecgic | 6 | **已关闭** ✅ |
| [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565) | Hub 本地运行时无法在 Windows 上启动（AppContainer、CPU 架构、反向隧道） | ysf7762-dev | 4 | 开放 |
| [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix 渠道插件多工作空间激活失败（10 秒启动窗口仅覆盖首个空间） | MCQSJ | 3 | 开放 |
| [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515) | v2.3.0b2 在受限环境中崩溃（fnOS 沙箱）——`dependency_maintenance` 绕过 `$HOME` | yaozy2020 | 3 | **已关闭** ✅ |

### 高热度 PR（按关注度/规模排序）

| PR | 关注驱动 | 链接 |
|----|-----------------|------|
| #8532 | 规模最大的活跃 PR；将重塑聊天存储底层架构 | [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) |
| #8034 | 内联媒体按请求粒度控制（当前存在基于 Token 的驱逐漏洞） | [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) |
| #8234 | 中国 Windows 用户迫切需要的 GBK/CP936 编码修复 | [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) |

**深层需求分析：** 热点话题集中在三个方向：
1. **多工作空间/多渠道可靠性** — Matrix、DingTalk、Hub Local 问题表明插件/渠道层在用户扩大部署规模时承受较大压力。
2. **编码与国际化** — GBK/CP936 修复反映出项目在中国企业用户群体中的渗透率在提升。
3. **受限环境兼容性** — 沙箱环境（fnOS、AppContainer）正成为新的目标部署场景。

---

## 5. 缺陷与稳定性

### 已报告缺陷（按初步严重程度排序）

| 初步严重程度 | Issue | 概述 | 是否有修复 PR |
|----------|-------|---------|---------|
| 🔴 高 | [#8581](https://github.com/agentscope-ai/QwenPaw/issues/8581) | **代码模式崩溃**：工具含 `name` 参数时触发 `TypeError: multiple values for argument 'name'` | [#8583](https://github.com/agentscope-ai/QwenPaw/pull/8583) 已提交 |
| 🔴 高 | [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579) | 禁用 Provider 后遗留陈旧代理运行配置——渠道静默失败，报 `ProviderError: Provider is disabled` | 无 |
| 🟠 中 | [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565) | Hub 本地运行时在 Windows 上启动失败（AppContainer 技能暂存、CPU 架构缺失、反向隧道超时） | [#8577](https://github.com/agentscope-ai/QwenPaw/pull/8577) 部分缓解 token argv 问题 |
| 🟠 中 | [#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560) | 桌面窗口被强制置顶（WS_EX_TOPMOST）——2.3.0-beta.2 中遮盖全屏应用，且无 UX 开关 | 无 |
| 🟠 中 | [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) | 内存标签索引永不重建——`/memory/tags` 返回 503 "unavailable" | 无 |
| 🟡 低 | [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix 渠道插件多工作空间激活失败（10 秒启动窗口仅覆盖首个空间） | [#8558](https://github.com/agentscope-ai/QwenPaw/pull/8558) |
| 🟡 低 | [#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576) | Console 中默认代理编辑按钮被禁用，但 PUT API 实际上支持编辑 | 无 |
| 🟡 低 | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk 消息超 3500 字符即降级为纯文本——**已关闭，但修复 PR 尚未合并** | 无 |

**重点关注：** Issue #8581（代码模式崩溃）已有修复 PR #8583 提交，但属今日新报。Issue #8579（Provider 禁用后配置陈旧）无修复 PR 且导致渠道静默失败——属于可靠性隐患。

---

## 6. 功能需求与路线图信号

### 用户请求的功能

| 请求 | Issue | 可行性 | 链接 |
|---------|-------|-----------|------|
| 浏览器/系统级通知推送（待审批事项提醒） | [#8460](https://github.com/agentscope-ai/QwenPaw/issues/8460) | ✅ 已实现（Console 组件） | 已合并 |
| 追加写入式会话存储 + 分页历史 + Turn 分支 | [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) | ✅ 审核中（XXXL PR） | PR |
| GBK/CP936 文件解码（适配中国 Windows 工具） | [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | ✅ 审核中（XXL PR） | PR |
| 每次运行独立定时会话，防止历史无限增长 | [#8557](https://github.com/agentscope-ai/QwenPaw/pull/8557) | ✅ 审核中（M PR） | PR |
| 过期日记浮出作为收件箱提醒 | [#8578](https://github.com/agentscope-ai/QwenPaw/pull/8578) | ✅ 开放（L PR） | PR |
| OpenViking 内存插件 | [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | ✅ 今日已合并 | PR |

**路线图信号：** 当前审核中的 PR 群（#8532、#8034、#8234、#8236、#8557、#8578）预示下一版本将重点聚焦**聊天存储可靠性**、**编码健壮性**、**定时任务管理**和**工具用户体验改进**。OpenViking 内存插件的合并表明项目对第三方内存后端持开放态度、集成响应积极。

---

## 7. 用户反馈摘要

### 痛点

| 痛点 | 证据 | 出现频率 |
|------------|----------|-----------|
| **DingTalk 文本降级** — 消息超长后格式静默丢失 | #8278（6 条评论，已关闭） | 数据报告/表格场景中频繁出现 |
| **Windows Hub 故障** — Windows 10/11 上无法启动本地运行时 | #8565（4 条评论） | 各 Windows 环境一致复现 |
| **Matrix 多工作空间问题** — 插件在 >1 个工作空间使用时激活失败 | #8538（3 条评论） | 多工作空间用户受影响 |
| **桌面窗口置顶** — 遮盖全屏应用，2.3.0-beta.2 中无切换开关 | #8560（2 条评论） | 2.3.0-beta.2 回归问题 |
| **Provider 禁用后配置陈旧** — 禁用后渠道静默失败 | #8579（1 条评论） | 对生产部署影响较大 |
| **内存标签索引 503** — ReMe 自动标签生成后标签不可读 | #8580（1 条评论） | 使用 ReMe 自动标签功能时触发 |

### 重点使用场景

- **企业多渠道运营**：用户同时在 DingTalk、飞书、微信、Matrix 上运行多个工作空间——插件隔离机制至关重要。
- **中国企业 Windows 环境**：GBK/CP936 编码、AppContainer 沙箱、受限 `$HOME` 环境均为常见部署前提。
- **长文本数据报告**：DingTalk 消息中的表格和 Markdown 是核心企业用例，目前受 3500 字符限制阻断。
- **定时任务自动化**：每次运行独立会话隔离是防止历史无限增长的实际需求。

### 满意度信号

- 浏览器/系统级通知功能（#8460）已**合并**，表明功能与用户需求契合。
- OpenViking 内存插件合并表明社区贡献受到欢迎且整合迅速。
- 代码模式崩溃（#8581 → #8583）同日提交修复 PR，维护团队响应及时。

---

## 8. 待处理事项关注

### 需要维护团队关注的长期待处理/重要 Issue

| Issue | 时长 | 状态 | 优先级 | 链接 |
|-------|-----|--------|----------|------|
| DingTalk 消息超 3500 字符文本降级 | 约 20 天（自 2026-10-16 起） | 已关闭但**无对应修复 PR 合并** | 🔴 高 | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) |
| Provider 禁用后配置陈旧（渠道静默失败） | 1 天 | 开放，无修复 PR | 🔴 高 | [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579) |
| 桌面窗口置顶回归问题 | 2 天 | 开放 | 🟠 中 | [#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560) |
| 内存标签索引 503 | 1 天 | 开放 | 🟠 中 | [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) |
| Ollama context window 大小未从 `num_ctx` 读取 | 约 22 天（自 2026-10-14 起） | 审核中 | 🟠 中 | [#8236](https://github.com/agentscope-ai/QwenPaw/issues/8236) |

**明显缺口：** Issue #8278（DingTalk 文本降级）已关闭但未见对应修复 PR。若为 "won't fix" 决定，应向报告人说明原因。若修复存在于其他位置，需要交叉引用对齐。

---

*此日报基于 2026-11-05 的 QwenPaw GitHub 活动数据生成。所有 Issue/PR 链接指向 https://github.com/agentscope-ai/QwenPaw。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Preserve all Markdown structure exactly - headings, tables, lists, etc.
2. Keep URLs, link targets, code spans, code blocks, numbers, and dates verbatim
3. Keep project names, repository slugs, usernames, version tags, file paths, and API/config identifiers in their original form
4. Keep issue/PR references like #12345 and their link text as-is
5. Use natural technical Chinese - not literal word-for-word translation

Let me go through the document section by section and translate it naturally into Chinese technical register.

Key terms to consider:
- "Digest" - 技术摘要/项目速览
- "Overview" - 概览
- "Release" - 发布版本
- "PR" - PR（保持英文，Pull Request的缩写）
- "Issue" - Issue/问题单
- "Merged/Closed" - 已合并/已关闭
- "Feature Requests" - 功能请求
- "Bug" - 缺陷/bug
- "Severity" - 严重程度/优先级
- "Hot Topics" - 热门话题
- "User Feedback" - 用户反馈
- "Backlog Watch" - 待办关注

Let me translate carefully, maintaining the natural Chinese technical writing style:
</think>


# ZeroClaw 项目技术摘要 — 2026-11-05

## 1. 今日概览

ZeroClaw 今日保持较高的开发活跃度，过去 24 小时内共有 **50 条 PR 和 21 个 Issue** 更新。今日无新版本发布，但 **4 个 PR 已合并**，其中包含多项关键安全修复。项目正在集中解决多个高危内存隔离漏洞（P0/P1），这些漏洞分散在多个 Issue 中，现已统一归并到修复 PR。通道基础设施扩展持续推进，XMPP、Zulip 和 SSH 传输层相关工作正在并行开展，同时团队优先处理 Dashboard 侧的 OIDC 安全加固和基于主体的访问控制。

---

## 2. 发布版本

**今日无新版本发布。**

根据当前多个标记有 `release:v0.9.0` 标签的 PR 状态判断，项目正在积极开发 `v0.9.0` 版本的功能。

---

## 3. 项目进展

### 已合并/已关闭的 PR（4 个）

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#12213](https://github.com/zeroclaw-labs/zeroclaw/pull/12213) | **fix(gateway): 强制执行 `[gateway.pairing_dashboard]` 的配对限制** | 修复 bug #9394 — 配对 Dashboard 配置此前被接受但从未实际读取；现已正确实现配对码过期机制 |
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | **fix(memory): 隔离自有会话的子 Agent 和 Pipeline 内存** | 修复 #11198 和 #11239 — 关闭了委托 Agent 主体作用域泄漏的关键安全漏洞 |
| [#12237](https://github.com/zeroclaw-labs/zeroclaw/pull/12237) | **fix(sop): 当决策结果不可用时切换至 fail-closed 模式** | 提升 SOP 决策处理的安全性 |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | **fix(runtime): 限制非管理员主体使用会话数据相关工具** | 安全加固 — 限制敏感工具的访问权限 |

### 值得关注的新开 PR

| PR | 描述 | 规模 | 风险 |
|----|-------------|------|------|
| [#12232](https://github.com/zeroclaw-labs/zeroclaw/pull/12232) | **fix(security): 限制非管理员主体使用不支持主体感知能力的工具和 SOP 执行** | XL | HIGH |
| [#12233](https://github.com/zeroclaw-labs/zeroclaw/pull/12233) | **fix(gateway): 对配置路由组中的 OIDC Bearer Token 进行校验并设置上限** | L | HIGH |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | **feat(channels): 新增原生 Rust XMPP 实现，可选支持旧版 OMEMO** | XL | HIGH |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | **feat(plugins): 支持多插件注册源** | XL | — |
| [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) | **feat(gateway): 通过核心模块实现作用域化的 Dashboard 聊天功能** | XL | HIGH |
| [#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186) | **feat(rpc): 新增 zeroclaw-rpc-client 和进程内 Gateway 传输层** | XL | MEDIUM |
| [#11805](https://github.com/zeroclaw-labs/zeroclaw/pull/11805) | **fix(cli): 在 Windows 上发送授权编辑前验证命名管道服务器** | XL | HIGH |

---

## 4. 社区热点

### 互动量最高的 Issue（按评论数排序）

1. **[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)** — RFC：追加式会话事件历史与确定性状态回放 — **15 条评论**  
   *作者：NiuBlibing | 状态：CLOSED | 风险：HIGH*  
   提议将会话持久化架构从可变消息改为追加式事件流，并支持确定性状态回放。该 RFC 代表了一个重要的架构演进方向，社区正在积极讨论。

2. **[#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)** — gateway.pairing_dashboard 配置被接受但从未读取，配对码永不失效 — **5 条评论**  
   *作者：belumume | 状态：CLOSED | P1, HIGH*  
   关键安全缺陷；**已在 PR #12213 中修复**。

3. **[#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)** — 功能请求：新增 Zulip 通道（长轮询事件 MVP）— **5 条评论**  
   *作者：theonlyhennygod | 状态：OPEN*  
   Zulip 集成需求持续增长；该需求与近期已合并的 Rocket.Chat 通道属于同一功能脉络。

4. **[#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)** — 委托内存工具丢失主体作用域 — **5 条评论**  
   *作者：Audacity88 | 状态：CLOSED | P0, HIGH*  
   **已在 PR #11266 中修复**。

5. **[#12109](https://github.com/zeroclaw-labs/zeroclaw/issues/12109)** — 功能请求：多插件仓库支持 — **2 条评论**  
   *作者：seungjin | 状态：OPEN*  
   社区需求强烈；**相关 PR #12216 已开放**。

### 用户核心诉求分析

- **安全性与隔离性**：[#10526](#10526)、[#11198](#11198)、[#11239](#11239)、[#12232](#12232) 等多条线索均指向对主体/多租户隔离能力的强烈需求。用户关注的核心是跨会话和委托场景下的数据泄漏问题。
- **通道多样化**：[#6437](#6437) 的 Zulip 和 [#11847](#11847) 的 XMPP 表明用户希望支持更多协议，超越现有通道的能力边界。
- **插件生态**：[#12109](#12109) 的多仓库请求说明用户期望引入第三方插件，反映出项目正在向平台化方向演进。

---

## 5. 缺陷与稳定性

### 严重/高危缺陷（开放中）

| Issue | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | Debug Gateway 的 WebSocket 导致 Tokio Worker 栈溢出 | P1, HIGH | OPEN |
| [#12119](https://github.com/zeroclaw-labs/zeroclaw/issues/12119) | Windows Shell/技能超时仅终止解释器，子进程持续存活 | S2, MEDIUM | OPEN |

### 中等严重缺陷（开放中）

| Issue | 描述 | 严重程度 | 状态 |
|-------|-------------|----------|--------|
| [#12236](https://github.com/zeroclaw-labs/zeroclaw/issues/12236) | 测试运行时之间共享缓存的 HTTP 客户端 → Mock 失效 | S3, LOW | OPEN |
| [#12235](https://github.com/zeroclaw-labs/zeroclaw/issues/12235) | 委托 Agent 返回原始文本工具调用（native_tools 被忽略）| S2, MEDIUM | OPEN |
| [#12228](https://github.com/zeroclaw-labs/zeroclaw/issues/12228) | `cron update --agent` 报告成功但从未重新分配任务 | S2, MEDIUM | OPEN |
| [#12227](https://github.com/zeroclaw-labs/zeroclaw/issues/12227) | Shell 审批依赖模型生成的"approved"值 → 提示词不一致 | S2, MEDIUM | OPEN |
| [#12225](https://github.com/zeroclaw-labs/zeroclaw/issues/12225) | glob_search 无法列出工作区外允许根目录下的文件 | S2, MEDIUM | OPEN |

### 今日已修复（Closed）

| Issue | 修复 PR | 描述 |
|-------|--------|-------------|
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | [#12213](https://github.com/zeroclaw-labs/zeroclaw/pull/12213) | 配对码永不失效 |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | 内存工具丢失主体作用域 |
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/12266) | 自有会话泄漏至共享内存层 |
| [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | — | save_dirty 写入错误的 schema 版本号 |
| [#12210](https://github.com/zeroclaw-labs/zeroclaw/issues/12210) | — | Docker 构建时 fixture 复制失败 |
| [#12218](https://github.com/zeroclaw-labs/zeroclaw/issues/12218) | — | Windows Clippy 变更检测器超时 |

**稳定性评估**：今日的 PR 合并显著提升了安全态势。剩余开放 Issue 大多为 S2 级别的降级问题，而非服务崩溃。Windows 平台问题呈现反复出现的趋势（Shell 超时、命名管道授权）。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

| Issue | 描述 | 需求热度 | 纳入 v0.9.0 的可能性 |
|-------|-------------|---------------|----------------------|
| [#12109](https://github.com/zeroclaw-labs/zeroclaw/issues/12109) | 多插件注册仓库 | PR #12216 正在进行 | **HIGH** |
| [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | 非管理员 OIDC 用户的 Dashboard 聊天功能 | PR #11986 堆叠依赖 | **HIGH** |
| [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | Zulip 通道集成 | 5 条评论，长期需求 | MEDIUM |
| [#11954](https://github.com/zeroclaw-labs/zeroclaw/issues/11954) | 支持异步/同步模式的长时运行 Shell 任务 | 1 条评论 | MEDIUM |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | 原生 Rust XMPP 与 OMEMO 支持 | 大型 PR 审核中 | **HIGH** |

### 路线图信号

- **主体感知架构**：RFC（#10526）和安全修复表明项目正在推动更深层次的架构演进，方向是确定性状态回放和更强的多租户隔离能力。
- **通道多元化**：XMPP（#11847）、Zulip（#6437）、以及 WeChat/WeCom/Lark 通道的活跃工作暗示协议支持正在扩展。
- **RPC/Gateway 现代化**：[#11165](#11165)、[#11186](#11186)、[#11986](#11986) 等 PR 代表了 v0.9.0 版本的重大基础设施升级。

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 严重程度 |
|-------|----------|----------|
| **Windows 平台缺陷** | Shell 超时子进程残留（#12119）、命名管道安全（#11805）、Clippy 超时（#12218）| HIGH |
| **内存隔离隐患** | 多个安全缺陷（#11198、#11239）反映出用户对数据隔离的信任问题 | CRITICAL |
| **插件生态受限** | 单仓库限制阻碍第三方插件接入（#12109）| MEDIUM |
| **Dashboard 访问控制** | 非管理员用户完成 OIDC 登录后无法使用聊天功能（#11984）| MEDIUM |

### 用例与满意度

- **正面**：OIDC Dashboard 登录（#11961）已合并 — 使用企业身份提供商的用户的体验更加流畅。
- **正面**：多通道支持（Rocket.Chat 已合并、Zulip/XMPP 进行中）表明用户将 ZeroClaw 视为统一 Agent 接入平台的意愿强烈。
- **负面**：Cron 任务更新缺陷（#12228）— 用户无法可靠地重新分配定时任务。

---

## 8. 待办关注

### 长期未响应的重要 Issue

| Issue | 存在时间 | 描述 | 优先级 |
|-------|-----|-------------|----------|
| [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | 约 6 个月 | Zulip 通道请求 | P2 |
| [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | 约 3 个月 | WebSocket 栈溢出 | P1, HIGH |
| [#11954](https://github.com/zeroclaw-labs/zeroclaw/issues/11954) | 约 2 周 | 长时运行 Shell 任务 | enhancement |

### 需要维护者关注的 PR

| PR | 规模 | 风险 | 开放天数 | 阻塞状态 |
|----|------|------|-----------|----------------|
| [#11847](#11847)（XMPP）| XL | HIGH | 约 17 天 | 等待审核 |
| [#11805](#11805)（Windows 安全）| XL | HIGH | 约 19 天 | 等待维护者审核 |
| [#11186](#11186)（RPC 客户端）| XL | MEDIUM | 约 40 天 | 依赖 #11165 |
| [#11986](#11986)（作用域化 Dashboard 聊天）| XL | HIGH | 约 14 天 | 依赖前置 PR |

**维护者备注**：多个 XL 规模的安全和架构类 PR 已开放 2-6 周。建议优先处理 #11805（Windows 命名管道安全）和 #11847（XMPP 通道），鉴于其风险等级和社区关注度。

---

*本摘要为 ZeroClaw（zeroclaw-labs/zeroclaw）项目生成 — 2026-11-05*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*