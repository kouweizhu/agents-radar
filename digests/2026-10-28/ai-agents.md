# OpenClaw 生态日报 2026-10-28

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-28 01:37 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English OpenClaw project digest into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this while preserving the structure:

## 1. Today's Overview
High activity -> 高度活跃
500 issues updated -> 500 个 issue 更新
500 PRs updated -> 500 个 PR 更新
3 new releases -> 3 个新版本

Let me go through each section carefully.</think>

# OpenClaw 项目简报 — 2026-10-28

## 1. 今日概览

OpenClaw 今天表现出**极高活动度**，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。项目发布了三个版本，包括一个 beta 版和两个稳定版，重点修复了 Windows 重启、Doctor 恢复和 ACL 文件系统等问题。然而，仍有多个 P0 问题热度不减，尤其是 Windows 可靠性、内存消耗回归和 Gateway 事件循环阻塞等方面。维护团队正在积极处理涵盖性能、UI 和安全修复的 PR。

---

## 2. 版本发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v2026.10.10-beta.4** | Beta | **修复：** 自动化现在保留显式同会话计划后续任务的认证操作者权限，保留角色、会话、取消、目标及工具策略撤销边界。 |
| **v2026.10.8** | Stable | **亮点：** 更新后 Doctor 失败现在会重启 Gateway 而非让其停止；孤立的后台工作器不再阻塞 CLI 命令和 Gateway 启动；ACL 文件系统和 Windows 上的更新不再中止。 |
| **v2026.9.35** | 长期支持版 (LTS) | Gateway 专属 LTS 版本，包含关键安全更新、可靠性/性能修复及新模型支持。 |

**迁移说明：** 这些版本未报告破坏性变更。Windows 用户应注意改进的重启可靠性。

---

## 3. 项目进展

**今日合并/关闭的 notable PR：**

