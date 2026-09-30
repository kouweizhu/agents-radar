# OpenClaw 生态日报 2026-09-30

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-30 01:28 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this project digest from English to Chinese. I need to translate the content while:
1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Preserving URLs, issue numbers, version tags, file paths
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation

Let me go through and translate this carefully while maintaining the exact structure.

Key things to translate:
- All headings
- All body text
- Table headers and content
- List items
- Issue/PR descriptions

Keep as-is:
- URLs (http://, https://)
- Issue numbers (#12345)
- Version tags (v2026.8.33, 2026.9.6)
- File paths (prepared-model-catalog.worker.js)
- Repository names (OpenClaw)
- Usernames
- Emoji (✅, ❌, 📣, ⏳)
- Code spans/blocks

Let me translate section by section:</think>

# OpenClaw 项目摘要 — 2026-09-30

## 1. 今日概览

OpenClaw 保持高度活跃，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。项目在近期发布 v2026.8.33 扩展稳定版（LTS 等效版本）后处于积极维护状态，当前最新版本为 2026.9.6。社区参与度依然强劲——最高评论数的 SQLite WAL 问题有 94 条评论，表明用户受影响程度严重。项目显示维护状态健康，多个 PR 正在推进合并，但多个 P0 稳定性问题（内存泄漏、崩溃循环、数据库损坏）需要紧急关注。

---

## 2. 发布版本

| 版本 | 类型 | 状态 | 备注 |
|---------|------|--------|-------|
| **v2026.8.33** | `extended-stable`（LTS 等效） | 已发布 | 仅 Gateway 版本；包含 2026 年 8 月底代码库 + 关键安全更新、可靠性和性能修复，以及新模型支持。 |
| **v2026.9.6** | 最新稳定版 | 当前 | 最近的生产版本；在多个活跃 issue 中被引用。 |

**迁移说明：** v2026.8.33 未报告重大变更。使用早期版本的用户应升级以受益于安全补丁和可靠性修复。

---

## 3. 项目进展

**过去 24 小时合并/关闭的 PR：** 500 条更新中共有 149 个合并/关闭

### 值得关注的进展（可供维护者审查）：

| PR | 作者 | 摘要 |
|----|--------|---------|
| [#161449](https://github.com/openclaw/openclaw/pull/161449) | RomneyDa | **修复：在扩展稳定版中复用预准备模型目录** — 解决发布验证失败问题；模型浏览复用预准备目录 |
| [#157693](https://github.com/openclaw/openclaw/pull/157693) | robocow-bot | **修复：防止失败的空闲数据库清理阻塞所有 agent** — 保留失败的所有者句柄/租约以供重试，同时其他 agent 继续运行 |
| [#159999](https://github.com/openclaw/openclaw/pull/159999) | steipete | **重构（gateway）：清理 gateway 核心文件** — 在 117 个文件中移除 1,312 行净生产代码 |
| [#160820](https://github.com/openclaw/openclaw/pull/160820) | steipete | **修复（cloud-workers）：Gateway 更新后的首次响应因缺少 worker bundle 失败** |
| [#158447](https://github.com/openclaw/openclaw/pull/158447) | carlosjarenom | **修复（updater）：通过环境变量而非导入查询识别配置读取子进程** — 防止无限制的子进程链（某报告：8,462 个后代进程） |

### 等待作者处理：
- [#161312](https://github.com/openclaw/openclaw/pull/161312) — 自托管附件请求在执行器输入前失败
- [#161121](https://github.com/openclaw/openclaw/pull/161121) — CLI 端口占用诊断需等待完整 60 秒预算

---

## 4. 社区热点话题

### 评论数最多的 Issue：

| Issue | 评论数 | 严重程度 | 状态 | 摘要 |
|-------|----------|----------|--------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | **94** | P0 | 开启中 | **SQLite WAL 在几天内增长到 1.4–2.8 GB**，尽管设置了 wal_autocheckpoint=1000；阻塞 gateway 启动（Windows，2026.9.2/9.3） |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 21 | P1 | 开启中 | 同步 agent 持久化在规模化时阻塞 Gateway 事件循环 |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 19 | P1 | 开启中 | 同一会话车道的两个并发运行完成，产生重复/冗余回复 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 16 | P1 | 开启中 | OpenClaw 泄漏未回收的 hook/tool 子进程，导致僵尸进程积累 |

### 潜在需求分析：

1. **数据库稳定性（WAL、SQLite、会话状态）：** 多条高评论 issue（#143524、#119720、#157325、#127148）表明存在持续的数据库层问题。用户需要可靠的状态管理，避免损坏或阻塞。

2. **并发与消息传递：** 重复回复（#111897）、会话车道饥饿和消息丢失（#159094、#137710）相关问题表明并发模型需要加强。

3. **资源泄漏：** 预准备模型目录 worker（#159596、#160548、#159662）中的内存泄漏和子进程僵尸（#97616）指向运行时资源管理缺口。

---

## 5. 缺陷与稳定性

### P0（关键/用户体验发布阻塞）— 活跃中：

| Issue | 严重程度 | 状态 | 修复 PR？ | 备注 |
|-------|----------|--------|---------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | P0，崩溃循环，用户体验发布阻塞 | 开启中 | ❌ | SQLite WAL 增长到 2.8 GB，阻塞 gateway 启动 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | P0，用户体验发布阻塞 | 开启中 | ❌ | 卡住的 agent-DB 资源导致所有 agent 失败直至重启 |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | P0，崩溃循环，用户体验发布阻塞 | 开启中 | ❌ | Gateway worker 在获取后保持状态生命周期；后续获取失败 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | P0，崩溃循环 | 开启中 | ❌ | V8 堆外的 RSS 失控导致 OOM |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | P0 | 开启中 | ❌ | prepared-model-catalog.worker.js：无限制内存泄漏，约 4-5 GB/小时 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | P0，用户体验发布阻塞 | 开启中 | ❌ | Gateway 启动时间随插件数量增加；超出 120 秒预算 |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | P0，崩溃循环，用户体验发布阻塞 | **已关闭** | ✅ | Gateway 在 plugin-doctor-post-session-state 上崩溃循环 |
| [#145072](https://github.com/openclaw/openclaw/issues/145072) | P0，用户体验发布阻塞 | **已关闭** | ✅ | macOS npm update 在全局安装交换时失败 |

### v2026.9.6 中的主要回归：
- **内存锯齿模式：** 预准备模型目录 worker 增长至完整堆上限（约 8-13 GiB），触发约每天 200 次内存压力事件 [#159596]
- **插件源捕获 SSD 损耗：** 每次 CLI 命令重写 1.1-1.4 GB，每次 Gateway 启动重写 6.5 GB（无复用）[#157989]

---

## 6. 功能请求与路线图信号

### 活跃中的功能工作：

| Issue | 优先级 | 类型 | 摘要 |
|-------|----------|------|---------|
| [#156341](https://github.com/openclaw/openclaw/issues/156341) | P3 | RFC | **RFC：任务作用域决策模型与可检查评估** — 让操作者/agent 为每个任务选择决策模型 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | P2 | 增强 | **入门向导应将 Memory/Embedding 设置作为强制步骤** — 解决关键配置摩擦 |

### 下一版本（2026.9.7）的预测：

**2026.9.7 修复追踪器**（[#157531](https://github.com/openclaw/openclaw/issues/157531)，16 条评论）追踪 2026.9.6 与 2026.9.7 之间的项目。当前已准备的 PR 包含 18/21 个已确定的 P1 候选项，包括隐私和面向用户的修复。预计即将发布的版本将优先处理：
- SQLite/数据库稳定性修复
- 预准备模型目录中的内存泄漏解决
- 插件热重载正确性
- Windows 特定可靠性改进

---

## 7. 用户反馈总结

### 痛点（高影响）：

1. **数据库损坏/阻塞：** 多名用户报告 SQLite WAL 损坏、卡住资源和会话状态争用，阻止生产使用。
2. **内存耗尽：** Gateway 内存泄漏导致 OOM 崩溃；锯齿模式干扰长时间运行的部署。
3. **Windows 可靠性：** 多个 Windows 特定问题（WAL 增长、cron 设置、npm update 失败、崩溃循环）表明跨平台质量不均。
4. **插件重载破坏：** 热重载非通道插件会处置通道插件，丢弃活跃流和消息。

### 满意度信号：

- **扩展稳定版发布节奏** 为生产部署提供 LTS 等效的稳定性路径。
- **维护者响应度** 可见——多个 P0 issue 有活跃的 PR 或近期已关闭。
- **社区参与度** 保持强劲（最高评论 issue 有 94 条评论）表明用户基础有投入。

---

## 8. 待办关注

### 需要维护者关注的老旧 Issue：

| Issue | 时长 | 优先级 | 状态 | 阻塞 |
|-------|-----|----------|--------|----------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 约 2 个月 | P1 | 开启中 | 需要产品决策 + 维护者审查；同步持久化在规模化时阻塞 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 约 3 个月 | P1 | 开启中 | 无修复 PR；子进程僵尸泄漏 |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | 约 2 个月 | P1 | 开启中 | 需要产品决策；CLI 支持的子 agent 伪造工具调用 |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | 约 2 个月 | P1 | 开启中 | DeepSeek cron 卡住；需要产品决策 |

### 停滞的 PR：

| PR | 时长 | 状态 | 阻塞 |
|----|-----|--------|----------|
| [#121063](https://github.com/openclaw/openclaw/pull/121063) | 约 2 个月 | ⏳ 等待作者 | 使用 turn/error-batch/idle-repeat 防护绑定失控循环 |
| [#120794](https://github.com/openclaw/openclaw/pull/120794) | 约 2 个月 | 📣 需要证明 | 无限制的通道上下文数组淹没模型提示 |

---

*基于 OpenClaw GitHub 数据生成 — 2026-09-30*

---

## 横向生态对比

<think>The user wants me to translate this entire report into Simplified Chinese, following specific translation rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve all Markdown structure exactly
- Keep URLs, code, numbers, dates, project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
- Use natural technical Chinese register (like a Chinese developer newsletter)

Let me translate carefully while preserving all formatting and technical terms.</think>

# 跨项目对比：个人 AI 助手生态系统

---

## 1. 生态概览

个人 AI 助手和 Agent 框架领域正在经历快速迭代，五个主要开源项目——OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw——在追求不同架构理念的同时，也面临着共同的技术挑战。生态现状反映了从纯聊天界面向复杂多 Agent 编排、持久化记忆系统和生产级可靠性功能（定时任务、cron、长时会话）的成熟演进。所有五个项目都在处理数据库持久化、会话状态管理和工具执行沙箱问题，这表明构建可靠的自主 Agent 的基础工程挑战尚未在大规模场景下得到解决。各项目间的方案多样性——从 Hermes Agent 的 Electron 桌面应用到 OpenClaw 的 Gateway 架构，再到 ZeroClaw 的安全优先模型——说明市场尚未收敛到单一解决方案模式。

---

## 2. 活动对比

| 项目 | Issues 更新 (24h) | PRs 更新 (24h) | Releases (24h) | Open Issues | Open PRs | 健康度评估 |
|---------|---------------------|-------------------|----------------|-------------|----------|-------------------|
| **OpenClaw** | 500 | 500 | 1 (v2026.8.33 LTS) | 436 | 351 | 高迭代速度，主推稳定性 |
| **Hermes Agent** | 50 | 50 | 0 | 37 | 50 | 活跃迭代，稳定节奏 |
| **IronClaw** | 2 | 5 | 1 (v1.4.1) | 2 | 4 | 低噪音，稳定维护 |
| **QwenPaw** | 11 | 36 | 0 | 7 | 16 | 中等，专注桌面端 |
| **ZeroClaw** | 27 | 50 | 0 | 23 | 47 | 高迭代，安全密集型 |

**分析：** OpenClaw 以 500 条 issue/PR 的日活动量主导，明显领先于次高的 Hermes Agent 和 ZeroClaw（各 50 条），反映出更大的社区规模和更快的迭代速度。其 extended-stable（类 LTS）发布节奏提供了 Hermes Agent 和 QwenPaw 所缺乏的生产稳定性路径。IronClaw 仅 7 条总更新量——这是成熟稳定项目的标志。QwenPaw 处于中等水平，专注于桌面端增强和终端修复。

---

## 3. OpenClaw 的定位

### 相对优势

- **规模和生态成熟度：** OpenClaw 日均 500 条 issue/PR 活动量约为次活跃项目的 10 倍，反映出更大的社区和更快的迭代速度。其 extended-stable（类 LTS）发布节奏提供了 Hermes Agent 和 QwenPaw 所缺乏的生产稳定性路径。
- **插件架构深度：** OpenClaw 的技能池、插件市场和声明式 cron 系统代表了比 IronClaw 新兴的技能市场提案或 ZeroClaw 的插件更新 CLI 更成熟的工具链。
- **供应商覆盖广度：** OpenClaw 展现出最活跃的多供应商集成工作（OpenAI、Anthropic、DeepSeek、本地模型），领先于 IronClaw 的 Google OAuth 修复和 Hermes Agent 的 OpenRouter 重点。

### 技术路线差异

| 方面 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|--------|----------|--------------|----------|---------|----------|
| 架构 | Gateway + agents | Electron 桌面优先 | 单主机 worker 池 | Tauri 桌面 + 终端 | 安全优先模型 |
| 持久化 | SQLite + 会话状态 | SQLite 记录 | Postgres | SQLite | 共享内存层 |
| 会话模型 | 长时运行带状态 | 基于会话/列表 | 任务作用域 | 通道作用域 | 主体作用域 |
| 稳定性重点 | 崩溃循环恢复 | WebSocket 弹性 | Worker 编排 | 终端处理 | 授权边界 |

### 社区规模

OpenClaw 的 436 个 open issues 和 351 个 open PRs 代表了约 6 倍于 Hermes Agent（37 issues, 50 PRs）和 20 倍于 IronClaw（2 issues, 4 PRs）的社区规模。热门 issue 上的评论活跃度（SQLite WAL bug 有 94 条评论）表明用户社区高度参与，愿意协作调试。

---

## 4. 共同技术关注点

### 多项目涌现的需求

| 关注领域 | 涉及项目 | 具体需求 |
|------------|-------------------|----------------|
| **数据库稳定性 / 会话持久化** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | SQLite WAL 损坏、会话状态竞争、记录持久化、游标分页 |
| **记忆 / 知识管理** | OpenClaw, ZeroClaw, IronClaw | 知识图谱作为一等公民、RAG 文档检索、长上下文处理（token 预算） |
| **桌面应用可靠性** | Hermes Agent, QwenPaw | 内存泄漏、无障碍/缩放、跨平台（Windows/WSL2/macOS）、缩放问题 |
| **多供应商集成** | OpenClaw, Hermes Agent, QwenPaw | 连接测试与运行时行为差距、凭据管理、模型切换 |
| **定时任务 / 调度** | OpenClaw, IronClaw, ZeroClaw | 声明式 cron 计划、cron 上下文注入、挂钟超时 |
| **工具执行安全** | OpenClaw, ZeroClaw | 授权边界、通配符选择器、委托记忆范围、主体隔离 |
| **会话 / 连接弹性** | Hermes Agent, OpenClaw, QwenPaw | WebSocket 断连、会话孤立、重连抖动 |

### 跨项目模式

所有五个项目都在向**持久化 Agent 状态**（不仅是临时聊天）、**跨平台桌面可靠性**和**工具执行安全边界**的方向收敛。OpenClaw、Hermes Agent 和 ZeroClaw 都出现的数据库层问题表明，基于 SQLite 的会话持久化存在尚未解决的规模化限制。

---

## 5. 差异化分析

### 功能重点

- **OpenClaw** — 以插件市场、技能池、多供应商支持和 Gateway 编排为目标的全功能自主 Agent。扩展性和生产部署能力最强。
- **Hermes Agent** — 桌面优先体验，Electron 应用，基于 WebSocket 的会话管理，专注实时聊天 UX。面向终端用户桌面使用场景，而非服务器部署。
- **IronClaw** — 极简 worker 池架构，专注单主机。最近推出可选工具选择（BM25F + embedding）优化延迟。面向寻求简化部署的运维人员。
- **QwenPaw** — 终端 + 桌面混合（Tauri）。在通道集成（Telegram、QQ、Slack、企业微信）和记录持久化方面表现强劲。面向多平台消息用户。
- **ZeroClaw** — 安全优先模型，具有主体作用域、授权边界和内存层隔离。最近开放了知识图谱和 A2A 协议的 RFC。面向企业/安全敏感部署。

### 目标用户

| 项目 | 主要用户 |
|---------|---------------|
| OpenClaw | 构建自主 Agent 的开发者；生产环境运维 |
| Hermes Agent | 想要桌面 AI 助手的终端用户 |
| IronClaw | 单机运维；最小化部署用户 |
| QwenPaw | 多通道消息用户；社区/平台集成者 |
| ZeroClaw | 企业安全团队；多租户部署 |

### 技术架构

OpenClaw 的 Gateway 架构与 Hermes Agent 的单体 Electron 应用和 IronClaw 的 worker 池有本质区别。ZeroClaw 的共享内存层模型在架构上独树一帜——其围绕"自有会话"和主体作用域的安全边界在其他项目中没有直接对应。QwenPaw 的记录持久化方法（去重 + 游标分页）比 Hermes Agent 的简单会话历史更为复杂。

---

## 6. 社区活力与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|----------|-------------------|
| **快速迭代** | OpenClaw, ZeroClaw | 50+ PRs/天，活跃的安全工作，大量 open backlog，频繁发布 |
| **稳定节奏** | Hermes Agent, QwenPaw | 30-50 PRs/天，聚焦 bug 修复，定期发布 |
| **成熟/维护** | IronClaw | <10 更新/天，低噪音，补丁驱动发布 |

### 稳定性信号

- **OpenClaw** — 发布 v2026.8.33（LTS 级别），包含安全性和可靠性修复。正在积极修复 P0 崩溃循环和内存泄漏。从快速迭代向稳定性过渡中。
- **IronClaw** — 最成熟；v1.4.1 补丁修复 OAuth 回归问题。低 issue 量表明用户反馈摩擦极低。
- **Hermes Agent** — 今日无发布但活跃修复 bug（WebSocket、Windows 崩溃）。桌面应用稳定性仍在打磨中。
- **ZeroClaw** — 今日报告了三个 P0 安全漏洞，表明有活跃的安全研究。多个 RFC 在进行中，暗示架构正在演进。
- **QwenPaw** — 终端修复和记录持久化显示 incremental 改进。无重大发布但持续小修小补。

---

## 7. 趋势信号

### 从社区反馈提炼的行业趋势

1. **知识原生 Agent** — 三个项目（OpenClaw、ZeroClaw、IronClaw）都有活跃的知识图谱和 RAG RFC，表明为 Agent 配备文档存储能力正在从后加功能变为一等需求。

2. **生产可靠性成为瓶颈** — OpenClaw 94 条评论的 SQLite WAL 问题以及 Hermes Agent 的 WebSocket 断连揭示，**运维稳定性**（而非模型能力）是生产部署的主要摩擦点。五个项目的首要问题都集中在数据库/会话持久化。

3. **桌面应用作为一等目标** — Hermes Agent 和 QwenPaw 都在大力投入桌面/Tauri 可靠性。这表明市场认为有相当比例的用户需要本地优先的 AI 助手，而非纯云服务。

4. **安全边界正在规范化** — ZeroClaw 的主体作用域和授权工作，加上 OpenClaw 的工具执行安全问题，暗示生态系统正在从"让它能跑"向"让它安全"演进，适用于多用户场景。

5. **工具选择优化** — IronClaw 的 BM25F + embedding 方法和 OpenClaw 的 turn-0 工具选择都针对减少首次交互的工具搜索延迟——这是交互式 Agent 的关键性能优化。

6. **多供应商弹性** — QwenPaw 和 OpenClaw 都显示出供应商连接测试与运行时行为之间的差距，表明稳健的多供应商故障转移需要比简单连通性检测更复杂的健康检查。

### 对 AI Agent 开发者的价值

围绕共同挑战（数据库持久化、会话状态、安全边界）的收敛为跨项目工具链创造了机会。构建 Agent 框架的开发者应优先考虑**持久化会话管理**、**多供应商故障转移策略**和**安全优先的工具执行**作为必备功能。三个项目的知识图谱 RFC 信号表明，**超越聊天历史的上下文管理**是下一个差异化前沿。

---

*跨项目分析综合自每日简报 —— 2026-09-30*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the Project Digest into Simplified Chinese, following the specific rules provided. Let me go through the content and translate it while:

1. Keeping all Markdown structure exactly (headings, tables, lists, etc.)
2. Preserving URLs, issue/PR references, code, file paths, version numbers
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble, explanation, or markdown fences

Let me translate section by section:

## 1. Today's Overview
Hermes Agent 在过去 24 小时内更新了 50 个 issue 和 50 个 PR，显示出较高的工程活跃度。所有 50 个 PR 仍处于开放状态，表明有健康的贡献流等待审查/合并。今天没有发布新版本。Issue 追踪器显示重点关注 Desktop 应用的稳定性——尤其是会话管理、内存消耗和跨平台 bug（Windows/WSL2/macOS）。社区参与活跃，issue 收到了多条评论，部分问题显示了协作调试的迹象。

## 2. Releases
**今天没有新版本发布。** 数据快照中未提供上一版本的信息。

## 3. Project Progress
以下 PR 代表了今天已合并或正在推进合并的重要进展：

| PR | 标题 | 类别 |
|---|---|---|
| [#128267](https://github.com/NousResearch/hermes-agent/pull/128267) | fix(deps): bump Electron 40.10.2 to 44.4.5 and gate the NVIDIA SwiftShader fallback on the runtime major | 安全 / 依赖 |
| [#128755](https://github.com/NousResearch/hermes-agent/pull/128755) | OpenRouter cost shows the billed amount, not a table estimate | 计费 / 用户体验 |


| [#128596](https://github.com/NousResearch/hermes-agent/pull/128596) | fix(voice): refuse SIMD-baseline native wheels on pre-x86-64-v2 CPUs instead of SIGILL | 兼容性 |
| [#128525](https://github.com/NousResearch/hermes-agent/pull/128525) | fix(pm,desktop): name a wrong-Python venv and the ELECTRON_RUN_AS_NODE hazard | Desktop / CLI |
| [#124632](https://github.com/NousResearch/hermes-agent/pull/124632) | fix(config): stop concurrent config.yaml writers from silently reverting each other | 稳定性 |

Several additional PRs address desktop app reliability and cross-platform compatibility. Skills installation now properly resolves hub packages by identifier slug with proper error handling. On macOS, files opened through the Hermes terminal now come to the foreground instead of appearing behind the application window. Further fixes tackle installer failures during updates, Xvnc probe reliability issues on the bot-desktop interface, and other stability concerns.

Looking at the issue tracker, the most active discussions center on broken MEDIA file links in the Desktop version—stemming from a regex pattern that consumes trailing markdown and incorrect file:// URL construction—along with Gateway crashing every couple of minutes on WSL2, triggering renderer OOM through repeated reconnection attempts.

WebSocket disconnections occurring roughly every 17 minutes leave sessions orphaned and vulnerable to cleanup, causing data loss when users close or reopen the application. Users are also requesting an official mechanism to inject messages into active Hermes sessions, while switching to streaming sessions creates scroll jumpiness by displaying outdated conversation history. Remote VPS sessions load inconsistently and can hang indefinitely when users navigate away. These issues cluster into three main areas: session reliability problems where disconnections and WSL2 instability lead to conversation loss, cross-platform Desktop stability affecting Windows, macOS, and WSL2, and demand for programmatic session injection to enable headless orchestration. Memory consumption is another concern, with Windows Desktop remote clients reaching approximately 3.6 GB, and users experiencing slow or unreliable remote session loading.

The feature requests point toward three emerging trends: multi-agent coordination capabilities, self-hosted and remote deployment options, and more granular model selection for specialized tasks. Community discussions reveal frustration with session abandonment following WebSocket dropouts, memory bloat affecting both Windows and NVIDIA SwiftShader implementations, and platform-specific problems across macOS, Windows, and WSL2 that create friction during updates and installations.

A pattern emerges in issues that remain unresolved for extended periods—particularly around remote session reliability—which suggests this area needs concentrated effort.</think>

# Hermes Agent 项目简报 — 2026-09-30

## 1. 今日概览

Hermes Agent 在过去 24 小时内更新了 50 个 issue 和 50 个 PR，显示出较高的工程活跃度。所有 50 个 PR 仍处于开放状态，表明有健康的贡献流等待审查/合并。今天没有发布新版本。Issue 追踪器显示重点关注 Desktop 应用的稳定性——尤其是会话管理、内存消耗和跨平台 bug（Windows/WSL2/macOS）。社区参与活跃，issue 收到了多条评论，部分问题显示了协作调试的迹象。

---

## 2. 版本发布

**今天没有新版本发布。** 数据快照中未提供上一版本的信息。

---

## 3. 项目进展

以下 PR 代表了今天已合并或正在推进合并的重要进展：

| PR | 标题 | 类别 |
|---|---|---|
| [#128267](https://github.com/NousResearch/hermes-agent/pull/128267) | fix(deps): bump Electron 40.10.2 to 44.4.5 and gate the NVIDIA SwiftShader fallback on the runtime major | 安全 / 依赖 |
| [#128755](https://github.com/NousResearch/hermes-agent/pull/128755) | OpenRouter cost shows the billed amount, not a table estimate | 计费 / UX |
| [#128596](https://github.com/NousResearch/hermes-agent/pull/128596) | fix(voice): refuse SIMD-baseline native wheels on pre-x86-64-v2 CPUs instead of SIGILL | 兼容性 |
| [#128525](https://github.com/NousResearch/hermes-agent/pull/128525) | fix(pm,desktop): name a wrong-Python venv and the ELECTRON_RUN_AS_NODE hazard | Desktop / CLI |
| [#124632](https://github.com/NousResearch/hermes-agent/pull/124632) | fix(config): stop concurrent config.yaml writers from silently reverting each other | 稳定性 |
| [#128414](https://github.com/NousResearch/hermes-agent/pull/128414) | fix(skills): resolve hub installs by identifier slug, and fail loudly | Skills / CLI |
| [#128285](https://github.com/NousResearch/hermes-agent/issues/128285) | fix(terminal): bring macOS `open`-opened files to the front instead of behind Hermes | macOS / UX |

更多 desktop 相关修复涵盖了安装程序崩溃、更新交接竞态以及 bot-desktop Xvnc 探测可靠性问题。

---

## 4. 社区热点

讨论最活跃的话题：

| Issue | 标题 | 评论数 | 状态 |
|---|---|---|---|
| [#84361](https://github.com/NousResearch/hermes-agent/issues/84361) | Bug: Desktop MEDIA file links dead — tag regex absorbs trailing markdown, and file:// URLs built by string concat | 12 | Closed |
| [#95189](https://github.com/NousResearch/hermes-agent/issues/95189) | Bug: Gateway exits uncleanly every ~2 minutes on WSL2 (v0.17.0), driving renderer OOM via reconnect churn | 9 | Open |
| [#69940](https://github.com/NousResearch/hermes-agent/issues/69940) | Desktop app WebSocket disconnects every ~17 min (code 1012), sessions orphaned and reaped — chats lost on close/reopen | 7 | Open |
| [#103748](https://github.com/NousResearch/hermes-agent/issues/103748) | Feature: official way to deliver a message into an existing live Hermes session | 7 | Open |
| [#84997](https://github.com/NousResearch/hermes-agent/issues/84997) | Bug: Desktop — switching into an actively-streaming session lands the transcript on old history (scroll jitter) | 5 | Open |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Bug: Desktop remote/VPS — session load is slow, cancels on navigate away, can spin forever | 5 | Open |

**分析：** 热门话题反映了三个核心用户痛点：

1. **会话可靠性** — WebSocket 断开（WSL2、远程后端）和会话孤立导致数据丢失和糟糕的用户体验。
2. **Desktop 跨平台稳定性** — Windows、macOS 和 WSL2 上的多个问题指向 Electron 桌面应用中的平台特定 bug。
3. **进程间消息传递** — 将消息注入现有实时会话的功能请求（#103748）表明了对程序化/无头 agent 编排的需求。

---

## 5. Bug 与稳定性

按严重程度（P0–P2）和近期活跃度排序：

| Issue | 严重程度 | 描述 | 修复 PR？ |
|---|---|---|---|
| [#128720](https://github.com/NousResearch/hermes-agent/issues/128720) | **P0** | Slack slash-command turns drop the channel prompt and source names, flipping prompt pins | — |
| [#112961](https://github.com/NousResearch/hermes-agent/issues/112961) | **P2** | Windows desktop (Hermes.exe main process) aborts with FAST_FAIL_FATAL_APP_EXIT during long WS sessions | — |
| [#121735](https://github.com/NousResearch/hermes-agent/issues/121735) | **P2** | Windows Desktop remote client reaches ~3.6 GB memory in renderer | — |
| [#95189](https://github.com/NousResearch/hermes-agent/issues/95189) | **P2** | Gateway exits uncleanly every ~2 minutes on WSL2, driving renderer OOM via reconnect churn | — |
| [#69940](https://github.com/NousResearch/hermes-agent/issues/69940) | **P2** | WebSocket disconnects every ~17 min, sessions orphaned and reaped | — |
| [#124255](https://github.com/NousResearch/hermes-agent/issues/124255) | **P2** | NVIDIA 580 SwiftShader fallback causes silent 4-9 core CPU burn (laptop overheating) | [#128267](https://github.com/NousResearch/hermes-agent/pull/128267) |

**值得关注的回归：** Issue #63840 报告新的 desktop 会话尽管状态干净却自动恢复旧内容——这是回归自之前的行为。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 优先级 | 信号 |
|---|---|---|---|
| [#103748](https://github.com/NousResearch/hermes-agent/issues/103748) | 官方方式向现有实时 Hermes 会话发送消息 | P3 | 多 agent 编排用例；可能出现在 v0.22 |
| [#119678](https://github.com/NousResearch/hermes-agent/issues/119678) | 支持 OpenRouter Decisions-API 模型用于辅助任务（如 mcp_approval） | P3 | 决策模型委托需求增长 |
| [#84483](https://github.com/NousResearch/hermes-agent/issues/84483) | Hermes desktop 使用自托管 auth_provider 连接到远程后端 | P3 | 自托管部署需求 |
| [#103748](https://github.com/NousResearch/hermes-agent/issues/103748) | 进程间会话注入 | P3 | 无头/协调器 agent 模式 |

这些请求与三个趋势主题一致：**多 agent 协调**、**自托管/远程部署**以及**辅助任务的细粒度模型选择**。

---

## 7. 用户反馈摘要

**跨 issue 表达的痛点：**

- **会话丢失/流失** — 用户报告应用关闭/重新打开时对话丢失，原因是 WebSocket 断开会话被孤立（#69940、#95189）。
- **内存膨胀** — Windows Desktop 远程客户端达到约 3.6 GB 内存（#121735）；SwiftShader 回退导致 CPU 燃烧（#124255）。
- **远程会话加载缓慢/不可靠** — 升级后会话列表需要 5 分钟以上才能出现（#71168）；加载可能在导航时取消，可以永远转圈（#70445）。
- **平台特定故障** — macOS 上 SSH 连接失败（#80836）；Windows 崩溃（#112961）；WSL2 网关不稳定（#95189）。
- **更新/安装失败** — 部分 git clone 超时留下陈旧的插件条目（#122133）；错误的 Python venv 被误诊（#128525）。

**满意度信号：** 活跃的社区讨论（一个文件链接 bug 有 12 条评论）表明有愿意协作调试的参与用户。像 #84361 和 #124255 这样的已关闭 issue 证明了响应的维护态度。

---

## 8. 待办事项关注

需要维护者关注的重要 Issue 和 PR：

| 项目 | Issue | 状态 | 时长 | 为何需要关注 |
|---|---|---|---|---|
| [#69940](https://github.com/NousResearch/hermes-agent/issues/69940) | WebSocket 每约 17 分钟断连 — 会话丢失 | Open | 70+ 天 | P2，数据丢失，无修复 PR |
| [#70445](https://github.com/NousResearch/hermes-agent/issues/70445) | Desktop 远程会话加载缓慢/导航时取消 | Open | 69+ 天 | P2，远程用户 UX 阻碍 |
| [#71168](https://github.com/NousResearch/hermes-agent/issues/71168) | 升级后会话列表需要 5+ 分钟 | Open | 68+ 天 | P2，升级重大摩擦 |
| [#80836](https://github.com/NousResearch/hermes-agent/issues/80836) | macOS 上 Desktop SSH：探测连接后死亡 | Open | 55+ 天 | P2，平台特定回归 |
| [#95933](https://github.com/NousResearch/hermes-agent/issues/95933) | 远程 isolated-serve：重连生成无客户端重复 scope | Open | 36+ 天 | P2，会话生命周期 bug |

这些问题跨越 1-3 个月以上未解决。模式表明 desktop-remote-session 可靠性是需要专门关注的领域。

---

*基于 GitHub 数据为 NousResearch/hermes-agent 生成 — 2026-09-30*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the IronClaw Project Digest from English to Chinese (Simplified Chinese, as indicated by the "zh-CN" in the context). I need to translate the content while preserving the exact Markdown structure, tables, links, code references, and other technical elements.

Let me go through and translate:

1. Title and headings
2. Tables - preserve structure exactly
3. Lists
4. Bold/italic text
5. URLs and links
6. Issue/PR references
7. Technical terms - use natural Chinese technical register

Let me do this carefully:</think>

# IronClaw 项目简报 — 2026-09-30

## 1. 今日概览

2026 年 9 月 30 日，IronClaw 呈现中等开发活跃度。项目发布了 **v1.4.1**，这是一个稳定版本，修复了 Google OAuth 激活回归问题并包含 Wasmtime 安全更新。社区参与度保持稳定，有 2 个新/活跃 issue 和 5 个 PR。开发重点似乎分散在基础设施增强（远程边缘 worker 提案）和用户体验改进（CLI 配置报告、WebUI 焦点恢复）上。值得注意的是，一位新贡献者今天提交了多个 PR，表明新成员加入流程健康。

---

## 2. 发布动态

### ironclaw-v1.4.1 — 2026-09-29

**发布说明：**

`1.4.1-rc.2` 的稳定升级版，包含其 Google OAuth 激活修复和 Wasmtime 安全更新。

**已修复：**
- Google 扩展（Gmail、Google Calendar）现在可以在通过 Web UI OAuth 而非通过配置文件提供 Google OAuth 客户端的部署上激活。

**范围：** 补丁版本；无破坏性变更。所有使用 1.4.0 或更早版本的用户都应升级以解决 OAuth 回归和安全漏洞。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 标题 | 范围 |
|---|-------|-------|
| [#8120](https://github.com/nearai/ironclaw/pull/8120) | chore(release): promote 1.4.1-rc.2 to 1.4.1 | 发布、CI、文档、依赖 |

**影响：** 此 PR 完成了 v1.4.1 发布周期，集成了三个 RC2 提交并更新了变更日志。

### 推进中的活跃 PR

| PR | 标题 | 风险 | 状态 |
|---|-------|------|--------|
| [#8119](https://github.com/nearai/ironclaw/pull/8119) | feat(loop-host): opt-in tool selection with embeddings | 中 | 开放 |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | 低 | 开放 |
| [#8118](https://github.com/nearai/ironclaw/pull/8118) | fix(cli): report effective config profile | 低 | 开放 |
| [#8117](https://github.com/nearai/ironclaw/pull/8117) | fix(webui): restore focus after closing the command palette | 低 | 开放 |

**分析：** 功能开发正在进行中，包括使用 BM25F 和嵌入的 turn 开始工具选择（#8119），直接对应 issue #8113。两个低风险 bug 修复分别解决了 CLI 配置可视性和 WebUI 键盘导航问题。知识图谱刷新（#7988）是自动化 CI 基础设施维护。

---

## 4. 社区热点话题

### 活跃 Issue

| Issue | 标题 | 评论 | 表情 |
|-------|-------|----------|-----------|
| [#7889](https://github.com/nearai/ironclaw/issues/7889) | RFC: extend the scheduler/orchestrator with opt-in remote edge workers | 1 | 0 |
| [#8113](https://github.com/nearai/ironclaw/issues/8113) | Proposal: opt-in turn-0 tool selection (BM25F + embeddings) | 0 | 0 |

**分析：**

**#7889 — 远程边缘 Worker RFC：** 这是一个来自社区成员（kvnloo）的重要架构提案，旨在将 IronClaw 的 worker 池扩展到单个主机之外。该提案针对拥有多台闲置机器并希望分布式执行任务的运营商。这反映了分布式执行的真实生产需求——这是当前模型中的一个显著缺口。

**#8113 — Turn-0 工具选择：** CjS77 的提案旨在通过使用 BM25F + 嵌入对用户初始消息进行预排序，来消除第一轮往返的 `tool_search` 调用。这是一个针对延迟敏感型部署的性能优化。关联的 PR #8119 已在实现此功能。

**潜在需求：** 两个提案都针对运营效率——分布式执行和减少推理延迟。这表明用户群正在向生产级部署发展，在这些部署中每次请求的开销很重要。

---

## 5. 缺陷与稳定性

| Issue/PR | 描述 | 严重程度 | 修复状态 |
|----------|-------------|----------|------------|
| 发布 #8120 | 1.4.0 中 Google OAuth 激活回归 | 中 | 在 v1.4.1 中已修复 |
| Wasmtime 安全更新 | 嵌入式 Wasmtime 安全漏洞 | 高 | 在 v1.4.1 中已打补丁 |

**备注：** 过去 24 小时内未报告新缺陷。v1.4.1 发布解决了两个最关键的问题。当前活跃 PR 未引入回归（均为低风险范围）。

---

## 6. 功能请求与路线图信号

### 正在进行中的功能

| 功能 | PR/Issue | 预计目标版本 |
|---------|----------|----------------|
| Turn-0 工具选择（BM25F + 嵌入） | #8119 / #8113 | v1.5.0（预计） |
| 远程边缘 worker | #7889 | 路线图待定（RFC 阶段） |

### 预测

基于活跃 PR #8119 和 issue #8113，下一个次要版本（v1.5.0）可能会包含**可选的智能工具预排序**以减少推理延迟。远程边缘 worker RFC（#7889）仍处于早期讨论阶段，考虑到其架构范围，可能在未来主要版本中落地。

---

## 7. 用户反馈摘要

**发现的痛点：**
- 1.4.0 中通过 Web UI 配置 Google OAuth 客户端的激活功能损坏 — 现已解决。
- 用户无法通过 CLI 查看当前激活的配置 profile — 在 #8118 中已解决。
- 关闭命令面板后 WebUI 失去焦点，令键盘重度用户沮丧 — 在 #8117 中已修复。

**反映的使用场景：**
- 需要 Google Workspace 集成（Gmail、日历）的生产部署。
- 寻求分布式 worker 池的多机器运营商。
- 想要更快获取第一轮工具的延迟敏感型应用。

**满意度：** v1.4.1 补丁展示了响应式维护。活跃话题中未检测到负面情绪。

---

## 8. 待办事项关注

| 项目 | 龄期 | 状态 | 关注点 |
|------|-----|--------|---------|
| [#7889](https://github.com/nearai/ironclaw/issues/7889) | ~36 天 | 开放（RFC） | 需要维护者审查以确认路线图方向 |
| [#8113](https://github.com/nearai/ironclaw/issues/8113) | ~3 天 | 开放 | 对应 PR #8119 已提交；有望合并 |

**备注：** Issue #7889 已开放超过一个月，仅有 1 条评论。维护者应向社区提供方向性反馈，以维持对该架构提案的参与度。Issue #8113 为新 issue，已有关联 PR，表明工作流程高效。

---

*基于 2026-09-30 的 GitHub 数据生成。所有链接指向 https://github.com/nearai/ironclaw。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English project digest into Chinese (Simplified), following the specific rules provided. Let me carefully translate this while:

1. Keeping all Markdown structure exactly
2. Preserving URLs, numbers, issue/PR references (#xxxxx)
3. Keeping technical terms, project names, file paths as-is
4. Using natural technical Chinese register
5. Not adding any preamble or explanation
6. Not using markdown fences

Let me go through the content section by section:

---

# QwenPaw 项目摘要 — 2026-09-30

## 今日概览

QwenPaw 今日 **开发活动频繁**，有 36 个 PR 更新（20 个已合并/关闭），11 个 issue 处理。项目在多个子系统表现活跃——终端处理、桌面/Tauri 集成、提供商回退和技能池下载。今日无新发布。Issue 关闭率（4/11）显示良好的分类处理速度。整体项目状态稳定，主要 bug 修复和功能开发全面铺开。

---

## 发布动态

**过去 24 小时无新版本发布。**

---

## 项目进展

### 今日合并/关闭的 PR（20 项）

| PR | 标题 | 状态 |
|----|------|------|
| #8025 | fix(desktop): 禁用 NSIS 固件压缩 | CLOSED |
| #8026 | fix(ci): 修复跨平台路径、沙箱清理、Windows 终端 | CLOSED |
| #8024 | fix(portability): 拒绝无效的 qoder 时区 | CLOSED |
| #8023 | fix(terminal): 支持高 POSIX 文件描述符 | CLOSED |
| #7773 | fix(telegram): 消费 /start 平台握手 | CLOSED |
| #7765 | fix(telegram): 在 mention gate 中处理命令寻址 | CLOSED |
| #7718 | fix(telegram): 通过 HTML parse_mode 渲染审批卡markdown | CLOSED |


| *(另有 14 个 PR 已合并/关闭)* | | |

项目推进的关键进展涉及终端子系统的多项修复。技术层面采用了更现代的 `poll()` 方法替代 `select()`，以支持更高文件描述符数量。桌面应用稳定性通过防止 Windows 重启时的实例冲突得到提升。CI/CD 流程在跨平台路径处理、沙箱清理和时区加载方面实现了显著改进。

Telegram 集成通过三个 PR 优化了平台握手、命令寻址和 markdown 渲染功能。Transcript 功能则实现了基于 SQLite 的持久化分页存储，支持去重和游标分页机制。

## 社区热点

### 活跃度最高的 Issue（按讨论量排序）

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker 僵尸条目导致 running_task_count 虚高 | 4 | **Open** |
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | HEARTBEAT_OK / CRON_OK 用于模型消息控制 | 3 | **Open** |
| [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) | OpenAI 集成、图片凭据、resume 失败 | 2 | **Open** |
| [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ 网关重放事件导致消息重复 | 2 | **Closed** |
| [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | 桌面端快捷键缩放在 Linux 上无效 | 2 | **Closed** |

### 活跃度最高的 PR（按讨论量排序）

| PR | 标题 | 状态 |
|----|------|------|
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | fix(runtime): 保持超时工具结果可恢复 | **OPEN** |
| [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012) | fix(telegram): 渲染每个 fenced 代码块为代码 | **OPEN** |
| [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) | fix(task_tracker): 仅在生成器任务存在后注册运行 | **OPEN** |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | feat(community): 集成 QwenPaw 社区和收件箱 | **OPEN** |
| [#8029](https://github.com/agentscope-ai/QwenPaw/pull/8029) | feat(browser): 允许配置覆盖 Playwright 默认启动参数 | **OPEN** |

**分析：** 最多讨论的问题主要集中在：
1. **任务追踪一致性**（#7991、#8007）—— 多位贡献者致力于修复 TaskTracker 的可靠性问题
2. **模型运行时行为**（#2359、#8001）—— 控制心跳/cron 消息的处理和超时恢复机制
3. **提供商集成健壮性**（#8036）—— OpenAI 图片处理和 resume 失败的问题
4. **社区功能**（#7903）—— 收件箱和论坛集成表明产品正在走向成熟

---

## Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 描述 | 修复 PR？|
|----------|-------|------|----------|
| **高** | [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) | OpenAI 集成在连接测试通过后实际生成失败；Kimi K3 resume 失败 | 无 |
| **高** | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | send_file_to_user 产生空的 assistant 消息，导致后续所有模型请求返回 400 | 无 |
| **高** | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | 大型技能下载（80MB+）在 30 秒后超时且永远无法完成——前端 abort 和后端阻塞的组合 | 无 |
| **中** | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | 转录设置无法配置 transcription_model；提供商切换静默破坏转录功能 | 无 |
| **中** | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker 报告 2 个运行中任务但 API 显示 1 个——僵尸条目 | #8007（修复已提交）|
| **中** | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ 网关在会话恢复时重放事件导致重复处理 | **已修复** |
| **低** | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | 桌面端快捷键缩放在 Linux 上无效 | **已修复** |

**总结：** 报告了 3 个高严重程度 bug；一个与数据损坏相关（空消息导致 400），一个与大型文件处理相关，一个与提供商集成相关。一个高优先级修复正在进行中（TaskTracker 的 #8007）。

---

## 功能需求与路线图信号

### 活跃的功能需求

| Issue | 标题 | 需求信号 |
|-------|------|----------|
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | HEARTBEAT_OK / CRON_OK 控制模型消息发送 | OpenAI 风格的心跳处理；与 OpenClaw 模式对齐 |
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 支持自定义技能/插件市场来源（自托管、离线） | 内部网络/离线部署需求 |
| [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | 桌面 UI 字体大小可调（多个级别） | 老年用户/DPI/电视的无障碍需求——"适合新手"标签 |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | 社区和收件箱集成（进行中） | 产品生态扩展 |

**路线图信号：**
- **离线部署支持**（#8015）是明确的企业需求——鉴于用例清晰，很可能在近期实现
- **桌面端无障碍**（#9999）被标记为适合新贡献者，解决了老年用户和高 DPI 用户的实际无障碍问题——有望纳入下次桌面发布
- **心跳/Cron 控制**（#2359）符合行业模式，解决了一个特定的模型交互差距——产品生态扩展正在进行中

社区和收件箱集成反映了产品成熟度的提升。

用户反馈主要集中在四个方面：提供商可靠性问题——OpenAI 图像模型和 Kimi K3 的连接测试通过但实际生成失败；大型技能处理缺陷——80MB+ 的技能下载在 30 秒后静默失败；桌面无障碍缺口——Linux 用户无法缩放，桌面字体大小不可调；任务计数不一致——仪表盘显示的运行任务数与 API 数据不符；转录配置问题——用户无法在切换提供商后更新 transcription_model。

满意度方面，QQ 网关重复消息问题在一周内得到修复，终端描述符限制修复解决了长期的生产问题，社区和论坛集成正在开发中以满足用户的生态功能需求。

长期未解决的重要项目中，HEARTBEAT_OK / CRON_OK 功能请求已开放约 6 个月，尽管参与度较低，但它解决了与 OpenClaw 模式对齐的模型控制增强问题，应考虑优先处理或明确路线图沟通。

项目数据来源于 github.com/agentscope-ai/QwenPaw — 2026-09-30</think>

# QwenPaw 项目摘要 — 2026-09-30

## 今日概览

QwenPaw 今日 **开发活动频繁**，有 36 个 PR 更新（20 个已合并/关闭），11 个 issue 处理。项目在多个子系统表现活跃——终端处理、桌面/Tauri 集成、提供商回退和技能池下载。今日无新发布。Issue 关闭率（4/11）显示良好的分类处理速度。整体项目状态稳定，主要 bug 修复和功能开发全面铺开。

---

## 发布动态

**过去 24 小时无新版本发布。**

---

## 项目进展

### 今日合并/关闭的 PR（20 项）

| PR | 标题 | 状态 |
|----|------|------|
| #8025 | fix(desktop): 禁用 NSIS 固件压缩 | CLOSED |
| #8026 | fix(ci): 修复跨平台路径、沙箱清理、Windows 终端 | CLOSED |
| #8024 | fix(portability): 拒绝无效的 qoder 时区 | CLOSED |
| #8023 | fix(terminal): 支持高 POSIX 文件描述符 | CLOSED |
| #7773 | fix(telegram): 消费 /start 平台握手 | CLOSED |
| #7765 | fix(telegram): 在 mention gate 中处理命令寻址 | CLOSED |
| #7718 | fix(telegram): 通过 HTML parse_mode 渲染审批卡markdown | CLOSED |
| *(另有 14 个 PR 已合并/关闭)* | | |

**重点进展：**

- **终端子系统修复**（#8023、#8032）：高 POSIX 文件描述符支持——用 `poll()` 替换 `select()` 以处理超过 FD_SETSIZE（1024）的文件描述符，解决高负载下的背压问题。
- **桌面应用稳定性**（#8033）：防止 Windows 重启时第二个 Tauri 实例终止第一个实例的后端。
- **CI/CD 改进**（#8026）：跨平台路径处理、沙箱清理修复、时区加载和 Windows 终端中断处理。
- **Telegram 集成**（3 个 PR）：平台握手消费、mention gate 中的命令寻址，以及 markdown 渲染修复。
- **Transcript**（#7931）：基于 SQLite 的持久化分页 Transcript 存储，支持去重和游标分页。

---

## 社区热点

### 活跃度最高的 Issue（按讨论量排序）

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker 僵尸条目导致 running_task_count 虚高 | 4 | **Open** |
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | HEARTBEAT_OK / CRON_OK 用于模型消息控制 | 3 | **Open** |
| [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) | OpenAI 集成、图片凭据、resume 失败 | 2 | **Open** |
| [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ 网关重放事件导致消息重复 | 2 | **Closed** |
| [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | 桌面端快捷键缩放在 Linux 上无效 | 2 | **Closed** |

### 活跃度最高的 PR（按讨论量排序）

| PR | 标题 | 状态 |
|----|------|------|
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | fix(runtime): 保持超时工具结果可恢复 | **OPEN** |
| [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012) | fix(telegram): 渲染每个 fenced 代码块为代码 | **OPEN** |
| [#8007](https://github.com/agentscope-ai/QwenPaw/pull/8007) | fix(task_tracker): 仅在生成器任务存在后注册运行 | **OPEN** |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | feat(community): 集成 QwenPaw 社区和收件箱 | **OPEN** |
| [#8029](https://github.com/agentscope-ai/QwenPaw/pull/8029) | feat(browser): 允许配置覆盖 Playwright 默认启动参数 | **OPEN** |

**分析：** 最多讨论的问题主要集中在：

1. **任务追踪一致性**（#7991、#8007）—— 多位贡献者致力于修复 TaskTracker 的可靠性问题
2. **模型运行时行为**（#2359、#8001）—— 控制心跳/cron 消息的处理和超时恢复机制
3. **提供商集成健壮性**（#8036）—— OpenAI 图片处理和 resume 失败的问题
4. **社区功能**（#7903）—— 收件箱和论坛集成表明产品正在走向成熟

---

## Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 描述 | 修复 PR？|
|----------|-------|------|----------|
| **高** | [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) | OpenAI 集成在连接测试通过后实际生成失败；Kimi K3 resume 失败 | 无 |
| **高** | [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | send_file_to_user 产生空的 assistant 消息，导致后续所有模型请求返回 400 | 无 |
| **高** | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | 大型技能下载（80MB+）在 30 秒后超时且永远无法完成——前端 abort 和后端阻塞的组合 | 无 |
| **中** | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | 转录设置无法配置 transcription_model；提供商切换静默破坏转录功能 | 无 |
| **中** | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) | TaskTracker 报告 2 个运行中任务但 API 显示 1 个——僵尸条目 | #8007（修复已提交）|
| **中** | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ 网关在会话恢复时重放事件导致重复处理 | **已修复** |
| **低** | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | 桌面端快捷键缩放在 Linux 上无效 | **已修复** |

**总结：** 报告了 3 个高严重程度 bug；一个与数据损坏相关（空消息导致 400），一个与大型文件处理相关，一个与提供商集成相关。一个高优先级修复正在进行中（TaskTracker 的 #8007）。

---

## 功能需求与路线图信号

### 活跃的功能需求

| Issue | 标题 | 需求信号 |
|-------|------|----------|
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | HEARTBEAT_OK / CRON_OK 控制模型消息发送 | OpenAI 风格的心跳处理；与 OpenClaw 模式对齐 |
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 支持自定义技能/插件市场来源（自托管、离线） | 内部网络/离线部署需求 |
| [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | 桌面 UI 字体大小可调（多个级别） | 老年用户/DPI/电视的无障碍需求——"适合新手"标签 |
| [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) | 社区和收件箱集成（进行中） | 产品生态扩展 |

**路线图信号：**

- **离线部署支持**（#8015）是明确的企业需求——鉴于用例清晰，很可能在近期实现
- **桌面端无障碍**（#7999）被标记为适合新贡献者，解决了老年用户和高 DPI 用户的实际无障碍问题——有望纳入下次桌面发布
- **心跳/Cron 控制**（#2359）符合行业模式，解决了一个特定的模型交互差距——有望纳入近期版本
- **社区集成**（#7903）正在开发中——产品生态扩展正在进行中

---

## 用户反馈总结

### 痛点识别

1. **提供商可靠性**：用户报告 OpenAI 图像模型和 Kimi K3 的连接测试通过但实际生成失败——表明健康检查与运行时行为之间存在差距
2. **大型技能处理**：80MB+ 的技能下载在 30 秒后静默失败；用户进度丢失且无明确错误提示
3. **桌面端可用性**：Linux 用户无法缩放；桌面端字体大小不可调——老年用户和高 DPI 用户的无障碍缺口
4. **任务计数不一致**：仪表盘显示的运行任务数与 API 显示的不一致——让监控系统状态的用户感到困惑
5. **转录配置**：用户在切换提供商后无法更新 transcription_model——静默破坏功能

### 满意度信号

- QQ 网关重复消息问题（#7946）在一周内 **修复并关闭**——响应迅速
- 终端描述符限制修复（#8023）解决了长期的生产问题
- 社区/论坛集成正在开发中——用户请求生态功能

---

## 待办事项关注

### 长期未解决的重要项目

| Issue | 存在时间 | 标题 | 状态 |
|-------|----------|------|------|
| [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) | **约 6 个月** | HEARTBEAT_OK / CRON_OK 功能请求 | OPEN，3 条评论 |

**注意：** Issue #2359（创建于 2026-03-26）仍然开放，参与度较低。它解决了一个与 OpenClaw 模式对齐的模型控制增强功能。建议优先处理或进行清晰的路线图沟通。

---

*基于 github.com/agentscope-ai/QwenPaw 的 GitHub 数据生成 — 2026-09-30*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English ZeroClaw project digest into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate while maintaining all the structure and technical terms exactly as they are.

Key translations:
- ZeroClaw -> ZeroClaw (keep as is)
- digest -> 动态
- Overview -> 概览
- Releases -> 版本发布
- Project Progress -> 项目进展
- Community Hot Topics -> 社区热点
- Bugs & Stability -> 缺陷与稳定性
- Feature Requests & Roadmap Signals -> 功能请求与路线图信号
- User Feedback Summary -> 用户反馈概要
- Backlog Watch -> 待办关注

Let me go through the full content and translate it naturally in technical Chinese register.</think>

# ZeroClaw 项目动态 — 2026-09-30

## 1. 今日概览

ZeroClaw 过去 24 小时保持活跃开发，共更新 27 个 Issue 和 50 个 PR。项目在配置 schema v4 迁移和插件生命周期管理方面展现出强劲势头。多个高优先级安全漏洞（P0）已报告，涉及会话授权和内存平面隔离，同时三个新 RFC 表明知识管理和协议支持方面的重大架构方向。三个 PR 已合并/关闭，47 个仍处于开放状态——这表明尽管有大量功能积压，但 pipeline 吞吐量仍然健康。

---

## 2. 版本发布

**今日无版本发布。** 项目过去 24 小时未发布新版本。

---

## 3. 项目进展

| 状态 | 数量 |
|--------|-------|
| PR 更新（24h） | 50 |
| PR 已合并/关闭 | 3 |
| PR 开放 | 47 |
| Issue 更新（24h） | 27 |
| Issue 已关闭 | 4 |

### 值得关注的已合并/关闭 PR

| PR | 标题 | 状态 |
|----|-------|--------|
| [#11260](https://github.com/zeroclaw-labs/zeroclaw/pull/11260) | fix(config): stop clamping explicit context budgets to the 32k fallback stub | Closed |
| [#9254](https://github.com/zeroclaw-labs/zeroclaw/pull/9254) | feat(infra): IBM Db2 session-persistence backend | Closed (Deferred) |

### 重要推进中的工作

- **[#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)** — 配置 schema V4 迁移，处理弃用密钥并对缺失 schema_version 发出警告（XL 规模，多组件）
- **[#11238](https://github.com/zeroclaw-labs/zeroclaw/pull/11238)** — 修复配置编辑器无法写入声明式 cron 调度的问题（对应 #11237）
- **[#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221)** — 将 SaaS 和 coding-CLI 工具置于可选特性门控后（重大架构变更）
- **[#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262)** + **[#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261)** — 插件更新支持验证替换和分阶段准入（堆叠 PR）
- **[#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068)** — 按发送者角色收窄频道轮次（安全与架构）

---

## 4. 社区热点

### 最活跃 Issue（按评论数）

| Issue | 标题 | 评论数 | 关注点 |
|-------|-------|----------|-------|
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Plugin-owned Kanban board for agent work | 10 | 插件架构，agent 持久化 |
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Interactive agent session caps context at 32k tokens | 6 | 配置，运行时 |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent doesn't have context of the cron job it's run | 5 | Cron 集成，agent 记忆 |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC: Knowledge graph as first-class agent memory layer | 4 | 架构，记忆子系统 |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | OIDC milestone: canonical principals and inbound auth | 4 | 安全，身份 |

### 分析

讨论最多的 Issue（#8832，10 条评论）反映了社区对通过插件所有权的看板实现持久化 agent 工作空间的强烈需求——这表明用户对超越临时会话的 agent 状态管理有更大需求。上下文 token 上限 bug（#10068，6 条评论）是一个反复出现的问题，用户期望 131k tokens 却撞上 32k 上限，暗示配置层面存在摩擦。知识图谱（#11053）和知识语料/RAG（#11235）的 RFC 表明用户对文档支撑的 AI 能力有需求。

---

## 5. 缺陷与稳定性

### 严重（P0）— 安全与数据丢失

| Issue | 标题 | 严重性 | 状态 | 修复 PR？ |
|-------|-------|----------|--------|---------|
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | Session resume restores forwarded environment after admin revocation | S0 | Open | No |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | Delegated memory tools lose principal scope | S0 | Open | No |
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | Owned sessions reach the shared memory plane through spawn_subagent | S0 | Open | No |

### 高（P1）

| Issue | 标题 | 严重性 | 状态 | 修复 PR？ |
|-------|-------|----------|--------|---------|
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | Queued session operations retain revoked administrator ownership bypass | S0 | Open | Partial (#10412) |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) | SOP execution accepts wildcard tool selectors without tools:execute | S0 | Open | No |
| [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) | Config editor cannot write declarative cron schedule | S1 | Open | Yes (#11238) |

### 中（P2）

| Issue | 标题 | 严重性 |
|-------|-------|----------|
| [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Context capped at 32k despite config | S2 |
| [#11215](https://github.com/zeroclaw-labs/zeroclaw/issues/11215) | Tool calling fails on OpenCode Go (name field not supported) | S2 |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | WhatsApp Web drops image/video captions | S2 |
| [#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) | initial_prompt not sent to Groq/OpenAI transcription | S3 |

**概要：** 三个 P0 安全 bug 涉及授权绕过和内存平面泄漏。项目对 #11126 有部分修复（#10412），但 #11197、#11198 和 #11239 仍未处理。这些需要紧急关注。

---

## 6. 功能请求与路线图信号

### 新 RFC（架构信号）

| Issue | 标题 | 领域 |
|-------|-------|--------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) for the agent | 记忆/知识 |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A protocol crate (zeroclaw-a2a) | 互操作性 |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC: Knowledge graph as first-class agent memory layer | 记忆 |

### 高价值功能进展

| Issue | 标题 | 状态 |
|-------|-------|--------|
| [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | Plugin-owned Kanban board | Accepted, in progress |
| [#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244) | Agent deletion and bulk cleanup in ZeroCode | In progress |
| [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) | Schema V4 breaking cut | In progress |
| [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) | Standard text editing in ZeroCode composer | In progress |
| [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) | Verified plugin update with failure rollback | Accepted |

**预测：** 下一个版本可能包含 schema V4 迁移工具（#11218）、插件更新 CLI（#11262），以及可能将知识图谱 RFC（#11053）作为基础记忆层。三个 RFC 表明 ZeroClaw 正在向"知识原生"方向演进。

---

## 7. 用户反馈概要

### 已表达的痛点

1. **配置摩擦** — 用户报告尽管设置了 `max_context_tokens = 131072`，但 token 上下文仍被限制在 32k（#10068）。这在多个场景中出现，影响交互式会话。
2. **安全边界混淆** — 多个授权绕过（#11197、#11198、#11239）表明用户遇到了意外的权限提升，特别是在会话恢复和委托工具场景。
3. **频道集成缺口** — WhatsApp Web 在媒体上丢失字幕（#11257）；转录的 `initial_prompt` 被忽略（#11256）；企业微信缺少主动消息（#7824）。
4. **ZeroCode 体验缺口** — 用户请求 agent 删除（#10244）、作曲家中的文本选择（#10909、#10051）和声明式 cron 编辑（#11237）。

### 积极信号

- OIDC 里程碑接近完成（#8289 核心栈已合并）
- 配置 schema v4 提供清理和现代化
- 插件生命周期管理（安装/更新/回滚）正在加固

---

## 8. 待办关注

### 需要维护者关注的长周期 Issue

| Issue | 标题 | 历时 | 状态 | 关注点 |
|-------|-------|-----|--------|---------|
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent doesn't have context of the cron job it's run | ~5 个月 | In progress | 低活动但高实用性 |
| [#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824) | WeCom proactive messaging | ~3 个月 | Icebox | 功能停滞，可能需要 champion |
| [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) | Schema V4 breaking cut | ~3 个月 | In progress | 大范围；多个 PR 堆叠 |
| [#9254](https://github.com/zeroclaw-labs/zeroclaw/issues/9254) | IBM Db2 backend | ~2 个月 | Deferred | 等待原生驱动 |

### 需要处理的陈旧 PR

| PR | 标题 | 关注点 |
|----|-------|---------|
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) | Schema V4 cut (skills, inert tunables) | 需要作者处理 |
| [#10049](https://github.com/zeroclaw-labs/zeroclaw/pull/10049) | Scope channel prompt guidance | 需要作者处理 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | Multiple models per provider profile | 需要作者处理 |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron agent wall-clock timeout | 陈旧候选 |

---

*基于 zeroclaw-labs/zeroclaw 的 GitHub 数据生成 — 2026-09-30*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*