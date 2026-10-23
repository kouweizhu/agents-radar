# OpenClaw 生态日报 2026-10-23

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-23 00:52 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this Project Digest into Simplified Chinese. Let me carefully translate it while:

1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Keeping URLs, issue numbers, code references, project names as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Preserving the exact formatting including tables and horizontal rules

Let me go through section by section:

## Today's Overview
- OpenClaw shows high activity with 500 Issues and 500 Pull Requests updated in the last 24 hours → OpenClaw 过去24小时内更新了 500 条 Issue 和 500 条 Pull Request，呈现高活跃状态
- The project released v2026.10.6 → 项目发布了 v2026.10.6
- a security-focused patch requiring Node.js 24.22.1+ or 26.12.1+ → 这是一个安全修复版本，要求 Node.js 24.22.1+ 或 26.12.1+
- to address compromised TLS certificate chain vulnerabilities → 以解决 TLS 证书链被攻破的安全漏洞
- Community engagement remains robust → 社区参与度依然保持强劲
- Current status: 81 open Issues and 219 open PRs indicate healthy pipeline flow → 当前状态：81 个活跃 Issue 和 219 个活跃 PR，显示出健康的开发流程
- though several high-priority bugs (including P0/P1 session stability issues) require immediate attention → 但若干高优先级问题（包括 P0/P1 级别的会话稳定性问题）需要立即关注

## Releases
### v2026.10.6 — OpenClaw 2026.10.6
**Release Date:** 2026-10-22

**Key Changes:**
- **Security Patch — Node Runtime Required:** OpenClaw now mandates Node 24.22.1+ (24 line) or 26.12.1+ (26 line) to reject TLS chains signed with compromised certificate keys addressed in October 2026 Node.js security releases.


- **Docker Images:** Updated Docker images ship Node 24.2.

**Migration Notes:** Users must upgrade their Node.js installation before updating; existing deployments on older Node versions will fail to start.

Now I need to translate the migration guidance and ensure consistency with technical Chinese terminology. The Docker images will include Node 24.2, and users need to upgrade their runtime before updating their deployments to avoid startup failures on older Node versions. 当前有 81 个活跃 Issue 和 219 个活跃 PR，显示出健康的开发管道流程。多个高优先级问题（包括 P0/P1 级别的会话稳定性问题）需要立即处理。

---

## 发布版本

### v2026.10.6 — OpenClaw 2026.10.6
**发布日期：** 2026-10-22

**主要更新：**
- **安全补丁 — Node 运行时要求：** OpenClaw 现强制要求 Node 24.22.1+（24.x 版本）或 26.12.1+（26.x 版本），以拒绝由 2026 年 10 月 Node.js 安全更新中已解决的被攻破证书密钥签名的 TLS 证书链。
- **Docker 镜像：** 更新的 Docker 镜像已包含 Node 24.2。

**迁移说明：** 用户必须在更新前先升级 Node.js；部署在旧版 Node 上的实例将无法启动。

---

## 项目进度

| 指标 | 数量 |
|------|------|
| PR 更新（24h） | 500 |
| PR 活跃 | 219 |
| PR 已合并/关闭 | 281 |

**已合并/关闭的重要 PR：**

