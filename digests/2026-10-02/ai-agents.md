# OpenClaw 生态日报 2026-10-02

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-02 01:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English OpenClaw project digest into Chinese. I need to:

1. Translate the content into Simplified Chinese
2. Keep all formatting exactly as-is (headings, tables, lists, etc.)
3. Keep all technical identifiers, URLs, issue numbers, etc. unchanged
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate section by section while preserving all formatting.</think>

# OpenClaw 项目摘要 — 2026年10月2日

## 1. 今日概况

OpenClaw 保持高活动度，**过去24小时内更新了 500 个 issue 和 500 个 PR**。项目目前正在处理多个**关键稳定性问题**，尤其是 Windows 平台回归和网关组件内存泄漏方面。发布版本 **v2026.8.34** 已作为新的 extended-stable（LTS 等效）通道发布，而开发分支继续解决 2026.9.x 系列的重大回归问题。社区参与依然激烈，多个 P0 issue 吸引了大量讨论。

---

## 2. 发布动态

### v2026.8.34 — Extended-Stable 发布
**发布日期：** 2026年10月 | **通道：** `extended-stable`（LTS 等效）

这是一个**仅网关**版本，包含 2026 年 8 月底的 OpenClaw 以及：
- 关键安全更新
- 可靠性和性能修复
- 新模型支持功能

**迁移说明：** 旧稳定版用户应考虑升级到此版本以获得生产稳定性。2026.9.x 系列当前存在影响 Windows 和大型会话存储的已知回归。

---

## 3. 项目进展

### PR 活动（过去24小时）
- **更新的 PR 总数：** 500
- **开放：** 292 | **已合并/关闭：** 208

### 值得注意的已合并/就绪 PR

| PR | 描述 | 状态 |
|----|-------------|--------|
| #163161 | refactor(ui): deslop browser vocabulary and contract types | 待维护者审核 |
| #163158 | fix(plugins): record unmet compatibility removal conditions | 待维护者审核 |
| #163156 | fix(codex): distinguish client acquisition timeout stages | 待维护者审核 |
| #163148 | fix(auto-reply): stop posting no-reply notice when group command refused | 待维护者审核 |
| #163143 | fix(release): restore recovery diagnostics in isolated source harnesses | 待维护者审核 |
| #163032 | fix: completion turns lose delegation tools after same-model retries | 需要验证 |
| #163030 | fix(sessions): preserve details after background writes | 待维护者审核 |
| #158251 | fix: keep subagent registration responsive during database contention | 需要验证 (P1, 安全边界风险) |
| #161759 | fix(workers): settle remote turn ownership | 需要验证 (P1) |

---

## 4. 社区热点话题

### 最活跃的 Issue（按评论数）

