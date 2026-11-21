# OpenClaw 生态日报 2026-11-21

> Issues: 339 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-21 03:24 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate an English technical report (a project digest) into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references, usernames, version tags, etc. as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

Title: "OpenClaw Project Digest — 2026-11-21" → "OpenClaw 项目摘要 — 2026-11-21"

Section 1: Today's Overview
- High activity → 高活跃度
- no new releases → 无新版本发布
- stability concerns → 稳定性问题
- P0/P1 bugs trending → 多条 P0/P1 级别缺陷正在发酵
- Gateway blocking → Gateway 阻塞
- update validation → 更新验证
- maintenance livelocks → 维护死循环
- Community engagement remains strong → 社区参与度保持高涨
- top issue → 热度最高的问题

Let me translate carefully throughout.
</think>


# OpenClaw 项目摘要 — 2026-11-21

---

## 1. 今日概览

OpenClaw 过去 24 小时保持高度活跃，共有 339 条 issue 和 500 条 PR 更新，但**今日未发布新版本**。项目正积极应对稳定性问题——多条 P0/P1 级别缺陷正在围绕 Gateway 阻塞、更新验证和维护死循环等问题发酵。社区参与度保持高涨，热度最高的问题（#160959）已累计 84 条评论，用户反映在捕获大型插件时 Gateway 事件循环陷入分钟级卡顿。多个 Windows 和 macOS 平台问题也在持续受到关注，表明随着 2026.11.x 版本的成熟，跨平台稳定性成为当前重点。

---

## 2. 版本发布

**今日无新版本发布。** 最新稳定版仍为 2026.11.3，beta 通道为 2026.11.5-beta.4。使用早期版本（如 2026.9.6、2026.10.x）的用户正在遭遇回归问题，或将促使团队发布紧急补丁版本。

---

## 3. 项目进展

### 已合并/关闭的 PR（过去 24 小时共 191 条）

