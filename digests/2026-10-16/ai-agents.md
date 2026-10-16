# OpenClaw 生态日报 2026-10-16

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-16 00:40 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the OpenClaw Project Digest into Simplified Chinese, following specific rules. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate the content while preserving all formatting:

## 1. Today's Overview
→ 今日概况

## 2. Releases
→ 版本发布

## 3. Project Progress
→ 项目进展

## 4. Community Hot Topics
→ 社区热点

## 5. Bugs & Stability
→ 缺陷与稳定性

## 6. Feature Requests & Roadmap Signals
→ 功能请求与路线图信号

## 7. User Feedback Summary
→ 用户反馈总结

## 8. Backlog Watch
→ 待办事项关注

Let me now translate the full content:</think>

# OpenClaw 项目简报 — 2026-10-16

## 1. 今日概况

OpenClaw 保持高活跃度，过去 24 小时内有 500 个 Issue 和 500 个 PR 更新。项目发布了四个版本，包括一个重要的 Gateway 性能更新（v2026.10.10-beta.1），将 SQLite 操作移至 worker 线程，以应对大型 agent 集群的响应迟滞问题。社区参与活跃，今日关闭了 107 个 Issue，合并/关闭了 299 个 PR。不过仍存在若干 P0 级别的 SQLite WAL 增长和插件捕获性能问题，表明团队正在通过架构重构积极应对这些稳定性挑战。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v2026.10.10-beta.1** | Beta | Gateway 性能重构：聊天轮次、会话列表、启动和空闲状态下的 Gateway 大幅减少了 SQLite 和主线程操作；数据库操作移至 worker 线程，提升繁忙主机和大型 agent 集群的响应性。相关：#167965, #168002, #168093 |
| **v2026.10.5-beta.4** | Beta | 更新可靠性：macOS 更新不再在别名临时目录上超时；systemd 用户安装回收废弃运行时；pacman 和 FreeBSD 安装委托给包管理器；快照失败在执行前即可识别 |
| **v2026.10.4** | Stable | Gateway 稳定性修复：计算机睡眠或系统时钟跳变导致所有权心跳显示过时后，Gateway 不再重启（#170790）。感谢 @AnvinaLI, @sgh6688, @waynegault, @RomneyDa |
| **v2026.9.33** | Extended-Stable（ LTS 等效） | 仅 Gateway 版本，包含关键安全更新、可靠性/性能修复及新模型支持 |

**迁移说明：** 未宣布破坏性变更。使用 v2026.9.x 的用户应升级到 v2026.10.4 或更高版本以获得 Gateway 稳定性修复。v2026.10.10-beta.1 推荐给遇到响应问题的多 agent 部署场景。

---

## 3. 项目进展

**今日合并/关闭的 PR（精选）：**

- **#173574** [CLOSED] — `perf(runtime): stop GC telemetry from waking idle workers` — 防止 GC 遥测在空闲 Code Mode worker 中每次收集后调度事件循环工作。相关 #173306。
- **#173548** [CLOSED] — `perf(subagents): release settled run text from memory` — 已结束的子 agent 运行现在释放完整的任务/结果字符串，回收约 25 MB 堆内存。
- **#172223** [CLOSED] — `fix(doctor): say that memory sync stops when the embedding key is missing` — Doctor 现在正确解释内存同步何时停止，而非听起来像语义召回减少。

**推进中的开放 PR：**

- **#173523** — `refactor: simplify infra and plugin lifecycle bookkeeping` — 大型重构，解决安全、FIFO、持久化和关闭边界问题。状态：等待作者。
- **#173504** — `refactor(gateway): remove reload debt and startup claims` — 大型重构，针对重叠预留和重启债务状态。状态：等待作者。
- **#173579** — `fix: resume interrupted tasks in their original session` — 使 WebChat 的 **Resume** 能够继续同一会话中的任务，保留身份和工作区。高合并风险（消息传递、兼容性、安全边界）。状态：需要验证。
- **#173587** — `fix(update): prevent missing backup modules after runtime replacement` — 修复更新器替换运行时文件后源更新失败并报 `ERR_MODULE_NOT_FOUND` 的问题。

---

## 4. 社区热点

**按互动量排序的热门 Issue：**

| Issue | 标题 | 评论数 | 反馈 | 优先级 |
|-------|-------|----------|-----------|----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 在几天内增长到 1.4–2.8 GB，尽管 wal_autocheckpoint=1000；阻塞 Gateway 启动 | 128 | 0 | P0 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归） | 25 | 0 | P0 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 回复丢失，提示"Reply operation has no active tool authority snapshot" | 20 | 0 | P1 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源捕获每个 CLI 命令重写约 1.1–1.4 GB（SSD 损耗） | 18 | 0 | P1 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 功能请求：可配置的流式看门狗超时阈值 | 17 | 8 👍 | P2 |

**分析：** SQLite WAL 问题（#143524）以 128 条评论居首，反映了 Windows 单 Gateway 设置中用户的严重痛点，agent 的 WAL 文件增长近 3 GB，完全阻塞 Gateway 启动——这是关键的 UX 发布阻塞项。插件捕获回归（#157989）突出显示了重复字节复制和哈希处理捆绑原生二进制文件导致的 SSD 损耗问题。#68596（流式看门狗超时）等功能请求表明对扩展推理模型（DeepSeek-R1、kimi-k2.5）的需求，这些模型会触发误报。

---

## 5. 缺陷与稳定性

**关键（P0）缺陷：**

