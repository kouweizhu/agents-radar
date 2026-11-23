# OpenClaw 生态日报 2026-11-23

> Issues: 397 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-23 03:01 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English technical report about the OpenClaw project into Simplified Chinese. I need to:

1. Translate all the English text into Simplified Chinese
2. Keep all markdown structure intact
3. Preserve tables, lists, bold text, emojis, etc.
4. Keep URLs, version tags, usernames, issue/PR numbers as-is
5. Use natural technical Chinese register

Let me go through this systematically section by section.

**Section 1: Today's Overview**
- "Today's Overview" → 今日概览
- "OpenClaw maintains high velocity with" → OpenClaw 保持高开发节奏
- "500 PRs and 397 Issues tracked" → 500 个 PR 和 397 个 Issue
- "indicating a very active development cycle" → 表明项目处于非常活跃的开发周期中
- "The project shipped v2026.11.7" → 项目发布了 v2026.11.7
- "with a critical conversation recovery fix" → 包含关键对话恢复修复
- "Community engagement is strong" → 社区参与活跃
- "Telegram adapter reliability" → Telegram 适配器可靠性
- "memory indexing at scale" → 大规模内存索引
- "Windows stability" → Windows 稳定性
- "session lifecycle management" → 会话生命周期管理
- "dominate today's discussions" → 是今日讨论的焦点
- "The bug queue shows" → 缺陷队列显示
- "P0/P1 regressions" → P0/P1 级别回归
- "affecting production deployments" → 影响生产部署
- "while the PR pipeline advances" → 同时 PR 管道推进了
- "multi-channel Slack improvements" → 多频道 Slack 改进

**Section 2: Releases**


- "Project Progress" → 项目进展
- "Merged/Closed PRs Today" → 今日合并/关闭的 PR
- "Open PRs Advancing" → 进行中的公开 PR

**Section 3: Community Hot Topics**
- "Most Active Issues" → 最活跃的 Issue
- "Underlying Needs Analysis" → 深层需求分析

**Section 4: Bugs & Stability**
- "P0 / Release Blockers" → P0 / 发布阻塞
- "P1 Regressions" → P1 级别回归
- "Notable Fixes" → 值得注意的修复

**Section 5: Feature Requests & Roadmap**
- "High-Impact Feature Requests" → 高影响力功能请求
- "Features In Development" → 开发中的功能
- "Predicted Near-Term Focus" → 预测近期重点

**Section 6: User Feedback**
- "Persistent Pain Points" → 持续痛点
- "Positive Signals" → 积极信号
- "Use Cases Observed" → 观察到的用例

**Section 7: Backlog Watch**
- "Long-Unanswered Issues" → 长期未回复的 Issue
- "Stale Issues" → 长期未处理的 Issue
- "PRs Awaiting Review" → 待审查的 PR

**Section 8: Summary Metrics**
- "Summary Metrics" → 汇总指标
- "Generated" → 生成时间
- "Data source" → 数据来源

Now I need to translate the full report section by section, maintaining all formatting and technical terms while using natural Simplified Chinese technical language.
</think>


# OpenClaw 项目日报 — 2026-11-23

## 1. 今日概览

OpenClaw 保持高开发节奏，过去 24 小时内共有 **500 个 PR 和 397 个 Issue**，表明项目处于非常活跃的开发周期中。项目已发布 **v2026.11.7**，包含关键对话恢复修复，解决了 Gateway 重启时的工作丢失问题。社区在多个维度上表现出强劲参与度：Telegram 适配器可靠性、大规模内存索引、Windows 稳定性以及会话生命周期管理是今日讨论的焦点。缺陷队列显示多个 P0/P1 级别回归问题正在影响生产部署，同时 PR 管道稳步推进工作台、会话共享以及多频道 Slack 改进等工作。

---

## 2. 版本发布

### v2026.11.7 — "openclaw 2026.11.7"
**发布日期：** 2026-11-23

| 类别 | 详情 |
|----------|---------|
| **关键修复** | 对话恢复：跨 Gateway 重启恢复中断的回复和子结果，不丢失待处理工作 |
| **贡献者** | @steipete（主导）、@RomneyDa、@galiniliev、@vincentkoc |
| **涉及的 PR** | #198905、#201544、#200924、#200967 |
| **版本关闭** | PR #203880 在 main 分支上关闭 v2026.11.7，保留标签 `e31bbf056de321127988ec5c1a36ff1b59297de0` |

> **注意：** 根据提供的数据，发布说明在"可靠的自动化"部分之后被截断，内容超出可见范围。

---

## 3. 项目进展

### 今日合并/关闭的 PR（共 238 个）

| PR | 作者 | 描述 | 影响 |
|----|--------|-------------|---------|
| **#203888** | tideclaw-bot | fix(release): 部分发布后复用原始 ClawHub 字节 | 发布工具 |
| **#203522** ⭐ | huwei-xydt | fix: 阻止 Gateway 每次插件重载后内存增长 | **P1 内存泄漏** |
| **#203880** | tideclaw-bot | chore(release): 在 main 分支上关闭 v2026.11.7 | 版本发布 |
| **#203818** | tideclaw-bot | fix(ci): 为失败报告选择支持的运行时 | CI 加固 |
| **#203885** | tideclaw-bot | fix: 仅编排修复后复用发布证据 | 发布工具 |
| **#203838** | roboclaw-bot | fix: Cmd+K 中切换模型后保持 Send 可用 | Web UI |
| **#203879** | vyctorbrzezowski | test(ui): 测量 Gateway 标题网格轨道 | 测试覆盖率 |
| **#203063** | vincentkoc | feat: 按所有者或参与关系筛选共享会话 | 会话共享 |
| **#191138** | vincentkoc | feat(session-share): 按请求关系筛选共享目录 | 会话共享 |
| **#37823** | jiji262 | infra: 添加通用断路器 | 基础设施 |

### 进行中的公开 PR（重点）

| PR | 作者 | 规模 | 状态 | 描述 |
|----|--------|------|--------|-------------|
| **#203889** | roboclaw-bot | S | NEW | fix(ios): End Talk 后保持已接受的工作运行 |
| **#203881** | stevenlee-oai | M | NEW | feat: 让部署管理 Gateway 技能变更 |
| **#203883** | vincentkoc | S | ready | fix(test): 识别成功的无操作版本更新 |
| **#198919** | vincentkoc | XL | ready | test: 精简基础设施状态和定时诊断 |
| **#203839** | vincentkoc | XL | ready | fix(ci): 统一 gateway 所有权和修复生命周期 fixtures |
| **#203790** | jalehman | L | ready | improve: 防止精简 Gateway 首次启动时内存耗尽 |
| **#203237** | roboclaw-bot | XL | ready | feat: 在模型中重命名已保存的模型账户 |
| **#163267** | shannon0430 | XL | needs proof | feat(sessions): 允许同频道线程召回而不暴露代理级别可见性 |
| **#192350** | miguelbranco80 | XL | review | refactor(github): 将仓库集成迁移为插件 |

---

## 4. 社区热点

### 最活跃的 Issue（按评论数排序）

| # | 标题 | 评论数 | 作者 | 优先级 | 链接 |
|---|-------|----------|--------|----------|------|
| **#197083** | 安装后 Doctor WAL 发布验证导致 11.3 更新部分完成 | **33** | Staruy | P0 | [Issue](https://github.com/openclaw/openclaw/issues/197083) |
| **#150635** | 短期召回保留每夜驱逐已召回条目，深度梦境阶段永不提升 | **30** | marknilsn | P2 | [Issue](https://github.com/openclaw/openclaw/issues/150635) |
| **#182891** | Prompt 缓存从未被复用 — 每次请求时 `cache read dropped N -> 0` | **26** | croccio | P1 | [Issue](https://github.com/openclaw/openclaw/issues/182891) |
| **#200606** | 2026.11.5 候选版本 Doctor 因插件迁移冲突阻止更新 | **21** | Fuma2013 | P1 | [Issue](https://github.com/openclaw/openclaw/issues/200606) |
| **#141474** ✅ | Collector 子调用 sessions_yield 导致 agents_wait 永久挂起 | **19** | potterdigital | P2 | [Issue](https://github.com/openclaw/openclaw/issues/141474) |

> ✅ = **已关闭** — 通过 #164445 在 v2026.11.5/6 中修复

### 深层需求分析

1. **数据库迁移可靠性**（#197083，33 条评论）：用户报告升级失败导致系统处于不一致状态。社区需要更健壮的回滚机制和更清晰的失败诊断。

2. **内存架构**（#150635，30 条评论）：短期召回驱逐阻止深度记忆提升的长期架构问题。用户希望跨会话持久化学习。

3. **性能优化**（#182891，26 条评论）：Prompt 缓存失效导致每次请求重复消耗 token。用户寻求跨提供商调用的一致缓存行为。

4. **更新流程信任**（#200606、#200224）：多个关于候选版本更新验证失败的问题，表明升级管道需要在上线前加强。

---

## 5. 缺陷与稳定性

### P0 / 发布阻塞（活跃中）

| # | 标题 | 严重级别 | 创建时间 | 评论数 | 状态 |
|---|-------|----------|---------|----------|--------|
| **#197083** | WAL 发布验证导致更新部分完成 | P0 🦪 | 2026-11-11 | 33 | **进行中** — 等待修复 |
| **#158912** | 2026.9.6 版本启动时不再注入 MEMORY.md | P0 🦐 | 2026-09-26 | 11 | **进行中** — 文档与行为不匹配 |
| **#146860** | Windows：托管更新交接因 InteractiveToken 卡住 | P0 🦐 | 2026-09-13 | 12 | **进行中** — Windows 特定问题 |
| **#190563** | 无法恢复已暂停的 Codex 对话：provider 审核/原生线程不匹配 | P0 🦞 | 2026-11-01 | 12 | **进行中** — 回归问题 |
| **#201468** | macOS 启动提示在捆绑 CLI 拒绝架构迁移时给出通用步骤 | P0 🦞 | 2026-11-18 | 7 | **进行中** |

### P1 级别回归（活跃中）

| # | 标题 | 严重级别 | 创建时间 | 评论数 | 链接 |
|---|-------|----------|---------|----------|------|
| **#196199** | Codex 助手补全无法恢复父级，导致目标暂停 | P1 🦪 | 2026-11-09 | 14 | [Issue](https://github.com/openclaw/openclaw/issues/196199) |
| **#155563** | 成功代理轮次后保留 service-child 中继/锚点（2026.9.5） | P1 🦪 | 2026-09-22 | 18 | [Issue](https://github.com/openclaw/openclaw/issues/155563) |
| **#170928** | Windows 2026.10.2 gateway 需要 7–9 分钟才能就绪 | P1 🦪 | 2026-10-13 | 10 | [Issue](https://github.com/openclaw/openclaw/issues/170928) |
| **#182891** | Prompt 缓存从未被复用 | P1 🦪 | 2026-10-24 | 26 | [Issue](https://github.com/openclaw/openclaw/issues/182891) |
| **#125764** | Telegram 适配器：网络失败的外发消息单次尝试后进入死信队列 | P1 🦞 | 2026-08-18 | 16 | [Issue](https://github.com/openclaw/openclaw/issues/125764) |

