# OpenClaw 生态日报 2026-10-10

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-10 01:53 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English OpenClaw project digest into Chinese, following specific translation rules. Let me analyze the content and translate it while preserving the exact Markdown structure, URLs, numbers, code references, etc.

The content includes:
1. Overview section
2. Releases (none)
3. Project Progress (tables with PRs)
4. Community Hot Topics (tables)
5. Bugs & Stability (P0 and P1 issues in tables)
6. Feature Requests
7. User Feedback Summary
8. Backlog Watch

I need to:
- Keep all Markdown structure exactly (headings, tables, lists, emojis, horizontal rules)
- Keep URLs, numbers, issue/PR references, version tags, file paths as-is
- Use natural technical Chinese (中文技术 Newsletter 的语体风格)
- Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

---

# OpenClaw 项目摘要 — 2026-10-10

## 1. 今日概览

2026年10月10日，OpenClaw 呈现**高活跃度**，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。目前有 399 个 open issue 和 352 个 open PR，其中 101 个 issue 和 148 个 PR 已关闭/合并。今日未发布新版本。多个 **P0/ux-release-blocker** 问题仍为热点，尤其是 SQLite WAL 增长、更新机制和插件加载性能相关的问题。社区参与度高，核心问题讨论热烈（最高关注的问题有 115 条评论）。

---

## 2. 版本发布