| PR | 作者 | 重点 | 影响范围 |
|----|--------|-------|--------|
| [#202878](https://github.com/openclaw/openclaw/pull/202878) | obviyus | 保持有头 Chrome 模式下后台标签页的截图功能正常 | 浏览器扩展可靠性 |
| [#202897](https://github.com/openclaw/openclaw/pull/202897) | openclaw-mantis[bot] | 刷新 Control UI 本地化资源 | 国际化维护 |
| [#202896](https://github.com/openclaw/openclaw/pull/202896) | openclaw-mantis[bot] | 刷新原生应用本地化资源 | 国际化维护 |
| [#202865](https://github.com/openclaw/openclaw/pull/202865) | steipete | 在 `process.env` 替换后清除环境桩 | 测试可靠性 |
| [#202735](https://github.com/openclaw/openclaw/pull/202735) | hannesrudolph | 在验证 Git 更新前等待忙碌的 Gateway 重启完成 | 更新可靠性 |
| [#202831](https://github.com/openclaw/openclaw/pull/202831) | warm-cloth | 当 manifest 导致独立插件无法启动时报警告 | 插件系统清晰度 |

### 正在开发中的 PR（评审中的开放 PR）

- **[#202902](https://github.com/openclaw/openclaw/pull/202902)** — `fix: keep known MCP catalogs from delaying new chats` (steipete) — 解决新对话时 10 秒级目录发现延迟
- **[#148039](https://github.com/openclaw/openclaw/pull/148039)** — `fix(browser): cancel in-flight CDP commands after handshake` (sunlit-deng) — 解决浏览器关闭时挂起问题，评级为铂金 hermit
- **[#202800](https://github.com/openclaw/openclaw/pull/202800)** — `fix: explicitly restore removed conversation workspaces` (steipete) — 针对工作区恢复用户体验的超大 PR
- **[#200294](https://github.com/openclaw/openclaw/pull/200294)** — `feat(update): capture PostgreSQL stores while the Gateway serves` (etzelm) — 更新系统重大增强
- **[#202306](https://github.com/openclaw/openclaw/pull/202306)** — `feat: move a conversation that has no project into one` (daniel-lxs) — 对话/项目管理
- **[#202880](https://github.com/openclaw/openclaw/pull/202880)** — `feat: let WhatsApp users schedule OpenClaw tasks from a DM` (brandon-julio-t) — WhatsApp 集成扩展

---

## 4. 社区热点话题

### 互动最活跃的 Issue（按评论数）

| Issue | 标题 | 评论数 | 链接 |
|-------|-------|----------|------|
| #160959 | Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归） | **84** | [链接](https://github.com/openclaw/openclaw/issues/160959) |
| #191944 | macOS 上 gateway stop / stop --force 失败，报错"无法完整检查进程谱系" | **38** | [链接](https://github.com/openclaw/openclaw/issues/191944) |
| #197083 | 安装后 Doctor WAL 发布验证导致 11.3 更新处于半完成状态 | **31** | [链接](https://github.com/openclaw/openclaw/issues/197083) |
| #178359 | doctor --fix --non-interactive 在 macOS 上空闲 15+ 分钟无输出 | **31** | [链接](https://github.com/openclaw/openclaw/issues/178359) |
| #120385 | Code Mode 工具目录对 scheduled/cron 和 memory-flush turn 不完整 | **27** | [链接](https://github.com/openclaw/openclaw/issues/120385) |
| #182891 | 提示缓存从未被复用——每次请求"cache read dropped N -> 0" | **20** | [链接](https://github.com/openclaw/openclaw/issues/182891) |

### 深层需求分析

**Issue #160959（84 条评论）** 揭示了 2026.9.6 引入的严重回归问题：Gateway 事件循环在插件生成捕获期间阻塞数分钟，尤其是处理大型外部插件或工作区插件时。用户期望 Gateway 在插件操作期间保持响应。

**Issue #191944（38 条评论）** 凸显了 macOS 平台特有的进程谱系检查问题，在 gateway stop 操作期间失效。这表明需要更健壮的跨平台进程管理机制。

**Issues #197083 和 #178359** 均暴露了更新/维护可靠性问题——Doctor 工具和更新验证将系统留在半完成状态，表明关键操作期间状态管理脆弱。

**Issue #182891** 表明提示缓存在 OpenAI 兼容路由上效果不佳，第三方提供商可能存在兼容性问题，影响成本和性能。

---

## 5. Bug 与稳定性

### P0 — 严重（阻塞发布）

| Issue | 标题 | 状态 | 对应修复 PR？ |
|-------|-------|--------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟 | 开放 | 暂无 |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 安装后 Doctor WAL 发布验证导致 11.3 更新处于半完成状态 | 开放 | 暂无 |
| [#158277](https://github.com/openclaw/openclaw/issues/158277) | Watch 上的 Talk 报"Voice changed its remote network address"失败 | 开放 | 暂无 |

### P1 — 高优先级

| Issue | 标题 | 状态 | 对应修复 PR？ |
|-------|-------|--------|---------|
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | `doctor --fix --non-interactive` 在 macOS 上空闲 15+ 分钟无输出 | 开放 | 暂无 |
| [#200606](https://github.com/openclaw/openclaw/issues/200606) | 2026.11.5 candidate Doctor 因插件迁移冲突阻止更新 | 开放 | 暂无 |
| [#162914](https://github.com/openclaw/openclaw/issues/162914) | 间歇性"Aborted | sandbox_provisioning"失败（Podman） | 开放 | 暂无 |
| [#153899](https://github.com/openclaw/openclaw/issues/153899) | Gateway drain 等待完整 TimeoutStopSec | 开放 | 暂无 |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | Doctor/更新维护在 Gateway 停止时进入死循环 | 开放 | 暂无 |
| [#174681](https://github.com/openclaw/openclaw/issues/174681) | **回归**：插件准备阻塞 Gateway 主线程（发布分支上已回退 PR #172750） | 开放 | 暂无 |
| [#197515](https://github.com/openclaw/openclaw/issues/197515) | Codex "data/settings upgrade is unfinished" 在 2026.11.3 上持续存在 | 开放 | 暂无 |
| [#192524](https://github.com/openclaw/openclaw/issues/192524) | 2026.10.10 通过 auth 拒绝所有 scheduled agentTurn，报错"aws-sdk" provider | 开放 | 关联 PR 开放中 |
| [#202246](https://github.com/openclaw/openclaw/issues/202246) | 2026.11.6：目标延续提示在 Discord 中产生重复提醒消息 | 已关闭 | — |
| [#195279](https://github.com/openclaw/openclaw/issues/195279) | 后台 exec 完成唤醒失败，报"operator execution authority is no longer active" | 已关闭 | — |

### P2 — 中优先级（值得注意）

| Issue | 标题 | 平台 | 链接 |
|-------|-------|----------|------|
| [#191944](https://github.com/openclaw/openclaw/issues/191944) | macOS 上 gateway stop 失败 | macOS | [链接](https://github.com/openclaw/openclaw/issues/191944) |
| [#200756](https://github.com/openclaw/openclaw/issues/200756) | Windows beta.2 → beta.4 更新在 package-swap 阶段失败 | Windows | [链接](https://github.com/openclaw/openclaw/issues/200756) |
| [#200224](https://github.com/openclaw/openclaw/issues/200224) | 2026.11.5 beta 更新拒绝已停用的 agents.defaults.heartbeat | 跨平台 | [链接](https://github.com/openclaw/openclaw/issues/200224) |
| [#200781](https://github.com/openclaw/openclaw/issues/200781) | Control UI Sessions 侧边栏仅渲染 agent 头部 | 全平台 | [链接](https://github.com/openclaw/openclaw/issues/200781) |
| [#200610](https://github.com/openclaw/openclaw/issues/200610) | Windows 保留的更新程序运行时应超出 MAX_PATH | Windows | [链接](https://github.com/openclaw/openclaw/issues/200610) |
| [#201251](https://github.com/openclaw/openclaw/issues/201251) | 更新基线捕获遍历每个文件；数据库被复制 5 次（5409 秒） | Linux/WSL2 | [链接](https://github.com/openclaw/openclaw/issues/201251) |
| [#182891](https://github.com/openclaw/openclaw/issues/182891) | 提示缓存在 OpenAI 兼容路由上从未被复用 | 跨平台 | [链接](https://github.com/openclaw/openclaw/issues/182891) |
| [#198373](https://github.com/openclaw/openclaw/issues/198373) | 提示缓存：轮次间历史被重写，缓存读取降至约 1% | 跨平台 | [链接](https://github.com/openclaw/openclaw/issues/198373) |

**值得关注的回归问题**包括：插件准备阻塞（已在发布分支回退）、OpenAI 兼容提供商的提示缓存失效，以及多个 Windows 特定更新失败。

---

## 6. 功能请求与路线图信号

### 高互动功能请求

| Issue | 标题 | 评论数 | 优先级 | 链接 |
|-------|-------|----------|----------|------|
| [#131457](https://github.com/openclaw/openclaw/issues/131457) | 为飞书（Lark）频道添加进度流式传输模式 | 11 | P2 | [链接](https://github.com/openclaw/openclaw/issues/131457) |
| [#197297](https://github.com/openclaw/openclaw/issues/197297) | 用户级密钥保险库 | 9 | P2 | [链接](https://github.com/openclaw/openclaw/issues/197297) |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron 任务无法结束：缺少 --until / --max-runs | 10 | P3 | [链接](https://github.com/openclaw/openclaw/issues/130247) |
| [#187264](https://github.com/openclaw/openclaw/issues/187264) | 为非所有者频道请求提供调用方作用域的同对话调度能力 | 9 | P2 | [链接](https://github.com/openclaw/openclaw/issues/187264) |
| [#179685](https://github.com/openclaw/openclaw/issues/179685) | IMAP 持久化处理交接及可检查的每条消息结果 | 9 | P2 | [链接](https://github.com/openclaw/openclaw/issues/179685) |
| [#181791](https://github.com/openclaw/openclaw/issues/181791) | 安全的可中断恢复所需的持久化所有者原生执行溯源 | 7 | P3 | [链接](https://github.com/openclaw/openclaw/issues/181791) |
| [#181579](https://github.com/openclaw/openclaw/issues/181579) | 改进后续对话引用时进度叙述的准确性 | 7 | P3 | [链接](https://github.com/openclaw/openclaw/issues/181579) |

### 路线图信号分析

1. **多用户/多租户功能**正在获得关注：用户级密钥保险库（#197297）和调用方作用域调度（#187264）表明企业/多用户部署需求在增长。

2. **渠道扩展**：飞书/Lark 进度流式传输（#131457）与现有的 Slack/Discord/Telegram/MS Teams 支持保持一致，表明渠道功能对标是重点方向。

3. **可靠性增强**：IMAP 持久化交接（#179685）和中断恢复（#181791）指向自动化工作流的生产级加固需求。

4. **定时任务生命周期管理**（#130247）解决了一个长期存在的缺口——定时任务缺少结束条件。

---

## 7. 用户反馈摘要

### 痛点

**关键稳定性问题：**
- **Gateway 响应性** — 大型插件操作阻塞事件循环数分钟，破坏用户对 agent 始终可用的期望（#160959、#174681）
- **更新可靠性** — 多条报告指出更新失败后系统处于不一致状态（Windows package-swap 失败、Doctor 验证挂起、WAL 验证问题）
- **维护工具卡死** — `doctor --fix` 和 `update repair` 进入无限循环或停滞且无反馈

**平台特定摩擦：**
- **macOS**：Gateway stop 时进程谱系检查失败，Doctor 修复停滞
- **Windows**：MAX_PATH 限制、package-swap 失败、卸载后残留临时文件
- **Linux/Docker**：启动时 58 秒插件元数据重新扫描、KNN 搜索超时

**用户体验摩擦：**
- Control UI Sessions 侧边栏不渲染会话行（#200781）
- OpenAI 兼容提供商的提示缓存效果不佳（成本/性能影响）
- iOS 文字大小设置未持久化
- Linux 桌面应用窗口控件与侧边栏重叠

### 用例与满意度

**积极信号：**
- 多 agent Telegram 群聊正在被积极使用（#146311），表明社区采纳度良好
- WhatsApp 定时任务功能正在开发中（#202880），表明功能响应式开发
- Windows 应用（beta）正在被积极测试（#200756、#200610）

**不满信号：**
- 多条高评论数的 P0/P1 问题表明用户正在被阻塞
- 回归问题令人担忧（插件准备修复已在发布分支回退）
- 跨平台一致性问题仍然普遍

---

## 8. 积压关注

### 需要维护者关注的长期待回复重要 Issue

| Issue | 标题 | 存在时长 | 最后更新 | 优先级 | 链接 |
|-------|-------|-----|--------------|----------|------|
| [#153899](https://github.com/openclaw/openclaw/issues/153899) | Gateway drain 等待完整 TimeoutStopSec — 健康刷新和工作板生命周期计时器持续触发 | 约 2 个月 | 2026-11-21 | P1 | [链接](https://github.com/openclaw/openclaw/issues/153899) |
| [#178373](https://github.com/openclaw/openclaw/issues/178373) | Agent 循环缺少轮次级/token 预算，工具循环检测为可选 | 约 1 个月 | 2026-11-20 | P2 | [链接](https://github.com/openclaw/openclaw/issues/178373) |
| [#155868](https://github.com/openclaw/openclaw/issues/155868) | Agent 源运行获取的工具列表被缩减，导致提示缓存未命中 | 约 2 个月 | 2026-11-20 | P2 | [链接](https://github.com/openclaw/openclaw/issues/155868) |
| [#146311](https://github.com/openclaw/openclaw/issues/146311) | 共享多 agent 群聊中每 bot 账号都会触发转录回声 | 约 2 个月 | 2026-11-20 | P2 | [链接](https://github.com/openclaw/openclaw/issues/146311) |
| [#172031](https://github.com/openclaw/openclaw/issues/172031) | 晚期 modelPromptProjection 在 before_agent_run 后使自定义 context-engine 准入失效 | 约 1 个月 | 2026-11-20 | P2 | [链接](https://github.com/openclaw/openclaw/issues/172031) |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron 任务无法结束：缺少 --until / --max-runs | 约 3 个月 | 2026-11-20 | P3 | [链接](https://github.com/openclaw/openclaw/issues/130247) |
| [#187350](https://github.com/openclaw/openclaw/issues/187350) | 插件元数据快照在每次启动时重新扫描整个插件树（6,495 个文件耗时 58 秒） | 约 3 周 | 2026-11-20 | P2 | [链接](https://github.com/openclaw/openclaw/issues/187350) |
| [#164559](https://github.com/openclaw/openclaw/issues/164559) | agent_end 插件钩子对每次模型尝试触发一次，而非每次运行触发一次 | 约 1.5 个月 | 2026-11-20 | P2 | [链接](https://github.com/openclaw/openclaw/issues/164559) |
| [#192496](https://github.com/openclaw/openclaw/issues/192496) | 空闲技能刷新在 19-20 个 agent 时仍会重入（PR #170341 已合并，症状持续） | 约 2.5 周 | 2026-11-20 | P2 | [链接](https://github.com/openclaw/openclaw/issues/192496) |

### 需要分类的积压 Issue

多条 Issue 被标记为 `stale`，可能需要关闭或重新排优先级：
- [#120385](https://github.com/openclaw/openclaw/issues/120385) — Code Mode 工具目录不完整（已关闭）
- [#138528](https://github.com/openclaw/openclaw/issues/138528) — 卡住会话恢复丢弃 blocked_tool_call 分类
- [#167622](https://github.com/openclaw/openclaw/issues/167622) — 原生 Codex 执行：SQLite 只读 worker 中配置获取失败
- [#172031](https://github.com/openclaw/openclaw/issues/172031) — 晚期 modelPromptProjection 在 before_agent_run 后使自定义 context-engine 准入失效
- [#176187](https://github.com/openclaw/openclaw/issues/176187) — memory-core：稀疏 vec0 分配放大 KNN 读取（已关闭）
- [#170428](https://github.com/openclaw/openclaw/issues/170428) — iOS 应用文字大小未应用或持久化（已关闭）

### 需要维护者评审的 PR

| PR | 标题 | 状态 | 规模 | 链接 |
|----|-------|--------|------|------|
| [#148039](https://github.com/openclaw/openclaw/pull/148039) | fix(browser): 在握手后取消进行中的 CDP 命令 | 等待维护者查看 | L | [链接](https://github.com/openclaw/openclaw/pull/148039) |
| [#202878](https://github.com/openclaw/openclaw/pull/202878) | fix: 保持有头 Chrome 模式下后台标签页的截图功能正常 | 等待维护者查看 | XS | [链接](https://github.com/openclaw/openclaw/pull/202878) |
| [#202636](https://github.com/openclaw/openclaw/pull/202636) | fix: 在请求准入时检查发布阅读可选同意 | 等待维护者查看 | M | [链接](https://github.com/openclaw/openclaw/pull/202636) |
| [#202894](https://github.com/openclaw/openclaw/pull/202894) | improve(ci): 在最终验证波次前启动长期升级检查 | 等待维护者查看 | XS | [链接](https://github.com/openclaw/openclaw/pull/202894) |
| [#202831](https://github.com/openclaw/openclaw/pull/202831) | fix(plugins): 当 manifest 导致启用的独立插件无法启动时报警告 | 等待维护者查看 | S | [链接](https://github.com/openclaw/openclaw/pull/202831) |
| [#201577](https://github.com/openclaw/openclaw/pull/201577) | fix(onboard): 在 Tailscale Funnel 下拒绝 token 认证并给出准确指导 | 等待维护者 | XS | [链接](https://github.com/openclaw/openclaw/pull/201577) |
| [#201586](https://github.com/openclaw/openclaw/pull/201586) | fix: 停止复制的 OpenClaw ID Gateway 密钥重置所有者访问权限 | 等待维护者查看 | S | [链接](https://github.com/openclaw/openclaw/pull/201586) |

---

*本摘要基于 OpenClaw GitHub 数据生成，日期为 2026-11-21。所有 issue/PR 链接均指向 https://github.com/openclaw/openclaw。*

---

## 横向生态对比

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, links, code spans, numbers, dates, project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
4. Use natural technical Chinese register - not literal word-for-word

Let me translate this carefully, section by section, maintaining the structure and using appropriate technical Chinese terminology.

Let me go through it systematically:

Title: AI Agent & Personal AI Assistant Open-Source Ecosystem Report
- AI Agent → AI Agent
- Personal AI Assistant → 个人AI助手
- Open-Source Ecosystem → 开源生态
- Technical report → 技术报告

Let me translate the full document now.
</think>


# AI Agent 与个人 AI 助手开源生态报告
**参考日期：2026-11-21 | 受众：技术决策者与开发者**

---

## 1. 生态总览

截至 2026 年末，个人 AI 助手与 Agent 开源领域正处于**高速增长、格局分散**的阶段。五个活跃项目围绕一个共同核心问题展开——将大语言模型桥接到现实世界的工具、渠道和用户——但在实现语言、治理模式和主要用例上差异显著。**OpenClaw** 以原始社区规模领先（24 小时内 339 条 issue 更新、500 条 PR 更新），但正在应对快速发布周期带来的大量回归缺陷。**Hermes Agent** 是当前活跃项目中运维状态最稳定的，修复 PR 每日落地，插件基础设施和看板可靠性方向清晰。**QwenPaw** 正在推进五个项目中规模最大的架构重构——将本地模型管理抽取为插件 Provider——同时保持了高 PR 吞吐量。**ZeroClaw**（Rust 实现）代表了内存安全性和 WASI 沙箱化的差异化技术路线，但背负着不可忽视的缺陷队列，且目前尚无相关修复 PR。**IronClaw** 没有任何活动迹象，其维护状态存疑。整体生态在多个跨领域问题上趋于一致——内存系统可靠性、多渠道通知推送、本地模型生命周期管理以及跨平台稳定性（尤其是 Windows 和 macOS）——这表明下一代 Agent 框架的竞争将主要在基础设施健壮性而非功能新颖性上展开。

---

## 2. 活跃度对比

| 项目 | Issue 更新（24h） | PR 更新（24h） | 新版本发布（24h） | 开放 P0/P1/S1 | 开放 P2 缺陷 | 开放 PR | 合并 PR（24h） | 活跃比（PR:Issue） | 健康度 |
|---|---|---|---|---|---|---|---|---|---|
| **OpenClaw** | 339 | 500 | 0 | 8+ P0/P1 | 15+ P2 | ~309 | ~191 | 1.47 | 🟡 承压 |
| **Hermes Agent** | 50 | 50 | 1 canary | 0 P0/P1 | 15 P2 | ~38 | 12 | 1.00 | 🟢 健康 |
| **IronClaw** | 0 | 0 | 0 | 未知 | 未知 | 未知 | 0 | — | ⚫ 停滞 |
| **QwenPaw** | 13 | 41 | 0 | 2 High | 8 Medium | ~28 | 7 | 3.15 | 🟢 健康 |
| **ZeroClaw** | 13 | 50 | 0 | 2 S1 + 3 High | 3 S2 | ~49 | 1 | 3.85 | 🟠 需关注 |

**表格说明：**
- *活跃比* = PR 更新数 ÷ Issue 更新数。比率 >1.0 表明项目产出代码量超过 Issue 流入量（即以特性开发为主）。比率 <1.0 则表示 Issue 积压较重。
- *健康度* 是缺陷-修复比、发布节奏和回归缺陷发生率等指标的综合评估。
- **IronClaw** 在所有指标上均显示零活动。可能意味着已归档、维护中断，或 GitHub 数据无法通过标准方式获取。

---

## 3. OpenClaw 的定位

### 相对竞品的优势

| 维度 | OpenClaw 的定位 | 与竞品对比 |
|---|---|---|
| **社区规模** | 最大（24h 内 339 条 issue 更新、500 条 PR 更新） | 活跃 issue 流量是任何竞品的 6–38 倍 |
| **功能广度** | 最成熟的多渠道支持（Slack、Discord、Telegram、MS Teams、飞书、WhatsApp） | Hermes 和 ZeroClaw 支持渠道较少；QwenPaw 聚焦微信 + 控制台 |
| **插件生态** | 规模成熟、已建立起来的插件市场，支持 MCP 集成 | Hermes Agent 正在构建插件 API（PR #151935 已合并）；其余项目尚在起步 |
| **发布节奏** | 快（2026.11.3 stable，beta.4 按计划推进） | QwenPaw 和 Hermes 节奏较慢但更稳定 |
| **控制界面** | 功能完整的 Web UI，支持会话、看板和设置管理 | QwenPaw 有 Console UI；Hermes 有 TUI/CLI；ZeroClaw 有 Web 控制台 |

### 技术路线的差异

OpenClaw 是生态中唯一一个具备以下特性的项目：
- **原生 Watch 支持**（iOS/watchOS 伴侣应用集成——P0 级 #158277）
- **A/B 测试基础设施**，以及针对更新候选版本的 Doctor 验证流程
- **Prompt Cache 实现**（目前与 OpenAI 兼容 Provider 配合时失效——#182891）
- **定时/cron Agent 轮次**与多轮持久化（但 Code Mode 工具目录对 cron 和内存刷新轮次支持不完整——#120385）

OpenClaw 采用 **Python/Node.js 混合架构**，包含 Gateway 守护进程、Doctor 维护工具和插件系统。Hermes Agent 使用 **Rust**，QwenPaw 为 **Python** 实现并配有 Console 后端。这种架构差异意味着 OpenClaw 面临的缺陷类型（Python GIL、Node.js 事件循环）可能与 ZeroClaw（Rust 所有权、WASI 沙箱化）截然不同。

### 社区规模对比

OpenClaw 最高热度 issue（#160959，Gateway 阻塞问题）获得了 84 条评论——**是生态中第二高 issue（Hermes Agent 的 #131859，68 条评论）的 5 倍**。这既反映了更大的用户基数，也说明了 OpenClaw 当前发布周期中存在较高的摩擦点。

---

## 4. 共同的技术关注方向

多个需求在**三个或以上项目中同时出现**，表明这些是生态层面的真实痛点：

### 记忆与召回系统
| 项目 | 具体问题 |
|---|---|
| **OpenClaw** | Code Mode 工具目录对定时/cron 和内存刷新轮次支持不完整（#120385）；Prompt Cache 从未被复用（#182891、#198373） |
| **Hermes Agent** | 每个用户独立的密钥库需求（#197297）；background_review 降级链失败（#93592） |
| **QwenPaw** | Memory tag 索引返回 503——标签已生成但无法读取（#8580）；记忆召回漏掉已保存的事实，反而保存了错误答案（#12607） |
| **ZeroClaw** | 记忆召回 opt-in 外部重排序阶段 RFC（#12022）；记忆召回数据完整性问题（#12607） |

**共识需求：** 各项目的记忆系统要么不可靠（数据丢失、损坏），要么未优化（无缓存、无重排序）。这是整个生态中最具跨项目影响力的可靠性缺口。

### 更新与维护可靠性
| 项目 | 具体问题 |
|---|---|
| **OpenClaw** | 安装后 Doctor 遗留 11.3 部分未完成状态（#197083）；Doctor 更新维护陷入活锁（#198218）；11.5 候选版本受插件迁移冲突阻塞（#200606） |
| **Hermes Agent** | 依赖同步失败后网关保持暂停状态——刚刚在 PR #158449 中修复 |
| **QwenPaw** | 工具配置含密码时触发页面刷新循环（#8836）；Windows 配置保存需要重试逻辑——刚刚修复（#8835） |
| **ZeroClaw** | Gateway 写入会话状态失败后保持 'running' 直到重启（#12619） |

**共识需求：** 更新、维护和状态恢复操作在整个生态中都很脆弱。每个项目都有"操作失败、系统陷入不一致状态"的变体。

### 多渠道通知与投递
| 项目 | 具体问题 |
|---|---|
| **OpenClaw** | 安装后 WAL 验证遗留 11.3 部分未完成状态（#197083）；审批提示必须送达发起渠道（#6695、#6819） |
| **Hermes Agent** | 审批提示投递修复正在 review（#8303）；只读 delivery.status RPC 已合并（#157156） |
| **QwenPaw** | 微信静默轮询失效——消息静默丢失（#8757）；审批提示路由修复（#8303） |
| **ZeroClaw** | Telegram 语音转录失败阻塞后续消息（#12597）；WhatsApp Web 引用回复功能需求（#12598） |

**共识需求：** 异步事件（审批、通知、工具结果）的可靠、渠道感知投递是一个普遍挑战。

### 跨平台稳定性（Windows + macOS）
| 项目 | 具体问题 |
|---|---|
| **OpenClaw** | macOS 上 gateway stop 失败（#191944）；Windows beta 更新在 package-swap 阶段失败（#200756）；Windows 保留的 updater 超出 MAX_PATH（#200610） |
| **Hermes Agent** | Windows git 版本检查导致 ACP 会话挂起（#156777）；Windows 上 gateway 进程 stop 后依然存活（#152435）；Windows 服务写回失败（#144933） |
| **QwenPaw** | Windows 系统通知功能需求（#8821）；Windows 配置保存重试逻辑（#8835） |
| **ZeroClaw** | Windows 上 WASI 文件系统沙箱逃逸（RUSTSEC-2026-0587，已修复） |

**共识需求：** 每个项目都在与 Windows 特定可靠性问题作斗争，尤其在进程管理、文件系统访问和服务生命周期方面。

### 本地模型管理
| 项目 | 具体问题 |
|---|---|
| **OpenClaw** | 无原生 llama.cpp / 本地模型管理；依赖外部工具 |
| **Hermes Agent** | 托管 llama.cpp 运行时上 cron 任务存储 provider 'custom' 且每次运行都 401（#158383） |
| **QwenPaw** | 巨型 PR 将本地模型管理抽取为插件（#8499）；llama.cpp GPU 控制（#8649）；托管 MLX 引擎支持（#8647）；Console UI 本地模型支持（#8648） |
| **ZeroClaw** | 废弃本地 LLM 响应缓存（#12611）——表明已有本地模型支持 |

**共识需求：** 将本地模型生命周期管理（下载、GPU 分配、运行时管理）从核心 Agent 中解耦为插件或 Provider 系统，是跨项目的架构趋势。QwenPaw 在这方面最为领先，以协调的三个 PR 组合推进。

---

## 5. 差异化分析

### 目标用户维度

| 项目 | 主要用户画像 | 次要用户画像 |
|---|---|---|
| **OpenClaw** | 运行多 Agent 部署的高级用户；需要复杂渠道集成（Slack + Discord + 飞书）的企业 | 构建 MCP 插件的开发者 |
| **Hermes Agent** | 希望拥有灵活、CLI 优先的 Agent 框架且看板集成强大的开发者 | 使用 NousResearch 基础设施的自托管用户 |
| **QwenPaw** | 使用微信进行业务沟通的团队；中文企业用户 | 本地 LLM 爱好者（llama.cpp、Ollama、MLX） |
| **ZeroClaw** | 安全意识强的运维人员；Rust/嵌入式部署目标；需要 WASI 沙箱化的企业 | 构建记忆增强型 Agent 的开发者 |

### 技术架构维度

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **语言** | Python + Node.js（Gateway） | Rust | Python | Rust |
| **安全模型** | 插件沙箱隔离；MCP 目录校验 | OIDC 可配置作用域 | 沙箱探测（Landlock） | WASI 沙箱 + 操作员凭证作用域控制 |
| **Agent 记忆** | ReMe（自动标签生成、召回） | Background review + memory-core | ReMe（标签生成 + 召回） | 记忆召回，支持外部重排序 |
| **插件系统** | 成熟的 MCP 插件市场 | 全新的状态门面 API（PR #151935） | Provider 插件系统（本地模型抽取） | Antigravity CLI 委托 + 凭证粒度化 |
| **渠道数量** | 8+（Slack、Discord、Telegram、MS Teams、飞书、WhatsApp、微信、iOS Watch） | 5+（Telegram、Discord、WhatsApp、微信、Console） | 2 核心（微信、Console WebUI） | 4+（Discord、Telegram、飞书、WhatsApp Web） |
| **更新机制** | Doctor + 候选版本验证；PostgreSQL Store 在更新时捕获 | 依赖同步 + Gateway 重启序列 | CLI 升级 + Windows 重试逻辑 | Cargo + WASM 更新路径 |

### 功能聚焦维度

| 功能 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **看板/任务管理** | 内置，多 Agent 感知 | 强大（真正的取消操作已合并） | 部分（CLI + Console） | 无原生看板 |
| **OAuth/身份** | 通过渠道集成实现 | OIDC 作用域可配置（PR #12497） | 通过 Provider OAuth | OIDC 作用域可配置性进行中 |
| **本地 LLM 支持** | 仅外部 | 外部 + 托管 llama.cpp（有认证问题） | 一等公民的 Provider 插件 | 响应缓存废弃表明已有本地模型支持 |
| **浏览器自动化** | Browser 工具 + 后台标签页截图（PR #202878） | 无原生浏览器工具 | 无原生浏览器工具 | Browser 工具含文件上传操作需求（#12614） |
| **多 Agent 编排** | 高级（agent-sourced runs，工具集精简） | 有限（看板 worker 为独立进程） | 有限 | 有限 |
| **Code Mode** | 有（cron 轮次的工具目录不完整） | 无 | 无 | 无 |

**核心结论：** OpenClaw 功能最完整，但正在支付稳定性税。QwenPaw 的架构方向最清晰（Provider 插件抽取）。ZeroClaw 在设计上最注重安全。Hermes Agent 运维状态最稳定。

---

## 6. 社区势头与成熟度

### 活跃度分层

| 层级 | 项目 | 描述 |
|---|---|---|
| **第一层 — 高容量** | **OpenClaw** | 工业级社区规模（339/500 更新/24h）。成熟度高但回归风险升高。插件生态规模大。 |
| **第二层 — 活跃迭代** | **Hermes Agent**、**ZeroClaw** | PR 吞吐量健康（分别为 50/50 和 50/13）。Hermes 缺陷-修复比优秀；ZeroClaw 有缺陷队列但无对应修复 PR，表明成熟度处于更早阶段。 |
| **第三层 — 聚焦开发** | **QwenPaw** | Issue 流量适中（13 条），但 PR-Issue 比最高（3.15）。大规模架构重构进行中；聚焦于本地模型插件抽取。 |
| **第四层 — 停滞** | **IronClaw** | 所有指标零活动。可能已归档、重命名或被其他项目吸收。 |

### 快速迭代型项目

- **OpenClaw**：发布节奏最快；2026.11.x 周期每周发布 beta 候选版本。回归率偏高——插件准备修复已在发布分支上回滚。
- **QwenPaw**：大规模重构（本地模型插件抽取，#8499）表明处于架构演进而非增量功能增长阶段。
- **ZeroClaw**：大规模清理 PR（删除了 70 个源文件、165 个 i18n key、69 个制品）表明在特性开发同时进行技术债务清理。

### 趋于稳定型项目

- **Hermes Agent**：v0.23.3 canary 已发布；今日合并 12 个 PR，且缺陷修复覆盖力度强。这表明项目在功能扩张期后正在进入稳定阶段。看板取消功能和插件状态门面是已完工的主要特性，目前处于维护模式。

---

## 7. 趋势信号

以下信号来自跨项目社区反馈和 Issue/PR 模式分析，对基于此生态构建或贡献的开发者具有参考价值：

### ✅ 1. 插件基础设施是主要战场
每个项目都在插件 API 上投入：OpenClaw 成熟的 MCP 插件市场、刚刚合并的 Hermes Agent 状态门面（#151935）、QwenPaw 的 Provider 插件系统，以及 ZeroClaw 的 Antigravity CLI 委托集成。下一个差异化因素将是**插件治理**：如何隔离插件、如何控制凭证作用域、如何让插件状态在 Agent 重启后存活。

### ✅ 2. 记忆系统需要可靠性大检修
四个活跃项目都存在开放的记忆相关缺陷——数据丢失、损坏、召回失败或缺少重排序。这是单一最具跨项目影响力的可靠性缺口。在各项目稳定之前，构建生产级 Agent 的开发者应自行实现记忆验证层。

### ✅ 3. Windows 现已是一等目标（而且问题多多）
每个项目都有开放的 Windows 特定缺陷，集中在进程管理、文件系统访问和服务生命周期。这反映了从 Linux 专属/自托管到 Windows 桌面 + Windows 服务器部署目标的转变。整个生态在 Windows 测试基础设施上整体投入不足。

### ✅ 4. 本地模型生命周期正在从核心 Agent 中解耦
QwenPaw 的大规模抽取（#8499）最为激进，但 Hermes Agent 的托管 llama.cpp 运行时和 OpenClaw 的外部插件捕获都指向同一结论：**本地模型管理（下载、GPU 分配、重启、认证）应该是插件，而非核心**。开发者应在架构设计中考虑到这一预期。

### ✅ 5. 审批与投递通知是一个普遍难题
在 OpenClaw、Hermes Agent 和 QwenPaw 中，审批提示路由到正确渠道都是反复出现的回归问题。核心需求——将 Agent 决策可靠地异步投递到人工审批者——是普遍的，但尚无便携解决方案。

### ✅ 6. 清理与技术债务削减正在推进
ZeroClaw（删除 70 个源文件）、OpenClaw（废弃命令移除、i18n 刷新）和 QwenPaw（mission 命令移除、未使用的 web_search 模态框）同时在进行缩减工作。这表明生态正在成熟：重心从扩张功能转向巩固已有能力。

### ⚠️ 7. "Claw" 家族需要澄清
OpenClaw、IronClaw 和 ZeroClaw 都带有 "Claw" 后缀。IronClaw 无任何活动。ZeroClaw 基于 Rust。OpenClaw 基于 Python/Node。如果这些是关联项目（同源、fork 家族或联合营销套件），命名方式会给评估生态的开发者带来困惑。一份清晰的架构关系图将有助于社区 onboarding。

### ⚠️ 8. 跨平台进程管理是反复出现的痛点
Gateway/Agent 的 stop 操作在各项目的 Windows 和 macOS 上均存在静默失败或不完整问题。这表明需要一个**可移植的进程生命周期抽象**——一个库或模式，能在各个平台上统一处理优雅退出、子进程回收和进程谱系检查。

---

*本报告数据来源于 OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw 的 GitHub 活动数据，截至 2026-11-21。所有 Issue/PR 引用均直接指向各对应仓库。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Preserve all Markdown structure exactly
3. Keep all URLs, code spans, numbers, dates, project names, usernames, version tags, file paths, API/config identifiers in their original form
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate this report section by section.

Title: "Hermes Agent Project Digest — 2026-11-21"
→ "Hermes Agent 项目摘要 — 2026-11-21"

Let me go through each section carefully.
</think>


# Hermes Agent 项目摘要 — 2026-11-21

## 1. 今日概览

Hermes Agent（NousResearch/hermes-agent）在 2026 年 11 月 21 日处于**极高活跃度**状态，过去 24 小时内有 50 个 issue 和 50 个 pull request 发生更新。项目于昨日发布了新的 canary 版本（v0.23.3+canary.20261120T064609Z），大量 P1/P2 级别 bug 修复通过 PR 合并落地，其中多项修复针对 Windows 平台可靠性问题。社区在所有主要组件——gateway、kanban、desktop 和 plugins——上都保持高度参与，维护团队正在处理大量回归报告，同时推进多个呼声较高的功能（真正的 kanban 任务取消、delivery status RPC、plugin state facade）。整体健康状况良好，但 bug 队列（尤其是 Windows 兼容性和 kanban 稳定性相关）仍然处于较高水平。

---

## 2. 版本发布

### v0.23.3+canary.20261120T064609Z — 发布于 2026 年 11 月 20 日

v0.23 系列的 canary（预发布）构建。发布说明中包含了适用于 macOS Apple Silicon 的 Hermes Desktop DMG 下载链接，构建完整列表参见发布页面，以下数据为部分摘录。

| 字段 | 详情 |
|---|---|
| **Tag** | `v0.23.3+canary.20261120T064609Z` |
| **日期** | 2026 年 11 月 20 日 |
| **平台** | macOS（Apple Silicon），其他平台构建列表详见发布页面 |
| **发布地址** | [NousResearch/hermes-agent Release](https://github.com/NousResearch/hermes-agent/releases) |

> ⚠️ 这是一个 canary 构建。现有发布说明中未包含迁移说明或重大变更披露。正在使用稳定版本的用户在升级前请查阅 changelog。

---

## 3. 项目进展

过去 24 小时内共有 12 个 pull request 被合并或关闭。重要进展如下：

### 已合并 / 已关闭的 PR

| PR | 作者 | 说明 | 领域 |
|---|---|---|---|
| **#158449** | pedroberaldo87 | **[P1] fix(update): 依赖同步失败后不再将已暂停的 gateway 遗留在停止状态** — 关键修复，防止 gateway 在慢速链路或错误检测 libc 的情况下同步失败后持续保持停止状态。 | CLI / install-update |
| **#158432** | TroyGamer73 | fix(gateway): 修复 FooteredReply deepcopy 崩溃及未清理的死平台 writer — 解决了两个生产环境发现的问题：持有活跃 gateway 引用的 FooteredReply 无法 deepcopy；死平台 writer 未被清理。 | Gateway |
| **#158433** | TroyGamer73 | fix(backup): 五个守卫条件导致更新前备份失败或膨胀 — 改进了 SQLite 头部嗅探逻辑和更安全的归档处理。 | CLI / backup |
| **#157157** | Tormen28 | feat(kanban): 新增正在执行任务的真正取消功能 — 新增 `hermes kanban cancel <ids>...` 命令和 API，用于在 kanban worker 执行中途将其停止。 | CLI / kanban |
| **#157156** | Tormen28 | feat(gateway): 只读 delivery.status RPC — 允许外部消费者查询某个排入队列的投递是处于 pending、delivered 还是 dead-lettered 状态。 | Gateway / RPC |
| **#151935** | Tormen28 | feat(plugins): 为插件提供持久化的 detached-result 写入能力和只读 state facade — 公共 API，允许插件从 turn 外部向 session 写入结果并读取 session 状态。 | Plugins / API |
| **#151194** | BearHuddleston | fix(skills): 释放 model 仅预览过的 skill_view 去重条目 — 防止去重条目在仅被预览的情况下被永久锁定。 | Agent / skills |
| **#158431** | ashgupta236-commits | probe — 测试 / 验证 PR，无功能变更。 | Meta |

### 开放中的 PR（新提交或近期活跃）

| PR | 作者 | 优先级 | 说明 | 领域 |
|---|---|---|---|---|
| **#158455** | DobyKoishi | P3 | feat(photon): 离散多气泡流式输出及原生 iOS 生态支持 | Streaming / iOS |
| **#158450** | pedroberaldo87 | P2 | fix(profiles): 重命名后会将该 profile 路由的接收 bot 重新绑定 | Gateway / profiles |
| **#158438** | recoilburner | P2 | fix(models-dev): 当 session 记录了某个别名时（GitHub Copilot），读取 provider profile 的 catalog | Agent / models |
| **#158437** | chuggies510 | P2 | fix(tools): 在受限的本地后端上统计完整读取次数，以便 write_file 能够覆盖文件 | Tools / file |
| **#158436** | dragonkid | P3 | fix(skills): skill_manage 解析每个 skill 的符号链接安装路径 | Tools / skills |
| **#158424** | unsupportedpastels | P3 | feat(desktop): 向后端通知用户当前处于活跃状态，以智能抑制手机通知 | Desktop / settings |
| **#158399** | mateu | P2 | fix(gateway): stop 失败后不再使 gateway 持续运行直到收到 SIGKILL | Gateway |
| **#158091** | kvnloo | P3 | feat(plugin-catalog): 新增 z0live 插件（实时语音栈） | Plugin catalog |
| **#158453** | kvnloo | P3 | feat(plugin-catalog): 新增 stats 插件（Hermes Stats 使用情况仪表盘） | Plugin catalog |

---

## 4. 社区热点话题

过去 24 小时内按评论 / 互动数量排序的 issue 和 PR：

### 🔥 #131859 — [开放中] 无法通过 API 打开 pull request：CreatePullRequest 权限错误（68 条评论）
**链接：** https://github.com/NousResearch/hermes-agent/issues/131859
- **作者：** kuehnberger | **优先级：** P3 | **组件：** auth, CLI
- **摘要：** 用户无法从 fork 向 NousResearch/hermes-agent 创建 pull request，因为遇到了 `CreatePullRequest` 权限错误，尽管 issue 创建和 fork PR 本身可以正常工作。在 2026 年 10 月 3 日的两分钟内复现了两次。该 issue 已获得 **68 条评论**——是数据集中活跃度最高的讨论线程——表明这是一个影响大量用户的贡献者阻塞问题。P3 标签可能低估了其社区影响程度。

**潜在需求：** 一种合规、可靠的通过 Hermes CLI 提交 PR 的工作流程，目前社区中有大量用户可能依赖这一方式来回馈项目。

### 💬 #84195 — [已关闭] 放宽 / 移除 57 字符的 skill 描述截断限制（6 条评论，2026-11-20 关闭）
**链接：** https://github.com/NousResearch/hermes-agent/issues/84195
- **作者：** alone-tree | **优先级：** P3 | **组件：** agent / skills
- **摘要：** `agent/skill_utils.py` 中的 `SKILL_PROMPT_DESC_LIMIT = 60` 将所有 skill 的描述截断为 57 个字符。对真实配置（150+ 个 skill）的测量表明，节省的 token 微不足道，而路由信息的价值却被彻底破坏。该 issue 已**关闭**——可能已通过合并的 PR 解决。

### 💬 #156335 — [开放中] Kanban：删除 board 时不得孤立正在执行中的 writer（7 条评论）
**链接：** https://github.com/NousResearch/hermes-agent/issues/156335
- **作者：** rhgo1749 | **优先级：** P2 | **组件：** CLI, kanban_db_boards
- **摘要：** 在 Linux/POSIX 环境下，`hermes_cli.kanban_db_boards.remove_board()` 可能在另一个进程持有打开的 SQLite writer 时归档或硬删除 board，导致写入静默丢失。这是一个数据完整性问题。

**潜在需求：** 在多进程 kanban worker 场景下对 kanban 数据库的安全并发访问。

### 💬 #93592 — [开放中] background_review 在主 provider 失败时忽略 auxiliary fallback_chain 配置（7 条评论）
**链接：** https://github.com/NousResearch/hermes-agent/issues/93592
- **作者：** EncoTime | **优先级：** P2 | **组件：** agent, config
- **摘要：** 当 `auxiliary.background_review.provider` 失败时（例如 HTTP 429），任务级别配置的 `fallback_chain`（位于 `auxiliary.background_review.fallback_chain`）从未被查询。审查静默失败，不发起任何调用。

**潜在需求：** 在主 provider 被限流或不可用时，auxiliary 审查任务具备弹性的降级行为。

### 👍 #126996 — [开放中] feat(model-picker)：按 provider 的模型白名单 / 黑名单（2 条评论，4 👍）
**链接：** https://github.com/NousResearch/hermes-agent/issues/126996
- **作者：** brettswift | **优先级：** P2 | **组件：** CLI, TUI, agent
- **摘要：** 实时发现的 provider（Anthropic、通过 OAuth 的 OpenAI Codex）会列出账户可见的每个模型（Anthropic 上 16+ 个），用户无法缩小选择范围。用户希望按 provider 控制白名单 / 黑名单。

**潜在需求：** 模型选择器的 UX 卫生需求——用户希望在选择器中隐藏已淘汰或无关的模型。

---

## 5. Bug 与稳定性

按优先级排序（不含已在 §3 中合并的修复 PR）：

| 优先级 | Issue | 标题 | 组件 | 状态 | 是否有修复 PR |
|---|---|---|---|---|---|
| **P1** | — | *（今日无新 P1 issue；P1 修复 #158449 已合并）* | — | — | — |
| **P2** | #156335 | Kanban：删除 board 时不得孤立正在执行中的 writer | CLI / kanban | 开放中 | 无 |
| **P2** | #93592 | background_review 在主 provider 失败时忽略 fallback_chain | agent / config | 开放中 | 无 |
| **P2** | #156777 | ACP session/new / session/load 在 Windows 上永远挂起（git 版本检查） | CLI / ACP | 开放中 | 无 |
| **P2** | #134290 | Desktop：会话切换后已完成轮次从记录中消失（数据库完好） | desktop / sessions | 开放中 | 无 |
| **P2** | #155862 | Desktop 在 `--version` 超过 15 秒时进入首次运行设置（blobless clone） | desktop / shell | 开放中 | 无 |
| **P2** | #152435 | Windows 上 gateway 永不加入其 kill-on-close job——spawn 的进程在 `stop` 后仍然存活 | CLI / gateway | 开放中 | 无 |
| **P2** | #156258 | App 刷新后重新选中 app 托管的本地后端——profile 聊天返回 404 | gateway / profiles | 开放中 | 无 |
| **P2** | #31336 | 飞书 gateway 在带 @mention 的 thread/topic 中静默丢弃消息 | gateway / Feishu | 开放中 | 无 |
| **P2** | #157146 | core_lock_upgrades() 强制使用 -P pin 覆盖插件上界——导致降级被阻止 | CLI / install-update | 开放中 | 无 |
| **P2** | #158441 | 并发负载下 control socket 2 秒硬超时导致 kanban worker 崩溃 | gateway / kanban | 开放中 | 无 |
| **P2** | #144933 | Windows 服务下 pm worker 结果回写失败（OSError 22） | CLI / Windows | 开放中 | 无 |
| **P2** | #158383 | 托管的 llama.cpp 运行时上 cron 任务存储 provider 为 'custom'，每次运行都 401 | CLI / cron / auth | 开放中 | 无 |
| **P2** | #158371 | kanban：live comment 注入跳过每个以 worker profile 名称签名的评论 | tools / kanban | 开放中 | 无 |
| **P2** | #158390 | [iOS beta] 实时活动停留在"思考中 · 0 工具"——relay 从未到达锁屏 | gateway / iOS | 开放中 | 无 |
| **P3** | #157274 | 运行时治理门控 + 防篡改审计追踪（安全） | agent / tools | 开放中 | 无 |

**稳定性评估：** P2 bug 队列处于**较高水平**，共有 **15+ 个开放 P2 issue**，涉及 Windows 兼容性、kanban 并发、会话管理和 desktop shell 行为。这是一个值得关注的可靠性回归集中现象。维护团队正在积极处理这些问题——今日已合并 P1 修复 #158449 及多个 P2 修复 PR（#158432、#158433、#158399、#158450）——但新 P2 的进入速率（每天多个）表明压力仍在持续。

---

## 6. 功能需求与路线图信号

按用户需求排列的功能请求，附带近中期纳入可能性的评估：

| 请求 | Issue | 作者 | 优先级 | 近中期纳入可能性 |
|---|---|---|---|---|
| **真正的 kanban 任务取消** | #157157（已合并） | Tormen28 | P3 | ✅ **本周期已发布** |
| **Plugin state surface + delivery.status RPC** | #151935 + #157156（已合并） | Tormen28 | P2/P3 | ✅ **本周期已发布** |
| **按 provider 的模型白名单 / 黑名单** | #126996 | brettswift | P2 | 🔶 **中等** — 需求明确，呼声高 |
| **放宽 57 字符 skill 描述截断限制** | #84195（已关闭） | alone-tree | P3 | ✅ PR 已合并，修复已确认 |
| **OAuth：暴露 redirect_port 以满足要求精确匹配 URI 的 IdP** | #149642 | blackghostosint | P2 | 🔶 **中等** — Linear 插件因此阻塞 |
| **OAuth：逗号分隔的 scopes + 固定的 redirect port** | #152732 | realpetru | P2 | 🔶 **中等** — Linear 插件因此阻塞 |
| **运行时治理门控 + 防篡改审计追踪** | #157274 | vladimirbbk | P3 | 🔷 **较低** — 需要安全架构设计工作 |
| **Gateway 回复中的 spoiler 图片（Discord/Telegram）** | #158416 | Igman | P3 | 🔷 **较低** — 平台体验优化 |
| **Desktop：检测用户活跃状态以智能管理通知** | #158424（PR 开放中） | unsupportedpastels | P3 | 🔶 **中等** — PR 已提交 |
| **插件的 staged memory/skill 写入公共 API** | #148313 | CuKhoi | P2 | 🔶 **中等** — 与 #151935 形成互补 |
| **模型凭证作用域 + 每次尝试的归属记录** | #156606（PR 开放中） | diegorhoger | P2 | 🔶 **中等** — 需用户同意开关 |

**路线图信号：** 维护团队近期重点放在 **plugin 基础设施**（state facade、delivery RPC、OAuth 改进）和 **kanban 可靠性**（任务取消、并发修复）上。这暗示下一个里程碑可能是以 plugin 为核心的发布，附带多 profile/kanban 稳定性改进。

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 严重程度 |
|---|---|---|
| **Windows 可靠性** | 多个 P2 bug：ACP 挂起（#156777）、gateway 进程 stop 后仍存活（#152435）、NSSM 服务下写入回写失败（#144933）、stdin pipe 继承问题 | 🔴 高 |
| **Kanban 数据完整性** | board 删除孤立 writer（#156335）、comment 注入跳过自身 profile（#158371）、并发负载下 worker 崩溃（#158441） | 🔴 高 |
| **Desktop 会话管理** | 会话切换后已完成轮次消失（#134290）、blobless clone 错误触发首次运行向导（#155862）、刷新后错误重新选择后端（#156258） | 🟠 中高 |
| **更新 / 依赖失败** | 依赖同步失败后 gateway 被留在停止状态（#158449，已修复）、插件上界固定回归（#157146） | 🟠 中等 |
| **OAuth / 认证** | API 创建 PR 失败（#131859 — 68 条评论）、cron 任务在 llama.cpp 运行时 401（#158383）、OAuth redirect port 未暴露（#149642、#152732） | 🟠 中高 |

### 使用场景与满意度信号

- **多 profile + kanban** 是重度使用模式；真正的任务取消和 state surface 功能（现已合并）直接解决了 plugin 开发者长期以来的痛点。
- **Plugin 生态增长** 明显：z0live（实时语音）和 Hermes Stats 仪表盘插件已提交至 catalog（#158091、#158453）。
- **功能请求参与度** 良好——按 provider 的模型白名单 / 黑名单（#126996）尽管只有 2 条评论但获得了 4 个 👍，说明存在大量沉默需求。
- **GitHub Copilot 集成** 问题（#158438）表明 Copilot 插件用户群正在扩大。

---

## 8. 积压关注清单

具有以下特征的重要 issue：长期开放或高影响力，但尚未收到修复 PR 或维护团队确认解决：

| Issue | 时长 | 评论数 | 优先级 | 风险 |
|---|---|---|---|---|
| **#131859** — API 创建 PR 失败，CreatePullRequest 权限错误 | 约 49 天（自 2026-10-03 起） | 68 | P3（标签低估） | 🔴 社区贡献者阻塞问题 |
| **#84195** — 57 字符 skill 描述截断限制 | 约 101 天（自 2026-08-12 起） | 6 | P3 | 🟡 skill 重度用户的 UX 问题；已关闭，需确认修复 PR 已合并 |
| **#93592** — background_review 在限流时静默失败 | 约 89 天（自 2026-08-24 起） | 7 | P2 | 🟠 静默失败模式 |
| **#146767** — 关于原生 OAuth 与 plugin 的 Anthropic ToS 问题 | 约 22 天（自 2026-10-30 起） | 2，👍×2 | P3 | 🟡 需要为 Claude Pro 用户澄清法律 / ToS |
| **#156258** — 后端重新选择后非默认 profile 的聊天 404 | 约 6 天（自 2026-11-15 起） | 4 | P2 | 🟠 多 profile 安装对非默认 profile 用户完全不可用 |
| **#157274** — 运行时治理门控 + 审计追踪 | 约 3 天（自 2026-11-18 起） | 2 | P3 | 🟡 安全架构缺口；尚无认领人 |
| **#158441** — 并发负载下 kanban worker 因 2 秒 socket 超时崩溃 | <1 天 | 1 | P2 | 🟠 生产环境高负载场景高危 |
| **#158383** — 托管 llama.cpp 运行时上 cron 任务 401 | 约 1 天 | 1 | P2 | 🟠 llama.cpp 用户的 cron 自动化完全失效 |

**建议维护团队优先关注：** #131859（标签低估但社区影响极大）、#93592（静默失败模式）、#156258（多 profile 回归）以及不断增长的 Windows 可靠性问题集群。

---

*本摘要数据来源为 NousResearch/hermes-agent GitHub 2026-11-21 当日数据。所有 issue/PR 链接均直接指向 https://github.com/NousResearch/hermes-agent。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me translate it carefully, maintaining the Markdown structure and all formatting, while using natural technical Chinese register.

Let me go through it section by section.

Note: I need to output ONLY the translation, no preamble, no explanation, no markdown fences. Just the translated content.

Let me translate this carefully:

---

# QwenPaw 项目动态 — 2026-11-21

## 一、今日概览

QwenPaw 在 2026 年 11 月 21 日保持了极高的活跃度。过去 24 小时内共有 41 个 Pull Request 有所更新——这是近几周以来单日最高峰值——同时 Issue 更新量为 13 个。今日未发布新版本，但合并队列成果颇丰：至少有 7 个 PR 达到 closed/merged 状态，包括本地模型管理功能的插件化拆解（#8499）、技能回滚安全加固（#8784）以及 Windows Agent 配置的弹性改进（#8835）。项目当前正同步推进 UI 优化（Android 布局、Markdown 溢出、键盘无障碍）和后端健壮性修复（微信静默死亡、CLI 健康检查、审批提示路由）。核心隐患是一条悬而未决两周之久的内存标签索引缺陷（#8580），相关修复 PR 尚未出现。

---

## 二、版本发布

过去 24 小时内**无新版本发布**。数据中最新版本仍为 v2.3.0.post1。

---

## 三、项目进展

### 今日关闭 / 合并的 PR（7 项）

| # | PR | 作者 | 规模 | 摘要 |
|---|----|--------|------|---------|
| #8512 | fix(providers): 从错误文本中读取网关上报的状态码 | passionworkeer | S | 从裸 `APIError` 异常的错误体中提取 HTTP 状态码，解决了 #8505 中因裸 502 导致重试失败的问题 |
| #8835 | fix(windows): Agent 配置保存失败时自动重试 | Luohh5 | M | 在保存 `agent.json` 时增加了重试逻辑，确保配置在高频写入场景下的可靠性 |

Now I'm looking at the remaining merged PRs, which include fixes for workspace restoration failure handling, Ollama's context window configuration using model-specific `num_ctx` instead of hardcoded limits, and a major refactoring that extracts local model management into a plugin architecture.

Looking at the next batch, I see cleanup work removing the deprecated mission command from the CLI, and a fix to prevent the web search config modal from auto-saving unchanged values when opened. I'm also tracking several open PRs that are actively under review, starting with one that routes approval prompts back to the originating chat channel.

Now I'm reviewing the remaining open PRs under review—one that adds support for runtime base path deployment across the console, another that handles media resizing with inline budgets and omission reporting, and one that improves Landlock detection in sandboxed environments without requiring securityfs. There's also a three-part feature block in progress that adds GPU controls for llama.cpp and managed MLX engine support.

Looking at the community discussion, the most active issues are the memory tag index failure affecting users with auto tag generation, the Windows notification request for background tasks, and the WeChat silent polling issue from earlier this month.

For the PRs, the approval prompt delivery fix and the runtime base path deployment are generating the most engagement, both under active review with high likelihood of merging soon.

On the stability side, there are two critical unhandled issues—memory tag indexing and WeChat message loss—alongside several medium and low priority bugs that have been partially addressed through recent merges like the Windows file access retry and skill rollback improvements.

Looking at the feature pipeline, the Windows notifications, base path deployment, and approval routing across channels are all high priority, with the approval routing fix already ready to merge.

User feedback highlights several pain points: the lack of OS-level notifications for long-running agents, WeChat message loss in production, the memory tag system breaking trust, accessibility gaps in the UI, and friction around enterprise deployment with the missing base-path support.

The positive signals show strong community engagement with high PR activity, responsiveness to productivity and deployment needs, and an architectural improvement the community has been requesting.

There's a significant backlog of issues and PRs that need attention—particularly the 17-day-old memory bug with no assignee, the Daily Paper truncation error that's been sitting for 44 days, the WeChat silent death issue needing investigation, the multi-part local model feature block awaiting sequential merge, and several XXXL-sized PRs from first-time contributors under review. I should prioritize triaging the memory bug and WeChat issue before the next release, then work through the local model feature dependencies and coordinate with maintainers on the larger reviews.
</think>


# QwenPaw 项目动态 — 2026-11-21

## 一、今日概览

QwenPaw 在 2026 年 11 月 21 日保持了极高的活跃度。过去 24 小时内共有 41 个 Pull Request 有所更新——这是近几周以来单日最高峰值——同时 Issue 更新量为 13 个。今日未发布新版本，但合并队列成果颇丰：至少有 7 个 PR 达到 closed/merged 状态，包括本地模型管理功能的插件化拆解（#8499）、技能回滚安全加固（#8784）以及 Windows Agent 配置的弹性改进（#8835）。项目当前正同步推进 UI 优化（Android 布局、Markdown 溢出、键盘无障碍）和后端健壮性修复（微信静默死亡、CLI 健康检查、审批提示路由）。核心隐患是一条悬而未决两周之久的内存标签索引缺陷（#8580），相关修复 PR 尚未出现。

---

## 二、版本发布

过去 24 小时内**无新版本发布**。数据中最新版本仍为 v2.3.0.post1。

---

## 三、项目进展

### PR 关闭 / 合并情况（7 项）

| # | PR | 作者 | 规模 | 摘要 |
|---|----|--------|------|---------|
| #8512 | fix(providers): 从错误文本中读取网关上报的状态码 | passionworkeer | S | 从裸 `APIError` 异常的错误体中提取 HTTP 状态码，解决了 #8505 中因裸 502 导致重试失败的问题 |
| #8835 | fix(windows): Agent 配置保存失败时自动重试，等待子进程退出 | Luohh5 | M | 在保存 `agent.json` 时增加重试逻辑以应对临时性文件访问错误，并在报告超时前等待子安装程序进程退出 |
| #8784 | fix(skills): 回滚时保留备份直到所有工作区完成恢复 | BeiMu-new | XL | 修复了多工作区技能回滚中的五处薄弱环节：失败后恢复剩余工作区、避免陷入遗留的不完整状态、防止备份被过早删除 |
| #8236 | fix(ollama): 从 `num_ctx` 读取上下文窗口大小而非使用默认的 128k | Li-john1021 | XL | Ollama 发现逻辑现在从模型配置中读取 `num_ctx` 来设置实际上下文窗口，而非回退到硬编码的 128k 默认值 |
| #8499 | feat(providers): 将本地模型管理提取为插件 | Leirunlin | XXXL | 将本地模型下载、llama.cpp 安装和服务生命周期移入专用 Plugin Provider；保留现有用户配置 |
| #8837 | fix(cli): 移除已废弃的 mission 命令 | xiaoyesoso | M | 移除孤立的 `mission` CLI 实现（在 #3860 中已废弃但从未清理）；同时关闭 #8833 |
| #8842 | fix(console): 阻止 web_search 配置模态框在未改动时保存 | BeiMu-new | S | 防抖自动保存逻辑在模态框打开时误触发，将未改动值重新保存；现改为仅在用户实际编辑后触发 |

**已合并的关键基础设施变更：**
- **本地模型插件化拆解（#8499）** 是一项大型架构变更，将 llama.cpp / MLX 生命周期与核心后端解耦，使插件更新和用户自主管理模型安装更加清晰可控。
- **Ollama 上下文窗口修正（#8236）** 修复了本地 Ollama 模型实际使用了错误上下文窗口但无任何提示的问题。
- **技能回滚安全加固（#8784）** 显著提升了多工作区技能安装的可靠性。

### 处于活跃 review 状态的重点 PR

| # | PR | 作者 | 状态 | 摘要 |
|---|----|--------|--------|---------|
| #8303 | fix(approvals): 将审批提示发送至触发审批的聊天渠道 | sdxwmlyl | Review 中, M | 修复审批提示无法送达 WeChat/Console 渠道的问题；根因定位至 #6819 引入的回归 |
| #8719 | feat(console): 支持运行时 base-path 部署 | yaozy2020 | Review 中, XL | 新增 `QWENPAW_BASE_PATH` 用于反向代理前缀部署；解除 #8714 的阻塞，与 #1853、#8177 相关 |
| #8785 | fix(media): 强制内联预算、拒绝后重新缩放、报告遗漏项 | BeiMu-new | Review 中, XXL | 修复三处媒体降级逻辑漏洞：独立字节预算与侧边限制、拒绝后重缩放、遗漏项上报 |
| #8703 | fix(sandbox): 在不依赖 securityfs 的情况下探测 Landlock | log-z | 首次贡献, M | 修复在缺少 `/sys/kernel/security/lsm` 的容器中 Landlock 能力检测失败的问题 |

### 多 PR 协同功能块（本地模型 GPU + 自动更新）

PR #8649、#8647 和 #8648 是一组协调推进的三部分功能栈，新增 llama.cpp GPU 控制、托管 MLX 引擎支持以及 Console UI 配套。合并顺序严格锁定：#8649 → #8647 → #8648。

---

## 四、社区热点

### 讨论最活跃的 Issue

1. **#8580 — Memory tag index 返回 503** *(10 条评论，自 11 月 4 日起开放)*
   - https://github.com/agentscope-ai/QwenPaw/issues/8580
   - **核心诉求：** 使用 `auto_memory_generate_tags = true` 的用户能成功生成标签，但无法读取回来。这是一个影响所有依赖 ReMe 记忆功能用户的**数据可用性 / 索引缺陷**。
   - 状态：开放中，尚无修复 PR。已存在两周——需要维护者介入分类。

2. **#8821 — Windows 系统通知：任务完成时提醒** *(3 条评论，已关闭)*
   - https://github.com/agentscope-ai/QwenPaw/issues/8821
   - **核心诉求：** 运行长时间后台任务的用户希望获得操作系统级通知，无需一直盯着浏览器标签。
   - 状态：已关闭（大概率接受为功能需求；最近 24 小时数据中未见关联 PR）。

3. **#8757 — WeChat 静默轮询死亡** *(2 条评论，自 11 月 15 日起开放)*
   - https://github.com/agentscope-ai/QwenPaw/issues/8757
   - **核心诉求：** 生产环境中使用 WeChat 的用户遭遇静默消息丢失——渠道表现健康但停止接收消息，既无错误也无日志。
   - 状态：需要调查 `platform.py` 中的错误重试循环。

### 讨论最活跃的 PR（按评论量）

1. **#8303 — 审批提示发送修复** *(Review 中, M)*
   - https://github.com/agentscope-ai/QwenPaw/pull/8303
   - **社区信号：** 此前已有两个 Issue（#6695、#6819）被提出；该修复正在活跃 review 中。用户需要所有聊天渠道都能可靠地接收审批升级通知。
   - 预计 1–2 天内合并。

2. **#8719 — 运行时 base-path 部署** *(Review 中, XL)*
   - https://github.com/agentscope-ai/QwenPaw/pull/8719
   - **社区信号：** 部署在反向代理（nginx、Caddy）后方的企业和自托管用户需要前缀路径部署功能。这是 2024 年即有请求的功能（关联 #1853）。
   - 因涉及 Console 路由变更，体积达 XL，预计需要仔细 review。

---

## 五、缺陷与稳定性

按严重程度和新鲜度排序：

| 严重程度 | Issue | 存在时长 | 状态 | 修复 PR？ |
|----------|-------|---------|--------|---------|
| 🔴 高 | #8580 Memory tag index 503 — 标签已生成但无法读取 | 17 天 | OPEN | 否 |
| 🔴 高 | #8757 WeChat 静默入站轮询死亡 | 6 天 | OPEN | 否 |
| 🟠 中 | #8123 Daily Paper 因模型输出截断失败 | 44 天 | OPEN | 否 |
| 🟠 中 | #8505 裸 APIError 不触发重试（已由 #8512 修复） | 22 天 | CLOSED | ✅ #8512 已合并 |
| 🟠 中 | #8836 工具配置含密码时导致页面刷新循环 | 1 天 | OPEN | 否 |
| 🟠 中 | #8833 Mission CLI `/api` 前缀重复 | 1 天 | OPEN | ✅ #8837 已关闭 |
| 🟠 中 | #8832 CLI 健康检查使用了不支持的 HEAD 方法 | 1 天 | OPEN | 否 |
| 🟡 低 | #8845 Markdown 表格溢出消息气泡 | 1 天 | OPEN | 否 |
| 🟡 低 | #8844 消息列表不支持键盘聚焦滚动 | 1 天 | OPEN | 否 |
| 🟡 低 | #8839 Android Pad 按钮溢出 UI | 1 天 | OPEN | 否 |
| 🟡 低 | #8840 LICENSE 拼写错误（多了一个 "the"） | 1 天 | OPEN | 否 |

**稳定性评估：** #8835（Windows 文件访问重试）和 #8784（技能回滚加固）的合并直接改善了两个已知崩溃/取消场景。然而，两条高严重性开放缺陷（#8580、#8757）均为静默失败、无错误日志——是下一发布周期的最高优先级。

---

## 六、功能需求与路线图信号

| # | 需求 | 评论数 | 近期纳入可能性 |
|---|---------|----------|-----------------------------------|
| #8821 | Windows 原生通知：任务完成时提醒 | 3 | 高 — 已关闭，可能即将有 PR |
| #8719 | 运行时 `QWENPAW_BASE_PATH` 支持反向代理部署 | Review 中 | 高 — PR 处于活跃 review 中（XL） |
| #8580（副作用） | 内存标签重建 / 修复机制 | 6 | 中 — 取决于 #8580 修复 PR 合并 |
| #8303（功能） | 审批路由跨渠道覆盖 | Review 中 | 高 — PR 就绪，关闭长期回归缺陷 |
| #8844 | 消息列表键盘导航 | 1 | 低-中 — UI 增强，暂无 PR |

**路线图信号：** 三部分本地模型管理栈（#8649/#8647/#8648）是面向本地 LLM 用户（llama.cpp GPU 控制、Apple Silicon 上的 MLX、统一 Console UI）的重要功能。其合并将大概率构成一个 minor 或 major 版本。

---

## 七、用户反馈摘要

**今日用户痛点：**

- **生产效率中断：** 运行长时间后台 Agent 的用户需要操作系统级通知（#8821）——目前需要持续盯着浏览器标签。
- **生产环境可靠性：** WeChat 渠道静默消息丢失（#8757）在生产环境中尤为致命：系统表现健康但消息被静默丢弃，且无日志佐证。
- **记忆功能信任受损：** 标签生成流程完成但标签无法读取（#8580），导致用户对 ReMe 记忆系统的信任在两周无解的情况下持续流失。
- **无障碍访问缺口：** 两个独立 UI 问题（消息列表不支持键盘滚动 #8844；Markdown 表格溢出 #8845）影响了非鼠标设备用户和宽屏用户——属于当前版本的可用性回归。
- **企业部署障碍：** 缺少 base-path 支持（#8719）使标准反向代理后方的自托管用户受阻。

**积极信号：**
- PR 活跃度极高（41 次更新），说明社区贡献者参与度高。
- #8821（Windows 通知）关闭以及 #8719 正在 review 中，表明对用户生产力和部署需求的响应速度。
- XXXL 规模的本地模型插件化拆解（#8499）体现了社区长期呼吁的架构演进方向。

---

## 八、积压事项关注

重要但缺少维护者关注或面临过时风险的事项：

| 事项 | 类型 | 存在时长 | 问题 |
|------|------|---------|-----|
| #8580 | Issue | 17 天 | 高严重性内存缺陷——无 assignee，无修复 PR |
| #8123 | Issue | 44 天 | Daily Paper 截断错误——仍开放，评论数少 |
| #8757 | Issue | 6 天 | WeChat 静默死亡——需要调查 `platform.py` 错误循环 |
| #8649 / #8647 / #8648 | PRs | 12 天 | 多部分本地模型功能——需顺序合并，需维护者协调 |
| #8479 | PR | 24 天 | Office 技能同步 Anthropic 更新——XXXL，首提贡献者，review 中 |
| #8719 | PR | 8 天 | Base-path 部署——XL，影响路由，需仔细 review |
| #8303 | PR | 34 天 | 审批提示发送——回归缺陷，已 review 但未合并 |

**建议：** 在下一版本发布前优先处理 #8580 和 #8757 的分类。本地模型功能块（#8649→#8647→#8648）应按依赖顺序 review，避免阻塞 LXD-8 的贡献。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. This is a large document with tables, lists, headings, and technical content. Let me translate it carefully, following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**ZeroClaw Project Digest — 2026-11-21**

Let me think about the best way to translate this. ZeroClaw is a project name and should stay as-is. The date format should stay as-is since it's numeric.

**1. Today's Overview** - 今日概览

**2. Releases** - 发布

**3. Project Progress** - 项目进展

**4. Community Hot Topics** - 社区热点

**5. Bugs & Stability** - 缺陷与稳定性

**6. Feature Requests & Roadmap Signals** - 功能需求与路线图信号

**7. User Feedback Summary** - 用户反馈摘要

**8. Backlog Watch** - 待办关注

Let me translate this carefully...

Actually, let me think about what "ZeroClaw" means. It's a project name, so it should stay as-is. "Digest" can be translated as "项目摘要" or "项目速览".

Let me go through this systematically:

---

# ZeroClaw 项目摘要 — 2026-11-21

## 1. 今日概览

ZeroClaw 项目今日活跃度较高，过去 24 小时内有 13 个 issues 和 50 个 PRs 更新，但无新版本发布。项目正处于重要的清理和现代化阶段：多个 PRs 正在删除无用代码（70 个孤立的 .rs 源文件、165 个未使用的仪表盘国际化键值、69 个已提交的文件），同时多个安全关键修复正在推进中——包括一个 WASI 沙箱漏洞补丁（RUSTSEC-2026-0587）和 OIDC token 兼容性改进。社区正在积极讨论内存系统可靠性。

过去 24 小时内没有新版本发布。今天共完成 50 个 PRs 更新，包括清理代码库中的冗余文件和国际化的无用键值，删除多个已提交的无用脚本和工件，以及一项关键的安全修复。

多个大型清理工作正在进行中，由 JordanTheJet 主导的项目维护工作显示出健康的债务偿还态势，而安全补丁则从发布到修复仅用了一天时间。Issue #8794 揭示了一个关键的用户体验缺陷——在工具执行过程中停止 agent 会导致完整的上下文丢失，而 RFC #12422 则推进了一个重要的安全模型变革。

项目稳定性存在风险，2 个 S1 缺陷影响了核心工作流，特别是网关会话状态 bug 会跨重启持续存在且无法通过 Stop 命令清除。同时内存系统显示出数据完整性问题，目前没有针对任何报告缺陷的修复 PR，表明需要维护者进行分类。

即将推出的功能包括 Antigravity CLI 集成和 OIDC 范围可配置性等安全和清理补丁。内存可靠性、上下文中断丢失和 Telegram 频道阻塞等问题正在影响用户体验，而 WhatsApp Web 引用回复功能则因出站提及缺陷而被阻止。

项目需要立即关注三个高优先级问题：已存在约 4.5 个月的 S1 工作流阻塞程序、网关状态损坏以及 Telegram 频道完全阻塞的情况。大型 PR 如 Antigravity CLI 集成和语音设置 WebUI 也在等待审查，存在停滞风险。

项目整体健康状况为中等水平。高活动量反映了活跃的开发状态，但今天没有合并的 PR，加上 2 个未修复的 S1 缺陷和 1 个关键的网关状态 bug 需要引起注意。清理工作的推进势头良好，但内存和频道集成的可靠性问题应该优先处理。

Looking at the key metrics, there are 13 issues and 50 PRs updated in the past 24 hours with no new releases. Two critical S1 bugs remain unfixed along with three high-risk issues, though there are four active cleanup PRs and one security patch addressing a WASI vulnerability. The metrics show moderate health overall, but the unfixed critical bugs and lack of PR merges today suggest these stability concerns need immediate attention. I'm seeing a critical issue with the Telegram voice transcription failure that blocks all subsequent messages, along with other high-risk bugs in the session-state gateway and memory recall. The project has active cleanup PRs but no fix PRs yet for these reported bugs, and the lack of merged PRs today combined with two unfixed critical issues points to a moderate overall health status that needs attention. There are also stalled PRs to monitor.
</think>


# ZeroClaw 项目摘要 — 2026-11-21

## 1. 今日概览

ZeroClaw 项目今日活跃度较高，过去 24 小时内有 13 个 issues 和 50 个 PRs 更新，但无新版本发布。项目正处于重要的清理和现代化阶段：多个 PRs 正在删除无用代码（70 个孤立的 `.rs` 源文件、165 个未使用的仪表盘国际化键值、69 个已提交的文件），同时多个安全关键修复正在推进中——包括一个 WASI 沙箱漏洞补丁（RUSTSEC-2026-0587）和 OIDC token 兼容性改进。社区正在积极讨论内存系统可靠性和浏览器工具功能，这反映了实际使用场景的不断增长。

---

## 2. 发布

**今日无新版本发布。**

无最近发布信息可用。过去 24 小时内无标记版本发布。

---

## 3. 项目进展

| PR | 作者 | 概要 | 规模 |
|----|------|------|------|
| [#12615](https://github.com/zeroclaw-labs/zeroclaw/pull/12615) | JordanTheJet | **清理：** 删除 70 个没有任何 crate 编译的 `.rs` 源文件——减少干扰和审查负担 | L |
| [#12617](https://github.com/zeroclaw-labs/zeroclaw/pull/12617) | JordanTheJet | **Web 清理：** 删除 165 个未使用的仪表盘 i18n 键值和 31 个 locale 中的 4,756 条翻译 | XL |
| [#12618](https://github.com/zeroclaw-labs/zeroclaw/pull/12618) | JordanTheJet | **仓库卫生：** 删除 69 个已提交的文件制品和死脚本；更新 book/workflow 导航 | L |
| [#12616](https://github.com/zeroclaw-labs/zeroclaw/pull/12616) | JordanTheJet | **破坏性重构：** 删除 6 个在 lib 和 binary target 中没有任何使用的根模块 | L |
| [#12610](https://github.com/zeroclaw-labs/zeroclaw/pull/12610) | tidux | **安全修复：** 升级 `wasmtime-wasi` 至 48.0.10，修复 RUSTSEC-2026-0587（CVSS 7.5，Windows 上 WASI 文件系统沙箱逃逸） | XS |
| [#12479](https://github.com/zeroclaw-labs/zeroclaw/pull/12479) | mov-xound-glitch | **Provider 修复：** 发送 `drop_block`，使编辑后的对话历史不再导致 Anthropic thinking 请求失败 | L |
| [#11815](https://github.com/zeroclaw-labs/zeroclaw/pull/11815) | Audacity88 | **工具修复：** 将用户放弃的 `ask_user` 选项报告为成功答案，而不是触发重试错误 | S |

**评估：** 1:49 的 open-to-merged PR 比例反映了活跃的开发状态而非停滞。JordanTheJet 提交的大型清理 PRs 表明了有意进行的技术债务清理。安全补丁得到了快速处理（2026-11-19 发布，2026-11-20 修复）。

---

## 4. 社区热点

### 评论最多的 Issues（按评论数排序）

| Issue | 作者 | 主题 | 评论数 |
|-------|------|------|--------|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | susyabashti | **[P1 Bug] Web 仪表盘：agent 在工作过程中被停止会抹除工具调用和推理上下文** | 6 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | CastelloBrancoTecnologia | **RFC：operator 管理服务凭证的受限使用** | 5 |
| [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | mov-xound-glitch | **功能：内存召回外部重排序阶段** | 2 |
| [#12613](https://github.com/zeroclaw-labs/zeroclaw/issues/12613) | JordanTheJet | **跟踪：死代码清理轮次（死代码、惰性特性、注释清理）** | 1 |

**分析：**

- **Issue #8794**（6 条评论）揭示了一个严重的 UX 缺陷：在工具执行过程中停止 agent 会导致完全丢失上下文——工具调用和推理过程被丢弃，仿佛从未发生过。这完全阻断了工作流，且自 2026 年 7 月以来一直开放，表明问题复杂度较高。
- **RFC #12422**（5 条评论）涉及一个重要的安全模型变更：operator 需要授权 agent 执行服务任务，同时*不*向模型或聊天日志暴露凭证。这是企业部署的基础安全增强。
- **Issue #12022** 提出了一个可选的内存召回外部重排序阶段，允许 operator 配置 `/v1/rerank` 端点以改进候选项选择。

---

## 5. 缺陷与稳定性

### 报告的缺陷（按严重程度排序）

| 严重程度 | Issue | 概要 | 修复 PR？ |
|----------|-------|------|----------|
| **S1** | [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | Web UI 在工作中间停止会抹除工具调用和推理上下文 | 无 |
| **S1** | [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | Telegram 语音转录失败会阻塞后续所有消息（offset 永远不会前进） | 无 |
| **高风险** | [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | Gateway 会话状态写入失败导致 `running` 状态持续到重启；Stop 无法清除 | 无 |
| **S2** | [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | 内存召回遗漏已保存的事实，保存错误的答案，修正后两者都保留 | 无 |
| **S2** | [#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606) | `a2a.client.peers` 无法通过配置设置——前缀错误（`a2a_client` vs `a2a`） | 无 |
| **S2** | [#12604](https://github.com/zeroclaw-labs/zeroclaw/issues/12604) | FastMCP 工具返回字符串的 MCP 结果被模型接收两次 | 无 |
| **S3** | [#12601](https://github.com/zeroclaw-labs/zeroclaw/issues/12601) | PR 风险测试在错误的 sha 位置读取 base 侧源码 | 无 |

**稳定性评估：**  
- **2 个 S1 缺陷**代表了影响核心功能的工作流阻断器。
- **Gateway 会话状态缺陷 (#12619)** 尤其令人担忧——它会跨重启持久化且无法通过 Stop 命令清除，需要手动干预。
- **内存系统 (#12607)** 显示出数据完整性问题（损坏/三重存储）。
- 所有报告的缺陷都没有修复 PR，表明需要维护者进行分类。

---

## 6. 功能需求与路线图信号

### 用户请求的功能

| Issue | 作者 | 概要 | 可行性 |
|-------|------|------|--------|
| [#12614](https://github.com/zeroclaw-labs/zeroclaw/issues/12614) | danieliyahu1 | **浏览器工具需要文件上传操作** 以支持 `<input type="file">` 元素 | 高——底层 CLI（`agent-browser`）已支持 |
| [#12611](https://github.com/zeroclaw-labs/zeroclaw/issues/12611) | JordanTheJet | **废弃本地 LLM 响应缓存**（几乎从不命中；4 个配置键 + `response_cache.db`） | 高——已在 PR [#12612](https://github.com/zeroclaw-labs/zeroclaw/pull/12612) 中 |
| [#12598](https://github.com/zeroclaw-labs/zeroclaw/issues/12598) | nsetyo | **WhatsApp Web：将 agent 回复作为引用回复发送** 以保持群组上下文 | 中——被 #10976（出站 mentions 损坏）阻塞 |
| [#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | mov-xound-glitch | **内存召回：可选的外部重排序阶段** 通过 operator 配置的 `/v1/rerank` 端点 | 中——提出了实现方案，需要 review |

### 表明方向的在推进 PRs

| PR | 概要 | 路线图信号 |
|----|------|-----------|
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | 将 Antigravity CLI（`agy`）添加为编码委托工具（替换已废弃的 Gemini CLI） | 工具委托生态扩展 |
| [#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596) | 独立控制浏览器用户名/密码和 TOTP 访问范围 | 凭证粒度化 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | 在 WebUI 中添加配对设备语音设置和聊天控制 | 无障碍 / UX |
| [#12497](https://github.com/zeroclaw-labs/zeroclaw/pull/12497) | 使 OAuth scopes 可按 OIDC provider 配置 | 企业身份 |

**路线图预测：** 下一版本可能包含：
1. 响应缓存移除（废弃流程完成）
2. Antigravity CLI 集成
3. OIDC scope 可配置性
4. 死代码清理（70+ 文件）
5. 安全补丁（WASI、OIDC）

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 影响 |
|------|------|------|
| **内存不可靠** | Issues [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607)、[#12022](https://github.com/zeroclaw-labs/zeroclaw/issues/12022) | 用户报告事实丢失、错误答案被保存、修正后出现重复。请求外部重排序以提高召回准确性。 |
| **中断时上下文丢失** | Issue [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | 在中间停止 agent 会丢弃所有进度——长时间运行任务的完全 UX 失败。 |
| **Telegram 频道阻塞** | Issue [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | 语音转录失败会阻塞后续所有消息，而不仅仅是语音消息。 |
| **配置前缀不一致** | Issue [#12606](https://github.com/zeroclaw-labs/zeroclaw/issues/12606) | A2A peer 配置无法通过标准配置方式设置——对 operator 来说很脆弱。 |

### 积极信号

- **安全关注：** RFC #12422 和多个 OIDC PRs 表明了认真的企业级身份安全工作。
- **维护速度：** 一天内 4 个大型清理 PRs 表明了健康的项目治理。
- **工具生态扩展：** Antigravity CLI 集成反映了响应第三方变化的适应性（Google 废弃了 Gemini CLI）。

---

## 8. 待办关注

### 需要维护者关注的 Issues

| Issue | 存在时间 | 优先级 | 状态 | 关注点 |
|-------|----------|--------|------|--------|
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | 约 4.5 个月 | P1 / 高风险 | 开放 | 长期存在的 S1 工作流阻断器；6 条评论但无修复 |
| [#12619](https://github.com/zeroclaw-labs/zeroclaw/issues/12619) | <1 天 | 高风险 | 开放 | Gateway 状态损坏；对会话管理至关重要 |
| [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | 1 天 | S1 | 开放 | Telegram 频道对所有用户阻塞 |
| [#12607](https://github.com/zeroclaw-labs/zeroclaw/issues/12607) | 1 天 | S2 | 开放 | 内存数据完整性；面向用户的损坏 |

### 停滞的 PRs（今日无活动）

| PR | 存在时间 | 概要 | 风险 |
|----|----------|------|------|
| [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) | 约 2 个月 | Antigravity CLI 集成 | 规模 XL；需要 review |
| [#11885](https://github.com/zeroclaw-labs/zeroclaw/pull/11885) | 约 1 个月 | Goal V1 提案 8/12（正式 review FAIL） | 过时；草稿状态不明 |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | 约 2 周 | 语音设置 WebUI | 规模 XL；需要 review |

---

## 摘要表

| 指标 | 数值 |
|------|------|
| 过去 24 小时更新的 Issues | 13 |
| 过去 24 小时更新的 PRs | 50 |
| 新版本发布 | 0 |
| S1 缺陷 | 2 |
| 高风险 Issues | 3 |
| 活跃的清理 PRs | 4 |
| 安全补丁 | 1（WASI RUSTSEC） |

**整体健康状况：** 中等。较高的活动量表明活跃的开发状态。然而，今日 0 个 PRs 合并，以及 2 个未修复的 S1 缺陷（加 1 个关键 gateway 状态 bug）需要关注。清理势头强劲，但内存和频道集成的可靠性问题应优先处理。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*