### 已修复的重要问题

| # | 标题 | 修复 PR | 包含版本 |
|---|-------|---------|-------------|
| **#141474** | sessions_yield 导致 agents_wait 永久挂起 | #164445 | v2026.11.5、v2026.11.6 |
| **#195279** | 后台执行完成唤醒失败并报权限错误 | — | 审查中 |

### 今日修复的内存泄漏
> **#203522**（PR 已合并）：阻止 Gateway 每次插件重载后内存增长 — 解决 #198802

---

## 6. 功能需求与路线图信号

### 高影响力功能请求（按参与度排序）

| # | 标题 | 评论数 | 作者 | 标签 | 链接 |
|---|-------|----------|--------|--------|------|
| **#192632** | Claude 网页搜索 provider（Anthropic 服务端 web_search） | 16 | Will-Xv | enhancement、P2 | [Issue](https://github.com/openclaw/openclaw/issues/192632) |
| **#184803** | Talk：代理咨询通话时关闭语音任务回执选项 | 10 | Pkieffaber-dotcom | P3、feature | [Issue](https://github.com/openclaw/openclaw/issues/184803) |
| **#151178** | 让 Active Memory 将升级决策委托给插件 provider | 10 | fransqaas | P2、off-meta | [Issue](https://github.com/openclaw/openclaw/issues/151178) |
| **#103067** | 集中化聊天会话命名；定义子代理生命周期和跨频道持久化 | 11 | karkarl | P2、stale | [Issue](https://github.com/openclaw/openclaw/issues/103067) |
| **#133709** | 将后台 ACP 会话的权限请求展示为审批项 | 7 | TheArchitectit | P2、security | [Issue](https://github.com/openclaw/openclaw/issues/133709) |

### 开发中的功能（公开 PR）

| PR | 功能 | 准备就绪状态 |
|----|---------|-----------|
| **#203237** | 在 Models UI 中重命名已保存的模型账户 | 等待维护者审查 |
| **#163267** | 同频道线程召回而不暴露代理级别可见性 | 需要提供证明 |
| **#192350** | GitHub 仓库集成 → 捆绑插件 | 需要审查 |
| **#177555** | Slack：显式 @ 提及选项以停止无标签机器人循环 | 需要提供证明 |
| **#127770** | 显式 OpenAI 原生 PDF 文档 opt-in | 等待维护者响应 |

### 预测近期重点
基于评论量和 PR 动力：
1. **内存系统改进** — 召回驱逐（#150635）、Active Memory 升级（#151178）
2. **会话共享增强** — 关系筛选已落地；同频道可见性进行中
3. **Windows/macOS 稳定性** — 多个 P0 问题表明平台一致性是优先事项
4. **Gateway 资源管理** — 内存泄漏已修复；精简配置文件改进待完成

---

## 7. 用户反馈摘要

### 持续痛点

| 主题 | 证据 | 情绪 |
|-------|----------|-----------|
| **升级脆弱性** | #197083、#200606、#200224、#187917 | ⚠️ **负面** — 用户报告更新后系统故障 |
| **大规模内存索引失败** | #196505 | ⚠️ **负面** — 864 MiB 语料库失败，205 MiB 成功 |
| **Windows 就绪延迟** | #170928、#146860 | ⚠️ **负面** — 启动需 7–9 分钟，定时任务问题 |
| **Telegram 消息丢失** | #125764、#112313 | ⚠️ **负面** — 进入死信队列后无恢复路径 |
| **会话状态损坏** | #160719、#160494 | ⚠️ **负面** — 无法终止的僵尸会话 |
| **Prompt 缓存失效** | #182891 | ⚠️ **负面** — 每次请求浪费 token |

### 积极信号

| 主题 | 证据 | 情绪 |
|-------|----------|-----------|
| **对话恢复** | v2026.11.7 发布 | ✅ **正面** — 解决了主要数据丢失问题 |
| **内存泄漏修复** | #203522 已合并 | ✅ **正面** — 长时间运行 Gateway 稳定性 |
| **会话共享筛选** | #203063、#191138 | ✅ **正面** — 企业可用性改进 |
| **iOS Talk 连续性** | #203889 开放中 | ✅ **正面** — 语音用户体验 |

### 观察到的用例
- **企业部署**：多代理配置（报告有 35 个代理）、大型 SQLite 存储（284 MB）、定时任务绑定的持久会话
- **语音/实时**：xAI Talk 对话、iOS 语音笔记、Talk 实时会话
- **内存密集型**：大型语料库索引、深度召回工作流、会话转录夜间摄入

---

## 8. 待办队列关注

### 长期未回复的 Issue（需维护者关注）

| # | 标题 | 存在时间 | 评论数 | 优先级 | 待处理事项 |
|---|-------|-----|----------|----------|---------|
| **#103067** | 集中化聊天会话命名；定义子代理生命周期 | 4+ 个月 | 11 | P2 | 需要产品决策 |
| **#130257** | 任务账本未记录委托 ACP 运行的 token | 3+ 个月 | 10 | P2 | 成本归属缺口 |
| **#114067** | 带插件密钥的 root help 消耗约 35 倍成本 | 4+ 个月 | 9 | P2 | 性能回归 |
| **#128140** | memory_search 工具始终超时（15s） | 3+ 个月 | 13 | P1 | 需要信息/复现步骤 |
| **#138972** | Talk 实时：工具结果完成前会话变为"Unknown" | 2.5+ 个月 | 7 | P1 | 会话生命周期 |
| **#142116** | 重启恢复失败导致 Telegram 通道入口卡死 | 2.5+ 个月 | 9 | P1 | 需要信息 |
| **#156070** | Codex 原生补全创建重复最终回复 | 2+ 个月 | 7 | P2 | 行为缺陷 |

### 长期未处理 Issue（低参与度，可能需要关闭）

| # | 标题 | 存在时间 | 评论数 | 原因 |
|---|-------|-----|----------|--------|
| **#118793** | Claude CLI 会话限制错误直接失败而非故障转移 | 3.5+ 个月 | 14 | 可能已解决 |
| **#112313** | 死信队列条目永久存在 | 4+ 个月 | 14 | 需要产品决策 |
| **#160494** | 绑定到持久会话的定时运行在准入时被拒绝 | 2+ 个月 | 11 | 需要信息 |
| **#103067** | 集中化聊天会话命名 | 4+ 个月 | 11 | 需要产品决策 |

### 待审查的 PR

| PR | 标题 | 存在时间 | 规模 | 状态 | 阻塞因素 |
|----|-------|-----|------|--------|---------|
| **#192350** | GitHub 仓库集成 → 插件 | 20 天 | XL | review | SDK 基础（#192349） |
| **#163267** | 同频道线程召回 | 52 天 | XL | needs proof | 测试覆盖率 |
| **#127770** | OpenAI 原生 PDF opt-in | 93 天 | L | waiting on maintainer | 维护者带宽 |
| **#177555** | Slack 显式 @ 提及 | 35 天 | L | needs proof | 测试覆盖率 |

---

## 汇总指标

| 指标 | 数值 | 趋势 |
|--------|-------|-------|
| **总 Issue 数** | 397（322 个开放） | 活跃 |
| **总 PR 数** | 500（262 个开放） | 高速度 |
| **24 小时发布数** | 1（v2026.11.7） | ✅ 已发布 |
| **P0 Issue** | 5 个活跃 | ⚠️ 偏高 |
| **P1 Issue** | 8+ 个活跃 | ⚠️ 偏高 |
| **24 小时合并 PR** | ~238 | ✅ 健康 |
| **热点 Issue 平均年龄** | 2–4 周 | 社区参与积极 |

---

*生成时间：2026-11-23 | 数据来源：GitHub OpenClaw 仓库*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the entire document while preserving the Markdown structure, tables, formatting, and keeping all technical identifiers (project names, issue numbers, URLs, etc.) in their original form.

Let me translate this carefully, maintaining the technical register appropriate for a Chinese developer audience.
</think>



# Personal AI Agent 生态系统 — 跨项目对比报告

## 2026-11-23

---

## 1. 生态系统概览

截至 2026 年底，个人 AI 助手与 Agent 开源生态系统正处于**高速、多轨并行的成熟化阶段**。各项目在会话压缩、记忆持久化、多渠道路由和运营方可控安全等常见架构挑战上趋于收敛，同时在实现语言、部署模式及目标用户群体上形成了鲜明差异。OpenClaw 以每日数百个 Issue 和 PR 的体量领跑社区规模；基于 Rust 的 ZeroClaw 则展示了该生态系统向系统编程领域的延伸；Hermes Agent 以稳定的企业级开发节奏和强架构治理能力稳居中间梯队；QwenPaw 在 UI/UX 迭代速率上最为激进；IronClaw 则似乎已进入低活跃度的维护状态。当前整个领域正从概念验证型 Agent 向生产级、多用户、多平台部署框架转型。

---

## 2. 活跃度对比

| 指标 | **OpenClaw** | **Hermes Agent** | **IronClaw** | **QwenPaw** | **ZeroClaw** |
|--------|-------------|------------------|-------------|-------------|--------------|
| **Issue（24h）** | 397 个（322 个 open） | 50 个（42 个 open） | 1 个（1 个 open） | 7 个（7 个 open） | 19 个（13 个 open） |
| **PR（24h）** | 500 个（262 个 open） | 50 个（46 个 open） | 0 | 22 个（19 个 open） | 50 个（34 个 open） |
| **Release（24h）** | **1**（v2026.11.7） | 0 | 0 | 0 | 0 |
| **合并 PR（24h）** | ~238 | 4 | 0 | 3 | 16 |
| **活跃 P0 Issue** | 5 | 0 | 0 | 0 | 0 |
| **活跃 P1 Issue** | 8+ | 1 | 0 | 1 | 3 |
| **社区健康度评分** | 🟢 高 | 🟡 中等 | 🔴 低 | 🟡 中等 | 🟢 高 |
| **活跃度梯队** | 第一梯队 — 企业级规模 | 第二梯队 — 稳健增长 | 第三梯队 — 维护状态 | 第二梯队 — 增长期 | 第一梯队 — 企业级规模 |

---

## 3. OpenClaw 的生态位

### 相对竞品的优势

OpenClaw 在**社区规模**上占据绝对领先地位，每日处理约 238 个合并 PR 和约 75 个已关闭 Issue——这一体量约为活跃度次高的项目（Hermes Agent 和 ZeroClaw）的 **4–5 倍**。这一规模优势转化为：

