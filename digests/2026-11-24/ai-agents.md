# OpenClaw 生态日报 2026-11-24

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-24 06:18 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this English technical report about the OpenClaw project into Simplified Chinese. I need to:

1. Translate all the text content while preserving the structure
2. Keep all markdown elements exactly as they are (headings, tables, lists, etc.)
3. Keep URLs, usernames, issue numbers, version tags, file paths in their original form
4. Use natural technical Chinese that sounds like a Chinese developer newsletter

Let me translate section by section:

**Section 1: Today's Overview**
- "OpenClaw demonstrates high-intensity activity" → OpenClaw 在 2026 年 11 月 24 日展现出高强度活动
- "500 issues and 500 PRs updated in the last 24 hours" → 过去 24 小时内有 500 个 issue 和 500 个 PR 更新
- "velocity indicating active development across multiple fronts" → 体现了多个战线上的活跃开发
- "production hardening" → 生产环境加固

**Section 2: Releases**
- "Release date" → 发布于
- "Contributors" → 贡献者
- "Highlights" → 重点更新
- "Update recovery" → 更新恢复
- "Reliable delegated work" → 可靠的委托工作

**Section 3: Project Progress**
- "Merged/Closed PRs Today" → 今日合并/关闭的 PR
- "Notable Open PRs" → 值得关注的开放 PR
- "Size" → 规模
- "Status" → 状态

**Section 4: Community Hot Topics**
- "Top Issues by Engagement" → 社区热议议题
- "Summary" → 摘要
- "Analysis" → 分析
- "Status" → 状态

**Section 5: Bugs & Stability**
- "Critical Bugs (P0)" → 关键缺陷 (P0)


- "High Priority Bugs (P1)" → 高优先级缺陷 (P1)
- "Stability Concerns" → 稳定性问题
- "Notable Regression" → 值得关注的回归问题

**Section 6: Feature Requests & Roadmap Signals**
- "High-Impact Feature Requests" → 高影响力功能请求
- "Roadmap Signals" → 路线图信号

**Section 7: User Feedback Summary**
- "Pain Points" → 痛点
- "Positive Signals" → 正面信号

**Section 8: Backlog Watch**
- "Long-Unanswered Important Issues" → 长期未回复的重要议题
- "Issues Needing Maintainer Attention" → 需要维护者关注的议题
- "Stale Issues Without Fix PRs" → 无修复 PR 的陈旧议题

Now I'll proceed with the full translation, ensuring I maintain the Markdown structure and preserve all technical elements.
</think>


# OpenClaw 项目摘要 — 2026-11-24

---

## 1. 今日概览

OpenClaw 在 2026 年 11 月 24 日展现出极高的活跃度，过去 24 小时内有 500 个 issue 和 500 个 PR 更新——这种开发速度表明项目在多条战线上并行推进。项目发布了两版 beta（v2026.11.10-beta.2 和 beta.3），聚焦于更新恢复可靠性和后台工作稳定性，显示出向生产环境加固方向的大力推进。社区参与度保持强劲，顶配 issue（#182891，prompt 缓存复用）获得了 27 条评论，大量 PR 等待维护者审核。P0/P1 级别的缺陷值得关注，包括 Discord 连接回退和 gRPC 工具执行失败等问题，需要立即处理。

---

## 2. 版本发布

### v2026.11.10-beta.3
**发布于：** 2026 年 11 月 | **贡献者：** @fuller-stack-dev

**重点更新：**
- **更新恢复：** 现在可以从中断的包和源更新中恢复，包括跨越 schema 变更或机器重启的更新。修复问题 #200273、#200366、#200460、#200866、#200994、#201600。

- **可靠的委托工作：** 在崩溃场景下保留已完成的后台工作。

---

### v2026.11.10-beta.2
**发布于：** 2026 年 11 月 | **贡献者：** @fuller-stack-dev