| PR | 标题 | 状态 |
|----|-------|--------|
| [#186417](https://github.com/openclaw/openclaw/pull/186417) | fix(hooks): webhook and join-introduction turns no longer run with owner-only tools | 🔒 **CLOSED** (安全修复) |
| [#183018](https://github.com/openclaw/openclaw/pull/183018) | fix(ui): keep guest access guidance in Profile without Inbox warnings | CLOSED |
| [#178347](https://github.com/openclaw/openclaw/pull/178347) | docs(update): image-based hosts stay down after an upgrade until Doctor runs | CLOSED |
| [#185902](https://github.com/openclaw/openclaw/pull/185902) | `openclaw memory index` exits silently on SIGTERM, leaving orphaned shadow DB | CLOSED |
| [#167410](https://github.com/openclaw/openclaw/pull/167410) | Native Codex completion inherits aborted run scope | CLOSED |

**推进的功能：**
- **降级链路修复** ([#186420](https://github.com/openclaw/openclaw/pull/186420))：Agent.run 现可携带降级链路，使固定模型在配额 429 时不再死胡同
- **TUI 无障碍** ([#185921](https://github.com/openclaw/openclaw/pull/185921))：TUI 新增屏幕阅读器模式
- **会话恢复** ([#185730](https://github.com/openclaw/openclaw/pull/185730))：优雅重启现在会恢复运行中的会话而非阻塞

---

## 4. 社区热点话题

**最活跃的 Issue（按评论数排序）：**

| Issue | 评论数 | 焦点 |
|-------|----------|-------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | **58** | Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归） |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | **25** | 同步 Agent 持久化和转录维护在规模化时阻塞 Gateway 事件循环 |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | **22** | Windows：启动慢、插件关闭不干净、schtasks 权限错误 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | **19** | 卡住的 Agent-DB 资源导致每个 Agent 的回复失败直到 Gateway 重启 |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) | **18** | Code Mode 工具目录不完整，缺少计划/定时和内存刷新轮次的工具 — MCP 工具缺失 |

**分析：** 最活跃的讨论集中在**性能回归**（事件循环阻塞）、**Windows 可靠性**和**插件系统问题**。用户对阻塞 Gateway 的操作（尤其是大型插件和同步持久化）感到沮丧。

---

## 5. Bug 与稳定性

**P0（严重）问题：**

| Issue | 严重程度 | 状态 | 修复 PR？ |
|-------|----------|--------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | 崩溃循环，P0 | 打开 | 无 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 消息丢失，UX 阻塞 | 打开 | 无 |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | UX 发布阻塞 | 打开 | 无 |
| [#167406](https://github.com/openclaw/openclaw/issues/167406) | 崩溃循环 | 打开 | 无 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | UX 发布阻塞 | 打开 | 无 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 内存回归（~1.9GB RSS），P1 | 打开 | 无 |
| [#169797](https://github.com/openclaw/openclaw/issues/169797) | 内存回归（2.5 倍），P1 | 打开 | 无 |
| [#181078](https://github.com/openclaw/openclaw/issues/181078) | "规范会话阅读器延续不再最新" 回归 | 打开 | 无 |

**关键问题：**
- **内存回归**：2026.10.x 版本相比 2026.9.4 显示内存增加 2.5 倍至 6 倍
- **Windows 可靠性**：多个 P0 Windows 特定问题涉及重启、更新和权限
- **事件循环阻塞**：大型外部插件导致数分钟阻塞

---

## 6. 功能请求与路线图信号

**活跃的功能请求：**

| Issue | 请求 | 优先级 |
|-------|---------|----------|
| [#7722](https://github.com/openclaw/openclaw/issues/7722) | **文件系统沙箱配置**（tools.fileAccess 搭配 allowedPaths/denyPaths） | P2，钻石 🦞 |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | **按模型的用量日志**用于成本追踪 | P2 |
| [#172547](https://github.com/openclaw/openclaw/issues/172547) | 从内存搜索索引中排除围栏式梦境范围 | P2 |
| [#52732](https://github.com/openclaw/openclaw/issues/52732) | agents.list 中的按 Agent 压缩和 contextPruning 覆盖 | P2 |
| [#175826](https://github.com/openclaw/openclaw/issues/175826) | Android：匹配浏览器应用内可选问题和原生审批 | P2 |

**路线图信号：**
- 无障碍改进（TUI 屏幕阅读器模式）正在落地 — 表明无障碍是优先事项
- 内存和性能优化正在积极开发中（多个 PR）
- 鉴于多项近期修复，Windows 可靠性似乎是重点领域

---

## 7. 用户反馈总结

**已识别的问题点：**

1. **Windows 不可靠** — 多份报告称更新失败、schtasks 权限错误和未干净关闭使得重启"需要多次重试"（[#170956](https://github.com/openclaw/openclaw/issues/170956)）

2. **内存膨胀** — 升级到 2026.10.x 的用户看到基础 RSS 从 ~300MB 跳升至 ~1.9GB，相比 2026.9.4 内存使用增加 2.5 倍至 6 倍

3. **事件循环阻塞** — 大型插件捕获和同步持久化操作将 Gateway 冻结数分钟

4. **Skill Workshop 变异** — 用户报告"未经审查的技能自动变异，普通用户无法恢复的 Agent 行为污染"（[#184600](https://github.com/openclaw/openclaw/issues/184600)）

5. **更新失败** — 多份报告称 Gateway 升级后保持停止状态，需要 Doctor 介入

**满意度信号：**
- Doctor 自动重启和 ACL 文件系统处理的近期修复受到积极响应
- 配额 429 的降级链路修复解决了长期痛点

---

## 8. 待处理事项

**需要维护者关注的陈旧 Issue：**

| Issue | 创建时间 | 状态 | 问题 |
|-------|-----|---------|---------|
| [#122019](https://github.com/openclaw/openclaw/issues/122019) | 2026-08-11 | 陈旧 | `openclaw update status` 缺少插件可用性和迁移风险 |
| [#130955](https://github.com/openclaw/openclaw/issues/130955) | 2026-08-27 | 陈旧 | 内存索引在恰好 2 个文件后停滞 |
| [#143640](https://github.com/openclaw/openclaw/issues/143640) | 2026-09-10 | 陈旧 | 完整索引发布耗尽 5s 忙碌超时 |
| [#164394](https://github.com/openclaw/openclaw/issues/164394) | 2026-10-03 | 陈旧 | Control UI 转录在滚动时抖动 |
| [#166017](https://github.com/openclaw/openclaw/issues/166017) | 2026-10-06 | 打开 | mcp.sessionIdleTtlMs 默认值未应用，spawn broker 填满至 256 上限 |
| [#184600](https://github.com/openclaw/openclaw/issues/184600) | 2026-10-26 | 打开 | Skill Workshop 自动变异担忧（7 条评论） |

**优先待办项：**
- 多个带有 `clawsweeper:needs-maintainer-review` 标签的 P1/P2 问题需要审查
- 文件系统沙箱（[#7722](https://github.com/openclaw/openclaw/issues/7722)）等安全敏感问题正等待产品决策
- 尽管有多份报告，SQLite 争用问题仍未得到充分解决

---

*简报基于 OpenClaw 仓库数据生成 — github.com/openclaw/openclaw*

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese. They have given me very specific rules:
- Output ONLY the translation - no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep technical terms, project names, version numbers, URLs, issue numbers in original form
- Use natural technical Chinese, like a Chinese developer newsletter

Let me translate this carefully while maintaining the exact structure.</think>

# 跨项目对比报告：个人 AI 助手生态系统

## 1. 生态系统概览

2026 年后期，个人 AI 助手与 Agent 开源生态系统正经历快速增长与多元化。项目在基础设施层面趋于一致——会话持久化、跨平台可靠性、上下文管理——但在部署模式上分化明显：Hermes Agent 强调本地优先架构与浏览器托管的 Desktop，OpenClaw 瞄准规模化企业可靠性，ZeroClaw 优先考虑安全加固部署，QwenPaw 则专注于可扩展工具生态与 MCP 集成。领域呈现三个梯队的健康竞争：高速迭代项目（OpenClaw、Hermes Agent）每月发布，中游项目（QwenPaw、ZeroClaw）深耕垂直功能，IronClaw 项目处于休眠状态，可能面临整合或停用。

---

## 2. 活动对比

| 项目 | Issue 更新 (24h) | PR 更新 (24h) | Release (24h) | 开放 Issue | 开放 PR | 健康梯队 |
|---------|----------------------|-------------------|----------------|-------------|----------|-------------|
| **OpenClaw** | 500 | 500 | 3 | ~47 | ~42 | 🟢 高速迭代 |
| **Hermes Agent** | 50 | 50 | 0 | 47 | 38 | 🟢 高速迭代 |
| **QwenPaw** | 36 | 50 | 1 | 16 | 41 | 🟡 中游 |
| **ZeroClaw** | 22 | 42 | 1 | 21 | ~20 | 🟡 中游 |
| **IronClaw** | 0 | 0 | 0 | — | — | ⚪ 休眠 |

---

## 3. OpenClaw 的定位

### 相比同行的优势

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **提交量** | 主导 (500 PRs/24h) | 较高 (50 PRs) | 中等 (50 PRs) | 中等 (42 PRs) |
| **发布节奏** | 24h 内 3 个版本 | v0.22.5 稳定版 | v2.3.0-beta.1 | v0.8.7 安全版 |
| **企业级聚焦** | ✅ 强 (Windows, ACL, Doctor) | 有限 | 有限 | 安全导向 |
| **本地模型支持** | 有限 | 新增 LFM3 1.7B | 基础 | 有限 |
| **会话管理** | 高级 | 开发中 | 基础 | 事件历史进行中 |
| **社区规模** | 最大 (47 开放 issues) | 较大 | 中等 | 中等 |

### 技术路径差异
- **OpenClaw** 优先保障**可靠性与运维简便性**——自动化 Doctor 恢复、ACL 文件系统容错、Windows 重启无需人工介入
- **Hermes Agent** 采用**本地优先/浏览器嵌入**方案——Webapp 转为 PWA、嵌入式浏览器、原生 Codex 补全
- **ZeroClaw** 专注**安全加固**——OIDC、Release 签名审计、治理审计、提示词注入防护
- **QwenPaw** 强调**可扩展性**——MCP 集成、Firecrawl、嵌套技能、语音聊天

---

## 4. 共同技术聚焦领域

### 跨项目需求

| 聚焦领域 | OpenClaw | Hermes | QwenPaw | ZeroClaw | 优先级 |
|------------|:--------:|:------:|:-------:|:--------:|:--------:|
| **会话持久化/恢复** | ✅ | ✅ | — | ✅ | 高 |
| **MCP 工具可靠性** | — | — | ✅ (bugs) | ✅ (bugs) | 高 |
| **上下文/窗口管理** | ✅ (Doctor) | — | ✅ | — | 高 |
| **跨平台 (Linux 打包)** | — | ✅ | — | ✅ | 中 |
| **内存优化** | ✅ (回归修复) | — | — | — | 高 |
| **安全加固** | ✅ | — | — | ✅ (OIDC, 提示词防护) | 高 |
| **OAuth/认证** | — | ✅ | ✅ | ✅ | 中 |
| **本地模型支持** | — | ✅ | — | — | 增长中 |

**关键洞察：** 会话管理、MCP 可靠性、安全加固正成为**生态系统级需求**。缺乏成熟会话恢复能力的项目（QwenPaw）面临的用户投诉与 OpenClaw 和 Hermes 如出一辙。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **主要用户** | 企业、运维团队 | 开发者、本地优先用户 | 开发者、进阶用户 | 安全敏感型企业 |
| **部署模式** | 网关托管 | 本地/浏览器嵌入 | 云端 + Desktop | 自托管、本地部署 |
| **发布模式** | 快速迭代 (beta + stable) | 稳定版驱动 | Beta 为主 | 安全驱动 |
| **核心差异化** | 运维自动化 | 浏览器托管 Desktop | MCP 生态 | 安全签名审计 |
| **短板** | 内存回归 | 会话恢复能力 | 超时恢复 | 功能迭代速度 |
| **长板** | Windows/ACL 可靠性 | 本地模型 + PWA | 可扩展性 | 安全加固 |

---

## 6. 社区活力与成熟度

### 活动梯队

| 梯队 | 项目 | 特征 |
|------|----------|------------------|
| **快速迭代** | OpenClaw, Hermes Agent | >50 PRs/24h，月度发布，功能开发活跃 |
| **稳定期** | QwenPaw, ZeroClaw | 30-50 PRs/24h，beta/安全版本迭代，核心功能打磨 |
| **休眠** | IronClaw | 零活动——归档或社区接管候选 |

### 成熟度信号

- **OpenClaw**：成熟——多发布轨道（beta、stable、LTS），完善的 Issue 追踪，活跃的安全响应
- **Hermes Agent**：成长期——v0.22 大版本发布后，Browser Desktop 已交付，会话互操作仍在打磨
- **QwenPaw**：中等成熟——v2.3.0-beta.1，语音开发中，但超时/上下文问题持续存在
- **ZeroClaw**：安全成熟——v0.8.7 展示快速安全响应，但功能迭代落后于同行

---

## 7. 趋势信号

### 社区反馈反映的行业趋势

| 趋势 | 证据 | 项目 |
|-------|----------|----------|
| **会话持久化成为基准预期** | 4 个项目均有开放会话 issue；各平台最高频投诉 | 全部 |
| **MCP 集成需要加固** | MCP 连接污染 (#10807)、弹窗 bug (#8405)、HTTP 连接池控制 (#12055) | QwenPaw, ZeroClaw |
| **本地/模型灵活性需求旺盛** | LFM3 1.7B 支持已合并，配额 429 回退阶梯 | Hermes, OpenClaw |
| **安全加固加速** | 提示词防护、OIDC、Release 签名、治理审计 | ZeroClaw, OpenClaw |
| **Windows 作为生产平台** | 跨 OpenClaw、QwenPaw 多项 Windows 可靠性问题 | OpenClaw, QwenPaw |
| **跨客户端会话共享** | Desktop↔移动端会话访问请求 | Hermes, QwenPaw |
| **PWA/嵌入式浏览器渐热** | Dashboard 转为 PWA，Browser Desktop 嵌入 | Hermes, QwenPaw |

### AI Agent 开发者价值参考

1. **避免重复造会话管理轮子**——采用 OpenClaw 的 Doctor 或 Hermes 的会话框架，而非自建
2. **优先保障 MCP 可靠性**——连接污染与 HTTP 池问题在业内普遍；设计时需考虑隔离与重试逻辑
3. **企业部署安全先行**——ZeroClaw 的签名审计与 OIDC 工作提供了生产部署模板
4. **考虑本地优先架构**——Hermes 的浏览器托管 Desktop 证明了纯服务端部署的可行替代方案

---

*对比报告基于 2026-10-28 各项目 Digest 生成——数据反映各项目 24 小时活动窗口。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English project digest into Chinese. Let me analyze the content and translate it while preserving:

1. The Markdown structure exactly
2. Tables (including alignment)
3. Lists
4. URLs, links, numbers
5. Project names, usernames, version tags, file paths
6. Technical terms - I should use natural technical Chinese

Let me translate section by section, keeping the same structure and formatting.

Key decisions:
- "Hermes Agent" - keep as-is
- "NousResearch/hermes-agent" - keep as-is
- Issue/PR numbers - keep as-is
- Version numbers - keep as-is
- Headings - translate
- Body text - translate to natural technical Chinese

Let me start:</think>

# Hermes Agent 项目简报 — 2026-10-28

## 1. 今日概览

Hermes Agent 今日开发活动**频繁**，过去 24 小时内更新了 50 个 issue 和 50 个 PR。项目正处于**功能丰富阶段**，近期重大发布包括浏览器托管版 Desktop webapp（#141864），同时在会话管理、跨平台兼容性和本地模型支持方面持续推进。今日未发布新版本，但合并率健康（8 个 PR 已合并/关闭）。积压问题较多（47 个 open issue），反映出开发活跃和用户参与度高。安全相关工作突出，webapp 合并后的后续跟进和授权头处理正在进行中。

---

## 2. 版本发布

**今日无新版本。** 项目仍保持在 v0.22.5 stable。

---

## 3. 项目进展

### 今日合并/关闭的 PR（8 个）

| PR | 标题 | 状态 |
|----|-----|------|
| [#145770](https://github.com/NousResearch/hermes-agent/pull/145770) | fix(webapp): inspect plugin repositories through the gateway | CLOSED |
| [#145753](https://github.com/NousResearch/hermes-agent/pull/145753) | fix(pm): a launcher waiting on a reclaimed install state's lock retries on the live file | CLOSED |
| [#145772](https://github.com/NousResearch/hermes-agent/pull/145772) | fix(providers): Windows arm64 hosted provider plugin re-import | CLOSED |
| [#141647](https://github.com/NousResearch/hermes-agent/pull/141647) | fix(desktop): resolve workspace-relative MEDIA paths | CLOSED |
| [#86329](https://github.com/NousResearch/hermes-agent/pull/86329) | fix(error_classifier): detect upstream provider 403 errors | CLOSED |

### 重点进行中的 PR

- [#145805](https://github.com/NousResearch/hermes-agent/pull/145805) — Auto-fix lint workflow（自动合并）
- [#145804](https://github.com/NousResearch/hermes-agent/pull/145804) — **fix(pm): carry locale catalogs into managed workspace snapshot** — 关键国际化修复
- [#145801](https://github.com/NousResearch/hermes-agent/pull/145801) — **feat(dashboard): serve manifest and service worker** — PWA 可安装性
- [#145800](https://github.com/NousResearch/hermes-agent/pull/145800) — **feat(local-runtime): LFM3 1.7B with llama.cpp b11940** — 新增本地模型支持
- [#145799](https://github.com/NousResearch/hermes-agent/pull/145799) — **可配置的 auth/user-agent 头替换 SDK 默认值** — 安全性/可控性提升
- [#145803](https://github.com/NousResearch/hermes-agent/pull/145803) — fix(web): forward insertText to PTY with screenReaderMode
- [#145798](https://github.com/NousResearch/hermes-agent/pull/145798) — feat(desktop): 带地址栏的悬浮内置浏览器
- [#145788](https://github.com/NousResearch/hermes-agent/pull/145788) — fix(webapp): phone tab picker reaches every tab's menu

---

## 4. 社区热点

### 互动最活跃的 Issue（按评论数）

1. **[#139818](https://github.com/NousResearch/hermes-agent/issues/139818)** — Remote-backend desktop sessions unresumable（24 条评论）
   - **根本原因：** 通过 `hermes serve --host` 创建的 `source='desktop'` 会话在 gateway 重启后无法恢复
   - **深层需求：** 远程后端部署中 gateway 重启后的会话持久化可靠性

2. **[#144648](https://github.com/NousResearch/hermes-agent/issues/144648)** — Webapp 合并后跟进（10 条评论）
   - **深层需求：** 刚发布的浏览器托管版 Desktop 安全加固和 UX 优化
   - 相关 PR：#145573（CSP）、#145788

3. **[#112028](https://github.com/NousResearch/hermes-agent/issues/112028)** — 多终端会话访问（8 条评论）
   - **需求：** Desktop 和移动端 dashboard 访问同一会话
   - **优先级：** P2，需决策

4. **[#144814](https://github.com/NousResearch/hermes-agent/issues/144814)** — hermes-mobile 创建的会话无法被 Desktop 恢复（7 条评论）
   - **跨客户端兼容性问题**

---

## 5. 缺陷与稳定性

### 严重/高优先级（P2）

| Issue | 标题 | 状态 |
|-------|------|------|
| [#139818](https://github.com/NousResearch/hermes-agent/issues/139818) | Remote-backend desktop sessions unresumable | OPEN |
| [#144814](https://github.com/NousResearch/hermes-agent/issues/144814) | Dashboard-login sessions can't be resumed by Desktop | OPEN |
| [#143331](https://github.com/NousResearch/hermes-agent/issues/143331) | hermes update fails on Windows (stale gateway.pid) | CLOSED |
| [#143561](https://github.com/NousResearch/hermes-agent/issues/143561) | /api/status, tickets, session.resume time out on loaded host | OPEN |
| [#143256](https://github.com/NousResearch/hermes-agent/issues/143256) | hosted-room driver exhausts read pool with supervisor threads | OPEN |
| [#145155](https://github.com/NousResearch/hermes-agent/issues/145155) | cron context_from injects days-old run (archive off-by-one) | OPEN |
| [#145063](https://github.com/NousResearch/hermes-agent/issues/145063) | tool-call args drop fields with anyOf/optional payload | OPEN |
| [#141854](https://github.com/NousResearch/hermes-agent/issues/141854) | Desktop Messaging shows "Needs setup" forever for token-free platforms | OPEN |

### 已合并的修复
- [#145804](https://github.com/NousResearch/hermes-agent/pull/145804) — 语言目录路径修复
- [#145803](https://github.com/NousResearch/hermes-agent/pull/145803) — 安卓键盘输入修复
- [#145801](https://github.com/NousResearch/hermes-agent/pull/145801) — Dashboard PWA 可安装性
- [#145799](https://github.com/NousResearch/hermes-agent/pull/145799) — 授权头处理

---

## 6. 功能需求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| [#136319](https://github.com/NousResearch/hermes-agent/issues/136319) | Mobile access to live desktop session (read-only mirror + input) | P3 | 对移动端伴侣功能兴趣增长 |
| [#112028](https://github.com/NousResearch/hermes-agent/issues/112028) | Multi-surface access to same session | P2 | 需决策——可能是下个里程碑 |
| [#145798](https://github.com/NousResearch/hermes-agent/pull/145798) | Floating in-app Browser (PR 已合并) | 已发布 | 改进 agent 产物预览 |
| [#145800](https://github.com/NousResearch/hermes-agent/pull/145800) | LFM3 1.7B local model (PR 已合并) | 已发布 | 扩展本地运行时选项 |

### 路线图指标
- **会话互操作性** 是主要主题（#112028、#139818、#144814、#144140）—— 预计跨客户端会话共享将迎来改进
- **Webapp/浏览器集成**（#144648）正在合并后积极加固
- **本地模型扩展** 持续推进中，新增 LFM3 支持

---

## 7. 用户反馈总结

### 痛点

1. **会话恢复失败** — 多个相关问题（#139818、#144814、#144140、#143907）显示用户对列表中可见但无法打开的会话感到沮丧
2. **Windows 可靠性** — `hermes update` 失败及更新通道降级问题（#143331）
3. **平台凭证混淆** — 无令牌平台错误显示"需要设置"（#141854）
4. **定时任务可靠性** — 旧数据被注入新运行（#145155）
5. **移动端 webapp UX** — 长用户消息在移动端占用大量视口（#145593）

### 积极信号
- Webapp 发布（#141864）引发后续跟进
- 本地模型支持扩展（LFM3 1.7B）
- Dashboard PWA 可安装性改善

---

## 8. 积压关注

### 长期未解决的重要 Issue

| Issue | 标题 | 时长 | 状态 |
|-------|------|------|------|
| [#19821](https://github.com/NousResearch/hermes-agent/issues/19821) | QQ Bot WebSocket silently dies (18+ hours) | ~5 个月 | OPEN |
| [#131421](https://github.com/NousResearch/hermes-agent/issues/131421) | Desktop: send + instant chat switch silently cancels send | ~3 周 | OPEN |
| [#136319](https://github.com/NousResearch/hermes-agent/issues/136319) | Mobile access to live desktop session | ~2 周 | OPEN |
| [#143831](https://github.com/NousResearch/hermes-agent/issues/143831) | Legacy session adoption rejects custom source labels | ~4 天 | OPEN |

### 需要维护者关注的 Issue

- **安全审查：** #144648 webapp 跟进（10 条评论）
- **架构决策：** #112028 多终端会话（P2，需决策）
- **平台特定：** #143331 Windows 更新路径（近期关闭，但可能需要跟进验证）

---

*基于 2026-10-28 的 GitHub 数据生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this project digest into Simplified Chinese. Let me analyze the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths as-is
5. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate while maintaining the structure:

Title: QwenPaw Project Digest — 2026-10-28
→ QwenPaw 项目摘要 — 2026-10-28

"Today's Overview" → "今日概览"

"Releases" → "版本发布"

"Project Progress" → "项目进展"

"Community Hot Topics" → "社区热点"

"Bugs & Stability" → "缺陷与稳定性"

"Feature Requests & Roadmap Signals" → "功能需求与路线图信号"

"User Feedback Summary" → "用户反馈总结"

"Backlog Watch" → "积压工作关注"

Let me translate all the content carefully, maintaining the exact markdown structure and keeping technical terms in their original form.</think>

# QwenPaw 项目摘要 — 2026-10-28

## 今日概览

QwenPaw 展现出极高的开发活力，过去 24 小时内更新了 **36 个 issue** 和 **50 个 Pull Request**。项目发布了 **v2.3.0-beta.1**，解决了控制台预览恢复和 Tavily API 集成问题。社区参与度依然强劲，多个长期存在的问题正在得到解决（例如 Codex 的 OAuth 登录、edit_file 的 CRLF 保持）。Issue 待办中显示 16 个活动 ticket，同时 12 个 PR 已合并/关闭，表明 sprint 进度健康。值得注意的是，多个围绕上下文管理、MCP 处理和提供商兼容性的关键 bug 仍然开放，需要关注。

---

## 版本发布

### v2.3.0-beta.1
**发布日期：** 2026-10-28

**变更：**
- **修复 (console)：** 恢复交互式 HTML 预览 ([#8245](https://github.com/agentscope-ai/QwenPaw/pull/8245))
- **功能 (tools)：** 通过凭据存储配置可选的 Tavily API 密钥 ([#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204))
- **修复 (plugin)：** 对齐修复（部分条目）

**迁移说明：** 这是一个 beta 版本。使用 Tavily 网页搜索集成的用户应通过凭据存储而非环境变量配置凭据，以增强安全性。

---

## 项目进展

**已合并/关闭的 PR（过去 24 小时共 12 个）：**

| PR | 作者 | 变更 | 影响 |
|----|------|------|------|
| [#8448](https://github.com/agentscope-ai/QwenPaw/pull/8448) | zhaozhuang521 | 将智能体技能选择限制在创建阶段 | Console UX 改进；防止运行时技能操作 |
| [#8458](https://github.com/agentscope-ai/QwenPaw/pull/8458) | LUOSENGWA | 允许嵌入 data: 字体在 CSP 中 | 桌面端渲染修复，支持 KaTeX 数学公式 |
| [#8454](https://github.com/agentscope-ai/QwenPaw/pull/8454) | Heipa1 | 移除重复的 pip install 部分 | 文档清理 |
| [#8449](https://github.com/agentscope-ai/QwenPaw/pull/8449) | cuiyuebing | 修复 e2e 测试 | 测试基础设施 |

**活跃开发中的亮点：**

| PR | 作者 | 描述 |
|----|------|------|
| [#8433](https://github.com/agentscope-ai/QwenPaw/pull/8433) | suantea | 在 edit_file 中保留行尾和编码（修复 CRLF→LF 转换） |
| [#8434](https://github.com/agentscope-ai/QwenPaw/pull/8434) | suantea | 在模型页面添加"快速添加模型"按钮 |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | LUOSENGwa | 为 Tauri 构建添加 Linux deb 和 AppImage 打包 |
| [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) | wuwenbo0626 | 注入自动召回作为引用上下文（修复 #8361） |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | jinglinpeng | 添加实时语音聊天（XXXL 功能） |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | cyruszhang | 重构 SDK 和应用控制平面 |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | Luohh5 | 将 channels 提取为插件，支持子进程隔离 |

---

## 社区热点

### 评论最多的 Issue（按评论数排序）

1. **[#1536](https://github.com/agentscope-ai/QwenPaw/issues/1536)** — [已关闭] Codex OAuth 登录 — *5 条评论*
   - **主题：** 使用 OAuth 认证配置模型
   - **信号：** 用户希望 Codex 集成采用安全、易用的认证方式

2. **[#8405](https://github.com/agentscope-ai/QwenPaw/issues/8405)** — [已关闭] MCP 配置弹窗无法正常关闭 — *5 条评论*
   - **主题：** MCP 客户端管理中的 HTTP/SSE 传输模式
   - **状态：** 已修复（已关闭）

3. **[#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312)** — [开放] 上下文控制失败导致任务中断 — *4 条评论*
   - **主题：** MODEL CONTEXT LENGTH EXCEEDED 错误
   - **严重程度：** 高 — 干扰用户工作流

4. **[#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935)** — [已关闭] LLM 超时后无法自动恢复 — *4 条评论*
   - **主题：** 出现 `Request timed out` 后，QwenPaw 无法自我恢复
   - **影响：** 需要手动重启；影响生产部署

5. **[#4124](https://github.com/agentscope-ai/QwenPaw/issues/4124)** — [已关闭] 功能请求：OpenAI/Codex 的 OAuth 登录支持 — *4 条评论*
   - **与 #1536 相关** — 确认了强烈的用户需求

6. **[#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199)** — [已关闭] Firecrawl 作为 web_search 提供商 — *3 条评论*
   - **结果：** 已接受；Firecrawl 团队将构建和维护

**已识别的基础需求：**
- 第三方 LLM 提供商的 OAuth 认证（安全 + 易用）
- 超时/网络故障的健壮错误恢复
- 长会话期间改进的上下文/窗口管理

---

## 缺陷与稳定性

### 关键/开放中的 Bug

| Issue | 严重程度 | 描述 | PR/状态 |
|-------|----------|------|---------|
| [#8312](https://github.com/agentscope-ai/QwenPaw/issues/8312) | **高** | 上下文控制失败 — 任务中断 | 开放 |
| [#8265](https://github.com/agentscope-ai/QwenPaw/issues/8265) | **高** | 插件热安装在 distro-patched Python 3.11 上中止 | 开放 |
| [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) | **高** | server/discover 404 + JSON-RPC 未处理 — 传统 MCP 回退失败 | 开放 |
| [#8417](https://github.com/agentscope-ai/QwenPaw/issues/8417) | **中** | 上下文压缩在 火山引擎 glm-5.3-flash 上失败（thinking 参数不兼容） | 开放 |
| [#8361](https://github.com/agentscope-ai/QwenPaw/issues/8361) | **中** | 自动内存搜索导致重复调用，阻塞回复 | PR [#8457](https://github.com/agentscope-ai/QwenPaw/pull/8457) |
| [#8413](https://github.com/agentscope-ai/QwenPaw/issues/8413) | **中** | 自杀防护阻止合法的 `$PID` 变量使用 | 开放 |
| [#8412](https://github.com/agentscope-ai/QwenPaw/issues/8412) | **中** | governance/audit.db 停止记录每个智能体的工具调用 | 开放 |
| [#8415](https://github.com/agentscope-ai/QwenPaw/issues/8415) | **低** | edit_file 将 CRLF 转换为 LF | PR [#8433](https://github.com/agentscope-ai/QwenPaw/pull/8433) |

### 已交付的修复
- edit_file 中保留 CRLF 行尾 — [#8433](https://github.com/agentscope-ai/QwenPaw/pull/8433)
- MCP 弹窗关闭行为 — [#8405](https://github.com/agentscope-ai/QwenPaw/issues/8405)（已关闭）
- Windows 桌面端日志轮转 — [#8185](https://github.com/agentscope-ai/QwenPaw/issues/8185)（已关闭）

---

## 功能需求与路线图信号

### 值得关注的功能请求

| Issue | 主题 | 需求信号 |
|-------|------|----------|
| [#8459](https://github.com/agentscope-ai/QwenPaw/issues/8459) | 更便捷地访问未读推送消息 | Console UI 增强 |
| [#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199) | Firecrawl 作为 web_search 提供商 | **已接受** — 第三方集成 |
| [#7079](https://github.com/agentscope-ai/QwenPaw/issues/7079) | PowerContext 可插拔的记忆后端 | **已合并** — 长期记忆可扩展性 |

### 开发中（可能在下一版本发布）

1. **实时语音聊天** — [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)（XXXL）
2. **Linux 桌面端打包** — [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444)
3. **嵌套技能目录** — [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)
4. **支持子进程隔离的 Channel 插件** — [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187)
5. **社区/收件箱集成** — [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903)

**预测：** 基于当前的 PR 速度，下一个次要版本（v2.3.0）可能会包含语音聊天、Linux 桌面支持和 Firecrawl 集成。

---

## 用户反馈总结

### 痛点

1. **上下文/窗口管理**
   - 用户遇到 `CONTEXT LENGTH EXCEEDED` 错误导致工作中断（#8312）
   - 某些提供商（例如 火山引擎）的上下文压缩失败（#8417）

2. **可靠性**
   - LLM 超时恢复仍然存在问题（#7935）— 虽然已关闭，但代表持续关注
   - 某些 Python 环境下的插件热安装失败（#8265）

3. **MCP 集成**
   - 传统 MCP 服务器回退损坏（#8424、#8047）
   - MCP 配置中的弹窗 UI 问题（#8405）

### 满意度信号

- OAuth 认证请求（Codex、OpenAI）表明对平台有信心
- Firecrawl 集成请求显示对更多网页搜索提供商的需求
- PowerContext 记忆后端已接受 — 用户希望记忆选项可扩展

---

## 积压工作关注

### 需要维护者关注的长时间未响应/停滞 Issue

| Issue | 存在时间 | 主题 | 优先级 |
|-------|----------|------|--------|
| [#2758](https://github.com/agentscope-ai/QwenPaw/issues/2758) | 约 7 个月 | 推理/工具使用应在最终回复之前显示 | 中 |
| [#3281](https://github.com/agentscope-ai/QwenPaw/issues/3281) | 约 6 个月 | 桌面端 UI — Windows 上回复消失 | 中 |
| [#7397](https://github.com/agentscope-ai/QwenPaw/issues/7397) | 约 2 个月 | Browser SDK 每次调用创建新标签页组 | 中 |
| [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) | 约 1 个月 | 提供商切换后会话损坏（file:// 媒体 URL） | 高 |
| [#8306](https://github.com/agentscope-ai/QwenPaw/issues/8306) | 约 10 天 | 原子文件写入拒绝有效的长文件名 | 低 |

### 停滞的 PR

| PR | 存在时间 | 主题 |
|----|----------|------|
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | 约 1 个月 | 绑定内联媒体按请求（而非仅按文件）— 审核中 |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | 约 17 天 | 嵌套技能目录 — 审核中 |

---

*基于 GitHub 数据生成 — 2026-10-28*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this GitHub project digest from English to Chinese. They want:
- Only the translation, no preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, numbers, dates, issue/PR references, project names, file paths in original form
- Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully while maintaining all the formatting and technical elements.</think>

# ZeroClaw 项目摘要 — 2026年10月28日

---

## 1. 今日概览

ZeroClaw 今日**活跃度较高**，过去24小时内有22个issue和42个PR更新。项目发布了 **v0.8.7**，这是一个安全维护版本，修复了影响前一版本的多个安全公告。目前已报告了多个涉及 gateway、身份认证和运行时组件的安全相关 bug，表明安全审查正在积极进行。社区参与度保持强劲，近期 PR 重点关注 MCP 工具修复、会话管理增强和文档改进。

---

## 2. 发布动态

### v0.8.7 — 安全维护版本
**发布日期：** 2026年10月28日  
**贡献者：** 19人  
**提交数：** 81次

**主要变更：**
- 修补 Wasmtime（安全公告）
- 更新 Rustls 证书验证
- 更新 `tokio` 和 `ctutils` 版本，修复影响 v0.8.6 的安全公告
- 使用 C 重建容器镜像（编译器/工具链更新）

**迁移说明：** 建议所有用户升级，以获取上游安全补丁。未引入破坏性配置变更。

---

## 3. 项目进度

### 今日关闭/合并项目

| 类型 | ID | 标题 | 状态 |
|------|-----|-------|--------|
| Issue | #9101 | 整合发布认证机制 | 已关闭 |
| PR | #12019 | chore(docs): 锁定 v0.8.7 翻译版本 | 已关闭 |
| PR | — | （42个更新中的1个合并PR） | 已合并 |

### 推进中的活跃 PR

- **#12080** — fix(config): 当绝对路径 shell 规范化失败时回退 — 针对 Android shell 故障
- **#12079** — chore(docs): 锁定 v0.8.7 翻译目录修复
- **#12070** — fix(channels): 技能刷新后重新应用 system prompt 上限
- **#12073** — fix(providers): 将 Codex 流作为默认端点上的流进行重试
- **#12074** — fix(zerocode): 裁剪后刷新上下文预算
- **#12068** — fix(security): 不再将裸分号/管道视为命令注入
- **#12065** — fix(channels): 阻止允许列表上的 Discord 机器人回答审批问题

---

## 4. 社区热点话题

| ID | 标题 | 评论数 | 优先级 | 关注领域 |
|----|-------|----------|----------|------------|
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [追踪器]: 运行时、仪表板登录和 gateway 交付 | 16 | p2 | 运行时/Gateway 路线图 |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 整合发布认证机制 | 11 | p1 | CI/CD 效率（已关闭） |
| [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) | [Bug]: 网页聊天重载丢失用户提示词 | 3 | p2 | Web 仪表板用户体验 |
| [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) | [Bug]: MCP 连接永久损坏 | 3 | p1 | MCP 工具可靠性 |
| [#11961](https://github.com/zeroclaw-labs/zeroclaw/issues/11961) | [功能]: 仪表板 OIDC 登录 | 2 | — | 身份认证（v0.9.0） |

**分析：** 运行时/gateway 追踪器（#7432）讨论最多，反映出社区对完成 v0.9.0 路线图的强烈兴趣。认证机制整合（#9101）刚刚关闭，解决了7月提出的 CI 效率问题。

---

## 5. Bug 与稳定性

### 严重（S1）— 阻塞工作流
| ID | 问题 | 状态 | 修复 PR |
|-------|--------|--------|--------|
| [#10807](https://github.com/zeroclaw-labs/zeroclaw/issues/10807) | MCP 连接因恢复失败而永久损坏 | 开启中 | [#12061](https://github.com/zeroclaw-labs/zeroclaw/pull/12061) |
| [#12075](https://github.com/zeroclaw-labs/zeroclaw/issues/12075) | Android shell 工具始终失败（规范化时 EPERM） | 开启中 | [#12080](https://github.com/zeroclaw-labs/zeroclaw/pull/12080) |

### 高（S2）— 降级行为
| ID | 问题 | 状态 |
|-------|--------|--------|
| [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) | 网页聊天重载丢失用户提示词 |
| [#12055](https://github.com/zeroclaw-labs/zeroclaw/issues/12055) | MCP HTTP 客户端无连接池/Keep-Alive 控制 |
| [#12072](https://github.com/zeroclaw-labs/zeroclaw/issues/12072) | OpenAI Codex 流解码回退重试时不使用流式传输 |
| [#12064](https://github.com/zeroclaw-labs/zeroclaw/issues/12064) | Discord 明文审批被允许列表上的机器人回答 |

### 安全相关 Bug
| ID | 问题 | 严重程度 |
|-------|----------|----------|
| [#11913](https://github.com/zeroclaw-labs/zeroclaw/issues/11913) | Telegram 命令菜单对所有用户可见 |
| [#12047](https://github.com/zeroclaw-labs/zeroclaw/issues/12047) | OIDC bearer 验证无尝试次数限制 |
| [#12049](https://github.com/zeroclaw-labs/zeroclaw/issues/12049) | 四个远程地址可填满浏览器登录流程存储 |
| [#12052](https://github.com/zeroclaw-labs/zeroclaw/issues/12052) | Gateway 限流器以第一个 X-Forwarded-For 条目作为键（可伪造） |
| [#12051](https://github.com/zeroclaw-labs/zeroclaw/issues/12051) | sop_workshop apply 允许 scoped principal 授权共享 SOP |
| [#12046](https://github.com/zeroclaw-labs/zeroclaw/issues/12046) | 拥有通配符工具选择器的非管理员 principal 保留特权工具 |

**注意：** 多个安全 bug 已有对应的修复 PR 在进行中（#12065, #12068）。

---

## 6. 功能请求与路线图信号

### 高关注功能
| ID | 标题 | 目标版本 | 参与度 |
|-------|----------------|----------------|------------|
| [#11961](https://github.com/zeroclaw-labs/zeroclaw/issues/11961) | 仪表板 OIDC 登录 | v0.9.0 | 2条评论 |
| [#12069](https://github.com/zeroclaw-labs/zeroclaw/issues/12069) | 添加 /load-session 以恢复 Code 会话 | — | 1条评论（PR #12071 已开启） |
| [#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705) | 为兼容的 OpenAI 模型支持最大推理工作量 | — | 1条评论 |
| [#11414](https://github.com/zeroclaw-labs/zeroclaw/pull/11414) | feat(web): 添加可选的专注工作区 | — | 审核中 |

**预测：** 追踪 issue #7432 和 OIDC 功能 #11961 都指向 v0.9.0，下一个版本可能会重点关注身份认证改进和仪表板现代化。会话加载功能（#12069/#12071）看起来即将合入。

---

## 7. 用户反馈总结

### 痛点发现
1. **会话持久化失效** — 用户报告网页仪表板重载时丢失提示词数据（#11517）
2. **MCP 工具可靠性** — 连接损坏问题阻塞工作流（#10807）
3. **Android 支持回归** — Shell 工具完全无法使用（#12075）
4. **安全过滤过度敏感** — 提示词防护将合法的分号/管道误判为命令注入（#12066, #12068）
5. **Gateway 安全漏洞** — 今日报告多个 OIDC/登录相关漏洞（#12047, #12049, #12052）

### 积极信号
- 会话事件历史功能正在推进（#11921）— 这是用户长期要求的审计/回放功能
- v0.8.7 已交付翻译更新，后续 PR 持续跟进（#12076, #12078）
- 发布认证整合完成（#9101）— 减轻 CI 负担

---

## 8. 积压关注

### 需要维护者关注的 Issue
| ID | 标题 | 存在时间 | 状态 | 备注 |
|-------|----------------------------------|----------|--------|-------|
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/issues/9745) | fix(memory): 为知识图谱添加 per-agent归属和作用域 | 约3个月 | 开启中 | 高风险安全修复，v0.9.0 目标，需要作者行动 |
| [#11596](https://github.com/zeroclaw-labs/zeroclaw/pull/11596) | feat(onboarding): 使用原生 Claude Code 账户 | 约3周 | 开启中 | 需要维护者审核 |
| [#11680](https://github.com/zeroclaw-labs/zeroclaw/pull/11680) | feat(tools): 添加 Firecrawl 网络搜索提供商 | 约2周 | 开启中 | 需要维护者审核 |
| [#11880](https://github.com/zeroclaw-labs/zeroclaw/pull/11880) | feat(goal): 提取传输无关的 Goal 策略合约 | 约1周 | 开启中 | 大型功能，已合入 v0.8.7 上游 |

**观察：** 知识图谱作用域修复（#9745）是 v0.9.0 的关键安全项目，自8月以来一直开放。多个大型 PR（#11596, #11680, #11880）似乎需要维护者审核周期。

---

*基于2026年10月28日的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*