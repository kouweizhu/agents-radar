# OpenClaw 生态日报 2026-11-09

> Issues: 486 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-09 01:54 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me translate this carefully, maintaining all the structure, formatting, and technical accuracy.

Key points:
- Preserve Markdown structure exactly
- Tables, headings, lists, bold/italic, etc.
- Keep URLs, code references, issue/PR numbers, usernames as-is
- Use natural technical Chinese register
- No preamble or explanation
- No markdown fences

Let me go through it section by section.

Title: OpenClaw Project Digest — 2026-11-09
→ OpenClaw 项目摘要 — 2026-11-09

Section 1: Today's Overview
- "Overview" → "今日概览"
- "high velocity" → "高速迭代"
- "privacy hardening" → "隐私加固"
- "secrets, conversation content, and channel payloads" → "密钥、对话内容和通道载荷"
- "Stability concerns persist around..." → "稳定性问题持续存在于..."
- "event-loop stalls" → "事件循环阻塞"
- "memory leaks" → "内存泄漏"
- "healthy pipeline throughput" → "健康的管道吞吐量"

Section 2: Releases - v2026.11.2
- "Privacy and Trust Boundaries" → "隐私与信任边界"
- "Released" → "发布日期"
- "Migration Notes" → "迁移说明"
- "breaking changes" → "破坏性变更"
- "observability pipelines" → "可观测性管道"
- "structured telemetry APIs" → "结构化遥测 API"

Section 3: Project Progress - Merged/Closed PRs
- "Top Highlights" → "重点合并"
- "Cached detail reads" → "缓存详情读取"
- "NTP corrections" → "NTP 时间同步修正"


- "recall circuit breaker" → "召回熔断器"
- "compaction notices" → "压缩通知"
- "orphaned branch cleanup" → "孤立分支清理"
- "console and predicate wait handles" → "控制台与断言等待句柄"
- "authored credential fallbacks" → "自定义凭证回退"
- "push notifications" → "推送通知"
- "deep-link" → "深度链接"
- "context-pressure-aware continuation" → "上下文压力感知续传"

Section 4: Community Hot Topics
- "Most Active Issues" → "最活跃 Issue"
- "Underlying Needs Analysis" → "深层需求分析"
- "crash recovery" → "崩溃恢复"
- "ancestry inspection error" → "进程树检查错误"
- "Regression" → "回归问题"
- "long-session robustness" → "长会话稳定性"
- "token/context accumulation" → "Token/上下文累积"
- "Resource scheduling control" → "资源调度控制"
- "simultaneous 'dreaming' operations" → "并发"思考"操作"

Section 5: Bugs & Stability
- "Critical Bugs (P0/P1)" → "关键缺陷 (P0/P1)"
- "Runtime publication timeout" → "运行时发布超时"
- "sleep/wake" → "休眠/唤醒"
- "event loop blocks" → "事件循环阻塞"
- "silently dropped" → "静默丢弃"
- "memory growth" → "内存增长"
- "Off-heap RSS" → "堆外 RSS"
- "SQLite contention" → "SQLite 竞争"
- "Memory leaks" → "内存泄漏"
- "Startup/shutdown reliability" → "启停可靠性"
- "Stability Pattern" → "稳定性问题模式"
- "Notable Regression" → "重要回归问题"
- "provider model compatibility" → "提供商模型兼容性"
- "Auth provider failures" → "认证提供商故障"

Section 6: Feature Requests & Roadmap Signals
- "High-Engagement Feature Requests" → "高参与度功能请求"
- "Roadmap-Adjacent PRs" → "路线图相关 PR"
- "deep linking" → "深度链接"
- "Privacy feature" → "隐私功能"
- "Mobile polish" → "移动端优化"
- "near-term" → "近期"
- "Security enhancement" → "安全增强"
- "Resource management" → "资源管理"

Section 7: User Feedback Summary
- "Pain Points" → "痛点"
- "Long-session degradation" → "长会话性能下降"
- "Platform-specific bugs" → "平台特定缺陷"
- "Windows cleanup failures" → "Windows 清理失败"
- "Android notification noise" → "Android 通知噪音"
- "Use Cases Reported" → "用户反馈的使用场景"
- "Multi-agent Telegram group chats" → "多代理 Telegram 群聊"
- "Heavy cron job workloads" → "高频定时任务负载"
- "Self-hosted deployments" → "自托管部署"
- "Embedded agents" → "嵌入式代理"
- "Satisfaction Indicators" → "满意度指标"

Section 8: Backlog Watch
- "Long-Unanswered Important Issues" → "长期未回复的重要 Issue"
- "Needing Maintainer Attention" → "需要维护者关注"
- "stale" → "陈旧"
- "security" → "安全"
- "off-meta" → "范围外"
- "needs proof" → "需要验证"
- "waiting on author" → "等待作者响应"

Tables: Keep all content natural in Chinese, preserving the structure and technical accuracy.

Let me translate the entire document now, ensuring natural Chinese technical register.
</think>


# OpenClaw 项目摘要 — 2026-11-09

---

## 1. 今日概览

OpenClaw 保持高速迭代，过去 24 小时内有 **500 条 PR** 和 **486 条 Issue** 更新，社区活跃度高涨。项目发布了 **v2026.11.2**，重点加强隐私保护——密钥、对话内容和通道载荷现在已从诊断日志中排除。稳定性问题持续存在于 SQLite 竞争引发的偶发事件循环阻塞、长会话期间的内存泄漏以及 macOS 特有的 gateway stop 失败场景。社区在过去 24 小时内合并了 **151 条 PR**，同时持续开新 PR，管道吞吐量健康，尽管待处理 Issue 数量较大（361 个活跃）。

---

## 2. 版本发布

### v2026.11.2 — 隐私与信任边界

**发布日期：** 2026-11-09

| 变更项 | 描述 |
|--------|------|
| 诊断日志脱敏 | 配置密钥、对话内容、工具错误和通道载荷现已从诊断日志中排除 |
| 信任边界强制执行 | 选定的提供商和导航信任边界现已强制执行 |
| MCP 授权生命周期 | MCP 授权在热 CLI 轮次后释放，防止资源泄漏 |

**迁移说明：** 无破坏性变更。运营者如需获取原始诊断输出，应验证现有监控/可观测性管道是否已更新为使用新的结构化遥测 API。

**相关参考：**
- PR #191318
- PR #174998

---

## 3. 项目进度

### 今日合并/关闭的 PR（重点）

