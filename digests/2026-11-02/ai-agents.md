# OpenClaw 生态日报 2026-11-02

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-02 01:45 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English OpenClaw project digest into Chinese. I need to:
1. Translate all the text content
2. Keep all markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code, project names unchanged
4. Use natural technical Chinese register

Let me translate section by section:

## 1. Today's Overview
- 500 Issues 和 500 Pull Requests 在过去24小时内有更新
- 项目保持较高活跃度，有267个open Issues和279个open PRs
- 没有新版本发布
- 问题队列混合了关键回归bug (P0/P1) 和功能开发工作
- PR队列包含多项接近合并的修复，特别是gateway、cron和UI领域
- 维护团队看起来很积极，多个PR处于"ready for maintainer look"状态

## 2. Releases
- 过去24小时内没有发布新版本

## 3. Project Progress
- 表翻译

## 4. Community Hot Topics
- 最活跃的讨论集中在这几个高参与度的项目上
- Issue #160959 dominates discussion with 69 comments—a significant regression in 2026.9.6 where Gateway event loops block for minutes when handling large external plugins. This indicates a systemic performance regression affecting production deployments.
- The memory-related issues (#153426, #67413) show strong community interest in memory management customization. 
- Cost budget enforcement (#42475) was closed, suggesting it may have been addressed or deferred.

## 5. Bugs & Stability
- Critical & High-Severity Bugs (P0/P1) section
- Notable Fixes Merged section

## 6. Feature Requests & Roadmap Signals
- Pain Points Identified
- Positive Signals

## 7. User Feedback Summary

## 8. Backlog Watch
- Long-Unanswered Important Issues
- PRs Needing Maintainer Attention


- End of digest

I'll verify each translation meticulously, ensuring technical precision while maintaining natural Chinese technical writing style. I'll carefully check that markdown structures and URLs remain intact, focusing on technical terminology and nuanced expression in Chinese technical communication.</think>

# OpenClaw 项目简报 — 2026-11-02

## 1. 今日概况

OpenClaw 在 2026 年 11 月 2 日表现出高度活跃状态，过去 24 小时内有 **500 个 Issue** 和 **500 个 Pull Request** 更新。项目保持显著热度，共有 267 个 open Issue 和 279 个 open PR。过去 24 小时内未发布新版本。问题队列混合了关键回归 bug（P0/P1）和功能开发工作，PR 队列则包含多项接近合并的修复——尤其在 gateway、cron 和 UI 领域。维护团队表现积极，多个 PR 处于"ready for maintainer look"状态。

---

## 2. 版本发布

过去 24 小时内**未发布新版本**。

---

## 3. 项目进展

以下 Pull Requests 在今日取得显著进展：

| PR | 标题 | 状态 |
|----|-----|------|
| [#188230](https://github.com/openclaw/openclaw/pull/188230) | `fix(cron): command jobs fail with spawn sh ENOENT on Windows Gateways` | 👀 Ready for maintainer look |
| [#190770](https://github.com/openclaw/openclaw/pull/190770) | `fix(gateway): synchronous exec through the macOS app node still repeats as an Exec finished wake` | 👀 Ready for maintainer look |
| [#180854](https://github.com/openclaw/openclaw/pull/180854) | `fix(slack): stop replies after their parent is deleted` | Open |
| [#170801](https://github.com/openclaw/openclaw/pull/170801) | `fix: chat freezes when scroll anchoring makes no progress` | Closed (merged) |
| [#190775](https://github.com/openclaw/openclaw/pull/190775) | `fix(ui): distinguish hydrated composer readiness in warm probe` | Open |
| [#189993](https://github.com/openclaw/openclaw/pull/189993) | `fix(cli): show the reason for invalid numeric flag values` | 👀 Ready for maintainer look |

过去 24 小时内有 **221 个 PR** 被合并/关闭，表明维护工作保持活跃的吞吐量。

---

## 4. 社区热点话题

最活跃的讨论集中在以下高参与度的话题上：

### 按评论数排序的热门 Issue

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | 69 | **OPEN** |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at the gateway level | 29 | CLOSED |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | Write/exec tool parameters silently dropped after long conversations | 16 | OPEN |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots (`MEMORY.md` / `USER.md`) silently excluded from bootstrap injection | 16 | **OPEN** |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Per-agent dreaming configuration | 15 | OPEN |

**分析：** Issue #160959 以 69 条评论主导讨论——这是 2026.9.6 中的一个重大回归，Gateway 事件循环在处理大型外部插件时会阻塞数分钟。这表明存在影响生产部署的系统性性能回归。与内存相关的问题（#153426、#67413）表明社区对内存管理定制有强烈兴趣。成本预算执行（#42475）已关闭，可能已得到解决或被推迟。

---

## 5. Bug 与稳定性

### 关键与高优先级 Bug（P0/P1）

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins | **P0** | OPEN |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots (`MEMORY.md` / `USER.md`) silently excluded from bootstrap injection (security impact) | **P0** | OPEN |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | `doctor --fix --non-interactive` idles 15+ min, never reaches DB repair | **P1** | OPEN |
| [#187900](https://github.com/openclaw/openclaw/issues/187900) | `doctor` hangs indefinitely at startup on Linux (all modes) | **P1** | OPEN |
| [#156895](https://github.com/openclaw/openclaw/issues/156895) | Agent-created jobs fail with "Scheduled account ... is unavailable" | **P1** | OPEN |

### 已合并的重要修复

- [#170801](https://github.com/openclaw/openclaw/pull/170801) — 修复了滚动锚定停滞时聊天卡顿的问题
- [#190766](https://github.com/openclaw/openclaw/pull/190766) — 浏览器音频捕获现在能在会议期间穿越时钟变化

**担忧：** `doctor` 命令有两个导致挂起的开放 P1 问题，表明诊断工具存在系统性问题，可能影响运维人员修复其安装环境的能力。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 参与度 |
|-------|------|--------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | Per-agent cost budget enforcement at gateway level | 29 评论, 👍1 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Per-agent dreaming configuration | 15 评论, 👍5 |
| [#91676](https://github.com/openclaw/openclaw/issues/91676) | Opt-in `skills.workshop.allowSandboxedAgents` | 9 评论, 👍2 |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | Let memory slot owner drive the Dreams page | 10 评论 |

**信号：** 成本控制功能和每个代理的配置粒度是反复出现的要求，表明运维人员希望更细粒度的资源治理。对 `dreaming` 提供商的要求（#138366）表明对 Control UI 中插件可扩展 UI 的需求。

---

## 7. 用户反馈摘要

### 发现的痛点

1. **性能回归：** Gateway 在捕获大型插件时阻塞（#160959）是影响生产稳定性的重大回归
2. **诊断工具故障：** `doctor` 命令在多种场景下挂起（#178359、#187900），阻止运维人员自行修复
3. **内存管理：** 内存根被静默排除在 bootstrap 注入之外（#153426）以及主动内存召回失败（#138561）导致意外行为
4. **消息投递问题：** 渠道（WhatsApp、iMessage、Slack、Discord）出现消息重复、丢失或投递失败
5. **UI 摩擦：** WebChat 滚动时抖动（#164394）、移动端 UI 布局问题

### 积极信号

- `memory_search` CLI 正常工作但工具超时（#128140）—— 表明是特定的 API 封装器问题而非后端故障
- UI 改进进行中：手机宽度布局（#190768、#190369）、滚动锚定修复（#170801 已合并）

---

## 8. 待处理事项关注

### 长期未答复的重要 Issue

| Issue | 标题 | 存续时间 | 状态 |
|-------|------|----------|------|
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | memory_search tool always times out (15s) while CLI works fine | 约2个月 | OPEN |
| [#138561](https://github.com/openclaw/openclaw/issues/138561) | active-memory plugin stops recalling after 2026.8.2 upgrade | 约2个月 | OPEN |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DMs silently dropped after gateway restart | 约2个月 | OPEN |
| [#122019](https://github.com/openclaw/openclaw/issues/122019) | `openclaw update status` omits configured-plugin availability | 约3个月 | CLOSED |

### 需要维护者关注的 PR

| PR | 标题 | 状态 |
|----|-----|------|
| [#163267](https://github.com/openclaw/openclaw/pull/163267) | feat(sessions): allow same-channel thread recall without agent-wide visibility | ⏳ Waiting on author |
| [#127770](https://github.com/openclaw/openclaw/pull/127770) | feat(pdf): add explicit OpenAI native document opt-in | ⏳ Waiting on maintainer |
| [#177555](https://github.com/openclaw/openclaw/pull/177555) | fix(slack): stop untagged bot loops with opt-in explicit mentions | ⏳ Waiting on maintainer |

---

*简报基于 OpenClaw GitHub 数据生成 — 2026-11-02*

---

## 横向生态对比

<think>The user wants me to translate the English report into Chinese, preserving all the markdown structure, tables, formatting, and technical terms exactly as they are. I need to output ONLY the translation without any preamble or explanation.

Let me translate this carefully, maintaining the technical register and all formatting.

Key things to preserve:
- All headings (##, ###)
- All tables (including the alignment rows |---|)
- All bullet points and numbered lists
- All bold/italic formatting
- All horizontal rules
- All emoji
- All URLs
- All code spans (#12345, OpenClaw, Hermes Agent, etc.)
- All technical terms, project names, file paths

Let me translate:</think>

# 跨项目对比报告：个人 AI 助手生态系统

## 1. 生态系统概述

2026 年末的个人 AI 助手和 Agent 框架领域呈现出成熟但高度活跃的态势。四个同源项目（MiniMax、Nous Research、Near AI 和 AgentScope）展现了不同的工程理念，同时满足重叠的用户需求。**OpenClaw** 和 **Hermes Agent** 作为全栈 Agent 运行时运行，采用网关架构，而 **QwenPaw** 专注于桌面客户端体验，**IronClaw** 维护一个极简的 Rust 核心。整个生态系统共同应对会话可靠性、多渠道部署、成本治理和异步委托等挑战——这表明这些是个人 AI 基础设施的基本未解决问题，而非项目特定的缺陷。

---

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | IronClaw | QwenPaw |
|---|---|---|---|---|
| **Issue 更新（24小时）** | 500 | 50 | 0 | 8 |
| **Issue 开放** | 267 | 42 | 0 | 7 |
| **Issue 关闭（24小时）** | 233 | 8 | 0 | 1 |
| **PR 更新（24小时）** | 500 | 50 | 5 | 20 |
| **PR 开放** | 279 | 44 | 5 | 18 |
| **PR 合并/关闭（24小时）** | 221 | 6 | 0 | 2 |
| **发布版本（24小时）** | 0 | 0 | 0 | 0 |
| **健康度评分** | 🟢 高 | 🟢 高 | 🔴 停滞 | 🟡 中等 |
| **活跃度层级** | 第一层级（核心） | 第二层级 | 第四层级（停滞） | 第三层级 |

*健康度评分基于：近期活动量、Issue 关闭率、PR 合并速度和发布频率。*

---

## 3. OpenClaw 的定位

### 相对优势

OpenClaw 在**开发速度**和**社区参与**方面显著领先于同类项目。24 小时内 500 个 PR 和 500 个 Issue 的更新量，大约是 Hermes Agent（各 50 个）的 10 倍，是 QwenPaw（合计 28 个）的 62 倍。这一数量表明贡献者基础更大、用户更活跃、迭代周期更快。OpenClaw 还保持着最多样化的功能集——涵盖网关、MCP 集成、定时任务、多渠道支持（Slack、WhatsApp、iMessage、Signal）和内存管理——使其成为最具通用性的选择。

### 技术路径差异

| 方面 | OpenClaw | Hermes Agent | QwenPaw | IronClaw |
|---|---|---|---|---|
| **架构** | 网关中心化、事件驱动 | 基于会话、多路复用 | 桌面优先（Tauri） | Rust 核心、极简 |
| **语言重点** | Python | Python | Rust/TypeScript | Rust |
| **插件模型** | MCP、工具、内存根 | MCP、技能、插件 | 技能、MCP | 未指定 |
| **多渠道** | 丰富（5+ 渠道） | 有限（Discord/Telegram/Signal） | 桌面 + Web | 无 |
| **成本治理** | 按 Agent 预算 | 未实现 | 未实现 | 未实现 |

### 社区规模对比

OpenClaw 的 267 个开放 Issue 和 279 个开放 PR 代表了一个处于巅峰活跃状态的代码库。Hermes Agent 较少的数量（42 个 Issue、44 个 PR）表明范围更窄或用户基础较小。QwenPaw 的 7 个开放 Issue 和 18 个开放 PR 表明这是典型的客户端应用的适度活动。IronClaw 的零活动令人担忧——可能表明项目停滞或已处于稳定的完成状态。

---

## 4. 共享技术关注领域

### 跨项目共同需求

| 关注领域 | 受影响项目 | 证据 |
|---|---|---|
| **会话/委托可靠性** | OpenClaw、Hermes Agent | Hermes：异步委托从未交付（#144563），admission_conflict 错误。OpenClaw：后台结果投递失败（#159959），会话投递 bug |
| **MCP 集成改进** | OpenClaw、Hermes Agent、QwenPaw | Hermes：MCP 数组参数包装破坏工具（#99270）。QwenPaw：MCP 发现回退失败（#8424、#8445）。OpenClaw：MCP 工具参数处理 |
| **运营控制** | OpenClaw、Hermes Agent | OpenClaw：按 Agent 成本预算、会话配额（#12130）。Hermes：会话管理、多路复用配置文件路由 |
| **启动性能** | OpenClaw、QwenPaw | QwenPaw：仅控制台渠道 30-45 秒延迟（#7367，通过 #7546 修复）。OpenClaw：doctor 命令挂起（#178359、#187900） |
| **内存/状态管理** | OpenClaw、Hermes Agent | OpenClaw：内存根被排除在引导之外（#153426），Auto-Dream 丢弃内存（#8500）。Hermes：active-memory 召回失败 |
| **受限环境支持** | QwenPaw | v2.3.0b2 在 fnOS 沙箱中崩溃（#8515），HOME vs passwd 主目录路径问题 |

### 新兴共享需求

- **多租户**：OpenClaw（Hub）、QwenPaw（多租户讨论）、Hermes Agent（多路复用配置文件）
- **按 Agent 配置粒度**：成本限制、会话配额、梦境、资源限制
- **桌面平台一致性**：Windows 路径处理、SSH 网关、系统托盘集成
- **运营诊断**：所有项目的 doctor/CLI 诊断工具都需要改进

---

## 5. 差异化分析

### 功能重点

| 项目 | 主要差异化 | 目标用户 |
|---|---|---|
| **OpenClaw** | 网关架构、多渠道、内存管理、定时任务 | 构建复杂 Agent 工作流的开发者、需要多平台部署的团队 |
| **Hermes Agent** | 会话多路复用、异步委托、基于配置文件的路由 | 管理共享基础设施上多个 Agent 配置文件的高级用户 |
| **QwenPaw** | 桌面客户端体验、技能市场、UI 自定义 | 想要开箱即用桌面 AI 助手的普通消费者 |
| **IronClaw** | 极简 Rust 核心、性能优先 | 嵌入式/轻量级部署、Rust 生态系统集成 |

### 技术架构分化

OpenClaw 和 Hermes Agent 在架构上最为相似——都是 Python 基础的 Agent 运行时，采用网关/事件驱动模型。然而，OpenClaw 强调横向扩展和丰富的集成，而 Hermes 专注于会话多路复用的复杂性。QwenPaw 通过构建 TypeScript/Rust 桌面应用（Tauri）而非服务器端运行时来实现差异化。IronClaw 代表了一种纯 Rust 方式，可能针对资源受限的环境或与 Rust 工具的集成进行优化。

### 目标用户差异

- **OpenClaw**：基础设施工程师、DevOps 团队、多 Agent 系统架构师
- **Hermes Agent**：管理共享主机上多个角色或配置文件的资深用户
- **QwenPaw**：寻求开箱即用桌面 AI 体验的普通消费者
- **IronClaw**：嵌入式系统开发者、Rust 生态系统参与者

---

## 6. 社区动能与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|---|---|---|
| **第一层级（快速迭代）** | OpenClaw | 高 Issue/PR 量、频繁发布、活跃的 bug 清理周期、多个 P0/P1 bug 并行 |
| **第二层级（活跃开发）** | Hermes Agent | 稳定进展、范围聚焦、约 50 次更新/天、解决核心会话可靠性问题 |
| **第三层级（中等活动）** | QwenPaw | 桌面应用迭代、特性驱动 PR、可管理的 Issue 积压 |
| **第四层级（稳定/停滞）** | IronClaw | 仅依赖更新、无发布、无 Issue——可能稳定维护或项目停滞 |

### 成熟度评估

- **OpenClaw**：中等成熟度。大型代码库加上复杂功能显示活跃开发和 bug 发现。尚未进入"稳定打磨"阶段；仍在添加重要功能（内存管理、Hub 多租户）。
- **Hermes Agent**：早中期成熟度。核心会话模型趋于稳定；重点从功能转向可靠性（委托投递、admission 冲突）。
- **QwenPaw**：早中期成熟度。客户端功能推进中；运营工具（诊断、受限环境）需要加强。
- **IronClaw**：不明。最小活动量使得评估困难；可能成熟稳定或停滞。

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **异步委托可靠性是普遍挑战**  
   OpenClaw 和 Hermes Agent 都在后台任务完成、消息投递失败和异步操作后会话恢复方面存在困难。这表明分离式 Agent 任务生成并等待结果这一模式本质上困难——不是 bug 而是架构层面的未解决问题。构建 Agent 系统的团队应该优先关注这一点。

2. **多租户和团队部署正在成为优先事项**  
   OpenClaw 的 Hub 多租户路线图和 QwenPaw 的讨论表明，从个人 AI 助手向团队/组织用例的转变正在加速。预计这将在整个生态系统中加速。

3. **成本治理和运营控制正在成熟**  
   按 Agent 预算、会话配额、成本限制覆盖——这些面向运营者的控制功能正在各个项目中出现。这反映了生产部署的成熟度，运营者需要治理工具，而不仅仅是 Agent 功能。

4. **平台一致性仍然难以实现**  
   Windows 路径处理、受限环境支持、桌面与服务器行为差异——所有项目都显示平台特定的 bug。Linux 优先开发与生产多平台现实之间的差距持续存在。

5. **MCP 集成是一把双刃剑**  
   MCP 实现了强大的工具扩展，但引入了协议兼容性问题（数组包装、发现失败、回退处理）。生态系统仍在学习如何优雅地处理 MCP。

6. **诊断工具是薄弱环节**  
   OpenClaw 的 `doctor` 挂起、QwenPaw 的启动延迟、Hermes Agent 的调试复杂性——运营者需要更好的自助诊断服务。这是一个值得解决差距。

### 对 AI Agent 开发者的价值

对于构建 Agent 系统或评估框架的开发者：

- **追求最大灵活性与集成**：选择 OpenClaw；接受更高复杂度
- **需要会话多路复用和配置文件管理**：Hermes Agent 提供了不同的模型
- **追求精炼的桌面 UX**：QwenPaw 提供最佳开箱体验
- **轻量级/嵌入式需求**：IronClaw 状态不明——请仔细评估

整个生态系统正在共同解决基础问题（委托、多租户、成本治理），随着解决方案的成熟将使所有参与者受益。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese, following the specific rules provided. Let me analyze the content and translate it while:

1. Preserving all Markdown structure exactly
2. Keeping URLs, issue/PR references, usernames, file paths, etc. as-is
3. Using natural technical Chinese register (like a developer newsletter)
4. Not adding any preamble, explanation, or markdown fences

Let me translate section by section:

## Today's Overview
Translate this to natural Chinese technical register.

## Releases
Keep the structure, translate content naturally.

## Project Progress
Translate the table content naturally.

## Community Hot Topics
Translate the descriptions and maintain structure.

## Bugs & Stability
Translate the table - keep the issue numbers and URLs as-is, translate descriptions.

## Feature Requests & Roadmap Signals
Translate naturally.

## User Feedback Summary
Translate the pain points and positive signals.

## Backlog Watch
Translate the table.

Let me do this translation now:</think>

# Hermes Agent 项目简报 — 2026-11-02

## 今日概览

Hermes Agent 今日保持高开发活跃度，过去 24 小时内有 50 个 issue 和 50 个 pull request 更新。项目主要聚焦于解决 Discord、Telegram 和桌面平台上的会话与委托投递问题，多个 "salvage" PR 针对后台任务完成中的长期问题进行修复。Issue 关闭率（8 个关闭 vs 42 个活跃）表明活跃的维护状态，而大量新 PR（44 个待合并）显示开发持续进行中。本日无新版本发布，项目处于 bug 修复与稳定性提升周期中。

## 版本发布

**本日无新版本。** 最新稳定版本仍为 v0.22.5（2026.9.24）。使用较早版本的用户应关注活跃 PR 中的补丁，以评估是否值得升级。

## 项目进展

过去 24 小时内合并/关闭的 pull request：

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#147763](https://github.com/NousResearch/hermes-agent/pull/147763) | teknium1 | **fix(desktop)**: 发布请求时同时发送连接和个人配置 |
| [#147746](https://github.com/NousResearch/hermes-agent/pull/147746) | teknium1 | **fix(gateway)**: 为丢失 origin 的路由投递后台结果 |
| [#147764](https://github.com/NousResearch/hermes-agent/pull/147764) | zhongwater123 | **fix(tui)**: 跳过无法相对化的路径补全（修复 #147719） |
| [#147762](https://github.com/NousResearch/hermes-agent/pull/147762) | teknium1 | **test(desktop)**: 保活网关重连测试在 CI 负载下通过 |
| [#147760](https://github.com/NousResearch/hermes-agent/pull/147760) | teknium1 | **fix(gateway)**: 在中断递归上限处保留每个排队轮次 |
| [#147751](https://github.com/NousResearch/hermes-agent/pull/147751) | teknium1 | **fix(tui)**: 在恢复前暂存已关闭/已回收的会话通知 |
| [#147761](https://github.com/NousResearch/hermes-agent/pull/147761) | teknium1 | **fix(providers)**: 命名配置缺少 provider key 时返回明确错误 |
| [#147380](https://github.com/NousResearch/hermes-agent/pull/147380) | emme1t | **fix(prompt)**: 尊重配置的临时目录 |
| [#147378](https://github.com/NousResearch/hermes-agent/pull/147378) | Jeff-Kazzee | **fix(daytona)**: 向 SDK 传递配置作用域的 API 密钥 |
| [#147753](https://github.com/NousResearch/hermes-agent/pull/147753) | teknium1 | **fix(gateway)**: 通过其他配置的机器人路由的会话的补全 |
| [#147750](https://github.com/NousResearch/hermes-agent/pull/147750) | teknium1 | Signal 在事件流重连时不再丢失消息 |
| [#147741](https://github.com/NousResearch/hermes-agent/pull/147741) | teknium1 | **fix(desktop)**: 启动时列出每个配置的 SSH 网关 |
| [#147718](https://github.com/NousResearch/hermes-agent/pull/147718) | teknium1 | **fix(desktop)**: 在其网关服务的配置上启动主程序 |
| [#147745](https://github.com/NousResearch/hermes-agent/pull/147745) | teknium1 | **fix(gateway)**: /bg 加入其后台委托 |
| [#147734](https://github.com/NousResearch/hermes-agent/pull/147734) | teknium1 | **fix(desktop)**: 回退启动不会自行切换网关 |
| [#147757](https://github.com/NousResearch/hermes-agent/pull/147757) | ningsiyuan1024 | **fix(kanban)**: 将已退役任务排除在待办 lane 之外 |

**主要主题**：会话投递修复、多路复用网关配置处理、Windows 路径支持、Signal 消息可靠性。

## 社区热点

讨论最活跃的 issue 揭示了异步委托与会话管理方面的持续痛点：

1. **[#139135](https://github.com/NousResearch/hermes-agent/issues/139135)**（14 条评论，已关闭）— Discord 异步子任务完成但持久结果保持 pending，父任务未恢复。这是影响生产部署的 P1 问题。

2. **[#99270](https://github.com/NousResearch/hermes-agent/issues/99270)**（10 条评论，待处理）— MCP 客户端将每个数组元素包装为 `{item: …}` 格式用于 tools/call，导致所有数组类型参数失效。这是影响 MCP 工具用户的基础集成 bug。

3. **[#144140](https://github.com/NousResearch/hermes-agent/issues/144140)**（5 条评论，1 个 👍，待处理）— Dashboard 列出无法打开的会话；session.resume 返回 not_found。

4. **[#78061](https://github.com/NousResearch/hermes-agent/issues/78061)**（3 条评论，待处理）— 功能请求：让工具直接消费前序工具的输出，无需模型重新发出。这解决了 MCP 工具链中的效率问题。

5. **[#95732](https://github.com/NousResearch/hermes-agent/issues/95732)**（1 条评论，1 个 👍，待处理）— 功能请求：当会话槽位释放时自动重发被拒绝的网关轮次。

**深层需求**：委托/会话问题的集中出现表明异步任务队列系统在多平台部署场景下压力较大。用户需要在 Discord、Telegram 和桌面环境中获得可靠的后台任务完成能力。

## 缺陷与稳定性

| 严重级别 | Issue | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **P1** | [#139135](https://github.com/NousResearch/hermes-agent/issues/139135): Discord 异步委托父任务不恢复 | 已关闭 | — |
| **P2** | [#99270](https://github.com/NousResearch/hermes-agent/issues/99270): MCP 数组参数包装破坏工具调用 | 待处理 | — |
| **P2** | [#144006](https://github.com/NousResearch/hermes-agent/issues/144006): Discord delegate_task 无限 admission_conflict | 已关闭 | — |
| **P2** | [#141893](https://github.com/NousResearch/hermes-agent/issues/141893): 异步委托 watcher 每 2 秒重试无退避 | 已关闭 | — |
| **P2** | [#144563](https://github.com/NousResearch/hermes-agent/issues/144563): 网关运行时异步委托完成结果永不投递 | 待处理 | — |
| **P2** | [#146853](https://github.com/NousResearch/hermes-agent/issues/146853): Exa 限流返回 HTTP 200，被当作成功处理 | 待处理 | — |
| **P3** | [#147719](https://github.com/NousResearch/hermes-agent/issues/147719): Windows 路径自动补全 ValueError | 待处理 | [#147764](https://github.com/NousResearch/hermes-agent/pull/147764) |
| **P3** | [#147729](https://github.com/NousResearch/hermes-agent/issues/147729): Kanban 面板错误分类遗留状态 | 待处理 | — |
| **P3** | [#147739](https://github.com/NousResearch/hermes-agent/issues/147739): 容器重建后共享浏览器配置被拒绝 | 待处理 | — |

**稳定性关切**：P1/P2 级委托 bug 表明异步任务队列系统需要加强。跨平台（Discord、Telegram）反复出现的 `admission_conflict` 错误指向会话准入逻辑中的共同底层问题。

## 功能请求与路线图信号

值得注意的功能请求预示未来开发方向：

- **[#78061](https://github.com/NousResearch/hermes-agent/issues/78061)**: 让工具直接消费前序工具输出，无需模型重新发出 — 解决 MCP 二进制内容处理效率问题
- **[#95732](https://github.com/NousResearch/hermes-agent/issues/95732)**: 当会话槽位释放时自动重发被拒绝的网关轮次 — 改善 max_concurrent_sessions 限制下的用户体验
- **[#82891](https://github.com/NousResearch/hermes-agent/issues/82891)**: 对可变版本 KittenTTS 发布 wheel 进行 SHA256 校验 — 供应链安全加固
- **[#82889](https://github.com/NousResearch/hermes-agent/issues/82889)**: 独立验证 Electron 镜像校验和 — 桌面安装的供应链防护
- **[#27616](https://github.com/NousResearch/hermes-agent/issues/27616)**: codex-runtime 迁移应保留完整的 Codex 权限

**预测**：基于当前趋势，下一个次版本（v0.22.6）可能聚焦会话/委托可靠性修复。安全加固（镜像、供应链）可能在未来补丁中到来。

## 用户反馈总结

**痛点**：
- **异步委托不可靠**：多位用户报告后台任务结果从未到达父会话，尤其是在 Discord 和 Telegram 上
- **MCP 集成失效**：由于客户端包装行为，数组类型参数调用失败
- **会话管理混乱**：Dashboard 显示无法打开的会话；多路复用设置中存在配置所有权问题
- **Windows 兼容性**：路径处理和桌面功能落后于 Linux/macOS

**积极信号**：
- teknium1 的大量 salvage PR 表明积极维护和对社区报告问题的响应能力
- Signal 消息可靠性改进（#147750）解决了已知缺陷
- 桌面 SSH 网关处理（#147741）改善了多配置工作流

## 待办关注

需要维护者关注的 issue：

| Issue | 存在时间 | 优先级 | 描述 |
|-------|-----|----------|-------------|
| [#99270](https://github.com/NousResearch/hermes-agent/issues/99270) | 2026-08-31 | P2 | MCP 数组包装 bug — 10 条评论，无 PR |
| [#78061](https://github.com/NousResearch/hermes-agent/issues/78061) | 2026-08-03 | P3 | 工具输出链式调用 — 3 条评论，无 PR |
| [#100088](https://github.com/NousResearch/hermes-agent/issues/100088) | 2026-09-01 | P3 | 模型选择器对自定义 provider 显示 0 个模型 |
| [#65056](https://github.com/NousResearch/hermes-agent/issues/65056) | 2026-07-15 | P3 | codex_app_server 静默忽略覆盖配置 |
| [#87186](https://github.com/NousResearch/hermes-agent/issues/87186) | 2026-08-15 | P3 | Kanban 插件移动端无响应式 — 1 条评论 |

MCP 数组问题（#99270）是影响范围最广的未修复项，影响所有使用数组参数调用 MCP 工具的用户。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese, following specific rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, link targets, numbers, dates, project names, repository slugs, usernames, version tags, file paths, and API/config identifiers in their original form
4. Issue/PR references like #12345 and their link text stay as-is
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not literal word-for-word rendering

Let me translate this while:
- Keeping the heading structure (## 1., ## 2., etc.)
- Keeping the tables as-is but translating content
- Translating sentences naturally into Chinese technical register
- Keeping code/numbers/URLs intact

Let me go through each section:

## 1. Today's Overview
- "Minimal development activity" → 几乎没有开发活动
- "maintenance phase" → 维护阶段
- "dependency maintenance" → 依赖项维护

## 2. Releases
- "No new releases" → 没有新版本发布

## 3. Project Progress
- "PRs Merged/Closed (24h)" → PR 合并/关闭（24小时）
- "PRs Opened (24h)" → PR 开启（24小时）
- "human-authored pull requests" → 人工提交的 PR
- "dependency maintenance" → 依赖项维护

## 4. Community Hot Topics
- "routine dependency updates" → 常规依赖更新
- "awaiting review/merge" → 待审核/合并

## 5. Bugs & Stability
- "bug reports" → 缺陷报告
- "stability issues or regressions" → 稳定性问题或回归


- "warrant maintainer attention" → 需要维护者关注
- "Priority" → 优先级
- "medium risk profile" → 中等风险

## 6. Feature Requests & Roadmap Signals
- "feature requests" → 功能请求

I'll continue translating the digest sections, focusing on maintaining the technical Chinese register while preserving the original structure and technical details. The key is to provide a smooth, natural translation that reads like a professional developer newsletter in Chinese.

The dependency updates reveal a comprehensive modernization effort across multiple technical domains. I'll ensure the translation captures the nuanced technical language while keeping the precise details intact.</think>

# IronClaw 项目动态 — 2026-11-02

## 1. 今日概览

IronClaw（nearai/ironclaw）在 2026 年 11 月 2 日**几乎没有开发活动**。过去 24 小时内没有 PR 或 Issue 合并，也没有新版本发布。过去一天更新的 5 个 PR 全部是 Dependabot 自动发起的依赖更新请求，涉及 Rust  crates、GitHub Actions 和 WebAssembly 工具链。项目目前处于**维护阶段**，所有活跃工作都聚焦于保持依赖项的最新状态，而非功能开发或缺陷修复。

---

## 2. 版本发布

过去 24 小时内**没有新版本发布**。

---

## 3. 项目进展

| 指标 | 数量 |
|---|---|
| PR 合并/关闭（24小时） | 0 |
| PR 开启（24小时） | 0 |
| Issue 关闭（24小时） | 0 |

今天没有人工提交的 PR 取得进展。5 个待开启的 PR 全部为来自 Dependabot 的依赖维护更新，目前待审核/合并状态。

---

## 4. 社区热点话题

过去 24 小时内没有 Issue 或具有显著讨论热度的话题。5 个待开启的 PR 均为常规依赖更新，零评论、零反馈。

| PR | 类别 | 更新内容 | 状态 |
|---|---|---|---|
| [#8160](https://github.com/nearai/ironclaw/pull/8160) | Rust 依赖 | 43 个包（thiserror、uuid、base64 等） | 待审核 |
| [#8159](https://github.com/nearai/ironclaw/pull/8159) | GitHub Actions | 11 个 action（claude-code-action、setup-python 等） | 待审核 |
| [#8141](https://github.com/nearai/ironclaw/pull/8141) | Tokio 生态 | 5 个 crate（tokio、tokio-test、tokio-util） | 待审核 |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | WebAssembly | 4 个包（wasmtime、wasmtime-wasi、wit-component、wit-parser） | 待审核 |
| [#8140](https://github.com/nearai/ironclaw/pull/8140) | 序列化 | serde_json 1.0.151 → 1.0.154 | 待审核 |

---

## 5. 缺陷与稳定性

过去 24 小时内**没有缺陷报告**。当前 PR 队列中未发现稳定性问题或回归风险。

---

## 6. 功能请求与路线图信号

今天未检测到**功能请求**。所有活跃 PR 均为依赖项维护，表明项目目前并未公开征集或实现新功能。

---

## 7. 用户反馈摘要

今天未捕捉到**用户反馈**（无来自社区成员的 Issue 或评论）。

---

## 8. 积压关注

以下待审核 PR 需要维护者关注：

| PR | 存续时间 | 风险等级 | 备注 |
|---|---|---|---|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 约 70 天 | **中等** | Wasm 组更新（wasmtime、wit-component）。规模：L。唯一一个风险等级非低 的 PR。 |
| [#8141](https://github.com/nearai/ironclaw/pull/8141) | 约 15 天 | 低 | Tokio 生态更新 — 常规操作。 |
| [#8140](https://github.com/nearai/ironclaw/pull/8140) | 约 15 天 | 低 | serde_json 补丁更新 — 风险低。 |

**优先级**：首先审核并合并 [#7834](https://github.com/nearai/ironclaw/pull/7834)，因为其开放时间较长且涉及中等风险范围（WebAssembly 运行时依赖）。

---

*数据来源：nearai/ironclaw GitHub 仓库 — 2026-11-02*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the project digest into Chinese. Let me carefully translate while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

## 1. Today's Overview
QwenPaw 在过去24小时内表现出较高的开发活跃度，共有20个PR和8个Issue更新。项目正在积极解决多平台兼容性问题（桌面端、受限环境）以及用户体验改进（通道延迟加载、UI响应速度）。Issue #7367（控制台通道启动延迟）已关闭，PR #7546（延迟加载修复）已合并。社区对QwenPaw Hub多租户路线图讨论（36条评论）表现出浓厚兴趣，表明团队对企业/协作部署功能的期待。

## 2. Releases
过去24小时内无新版本发布。

## 3. Project Progress
### Merged/Closed PRs
(Keep the table as-is structure but translate the titles)
| PR | 标题 | 状态 |
|----|------|------|
| #7546 | fix(channels): lazy-load unused builtin channel modules | **已合并** |
| #8033 | fix(tauri): stop reconciling away a live desktop instance's backend | **已合并** |

关键进展：通道延迟加载修复(#7546)解决了长期存在的启动延迟问题——之前仅启用控制台通道仍需30-45秒，因为所有18个内置通道模块都被无条件导入。

### Active PRs (Under Review)
(Keep the table structure)

## 4. Community Hot Topics
### Most Active Issue
(Keep the table)

分析：QwenPaw Hub（多租户）功能已在2.2.0版本发布，团队正在积极征集社区对下一步优先级的意见。这标志着项目从个人AI助手向团队/企业使用场景的转型。相关需求包括多用户访问和管理员托管技能(#2324)。
 
I'm tracking the project team dynamics, noting critical issues that need resolution. The current focus involves improving multi-platform compatibility and addressing server fallback challenges. Key technical improvements are underway, targeting system home directory detection and ensuring robust server interactions. These efforts aim to enhance overall platform stability and user experience across different environments.

The most prominent technical challenges center on multi-tenant deployment and server communication protocols, with ongoing efforts to refine system integration and address platform-specific constraints.

Critical bug fixes include resolving memory management issues in Auto-Dream, preventing silent data loss, and addressing Markdown preview path complications. UI responsiveness and user interaction challenges remain significant focus areas, requiring targeted improvements to enhance system reliability and user experience.

The development team is prioritizing feature requests around task scheduling, nested skill directories, and multi-tenant Hub enhancements, signaling a strategic approach to expanding platform capabilities and supporting more complex user workflows.</think>

# QwenPaw 项目摘要 — 2026-11-02

## 1. 今日概览

QwenPaw 在过去 24 小时内表现出较高的开发活跃度，共有 20 个 PR 和 8 个 Issue 更新。项目正在积极解决多平台兼容性问题（桌面端、受限环境）以及用户体验改进（通道延迟加载、UI 响应速度）。Issue #7367（控制台通道启动延迟）已关闭，PR #7546（延迟加载修复）已合并。社区对 QwenPaw Hub 多租户路线图讨论（36 条评论）表现出浓厚兴趣，表明团队对企业/协作部署功能的期待。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 PR

| PR | 标题 | 状态 |
|----|-------|--------|
| [#7546](https://github.com/agentscope-ai/QwenPaw/pull/7546) | fix(channels): lazy-load unused builtin channel modules | **已合并** |
| [#8033](https://github.com/agentscope-ai/QwenPaw/pull/8033) | fix(tauri): stop reconciling away a live desktop instance's backend | **已合并** |

**关键进展：** 通道延迟加载修复 (#7546) 解决了长期存在的启动延迟问题——之前仅启用控制台通道仍需 30-45 秒，因为所有 18 个内置通道模块都被无条件导入。该修复对应已关闭的 Issue #7367。

### 活跃中的 PR（审核中）

| PR | 标题 | 规模 | 状态 |
|----|-------|------|--------|
| [#8504](https://github.com/agentscope-ai/QwenPaw/pull/8504) | feat(desktop): add approval notifications | XXL | Open |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | feat(skills): support nested (categorised) skill directories | XXL | Under Review |
| [#8170](https://github.com/agentscope-ai/QwenPaw/pull/8170) | fix(console): tolerate DOM-mutation render errors and add chunk-error retry | M | Under Review |
| [#8445](https://github.com/agentscope-ai/QwenPaw/pull/8445) | fix(mcp): fall back when discover returns HTTP 404 and -32601 | S | Open |
| [#8525](https://github.com/agentscope-ai/QwenPaw/pull/8525) | fix(plugins): trust HOME over the passwd home when locking dependency state | S | Open |
| [#8527](https://github.com/agentscope-ai/QwenPaw/pull/8527) | fix(plugins): report an unusable dependency state root at startup | S | Open |

---

## 4. 社区热点话题

### 最活跃的 Issue

| Issue | 标题 | 评论数 | 👍 |
|-------|-------|----------|-----|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | [Discussion] QwenPaw Hub multi-tenant edition released in 2.2.0: what should we build next? | **36** | 4 |

**分析：** QwenPaw Hub（多租户）功能已在 2.2.0 版本发布，团队正在积极征集社区对下一步优先级的意见。这标志着项目从个人 AI 助手向团队/企业使用场景的转型。相关需求包括多用户访问和管理员托管技能 (#2324)。

### 其他活跃讨论

- **Issue #8424**（5 条评论）：MCP 服务器协议回退缺陷 — 使用纯遗留模式 MCP 服务器的用户受到 HTTP 404 + -32601 响应被视为硬错误的影响。
- **Issue #7367**（3 条评论）：仅控制台启动延迟 — 已通过 PR #7546 解决。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复 PR |
|----------|-------|-------------|--------|
| **高** | [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) | MCP 遗留服务器回退失败（HTTP 404 + -32601 被视为硬错误） | [#8445](https://github.com/agentscope-ai/QwenPaw/pull/8445) |
| **高** | [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515) | v2.3.0b2 在受限环境中崩溃（fnOS 沙箱）— 依赖锁路径问题 | [#8525](https://github.com/agentscope-ai/QwenPaw/pull/8525), [#8527](https://github.com/agentscope-ai/QwenPaw/pull/8527) |
| **中** | [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500) | Auto-Dream 在提取失败时静默丢弃内存，检查点文件无法使用 | 无 |
| **中** | [#8528](https://github.com/agentscope-ai/QwenPaw/issues/8528) | Markdown 预览重写相对路径，导致子目录链接 404 | 无 |
| **中** | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 对话中随机无回复内容；Ctrl+C 需多次按键；UI 响应投诉 | 无 |
| **低** | [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | 仅控制台启动延迟（30-45秒）— **已解决** | [#7546](https://github.com/agentscope-ai/QwenPaw/pull/7546) |

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 相关性 |
|-------|---------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub 多租户路线图 — 团队部署功能 | **高** — 活跃讨论，可能近期优先 |
| [#8523](https://github.com/agentscope-ai/QwenPaw/issues/8523) | Agent 任务调度/定时机制（每日调度、IM 通知） | 中 — 团队工作流自动化 |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | 支持嵌套（分类）技能目录 | 进行中 — 审核中 |

**预测：** 下一版本可能包含：
- 多租户 Hub 增强（基于 #7318 社区输入）
- 嵌套技能目录支持（PR #8178）
- 改进的受限环境兼容性

---

## 7. 用户反馈总结

### 反馈痛点

1. **UI 响应速度** (#8521)：用户反映 v2.2.2 比旧版本 UI 反应更慢，响应延迟，显示效率下降。请求提供 UI 切换按钮以回退到旧版风格。
2. **随机丢失回复** (#8521)：对话偶尔只显示思考内容但无实际回复——尚不确定是模型还是应用问题。
3. **复制功能失效** (#8521)：Ctrl+C 在 Chrome 和 Edge 中均需多次按键才能生效。
4. **受限环境崩溃** (#8515)：v2.3.0b2 在 fnOS NAS 应用沙箱中崩溃，原因是依赖锁路径解析问题。
5. **Auto-Dream 数据丢失** (#8500)：提取失败时静默丢弃内存，失败文件被写入检查点（永远不会重试）。

### 积极信号

- QwenPaw Hub 多租户功能（2.2.0）反响良好；社区积极贡献路线图意见。
- 延迟加载修复 (#7546) 解决了启动性能这一主要痛点。

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 创建时间 | 状态 | 关注点 |
|-------|-----|---------|---------|
| [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500) | 4 天 | Open | Auto-Dream 静默丢弃内存 — 数据完整性风险，暂无修复 PR |
| [#8528](https://github.com/agentscope-ai/QwenPaw/issues/8528) | <1 天 | Open | Markdown 预览路径重写破坏子目录链接 — 影响文件预览功能 |
| [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 2 天 | Open | 多个用户体验问题（无回复、复制失败、UI 缓慢）— 暂无明确负责人 |

### 停滞的 PR（无近期更新）

- [#8231](https://github.com/agentscope-ai/QwenPaw/pull/8231) — fix(console): persist market install provenance（审核中，距上次更新 20 天）
- [#8309](https://github.com/agentscope-ai/QwenPaw/pull/8309) — fix(cli): discover Ollama models before activation（审核中，距上次更新 15 天）
- [#8367](https://github.com/agentscope-ai/QwenPaw/pull/8367) — feat(chats): add keyword and agentic conversation search（XXL 规模，距上次更新 12 天）

---

*Based on GitHub data for agentscope-ai/QwenPaw on 2026-11-02*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Simplified Chinese while preserving all the Markdown structure, links, numbers, URLs, code references, and technical terms. Let me carefully translate this while keeping the exact format.

Key things to preserve:
- Markdown headings, tables, lists
- URLs and links
- Issue/PR numbers (#12345)
- Code/config identifiers (sops_dir, deliver_file, etc.)
- Version numbers and dates
- Column alignment in tables

Let me translate this carefully into natural technical Chinese.</think>

# ZeroClaw 项目摘要 — 2026-11-02

## 1. 今日概览

过去 24 小时内，ZeroClaw 继续保持活跃开发，**43 个 PR 更新**和 **11 个 issue**。项目在多渠道增强（Telegram、Lark、 Gemini S2S）和运维体验改进（会话配额、成本超额覆盖）方面展现强劲势头。本日未发布新版本，但多个高影响力 PR 正在推进合并。缺陷方面包括一个高严重度的守护进程问题（#9779）和 UTF-8 崩溃，而安全和稳定性工作主导了已合并的 PR。

---

## 2. 版本发布

**本日无新版本发布。** 最新版本仍为 v0.9.0（参见 issue #12154）。

---

## 3. 项目进展

### 已合并/关闭的 PR（共 4 个）

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#11686](https://github.com/zeroclaw-labs/zeroclaw/pull/11686) | IftekharUddin | **docs(plugins):** 修正了 `call_channel!` 关于无法提升的结果的说明 — 澄清了 Wasmtime 行为文档 |
| — | — | *另有 3 个 PR 已关闭（合并）— 数据中未详述具体内容* |

### 正在推进的重要 PR

| PR | 作者 | 状态 | 摘要 |
|----|--------|--------|---------|
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | metalmon | OPEN | **feat(channels):** Gemini 语音转语音代理 — 守护进程端核心（已接受的 RFC #8780 的 PR1） |
| [#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589) | Audacity88 | OPEN | **feat(runtime):** 允许运维人员覆盖超出限制的成本 — 解决了 `cost.allow_override` 文档有描述但未实现的问题 |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | JordanTheJet | OPEN | **feat(gateway):** 可选的 OIDC 仪表板登录 — 启用提供商认证的仪表板登录方式 |
| [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) | Audacity88 | OPEN | **feat(tools):** 添加可选的子进程内存监控 — 测量 shell/skill 子进程的常驻内存 |
| [#11698](https://github.com/zeroclaw-labs/zeroclaw/pull/11698) | Audacity88 | OPEN | **fix(runtime):** 保持 personality 文件在会话中稳定 — 防止文件编辑导致提示缓存失效 |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) | Audacity88 | OPEN | **feat(zerocode):** zerocode 重启时重新打开已打开的会话 — 保留侧边栏状态 |

---

## 4. 社区热点

### 活跃度最高的 Issue（按评论数）

1. **[#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779)** — *6 条评论*  
   **主题:** 文档中的 `sops_dir` 默认值未被守护进程遵守；SOP 静默加载失败  
   **分析:** 高优先级（P1）缺陷 — 文档描述的默认行为被运行时代码覆盖。守护进程基于 `sops_dir.is_some()` 条件来控制 SOP 加载，但没有回退到文档中声明的默认值，导致静默失败。表明文档与实现存在偏差。

2. **[#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013)** — *4 条评论*  
   **主题:** 追踪器：统一文件摄入、解析器及投递实现  
   **分析:** 已接受的 RFC #9488 的后续追踪器 — 一项广泛的架构工作，统一文件模型在摄入、解析、投影、保留和投递各环节的表现。高优先级（P2）且高风险，表明其战略重要性。

3. **[#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597)** — *3 条评论*  
   **主题:** 使对等代理轮次可持久化且可归属  
   **分析:** 运行时架构改进 — 将脱离的 `process_message` 调用转换为带有发送者/父级生命周期的可追踪运行时任务。正在进行中，表明开发活跃。

### 热门 PR（按关注度/优先级）

| PR | 评论数 | 优先级 | 主题 |
|----|----------|----------|-------|
| [#12157](https://github.com/zeroclaw-labs/zeroclaw/pull/12157) | — | docs | OIDC 注册绑定到发起请求的浏览器（安全修复） |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | — | 高 | Gemini 语音转语音代理渠道 |
| [#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/12157) | — | 高 | 成本限制覆盖给运维人员 |

**潜在需求信号：** 社区对以下方面表现出浓厚兴趣：
- **多渠道语音支持**（Gemini S2S）
- **运维控制能力**（会话配额、成本覆盖、内存监控）
- **安全加固**（OIDC、凭据续期）

---

## 5. 缺陷与稳定性

### 报告的缺陷（按严重度排序）

| Issue | 严重度 | 状态 | 描述 |
|-------|----------|--------|-------------|
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | **高** | OPEN | SOP 子系统在使用文档声明的默认 `sops_dir` 时静默失效 |
| [#12173](https://github.com/zeroclaw-labs/zeroclaw/issues/12173) | **高** | OPEN | Lark 卡片分块在字节预算边界处遇到多字节 UTF-8 字符时 panic |
| [#12178](https://github.com/zeroclaw-labs/zeroclaw/issues/12178) | **低** | OPEN | `deliver_file` 工具描述告诉模型将附件 URI 写入正文（误导性） |
| [#12176](https://github.com/zeroclaw-labs/zeroclaw/issues/12176) | **S2** | OPEN | 延迟的 MCP 工具列表顺序不确定 — 导致提示缓存失效 |
| [#12175](https://github.com/zeroclaw-labs/zeroclaw/issues/12175) | **S3** | OPEN | Personality 编辑器中渠道的复制文本错误 — UI 文本有误导性 |
| [#12154](https://github.com/zeroclaw-labs/zeroclaw/issues/12154) | **S3** | CLOSED | install.sh 显示构建提交哈希而非版本字符串 |

### 可用的修复 PR

| 修复 PR | 解决的缺陷 |
|--------|------------|
| [#12179](https://github.com/zeroclaw-labs/zeroclaw/pull/12179) | `deliver_file` 描述修复（解决 #12178） |
| [#12150](https://github.com/zeroclaw-labs/zeroclaw/pull/12150) | macOS Seatbelt home-dotfile 正则修复（解决 #12137） |
| [#12180](https://github.com/zeroclaw-labs/zeroclaw/pull/12180) | WebP 转 PNG 解码边界 |

---

## 6. 功能请求与路线图信号

### 新功能请求

| Issue | 类型 | 摘要 |
|-------|------|---------|
| [#12181](https://github.com/zeroclaw-labs/zeroclaw/issues/12181) | 功能 | Web 托管文档上传（#9488 的第二阶段） |
| [#12131](https://github.com/zeroclaw-labs/zeroclaw/issues/12131) | RFC | 共享执行权限与同一身份凭据续期 |
| [#12130](https://github.com/zeroclaw-labs/zeroclaw/issues/12130) | 功能 | 可配置的守护进程会话配额，本地运维预留 |

### 短期路线图指标

根据正在推进的 PR，预期下一版本将包含：
- ✅ **成本限制覆盖**（#11589）— 重要运维控制
- ✅ **OIDC 仪表板认证**（#11965）— 安全/SSO
- ✅ **子进程内存监控**（#11456）— 运维安全
- ✅ **zerocode 会话持久化**（#11727）— 用户体验改进
- ✅ **Personality 文件稳定性**（#11698）— 缓存/提示优化
- 🔲 **Gemini S2S 代理**（#10430）— 仍在进行中，可能跨多版本
- 🔲 **统一文件模型**（#11013）— 大型架构工作

---

## 7. 用户反馈摘要

### 发现的痛点

1. **SOP 加载静默失败**（#9779）— 依赖文档默认值的用户未收到任何错误/警告；这导致困惑和调试时间浪费。对信任度影响很大。

2. **提示缓存不稳定**（#12176、#11698）— 延迟的 MCP 工具和 personality 编辑导致系统提示变化，破坏了缓存优化。拥有大上下文量的用户受到影响。

3. **守护进程会话限制**（#12130）— 固定的 64 会话限制对多客户端部署（CLI、TUI、ACP、仪表板）不够用。用户请求可配置性。

4. **macOS 沙盒规则失效**（#12150）— 主目录 dotfile 规则因转义反斜杠从未匹配成功。受影响的是在 `~/.cargo`、`~/.nvm` 中配置工具的 macOS 用户。

5. **Windows 发布验证缺口**（#12166）— Windows 预构建版本没有校验和验证，造成信任问题。

### 积极信号

- 多渠道功能（Telegram 富消息、Lark、 Gemini S2S）的活跃开发满足了对平台特定需求的用户
- OIDC 集成（#11965、#12157）满足企业认证需求
- 运维导向控制（配额、成本限制、内存限制）进展明确

---

## 8. 待办事项关注

### 需要维护者关注的 Issue

| Issue | 存在时间 | 状态 | 风险 | 描述 |
|-------|-----|--------|------|-------------|
| [#9597](https://github.com/zeroclaw-labs/zeroclaw/issues/9597) | 94 天 | 进行中 | 高 | 对等代理轮次可持久化 — 长期进行中 |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | 66 天 | OPEN | 高 | Gemini S2S 代理 — 大型 PR 需要审核 |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | 43 天 | 已接受 | 高 | 统一文件模型追踪器 — 战略性质，可能需要人力投入 |

### 需要作者操作的 PR

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#11698](https://github.com/zeroclaw-labs/zeroclaw/pull/11698) | Audacity88 | 需要作者操作 |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) | Audacity88 | 需要作者操作 |
| [#11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589) | Audacity88 | 需要作者操作 |
| [#12132](https://github.com/zeroclaw-labs/zeroclaw/pull/12132) | IftekharUddin | 需要作者操作 |

---

*基于 2026-11-02 的 GitHub 数据生成。所有链接指向 zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*