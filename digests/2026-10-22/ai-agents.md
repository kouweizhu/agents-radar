# OpenClaw 生态日报 2026-10-22

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-22 00:50 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English OpenClaw Project Digest into Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, issue/PR references as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure.

Key things to translate:
- Headings
- Body text
- Tables (but keep numbers as-is)
- Issue titles
- Release highlights

Let me go through it section by section:

## 1. Today's Overview
OpenClaw 在 2026 年 10 月 22 日表现出高活动度，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。发布版本 v2026.10.10-beta.3 解决了 Windows 可靠性问题，包括 SQLite 辅助窗口隐藏和 Gateway 启动修复。issue 队列包含 270 个开放和 230 个已关闭，而 PR 显示 90 个开放和 410 个已合并/关闭——表明吞吐量强劲。然而，若干 P0 错误仍然存在（围绕内存管理、SQLite WAL 膨胀），更新失败继续影响 Windows 和 Linux 平台。

## 2. Releases
保持原样

## 3. Project Progress
保持原样

## 4. Community Hot Topics
社区热点

## 5. Bugs & Stability
错误与稳定性

## 6. Feature Requests & Roadmap Signals
功能请求与路线图信号

## 7. User Feedback Summary
用户反馈总结

## 8. Backlog Watch
积压关注

Let me translate the full content now.</think>

# OpenClaw 项目简报 — 2026-10-22

## 1. 今日概览

OpenClaw 在 2026 年 10 月 22 日表现出高活动度，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。发布版本 v2026.10.10-beta.3 解决了 Windows 可靠性问题，包括 SQLite 辅助窗口隐藏和 Gateway 启动修复。issue 队列包含 270 个开放和 230 个已关闭，而 PR 显示 90 个开放和 410 个已合并/关闭——表明吞吐量强劲。然而，若干 P0 错误仍然存在（围绕内存管理、SQLite WAL 膨胀），更新失败继续影响 Windows 和 Linux 平台。

## 2. 发布版本

**v2026.10.10-beta.3** — openclaw 2026.10.10-beta.3

**更新亮点：**

- Windows 可靠性改进：恢复fresh state初始化和Gateway启动
- 应用更新期间隐藏SQLite辅助窗口
- 强制重装Gateway现在可容忍launcher时间戳settling

