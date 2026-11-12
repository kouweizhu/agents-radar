# OpenClaw 生态日报 2026-11-12

> Issues: 469 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-12 03:17 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the text while keeping the Markdown structure
2. Preserve all formatting (headings, tables, lists, etc.)
3. Keep technical terms, URLs, code references, version numbers, etc. in their original form
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Section 1: Today's Overview**
- "OpenClaw maintains high velocity" → "OpenClaw 保持高迭代节奏"
- "with 469 issues and 500 pull requests updated in the last 24 hours" → "过去24小时内共有469个议题和500个Pull Request更新"
- "reflecting intense development activity" → "反映出极高的开发活跃度"
- "The release of v2026.11.5-beta.2 brings improved paged history for large conversations and macOS secret preservation." → "v2026.11.5-beta.2 版本带来了大对话分页历史功能改进和 macOS 密钥持久化修复。"
- "Community engagement remains robust" → "社区参与度保持强劲"
- "with several P0/P1 bugs receiving sustained attention and multiple PRs advancing through review." → "多个 P0/P1 级别的缺陷持续受到关注，多个 PR 正在推进评审流程。"
- "The project shows healthy momentum on UI refinements, stability fixes, and platform-specific improvements" → "项目在 UI 优化、稳定性修复和平台特性改进方面呈现良好势头"


- "though memory and database performance issues continue to surface across platforms." → "但内存和数据库性能问题仍跨平台持续出现。"

**Section 2: Releases**
- "Released" → "发布日期"
- "Release Details" → "版本详情"
- "Highlights" → "版本亮点"
- "Paged History for Large Conversations" → "大对话分页历史"
- "Implements bidirectional scrolling with visible history boundaries and bounded archive reads" → "实现了双向滚动功能，设有可见的历史边界和受限的归档读取"
- "Authored by" → "作者"
- "thanks to" → "感谢"
- "macOS App Secret Preservation" → "macOS 应用密钥持久化"
- "Fixes an issue where the macOS application was not preserving saved secrets across sessions." → "修复了 macOS 应用无法在会话间持久化已保存密钥的问题。"
- "Migration Notes" → "迁移说明"
- "No breaking changes reported." → "无破坏性变更。"
- "Users with large conversation histories should see improved responsiveness when scrolling through archived content." → "拥有大量对话历史的用户应能感受到滚动浏览归档内容时的响应速度提升。"

**Section 3: Project Progress**
- "Merged/Closed PRs (Notable)" → "已合并/关闭的 PR（精选）"
- "Description" → "描述"
- "Status" → "状态"
- "Active PRs Advancing" → "推进中的活跃 PR"
- "Size" → "规模"
- "fix(ci): test-lines ratchet repair after hosted pricing tests" → "fix(ci)：托管定价测试后的测试行棘轮修复"
- "fix(ci): report state-worker timing diagnostics" → "fix(ci)：上报 state-worker 计时诊断"
- "feat(advisor): move Advisor out of Labs" → "feat(advisor)：将 Advisor 从 Labs 移出"
- "fix(ui): stored pins override conversation order" → "fix(ui)：固定项覆盖会话排序顺序"
- "fix(ui): stop missing device dialog animations" → "fix(ui)：停止缺失设备对话框动画"

The open PRs show several UI and feature improvements in progress. Notable work includes refactoring window defaults with a shared catalog system, adding an optional inline command trail display, and integrating Z.AI models through Claude Code's Agent SDK runtime. Additional commits address durable background command persistence across restarts on macOS and implementing optional claims and observations recording.

The community is actively discussing gateway blocking issues where large external plugins cause multi-minute stalls.  WAL auto-checkpoint appears to be perpetually blocked, while Windows reliability problems—slow startup, unclean shutdown, and schtasks errors—are compounding user frustration. Memory consumption is another concern with RSS usage reaching ~1.9 GB baseline.

Telegram dead-lettering after a single network failure, subagent completion releasing the model runtime prematurely, and rate-limit Retry-After headers ignoring maxRetryDelayMs are also flagged as high-priority issues. Additionally, npm updates cause Gateway downtime for approximately 19 minutes, and GPT-Live Talk sessions end prematurely under Gateway control.

Notable fixes have addressed late reclamation commit checkpoint failures, Gateway boot loops spawning excessive SQLite workers, and text persistence issues in the Control UI. Feature requests are emerging around cross-provider cron fallback accounts, stranded subagent recovery, and native progress-card SDKs for Claw Orchestrator.

The community has identified several pain points: memory and performance issues on Linux ARM64 with RSS jumping from 300 MB to 1.89 GB, SQLite transaction timeouts exceeding 1.5 seconds, npm updates causing 19-minute Gateway downtime on Ubuntu, Windows reliability problems with schtasks permissions, and macOS sluggishness after opening certain conversations.

Telegram users face silent message loss due to single-attempt dead-lettering, session resume context injections appear as user messages, and WebChat path rendering truncates file links in the middle. Plugin source-capture staging consumes excessive disk space (290 MB to 612 MB+) on Windows, while the active Memory circuit breaker fails to open under realistic load patterns. The positive feedback highlights appreciation for the paged history feature addressing a long-standing UX issue.

