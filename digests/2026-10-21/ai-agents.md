# OpenClaw 生态日报 2026-10-21

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-21 00:50 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the project digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, issue/PR references as-is
- Keep technical terms, usernames, file paths in original form
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving the structure.</think>

# OpenClaw 项目简报 — 2026-10-21

## 今日概览

OpenClaw **活动频繁**，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。项目正处理多项稳定性问题，尤其是 Gateway 内存管理和 Windows 可靠性方面。今日无新版本发布。维护团队正在积极推进多个大规模重构 PR，包括测试精简campaign和运行时改进。社区参与度高，关键问题上有 41 条评论的讨论线程。

---

## 发布动态

过去 24 小时 **无新版本** 发布。

---

## 项目进展

以下Notable PR今日有推进：

| PR | 作者 | 状态 | 摘要 |
|----|--------|--------|---------|
| [#178658](https://github.com/openclaw/openclaw/pull/178658) | steipete | 👀 等待维护者审核 | fix(control-ui): 独立恢复仪表盘，不依赖 transcript 校验 |
| [#178895](https://github.com/openclaw/openclaw/pull/178895) | steipete | OPEN | fix(clickclack): 慢速进度传递时保留工具补全 |
| [#178896](https://github.com/openclaw/openclaw/pull/178896) | steipete | OPEN | refactor(runtime): 使用原生传输所有者 |
| [#178893](https://github.com/openclaw/openclaw/pull/178893) | brianmcguire | OPEN | fix: 取消子任务后父任务交接停滞 |
| [#178889](https://github.com/openclaw/openclaw/pull/178889) | KrasimirKralev | OPEN | fix(doctor): 主模型为别名时警告检查错误的模型 |
| [#178897](https://github.com/openclaw/openclaw/pull/178897) | xydigitLybnnnn | OPEN | fix(doctor): 将 integrityCheck 转发到 state-schema 迁移步骤 |

**测试精简campaign** 正在多批次进行（d345、d347、d348、d342、d343），整合重复的测试固件和断言。

---

## 社区热点

最活跃的讨论集中在关键基础设施问题上：

1. **[#91588](https://github.com/openclaw/openclaw/issues/91588)** — **关键问题：Gateway 内存泄漏**（41 条评论，🦐 gold shrimp，P0）
   - RSS 在 2-3 天内从 350MB 增长到 15.5GB，导致 OOM 崩溃
   - 作者：petercheng | 创建于：2026-06-09

2. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — **Gateway 加载大型插件时阻塞数分钟**（41 条评论，🦞 diamond lobster，P0）
   - 2026.9.6 回归测试影响 external/workspace 插件
   - 作者：obviyus | 创建于：2026-09-29

3. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — **Gateway 状态库 WAL 自动检查点永不完成**（25 条评论，🦪 silver shellfish，P2）
   - 进程内读取器阻塞 SQLite WAL 检查点
   - 作者：zhangyong-le | 创建于：2026-10-03

**潜在需求：** 社区正在反馈 Gateway 稳定性的严重问题——内存管理、阻塞操作和数据库检查点。这三个问题都影响长期运行的 Gateway 部署。

---

## Bug 与稳定性

### 关键问题（P0）— 活跃 Issue

| Issue | 严重程度 | 描述 | 状态 |
|-------|----------|-------------|--------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 🦐 gold shrimp | Gateway 内存泄漏：RSS 350MB → 15.5GB | OPEN |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 🦞 diamond lobster | Gateway 加载大型插件时阻塞数分钟（2026.9.6 回归） | OPEN |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | 🦪 silver shellfish | Windows：启动缓慢、关闭不干净、schtasks 错误 | OPEN |
| [#152275](https://github.com/openclaw/openclaw/issues/152275) | 🦪 silver shellfish | 提交后插件激活失败导致目录/调度中断 | OPEN |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 🦪 silver shellfish | 延迟回收提交检查点失败导致代理不可用 | OPEN |

### 高优先级（P1）

| Issue | 严重程度 | 描述 |
|-------|----------|-------------|
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | 🦞 diamond lobster | Telegram 适配器：单次尝试死信，消息静默丢失 |
| [#173764](https://github.com/openclaw/openclaw/issues/173764) | 🦪 silver shellfish | openclaw update 在激活后 doctor 步骤无限卡住 |
| [#172837](https://github.com/openclaw/openclaw/issues/172837) | 🦞 diamond lobster | Codex nativeSubagentAssignments 在完成交付放弃后永不移除 |
| [#171831](https://github.com/openclaw/openclaw/issues/171831) | 🦪 silver shellfish | Windows 2026.10.2 性能回归（启动 320s 对比 55s） |

### 值得注意的修复已合并/关闭
- [#169586](https://github.com/openclaw/openclaw/issues/169586) — Windows LINE Doctor 契约捕获 EEXIST — **已关闭**
- [#167385](https://github.com/openclaw/openclaw/issues/167385) — 手动删除的会话存档阻塞插件修复 — **已关闭**

---

## 功能请求与路线图信号

表明潜在路线图方向的关键功能讨论：

1. **[#78308](https://github.com/openclaw/openclaw/issues/78308)** — **MCP 工具调用的通道式审批**（19 条评论，🦞 diamond lobster，P2）
   - 功能：允许 MCP 服务器选择加入 `/approve <id>` 审批管道
   - 标签：needs-product-decision, needs-security-review

2. **[#162164](https://github.com/openclaw/openclaw/issues/162164)** — **iOS/macOS 可选个人身份**（10 条评论，P2）
   - 在启用个人登录的同时保留 Shared 所有者

3. **[#129388](https://github.com/openclaw/openclaw/pull/129388)** — **上下文压力感知的继续执行**（XL 规模）
   - 大型功能：continue_work / continue_delegate / request_compact
   - 状态：需要验证，合并风险：兼容性、会话状态、安全边界

4. **[#178485](https://github.com/openclaw/openclaw/pull/178485)** — **任务边界和缓存过期压缩**
   - 在 #178425 后恢复 #178021
   - 状态：👀 等待维护者审核

**预测：** 鉴于 #129388（继续执行）和 #178485（压缩）的活跃工作，下一版本可能专注于长期运行的**上下文管理和内存优化**。

---

## 用户反馈摘要

### 痛点识别

1. **内存与稳定性** — 用户因内存泄漏（#91588）、阻塞操作（#160959）和 Windows 特定可靠性问题（#170956）经历 Gateway 崩溃（2-3 天后）

2. **消息丢失** — Telegram 适配器在网络故障时静默丢弃消息（#125764）；预压缩会使飞行中交付失效（#158070）

3. **会话状态** — 长期运行会话无界限（#125308）；上下文溢出导致失败循环（#113701）

4. **Windows 体验** — 多项问题：启动缓慢（320s 对比 55s）、schtasks 权限错误、更新卡住（#171831、#170956、#162899）

5. **开发者体验** — MCP 工具整数参数被强制转为字符串（#166133）；定时任务的工具目录不完整（#120385）

### 积极信号
- 活跃的维护响应（多 个 issue 有 clawsweeper 标签表示已分类）
- 测试精简campaign改善 CI/可维护性
- 安全特性在开发中（SecretRef 支持 #76493、通道式审批 #78308）

---

## 待办关注

### 长期未答的重要 Issue（陈旧但重要）

| Issue | 时长 | 优先级 | 描述 |
|-------|-----|----------|-------------|
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | ~7 个月 | P3 | 探索 OpenClaw 的 Android 载体 |
| [#80843](https://github.com/openclaw/openclaw/issues/80843) | ~5 个月 | P2 | 功能：web_search 提供商回退链 |
| [#98298](https://github.com/openclaw/openclaw/issues/98298) | ~4 个月 | P3 | 从上下文中修剪陈旧的思考块 |
| [#149270](https://github.com/openclaw/openclaw/issues/149270) | ~1 个月 | P1 | 代码模式轮次永远卡住（2026.9.4） |
| [#145937](https://github.com/openclaw/openclaw/issues/145937) | ~1 个月 | P2 | QQ 频道在 2026.9.x 中损坏 |

### 需要维护者关注的 PR

| PR | 规模 | 状态 | 风险 |
|----|------|------|------|
| [#129388](https://github.com/openclaw/openclaw/pull/129388) | XL | 需要验证 | 兼容性、会话状态、安全边界 |
| [#178764](https://github.com/openclaw/openclaw/pull/178764) | XL | 等待作者 | 消息交付、安全边界 |
| [#175291](https://github.com/openclaw/openclaw/pull/175291) | XL | 等待作者 | 兼容性 |

---

*生成时间：2026-10-21 | 数据来源：github.com/openclaw/openclaw*

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese. Let me follow the rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and technical accuracy.</think>

# 跨项目对比：个人 AI 助手与 Agent 生态

## 生态概览

2026 年底的个人 AI 助手与 Agent 开源领域呈现出**高度碎片化但技术方向趋同**的特征。五个主要项目（OpenClaw、Hermes Agent、IronClaw、QwenPaw、ZeroClaw）正积极争夺开发者关注度，各自针对不同用户群体——从企业部署（OpenClaw、Hermes Agent）到链上自主 Agent（IronClaw）再到开发者工具链（QwenPaw、ZeroClaw）。尽管品牌定位和目标受众各异，这些项目面临相同的工程挑战：**长期运行会话中的内存管理、通道/平台可靠性、多提供商灵活性以及安全加固**。没有项目取得明显优势，但所有五个项目的开发速度都相当活跃，表明市场仍在探索最佳架构模式。

---

## 活动对比

| 项目 | Issue（24h） | PR（24h） | 已关闭/合并 | Release（24h） | 活跃度等级 |
|------|--------------|-----------|-------------|----------------|------------|
| **OpenClaw** | 500（↑） | 500（↑） | 211 | 0 | 🟢 极高 |
| **Hermes Agent** | 50（→） | 50（→） | 20 | 0 | 🟢 高 |
| **ZeroClaw** | 50（→） | 50（→） | 1 | 0 | 🟢 高 |
| **QwenPaw** | 15（→） | 33（→） | 9 | 0 | 🟡 中等 |
| **IronClaw** | 3（→） | 9（→） | 2 | 0 | 🔴 低 |

*注：箭头表示与各项目通常基线相比的相对变化。*

**健康状况观察：**

- **OpenClaw** 以绝对数量领先（每天 500 次更新），表明社区规模极大或有积极的自动化/分类机制
- **Hermes Agent** 和 **ZeroClaw** 原始数据相同但解决模式不同：Hermes 合并了 20 个 PR（40% 关闭率），ZeroClaw 仅关闭 1 个（2%）——这表明 ZeroClaw 可能处于激进的功能开发阶段或存在积压
- **QwenPaw** 保持健康的 27% PR 关闭率，项目数量较少，表明范围更集中
- **IronClaw** 活动量极低——小团队或早期阶段——但持续有依赖更新，说明仍在活跃但关注点狭窄

---

## OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw | 竞品 |
|------|----------|------|
| **社区规模** | 主导（500 issues/PRs/天） | 1/10 到 1/100 的量级 |
| **企业采用信号** | 强劲（Windows 可靠性、Gateway 长期稳定性） | 面向消费者/开发者 |
| **安全关注** | 高（SecretRef、通道审批、MCP 工具安全） | 较少明确的安全重点 |
| **内存管理** | 活跃修复（WAL 检查点、压缩、上下文溢出） | 其他项目不太明显 |
| **测试基础设施** | 成熟（大规模测试精简活动） | 进行中或缺失 |

### 技术路线差异

- **内存架构**：OpenClaw 实现了显式压缩、续延和上下文压力感知任务管理（#129388、#178485）。Hermes Agent 通过类似但更简单的机制解决内存问题。ZeroClaw 使用 SOP（标准操作程序）引擎进行输出模式验证。QwenPaw 专注于插件式内存隔离。

- **通道集成**：OpenClaw 和 ZeroClaw 都支持多通道（Discord、Slack、Telegram、Teams、飞书），但 ZeroClaw 有更多活跃的 bug 报告（5 个通道相关 issue vs OpenClaw 的 2 个），表明 OpenClaw 的通道栈更成熟。

- **插件/扩展模型**：OpenClaw → MCP 原生；Hermes Agent → plugin.servers[] 配合 SecretRef；IronClaw → 托管 MCP 配合凭证账户；QwenPaw → 桌面插件系统支持卸载/热加载；ZeroClaw → 通道插件配合子进程隔离。

### 社区规模对比

OpenClaw 每天 500 次更新远超竞品 10-50 倍。然而，这一指标可能被自动化 issue 更新（clawsweeper 标签、版本引用）膨胀，而非纯粹的社区活跃度。Hermes Agent 每天 20 次 PR 合并表明维护者效率很高。IronClaw 极低的 3 个 issue 活动量表明团队规模小或个人产出高，或处于早期阶段。

---

## 多项目共同关注的技术方向

### 各项目普遍面临的需求

| 关注领域 | 受影响项目 | 具体需求 |
|----------|------------|----------|
| **内存/上下文管理** | OpenClaw、Hermes Agent、ZeroClaw | 有界上下文、压缩、续延、防止无限增长 |
| **通道/平台可靠性** | OpenClaw、QwenPaw、ZeroClaw | 静默消息丢失（Telegram、钉钉、Slack）、线程上下文、定时推送 |
| **提供商灵活性** | Hermes Agent、ZeroClaw、IronClaw | 每个提供商多个模型、自定义提供商 URI、回退链 |
| **安全加固** | OpenClaw、Hermes Agent、ZeroClaw | Shell 命令白名单、凭证处理、基于主体的信任 |
| **终端/TTY 健壮性** | Hermes Agent、OpenClaw | FD_SETSIZE 处理、子进程输出超限、长时运行进程稳定性 |
| **本地/离线能力** | Hermes Agent、IronClaw | 本地模型支持（LM Studio、llama.cpp、NVIDIA/AMD GPU）、自主运行 |

**跨项目共识**：行业正在向**内存/上下文作为关键工程挑战**收敛。除了 IronClaw（较新且关注基础设施）外，每个项目都有明确的内存管理工作在进行。这表明随着 Agent 从无状态 API 调用转向长期自主运行，**上下文生命周期管理**是最难解决的核心问题。

---

## 差异化分析

### 功能焦点

| 项目 | 主要差异化 | 次要焦点 |
|------|------------|----------|
| **OpenClaw** | 企业 Gateway、MCP 协议领先 | Windows 桌面、长期运行稳定性 |
| **Hermes Agent** | Kanban/结构化工作流、Teams 集成 | 桌面应用、Code Mode |
| **IronClaw** | Near 区块链集成、自主 Agent | 本地 MCP、凭证账户 |
| **QwenPaw** | 实时语音对话、模块化 v2.3.0 | 桌面优先、技能系统 |
| **ZeroClaw** | SOP 引擎、通道插件隔离 | Discord/Matrix、定时自动化 |

### 目标用户

- **OpenClaw**：企业 IT、DevOps 团队、MCP 优先开发者
- **Hermes Agent**：注重生产力的团队（Kanban、Teams、Slack）
- **IronClaw**：加密/DeFi 开发者、链上原生用户
- **QwenPaw**：个人开发者、语音优先用户、AI 爱好者
- **ZeroClaw**：高级用户、Matrix/Discord 社区运营者、自动化爱好者

### 技术架构

| 方面 | OpenClaw | Hermes | QwenPaw | ZeroClaw | IronClaw |
|------|----------|--------|---------|----------|----------|
| 协议 | MCP（原生） | 插件式 | 原生插件 | 通道插件 | 托管 MCP |
| 部署 | Gateway/守护进程 | 桌面/Gateway | 桌面 | 守护进程/CLI | 云托管 |
| 状态模型 | 会话绑定 | 项目绑定 | 会话 | SOP 绑定 | 凭证账户 |
| 安全模型 | SecretRef、审批通道 | OAuth、MCP | 插件沙箱 | OS 账户 | 主体信任 |

---

## 社区活力与成熟度

### 活动层级

**层级 1——快速迭代（高速度，活跃 stabilisation）：**
- **OpenClaw**——每天 500 次更新，处理 P0 稳定性问题（内存泄漏、Gateway 阻塞）
- **Hermes Agent**——50 次更新，强 PR 关闭率（40%），活跃 bug 修复

**层级 2——活跃开发（功能丰富，中等速度）：**
- **ZeroClaw**——50 次更新，v0.8.7 稳定化，大量 XXXL PR 进行中
- **QwenPaw**——33 次更新，v2.3.0 模块化路线图，实时语音进行中

**层级 3——维护/基础（低数量，聚焦范围）：**
- **IronClaw**——9 次更新，依赖维护，MCP 基础设施

### 稳定化 vs 创新信号

- **OpenClaw**：从功能增长转向稳定性（P0 bug 关注、测试精简活动）
- **Hermes Agent**：混合（FD_SETSIZE 修复 = 稳定化；Kanban = 新功能）
- **ZeroClaw**：为 v0.8.7 稳定化但同时推进 XXXL 功能（SOP、语音、通道插件）
- **QwenPaw**：路线图驱动的模块化表明准备重大发布，而非纯粹稳定化
- **IronClaw**：早期基础设施构建，尚未进入稳定化模式

---

## 趋势信号

### 从社区反馈中提取的行业趋势

1. **长期运行 Agent 可靠性是首要工程挑战**
   - 证据：内存泄漏（OpenClaw #91588）、无界上下文（QwenPaw #117894）、上下文溢出（OpenClaw #113701）、内存整合（ZeroClaw #6998）
   - **暗示**："无状态 API"范式不足以支撑自主 Agent；每个项目都在重新发明上下文生命周期管理

2. **多提供商抽象正在成为标配**
   - 证据：每个提供商多个模型（#9809、ZeroClaw）、提供商回退链（#80843、OpenClaw）、自定义提供商 URL 支持（#11296、ZeroClaw）
   - **暗示**：供应商锁定不可接受；开发者要求在 OpenAI、Anthropic、本地模型和新兴提供商之间的可移植性

3. **通道集成在所有项目中都很脆弱**
   - 证据：ZeroClaw 5+ 通道 bug、QwenPaw 钉钉/Telegram 问题、OpenClaw Gateway 阻塞
   - **暗示**："一次编写，随处部署"的 Agent 通道愿景尚未实现；平台 API 不稳定性（Slack、Telegram、Discord）带来持续维护负担

4. **MCP 发布后安全加固正在加速**
   - 证据：SecretRef 支持、Shell 命令白名单、基于主体信任（ZeroClaw #11914）、凭证验证（ZeroClaw #11274）、系统提示词预算执行（ZeroClaw #11910）
   - **暗示**：随着 Agent 获得工具和凭证访问权限，安全边界变得至关重要；预计所有项目在 2027 年 Q1-Q2 都会发布安全相关更新

5. **插件/扩展生态是下一个主战场**
   - 证据：QwenPaw v2.3.0 模块化、ZeroClaw 通道插件提取、OpenClaw MCP、Hermes Agent 插件系统
   - **暗示**：通过插件生态实现平台锁定；无论哪个项目建立最健壮的扩展市场，都将赢得开发者的关注

### 对 AI Agent 开发者的价值

**评估这些项目时开发者的直接收获：**

- **企业部署**：OpenClaw 提供最成熟的 Gateway 和 MCP 集成，但需密切关注 P0 稳定性问题
- **生产力工具**：Hermes Agent 的 Kanban 集成和 Teams 支持独一无二；ZeroClaw 的 SOP 引擎提供可编程工作流
- **区块链/加密**：IronClaw 是唯一明确瞄准链上自主 Agent 的项目
- **语音优先应用**：QwenPaw 的实时语音对话（PR #7785）领先于竞品
- **安全敏感部署**：所有项目都在积极加固——ZeroClaw 的主体信任 RFC 和 OpenClaw 的审批通道代表最新进展

**战略信号**：没有单一项目提供完整解决方案。大多数团队需要组合使用或接受权衡。未来 6 个月可能会出现整合，因为项目之间会互相借鉴最佳特性（尤其是内存管理和插件系统）。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English digest into Chinese, following the strict rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, numbers, dates, issue/PR references as-is
- Keep project names, repository slugs, usernames, version tags, file paths in original form
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving all the formatting and technical terms.</think>

# Hermes Agent 项目动态 — 2026-10-21

## 1. 今日概览

Hermes Agent 保持高度活跃，过去 24 小时内有 **50 个 Issue** 和 **50 个 PR** 更新。项目参与度强劲，其中 **20 个 PR 已合并/关闭**，**3 个 Issue 已解决**。值得注意的是，多个长期存在的 FD_SETSIZE 相关终端 Bug 现已通过多个 PR 得到修复，标志着长期运行进程的稳定性显著提升。今日无新版本发布。

---

## 2. 版本发布

过去 24 小时内**无新版本**发布。

---

## 3. 项目进展

以下 PR 于今日**合并/关闭**：

| PR | 标题 | 状态 |
|----|-----|------|
| [#142125](https://github.com/NousResearch/hermes-agent/pull/142125) | fix(terminal): drain stdout with selectors to survive fd >= FD_SETSIZE | CLOSED |
| [#135141](https://github.com/NousResearch/hermes-agent/pull/135141) | fix(terminal): retain subprocess output above FD_SETSIZE | CLOSED |
| [#142299](https://github.com/NousResearch/hermes-agent/pull/142299) | fix(terminal): command output no longer vanishes above 1024 open fds (#94928, salvage #142125) | CLOSED |
| [#139951](https://github.com/NousResearch/hermes-agent/pull/139951) | fix(teams): answer 400, not 500, to a request body that is not valid JSON | CLOSED |
| [#136060](https://github.com/NousResearch/hermes-agent/pull/136060) | Teams: file consent card for non-image files, and a rejected activity that says why | CLOSED |
| [#122204](https://github.com/NousResearch/hermes-agent/pull/122204) | fix(kanban): keep a project link the filer's own profile cannot resolve | CLOSED |
| [#122166](https://github.com/NousResearch/hermes-agent/pull/122166) | feat(kanban): let a run withdraw a card it filed, by create-time provenance | CLOSED |
| [#122150](https://github.com/NousResearch/hermes-agent/pull/122150) | fix(worktree): a merged PR only vouches for the commits it carried | CLOSED |
| [#121098](https://github.com/NousResearch/hermes-agent/pull/121098) | feat(kanban): per-profile concurrency cap overrides | CLOSED |
| [#120535](https://github.com/NousResearch/hermes-agent/pull/120535) | feat(kanban): create-time hold so a filer never loses the claim race | CLOSED |
| [#110463](https://github.com/NousResearch/hermes-agent/pull/110463) | fix(kanban): a crash streak the card has left is historical, not a current crash | CLOSED |
| [#110357](https://github.com/NousResearch/hermes-agent/pull/110357) | fix(kanban): a failed liveness probe is not a dead worker | CLOSED |
| [#110322](https://github.com/NousResearch/hermes-agent/pull/110322) | fix(kanban): park a clean exit with no terminal call, carrying its last-known state | CLOSED |

**关键进展：**
- **终端稳定性**：多个 PR（#142125、#135141、#142299）协同修复了 FD_SETSIZE 问题——当进程累积超过 1024 个打开的文件描述符后，终端命令输出会静默消失
- **Kanban 可靠性**：合并了 6 个 kanban 修复，涉及崩溃检测、工作节点存活状态、项目链接和并发控制
- **Teams 集成**：改进了错误处理（400 vs 500 响应）和文件同意用户体验

---

## 4. 社区热点话题

讨论最活跃的 Issue：

| Issue | 标题 | 评论数 | 👍 |
|-------|-----|--------|---|
| [#141346](https://github.com/NousResearch/hermes-agent/issues/141346) | **[安全]** 智能审批自动批准了关闭用户未保存的 PowerPoint 幻灯片并删除其导出的 osascript 命令 | 18 | 0 |
| [#135037](https://github.com/NousResearch/hermes-agent/issues/135037) | Windows 用户 PATH 注册即使对沙箱检出也写入共享的 HKCU\Environment\Path | 9 | 0 |
| [#94928](https://github.com/NousResearch/hermes-agent/issues/94928) | Desktop: terminal/read_file 当管道 fd 超过 FD_SETSIZE 时返回空输出 | 8 | 0 |
| [#83904](https://github.com/NousResearch/hermes-agent/issues/83904) | 从 Hermes Desktop 调度的 Cron 作业无法回传至活跃聊天 | 8 | 0 |
| [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) | 功能请求：delegate_task 支持每次调用覆盖 model 和 reasoning_effort | 8 | 4 |
| [#142136](https://github.com/NousResearch/hermes-agent/issues/142136) | 技能目录在磁盘上存在但重载后斜杠命令未注册 | 8 | 0 |

**分析：**
- **安全问题**（#141346）占据讨论主导——用户要求对破坏性 osascript 命令采用更安全的审批逻辑
- **Windows 生态问题**（PATH 注册、AMD Strix Halo 本地模型）表明 Windows 用户增长但期望未被满足
- **委托灵活性**（#80222）显示用户需要对每次任务进行更细粒度的 AI 模型选择
- FD_SETSIZE 问题（#94928）现已**关闭**，通过合并的 PR 解决了一个高影响力 Bug

---

## 5. 缺陷与稳定性

按严重程度排序（P1-P3），聚焦新报告或活跃的缺陷：

| Issue | 严重程度 | 描述 | 修复 PR？ |
|-------|----------|------|----------|
| [#141346](https://github.com/NousResearch/hermes-agent/issues/141346) | **P1-安全** | 智能审批自动批准了导致 PowerPoint 数据丢失的破坏性 osascript | — |
| [#135037](https://github.com/NousResearch/hermes-agent/issues/135037) | **P1** | Windows PATH 污染：沙箱/外来检出的安装写入共享 HKCU\Environment\Path | — |
| [#142203](https://github.com/NousResearch/hermes-agent/issues/142203) | **P2** | 402 "covers at most N output tokens" 未解析 — affordable-cap 从不触发 | — |
| [#142271](https://github.com/NousResearch/hermes-agent/issues/142271) | **P2** | Windows kanban managed_worker 在导入 numpy 时死锁（loader-lock 竞态） | — |
| [#120872](https://github.com/NousResearch/hermes-agent/issues/120872) | **P2** | Linux+NVIDIA 上本地模型不可用：自动后端解析至不存在的 CUDA 资源 | — |
| [#128295](https://github.com/NousResearch/hermes-agent/issues/128295) | **P2** | hermes-assets.nousresearch.com 对非浏览器客户端返回 Cloudflare 403 — 更新被阻止 | — |
| [#142111](https://github.com/NousResearch/hermes-agent/issues/142111) | **P2** | 原生 Windows：包含反斜杠引号的正则模式静默失效 | — |

**状态：** 关键 FD_SETSIZE Bug（#94928）现已通过合并的 PR #142299、#142125 和 #135141 **解决**。

---

## 6. 功能请求与路线图信号

| Issue | 功能请求 | 票数 |
|-------|----------|------|
| [#80222](https://github.com/NousResearch/hermes-agent/issues/80222) | delegate_task 支持每次调用覆盖 model 和 reasoning_effort | 4 👍 |
| [#118717](https://github.com/NousResearch/hermes-agent/issues/118717) | 向插件工具钩子传播 gateway_session_key | — |
| [#128724](https://github.com/NousResearch/hermes-agent/pull/128724) | 添加有界完成策略（PR 进行中） | — |

**展望：** delegate_task 覆盖请求（#80222）显示用户强烈要求更细粒度的 AI 模型选择控制。插件 API 增强（#118717、#128724）表明插件生态系统正在成熟。这些可能是近期纳入的候选功能。

---

## 7. 用户反馈总结

**痛点识别：**
1. **数据丢失风险**：智能审批模式自动批准了破坏性 osascript 命令，导致无法恢复的 PowerPoint 数据丢失——用户要求更安全的默认配置
2. **Windows 集成差距**：PATH 污染、AMD APU 上的本地模型支持以及正则处理问题表明 Windows 是二等公民
3. **资源分发受阻**：Cloudflare WAF 阻止程序化更新导致 `hermes update` 和 pm 安装不可用
4. **队列无界增长**：/skills pending 和 background_review staging 无限增长，损害用户体验

**满意度信号：**
- FD_SETSIZE 修复已合并——长期运行的 Desktop/gateway 用户将看到可靠性提升
- Kanban 改进解决了工作节点崩溃误报和并发管理问题

---

## 8. 待办关注

需要维护者关注的 Issue（超过 30 天无活动或未处理，高影响力）：

| Issue | 存续时间 | 描述 | 状态 |
|-------|----------|------|------|
| [#83904](https://github.com/NousResearch/hermes-agent/issues/83904) | ~72 天 | 从 Desktop 调度的 Cron 作业无法回传至活跃聊天 | OPEN, 8 评论 |
| [#83515](https://github.com/NousResearch/hermes-agent/issues/83515) | ~72 天 | SSH 后端丢弃每会话项目 cwd 并在本地验证远程路径 | OPEN, 4 评论 |
| [#76035](https://github.com/NousResearch/hermes-agent/issues/76035) | ~81 天 | Agent 幻觉完整记忆，在没有字符数检查的情况下破坏性合并 USER.md | OPEN, 3 评论 |
| [#86413](https://github.com/NousResearch/hermes-agent/issues/86413) | ~68 天 | 设计：launch-directory 契约七个后端中仅一个满足 | OPEN, 2 评论 |

这些设计层面的 Issue 保持开放状态，可能需要维护者明确优先处理。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese. I need to:
1. Translate all the headings and body text
2. Keep all markdown formatting (tables, lists, headings, etc.)
3. Keep all code elements, issue/PR references, URLs, numbers, dates as-is
4. Use natural technical Chinese appropriate for a developer newsletter

Let me go through and translate while preserving the structure and formatting.</think>

# IronClaw 项目摘要 — 2026-10-21

## 1. 今日概览

IronClaw 今日呈现中等维护活动，过去 24 小时内有 3 个 issue 和 9 个 pull request 更新。项目主要聚焦于依赖项维护（6 个 dependabot PR）和托管 MCP（Model Context Protocol）端点相关的功能改进。本周无新版本发布。社区讨论围绕本地 MCP 服务器连接性和凭证管理展开——这些主题表明用户正在构建具有链上能力的主权 AI 代理。功能 PR（解决本地服务器注册问题）和安全导向的依赖更新并存，表明项目在用户面向功能和安全性之间取得了平衡。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

**已合并/关闭的 PR（2 个）：**

| PR | 标题 | 状态 |
|----|-----|------|
| [#7386](https://github.com/nearai/ironclaw/pull/7386) | chore(deps): bump dompurify 3.4.12 → 3.4.13 | ✅ 已关闭 |
| [#8048](https://github.com/nearai/ironclaw/pull/8048) | chore(deps): bump fast-uri 3.1.5 → 3.1.7 | ✅ 已关闭 |

**活跃的 PR（7 个）：**

| PR | 标题 | 类型 |
|----|-----|------|
| [#8147](https://github.com/nearai/ironclaw/pull/8147) | 允许显式信任注册精确的回环 MCP 端点 | 功能 |
| [#8145](https://github.com/nearai/ironclaw/pull/8145) | chore(deps): bump aiohttp 3.14.3 → 3.14.4 | 依赖更新 |
| [#8148](https://github.com/nearai/ironclaw/pull/8148) | chore(deps): bump fast-uri 3.1.5 → 3.1.9 | 依赖更新（安全） |
| [#8149](https://github.com/nearai/ironclaw/pull/8149) | chore(deps): bump dompurify 3.4.12 → 3.4.16 | 依赖更新（安全） |
| [#8150](https://github.com/nearai/ironclaw/pull/8150) | chore(deps): bump multidict 6.7.1 → 6.9.1 | 依赖更新 |
| [#8151](https://github.com/nearai/ironclaw/pull/8151) | chore(deps): bump rustls 0.23.43 → 0.23.45 | 依赖更新 |
| [#8152](https://github.com/nearai/ironclaw/pull/8152) | chore(deps): bump rustls 0.23.43 → 0.23.45 | 依赖更新 |

**总结：** 安全导向的依赖更新主导了今日的 PR 活动，其中 `fast-uri` 和 `dompurify` 的补丁修复了安全漏洞。功能 PR #8147 直接针对 issue #8146 中报告的端点注册问题。

---

## 4. 社区热点话题

**更新最活跃的 Issue（按最近更新排序）：**

| Issue | 标题 | 状态 | 评论数 |
|-------|-----|------|--------|
| [#2077](https://github.com/nearai/ironclaw/issues/2077) | market near ai 的合约源码 | OPEN | 1 |
| [#8146](https://github.com/nearai/ironclaw/issues/8146) | 托管 MCP：显式 127.0.0.1 端点注册和私有凭证账户设置桥接 | OPEN | 0 |
| [#8136](https://github.com/nearai/ironclaw/issues/8136) | 提案：使用声明式认证和出口的可选托管 MCP Plazmi 扩展 | OPEN | 0 |

**分析：** 最活跃的讨论集中在 **MCP 基础设施灵活性** 上。Issue #2077 揭示了用户正在构建不依赖外部基础设施的主权代理——需要透明性（合约源码）和去中心化代理架构。Issue #8146 和 #8136 都指向本地/托管 MCP 服务器集成，表明用户希望在保持与 IronClaw 凭证管理系统兼容的同时运行自己的 MCP 服务器。这一系列问题表明了一个明确的用户需求：**具有适当凭证管理的自托管代理架构**。

---

## 5. 缺陷与稳定性

**今日报告的问题：**

| Issue | 严重程度 | 描述 | 修复 PR |
|-------|----------|------|---------|
| [#8146](https://github.com/nearai/ironclaw/issues/8146) | 中 | 托管 MCP 注册拒绝 HTTP/IP 字面量（127.0.0.1），导致本地连接器认证失败 | [#8147](https://github.com/nearai/ironclaw/pull/8147) |

**评估：** 报告的问题（#8146）是一个功能限制而非崩溃。它阻止了本地 MCP 服务器使用带凭证账户 bearer token 的原生托管 MCP 注册。修复 PR（#8147）已开放并解决了这个确切的使用场景。

---

## 6. 功能请求与路线图信号

**活跃的功能请求：**

| Issue | 请求 | 信号 |
|-------|------|------|
| [#2077](https://github.com/nearai/ironclaw/issues/2077) | 发布 market.near.ai 的合约源码 | 用户需要链上代理主权性；需要直接交互而不依赖外部 HTTP API |
| [#8136](https://github.com/nearai/ironclaw/issues/8136) | 使用声明式认证的可选托管 MCP Plazmi 扩展 | 扩展生态系统需求；通过现有声明式界面进行第三方集成 |
| [#8146](https://github.com/nearai/ironclaw/issues/8146) | 显式回环 MCP 端点注册 | 用户需要具有适当凭证管理的本地 MCP 服务器支持 |
| [#8147](https://github.com/nearai/ironclaw/pull/8147) | 允许显式信任注册回环 MCP 端点 | 进行中的功能 PR——近期合并的候选 |

**路线图预测：** MCP 端点和凭证管理问题集群表明这些功能可能在近期版本中得到优先处理。dependabot 模式表明有规律的发布周期；安全补丁预计将很快发布。合约源码请求（#2077）可能需要更多实质性讨论，考虑到其范围。

---

## 7. 用户反馈摘要

**已识别的痛点：**

- **基础设施依赖**：构建主权链上代理的用户无法在不依赖外部 HTTP API 的情况下与 market.near.ai 交互（#2077）
- **本地服务器限制**：由于 HTTP/IP 字面量拒绝，本地 MCP 服务器无法使用原生托管 MCP 注册来使用凭证账户 bearer token（#8136）
- **扩展生态系统缺口**：用户希望集成第三方扩展（如 Plazmi）通过现有声明式界面而非托管修改（#8136）

**观察到的用例：**

- 持有自身密钥并直接链上运行的主权 AI 代理
- 具有私有凭证管理的本地 MCP 服务器部署
- 托管 MCP 环境中的第三方扩展集成

**满意度信号：** 活跃的社区贡献（功能 PR、提案）表明用户参与度很高。对 #8146 的快速响应（附带修复 PR）表明开发响应迅速。

---

## 8. 待办关注

**长期未回复的重要 Issue：**

| Issue | 时长 | 状态 | 关注点 |
|-------|------|------|--------|
| [#2077](https://github.com/nearai/ironclaw/issues/2077) | 自 2026-04-06 起约 6 个月 | OPEN | market.near.ai 的合约源码请求——对主权代理构建者具有根本重要性；仅有 1 条评论，互动较少但战略重要性高 |

**建议：** Issue #2077 已开放约 6 个月，尚未收到官方回复。考虑到对链上代理主权的新兴兴趣，维护者应提供状态更新或路线图指导，以设定社区预期。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw project digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep the Markdown structure exactly as-is
3. Keep URLs, code references, issue numbers, etc. verbatim
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section while preserving the structure:

**Today's Overview** - High activity (33 PRs, 15 issues), active development
- Translate: "QwenPaw 今天表现出**极高的开发活跃度**，过去 24 小时内共有 33 条 PR 更新（24 条开放，9 条合并/关闭），处理了 15 个 Issue（10 条开放，5 条关闭）。项目正在积极修复稳定性问题的同时，推进包括 v2.3.0 模块化路线图、实时语音聊天和频道插件隔离等主要功能。今日未发布新版本，但多个重要修复已合入，解决了音频处理、控制台滚动和钉钉集成中的长期问题。

Let me go through the whole document now:

---

# QwenPaw 项目动态 — 2026-10-21

## 今日概览

QwenPaw 今天表现出**极高的开发活跃度**，过去 24 小时内共有 33 条 PR 更新（24 条开放，9 条合并/关闭），处理了 15 个 Issue（10 条开放，5 条关闭）。项目正在积极修复稳定性问题的同时，推进包括 v2.3.0 模块化路线图、实时语音聊天和频道插件隔离等主要功能。今日未发布新版本，但多个重要修复已合入，解决了音频处理、控制台滚动和钉钉集成中的长期问题。


---

## 发布动态

**今日无新版本发布。**上一个版本为 v2.2.2-beta.4（在 Issue #8053 中提及）。

## 项目进展

以下 PR 今日**已合并/关闭**：

| PR | 标题 | 状态 |
|----|------|------|
| [#8339](https://github.com/agentscope-ai/QwenPaw/pull/8339) | fix(console): 修复控制台在长时间对话中的轮

I've translated the key sections while maintaining the Markdown structure and technical Chinese register. The document shows active development with 33 PRs processed, 15 issues handled, and several important fixes merged, particularly around audio handling and console scrolling in the QwenPaw project.

The Firecrawl integration adds a new web search provider, and audio fallback now recognizes LM Studio and llama-server rejection patterns, continuing the audio rejection work from previous issues.

Most discussions center on a recurring audio issue where LM Studio rejects files with "At most 0 audio(s) may be provided," along with plugin theming needs and content inspection false positives from gateways that cause request failures. A v2.3.0 roadmap aims to make QwenPaw more lightweight and extensible, with several high-severity bugs affecting DingTalk and Telegram channel reliability requiring investigation.</think>

# QwenPaw 项目动态 — 2026-10-21

## 今日概览

QwenPaw 今天表现出**极高的开发活跃度**，过去 24 小时内共有 33 条 PR 更新（24 条开放，9 条合并/关闭），处理了 15 个 Issue（10 条开放，5 条关闭）。项目正在积极修复稳定性问题的同时，推进包括 v2.3.0 模块化路线图、实时语音聊天和频道插件隔离等主要功能。今日未发布新版本，但多个重要修复已合入，解决了音频处理、控制台滚动和钉钉集成中的长期问题。

---

## 发布动态

**今日无新版本发布。** 上一个版本为 v2.2.2-beta.4（在 Issue #8053 中提及）。

---

## 项目进展

以下 PR 今日**已合并/关闭**：

| PR | 标题 | 状态 |
|----|------|------|
| [#8339](https://github.com/agentscope-ai/QwenPaw/pull/8339) | fix(console): 修复长对话中控制台滚轮卡顿问题 (#8284) | Closed |
| [#8200](https://github.com/agentscope-ai/QwenPaw/pull/8200) | feat(tools): 新增 Firecrawl 作为 web_search provider | Closed |
| [#8215](https://github.com/agentscope-ai/QwenPaw/pull/8215) | fix(agents): 识别 LM Studio 的零音频拒绝响应 (#8171) | Closed |
| [#7654](https://github.com/agentscope-ai/QwenPaw/pull/7654) | fix(agents): 识别 llama-server 和 DashScope URL 的音频拒绝响应 | Closed |

**重点进展：**
- 控制台滚动稳定性修复已合入，解决了长对话中视图跳动的长期问题
- Firecrawl 已集成作为新的 web_search provider
- 音频回退分类器现已支持识别 LM Studio 和 llama-server 的拒绝模式（延续了 #7015/#7024 的修复工作）

---

## 社区热点话题

按评论数排序的最活跃讨论：

1. **[#8171](https://github.com/agentscope-ai/QwenPaw/issues/8171)** — "send_file_to_user 永久阻塞会话 — LM Studio 返回 400 At most 0 audio(s) may be provided" — 6 条评论  
   *持续性问题：音频拒绝问题的第三轮迭代。PR #8215 已合入，但底层音频回退分类器仍有边界情况。*

2. **[#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071)** — "[Feature]: 插件级主题扩展点（语义 token 覆盖层）" — 5 条评论  
   *插件作者请求更深层的主题控制权，超越单一的 `colorPrimary` 配置项。与 #7741 用户主题系统相关。*

3. **[#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092)** — "阿里系网关导致内容检查误报… 被分类为 bad_request — 无重试、无回退、轮次被终止" — 3 条评论  
   *网关兼容性问题导致正常的 DevOps 对话失败。PR #8124 正在处理路由到备用 provider 的逻辑。*

4. **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)** — "📢 [Feature] v2.3.0 预告：让 QwenPaw 更轻量、更可扩展" — 2 条评论，1 个表情  
   *v2.3.0 模块化的官方路线图信号。社区被邀请提出需求和建议。*

---

## Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复 PR |
|----------|-------|------|---------|
| **高** | [#8343](https://github.com/agentscope-ai/QwenPaw/issues/8343) | 钉钉最终回复在 sessionWebhook 过期后被静默丢弃 — 无回退机制 | — |
| **高** | [#8315](https://github.com/agentscope-ai/QwenPaw/issues/8315) | 飞书频道在注入 HTTP_PROXY 但未设置 feishu.cn 的 NO_PROXY 时返回 426 Upgrade Required | — |
| **高** | [#8329](https://github.com/agentscope-ai/QwenPaw/issues/8329) | 飞书频道忽略 reply_to_message — 引用上下文无法到达 agent | — |
| **高** | [#8342](https://github.com/agentscope-ai/QwenPaw/issues/8342) | 引用回复在七个频道中丢失 channel control-command 路由 | — |
| **中** | [#8320](https://github.com/agentscope-ai/QwenPaw/issues/8320) | Desktop 2.2.2 make-skill 验证器因无法导入 qwenpaw 模块而失败 | [#8344](https://github.com/agentscope-ai/QwenPaw/pull/8344) |
| **中** | [#8340](https://github.com/agentscope-ai/QwenPaw/issues/8340) | 定时任务编辑对话框在修改后无法关闭 | — |
| **中** | [#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249) | 定时任务修改 — 默认时间重置为 0:00，请求内容显示 [object Object] | — |
| **低** | [#8284](https://github.com/agentscope-ai/QwenPaw/issues/8284) | 长对话中控制台滚轮滚动卡顿 | [#8339](https://github.com/agentscope-ai/QwenPaw/pull/8339) ✅ |

**注意：** #8343（钉钉）和 #8342（引用回复）为今日新报，尚未标记修复。高严重程度的频道路由问题表明可能需要进行多频道架构审查。

---

## 功能请求与路线图信号

**团队明确的路线图：**

- **[#8289](https://github.com/agentscope-ai/QwenPaw/issues/8289)** — v2.3.0：让 QwenPaw 更轻量、更可扩展  
  *插件重构以提升模块化程度。正在征集社区输入。*

**用户请求的功能：**

| Issue | 请求 | 可行性 |
|-------|------|--------|
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | 插件级主题扩展（语义 token 覆盖） | 高 — 符合 v2.3.0 可扩展性目标 |
| [#8311](https://github.com/agentscope-ai/QwenPaw/issues/8311) | HarmonyOS 本地插件宿主：标准化的 window.QwenPaw 契约 | 中 — 移动端开发正在进行 |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | 实时语音聊天（大型 PR 进行中） | 高 — 活跃开发中 |

---

## 用户反馈摘要

**今日反馈的痛点：**

1. **频道可靠性** — 多条 Issue（#8343、#8342、#8329、#8315）指出频道集成脆弱性。用户遭遇静默失败（钉钉回复丢失、飞书引用上下文丢失）和代理相关的连接问题（飞书 426 错误）。

2. **Desktop 环境缺陷** — #8320 报告 Desktop 构建中 make-skill 验证器因 qwenpaw 模块导入问题失败。#8344 正在通过原生 CLI 解决。

3. **定时任务 UI 回退** — 两条 Issue（#8340、#8249）报告计划任务管理中的对话框/字段行为问题。

4. **网关兼容性** — #8092 显示阿里系网关导致内容检查误报，使有效请求以无回退的方式失败。

**满意度信号：**
- 控制台滚动修复（#8339）解决了长期的 UX 投诉
- 音频回退改进持续进行（#8215、#7654），展示响应式维护

---

## 待处理事项关注

需要维护者关注的重要 Issue/PR：

| 项目 | 时长 | 描述 | 状态 |
|------|------|------|------|
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | 自 2026-09-04 | feat(plugins): 清洁卸载与回滚安全的热重载（XXXL） | 开放，2026-10-20 更新 |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | 自 2026-09-15 | feat(voice): 新增实时语音聊天（XXXL） | 开放 |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | 自 2026-10-12 | feat(channels): 将频道提取为插件并实现子进程隔离（XXXL） | 开放 |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | 自 2026-09-19 | feat(pawapp): 重构 SDK 与 app 控制平面（XXXL） | 开放 |
| [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | 自 2026-10-03 | 内容检查误报 — 网关兼容性 | 开放 |

**注意：** 四个 XXXL（超大型）PR 已历时数周至数月，表明正在进行重大架构工作。实时语音聊天（#7785）和频道插件隔离（#8187）代表了即将推出的重大功能变化。

---

*基于 QwenPaw 仓库数据生成的动态 — 2026-10-21*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. I need to:
1. Translate all the content to Chinese
2. Keep all Markdown structure exactly as-is
3. Keep URLs, code references, issue/PR numbers, version tags, etc. in their original form
4. Use natural technical Chinese register

Let me go through and translate this carefully while preserving the structure.

I'll translate section by section:

## 1. Today's Overview
-> 今日概况

## 2. Releases
-> 版本发布

## 3. Project Progress
-> 项目进展

## 4. Community Hot Topics
-> 社区热点

## 5. Bugs & Stability
-> 缺陷与稳定性

## 6. Feature Requests & Roadmap Signals
-> 功能请求与路线图信号

## 7. User Feedback Summary
-> 用户反馈摘要

## 8. Backlog Watch
-> 待办关注

Let me translate the content now, preserving all formatting.</think>

# ZeroClaw 项目简报 — 2026-10-21

## 1. 今日概况

ZeroClaw **今日活动频繁**，过去24小时内有 **50 个 issue** 和 **50 个 PR** 更新，其中 **1 个 PR 已合并/关闭**。全部 50 个 issue 仍处于开放状态，表明团队正在进行分类整理而非直接解决。今天**未发布新版本**，但项目显然正处于 **v0.8.7 稳定化阶段**，多个 issue 和 PR 都标记了该版本。代码库在 channel、插件、provider 和安全等领域都有活跃开发，但值得注意的是大量 **高风险（P0/P1）缺陷** 的存在，表明团队正在优先处理稳定性问题，为下一版本做准备。

---

## 2. 版本发布

**今日无新版本发布。**

项目正在推进 **v0.8.7** 版本，多个 issue 和 PR 都标记了 `release:v0.8.7`（参见 Issue #10999、#10066、#11416、#11332、#11336、#11360、#11552、#11580、#11819、#11830、#10997、#10998、#11813、#11828、#11831、#11839、#11792、#11821）。

---

## 3. 项目进展

### 今日合并/关闭的 PR
- **1 个 PR 已合并/关闭**（根据数据摘要，50 个更新的 PR 中）

### 值得关注的进展（活跃 PR）

| PR | 作者 | 描述 | 规模 |
|----|--------|-------------|------|
| [#11880](https://github.com/zeroclaw-labs/zeroclaw/pull/11880) | vruru | feat(goal): 提取传输层无关的 Goal 策略合约 [Goal V1 提案 3/12] | XL |
| [#11680](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) | JuampiHernandez | feat(tools): 添加 Firecrawl 网页搜索 provider | XL |
| [#11584](https://github.com/zeroclaw-labs/zeroclaw/pull/11584) | Felixkw12 | feat(providers): 添加 Opper model provider | M |
| [#11274](https://github.com/zeroclaw-labs/zeroclaw/pull/11274) | JordanTheJet | feat(rpc-client): 在发送凭证前验证端点的 OS 账户 | XL |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | NiuBlibing | feat(providers): 支持每个 provider 配置多个模型 | XL |
| [#11910](https://github.com/zeroclaw-labs/zeroclaw/pull/11910) | RO-mix | fix(runtime): 强制执行系统提示词大小预算（失败即关闭） | S |
| [#11906](https://github.com/zeroclaw-labs/zeroclaw/pull/11906) | mov-xound-glitch | fix(deps): 为 Wasmtime 48.0.7 打补丁修复 RUSTSEC-2026-0375..0379 | — |
| [#11905](https://github.com/zeroclaw-labs/zeroclaw/pull/11905) | mov-xound-glitch | fix(cron): 切换到 WAL 时等待竞争写入者 | S |
| [#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061) | tunglambk | fix(security): 即使在白名单中也阻止高风险 shell 命令 | S |

**重点进展：**
- **安全加固**：PR #11910 强制执行系统提示词大小预算（失败即关闭），修复 Issue #11908；PR #11061 即使在命令白名单中也阻止高风险 shell 命令。
- **依赖补丁**：PR #11906 为 Wasmtime 打上了 5 个 RustSec 警告的补丁。
- **新集成**：Firecrawl 网页搜索和 Opper model provider 已添加。
- **多模型支持**：PR #9809 支持每个 provider 配置多个模型（重要架构改进）。

---

## 4. 社区热点

### 讨论最活跃的 Issue（按评论数）

| Issue | 标题 | 评论数 | 优先级 | 风险 |
|-------|-------|----------|----------|------|
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Bug: 独立 channel 启动 SOP 的回合缺少实时 channel 工具句柄 | 8 | P1 | 高 |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | Bug: llama.cpp 和自定义 provider 使用错误的 url/uri 访问模型 | 6 | P2 | 高 |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Feature: 带有限回退的 schema 验证内存合并 | 6 | P2 | 高 |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | Task: 从发布二进制文件发布并验证 Discord 插件安装 | 5 | — | 中 |
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | Bug: SOP 引擎在记录步骤的 output-schema 拒绝前就提升并运行后续步骤 | 5 | P0 | 高 |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | Bug: Slack "正在思考…" 状态自 v0.8.5 起不再显示在线程中 | 5 | P2 | 中 |

### 分析

最活跃的讨论集中在：
1. **Channel 工具 wiring**（Issue #11055）— 对守护进程部署至关重要；用户在两个入口点之外无法使用 channel 寻址的工具。
2. **Provider URL 处理**（Issue #11296）— 使用远程 llama.cpp 或自定义 provider 的用户无法正确指定非 localhost URI 来路由模型。
3. **内存合并脆弱性**（Issue #6998）— 这是一个长期存在的问题，模型输出中的 JSON 解析经常失败；用户希望 schema 验证配合有限回退机制。
4. **Discord 插件分发**（Issue #10999）— 用户期待 Discord channel 插件的二进制分发。

**高评论数集中在 P0/P1 缺陷** 上，表明社区对当前发布周期中的稳定性阻塞问题高度关注。

---

## 5. 缺陷与稳定性

### 关键缺陷（P0/P1，高风险）

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|-------|----------|---------|
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP 引擎在记录步骤的 output-schema 拒绝前就提升并运行后续步骤 | S1 - 工作流被阻塞 | — |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | 独立 channel 启动 SOP 的回合缺少实时 channel 工具句柄 | 中等 — channel 工具在守护进程中不可用 | — |
| [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | 早期路径标记图片在每个后续回合都被重新发送，模型描述虚假的"新"图片 | S2 - 降级 | — |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp 和自定义 provider 使用错误的 url/uri 访问模型 | S3 - 轻微 | — |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | 技能审查和技能创建对 channel、webhook 或 gateway 回合从不运行 | S2 - 降级 | — |
| [#11327](https://github.com/zeroclaw-labs/zeroclaw/issues/11327) | 插件工具名 gate 只看到插件注册前注册的工具（安全） | S2 / 如使用不受信任插件则为 S0 | — |

### 正在修复中的重要内容
- **PR #11910** 修复系统提示词预算执行问题（Issue #11908）
- **PR #11906** 为 Wasmtime 安全漏洞打补丁
- **PR #11061** 修复 shell 命令白名单绕过

---

## 6. 功能请求与路线图信号

### 新功能 RFC 及 PR

| Issue/PR | 标题 | 可能目标版本 |
|----------|-------|---------------|
| [#11914](https://github.com/zeroclaw-labs/zeroclaw/issues/11914) | RFC: 基于主体的信任边界 — 统一访问控制层 | v0.9.0+ |
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Feature: 带有限回退的 schema 验证内存合并 | 近期 |
| [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | Feature: 默认启用 stall 看门狗（stall_timeout_secs） | v0.8.7 |
| [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) | Feature: 实现 Telegram Bot API 10.1 富消息 | 近期 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): 支持每个 provider 配置多个模型 | v0.8.7/v0.9.0 |
| [#11680](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) | feat(tools): 添加 Firecrawl 网页搜索 provider | 近期 |

### v0.8.7 预测
- **Stall 看门狗启用**（Issue #10168）是低风险增强，很可能落地。
- **Telegram 富消息**（Issue #8415，PR #11862）正在积极开发中。
- **Discord 插件**（Issue #10999）受发布基础设施阻塞。

---

## 7. 用户反馈摘要

### 痛点

1. **守护进程模式下 channel 工具不可用**（Issue #11055）— 以守护进程方式运行 ZeroClaw 的用户在两个硬编码入口点之外无法访问 channel 工具。这是生产部署的重大限制。

2. **Provider URL 路由错误**（Issue #11296）— 使用远程 llama.cpp 或自定义 provider 的用户无法正确指定非默认 URI；模型从错误的端点获取。

3. **内存合并脆弱性**（Issue #6998）— 用户报告模型响应中的 JSON 解析频繁失败，导致回退到原始摘要，丢失结构化内存的优势。

4. **技能学习仅在 CLI/cron 中运行**（Issue #11332）— 通过 Matrix、webhook 或 gateway UI 交互的用户报告学习循环（技能改进/创建）从未触发，限制了 agent 的自我提升能力。

5. **图片重复发送 bug**（Issue #11554）— 用户报告模型重复描述已展示过的"新"图片，表明 Signal/Telegram/Discord channel 中存在会话历史管理问题。

### 满意信号

- **插件系统**持续吸引贡献（Firecrawl、Opper provider），表明开发者体验良好。
- **每个 provider 多模型**（PR #9809）解决了一个长期请求的灵活性改进。
- **可配置的确认反应**（PR #11754）表明团队对用户体验定制需求的响应能力。

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 标题 | 时长 | 状态 | 关注点 |
|-------|-------|-----|--------|---------|
| [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) | Feature: 带有限回退的 schema 验证内存合并 | 2026-05-29（约5个月）| 已接受，待定 | 长期存在的增强；内存合并脆弱 |
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | Bug: SOP 引擎在记录步骤的 output-schema 拒绝前就提升并运行后续步骤 | 2026-08-17（约2个月）| 已接受 | P0 工作流阻塞缺陷 |
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Bug: 独立 channel 启动 SOP 的回合缺少实时 channel 工具句柄 | 2026-09-22（约1个月）| 已接受，后续跟进 | P1 channel 工具 wiring |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | Task: 从发布二进制文件发布并验证 Discord 插件安装 | 2026-09-20（约1个月）| 阻塞中 | Discord 插件的产品门槛 |
| [#11828](https://github.com/zeroclaw-labs/zeroclaw/issues/11828) | Task: arm64 `dist` 镜像在 docker-publish.yml 中内存耗尽 | 2026-10-17 | 开放中 | v0.8.6 的 CI 基础设施阻塞 |

### 需要作者或维护者操作的 PR

| PR | 标题 | 阻塞原因 |
|----|-------|----------|
| [#11880](https://github.com/zeroclaw-labs/zeroclaw/pull/11880) | feat(goal): 提取传输层无关的 Goal 策略合约 | 草稿暂停：CI 在继承的 TLS 依赖上失败 |
| [#11680](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) | feat(tools): 添加 Firecrawl 网页搜索 provider | 需要维护者审查 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | feat(providers): 支持每个 provider 配置多个模型 | 需要作者操作 |
| [#11274](https://github.com/zeroclaw-labs/zeroclaw/pull/11274) | feat(rpc-client): 在发送凭证前验证端点的 OS 账户 | 依赖于 #11186 |

---

*简报基于 2026-10-21 的 ZeroClaw GitHub 数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*