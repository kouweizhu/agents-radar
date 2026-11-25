# OpenClaw 生态日报 2026-11-25

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-25 05:00 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English technical report about OpenClaw into Simplified Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure exactly
2. Keep all URLs, link targets, code spans, numbers, dates, and technical identifiers as-is
3. Use natural technical Chinese register - not word-for-word literal translation
4. Output ONLY the translation with no preamble or explanation

Let me translate section by section carefully:

Title: "OpenClaw Project Digest — 2026-11-25" → "OpenClaw 项目摘要 — 2026-11-25"

Section 1: Today's Overview
- "Overview" → "概览"
- "maintains high development velocity" → "保持高频开发节奏"
- "updated in the last 24 hours" → "过去24小时内的更新"
- "merged or closed" → "已合并或关闭"
- "point releases" → "补丁版本"
- "indicating active stabilization" → "表明项目正处于积极稳定阶段"
- "Community engagement remains robust" → "社区互动保持活跃"
- "dominate the active issue landscape" → "是当前 issue 讨论的核心话题"

Section 2: Releases
- "Releases" → "版本发布"
- "Commits" → "提交数"
- "PRs" → "PR 数"
- "Contributors" → "贡献者"
- "Notable scope" → "值得关注的范围"
- "Migration Notes" → "迁移说明"
- "breaking changes" → "破坏性变更"
- "beta" → "beta"

Section 3: Project Progress
- "Project Progress" → "项目进展"
- "Merged/Closed PRs" → "已合并/关闭的 PR"


- "Open PRs Advancing" → "进行中的开放 PR"
- "Impact Area" → "影响领域"
- "Security-sensitive" → "涉及安全"
- "Large feature" → "大型功能"

Section 4: Community Hot Topics
- "Community Hot Topics" → "社区热点"
- "Most Active Issues" → "最活跃的 Issue"
- "Severity" → "严重程度"
- "Summary" → "摘要"
- "Root cause" → "根本原因"
- "affects" → "影响"

Section 5: Bugs & Stability
- "Bugs & Stability" → "缺陷与稳定性"
- "Critical / Release Blockers" → "严重/阻断发布的问题"
- "High Priority" → "高优先级"
- "Stability Pattern Analysis" → "稳定性问题模式分析"
- "interrelated" → "相互关联"
- "platform gaps" → "平台缺陷"

Section 6: Feature Requests & Roadmap Signals
- "Feature Requests & Roadmap Signals" → "功能请求与路线图信号"
- "High-Engagement" → "高参与度"
- "Likelihood of Near-Term Inclusion" → "近期纳入可能性"
- "Under consideration" → "评审中"
- "Feature request, long-standing" → "长期存在的功能请求"
- "Needs product decision" → "待产品决策"
- "Low priority" → "低优先级"
- "Off-meta" → "偏离主线"

Section 7: User Feedback Summary
- "User Feedback Summary" → "用户反馈摘要"
- "Pain Points" → "痛点"
- "Evidence" → "佐证"
- "Use Cases Reported" → "报告的使用场景"
- "Satisfaction Signals" → "满意信号"

Section 8: Backlog Watch
- "Backlog Watch" → "积压事项关注"
- "Long-Unanswered Important Issues" → "长期未回复的重要 Issue"
- "Why It Matters" → "重要性说明"
- "PRs Needing Maintainer Attention" → "需要维护者关注的 PR"
- "Blocking" → "阻塞关系"
- "needs proof" → "需要论证"

Footer stays as-is.

Now I'll produce the final translation with proper Chinese formatting and terminology throughout.
</think>


# OpenClaw 项目摘要 — 2026-11-25

---

## 1. 今日概览

OpenClaw 保持高频开发节奏，过去 24 小时内共有 **500 个 issue 和 500 个 PR** 更新，其中 **272 个 PR 已合并或关闭**。两个补丁版本相继发布（v2026.11.8 包含 314 次提交/210 个 PR，v2026.11.9 包含 13 次提交/15 个 PR），表明项目正处于积极稳定阶段。社区互动保持活跃，7+ 个 issue 讨论超过 20 条评论，同时项目通过 6 个 PR 组成的"Participate"协议栈推进多会话协作功能。Windows 可靠性、大会话场景下的 SQLite 性能以及会话状态管理是当前 issue 讨论的核心话题。

---

## 2. 版本发布

