# OpenClaw 生态日报 2026-10-09

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-09 02:30 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English project digest into Chinese. Let me carefully follow the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths in original form
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the formatting and technical terms.

The content is a project digest about OpenClaw, an AI/software development tool. I need to translate it while keeping:
- All markdown structure (headings, tables, lists)
- Issue numbers like #119720
- URLs
- Version numbers like v2026.9.9
- Technical terms that are commonly used in Chinese tech context
- Emoji

Let me proceed with the translation:</think>

# OpenClaw 项目简报 — 2026-10-09

## 今日概览

OpenClaw 保持高活跃度，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。项目发布了 **v2026.9.9**（185 次提交，112 个 PR，92 位贡献者），标志着又一次增量更新。社区参与度依然强劲，不过 issue 积压中持续出现会话管理、渠道集成和更新机制等主题。仍有相当数量的 P0 issue 处于开放状态，表明生产部署存在持续的稳定性问题。

---

## 发布动态

### v2026.9.9 — openclaw 2026.9.9

**数据：** 185 次提交 · 112 个 PR · 92 位贡献者

发布说明指向 `https://docs.openclaw.ai/releases/2026`（数据中 URL 似有截断）。

---

## 项目进展

### 已合并/关闭活动（24 小时内 139 个 PR 已合并/关闭）

以下 PR 已推进至合并/关闭状态：

- **#107693** [已关闭] — `fix(ai): don't run repairJson on already-valid JSON` (P1) — 修复了一个启发式 bug，其中 `repairJson` 的 `looksLikeWindowsPathPrefix` 误识别了 Python 代码中的有效 token（如 `C:`），导致不必要的 JSON 修复并可能产生 `\n` 加倍问题
- **#167552** [已关闭] — `refactor(state): share admitted worker write envelopes` — 消除了设备 token、重启哨兵、worktree 运行租约和诊断写入中重复的事务入站 envelope 模式

