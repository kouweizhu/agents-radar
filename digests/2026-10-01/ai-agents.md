# OpenClaw 生态日报 2026-10-01

> Issues: 489 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-01 01:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English project digest into Chinese. I need to:
1. Translate all the text content while keeping the Markdown structure intact
2. Keep URLs, code references, issue numbers, etc. as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. Preserve all formatting: headings, tables, lists, bold, emoji, etc.

Let me go through and translate section by section, maintaining the exact structure.

Key terms to translate:
- "OpenClaw Project Digest" → "OpenClaw 项目简报"
- "Today's Overview" → "今日概览"
- "Releases" → "版本发布"
- "Project Progress" → "项目进展"
- "Community Hot Topics" → "社区热点"
- "Bugs & Stability" → "缺陷与稳定性"
- "Feature Requests & Roadmap Signals" → "功能请求与路线图信号"
- "User Feedback Summary" → "用户反馈概要"
- "Backlog Watch" → "待办事项关注"
- P0, P1, P2 keep as-is
- Severity levels can be translated but keeping P-levels as-is

Let me translate this carefully:</think>

# OpenClaw 项目简报 — 2026-10-01

---

## 1. 今日概览

OpenClaw 在 2026 年 10 月 1 日呈现 **高活跃度**，过去 24 小时内有 489 个 issue 和 500 个 pull request 更新。项目发布了 **v2026.9.7**（518 次直接提交，2,818 次 PR 合并，334 位贡献者）。社区参与热度不减——多个 P0 级别 issue 累积 90+ 评论，表明存在严重的稳定性问题，尤其是 SQLite WAL 膨胀、内存泄漏和会话状态管理方面。缺陷积压较多，但开发工作仍在积极推进，多个高优先级 PR 正在合并中。

---

## 2. 版本发布

