# OpenClaw 生态日报 2026-11-08

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-08 01:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code spans, etc. verbatim
4. Keep project names, issue references in original form
5. Use natural technical Chinese

Let me translate section by section:

**Title:** OpenClaw 项目简报 — 2026-11-08

**Section 1: Today's Overview**
- High development velocity → 高开发活跃度
- 420 open issues → 420 个活跃 issue
- several critical P1 bugs → 数个关键 P1 级别 bug
- dominating maintainer attention → 占用了维护者大量精力
- Community engagement remains robust → 社区参与度保持高涨

**Section 2: Releases**
- No new releases today → 今日无新版本发布
- maintainers appear focused on stabilizing → 维护者似乎正专注于稳定现有版本

**Section 3: Project Progress**
- Merged/Closed PRs → 已合并/已关闭的 PR
- Open PRs Advancing → 进行中的开放 PR
- Notable → 值得关注
- Needs repro → 需要复现
- Depends on → 依赖
- Ready for maintainer look → 等待维护者审阅
- Bug fix → Bug 修复
- Documentation → 文档更新

**Section 4: Community Hot Topics**
- Most Active Issues → 最活跃的 Issue
- Most Active PRs → 最活跃的 PR
- Key Theme → 关键主题
- Critical → 关键


- Session state integrity → 会话状态完整性
- Silent message loss → 消息静默丢失
- Memory system bugs → 记忆系统缺陷
- Platform-specific regressions → 平台特定回归问题

**Section 5: Bugs & Stability**
- Critical (P0/P1) Bugs → 关键（P0/P1）Bug
- Ranked by Severity → 按严重程度排序
- Notable Regression Reports → 值得关注的回归报告
- Stability Assessment → 稳定性评估
- The project manages multiple SQLite-related bugs → 项目面临多个 SQLite 相关问题

**Section 6: Feature Requests & Roadmap Signals**
- High-Value Feature Requests → 高价值功能需求
- Roadmap Signals → 路线图信号
- Core performance issue → 核心性能问题
- Memory plugin enhancement → 记忆插件增强
- Provider ecosystem expansion → 提供商生态扩展
- Plugin extensibility request → 插件扩展性请求
- Agent autonomy feature → 智能体自主性功能

**Section 7: User Feedback Summary**
- Pain Points → 痛点
- Recurring Themes → 反复出现的问题
- Critical → 关键
- High → 高
- Positive Feedback Indicators → 正面反馈指标
- User Dissatisfaction Signals → 用户不满信号

**Section 8: Backlog Watch**
- Long-Unanswered Critical Issues → 长期未解决的关键问题
- Issues Stalled Without Fix PRs → 缺少修复 PR 的停滞问题
- PRs Needing Maintainer Look → 需要维护者关注的 PR
- Waiting Since → 等待时长

**Summary Assessment**
- Project Health → 项目健康度
- Challenged → 面临挑战
- stability challenges → 稳定性挑战
- stressed → 承压
- critical user pain point → 关键用户痛点
- test coverage gaps → 测试覆盖空白
- user satisfaction → 用户满意度

Now I'll translate all the tables and preserve formatting carefully.
</think>


# OpenClaw 项目简报 — 2026-11-08

---

## 1. 今日概览

OpenClaw 在过去 24 小时内保持高开发活跃度，共有 500 个 issue 和 500 个 PR 产生更新。其中 191 个 PR 已合并或关闭，表明在 bug 修复和功能开发方面取得了实质性进展。今日无新版本发布。项目目前仍有 420 个 open issue，多个关键 P1 级别 bug 占用维护者大量精力，涉及会话状态管理、SQLite 完整性和多通道消息可靠性等方面。社区参与度保持高涨，多个高严重性 issue 持续引发深入讨论。

---

## 2. 版本发布

**今日无新版本发布。**

项目在过去 24 小时内未发布新版本标签。鉴于大量回归报告和进行中的关键 bug，维护者似乎正专注于稳定现有版本。

---

## 3. 项目进展

### 已合并/已关闭的 PR（值得关注）