- **最快的缺陷修复周期**：每日 238 个 PR 合入，表明贡献者基数庞大且响应迅速
- **最丰富的生态广度**：覆盖 Telegram、Slack、iOS、Windows、macOS、Docker、多 Agent 配置（35+ 个 Agent）以及大型 SQLite 存储（284 MB+）
- **最成熟的发版节奏**：今日发布 v2026.11.7，含关键会话恢复修复，展示了可靠的发布流水线
- **最深度的会话管理**：高级特性包括会话共享过滤器、基于关系的数据可见性控制以及跨渠道持久化

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | ZeroClaw |
|-----------|----------|--------------|----------|
| **语言栈** | 多语言（Python、Swift、JS） | 多语言 | **Rust**（主语言） |
| **会话模型** | 以 Agent 为中心，辅以渠道桥接 | 基于 ACP 协议 | 零信任、mTLS RPC 平面 |
| **压缩策略** | 会话压缩 + 子结果恢复 | 预压缩压力传递阶段 | 工具结果信封持久化 |
| **记忆系统** | Qdrant 索引召回，短期召回存在驱逐风险 | Doc-chain 提案（RFC） | Qdrant + 即时时间戳修复 |
| **安全模型** | 插件 RBAC、运营方托管凭证（RFC） | 按用户的工具限制 | **mTLS 平面 + 范围限定的 Bearer Token** |

OpenClaw 的技术路线优先考虑**渠道覆盖广度和面向用户的功能深度**，而 ZeroClaw 则将重心放在**系统级可靠性和安全正确性**上。Hermes Agent 居中，以强架构治理能力见长。

---

## 4. 各项目共同关注的技术方向

以下需求在**多个项目**中同时出现，标志着行业层面的共性挑战：

### 记忆架构与持久化

| 项目 | 具体需求 |
|---------|---------------|
| **OpenClaw** | 短期召回驱逐机制阻碍深度记忆提升（#150635，30 条评论） |
| **Hermes Agent** | Doc-chain RFC，旨在实现压缩后仍能存活的持久化记录（#143379，39 条评论） |
| **QwenPaw** | 对话历史分页与键盘导航支持（#8854、#8858） |
| **ZeroClaw** | Qdrant 时间戳比较修复，以提升召回精度（#12026） |

**趋势：** 各项目都在应对压缩（为节省成本/提升速度）与长期记忆持久化之间的张力。这是当前生态系统**最具定义性的架构挑战**。

### 多平台稳定性

| 项目 | 平台问题 |
|---------|----------------|
| **OpenClaw** | Windows：Gateway 启动耗时 7–9 分钟（#170928），InteractiveToken 卡顿（#146860），计划任务执行失败 |
| **Hermes Agent** | Windows：看板 Worker 死锁（#154336），终端载荷问题（#83685） |
| **QwenPaw** | iOS WebKit 控制台冻结（#8852），跨平台测试失败（#8855） |
| **ZeroClaw** | 长配置目录下的 Socket 路径长度错误（#11860，已修复），网页配对 403（#12661） |

**趋势：** Windows 支持是整个生态系统的共同短板。跨平台一致性仍是巨大的工程负担。

### 安全与访问控制

| 项目 | 安全相关工作 |
|---------|--------------|
| **OpenClaw** | 范围限定运营方托管凭证 RFC（#12422）；插件 RBAC |
| **Hermes Agent** | 按用户的工具限制 RBAC（#3897，历时 8 个月成熟） |
| **ZeroClaw** | mTLS RPC 平面 + 范围限定的 Bearer Token（#11679）；`zerocode` 自行签发 Bearer |
| **QwenPaw** | 审批卡片 UX 改进（#8791，已合并） |

**趋势：** 零信任、运营方可控的凭证模型正在获得广泛采纳。各项目正从 Agent 持有原始 API Key 的模式逐步演进。

### 定时任务与自主执行可靠性

| 项目 | 问题 |
|---------|-------|
| **OpenClaw** | sessions_yield 导致 agents_wait 永久阻塞（#141474，已修复）；cron 边界会话准入失败 |
| **Hermes Agent** | 后台执行完成唤醒失败，附带权限错误 |
| **QwenPaw** | 定时任务在第二次模型调用时以 APIConnectionError 失败（#8762） |
| **ZeroClaw** | 自主技能创建从未触发（#12655） |

**趋势：** 自主任务执行（定时运行、后台 Agent、技能创建）是一个普遍的故障点。Daemon 重启与会话边界间的状态管理复杂性造成了系统性的可靠性挑战。

### 升级与迁移流水线

| 项目 | 问题 |
|---------|-------|
| **OpenClaw** | WAL 发布导致更新部分未完成（#197083，P0 级）；2026.11.5 候选版因插件迁移冲突阻塞（#200606） |
| **Hermes Agent** | 依赖驱逐导致插件同时处于启用和禁用两种状态（#131216，已修复） |
| **QwenPaw** | 2.3.0.post1 版本漂移，无明确升级路径 |
| **ZeroClaw** | Gemini Provider 废弃追踪（#12669）；Python SSH Helper 废弃追踪（#12518） |

**趋势：** 整个生态系统的升级安全性和回滚机制建设不足，为生产部署带来了风险。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **目标用户** | 企业级多 Agent 运营方 | 开发者、安全敏感团队 | NearAI 内部平台 | 普通用户、多渠道消费者 | Rust 技术栈运营方、安全优先团队 |
| **语言栈** | 多语言（Python、Swift、JS、Go） | 多语言 | NearAI 内部 | 多语言 | **Rust 优先** |
| **核心焦点** | 渠道广度、会话管理 | 架构治理、ACP 协议 | 托管 Agent 循环 | UI/UX、控制台、本地模型支持 | 安全、性能、Rust 生态 |
| **记忆模型** | Qdrant + 短期驱逐 | Doc-chain RFC（设计中） | 托管循环 | 控制台历史 + 分页 | Qdrant + 即时时间戳 |
| **安全模型** | 插件 RBAC + 运营方凭证（RFC） | 按用户的工具限制 | 运营方托管 | 审批卡片 | **mTLS 平面 + 范围限定 Bearer** |
| **渠道支持** | Telegram、Slack、iOS、Windows、macOS、Docker | ACP 协议桥接 | NearAI 专属 | Telegram 论坛话题、微信、WhatsApp | ACP 协议 + 渠道路由 |
| **独特优势** | 238 PR/天、35 Agent 配置 | 长期 RFC 文化、架构深度 | — | 本地模型支持（llama.cpp、MLX） | Rust 性能、零信任安全 |
| **独特短板** | 升级脆弱性、Windows 性能 | PR 审核周期长（积压数月） | 活跃度极低、处于维护模式 | iOS WebKit 稳定性、定时任务可靠性 | 社区规模小、Rust 学习曲线陡 |

---

## 6. 社区势能与成熟度

### 活跃度梯队

**第一梯队 — 企业级规模（高吞吐量）**

- **OpenClaw**：约 238 个合并 PR/天，322 个 open Issue，262 个 open PR。成熟的 CI/CD 流水线与自动化发布工具，维护者覆盖多时区。活跃度高但同时背负 5 个 P0 和 8+ 个 P1 问题——高吞吐量部分被缺陷修复工作所消耗。
- **ZeroClaw**：50 个 PR/天，34 个 open PR。Rust 代码库提供了强大的编译期保证，但贡献者池相对较小。安全导向的 RFC 文化展示了成熟度；然而 24 小时内仅 16 个 PR 合入，表明吞吐量虽活跃但并非压倒性。

**第二梯队 — 稳健增长（中等吞吐量）**

- **Hermes Agent**：50 次更新/天（46 个 open PR，4 个合并）。以强架构治理能力著称，RFC 讨论历时长久（RBAC 讨论历时 8+ 个月）。压缩后的 PR 流水线（4 个合并/天）表明代码审查标准严格。PR #83685 已 open 三个月——审核带宽可能是瓶颈。
- **QwenPaw**：22 个 PR/天，3 个合并。UI/UX 迭代激进（键盘导航、iOS 修复、WhatsApp 改进）。本地模型支持（llama.cpp GPU 控制、MLX 引擎管理、控制台界面）是有差异化的投入方向。但 24 小时内仅 3 个 PR 合入，表明 open 与已审核 PR 之间存在落差。

**第三梯队 — 维护状态**

- **IronClaw**：1 个 Issue/天，0 个 PR，0 个 Release。目前唯一活跃项是关于本地 LLM 超时可配置性的增强需求。该项目似乎已进入低活跃度的维护状态。当前窗口内无新 Release，无缺陷修复。

### 成熟度信号

| 指标 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|-----------|----------|--------------|----------|---------|----------|
| **发版节奏** | ✅ 每周/补丁级 | ⚠️ 不规律 | ❌ 无 | ⚠️ 不规律 | ⚠️ 不规律 |
| **RFC 流程** | ✅ 活跃中（凭证 RFC） | ✅ 成熟（doc-chain RFC） | ❌ 无 | ❌ 无 | ✅ 活跃中（Python SSH 废弃） |
| **积压健康度** | ⚠️ 存在 4+ 月旧 Issue | ⚠️ 8+ 月旧 RBAC Issue | ⚠️ 8 天旧 Issue 需分类 | ⚠️ 8 月旧微信 Issue | ⚠️ 55 天旧 WhatsApp Issue |
| **缺陷修复率** | ✅ 高（238 合并/天） | ✅ 中等（4 合并/天） | ❌ 无 | ✅ 中等（3 合并/天） | ✅ 高（16 合并/天） |
| **安全态势** | 🟡 RFC 阶段 | 🟡 RBAC 设计中 | ❌ 无活跃安全工作 | ⚠️ 审批卡片 | 🟢 mTLS + 范围限定 Bearer |

---

## 7. 趋势信号

### 给 AI Agent 框架开发者的建议

1. **记忆与压缩的矛盾尚未解决**：每个项目都在应对压缩（为速度/成本）与记忆持久化之间的张力。各项目的会话压缩（为节省成本/速度）与记忆持久化之间的张力尚无定论。OpenClaw 的"会话恢复"修复（v2026.11.7）和 Hermes Agent 的 doc-chain RFC 是早期探索。可以预期，这将是整个领域**持续多年的架构挑战**。

2. **运营方可控安全是下一个前沿**：三个项目（OpenClaw、Hermes Agent、ZeroClaw）正在独立开发范围限定的凭证模型、按用户的工具限制和基于 mTLS 的 Bearer Token。行业正趋向于一个共同原则——Agent **不应**持有原始 API Key 访问权限。新建 Agent 的开发者应从一开始就将运营方托管凭证纳入设计。

3. **Windows 仍是问题平台**：OpenClaw、Hermes Agent 和 ZeroClaw 均报告了 Windows 特有的回归问题（7–9 分钟启动耗时、计划任务失败、看板死锁），Windows 等效性测试值得配置专职 CI 资源。在 Windows 上部署的开发者应预期 **6–12 个月的稳定性差距**相对于 Linux/macOS。

