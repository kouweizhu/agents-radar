# OpenClaw 生态日报 2026-09-20

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-20 00:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the OpenClaw Project Digest from English to Chinese. Let me carefully translate while preserving the exact Markdown structure, headings, tables, lists, URLs, issue references, and all formatting.

Let me go through each section and translate it appropriately:

1. **Today's Overview** - High activity, many issues, release notes
2. **Releases** - v2026.9.5 details
3. **Project Progress** - PR table
4. **Community Hot Topics** - Issue discussions
5. **Bugs & Stability** - P0 and P1 issues
6. **Feature Requests & Roadmap Signals**
7. **User Feedback Summary**
8. **Backlog Watch**

I need to:
- Keep headings
- Keep tables (including alignment rows)
- Keep lists
- Keep URLs
- Keep issue references (#12345)
- Keep version numbers
- Translate naturally in Chinese technical register

Let me translate:</think>

# OpenClaw 项目摘要 — 2026-09-20

## 今日概览

OpenClaw 今天进入**极高活跃度状态**——过去 24 小时内有 500 个 issue 和 500 个 pull request 更新，表明 v2026.9.5 发布后开发团队和社区正在密集工作。项目昨天刚发布了最新小版本，包含 64 个直接提交和 503 位贡献者，但该版本伴随大量关键 bug 报告：多个 P0 问题涉及升级失败、Gateway 崩溃以及稳定性回退，导致原本稳定的环境变成了需要数小时恢复的状态。维护团队正在通过大量待审查的 PR 积极处理这些问题，但此次发布周期回退问题范围之广表明需要密切监控。

## 版本发布

### v2026.9.5 — OpenClaw 2026.9.5

**构建：** `ec9c1a1` · **提交数：** 64 个直接提交 · **合并 PR：** 4,179 · **贡献者：** 503

**平台包：**
- [AppImage (amd64)](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
- [Debian 包 (amd64)](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)
- **Linux 伴侣版本：** v2026.9.5 (linux-stable 频道)

发布说明和更新日志见 [docs.openclaw.ai](https://docs.openclaw.ai)。

---

## 项目进展

过去 24 小时共有 **213 个 PR 被合并或关闭**，总计 500 次更新。多个高优先级修复已进入维护者审查阶段：

| PR | 标题 | 状态 |
|----|-----|------|
| [#153276](https://github.com/openclaw/openclaw/pull/153276) | 修复(状态)：在稳态下复用未修改的 SQLite 状态快照 | 📣 需要验证 |
| [#153167](https://github.com/openclaw/openclaw/pull/153167) | 修复：修复 Doctor 关闭竞争导致的 macOS Gateway 故障 | 👀 待维护者审阅 |
| [#153078](https://github.com/openclaw/openclaw/pull/153078) | 修复：手动替换包后重启 Gateway | 👀 待维护者审阅 |
| [#153271](https://github.com/openclaw/openclaw/pull/153271) | 修复：重启后保持已停止的父对话处于取消状态 | 👀 待维护者审阅 |
| [#153267](https://github.com/openclaw/openclaw/pull/153267) | 修复：修复重启、聊天定位和 CI 清理的竞态条件 | 👀 待维护者审阅 |
| [#144324](https://github.com/openclaw/openclaw/pull/144324) | 功能(UI)：在 Control UI 中渲染 LaTeX | 👀 待维护者审阅 |
| [#153245](https://github.com/openclaw/openclaw/pull/153245) | 优化(UI)：减少渲染工作量地加载更早的聊天历史 | 👀 待维护者审阅 |

**重点推进领域：** Gateway 生命周期管理、UI 稳定性、SQLite 性能和升级可靠性。

---

## 社区热点话题

讨论最多的 issue 反映了用户在稳定性和升级路径方面的集中痛点：

1. **[#149361](https://github.com/openclaw/openclaw/issues/149361)** — 综合议题：WebUI 性能和稳定性 (50 条评论，P2)  
   *用户需求：* 持续的 WebUI 崩溃和影响桌面/移动端使用的用户体验问题。

2. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — OpenClaw 泄露未回收的钩子/工具子进程，导致僵尸进程累积 (30 条评论，P1)  
   *用户需求：* 运行时随时间推移的性能退化和资源耗尽。

3. **[#144911](https://github.com/openclaw/openclaw/issues/144911)** — MCP 服务器初始化超时导致 Gateway 因未处理的拒绝而崩溃 (30 条评论，P1)  
   *用户需求：* MCP 服务器初始化失败时 Gateway 的韧性。

4. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — 关键问题：Gateway 内存泄漏 — RSS 从 350MB 增长到 15.5GB (27 条评论，P1)  
   *用户需求：* 长时间运行的 Gateway 稳定运行，不会 OOM 崩溃。

5. **[#152744](https://github.com/openclaw/openclaw/issues/152744)** — Codex 保留状态迁移永不收敛 (19 条评论，P0，已关闭)  
   *用户需求：* 升级后功能正常的会话恢复。

**核心主题：** 升级可靠性、持续负载下的 Gateway 稳定性以及状态迁移完整性。

---

## Bug 与稳定性

### 严重 (P0) — 13 个活跃问题

| Issue | 标题 | 严重程度 |
|-------|------|----------|
| [#152744](https://github.com/openclaw/openclaw/issues/152744) | Codex 保留状态迁移永不收敛 | 🔴 P0，影响:用户体验-发布阻塞 |
| [#152759](https://github.com/openclaw/openclaw/issues/152759) | `openclaw update` 9.4→9.5 因 doctor-failed 失败 | 🔴 P0，影响:用户体验-发布阻塞 |
| [#152689](https://github.com/openclaw/openclaw/issues/152689) | Codex 常驻目录重试填满 os.tmpdir()，产生 342 MB 捕获文件 | 🔴 P0，影响:用户体验-发布阻塞 |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 将稳定环境变为 8 小时故障恢复 | 🔴 P0，影响:用户体验-发布阻塞 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动在 sidecars.model-runtime 处挂起约 17 分钟 | 🔴 P0，影响:用户体验-发布阻塞 |
| [#152968](https://github.com/openclaw/openclaw/issues/152968) | Codex app-server 升级后找不到现有 OAuth 配置 | 🔴 P0，影响:用户体验-发布阻塞 |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | 自我升级死锁与回滚 Cron 失败 | 🔴 P0，影响:用户体验-发布阻塞 |
| [#153177](https://github.com/openclaw/openclaw/issues/153177) | 升级失败：finalize:targetConfigConvergence (2026.9.5) | 🔴 P0 |
| [#153230](https://github.com/openclaw/openclaw/issues/153230) | 升级失败：runtime-verification-failed (2026.9.4) | 🔴 P0 |

**注意：** 多个 P0 问题已有修复 PR 在推进中（例如 #153078 修复手动替换包后的 Gateway 重启，#153167 修复 macOS Doctor 竞争）。

### 高优先级 (P1) — 值得关注的回归问题

- **#97616**：子进程泄漏导致僵尸进程累积 (30 条评论)
- **#91588**：Gateway 内存泄漏 (350MB → 15.5GB RSS)
- **#144911**：MCP 超时导致 Gateway 崩溃
- **#115908**：会话转录投影在持续写入时卡死
- **#112423**：大型 SQLite 转录清理阻塞事件循环

---

## 功能请求与路线图信号

PR 中可见的活跃功能工作表明近期优先事项：

- **Control UI 中的 LaTeX 渲染** ([#144324](https://github.com/openclaw/openclaw/pull/144324)) — 接近完成，"待维护者审阅"
- **LLM 流量拦截钩子** ([#115988](https://github.com/openclaw/openclaw/issues/115988)) — 请求添加阻塞/修改 `llm_input` 和 `llm_output` 钩子；需要产品决策
- **压缩的语义保真度检查** ([#153206](https://github.com/openclaw/openclaw/pull/153206)) — 可选验证，确保压缩不会丢失用户约束含义
- **人类可读的 Telegram 主题名称** ([#7406](https://github.com/openclaw/openclaw/issues/7406)) — 长期的 UI 增强请求

**信号：** 大量升级/自我升级问题可能加速 #107930 的工作（改进 Node.js 版本要求变更时的升级体验）。

---

## 用户反馈摘要

**近期报告的主要痛点：**

1. **升级失败范围广且具破坏性** — 多平台用户（macOS、Linux Mint、Windows 11、Oracle Cloud Linux）报告升级失败，导致系统处于模糊状态或需要数小时的恢复。"静默失败"模式（例如 #152759：进程退出，版本未变）引发大量用户不满。

2. **2026.9.5 在稳定环境中引入了回归** — Issue #153257 记录了从稳定环境升级后需要 8 小时故障恢复的案例。从 9.4 升级的用户报告配置丢失 (#152968)、Gateway 挂起 (#152981) 和 Codex 集成失败。

3. **内存和 CPU 泄漏持续存在** — Gateway 内存泄漏 (#91588) 增长至 15.5GB 以及 WorkerThread CPU 消耗 (#152961) 表明稳态运行中的资源管理存在问题。

4. **状态迁移脆弱** — 多个关于 Codex 保留状态迁移 (#152744) 和会话目录完整性的问题表明持久化状态的升级路径需要加固。

**积极信号：** 社区参与度仍然很高（500 个 issue/PR 更新），维护者响应似乎很迅速——许多最近的 PR 直接针对报告的问题。

---

## 待处理事项

缺乏修复 PR 或需要维护者/产品决策的重要问题：

| Issue | 标题 | 时长 | 状态 |
|-------|------|------|------|
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite 无限制增长：memory_index_chunks + memory_embedding_cache 没有保留策略 | 约 2 个月 | 需要产品决策 |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | 大型 SQLite 数据库启动时运行冗余的完整完整性检查 | 约 7 周 | 需要维护者审查 |
| [#104992](https://github.com/openclaw/openclaw/issues/104992) | 转录脱敏（`***`）在会话恢复时重新播放到模型上下文中 — 安全风险 | 约 2 个月 | 需要安全审查 |
| [#115988](https://github.com/openclaw/openclaw/issues/115988) | 添加阻塞/修改 LLM 拦截钩子 | 约 7 周 | 需要产品决策 |
| [#92960](https://github.com/openclaw/openclaw/issues/92960) | Gateway sessions.describe 丢弃请求的 agentId，通过默认存储解析 global | 约 3 个月 | 需要维护者审查 |
| [#121232](https://github.com/openclaw/openclaw/issues/121232) | memory-core 梦境：ranker 提名的候选者 applier 始终拒绝 | 约 6 周 | 需要维护者审查 |
| [#130955](https://github.com/openclaw/openclaw/issues/130955) | openclaw 内存索引在恰好 2 个文件后停滞 | 约 3 周 | 需要维护者审查 |

这些项目代表了技术债务和架构决策，如果不解决，可能影响长期稳定性和用户信任。

---

## 横向生态对比

<think>The user wants me to translate the entire report into Chinese. I need to:
1. Translate all the text content
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep technical terms, project names, URLs, code, numbers as-is
4. Use natural technical Chinese register

Let me go through and translate section by section.</think>

# AI 智能体生态系统跨项目对比报告 — 2026年9月

---

## 1. 生态系统概览

个人 AI 助手与智能体生态系统正处于快速发展与成熟的阶段。五个活跃的开源项目——OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw——正在竞相打造可靠、可扩展的 AI 智能体平台。领域呈现明显分化：一边是规模化、功能丰富的平台，支持数千并发会话（OpenClaw）；另一边是专注于特定部署场景的专业化项目（IronClaw、ZeroClaw 的渠道侧重）。所有项目共同关注的主题包括稳定性与升级可靠性、审批网关的安全加固、LLM provider 抽象，以及会话管理方面的用户体验优化。五个项目的活跃度都很高，社区参与度显著，表明这是一个快速增长的市场，目前尚未形成统一标准。

---

## 2. 活动对比

| 项目 | Issue 更新 (24h) | PR 更新 (24h) | Release (24h) | 已合并/关闭的 PR | 活跃度层级 |
|------|------------------|---------------|---------------|------------------|-------------|
| **OpenClaw** | 500 | 500 | 1 (v2026.9.5) | ~213 | 🔴 极高 |
| **Hermes Agent** | 50 | 50 | 0 | 0 | 🟡 高 |
| **IronClaw** | 0 | 1 | 0 | 0 | ⚪ 低 |
| **QwenPaw** | 10 | 7 | 0 | 0 | 🟡 高 |
| **ZeroClaw** | 32 | 50 | 0 | 1 | 🟡 高 |

**健康度分析：**

- **OpenClaw**：高迭代速度但存在回归问题（v2026.9.5 发布后出现 13 个 P0 问题）
- **Hermes Agent**：稳定的 issue 流入；聚焦 bug 修复，合入稳定分支
- **IronClaw**：活动极少；单个 XL 功能 PR 已审核约 40 天
- **QwenPaw**：活跃的 bugfix PR，解决控制台稳定性和 provider 兼容性问题
- **ZeroClaw**：PR 与 issue 比例最均衡；安全意识强，多个 S0 修复正在推进

---

## 3. OpenClaw 的定位

### 相比同行的优势

| 维度 | OpenClaw | Hermes | IronClaw | QwenPaw | ZeroClaw |
|------|----------|--------|----------|---------|----------|
| **社区规模** | 503 位贡献者，4,179 个已合并 PR | 成熟社区 | 早期阶段 | 活跃 | 中等规模 |
| **发布周期** | 每月小版本发布 | 不规律 | 极少 | 不规律 | 定期 |
| **功能广度** | 全栈（Gateway、CLI、WebUI、MCP） | 桌面端 + CLI | 纯智能体运行时 | 桌面端 + 智能体 | 运行时 + 渠道 |
| **生态集成** | MCP，40+ provider | 多 provider | IdentyClaw Passport | 有限 | WhatsApp、Telegram、Bluesky、Reddit |
| **稳定成熟度** | 技术债较高（内存泄漏、崩溃） | 中等 | 不明确 | 中等 | 安全意识强 |

### 技术路线差异

OpenClaw 的架构以 **Gateway 边车模式** 为核心，采用持久化会话，深度依赖 SQLite 做状态管理，统一的 CLI/Control UI。相比之下，Hermes 强调 **桌面优先的 UX**，支持本地模型；IronClaw 追求 **极简智能体运行时**，面向实践者部署；QwenPaw 优化 **PawApp 模块化**；ZeroClaw 则是 **渠道原生** 理念，将通讯协议直接嵌入智能体运行时。

### 社区规模对比

OpenClaw 明显领先，拥有 503 位贡献者和 4,179 个已合并 PR。ZeroClaw 和 Hermes Agent 属于中等规模社区（约 2-3 年活跃期），IronClaw 和 QwenPaw 规模较小但正在增长。

---

## 4. 共同技术关注点

### 跨项目需求

| 技术关注点 | 涉及项目 | 具体需求 |
|------------|----------|----------|
| **升级可靠性** | OpenClaw、Hermes、IronClaw | 版本迁移失败、状态损坏、静默回滚 |
| **Provider 兼容性** | OpenClaw、QwenPaw、ZeroClaw | 第三方 LLM provider API 错误（DeepSeek、Anthropic、OpenCode） |
| **安全加固** | OpenClaw、ZeroClaw | 审批网关绕过、无值守执行风险、Shell 命令分类 |
| **状态持久化** | OpenClaw、Hermes、ZeroClaw | 会话恢复、内存管理、SQLite 膨胀 |
| **渠道集成** | ZeroClaw、Hermes | 多平台消息（Telegram、WhatsApp、Discord） |
| **资源管理** | OpenClaw、QwenPaw | 内存泄漏、CPU 耗尽、大文件处理 |

### 模式：升级可靠性危机

所有有发布历史的项目都存在版本升级相关问题。OpenClaw 的 v2026.9.5 发布后出现 13 个 P0 bug；Hermes Agent 存在 8 月份的停滞 PR；IronClaw 唯一的活跃 PR 已审核 40 天。这表明生态系统尚未就版本间的升级契约达成共识。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|------|----------|--------------|----------|---------|----------|
| **主要目标用户** | 开发者、进阶用户、企业 | 桌面端优先用户、爱好者 | 从业者（非技术） | AI 爱好者、构建者 | 运维团队、DevOps |
| **核心价值主张** | 全功能 CLI + Gateway + WebUI | 本地优先桌面体验 | 极简智能体运行时，无依赖 | 模块化 PawApp | 渠道原生部署 |
| **架构理念** | 一体式（Gateway + Agent 统一） | 桌面为中心（本地 + 云混合） | 轻量级智能体运行时 | 模块化应用框架 | 嵌入式通讯协议（WhatsApp Web、Telegram Bot API） |
| **独特优势** | MCP 生态，provider 丰富 | LaTeX 渲染，语义保真度 | 主机介导的 Passport 认证 | 插件治理钩子 | WhatsApp/Telegram 原生，支持投票 |
| **独特劣势** | 内存泄漏，升级不稳定 | provider 矩阵有限 | 社区规模小 | 控制台稳定性回归 | 渠道聚焦面窄 |

### 技术架构分化

- **OpenClaw**：SQLite 支撑的有状态会话，Gateway 边车架构
- **Hermes**：桌面原生，嵌入式运行时，支持本地模型
- **IronClaw**：无进程智能体设计，主机介导的 Passport 认证
- **QwenPaw**：PawApp 模块化架构，SDK 控制平面
- **ZeroClaw**：渠道优先，嵌入式协议处理器（WhatsApp Web、Telegram Bot API）

---

## 6. 社区动能与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw、ZeroClaw | >30 PR/24h，每月发布，高 issue 流量 |
| **活跃开发** | Hermes Agent、QwenPaw | 稳定 PR 流入，聚焦 bug 修复，周期发布 |
| **趋于稳定** | IronClaw | 活动极低，单一功能 PR，存在贡献者疲劳风险 |

### 成熟度指标

- **OpenClaw**：成熟代码库但技术债较高（自 2023 年的内存泄漏、反复出现的升级问题），社区和生态最大
- **Hermes Agent**：中等成熟度；核心稳定，通过 PR 添加功能，社区参与度高
- **IronClaw**：早期阶段；单一维护者/贡献者活跃，存在弃用风险
- **QwenPaw**：中等成熟度；活跃 bug 修复，控制台稳定性是主要关注点
- **ZeroClaw**：安全成熟度强（RFC 流程，S0/S1 严重度分类），渠道开发活跃

---

## 7. 趋势信号

### 从社区反馈中提炼的行业趋势

1. **多 Provider 抽象已是标配**
   - 除 IronClaw 外所有项目都存在 provider 兼容性问题（DeepSeek 400/422、OpenCode 403、Anthropic 缓存 TTL）
   - 用户期望在不同 LLM provider 间无缝切换，无需修改代码

2. **安全治理正在前移**
   - ZeroClaw 的审批绕过 S0 问题（#10968、#10966）
   - OpenClaw 的 MCP 信任网关问题（#88858）
   - 插件可见的策略钩子正在出现（QwenPaw #7878、OpenClaw #115988）
   - **信号**：随着智能体获得工具使用自主权，智能体安全边界正在被重新划定

3. **渠道原生部署正在增长**
   - ZeroClaw 大力投入 WhatsApp Web（投票、群组、图片预览、设备关联）
   - Hermes 和 ZeroClaw 都在解决 Telegram Webhook 对比轮询的问题
   - **信号**：生产部署需要嵌入式通讯协议，而非仅 API 封装

4. **状态迁移与升级可靠性仍未得到充分解决**
   - OpenClaw 发布后 13 个 P0 回归；IronClaw PR 停滞 40 天
   - **信号**：生态系统缺乏健壮的升级契约，这是用户的主要痛点

5. **内存与资源管理仍是未解难题**
   - OpenClaw Gateway 泄漏至 15.5GB RSS；QwenPaw LSP OOM；OpenClaw tmpdir 积累 342MB 捕获
   - **信号**：长时间运行的智能体部署需要加固；随着智能体进入生产环境，这会变得愈发关键**

6. **人在回路架构正在浮现**
   - ZeroClaw RFC #10929（向人类提问）和 #10930（送达回执）
   - OpenClaw 的委派子智能体进度暴露（#10531）
   - **信号**：行业正从纯自主智能体向监督自主模型演进

### AI 智能体开发者的价值要点

| 结论 | 启示 |
|------|------|
| 升级路径需要加固 | 投入迁移测试、状态快照、回滚机制 |
| Provider 抽象层需要全面测试 | 针对 DeepSeek、Anthropic、OpenCode、Gemini、Kimi 进行测试 |
| 安全不能事后补救 | 审批网关、Shell 命令分类、无值守执行限制 |
| 渠道集成是产品差异化因素 | WhatsApp/Telegram 原生功能推动运维团队采用 |
| 生产环境需要资源防护 | 内存限制、CPU 上限、tmpdir 清理、会话压缩 |

---

*跨项目分析基于 2026-09-20 的各项目摘要整理。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble or explanation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, issue/PR references verbatim
- Use natural technical Chinese, like a Chinese developer newsletter

Let me translate this carefully while preserving the structure.</think>

# Hermes Agent 项目摘要 — 2026-09-20

## 1. 今日概览

2026年9月20日，Hermes Agent 展现出高度的开发活跃度，过去24小时内有50个 issue 和50个 PR 更新。项目在多个组件（desktop、CLI、gateway、agent、tools）上持续维护，共有12个 PR 已合并/关闭，38个新 PR 已打开。今天没有发布新版本。社区参与度很高，尤其是在桌面应用稳定性、会话管理和提供商集成方面。若干 P0-P2 严重级别的问题表明核心功能正在持续优化，同时新功能开发也在推进中，包括 webapp 渲染器和 skills hub 改进。

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 项目进展

以下 PR 今日已合并/关闭：

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#116488](https://github.com/NousResearch/hermes-agent/pull/116488) | liuhao1024 | fix(config): 在 DEFAULT_CONFIG 中注册 tools.tool_search.defer |
| [#112679](https://github.com/NousResearch/hermes-agent/pull/112679) | KoNit-K | fix(desktop): 清理实时安装程序日志 |
| [#116460](https://github.com/NousResearch/hermes-agent/pull/116460) | Reporthyein | contributors/emails: 修复 macOS 上的大小写敏感文件名冲突 |
| [#116416](https://github.com/NousResearch/hermes-agent/pull/116416) | 1818TusculumSt | Gateway 在仪表盘内进程内运行时状态误报为 false-negative |
| [#107307](https://github.com/NousResearch/hermes-agent/pull/107307) | gv1983us-commits | Codex 提供商在 Pro Full 和 Pro Light 上报错 |
| [#61634](https://github.com/NousResearch/hermes-agent/pull/61634) | wousp112 | GPT-5.6 推理支持不完整（gateway/CLI 阻止最大值） |
| [#91021](https://github.com/NousResearch/hermes-agent/pull/91021) | pearonjames | 桌面应用重启后无法重新连接 WSL 后端 |
| [#108558](https://github.com/NousResearch/hermes-agent/pull/108558) | DavidMetcalfe | 推理模型在 OpenAI 兼容 gateway 上返回空响应 |
| [#102552](https://github.com/NousResearch/hermes-agent/pull/102552) | zoser69 | 自定义 OpenAI 兼容提供商：选择器中模型重复 |
| [#83080](https://github.com/NousResearch/hermes-agent/pull/83080) | KBBMB | 为图像/视频生成配置命名自定义端点 |
| [#85426](https://github.com/NousResearch/hermes-agent/pull/85426) | MilevskyYakov | 临时提供商故障后自动继续不完整轮次 |
| [#116502](https://github.com/NousResearch/hermes-agent/pull/116502) | chelsealong | fix(agent): 检测泰国计划尾部在 promote-reasoning 停滞时的守卫 |

**关键进展：**
- 修复了 `tools.tool_search.defer` 的配置漂移问题 (#116488)
- 修复了 macOS 的桌面安装程序日志清理问题 (#112679)
- 改进了进程内运行时的 gateway 状态检测 (#116416)
- 解决了推理模型令牌分配问题 (#108558)

---

## 4. 社区热点话题

**按评论数排名的最活跃 issue：**

| Issue | 作者 | 评论数 | 关注点 |
|-------|--------|----------|-------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | dokterdok | 28 | 桌面关闭后机器人群聊应继续运行 |
| [#107307](https://github.com/NousResearch/hermes-agent/issues/107307) | gv1983us-commits | 19 | Codex 提供商错误中断 Hermes 工作 |
| [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) | vykhovanets | 16 | Projects 范式破坏文件夹→会话→侧边栏流程 |
| [#33638](https://github.com/NousResearch/hermes-agent/issues/33638) | undermoon-1228 | 6 | 功能：项目级内存 |
| [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) | giustozzi | 6 | MCP 信任门：未检测到 readOnlyHint（camelCase vs snake_case） |

**需求分析：**
- **会话持久性**：Issue #97681（28条评论）表明用户强烈要求独立于桌面客户端状态的持久化机器人群聊功能——这是一个关键的架构缺口。
- **提供商可靠性**：Issue #107307 和 #108558 都强调了 OpenAI Codex/推理模型集成问题，表明用户正在积极测试高级推理功能。
- **UI/UX 一致性**：Issue #53004 揭示了"一级项目"PR 后的回归问题，影响工作流连续性。

---

## 5. 缺陷与严重程度排名

**P0（严重）— 需要立即处理：**

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#114456](https://github.com/NousResearch/hermes-agent/issues/114456) | 异步委托完成通知在繁忙会话中停滞；/stop 后待处理队列未排出；历史中间插入使提示缓存失效 | OPEN |

**P2（高）— 重要缺陷：**

| Issue | 描述 | 状态 |
|-------|-------------|--------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 桌面关闭后机器人群聊停止工作 | OPEN |
| [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) | Projects 范式破坏侧边栏流程 — "无项目打开" | OPEN |
| [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) | MCP 信任门将所有工具分类为写权限，尽管有 readOnlyHint | OPEN |
| [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) | hermes 更新崩溃后 fleet_restart_pending 标记无法清除 | OPEN |
| [#107307](https://github.com/NousResearch/hermes-agent/issues/107307) | Codex 提供商错误中断 Hermes 工作 | CLOSED |
| [#101880](https://github.com/NousResearch/hermes-agent/issues/101880) | 桌面崩溃（macOS PrintCore 中的 SIGSEGV）打印 Google 文档时 | OPEN |

**今日还提交了以下 P3（中）问题：**
- Telegram 流式传输洪水惩罚 (#116312)
- LSP 服务器因 Node 默认堆内存 OOM (#116446)
- 桌面模型更改静默丢弃上下文上限 (#116467)
- Ctrl+D 在 macOS 上不退出 TUI (#116443)

**相关修复 PR：** [#116488](https://github.com/NousResearch/hermes-agent/pull/116488), [#112679](https://github.com/NousResearch/hermes-agent/pull/112679), [#116496](https://github.com/NousResearch/hermes-agent/pull/116496)

---

## 6. 功能请求与路线图信号

**活跃的功能请求：**

| Issue | 描述 | 优先级 |
|-------|-------------|----------|
| [#33638](https://github.com/NousResearch/hermes-agent/issues/33638) | 项目级内存 — 按 cwd/项目上下文过滤内置 MEMORY.md | P3 |
| [#50715](https://github.com/NousResearch/hermes-agent/issues/50715) | 用户自定义的补充模型列表用于 /model 选择器 | P3 |
| [#83080](https://github.com/NousResearch/hermes-agent/pull/83080) | 为图像/视频生成配置命名自定义端点 | CLOSED |

**进行中的功能（PR）：**
- [#93508](https://github.com/NousResearch/hermes-agent/pull/93508): **feat(webapp)** — 在浏览器中提供桌面渲染器（webapp 模式）
- [#116500](https://github.com/NousResearch/hermes-agent/pull/116500): 从 GitHub 文件夹 URL 安装 Skills hub
- [#114581](https://github.com/NousResearch/hermes-agent/pull/114581): 用于混合代理的每轮单独聚合器命令
- [#65443](https://github.com/NousResearch/hermes-agent/pull/65443): 浏览器冷启动内存守卫（browser.min_available_mb）

**路线图信号：** Webapp 功能 (#93508) 和浏览器内存守卫 (#65443) 表明对资源受限部署的重视。项目级内存 (#33638) 与多项目工作流改进方向一致。

---

## 7. 用户反馈摘要

**从 issue 中识别的痛点：**

1. **会话连续性**：用户对机器人群聊需要保持桌面打开状态感到沮丧 (#97681) — 影响多设备工作流。
2. **提供商稳定性**：Codex 提供商错误导致工作中断 (#107307) — 影响专业使用场景。
3. **Windows/WSL 集成**：桌面重启后无法重新连接 WSL 后端 (#91021) — 影响 Windows 高级用户。
4. **MCP 信任门体验**：只读工具仍提示需要批准，使不信任的 MCP 服务器难以使用 (#88858)。
5. **内存管理**：大型 TypeScript 工作区导致 LSP 服务器 OOM 并使整个 fleet 崩溃 (#116446)。

**满意度信号：**
- 桌面安装程序日志清理 (#112679) 解决了 macOS 终端显示问题
- Gateway 进程内状态修复 (#116416) 提高了仪表盘准确性

---

## 8. 待办事项关注

**需要维护者关注的长等待 issue：**

| Issue | 存在时间 | 状态 | 问题 |
|-------|-----|--------|---------|
| [#53004](https://github.com/NousResearch/hermes-agent/issues/53004) | 约3个月 | OPEN | Projects 范式回归 — 侧边栏流程损坏 |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 约3周 | OPEN | 机器人群聊持久化 — 社区高度关注 |
| [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) | 约1个月 | OPEN | MCP 信任门兼容性 — SDK 属性不匹配 |
| [#94876](https://github.com/NousResearch/hermes-agent/issues/94876) | 约1个月 | OPEN | 安全：/debug 非交互式上传敏感会话数据 |

**停滞的 PR（7天以上无活动）：**
- [#95177](https://github.com/NousResearch/hermes-agent/pull/95177): fix(tools): 用 selector 排出高 fd 管道（自 2026-08-26 起开放）
- [#95170](https://github.com/NousResearch/hermes-agent/pull/95170): fix(agent): 解析工具名模糊修复（自 2026-08-26 起开放）
- [#77085](https://github.com/NousResearch/hermes-agent/pull/77085): fix(update): 对齐已安装包与 uv.lock（自 2026-08-02 起开放）

这些 PR 解决了 fd 限制和依赖同步问题 — 建议检查是否可合并。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese. I need to:

1. Translate all the content while preserving the Markdown structure exactly
2. Keep URLs, numbers, dates, project names, repository slugs, usernames, issue/PR numbers, file paths, and API/config identifiers as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. Output ONLY the translation without any preamble or explanation

Let me translate section by section:

## 1. Today's Overview

## 2. Releases

## 3. Project Progress

## 4. Community Hot Topics

## 5. Bugs & Stability

## 6. Feature Requests & Roadmap Signals

## 7. User Feedback Summary

## 8. Backlog Watch

Let me translate each section carefully:</think>

# IronClaw 项目摘要 — 2026-09-20

## 1. 今日概览

IronClaw 项目（nearai/ironclaw）今日活动较少，过去 24 小时内仅有 **1 个 Pull Request** 更新，**零 Issue** 活动。没有发布任何版本。该项目目前处于低活跃度维护阶段，一条重要的功能 PR（#7499）是主要的正在进行中的开发工作。在过去一天中，没有 PR 被合并或关闭，暗示可能处于平静期，或者维护者正专注于对现有开放 PR 进行代码审查。

## 2. 版本发布

过去 24 小时内**没有新版本**发布。该项目目前没有可报告的版本活动。

## 3. 项目进展

| 类型 | 数量 |
|------|-------|
| PR 合并/关闭（24h） | 0 |
| PR 新建（24h） | 0 |
| PR 更新（24h） | 1 |

**活跃的 PR：**

- **#7499** [[OPEN] feat(identyclaw): host-mediated Passport for practitioners](https://github.com/nearai/ironclaw/pull/7499)
  - *作者:* discernible-io | *创建于:* 2026-08-11 | *更新于:* 2026-09-19
  - *规模:* XL | *风险:* 低 | *范围:* docs, dependencies
  - **概要:** 添加了一个轻量级 host 接入点（`builtin.idcp` + 策略授权/AskAlways 豁免），使无进程 IronClaw 代理能够在无需 shell 或可安装扩展的情况下调用 IdentyClaw Passport。同时在 `deploy/identyclaw/` 下发布了 practitioner 主机工具包（Node CLI + 可选的 `:3921` 回环辅助程序）。

今天没有 PR 被合并或关闭，因此本报告期间没有功能推进到完成阶段。

## 4. 社区热点话题

过去 24 小时内仅有 **1 个 PR** 活跃，**零 Issue**，社区参与度极低。

**值得关注的事项：**

| 项目 | 参与度 | 分析 |
|------|--------|------|
| [PR #7499](https://github.com/nearai/ironclaw/pull/7499) | 更新于 2026-09-19 | 一位新贡献者（`discernible-io`）发起的重大功能更新，引入通过 host 介入方式实现 IdentyClaw Passport 集成。该 PR 自 2026 年 8 月 11 日开放已约 **40 天**，表明正在接受详细审查或等待反馈。 |

**潜在需求信号：** 该 PR 满足了一个实际集成需求——允许无进程 IronClaw 代理通过 IdentyClaw Passport 进行身份验证，而无需 shell 访问或浏览器扩展。这表明用户对 practitioner 部署场景中的身份验证工作流有强烈需求。

## 5. 缺陷与稳定性

过去 24 小时内**没有报告缺陷或稳定性问题**。

| 严重程度 | 数量 |
|----------|-------|
| 严重 | 0 |
| 高 | 0 |
| 中 | 0 |
| 低 | 0 |

没有回归报告、崩溃或稳定性问题被提交。目前没有针对缺陷修复的 PR 处于开放状态。

## 6. 功能请求与路线图信号

基于活跃的 PR 和项目上下文：

| 功能 | 来源 | 可能性 |
|------|------|--------|
| **IdentyClaw Passport 主机集成** | PR #7499（新贡献者） | 高 — 正在积极审查中 |
| Practitioner 主机工具包（`deploy/identyclaw/`）| PR #7499 | 高 — 同一 PR 的一部分 |
| 无进程代理身份验证增强 | PR #7499 隐含 | 中 — 符合无代理部署趋势 |

**预测：** 鉴于 PR #7499 是一个涉及文档和依赖项范围的 XL 规模功能，它可能被纳入即将发布的次版本或主版本中。重点关注 "practitioner" 用例表明 IronClaw 正在向更简单的入门流程和面向非开发人员用户的部署方式扩展。

## 7. 用户反馈摘要

过去 24 小时内没有捕获到明确的用户反馈（带有用户报告、满意度调查或社区讨论的 Issue）。

**推断的用户需求（来自 PR #7499）：**
- Practitioner 需要一种简化的方式来使用 IdentyClaw Passport 身份验证，且无需 shell 依赖或浏览器扩展安装
- 用户需要在受限环境（无进程代理、最小权限设置）中工作的部署选项

## 8. 待办事项关注

| 项目 | 耗时 | 状态 | 关注点 |
|------|------|------|--------|
| [PR #7499](https://github.com/nearai/ironclaw/pull/7499) | ~40 天（创建于 2026-08-11）| OPEN | 最大的活跃 PR；合并前需要详细审查 |

**备注：** 开放中的 PR #7499 已接受审查约 **40 天** 而未合并或关闭，这对于一个 XL 规模的贡献来说值得注意。维护者应考虑向贡献者（`discernible-io`）提供状态更新以保持参与度，因为过长的审查周期可能会阻碍新贡献者的积极性。

---

*生成时间：2026-09-20 | 数据来源：nearai/ironclaw GitHub 活动（过去 24 小时）*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English project digest into Chinese. Let me translate it following the rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references as-is
4. Keep project names, repository slugs, usernames in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Overview

"QwenPaw shows **high development activity** today with 10 newly updated issues and 7 active pull requests."

QwenPaw 今日开发活动频繁，共有 10 个新更新的 issue 和 7 个活跃的 Pull Request。

Wait, let me be more careful with the tone - "high development activity" should be "开发活动频繁" - that's good.

"No releases were published in the last 24 hours."
过去 24 小时内未发布新版本。

"The project appears focused on stability fixes for the console UI and agent core, with several PRs directly addressing reported bugs."
项目目前重点修复控制台 UI 和 Agent 核心的稳定性问题，多个 PR 直接针对已报告的 bug 进行修复。

" Notably, multiple issues relate to provider-specific API incompatibilities (DeepSeek, OpenCode, Kimi) and security boundary inconsistencies."
值得注意的是，多个问题涉及特定供应商的 API 兼容性问题（DeepSeek、OpenCode、Kimi）以及安全边界的不一致。

Let me continue through the whole document...

## 2. Releases

"No new releases" in the last 24 hours."
过去 24 小时内无新版本发布。

## 3. Project Progress

"All 7 pull requests remain **open** (none merged or closed today)."


The PR backlog shows no movement today—none have been merged or closed. A few pull requests are tackling reported issues: the console recovery fix (#7889) addresses the DOM mutation error, and the agent audio rejection handlers (#7886, #7887) target the DeepSeek rejection problems. The file payload retry logic (#7885) is also in progress.

The plugin governance work is advancing with the escalation-only policy hooks (#7880) responding to the feature request. Two other efforts are underway: the PawApp SDK redesign (#7874) and the Creator video control documentation (#7875). The feature pipeline is expanding the plugin governance layer through a pre-tool-call policy hook to enable external classifiers in tool execution governance, while the PawApp SDK control plane is being refactored for more secure domain work exposure.

The discussion volume highlights console stability as the primary concern, particularly around lazy loading failures that trap users in error states. Plugin governance is also generating discussion, reflecting the ecosystem's appetite for extensibility in AI agent governance.

There are two critical issues impacting the core experience: the chat page crashes when an insertBefore operation fails, leaving users stuck on an error screen, and the lazy chunk loading doesn't recover from failures. Both lack proposed fixes at this stage.

Several provider-specific problems are emerging—DeepSeek models are rejecting PDF payloads and audio inputs, OpenCode's free tier is hitting rate limits, and there's a security gap where Kimi-code might bypass existing safeguards. MCP authentication is also failing for static bearer key setups.

The project shows active community engagement, with first-time contributors submitting PRs around plugin governance. The main pain points center on console reliability—users are frustrated by lazy loading failures that break the UI without recovery options, chat history scrolling is limited, and several third-party providers have compatibility issues.

The next release will likely prioritize console stability fixes like lazy loading recovery and DOM mutation handling, along with agent improvements for handling DeepSeek and OpenCode errors, and a plugin governance hook for external policy classifiers.

For issues without corresponding fix PRs, I need to prioritize them by impact: OpenCode's 403 errors and Kimi-code's security bypass are blocking users and should be escalated. MCP Bearer Key support, session directory panel bugs, and chat history length are less urgent but still important for user experience.</think>

# QwenPaw 项目简报 — 2026-09-20

## 1. 今日概览

QwenPaw 今日开发活动频繁，共有 **10 个新更新的 issue** 和 **7 个活跃的 Pull Request**。过去 24 小时内未发布新版本。

项目目前重点修复控制台 UI 和 Agent 核心的稳定性问题，多个 PR 直接针对已报告的 bug 进行修复。值得注意的是，多个问题涉及特定供应商的 API 兼容性问题（DeepSeek、OpenCode、Kimi）以及安全边界的不一致。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 项目进度

所有 **7 个 Pull Request** 仍保持 **open** 状态（今日无合并或关闭）。不过，有多个 PR 直接对应同时间段内报告的 issue：

| PR | 描述 | 对应 Issue |
|---|---|---|
| [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) | fix(console): 修复瞬态 DOM 变更渲染错误导致的控制台崩溃 | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) |
| [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) | fix(agents): 处理未知 input_audio 拒绝 | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) |
| [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | fix(agents): 处理未知音频片段拒绝 | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) |
| [#7885](https://github.com/agentscope-ai/QwenPaw/pull/7885) | fix(agents): 不支持的文件载荷错误后重试 | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) |
| [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | feat(plugins): 添加仅升级策略的工具策略钩子 | [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | feat(pawapp): 重构 SDK 和应用控制平面 | — |
| [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875) | docs(pawapp): 指定 Creator create-video 控制平面 | — |

**功能推进：** 插件治理管道正在扩展，支持暴露给插件可见的 pre-tool-call 策略钩子（[#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) / [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880)），使外部分类器能够参与工具执行治理。此外，PawApp SDK 控制平面正在进行重构，以实现更安全的领域工作暴露（[#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874)）。

---

## 4. 社区热点话题

按评论数量排序，今日讨论最活跃的内容：

1. **#7815** — 控制台在懒加载页面 chunk 加载失败后无法恢复 — 5 条评论  
   *关键的 UI 回归问题。用户除非手动刷新页面，否则会被困在错误界面。*

2. **#7878** — 功能建议：暴露插件可见的 pre-tool-call 策略钩子 — 3 条评论  
   *治理管道扩展；满足插件生态系统对自定义工具策略执行的需求。*

3. **#7888** — 聊天页面卡在"出错了" — 2 条评论  
   *React DOM 变更错误导致聊天路由永久性 UI 失败。*

**潜在需求：** #7815 和 #7888 评论数较高，反映了用户对控制台稳定性的不满——懒加载失败导致 UI 不可用是严重的 UX 回归。插件治理钩子（#7878）表明生态系统对 AI Agent 治理的可扩展性有持续需求。

---

## 5. Bug 与稳定性

按严重程度和用户影响排序：

| 严重程度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| **严重** | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | 聊天页面因 insertBefore NotFoundError 崩溃；持续显示"出错了" | [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) |
| **严重** | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 懒加载 chunk 失败后控制台永久损坏，需刷新才能恢复 | — |
| **高** | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | 工具返回的 PDF 导致 DeepSeek 400 错误（无效文件载荷） | [#7885](https://github.com/agentscope-ai/QwenPaw/pull/7885) |
| **高** | [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | DeepSeek 拒绝 input_audio 内容（422 未知变体）— 导致对话中断 | [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886), [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) |
| **高** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "免费"模型因 403 FreeTierError 失败 | — |
| **中** | [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) | Kimi-code runner 不一致地绕过安全边界检查 | — |
| **中** | [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | MCP OAuth 握手失败（缺少 client_id）— 静态 Bearer Key MCP 服务器无法使用 | — |
| **低** | [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) | 会话级别工作目录面板：可见行数约 3 行，"最近项目"为空，应用按钮禁用 | — |
| **低** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 聊天历史太短 — 用户无法滚动查看之前的对话 | — |

**回归风险：** 控制台 bug（#7888、#7815）影响核心导航功能，是严重的 UX 回归。供应商特定 bug（#7883、#7876、#7882）表明与第三方 LLM 提供商的 API 兼容性测试存在缺口。

---

## 6. 功能需求与路线图信号

社区活跃的功能需求：

- **#7878** — 插件可见的 pre-tool-call 策略钩子（治理管道扩展）  
  *状态：PR #7880 正在进行中；可能是下一个小版本更新的候选。*

- **#7874** — PawApp SDK 和应用控制平面重构  
  *状态：Open 状态 PR；代表了 PawApp 与主聊天之间领域工作暴露方式的架构变更。*

- **#7875** — Creator create-video 控制平面规范  
  *状态：文档 PR；定义了公共 schema、私有操作边界和产物规则。*

**预测：** 考虑到活跃的 PR 数量和 bug 修复压力，下一版本（预计为 v2.2.2）可能包含：
1. 控制台稳定性修复（懒加载恢复、DOM 变更处理）
2. Agent 健壮性改进（DeepSeek/OpenCode 音频/文件重试逻辑）
3. 插件治理钩子，支持外部策略分类器

---

## 7. 用户反馈总结

**今日反馈的痛点：**

- **控制台可靠性：** 用户对懒加载 chunk 失败导致 UI 永久损坏的问题感到不满（[#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815)、[#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888)）。错误边界不会自动恢复。
- **聊天历史可见性：** 至少有一位用户反映聊天历史太短——无法通过滚动查看之前的对话（[#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884)）。
- **供应商兼容性：** 多位用户在使用第三方供应商 API 时遇到错误（DeepSeek 400/422、OpenCode 403 FreeTierError），表明供应商抽象层存在缺口。
- **MCP 集成：** 用户因 OAuth 握手要求无法连接静态 Bearer Key MCP 服务器（[#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879)）。
- **工作目录 UI：** 会话级别目录面板存在可用性问题——可见高度低、空状态、按钮禁用（[#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877)）。

**满意度信号：** 社区活跃贡献（首次贡献者提交 PR #7880）表明围绕插件治理 API 的生态系统参与度积极。

---

## 8. 待办事项关注

今日未发现长期未回复的问题。不过，以下 issue 仍保持 **open 状态且无人认领**，没有对应的修复 PR：

- [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) — OpenCode 免费模型 403 错误
- [#7881](https://github.com/agentscope-ai/QwenPaw/issues/7881) — Kimi-code 安全边界绕过
- [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) — MCP 静态 Bearer Key 支持
- [#7877](https://github.com/agentscope-ai/QwenPaw/issues/7877) — 会话目录面板 UI 问题
- [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) — 聊天历史长度问题

这些事项可能需要维护者进行分类处理，以确保不被忽视。

---

*基于 2026-09-20 的 GitHub 数据生成。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English ZeroClaw project digest into Chinese, following specific rules about preservation of technical terms, URLs, code references, etc.

Let me translate this while:
1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Preserving URLs, issue/PR numbers, code terms exactly
3. Using natural technical Chinese register
4. Translating the narrative content while keeping technical terms in English where appropriate

Let me go through section by section:

## 1. Today's Overview
ZeroClaw 在今天表现出高度的开发活跃度，过去 24 小时内有 **32 个 issue** 和 **50 个 pull request** 更新。项目在多个方向上积极推进：WhatsApp Web 频道改进（原生投票、图片预览、群组功能）、安全加固（审批门控和 git 命令分类），以及 Anthropic 缓存和 Telegram webhook 的 Provider 增强。今天没有发布新版本，但积压工作反映了在运行时、频道和安全领域的持续动能。

## 2. Releases
没有新版本发布。

## 3. Project Progress
### Merged/Closed PRs Today
Keep the table as-is but translate description

### Active PRs Advancing Features
List with translations

## 4. Community Hot Topics
### Most Commented Issues
Keep the table

### Analysis
Translate the analysis

## 5. Bugs & Stability
### Critical/High Severity Bugs
Keep the table, translate descriptions

### Medium/Low Severity Bugs
Keep the table

Security note translation

## 6. Feature Requests & Roadmap Signals
### New Feature Issues
Keep the table

### Roadmap Indicators
Translate

## 7. User Feedback Summary
### Pain Points Identified
Translate

### Satisfaction Signals
Translate

## 8. Backlog Watch
### Issues Needing Maintainer Attention
Keep the table

### Stalled PRs Requiring Action
Keep the table

Let me do the full translation now:</think>

# ZeroClaw 项目摘要 — 2026-09-20

## 1. 今日概览

ZeroClaw 今天表现出高度的开发活跃度，过去 24 小时内有 **32 个 issue** 和 **50 个 pull request** 更新。项目在多个方向上积极推进：WhatsApp Web 频道改进（原生投票、图片预览、群组功能）、安全加固（审批门控和 git 命令分类），以及 Anthropic 缓存和 Telegram webhook 的 Provider 增强。今天没有发布新版本，但积压工作反映了在运行时、频道和安全领域的持续动能。

---

## 2. 版本发布

今天无新版本发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 领域 |
|----|------|------|
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | fix(approval): always_ask survives Full autonomy | 安全 |
| — | *过去 24 小时内合并/关闭了 1 个 PR* | — |

### 推进中的功能 PR

- **[#10984](https://github.com/zeroclaw-labs/zeroclaw/pull/10984)** — WhatsApp Web 原生投票实现 (RustLangLatam)
- **[#10982](https://github.com/zeroclaw-labs/zeroclaw/pull/10982)** — 为传出图片附加内联预览（修复 WhatsApp 上图片卡片为空的问题）
- **[#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084)** — 修复 WhatsApp passkey 门控，使设备绑定能够完成
- **[#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425)** — 内部主体信封和分离的定时任务运行结果（RFC #6954，1/3）
- **[#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640)** — 被动 Telegram 群组上下文
- **[#10954](https://github.com/zeroclaw-labs/zeroclaw/pull/10954)** — 初始化 PowerShell 输出为 UTF-8
- **[#10956](https://github.com/zeroclaw-labs/zeroclaw/pull/10956)** — 检测平台默认 shell
- **[#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713)** — 在历史修剪事件上暴露 token 统计
- **[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** — 将上下文压缩锚定到模型窗口比例

---

## 4. 社区热点话题

### 评论最多的 Issue

| Issue | 标题 | 评论数 | 表情 |
|-------|------|--------|------|
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | [功能]：可选的 Telegram webhook 模式（作为 getUpdates 长轮询的替代方案） | 5 | 👍 1 |
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | [功能]：向父代理暴露委派子代理的进度（工具收据、部分输出） | 4 | — |
| [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | [功能]：Anthropic 缓存标记的可配置 1 小时 prompt-cache TTL | 3 | — |
| [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) | OpenCode 会话头部后续跟进（来自 #10604） | 3 | — |
| [#10759](https://github.com/zeroclaw-labs/zeroclaw/issues/10759) | SOP RPC：在运行详情中保留失败原因 | 3 | — |

### 分析

- **Telegram webhook 模式 (#8046)**：用户希望在 NAT/穿透场景下有长轮询的替代方案 — 这符合生产部署灵活性的需求。
- **子代理可见性 (#10531)**：这是顶级代理循环的重大改进；父代理目前无法看到委派子代理的进度，直到任务完成。
- **Anthropic 缓存 TTL (#10663)**：解决了成本优化问题 — 默认 5 分钟的 TTL 对长时间运行的会话来说太短；PR [#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10724) 已经处理了这个问题。

---

## 5. 缺陷与稳定性

### 严重/高优先级缺陷

| Issue | 标题 | 严重级别 | 修复 PR？ |
|-------|------|----------|-----------|
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web 设备绑定被 WhatsApp 新的 passkey/SHORTCAKE 破坏 | S1 - 工作流受阻 | [#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084) 进行中 |
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 无人值守代理以无 ApprovalManager 方式运行 — 风险配置审批被静默忽略 | S0 - 安全风险 | — |
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | git 写操作通过全局选项 (-C/--git-dir) 绕过风险分类器 | S0 - 安全风险 | — |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Git --attr-source 可隐藏变异子命令以绕过审批分类 | S0 - 安全风险 | — |
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | Seam 清理器重写签名推理；Anthropic 拒绝重放的 thinking | 中等 | 进行中 |

### 中等/低优先级缺陷

| Issue | 标题 | 严重级别 |
|-------|------|----------|
| [#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981) | 传出的 WhatsApp 图片没有 jpegThumbnail — 手机显示空卡片 | S2 |
| [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) | 入站图片未下载 — 代理收到"[Image]"文本 | S2 - 视觉功能不可用 |
| [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) | WhatsApp 双向 @mention 失效 | S3 |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | 中断作用域键在组件边界间冲突 | S2 |

**安全注意**：两个新的 S0 问题（#10968、#10966）标记了无人值守代理和 git 操作中的审批绕过风险 — 需要维护者立即审查。

---

## 6. 功能需求与路线图信号

### 新功能 Issue

| Issue | 标题 | 优先级 | 可行性 |
|-------|------|--------|--------|
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | WhatsApp Web：实现 create_room 和 invite_user 用于群组创建 | — | 高 |
| [#10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983) | 原生投票：给投票工具添加 Channel hook 并在 WhatsApp Web 上实现 | — | 高（PR #10984 进行中）|
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | 主机范围的准入控制和每个代理的资源边界 | P2 | 中等 |
| [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) | 为定时任务/心跳调度添加 jitter 窗口 | — | 中等 |
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | RFC：代理向人类提问的单一持久原语 | P2 | RFC 阶段 |
| [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | RFC：出站消息的回执 | P2 | RFC 阶段 |

### 路线图指标

- **v0.8.6**：运行时投递工作继续进行（#7432 追踪器）
- **v0.9.0**：网关分离（第 3 阶段）在 #7432 中追踪
- **WhatsApp Web**：积极投入功能对等（投票、反应、群组、图片预览）
- **安全**：RFC #10929、#10930 表明消息持久性和人机原语方面的架构工作

---

## 7. 用户反馈总结

### 痛点

1. **WhatsApp 图片处理损坏** — 用户报告代理收到字面意思的"[Image]"文本而不是可下载内容；传出图片在手机上显示空卡片。
2. **无人值守代理安全漏洞** — 定时任务/心跳/无头 SOP 运行静默绕过审批门控（#10968）。
3. **子代理不透明** — 父代理无法看到委派子代理的进度，直到任务完成（#10531）。
4. **WhatsApp 设备绑定** — 新的 passkey 要求阻止新部署（#8627）。
5. **成本警告被忽略** — 运行时忽略 `cost.warn_at_percent` 配置（#10950）。

### 积极信号

- Telegram webhook 兴趣（#8046）表明生产部署场景需求。
- Anthropic 缓存 TTL 增强（#10663/#10724）满足了成本敏感的企业用户需求。
- 上下文压缩比例（#9535）让运维人员更好地控制 token 预算。

---

## 8. 积压关注

### 需要维护者关注的 Issue

| Issue | 标题 | 状态 | 状态 |
|-------|------|------|------|
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web passkey 设备绑定 | 约 3 个月 | 已接受，PR #10084 进行中 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 运行时和网关投递追踪器 | 约 3 个月 | 进行中 |
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | Telegram webhook 模式 | 约 3 个月 | 已接受 |
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 无人值守代理审批绕过 | 1 天 | 开放 — **安全风险** |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Git --attr-source 绕过 | 1 天 | 已接受 — **安全风险** |

### 需要推动的停滞 PR

- **[#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)** — Bluesky 和 Reddit 的发送者授权（需要维护者审查）
- **[#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430)** — Gemini 语音转语音代理（功能门控，等待审查）
- **[#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561)** — Telegram 多消息流式传输（需要作者行动）

---

*本摘录基于 2026-09-20 的 GitHub 数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*