| PR | 标题 | 领域 | 影响 |
|----|------|------|------|
| [#194925](https://github.com/openclaw/openclaw/pull/194925) | fix(ci): 在发布上线测试中包含 auto-reply 覆盖率 | CI | 确保在稳定版本中验证停滞轮次恢复场景 |
| 被 #194867 取代 | fix(systems): 在主机遥测前展示库存 | Web UI | 规范修复已合并为 `16f02454a7f8` |

### 进行中的开放 PR（精选高影响力）

| PR | 标题 | 领域 | 规模 | 状态 |
|----|------|------|------|------|
| [#194874](https://github.com/openclaw/openclaw/pull/194874) | perf(ui): 在库存读取期间保持 Skills 可用 | Web UI | XL | 需要复现 |
| [#194763](https://github.com/openclaw/openclaw/pull/194763) | fix(ui): 创建聊天文件夹并展示已接受的会话操作 | Web UI | XL | 依赖 #194814 |
| [#190472](https://github.com/openclaw/openclaw/pull/190472) | fix(auto-reply): 执行完成时保持请求者的当前发送者和 DM 工具策略 | Agents | L | 等待维护者审阅 |
| [#194902](https://github.com/openclaw/openclaw/pull/194902) | fix: 避免因原生 rollout 大小轮换导致的慢速后续操作 | Codex | S | 文档更新 |
| [#194813](https://github.com/openclaw/openclaw/pull/194813) | fix: 配额错误后跳过配置的 fallback | Agents | S | Bug 修复 |

**主题概览：** Control UI 改进、auto-reply 稳定性增强、Codex 会话处理和性能优化。

---

## 4. 社区热点话题

### 最活跃的 Issue（按评论数排序）

| # | 标题 | 评论数 | 关键主题 |
|----|------|--------|----------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec 在 2026.10.5 返回共享状态完整性准入错误 | 32 | **关键**：28+ 次失败，子效应未验证 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子 agent 完成静默丢失 — 无重试，无通知 | 31 | **关键**：子 agent 编排中的消息丢失 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 短期回忆保留每夜驱逐被召回的条目 | 26 | 记忆系统退化 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步 agent 持久化在规模化时阻塞 Gateway 事件循环 | 25 | **关键**：性能/崩溃循环 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 延迟回收提交检查点失败导致 agent 不可用 | 25 | SQLite/可用性 |

**分析：** 头部 issue 揭示了以下系统性问题：
1. **会话状态完整性** — 多个 issue 涉及共享状态损坏、会话持久化失败
2. **消息静默丢失** — 子 agent 结果、Telegram/Signal 出站发送、WhatsApp 重连
3. **记忆系统缺陷** — 回忆驱逐、梦境升级失败、搜索超时
4. **平台特定回归** — macOS gateway 停止、Docker Windows 挂载、WSL2 SQLite 损坏

### 最活跃的 PR（按讨论量排序）

讨论最多的 PR 主要聚焦于：
- **Auto-reply 稳定性** (#190472) — 在后台完成时保持执行上下文
- **Control UI 文件夹管理** (#194763) — 会话组织的用户体验改进
- **Skills 发现性能** (#194874) — 防止库存读取期间的 UI 阻塞

---

## 5. Bug 与稳定性

### 关键（P0/P1）Bug — 按严重程度排序

| 严重程度 | Issue | 标题 | 影响 | 修复 PR？ |
|----------|-------|------|------|-----------|
| 🔴 P0 | [#193962](https://github.com/openclaw/openclaw/issues/193962) | SQLite 头部探测超时修复无法在 2026.10.10 到达 | **UX-release 阻塞**：更新机制损坏 | 无 |
| 🔴 P0 | [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 刷新成功但 cron/心跳以 10s 超时失败 | Auth 回归，消息丢失 | 无 |
| 🔴 P1 | [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec 返回共享状态完整性准入错误 | 28+ 次失败，子效应未验证 | 无 |
| 🔴 P1 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子 agent 完成静默丢失 | 会话状态，消息丢失 | 无 |
| 🔴 P1 | [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同一会话通道的两次并发运行完成并发送重复回复 | 高负载下消息丢失 | 无 |
| 🔴 P1 | [#126821](https://github.com/openclaw/openclaw/issues/126821) | 原始重建的 DB 在 15–24 小时内再次出现 SQLite 损坏（WSL2） | 数据丢失，崩溃循环 | 无 |
| 🔴 P1 | [#117262](https://github.com/openclaw/openclaw/issues/117262) | 3 个并发写入句柄导致约 33s 事件循环停滞 | **崩溃循环**：性能退化 | 无 |
| 🟠 P1 | [#193262](https://github.com/openclaw/openclaw/issues/193262) | Docker 启动时从 Windows 驱动器绑定挂载 state 目录失败 | 回归，影响 WSL2/Docker 用户 | 无 |
| 🟠 P1 | [#144336](https://github.com/openclaw/openclaw/issues/144336) | 延迟配置重载重启（SIGUSR1）在关闭步骤失败 | 稳定版发布阻塞 | 无 |

### 值得关注的回归报告

- **#193262**：自 2026.9.3 起影响 Windows/WSL2 用户的 Docker 绑定挂载回归
- **#38327**：2026.3.2 中的 Google-Vertex/Gemini-3.1-pro-preview auth 回归
- **#126821**：2026.8.1-beta.2 在 WSL2 上的 SQLite 损坏回归

### 表明近期已修复的已关闭 Issue

| Issue | 标题 | 状态 |
|-------|------|------|
| [#143278](https://github.com/openclaw/openclaw/issues/143278) | 心跳内部输出泄漏到 Telegram 用户聊天（2026.9.3） | **已关闭**（主分支无法复现） |
| [#139477](https://github.com/openclaw/openclaw/issues/139477) | 为 bundle-MCP CLI 后端遵守 `tools.toolSearch` | **已关闭**（主分支无法复现） |

**稳定性评估：** 项目正在应对多个 SQLite 相关问题（损坏、竞争、检查点失败），表明底层数据库层承压。关键 P0/P1 issue 缺乏修复 PR 表明这些问题较为复杂，需要深入调查。

---

## 6. 功能需求与路线图信号

### 高价值功能需求（按参与度排序）

| # | 标题 | 评论数 | 👍 | 近期实现可能性 |
|---|-------|----------|----|----------------------------------------|
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 减少工具 schema token 开销（每会话约 3,500 tok） | 12 | 0 | **高** — 核心性能问题 |
| [#101422](https://github.com/openclaw/openclaw/issues/101422) | 可配置的回忆资格和索引排除路径 | 10 | 2 | **中** — 记忆插件增强 |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 完全动态的模型发现（OpenRouter 及更多） | 10 | 4 | **中** — 提供商生态扩展 |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | 让记忆槽所有者驱动 Dreams 页面 | 11 | 0 | **低** — 插件扩展性请求 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 入职向导应包含 Memory/Embedding 设置 | 10 | 2 | **中** — 用户体验改进 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent 触发的上下文压缩（自压缩工具） | 9 | 2 | **中** — 智能体自主性功能 |

### 路线图信号

1. **Token 效率重点关注**：工具 schema 每会话约 3,500 tokens 的开销是一个重要的成本优化机会，符合用户需求
2. **动态模型发现**：OpenRouter 集成表明更广泛的多提供商策略
3. **记忆系统成熟度**：对可配置回忆资格和 Dreams 页面扩展性的请求表明记忆功能正在稳定
4. **插件生态系统**：多个关于插件 MCP 服务器冲突 (#194831) 和插件状态迁移 (#194897) 的 issue 表明插件生态正在增长

---

## 7. 用户反馈摘要

### 痛点（反复出现的主题）

| 主题 | 证据 | 严重程度 |
|-------|----------|----------|
| **消息静默丢失** | Telegram 死信 (#125764)、WhatsApp 回填 (#50093)、Signal 假脱机循环 (#143581)、steer 模式注入 (#48003) | 🔴 关键 |
| **SQLite 不稳定** | 损坏 (#126821)、竞争停滞 (#117262)、检查点失败 (#166634) | 🔴 关键 |
| **会话状态损坏** | Native exec 完整性错误 (#177656)、子 agent 丢失 (#44925)、Matrix 循环 (#114211) | 🔴 关键 |
| **平台特定回归** | macOS gateway 停止 (#191944)、Docker/WSL2 问题 (#193262, #126821) | 🟠 高 |
| **记忆搜索可靠性** | 超时 (#128140, #136405)、冷 Ollama 查询阻塞 (#114913) | 🟠 高 |

### 正面反馈指标

- 头部 issue 收到 32 条评论，表明活跃的社区参与
- 多个"源复现"issue 被关闭（主分支无法复现），表明修复正在落地
- 插件生态系统增长（Muse、Codex、skill-workshop 改进）
- Control UI 受到大量关注 (#194763, #194874)

### 用户不满信号

- **"🦞 diamond lobster" 评分**出现在多个 P1 issue 上，表明社区认为这些是高严重性
- **长期未解决的关键 issue**：#44925（8+ 个月）、#48003（8+ 个月）、#111897（4+ 个月）
- **回归模式**：用户报告"之前可用，现在失败"，涉及 SQLite、auth 和 Docker 场景

---

## 8. 待办事项关注

### 长期未回复的关键 Issue（需维护者关注）

| # | 存续时间 | 标题 | 优先级 | 差距 |
|---|---------|-------|----------|-----|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 约 8 个月 | 子 agent 完成静默丢失 | P1 🦞 | 需要产品决策 + 修复 PR |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | 约 8 个月 | Steer 模式不在轮次中途注入消息 | P1 🦐 | 需要信息 + 修复 PR |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 约 4 个月 | 并发运行发送重复回复 | P1 🦪 | 需要维护者审查 |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | 约 3 个月 | 单次尝试后 Telegram 死信 | P1 🐚 | 需要现场复现 + 产品决策 |
| [#156895](https://github.com/openclaw/openclaw/issues/156895) | 约 2 个月 | Agent 创建的自动化作业因账户不可用而失败 | P1 🐚 | **安全** — 需要安全审查 |

### 缺少修复 PR 的停滞问题

以下 P1 issue 尽管经过数月讨论仍无相关修复 PR：
- [#177656](#) — Native exec 完整性准入（22 天）
- [#119720](#) — 事件循环阻塞（97 天）
- [#117262](#) — SQLite 竞争停滞（99 天）
- [#126821](#) — SQLite 损坏回归（80 天）

### 需要维护者关注的 PR

| PR | 标题 | 状态 | 等待时间 |
|----|-------|--------|------------|
| [#190472](https://github.com/openclaw/openclaw/pull/190472) | fix(auto-reply): 执行完成时保持请求者的发送者策略 | 👀 等待维护者审阅 | 11 月 1 日 |
| [#168611](https://github.com/openclaw/openclaw/pull/168611) | test(qa-lab): 回放插件媒体路径 | 👀 等待维护者审阅 | 10 月 10 日 |
| [#192830](https://github.com/openclaw/openclaw/pull/192830) | fix(release): 隔离 Plugin SDK 前驱获取 | 👀 等待维护者审阅 | 11 月 4 日 |

---

## 总结评估

**项目健康度：⚠️ 面临挑战**

OpenClaw 展现出健康的开发活跃度（191 个 PR 合并），但面临重大稳定性挑战。SQLite 层承压明显，出现多个损坏、竞争和检查点问题。跨通道静默消息丢失是持续 8+ 个月的关键用户痛点。平台特定回归（macOS、Docker/WSL2）表明测试覆盖存在空白。社区参与积极，但对长期未解决的关键 issue 缺乏修复 PR 日益感到沮丧。优先解决 SQLite 稳定性和消息传递可靠性将对用户满意度产生最大影响。

---

*简报基于 OpenClaw 仓库数据生成 — 2026-11-08*

---

## 横向生态对比

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. Let me carefully translate the content while following the rules:

1. Output ONLY the translation, no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, code, project names, PR references as-is
4. Use natural technical Chinese register

Let me translate section by section carefully.
</think>


# Personal AI Assistant & Agent 开源生态 — 跨项目对比报告

**报告日期：** 2026-11-08  
**监测范围：** OpenClaw · Hermes Agent · IronClaw · QwenPaw · ZeroClaw

---

## 1. 生态全景

个人 AI 助手与 Agent 开源生态正经历一场**功能深度打磨与安全加固并重**的关键阶段，各项目正在从实验性原型向生产级基础设施过渡。2026 年 11 月 8 日，五个监测项目在单一 24 小时内合计产生了 579 条 issue 更新和 592 条 PR 更新，彰显该领域的高速演进态势。**OpenClaw 以绝对体量领跑**，日活跃量约为其最近竞品的 10 倍，暗示其要么拥有规模大得多的贡献者社区，要么社区驱动的 issue 上报机制异常活跃。生态呈现出清晰的分层格局：两个大体量项目（OpenClaw、Hermes Agent）正处于功能迭代与稳定性加固双重周期；ZeroClaw 保持以安全为核心的开发节奏；QwenPaw 快速推进搜索与 Provider 韧性建设；IronClaw 则处于低活跃度的维护状态。今日所有项目均无新版本发布，透露出一个共同信号——大家都在集中精力处理待上线代码，而非进行版本发布。当下横跨多个项目的核心议题集中在**多渠道消息可靠性、SQLite 稳定性、会话状态完整性及多租户安全隔离**四个方向——这表明整个生态正在共同面对从单人工具到共享部署架构的转型挑战。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|--------|----------|-------------|----------|---------|----------|
| **Issue 更新数（24h）** | 500 | 50 | 1 | 7 | 21 |
| **Issue 开放/活跃数** | 420 | 12 | 1 | 6 | 18 |
| **Issue 关闭数（24h）** | 80 | 38 | 0 | 1 | 3 |
| **PR 更新数（24h）** | 500 | 50 | 0 | 8 | 34 |
| **PR 开放数** | 309 | 40 | 0 | 8 | 30 |
| **PR 合并/关闭数** | 191 | 10 | 0 | 0 | 4 |
| **新版本发布** | 0 | 0 | 0 | 0 | 0 |
| **社区规模信号** | 非常大 | 大 | 小 | 中等 | 中等 |
| **开发阶段** | 功能 + 稳定化 | 插件扩展 + 平台加固 | 维护 | 功能 + Bugfix | 安全加固 + Relay 平台 |
| **健康度评分（综合）** | ⚠️ 承压 | ✅ 健康 | ⚠️ 低活跃 | ✅ 健康 | ⚠️ 安全关键 |

**分析：**

- **OpenClaw** 是整个生态的绝对主力，承接了 86% 的 issue/PR 活动总量。开放与关闭 Issue 10:1 的比例（420:80）预示着积压风险，尤其在 7 个以上 P1 严重 Bug 尚无对应修复 PR 的情况下。
- **Hermes Agent** 今日呈现出最健康的开放-关闭比例（12:38，即 0.32），说明问题消化效率很高。12 个 PR 在今日合并（含 12 个插件目录新增项），体现了生态化运营的活力。
- **QwenPaw** 现有 8 个开放 PR，今日合并数为 0——正处于 Code Review 排队阶段。合并缺失背后可能是维护者带宽瓶颈。
- **ZeroClaw** 展现出以安全为导向的开发节奏：今日合并的 4 个 PR 全部涉及安全问题，7 个跟踪 Bug 中有 3 个为 S0/S1 级别。
- **IronClaw** 社区活跃度极低，仅有 1 个开放的功能请求，公开数据中未见任何活跃开发痕迹。

---

## 3. OpenClaw 的生态位

### 相对竞品的优势

OpenClaw 的社区体量领先其他项目一个量级，这带来了以下优势：

| 优势维度 | 具体表现 |
|-----------|----------|
| **最广泛的多渠道覆盖** | 在 Telegram、Signal、WhatsApp、Matrix、飞书、Discord 等渠道上均有活跃的 Issue 跟踪，渠道数量超过任何竞品 |
| **最深度的 SQLite 研究积累** | 跟踪了 5 个以上 SQLite 相关 Bug（损坏、竞争、检查点、WSL2、限额回退），是整个生态中 SQLite 调试经验最丰富的项目 |
| **最庞大的代码审查体量** | 24 小时内合并 191 个 PR，为社区级代码评审提供了高频次的验证机会 |
| **最成熟的会话编排能力** | 子 Agent 编排、Steer 模式、并发运行去重、自动回复等功能均领先于各竞品的对应实现 |

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|-----------|----------|-------------|----------|---------|
| **架构风格** | 以 Gateway 为核心，CLI、桌面端、Relay 桥接多端 | 插件驱动，配套 Marketplace 生态 | Relay-first 设计，mTLS + OIDC 加持 | Scroll 驱动，配套 Memory Space |
| **数据库策略** | SQLite（主存储），存在竞争/损坏隐患 | SQLite（会话状态、Kanban 看板） | SQLite（会话、Agent 状态） | SQLite（记忆搜索、会话历史） |
| **多租户模型** | 通过渠道隔离（每个渠道即一个租户边界） | 通过插件和 Kanban 实现多项目隔离 | 通过 RBAC 和 Relay 实现所有权级别隔离 | 通过 Model Provider 实现多 Provider 隔离 |
| **插件模型** | 内置 Tool/Agent 系统 + 插件生态 | 外部目录 + 社区贡献插件 | RPC 分发的插件 Webhook | Tool Provider + Memory 插件 |
| **发布节奏** | 高频持续合并 | 稳定版 + Beta 版双轨 | 功能分支 + 安全热修复 | Beta 版高频迭代 |

### 社区规模对比

| 项目 | 活跃 Issues | 活跃 PRs | 合并速率（24h） | Issue 关闭速率（24h） |
|---------|---------------|------------|------------------|------------------------|
| **OpenClaw** | 420 | 309 | 191/day | 约等于每日处理开放量的 19% |
| **Hermes Agent** | 12 | 40 | 10/day | 约等于每日处理开放量的 76% |
| **ZeroClaw** | 18 | 30 | 4/day | 约等于每日处理开放量的 17% |
| **QwenPaw** | 6 | 8 | 0/day | 约等于每日处理开放量的 17% |
| **IronClaw** | 1 | 0 | 0/day | 0% |

OpenClaw 的 420 个开放 Issue 既是其最大优势（社区参与度高）的体现，也是最大风险（积压管理能力不足）的信号。其绝对合并量（191/day）是第二活跃项目的 19 倍，但相对于开放 Issue 存量而言，关闭率偏低——说明 Issue 增长速度快于消化速度。

---

## 4. 跨项目共同技术焦点

以下需求在多个项目中同步出现，表明整个生态正在共同面对相同的技术挑战，在任一平台上构建应用的开发者都应提前做好应对准备：

### A. SQLite 可靠性（OpenClaw、Hermes Agent、ZeroClaw、QwenPaw）

四个活跃项目均以 SQLite 作为主数据存储，用于会话状态、Agent 记忆和应用数据管理。其中三个项目正在积极处理 SQLite 相关 Bug：

| 项目 | SQLite 隐患 | 严重级别 |
|---------|------------|----------|
| **OpenClaw** | 损坏（WSL2、清空数据库）、竞争阻塞（3 个并发写入即导致事件循环阻塞 33 秒）、检查点失败、限额触发后跳过回退 | 🔴 严重 |
| **Hermes Agent** | 从过期的 `sessions.json` 路由键中恢复会话导致状态错误 | 🟠 高 |
| **ZeroClaw** | 每次对话轮次重写时间戳（破坏消息级时间精度），append-only 会话历史迁移进行中 | 🟠 高 |
| **QwenPaw** | SQLite 锁冲突被误报为 TimeoutError，发生在 `MemorySpace.search` | 🟠 高 |

**开发者建议：** SQLite 的单写入模型在并发 Agent 工作负载下会产生竞争压力。各项目正在探索 WAL 模式调优、独立写队列、append-only 事件日志等方案。在这些技术栈上构建应用时，应预期到偶发的锁竞争并做好优雅降级方案。

### B. 多渠道消息可靠性（OpenClaw、Hermes Agent）

在 Telegram 集成上（生态中讨论最多的渠道），两个项目均存在静默丢消息的跟踪记录：

| 项目 | 问题 | 持续时间 |
|---------|-------|----------|
| **OpenClaw** | 子 Agent 完成事件静默丢失（#44925） | 约 8 个月 |
| **OpenClaw** | Telegram 单次投递失败后进入死信处理（#125764） | 约 3 个月 |
| **OpenClaw** | WhatsApp 重连后消息丢失（#50093） | 约 3 个月 |
| **Hermes Agent** | 含文档的 Album 被拒绝（#143605，已解决） | — |
| **Hermes Agent** | Telegram 轮询恢复修复（#150983） | 今日合并 |

**开发者建议：** 多渠道消息处理是集成面中风险最高的环节。应实现显式重试逻辑、死信队列和面向用户的投递状态指示，绝不假设渠道投递是可靠的。

### C. 会话状态完整性（OpenClaw、ZeroClaw）

两个项目均有安全级别的会话状态 Bug 处于跟踪状态：

| 项目 | 问题 | 严重级别 |
|---------|-------|----------|
| **OpenClaw** | 原生 Host 执行返回共享状态完整性-验收错误（#177656）—— 28+ 次失败，子 Agent 副作用未经验证 | S0 |
| **OpenClaw** | 并发运行产生重复回复（#111897） | S1 |
| **OpenClaw** | 子 Agent 完成事件静默丢失（#44925） | S1 |
| **ZeroClaw** | Session/Channel Tool 缺少按 Agent 粒度的所有权隔离（#9646） | S0 |
| **ZeroClaw** | 队列中的会话操作保留已撤销管理员的所有权绕过（#11126） | S1 |
| **ZeroClaw** | await 后会话权限绕过（#12239，今日修复） | S1 |

**开发者建议：** 会话状态管理是 Agent 框架中最敏感的安全环节。两个项目均在实现 await 边界后的权限重新检查模式。应用层应将 Agent 会话状态视为在明确验证前不可信的。

### D. 记忆与检索系统加固（OpenClaw、QwenPaw、Hermes Agent、ZeroClaw）

三个活跃项目均在大力推进记忆与检索系统：

| 项目 | 重点方向 | 相关 Issue |
|---------|----------|----------|
| **OpenClaw** | 检索淘汰、Dreaming 提升、搜索超时 | #150635, #128140, #136405 |
| **QwenPaw** | 对话轮边界解析、SQLite 错误屏蔽、行级检索过滤 | #8619, #8620, #8621 |
| **Hermes Agent** | Kanban Block 生命周期、前例强制执行 | #75444 |
| **ZeroClaw** | Append-only 会话历史、时间戳完整性 | #11921, #11420 |

**开发者建议：** 记忆系统是迭代最活跃的组件。API 变更、索引重建、检索行为调整均可预期。依赖特定记忆索引行为的应用应提前规划数据迁移路径。

### E. 插件/扩展性架构（OpenClaw、Hermes Agent、ZeroClaw、QwenPaw）

四个活跃项目均拥有插件或扩展系统，且均在同步扩展：

| 项目 | 今日插件相关动态 |
|---------|--------------------|
| **Hermes Agent** | 合并 12 个新增目录插件（zkagent-attest、kin、fleetkeep、proofops、showreel、zalodesk、recall-vault、precedent-log、recall、secret-guard、意大利语本地化） |
| **OpenClaw** | Muse、Codex、skill-workshop 改进；插件状态迁移工作（#194897）；MCP Server 冲突（#194831） |
| **ZeroClaw** | 经 RPC 分发的插件 Webhook（#11320、#11322）；多插件注册源（#12216） |
| **QwenPaw** | SpecStream 网络搜索 Provider 集成（#8618）；新 Tool Provider |

**开发者建议：** 生态正在向插件化扩展模型收敛。虽然各项目尚未统一标准（分别采用目录、RPC、Tool Provider、Webhook 等不同分发机制），但架构模式本身已高度通用化。

---

## 5. 差异化分析

### 功能聚焦差异化

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|-----------|----------|-------------|----------|---------|----------|
| **核心差异化** | 多渠道协同、会话编排 | 插件 Marketplace、Kanban 工作流 | Relay 基础设施、安全、多租户 | 记忆检索、Token 校准、Scroll 交互 | — |
| **最强方向** | 渠道广度、自动回复、子 Agent 编排 | 插件生态、i18n、桌面 UX | 安全加固、RBAC、Relay 托管 | Token 预算、上下文压缩、检索 | — |
| **最弱信号** | 稳定性（大量 P0/P1 开放中） | Windows 平台覆盖 | 插件 Webhook（进行中） | Windows 回归（阻塞 2.3.0 发布） | 极低活跃度 |
| **安全姿态** | 被动响应（有 Bug 才修） | 被动响应 | 主动防御（每日安全修复） | 被动响应 | 未知 |

### 目标用户对比

| 项目 | 主要用户 | 次要用户 | 部署模式 |
|---------|-------------|-----------|------------------|
| **OpenClaw** | 运行多渠道 Agent 的高级用户、开发者 | 需要多渠道整合（Telegram + Signal + WhatsApp）的团队 | 自托管，CLI 为主 |
| **Hermes Agent** | 普通用户、桌面用户、国际用户（10 种语言） | 需要插件扩展能力的开发者 | 自托管 + 云（Hermes Cloud） |
| **ZeroClaw** | 安全敏感型运维人员、企业部署 | 需要多租户隔离和 OIDC 集成的团队 | Relay 中心化，mTLS 优先 |
| **QwenPaw** | 关注 Token 效率的开发者与研究人员 | 有特定 Provider 需求的用户（Tsubasa、Ollama、OpenAI 兼容端点） | 自托管，Scroll/Web-UI 为主 |
| **IronClaw** | NearAI 生态用户 | Tsubasa 配置用户 | NearAI 平台集成 |

### 技术架构对比

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|-----------|----------|-------------|----------|---------|
| **入口点** | Gateway 守护进程 + CLI | 桌面应用 + CLI + 云端 | Relay 守护进程 | Scroll（Web UI）+ 守护进程 |
| **渠道模型** | 每渠道一个适配器（Telegram、Signal、WhatsApp 等） | 插件化渠道 | Relay 服务的渠道 + mTLS | 基于 Tool 的渠道集成 |
| **Agent 模型** | 多 Agent + 子 Agent 编排 | Kanban 驱动的任务 Agent | RBAC 作用域的 Agent 所有权 | Scroll 驱动的会话 Agent |
| **记忆模型** | Dreaming + Recall + 短期保留 | Kanban 任务记忆 + 插件记忆 | Append-only 会话历史 | Memory Space + 分页检索 |
| **安全模型** | 渠道级认证、Tool 权限隔离 | OIDC 浏览器绑定、会话权限守卫 | Relay mTLS + OIDC + 按 Agent RBAC | Provider 级认证 + 凭证守卫插件 |
| **UI 模型** | Control UI（Web）、桌面应用 | 桌面应用（Hearth）、Dashboard、WebApp | Relay 服务的 Dashboard（第 2 阶段） | Scroll Web 界面 |

---

## 6. 社区动能与成熟度

### 活跃度层级

| 层级 | 项目 | 特征 |
|------|---------|------------------|
| **第一层 — 大体量生产级** | **OpenClaw** | 500 条 Issue/PR 日更新，大社区，复杂积压，多个严重 Bug，快速功能迭代 |
| **第二层 — 活跃开发期** | **Hermes Agent**, **ZeroClaw** | 日均 50 和 34 条 PR，合并率健康，功能扩展与安全加固并重 |
| **第三层 — 功能迭代期** | **QwenPaw** | 日均 8 条 PR，Review 阶段瓶颈，活跃 Bugfix 和功能开发，存在阻塞稳定的回归问题 |
| **第四层 — 维护期** | **IronClaw** | 日均 1 条 Issue，1 个开放功能请求，无活跃开发 |

### 快速迭代型项目

| 项目 | 速度信号 | 迭代性质 |
|---------|----------------|--------------------|
| **OpenClaw** | 日合并 191 个 PR | 广度优先（渠道、Agent、记忆、UI）+ 稳定性债务累积 |
| **Hermes Agent** | 日增 12 个目录插件 | 插件生态扩展、Telegram 平台加固 |
| **QwenPaw** | 8 个 PR 处于 Review | 搜索层、Token 校准、Provider 韧性 |

### 稳定化型项目

| 项目 | 信号 | 解读 |
|---------|--------|----------------|
| **ZeroClaw** | 4 个安全修复合并，聚焦加固 | 从功能建设转向安全加固——典型的发布前稳定化行为 |
| **OpenClaw** | 7 个 P1 Bug 在数月讨论后仍无修复 PR | 功能迭代速度超出维护承载能力——风险信号 |

### 成熟度指标

| 指标 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|-----------|----------|-------------|----------|---------|
| **长期开放的严重 Bug（>3 个月）** | 4+ | 0 | 0 | 0 |
| **安全 Bug 响应时效** | 被动（8 个月悬而未决） | 被动 | 主动（每日修复） | 被动 |
| **发布标签频率** | 高（持续发布） | 中（Stable + Beta 双轨） | 功能分支 | Beta 高频 |
| **回归跟踪** | 活跃（多个已报告） | 中等（桌面端 v0.23.0 回归） | 少量 | 活跃（Windows 阻塞 Stable） |
| **插件生态** | 已建立 | 繁荣（今日新增 12 个） | 萌芽（RPC Webhook） | 初生（Tool Provider） |

---

## 7. 趋势信号

### 针对 AI Agent 框架开发者的建议

以下信号从五个项目的社区反馈中提炼而出，揭示了生态演进方向和从业者应提前准备应对的挑战：

#### 1. SQLite 是整个生态的共同风险面

五个项目中有四个使用 SQLite，且这四个项目均有活跃的 SQLite 相关 Bug。问题模式高度一致：**Agent 工作负载下的并发写入竞争**导致事件循环阻塞、数据损坏和检查点失败。生态正在向 WAL 模式调优、独立写队列和 append-only 事件日志方向收敛以缓解问题。在这些技术栈上构建生产部署的开发者应将 SQLite 视为已知瓶颈，并为最终迁移至 PostgreSQL 或同类方案做好准备。

#### 2. 静默消息丢失是用户反馈的第一痛点

在 OpenClaw 和 Hermes Agent 中，消息丢失问题跨度超过 8 个月，波及所有渠道（Telegram、Signal、WhatsApp、Matrix、飞书）。社区始终将此类问题评为最高严重级别。这说明**渠道可靠性工程相对于 Agent 逻辑仍属短板**。任何新的渠道集成都应从上线首日起就实现显式确认、重试退避、死信队列和面向用户的投递状态展示。

#### 3. 安全正从被动响应转向主动防御

ZeroClaw 每日安全合并与 OpenClaw 数月悬而未决的安全积压代表了谱系的两端。但更宏观的趋势是向主动安全迈进：OIDC 浏览器绑定、await 后会话权限重新检查、按 Agent 所有权隔离、面向多租户部署的 RBAC——这些机制正在多个项目中同步出现。生态正在认识到 **Agent 框架属于安全关键基础设施**，并正在相应地加固防线。

#### 4. 插件生态是主要差异化方向

Hermes Agent 单日新增 12 个目录插件的事实表明，**插件 Marketplace 模式比单体功能开发更能加速生态增长**。涌现中的插件类型——安全类（proofops、secret-guard）、生产力类（recall-vault、fleetkeep）、验证类（zkagent-attest）、无障碍类（kin companion、语音控制）——揭示了一个需求日益细分化的成熟用户群体。

#### 5. 记忆系统是迭代最活跃的组件

每个活跃项目都有与记忆、检索、Recall 或会话历史相关的开放 Issue 或 PR。需求正在向以下方向收敛：**append-only 事件日志、可配置保留策略、按来源检索过滤、上下文感知检索**。开发者应预期记忆系统 API 将发生变化，并为数据迁移做好规划。QwenPaw 的"Scroll"模型和 ZeroClaw 的"append-only 历史"模型代表了同一问题的两种架构路线。

#### 6. Relay 基础设施正在成为一等公民

ZeroClaw 的 Relay-first 架构与 OpenClaw 的 Relay Dashboard 托管工作（#10315 第 2 阶段）共同释放了一个信号：**Relay/代理基础设施正在从实现细节升级为一等工程组件**。企业部署需要 Relay 层托管 Dashboard、强制 mTLS、OIDC 集成，以及按 Agent 的所有权隔离。这与早期 Agent 框架将 Relay 视为简单 WebSocket 代理的做法形成了鲜明对比。

#### 7. Token 效率正在成为工程级需求

QwenPaw 在 Token 估算校准、上下文压缩和 Prompt 体积计算上连推多个 PR，表明**Token 预算管理正从 UX 问题演变为工程学科**。数字/UUID 密集型 Prompt 上 1.2–4 倍的低估问题，是生态正在深耕的典型精细化工程。开发者应预期 Token 管理 API 将日趋精密化。

#### 8. 多租户需求正在涌现

OpenClaw 的渠道级多租户、ZeroClaw 的按发送方 RBAC 和 Hermes Agent 的 Kanban 多项目支持，均指向**共享部署的多租户隔离已成为近在眼前的现实需求**，而非远期路线图事项。不能解决多租户隔离的项目将面临来自已完成该工作的竞品的竞争压力。

#### 9. Windows 与跨平台支持仍是脆弱点

QwenPaw 的 2.3.0-beta.1 Windows 11 IoT LTSC 回归问题、OpenClaw 的 Docker/WSL2 SQLite 损坏，以及 Hermes Agent 的 iPhone Safari 兼容性问题，共同指向一个结论：**跨平台测试覆盖滞后于功能开发**。面向企业 Windows 部署的开发者应在测试预算中为平台专项测试留出充足资源。

---

## 综合矩阵

| 维度 | 领先者 | 挑战者 | 落后者 |
|-----------|--------|------------|----------|
| **活跃体量** | OpenClaw | Hermes Agent | IronClaw |
| **Issue 解决速率** | Hermes Agent | ZeroClaw | IronClaw |
| **安全态势** | ZeroClaw | Hermes Agent | OpenClaw（被动式） |
| **插件生态** | Hermes Agent | OpenClaw | QwenPaw |
| **记忆系统成熟度** | QwenPaw | ZeroClaw | OpenClaw |
| **多渠道可靠性** | Hermes Agent | OpenClaw | QwenPaw |
| **多租户支持** | ZeroClaw | OpenClaw | QwenPaw |
| **跨平台质量** | Hermes Agent | ZeroClaw | OpenClaw |
| **Token 效率** | QwenPaw | OpenClaw | Hermes Agent |

---

*跨项目分析报告生成于 2026-11-08。数据来源：openclaw/openclaw、nousresearch/hermes-agent、nearai/ironclaw、agentscope-ai/QwenPaw、zeroclaw-labs/zeroclaw 五个监测仓库的 GitHub 活动记录。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content into Simplified Chinese
2. Keep all technical terms, code references, URLs, numbers, issue numbers, etc. as-is
3. Preserve all Markdown formatting (headings, tables, lists, etc.)
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through the document section by section and translate it carefully.

Key things to remember:
- Keep URLs, link targets, code spans, code blocks as-is
- Keep issue/PR numbers (#12345) and their links as-is
- Keep version tags, file paths, API/config identifiers in original form
- Use natural technical Chinese
- Preserve all Markdown structure

Let me translate:

---

# Hermes Agent 项目日报 — 2026-11-08

---

## 1. 今日概览

Hermes Agent 在 2026 年 11 月 8 日展现出**持续的高活跃度**，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目的开启/关闭比例健康：活跃 issue 12 个，关闭 38 个；开启 PR 40 个，合并/关闭 10 个，表明吞吐量强劲。社区今天的重点集中在 **Telegram 平台稳定性**（轮询恢复、相册处理、TTS 语音气泡）、**配置稳定性**（清空注释键时的配置损坏问题）和 **插件生态扩展**（今日合并 12 个新 catalog 条目）。

---

## 2. 发行版本

**今日无新版本发布。** 上一版带标签的发布（桌面端 v0.23.0 "Hearth"）于 2026 年 11 月 7 日发布，目前正在处理一个报告的回归问题：Fedora 用户在远程启动成功后，session 列表显示无限骨架占位符（[#150896](https://github.com/NousResearch/hermes-agent/issues/150896)）。

---

## 3. 项目进展

### 今日合并/关闭的 PR（10 个）

| PR | 作者 | 摘要 |
|----|------|------|
| — | — | *今日关闭了 10 个 PR；未在数据中提供明确的合并列表。吸收到代码库的关键修复包括：Telegram 轮询恢复、相册处理、空注释键清空时的配置损坏防护和 STT 依赖固定。* |

### 已落地的重要修复

- **配置完整性**：修复空注释键时 `config.yaml` 损坏问题（[#150985](https://github.com/NousResearch/hermes-agent/pull/150985)、[#148569](https://github.com/NousResearch/hermes-agent/pull/148569)）
- **Telegram 平台**：轮询恢复改进、相册文档支持、表情丰富回复的自动 TTS 语音气泡保留（[#150983](https://github.com/NousResearch/hermes-agent/pull/150983)、[#150978](https://github.com/NousResearch/hermes-agent/pull/150978)、[#150980](https://github.com/NousResearch/hermes-agent/pull/150980)）
- **STT 稳定性**：PyAV 19 兼容性问题通过固定 `av==18.1.0` 和 `faster-whisper==1.2.1` 解决（[#150984](https://github.com/NousResearch/hermes-agent/pull/150984)、[#135260](https://github.com/NousResearch/hermes-agent/pull/135260)）
- **Ollama 兼容性**：从传出消息中剥离 llama.cpp 媒体标记（[#108762](https://github.com/NousResearch/hermes-agent/pull/108762)）

### 新合并的 Catalog 插件（12 个）

| 插件 | 用途 |
|------|------|
| `zkagent-attest` | Agent 会话的可验证收据（[#149603](https://github.com/NousResearch/hermes-agent/pull/149603)） |
| `kin` | 桌面伴侣，含心情面板和循环哨兵（[#150982](https://github.com/NousResearch/hermes-agent/pull/150982)） |
| `fleetkeep` | 车辆 CSV 导入审阅技能（[#150184](https://github.com/NousResearch/hermes-agent/pull/150184)） |
| `proofops` | 完工声明验证（[#149625](https://github.com/NousResearch/hermes-agent/pull/149625)） |
| `showreel` | 会话演示视频生成器（[#150078](https://github.com/NousResearch/hermes-agent/pull/150078)） |
| `zal odesk` | ZaloDesk MCP 服务器连接器（[#150570](https://github.com/NousResearch/hermes-agent/pull/150570)） |
| `recall-vault` | 资金规则策略库和记忆（[#150638](https://github.com/NousResearch/hermes-agent/pull/150638)） |
| `precedent-log` | Kanban 执行的人类裁决（[#150678](https://github.com/NousResearch/hermes-agent/pull/150678)） |
| `recall` | 本地文件召回/索引（[#150109](https://github.com/NousResearch/hermes-agent/pull/150109)） |
| `secret-guard` | 通过 macOS 对话框安全输入 API 密钥（[#150858](https://github.com/NousResearch/hermes-agent/pull/150858)） |
| `Italian locale` | 桌面端国际化 — 第 10 个内置语言（[#134565](https://github.com/NousResearch/hermes-agent/pull/134565)） |

---

## 4. 社区热点

### 评论最活跃的 Issue（按评论数排序）

| # | 标题 | 评论数 | 状态 | 链接 |
|---|------|--------|------|------|
| 1 | 测试：默认安装时导入时 PM 激活触发 `home_io_guard` | 26 | OPEN | [#129455](https://github.com/NousResearch/hermes-agent/issues/129455) |
| 2 | kanban：自动分解器重新分派升级的任务（无限阻塞反弹） | 12 | OPEN | [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) |
| 3 | Telegram：包含文档的相册被拒绝，显示 `invalid_params` | 11 | CLOSED | [#143605](https://github.com/NousResearch/hermes-agent/issues/143605) |
| 4 | Telegram 适配器 `_redact_telegram_error_text` 被粘贴到格式化字符串中 | 7 | CLOSED | [#72668](https://github.com/NousResearch/hermes-agent/issues/72668) |
| 5 | Gateway 从过时的 `sessions.json` 路由键恢复已结束的会话 | 6 | CLOSED | [#61993](https://github.com/NousResearch/hermes-agent/issues/61993) |

### 底层需求分析

**Issue #129455**（26 条评论）揭示了一个系统级测试基础设施问题：`home_io_guard` fixture 在默认安装上失败，因为 `hermes_bootstrap.py` 在导入时探测 `<home>/mani...` 路径时激活了 PM。这会阻止所有新贡献者的测试套件和 CI 流程。

**Issue #75444**（12 条评论）暴露了 Kanban 自动分解器的逻辑缺陷：路由到 triage 且保留 `block_kind` 的任务被重新分派，造成无限循环。运行生产 Kanban 看板的用户会遇到任务过期问题。这表明需要**任务工作流引擎中健壮的阻塞生命周期管理**。

**Issue #27313**（4 条评论，3 个 👍）是获得最多正面反馈的功能请求——对**与图像视觉分离的视频分析后端**的需求，认识到原生视频工作负载需要与截图/图像不同的模型架构。

---

## 5. 缺陷与稳定性

### P2（高严重性）— 活跃/未解决

| # | 问题 | 平台 | 链接 | 修复 PR？ |
|---|------|------|------|-----------|
| 1 | 当 clarify 处于"其他（输入答案）"模式时，`/steer` 死锁 | Gateway | [#145161](https://github.com/NousResearch/hermes-agent/issues/145161) | — |
| 2 | 并发会话停滞 10+ 分钟；提供商几秒钟内完成 | Telegram、飞书 | [#120380](https://github.com/NousResearch/hermes-agent/issues/120380) | — |
| 3 | Hermes Cloud：所有出站 TCP 连接被拒绝，升级/重置/重启均无效 | Cloud | [#147564](https://github.com/NousResearch/hermes-agent/issues/147564) | — |
| 4 | iPhone Safari 上的 Webapp：`requestIdleCallback` 未定义 | Dashboard | [#148538](https://github.com/NousResearch/hermes-agent/issues/148538) | — |
| 5 | Kanban 自动分解器无限阻塞反弹 | CLI、Kanban | [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) | — |
| 6 | 默认安装上测试套件失败（`home_io_guard`） | CLI | [#129455](https://github.com/NousResearch/hermes-agent/issues/129455) | — |

### P2（高严重性）— 今日已解决

| # | 问题 | 解决方案 | 链接 |
|---|------|----------|------|
| 1 | Telegram 包含文档的相册被拒绝 | 通过 [#150978](https://github.com/NousResearch/hermes-agent/pull/150978) 修复 |
| 2 | Gateway 从过时路由键恢复已结束的会话 | 已关闭并讨论 |
| 3 | Telegram clarify 提示显示忙碌会话控件 | 已关闭 |
| 4 | Gateway 冷启动时 `HTTPXRequest = Any` 搁浅 | 已关闭 |

### P3（中严重性）— 值得注意

| # | 问题 | 链接 |
|---|------|------|
| 1 | 桌面端 v0.23.0：远程启动后会话列表骨架永久显示 | [#150896](https://github.com/NousResearch/hermes-agent/issues/150896) |
| 2 | 桌面端置顶区域缺失 Telegram 会话 | [#49667](https://github.com/NousResearch/hermes-agent/issues/49667) |
| 3 | Telegram `\boxed{}` LaTeX 未渲染 | [#47779](https://github.com/NousResearch/hermes-agent/issues/47779) |
| 4 | Telegram 视频渲染为黑卡，无元数据 | [#61569](https://github.com/NousResearch/hermes-agent/issues/61569) |
| 5 | Telegram 中缺失上下文压力监控器 | [#3953](https://github.com/NousResearch/hermes-agent/issues/3953) |

**稳定性说明**：Telegram 平台的缺陷密度最高（14 个跟踪中的 issue）。使用轮询模式的用户应关注 [#150983](https://github.com/NousResearch/hermes-agent/pull/150983) 以获取轮询恢复改进。v0.23.0 的桌面端用户应关注会话列表骨架问题。

---

## 6. 功能请求与路线图信号

### 按社区关注度排序的热门请求

| # | 请求 | 👍 | 链接 | 可能性 |
|---|------|----|------|--------|
| 1 | 与图像视觉分离的视频分析后端 | 3 | [#27313](https://github.com/NousResearch/hermes-agent/issues/27313) | 高 — 与多模态提供商多样性一致 |
| 2 | iPhone Safari 的 Webapp 兼容性 | 2 | [#148538](https://github.com/NousResearch/hermes-agent/issues/148538) | 高 — 移动仪表盘用户的阻碍 |
| 3 | 桌面端意大利语本地化（i18n） | — | [#134565](https://github.com/NousResearch/hermes-agent/pull/134565) | **已合并** ✓ |

### 路线图信号分析

**插件生态扩展**是今天的主导主题：
- 安全相关插件（`secret-guard`、`proofops`）表明企业合规需求
- 生产力插件（`recall-vault`、`precedent-log`、`fleetkeep`）表明 SMB/专业用例
- `zkagent-attest` 插件用于可验证收据表明对 **Agent 可审计性** 的需求不断增长

**预计近期重点领域**：
1. 会话状态管理（复活缺陷跨越多个 P2 issue）
2. Telegram 平台加固（轮询可靠性、相册处理）
3. 桌面端稳定性（v0.23.0 回归）
4. 测试基础设施（开箱即用的 CI 可靠性）

---

## 7. 用户反馈总结

### 痛点（用户报告）

| 主题 | 证据 | 严重性 |
|------|------|--------|
| **会话持久化意外** | 用户反映"会话运行了 23 小时，~12 美元费用，本应清除的上下文没有清除"（[#67781](https://github.com/NousResearch/hermes-agent/issues/67781)） | 高 — 成本影响 |
| **Telegram 媒体可靠性** | 包含文档的相册被拒绝、视频渲染为黑卡、GIF 被丢弃 | 高 — 核心体验 |
| **桌面端会话列表损坏** | v0.23.0 Hearth 用户看到无限骨架，无会话列出 | 高 — 发布回归 |
| **配置损坏风险** | 清空注释列表键后 `config.yaml` 无法解析 | 中 — 配置安全性 |
| **iPhone Safari 不可用** | 仪表盘在 iOS Safari 上因 `requestIdleCallback` 失败而无法渲染 | 中 — 移动端访问 |
| **缺少意大利语本地化** | 第 10 个最需要的语言直到今天才添加 | 低 — 已通过 [#134565](https://github.com/NousResearch/hermes-agent/pull/134565) 解决 |

### 从活动中反映的用例

- **Kanban 工作流自动化**：任务分派、阻塞生命周期和先例执行的多个 issue
- **多平台消息传递**：Telegram + 飞书 + Signal 并发会话
- **Hermes Cloud 部署**：云环境中的 TCP 网络边缘情况
- **本地模型集成**：Ollama/llama.cpp 兼容性修复
- **插件驱动的可扩展性**：12 个新 catalog 提交表明繁荣的插件市场

---

## 8. 积压关注

### 需要维护者关注的 Issue（陈旧或复杂）

| # | 问题 | 时长 | 状态 | 优先级 | 链接 |
|---|------|------|------|--------|------|
| 1 | 桌面端置顶区域不渲染 Telegram 会话 | ~5 个月 | CLOSED | P2 | [#49667](https://github.com/NousResearch/hermes-agent/issues/49667) |
| 2 | Telegram 中缺失上下文压力监控器 | ~8 个月 | CLOSED | P3 | [#3953](https://github.com/NousResearch/hermes-agent/issues/3953) |
| 3 | Telegram 会话摘要始终回退 | ~7 个月 | CLOSED | P2 | [#8045](https://github.com/NousResearch/hermes-agent/issues/8045) |
| 4 | Kanban 自动分解器无限阻塞反弹 | ~4 个月 | OPEN | P3 | [#75444](https://github.com/NousResearch/hermes-agent/issues/75444) |
| 5 | Signal RPC 发送的内联附件 | ~5 个月 | OPEN | P2 | [#53999](https://github.com/NousResearch/hermes-agent/issues/53999) |
| 6 | 视频分析分离的辅助后端 | ~6 个月 | OPEN | P3 | [#27313](https://github.com/NousResearch/hermes-agent/issues/27313) |

### 等待 Review/Merge 的 PR

| # | PR | 目的 | 时长 | 链接 |
|---|-----|------|------|------|
| 1 | fix: 内联 Signal 附件用于 RPC 发送 | Signal 媒体支持 | ~5 个月 | [#53999](https://github.com/NousResearch/hermes-agent/pull/53999) |
| 2 | fix: 剥离 llama.cpp 媒体标记 | Ollama 兼容性 | ~2 个月 | [#108762](https://github.com/NousResearch/hermes-agent/pull/108762) |
| 3 | fix(deps): 将 av 固定在 PyAV 19 以下 | STT 稳定性 | ~1 个月 | [#135260](https://github.com/NousResearch/hermes-agent/pull/135260) |

**关注说明**：Signal 集成 PR（[#53999](https://github.com/NousResearch/hermes-agent/pull/53999)）已开放 5 个月未合并。如果 Signal 平台支持是战略性的，则需要维护者关注。Kanban 自动分解器 issue（[#75444](https://github.com/NousResearch/hermes-agent/issues/75444)）正在收集评论（12 条）但仍未解决，表明阻塞生命周期重新设计存在复杂性。

---

*日报基于 2026-11-08 NousResearch/hermes-agent 活动生成。数据来源：24 小时窗口内的 GitHub issue/PR 更新。*</think>



</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the entire content while preserving:
- Markdown structure (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
- URLs and link targets
- Numbers and dates
- Project names, repository slugs, usernames, version tags, file paths, API/config identifiers
- Issue/PR references like #12345

Let me translate this carefully, maintaining the natural technical Chinese register.

Let me go through section by section:

## 1. Today's Overview
- Overview → 今日概览
- minimal activity → 活动较少
- low-velocity maintenance period → 低活跃维护期
- no critical path items → 无关键路径事项
- Expanding provider registry support → 扩展提供商注册表支持
- backend → 后端
- Overall project health indicators → 整体项目健康指标

## 2. Releases
- No new releases → 无新版本
- past 24 hours → 过去 24 小时内
- tagged any version updates → 打标签版本更新

## 3. Project Progress
- Project Progress → 项目进展
- PRs Merged/Closed → 已合并/关闭的 PR
- Issues Closed → 已关闭的 Issue
- Active PRs → 活跃 PR
- codebase remains static → 代码库保持静态

## 4. Community Hot Topics
- Community Hot Topics → 社区热点
- Most Active Issue → 最活跃的 Issue

For the issue #8115:
- Add a Tsubasa registry entry with an explicit 32K context-budget path → 添加带有显式 32K 上下文预算路径的 Tsubasa 注册表条目
- Tsubasa registry entry → Tsubasa 注册表条目
- context-budget → 上下文预算


- OpenAI-compatible backend → OpenAI 兼容后端
- Tsubasa provider → Tsubasa 提供商
- registry entry → 注册表条目
- 32K context-budget specification → 32K 上下文预算规格

I'll continue translating the detailed context, focusing on technical nuances and maintaining the original markdown structure. The key is to capture the technical details while preserving the original formatting and intent of the report.

The issue highlights a specific provider configuration challenge for AI model integrations. Users want more streamlined and predefined configuration options that allow easier management of context allocation and provider selection. The translation needs to reflect these technical subtleties, ensuring that the core problem and proposed solution are accurately conveyed in Chinese technical language.

The roadmap prediction suggests this is a candidate feature for a minor release. It represents a low-complexity enhancement that could improve user onboarding and configuration experience, particularly for Tsubasa users who currently need to manually set up endpoints and models.

No bug reports were filed in the past 24 hours, indicating stable user experience. The lack of critical issues suggests the codebase remains robust, though feature request gaps exist in provider configuration convenience.

Active feature requests focus on provider configuration and OpenAI-compatible backend support. These pain points highlight user needs for more streamlined and predefined configuration options in the IronClaw project.

The Tsubasa registry entry issue, open for over 40 days, represents a well-defined, low-complexity enhancement. Maintainer acknowledgment would improve community confidence and potentially guide future development priorities.

User feedback reveals configuration challenges with manual provider setups and limited named provider options. The implied use cases suggest users seek more integrated and straightforward provider integration methods.

The backlog watch highlights a specific feature request for a Tsubasa registry entry with a 32K context-budget path. With over 40 days of inactivity and no maintainer response, this issue represents a potential area for strategic development and community engagement.

The recommendation is to prioritize this feature request due to its well-defined nature and potential impact on user experience. A targeted approach could involve detailed technical review and collaborative problem-solving with the project maintainers.
</think>


# IronClaw 项目日报

**日期：** 2026-11-08  
**项目：** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**报告类型：** 每日项目状态

---

## 1. 今日概览

IronClaw 在 2026 年 11 月 8 日活动较少，过去 24 小时内仅有 1 个 open 状态的 issue 更新，零个 PR 处理。项目当前处于低活跃维护期，无新版本发布、无合并代码、无已关闭 issue。唯一的活跃 issue 涉及扩展提供商注册表支持，以便用户更好地配置 AI 后端。整体项目健康指标显示处于稳定维护模式，无关键路径事项需立即处理。

---

## 2. 版本发布

**过去 24 小时内无新版本**发布。项目自上一个发布周期以来未打任何版本标签。

---

## 3. 项目进展

| 指标 | 数量 |
|--------|-------|
| 已合并/关闭的 PR（24h） | 0 |
| 已关闭的 Issue（24h） | 0 |
| 活跃 PR | 0 |

今日无 PR 被合并或关闭。无功能通过 PR 流程推进，也无 bug 修复被合并。从已合并变更的角度来看，代码库保持静态。

---

## 4. 社区热点

### 最活跃的 Issue

| # | 标题 | 作者 | 状态 | 创建时间 | 更新时间 | 评论数 | 表情反应 |
|---|-------|--------|--------|---------|---------|----------|-----------|
| [#8115](https://github.com/nearai/ironclaw/issues/8115) | 添加带有显式 32K 上下文预算路径的 Tsubasa 注册表条目 | cenab | OPEN | 2026-09-28 | 2026-11-07 | 0 | 👍 0 |

**分析：**  
该 issue 请求在 IronClaw 的注册表系统中添加一个命名的 Tsubasa 提供商。动机很明确：虽然 IronClaw 已支持 OpenAI 兼容后端，但用户在手动配置 Tsubasa 时仍需输入端点和模型详情。添加一个专用的注册表条目可以简化凭证设置和模型选择流程。32K 上下文预算的规格说明表明用户希望对上下文分配进行精细控制，32,000 个 token 的上下文窗口支持是用户的一个明确需求。尽管该 issue 自 2026 年 9 月底就已 open，但收到了零条评论，说明要么社区关注度低，要么该请求尚未完全发展成熟供维护者审核。

**潜在需求：** 用户希望通过预配置的上下文限制（而非手动端点/模型输入）获得简化的命名提供商配置。

---

## 5. Bug 与稳定性

**过去 24 小时内无 bug 报告**。无崩溃、回归或稳定性问题被报告。

无 bug 活动是一个积极的信号，表明代码库稳定性良好，但也可能反映此期间使用量或报告活动较低。

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

**Issue [#8115](https://github.com/nearai/ironclaw/issues/8115)：添加带有显式 32K 上下文预算路径的 Tsubasa 注册表条目**

| 属性 | 值 |
|-----------|-------|
| 作者 | cenab |
| 创建时间 | 2026-09-28 |
| 最后更新时间 | 2026-11-07 |
| 优先级信号 | 长期 open 的请求（>40 天），表明存在未满足的需求 |

**路线图预测：**  
考虑到：
1. 该 issue 已 open 一个多月
2. 代表一个简单直接的增强（注册表条目添加）
3. 解决了提供商配置中的真实 UX 差距

该功能是纳入即将发布的次版本的一个候选。如果被采纳，将通过消除手动端点/模型配置来改善 Tsubasa 用户的入门体验。

---

## 7. 用户反馈摘要

基于 issue 活动和功能请求的性质，已识别的用户痛点包括：

| 痛点 | 证据 | 严重程度 |
|------------|----------|----------|
| Tsubasa 需要手动配置提供商 | Issue #8115 | 中等 |
| OpenAI 兼容后端缺少命名提供商条目 | Issue #8115 | 中等 |

**隐含的使用场景：**
- 将 Tsubasa 集成为 AI 后端的用户希望有预配置的提供商选项
- 某些部署场景中，上下文窗口管理（32K tokens）是用户的优先事项

**满意度指标：**  
缺乏 bug 报告且仅有一个低互动性的 issue，表明整体用户体验较为稳定，尽管功能请求显示了配置便利性方面的差距。

---

## 8. 待办事项关注

| Issue # | 标题 | 存在时间 | 状态 | 需维护者关注 |
|---------|-------|-----|--------|----------------------|
| [#8115](https://github.com/nearai/ironclaw/issues/8115) | 添加带有显式 32K 上下文预算路径的 Tsubasa 注册表条目 | ~40 天 | OPEN | 建议关注 |

**理由：**  
Issue #8115 自 2026 年 9 月 28 日 open，2026 年 11 月 7 日最后更新。尽管存在时间较长，但未收到维护者回复或社区互动（0 条评论）。该 issue 代表了一个定义清晰、复杂度低的增强功能，可以改善用户体验。维护者的确认——无论是分类、请求澄清还是标明里程碑目标——都会增强社区信心。

---

## 摘要表

| 类别 | 状态 |
|----------|--------|
| 版本发布（24h） | 0 |
| PR 合并（24h） | 0 |
| Issue 新开（24h） | 1 |
| Issue 关闭（24h） | 0 |
| Bug 报告 | 0 |
| 关键阻塞 | 0 |

---

**报告生成时间：** 2026-11-08  
**数据来源：** [nearai/ironclaw GitHub](https://github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Preserve the exact Markdown structure (headings, tables, lists, etc.)
3. Keep all URLs, numbers, dates, code references, issue/PR numbers as-is
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

Title: QwenPaw Project Digest — 2026-11-08
→ QwenPaw 项目日报 — 2026-11-08

Let me translate carefully, maintaining the technical Chinese register.
</think>


# QwenPaw 项目日报 — 2026-11-08

## 1. 今日概览

QwenPaw（agentscope-ai/QwenPaw）在 2026 年 11 月 8 日表现出**高开发活跃度**，过去 24 小时内有 7 个 issue 和 8 个 pull request 有关更新。今日无新版本发布。项目中存在一些稳定性问题值得关注——Windows 11 IoT LTSC 上的 beta 版本回归问题为新报告，同时多条 memory/search 层 bug 正在通过 PR 进行修复。历经约 8 个月的迭代，跨智能体协作功能请求（#2420）已关闭。社区贡献覆盖范围广泛：搜索内部实现、token 校准、provider 弹性，以及新的网络搜索集成。今日所有 8 个 PR 均未合并，处于代码 review 审核阶段。

---

## 2. 版本发布

**今日无新版本发布。** 最新可用版本仍早于 2026-11-08。值得注意的是，**QwenPaw 2.3.0-beta.1** 正在测试中，但目前已被标记为在 Windows 11 IoT LTSC 上存在问题（见 §5），这可能会延迟其正式版发布。

---

## 3. 项目进展

> ⚠️ 今日更新的全部 8 个 PR 仍处于 **open 状态** — 过去 24 小时内无任何合并记录。

| # | PR | 作者 | 规模 | 描述 | 修复 |
|---|----|--------|------|-------------|-------|
| #8623 | [fix(scroll): reuse resolved turn boundaries](https://github.com/agentscope-ai/QwenPaw/pull/8623) | txohyeah | S | 避免在 `MemorySpace.search` 中重复解析 turn boundary — `_collect_distinct_hits` 每页解析 mapping 后丢弃，导致 `_attach_search_turns` 重复解析相同 seqs | #8619 |
| #8622 | [fix(scroll): keep sqlite lock errors out of search timeouts](https://github.com/agentscope-ai/QwenPaw/pull/8622) | pcbeingused333 | S | 防止 `sqlite3.OperationalError`（如数据库锁）被吞没并在 `MemorySpace.search` 中被误报为 `TimeoutError` | #8620 |
| #8618 | [feat(tools): add SpecStream as a web_search provider](https://github.com/agentscope-ai/QwenPaw/pull/8618) | Specstreamai | M | 引入 SpecStream 作为新的 `web_search` provider；声称 SimpleQA Verified 得分最高（99 分），优于 Parallel/Exa/Tavily/Perplexity | — |
| #8617 | [fix(agents): fall back when a saved model provider is disabled](https://github.com/agentscope-ai/QwenPaw/pull/8617) | pcbeingused333 | M | 解决当最后一个活跃模型所属 provider 在 Models UI 中被禁用后引发的 `ProviderError` 崩溃；提供优雅降级 | #8579 |
| #8292 | [fix(agents): sanitize malformed file content parts](https://github.com/agentscope-ai/QwenPaw/pull/8292) | twotnguyen | S | 防止对话历史中存在文件引用但缺少备份数据时，向 OpenAI 兼容 provider 发送请求返回 HTTP 400 | #8280 |
| #8615 | [fix(providers): recognize gateway context-overflow 400s](https://github.com/agentscope-ai/QwenPaw/pull/8615) | lanjinzhoucode | XS | Strata/OpenAI 兼容 gateway 对 prompt + max_tokens 溢出返回结构化 400；QwenPaw 现已识别并正确上报上下文窗口耗尽 | — |
| #8614 | [fix(token-usage): calibrate prompt estimates with provider-reported usage](https://github.com/agentscope-ai/QwenPaw/pull/8614) | lanjinzhoucode | M | 用 provider 上报的 usage 替代简单的 `utf8_bytes/4` token 估算方法，修复含数字/UUID/时间戳密集型 prompt 1.2–4× 的低估问题 | — |
| #8613 | [fix(context): reserve the configured output limit when planning compaction](https://github.com/agentscope-ai/QwenPaw/pull/8613) | lanjinzhoucode | S | Scroll 在判断是否触发压缩时，改为保留 `max_tokens`（而非固定的 4K）作为输出预留，避免 prompt + max_tokens 被拒绝 | — |

**主要主题聚类：**
- **Memory/search 层**：3 个 PR（#8623、#8622、#8619）针对 `MemorySpace.search` 的可靠性和效率问题。
- **Provider 弹性**：2 个 PR（#8617、#8615）改善配置错误或 gateway 错误下的优雅降级。
- **Token 预算**：2 个 PR（#8614、#8613）修正上下文管理的 prompt 大小计算。

---

## 4. 社区热点话题

### 互动最活跃的 Issue（按评论数排序）

| # | 标题 | 作者 | 评论数 | 👍 | 话题 |
|---|-------|--------|----------|----|-------|
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | 体验反馈：跨智能体协作功能的引导/通信触发/连贯性/身份混淆 | dangthanhtam529-dev | 4 | 0 | 跨智能体协作体验（历经约 8 个月后已关闭） |
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 对话中经常出现没有答复内容 + Ctrl+C复制问题 + UI性能下降 | perm2580 | 3 | 0 | 缺少回复、复制快捷键、UI 性能回退 |
| [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 does not start on Windows 11 IoT LTSC | ArsenicumAlbum | 2 | 0 | Windows 11 LTSC 回归问题（2.2.2 可正常运行） |

### 深层需求分析

1. **跨智能体协作体验（#2420，已关闭）：** 经过 8 个月的迭代周期，该 issue 的关闭表明团队已响应了核心诉求——结构化多智能体工作流、引导式初始化、显式通信触发机制、状态连续性以及身份管理。该反馈的广度暗示这仍是项目的差异化特色方向之一。

2. **UI 性能与复制可靠性（#8521）：** 一个 issue 中包含三个独立子问题——回复内容缺失（偶发）、Ctrl+C 需要多次按键（Chrome 和 Edge 均有此问题）、以及相比旧版本感知到的 UI 响应回退。用户明确请求提供**UI 主题/模式切换**功能以恢复旧版布局。这是当前用户体验满意度最高信号的 issue。

3. **Windows 回归问题（#8616）：** 2.3.0 的首个 beta 阻断性问题。特定 Windows 11 SKU（IoT Enterprise LTSC，build 26100）用户看到"path not found"错误后 AppHang。同一机器可正常运行 2.2.2+，确认是**稳定版与 beta 版之间引入的回归**。对 2.3.0 发布计划有直接影响。

---

## 5. Bug 与稳定性

| 严重级别 | # | 标题 | 状态 | 修复 PR | 备注 |
|----------|---|-------|--------|--------|-------|
| 🔴 **严重** | [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 在 Windows 11 IoT LTSC 上崩溃 | OPEN | — | 回归问题：稳定版 2.2.2 正常，beta 版 AppHang。阻断 2.3.0 发布。 |
| 🟠 **高** | [#8620](https://github.com/agentscope-ai/QwenPaw/issues/8620) | `MemorySpace.search` 中 SQLite 错误被误报为 TimeoutError | OPEN | [#8622](https://github.com/agentscope-ai/QwenPaw/pull/8622) | 异常类型传播错误；修复已就绪，等待 review。 |
| 🟠 **高** | [#8619](https://github.com/agentscope-ai/QwenPaw/issues/8619) | `MemorySpace.search` 中重复解析 turn boundary | OPEN | [#8623](https://github.com/agentscope-ai/QwenPaw/pull/8623) | 分页搜索的性能与正确性问题；修复已就绪，等待 review。 |
| 🟡 **中** | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 回复内容缺失（偶发） | OPEN | — | 根因不明（model 或 app 侧问题）；需进一步调查。 |
| 🟡 **中** | [#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612) | "Execution" 工具调用缺少进度可见性 | OPEN | — | 用户体验问题：长时间运行的工具调用无中间状态反馈。 |
| 🟢 **低** | [#8615](https://github.com/agentscope-ai/QwenPaw/pull/8615) | Gateway context-overflow 400 未被识别 | PR（open） | — | 错误分类不正确；修复等待合并。 |

---

## 6. 功能请求与路线图信号

| # | 标题 | 作者 | 优先级信号 | 路线图可能性 |
|---|-------|--------|-----------------|--------------------|
| [#8621](https://github.com/agentscope-ai/QwenPaw/issues/8621) | 在 `recall_history` 工具上暴露 `include_turn=False` | txohyeah | 代码层面 Python REPL 和 `MemorySpace.search` 已支持；仅需结构化工具转发 | 高 — 成本低，缺口明确 |
| [#8618](https://github.com/agentscope-ai/QwenPaw/pull/8618) | SpecStream 网络搜索 provider 集成 | Specstreamai | 第三方集成 PR，带有基准测试证据（SimpleQA 99 分）；符合 QwenPaw 工具可扩展性目标 | 高 — 增强竞争优势 |
| [#2420](https://github.com/agentscope-ai/QwenPaw/issues/2420) | 跨智能体协作：初始化引导、通讯触发器、身份管理 | dangthanhtam529-dev | 经历长期迭代后关闭 — 表明功能已交付或已降优先级 | 关注关闭原因以明确路线图 |
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | UI 主题/模式切换（恢复旧版布局） | perm2580 | 强烈的用户请求；暗示近期重设计存在体验分歧 | 中 — 取决于设计策略 |

**2.3.0 正式版路线图预测：** 鉴于 token 校准、上下文管理和搜索修复相关的 PR 聚集，这些将是正式版发布的强候选。Windows 11 回归问题（#8616）必须在 2.3.0 发布前解决。SpecStream provider 和 `recall_history` 仅返回行级搜索为增量功能，风险低，很可能被纳入。

---

## 7. 用户反馈摘要

### 痛点

| 痛点 | 证据 | 影响 |
|------------|----------|--------|
| **回复内容缺失** | #8521 — 偶发，Chrome/Edge 均有 | 阻断使用；尚不确定是 model 还是 app 问题 |
| **相比旧版感知到 UI 回退** | #8521 — 用户偏好旧版布局；请求切换功能 | 用户留存风险 |
| **Ctrl+C 需要多次按键** | #8521 — 两大 Chromium 浏览器均受影响 | 复制工作流受损 |
| **Execution 工具调用黑盒** | #8612 — 长时间任务无进度反馈 | 信任度/清晰度问题 |
| **Provider 禁用后崩溃** | #8617（修复中）— `ProviderError` 无降级策略 | 部署脆弱性 |

### 满意度信号

- 跨智能体协作 issue（#2420）在持续沟通后得到解决，表明团队能够响应复杂的功能请求。
- 结构化的 `recall_history` 和 Python REPL 工具表面设计良好（用户评价"大部分工具已经是一句人话，很好"）。
- SpecStream 提交者（#8618）以基准测试驱动的方式贡献，表明外部对 QwenPaw 可扩展性模型的信心。

---

## 8. 待处理事项关注清单

> 需要维护者关注的重要、未回复或停滞的 issue/PR。

| # | 存续时间 | 标题 | 状态 | 关注原因 |
|---|-----|-------|--------|---------|
| [#8292](https://github.com/agentscope-ai/QwenPaw/pull/8292) | 约 22 天 | Sanitize malformed file content parts | OPEN（自 2026-10-17 起） | 首次贡献者 PR；修复真实 HTTP 400 bug；需 review 以防冷落 |
| [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 1 天 | 2.3.0-beta.1 Windows 11 IoT LTSC 崩溃 | OPEN | **回归问题阻断发布**；需立即分类处理 |
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 8 天 | 回复缺失 + Ctrl+C + UI 回退 | OPEN（3 条评论） | 多症状 issue；偶发回复缺失 bug 尤其需要根因调查 |
| [#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612) | 1 天 | Execution 工具调用缺少进度反馈 | OPEN | 直接的 UX 改进诉求；实现成本可能较低 |

**建议：** 优先处理 Windows 11 回归问题（#8616）——这是 2.3.0 正式版的发布阻断项。8 个 open PR 均对应清晰的修复目标，看起来已可进入 review 阶段，可在合并后解锁下一个 RC 版本。

---

*本日报基于 2026-11-07 至 2026-11-08 期间的 GitHub 活动数据生成，覆盖仓库 agentscope-ai/QwenPaw。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this GitHub project digest from English to Simplified Chinese. Let me carefully translate it while following the rules:

1. Output ONLY the translation - no preamble or explanation
2. Preserve all Markdown structure exactly
3. Keep URLs, link targets, code spans, numbers, dates, repository slugs, version tags, file paths, API/config identifiers as-is
4. Use natural technical Chinese register - not literal word-for-word

Let me translate section by section:

**Title:** ZeroClaw Project Digest — 2026-11-08
→ ZeroClaw 项目简报 — 2026-11-08

**Section 1: Today's Overview**
- ZeroClaw shows strong development activity on 2026-11-08
- 21 issue updates and 34 PR updates
- project is in an intensive security hardening phase
- four merged/closed PRs addressing security concerns
- Active development concentrated on relay-served dashboard hosting
- No new releases

Let me translate this properly in natural Chinese technical register.

Let me work through this carefully, maintaining all the Markdown structure and technical accuracy.
</think>


# ZeroClaw 项目简报 — 2026-11-08

---

## 1. 今日概览

2026-11-08，ZeroClaw 项目展现出强劲的开发活力，过去 24 小时内共有 21 条 issue 更新和 34 条 PR 更新。项目正处于密集的安全加固阶段，今日合并/关闭的 4 个 PR 全部涉及安全问题——包括 OIDC 浏览器绑定修复和会话权限守卫。当前开发重点集中在 relay 托管式仪表盘（#10315 第二阶段）、插件 Webhook 的 RPC 分发以及多租户 RBAC 能力建设。今日未发布新版本，v0.9.0 仍在持续积累安全与稳定性修复，待下一次稳定版发布。

---

## 2. Releases

**暂无** — 今日无新版本发布。项目仍停留在 v0.9.0 候选分支，持续积累修复（详见项目进度）。数据截止前维护者尚未打上稳定版标签。

---

## 3. 项目进度

### 已合并/关闭的 PR（4 条）

| PR | 标题 | 影响 |
|----|------|------|
| [#12157](https://github.com/zeroclaw-labs/zeroclaw/pull/12157) | `fix(oidc): 将注册回调绑定到发起浏览器会话` | **安全** — 通过将会话注册与发起 OIDC 流程的浏览器绑定，防止登录 CSRF。纳入 v0.9.0 计划。 |
| [#12239](https://github.com/zeroclaw-labs/zeroclaw/pull/12239) | `fix(rpc): 在会话副作用中保持当前权限` | **安全** — 确保会话操作在 await 后重新校验调用方权限，堵住权限撤销/降级绕过窗口。纳入 v0.9.0 计划。 |
| [#12274](https://github.com/zeroclaw-labs/zeroclaw/pull/12274) | `docs(runtime): 记录 relay 托管式仪表盘路径例外` | **文档** — 正式记录 relay 仪表盘桥接路由目标的 holding-crate 例外规则。 |
| [#12260](https://github.com/zeroclaw-labs/zeroclaw/pull/12260) | `[Bug]: RPC cron/add 和 cron/patch 将请求当作操作员审批处理` | **Bug** — 关闭未合并；表明 cron RPC 审批逻辑需要重新设计。 |

### 值得关注的开放中 PR

| PR | 标题 | 规模 | 风险 | 备注 |
|----|------|------|------|-------|
| [#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) | `feat(relay): 通过 relay 为守护进程托管 Web 仪表盘` | XL | 高 | #10315 第二阶段；启用浏览器经 relay 访问守护进程仪表盘。v0.9.0 计划。 |
| [#12271](https://github.com/zeroclaw-labs/zeroclaw/pull/12271) | `feat(tools): 将 Discord 外部对等体路由至显式目标` | XL | 中 | 扩展 Discord 对等体路由，超越 relay 终结的注册流程。 |
| [#12059](https://github.com/zeroclaw-labs/zeroclaw/pull/12059) | `feat(providers): 为 OpenAI 遵守运行时配置的 thinking 参数` | XL | 低 | 支持独立于原生 token 预算的请求级 thinking 配置。 |
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | `feat(session): 实现仅追加型会话事件历史` | XL | 高 | 以共享的仅追加会话历史替代转录写入器；记录输入、推理、工具执行、审批、失败、模型切换、上下文压缩和子智能体活动。 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | `feat(web): 为配对设备添加语音设置和对话控制` | XL | 低 | 为网页对话添加听写和语音播报控制，含本地化使用指南。 |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | `feat(plugins): 支持多个插件注册源` | XL | 低 | `ZEROCLAW_PLUGIN_REGISTRY_URL` 支持 JSON 数组，可组合私有/公共注册源。 |

---

## 4. 社区热点话题

### 评论最多的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 话题 |
|-------|------|--------|------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 多租户智能体部署的按发送方 RBAC | 12 | **安全与身份** — 长期运行的功能讨论；已接受的设计方向在现有智能体/风险模型上构建发送方角色。 |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 会话后端重写所有消息的 `created_at` | 10 | **数据完整性** — 每次对话轮次后整个转录被重写，时间戳被统一化，丢失了逐条消息的时间记录。 |
| [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | 在不手写 TLS 的前提下重做浏览器注册入口 | 6 | **安全与 Relay** — 注册流程已交付；浏览器仪表盘/会话层级入口仍待开放。 |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | 队列式会话操作保留已撤销管理员所有权绕过 | 4 | **安全** — #10412 部分修复；其他陈旧授权路径仍未解决。 |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | 会话/频道工具缺少按智能体的所有权边界 | 4 | **安全（S0）** — 多款内置工具接受模型参数中的目标标识符，未做所有权校验。 |

### 分析

**深层诉求：** 社区反馈汇聚出三大主线：

1. **多租户安全隔离** — 多条 issue（#5982、#9646、#11126）指向同一核心需求：在共享部署环境中强制执行智能体与用户之间的所有权和权限边界。
2. **数据完整性与可观测性** — SQLite 时间戳重写 bug（#11420）和会话历史重构（#11921）表明用户和运维人员需要可靠的审计追踪。
3. **Relay 作为一等托管面** — #10315、#12270、#12285 显示社区希望 ZeroRelay 支持完整的仪表盘托管，而非仅限于注册和 mTLS 代理。

---

## 5. Bug 与稳定性

按严重程度排序（S0 > S1 > S2 > S3）：

| 严重程度 | Issue | 标题 | 修复 PR？ |
|----------|-------|------|-----------|
| **S0** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | 会话/频道工具缺少按智能体的所有权边界 | 无 |
| **S1** | [#12187](https://github.com/zeroclaw-labs/zeroclaw/issues/12187) | 频道缓存轮次归一化将用户轮次合并进 role=tool 的信封 | 无 |
| **S2** | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 在每轮对话后重写所有 `created_at` | 无 |
| **S2** | [#12228](https://github.com/zeroclaw-labs/zeroclaw/issues/12228) | `cron update --agent` 报成功但从未重新分配任务 | 无 |
| **S2** | [#12211](https://github.com/zeroclaw-labs/zeroclaw/issues/12211) | 委托智能体不加载 TOOLS.md | 无 |
| **S2** | [#12235](https://github.com/zeroclaw-labs/zeroclaw/issues/12235) | 委托智能体返回原始文本工具调用（native_tools 未生效） | 无 |
| **S2** | [#12227](https://github.com/zeroclaw-labs/zeroclaw/issues/12227) | Shell 审批依赖模型写入的 "approved" 值 | 无 |
| **S2** | [#12283](https://github.com/zeroclaw-labs/zeroclaw/issues/12283) | `resolve_peer_set` 按组应用对等体组的 `ignore`，可能导致命中已忽略的对等体 | 无 |
| **S3** | [#12205](https://github.com/zeroclaw-labs/zeroclaw/issues/12205) | 空画布从不删除，堆积触及 100 个画布上限 | 无 |

**今日已合并修复的安全 Bug：**
- [#12050](https://github.com/zeroclaw-labs/zeroclaw/issues/12050) — OIDC 回调令牌页面 CSRF → 由 [#12157](https://github.com/zeroclaw-labs/zeroclaw/pull/12157) 修复
- await 后的会话权限绕过 → 由 [#12239](https://github.com/zeroclaw-labs/zeroclaw/pull/12239) 修复

**稳定性警示：** 全部 7 个 S2 级 bug 和 S0 级安全 bug 在数据集中均无相关修复 PR，表明需要维护者介入排期。

---

## 6. 功能需求与路线图信号

### 高优先级功能需求

| Issue/PR | 标题 | 优先级 | 预计纳入 v0.9.x |
|----------|-------|--------|-----------------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 多租户的按发送方 RBAC | P2，已接受 | **大概率** — 设计方向已确认，#11068 为草稿实现，需给出具体时间表 |
| [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | 浏览器注册入口 | P2，已接受 | **大概率** — 第二阶段 [#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) 正在进行 |
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | `zeroclaw user` CLI 用户密码生命周期命令 | P2 | **可能** — 依赖 #11264、#11313 |
| [#12285](https://github.com/zeroclaw-labs/zeroclaw/issues/12285) | 在 relay 上拒绝写入凭证/登录路径的配置 | 增强项 | **可能** — #12270 的安全加固自然延伸 |
| [#12048](https://github.com/zeroclaw-labs/zeroclaw/issues/12048) | 验证 OIDC redirect_uri 是否与配置的仪表盘源匹配 | 增强项 | **可能** — 与 OIDC 浏览器绑定修复互补 |

### 路线图方向性基础设施功能

- **多注册源插件支持**（[#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216)） — 表明企业部署灵活性被优先考虑
- **仅追加型会话历史**（[#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921)） — 表明审计/合规用例被优先考虑
- **Discord 对等体路由**（[#12271](https://github.com/zeroclaw-labs/zeroclaw/pull/12271)） — 表明渠道扩展性被优先考虑
- **配对设备语音控制**（[#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269)） — 表明无障碍/用户体验被优先考虑

---

## 7. 用户反馈摘要

基于 issue 作者和反馈痛点：

| 主题 | 证据 | 情绪 |
|------|------|------|
| **多租户安全** | #5982、#9646、#11126、#12048、#12285 | **不满** — 在共享环境中部署 ZeroClaw 的用户报告了跨智能体未授权数据访问风险 |
| **会话数据完整性** | #11420 | **不满** — 运维人员无法信任 SQLite 会话中的时间戳顺序 |
| **委托智能体保真度** | #12211、#12235 | **不满** — 委托功能与顶级智能体的工具调用行为不一致 |
| **Relay 仪表盘托管** | #10315、#12270 | **期待乐观** — 用户提出需求，当前正落地实现中 |
| **OIDC 安全加固** | #12050、#12157、#12284 | **复杂** — 漏洞已被确认并修复，但后续的日志和回归测试工作仍在进行 |
| **Telegram 速率处理** | [#11651](https://github.com/zeroclaw-labs/zeroclaw/pull/11651) | **不满** — 速率受限的发送静默失败；修复 PR 正在 review 中 |

**值得关注的用户痛点：** SQLite 会话时间戳覆写（[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420)）有 10 条评论，且被描述为影响 `GET /api` 响应质量的降级行为——表明这不仅影响内部工具，还影响生产环境 API 消费者。

---

## 8. 积压关注清单

重要 Issue/PR 中活动有限或需要维护者关注的事项：

| 项目 | 存在时长 | 状态 | 风险 |
|------|----------|------|------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) — 按发送方 RBAC | 约 7 个月 | 开放，已接受 | 长期运行；#11068 为草稿；需给出具体实现时间表 |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) — 陈旧管理员所有权绕过 | 约 6 周 | 开放 | #10412 部分修复；其他绕过路径未解决；严重程度等同 S0 |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) — 无所有权边界 | 约 3 个月 | 开放，无 stale 标记 | S0 严重程度，无修复 PR；活跃的安全风险 |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — SQLite 时间戳覆写 | 约 5 周 | 开放 | 影响 API 数据完整性；无修复 PR |
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) — 用户密码 CLI | 约 5 周 | 开放，不合并状态 | 依赖另外两个 PR；进度受阻 |
| [#12260](https://github.com/zeroclaw-labs/zeroclaw/pull/12260) — Cron RPC 审批 bug | 已关闭（未合并） | 已关闭 | Bug 已被确认但 PR 关闭未修复；需重新开启或另建 issue 追踪 |

---

*本简报基于 2026-11-08 ZeroClaw（zeroclaw-labs/zeroclaw）活动数据生成。所有 GitHub 链接均指向 zeroclaw-labs/zeroclaw 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*