| Issue | 概述 | 严重性 | 修复 PR？ |
|-------|---------|----------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 增长到 1.4–2.8 GB，阻塞 Gateway 启动（Windows，2026.9.2/9.3） | **UX 发布阻塞** | 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归） | 崩溃循环风险 | 无 |
| [#171918](https://github.com/openclaw/openclaw/issues/171918) | Safari 27.0.1 间歇性拒绝 Control UI 入口图（42 KB 合成模块） | UX 发布阻塞 | 无 |
| [#152275](https://github.com/openclaw/openclaw/issues/152275) | 提交后插件激活失败导致模型目录重启前不可用 | 消息丢失 | 无 |
| [#164113](https://github.com/openclaw/openclaw/issues/164113) [CLOSED] | 更新在 updater-runtime-retention 时因非特权 LXC 中 FICLONE EPERM 失败 | UX 发布阻塞 | **是**（已修复） |

**值得注意的回归：**
- **#170956** — Windows：启动缓慢、插件关闭不干净、schtasks 权限错误导致重启/更新不可靠（7 条评论，P1）

**稳定性信号：** v2026.10.10-beta.1 版本通过 worker 线程 SQLite 操作直接解决了 Gateway 响应性问题，应能缓解多 agent 部署场景下的多个问题。

---

## 6. 功能请求与路线图信号

**活跃的功能请求（按互动量）：**

| Issue | 请求 | 优先级 | 近期可能实现？ |
|-------|---------|----------|-------------------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 可配置的流式看门狗超时阈值 | P2 | **中等** — 解决了 DeepSeek-R1/kimi-k2.5 的真实 UX 摩擦 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 每个 agent 的梦境配置（禁用特定 agent） | P2 | **中等** — 解决内存激增/OOM 问题 |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 添加伴侣友好的 SQLite  transcript/会话边界 | P3 | 低 — 小众高级用例 |
| [#66252](https://github.com/openclaw/openclaw/issues/66252) | 每个 Agent 的 TTS/STT 配置覆盖 | P3 | 低 — 平台特定增强 |

**路线图信号：** 对 Gateway 生命周期重构（#173523、#173504）和 v2026.10.10-beta.1 性能工作的重磅投入表明，团队优先处理核心稳定性和多 agent 扩展性，而非新功能。搜索引擎重构（#172681）表明对内存/搜索原语 SDK 能力的投入。

---

## 7. 用户反馈总结

**从 Issue 中识别的痛点：**

1. **存储/性能：** SQLite WAL 无界增长（#143524）和插件捕获 SSD 损耗（#157989）给 Windows 用户和大型插件依赖树用户带来真实的基础设施痛苦。
2. **更新可靠性：** 用户报告更新失败，原因是 macOS 临时目录问题、systemd 废弃和 LXC 容器 seccomp 阻塞（#164113）。
3. **消息丢失：** 间歇性回复丢失（#148707），提示"无活动工具授权快照"错误，侵蚀会话可靠性信任。
4. **Gateway 稳定性：** 睡眠后/时钟跳变重启和 Windows schtasks 权限问题使生产部署脆弱。
5. **扩展推理模型：** DeepSeek-R1 等模型的长时间思考阶段导致虚假流式看门狗警告，使用户感到沮丧。

**满意度信号：** v2026.10.4 Gateway 稳定性修复和 v2026.10.10-beta.1 性能改进直接回应了用户报告。社区贡献者（@AnvinaLI、@sgh6688、@waynegault、@RomneyDa）获得致谢，表明健康的协作氛围。

---

## 8. 待办事项关注

**长期未答复的重要 Issue：**

| Issue | 存在时间 | 优先级 | 状态 | 关注点 |
|-------|-----|----------|--------|---------|
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 约 6 个月 | P0 | 陈旧 | 基于文件的 provider 冷却在计费恢复后仍阻止用户数小时；无修复 PR |
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | 约 7 个月 | P2 | 陈旧 | Gemini 2.5 Pro textSignature 膨胀 + think 标签导致会话失败；仍然相关 |
| [#69242](https://github.com/openclaw/openclaw/issues/69242) | 约 6 个月 | P2 | 陈旧 | Linux 上 exec 工具间歇性 SIGKILL 宽泛的 find/grep 命令，无 OOM 证据 |
| [#63930](https://github.com/openclaw/openclaw/issues/63930) | 约 6 个月 | P2 | 陈旧 | Anthropic 顾问工具（服务端工具）支持功能请求 |

**需要维护者关注的 PR：**

- **#173523**（大型，基础设施重构）— 等待作者，高影响
- **#173504**（大型，gateway 重构）— 等待作者，高影响
- **#173579** — 需要验证，多个合并风险（可用性、消息传递、兼容性）
- **#157806** — P1，在执行准入时保留请求者身份；等待作者

**建议：** 陈旧的 P0 问题 #70903（provider 冷却）应立即关注，因为严重性较高。多个关于模型兼容性（Gemini、exec 工具行为）的陈旧 P2 Issue 可能需要关闭或整理，以防止累积技术债务。

---

## 横向生态对比

<think>The user wants me to translate this report into Chinese. Let me analyze what needs to be done:

1. Translate the content into Chinese (Simplified Chinese based on the context - using terms like "企业级", "本地部署", etc.)
2. Keep all Markdown structure exactly as-is
3. Keep all technical terms, project names, numbers, URLs, code references, issue/PR numbers, etc. in their original form
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me go through the document section by section:

**1. Ecosystem Overview**
- "personal AI assistant and agent ecosystem" - 个人AI助手与智能体生态系统
- "deployment models (gateway-hosted vs. local)" - 部署模式（网关托管 vs 本地）
- "autonomy levels" - 自主级别
- "OpenClaw" and "ZeroClaw" dominate in sheer activity volume - OpenClaw 和 ZeroClaw 在活动量上遥遥领先
- "shipping multiple releases per week" - 每周发布多个版本
- "enterprise-grade stability concerns" - 企业级稳定性问题
- "Hermes Agent" and "QwenPaw" occupy the mid-tier - Hermes Agent 和 QwenPaw 处于第二梯队
- "IronClaw" represents a minimal-activity benchmark-focused project - IronClaw 代表一个低活跃度的基准测试项目
- "Common themes across all projects include" - 所有项目的共同主题包括

**2. Activity Comparison**
- Keep the table but translate labels

**3. OpenClaw's Position**
- "Advantages over Peers" - 相对竞品的优势
- "Volume leadership" - 规模领先
- "contributor base" - 贡献者群体


- "release cadence" - 发布节奏
- "Gateway-owned session model" - 网关所有会话模式
- "per-session processes" - 每会话进程模式

**4. Shared Technical Focus Areas**
- Keep the table but translate

**5. Differentiation Analysis**
- Keep the table but translate

**6. Community Momentum & Maturity**
- "Rapid Iteration Tier" - 快速迭代层
- "Active Development Tier" - 活跃开发层
- "Stabilizing/Maintenance Tier" - 稳定维护层
- "Project Maturity Spectrum" - 项目成熟度

I'll focus on maintaining the technical tone and ensuring accurate translation of specialized terminology while preserving the original document's structure and formatting. The key is to balance technical precision with natural Chinese language flow that resonates with developer audiences.</think>

# 跨项目对比报告：开源个人AI助手与智能体

## 1. 生态系统概览

个人AI助手与智能体生态系统在2026年末正经历剧烈的碎片化，项目在部署模式（网关托管 vs 本地）、目标平台（桌面、移动、CLI）和自主等级上各有侧重。**OpenClaw** 和 **ZeroClaw** 在活动量上遥遥领先，每周发布多个版本并关注企业级稳定性问题。**Hermes Agent** 和 **QwenPaw** 处于第二梯队，分别专注于安全加固和桌面体验。**IronClaw** 代表一个低活跃度的基准测试导向项目。所有项目的共同主题包括：SQLite/会话管理挑战、多渠道路由（邮件、Telegram、WhatsApp）、插件/扩展生态系统，以及模型提供商的抽象层建设。

---

## 2. 活跃度对比

| 项目 | 问题更新（24h） | PR更新（24h） | 发布版本（24h） | 开放问题 | 健康度评分 |
|---------|---------------------|---------------------|----------------------|-------------|---------------|
| **OpenClaw** | 500 | 500 | 4 | 393 | 🔥🔥🔥🔥🔥 |
| **ZeroClaw** | 27 | 50 | 0 | 27 | 🔥🔥🔥🔥 |
| **Hermes Agent** | 50 | 50 | 1 | 48 | 🔥🔥🔥 |
| **QwenPaw** | 29 | 23 | 1 | 22 | 🔥🔥🔥 |
| **IronClaw** | 1 | 0 | 0 | 1 | 🔥 |

*健康度评分：🔥🔥🔥🔥🔥 = 快速迭代且稳定发布；🔥🔥🔥 = 活跃开发中；🔥🔥 = 维护模式；🔥 = 极低活跃度*

---

## 3. OpenClaw 的定位

**相对竞品的优势：**

- **规模领先**：日活跃问题/PR数是 Hermes Agent 和 ZeroClaw 的10倍，表明其贡献者群体更庞大、用例更丰富
- **发布节奏**：24小时内发布4个版本，体现了成熟的企业级CI/CD能力；是唯一提供扩展稳定版（LTS等价）发布通道的项目
- **多智能体复杂度**：直接响应fleet规模响应能力（SQLite工作线程卸载）—— 这一痛点在竞品的问题跟踪器中未见提及

**技术路线差异：**

- OpenClaw 采用**网关集中式会话模型**，由单一Gateway进程管理所有本地会话——这一架构选择推动了睡眠/时钟跳变处理相关的稳定性修复
- 竞品（Hermes Agent、QwenPaw）倾向于**每会话进程**或混合模式，导致不同的bug特征（PID复用、会话状态隔离）

**社区规模对比：**

- OpenClaw 的日500更新反映了其活跃用户基数可能是竞品的5-10倍，或参与度显著更高
- Hermes Agent 和 ZeroClaw 表现出健康但较小规模的活动（日均50个PR）；ZeroClaw 的PR/问题比（50:27）表明尽管问题量较低，但开发吞吐量相当可观

---

## 4. 共同技术关注点

| 需求 | 涉及项目 | 具体需求 |
|-------------|------------------|---------------|
| **SQLite/存储性能** | OpenClaw, Hermes Agent | WAL无限增长；工作线程卸载；检查点可靠性 |
| **多渠道用户体验** | ZeroClaw, QwenPaw | Telegram进度可见性、WhatsApp语音、邮件附件处理 |
| **插件/扩展生态系统** | OpenClaw, ZeroClaw, QwenPaw | 热重载安全、WASM插件宿主、干净卸载/恢复 |
| **提供商抽象** | 所有项目 | DeepSeek集成特性、流式vs非流式路径、模型特定标记解析 |
| **安全/加固** | Hermes Agent, ZeroClaw | OAuth/MCP持久性、依赖补丁、OIDC主体规范化 |
| **桌面客户端可靠性** | QwenPaw, Hermes Agent | Windows权限问题、启动性能、监听积压 |

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|-----------|----------|--------------|----------|---------|----------|
| **主要目标** | 企业/多智能体集群 | 开发者/CLI高级用户 | DevOps/多渠道部署 | 桌面/终端用户 | 研究/基准测试 |
| **架构** | 网关集中式 | 分布式智能体进程 | 运行时/网关分离 | 桌面优先客户端 | 极简运行时 |
| **发布模式** | Beta + 扩展稳定版 | 滚动稳定版 | 频繁Beta版 | 稳定版导向 | 无 |
| **平台侧重** | 跨平台，macOS/Windows/Linux | 桌面（Windows为主） | 服务器/CLI + 多渠道 | 桌面应用 | — |
| **特色功能** | 插件捕获、Gateway稳定性 | MCP集成、OIDC | 多渠道（Telegram/WhatsApp/邮件）、WASM插件 | 主题定制、实时语音 | 基准测试分类 |
| **热点问题** | SQLite WAL、插件捕获SSD损耗 | 提供商流式、Windows PID复用 | 邮件渠道bug、DeepSeek标记 | 页面加载失败、cron取消 | — |

---

## 6. 社区活力与成熟度

**快速迭代层：**

- **OpenClaw** — 日均500 PR/500问题；成熟CI/CD，4条发布通道；架构变更后积极稳定化中
- **ZeroClaw** — 日均50 PR，27个开放问题；大量功能开发（WASM插件、OIDC、多渠道）；接近v0.9.0成熟度

**活跃开发层：**

- **Hermes Agent** — 50/50 配比；积极解决统一网关后的问题；安全加固进行中
- **QwenPaw** — 23 PR/29问题；v2.2.2已发布，包含UI优化；桌面性能问题开始显现

**稳定/维护层：**

- **IronClaw** — 1问题，0 PR；似乎以研究为导向，进行常规基准测试分析

**项目成熟度谱系：**

```
OpenClaw（企业稳定）→ ZeroClaw（功能成熟）→ Hermes Agent（中等成熟）→ QwenPaw（成长期）→ IronClaw（沉寂）
```

---

## 7. 趋势信号

**面向AI智能体开发者的启示：**

1. **SQLite是瓶颈**：多个项目在规模上触及存储/IO上限——工作线程卸载、WAL检查点限制、结果集大小限制正成为基本要求

2. **多渠道正在整合**：ZeroClaw 和 QwenPaw 在Telegram、WhatsApp和邮件渠道的投入表明用户对统一通信界面的需求——预计这将成为标准配置

3. **插件安全加固**：MCP OAuth持久性需求（Hermes #95756）、WASM沙箱（ZeroClaw）、干净卸载路径等表明插件生态系统正在走向成熟

4. **长思考模型摩擦**：DeepSeek、Claude Code等模型触发虚假看门狗警告、流式路由错误和标记解析失败——集成痛点显著

5. **本地优先可靠性**：睡眠/唤醒处理、PID复用、时钟跳变容忍、跨设备同步缺口对生产部署至关重要——用户将这些作为发布阻塞问题而非边缘案例提交

6. **委托智能体的可观测性**：多个项目（ZeroClaw #10531、OpenClaw #8763、#157989）显示对子智能体进度可见性的需求——这是一个差异化功能

7. **企业身份集成**：OIDC主体规范化（ZeroClaw）、按主体隔离、配置文件作用域认证（Hermes）表明企业采用正在增长，需要企业身份集成

---

*报告生成于2026-10-16 | 来源：OpenClaw、Hermes Agent、IronClaw、QwenPaw、ZeroClaw 各项目摘要*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English project digest into Chinese. I need to:
1. Translate the content into Chinese
2. Keep all the Markdown structure exactly as-is
3. Keep URLs, issue numbers, code references, etc. as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, preserving all formatting and structure.</think>

# Hermes Agent 项目摘要 — 2026年10月16日

## 1. 今日概览

Hermes Agent 今日活动频繁，过去24小时内有 50 个 Issue 和 50 个 PR 更新。**v0.22.2** 版本已发布，修复了 v0.22.1 中的关键构建错误，该错误导致 Microsoft Store 应用卡在"连接中"状态。统一的网关运行时（#106742）于 10 月 14 日合并后产生了大量后续工作，其追踪 Issue（#134889）已收到 69 条评论，表明正在积极进行稳定性修复。依赖项中存在未修复的安全漏洞，引发安全担忧。社区在 bug 修复、功能请求和基础设施改进方面保持强劲参与度。

---

## 2. 发布动态

### v0.22.2 — Hermes Agent
**发布日期：** 2026年10月15日

此版本修正了 v0.22.1，后者构建自错误的提交并包含了未发布的网关工作。由于此问题，Microsoft Store 应用可能会卡在"连接中"状态。

> **已知问题：** 在 0.22.1 网关下运行的会话可能会出现残留问题；建议用户在升级后重启会话。

**GitHub Release：** https://github.com/NousResearch/hermes-agent/releases

---

## 3. 项目进展

### 今日合并/关闭的 PR（共 4 个）

| PR | 标题 | 状态 |
|----|-----|------|
| #139521 | fix(cron): revalidate inactivity before publishing an interrupt | Open |
| #139522 | fix(browser): preserve fallback tools without terminal | Open |
| #139524 | fix(desktop): scope the fallback-model pickers to the edited profile | Open |
| #139353 | fix(foundry): add profile-scoped Azure CLI authentication | Open |

*注：在数据快照时刻，所有列出的 PR 均为 Open 状态。*

### 关键进展

- **浏览器工具改进：** 为没有终端访问权限的 Browser Use 会话恢复了文档化的备用方案（#139522）
- **桌面配置文件修复：** 备用模型选择器现在正确地限定在编辑的配置文件范围内，而非使用全局状态（#139524）
- **Azure Foundry 认证：** 为 Desktop 和多路复用机器人配置文件添加了 Microsoft Entra ID → 配置文件范围的凭证检索（#139353）
- **Cron 稳定性：** 添加了代际隔离的中断原语，以防止过时的超时发布（#139521）

---

## 4. 社区热点话题

### 评论最多的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 👍 |
|-------|------|--------|-----|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 追踪：单一网关拥有每个本地会话 — 合并后修复 | 69 | 0 |
| [#125095](https://github.com/NousResearch/hermes-agent/issues/125095) | [Bug]: claude-subscription-directsdk 被强制走非流式路径 | 8 | 1 |
| [#28024](https://github.com/NousResearch/hermes-agent/issues/28024) | 功能：代理自配置的允许列表 config_set 工具 | 7 | 0 |
| [#138843](https://github.com/NousResearch/hermes-agent/issues/138843) | [Bug]: session.create provider override 保留过时的 base_url（401 错误） | 7 | 1 |

**分析：** 主导热点话题是**统一网关合并后的稳定性修复**（#134889）。大量评论反映了 #106742 合并的复杂性，该合并将网关运行时统一到多个界面（CLI、TUI、Desktop、ACP、cron）。用户和维护者正在处理会话所有权、模型路由和凭证处理问题。

次要热点话题包括：
- **提供商流式行为**（#125095）：用户希望为 Claude 订阅模型启用完整流式支持
- **自配置**（#28024）：希望代理能够修改良性设置（stt、tts、display.skin）而无需手动编辑文件

---

## 5. Bug 与稳定性

### 高优先级 Bug（P1-P2）

| Issue | 标题 | 优先级 | 状态 |
|-------|------|--------|------|
| [#138843](https://github.com/NousResearch/hermes-agent/issues/138843) | session.create provider override 保留过时的 base_url — 导致 401 | P2 | Open |
| [#133744](https://github.com/NousResearch/hermes-agent/issues/133744) | 重启后 PID 重用导致受监管网关永久卡死 | P2 | Open |
| [#134394](https://github.com/NousResearch/hermes-agent/issues/134394) | 依赖项包含未修复的安全漏洞（PyJWT、httpx2、urllib3、oauthlib） | P2 | Open |
| [#123118](https://github.com/NousResearch/hermes-agent/issues/123118) | macOS 网关 LaunchAgent 显示为不透明的 'osascript' | P2 | Open |

### 可用的修复 PR

| PR | 修复内容 | 状态 |
|----|---------|------|
| [#139519](https://github.com/NousResearch/hermes-agent/pull/139519) | Windows 机器人轮次锁现在有真实后端（原为无操作） | Open |
| [#139358](https://github.com/NousResearch/hermes-agent/pull/139358) | 解决主机文件系统上的代理容器路径问题 | Open |
| [#130459](https://github.com/NousResearch/hermes-agent/pull/130459) | 检查 Anthropic 计划配额已耗尽的凭证 | Open |

**稳定性问题：**
- **Windows 平台**存在多个问题：重启后 PID 重用（#133744）、轮次锁退化（#139519）、域加入本地账户失败（#137645）
- **安全漏洞**待处理：依赖项中有 4 个包含已知漏洞的包（#134394）

---

## 6. 功能请求与路线图信号

### 值得注意的功能请求

| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| [#28024](https://github.com/NousResearch/hermes-agent/issues/28024) | 代理自配置的允许列表 config_set 工具 | P3 | 用户希望代理能够修改良性设置（stt、tts、display.skin） |
| [#107937](https://github.com/NousResearch/hermes-agent/issues/107937) | delegate_task 的每任务 provider/model 固定 | P3 | 跨提供商子代理用于速率限制和多 GPU 家用实验室 |
| [#90435](https://github.com/NousResearch/hermes-agent/issues/90435) | 统一 Desktop Preview 和 Browser 为 Workspace Viewer | P3 | 提议整合内容体验 |
| [#80828](https://github.com/NousResearch/hermes-agent/issues/80828) | 桌面应用：查看/选择活动的 Copilot 凭证 | P3 | Desktop 与 CLI 认证管理的对标 |

### 插件目录新增
- [#139516](https://github.com/NousResearch/hermes-agent/pull/139516)：添加了 **hermes-vcc-engine** — 一种确定性上下文引擎，替代压缩中的摘要 LLM 调用

**路线图预测：** 下一个版本可能重点关注：
1. 统一网关稳定性修复（继续处理 #134889 相关问题）
2. 安全依赖更新
3. Windows 平台可靠性修复

---

## 7. 用户反馈摘要

### 已识别的痛点

1. **网关会话混乱：** 用户报告 Microsoft Store 应用"连接中"卡住（#134889）— 影响用户信任
2. **版本显示错误：** 用户在 `--version` 输出中看到过时的发布日期（#135217、#139514 重复）— 被视为低质量发布
3. **Linux 套接字路径限制：** 浏览器工具在主目录包含较长临时目录的 Linux 系统上失败（#122786）— 阻碍 Linux 高级用户
4. **macOS 隐私与安全不透明：** 网关显示为 'osascript' 而非 Hermes（#123118）— 信任/可见性问题
5. **OpenRouter 缓存回放：** Beta edge-cache 可以回放过时的工具调用（#70387）— 潜在的意外行为

### 满意度信号
- 在高复杂度问题上维护者响应积极（#134889 有 69 条评论）
- 安全意识强的变更：MCP OAuth 持久性要求（#95756）、审批令牌验证（#112415）
- 跨平台投入：Docker 路径解析（#139358）、Windows cron 修复（#139521）

---

## 8. 待办关注

### 长期未答的重要 Issue

| Issue | 标题 | 时长 | 优先级 | 问题 |
|-------|------|------|--------|------|
| [#70387](https://github.com/NousResearch/hermes-agent/issues/70387) | OpenRouter response_cache 默认为启用 — 可能回放过时的工具调用 | 约3个月 | P2 | 安全/行为风险 |
| [#113094](https://github.com/NousResearch/hermes-agent/issues/113094) | browser_vault_enter_code 缺少分割 OTP 小部件 | 约1个月 | P3 | 认证 UX 缺口 |
| [#132492](https://github.com/NousResearch/hermes-agent/issues/132492) | 1Password 保险库填充无法确定页面来源 | 约2周 | P2 | 集成破坏 |

### 停滞的 PR / 需要维护者关注

| PR | 标题 | 时长 | 阻塞原因 |
|----|------|------|----------|
| [#95756](https://github.com/NousResearch/hermes-agent/pull/95756) | fix(mcp): require durable grants on commissioning | 约2个月 | 安全审查待定 |
| [#112415](https://github.com/NousResearch/hermes-agent/pull/112415) | fix(approval): require reviewed payload token at consume time | 约1个月 | 需要审查 |
| [#116140](https://github.com/NousResearch/hermes-agent/pull/116140) | fix(cron): preserve monitor changes across admission refusals | 约1个月 | 需要审查 |

---

*摘要基于 2026-10-16 的 GitHub 数据快照生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the IronClaw project digest from English to Chinese. I need to:
1. Translate the content while preserving all markdown structure
2. Keep all technical identifiers, URLs, issue numbers, etc. as-is
3. Use natural technical Chinese register

Let me go through each section:

1. **1. Today's Overview** - Activity summary
2. **2. Releases** - No releases
3. **3. Project Progress** - PR and issue stats
4. **4. Community Hot Topics** - Table with issues
5. **5. Bugs & Stability** - Bug section
6. **6. Feature Requests & Roadmap Signals** - Features
7. **7. User Feedback Summary** - Feedback
8. **8. Backlog Watch** - Backlog monitoring

Let me translate carefully, maintaining the structure and using appropriate technical Chinese.</think>

# IronClaw 项目摘要 — 2026年10月16日

## 1. 今日概览

IronClaw 在 2026年10月16日这一天**活动较少**。过去24小时内，项目有1个 issue 更新，零个 pull request。没有发布任何新版本。唯一活跃的 issue 是一份每日失败分类报告，分析基准测试表现，这是项目常规评估流程的一部分。整体来看，项目处于维护或监控阶段，而非活跃开发状态。

---

## 2. 版本发布

过去24小时内没有发布新版本。

---

## 3. 项目进展

- **Pull Requests**：过去24小时内无更新、合并或关闭的 PR。
- **Issues**：新打开1个 issue（失败分类报告）。

---

## 4. 社区热点话题

| Issue | 链接 | 摘要 |
|-------|------|-------|
| #8138: Daily ironclaw failure taxonomy — 2026-10-15 | [查看 Issue](https://github.com/nearai/ironclaw/issues/8138) | 例行的 officeqa 套件基准测试分析报告（50个未通过任务）。失败主要归因于 DeepSeek-V4-Flash 的模型质量问题。无社区讨论（0条评论）。 |

**分析**：缺乏高参与度话题，表明外部社区贡献或讨论有限。该分类 issue 似乎是一份自动化或半自动化的报告，而非用户发起的话题讨论。

---

## 5. 缺陷与稳定性

过去24小时内没有提交明确的缺陷报告。失败分类 issue (#8138) 提及的是"真正的模型质量问题"，而非 IronClaw 本身的软件缺陷或回归问题。

---

## 6. 功能需求与路线图信号

过去24小时内没有提交任何功能需求。PR 活动的缺失使得难以推断近期的路线图方向。

---

## 7. 用户反馈摘要

过去24小时内没有记录到任何用户反馈（评论、反应）。唯一活跃的 issue 是一份内部分析报告，零互动。

---

## 8. 待办事项关注

过去24小时窗口内没有标记出长期未答复的 issue 或停滞的 PR。不过，PR 活动的缺失值得关注，以确保持续的积极维护。

---

*摘要基于 2026年10月16日的 GitHub 数据生成。活动水平：低。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese. I need to:
1. Translate all the text content
2. Keep all markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, project names, usernames, etc. as-is
4. Use natural technical Chinese register

Let me go through and translate this while preserving the exact structure.</think>

# QwenPaw 项目简报 — 2026-10-16

## 1. 今日概览

QwenPaw 在 2026 年 10 月 16 日表现出健康的活跃度，过去 24 小时内共更新了 **29 个 issues** 和 **23 个 pull requests**。项目发布了 **v2.2.2**（稳定版），新增了主题自定义选项和多标签页认证终端功能。尽管已关闭 7 个 issues，仍有 22 个处于开放状态，表明开发势头持续。3 个 PR 已合并/关闭，20 个仍在审核中。社区正在积极请求新增 Provider 集成（Firecrawl、CommandCode、Hugging Face），同时也反映了桌面端性能问题。

---

## 2. 版本发布

### v2.2.2（稳定版） — 发布于 2026-10-15

**更新内容：**

- **控制台和工作区：** 新增六套主题配色方案，支持自定义颜色和圆角半径，提供实时预览和偏好保存（PR #7741）。
- **终端：** 在聊天界面中新增了支持多标签页的认证终端。

**版本验证：**
- Issue #8262 跟踪各平台的安装验证情况。

---

## 3. 项目进度

### 今日已合并/关闭的 PR

| PR | 标题 | 状态 |
|----|-----|------|
| #8259 | feat(tools): add structured human-in-the-loop questions | 已关闭（ready-for-human-review） |
| #7928 | chore: release notes for v2.2.2 | 已关闭 |
| #8260 | fix(desktop): correct Windows listen backlog and chunk recovery state | 已关闭 |

### 推进中的活跃 PR

- **#8266** — feat(data-app): ship 1.0.3 independently of Host vNext (XXXL)
- **#7874** — feat(pawapp): redesign the SDK and app control plane (XXXL)
- **#7903** — feat(community): integrate QwenPaw community and inbox (XXXL)
- **#7785** — feat(voice): add realtime voice chat (XXXL)
- **#7565** — feat(plugins): add clean unload and rollback-safe hot reload (XXXL)
- **#8248** — feat(plugins): add inline OpenUI support for Intelligent UI (XXXL)

---

## 4. 社区热点话题

### 活跃度最高的 Issues（按评论数排序）

1. **[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)** — [Bug]: 频繁页面加载失败
   - 作者：henryliuwork | 8 条评论 | 已关闭
   - 摘要：用户反馈在多台设备上频繁出现"页面加载失败"错误，严重影响使用体验。

2. **[#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599)** — [Bug]: OpenCode Go 模型 "MissingSessionID" 错误
   - 作者：tina0501853 | 5 条评论 | 已关闭
   - 摘要：OpenCode Go 模型因缺少 `x-opencode-session` 请求头而返回 400 错误。

3. **[#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)** — 功能建议：将技能池下载改为可取消的后台任务
   - 作者：BeiMu-new | 4 条评论 | 开放
   - 摘要：请求为技能下载添加进度显示和取消功能，目前会导致 30 秒超时。

4. **[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)** — [Bug]: Agent 间调用会话被静默取消（CancelledError）
   - 作者：NORFMS | 3 条评论 | 开放
   - 摘要：多 Agent 舰队（Orchestrator/Reasoner/Executor/Reviewer/Defender）之间的调用被静默取消，未记录发起者和原因。

5. **[#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)** — 功能建议：将 Firecrawl 设为 web_search provider
   - 作者：JuampiHernandez | 2 条评论 | 开放
   - 摘要：Firecrawl 团队请求将其服务添加为第三方 web_search provider。

---

## 5. Bug 与稳定性

### 报告的严重 Bug

| Issue | 严重程度 | 摘要 | 修复 PR？ |
|-------|----------|------|----------|
| **[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)** | 高 | Agent 间调用会话被静默取消，产品被清零，未记录发起者和原因 | 无 |
| **[#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225)** | 高 | "零停机热重载"取消正在运行的定时任务，静默标记为"已取消" | 无 |
| **[#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184)** | 高 | 末日循环门禁误杀经任务授权的合法轮询；cron 记录终止后仍显示"成功" | 无 |
| **[#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206)** | 中 | Windows 上删除项目时因 creator.log 存在导致失败（WinError 5） | 无 |
| **[#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194)** | 中 | qwenpaw-creator 启动失败，当 runtime-owner.json 中存在残留 pid 时 | 无 |
| **[#8265](https://github.com/agentscope-ai/QwenPaw/issues/8265)** | 中 | 插件热安装在使用发行版补丁版 Python 3.11 时因 importlib.invalidate_caches() 抛出异常而中止 | 无 |
| **[#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249)** | 中 | 定时任务修改后将时间重置为 00:00，请求内容显示 "[object Object]" | 无 |

### 桌面端性能问题
- **[#8264](https://github.com/agentscope-ai/QwenPaw/issues/8264)** — 桌面版启动缓慢（>10 秒），用户体验不及竞品

---

## 6. 功能请求与路线图信号

### 新增功能请求

| Issue | 功能 | 近期纳入可能性 |
|-------|------|----------------|
| **[#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)** | 将 Firecrawl 设为 web_search provider | 高（PR #8200 审核中） |
| **[#8233](https://github.com/agentscope-ai/QwenPaw/issues/8233)** | 内置 CommandCode 和 Hugging Face 的 provider 预设 | 中 |
| **[#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126)** | 支持进度的可取消技能池下载 | 中 |
| **[#8211](https://github.com/agentscope-ai/QwenPaw/issues/8211)** | 受保护执行契约提示词的国际化支持 | 中 |
| **[#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195)** | 模型池增加"删除"按钮以清理弃用模型 | 低-中 |
| **[#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)** | Claude Code 作为第三方 Agent 运行环境 | 长期 |

### 指示路线图方向的 PR
- **实时语音聊天** (#7785) — 开发中的重大功能
- **插件热重载安全性** (#7565) — 解决长期存在的插件稳定性问题
- **OpenUI 支持** (#8248) — 智能 UI 渲染
- **社区/收件箱集成** (#7903) — 平台参与度

---

## 7. 用户反馈总结

### 识别出的痛点

1. **稳定性与可靠性：**
   - 页面加载失败频繁发生，影响用户体验 (#8120)
   - Agent 间调用被静默取消，削弱了多 Agent 部署的信任度 (#8225)
   - 配置保存时定时任务意外取消 (#8225)

2. **桌面端体验：**
   - 启动耗时较长（>10 秒），相比竞品处于劣势 (#8266)
   - Windows 特定的文件操作和日志轮转问题 (#8206, #8185)

3. **插件系统：**
   - 某些 Python 发行版上的热安装失败 (#8265)
   - ACP 会话不加载已安装的插件 (#8222)

4. **文档缺口：**
   - Hub 模式 Docker 启动方法未在文档中说明 (#8256)

### 积极信号
- 实时预览主题自定义功能（v2.2.2）回应了定制化需求
- Firecrawl 团队正在积极贡献 web_search 集成
- 社区用户主动提供免费托管 QwenPaw 实例 (#8232)

---

## 8. 待办事项关注

### 需要维护者关注的未处理 Issues

| Issue | 存续时间 | 状态 | 关注点 |
|-------|----------|------|--------|
| **[#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)** | 约 2 个月 | 开放 | Claude Code 运行环境状态/路线图——暂无明确时间表 |
| **[#8213](https://github.com/agentscope-ai/QwenPaw/issues/8213)** | 3 天 | 开放 | Hub 重启后保持运行状态的 Local 运行时被停止；定时任务被静默错过 |
| **[#8222](https://github.com/agentscope-ai/QwenPaw/issues/8222)** | 3 天 | 开放 | ACP 从不加载已安装的插件——功能缺失严重 |
| **[#8185](https://github.com/agentscope-ai/QwenPaw/issues/8185)** | 4 天 | 开放 | Windows 上 desktop.log 从不轮转——磁盘空间风险 |
| **[#8202](https://github.com/agentscope-ai/QwenPaw/issues/8202)** | 4 天 | 开放 | 其他设备上消息在回合完成前不可见——同步体验问题 |

### 停滞的 PR
- 未观察到明确停滞的 PR；关键功能（#7874、#7903、#7785）正在积极审核中，虽规模较大但推进中

---

*生成时间：2026-10-16 | 数据来源：github.com/agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English project digest into Chinese while following very strict rules about preserving formatting. Let me go through it carefully.

Key rules:
1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code, project names, issue/PR references verbatim
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, keeping everything in place:

**Section 1: Today's Overview**
- High activity → 高度活跃
- feature-heavy development phase → 功能密集开发阶段
- plugin infrastructure → 插件基础设施
- release artifacts → 发布制品

**Section 2: Releases**
- No new releases today → 今日无新版本发布

**Section 3: Project Progress**
- Merged/Closed PRs → 已合并/已关闭的 PR
- Active PRs → 进行中的 PR
- Security patch → 安全补丁
- dependency updates → 依赖更新
- Plugin recovery mechanism → 插件恢复机制
- Provider alias → 提供商别名
- WASM plugin distribution → WASM 插件分发

**Section 4: Community Hot Topics**
- Most-Commented Issues → 关注度最高的 Issue
- Distribution packaging → 分发包策略
- Release tracking → 版本追踪
- Observability → 可观测性
- Security/Identity → 安全与身份认证

**Section 5: Bugs & Stability**
- High-Severity Bugs → 高优先级缺陷
- Medium-Severity Bugs → 中优先级缺陷
- Email channel → 邮件通道


- Tool result sizing → 工具结果大小

**Section 6: Feature Requests & Roadmap Signals**
- Notable Feature Requests → 值得关注的特性请求
- Roadmap Signals → 路线图信号
- multi-channel UX → 多通道用户体验

**Section 7: User Feedback Summary**
- Pain Points → 痛点
- Positive Signals → 积极信号

**Section 8: Backlog Watch**
- Long-Running Trackers → 长期追踪
- PRs Needing Maintainer Action → 需要维护者处理的 PR

Let me now produce the complete translation with all formatting preserved.</think>

# ZeroClaw 项目简报 — 2026-10-16

## 1. 今日概览

ZeroClaw 今日**高度活跃**，过去 24 小时内有 27 个 issue 和 50 个 PR 更新。全部 27 个追踪的 issue 保持开放/活跃状态，无一关闭。2 个 PR 已合并/关闭（均为依赖相关）。项目正处于**功能密集开发阶段**，正在为 v0.8.6 和 v0.9.0 版本推进大量工作，包括插件基础设施、OIDC 认证、多通道改进（邮件、Telegram、WhatsApp）以及运行时增强。今日无新版本发布。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的 PR（2）

| PR | 标题 | 备注 |
|----|-------|-------|
| [#11755](https://github.com/zeroclaw-labs/zeroclaw/pull/11755) | fix(deps): patch Wasmtime and Rustls security advisories | 安全补丁，将 Wasmtime 从 48.0.5 更新至 48.0.6，以修复 14 个 RustSec 漏洞；已合并 |
| [#11723](https://github.com/zeroclaw-labs/zeroclaw/pull/11723) | build(deps): bump rust-all group with 30 updates | 依赖更新；已关闭 |

### 推进功能的进行中 PR

| PR | 标题 | 状态 | 关键变更 |
|----|-------|--------|-------------|
| [#11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236) | fix(plugins): recover incomplete installs through plugin remove | 进行中 | 插件恢复机制 |
| [#11460](https://github.com/zeroclaw-labs/zeroclaw/pull/11460) | feat(zerocode): rename provider aliases in Config | 进行中 | ZeroCode UI 中提供商别名重命名 |
| [#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262) | feat(cli): add zeroclaw plugin update with verified replacement | 进行中 | 插件更新 CLI |
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | feat(release): ship WASM plugin host in supported release artifacts | 进行中 | WASM 插件分发 |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | feat(channels): Gemini speech-to-speech broker channel | 进行中 | 新语音通道（PR1） |
| [#11776](https://github.com/zeroclaw-labs/zeroclaw/pull/11776) | build(deps): bump rust-all group with 31 updates | 进行中 | 新鲜依赖更新 |
| [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) | fix(config): validate persistent config writes | 进行中 | 配置校验 |
| [#11297](https://github.com/zeroclaw-labs/zeroclaw/pull/11297) | fix(runtime): honour keep_tool_context_turns | 进行中 | 工具上下文轮次处理 |
| [#11672](https://github.com/zeroclaw-labs/zeroclaw/pull/11672) | fix(providers): project JPEG admission without copying | 进行中 | JPEG 处理优化 |

---

## 4. 社区热点话题

### 关注度最高的 Issue

| Issue | 评论数 | 摘要 |
|-------|----------|---------|
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | 8 | **[功能请求]**：发布可选的 broad-channel 预构建版本，与精简默认版本并存 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 7 | **[追踪]**：运行时与网关交付 — v0.8.6 和 v0.9.0 |
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | 6 | **[功能请求]**：向父级暴露委托子代理进度（工具回执、增量输出） |
| [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) | 4 | **[功能请求]**：在 ZeroCode 中显示子代理活动和可展开的工具结果 |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | 4 | **[追踪]**：OIDC 里程碑：规范主体与入站认证 |

**分析：** 社区最关注的话题是：
1. **分发包策略** (#7952) — 运营商希望预构建捆绑包具有灵活性
2. **版本追踪** (#7432) — 对 v0.8.6/v0.9.0 进展高度关注
3. **可观测性** (#10531, #8763) — 委托代理需要更好的可见性；这是反复出现的主题
4. **安全/身份认证** (#8289) — OIDC 即将完成，正在引发收尾讨论

---

## 5. 缺陷与稳定性

### 高优先级缺陷（P1）

| Issue | 优先级 | 状态 | 摘要 | 修复 PR？ |
|-------|----------|--------|---------|---------|
| [#10114](https://github.com/zeroclaw-labs/zeroclaw/issues/10114) | P1, S2 | 进行中 | `max_tool_result_chars` 固定为 50,000，与模型上下文窗口无关 | — |
| [#10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116) | P1, S2 | 进行中 | 过大的工具结果从字节中间切断；应溢出到文件句柄 | — |
| [#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130) | P1, S1 | 进行中 | DeepSeek DSML 工具调用标记未被解析 — 原始标记泄露到通道 | — |

### 中优先级缺陷（P2/P3）

| Issue | 优先级 | 摘要 |
|-------|----------|---------|
| [#11745](https://github.com/zeroclaw-labs/zeroclaw/issues/11745) | S2 | 邮件通道未按文档说明存储入站附件 |
| [#11749](https://github.com/zeroclaw-labs/zeroclaw/issues/11749) | S2 | 邮件通道回复自动邮件（自动回复、退信），存在邮件循环风险 |
| [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | S2 | 邮件通道在重启后再次回复实时邮件（活动模式从未设置 \Seen） |
| [#11761](https://github.com/zeroclaw-labs/zeroclaw/issues/11761) | S2 | 邮件通道在 IMAP IDLE 超时前错过邮件 |
| [#11764](https://github.com/zeroclaw-labs/zeroclaw/issues/11764) | S2 | WhatsApp Web 丢弃未转录的语音便笺，未通知发送者 |
| [#11771](https://github.com/zeroclaw-labs/zeroclaw/issues/11771) | — | 网关轮次（20,000）与通道轮次（6,000）的引导文件上限不同 |
| [#11773](https://github.com/zeroclaw-labs/zeroclaw/issues/11773) | S2 | 区域操作系统语言环境（fr_FR、es_ES、ja_JP）回退到英语 |
| [#11768](https://github.com/zeroclaw-labs/zeroclaw/issues/11768) | — | 遵守 HTTP Retry-After 响应头以处理提供商的 429 限流 |
| [#11769](https://github.com/zeroclaw-labs/zeroclaw/issues/11769) | S3 | 语音丢弃和模型回退通道测试依赖操作员语言环境 |
| [#11758](https://github.com/zeroclaw-labs/zeroclaw/issues/11758) | S3 | WhatsApp Web 在监听器停止后持续打印配对二维码 |

**值得注意的是：** 邮件通道今日报告了 **4 个不同的缺陷** — 这是一个集中出现的不稳定区域。DeepSeek 集成 (#11130) 是影响严重的工作流阻断器。

---

## 6. 功能请求与路线图信号

### 值得关注的特性请求

| Issue | 优先级 | 摘要 | 预计目标版本 |
|-------|----------|---------|---------------|
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | P2 | 发布可选的 broad-channel 预构建版本，与精简默认版本并存 | 未来版本 |
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | P2 | 向父级暴露委托子代理进度（工具回执、增量输出） | v0.9.0？ |
| [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) | P2 | 在 Telegram 中显示面向用户的代理进度 | 近期 |
| [#11735](https://github.com/zeroclaw-labs/zeroclaw/issues/11735) | — | RFC：轮次边界处限制工具和委托结果 | 架构层面 |
| [#11743](https://github.com/zeroclaw-labs/zeroclaw/issues/11743) | — | 在 Telegram 和 Slack 流式传输草稿中显示模型推理 | 近期 |
| [#11747](https://github.com/zeroclaw-labs/zeroclaw/issues/11747) | — | 邮件通道：通过 STARTTLS 发送 SMTP（Office 365，端口 587） | 近期 |
| [#11751](https://github.com/zeroclaw-labs/zeroclaw/issues/11751) | — | 邮件通道：为 IMAP/SMTP 信任额外 CA（tls_ca_cert_path） | 近期 |
| [#11753](https://github.com/zeroclaw-labs/zeroclaw/issues/11753) | — | 可配置的反应式确认（进行中/完成/错误表情符号） | 近期 |
| [#10665](https://github.com/zeroclaw-labs/zeroclaw/issues/10665) | P3 | 让 ZeroCode 的每窗格会话限制可配置 | 待办列表 |

**路线图信号：** v0.8.6 和 v0.9.0 追踪器（#7432、#8289、#8290）处于活动状态。核心主题：**运行时/网关分离**、**OIDC 收尾**、**多通道用户体验改进**（Telegram、邮件、WhatsApp）以及**代理可观测性**。

---

## 7. 用户反馈摘要

### 识别出的痛点

1. **DeepSeek 集成损坏** (#11130, #11742)：使用 DeepSeek 模型的用户因未解析的 DSML 标记而遇到静默失败。无警告，无回退 — 工作流直接中断。

2. **Telegram 缺少进度可见性** (#10426)：通过 Telegram 运行长时间操作的用户在最终响应前看到的是静默界面 — 看起来像是卡住了。

3. **邮件通道行为异常** (#11745, #11749, #11760)：关于附件、自动回复循环和重启行为的多个问题表明邮件通道需要加固。

4. **工具结果大小** (#10114, #10116)：50K 硬编码上限与模型上下文窗口无关；字节级中间截断可能损坏数据。

5. **语言环境回退** (#11773)：使用区域语言环境（fr_FR、es_ES、ja_JP）的用户得到英语回退 — 本地化用户失去了预期语言。

### 积极信号

- OIDC 里程碑即将完成 (#8289) — 安全功能在推进
- 插件生态系统日趋成熟，WASM 主机将在发布制品中交付 (#11347)
- ZeroCode UI 增强正在进行中 (#11460, #8763)

---

## 8. 待办事项关注

### 需要关注的长期追踪

| Issue | 时长 | 状态 | 摘要 |
|-------|-----|--------|---------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 约 4 个月 | 进行中 | 运行时与网关交付追踪 — v0.8.6 和 v0.9.0 |
| [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | 约 4 个月 | 进行中 | OIDC 里程碑追踪 — 收尾进行中 |
| [#8290](https://github.com/zeroclaw-labs/zeroclaw/issues/8290) | 约 4 个月 | 进行中 | 多用户里程碑：每主体隔离 + 每发送者授权 |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | 约 4 个月 | 进行中 | 通道预构建功能 — 8 条评论，已接受 |

### 需要维护者处理的 PR

| PR | 摘要 | 需要 |
|----|---------|-------|
| [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) | fix(config): validate persistent config writes | 作者操作 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | fix(delegate): keep bounded delegate's workspace beyond turn | 作者操作 |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | feat(tools): default to eleven built-ins | 作者操作 |
| [#11364](https://github.com/zeroclaw-labs/zeroclaw/pull/11364) | test(hardware): pass arduino-cli flags through Windows fake | 作者操作 |
| [#11672](https://github.com/zeroclaw-labs/zeroclaw/pull/11672) | fix(providers): project JPEG admission | 作者操作 |

**关注：** 5 个 PR 标记为 `needs-author-action`。维护者可能需要提醒或重新分配。

---

*简报基于 ZeroClaw GitHub 数据生成 — 2026-10-16*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*