### v2026.9.7 — OpenClaw 2026.9.7
- **数据指标:** 518 次直接提交 · 2,818 次 PR 合并 · 334 位贡献者
- **状态:** 最新稳定版（2026-10-01 发布）
- **说明:** 发布说明在数据中部分截断，请参阅 [官方发布说明](https://docs.openclaw.ai/rel) 获取完整更新日志。

---

## 3. 项目进展

### 本日已合并/关闭的 PR
| PR | 标题 | 状态 |
|----|-----|------|
| [#162220](https://github.com/openclaw/openclaw/pull/162220) | refactor(plugin-sdk)!: 废弃 beta.5 整会话存储桥接 | 已关闭 |
| [#162249](https://github.com/openclaw/openclaw/pull/162249) | fix(pr): 停止在十二小时后使已完成的 ClawSweeper 评审过期 | 已关闭 |
| [#161709](https://github.com/openclaw/openclaw/pull/161709) | feat(macos): 在捆绑 Bun 上托管 Gateway | 已关闭 |

### 推进中的活跃 PR
- [#162256](https://github.com/openclaw/openclaw/pull/162256) — refactor(config): 在运行时前迁移 MCP 传输别名
- [#161773](https://github.com/openclaw/openclaw/pull/161773) — fix(plugins): 向 before_prompt_build 提供允许的请求（P2，QA-lab）
- [#158000](https://github.com/openclaw/openclaw/pull/158000) — fix(models): 应用已下载的模型目录无需重启 Gateway（P2，待维护者审核）
- [#160442](https://github.com/openclaw/openclaw/pull/160442) — perf(nodes): 仅加载单个 worker turn 所需内容（P2，待维护者审核）
- [#159040](https://github.com/openclaw/openclaw/pull/159040) — feat: 从持久化插件回调中恢复原生子会话
- [#155855](https://github.com/openclaw/openclaw/pull/155855) — fix(codex): 使用单调时钟进行计划的应用授权捕获截止时间

---

## 4. 社区热点

### 评论最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 严重程度 |
|-------|------|--------|----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 膨胀至 1.4–2.8 GB，尽管 wal_autocheckpoint=1000；阻止 Gateway 启动 | **98** | P0 🦐 |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | OpenClaw 2026.9.5 将稳定环境变为 8 小时故障恢复会话 | **40** | P0 🦐 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子 Agent 完成静默丢失 — 无重试、无通知、超时后无自动重启 | **30** | P1 🦞 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway 达到 ready 但从不提供服务；/health 探测超时（632 个 Agent 集群） | **22** | P0 🦐 |
| [#157067](https://github.com/openclaw/openclaw/issues/157067) | Windows 隔离 cron 设置传递不可克隆的 Proxy 给会话历史 worker | **20** | P1 🦞 |

**分析：** SQLite/WAL 问题占据主导讨论，表明在 Windows 和多 Agent 部署场景下存在系统性的数据库性能问题。2026.9.5 回归问题（#153257）导致用户报告严重的稳定性下降。子 Agent 任务编排的失败处理（#44925）代表了错误处理架构中的长期缺陷。

---

## 5. 缺陷与稳定性

### 报告的严重（P0）缺陷
| Issue | 摘要 | 修复 PR？ |
|-------|------|-----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 膨胀至 2.8 GB，阻止 Gateway 启动 | 无 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 但从不服务；事件循环饥饿 | 无 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog.worker.js 无限内存泄漏（约 4-5 GB/小时） | 无 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway: RSS 超出 V8 堆导致 OOM | 无 |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway 崩溃：状态数据库读取准入密封 → "Worker 环境清单已关闭" | 无 |

### 高优先级（P1）缺陷 — 回归与稳定性
| Issue | 摘要 | 回归？ |
|-------|------|--------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 将稳定环境变为 8 小时故障恢复 | **是** |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式提示缓存跨 room-event、policy、Responses 边界失效 | 是 |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | 长轮次丢失整个生成的回复（"无活动工具授权快照"） | 是 |
| [#158134](https://github.com/openclaw/openclaw/issues/158134) | Windows Gateway 启动被重复的 Codex 插件初始化阻塞 | 是 |
| [#161379](https://github.com/openclaw/openclaw/issues/161379) | Gateway 永久占用一个 CPU 核心：预制模型目录刷新循环 | 是 |

**评估：** 2026.9.4–9.6 版本引入了多个回归。内存泄漏和资源耗尽问题普遍存在。最严重的 issue 看不到活跃的修复 PR。

---

## 6. 功能请求与路线图信号

### 值得注意的功能导向 PR
- [#119256](https://github.com/openclaw/openclaw/pull/119256) — **feat(whatsapp): 添加 poll_vote_received 钩子**（P2，XL 规模）
- [#159040](https://github.com/openclaw/openclaw/pull/159040) — **feat: 从持久化插件回调中恢复原生子会话**（P2，功能展示）
- [#161709](https://github.com/openclaw/openclaw/pull/161709) — **feat(macos): 在捆绑 Bun 上托管 Gateway**（P2，展示）
- [#141276](https://github.com/openclaw/openclaw/pull/141276) — **feat(prometheus): 暴露提供商使用时间窗口**（P2）

### Issue 中的用户功能请求
- [#121729](https://github.com/openclaw/openclaw/issues/121729) — 功能：为 Agent 提供友好的每日消费配额（P3，陈旧）
- [#74481](https://github.com/openclaw/openclaw/issues/74481) — feat: 从配置的提供商 /v1/models 动态刷新模型目录（P2）

**信号：** WhatsApp 投票钩子、原生会话恢复和 Prometheus 使用时间窗口表明，运维可观测性和多渠道集成是路线图的优先方向。

---

## 7. 用户反馈概要

### 痛点（真实用户报告）
1. **数据库膨胀：** Windows 用户报告 SQLite WAL 文件在数天内膨胀至 2.8 GB，完全阻止 Gateway 启动。
2. **内存耗尽：** 多起报告称 prepared-model-catalog worker 内存泄漏 4-5 GB/小时，导致主机 OOM。
3. **回归沮丧：** 升级到 2026.9.5 后用户表示"后悔"——稳定环境变成了 8 小时故障恢复。
4. **静默失败：** 子 Agent 完成丢失且无重试或通知（#44925）——用户不知道任务从未完成。
5. **Windows 兼容性：** Cron 作业因不可克隆的 Proxy 对象在 Windows 上失败；Gateway 启动因 Codex 插件初始化严重延迟。

### 满意度信号
- 插件 SDK 弃用工作的积极维护表明清晰的治理（#162220 废弃 beta.5 桥接）。
- 新的 macOS/Bun 捆绑 Gateway 解决了首次运行体验问题。

---

## 8. 待办事项关注

### 长期未解决的重大 Issue
| Issue | 标题 | 时长 | 需求 |
|-------|------|------|------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子 Agent 完成静默丢失 | 约 7 个月 | 产品决策 + 修复 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite 无界增长：memory_index_chunks + memory_embedding_cache 表 | 约 2 个月 | 保留策略 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 持久化文件提供商冷却阻止用户数小时 | 约 5 个月 | 产品决策 |
| [#108395](https://github.com/openclaw/openclaw/issues/108395) | Assistant 生成伪造的 "Human:" 消息（安全） | 约 2.5 个月 | 安全审查 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 账单冷却持续到中断结束后 | 约 2 个月 | 产品决策 |

**注意：** 多个高影响 issue 缺乏修复 PR，需要产品决策或安全审查。ClawSweeper 标签显示大多数关键项目"无新修复 PR"——维护者带宽似乎受限。

---

*简报基于 2026-10-01 的 OpenClaw GitHub 数据生成。所有链接指向 github.com/openclaw/openclaw。*

---

## 横向生态对比

<think>The user wants me to translate the entire English report into Simplified Chinese. Let me go through it carefully and translate it while preserving:
- All Markdown structure (headings, tables, lists, bold/italic, horizontal rules)
- All URLs, project names, repository slugs, version tags, issue numbers
- Technical terms and their natural Chinese equivalents
- The tone of a Chinese developer newsletter

Let me translate section by section:

1. Ecosystem Overview
2. Activity Comparison (table)
3. OpenClaw's Position
4. Shared Technical Focus Areas (table)
5. Differentiation Analysis (table)
6. Community Momentum & Maturity (tables)
7. Trend Signals

I'll maintain all formatting including tables with alignment.</think>

# 跨项目对比报告：OpenClaw 生态系统

---

## 1. 生态系统概览

OpenClaw 生态系统代表了多样化的个人 AI 助手和智能体框架格局，每个项目都遵循不同的架构理念，定位不同的用户群体。从全栈平台 **OpenClaw**（最新版本 518 个 commit，2,818 个合并的 PR）到专业化工具 **IronClaw**（极低活动量，专注于基础设施）和 **QwenPaw**（Beta 驱动，快速迭代），整个生态呈现出丰富多样的面貌。所有项目在本次摘要中都显示出活跃的开发状态，同时伴随着关键 bug 待处理，这体现了行业整体从实验性原型向生产级自主智能体演进的趋势。跨项目的共同主题包括多智能体编排（OpenClaw）、安全加固（Hermes、ZeroClaw）和提供商稳定性（QwenPaw），这些都指向同一个方向：打造可投入生产的 autonomous agent。

---

## 2. 活动对比

| 项目 | Issue（24h） | PR（24h） | Release（24h） | 维护者活跃度 | 健康度评分 |
|------|--------------|-----------|----------------|---------------|------------|
| **OpenClaw** | 489（316 开放） | 500（298 开放） | 1（v2026.9.7） | 极高 | 🟢 强劲 |
| **Hermes Agent** | 50（42 开放） | 50（44 开放） | 0 | 高 | 🟢 强劲 |
| **IronClaw** | 0（0 开放） | 1（1 开放） | 0 | 低 | 🟡 静默 |
| **QwenPaw** | 19（16 开放） | 41（30 开放） | 1（v2.2.2-beta.4） | 高 | 🟢 强劲 |
| **ZeroClaw** | 50（45 开放） | 50（47 开放） | 0 | 高 | 🟢 强劲 |

*健康度评分：🟢 强劲 = >40 PR/24h 或活跃发布；🟡 静默 = 活动极少；🔴 严重 = 衰退或停滞*

---

## 3. OpenClaw 的定位

### 相比同行的优势

- **规模和生态成熟度**：OpenClaw 的 v2026.9.7 版本（518 个 commit，2,818 个合并 PR，334 位贡献者）在提交量和贡献者规模上远超所有同类项目。这带来了更广泛的插件生态系统、更充分的实战检验，以及凭借庞大社区带宽更快的问题解决能力。
- **多智能体编排深度**：SQLite WAL 问题（#143524，98 条评论）和子智能体静默丢失（#44925，30 条评论）表明项目在多智能体协调方面持续投入——这是 Hermes、QwenPaw 和 ZeroClaw 尚未同等重视的能力。
- **企业级发布节奏**：与 QwenPaw 的 Beta 优先模式或 IronClaw 的停滞状态不同，OpenClaw 保持稳定的版本标签，更适合需要可预测升级路径的生产部署。

### 技术路线差异

| 方面 | OpenClaw | Hermes | QwenPaw | ZeroClaw |
|------|----------|--------|---------|----------|
| 核心定位 | 全栈智能体平台 | 桌面优先 CLI | 提供商无关的聊天 | 安全与 RBAC |
| 存储方案 | SQLite（WAL 模式） | 桌面持久化 | 内存/向量层 | 持久化日志 |
| 发布模式 | 稳定版 + 点发布 | 滚动合并 | Beta 驱动（v2.2.x） | 里程碑式（v0.9.x） |
| 安全态势 | 响应式修复 | 主动加固 | 提供商专注 | OIDC 为核心 |

### 社区规模对比

- **OpenClaw**：334 位贡献者（规模最大），2,818 个合并 PR
- **ZeroClaw**：活跃的核心团队 + 增长中的社区（未公开指标）
- **Hermes**：中等规模的贡献者群体，GitHub 互动活跃
- **QwenPaw**：活跃开发，Beta 社区驱动反馈循环
- **IronClaw**：几乎没有外部贡献者，专注基础设施

---

## 4. 共同技术关注点

### 跨多个项目涌现的需求

| 关注领域 | 涉及项目 | 具体需求 |
|----------|----------|----------|
| **数据库稳定性 / WAL 管理** | OpenClaw、IronClaw | SQLite WAL 检查点、无界增长防护 |
| **安全沙箱** | Hermes、ZeroClaw | Windows/Linux 沙箱绕过防护、凭据隔离 |
| **提供商健壮性** | OpenClaw、QwenPaw | Token 计数准确性（Anthropic 缓存 token）、上游错误处理、速率限制恢复 |
| **会话隔离 / 多租户** | OpenClaw、ZeroClaw | 按智能体的所有权作用域、RBAC 实施、委托工具范围 |
| **时区 / 时间戳处理** | QwenPaw、ZeroClaw | DST 感知时间戳、单调时钟的截止时间 |
| **异步任务通知** | OpenClaw、QwenPaw | 后台任务完成、父会话唤醒信号 |
| **内存 / 向量可靠性** | OpenClaw、QwenPaw | 超大块优雅处理、增量索引重建 |

**解读**：整个生态系统共同面对生产就绪的挑战：负载下的数据库可靠性、不可信环境的安全加固，以及多租户隔离。这些并非小众问题——它们代表了 autonomous agent 从演示走向企业部署的成熟曲线。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------|----------|--------------|---------|----------|
| **目标用户** | 构建智能体工作流的开发者 | 偏好 CLI/TUI 的高级用户 | 以聊天为中心的用户、多提供商消费者 | 企业安全团队、多租户运营商 |
| **架构** | 网关中心化、插件化 | 桌面原生、bun 嵌入式 | 轻量级聊天客户端、提供商抽象 | RPC 优先、安全边界 |
| **特性差异化** | 多智能体协调、子智能体追踪 | 桌面优先 UX、提示注入防御 | 顾问模式（双模型）、重排 UI | OIDC/RBAC、网关配对令牌、会话隔离 |
| **稳定性优先级** | 回归预防（2026.9.5 教训） | 安全补丁、Windows 兼容性 | 提供商边缘情况 | 主体隔离、审计合规 |
| **发布速度** | 月度稳定版 | 滚动合并 | 双周 Beta | 里程碑式（v0.9.x） |

**关键洞察**：没有任何两个项目解决相同的问题。OpenClaw 专注于大规模多智能体协调；Hermes 优先保障安全的桌面优先交互；QwenPaw 为终端用户抽象提供商复杂性；ZeroClaw 加固企业多租户。这种多样性表明"个人 AI 助手"市场仍然高度碎片化，尚未出现单一架构赢家。

---

## 6. 社区活力与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw、ZeroClaw、QwenPaw | 40–50+ PR/24h、日常合并、活跃的 issue 队列 |
| **稳定维护** | Hermes Agent | 中等 PR 量、以安全补丁为主、规律活动 |
| **稳定中 / 休眠** | IronClaw | 极少更新、自动化 CI 任务、无用户面向变更 |

### 趋势评估

- **OpenClaw**：快速迭代，但 P0 级 bug 积压（SQLite WAL、内存泄漏）暗示技术债务累积。发布节奏健康。
- **ZeroClaw**：v0.9.0（RBAC、OIDC、网关分离）势头强劲。安全聚焦正在走向成熟。
- **QwenPaw**：Beta 驱动的迭代带来快速反馈循环。顾问模式表明对成本优化的关注。
- **Hermes**：安全补丁占主导——表明项目正在为更广泛采用而加固自身。
- **IronClaw**：实质上处于维护模式。不清楚项目是活跃开发还是已归档。

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **企业多租户日益受到重视**：ZeroClaw 的 RBAC/OIDC 工作和 OpenClaw 的按智能体所有权作用域都响应了对共享智能体基础设施的需求。预计这将在 2027 年成为基础功能。

2. **安全加固不可或缺**：五个项目中有三个（Hermes、ZeroClaw、OpenClaw）有活跃的安全工作流。沙箱绕过、提示注入和凭据泄漏主导讨论。行业正从"快速交付功能"转向"安全交付"。

3. **提供商抽象正在整合**：QwenPaw 的多提供商工作和 OpenClaw 的统一工具抽象表明向提供商无关架构的趋势。开发者希望在不重写智能体逻辑的情况下切换 LLM 后端。

4. **内存和向量可靠性是普遍痛点**：OpenClaw 和 QwenPaw 都报告了超限 chunk 和向量重建失败。这表明 RAG/记忆层是生产智能体部署中最薄弱的环节。

5. **桌面/客户端多样性正在扩展**：Hermes（bun 嵌入式桌面）、QwenPaw（跨平台聊天）和 ZeroClaw（网关分离）展示了客户端策略的碎片化。没有单一的 UI 范式胜出——CLI、TUI、桌面和网关模式并存。

6. **Beta 驱动的发布模式渐获青睐**：QwenPaw 的 v2.2.x Beta 系列证明了低稳定性保证下的快速迭代需求。这与 OpenClaw 的稳定发布方式形成对比，可能更适合优先考虑功能速度的项目。

### 对 AI 智能体开发者的价值

- **若构建多智能体工作流**：关注 OpenClaw 的子智能体完成处理和 ZeroClaw 的会话隔离——这些模式将形成最佳实践。
- **若优先考虑安全**：Hermes 的提示注入追踪和 ZeroClaw 的 OIDC 里程碑是领先指标。
- **若优化成本**：QwenPaw 的顾问模式（双模型路由）是成本优化模式进入主流工具的早期信号。
- **若面向企业**：ZeroClaw 的 RBAC 和 OpenClaw 的多租户隔离工作代表了生态系统中最成熟的思考。

---

*报告基于 2026-10-01 的 GitHub 活动数据编译。除非另有说明，所有指标均反映 24 小时活动窗口。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Chinese, following the specific rules provided. Let me analyze what I need to do:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code, file paths, etc. verbatim
4. Keep project names, repository slugs, usernames, version tags, issue/PR references as-is
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, maintaining the structure:

## 1. Today's Overview
Need to translate this naturally - "Hermes Agent maintains high development velocity" -> "Hermes Agent 保持高开发活跃度"

## 2. Releases
Simple section - "No new releases were published in the last 24 hours."

## 3. Project Progress
Need to keep the table structure and translate the content. PR titles need to be translated but keep the technical terms.

## 4. Community Hot Topics
Translate the analysis and table content.

## 5. Bugs & Stability
Translate bug descriptions and severity levels.

## 6. Feature Requests & Roadmap Signals
Translate feature requests and roadmap signals.

## 7. User Feedback Summary
Translate pain points and satisfaction signals.

## 8. Backlog Watch
Translate long-standing issues and PRs awaiting review.

Let me start translating:</think>

# Hermes Agent 项目简报 — 2026-10-01

## 1. 今日概览

Hermes Agent 保持高开发活跃度，过去 24 小时内有 **50 个 issue** 和 **50 个 PR** 更新。项目在所有组件（desktop、CLI、TUI、gateway、agent）中都表现出强劲的活动，表明开发工作呈现多线程健康推进态势。值得注意的是，**今日未发布新版本**，暗示团队处于近期更新后的稳定阶段。Issue 和 PR 的构成显示团队持续专注于安全加固（今日合并了多个安全修复）、桌面优化以及平台兼容性。社区参与度依然很高，多个高评论 issue 表明用户与开发者之间就 UX 改进和稳定性问题进行了积极对话。

---

## 2. 发布动态

过去 24 小时内**未发布新版本**。

---

## 3. 项目进展

以下 Pull Request 今日**已合并或关闭**：

| PR | 标题 | 状态 |
|----|-----|------|
| [#129741](https://github.com/NousResearch/hermes-agent/pull/129741) | fix(desktop): compare durable rows before stale send guard | CLOSED |
| [#129427](https://github.com/NousResearch/hermes-agent/pull/129427) | fix(cli): preserve TERMINAL_* .env values unless file explicitly sets the key | CLOSED |
| [#129432](https://github.com/NousResearch/hermes-agent/pull/129432) | fix(pm): write complete pm-runtime marker in prepare_runtime | CLOSED |
| [#129665](https://github.com/NousResearch/hermes-agent/pull/129665) | fix(update): give source-completion-pending a TTL and self-heal | CLOSED |
| [#118598](https://github.com/NousResearch/hermes-agent/pull/118598) | fix(gateway): authored platforms.<plat>.extra wins over the top-level platform block | CLOSED |

**主要进展：**
- **桌面稳定性**：修复了导致重复消息渲染的 stale-send guard 竞态条件
- **CLI 配置处理**：正确保留 TERMINAL_* 环境变量
- **运行时标记**：完成 pm-runtime 标记以支持正确的 Python 解析
- **自愈式更新**：为防止卡住的更新状态添加了 TTL
- **Gateway 配置**：修复了平台 extra 配置的优先级

---

## 4. 社区热点话题

### 关注度最高的 Issue

| Issue | 标题 | 评论数 | 链接 |
|-------|-----|--------|------|
| #109552 | [Label audit (unverified)]: open tickets tagged duplicate or invalid | 18 | [查看](https://github.com/NousResearch/hermes-agent/issues/109552) |
| #46260 | [Bug]: INSTALL DIDN'T FINISH — Hermes installer fails on Windows 10 | 17 | [查看](https://github.com/NousResearch/hermes-agent/issues/46260) |
| #62336 | [Security] Terminal environment snapshots capture credential-bearing env vars to disk | 9 | [查看](https://github.com/NousResearch/hermes-agent/issues/62336) |
| #99773 | TUI attention budget + first-paint cleanup | 9 | [查看](https://github.com/NousResearch/hermes-agent/issues/99773) |
| #127313 | [Bug]: pane-body zone menu hijacks transcript right-click (regression) | 8 | [查看](https://github.com/NousResearch/hermes-agent/issues/127313) |

### 分析

- **标签管理** (#109552)：社区推动清理 issue 分类，反映出开发者对混乱的 issue 队列感到不满
- **Windows 稳定性** (#46260)：Windows 10 上的安装程序持续失败是用户最关注的痛点
- **安全问题** (#62336)：用户对终端快照中凭证暴露感到震惊——这是一个**关键安全问题**，9 条评论显示讨论很活跃
- **TUI 演进** (#99773)：社区对 Hermes 终端 UI 的现代化表现出强烈兴趣，现在已从"让它看起来像 OMP"转向语义设计原则

---

## 5. Bug 与稳定性

### 关键与高优先级 Bug (P1-P2)

| 严重级别 | Issue | 组件 | 状态 | 修复 PR |
|----------|-------|-----|------|---------|
| **P1** | Cron agent-mode worker dies silently before agent starts | cron | OPEN | — |
| **P1** | Desktop preview pane: `desktop_preview.open(http URL)` silently does nothing | desktop | OPEN | — |
| **P2** | Pane-body zone menu hijacks transcript right-click (regression from ad2d4822e1) | desktop | OPEN | — |
| **P2** | Desktop ambient animations hold iGPU at 50–69% sustained (Linux + AMD) | desktop | OPEN | — |
| **P2** | HTTP 429 'model temporarily at capacity upstream' kills turn — no auto-resume | agent | CLOSED | — |
| **P2** | Agent can report verified success after failed tool evidence | agent | OPEN | — |

### 已合并的修复

- **#129741**：修复了叙述 → 工具 → 回答回合中的重复答案渲染问题
- **#129427**：修复了 TERMINAL_DOCKER_VOLUMES 重置问题
- **#129432**：修复了打包运行时标记缺少键的问题

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 请求 | 组件 | 优先级 |
|-------|-----|-----|--------|
| #126292 | Native Android & iOS apps — two-way agent on the phone | desktop/mobile | P3 |
| #77952 | feat(desktop): restore last selected session when switching profiles | desktop | P3 |
| #116085 | Vault: allow registrable-domain (eTLD+1) matching for credential origins | agent/vault | P3 |
| #91687 | A2A long jobs should return a task id | plugins | P3 |
| #68702 | Dark Icons for the Hermes App | desktop | P3 |
| #129813 | User-configurable URL scheme allowlist for desktop links | desktop | OPEN |

### 近期合并的功能 PR

- **#129848**：用户可配置的 URL 协议白名单（如 `obsidian://`、`linear://`）
- **#129845**：添加 `/models` 斜杠命令以列出提供商模型
- **#129849**：允许在 heredoc background guard 中使用路径限定的 Python 解释器

### 路线图信号

**桌面 UX 改进**（右键菜单、深色图标、URL 协议、会话恢复）和**移动端应用兴趣**的集中度表明团队正在扩展 Hermes 的客户端覆盖范围。今日合并的**安全导向**PR（#129814、#129815、#129816、#129820）表明加固是目前的工作重点。

---

## 7. 用户反馈摘要

### Issue 中表达的痛点

1. **Windows 安装程序可靠性** (#46260)：用户报告 Hermes 安装程序在 Windows 10 的"desktop"阶段持续失败，阻碍了推广
2. **安全焦虑** (#62336)：用户对 `bws run --` 和 Bitwidthen 的凭证被写入终端快照磁盘感到震惊——这被视为信任问题
3. **Linux 上的桌面性能** (#89732)：集成 GPU 用户对环境动画导致的持续 50-69% iGPU 使用率感到不满
4. **Copilot token 验证缺失** (#35946)：未使用 Copilot 时设置 GITHUB_TOKEN 会产生虚假警告——噪音掩盖了真正的问题

### 积极信号

- TUI attention budget 重新设计 (#99773) 表明**响应社区反馈**（从"复制 OMP"转向原创设计）
- 快速的安全补丁响应（今日多个安全 PR）展示了**积极的安全姿态**
- URL 白名单等特性添加 (#129813→#129848) 表明**响应式 UX 迭代**

---

## 8. 积压关注

### 需要关注的老问题

| Issue | 存在时间 | 状态 | 关注点 |
|-------|----------|------|--------|
| #46260 | ~3 个月 | OPEN | Windows 安装程序失败 — 用户影响大，进展少 |
| #35946 | ~4 个月 | OPEN | Copilot token 警告 — 噪音大，未解决 |
| #512 | ~7 个月 | OPEN | Doom Loop Detection 功能 — 1 👍，需要确定方案 |

### 待审核的 PR

| PR | 存在时间 | 状态 |
|----|----------|------|
| #129849 | 1 天 | OPEN — Python 解释器路径修复 |
| #129680 | 1 天 | OPEN — npm audit 安全补丁 |
| #129847 | 1 天 | OPEN — kanban dispatcher 审批修复 |

---

*简报基于 2026-10-01 的 GitHub 数据生成。所有链接指向 NousResearch/hermes-agent 仓库。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep all the markdown structure exactly as-is
3. Keep all URLs, numbers, dates, code references, etc. verbatim
4. Use natural technical Chinese register

Let me go through each section:

1. **Today's Overview** - 翻译为 "今日概览"
2. **Releases** - 翻译为 "发布"
3. **Project Progress** - 翻译为 "项目进展"
4. **Community Hot Topics** - 翻译为 "社区热点话题"
5. **Bugs & Stability** - 翻译为 "缺陷与稳定性"
6. **Feature Requests & Roadmap Signals** - 翻译为 "功能请求与路线图信号"
7. **User Feedback Summary** - 翻译为 "用户反馈摘要"
8. **Backlog Watch** - 翻译为 "待办事项关注"

Let me translate the content:

---

# IronClaw 项目摘要 — 2026-10-01

## 1. 今日概览

IronClaw 仓库今日活动量较低。过去 24 小时内仅有 **1 个 pull request** 更新——这是一个常规的 CI/维护任务，不影响面向用户的功能。在此期间，**没有 issues**（新开或关闭），**也没有发布**。项目处于稳定的维护状态，核心团队专注于内部基础设施改进（代码库知识图谱刷新）。整体健康状况良好，没有紧急的稳定性问题，也没有在近期更新中看到活跃的功能开发。

---

## 2. 发布

过去 24 小时内没有发布新版本。因此本节为空。

---

## 3. 项目进展

| PR | 标题 | 状态 | 类型 | 规模 | 风险 |
|----|------|------|------|------|------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | **OPEN** | CI/基础设施 | XS | 低 |

**分析：** 唯一的 PR 活动是一个自动化维护任务，由 `ironclaw-ci[bot]` 执行，从默认分支刷新代码库内存引导快照。

这是由 "Codebase Graph Refresh" 工作流生成的常规夜间任务。没有功能推进，也没有 bug 修复在今天合并。

---

## 4. 社区热点话题

过去 24 小时内没有 issues 或 pull requests 更新，因此没有活跃的讨论需要分析。唯一的公开 PR (#7988) 是一个机器人生成的基础设施任务，没有社区参与（0 条评论，0 个反应）。

---

## 5. 缺陷与稳定性

过去 24 小时内没有报告 bug、崩溃或回归。目前没有标记稳定性问题。

---

## 6. 功能请求与路线图信号

过去 24 小时内没有新功能需求被提出或讨论。基于现有数据，没有关于未来版本可能包含哪些功能的信号。

---

## 7. 用户反馈摘要

过去 24 小时内没有记录用户反馈（issues、评论或反应）。由于缺乏用户报告的问题或功能请求，这表明在此期间外部参与度较低，可能表明项目处于安静阶段，或者用户对当前稳定状态感到满意。

---

## 8. 待办事项关注

过去 24 小时内没有需要维护者关注

的未回复 issues 或 pull requests。然而，值得注意的是，PR #7988（于 2026-08-29 开启）仍然开放等待审查——这是一个自动化基础设施 PR，需要维护者批准才能合并。

---

*本摘要反映了截至 2026-10-01 的 github.com/nearai/ironclaw GitHub 活动。*</think>

# IronClaw 项目摘要 — 2026-10-01

## 1. 今日概览

IronClaw 仓库今日活动量较低。过去 24 小时内仅有 **1 个 pull request** 更新——这是一个常规的 CI/维护任务，不影响面向用户的功能。在此期间，**没有 issues**（新开或关闭），**也没有发布**。项目处于稳定的维护状态，核心团队专注于内部基础设施改进（代码库知识图谱刷新）。整体健康状况良好，没有紧急的稳定性问题，也没有在近期更新中看到活跃的功能开发。

---

## 2. 发布

过去 24 小时内没有发布新版本。因此本节为空。

---

## 3. 项目进展

| PR | 标题 | 状态 | 类型 | 规模 | 风险 |
|----|------|------|------|------|------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | **OPEN** | CI/基础设施 | XS | 低 |

**分析：** 唯一的 PR 活动是一个自动化维护任务，由 `ironclaw-ci[bot]` 执行，从默认分支刷新代码库内存引导快照。这是"Codebase Graph Refresh"工作流生成的常规夜间任务。没有功能推进，也没有 bug 修复在今天合并。

---

## 4. 社区热点话题

过去 24 小时内没有 issues 或 pull requests 更新，因此没有活跃的讨论需要分析。唯一的公开 PR (#7988) 是一个机器人生成的基础设施任务，没有社区参与（0 条评论，0 个反应）。

---

## 5. 缺陷与稳定性

过去 24 小时内没有报告 bug、崩溃或回归。目前没有标记稳定性问题。

---

## 6. 功能请求与路线图信号

过去 24 小时内没有新功能需求被提出或讨论。基于现有数据，没有关于未来版本可能包含哪些功能的信号。

---

## 7. 用户反馈摘要

过去 24 小时内没有记录用户反馈（issues、评论或反应）。由于缺乏用户报告的问题或功能请求，这表明在此期间外部参与度较低，可能表明项目处于安静阶段，或者用户对当前稳定状态感到满意。

---

## 8. 待办事项关注

过去 24 小时内没有需要维护者关注的未回复 issues 或 pull requests。然而，值得注意的是，PR #7988（于 2026-08-29 开启）仍然开放等待审查——这是一个自动化基础设施 PR，需要维护者批准才能合并。

---

*本摘要反映了截至 2026-10-01 的 github.com/nearai/ironclaw GitHub 活动。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English Project Digest into Chinese, following specific rules about how to handle technical terms, formatting, and language style.

Let me translate this following the guidelines:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me go through and translate:

Title: QwenPaw Project Digest — 2026-10-01
→ QwenPaw 项目摘要 — 2026-10-01

Let me do this section by section:</think>

# QwenPaw 项目摘要 — 2026-10-01

## 1. 今日概览

QwenPaw 今日开发活动频繁，过去 24 小时内有 **19 个 issue** 和 **41 个 PR** 更新。项目发布了 **v2.2.2-beta.4**，新增了 reranker UI 配置面板和控制台性能优化。Issue 追踪显示问题修复（特别是文件处理、安全沙箱和会话管理方面）与功能增强建议并存。新增的 Advisor Mode PR（#7569）引发了较多关注，今天还有多位首次贡献者提交了修复。

---

## 2. 版本发布

### v2.2.2-beta.4（Beta）

**发布日期：** 2026-09-30

**更新内容：**

| PR | 描述 | 作者 |
|----|------|------|
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | 为 ReMeLightMemoryCard 添加 reranker UI 配置面板 | lecheng2018 |
| [#7892](https://github.com/agentscope-ai/QwenPaw/pull/7892) | 版本号升至 2.2.2b4 | cuiyuebing |
| — | 控制台性能优化：拆分 chat 依赖（见摘要） | — |

**迁移说明：** 无破坏性变更。本次 Beta 版本聚焦于增量改进和问题修复。

---

## 3. 项目进展

### 今日合并/关闭的 PR（11 个）

| PR | 标题 | 状态 |
|----|------|------|
| [#8049](https://github.com/agentscope-ai/QwenPaw/pull/8049) | fix(chats)：按时间戳解析进程时区，使 naive Msg 时间戳在夏令时期间保持一致性 | CLOSED |
| [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) | fix(token-usage)：在实时上下文计量器中统计 Anthropic 缓存 token | OPEN |
| [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) | feat(providers)：支持自定义网关声明 OpenAI prompt cache 参数 | OPEN |
| [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062) | fix(memory)：当单个块超限时保留健康的 embedding 向量 | OPEN |
| [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) | feat(console)：后台任务完成时唤醒父级 agent 会话 | OPEN |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | feat(modes)：添加 Advisor Mode | OPEN（XXXL 规模） |

**重要进展：**
- **Advisor Mode**（#7569）：新的循环模式，由"顾问"模型配对"执行"agent，实现成本优化
- **Anthropic token 统计修复**（#8060）：上下文计量器现在正确统计缓存读写 token
- **时区夏令时修复**（#8049）：解决转录时间戳在夏令时切换时偏移的问题
- **Memory embedding 韧性改进**（#8062）：部分修复 #8040 — 当单个块超出 token 限制时保留健康向量

---

## 4. 社区热点

### 活跃讨论

| Issue/PR | 标题 | 评论数 | 讨论焦点 |
|----------|------|--------|----------|
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console stop request 取消多个 UI 会话下的活跃飞书会话 | 8 | **关键 UX 问题** — 多 UI 会话间会话身份混淆 |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 危险指令可以绕过过滤 | 6 | **安全** — prompt 注入风险 |
| [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | send_file_to_user + 空 assistant 消息污染上下文，导致 400 错误 | 4 | **DeepSeek provider** — 文件处理导致会话异常 |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | Advisor Mode | — | **功能需求** — 双模型成本优化 |
| [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) | 后台任务完成时唤醒父级 agent 会话 | — | **UX 增强** — 异步任务通知 |

**需求分析：**
- **会话隔离可靠性**：用户反馈多个 UI 会话共享后端会话时出现严重故障（飞书集成）
- **安全加固**：危险指令绕过（#7443）表明 prompt 注入漏洞仍在处理中
- **Provider 稳健性**：DeepSeek 和 Anthropic 集成出现多个问题，边缘情况复杂
- **异步工作流**：后台任务处理（#8063）反映出对更好的 agent 间通信模式的需求

---

## 5. 缺陷与稳定性

### 今日报告的关键缺陷（按严重程度排序）

| 严重程度 | Issue | 描述 | 修复 PR |
|----------|-------|------|---------|
| 🔴 **严重** | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | DeepSeek：`send_file_to_user` 上传 PDF 后永久破坏会话 — 后续所有请求均返回 400 | — |
| 🔴 **严重** | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | Windows 自动模式下关闭沙箱后允许内联 Office COM `Quit()` 关闭用户 PowerPoint | — |
| 🔴 **严重** | [#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672) | Windows 安全沙箱可被绕过 | — |
| 🟠 **高** | [#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) | 工具输出文件自动回传模型，当格式不支持时导致 Internal error | — |
| 🟠 **高** | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | Embedding 重建不完整：超 token 限制的块静默丢弃批次 | [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062) |
| 🟠 **高** | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | file/image 块 + 空 assistant 消息导致所有模型返回 400 | — |
| 🟡 **中** | [#8059](https://github.com/agentscope-ai/QwenPaw/issues/8059) | 后台 agent 任务：任务完成后记录丢失（404） | — |
| 🟡 **中** | [#8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) | MCP streamable_http 驱动在 DBX 上失败，控制台显示 503 | — |
| 🟡 **中** | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | 转录设置无法配置 `transcription_model` | — |
| 🟡 **中** | [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) | 上下文计量器对 Anthropic 统计不足（未计入缓存 token） | [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) |

**稳定性说明：** 项目今日已合并/关闭 3 个修复（时区、token 统计、embedding 问题）。但 Windows 沙箱绕过漏洞（严重）需要立即处理。

---

## 6. 功能需求与路线图信号

### 用户功能需求

| Issue | 标题 | 需求概要 | 近期纳入可能性 |
|-------|------|----------|----------------|
| [#7945](https://github.com/agentscope-ai/QwenPaw/issues/7945) | @everyone/@ALL 过滤 | 过滤飞书/钉钉/IM 平台的大规模通知提及 | **高** — 需求简单明确 |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 消息撤回/编辑 + 工作区回滚 | WebUI 中允许编辑/撤回消息，支持文件快照回滚 | **中** — UI + 状态管理复杂 |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | Advisor Mode | 双模型设置（顾问 + 执行）实现成本优化 | **高** — 已进入 PR 审查 |

**路线图信号：**
- Advisor Mode PR（#7569）是目前进行中的最大新功能，面向成本敏感型部署
- 过滤功能（#7945）符合企业 IM 集成重点
- 2.2.2-beta 系列表明重点在 provider 稳定性（DeepSeek、Anthropic）和 memory/embedding 改进

---

## 7. 用户反馈总结

### 痛点

1. **会话管理脆弱性**
   - 多位用户反馈 UI 标签页间会话身份混淆（#7011）
   - 后台任务完成后静默完成，父任务无通知（#8063、#8059）
   - DeepSeek 文件上传永久破坏会话状态（#8064、#8022）

2. **安全担忧**
   - Windows 沙箱绕过允许 Office COM 操作（#8002）
   - Linux 安全沙箱也被报告可突破（#7672）
   - Prompt 注入问题仍未解决（#7443）

3. **Provider 集成差距**
   - DeepSeek：文件处理与模型能力不兼容
   - Anthropic：上下文计量器显示的使用量不准确（#8057）
   - 自定义 provider 无法使用 prompt cache（#8058）

4. **配置摩擦**
   - 转录设置无法更新模型选择（#8035）
   - LLM 流超时硬编码，无法配置（#7604）
   - 桌面技能下载 30 秒超时（#8013）

### 积极信号
- 社区活跃贡献（今天有首次贡献者提交修复）
- 时区/夏令时问题响应迅速（#8049 当天合并）
- Memory embedding 可靠性持续改进（#8062）

---

## 8. 积压关注

### 需要维护者关注的长等待项

| PR/Issue | 存在时间 | 状态 | 关注点 |
|----------|----------|------|--------|
| [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) | 约 3 个月 | 审核中 | macOS login-shell PATH 解析 — 阻塞桌面工具发现 |
| [#3120](https://github.com/agentscope-ai/QwenPaw/pull/3120) | 约 6 个月 | 审核中 | Windows 自动安装 WebView2 Runtime — 大量桌面用户受阻 |
| [#3119](https://github.com/agentscope-ai/QwenPaw/pull/3119) | 约 6 个月 | 审核中 | WebView2 失败快速报错 — 与上述相关 |
| [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) | 约 5 个月 | 审核中 | 自动摘要后的 Memory 索引刷新 |
| [#4580](https://github.com/agentscope-ai/QwenPaw/pull/4580) | 约 5 个月 | 审核中 | console chat API 的 extraSystemPrompt 参数 |
| [#4902](https://github.com/agentscope-ai/QwenPaw/pull/4902) | 约 4 个月 | Open | 内置 PRD CRUD 工具及前端渲染器 |
| [#5170](https://github.com/agentscope-ai/QwenPaw/pull/5170) | 约 4 个月 | Open | agent-list 端点缓存 PROFILE.md 读取 — 性能优化 |

**优先级建议：**
1. **安全**：处理 Windows 沙箱绕过（#8002、#7672）— 高风险
2. **桌面 UX**：清理 PATH/WebView2 积压（#5861、#3120、#3119）— 阻塞用户
3. **Provider 稳定性**：DeepSeek 文件处理（#8064、#8022）— 正在破坏用户会话
4. **性能**：Agent 列表缓存（#5170）— 影响多 agent 部署

---

*基于 2026-10-01 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English ZeroClaw project digest into Chinese, following specific rules. Let me analyze what needs to be done:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, links, numbers, dates, issue/PR numbers verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

**Title:**
# ZeroClaw Project Digest — 2026-10-01
→ # ZeroClaw 项目摘要 — 2026-10-01

**1. Today's Overview:**
→ 1. 今日概览

"ZeroClaw maintains high development velocity with **50 issues** and **50 PRs** updated in the last 24 hours."
→ ZeroClaw 保持高开发速度，过去 24 小时内更新了 **50 个 issue** 和 **50 个 PR**。

"The project shows strong momentum across security hardening, multi-tenant RBAC, and gateway separation for the upcoming v0.9.0 release."
→ 项目在安全加固、多租户 RBAC 和 v0.9.0 版本网关拆分方面展现出强劲势头。

"No new releases were published today, but the issue tracker reflects active progress on multiple tracked workstreams including OIDC, session ownership, and the ZeroCode TUI plugin catalog."
→ 今日未发布新版本，但 issue 追踪器显示多个工作流正在积极推进，包括 OIDC、会话所有权和 ZeroCode TUI 插件目录。

"Security-related bugs dominate critical attention, while several PRs target test stability and cross-platform compatibility."
→ 安全相关的 bug 占据关键关注点，同时多个 PR 致力于提升测试稳定性和跨平台兼容性。

**2. Releases:**
→ 2. 版本发布


No new releases were published in the last 24 hours.
→ 过去 24 小时内无新版本发布。

**3. Project Progress:**
→ 3. 项目进展

### PRs Merged/Closed Today
→ ### 今日合并/关闭的 PR

I'll continue translating the remaining sections with careful attention to technical terminology, preserving all formatting elements like tables and code references, and maintaining the professional Chinese developer newsletter tone.

---

**4. Community Hot Topics**

The maintainer decision queue for RFCs and design issues is the most active topic, indicating the community wants clearer governance around RFC processes. The RBAC feature shows strong demand for multi-tenant isolation, which is essential for enterprise deployments. The closed RFC on PR review evidence demonstrates the team is actively refining their processes.

---

**5. Bugs & Stability**

### Critical / High Severity (S0–S1)

Several critical issues need immediate attention. The independent delegate bypasses the `block_high_risk_commands` setting when using its own risk profile. Memory tools lose their principal scope when delegated. Session-data tools don't properly validate principal ownership. SOP execution accepts wildcard tool selectors without requiring explicit `tools:execute` permissions. The knowledge graph lacks per-agent attribution, allowing any agent to read or modify another agent's knowledge. Session and channel read/write tools miss agent ownership scoping.

A daemon startup overflow bug was closed, likely with a fix already deployed. Queued session operations continue to retain administrator bypass privileges even after they're revoked.

---

**6. Feature Requests & Roadmap Signals**

Per-sender RBAC for multi-tenant deployments is a priority for v0.9.0. OIDC integration for canonical principals and inbound authentication is also planned for v0.9.0, along with runtime and gateway delivery for v0.8.6. A knowledge corpus RFC for document retrieval is being evaluated for a future release.

---

**7. User Feedback Summary**

Enterprise users are driving demand for per-sender RBAC, principal isolation, and OIDC. Multiple S0-rated vulnerabilities around agent-to-agent data leakage represent the biggest pain point. Channel reliability issues affect multi-channel deployments. Test flakiness on macOS and the ZeroCode undo history need attention.

---

**8. Backlog Watch**

RFCs and design decisions remain blocked on maintainer decisions, while the RBAC feature is awaiting maintainer review. The runtime/gateway tracker needs attention for v0.9.0 scope finalization.</think>

# ZeroClaw 项目摘要 — 2026-10-01

---

## 1. 今日概览

ZeroClaw 保持高开发速度，过去 24 小时内更新了 **50 个 issue** 和 **50 个 PR**。项目在安全加固、多租户 RBAC 和 v0.9.0 版本网关拆分方面展现出强劲势头。今日未发布新版本，但 issue 追踪器显示多个工作流正在积极推进，包括 OIDC、会话所有权和 ZeroCode TUI 插件目录。安全相关的 bug 占据关键关注点，同时多个 PR 致力于提升测试稳定性和跨平台兼容性。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 作者 | 摘要 |
|---|---|---|
| [#11293](https://github.com/zeroclaw-labs/zeroclaw/pull/11293) | Audacity88 | fix(ci): 在 PR 风险报告中忽略未读标签的过期元数据检查 |
| [#11284](https://github.com/zeroclaw-labs/zeroclaw/pull/11284) | IftekharUddin | docs(book): 修正过时的插件名称冲突和 lean-build 指南 |
| [#11290](https://github.com/zeroclaw-labs/zeroclaw/pull/11290) | Audacity88 | fix(zerocode): 添加聊天上下文时保留撤销历史 |

### 重要进展

- **RPC 安全加固**: PR [#11289](https://github.com/zeroclaw-labs/zeroclaw/pull/11289) 和 [#11326](https://github.com/zeroclaw-labs/zeroclaw/pull/11326) 引入稳定的拒绝原因标识符，并阻止作用域主体读取持久化日志。
- **网关拆分**: PR [#11331](https://github.com/zeroclaw-labs/zeroclaw/pull/11331)、[#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) 和 [#11334](https://github.com/zeroclaw-labs/zeroclaw/pull/11334) 推进会话 REST API、插件 webhook 转发和路由分类。
- **安全配对**: PR [#11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286) 将网关配对令牌绑定到花名册用户，强化多用户认证。
- **测试可靠性**: 多个平台无关的测试修复已合并，解决 macOS 兼容性（Hailo、Serply）问题。

---

## 4. 社区热点话题

| Issue | 作者 | 评论数 | 关注点 |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Audacity88 | 15 | **[追踪]**: 维护者决策队列 — RFC 和设计issue |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | metalmon | 11 | **[功能]**: 多租户代理部署的按发送者 RBAC |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | Audacity88 | 10 | **[RFC]**: 明确 PR 审查证据、新鲜度警告和作者行为边界 *(已关闭)* |

**分析**: 维护者决策队列 (#8692) 是最活跃的 issue，反映出社区对更清晰 RFC 治理的诉求。RBAC 功能 (#5982) 显示出对多租户隔离的强烈需求 — 这是企业部署的关键能力。最近关闭的 PR 审查证据 RFC (#10366) 表明正在积极讨论流程改进。

---

## 5. Bug 与稳定性

### 关键/高严重性 (S0–S1)

| Issue | 严重性 | 状态 | 摘要 |
|---|---|---|---|
| [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | S0 | 开放 | 独立委托绕过自身风险配置文件的 `block_high_risk_commands` |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | S0 | 开放 | 委托的内存工具丢失主体作用域 |
| [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) | S0 | 开放 | 会话数据工具绕过主体所有权检查 |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) | S0 | 开放 | SOP 执行接受通配符工具选择器而无需 `tools:execute` |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | S0 | 开放 | 知识图谱缺少按代理的属性 — 任何代理都能读写/修改他人知识 |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | S0 | 开放 | 会话/通道读写工具缺少按代理的所有权作用域 |
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | S1 | 已关闭 | 守护进程启动/重载期间代理初始化溢出 |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | S1 | 开放 | 排队的会话操作保留已撤销管理员的所有权绕过 |

### 中等/低严重性

| Issue | 严重性 | 摘要 |
|---|---|---|
| [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) | S1 | 配置编辑器无法写入声明式 cron 计划 |
| [#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) | S1 | 不稳定测试: `configure_refuses_an_incarnation_replaced_under_the_lock` 竞态 150ms 睡眠 |
| [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) | S2 | WhatsApp Web 入站图片以字面量 "[Image]" 文本形式传送 |
| [#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) | S3 | `initial_prompt` 已文档化但从未发送给 Groq/OpenAI 转录 |

**修复 PR 已存在**: Issue [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)（守护进程溢出）已关闭，说明修复已合并。Issue [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975)（WhatsApp 图片）已关闭，可能已解决。

---

## 6. 功能请求与路线图信号

| Issue | 优先级 | 版本 | 摘要 |
|---|---|---|---|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | p2 | v0.9.0 | 多租户代理部署的按发送者 RBAC |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | p2 | v0.9.0 | OIDC 里程碑: 规范主体和入站认证 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | p2 | v0.9.0 | 运行时和网关交付 — v0.8.6 和 v0.9.0 |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | p2 | 待定 | RFC: 知识语料库 — 代理的文档检索 (RAG) |
| [#8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) | p2 | 待定 | ZeroCode TUI: 统一插件/能力目录面板 |

**预测**: v0.9.0 版本的发布轨迹清晰 — RBAC、OIDC 和网关拆分将是头条功能。知识语料库 RFC (#11235) 标志着对代理文档检索的长期投入，可能在 v0.9.0 之后。

---

## 7. 用户反馈摘要

基于 issue 活动和 PR 讨论：

- **多租户企业需求**是主导主题 — 用户需要按发送者 RBAC、正确的主体隔离和 OIDC 集成以用于生产部署。
- **安全问题紧迫**: 围绕代理间数据泄漏的多个 S0 级 bug（知识图谱、会话工具、内存委托）表明当前安全模型是痛点。
- **渠道可靠性**: WhatsApp 图片处理和转录提示问题暗示多渠道部署存在摩擦。
- **开发者体验**: macOS 上的测试不稳定和 ZeroCode 撤销历史问题反映了开发者工作流摩擦。

---

## 8. 待办关注

| Issue | 存在时间 | 状态 | 需关注原因 |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | ~3 个月 | 开放 | RFC/设计决策队列活跃；阻塞依赖工作 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | ~5 个月 | 开放 | 高需求 RBAC 功能；社区等待中 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | ~4 个月 | 开放 | v0.8.6/v0.9.0 交付阶段的主追踪器 |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | ~3 个月 | 开放 | OIDC 里程碑；核心已合并，收尾待定 |
| [#8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) | ~3 个月 | 阻塞 | ZeroCode 插件目录；被前置条件阻塞 |

**需采取行动**: 维护者决策队列 (#8692) 应优先处理以解封 RFC 推进。RBAC (#5982) 和运行时/网关追踪器 (#7432) 都是高价值项目，等待维护者审查以最终确定 v0.9.0 范围。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*