4. **本地模型支持正在崛起**：QwenPaw 在 llama.cpp GPU 控制、MLX 引擎管理和控制台本地模型 UI 上的投入，释放了一个趋势信号——**隐私优先、离线可用的 Agent**。这一趋势可能由企业数据主权要求和成本优化需求驱动。预计更多框架将加入一等公民级的本地推理支持。

5. **多渠道路由复杂性持续攀升**：各项目正在 Telegram（论坛话题、显式 @提及）、WhatsApp（标题处理）、微信（OAuth、在线状态）和 Slack（选择性 @提及）上大力投入。**多渠道支持的运维复杂性**不可小觑——渠道特定行为（WebKit 渲染、桌面与移动协议差异、OAuth 流程）消耗了大量工程带宽。

6. **升级安全性投入不足**：OpenClaw 的 P0 级 WAL 发布问题以及多处插件迁移冲突表明，**升级流水线十分脆弱**。随着这些框架达到生产级部署规模，升级安全性（原子回滚、迁移验证、状态一致性检查）将成为竞争性差异化因素。

7. **Rust 框架提供了一条可靠性路径**：ZeroClaw 的 Rust 优先架构展示了编译期保证可以减少一类运行时 bug。然而社区规模较小且学习曲线陡峭，限制了采用速度。生态系统可能看到 **Rust SDK 作为补充** 而非完全替代现有 Python/JS 框架出现。

---

*本报告基于 OpenClaw、Hermes Agent、IronClaw、QwenPaw 及 ZeroClaw 的 GitHub 活跃数据编制 — 2026-11-23*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate the content while maintaining the Markdown structure exactly
2. Use natural technical Chinese register
3. Keep URLs, numbers, dates, code references, project names, etc. in their original form
4. Output ONLY the translation, no preamble or explanation

Let me go through this carefully and translate it section by section, maintaining the tone of a Chinese developer newsletter.
</think>


# Hermes Agent 项目动态

## 2026-11-23

---

## 1. 今日概览

Hermes Agent 保持高度社区活跃，过去 24 小时内有 50 条 issue 和 50 条 PR 产生更新，开发节奏稳健。今日无新版本发布，4 条 PR 合并关闭，8 条 issue 解决。项目呈现健康的社区互动，多个长期架构讨论持续进行，尤其是"Doc-Chain Substrate"提案（39 条评论）。多平台稳定性仍是重点关注领域，多项 Windows 专项修复正在推进，同时插件生态持续扩展，新 API 接口和目录条目不断涌现。

---

## 2. 版本发布

**今日无新版本发布。**

项目当前停留在 v0.23.1（上次观察版本），过去 24 小时内无版本更新或 changelog 记录。

---

## 3. 项目进展

### 今日合并/关闭的 PR（4 条）