1. **#143524** — SQLite WAL 增长至 1.4–2.8 GB，尽管 wal_autocheckpoint=1000（Windows）
   - **评论：** 103 | **严重程度：** P0, crash-loop
   - [查看 Issue](https://github.com/openclaw/openclaw/issues/143524)
   - *根本需求：* Windows 上生产就绪的 SQLite 检查点机制

2. **#153257** — OpenClaw 2026.9.5 将稳定环境变为8小时故障恢复
   - **评论：** 40 | **严重程度：** P0, crash-loop
   - [查看 Issue](https://github.com/openclaw/openclaw/issues/153257)
   - *根本需求：* 生产部署的稳定升级路径

3. **#149538** — 网关就绪但从不提供服务；/health 超时
   - **评论：** 23 | **严重程度：** P0, crash-loop
   - [查看 Issue](https://github.com/openclaw/openclaw/issues/149538)
   - *根本需求：* 大规模（632个代理集群）网关就绪信号可靠性

4. **#157067** — Windows 隔离 cron 设置传递不可克隆的 Proxy 到会话历史
   - **评论：** 21 | **严重程度：** P1, 已关闭
   - [查看 Issue](https://github.com/openclaw/openclaw/issues/157067)

5. **#139710** — 中途插件生成替换杀死系统代理轮次
   - **评论：** 18 | **严重程度：** P1
   - [查看 Issue](https://github.com/openclaw/openclaw/issues/139710)

---

## 5. Bug 与稳定性

### 严重（P0）— 需要立即关注

| Issue | 摘要 | 严重程度 | 状态 | 修复 PR？ |
|-------|---------|----------|--------|---------|
| #143524 | SQLite WAL 增长至 1.4–2.8 GB，阻止网关启动（Windows） | P0, crash-loop | 开放 | 无 |
| #153257 | 2026.9.5 将稳定环境变为8小时故障恢复 | P0, crash-loop | 开放 | 无 |
| #149538 | 网关就绪但从不服务；事件循环枯竭 | P0, crash-loop | 开放 | 无 |
| #159662 | prepared-model-catalog.worker.js 每小时泄漏 4-5 GB | P0, crash-loop | 开放 | 无 |
| #160521 | 网关崩溃：状态 DB 读取密封错误 | P0, crash-loop | 开放 | 无 |
| #155859 | 网关启动时间随插件数量线性增长 | P0, ux-release-blocker | 开放 | 无 |
| #160386 | 2026.9.6 导致严重 SQLite I/O 压力，WebUI 超时 | P0, crash-loop | 开放 | 无 |
| #158239 | 网关在 kernel < 5.6 上启动失败 | P0, ux-release-blocker | 开放 | 无 |
| #161654 | Windows DataCloneError：session-history env Proxy | P0, 回归 | 已关闭 | 有（已关联）|
| #161828 | Windows chat.send/heartbeat DataCloneError 失败 | P0, 回归 | 已关闭 | 无 |

### 高优先级（P1）— 重大影响

| Issue | 摘要 | 影响 |
|-------|---------|--------|
| #148707 | 回复丢失：'no active tool authority snapshot'（2026.9.4 回归） | message-loss |
| #97616 | 泄漏未回收的 hook/tool 子进程，僵尸进程积累 | crash-loop |
| #114612 | SQLite 无界增长：memory_index_chunks + memory_embedding_cache | crash-loop |
| #85030 | MCP 工具未注入子代理会话 | session-state |
| #121232 | memory-core dreaming：ranker 推荐的候选人 applier 总是拒绝 | session-state |

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 描述 | 优先级 | 反馈 |
|-------|-------------|----------|-------|
| #6615 | 功能：为 exec-approvals 添加黑名单支持 | P2 | 👍 8 |
| #71097 | 功能：为 exec.security 添加黑名单模式 | P2 | — |
| #20935 | 功能：代理内存变更的审计日志 | P2 | — |

### 预示近期重点的 PR

- **#160378** — 修复工具被拒绝时的 cron skill 收集审查（docs，待维护者审核）
- **#161440** — 保留技能的源主机来源信息（待维护者审核）
- **#160442** — perf(nodes): 只加载 worker turn 需要的部分（待维护者审核）

**信号：** 预计在即将发布的版本中将增强安全控制（黑名单模式）和改进技能/来源追溯功能。

---

## 7. 用户反馈摘要

### 关键痛点

1. **Windows 平台不稳定** — 多个严重问题（#143524、#157067、#161654、#161828、#158239）表明 Windows 用户正经历重大摩擦：
   - SQLite WAL 检查点失败
   - process.env Proxy 的 DataCloneError
   - 会话创建失败
   - 旧内核上网关启动失败

2. **内存泄漏** — 报告了三个主要内存泄漏问题：
   - prepared-model-catalog.worker.js（每小时 4-5 GB）
   - 大型集群上网关事件循环枯竭
   - 未回收的子进程僵尸

3. **2026.9.x 回归风暴** — 用户报告从稳定版（2026.8.x）升级到 2026.9.x 导致：
   - 8小时恢复会话（#153257）
   - 严重 SQLite I/O 压力（#160386）
   - 网关启动时间随插件数量增长（#155859）

### 积极信号

- **v2026.8.34 extended-stable 版本** 满足了稳定 LTS 通道的需求
- 社区参与度依然很高（500 个 issue/PR 活动）
- 多个 Windows 特定修复正在进行中（PR #161654、#161828 已关联）

---

## 8. 待办事项关注

### 长期未答复的重要 Issue

| Issue | 摘要 | 存在时间 | 状态 |
|-------|---------|-----|--------|
| #114612 | SQLite 无界增长：memory 表无保留策略 | 约65天 | 开放 |
| #114234 | 重启后 usage-cost 刷新锁永不释放（容器） | 约67天 | 开放 |
| #65374 | 内置 dreaming 在多代理设置中污染代理身份 | 约173天 | 开放 |
| #84037 | 改进 Codex app-server 稳态 CPU 开销 | 约136天 | 开放 |
| #114154 | bundle-mcp：工具通过策略但代理会话从不绑定它 | 约68天 | 开放 |

### 需要维护者决策的 Issue

| Issue | 摘要 | 需求 |
|-------|---------|-------|
| #85030 | MCP 工具未注入子代理会话 | 产品决策 |
| #115642 | 计费冷却时间在中断后仍然存在 | 产品决策 |
| #121232 | Dreaming ranker/applier 分歧 | 产品决策 |
| #6615 | 为 exec-approvals 添加黑名单支持 | 产品决策 |

---

*数据来源：OpenClaw GitHub — 2026年10月2日*

---

## 横向生态对比

<think>The user wants me to translate this English technical report about cross-project comparison into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the structure and technical terms.

Let me go through section by section:

## 1. Ecosystem Overview

The personal AI assistant and agent open-source landscape in late 2026 demonstrates a maturing but highly fragmented ecosystem. Five active projects—OpenClaw, Hermes Agent, IronClaw, QwenPaw, and ZeroClaw—represent distinct architectural philosophies ranging from gateway-centric orchestration (OpenClaw) to tool-focused composition (ZeroClaw) and provider-agnostic clients (QwenPaw). The field is unified by common challenges: multi-session state management, security boundary enforcement between agents, and platform-specific reliability (especially Windows and Linux sandboxing). No single project dominates; instead, the ecosystem shows healthy specialization where projects target different operational scales (single-user desktop to multi-agent fleets) and deployment models (local-first to cloud-gateway).

翻译：
2026年末的个人AI助手与Agent开源生态系统呈现出成熟但高度碎片化的特征。五个活跃项目——OpenClaw、IronClaw、QwenPaw和ZeroClaw——代表了不同的架构理念，从以网关为中心的编排（OpenClaw）到工具导向的组合（ZeroClaw），再到provider无关的客户端（QwenPaw）。

这些项目都面临共同的技术难题：多会话状态管理、跨Agent的安全边界强制执行，以及平台特定可靠性问题（尤其是Windows和Linux的沙箱隔离）。目前没有单一项目占据主导地位，生态呈现出健康的专业化分工，各项目针对不同的操作规模（从单用户桌面到多Agent集群）和部署模式（本地优先到云端网关）进行优化。

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Signal |
|---------|

---------------------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 1 (v2026.8.34) | 🔥 Very high activity — LTS release |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 High activity — active bugfixes |
| **ZeroClaw** | 38 | 50 | 0 | 🟢 High activity — stacked PR series |
| **QwenPaw** | 7 | 9 | 0 | 🟡 Moderate — feature development |
| **IronClaw** | 2 | 2 | 0 | 🟡 Moderate — maintenance mode |

I should clarify the health assessment methodology. It draws from multiple signals: issue and PR counts, how often releases go out, and how severe the reported bugs are. OpenClaw stands out with massive daily activity and maintains an LTS release, while Hermes and ZeroClaw keep a strong pace despite lower numbers. QwenPaw and IronClaw operate at a more measured speed but still show consistent progress.

---

## 3. OpenClaw's Position

### Advantages vs. Peers

| Dimension | OpenClaw vs. Peers |
|-----------|-------------------|
| **Scale** | Manages 632-agent fleets with built-in gateway support, while others concentrate on single-digit deployments |
| **Release Cadence** | Maintains formal stable and extended-stable branches—peers operate without comparable release channels |
| **Community Engagement** | Processes 500 issues and PRs daily, exceeding IronClaw's activity by over 10x |
| **Provider Coverage** | Integrates multiple providers (DeepSeek, OpenAI, Anthropic), whereas Hermes and QwenPaw typically limit themselves to single providers |

### Technical Approach Differences

- **OpenClaw**: Gateway-centric with gateway-ready deployment model; extensive plugin architecture; SQLite for session persistence
- **Hermes Agent**: Desktop-native with CLI-first design; TTS/voice integration; local browser automation
- **ZeroClaw**: SOP (Standard Operating Procedure) engine; capability-based composition; WASM/ZeroReliance runtime
- **IronClaw**: Rust-native with browser session persistence; benchmark-driven testing
- **QwenPaw**: Provider-client focused (DeepSeek, OpenAI); Advisor Mode for dual-model workflows

### Community Size

OpenClaw leads with 500 daily updates, while Hermes Agent and ZeroClaw maintain around 50 each. IronClaw and QwenPaw have smaller but loyal communities. OpenClaw's gateway-centric architecture with extensive plugin support and SQLite persistence differs from Hermes Agent's desktop-first CLI design with TTS integration, ZeroClaw's SOP engine with WASM runtime, IronClaw's Rust-native approach with encrypted tarball storage, and QwenPaw's multi-provider client with dual-model Advisor Mode.

---

## 4. Shared Technical Focus Areas

### Cross-Project Requirements

| Focus Area | Projects | Specific Need |
|------------|----------|---------------|
| **Multi-agent security boundaries** | OpenClaw, ZeroClaw | Principal/session isolation; delegated memory scope enforcement |
| **SQLite reliability** | OpenClaw, IronClaw | WAL checkpointing; unbounded growth prevention; crash recovery |
| **Windows platform stability** | OpenClaw, Hermes Agent, ZeroClaw | DataCloneError handling; process.env Proxy issues; sandbox/GPU markers |
| **Human-in-the-loop tooling** | QwenPaw, Hermes Agent | User confirmation for ambiguous actions; structured question prompts |
| **Config persistence safety** | ZeroClaw, Hermes Agent | Save/restore; rollback on failure; near-empty file bugs |
| **Plugin/extension systems** | OpenClaw, ZeroClaw, QwenPaw | Lifecycle management; capability gating; security boundaries |

Five projects are all working on security isolation between agents—indicating the industry is moving toward stronger security as a baseline.

---

## 5. Differentiation Analysis

### Feature Focus

| Project | Primary Focus | Unique Capability |
|---------|---------------|-------------------|
| **OpenClaw** | Gateway orchestration, fleet management | 632-agent fleet handling; LTS stability |
| **Hermes Agent** | Desktop-first, voice/TTS integration | Auto-TTS; second-instance sandboxing |
| **ZeroClaw** | SOP engine, capability composition | Workflow step validation; WASM runtime |
| **IronClaw** | Browser session persistence | Encrypted tarball storage; benchmark taxonomy |
| **QwenPaw** | Multi-provider client | Advisor Mode (dual-model collaboration) |

### Target Users

- **OpenClaw**: Enterprise/deployment teams managing large agent deployments
- **Hermes Agent**: Individual developers; desktop power users
- **ZeroClaw**: Workflow-heavy users; SOP-based automation teams
- **IronClaw**: Benchmark-driven developers; browser automation engineers
- **QwenPaw**: Multi-model users; AI assistant enthusiasts

### Architecture Philosophy

- **Monolithic gateway** (OpenClaw) vs. **modular runtime** (ZeroClaw)
- **Desktop-native** (Hermes Agent) vs. **server-oriented** (OpenClaw)
- **Rust-native** (IronClaw) vs. **Python/TypeScript** (OpenClaw, Hermes Agent, QwenPaw)
- **Provider-agnostic** (QwenPaw) vs. **single-provider** (IronClaw)

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration** | OpenClaw, ZeroClaw | 50+ PRs/day; heavy feature development; multiple stacked PRs; breaking changes likely |
| **Active Development** | Hermes Agent | 50 issues/PRs; steady bugfixes; feature additions; stable cadence |
| **Stabilizing** | QwenPaw | <10 updates/day; mixed bugfixes and features; approaching release readiness |
| **Maintenance** | IronClaw | Minimal daily activity; incremental improvements; benchmark and taxonomy focus |

### Maturity Indicators

- **OpenClaw**: Mature LTS branch; formal stable/extended-stable channels; production-ready
- **ZeroClaw**: Pre-1.0; rapid changes; security hardening in progress; v0.8.6 imminent
- **Hermes Agent**: Mid-maturity; stable-ish but active; Windows fixes ongoing
- **QwenPaw**: Mid-maturity; v2.2.2 beta; provider integrations stabilizing
- **IronClaw**: Early-maturity; feature-driven; small user base

---

## 7. Trend Signals

### Industry Trends Extracted from Community Feedback

1. **Security isolation is non-negotiable** — ZeroClaw and OpenClaw both prioritizing principal/session boundaries; S0 bugs filed across projects signal heightened security awareness.

2. **Windows is the problem platform** — Four of five projects have Windows-specific bugs (DataCloneError, sandbox, process.env Proxy, kernel compatibility). Cross-platform testing investment is increasing.

3. **LTS/release channels matter** — OpenClaw's extended-stable release gained immediate traction; peers may adopt similar channels to address production deployment confidence.

4. **Multi-agent orchestration is hard** — OpenClaw's 632-agent fleet issues and ZeroClaw's SOP engine work indicate the industry is moving beyond single-agent scenarios.

5. **Config persistence is fragile** — ZeroClaw's Config::save() data loss (#10495) and Hermes Agent's stale editable issues (#125592) show config management remains a common pitfall.

6. **Human-in-the-loop is gaining momentum** — QwenPaw's ask_user_question proposal and Hermes Agent's voice mode improvements reflect demand for controllable AI behavior.

7. **Browser automation is consolidating** — IronClaw's encrypted tarball persistence and OpenClaw's Camofox screenshot caching indicate browser state management is becoming a standard feature.

### Value for AI Agent Developers

- **If building enterprise fleets**: Follow OpenClaw's gateway patterns and ZeroClaw's security model
- **If building desktop tools**: Monitor Hermes Agent's TTS/voice integration and Windows sandbox fixes
- **If building multi-model clients**: Adopt QwenPaw's provider abstraction and Advisor Mode patterns
- **If building browser agents**: Leverage IronClaw's session persistence approach

---

*Cross-project analysis synthesized from October 2, 2026 data across OpenClaw, Hermes Agent, IronClaw, QwenPaw, and ZeroClaw repositories.*

---

## 1. 生态概览

2026年末的个人AI助手与Agent开源生态系统呈现出成熟但高度碎片化的特征。五个活跃项目——OpenClaw、Hermes Agent、IronClaw、QwenPaw和ZeroClaw——代表了不同的架构理念，从以网关为中心的编排（OpenClaw）到工具导向的组合（ZeroClaw），再到provider无关的客户端（QwenPaw）。这个领域面临共同的挑战：多会话状态管理、Agent之间的安全边界强制执行，以及平台特定的可靠性问题（尤其是Windows和Linux沙箱）。没有单一项目占据主导地位，相反，生态系统呈现出健康的专业化分工，各项目针对不同的操作规模（从单用户桌面到多Agent集群）和部署模式（本地优先到云端网关）。

## 2. 活动对比

| 项目 | 24小时内更新的Issue | 24小时内更新的PR | 24小时内的Release | 健康信号 |
|---------|---------------------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 1 (v2026.8.34) | 🔥 极高活跃度 — LTS版本 |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 高活跃度 — 积极修复bug |
| **ZeroClaw** | 38 | 50 | 0 | 🟢 高活跃度 — PR积压 |
| **QwenPaw** | 7 | 9 | 0 | 🟡 中等活跃 — 功能开发 |
| **IronClaw** | 2 | 2 | 0 | 🟡 中等活跃 — 维护模式 |

**健康评分推导：** 基于issue/PR数量、发布频率和严重程度分布。OpenClaw数量领先；Hermes和ZeroClaw虽然数量较少但活跃度高；IronClaw和QwenPaw保持较低但稳定的开发强度。

---

## 3. OpenClaw的定位

### 相对优势

| 维度 | OpenClaw对比同类 |
|-----------|-------------------|
| **规模** | 支持632个Agent集群（有网关ready）；同类项目聚焦个位数Agent场景 |
| **发布节奏** | 唯一拥有LTS通道的项目（extended-stable）；其他项目缺乏正式的stable分支 |
| **社区参与度** | 每日500条issue/PR更新，远超IronClaw的10倍以上 |
| **Provider覆盖** | 多Provider（DeepSeek、OpenAI、Anthropic）；Hermes、QwenPaw更聚焦单一Provider |

### 技术路径差异

- **OpenClaw**：网关中心化设计，支持网关部署模式；插件架构完善；使用SQLite持久化会话
- **Hermes Agent**：桌面原生，CLI优先；集成TTS/语音；本地浏览器自动化
- **ZeroClaw**：SOP（标准操作流程）引擎；基于能力组合；WASM/ZeroReliance运行时
- **IronClaw**：Rust原生；浏览器会话持久化；基准测试驱动
- **QwenPaw**：Provider客户端（DeepSeek、OpenAI）；Advisor模式支持双模型工作流

### 社区规模

OpenClaw的社区规模最大（每日500条更新），其次是Hermes Agent和ZeroClaw（各约50条）。IronClaw和QwenPaw的用户群体较小但忠诚度高。

---

## 4. 共同的技术关注点

### 跨项目需求

| 关注领域 | 相关项目 | 具体需求 |
|------------|----------|---------------|
| **多Agent安全边界** | OpenClaw、ZeroClaw | Principal/会话隔离；委托内存范围强制 |
| **SQLite可靠性** | OpenClaw、IronClaw | WAL检查点；无限增长防护；崩溃恢复 |
| **Windows平台稳定性** | OpenClaw、Hermes Agent、ZeroClaw | DataCloneError处理；process.env Proxy问题；沙箱/GPU标记 |
| **人机交互工具** | QwenPaw、Hermes Agent | 用户确认模糊操作；结构化问题提示 |
| **配置持久化安全** | ZeroClaw、Hermes Agent | 保存/恢复；故障回滚；接近空文件问题 |
| **插件/扩展系统** | OpenClaw、ZeroClaw、QwenPaw | 生命周期管理；能力门控；安全边界 |

**值得注意的是：** 五个项目都在独立解决Agent之间的安全隔离问题——这代表整个行业正在经历一次全面的安全加固趋势。

---

## 5. 差异化分析

### 功能定位

| 项目 | 核心关注点 | 独特能力 |
|---------|---------------|-------------------|
| **OpenClaw** | 网关编排、集群管理 | 632 Agent集群处理；LTS稳定性 |
| **Hermes Agent** | 桌面优先、语音/TTS集成 | 自动TTS；第二实例沙箱 |
| **ZeroClaw** | SOP引擎、能力组合 | 工作流步骤验证；WASM运行时 |
| **IronClaw** | 浏览器会话持久化 | 加密tarball存储；基准测试分类法 |
| **QwenPaw** | 多Provider客户端 | Advisor模式（双模型协作） |

### 目标用户

- **OpenClaw**：管理大规模Agent部署的企业/部署团队
- **Hermes Agent**：个人开发者；桌面高级用户
- **ZeroClaw**：重度工作流用户；SOP自动化团队
- **IronClaw**：基准驱动开发者；浏览器自动化工程师
- **QwenPaw**：多模型用户；AI助手爱好者

### 架构理念

- **单体网关**（OpenClaw） vs **模块化运行时**（ZeroClaw）
- **桌面原生**（Hermes Agent） vs **服务端优先**（OpenClaw）
- **Rust原生**（IronClaw） vs **Python/TypeScript**（OpenClaw、Hermes Agent、QwenPaw）
- **Provider无关**（QwenPaw） vs **单一Provider**（IronClaw）

---

## 6. 社区活力与技术成熟度

### 活跃度层级

| 层级 | 项目 | 特征 |
|------|----------|-----------------|
| **快速迭代** | OpenClaw、ZeroClaw | 50+ PR/天；重度功能开发；多个积压PR；可能包含破坏性变更 |
| **积极开发** | Hermes Agent | 50条issue/PR；稳定修复bug；功能添加；节奏稳定 |
| **趋于稳定** | QwenPaw | <10条更新/天；bug修复与功能参半；接近发布就绪 |
| **维护模式** | IronClaw | 极低的日活动量；增量改进；聚焦基准测试和分类法 |

### 成熟度指标

- **OpenClaw**：成熟的LTS分支；正式的stable/extended-stable通道；生产就绪
- **ZeroClaw**：Pre-1.0阶段；快速迭代；安全加固进行中；v0.8.6即将发布
- **Hermes Agent**：中等成熟度；基本稳定但活跃；Windows修复持续进行
- **QwenPaw**：中等成熟度；v2.2.2 beta；Provider集成趋于稳定
- **IronClaw**：早期成熟度；功能驱动；用户基数小

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **安全隔离不可或缺** — ZeroClaw和OpenClaw都在优先处理principal/session边界；各项目提交的S0级别bug表明安全意识显著提升。

2. **Windows是问题平台** — 五个项目中有四个存在Windows特有的bug（DataCloneError、沙箱、process.env Proxy、内核兼容性）。跨平台测试投入正在增加。

3. **LTS/发布通道很重要** — OpenClaw的extended-stable版本发布后立即获得关注；同类项目可能会采用类似通道来提升生产部署的信心。

4. **多Agent编排很困难** — OpenClaw的632 Agent集群问题和ZeroClaw的SOP引擎工作表明行业正在超越单Agent场景。

5. **配置持久化很脆弱** — ZeroClaw的Config::save()数据丢失（#10495）和Hermes Agent的陈旧可编辑问题（#125592）表明配置管理仍然是一个常见的陷阱。

6. **人机交互正在获得动力** — QwenPaw的ask_user_question提案和Hermes Agent的语音模式改进反映了市场对可控AI行为的需求。

7. **浏览器自动化正在整合** — IronClaw的加密tarball持久化和OpenClaw的Camofox截图缓存表明浏览器状态管理正在成为标准功能。

### 对AI Agent开发者的价值

- **构建企业集群**：参考OpenClaw的网关模式和ZeroClaw的安全模型
- **构建桌面工具**：关注Hermes Agent的TTS/语音集成和Windows沙箱修复
- **构建多模型客户端**：采用QwenPaw的Provider抽象和Advisor模式
- **构建浏览器Agent**：利用IronClaw的会话持久化方法

---

*跨项目分析基于2026年10月2日OpenClaw、Hermes Agent、IronClaw、QwenPaw和ZeroClaw仓库的数据综合整理。*</think>

# 跨项目对比报告 — 个人AI助手与Agent生态系统

## 1. 生态概览

2026年末的个人AI助手与Agent开源生态系统呈现出成熟但高度碎片化的特征。五个活跃项目——OpenClaw、Hermes Agent、IronClaw、QwenPaw和ZeroClaw——代表了不同的架构理念，从以网关为中心的编排（OpenClaw）到工具导向的组合（ZeroClaw），再到provider无关的客户端（QwenPaw）。这个领域面临共同的挑战：多会话状态管理、Agent之间的安全边界强制执行，以及平台特定的可靠性问题（尤其是Windows和Linux沙箱）。没有单一项目占据主导地位，相反，生态系统呈现出健康的专业化分工，各项目针对不同的操作规模（从单用户桌面到多Agent集群）和部署模式（本地优先到云端网关）。

---

## 2. 活动对比

| 项目 | 24小时内更新的Issue | 24小时内更新的PR | 24小时内的Release | 健康信号 |
|---------|---------------------|-------------------|----------------|---------------|
| **OpenClaw** | 500 | 500 | 1 (v2026.8.34) | 🔥 极高活跃度 — LTS版本 |
| **Hermes Agent** | 50 | 50 | 0 | 🟢 高活跃度 — 积极修复bug |
| **ZeroClaw** | 38 | 50 | 0 | 🟢 高活跃度 — PR积压 |
| **QwenPaw** | 7 | 9 | 0 | 🟡 中等活跃 — 功能开发 |
| **IronClaw** | 2 | 2 | 0 | 🟡 中等活跃 — 维护模式 |

**健康评分推导：** 基于issue/PR数量、发布频率和严重程度分布。OpenClaw数量领先；Hermes和ZeroClaw虽然数量较少但活跃度高；IronClaw和QwenPaw保持较低但稳定的开发强度。

---

## 3. OpenClaw的定位

### 相对优势

| 维度 | OpenClaw对比同类 |
|-----------|-------------------|
| **规模** | 支持632个Agent集群（有网关ready）；同类项目聚焦个位数Agent场景 |
| **发布节奏** | 唯一拥有LTS通道的项目（extended-stable）；其他项目缺乏正式的stable分支 |
| **社区参与度** | 每日500条issue/PR更新，远超IronClaw的10倍以上 |
| **Provider覆盖** | 多Provider（DeepSeek、OpenAI、Anthropic）；Hermes、QwenPaw更聚焦单一Provider |

### 技术路径差异

- **OpenClaw**：网关中心化设计，支持网关部署模式；插件架构完善；使用SQLite持久化会话
- **Hermes Agent**：桌面原生，CLI优先；集成TTS/语音；本地浏览器自动化
- **ZeroClaw**：SOP（标准操作流程）引擎；基于能力组合；WASM/ZeroReliance运行时
- **IronClaw**：Rust原生；浏览器会话持久化；基准测试驱动
- **QwenPaw**：Provider客户端（DeepSeek、OpenAI）；Advisor模式支持双模型工作流

### 社区规模

OpenClaw的社区规模最大（每日500条更新），其次是Hermes Agent和ZeroClaw（各约50条）。IronClaw和QwenPaw的用户群体较小但忠诚度高。

---

## 4. 共同的技术关注点

### 跨项目需求

| 关注领域 | 相关项目 | 具体需求 |
|------------|----------|---------------|
| **多Agent安全边界** | OpenClaw、ZeroClaw | Principal/会话隔离；委托内存范围强制 |
| **SQLite可靠性** | OpenClaw、IronClaw | WAL检查点；无限增长防护；崩溃恢复 |
| **Windows平台稳定性** | OpenClaw、Hermes Agent、ZeroClaw | DataCloneError处理；process.env Proxy问题；沙箱/GPU标记 |
| **人机交互工具** | QwenPaw、Hermes Agent | 用户确认模糊操作；结构化问题提示 |
| **配置持久化安全** | ZeroClaw、Hermes Agent | 保存/恢复；故障回滚；接近空文件问题 |
| **插件/扩展系统** | OpenClaw、ZeroClaw、QwenPaw | 生命周期管理；能力门控；安全边界 |

**值得注意的是：** 五个项目都在独立解决Agent之间的安全隔离问题——这代表整个行业正在经历一次全面的安全加固趋势。

---

## 5. 差异化分析

### 功能定位

| 项目 | 核心关注点 | 独特能力 |
|---------|---------------|-------------------|
| **OpenClaw** | 网关编排、集群管理 | 632 Agent集群处理；LTS稳定性 |
| **Hermes Agent** | 桌面优先、语音/TTS集成 | 自动TTS；第二实例沙箱 |
| **ZeroClaw** | SOP引擎、能力组合 | 工作流步骤验证；WASM运行时 |
| **IronClaw** | 浏览器会话持久化 | 加密tarball存储；基准测试分类法 |
| **QwenPaw** | 多Provider客户端 | Advisor模式（双模型协作） |

### 目标用户

- **OpenClaw**：管理大规模Agent部署的企业/部署团队
- **Hermes Agent**：个人开发者；桌面高级用户
- **ZeroClaw**：重度工作流用户；SOP自动化团队
- **IronClaw**：基准驱动开发者；浏览器自动化工程师
- **QwenPaw**：多模型用户；AI助手爱好者

### 架构理念

- **单体网关**（OpenClaw） vs **模块化运行时**（ZeroClaw）
- **桌面原生**（Hermes Agent） vs **服务端优先**（OpenClaw）
- **Rust原生**（IronClaw） vs **Python/TypeScript**（OpenClaw、Hermes Agent、QwenPaw）
- **Provider无关**（QwenPaw） vs **单一Provider**（IronClaw）

---

## 6. 社区活力与技术成熟度

### 活跃度层级

| 层级 | 项目 | 特征 |
|------|----------|-----------------|
| **快速迭代** | OpenClaw、ZeroClaw | 50+ PR/天；重度功能开发；多个积压PR；可能包含破坏性变更 |
| **积极开发** | Hermes Agent | 50条issue/PR；稳定修复bug；功能添加；节奏稳定 |
| **趋于稳定** | QwenPaw | <10条更新/天；bug修复与功能参半；接近发布就绪 |
| **维护模式** | IronClaw | 极低的日活动量；增量改进；聚焦基准测试和分类法 |

### 成熟度指标

- **OpenClaw**：成熟的LTS分支；正式的stable/extended-stable通道；生产就绪
- **ZeroClaw**：Pre-1.0阶段；快速迭代；安全加固进行中；v0.8.6即将发布
- **Hermes Agent**：中等成熟度；基本稳定但活跃；Windows修复持续进行
- **QwenPaw**：中等成熟度；v2.2.2 beta；Provider集成趋于稳定
- **IronClaw**：早期成熟度；功能驱动；用户基数小

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **安全隔离不可或缺** — ZeroClaw和OpenClaw都在优先处理principal/session边界；各项目提交的S0级别bug表明安全意识显著提升。

2. **Windows是问题平台** — 五个项目中有四个存在Windows特有的bug（DataCloneError、沙箱、process.env Proxy、内核兼容性）。跨平台测试投入正在增加。

3. **LTS/发布通道很重要** — OpenClaw的extended-stable版本发布后立即获得关注；同类项目可能会采用类似通道来提升生产部署的信心。

4. **多Agent编排很困难** — OpenClaw的632 Agent集群问题和ZeroClaw的SOP引擎工作表明行业正在超越单Agent场景。

5. **配置持久化很脆弱** — ZeroClaw的Config::save()数据丢失（#10495）和Hermes Agent的陈旧可编辑问题（#125592）表明配置管理仍然是一个常见的陷阱。

6. **人机交互正在获得动力** — QwenPaw的ask_user_question提案和Hermes Agent的语音模式改进反映了市场对可控AI行为的需求。

7. **浏览器自动化正在整合** — IronClaw的加密tarball持久化和OpenClaw的Camofox截图缓存表明浏览器状态管理正在成为标准功能。

### 对AI Agent开发者的价值

- **构建企业集群**：参考OpenClaw的网关模式和ZeroClaw的安全模型
- **构建桌面工具**：关注Hermes Agent的TTS/语音集成和Windows沙箱修复
- **构建多模型客户端**：采用QwenPaw的Provider抽象和Advisor模式
- **构建浏览器Agent**：利用IronClaw的会话持久化方法

---

*跨项目分析基于2026年10月2日OpenClaw、Hermes Agent、IronClaw、QwenPaw和ZeroClaw仓库的数据综合整理。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. I need to:
1. Translate all the text content
2. Keep all Markdown structure exactly as-is
3. Keep URLs, issue numbers, code references, etc. unchanged
4. Use natural technical Chinese register

Let me go through and translate this carefully while preserving the structure.</think>

# Hermes Agent 项目摘要 — 2026-10-02

## 1. 今日概览

2026年10月2日，Hermes Agent 表现出高活动度，过去24小时内有50个 Issue 和50个 PR 更新。所有 PR 仍处于打开状态（尚未合并），表明开发活跃而非已完成整合。活动涉及多个组件——桌面端（渲染、性能、沙盒）、网关（定时任务、消息、配置文件）和代理（MCP、Bedrock）。无新版本发布，表明项目处于功能稳定阶段。今日的 PR 中包含安全修复（备份权限、插件目录更新）。社区参与度依然很高，讨论最多的 Issue #97681 达到30条评论，围绕跨网关机器人协作展开。

---

## 2. 版本发布

过去24小时内**未发布新版本**。

---

## 3. 项目进展

以下 PR 代表今日的开发活动：

| PR | 标题 | 组件 |
|---|-----|--------|
| [#131081](https://github.com/NousResearch/hermes-agent/pull/131081) | 修复无限等待：非有限 Retry-After 不再调度无限等待 | agent |
| [#131078](https://github.com/NousResearch/hermes-agent/pull/131078) | MCP 客户端通过 CI 官方合规套件 | agent, tool/mcp |
| [#131083](https://github.com/NousResearch/hermes-agent/pull/131083) | Camofox 截图放入共享缓存，24小时后清理 | browser |
| [#131071](https://github.com/NousResearch/hermes-agent/pull/131071) | 跳过重启等待中的重启安全范围cron运行 | gateway, cron |
| [#131072](https://github.com/NousResearch/hermes-agent/pull/131072) | 可选择在会话标签中显示代理名称 | desktop |
| [#131073](https://github.com/NousResearch/hermes-agent/pull/131073) | 解释纯文本自动 TTS 回退，每个中断仅一次 | gateway, tts |
| [#131074](https://github.com/NousResearch/hermes-agent/pull/131074) | 将更新前/迁移前 zip 权限限制为 0600 | cli, security |
| [#131077](https://github.com/NousResearch/hermes-agent/pull/131077) | 避免误报重复发送警告 | gateway |
| [#131067](https://github.com/NousResearch/hermes-agent/pull/131067) | 二次启动不再污染沙盒/GPU标记 | desktop (Windows) |
| [#131029](https://github.com/NousResearch/hermes-agent/pull/131029) | 在 Windows 上安全渲染早期 Unix 时间戳 | gateway |
| [#131080](https://github.com/NousResearch/hermes-agent/pull/131080) | 在过滤备份中导出固定会话 | sessions |
| [#131064](https://github.com/NousResearch/hermes-agent/pull/131064) | 朗读工具回合的每个气泡，一次 | desktop, tts |

---

## 4. 社区热点话题

**评论最多的 Issue：**

1. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)** — *让机器人在网关上协作* — 30 条评论  
   *主题：功能请求 / 创新*  
   一项重大架构功能，使机器人能在不同网关实例上协同工作。目前被 #106742（统一网关运行时）阻塞。截至 10 月 2 日状态：仍在等待；桌面连续性推迟到 `main` 上的群聊稳定后。

2. **[#127647](https://github.com/NousResearch/hermes-agent/issues/127647)** — *桌面空闲资源消耗追踪器* — 26 条评论  
   *主题：性能 / P2*  
   追踪空闲状态下的渲染器 CPU/GPU、后端 CPU 和内存使用。问题 #122413 和 #88288 的范围图。正在进行积极分类。

3. **[#127665](https://github.com/NousResearch/hermes-agent/issues/127665)** — *桌面在行已提交时渲染回复两次* — 21 条评论  
   *主题：Bug / 会话 / 流式传输*  
   与问题 #127288 用户可见症状相同的另一个折叠。即使加载了 #127282 的修复，overlay 的 fold 仍豁免待处理的实时行。

4. **[#122529](https://github.com/NousResearch/hermes-agent/issues/122529)** — *Cron 外部 worker 缺少 venv site-packages* — 12 条评论  
   *主题：Bug / 安装更新 / P1*  
   定时任务调度器使用 `sys.executable`（基础 Python）而非 venv，导致缺少包，引发 `ModuleNotFoundError: ruamel`。

5. **[#127313](](https://github.com/NousResearch/hermes-agent/issues/127313)** — *Pane-body 区域菜单劫持Transcript右键菜单* — 12 条评论  
   *主题：Bug / 回归*  
   来自提交 `ad2d4822e1` 的回归。在区域主体内任何位置右键都会打开区域菜单并替换应用级上下文菜单，导致复制和应用菜单无法访问。

**分析：** 头部 Issue 反映三个主题：（1）跨组件架构（网关协作），（2）桌面 UI/UX 稳定性（重复渲染、上下文菜单回归），（3）环境/安装可靠性（cron worker、资源追踪）。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 摘要 | 修复 PR？ |
|----------|-------|---------|---------|
| **P1** | [#122529](https://github.com/NousResearch/hermes-agent/issues/122529) | Cron 外部 worker 缺少 venv site-packages（ModuleNotFoundError） | 否 |
| **P1** | [#130987](https://github.com/NousResearch/hermes-agent/issues/130987) | 网关重启等待阻塞已超重启时长的 cron 运行（最长30分钟） | [#131071](https://github.com/NousResearch/hermes-agent/pull/131071) |
| **P2** | [#127665](https://github.com/NousResearch/hermes-agent/issues/127665) | 桌面渲染回复两次（overlay fold bug） | 否 |
| **P2** | [#131033](https://github.com/NousResearch/hermes-agent/issues/131033) | Bedrock：agent-loop Converse 调用跳过脱敏推理恢复，GPT→Claude 回退失败 | 否 |
| **P2** | [#131055](https://github.com/NousResearch/hermes-agent/issues/131055) | Linux 桌面：二次启动污染沙盒回退 → 渲染器 SIGILL 循环 | [#131067](https://github.com/NousResearch/hermes-agent/pull/131067) |
| **P2** | [#130895](https://github.com/NousResearch/hermes-agent/issues/130895) | 网关：压缩后的回合缺少提示缓存 | 否 |
| **P2** | [#127313](https://github.com/NousResearch/hermes-agent/issues/127313) | 区域菜单劫持Transcript右键菜单（回归） | 否 |
| **P2** | [#124120](https://github.com/NousResearch/hermes-agent/issues/124120) | 网关 migrate --multiplex 在 launchd 启动的网关上失败 | 否 |
| **P3** | [#106596](https://github.com/NousResearch/hermes-agent/issues/106596) | YouTube 嵌入失败，错误 153 | 已关闭 |
| **P3** | [#55377](https://github.com/NousResearch/hermes-agent/issues/55377) | 短信独立发送崩溃（NameError: re 未导入） | 已关闭 |

**注意：** 两个 P1 Bug 正在积极讨论中。cron 重启等待问题（#130987）已有修复 PR #131071。cron venv 问题（#122529）仍处于打开状态，无修复 PR。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | P3？ | 备注 |
|-------|----------|-----|-------|
| [#119120](https://github.com/NousResearch/hermes-agent/issues/119120) | 桌面（Windows）：解耦最小化与托盘隐藏 | ✅ | 最小化时保留任务栏按钮，关闭时放入托盘 |
| [#129686](https://github.com/NousResearch/hermes-agent/issues/129686) | 添加新的决策模型（Jev、Tev1、nimble） | ✅ | 新工具；需要决策 |
| [#74094](https://github.com/NousResearch/hermes-agent/issues/74094) | 语音模式应注入对话提示引导 | ✅ | /voice tts 在没有上下文时产生敌意输出 |
| [#83614](https://github.com/NousResearch/hermes-agent/issues/83614) | 在看板审查被认领时通知原始线程一次 | ✅ | 一次性信号，非心跳流式传输 |
| [#13603](https://github.com/NousResearch/hermes-agent/issues/13603) | 更新应支持回滚和自动回滚 | ✅ | 对生产稳定性至关重要 |

**路线图信号：** 最可操作的功能是 #119120（Windows 最小化/托盘分离），这是一个直接的 UI 设置拆分。影响最大的是 #13603（回滚支持），解决了生产运维差距。功能 #97681（跨网关机器人协作）是最大的架构变更，但被阻塞。

---

## 7. 用户反馈摘要

**从 Issue 中观察到的痛点：**

1. **桌面渲染可靠性** — 多个 Bug（#127665、#127313）报告 UI 重复消息或阻止标准交互（右键）。影响日常使用。

2. **安装/更新脆弱性** — 问题 #122529（cron venv）、#125592（过期 editable）、#124679（Windows 本地安装失败）和 #129751（Python 版本与 uv.lock 不匹配）表明安装路径容易出错，尤其在 Windows 上。

3. **Linux 沙盒稳定性** — #131055 描述了污染的沙盒标记导致的崩溃循环，导致渲染器 SIGILL。Linux 用户在二次启动后遇到不可恢复的桌面故障。

4. **网关重启行为** — #130987 报告重启期间因 cron 运行导致30分钟阻塞turn，这是一个严重的运维不便。

5. **TTS 可用性** — #74094 和 #131073 都标记自动 TTS 产生较差的用户体验（敌意输出、静默失败无解释）。

**满意度信号：** 活跃的 PR 列表显示维护者响应迅速——10 月 2 日提交了多个 Bug 修复 PR。MCP 客户端合规套件集成（#131078）表明对协议合规性的承诺。

---

## 8. 待办事项关注

以下 Issue 较旧或影响较大，但缺乏近期进展：

| Issue | 龄期 | 状态 | 关注点 |
|-------|-----|-----|-------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 约34天 | 打开 | 跨网关机器人协作—被 #106742 阻塞，无明确时间表 |
| [#13603](https://github.com/NousResearch/hermes-agent/issues/13603) | 约164天 | 打开 | 回滚/自动回滚功能—对生产至关重要但优先级低（P3） |
| [#74094](https://github.com/NousResearch/hermes-agent/issues/74094) | 约65天 | 打开 | 语音模式对话引导—影响 /voice UX |
| [#119120](https://github.com/NousResearch/hermes-agent/issues/119120) | 约10天 | 打开 | Windows 最小化/托盘解耦—直接但 P3 |
| [#122529](https://github.com/NousResearch/hermes-agent/issues/122529) | 约7天 | 打开（P1） | Cron venv bug—尽管严重但无修复 PR |

**建议：** 优先处理 #122529（P1 cron bug）和 #130987（已有 #131071 中的就绪修复）。回滚功能（#13603）仍是长期缺口，可能导致生产环境中的用户挫败感。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. Let me go through it carefully and translate it while preserving:

1. The Markdown structure exactly (headings, tables, lists, etc.)
2. URLs and links
3. Issue/PR references (#2358, etc.)
4. Technical terms, project names, file paths
5. Numbers and dates
6. Code spans and identifiers

I'll use natural technical Chinese suitable for a developer newsletter context.

Let me translate section by section:

## 1. Today's Overview
- Moderate activity → 中等活跃度
- steady ongoing development → 持续推进
- infrastructure improvements → 基础设施改进
- notable concern → 值得注意的是
- failure taxonomy report → 故障分类报告
- recurring benchmark-side workspace-seeding defect → 基准端重复出现的workspace-seeding缺陷
- Overall health appears stable → 整体健康状况趋于稳定

## 2. Releases
- No new releases → 无新版本发布

## 3. Project Progress
Keep the table but translate titles:
- Title → 标题
- Size → 规模
- Risk → 风险
- Status → 状态

## 4. Community Hot Topics
- Title → 标题
- Comments → 评论
- Reactions → 点赞
- Analysis → 分析
- Usability requirement → 可用性需求
- Persisting browser sessions → 浏览器会话持久化
- Enhancement → 增强
- Failure taxonomy effort → 故障分类工作
- Dominant cause → 主要原因

## 5. Bugs & Stability
- Severity → 严重程度
- Status → 状态
- Notes → 备注
- Assessment → 评估
- Crash reports → 崩溃报告
- Regressions → 回归问题
- Stability concern → 稳定性问题


- Benchmark infrastructure issue → 基准测试基础设施问题
- Core product defects → 核心产品缺陷

## 6. Feature Requests & Roadmap Signals
I'll translate the section focusing on new feature requests and roadmap indicators, highlighting key technical developments and upcoming priorities. The analysis emphasizes user needs and strategic technical improvements, particularly around browser session management and authentication challenges.

The forecast section reveals critical usability gaps in agent interactions, with the BrowserProfileStore trait addressing fundamental session persistence requirements. This enhancement directly responds to enterprise security expectations and represents a near-term strategic development priority.

## 7. User Feedback Summary
The user feedback reveals significant technical friction points, particularly around authentication workflows and test suite reliability. Re-authentication challenges and benchmark stability issues emerge as primary pain points impacting overall developer experience. The emerging use cases highlight the need for secure, flexible credential handling in processless agent deployments.

## 8. Backlog Watch
Translating the issue status and concerns, this section tracks critical technical debt items. The 5-month-old issue #2358 signals a pending technical review requirement, while the recently filed taxonomy entry demands proactive root cause resolution. Maintainer intervention is crucial to prioritize and address these backlogged technical challenges.</think>

# IronClaw 项目摘要 — 2026-10-02

## 1. 今日概览

IronClaw 过去 24 小时保持中等活跃度，共有 2 个 issue 和 2 个 pull request 更新。无新版本发布。项目持续推进，焦点在于基础设施改进（代码库知识图谱刷新）和功能扩展（IdentyClaw Passport 集成）。值得注意的是，故障分类报告指出基准测试端存在重复出现的 workspace-seeding 缺陷，影响测试结果。整体健康状况趋于稳定，但存在需要关注的问题。

---

## 2. 版本发布

**过去 24 小时无新版本发布。**

---

## 3. 项目进展

| PR | 标题 | 规模 | 风险 | 状态 |
|----|-----|-----|------|------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | chore(agents): refresh codebase knowledge graph | XS | 低 | 开放 |
| [#7499](https://github.com/nearai/ironclaw/pull/7499) | feat(identyclaw): host-mediated Passport for practitioners | XL | 低 | 开放 |

**分析：** 两个 PR 均保持开放状态。PR #7988 是对代码库 memory bootstrap 快照的自动化基础设施刷新（夜间 CI 工作流）。PR #7499 是一个重要的功能新增，引入了 host seam，使无进程 agent 能够访问 IdentyClaw Passport 而无需 shell 依赖，包含 `deploy/identyclaw/` 下的 practitioner host kit 部署。

---

## 4. 社区热点话题

| Issue | 标题 | 评论 | 点赞 |
|-------|-----|------|------|
| [#2358](https://github.com/nearai/ironclaw/issues/2358) | feat(browser): add BrowserProfileStore trait with encrypted tarball persistence | 1 | 0 |
| [#8121](https://github.com/nearai/ironclaw/issues/8121) | Daily ironclaw failure taxonomy — 2026-10-01 | 0 | 0 |

**分析：** Issue #2358 解决了一个关键的可用性需求：跨 agent 运行持久化浏览器会话（cookies、localStorage、IndexedDB、service workers），以避免重复认证。这是一个范围明确的增强，瞄准 workspace 和 secrets 领域，突显了对有状态浏览器自动化的需求。Issue #8121 属于持续的故障分类工作，最新报告将 clawbench 测试套件中 128 个失败用例的主要原因确定为基准测试端 broken-workspace-seeding 缺陷。

---

## 5. 缺陷与稳定性

| Issue | 严重程度 | 状态 | 备注 |
|-------|----------|------|------|
| [#8121](https://github.com/nearai/ironclaw/issues/8121) | **高** | 开放 | 反复出现的 workspace-seeding 缺陷导致 clawbench 128 个测试用例失败（47d30558-969b-4c19-a782-77d91f7f57cf）。根本原因已确定为基准测试端，非核心 IronClaw 问题。 |

**评估：** 未收到新的崩溃报告或回归问题。稳定性问题源于已知的基准测试基础设施缺陷，而非核心产品缺陷。

---

## 6. 功能需求与路线图信号

| Issue | 需求 | 范围 | 预计优先级 |
|-------|------|------|------------|
| [#2358](https://github.com/nearai/ironclaw/issues/2358) | BrowserProfileStore trait with encrypted tarball persistence | workspace, secrets | 高 |
| [#7499](https://github.com/nearai/ironclaw/pull/7499) | Host-mediated IdentyClaw Passport integration | docs, dependencies | 中高 |

**预测：** 浏览器会话持久化（#2358）解决了 agent 可用性的根本差距，符合企业安全要求（加密 tarball）。鉴于父 issue #2355 和 enhancement 标签，该功能可能面向近期路线图。IdentyClaw Passport PR（#7499）扩展了无进程部署的生态系统，可能在审核后发布。

---

## 7. 用户反馈摘要

**痛点识别：**

- **重复认证摩擦：** 由于浏览器会话无法持久化，用户每次运行 agent 都需重新认证（#2358）
- **基准测试可靠性：** 持续的 workspace-seeding 缺陷（#8121）削弱了测试套件的信任度

**使用场景观察：**

- 无进程 agent 部署需要安全的凭证处理
- Practitioner 工作流需要无需 shell 依赖的 IdentyClaw Passport 集成

**满意度指标：** 当前活跃线程中无明显负面反馈。功能需求表明用户重视安全性（加密存储）和部署灵活性。

---

## 8. 待办事项关注

| 项目 | 存续时间 | 状态 | 关注点 |
|------|----------|------|--------|
| [#2358](https://github.com/nearai/ironclaw/issues/2358) | 约 5 个月（2026-04-12） | 开放 | 父 issue #2355；仅有 1 条评论；等待维护者审核 |
| [#8121](https://github.com/nearai/ironclaw/issues/8121) | 1 天（2026-10-01） | 开放 | 新增每日分类条目；需要跟进根本原因修复 |

**需要采取的行动：** Issue #2358 自 2026 年 4 月开放至今，参与度有限（1 条评论）。建议维护者关注以进行分类或提供路线图可见性。故障分类（#8121）是有价值的运营实践，但需要对已识别的 workspace-seeding 缺陷进行闭环处理。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw project digest into Chinese. Let me go through the content and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references, code identifiers as-is
4. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

## 1. Today's Overview

QwenPaw shows healthy maintenance activity on October 2, 2026. The repository received **7 new issues** and **9 PR updates** in the last 24 hours, with **2 PRs merged/closed**. No new releases were published. The issue mix reflects active development across provider integrations, UI/UX refinements, and multi-agent orchestration. Community engagement is moderate, with the most discussion concentrated around a Human-in-the-Loop enhancement proposal and several provider-specific bugs affecting DeepSeek and OpenAI integrations. The project appears stable with ongoing incremental improvements.

Translate to:
2026年10月2日，QwenPaw 维护活动保持健康态势。过去24小时内，仓库收到 **7 个新 issue** 和 **9 个 PR 更新**，其中 **2 个 PR 已合并/关闭**。无新版本发布。Issue 类型涵盖 provider 集成、UI/UX 优化和多智能体编排等活跃开发领域。社区参与度适中，讨论最集中的议题是 Human-in-the-Loop 增强提案，以及涉及 DeepSeek 和 OpenAI 集成的若干 provider 特定 bug。项目目前稳定，持续推进增量改进。

---

## 2. Releases

No new releases in the last 24 hours.

过去24小时内无新版本发布。

---

## 3. Project Progress

### Merged/Closed PRs (2)

| PR | Title | Status |
|----|-------|--------|
| [#8069](https://github.com/agentscope-ai/QwenPaw/pull/8069) | fix(agents): restrict deepseek formatters to image media | Closed |
| [#8068](https://github.com/agentscope-ai/QwenPaw/pull/8068) | fix(console): repair CJK emphasis boundaries | Closed |

### Active PRs (9)

I need to continue translating the remaining sections while maintaining the exact Markdown structure, tables, and formatting. The key is to keep all technical identifiers, URLs, and code references in their original form while converting the natural language to technical Chinese.</think>

# QwenPaw 项目摘要 — 2026-10-02

## 1. 今日概览

2026年10月2日，QwenPaw 维护活动保持健康态势。过去24小时内，仓库收到 **7 个新 issue** 和 **9 个 PR 更新**，其中 **2 个 PR 已合并/关闭**。无新版本发布。Issue 类型涵盖 provider 集成、UI/UX 优化和多智能体编排等活跃开发领域。社区参与度适中，讨论最集中的议题是 Human-in-the-Loop 增强提案，以及涉及 DeepSeek 和 OpenAI 集成的若干 provider 特定 bug。项目目前稳定，持续推进增量改进。

---

## 2. 版本发布

过去24小时内无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR（2个）

| PR | 标题 | 状态 |
|----|------|------|
| [#8069](https://github.com/agentscope-ai/QwenPaw/pull/8069) | fix(agents): restrict deepseek formatters to image media | 已关闭 |
| [#8068](https://github.com/agentscope-ai/QwenPaw/pull/8068) | fix(console): repair CJK emphasis boundaries in chat Markdown | 已关闭 |

### 推进中的活跃 PR（7个）

| PR | 标题 | 规模 | 重点领域 |
|----|------|------|----------|
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | feat(modes): add Advisor Mode | 超大 | 新增"Advisor Mode"循环特性，强力 advisor 模型 + 廉价 worker 模型协作 |
| [#8072](https://github.com/agentscope-ai/QwenPaw/pull/8072) | fix(e2e): isolate stateful browser tests | 大 | E2E 测试基础设施改进 |
| [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) | feat(console): wake parent agent session when background task finishes | 小 | 后台任务完成后唤醒父级 agent 会话 |
| [#8070](https://github.com/agentscope-ai/QwenPaw/pull/8070) | fix(agents): restrict deepseek formatters to image media | 中 | DeepSeek API 兼容性（#8069 后续） |
| [#8067](https://github.com/agentscope-ai/QwenPaw/pull/8067) | fix(channels): repair CJK emphasis boundaries in rendered Markdown | 大 | CJK 文本渲染修复 |
| [#8066](https://github.com/agentscope-ai/QwenPaw/pull/8066) | fix(agents): drop empty media blocks before formatting requests | 小 | 空媒体块处理 |
| [#8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) | fix(skills): sanitize skill_name before building staging paths | 小 | 路径遍历安全修复 |

**注意：** "Advisor Mode"（#7569）是一项重大功能更新（超大规模），引入了新的对话循环模式——由更强的"advisor"模型与更便宜的"worker"智能体协作完成。

---

## 4. 社区热门话题

### 参与度最高的 Issue

| Issue | 标题 | 评论数 | 表情反应 |
|-------|------|--------|----------|
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | [功能] 新增 ask_user_question 工具，支持 Human-in-the-Loop | 3 | 👍 1 |
| [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | [Bug] DeepSeek provider：使用 PDF 调用 `send_file_to_user` 会永久破坏会话 | 2 | — |

### 分析

**#6274 — Human-in-the-Loop 工具请求：** 这是参与度最高的议题，提议新增 `ask_user_question` 工具，用于智能体遇到模糊或高风险请求的场景。该功能将向用户展示结构化的多选题（包括"其他/自定义输入"备选），然后再由智能体继续执行。这反映了企业在安全敏感部署场景下对可控 AI 助手行为的增长需求。

**#8064 — DeepSeek 会话持久化 Bug：** 用户报告通过 DeepSeek provider 发送 PDF 文件后会永久破坏会话状态——后续所有请求都返回 400 错误，必须新建会话才能继续。这对涉及文件上传的多轮对话工作流影响显著。

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| Issue | 严重程度 | 标题 | 修复 PR |
|-------|----------|------|---------|
| [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | **高** | DeepSeek provider：PDF 文件导致会话永久破坏 | — |
| [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | **高** | V2.2.2.beta4 无法访问对话页面（LAN 访问） | — |
| [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | **中** | OpenAI provider：gpt-6 系列连接测试失败返回 400 | — |
| [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) | **中** | reload：drain 超时后静默丢弃进行中的 turn | — |
| [#8075](https://github.com/agentscope-ai/QwenPaw/issues/8075) | **低** | 更新捆绑的 Codex SDK 以支持当前模型发现 | — |

### 安全修复

- [#8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) — 修复了 skill staging 路径中的路径遍历漏洞（skill_name 清理）。

**总结：** 两个高严重程度 bug 影响生产可用性：DeepSeek PDF 会话破坏和 beta4 LAN 对话页面访问问题。项目已有活跃的修复 PR（#8070）处理 DeepSeek formatter 问题。

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 影响范围 |
|-------|------|----------|
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | 新增 `ask_user_question` 工具实现 Human-in-the-Loop | **高** — 核心 UX/安全控制 |
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 面向插件的 theme 扩展点（语义 token 覆盖） | 中 — 扩展性 |
| [#8075](https://github.com/agentscope-ai/QwenPaw/issues/8075) | 更新捆绑的 Codex SDK 至 0.159.3 | 低 — SDK urrency |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | Advisor Mode（进行中） | **高** — 新交互范式 |

### 路线图展望

活跃 PR #7569（"Advisor Mode"）表明下一版本将包含双模型协作功能。Human-in-the-Loop 工具请求（#6274）已收集最多社区关注，鉴于 AI 智能体框架对安全性和可控性的趋势，可能在后续周期中获得优先考虑。

---

## 7. 用户反馈总结

### 发现的痛点

1. **DeepSeek Provider 可靠性：** 用户报告 PDF 文件处理会完全破坏会话状态，迫使对话必须重新开始（#8068）。这影响需要文档分析的工作流。
2. **Beta4 回归：** V2.2.2.beta4 用户无法从 LAN 设备访问对话页面（#8073），表明多设备 Web UI 路由存在回归。
3. **OpenAI gpt-6 兼容性：** 新 gpt-6 系列模型连接测试失败，原因是令牌限制逻辑未更新（#8074），阻碍了新模型的采用。
4. **CJK 文本渲染：** 包含 CJK 标点的 Markdown 强调边界渲染不正确（#8067/#8068），影响中文用户体验。

### 满意度信号

- 社区积极贡献修复（多个首次贡献者出现在 PR 中）。
- 安全意识开发：路径遍历漏洞（#8065）已得到主动修复。
- E2E 测试基础设施改进（#8072）表明对稳定性的投入。

---

## 8. 待办事项关注

### 需要维护者关注的问题

| Issue | 存在时间 | 标题 | 备注 |
|-------|----------|------|------|
| [#6274](https://github.com/agentscope-ai/QwenPaw/issues/6274) | 约74天（2026-07-20） | 功能：ask_user_question 工具实现 HITL | 社区关注度最高；需要路线图决策 |
| [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) | 1天 | reload：静默放弃进行中的 turn | 参与度低但涉及架构问题 |
| [#8075](https://github.com/agentscope-ai/QwenPaw/issues/8075) | 1天 | 更新 Codex SDK | 依赖更新；优先级低 |

### 长期运行的 PR

- [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) — Advisor Mode（2026-09-05 开启，约27天）— 大型功能 PR 接近完成。

**建议行动：** 优先处理 #6274（Human-in-the-Loop 工具）以对齐路线图，并在下一稳定版发布前解决高严重程度 bug #8064 / #8073。

---

*基于 QwenPaw 仓库数据生成 — 2026-10-02*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese while preserving the exact Markdown structure. Let me go through and translate it carefully.

Key points:
1. Keep all headings, tables, lists, formatting exactly as-is
2. Translate into natural technical Chinese
3. Keep all URLs, issue numbers, code references, project names as-is
4. Use Chinese punctuation for Chinese text, English punctuation for English text
5. No preamble or explanation, just the translated content

Let me translate section by section:

## 1. Today's Overview

ZeroClaw今天表现出**极高的活动度**，过去24小时内有38个issues和50个PRs更新——所有issues仍处于开放状态，所有PRs仍在审查中，表明开发工作正在大力推进。没有发布新版本。项目正在积极推进gateway集成、principal/session所有权相关的安全增强，以及计划在v0.8.6中发布的插件系统改进。有多个严重级别(S0/S1)的bug正在处理中，大量来自JordanTheJet的堆叠PR系列正在推进runtime composition的重构。

## 2. Releases

过去24小时内**没有新版本**发布。

## 3. Project Progress

过去24小时内没有PRs被合并或关闭——所有50个跟踪的PRs仍处于开放状态。然而，大量推进v0.8.6和v0.9.0的堆叠PR系列取得了实质性进展：

| PR | 描述 | 关注领域 |
|---|---|---|
| [#11419](https://github.com/zeroclaw-labs/zeroclaw/pull/11419) | 使secret key/value maps在zerocode和dashboard中可编辑 | 配置 / UI |
| [#11411](https://github.com/zeroclaw-labs/zeroclaw/pull/11411) | 在SOP中强制私有run所有权和审计路由 | 安全 / SOP |


| [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410) | 守护cron写入并contain unscoped execution | 认证 / Cron |
| [#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409) | 在delegates中拒绝拥有的background result paths | 委托 / 安全 |
| [#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408) | 限制RPC admission并守护SOP中的storage effects | 通信 / 安全 |

I see additional pull requests focusing on gateway service integration, cron execution security, and storage effect protections. The PRs span authentication, service communication, and system boundary enforcement.

The project involves comprehensive security improvements:
- Serving various operational components through the core gateway
- Implementing strict access controls for storage effects
- Managing plugin installations with channel binding
- Configuring tool opt-in features
- Streamlining plugin deployment

This represents a multi-layered approach to enhancing system security, integration, and operational flexibility.

The most discussed issues center on session persistence, workflow execution, and configuration management. Key challenges include session ownership, preventing unauthorized step promotions, and maintaining data integrity during configuration saves.

I notice a critical security vulnerability involving delegated memory scope, which could potentially expose sensitive system resources. The underlying concern involves coordinating multiple independent workstreams touching the same session-persistence contract without clear ownership protocols.

Urgent security issues include unauthorized memory scope breaches and configuration file corruption that dramatically reduces file size from 109 KB to just 702 bytes. These vulnerabilities require immediate attention and targeted remediation strategies.

Additional critical problems involve launch directory handling, step execution sequencing, and user interface functionality in the terminal user interface. Specific focus areas range from Docker image startup failures to potential data loss scenarios.

Feature development prioritizes a llama.cpp model router for dynamic model switching, with additional enhancements around plugin update mechanisms and local authentication approaches. The development roadmap suggests incremental improvements to system flexibility and security.

Users are expressing significant concerns about data preservation, security vulnerabilities, and software stability. Key pain points include config file corruption, memory isolation weaknesses, and regression testing gaps that introduce unexpected behaviors. Config management also appears problematic, with multiple non-functional keys creating user confusion.

Positive feedback highlights successful skill functionality and plugin installation improvements, indicating a balanced development approach with room for refinement.</think>

# ZeroClaw 项目简报 — 2026-10-02

## 1. 今日概览

ZeroClaw今天表现出**极高的活动度**，过去24小时内有38个issues和50个PRs更新——所有issues仍处于开放状态，所有PRs仍在审查中，表明开发工作正在大力推进。没有发布新版本。项目正在积极推进gateway集成、principal/session所有权相关的安全增强，以及计划在v0.8.6中发布的插件系统改进。有多个严重级别(S0/S1)的bug正在处理中，大量来自JordanTheJet的堆叠PR系列正在推进runtime composition的重构。

---

## 2. 版本发布

过去24小时内**没有新版本**发布。

---

## 3. 项目进展

过去24小时内没有PRs被合并或关闭——所有50个跟踪的PRs仍处于开放状态。然而，大量推进v0.8.6和v0.9.0的堆叠PR系列取得了实质性进展：

| PR | 描述 | 关注领域 |
|---|---|---|
| [#11419](https://github.com/zeroclaw-labs/zeroclaw/pull/11419) | 使secret key/value maps在zerocode和dashboard中可编辑 | 配置 / UI |
| [#11411](https://github.com/zeroclaw-labs/zeroclaw/pull/11411) | 在SOP中强制私有run所有权和审计路由 | 安全 / SOP |
| [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410) | 守护cron写入并contain unscoped execution | 认证 / Cron |
| [#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409) | 在delegates中拒绝拥有的background result paths | 委托 / 安全 |
| [#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408) | 限制RPC admission并守护SOP中的storage effects | SOP / 安全 |
| [#11381](https://github.com/zeroclaw-labs/zeroclaw/pull/11381) | 通过zeroclaw-gw提供session消息、状态和删除功能 | Gateway |
| [#11382](https://github.com/zeroclaw-labs/zeroclaw/pull/11382) | 通过core提供status、logs、doctor和event stream | Gateway |
| [#11417](https://github.com/zeroclaw-labs/zeroclaw/pull/11417) | 通过core提供config写入、Quickstart和reload功能 | Gateway |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | 将SaaS和coding-CLI工具 gated 在opt-in features后 | 工具链 / 体积 |
| [#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302) | 在plugin install时绑定channel实例并seed grants | 插件 |
| [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | 从zeroclaw quickstart安装和激活tool plugins | 入门体验 |

---

## 4. 社区热点

**评论最多的issues（按评论数排序）：**

1. **[#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)** — [追踪]: Session-persistence合约的所有权及层级顺序 — 16条评论  
   *核心需求：四个独立的工作流正在修改同一个session-persistence合约，但没有人负责；需要协调以确定所有权和执行顺序。*

2. **[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)** — Bug: 长期运行的ephemeral daemon进入持续的多核CPU旋转 — 5条评论  
   *核心需求：daemon的长期运行稳定性；影响生产环境部署。*

3. **[#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)** — Bug: SOP引擎在记录步骤的output-schema拒绝之前就提升并执行后续步骤 — 4条评论  
   *核心需求：工作流正确性；步骤在不应该执行时被执行了。*

4. **[#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495)** — Bug: Config::save()将操作员填充的config.toml替换为近乎空的文件 — 4条评论  
   *核心需求：防止数据丢失；109 KB配置被缩减为702字节。*

5. **[#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)** — Bug: 委托的memory tools失去principal scope — 4条评论  
   *核心需求：安全隔离；子代理可以访问principal的私有memory plane。*

---

## 5. Bug 与稳定性

**今天报告的严重(S0/S1) bugs：**

| Issue | 严重级别 | 描述 | 修复PR？ |
|---|---|---|---|
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | S0 | 委托的memory tools失去principal scope（安全风险） | — |
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | S0 | 拥有的sessions通过spawn_subagent/execute_pipeline到达共享memory plane | — |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | S0 | Config::save()数据丢失 — 109 KB → 702 bytes | — |
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | S2 | zerocode忽略launch directory（回归） | — |
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | S1 | SOP在记录拒绝前运行后续步骤 | — |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | S1 | TUI中"复制"一键功能不工作 | — |
| [#11369](https://github.com/zeroclaw-labs/zeroclaw/issues/11369) | S1 | Docker镜像启动时退出；中断的升级可能导致DB stranded | — |

**注意：** 这些bugs目前没有关联的修复PRs。安全相关的S0 bugs (#11198, #11239, #10495) 需要紧急处理。

---

## 6. 功能需求与路线图信号

**趋向于下一版本(v0.8.6)的关键功能需求：**

| Issue | 功能 | 优先级 |
|---|---|---|
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | llama.cpp模型路由器，支持快速模型切换 | P2 |
| [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) | 带失败回滚的已验证插件更新 | — |
| [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) | 本地用户名/密码AuthProvider（无需IdP的浏览器登录） | P2 |
| [#11323](https://github.com/zeroclaw-labs/zeroclaw/issues/11323) | 决定daemon拒绝的授权编辑是否应该保存config set | 增强 |
| [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) | 验证Windows上的命名管道服务器以支持实时CLI授权编辑 | 增强 |

**预测信号：** 堆叠PRs (#11174, #11187, #11221)强烈表明v0.8.6将包含基于capability的runtime composition和可选的tool gating。插件生命周期管理(#11302, #11309)也计划在该版本中推出。

---

## 7. 用户反馈摘要

**从近期issues中识别的痛点：**

1. **数据丢失担忧** — 多位用户报告配置文件损坏(#10495)和Docker升级问题(#11369)，削弱了对配置持久化和迁移的信任。
2. **安全顾虑** — 委托的memory scope丢失(#11198, #11239)和ZeroRelay中的共享operator principal(#10766)被标记为S0风险；用户担心多代理场景下的数据隔离。
3. **回归挫败感** — zerocode launch directory bug(#11387)是#10609的*回归*，表明回归测试不足。
4. **配置困惑** — 若干配置键(#10781)是"惰性"的——接受但不起作用——导致用户困惑哪些设置实际影响行为。

**积极信号：**
- Skill bundle功能正常（skills加载和工作），但skill审查工具需要修复(#11333, #11332)。
- 插件安装改进(#11236)正在审查中，可能解决不完整安装恢复问题。

---

## 8. 积压关注

**需要维护者关注的老旧或停滞issues：**

| Issue | 时长 | 状态 | 关注点 |
|---|---|---|---|
| [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | ~2个月 | 开放，无stale | Session-persistence合约追踪器——协调瓶颈 |
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | ~2个月 | 开放，无stale | 配对码永不过期；安全审计发现 |
| [#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) | ~3个月 | 已接受，无stale | 本地认证provider功能——受阻于AuthProvider接口决策 |
| [#9624](https://github.com/zeroclaw-labs/zeroclaw/issues/9624) | ~2个月 | 已接受，跟进 | Registry WIT pin分歧——阻塞WASM组件兼容性 |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | ~2周 | 阻塞 | Discord插件发布需要已发布的registry包 |

**需要审查/合并的PRs：**

| PR | 时长 | 阻塞原因 |
|---|---|---|
| [#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) | ~1周 | 合并暂停（vision-route修复待定） |
| [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187) | ~1周 | 堆叠在#11174上 |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | ~3天 | 大规模；影响二进制体积profile |

---

*简报基于2026-10-02的GitHub数据生成。所有链接指向zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*