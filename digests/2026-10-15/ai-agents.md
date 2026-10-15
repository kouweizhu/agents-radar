# OpenClaw 生态日报 2026-10-15

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-15 00:47 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the OpenClaw Project Digest from English to Chinese. I need to:

1. Translate all headings
2. Translate all body text (paragraphs, list items, etc.)
3. Keep all formatting (tables, lists, bold, links, code references like #12345, URLs)
4. Keep technical terms, project names, version numbers, file paths as-is
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me go through and translate section by section:

## 1. Today's Overview
翻译: 今日概况

## 2. Releases
翻译: 版本发布

## 3. Project Progress
翻译: 项目进展

## 4. Community Hot Topics
翻译: 社区热点

## 5. Bugs & Stability
翻译: 缺陷与稳定性

## 6. Feature Requests & Roadmap Signals
翻译: 功能需求与路线图信号

## 7. User Feedback Summary
翻译: 用户反馈摘要

## 8. Backlog Watch
翻译: 待办事项关注

Now let me translate the content within each section while preserving the format...</think>

# OpenClaw 项目简报 — 2026-10-15

## 1. 今日概况

OpenClaw 保持高活跃度，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。项目当前有 344 个 open PR，156 个已合并/关闭。然而稳定性问题持续存在：三个 P0 issue 占据主要注意力（SQLite WAL 膨胀、插件捕获时 gateway 阻塞、启动卡顿），多个关键回归问题影响 2026.9.x 版本线。今日未发布新版本，表明团队可能在为 10 月分支准备稳定版本后再切新版本。

## 2. 版本发布

**今日无新版本发布。** 最新稳定版本仍为 2026.9.x 系列（2026.9.2 到 2026.9.8），10 月分支（2026.10.x）正在开发中。

---

## 3. 项目进展

| PR | 标题 | 状态 |
|----|-------|--------|
| [#172527](https://github.com/openclaw/openclaw/pull/172527) | fix(cron): restore owner app reauthorization on October | 🔒 已关闭 |
| [#172659](https://github.com/openclaw/openclaw/pull/172659) | fix(novita): send max_tokens on chat completions | 🔒 已关闭 |
| [#172590](https://github.com/openclaw/openclaw/pull/172590) | fix: automations switch accounts when interactive defaults change | 🔒 已关闭 |
| [#172546](https://github.com/openclaw/openclaw/pull/172546) | fix(ui): side chat shows text instead of working indicator | 🔒 已关闭 |
| [#172632](https://github.com/openclaw/openclaw/pull/172632) | fix(gateway): recover agent admission after runtime supersession | 🟢 Open (P1) |
| [#172664](https://github.com/openclaw/openclaw/pull/172664) | fix: address MCP and source-map dependency advisories on October | 🟢 Open (P1) |

**关键进展：**
- 10 月分支 Cron 授权恢复
- Novita API 兼容性修复（支持推理模型）
- 交互式默认值变更时自动化账户切换修复
- 侧边栏聊天响应性改进
- 运行时超级会话后 Gateway 代理准入恢复
- 安全依赖更新（MCP OAuth、source-map DoS 漏洞）

---

## 4. 社区热点

### 最活跃 Issue（按评论数）

| Issue | 标题 | 评论数 | 严重程度 |
|-------|-------|----------|----------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 膨胀至 1.4–2.8 GB，尽管配置了 wal_autocheckpoint=1000；阻止 gateway 启动 | **125** | P0 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归） | **22** | P0 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动在 sidecars.model-runtime 处卡顿约 17 分钟 | **19** | P0 |
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | openclaw doctor --fix 慢 4-5 倍（55s → 229s+）— 会话快照路径遍历 | **17** | P1 |

**分析：** SQLite WAL 问题（#143524）热度远超其他，评论数达 125 条，是第二名的近 6 倍。用户报告 WAL 文件膨胀至 2.8 GB，尽管已配置检查点，仍完全阻止 Windows 端 gateway 启动。这造成了**消息丢失和崩溃循环影响**，是关键的阻塞项。结合插件捕获回归（#160959）和启动卡顿（#152981），10 月版本可能需要优先修复数据库和启动性能问题。

---

## 5. 缺陷与稳定性

### 关键（P0）缺陷

| Issue | 标题 | 影响 | 修复 PR？ |
|-------|-------|--------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 膨胀至 1.4–2.8 GB，阻止启动 | 消息丢失，崩溃循环 | 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 捕获大型外部插件时阻塞数分钟 | 崩溃循环 | 无 |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Gateway 启动卡顿约 17 分钟，超时失败 | 崩溃循环 | 无 |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | 启动阻塞事件循环 40–200s；健康监控误判为断开，升级为重启循环 | 用户体验发布阻塞 | 无 |
| [#161216](https://github.com/openclaw/openclaw/issues/161216) | "使用 ChatGPT 登录" OAuth 返回 invalid_client | 用户体验发布阻塞 | 无 |
| [#166221](https://github.com/openclaw/openclaw/issues/166221) | 从 2026.9.4 更新到 2026.9.8 在 SQLite 预检时失败 | 崩溃循环 | 无 |

### 高优先级（P1）回归

| Issue | 标题 | 影响 |
|-------|-------|--------|
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码捕获每个 CLI 写入 1.1–1.4 GB，每个 Gateway 启动写入 6.5 GB（SSD 损耗） | 其他 |
| [#163029](https://github.com/openclaw/openclaw/issues/163029) | 外部插件回合中重新加载（40–70s 卡顿） | 崩溃循环 |
| [#159094](https://github.com/openclaw/openclaw/issues/159094) | 状态生命周期租约争用：worker 报告另一进程持有 | 会话状态，消息丢失 |
| [#155119](https://github.com/openclaw/openclaw/issues/155119) | 子代理完成：最终答案丢失 + 重复结算事件 | 消息丢失 |

**稳定性问题：** 2026.9.x 版本线出现多个回归，特别是在数据库处理（WAL 检查点失败）、插件加载和启动性能方面。大多数关键缺陷标记为"no-new-fix-pr"，表明团队仍在调查根本原因，尚未准备好修复方案。

---

## 6. 功能需求与路线图信号

### 活跃功能请求

| Issue | 标题 | 优先级 | 信号 |
|-------|-------|----------|---------|
| [#101422](https://github.com/openclaw/openclaw/issues/101422) | 为 markdown 优先工作区配置内存召回资格和索引排除路径 | P2 | 包含用例细节，关联工作区内存管理 |
| [#111143](https://github.com/openclaw/openclaw/issues/111143) | 允许在 Control UI 侧边栏固定插件标签页 | P3 | 用户请求 UI 自定义 |
| [#70266](https://github.com/openclaw/openclaw/issues/70266) | 在 macOS Talk Mode 叠加层中使用助手头像 | P3 | macOS 特定 UI 增强 |
| [#66705](https://github.com/openclaw/openclaw/issues/66705) | 在 exec 子进程中暴露 OPENCLAW_SESSION_KEY 为环境变量 | P2 | 安全和工作流增强 |
| [#138245](https://github.com/openclaw/openclaw/issues/138245) | 输出守卫：在伪工具调用污染会话历史前将其作为纯文本捕获 | P2 | 会话完整性保护 |

**路线图信号：** 根据活跃 PR 和 issue，近期重点可能为：
1. **数据库性能** — 减少 SQLite 事务 (#172673, #172674)，修复 WAL 检查点
2. **UI 现代化** — Solid 渲染迁移，移除 Lit 依赖 (#171558, #171846, #171863)
3. **插件系统** — 源码捕获优化，主题支持 (#172627)
4. **安全** — 依赖漏洞修复 (#172664)，凭证处理改进

---

## 7. 用户反馈摘要

### 痛点

- **Windows 端数据库膨胀：** 用户报告 SQLite WAL 文件膨胀至数 GB，尽管已配置检查点，完全阻止 gateway 启动。这是影响最大的投诉（#143524，125 条评论）。
- **插件捕获回归：** 自 2026.9.6 起，外部插件加载导致主线程卡顿 40–70 秒，且反复触发重新加载波次（#163029, #160959）。
- **启动性能：** 部分配置下 Gateway 启动需 17 分钟以上，事件循环阻塞导致健康监控误判为断开，进而升级为重启循环（#152981, #162211）。
- **更新失败：** 多位用户报告更新失败导致系统处于不一致状态（#172395, #168895, #172053）。
- **SSD 损耗担忧：** 插件源码捕获每次操作写入 1–6 GB，引发硬件寿命担忧（#157989）。

### 积极信号

- Cron 自动化修复取得进展（#172527）
- UI 响应性改进持续上线
- 内存搜索参数验证已修复（#172630）
- Browser 和 Buzz 凭证路径处理已改进（#172283, #172289）

---

## 8. 待办事项关注

### 长期未答复的重要 Issue

| Issue | 标题 | 时长 | 状态 |
|-------|-------|-----|--------|
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro：textSignature 膨胀 + think 标签导致会话失败 | 约 7 个月 | Open，已停滞 |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 持久出站投递卡在 send_attempt_started，重启后丢失 | 约 2 个月 | Open，已停滞 |
| [#128809](https://github.com/openclaw/openclaw/issues/128809) | Slack socket-mode 重连泄漏 socket，直至达到 10 连接上限 | 约 2 个月 | Open |
| [#131768](https://github.com/openclaw/openclaw/issues/131768) | Android Talk 在代理使用工具或等待时断开实时会话 | 约 2 个月 | Open |
| [#139578](https://github.com/openclaw/openclaw/issues/139578) | llama.cpp EmbeddingGemma 以服务器默认 ubatch 512 运行（回归） | 约 1.5 个月 | Open，已停滞 |
| [#38091](https://github.com/openclaw/openclaw/issues/38091) | UI WebSocket 重连导致会话终止 | 约 7 个月 | 已关闭 |

### 需要维护者关注的 Issue

- **#164294** — Gateway 状态库 WAL 自动检查点永不完成（14 条评论，P2）
- **#151962** — 运行时出现幽灵用户消息（10 条评论）
- **#158788** — Windows 上 Cron 代理轮次因 DataCloneError 失败（9 条评论）
- **#164972** — Claude-cli 多代理团队可见性矩阵失败（8 条评论）
- **#166020** — Gateway 启动缓慢：约 60s 重新验证插件源码树（6 条评论）

**观察：** 多个平台特定问题（Windows、Android、macOS）仍在调查中。Telegram 和 Slack 传输问题显示停滞模式，要么复现率低，要么根本原因复杂。2026.9.x 中的插件系统变更引入了多个回归，需要协调修复。

---

## 横向生态对比

<think>The user wants me to translate the entire cross-project comparison report into Simplified Chinese. Let me go through it carefully and translate it while preserving all the formatting, links, numbers, code references, and technical terms.

Let me translate section by section, maintaining the exact structure and using natural technical Chinese.</think>

# 跨项目对比报告 — AI Agent 开源生态

## 1. 生态概览

个人 AI 助手和 Agent 框架领域正在多个独立项目中蓬勃发展。本对比报告对五个活跃的开源项目进行了审视——OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw——涵盖 Agent 运行时、终端界面、多渠道部署以及插件架构。共同的关注点集中在数据库性能优化、会话管理可靠性以及多 Agent 编排上。项目规模差异显著，从日均数千次提交的重量级发布（OpenClaw）到精简专注的实现（ZeroClaw），这表明生态仍在探索架构模式，尚未围绕某个主导框架形成收敛。

---

## 2. 活动对比

| 项目 | 更新 Issue (24h) | 更新 PR (24h) | 今日发布 | 活跃度评分* |
|------|-----------------|---------------|----------|-------------|
| **OpenClaw** | 500 | 500 | 0 | 🔴 极高 |
| **Hermes Agent** | 50 | 50 | 2 | 🟢 高 |
| **IronClaw** | 0 | 0 | 0 | ⚫ 静默 |
| **QwenPaw** | 13 | 34 | 2 | 🟢 高 |
| **ZeroClaw** | 28 | 50 | 0 | 🟡 中高 |

*活跃度评分综合考量 Issue/PR 数量、发布频率及评论互动。*

---

## 3. OpenClaw 的定位

### 相对优势

OpenClaw 展现出生态中**最高的活动量**——Issue 和 PR 数量是 Hermes 和 ZeroClaw 的 10 倍左右，约是 QwenPaw 的 38 倍。这一规模意味着：

- **更庞大的贡献者群体** —— 持续的迭代速度需要活跃的社区支撑
- **更广的覆盖范围** —— 同时处理 gateway、runtime、CLI、TUI 及 ACP 组件相关的问题
- **更快的迭代节奏** —— 每日发布表明成熟的 CI/CD 流程

### 技术路径差异

| 方面 | OpenClaw | Hermes | QwenPaw | ZeroClaw |
|------|----------|--------|---------|----------|
| 架构 | 统一的 gateway-runtime | Gateway/运行时分离 | 多渠道中心 | 终端优先 |
| 插件系统 | 内置 + MCP | MCP 优先 | 插件目录 | 内置 |
| 数据库 | SQLite + WAL | 专注 SQLite | 外部路径支持 | SQLite 会话 |
| 发布节奏 | 每日 | 补丁发布 | Beta 发布 | 里程碑式 |

OpenClaw 的统一 gateway-runtime 模型（Hermes 在 v0.22.0 中合并，OpenClaw 正在演进）与 ZeroClaw 的终端优先 TUI 优先设计形成对比。QwenPaw 强调多渠道部署（Telegram、Slack、Email），而 Hermes 则聚焦桌面/macOS 生态。

### 社区规模指标

- OpenClaw：344 个开放 PR，2,520+ 贡献者（根据 v0.22.0 数据）
- Hermes：活跃的贡献者基础，近期发布 v0.22.0 "Threshold Release"
- QwenPaw：首次贡献者活跃，采用 Beta 驱动社区模式
- ZeroClaw：规模较小但参与度高，约 50 个 PR 在推进，按渠道分组讨论
- IronClaw：休眠状态——无活动信号

---

## 4. 共同技术关注点

### 多项目共同涌现的需求

| 技术领域 | 涉及项目 | 具体需求 |
|----------|----------|----------|
| **数据库性能** | OpenClaw, Hermes, ZeroClaw | SQLite WAL 检查点失败、膨胀（OpenClaw 出现 2.8+ GB WAL 文件）、会话重写问题 |
| **插件/热重载稳定性** | OpenClaw, QwenPaw, ZeroClaw | 插件源捕获重写 1-6 GB；重载卡顿（40-70 秒）；重载时 Cron 任务取消 |
| **多 Agent 编排** | Hermes, OpenClaw, ZeroClaw | 子 Agent 路由、A2A 协议 RFC、Agent 间调用取消 |
| **平台特定修复** | OpenClaw, Hermes, QwenPaw | Windows 文件锁、路径处理、macOS/Squirrel 更新、AMD iGPU 显存 |
| **渠道可靠性** | QwenPaw, ZeroClaw | Telegram 消息路由、Email TLS/STARTTLS、WhatsApp 附件 |
| **会话管理** | OpenClaw, Hermes, ZeroClaw | 状态生命周期、会话所有权（Gateway 拥有 vs 组件各自管理）、裁剪缺陷 |
| **启动性能** | OpenClaw, Hermes | Gateway 启动挂起（17+ 分钟）、健康监控误报 |

*观察：数据库性能和热重载稳定性是跨项目最普遍的问题，出现在 3+ 项目中。统一的 gateway-runtime 架构模式正在多个代码库中引发合并后的 bug。*

---

## 5. 差异化分析

### 功能焦点

| 项目 | 主要差异化 | 目标用户 |
|------|-----------|----------|
| **OpenClaw** | 全栈 Agent 平台，含 CLI、TUI、gateway、runtime；MCP 优先插件生态 | 高级用户、开发者、企业 |
| **Hermes Agent** | 桌面原生 AI 助手，深度 macOS 集成；桌面覆盖层、原生 UI | macOS/桌面用户 |
| **QwenPaw** | 多渠道中心（Telegram、Slack、Email）；评估基础设施 | 多平台部署 |
| **ZeroClaw** | 终端优先 TUI；渠道无关运行时；工具结果边界 | CLI 优先开发者、终端爱好者 |
| **IronClaw** | 当前数据不明确 | 未知 |

### 技术架构

- **OpenClaw** 和 **Hermes** 追求 gateway-runtime 整合，尽管 Hermes 刚刚在 v0.22.0 中完成合并，正在处理合并后的回归问题。
- **ZeroClaw** 保持终端优先设计，关注点分离（TUI vs 运行时）。
- **QwenPaw** 将渠道管理（Email、Telegram、Slack）作为一等公民。
- **IronClaw** 无当前开发活动——可能已归档或仅维护。

### 目标用户对比

项目分为两个层级：

1. **高级用户 / 企业层级**：OpenClaw、Hermes Agent — 范围更广、组件更多、团队规模更大
2. **开发者 / CLI 层级**：ZeroClaw、QwenPaw — 专注工具、特定渠道、轻量部署

---

## 6. 社区势头与成熟度

### 活动层级

| 层级 | 项目 | 特征 |
|------|------|------|
| **快速迭代** | OpenClaw | 每日 500 Issue/PR；每日发布；重大架构变更；高 bug 量 |
| **活跃开发** | Hermes、QwenPaw、ZeroClaw | 每日 30-50 PR；补丁/Beta 发布；重大发布后稳定中 |
| **稳定期** | Hermes（v0.22.0 后） | 合并后 bug 修复阶段；聚焦回归问题关闭 |
| **休眠** | IronClaw | 24 小时内无活动 |

### 成熟度信号

- **OpenClaw**：成熟的 CI/CD 流程，每日发布；庞大贡献者群体；复杂的回归追踪
- **Hermes**：刚发布重大 v0.22.0；合并后稳定期；强安全/PR 审查文化
- **QwenPaw**：活跃 Beta 计划；首次贡献者；Beta 版本快速迭代
- **ZeroClaw**：里程碑式发布；渠道特定功能工作；规模小但专注

---

## 7. 趋势信号

### 从社区反馈中提取的行业趋势

1. **Gateway-runtime 整合正在加速** — Hermes（v0.22.0）和 OpenClaw 都在向统一的 gateway-runtime 架构演进，但合并后的不稳定是需要持续投入的重要痛点。

2. **数据库性能成为普遍瓶颈** — SQLite WAL 问题在 3+ 项目中出现。随着 Agent 处理更长对话和更大工具模式，固定提示词余量和上下文预算正成为关键约束（ZeroClaw #5808 显示预算溢出 3.3 倍）。

3. **多 Agent 和 A2A 协议正在兴起** — ZeroClaw 的 RFC #11254 和 Hermes 的子 Agent 路由表明对 Agent 间通信标准的需求不断增长。

4. **热重载和插件系统需要加固** — OpenClaw、QwenPaw 和 ZeroClaw 的插件重载行为导致会话丢失、Cron 取消和数据损坏。这是生产部署的可靠性缺口。

5. **多渠道部署需求不断增长** — QwenPaw 和 ZeroClaw 大力投入 Telegram、Slack、Email 和 WhatsApp 集成。渠道无关的 Agent 模式正在获得关注。

6. **平台特定问题不断增加** — Windows 文件处理、macOS Squirrel 更新和 AMD iGPU 显存预留表明跨平台支持需要专门的工程投入。

7. **UI/UX 打磨正在加速** — QwenPaw 的控制台改进、Hermes 的桌面覆盖层和 ZeroClaw 的 TUI 工作表明项目正在从核心功能成熟到用户体验优化。

### AI Agent 开发者的价值

- **框架开发者**：数据库优化（SQLite WAL、会话裁剪）和热重载稳定性是适用范围广的高价值领域。
- **集成开发者**：多渠道模式（Telegram、Email、Slack）在 QwenPaw/ZeroClaw 中已成熟；A2A 协议虽处于早期但正在兴起。
- **企业采纳者**：OpenClaw 和 Hermes 提供最完整的生态系统，但重大版本升级时需注意合并后的稳定性风险。

---

*跨项目综合分析基于 2025-10-15 GitHub 活动数据。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. Let me carefully translate while preserving:

1. All Markdown structure (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
2. URLs and link targets
3. Code spans, code blocks, numbers and dates
4. Project names, repository slugs, usernames, version tags, file paths, API/config identifiers
5. Issue/PR references like #12345

I need to use natural technical Chinese - the register of a Chinese developer newsletter - not literal word-for-word translation.

Let me go through the content:

**Headings:**
- "Hermes Agent Project Digest — 2026-10-15" → "Hermes Agent 项目摘要 — 2026-10-15"
- "Today's Overview" → "今日概览"
- "Releases" → "版本发布"
- "v0.22.1 — Patch Release" → "v0.22.1 — 补丁版本"
- "v0.22.0 — "The Threshold Release"" → "v0.22.0 — "Threshold 版本""
- "Project Progress" → "项目进展"
- "Community Hot Topics" → "社区热点"
- "Bugs & Stability" → "Bug 与稳定性"
- "Feature Requests & Roadmap Signals" → "功能请求与路线图信号"
- "User Feedback Summary" → "用户反馈摘要"
- "Backlog Watch" → "待办关注"

**Content translation:**

"Hermes Agent remains highly active following the major v0.22.0 "Threshold Release" (October 13)." → "在 10 月 13 日发布重大版本 v0.22.0 "Threshold 版本"后，Hermes Agent 保持高度活跃。"

"The project shows 50 issues and 50 PRs updated in the last 24 hours" → "过去 24 小时内，项目有 50 个 issue 和 50 个 PR 更新"


A patch release (v0.22.1) shipped yesterday addressing Windows Store and plugin compatibility issues, while the unified gateway runtime (#106742) merged on October 14 has triggered multiple post-merge bug reports stemming from this architectural change. Community engagement remains strong with 23 comments on the top issue.

The patch addresses Windows Store functionality and includes plugin updates alongside Nemotron Super 3.5 default parameters. This major milestone consolidates the unified gateway runtime, representing a significant architectural shift. Over the past month, the project merged around 6,080 PRs across approximately 24,200 commits, with 7,180 issues resolved and 2,520 contributors participating—the largest release to date.

Ten pull requests were merged and closed, including fixes for CLI commands reading gateway state, routing Ink/Desktop requests through the shared gateway, resolving MCP discovery in cron, restoring session metadata on GatewayACPAgent, handling local path resolution against the session folder, and honoring security allowlist removals on the shared gateway.

Six PRs are actively advancing: addressing Squirrel.Mac updates through owner-writable pycs, implementing Windows AMD iGPU memory reservation accounting, preventing site-packages from being wiped on digest drift, and subscribing sessions on resume or session switches.

The most discussed issue involves Telegram DM topic routing where messages delivered without message_thread_id cause lobby recovery to misroute (23 comments, 5 👍). A P1-level problem stems from the unified gateway runtime where post-merge fixes are needed to ensure every surface correctly manages local session ownership (12 comments). There's also a lifecycle guard false-positive issue blocking Node.js CLIs like obsidian-headless after September scan-budget commits (8 comments), and convert_messages not stripping timestamp and message_id fields.

Desktop users want a floating "Quote" button for keyboard-driven quote workflows instead of the current Option-drag plus Cmd+L approach (8 comments, 3 👍). Critical P1 bugs include the gateway owning all local sessions after the merge and Telegram init hanging pre-socket in recurring #63309 families. P2 bugs span Telegram topic routing, hosted room driver omitting member_id, Docker venv sync issues, kanban dispatcher PID detection on macOS, and Git merge-base timeout problems. Desktop-specific issues involve clipboard image handling in the composer.

A feature request for the "Quote" button has 8 comments with 3 👍, while optional max-width caps for chat columns on ultrawide monitors need 2 comments and 1 👍. The /sessions and /resume commands lack pagination despite requests, and Proton Pass AI Access Tokens support is marked as not planned by the sweeper but maintains strong community interest with 13 👍. Multiple PRs address plugin catalog additions and plugin bumps. Several pain points are emerging, particularly around post-merge instability.

The unified gateway runtime (#106742) in v0.22.0 is creating regressions in session management, path resolution, and security allowlist handling, with users experiencing P1-level disruption. Windows compatibility issues are appearing across Docker environment sync, Squirrel.Mac updates, AMD iGPU memory reservations, and WhatsApp Baileys file locking. Telegram platform instability is evident through recurring init hangs and DM topic routing problems. Desktop app polish is needed for hover card positioning, HUD mode rendering, and clipboard handling. Several issues are aging without resolution, particularly the convert_messages metadata stripping problem causing provider 400 errors.</think>

# Hermes Agent 项目摘要 — 2026-10-15

## 今日概览

在 10 月 13 日发布重大版本 v0.22.0 "Threshold 版本"后，Hermes Agent 保持高度活跃。过去 24 小时内，项目有 50 个 issue 和 50 个 PR 更新，表明发布后正在密集进行稳定工作。补丁版本 v0.22.1 于昨日发布，修复了 Windows Store 和插件问题。10 月 14 日合入的统一网关运行时 (#106742) 正在产生大量合入后的 bug 报告——多个 P1/P2 issue 都追溯到这次架构变更。社区参与活跃，最热门 issue 有 23 条评论。

## 版本发布

### v0.22.1 — 补丁版本
**发布日期：** 2026 年 10 月 14 日

修复 Windows Store、插件更新，以及 Nemotron Super 3.5 默认参数问题。

- [#136559](https://github.com/NousResearch/hermes-agent/releases/tag/v0.22.1) — 发布标签

### v0.22.0 — "Threshold 版本"
**发布日期：** 2026 年 10 月 13 日

里程碑版本：
- 自 v0.21.0 以来约 24,200 次提交
- 约 6,080 个合并的 PR
- 约 15,600 个文件变更
- 约 7,180 个关闭的 issue
- 约 2,520 位贡献者

> Hermes 是门槛之神——版本名称引用了统一网关运行时的合并，确立了会话所有权。

## 项目进展

**今日合并/关闭 10 个 PR：**

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#138668](https://github.com/NousResearch/hermes-agent/pull/138668) | 修复 CLI 命令读取网关所有状态 | CLOSED |
| [#138667](https://github.com/NousResearch/hermes-agent/pull/138667) | 通过共享网关路由 Ink/Desktop 请求 | CLOSED |
| [#65993](https://github.com/NousResearch/hermes-agent/pull/65993) | 修复 cron 中 MCP 发现（抑制交互式 OAuth） | CLOSED |
| [#138666](https://github.com/NousResearch/hermes-agent/pull/138666) | 在 GatewayACPAgent 上恢复会话元数据 | CLOSED |
| [#138665](https://github.com/NousResearch/hermes-agent/pull/138665) | 相对于会话文件夹而非守护进程解析本地路径 | CLOSED |
| [#138664](https://github.com/NousResearch/hermes-agent/pull/138664) | 安全：遵守共享网关上的允许列表移除 | CLOSED |
| [#138707](https://github.com/NousResearch/hermes-agent/pull/138707) | 自动修复 lint/格式 | CLOSED |

**推进中的活跃 PR：**

- [#138708](https://github.com/NousResearch/hermes-agent/pull/138708) — 通过使 pycs 所有者可写来修复 Squirrel.Mac 更新
- [#138706](https://github.com/NousResearch/hermes-agent/pull/138706) — Windows AMD iGPU 内存预留核算
- [#138703](https://github.com/NousResearch/hermes-agent/pull/138703) — 避免在 digest 漂移时清除 tools Python site-packages
- [#138700](https://github.com/NousResearch/hermes-agent/pull/138700) — 在 /resume 或 /sessions 切换时订阅会话

## 社区热点

**按讨论热度排序的热门 issue：**

1. **[#136567](https://github.com/NousResearch/hermes-agent/issues/136567)** — Telegram DM 主题：发送的消息无消息线程 ID → 大厅恢复错误路由（23 条评论，5 👍）
   - *严重程度：P2* | 平台：Telegram | 组件：gateway
   - 根因：论坛模式机器人 DM 中，Telegram 在发送首条消息时不提供 `message_thread_id`

2. **[#134889](https://github.com/NousResearch/hermes-agent/issues/134889)** — 追踪：一个网关拥有所有本地会话 — 合入后修复（12 条评论）
   - *严重程度：P1* | 组件：gateway, agent, cli, tui, acp
   - 统一网关运行时后的追踪问题；目标是让每个界面正确与本地会话通信

3. **[#105758](https://github.com/NousResearch/hermes-agent/issues/105758)** — 生命周期守卫误报阻止 Node.js CLI（8 条评论）
   - *严重程度：P2* | 组件：gateway, cron
   - 影响 9 月 scan-budget 提交后的 `obsidian-headless` 等 CLI 工具

4. **[#48523](https://github.com/NousResearch/hermes-agent/issues/48523)** — convert_messages 未剥离时间戳/message_id（8 条评论，2 👍）
   - *严重程度：P2* | 组件：gateway | 区域：sessions
   - 在网关模式下导致严格 provider 返回 400 错误

5. **[#52554](https://github.com/NousResearch/hermes-agent/issues/52554)** — Desktop 浮动"引用"按钮（8 条评论，3 👍）
   - *严重程度：P3* | 组件：desktop
   - 功能请求：键盘驱动的引用工作流需要 UI 按钮

## Bug 与稳定性

**报告的严重 (P1) Bug：**

| Issue | 描述 | 修复 PR？|
|-------|-------------|---------|
| [#134889](https://github.com/NousResearch/hermes-agent/issues/134889) | 统一网关运行时合入后问题 | 进行中 |
| [#138649](https://github.com/NousResearch/hermes-agent/issues/138649) | Telegram 初始化在 socket 前挂起（#63309 系列反复出现） | 无 |

**高优先级 (P2) Bug：**

| Issue | 描述 | 修复 PR？|
|-------|-------------|---------|
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram DM 主题消息路由 | 无 |
| [#138660](https://github.com/NousResearch/hermes-agent/issues/138660) | 托管房间驱动遗漏 member_id → member turns 从不运行 | 无 |
| [#138689](https://github.com/NousResearch/hermes-agent/issues/138689) | Desktop 清除 bundled tools-Python site-packages | [#138703](https://github.com/NousResearch/hermes-agent/pull/138703) |
| [#138220](https://github.com/NousResearch/hermes-agent/issues/138220) | Docker v0.22.0 venv 与 uv.lock 不同步 | 无 |
| [#135344](https://github.com/NousResearch/hermes-agent/issues/135344) | macOS 上 kanban 调度器 PID 回收检测 | 无 |
| [#138404](https://github.com/NousResearch/hermes-agent/issues/138404) | Git <2.44 merge-base 探测超时 | 无 |

**Desktop 特定 Bug：**
- [#42280](https://github.com/NousResearch/hermes-agent/issues/42280) — 组合器将从 Word 粘贴富文本时剪贴板图片视为附件（P3）
- [#138663](https://github.com/NousResearch/hermes-agent/issues/138663) — HUD 模式渲染主页仪表盘而非浮动组合器（P3）
- [#138671](https://github.com/NousResearch/hermes-agent/issues/138671) — 悬停卡片锚定在左上角 (0,0) 而非触发点（P3）

## 功能请求与路线图信号

**有社区关注度的活跃功能请求：**

1. **[#52554](https://github.com/NousResearch/hermes-agent/issues/52554)** — Desktop 浮动"引用"按钮（8 条评论，3 👍）
   - 当前需要键盘工作流（Option 拖拽 + Cmd+L）；请求添加工具栏按钮

2. **[#134024](https://github.com/NousResearch/hermes-agent/issues/134024)** — 聊天消息列可选最大宽度限制（2 条评论）
   - 针对超宽显示器（4K、3440×1440）— 当前行长达 150-250+ 字符

3. **[#138575](https://github.com/NousResearch/hermes-agent/issues/138575)** — /sessions 和 /resume 分页（1 条评论，1 👍）
   - 当前硬编码为 10 条且无分页

4. **[#30649](https://github.com/NousResearch/hermes-agent/issues/30649)** — Proton Pass AI Access Tokens 支持（3 条评论，13 👍）
   - *已关闭：sweeper:not-planned* | 请求将 Proton Pass 作为密钥源后端

5. **插件目录新增：**
   - [#138705](https://github.com/NousResearch/hermes-agent/pull/138705) — 渲染 skills 和 MCP 目录条目
   - [#138704](https://github.com/NousResearch/hermes-agent/pull/138704) — Alan's Way 插件更新至 v0.21.6

## 用户反馈摘要

**从 issue 中浮现的痛点：**

1. **合入后不稳定**：v0.22.0 中合入的统一网关运行时 (#106742) 正在导致多个回归问题——会话管理、路径解析和安全允许列表。用户报告 P1 级干扰。

2. **Windows 兼容性问题**：报告了多个 Windows 特定 bug — Docker 环境同步、类 macOS 的 Squirrel.Mac 更新、AMD iGPU 内存预留、WhatsApp Baileys 文件锁定。

3. **Telegram 平台不稳定**：反复出现的初始化挂起 (#138638649) 和 DM 主题路由 bug (#136567) 表明 Telegram 集成需要加固。

4. **Desktop 应用需打磨**：多个 UI/UX 问题 — 悬停卡片定位、HUD 模式渲染、从 Word 处理剪贴板。

5. **依赖管理摩擦**：`hermes doctor` 报告的 npm 漏洞无法自动修复；Docker venv 同步问题持续存在。

## 待办关注

**需要维护者关注的 issue（陈旧或严重）：**

| Issue | 时长 | 状态 | 问题 |
|-------|-----|--------|---------|
| [#48523](https://github.com/NousResearch/hermes-agent/issues/48523) | 约 4 个月 | Open | convert_messages 元数据剥离—导致 provider 400 |
| [#72280](https://github.com/NousResearch/hermes-agent/issues/72280) | 约 3 个月 | Open | 共享会话重启假消息检测 |
| [#63248](https://github.com/NousResearch/hermes-agent/issues/63248) | 约 3 个月 | Open | Kanban check_respawn_guard 在 auth/quota 关键词上误触发 |
| [#121796](https://github.com/NousResearch/hermes-agent/issues/121796) | 约 3 周 | Open | xAI grok-4.7 reasoning.effort 被静默忽略（允许列表过时）|
| [#119302](https://github.com/NousResearch/hermes-agent/issues/119302) | 约 3 周 | Open | hermes skills install 错误信息令人困惑 |

---

*摘要基于 2026-10-15 的 GitHub 数据生成。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw Project Digest into Chinese. I need to:
1. Translate all headings, body text, and list items
2. Keep all Markdown structure (tables, lists, headings, code blocks, etc.)
3. Keep URLs, issue numbers, version tags, file paths, and technical identifiers as-is
4. Use natural technical Chinese - not literal word-for-word

Let me go through and translate this carefully while preserving the format.

Key things to preserve:
- Markdown structure (##, ###, tables, lists, horizontal rules)
- Issue/PR numbers and links
- URLs
- Version tags (v2.2.2-beta.5, etc.)
- Code formatting
- Table structure including alignment rows

Let me translate:</think>

# QwenPaw 项目简报 — 2026-10-15

## 今日概览

QwenPaw 今日**开发活跃度高**，过去 24 小时内有 34 个 PR 更新，并连续发布两个 beta 版本（v2.2.2-beta.5 和 beta.6）。项目正在积极修复稳定性问题——本迭代修复了多个与 cron 任务取消、消息导航和控制台 UI 选择器相关的 bug。社区参与度高，共提交 13 个 issue，包括新增模型提供商接入和智能体 harness 生态的功能请求。

---

## 版本发布

### v2.2.2-beta.6
**发布日期：** 2026-10-14

**变更：**
- **修复（E2E）：** 适配当前控制台 UI 的选择器（[#8247](https://github.com/agentscope-ai/QwenPaw/pull/8247)）
- **修复（History）：** 支持外部数据库路径和便携式备份（[#8246](https://github.com/agentscope-ai/QwenPaw/pull/8246)）
- **维护：** 版本号更新

### v2.2.2-beta.5
**发布日期：** 2026-10-14

**变更：**
- **修复（Console）：** 粘贴长文本时保留草稿内容（[#8119](https://github.com/agentscope-ai/QwenPaw/pull/8119)）
- **修复（Providers）：** 识别新版 GPT token 上限参数（[#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090)）
- **修复（Console）：** 控制台优化

**迁移说明：** 无破坏性变更。使用 beta.4 及更早版本的用户应升级以解决 [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) 中报告的页面加载失败问题。

---

## 项目进展

### 今日合并/关闭的 PR（共 10 个）

| PR | 标题 | 状态 |
|----|------|------|
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | fix(runtime): keep timeout tool results recoverable | 已合并 |
| [#8247](https://github.com/agentscope-ai/QwenPaw/pull/8247) | fix(e2e): align selectors with current console ui | 已合并 |
| [#8246](https://github.com/agentscope-ai/QwenPaw/pull/8246) | fix(history): support external database paths and portable backups | 已合并 |
| [#8250](https://github.com/agentscope-ai/QwenPaw/pull/8250) | chore: bump version to 2.2.2b6 | 已合并 |
| [#4577](https://github.com/agentscope-ai/QwenPaw/pull/4577) | feat(cli): support json and configured-only for models list | 已关闭 |
| [#8132](https://github.com/agentscope-ai/QwenPaw/pull/8132) | feat: add release evaluation workflows and QwenPaw Index | 已关闭 |

### 重点进展

- **超时工具结果可恢复：** PR [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) 确保超时工具的结果仍可恢复，提升智能体健壮性
- **历史数据便携备份：** PR [#8246](https://github.com/agentscope-ai/QwenPaw/pull/8246) 新增外部数据库路径支持，实现便携式备份
- **模型管理界面重构：** PR [#8240](https://github.com/agentscope-ai/QwenPaw/pull/8240) 重构控制台模型管理界面，优化分层导航和作用域管理
- **插件热重载优化：** PR [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) 引入安全的插件卸载和可回滚的热重载机制

---

## 社区热点

### 最活跃的 Issue（按评论数排序）

1. **[#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)** — **[已关闭]** Bug：页面频繁加载失败
   - **评论数：** 7 | **作者：** henryliuwork
   - **状态：** 已在 v2.2.2-beta.5/6 中修复
   - **分析：** 多名用户在 v2.2.2b4 版本的不同设备上遇到间歇性「页面加载失败」错误——可能涉及控制台的竞态条件或网络超时问题

2. **[#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174)** — **[开放]** 增强：内置 Tavily 提供商需支持 API Key 配置
   - **评论数：** 4 | **作者：** kidding1412
   - **分析：** 付费用户无法使用自己的配额；该提供商目前仅支持无密钥的匿名访问。PR [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) 已在处理此问题。

3. **[#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)** — **[开放]** 问题：Claude Code 作为第三方智能体 harness 的规划？
   - **评论数：** 3 | **作者：** jamie9797
   - **分析：** 社区对 Claude Code 集成翘首以盼。Codex 和 Qoder 已支持；Claude Code 自 v2.2.0 起标注为「即将推出」。这是希望使用 Anthropic 模型通过 QwenPaw 调用的用户高度期待的功能。

4. **[#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252)** — **[开放]** Bug：智能体间调用被静默取消（CancelledError）
   - **评论数：** 2 | **严重程度：** 高
   - **分析：** 多智能体集群（Orchestrator/Reasoner/Executor/Reviewer/Defender）出现静默调用取消，无发起方或原因日志——这在生产部署中至关重要

---

## Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 描述 | 修复 PR？ |
|----------|-------|------|----------|
| **高** | [#8252](https://github.com/agentscope-ai/QwenPaw/issues/8252) | 智能体间调用被静默取消，报 CancelledError | 否 |
| **高** | [#8225](https://github.com/agentscope-ai/QwenPaw/issues/8225) | 零停机热重载取消正在运行的 cron 任务，标记为「已取消」且无用户通知 | 否 |
| **中** | [#8251](https://github.com/agentscope-ai/QwenPaw/issues/8251) | 消息导航目录仅按条目数分配位置；跳转定位不准确 | PR [#8214](https://github.com/agentscope-ai/QwenPaw/pull/8214) 部分修复 |
| **中** | [#8249](https://github.com/agentscope-ai/QwenPaw/issues/8249) | Cron 任务修改显示错误的默认时间（00:00），「请求内容」显示 `[object Object]` | 否 |
| **中** | [#8254](https://github.com/agentscope-ai/QwenPaw/issues/8254) | 设置中心忽略内置条目的公开菜单可见性覆盖 | PR [#8257](https://github.com/agentscope-ai/QwenPaw/pull/8257) |
| **低** | [#8229](https://github.com/agentscope-ai/QwenPaw/pull/8229) | 提供聊天历史时截断超大的工具输出（>10MB base64 载荷） | 审核中 |

---

## 功能请求与路线图信号

### 今日新增功能请求

1. **[#8233](https://github.com/agentscope-ai/QwenPaw/issues/8233)** — 添加 **CommandCode** 和 **Hugging Face** 内置提供商预设
   - 目前用户需将这些添加为自定义提供商；请求官方图标和预设
   - **纳入下个版本的可能性：** 高（属于简单的提供商扩展）

2. **[#8259](https://github.com/agentscope-ai/QwenPaw/pull/8259)** — 添加结构化人工介入问题工具
   - 支持智能体暂停并收集人类的结构化答案
   - **状态：** 开放 PR，首次贡献者

3. **[#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224)** — 实验性 Python Code Mode
   - 将 Code Mode 重构为 Python 工具编排界面，使用 `run_code` 工具
   - **状态：** 积极开发中

4. **[#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205)** — 添加 TypeSafe 决策模型配置
   - 将 TypeSafe/JEV 添加为可配置的决策模型提供商

### 路线图信号
- **Claude Code 集成**（#7396）仍是最受期待的第三方 harness 功能
- **提供商扩展**（CommandCode、Hugging Face）表明对更多 LLM 后端的需求
- **评估基础设施** — PR [#8132](https://github.com/agentscope-ai/QwenPaw/pull/8132) 和 [#8253](https://github.com/agentscope-ai/QwenPaw/pull/8253) 表明 v2.2.2+ 正在构建正式的基准测试/索引系统

---

## 用户反馈摘要

### 痛点识别

1. **页面加载失败** — v2.2.2b4 用户在多设备上频繁报告「页面加载失败」错误。**状态：** 已在 beta.5/6 修复。

2. **Cron 任务静默取消** — 保存智能体配置（如心跳设置）会触发热重载，取消正在运行的 cron 任务且无用户通知。用户丢失任务进度却找不到任何线索。

3. **Tavily API Key 不支持** — 付费用户无法使用自己的配额；被迫使用匿名无密钥模式，受速率限制。

4. **Hub Mode 文档缺失** — 用户在文档中找不到 Hub Mode 的 Docker 启动方式。

### 积极信号
- 历史数据库路径灵活性（外部路径、便携备份）受到好评
- 模型管理和 HTML 预览恢复的控制台改进解决了长期的用户体验痛点
- 插件热重载改进（安全卸载 + 回滚保障）是显著的稳定性提升

---

## 待办关注

### 长期未答复的重要 Issue

| Issue | 存在时间 | 状态 | 关注点 |
|-------|----------|------|--------|
| [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396) — Claude Code harness 路线图 | 约 2 个月（2026-08-28） | 开放 | 自 8 月起无官方回应；社区正在询问时间表 |
| [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) — Tavily API Key | 4 天 | 开放 | 已有 PR #8204 审核中；需优先合并 |

### 需要维护者关注的 PR

| PR | 标题 | 状态 | 关注点 |
|----|------|------|----------|
| [#8259](https://github.com/agentscope-ai/QwenPaw/pull/8259) | feat(tools): add structured human-in-the-loop questions | 开放 | 首次贡献者；需审核 |
| [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) | feat(tools): optional Tavily API key via credential store | 审核中 | 阻塞 issue #8174 |
| [#8224](https://github.com/agentscope-ai/QwenPaw/pull/8224) | feat: add experimental Python Code Mode | 开放 | 大型 PR（XXL）；重要功能新增 |
| [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) | feat(channels): extract channels into plugins with subprocess isolation | 开放 | XXXL 规模；架构变更 |

---

*基于 GitHub 数据生成 — 2026-10-15*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this GitHub project digest into Chinese, following specific rules about preservation of technical terms, markdown structure, and using natural technical Chinese register.

Let me analyze the content and translate it appropriately:

1. The digest is about ZeroClaw project activities
2. It has multiple sections with headings, tables, lists
3. I need to preserve URLs, issue numbers, code references
4. Use natural technical Chinese - the register of a Chinese developer newsletter
5. Keep markdown structure exactly as is

Let me translate section by section:

## 1. Today's Overview

## 2. Project Progress - should be 项目进展

## 3. Community Hot Topics - 社区热点

## 4. Bugs & Stability - Bug 与稳定性

## 5. Feature Requests & Roadmap Signals - 功能需求与路线图信号

## 6. User Feedback Summary - 用户反馈概要

## 7. Backlog Watch - 待办关注

Let me translate each part carefully:

---

# ZeroClaw 项目摘要 — 2026-10-15

## 1. 今日概览

过去24小时内，ZeroClaw 项目保持高活跃度，共更新了 **28 个 Issue** 和 **50 个 Pull Request**。项目表现出强劲的发展势头：9 个 Issue 已关闭，4 个 PR 已合并/关闭，显示出积极的解决流程。值得注意的是，今天没有发布新版本，但多个重要的 PR 已推进至 v0.8.6 和 v0.9.0 里程碑。邮件通道收到了大量工作（4 个 PR），同时多个影响 ZeroCode TUI 的稳定性 Bug 也得到了解决。

邮件通道主导了今天的工作——4 个 PR 涵盖 TLS CA 支持、自动回复防护、STARTTLS 和附件处理。新 RFC（#11254）和子代理路由 PR（#11577）则表明多代理场景的架构正在演进。关键的 Bug 包括 #11420 的 SQLite 重写、#11481 的 CPU 满载，以及 #11618 的消息丢弃问题。

---

## 2. 今日无版本发布。

---

## 3. 项目进展

### 今日合并/关闭的 Pull Request（共 4 个）

| PR | 标题 | 状态 |
|----|-------|------|
| — | *4 个 PR 已合并/关闭；具体 ID 未在数据中提供* | 已合并/关闭 |

### 今日关闭的 Issue 回顾

- **#5808** [功能：延迟加载内置工具 Schema 以降低固定提示词下限](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — **已关闭** — 高优先级（P2），S1 工作流阻塞器。延迟内置工具 Schema 加载以减少代理循环中的上下文开销。

- **#10225** [Bug：ZeroCode RPC 会话无法通过通道后端工具连接到配置的通道](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) — **已关闭** — P1，高风险。修复了 ZeroCode RPC 会话的通道连接问题。

- **#10643** [修复（runtime）：对有限子循环工具实施fail-closed审批强制](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) — **已关闭** — P1，高风险。修复了子委托中工具审批继承的安全问题。

- **#11724** [功能（zerocode）：让每窗格会话上限可配置](https://github.com/zeroclaw-labs/zeroclaw/issues/11724) — **已关闭** — ZeroCode 增强功能，允许运维人员配置 8 个会话的每窗格限制。

- **#10349** [Bug：SOP 窗格加载阻塞 ZeroCode 导航](https://github.com/zeroclaw-labs/zeroclaw/issues/10349) — **已关闭** — 修复了同步 SOP 加载阻塞 TUI 输入的问题。

- **#11694** [Bug：ZeroCode 费用标签页混淆 UTC 和本地日期总计](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) — **已关闭** — 修复了费用报告中的时区混淆问题。

- **#11481** [Bug：终端断开后 ZeroCode CPU 满载 100%](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) — **已关闭** — P1 稳定性修复，解决断开后的热循环行为。

- **#11618** [Bug：当守护进程因 SESSION_BUSY 拒绝时 ZeroCode 丢弃排队的消息](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) — **已关闭** — 修复了会话竞争下的静默消息丢失问题。

- **#11179** [Bug：测试不稳定 – sop::engine pending_park_retry_respects_pending_pool_cap](https://github.com/zeroclaw-labs/zeroclaw/issues/11179) — **已关闭** — 修复了跨越秒边界的测试可靠性问题。

---

## 4. 社区热点

### 活跃度最高的 Issue（按评论数排序）

1. **#5808** — [功能：延迟加载内置工具 Schema](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — **10 条评论**
   - *核心需求*：降低上下文令牌开销；默认 32K 预算在首次 LLM 调用时超出 3.3 倍。对大型工具 Schema 的生产部署影响重大。

2. **#11254** — [RFC：引入 A2A 协议库（zeroclaw-a2a）](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) — **10 条评论**
   - *核心需求*：代理到代理协议的跨领域架构。解决先前工作建立的互操作和发现问题（#9106、#7763、#8274）。

3. **#11420** — [Bug：SQLite 会话重写 created_at](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — **9 条评论**
   - *核心需求*：保留会话记录中每条消息的时间戳。影响审计追踪和对话历史准确性。

4. **#7432** — [追踪：Runtime 和 Gateway 的 v0.8.6 及 v0.9.0 交付](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — **6 条评论**
   - *核心需求*：提高 runtime-gateway 分离的交付进度可见性。

5. **#10419** — [功能：通过 POST /webhook 流式传输代理循环令牌（SSE）](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) — **5 条评论**
   - *核心需求*：为基于 webhook 的工作器实现实时令牌流；改善 Path A 集成的用户体验。

### 引发讨论的活跃 PR

| PR | 标题 | 关注领域 |
|----|-------|------------|
| **#11752** | [功能（通道/邮件）：为 IMAP 和 SMTP 信任额外的 CA](https://github.com/zeroclaw-labs/zeroclaw/pull/11752) | 邮件通道 TLS |
| **#11748** | [功能（通道/邮件）：通过 STARTTLS 发送 SMTP](https://github.com/zeroclaw-labs/zeroclaw/pull/11748) | Office 365 支持 |
| **#11750** | [修复（通道/邮件）：不回复自动邮件](https://github.com/zeroclaw-labs/zeroclaw/pull/11750) | 邮件循环防护 |
| **#11746** | [修复（通道/邮件）：保存入站文档](https://github.com/zeroclaw-labs/zeroclaw/pull/11746) | 附件存储 |
| **#11577** | [功能（runtime）：在运维声明的模型路由上运行子代理](https://github.com/zeroclaw-labs/zeroclaw/pull/11577) | 子代理路由 |
| **#11744** | [功能（通道）：在 Telegram 和 Slack 中流式传输模型推理](https://github.com/zeroclaw-labs/zeroclaw/pull/11744) | 多通道用户体验 |

*分析*：邮件通道的改进主导了今天的活动——4 个 PR 解决了 TLS/STARTTLS、自动回复循环和附件处理问题。这表明该功能正在向生产就绪状态推进。RFC（#11254）和子代理路由 PR（#11577）则预示着多代理场景的架构正在演进。

---

## 5. Bug 与稳定性

### 按严重程度排序的待处理 Bug

| Issue | 标题 | 严重程度 | 状态 |
|-------|-------|----------|------|
| **#11420** | [SQLite 会话重写 created_at](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | P1 / S2 | 待处理 |
| **#11708** | [model_routing_config 缺少特定操作的必需参数](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) | P2 / S2 | 待处理 |
| **#11709** | [升级的套接字在 gateway 重载后仍然存在](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) | — | 待处理 |
| **#11711** | [修剪对话时删除早期轮次](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2 | 待处理 |
| **#11706** | [max_image_turns 从不释放视觉路由](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | S2 | 待处理 |
| **#11749** | [邮件通道回复自动邮件](https://github.com/zeroclaw-labs/zeroclaw/issues/11749) | S2 | 待处理 |
| **#11745** | [邮件通道不存储入站附件](https://github.com/zeroclaw-labs/zeroclaw/issues/11745) | S2 | 待处理 |

### 已解决的稳定性问题（今日）

- ✅ **#11481** — 终端断开后 ZeroCode CPU 满载（P1）
- ✅ **#11618** — SESSION_BUSY 时 ZeroCode 丢弃排队消息（P1）
- ✅ **#11694** — 费用标签页时区混淆（P2）
- ✅ **#10349** — SOP 窗格阻塞导航（P2）
- ✅ **#11179** — pending pool 测试不稳定

*评估*：稳定性进展良好。今天关闭了 5 个 P1/P2 Bug。剩余的待处理 Bug 大多为 S2（降级行为），集中在邮件通道和会话管理领域。

---

## 6. 功能需求与路线图信号

### 新功能 Issue

| Issue | 标题 | 领域 |
|-------|-------|------|
| **#11751** | [邮件通道：信任额外的 CA（tls_ca_cert_path）](https://github.com/zeroclaw-labs/zeroclaw/issues/11751) | 通道 |
| **#11747** | [邮件通道：通过 STARTTLS 发送 SMTP](https://github.com/zeroclaw-labs/zeroclaw/issues/11747) | 通道 |
| **#11743** | [在 Telegram 和 Slack 中显示模型推理](https://github.com/zeroclaw-labs/zeroclaw/issues/11743) | 通道 |
| **#10665** | [让 ZeroCode 的每窗格会话限制可配置](https://github.com/zeroclaw-labs/zeroclaw/issues/10665) | TUI |
| **#10419** | [通过 POST /webhook 流式传输代理循环令牌（SSE）](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | Runtime |
| **#10400** | [Telegram 未授权发送者通知，支持通道感知](https://github.com/zeroclaw-labs/zeroclaw/issues/10400) | 通道 |

### RFC 与架构提案

| Issue | 标题 | 类型 |
|-------|-------|------|
| **#11254** | [RFC：A2A 协议库（zeroclaw-a2a）](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | 架构 RFC |
| **#11735** | [RFC：在轮次边界限制工具和委托结果](https://github.com/zeroclaw-labs/zeroclaw/issues/11735) | 架构 RFC |

*路线图信号*：邮件通道明显接近成熟——今天的 4 个 PR 涵盖了 TLS、附件和邮件循环防护。预计 v0.9.0 将包含这些功能。A2A RFC（#11254）表明 v0.x 将扩展协议互操作。限制工具结果 RFC（#11735）解决了 #5808 修复所暴露的上下文增长问题。

---

## 7. 用户反馈概要

### 从 Issue 中识别出的痛点

1. **上下文预算超限**（#5808）—— 用户首次调用时超出 3.3 倍预算；默认 32K 配置下生产环境无法使用。
2. **每条消息的时间戳丢失**（#11420）—— 用户无法准确审计对话历史；时间戳重写是数据完整性问题。
3. **终端断开导致 CPU 满载**（#11481）—— 关键可用性问题；用户返回机器时发现 TUI 无响应且 CPU 占用 100%。
4. **竞争下的消息丢弃**（#11618）—— 静默数据丢失；用户输入丢失且无任何反馈。
5. **邮件自动回复循环**（#11749）—— 生产邮件配置存在无限退信循环风险。
6. **附件未持久化**（#11745）—— 与文档不符；用户期望获得文件引用却一无所获。

### 满意度指标

- 可配置会话上限（#11724/#10665）—— 社区请求的灵活性现已实现。
- Telegram/Slack 推理流（#11744、#11743）—— 与 Matrix 功能对齐；改善实时用户体验。
- 子代理模型路由（#11577）—— 支持复杂的多模型工作流。

---

## 8. 待办关注

### 缺乏维护者关注的 Issue

| Issue | 标题 | 存在时间 | 状态 | 问题 |
|-------|-------|----------|------|------|
| **#9734** | [zerocode：重新连接时延迟后台会话重新水合](https://github.com/zeroclaw-labs/zeroclaw/issues/9734) | 2026-08-04 | 待处理（停车区） | 急切的水合阻塞重新连接；自 8 月以来停滞 |
| **#10665** | [功能：让 ZeroCode 的每窗格会话限制可配置](https://github.com/zeroclaw-labs/zeroclaw/issues/10665) | 2026-09-06 | 待处理（停车区） | 伴随 #11724；待配置 Schema 工作 |

### 需要关注的追踪 Issue

- **#7432** — Runtime/Gateway v0.8.6 和 v0.9.0 追踪器；Gateway 分离里程碑的关键路径
- **#11425** — Windows 文件替换和路径处理批次；10 个相互依赖的 PR
- **#11254** — A2A 协议 RFC；待决的跨领域架构决策

*注*：多个 Issue 标记为"停车区"，表示推迟处理。会话水合问题（#9734）自 8 月初开放至今没有进展，尽管对重新连接的延迟影响明显。

---

*本摘录基于 2026-10-15 的 GitHub 数据生成。所有链接指向 zeroclaw-labs/zeroclaw 仓库。*

---

Translation rules applied:
- Maintained all issue numbers (#5808, #11254, etc.) and URLs exactly as-is
- Kept PR titles in Chinese translation while preserving original formatting
- Used natural technical Chinese register (开发者 newsletter style)
- Preserved all Markdown structure (tables, headings, lists, bold, horizontal rules)
- Kept technical terms like "runtime", "gateway", "SSE", "STARTTLS", "TLS" in their original form or commonly used Chinese equivalents
- Converted severity ratings P1/P2/S1/S2 to Chinese equivalents but kept the codes
- Used Chinese punctuation consistently (，。：；""）
- Maintained table alignment formatting</think>

# ZeroClaw 项目摘要 — 2026-10-15

## 1. 今日概览

过去 24 小时内，ZeroClaw 项目保持高活跃度，共更新了 **28 个 Issue** 和 **50 个 Pull Request**。项目表现出强劲的发展势头：9 个 Issue 已关闭，4 个 PR 已合并/关闭，显示出积极的解决流程。值得注意的是，今天没有发布新版本，但多个重要的 PR 已推进至 v0.8.6 和 v0.9.0 里程碑。邮件通道收到了大量工作（4 个 PR），同时多个影响 ZeroCode TUI 的稳定性 Bug 也得到了解决。社区参与依然活跃，RFC 和功能提案在代理循环优化和协议扩展方面引发了讨论。

---

## 2. 发布

今天无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的 Pull Request（4 个）

| PR | 标题 | 状态 |
|----|-------|------|
| — | *4 个 PR 已合并/关闭；具体 ID 未在数据中提供* | 已合并/关闭 |

### 今日关闭的 Issue

- **#5808** [功能：延迟加载内置工具 Schema 以降低固定提示词下限](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — **已关闭** — 高优先级（P2），S1 工作流阻塞器。延迟内置工具 Schema 加载以减少代理循环中的上下文开销。

- **#10225** [Bug：ZeroCode RPC 会话无法通过通道后端工具连接到配置的通道](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) — **已关闭** — P1，高风险。修复了 ZeroCode RPC 会话的通道连接问题。

- **#10643** [修复（runtime）：对有限子循环工具实施 fail-closed 审批强制](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) — **已关闭** — P1，高风险。修复了子委托中工具审批继承的安全问题。

- **#11724** [功能（zerocode）：让每窗格会话上限可配置](https://github.com/zeroclaw-labs/zeroclaw/issues/11724) — **已关闭** — ZeroCode 增强功能，允许运维人员配置 8 会话的每窗格限制。

- **#10349** [Bug：SOP 窗格加载阻塞 ZeroCode 导航](https://github.com/zeroclaw-labs/zeroclaw/issues/10349) — **已关闭** — 修复了同步 SOP 加载阻塞 TUI 输入的问题。

- **#11694** [Bug：ZeroCode 费用标签页混淆 UTC 和本地日期总计](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) — **已关闭** — 修复了费用报告中的时区混淆问题。

- **#11481** [Bug：终端断开后 ZeroCode CPU 满载 100%](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) — **已关闭** — P1 稳定性修复，解决断开后的热循环行为。

- **#11618** [Bug：当守护进程因 SESSION_BUSY 拒绝时 ZeroCode 丢弃排队的消息](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) — **已关闭** — 修复了会话竞争下的静默消息丢失问题。

- **#11179** [Bug：测试不稳定 – sop::engine pending_park_retry_respects_pending_pool_cap](https://github.com/zeroclaw-labs/zeroclaw/issues/11179) — **已关闭** — 修复了跨越秒边界的测试可靠性问题。

---

## 4. 社区热点

### 活跃度最高的 Issue（按评论数排序）

1. **#5808** — [功能：延迟加载内置工具 Schema](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) — **10 条评论**
   - *核心需求*：降低上下文令牌开销；默认 32K 预算在首次 LLM 调用时超出 3.3 倍。对大型工具 Schema 的生产部署影响重大。

2. **#11254** — [RFC：A2A 协议库（zeroclaw-a2a）](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) — **10 条评论**
   - *核心需求*：代理到代理协议的跨领域架构。解决先前工作建立的互操作和发现问题（#9106、#7763、#8274）。

3. **#11420** — [Bug：SQLite 会话重写 created_at](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — **9 条评论**
   - *核心需求*：保留会话记录中每条消息的时间戳。影响审计追踪和对话历史准确性。

4. **#7432** — [追踪：Runtime 和 Gateway 的 v0.8.6 及 v0.9.0 交付](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — **6 条评论**
   - *核心需求*：提高 runtime-gateway 分离的交付进度可见性。

5. **#10419** — [功能：通过 POST /webhook 流式传输代理循环令牌（SSE）](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) — **5 条评论**
   - *核心需求*：为基于 webhook 的工作器实现实时令牌流；改善 Path A 集成的用户体验。

### 引发讨论的活跃 PR

| PR | 标题 | 关注领域 |
|----|-------|------------|
| **#11752** | [功能（通道/邮件）：为 IMAP 和 SMTP 信任额外的 CA](https://github.com/zeroclaw-labs/zeroclaw/pull/11752) | 邮件通道 TLS |
| **#11748** | [功能（通道/邮件）：通过 STARTTLS 发送 SMTP](https://github.com/zeroclaw-labs/zeroclaw/pull/11748) | Office 365 支持 |
| **#11750** | [修复（通道/邮件）：不回复自动邮件](https://github.com/zeroclaw-labs/zeroclaw/pull/11750) | 邮件循环防护 |
| **#11746** | [修复（通道/邮件）：保存入站文档](https://github.com/zeroclaw-labs/zeroclaw/pull/11746) | 附件存储 |
| **#11577** | [功能（runtime）：在运维声明的模型路由上运行子代理](https://github.com/zeroclaw-labs/zeroclaw/pull/11577) | 子代理路由 |
| **#11744** | [功能（通道）：在 Telegram 和 Slack 中流式传输模型推理](https://github.com/zeroclaw-labs/zeroclaw/pull/11744) | 多通道用户体验 |

*分析*：邮件通道的改进主导了今天的活动——4 个 PR 涵盖了 TLS/STARTTLS、自动回复循环和附件处理。这表明该功能正在向生产就绪状态推进。RFC（#11254）和子代理路由 PR（#11577）表明多代理场景的架构正在演进。

---

## 5. Bug 与稳定性

### 待处理 Bug（按严重程度排序）

| Issue | 标题 | 严重程度 | 状态 |
|-------|-------|----------|------|
| **#11420** | [SQLite 会话重写 created_at](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | P1 / S2 | 待处理 |
| **#11708** | [model_routing_config 遗漏特定操作的必填参数](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) | P2 / S2 | 待处理 |
| **#11709** | [升级的套接字在 gateway 重载后仍然存活](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) | — | 待处理 |
| **#11711** | [修剪对话时删除早期轮次](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | S2 | 待处理 |
| **#11706** | [max_image_turns 从不释放视觉路由](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | S2 | 待处理 |
| **#11749** | [邮件通道回复自动邮件](https://github.com/zeroclaw-labs/zeroclaw/issues/11749) | S2 | 待处理 |
| **#11745** | [邮件通道不存储入站附件](https://github.com/zeroclaw-labs/zeroclaw/issues/11745) | S2 | 待处理 |

### 已解决的稳定性问题（今日）

- ✅ **#11481** — 终端断开后 ZeroCode CPU 满载（P1）
- ✅ **#11618** — SESSION_BUSY 时 ZeroCode 丢弃排队消息（P1）
- ✅ **#11694** — 费用标签页时区混淆（P2）
- ✅ **#10349** — SOP 窗格阻塞导航（P2）
- ✅ **#11179** — pending pool 测试不稳定

*评估*：稳定性进展良好。今天关闭了 5 个 P1/P2 Bug。剩余待处理 Bug 大多为 S2（降级行为），集中在邮件通道和会话管理领域。

---

## 6. 功能需求与路线图信号

### 新功能 Issue

| Issue | 标题 | 领域 |
|-------|-------|------|
| **#11751** | [邮件通道：信任额外的 CA（tls_ca_cert_path）](https://github.com/zeroclaw-labs/zeroclaw/issues/11751) | 通道 |
| **#11747** | [邮件通道：通过 STARTTLS 发送 SMTP](https://github.com/zeroclaw-labs/zeroclaw/issues/11747) | 通道 |
| **#11743** | [在 Telegram 和 Slack 中显示模型推理](https://github.com/zeroclaw-labs/zeroclaw/issues/11743) | 通道 |
| **#10665** | [让 ZeroCode 的每窗格会话限制可配置](https://github.com/zeroclaw-labs/zeroclaw/issues/10665) | TUI |
| **#10419** | [通过 POST /webhook 流式传输代理循环令牌（SSE）](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | Runtime |
| **#10400** | [Telegram 未授权发送者通知，支持通道感知](https://github.com/zeroclaw-labs/zeroclaw/issues/10400) | 通道 |

### RFC 与架构提案

| Issue | 标题 | 类型 |
|-------|-------|------|
| **#11254** | [RFC：A2A 协议库（zeroclaw-a2a）](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | 架构 RFC |
| **#11735** | [RFC：在轮次边界限制工具和委托结果](https://github.com/zeroclaw-labs/zeroclaw/issues/11735) | 架构 RFC |

*路线图信号*：邮件通道明显接近成熟——今天的 4 个 PR 涵盖了 TLS、附件和邮件循环防护。预计 v0.9.0 将包含这些功能。A2A RFC（#11254）表明 v0.9.x 将扩展协议互操作。限制工具结果 RFC（#11735）解决了 #5808 修复所暴露的上下文增长问题。

---

## 7. 用户反馈概要

### 从 Issue 中识别的痛点

1. **上下文预算超限**（#5808）—— 用户首次调用时超出 3.3 倍预算；默认 32K 配置下生产环境无法使用。
2. **每条消息的时间戳丢失**（#11420）—— 用户无法准确审计对话历史；时间戳重写是数据完整性问题。
3. **终端断开导致 CPU 满载**（#11481）—— 关键可用性问题；用户返回机器时发现 TUI 无响应且 CPU 占用 100%。
4. **竞争下的消息丢弃**（#11618）—— 静默数据丢失；用户输入丢失且无任何反馈。
5. **邮件自动回复循环**（#11749）—— 生产邮件配置存在无限退信循环风险。
6. **附件未持久化**（#11745）—— 与文档不符；用户期望获得文件引用却一无所获。

### 满意度指标

- 可配置会话上限（#11724/#10665）—— 社区请求的灵活性现已实现。
- Telegram/Slack 推理流（#11744、#11743）—— 与 Matrix 功能对齐；改善实时用户体验。
- 子代理模型路由（#11577）—— 支持复杂的多模型工作流。

---

## 8. 待办关注

### 缺乏维护者关注的 Issue

| Issue | 标题 | 存在时间 | 状态 | 问题 |
|-------|-------|----------|------|------|
| **#9734** | [zerocode：重新连接时延迟后台会话重新水合](https://github.com/zeroclaw-labs/zeroclaw/issues/9734) | 2026-08-04 | 待处理（停车区） | 急切的水合阻塞重新连接；自 8 月以来停滞 |
| **#10665** | [功能：让 ZeroCode 的每窗格会话限制可配置](https://github.com/zeroclaw-labs/zeroclaw/issues/10665) | 2026-09-06 | 待处理（停车区） | 伴随 #11724；待配置 Schema 工作 |

### 需要关注的追踪 Issue

- **#7432** — Runtime/Gateway v0.8.6 和 v0.9.0 追踪器；Gateway 分离里程碑的关键路径
- **#11425** — Windows 文件替换和路径处理批次；10 个相互依赖的 PR
- **#11254** — A2A 协议 RFC；待决的跨领域架构决策

*注*：多个 Issue 标记为"停车区"，表示推迟考虑。会话水合问题（#9734）自 8 月初开放至今没有进展，尽管对重新连接的延迟影响明显。

---

*本摘要基于 2026-10-15 的 GitHub 数据生成。所有链接指向 zeroclaw-labs/zeroclaw 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*