### 推进中的活跃 PR

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#167558](https://github.com/openclaw/openclaw/pull/167558) | refactor(sessions): share worker admission and upstream reads | L | ⏳ waiting on author |
| [#167547](https://github.com/openclaw/openclaw/pull/167547) | improve(agents): reduce main-thread SQLite during retirement | XL | 📣 needs proof |
| [#165486](https://github.com/openclaw/openclaw/pull/165486) | feat: prepare bundled Bun for Windows desktop | XL | ⏳ waiting on author (DRAFT) |
| [#167571](https://github.com/openclaw/openclaw/pull/167571) | improve(storage): reduce duplicate reads around final authority guards | XL | ⏳ waiting on author |
| [#167476](https://github.com/openclaw/openclaw/pull/167476) | chore(deps): update fs-safe to 0.25.0 | S | 👀 ready for maintainer look |
| [#145850](https://github.com/openclaw/openclaw/pull/145850) | fix(agents): ignore empty stream heartbeats as model progress (partial fix for #145203) | L | 👀 ready for maintainer look |
| [#128282](https://github.com/openclaw/openclaw/pull/128282) | fix(ai): clamp OpenAI Responses max_output_tokens to model capacity | S | 📣 needs proof |
| [#163007](https://github.com/openclaw/openclaw/pull/163007) | fix(amazon-bedrock-mantle): recognize ambient aws-sdk authMode in runtime auth | XS | ✅ proof: sufficient |

---

## 社区热点话题

### 活跃度最高的 Issue（按评论数）

| Issue | 标题 | 评论 | 反馈 | 优先级 |
|-------|------|------|------|--------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步 agent 持久化和转录维护在大规模下阻塞 Gateway 事件循环 | 24 | 👍1 | P1 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | **[回归]** Doctor 在规范行缺失时拒绝有效的传统工作区设置 | 20 | 👍0 | P0 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未回收的 hook/tool 子进程，导致僵尸进程累积 | 18 | 👍1 | P1 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 卡住的 agent-DB 资源导致每个 agent 的回复都以通用失败告终 | 16 | 👍0 | P0 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 入站图片在处理前约 3 分钟卡住主通道 | 15 | 👍1 | P1 |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | sessions_spawn 到 claude-cli-runtime 子进程始终失败，抛出 SessionTranscriptWriterClaimReboundError | 14 | 👍0 | P1 |
| [#160610](https://github.com/openclaw/openclaw/issues/160610) | Discord autoPresence 在凭据来自 SecretRef/env 时总是报告"运行时降级" | 13 | 👍0 | P2 |

### 分析

**暴露的深层需求：**
- **事件循环阻塞**是反复出现的主题（#119720、#162211、#160959）—— 用户需要在大规模下稳定、非阻塞的 Gateway 运行
- **更新/包机制**问题多多 — 多个 issue 涉及 `package-swap` 失败（#167376、#167181、#164188、#164113），表明更新路径脆弱
- **渠道特定 bug 持续存在** — WhatsApp、Discord、飞书、Telegram 各自都有影响生产部署的活跃 issue
- **会话管理仍然复杂** — spawn 失败、转录写入器错误和资源泄漏指向会话生命周期的空白

---

## Bug 与稳定性

### 活跃的 P0 关键 Issue

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|------|----------|-----------|
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | Doctor 拒绝有效的传统工作区设置（回归） | 🦐 gold shrimp | 无 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 卡住的 agent-DB 资源导致所有 agent 回复失败 | 🦞 diamond lobster | 无 |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | 原生更新恢复卡在 publication-complete | 🦐 gold shrimp | 无 |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE 升级导致 Doctor 维护被阻塞 | 🦐 gold shrimp | 无 |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 持久的基于文件的 provider 冷却导致用户被阻止数小时 | 🦞 diamond lobster | 无 |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | openclaw triage 子进程未正确退出，阻止重启 | 🐚 platinum hermit | 无 |
| [#156674](https://github.com/openclaw/openclaw/issues/156674) | 2026.9.5 长时间运行的 Codex worker 导致 macOS gateway 资源压力 | 🦪 silver shellfish | 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟（回归） | 🦞 diamond lobster | 无 |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | 启动时阻塞 Gateway 事件循环 40–200 秒，导致重启循环 | 🦐 gold shrimp | 无 |
| [#164972](https://github.com/openclaw/openclaw/issues/164972) | claude-cli 多 agent 团队：可见性矩阵失败 | 🐚 platinum hermit | 无 |

### 正在修复的Notable Bug

- **#145850** — 修复空流心跳被误解释为模型进度（解决 #145203 SSE 流挂起问题）
- **#128282** — 将 OpenAI Responses max_output_tokens 限制为模型容量（防止无效的 token 限制）
- **#163007** — 修复 Amazon Bedrock Mantle 401 错误（aws-sdk auth 模式）

---

## 功能请求与路线图信号

### 活跃的功能请求（按参与度）

| Issue | 标题 | 优先级 | 评论 |
|-------|------|--------|------|
| [#44309](https://github.com/openclaw/openclaw/issues/44309) | 为 A2A 切换添加单向调度模式，无需回复 ping-pong | P2 | 12 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) | 支持单个 Openclaw Gateway 上的多个 Azure/Teams 机器人 | P2 | 9 |
| [#41366](https://github.com/openclaw/openclaw/issues/41366) | 持久的自然语言规则学习 + 明确的多提及回复语义 | P3 | 8 |
| [#56781](https://github.com/openclaw/openclaw/issues/56781) | 压缩和 LCM summaryModel 的备用模型链 | P2 | 7 |
| [#55249](https://github.com/openclaw/openclaw/issues/55249) | 会话标签/昵称以便更轻松识别 | P2 | 7 |
| [#71452](https://github.com/openclaw/openclaw/issues/71452) | list chat / list messages 应支持分页（硬编码 25 限制） | P3 | 7 |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) | 为交互式工作流添加 Slack Modal 支持 | P2 | 7 |

### 路线图信号

- **Windows 桌面扩展**：PR #165486（为 Windows 打包 Bun）表明桌面应用是重点方向
- **性能重构**：`steipete` 的多个 PR 聚焦减少主线程 SQLite（#167547）、消除重复读取（#167571）、优化转录读取（#167238）—— 性能是明确的重点
- **Agent 改进**：会话 worker 去重（#167554）、空心跳处理（#145850）、CLI agent 路由修复表明 agent 子系统正在积极开发中

---

## 用户反馈摘要

### 痛点

1. **更新失败** — 多位用户报告更新期间（2026.9.8→2026.9.9、LXC 容器、各种平台）出现 `package-swap` 失败。这削弱了用户对自动更新机制的信心。
2. **事件循环阻塞** — Windows、macOS 和 Linux 用户报告 Gateway 在启动、插件捕获和大规模运行时冻结。这是头等关切。
3. **渠道不稳定** — Discord 显示虚假的"运行时降级"状态；WhatsApp 图片处理卡住；飞书存在每聊阻塞 —— 用户需要可靠的多渠道部署。
4. **Windows 特定问题** — 计划任务无法保持运行；de-DE 升级阻塞 Doctor；Windows 上插件暂存爆炸 —— 平台一致性存疑。
5. **资源泄漏** — 子进程僵尸、长时间运行的 Codex worker 导致的内存压力随时间推移降低系统性能。

### 积极信号

- 项目保持快速发布节奏（每月一次）
- 社区参与度依然很高（每天 500 个 issue/PR 更新）
- 回归测试正在改进（#107693 修复了长期存在的 JSON 解析边缘情况）
- Amazon Bedrock Mantle 支持现已与标准 Bedrock 持平（#163007）

---

## 积压关注

### 长期未回复的重要 Issue

| Issue | 标题 | 时长 | 状态 |
|-------|------|------|------|
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 安装 skill 时未处理 ${XDG_CONFIG_HOME} | 约 7 个月 | ⏳ needs-info |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 Write/exec tool 参数被静默丢弃 | 约 7 个月 | ⏳ needs-info |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron agent 作业在 LLM API 宕机期间静默超时 | 约 7 个月 | 开放 |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DMs 在 #40519 后仍落入 agent:main:main | 约 7 个月 | 开放 |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro textSignature 膨胀导致会话失败 | 约 7 个月 | 开放 |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search tool 始终超时（15s），而 CLI 正常 | 约 2 个月 | ⏳ needs-live-repro |

### 需要维护者审查的过期 Issue

以下带有 `stale` 标签，需要关闭或分类：

- [#44309](https://github.com/openclaw/openclaw/issues/44309) — A2A 切换模式（12 条评论）
- [#51572](https://github.com/openclaw/openclaw/issues/51572) — 重置/修剪时的会话内存 hook（8 条评论）
- [#77700](https://github.com/openclaw/openclaw/issues/77700) — 准备好的运行时解析迁移跟踪（7 条评论）

---

*基于 OpenClaw GitHub 数据生成 — 2026-10-09*

---

## 横向生态对比

<think>The user wants me to translate this cross-project comparison report into Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep technical terms, project names, URLs, code, numbers, etc. in their original form
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section, being careful to maintain the exact structure.

Key terms to translate appropriately:
- "Cross-Project Ecosystem Report" -> "跨项目生态系统报告"
- "Personal AI Assistants & Agents" -> "个人AI助手与智能体"
- "Ecosystem Overview" -> "生态系统概览"
- "Activity Comparison" -> "活动对比"
- "Technical approach differences" -> "技术方案差异"
- "Shared Technical Focus Areas" -> "共同技术关注点"
- "Differentiation Analysis" -> "差异化分析"
- "Community Momentum & Maturity" -> "社区活力与成熟度"
- "Trend Signals" -> "趋势信号"

I need to translate the tables and lists while keeping the exact structure. Let me go through carefully.</think>

# 跨项目生态系统报告：个人AI助手与智能体

## 1. 生态系统概览

开源个人AI助手生态系统正在多个项目中快速迭代，活动集中在三个主要类别：**自主智能体编排**（OpenClaw、Hermes Agent）、**多平台集成消息助手**（ZeroClaw、IronClaw）和**多模态界面框架**（QwenPaw）。所有五个项目都保持着健康的维护活力，每日更新从2到500项不等。该领域呈现出两个明显的成熟度梯队：OpenClaw和ZeroClaw等成熟项目正在关注生产级问题（稳定性、安全性、渠道可靠性），而新进入者（IronClaw）仍聚焦于核心功能开发。值得注意的是，整个生态系统都在应对共同的挑战——上下文/窗口管理、多渠道可靠性、更新机制和资源泄漏预防——这表明各领域虽然在实现上各有不同，但在技术问题上正在趋同。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | QwenPaw |
|--------|----------|-------------|----------|----------|---------|
| **Issues 更新（24小时）** | 500 | 50 | 2 | 17 | 30 |
| **Open Issues** | ~400 | ~50 | 2 | ~17 | ~17 |
| **PRs 更新（24小时）** | 500 | 50 | 2 | 50 | 31 |
| **Open PRs** | 361 | ~50 | 2 | 43 | 24 |
| **合并/关闭（24小时）** | 139 | 14 | 0 | 7 | 7 |
| **发布版本（24小时）** | 1 (v2026.9.9) | 1 (v0.21.6) | 0 | 0 | 0 |
| **贡献者（最新版本）** | 92 | ~2,100 次 PR 合并 | — | — | — |
| **健康等级** | 🟢 稳定 | 🟢 稳定 | 🟡 早期 | 🟢 稳定 | 🟢 稳定 |

---

## 3. OpenClaw 的定位

**相对于同行的优势：**
OpenClaw 保持着生态系统中的最高活动量（每日 500 issues/PRs），展现出成熟的贡献者群体和稳健的 CI/CD 流水线。其最新的 v2026.9.9 版本整合了 112 个 PR 和 92 位贡献者——在所有五个项目中贡献者数量最高。OpenClaw 专注于网关可扩展性和事件循环性能（#119720），这些企业级问题尚未在较新项目中出现。

**技术方案差异：**
- **对比 Hermes Agent：** OpenClaw 采用网关中心化设计，强调持久会话；Hermes Agent 则侧重桌面工作流与bundled运行时（Bun for Windows）。
- **对比 ZeroClaw：** OpenClaw 维护更广泛的多渠道策略（Discord、WhatsApp、飞书、Telegram）；ZeroClaw 对每个渠道进行更深入的专业化处理，并配备明确的安全沙箱（firejail）。
- **对比 QwenPaw：** OpenClaw 的智能体抽象与提供商无关；QwenPaw 与特定提供商的耦合更紧密（其bug报告中 DeepSeek 问题占主导）。

**社区规模：**
OpenClaw 在绝对贡献者数量（最新版本 92 人）和每日活动量上领先。Hermes Agent 的"自 v0.21.5 以来合并 2,100 个 PR"表明其累计势头相当，但发布节奏较慢。

---

## 4. 共同技术关注点

| 需求 | OpenClaw | Hermes | IronClaw | ZeroClaw | QwenPaw |
|-------------|----------|--------|----------|----------|---------|
| **更新/发布机制** | ✅ (关键) | ✅ (阻塞中) | — | ✅ | — |
| **多渠道可靠性** | ✅ (P0) | — | — | ✅ (Telegram) | — |
| **事件循环/阻塞** | ✅ (P1) | — | — | — | — |
| **内存/资源泄漏** | ✅ (P1) | — | — | ✅ (P1) | ✅ |
| **聊天/上下文持久化** | — | — | — | — | ✅ (P1) |
| **桌面应用稳定性** | — | ✅ | — | — | ✅ |
| **跨平台会话** | ✅ | ✅ | — | — | — |
| **安全沙箱** | — | — | — | ✅ (firejail) | — |

**趋同信号：**
生态系统在**更新机制**上呈现最强趋同（OpenClaw、Hermes Agent、ZeroClaw 都有活跃的阻塞问题）和**资源泄漏预防**上（内存增长来自未关闭的文件句柄、僵尸进程或不断增长的缓存）。多渠道可靠性是 ZeroClaw/OpenClaw 的专业化方向，而 Hermes 和 QwenPaw 共同关注桌面应用稳定性问题。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | QwenPaw |
|-----------|----------|--------------|----------|----------|---------|
| **主要目标** | 企业/高级用户 | 个人桌面助手 | 办公QA基准测试 | 安全意识开发者 | 多模态聊天UI |
| **核心差异化** | 网关可扩展性，智能体持久化 | 桌面bundled运行时，跨平台同步 | DeepSeek-V4优化，日基准测试 | firejail沙箱，ZeroCode TUI | 本地UI (Tauri/Electron)，多模态 |
| **架构** | 网关中心化，异步 | 桌面应用中心化，单体 | CLI + 基准测试套件 | CLI优先，RPC提取 | WebView/Tauri UI |
| **安全模型** | SecretRef，RBAC | HERMES_HOME，每运行dotenv | 隐式（无外部插件） | firejail + 命令白名单 | 默认本地only |
| **渠道聚焦** | 广泛（7+渠道） | 桌面优先 | 办公QA，DeepSeek | Telegram聚焦 | Web UI渠道 |
| **发布节奏** | 每月 | 约每月 (v0.21.6今日) | 临时 | 活跃开发 | Beta (v2.2.2系列) |

**显著架构分歧：**
- **OpenClaw** 和 **ZeroClaw** 在后端基础设施（网关、RPC提取）上投入巨资
- **Hermes Agent** 和 **QwenPaw** 优先打磨桌面/Web UI
- **IronClaw** 采用完全不同的范式——基准测试驱动开发，而非用户产品驱动

---

## 6. 社区活力与成熟度

| 项目 | 活动层级 | 发展轨迹 | 成熟度信号 |
|---------|---------------|------------|-----------------|
| **OpenClaw** | 快速迭代 | ↗️ 增长中 | 围绕 v2026.9 趋于稳定；转向性能加固 |
| **Hermes Agent** | 快速迭代 | ↗️ 增长中 | v0.21.6 整合 2,100 个 PR；基础设施重构（RPC proto 提取） |
| **ZeroClaw** | 活跃开发 | ↗️ 增长中 | v0.9.0 路线图；ADR/RFC 治理可见 (#8692) |
| **QwenPaw** | 中等 | → 稳定 | Beta 系列 (v2.2.2)；bug修复聚焦 |
| **IronClaw** | 低 | → 萌芽 | 早期功能开发；无发布节奏 |

**快速迭代者**（高日活动量，重大重构）：OpenClaw，Hermes Agent，ZeroClaw  
**趋于稳定**（bug修复聚焦，节奏稳定）：QwenPaw  
**新兴**（低容量，功能构建中）：IronClaw

---

## 7. AI 智能体开发者的趋势信号

**行业趋同重点（来自全部五个项目）：**

1. **更新/发布系统可靠性** — 多个项目报告更新失败阻塞用户。这表明开源生态系统正在触及"直接发版"部署模式的天花板。预计投资方向：
   - 带回滚的原子更新事务
   - 自我修复的更新恢复
   - 差分/补丁式更新（vs 全量重装）

2. **多渠道生产就绪** — OpenClaw 和 ZeroClaw 都显示活跃的 Telegram/Discord/WhatsApp bug。渠道集成在PoC层面已解决，但在生产规模上仍未解决。进入该领域的开发者应优先考虑：
   - 幂等消息处理
   - 每渠道的重试/退避语义
   - 速率限制感知的分发

3. **资源泄漏预防即服务** — OpenClaw、ZeroClaw 和 QwenPaw 都出现内存泄漏和僵尸进程。这一模式表明，智能体运行时（持有长期状态并生成子进程）需要：
   - 结构化的生命周期钩子
   - 遥测中的显式资源追踪
   - 自动优雅降级

4. **桌面应用作为一等平台** — Hermes Agent 的 Bun 打包（#165486）和 QwenPaw 的 Electron 迁移讨论（#8142）表明桌面不再是事后考虑。"CLI优先"时代正在让位于GUI优先体验，辅以本地模型执行。

5. **安全沙箱成熟度** — ZeroClaw 的 firejail 集成和 OpenClaw 的 SecretRef 模型表明生态系统正在从"信任智能体"转向"验证与约束"。这是一个领先指标：随着智能体处理更多敏感操作，安全将成为主要差异化因素。

**开发者的战略启示：**
- **如果正在构建智能体：** 优先考虑更新机制和资源生命周期——这些是所有项目中摩擦最高的领域。
- **如果正在评估框架：** 具有可见 ADR/RFC 流程的项目（ZeroClaw #8691，Hermes Agent）展现出治理成熟度，长期采用风险更低。
- **如果正在贡献：** 内存管理、渠道可靠性和跨平台会话处理是影响重大但服务不足的领域。

---

*基于 2026-10-09 项目摘要生成。数据来源于 OpenClaw、Hermes Agent、IronClaw、ZeroClaw 和 QwenPaw GitHub 活动。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest from English to Chinese, following specific translation rules. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while preserving the exact structure.</think>

# Hermes Agent 项目简报 — 2026-10-09

## 今日概览

Hermes Agent 今日活跃度高，共更新了 50 个 issue 和 50 个 PR。项目于昨天（10月8日）发布了 **v0.21.6** 版本，这是自 v0.21.5 以来合并约 2,100 个 PR 的补丁版本。发布后出现了多个影响 macOS 桌面端更新和 Windows 插件加载的严重回归问题。社区正在积极调试，今日有 14 个 PR 在更新系统、插件架构和网关改进等方面合并/关闭。

---

## 版本发布

### v0.21.6 — Hermes Agent 补丁版本
**发布日期：** 2026年10月8日

- 补丁版本，整合了自 v0.21.5 以来合并的约 2,100 个 PR
- 为 Docker 和 Hermes Cloud 提供稳定标记版本
- **注意：** 完整维护的版本说明将在 v0.22.0 中发布
- ⚠️ **已报告回归问题：** 见「缺陷与稳定性」部分 — 此版本引入了桌面端更新交接和 api_server 启动问题

---

## 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 |
|----|-----|--------|
| [#132365](https://github.com/NousResearch/hermes-agent/pull/132365) | fix(update): update marker v2 (owner liveness, no age ceiling) + checkout lock | 已关闭 |
| [#135242](https://github.com/NousResearch/hermes-agent/pull/135242) | Onboarding apps list fades at the edges when it scrolls | 已关闭 |

### 推进中的活跃 PR

- [#135409](https://github.com/NousResearch/hermes-agent/pull/135409) — E2E 套件仅在 release 构建上运行，PR 上从不运行
- [#135407](https://github.com/NousResearch/hermes-agent/pull/135407) — fix(update): 在桌面端交接中使用精确的 macOS 进程时钟 *(修复桌面端更新 bug)*
- [#135333](https://github.com/NousResearch/hermes-agent/pull/135333) — 带 Python 依赖的插件可在 Windows MSIX 应用中重新安装
- [#135408](https://github.com/NousResearch/hermes-agent/pull/135408) — fix(pm): 保留插件自身的 extras 记录，跨重建保持
- [#135404](https://github.com/NousResearch/hermes-agent/pull/135404) — feat(gateway): 跨平台的原点安全共享会话 (#79198 的适配器端)
- [#135401](https://github.com/NousResearch/hermes-agent/pull/135401) — fix(tui_gateway): 关闭中断会留下轮次标记
- [#135406](https://github.com/NousResearch/hermes-agent/pull/135406) — 测试运行不再留下孤立网关
- [#125260](https://github.com/NousResearch/hermes-agent/pull/125260) — fix(doctor): 在调用时解析 HERMES_HOME / _DHH，每次运行加载 dotenv
- [#125262](https://github.com/NousResearch/hermes-agent/pull/125262) — fix(tools): 在 Windows 上按文件标识符比较路径
- [#130938](https://github.com/NousResearch/hermes-agent/pull/130938) — fix(gateway): 在整个准备过程中撤回排队的输入（3 个 PR 的堆栈）

---

## 社区热点话题

### 按评论数排名的最活跃 Issue

1. **[#125727](https://github.com/NousResearch/hermes-agent/issues/125727)** — 自动化 Nous 集成被阻塞 (34 条评论)
   - *优先级 P3，comp/agent* — 多个 agent 模块的合并冲突阻塞了计划中的 Nous 到 Enterkey 合并

2. **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992)** — macOS 桌面端更新交接拒绝自己的 hermes 更新 (23 条评论)
   - *优先级 P2，缺陷* — 回归问题导致退出码 2；更新被自己的托管进程持有的锁拒绝

3. **[#132401](https://github.com/NousResearch/hermes-agent/issues/132401)** — scratch 清理静默销毁多天的 agent 工作 (20 条评论)
   - *优先级 P0* — 24 小时空闲删除静默销毁 TMPDIR 中的工作；无日志、无隔离、无保留标记

4. **[#124583](https://github.com/NousResearch/hermes-agent/issues/124583)** — 终端工具后台提示引用不存在的工具名 (15 条评论)
   - *优先级 P2* — 提示告诉用户调用 `process(action='...')`，但实际工具名是 `process_manage`

5. **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)** — 无法通过 API 打开 PR：CreatePullRequest 权限错误 (13 条评论)
   - *优先级 P2，area/auth* — 分叉 PR 创建对特定账户失败

### 分析

活跃讨论主要围绕 **集成/合并复杂性** (#125727)、**更新系统可靠性** (#133992) 和 **临时存储中的数据丢失风险** (#132401)。社区特别关注影响 macOS 和 Windows 更新流程的桌面端平台问题。

---

## 缺陷与稳定性

### 关键 (P0) 缺陷

| Issue | 描述 | 修复状态 |
|-------|------|---------|
| [#132401](https://github.com/NousResearch/hermes-agent/issues/132401) | scratch 清理：24 小时空闲删除静默销毁 TMPDIR 中多天的 agent 工作，无警告或恢复路径 | 尚无修复 PR |
| [#128817](https://github.com/NousResearch/hermes-agent/issues/128817) | 后续轮次重新预填充，因为工具模式在轮次之间变化 | 尚无修复 PR |
| [#133999](https://github.com/NousResearch/hermes-agent/issues/133999) | 出站图像逐出即使未接近提供商限制也重写缓存前缀 | 尚无修复 PR |
| [#128295](https://github.com/NousResearch/hermes-agent/issues/128295) | hermes-assets.nousresearch.com 对所有非浏览器客户端返回 Cloudflare WAF 403 — 更新完全被阻塞 | 尚无修复 PR |

### 高优先级 (P1-P2) 缺陷

| Issue | 描述 | 修复状态 |
|-------|------|---------|
| [#135298](https://github.com/NousResearch/hermes-agent/issues/135298) | 配置零消息平台时 api_server 永不连接（0.21.6 中的回归） | 尚无修复 PR |
| [#134602](https://github.com/NousResearch/hermes-agent/issues/134602) | macOS 上桌面端更新按钮 100% 失败 — 交接的托管程序被拒绝 | [#135407](https://github.com/NousResearch/hermes-agent/pull/135407) 已开 |
| [#134268](https://github.com/NousResearch/hermes-agent/issues/134268) | 桌面端交接导出错误的 pid — 每个桌面端触发的更新都会自我阻塞 | 与上述相关 |
| [#130895](https://github.com/NousResearch/hermes-agent/issues/130895) | 网关：压缩后的轮次遗漏提示缓存 | 尚无修复 PR |
| [#135383](https://github.com/NousResearch/hermes-agent/issues/135383) | 捆绑提供商插件 'solstice' 加载失败：pm-runtime venv 缺少 httpx | 尚无修复 PR |

### v0.21.6 中的回归

- **macOS 桌面端更新失败** — 多个问题（#133992、#134602、#134268、#135405）都与更新交接机制失败有关
- **api_server 启动** — Issue #135298 报告回归：当配置零平台时服务器不连接
- **发布日期显示** — Issue #135217 报告 v0.21.6 显示 v0.21.5 的发布日期

---

## 功能请求与路线图信号

### 值得注意的功能请求

| Issue | 请求 | 优先级 |
|-------|------|----------|
| [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) | 配置驱动的跨平台会话组 — 选择性会话密钥重映射 | P3 |
| [#66543](https://github.com/NousResearch/hermes-agent/issues/66543) | 自定义提供商应将推理 effort 映射到每个模型支持的级别 | P2，需决策 |
| [#90432](https://github.com/NousResearch/hermes-agent/issues/90432) | 将 pre_api_request 升级为 Transform hook — 允许插件覆盖每次请求的 model/provider/base_url | P3 |
| [#526](https://github.com/NousResearch/hermes-agent/issues/526) | Anthropic Context Editing API 集成 — 服务端、缓存友好的工具/思考清理 | P3，area/compression |
| [#70547](https://github.com/NousResearch/hermes-agent/issues/70547) | Kanban：非配置文件分配人的可配置调度器生成 | P3，需决策 |
| [#93731](https://github.com/NousResearch/hermes-agent/pull/93731) | feat(desktop): 就地更新已安装的 AppImage | P2 |

### 路线图指标

- **跨平台会话统一** — [#135404](https://github.com/NousResearch/hermes-agent/pull/135404)（适配器端）和 #79198（配置端）的活跃开发可见
- **Windows AppImage 更新** — PR #93731 瞄准 Linux 桌面端更新缺口
- **MCP/OAuth 改进** — PR #99833 解决 OAuth 状态保留问题
- **Anthropic Context Editing** — Issue #526 显示对服务端上下文管理的兴趣

---

## 用户反馈总结

### 已识别的痛点

1. **更新系统可靠性** — 多位用户报告 macOS 上的桌面端更新失败（退出码 2、自我阻塞）。影响应用更新按钮和 CLI `hermes update`。

2. **插件加载失败** — Windows MSIX 用户报告带 Python 依赖的插件无法安装；macOS 用户报告 solstice 插件因缺少 httpx 而加载失败。

3. **资源下载被阻止** — Cloudflare WAF 阻止非浏览器客户端导致部分用户的 `hermes update` 和 `pm install` 无法工作。

4. **数据丢失风险** — scratch 清理问题（#132401）特别令人担忧：用户可能丢失多天的 agent 工作，且无警告或恢复路径。

5. **配置复杂性** — 围绕自定义提供商、会话处理和平台特定行为的多个问题表明配置管理存在摩擦。

### 积极信号

- 自上一版本以来合并了 2,100 个 PR，维护活跃
- 社区积极参与缺陷调试 — 多个重复/分类报告表明用户在仔细测试
- 跨平台会话功能正在推进（#135404）

---

## 待办关注

### 长期未回复的重要 Issue

| Issue | 存在时间 | 优先级 | 关注点 |
|-------|----------|----------|---------|
| [#125727](https://github.com/NousResearch/hermes-agent/issues/125727) | 约 12 天 | P3 | 自动化 Nous 集成被阻塞 — 等待合并冲突解决 |
| [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) | 约 65 天 | P3 | 跨平台会话组功能 — 等待决策 |
| [#66543](https://github.com/NousResearch/hermes-agent/issues/66543) | 约 85 天 | P2 | 自定义提供商推理 effort 映射 — 需决策 |
| [#526](https://github.com/NousResearch/hermes-agent/issues/526) | 约 218 天 | P3 | Anthropic Context Editing API — 长期功能请求 |

### 待审核/合并的 PR

- [#135409](https://github.com/NousResearch/hermes-agent/pull/135409) — E2E CI 变更（2026-10-09 开）
- [#135404](https://github.com/NousResearch/hermes-agent/pull/135404) — 跨平台会话（2026-10-09 开）
- [#130938](https://github.com/NousResearch/hermes-agent/pull/130938) — 网关输入撤回（2026-10-01 开，需依赖合并）
- [#124195](https://github.com/NousResearch/hermes-agent/pull/124195) — 公共 drain_fd 管道（2026-09-26 开）

---

*简报根据 2026-10-09 的 GitHub 数据生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese. I need to:
1. Translate all the text content while keeping technical terms, code, URLs, issue numbers, etc. in their original form
2. Preserve all Markdown structure exactly
3. Use natural technical Chinese register (like a Chinese developer newsletter)

Let me go through and translate section by section, keeping everything in the right format.

Key things to remember:
- Keep headings
- Keep tables (including the alignment rows with : and ---)
- Keep URLs
- Keep issue/PR numbers like #8129
- Keep code blocks
- Keep bold/italic
- Use natural Chinese technical register</think>

# IronClaw 项目摘要 — 2026-10-09

**代码库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**报告周期：** 2026-10-08 至 2026-10-09

---

## 1. 今日概览

IronClaw 过去 24 小时内保持稳定活跃，共 2 个 issues 和 2 个 pull requests 更新。Issues 和 PRs 均处于开放状态，表明开发工作正在进行中而非已达成里程碑。本期无新版本发布。项目正处于功能扩展阶段，Sendblue iMessage/SMS 集成和性能优化工具（回合开始分类器）方面都有积极进展。本周期内未报告严重 bug 或回归问题。

---

## 2. 发布动态

**过去 24 小时内无新版本发布。**

---

## 3. 项目进度

本期无 pull requests 被合并或关闭。以下 PR 保持开放且活跃：

| PR | 标题 | 范围 | 状态 |
|----|-------|---------|--------|
| [#8119](https://github.com/nearai/ironclaw/pull/8119) | feat(loop-host): opt-in turn-start tool selection with a Jev classifier | docs, dependencies | OPEN |
| [#8127](https://github.com/nearai/ironclaw/pull/8127) | feat: add Sendblue iMessage and SMS extension | feature | OPEN |

**关键进展：** Sendblue 集成（PR #8127）直接实现了 Issue #8130 中提出的功能，表明社区提案与实现工作衔接紧密。

---

## 4. 社区热点话题

**活跃度最高的讨论**（按互动量排序）：

- **[Issue #8129](https://github.com/nearai/ironclaw/issues/8129)** — *每日 ironclaw 失败分类 — 2026-10-08*  
  **作者：** pranavraja99 | **创建于：** 2026-10-08  
  对 officeqa 基准测试失败的分析显示共有 25 个未通过任务，主要是 DeepSeek-V4-Flash 的真实模型质量问题。这是持续进行的每日分类工作的一部分，旨在系统性地追踪和归类模型失败情况。

- **[Issue #8130](https://github.com/nearai/ironclaw/issues/8130)** — *提案：可选的 Sendblue iMessage/SMS 扩展，支持主机自有凭证*  
  **作者：** lookevink | **创建于：** 2026-10-08  
  iMessage/SMS 集成功能提案，包含电话配对、认证 webhook 和终端回复功能。这反映了用户对更广泛通信渠道支持的需求。

**已识别的潜在需求：**
- 系统性的失败分析和基准测试透明度（每日分类工作持续进行）
- 除当前支持的平台外的多渠道通信能力

---

## 5. Bug 与稳定性

**过去 24 小时内未报告任何 bug、崩溃或回归问题。**

每日失败分类（Issue #8129）追踪的是模型质量问题，而非 IronClaw 框架本身的任何新 bug 报告或稳定性问题。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 状态 | 近期纳入可能性 |
|-------|---------|--------|-----------------------------------|
| [#8130](https://github.com/nearai/ironclaw/issues/8130) | Sendblue iMessage/SMS 扩展 | **已在实现中**（PR #8127） | 高——实现进行中 |
| [#8119](https://github.com/nearai/ironclaw/pull/8119) | 基于 Jev 分类器的可选回合开始工具选择 | **审核中** | 中高——新增性能优化 |

**路线图信号：** 提案（Issue #8130）和对应的实现 PR（#8127）在同一天内出现，表明迭代周期快速。回合开始分类器（PR #8119）表明团队关注减少工具选择延迟——这可能是下个版本的重点性能优化方向。

---

## 7. 用户反馈摘要

**已识别的痛点：**
- **模型能力限制：** 失败分类（Issue #8129）显示当前错误"绝大多数是真实的模型质量问题"而非 IronClaw 框架问题，这表明用户可能正在将框架推向模型能力成为瓶颈的复杂任务场景。

**推动开发的使用场景：**
- **多渠道通信：** Sendblue 扩展（Issue #8130 / PR #8127）反映了用户对直接 iMessage/SMS 功能的需求，表明 IronClaw 正被用于个人助理和通信工作流场景。

**满意度指标：**
- 活跃的每日基准测试和分类工作表明用户和维护者都专注于持续的质量改进。

---

## 8. 待办事项关注

本期未发现需要维护者立即关注的长期待回复 issues。所有 issues 和 PRs 都是近期的（过去 48 小时内创建/更新），表明互动及时。

**后续关注：**
- PR #8119（贡献者）可能需要维护者指导
- 每日分类 issues（Issue #8129 及之前）代表积累的基准测试数据——建议定期汇总分析

---

*生成时间：2026-10-09 | 数据来源：GitHub nearai/ironclaw 活动动态*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English project digest into Chinese. Let me carefully follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep technical identifiers as-is (project names, repo slugs, usernames, version tags, file paths, API/config identifiers)
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate:

---

# QwenPaw 项目简报 — 2026-10-09

## 1. 今日概览

2026年10月9日，QwenPaw 展现出极高的开发活跃度，过去24小时内更新了30个 issues 和31个 PR。项目正在积极解决 v2.2.2 测试版系列的稳定性问题，同时推进功能开发。今天没有发布新版本，但有多个 PR 已合并，修复了与 HTTP 源、Windows 兼容性和时区处理相关的关键 bug。Issue 追踪器反映了用户持续关注的两个痛点：聊天历史可靠性和特定提供商的文件处理问题。

---

## 2. 版本发布

今日无新版本发布。最新的版本仍是 **v2.2.2-beta.4**，根据 Issue #8053 正在进行安装验证。

---

## 3. 项目进展

**今日合并/关闭的 PR：**

| PR | 标题 | 状态 |
|----|-----|------|
| [#8144](https://github.com/agentscope-ai/QwenPaw/pull/8144) | fix(console): 支持 HTTP 源上的终端 UUID | 已关闭 |
| [#7089](https://github.com/agentscope-ai/QwenPaw/pull/7089) | ci(datapaw): 添加独立的版本驱动发布流水线 | 已关闭 |
| [#7870](https://github.com/agentscope-ai/QwenPaw/pull/7870) | fix: 稳定 Windows 单元测试 | 已关闭 |
| [#8050](https://github.com/agentscope-ai/QwenPaw/pull/8050) | fix(chats): 解决 DST 感知的进程时区问题 | 已关闭 |

**关键进展：**

- **终端 UUID 修复** — 解决了局域网/Tailscale HTTP 源上 `crypto.randomUUID()` 不可用导致的聊天页面崩溃问题
- **Windows 测试稳定化** — 修复了 Git 字节保留和 Uvicorn 重载相关的两个 Windows 独有单元测试失败
- **DST 时区修复** — 解决了转录本时间戳因夏令时偏移而错位的问题
- **Datapaw 发布流水线** — 为 datapaw 插件添加了独立的版本驱动发布流水线

---

## 4. 社区热点话题

**最活跃的 Issues（按评论数排序）：**

| Issue | 标题 | 评论数 | 活动状态 |
|-------|------|--------|----------|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | [question][bug]: 压缩后刷新前端，历史信息无法全量加载 | 9 | 已关闭 |
| [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | [bug]: 聊天记录和大模型上下文窗口关联 | 5 | 开启 |
| [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | [Bug]: send_file_to_user 产生的 file/image 内容块 + 空 assistant 消息污染会话上下文 | 5 | 已关闭 |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | [Bug]: tool-returned PDF serialized as nested file part, DeepSeek rejects with 400 | 5 | 已关闭 |
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | [Feature]: 支持显示自定义智能体名称和头像 | 4 | 已关闭 |

**分析：** 讨论最多的话题揭示了两个主要的用户关切：
1. **聊天历史可靠性** — 多位用户反映会话历史消失或无法正确持久化保存（#7884、#8134）。这是最活跃的主题，表明这是一个高影响的可用性问题。
2. **与 DeepSeek 的文件/图片处理** — 多个 issues（#8022、#7883、#8064）记录了 PDF 文件处理导致会话永久失效，持续收到 400 错误。这似乎是与 DeepSeek 提供商相关的已知问题。

---

## 5. Bug 与严重程度排名

| 严重程度 | Issue | 描述 | 修复 PR？ |
|----------|-------|------|-----------|
| **高** | [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | 聊天记录完全消失 — 与上下文窗口无关 | 无 |
| **高** | [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | 频繁的页面加载失败 | 无 |
| **高** | [#8115](https://github.com/agentscope-ai/QwenPaw/issues/8115) | 桌面控制台冷启动卡顿 11-25 秒；WebView2 可能静默崩溃 | 无 |
| **中** | [#8143](https://github.com/agentscope-ai/QwenPaw/issues/8143) | 控制台错误刷屏：SVG width/height 接收到非数值 "small" | 无 |
| **中** | [#8122](https://github.com/agentscope-ai/QwenPaw/issues/8122) | 设置页面布局在 v2.2.2 beta4 中损坏 | 无 |
| **中** | [#8129](https://github.com/agentscope-ai/QwenPaw/issues/8129) | 图片缩放丢失 EXIF 方向信息 | 已有 [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) |

**在修复中的 PR：**
- [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) — 图片缩放时保留 EXIF 方向信息
- [#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) — 添加"减少特效"档位以解决 GPU 性能问题（#8135）

---

## 6. 功能请求与路线图信号

**今日新功能请求：**

| Issue | 功能 | 相关性 |
|-------|------|--------|
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 支持配置自定义 Skill/Plugin 市场源（自托管、内网部署） | 企业/内网使用 |
| [#8139](https://github.com/agentscope-ai/QwenPaw/issues/8139) | 添加 You.com 作为无密钥的 web_search 提供商 | 搜索后端扩展 |
| [#8142](https://github.com/agentscope-ai/QwenPaw/issues/8142) | 从 Tauri2 切换到 Electron 以支持 Linux/麒麟 V10 | 桌面平台支持 |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | 将 skill-pool 下载改为可取消的后台任务 | 体验改进 |
| [#8112](https://github.com/agentscope-ai/QwenPaw/issues/8112) | 添加小时制的 Dream 计划预设 | 调度器增强 |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | 添加 view_audio 工具用于音频理解 | 多模态扩展 |

**下个版本可能纳入的候选：** #8015（自定义市场）和 #8083（view_audio）请求符合企业级和多模态的发展趋势。#8137 "减少特效"档位 PR 已在开发中，用于解决集成显卡的 GPU 性能问题。

---

## 7. 用户反馈总结

**痛点分析：**

1. **聊天历史不可靠** — 用户表达沮丧，对话历史"消失"或无法回滚查看。一名用户明确表示："这个体验多差么"。用户认为这与模型上下文窗口无关。

2. **文件处理破坏会话** — 多位用户报告通过 `send_file_to_user` 发送 PDF 文件后会话永久失效，后续所有请求都返回 400 错误。

3. **桌面应用不稳定** — 报告冷启动延迟 11-25 秒、频繁的页面加载失败，以及 WebView2 进程静默崩溃。

4. **UI/UX 回归** — Beta4 中设置页面布局损坏、控制台 SVG 属性错误刷屏，以及集成显卡的 GPU 性能问题。

**满意度信号：**
- Feature request #2865（自定义智能体名称/头像）已关闭 — 表明该功能已实现
- PR #8050 DST 修复已关闭 — 表明在积极修复 bug

---

## 8. 待处理事项

**需要维护者关注的 Issues：**

| Issue | 存在时长 | 状态 | 问题描述 |
|-------|----------|------|----------|
| [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | 约25天 | 开启 | llama.cpp has_update() 静默回滚用户运行时环境 — 第3次出现（#8125） |
| [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | 约10天 | 开启 | 媒体负载拒绝永久破坏会话（PR #8010 已处理） |
| [#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116) | 2天 | 开启 | 消息队列问题 — 用户报告"半年了" |
| [#8131](https://github.com/agentscope-ai/QwenPaw/issues/8131) | 1天 | 关闭 | #8134 的重复 |

**长期问题：** Issue #8116 报告消息队列问题持续半年，存在重复处理和对话归属错误的情况。

---

*基于 2026-10-09 的 GitHub 数据生成*</think>

# QwenPaw 项目简报 — 2026-10-09

## 1. 今日概览

2026年10月9日，QwenPaw 展现出极高的开发活跃度，过去24小时内更新了30个 issues 和31个 PR。项目正在积极解决 v2.2.2 测试版系列的稳定性问题，同时推进功能开发。今天没有发布新版本，但有多个 PR 已合并，修复了与 HTTP 源、Windows 兼容性和时区处理相关的关键 bug。Issue 追踪器反映了用户持续关注的两个痛点：聊天历史可靠性和特定提供商的文件处理问题。

---

## 2. 版本发布

今日无新版本发布。最新的版本仍是 **v2.2.2-beta.4**，根据 Issue #8053 正在进行安装验证。

---

## 3. 项目进展

**今日合并/关闭的 PR：**

| PR | 标题 | 状态 |
|----|-----|------|
| [#8144](https://github.com/agentscope-ai/QwenPaw/pull/8144) | fix(console): 支持 HTTP 源上的终端 UUID | 已关闭 |
| [#7089](https://github.com/agentscope-ai/QwenPaw/pull/7089) | ci(datapaw): 添加独立的版本驱动发布流水线 | 已关闭 |
| [#7870](https://github.com/agentscope-ai/QwenPaw/pull/7870) | fix: 稳定 Windows 单元测试 | 已关闭 |
| [#8050](https://github.com/agentscope-ai/QwenPaw/pull/8050) | fix(chats): 解决 DST 感知的进程时区问题 | 已关闭 |

**关键进展：**

- **终端 UUID 修复** — 解决了局域网/Tailscale HTTP 源上 `crypto.randomUUID()` 不可用导致的聊天页面崩溃问题
- **Windows 测试稳定化** — 修复了 Git 字节保留和 Uvicorn 重载相关的两个 Windows 独有单元测试失败
- **DST 时区修复** — 解决了转录本时间戳因夏令时偏移而错位的问题
- **Datapaw 发布流水线** — 为 datapaw 插件添加了独立的版本驱动发布流水线

---

## 4. 社区热点话题

**最活跃的 Issues（按评论数排序）：**

| Issue | 标题 | 评论数 | 活动状态 |
|-------|------|--------|----------|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | [question][bug]: 压缩后刷新前端，历史信息无法全量加载 | 9 | 已关闭 |
| [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | [bug]: 聊天记录和大模型上下文窗口关联 | 5 | 开启 |
| [#8022](https://github.com/agentscope-ai/QwenPaw/issues/8022) | [Bug]: send_file_to_user 产生的 file/image 内容块 + 空 assistant 消息污染会话上下文 | 5 | 已关闭 |
| [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | [Bug]: tool-returned PDF serialized as nested file part, DeepSeek rejects with 400 | 5 | 已关闭 |
| [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | [Feature]: 支持显示自定义智能体名称和头像 | 4 | 已关闭 |

**分析：** 讨论最多的话题揭示了两个主要的用户关切：
1. **聊天历史可靠性** — 多位用户反映会话历史消失或无法正确持久化保存（#7884、#8134）。这是最活跃的主题，表明这是一个高影响的可用性问题。
2. **与 DeepSeek 的文件/图片处理** — 多个 issues（#8022、#7883、#8064）记录了 PDF 文件处理导致会话永久失效，持续收到 400 错误。这似乎是与 DeepSeek 提供商相关的已知问题。

---

## 5. Bug 与严重程度排名

| 严重程度 | Issue | 描述 | 修复 PR？ |
|----------|-------|------|-----------|
| **高** | [#8134](https://github.com/agentscope-ai/QwenPaw/issues/8134) | 聊天记录完全消失 — 与上下文窗口无关 | 无 |
| **高** | [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | 频繁的页面加载失败 | 无 |
| **高** | [#8115](https://github.com/agentscope-ai/QwenPaw/issues/8115) | 桌面控制台冷启动卡顿 11-25 秒；WebView2 可能静默崩溃 | 无 |
| **中** | [#8143](https://github.com/agentscope-ai/QwenPaw/issues/8143) | 控制台错误刷屏：SVG width/height 接收到非数值 "small" | 无 |
| **中** | [#8122](https://github.com/agentscope-ai/QwenPaw/issues/8122) | 设置页面布局在 v2.2.2 beta4 中损坏 | 无 |
| **中** | [#8129](https://github.com/agentscope-ai/QwenPaw/issues/8129) | 图片缩放丢失 EXIF 方向信息 | 已有 [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) |

**在修复中的 PR：**
- [#8136](https://github.com/agentscope-ai/QwenPaw/pull/8136) — 图片缩放时保留 EXIF 方向信息
- [#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) — 添加"减少特效"档位以解决 GPU 性能问题（#8135）

---

## 6. 功能请求与路线图信号

**今日新功能请求：**

| Issue | 功能 | 相关性 |
|-------|------|--------|
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | 支持配置自定义 Skill/Plugin 市场源（自托管、内网部署） | 企业/内网使用 |
| [#8139](https://github.com/agentscope-ai/QwenPaw/issues/8139) | 添加 You.com 作为无密钥的 web_search 提供商 | 搜索后端扩展 |
| [#8142](https://github.com/agentscope-ai/QwenPaw/issues/8142) | 从 Tauri2 切换到 Electron 以支持 Linux/麒麟 V10 | 桌面平台支持 |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | 将 skill-pool 下载改为可取消的后台任务 | 体验改进 |
| [#8112](https://github.com/agentscope-ai/QwenPaw/issues/8112) | 添加小时制的 Dream 计划预设 | 调度器增强 |
| [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | 添加 view_audio 工具用于音频理解 | 多模态扩展 |

**下个版本可能纳入的候选：** #8015（自定义市场）和 #8083（view_audio）请求符合企业级和多模态的发展趋势。#8137 "减少特效"档位 PR 已在开发中，用于解决集成显卡的 GPU 性能问题。

---

## 7. 用户反馈总结

**痛点分析：**

1. **聊天历史不可靠** — 用户表达沮丧，对话历史"消失"或无法回滚查看。一名用户明确表示："这个体验多差么"。用户认为这与模型上下文窗口无关。

2. **文件处理破坏会话** — 多位用户报告通过 `send_file_to_user` 发送 PDF 文件后会话永久失效，后续所有请求都返回 400 错误。

3. **桌面应用不稳定** — 报告冷启动延迟 11-25 秒、频繁的页面加载失败，以及 WebView2 进程静默崩溃。

4. **UI/UX 回归** — Beta4 中设置页面布局损坏、控制台 SVG 属性错误刷屏，以及集成显卡的 GPU 性能问题。

**满意度信号：**
- Feature request #2865（自定义智能体名称/头像）已关闭 — 表明该功能已实现
- PR #8050 DST 修复已关闭 — 表明在积极修复 bug

---

## 8. 待处理事项

**需要维护者关注的 Issues：**

| Issue | 存在时长 | 状态 | 问题描述 |
|-------|----------|------|----------|
| [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | 约25天 | 开启 | llama.cpp has_update() 静默回滚用户运行时环境 — 第3次出现（#8125） |
| [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009) | 约10天 | 开启 | 媒体负载拒绝永久破坏会话（PR #8010 已处理） |
| [#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116) | 2天 | 开启 | 消息队列问题 — 用户报告"半年了" |
| [#8131](https://github.com/agentscope-ai/QwenPaw/issues/8131) | 1天 | 关闭 | #8134 的重复 |

**长期问题：** Issue #8116 报告消息队列问题持续半年，存在重复处理和对话归属错误的情况。

---

*基于 2026-10-09 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Simplified Chinese while following the strict rules provided. Let me translate it carefully, preserving all formatting, links, numbers, and technical terms.

Key points:
1. Output ONLY the translation, no preamble
2. Keep all Markdown structure exactly as-is
3. Keep URLs, issue numbers, code, paths, etc. as-is
4. Use natural technical Chinese - register of a Chinese developer newsletter
5. No markdown fences around the whole output

Let me translate section by section:</think>

# ZeroClaw 项目简报 — 2026-10-09

## 今日概览

ZeroClaw 今日开发活动频繁，**17 个活跃 Issue** 和 **过去 24 小时更新的 50 个 PR**。项目正在积极推进多个领域的稳定性修复和功能增强——尤其是运行时安全、提供商配置以及 ZeroCode TUI。今日未发布新版本，但多个重要 PR 正在推进合并，包括类型化内置工具清单系统和 RPC 协议提取工作。Issue 队列持续聚焦于 Telegram 频道的 bug 修复、配置处理中的内存泄漏以及 ZeroCode UI 改进。

---

## 发布

今日无新版本发布。最近在代码库中引用的最新版本是 **v0.9.0**（关联 PR #11165）。

---

## 项目进展

### 今日合并/关闭的 PR（7 个）

| PR | 作者 | 摘要 | 状态 |
|----|--------|--------|---------|
| [#11349](https://github.com/zeroclaw-labs/zeroclaw/pull/11349) | IftekharUddin | test(daemon): 在 RPC  drain 重载测试中持有 broadcast-hook 锁 | CLOSED |
| [#11395](https://github.com/zeroclaw-labs/zeroclaw/pull/11395) | IftekharUddin | test(rpc): 在 prompt-against-500 调度测试中跳过提供商重试 | CLOSED |
| [#11380](https://github.com/zeroclaw-labs/zeroclaw/pull/11380) | drbparadise | test(skills): 使创建者缓存时间戳确定性 | CLOSED |
| [#11396](https://github.com/zeroclaw-labs/zeroclaw/pull/11396) | IftekharUddin | test(hardware): 从 fixture 的 answer 开始计时 pipe-holder 测试 | CLOSED |
| [#11305](https://github.com/zeroclaw-labs/zeroclaw/pull/11305) | IftekharUddin | docs(tools): 记录工具层级和保留的核心集合 | CLOSED |
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) | JordanTheJet | docs(runtime): 提出运行时组合契约 | CLOSED |
| [#11469](https://github.com/zeroclaw-labs/zeroclaw/pull/11469) | tidux | fix(security): 在所有主机上识别 null 设备 | CLOSED |

### 推进中的重要开放 PR

- **[#11308](https://github.com/zeroclaw-labs/zeroclaw/pull/11308)** — `feat(tools): 添加类型化内置工具清单和层级棘轮`（规模：XL，发布版本：v0.8.6）— 添加 `zeroclaw_tools::inventory` 的重大架构变更，包含 93 个工具的层级分类。
- **[#11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622)** — `feat(zerocode): 在对话记录中显示消息时间` — ZeroCode 对话记录现在显示 `HH:MM` 时间戳（或更早消息的完整日期时间）。
- **[#11599](https://github.com/zeroclaw-labs/zeroclaw/pull/11599)** — `fix(providers): 为兼容系列原生工具配置生效` — 修复 OpenAI 兼容提供商的 `native_tools` 配置被静默忽略的问题。
- **[#11598](https://github.com/zeroclaw-labs/zeroclaw/pull/11598)** — `feat(security): 命令白名单支持 glob 匹配` — 为 `allowed_commands` 启用目录树 glob 模式。
- **[#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265)** — `feat(cli): zeroclaw 用户命令用于花名册密码生命周期` — 大型功能（规模：XL），用于身份访问管理。
- **[#11165](https://github.com/zeroclaw-labs/zeroclaw/pull/11165)** — `refactor(rpc): 将线缆协议提取到 zeroclaw-rpc-proto` — v0.9.0 筹备工作中正在进行的 RPC 协议定义提取。

---

## 社区热点

### 评论最活跃的 Issue

| Issue | 作者 | 领域 | 评论数 | 摘要 |
|-------|--------|--------|----------|---------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Audacity88 | 架构 | 15 | **[追踪器]: RFC 和设计问题的维护者决策队列** — 追踪等待维护者处理的 RFC 和设计决策的活跃队列。 |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | NiuBlibing | 安全/架构 | 5 | **缩小超大图片而非丢弃它们** — 请求在超过 `multimodal.max_image_mb` 时实现图片缩小而非直接拒绝，并支持通过 `0` 禁用限制。 |
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | tunglambk | 安全 | 3 | **[Bug]: 宣传的 firejail_args 从未应用** — 配置的 `firejail_args` 未转发到 firejail 调用；安全配置缺口。 |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | Audacity88 | 工具 | 3 | **fix(tools): 在模型路由更新后探测保存的提供商别名** — 提供商别名探测读取的是更新前的过时配置而非更新后的运行时快照。 |
| [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | Audacity88 | zerocode | 3 | **[Bug]: ZeroCode 侧边栏在守护进程重启后将失败会话显示为绿色** — 会话状态颜色在守护进程重启时重置的视觉回归问题。 |

### 分析

讨论最多的 Issue（#8692）是一个**元追踪 Issue**，用于 RFC 的维护者决策——表明活跃的设计治理。多模态灵活性请求（#9887）反映了真实的生产痛点，用户希望更灵活的多模态处理而非硬性失败。安全相关 Issue（#11594、#9592）正在吸引关注，表明社区重视健壮的沙盒化和提供商配置的正确性。

---

## Bug 与稳定性

### 高优先级 Bug（P1）

| Issue | 组件 | 严重程度 | 状态 | 修复 PR？ |
|-------|-----------|----------|--------|---------|
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | config/运行时沙盒化 | S2（降级）| 开放 | 无 |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | 工具 | S2（降级）| 进行中 | 无 |
| [#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) | 频道（Telegram）| S1（工作流阻塞）| 已确认 | 无 |

### 中优先级 Bug（10 月 8 日报告）

- **[#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614)** — `map_key_sections` 每次调用都泄漏模式路径，导致守护进程内存增长（S1 工作流阻塞 / 内存泄漏）
- **[#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615)** — Telegram 忽略 429 `retry_after`，导致限流累积
- **[#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618)** — ZeroCode 在守护进程拒绝为 `SESSION_BUSY` 时丢弃排队消息
- **[#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623)** — ZeroCode 丢弃待处理的 `ask_user` 提示且不回复，导致 600 秒超时
- **[#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612)** — 重新运行已批准的 shell 命令会中止智能体循环（由 DefuzeX/KUMA 行为安全测试器报告）

### 低优先级 Bug

- **[#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586)** — ZeroCode 侧边栏状态颜色在守护进程重启时重置
- **[#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613)** — 成本账本对具有隐藏推理的模型（如通过 OpenAI 兼容提供商的 Gemini）少计 token

---

## 功能请求与路线图信号

### 重要的增强 Issue

| Issue | 类型 | 领域 | 优先级 | 摘要 |
|-------|------|--------|----------|---------|
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC | 架构 | P2 | **RFC: A2A 协议 crate（zeroclaw-a2a）** — 提出用于智能体间协议处理的专用 crate |
| [#11626](https://github.com/zeroclaw-labs/zeroclaw/issues/11626) | 功能 | 可观测性 | P2 | **抑制重复的插件出口拒绝记录** — 减少重试插件的日志噪音 |
| [#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) | 功能 | zerocode | — | **在 ZeroCode 对话记录中显示消息时间** — PR #11622 已实现此功能 |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 增强 | 多模态 | P2 | **缩小超大图片 + 用 0 禁用限制** |
| [#11545](https://github.com/zeroclaw-labs/zeroclaw/issues/11545) | 任务 | 智能体循环 | P2 | **在图片恢复后移除已废弃的 StreamErrorWithUsage** |

### 路线图信号

- **v0.8.6** — 工具清单系统（#11308）和文档（#11305）正在推进；预计包含类型化工具层级。
- **v0.9.0** — RPC 协议提取（#11165）是一项重大重构里程碑；还包括通过核心 RPC 分发插件 webhook（#11320）。
- **A2A 协议** — RFC（#11254）表明 ZeroClaw 正在为智能体互操作性标准进行布局。

---

## 用户反馈摘要

### 痛点

1. **Telegram 频道可靠性** — 多个 Issue（#10863、#11615）报告 Telegram 消息处理失败：语音更新重试阻塞消息，且 429 限流被忽略。这是**生产稳定性问题**。

2. **ZeroCode UI 正确性** — 用户报告混乱的 UI 状态：失败会话显示为绿色（#11586）、待处理提示静默超时（#11623）、`SESSION_BUSY` 时消息被丢弃（#11618）。这些削弱了用户对 TUI 的信任。

3. **配置缺口** — `firejail_args` Bug（#11594）和 `native_tools` 配置被静默忽略（#11599 PR）表明用户无法信任配置的安全性和提供商选项是否真正生效。

4. **内存管理** — `map_key_sections` 内存泄漏（#11614）随时间增长守护进程内存是**长期稳定性风险**。

### 积极信号

- 架构 RFC（#8692、#11254）上的强劲参与表明贡献者社区活跃并致力于设计质量。
- 工具清单工作（#11308）和 ADR 追踪（#8691）表明系统性的文档改进。

---

## 积压关注

### 长期追踪 Issue

| Issue | 创建时间 | 状态 | 摘要 |
|-------|---------|--------|---------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 2026-07-04 | 开放 | RFC 和设计问题的维护者决策队列 — 15 条评论，活跃协调 |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | 2026-07-04 | 进行中 | ADR 清单和已接受的 RFC 决策记录 |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | 2026-07-31 | 进行中 | 提供商别名探测修复 — P1，需关注 |

### 需维护者关注的 PR

| PR | 作者 | 风险 | 摘要 |
|----|--------|------|---------|
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | IftekharUddin | 高 | `feat(cli): zeroclaw 用户命令用于花名册密码生命周期` — 规模 XL，需维护者审查 |
| [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320) | IftekharUddin | 高 | `feat(rpc): 通过核心 RPC 分发插件 webhook` — 规模 XL，需作者操作 |
| [#11628](https://github.com/zeroclaw-labs/zeroclaw/pull/11628) | JordanTheJet | 高 | `docs(runtime): 记录有界的 Tailscale 隧道异常` — 需维护者审查 |
| [#11165](https://github.com/zeroclaw-labs/zeroclaw/pull/11165) | JordanTheJet | 中 | `refactor(rpc): 提取线缆协议` — 规模 XL，需作者操作 |

---

*基于 2026-10-09 ZeroClaw 活动生成。所有链接指向 `github.com/zeroclaw-labs/zeroclaw`.*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*