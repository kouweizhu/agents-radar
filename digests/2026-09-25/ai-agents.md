# OpenClaw 生态日报 2026-09-25

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-25 00:44 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the Project Digest into Simplified Chinese, following the detailed translation rules provided. Let me go through each section and translate it while preserving the exact structure, URLs, code references, and using natural technical Chinese.

Let me translate section by section:

## 标题
# OpenClaw 项目简报 — 2026-09-25

## 今日概览
OpenClaw 今日活跃度 **较高**，过去24小时内有500个issue和500个PR更新。项目正在积极处理多个关键稳定性问题，特别是 Gateway 事件循环处理、模型目录性能和数据库竞争方面。虽然 **暂无新版本** 发布，但目前有多个针对 2026.9.5 和 2026.9.6 版本的回归问题正在调查中，多个 PR 正在修复会话状态和数据库性能问题。社区参与度高，关于回归问题和功能提案的讨论很活跃。

## 发布动态
**今日无新版本**发布。最新稳定版本仍为 2026.9.5 和 2026.9.6，这两个版本正是多个活跃 bug 报告的焦点（见"Bug 与稳定性"章节）。

## 项目进展

## 社区热点
### 关注度最高的 Issue

### 潜在需求

## Bug 与稳定性

## 功能需求与路线图信号

## 用户反馈摘要

## 待处理事项

Let me continue with the detailed translation...</think>

# OpenClaw 项目简报 — 2026-09-25

## 今日概览

OpenClaw 今日活跃度 **较高**，过去24小时内有500个issue和500个PR更新。项目正在积极处理多个关键稳定性问题，特别是 Gateway 事件循环处理、模型目录性能和数据库竞争方面。虽然 **暂无新版本** 发布，但目前有多个针对 2026.9.5 和 2026.9.6 版本的回归问题正在调查修复中，多个 PR 正在针对会话状态和数据库性能问题进行修复。社区参与度高，用户对回归问题的关注和功能提案的讨论很活跃。

---

## 发布动态

**今日无新版本**发布。最新稳定版本仍为 2026.9.5 和 2026.9.6，这两个版本正是多个活跃 bug 报告的焦点（见「Bug 与稳定性」章节）。

---

## 项目进展