*参考：* [Release #176194](https://github.com/openclaw/openclaw/issues/176194), [#174969](https://github.com/openclaw/openclaw/issues/174969), [#176174](https://github.com/openclaw/openclaw/issues/176174), [#176945](https://github.com/openclaw/openclaw/issues/176945)

## 3. 项目进展

近期合并/关闭的PR推进了关键领域：

- **#180002** — test(core,plugins): 移除低价值测试（第四批d413） — 内部测试维护
- **#178869** — fix(update): 不阻塞legacy sqlite_stat4表的升级 — 解决 #178584
- **#179969** — fix(update): 为legacy STAT4保留完整备份fallback — 更新可靠性
- **#166044** — fix(update): 在finalization期间保留SQLite等待配额 — 更新稳定性
- **#167785** — fix(update): Android/Termux更新拒绝未更改的plugin文件 — 平台特定修复
- **#160246** — feat(plugins): 添加可选的公司MCP内置 — 66个集成
- **#160245** — fix(mcp): 在CLI中发现已启用的plugin服务器 — MCP服务器发现

*参考：* [#180002](https://github.com/openclaw/openclaw/pull/180002), [#178869](https://github.com/openclaw/openclaw/pull/178869), [#179969](https://github.com/openclaw/openclaw/pull/179969), [#166044](https://github.com/openclaw/openclaw/pull/166044)

## 4. 社区热点

最活跃的讨论：

| Issue | 评论数 | 主题 |
|-------|----------|-------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 134 | SQLite WAL 膨胀至 1.4–2.8 GB，尽管设置了 wal_autocheckpoint=1000；在Windows上阻止gateway启动 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | 24 | prepared-model-catalog.worker.js 中无界内存泄漏，约 4-5 GB/小时 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 22 | Plugin source capture 每个CLI命令重写 1.1–1.4 GB（SSD磨损） |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | 15 | Gateway内存锯齿波；prepared-model-catalog worker触及堆上限 |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) | 14 | 配置热重载中止进行中的agent回合 |

**分析：** 社区高度关注**资源管理问题**——SQLite WAL膨胀、内存泄漏、以及plugin source capture造成的过度磁盘I/O。这些P0/P1问题表明gateway长期运行进程和plugin生命周期管理存在系统性问题。

## 5. 错误与稳定性

**关键（P0）错误：**

| Issue | 严重性 | 状态 | 修复PR？ |
|-------|----------|--------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL膨胀 (2.8 GB) | P0, gold shrimp | 开放 | 无 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) 内存泄漏 4-5 GB/小时 | P0, silver shellfish | 开放 | 无 |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) Gateway阻塞事件循环40-200秒，触发重启循环 | P0, platinum hermit | 开放 | 无 |
| [#158912](https://github.com/openclaw/openclaw/issues/158912) MEMORY.md未在bootstrap时注入 | P0 | 开放 | 无 |
| [#170928](https://github.com/openclaw/openclaw/issues/170928) Windows 2026.10.2 gateway需要7-9分钟才能ready | P1, silver shellfish | 开放 | 无 |

**近期更新失败（P0-ux-release-blocker）：**

- [#179183](https://github.com/openclaw/openclaw/issues/179183) — 更新失败：gateway-recovery-verification (2026.10.5)
- [#153094](https://github.com/openclaw/openclaw/issues/153094) — 更新失败：runtime-verification-failed (2026.9.4)
- [#154924](https://github.com/openclaw/openclaw/issues/154924) — 更新失败：global-install-failed (2026.9.4)

**注意：** 关键内存/SQLite问题未发现修复PR。多个平台（Windows和Linux）的更新失败报告持续存在。

## 6. 功能请求与路线图信号

**活跃的功能PR/Issue：**

- [#162164](https://github.com/openclaw/openclaw/issues/162164) — 功能：iOS/macOS可选个人身份（10评论）
- [#156632](https://github.com/openclaw/openclaw/issues/156632) — 功能：为Swarm agents.run添加有界启动契约
- [#81913](https://github.com/openclaw/openclaw/issues/81913) — 功能：为已安装skill工作流公开稳定的plugin SDK surface
- [#14785](https://github.com/openclaw/openclaw/issues/14785) — 增强：减少工具schema token开销（约3,500 tok/会话）

**可能近期重点：** 鉴于v2026.10.10-beta.3的Windows修复，团队可能优先处理稳定性。内存管理和更新可靠性修复可能会出现在下一个稳定版本中。

## 7. 用户反馈总结

**痛点：**

1. **Windows不稳定** — 用户报告启动需要7-9分钟，gateway无响应，以及更新失败（#170928, #179183）
2. **资源耗尽** — SQLite数据库膨胀至2.8 GB；内存泄漏4-5 GB/小时；过度SSD写入（每次操作1-6 GB）
3. **更新失败** — 多个平台特定升级失败：global-install-failed, runtime-verification-failed, gateway-recovery-verification
4. **消息丢失** — Telegram适配器在网络故障时丢弃消息；多车道负载下会话回复丢失

**满意信号：** UI重构（Solid采用）进展顺利，多个PR在推进（#180094, #179742, #179947）。MCP插件发现和公司集成（#160246）受到好评。

## 8. 积压关注

**长期未解决的重要Issue：**

| Issue | 时长 | 状态 | 关注点 |
|-------|-----|--------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) SQLite WAL膨胀 | 自2026-09-09 | 开放（134评论） | 无修复PR；P0发布阻断 |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) 追踪：2026.9.3/2026.9.4更新可靠性 | 自2026-09-11 | 开放（13评论） | 协调问题；多个关联失败 |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) minimax-portal升级后丢失模型目录 | 自2026-09-19 | 开放（13评论） | P0，退化 |
| [#126906](https://github.com/openclaw/openclaw/issues/126906) 拒绝写工具静默禁用内存持久化 | 自2026-08-21 | 开放（6评论） | 数据丢失风险 |

**需要维护者关注的PR：**

- [#180023](https://github.com/openclaw/openclaw/pull/180023) — refactor(ui): 用JSX渲染共享模态桥（等待作者）
- [#180084](https://github.com/openclaw/openclaw/pull/180084) — fix(release): 拒绝发布FRV dispatch（ready for maintainer）
- [#179919](https://github.com/openclaw/openclaw/pull/179919) — perf(ui): 恢复Control UI启动headroom（等待作者）

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese (Simplified Chinese based on the context - "Chinese developer newsletter" and the system message mentions Chinese). I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, project names, version tags, etc. verbatim
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the formatting and technical terms.</think>

# 跨项目对比报告 — 个人 AI 助手与智能体生态系统

**日期：** 2026 年 10 月 22 日

---

## 1. 生态系统概览

个人 AI 助手与智能体开源领域正在进入**整合阶段**，各项目呈现出差异化的架构选择。整体上可分为两大方向：**桌面集成助手**（OpenClaw、Hermes Agent、QwenPaw）注重丰富的 UI/UX 体验，以及**基础设施层框架**（IronClaw、ZeroClaw）专注于多智能体编排和协议互通。五个项目的共同关注点包括内存安全加固、MCP（Model Context Protocol）采用，以及提升长时间运行智能体的可靠性。整体生态在技术路径上呈现多样性，但在平台一致性（Windows/macOS/Linux）、资源管理和更新可靠性方面面临共同挑战。

---

## 2. 活跃度对比

| 项目 | Issue（24h） | PR（24h） | Release（24h） | 最新版本 | 活跃度 |
|------|--------------|-----------|----------------|----------|--------|
| **OpenClaw** | 500 | 500 | 1 | v2026.10.10-beta.3（Windows 修复） | 🔥 **极高** |
| **Hermes Agent** | 50 | 50 | 2 | v0.22.4、v0.22.3 | 🟢 高 |
| **ZeroClaw** | 37 | 50 | 0 | 近期无 | 🟢 高 |
| **QwenPaw** | 14 | 30 | 0 | v2.2.2（10 月 15 日） | 🟡 中等 |
| **IronClaw** | 1 | 2 | 0 | 无 | 🔴 低 |

**健康度推导**（Issue/PR 比率 + 近期 Release + 关键缺陷数量）：

- **OpenClaw：** 中等健康度 — 高迭代速度但有 5+ 个 P0 级缺陷未解决；3 个活跃更新失败
- **Hermes Agent：** 良好健康度 — 稳定的发布节奏；安全依赖项待处理但有积极跟进
- **ZeroClaw：** 良好健康度 — 今日合并了活跃的缺陷修复；2 个 P0 级内存安全缺陷待处理
- **QwenPaw：** 中等健康度 — 4 个高危缺陷开放；多个 XXXL 特性正在开发中
- **IronClaw：** 低可见度 — 数据不足以充分评估；社区活动极少

---

## 3. OpenClaw 的定位

### 相对优势

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|------|----------|--------------|----------|---------|----------|
| **社区规模** | 主导（日均 500 issue/PR） | 较大（日均 50） | 较大（日均 50） | 中等（日均 30） | 极少 |
| **发布节奏** | Beta 驱动（频繁） | 稳定（双周补丁） | 不规律 | 稳定（小版本补丁） | 无 |
| **成熟度** | v2026.10（生产级） | v0.22.x（成熟） | v0.8.x（成长期） | v2.x（成熟） | 早期（1.0 前） |
| **平台支持** | Windows 优先 | 跨平台 | 桌面 + Hub | 桌面优先 | API/SDK 优先 |

### 技术路线差异

- **OpenClaw** 优先保障 Windows 可靠性和 SQLite/WAL 调优 —— 在深度平台特定优化方面独树一帜
- **Hermes Agent** 引领 MCP 生态和 PawApp 市场 —— 定位为通用桌面助手
- **ZeroClaw** 投入内存隔离和多智能体安全 —— 零信任内存架构独树一帜
- **QwenPaw** 推进实时语音和频道插件 —— 实时多模态能力差异化
- **IronClaw** 瞄准基础设施/链抽象 —— 最小化作用域、最高抽象层级

### 社区规模对比

OpenClaw 的活跃量是 Hermes Agent 和 ZeroClaw 的 **10 倍**，是 IronClaw 的 **35 倍**。然而这一指标需要细致分析：OpenClaw 的量级包含内部 Issue 跟踪，而 Hermes Agent 和 ZeroClaw 显示更高的 **PR 合并比率**（分别为 11/50 和 7/50），表明代码输出更为聚焦。

---

## 4. 共同技术关注点

### 内存与安全隔离

**五个项目**都在积极解决内存安全问题：

| 项目 | Issue | 关注点 |
|------|-------|--------|
| OpenClaw | #159662 | 内存泄漏（4-5 GB/小时）工作线程中 |
| OpenClaw | #143524 | SQLite WAL 膨胀（2.8 GB） |
| Hermes Agent | #134889 | 网关合并后会话所有权 |
| ZeroClaw | #9647、#11198 | 每智能体知识图谱归属 |
| QwenPaw | #8361 | 内存搜索重复调用 |

**启示：** 内存管理是有状态、长时间运行智能体系统的普遍挑战。预计将在有界内存池、WAL 检查点调优和每智能体归属模式上趋同。

### 平台可靠性（Windows/Linux/macOS）

**五个项目中的四个**报告了平台特定故障：

- **OpenClaw：** Windows 启动延迟（7-9 分钟），更新失败
- **Hermes Agent：** macOS launchd/launcher 问题，cron PATH 问题
- **QwenPaw：** Windows 视频/图像生成故障
- **ZeroClaw：** Docker 运行时硬编码 localhost

**启示：** 跨平台测试基础设施不足。各项目需要跨操作系统版本的自动化矩阵测试。

### MCP（Model Context Protocol）采用

| 项目 | MCP 集成 |
|------|----------|
| OpenClaw | 插件源捕获（1.1-1.4 GB/CLI） |
| Hermes Agent | MCP 服务器发现、配置文件作用域调度防护 |
| IronClaw | 显式可信环回端点注册 |
| ZeroClaw | 工具出口声明 |

**启示：** MCP 正在成为工具/函数调用的实际标准。各项目正竞相实现最新规范。

### 更新与发布可靠性

| 项目 | 更新失败（活跃） |
|------|-----------------|
| OpenClaw | 3（网关恢复、运行时验证、全局安装） |
| Hermes Agent | 0（近期） |
| ZeroClaw | 0（近期） |
| QwenPaw | 0（近期） |

**启示：** OTA 更新技术复杂。OpenClaw 的问题可为他人提供最佳实践参考。

---

## 5. 差异化分析

### 特性焦点

| 项目 | 主要差异化 | 次要差异化 |
|------|-----------|-----------|
| **OpenClaw** | 桌面优先；深度 Windows 集成 | SQLite 性能调优 |
| **Hermes Agent** | PawApp 生态；MCP 插件市场 | Solid.js 桌面 UI |
| **ZeroClaw** | 零信任内存隔离；A2A 协议 | 多智能体编排 |
| **QwenPaw** | 实时语音；频道插件（飞书/Discord） | Orchestrator/Reasoner/Executor 模式 |
| **IronClaw** | 链抽象；提供商灵活性 | 最小化占用 |

### 目标用户

- **OpenClaw：** 普通消费者、Windows 桌面用户
- **Hermes Agent：** 开发者、追求可扩展性的高级用户
- **ZeroClaw：** 部署多智能体系统的企业团队
- **QwenPaw：** 中国市场用户、多模态交互爱好者
- **IronClaw：** 基础设施工程师、区块链/加密开发者

### 技术架构

| 架构类型 | 项目 | 特性 |
|---------|------|------|
| **桌面集成** | OpenClaw、Hermes Agent、QwenPaw | Electron/Solid UI、本地 SQLite、网关运行时 |
| **API/SDK 优先** | IronClaw | 最小化 UI、云原生、可编程 |
| **混合** | ZeroClaw | 桌面 + Hub 部署、安全优先 |

---

## 6. 社区动能与成熟度

### 活跃度层级

| 层级 | 项目 | 速度 | 指标 |
|------|------|------|------|
| **快速迭代** | OpenClaw | 日均 500 issue/PR | 高缺陷速度、频繁 Beta 发布 |
| **活跃开发** | Hermes Agent、ZeroClaw | 日均 50 | 规律发布、RFC 流程活跃 |
| **成熟期** | QwenPaw | 日均 30 | v2.x 功能冻结、缺陷修复重点 |
| **早期/稳定** | IronClaw | 日均 1-2 | 最小变动、维护模式 |

### 发布稳定性

- **最稳定：** Hermes Agent（可预测的双周补丁）
- **快速发布周期：** OpenClaw（Beta 驱动，约每周）
- **不规律：** ZeroClaw、QwenPaw（就绪时发布）
- **无：** IronClaw（数据集中无公开 Release）

### 项目发展轨迹

- **OpenClaw：** 稳定阶段 — 在正式版发布前修复 P0 内存/SQLite 问题
- **Hermes Agent：** 特性扩展 — PawApp 市场、A2A 集成
- **ZeroClaw：** 安全加固 — 内存隔离、出口可靠性
- **QwenPaw：** 多模态推进 — 实时语音、频道插件
- **IronClaw：** 早期阶段 — 建立核心抽象

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **内存隔离是刚性需求**
   - 证据：ZeroClaw（#9647）、Hermes Agent（#134889）、QwenPaw（#8361）
   - 信号：多智能体部署需要严格的每智能体内存边界

2. **MCP 采用加速**
   - 证据：5 个项目都有活跃的 MCP 相关 PR 或 Issue
   - 信号：工具/函数调用正在围绕 MCP 协议整合

3. **跨平台一致性仍难以实现**
   - 证据：5 个项目中有 4 个报告平台特定故障
   - 信号：需要行业范围内投资测试基础设施

4. **更新可靠性是主要痛点**
   - 证据：OpenClaw 有 3 个并发更新失败跟踪
   - 信号：OTA 更新需要专门的工程投入

5. **企业级特性渐成气候**
   - 证据：ZeroClaw A2A 协议 RFC、IronClaw 链抽象、Hermes Agent 企业集成
   - 信号：市场正从消费者向 B2B/生产用例转变

6. **资源边界至关重要**
   - 证据：OpenClaw WAL 膨胀（2.8 GB）、Hermes 内存泄漏、ZeroClaw 循环检测
   - 信号：长时间运行智能体需要明确的资源治理（内存上限、WAL 调优、线程限制）

### 对智能体开发者的价值

| 结论 | 可执行洞察 |
|------|-----------|
| 内存安全是已解决但未实现的问题 | 研究 ZeroClaw 的隔离架构 |
| MCP 是新兴标准 | 对齐工具定义与 MCP 规范 |
| 平台测试投入产出比高 | 投资跨 Windows/macOS/Linux 的 CI 矩阵 |
| 更新系统需要专门工程 | 分配 10-15% 工程资源到 OTA/发布流水线 |
| 语音/多模态即将爆发 | QwenPaw 的实时语音 PR 预示市场就绪 |

---

*本报告基于 2026 年 10 月 22 日的 GitHub 活动数据编制。*

---

**规则：**
- 仅输出翻译内容。不需要前言、说明或整个输出的 markdown 代码块。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、分隔线、emoji。
- 保留 URL、链接目标、代码片段、代码块、数字和日期原样。
- 保留项目名称、仓库标识、用户名、版本标签、文件路径和 API/配置标识的原始形式 —— 不翻译它们。
- 使用自然的技术中文，中国开发者技术通讯的语调 —— 而非逐字直译。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest into Chinese while preserving the exact Markdown structure, URLs, code references, and technical terms. Let me translate this carefully, keeping the format intact and using natural technical Chinese.

Let me go through each section and translate appropriately:

1. Title and header information
2. Today's Overview
3. Releases
4. Project Progress
5. Community Hot Topics
6. Bugs & Stability
7. Feature Requests & Roadmap Signals
8. User Feedback Summary
9. Backlog Watch

I need to:
- Keep all headings
- Keep the table structure exactly
- Keep URLs, issue numbers, PR numbers as-is
- Keep technical terms in English where appropriate
- Use natural technical Chinese phrasing</think>

# Hermes Agent 项目摘要

**日期：** 2026-10-22  
**仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日概览

Hermes Agent 保持高度活跃，过去 24 小时内更新了 50 个 issue 和 50 个 PR。项目于 2026 年 10 月 21 日发布了两个补丁版本（v0.22.4 和 v0.22.3），修复了桌面 UI 问题并汇总了约 620 个合并的 PR。社区参与度很高，统一网关运行时（unified gateway runtime）的追踪 issue #134889 生成了 212 条评论。安全漏洞管理仍是重点，多个依赖相关安全公告仍在处理中。项目开发节奏健康，已合并/关闭 5 个 PR，45 个待处理。

---

## 2. 发布版本

### v0.22.4 — 2026 年 10 月 21 日

**发布说明：** 修复桌面 UI 和插件/仪表板问题的补丁版本。

**更新内容：**
- 桌面端不再在输入框上方显示建议气泡
- 小幅修复插件和仪表板问题
- 支持：CLI、安装程序、Microsoft Store 应用、Docker、Hermes Cloud

**链接：**
- [Release v0.22.4](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.4)

---

### v0.22.3 — 2026 年 10 月 21 日

**发布说明：** 汇总自 v0.22.2 以来约 620 个合并 PR 的补丁版本。

**更新内容：**
- 主要整合版本
- 完整的精选说明将随 v0.23.0 附带
- 支持：CLI、安装程序、Microsoft Store 应用、Docker、Hermes Cloud

**链接：**
- [Release v0.22.3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.3)

---

## 3. 项目进展

### 已合并/关闭的 PR（5 个）

| PR | 标题 | 状态 |
|----|-----|------|
| #131381 | fix(tools): isolate skill view deduplication by profile | CLOSED |
| #119636 | fix(website): patch 16 OSV findings in transitive dependencies | CLOSED |

### 重点待处理 PR

| PR | 标题 | 关注领域 |
|----|-----|---------|
| #142816 | feat(mcp): require profile-scoped dispatch guards before transport | MCP 安全 |
| #142815 | chore(catalog): re-pin hermes-guide to v0.8.6 | 依赖管理 |
| #142814 | feat(desktop): name the prompt and magnify the selected mark in the timeline rail | 桌面 UI |
| #142563 | feat(delegation): pluggable delegation backends | 架构设计 |
| #142561 | refactor(terminal): Singularity backend moves to plugin | 插件系统 |
| #142498 | fix(dingtalk): cache inbound media locally | 平台适配器 |

**链接：**
- [所有待处理 PR](https://github.com/NousResearch/hermes-agent/pulls)
- [PR #131381](https://github.com/NousResearch/hermes-agent/pull/131381)
- [PR #119636](https://github.com/NousResearch/hermes-agent/pull/119636)

---

## 4. 社区热点话题

### 讨论最活跃的 Issue

| Issue | 标题 | 评论数 | 分类 |
|-------|------|--------|------|
| #134889 | 追踪：统一网关拥有所有本地会话 — 合并后修复 | 212 | 架构设计 |
| #141346 | 智能审批自动批准 osascript 命令导致数据丢失 | 25 | 安全问题 |
| #122424 | package.json 锁定 js-yaml@4.3.1 到已知 CVE 范围 | 17 | 安全问题 |
| #91687 | [功能请求]：A2A 长时任务应返回 task id | 9 | 功能需求 |
| #108219 | httpx2==2.7.0 虽存在公开 GHSA 漏洞仍被锁定 | 8 | 安全问题 |

### 分析

**#134889（212 条评论）：** 统一网关运行时（unified gateway runtime，#106742）于 10 月 14 日合并。此追踪 issue 收集了本地会话管理相关的合并后修复问题。高评论数表明实际使用量很大，正在发现各种边缘情况。

**#141346（25 条评论）：** 关键安全事件，Hermes 的智能审批模式自动批准了删除未保存 PowerPoint 文件的 `osascript` 命令。这凸显了智能审批系统作用域边界的相关问题。

**安全依赖问题（#122424、#108219）：** 多个追踪 issue 反映存在已知 CVE 的过时锁定依赖，表明依赖管理存在技术债务。

**链接：**
- [Issue #134889](https://github.com/NousResearch/hermes-agent/issues/134889)
- [Issue #141346](https://github.com/NousResearch/hermes-agent/issues/141346)
- [Issue #122424](https://github.com/NousResearch/hermes-agent/issues/122424)
- [Issue #91687](https://github.com/NousResearch/hermes-agent/issues/91687)
- [Issue #108219](https://github.com/NousResearch/hermes-agent/issues/108219)

---

## 5. 缺陷与稳定性

### 严重/高优先级缺陷

| Issue | 标题 | 严重程度 | 状态 | 修复 PR？ |
|-------|------|----------|------|----------|
| #141346 | 智能审批自动批准破坏性 osascript 命令 | 安全事件 | OPEN | — |
| #142741 | launchd bootstrap 重试在已注册但未运行的网关上失败 | P2 | OPEN | — |
| #141919 | ACP 重新发送完整转换后的响应（重复回复） | P2 | OPEN | — |
| #141973 | 中途转向发送不可靠 — 排队而非引导 | P2 | OPEN | — |
| #142779 | session.resume 对 DirectSDK 提供商聊天失败 | P2 | OPEN | — |

### 平台特定缺陷

| Issue | 平台 | 标题 |
|-------|------|------|
| #142741 | macOS/launchd | 网关任务重启失败 |
| #142798 | Linux/WSL2 | 终端继承错误的环境变量 |
| #142487 | Matrix/WhatsApp | 入口丢弃非本地媒体的消息 |
| #140043 | 企业微信 | 超过 20KB 的流式回复被截断 |

### 安全公告（多个待处理）

- **#142307:** certifi 锁定信任了被入侵的 eMudhra 中间证书
- **#133711:** simple-git 3.36.0 命令注入漏洞
- **#135795:** multidict 6.7.1 内存泄漏（CVE-2026-104874）
- **#134394:** 多个存在公开公告的锁定依赖

**链接：**
- [Issue #141346](https://github.com/NousResearch/hermes-agent/issues/141346)
- [Issue #142741](https://github.com/NousResearch/hermes-agent/issues/142741)
- [Issue #141919](https://github.com/NousResearch/hermes-agent/issues/141919)
- [Issue #142307](https://github.com/NousResearch/hermes-agent/issues/142307)

---

## 6. 功能需求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| #91687 | A2A 长时任务应返回 task id | P3 | 启用异步 A2A 工作流 |
| #139961 | 桌面群组聊天迁移到网关托管房间的围栏隔离 | P2 | 桌面-网关集成 |
| #6642 | 统一遥测 + 延迟、成本、完成率分析 | P3 | 可观测性 |
| #11442 | 支持 GitHub Enterprise Server 上的 GitHub Copilot | P3 | 企业支持 |
| #141514 | （进行中）在原生运行器中回收自退出的 rg | P2 | 工具稳定性 |

### 架构进展

- **#142563/#142564：** 可插拔的委托后端 — 重大架构变更，将子代理委托变为提供商类别
- **#142561：** Singularity 后端移至官方插件 — 表明插件生态系统正在扩展

**预计下次发布（v0.23.0）：**
- A2A 长时任务的 task ID 支持
- 桌面群组聊天迁移工具
- 解决安全公告的依赖更新

**链接：**
- [Issue #91687](https://github.com/NousResearch/hermes-agent/issues/91687)
- [Issue #139961](https://github.com/NousResearch/hermes-agent/issues/139961)
- [Issue #6642](https://github.com/NousResearch/hermes-agent/issues/6642)
- [Issue #11442](https://github.com/NousResearch/hermes-agent/issues/11442)

---

## 7. 用户反馈总结

### 痛点识别

1. **智能审批越权** — 用户担忧默认的智能审批模式可能在未经明确同意的情况下授权破坏性操作
2. **依赖项陈旧** — 锁定依赖中存在多个安全公告，导致审计失败
3. **会话管理复杂性** — 统一网关运行后出现本地会话所有权问题
4. **平台不一致** — macOS/Windows/Linux 核心功能行为各异（launchd、PATH、cron）
5. **流式响应不可靠** — 企业微信和其他平台适配器截断长响应

### 使用场景模式

- **多配置文件使用：** 多路复用的配置文件共享资源相关问题较多
- **企业部署：** GHE Copilot 支持、自定义端点需求
- **插件生态系统：** 社区插件正在添加到目录（Severian 内存提供程序）

**链接：**
- [Issue #141346](https://github.com/NousResearch/hermes-agent/issues/141346)（智能审批）
- [Issue #134889](https://github.com/NousResearch/hermes-agent/issues/134889)（会话管理）

---

## 8. 待办事项关注

### 待回复的重要 Issue

| Issue | 标题 | 存在时间 | 状态 |
|-------|------|----------|------|
| #6642 | 统一遥测 + 分析 | 约 6 个月 | OPEN |
| #11442 | 支持 GHE 上的 GitHub Copilot | 约 6 个月 | OPEN |
| #61098 | 安全：移除锁定的 cryptography 46.0.7 | 约 3 个月 | CLOSED |

### 停滞/待审核的 PR

| PR | 标题 | 存在时间 | 备注 |
|----|------|----------|------|
| #56467 | fix: include Homebrew/Linuxbrew bin dirs in service PATH | 约 3 个月 | macOS cron PATH 问题 |

### 依赖安全债务

多个 issue 追踪存在公开 CVE 的锁定依赖：
- js-yaml、yaml、httpx2、httpcore2、certifi、simple-git、multidict、PyJWT、urllib3、oauthlib

这些代表需要协调更新的累积技术债务。

**链接：**
- [Issue #6642](https://github.com/NousResearch/hermes-agent/issues/6642)
- [Issue #11442](https://github.com/NousResearch/hermes-agent/issues/11442)
- [PR #56467](https://github.com/NousResearch/hermes-agent/pull/56467)

---

*摘要基于 2026-10-22 的 GitHub 活动数据生成*

---

规则：
- 仅输出翻译内容。不加前言、不加解释、不用 markdown 围栏包裹整个输出。
- 严格保留 Markdown 结构：标题、表格（含列对齐行）、列表、引用、粗体/斜体、水平线。
- 保留 URL、链接目标、代码片段、代码块、数字和日期不变。
- 保持项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原样——不翻译。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文，技术类新闻通讯的中文表达方式——而非逐字直译。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. I need to:

1. Translate all the text while keeping the Markdown structure
2. Preserve headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue numbers (#12345), repository names, etc. as-is
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation without any preamble or explanation
6. No markdown fences around the output

Let me translate section by section:

## 1. Today's Overview
翻译: 项目概览

## 2. Releases
翻译: 版本发布

## 3. Project Progress
翻译: 项目进展

## 4. Community Hot Topics
翻译: 社区热点话题

## 5. Bugs & Stability
翻译: BUG 与稳定性

## 6. Feature Requests & Roadmap Signals
翻译: 功能需求与路线图信号

## 7. User Feedback Summary
翻译: 用户反馈摘要

## 8. Backlog Watch
翻译: 待办事项关注

Now let me translate the full content:</think>

# IronClaw 项目简报 — 2026年10月22日

**仓库地址：** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**日期：** 2026年10月22日

---

## 1. 项目概览

过去24小时内，IronClaw 项目呈现温和的更新态势，共 **1个 Issue** 和 **2个 Pull Request** 出现更新。追踪的所有项目均保持 Open 状态——今日暂无合并或关闭记录。项目持续推进功能开发，相关 PR 涵盖了 MCP 端点配置和模型提供商默认设置等领域。无新版本发布表明项目可能正处于稳定维护阶段。社区互动主要聚焦于技术实现问题和增量改进。

---

## 2. 版本发布

过去24小时内无新版本发布。当前暂无已发布的版本可供报告。

---

## 3. 项目进展

过去24小时内无合并或关闭的 Pull Request。以下2个 PR 保持 Open 状态并处于活跃开发中：

| PR | 标题 | 状态 |
|----|-----|------|
| [#8147](https://github.com/nearai/ironclaw/pull/8147) | Allow explicit trusted enrollment of an exact loopback MCP endpoint | OPEN |
| [#4298](https://github.com/nearai/ironclaw/pull/4298) | feat: use MiniMax-M3.1-Flash as default text model | OPEN |

---

## 4. 社区热点话题

### 活跃 Issue

**#2077 — contract source for market near ai**  
[链接](https://github.com/nearai/ironclaw/issues/2077)  
作者: HavenCTO | 评论: 2 | 👍: 0

**摘要：** 某开发者请求发布 market.near.ai 的智能合约源代码。公开的使用场景是构建自主掌控密钥的链上主权 AI 代理。目前，与市场交互需要使用 HTTP API，造成了对中心化基础设施的依赖。

**分析：** 此 Issue 反映出链上自主代理架构的去中心化趋势。用户社区正在表达对链上透明度和可验证合约行为的需求——这是实现无需信任的代理操作的关键要求。2条评论表明维护者正在积极参与。

---

## 5. BUG 与稳定性

过去24小时内无 BUG、崩溃或回归问题报告。

---

## 6. 功能需求与路线图信号

### PR #8147 — Loopback MCP 端点支持
- **范围：** 支持精确 Loopback MCP 端点的显式可信注册
- **背景：** 本地 MCP 服务器无法使用托管 MCP bearer 认证，原因是注册、manifest 凭证、发现以及对 HTTP/IP 字面端点的网络策略限制
- **影响：** 扩展本地开发环境的部署灵活性
- **风险评估：** 规模: XS，风险: 低

### PR #4298 — MiniMax 模型默认更新
- **范围：** 将默认 MiniMax 模型更新为 M3.1-Flash，更新文档
- **背景：** 新的 MiniMax 配置应使用最新的 Flash 模型；已保存和显式选择的模型 ID 保持有效
- **影响：** 轻微的文档和默认值变更；向后兼容
- **风险评估：** 规模: XS，风险: low，范围: docs

**预测：** 鉴于 PR #8147 风险低且用例明确，预计将很快合并。MiniMax 默认更新 PR (#4298) 正在等待标准审查，不存在破坏性变更。

---

## 7. 用户反馈摘要

| 主题 | 证据 | 情绪 |
|------|------|------|
| 链上透明度 | Issue #2077 — 合约源代码请求 | 请求开放/去中心化 |
| 基础设施独立性 | Issue #2077 — 代理依赖问题 | 不满意中心化依赖 |
| 本地开发工具 | PR #8147 — loopback 端点支持 | 对扩展灵活性感到满意 |

**核心痛点：** 构建主权代理的用户需要合约源代码访问权限，以实现真正的链上自主。当前对 HTTP API 的依赖被视为一种限制。

---

## 8. 待办事项关注

24小时窗口内未发现需要维护者立即关注的长期待处理 Issue。Issue #2077（合约源代码请求）最近有更新（2026-10-21），表明正在积极处理。两个 Open PR 均于近期更新（2026-10-21），正在推进审查流程。

---

*简报结束。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese (Simplified Chinese). Let me translate the content while:
1. Preserving all Markdown structure exactly
2. Keeping URLs, numbers, issue/PR references as-is
3. Using natural technical Chinese, the register of a Chinese developer newsletter
4. Keeping headings, tables, lists, blockquotes, bold/italic, etc.

Let me go through each section and translate it appropriately.</think>

# QwenPaw 项目简报 — 2026-10-22

**仓库：** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日概览

QwenPaw 今日表现出**极高的开发活跃度**，过去 24 小时内共有 30 个 PR 和 14 个 Issue 更新。项目在多个方向同时推进：PawApp 生态集成、控制台体验优化以及运行时性能调优。今日未发布新版本。社区在功能开发和缺陷修复方面参与积极，其中 11 个 PR 已合并/关闭，19 个仍处于打开状态。多个稳定性相关的关键缺陷被报告，特别是 Windows 平台功能和容器化部署相关问题。

---

## 2. 版本发布

**今日无新版本发布。** 最新版本仍为 v2.2.2（2026-10-15）。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 类型 |
|----|------|------|
| [#8352](https://github.com/agentscope-ai/QwenPaw/pull/8352) | feat(acp): add --agent-mode to ACP | 新功能 |
| [#8327](https://github.com/agentscope-ai/QwenPaw/pull/8327) | fix(acp): preserve task results after long tool calls | Bug 修复 |
| [#8317](https://github.com/agentscope-ai/QwenPaw/pull/8317) | fix(observability): trace cancel reason and initiator in stop cascade | 可观测性 |

**主要进展：**
- **ACP Agent Mode** — 新增 `--agent-mode` 参数，支持以目标前缀初始化会话
- **任务持久化修复** — 长时间运行的工具调用现在能正确保存结果，解决了非零退出码问题
- **取消链路追踪** — 跨 Agent 取消操作现在会记录发起方和原因（修复 #8252）

---

## 4. 社区热点话题

### 活跃度最高的 Issue（按评论数）

| Issue | 标题 | 评论数 | 点赞 |
|-------|------|--------|------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | [功能建议] 建议添加webhook功能 | 10 | 👍 1 |
| [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) | [问题] qwenpaw creator能否支持使用阿里云百炼的token plan | 6 | — |
| [#8351](https://github.com/agentscope-ai/QwenPaw/issues/8351) | [Bug] Composer draft keyed per-agent instead of per-conversation | 3 | — |
| [#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807) | [Windows] Video/image generation and asset publishing cannot work | 3 | — |
| [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) | Agent间调用会话被静默取消（CancelledError） | 3 | — |

### 分析

- **Webhook 功能 (#338)** — 早在 2026 年 3 月提出的外部集成功能需求，评论数居高不下，反映出社区对双向外部通信的强烈需求。
- **阿里云 Token 计划 (#6973)** — 用户询问 QwenPaw Creator 是否支持阿里云百炼的 Token 计费方式，表明存在企业/部署场景需求。
- **草稿持久化 Bug (#8351)** — PR [#8362](https://github.com/agentscope-ai/QwenPaw/pull/8362) 已提交修复，解决会话间 UI 状态泄漏问题。

---

## 5. Bug 与稳定性

### 今日报告的关键缺陷

| Issue | 严重程度 | 状态 | 修复 PR |
|-------|----------|------|---------|
| [#8350](https://github.com/agentscope-ai/QwenPaw/issues/8350) — 飞书频道同步网络调用阻塞主事件循环 | **高** | 待处理 | — |
| [#8359](https://github.com/agentscope-ai/QwenPaw/issues/8359) — Docker 运行时启动失败（硬编码 127.0.0.1） | **高** | 待处理 | — |
| [#8279](https://github.com/agentscope-ai/QwenPaw/issues/8279) — 长生命周期 ReMe 监听器耗尽 AnyIO 线程限制 | **中高** | 待处理 | — |
| [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) — 自动内存搜索重复调用，拦截后无法正常回复 | **中** | 待处理 | — |
| [#8298](https://github.com/agentscope-ai/QwenPaw/issues/8298) — send_file_to_user 处理视频时永久阻塞会话 | **中** | 待处理 | [#8299](https://github.com/agentscope-ai/QwenPaw/pull/8299) |

### 已修复（PR 已合并）
- **#8225** — 配置热重载时 Cron 任务取消问题已通过 [#8317](https://github.com/agentscope-ai/QwenPaw/pull/8317) 修复
- **#8252** — CancelledError 日志改进已通过 [#8317](https://github.com/agentscope-ai/QwenPaw/pull/8317) 修复

---

## 6. 功能需求与路线图信号

### 活跃中的功能 PR

| PR | 功能 | 规模 | 状态 |
|----|------|------|------|
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | feat(voice): add realtime voice chat | XXXL | 待处理 |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | feat(pawapp): redesign SDK and app control plane | XXXL | 待处理 |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | feat(channels): extract channels into plugins with subprocess isolation | XXXL | 待处理 |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | feat(plugins): add clean unload and rollback-safe hot reload | XXXL | 待处理 |

### 新功能需求

| Issue | 需求 | 优先级信号 |
|-------|------|------------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | Webhook 集成实现外部回调 | 高社区关注（10 条评论） |
| [#8354](https://github.com/agentscope-ai/QwenPaw/issues/8354) | Hub 托管运行时支持 QWENPAW_* 环境变量 | 运维/管理场景需求 |
| [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) | 阿里云 Token 计费支持 | 企业级计费集成 |

**路线图信号：**
- **实时语音聊天** (#7785) 是 XXXL 级别的重大投入，表明多模态交互是战略重点
- **PawApp 生态** (#7874, #8363, #8364) 表明项目正推进可扩展应用市场的建设
- **插件架构** (#7565, #8187) 表明项目正朝着更好的隔离性和第三方可扩展性演进

---

## 7. 用户反馈摘要

### 痛点问题

1. **Windows 平台问题** — 用户反馈视频/图片生成和资源发布在 Windows 上完全无法使用（#6807）
2. **容器化部署摩擦** — Docker-in-Docker 场景因硬编码的本地地址而失败（#8359）
3. **定时任务体验** — 编辑 Cron 任务时显示 [object Object] 而非原始内容，时间被重置为 00:00（#8249, #8340）
4. **内存搜索行为** — 自动内存搜索产生重复调用，破坏正常响应生成（#8361）
5. **飞书频道阻塞** — 飞书频道中的同步网络调用在网络不可达时冻结整个服务（#8350）

### 服务场景
- 多 Agent 编排与跨 Agent 通信（Orchestrator/Reasoner/Executor 模式）
- 飞书（Lark）频道企业集成
- 容器化 Hub 部署
- Cron 定时自动化任务

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 存续时间 | 状态 | 风险 |
|-------|----------|------|------|
| [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) — Webhook 功能 | ~7 个月 | 待处理 | 长期未实现的功能需求，10 条评论 |
| [#6807](https://github.com/agentscope-ai/QwenPaw/issues/6807) — Windows 视频生成 | ~3 个月 | 已关闭 | 尽管已关闭仍有反馈；需确认修复有效 |
| [#6973](https://github.com/agentscope-ai/QwenPaw/issues/6973) — 阿里云 Token 计划 | ~2 个月 | 已关闭 | 未回复的功能问题 |

### 长期无更新的 PR
- [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)（实时语音）— 最后更新于 2026-10-21，但无评论
- [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565)（插件热重载）— XXXL 规模，需要审查资源投入

---

*基于 2026-10-22 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the entire project digest into Chinese while following specific rules. Let me translate it carefully, maintaining the exact Markdown structure, tables, and formatting while using natural technical Chinese.

Key points to remember:
1. Only output the translation, no preamble or explanation
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code, and technical terms as-is
4. Use natural technical Chinese register
5. Keep column alignment rows in tables

Let me translate section by section:</think>

# ZeroClaw 项目摘要 — 2026-10-22

## 1. 今日概览

ZeroClaw 今天展现出较高的开发活跃度，过去 24 小时内有 **37 个 issue** 和 **50 个 pull request** 更新。项目正在积极处理安全性和稳定性问题，修复并合并了多个高风险 bug（尤其是插件和网关子系统）。今天没有发布新版本，但 v0.8.7 和 v0.9.0 里程碑的工作仍在积极推进中。社区参与度很高，围绕内存隔离、供应商可靠性和 A2A 协议集成有多个 RFC 和增强提案引发讨论。

---

## 2. 发布动态

**今日无新版本发布。** 项目正在积极准备 v0.8.7（多个 PR 已标记为此版本），v0.9.0 仍是主要功能的目标版本，包括运行时仪表板登录和网关交付的全面改进。

---

## 3. 项目进展

以下 pull request **今日已合并/关闭**：

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#11852](https://github.com/zeroclaw-labs/zeroclaw/pull/11852) | fix(quickstart): 先问 endpoint 再问 model，并接收类型化的 model | S | ✅ 已合并 |
| [#11840](https://github.com/zeroclaw-labs/zeroclaw/pull/11840) | docs(config): 说明 provider api_key 是加密存储的，而不是存在 OS 密钥链中 | XS | ✅ 已合并 |
| [#11814](https://github.com/zeroclaw-labs/zeroclaw/pull/11814) | fix(plugins): 将 pinned egress dial 错开，防止静默地址阻塞连接 | XL | ✅ 已合并 |
| [#11808](https://github.com/zeroclaw-labs/zeroclaw/pull/11808) | fix(plugins): 在 tool egress 声明中统计 WebSocket 和 socket 传输 | M | ✅ 已合并 |
| [#11832](https://github.com/zeroclaw-labs/zeroclaw/pull/11832) | ci(release): 在 macos-15 上运行 macOS 插件冒烟测试 | XS | ✅ 已合并 |
| [#11141](https://github.com/zeroclaw-labs/zeroclaw/pull/11141) | docs(review): 保留 fetch 命令状态 | XS | ✅ 已合并 |

**重要进展：**
- **插件 egress 可靠性** — 修复了关键问题：黑洞地址会导致所有连接尝试被阻塞；现在会在解析出的地址之间错开 dial。
- **快速入门体验** — 调整了提示顺序，先询问 endpoint URI 再询问 model，改进了供应商配置流程。
- **macOS CI** — 在 GitHub 10 月 brownout 之前，将废弃的 `macos-14` runner 迁移到 `macos-15`。

---

## 4. 社区热点话题

按评论数排序的活跃讨论：

| Issue | 标题 | 评论数 | 关注领域 |
|-------|------|--------|----------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [追踪]: 运行时、仪表板登录和网关交付 | 12 | **运行时 / 网关路线图** |
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A 协议 crate (zeroclaw-a2a) | 11 | **架构 / 协议** |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | [任务]: 从发布二进制文件发布并验证 Discord 插件安装 | 6 | **插件 / Discord** |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | [Bug]: 知识图谱没有按代理归因 — 任何代理都能读取/修改另一个代理的知识 | 5 | **安全 / 内存** |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | [Bug]: 委托的内存工具丢失 principal 作用域 | 5 | **安全 / 内存** |

**分析：**
- **内存安全是主要主题** — 多个 issue（#9647、#11198、#11912）揭示了多代理部署中跨代理数据泄露的内存子系统问题。这表明社区对多租户代理隔离高度关注。
- **A2A 协议 adoption** — Issue #11254 提议创建一个专用的 Rust crate 来实现 A2A 协议，表明 ZeroClaw 正在扩展其互操作性能力。
- **运行时和网关路线图** — 长期运行的追踪器 #7432 持续吸引关注，因为团队正在交付 v0.9.0 路线图中关于仪表板认证和网关改进的内容。

---

## 5. 缺陷与稳定性

按严重程度排序的高风险 issue：

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|------|----------|-----------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | 知识图谱没有按代理归因 — 任何代理都能读取/修改另一个代理的知识 | **S0 / 高** | 无 |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | 委托的内存工具丢失 principal 作用域 | **S0 / 高** | 无 |
| [#11899](https://github.com/zeroclaw-labs/zeroclaw/issues/11899) | daemon 重载后，已停止的网关继续服务它已接受的连接 | **高** | [#11901](https://github.com/zeroclaw-labs/zeroclaw/pull/11901) |
| [#11898](https://github.com/zeroclaw-labs/zeroclaw/issues/11898) | daemon 在全新数据目录上的首次启动可能没有 RPC 会话存储 | **高** | 无 |
| [#11866](https://github.com/zeroclaw-labs/zeroclaw/issues/11866) | 循环检测器执行被阻止的重复并丢失部分任务关闭 | **S1 / 高** | 无 |
| [#11894](https://github.com/zeroclaw-labs/zeroclaw/issues/11894) | Codex 座位耗尽后在每次调用时都会重试，直到声明的重置时间 | **S2 / 中** | 无 |
| [#11896](https://github.com/zeroclaw-labs/zeroclaw/issues/11896) | 嵌入失败时内存召回返回空，嵌入停滞时则挂起 | **S2 / 中** | 无 |

**今日修复：**
- [#11814](https://github.com/zeroclaw-labs/zeroclaw/pull/11814) — 插件 egress 连接停滞（之前为高严重程度）
- [#11808](https://github.com/zeroclaw-labs/zeroclaw/pull/11808) — tool egress 声明计数（之前为高严重程度）

---

## 6. 功能请求与路线图信号

近期有活动的活跃功能请求：

| Issue | 标题 | 发布目标 | 信号 |
|-------|------|----------|------|
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC: A2A 协议 crate (zeroclaw-a2a) | v0.9.0 | **高可能性** — RFC 已接受，跨领域架构变更 |
| [#11890](https://github.com/zeroclaw-labs/zeroclaw/issues/11890) | 功能: 使用持久性标签和用户引用，将非持久性合并更新排除在 Core 之外 | — | 内存合并控制；可能纳入 v0.9.0 |
| [#11892](https://github.com/zeroclaw-labs/zeroclaw/issues/11892) | 功能: 使用可配置前缀嵌入内存召回查询，适用于指令调优的嵌入模型 | — | 小众但可操作；可能进入 v0.9.x |
| [#11919](https://github.com/zeroclaw-labs/zeroclaw/issues/11919) | 功能: Web 聊天开关以保持实时 Thinking 框折叠状态 | v0.8.7 | 小 UI 增强，可能进入 v0.8.7 |
| [#8803](https://github.com/zeroclaw-labs/zeroclaw/issues/8803) | 功能: 在 Web 仪表板聊天中，将已完成轮次的中间步骤折叠为单个组 | — | 低优先级（冰桶） |

**预测：** **A2A 协议 crate**（#11254）是即将推出的最重要功能，表明 ZeroClaw 正在推进代理到代理的互操作性。内存相关功能（#11890、#11892）与当前内存子系统的安全加固工作相一致。

---

## 7. 用户反馈总结

来自近期 issue 的真实用户痛点：

- **内存隔离失效** — 多位用户报告代理可以读取/修改其他代理的知识图谱（#9647、#11912）。这是多代理部署的**关键信任和安全问题**。
- **供应商 429 处理** — 用户对配额耗尽后（OpenCode、Codex）仍以亚秒级退避重试而非快速失败感到沮丧（#10779、#11894）。这浪费了 API 配额并增加了延迟。
- **仪表板实时事件** — Web 聊天用户报告直到发送第一条回复才收到 cron 结果和推送的会话消息（#11917）。
- **快速入门体验** — 新用户发现供应商配置流程混乱，model 选择出现在 endpoint URI 之前（#11819 — 已修复）。
- **插件安装摩擦** — 从发布二进制文件安装 Discord 插件被证明难以验证（#10999），不过近期在 v0.8.6 上展示了验证。

---

## 8. 待办事项关注

需要维护者关注的事项（无活动，高重要性）：

| Issue | 标题 | 存在时间 | 优先级 | 备注 |
|-------|------|----------|--------|------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [追踪]: 运行时、仪表板登录和网关交付 | 2026年6月 | P2 | 长期追踪器；需要路线图明确 |
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | 知识图谱按代理归因 | 2026年8月 | **P1** | 高风险安全 bug；尚无修复 PR |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | 委托的内存工具丢失 principal 作用域 | 2026年9月 | **P0** | 关键安全 bug；尚无修复 PR |
| [#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099) | feat(enroll): 打印带配对码的 relay 前门链接和二维码 | 2026年9月 | — | **需要作者操作** — 依赖已合并 |
| [#11925](https://github.com/zeroclaw-labs/zeroclaw/pull/11925) | fix(tls): 不再信任被入侵的 emudhra 证书链 | 2021年10月 | **高** | **需要作者操作** — 被 #11924 取代 |
| [#11634](https://github.com/zeroclaw-labs/zeroclaw/pull/11634) | ci(rust): 常规 toolchain 升级到 1.99.1 | 2026年10月 | — | **需要作者操作** |

**建议行动：** 两个 P0/P1 内存安全 bug（#9647、#11198）尽管严重程度很高，但缺少分配的修复 PR。维护者应优先处理分类。此外，PR #11099 和 #11925 阻塞，等待作者跟进。

---

*基于 2026-10-22 的 GitHub 数据为 zeroclaw-labs/zeroclaw 生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*