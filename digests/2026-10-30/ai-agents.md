# OpenClaw 生态日报 2026-10-30

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-30 02:07 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this Project Digest from English to Simplified Chinese. Let me analyze the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not literal word-for-word

Let me translate this carefully, maintaining the structure and technical accuracy.

Key translations to consider:
- "Project Digest" = "项目简报"
- "Today's Overview" = "今日概览"
- "Releases" = "版本发布"
- "Project Progress" = "项目进展"
- "Community Hot Topics" = "社区热点"
- "Bugs & Stability" = "缺陷与稳定性"
- "Feature Requests & Roadmap Signals" = "功能需求与路线图信号"
- "User Feedback Summary" = "用户反馈摘要"
- "Backlog Watch" = "待办事项关注"

I need to translate the content while:
- Keeping technical terms in English where appropriate (GitHub, PR, issue, P0/P1/P2, CLI, LTS, WAL, etc.)
- Maintaining the table structure
- Keeping URLs and issue/PR numbers intact
- Using natural Chinese technical writing style</think>

# OpenClaw 项目简报 — 2026-10-30

## 今日概览

OpenClaw 保持高度活跃，过去 24 小时内有 **500 个 issue 和 500 个 PR 更新**。项目今日发布两个版本：**v2026.10.9**（常规版本，含安全补丁）和 **v2026.9.36**（扩展稳定版/LTS 网关专用版本）。社区参与度很高，热度最高的问题有 38 条评论。然而，多个 **P0 级缺陷** 仍未修复，包括启动时阻塞事件循环、checkpoint 失败导致智能体不可用、以及崩溃循环等问题。发布节奏表明项目处于积极维护中，但状态管理和内存系统方面的稳定性问题仍然存在。

---

## 版本发布

### v2026.10.9 — 常规版本
**发布日期：** 2026-10-30

**更新内容：**
- 为存在漏洞的运行时依赖打上了**安全补丁**：
  - `fast-uri 4.2.3` — 在 MCP schema 验证中拒绝格式错误的 URI 方案/主机
  - `Zod` — 在 A2UI 和 Discord 嵌入式应用 SDK 中提前拒绝超大型集合
  - `nodemailer 10.1.4` — 修复 IMAP 发送者解析欺骗问题

**完整变更日志：** https://github.com/openclaw/openclaw/releases/tag/v2026.10.9

---

### v2026.9.36 — 扩展稳定版（等同于 LTS）
**发布日期：** 2026-10-30

**更新内容：**
- 网关专用版本（无 CLI/智能体变更）
- 包含关键安全更新、可靠性和性能修复
- 新增模型支持
- 作为当前的**扩展稳定版**分支

**完整变更日志：** https://github.com/openclaw/openclaw/releases/tag/v2026.9.36

---

## 项目进展