| PR | 状态 | 描述 |
|----|--------|-------------|
| [#157294](https://github.com/openclaw/openclaw/pull/157294) | 已关闭 | **refactor(agents): deslop runners, harness and recovery** — 整合了 agent runner、harness adapter、故障转移分类和恢复逻辑 |
| [#157770](https://github.com/openclaw/openclaw/pull/157770) | 开放 | **fix(update): preserve already-current updates and OverlayFS retention** — 修复 Docker OverlayFS 上包更新失败的问题 |
| [#157634](https://github.com/openclaw/openclaw/pull/157634) | 开放 | **fix: keep gateway responsive during transcript and task database work** — 解决数据库竞争下的事件流卡顿问题 |
| [#156940](https://github.com/openclaw/openclaw/pull/156940) | 开放 | **fix(codex): prevent stale native sessions from mutating successors** — P1 会话状态修复 |
| [#157701](https://github.com/openclaw/openclaw/pull/157701) | 开放 | **fix(android): ask for phone permissions when needed** — 改为首次使用时请求权限，而非启动时 |
| [#157625](https://github.com/openclaw/openclaw/pull/157625) | 开放 | **feat(streaming): allow separate command progress limit** — 新增 `streaming.progress.commandMaxLineChars` 配置项 |

---

## 社区热点

### 关注度最高的 Issue

1. **[#144911](https://github.com/openclaw/openclaw/issues/144911)** — **MCP server init timeout crashes Gateway** (30 条评论，P1)  
   *严重问题：子进程清理路径中未捕获的 Promise rejection 导致 Gateway 在 stdio MCP 服务器 30 秒初始化超时后崩溃。*

2. **[#155753](https://github.com/openclaw/openclaw/issues/155753)** — **Model-catalog expiry/rebuild loop pins CPU core** (23 条评论，P2)  
   *性能问题：`readFullModelCatalog()` 每次读取都重新触发 `refreshExpiredCatalog()`，导致 CPU 持续占用。*

3. **[#149538](https://github.com/openclaw/openclaw/issues/149538)** — **Gateway reaches ready but never serves; event loop starved** (21 条评论，P0)  
   *严重回归：632 个 agent 的集群进入 ready 状态后 `/health` 探针超时；RSS 持续上升直至 OOM。*

4. **[#112423](https://github.com/openclaw/openclaw/issues/112423)** — **Large SQLite transcript cleanup blocks gateway event loop** (20 条评论，P1)  
   *归档大型 SQLite 后端 transcripts 时阻塞事件循环。*

5. **[#98435](https://github.com/openclaw/openclaw/issues/98435)** — **MCP loopback transport auto-reconnect issue** (14 条评论，P1)  
   *误导性恢复：会话报告 `recovered=1` 但 MCP loopback transport 在 Gateway 重启后未重新握手。*

### 潜在需求

- **高负载下的稳定性**：多个 issue（#149538、#155753、#112423）表明 Gateway 在并发、大数据量和事件循环响应方面存在问题
- **MCP 可靠性**：#144911 和 #98435 都聚焦于 MCP 传输层的容错能力
- **回归追踪**：多个 P0/P1 问题涉及 2026.9.x 版本的回归，需要仔细评估是否需要回滚修复

---

## Bug 与稳定性

| Issue | 严重级别 | 状态 | 描述 |
|-------|----------|--------|-------------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | P0 | 开放 | Gateway ready 但 `/health` 超时；事件循环饥饿（632-agent 集群） |
| [#157107](https://github.com/openclaw/openclaw/issues/157107) | P0 | 已关闭 | prepared-model-catalog worker 每 6 秒重建一次；agent 运行始终无法准入 |
| [#157011](https://github.com/openclaw/openclaw/issues/157011) | P0 | 已关闭 | 托管更新从 2026.9.5 升级到 2026.9.6 时以 RangeError 回滚 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | P0 | 开放 | Gateway 启动耗时随启用插件数量线性增长 |
| [#157234](https://github.com/openclaw/openclaw/issues/157234) | P0 | 开放 | 更新恢复因活动 agent 数据库租约失败 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | P1 | 开放 | MCP server 初始化超时导致 Gateway 崩溃（未捕获 rejection） |
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | P2 | 开放 | Model-catalog 过期/重建循环导致 CPU 核心满载 |
| [#99659](https://github.com/openclaw/openclaw/issues/99659) | P2 | 开放 | 连接 companion app 后 OOM 被杀 |

**关键修复 PR**：#157634 旨在提升事件循环响应能力；#157770 旨在解决更新稳定性问题。

---

## 功能需求与路线图信号

| Issue | 优先级 | 描述 |
|-------|----------|-------------|
| [#99583](https://github.com/openclaw/openclaw/issues/99583) | P3 | **智能会话自动命名** — 延迟生成、廉价模型、主题感知的重命名 |
| [#81960](https://github.com/openclaw/openclaw/issues/81960) | P3 | **支持 onboarding 配置多个 provider 和 model** |
| [#138279](https://github.com/openclaw/openclaw/issues/138279) | P3 | **提供 Linux companion 的 aarch64 构建（deb + AppImage）** |
| [#41366](https://github.com/openclaw/openclaw/issues/41366) | P3 | **持久化自然语言规则学习 + 明确的多提及回复语义** |

**路线图信号**：多 provider onboarding 和 ARM64 Linux 支持是用户频繁提出的需求。会话自动命名功能与减少用户手动操作的目标一致。

---

## 用户反馈摘要

**痛点：**
- **内存/资源耗尽**：用户报告 OOM 被杀（#99659）、CPU 持续满载（#155753）、RSS 持续上升（#149538）
- **更新不稳定**：多个托管更新回滚或失败的报告（#157011、#157234、#157770）
- **事件循环阻塞**：大型 transcript 清理和数据库竞争阻塞 Gateway 响应（#112423、#157634）
- **插件启动回归**：2026.9.5 版本 Gateway 启动时间随插件数量增长（#155859）

**积极信号：**
- 社区积极提交详细的 bug 报告，包含复现步骤和版本信息
- 多位用户提供详尽的诊断数据（数据库大小、Node 版本、平台环境等）
- 跨版本回归追踪表明用户群体密切关注升级路径

---

## 待处理事项

| Issue | 存在时间 | 优先级 | 状态 | 备注 |
|-------|-----|----------|--------|-------|
| [#134925](https://github.com/openclaw/openclaw/issues/134925) | 约24天 | P1 | 已关闭 | ARM64/Pi 上 Gateway 主线程 CPU 100% — *近期已关闭* |
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | 约52天 | P2 | 开放 | Gateway 冷启动从 2026.7.1-beta.1 退化至 2026.7.2-beta.7，慢了约 2.5 倍 |
| [#69822](https://github.com/openclaw/openclaw/pull/69822) | 约157天 | P2 | 开放 | **session-message-events socket.drain** — 长期未合并的功能请求，合并风险较高 |
| [#72504](https://github.com/openclaw/openclaw/issues/72504) | 约151天 | P2 | 开放 | Feishu bot strip 自身 @mention 导致多 bot 群组中 NO_REPLY |

**需关注**：PR [#69822](https://github.com/openclaw/openclaw/pull/69822) 已开放超过 5 个月，存在多条合并风险标记（会话状态、消息投递、可用性）。建议维护团队做出决策或予以关闭。

---

## 横向生态对比

<think>The user wants me to translate the entire English report into Chinese. I need to translate all the content while:
1. Preserving the Markdown structure exactly
2. Keeping all technical identifiers, project names, URLs, numbers, dates as-is
3. Using natural technical Chinese register

Let me go through and translate carefully:

Title: Personal AI Agent Ecosystem — Cross-Project Comparison Report

Let me translate section by section:

1. Ecosystem Overview - translate naturally
2. Activity Comparison table - translate headers and content appropriately
3. OpenClaw's Position
4. Shared Technical Focus Areas
5. Differentiation Analysis
6. Community Momentum & Maturity
7. Trend Signals

I'll keep everything in Markdown format as requested.</think>

# 个人 AI 助手生态系统 —— 跨项目对比报告

---

## 1. 生态概览

个人 AI 助手与智能体的开源生态正在经历激烈的开发活动，所有监控的项目都保持活跃。**OpenClaw** 和 **ZeroClaw** 以 500+ 更新量领跑，**Hermes Agent** 和 **QwenPaw** 保持健康的中间区间活动。领域内围绕共同的基础设施挑战统一——事件循环稳定性、内存管理、多租户能力以及安全加固——但在架构理念上分歧明显：部分项目采用插件即服务模式，而其他项目优先与特定平台（Signal、微信、飞书）深度集成。多个项目中存在 P0 级别缺陷表明该领域仍在成熟过程中，可靠性工程仍是生产部署的核心关注点。

---

## 2. 活动对比

| 项目 | Issue 更新（24h） | PR 更新（24h） | 开放 Issue | 开放 PR | 新发布（24h） | 健康度 |
|---------|---------------------|-------------------|-------------|----------|-------------------|--------------|
| **OpenClaw** | 500 | 500 | 451 | 381 | 0 | 🟢 活跃 — 更新量领先，积极修复回归问题 |
| **ZeroClaw** | 27 | 50 | 23 | 38 | 0 | 🟢 活跃 — 关注安全，快速迭代 |
| **Hermes Agent** | 50 | 50 | 14 | 50 | 1 (v0.21.5) | 🟡 中等 — 活跃但有待处理的安全问题 |
| **QwenPaw** | 31 | 23 | 18 | 17 | 0 | 🟡 中等 — 控制台回归问题，功能持续开发 |
| **IronClaw** | 1 | 1 | 1 | 1 | 1 (v1.4.1-rc.2) | 🔴 低 — 维护模式，活动极少 |

---

## 3. OpenClaw 的定位

### 相比同行的优势

- **开发规模**：OpenClaw 处理的问题/PR 数量是次高活跃项目（ZeroClaw）的 10 倍，表明贡献者群体更大，发布节奏更成熟
- **发布节奏**：与 IronClaw（停滞）或 ZeroClaw（24h 无发布）不同，OpenClaw 通过高合并速度维持持续部署
- **社区参与**：热门 Issue 上 30+ 评论线程显示用户积极参与调试和功能设计

### 技术路线差异

| 方面 | OpenClaw | 同行项目 |
|--------|----------|-------|
| **架构** | Gateway 为中心，MCP 传输 | ZeroClaw：runtime/gateway 分离；Hermes：桌面优先 |
| **重点** | 企业级集群管理（632 代理规模） | QwenPaw：个人助手；Hermes：桌面集成 |
| **稳定性模式** | 事件循环饥饿修复 | ZeroClaw：安全沙箱；IronClaw：部署配置 |

### 社区规模

OpenClaw 24 小时内 500 个 Issue/PR 的更新量表明贡献者基数为 50-100+ 人，显著大于 IronClaw（1-2 人活跃），与 Hermes Agent 持平（同样高更新量但合并 PR 较少）。

---

## 4. 共同技术关注点

### 跨项目需求

| 关注领域 | OpenClaw | Hermes | QwenPaw | ZeroClaw | IronClaw |
|------------|----------|--------|---------|----------|----------|
| **事件循环 / 异步稳定性** | ✅ P0 #149538, #112423 | — | — | — | — |
| **内存 / 上下文管理** | ✅ #155753 (catalog) | — | ✅ #7571, #7628 | ✅ #10797 (损坏) | — |
| **安全加固** | — | ✅ #115104 (脱敏) | — | ✅ #10968, #7821 | — |
| **多租户 / 团队功能** | — | — | ✅ #7318 Hub | — | ✅ #8111 |
| **桌面平台问题** | — | ✅ 多个 Windows | ✅ 控制台回归 | — | — |
| **插件 / 扩展架构** | ✅ MCP | — | ✅ 运行时插件 | ✅ #6489, #8850 | — |
| **供应商 / 模型灵活性** | — | ✅ 新供应商 | ✅ 更低成本推理 | — | — |

### 共识模式

1. **可靠性优先于功能**：每个项目都有与异步处理、内存损坏或安全相关的 P0/P1 缺陷——表明整个生态处于"可靠性优先"模式
2. **运行时插件是通用的**：五个项目中有三个（OpenClaw、QwenPaw、ZeroClaw）正积极开发运行时插件架构
3. **多租户正在兴起**：OpenClaw（集群）、QwenPaw（Hub）和 IronClaw（多租户）都将多用户作为增长方向

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|-----------|----------|--------------|----------|---------|----------|
| **主要目标** | 企业 DevOps 团队 | 桌面高级用户 | 安全敏感部署 | 个人开发者 | 企业运维 |
| **核心差异化** | MCP 传输，集群规模 | 桌面集成，Signal/微信/飞书渠道 | 沙箱策略，OIDC | 语音聊天，Hub 多租户 | 部署简洁 |
| **架构理念** | 单体 Gateway | 桌面优先 | 分离式（runtime/gateway） | 模块化带插件 | 单用途代理 |
| **平台侧重** | 跨平台（Docker、Linux） | Windows/macOS 桌面 | Linux 服务器，安全优先 | 跨平台 | 云部署 |
| **发布速度** | 持续更新（500 更新/24h） | 高速（v0.21.5） | 高速（50 PR/24h） | 中等 | 低（RC 发布） |

### 独特优势

- **OpenClaw**：MCP 生态集成，大规模集群管理
- **Hermes Agent**：桌面 UX 打磨，Signal/微信/飞书渠道深度
- **ZeroClaw**：安全优先（OIDC，沙箱，审批管理器）
- **QwenPaw**：语音聊天，Hub 多租户，控制台重设计
- **IronClaw**：聚焦部署工具，Google OAuth 灵活性

---

## 6. 社区动能与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|----------|-----------------|
| **快速迭代** | OpenClaw, ZeroClaw | 50-500 更新/24h，积极修复回归，大量开放 PR |
| **稳定增长** | Hermes Agent, QwenPaw | 20-50 更新/24h，定期发布，功能开发 |
| **维护** | IronClaw | 1-2 更新/24h，仅补丁 RC 发布 |

### 成熟度评估

| 项目 | 成熟度信号 |
|---------|-------------------|
| **OpenClaw** | 高更新量，但近期版本（2026.9.x）存在多个 P0 回归——仍在稳定中 |
| **ZeroClaw** | 高速更新，但 RFC 瓶颈（#8692）——治理需关注 |
| **Hermes Agent** | 成熟的桌面应用，但 v0.21.5 是补丁叠补丁——显示迭代精炼 |
| **QwenPaw** | 活跃的 v2.x 开发，近期控制台重设计——UX 仍在演进 |
| **IronClaw** | 低活动——要么已稳定，要么失去动能 |

---

## 7. 趋势信号

### AI 智能体开发者注意事项

1. **事件循环可靠性是第一工程挑战**：OpenClaw 和 ZeroClaw 都有 P0 级缺陷——Node.js/Rust 运行时中的异步处理是共同瓶颈

2. **安全不再是可选项**：ZeroClaw 的 OIDC 阶段 3、Hermes 的密钥脱敏漏洞、以及 OpenClaw 的审批管理器绕过都表明生产部署需要稳健的安全模型

3. **运行时插件 > 编译时插件**：五个项目中有三个正迁移到运行时插件架构——开发者应优先关注插件 SDK 设计

4. **多租户是企业级解锁点**：QwenPaw Hub、IronClaw 多租户和 OpenClaw 集群管理都瞄准团队/组织用例

5. **内存/上下文管理仍未解决**：并发写入丢失数据（ZeroClaw #10797）、目录重建循环（OpenClaw #155753）、内存遗忘（QwenPaw #7571）——这些代表基础研发挑战

6. **平台特定问题主导低优先级待办**：Hermes 的 Windows 桌面问题、OpenClaw 的 Docker/OverlayFS、ZeroClaw 的 Windows 任务所有者——跨平台测试成本仍然高昂

### 战略启示

- **贡献者**：聚焦异步稳定性、安全加固和插件系统——这些领域有维护者关注和资金支持
- **集成商**：优先选择近期稳定发布的项目（Hermes v0.21.5、IronClaw v1.4.1-rc.2），而非有近期回归的快速迭代项目
- **企业**：ZeroClaw 提供最强的安全态势；OpenClaw 提供最成熟的 MCP 生态；QwenPaw 为团队提供最佳的多租户 Hub

---

*报告基于 2026 年 9 月 25 日 GitHub 活动数据编制，涵盖 OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw 五个项目。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>I need to translate this project digest into Chinese while following the rules:
- Output ONLY the translation, no preamble or explanation
- Preserve Markdown structure exactly
- Keep technical terms, URLs, issue numbers, etc. as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully:

## 1. Today's Overview

## 2. Releases

## 3. Project Progress

## 4. Community Hot Topics

## 5. Bugs & Stability

## 6. Feature Requests & Roadmap Signals

## 7. User Feedback Summary

## 8. Backlog Watch

Let me translate section by section:</think>

# Hermes Agent 项目简报 — 2026-09-25

## 1. 今日概览

Hermes Agent 保持高度活跃，过去 24 小时内共有 **50 个 issue** 和 **50 个 pull request** 更新。项目发布了 **v0.21.5** 版本，这是一个汇总了自 v0.21.4 以来约 460 个合并 PR 的补丁版本。Issue 追踪器显示桌面端相关问题占据主导，尤其是 Windows 和 macOS 平台，涉及会话管理、配置切换和后端连接的多个 bug。Bug 报告（多数已关闭）与功能需求的分布较为均衡，但围绕 secret 重写的安全问题正在浮现。

## 2. 版本发布

### v2026.9.24 — Hermes Agent v0.21.5
**发布日期：** 2026 年 9 月 24 日

这是一个**补丁版本**，将自 v0.21.4 以来合并的约 460 个 PR 整合为一个稳定标签版本，供下游消费者使用（Docker 镜像、Hermes Cloud、托管部署）。

> 完整的版本说明将择日发布。此版本主要面向生产部署进行代码库稳定性加固。

**影响：** Docker 镜像、Hermes Cloud 和托管部署的下游用户应升级至此版本，以获取自上一冲刺周期以来的最新修复和改进。

---

## 3. 项目进展

**过去 24 小时 PR 活动：** 50 个 PR 开启 — 0 个已合并/关闭

推动项目进展的最新 PR：

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#121470](https://github.com/NousResearch/hermes-agent/pull/121470) | OutThisLife | fix(browser): 优先使用原生 Windows ARM64 agent-browser 二进制文件 |
| [#122059](https://github.com/NousResearch/hermes-agent/pull/122059) | teknium1 | 修复空对象/空值作为可选工具参数导致的处理器崩溃 |
| [#121566](https://github.com/NousResearch/hermes-agent/pull/121566) | OutThisLife | fix: reasoning-field 长度截断时中止并暴露 taskkill 关闭失败 |
| [#122060](https://github.com/NousResearch/hermes-agent/pull/122060) | teknium1 | 修复 Gemini 工具模式中孤立的 required 与 draft-04 边界导致的 400 错误 |
| [#121437](https://github.com/NousResearch/hermes-agent/pull/121437) | OutThisLife | fix(accounts): 停止陈旧的 Claude Code 连接并拒绝虚假移除成功 |
| [#121564](https://github.com/NousResearch/hermes-agent/pull/121564) | OutThisLife | fix(docker): 当 /workspace 已被占用时绑定 Windows 工作区 |
| [#121531](https://github.com/NousResearch/hermes-agent/pull/121531) | OutThisLife | fix(desktop): 刷新对等窗口并拒绝陈旧多窗口提交 |
| [#121528](https://github.com/NousResearch/hermes-agent/pull/121528) | OutThisLife | fix(desktop): 使用 CREATE_NO_WINDOW 隐藏 Git 进程 |
| [#121560](https://github.com/NousResearch/hermes-agent/pull/121560) | OutThisLife | fix(desktop): 在 id 重写时每个助手轮次只播报一次 |
| [#121606](https://github.com/NousResearch/hermes-agent/pull/121606) | OutThisLife | fix(desktop): 启动时优先初始化本地后端 |

**主要主题：**
- **桌面端体验修复：** 多窗口同步、状态栏计时器一致性、macOS 重复 Dock 图标
- **平台兼容性：** Windows ARM64 浏览器二进制、Docker 工作区绑定、Git 进程可见性
- **工具/Agent 稳定性：** Reasoning 字段中止逻辑、Gemini 模式处理、可选参数分发

---

## 4. 社区热点话题

### 讨论最活跃的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 状态 |
|-------|-------|----------|--------|
| [#121970](https://github.com/NousResearch/hermes-agent/issues/121970) | Signal：提供禁用「笔记至本人」消息处理的选项 | 9 | 开启 |
| [#92760](https://github.com/NousResearch/hermes-agent/issues/92760) | Bot Mode 群组机器人回复缓慢；桌面端 UI 需优化 | 7 | 已关闭 |
| [#57812](https://github.com/NousResearch/hermes-agent/issues/57812) | macOS 上的 Hermes 无法连接局域网内远程 LLM | 6 | 开启 |
| [#115104](https://github.com/NousResearch/hermes-agent/issues/115104) | **安全问题：** Memory-provider 同步绕过 secret 重写 | 3 | 开启 |

**分析：**

1. **#121970 — Signal「笔记至本人」消息处理：** 以链接辅助设备身份运行 signal-cli 的用户希望能够禁用自动将「笔记至本人」消息提升为 Agent 提示词的功能。这反映了那些在个人消息和 Hermes 之外同时使用 Signal 的用户需求。

2. **#92760 — Bot Mode 性能问题：** 群组机器人延迟和桌面端 UI 对非中文用户（zh-CN）的优化需求表明，生产级机器人部署和国际化的市场需求。

3. **#57812 — macOS 局域网 LLM 连接：** 用户报告 Hermes 无法通过局域网访问远程 LLM，而系统 Python/httpx 可以正常工作——这是一个影响本地 AI 部署的兼容性回归问题。

4. **#115104 — Secret 重写绕过（安全）：** 这是一个关键安全问题，外部 memory provider 会收到未经重写的 secrets。这是一个数据泄露风险，需要紧急处理。

---

## 5. Bug 与稳定性

### 高优先级 Bug 报告

| Issue | 严重程度 | 平台 | 描述 | 修复 PR？ |
|-------|----------|----------|-------------|---------|
| [#115104](https://github.com/NousResearch/hermes-agent/issues/115104) | **P3 安全** | Agent/Memory | Memory-provider 同步绕过 secret 重写 | 无 |
| [#57812](https://github.com/NousResearch/hermes-agent/issues/57812) | **P2** | macOS | 无法连接局域网内远程 LLM | 无 |
| [#63577](https://github.com/NousResearch/hermes-agent/issues/63577) | **P2 严重** | Windows | `hermes update` 破坏本地提交、杀死聊天、阻塞 | 无 |
| [#76030](https://github.com/NousResearch/hermes-agent/issues/76030) | **P0** | Desktop | 对话记录完全冻结，无法滚动 | 无 |
| [#82383](https://github.com/NousResearch/hermes-agent/issues/82383) | **P2** | Windows | Hermes-Setup.exe 失败 — npm EBADENGINE | 无 |
| [#109858](https://github.com/NousResearch/hermes-agent/issues/109858) | **P2** | Windows | 远程后端的 Heartbeat/loop 不工作 | 无 |
| [#100438](https://github.com/NousResearch/hermes-agent/issues/100438) | **P2** | Desktop | 配置 dashboard.public_url 时启动失败 | 无 |

**稳定性评估：**
- Windows 平台呈现最高 Bug 密度（更新机制、npm 版本检查、健康检查超时）
- 桌面端应用存在多个 UI 冻结和会话管理问题
- 安全问题（#115104）需要立即处理——secrets 以明文形式归档到外部 provider

---

## 6. 功能需求与路线图信号

### 值得注意的功能需求

| Issue | 需求 | 优先级 | 信号 |
|-------|---------|----------|---------|
| [#121970](https://github.com/NousResearch/hermes-agent/issues/121970) | Signal：提供禁用「笔记至本人」处理的选项 | P3 | 用户希望控制 Signal 消息的自动提升行为 |
| [#89697](https://github.com/NousResearch/hermes-agent/issues/89697) | 桌面端配置切换不更新侧边栏 | P2（已关闭） | 多配置 UX 需要改进 |
| [#91710](https://github.com/NousResearch/hermes-agent/issues/91710) | 桌面端在不活动 Bot 完成时未显示未读状态 | P3（已关闭） | 后台任务需要更好的视觉通知 |

**路线图信号：**
- **桌面端多配置体验** 正在积极改进中（见近期 PR #121606、#121531）
- **Signal 适配器** 的增强功能已收到需求，用于链接辅助设备场景
- **Windows 自我更新** 机制基于多个 bug 报告需要重新设计

---

## 7. 用户反馈总结

### 已识别的痛点

1. **Windows 更新机制：** 用户报告 Windows 上的 `hermes update` 具有破坏性——会破坏本地提交、杀死活跃聊天、在桌面端打开时阻塞。带有本地携带提交的自我更新延迟循环永远无法完成。

2. **桌面端 UI 冻结：** 多个报告指出对话记录冻结、无法滚动，会话进行中完全无响应。

3. **macOS 连接问题：** 用户无法通过局域网连接远程 LLM，而同一请求在系统 Python 上可以正常工作——这是一个兼容性回归。

4. **Bot Mode 性能：** 群组机器人回复缓慢，偶尔完全卡死；轮询驱动的架构被认为是根本原因。

5. **中文本地化（zh-CN）：** 桌面端 UI 需要为非英语用户优化，auth.json GBK 解析导致图片上传失败的具体问题。

### 满意度信号

- 许多 P2/P3 桌面端问题现已**关闭**，表明维护工作积极进行
- v0.21.5 汇总了约 460 个 PR，表明开发节奏强劲
- 近期 PR 解决了多窗口同步和对等窗口刷新问题——用户体验正在改善

---

## 8. 待办事项关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 优先级 | 描述 |
|-------|-----|----------|-------------|
| [#115104](https://github.com/NousResearch/hermes-agent/issues/115104) | 7 天 | 安全 | Memory-provider 同步绕过 secret 重写 |
| [#57812](https://github.com/NousResearch/hermes-agent/issues/57812) | 约 3 个月 | P2 | macOS 无法连接局域网内远程 LLM |
| [#76483](https://github.com/NousResearch/hermes-agent/issues/76483) | 约 2 个月 | P3 | kanban notify-subscribe 盖错配置戳 |
| [#121970](https://github.com/NousResearch/hermes-agent/issues/121970) | 1 天 | P3 | Signal：提供禁用「笔记至本人」处理的选项 |
| [#122027](https://github.com/NousResearch/hermes-agent/issues/122027) | 1 天 | P3 | 桌面端打开不存在的本地文件时不检查是否存在 |

**长期未解决问题：**
- **#57812**（macOS 局域网连接）——自 2026 年 7 月开启，尚未解决
- **#76483**（配置戳记 bug）——自 2026 年 8 月开启
- **#91437**（Docker 缺少 google-cloud-pubsub）——表明 Docker 镜像构建流程存在缺口

**待审查的 PR：** 过去 24 小时内有 50 个开启的 PR——维护者审查能力可能受限。

---

*数据来源：GitHub NousResearch/hermes-agent 项目 — 2026-09-25*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all Markdown structure exactly as is
3. Keep technical terms, project names, URLs, issue numbers, version tags as-is
4. Use natural technical Chinese register

Let me go through and translate while preserving the structure:</think>

# IronClaw 项目摘要 — 2026-09-25

## 1. 今日概览

IronClaw 在 2026-09-25 显示出适度的活动。新发布的候选版本（v1.4.1-rc.2）于昨日发布，解决了一个关于 Google OAuth 配置的可用性问题。社区参与度仍然较低，仅有一个活跃的 Issue 和一个 Pull Request，均在最近 24 小时内有更新。该项目在 v1.4.0 稳定版发布后处于稳定的维护阶段。

---

## 2. 发布动态

### ironclaw-v1.4.1-rc.2 — 发布于 2026-09-24

**类型：** 补丁版本（第二个候选版本）

**变更内容：**

| 类别 | 描述 |
|----------|-------------|
| **修复** | Google 扩展（Gmail、Google Calendar）现在可以在部署时通过 Web UI 配置 Google OAuth 客户端，而无需使用环境变量。 |

**备注：** 这是 v1.4.0 的第二个补丁候选版本，与 RC1 携带相同的变更。此更改通过允许通过 Web UI 配置 OAuth，提升了部署灵活性，减少了对环境变量配置的依赖。

🔗 [发布详情](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1-rc.2)

---

## 3. 项目进度

**Pull Request 活动（24 小时）：**

| PR | 状态 | 规模 | 风险 | 标题 |
|----|--------|------|------|-------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | 开放 | XS | 低 | chore(agents): refresh codebase knowledge graph |

**概述：** 过去 24 小时内没有合并或关闭的 PR。唯一的活跃 PR 是来自夜间 `Codebase Graph Refresh` 工作流的自动化基础设施更新，用于刷新默认分支的代码库知识图谱引导快照。

---

## 4. 社区热点话题

### Issue #8111 — 每日 ironclaw 失败分类 (2026-09-24)

| 字段 | 值 |
|-------|-------|
| **状态** | 开放 |
| **作者** | pranavraja99 |
| **评论** | 0 |
| **反应** | 0 |

**概述：** 此 Issue 提供了 IronClaw 测试失败的每日分类分析。报告涵盖了 `officeqa` 基准测试套件，显示有 38 个未通过任务。根据分析，这 38 个未通过任务均为 deepseek-v4-flash 在 OCR 数字化财政文档上的真实模型质量问题。

**分析：** 这似乎是一份自动化的每日状态报告，而非缺陷报告或功能请求。该 Issue 跟踪模型在基准任务上的性能退化模式，可能为未来优化优先级或基准覆盖范围的决策提供参考。

🔗 [查看 Issue #8111](https://github.com/nearai/ironclaw/issues/8111)

---

## 5. 缺陷与稳定性

过去 24 小时内没有提交缺陷报告或稳定性问题。

v1.4.1-rc.2 版本解决了之前发现的 Google OAuth 配置可用性问题，表明项目正在积极关注部署可靠性。

---

## 6. 功能请求与路线图信号

过去 24 小时内没有明确的功能请求。

**路线图信号：** 发布模式（v1.4.1-rc.2 作为第二个补丁候选版本）表明项目处于稳定阶段，专注于解决小的可用性问题，而非引入新功能。Google OAuth Web UI 增强可能预示着更广泛的趋势，即提升部署灵活性和减少配置摩擦。

---

## 7. 用户反馈摘要

过去 24 小时内在 Issue 或 PR 上没有记录到直接的用户反馈（评论、反应）。

**推断的痛点：**

- **部署配置：** v1.4.1-rc.2 中的修复表明用户已请求更灵活的 OAuth 配置选项，而非仅限环境变量。
- **模型质量：** 失败分类 Issue 表明项目正在持续监控模型在基准任务上的性能，尤其是与 OCR 相关的工作负载。

---

## 8. 待处理事项关注

过去 24 小时内没有发现长期未回复的重要 Issue。唯一的活跃 Issue (#8111) 是一份最近的每日报告，而开放的 PR (#7988) 是一个自动化基础设施任务。

**建议：** 维护者可能需要优先审核并合并 PR #7988，以保持代码库知识图谱的时效性。

---

*摘要基于 2026-09-25 的 GitHub 数据生成*

---

规则：
- 仅输出翻译内容。不需要前言、解释或用 markdown 围栏包裹整个输出。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、分隔线、表情符号。
- 保留 URL、链接目标、代码片段、代码块、数字和日期的原文。
- 保留项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持原样。
- 使用自然的技术中文——中文开发者通讯的语域——而非逐字直译。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English QwenPaw project digest into Chinese. I need to:

1. Translate all the text content
2. Keep URLs, issue/PR numbers, code references, version numbers, file paths, and technical identifiers exactly as-is
3. Preserve the Markdown structure (headings, tables, lists, etc.)
4. Use natural technical Chinese suitable for a developer newsletter

Let me go through the content and translate it while maintaining all the technical elements exactly as they are.</think>

# QwenPaw 项目简报 — 2026-09-25

## 1. 今日概览

2026年9月25日，QwenPaw 项目保持高开发活跃度。过去 24 小时内，项目处理了 **31 个 issue**（18 个开启，13 个已关闭）和 **23 个 PR**（17 个开启，6 个已合并/关闭）。未发布新版本，但团队继续在 v2.2.x 上进行积极开发，修复多个 bug 并推进新功能。社区参与度仍然很高，特别是围绕多租户 Hub 功能和记忆/上下文管理改进。最近的 console 重设计（v2.2.2b3）似乎引入了一些回归问题，目前正在修复中。

---

## 2. 版本发布

过去 24 小时内**无新版本**发布。当前最新的 beta 版本仍为 v2.2.2-beta.3 和 v2.2.2-beta.4。

---

## 3. 项目进展

### 已合并/关闭的 PR（6 个）

| PR | 作者 | 描述 | 状态 |
|----|--------|-------------|--------|
| [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972) | zhijianma | fix(console): default session list grouping to source | 已关闭 |
| [#7971](https://github.com/agentscope-ai/QwenPaw/pull/7971) | zhijianma | fix(console): gate tool-call lifecycle queries on execution start | 已关闭 |
| [#7960](https://github.com/agentscope-ai/QwenPaw/pull/7960) | lorenzozanee | fix(providers): recover after stalled stream cleanup | 已关闭 |
| [#5659](https://github.com/agentscope-ai/QwenPaw/pull/5659) | WujunhaoGPU | fix(chat): allow sending attachments without text | 已关闭（审核中） |

### 进行中的开放 PR（重点关注）

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | jinglinpeng | feat(voice): add realtime voice chat |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | zhijianma | feat(chat): add durable paginated transcript history |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | zhijianma | feat(console): add authenticated multi-tab chat terminal |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | iluv7 | feat(memory): allow separate model for ReMeLight memory writing |
| [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) | Leirunlin | fix(context): reclaim historical media in Scroll |
| [#7964](https://github.com/agentscope-ai/QwenPaw/pull/7964) | 96loveslife | fix(observability): Langfuse tool observation output |

---

## 4. 社区热点话题

### 活跃度最高的 Issue

| Issue | 标题 | 评论数 | 状态 |
|-------|-------|----------|--------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub 多租户版 2.2.0 已发布：下一步做什么？ | 32 | 进行中 |
| [#4474](https://github.com/agentscope-ai/QwenPaw/issues/4474) | [问题] 现在支持chatgpt-5.5吗？ | 9 | 已关闭 |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | [问题] 总是记不住，还是会遗忘 | 8 | 进行中 |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction exceeds provider budget | 6 | 进行中 |
| [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | shell_evasion_checks.newlines silently blocks multiline | 6 | 已关闭 |

**分析：** 参与度最高的话题是 **QwenPaw Hub 多租户功能**（#7318，32 条评论），表明社区对企业/团队使用场景有强烈需求。其次是模型兼容性（ChatGPT-5.5）和插件开发工作流中的持久化记忆问题。

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度/影响排序）

| Issue | 严重程度 | 描述 | 修复 PR |
|-------|----------|-------------|--------|
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | **高** | RetryChatModel 硬编码 32768 context_size 导致所有模型 CONTEXT_UNFIT | — |
| [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | **高** | shell_evasion_checks.newlines=True 静默拦截多行命令 | — |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | **高** | 飞书 session 队列消费者卡死 → session 静默无响应 | — |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | **中** | Daily Paper 在 arxiv.org 不可达时静默失败 | — |
| [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | **中** | qwenpaw-pet 0.1.1 删除 `actor` 参数导致工具审批失效 | — |
| [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) | **中** | Console 侧边栏重设计破坏聊天组/文件夹功能 | [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972) |
| [#7963](https://github.com/agentscope-ai/QwenPaw/issues/7963) | **低** | Langfuse 工具观察始终不记录工具输出 | [#7964](https://github.com/agentscope-ai/QwenPaw/pull/7964) |

**需重点关注的严重 bug：** 硬编码的 32768 context_size 回退值（#7576）影响所有模型，从 v2.1.0 到 v2.2.0 都被确认有问题。shell 逃逸检查 bug（#4244）存在安全风险。多个 issue 引用的之前修复可能未完全解决。

---

## 6. 功能请求与路线图信号

### 值得注意的功能请求

| Issue | 请求 | 预期影响 |
|-------|---------|-----------------|
| [#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) | 官方 QwenPaw 移动端应用（优先 Android） | 高 |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | Agent 自主上下文管理，支持平滑切换 | 高 |
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 手动停用预置模型和渠道 | 中 |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub 企业功能（管理面板、使用统计） | 高 |

**路线图信号：** 根据活跃的 PR 和 issue，v2.2.x 路线图重点包括：
- 实时语音聊天（#7785）
- 持久化分页转录历史（#7931）
- 多标签终端（#7861）
- 独立记忆写入模型（#7719）
- 增强的上下文管理

---

## 7. 用户反馈总结

### 痛点分析

1. **记忆/持久化问题** — 用户反馈 QwenPaw 会"遗忘"配置和开发路径（#7571）。插件开发者遇到 TODO 文件意外出现在目录中、代码被意外覆盖等问题。

2. **企业/团队使用缺口** — 多个多租户 Hub 功能请求（#7318）表明 QwenPaw 正在被用于超出其最初个人助手设计定位的团队使用场景。

3. **Console UX 回归** — v2.2.2b3 的侧边栏重设计破坏了聊天组功能（#7968），引发用户不满。

4. **渠道集成摩擦** — 飞书 session 长时间使用后无响应（#7534）、企业微信附件处理（#5558）。

5. **模型兼容性** — 关于新模型支持（ChatGPT-5.5）和提供商特定 schema 要求（Moonshot MCP 工具）的问题。

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 创建时间 | 状态 | 关注点 |
|-------|-----|---------|---------|
| [#2967](https://github.com/agentscope-ai/QwenPaw/issues/2967) | 约5个月前 | 已关闭 | execute_shell_command 可能绕过 File Guard — 安全隐患 |
| [#1452](https://github.com/agentscope-ai/QwenPaw/issues/1452) | 约6个月前 | 已关闭 | OLLAMA联网功能 request — 长期未回应 |
| [#2013](https://github.com/agentscope-ai/QwenPaw/issues/2013) | 约6个月前 | 已关闭 | 企业微信双机器人问题 — 长期未解决 |
| [#1957](https://github.com/agentscope-ai/QwenPaw/issues/1957) | 约6个月前 | 已关闭 | Matrix本地部署 question — 长期未解决 |

**注意：** 多个较老的 issue 显示已关闭，但可能缺乏完整的解决方案。与 File Guard 绕过相关的安全问题（#2967）虽已标记关闭，但应验证根本原因是否已完全解决。

---

*基于 GitHub 数据生成 — 2026-09-25*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese. I need to translate all the text content while preserving:

1. The Markdown structure exactly (headings, tables, lists, etc.)
2. URLs, issue/PR references, code snippets
3. Technical terms and project names
4. The natural technical Chinese register

Let me translate section by section, maintaining the exact structure.

Key translations:
- "ZeroClaw Project Digest" → "ZeroClaw 项目动态"
- "Today's Overview" → "今日概览"
- "Releases" → "版本发布"
- "Project Progress" → "项目进展"
- "Community Hot Topics" → "社区热点"
- "Bugs & Stability" → "缺陷与稳定性"
- "Feature Requests & Roadmap Signals" → "功能需求与路线图信号"
- "User Feedback Summary" → "用户反馈总结"
- "Backlog Watch" → "待办事项关注"

Let me translate the full content now, keeping all formatting intact.</think>

# ZeroClaw 项目动态 — 2026-09-25

## 1. 今日概览

ZeroClaw 今日呈现 **高开发活跃度**，过去 24 小时内有 27 个 issue 和 50 个 PR 更新。项目正在积极处理安全关键缺陷（P1），推进插件迁移和 OIDC 认证等重大架构改进，并完成 CI/CD 效率优化。今日未发布新版本。缺陷积压中包含数个 S0 级别问题（内存损坏、安全绕过），需要立即关注。整体来看项目健康，但多个高风险项并行推进，团队压力较大。

---

## 2. 版本发布

过去 24 小时内 **未发布新版本**。项目正在推进 ZeroRelay 和 runtime/gateway 分离的 v0.9.0 里程碑（见 Issue #8358, #7432）。

---

## 3. 项目进展

### 今日合并/关闭的 PR（12 个）

| PR | 标题 | 状态 |
|----|------|------|
| [#11073](https://github.com/zeroclaw-labs/zeroclaw/pull/11073) | perf(ci): 只在分析的代码变更时对 master 推送运行 CodeQL | Closed |
| [#11070](https://github.com/zeroclaw-labs/zeroclaw/pull/11070) | perf(ci): 仅 release workflow 变更时跳过 Docker 源码构建 | Closed |
| [#11069](https://github.com/zeroclaw-labs/zeroclaw/pull/11069) | perf(ci): 为冲突的 Rust matrix 任务配置不同的缓存 key | Closed |
| [#11064](https://github.com/zeroclaw-labs/zeroclaw/pull/11064) | perf(ci): 将 Windows task-owner 恢复测试作为并行任务运行 | Closed |
| [#11063](https://github.com/zeroclaw-labs/zeroclaw/pull/11063) | ci(codeql): 固定 Rust 扫描运行器标签并移除 CI_USE_BLAMITH | Closed |
| [#11083](https://github.com/zeroclaw-labs/zeroclaw/pull/11083) | fix(gateway): 驱动 webhook 启动的 SOP agent 步骤 | Closed |
| [#10538](https://github.com/zeroclaw-labs/zeroclaw/pull/10538) | fix(gateway): 聊天 WebSocket 断开时保持 agent turn 运行 | Closed |
| [#11039](https://github.com/zeroclaw-labs/zeroclaw/pull/11039) | docs(tools): 添加 You.com MCP 搜索服务器示例 | Open |
| [#11084](https://github.com/zeroclaw-labs/zeroclaw/pull/11084) | docs(skills): 在 squash-merge 时拒绝过期的绿色检查 | Open |
| [#11089](https://github.com/zeroclaw-labs/zeroclaw/pull/11089) | feat(zerorelay): 从 ?node=&code= 链接预填充 frontdoor | Open |
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) | docs(runtime): 提出 runtime 组合契约 | Open |
| [#11080](https://github.com/zeroclaw-labs/zeroclaw/pull/11080) | test(providers): 使 Hailo 连接失败测试平台无关 | Open |

**重要进展：**
- **SOP webhook 执行** (#11083) 修复了 webhook 触发的 SOP 从未执行 agent 步骤的 bug
- **Gateway WebSocket 韧性** (#10538) 防止客户端断开时 agent turn 被取消
- **ZeroRelay frontdoor** (#11089) 为 node/code 注册链接添加查询字符串预填充

---

## 4. 社区热点

### 互动最多的 Issue

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [追踪器]: RFC 和设计问题的维护者决策队列 | 15 | Open |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | [追踪器]: 统一能力目录和插件迁移路线图 | 8 | Open |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 协调 cargo-audit 忽略并修复 wasmtime-wasi CVE | 7 | Open |
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | 移除 matrix-sdk  advisory 豁免 (RUSTSEC-2026-0247) | 6 | Closed |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | [Bug]: 退出聊天窗口时 Agent 停止工作 | 5 | Closed |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 将可选通道和工具从编译时迁移到运行时插件 | 5 | Open |

### 互动最多的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | feat(security): 带应用层执行的规范 sandbox_policy schema | Open (XL) |
| [#10155](https://github.com/zeroclaw-labs/zeroclaw/pull/10155) | feat(sop): 添加可互操作的运行日志和触发去重 | Open (XL) |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | feat(security): 在 RPC 上强制认证主体 (OIDC 阶段3) | Open (XL) |
| [#11081](https://github.com/zeroclaw-labs/zeroclaw/pull/11081) | feat(plugins): 主机介导的套接字、WebSocket、TLS 配置、持久状态 | Open (XL) |

### 分析 — 潜在需求

1. **维护者带宽危机**: Issue #8692 追踪等待维护者关注的 RFC 和设计决策，表明治理存在瓶颈
2. **插件架构转型**: 社区高度关注运行时插件迁移 (#6489, #8850)，表明对可扩展性的强烈需求
3. **安全加固**: 多个围绕 OIDC (#8289, #10259) 和沙箱策略 (#7821) 的 RFC 和 PR 表明安全是重点方向
4. **SOP 成熟度**: 可互操作运行日志 (#10155) 和 webhook 修复 (#11083) 表明 SOP 功能接近生产就绪

---

## 5. 缺陷与稳定性

### 关键 (P1) 缺陷 — 按严重程度排序

| Issue | 严重程度 | 标题 | 修复 PR? |
|-------|----------|------|----------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | **S0 - 数据丢失/安全风险** | 无人值守 agent turn（cron、心跳、无头 SOP）运行时无 ApprovalManager — risk-profile 工具审批静默失效 | 无 |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | **S0 - 数据丢失/安全风险** | Markdown memory backend 在 `store()` 调用重叠时静默丢失存储条目 | 无 |
| [#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087) | **S1 - 工作流阻塞** | Windows — 关闭窗口后应用既无法重新打开也无法退出 | 无 |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | **S1 - 工作流阻塞** | 在 web dashboard 退出聊天窗口时 Agent 停止工作 | 无 |
| [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) | **S1 - 工作流阻塞** | 来自 channel/cron 触发的 SOP 自动模式运行从未执行，永远作为"运行中"停滞 | [#11083](https://github.com/zeroclaw-labs/zeroclaw/pull/11083) |

### 中等 (P2) 缺陷

| Issue | 严重程度 | 标题 |
|-------|----------|------|
| [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097) | S3 - 轻微 | 插件 egress 补救命令在现有授权中未转义单引号 |
| [#11094](https://github.com/zeroclaw-labs/zeroclaw/issues/11094) | S2 - 降级 | Apple preflight 测试在重试睡眠 mock 拦截子进程轮询时可能失败 |
| [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093) | S2 - 降级 | 稳定版文档晋升时根目录 llms 文件不同步 |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | S2 - 降级 | 打断作用域 key 在组件边界间冲突 |

---

## 6. 功能需求与路线图信号

### 今日新增功能需求

| Issue | 标题 | 领域 |
|-------|------|------|
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) | feat(providers): 添加 Cheaper Inference 作为类型化 OpenAI 兼容提供商 | providers |
| [#11100](https://github.com/zeroclaw-labs/zeroclaw/issues/11100) | [功能]: 在成本费率目录预填充中保留配置的提供商别名 | billing |
| [#11096](https://github.com/zeroclaw-labs/zeroclaw/issues/11096) | RFC: 基于风险的合并结果新鲜度 | CI |
| [#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027) | RFC: 带接收者决定权的 Agent 间会话消息传递 | multi-agent |
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | RFC: 主机作用域的准入控制和每 Agent 资源边界 | resource management |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | [功能]: 完成公共 runtime 组合边界 | runtime |

### 路线图相关项（来自追踪器）

- **v0.9.0 就绪**: ZeroRelay 原生传输 (#8358)，runtime/gateway 分离 (#7432)
- **OIDC 里程碑**: 规范主体和入站认证 (#8289) — PR #10259 进行中
- **SOP 5/5 完成**: 守护进程拥有的 SOP 控制平面 (#8288)
- **插件迁移**: 统一能力目录 (#6489)，运行时插件 (#8850)

### 预测：可能出现在下一版本 (v0.8.6/v0.9.0)

1. **Cheaper Inference 提供商** — 简单的提供商添加
2. **Webhook 驱动的 SOP 修复** — 已合并 (#11083)
3. **ZeroRelay 浏览器注册 frontdoor** — PR #11089
4. **Runtime 组合边界** — #11090 收尾中

---

## 7. 用户反馈总结

### 从 Issue 识别的痛点

| 领域 | 反馈 |
|------|------|
| **内存损坏** | 并发调用 `MarkdownMemory::store()` 静默丢失数据 (#10797) — 无错误、无恢复 |
| **安全绕过** | 无人值守 agent 完全绕过 ApprovalManager (#10968) — 高严重性安全漏洞 |
| **Windows UX** | 窗口关闭后桌面应用变为不可用 (#11087) — 完全阻塞工作流 |
| **SOP 可靠性** | 自动模式 SOP 从不执行并"停滞"在运行中状态 (#9805) — 可靠性差 |
| **CI 效率** | 重复构建、缓存未命中和手动恢复步骤在 #10814 中被提及 |

### 代表的用例

- **多 Agent 部署**: RFC #10970 请求主机作用域的资源边界，用于运行多 Agent 的机器
- **提供商灵活性**: 请求 Cheaper Inference 作为新 LLM 网关 (#11103)
- **文档清晰度**: 将多 Agent 设置指南移至更显眼的位置 (#11088)

---

## 8. 待办事项关注

### 缺少维护者响应的问题（>7 天，高优先级）

| Issue | 时长 | 标题 | 风险 |
|-------|------|------|------|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 6 天 | 安全：无人值守 agent 绕过 ApprovalManager | **关键** |
| [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | 6 天 | RFC: 主机作用域的准入控制 | 高 |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | 5 天 | 功能: 完成公共 runtime 组合边界 | 高 |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | 13 天 | Memory backend 在并发写入时丢失数据 | **关键** |
| [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) | 12 天 | [追踪器]: 发布效率和可重复发布 | 中 |

### 需要审查的停滞 PR

| PR | 时长 | 标题 | 状态 |
|----|------|------|------|
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | 100 天 | feat(security): 规范 sandbox_policy schema | Open, 需要作者操作, XL |
| [#10155](https://github.com/zeroclaw-labs/zeroclaw/pull/10155) | 36 天 | feat(sop): 可互操作的运行日志 | Open, XL |
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | 34 天 | feat(security): RPC 上强制认证主体 | Open, 堆叠, XL |
| [#10836](https://github.com/zeroclaw-labs/zeroclaw/pull/10836) | 12 天 | fix(cron): 移动声明式 job 的存储 owner | Open, S |

### 建议

优先审查安全相关 PR (#7821, #10259) 并立即处理两个 S0 缺陷 (#10968, #10797) — 两者都代表生产部署中的数据丢失或安全绕过风险。

---

*生成时间：2026-09-25 | 数据来源：GitHub zeroclaw-labs/zeroclaw（过去 24 小时内 27 个 issue，50 个 PR 更新）*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*