过去 24 小时内**未发布新版本**。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#167902](https://github.com/openclaw/openclaw/pull/167902) | fix(llama-cpp): 回收 macOS 上的孤儿托管服务器 | L | CLOSED |
| [#168025](https://github.com/openclaw/openclaw/pull/168025) | fix(storage): 发布沙箱、工作树和 GitHub 授权凭证 | XL | CLOSED |
| [#168071](https://github.com/openclaw/openclaw/pull/168071) | feat(x): 通过 GitHub 配置文件验证仓库写者权限 | XL | CLOSED |
| [#162047](https://github.com/openclaw/openclaw/issues/162047) | Windows 2026.9.7 升级 Doctor 运行缓慢 | — | CLOSED (Issue) |
| [#129750](https://github.com/openclaw/openclaw/issues/129750) | DashScope embedBatch 超出 10 项限制 | — | CLOSED (Issue) |

### 重要进展

- **Llama-cpp macOS 修复**：现在可以正确回收孤儿托管服务器
- **存储凭证**：沙箱、工作树和 GitHub 授权凭证现在能够稳定发布
- **OAuth 防护**：单调时钟避免了时钟偏移导致的刷新超时问题
- **会话预览**：波浪号保护的代码块不再遮挡预览文本

---

## 4. 社区热点

### 评论最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 回应 |
|-------|------|--------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 增长至 1.4–2.8 GB，阻止网关启动 | 115 | 👍 0 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 未回收子进程泄漏，僵尸进程堆积 | 18 | 👍 1 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM 回复在持久化注册表切换时失败 | 18 | 👍 0 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 僵持的 agent-DB 资源导致所有 agent 回复失败 | 17 | 👍 0 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 跨渠道的重复转录、重放、上下文组装 | 16 | 👍 0 |

### 关注度最高的 PR（按互动数排序）

| PR | 标题 | 状态 |
|----|------|------|
| [#168076](https://github.com/openclaw/openclaw/pull/168076) | 功能：显式整理和归档嵌套对话 | OPEN |
| [#168042](https://github.com/openclaw/openclaw/pull/168042) | 性能优化(anthropic)：保留对话缓存检查点 | 等待维护者审核 |
| [#168059](https://github.com/openclaw/openclaw/pull/168059) | 性能优化(control-ui)：预加载原生插件资源 | 等待维护者审核 |
| [#103201](https://github.com/openclaw/openclaw/pull/103201) | 修复(memory)：会话同步删除并重新嵌入每个块 | 等待作者补充 |

### 分析

**SQLite WAL 增长问题 (#143524)** 是讨论焦点——用户反映 WAL 文件已达 2.8 GB，尽管配置了 `wal_autocheckpoint=1000`，仍导致网关启动阻塞。这是**重大数据完整性和运维可靠性问题**。

---

## 5. 缺陷与稳定性

### P0（严重 / 发布阻断）

| Issue | 标题 | 严重程度 | 修复 PR？|
|-------|------|----------|----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 增长至 1.4–2.8 GB，阻止启动 | 🔴 ux-release-blocker | 无 |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | 更新永久卡在 update-recovery-pending | 🔴 ux-release-blocker | 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 网关阻塞数分钟以捕获大型插件 | 🔴 crash-loop | 无 |
| [#156986](https://github.com/openclaw/openclaw/issues/156986) | openclaw 更新卡在 update-candidate-state | 🔴 ux-release-blocker | 无 |
| [#162047](https://github.com/openclaw/openclaw/issues/162047) | Windows 2026.9.7 升级 Doctor 耗时 39 分钟 | 🔴 ux-release-blocker | 无 |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | 更新失败：managed-service-preflight | 🔴 ux-release-blocker | 无 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 计费冷却时间超过中断时长 | 🔴 ux-release-blocker | 无 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 托管内存根被静默排除在引导之外 | 🔴 security, ux-release-blocker | 无 |

### P1（高优先级）

| Issue | 标题 | 严重程度 | 修复 PR？|
|-------|------|----------|----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 未回收子进程泄漏，僵尸进程堆积 | 🟠 message-loss, crash-loop | 无 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM 回复在注册表切换时失败 | 🟠 message-loss | 无 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 僵持的 agent-DB 资源导致所有回复失败 | 🟠 message-loss | 无 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | 内存文件监视器从不重新索引 | 🟠 session-state | 无 |

---

## 6. 需求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 需求 |
|-------|------|------|
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 向导应包含 Memory/Embedding 配置 | 📢 产品决策 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 减少工具模式 token 开销（~3,500 tok/会话）| 📢 产品决策 |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | 每个 Agent 的 TTS/STT 配置覆盖 | 📢 产品决策 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 每次模型使用的日志记录用于成本追踪 | 📢 产品决策 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | 投递队列消息的 TTL/过期时间 | 📢 产品决策 |

### 下一版本的信号

综合考虑**多个插件性能修复**（#168042、#168059、#160959）、**内存同步低效**（#103201）和 **SQLite 检查点问题**，下一版本可能重点关注：
- **性能**：插件加载、会话缓存、内存索引
- **稳定性**：WAL 检查点、更新机制
- **开发者体验**：入职改进、成本追踪

---

## 7. 用户反馈总结

### 痛点

1. **数据库/阻塞问题**：用户对 SQLite WAL 增长到数 GB、导致网关完全无法启动感到沮丧
2. **更新失败**：多个用户卡在旧版本，无法恢复（#167771、#156986、#158231）
3. **插件加载**：大型插件导致事件循环阻塞数分钟（#160959）
4. **Windows 性能**：Windows 上准备时间约 220 秒，Doctor 耗时 39 分钟（#159499、#162047）
5. **内存损坏**：托管内存根被静默排除，无诊断信息（#153426）

### 积极信号

- 修复 PR 获得正面回应（如 #167902、#168025）
- 社区在评论中积极参与调试（核心问题有 115 条评论）
- 多个回归报告表明用户正在测试预发布版本

---

## 8. 待办关注

### 长期未解决的重要 Issue

| Issue | 标题 | 时长 | 状态 |
|-------|------|------|------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 跨渠道重复转录/重放 | 约 6 个月 | OPEN |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 Agent 编排不稳定 | 约 7 个月 | OPEN |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 代码中的硬编码工作路径 | 约 7 个月 | OPEN |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro 膨胀 + 会话失败 | 约 7 个月 | Stale |

### 需要维护者关注的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#168042](https://github.com/openclaw/openclaw/pull/168042) | 性能优化(anthropic)：保留对话缓存检查点 | 👀 等待维护者审核 |
| [#168059](https://github.com/openclaw/openclaw/pull/168059) | 性能优化(control-ui)：预加载原生插件资源 | 👀 等待维护者审核 |
| [#103201](https://github.com/openclaw/openclaw/pull/103201) | 修复(memory)：会话同步删除并重新嵌入块 | ⏳ 等待作者补充 |
| [#150149](https://github.com/openclaw/openclaw/pull/150149) | 修复(vllm)：遵守声明的推理工作 | 📣 需要提供证明 |

---

*生成时间：2026-10-10 | 数据来源：GitHub OpenClaw (openclaw/openclaw)*

---

规则：
- 仅输出翻译内容。不添加前言、解释或 Markdown  fences。
- 完全保留 Markdown 结构：标题、表格（含对齐行）、列表、引用、粗体/斜体、水平线、emoji。
- 保留 URL、链接目标、代码 span、代码块、数字和日期的原始形式。
- 保留项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文，中文开发者 Newsletter 的语体风格——而非逐字直译。

The translation maintains the original structure with all tables, headings, and markdown elements preserved while converting to natural Chinese technical writing style. All numbers, URLs, issue references, and technical terms remain unchanged as specified.</think>

# OpenClaw 项目摘要 — 2026-10-10

## 1. 今日概览

2026年10月10日，OpenClaw 呈现**高活跃度**，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。目前有 399 个 open issue 和 352 个 open PR，其中 101 个 issue 和 148 个 PR 已关闭/合并。今日未发布新版本。多个 **P0/ux-release-blocker** 问题仍为热点，尤其是 SQLite WAL 增长、更新机制和插件加载性能相关的问题。社区参与度高，核心问题讨论热烈（最高关注的问题有 115 条评论）。

---

## 2. 版本发布

过去 24 小时内**未发布新版本**。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#167902](https://github.com/openclaw/openclaw/pull/167902) | fix(llama-cpp): 回收 macOS 上的孤儿托管服务器 | L | CLOSED |
| [#168025](https://github.com/openclaw/openclaw/pull/168025) | fix(storage): 发布沙箱、工作树和 GitHub 授权凭证 | XL | CLOSED |
| [#168071](https://github.com/openclaw/openclaw/pull/168071) | feat(x): 通过 GitHub 配置文件验证仓库写者权限 | XL | CLOSED |
| [#162047](https://github.com/openclaw/openclaw/issues/162047) | Windows 2026.9.7 升级 Doctor 运行缓慢 | — | CLOSED (Issue) |
| [#129750](https://github.com/openclaw/openclaw/issues/129750) | DashScope embedBatch 超出 10 项限制 | — | CLOSED (Issue) |

### 重要进展

- **Llama-cpp macOS 修复**：现在可以正确回收孤儿托管服务器
- **存储凭证**：沙箱、工作树和 GitHub 授权凭证现在能够稳定发布
- **OAuth 防护**：单调时钟避免了时钟偏移导致的刷新超时问题
- **会话预览**：波浪号保护的代码块不再遮挡预览文本

---

## 4. 社区热点

### 评论最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 回应 |
|-------|------|--------|------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 增长至 1.4–2.8 GB，阻止网关启动 | 115 | 👍 0 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 未回收子进程泄漏，僵尸进程堆积 | 18 | 👍 1 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM 回复在持久化注册表切换时失败 | 18 | 👍 0 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 僵持的 agent-DB 资源导致所有 agent 回复失败 | 17 | 👍 0 |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 跨渠道的重复转录、重放、上下文组装 | 16 | 👍 0 |

### 关注度最高的 PR（按互动数排序）

| PR | 标题 | 状态 |
|----|------|------|
| [#168076](https://github.com/openclaw/openclaw/pull/168076) | 功能：显式整理和归档嵌套对话 | OPEN |
| [#168042](https://github.com/openclaw/openclaw/pull/168042) | perf(anthropic): 保留对话缓存检查点 | 准备就绪，待维护者审核 |
| [#168059](https://github.com/openclaw/openclaw/pull/168059) | perf(control-ui): 预加载原生插件资源 | 准备就绪，待维护者审核 |
| [#103201](https://github.com/openclaw/openclaw/pull/103201) | fix(memory): 会话同步删除并重新嵌入每个块 | 等待作者 |

### 分析

**SQLite WAL 增长问题 (#143524)** 是讨论焦点——用户反映 WAL 文件已达 2.8 GB，尽管配置了 `wal_autocheckpoint=1000`，仍导致网关启动阻塞。这是**重大数据完整性和运维可靠性问题**。

---

## 5. 缺陷与稳定性

### P0（严重 / 发布阻断）

| Issue | 标题 | 严重程度 | 修复 PR？|
|-------|------|----------|----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 增长至 1.4–2.8 GB，阻止启动 | 🔴 ux-release-blocker | 否 |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | 更新永久卡在 update-recovery-pending | 🔴 ux-release-blocker | 否 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 网关阻塞数分钟捕获大型插件 | 🔴 crash-loop | 否 |
| [#156986](https://github.com/openclaw/openclaw/issues/156986) | openclaw 更新卡在 update-candidate-state | 🔴 ux-release-blocker | 否 |
| [#162047](https://github.com/openclaw/openclaw/issues/162047) | Windows 2026.9.7 升级 Doctor 耗时 39 分钟 | 🔴 ux-release-blocker | 否 |
| [#158231](https://github.com/openclaw/openclaw/issues/158231) | 更新失败：managed-service-preflight | 🔴 ux-release-blocker | 否 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 计费冷却时间超过中断时长 | 🔴 ux-release-blocker | 否 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 托管内存根被静默排除在引导之外 | 🔴 security, ux-release-blocker | 否 |

### P1（高优先级）

| Issue | 标题 | 严重程度 | 修复 PR？|
|-------|------|----------|----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 未回收子进程泄漏，僵尸进程堆积 | 🟠 message-loss, crash-loop | 否 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM 回复在注册表切换时失败 | 🟠 message-loss | 否 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 僵持的 agent-DB 资源导致所有回复失败 | 🟠 message-loss | 否 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | 内存文件监视器从不重新索引 | 🟠 session-state | 否 |

---

## 6. 需求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 需求 |
|-------|------|------|
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | 向导应包含 Memory/Embedding 配置 | 📢 产品决策 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | 减少工具模式 token 开销（~3,500 tok/会话）| 📢 产品决策 |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | 每个 Agent 的 TTS/STT 配置覆盖 | 📢 产品决策 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 每次模型使用的日志记录用于成本追踪 | 📢 产品决策 |
| [#16555](https://github.com/openclaw/openclaw/issues/16555) | 投递队列消息的 TTL/过期时间 | 📢 产品决策 |

### 下一版本的信号

**多个插件性能修复**（#168042、#168059、#160960）以及**内存同步低效**（#103201）和 **SQLite 检查点问题** 表明下一个版本可能集中在：
- **性能**：插件加载、会话缓存、内存索引
- **稳定性**：WAL 检查点、更新机制
- **开发者体验**：入职引导改进、成本追踪

---

## 7. 用户反馈总结

### 痛点

1. **数据库/阻塞问题**：用户对 SQLite WAL 增长到数 GB、导致网关完全无法启动感到沮丧
2. **更新失败**：多个用户卡在旧版本，无法恢复（#167771、#156986、#158231）
3. **插件加载**：大型插件导致事件循环阻塞数分钟（#160959）
4. **Windows 性能**：Windows 上准备时间约 220 秒，Doctor 耗时 39 分钟（#159499、#162047）
5. **内存损坏**：托管内存根被静默排除，无诊断信息（#153426）

### 积极信号

- 修复 PR 获得正面回应（如 #167902、#168025）
- 社区在评论中积极参与调试（核心问题有 115 条评论）
- 多个回归报告表明用户正在测试预发布版本

---

## 8. 待办关注

### 长期未解决的重要 Issue

| Issue | 标题 | 时长 | 状态 |
|-------|------|------|------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 跨渠道重复转录/重放 | 约 6 个月 | OPEN |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 Agent 编排不稳定 | 约 7 个月 | OPEN |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 代码中的硬编码工作路径 | 约 7 个月 | OPEN |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro 膨胀 + 会话失败 | 约 7 个月 | Stale |

### 需要维护者关注的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#168042](https://github.com/openclaw/openclaw/pull/168042) | perf(anthropic): 保留对话缓存检查点 | 👀 准备就绪，待维护者审核 |
| [#168059](https://github.com/openclaw/openclaw/pull/168059) | perf(control-ui): 预加载原生插件资源 | 👀 准备就绪，待维护者审核 |
| [#103201](https://github.com/openclaw/openclaw/pull/103201) | fix(memory): 会话同步删除并重新嵌入块 | ⏳ 等待作者 |
| [#150149](https://github.com/openclaw/openclaw/pull/150149) | fix(vllm): 遵守声明的推理工作 | 📣 需要证明 |

---

*生成时间：2026-10-10 | 数据来源：GitHub OpenClaw (openclaw/openclaw)*

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep all Markdown structure exactly the same (headings, tables, lists, etc.)
3. Keep URLs, project names, repository slashes, version numbers, issue/PR numbers as-is
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me go through each section and translate carefully while preserving all formatting.</think>

# 跨项目对比报告：个人 AI 助手生态系统

---

## 1. 生态系统概述

2026 年底的个人 AI 助手和 Agent 框架领域呈现出高度活跃但碎片化的生态。四大开源项目——OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw——都在快速迭代，分别攻克网关可靠性、桌面端体验、用户界面本地化以及协议层互操作等不同挑战。今天四个项目均无版本发布，表明当前处于开发周期阶段而非发布节奏阶段。**上下文/窗口管理**、**插件架构**、**多渠道集成**（Telegram、WhatsApp）、**成本可观测性**以及**安全加固**（MCP 允许列表、漏洞修复）是贯穿所有项目的共同主题。该领域成熟到足以形成可复现的 bug 类别（内存泄漏、会话损坏、升级失败），但仍快速演进，RFC 活动预示着架构层面的雄心。

---

## 2. 活动对比

| 项目 | Issue 更新（24h）| 开放 Issue | PR 更新（24h）| 开放 PR | 发布（24h）| 健康信号 |
|---------|---------------------|-------------|-------------------|----------|-----------------|---------------|
| **OpenClaw** | 500 | ~399 | 500 | ~352 | 0 | ⚠️ 高活跃度，多个 P0 阻塞项 |
| **Hermes Agent** | 50 | ~48 | 50 | ~41 | 0 | 🟡 中等，安全问题 |
| **QwenPaw** | 21 | ~13 | 35 | ~22 | 0 | 🟢 稳定，安全关键补丁待发布 |
| **ZeroClaw** | 26 | ~19 | 50 | ~44 | 0 | 🟢 PR 活跃度高，v0.9.0 里程碑 |

**说明：**
- OpenClaw 在原始活动量上占据主导（~10 倍于其他项目），反映出更庞大的代码库和更广泛的范围。
- ZeroClaw 的 PR 与 Issue 比值最高（50:26），表明功能开发活跃度高于 bug 反馈。
- 四个项目今日均无版本发布——巧合或表明开发周期同步。
- Hermes Agent 的 50:50 Issue 与 PR 比值表明维护工作均衡；OpenClaw 的 500:500 同样如此。

---

## 3. OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Issue 数量** | 主导（500） | 中等（50） | 较低（21） | 中等（26） |
| **PR 吞吐量** | 主导（500） | 中等（50） | 中等（35） | 较高（50） |
| **范围** | 网关、插件、多渠道 | 桌面应用、内存、认证 | 控制台 UI、i18n、本地模型 | 网关分离、成本追踪 |
| **社区互动** | 极高（热门 Issue 115 条评论） | 中等（10 条评论） | 中等（10 条评论） | 较低但增长中 |
| **发布节奏** | 未知（未追踪近期发布） | 未知 | 未知 | v0.9.0 里程碑已追踪 |

### 技术路径差异

- **OpenClaw** 运作于基础设施层（网关、插件加载器、升级恢复），其 bug 属于**运维层面**（SQLite WAL 阻塞、升级死锁）而非 UX 层面。
- **Hermes Agent** 以**终端用户桌面体验**为中心（UI 渲染、会话压缩、OAuth 流程）。
- **QwenPaw** 强调**本地部署**（本地模型、控制台 UI、多语言界面）。
- **ZeroClaw** 追求**架构模块化**（网关分离、A2A 协议 crate）和财务可观测性（成本账本）。

### 社区规模

OpenClaw 的 Issue 数量（~10 倍于其他项目）表明其拥有更大规模的活跃用户和贡献者群体。SQLite WAL 问题上有 115 条评论的讨论串，表明社区高度活跃并共同调试生产环境事件。Hermes 和 ZeroClaw 表现出中等互动程度；QwenPaw 的 Issue 数量较低但 PR 活动健康，表明社区规模小但聚焦。

---

## 4. 共同技术关注点

### 多项目涌现的需求

| 关注领域 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | 具体需求 |
|------------|----------|--------------|---------|----------|----------------|
| **上下文/窗口管理** | ✅ | ✅ | ✅ | — | 压缩、截断处理、本地提供商的 token 计数 |
| **插件/扩展架构** | ✅ | ✅ | ✅ | — | 热重载、延迟加载模式、沙箱化 |
| **多渠道集成** | ✅ | — | — | ✅ | Telegram、WhatsApp 可靠性；消息队列；限流处理 |
| **安全（MCP）** | — | ✅ | ✅ | — | 工具允许列表执行；RCE 防护；驱动配置沙箱 |
| **成本/使用可观测性** | — | ✅ | — | ✅ | 支出追踪、token 计量、账本准确性 |
| **桌面/控制台 UI** | — | ✅ | ✅ | — | 渲染 bug、性能（GPU 使用）、主题/i18n |
| **更新/发布机制** | ✅ | ✅ | — | ✅ | 稳定版 vs. 夜间版通道；更新失败恢复 |
| **内存/会话完整性** | ✅ | ✅ | ✅ | ✅ | 消息去重、历史保存、启动可靠性 |

**分析：** 形成四个集群：

1. **核心 Agent 可靠性**：会话/消息完整性、上下文管理、内存处理——四个项目共通。
2. **插件/扩展系统**：OpenClaw 和 Hermes 都在投资插件生命周期（加载、重载、卸载）。
3. **多渠道网关**：OpenClaw 和 ZeroClaw 都在处理 Telegram/WhatsApp 的投递可靠性。
4. **财务可观测性**：Hermes（token 成本计量插件）和 ZeroClaw（成本账本）独立构建支出追踪功能。

---

## 5. 差异化分析

### 功能焦点

| 项目 | 主要差异化 | 辅助焦点 |
|---------|----------------------|-----------------|
| **OpenClaw** | 网关架构、插件市场、多渠道路由 | 更新恢复、系统级可靠性 |
| **Hermes Agent** | 桌面客户端成熟度、OAuth/1Password 集成 | 记忆插件、对话缓存 |
| **QwenPaw** | 本地模型支持（QwenPaw-Flash 变体）、i18n 对齐 | 控制台 UI、媒体处理 |
| **ZeroClaw** | 网关模块化（v0.9.0 分离）、A2A 协议 | 成本账本、配置驱动限制 |

### 目标用户

- **OpenClaw**：部署多渠道 AI 服务的运维人员；需要网关可靠性的企业。
- **Hermes Agent**：追求精致桌面 Agent 体验的终端用户；与 1Password 集成的开发者。
- **QwenPaw**：运行本地模型的开发者；非英语用户（i18n 推进）。
- **ZeroClaw**：成本敏感型部署；需要精细化支出可视化的团队；架构层面的早期采用者。

### 技术架构

| 方面 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **语言** | 混合（可能 Python） | 可能 Rust 或 Python | 混合 | Rust 优先 |
| **部署模式** | 网关中心化 | 桌面优先 | 控制台 + 本地 | 网关分离 |
| **更新模式** | 待恢复，升级候选状态 | 稳定版 vs. main 分支 | 基于 Hub | 分阶段（v0.8.6 → v0.9.0） |
| **插件模式** | 市场版 + 内置 | 插件目录 | 技能池 | 内置延迟模式 |
| **安全态势** | 更新完整性 | MCP 允许列表 | RCE（ MCP 驱动） | OIDC、SOP 防护 |

---

## 6. 社区活力与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|--------|-----------------|
| **快速迭代** | **OpenClaw** | 高活动量（500 Issue/PR），多个 P0 阻塞项，功能推进激进。表明早期成熟或高需求范围。 |
| **活跃开发** | **ZeroClaw** | 高 PR/Issue 比值（50:26），RFC 驱动架构，v0.9.0 里程碑已追踪。从原型向稳定版本演进。 |
| **稳定维护** | **Hermes Agent** | 均衡的 50:50 比值，安全补丁进行中，桌面 UX 优化。围绕既定产品趋于稳定。 |
| **聚焦增长** | **QwenPaw** | Issue 数量较低，PR 活动中等，强大的 i18n/本地模型聚焦。小众但活跃的社区。 |

### 成熟度信号

- **稳定流程**：ZeroClaw 在专属队列追踪 RFC 决策（#8692）；Hermes 建立了安全响应模式；OpenClaw 有详细的 P0 严重级别定义。
- **技术债务可见性**：所有项目都呈现可复现的 bug 类别（会话重复、内存泄漏、升级死锁）——快速演进系统的典型特征。
- **发布节奏**：今日均无版本发布；可能正在推进里程碑（OpenClaw：维护版本；ZeroClaw：v0.9.0；Hermes：稳定通道；QwenPaw：2.0.1）。

---

## 7. 趋势信号

### 从社区反馈提炼的行业趋势

| 趋势 | 证据 | 项目 |
|-------|----------|----------|
| **网关即服务成熟化** | OpenClaw 的 v0.8.x 维护 + ZeroClaw 的 v0.9.0 网关分离 | OpenClaw, ZeroClaw |
| **插件/扩展生态扩张** | 插件目录、热重载、延迟加载模式 | OpenClaw, Hermes, QwenPaw |
| **成本可观测性成为标配** | token 计量、成本账本、支出仪表盘 | Hermes（token-cost-meter）, ZeroClaw（成本账本） |
| **安全加固（MCP）** | MCP 工具允许列表绕过、驱动配置 RCE、沙箱绕过 | Hermes, QwenPaw |
| **本地部署需求** | QwenPaw-Flash 变体、本地模型层、Termux 支持 | QwenPaw |
| **多渠道可靠性** | Telegram/WhatsApp 投递失败、消息队列、限流处理 | OpenClaw, ZeroClaw |
| **i18n/本地化压力** | 西班牙语界面、语言环境对齐、硬编码 UI 字符串 | QwenPaw, Hermes |
| **桌面 UI 性能** | 持续 GPU 重绘、背景滤镜效果、渲染 bug | Hermes, ZeroClaw |

### 对 AI Agent 开发者的价值

构建或基于这些框架开发的开发者应：

1. **优先审查 MCP 集成的安全性**——多个项目都出现漏洞。
2. **关注成本追踪实现**——独立努力表明市场需求。
3. **监控 ZeroClaw 的网关分离**——可能成为模块化 Agent 部署的架构模式。
4. **为 i18n 贡献力量**——本地化存在差距；社区贡献受欢迎。
5. **预期更新机制的不稳定性**——所有项目共通；务必彻底测试回滚流程。

---

*跨项目分析基于 GitHub 数据汇编 — 2026-10-10*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this GitHub project digest from English to Chinese. I need to:
1. Translate all the text content
2. Keep all formatting (headings, tables, lists, etc.)
3. Keep technical terms, URLs, issue/PR numbers, code, and identifiers in their original form
4. Use natural technical Chinese appropriate for a developer newsletter

Let me go through and translate while preserving the structure:

- **1. Today's Overview** -> 今日概览
- **2. Releases** -> 发布动态
- **3. Project Progress** -> 项目进展
- **4. Community Hot Topics** -> 社区热门话题
- **5. Bugs & Stability** -> 缺陷与稳定性
- **6. Feature Requests & Roadmap Signals** -> 功能需求与路线图信号
- **7. User Feedback Summary** -> 用户反馈摘要
- **8. Backlog Watch** -> 待处理事项关注

I'll translate the content while maintaining all the Markdown structure exactly as is.</think>

# Hermes Agent 项目简报 — 2026-10-10

## 1. 今日概览

Hermes Agent 今日保持高活跃度，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。项目当前有 48 个 open issue 和 41 个 open PR，今日合并/关闭了 9 个 PR。未发布新版本。Issue 待办积压量较大，但管理积极，多个涉及安全性的缺陷和平台兼容性问题需要关注。桌面应用问题（重复渲染、性能）和压缩/上下文处理仍是持续的主题。

---

## 2. 发布动态

**今日无新版本发布。** 项目过去 24 小时内没有发布记录。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#135566](https://github.com/NousResearch/hermes-agent/pull/135566) | feat(agent): extend the pre_verify gate to text-response stops (opt-in) | CLOSED |
| [#135915](https://github.com/NousResearch/hermes-agent/pull/135915) | fix(browser): apply the Chromium sandbox bypass to the real-profile launch | CLOSED |
| [#135406](https://github.com/NousResearch/hermes-agent/pull/135406) | Test runs no longer leave detached gateways running after they finish | CLOSED |
| [#133108](https://github.com/NousResearch/hermes-agent/pull/133108) | fix(a2a): answer ContentTypeNotSupportedError for a non-JSON Content-Type | CLOSED |
| [#132346](https://github.com/NousResearch/hermes-agent/pull/132346) | ci: real-update E2E gates every updater change | CLOSED |

### 推进中的活跃 PR

| PR | 标题 | 关注领域 |
|----|------|----------|
| [#135847](https://github.com/NousResearch/hermes-agent/pull/135847) | feat(update): hermemes update and Desktop updates follow stable releases by default | 安装/更新 |
| [#135909](https://github.com/NousResearch/hermes-agent/pull/135909) | fix(auth): record the Nous device-code grant's approval time | 认证 |
| [#135913](https://github.com/NousResearch/hermes-agent/pull/135913) | fix(update): only the gateway's pausing is a drain ACK | 更新 |
| [#135901](https://github.com/NousResearch/hermes-agent/pull/135901) | feat(memory): add atomic source precondition to MemoryStore.apply_batch | 记忆 |
| [#135911](https://github.com/NousResearch/hermes-agent/pull/135911) | fix(matrix): cache captioned media under its declared filename | Matrix 插件 |
| [#135917](https://github.com/NousResearch/hermes-agent/pull/135917) | feat(desktop): cron "Start from": copy a job, or customize a recipe's prompt | 桌面端 |
| [#135912](https://github.com/NousResearch/hermes-agent/pull/135912) | plugin-catalog: add token-cost-meter | 插件目录 |
| [#128757](https://github.com/NousResearch/hermes-agent/pull/128757) | fix(agent): say what a model switch costs on a large session | 性能 |

---

## 4. 社区热门话题

### 讨论最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论 | 赞 | 优先级 |
|-------|------|------|-----|--------|
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | 云提供商的压缩器上下文窗口被钳制到 model.ollama_num_ctx — 100 万上下文静默降至 65,536 | 10 | 0 | P2 |
| [#108335](https://github.com/NousResearch/hermes-agent/issues/108335) | 1Password browser-vault fill 使用服务账号认证时忽略 --vault 参数 | 9 | 0 | P3 |
| [#127621](https://github.com/NousResearch/hermes-agent/issues/127621) | 桌面应用：助手回复偶尔会重复渲染（同一文本出现两次） | 7 | 7 👍 | P2 |
| [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) | idle_compact_after_seconds 在 gateway 模式下从不触发 — 看门狗重置覆盖了 _last_activity_ts | 7 | 2 👍 | P2 |
| [#129426](https://github.com/NousResearch/hermes-agent/issues/129426) | 安全：npm audit 字段报告 2026-09-30 — 当前修复目标已被取代 | 6 | 0 | 安全 |

**分析：** 讨论最多的 issue 揭示了持续存在的挑战：
- **上下文压缩** — 静默截断上下文窗口影响多个提供商
- **桌面 UI 可靠性** — 重复渲染影响用户体验
- **网关空闲逻辑** — gateway 模式下核心压缩计时缺陷
- **安全依赖** — npm audit 发现需要更新的修复方案

---

## 5. 缺陷与稳定性

### 严重（P1）

| Issue | 标题 | 状态 | 修复 PR？ |
|-------|------|------|----------|
| [#128293](https://github.com/NousResearch/hermes-agent/issues/128293) | 上下文压缩后桌面转录中消息行重复 | OPEN | 无 |

### 高优先级（P2）

| Issue | 标题 | 状态 | 修复 PR？ |
|-------|------|------|----------|
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | 云提供商的压缩器上下文窗口被钳制到 model.ollama_num_ctx | OPEN | 无 |
| [#127621](https://github.com/NousResearch/hermes-agent/issues/127621) | 桌面应用：助手回复偶尔会重复渲染 | OPEN | 无 |
| [#79357](https://github.com/NousResearch/hermes-agent/issues/79357) | idle_compact_after_seconds 在 gateway 模式下从不触发 | OPEN | 无 |
| [#48523](https://github.com/NousResearch/hermes-agent/issues/48523) | convert_messages 不剥离 timestamp/message_id/observed/finish_reason — 导致严格提供商返回 400 | OPEN | 无 |
| [#135594](https://github.com/NousResearch/hermes-agent/issues/135594) | **[安全]** 多路复用网关：profile MCP 工具白名单被忽略（只读 profile 获得写工具） | OPEN | 无 |
| [#126194](https://github.com/NousResearch/hermes-agent/issues/126194) | uv lock 在 Python 3.14 下失败：pilk 与 playwright 不兼容 | OPEN | 无 |
| [#128831](https://github.com/NousResearch/hermes-agent/issues/128831) | hermes update 在 Termux（Android + Python 3.14）上失败 | OPEN | [#128851](https://github.com/NousResearch/hermes-agent/pull/128851) |

### 安全问题

| Issue | 标题 | 状态 |
|-------|------|------|
| [#129426](https://github.com/NousResearch/hermes-agent/issues/129426) | npm audit 字段报告 — brace-expansion、undici、vitest、yaml 警告 | OPEN |
| [#135594](https://github.com/NousResearch/hermes-agent/issues/135594) | 多路复用 gateway 中 MCP 工具白名单绕过 | OPEN |

**稳定性关注：** P1 重复消息问题 (#128293) 是第三例此类报告，表明桌面客户端会话处理存在持续回归。MCP 安全问题 (#135594) 尤为严重，因为它允许 profile 间的权限提升。

---

## 6. 功能需求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| [#103965](https://github.com/NousResearch/hermes-agent/issues/103965) | feat(delegate): 任务级 Hermes profile 路由（模型、主机、记忆、归属） | P3 | 需决策 |
| [#61535](https://github.com/NousResearch/hermes-agent/issues/61535) | feat(desktop): 状态栏文字过小，UI 感觉单调 — 请求彩色主题 | P3 | 用户需求 |
| [#135867](https://github.com/NousResearch/hermes-agent/issues/135867) | [功能]：现场报告 + 5 个经过验证的 phone→Tailscale→gateway 陪伴模式 | P3 | 生产部署信号 |
| [#135912](https://github.com/NousResearch/hermes-agent/pull/135912) | plugin-catalog: 添加 token-cost-meter | 插件 | 新 PR |

**路线图信号：**
- **稳定版发布渠道** — PR #135847 使 `hermes update` 跟随发布的 `vX.Y.Z` 版本而非 main，标志向更稳定分发方式的转变
- **Token 成本计量** — 新插件 (#135912) 表明对用量追踪的需求
- **桌面 UI 改进** — 状态栏主题化 (#61535) 表明用户希望 UI 更加精美

---

## 7. 用户反馈摘要

### 发现的痛点

1. **上下文压缩可靠性** — 用户报告静默失败，100 万上下文窗口降至 65,536 且无警告 (#99943)。这影响云提供商，削弱用户对长对话的信心。

2. **桌面会话损坏** — 压缩后消息行重复 (#128293, #127621) 表明桌面客户端的会话管理存在数据完整性问题。多份独立报告表明这并非边缘情况。

3. **平台兼容性差距** — Python 3.14 支持存在问题 (#126194, #128831)，尤其是 Windows 和 Termux。`uv lock` 失败和包管理器问题给使用新版 Python 的用户带来障碍。

4. **Gateway 模式缺陷** — 空闲压缩从不触发 (#79357) 和 MCP 白名单绕过 (#135594) 表明 gateway 模式未获得与核心 agent 同等的工程关注。

5. **1Password 集成** — 服务账号认证的浏览器保险库填充功能损坏 (#108335)，阻碍企业 1Password 用户使用。

### 满意度信号

- PR 活动显示维护积极：今日合并/关闭 9 个 PR
- 桌面定时任务自定义 (#135917) 满足用户工作流需求
- 测试基础设施改进 (#135406) 表明对回归预防的投入

---

## 8. 待处理事项关注

### 长期未答复的重要 Issue

| Issue | 标题 | 时长 | 关注点 |
|-------|------|------|--------|
| [#48523](https://github.com/NousResearch/hermes-agent/issues/48523) | convert_messages 不剥离元数据 — 导致严格 API 提供商 400 错误 | 约 4 个月 | Gateway 会话回放与严格 API 提供商不兼容 |
| [#95074](https://github.com/NousResearch/hermes-agent/issues/95074) | Bot Mode message_agent 有两条回复路径 | 约 2 个月 | 架构混淆，可能导致消息丢失 |
| [#119403](https://github.com/NousResearch/hermes-agent/issues/119403) | session-list 刷新对每条消息进行子查询 — 每次轮询 0.4-0.7 GB 读取 | 约 3 周 | grown 数据库上的性能回归 |

### 需要维护者关注的 Issue

| Issue | 标题 | 备注 |
|-------|------|------|
| [#135594](https://github.com/NousResearch/hermes-agent/issues/135594) | **安全：MCP 工具白名单绕过** | 高危安全漏洞，需紧急审查 |
| [#128293](https://github.com/NousResearch/hermes-agent/issues/128293) | **P1：消息行重复** | 第三例此类报告，影响用户信任 |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | 上下文窗口静默截断 | 数据丢失风险，影响多个提供商 |

---

*简报基于 2026-10-10 的 GitHub 数据生成。所有链接指向 NousResearch/hermes-agent。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. I need to:
1. Translate all the headings, body text, and table content
2. Keep the Markdown structure exactly as-is (headings, tables, lists, bold/italic, emoji, horizontal rules)
3. Keep URLs, issue/PR numbers, code spans, numbers, dates, and project names unchanged
4. Use natural technical Chinese appropriate for a developer newsletter

Let me go through and translate section by section, maintaining the exact structure.

Key translations to consider:
- "Today's Overview" -> "今日概览"
- "Project Progress" -> "项目进展"
- "Community Hot Topics" -> "社区热点"
- "Bugs & Stability" -> "缺陷与稳定性"
- "Feature Requests & Roadmap Signals" -> "功能需求与路线图信号"
- "User Feedback Summary" -> "用户反馈摘要"
- "Backlog Watch" -> "积压关注"

Let me translate the entire document now.</think>

# QwenPaw 项目摘要 — 2026-10-10

## 1. 今日概览

QwenPaw 在 2026 年 10 月 10 日表现出**高度开发活跃度**，过去 24 小时内有 35 个 PR 和 21 个 Issue 更新。项目正在积极处理各类缺陷修复和新功能，特别是围绕 Console UI、i18n 本地化和稳定性改进方面。本日未发布新版本，但有多个重要的 PR 正在审核中。一个**严重安全漏洞**（MCP Driver RCE）已被报告，需要立即关注。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

以下 PR 今日**合并/关闭**：

| PR | 标题 | 状态 |
|----|------|------|
| #8136 | fix(media): preserve EXIF orientation during image resizing | CLOSED |
| #8010 | fix(agents): recover from media payload rejections instead of failing | CLOSED |
| #8130 | fix(console): keep only the page title in settings headers | CLOSED |
| #8055 | fix(skills): offload pool download copy and sweep orphan stages | CLOSED |
| #8089 | fix(console): support terminal identity over LAN HTTP | CLOSED |
| #8155 | feat(local-models): update QwenPaw-Flash 9B, 27B and 35B-A3B | CLOSED |
| #7869 | fix(providers): carry the session header on connection checks | CLOSED |

**主要进展：**
- **媒体处理**：EXIF 方向保留，以及大尺寸图片拒绝后的恢复机制
- **Console UI**：LAN HTTP 终端身份支持，整合设置页标题
- **本地模型**：新增 QwenPaw-Flash 变体（27B、35B-A3B）

---

## 4. 社区热点

| Issue/PR | 评论数 | 主题 |
|----------|--------|------|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | 10 | **[BUG] spawn subAgent timeout failures** — 所有子 Agent 任务无论超时设置如何都会超时失败 |
| [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | 10 | **[BUG] 聊天记录消失，影响模型上下文窗口** — 关键数据丢失问题 |
| [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | 5 | **[BUG] Embedding reindex 不完整** — CJK 文本块超出 token 限制时静默丢弃批次 |
| [#8153](https://github.com/agentscope-ai/QwenPaw/issues/8153) | 2 | **[安全] MCP Driver RCE 漏洞** — 恶意 Driver 可导致 root 级远程代码执行 |
| [#8160](https://github.com/agentscope-ai/QwenPaw/issues/8160) | 2 | **[功能] 添加西班牙语 (es) 界面语言** — 扩展 i18n 支持 |
| [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | 2 | **[功能] 工具审批卡片需要 i18n 支持** — 硬编码的英文 UI 元素 |

**分析**：用户最关心的是**子 Agent 超时**和**聊天记录持久化**问题——这些是核心可靠性问题。新报告的**MCP RCE 漏洞**是严重问题，可能驱动紧急补丁发布。本地化需求持续增长。

---

## 5. 缺陷与稳定性

| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|------|---------|
| 🔴 **严重** | [#8153] MCP Driver RCE — root 权限，可能存在加密货币挖矿后门 | OPEN | — |
| 🔴 **严重** | [#8134] 聊天记录消失，上下文窗口问题 | OPEN | — |
| 🔴 **严重** | [#7678] 所有子 Agent 任务超时 | CLOSED | — |
| 🟠 **高** | [#8162] OpenAI Responses API 流式响应为空 | OPEN | — |
| 🟠 **高** | [#8129] 图片调整大小丢失 EXIF 方向 | CLOSED | [#8136] |
| 🟠 **高** | [#8009] 超大图片永久破坏会话 | CLOSED | [#8010] |
| 🟡 **中** | [#8143] Console 错误刷屏：SVG 收到非数值长度 | OPEN | [#8157] |
| 🟡 **中** | [#8158] 最终回复渲染为带 Scroll 标题的空消息气泡 | OPEN | [#8159] |
| 🟡 **中** | [#8147] 切换 Agent 后 Console 崩溃 (crypto.randomUUID) | CLOSED | [#8089] |
| 🟢 **低** | [#8135] GPU 性能：iGPU 上大范围 backdrop-filter 效果 | OPEN | — |

---

## 6. 功能需求与路线图信号

| 需求 | Issue | 预计目标 |
|------|-------|----------|
| 西班牙语 (es) 界面语言 | [#8160](https://github.com/agentscope-ai/QwenPaw/issues/8160) | 近期（i18n 推进） |
| 工具审批 i18n 支持 | [#7809](https://github.com/agentscope-ai/QwenPaw/issues/7809) | 近期 |
| `view_audio` 内置工具 | [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) | 中期（多模态扩展） |
| Hub 账户备注 | [#8152](https://github.com/agentscope-ai/QwenPaw/issues/8152) | 小版本 |
| 精简特效 Console 模式 | [#8135](https://github.com/agentscope-ai/QwenPaw/issues/8135) | 性能优化 |

**预测下一版本优先级**：MCP RCE 漏洞安全补丁、西班牙语 i18n 完善、Console 稳定性修复。

---

## 7. 用户反馈摘要

**今日反馈痛点：**
- **可靠性**：子 Agent 超时、聊天记录丢失、会话破坏性图片——用户报告了影响生产环境的稳定性问题
- **性能**：集显上 Console GPU 占用高，因 backdrop-filter 效果过重
- **体验**：频繁的页面加载失败、切换 Agent 后 Console 崩溃

**满意度信号：**
- EXIF 方向修复和媒体拒绝恢复的修复广受好评（解决了长期存在的媒体处理痛点）
- 新增本地模型规格（27B、35B-A3B）扩展了部署选项

---

## 8. 积压关注

| 项目 | 历时 | 状态 | 关注点 |
|------|------|------|--------|
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) OpenViking memory 插件 | 约 33 天 | OPEN，审核中 | 大型 PR (XXXL)，等待合并 |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 插件热重载 | 约 36 天 | OPEN | 复杂重构，对插件稳定性至关重要 |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) 持久化分页转录历史 | 约 18 天 | OPEN，XXXL 规模 | 高价值功能，提升聊天可靠性 |
| [#8121](https://github.com/agentscope-ai/QwenPaw/pull/8121) Creator 2.0.1 版本发布 | 约 2 天 | OPEN | 等待审核 |

**建议**：维护者应优先审核 OpenViking memory 插件和插件热重载 PR，它们代表了重要的架构改进。MCP RCE 漏洞 (#8153) 需要立即进行安全响应。

---

*数据来源：GitHub — agentscope-ai/QwenPaw (2026-10-10)*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Simplified Chinese. I need to:
1. Translate all the text content
2. Keep Markdown structure exactly as-is
3. Keep URLs, issue/PR references, code, numbers, dates, project names, file paths as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate section by section, maintaining the exact structure.</think>

# ZeroClaw 项目摘要 — 2026-10-10

## 今日概览

ZeroClaw 保持高开发活跃度，过去 24 小时内有 **50 个 PR** 和 **26 个 Issue** 更新。项目在多个方面进展积极：成本追踪和可观测性 bug 正在修复，v0.9.0 网关分离里程碑通过 tracker #7432 推进，RFC 活动保持活跃（三个新架构提案）。今日无发布。整体健康状态良好，不过有几个 P1 bug——尤其是 Telegram 集成和内存泄漏——需要紧急关注。

---

## 发布动态

今日无新版本发布。

---

## 项目进展

### 已合并/关闭的 PR（共 6 个）

| PR | 标题 | 状态 |
|----|-----|------|
| #11454 | fix(runtime): 关联会话密钥与追踪轮次 | Closed |
| #11494 | refactor(zerocode): 隔离客户端消息队列所有权 | Closed |

**重点推进：**
- **成本追踪改进**：PR #11587 现在将 `config/set` 成本限制实时应用到运行时成本追踪器，填补了运行时配置变更不会反映在消费监控中的空白。
- **上下文使用估算**：PR #9453 修复了本地 OpenAI 兼容提供商（如 llama.cpp）的上下文计量器——此前这些模型因缺少 token 计数而显示为空。
- **ZeroCode 韧性**：PR #11528 从 Crossterm 回迁了终端 EOF 处理，改善了优雅退出行为。
- **Rust 1.99.0 升级**：PR #11634 升级了所有 CI 工具链并修复了 Clippy 兼容性警告。

---

## 社区热点

### 最活跃的 Issue（按评论数）

| Issue | 标题 | 评论数 | 链接 |
|-------|-----|-------|------|
| #8692 | [追踪器]: RFC 及设计问题的维护者决策队列 | 15 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| #7432 | [追踪器]: Runtime 和网关交付 - v0.8.6 和 v0.9.0 | 6 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #9887 | 缩小超大图片而非直接丢弃 | 6 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) |
| #11420 | [Bug]: SQLite 会话每次都重写消息的 created_at | 6 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) |
| #11254 | RFC: A2A 协议 crate（zeroclaw-a2a）| 5 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) |

**分析：**
- **维护者队列可见性**：Issue #8692 作为 RFC 和设计决策的中央队列——高评论量反映了活跃的架构讨论。
- **图片处理缺口**：#9887 请求缩小而非直接拒绝超大图片，并支持用 0 禁用限制——这是多模态工作流的体验改进。
- **v0.9.0 网关分离**：#7432 追踪第二阶段（v0.8.6 runtime）和第三阶段（网关分离），表明发布工作临近。

### 最活跃的 PR（按关注度/优先级）

| PR | 标题 | 规模 | 链接 |
|----|-----|------|------|
| #11467 | feat(agent): 添加可选的单轮工具提供商模式 | XL | [查看](https://github.com/zeroclaw-labs/zeroclaw/pull/11467) |
| #11466 | feat(config): 报告每个目标的应用结果 | XL | [查看](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) |
| #11473 | feat(tools): 通过 tool_search 延迟内置 schema 加载 | XL | [查看](https://github.com/zeroclaw-labs/zeroclaw/pull/11473) |
| #11462 | feat(delegate): 将独立子审批路由至目标 operator | L | [查看](https://github.com/zeroclaw-labs/zeroclaw/pull/11462) |
| #11419 | feat(config): 在 zerocode 和仪表盘中允许编辑密钥/值映射 | L | [查看](https://github.com/zeroclaw-labs/zeroclaw/pull/11419) |

---

## Bug 与稳定性

### P1 优先级 Bug（紧急）

| Issue | 标题 | 严重程度 | 状态 | 修复 PR？|
|-------|-----|----------|------|----------|
| #11612 | 重新运行已批准的 shell 命令导致 agent 循环中止 | S1 - 工作流阻塞 | Open | 否 |
| #11608 | Telegram 监听器在请求进入黑洞时卡死 | S1 - 工作流阻塞 | Open | 否 |
| #11615 | Telegram 发送路径忽略 429 的 retry_after | S1 - 工作流阻塞 | Open | 否 |
| #11420 | SQLite 每次轮次都重写 created_at | S2 - 降级 | Open | 否 |
| #11204 | OpenRouter 消费显示 $0.00，token 被分类为 "free tok" | S2 - 降级 | Open | 否 |
| #11614 | map_key_sections 每次调用都泄漏内存 | S1 - 工作流阻塞 | Open | 否 |
| #11618 | ZeroCode 在 SESSION_BUSY 时丢弃队列消息 | 中 | Open | 否 |

### P2 优先级 Bug

- **#11613**: 成本账本对带隐藏推理的模型（如通过 OpenAI 兼容接口的 Gemini）token 统计不足
- **#11632**: 桌面版（Linux/Tauri）WebKitWebProcess 持续重绘，GPU 约 100%
- **#11623**: ZeroCode 丢弃待处理的 ask_user 提示且无回复
- **#11484**: ZeroCode Agent 轮次禁用重复工具防护
- **#11371**: MCP 嵌套对象参数在工具执行前被序列化为字符串

---

## 功能请求与路线图信号

### 活跃的 RFC 与增强提案

| Issue | 标题 | 领域 | 链接 |
|-------|-----|------|------|
| #11254 | RFC: A2A 协议 crate（zeroclaw-a2a）| 架构 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/11252) |
| #11235 | RFC: 知识语料库 — 代理的文档检索（RAG）| 架构 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) |
| #11074 | RFC: search_routes — web_search_tool 的基于提示的提供商路由 | 架构 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) |

**下一版本（v0.9.0）路线图预测：**
- **网关分离**：#7432 第三阶段表明网关将作为独立组件拆分。
- **A2A 协议**：#11254 提出专用 crate 实现 agent 间通信，彰显互操作野心。
- **RAG 能力**：#11235 将添加文档检索，拓展代理的知识边界。
- **提供商路由**：#11074 添加搜索特定的路由提示，补足现有的 model_routes。

---

## 用户反馈摘要

### 痛点识别

1. **OpenRouter 成本追踪失效**：用户报告虽有大量使用但显示 $0.00 消费（#11204）——计费可见性问题影响信任。
2. **内存泄漏浮现**：#11614（配置 schema 路径泄漏）和 #11632（持续 GPU 重绘）随时间推移降低系统稳定性。
3. **Telegram 集成脆弱**：两个 P1 bug（#11608、#11615）表明 Telegram 渠道缺少适当的超时和限流处理。
4. **ZeroCode UX 缺口**：消息时序不可见（#11620）、队列消息静默丢弃（#11618、#11623）、Agent 模式下重复工具防护失效（#11484）。

### 满意度信号

- 图片批量驱逐（#11166）和上下文估算（#9453）解决了长期的多模态和可观测性痛点。
- 配置驱动的成本限制现已实时应用（#11587），这是呼声很高的运维控制功能。
- 延迟加载内置工具 schema（#11473）改善了工具发现而不会造成列表混乱。

---

## 待办关注

### 需要维护者关注的 Issue

| Issue | 标题 | 龄期 | 状态 | 链接 |
|-------|-----|-----|------|------|
| #10550 | 绑定技能的 HTTP DNS 分辨率和测试调度接缝 | ~38 天 | Closed（后续）| [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10550) |
| #10700 | Bug: 成本记录携带守护进程生命周期的会话 ID | ~33 天 | Closed | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) |
| #11166 | 超出单请求上限时批量驱逐图片 | ~14 天 | Closed | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) |

**观察：**
- 多个追踪器和 RFC 问题有活跃的后续工作（#10550、#10700）已关闭但可能需要验证。
- 本周新提的三个 Telegram 相关 P1 bug（#11608、#11615，加上 #11612 的 shell）需要立即分类。
- 社区入口追踪器（#11638）刚提交——优先级低但品牌影响可见。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*