| PR | 标题 | 影响 |
|----|------|------|
| [#155925](https://github.com/NousResearch/hermes-agent/pull/155925) | 重构(profiles)：统一 Python 与 desktop/web 的 profile-id 语法 | 减少跨平台代码分化；提升可维护性 |
| [#152104](https://github.com/NousResearch/hermes-agent/pull/152104) | 功能(plugins)：在插件 API 上发布 LoginBackend、VaultItemMeta 和 BrowserPageBackend | 解锁密码管理器和浏览器插件开发 |
| [#158253](https://github.com/NousResearch/hermes-agent/pull/158253) | 添加 Gemini 4 Neon 目录/定价/xhigh 同步 | 扩展新 Gemini 变体的模型目录覆盖 |

### 活跃开发中的 PR（重点条目）

| PR | 标题 | 优先级 | 专注领域 |
|----|------|--------|----------|
| [#156097](https://github.com/NousResearch/hermes-agent/pull/156097) | 修复(agent)：在 pressure pass 中保留未读工具轮次 | **P1** | 压缩完整性 |
| [#159052](https://github.com/NousResearch/hermes-agent/pull/159052) | 修复(gateway)：空闲后台进程不再阻塞 scale-to-zero | P2 | 资源管理 |
| [#83685](https://github.com/NousResearch/hermes-agent/pull/83685) | 修复(terminal)：避免 Windows 载荷进入 argv | P2 | Windows 稳定性 |
| [#141460](https://github.com/NousResearch/hermes-agent/pull/141460) | 修复(compression)：在压缩存根中保留 execute_code 失败结果 | P2 | 会话压缩 |
| [#141876](https://github.com/NousResearch/hermes-agent/pull/141876) | 修复(memory)：恢复 read action | P2 | 内存工具功能 |

---

## 4. 社区热点

### 互动最活跃的讨论

**1. [RFC：DOC-CHAIN SUBSTRATE 的网络设计](https://github.com/NousResearch/hermes-agent/issues/143379)** — 39 条评论  
   *作者：c0wb0yp0tat0 | 创建于：2026-10-23*

   **分析：** 这是一份关于持久化记录系统的重要架构提案，旨在让记录在会话压缩后仍能保留来源追溯能力。39 条评论的讨论量表明社区对长期记忆持久化和治理功能有强烈需求。该 RFC 聚焦三个核心问题：压缩后的 doc-chain 读取、治理机制以及压缩策略。

   **潜在需求：** 用户希望模型未读的工具结果不被替换，同时需要确保压缩后仍能恢复正确的行数。

---

**2. [Gateway 中的按用户工具限制（RBAC）](https://github.com/NousResearch/hermes-agent/issues/3897)** — 9 条评论，4 👍  
   *作者：ind1-go | 创建于：2026-03-30*

   **分析：** 一个来自投资团队的长期待办需求，他们需要为共享的 Telegram 机器人配置基于角色的访问控制。该需求历经 8+ 个月的打磨，说明存在真实的生成环境需求。

   **潜在需求：** 多用户部署场景需要超越简单黑白名单的细粒度权限控制。

---

**3. [Kanban：删除看板时不得让进行中的写入者孤立](https://github.com/NousResearch/hermes-agent/issues/156335)** — 8 条评论  
   *作者：rhgo1749 | 创建于：2026-11-16*

   **分析：** 一个数据完整性问题——当归档/删除看板时，SQLite 写入事务可能成功提交但未能落地到活跃看板上。近期动态显示该问题正在积极排查中。

---

**4. [插件 oauth：为需要精确匹配 redirect URI 的 IdP 暴露 redirect_port](https://github.com/NousResearch/hermes-agent/issues/149642)** — 3 条评论  
   *作者：blackghostosint | 创建于：2026-11-05*

   **分析：** 支持与 QuickBooks 等强制严格 redirect URI 匹配的 IdP 集成，拓展插件 OAuth 生态版图。

---

## 5. Bug 与稳定性

### 严重（P1）— 1 个活跃问题

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#156097](https://github.com/NousResearch/hermes-agent/pull/156097) | 修复(agent)：在 pressure pass 中保留未读工具轮次 | **P1** | PR 已开 |

**详情：** 压缩前的 pressure pass 可能替换模型尚未读取的工具结果，同时终端存根的行数计算存在错误。修复 PR 已开，目标是提升压缩可靠性。

---

### 高优先级（P2）— 活跃 Bug

| Issue | 标题 | 平台 | 备注 |
|-------|------|------|------|
| [#143720](https://github.com/NousResearch/hermes-agent/issues/143720) | Discord 线程 process-completion 每 60s 触发 admission_conflict | Discord | 尝试次数上限永不触发；已记录 494 次 |
| [#143767](https://github.com/NousResearch/hermes-agent/issues/143767) | Desktop 应用为消息对话恢复压缩前会话 | Desktop | 模型切换时出现 session superseded 错误 |
| [#156063](https://github.com/NousResearch/hermes-agent/issues/156063) | write_file/delete_file 允许写入 /dev 和 /proc 节点 | 安全 | **安全漏洞**：文件安全检查被绕过 |
| [#158976](https://github.com/NousResearch/hermes-agent/issues/158976) | Gateway：settled admission 结果永不删除（state.db 增长约 1 GB） | Gateway | 数据库膨胀问题 |
| [#154336](https://github.com/NousResearch/hermes-agent/issues/154336) | Windows：Kanban 托管 worker 在 provider 版本戳记时死锁 | Windows | 影响 OAuth 凭证池用户 |

**安全注意：** Issue #156063 描述了文件安全检查被绕过、允许写入 `/dev` 节点和 `/proc` 伪文件系统的问题。此问题需优先处理。

---

### 近期解决（今日关闭）

| Issue | 标题 | 解决方案 |
|-------|------|----------|
| [#146345](https://github.com/NousResearch/hermes-agent/issues/146345) | 模型切换后 `model_config.gateway_runtime` 仍指向旧 provider | 已修复 |
| [#131216](https://github.com/NousResearch/hermes-agent/issues/131216) | 依赖驱逐的插件同时出现在启用和禁用状态 | 已修复 |
| [#154612](https://github.com/NousResearch/hermes-agent/issues/154612) | Bot Mode 转发投递静默丢弃 | 已修复 |
| [#151153](https://github.com/NousResearch/hermes-agent/issues/151153) | Docker ARM64 gateway 每约 60-68 秒自退出 | 已修复 |
| [#141661](https://github.com/NousResearch/hermes-agent/issues/141661) | 单次运行后残留已停止的 Docker 容器 | 已修复 |

---

## 6. 功能需求与路线图信号

### 社区强烈兴趣

| Issue/PR | 标题 | 信号 |
|----------|------|------|
| [#3897](https://github.com/NousResearch/hermes-agent/issues/3897) | 按用户工具限制（RBAC） | 4 👍，9 条评论，历时 8 个月 |
| [#85700](https://github.com/NousResearch/hermes-agent/issues/85700) | 在 delegate_task 中添加 enabled_toolsets 参数 | 子代理工具限制能力 |
| [#85135](https://github.com/NousResearch/hermes-agent/issues/85135) | 使外部内存预取超时可配置 | 硬编码的 8 秒对冷调用不足 |
| [#153225](https://github.com/NousResearch/hermes-agent/pull/153225) | 目录：添加 agent-pool（社区版） | 通过 Iroh-over-Tor 实现 P2P 代理协作 |

### 正在推进的新功能

| PR | 标题 | 影响 |
|----|------|------|
| [#159075](https://github.com/NousResearch/hermes-agent/pull/159075) | 功能(plugins)：暴露 bound-only messaging turn origin | 扩展插件运行时上下文 API |
| [#159071](https://github.com/NousResearch/hermes-agent/pull/159071) | 功能(discord)：thread_auto_archive_duration | 可配置的 Discord 自动线程保留 |
| [#154578](https://github.com/NousResearch/hermes-agent/pull/154578) | 功能(desktop)：Linux AppImage 应用内更新 | 改善 Linux 分发支持 |

**路线图预测：** 基于活跃讨论和 PR，近阶段开发可能聚焦于：
1. 会话压缩健壮性（多项 P1/P2 修复在推进中）
2. 多用户/多租户安全增强（RBAC、工具限制）
3. Windows 平台能力对标
4. 插件 API 表面扩展

---

## 7. 用户反馈摘要

### 痛点

| 类别 | 证据 | 频率 |
|------|------|------|
| **会话管理** | 压缩前会话恢复失败，模型切换报错 | 3+ 条 issue，评论活跃度高 |
| **Windows 稳定性** | 终端载荷问题、Kanban worker 死锁、计划任务失败 | 4+ 条活跃的 Windows 专项问题 |
| **Docker 资源管理** | 依赖环境永不复用；残留已停止容器 | 2 条 issue，用户影响显著 |
| **内存系统** | read action 被移除；预取超时硬编码 | PR #141876 正在恢复功能 |
| **跨平台一致性** | Profile-id 语法分化、Desktop/TUI 客户端不一致 | 在 #155925 中已解决 |

### 正面信号

| 领域 | 证据 |
|------|------|
| **插件生态** | 新 API 接口（#152104）、目录添加、OAuth 增强 |
| **模型支持** | 快速跟进新模型（Gemini 4 Neon、GPT-6.2 系列） |
| **社区互动** | 长期 RFC 获得 39 条评论，表明架构讨论活跃 |

---

## 8. 待办关注

### 长期未响应的重要事项

| Issue | 时长 | 标题 | 风险 |
|-------|------|------|------|
| [#3897](https://github.com/NousResearch/hermes-agent/issues/3897) | 约 8 个月 | 按用户工具限制（RBAC） | 多用户部署的生产环境阻塞项 |
| [#123316](https://github.com/NousResearch/hermes-agent/issues/123316) | 约 2 个月 | 电话号码脱敏破坏托管运行时路径 | 数据完整性；影响所有 Windows 安装 |
| [#141208](https://github.com/NousResearch/hermes-agent/issues/141208) | 约 1 个月 | Matrix E2EE：第二个客户端破坏加密存储 | 端到端加密可靠性 |

### 等待维护者审核的 PR

| PR | 时长 | 标题 | 优先级 |
|----|------|------|--------|
| [#83685](https://github.com/NousResearch/hermes-agent/pull/83685) | 约 3 个月 | Windows 终端载荷修复 | P2 |
| [#141876](https://github.com/NousResearch/hermes-agent/pull/141876) | 约 1 个月 | 恢复内存 read action | P2 |
| [#156097](https://github.com/NousResearch/hermes-agent/pull/156097) | 约 1 周 | 代理未读工具轮次修复 | **P1** |

---

**动态结束**

*生成时间：2026-11-23 | 数据来源：NousResearch/hermes-agent GitHub*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:
1. Translate all the text while preserving the structure exactly
2. Keep all markdown formatting, tables, headings, etc.
3. Keep URLs, project names, repository slugs, usernames, version tags, file paths, API/config identifiers, issue/PR references as-is
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

## 1. Today's Overview
- "IronClaw shows low activity" - IronClaw 今日活动量较低
- "with no new releases, no pull requests merged" - 无新版本发布，无 PR 合并
- "steady maintenance phase" - 稳定维护阶段
- "one active issue" - 一条活跃 Issue
- "clean state" - 健康状态
- "no regressions or urgent bugs" - 无回归问题或紧急缺陷

## 2. Releases
- "No new releases" - 过去 24 小时内无新版本发布
- "latest available version" - 最新可用版本
- "upcoming release milestones" - 即将发布的版本里程碑

## 3. Project Progress
- "PRs Merged/Closed" - PR 合并/关闭数
- "Issues Opened" - 新建 Issue
- "Issues Updated" - 更新 Issue
- "Assessment" - 评估
- "the codebase did not advance" - 代码库今日无推进
- "between feature development sprints" - 可能处于功能开发迭代间隙

## 4. Community Hot Topics
- "Active Issue with Most Recent Activity" - 最新活跃 Issue
- "Open" - 开放
- "Analysis of Underlying Need" - 深层需求分析


- "Production-ready configurability" - 生产级可配置性
- "self-hosted AI agent deployments" - 私有化部署的 AI Agent
- "Ollama providers" - Ollama 模型供应商
- "cloud-hosted APIs" - 云端 API
- "hosted-staging environment" - 托管预发环境
- "critical operability requirement" - 关键可运维性需求
- "on-premise or edge deployments" - 本地化或边缘部署
- "Signal Strength" - 信号强度
- "indicates the issue is being reviewed" - 表明该 Issue 正在被审查
- "low user awareness" - 用户关注度低

## 5. Bugs & Stability
- "No new bugs or regressions" - 未报告新的缺陷或回归问题
- "stability issue" - 稳定性问题
- "premature agent loop termination" - Agent 循环过早终止
- "No fix PR exists yet" - 尚无修复 PR

## 6. Feature Requests & Roadmap Signals
- "feature-request signal" - 功能请求信号
- "Agent loop → LLM provider timeout configuration" - Agent 循环 → LLM 供应商超时配置
- "Model call idle watchdog" - 模型调用空闲看门狗
- "Local Ollama provider usage" - 本地 Ollama 供应商使用场景
- "Roadmap Prediction" - 路线图预测
- "patch release" - 补丁版本
- "major version" - 主版本
- "deployment-real-world configurability needs" - 实际部署中的可配置性需求

## 7. User Feedback Summary
- "Pain Point" - 痛点
- "Inflexible Timeout" - 超时配置不灵活
- "local LLM users" - 本地 LLM 用户
- "staging environments" - 预发环境
- "Use Case" - 使用场景
- "Self-Hosted Agents" - 私有化部署的 Agent
- "Dissatisfaction Level" - 不满意程度
- "operational blocker" - 运维障碍
- "specific deployment modes" - 特定部署模式
- "core workflow issue" - 核心工作流问题

## 8. Backlog Watch
- "Backlog Watch" - 待办事项关注
- "Age" - 创建时长
- "Status" - 状态
- "Priority Signal" - 优先级信号
- "Needs maintainer action" - 需要维护者处理
- "QA-confirmed bug" - QA 确认的缺陷
- "actively discussed" - 正在积极讨论
- "active issue" - 活跃 Issue
- "compete for attention" - 争夺关注
- "maintainers should prioritize" - 维护者应优先处理
- "needs triaging" - 需要进一步分类

Now I need to handle the markdown table column alignment rows properly. The current structure has `|----------|-------|---------|` and `|-------|--------|`, which should be translated to Chinese as `|----------|-------|----------|` with the text translated accordingly. Let me work through the full translation systematically.
</think>


# IronClaw 项目动态 — 2026-11-23

## 1. 今日概览

IronClaw 今日（2026-11-23）活动量较低，过去 24 小时内无新版本发布、无 PR 合并，仅有一条活跃 Issue 产生了更新。项目当前处于**稳定维护阶段**。唯一追踪到的 Issue 反映了托管预发环境中私有化部署本地 LLM 的真实运维需求。整体而言，仓库状态健康，无回归问题或紧急缺陷报告。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。** 目前可用最新版本为 Issue #8172 中提及的 **1.4.1**。当前数据窗口未提供关于后续版本里程碑的信息。

---

## 3. 项目进展

| 类别 | 数量 | 详情 |
|----------|-------|---------|
| PR 合并/关闭（24h） | 0 | 今日无 PR 活动。 |
| 新建 Issue（24h） | 0 | 今日无新建 Issue。 |
| 更新 Issue（24h） | 1 | Issue #8172 产生了更新。 |

**评估：** 代码库今日无推进。贡献者可能处于代码审查周期中，或项目正处于功能开发迭代间隙。

---

## 4. 社区热点话题

### 最新活跃 Issue

| Issue #8172 | 详情 |
|-------------|---------|
| **标题** | [qa-bug] [QA] 使 PRIMARY_MODEL_CALL_IDLE_TIMEOUT 对慢速本地 LLM 可配置 |
| **状态** | 🟡 开放 |
| **作者** | n4s3r |
| **创建时间** | 2026-11-15 |
| **更新时间** | 2026-11-22 |
| **评论数** | 1 |
| **反应数** | 👍 0 |
| **链接** | [nearai/ironclaw#8172](https://github.com/nearai/ironclaw/issues/8172) |

**深层需求分析：**
此 Issue 揭示了私有化 AI Agent 部署中生产级可配置性的缺口。运行**本地 Ollama 模型供应商**（而非云端 API）的用户在面对更高延迟的本地 LLM 时，会遭遇看门狗超时。报告者在**托管预发环境（"crab shack"）**中操作，需要将 `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` 参数暴露为可配置项，而非硬编码常量。这对于 IronClaw 的本地化或边缘部署而言是一项**关键可运维性需求**。

**信号强度：** 中等。该 Issue 仅有一条评论表明正在被审查，缺乏 upvotes 可能是由于用户关注度低，而非优先级不高。

---

## 5. 缺陷与稳定性

**过去 24 小时内无新的缺陷或回归问题报告。**

现有 Issue #8172 被归类为 **QA-bug**（质量保障团队报告的缺陷），涉及 `HostManagedLoopModelPort` 中 Agent 循环的模型调用空闲看门狗机制。对于使用慢速 LLM 的用户而言，这是一个**中等严重性的稳定性问题**，可能导致 Agent 循环过早终止。目前尚无修复 PR。

---

## 6. 功能请求与路线图信号

唯一追踪的项目携带了**功能请求信号**：

> **将 PRIMARY_MODEL_CALL_IDLE_TIMEOUT 设为可配置**
> - **领域：** Agent 循环 → LLM 供应商超时配置
> - **受影响功能：** 模型调用空闲看门狗
> - **触发场景：** 生产/预发环境中的本地 Ollama 供应商使用

**路线图预测：** 鉴于该 Issue 被标记为 QA-bug 且本周有活跃更新，很可能在即将发布的**补丁版本（如 1.4.2）**中解决，而非主版本。维护者对实际部署中的可配置性需求响应积极。

---

## 7. 用户反馈摘要

| 主题 | 详情 | 来源 |
|-------|--------|--------|
| **痛点：超时配置不灵活** | 本地 LLM 用户无法调整空闲超时，导致预发环境故障 | Issue #8172 |
| **使用场景：私有化部署 Agent** | 用户希望 IronClaw 能在本地可靠运行 Ollama | Issue #8172 |
| **不满意程度** | 中等 — 对特定部署模式构成运维障碍，非核心工作流问题 | — |

**总结：** 社区当前反馈集中在**运维灵活性**上。IronClaw 的 Agent 循环看门狗基于云端 LLM 延迟预期设计，尚未适配本地模型推理的高方差特性。随着私有化部署场景增长，这一问题需要得到解决。

---

## 8. 待办事项关注

| 项目 | 创建时长 | 状态 | 优先级信号 |
|------|-----|--------|-----------------|
| **Issue #8172** — 使 PRIMARY_MODEL_CALL_IDLE_TIMEOUT 可配置 | 8 天 | 开放 | 🔴 **需要维护者处理** — QA 确认的缺陷，正在积极讨论 |

**备注：**
- 这是仓库近期窗口中**唯一的活跃 Issue**。
- 无待审查的 PR。
- 在没有其他 Issue 或 PR 争夺关注的情况下，**维护者应在近期优先评估 Issue #8172 的修复范围**。
- 该 Issue 除一条评论外尚无维护者回应，可能需要进一步分类。

---

*动态报告基于 nearai/ironclaw GitHub 数据生成 — 2026-11-23*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me carefully translate this while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title:**
# QwenPaw Project Digest — 2026-11-23
→ # QwenPaw 项目摘要 — 2026-11-23

**Section 1: Today's Overview**
QwenPaw maintains high development velocity → QwenPaw 保持高开发活跃度
with **22 PRs updated** and **7 issues actively discussed** → 过去 24 小时内有 **22 个 PR 更新**，**7 个 issues 积极讨论**
in the last 24 hours. → 
Three PRs reached closure → 3 个 PR 合并/关闭
while 19 remain open with various review stages. → 19 个保持开放，处于不同审核阶段
No new releases shipped today → 今天未发布新版本
suggesting the team is in an active development/integration cycle. → 表明团队正处于积极开发/集成周期
The project shows healthy activity across multiple components → 项目在多个组件上呈现健康的活跃状态
— Console UI refinements, Telegram channel enhancements, local model support, and plugin system extensions → — Console UI 优化、Telegram 频道增强、本地模型支持和插件系统扩展


are all progressing in parallel. → 正在并行推进
Bug reporting remains moderate → Bug 报告保持中等水平
with UI/UX issues (iOS performance, keyboard accessibility, content overflow) → 其中 UI/UX 问题（iOS 性能、键盘可访问性、内容溢出）
comprising the majority of recent bug reports. → 占近期 bug 报告的大多数

**Section 2: Releases**
No new releases were published → 今天没有新版本发布
in the last 24 hours. → 
The project appears to be in an active development window → 项目似乎处于积极开发窗口期
ahead of a potential release. → 即将发布新版本
Users on version `2.3.0.post1` should monitor the PR pipeline → 使用 `2.3.0.post1` 版本的用户应关注 PR 流程
for upcoming merges that may require version updates. → 留意可能需要版本更新的即将合并内容

**Section 3: Project Progress**
### Merged/Closed PRs (3 items)
Closed PRs: 3 items total
| PR | Title | Type | Impact |
|---|---|---|---|
| [#8855](https://github.com/agentscope-ai/QwenPaw/pull/8855) | fix(tests): handle Windows timing and encoding in Plugin SDK tests | Bug fix | Cross-platform test reliability |
| [#7632](https://github.com/agentscope-ai/QwenPaw/pull/7632) | fix(runtime): return feedback for unknown slash commands | Bug fix | Improved UX for command errors |
| [#8791](https://github.com/agentscope-ai/QwenPaw/pull/8791) | fix: improve approval card interactions and localization | UX improvement | Clearer authorization labels |

### Active Development (Notable Open PRs)
Three PRs address cross-platform testing, runtime feedback, and user experience. The Windows timing and encoding fix enhances test reliability across different systems. Unknown command feedback improves developer experience. Approval card improvements provide clearer interaction labels for users.

**High-priority multi-PR feature stack** — Local Model Engine Support:
Local model support represents a major initiative across multiple PRs. Llama.cpp GPU controls enable runtime auto-update capabilities. The MLX engine integration handles managed workloads with automatic updates. Console controls provide user-facing configuration for local model deployment.

**Console Improvements:**
Console enhancements focus on clarifying user interactions and managing conversation history. Confirmation dialogs provide clearer guidance during approval processes. Restored conversations support pagination for better readability. Keyboard navigation enables focusable conversation threads. Runtime base-path configuration allows flexible deployment options. CJK language emphasis boundaries are refined in chat markdown rendering.

**Plugin System:**
Plugin ecosystem expands through semantic color role exposure, enabling consistent theme integration across extensions. CLI command support introduces new interaction patterns and extension points for custom functionality.

**Core Fixes:**
Critical fixes address media rendering and runtime behavior. Inline budget enforcement prevents layout overflow, with rescaling triggered after refusal to maintain display integrity. Runtime media capabilities leverage resolved specifications during execution. URL-referenced media detection improves tool-result presentation through intelligent folding. Run completion callbacks are bounded to ensure proper cleanup and resource management.

### Most Active Issues by Discussion

| Issue | Title | Comments | Theme |
|---|---|---|---|
| [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) | Scheduled task fails with APIConnectionError on 2nd model call | 3 | **Reliability/Bug** |
| [#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) | WeChat functionality incomplete | 3 | **Feature gaps** |
| [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) | Isolate agent sessions by Telegram forum topic | 2 | **Channel enhancement** |
| [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) | Console freezes on iOS WebKit in long conversations | 2 | **UI/Performance** |

### Analysis

**#8762 — Scheduled Task Reliability:** A critical issue where scheduled tasks fail with `APIConnectionError` on the 2nd model call while manual runs of identical tasks succeed. This suggests a potential race condition or connection state issue specific to scheduled execution contexts. Four consecutive failures (Nov 13-16) indicate systemic reliability concerns.

**#2674 — WeChat Integration Gaps:** Long-standing issue (since March 2026) highlighting four distinct problems: missing keyboard feedback, group chat addition failure, UI sync issues with 503 errors, and missing bot presence in desktop WeChat. Despite 3 comments, the issue remains open, suggesting complexity in WeChat channel implementation.

**#8827 — Telegram Forum Topics:** Feature request to enable per-topic agent sessions in Telegram supergroups. This is actively being addressed via PR [#8857](https://github.com/agentscope-ai/QwenPaw/pull/8857) (already merged today), demonstrating responsive community-driven development.

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|---|---|---|---|
| **High** | [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) | Scheduled task APIConnectionError on 2nd call | None yet |
| **Medium** | [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) | iOS WebKit console freeze in long conversations | None yet |
| **Medium** | [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844) | Message list not keyboard-focusable | [#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854) |
| **Low** | [#8856](https://github:///github.com/agentscope-ai/QwenPaw/issues/8856) | Wide content (tables) clipped without horizontal scroll | None yet |

### Stability Assessment

The project demonstrates solid responsiveness with PR #8854 already merged to address keyboard navigation. However, the scheduled task reliability problem (#8762) poses a significant risk for users depending on automation workflows and requires immediate focus. The iOS WebKit rendering freeze affects a substantial portion of the mobile user base and may need deeper investigation into CSS `content-visibility` and flexbox rendering optimizations.

## 6. Feature Requests & Roadmap Signals

### Active Feature Requests

| Request | Scope | Signal Strength |
|---|---|---|
| [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) — Telegram forum topic isolation | Channels | **High** — PR #8857 merged |
| [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) — Scheduled task reliability | Core/Scheduler | **High** — Recurring failure pattern |
| [#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) — WeChat feature completion | Channels | **Medium** — Long-standing gap |

### Roadmap Indicators

The active PR stack for **local model support** (llama.cpp, MLX, Console controls) represents significant investment in offline/privacy-focused deployment scenarios. This suggests the roadmap may emphasize:
- **Local inference capabilities** (GPU control, managed engines)
- **Plugin ecosystem expansion** (CLI commands, theme colour roles)
- **Multi-channel refinement** (Telegram forum support, WeChat improvements)

## 7. User Feedback Summary

### Pain Points

1. **Scheduled Task Reliability** — Users experiencing intermittent API connection failures in automated workflows face eroded trust in the scheduling system. Manual execution working while scheduled fails indicates a context/state management issue.

2. **WeChat Integration Incomplete** — Desktop WeChat users report the bot is invisible/not addable, suggesting platform-specific implementation gaps or API compatibility issues with WeChat's desktop protocol.

3. **Mobile UI Performance** — iOS users report complete UI freezes in extended conversations, making the Console unusable on mobile devices—a significant accessibility concern.

4. **Keyboard Navigation Absent** — Power users and accessibility-conscious users cannot navigate conversation history with keyboard controls, limiting use on keyboard-heavy workflows.

### Positive Signals

- Active community contributions (first-time contributors submitting PRs)
- Responsive issue triage (recent issues receiving comments within hours)
- Feature requests being addressed (Telegram forum topics)

## 8. Backlog Watch

### Long-Unanswered Important Items

| Issue/PR | Age | Status | Concern |
|---|---|---|---|
| [#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) — WeChat issues | **~8 months** | Open | Platform integration incomplete; 3 comments but no resolution path |
| [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) — Scheduled task bug | **~7 days** | Open | Production reliability; 3 comments, needs triage |
| [#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308) — API test PR | **~36 days** | Open | Test coverage PR awaiting review |

### Maintainer Attention Needed

1. **#2674** — WeChat integration has been open since March 2026 with no clear resolution. A definitive statement on WeChat support status (official, experimental, deprecated) would help user expectations.

2. **#8762** — The scheduled task reliability issue affects production deployments. Given its pattern (works manually, fails scheduled), this likely requires a targeted debug session or additional logging instrumentation.

3. **PR #8308** — A simple test PR has been open for over a month. If the test logic is correct, merging would improve coverage; otherwise, constructive feedback would help the contributor.

---

*Digest generated from QwenPaw (agentscope-ai/QwenPaw) GitHub activity for 2026-11-23.*
</think>


# QwenPaw 项目摘要 — 2026-11-23

## 1. 今日概览

QwenPaw 保持高开发活跃度，过去 24 小时内有 **22 个 PR 更新**，**7 个 issues 积极讨论**。3 个 PR 已合并关闭（#8855、#7632、#8791），19 个保持开放，处于不同审核阶段。今天未发布新版本，表明团队正处于积极开发/集成周期。

项目在多个组件上呈现健康的活跃状态——Console UI 优化、Telegram 频道增强、本地模型支持和插件系统扩展均并行推进。Bug 报告保持中等水平，其中 UI/UX 问题（iOS 性能、键盘可访问性、内容溢出）占近期 bug 报告的大多数。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。** 项目似乎处于积极开发窗口期，即将发布新版本。使用 `2.3.0.post1` 版本的用户应关注 PR 流程，留意可能需要版本更新的即将合并内容。

---

## 3. 项目进展

### 已合并/关闭的 PR（3 项）

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| [#8855](https://github.com/agentscope-ai/QwenPaw/pull/8855) | fix(tests): handle Windows timing and encoding in Plugin SDK tests | Bug fix | 跨平台测试可靠性 |
| [#7632](https://github.com/agentscope-ai/QwenPaw/pull/7632) | fix(runtime): return feedback for unknown slash commands | Bug fix | 命令错误时改进用户体验 |
| [#8791](https://github.com/agentscope-ai/QwenPaw/pull/8791) | fix: improve approval card interactions and localization | UX 改进 | 更清晰的授权标签 |

### 活跃开发（值得关注的中文 PR）

**高优先级多 PR 功能栈** — 本地模型引擎支持：
- [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) — llama.cpp GPU 控制 + 运行时自动更新（size/L）
- [#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647) — 托管 MLX 引擎 + 自动更新（size/XXL）
- [#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) — Console 本地引擎控制（size/XL）

**Console 改进：**
- [#8859](https://github.com/agentscope-ai/QwenPaw/pull/8859) — 明确确认/审批交互（size/XXXL）
- [#8858](https://github.com/agentscope-ai/QwenPaw/pull/8858) — 恢复的对话历史分页（size/XS）
- [#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854) — 对话历史支持键盘聚焦（size/S）
- [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) — 支持运行时基础路径部署（size/XXL）
- [#8133](https://github.com/agentscope-ai/QwenPaw/pull/8133) — 修复聊天 Markdown 中 CJK 强调标记边界（size/XL）

**插件系统：**
- [#8787](https://github.com/agentscope-ai/QwenPaw/pull/8787) — 向插件主题暴露语义颜色角色（Under Review，size/XL）
- [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) — 支持 CLI 命令和扩展点（size/XXXL）

**核心修复：**
- [#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785) — 强制媒体内联预算，拒绝后重新缩放（size/XXL）
- [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) — 运行时使用解析后的媒体能力（size/M）
- [#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487) — 识别工具结果折叠中的 URL 引用媒体（size/S）
- [#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268) — 限制运行完成回调，始终清理（size/M）

---

## 4. 社区热点话题

### 按讨论量排序的最活跃 Issues

| Issue | 标题 | 评论数 | 主题 |
|---|---|---|---|
| [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) | 调度任务在第二次模型调用时以 APIConnectionError 失败 | 3 | **可靠性/Bug** |
| [#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) | WeChat 功能不完整 | 3 | **功能缺口** |
| [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) | 通过 Telegram 论坛主题隔离 agent 会话 | 2 | **频道增强** |
| [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) | Console 在 iOS WebKit 长对话中冻结 | 2 | **UI/性能** |

### 分析

**#8762 — 调度任务可靠性：** 这是一个关键问题，调度任务在第二次模型调用时以 `APIConnectionError` 失败，而手动运行相同任务却能成功。这表明可能存在特定于调度执行上下文的竞态条件或连接状态问题。连续四次失败（11月13日至16日）表明存在系统可靠性问题。

**#2674 — WeChat 集成缺口：** 自 2026 年 3 月以来的长期问题，涉及四个不同问题：缺少键盘反馈、群聊添加失败、出现 503 错误时的 UI 同步问题，以及桌面微信中缺少机器人存在。尽管有 3 条评论，但问题仍未解决，表明 WeChat 频道实现复杂。

**#8827 — Telegram 论坛主题：** 通过 Telegram 超级群组中的主题实现每个 agent 会话隔离的功能请求。这正在通过 PR [#8857](https://github.com/agentscope-ai/QwenPaw/pull/8857) 积极解决（今天已合并），展示了响应式的社区驱动开发。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复 PR？ |
|---|---|---|---|
| **高** | [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) | 调度任务第二次调用时 APIConnectionError | 暂无 |
| **中** | [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) | iOS WebKit 长对话中 Console 冻结 | 暂无 |
| **中** | [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844) | 消息列表键盘不可聚焦 | [#8854](https://github.com/agentscope-ai/QwenPaw/pull/8854) |
| **低** | [#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856) | 宽内容（表格）被裁剪，无水平滚动 | 暂无 |

### 稳定性评估

项目显示出良好的 bug 修复响应速度，**PR #8854** 已解决键盘可访问性问题。然而，调度任务可靠性问题（#8762）对依赖自动化的用户来说是一个潜在阻碍，值得优先关注。iOS WebKit 冻结问题影响大量移动用户群体，可能需要深入调查 CSS `content-visibility` 和 flexbox 渲染。

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| 请求 | 范围 | 信号强度 |
|---|---|---|
| [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) — Telegram 论坛主题隔离 | 频道 | **高** — PR #8857 已合并 |
| [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) — 调度任务可靠性 | 核心/调度器 | **高** — 重复失败模式 |
| [#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) — WeChat 功能完善 | 频道 | **中** — 长期缺口 |

### 路线图指标

**本地模型支持**（llama.cpp、MLX、Console 控制）的活跃 PR 堆栈表明项目正在离线/隐私导向部署场景方面进行重大投入。路线图可能侧重于：

- **本地推理能力**（GPU 控制、托管引擎）
- **插件生态系统扩展**（CLI 命令、主题颜色角色）
- **多频道完善**（Telegram 论坛支持、WeChat 改进）

---

## 7. 用户反馈摘要

### 痛点

1. **调度任务可靠性** — 用户在自动化工作流中经历间歇性 API 连接失败，对调度系统信任度下降。手动执行正常但调度执行失败，表明存在上下文/状态管理问题。

2. **WeChat 集成不完整** — 桌面微信用户报告机器人不可见/无法添加，表明平台特定实现存在缺口或与微信桌面协议 API 兼容性问题。

3. **移动端 UI 性能** — iOS 用户报告在长对话中 UI 完全冻结，使 Console 在移动设备上无法使用——这是一个重要的可访问性问题。

4. **键盘导航缺失** — 高级用户和注重可访问性的用户无法使用键盘控制导航对话历史，限制了键盘密集型工作流的使用。

### 积极信号

- 活跃的社区贡献（首次贡献者提交 PR）
- 响应式的问题分类（近期 issues 在数小时内获得评论）
- 功能请求正在得到解决（Telegram 论坛主题）

---

## 8. 积压关注

### 长期未答复的重要事项

| Issue/PR | 时长 | 状态 | 关注点 |
|---|---|---|---|
| [#2674](https://github.com/agentscope-ai/QwenPaw/issues/2674) — WeChat 问题 | **约 8 个月** | 开放 | 平台集成不完整；3 条评论但无解决路径 |
| [#8762](https://github.com/agentscope-ai/QwenPaw/issues/8762) — 调度任务 bug | **约 7 天** | 开放 | 生产可靠性；3 条评论，需要分类处理 |
| [#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308) — API 测试 PR | **约 36 天** | 开放 | 测试覆盖率 PR 等待审核 |

### 需要维护者关注

1. **#2674** — WeChat 集成自 2026 年 3 月以来一直开放，暂无明确解决方案。关于 WeChat 支持状态（官方、实验性、已弃用）的明确声明将有助于用户预期管理。

2. **#8762** — 调度任务可靠性问题影响生产部署。鉴于其模式（手动正常，调度失败），可能需要针对性调试会话或额外的日志检测。

3. **PR #8308** — 一个简单的测试 PR 已开放一个多月。如果测试逻辑正确，合并将提高覆盖率；否则，建设性反馈将帮助贡献者。

---

*本摘要基于 QwenPaw (agentscope-ai/QwenPaw) GitHub 2026-11-23 活动生成。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me go through it carefully and translate while following all the rules.

Key points:
1. Output ONLY the translation, no preamble or explanation
2. No markdown fences around the whole output
3. Preserve all Markdown structure exactly
4. Keep URLs, links, numbers, dates, project names, usernames, etc. as-is
5. Use natural technical Chinese register

Let me translate section by section:

**Title:**
ZeroClaw 项目日报 — 2026-11-23

**Section 1: Today's Overview**
- High-velocity development cycle → 高频迭代周期
- Gemini CLI and Gemini Code Assist consumer OAuth → Gemini CLI 及 Gemini Code Assist 消费者 OAuth
- Antigravity CLI (`agy acp`) → keep as-is
- stacked PRs → 堆叠式 PR

**Section 2: Releases**
- No new releases → 今日无新版本发布

**Section 3: Project Progress**
- reached merged/closed status → 已合并/关闭
- Serve deferred tool schemas from live tools instead of assembly copy → 从实时工具中提供延迟加载的工具 schema，而非程序集副本
- Compare Qdrant recall timestamps as instants → 将 Qdrant 召回时间戳作为 instants 进行比较
- Explain over-long socket paths with actionable remedy → 为过长的 socket 路径提供可操作的解决方案
- Drain long highlight sections properly → 正确排空长 highlight 区段
- Discover quoted filenames in changed-link checks → 在变更链接检查中发现引号包裹的文件名


- Preserve merge-group preflight event bases → 保留 merge-group 预检事件基准
- Canonical V5 registry adoption → V5 registry 规范化迁移
- model binding refactor → 模型绑定重构

**Section 4: Community Hot Topics**
- Most-discussed item → 讨论最热烈的话题
- scoped credential management → 作用域凭证管理
- zero-trust, operator-controlled access patterns → 零信任、运营商管控的访问模式
- identity-access architecture → 身份访问架构
- drop captions from inbound media → 丢弃入站媒体的描述文字

**Section 5: Bugs & Stability**
- Degraded Behavior → 降级行为
- switched to browser-service recognition after stale read → 读取过期数据后切换回浏览器语音识别
- autonomous skill creation never fires → 自主技能创建从未触发
- flat tool calls → 扁平工具调用
- silently ignores unknown arguments → 静默忽略未知参数
- agent cards show all-time spend → 智能体卡片显示历史总支出

**Section 6: Feature Requests & Roadmap Signals**
- retire → 淘汰
- Track → 追踪

Issues marked for tracker status are being migrated or deprecated. This involves transitioning from existing Gemini CLI and Code Assist OAuth systems to new authentication mechanisms like Antigravity CLI, Vertex, and API key-based approaches. The changes aim to streamline credential management and enhance user experience by allowing more controlled agent delegation and improving shell grammar verification for security improvements.

The technical modifications include removing obsolete hardware interfaces, correcting documentation inaccuracies, and advancing security protocols through mTLS RPC encryption. Key challenges involve resolving model switching failures, preventing silent autonomous skill generation issues, addressing voice setting reversions, eliminating dashboard pairing code errors, and accurately representing agent spend metrics. Critical attention is needed for WhatsApp caption handling and verifying zerocode bearer token implementation.

Specific technical challenges involve socket path length limitations, Python SSH helper deprecation tracking, and migrating to a V5 registry. Documentation refinements are required for workspace access configurations and MCP examples. The team is navigating complex dependency management, design decision approvals, and merge sequencing strategies to resolve these technical debt items.

The system is experiencing critical operational issues including autonomous skill creation failures and model switching malfunctions. Voice settings exhibit problematic reversion behaviors, with additional challenges around dashboard pairing processes and spend attribution discrepancies. The underlying architecture requires careful review of memory and CLI user experience components.

Significant progress has been made addressing long-standing technical debt. Recent improvements in documentation, Qdrant timestamp handling, and socket path configurations demonstrate systematic refinement of system reliability and user experience.

Key challenges include complex registry migration, credential management, and maintaining precise merge sequencing strategies.
</think>


# ZeroClaw 项目日报 — 2026-11-23

## 1. 今日概况

ZeroClaw 延续高频迭代节奏，过去 24 小时内 **19 个 issue 和 50 个 PR 有更新**。最核心的动向是 Google 废弃 Gemini CLI 和 Gemini Code Assist 消费者 OAuth，团队正快速迁移至新的 Antigravity CLI（`agy acp`）provider——这在 4 个堆叠 PR（#12678、#12676、#12675、#12673）中清晰可见。今日合并关闭了 6 个修复 PR（涉及内存、运行时、工具、文档、发布工具），同时新增 13 个 issue，涵盖 bug、功能和追踪项。安全方面动作积极，一份关于作用域凭证管理的 RFC 正在推进，zerocode  bearer token 安全增强也已上线。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下 PR 于今日达到合并/关闭状态：

| PR | 作者 | 变更 |
|----|------|------|
| [#12007](https://github.com/zeroclaw-labs/zeroclaw/pull/12007) | mov-xound-glitch | **fix(tools):** 从实时工具中提供延迟加载的工具 schema，而非程序集副本（重新加载后 schema 过期问题） |
| [#12026](https://github.com/zeroclaw-labs/zeroclaw/pull/12026) | Alix-007 | **fix(memory):** 将 Qdrant 召回时间戳作为 instants 进行比较（避免查询后有效结果被意外排除） |
| [#11860](https://github.com/zeroclaw-labs/zeroclaw/pull/11860) | MannXo | **fix(runtime):** 为过长的 socket 路径提供可操作的解决方案 |
| [#12024](https://github.com/zeroclaw-labs/zeroclaw/pull/12024) | Alix-007 | **fix(release):** 正确排空长 highlight 区段以修复发布帖合成时的 exit 141 |
| [#12023](https://github.com/zeroclaw-labs/zeroclaw/pull/12023) | Alix-007 | **fix(docs):** 在变更链接检查中发现引号包裹的文件名（非 ASCII 路径处理） |
| [#12025](https://github.com/zeroclaw-labs/zeroclaw/pull/12025) | Alix-007 | **test(ci):** 保留 merge-group 预检事件基准 |
| [#11915](https://github.com/zeroclaw-labs/zeroclaw/pull/11915) | rs545837 | **docs(mcp):** 添加可选的本地 Sem 仓库查找示例 |

**正在 review 的堆叠 PR（值得注意）：**

- [#12674](https://github.com/zeroclaw-labs/zeroclaw/pull/12674) — `ci(lint)`: 要求 19 个 workspace crate 中使用有据可查的 `#[expect]` 属性；移除 33 个空操作的 allow
- [#12673](https://github.com/zeroclaw-labs/zeroclaw/pull/12673) — 从 `grok_cli` 提取共享 ACP CLI client 以支持 `antigravity_cli` 重用
- [#12672](https://github.com/zeroclaw-labs/zeroclaw/pull/12672) — 剥离 web 评论中的 issue 引用和处理备注
- [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) 及 [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) — V5 registry 规范化迁移及模型绑定重构（size:XL，被依赖项阻塞）

---

## 4. 社区热点

**按评论数排序的热议 issue：**

| Issue | 作者 | 主题 | 评论数 |
|-------|------|------|--------|
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | CastelloBrancoTecnologia | **RFC：作用域化运营商托管服务凭证** | 9 |
| [#11818](https://github.com/zeroclaw-labs/zeroclaw/issues/11818) | JordanTheJet | Bug：config set agents.* 导致裸 socket 路径错误 | 3 |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | RustLangLatam | Bug：WhatsApp Web 丢弃图片/视频/文档的描述文字 | 3 |
| [#11679](https://github.com/zeroclaw-labs/zeroclaw/issues/11679) | tidux | 功能：zerocode 通过 mTLS 平面自颁发 bearer | 3 |

**分析：**

- **#12422（RFC）** 是今日讨论最热烈的话题——一份关于作用域凭证管理的 RFC，旨在防止智能体访问原始服务凭证。这反映了社区对零信任、运营商管控访问模式的强烈需求，有望塑造未来的身份访问架构。
- **WhatsApp 描述文字丢失（#11257）** 和 **socket 路径错误（#11818）** 持续推进渠道和配置稳健性的打磨。
- **#11679** 通过在 mTLS RPC 平面上启用自颁发 bearer token，推进了 zerocode 与网关之间的安全能力对等。

---

## 5. Bug 与稳定性

**S2 级别 — 降级行为（3 个 bug）：**

| Issue | 组件 | 问题 | 修复 PR？ |
|-------|------|------|-----------|
| [#12667](https://github.com/zeroclaw-labs/zeroclaw/issues/12667) | channel | `/model <id>` 回复"模型已切换"但请求仍使用 profile 配置的模型 | — |
| [#12633](https://github.com/zeroclaw-labs/zeroclaw/issues/12633) | web dashboard | 语音设置页面在读取过期数据后可能将设备切回浏览器语音识别 | — |
| [#12655](https://github.com/zeroclaw-labs/zeroclaw/issues/12655) | runtime/daemon | 自主技能创建从不触发——extractor 期望 OpenAI function wrapper，但历史记录存储的是扁平工具调用 | — |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | channel:whatsapp | WhatsApp Web 丢弃入站媒体的描述文字（已关闭，需验证） | — |

**S3 级别 — 轻微问题（6 个 bug）：**

- [#12666](https://github.com/zeroclaw-labs/zeroclaw/issues/12666): `delegate` 静默忽略未知参数（`additionalProperties: false` 未强制执行）
- [#12661](https://github.com/zeroclaw-labs/zeroclaw/issues/12661): Dashboard 配对码"生成"按钮始终返回 403
- [#12660](https://github.com/zeroclaw-labs/zeroclaw/issues/12660): 智能体卡片显示历史总支出而非"本月"
- [#12665](https://github.com/zeroclaw-labs/zeroclaw/issues/12665): 从损坏信封中恢复的工具结果缺少 name 字段 → Groq 重放失败
- [#12649](https://github.com/zeroclaw-labs/zeroclaw/issues/12649): 渠道路由工具在渠道不存在时仍被注册并触发审批门控
- [#11818](https://github.com/zeroclaw-labs/zeroclaw/issues/11818): 长配置目录导致不透明的"SUN_LEN 路径过长"错误（修复已合并于 #11860）

**今日修复的回归问题：**
- [#12007](https://github.com/zeroclaw-labs/zeroclaw/pull/12007) — 延迟加载的工具 schema 在配置重新加载后过期；现已改为从实时工具中提供服务。

---

## 6. 功能需求与路线图信号

**高影响力新功能：**

| Issue | 作者 | 需求 | 可预测性 |
|-------|------|------|---------|
| [#12669](https://github.com/zeroclaw-labs/zeroclaw/issues/12669) | tidux | **追踪：Gemini provider 现代化** — 淘汰 Gemini CLI/Code Assist OAuth → Antigravity CLI、Vertex、Gemini API key | **高** — PR #12678、#12676、#12675、#12673 已堆叠 |
| [#12668](https://github.com/zeroclaw-labs/zeroclaw/issues/12668) | JordanTheJet | **允许运营商为受托智能体设置有边界的思维层级** | 中 — 运营商 UX 需求明确 |
| [#12296](https://github.com/zeroclaw-labs/zeroclaw/issues/12296) | tidux | **运行时启动 zsh 时检查 zsh 语法**（macOS 默认 shell） | 中 — tool:shell 安全增强 |
| [#12662](https://github.com/zeroclaw-labs/zeroclaw/issues/12662) | JordanTheJet | 从 zeroclaw-hardware 移除无法触达的树莓派 LED 工具 | 低风险清理 |
| [#12670](https://github.com/zeroclaw-labs/zeroclaw/pull/12670) | JordanTheJet | **文档修复：更正 `workspace.access` 方向**（出站而非入站） | 已有 PR |

**安全与身份：**

- [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) — RFC：作用域化运营商托管凭证（9 条评论，活跃的设计讨论中）
- [#11679](https://github.com/zeroclaw-labs/zeroclaw/issues/11679) — zerocode 通过 mTLS 平面自颁发 bearer（已合并，推进安全平面对等）

---

## 7. 用户反馈摘要

**用户反馈的痛点：**

1. **模型切换失效**（`#12667`）— 用户在对话中运行 `/model` 看到确认，但 provider 持续使用 profile 默认模型。影响需要快速切换模型的操作者。

2. **自主技能创建形同虚设**（`#12655`）— 启用 `[skills.skill_creation]` 的用户看不到任何效果，没有日志，没有技能创建。静默失败会侵蚀功能可信度。

3. **语音设置回退**（`#12633`）— Dashboard 语音偏好设置在页面未刷新的情况下可能将设备切回浏览器语音识别。多设备用户深受其扰。

4. **Dashboard 配对码 403**（`#12661`）— 新用户无法从 Web Dashboard 的"生成"按钮完成配对，阻塞了 onboarding 流程。

5. **支出归属误导**（`#12660`）— 标注为"本月"的智能体卡片显示历史总支出，导致用户对实际成本产生困惑。

**积极信号：**

- Qdrant 时间戳修复（`#12026`）和 socket 路径说明（`#11860`）解决了内存和 CLI UX 中长期存在的痛点。
- 文档改进（workspace access 方向、MCP 示例）体现了对社区反馈的积极响应。

---

## 8. 积压事项关注

**需要维护者关注的事项（24h 无活动，高重要性）：**

| Issue | 存续时间 | 主题 | 状态 | 关注点 |
|-------|---------|------|------|--------|
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | 约 55 天 | WhatsApp 描述文字丢失 | 已关闭（S2，进行中） | 需验证/修复 PR |
| [#11679](https://github.com/zeroclaw-labs/zeroclaw/issues/11679) | 约 42 天 | zerocode bearer token | 已关闭（功能） | 已合并——确认完成度 |
| [#11818](https://github.com/zeroclaw-labs/zeroclaw/issues/11818) | 约 37 天 | Socket 路径错误 | 已关闭 | 修复已合并（#11860）——确认解决 |
| [#12518](https://github.com/zeroclaw-labs/zeroclaw/issues/12518) | 6 天 | Python SSH helper 淘汰追踪 | 阻塞中 | 依赖 #12438 原生 broker 对等性 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | 9 天 | RFC：作用域化凭证 | 开放（需决策） | 活跃的设计讨论——等待评审 |

**停滞的长期 PR：**

- [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) 及 [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) — V5 registry 迁移（size:XL，被依赖项阻塞）— 需要维护者指导合并顺序。

---

*本日报基于 ZeroClaw（zeroclaw-labs/zeroclaw）GitHub 2026-11-23 活动数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*