| PR | 作者 | 变更 | 影响 |
|----|------|------|------|
| [#195450](https://github.com/openclaw/openclaw/pull/195450) | wangmiao0668000666 | fix(github): 按运行时间过期缓存详情读取 | 修复 NTP 时间同步后的数据陈旧问题 |
| [#195472](https://github.com/openclaw/openclaw/pull/195472) | wangmiao0668000666 | fix(active-memory): 按运行时间过期召回熔断器 | 防止时钟调整后的召回冻结 |
| [#195176](https://github.com/openclaw/openclaw/pull/195176) | VACInc | fix: 在原生历史准备期间显示压缩通知 | 提升长会话期间的用户体验可见性 |
| [#195458](https://github.com/openclaw/openclaw/pull/195458) | steipete | fix(worktrees): 停止重试过大的归档工作区结果 | 减少空闲清理失败 |
| [#195498](https://github.com/openclaw/openclaw/pull/195498) | steipete | fix: 避免在 agent Git 探测期间下载历史 | 加速部分克隆操作 |
| [#195481](https://github.com/openclaw/openclaw/pull/195481) | steipete | fix(browser): 释放控制台与断言等待句柄 | 解决长生命周期浏览器标签页的内存增长 |
| [#171951](https://github.com/openclaw/openclaw/pull/171951) | Leon-SK668 | fix(config): 在公开快照中 redact 自定义凭证回退 | 安全加固 |

### 今日新开的 PR

| PR | 作者 | 规模 | 重点 |
|----|------|------|------|
| [#195504](https://github.com/openclaw/openclaw/pull/195504) | wr-web | S | fix(ui): 在 Windows 路径中保留反斜杠 |
| [#195503](https://github.com/openclaw/openclaw/pull/195503) | wangmiao0668000666 | XS | fix(memory): 嵌入探测缓存 TTL 修复 |
| [#195508](https://github.com/openclaw/openclaw/pull/195508) | roboclaw-bot | XS | fix(ui): 作曲区上方聊天记录截断 |
| [#193714](https://github.com/openclaw/openclaw/pull/193714) | roboclaw-bot | L | feat(ios): 从推送通知深度链接到对应聊天 |
| [#195484](https://github.com/openclaw/openclaw/pull/195484) | steipete | XL | fix(worktrees): 孤立分支清理 |
| [#129388](https://github.com/openclaw/openclaw/pull/129388) | karmafeast | XL | feat(continuation): 上下文压力感知续传 |

---

## 4. 社区热点

### 评论最多的活跃 Issue

| Issue | 作者 | 评论数 | 话题 | 链接 |
|-------|------|--------|------|------|
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | jlapenna | 26 | SQLite 检查点在崩溃恢复后失败导致 agent 不可用 | [链接](https://github.com/openclaw/openclaw/issues/166634) |
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | davidchyi-beep | 25 | macOS gateway stop 因进程树检查报错失败 | [链接](https://github.com/openclaw/openclaw/issues/191944) |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | SUBA666 | 18 | 回归问题：Gemini 3.1 出现 "Cannot convert undefined" | [链接](https://github.com/openclaw/openclaw/issues/38327) |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | TimeAground | 17 | 长对话后 Write/exec 工具参数静默丢弃 | [链接](https://github.com/openclaw/openclaw/issues/53408) |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | aaronwong1989 | 16 | 功能请求：按 agent 配置"思考"行为 | [链接](https://github.com/openclaw/openclaw/issues/67413) |

### 深层需求分析

1. **系统中断后的恢复能力：** #166634 表明用户需要确保在非自愿进程终止后能够完全恢复——而非"基本能用"的程度。

2. **macOS 兼容性对等：** #191944 显示平台特定问题仍然存在，用户期望跨操作系统的 CLI 行为一致。

3. **提供商模型兼容性：** #38327 凸显了维护快速演进中的提供商模型（Google Vertex、Gemini）兼容性的挑战。

4. **长会话稳定性：** #53408 指向 Token/上下文累积导致工具调用可靠性随时间下降的问题。

5. **资源调度控制：** #67413 请求按 agent 配置以防止并发"思考"操作引发内存峰值——这是常见的企业级扩展需求。

---

## 5. 缺陷与稳定性

### 关键缺陷（P0/P1）— 活跃中

| Issue | 优先级 | 状态 | 概述 | 对应修复 PR？ |
|-------|--------|------|------|---------------|
| [#158592](https://github.com/openclaw/openclaw/issues/158592) | P0 | 开放 | 休眠/唤醒后运行时发布超时；需重启 | 无 |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | P0 | 开放 | Gateway 启动时阻塞事件循环 40-200 秒 → 重启循环 | 无 |
| [#193962](https://github.com/openclaw/openclaw/issues/193962) | P0 | 开放 | SQLite header-probe 超时修复在 2026.10.10 后无法触达 | 无 |
| [#126950](https://github.com/openclaw/openclaw/issues/126950) | P1 | 开放 | Telegram 回调载荷静默丢弃 | 无 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | P1 | 开放 | 2026.10.5 中 RSS 内存达 1.9 GB（此前约 300 MB） | 无 |
| [#191847](https://github.com/openclaw/openclaw/issues/191847) | P1 | 开放 | 大会话反复杀死 512 MB SQLite worker | 无 |
| [#182369](https://github.com/openclaw/openclaw/issues/182369) | P1 | 开放 | 堆外 RSS 以约 0.1 GiB/h 增长直至重启 | 无 |

### 重要回归

**#38327** — 2026.3.2 中 `google-vertex/gemini-3.1-pro-preview` 出现 "Cannot convert undefined or null to object"
- 严重性：回归（之前版本正常）
- 影响：认证提供商故障
- 评级：🦞 钻石龙虾（高关注度）

### 稳定性问题模式

多个问题汇聚于：
- **SQLite 竞争** (#117262, #166634, #193962)
- **内存泄漏** (#181432, #182369, #185578)
- **启停可靠性** (#162211, #191944, #167652)

---

## 6. 功能请求与路线图信号

### 高参与度功能请求

| Issue | 作者 | 点赞 | 话题 | 路线图信号 |
|-------|------|------|------|-----------|
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | aaronwong1989 | 5 👍 | 按 agent 配置"思考"行为 | 近期可能 |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | liemnhoang | 6 👍 | MCP env schema 中允许 SecretRef | 安全增强 |
| [#107433](https://github.com/openclaw/openclaw/issues/107433) | jamesachurchill | 1 👍 | `openclaw backup` 清单遗漏 | 备份加固 |
| [#162164](https://github.com/openclaw/openclaw/issues/162164) | TheAngryPit | 0 👍 | iOS/macOS 上的个人身份可选加入 | 隐私功能 |
| [#143387](https://github.com/openclaw/openclaw/issues/143387) | pestelence2k | 1 👍 | Android 通知体验优化 | 移动端优化 |

### 路线图相关 PR

| PR | 规模 | 功能 | 状态 |
|----|------|------|------|
| [#129388](https://github.com/openclaw/openclaw/pull/129388) | XL | 上下文压力感知续传 (continue_work/delegate) | 开放 |
| [#193714](https://github.com/openclaw/openclaw/pull/193714) | L | iOS 推送通知 → 聊天深度链接 | 开放 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | — | 减少工具 schema Token 开销（每会话约 3,500 tok） | 开放 |

**预测：** 按 agent 配置"思考"行为 (#67413) 和 SecretRef schema 支持 (#76493) 由于安全性和资源管理的重要性，很可能是下一版本的重点方向。

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 严重性 |
|------|------|--------|
| **SQLite 不稳定** | 多份报告：事件循环阻塞、worker OOM、检查点失败 | 严重 |
| **内存膨胀** | 1.9 GB RSS 基线、0.1 GiB/h 增长、堆外累积 | 高 |
| **macOS gateway 问题** | stop 命令失败、启动挂起、进程树检查错误 | 高 |
| **长会话性能下降** | 工具参数丢弃、提示缓存失败、上下文丢失 | 中高 |
| **平台特定缺陷** | Windows 清理失败、Android 通知噪音 | 中 |

### 反馈的使用场景

- **多 agent Telegram 群聊** 与共享内存（回显聊天记录抖动）
- **高频 cron 任务工作负载** 隔离 agent 会话
- **自托管部署** 3 个 agent 共 50+ 会话
- **嵌入式 agent** 使用 Claude CLI harness 配合 fallback 链

### 满意度指标

- v2026.11.2 中的隐私加固获得社区隐性支持
- UI 修复响应迅速（Windows 路径渲染、聊天记录布局）
- 安全相关 PR 合并活跃 (#171951)

---

## 8. 待办关注

### 需要维护者关注的长期未回复重要 Issue

| Issue | 存在时间 | 评论数 | 话题 | 标签 |
|-------|----------|--------|------|------|
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 约 8 个月 | 18 | Gemini 3.1 提供商回归问题 | regression, P1 |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 约 7 个月 | 17 | 长对话后工具参数丢弃 | stale, P2 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 约 7 个月 | 16 | 按 agent 配置"思考"行为 | stale, P2 |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | 约 6 个月 | 14 | MCP schema 中允许 SecretRef | security |
| [#117262](https://github.com/openclaw/openclaw/issues/117262) | 约 3 个月 | 13 | SQLite 3 并发写句柄 | P1 |
| [#137613](https://github.com/openclaw/openclaw/issues/137613) | 约 2 个月 | 13 | CLI 上预压缩内存刷新被禁用 | session-state |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 约 9 个月 | 12 | 工具 schema Token 开销 | enhancement |
| [#126727](https://github.com/openclaw/openclaw/issues/126727) | 约 3 个月 | 8 | 子 agent 的提供商感知并发 | off-meta |

### 等待作者/验证的 PR

| PR | 规模 | 话题 | 状态 |
|----|------|------|------|
| [#153661](https://github.com/openclaw/openclaw/pull/153661) | S | Proxy: 长主机名证书 | ⏳ 等待作者响应 |
| [#129388](https://github.com/openclaw/openclaw/pull/129388) | XL | 上下文压力感知续传 | 📣 需要验证 |
| [#195499](https://github.com/openclaw/openclaw/pull/195499) | S | SQLite 源版本 worker 独立性 | ⏳ 等待作者响应 |
| [#195481](https://github.com/openclaw/openclaw/pull/195481) | XL | Browser: 释放控制台/断言等待句柄 | ⏳ 等待作者响应 |

---

**摘要生成时间：** 2026-11-09  
**数据来源：** GitHub openclaw/openclaw 近 24 小时活动数据

---

## 横向生态对比

<think>The user wants me to translate the technical report into Simplified Chinese. I need to translate the entire document while maintaining the Markdown structure exactly, preserving all technical identifiers, URLs, issue/PR references, and version numbers. I should use natural technical Chinese, appropriate for a Chinese developer newsletter.

Let me translate section by section:

1. Title and date
2. Section 1: Ecosystem Overview
3. Section 2: Activity Comparison (table)
4. Section 3: OpenClaw's Position
5. Section 4: Shared Technical Focus Areas
6. Section 5: Differentiation Analysis
7. Section 6: Community Momentum & Maturity
8. Section 7: Trend Signals

I need to be careful with:
- Technical terms (SQLite, MCP, OAuth, WAL, etc. - these stay in English)
- Project names and slugs (stay as-is)
- Issue/PR numbers and links (stay as-is)
- Version numbers (stay as-is)
- Code blocks and inline code (stay as-is)
- Emoji (keep them)
- Table structure and alignment

Let me translate this carefully in natural technical Chinese.
</think>


# AI Agent 与个人 AI 助手开源生态报告

## 跨项目对比 — 2026-11-09

---

## 1. 生态系统概览

个人 AI 助手和 AI Agent 开源生态正处于高速但发展不均衡的阶段。四个活跃项目——OpenClaw、Hermes Agent、ZeroClaw 和 QwenPaw——都在快速迭代，而 IronClaw 已退守至维护模式，社群参与度为零。贯穿整个生态的主要技术挑战集中在**多平台可靠性**（Windows、macOS、Linux 一致性）、**安全边界执行**（工作区隔离、OAuth 令牌管理、命令语法校验）、**长会话稳定性**（内存泄漏、SQLite 竞争、上下文累积）以及**多租户架构**（用户级内存隔离、作用域权限、仪表盘访问控制）。生态呈现健康的分化态势——OpenClaw 以活动量和企业级可靠性领先；Hermes Agent 在平台插件广度上占优；ZeroClaw 最激进地推进安全加固；QwenPaw 则专注于用户体验打磨和可观测性建设。目前没有任何单一项目占据主导市场地位，在差异化发展和社区扩张方面仍有广阔空间。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|------|----------|--------------|----------|---------|----------|
| **Issues（24h）** | 486 | 50 | 13 | 5 | 0 |
| **开放/活跃 Issues** | 361 | 46 | 12 | 5 | 0 |
| **PRs（24h）** | 500 | 50 | 50 | 14 | 6 |
| **开放 PRs** | 349 | 45 | 42 | 14 | 5 |
| **今日合并 PRs** | 151 | 5 | 8 | 0 | 1 |
| **版本发布（24h）** | 1（v2026.11.2） | 0 | 0 | 0 | 0 |
| **活跃严重 Bug** | 3 | 1（P1 安全） | 3（S2） | 3 | 0 |
| **可用修复 PR** | 是 | 部分 | 无 | 无 | N/A |
| **社区参与度** | 高 | 高 | 高 | 中 | 无 |
| **健康评分** | 🟡 活跃 | 🟡 活跃 | 🟡 活跃 | 🟢 增长中 | 🔴 停滞 |

**说明：**

- OpenClaw 以绝对活动量领先所有项目，24 小时内更新了 500 个 PR 和 486 个 Issues，比第二活跃项目高出约 10 倍。
- ZeroClaw 和 Hermes Agent 的 PR 活动量持平（各 50 个/天），但 ZeroClaw 的合并率更高（8/50 vs 5/50），说明其审查流程更紧凑。
- QwenPaw 活动量较低，但有首次贡献者参与，Bug 修复周转快速。
- IronClaw 从社区角度看已基本停滞；所有活动都是自动化依赖维护。

---

## 3. OpenClaw 的定位

### 相对竞品的优势

| 维度 | OpenClaw 的定位 | 对比 |
|------|----------------|------|
| **体量** | 主导：活跃度是其他项目的 10 倍 | 远超 ZeroClaw 和 Hermes Agent |
| **发布节奏** | 活跃：今日发布了 v2026.11.2 | 今日唯一发布版本的项目 |
| **社区广度** | 最广：16 个不同讨论主题 | Hermes Agent（7）、ZeroClaw（6）、QwenPaw（5） |
| **Bug 修复速度** | 今日合并 151 个 PR | ZeroClaw（8）、Hermes（5）、IronClaw（1）、QwenPaw（0） |
| **隐私特性** | 成熟：诊断日志脱敏已发布 | 隐私默认化的引领者 |
| **文档深度** | 高：7 列标签化 issue 追踪器 | 与 ZeroClaw 相当 |

### 技术路线差异

OpenClaw 处于与竞品**不同的架构层级**：

- **Hermes Agent** 将**平台集成广度**（Telegram、Discord、QQ、Slack、飞书适配器）作为优先项，将核心可靠性问题委托给 ACP 会话模型。其多租户工作（#151553–#151555）在架构上与 OpenClaw 的工作区隔离目标相似，但 Hermes 构建于现有消息平台之上，而非提供自己的运行时。

- **ZeroClaw** 与 OpenClaw 同样关注**安全边界和多租户隔离**，但路线不同——ZeroClaw 在构建专用中继基础设施和命令语法策略系统，而 OpenClaw 强调基于 SQLite 的会话管理和诊断透明性。两者的 SQLite 竞争问题都存在，说明在多 Agent 并发和持久化的交叉点上，这是一个真实的架构挑战。

- **QwenPaw** 是最**注重用户体验**的项目，具有浏览器标签标题（#8605）、`/steer` 命令（#8318）和 Quick Add Model 按钮（#8434）等功能。其范围比 OpenClaw 更窄，聚焦于控制台/桌面体验，而非平台无关的运行时。

- **IronClaw** 实际上已退出活跃开发领域，没有留下社区痕迹。

### 社区规模对比

| 项目 | 活跃讨论 | 活跃贡献者（PRs） | 社区信号 |
|------|----------|-------------------|----------|
| OpenClaw | ~10 个热点主题 | ~10 个命名账户 + 机器人账户 | 规模大，成熟 |
| ZeroClaw | ~6 个热点主题 | ~8 个命名贡献者 | 中等，快速增长 |
| Hermes Agent | ~7 个热点主题 | ~6 个命名贡献者 | 中等，稳定 |
| QwenPaw | ~5 个热点主题 | ~5 个命名账户 + 首次贡献者 | 小型，增长中 |
| IronClaw | 0 | 1（dependabot） | 极小 |

---

## 4. 共性技术焦点领域

以下需求正在多个项目同步出现，表明整个生态正在面对共同的技术挑战：

### A. SQLite 并发与持久化

| 项目 | 具体问题 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | 崩溃后会话回收提交检查点失败（#166634）、头部探测超时（#193962）、并发写入句柄（#117262） | 严重 |
| **OpenClaw** | 大会话下 SQLite Worker OOM（#191847）、事件循环停滞 40–200 秒（#162211） | 严重 |
| **ZeroClaw** | 会话事件历史实现（#11921，已合并）——解决审计可追溯性 | 已解决 |
| **QwenPaw** | SQLite `OperationalError` 被重写为 `TimeoutError`，掩盖真实错误（#8624） | 中等 |
| **Hermes Agent** | 会话存储和轮次准入端口（#151554）——多租户会话隔离 | 进行中 |

**启示：** 每个将 Agent 状态持久化到 SQLite 的项目都遇到了同一堵墙：SQLite 的单写者模型在并发多 Agent 工作负载下产生竞争。这是传统应用中的已解决难题（连接池、WAL 模式、读副本），但 Agent 运行时上下文——工具调用、模型推理和 UI 状态都共享同一会话——创造了标准配置无法应对的新型竞争模式。

### B. 跨平台可靠性（Windows、macOS）

| 项目 | Windows 问题 | macOS 问题 |
|------|--------------|------------|
| **OpenClaw** | 网关停止失败（#191944）、启动时阻塞事件循环（#162211） | 网关停止失败（#191944） |
| **Hermes Agent** | ACP 会话/新建挂起（#135977）、看板 Worker 在序列 15 处停滞（#147613） | — |
| **ZeroClaw** | 命名管道服务端验证修复（#11805）、broad root 拒绝（#11394） | broad root 拒绝（#11406，已合并） |
| **QwenPaw** | 检查点服务在 Git 长路径前缀下失败（#8627） | — |

**启示：** 跨平台支持在整个生态中仍是"理想丰满"的状态。Windows 相关问题集中在子进程管理（命名管道、进程组、stdout 管道耗尽）和文件系统路径处理（长路径、broad root 访问）。macOS 问题更少但性质相似。投资于 CI 扩展（ZeroClaw 的 #7461）和文件系统通道加固的项目正在为其他项目最终需要的基础设施打基础。

### C. 安全边界执行

| 项目 | 安全特性 | 状态 |
|------|----------|------|
| **OpenClaw** | MCP 授权生命周期、诊断日志脱敏（v2026.11.2） | 已发布 |
| **OpenClaw** | MCP schema 中的 SecretRef（#76493） | 需求中 |
| **ZeroClaw** | 有限委托的工作区隔离（#9872） | 已报 Bug |
| **ZeroClaw** | 配对令牌与花名册用户绑定（#11286） | 审核中 |
| **ZeroClaw** | bash（#11994）、zsh（#12296）命令语法验证 | 审核中 |
| **ZeroClaw** | 通过 auth provider 验证花名册密码（#11264） | 审核中 |
| **Hermes Agent** | P1：OAuth 令牌撤销在委托子级间共享（#138337） | 未解决 |
| **QwenPaw** | OAuth2 refresh_token 持久化（#7066） | 审核中 |

**启示：** 安全是整个生态中最分散的关注点。没有统一的安全标准——每个项目都在独立发明自己的信任边界模型。OpenClaw 已发布隐私加固；ZeroClaw 在构建最全面的安全模型（令牌绑定、命令语法、有限委托）；Hermes Agent 存在未修复的关键 OAuth 漏洞；QwenPaw 正在处理凭证持久化。生态缺乏共享的安全模式——每个项目都在发明自己的信任边界模型。

### D. 可观测性与透明度

| 项目 | 特性 | 理由 |
|------|------|------|
| **OpenClaw** | 诊断日志脱敏（排除 secrets、payloads） | 隐私 + 安全 |
| **OpenClaw** | 历史准备期间的压缩通知（#195176） | 用户体验可见性 |
| **QwenPaw** | 聊天响应中的模型回退元数据（#8628） | 透明度 |
| **QwenPaw** | recall_history 仅行搜索（#8625） | 调试 |
| **ZeroClaw** | 仅追加会话事件历史（#11921） | 审计可追溯性 |
| **Hermes Agent** | Slack SDK 状态指示器回归（#110374） | 平台可观测性 |

**启示：** 用户越来越期望了解 AI **实际做了什么**——使用了哪个模型、压缩了哪些上下文、哪个工具失败及原因。从"黑箱"到"透明管道"的趋势在所有项目中一致，虽然实现成熟度差异较大。

### E. 多用户/多租户内存隔离

| 项目 | 特性需求 | 状态 |
|------|----------|------|
| **Hermes Agent** | 多用户偏好记忆（#17254） | 7 条评论，需求强烈 |
| **Hermes Agent** | 带诊断的记忆 OS 接受层（#28226） | 提案阶段 |
| **OpenClaw** | 每个 Agent 的 dreaming 配置（#67413） | 需求中 |
| **ZeroClaw** | 对等 Agent 轮次持久化且可归属（#9597） | 进行中 |
| **QwenPaw** | 可选加入的内存整合（#106919） | 需求中 |

**启示：** 每个支持共享频道或多 Agent 部署的项目都遇到了同一个问题：Agent A 的记忆状态渗透到 Agent B 的响应中。这是一个根本性的架构挑战，需要共享内存隔离标准或项目特定解决方案。

---

## 5. 差异化分析

### 按特性聚焦

| 项目 | 主要聚焦 | 次要聚焦 | 差异化能力 |
|------|----------|----------|------------|
| **OpenClaw** | 企业级可靠性、隐私 | SQLite 持久化、MCP 可扩展性 | 最高社区体量、v2026.11.2 隐私模型 |
| **Hermes Agent** | 平台插件生态 | 多租户架构 | 8+ 平台适配器（Telegram、Discord、Slack、QQ、飞书、微信） |
| **ZeroClaw** | 安全加固 | 多租户隔离、命令语法 | 最全面的安全模型、中继基础设施 |
| **QwenPaw** | 用户体验打磨、可观测性 | 频道稳定性 | `/steer` 命令、模型回退透明度 |
| **IronClaw** | Rust/WASM 工具链 | — | WASMtime 集成（停滞） |

### 按目标用户

| 项目 | 主要用户画像 | 次要用户画像 |
|------|--------------|--------------|
| **OpenClaw** | 企业 DevOps、AI 工程师 | 有自托管部署需求的高级用户 |
| **Hermes Agent** | 将 AI 集成到现有聊天平台的开发者 | 多租户托管部署 |
| **ZeroClaw** | 安全敏感型组织 | 多 Agent 中继运营商 |
| **QwenPaw** | 桌面/控制台用户 | 需要本地 AI 助手的开发者 |
| **IronClaw** | WASM 工具链集成商 | —（项目不活跃） |

### 按技术架构

| 项目 | 核心运行时 | 持久化 | 扩展模型 | 部署模式 |
|------|------------|--------|----------|----------|
| **OpenClaw** | Python/CLI | SQLite + 向量存储 | MCP 协议 | 自托管 / 云 |
| **Hermes Agent** | Python/CLI | 会话存储 + 轮次历史 | 插件适配器 | 自托管 / 托管 |
| **ZeroClaw** | Python/中继 | 会话事件历史 | 通过 RPC 的插件 Webhooks | 基于中继的多租户 |
| **QwenPaw** | Python/控制台/桌面 | SQLite | 频道插件 | 桌面优先 |
| **IronClaw** | Rust | — | WASM 组件 | 库/工具链 |

---

## 6. 社区势头与成熟度

### 活跃度分层

| 层级 | 项目 | 描述 |
|------|------|------|
| **第一层 — 高容量活跃** | **OpenClaw** | 500 PRs/天、486 issues/天、版本发布活跃、社区成熟。问题解决速度最快。主要生态枢纽。 |
| **第二层 — 中容量活跃** | **ZeroClaw、Hermes Agent** | ~50 PRs/天、~10–13 issues/天、今日无版本但 PR 堆栈活跃。ZeroClaw 合并率更高；Hermes Agent 平台覆盖更好。 |
| **第三层 — 低容量增长** | **QwenPaw** | 14 PRs/天、5 issues/天。体量低但信噪比高：有首次贡献者参与，聚焦 Bug 修复和用户体验。 |
| **第四层 — 停滞** | **IronClaw** | 6 PRs/天（全为自动化）、0 issues、0 版本。无社区参与。 |

### 快速迭代 vs 趋于稳定

| 项目 | 轨迹 | 证据 |
|------|------|------|
| **OpenClaw** | **快速迭代 → 趋于稳定** | 发布 v2026.11.2，今日合并 151 个 PR，隐私模型已发布。核心架构趋于稳定；重点从特性转向加固。 |
| **ZeroClaw** | **快速迭代，发布前阶段** | v0.9.0 里程碑追踪器活跃，安全 PR 激增，会话历史刚落地。迭代快；尚未稳定。 |
| **Hermes Agent** | **稳定迭代** | 稳定在 ~50 PRs/天，平台插件维护，多租户架构堆叠中。无可见破坏性变更。 |
| **QwenPaw** | **增长中，特性探索** | 体量低但有贡献者加入。用户体验特性开发中；API 尚未稳定。 |
| **IronClaw** | **在零点稳定** | 无活跃开发。项目实质上已归档或深度维护中。 |

---

## 7. 趋势信号

### 给 AI Agent 开发者和技术决策者的建议

以下信号从跨项目社区反馈中提炼，应作为技术决策的参考：

#### 信号 1：SQLite 是共同的瓶颈

每个持久化 Agent 状态的项目都面临多 Agent 并发下的 SQLite 竞争。生态正收敛于相同的失败模式：事件循环停滞、Worker OOM、检查点失败、崩溃后会话损坏。**开发者应规划：**
- WAL 模式和连接池作为最低配置
- 高并发部署的读副本架构
- 明确的会话边界管理（有限轮次、轮次隔离——ZeroClaw 在 #151553 中的方案）
- 超时感知的错误处理，不将竞争误判为故障（QwenPaw 的 #8624 修复）

#### 信号 2：安全模型正在碎片化

整个生态没有统一的安全标准。每个项目都在独立发明信任边界模型：
- OpenClaw：MCP 授权生命周期、诊断日志脱敏
- ZeroClaw：命令语法验证、有限委托、配对令牌绑定
- Hermes Agent：OAuth 池隔离（当前有问题——#138337）
- QwenPaw：OAuth2 refresh token 轮换

**开发多 Agent 系统时应预期自行实现安全边界层**，因为没有项目的模型足够成熟到可作为共享标准。

#### 信号 3：跨平台支持仍是"理想丰满"

Windows 支持普遍脆弱。macOS 稍好但测试仍不充分。生态没有类似"平台平等契约"的东西。实际启示：**生产部署应假设 Linux 优先**，直到项目投资于 CI 平等化（ZeroClaw 的 #7461 是第一步具体举措）。

#### 信号 4：多租户内存问题尚未解决

在所有项目中，"Agent A 的记忆渗透到 Agent B"是共享频道部署中报告最多的痛点。没有任何项目发布了完整解决方案。**这是生态中最大的开放架构挑战**，也是差异化的重大机遇。

#### 信号 5：可观测性正在成为标配

模型回退透明度、会话审计日志、压缩通知、诊断日志脱敏正在同时出现在各个项目中。市场正在收敛于**AI Agent 默认必须可解释**的期望。发布默认透明行为的项目（如 OpenClaw 的 v2026.11.2）正在建立其他项目需要对标的基础标准。

#### 信号 6：平台插件模型有边界

Hermes Agent 的 8+ 平台适配器代表了生态中最雄心勃勃的多平台集成。然而"理论上可行但生产环境静默失败"模式（Slack 状态指示器 #110374、Telegram 轮询冲突 #150983、微信频道卡住 #8627）表明，**没有严格逐平台测试的插件广度会累积可靠性债务**。开发者应优先选择每个平台深度加固的项目，而非覆盖广但深度浅的平台覆盖。

#### 信号 7：来自 OpenClaw 的企业采用信号

OpenClaw 的 v2026.11.2 隐私模型——将 secrets、对话内容和频道 payloads 排除在诊断日志之外——加上 MCP 授权生命周期和多会话隔离，代表了生态中最具体的企业就绪信号。评估 AI Agent 平台的企业组织应将 OpenClaw 的隐私和信任边界实现作为参考基准。

---

*本报告基于 openclaw/openclaw、NousResearch/hermes-agent、nearai/ironclaw、agentscope-ai/QwenPaw 和 zeroclaw-labs/zeroclaw 的 GitHub 活动数据生成，覆盖截至 2026-11-09 的 24 小时周期。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. I need to:

1. Translate the content accurately while preserving all Markdown structure
2. Use natural technical Chinese suitable for a Chinese developer newsletter
3. Keep all technical terms, code references, URLs, numbers, and identifiers in their original form
4. Maintain the exact formatting - headings, tables, lists, etc.
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: "Hermes Agent Project Digest — 2026-11-09" → "Hermes Agent 项目日报 - 2026-11-09"

Section 1: Today's Overview
- "maintaining high velocity" → 保持高活跃度
- "split across" → 分布在
- "heavily concentrated on" → 高度集中在
- "cross-platform stability issues" → 跨平台稳定性问题

Section 2: Releases
- Keep as short and direct

Section 3: Project Progress
- PR descriptions need careful translation
- Technical terms should stay in English where common

Section 4: Community Hot Topics
- Translate the analysis section with natural Chinese

Section 5: Bugs & Stability
- P1, P2 → P1, P2 (keep as-is is common in Chinese tech)
- "security boundary risk" → 安全边界风险

Section 6: Feature Requests & Roadmap Signals
- "roadmap signals" → 路线图信号
- "high-interest requests" → 高需求请求

Section 7: User Feedback Summary
- "Pain Points Reported Today" → 今日用户痛点
- Translate each pain point naturally

Section 8: Backlog Watch
- "Priority Attention Needed" → 需要优先处理

Let me go through this carefully and produce a natural-sounding Chinese translation.
</think>


# Hermes Agent 项目日报 — 2026-11-09

## 1. 今日概览

Hermes Agent（nousresearch/hermes-agent）保持高活跃度，过去 24 小时内有 **50 个 Issue 和 50 个 PR 更新**，其中 46 个 Issue 处于 open/活跃状态，45 个 PR 处于 open 状态。今日未发布新版本。当前代码版本为 v0.23.0，main 分支位于 commit `444f980`。

开发活动高度集中在平台插件修复上——尤其是 Telegram，仅今日就有 **5 个 PR 合并**，同时多租户架构（session store 迁移、scope 隔离）也在持续推进。社区参与度保持强劲，Slack 状态指示器回归问题关注度最高（14 条评论，16 个 👍）。整体项目状态健康，但面临跨平台稳定性压力（Windows Kanban 卡顿、进程组泄漏）。

---

## 2. 版本发布

**无。** 过去 24 小时内无新版本发布。项目当前基于 v0.23.0，`main` 分支最新 commit 为 `444f980`。

---

## 3. 项目进展

**今日合并/关闭的 PR（5 个）：**

| PR | 描述 | 状态 |
|----|------|------|
| [#151591](https://github.com/NousResearch/hermes-agent/pull/151591) | **fix(approval):** 相对路径、glob 路径和 `..` 路径的删除操作与绝对路径同等对待——将审批逻辑与实际路径解析对齐，而非依赖参数写法 | **MERGED** |
| [#151477](https://github.com/NousResearch/hermes-agent/pull/151477) | **fix(cron):** 通过共享 bot 创建的命名 DM topic 现在正确保存到对应 profile | **MERGED** |
| [#151021](https://github.com/NousResearch/hermes-agent/pull/151021) | **fix(qqbot):** 审批按钮现在只解析其所属的请求（修复 #125039） | Open |
| [#150983](https://github.com/NousResearch/hermes-agent/pull/150983) | **fix(telegram):** 轮询恢复保留冲突窗口内的消息，复用 Updater 处理短时中断，更快捕获无效轮询 | Open |
| [#151062](https://github.com/NousResearch/hermes-agent/pull/151062) | **fix(telegram):** 入口现接受所有文档化的 allowlist 授权（全局 + 群组特定），而非仅匹配第一个 | Open |

**值得关注的其他 Open PR：**

- [#151598](https://github.com/NousResearch/hermes-agent/pull/151598) — `fix(memory):` 在 provider 同步前剥离自动加载的 skill bodies，防止 turn 内容泄漏
- [#151554](https://github.com/NousResearch/hermes-agent/pull/151554) — `feat(state):` Session store 和 turn admission 端口迁移（stacked PR，多租户架构一部分）
- [#151553](https://github.com/NousResearch/hermes-agent/pull/151553) — `feat(state):` 在 claim turn 的写入操作中 fencing 独立事务
- [#149200](https://github.com/NousResearch/hermes-agent/pull/149200) — `feat(scope):` Scope 命名 agent 的 owner；turn 携带其 fence 信息（stacked on #141877）
- [#151042](https://github.com/NousResearch/hermes-agent/pull/151042) — `fix(telegram):` /model picker 现在显示所有 provider，包含大小写混合的名称，并正确截断命名空间 ID

---

## 4. 社区热点

**评论最多的 Issue（按评论数排序）：**

| Issue | 标题 | 评论数 | 👍 | 链接 |
|-------|------|--------|-----|------|
| #110374 | Slack: status indicator 在 slack-sdk ≥3.44 下静默失效 | 14 | 16 | [Issue #110374](https://github.com/NousResearch/hermes-agent/issues/110374) |
| #141919 | ACP 在流式消息 id 下重新发送完整 transformed 最终响应 | 9 | 0 | [Issue #141919](https://github.com/NousResearch/hermes-agent/issues/141919) |
| #135977 | Windows 上 `hermes acp` `session/new` 永久挂起 | 7 | 0 | [Issue #135977](https://github.com/NousResearch/hermes-agent/issues/135977) |
| #80280 | Kanban 超时/被取代的 worker 遗留子进程组存活 | 7 | 1 | [Issue #80280](https://github.com/NousResearch/hermes-agent/issues/80280) |
| #17254 | 🚀 功能请求：多用户偏好记忆 | 7 | 0 | [Issue #17254](https://github.com/NousResearch/hermes-agent/issues/17254) |

**分析：**

- **Slack SDK 回归问题（#110374）** 评论数（14）和点赞数（16）均居首位，表明影响范围广泛。`agents.sessions.setStatus` API 在 slack-sdk ≥3.44 下静默失败并返回 `invalid_arguments`，导致实时状态/typing UX 完全失效。维护者应优先提供兼容性适配层或上游 workaround。
- **多用户偏好记忆（#17254）** 反映了 Issues #28226（Memory OS 提案）中反复出现的主题：多租户部署需要按用户隔离记忆。这是一个高战略价值的功能请求，可能影响 v0.24 路线图规划。
- **Kanban 进程组泄漏（#80280）** 和 **Windows 挂起（#135977）** 共同指向 ACP 和 Kanban 子系统在 Windows 上的系统性不稳定——很可能存在共享的根本原因，涉 subprocess stdout pipe 管理。

---

## 5. Bug 与稳定性

**按严重程度排序（P1–P2）：**

| 优先级 | Issue | 标题 | 平台 | 修复 PR？ | 链接 |
|--------|-------|------|------|-----------|------|
| **P1** | #138337 | `[Bug]`: delegate_task 子进程共享 Anthropic OAuth pool，401 时互相撤销 token，在刷新上限时全部崩溃 | 安全 | — | [Issue #138337](https://github.com/NousResearch/hermes-agent/issues/138337) |
| **P2** | #110374 | Slack status indicator 在 slack-sdk ≥3.44 下静默失效 | Slack | — | [Issue #110374](https://github.com/NousResearch/hermes-agent/issues/110374) |
| **P2** | #141919 | ACP 在流式消息 id 下重新发送完整 transformed 响应，导致重复回复 | ACP | — | [Issue #141919](https://github.com/NousResearch/hermes-agent/issues/141919) |
| **P2** | #135977 | Windows 上 `hermes acp` session/new 永久挂起 | Windows | — | [Issue #135977](https://github.com/NousResearch/hermes-agent/issues/135977) |
| **P2** | #147613 | Kanban worker 在 admission-sequence 15 时确定性卡顿（Windows） | Windows | — | [Issue #147613](https://github.com/NousResearch/hermes-agent/issues/147613) |
| **P2** | #80280 | Kanban worker 遗留子进程组存活 | cron | — | [Issue #80280](https://github.com/NousResearch/hermes-agent/issues/80280) |
| **P2** | #95670 | Discord 交接 thread 创建缺少 type 字段，默认为 private_thread | Discord | — | [Issue #95670](https://github.com/NousResearch/hermes-agent/issues/95670) |
| **P2** | #148365 | Plugins hub 重建耗时 7–46 秒；iOS WebSocket 每 10–60 秒断开 | 性能 | — | [Issue #148365](https://github.com/NousResearch/hermes-agent/issues/148365) |

**今日动态：** Issue [#151542]（相对路径 `rm` 未触发审批）已被合并的 PR [#151591](https://github.com/NousResearch/hermes-agent/pull/151591) 修复。P1 OAuth token 撤销漏洞（#138337）仍未修复，对于使用 Anthropic OAuth + delegation 的生产部署构成安全边界风险。

---

## 6. 功能请求与路线图信号

**高需求请求：**

| Issue | 标题 | 评论数 | 路线图影响 | 链接 |
|-------|------|--------|-----------|------|
| #17254 | 多用户偏好记忆 | 7 | 高 — 多租户隔离主题 | [Issue #17254](https://github.com/NousResearch/hermes-agent/issues/17254) |
| #28226 | 带诊断、清单和隔离测试的 Memory OS 验收层 | 2 | 高 — 与 #17254 互补 | [Issue #28226](https://github.com/NousResearch/hermes-agent/issues/28226) |
| #106919 | 讨论非值守记忆整合的显式 opt-in 机制 | 5 | 中 — 记忆管理 UX | [Issue #106919](https://github.com/NousResearch/hermes-agent/issues/106919) |
| #114195 | UI 本地化 / 语言设置（pt-BR 等） | 2 | 中 — i18n 需求 | [Issue #114195](https://github.com/NousResearch/hermes-agent/issues/114195) |
| #131208 | Vision model ids 默认走 text 路径 — 动态探测可检测支持情况 | 5 | 中 — 鲁棒性 | [Issue #131208](https://github.com/NousResearch/hermes-agent/issues/131208) |

**路线图信号：** Stacked PR 链（#151553 → #151554 → #151555, #149200, #149940, #149924）全部指向 **多租户托管架构**：session store 端口迁移、turn 级别 fencing、owner-scoped tools 和 frozen registries。这强烈暗示 v0.24 将以多租户/托管部署为主攻方向。Issues #17254 和 #28226（多用户记忆隔离）天然契合这一方向。

---

## 7. 用户反馈摘要

**今日用户痛点：**

1. **Windows ACP 完全不可用** — `session/new` 无限挂起；Kanban worker 在 sequence 15 时确定性卡顿。Windows 10 用户报告 ACP adapter 完全失效，暂无文档化 workaround。
2. **Slack SDK 回归** — 升级 slack-sdk 到 3.44.0 以上的用户失去实时状态指示器，但看不到任何错误提示。Issue #110374 获得 16 个 👍 表明影响面广泛；用户 isair 提供了详细的复现步骤。
3. **多用户场景下记忆串台** — Discord、Telegram 和飞书用户报告共享 session 时 Agent A 的偏好会渗透到 Agent B 的响应中。这是按评论量排名第一的功能请求。
4. **Plugin hub 重建 CPU 峰值** — 通过 WebSocket 连接的 iOS 用户在每次请求触发的 plugin hub 重建期间经历 10–60 秒的断连。有用户报告 11 个 profile 的主机 CPU 占用达 85–157%。
5. **危险命令检测不一致** — 用户发现相对路径 `rm` 可以绕过审批，根据命令写法不同产生安全不一致。（今日由 #151591 修复。）

**正面信号：** Telegram 插件的多项改进（轮询恢复、多段落消息、private-topic 回复、allowlist 安全）体现了响应式维护。State store PR stack 表明团队正在积极投资基础设施质量。

---

## 8. 待办事项关注

**需要维护者关注的长期待处理 Issue：**

| Issue | 存在时长 | 标题 | 链接 |
|-------|----------|------|------|
| #17254 | 约 6 个月 | 🚀 功能请求：多用户偏好记忆 | [Issue #17254](https://github.com/NousResearch/hermes-agent/issues/17254) |
| #80280 | 约 3 个月 | Kanban 超时/被取代的 worker 遗留子进程组存活 | [Issue #80280](https://github.com/NousResearch/hermes-agent/issues/80280) |
| #28226 | 约 6 个月 | 提案：多租户 Memory OS 验收层 | [Issue #28226](https://github.com/NousResearch/hermes-agent/issues/28226) |
| #89385 | 约 3 个月 | 添加 session-start hook 以便记忆 provider 自动恢复 | [Issue #89385](https://github.com/NousResearch/hermes-agent/issues/89385) |
| #138337 | 约 1 个月 | P1: delegate_task OAuth token 撤销（安全漏洞） | [Issue #138337](https://github.com/NousResearch/hermes-agent/issues/138337) |

**⚠️ 需要优先处理：**

- **#138337 (P1):** 安全边界漏洞——`delegate_task` 子进程共享 OAuth pool 并互相撤销 token。目前无修复 PR。任何使用 Anthropic OAuth + delegation 的生产部署均存在风险。
- **#110374:** 获得 16 个 👍，该 Slack 回归问题需要兼容性修复或文档化缓解方案。
- **#147613 + #135977:** 两天内提交了两个 Windows Kanban/ACP 卡顿 issue，指向 Windows 上潜在的 pipe 处理系统性回归，需要进行根因分析。

---

*本日报基于 2026-11-09 GitHub API 数据生成（过去 24 小时内 50 个 Issue、50 个 PR 更新）。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate a technical report (a GitHub project digest) from English to Simplified Chinese. Let me go through this carefully:

Key principles:
1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly
3. Keep URLs, project names, usernames, PR numbers as-is
4. Use natural technical Chinese - not literal word-for-word
5. The register should be like a Chinese developer newsletter

Let me translate section by section:

Title: "IronClaw Project Digest — 2026-11-09" → "IronClaw 项目日报 — 2026-11-09"

Section 1: Overview
- "Today's Overview" → "今日概况"
- "IronClaw (nearai/ironclaw) shows steady maintenance activity on November 9, 2026." → "2026年11月9日，IronClaw（nearai/ironclaw）项目保持稳定的维护状态。"
- "zero new releases" → "无新版本发布"
- "zero issues" → "无 Issue"
- "dependency maintenance" → "依赖维护"
- "The project's immediate trajectory appears focused on dependency hygiene and version currency rather than feature development or issue resolution." → "项目近期主要聚焦于依赖健康管理和版本更新，而非功能开发或问题修复。"

Section 2: Releases
- "Today's Overview" → "今日概况"
- "Today's Overview" → "今日概况"
- "Today's Overview" → "今日概况"

Section 3: Project Progress
- "Project Progress" → "项目进展"
- "Merged/Closed" → "已合并/关闭"
- "Open PRs" → "开放 PR"
- "Open PRs (All by dependabot[bot])" → "开放中的 PR（全部来自 dependabot[bot]）"
- Table headers: "Status", "Count", "Details" → "状态", "数量", "详情"


- "Scope" → "范围" or "涉及内容"
- "Updates" → "更新项"
- "Assessment" → "评估"
- "Routine dependency hygiene; no functional changes." → "常规依赖维护；无功能性变更。"

Section 4: Community Hot Topics
- "Community Hot Topics" → "社区热点话题"
- "No issues or PRs with substantive community engagement" → "无实质性社区参与的 Issue 或 PR"
- "The project lacks visible community discussion threads, feature debates, or bug reports from users." → "项目缺少可见的社区讨论、特性讨论或来自用户的 bug 报告。"

Maintainers should consider implementing GitHub Discussions or providing clear issue templates to make it easier for users to share feedback and feature requests.

Section 5: Bugs & Stability
- "Bugs & Stability" → "缺陷与稳定性"
- "No crashes, regressions, or regressions in existing functionality were identified." → "未发现崩溃、功能退化或现有功能回归问题。"

Section 6: Feature Requests & Roadmap Signals
- "Feature Requests & Roadmap Signals" → "功能需求与路线图信号"
- "No feature requests are present in the current data." → "当前数据中无功能需求记录。"
- "The project's development cadence appears passive; no active feature branches or enhancement PRs are visible." → "项目开发节奏呈现被动状态；未观察到活跃的功能分支或增强型 PR。"

If IronClaw operates as an AI agent or personal AI assistant framework, the limited feature activity suggests either a stable maintenance phase or active development happening in private repositories.

Section 7: User Feedback Summary
- "User Feedback Summary" → "用户反馈摘要"
- No user feedback, pain points, or satisfaction/dissatisfaction signals are present in the current dataset.

Section 8: Backlog Watch
- "Backlog Watch" → "待办事项监控"
- "Items Needing Maintainer Attention" → "需要维护者关注的事项"
- "Community Engagement Gap" → "社区参与度缺口"
- "Zero issues (open or closed) in the dataset suggests a need for clearer user communication channels or issue triage." → "数据集中没有 Issue（无论开放还是关闭），表明需要建立更清晰的用户沟通渠道或问题分类机制。"

Summary Table
- "Summary Table" → "摘要表"
- "New Releases" → "新版本发布"
- "Issues (Open/Active)" → "Issue（开放/活跃）"
- "Issues (Closed)" → "Issue（已关闭）"
- "PRs (Open)" → "PR（开放中）"
- "PRs (Merged/Closed)" → "PR（已合并/关闭）"

"Dependency maintenance" → "依赖维护"
- "Dependency maintenance" → "依赖维护"

Digest generated from GitHub data for nearai/ironclaw on 2026-11-09.
→ "本报告数据来源于 nearai/ironclaw 仓库，统计周期截至 2026-11-09。"

The project's dependency maintenance work appears steady and organized. All pending pull requests are dependency-related, with no manual feature or refactoring work currently visible in the backlog.

The repository shows no active feature branches or enhancement pull requests, suggesting either a stable maintenance phase or that development is happening in private branches. If IronClaw operates as an AI agent framework, this could indicate the project is in a holding pattern or actively developed off the main branch.

No user feedback is recorded in the current dataset, leaving the backlog clear but without community signals to guide priorities.

Several items warrant maintainer attention. PR #7834 has been waiting over two months for a WASM dependency group merge—outdated tooling could create compatibility problems down the line. There's also a gap in community engagement, with zero issues appearing in the dataset, which points to unclear user communication channels or missing issue triage processes.
</think>


# IronClaw 项目日报 — 2026-11-09

## 1. 今日概况

IronClaw（nearai/ironclaw）项目在 2026 年 11 月 9 日保持稳定的维护状态。本日**无新版本发布**、**无 Issue**（开放或关闭），过去 24 小时内共有 **6 个 Pull Request** 更新——5 个处于开放状态，1 个已合并/关闭。所有近期活动均为 dependabot 自动化触发的依赖维护工作，涵盖 Rust 生态包、GitHub Actions 和 WebAssembly 工具链。无新功能、Bug 修复或社区驱动的贡献记录。项目近期主要聚焦于依赖健康管理和版本更新，而非功能开发或问题修复。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。

---

## 3. 项目进展

| 状态 | 数量 | 详情 |
|------|------|------|
| **已合并/关闭** | 1 | PR #8160 — `chore(deps): bump everything-else group with 43 updates` |
| **开放 PR** | 5 | 涵盖 Rust、GitHub Actions、WASM 及序列化等依赖更新 |

### 已合并的 PR

- **[#8160](https://github.com/nearai/ironclaw/pull/8160)** — 已关闭
  - **涉及范围：** 43 项 Rust 生态依赖更新（如 `thiserror`、`uuid`、`base64`、`tracing` 等）
  - **提交者：** dependabot[bot]
  - **评估：** 常规依赖维护；无功能性变更。

### 开放中的 PR（全部来自 dependabot[bot]）

| PR | 涉及范围 | 更新项 |
|----|----------|--------|
| [#8169](https://github.com/nearai/ironclaw/pull/8169) | `everything-else` 组 | 44 项 Rust 依赖包更新 |
| [#8141](https://github.com/nearai/ironclaw/pull/8141) | `tokio-ecosystem` 组 | 5 项 Tokio 相关更新（tokio、tokio-test、tokio-util） |
| [#8159](https://github.com/nearai/ironclaw/pull/8159) | `actions` 组 | 11 项 GitHub Actions 更新（Claude Code Action、setup-python 等） |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | `wasm` 组 | 4 项 WebAssembly 更新（wasmtime、wit-component、wit-parser） |
| [#8140](https://github.com/nearai/ironclaw/pull/8140) | `serialization` 组 | serde_json 1.0.151 → 1.0.154 |

**注意：** PR #7834 自 2026 年 8 月 23 日开放至今（约 78 天），至今仍未合并，是目前开放时间最长的依赖类 PR。

---

## 4. 社区热点话题

过去 24 小时内无实质性社区参与的 Issue 或 PR 记录（无评论、无反应数据）。项目缺少可见的社区讨论、功能辩论或来自用户的 Bug 反馈。

**评估：** Issue 和社区互动均为零，可能原因如下：
- 外部用户活跃度较低；或
- 问题正在私下或其他渠道处理。

建议维护者考虑通过 GitHub Discussions 或 Issue 模板等方式鼓励社区反馈，以更好地捕捉用户需求。

---

## 5. 缺陷与稳定性

过去 24 小时内**无 Bug 或稳定性问题**报告。未发现崩溃、功能退化或现有功能回归问题。

---

## 6. 功能需求与路线图信号

当前数据中无功能需求记录。缺乏用户主导的 Issue，导致项目路线图方向可见度有限。

**观察：**
- 所有开放中的 PR 均为自动化依赖更新——无手动功能或重构相关工作待处理。
- 项目开发节奏呈现被动状态；未观察到活跃的功能分支或增强型 PR。
- 若 IronClaw 为 AI Agent 或个人 AI 助手框架（如 nearai 定位所示），功能活动的缺失可能表明项目处于稳定维护期，或正在进行私下开发。

---

## 7. 用户反馈摘要

当前数据中无用户反馈、痛点或满意度/不满意度信号。

---

## 8. 待办事项监控

| 项目 | 持续时间 | 优先级 | 备注 |
|------|----------|--------|------|
| **[#7834](https://github.com/nearai/ironclaw/pull/7834)** | 约 78 天（自 2026-08-23 起开放） | 低（依赖项） | WebAssembly 依赖组更新（wasmtime、wit-component、wit-parser、wasm-tools）。长期悬而未决的依赖更新。 |

### 需要维护者关注的事项

1. **PR #7834** — WebAssembly 依赖组等待合并已超过两个月。虽非紧急，但持续使用旧版工具链可能最终导致兼容性问题。
2. **社区参与度缺口** — 数据集中无任何 Issue 记录（无论开放还是关闭），表明需要建立更清晰的用户沟通渠道或问题分类机制。

---

## 摘要表

| 类别 | 数量 | 状态 |
|------|------|------|
| 新版本发布 | 0 | — |
| Issue（开放/活跃） | 0 | — |
| Issue（已关闭） | 0 | — |
| PR（开放中） | 5 | 依赖维护 |
| PR（已合并/关闭） | 1 | 依赖维护 |

---

*本报告数据来源于 nearai/ironclaw 仓库 GitHub 数据，统计周期截至 2026-11-09。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me carefully translate it while following all the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, code, numbers, dates, project names, usernames, etc. as-is
4. Use natural technical Chinese register

Let me translate section by section:

**Title:**
QwenPaw 项目日报 — 2026-11-09

**Section 1: Today's Overview**
First paragraph translation - need to convey the meaning naturally in Chinese technical context.

**Section 2: Releases**
Straightforward translation.

**Section 3: Project Progress**
The table needs careful translation of technical terms.

**Section 4: Community Hot Topics**
Translate the analysis and discussion points.

**Section 5: Bugs & Stability**
Translate bug descriptions and severity assessments.

**Section 6: Feature Requests & Roadmap Signals**
Translate feature descriptions and roadmap signals.

**Section 7: User Feedback Summary**
Translate pain points and positive signals.

**Section 8: Backlog Watch**
Translate issue descriptions and recommendations.

Let me proceed with the translation:
</think>


# QwenPaw 项目日报 — 2026-11-09

---

## 1. 今日概览

2026 年 11 月 9 日，QwenPaw 呈现出**高开发活跃度**，过去 24 小时内有 14 个 pull request 更新，5 个 issues 处于积极讨论中。今日无新版本发布，表明团队正处于密集开发周期中。项目当前聚焦于修复**关键 bug**（频道配置重置、文件编码保持）、提升**可观测性**（模型回退透明化）以及改善**用户体验**（控制台快捷操作、标签页标题跟随）。值得注意的是，多个首次贡献者的 PR 正在审核中，表明社区参与度健康增长。总体项目状态稳定，但有几个高影响力 bug 需要加速修复。

---

## 2. 版本发布

**今日无新版本发布。** 项目最新版本为桌面端 `2.3.0-beta.2`，pip 安装包最新稳定版仍为 `2.2.2.post1`。

---

## 3. 项目进展

### 活跃开发中的 PR（14 个今日更新）

| PR | 作者 | 类别 | 规模 | 描述 |
|----|--------|----------|------|-------------|
| [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) | AdityaxDeore | fix | L | **部分频道更新时保留 enabled 状态** — 修复了仅更新凭证时频道被静默禁用的严重 bug |
| [#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628) | AdityaxDeore | feat | M | **为 chat response 添加模型回退元数据** — 使静默模型切换在响应中可见 |
| [#8626](https://github.com/agentscope-ai/QwenPaw/pull/8626) | RerankerGuo | feat | M | **定时任务支持 thinking_level 逐个覆盖** — 降低自动化流水线的延迟和 token 消耗 |
| [#8625](https://github.com/agentscope-ai/QwenPaw/pull/8625) | txohyeah | feat | S | 在 recall_history 工具中暴露行级搜索功能 |
| [#8624](https://github.com/agentscope-ai/QwenPaw/pull/8624) | txohyeah | fix | XS | 搜索超时后保留 SQLite 错误信息（保留真实错误原因） |
| [#8623](https://github.com/agentscope-ai/QwenPaw/pull/8623) | txohyeah | fix | S | 复用已解析的轮次边界，避免重复解析工作 |
| [#8568](https://github.com/agentscope-ai/QwenPaw/pull/8568) | ysf7762-dev | fix | S | 在目标工作区内暂存 skill 副本（修复 Windows Hub Local 运行时问题） |
| [#8524](https://github.com/agentscope-ai/QwenPaw/pull/8524) | wxhking | fix | S | 通过解码后的本地路径打开工作区 HTML |
| [#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434) | suantea | feat | S | 在模型页面添加快速添加模型按钮 |
| [#8433](https://github.com/agentscope-ai/QwenPaw/pull/8433) | suantea | fix | M | 在 edit_file 中保留换行符和编码（CRLF 保持） |
| [#8419](https://github.com/agentscope-ai/QwenPaw/pull/8419) | suantea | fix | S | 阻止 shell 自杀保护机制误拦截合法的 `kill $PID` 命令 |
| [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) | suantea | feat | M | 新增 `/steer` 命令，实现执行中 agent 引导 |
| [#7307](https://github.com/agentscope-ai/QwenPaw/pull/7307) | suantea | feat | - | 将 provider 配置直接链入模型管理流程 |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | suantea | fix | - | 为 OAuth2 auth-code 提供商持久化轮换后的 refresh_token |

**关键进展指标：**
- **5 个修复** 解决稳定性和正确性问题
- **6 个功能** 提升用户体验和自动化能力
- **3 个首次贡献者的 PR**（#8568、#8628、#8623）正在审核中
- 贡献者 `suantea` 最为活跃，贡献了 6 个 PR，涵盖 OAuth2、控制台 UX、agent 控制和工具修复

---

## 4. 社区热点话题

### 最活跃讨论

**1. 模型回退可观测性（[Issue #8103](https://github.com/agentscope-ai/QwenPaw/issues/8103)，2 条评论）**
- **话题：** 当 daemon 因 API 故障静默回退到备选模型时，用户未被通知
- **实际影响：** 用户收到意外回复，却无法知晓发生了回退，导致生产工作流中出现困惑
- **关联 PR：** [#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628) 通过在响应中添加 `model_used`、`model_requested`、`fallback_chain` 和 `fallback_occurred` 字段来解决此问题
- **底层需求：** 用户需要 AI 行为透明化，尤其是在生产环境中使用回退链时

**2. QQ 频道静默禁用（[Issue #8475](https://github.com/agentscope-ai/QwenPaw/issues/8475)，2 条评论）**
- **话题：** `config.json` 中的 `enabled` 标志在配置重载/重启后被静默重置为 `false`
- **影响：** Bot 停止接收/发送 QQ 消息，但没有任何警告或日志记录
- **关联 PR：** [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) 修复部分频道更新验证逻辑
- **底层需求：** 用户需要在重启后可靠地保持频道状态

**3. 控制台 UX 精简（[PR #7307](https://github.com/agentscope-ai/QwenPaw/pull/7307)、[#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434)）**
- **话题：** 当前添加模型需要跨多个页面共 5 步操作
- **底层需求：** 高级用户希望更快的上手流程；团队正在推进统一的"快速添加"工作流

---

## 5. Bug 与稳定性

### 严重 Bug

| Issue | 严重程度 | 描述 | 修复 PR | 状态 |
|-------|----------|-------------|--------|--------|
| [#8475](https://github.com/agentscope-ai/QwenPaw/issues/8475) | **高** | QQ 频道 `enabled` 标志在配置重载后被静默重置 | [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) | Open |
| [#8629](https://github.com/agentscope-ai/QwenPaw/issues/8629) | **高** | 超大历史图片在每次模型调用时被重复发送；"Image loaded" 文本持续显示 | None | Open |
| [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) | **高** | Checkpoint 服务在 Git 长路径前缀下失败；微信频道卡死 | None | Open |

### 中等严重程度问题

| Issue | 严重程度 | 描述 | 修复 PR | 状态 |
|-------|----------|-------------|--------|--------|
| [#8433](https://github.com/agentscope-ai/QwenPaw/pull/8433) | Medium | `edit_file` 将 CRLF 转换为 LF 并损坏非 UTF-8 文件 | [#8433](https://github.com/agentscope-ai/QwenPaw/pull/8433) | Open |
| [#8624](https://github.com/agentscope-ai/QwenPaw/pull/8624) | Medium | SQLite `OperationalError` 被重写为 `TimeoutError`，掩盖真实错误 | [#8624](https://github.com/agentscope-ai/QwenPaw/pull/8624) | Open |
| [#8419](https://github.com/agentscope-ai/QwenPaw/pull/8419) | Medium | Shell 自杀保护机制误拦截合法的 `kill $PID` 命令 | [#8419](https://github.com/agentscope-ai/QwenPaw/pull/8419) | Open |

**稳定性评估：** 三个严重 bug 尚无修复 PR，需要维护者关注。频道状态损坏和超大图片问题会影响生产部署。

---

## 6. 功能需求与路线图信号

### 用户请求的功能

| Issue/PR | 描述 | 纳入可能性 |
|----------|-------------|-------------------------|
| [#8605](https://github.com/agentscope-ai/QwenPaw/issues/8605) | **浏览器标签页标题跟随会话名称** — 支持多标签页区分 | 高 — 简单的 UX 提升 |
| [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) | **`/steer` 命令** — 执行中引导 agent 而不丢失进度 | 中高 — 长时任务用户体验显著改善 |
| [#8626](https://github.com/agentscope-ai/QwenPaw/pull/8626) | **定时任务支持 thinking_level 逐个覆盖** — 降低自动化工作流成本 | 高 — 解决真实运营成本问题 |
| [#8625](https://github.com/agentscope-ai/QwenPaw/pull/8625) | **recall_history 行级搜索** — 优化内存搜索性能 | 中 — 面向开发者的优化 |

### 路线图信号
- **可观测性聚焦：** 多个 PR（#8628、#8103）致力于提升 AI 行为透明度
- **控制台 UX 整合：** 持续推进降低模型/provider 配置门槛
- **Windows/平台一致性改进：** 修复 Windows Hub Local 运行时问题（#8568）和长路径支持（#8627）

---

## 7. 用户反馈摘要

### 已识别痛点

1. **静默失败导致生产故障** — 用户反映 bot 意外停机（QQ 频道被禁用），没有任何警告日志，迫使被动式调试
2. **模型行为不透明** — 当使用回退模型时，用户收到的回复无法显示实际由哪个模型服务
3. **多标签页混淆** — 管理多个对话的用户无法通过标题区分标签页
4. **文件损坏风险** — 用户编辑非 UTF-8 或 Windows 文件时看到意外的编码变化
5. **工作流摩擦** — 添加模型需要跨多个页面操作；定时任务产生不必要的推理成本

### 正面反馈信号
- 社区贡献活跃（首次贡献者提交修复）
- Issues 响应及时（每个关键 issue 都有 2 条评论）
- 功能开发稳步推进，解决 UX 痛点

---

## 8. 待办事项关注

### 需要维护者关注的 Issues

| Issue | 存在时长 | 优先级 | 描述 |
|-------|-----|----------|-------------|
| [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) | 约 36 天 | 高 | 模型回退静默执行，缺乏用户通知 — 修复 PR 已存在，需合并 |
| [#8475](https://github.com/agentscope-ai/QwenPaw/issues/8475) | 约 12 天 | Critical | 频道状态损坏 — 修复 PR 已存在，需审核 |
| [#8629](https://github.com/agentscope-ai/QwenPaw/issues/8629) | 1 天 | Critical | 超大图片重复发送 — 尚无修复 PR |
| [#8627](https://github.com/agentscope-ai/QwenPaw/issues/8627) | 1 天 | Critical | Windows 平台 Checkpoint + 微信故障 — 尚无修复 PR |

### 长期搁置的 PRs

| PR | 存在时长 | 描述 | 阻塞原因 |
|----|-----|-------------|---------|
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | 约 85 天 | OAuth2 refresh_token 持久化 | 审核中 |
| [#7307](https://github.com/agentscope-ai/QwenPaw/pull/7307) | 约 75 天 | 将 provider 配置链入模型管理 | 审核中 |
| [#8318](https://github.com/agentscope-ai/QwenPaw/pull/8318) | 约 21 天 | 执行中引导的 `/steer` 命令 | 审核中 |

**建议：** 优先审核 [#8630](https://github.com/agentscope-ai/QwenPaw/pull/8630) 和 [#8628](https://github.com/agentscope-ai/QwenPaw/pull/8628)，以关闭影响用户的严重 issues。过去 24 小时内产生的 3 个严重 bug（#8629、#8627，以及 QQ 频道问题）需要分类并分配修复人员。

---

*生成时间：2026-11-09 | 数据来源：过去 24 小时内 GitHub 活动记录*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the text content to Simplified Chinese
2. Preserve all Markdown structure exactly
3. Keep URLs, links, issue numbers, code, etc. as-is
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate this report:

Title: ZeroClaw Project Digest — 2026-11-09

Let me translate section by section...

"Today's Overview" - 今天概览
"Overview" - 概览
"Releases" - 发版动态
"Project Progress" - 项目进展
"Community Hot Topics" - 社区热点
"Bugs & Stability" - Bug 与稳定性
"Feature Requests & Roadmap Signals" - 功能请求与路线图信号
"User Feedback Summary" - 用户反馈摘要
"Backlog Watch" - 待办关注

Let me translate the full text now, making sure to use proper technical Chinese terminology.
</think>


# ZeroClaw 项目日报 — 2026-11-09

## 1. 今日概览

ZeroClaw 保持极高的开发活跃度，过去 24 小时内有 50 个 PR 和 13 个 issue 更新，标志着 v0.9.0 发版前夕代码库处于高度活跃状态。安全加固是当前工作重心——配对令牌绑定、名册密码验证、命令语法检查等多项工作并行推进。v0.9.0 追踪项（#7432）确认运行时、仪表盘登录和网关交付仍是主要的发版门槛。值得注意的是，一个 bug 已关闭（#10501，MCP 图片处理），同时新增两个高严重性 bug：受限制委托的目标将文件系统解析到委托者工作空间而非自身工作空间（#9872），以及已禁用的代理仍可通过操作员聊天和受限 RPC 执行任务（#12289）。项目跨平台战略体现在持续的 Windows 和 macOS CI 扩展（#7461）以及文件系统通道加固（#11394、#11406）中。

---

## 2. 发版动态

**过去 24 小时内无新版本发布。**

v0.9.0 里程碑仍处于活跃状态，在 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 下追踪。关键交付项包括运行时改进、仪表盘登录功能和网关交付增强。

---

## 3. 项目进展

### 今日合并/关闭的 PR（2 个值得关注的）

| PR | 标题 | 状态 |
|----|------|------|
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | **feat(session): 实现只追加会话事件历史** | **已合并** |
| [#11406](https://github.com/zeroclaw-labs/zeroclaw/pull/11406) | fix(config)!: 拒绝 macOS 宽泛根路径进入文件系统通道 | 已关闭 |
| [#11268](https://github.com/zeroclaw-labs/zeroclaw/pull/11268) | docs(auth): 统一网关策略发布指南 | 已关闭 |

**关键进展——会话历史（#11921）：**
只追加式会话事件历史功能已落地，用统一的共享历史替换了分离的转录写入器。它记录接受的输入、模型推理尝试、工具执行、审批、失败、模型变更、上下文压缩和子代理行为——这是可审计性和调试能力的基础性变更。

### 推进中的主要 Open PR

| PR | 标题 | 优先级标签 |
|----|------|-----------|
| [#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) | feat(relay): 通过中继服务守护进程的 Web 仪表盘（v0.9.0） | risk:high, size:XL |
| [#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286) | feat(security): 将网关配对令牌绑定到名册用户 | priority:p2, risk:high |
| [#11994](https://github.com/zeroclaw-labs/zeroclaw/pull/11994) | feat(security): 以 bash 语法读取 POSIX 命令 | security:policy |
| [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) | feat(gateway): 通过 RPC 将插件 Webhook 转发到核心 | risk:high, size:XL |
| [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) | feat(rpc): 通过核心 RPC 分发插件 Webhook | risk:high, size:XL |
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | fix(agents): 在 CLI、网关和 RPC 间共享持久化提交重命名恢复 | priority:p1, risk:high |
| [#11805](https://github.com/zeroclaw-labs/zeroclaw/pull/11805) | fix(cli): 在 Windows 上发送授权编辑前验证命名管道服务器 | risk:high, size:XL |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | feat(channels): Gemini 语音到语音代理通道 | risk:high, size:XL |
| [#11264](https://github.com/zeroclaw-labs/zeroclaw/pull/11264) | feat(security): 通过密码认证提供者验证名册密码 | priority:p2, risk:high |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | fix(cli): 从 config set 和 config patch 发布授权编辑 | priority:p1, risk:high |

---

## 4. 社区热点

### 最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 关键主题 |
|-------|------|--------|----------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [追踪项] 运行时、仪表盘登录和网关交付 | 16 | v0.9.0 发版路线图、时序安排、验收依据 |
| [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | [Bug] 受限委托目标将文件系统解析到委托者工作空间 | 5 | 安全/沙箱隔离失效 |
| [#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) | [功能] 使对等代理轮次持久化且可归因 | 5 | 代理生命周期、对等消息架构 |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | [功能] 在 CI 中运行 Windows 和 macOS 测试套件 | 5 | 跨平台质量保证 |
| [#11985](https://github.com/zeroclaw-labs/zeroclaw/issues/11985) | [任务] JWKS 验证下作用域化仪表盘聊天的网关测试 | 2 | 安全测试、JWKS 认证 |
| [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | [功能] 无管理员权限的登录账户的仪表盘聊天 | 2 | RBAC、非管理员仪表盘访问 |

### 分析

围绕 **#7432**（16 条评论）的讨论确认 v0.9.0 发版正处于积极协调阶段。**工作空间隔离 bug（#9872）** 引发了显著关注——受限委托应在沙箱中执行文件操作，但当前行为将路径泄露到委托者工作空间，这是高严重性安全问题。**#9597** 反映了使对等代理通信可审计和可恢复的持续架构工作。**CI 扩展（#7461）** 表明社区对生产级跨平台质量保障有迫切需求。

---

## 5. Bug 与稳定性

### 今日新增 Bug

| 严重级别 | Issue | 描述 | 修复 PR？ |
|----------|-------|------|-----------|
| **S2**（高） | [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | 受限委托将文件写入委托者工作空间而非自身工作空间 | 暂无 |
| **S2**（高） | [#12289](https://github.com/zeroclaw-labs/zeroclaw/issues/12289) | 已禁用代理仍通过操作员聊天和受限 RPC 执行任务 | 暂无 |
| **S2**（高） | [#12288](https://github.com/zeroclaw-labs/zeroclaw/issues/12288) | "全部放弃" 保留了后续分区保存会持久化的表单草稿 | 暂无 |

### Bug 修复进展

| Issue | 描述 | 状态 |
|-------|------|------|
| [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) | OpenAI 兼容提供商的 MCP 工具结果图片返回 400 | **已关闭** — 已解决 |
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | 实现只追加会话事件历史（稳定性/可审计性） | **已合并** |

### 稳定性评估

今日报告了三个新的 S2 级别 bug，均无活跃修复 PR。**工作空间隔离问题（#9872）** 和 **禁用代理绕过（#12289）** 代表了需要及时处理的安全相关回归。会话历史合并（#11921）提升了系统整体可审计性。

---

## 6. 功能请求与路线图信号

### 今日提交的功能请求

| Issue | 标题 | 领域 | 预计进入 v0.9.0？ |
|-------|------|------|------------------|
| [#12296](https://github.com/zeroclaw-labs/zeroclaw/issues/12296) | 运行时生成 zsh 时检查 zsh 语法中的命令 | 安全/Shell | 大概率（跟进 #11994） |
| [#12290](https://github.com/zeroclaw-labs/zeroclaw/issues/12290) | 允许非管理员账户创建其拥有的代理，高风险字段受限 | RBAC/配置 | 可能 |
| [#12287](https://github.com/zeroclaw-labs/zeroclaw/issues/12287) | 跨接收者轮次约束对等中继链（A → B → A） | 代理架构 | 可能（跟进 #9597） |

### 活跃功能开发（路线图指标）

| PR | 功能 | 里程碑对应 |
|----|------|-----------|
| [#12270](https://github.com/zeroclaw-labs/zeroclaw/pull/12270) | 通过中继服务守护进程 Web 仪表盘 | v0.9.0 |
| [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | 非管理员账户的仪表盘聊天 | v0.9.0 |
| [#12096](https://github.com/zeroclaw-labs/zeroclaw/issues/12096) | 身份提供程序不可达时保持仪表盘登录 | v0.9.0 |
| [#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286) | 将网关配对令牌绑定到名册用户 | 安全重点 |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | Gemini 语音到语音代理通道 | 通道扩展 |

v0.9.0 发版似乎以**仪表盘/网关改进**和**运行时加固**为核心。zsh 语法检查（#12296）是 bash 语法安全工作（#11994）的自然延伸，两者都聚焦于 Shell 命令策略的精确性。

---

## 7. 用户反馈摘要

基于 issue 和 PR 模式分析：

**已识别的痛点：**
- **工作空间隔离失效**：受限委托中的多代理部署存在非预期文件访问风险（#9872）
- **已禁用代理仍可执行**：在操作员和 RPC 访问路径中产生安全缺口（#12289）
- **表单草稿生命周期混乱**：放弃操作未完全重置 UI 状态（#12288）
- **跨平台 CI 缺口**：测试仅在 Linux 上运行，Windows 和 macOS 用户缺乏验证（#7461）
- **提供程序故障韧性不足**：身份提供程序瞬时不可达时仪表盘会话即终止（#12096）

**满意度信号：**
- **只追加会话历史**（#11921）解决了长期以来的可审计性需求
- **非管理员仪表盘聊天**（#11984）拓展了 RBAC 部署的真实场景
- **配对令牌绑定**（#11286）支持企业级用户作用域设备授权

---

## 8. 待办关注

需要维护者关注的重要项目：

| 项目 | 标题 | 存在时间 | 状态 | 关注点 |
|------|------|----------|------|--------|
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | 在 CI 中运行 Windows 和 macOS 测试套件 | 5+ 个月 | 进行中 | 跨平台质量门控不完整 |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | Gemini 语音到语音代理通道 | 2+ 个月 | open | 大型功能，需评审 |
| [#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286) | 将网关配对令牌绑定到名册用户 | 约 6 周 | open | 安全功能，需评审 |
| [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) | 通过 RPC 将插件 Webhook 转发到核心 | 约 5 周 | open，堆叠 | 插件架构变更 |
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | 在 CLI、网关和 RPC 间共享持久化提交重命名恢复 | 约 5 周 | open | Priority:p1，影响所有代理 |
| [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | 受限委托工作空间隔离 bug | 约 3 个月 | open | 安全/沙箱回归 |
| [#12289](https://github.com/zeroclaw-labs/zeroclaw/issues/12289) | 已禁用代理绕过运行时 | 1 天 | open | 新安全 bug，需分类 |

---

*本日报基于 zeroclaw-labs/zeroclaw 于 2026-11-09 生成。所有 issue/PR 链接指向 https://github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*