| PR | 作者 | 摘要 |
|----|------|------|
| [#178909](https://github.com/openclaw/openclaw/pull/178909) | brianmcguire | 修复（telegram）：Stock Bun 下的偏移检查点失败 |
| [#181129](https://github.com/openclaw/openclaw/pull/181129) | shakkernerd | 修复：恢复工作线程占用超时回归 |
| [#181063](https://github.com/openclaw/openclaw/pull/181063) | steipete | 测试（ui）：对齐插件编写器检查与阴影移除 |
| [#181123](https://github.com/openclaw/openclaw/pull/181123) | steipete | 修复（macos）：防止非法指令后 Gateway 崩溃循环 |
| [#172872](https://github.com/openclaw/openclaw/pull/172872) | Alix-007 | 修复（cli）：阻止技能和钩子报告中的描述符控件 |

---

## 社区热点

**按评论数排名的最活跃 Issue：**

1. **[#7707](https://github.com/openclaw/openclaw/issues/7707)** — [功能需求：按来源标记内存信任级别](https://github.com/openclaw/openclaw/issues/7707) — **38 条评论**
   - *作者：LumenLantern | P2 | 安全*
   - **核心需求：** 按信任级别（用户命令、网络抓取、第三方技能）标记智能体内存条目，防止不可信内容的内存污染攻击。

2. **[#11829](https://github.com/openclaw/openclaw/issues/11829)** — [安全路线图：保护 API 密钥免受智能体访问](https://github.com/openclaw/openclaw/issues/11829) — **21 条评论**
   - *作者：jmkritt | 安全*
   - **核心需求：** 分层防护方案防止 API 密钥泄露给 LLM 或暴露在聊天界面中。

3. **[#22438](https://github.com/openclaw/openclaw/issues/22438)** — [功能：分层引导文件加载实现渐进式上下文控制](https://github.com/openclaw/openclaw/issues/22438) — **20 条评论**
   - *作者：882soft | P2 | 相关 PR 已开*
   - **核心需求：** 为大型工作区加载引导文件时分层进行，减少令牌浪费。

4. **[#68596](https://github.com/openclaw/openclaw/issues/68596)** — [功能需求：可配置的流式看门狗超时阈值](https://github.com/openclaw/openclaw/issues/68596) — **18 条评论**
   - *作者：Yaemikoreal | P2 | 8 👍*
   - **核心需求：** 针对长思考模型（kimi-k2.5、DeepSeek-R1）调整超时时间，避免误触发看门狗警告。

5. **[#13583](https://github.com/openclaw/openclaw/issues/13583)** — [[功能] 响应前强制执行钩子（硬性门控）](https://github.com/openclaw/openclaw/issues/13583) — **17 条评论**
   - *作者：JamieMolty | P2 | 安全*
   - **核心需求：** 在高风险工作流（金融、安全）中机械性强制执行必需的

工具调用规则，而非仅依赖软性提示。

6. **[#53763](https://github.com/openclaw/openclaw/issues/53763)** — [[功能]：内置无头浏览器](https://github.com/openclaw/openclaw/issues/53763) — **17 条评论**
   - *作者：luoziyan100 | P3*
   - **核心需求：** 集成 Chromium 实现可靠的网页访问，无需外部依赖或脆弱的三层架构。

---

## 缺陷与稳定性

**活跃的严重/P1 级缺陷：**

| Issue | 严重性 | 状态 | 描述 |
|-------|--------|------|------|
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | **P0** | 开

放 | 延迟回收提交检查点失败导致崩溃恢复后智能体不可用 — 阻塞 `chat.history`、`chat.metadata`、`models.list` |
| [#172837](https://github.com/openclaw/openclaw/issues/172837) | **P1** | 开放 | Codex nativeSubagentAssignments 在完成后永不移除 — 每次新建父级线程时重复固定和重新发送 |
| [#172294](https://github.com/openclaw/openclaw/issues/172294) | **P2** | 开放 | `openclaw status --all` 当诊断日志为无写入端的 FIFO 时挂起 |

**最近的回归/行为缺陷：**

| Issue | 严重性 | 状态 | 描述 |
|-------|--------|------|------|
| [#53008](https://github.com/openclaw/openclaw/issues/53008) | **P1** | 已关闭 | 内存压缩阻塞主处理通道超过 10 分钟，智能体无响应 |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | **P1** | 已关闭 | clearUnboundScopes 无条件剥离操作员作用域 — 破坏令牌认证客户端 |
| [#43996](https://github.com/openclaw/openclaw/issues/43996) | **P1** | 已关闭 | 沙箱容器在 2026.3.11 后以"操作不允许"立即退出 |

**修复中的 PR：**
- [#180728](https://github.com/openclaw/openclaw/pull/180728) — 修复：父级完成后恢复的子会话失败（

P1，需安全审查）
- [#180632](https://github.com/openclaw/openclaw/pull/180632) — 修复（认证）：在继承的认证所有者仍在准备时保持启动（P1）

---

## 功能需求与路线图信号

**按参与度排名的重大功能需求：**

| Issue | 优先级 | 参与度 | 关注领域 |
|-------|--------|--------|----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) | P2 | 38 条评论 | 内存信任标记（安全） |
| [#11829](https://github.com/openclaw/openclaw/issues/11829) | — | 21 条评论 | API 密钥保护路线图 |
| [#22438](#22438) | P2 | 20 条评论 | 分层引导加载 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | P2 | 17 条评论 | 响应前强制执行钩子 |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | P3 | 17 条评论 | 内置无头浏览器 |
| [#15032](https://github.com/openclaw/openclaw/issues/15032) | P2 | 8 条评论 | 每次生成工具限制（DMZ） |
| [#20935](https://github.com/openclaw/openclaw/issues/20935) | P2 | 8 条评论 | 智能体内存变更审计日志 |
| [#8719](https://github.com/openclaw/openclaw/issues/8719) | P1 | 8 条评论 | 安全配置文件 v1.1（以数据为中心）|

**路线图信号：** 安全相关问题的高度集中（#7707、#11829、#13583、#15032、#8719）表明安全加固是 2026.10+ 路线图的主要方向。内存管理和多智能体编排（#35203、#43367）同样保持持续关注。

---

## 用户反馈摘要

**已识别的痛点：**

1. **会话稳定性：** 多起报告指出崩溃恢复后智能体不可用（#166634）、内存压缩阻塞主通道（#53008）

2. **多智能体编排：** 并发智能体操作导致配置覆盖、会话锁失败、子任务脱离（#43367）

3. **流式/超时问题：** 长思考模型触发误报看门狗警告；大型工具调用参

数导致"网络连接丢失"错误（#68596、#53540）

4. **频道路由缺陷：**  Telegram 私信仍混入主会话（#41165）；飞书主题群被误识别为点对点（#52238）

5. **硬编码路径：** 工作目录硬编码为 `/Users/wangtao` 的缺陷报告 — 表明代码审查存在漏洞（#51429）

**满意度信号：** 可配置流式看门狗需求（#68596，8 👍）和 AWS 部署指南（#13597，4 👍）获得积极响应，表明对运维可配置性的需求。

---

## 待处理事项

**需要维护者关注的老旧 Issue：**

| Issue | 时长 | 优先级 | 状态 | 障碍 |
|-------|------|--------|------|------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 约 6 个月 | P2 | 已关闭 | 需产品决策 |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 约 7 个月 | P3 | 已关闭 | 需产品决策 |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | 约 6 个月 | P2 | 已关闭 | 已失效 |
| [#46058](https://github.com/openclaw/openclaw/issues/46058) | 约 7 个月 | P3 | 已关闭 | 已失效 |

**等待作者处理的 PR（>3 天）：**

| PR | 作者 | 时长 | 重点 |
|----|------|------|------|
| [#179181](https://github.com/openclaw/openclaw/pull/179181) | steipete |

2 天 | 修复（ci）：本地检查在干净 main 上失败 |
| [#181096](https://github.com/openclaw/openclaw/pull/181096) | roboclaw-bot | 1 天 | 修复：遗漏完成事件后恢复排队的后续操作 |
| [#181117](https://github.com/openclaw/openclaw/pull/181117) | robocaw-bot | 0 天 | 修复（会话）：原生子进程运行老化后父级后续操作失败 |

**维护瓶颈指标：**
- 多个 P2 级问题标记为 `clawsweeper:needs-product-decision` — 需要产品负责人介入
- 多个安全敏感的 PR 队列等待安全审查（#180728、#180632）

---

*数据来源：OpenClaw GitHub — 2026-10-23*</think>



---

## 横向生态对比

<think>The user wants me to translate this entire cross-project comparison report into Simplified Chinese. Let me carefully follow all the rules specified:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all formatting and technical terms.</think>

# 跨项目对比报告：个人 AI 助手生态系统

---

## 1. 生态系统概览

2026 年底的个人 AI 助手和 Agent 框架领域呈现出成熟但快速演进的态势。主要项目在类似的技术挑战上趋于收敛——会话/状态管理、多 Agent 编排、安全加固和插件扩展性——同时通过技术栈和目标部署场景实现差异化。安全已成为所有四个项目的首要关注点，反映在协调的漏洞响应上（例如 emSign CA 修复同时出现在 QwenPaw 和 ZeroClaw 中）。该领域正在从功能迭代速度转向稳定性和企业级准备度，多个项目同时在解决网关可靠性、内存管理和身份认证系统的问题。平台特定挑战（Windows 桌面、ARM64 Docker、移动端）仍然是持续存在的摩擦点。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------|----------|--------------|---------|----------|
| **Issue 更新（24h）** | 500 | 50 | 12 | 50 |
| **PR 更新（24h）** | 500 | 50 | 26 | 50 |
| **开放 Issue** | 81 | 45 | — | 38 |
| **开放 PR** | 219 | 29 | 20 | 42 |
| **近期发布** | v2026.10.6（安全更新） | 无（v0.22.4 稳定版） | v2.2.2.post1（安全更新） | 无（v0.8.7 待发布） |
| **主要技术栈** | Node.js 24+ | Node.js | Node.js + Python | Rust（Cranelift/Wasmtime） |
| **安全重点** | TLS 链、API 密钥保护 | 审批系统、认证流程 | emSign CA、Node.js | Wasmtime、Shell 解析 |

**健康度评分（综合评估）：** 基于 PR 合并比率、Issue 解决速度和安全保障响应频率：

| 项目 | 健康评估 |
|------|----------|
| **OpenClaw** | 高速迭代，高 Issue 量，积极的安全路线图 |
| **Hermes Agent** | 中高，主要重构后处于稳定期 |
| **QwenPaw** | 中等，发布后回归修复中 |
| **ZeroClaw** | 高，发布节奏稳健，安全响应强 |

---

## 3. OpenClaw 的定位

**相比同行的优势：**

- **最高开发速度** — Issue/PR 活动是同行的 10 倍（每日 500 vs 50 次更新），表明贡献者基础更大、迭代周期更快
- **安全优先的发布节奏** — v2026.10.6 展示了 TLS 漏洞的快速协调响应，明确了运行时要求（Node 24.22.1+）
- **成熟的插件生态** — Agent Vault 插件、MCP 集成和广泛的渠道支持（Telegram、飞书、Matrix）超过同行产品
- **企业级功能** — 响应前强制执行钩子（#13583）、内存信任标签（#7707）和 API 密钥保护路线图（#11829）表明企业级准备度的雄心

**技术方案差异：**

- **vs Hermes Agent：** OpenClaw 专注于 Node.js 优先部署和 Docker 优先架构；Hermes 追求桌面原生和 TUI 体验
- **vs QwenPaw：** OpenClaw 强调多 Agent 编排和会话弹性；QwenPaw 强调插件热重载和渠道灵活性
- **vs ZeroClaw：** OpenClaw 基于 Node.js/TypeScript 构建；ZeroClaw 通过 Rust/Wasm 执行引擎实现差异化，提供确定性重放

**社区规模对比：**

OpenClaw 的活动量（每日 500 Issues + 500 PRs）表明在四个项目中拥有最大的活跃贡献者基础。Hermes Agent 和 ZeroClaw 表现出相当的中等活动量（各约 50 次更新），而 QwenPaw 的 Issue 量较低但 PR 开发保持稳定。

---

## 4. 共同的技术关注点

以下需求和挑战出现在多个项目中：

| 关注领域 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|----------|----------|--------------|---------|----------|
| **会话/状态管理** | ✅ 延迟回收检查点（#166634） | ✅ 统一网关后修复（#134889） | ✅ 删除时会话 404（#8368） | ✅ Daemon RPC 会话存储（#11898） |
| **安全加固** | ✅ API 密钥、内存信任标签 | ✅ 智能审批安全（#141346） | ✅ emSign CA、Node.js 补丁 | ✅ Wasmtime、Shell 解析 |
| **网关/传输可靠性** | — | ✅ 会话事件传输（#8010） | ✅ CORS 源运行时（#8389） | ✅ WebSocket 升级（#11951） |
| **插件扩展性** | ✅ Agent Vault、MCP | ✅ 插件中间件（#131258） | ✅ 渠道插件（#8187） | ✅ 插件移除缺陷（#11357） |
| **超时/流式配置** | ✅ 流式看门狗（#68596） | ✅ 网关超时 | ✅ Hub 超时（#8372） | ✅ Cranelift 超时（#11941） |
| **多 Agent 编排** | ✅ nativeSubagentAssignments（#172837） | ✅ 自验证流程（#6093） | — | ✅ 目标模式 V1（#11878） |

**关键洞察：** 会话管理和安全加固是普遍的关键需求。每个项目都在积极解决合并后回归、会话生命周期缺陷或认证/审批安全相关的问题。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------|----------|--------------|---------|----------|
| **目标部署** | Server/Docker 优先、API 优先 | Desktop/TUI 原生 | 混合（Docker + 桌面） | Server/Edge（Wasm 运行时） |
| **主要语言** | TypeScript/Node.js | TypeScript/Node.js | TypeScript + Python | Rust |
| **独特优势** | 企业安全、多渠道 | 桌面原生 UX、视觉工具 | 插件热重载、渠道 | 确定性执行、Wasm 沙箱 |
| **安全态势** | API 密钥保护、内存信任 | 审批系统加固 | CA 信任、Node.js 补丁 | Wasm 沙箱、Shell 解析 |
| **面向用户的功能** | 无头浏览器、引导层级 | 浏览器自动化、故事书文档 | 邮件渠道、Hub 管理 | 目标模式、mTLS 令牌 |
| **目标用户** | 企业团队、API 集成者 | 桌面高级用户、开发者 | 团队部署、Hub 运营商 | 边缘计算、安全敏感场景 |

**架构分歧：**

- **OpenClaw/Hermes/QwenPaw** 在 Node.js 运行时上收敛，但 OpenClaw 强调安全，Hermes 强调桌面 UX，QwenPaw 强调插件灵活性
- **ZeroClaw** 通过 Rust/Cranelift 执行引擎独树一帜，提供确定性重放和 Wasm 沙箱隔离——根本上不同的安全模型

---

## 6. 社区活力与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw | 每日 500 次更新；高 Issue/PR 量；主要版本周期约每月；安全补丁在数天内发布 |
| **积极开发** | Hermes Agent、ZeroClaw | 每日约 50 次更新；结构化发布周期；主要重构后稳定期 |
| **维护/稳定** | QwenPaw | Issue 量较低；发布后缺陷清理；功能工作持续但节奏可控 |

### 成熟度指标

- **OpenClaw：** 高速迭代，但 Issue 量高（81 个开放）表明持续稳定中。安全路线图表明成熟的企业级考量。
- **Hermes Agent：** 统一网关运行时集成（#106742）表明重大架构工作已完成；现处于稳定期。
- **QwenPaw：** v2.2.2.post1 安全发布显示响应式维护；回归缺陷（#8388、#8378）表明近期快速功能添加。
- **ZeroClaw：** 结构化发布周期（v0.8.7、v0.9.0 路线图）；RFC 流程（#10526）表明架构成熟度。

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **安全成为标配** — 本周期内每个项目都发布了安全更新（TLS/CA、Wasmtime、Node.js）。社区越来越期望：
   - 运行时版本强制
   - 敏感操作的审批/门禁机制
   - 内存信任边界

2. **会话状态复杂性** — 多个项目在重构后会话生命周期方面遇到困难：
   - 检查点/恢复失败
   - 按渠道/规范化主题的会话隔离
   - 并发多 Agent 状态冲突
   - **信号：** 随着 Agent 寿命延长和自主性增强，会话管理成为前沿挑战。

3. **插件架构走向成熟** — 四个项目都在完善插件生命周期：
   - 热重载安全性（#7565）
   - 发送者标识和隔离
   - 工具名称门控
   - **信号：** 插件生态系统正在从 MVP 转向生产级。

4. **网关/传输可靠性** — 实时通信层（WebSocket、流式传输、事件传输）是所有项目的共同痛点：
   - 超时配置需求
   - 协议升级失败
   - 跨容器可达性
   - **信号：** 生产部署期望提高；基础设施即功能成为差异化点。

5. **多 Agent 编排** — OpenClaw（子 Agent）、Hermes（自验证）和 ZeroClaw（目标模式 V1）独立解决类似问题：
   - 任务委托和生命周期
   - 结果继承
   - 状态协调
   - **信号：** 多 Agent 是下一个前沿；尚无项目形成标准。

6. **平台特定挑战** — Windows（桌面、MAX_PATH）、ARM64（Docker 构建、内存边界）和移动端（原声应用）仍是摩擦点：
   - **信号：** 跨平台一致性未解决；边缘部署（ARM64、Wasm）重要性日益增加。

### 对 AI Agent 开发者的价值

使用或基于这些框架构建的开发者应：

- **尽早优先考虑安全集成**——审批系统、内存信任、API 密钥保护是社区优先事项
- **规划会话弹性**——预计需要实现检查点/恢复、并发访问处理
- **设计插件接口时考虑生命周期**——热重载、隔离、优雅降级是预期要求
- **关注网关/传输稳定性**——实时功能需要明确的超时、重试和降级策略
- **关注多 Agent 模式**——任务委托、自验证和目标分解等能力是新兴模式

---

*跨项目分析综合自 2026-10-23 的项目摘要*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English project digest into Simplified Chinese, following the specific rules provided. Let me analyze what needs to be done:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate the content:

---

# Hermes Agent 项目简报 — 2026-10-23

## 今日概览

Hermes Agent 今日开发活跃度很高，**过去24小时内更新了50个issue和50个PR**。活动在最近合并的 `unified-gateway-runtime` 功能（10月14日合并 #106742）所带来的bug修复和新功能开发之间保持平衡。本期没有发布新版本。项目当前有45个活跃issue和29个open PR，其中21个PR已成功合并/关闭。多个安全相关项目和会话管理bug占据了主要注意力，表明重点在于稳定性和安全性改进。

## 版本发布

**没有新版本** — 项目在过去24小时内没有发布任何版本。最新的稳定版本仍为 v0.22.4（2026-09-24）。

---

## 项目进展

### 本期合并/关闭的PR（21个）

| PR | 标题 | 领域 |
|----|-----|------|
| [#143283](https://github.com/NousResearch/hermes-agent/pull/143283) | fmt(js): `npm run fix` auto-fix | Desktop/TUI |
| [#143292](https://github.com/NousResearch/hermes-agent/pull/143292) | Windows desktop builds compile cold-cache sdists again | Desktop/Windows |


| [#88007](https://github.com/NousResearch/hermes-agent/pull/88007) | fix(cron): stamp Desktop session as origin so watches can mirror | Desktop/Cron |
| [#99847](https://github.com/NousResearch/hermes-agent/pull/99847) | fix(desktop): show Files tree when workspace ownership lock is stale | Desktop |
| [#88171](https://github.com/NousResearch/hermes-agent/pull/88171) | fix(transports): harmonize tool result name with assistant tool call | Agent/MCP |
| [#91017](https://github.com/NousResearch/hermes

-agent/pull/91017) | fix(shell-hooks): resolve chat cwd via file-tool workspace ladder | Agent |
| [#88002](https://github.com/NousResearch/hermes-agent/pull/88002) | fix(desktop): pin Kanban board slug so header matches cards | Desktop |
| [#87972](https://github.com/NousResearch/hermes-agent/pull/87972) | fix(desktop): make Show earlier and timeline jumps reach older turns | Desktop |
| [#87961](https://github.com/NousResearch/hermes-agent/pull/87961) | fix(tui): never send skill slashes through the slash worker | TUI |
| [#143248](https://github.com/NousResearch/hermes-agent/pull/143248) | feat(connectors): no guest on page open, connector sign-in offer | Desktop/Auth |
| [#143236](https://github.com/NousResearch/hermes-agent/pull/143236) | feat(desktop): sign-in result shows who signed in | Desktop/Auth |
| [#143235](https://github.com/NousResearch/hermes-agent/pull/143235) | feat(auth): every Nous sign-in is the plain device login | Auth |
| [#143234](https://github.com/NousResearch/hermes-agent/pull/143234) | feat(auth): hand the free-tier guest to the account after sign-in | Auth |

**关键主题：** 在 Nous 身份验证/认证系统、Desktop UI 修复和 Windows 构建改进方面取得了重大进展。

### 值得关注的 Open PR

- **[#143146](https://github.com/NousResearch/hermes-agent/pull/143146)** — 浏览器自动化重构：移除 `agent-browser` 和内置的 `browser_*` 工具，Camofox 迁移为插件
- **[#143319](https://github.com/NousResearch/hermes-agent/pull/143319)** — 新插件：用于搜索归档对话的 Agent Vault
- **[#143314](https://github.com/NousResearch/hermes-agent/pull/143314)** — 新 VPS 运维命令：`/metrics`、`/audit`、`/tailscale`、`/apt-update`
- **[#143317](https://github.com/NousResearch/hermes-agent/pull/143317)** — Telegram `/purge` 命令用于删除最近消息
- **[#143300](https://github.com/NousResearch/hermes-agent/pull/143300)** — 邮件回复主题现在跟随被回复的消息（修复 #143299）

---

## 社区热点话题

### 评论数最多的活跃 Issue

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)** — **213 条评论** — unified-gateway-runtime 合并后修复跟踪 Issue（P0）
   - *背景：* 这是 10 月 14 日合并的 `feat/unified-gateway-runtime` 功能的中央跟踪 Issue，涵盖 CLI、gateway、sessions 和 desktop 组件的合并后 bug。

2. **[#141346](https://github.com/NousResearch/hermes-agent/issues/141346)** — **33 条评论** — 安全问题：智能审批自动批准了删除未保存 PowerPoint 的 osascript（P3）
   - *背景：* 一起严重的安全事件，默认的 `smart` 审批模式自动批准了危险的 `osascript` 命令，导致数据无法恢复。引发了人们对审批系统安全性的担忧。

3. **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — **15 条评论** — 通过规范化主题实现邮件会话隔离（P3）
   - *背景：* 改进邮件网关会话处理的功能请求。目前将来自同一发件人的所有消息视为一个连续会话。

4. **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)** — **14 条评论** — 写入时的内存预算强制执行（P3，需要决策）
   - *背景：* 关键架构问题：`MEMORY.md`/`USER.md` 被注入每个回合，但没有大小预算或接受测试。

5. **[#68680](https://github.com/NousResearch/hermes-agent/issues/68680)** — **8 条评论** — 为 Docusaurus 文档添加 pt-BR 语言环境（P3）
   - *背景：* 来自巴西葡萄牙语用户的国际化请求。

---

## Bug 与稳定性

### 本期报告的严重/高优先级 Bug

| Issue | 严重程度 | 描述 | 修复 PR？ |
|-------|----------|------|----------|
| **[#143290](https://github.com/NousResearch/hermes-agent/issues/143290)** | P2 | 对已完成的运行调用 POST /v1/runs/{id}/stop 会干扰下一个回合 — 消息被静默丢弃 | 无 |
| **[#142849](https://github.com/NousResearch/hermes-agent/issues/142849)** | P2 | 窗口拥有的请求对主共享配置文件的会话超时 | 无 |
| **[#143197](https://github.com/NousResearch/hermes-agent/issues/143197)** | P2 | X-Hermes-Session-Key 被忽略，每个请求都创建新的 api-* 会话 | 无 |
| **[#142731](https://github.com/NousResearch/hermes-agent/issues/142731)** | P2 | 因 admission_conflict 暂停的会话永远不会恢复 — 409 错误一直存在 | 无 |
| **[#143313](https://github.com/NousResearch/hermes-agent/issues/143313)** | P2 | pip install -e . 在 Python 3.14 上无法满足（Pillow 冲突） | 无 |
| **[#143256](https://github.com/NousResearch/hermes-agent/issues/143256)** | P2 | 托管房间驱动即使没有房间也会为每个配置运行一个 5 秒线程 | 无 |
| **[#143268](https://github.com/NousResearch/hermes-agent/issues/143268)** | P2 | 本地 Kanban notify+wake 永远无法到达会话 FIFO | 无 |

### 安全问题

- **[#141346](https://github.com/NousResearch/hermes-agent/issues/141346)** — 智能审批自动批准了危险 osascript 命令（数据丢失）
- **[#143229](https://github.com/NousResearch/hermes-agent/issues/143229)** — `hermes security` 报告了关于固定版本 certifi/aiohttp/pillow 的严重发现（pillow 被 browser-harness 阻塞）

### 值得关注的附带修复的 Bug

- **[#137944](https://github.com/NousResearch/hermes-agent/issues/137944)** — edge-tts==7.2.7 在 Microsoft Sec-MS-GEC 轮换后返回 403；7.3.0 已修复（上游）
- **[#143300](https://github.com/NousResearch/hermes-agent/pull/143300)** — 邮件回复主题修复（已合并）

---

## 功能请求与路线图信号

### 活跃的功能请求

| Issue | 优先级 | 请求 |
|-------|--------|------|
| **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** | P3 | 通过规范化主题实现邮件会话隔离 |
| **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)** | P3 | 内存预算强制执行和写入时的接受测试管道 |
| **[#68680](https://github.com/NousResearch/hermes-agent/issues/68680)** | P3 | 为文档添加 pt-BR 语言环境 |
| **[#126292](https://github.com/NousResearch/hermes-agent/issues/126292)** | P3 | 支持双向代理的原生 Android 和 iOS 应用 |
| **[#142834](https://github.com/NousResearch/hermes-agent/issues/142834)** | P2 | 对通用 write_file 操作的审批门 |

### 下一版本的信号

open 状态 PR 表明近期重点在：
- **插件生态系统扩展** — Agent Vault 插件、VPS 运维命令
- **平台特定改进** — Windows MSIX 烟雾测试改进、Telegram 增强
- **认证流程** — 完整的 Nous 登录改革（本期已合并多个 PR）

---

## 用户反馈总结

### 发现的痛点

1. **智能审批的安全顾虑** — 用户对默认审批设置允许破坏性操作而无需确认感到震惊。这涉及到对代理安全边界的信任。

2. **会话管理脆弱** — 多个问题（#142731、#143290、#143197）表明 unified-gateway-runtime 合并后会话状态管理存在问题。用户遇到消息丢失、会话卡住和意外创建新会话的情况。

3. **Windows 兼容性差距** — Python 3.14 依赖冲突、MSIX 构建问题和 MAX_PATH 限制给 Windows Desktop 用户带来障碍。

4. **配置复杂性** — #143288（视觉提供者固定）和 #143315/#143316（压缩配置）等 issues 表明用户难以理解辅助功能如何继承设置。

### 满意度信号

- 身份验证改进方面的活跃开发表明用户对更好的身份管理有需求
- 多个 Desktop UI 修复（文件树、Kanban、时间线）显示出对桌面体验的响应能力
- 插件生态系统扩展（Agent Vault、Camofox）表明第三方集成健康发展

---

## 积压关注

### 长期未回复的重要 Issues

| Issue | 存在时间 | 优先级 | 状态 |
|-------|----------|--------|------|
| [#18809](https://github.com/NousResearch/hermes-agent/issues/18809) — os.walk(followlinks=True) 在循环符号链接上无限循环 | 约5个月 | P3 | Open |
| [#58778](https://github.com/NousResearch/hermes-agent/issues/58778) — MCP 表单 elicitation 返回空内容 | 约3个月 | P2 | Open |

### 需要维护者关注的 Issues

- **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)** — 内存预算强制执行（需要决策标签）
- **[#126292](https://github.com/NousResearch/hermes-agent/issues/126292)** — 原生移动应用（需要战略决策）
- **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — 邮件会话隔离（5个多月，功能需要设计）

---

*数据来源：NousResearch/hermes-agent GitHub，2026-10-23*

---</think>

# Hermes Agent 项目简报 — 2026-10-23

## 今日概览

Hermes Agent 今日开发活跃度很高，**过去24小时内更新了50个issue和50个PR**。活动在最近合并的 `unified-gateway-runtime` 功能（10月14日合并 #106742）所带来的bug修复和新功能开发之间保持平衡。本期没有发布新版本。项目当前有45个活跃issue和29个open PR，其中21个PR已成功合并/关闭。多个安全相关项目和会话管理bug占据了主要注意力，表明重点在于稳定性和安全性改进。

## 版本发布

**没有新版本** — 项目在过去24小时内没有发布任何版本。最新的稳定版本仍为 v0.22.4（2026-09-24）。

---

## 项目进展

### 本期合并/关闭的PR（21个）

| PR | 标题 | 领域 |
|----|-----|------|
| [#143283](https://github.com/NousResearch/hermes-agent/pull/143283) | fmt(js): `npm run fix` auto-fix | Desktop/TUI |
| [#143292](https://github.com/NousResearch/hermes-agent/pull/143292) | Windows desktop builds compile cold-cache sdists again | Desktop/Windows |
| [#88007](https://github.com/NousResearch/hermes-agent/pull/88007) | fix(cron): stamp Desktop session as origin so watches can mirror | Desktop/Cron |
| [#99847](https://github.com/NousResearch/hermes-agent/pull/99847) | fix(desktop): show Files tree when workspace ownership lock is stale | Desktop |
| [#88171](https://github.com/NousResearch/hermes-agent/pull/88171) | fix(transports): harmonize tool result name with assistant tool call | Agent/MCP |
| [#91017](https://github.com/NousResearch/hermes-agent/pull/91017) | fix(shell-hooks): resolve chat cwd via file-tool workspace ladder | Agent |
| [#88002](https://github.com/NousResearch/hermes-agent/pull/88002) | fix(desktop): pin Kanban board slug so header matches cards | Desktop |
| [#87972](https://github.com/NousResearch/hermes-agent/pull/87972) | fix(desktop): make Show earlier and timeline jumps reach older turns | Desktop |
| [#87961](https://github.com/NousResearch/hermes-agent/pull/87961) | fix(tui): never send skill slashes through the slash worker | TUI |
| [#143248](https://github.com/NousResearch/hermes-agent/pull/143248) | feat(connectors): no guest on page open, connector sign-in offer | Desktop/Auth |
| [#143236](https://github.com/NousResearch/hermes-agent/pull/143236) | feat(desktop): sign-in result shows who signed in | Desktop/Auth |
| [#143235](https://github.com/NousResearch/hermes-agent/pull/143235) | feat(auth): every Nous sign-in is the plain device login | Auth |
| [#143234](https://github.com/NousResearch/hermes-agent/pull/143234) | feat(auth): hand the free-tier guest to the account after sign-in | Auth |

**关键主题：** 在 Nous 身份验证/认证系统、Desktop UI 修复和 Windows 构建改进方面取得了重大进展。

### 值得关注的 Open PR

- **[#143146](https://github.com/NousResearch/hermes-agent/pull/143146)** — 浏览器自动化重构：移除 `agent-browser` 和内置的 `browser_*` 工具，Camofox 迁移为插件
- **[#143319](https://github.com/NousResearch/hermes-agent/pull/143319)** — 新插件：用于搜索归档对话的 Agent Vault
- **[#143314](https://github.com/NousResearch/hermes-agent/pull/143314)** — 新 VPS 运维命令：`/metrics`、`/audit`、`/tailscale`、`/apt-update`
- **[#143317](https://github.com/NousResearch/hermes-agent/pull/143317)** — Telegram `/purge` 命令用于删除最近消息
- **[#143300](https://github.com/NousResearch/hermes-agent/pull/143300)** — 邮件回复主题现在跟随被回复的消息（修复 #143299）

---

## 社区热点话题

### 评论数最多的活跃 Issue

1. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)** — **213 条评论** — unified-gateway-runtime 合并后修复跟踪 Issue（P0）
   - *背景：* 这是 10 月 14 日合并的 `feat/unified-gateway-runtime` 功能的中央跟踪 Issue，涵盖 CLI、gateway、sessions 和 desktop 组件的合并后 bug。

2. **[#141346](https://github.com/NousResearch/hermes-agent/issues/141346)** — **33 条评论** — 安全问题：智能审批自动批准了删除未保存 PowerPoint 的 osascript（P3）
   - *背景：* 一起严重的安全事件，默认的 `smart` 审批模式自动批准了危险的 `osascript` 命令，导致数据无法恢复。引发了人们对审批系统安全性的担忧。

3. **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — **15 条评论** — 通过规范化主题实现邮件会话隔离（P3）
   - *背景：* 改进邮件网关会话处理的功能请求。目前将来自同一发件人的所有消息视为一个连续会话。

4. **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)** — **14 条评论** — 写入时的内存预算强制执行（P3，需要决策）
   - *背景：* 关键架构问题：`MEMORY.md`/`USER.md` 被注入每个回合，但没有大小预算或接受测试。

5. **[#68680](https://github.com/NousResearch/hermes-agent/issues/68680)** — **8 条评论** — 为 Docusaurus 文档添加 pt-BR 语言环境（P3）
   - *背景：* 来自巴西葡萄牙语用户的国际化请求。

---

## Bug 与稳定性

### 本期报告的严重/高优先级 Bug

| Issue | 严重程度 | 描述 | 修复 PR？ |
|-------|----------|------|----------|
| **[#143290](https://github.com/NousResearch/hermes-agent/issues/143290)** | P2 | 对已完成的运行调用 POST /v1/runs/{id}/stop 会干扰下一个回合 — 消息被静默丢弃 | 无 |
| **[#142849](https://github.com/NousResearch/hermes-agent/issues/142849)** | P2 | 窗口拥有的请求对主共享配置文件的会话超时 | 无 |
| **[#143197](https://github.com/NousResearch/hermes-agent/issues/143197)** | P2 | X-Hermes-Session-Key 被忽略，每个请求都创建新的 api-* 会话 | 无 |
| **[#142731](https://github.com/NousResearch/hermes-agent/issues/142731)** | P2 | 因 admission_conflict 暂停的会话永远不会恢复 — 409 错误一直存在 | 无 |
| **[#143313](https://github.com/NousResearch/hermes-agent/issues/143313)** | P2 | pip install -e . 在 Python 3.14 上无法满足（Pillow 冲突） | 无 |
| **[#143256](https://github.com/NousResearch/hermes-agent/issues/143256)** | P2 | 托管房间驱动即使没有房间也会为每个配置运行一个 5 秒线程 | 无 |
| **[#143268](https://github.com/NousResearch/hermes-agent/issues/143268)** | P2 | 本地 Kanban notify+wake 永远无法到达会话 FIFO | 无 |

### 安全问题

- **[#141346](https://github.com/NousResearch/hermes-agent/issues/141346)** — 智能审批自动批准了危险 osascript 命令（数据丢失）
- **[#143229](https://github.com/NousResearch/hermes-agent/issues/143229)** — `hermes security` 报告了关于固定版本 certifi/aiohttp/pillow 的严重发现（pillow 被 browser-harness 阻塞）

### 值得关注的附带修复的 Bug

- **[#137944](https://github.com/NousResearch/hermes-agent/issues/137944)** — edge-tts==7.2.7 在 Microsoft Sec-MS-GEC 轮换后返回 403；7.3.0 已修复（上游）
- **[#143300](https://github.com/NousResearch/hermes-agent/pull/143300)** — 邮件回复主题修复（已合并）

---

## 功能请求与路线图信号

### 活跃的功能请求

| Issue | 优先级 | 请求 |
|-------|--------|------|
| **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** | P3 | 通过规范化主题实现邮件会话隔离 |
| **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)** | P3 | 内存预算强制执行和写入时的接受测试管道 |
| **[#68680](https://github.com/NousResearch/hermes-agent/issues/68680)** | P3 | 为文档添加 pt-BR 语言环境 |
| **[#126292](https://github.com/NousResearch/hermes-agent/issues/126292)** | P3 | 支持双向代理的原生 Android 和 iOS 应用 |
| **[#142834](https://github.com/NousResearch/hermes-agent/issues/142834)** | P2 | 对通用 write_file 操作的审批门 |

### 下一版本的信号

open 状态 PR 表明近期重点在：

- **插件生态系统扩展** — Agent Vault 插件、VPS 运维命令
- **平台特定改进** — Windows MSIX 烟雾测试改进、Telegram 增强
- **认证流程** — 完整的 Nous 登录改革（本期已合并多个 PR）

---

## 用户反馈总结

### 发现的痛点

1. **智能审批的安全顾虑** — 用户对默认审批设置允许破坏性操作而无需确认感到震惊。这涉及到对代理安全边界的信任。

2. **会话管理脆弱** — 多个问题（#142731、#143290、#143197）表明 unified-gateway-runtime 合并后会话状态管理存在问题。用户遇到消息丢失、会话卡住和意外创建新会话的情况。

3. **Windows 兼容性差距** — Python 3.14 依赖冲突、MSIX 构建问题和 MAX_PATH 限制给 Windows Desktop 用户带来障碍。

4. **配置复杂性** — #143288（视觉提供者固定）和 #143315/#143316（压缩配置）等 issues 表明用户难以理解辅助功能如何继承设置。

### 满意度信号

- 身份验证改进方面的活跃开发表明用户对更好的身份管理有需求
- 多个 Desktop UI 修复（文件树、Kanban、时间线）显示出对桌面体验的响应能力
- 插件生态系统扩展（Agent Vault、Camofox）表明第三方集成健康发展

---

## 积压关注

### 长期未回复的重要 Issues

| Issue | 存在时间 | 优先级 | 状态 |
|-------|----------|--------|------|
| [#18809](https://github.com/NousResearch/hermes-agent/issues/18809) — os.walk(followlinks=True) 在循环符号链接上无限循环 | 约5个月 | P3 | Open |
| [#58778](https://github.com/NousResearch/hermes-agent/issues/58778) — MCP 表单 elicitation 返回空内容 | 约3个月 | P2 | Open |

### 需要维护者关注的 Issues

- **[#135039](https://github.com/NousResearch/hermes-agent/issues/135039)** — 内存预算强制执行（需要决策标签）
- **[#126292](https://github.com/NousResearch/hermes-agent/issues/126292)** — 原生移动应用（需要战略决策）
- **[#26277](https://github.com/NousResearch/hermes-agent/issues/26277)** — 邮件会话隔离（5个多月，功能需要设计）

---

*数据来源：NousResearch/hermes-agent GitHub，2026-10-23*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this English project digest into Chinese. I need to:
1. Translate the content while preserving all Markdown structure
2. Keep all technical terms, usernames, issue numbers, URLs, etc. as-is
3. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate section by section:

## Today's Overview
- Replace "The project" with "本项目"
- Keep all the technical details about PRs and issues
- Make it flow naturally in Chinese

## Releases
- Simple: "暂无新版本发布"

## Project Progress
- Translate descriptions but keep usernames, PR numbers, URLs as-is
- Use Chinese punctuation within Chinese text

## Community Hot Topics
- Translate discussions but keep technical terms
- Keep issue numbers, URLs

## Bugs & Stability
- Translate while keeping PR numbers

## Feature Requests & Roadmap Signals
- Translate features and roadmap items

## User Feedback Summary
- Translate pain points

## Backlog Watch
- Translate observations

Let me now produce the full translation:</think>

# IronClaw 项目动态 — 2026-10-23

## 今日概览

IronClaw 保持较高的开发活跃度，过去 24 小时内有 50 个拉取请求处于更新状态，均为待合并状态。项目在多个方向稳步推进：基础设施完善（ARM64 Docker 支持已完成）、智能体能力增强（自验证机制、网络搜索自动启用）以及 WebUI 优化（设计系统文档、会话事件传输）。今日未发布新版本。Issue 活动较少，共 2 条更新（1 条新建，1 条已关闭），呈现稳定的维护模式。依赖更新节奏保持活跃，共有 6 个 dependabot PR 针对 Rust、JavaScript 和 Python 生态中的各类库。

## 发布动态

过去 24 小时内暂无新版本发布。

## 项目进展

项目关闭 1 个 Issue，推进了 50 个拉取请求，涵盖功能开发、缺陷修复和依赖维护：

- **#3168 [已关闭]** — 为 Docker 构建添加 arm64/aarch64 平台支持 — 作者：gcaguilar — 官方 IronClaw Docker 镜像现可在 ARM64 机器上运行；Cranelift WASM JIT 已支持 aarch64，完成了平台对齐。

- **#8010 [开放]** — 会话事件传输统一与 Web 应用运行完成通知 — 作者：BenKurrek — 实现已批准的设计方案，统一 WebUI 会话事件传输，采用类型化流协议和承载认证复用；启用 Web 应用运行完成通知。

- **#6232 [开放]** — 自动启用 web-access 与 Brave 网络搜索 — 作者： pranavraja99 — 修复 reborn 智能体以自动启用网络搜索能力，使智能体能自主发现真实网络搜索功能，无需手动启用。

- **#6093 [开放]** — 自验证通道 + benchmark_default 配置 — 作者： pranavraja99 — 为 reborn 的智能体循环添加门控自验证通道，支持基准测试运行时的可配置启用。

- **#5298 [开放]** — 综合测试工具修复（聚合评估） — 作者： pranavraja99 — 打包多项测试工具修复，用于 reborn + DeepSeek-V4-Flash 的聚合基准评估。

- **#7831 [开放]** — 将 Storybook 发布到 Chromatic 作为非阻塞 lane — 作者： rdisandro — 建立视觉组件文档的 CI 流水线。

## 社区热点

当前最受讨论的话题集中在智能体性能优化和基础设施可靠性方面：

- **#8153 [开放]** — 每日 ironclaw 失败分类 — 2026-10-22 — 作者： pranavraja99 — 每日失败分析追踪 officeqa 基准中的 64 个未通过任务，主要是 DeepSeek-V4-Flash 真正的模型质量问题。显示系统性失败分类工作正在进行中。 — https://github.com/nearai/ironclaw/issues/8153

- **#5450 [开放]** — 精简 frugal 默认 read/grep 输出以减少携带上下文 — 作者： pranavraja99 — 提议缩小每次调用的工具输出，以减少跨轮次携带的上下文，避免被驱逐。 — https://github.com/nearai/ironclaw/pull/5450

- **#5353 [开放]** — 提高 http.save 体能限制以支持大文件下载 — 作者： pranavraja99 — 修复智能体测试工具中大文件下载失败的问题，避免导致超时循环和 0 分。 — https://github.com/nearai/ironclaw/pull/5353

- **#7994 [开放]** — DESIGN.md 治理规范 + Storybook 指南 — 作者： rdisandro — 将 M3 Expressive 设计语言确立为权威来源，并建立 IronClaw 实现治理规范。 — https://github.com/nearai/ironclaw/pull/7994

## 缺陷与稳定性

过去 24 小时内暂无明确标注严重级别的缺陷报告。不过多个 PR 正在处理稳定性和正确性问题：

- **#5353** — http.save 体能限制修复 — 解除大文件下载失败导致的超时循环问题（对基准分数有中等程度影响）。
- **#7974** — 安全取消标记观察 — 修复模型投影中遗留的观察形状损坏问题。
- **#7945** — 保留 MCP 工具大小写敏感名称 — 确保 CamelCase 工具在安装存储重启后仍能正确执行。

所有已识别的稳定性问题均有修复 PR（#5353、#7974、#7945）。

## 功能请求与路线图信号

正在开发的关键功能暗示了近期路线图的优先事项：

1. **自验证能力**（#6093） — 门控自验证通道表明对答案质量和可靠性的关注。
2. **网络搜索自动启用**（#6232） — 使网络访问能力民主化，暗示降低用户摩擦的优先级。
3. **会话事件传输统一**（#8010） — WebUI 基础设施投资表明对实时体验的改进。
4. **学习审查路由**（#7958） — 运行后学习审查路径，采用提供商中立方案，持续完善智能体改进机制。
5. **运行时可替换组件**（#7510） — 架构设计文档提议运行时组件替换的灵活性。

这些共同表明 IronClaw 的路线图侧重于智能体可靠性、用户体验和可扩展性。

## 用户反馈摘要

基于 Issue 和 PR 活动，真实的用户痛点包括：

- **平台限制**：ARM64 机器用户无法运行官方 Docker 镜像 — #3168 已完成修复。
- **大文件下载失败**：智能体在大文件下载时超时循环，导致分数为 0 — #5353 正在修复。
- **上下文管理**：携带的上下文导致效率降低 — #5450 正在处理。
- **网络搜索可发现性**：智能体无法找到网络搜索功能 — #6232 正在修复。
- **MCP 工具大小写敏感**：重启后 CamelCase 工具名称失效 — #7945 正在修复。

原始数据中未捕捉到明确的满意度/不满意度情感指标。

## 待办关注

以下项目需要维护者关注，但过去 24 小时内暂无更新：

- **#1339** — ARMv7（32 位）限制追踪 — #3168 中提及仍未解决；可能影响 32 位 ARM 用户。
- 长尾依赖更新等待审查 — 6 个 dependabot PR（#8154、#8140、#8150、#8141、#8152 等）需要维护者决定合并。
- 多个大型 PR（#8010、#7831、#6232、#7516、#7958、#7976、#6093）处于审查中，可能影响下一个版本的发布范围——可能需要优先安排 sprint 末期合并。

所有 50 个活跃 PR 仍保持开放状态，表明要么是分阶段发布策略，要么是审查瓶颈。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English QwenPaw project digest into Simplified Chinese, following specific rules about translation. Let me carefully translate while preserving the structure, formatting, and technical terms.

Key translation decisions:
- "QwenPaw" - keep as is
- "GitHub" - keep as is
- Issue/PR numbers - keep as is (#8371, etc.)
- URLs - keep as is
- Technical terms - translate naturally, e.g., "CORS" keep as is, "gateway timeout" → 网关超时
- "release" → 发布
- "merge/closed" → 已合并/已关闭
- Use Chinese punctuation (，。：；""）
- Use Chinese headings but keep English section numbers

Let me translate section by section:</think>

# QwenPaw 项目简报 — 2026-10-23

## 1. 今日概览

QwenPaw 今天保持高活动度，过去 24 小时内有 12 个 Issue 和 26 个 PR 更新。**v2.2.2.post1** 版本已发布，修复了关键安全漏洞（emSign CA 信任问题和 Node.js 22.23.4 更新），团队正在积极合并容器部署、CORS 配置和网关超时等方面的修复。然而，多个升级后的 Bug 影响 QQ 频道、模型调用和 pytest 收集，表明回归测试存在缺口。项目今天有 6 个 PR 已合并/关闭，维护势头强劲，但仍有 20 个开放 PR 表明功能开发正在并行推进。

---

## 2. 发布动态

### v2.2.2.post1 — 安全补丁版本
**发布日期：** 2026-10-22  
**类型：** 事后安全修复

**主要变更：**
- **[安全] emSign CA 信任修复** — 修复了依赖项、安装程序和构建流程中的证书信任问题 ([#8370](https://github.com/agentscope-ai/QwenPaw/pull/8370))
- **[安全] Node.js 升级** — 升级至 22.23.4，修复 CVE-2026-111497 和 CVE-2026-105481 ([#8371](https://github.com/agentscope-ai/QwenPaw/pull/8371))
- **版本号更新** — 正式版本号更新为 v2.2.2.post1 ([#8369](https://github.com/agentscope-ai/QwenPaw/pull/8369))

**迁移说明：** 强烈建议用户立即升级。本次发布修复了证书链和 Node.js 运行时中的安全漏洞。

---

## 3. 项目进展

### 已合并/关闭的 PR（6 个）
| PR | 标题 | 状态 |
|----|-----|------|
| [#8371](https://github.com/agentscope-ai/QwenPaw/pull/8371) | fix(security): update Node.js to 22.23.4 | 已关闭 |
| [#8370](https://github.com/agentscope-ai/QwenPaw/pull/8370) | fix(security): remediate emSign CA trust | 已关闭 |
| [#8369](https://github.com/agentscope-ai/QwenPaw/pull/8369) | chore: bump version to v2.2.2post1 | 已关闭 |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | feat(plugins): add clean unload and rollback-safe hot reload | 已关闭 |

### 正在活跃的 PR
- **#8389** — 修复 CORS origins 运行时加载问题（修复 Web UI/CLI 设置不生效的问题）
- **#8387** — 使 Hub 网关超时可配置（默认 600s，修复 #8372）
- **#8384** — 修复 Hub 在容器中运行时无法连接 Docker 运行时的问题（修复 #8359）
- **#7874** — PawApp SDK 重大重构，控制平面重新设计
- **#8187** — 将 channels 提取为插件，使用子进程隔离
- **#8373** — 桌面端共享守护进程（独立窗口 + 协调更新）
- **#8224** — 实验性 Python 代码模式
- **#8380** — 新增 106 个前端单元测试文件（+1,811 条语句，+4.97% 覆盖率）

---

## 4. 社区热点话题

### Issue #8275 — Hub 全局 Skill 与 MCP 管理
**状态：** 开放 | 👍 1 | 评论: 2  
**URL:** https://github.com/agentscope-ai/QwenPaw/issues/8275

**摘要：** 用户希望 Hub 支持全局 Skill 和 MCP 配置，供所有团队成员共享，避免每个用户重复配置。这解决了团队部署场景中常见的痛点，需要集中管理通用 Skill 和 MCP。

### PR #8387 — 网关超时配置
**状态：** 开放 | 修复 #8372  
**URL:** https://github.com/agentscope-ai/QwenPaw/pull/8387

**摘要：** 将 Hub 模型网关超时默认值从 120s 提高到 600s，以适应长时间运行的文件处理任务。

### PR #8373 — 桌面端共享守护进程
**状态：** 开放 | 规模: XXXL  
**URL:** https://github.com/agentscope-ai/QwenPaw/pull/8373

**摘要：** 架构调整，将运行时所有权移入独立的原生守护进程，支持独立的桌面窗口并实现协调更新——解决了运行多个实例时的主要 UX 问题。

---

## 5. Bug 与稳定性

### 关键 Bug（升级后回归）

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|----------|------|---------|
| **#8388** — 升级后 QQ 频道失败（"No module named '_qwenpaw_remote_backend'"） | **严重** | 开放 | — |
| **#8378** — 升级后模型调用异常（agent.json 配置不匹配） | **严重** | 开放 | — |
| **#8377** — 全新 checkout 后 pytest 中止（导入文件不匹配：test_backup） | **高** | 开放 | #8379 |
| **#8374** — QWENPAW_CORS_ORIGINS 未生效（在环境变量加载前已读取） | **高** | 开放 | #8389 |
| **#8359** — 容器内 Docker 运行时连接失败（硬编码 127.0.0.1） | **高** | 开放 | #8384 |
| **#8368** — 删除当前会话返回 404 | **中** | 开放 | #8375 |

### 其他 Bug
- **#8365** — Matrix 频道每次启动都使用密码重新认证
- **#7339** — 桌面端流式输出时自动滚动无法禁用

**评估：** 升级后 Bug 集中出现（#8388、#8378）表明近期发布在模块结构或 agent 配置解析方面引入了破坏性变更。pytest 收集问题（#8377）阻塞了本地开发验证。

---

## 6. 功能请求与路线图信号

### 高优先级功能请求

1. **#8275** — Hub 全局 Skill/MCP 管理
   - *预测：* 很可能被优先处理，符合团队部署用例；与 Hub 集中化趋势一致
   - *路线图信号：* 可能出现在 v2.3.x

2. **#7339** — 流式输出时禁用自动滚动设置
   - *预测：* 小型 UI 功能，很可能在下个补丁中实现
   - *路线图信号：* 桌面端 UX 优化

3. **#8376** — PowerContext 记忆支持与 Artifact API
   - *状态：* 开放 PR，扩展 PowerContext 后端集成

4. **#8224** — 实验性 Python 代码模式
   - *状态：* 活跃的 XXXL PR，重要的架构新增
   - *路线图信号：* 可能作为预览版出现在 v2.3.0

### 正在积极开发中
- 插件热重载（#7565，已合并）
- Channel 插件化提取（#8187）
- PawApp SDK 重构（#7874）

---

## 7. 用户反馈摘要

### 发现的痛点
1. **升级后功能损坏** — 多位用户报告升级到 v2.2.2 后功能异常（QQ 频道、模型调用）。这是今天最严重的用户摩擦点。
2. **网关超时过短** — 处理大文件的 Hub 用户频繁遇到 120s 超时限制
3. **容器部署复杂** — Hub 运行在 Docker 内的用户面临 Docker 运行时连接问题
4. **配置持久化不生效** — 通过 Web UI/CLI 设置的 CORS origins 未生效（加载时机问题）
5. **桌面端多实例管理** — 用户希望独立窗口运行但无运行时冲突

### 积极信号
- 安全响应迅速（v2.2.2.post1 与漏洞发现同日发布）
- 测试覆盖率显著提升（+106 文件，+4.97%）
- 功能开发保持强劲节奏（多个 XXXL PR 正在推进）

---

## 8. 待处理事项

### 需要维护者关注的问题

| Issue | 时长 | 状态 | 问题 |
|-------|------|------|------|
| [#8388](https://github.com/agentscope-ai/QwenPaw/issues/8388) — 升级后 QQ 频道故障 | 1 天 | 开放 | **严重：** 用户阻塞性回归 |
| [#8378](https://github.com/agentscope-ai/QwenPaw/issues/8378) — 模型调用异常 | 1 天 | 开放 | **严重：** 升级后回归 |
| [#8377](https://github.com/agentscope-ai/QwenPaw/issues/8377) — pytest 收集失败 | 1 天 | 开放 | **高：** 阻塞贡献者入门 |
| [#8275](https://github.com/agentscope-ai/QwenPaw/issues/8275) — 全局 Skill/MCP | 7 天 | 开放 | 功能请求，需要评审 |

### 长期未合并的 PR（>1 周，仍开放）
- **#7874** — PawApp SDK 重构（XXXL，自 2026-09-19 起）
- **#8187** — Channel 插件化提取（XXXL，自 2026-10-12 起）
- **#8224** — Python 代码模式（XXXL，自 2026-10-13 起）

---

*基于 2026-10-23 的 GitHub 活动数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese, following specific rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, project names, issue/PR references verbatim
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate while maintaining all the structure and technical terms.</think>

# ZeroClaw 项目简报 — 2026-10-23

## 1. 今日概览

ZeroClaw 保持高开发强度，过去 24 小时内 **50 个 issue 和 50 个 PR** 有所更新。项目正在积极准备两个版本：**v0.8.7**（聚焦稳定性修复，涉及插件、渠道和 CI 优化）和 **v0.9.0**（主要功能版本，涉及运行时、仪表板登录和网关投递）。目前有多个高优先级的安全和稳定性 bug 正在处理中，同时 Goal 模式 V1 提案的基础设施工作也在推进中。本日无新版本发布。

---

## 2. 版本发布

本日无新版本发布。最近的版本仍是 **v0.8.6**。即将发布的版本：

- **v0.8.7** — 正在开发中；聚焦插件修复、渠道改进、CI 优化
- **v0.9.0** — 大版本，跟踪运行时、仪表板登录和网关投递工作（[Issue #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）

---

## 3. 项目进展

**今日合并/关闭的 PR（共计 8 个）：**

| PR | 摘要 | 目标版本 |
|---|---------|---------|
| [#11906](https://github.com/zeroclaw-labs/zeroclaw/pull/11906) | 修补 Wasmtime 48.0.7 的 RUSTSEC-2026-0375..0379 | — |
| [#11967](https://github.com/zeroclaw-labs/zeroclaw/pull/11967) | 仅在 PR 自身版本升级时运行 crates.io 预检 | — |
| [#11833](https://github.com/zeroclaw-labs/zeroclaw/pull/11833) | 限制 arm64 构建内存，为 docker-publish 添加 dry-run | v0.8.7 |
| [#11941](https://github.com/zeroclaw-labs/zeroclaw/pull/11941) | 将 cranelift 运行时腿超时延长至 30 分钟 | v0.8.7 |
| [#11841](https://github.com/zeroclaw-labs/zeroclaw/pull/11841) | 使 v0.8.6 OIDC 措辞与 In brief 保持一致 | v0.8.7 |
| [#11848](https://github.com/zeroclaw-labs/zeroclaw/pull/11848) | 在 plugin_channel_sender_denied 记录中标注发送者名称 | v0.8.7 |
| [#11863](https://github.com/zeroclaw-labs/zeroclaw/pull/11863) | 将 receipt-bound late_tool_search 测试改为可选加入 | v0.8.7 |
| [#11928](https://github.com/zeroclaw-labs/zeroclaw/issues/11928) | 任务：移除 gateway bind 测试中的 released-port 竞态 | v0.8.7 |

**主要进展：**
- **安全加固**：为 5 个 RustSec  advisory 打了 Wasmtime 补丁；shell 命令解析现已在替换/子shell 边界处分割（[#11994](https://github.com/zeroclaw-labs/zeroclaw/pull/11994)）
- **CI 可靠性**：Cranelift 超时延长；arm64 Docker 构建内存受限；crates.io 预检逻辑修复
- **插件系统**：在拒绝日志中记录发送者名称；late_tool_search 测试改为可选

---

## 4. 社区热点

评论最多的 Issue/PR（表明活跃讨论）：

| Issue/PR | 标题 | 评论数 | 链接 |
|----------|-------|----------|------|
| Issue #7432 | [追踪]：运行时、仪表板登录和网关投递 | 15 | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| Issue #10526 | RFC：追加式会话事件历史、确定性状态回放 | 13 | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) |
| Issue #9101 | 统一发布证明机制 | 10 | [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) |
| Issue #10999 | [任务]：发布并验证 Discord 插件安装 | 9 | [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) |

**分析：**
- **v0.9.0 路线图**（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）是运行时和网关工作的核心追踪 issue — 讨论最活跃
- **RFC #10526** 提议重大架构变更：追加式会话历史 + 确定性回放 + 派生 agent 流 — 解决长期状态管理问题
- **发布证明统一**（[#9101]）反映了因冗余 CI/签名流程带来的运维痛点
- **Discord 插件**（[#10999]）虽被阻塞但接近完成 — 表明社区对插件生态兴趣浓厚

---

## 5. Bug 与稳定性

**高优先级 bug（P0/P1, S0/S1）：**

| Issue | 严重度 | 标题 | 状态 | 修复 PR? |
|-------|----------|-------|--------|---------|
| [#11951](https://github.com/zeroclaw-labs/zeroclaw/issues/11951) | S2 | 网关 WebSocket 升级在内置 TLS 上失败 | OPEN | — |
| [#11932](https://github.com/zeroclaw-labs/zeroclaw/issues/11932) | S0 | 容器 CA 证书包仍信任已吊销的 emSign 链 | OPEN | — |
| [#11902](https://github.com/zeroclaw-labs/zeroclaw/issues/11902) | S2 | JWKS 获取期间有效 OIDC token 被拒绝 | CLOSED | — |
| [#11898](https://github.com/zeroclaw-labs/zeroclaw/issues/11898) | S2 | 守护进程首次启动可能缺少 RPC 会话存储 | CLOSED | — |
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | S2 | 配置刷新可能覆盖并发写入 | OPEN | — |
| [#11357](https://github.com/zeroclaw-labs/zeroclaw/issues/11357) | S2 | `plugin remove` 删除了错误的目录 | CLOSED | — |
| [#11327](https://github.com/zeroclaw-labs/zeroclaw/issues/11327) | S2 | 插件工具名门控竞态条件 | CLOSED | — |
| [#11608](https://github.com/zeroclaw-labs/zeroclaw/issues/11608) | S1 | Telegram 监听器在请求进入黑洞时卡死 | OPEN | — |
| [#11959](https://github.com/zeroclaw-labs/zeroclaw/issues/11959) | S1 | 大小写不敏感文件系统上的 Unix 空设备回归测试失败 | OPEN | — |

**关键观察：**
- **网关可靠性**：TLS 监听器上 WebSocket 升级失败（[#11951]）和套接字在 reload 后仍存活（[#11709]）表明网关生命周期存在问题
- **插件系统**：插件移除和工具名门控多个 bug — 表明插件系统正在经历加固阶段
- **安全**：emSign CA 链虽已吊销但仍在容器镜像中 — 需要重建镜像
- 大多数 P1 bug 已是关闭状态，表明维护工作积极进行

---

## 6. 功能请求与路线图信号

**活跃的功能开发：**

| Issue/PR | 功能 | 目标版本 | 状态 |
|----------|---------|---------|--------|
| [#11878](https://github.com/zeroclaw-labs/zeroclaw/pull/11878) | Goal 模式 V1 持久化任务生命周期基础 | v0.9.0 | OPEN |
| [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879) | 休眠配置和命令语法（Goal V1 2/12） | v0.9.0 | OPEN |
| [#11679](https://github.com/zeroclaw-labs/zeroclaw/issues/11679) | zerocode 通过 mTLS 平面获取自己的 bearer token | v0.9.0 | OPEN |
| [#11938](https://github.com/zeroclaw-labs/zeroclaw/issues/11938) | 邮件渠道：回复时引用原消息 | — | OPEN |
| [#11992](https://github.com/zeroclaw-labs/zeroclaw/issues/11992) | 邮件渠道：运营者模板 + send_via 净化 HTML | — | OPEN |
| [#11995](https://github.com/zeroclaw-labs/zeroclaw/issues/11995) | 恢复拥有的后台委托，包含主体作用域结果 | v0.9.0 | OPEN |

**路线图信号：**
- **Goal 模式 V1** 是 v0.9.0 的主导主题 — 12 部分提案系列正在推进（[#11878](https://github.com/zeroclaw-labs/zeroclaw/pull/11878), [#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879)）
- **邮件渠道** 持续获得投入（引用回复、模板、HTML 净化）
- **身份/访问**：zerocode 通过 mTLS 自主提供 bearer token 表明聚焦于零信任远程访问

---

## 7. 用户反馈总结

从 issue 活动可见的痛点：

| 痛点 | 证据 | 严重度 |
|------------|----------|----------|
| **网关 reload 不稳定** | WebSocket 升级失败（[#11951]），套接字在 reload 后仍存活（[#11709]） | 高 |
| **插件移除体验** | 删除错误目录（[#11357]），中断后无恢复（[#11810]） | 中 |
| **Docker arm64 构建** | 链接阶段内存不足被 kill（[#11828]） | 中 |
| **OIDC 误配置假阳性** | JWKS 获取期间有效 token 被拒（[#11902]） | 中 |
| **邮件渠道功能限制** | 无 CC/回复全部（[#9506]），无消息引用（[#11938]） | 低-中 |
| **Discord 插件安装** | 被阻塞数月，验证复杂（[#10999]） | 低-中 |

**积极信号：**
- Discord 插件已在 v0.8.6 上验证 — 接近完成
- 安全加固工作活跃（shell 解析、CA 证书包、Wasmtime 补丁）
- CI 可靠性工作进行中（超时、内存限制、预检逻辑）

---

## 8. 待办关注

需要维护者关注的长期待办或暂停事项：

| Issue | 标题 | 创建时间 | 状态 | 备注 |
|-------|-------|-----|--------|-------|
| [#8844](https://github.com/zeroclaw-labs/zeroclaw/issues/8844) | 为内存跨度嵌套添加 process_message 轮次生命周期 | 2026-07-08 | Parking Lot | 继 #8752；需要确定优先级 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 运行时、仪表板登录和网关投递追踪器 | 2026-06-09 | 已接受 | 活跃中 — v0.9.0 核心追踪 |
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC：追加式会话事件历史 | 2026-09-01 | 已接受 | 架构 RFC — 高影响 |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 统一发布证明机制 | 2026-07-16 | 已接受 | CI 效率 — 20+ 资源 vs 53 |

**建议：**
- **#8844**：决定内存跨度嵌套是否在 v0.9.0 路径上或降低优先级
- **#9101**：高价值 CI 优化 — 考虑专门的冲刺关注
- **#10526**：RFC 已接受；需要实现负责人

---

*简报基于 2026-10-23 的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*