### 今日合并/关闭的 PR（重点摘要）

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#188036](https://github.com/openclaw/openclaw/pull/188036) | chore(ui): refresh control ui locales | M | ✅ CLOSED |
| [#188014](https://github.com/openclaw/openclaw/pull/188014) | fix(ios): wait for host headroom before screenshot boot | XS | ✅ CLOSED |
| [#188010](https://github.com/openclaw/openclaw/pull/188010) | fix(update): retry installation discovery after returned failures | XS | ✅ CLOSED |

### 推进中的活跃 PR

| PR | 标题 | 规模 | 优先级 | 状态 |
|----|------|------|--------|------|
| [#188025](https://github.com/openclaw/openclaw/pull/188025) | fix(gateway): stop GitHub readiness from copying whole agent databases | L | P1 | ⏳ waiting on author |
| [#188030](https://github.com/openclaw/openclaw/pull/188030) | perf(doctor): stop re-reading SQLite inspection copies on every check | L | 👀 ready for maintainer |
| [#188033](https://github.com/openclaw/openclaw/pull/188033) | fix: keep Gateway responsive during plugin tool discovery | M | 👀 ready for maintainer |
| [#188034](https://github.com/openclaw/openclaw/pull/188034) | fix(update): retain authority through fallback publication | M | 👀 ready for maintainer |
| [#188013](https://github.com/openclaw/openclaw/pull/188013) | fix: preserve authored CSP in relative HTML previews | XL | P2 | 📣 needs proof |
| [#187962](https://github.com/openclaw/openclaw/pull/187962) | feat(plugins): reload edited bundled plugin code in development | L | P2 | 👀 ready for maintainer |

---

## 社区热点

### 互动最频繁的 Issue（按评论数排序）

1. **[#164294](https://github.com/openclaw/openclaw/issues/164294)** — Gateway 状态数据库 WAL auto-checkpoint 从未完成（38 条评论，P2）
   - **问题：** 自启动以来 WAL checkpoint 被进程内读者阻塞
   - **影响：** 持久化状态数据库性能持续下降
   - **作者：** zhangyong-le

2. **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — 短期记忆召回保留在夜间驱逐已召回条目（23 条评论，P2）
   - **问题：** 深度梦境阶段因 512 条目上限从未提升
   - **影响：** 有活跃会话的用户内存提升失败
   - **作者：** marknilsn

3. **[#120385](https://github.com/openclaw/openclaw/issues/120385)** — Code Mode 工具目录不完整，缺少定时任务/CRON 作业（22 条评论，P2）
   - **问题：** MCP 工具缺失，显示为"Unknown tool id"
   - **影响：** 定时作业以神秘错误失败

4. **[#164923](https://github.com/openclaw/openclaw/issues/164923)** — 一个工作区提升 0/512，而兄弟工作区提升 50-90%（19 条评论，P2）
   - **问题：** 对话轮次片段被结构化拒绝
   - **影响：** 各工作区内存行为不一致

5. **[#172837](https://github.com/openclaw/openclaw/issues/172837)** — Codex nativeSubagentAssignments 完成 后从未移除（18 条评论，P1）
   - **问题：** 任务分配持续存在，导致重新固定和重新发送
   - **影响：** 消息丢失和线程污染

---

## 缺陷与稳定性

### 严重（P0）— 需要立即处理

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 延迟回收提交 checkpoint 失败导致智能体不可用 | 🐚 platinum hermit | OPEN |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | Gateway 启动阻塞事件循环 40-200 秒，触发重启循环 | 🦪 silver shellfish | OPEN |
| [#158592](https://github.com/openclaw/openclaw/issues/158592) | 主机睡眠/唤醒后，模型运行时发布永久超时 | 🐚 platinum hermit | OPEN |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix --non-interactive 空闲 15+ 分钟，永远无法到达数据库修复阶段 | 🦪 silver shellfish | OPEN |

### 高优先级（P1）

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#172837](https://github.com/openclaw/openclaw/issues/172837) | nativeSubagentAssignments 完成 后从未移除 | 🐚 platinum hermit | OPEN |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | 本地主机 exec 返回共享状态完整性错误 | 🦪 silver shellfish | OPEN |
| [#159094](https://github.com/openclaw/openclaw/issues/159094) | 进程间状态生命周期租约竞争 | 🦐 gold shrimp | OPEN |
| [#167876](https://github.com/openclaw/openclaw/issues/167876) | Talk 咨询在会话设置后丢失调用者权限 | 🦞 diamond lobster | OPEN |
| [#158070](https://github.com/openclaw/openclaw/issues/158070) | 预压缩在通道队列中失败 | 🐚 platinum hermit | OPEN |

### 正在修复中的重点 PR
- [#188025](https://github.com/openclaw/openclaw/pull/188025) — 修复 GitHub 就绪检查复制整个智能体数据库（数分钟冻结）
- [#188030](https://github.com/openclaw/openclaw/pull/188030) — Doctor 性能修复（SQLite 重复读取）
- [#188033](https://github.com/openclaw/openclaw/pull/188033) — 插件工具目录构建期间保持 Gateway 响应

---

## 功能需求与路线图信号

### 活跃的功能请求

| Issue | 标题 | 评论数 | 需求 |
|-------|------|--------|------|
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | **功能请求：智能体触发的上下文压缩（self-compact 工具）** | 9 | 👍 2 |
| [#163739](https://github.com/openclaw/openclaw/issues/163739) | 使 Control UI 的 Ctrl+Shift+A（归档）可配置 | 7 | 👍 1 |
| [#140244](https://github.com/openclaw/openclaw/issues/140244) | 在 `openclaw infer model run` 中支持文件支持的提示 | 7 | 👍 1 |
| [#172547](https://github.com/openclaw/openclaw/issues/172547) | 从记忆搜索索引中排除围栏梦魇范围 | 7 | — |

### 路线图信号
- **插件热重载**（[#187962](https://github.com/openclaw/openclaw/pull/187962)）— 改进捆绑插件的开发体验
- **内存分块可选加入**（[#186649](https://github.com/openclaw/openclaw/pull/186649)）— 为策划的记忆主题提供每条目分块
- **团队服务器文档整合**（[#187963](https://github.com/openclaw/openclaw/pull/187963)）— 简化多人模式设置文档

---

## 用户反馈摘要

### 痛点识别

1. **内存/提升失败** — 多个 issue（#150635、#164923）报告短期记忆召回提升为 0%，导致梦境工作流中用户数据丢失
2. **状态竞争** — 多份报告称 Gateway 进程之间存在租约/所有权冲突（#159094、#177656）
3. **启动不稳定** — P0 issue：Gateway 启动时阻塞 40-200 秒，触发健康监控重启（#162211）
4. **UI 抖动** — Control UI WebChat  transcript 在滚动时抖动（#164394）— 影响用户体验
5. **MCP 工具发现** — 插件工具目录构建期间 Gateway 冻结（#188033 修复中）

### 积极信号
- 发布节奏保持稳健，安全补丁及时交付
- Doctor 性能改进正在推进（[#188030](https://github.com/openclaw/openclaw/pull/188030)）
- 更新机制修复陆续落地（[#188034](https://github.com/openclaw/openclaw/pull/188034)、[#188024](https://github.com/openclaw/openclaw/pull/188024)）

---

## 待办事项关注

### 长期未回复的重要 Issue

| Issue | 标题 | 时长 | 需要 |
|-------|------|------|------|
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | 十六个调用点发出相同的错误，没有原因码 | 约 2 个月 | 维护者决策 |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | session.maintenance enforce mode 未限制存储 | 约 3 个月 | 产品决策 |
| [#148033](https://github.com/openclaw/openclaw/issues/148033) | Context-engine assemble() 缺少 runtimeContext.senderId | 约 1.5 个月 | 维护者审查 |
| [#153706](https://github.com/openclaw/openclaw/issues/153706) | 关闭的 ACP 会话断言未使用的原生运行时 | 约 1 个月 | 产品决策 |

### 需要操作的过期 Issue
- 前 50 个 issue 中有 **14+ 个标记为过期** — 可能需要整理或关闭
- 多个 issue 已关联 PR 但仍未解决

---

*基于 OpenClaw GitHub 数据生成 — 2026-10-30*

---

## 横向生态对比

<think>The user wants me to translate this English report into Chinese. Let me carefully follow the translation rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate while preserving the exact structure:</think>

# 跨项目生态系统对比报告

**生成时间：** 2026-10-30

---

## 1. 生态系统概览

个人 AI 助手和 Agent 框架领域正在经历快速碎片化，本报告分析的五个开源项目展现出截然不同的架构理念和目标用户。生态呈现三个成熟度梯队：**OpenClaw** 作为成熟项目稳定发布版本并关注安全修复，**ZeroClaw** 和 **Hermes Agent** 处于中期迭代阶段积极开发多租户和通道集成功能，**IronClaw** 和 **QwenPaw** 则代表用户基础较小或处于维护/测试阶段的项目。所有项目的共同主题包括安全加固（凭证管理、RBAC、沙箱）、内存/状态管理以支持长时间运行的 Agent，以及多渠道部署（Slack、Discord、Telegram、Matrix）。今日三个项目没有新版本发布，可能与发布周期或资源限制有关。

---

## 2. 活跃度对比

| 项目 | 问题（24h） | 开启 | 已关闭 | PR（24h） | 开启 | 已合并 | 发布（24h） | 健康等级 |
|---------|-------------|------|--------|-----------|------|--------|----------------|-------------|
| **OpenClaw** | 500 | 326 | 174 | 500 | 308 | 192 | 2 | 🟢 优秀 |
| **Hermes Agent** | 50 | 48 | 2 | 50 | 40 | 10 | 0 | 🟢 良好 |
| **IronClaw** | 0 | 0 | 0 | 2 | 2 | 0 | 0 | 🔴 停滞 |
| **QwenPaw** | 15 | 5 | 10 | 40 | 27 | 13 | 0 | 🟡 活跃 |
| **ZeroClaw** | 50 | 33 | 17 | 50 | 44 | 6 | 0 | 🟢 良好 |

---

## 3. OpenClaw 的市场定位

**OpenClaw** 以活跃度指标位居榜首——24 小时内 500 个 issue 和 500 个 PR 更新，是第二活跃项目 ZeroClaw 的十倍。其双版本发布策略（标准版 + 扩展稳定版/LTS）展现了其他项目所不具备的企业级成熟度。**技术差异化优势**：OpenClaw 采用 Dreaming 阶段进行记忆整合，设置晋升阈值，使用 MCP 工具目录实现定时任务，并维护 Gateway 优先架构配合 WAL 检查点机制。**社区规模**：顶级 issue 获得 38 条评论，24 小时内 500 次更新，OpenClaw 的社区参与度远超 Hermes Agent（50 次更新）和 ZeroClaw（50 次更新）。IronClaw 和 QwenPaw 代表较小或更细分的市场——QwenPaw 主要面向中文市场（AgentScope 生态），而 IronClaw 几乎没有实质性贡献。

---

## 4. 共同技术关注点

| 关注领域 | OpenClaw | Hermes | QwenPaw | ZeroClaw | 说明 |
|------------|:--------:|:------:|:-------:|:--------:|-------|
| **内存/召回管理** | ✅ | ✅ | ✅ | ✅ | 所有项目都在解决长时间运行的 Agent 状态管理问题，涉及长期记忆整合、记忆晋升、短程记忆淘汰 |
| **安全/计费完整性** | ✅ | ✅ | — | ✅ | 凭证刷新、RBAC、Agent 级计费归属——Hermes 存在双重计费 bug，OpenClaw 有安全补丁 |
| **多渠道部署** | — | — | ✅ | ✅ | QwenPaw 面向飞书、Discord；ZeroClaw 支持 Slack、Matrix、Signal、Telegram |
| **插件架构** | ✅ | ✅ | ✅ | ✅ | 插件加载韧性、市场来源追溯、RPC 转发——趋向于安全可扩展性 |
| **状态/检查点管理** | ✅ | — | — | ✅ | WAL 检查点（OpenClaw），会话持久化（ZeroClaw） |
| **工具调用安全** | — | ✅ | — | ✅ | 末日循环防护、重复工具调用防护 |

---

## 5. 差异化分析

**OpenClaw** 的差异化优势在于其 **Dreaming 阶段**和记忆晋升系统——这是其他项目所没有的独特架构选择。其面向企业部署，提供扩展稳定版发布和安全补丁。**Hermes Agent** 专注于 CLI 工作流，集成了 cron/调度器，强调 OAuth 和 Fast 信号处理。**ZeroClaw** 面向多租户部署，支持按发送者进行 RBAC 控制和多种渠道集成（Discord、Slack、Matrix、Signal），还提供 ZeroCode 可视化 IDE。**QwenPaw** 定位为更易用的桌面产品，整合中文市场（飞书），具有可视化组件（图片画廊、紧凑 UI）。**IronClaw** 面向 WASM 延迟测试，专注最小功能集——本质上是一个专用工具而非通用 Agent。

---

## 6. 社区势头与成熟度

| 项目 | 成熟度梯队 | 迭代速度 | 信号 |
|---------|--------------|------------------|--------|
| **OpenClaw** | 🟢 稳定/已发布 | 中等（双周发布） | 安全补丁、LTS 追踪 |
| **Hermes Agent** | 🟡 活跃开发中 | 快速 | 功能 PR 合并中、RFC 进行中 |
| **ZeroClaw** | 🟡 活跃开发中 | 快速 | 大型架构 PR（会话历史、RPC）、安全加固 |
| **QwenPaw** | 🟡 Beta | 快速 | Beta 反馈驱动修复、UI 优化 |
| **IronClaw** | 🔴 停滞 | 极低 | 仅 Dependabot 更新 |

**快速迭代者**：ZeroClaw（44 个开放 PR）、OpenClaw（308 个开放 PR）、QwenPaw（27 个开放 PR）  
**趋于稳定**：OpenClaw——发布节奏表明正从功能开发转向打磨优化  
**令人担忧**：IronClaw——除自动化依赖更新外无社区参与

---

## 7. 趋势信号

以下模式从跨项目社区反馈中浮现，代表 **AI Agent 开发者的机会**：

1. **内存完整性是普遍痛点** — 所有四个活跃项目都有关于记忆丢失、记忆整合失败和晋升阈值的开放 issue。行业缺乏长时间运行 Agent 状态管理的健壮解决方案。

2. **多租户和 RBAC 正在加速** — ZeroClaw 和 Hermes 都优先实现按发送者访问控制。随着 Agent 服务更多用户，隔离变得至关重要。

3. **渠道集成正在普及但脆弱** — QwenPaw 和 ZeroClaw 都在 Slack、Discord、Matrix 和飞书集成上出现回归问题。多渠道部署的 SDK 层需要标准化。

4. **末日循环和 Token 浪费** — Hermes、QwenPaw 和 ZeroClaw 都有活跃的重复工具调用循环 issue，消耗 API 配额。这表明需要内置熔断器。

5. **安全加固正在加强** — OpenClaw 的安全补丁、ZeroClaw 的知识图谱归属、Hermes 的计费完整性问题——都表明生态系统正在向企业级隔离成熟。

6. **可视化/桌面 UX 需求未被满足** — QwenPaw 的桌面 HTML 预览 issue、ZeroClaw 的 ZeroCode 编辑器 bug、IronClaw 的 WASM 延迟焦点，都表明客户端工具需求不断增长。

---

*本跨项目分析基于 2026-10-30 的 GitHub 活动数据。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the entire project digest into Simplified Chinese, following the translation rules provided. Let me carefully translate each section while preserving the exact Markdown structure.

I need to:
1. Translate all headings
2. Translate all body text
3. Keep URLs, issue/PR numbers, code, tags, and technical terms as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)
5. Preserve all Markdown formatting (tables, lists, bold, etc.)
6. Keep horizontal rules, emojis, etc.

Let me go through section by section:

**1. Today's Overview**
- Translate "Today's Overview" → "今日概览"
- Translate "Overview" content to natural Chinese
- Keep all numbers, URLs, and tags

**2. Releases**
- Translate "Releases" → "版本发布"
- Keep "No new releases today." but translate to Chinese

**3. Project Progress**
- Translate "Project Progress" → "项目进展"
- Translate table headers
- Translate descriptions

**4. Community Hot Topics**
- Translate "Community Hot Topics" → "社区热点"
- Translate descriptions while keeping technical terms

**5. Bugs & Stability**
- Translate to "缺陷与稳定性"
- Translate table

**6. Feature Requests & Roadmap Signals**
- Translate to "功能需求与路线图信号"

**7. User Feedback Summary**
- Translate to "用户反馈摘要"

**8. Backlog Watch**
- Translate to "待办关注"

Let me do the translation now:</think>

# Hermes Agent 项目摘要

**日期：** 2026-10-30
**仓库：** [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日概览

Hermes Agent 今日继续保持高开发活跃度，过去 24 小时内有 **50 个 issue** 和 **50 个 PR** 更新。项目在所有组件（agent、CLI、gateway、cron、tools）上都表现出强劲的活跃度，共有 48 个 open/active issue 和 40 个 open PR。值得注意的是，**10 个 PR** 今日被合并或关闭，表明维护工作正在积极进行。没有新版本发布。Issue 分布显示 P1（严重）和 P2（标准）缺陷以及功能提案混合存在，表明稳定性修复和新功能开发得到了平衡关注。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

以下 PR 今日**被合并或关闭**：

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#74573](https://github.com/NousResearch/hermes-agent/pull/74573) | docs(zh-Hans): fix stale writing-plans and subagent-driven-development skill cross-references | CLOSED |
| [#98918](https://github.com/NousResearch/hermes-agent/pull/98918) | feat(gateway): make the local STT fallback configurable | CLOSED |
| [#98917](https://github.com/NousResearch/hermes-agent/pull/98917) | feat(cron): include copyable job and run ids in deliveries | CLOSED |
| [#98916](https://github.com/NousResearch/hermes-agent/pull/98916) | fix(kanban): preserve selected board when deleting tasks | CLOSED |
| [#98915](https://github.com/NousResearch/hermes-agent/pull/98915) | fix(gateway): keep auto-TTS output under Hermes home | CLOSED |
| [#73923](https://github.com/NousResearch/hermes-agent/pull/73923) | feat(gateway): persist provider_message_id, delivery_route and chunk_count in delivery ledger | CLOSED |
| [#63812](https://github.com/NousResearch/hermes-agent/pull/63812) | feat(gateway): make runtime footer use effective OAuth and Fast signals | CLOSED |

**关键进展：**
- Cron 任务管理改进，新增可复制的任务和运行 ID，便于调试
- TTS 输出现在正确归入 Hermes 主目录，提高了安全性和可靠性
- 删除任务时保留 Kanban 看板状态
- 投递账本增强，支持提供商消息追踪
- 本地 STT 回退改为可配置，适用于资源受限环境

---

## 4. 社区热点

讨论最活跃的话题（按评论数排序）：

1. **[#143379](https://github.com/NousResearch/hermes-agent/issues/143379)** — RFC：DOC-CHAIN 基板的网络治理（30 条评论）
   - **主题：** 用于会话压缩和溯源保留的持久化记录系统
   - **标签：** security, agent, tools, file, memory, compression, P2
   - **分析：** 这是一个重要的架构 RFC，提议构建"doc-chain"基板以实现网络级治理和压缩。用户希望在压缩后仍能保留会话数据，同时保持读写完整性。

2. **[#38519](https://github.com/NousResearch/hermes-agent/issues/38519)** — Hermes Desktop 前端独立安装（23 条评论，👍31）
   - **主题：** 功能请求——可独立安装的 Windows 前端，支持连接远程 agent
   - **标签：** feature, desktop, windows, P2
   - **分析：** 社区兴趣浓厚（31 👍），希望将 Desktop 前端与 agent 解耦，实现轻量级客户端部署。

3. **[#127284](https://github.com/NousResearch/hermes-agent/issues/127284)** — source-completion-pending 缺少 TTL 或自愈机制（15 条评论）
   - **主题：** 缺陷——被终止的 tail 留下孤立状态，导致重复进入
   - **标签：** bug, cli, P1, sweeper:risk-compatibility
   - **分析：** 这是一个可靠性问题，不完整的 source 更新会留下持久化状态，阻止后续启动。

4. **[#118379](https://github.com/NousResearch/hermes-agent/issues/118379)** — Anthropic 每次请求刷新凭证会破坏凭证池轮换（11 条评论，👍1）
   - **主题：** 缺陷——凭证刷新干扰池轮换导致计费重复
   - **标签：** bug, agent, anthropic, auth, P1, sweeper:risk-security-boundary, billing
   - **分析：** 这是一个关键的安全/计费问题，凭证刷新干扰池轮换会导致双重扣费。

---

## 5. 缺陷与稳定性

今日报告的严重缺陷（按严重程度排序）：

| Issue | 严重程度 | 描述 | 组件 |
|-------|----------|-------------|-----------|
| [#127284](https://github.com/NousResearch/hermes-agent/issues/127284) | **P1** | source-completion-pending 缺少 TTL；被终止的 tail 留下孤立状态 | CLI |
| [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) | **P1** | Anthropic 凭证刷新导致双重计费 | Agent, Auth |
| [#135487](https://github.com/NousResearch/hermes-agent/issues/135487) | **P1** | Cron worker 因"database is locked"崩溃，事件丢失 | Cron |
| [#145022](https://github.com/NousResearch/hermes-agent/issues/145022) | **P1** | Kanban worker 在 gateway stall 时因"retained by owner"崩溃 | Gateway, Kanban |
| [#137170](https://github.com/NousResearch/hermes-agent/issues/137170) | **P1** | 对重复的相同 SUCCESSFUL 工具调用缺少熔断机制（430x 重复） | Agent |
| [#146643](https://github.com/NousResearch/hermes-agent/issues/146643) | **P2** | Gateway 每次变更都重新读取整个会话历史；CPU 超时增长 | Gateway, TUI |
| [#146428](https://github.com/NousResearch/hermes-agent/issues/146428) | **P2** | Cron 运行在 UnscopedSecretError 时无声挂起（多路复用 profiles） | Cron, Auth |

**可用修复 PR：**
- [#145435](https://github.com/NousResearch/hermes-agent/pull/145435) — fix(cli): charge the owed source-completion tail before it runs（解决 #127284）
- [#146714](https://github.com/NousResearch/hermes-agent/pull/146714) — fix(kanban): skip uninitialized sibling DBs during cleanup

---

## 6. 功能需求与路线图信号

值得关注的功能请求：

1. **[#38519](https://github.com/NousResearch/hermes-agent/issues/38519)** — Hermes Desktop 前端独立安装
   - 社区需求强烈（31 👍）；将支持远程 agent 连接
   - 鉴于讨论热度，很可能是近期实现的目标

2. **[#35147](https://github.com/NousResearch/hermes-agent/issues/35147)** — 在单用户会话上下文中将 user_id 与 user_name 一起暴露
   - 多用户团队配置文件支持，提供稳定的数字标识映射
   - 标签：gateway, tool/file, platform/telegram, platform/slack, sessions

3. **[#142235](https://github.com/NousResearch/hermes-agent/issues/142235)** — 插件后端的公共只读 MCP 工具调用
   - 使插件后端能够读取 MCP 服务器数据（readOnlyHint 限制）
   - 标签：cli, tools, tool/mcp, P3

4. **[#146699](https://github.com/NousResearch/hermes-agent/issues/146699)** — Cron：agent 无法查看其任务的运行历史
   - Agent 需要了解任务投递状态
   - 标签：tools, cron, P3

---

## 7. 用户反馈摘要

**已识别的痛点：**

1. **存储膨胀：** 约 22,600 个 `.pyc` 文件占用超过 303 MiB（[#139500](https://github.com/NousResearch/hermes-agent/issues/139500)）
2. **缓存超出清理范围：** `~/.hermes/cache/uv/` 达 1.0 GB，无清理路径（[#143577](https://github.com/NousResearch/hermes-agent/issues/143577)）
3. **会话可见性缺口：** CLI `/sessions` 命令隐藏 TUI 和其他来源的会话（[#44964](https://github.com/NousResearch/hermes-agent/issues/44964)）
4. **配置文件隔离问题：** Kanban 卡片跨配置文件重新分配失败，返回 403（[#146237](https://github.com/NousResearch/hermes-agent/issues/146237)）
5. **Cron 状态持久化：** 暂停的 cron 任务在 gateway 重启后重新激活（[#145596](https://github.com/NousResearch/hermes-agent/issues/145596)）

**用例趋势：**
- 多配置文件/多用户部署日益普遍（Discord 多路复用、Kanban 配置文件）
- 资源受限环境需要可配置的回退方案（STT、内存管理）
- 远程/混合工作流需求增长（Desktop 前端分离）

---

## 8. 待办关注

需要维护者关注的 Issue：

| Issue | 存在时间 | 优先级 | 描述 |
|-------|-----|----------|-------------|
| [#38519](https://github.com/NousResearch/hermes-agent/issues/38519) | 约 5 个月 | P2 | Desktop 前端独立安装——需求旺盛，尚未有 PR |
| [#44964](https://github.com/NousResearch/hermes-agent/issues/44964) | 约 4 个月 | P2 | /sessions CLI 隐藏非 CLI 会话——可用性问题 |
| [#90040](https://github.com/NousResearch/hermes-agent/issues/90040) | 约 2 个月 | P2 | skills.external_dirs 忽略托管范围——管理员困扰 |
| [#135487](https://github.com/NousResearch/hermes-agent/issues/135487) | 约 3 周 | P1 | Cron 数据库锁定导致失败——数据丢失风险 |
| [#118379](https://github.com/NousResearch/hermes-agent/issues/118379) | 约 5 周 | P1 | 凭证计费重复——财务影响 |

---

*基于 2026-10-30 的 GitHub 数据生成*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese (Simplified), following specific rules about preservation of technical terms, URLs, code, numbers, etc. Let me carefully translate while maintaining the exact structure and natural technical Chinese register.

Let me go through each section:

1. Title: IronClaw 项目动态 — 2026-10-30
2. Repository link stays as-is
3. Today's Overview - translate naturally
4. Releases - translate
5. Project Progress - keep the table structure
6. Community Hot Topics - translate
7. Bugs & Stability - translate
8. Feature Requests & Roadmap Signals - translate
9. User Feedback Summary - translate
10. Backlog Watch - translate
11. Footer - translate

Key terms to keep in English: 
- Dependabot
- WebAssembly
- wasmtime
- PR (can keep or translate to PR, I'll keep it)
- open
- merged
- closed

Let me translate now:</think>

# IronClaw 项目动态 — 2026-10-30

**代码库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日概览

IronClaw 代码库今日的活动呈现出成熟开源项目的典型维护状态。过去 24 小时内有两个 Pull Request 更新，均来自 Dependabot——这是针对 WebAssembly 运行时组件（wasmtime）的常规依赖升级。没有 Issue 也没有发布新版本。项目目前处于稳定、低噪音的状态，近期的活动主要由自动化依赖管理驱动。没有看到活跃的功能开发或缺陷修复周期。

---

## 2. 版本发布

过去 24 小时内没有发布新版本。

*本digest周期内无版本数据。*

---

## 3. 项目进展

| PR # | 标题 | 状态 | 作者 | 关注领域 |
|------|------|------|------|----------|
| [#8162](https://github.com/nearai/ironclaw/pull/8162) | chore(deps): bump wasmtime from 47.0.3 to 48.0.7 in /harness/latency/runner | **OPEN** | dependabot[bot] | 依赖升级 |
| [#8163](https://github.com/nearai/ironclaw/pull/8163) | chore(deps): bump wasmtime from 47.0.4 to 49.0.5 | **OPEN** | dependabot[bot] | 依赖升级 |

**概要：** 今日没有 PR 被合并或关闭。两个 open 状态的 PR 均为自动化的依赖升级请求，目标是 wasmtime WebAssembly 运行时。这些更新似乎在针对代码库的不同部分（可能是不同的模块或组件）应用版本增量，表明项目维护了多个 wasmtime 依赖项，且各自独立更新。

---

## 4. 社区热点话题

过去 24 小时内没有出现具有显著互动量的 Issue 或 Pull Request（评论、反应）。两个 open 状态的 PR 均显示零反应、零评论，符合常规依赖升级的典型特征——通常在合并前无需讨论。

---

## 5. 缺陷与稳定性

过去 24 小时内没有收到缺陷报告、崩溃日志或回归问题。

*无稳定性问题需要报告。*

---

## 6. 功能请求与路线图信号

过去 24 小时内没有新的功能请求或路线图相关的 Issue。

*本周期内无信号数据。*

---

## 7. 用户反馈摘要

过去 24 小时内没有记录到面向用户的反馈（Issue、评论或讨论）。

*无反馈数据可供分析。*

---

## 8. 待办事项关注

在提供的数据快照中没有发现长期未回复的 Issue 或停滞的 PR。

*本digest未标记待办事项。*

---

**Digest 生成时间：** 2026-10-30  
**数据来源：** GitHub API 活动流 nearai/ironclaw

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw project digest into Simplified Chinese. I need to:
1. Translate all headings
2. Translate all body text
3. Keep all formatting (tables, lists, code blocks, etc.)
4. Keep URLs, issue numbers, project names, etc. as-is
5. Use natural technical Chinese register

Let me go through and translate each section:

## 1. Today's Overview
- Translate the overview paragraph
- Keep the numbers and names as-is

## 2. Releases
- Translate

## 3. Project Progress
- Translate the table headers and content
- Translate bullet points

## 4. Community Hot Topics
- Translate the table
- Translate analysis

## 5. Bugs & Stability
- Translate the table
- Translate the note

## 6. Feature Requests & Roadmap Signals
- Translate the table
- Translate the prediction

## 7. User Feedback Summary
- Translate the bullet lists
- Translate "Satisfying progress"

## 8. Backlog Watch
- Translate the table
- Translate the high-priority section

## Footer
- Translate

Let me do the translation now:</think>

# QwenPaw 项目简报 — 2026-10-30

## 1. 今日概览

QwenPaw 今日开发活动频繁，过去 24 小时内共有 **15 个 issue**（5 个开放，10 个已关闭）和 **40 个 PR**（27 个开放，13 个已合并/关闭）更新。本日未发布新版本。项目正在积极修复 2.3.0-beta.1 版本中的稳定性问题，相关修复已覆盖插件加载、环境变量遮蔽和内存处理等方面。影响桌面构建和渠道集成的多个关键 bug 仍待解决，表明在下一个稳定版发布前仍有持续的稳定化工作要做。

## 2. 版本发布

本日无新版本发布。最新的版本仍为 **v2.3.0-beta.1**（于本简报周期前发布）。

## 3. 项目进展

本日合并/关闭的 PR：

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#8497](https://github.com/agentscope-ai/QwenPaw/pull/8497) | lalaliat | fix(plugins): 容忍插件加载期间的导入缓存刷新失败 |
| [#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490) | maximilize | feat(console): 聊天媒体的可导航全屏图片画廊 |
| [#8358](https://github.com/agentscope-ai/QwenPaw/pull/8358) | AGImentu | fix(providers): 遵循 thinking 默认值和声明的 wire 控制 |
| [#8253](https://github.com/agentscope-ai/QwenPaw/pull/8253) | rayrayrayraykk | feat(website): 添加 JSON 驱动的评测索引 |

**主要进展：**
- 插件加载韧性提升，现在能容忍导入缓存刷新失败
- 全屏图片画廊支持在聊天中导航查看媒体
- Thinking 配置现在能正确遵循 provider 默认值
- 全新双语评测排行榜已上线 `/evaluation/`

## 4. 社区热点话题

**评论最多的 issue：**

| Issue | 评论数 | 主题 |
|-------|----------|-------|
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) | 9 | **[Bug] 死循环：代理反复触发同一工具调用** |
| [#8464](https://github.com/agentscope-ai/QwenPaw/issues/8464) | 5 | **[Bug] /compact 忽略会话级模型切换，使用 agent.json 的 active_model** |
| [#8150](https://github.com/agentscope-ai/QwenPaw/issues/8150) | 3 | **[Bug] 飞书入站图文混排图片被静默丢弃** |

**分析：** **死循环** issue（#6116）引发最多讨论，反映出用户对代理卡在重复工具调用时浪费 API token 的强烈不满。**/compact 模型切换** bug（#8464）也引发活跃讨论，表明用户在生产工作流中高度依赖手动上下文压缩配合模型切换。

## 5. Bug 与稳定性

**本日报告的关键 bug：**

| Issue | 严重程度 | 状态 | 修复 PR？ |
|-------|----------|--------|---------|
| [#8500](https://github.com/agentscope-ai/QwenPaw/issues/8500) Auto-Dream 在提取失败时静默丢弃内存，导致检查点文件不可用 | **高** | 开放 | 否 |
| [#8488](https://github.com/agentscope-ai/QwenPaw/issues/8488) 桌面构建遗漏 visual_compression 资源 → 视觉压缩无效 | **高** | 开放 | 否 |
| [#8473](https://github.com/agentscope-ai/QwenPaw/issues/8473) 2.3.0-beta.1 所有后端插件加载失败 — unguarded importlib.invalidate_caches() | **高** | 已关闭 | — |
| [#8502](https://github.com/agentscope-ai/QwenPaw/issues/8502) 桌面端 HTML 预览在中文路径下失败 | **中** | 开放 | 否 |
| [#8490](https://github.com/agentscope-ai/QwenPaw/issues/8490) 语音转录设置导入 whisper（~690 MB RSS，从未释放） | **中** | 开放 | 否 |
| [#8486](https://github.com/agentscope-ai/QwenPaw/issues/8486) 控制台工具调用图标左侧边缘被裁切 | **低** | 开放 | 否 |

**注意：** Issue #8473（插件加载失败）已关闭，代表 2.3.0-beta.1 刚修复的一个重大回归问题。

## 6. 功能请求与路线图信号

**活跃的增强提案：**

| Issue | 类别 | 描述 |
|-------|----------|-------------|
| [#6189](https://github.com/agentscope-ai/QwenPaw/issues/6189) | **记忆** | save_decision() API — 结构化决策持久化，防止上下文压缩时丢失 |
| [#4356](https://github.com/agentscope-ai/QwenPaw/issues/4356) | **安全** | 文件 guard 和工具 guard 的更细粒度控制/集成（白名单支持） |
| [#7740](https://github.com/agentscope-ai/QwenPaw/issues/7740) | **管理** | Hub 模式：管理员密码重置功能 |
| [#4129](https://github.com/agentscope-ai/QwenPaw/issues/4129) | **用户体验** | 回溯功能（类似 Claude Code 的 /rewind），用于尝试不同提示词、修正拼写错误、回滚文件 |
| [#8459](https://github.com/agentscope-ai/QwenPaw/issues/8459) | **界面** | 更便捷地访问网页控制台中的未读推送消息 |

**预测：** **save_decision() API**（#6189）针对长上下文压缩时的决策丢失痛点，需求明确实现范围清晰，是下个版本很有希望的候选。**回溯功能**（#4129）和**文件 guard 粒度**（#4356）也符合高级用户工作流，可能以渐进式改进的形式出现。

## 7. 用户反馈总结

**从近期 issue 识别的痛点：**
- **Token 浪费**：死循环在检测前就消耗 API 配额（#6116）
- **模型切换失效**：手动 /compact 忽略 UI 选定的模型（#8464）
- **桌面体验缺陷**：中文路径处理导致 HTML 预览失败（#8502），PyInstaller 构建中遗漏视觉压缩资源（#8488）
- **内存完整性**：Auto-Dream 解析失败时静默丢失数据（#8500）
- **资源浪费**：仅为检查可用性就导入 whisper（~690 MB）（#8490）

**令人欣慰的进展：**
- 插件市场来源追踪已合并（#8231）—— 改进第三方插件更新工作流
- 全屏图片画廊已交付（#5490）—— 更佳的媒体检查用户体验
- 内联媒体边界改进（#8034）—— 防止长会话中的请求膨胀

## 8. 待办事项关注

**需要维护者关注的 issue/PR：**

| 项目 | 存在时长 | 状态 | 关注点 |
|------|-----|--------|---------|
| [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) 死循环 bug | ~3.5 个月 | 已关闭（won't fix） | 低优先级标签可能未反映用户影响；9 条评论表明持续痛点 |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) OpenViking 记忆插件 | ~7 周 | 开放，审查中 | 大型（XXL）首次贡献者 PR；需仔细审查 |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) PawApp SDK 重构 | ~6 周 | 开放 | XXXL 重构 PR；范围大，需确定负责人 |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) 本地模型管理插件提取 | 1 天 | 开放（WIP） | XXXL 改动；本地模型核心架构变更 |

**高优先级待办项：**
- **死循环** issue 被标记为 `won't fix` 但持续引发讨论——建议重新审视范围或提供代理端缓解指南
- **PawApp SDK 重构**（#7874）和**本地模型插件提取**（#8999）代表重大架构变更，需要明确负责人和时间表

---

*简报基于 2026-10-30 的 GitHub 活动数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest into Chinese, maintaining the exact Markdown structure while using natural technical Chinese (the register of a Chinese developer newsletter). I need to:

1. Keep all Markdown structure (headings, tables, lists, blockquotes, etc.)
2. Keep URLs, issue/PR numbers, file paths, code identifiers as-is
3. Use natural technical Chinese - professional but not literal word-for-word
4. Preserve all formatting including emoji

Let me translate this digest:</think>

# ZeroClaw 项目简报 — 2026-10-30

## 1. 今日概览

ZeroClaw 今日保持 **高开发活跃度**，过去 24 小时内有 50 个 Issue 和 50 个 PR 更新。项目暂无新版本发布。重要的架构 RFC（#10526）已于近期合并，实现了追加写入的会话事件历史与确定性状态回放——这为未来智能体流式输出奠定了基础。当前 Issue 队列以 Bug 报告为主（特别是渠道集成和插件安全相关），而 PR 则聚焦于 ZeroCode UI 增强、多租户 RBAC 和知识图谱按智能体归属等方向。44 个待合并 PR 与 33 个活跃 Issue 表明项目正处于 v0.9.0 版本的快速迭代周期中。

---

## 2. 版本发布

**今日无新版本。** 根据 Issue 追踪，v0.9.0 正在筹备中，关联 Issue 包括 #9394、#11970、#12076、#12095 等。

---

## 3. 项目进展

### 已合并/关闭的 PR（今日）

| PR | 标题 | 状态 |
|----|------|------|
| [#12095](https://github.com/zeroclaw-labs/zeroclaw/pull/12095) | fix(deps): bump pulldown-cmark to 0.13.5 for RUSTSEC-2026-0414 | **已关闭** — 安全补丁，修复 CVE-2026-0414 |
| [#11792](https://github.com/zeroclaw-labs/zeroclaw/pull/11792) | Bug: interrupted `plugin install` leaves staging directory | **已关闭** |
| [#11708](https://github.com/zeroclaw-labs/zeroclaw/pull/11708) | Bug: model_routing_config omits action-specific required arguments | **已关闭** |
| [#11486](https://github.com/zeroclaw-labs/zeroclaw/pull/11486) | Feature: Make ZeroCode Config save and cancel behavior predictable | **已关闭** |
| [#11987](https://github.com/zeroclaw-labs/zeroclaw/pull/11987) | Bug: Inline nosemgrep comments don't stop Semgrep alerts | **已关闭** |
| [#11970](https://github.com/zeroclaw-labs/zeroclaw/pull/11970) | Bug: agents delete/rename skip owned-state cascade in gateway-less builds | **已关闭** |

### 关键进展

- **安全补丁已合入**：更新 pulldown-cmark 依赖以修复 RUSTSEC-2026-0414
- **ZeroCode UX 持续改进**：@Auduity88 贡献多个 PR，推进配置编辑器、会话管理和转录显示功能
- **插件架构**：RPC 方式转发插件 Webhook 的工作正在进行中（#11320、#11322）
- **知识图谱安全**：PR #9745 引入按智能体归属和作用域所有权的隔离机制

---

## 4. 社区热点

### 活跃度最高的 Issue（按评论数）

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history, deterministic state replay | **14** | ✅ 已采纳 |
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | Per-sender RBAC for multi-tenant agent deployments | **11** | 🔥 需求强烈 |
| [#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999) | Discord plugin installation from release binary | **9** | 🔄 进行中 |
| [#11418]((https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | "Copy" one-click feature not working | **8** | 🐛 阻塞用户 |
| [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | Slack "is thinking…" status missing since v0.8.5 | **6** | 🐛 回归问题 |

### 活跃度最高的 PR（按重要性）

| PR | 标题 | 状态 |
|----|------|------|
| [#11921](https://github.com/zeroclaw-labs/zeroclaw/pull/11921) | feat(session): implement append-only session event history | **待合并** — 核心架构 |
| [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) | feat(gateway): forward plugin webhooks over RPC | **待合并** — 插件系统 |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | fix(memory): per-agent attribution for knowledge graph | **待合并** — 安全关键 |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | fix(runtime): withhold session-data tools from non-admin principals | **待合并** — 安全关键 |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) | feat(zerocode): reopen open sessions when zerocode restarts | **待合并** — 用户体验 |

### 深层需求分析

- **多租户与安全**：社区对 RBAC（#5982）、知识图谱按智能体隔离（#9647）和主体作用域会话工具（#11230）需求强烈
- **渠道可靠性**：用户报告 Slack 状态指示（#11416）、Matrix 路由（#10926）和 Discord 插件部署（#10999）存在问题
- **交互一致性**：ZeroCode 复制功能（#11418）和配置保存行为（#11486）阻塞日常工作流

---

## 5. Bug 与稳定性

### 严重/高优先级 Bug

| Issue | 严重级别 | 组件 | 状态 | 修复 PR |
|-------|----------|------|------|---------|
| [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | **S0** — 知识图谱无按智能体归属 | memory | 待处理 | [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) 进行中 |
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | **S0** — gateway.pairing_dashboard 被忽略，配对码永不过期 | config | 待处理 | 无 |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | **S2** — 技能审查/创建未对 Webhook 渠道执行 | runtime | 待处理 | 无 |
| [#11418]((https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | **S1** — 复制按钮完全无响应（工作流阻塞） | zerocode/tui | 待处理 | 无 |
| [#11484](https://github.com/zeroclaw-labs/zeroclaw/issues/11484) | **S2** — ZeroCode Agent 禁用了重复工具防护 | zerocode | 已关闭 | — |
| [#11517](https://github.com/zeroclaw-labs/zeroclaw/issues/11517) | **S2** — 网页聊天刷新导致用户输入丢失 | gateway | 已关闭 | — |

### 安全问题

- **#9647**：知识图谱全局共享——任意智能体可读写其他智能体的数据（严重）
- **#9394**：配对面板配置参数被接受但未生效，码永不过期（严重）
- **#11360**：包锁文件全局可读，存在本地提权风险

---

## 6. 功能需求与路线图信号

### 高关注度的功能请求

| Issue | 标题 | 优先级 | 预计下个版本 |
|-------|------|--------|-------------|
| [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 多租户智能体部署的按发送者 RBAC | p2 | v0.9.0 预计 |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | 完成公共运行时组合边界 | p2 | v0.9.0 预计 |
| [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) | Signal 媒体附件支持 | p2 | 评估中 |
| [#11013](https://github.com/zeroclaw-labs/zeroclaw/issues/11013) | 统一文件摄入/解析/投递 | p2 | 追踪进行中 |

### 路线图风向标

- **会话事件历史**（#10526、#11921）已落地——将支持确定性回放和派生智能体流
- **插件 RPC**（#11320、#11322）进行中——Webhook 将通过核心 RPC 路由
- **按智能体知识**（#9647、#9745）正在修复——所有权模型即将推出
- **成本覆盖**（#11589）已合并——运营方可覆盖超限费用

---

## 7. 用户反馈摘要

### 痛点

1. **ZeroCode 复制失效**：复制按钮对我的剪贴板完全不起作用（#11418）——S1 级工作流阻塞
2. **网页聊天数据丢失**：刷新导致用户输入从界面和 localStorage 中消失（#11517）
3. **Slack 状态回归**：应用"正在思考中…"不再显示在频道话题中（#11416）
4. **技能隔离失效**：技能审查工具无法看到技能包中的技能（#11333）
5. **插件安装脆弱**：中断安装后留下孤立临时目录（#11792）

### 积极信号

- Discord 插件现已从发布二进制验证可用（#10999）——渠道成熟度提升
- ZeroCode 配置编辑器现已具备一致的保存/取消行为（#11486）
- 重启时重新打开会话已实现（#11727）——持久化改进

---

## 8. 待办关注

### 长期未响应的重点 Issue（近期无更新）

| Issue | 标题 | 创建时间 | 状态 |
|-------|------|----------|------|
| [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) | Matrix send_via 将对等身份误作房间目标 | 2026-09-17 | 待处理，已确认 |
| [#10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294) | file_write 无法区分创建与覆盖 | 2026-08-24 | 待处理 |
| [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) | plugin install 在配置种子化前持久化 | 2026-08-20 | 待处理，进行中 |
| [#11358](https://github.com/zeroclaw-labs/zeroclaw/issues/11358) | plugin migrate 移动时不带包锁 | 2026-10-01 | 待处理，已确认 |

### 需要维护者审核的 PR

| PR | 标题 | 当前状态 |
|----|------|----------|
| [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | zeroclaw user commands for roster password lifecycle | 需作者操作 |
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | share durable committed-rename recovery | 需作者操作 |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | publish authorization edits to running daemon | 需维护者审核 |

---

*本简报基于 2026-10-30 的 GitHub 数据生成。所有链接指向 https://github.com/zeroclaw-labs/zeroclaw。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*