### v2026.11.9
- **提交数：** 13 | **PR 数：** 15 | **贡献者：** 14
- 详情见 [release notes](https://docs.openclaw.ai/releases/2026.11.9) 及 changelog。

### v2026.11.8
- **提交数：** 314 | **PR 数：** 210 | **贡献者：** 86
- 值得关注的范围：这是一个重要的稳定版本，修复了 v2026.11.x beta 周期中的多个回归问题。
- 详情见 [release notes](https://docs.openclaw.ai/releases/2026.11.8) 及 changelog。

**迁移说明：** 发布摘要中未报告破坏性变更。从 2026.11.5 beta 升级且遇到 `agents.defaults.heartbeat` 配置问题的用户，请注意相关修复正在进行中（见下方 #200224）。

---

## 3. 项目进展

### 已合并/关闭的 PR（今日）
| PR | 标题 | 影响领域 |
|----|------|---------|
| [#204783](https://github.com/openclaw/openclaw/pull/204783) | 存储会话成员访问级别并添加 Participate 协议 | 会话、协作 |
| [#204458](https://github.com/openclaw/openclaw/pull/204458) | 加载会话内存不足时提供新对话选项 | UX、错误处理 |
| [#204337](https://github.com/openclaw/openclaw/pull/204337) | 保持作曲家错误卡片单行显示 | UI |
| [#204915](https://github.com/openclaw/openclaw/pull/204915) | 发布候选所有者持有的恢复清单 | 状态管理 |
| [#205080](https://github.com/openclaw/openclaw/pull/205080) | 移除冗余的聊天 Markdown 预处理分支 | 测试 |
| [#205083](https://github.com/openclaw/openclaw/pull/205083) | 目录更新时保留云端配置输入 | UI、配置 |

### 进行中的开放 PR
| PR | 标题 | 状态 | 规模 |
|----|------|------|------|
| [#205091](https://github.com/openclaw/openclaw/pull/205091) | 将 HTTP 共享密钥请求认证为所有者主体 | **涉及安全** | M |
| [#129388](https://github.com/openclaw/openclaw/pull/129388) | 上下文压力感知的续接机制 (continue_work) | 大型功能 | XL |
| [#204899](https://github.com/openclaw/openclaw/pull/204899) | 允许受邀用户在你的会话中阅读/建议/发送 | Participate 4/6 | XL |
| [#204956](https://github.com/openclaw/openclaw/pull/204956) | 允许在兼容的数据库变更间回滚 | 状态、恢复 | XL |
| [#205068](https://github.com/openclaw/openclaw/pull/205068) | 重新设计 Talk 设置页面 | UI | XL |
| [#198202](https://github.com/openclaw/openclaw/pull/198202) | 当主模型被排除时仍尊重禁用的回退模型 | 模型 | M |
| [#205011](https://github.com/openclaw/openclaw/pull/205011) | 在会话重新导入前恢复冷会话存档 | Doctor、恢复 | S |

---

## 4. 社区热点

### 最活跃的 Issue（按评论数排序）

**#160959** — Gateway 在捕获大型外部插件时阻塞数分钟 *(87 条评论)*  
🔗 https://github.com/openclaw/openclaw/issues/160959  
- **严重程度：** P0，崩溃循环，v2026.9.6 以来回归
- **摘要：** 插件生成捕获在启动时和运行时重新发布阶段，对大型依赖树的 Gateway 事件循环造成数分钟阻塞。
- **根本原因：** 首次引入于 #144252；影响外部/工作区插件。

**#164294** — Gateway 状态库 WAL 自动检查点永不完成 *(43 条评论)*  
🔗 https://github.com/openclaw/openclaw/issues/164294  
- **严重程度：** P2，stale
- **摘要：** `state/openclaw.sqlite` 上的 WAL 检查点被自启动以来的进程内读取器阻塞；日志帧落后 17,091 条。

**#197083** — 安装后 Doctor WAL 发布验证导致 11.3 更新部分完成 *(39 条评论)*  
🔗 https://github.com/openclaw/openclaw/issues/197083  
- **严重程度：** P0，ux-release-blocker
- **摘要：** 从 11.1 到 11.3 的托管 npm 升级未能通过 Doctor 验证，拒绝回滚，导致外部插件处于不一致状态。

**#170956** — Windows：启动缓慢、关闭不干净、schtasks 权限错误 *(34 条评论)*  
🔗 https://github.com/openclaw/openclaw/issues/170956  
- **严重程度：** P0，崩溃循环
- **摘要：** 三个相互关联的可靠性问题导致 Windows 托管服务安装的重启/更新反复失败。

**#178359** — Doctor --fix --non-interactive 空闲 15+ 分钟无输出 *(32 条评论)*  
🔗 https://github.com/openclaw/openclaw/issues/178359  
- **严重程度：** P1，崩溃（挂起）
- **平台：** macOS，v2026.10.3
- **摘要：** 数据库修复准备阶段无限挂起，未能进入修复阶段。

### 活跃 PR 讨论
- **#205091** — 涉及安全：将 HTTP 共享密钥请求认证为所有者主体的重构（OA2 PR 5b）
- **#181551** — macOS profiler 挂起修复（待维护者查看）
- **#198202** — 模型回退链修复，处理通配符策略排除

---

## 5. 缺陷与稳定性

### P0 — 严重 / 阻断发布
| Issue | 标题 | 回归？ | 修复 PR？ |
|-------|------|--------|----------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 阻塞数分钟（插件捕获） | ✅ 是（2026.9.6） | ❌ 无新修复 PR |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | Doctor WAL 验证导致更新部分完成 | ❌ 未知 | ❌ 无 |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | 内置 @wecom/wecom-openclaw-plugin 无法安装 | ❌ 未知 | ❌ 无 |
| [#160386](https://github.com/openclaw/openclaw/issues/160386) | 大会话下 SQLite I/O 压力 | ✅ 是（2026.9.6） | ❌ 无 |

### P1 — 高优先级
| Issue | 标题 | 修复 PR？ |
|-------|------|----------|
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 本地 Codex 助手补全无法恢复父会话 | ❌ 无 |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | Android Talk 因"无活跃响应所有者"断开 | ❌ 无 |
| [#190307](https://github.com/openclaw/openclaw/issues/190307) | Gateway 重启后代理永久处于"降级"状态 | ❌ 无 |
| [#134993](https://github.com/openclaw/openclaw/issues/134993) | Gateway 占用 CPU（文件系统发现中的忙轮询） | ❌ 无 |
| [#160522](https://github.com/openclaw/openclaw/issues/160522) | prepared-model-catalog worker 超过内存限制 | ❌ 无 |
| [#166641](https://github.com/openclaw/openclaw/issues/166641) | web_fetch 回退发现阻塞 Gateway 主线程 | ❌ 无 |

### 稳定性问题模式分析
- **SQLite WAL 争用**出现在多个 issue 中（#164294、#197083、#160548）— 检查点时机和读取器阻塞可能存在系统性问题
- **Windows 平台缺陷**分散在三个不同 issue 中（#170956、#140010、#200756）— 启动可靠性、睡眠/唤醒重连和更新机制需要加强
- **大会话内存压力**是反复出现的主题（#160386、#150635、#197374）— 可能与内存泄漏和 I/O 压力报告相互关联

---

## 6. 功能请求与路线图信号

### 高参与度功能请求
| Issue | 标题 | 评论数 | 近期纳入可能性 |
|-------|------|--------|----------------|
| [#204775](https://github.com/openclaw/openclaw/issues/204775) | 设计：prepared-release 更新（状态、所有权、计划） | 12 | 🔴 积极开发中 |
| [#138990](https://github.com/openclaw/openclaw/issues/138990) | 前台 WebChat 运行的可强制执行检查点和有界让出 | 12 | 🟡 评审中 |
| [#55792](https://github.com/openclaw/openclaw/issues/55792) | 重启后追赶漏接的入站消息 | 11 | 🟡 长期存在的功能请求 |
| [#150238](https://github.com/openclaw/openclaw/issues/150238) | 为超大会话的技能工坊添加上下文预算/跳过策略 | 13 | 🟡 待产品决策 |
| [#136271](https://github.com/openclaw/openclaw/issues/136271) | MS Teams：动态解析团队 SharePoint 站点 | 13 | 🟡 低优先级 |
| [#166586](https://github.com/openclaw/openclaw/issues/166586) | 消费来自已配置 MCP 服务器的 MCP Events | 10 | 🟢 偏离主线 |

### 路线图信号
- **多会话协作（"Participate"）** 正在通过 6 个堆叠 PR 积极实现（#204783 已合并，#204847/#204858 审核中，#204899/#204914 待处理）
- **Prepared-release 更新系统** 正在进行设计（#204775）
- **兼容数据库变更间的回滚** PR（#204956）进行中 — 实现更平滑的升级路径
- **上下文压力感知的续接**（#129388）代表重要的代理自我管理功能

---

## 7. 用户反馈摘要

### 痛点
| 主题 | 佐证 | 严重程度 |
|------|------|----------|
| **Windows 可靠性差** | #170956、#140010、#200756 — 重启频繁失败，睡眠/唤醒重连延迟 30-60 秒+ | 🔴 高 |
| **大会话性能下降** | #160386、#150635、#197374 — SQLite I/O 压力、召回驱逐、压缩超时 | 🔴 高 |
| **Doctor 挂起/失败** | #178359、#197083、#205011 — 修复工具挂起或导致状态不一致 | 🔴 高 |
| **内存泄漏** | #160548、#160522、#160386 — prepared-model-catalog worker 每 5 分钟增长 1GiB | 🔴 高 |
| **重启后代理降级** | #190307 — 准入超时，修复提示指向完整 doctor --fix | 🟠 中 |
| **会话置顶继承** | #204436 — 请求者的置顶顺序在各处不被遵循 | 🟠 中 |

### 报告的使用场景
- **多代理显式所有权：** 配置 6+ 个无默认代理的用户遭遇 `AgentSelectionRequiredError` 洪泛（#126360）
- **跨提供商回退的 Cron 任务：** 需要为首选模型和回退模型分别授权提供商账户（#192009 — 已关闭，功能已接受）
- **协作会话：** 正在设计中，允许受邀用户在角色限制内阅读/建议/发送（#204899）
- **Android Talk 可靠性：** 跨多版本在需要任务的轮次中语音会话断开（#138272）

### 满意信号
- 活跃的功能开发吸引贡献者（v2026.11.8 有 86 位贡献者）
- UX 改进快速迭代（今日多个贡献者提交 UI PR）
- 文档和维护保持良好（release notes、changelog、设计文档）

---

## 8. 积压事项关注

### 长期未回复的重要 Issue
| Issue | 时长 | 标题 | 重要性说明 |
|-------|------|------|-----------|
| [#55792](https://github.com/openclaw/openclaw/issues/55792) | 约 8 个月 | 重启后追赶漏接的入站消息 | Discord/Telegram 等核心可靠性 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 约 2 个月 | 短期召回保留驱逐条目，深度联想永不提升 | 核心记忆架构 |
| [#160719](https://github.com/openclaw/openclaw/issues/160719) | 约 2 个月 | sessions.delete 保留运行中 session_windows 行，无清理路径 | 孤儿状态，数据卫生 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 约 4 个月 | 死信出站队列条目永久存在 | 投递可靠性 |

### 需要维护者关注的 PR
| PR | 标题 | 状态 | 阻塞关系 |
|----|------|------|----------|
| [#181551](https://github.com/openclaw/openclaw/pull/181551) | 避免 macOS 上自动 profiler 挂起风险 | 👀 待维护者查看 | P2，macOS 稳定性 |
| [#198202](https://github.com/openclaw/openclaw/pull/198202) | 当主模型被排除时仍尊重禁用的回退模型 | 👀 待维护者查看 | 模型选择正确性 |
| [#204847](https://github.com/openclaw/openclaw/pull/204847) | 在准入运行时携带并强制执行参与者限制 | 需要审核 | Participate 功能 |
| [#204899](https://github.com/openclaw/openclaw/pull/204899) | 允许受邀用户在你的会话中阅读/建议/发送 | 需要审核 | Participate 功能 |
| [#129388](https://github.com/openclaw/openclaw/pull/129388) | 上下文压力感知的续接 | 📣 需要论证 | 重要代理功能 |

### 无修复路径的 Stale Issue
- 多个带有 `clawsweeper:no-new-fix-pr` 和 `clawsweeper:needs-maintainer-review` 标签的 P2 issue — 维护者审核积压明显
- 多个标记为 `stale` 的 issue 尽管讨论活跃（#164294、#112313、#127195 等）

---

*摘要生成于 2026-11-25。数据反映截至摘要生成时的 24 小时窗口内的活动。实时状态请访问 [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)。*

---

## 横向生态对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese, maintaining the exact markdown structure, tables, formatting, and technical content while using natural Chinese technical register. Let me go through the document section by section.

Key things to remember:
- Output ONLY the translation, no preamble or explanation
- Preserve all markdown structure exactly
- Keep all technical identifiers, URLs, issue numbers, project names as-is
- Use natural technical Chinese register
- Bold text: ** → ** (same in Chinese)
- Tables need proper Chinese formatting
- Emoji should be kept

Let me translate section by section:

Title: "Personal AI Agent & Assistant Open-Source Ecosystem Report"
→ "个人 AI 助手与智能体开源生态报告"

Date: "As of 2026-11-25"
→ "截至 2026-11-25"

Let me work through this carefully.
</think>


# 个人 AI 助手与智能体开源生态报告
**截至 2026-11-25**

---

## 1. 生态概览

个人 AI 助手与智能体开源生态正处于高速增长阶段，所有受监控项目的开发活动均保持活跃，尽管社区规模参差不齐。整个领域已分化为两个主要层级：**大规模多提供商平台**（OpenClaw、Hermes Agent）每日处理数百个活跃 issue/PR，而**专精型轻量运行时**（QwenPaw、ZeroClaw）则维持着更小但产出效率极高的贡献者规模，并在架构上有意收敛范围。横切各项目的主题十分突出：SQLite 在高负载下的可靠性、多会话协作原语、安全加固（凭证与 OIDC），以及平台特定稳定性（尤其是 Windows）。值得注意的是，**所有项目均无停摆迹象** — IronClaw 的零活动报告只是一个有效数据点，反映了项目处于休眠期或聚焦窗口较窄，而非被废弃。整体生态共同释放出一个成熟化拐点信号：跨渠道功能对标的时代正在让位于可靠性加固、内存架构重构和联邦式多用户协作。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|--------|----------|-------------|----------|---------|----------|
| **Issue 更新数（24h）** | 500 | 50 | 0 | 20 | 9 |
| **Issue 开放/活跃数** | 429 | 38 | — | 16 | — |
| **PR 更新数（24h）** | 500 | 50 | 0 | 42 | 50 |
| **PR 开放数** | 228 | 33 | — | 30 | 42 |
| **PR 合并/关闭数（24h）** | 272 | 17 | — | 12 | 8 |
| **新版本发布（24h）** | 2 个（v2026.11.8、v2026.11.9） | 1 个稳定版（v0.23.4）+ 1 个 canary 版 | 0 | 0 | 0 |
| **近期发布规模** | 314 commits，86 位贡献者（v2026.11.8） | ~229 个 PR 合并（v0.23.4） | — | — | — |
| **社区健康信号** | 🟢 高速迭代，活跃稳定化中 | 🟢 高速迭代，补丁节奏稳健 | ⚪ 无信号 | 🟡 中等，beta 轨道聚焦 | 🟢 PR 占比高，架构驱动型 |
| **发布节奏** | 每周多个小版本 | 双周稳定版补丁 | 未知 | Beta 预发布通道 | 里程碑式（v0.9.x） |

---

## 3. OpenClaw 的定位

### 相对同行的优势

OpenClaw 在**原始开发体量**上领先整个生态 — 其每日 500-issue/500-PR 窗口是任何同类项目的 10 倍以上，反映出成熟的 CI/CD 管道、庞大的贡献者池（仅 v2026.11.8 就有 86 位贡献者）以及宽泛的功能覆盖面。它拥有最完整的**多渠道集成**足迹（Discord、Telegram、Teams、WeCom、Matrix、SimpleX、email），是跨平台智能体部署领域事实上的参考实现。其多会话协作架构（"Participate" 协议，6 个 PR 堆叠推进）是生态中同类功能中最为先进的，针对的是其他同行尚未触及的功能领域。

### 技术路径差异

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|-------------|---------|----------|
| **架构** | 全栈式：Gateway + runtime + Doctor 修复套件 | ACP 原生 + 插件中心 | 插件中心化 + Creator 编排层 | 轻量 Rust runtime + ACP 适配器 |
| **存储** | SQLite + WAL，Doctor 修复管道 | SQLite + 托管升级路径 | SQLite（bundled） | SQLite（bundled `rusqlite`） |
| **部署模式** | 桌面应用、CLI、托管服务 | CLI、Docker、Microsoft Store、云端 | 桌面端（Electron）、runtime runner | 自托管守护进程、CLI |
| **协作模型** | 内置多会话 Participate 协议（读/建议/发送，参与者限制，访问层级，主持人通知） | Bot 间 ACP 消息传递，profile 共享，跨平台会话 | Creator 插件用于编排 | ACP 渠道路由，OIDC 身份认证 |
| **平台侧重** | Windows（可靠性问题）、macOS、Linux | macOS（公证）、Windows ARM64、Linux | Windows 路径处理、Linux 打包 | 跨平台，Rust 原生 |
| **更新机制** | 托管 npm，Doctor 验证 | 稳定版/canary 版双轨 | Beta 预发布通道 | 里程碑发布 |

OpenClaw 独有的 **Doctor 修复套件** 是一个标志性差异点 — 没有任何其他项目实现了自动化状态恢复（带 WAL 检查点修复、会话归档恢复、冷启动诊断）。这一设计在增加弹性的同时也带来了复杂性（Doctor 本身也是 bug 来源：#178359 挂起，#197083 状态不完整）。

### 社区规模对比

- **OpenClaw**：每个 release 86+ 位贡献者，数百个活跃 issue，庞大的 Discord/Telegram 用户基础 → **第一梯队生态**
- **Hermes Agent**：活跃贡献者基础，单周期 ~229 个 PR → **第一梯队 1b**
- **ZeroClaw**：小团队（NiuBlibing 主导架构），聚焦型贡献者基础 → **第二梯队，高贡献效率**
- **QwenPaw**：中等规模贡献者基础，AgentScope 机构背书 → **第二梯队，平台背书型**
- **IronClaw**：数据不足（零活动）→ **梯队未知**

---

## 4. 共性技术焦点领域

### 4.1 高负载下的 SQLite 可靠性

所有使用 SQLite 的项目都遇到了随着会话状态增长而出现的争用和检查点问题：

| 项目 | Issue | 表现形式 |
|---------|-------|------------|
| **OpenClaw** | #164294、#197083、#160386 | WAL 自动检查点停滞；大会话 I/O 压力；Doctor WAL 验证失败 |
| **QwenPaw** | #8841（llama-server 崩溃） | 进程生命周期与 SQLite 状态机绑定 |
| **ZeroClaw** | #12697（runtime 分拆） | 动机是单体编译时间，但反映出架构压力 |

**含义：** 嵌入式 SQLite 模型在中小规模工作负载下运行良好，但随着智能体管理长上下文会话时遭遇上限效应。这是一个**跨生态工程挑战** — 一个项目中的解决方案（OpenClaw 的 Doctor、QwenPaw 的归档设计 #8882）可以为其余项目提供参考。**规划生产部署的开发者应提前设计显式的状态管理和归档策略，而非依赖无限制的 SQLite 增长。**

### 4.2 多提供商模型路由

| 项目 | 挑战 | 具体 Issue |
|---------|-----------|------------|
| **OpenClaw** | 回退链排除 | #198202 — 主模型被排除时禁用的回退未生效 |
| **Hermes Agent** | 多密钥支持 | #145597 — 需要每个提供商的 API 密钥轮换/故障转移 |
| **Hermes Agent** | 价格透明度 | #159830 — 模型选择器中的成本可见性（今日已合并） |
| **QwenPaw** | 上下文窗口误报 | #8890 — OpenAI 兼容的发现机制忽略了 `max_input_tokens` |
| **QwenPaw** | 提供商条目缺失 | #8891 — glm-5.3/5.4 未在内置提供商上下文表中 |

**含义：** 多提供商部署正在成为常态，模型选择逻辑在所有项目中均处于积极开发状态。"提供商注册表"概念同时出现在 OpenClaw（V5 注册表，#12450）和 ZeroClaw（#12454–#12457）的架构工作中，表明设计思路在趋同。

### 4.3 多会话协作

| 项目 | 方案 | 状态 |
|---------|----------|--------|
| **OpenClaw** | Participate 协议：读/建议/发送，参与者限制，访问层级，主持人通知 | 6 个 PR 中 4 个已合并或审核中 |
| **Hermes Agent** | Bot 间 ACP 消息传递，profile 共享，跨平台会话 | 通过 ACP 原语部分实现 |
| **ZeroClaw** | OIDC 规范主体，设备会话刷新授权 | v0.9.1 里程碑（#8289） |

**含义：** 多用户智能体协作会话是下一个主要功能前沿。OpenClaw 的 6 部分协议设计最为全面，可能成为生态的参考架构。**评估智能体平台的团队应优先关注多会话协作原语，因为这一能力正在从"锦上添花"快速转变为差异化功能。**

### 4.4 平台特定稳定性

| 平台 | 影响项目 | Issues |
|----------|-------------------|----------|
| **Windows** | OpenClaw、QwenPaw、Hermes Agent | 启动可靠性（#170956）、路径处理（#8897）、孤儿进程（#8830）、看门狗退出（#140012） |
| **macOS** | OpenClaw、Hermes Agent | Profiler 挂起（#181551）、公证要求 |
| **Linux** | QwenPaw | 打包缺口（#8444） |

**含义：** 跨平台一致性仍难以实现。Windows 问题最为严重，多个项目独立出现类似问题，说明系统性平台测试存在缺口。**面向 Windows 部署的组织应预留额外的验证时间，并考虑向项目维护者申请专用的 Windows CI 资源。**

### 4.5 安全加固

| 项目 | 焦点 | 证据 |
|---------|-------|----------|
| **ZeroClaw** | OIDC 规范主体，设备会话刷新授权 | v0.9.1 里程碑（#8289），#12707 |
| **OpenClaw** | HTTP 共享密钥作为所有者主体 | #205091（安全敏感） |
| **QwenPaw** | Skill-scan 模式安全，编码模式出口策略 | #8880（CRITICAL 问题在 warn 模式下继续执行），#8878 |
| **Hermes Agent** | 插件凭证路由，MCP streamable_http 错误屏蔽 | #8875，#137924 |

**含义：** 随着智能体获得对外部服务（邮件、日历、文件、API）的访问权限，安全态势优先级正在提升。ZeroClaw 在正式 OIDC 集成方面领先；QwenPaw 的安全债最紧迫（扫描器以不安全模式失败 #8880）。**企业在评估每个平台时应明确审计其安全态势；整个生态正从"功能优先"向"安全优先"思维过渡。**

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|-------------|---------|----------|
| **主要目标用户** | 高级用户、团队；自托管 + 托管服务 | 开发者、企业；CLI 优先 + 云端 | 使用 AgentScope 生态的开发者；桌面 + runtime | 注重隐私的自托管者；Rust 原生部署 |
| **核心价值主张** | 最完整的平台；全渠道、全模型 | ACP 原生互操作性；多 bot 协作 | AgentScope 集成；Creator 编排层 | 极简、安全、Rust 高性能 |
| **插件生态** | 内置插件（WeCom、Teams、Discord、Telegram）+ 外部 | 插件中心，社区提供商（Mistral Vibe ACP） | Creator 插件用于技能编排 | Host 介导的智能体调度（#12440） |
| **架构重量** | 重型（Doctor 修复、WAL、会话管理） | 中型（ACP 原语、通知中心） | 中型（Electron 外壳、插件运行时） | 轻型（Rust 守护进程、ACP 适配器） |
| **内存架构** | 带驱逐的 Recall 系统、归档 | 基于 profile 的会话隔离 | Memory 工具批量操作、归档设计 | Turso SQLite 作为备选方案（#12709） |
| **独特差异点** | Doctor 修复套件；Participate 多会话协议 | ACP 消息总线；bot 间互操作；价格透明度 | Creator 编排层；AgentScope 集成 | Rust 性能；OIDC 身份；轻量守护进程模型 |
| **最大短板** | Windows 可靠性；Doctor 复杂性；SQLite 压力 | 通知截断集群；skills 索引陈旧 | 安全扫描器失效；模型发现缺口 | 社区规模小；浏览器工具差距 |

---

## 6. 社区势头与成熟度

### 活跃度层级

**第一梯队 — 大规模活跃开发**
- **OpenClaw**：每日 500/500 issue+PR 更新。成熟的发布节奏（每周多个小版本）。大量贡献者。社区在处理 P0 回归问题的同时持续推进功能。*成熟度信号：稳定化阶段，功能活跃的同时进行可靠性工作。*
- **Hermes Agent**：每日 50/50 更新，干净的补丁节奏。单周期 ~229 个 PR 说明贡献者参与度持续稳定。*成熟度信号：功能整合，v0.24.0 发布说明整理前的 bug 修复打磨。*

**第二梯队 — 聚焦迭代开发**
- **QwenPaw**：每日 20/42 更新。AgentScope 机构背书。Beta 轨道活跃（v2.3.1-beta.1）。安全工作的进度落后于功能开发。*成熟度信号：Beta 稳定化，安全加固需求迫切。*
- **ZeroClaw**：每日 9/50 更新（9 个 issue，50 个 PR — PR 密集型，架构驱动）。贡献者基础小但稳定，推动重大架构变更（V5 注册表、runtime 分拆）。*成熟度信号：架构重构进行中，尚未稳定。*

**第三梯队 — 信号不足**
- **IronClaw**：报告窗口内零活动。无法评估。

### 快速迭代项目
- **OpenClaw** — Participate 协议（6 个堆叠 PR）、多会话协作、SQLite 稳定性
- **ZeroClaw** — V5 提供商注册表（5 个 PR 链式推进）、runtime 分拆、OIDC 完善
- **QwenPaw** — 媒体处理大重构（#8785，XXL）、Creator 插件 2.0.7、runtime base-path 部署

### 稳定化项目
- **Hermes Agent** — v0.23.4 补丁版本含 229 个 PR，表明 v0.24.0 发布前进入功能冻结期

---

## 7. 趋势信号

### 给 AI 智能体开发者与技术决策者的建议

**1. SQLite 在智能体规模下正触及上限**
所有使用嵌入式 SQLite 的项目都报告了 WAL 争用、检查点停滞和长会话 I/O 压力问题。这不是 bug — 而是规模化观察到的现象。可以预期生态将向以下方向之一迁移：(a) 读写分离副本，(b) 定期压缩的仅追加事件日志，(c) 托管云 SQLite（Turso、LiteFS），或 (d) PostgreSQL 兼容后端。OpenClaw 的 Doctor 修复套件和 QwenPaw 的归档设计工作（#8882）是早期探索。**规划生产部署的开发者应提前设计显式的状态管理和归档策略，而非依赖无限制的 SQLite 增长。**

**2. 多用户多会话协作是下一个主要功能前沿**
OpenClaw 的 6 部分 Participate 协议是最先进的实现，但底层需求 — 能代表用户协作的智能体、受邀者可在角色限制内读/建议/行动 — 是普遍存在的。Hermes Agent 的 ACP 原语和 ZeroClaw 的 OIDC 身份工作是互补的。**评估智能体平台的团队应优先关注多会话协作原语，因为这一能力正在从"锦上添花"快速转变为差异化功能。**

**3. 安全态势正从隐式向显式演进**
四个活跃项目中有三个在进行安全相关工作（OIDC、出口策略、技能扫描加固、凭证路由）。QwenPaw 的安全扫描器失败模式（#8880 — CRITICAL 问题在 warn 模式下继续执行）是一个警示，表明安全功能增加速度快于安全加固速度。**企业应明确审计每个平台的安全态势；整个生态正从"功能优先"向"安全优先"思维过渡。**

**4. Windows 是所有项目的最薄弱平台**
Windows 可靠性问题出现在 OpenClaw（3+ 个独立 bug）、QwenPaw（路径处理、孤儿进程）和 Hermes Agent（看门狗退出、进程管理）中。这不是巧合，而是结构性缺口 — Windows 的权限模型、进程生命周期和路径约定给原生 Linux/macOS 代码库带来了摩擦，而这些问题往往得不到充分处理。**面向 Windows 部署的组织应预留额外的验证时间，并考虑向项目维护者申请专用的 Windows CI 资源。**

**5. 插件架构正收敛向 Host 介导调度模式**
ZeroClaw（#12440）和 OpenClaw（插件系统）都在向同一模式收敛：Host 进程介导插件生命周期、凭证注入和智能体唤醒事件，而非让插件管理自己的子进程。这一模式提升了安全性（凭证作用域）和可靠性（孤儿进程管理）。**插件作者应遵循 Host 介导模式以确保与新兴架构的兼容性。**

**6. 模型提供商抽象正在积极重构**
OpenClaw（V5 注册表）和 ZeroClaw（V5 注册表，#12454–#12457）同时在重建各自的提供商注册表。触发因素相同：当前抽象不能干净地支持多密钥轮换、成本透明度、上下文窗口发现或回退链语义。**构建提供商集成的开发者应为 OpenClaw 和 ZeroClaw 在接下来 1–2 个发布周期内的 API 变更做好准备。**

**7. ACP（Agent Communication Protocol）正在成为互操作性层**
Hermes Agent 的 ACP 原生设计、OpenClaw 的 ACP 集成和 ZeroClaw 的 ACP 适配器都指向一个事实上的标准正在形成，用于智能体间消息传递、跨平台会话共享和 bot 间通信。**构建者在选择平台时应评估 ACP 兼容性；它为未来多智能体部署提供了专有协议无法匹配的灵活性。**

---

*本跨项目报告由 OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw 的各项目摘要综合生成。IronClaw 报告零活动。数据反映截至 2026-11-25 的 24 小时窗口。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the text content to Simplified Chinese
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, usernames, version tags, etc. as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section.
</think>


# Hermes Agent 项目日报

**日期：** 2026年11月25日
**仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日概览

2026年11月25日，Hermes Agent 项目保持高活跃度，过去24小时内更新了50个 Issue 和50个 PR——约1:1的健康比例，表明开发与问题分拣工作并行推进。版本发布节奏强劲，v0.23.4 作为稳定补丁版发布，汇集了自 v0.23.3 以来的约229个合并 PR。社区参与活跃，今日合并/关闭了17个 PR，多个高优先级 Bug 正在积极修复中。值得关注的工作重点包括：通知截断缺陷、Windows 平台稳定性问题，以及跨平台会话管理。项目整体状态健康，维护者对 P1/P2 问题能在活跃后24小时内完成分拣。

---

## 2. 版本发布

### v0.23.4 — 稳定补丁版
**发布日期：** 2026年11月23日
**Tag：** [v0.23.4](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.4)

> 本次补丁版将自 v0.23.3 以来的约229个 PR 合并入稳定版构建，适用于 CLI、安装包、Microsoft Store、Docker 和 Hermes Cloud。完整的精选更新说明随 v0.24.0 正式发布。

| 组件 | 状态 |
|-----------|--------|
| CLI 及安装包 | ✅ 已更新 |
| Microsoft Store | ✅ 已更新 |
| Docker | ✅ 已更新 |
| Hermes Cloud | ✅ 已更新 |

**升级提示：** 无破坏性变更。使用 v0.23.3+canary.20261124 的用户可安全升级。

---

### Canary 构建版
**发布日期：** 2026年11月24日
**Tag：** [canary.20261124T064706Z-v0.23.3](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261124T064706Z-v0.23.3)

包含 v0.23.3 基线上的最新主线提交，面向尝鲜用户。

---

## 3. 项目进展

### 已合并/关闭的 PR（17个）

| PR | 作者 | 概要 |
|----|--------|---------|
| [#105519](https://github.com/NousResearch/hermes-agent/pull/105519) | NaMinhyeok | **修复(plugins):** 在驱逐插件子模块前先对 `sys.modules` 的 key 做快照 — 修复偶发的插件加载失败 |
| [#120830](https://github.com/NousResearch/hermes-agent/pull/120830) | bit-incarnas | **修复(matrix):** 仅对来自实时 `rooms.invite` 同步段的邀请进行处理 — 防止历史邀请被重复处理 |
| [#105524](https://github.com/NousResearch/hermes-agent/pull/105524) | bit-incarnas | **修复(matrix):** 发送纯文本消息时始终写入 `m.mentions` 块 — 符合 Matrix v1.7 的 MSC3952 规范 |
| [#149830](https://github.com/NousResearch/hermes-agent/pull/149830) | Dayspace07 | **修复(cli):** 导出配置时写入符号链接成员，导入时遭到拒绝 — 解决重复的 #62194 |
| [#159830](https://github.com/NousResearch/hermes-agent/pull/159830) | Hermes-Orchastrator | **特性:** 在选择器中显示每个模型的价格，标记免费模型，通过 Cheaper Inference API 实现免费优先排序 |

**今日重要进展：**
- **插件加载器稳定性** — 修复竞态条件，避免 "tool does not exist" 误报
- **Matrix 平台合规性** — 推送规则兼容 Matrix v1.7+
- **配置迁移可靠性** — 符号链接导出/导入往返现已成为可靠功能
- **模型定价** — CLI、Telegram 和 Web 仪表板的选择器中已添加成本可见性

---

## 4. 社区热点话题

### 按互动量排序的热门 Issue

| # | 话题 | 评论数 | 👍 | 严重程度 | 链接 |
|---|-------|----------|----|----------|------|
| 1 | Skills 索引过期/降级（28.1小时前） | 24 | 0 | P2 | [#122609](https://github.com/NousResearch/hermes-agent/issues/122609) |
| 2 | Provider 插件显示 "Unknown provider"，需重启恢复 | 10 | 1 | P2 | [#156899](https://github.com/NousResearch/hermes-agent/issues/156899) |
| 3 | 完成通知截断为0字符（多个相关 Issue） | 10+ | 1 | P2 | [#150617](https://github.com/NousResearch/hermes-agent/issues/150617), [#131786](https://github.com/NousResearch/hermes-agent/issues/131786) |
| 4 | 跨平台统一会话功能（Canonical） | 9 | 1 | P3 | [#62780](https://github.com/NousResearch/hermes-agent/issues/62780) |
| 5 | Windows 网关看门狗 exit 75 — 静默全配置宕机 | 6 | 0 | **P1** | [#140012](https://github.com/NousResearch/hermes-agent/issues/140012) |

### 深层需求分析

**Skills 索引可靠性（#122609）：**
自动化新鲜度探测失败，表明基础设施依赖于定时工作流。社区需要确信 Skills Hub 仍然是技能发现的可信来源。超过28.1小时的过期时间已超过26小时阈值，说明 cron 调度或工作流可靠性存在问题。

**通知截断问题簇（#150617, #131786, #158043, #152075, #151053, #156158）：**
至少6个相关 Issue、共24–28条评论记录了一个系统性缺陷：`GatewayNotificationHub._build_process_completion_event` 在单行输出超过2000字符时产生"仅显示最后0字符"的结果。根本原因：2000字符截断逻辑在输出以换行符结尾时会丢弃整个尾部。这影响了 Bot Mode DM 回复、`message_agent` 跨 Bot 通信和后台进程完成通知。

**跨平台统一会话（#62780）：**
社区需求强烈（9条评论），希望在 CLI、Desktop、TUI、WebUI、移动端、Telegram、Discord 和 IDE 上的 ACP 中实现统一的会话状态。这是一项需要大量架构工作的战略路线图项目。

---

## 5. Bug 与稳定性

### P1（严重）

| Issue | 概要 | 是否有修复 PR？ |
|-------|---------|---------|
| [#140012](https://github.com/NousResearch/hermes-agent/issues/140012) | **Windows：** Telegram 响应超时时网关看门狗 exit 75，导致所有配置静默宕机 — supervisor 未重启 | 无 |

### P2（高优先级）

| Issue | 概要 | 是否有修复 PR？ |
|-------|---------|---------|
| [#156899](https://github.com/NousResearch/hermes-agent/issues/156899) | 并发配置下插件查找导致 provider 显示 "Unknown"，需重启恢复 | 无 |
| [#150617](https://github.com/NousResearch/hermes-agent/issues/150617) | 完成通知忽略 `completion_output_chars` 设置，截断为0字符 | 无 |
| [#131786](https://github.com/NousResearch/hermes-agent/issues/131786) | 网关完成通知尾部在长单行 JSON 时丢失全部输出 | 无 |
| [#139436](https://github.com/NousResearch/hermes-agent/issues/139436) | 内存工具批量操作静默丢弃嵌套字段 | 无 |
| [#150690](https://github.com/NousResearch/hermes-agent/issues/150690) | **回归缺陷 v0.22.6：** 非创建者的配置中群聊从侧边栏消失 | 无 |
| [#159886](https://github.com/NousResearch/hermes-agent/issues/159886) | 全量索引路由保存重写约35000行 — 8.5秒写锁，Desktop 超时 | 无 |
| [#159919](https://github.com/NousResearch/hermes-agent/issues/159919) | 浏览器后端泄漏数百个渲染进程（12 GB 内存，占用96%） | 无 |
| [#159709](https://github.com/NousResearch/hermes-agent/issues/159709) | Windows 上 `write_file` 对已修改文件永久阻塞 | 无 |

### 已合并的重要修复

- [#149830](https://github.com/NousResearch/hermes-agent/pull/149830) — 修复了配置导出时符号链接处理问题
- [#105519](https://github.com/NousResearch/hermes-agent/pull/105519) — 解决了插件加载器竞态条件

**稳定性评估：** 通知截断缺陷簇是当前影响最大的活跃缺陷，影响多 Agent 工作流和 Bot Mode 可靠性。Windows 看门狗 exit 75 问题虽然为 P1，但看起来仅限于 Windows+Telegram 的边界情况。浏览器进程泄漏对自动化密集型用户影响严重。

---

## 6. 特性请求与路线图信号

### 活跃中的特性 PR

| PR | 概要 | 影响程度 | 链接 |
|----|---------|--------|------|
| [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) | **Desktop 重设计：** 重新设计的 Agent 工作区，含经典恢复功能 | 高 | 集成分支栈 |
| [#158289](https://github.com/NousResearch/hermes-agent/pull/158289) | **自主调度：** Hermes 发现未来需求并创建任务，通过用户确认卡片确认 | 中 | 行程/习惯/回复调度 |
| [#159906](https://github.com/NousResearch/hermes-agent/pull/159906) | **自动技能上限：** `curator.max_agent_created: N` 限制自动编写的技能数量 | 中 | 防止提示词膨胀 |
| [#159918](https://github.com/NousResearch/hermes-agent/pull/159918) | **Mistral Vibe ACP 插件** | 低 | 新增社区 Provider |
| [#145597](https://github.com/NousResearch/hermes-agent/issues/145597) | **多 Key 支持：** 每个 Provider 支持 API Key 轮换/故障转移 | 高 | 特性请求（1条评论） |
| [#62780](https://github.com/NousResearch/hermes-agent/issues/62780) | **跨平台统一会话（Canonical）** | 高 | 战略路线图项目 |

### 预计在下一版本（v0.24.0）中发布的内容

基于 PR 成熟度和社区需求：
- **模型定价展示**（已在 [#159830](https://github.com/NousResearch/hermes-agent/pull/159830) 合并）
- **插件加载器竞态修复**（已在 [#105519](https://github.com/NousResearch/hermes-agent/pull/105519) 合并）
- **`curator.max_agent_created` 自动技能上限** 很可能进入版本
- **Matrix MSC3952 合规性** 改进
- 若在 v0.24.0 说明中已处理，可能包含通知截断修复

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 严重程度 |
|-------|----------|----------|
| **通知空值** | 6+ 个 Issue，用户反映 Bot Mode 和跨 Agent 消息中出现"仅显示最后0字符" | 高 |
| **配置迁移脆弱** | 符号链接、自定义 Provider 和固定 cron 任务在导出/导入周期中失败 | 中 |
| **浏览器自动化资源耗尽** | 经过一天的爬取后泄漏12 GB 内存，96% 占用率来自渲染进程泄漏 | 高 |
| **Windows 稳定性** | 看门狗 exit 75，已修改文件上的 `write_file` 阻塞 | 中-高 |
| **会话状态损坏** | Desktop 侧边栏群聊可见性回归缺陷，旧版 BLOB 提示词解码失败 | 中 |

### 正面信号

| 正面反馈 | 证据 |
|----------|----------|
| 积极维护 | 一个发布周期内合并229个 PR，今日合并17个 |
| 跨平台扩展 | macOS 公证/签名改进，Windows ARM64 测试修复 |
| 成本透明度 | 新增模型定价功能受到好评，用于推理优化 |

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules provided:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, code, etc. verbatim
- Keep project names, repository slugs, usernames, etc. in original form
- Use natural technical Chinese register

Let me translate this carefully, section by section.

---

# QwenPaw Project Digest — 2026-11-25

# QwenPaw 项目摘要 — 2026-11-25

## 1. Today's Overview

## 1. 今日概览

QwenPaw maintains high velocity with 20 issues and 42 PRs updated in the last 24 hours. Four issues were resolved, including critical bugs affecting the Creator module and CLI, while 12 PRs were merged. The project is in a stabilization phase ahead of v2.3.1-beta.1, with active work on memory architecture, sandbox security, and platform-specific fixes (Windows process management, Linux packaging). Community engagement is strong, with security and design discussions gaining traction alongside continued feature development.

QwenPaw 保持着高活跃度，过去 24 小时内有 20 个 Issue 和 42 个 PR 产生更新。其中 4 个 Issue 已解决，包括影响 Creator 模块和 CLI 的关键 Bug，同时有 12 个 PR 被合并。项目目前处于 v2.3.1-beta.1 发布前的稳定阶段，内存架构、沙盒安全以及平台特定修复（Windows 进程管理、Linux 打包）工作正在积极推进。社区参与度高涨，安全和设计讨论与功能开发并行推进。

## 2. Releases

## 2. 版本发布

**No new releases today.**

**今日无新版本发布。**

The project is currently tracking v2.3.1-beta.1 (Beta) via [Issue #8861](https://github.com/agentscope-ai/QwenPaw/issues/8861), with installation verification ongoing. The most recent stable release remains v2.3.0.post1, while Creator plugin v2.0.7 was merged today ([PR #8886](https://github.com/agentscope-ai/QwenPaw/pull/8886)) with review recovery and media fixes.

项目目前正在通过 [Issue #8861](https://github.com/agentscope-ai/QwenPaw/issues/8861) 追踪 v2.3.1-beta.1（Beta）版本，安装验证工作正在进行中。最近的稳定版本仍为 v2.3.0.post1，而 Creator 插件 v2.0.7 已于今日合并（[PR #8886](https://github.com/agentscope-ai/QwenPaw/pull/8886)），包含审核恢复和媒体修复功能。

## 3. Project Progress

## 3. 项目进展

### Merged/Closed PRs (12 total)

### 已合并/已关闭的 PR（12 个）

| PR | Author | Change | Impact |
|----|--------|--------|--------|
| [#8897](https://github.com/agentscope-ai/QwenPaw/pull/8897) | qbc2016 | fix(plugins): handle Windows path prefixes in storage migration | Windows 存储兼容性 |
| [#8896](https://github.com/agentscope-ai/QwenPaw/pull/8896) | zhaozhuang521 | fix(e2e): update skill pool auto-sync menu tests | 测试稳定性 |
| [#8886](https://github.com/agentscope-ai/QwenPaw/pull/8886) | xuanrui-L | feat(creator): release 2.0.7 with review recovery and media fixes | Creator 插件稳定性 |

### Active Development (Key PRs Under Review)

### 活跃开发中（重点 PR 审核中）

- **[#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)** `fix(plugins): keep llama-server from outliving a crashed backend` — Addresses orphaned Windows llama-server.exe processes (size/L, under review)
- **[#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)** `fix(plugins): 防止 llama-server 在后端崩溃后继续运行` — 解决 Windows 孤儿 llama-server.exe 进程问题（size/L，审核中）
- **[#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785)** `fix(media): enforce the inline budget, rescale after refusal, report omissions` — Comprehensive media handling fix (size/XXL, under review)
- **[#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785)** `fix(media): 强制执行内联预算，拒绝后重新调整，报告遗漏内容` — 全面媒体处理修复（size/XXL，审核中）
- **[#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)** `feat(console): support runtime base-path deployment` — Enables reverse-proxy prefix support (size/XXL, under review)
- **[#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)** `feat(console): 支持运行时 base-path 部署` — 启用反向代理前缀支持（size/XXL，审核中）
- **[#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586)** `refactor(runtime): unify session configuration for ACP and native execution` — Architecture unification (size/XXXL)
- **[#8586](https://github.com/agentscope-ai/QwenPaw/pull/8586)** `refactor(runtime): 统一 ACP 和原生执行的会话配置` — 架构统一（size/XXXL）
- **[#8476](https://github.com/agentscope-ai/QwenPaw/pull/8476)** `feat(jobs): add thinking_level to JobRuntimeSpec` — Per-job reasoning control for cron jobs (size/L)
- **[#8476](https://github.com/agentscope-ai/QwenPaw/pull/8476)** `feat(jobs): 向 JobRuntimeSpec 添加 thinking_level` — 定时任务的单任务推理控制（size/L）

## 4. Community Hot Topics

## 4. 社区热点

### Most Active Discussions

### 最活跃讨论

1. **Model Discovery Context Windows** — [Issue #8890](https://github.com/agentscope-ai/QwenPaw/issues/8890) & [Issue #8891](https://github.com/agentscope-ai/QwenPaw/issues/8891)
   - Combined 4 comments; both opened 2026-11-24
   - 合计 4 条评论；均于 2026-11-24 开启
   - **Root Issue**: OpenAI-compatible discovery ignores `max_input_tokens`, causing wrong context windows. Built-in providers also lack entries for glm-5.3/5.4.
   - **核心问题**: OpenAI 兼容接口的模型发现忽略了 `max_input_tokens`，导致上下文窗口配置错误。内置 Provider 也缺少 glm-5.3/5.4 的条目。
   - **Underlying Need**: Accurate model capability detection without manual configuration
   - **潜在需求**: 无需手动配置即可准确检测模型能力

2. **Creator Review Recovery** — [Issue #8592](https://github.com/agentscope-ai/QwenPaw/issues/8592) (now closed)
   - Bundled three backend defects: undecidable review rounds, 502 errors, and ffmpeg path issues
   - 整合了三个后端缺陷：审核轮次无法判定、502 错误和 ffmpeg 路径问题
   - **PR #8886** shipped the fix as part of Creator 2.0.7
   - **PR #8886** 作为 Creator 2.0.7 的一部分发布了修复
   - **Underlying Need**: Reliable content generation workflow with clear error states
   - **潜在需求**: 具有清晰错误状态的内容生成工作流

3. **Human-in-the-Loop Tool** — [Issue #6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)
   - Open since July 2026, 4 comments, 👍1
   - 开放于 2026 年 7 月，4 条评论，👍1
   - **Request**: New `ask_user_question` tool for structured multi-choice queries with custom input fallback
   - **请求**: 新增 `ask_user_question` 工具，支持结构化多选查询并提供自定义输入回退
   - **Underlying Need**: Safer agent decision-making on ambiguous/high-risk requests
   - **潜在需求**: 在模糊/高风险请求中实现更安全的 Agent 决策

4. **AI Prompt Polishing** — [Issue #8892](https://github.com/agentscope-ai/QwenPaw/issues/8892)
   - New feature request for input refinement button in chat area
   - 新功能请求：在聊天区域增加输入优化按钮
   - **Underlying Need**: Lower barrier to high-quality prompts, especially for less technical users
   - **潜在需求**: 降低高质量提示词的门槛，尤其是对非技术用户

5. **Plugin Theme Extension** — [PR #8787](https://github.com/agentscope-ai/QwenPaw/pull/8787) (under review)
   - Exposes semantic color roles to plugin themes beyond the current 6 basic roles
   - 将语义化的颜色角色暴露给插件主题，超越现有的 6 个基础角色
   - **Underlying Need**: Richer plugin customization without core framework changes
   - **潜在需求**: 无需修改核心框架即可实现更丰富的插件定制

## 5. Bugs & Stability

## 5. Bug 与稳定性

### Critical Bugs

### 关键 Bug

| Priority | Issue | Description | Fix Status |
|----------|-------|-------------|------------|
| **HIGH** | [#8875](https://github.com/agentscope-ai/QwenPaw/issues/8875) | MCP streamable_http client masks 4xx as "not connected", tears down session | Open; [PR #8895](https://github.com/agentscope-ai/QwenPaw/pull/8895) filed |
| **HIGH** | [#8875](https://github.com/agentscope-ai/QwenPaw/issues/8875) | MCP streamable_http 客户端将 4xx 误报为"未连接"，导致会话断开 | 开放中；已提交 [PR #8895](https://github.com/agentscope-ai/QwenPaw/pull/8895) |
| **HIGH** | [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) | Windows: orphaned llama-server.exe processes accumulate, exhausting memory | Open; [PR #8841](https://github.com/agentscope-ai/QwenPaw/pull/8841) under review |
| **HIGH** | [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) | Windows：孤儿 llama-server.exe 进程不断累积，耗尽内存 | 开放中；[PR #8841](https://github.com/agentscope-ai/QwenPaw/pull/8841) 审核中 |
| **HIGH** | [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887) | Media data blocks cause 400 BadRequestError on non-multimodal models | Open |
| **HIGH** | [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887) | 媒体数据块导致非多模态模型抛出 400 BadRequestError | 开放中 |
| **MEDIUM** | [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851) | Import map remaps entry chunk, bundle loads twice, plugin routes fail | Open |
| **MEDIUM** | [#8851](https://github.com/agentscope-ai/QwenPaw/issues/8851) | Import map 重映射了入口 chunk，导致 bundle 加载两次，插件路由失败 | 开放中 |
| **MEDIUM** | [#8888](https://github.com/agentscope-ai/QwenPaw/issues/8888) | Console transcript jumps back when content height shrinks | Open |
| **MEDIUM** | [#8888](https://github.com/agentscope-ai/QwenPaw/issues/8888) | Console 转录在内容高度收缩时回跳 | 开放中 |
| **MEDIUM** | [#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893) | Console model settings have no agent scope; configured model renders as "no model" | Open |
| **MEDIUM** | [#8893](https://github.com/agentscope-ai/QwenPaw/issues/8893) | Console 模型设置没有 Agent 作用域；已配置的模型显示为"无模型" | 开放中 |

### Resolved Today

### 今日已解决

- **[#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)** — Narrow screen text clipping fixed
- **[#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)** — 已修复窄屏文字截断问题
- **[#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706)** — Creator input lag (no memoization) fixed
- **[#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706)** — 已修复 Creator 输入延迟（缺少记忆化）问题
- **[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)** — Creator review undecidability fixed (via #8886)
- **[#8592](https://github.com/agentscope-ai/QwenPaw/issues/8592)** — 已修复 Creator 审核无法判定问题（通过 #8886）
- **[#8833](https://github.com/agentscope-ai/QwenPaw/issues/8833)** — mission CLI /api prefix duplication fixed
- **[#8833](https://github.com/agentscope-ai/QwenPaw/issues/8833)** — 已修复 mission CLI /api 前缀重复问题

## 6. Feature Requests & Roadmap Signals

## 6. 功能请求与路线图信号

### Emerging Feature Requests

### 新兴功能请求

| Request | Issue | Signals | Likelihood |
|---------|-------|---------|------------|
| **Human-in-the-Loop Tool** | [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | Long-standing (4 months), affects safety-critical use cases | Medium-High |
| **Human-in-the-Loop Tool** | [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | 长期开放（4 个月），影响安全关键场景 | 中高 |
| **AI Prompt Polishing** | [#8892](https://github.com/agentscope-ai/QwenPaw/issues/8892) | User-friendly enhancement, popular UX pattern | Medium |
| **AI Prompt Polishing** | [#8892](https://github.com/agentscope-ai/QwenPaw/issues/8892) | 用户体验增强，流行的 UX 模式 | 中 |
| **Per-job Reasoning Control** | [#8476](https://github.com/agentscope-ai/QwenPaw/pull/8476) | PR in review, clear implementation path | High (imminent) |
| **Per-job Reasoning Control** | [#8476](https://github.com/agentscope-ai/QwenPaw/pull/8476) | PR 审核中，实现路径清晰 | 高（即将发布） |
| **Runtime Base Path Deployment** | [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | Enterprise/infra need, PR in review | High (imminent) |
| **Runtime Base Path Deployment** | [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | 企业/基础设施需求，PR 审核中 | 高（即将发布） |
| **Linux Desktop Packaging** | [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | Expanding platform reach, PR open | Medium |
| **Linux Desktop Packaging** | [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | 扩大平台覆盖范围，PR 开放中 | 中 |

### Architecture/Design Discussions

### 架构/设计讨论

- **Memory Reference Counting** ([#8882](https://github.com/agentscope-ai/QwenPaw/issues/8882)) — Address "agent forgets" symptoms via TTL/reference tracking instead of deletions
- **内存引用计数**（[#8882](https://github.com/agentscope-ai/QwenPaw/issues/8882)）— 通过 TTL/引用跟踪而非删除来解决"Agent 遗忘"现象
- **Tenant Scoping Enforcement** ([#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881)) — Move from directory conventions to enforced memory retrieval isolation
- **租户作用域强制执行**（[#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881)）— 从目录约定转向强制执行的内存检索隔离
- **Skill Scanner Security** ([#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880)) — CRITICAL findings currently proceed in "warn" mode; scanner timeout fails open
- **Skill Scanner 安全**（[#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880)）— CRITICAL 级别发现目前以"警告"模式继续执行；扫描器超时未能安全失败
- **Egress Policy for Coding Mode** ([#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878)) — Deny-by-default for metadata endpoints with policy-file allowlist
- **Coding 模式的出口策略**（[#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878)）— 元数据端点默认拒绝，通过策略文件放行

## 7. User Feedback Summary

## 7. 用户反馈摘要

### Pain Points

### 痛点

| Pain Point | Source | Frequency |
|------------|--------|-----------|
| **Windows Process Orphaning** | [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) | Multiple users affected; memory exhaustion |
| **Windows 进程孤儿化** | [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) | 多名用户受影响；内存耗尽 |
| **Creator Input Performance** | [#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706) | Degrades with conversation length; no memoization |
| **Creator 输入性能** | [#8706](https://github.com/agentscope-ai/QwenPaw/issues/8706) | 随对话长度递减；缺少记忆化 |
| **Model Context Window Misreporting** | [#8890](https://github.com/agentscope-ai/QwenPaw/issues/8890), [#8891](https://github.com/agentscope-ai/QwenPaw/issues/8891) | Affects custom providers and built-in glm models |
| **模型上下文窗口误报** | [#8890](https://github.com/agentscope-ai/QwenPaw/issues/8890), [#8891](https://github.com/agentscope-ai/QwenPaw/issues/8891) | 影响自定义 Provider 和内置 glm 模型 |
| **Media Handling on Non-Multimodal Models** | [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887) | Cascading 400 errors corrupt session state |
| **非多模态模型媒体处理** | [#8887](https://github.com/agentscope-ai/QwenPaw/issues/8887) | 级联 400 错误破坏会话状态 |

### Use Cases Driving Development

### 推动开发的用例

- **Enterprise Deployment**: Base path support ([#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)), tenant isolation ([#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881))
- **企业部署**: Base path 支持（[#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)），租户隔离（[#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881)）
- **Content Creation**: Creator plugin stability and review recovery ([#8886](https://github.com/agentscope-ai/QwenPaw/pull/8886))
- **内容创作**: Creator 插件稳定性和审核恢复（[#8886](https://github.com/agentscope-ai/QwenPaw/pull/8886)）
- **Local Model Support**: llama-server lifecycle management ([#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)), Linux packaging ([#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444))
- **本地模型支持**: llama-server 生命周期管理（[#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)），Linux 打包（[#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444)）
- **Safety-Critical Applications**: Human-in-the-loop ([#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)), skill scanning ([#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880))
- **安全关键应用**: Human-in-the-loop（[#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274)），Skill 扫描（[#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880)）

## 8. Backlog Watch

## 8. 待办事项关注

### Long-Unanswered Important Items

### 长期未响应的重要事项

| Item | Age | Status | Concern |
|------|-----|--------|---------|
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) — ask_user_question tool | ~4 months | Open, 4 comments | Safety-critical feature, no clear timeline |
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) — ask_user_question 工具 | ~4 个月 | 开放中，4 条评论 | 安全关键功能，无明确时间表 |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) — Linux packaging | ~1 month | Open, under review | Expands addressable user base significantly |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) — Linux 打包 | ~1 个月 | 开放中，审核中 | 大幅扩展目标用户群 |
| [#8879](https://github.com/agentscope-ai/QwenPaw/issues/8879) — max_processes/max_memory_mb unenforced | 1 day | Open, 1 comment | Documentation honesty vs. user expectation gap |
| [#8879](https://github.com/agentscope-ai/QwenPaw/issues/8879) — max_processes/max_memory_mb 未强制执行 | 1 天 | 开放中，1 条评论 | 文档真实性与用户期望之间的差距 |
| [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) — Provider prompt cache params | ~2 months | Under review | OpenAI cache compatibility for custom gateways |
| [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) — Provider prompt cache 参数 | ~2 个月 | 审核中 | 自定义网关的 OpenAI 缓存兼容性 |

### Items Needing Maintainer Attention

### 需要维护者关注的事项

1. **Security**: [#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880) — CRITICAL findings proceed in warn mode; scanner timeout fails open (2-day-old, 1 comment)
1. **安全**: [#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880) — CRITICAL 级别发现以警告模式继续执行；扫描器超时未能安全失败（2 天，1 条评论）
2. **MCP Reliability**: [#8875](https://github.com/agentscope-ai/QwenPaw/issues/8875) — Session teardown on legitimate 4xx errors (2-day-old, PR #8895 available)
2. **MCP 可靠性**: [#8875](https://github.com/agentscope-ai/QwenPaw/issues/8875) — 合法 4xx 错误导致会话断开（2 天，PR #8895 可用）
3. **Model Discovery**: [#8890](https://github.com/agentscope-ai/QwenPaw/issues/8890), [#8891](https://github.com/agentscope-ai/QwenPaw/issues/8891) — Context window misreporting (1-day-old, affects multiple provider types)
3. **模型发现**: [#8890](https://github.com/agentscope-ai/QwenPaw/issues/8890), [#8891](https://github.com/agentscope-ai/QwenPaw/issues/8891) — 上下文窗口误报（1 天，影响多种 Provider 类型）

---

*Generated: 2026-11-25 | Data Source: [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)*

---

*生成时间：2026-11-25 | 数据来源：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)*</think>



</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate a technical project digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, links, numbers, dates, code references verbatim
4. Keep project names, repository slugs, usernames, version tags, etc. in original form
5. Use natural technical Chinese appropriate for a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and making it read naturally in Chinese.
</think>


# ZeroClaw 项目日报 — 2026-11-25

## 1. 今日概览

ZeroClaw 今日展现出极高的开发活跃度，过去 24 小时内有 50 个 PR 更新、9 个 issue 收到活动记录。项目正积极推进 V5 provider registry 架构，多个来自贡献者 NiuBlibing 的堆叠 PR 正在推进基础设施变更。今日无版本发布，但合并的 shell 工具错误报告修复 (#12398) 以及 ACP/webchat 切换信号相关工作持续改善了稳定性。安全相关工作（包括 OIDC 刷新授权和浏览器凭证作用域）仍是重点，体现了项目对安全加固的投入。

---

## 2. 版本发布

**今日无新版本发布。**

上一版本里程碑（v0.9.0）于 2026-11-12 发布，包含核心 OIDC 栈集成。v0.9.1 里程碑在 [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) 中追踪，剩余工作包括 OIDC 规范主体（canonical principal）项目和入站认证优化。

---

## 3. 项目进展

### 最近合并/关闭的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#12398](https://github.com/zeroclaw-labs/zeroclaw/pull/12398) | fix(runtime): surface exit status and stderr on failed shell runs | **已关闭** |
| [#12708](https://github.com/zeroclaw-labs/zeroclaw/pull/12708) | docs(runtime): record the approval of the #12609 refresh-grant row | **开放中** |

**重要进展：** shell 工具修复确保失败的命令同时向模型和运行日志暴露退出码及 stderr，提升了使用 shell 执行能力的 agent 的调试体验。

### 活跃中的堆叠 PR（V5 Registry 架构）

以下大规模 PR 形成 V5 provider registry 的依赖链：

| PR | 描述 |
|----|------|
| [#12454](https://github.com/zeroclaw-labs/zeroclaw/pull/12454) | 引入独立的 provider registry 领域类型 |
| [#12455](https://github.com/zeroclaw-labs/zeroclaw/pull/12455) | 共享原生能力协议和 HTTP 传输层 |
| [#12456](https://github.com/zeroclaw-labs/zeroclaw/pull/12456) | 分离聊天连接和超时构建逻辑 |
| [#12457](https://github.com/zeroclaw-labs/zeroclaw/pull/12457) | 准备嵌套 registry 反射和输入规范化 |
| [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) | 采用规范的 V5 registry 和运行时模型绑定 |
| [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) | 在 ZeroClaw 中配置和选择规范 provider 模型 |

---

## 4. 社区热点话题

### 互动最频繁的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 主题 |
|-------|------|--------|------|
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | Browser tool exposes only 16 of 100+ commands | **7** | 功能缺口 |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | OIDC milestone tracker | **6** | 安全/认证 |
| [#12055](https://github.com/zeroclaw-labs/zeroclaw/issues/12055) | MCP HTTP client has no pool/keep-alive control | **3** | 可靠性 |
| [#12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697) | Split zeroclaw-runtime into smaller crates | **3** | 架构 |

**分析：**

- **#9945** 反映出用户对完整浏览器自动化能力的高度需求。agent-browser 后端支持 100+ 命令，但 ZeroClaw 的工具仅暴露 16 个，导致 iframe、JS 对话框、标签页和表单控件无法访问。这是一个高风险、P2 优先级的项目，受制于已接受的设计方案。

- **#8289** 表明 OIDC 实现已进入收尾阶段，v0.9.0 发布后重心转向 v0.9.1 的规范主体和入站认证改进工作。

### 值得关注的活跃 PR

| PR | 标题 | 影响范围 |
|----|------|----------|
| [#12440](https://github.com/zeroclaw-labs/zeroclaw/pull/12440) | feat(plugins): add host-mediated agent wake dispatch | 插件架构高风险变更 |
| [#12316](https://github.com/zeroclaw-labs/zeroclaw/pull/12316) | feat(channels): add SimpleX messaging, voice notes, and encrypted calls | 新渠道功能对齐 |
| [#12654](https://github.com/zeroclaw-labs/zeroclaw/pull/12654) | feat(webchat): wire ACP startup cutover | 用户体验迁移路径 |

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度排序）

**S2 — 功能降级：**

| Issue | 标题 | 发现时间 | 状态 |
|-------|------|----------|------|
| [#12055](https://github.com/zeroclaw-labs/zeroclaw/issues/12055) | MCP HTTP client has no pool/keep-alive control | 29 天前 | 开放中 |
| [#12558](https://github.com/zeroclaw-labs/zeroclaw/issues/12558) | Matrix tool-approval prompts posted to room timeline instead of thread | 7 天前 | 开放中 |
| [#12703](https://github.com/zeroclaw-labs/zeroclaw/issues/12703) | Email channel: live-processed messages stay UNSEEN, causing backlog re-processing | 1 天前 | 开放中 |
| [#12667](https://github.com/zeroclaw-labs/zeroclaw/issues/12667) | `/model <id>` replies "Model switched" but requests keep profile's model | 2 天前 | 开放中 |

**关键 Bug 观察：**

- **#12055** 是一个隐蔽的可靠性问题，池化套接字老化会导致工具调用结果状态不明。MCP 传输层缺少对 `reqwest::Client` 池化参数的配置能力。

- **#12703** 是一个新出现的回归问题：邮件观察者模式正确处理消息，但未能将其标记为已读，导致守护进程重启时重复回答整个积压队列。

- **#12667** 是用户体验层面的不一致问题：斜杠命令给出了切换成功的反馈，但后续请求仍使用旧模型。

**已有修复 PR：** #12398（shell 退出状态）已关闭。

---

## 6. 功能需求与路线图信号

### 新功能需求（今日）

| Issue | 标题 | 提出者 | 需求 |
|-------|------|--------|------|
| [#12709](https://github.com/zeroclaw-labs/zeroclaw/issues/12709) | Add native local Turso as opt-in memory backend | vadelma-agent | SQLite 的替代方案 |
| [#12707](https://github.com/zeroclaw-labs/zeroclaw/issues/12707) | Daemon-held OIDC refresh grants for device sessions (ADR-017) | tidux | 安全加固 |

### 路线图追踪

| Issue | 标题 | 下一里程碑 |
|-------|------|-----------|
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | OIDC 里程碑：规范主体和入站认证 | v0.9.1 |
| [#12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697) | 将 zeroclaw-runtime 拆分为更小的 crates | v0.9.1 之后 |
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | 浏览器工具与 agent-browser 的 100+ 命令对齐 | 未排期 |

### 预测的下一版本信号

基于活跃追踪器和 PR 状态：

- **v0.9.1** 可能包含 OIDC 改进、守护进程持有的刷新授权，以及可能的运行时拆分工作
- **V5 provider registry**（#12450 系列）看起来接近合并就绪状态，可能作为破坏性变更发布
- **bf16.ai provider**（#12696）新增了一个模型槽位，表明 provider 多元化仍在持续推进

---

## 7. 用户反馈摘要

### 从 Issue 中识别出的痛点

**1. 浏览器自动化能力受限（#9945）**
用户期望获得与底层 agent-browser 后端相当的完整浏览器控制能力。当前仅支持 16 个命令，缺失关键功能包括 iframe、对话框、标签页和表单控件——这阻碍了自动填表和多框架抓取等使用场景。

**2. 邮件渠道可靠性问题（#12703）**
用户反映邮件观察者模式能正确处理消息，但未能将其标记为已读，导致守护进程每次重启都重新回答整个积压队列。这对基于邮件的工作流造成了严重干扰。

**3. 模型切换用户体验混乱（#12667）**
用户收到模型切换成功的确认信息，但后续请求仍使用旧模型。这种不一致削弱了用户对命令的信任，也暗示了 UI 反馈与实际 provider 路由之间的脱节。

**4. Matrix 线程上下文丢失（#12558）**
使用线程化 Matrix 对话时，工具审批提示出现在房间时间线而非线程内，破坏了对话上下文，还可能将审批操作暴露给错误的受众。

---

## 8. 积压待办关注

### 需要维护者关注的 Issue

| Issue | 发现时间 | 标题 | 风险 |
|-------|----------|------|------|
| [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) | 105 天前 | 浏览器工具仅暴露 16/100+ 命令 | 高 |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | 154 天前 | OIDC 里程碑追踪器 | 高 |
| [#12055](https://github.com/zeroclaw-labs/zeroclaw/issues/12055) | 29 天前 | MCP HTTP client 池化控制 | 中 |

### 需要维护者审查的 PR

| PR | 提交时间 | 标题 | 标签 |
|----|----------|------|------|
| [#12440](https://github.com/zeroclaw-labs/zeroclaw/pull/12440) | 11 天前 | feat(plugins): add host-mediated agent wake dispatch | risk:high, needs-maintainer-review |
| [#12455](https://github.com/zeroclaw-labs/zeroclaw/pull/12455) | 10 天前 | refactor(providers): share native capability protocols | needs-maintainer-review |

### 长期无活动的积压项

当前无标记为 stale 的项目。所有追踪的 issue 和 PR 均保持一致的活动状态。

---

*本日报数据来源：ZeroClaw（zeroclaw-labs/zeroclaw）GitHub 数据，日期：2026-11-25。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*