macOS secret preservation fixes are well-received, and the Advisor graduation from Labs signals feature maturity. The backlog contains long-unanswered issues, including a preseeded identity file deleted before first run (5+ months old, P1 priority), context overflow estimator overcounting by 2.3-2.6x (4+ months, linked PR #168338 merged awaiting verification), Telegram requireMention not gating bare slash commands (6 weeks, P2), Home dropping session notices after 20 sessions (5 weeks, P2), and self-learning review showing 0% completion despite 50 failures.

Several PRs are blocked on maintainer attention: Z.AI model support and durable background commands (macOS) both need security review, the native hook relay transport death fix carries availability merge risk, while cron silent run skips and custom proxies recording $0 are ready for maintainer review. The digest is sourced from OpenClaw repository data.

For real-time updates, check the GitHub repository at github.com/openclaw/openclaw.
</think>


# OpenClaw 项目动态 — 2026-11-12

---

## 1. 今日概览

OpenClaw 保持高迭代节奏，过去 24 小时内共有 469 个议题和 500 个 Pull Request 更新，开发活跃度极高。**v2026.11.5-beta.2** 版本的发布带来了大对话分页历史功能改进和 macOS 密钥持久化修复。社区参与度保持强劲，多个 P0/P1 级别的缺陷持续受到关注，多个 PR 正在推进评审流程。项目在 UI 优化、稳定性修复和平台特性改进方面呈现良好势头，但内存和数据库性能问题仍跨平台持续出现。

---

## 2. 版本发布

### v2026.11.5-beta.2
**发布日期：** 2026-11-12 | [版本详情](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.2)

**版本亮点：**
- **大对话分页历史：** 实现双向滚动功能，设置可见的历史边界和受限的归档读取，解决了议题 [#188450](https://github.com/openclaw/openclaw/issues/188450)、[#188483](https://github.com/openclaw/openclaw/issues/188483)、[#188557](https://github.com/openclaw/openclaw/issues/188557)、[#188372](https://github.com/openclaw/openclaw/issues/188372)、[#190690](https://github.com/openclaw/openclaw/issues/190690)。作者：@steipete；感谢 @xydt-tanshanshan。
- **macOS 应用密钥持久化：** 修复了 macOS 应用无法在会话间持久化已保存密钥的问题。

**迁移说明：** 无破坏性变更。拥有大量对话历史的用户应能感受到滚动浏览归档内容时的响应速度提升。

---

## 3. 项目进展

### 已合并/关闭的 PR（精选）
| PR | 描述 | 状态 |
|----|------|------|
| [#197488](https://github.com/openclaw/openclaw/pull/197488) | fix(ci)：托管定价测试后的测试行棘轮修复 | CLOSED |
| [#197431](https://github.com/openclaw/openclaw/pull/197431) | fix(ci)：上报 state-worker 计时诊断 | CLOSED |
| [#197029](https://github.com/openclaw/openclaw/pull/197029) | feat(advisor)：将 Advisor 从 Labs 移出 | CLOSED |
| [#196513](https://github.com/openclaw/openclaw/pull/196513) | fix(ui)：固定项覆盖会话排序顺序 | CLOSED |
| [#197478](https://github.com/openclaw/openclaw/pull/197478) | fix(ui)：停止缺失设备对话框动画 | CLOSED |

### 推进中的活跃 PR
| PR | 描述 | 规模 | 状态 |
|----|------|------|------|
| [#197482](https://github.com/openclaw/openclaw/pull/197482) | fix：停止用量汇总扫描整个 agent 数据库 | XL | ⏳ 等待作者响应 |
| [#197464](https://github.com/openclaw/openclaw/pull/197464) | refactor(ui)：窗口默认 Files 使用共享 catalog | XL | ⏳ 等待作者响应 |
| [#197466](https://github.com/openclaw/openclaw/pull/197466) | feat(ui)：添加可选的内联命令轨迹 | XL | ⏳ 等待作者响应 |
| [#197267](https://github.com/openclaw/openclaw/pull/197267) | feat(zai)：在 Claude Code 的 Agent SDK 运行时上运行 Z.AI 模型 | L | 📣 需要提供证明 |
| [#197474](https://github.com/openclaw/openclaw/pull/197474) | feat(exec)：跨重启保持持久化后台命令运行（macOS） | L | 📣 需要提供证明 |
| [#197471](https://github.com/openclaw/openclaw/pull/197471) | feat(workboard)：记录可选声明、观察和验证 | L | 📣 需要提供证明 |

---

## 4. 社区热点话题

### 按讨论量排列的热门议题

**1. Gateway 加载大型外部插件时阻塞数分钟** — [议题 #160959](https://github.com/openclaw/openclaw/issues/160959)
- **评论数：** 81 | **严重程度：** P0 | **状态：** OPEN
- **摘要：** 自 2026.9.6 插件生成捕获以来，包含大型依赖树的外部/工作区插件使 Gateway 在启动时和模型运行时重新发布期间阻塞事件循环数分钟。
- **信号：** 影响插件密集型工作流程的关键回归问题；社区迫切需要解决。

**2. WAL 自动检查点永不完成** — [议题 #164294](https://github.com/openclaw/openclaw/issues/164294)
- **评论数：** 40 | **严重程度：** P2 | **状态：** OPEN
- **摘要：** Gateway 对 `state/openclaw.sqlite` 的 WAL 检查点永远被进程内读取器阻塞，有 17,091 个日志帧待处理。
- **信号：** 数据库性能退化；需要架构层面审查的长期问题。

**3. Windows 可靠性问题：启动缓慢、关闭不干净、schtasks 错误** — [议题 #170956](https://github.com/openclaw/openclaw/issues/170956)
- **评论数：** 31 | **严重程度：** P0 | **状态：** OPEN
- **摘要：** 三个相关问题导致托管服务安装的 Windows 系统频繁重启和更新失败。
- **信号：** 平台特定可靠性差距；Windows 企业用户受影响严重。

**4. 过度的基准 RSS 内存占用（约 1.9 GB）** — [议题 #181432](https://github.com/openclaw/openclaw/issues/181432)
- **评论数：** 13 | **严重程度：** P1 | **状态：** OPEN
- **摘要：** 在 Linux ARM64 上更新到 2026.10.5 后，基准内存在启动时从约 300 MB 跳升至 1.89 GB，导致 SQLite 事务超时。
- **信号：** 影响资源受限部署的内存回归问题。

**5. Telegram 单次网络故障后消息死信** — [议题 #125764](https://github.com/openclaw/openclaw/issues/125764)
- **评论数：** 14 | **严重程度：** P1 | **状态：** OPEN
- **摘要：** Telegram `sendMessage` 的短暂网络故障导致消息在一次尝试后永久死信，无重试且用户看不到错误提示。
- **信号：** 消息可靠性问题；Telegram 用户正在经历静默数据丢失。

### 按社区关注度排列的活跃 PR

**1. 内联命令轨迹功能** — [PR #197466](https://github.com/openclaw/openclaw/pull/197466)
- 使用户能够在会话顺序中跟踪编码任务的命令和输出。
- 满足开发者工作流可见性的需求。

**2. 用量汇总数据库优化** — [PR #197482](https://github.com/openclaw/openclaw/pull/197482)
- 停止在已有聚合数据的区间上执行重量级数据库读取。
- 解决了运营商跟踪成本时的痛点。

**3. Z.AI 模型支持** — [PR #197267](https://github.com/openclaw/openclaw/pull/197267)
- 通过 Anthropic 兼容端点添加对 Z.AI 的 GLM Coding Plan 支持。
- 根据用户请求扩展提供商覆盖范围。

---

## 5. 缺陷与稳定性

### 需要立即处理的关键问题（P0）

| 议题 | 标题 | 评论数 | 修复 PR？ |
|------|------|--------|----------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 加载大型插件时阻塞数分钟 | 81 | 无 |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows：启动缓慢、重启不可靠 | 31 | 无 |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex 保护性续写阻塞后续对话 | 8 | 无 |
| [#178441](https://github.com/openclaw/openclaw/issues/178441) | 提供者审查期间 Telegram 所有者消息被扣留 | 7 | 无 |
| [#146791](https://github.com/openclaw/openclaw/issues/146791) | iOS APNs 中继注册从不发布 | 9 | 无 |

### 高优先级问题（P1）

| 议题 | 标题 | 评论数 | 修复 PR？ |
|------|------|--------|----------|
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 过度的 ~1.9 GB RSS 内存占用 | 13 | 无 |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | Telegram 单次故障后消息死信 | 14 | 无 |
| [#145690](https://github.com/openclaw/openclaw/issues/145690) | Subagent 完成时提前释放模型运行时 | 6 | 无 |
| [#168101](https://github.com/openclaw/openclaw/issues/168101) | 速率限制 Retry-After 忽略 maxRetryDelayMs | 8 | 无 |
| [#181662](https://github.com/openclaw/openclaw/issues/181662) | npm 更新导致 Gateway 停止约 19 分钟 | 6 | 无 |
| [#194114](https://github.com/openclaw/openclaw/issues/194114) | Gateway 控制的 GPT-Live Talk 过早结束 | 6 | 无 |

### 已合并的缺陷修复精选

- **[#166634](https://github.com/openclaw/openclaw/issues/166634)** — 修复了后期回收提交检查点失败问题；agent 现可在崩溃后正确恢复。
- **[#159638](https://github.com/openclaw/openclaw/issues/159638)** — 解决了每分钟创建 7 个 SQLite worker 的 Gateway 启动循环。
- **[#179676](https://github.com/openclaw/openclaw/issues/179676)** — Control UI 粘贴文本（>1,000 字符）现可在轮次间持久保持。

---

## 6. 功能请求与路线图信号

### 按社区需求排列的高影响力功能请求

| 议题 | 标题 | 评论数 | 近期实现可能性 |
|------|------|--------|----------------|
| [#192009](https://github.com/openclaw/openclaw/issues/192009) | 显式授权跨提供商 cron 降级账户 | 11 | **高** — 正在推进多提供商支持的 PR |
| [#170562](https://github.com/openclaw/openclaw/issues/170562) | Doctor 恢复孤立 subagent 运行 | 9 | **中** — 解决运营商痛点 |
| [#176273](https://github.com/openclaw/openclaw/issues/176273) | Claw Orchestrator 的原生进度卡片 SDK | 8 | **中** — 插件生态系统扩展 |
| [#179954](https://github.com/openclaw/openclaw/issues/179954) | memory：可配置的每条目分块路径 | 8 | **中** — 内存系统增强 |
| [#143387](https://github.com/openclaw/openclaw/issues/143387) | Android 通知体验改进 | 8 | **低** — 需要移动平台专注 |

### 暗示路线图方向的趋势

- **多提供商灵活性：** 跨提供商 cron 降级和 Z.AI 支持表明多提供商编排正在扩展。
- **平台一致性：** macOS 持久化功能和 Windows 可靠性工作表明平台特定优化正在投入。
- **开发者体验：** 内联命令轨迹、Advisor 从 Labs 毕业、 transcript 管理改进反映工作流可用性的重点投入。

---

## 7. 用户反馈摘要

### 已识别的痛点

**内存与性能：**
- Linux ARM64 用户报告升级到 2026.10.5 后内存增加 6 倍（300 MB → 1.89 GB）。
- SQLite 事务超时超过 1.5 秒导致不稳定。
- Ubuntu 上的 npm 更新造成 Gateway 停机 19 分钟。

**平台可靠性：**
- Windows 用户频繁遇到重启/更新失败，出现神秘的 `schtasks` 权限错误。
- macOS 设置在打开某些会话后变得缓慢。
- iOS 应用无法注册 APNs，导致推送通知失效。

**数据完整性：**
- Telegram 用户因单次尝试死信机制而静默丢失消息。
- 会话恢复上下文注入显示为可见的用户消息。
- WebChat 路径渲染在文件链接处被中间截断。

**开发者工作流：**
- Windows 上插件源捕获暂存消耗过多磁盘空间（290 MB → 612 MB+）。
- 主动 Memory 断路器在真实负载模式下无法打开。

### 正面信号
- 分页历史功能因解决了长期 UX 问题而受到好评。
- macOS 密钥持久化修复受到欢迎。
- Advisor 从 Labs 毕业表明实验性功能的成熟。

---

## 8. 积压关注

### 长期未回复的重要议题

| 议题 | 标题 | 时长 | 评论数 | 优先级 | 差距 |
|------|------|------|--------|--------|------|
| [#91931](https://github.com/openclaw/openclaw/issues/91931) | 首次运行前删除预置的 SOUL.md/IDENTITY.md/USER.md | 5 个月以上 | 9 | P1 | 需要维护者审查 |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | 上下文溢出估算器多算 2.3-2.6 倍 | 4 个月以上 | 13 | P2 | 关联 PR #168338 已合并；等待验证 |
| [#164065](https://github.com/openclaw/openclaw/issues/164065) | Telegram requireMention 无法拦截裸斜杠命令 | 6 周 | 7 | P2 | 需要产品决策 |
| [#167854](https://github.com/openclaw/openclaw/issues/167854) | Home 在 20 个会话后丢弃会话通知 | 5 周 | 8 | P2 | 需要来源复现 |
| [#164279](https://github.com/openclaw/openclaw/issues/164279) | 自学复习完成度 0%（50 次失败） | 6 周 | 10 | P2 | 需要信息 |
| [#177505](https://github.com/openclaw/openclaw/issues/177505) | skill_workshop 在无效工具调用参数上重试 | 3 周 | 8 | P2 | 需要实时复现 |

### 需要维护者关注的 PR

| PR | 标题 | 状态 | 阻塞因素 |
|----|------|------|----------|
| [#197267](https://github.com/openclaw/openclaw/pull/197267) | feat(zai)：Z.AI 模型支持 | 📣 需要提供证明 | 需要安全审查 |
| [#197474](https://github.com/openclaw/openclaw/pull/197474) | feat(exec)：持久化后台命令（macOS） | 📣 需要提供证明 | 需要安全审查 |
| [#197278](https://github.com/openclaw/openclaw/pull/197278) | fix(harness)：上报原生钩子中继传输死亡 | 📣 需要提供证明 | 合并风险：可用性 |
| [#197484](https://github.com/openclaw/openclaw/pull/197484) | fix(cron)：静默跳过 skipMissedJobs 运行 | 👀 准备就绪等待维护者查看 | — |
| [#197275](https://github.com/openclaw/openclaw/pull/197275) | fix(usage)：自定义代理记录 $0 | 👀 准备就绪等待维护者查看 | — |

---

*本动态基于 OpenClaw 仓库数据生成。如需实时更新，请访问 [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)。*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate it while maintaining all the formatting, tables, headings, and technical content exactly as specified.
</think>



# Personal AI Agent 开源生态系统报告
## 跨项目对比 — 2026-11-12

---

## 1. 生态系统概览

个人 AI 助手与 Agent 开源生态系统正处于**高速增长阶段**，驱动力来自多方需求的汇聚：多模型编排、跨平台部署以及可扩展的插件架构。五个追踪项目的现状揭示了一个按成熟度分层的格局：OpenClaw 和 Hermes Agent 在活动量上处于绝对领先地位，ZeroClaw 在 Rust 基础设施和多用户访问控制领域展现了专注的细分优势，QwenPaw 则以本地模型支持和频道插件多样性开辟了差异化赛道。IronClaw 近期无任何活动，可能已停滞或更名。整个生态系统中浮现出三大主导主题——**安全加固**（Hermes Agent 的安全马拉松活动）、**多提供商模型路由**（OpenClaw 的跨提供商 cron 备援、ZeroClaw 的每个 profile 配置多模型），以及**跨平台可靠性**（多项目均存在的 Windows/macOS 启动和稳定性问题）。整个生态系统正从单一 Agent 桌面工具向分布式、多用户、协议多元化的 Agent 运行时演进。

---

## 2. 活动量对比

| 项目 | Issues 更新（24h） | 开启 / 关闭 | PRs 更新（24h） | 开启 / 合并 | Releases（24h） | 健康等级 |
|---------|---------------------:|---------------|--------------------:|---------------|:--------------:|:-----------:|
| **OpenClaw** | 469 | 259 / 210 | 500 | 322 / 178 | 1（v2026.11.5-beta.2） | 🟢 一线 — 高吞吐 |
| **Hermes Agent** | 50 | 46 / 4 | 50 | 37 / 13 | 0 | 🟢 一线 — 安全冲刺中 |
| **QwenPaw** | 12 | 7 / 5 | 38 | 24 / 14 | 1（v2.3.0 stable） | 🟢 二线 — 稳定发布 |
| **ZeroClaw** | 8 | — / — | 38 | — / 3 | 1（v0.9.0） | 🟢 二线 — 特性冲刺 |
| **IronClaw** | 0 | — | 0 | — | 0 | 🔴 三线 — 停滞 |

### 解读

- **OpenClaw** 以原始数量占据绝对优势，比第二活跃项目高出约 10 倍，每日累计 issue/PR 事件超过 1,000 条。这反映出庞大的贡献者基数和极广的功能覆盖面。
- **Hermes Agent** 与 **OpenClaw** 按比例同属一线活跃度（日均 PR 与 issue 比例接近 1:1，流转率高），但 Hermes Agent 的活动高度集中在安全修复而非功能开发。
- **QwenPaw** 和 **ZeroClaw** 均保持严谨的发布节奏（今日均发布了稳定版），PR 与 issue 比例健康，呈现出稳定维护而非快速扩张的态势。
- **IronClaw** 零活动，需进一步调查后才能判断是项目废弃、分叉更名还是暂停期，在此之前任何生态整合决策均需谨慎。

---

## 3. OpenClaw 的市场定位

### 相对竞品的优势

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|:--------:|:------------:|:-------:|:--------:|
| **Issue 体量** | 469/天 | 50/天 | 12/天 | 8/天 |
| **PR 体量** | 500/天 | 50/天 | 38/天 | 38/天 |
| **功能广度** | Gateway、Agent、Memory、Channel、UI、CLI | Channel、Plugin、TTS、视觉 | 本地模型、Channel、MCP | Runtime、XMPP、多用户认证 |
| **社区规模信号** | P0 issue 含 81 条评论 | RFC 含 37 条评论 | Bug 含 5 条评论 | CI 请求含 6 条评论 |
| **发布节奏** | Beta（约每月） | 滚动发布 | Stable（约每月） | Stable 逐月小版本 |

### 技术路线差异

OpenClaw 的架构以 **Gateway 进程**（Python/SQLite）为核心，管理 Agent 运行时、桌面 UI（Tauri）以及大量 Channel 插件体系。其设计理念优先考虑 Agent 会话的**横向扩展**和统一 Memory 系统（含主动上下文管理）。项目在 UI 打磨（命令轨迹、分页历史、置顶提示）以及平台适配优化（macOS 持久化、Windows 可靠性）上投入巨大。

Hermes Agent 采用 **Rust 原生路线**，更强调安全原语（会话存储所有权、TLS 强制执行、沙箱加固），核心 Agent 较轻量，高度依赖外部插件提供 Channel 和能力。其社区讨论揭示了对协议层面问题的更深度关注（Matrix 消毒、WhatsApp 会话安全），而非 UI 层面的投入。

ZeroClaw 是唯一一个明确围绕**多用户访问控制**构建的项目（v0.9.0 是首个支持非操作员登录的版本），面向其他项目视为次要的团队/企业部署场景。其 Rust 运行时定位、对有界委托工作区、POSIX shell 合规性以及 SSH 传输复用的专注，使其成为五个项目中最具**安全意识和企业导向**的一员。

QwenPaw 的差异化在于**本地模型支持**（v2.3.0 中的 Piccolo 4B/9B/27B）和 Channel 插件外部化（飞书、Matrix、QQ、微信），目标用户群体是有本地部署或离线 AI 助手需求的用户。其功能请求主要集中在跨平台稳定性和 UI 改进，而非协议多样性。

### 社区规模对比

OpenClaw 的社区在各项信号上均显著更大：评论最多的 issue 达 81 条，而 Hermes Agent 为 37 条，QwenPaw 为 5 条，ZeroClaw 为 6 条。P0 issue（#160959，Gateway 阻塞）在 81 条评论下由多位贡献者共同排查，表明有大量用户积极进行生产环境问题调试。这带来了更快的 bug 发现、更丰富的用例报告，以及更高的社区 PR 贡献概率。

---

## 4. 共同的技术聚焦方向

以下需求在多个项目中同步出现，表明整个生态系统面临共同的工程压力点：

### A. 跨平台可靠性（所有活跃项目）

| 项目 | 平台问题 |
|---------|---------------|
| OpenClaw | Windows：启动缓慢、重启不可靠、schtasks 报错（#170956，P0） |
| OpenClaw | Linux ARM64：~1.9 GB RSS 内存回退（#181432，P1） |
| Hermes Agent | Windows：事件循环卡死、控制台窗口闪烁、更新状态残留（#152364、#149907、#106592） |
| Hermes Agent | macOS：1Password 集成失败、截图路径处理问题（#107998、#76334） |
| QwenPaw | Windows 11 IoT LTSC：启动失败（#8616） |
| QwenPaw | Linux：Channel 插件工作进程因缺少 HOME 变量崩溃（#8682） |
| QwenPaw | macOS（Safari）：UI 图标缺失、Unicode 路径故障 |
| ZeroClaw | Shell 工具返回空错误字符串、stderr 被吞没（#12390） |

**启示：** 跨平台一致性是一个系统性缺口。各项目在独立解决相似问题（路径处理、Unicode 规范化、环境变量传递），尚无明显协同。一套共享的跨平台测试套件将使整个生态系统受益。

### B. 多提供商模型路由（OpenClaw、ZeroClaw、Hermes Agent）

| 项目 | 特性 |
|---------|---------|
| OpenClaw | 跨提供商 cron 备援账户（#192009）— 明确的跨提供商备援链授权 |
| OpenClaw | Claude-cli 后端转录路径问题（#145309）— 已解决 |
| Hermes Agent | 每个会话实时成本显示（#93951）— 配置已失效，需重启 |
| ZeroClaw | 每个提供商 profile 支持多模型（#9809）— 能力模型、预设、跨 OpenAI/Anthropic/Ollama/Bedrock/Azure 的备援图 |
| QwenPaw | Piccolo 本地决策模型（4B/9B/27B）通过 Ollama 集成 |

**启示：** 生态系统正在向**提供商无关的模型路由**收敛，具备备援链、成本可见性和会话级模型选择能力。这是一个共享规范或互操作层的强烈需求信号。

### C. Channel / 协议多样性（OpenClaw、Hermes Agent、QwenPaw、ZeroClaw）

每个活跃项目均在投入多 Channel 支持，但侧重点各有不同：

| 项目 | 在研 Channel |
|---------|---------------|
| OpenClaw | Telegram、iOS APNs、WebChat |
| Hermes Agent | Matrix（消毒加固）、WhatsApp（会话安全）、Email（TLS 验证）、X/Twitter（通过 summon 插件） |
| QwenPaw | 飞书、Matrix、QQ、微信（均外部化为官方插件） |
| ZeroClaw | XMPP + OMEMO（Rust 原生实现，审查中） |

**启示：** Channel 插件架构正在收敛。QwenPaw 对 Channel 插件的外部化模式正被整个生态系统采用。Channel 插件 API 的标准化可能实现跨项目插件兼容。

### D. 安全加固（Hermes Agent、ZeroClaw、OpenClaw）

| 项目 | 安全工作 |
|---------|--------------|
| Hermes Agent | 安全马拉松：Matrix formatted_body 消毒、WhatsApp 会话存储所有权、Email TLS 强制执行、文件安全守卫 |
| ZeroClaw | RUSTSEC-2026-0486 rustix 补丁今日合并；有界委托工作区隔离（#10391）；POSIX shell 合规（#11994） |
| OpenClaw | 孤岛子 Agent 运行恢复（#170562）；会话恢复上下文注入可见性（#165041） |

**启示：** 安全正从边界加固走向**传输中数据、静态数据与会话隔离**的全方位关注。安全马拉松模式（Hermes Agent）这种专项安全冲刺实践值得其他项目借鉴。

### E. Memory 与上下文管理（OpenClaw、QwenPaw、ZeroClaw）

| 项目 | Memory 相关问题 |
|---------|---------------|
| OpenClaw | 上下文溢出估算器高估 2.3–2.6 倍（#101929）；主动 Memory 熔断器在负载下失效；WAL 检查点永不完成（#164294） |
| QwenPaw | 重排序模型中心，含多查询精度历史（#8472，XXL PR）；OpenViking 兼容性修复（#8588） |
| ZeroClaw | runtime-trace.jsonl 丢失数小时事件（#12391，S2） |

**启示：** Memory 管理正从简单上下文窗口演进为**分层 Memory 系统**，具备重排序、摘要和持久化跟踪存储能力。各项目技术方案差异显著，表明该领域仍处于成熟期前。

---

## 5. 差异化分析

### 按目标用户

| 项目 | 主要用户画像 | 次要用户画像 |
|---------|-----------------|-------------------|
| OpenClaw | 高阶用户、开发者、管理多 Agent 的团队 | 企业运营者（多会话、cron、Webhook） |
| Hermes Agent | 注重安全的自托管用户、Matrix/WhatsApp 用户 | 插件开发者（生态黑客松参与者） |
| QwenPaw | 本地模型爱好者、中文用户、本地化部署者 | 跨 Channel 团队协作 |
| ZeroClaw | 企业 IT、Rust 技术栈团队、多用户团队 | 需要有界 Agent 工作区的安全敏感部署 |
| IronClaw | 未知（已停滞） | — |

### 按技术架构

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|-------------|---------|----------|
| **语言** | Python（核心）+ Tauri（UI） | Rust（核心） | Python（核心） | Rust（核心） |
| **数据库** | SQLite（WAL 模式） | — | — | SQLite（通过 rusqlite） |
| **Agent 模型** | 统一运行时，含子 Agent、Memory、工具上限 | 基于插件的 Agent | 第三方 Agent 提取（插件化） | 有界委托模型，工作区隔离 |
| **多用户** | 通过 Gateway 操作员账户 | 通过 Matrix/WhatsApp 多用户 Channel | 通过 Channel 插件（飞书、QQ） | **原生支持 OpenID Connect**（v0.9.0） |
| **本地模型** | 有限（Claude CLI 后端） | 有限 | **原生支持**（Piccolo 4B/9B/27B、Ollama） | 通过 Ollama 集成 |
| **插件系统** | 原生 Channel 插件 | 外部插件（黑客松驱动） | 外部官方插件（Channel） | MCP 提取（审查中） |
| **发布模式** | Beta 滚动 | 滚动发布 | Stable 含 Beta | Stable 小版本 |

### 按功能侧重

- **OpenClaw** 重点投入 **UI/UX**（分页历史、命令轨迹、置顶提示、快捷键）和 **Agent 编排**（子 Agent、cron、自学复盘）。
- **Hermes Agent** 重点投入 **安全加固**（安全马拉松、沙箱加固、TLS、会话所有权）和 **协议集成**（Matrix、WhatsApp、Email）。
- **QwenPaw** 重点投入 **本地推理**（Piccolo、Ollama、Model Forge 插件）和 **跨平台 Channel 支持**（飞书、QQ、微信、Matrix）。
- **ZeroClaw** 重点投入 **多用户访问控制**（OpenID Connect、范围化聊天隔离）和 **运行时安全**（有界工作区、POSIX shell 强制、SSH 传输复用）。

---

## 6. 社区动能与成熟度

### 活跃度分级

**一线 — 高吞吐 / 大型社区**
- **OpenClaw**：日均约 1,000 条事件。完善的 bug 分级流程（P0/P1/P2 标签被积极使用）。社区积极提交复杂问题的详细复现步骤（P0 含 81 条评论，P2 含 40 条评论）。多条 XL PR 并行推进，佐证了强大的贡献者池。**成熟度信号：** 稳定的 Beta 发布节奏，积极的安全响应。

- **Hermes Agent**：日均约 100 条事件。安全专注度高，安全马拉松冲刺持续推进。插件黑客松推动生态扩张。含 37 条评论的 RFC 表明架构治理经过深思熟虑。**成熟度信号：** 安全补丁快速合并（每日多 XS 修复），成熟的插件提交流程。

**二线 — 稳定迭代 / 专注社区**
- **QwenPaw**：日均约 50 条事件，发布纪律严明的 Stable 版本。社区规模较小但参与度高，问题报告和功能请求具体务实。平台特定问题（Windows LTSC、macOS unicode、Linux 环境变量）表明项目服务于真实的生产部署。**成熟度信号：** v2.3.0 通过四项验证关卡，迁移说明完整。

- **ZeroClaw**：日均约 46 条事件。Rust 核心架构赋予独特的工程定位。多用户认证里程碑（v0.9.0）标志着企业就绪。XL 特性 PR 正在审查中，暗示在较小社区下仍保持功能动能。**成熟度信号：** 稳定的小版本发布节奏，安全补丁当日合并。

**三线 — 停滞**
- **IronClaw**：零活动。在任何生态整合或依赖决策前需进一步调查。

### 快速迭代 vs 趋于稳定

| 项目 | 趋势 | 证据 |
|---------|-------|----------|
| OpenClaw | **快速迭代** | 24h 内合并 178 个 PR；多条 XL PR 并行推进；今日发布 v2026.11.5-beta.2 |
| Hermes Agent | **快速迭代**（专注安全） | 安全马拉松冲刺；今日提交 10+ 插件；合并 13 个 PR |
| QwenPaw | **向稳定过渡** | v2.3.0 Stable 发布；合并 14 个 PR vs 12 个 issue；Bug 修复吞吐高 |
| ZeroClaw | **特性冲刺 → 稳定** | v0.9.0 稳定里程碑；多条主要 XL PR 进入审查；安全补丁当日合并 |
| IronClaw | **停滞** | 零活动 |

---

## 7. 趋势信号

以下信号从整个生态系统的社区反馈和开发活动中提取，代表了 AI Agent 开发者群体的行业级优先方向：

### A. 多模型路由已是基础设施标配

OpenClaw 和 ZeroClaw 均在实现提供商无关的模型选择与备援链。这反映了用户对**成本优化、冗余保障以及按任务选最优模型**的需求。构建在单一提供商 API 上的开发者应预期用户会希望在不改变 Agent 逻辑的前提下切换提供商。OpenClaw 的跨提供商 cron 备援（issue #192009）和 ZeroClaw 的每 profile 多模型支持（PR #9809）正是这一模式的具象实现。

**可操作建议：** 现在就构建模型提供商的抽象层。预期用户将要求备援路由、会话级成本可见性以及提供商能力探测功能。

### B. 跨平台一致性正在成为竞争分水岭

每个活跃项目都存在未解决的 Windows、macOS 或 Linux 特有 bug。能解决跨平台可靠性问题的项目——尤其是**环境变量传递、Unicode 路径处理、systemd 集成和控制台窗口管理**——将赢得企业和高阶用户的采用。OpenClaw 在 macOS 上的特定持久化特性（会话间密钥保留、持久化后台命令）和 Hermes Agent 在 macOS 上的安全加固表明，这些平台正成为一线目标。

**可操作建议：** 从第一天起就在 CI 矩阵中覆盖 Windows、macOS 和 Linux。平台特定问题的成本会随用户基数增长而累积。

### C. 本地模型支持正在形成独立市场细分

QwenPaw 的 Piccolo 集成（v2.3.0）和 Model Forge 插件代表了日益增长的对**本地部署、离线可用、数据主权保障**的个人 AI 助手需求。这与 OpenClaw 和 Hermes Agent 的云 API 优先路线形成鲜明差异。差异是实质性的：本地模型用户优先考虑数据主权和延迟，而非模型能力上限。

**可操作建议：** 考虑本地模型部署路径。即使非主要目标，提供 Ollama 或类似本地推理作为备选也能降低对外部 API 的依赖。

### D. Channel 插件架构正在收敛

QwenPaw 的飞书/Matrix/QQ/微信、Hermes Agent 的 Matrix/WhatsApp/Email、OpenClaw 的 Telegram/iOS/WebChat、ZeroClaw 的 XMPP 等 Channel 插件外部化实践揭示了一个**共享架构模式**：Channel 适配器作为一等公民的插件，具备标准化的生命周期管理、认证流程和事件处理规范。目前尚无共享规范，但模式的一致性已足以预见未来互操作层的可能。

**可操作建议：** 将 Channel 集成设计为可热插拔的插件，定义良好清晰的接口。持续关注这些项目间涌现的插件 API 标准。

### E. 安全正从边界加固升级到会话级别

从基础认证加固（API 密钥管理）向**会话隔离、静态数据加密、传输安全、沙箱化**的转变（ZeroClaw 的有界工作区、Hermes Agent 的文件安全守卫、OpenClaw 的子 Agent 运行隔离），表明整个生态系统正在向生产级部署成熟化演进。Hermes Agent 的安全马拉松模式——专注的多日安全冲刺——是其他项目在用户基数增长后可能采用的实践。

**可操作建议：** 将安全作为持续过程而非一次性加固。将会话隔离、凭证存储所有权和 TLS 强制执行作为基线实践。

### F. 企业功能正在成为竞争性刚需

ZeroClaw 的 OpenID Connect 多用户支持（v0.9.0）和范围化聊天隔离表明，**团队协作型个人 AI 助手**是一个独立的市场细分。OpenClaw 的 Gateway 操作员账户和 cron 调度暗示了类似的企业就绪目标。随着这些工具从个人生产力工具走向团队工作流，预期对 RBAC、审计日志、SSO 集成和按用户成本归因的需求将持续增长。

**可操作建议：** 及早规划多用户架构。认证、授权和审计追踪是团队部署的硬性要求。

---

*本报告基于 2026-11-12 五个 AI Agent 开源项目的社区摘要数据生成。数据来源于 GitHub 公开仓库活动。IronClaw 在纳入生态系统分析前需进一步调查。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. Let me go through this carefully, maintaining all the Markdown structure, tables, formatting, and technical terms while producing natural, fluent technical Chinese suitable for a Chinese developer newsletter.

Key things to preserve:
- All headings
- All tables (including alignment rows)
- All lists
- Bold/italic formatting
- URLs and link references
- Issue/PR numbers and links
- Code spans, file paths, config names
- Numbers and dates
- Emojis

Things to translate:
- Body text
- Table headers
- List items
- All descriptive content

Let me translate section by section:
</think>


# Hermes Agent 项目日报 — 2026-11-12

## 1. 今日概览

Hermes Agent 过去 24 小时表现出**高活动度，共有 100 条 issue/PR 更新**。项目在大量 bug 修复的同时，安全相关的补丁也明显增多，同时插件目录贡献呈现增长态势。值得注意的是，**13 个 PR 已合并/关闭**，社区对多个长期运行的 RFC 讨论保持关注。安全团队尤为活跃，多个 P2 安全修复（标记为 `sec-marathon`）正在推进。整体项目健康状况显示维护效率良好，但大量未解决 P2 bug 表明稳定性方面仍面临压力。

---

## 2. 版本发布

**今日无新版本发布。** 数据集中未提供最近一次发布的相关信息。

---

## 3. 项目进展

### 今日合并/关闭的 PR（13 个）

| PR | 类型 | 描述 | 状态 |
|----|------|------|------|
| [#76376](https://github.com/NousResearch/hermes-agent/pull/76376) | Bug 修复 | `fix(vision)`：处理 macOS 截图文件名中的 U+202F 字符 | Closed |
| [#124742](https://github.com/NousResearch/hermes-agent/pull/124742) | Bug 修复 | `fix`：容受 macOS Unicode 文件名的漂移问题 | Closed |
| [#62126](https://github.com/NousResearch/hermes-agent/pull/62126) | Bug 修复 | `fix(vision)`：解析包含 Unicode 空白字符的图片路径 | Closed |
| [#154161](https://github.com/NousResearch/hermes-agent/pull/154161) | 功能 | `bump pixel-hq` 至 1.2.0 — 新增部门、会话操作、人员管理 | Closed |
| [#154046](https://github.com/NousResearch/hermes-agent/pull/154046) | Bug 修复 | `fix(media)`：修复 Mac 截图路径在 vision、视频、图片生成中的使用 | Closed |

### 活跃开发中的 PR（37 个 open）

**安全修复（sec-marathon）：**
- [#154124](https://github.com/NousResearch/hermes-agent/pull/154124) — Matrix `formatted_body` 清理；仅在文本节点内展开 TeX
- [#153849](https://github.com/NousResearch/hermes-agent/pull/153849) — WhatsApp：session store 和 bridge.log 仅对所有者可读
- [#153815](https://github.com/NousResearch/hermes-agent/pull/153815) — Email：SMTP/IMAP 登录前需验证 TLS
- [#153702](https://github.com/NousResearch/hermes-agent/pull/153702) — 文件安全：保护同级 profile 的凭证存储

**插件目录新增：**
- [#153861](https://github.com/NousResearch/hermes-agent/pull/153861) — **summon**：X/Twitter 集成，从交互中学习
- [#153340](https://github.com/NousResearch/hermes-agent/pull/153340) — **shinjuku**：Plugin Hackathon 参赛作品，私密钱包
- [#153570](https://github.com/NousResearch/hermes-agent/pull/153570) — **prsn-id**：PRSN Connect 集成，用于会话签名密钥
- [#153518](https://github.com/NousResearch/hermes-agent/pull/153518) — **werk**：构建相关的概念验证插件
- [#153325](https://github.com/NousResearch/hermes-agent/pull/153325) — **printsi**：Plugin Hackathon 参赛作品
- [#153040](https://github.com/NousResearch/hermes-agent/pull/153040) — **Model Forge**：支持所有模态的本地模型（Hackathon 参赛作品）
- [#153056](https://github.com/NousResearch/hermes-agent/pull/153056) — **webgraft**：带来源标注的本地网页提取后端
- [#154155](https://github.com/NousResearch/hermes-agent/pull/154155) — **VividSites**：免费组件库，可选付费扩展
- [#154061](https://github.com/NousResearch/hermes-agent/pull/154061) — **valun** 升级至 0.4.1
- [#154218](https://github.com/NousResearch/hermes-agent/pull/154218) — **pixel-hq** 升级至 1.3.0

**桌面端/CLI 改进：**
- [#154219](https://github.com/NousResearch/hermes-agent/pull/154219) — 更新后显示网关迁移阻塞项

---

## 4. 社区热点话题

### 互动最多的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 发起人 | 优先级 |
|-------|------|--------|--------|--------|
| [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) | RFC：DOC-CHAIN SUBSTRATE 的网络设计 | 37 | c0wb0yp0tat0 | P4 |
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | kanban：受速率限制的卡片永久卡在 `blocker_auth` 状态 | 25 | wiliano | P2 |
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 功能请求：支持语音通话的原生移动端应用（iOS & Android） | 22 | chefroger | P3 |
| [#139347](https://github.com/NousResearch/hermes-agent/issues/139347) | Bug：有界的托管房间转录丢失源用户信息 | 14 | tarkilhk | P2 |

### 深层需求分析

1. **长期架构演进（Issue #143379）**：DOC-CHAIN SUBSTRATE RFC 体现了社区对**压缩会话的持久化记录、治理机制和压缩策略**的关注。这是一个基础性的架构讨论，可能影响未来的信息持久化方向。

2. **可靠性问题（Issue #119070）**：Kanban 卡片卡住的问题揭示了**工作流可靠性**的隐患——速率限制重试逻辑产生了无限阻塞状态。用户需要可预测的任务处理机制。

3. **跨平台语音集成（Issue #11911）**：22 条评论和 16 个 👍 表明**移动端语音通话**有强烈需求。这代表了使用场景的重大扩展，不只是桌面/终端场景，而是面向免手操作和移动办公场景。

---

## 5. Bug 与稳定性

### P2 Bug（关键/高优先级）

| Issue | 标题 | 平台 | 修复 PR？ |
|-------|------|------|----------|
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | 速率受限的 kanban 卡片永久卡在 `blocker_auth` | 全部 | — |
| [#139347](https://github.com/NousResearch/hermes-agent/issues/139347) | 有界房间转录丢失源用户 | 全部 | — |
| [#106592](https://github.com/NousResearch/hermes-agent/issues/106592) | 远程桌面更新在 systemd 重启成功后仍报失败 | Linux | — |
| [#106217](https://github.com/NousResearch/hermes-agent/issues/106217) | 桌面端在 'Turn failed' 后陷入死胡同，无解 | Desktop | — |
| [#141984](https://github.com/NousResearch/hermes-agent/issues/141984) | `tui_gateway.server` 在 import 时将 stdout 重定向至 stderr | TUI | — |
| [#107998](https://github.com/NousResearch/hermes-agent/issues/107998) | 1Password 浏览器保险库解锁失败 | macOS | — |
| [#152365](https://github.com/NousResearch/hermes-agent/issues/152365) | 微信语音消息使会话卡在 'started' 状态 | WeChat | — |
| [#147400](https://github.com/NousResearch/hermes-agent/issues/147400) | 固定提示词在非 100% 缩放时样式错乱 | Webapp | — |
| [#148457](https://github.com/NousResearch/hermes-agent/issues/148457) | AppArmor 主机上浏览器沙箱可被绕过 | Linux | — |
| [#153048](https://github.com/NousResearch/hermes-agent/issues/153048) | 0 字节的 state.db 通过 is_file() 检查后引发 OperationalError | Windows | — |

### 平台专项问题

**Windows（5 个 issue）：**
- 并发 Kanban worker 运行时事件循环卡死（[#152364](https://github.com/NousResearch/hermes-agent/issues/152364)）
- Agent 终端命令在 MSIX 构建中闪出控制台窗口（[#149907](https://github.com/NousResearch/hermes-agent/issues/149907)）
- systemd 重启后更新状态不更新（[#106592](https://github.com/NousResearch/hermes-agent/issues/106592)）

**macOS（3 个 issue）：**
- 1Password 集成失败（[#107998](https://github.com/NousResearch/hermes-agent/issues/107998)）
- macOS 截图路径处理（[#76334](https://github.com/NousResearch/hermes-agent/issues/76334)）— **已在 PR #76376、#124742、#154046 中修复**
- 大仓库检查时桌面健康检查耗时 4-76 秒（[#148498](https://github.com/NousResearch/hermes-agent/issues/148498)）

**桌面应用（6 个 issue）：**
- 恢复 TUI 持有的会话时遇到死胡同错误（[#106217](https://github.com/NousResearch/hermes-agent/issues/106217)）
- Enter 键发送消息，不支持换行（[#52952](https://github.com/NousResearch/hermes-agent/issues/52952)）
- 非 100% 缩放时固定提示词剪贴失效（[#147400](https://github.com/NousResearch/hermes-agent/issues/147400)）
- 设置中"获取密钥"链接失效（[#107988](https://github.com/NousResearch/hermes-agent/issues/107988)）
- 模型切换静默失败，返回 revision_conflict（[#151686](https://github.com/NousResearch/hermes-agent/issues/151686)）
- 网关迁移阻塞项未显示（[#154219](https://github.com/NousResearch/hermes-agent/pull/154219)）— **修复 PR 已存在**

---

## 6. 功能请求与路线图信号

### 高关注度请求

| Issue | 标题 | 点赞 | 评论数 | 可能性 |
|-------|------|------|--------|--------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 支持语音通话的原生移动端应用（iOS & Android） | 16 👍 | 22 | **高** — 需求稳定 |
| [#93951](https://github.com/NousResearch/hermes-agent/issues/93951) | 会话级实时成本显示 | 0 👍 | 2 | **中** — 账单透明度需求 |

### 分析

1. **移动端语音集成**：16 个 👍 和 22 条评论使这成为社区**票数最高的功能需求**。该请求强调免手操作和实时电话交谈——表明用户希望 Hermes 成为移动端的语音优先个人 AI。

2. **成本可视化**：使用付费 API（如 DeepSeek）的用户无法实时查看对话成本。`show_cost` 配置在 0.20.4 中被标记为"已失效"。鉴于用户对计费的关注度提升，这很可能是**未来开发的优先方向**。

3. **插件生态增长**：今日提交了 10+ 个新插件，表明**Plugin Hackathon 正在推动生态显著扩张**。路线图可能越来越多地强调插件可发现性和质量标准。

---

## 7. 用户反馈摘要

### 痛点

| 类别 | 问题 | 用户影响 |
|------|------|----------|
| **会话可靠性** | Kanban 卡片卡住、会话卡在 'started' | 工作丢失、流程中断 |
| **桌面端 UX** | Enter 发送消息、死胡同错误、静默失败 | 挫败感、工作效率下降 |
| **跨平台** | macOS Unicode、Windows 控制台闪烁、Linux systemd | 平台信任受损 |
| **账单透明度** | 无成本显示 | 财务不确定性 |
| **身份认证** | 1Password 集成失效、链接失效 | 集成功能损坏 |

### 观察到的使用场景

- **多 profile 使用**：路由 profile 的子环境、每个 profile 的 kanban worker
- **语音/多模态**：微信语音消息、视觉分析、TTS 集成
- **企业集成**：Matrix、WhatsApp、1Password、SMTP/IMAP
- **本地 AI**：Model Forge 插件覆盖 GPU 本地推理的所有模态

### 满意度指标

- **社区活跃度**：37 条评论的 RFC、Hackathon 插件提交活跃
- **安全响应能力**：多个 sec-marathon 修复快速合并
- **Bug 修复速度**：macOS 截图问题（长期 issue #76334）现已解决

---

## 8. 待办关注

### 长期未处理的重要 Issue

| Issue | 标题 | 存在时间 | 评论数 | 优先级 | 状态 |
|-------|------|----------|--------|--------|------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 支持语音通话的原生移动端应用 | ~7 个月 | 22 | P3 | Open，需决策 |
| [#76334](https://github.com/NousResearch/hermes-agent/issues/76334) | vision_analyze 在 macOS 截图上失败（U+202F） | ~4 个月 | 2 | P2 | **已修复**（PR 已合并） |
| [#52952](https://github.com/NousResearch/hermes-agent/issues/52952) | 桌面端 Enter 键发送消息 | ~5 个月 | 9 | P3 | Open |
| [#93951](https://github.com/NousResearch/hermes-agent/issues/93951) | 会话级实时成本显示 | ~3 个月 | 2 | P3，需决策 | Open |
| [#107988](https://github.com/NousResearch/hermes-agent/issues/107988) | "获取密钥"链接失效（安全加固副作用） | ~2 个月 | 3 | P2 | Open |

### 需要维护者关注的问题

1. **Issue [#11911](https://github.com/NousResearch/hermes-agent/issues/11911)**：移动端应用功能有 22 条评论和 16 个 👍，但缺少 `needs-decision` 标记。社区希望得到路线图信号。

2. **Issue [#143379](https://github.com/NousResearch/hermes-agent/issues/143379)**：DOC-CHAIN RFC 有 37 条评论，代表了重要的架构讨论，可能需要正式评审。

3. **Issue [#145401](https://github.com/NousResearch/hermes-agent/issues/145401)**：Kanban 无限重新排队配额耗尽的 worker——这个计费相关 bug 已开放约两周，仅有 2 条评论。

4. **Issue [#149679](https://github.com/NousResearch/hermes-agent/issues/149679)**：在引导至通知轮次时静默丢失消息——影响 `busy_input_mode: steer` 用户。

---

## 汇总指标

| 指标 | 数值 |
|------|------|
| Issue 更新（24h） | 50（46 open，4 closed） |
| PR 更新（24h） | 50（37 open，13 merged/closed） |
| 新版本发布 | 0 |
| P2 bug（open） | ~20 |
| 安全修复（已合并/open） | 4 |
| 插件提交 | 10+ |
| 最活跃讨论 | DOC-CHAIN RFC（37 条评论） |
| 最高票功能请求 | 原生移动端应用（16 👍） |

*日报生成日期：2026-11-12，数据来源：NousResearch/hermes-agent*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate it carefully while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, usernames, version tags, etc. as-is
4. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

---

# QwenPaw 项目日报 — 2026-11-12

## 1. 今日概览

QwenPaw 进入 11 月 12 日，**开发活跃度很高**——过去 24 小时内有 38 个 PR 和 12 个 issue 有更新，显示出紧张的冲刺节奏。稳定的 **v2.3.0** 版本于今日发布，带来了 Piccolo 本地决策模型（4B/9B/27B）。社区在 bug 报告和功能提案方面参与积极，但频道插件生态（飞书、Matrix、QQ、微信）存在多个竞态条件和启动窗口 bug，需要关注。整体项目健康状况良好，PR 吞吐量强劲（14 个已合并/关闭），表明正在快速迭代至下一个 beta 周期。

---

## 2. 版本发布

### 🎉 v2.3.0 — 稳定版

**发布页面：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0

| 组件 | 详情 |
|-----------|---------|
| **Piccolo 本地决策模型** | 新增 Piccolo 4B、9B 和 27B 作为本地决策模型，用于工具审查和上下文压缩 |
| **推荐量化方式** | BF16 和 Q8_0 |
</think>


# QwenPaw 项目日报 — 2026-11-12

## 1. 今日概览

QwenPaw 进入 11 月 12 日，**开发活跃度很高**——过去 24 小时内有 38 个 PR 和 12 个 issue 有更新，显示出紧张的冲刺节奏。稳定的 **v2.3.0** 版本于今日发布，带来了 Piccolo 本地决策模型（4B/9B/27B）到核心产品中。社区在 bug 报告和功能提案方面参与积极，但频道插件生态（飞书、Matrix、QQ、微信）存在多个竞态条件和启动窗口 bug，需要关注。整体项目健康状况良好，PR 吞吐量强劲（14 个已合并/关闭），表明正在快速迭代至下一个 beta 周期。

---

## 2. 版本发布

### 🎉 v2.3.0 — 稳定版

**发布页面：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0

| 组件 | 详情 |
|-----------|---------|
| **Piccolo 本地决策模型** | 新增 Piccolo 4B、9B 和 27B 作为本地决策模型，用于工具审查和上下文压缩 |
| **推荐量化方式** | BF16 和 Q8_0 |
| **安装方式** | 支持运行时安装和更新 |
| **模型下载** | 可通过 HuggingFace 或 ModelScope 获取 |

**迁移说明：**  
- 该版本通过了全部四个安装验证检查点。2.2.x 版本用户可直接升级。  
- 频道插件（飞书、Matrix、微信）已迁移至官方插件仓库——详见 bug 部分，涉及 Linux/Windows 启动问题。

---

## 3. 项目进展

### 今日合并/关闭的 PR（共 14 个）

| PR | 贡献者 | 描述 | 规模 |
|----|--------|-------------|------|
| [#8638](https://github.com/agentscope-ai/QwenPaw/pull/8638) | zhijianma | **feat(shell):** 为命令卡片添加意图标题 | M |
| [#8660](https://github.com/agentscope-ai/QwenPaw/pull/8660) | zhijianma | **fix(console):** 仅在已认证时检查终端状态 | S |
| [#8634](https://github.com/agentscope-ai/QwenPaw/pull/8634) | zhijianma | **fix(cron):** 使用 TaskTracker 跟踪定时 Agent 任务 | M |
| [#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670) | zhaozhuang521 | **fix(console):** 恢复 Safari 消息队列操作图标（修复 #8663） | S |
| [#8609](https://github.com/agentscope-ai/QwenPaw/pull/8609) | yang0228 | **feat(console):** 在跟进草稿中引用回复内容 | L |
| [#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426) | Luohh5 | **feat(agent):** 将第三方 Agent 提取为插件 | XXXL |
| [#1972](https://github.com/agentscope-ai/QwenPaw/pull/1972) | hellomypastor | **feat(sandbox):** 集成 OpenSandbox 作为云沙箱后端 | — |

**重要进展：**
- **引用到跟进** 功能已上线（#8609）——用户现在可以选中文本并在后续消息中引用
- **定时任务跟踪** 现已在 TaskTracker 中可见（#8634）——定时运行任务可正常跟踪和取消
- **Safari 图标修复** 消息队列操作图标（#8670）——解决了设计库 `size="small"` SVG bug
- **Shell 命令标题** 提升命令卡片用户体验（#8638）

---

## 4. 社区热点

### 最活跃的 Issue（按评论数排序）

| Issue | 标题 | 作者 | 评论数 | 状态 |
|-------|-------|--------|----------|--------|
| [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | 频道插件启动竞态：`_wait_connected` 将初始 `platform_state="disconnected"` 视为致命错误 | justsavo | **5** | 🟡 进行中 |
| [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix 频道插件在多工作区启用时激活失败 | MCQSJ | **4** | 🟡 进行中 |
| [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 在 Windows 11 IoT LTSC 上无法启动 | ArsenicumAlbum | **3** | 🟡 进行中 |
| [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | 在跟进中引用/参考回复文本以提供上下文 | fhd200200 | **3** | ✅ 已关闭 |
| [#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682) | 官方频道插件 Worker 在 Linux 上崩溃（缺少 HOME） | Mcpy | **1** | 🟡 进行中 |
| [#8683](https://github.com/agentscope-ai/QwenPaw/issues/8683) | 需要更好的 Markdown 预览视图 | wjsi | **1** | 🟡 进行中 |

### 评审中的热门 PR（按规模/影响排序）

| PR | 标题 | 作者 | 规模 | 状态 |
|----|-------|--------|------|--------|
| [#8472](https://github.com/agentscope-ai/QwenPaw/pull/8472) | feat(memory): 新增重排序模型中心，支持服务测试、多查询精度历史和自动校验 | lecheng2018 | **XXL** | 评审中 |
| [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | refactor(mcp): 将 mcp 提取为插件 | Luohh5 | **XXXL** | 评审中 |
| [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588) | fix(memory): OpenViking 跟进清理、兼容性及关闭修复 | xypang33-sketch | **XL** | 评审中 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | fix(ollama): 从 num_ctx 而非默认 128k 获取上下文窗口大小 | Li-john1021 | **XXL** | 评审中 |

### 潜在需求分析

1. **频道插件稳定性：** 多个 issue（#8669、#8538、#8682）源于频道插件外置化迁移。用户需要在各平台上实现可靠的启动时序。
2. **跨平台一致性：** Safari 渲染 bug（#8663，已修复）、Windows LTSC 启动失败（#8616）表明平台专项 QA 存在缺口。
3. **记忆与检索增强：** 对重排序增强（#8472）和 OpenViking 兼容性（#8588）有强烈需求。
4. **插件架构扩展：** 将第三方 Agent（#8426）和 MCP（#8469）提取为插件，标志着架构朝着模块化方向演进。

---

## 5. Bug 与稳定性

### 活跃的 Bug 报告（按严重程度排序）

| 严重程度 | Issue | 描述 | 平台 | 是否有修复 PR |
|----------|-------|-------------|----------|---------|
| 🔴 **高** | [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 2.3.0-beta.1 在 Windows 11 IoT LTSC 上无法启动，报"路径未找到"→ AppHang | Windows 11 IoT LTSC | ❌ 无 |
| 🔴 **高** | [#8682](https://github.com/agentscope-ai/QwenPaw/issues/8682) | 频道插件 Worker 在 Linux 上崩溃——缺少 HOME/QWENPAW_WORKING_DIR | Linux | ❌ 无 |
| 🟠 **中** | [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | 飞书频道插件启动竞态导致每次启动都报 CHANNEL_NOT_CONNECTED | Windows Desktop | ❌ 无 |
| 🟠 **中** | [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | 多工作区启用 Matrix 频道时启动失败（10s 启动窗口不足） | 跨平台 | ❌ 无 |
| 🟡 **低** | [#8674](https://github.com/agentscope-ai/QwenPaw/issues/8674) | 查询错误转储在系统临时目录中无限增长（数百 MB） | Windows | ✅ [#8678](https://github.com/agentscope-ai/QwenPaw/pull/8678) |
| 🟡 **低** | [#8683](https://github.com/agentscope-ai/QwenPaw/issues/8683) | 平板浏览器竖屏视图中 Markdown 预览过小 | 浏览器 | ❌ 无 |

### 今日已修复的问题
- ✅ **Safari 消息队列图标** — [#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670) 已合并

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| 功能 | Issue | 作者 | 用户需求 | 纳入可能性 |
|---------|-------|--------|-----------|------------------------|
| **Markdown 预览改进** | [#8683](https://github.com/agentscope-ai/QwenPaw/issues/8683) | wjsi | 更好的尺寸控制、全屏模式、竖屏平板视图中显示操作按钮 | 🟡 中等 |
| **引用/参考文本** | [#5110](https://github.com/agentscope-ai/QwenPaw/issues/5110) | fhd200200 | "引用到跟进"功能，类似 Perplexity | ✅ **已在 #8609 中实现** |
| **视觉一致性：思考块与工具卡片** | [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) | sslnv88 | 长时间任务中左侧对齐和视觉层级统一 | 🟡 中等 |
| **执行工具辨识度** | [#8612](https://github.com/agentscope-ai/QwenPaw/issues/8612) | sslnv88 | 长时间对话中更好地区分执行类工具调用 | 🟡 中等 |

### 路线图信号

1. **记忆/重排序投入：** XXL 重排序模型中心 PR（#8472）表明记忆质量是 2026 年的重点方向。
2. **插件架构：** MCP（#8469）和第三方 Agent（#8426）提取为插件，表明正在向插件市场模式演进。
3. **按任务推理控制：** `thinking_level` 在 JobRuntimeSpec 中的支持（#8476）指向定时任务的细粒度 Agent 配置。
4. **本地决策模型：** v2.3.0 中的 Piccolo 集成标志着向本地化/离线能力的推进。

---

## 7. 用户反馈摘要

### 痛点

| 痛点 | 证据 | 影响 |
|------------|----------|--------|
| **频道插件不稳定** | 多份报告（#8669、#8538、#8682）称飞书、Matrix、微信插件启动失败 | 对依赖团队频道的用户影响严重 |
| **Windows LTSC 不兼容** | #8616: 2.3.0-beta.1 路径解析错误，AppHang | 阻塞企业级 Windows 部署 |
| **移动端 Markdown 预览体验差** | #8683: 尺寸固定过小，无全屏选项 | 平板/触屏用户体验受损 |
| **临时存储无限增长** | #8674: 查询错误转储填满磁盘 | 系统稳定性风险 |
| **Safari 特定渲染问题** | #8663: 操作图标缺失 | macOS Safari 用户工作流中断 |

### 正面反馈信号

- **引用功能已上线** — #5110 实现后关闭（#8609），表明社区功能请求正在被采纳
- **Shell 命令标题** — 更清晰直观的命令卡片（#8638）
- **定时任务跟踪** — 定时任务可观测性提升（#8634）

---

## 8. 积压事项关注

### 长期未响应的重要事项

| 事项 | 时长 | Issue/PR | 描述 | 优先级 |
|------|-----|----------|-------------|---------|
| **OpenSandbox 集成** | 约 8 个月 | [#1972](https://github.com/agentscope-ai/QwenPaw/pull/1972) | CoPaw 云沙箱后端——终于合并 | ✅ 已解决 |
| **Ollama 上下文窗口** | 约 1 个月 | [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | 应读取 `num_ctx` 而非默认 128k——评审中 | 🔴 高 |
| **QQ C2C 消息流** | 约 3 周 | [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | 为 QQ 频道插件添加流式回复——评审中 | 🟡 中 |
| **MCP 插件提取** | 约 2 周 | [#8469](https://github.com/agentscope-ai/QwenPaw/pull/8469) | 需要 XXXL 重构以支持插件架构——评审中 | 🔴 高 |
| **Windows LTSC 启动** | 约 5 天 | [#8616](https://github.com/agentscope-ai/QwenPaw/issues/8616) | 需要调查和修复 | 🔴 高 |
| **飞书启动竞态** | 约 2 天 | [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | 5 条评论但暂无受理人 | 🔴 高 |
| **Matrix 多工作区** | 约 10 天 | [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | 4 条评论但暂无受理人 | 🟠 中 |

### 需要维护者关注

1. **受理 #8616（Windows LTSC）** — 企业级阻塞问题，已有清晰的重现步骤
2. **受理 #8669（飞书启动竞态）** — 5 条评论，社区关注度高
3. **评审 #8236（Ollama）** — 简单修复但长期搁置
4. **评审 #8469（MCP 提取）** — 大型架构变更需要尽早反馈

---

*日报基于 2026-11-12 QwenPaw 活动数据生成。所有 GitHub 链接指向 agentscope-ai/QwenPaw。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English technical report about the ZeroClaw project into Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble or explanation
2. No markdown fences around the whole output
3. Preserve the exact Markdown structure - headings, tables, lists, blockquotes, formatting
4. Keep URLs, links, numbers, dates, project names, repo slugs, version tags, file paths, config identifiers as-is
5. Use natural technical Chinese appropriate for a Chinese developer newsletter
6. Keep issue/PR references and their link text as-is

Let me translate section by section:

Title: ZeroClaw Project Digest — 2026-11-12
→ ZeroClaw 项目摘要 — 2026-11-12

Section 1: Today's Overview
- 8 issues updated → 8 个 issue 更新
- 38 PRs updated → 38 个 PR 更新
- 1 new release → 1 个新版本
- High development velocity → 高开发速度/高开发活跃度
- 117 commits, 22 contributors → 保持原样
- first release enabling non-operator user authentication → 首个支持非运维用户认证的版本
- OpenID Connect → OpenID Connect（保持）
- Active development is concentrated → 活跃开发集中在
- native XMPP channel implementation → 原生 XMPP 频道实现
- delegate workspace stability fixes → 委托工作区稳定性修复
- runtime observability improvements → 运行时可观测性改进
- daemon stability → 守护进程稳定性
- cross-platform CI coverage → 跨平台 CI 覆盖
- cron job outcome differentiation → 定时任务结果区分

Section 2: Releases
- Multi-User Authentication Milestone → 多用户认证里程碑
- Commits → 提交数


- Contributors → 贡献者
- Breaking Changes → 破坏性变更
- Migration Notes → 迁移说明
- Dashboard → Dashboard/仪表盘
- scoped chat isolation → 作用域隔离的聊天环境
- Full changelog → 完整变更日志

Now I'll format the translation properly, maintaining all Markdown structure and keeping technical terms in their original form where appropriate.
</think>


# ZeroClaw 项目摘要 — 2026-11-12

---

## 1. 今日概览

ZeroClaw 今日保持了高开发活跃度，过去 24 小时内共有 **38 个 PR 和 8 个 issue 更新**。项目刚刚发布了 **v0.9.0**（117 次提交，22 位贡献者），这是首个支持通过 OpenID Connect 实现非运维用户登录的版本。活跃开发集中在提供商多模型支持（#9809）、原生 XMPP 频道实现（#11847）、委托工作区稳定性修复（#10391）以及运行时可观测性改进等方面。社区正在积极提交守护进程稳定性相关的缺陷（追踪记录缺失、配置项失效、shell 错误信息问题），同时请求更丰富的跨平台 CI 覆盖和定时任务结果区分功能。

---

## 2. 版本发布

### v0.9.0 — 多用户认证里程碑

| 字段 | 详情 |
|---|---|
| **提交数** | 117 |
| **贡献者** | 22 |
| **破坏性变更** | 无 |
| **迁移说明** | Dashboard 现已支持 OpenID Connect 登录；非管理员账户将获得作用域隔离的聊天环境 |

**亮点：**
- 首个支持**多用户登录**的版本（此前仅限运维人员）
- Dashboard 认证支持**自托管 OpenID Connect 提供商**
- 非管理员用户的会话环境隔离
- 完整变更日志：https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.9.0

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 规模 | 风险 |
|---|---|---|---|
| [#12380](https://github.com/zeroclaw-labs/zeroclaw/pull/12380) | pin translations to v0.9.0 | XS | 低 |
| [#12392](https://github.com/zeroclaw-labs/zeroclaw/pull/12392) | bump rustix to 1.1.6 (RUSTSEC-2026-0486) | XS | 高 |
| [#12215](https://github.com/zeroclaw-labs/zeroclaw/pull/12215) | bump rust-all group (36 updates) | XS | 低 |

### 正在推进的重要特性

| PR | 标题 | 影响 |
|---|---|---|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 支持每个提供商配置文件中配置多个模型 | **核心** — Schema-v4 连接、能力模型、预设及 fallback 图谱；影响所有提供商类型（OpenAI、Anthropic、Ollama、Bedrock、Azure 等） |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | 原生 Rust XMPP 实现，支持可选的传统 OMEMO | **频道** — 支持自托管 Prosody/ejabberd 集成 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 保持有界委托工作区的稳定性 | **安全/Agent** — 在多轮对话中维持工作区、工具上限和命令策略边界 |
| [#12258](https://github.com/zeroclaw-labs/zeroclaw/pull/12258) | 新增同步 sessions_prompt 工具 | **工具** — Agent 可向其他 Agent 的实时 RPC 会话发送提示 |
| [#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) | 新增可选的任务级 SSH 传输复用 | **工具** — 按任务复用 SSH 连接池以提升效率 |
| [#11994](https://github.com/zeroclaw-labs/zeroclaw/pull/11994) | 在 bash 语法中读取 POSIX 命令 | **安全** — 强制 POSIX shell 命令合规性 |

---

## 4. 社区热点话题

### 最活跃的 Issue

| # | 标题 | 评论数 | 情绪/需求 |
|---|---|---|---|
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | 在 Windows 和 macOS 的 CI 中运行测试套件 | 6 | **跨平台 CI 对等性** — 请求将仅限 Ubuntu 的 nextest 扩展至 macOS/Windows 矩阵 |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | 停止 Agent 工作会擦除工具调用记录 | 5 | **数据丢失 / UX 缺陷** — S1 级别；Agent 工作在中断时被丢弃 |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | 原生 XMPP / Prosody 频道 | 4 | **协议多样性** — 请求轻量级自托管聊天替代方案（相对于 Matrix/Discord） |
| [#12397](https://github.com/zeroclaw-labs/zeroclaw/issues/12397) | 区分 Agent 任务结果与定时任务执行状态 | 1 | **可观测性** — 定时任务即使 Agent 判定 `BLOCKED` 也报告 Ok |

### 按活跃度排序的最活跃 PR（按标签/参与度）

| # | 标题 | 规模 | 核心驱动 |
|---|---|---|---|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 每个提供商配置文件支持多个模型 | XL | **提供商灵活性** — 实现 fallback 链的标志性特性 |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | 原生 Rust XMPP 频道 | XL | **频道扩展** — 满足家庭实验室/低资源部署需求 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 有界委托工作区修复 | XL | **安全与正确性** — 确保工具上限隔离 |

**需求分析：** 社区驱动着三条主线：(1) 通过提供商配置文件的 fallback 机制实现**多模型容错**，(2) 通过 XMPP 支持满足**自托管环境的协议多样性**需求，(3) 为 macOS/Windows 用户在 CI 和生产环境中实现**跨平台对等性**。

---

## 5. 缺陷与稳定性

| # | 严重级别 | 标题 | 状态 | 修复 PR？ |
|---|---|---|---|---|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | **S1** | 停止 Agent 工作会擦除工具调用和思考过程 | Open | 无 |
| [#12391](https://github.com/zeroclaw-labs/zeroclaw/issues/12391) | **S2** | runtime-trace.jsonl 在守护进程重启后丢失数小时的事件 | Open | 无 |
| [#12396](https://github.com/zeroclaw-labs/zeroclaw/issues/12396) | S2 | history_pruning.keep_recent 和 collapse_tool_results 是失效的配置项 | Open | 无 |
| [#12390](https://github.com/zeroclaw-labs/zeroclaw/issues/12390) | S2 | shell 工具返回空错误字符串（stderr 被吞没） | Open | 无 |
| [#12393](https://github.com/zeroclaw-labs/zeroclaw/pull/12393) | — | chore(deps): bump rust-all (35 updates) | Open | 依赖更新 |
| [#12392](https://github.com/zeroclaw-labs/zeroclaw/pull/12392) | — | fix(deps): bump rustix for RUSTSEC-2026-0486 | **已合并** | ✅ |

**分析：** 一个 S1 级数据丢失缺陷（Agent 中断时的上下文擦除）需要立即关注。S2 级追踪记录缺失问题（#12391）影响 Windows 守护进程生产环境的可观测性。失效配置项缺陷（#12396）表明在 #8196 清理后存在配置模式漂移。`rustix` 的安全补丁（RUSTSEC-2026-0486）已及时合并。

---

## 6. 特性请求与路线图信号

| # | 特性 | 标签 | 可行性 |
|---|---|---|---|
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 每个提供商配置文件支持多个模型 | Core, provider, size:XL | **审核中** — 可能进入 v0.9.x 或 v0.10 |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | 原生 Rust XMPP（支持 OMEMO） | Channel, security, size:XL | **审核中** — TLS replay 缓存工作正在进行 |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | 原生 XMPP 频道（用户请求） | Enhancement, integration | **已请求** — PR #11847 覆盖此需求 |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | 多操作系统 CI 矩阵（macOS/Windows） | CI, tests, in-progress | **进行中** — 阻碍更广泛采用 |
| [#12397](https://github.com/zeroclaw-labs/zeroclaw/issues/12397) | 区分 Agent 任务结果与定时任务状态 | Cron, observability | **新** — 今日提交 |
| [#12394](https://github.com/zeroclaw-labs/zeroclaw/issues/12394) | 限制 SOP 步骤 Agent 的工具上限 | Agent, tool, SOP | **Open** — 委托修复的后续 |

**路线图信号：** 多模型提供商配置文件和 XMPP 频道凭借其 XL 规模和活跃审核状态，似乎是下一 minor 版本最高优先级的待引入特性。多操作系统 CI 扩展是一个长期请求，鉴于其 in-progress 标签，可能即将落地。

---

## 7. 用户反馈摘要

| 痛点 | 证据 | 严重程度 |
|---|---|---|
| **Agent 中断导致工作丢失** | #8794：中途停止 Agent 工作会擦除工具调用和思考过程；Agent "就像这一步从未发生过" | **高** |
| **生产环境中守护进程追踪记录缺失** | #12391：繁忙的 Windows 守护进程在 Agent 继续工作的情况下出现数小时的覆盖空白 | **高** |
| **Shell 工具错误信息不透明** | #12390：stderr 被吞没；Agent 只能获知"出错了" | **中** |
| **定时任务成功掩盖 Agent 失败** | #12397：Agent 判定 BLOCKED 但 Dashboard 显示 Ok | **中** |
| **配置项形同虚设** | #12396：history_pruning.keep_recent 和 collapse_tool_results 没有调用方 | **中** |
| **多平台 CI 覆盖缺失** | #7461：测试仅在 Ubuntu 上运行；macOS/Windows 用户缺乏 CI 保障 | **中** |

**正面信号：** v0.9.0 的多用户认证是一个重要里程碑。sessions_prompt 和 sessions_message 工具（#12258、#12259）作为 Agent 间通信原语获得了良好反响。依赖维护（rustix 补丁、rust-all 更新）处理得当。

---

## 8. 待处理事项关注列表

需要维护者关注的项目（24 小时内无活动、高影响或陈旧信号）：

| # | 存续时间 | 标题 | 风险 | 所需行动 |
|---|---|---|---|---|
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | 约 5 个月 | 多操作系统 CI 矩阵 | 高 | 审核实现方案；需要 PR |
| [#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) | 约 3 个月 | 原生 XMPP 频道（用户请求） | 高 | PR #11847 正在审核中；确保落地 |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | 约 4 个月 | S1 级 Agent 上下文擦除 | 高 | 需要分诊并分配修复任务 |
| [#12391](https://github.com/zeroclaw-labs/zeroclaw/issues/12391) | 1 天 | 守护进程重启后追踪记录缺失 | 高 | 复现问题；分配给运行时团队 |
| [#12396](https://github.com/zeroclaw-labs/zeroclaw/issues/12396) | 1 天 | 失效的配置项 | 中 | 需要配置模式清理 PR |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 约 3 个月 | 有界委托工作区修复 | 高 | 需要审核/合并（阻塞 v0.9.x 稳定性） |

---

*本摘录基于 ZeroClaw（zeroclaw-labs/zeroclaw）GitHub 数据生成 — 2026-11-12*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*