**重点更新：**
- **更新恢复：** 包替换中断时保持 OpenClaw 可运行；崩溃或重启后可安全完成后续更新。修复问题 #200273、#200366、#200460、#200550、#200994。
- **可靠的后台工作：** 在中断事件中保留已完成的工作。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 规模 | 领域 |
|----|------|------|------|
| [#204367](https://github.com/openclaw/openclaw/pull/204367) | test(qa): 断言失败子状态在父历史中仅出现一次 | XS | qa-lab |
| [#204426](https://github.com/openclaw/openclaw/pull/204426) | fix(update): 将已安装的制品报告为当前版本 | S | scripts |
| [#204424](https://github.com/openclaw/openclaw/pull/204424) | fix(gateway): 在 diff 基线捕获前报告已移除的 worktree | XS | gateway |
| [#204422](https://github.com/openclaw/openclaw/pull/204422) | test: 使 OpenAI 版本和 CI 运行时 fixture 支持预发布版 | XS | - |
| [#204423](https://github.com/openclaw/openclaw/pull/204423) | test: 修复 Doctor 截断和 Telegram 自动化 fixture | S | commands |
| [#204430](https://github.com/openclaw/openclaw/pull/204430) | chore(release): 将快速通道限制提升至 20 次提交和 15k 行 | XS | scripts |
| [#204434](https://github.com/openclaw/openclaw/pull/204434) | Publish openclaw/salty-krill-7c7f9b | XL | docs |

**值得关注的开放 PR：**

| PR | 标题 | 规模 | 状态 | 关键领域 |
|----|------|------|------|----------|
| [#204436](https://github.com/openclaw/openclaw/pull/204436) | fix(sessions): 使用请求者的保存排序 | XL | Open | web-ui、macos、android、gateway |
| [#204344](https://github.com/openclaw/openclaw/pull/204344) | fix: 阻止健康检查回滚正常的 legacy Git 安装 | XL | Ready for review | gateway、cli |
| [#204382](https://github.com/openclaw/openclaw/pull/204382) | fix(release): 简化验证豁免策略 | XL | Waiting on author | scripts |
| [#204427](https://github.com/openclaw/openclaw/pull/204427) | fix(release): 验证两种更新回执格式 | M | Ready for review | scripts、docker |
| [#204438](https://github.com/openclaw/openclaw/pull/204438) | fix(release): 在 main 分支上对保留的发布制品进行认证 | XL | Needs repro | scripts、docker |
| [#202711](https://github.com/openclaw/openclaw/pull/202711) | feat: 为重启后的恢复准备 worker 布局 | L | Waiting on author | gateway、agents |
| [#202141](https://github.com/openclaw/openclaw/pull/202141) | fix: 使 Web 首次运行设置与 Mac 欢迎页保持一致 | XL | Ready for review | macos、web-ui、linux |

---

## 4. 社区热议

### 按互动量排列的热门议题

**#182891** — Prompt 缓存从未被复用（27 条评论）
- **严重程度：** P1，Silver shellfish
- **链接：** [openclaw/openclaw#182891](https://github.com/openclaw/openclaw/issues/182891)
- **摘要：** 由于 envelope 重写、runtimeContextCarrier 变更以及同轮内的莫名下降，每次请求都出现 `cache read dropped N -> 0`
- **分析：** 持续的缓存低效问题导致重复的 token 开销；正在积极讨论根本原因和临时解决方案

**#157989** — 插件源捕获每个 CLI 命令重写约 1.1–1.4 GB（24 条评论）
- **严重程度：** P1，Diamond lobster
- **链接：** [openclaw/openclaw#157989](https://github.com/openclaw/openclaw/issues/157989)
- **摘要：** 每个进程通过字节复制和哈希方式将每个文件加载到新的捕获目录来加载插件
- **分析：** 严重的 SSD 磨损问题；用户请求内容寻址缓存（#181784）

**#143017** — Prompt 缓存：会话重写其前缀的五种方式（19 条评论）
- **严重程度：** P2，Diamond lobster
- **链接：** [openclaw/openclaw#143017](https://github.com/openclaw/openclaw/issues/143017)
- **摘要：** 生产环境中测量到 21.3M 缓存写入 token；识别出多种重写向量
- **分析：** 缓存前缀处理中的深层架构问题；与 #182891 和 #186683 相关

**#196199** — Codex 助手补全无法恢复父会话（17 条评论）
- **严重程度：** P1，Silver shellfish
- **链接：** [openclaw/openclaw#196199](https://github.com/openclaw/openclaw/issues/196199)
- **摘要：** 2026.10.10 以来的回退：向原生 Codex 助手委托工作失败，导致目标暂停、用户被锁定
- **分析：** 影响多智能体架构的关键工作流中断

**#158127** — 多智能体运行时发布失败（16 条评论）**[已关闭]**
- **严重程度：** P2，Silver shellfish
- **链接：** [openclaw/openclaw#158127](https://github.com/openclaw/openclaw/issues/158127)
- **摘要：** 新鲜的非传递性 Codex 支持的智能体回合在产生回复前间歇性失败
- **状态：** 已关闭，未关联修复 PR

---

## 5. 缺陷与稳定性

### 关键缺陷 (P0)

| 问题 | 标题 | 严重程度 | 影响 | 状态 |
|------|------|----------|------|------|
| [#203869](https://github.com/openclaw/openclaw/issues/203869) | 工具执行失败：gRPC code-mode session closed / BrokenPipe | 🦐 Gold shrimp | **UX 发布阻塞** | Open，Beta blocker: Yes |
| [#201468](https://github.com/openclaw/openclaw/issues/201468) | macOS 启动提示给出通用凭证恢复步骤 | 🦞 Diamond lobster | **UX 发布阻塞** | Open |

### 高优先级缺陷 (P1)

| 问题 | 标题 | 严重程度 | 影响 | 备注 |
|------|------|----------|------|------|
| [#204283](https://github.com/openclaw/openclaw/issues/204283) | Discord provider 永远无法到达客户端初始化（2026.11.7） | 🦪 Silver shellfish | **消息丢失** | 回退；静默健康监控重启循环 |
| [#203442](https://github.com/openclaw/openclaw/issues/203442) | 更新激活 Doctor 失败："Plugin deepseek Doctor source must be prepared" | 🦪 Silver shellfish | **UX 摩擦** | 2026.11.4 → 2026.11.10-beta.1 |
| [#196803](https://github.com/openclaw/openclaw/issues/196803) | Codex 后工具终态化失败，context_unavailable | 🦪 Silver shellfish | **会话状态、消息丢失** | 子结果不可访问 |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | Codex 助手补全无法恢复父会话 | 🦪 Silver shellfish | **会话状态、消息丢失** | 2026.10.10 以来的回退 |
| [#195497](https://github.com/openclaw/openclaw/issues/195497) | 17 小时内内存增长至 ~3G（v2026.11.1） | 🦐 Gold shrimp | **崩溃循环** | Gateway 进程内存泄漏 |
| [#201974](https://github.com/openclaw/openclaw/issues/201974) | Direct npm install 回退导致 plugin-skills 链接损坏 | 🦐 Gold shrimp | **UX 摩擦** | Gateway 拒绝启动 |

### 稳定性问题

**崩溃/循环问题：**
- [#161403](https://github.com/openclaw/openclaw/issues/161403)：缓慢的健康智能体数据库验证（macOS 上 128s）
- [#195497](https://github.com/openclaw/openclaw/issues/195497)：17 小时内内存增长至 ~3G
- [#204283](https://github.com/openclaw/openclaw/issues/204283)：Discord 静默健康监控重启循环

**值得关注的回归：**
- [#186326](https://github.com/openclaw/openclaw/issues/186326)：Windows 托管更新在 npm 布局修复后触发 SQLite 文件锁超时

---

## 6. 功能请求与路线图信号

### 高影响力功能请求

| 问题 | 标题 | 评论数 | 优先级 | 链接 |
|------|------|--------|--------|------|
| #55792 | 网关重启后补收漏接的入站消息 | 10 | P1 | [链接](https://github.com/openclaw/openclaw/issues/55792) |
| #6757 | 智能体触发的上下文压缩（self-compact 工具） | 8 | P2 | [链接](https://github.com/openclaw/openclaw/issues/6757) |
| #166586 | 消费配置 MCP 服务器的 MCP Events | 10 | P3 | [链接](https://github.com/openclaw/openclaw/issues/166586) |
| #136271 | msteams：动态解析团队 SharePoint 站点 | 13 | P2 | [链接](https://github.com/openclaw/openclaw/issues/136271) |
| #138366 | 让记忆槽所有者驱动 Dreams 页面 | 14 | P2 | [链接](https://github.com/openclaw/openclaw/issues/138366) |

### 路线图信号

- **会话管理：** 多个 PR（#204436、#204424）处理会话排序、工作树处理和会话恢复——表明会话管理是一个重点领域
- **MCP 协议：** #179382 请求完整 A2A 协议 v1.0 合规；#166586 想要 MCP 事件消费
- **轻量内存：** #202379 追踪轻量部署的内存缩减工作
- **更新基础设施：** 两个版本都聚焦于更新恢复，表明更新管道的加固工作正在进行中

---

## 7. 用户反馈摘要

### 痛点

**1. 更新与安装可靠性**
- 大型安装时 npm 超时（#200747）
- 更新激活 Doctor 失败（#203442）
- Direct npm install 留下损坏的插件链接（#201974）
- Windows 更新期间 SQLite 文件锁超时（#186326）

**2. 资源消耗**
- 插件源捕获每个 CLI 命令消耗 1.1–1.4 GB（#157989）
- 17 小时内内存增长至 ~3G（#195497）
- Prompt 缓存低效浪费 21.3M token（#143017）
- view_image 工具在转录中持久化完整 base64（#143973）

**3. 多智能体工作流中断**
- Codex 助手补全自 2026.10.10 起失败（#196199）
- 子智能体通信期间的会话写入器声明冲突（#164533）
- 孤立的「运行中」会话窗口持续数周（#188377）

**4. 渠道集成**
- Discord provider 启用 nativeSkills 后无法初始化（#204283）
- Matrix 房间卡在「Plugin matrix consumer is closed」（#191476）
- Telegram 独立 PDF 分发失败（#187588）

### 正面信号

- Beta.2/.3 中的更新恢复改进获得社区贡献者认可（@fuller-stack-dev）
- Web UI 改进（#204432、#204433、#204337）显示活跃的 UX 投入
- 跨平台一致性努力（#202141、#204436）表明桌面端优先改进

---

## 8. 待办事项追踪

### 长期未回复的重要议题

| 问题 | 标题 | 历时 | 评论数 | 状态 | 链接 |
|------|------|------|--------|------|------|
| #55792 | 网关重启后补收漏接的入站消息 | ~8 个月 | 10 | Open，Stale | [链接](https://github.com/openclaw/openclaw/issues/55792) |
| #6757 | 智能体触发的上下文压缩 | ~9 个月 | 8 | Open | [链接](https://github.com/openclaw/openclaw/issues/6757) |
| #107487 | /acp close 不清除 acpx FileSessionStore | ~4 个月 | 6 | Open | [链接](https://github.com/openclaw/openclaw/issues/107487) |
| #181784 | 重用已验证的插件源捕获（CAS） | ~1 个月 | 6 | Open，Stale | [链接](https://github.com/openclaw/openclaw/issues/181784) |
| #188377 | 孤立的「运行中」会话窗口持续数周 | ~25 天 | 6 | Open，Stale | [链接](https://github.com/openclaw/openclaw/issues/188377) |

### 需要维护者关注的议题

| 问题 | 标题 | 标签 | 链接 |
|------|------|------|------|
| #158127 | 多智能体运行时发布失败 | clawsweeper:needs-maintainer-review | [链接](https://github.com/openclaw/openclaw/issues/158127) |
| #161403 | 缓慢的健康智能体数据库验证 | clawsweeper:needs-maintainer-review | [链接](https://github.com/openclaw/openclaw/issues/161403) |
| #196199 | Codex 助手补全无法恢复父会话 | clawsweeper:needs-maintainer-review | [链接](https://github.com/openclaw/openclaw/issues/196199) |
| #196803 | Codex 后工具终态化失败 | clawsweeper:needs-maintainer-review | [链接](https://github.com/openclaw/openclaw/issues/196803) |
| #204283 | Discord provider 永远无法到达客户端初始化 | clawsweeper:needs-maintainer-review | [链接](https://github.com/openclaw/openclaw/issues/204283) |

### 无修复 PR 的陈旧议题

- #143017（Prompt 缓存前缀重写）
- #143375（PDF 工具依赖 vision 模型）
- #143973（view_image base64 膨胀）
- #157989（插件源捕获 SSD 磨损）
- #182891（Prompt 缓存从未被复用）

---

*摘要数据来源：OpenClaw 仓库 — github.com/openclaw/openclaw*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it maintaining all the Markdown structure, tables, and technical content exactly as specified.

Let me translate this carefully, keeping the technical register appropriate for a Chinese developer newsletter.
</think>


# Personal AI Assistant & Agent 开源生态 — 跨项目对比报告

## 2026-11-24

---

## 1. 生态概览

当日个人 AI 助手与 Agent 开源生态呈现清晰的层级结构：**OpenClaw** 以 10 倍于其他项目的 issue/PR 吞吐量占据旗舰参考实现的地位，**Hermes Agent** 与 **ZeroClaw** 构成第二梯队的高活跃度开发阵营，**QwenPaw** 以适度但稳定的节奏位居第三，**IronClaw** 无活动数据，可能属于早期或休眠项目。所有活跃项目围绕五个跨领域主题趋同：**会话中断后的状态持久化**、**多 Agent 协调与委托**、**资源消耗治理**（内存、Token、磁盘 I/O）、**渠道集成广度**以及**安全隔离边界**。该生态正从概念验证级别的单用户工具快速演进为面向生产环境、多租户、多协议多样化的 Agent 平台。

---

## 2. 活跃度对比

| 项目 | 24h 内更新的 Issue | 开放 Issue | 已关闭 Issue | 24h 内更新的 PR | 开放 PR | 已合并/关闭 PR | 24h 内发布版本 | 活跃度层级 |
|---------|---------------------|-------------|---------------|-------------------|----------|--------------------|----------------|---------------|
| **OpenClaw** | 500 | 338 | 162 | 500 | 298 | 202 | 2（beta.2, beta.3）| 🚀 一线 — 超高活跃 |
| **Hermes Agent** | 50 | 36 | 14 | 50 | 49 | 1 | 1（canary v0.23.3）| ⚡ 二线 — 高活跃 |
| **ZeroClaw** | 49 | 21 | 28 | 50 | 45 | 5 | 0 | ⚡ 二线 — 高活跃 |
| **QwenPaw** | 27 | 20 | 7 | 36 | 28 | 8 | 0 | 🔧 三线 — 活跃 |
| **IronClaw** | — | — | — | — | — | — | — | ❓ 未知 |

### 衍生健康指标

| 指标 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|--------|----------|--------------|----------|---------|
| **Issue 关闭率** | 32% | 28% | 57% | 26% |
| **PR 合并率** | 40% | 2% | 10% | 22% |
| **发布节奏** | ✅ 高速（2 个 beta）| ✅ 中速（1 个 canary）| ⚠️ 今日无发布 | ⚠️ 今日无发布 |
| **社区积压** | 大量（P0/P1 bugs）| 增长中（49 个 PR）| 增长中（45 个 PR）| 可控 |
| **陈旧 Issue 比例** | 中等 | 低 | 中等 | 低 |

---

## 3. OpenClaw 的定位

### 相对竞品的优势

| 维度 | OpenClaw | 竞品 |
|-----------|----------|-------|
| **社区规模** | 500 issues/PRs/24h — 10 倍于竞品量级 | Hermes/ZeroClaw 约 50；QwenPaw 约 27 |
| **发布节奏** | 单周期 2 个 beta 版本 | 0–1 个版本；Hermes 有 1 个 canary |
| **Bug 响应成熟度** | 正式严重等级体系（P0–P3），正式 bug 积压管理流程 | 形式较松散；Hermes 使用 `needs-maintainer-review` |
| **文档深度** | 贡献者指南、beta blocker 追踪、陈旧 issue 管理 | QwenPaw 有双语文档更新；其余结构化程度较低 |
| **功能广度** | 集成最全面、插件生态最丰富 | Hermes：MCP 隔离、压缩；ZeroClaw：Scoped 凭证；QwenPaw：插件 SDK |

### 技术路径差异

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|--------|----------|--------------|----------|---------|
| **更新机制** | 跨崩溃、Schema 变更、重启的更新恢复 | 面向桌面分发的 Canary 发布流水线 | 无可见更新基础设施 | v2.3.1 beta 进行中 |
| **上下文管理** | 会话置顶排序、Worktree 处理 | Doc-chain 基质 RFC，持久化上下文 | Scoped 凭证存储 | Token 计数修复、上下文计量器 |
| **多 Agent** | Codex 辅助委托、子 Agent 会话 | 跨平台会话连续性 | 未明确聚焦多 Agent | 未明确聚焦多 Agent |
| **资源治理** | 内存增长追踪（17h 约 3G）；插件源码抓取（1.1–1.4 GB/次 CLI）| 压缩合并、可行性跳过 | 临时文件管理（数百万文件泄漏导致启动卡死）| iOS 布局抖动、内存后端竞态 |
| **插件架构** | 最庞大的插件生态；源码抓取隐患 | Skills 生态；污染 bug 反馈 | 插件 CLI、Scoped 授权 | 插件 SDK 1.2 API、扩展点 |

### 社区规模指标

按原始活动指标衡量，OpenClaw 的社区参与规模**约为竞品的 10 倍**。该项目单条 issue（#182891，27 条评论）的讨论烈度相当于 Hermes Agent RFC（#143379，45 条评论）——但 OpenClaw 能同时在数十个高优先级线程上维持此级别的互动。

---

## 4. 共同技术聚焦领域

### 4.1 上下文持久化与中断恢复

| 项目 | 具体需求 | 证据 |
|---------|---------------|----------|
| **OpenClaw** | 跨崩溃、重启、Schema 变更保持上下文与后台工作 | v2026.11.10-beta.2/.3；PR #202711 |
| **Hermes Agent** | 会话压缩后仍存活的持久化 Doc-chain 网络 | RFC #143379（45 条评论）|
| **ZeroClaw** | 临时文件管理；数百万临时文件导致守护进程挂起 | Issue #12570 |
| **QwenPaw** | Embedder 失败而非卡顿时内存召回的韧性 | Issue #11896 |

**跨项目信号：** 每个项目都在独立解决同一个根本挑战——**在中断后维持 Agent 状态**。实现路径各异（更新恢复 vs 持久化 Doc-chain vs 临时文件管理），但底层需求是普适的：**Agent 运行必须可恢复、崩溃安全**。

### 4.2 资源消耗治理

| 项目 | 具体需求 | 证据 |
|---------|---------------|----------|
| **OpenClaw** | 插件源码抓取（1.1–1.4 GB/次 CLI）；内存增长（~3G/17h）；Prompt 缓存低效（浪费 21.3M Token）| Issues #157989, #195497, #143017 |
| **Hermes Agent** | 插件市场重新解析目录（93 秒延迟）| Issue #150969 |
| **ZeroClaw** | 数百万 `runtime-trace.tmp.*` 文件导致守护进程启动挂起 | Issue #12570 |
| **QwenPaw** | iOS 布局抖动；内存后端竞态；Whisper 导入泄漏（690 MB）| Issues #8852, #8867, #8490 |

**跨项目信号：** 随着 Agent 运行时规模扩大，**资源消耗正成为生产部署的首要障碍**。各项目间的竞争已从功能完备性转向 **GB/小时效率**。这是生态走向成熟的标志性信号。

### 4.3 渠道与协议集成

| 项目 | 活跃集成 | 证据 |
|---------|---------------------|----------|
| **OpenClaw** | Discord、Matrix、Telegram、macOS、Web UI | Issues #204283, #191476, #187588 |
| **Hermes Agent** | LINE 适配器开发、跨平台会话 | PR #159503, Issue #62780 |
| **ZeroClaw** | XMPP、SimpleX、WebDAV、SSH、Matrix 审批流、WhatsApp | PRs #11847, #12316, #12695 |
| **QwenPaw** | Telegram 论坛主题隔离 | PR #8857 |

**跨项目信号：** 一场**协议多样化竞赛**正在进行。每个项目都在独立构建 XMPP、Matrix、SimpleX、LINE、Telegram 的原生集成——反映出用户对协议灵活性的强烈需求，以及未来在共享适配器模式上整合的潜在可能。

### 4.4 安全与隔离边界

| 项目 | 安全聚焦 | 证据 |
|---------|----------------|----------|
| **OpenClaw** | 更新认证、插件验证 | PRs #204430, #204427, #204438 |
| **Hermes Agent** | MCP stdio 在瞬态 systemd scope 中的隔离；npm audit 自动化 | PRs #159494, #5197 |
| **ZeroClaw** | Scoped 凭证管理、SSH/TOTP 金库授权、浏览器来源作用域 | RFC #12422, PRs #12490, #12659, #12596 |
| **QwenPaw** | Skill 扫描器 CRITICAL 发现以 warn 模式阻断发布 | Issue #8880 |

**跨项目信号：** 安全正从**边界认证**演进为**操作级细粒度授权**（Scoped Token、按来源浏览器授权、金库集成）。这与企业级平台需求一致，预示生态正迈向生产级部署。

---

## 5. 差异化分析

### 目标用户与用例聚焦

| 项目 | 主要用户画像 | 差异化聚焦 |
|---------|------------------|----------------------|
| **OpenClaw** | 高级用户、自托管玩家、AI Agent 开发者 | 插件生态广度、多 Agent 委托、参考实现 |
| **Hermes Agent** | 自托管 AI 爱好者、终端用户 | 压缩效率、跨平台连续性、桌面客户端 |
| **ZeroClaw** | 企业运维团队、安全敏感型团队 | Scoped 凭证、协议多样化（XMPP、SimpleX）、SQLite 升级 |
| **QwenPaw** | Python 开发者、团队部署 | 插件 SDK 可扩展性、双语文档、UI 打磨 |

### 技术架构分化

**OpenClaw** — **参考架构路线**：最大覆盖、最重资源消耗、最宽能力面。作为"全功能参考实现"定位，其他项目可以此为基准进行 Fork 或对标。

**Hermes Agent** — **压缩优先路线**：架构以上下文压缩和内存管理为核心。更小内存占用的同时主动优化压缩。桌面客户端开发预示消费级 UI 雄心。

**ZeroClaw** — **安全隔离路线**：架构明确分离运维人员管理的凭证与 Agent 管理状态。在 Scoped 授权、金库集成、协议级隔离上大力投入。设计上最具企业就绪性。

**QwenPaw** — **可扩展平台路线**：聚焦插件 SDK 1.2、CLI 扩展点、双语文档。定位为团队构建自定义 Agent 体验的平台，而非开箱即用的解决方案。

### 功能聚焦地图

| 功能领域 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|--------------|----------|--------------|----------|---------|
| **多 Agent 委托** | ✅ 核心功能 | ✅ 跨会话 | ❌ | ❌ |
| **上下文压缩** | ✅ | ✅ RFC 驱动 | ❌ | ❌ |
| **插件生态** | ✅ 最庞大 | ✅ Skills | ✅ CLI 扩展 | ✅ SDK 1.2 |
| **桌面客户端** | ✅ macOS、Web | ✅ 重新设计中 | ❌ | ❌ |
| **Scoped 安全** | ⚠️ 部分实现 | ⚠️ MCP 隔离 | ✅ 主要方向 | ⚠️ Skill 扫描器 |
| **协议多样化** | ⚠️ 核心渠道 | ⚠️ LINE | ✅ XMPP、SimpleX | ⚠️ Telegram |
| **SQLite 加固** | ❌ | ❌ | ✅ v3.54.1 升级 | ❌ |
| **UI/UX 打磨** | ⚠️ 持续进行 | ⚠️ 持续进行 | ⚠️ 控制台问题 | ✅ 活跃 |
| **内存持久化** | ✅ 基于会话 | ✅ Doc-chain | ❌ | ⚠️ ReMeLight 竞态 |

---

## 6. 社区势能与成熟度

### 活跃度层级

**一线 — 超高活跃（OpenClaw）**
- 10 倍于竞品的速度；跨多周期持续保持
- 活跃的发布工程（beta 节奏）
- 正式的 Bug 分诊（P0–P3 严重等级、陈旧管理）
- 社区贡献者流水线（全职维护者 @fuller-stack-dev）
- 风险：质量控制压力、49 个开放 Critical Bug、PR 积压

**二线 — 高活跃（Hermes Agent, ZeroClaw）**
- 每日 50 条 PRs/Issues；健康的贡献者基础
- 活跃的功能开发（多个 XL PR 并行推进）
- Hermes：压缩、桌面、MCP 隔离方向强
- ZeroClaw：安全、协议集成、SQLite 升级方向强
- 两者共性：PR 队列积压增长（45–49 个开放 PR），需增加审核带宽

**三线 — 活跃（QwenPaw）**
- 适度但可持续的节奏
- 响应式 Bug 修复（今日合并 8 个 PR）
- 聚焦 UI/UX 质量与插件 SDK
- Critical Bug 较少；积压更可控

### 快速迭代 vs 趋于稳定

| 项目 | 轨迹 | 指标 |
|---------|------------|-----------|
| **OpenClaw** | 快速迭代 → 趋于稳定 | 正式发布流程、beta blocker 追踪、更新恢复基础设施 |
| **Hermes Agent** | 快速迭代 | Canary 发布、活跃 RFC 流程、49 个开放 PR |
| **ZeroClaw** | 快速迭代 | 多个 XL PR 并行、SQLite 升级、Scoped 凭证 RFC |
| **QwenPaw** | 中速 → 趋于稳定 | v2.3.1 beta 进行中、双语文档刷新、UI Bug 修复聚焦 |

### 成熟度指标

| 信号 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|--------|----------|--------------|----------|---------|
| **正式严重等级分诊** | ✅ P0–P3 + blocker 标签 | ⚠️ `needs-maintainer-review` | ⚠️ S1–S3 | ⚠️ Critical/High/Medium |
| **发布文档** | ✅ 每个版本均有 Changelog | ✅ Canary 说明 | ❌ | ❌ |
| **陈旧 Issue 管理** | ✅ 活跃 | ❌ | ❌ | ❌ |
| **安全公告** | ❌ 未追踪 | ❌ | ❌ | ❌ |
| **升级路径测试** | ✅ 更新恢复已测试 | ❌ | ❌ | ❌ |
| **多平台打包** | ⚠️ Docker | ✅ 桌面 DMG | ❌ | ⚠️ Linux deb/AppImage PR |

---

## 7. 趋势信号

### AI Agent 开发者须知

**1. 上下文持久化是下一个前沿**
每个项目都在独立解决"如何让 Agent 上下文在崩溃、重启和上下文窗口耗尽后存活"这一问题。开发者应预期**持久化上下文原语**（检查点/恢复 API、压缩回调、会话迁移）将在未来 3–6 个月内于整个生态中趋于标准化。OpenClaw 的更新恢复与 Hermes Agent 的 Doc-chain RFC 代表了两种竞争性的技术模型。

**2. 资源治理决定生产可行性**
无法限制内存增长（OpenClaw ~3G/17h）、插件启动开销（93 秒目录重新解析）或临时文件堆积（数百万 trace 文件）的 Agent 运行时将在生产环境中失败。**GB/小时效率基准**将成为关键差异化因素。在这些平台上构建的开发者应从第一天起就实现资源监控。

**3. Scoped 安全正在取代边界安全**
ZeroClaw 的 RFC #12422 与 Hermes Agent 的 MCP 隔离工作标志着从"认证用户"到"授权每次操作"的转变。构建企业集成的开发者应围绕**能力授予的凭证作用域**而非共享密钥管理进行设计。

**4. 协议多样化要求适配器抽象**
多个独立项目正在构建原生 XMPP、SimpleX、Matrix 和 LINE 集成。这预示着对**共享渠道适配器抽象**的即将到来的需求——允许单个 Agent 跨协议运行而无需为每个协议重复代码。生态可能受益于共享适配器规范的制定。

**5. 插件 SDK 是标配**
QwenPaw 的 SDK 1.2、OpenClaw 的插件生态与 ZeroClaw 的 CLI 扩展点都指向同一结论：**没有插件/扩展系统的 Agent 将失去市场份额**。构建 Agent 工具链的开发者应优先考虑插件架构。

### 战略观察

- **OpenClaw 是生态锚点。** 以 10 倍活动量，它作为塑造社区预期的参考实现存在。竞品通过专精化实现差异化（ZeroClaw：安全；Hermes：压缩；QwenPaw：可扩展性），而非追求功能广度匹配。

- **"遗忘一切"问题是普遍痛点。** 每个项目都有活跃 Issue 关于 Agent 遗忘上下文、丢失会话状态或中断后无法恢复。这代表了当前生态中最大的 UX 缺口，也是投资回报率最高的工程方向。

- **IronClaw 的不活跃值得调查。** 如果 nearai/ironclaw 定位为竞品或互补项目，零活动状态暗示要么已被放弃，要么处于私有开发模式。生态参与者应明确其状态。

- **发布节奏与 Bug 积压正相关。** OpenClaw 频繁发布（2 个 beta）但背负 49+ 开放 Critical Bug。Hermes 以 Canary 节奏发布但积压 49 个 PR。这一模式表明**整个生态的发布速度正在超过质量保证带宽**——维护者们在优先追求速度而非稳定性。

---

*跨项目对比报告生成于 2026-11-24。数据来源于 openclaw/openclaw、NousResearch/hermes-agent、nearai/ironclaw、agentscope-ai/QwenPaw 及 zeroclaw-labs/zeroclaw 的 GitHub 活动流。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to translate all the content while maintaining the structure, keeping technical terms and identifiers in their original form, and using natural technical Chinese.

Let me go through and translate section by section:

1. Title and date
2. Today's Overview
3. Releases
4. Project Progress
5. Community Hot Topics
6. Bugs & Stability
7. Feature Requests & Roadmap Signals
8. User Feedback Summary
9. Backlog Watch

I need to be careful about:
- Preserving all markdown structure
- Keeping URLs, IDs, version tags, etc. as-is
- Using natural technical Chinese
- Not being overly literal
- Maintaining the tone of a Chinese developer newsletter
</think>


# Hermes Agent 项目摘要 — 2026-11-24

## 1. 今日概览

Hermes Agent 过去 24 小时展现出高度活跃状态，共有 50 条 Issue 和 50 条 PR 有所更新。项目于 2026 年 11 月 23 日发布了 **canary v0.23.3**，主要面向 macOS Apple Silicon 用户，通过 DMG 方式分发。社区参与度强劲，"Doc-Chain Substrate" 架构相关 RFC 引发了 45 条评论的讨论，同时今日关闭了 14 条 Issue。PR 队列中积压了 49 条待审查的贡献，仅有 1 条被合并。总体来看，项目健康状况良好，CLI、网关、压缩模块及平台集成等方面均在进行 Bug 修复工作。

---

## 2. 版本发布

### ✅ canary.20261123T065600Z-v0.23.3

**发布日期：** 2026 年 11 月 23 日  
**平台：** macOS Apple Silicon（M 系列）— DMG

> **注意：** 这是一个 canary（预发布）版本。发布说明显示为 Hermes Desktop 的 macOS 分发，表明桌面客户端开发仍在进行中。未提供具体的变更日志详情。

📎 **链接：** [Release #143379](https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261123T065600Z-v0.23.3)

---

## 3. 项目进展

### 今日合并/关闭情况

| 类别 | 数量 | 重要变更 |
|------|------|----------|
| Issue 已关闭 | 14 | Bug 修复已完成，功能重复项已关闭 |
| PR 已合并 | 1 | — |

**今日关闭的 Issue：**

| Issue | 标题 | 处理结果 |
|-------|------|----------|
| [#17199](https://github.com/NousResearch/hermes-agent/issues/17199) | deepseek provider：模型归一化和 base_url 覆盖破坏了自定义端点 | 已修复 |
| [#5197](https://github.com/NousResearch/hermes-agent/issues/5197) | 自动运行 "npm audit" 进行安全检查 | 功能已实现 |
| [#24782](https://github.com/NousResearch/hermes-agent/issues/24782) | [subagent] 降级模型使用父级的 base_url 而非降级模型的 base_url | 已修复 |
| [#14614](https://github.com/NousResearch/hermes-agent/issues/14614) | resolve_alias() 反向查询返回了错误的 provider | 已修复 |
| [#24092](https://github.com/NousResearch/hermes-agent/issues/24092) | fallback_providers 配合自定义 base_url 时会回退到 OpenRouter | 已修复 |
| [#22754](https://github.com/NousResearch/hermes-agent/issues/22754) | 使无条件黑名单可配置 | 已关闭（重复） |
| [#24284](https://github.com/NousResearch/hermes-agent/issues/24284) | 允许定时任务安全地自我调度 | 已关闭（重复） |
| [#23794](https://github.com/NousResearch/hermes-agent/issues/23794) | 在 curator 回滚时拒绝 tar 链接 | 已关闭（重复） |

### 活跃中的 PR（49 条待审）

| PR | 组件 | 目的 |
|----|------|------|
| [#159508](https://github.com/NousResearch/hermes-agent/pull/159508) | 压缩模块 | 修复压缩可行性跳过逻辑 |
| [#159507](https://github.com/NousResearch/hermes-agent/pull/159507) | Skills/Vision | `cinematic-film` 技能用于叙事视频生成 |
| [#159480](https://github.com/NousResearch/hermes-agent/pull/159480) | CLI/Doctor | 接受密封包 CLI 链接，对 PATH 问题发出警告 |
| [#159471](https://github.com/NousResearch/hermes-agent/pull/159471) | Agent | 在压缩过程中保留未完成的承诺 |
| [#159503](https://github.com/NousResearch/hermes-agent/pull/159503) | LINE 适配器 | 添加群组/群聊 @提及门控和媒体过滤器 |
| [#159502](https://github.com/NousResearch/hermes-agent/pull/159502) | Desktop | 插件的只读 `ctx.voice`（语音状态） |
| [#159494](https://github.com/NousResearch/hermes-agent/pull/159494) | MCP | 在临时 systemd scope 中隔离 stdio MCP 子进程 |
| [#159426](https://github.com/NousResearch/hermes-agent/pull/159426) | 插件目录 | 更新 hermes-warden 至 0.1.6 |
| [#159187](https://github.com/NousResearch/hermes-agent/pull/159187) | Web Tools | 更新 MrScraper 至 4.1.0 |
| [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) | Desktop | 重新设计的 agent 工作区及经典模式恢复 |

---

## 4. 社区热点话题

### 最活跃的讨论

#### 🔥 #143379 — RFC：文档链基底的网络架构
**状态：** 开放 | **评论数：** 45 | **作者：** c0wb0yp0tat0

这份高影响力 RFC 提出了一个持久化记录系统，使 agent 的上下文在会话压缩后仍能保留来源信息。讨论涵盖：
- 压缩后的读取恢复机制
- 存储的可重新读取性
- 文档链网络的治理与压缩策略

📎 **链接：** https://github.com/NousResearch/hermes-agent/issues/143379

#### 💬 #62780 — 跨平台统一会话
**状态：** 开放 | **评论数：** 8 | **作者：** yoniebans | 👍 1

请求在所有 Hermes 客户端（CLI、Desktop、TUI、WebUI、iOS、Android、Telegram、Discord、ACP、API 服务端）之间实现统一的会话访问。用户希望在任意平台恢复会话、实时观看对话进展，并可同时从多个平台向同一会话添加内容。

📎 **链接：** https://github.com/NousResearch/hermes-agent/issues/62780

#### 💬 #17345 — Skills 仓库污染
**状态：** 开放 | **评论数：** 8 | **作者：** sunyang-lab

报告称当 Hermes 和 OpenClaw 同时安装在同一台机器上时，Hermes 会列出 OpenClaw 的技能，表明技能仓库之间存在交叉污染。

📎 **链接：** https://github.com/NousResearch/hermes-agent/issues/17345

### 社区深层需求

| 主题 | 信号 | 启示 |
|------|------|------|
| **会话持久化** | 跨客户端连续性需求旺盛（#62780） | Roadmap：统一会话管理 |
| **持久化记忆** | RFC #143379 引发 45 条评论 | 社区重视长期上下文保留 |
| **多平台对等** | LINE 适配器 PR 表明仍有差距 | Roadmap：各平台功能对齐 |
| **Skills 生态** | 污染 Bug 和新的电影技能 | Skills 注册表需要质量把控 |

---

## 5. Bug 与稳定性

### 按严重程度排列的活跃 Bug

#### P2 — 高优先级（修复进行中）

| Bug | 组件 | Issue | 修复 PR |
|-----|------|-------|---------|
| 网关崩溃后的会话状态损坏 | Agent/Terminal | [#159438](https://github.com/NousResearch/hermes-agent/issues/159438) | — |
| 压缩模块对推理预算耗尽的误判 | Agent | [#158133](https://github.com/NousResearch/hermes-agent/issues/158133) | — |
| 定时任务在门控触发时泄漏空会话 | Gateway | [#159395](https://github.com/NousResearch/hermes-agent/issues/159395) | — |
| 插件中心对无关安装也重新解析目录（93 秒延迟） | CLI | [#150969](https://github.com/NousResearch/hermes-agent/issues/150969) | — |
| 远程 Desktop 渲染旧回复时出现重复/乱序 | Desktop | [#158293](https://github.com/NousResearch/hermes-agent/issues/158293) | — |
| `--version` 健康检查因 git status 导致 CPU 占用 | CLI | [#159209](https://github.com/NousResearch/hermes-agent/issues/159209) | — |
| 技能提案已暂存但无法应用 | Tools | [#137276](https://github.com/NousResearch/hermes-agent/issues/137276) | — |
| Windows 文件覆盖始终过期 | Tools/File | [#141881](https://github.com/NousResearch/hermes-agent/issues/141881) | [#141881](https://github.com/NousResearch/hermes-agent/pull/141881) |

#### P3 — 中优先级

| Bug | 组件 | Issue | 修复 PR |
|-----|------|-------|---------|
| 网关在 JSON-RPC 中输出裸露的 `Infinity` | Gateway | [#159335](https://github.com/NousResearch/hermes-agent/issues/159335) | — |
| LINE 适配器缺少群组功能 | LINE | [#159503](https://github.com/NousResearch/hermes-agent/pull/159503) | 有（PR） |
| MCP UI token 未应用于 Windmill | MCP | [#61562](https://github.com/NousResearch/hermes-agent/issues/61562) | — |
| Telegram 审批消息丢失命令上下文 | Telegram | [#23965](https://github.com/NousResearch/hermes-agent/issues/23965) | — |

#### P4 — 低优先级

| Bug | 组件 | Issue |
|-----|------|-------|
| 代理字符导致 `_scan_text` 崩溃 | Skills Guard | [#159406](https://github.com/NousResearch/hermes-agent/issues/159406) |

### 回归监控
- **今日修复：** Deepseek provider 自定义端点 Bug（#17199）、subagent 降级 base_url Bug（#24782）
- **今日新增：** Telegram 适配器限流超时循环（#159490）

---

## 6. 功能需求与 Roadmap 信号

### 高关注度的功能请求

| 请求 | 评论数 | 优先级 | Roadmap 信号 |
|------|--------|--------|--------------|
| **跨平台统一会话** | 8 | P3 | Desktop 重构 PR 表明可能近期推进 |
| **电影制作技能** | — | P3 | 社区贡献；展示技能可扩展性愿景 |
| **Antigravity/Gemini ACP** | 3 | P3 | Provider 集成进行中 |
| **LINE 群组 @提及门控** | — | P3 | PR 开放中；表明平台功能对齐重点 |
| **失控推理中断** | — | P3 | PR #158310 解决中途重复生成问题 |
| **插件的 Desktop 语音上下文** | — | P3 | 赋能更丰富的桌面集成 |

### 预测下版本重点

基于 PR 和 Issue 的模式：

1. **Desktop 重构** — PR #152168 代表了重大 UX 投入
2. **压缩稳定性** — 多项 P2 修复（#159508、#159471）表明正在积极打磨
3. **跨平台对等** — LINE、Telegram 和 Desktop 功能暗示平台统一目标
4. **安全加固** — npm audit 自动化、curator 回滚修复、MCP 隔离

---

## 7. 用户反馈摘要

### 痛点

| 痛点 | 频率 | 影响 |
|------|------|------|
| **大量插件导致性能下降** | 有报告（#150969） | 93 秒延迟，RPC 超时 |
| **会话连续性失败** | 多份报告 | 网关崩溃，远程客户端不同步 |
| **跨工具技能污染** | 单份报告 | 隐私/数据泄露隐患 |
| **Windows 文件操作** | 持续存在 | 文件覆盖受阻令用户沮丧 |
| **网关 JSON-RPC 解析失败** | 有报告（#159335） | iOS/移动客户端损坏 |

### 满意度信号

| 正面反馈 | 证据 |
|----------|------|
| **积极修复 Bug** | 今日关闭 14 条 Issue，多个 provider/端点问题已修复 |
| **可扩展架构** | 新 cinematic-film 技能展示社区生态建设 |
| **多平台覆盖** | LINE、Telegram、Matrix、DingTalk 都在积极维护中 |

### 真实用户使用场景

- **自定义端点的本地 AI：** Deepseek/Volcengine ARK 用户遇到端点配置问题
- **自托管自动化：** 定时任务自我调度请求表明高级用户工作流需求
- **跨设备连续性：** 用户期望在 CLI、Desktop、移动端、Telegram 之间无缝切换会话
- **Skills 生态：** OpenClaw 共存揭示技能碎片化问题

---

## 8. 积压待办观察

### 长期未响应的重要 Issue

| Issue | 存在时长 | 评论数 | 状态 | 所需行动 |
|-------|----------|--------|------|----------|
| [#62780](https://github.com/NousResearch/hermes-agent/issues/62780) — 跨平台会话 | 约 134 天 | 8 | 开放 | 维护者需决定架构方向 |
| [#17345](https://github.com/NousResearch/hermes-agent/issues/17345) — 技能污染 | 约 209 天 | 8 | 开放 | 复现问题；调查根本原因 |
| [#82754](https://github.com/NousResearch/hermes-agent/issues/82754) — 定时任务蓝图丢失技能 | 约 107 天 | 1 | 开放 | 相关 PR #159504 进行中 |
| [#61562](https://github.com/NousResearch/hermes-agent/issues/61562) — MCP token 字段 | 约 138 天 | 3 | 开放 | Windmill 集成需补充文档 |

### 停滞/待 review 的 PR

| PR | 存在时长 | 组件 | 状态 |
|----|----------|------|------|
| [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) — Desktop 重构 | 15 天 | Desktop | 开放；等待 review |
| [#141881](https://github.com/NousResearch/hermes-agent/pull/141881) — Windows 文件过期 | 35 天 | Tools/File | 开放 |
| [#125004](https://github.com/NousResearch/hermes-agent/pull/125004) — 沙箱进程树 | 58 天 | Tools/Terminal | 开放 |
| [#158310](https://github.com/NousResearch/hermes-agent/pull/158310) — 失控推理 | 4 天 | Agent | 开放 |

### 维护义务

- **集群重启义务无法清除** — Issue [#158221](https://github.com/NousResearch/hermes-agent/issues/158221) 永久阻止用户更新
- **Telegram 限流循环** — 新 Issue [#159490](https://github.com/NousResearch/hermes-agent/issues/159490) 需要平台特定调查

---

*本摘要基于 Hermes Agent 仓库数据生成 — 2026-11-24*  
*仓库地址：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate an English technical report about the QwenPaw project into Simplified Chinese. Let me analyze the content and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code spans, etc. verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese, not literal word-for-word translation

Let me translate this carefully:

---

# QwenPaw Project Digest — 2026-11-24

-> # QwenPaw 项目日报 — 2026-11-24

---

## 1. Today's Overview

-> ## 一、今日概览

"QwenPaw development activity remains high with 27 issues and 36 PRs updated in the last 24 hours. The project is actively addressing a cluster of UI/UX issues centered on the Console component—particularly wide content rendering (tables, code blocks) and keyboard accessibility. Notably, the team closed 7 issues and merged 8 PRs today, including important fixes for Anthropic token counting (#8060) and message bubble overflow (#8823). Several architectural discussions emerged around memory management, security boundaries, and plugin extensibility, suggesting a maturing ecosystem. No new releases were published today, though PR #8883 indicates work on v2.3.1b2 is underway."

-> 过去 24 小时，QwenPaw 开发活动保持高度活跃，共更新 27 个 issue 和 36 个 PR。项目正积极解决一批以 Console 组件为中心的 UI/UX 问题——尤其是宽内容渲染（表格、代码块）和键盘可访问性。值得注意的是，团队今天关闭了 7 个 issue，合并了 8 个 PR，包括 Anthropic token 计数修复（#8060）和消息气泡溢出修复（#8823）。

The next thinking is empty, so I will translate the remaining content directly.

Several architectural discussions emerged around memory management, security boundaries, and plugin extensibility, suggesting a maturing ecosystem. No new releases were published today, though PR #8883 indicates work on v2.3.1b2 is underway.

-> 今天还出现了多个围绕内存管理、安全边界和插件可扩展性的架构讨论，表明生态系统正在成熟。今天没有发布新版本，但 PR #8883 显示 v2.3.1b2 的工作正在进行中。

---

## 2. Releases

-> ## 二、版本发布

**No new releases published today.**

-> **今天未发布新版本。**

"The most recent release remains **v2.3.1-beta.1** (published 2026-11-23), tracked in issue #8861. PR #8883 bumped the version to 2.3.1b2, indicating active beta development."

-> 最新版本为 **v2.3.1-beta.1**（发布于 2026-11-23），在 issue #8861 中跟踪。PR #8883 已将版本号提升至 2.3.1b2，表明 beta 开发正在进行中。

"Previous stable release: **v2.3.0.post1** (2026-11-18) — installation verification passed per #8807."

-> 上一个稳定版本：**v2.3.0.post1**（2026-11-18）——根据 #8807，安装验证已通过。

---

## 3. Project Progress

-> ## 三、项目进展

### Merged/Closed PRs (8 total)

-> ### 已合并/已关闭的 PR（8 个）

| PR | Title | Impact |
|----|-------|--------|
| [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823) | fix(console): keep wide tables and code blocks scrollable in bubbles | **High** — Fixes #8811; resolves horizontal overflow for Markdown content |
| [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) | fix(token-usage): count Anthropic cache tokens in the live context meter | **High** — Closes #8057; accurate context usage tracking for Anthropic providers |
| [#8869](https://github.com/agentscope-ai/QwenPaw/pull/8869) | docs: refresh bilingual docs for QwenPaw 2.3.1 | Documentation update |
| [#8031](https://github.com/agentscope-ai/QwenPaw/pull/8031) | test: stop leaking unawaited coroutines from scheduling mocks | Test reliability improvement |

| PR | 标题 | 影响 |
|----|------|------|
| [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823) | fix(console): 修复气泡内宽表格和代码块滚动问题 | **高** — 修复 #8811；解决 Markdown 内容水平溢出 |
| [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) | fix(token-usage): 在实时上下文计量器中统计 Anthropic 缓存 token | **高** — 关闭 #8057；准确追踪 Anthropic provider 的上下文使用量 |
| [#8869](https://github.com/agentscope-ai/QwenPaw/pull/8869) | docs: 更新 QwenPaw 2.3.1 双语文档 | 文档更新 |
| [#8031](https://github.com/agentscope-ai/QwenPaw/pull/8031) | test: 修复调度 mock 中未等待协程导致的泄漏 | 提升测试可靠性 |

### PRs Under Active Review (selected)

-> ### 正在评审中的 PR（部分）

| PR | Title | Size | Status |
|----|-------|------|--------|
| [#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841) | fix(plugins): keep llama-server from outliving a crashed backend | L | Under Review |
| [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479) | feat(skills): sync Office skills with Anthropic July 2026 update | XXXL | Under Review |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) | feat(plugins): support CLI commands and extension points | XXXL | Under Review |
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) | feat(sdk): expand plugin SDK 1.2 APIs, lifecycle management | XXXL | Under Review |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | feat(desktop): add Linux deb and AppImage packaging | XL | Under Review |
| [#8876](https://github.com/agentscope-ai/QwenPaw/pull/8876) | fix(console): restore native scrolling in chat transcript | XS | Open (first-time contributor) |
| [#8866](https://github.com/agentscope-ai/QwenPaw/pull/8866) | fix(crons): accept named weekday lists in heartbeat cron | XS | Open (first-time contributor) |

| PR | 标题 | 规模 | 状态 |
|----|------|------|------|
| [#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841) | fix(plugins): 防止 llama-server 在后端崩溃后继续存活 | L | 评审中 |
| [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479) | feat(skills): 同步 Office 技能与 Anthropic 2026年7月更新 | XXXL | 评审中 |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) | feat(plugins): 支持 CLI 命令和扩展点 | XXXL | 评审中 |
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) | feat(sdk): 扩展插件 SDK 1.2 API、生命周期管理 | XXXL | 评审中 |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | feat(desktop): 添加 Linux deb 和 AppImage 包 | XL | 评审中 |
| [#8876](https://github.com/agentscope-ai/QwenPaw/pull/8876) | fix(console): 恢复聊天记录原生滚动 | XS | 待合并（首次贡献者） |
| [#8866](https://github.com/agentscope-ai/QwenPaw/pull/8866) | fix(crons): heartbeat cron 支持按星期名称指定列表 | XS | 待合并（首次贡献者） |

---

## 4. Community Hot Topics

-> ## 四、社区热点话题

### Most Active Issues (by comment count)

-> ### 评论最多的 issue（按评论数排序）

1. **[#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)** (5 comments) — *Bug: Narrow screen text clipping & wide content without horizontal scroll*
   - **Root issue:** At standard message width, tables and code blocks exceed container bounds
   - **Related:** #8856 (identical issue, Chinese report), #8845 (keyboard accessibility)
   - **Fix merged:** PR #8823 addresses overflow scrolling

1. **[#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811)**（5 条评论）—— *Bug：窄屏文字被截断 & 宽内容无水平滚动*
   - **根本原因：** 标准消息宽度下，表格和代码块超出容器边界
   - **相关：** #8856（相同问题，的中文报告）、#8845（键盘可访问性）
   - **已合并修复：** PR #8823 解决了溢出滚动问题

2. **[#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864)** (3 comments) — *Streaming reply aborts mid-output with RemoteProtocolError*
   - Environment: DeepSeek model, ~82k context tokens (9% utilization)
   - Partial content emitted, no retry attempted
   - Likely upstream gateway behavior

2. **[#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864)**（3 条评论）—— *流式回复中途终止，报 RemoteProtocolError*
   - 环境：DeepSeek 模型，约 82k 上下文 token（9% 利用率）
   - 输出了部分内容，未尝试重试
   - 可能为上游网关行为

3. **[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)** (3 comments) — *iOS Safari/WebKit freezes on long conversations*
   - Caused by layout thrashing and `content-visibility: auto` in column-reverse list
   - Console UI becomes unresponsive on iOS devices

3. **[#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852)**（3 条评论）—— *iOS Safari/WebKit 在长对话中冻结*
   - 原因：column-reverse 列表中的布局抖动和 `content-visibility: auto`
   - 在 iOS 设备上 Console UI 无响应

4. **[#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)** (3 comments) — *Console: message list not keyboard-focusable*
   - Arrow keys, PageUp/PageDown, Home/End do nothing
   - Makes chat unusable without mouse input

4. **[#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)**（3 条评论）—— *Console：消息列表无法键盘聚焦*
   - 方向键、PageUp/PageDown、Home/End 均无效
   - 不使用鼠标则无法操作聊天

### Underlying Needs Revealed

-> ### 暴露的深层需求

- **Cross-platform UI consistency:** iOS WebKit performance issues (#8852) indicate rendering path needs platform-specific optimization
- **Accessibility:** Keyboard navigation gaps (#8844) limit usability for keyboard-heavy workflows
- **Reliability at scale:** Streaming interruptions at moderate context levels (#8864) need investigation

- **跨平台 UI 一致性：** iOS WebKit 性能问题（#8852）表明渲染路径需要平台特定优化
- **可访问性：** 键盘导航缺陷（#8844）限制了重度键盘用户的工作效率
- **规模化可靠性：** 中等上下文量下的流式中断（#8864）需要调查

---

## 5. Bugs & Stability

-> ## 五、Bug 与稳定性

### Critical Severity

-> ### 严重级别

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877) | Status-less model overload in OpenAI-compatible streams bypasses retries | None yet |
| [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) | RESPONSE_SCOPE_LIMIT: routes never evicted, WeChat channel dies at 128 | None yet |

| Issue | 描述 | 修复 PR |
|-------|------|---------|
| [#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877) | OpenAI 兼容流中无状态模型过载绕过重试机制 | 暂无 |
| [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) | RESPONSE_SCOPE_LIMIT：路由从未被驱逐，WeChat 频道在 128 条路由时崩溃 | 暂无 |

### High Severity

-> ### 高优先级

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864) | Streaming abort with RemoteProtocolError, no retry | None yet |
| [#8867](https://github.com/agentscope-ai/QwenPaw/issues/8867) | Memory backend silently falls back to ReMeLight on startup race | None yet |
| [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) | iOS Safari freezes on long conversations | None yet |

| Issue | 描述 | 修复 PR |
|-------|------|---------|
| [#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864) | 流式传输中断，报 RemoteProtocolError，未重试 | 暂无 |
| [#8867](https://github.com/agentscope-ai/QwenPaw/issues/8867) | 内存后端在启动竞态中静默回退到 ReMeLight | 暂无 |
| [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) | iOS Safari 在长对话中冻结 | 暂无 |

### Medium Severity (UI/UX)

-> ### 中优先级（UI/UX）

| Issue | Description | Fix PR |
|-------|-------------|--------|
| [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) / [#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856) | Wide content clipping in Console | [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823) merged |
| [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844) | Keyboard navigation broken | [#8876](https://github.com/agentscope-ai/QwenPaw/pull/8876) open |
| [#8836](https://github.com/agentscope-ai/QwenPaw/issues/8836) | Tool config page loops on password components | Closed |

| Issue | 描述 | 修复 PR |
|-------|------|---------|
| [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) / [#8856](https://github.com/agentscope-ai/QwenPaw/issues/8856) | Console 宽内容被截断 | [#8823](https://github.com/agentscope-ai/QwenPaw/pull/8823) 已合并 |
| [#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844) | 键盘导航失效 | [#8876](https://github.com/agentscope-ai/QwenPaw/pull/8876) 待合并 |
| [#8836](https://github.com/agentscope-ai/QwenPaw/issues/8836) | 工具配置页在密码组件上循环 | 已关闭 |

### Resolved Today

-> ### 今日已解决

- [#8490](https://github.com/agentscope-ai/QwenPaw/issues/8490) — Whisper import leak (690 MB RSS)
- [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) — Anthropic cache tokens not counted

- [#8490](https://github.com/agentscope-ai/QwenPaw/issues/8490) — Whisper 导入泄漏（RSS 增长 690 MB）
- [#8057](https://github.com/agentscope-ai/QwenPaw/issues/8057) — Anthropic 缓存 token 未被统计

---

## 6. Feature Requests & Roadmap Signals

-> ## 六、功能需求与路线图信号

### New Design Proposals (today)

-> ### 今日新设计提案

| Issue | Title | Priority Signal |
|-------|-------|-----------------|
| [#8882](https://github.com/agentscope-ai/QwenPaw/issues/8882) | Reference-counted archival for long-term memory | Aligns with "Never forgets" promise |
| [#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881) | Enforce tenant scoping at memory retrieval layer | Security/multi-tenancy |
| [#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880) | Skill-scanner CRITICAL findings should block in warn mode | Security hardening |
| [#8879](https://github.com/agentscope-ai/QwenPaw/issues/8879) | max_processes/max_memory_mb not enforced by any sandbox | Configuration honesty |
| [#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878) | Minimal egress policy for coding mode | Network isolation |

| Issue | 标题 | 优先级信号 |
|-------|-------|-----------|
| [#8882](https://github.com/agentscope-ai/QwenPaw/issues/8882) | 长期记忆的引用计数归档机制 | 契合"永不遗忘"承诺 |
| [#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881) | 在内存检索层强制执行租户隔离 | 安全/多租户 |
| [#8880](https://github.com/agentscope-ai/QwenPaw/issues/8880) | Skill-scanner 严重级别发现应在 warn 模式下阻止执行 | 安全加固 |
| [#8879](https://github.com/agentscope-ai/QwenPaw/issues/8879) | max_processes/max_memory_mb 未被任何沙箱强制执行 | 配置诚实性 |
| [#8878](https://github.com/agentscope-ai/QwenPaw/issues/8878) | 编程模式的最小出口策略 | 网络隔离 |

### Likely In Next Version (based on active PRs)

-> ### 可能出现在下一版本中（基于活跃 PR）

- **v2.3.1:** UI fixes (#8823, #8876), cron persistence (#8707), heartbeat weekday parsing (#8866)
- **v2.3.2+ roadmap signals:**
  - Linux desktop packaging (#8444) — community demand for cross-platform parity
  - Plugin CLI extension points (#8554) — ecosystem expansion
  - Memory system redesign (#8882, #8881) — addressing core UX complaints
  - Semantic theming for plugins (#8787) — customization improvements

- **v2.3.1：** UI 修复（#8823、#8876）、cron 持久化（#8707）、heartbeat 按星期解析（#8866）
- **v2.3.2+ 路线图信号：**
  - Linux 桌面打包（#8444）——社区对跨平台对等的需求
  - 插件 CLI 扩展点（#8554）——生态系统扩展
  - 内存系统重新设计（#8882、#8881）——解决核心 UX 投诉
  - 插件语义化主题（#8787）——定制化改进

---

## 7. User Feedback Summary

-> ## 七、用户反馈摘要

### Pain Points

-> ### 痛点

| Category | Issue | Evidence |
|----------|-------|----------|
| **UI on narrow screens** | Text/table clipping | Multiple reports (#8811, #8856, #8845) |
| **iOS usability** | UI freezes on long chats | #8852 — layout thrashing |
| **Accessibility** | No keyboard scroll | #8844 — blocks keyboard-only users |
| **Memory reliability** | "Agent forgets" | #8882 — stale entries pile up, no decay |
| **Token counting** | Context meter under-reports | #8057 — now fixed |
| **Plugin startup** | Silent fallback to default backend | #8867 — race condition |

| 类别 | Issue | 证据 |
|------|-------|------|
| **窄屏 UI** | 文字/表格被截断 | 多份报告（#8811、#8856、#8845） |
| **iOS 可用性** | 长对话时 UI 冻结 | #8852 — 布局抖动 |
| **可访问性** | 无法键盘滚动 | #8844 — 阻止纯键盘用户使用 |
| **内存可靠性** | "Agent 遗忘" | #8882 — 陈旧条目堆积，无衰减 |
| **Token 计数** | 上下文计量器少计 | #8057 — 已修复 |
| **插件启动** | 静默回退到默认后端 | #8867 — 竞态条件 |

### Satisfaction Signals

-> ### 满意度信号

- Release verification process (#8681, #8861) shows stable deployment practices
- Quick turnaround on UI bugs (PR #8823 merged within days of #8811)
- First-time contributor PRs (#8876, #8866, #8857) indicate onboarding success

- 发布验证流程（#8681、#8861）表明部署实践稳定
- UI bug 修复迅速（PR #8823 在 #8811 提出后数天内合并）
- 首次贡献者 PR（#8876、#8866、#8857）表明新手引导成功

---

## 8. Backlog Watch

-> ## 八、积压事项关注

### Issues Needing Maintainer Attention

-> ### 需要维护者关注的 Issue

| Issue | Age | Status | Priority |
|-------|-----|--------|----------|
| [#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877) — OpenAI overload bypasses retries | <1 day | Open | **Critical** |
| [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) — WeChat channel dies at 128 routes | 5 days | Open | **Critical** |
| [#8867](https://github.com/agentscope-ai/QwenPaw/issues/8867) — Memory backend race | 1 day | Open | High |
| [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) — iOS WebKit freeze | 2 days | Open | High |
| [#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864) — Streaming abort | 1 day | Open | High |
| [#8874](https://github.com/agentscope-ai/QwenPaw/issues/8874) — Local pre-commit diverges from CI | 1 day | Open | Medium |

| Issue | 存续时间 | 状态 | 优先级 |
|-------|---------|------|--------|
| [#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877) — OpenAI 过载绕过重试 | <1 天 | 待处理 | **严重** |
| [#8814](https://github.com/agentscope-ai/QwenPaw/issues/8814) — WeChat 频道在 128 条路由时崩溃 | 5 天 | 待处理 | **严重** |
| [#8867](https://github.com/agentscope-ai/QwenPaw/issues/8867) — 内存后端竞态 | 1 天 | 待处理 | 高 |
| [#8852](https://github.com/agentscope-ai/QwenPaw/issues/8852) — iOS WebKit 冻结 | 2 天 | 待处理 | 高 |
| [#8864](https://github.com/agentscope-ai/QwenPaw/issues/8864) — 流式传输中断 | 1 天 | 待处理 | 高 |
| [#8874](https://github.com/agentscope-ai/QwenPaw/issues/8874) — 本地 pre-commit 与 CI 差异 | 1 天 | 待处理 | 中 |

### Stalled/Large PRs

-> ### 停滞/大型 PR

| PR | Size | Age | Blocker |
|----|------|-----|---------|
| [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479) — Office skills sync | XXXL | ~1 month | Review bandwidth |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) — Plugin CLI commands | XXXL | ~3 weeks | Complexity |
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) — Plugin SDK 1.2 | XXXL | ~1 week | API design |

| PR | 规模 | 存续时间 | 阻塞因素 |
|----|------|---------|---------|
| [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479) — Office 技能同步 | XXXL | 约 1 个月 | 评审带宽 |
| [#8554](https://github.com/agentscope-ai/QwenPaw/pull/8554) — 插件 CLI 命令 | XXXL | 约 3 周 | 复杂度 |
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) — 插件 SDK 1.2 | XXXL | 约 1 周 | API 设计 |

---

*Generated from QwenPaw repository activity on 2026-11-24. Data sources: GitHub Issues & Pull Requests API.*

---

*数据来源：QwenPaw 仓库 2026-11-24 活动记录。数据源：GitHub Issues & Pull Requests API。*</think>



</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the content into Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, numbers, dates, code references, issue/PR numbers verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths in original form
5. Use natural technical Chinese register
6. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

Title: ZeroClaw Project Digest — 2026-11-24
→ ZeroClaw 项目摘要 — 2026-11-24

Section 1: Today's Overview
Section 2: Releases
Section 3: Project Progress
Section 4: Community Hot Topics
Section 5: Bugs & Stability
Section 6: Feature Requests & Roadmap Signals
Section 7: User Feedback Summary
Section 8: Backlog Watch

Let me work through each section carefully, maintaining the table structures and formatting.
</think>


# ZeroClaw 项目摘要 — 2026-11-24

## 1. 今日概览

ZeroClaw 展现出强劲的开发活力，过去 24 小时内共有 49 个 issue 和 50 个 PR 有所更新。社区关闭了 28 个 issue 和 5 个 PR，表明在推进新功能的同时也在进行积极维护。今日未发布新版本，但项目正在推进多项重大架构变更——尤其是范围限定凭证管理、通道增强以及 provider 重构。安全性相关的 RFC #12422 仍是最活跃的讨论话题，反映出社区对凭证隔离的高度重视。缺陷队列中有多个 S1 级别的回归问题需要关注，而 PR 堆栈中包含多个面向下一发布窗口的大型功能特性。

## 2. 版本发布

**今日无新版本发布。**

项目在上个摘要周期之前发布了最后一批版本。维护者似乎正专注于合并大量在途的 PR，之后再打新版本标签。

## 3. 项目进展

### 已合并/关闭的 PR（5 项）

| # | 标题 | 类型 | 状态 |
|---|-------|------|--------|
| #11525 | Bug: quickstart fails on Android/Termux | bug | Closed |
| #10901 | Bug: Mattermost drops the first message in newly auto-discovered DMs | bug | Closed |
| #12390 | shell tool returns empty error string on non-zero exit | bug | Closed |
| #12203 | web_search_tool silently compiled out without tools-external | bug | Closed |
| #11858 | send_via advertises reply routing in headless turns | bug | Closed |

### 正在推进的亮点 PR

- **#12444** — Provider 能力契约重构（size:L）：统一跨 providers 的 ASR/TTS、embedding 及 System One 实现。
- **#12695** — WebDAV 远程文件工具：新增 operator 定义的 WebDAV 目录，支持加密的 Remote Files 授权。
- **#12659** — SSH 密码/TOTP vault 授权：基于 vault 权限限定 SSH 认证范围。
- **#12596** — 浏览器用户名/密码及 TOTP 范围限定：按 HTTPS origin 独立授权浏览器凭证。
- **#12490** — 范围限定的 Authorization Token 凭证：HTTP Bearer 支持 API token 别名。
- **#12316** — SimpleX 消息通道：原生 Rust XMPP 实现，支持语音笔记和加密通话。
- **#12322** — SQLite 3.54.1 升级：修复 RUSTSEC-2026-0459 安全公告。

## 4. 社区热点

### 评论最活跃的 Issue

| # | 标题 | 评论数 | 链接 |
|---|-------|----------|------|
| #12422 | RFC: Scoped use of operator-managed service credentials | 16 | [Issue #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) |
| #11418 | Bug: "Copy" one-click feature not working | 8 | [Issue #11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) |
| #8600 | Feature: easy per-chat model switching for multi-model providers | 6 | [Issue #8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) |
| #9945 | browser tool exposes only 16 of 100+ commands | 6 | [Issue #9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) |
| #11332 | Skill review/creation not running for webhook/gateway turns | 6 | [Issue #11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) |

**分析：**
RFC #12422 以 16 条评论占据主导地位，表明社区对 operator 管理凭证的安全架构有强烈参与度。按聊天切换模型的功能请求（#8600，6 条评论）反映了用户对更细粒度 provider 控制的需求，尤其是从 MoltIs 迁移的用户。浏览器工具覆盖率问题（#9945）指出目前仅暴露了 `agent-browser` 100+ 命令中的 16 个——这对表单密集型自动化工作流至关重要。

### 评论最活跃的 PR

| # | 标题 | 规模 | 链接 |
|---|-------|------|------|
| #12444 | refactor(providers): centralize capability contracts | L | [PR #12444](https://github.com/zeroclaw-labs/zeroclaw/pull/12444) |
| #11847 | feat(channels): add native Rust XMPP with optional legacy OMEMO | XL | [PR #11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) |
| #11869 | feat(tools): add opt-in task-owned SSH transport reuse | XL | [PR #11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) |
| #12316 | feat(channels): add SimpleX messaging, voice notes, encrypted calls | XL | [PR #12316](https://github.com/zeroclaw-labs/zeroclaw/pull/12316) |
| #12059 | feat(providers): honor runtime-profile thinking for OpenAI | XL | [PR #12059](https://github.com/zeroclaw-labs/zeroclaw/pull/12059) |

**分析：**
XL 规模的 PR 在堆栈中占主导，表明正在推进重大架构特性。XMPP（#11847）和 SimpleX（#12316）通道的并行推进彰显了对协议多样性的承诺。SSH 传输复用（#11869）解决了长期运行委托任务的性能问题。

## 5. 缺陷与稳定性

### S1 — 工作流受阻（严重）

| # | 标题 | 组件 | 链接 |
|---|-------|-----------|------|
| #12597 | Telegram channel stops receiving when voice transcription fails | channel | [Issue #12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) |
| #12570 | Daemon hangs at startup with millions of `runtime-trace.tmp.*` files | runtime/daemon | [Issue #12570](https://github.com/zeroclaw-labs/zeroclaw/issues/12570) |
| #10863 | Telegram retries rejected voice updates indefinitely | channel | [Issue #10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) |
| #12075 | Android: shell tool always fails — `/system/bin/sh` cannot be canonicalized | tools | [Issue #12075](https://github.com/zeroclaw-labs/zeroclaw/issues/12075) |
| #11525 | quickstart fails on Android/Termux | config/onboarding | [Issue #11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) |

**Telegram 回归模式：** 两个独立问题（#12597、#10863）影响 Telegram 语音处理——第一个导致转录失败时无限重试，第二个在被拒绝的语音更新后阻塞后续消息。这些可能存在共同的根本原因。

**守护进程稳定性：** #12570 暴露了双重缺陷：滚动清理临时文件时出错导致泄漏，累积数百万文件后导致启动挂起。修复 PR 尚未提交。

### S2 — 功能降级

| # | 标题 | 组件 | 链接 |
|---|-------|-----------|------|
| #11332 | Skill review/creation not running for channel/webhook/gateway turns | runtime/daemon | [Issue #11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) |
| #11336 | plugin info/list report loads for plugins runtime refuses to register | plugins | [Issue #11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) |
| #12558 | Matrix tool-approval prompts posted to room timeline instead of thread | channel | [Issue #12558](https://github.com/zeroclaw-labs/zeroclaw/issues/12558) |
| #11896 | memory recall returns nothing when embedder fails, hangs when it stalls | memory | [Issue #11896](https://github.com/zeroclaw-labs/zeroclaw/issues/11896) |

**已有修复 PR：** #12224 修复了 Matrix 线程发布问题；#11911 在通道故障时保留已完成的工具结果。

### S3 — 次要问题

| # | 标题 | 组件 | 链接 |
|---|-------|-----------|------|
| #12660 | Agent cards "this month" spend shows all-time spend | web dashboard | [Issue #12660](https://github.com/zeroclaw-labs/zeroclaw/issues/12660) |
| #11916 | Quiet NO_REPLY cron results appear in open web chats | runtime/daemon | [Issue #11916](https://github.com/zeroclaw-labs/zeroclaw/issues/11916) |
| #11758 | WhatsApp Web keeps printing QR codes after listener stops | channel | [Issue #11758](https://github.com/zeroclaw-labs/zeroclaw/issues/11758) |
| #10976 | WhatsApp mentions broken inbound and outbound | channel:whatsapp | [Issue #10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976) |

## 6. 功能请求与路线图信号

### 已有活跃 PR 的高影响力请求

| # | 标题 | 优先级 | 状态 | 链接 |
|---|-------|----------|--------|------|
| #12422 | RFC: Scoped operator-managed service credentials | security | RFC | [Issue #12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) |
| #8600 | Easy per-chat model switching for multi-model providers | p2 | accepted | [Issue #8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) |
| #9945 | Browser tool needs iframes, dialogs, tabs, form controls | p2 | blocked | [Issue #9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) |
| #12614 | Browser tool needs file-upload action | — | open | [Issue #12614](https://github.com/zeroclaw-labs/zeroclaw/issues/12614) |
| #12690 | Remote Files tool with native host integration | RFC | open | [Issue #12690](https://github.com/zeroclaw-labs/zeroclaw/issues/12690) |
| #8321 | Define response-cache policy for volatile runtime context | p2 | icebox | [Issue #8321](https://github.com/zeroclaw-labs/zeroclaw/issues/8321) |
| #11753 | Configurable acknowledgement reactions | — | in-progress | [Issue #11753](https://github.com/zeroclaw-labs/zeroclaw/issues/11753) |

**路线图预测：** 凭证范围限定工作（#12422、#12517、#12490、#12408）构成了一个连贯的安全主题，很可能进入下一个次版本发布。浏览器工具扩展（#9945、#12614）和按聊天模型切换（#8600）解决了用户痛点，可能紧随其后。存储策略重构（#10073）鉴于其性能回归性质，应尽快落地。

## 7. 用户反馈摘要

### 已识别的痛点

**通道可靠性：** 多个 Telegram 回归问题正在引发生产事故。当语音转录失败（#12597）或被拒绝的更新阻塞后续消息（#10863）时，用户报告工作流被阻塞。WhatsApp 双向提及均有问题（#10976），影响了团队协作场景。

**插件系统困惑：** 插件 CLI 通过验证，但运行时静默拒绝注册（#11336），导致用户无法诊断工具为何不出现。这在插件生态中造成了信任缺口。

**跨平台 Shell 工具：** Android/Termux 用户完全无法使用 shell 工具（#12075），阻断了移动优先工作流。快速入门在该平台也失败（#11525），造成了糟糕的首次运行体验。

**学习循环不一致：** 启用了 `skill_improvement` 和 `skill_creation` 的 Agent 仅从 CLI/cron 运行中学习，而不从 Matrix、webhook 或 gateway UI 中学习（#11332）。用户期望跨通道行为一致。

### 正面信号

- 活跃 PR #11874 解决了通道长时间运行 turn 内进度报告的长期请求
- 存储策略改进（#10073）和 SQLite 升级（#12322）表明对性能问题的响应速度
- 通道集成的广度（XMPP、SimpleX、WebDAV）表明对协议灵活性的承诺

## 8. 待办关注

### 需要维护者关注的长期待回复重要 Issue

| # | 标题 | 等待时长 | 评论数 | 风险 | 链接 |
|---|-------|-----|----------|------|------|
| #8600 | Per-chat model switching | ~145 天 | 6 | high | [Issue #8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) |
| #8321 | Response-cache policy for volatile context | ~152 天 | 4 | medium | [Issue #8321](https://github.com/zeroclaw-labs/zeroclaw/issues/8321) |
| #10073 | Retire StoragePolicy::Rolling | ~98 天 | 5 | high | [Issue #10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) |
| #9945 | Browser tool exposes only 16 of 100+ commands | ~104 天 | 6 | high | [Issue #9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) |
| #11332 | Skill learning not running for webhook/gateway turns | ~54 天 | 6 | high | [Issue #11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) |

### 需要维护者 review 的 PR

| # | 标题 | 规模 | 风险 | 链接 |
|---|-------|------|------|------|
| #11869 | SSH transport reuse | XL | high | [PR #11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) |
| #11874 | Report progress during long agent turns | M | medium | [PR #11874](https://github.com/zeroclaw-labs/zeroclaw/pull/11874) |
| #12459 | Enable browser voice for OIDC sessions | M | medium | [PR #12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459) |

**注意：** #12459 标记为 `do-not-merge`，推进前可能需要明确范围。

---

*摘要基于 2026-11-24 的 ZeroClaw 活动数据生成。数据来源：GitHub API。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*