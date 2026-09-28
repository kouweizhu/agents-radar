# OpenClaw 生态日报 2026-09-28

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-28 01:06 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the project digest into Simplified Chinese. I need to:
1. Translate all the content while preserving the exact markdown structure
2. Keep all technical identifiers, URLs, issue/PR numbers, usernames, etc. as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me go through each section and translate it:

**Today's Overview** - 今日概览
**Releases** - 发布动态
**Project Progress** - 项目进展
**Community Hot Topics** - 社区热点
**Bugs & Stability** - 缺陷与稳定性
**Feature Requests & Roadmap Signals** - 功能请求与路线图信号
**User Feedback Summary** - 用户反馈摘要
**Backlog Watch** - 待办事项关注

I'll translate the content now, making sure to preserve all formatting, tables, and technical elements.</think>

# OpenClaw 项目摘要 — 2026-09-28

## 今日概览

OpenClaw 仍处于紧张的稳定性维护期，项目即将发布 2026.9.7 版本。仓库保持高活跃度，过去 24 小时内有 **500 个 Issue** 和 **500 个 PR** 更新，但值得注意的是 **本周无新版本发布**。积压的 Issue 已增至 475 个开放状态，同时关闭了 25 个——表明团队在积极进行分类处理但新报告仍持续涌入。多个 P0 级稳定性问题正占用大量开发资源，特别是内存管理、数据库损坏和 Gateway 组件崩溃循环方面的问题。据报道，项目正处于下一个版本发布前的稳定冲刺阶段，2026.9.7 版本已确定 18/21 个 P1 级别候选修复。

---

## 发布动态

**2026-09-28** 无新版本发布。最近的版本仍为 **2026.9.6**（提交 `eb377ac`）。项目正在 Issue #157531 中追踪 2026.9.6 到 2026.9.7 之间的修复进度，该问题已收录 18/21 个待集成的 P1 级别候选。

---

## 项目进展

以下 Pull Request 在过去 24 小时内取得显著进展：

| PR | 作者 | 状态 | 摘要 |
|----|--------|--------|---------|
| [#159347](https://github.com/openclaw/openclaw/pull/159347) | steipete | 📣 needs proof | **fix(windows): recover Gateway restarts from SQLite sharing errors** — 解决 Windows 计划任务中 `SQLITE_IOERR_TRUNCATE` 导致的 P0 级故障 |
| [#159297](https://github.com/openclaw/openclaw/pull/159297) | chelsealong | 📣 needs proof | **fix(daemon): retry transient SQLITE_IOERR owner-lease read** — P0 修复，解决 Windows Gateway 停止/重启竞态条件 |
| [#152875](https://github.com/openclaw/openclaw/pull/152875) | DonnieFi | 👀 ready for maintainer look | **fix(build): refuse dist rebuild under a live managed Gateway** — 防止源码构建替换正在使用的模块 |
| [#159935](https://github.com/openclaw/openclaw/pull/159935) | eliasopolski | 👀 ready for maintainer look | **fix(agents): isolate catalog worker state and heap** — 解决内存泄漏问题，工人在每个请求中累积约 8MB |
| [#159940](https://github.com/openclaw/openclaw/pull/159940) | DonnieFi | 📣 needs proof | **fix(agents): report visible task start failures** — 改进子会话启动失败时的错误处理 |
| [#159847](https://github.com/openclaw/openclaw/pull/159847) | steipete | 👀 ready for maintainer look | **refactor: delete unreferenced production code** — 大规模清理，移除不可达代码路径 |
| [#159401](https://github.com/openclaw/openclaw/pull/159401) | steipete | 👀 ready for maintainer look | **chore(deps): refresh dependencies** — 9 月 19 日依赖版本刷新 |

**已合并/关闭：** 过去 24 小时内有 111 个 PR 被合并或关闭，表明尽管 Issue 数量庞大，团队仍维持着可观的吞吐量。

---

## 社区热点

最活跃的讨论集中在稳定性关键问题上：

### 关注度最高的 Issue

1. **[#159356](https://github.com/openclaw/openclaw/issues/159356)** — *llama.cpp manager reports ready while embedding child exits*（25 条评论，P2）
   - **摘要：** 嵌入请求返回 HTTP 500；将主机内存从 4GB 升级到 8GB 后恢复运行
   - **根因推测：** 内存压力导致 OOM 相关故障

2. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — *OpenClaw leaks unreaped hook/tool child processes*（16 条评论，P1）
   - **摘要：** Hook/Tool 执行产生的僵尸进程累积导致运行时性能下降
   - **影响：** 消息丢失、崩溃循环风险

3. **[#157531](https://github.com/openclaw/openclaw/issues/157531)** — *2026.9.7 Fixes Tracker*（15 条评论，P0）
   - **摘要：** 追踪 2026.9.6 到 2026.9.7 之间的 18/21 个 P1 级别候选修复

4. **[#127148](https://github.com/openclaw/openclaw/issues/127148)** — *Codex sessions.compact acquires a second app-server*（12 条评论，P1）
   - **摘要：** 手动压缩绑定的 Codex 会话时出现活跃写入冲突

### 关注度最高的 PR

- **[#156389](https://github.com/openclaw/openclaw/pull/156389)** — fix(ollama): tag native pre-tool narration as commentary — Ready for maintainer look
- **[#159516](https://github.com/openclaw/openclaw/pull/159516)** — feat(approvals): show plugin requester context — Needs proof（安全相关）
- **[#159997](https://github.com/openclaw/openclaw/pull/159997)** — fix(ui): work logs split when tasks resume — 已提供截图证明

---

## 缺陷与稳定性

### 活跃的 P0 级缺陷

| Issue | 摘要 | 严重程度 | 状态 |
|-------|---------|----------|--------|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | 全新重建的 SQLite 数据库在 15–24 小时内再次损坏 | P0，影响：数据丢失、崩溃循环 | OPEN |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | Gateway 在 plugin-doctor-post-session-state 时崩溃循环 | P0，影响：用户体验-发布阻塞 | OPEN |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows 自动更新失败，原因是 `$OPENCLAW_STATE_DIR` 未展开 | P0，影响：用户体验-发布阻塞 | OPEN |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS 应用就绪监控 SIGTERM 慢启动的 gateway | P0，崩溃循环 | OPEN |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 超出 V8 堆导致 OOM | P0，崩溃循环 | OPEN |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | Gateway worker 在 acquireSqliteWorkerLifecycle 后保持状态生命周期 | P0，消息丢失 | OPEN |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) | Catalog worker 每个请求重建发现注册表约 8MB | P0，崩溃循环 | OPEN |

### P1 级回归/行为缺陷

| Issue | 摘要 | 影响 |
|-------|---------|--------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 未回收子进程导致僵尸进程泄漏 | 会话状态、崩溃循环 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动耗时随插件数量线性增长（120 秒以上） | 用户体验-发布阻塞 |
| [#157605](https://github.com/openclaw/openclaw/issues/157605) | 2026.9.6 升级后持续高 CPU（240–276%） | 其他 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | 插件源码捕获每个 CLI 命令重写 1.1–1.4 GB | SSD 损耗 |

**修复中的 PR：** [#159347](https://github.com/openclaw/openclaw/pull/159347)（Windows SQLite）、[#159297](https://github.com/openclaw/openclaw/pull/159297)（守护进程重试）、[#159935](https://github.com/openclaw/openclaw/pull/159935)（catalog worker 堆内存）

---

## 功能请求与路线图信号

值得关注的功能请求和增强信号：

1. **[#63990](https://github.com/openclaw/openclaw/issues/63990)** — *功能：支持模型感知故障转移的多索引嵌入内存*（P3）
   - **请求：** 原生多索引嵌入支持，实现无向量语义损坏的供应商/模型故障转移
   - **信号：** 生产环境中嵌入可靠性担忧

2. **[#152839](https://github.com/openclaw/openclaw/issues/152839)** — *获取 gateway 状态锁时优雅处理 openat2 ENOSYS*（P0 增强）
   - **使用场景：** 在 Synology NAS 上的 Docker Compose 中运行 OpenClaw

3. **[#123799](https://github.com/openclaw/openclaw/issues/123799)** — *需要针对生产环境中受 Codex compact 404 影响的用户提供安全升级/回滚指南*
   - **信号：** 生产部署寻求版本迁移的操作指南

4. **[#157500](https://github.com/openclaw/openclaw/pull/157500)**（PR）— *feat(workers): authenticate stock GitHub clients on enterprise workers*
   - **进展：** 使临时云 worker 可使用短期 GitHub App 令牌

**路线图预测：** 鉴于 2026.9.7 修复追踪器（#157531）的活跃状态以及 P0 稳定性缺陷的密度，下一版本可能聚焦于：(1) SQLite/数据库稳定性修复，(2) 内存管理改进，(3) Windows/macOS 平台特定崩溃修复。

---

## 用户反馈摘要

### 从活跃 Issue 中识别的痛点

| 痛点 | 证据 | 影响 |
|------------|----------|--------|
| **内存压力导致不稳定** | 多起 OOM 报告（#159356、#154812），catalog worker 泄漏（#159514） | 会话崩溃、数据丢失风险 |
| **生产环境中 SQLite 损坏** | #126821 报告全新数据库在 15–24 小时内损坏 | Gateway "瘫痪"模式、数据丢失 |
| **插件/系统启动缓慢** | #155859 报告启用插件后启动需 120 秒以上 | 用户体验下降 |
| **僵尸进程累积** | #97616 描述未回收子进程问题 | 运行时性能随时间下降 |
| **Windows 更新失败** | #157812、#158231 报告多种失败模式 | 用户体验摩擦、发布阻塞 |
| **高负载下多通道消息丢失** | #157389 描述飞书通道在高负载下失败 | 生产环境消息丢失 |

### 积极信号

- 活跃的修复追踪器（#157531）包含 18/21 个候选，表明分类和发布管理得力
- 多个 PR 推进到 "ready for maintainer look"，表明代码审查流程健康
- 社区参与度保持高位（热门 Issue 25 条评论，#97616 有 8 条）

---

## 待办事项关注

### 需要维护者关注的长等待重要 Issue

| Issue | 存在时间 | 状态 | 阻塞原因 |
|-------|-----|---------|---------|
| [#84110](https://github.com/openclaw/openclaw/issues/84110) | 2026-05-19（~4 个月） | 需要维护者审查 | Codex 提示缓存回归，2 👍 |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | 2026-08-03（~2 个月） | 需要维护者审查 | Claude CLI 会话限制错误处理 |
| [#120006](https://github.com/openclaw/openclaw/issues/120006) | 2026-08-06（~7 周） | 需要产品决策 | CLI 会话重置丢失工具历史 |
| [#124759](https://github.com/openclaw/openclaw/issues/124759) | 2026-08-16（~6 周） | 需要信息 | iOS 应用启用推理显示时卡顿 |
| [#55694](https://github.com/openclaw/openclaw/issues/55694) | 2026-03-27（~6 个月） | 可排期的修复 | Agent 工具调用失败循环（1 👍） |

### 等待作者响应的 PR

| PR | 状态 | 阻塞原因 |
|----|--------|------------|
| [#159588](https://github.com/openclaw/openclaw/pull/159588) | ⏳ waiting on author | 配置重构第四轮 |
| [#133376](https://github.com/openclaw/openclaw/pull/133376) | 📣 needs proof | Code Mode 技能文件访问 |

---

*基于 OpenClaw 仓库 2026-09-28 数据生成*

---

## 横向生态对比

<think>The user wants me to translate this cross-project analysis report from English to Chinese. I need to:

1. Translate all the content while maintaining the exact Markdown structure
2. Keep all technical terms, project names, URLs, code references, issue numbers, etc. in their original form
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through and translate this carefully while preserving the structure.

The report has:
- 7 sections with headings
- Tables (some with alignment)
- Lists (bulleted and numbered)
- Emojis
- Code-like elements (file paths, issue numbers, version numbers)

Let me translate section by section:

---

# 跨项目生态系统分析：个人 AI 助手与智能体

## 1. 生态系统概览

个人 AI 助手与智能体领域正在经历快速增长，五个活跃的开源项目之间存在显著差异。OpenClaw 和 Hermes Agent 在活动量上占据主导地位，24 小时内分别有 500 和 50 次更新，而 ZeroClaw 保持强劲开发势头，有 43 个 issues 和 50 个 PRs。IronClaw 活动极少，可能处于成熟期或开发力度减弱。QwenPaw 处于中等水平，有 8 个 issues 和 4 个 PRs。值得注意的是，所有项目在过去 24 小时内均无发布，表明大家的关注点都在进行中的开发而非稳定版本发布。安全加固、多会话架构和跨平台稳定性成为主要技术主题，每个项目针对不同的用户群体——从企业部署（OpenClaw、ZeroClaw）到个人开发者（Hermes Agent、QwenPaw）。

## 2. 活动对比

表格数据需要保留原始格式。

## 3. OpenClaw 的定位

### 相对于竞品的优势

**规模与生态成熟度：** OpenClaw 在绝对活动量上领先（24 小时内 500 个 issues + 500 个 PRs 更新），表明其拥有最大的活跃开发者群体和社区参与度。

其 475 个开放 issues 的待处理队列反映了强烈的需求流入，尽管 25:475 的关闭比例（每天 5.3%）引发了关于分流速度的疑虑。

**技术深度：** OpenClaw 处理的复杂度最高，包括负载下的 SQLite 数据库损坏、规模化内存管理（目录工作器内存泄漏约 8MB/请求）、多会话状态生命周期，以及 Windows/macOS 平台特定的崩溃循环。这一定位使其面向生产级企业部署，而非开发者工具。

**功能广度：** 2026.9.7 版本的 21 个 P1 候选中追踪了 18 个，同时在插件系统、网关架构和智能体工具方面积极开发，OpenClaw 提供最广泛的功能覆盖面。

### 与竞品的差异化

表格数据需要保留原始格式。

### 社区规模对比

- **OpenClaw:** 约 389 个开放 PRs，475 个开放 issues → 贡献者池最大
- **Hermes Agent:** 约 43 个开放 PRs，39 个开放 issues → 中等贡献者基数
- **ZeroClaw:** 约 47 个开放 PRs，37 个开放 issues → 活跃但规模小于 OpenClaw
- **QwenPaw:** 约 4 个开放 PRs，6 个开放 issues → 贡献者活动有限
- **IronClaw:** 约 5 个开放 PRs，1 个开放 issue → 极简社区参与

## 4. 共同的技术焦点领域

### 多项目涌现的需求

**上下文/内存管理（OpenClaw、QwenPaw、ZeroClaw）**

- OpenClaw: 目录工作器内存泄漏 (#159514)、网关 RSS 失控、上下文生命周期问题
- QwenPaw: 上下文压缩时机混乱 (#7994)、上下文指示器不更新 (#7994)、智能体上下文生命周期 (#4525)
- ZeroClaw: 知识图谱作为一等公民内存层 RFC (#11053)、持久会话提示附件 (#10407)

*趋同信号：* 三个项目都认识到上下文管理的重要性。预计整个行业将在内存生命周期、压缩触发器和持久状态方面持续投入。

**跨平台稳定性（OpenClaw、Hermes Agent）**

- OpenClaw: Windows SQLite 错误 (#159347)、macOS 应用就绪监控 (#158936)、Windows 自动更新失败 (#157812)
- Hermes Agent: Windows 安装失败 (#125657, #125350)、Windows 子进程挂起 (#107232)、Linux 桌面启动器 (#122438)

*趋同信号：* Windows 仍是最困难的平台。两个项目都大力投入 Windows 特定的错误处理、安装引导和进程管理。

**安全加固（OpenClaw、ZeroClaw）**

- OpenClaw: 安全敏感 PRs (#159516, 插件请求者上下文)、未回收的子进程可能导致权限提升 (#97616)
- ZeroClaw: 文件下载的 SSRF 保护 (#10070 已合并)、沙箱策略模式 (#7821)、委托内存作用域 (#11198)、撤销后的环境转发 (#11197)

*趋同信号：* 安全正被作为首要关注点而非事后考虑。两个项目都实施了纵深防御。

**会话状态生命周期（OpenClaw、Hermes Agent、ZeroClaw）**

- OpenClaw: 获取 Sqlite 工作器生命周期后的网关状态生命周期 (#158095)、压缩后的会话状态 (#127148)
- Hermes Agent: 网关重启后内部事件引脚丢失 (#125793)
- ZeroClaw: 会话恢复后恢复管理员撤销后的转发环境 (#11197)

*趋同信号：* 多会话架构需要复杂的状态管理，目前仍未解决。这是一个前沿问题。

## 5. 差异化分析

### 功能焦点

| 项目 | 主要差异化 | 次要焦点 |
|------|----------|---------|
| **OpenClaw** | 企业级稳定性、SQLite 可靠性、插件生态 | 多模态工具执行 |
| **Hermes Agent** | 桌面客户端体验、跨平台安装程序 | 技能/自动化系统 |
| **IronClaw** | 工具选择优化（BM25F + 嵌入提案） | 依赖管理 |
| **QwenPaw** | AgentScope 集成、控制台/UI 优化 | 上下文可视化 |
| **ZeroClaw** | 渠道集成（WhatsApp、Telegram）、沙箱安全 | A2A 协议、实时语音 |

### 目标用户

- **OpenClaw:** 需要稳定多智能体编排的企业开发者、团队
- **Hermes Agent:** 寻求精致桌面 AI 助手的个人开发者
- **IronClaw:** 优化智能体性能的高级用户/开发者
- **QwenPaw:** 想要可视化/对话界面的 AgentScope 用户
- **ZeroClaw:** 需要安全、渠道连接智能体的隐私敏感用户

### 技术架构

- **OpenClaw:** 网关管理的会话，SQLite 持久化；插件架构；全面监控
- **Hermes Agent:** 桌面优先，cron 工作器；插件系统；基于浏览器的渲染
- **IronClaw:** Rust 智能体运行时；最小依赖
- **QwenPaw:** WebUI 中心化；AgentScope 后端集成；上下文感知
- **ZeroClaw:** 沙箱优先安全模型；渠道无关设计；Wyoming 协议支持

## 6. 社区动能与成熟度

### 活动层级

**第一层——快速迭代：**

- **OpenClaw**（24 小时内 500 次更新）：高速度开发，有大量 bug 积压。风险：分流债务。机会：最大的社区。
- **ZeroClaw**（24 小时内 50 次更新）：强大的合并率（3/50 = 6% 已关闭），安全优先开发，活跃的 RFC 流程。健康迹象。

**第二层——稳定开发：**

- **Hermes Agent**（24 小时内 50 次更新）：均衡的吞吐量，良好的 PR 合并率（7/50 = 14%），多样化的功能开发。成熟流程。

**第三层——维护/缓慢：**

- **QwenPaw**（8 个 issues / 4 个 PRs）：低量但稳定。2 个 issues 已关闭表明活跃的分流。规模小但功能正常。
- **IronClaw**（1 个 issue / 6 个 PRs）：主要是依赖更新。表明要么成熟要么投入减少。风险：可能放弃。

### 成熟度指标

| 项目 | 发布节奏 | 问题解决 | RFC 流程 | 安全关注 |
|------|---------|---------|---------|---------|
| OpenClaw | 活跃（v2026.9.6 → v2026.9.7） | 中等（每天 25/500） | 通过修复追踪器隐式进行 | 高 |
| Hermes Agent | 活跃 | 良好（每天 11/50） | 无可见 RFC | 中 |
| IronClaw | 不明确 | 极简活动 | 无 | 低 |
| QwenPaw | 中等 | 活跃（2/8 已关闭） | 无 | 低 |
| ZeroClaw | 活跃（v0.8.x） | 强劲（每天 6/43） | 有（#11053） | 高 |

## 7. AI 智能体开发者趋势信号

### 从社区反馈中提取的行业趋势

**1. 内存/上下文管理是下一个前沿**

多个项目（OpenClaw、QwenPaw、ZeroClaw）独立解决上下文生命周期问题。关于压缩触发器、保留策略和持久内存缺乏共识，表明这是一个未解决的空间。开发者应期待此领域的持续创新。

*信号：* 现在就投资上下文管理工具；关注 ZeroClaw 的知识图谱 RFC 和 OpenClaw 的会话压缩工作。

**2. 安全不再是可选的**

ZeroClaw 的 SSRF 保护、沙箱策略模式和环境保护——加上 OpenClaw 的 P0 安全 bug——表明行业已经成熟到可以面对对抗场景。工具级访问控制（文件下载门控、沙箱化）正在成为标准。

*信号：* 智能体框架必须实施纵深防御；安全将成为竞争差异化因素。

**3. 桌面体验仍然困难**

Hermes Agent 和 OpenClaw 都在 Windows 安装、桌面集成和进程管理方面困难重重。桌面智能体体验尚未解决，存在差异化机会。

*信号：* 桌面客户端开发者面临共同挑战；跨项目合作进行平台抽象可能惠及所有参与者。

**4. 多会话架构复杂**

OpenClaw 的会话状态问题、Hermes Agent 的网关重启问题以及 ZeroClaw 的环境转发 bug 都源于多会话复杂性。这需要系统性解决方案。

*信号：* 构建多智能体系统的团队应该为状态生命周期调试预留大量时间。

**5. 渠道集成正在激增**

ZeroClaw 的 WhatsApp、Telegram 和 Matrix 工作证明了将智能体嵌入现有通信平台的需求。这与"独立助手"模式形成对比。

*信号：* 考虑渠道优先的分发策略；关注 ZeroClaw 的渠道架构。

### AI 智能体开发者的价值

| 洞察 | 可操作的要点 |
|------|-------------|
| 上下文管理未解决 | 现在就构建抽象；避免硬编码压缩逻辑 |
| Windows 是最困难的平台 | 优先进行 Windows 测试；没有 Windows QA 不要发布 |
| 安全是每个人的工作 | 从第一天就实施工具级访问控制 |
| 多会话状态复杂 | 明确设计状态机；记录状态转换 |
| 渠道是分发渠道 | 考虑 WhatsApp/Telegram 集成以获取用户 |

---

*跨项目分析基于 2026 年 9 月 28 日 OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw 的数据综合而成。*</think>

# 跨项目生态系统分析：个人 AI 助手与智能体

## 1. 生态系统概览

个人 AI 助手与智能体领域正在经历快速增长，五个活跃的开源项目之间存在显著差异。OpenClaw 和 Hermes Agent 在活动量上占据主导地位，24 小时内分别有 500 和 50 次更新，而 ZeroClaw 保持强劲开发势头，有 43 个 issues 和 50 个 PRs。IronClaw 活动极少，可能处于成熟期或开发力度减弱。QwenPaw 处于中等水平，有 8 个 issues 和 4 个 PRs。值得注意的是，所有项目在过去 24 小时内均无发布，表明大家的关注点都在进行中的开发而非稳定版本发布。安全加固、多会话架构和跨平台稳定性成为主要技术主题，每个项目针对不同的用户群体——从企业部署（OpenClaw、ZeroClaw）到个人开发者（Hermes Agent、QwenPaw）。

---

## 2. 活动对比

| 项目 | Issues 更新 (24h) | 开放 Issues | PRs 更新 (24h) | 开放 PRs | Releases (24h) | 健康度 |
|------|-------------------|-------------|----------------|----------|----------------|--------|
| **OpenClaw** | 500 | 475 | 500 | 389 | 0 | ⚠️ 高活动量，中等关闭率 |
| **Hermes Agent** | 50 | 39 | 50 | 43 | 0 | ✅ 活动均衡 |
| **IronClaw** | 1 | 1 | 6 | 5 | 0 | 🔶 低活动，维护模式 |
| **QwenPaw** | 8 | 6 | 4 | 4 | 0 | 🔶 稳定但低吞吐 |
| **ZeroClaw** | 43 | 37 | 50 | 47 | 0 | ✅ PR 合并率强劲 (3 已关闭) |

*健康度：✅ = 吞吐健康，⚠️ = 积压令人担忧，🔶 = 信号不足/低*

---

## 3. OpenClaw 的定位

### 相对于竞品的优势

**规模与生态成熟度：** OpenClaw 在绝对活动量上领先（24 小时内 500 个 issues + 500 个 PRs 更新），表明其拥有最大的活跃开发者群体和社区参与度。其 475 个开放 issues 的待处理队列反映了强烈的需求流入，尽管 25:475 的关闭比例（每天 5.3%）引发了关于分流速度的疑虑。

**技术深度：** OpenClaw 处理的复杂度最高，包括负载下的 SQLite 数据库损坏、规模化内存管理（目录工作器内存泄漏约 8MB/请求）、多会话状态生命周期，以及 Windows/macOS 平台特定的崩溃循环。这一定位使其面向生产级企业部署，而非开发者工具。

**功能广度：** 2026.9.7 版本的 21 个 P1 候选中追踪了 18 个，同时在插件系统、网关架构和智能体工具方面积极开发，OpenClaw 提供最广泛的功能覆盖面。

### 与竞品的差异化

| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|------|----------|--------------|----------|---------|----------|
| **主要焦点** | 企业级多会话 | 桌面客户端 | 工具选择优化 | 上下文管理 | 渠道与安全 |
| **平台** | 跨平台 | 桌面优先 | CLI/服务器 | WebUI + 桌面 | 服务器 + 渠道 |
| **架构** | 网关管理会话 | 单网关 | 智能体运行时 | AgentScope 集成 | 沙箱优先 |

### 社区规模对比

- **OpenClaw:** 约 389 个开放 PRs，475 个开放 issues → 贡献者池最大
- **Hermes Agent:** 约 43 个开放 PRs，39 个开放 issues → 中等贡献者基数
- **ZeroClaw:** 约 47 个开放 PRs，37 个开放 issues → 活跃但规模小于 OpenClaw
- **QwenPaw:** 约 4 个开放 PRs，6 个开放 issues → 贡献者活动有限
- **IronClaw:** 约 5 个开放 PRs，1 个开放 issue → 极简社区参与

---

## 4. 共同的技术焦点领域

### 多项目涌现的需求

**上下文/内存管理（OpenClaw、QwenPaw、ZeroClaw）**

- OpenClaw: 目录工作器内存泄漏 (#159514)、网关 RSS 失控、上下文生命周期问题
- QwenPaw: 上下文压缩时机混乱 (#7994)、上下文指示器不更新 (#7994)、智能体上下文生命周期 (#4525)
- ZeroClaw: 知识图谱作为一等公民内存层 RFC (#11053)、持久会话提示附件 (#10407)

*趋同信号：* 三个项目都认识到上下文管理的重要性。预计整个行业将在内存生命周期、压缩触发器和持久状态方面持续投入。

**跨平台稳定性（OpenClaw、Hermes Agent）**

- OpenClaw: Windows SQLite 错误 (#159347)、macOS 应用就绪监控 (#158936)、Windows 自动更新失败 (#157812)
- Hermes Agent: Windows 安装失败 (#125657, #125350)、Windows 子进程挂起 (#107232)、Linux 桌面启动器 (#122438)

*趋同信号：* Windows 仍是最困难的平台。两个项目都大力投入 Windows 特定的错误处理、安装引导和进程管理。

**安全加固（OpenClaw、ZeroClaw）**

- OpenClaw: 安全敏感 PRs (#159516, 插件请求者上下文)、未回收的子进程可能导致权限提升 (#97616)
- ZeroClaw: 文件下载的 SSRF 保护 (#10070 已合并)、沙箱策略模式 (#7821)、委托内存作用域 (#11198)、撤销后的环境转发 (#11197)

*趋同信号：* 安全正被作为首要关注点而非事后考虑。两个项目都实施了纵深防御。

**会话状态生命周期（OpenClaw、Hermes Agent、ZeroClaw）**

- OpenClaw: 获取 Sqlite 工作器生命周期后的网关状态生命周期 (#158095)、压缩后的会话状态 (#127148)
- Hermes Agent: 网关重启后内部事件引脚丢失 (#125793)
- ZeroClaw: 会话恢复后恢复管理员撤销后的转发环境 (#11197)

*趋同信号：* 多会话架构需要复杂的状态管理，目前仍未解决。这是一个前沿问题。

---

## 5. 差异化分析

### 功能焦点

| 项目 | 主要差异化 | 次要焦点 |
|---------|----------------------|------------------|
| **OpenClaw** | 企业级稳定性、SQLite 可靠性、插件生态 | 多模态工具执行 |
| **Hermes Agent** | 桌面客户端 UX、跨平台安装程序 | 技能/自动化系统 |
| **IronClaw** | 工具选择优化（BM25F + 嵌入提案） | 依赖管理 |
| **QwenPaw** | AgentScope 集成、控制台/UI 优化 | 上下文可视化 |
| **ZeroClaw** | 渠道集成（WhatsApp、Telegram）、沙箱安全 | A2A 协议、实时语音 |

### 目标用户

- **OpenClaw:** 需要稳定多智能体编排的企业开发者、团队
- **Hermes Agent:** 寻求精致桌面 AI 助手的个人开发者
- **IronClaw:** 优化智能体性能的高级用户/开发者
- **QwenPaw:** 想要可视化/对话界面的 AgentScope 用户
- **ZeroClaw:** 需要安全、渠道连接智能体的隐私敏感用户

### 技术架构

- **OpenClaw:** 网关管理的会话，SQLite 持久化；插件架构；全面监控
- **Hermes Agent:** 桌面优先，cron 工作器；插件系统；基于浏览器的渲染
- **IronClaw:** Rust 智能体运行时；最小依赖
- **QwenPaw:** WebUI 中心化；AgentScope 后端集成；上下文感知
- **ZeroClaw:** 沙箱优先安全模型；渠道无关设计；Wyoming 协议支持

---

## 6. 社区动能与成熟度

### 活动层级

**第一层——快速迭代：**

- **OpenClaw**（24 小时内 500 次更新）：高速度开发，有大量 bug 积压。风险：分流债务。机会：最大的社区。
- **ZeroClaw**（24 小时内 50 次更新）：强大的合并率（3/50 = 6% 已关闭），安全优先开发，活跃的 RFC 流程。健康迹象。

**第二层——稳定开发：**

- **Hermes Agent**（24 小时内 50 次更新）：均衡的吞吐量，良好的 PR 合并率（7/50 = 14%），多样化的功能开发。成熟流程。

**第三层——维护/缓慢：**

- **QwenPaw**（8 个 issues / 4 个 PRs）：低量但稳定。2 个 issues 已关闭表明活跃的分流。规模小但功能正常。
- **IronClaw**（1 个 issue / 6 个 PRs）：主要是依赖更新。表明要么成熟要么投入减少。风险：可能放弃。

### 成熟度指标

| 项目 | 发布节奏 | 问题解决 | RFC 流程 | 安全关注 |
|---------|-----------------|------------------|-------------|----------------|
| OpenClaw | 活跃（v2026.9.6 → v2026.9.7） | 中等（每天 25/500） | 隐式通过修复追踪器 | 高 |
| Hermes Agent | 活跃 | 良好（每天 11/50） | 无可见 RFC | 中 |
| IronClaw | 不明确 | 极简活动 | 无 | 低 |
| QwenPaw | 中等 | 活跃（2/8 已关闭） | 无 | 低 |
| ZeroClaw | 活跃（v0.8.x） | 强劲（每天 6/43） | 有（#11053） | 高 |

---

## 7. AI 智能体开发者趋势信号

### 从社区反馈中提取的行业趋势

**1. 内存/上下文管理是下一个前沿**

多个项目（OpenClaw、QwenPaw、ZeroClaw）独立解决上下文生命周期问题。关于压缩触发器、保留策略和持久内存缺乏共识，表明这是一个未解决的空间。开发者应期待此领域的持续创新。

*信号：* 现在就投资上下文管理工具；关注 ZeroClaw 的知识图谱 RFC 和 OpenClaw 的会话压缩工作。

**2. 安全不再是可选的**

ZeroClaw 的 SSRF 保护、沙箱策略模式和环境保护——加上 OpenClaw 的 P0 安全 bug——表明行业已经成熟到可以面对对抗场景。工具级访问控制（文件下载门控、沙箱化）正在成为标准。

*信号：* 智能体框架必须实施纵深防御；安全将成为竞争差异化因素。

**3. 桌面体验仍然困难**

Hermes Agent 和 OpenClaw 都在 Windows 安装、桌面集成和进程管理方面困难重重。桌面智能体体验尚未解决，存在差异化机会。

*信号：* 桌面客户端开发者面临共同挑战；跨项目合作进行平台抽象可能惠及所有参与者。

**4. 多会话架构复杂**

OpenClaw 的会话状态问题、Hermes Agent 的网关重启问题以及 ZeroClaw 的环境转发 bug 都源于多会话复杂性。这需要系统性解决方案。

*信号：* 构建多智能体系统的团队应该为状态生命周期调试预留大量时间。

**5. 渠道集成正在激增**

ZeroClaw 的 WhatsApp、Telegram 和 Matrix 工作证明了将智能体嵌入现有通信平台的需求。这与"独立助手"模式形成对比。

*信号：* 考虑渠道优先的分发策略；关注 ZeroClaw 的渠道架构。

### AI 智能体开发者的价值

| 洞察 | 可操作的要点 |
|---------|----------------------|
| 上下文管理未解决 | 现在就构建抽象；避免硬编码压缩逻辑 |
| Windows 是最困难的平台 | 优先进行 Windows 测试；没有 Windows QA 不要发布 |
| 安全是每个人的工作 | 从第一天就实施工具级访问控制 |
| 多会话状态复杂 | 明确设计状态机；记录状态转换 |
| 渠道是分发渠道 | 考虑 WhatsApp/Telegram 集成以获取用户 |

---

*跨项目分析基于 2026 年 9 月 28 日 OpenClaw、Hermes Agent、IronClaw、QwenPaw 和 ZeroClaw 的数据综合而成。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese. I need to:

1. Translate all headings, body text, and table content
2. Keep technical terms, code, URLs, issue numbers, etc. in their original form
3. Preserve the Markdown structure exactly
4. Use natural technical Chinese register

Let me go through the content and translate it section by section:

**Title:** "Hermes Agent Project Digest — 2026-09-28" → "Hermes Agent 项目摘要 — 2026-09-28"

**Section 1: Today's Overview**
- Translate the paragraph about activity
- Keep technical terms like "PRs", "issues" (could keep as is or use "PR" and "issue")

**Section 2: Releases**
- "No new releases today" → "今日无新版本发布"

**Section 3: Project Progress**
- Translate table headers and content
- Keep PR numbers and URLs

**Section 4: Community Hot Topics**
- Translate the analysis section
- Keep issue numbers

**Section 5: Bugs & Stability**
- Translate headers and content
- Keep technical identifiers

**Section 6: Feature Requests & Roadmap Signals**
- Translate content
- Keep technical terms

**Section 7: User Feedback Summary**
- Translate pain points and positive signals

**Section 8: Backlog Watch**
- Translate content

**Footer:** Keep as is but translate "Generated" and "Data source"

Let me do the translation now:</think>

# Hermes Agent 项目摘要 — 2026-09-28

## 1. 今日概览

Hermes Agent 今日活跃度较高，过去 24 小时内有 50 个 issue 和 50 个 PR 更新。暂无新版本发布。项目正在解决关键的 Windows 安装问题，同时推进多会话架构和桌面 UI 优化。社区参与度高，一个 Windows 安装问题收到了 16 条评论，说明用户痛点明显。今日有 7 个 PR 已合并/关闭，表明尽管存在兼容性问题，开发交付仍在持续推进。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时内项目没有版本发布记录。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 状态 |
|----|------|------|
| [#125870](https://github.com/NousResearch/hermes-agent/pull/125870) | fmt(js): `npm run fix` 自动修复 | 已关闭 |
| [#125598](https://github.com/NousResearch/hermes-agent/pull/125598) | fix(install): Windows 10 全新安装不再因解压 pinned Git 而失败 | 已合并 |

### 今日新开的重点 PR

- **[#125883](https://github.com/NousResearch/hermes-agent/pull/125883)** — `feat(desktop): display.version_label` — 移除版本号后缀中令人困惑的 `+<distance>`
- **[#125882](https://github.com/NousResearch/hermes-agent/pull/125882)** — `feat(matrix): expose explicit pin and unpin actions` — 新增 Matrix 房间固定功能
- **[#125881](https://github.com/NousResearch/hermes-agent/pull/125881)** — 新增内存准入和压缩提交的 fail-closed 策略钩子
- **[#125880](https://github.com/NousResearch/hermes-agent/pull/125880)** — `feat(desktop): 从 cron 详情面板复制定时任务的提示词`
- **[#125878](https://github.com/NousResearch/hermes-agent/pull/125878)** — `feat(desktop): 让 show-ignored 开关可显示 out/ 和 vendor/ 等隐藏目录`
- **[#125879](https://github.com/NousResearch/hermes-agent/pull/125879)** — 通过传入 `usedforsecurity=False` 解决 FIPS 合规问题
- **[#125874](https://github.com/NousResearch/hermes-agent/pull/125874)** — 保留 MCP OAuth 在异常成功响应时的刷新状态
- **[#124882](https://github.com/NousResearch/hermes-agent/pull/124882)** — 修复 Windows 上目录替换式重试逻辑

---

## 4. 社区热点

### 评论数最高的活跃 Issue

| Issue | 标题 | 评论数 | 链接 |
|-------|------|--------|------|
| #125657 | Windows 安装：setup 时 Python 依赖报错 | 16 | [查看](https://github.com/NousResearch/hermes-agent/issues/125657) |
| #122438 | Linux 桌面启动器自我修复 Exec 指向托管 venv | 8 | [查看](https://github.com/NousResearch/hermes-agent/issues/122438) |
| #125350 | 全新 Windows 安装无法进行：Git bzip2、ffmpeg 404、mirror 403 | 7 | [查看](https://github.com/NousResearch/hermes-agent/issues/125350) |
| #107232 | Windows 子进程在 _agent_browser_session_cmd 中挂起 | 6 | [查看](https://github.com/NousResearch/hermes-agent/issues/107232) |
| #79087 | Windows 桌面运行时探测超时导致健康安装被判为需重装 | 6 | [查看](https://github.com/NousResearch/hermes-agent/issues/79087) |

### 分析

**Windows 安装是最大的痛点。** 前五个 Issue 中有三个与 Windows 安装失败有关：
- Python 依赖安装报错
- Git 解压缺少 bzip2
- ffmpeg pin 404 和 mirror 403 错误

Linux 桌面启动器问题 (#122438) 表明 GNOME 集成在升级后存在问题。这些 Issue 反映出用户在进行跨平台安装和升级时困难重重。

---

## 5. 缺陷与稳定性

### 关键 (P0-P1) 缺陷

| Issue | 标题 | 严重程度 | 修复 PR? |
|-------|------|----------|---------|
| [#125793](https://github.com/NousResearch/hermes-agent/issues/125793) | 内存中的内部事件固定：gateway 重启导致系统提示词被翻转 | P0 | — |
| [#122438](https://github.com/NousResearch/hermes-agent/issues/122438) | Linux 桌面启动器自我修复 Exec 指向托管 venv | P1 | — |
| [#122555](https://github.com/NousResearch/hermes-agent/issues/122555) | pm 激活了为另一个解释器构建的依赖环境 | P1 | — |
| [#124279](https://github.com/NousResearch/hermes-agent/issues/124279) | Cron 外部 worker 使用原始解释器，丢失运行时依赖 | P1 | 重复: #125689 |
| [#125689](https://github.com/NousResearch/hermes-agent/issues/125689) | cron：restart-safe worker 因 ModuleNotFoundError 崩溃 | P1 | — |

### 高优先级 (P2) 缺陷

- **#125350** — 全新 Windows 安装无法进行（多个根本原因）
- **#107232** — Windows 子进程执行 .cmd 文件时挂起
- **#123985** — 桌面在压缩后重复渲染会话的首条消息
- **#121095** — browser_exec 留下孤立的 browser_harness 守护进程
- **#124762** — Slack manifest 生成器限制为 50 个命令（实际限制：25）

### 可用修复
- [#125598](https://github.com/NousResearch/hermes-agent/pull/125598) — Windows 10 Git 解压修复（已合并）

---

## 6. 功能请求与路线图信号

### 重点功能请求

| Issue | 标题 | 优先级 | 信号 |
|-------|------|--------|------|
| [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) | feat(secrets): source-apply 为工具凭据注入进程 | P3 | 活跃设计中 |
| [#110662](https://github.com/NousResearch/hermes-agent/issues/110662) | 桌面附件存储应遵循配置的 profile 工作区 | P3 | 已合并 |
| [#46169](https://github.com/NousResearch/hermes-agent/issues/46169) | 桌面应支持 Ctrl+F/Cmd+F 查找功能 | P3 | 已关闭 |
| [#52532](https://github.com/NousResearch/hermes-agent/issues/52532) | 韩语支持 | P3 | 用户请求 |
| [#51694](https://github.com/NousResearch/hermes-agent/issues/51694) | 命令中心 (⌘K) 应支持全文搜索，可搜索归档/跨 profile 内容 | P3 | 用户请求 |

### 路线图指标
- **多会话架构** (#106742) — 重构为每个本地会话由一个 gateway 持有
- **Webapp 模式** (#93508) — 通过 `hermes webapp` 在浏览器中提供桌面渲染器
- **Secrets/vault 改进** — 多个 Issue (#107700, #107705, #107698, #107704) 表明正在投资凭据管理
- **内存策略钩子** (#125881) — 内存准入的安全模型：fail-closed

---

## 7. 用户反馈摘要

### 发现的痛点

1. **Windows 安装障碍** — Windows 10/11 用户无法在缺少外部工具（bzip2、ffmpeg）的情况下完成全新安装。引导安装程序在多个环节失败。

2. **Linux 桌面集成** — GNOME 上升级后启动器损坏，表明桌面集成的脆弱性。

3. **Cron Worker 故障** — 多名用户报告 cron worker 因环境配置错误导致 `ModuleNotFoundError` 而失败。

4. **会话状态丢失** — Gateway 重启导致内部事件固定丢失，引起系统提示词意外变更。

### 积极信号

- **桌面查找功能** (#46169) 关闭 — 用户请求并获得了应用内搜索
- **韩语支持** (#52532) — 正在处理国际化
- **附件存储** (#110662) — 已实现 profile 工作区合规

---

## 8. 待办事项关注

### 需要维护者关注的 Issue

| Issue | 标题 | 存在时长 | 状态 |
|-------|------|----------|------|
| [#69643](https://github.com/NousResearch/hermes-agent/issues/69643) | Linux 本地桌面安装静默失败，未注册 hermes:// 深度链接 | 约 2 个月 | 开放 |
| [#97792](https://github.com/NousResearch/hermes-agent/issues/97792) | update: bundled-skill 同步仅打印 'sync failed' — 无诊断信息 | 约 1 个月 | 开放 |
| [#107232](https://github.com/NousResearch/hermes-agent/issues/107232) | Windows 子进程在浏览器会话中挂起 | 约 18 天 | 开放 |
| [#100532](https://github.com/NousResearch/hermes-agent/issues/100532) | smart-approval ESCALATE 返回无法回答的 pending_approval | 约 27 天 | 开放 |

### 长期未合并的 PR

| PR | 标题 | 存在时长 |
|----|------|----------|
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | 一个 gateway 持有每个本地会话 | 约 19 天 |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) | feat(webapp): 在浏览器中提供桌面渲染器 | 约 35 天 |
| [#76765](https://github.com/NousResearch/hermes-agent/pull/76765) | feat(kanban): 添加审计后的 update-body 命令 | 约 57 天 |

---

*生成时间：2026-09-28 | 数据来源：GitHub NousResearch/hermes-agent*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese. I need to:
1. Translate all the content to Chinese
2. Keep all the Markdown structure exactly as-is
3. Keep URLs, numbers, issue/PR references, project names, etc. in their original form
4. Use natural technical Chinese register

Let me translate this carefully:

## 1. Today's Overview
应该是：今日概览

## 2. Project Progress
项目进展

## 3. Community Hot Topics
社区热点话题

## 4. Bugs & Stability
缺陷与稳定性

## 5. Feature Requests & Roadmap Signals
功能需求与路线图信号

## 6. User Feedback Summary
用户反馈总结

## 7. Backlog Watch
待办事项关注

Let me translate the content paragraph by paragraph while keeping the structure.</think>

# IronClaw 项目摘要 — 2026-09-28

## 1. 今日概览

IronClaw（nearai/ironclaw）在过去 24 小时内显示有 1 个新 issue 和 6 个 PR 更新。项目主要接收了多个依赖组的更新（everything-else、actions、wasm、tokio-ecosystem），其中 5 个 PR 处于开放状态，1 个已合并/关闭。没有发布新版本。唯一的新 issue 代表了一个关于优化会话初始工具选择的深思熟虑的架构提案，表明核心代理能力在持续优化中。整体活动表明项目处于稳定维护模式，而非重功能开发阶段。

## 2. 版本发布

过去 24 小时内没有发布新版本。

## 3. 项目进展

**已合并/关闭的 PR：**

- **#8104** — [chore(deps): bump everything-else group with 29 updates](https://github.com/nearai/ironclaw/pull/8104) — 依赖更新包括 uuid（1.24.0 → 1.26.1）、base64（0.22.1 → 0.23.1）和 rust_decimal。状态：已关闭。

**开放中的 PR：**

- **#8114** — [chore(deps): bump everything-else group with 31 updates](https://github.com/nearai/ironclaw/pull/8114) — 升级 thiserror、uuid、base64 和其他 28 个包；规模：XL，风险：低。
- **#8103** — [chore(deps): bump actions group with 8 updates](https://github.com/nearai/ironclaw/pull/8103) — 更新 GitHub Actions 包括 anthropic/claude-code-action（1.0.183 → 1.0.228）和 actions/setup-node（4.0.2 → 7.0.0）。
- **#7834** — [chore(deps): bump wasm group with 4 updates](https://github.com/nearai/ironclaw/pull/7834) — 更新 wasmtime、wasmtime-wasi、wit-component 和 wit-parser；规模：L，风险：中。
- **#8078** — [chore(deps): bump tokio-ecosystem group with 2 updates](https://github.com/nearai/ironclaw/pull/8078) — 更新 tower-http（0.7.0 → 0.7.1）和 tokio-tungstenite。
- **#7988** — [chore(agents): refresh codebase knowledge graph](https://github.com/nearai/ironclaw/pull/7988) — 夜间工作流刷新已提交的代码库内存引导快照；规模：XS，风险：低，贡献者：核心团队。

## 4. 社区热点话题

**Issue #8113** — [提案：可选的回合 0 工具选择（BM25F + embeddings）](https://github.com/nearai/ironclaw/issues/8113) — 作者：CjS77 | 创建于：2026-09-27

这是唯一的新 issue，代表了一个实质性的功能提案。作者建议使用用户的第一条消息来预测对话需要哪些工具，然后仅展示预测的工具加上四个发现桥接工具（`tool_search`、`tool_describe`、`tool_call`、`result_read`）。评分采用混合 BM25F + embedding 方法。

**分析：** 这个提案解决了会话初始化时的性能优化和减少令牌开销问题。通过在开始时预测工具需求而非暴露所有可用工具，项目可以显著减少复杂代理配置的Payload大小。BM25F（一个经过验证的文本检索算法）与 embedding 的结合表明了对准确性 vs. 计算成本权衡的深入工程思考。

## 5. 缺陷与稳定性

过去 24 小时内没有收到错误报告、崩溃或回归问题。今天的依赖更新 PR（#8114、#8103、#7834、#8078）属于常规维护，并不表示存在任何稳定性问题。

## 6. 功能需求与路线图信号

**活跃的功能提案：**

- **#8113** — [可选的回合 0 工具选择（BM25F + embeddings）](https://github.com/nearai/ironclaw/issues/8113) — 这是最值得注意的功能信号。它提议了一个可选的优化，可以改善代理启动性能并减少不必要的工具暴露。考虑到详细的技术方法，这似乎来自于一位熟悉代码库的资深贡献者。

**预测：** 如果被接受，这个功能可能会出现在未来的次要版本中，因为它代表了一个可选的优化而非破坏性变更。可选的性质使其成为低风险添加。

## 7. 用户反馈总结

今天的 issue 或 PR 上没有记录用户反馈（评论、反应）。缺乏社区参与表明这些是常规维护活动而非面向用户的更改。功能提案（#8113）尚未吸引社区反应，可能是因为其最近创建。

## 8. 待办事项关注

今天跟踪的所有 6 个 PR 和 1 个 issue 都是活跃的并且最近更新过（2026-09-27），表明维护者响应迅速。在 24 小时窗口内没有出现长期未回复的事项。依赖更新 PR 不言自明且是自动化的（dependabot），而知识图谱刷新（#7988）是常规 CI 工作流产物。

---

*摘要基于 2026-09-28 的 nearai/ironclaw GitHub 数据生成。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English project digest into Chinese. Let me analyze the content and translate it appropriately, keeping all the technical terms, URLs, issue numbers, and formatting intact.

The digest is about QwenPaw project on September 28, 2026. I need to:
1. Keep all headings, tables, lists, formatting
2. Keep URLs, issue numbers (#8000, #7995, etc.), usernames, file paths
3. Translate naturally into technical Chinese
4. Use Chinese punctuation throughout
5. No preamble, no markdown fences

Let me translate section by section:</think>

# QwenPaw 项目简报 — 2026-09-28

## 一、总体概览

QwenPaw（agentscope-ai/QwenPaw）在 2026 年 9 月 28 日社区活跃度保持稳定。过去 24 小时内，项目记录了 **8 个 issue 更新**（6 个开启，2 个关闭）以及 **4 个 PR 更新**（全部开启，0 个合并）。未发布新版本。Issue 队列状态良好，主要涵盖桌面客户端 bug、上下文管理功能以及 UI/UX 改进等主题。本日无 PR 达到合并就绪状态，表明当前处于审查周期或开发收尾阶段。

---

## 二、版本发布

过去 24 小时内无新版本发布。

---

## 三、项目进展

过去 24 小时内无 PR 被合并或关闭。以下 4 个追踪中的 PR 仍在开发中：

| PR | 标题 | 作者 | 状态 |
|----|------|------|------|
| [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) | fix(runtime): keep timeout tool results recoverable | axelray-dev | 开启中 |
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | feat(console): unify settings UX and smooth conversation transitions | rayrayraykk | 开启中 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | feat(mcp): add configurable tool call timeout | AaronZ345 | 审核中 |
| [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) | fix(console): refresh expanded folders in Files panel | iluv7 | 开启中 |

最成熟的 PR 是 **#6874**（自 8 月 10 日起审核中），该 PR 引入了可配置的 MCP 工具调用超时功能——这一功能解决了用户运行长时间运行的智能体工作流时的痛点。

---

## 四、社区热点话题

按评论数排名的最活跃讨论：

| Issue | 标题 | 评论数 | 作者 |
|-------|------|--------|------|
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 建议：是否可以手动停用/禁用预置模型和频道 | 3 | dylanleesky |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | 智能体自主管理的上下文生命周期 — 定时任务的自动检查点与重置 | 2 | dianguanboss |

**分析：** 讨论热度最高的 issue #7957 反映了一个用户体验需求：用户希望能够精细控制是否显示未使用的预置模型和频道，驱动因素是美观/组织整理需求（「有些人有强迫症」）。Issue #4525 涉及一个实质性的性能需求——运行自动化工作流的智能体随着上下文增长会丧失执行质量，即使有自动压缩机制，在上下文利用率达到 50%-60% 时质量也会明显下降。这两个 issue 都表明用户对资源管理和自动化行为精细控制的需求在增长。

---

## 五、Bug 与稳定性

过去 24 小时内报告了 2 个新 bug：

| Issue | 严重程度 | 标题 | 修复 PR |
|-------|----------|------|---------|
| [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000) | **中高** | 桌面端双击启动会打开第二个窗口并终止第一个实例（Windows 端缺少单实例保护机制） | — |
| [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995) | **低至中** | 文件面板刷新后展开的文件夹状态未同步更新 | [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) |

**#8000** 是更严重的问题——一个 Windows 桌面端 bug，当应用已运行时双击可执行文件会打开第二个独立窗口，并终止第一个实例的后端进程，导致数据丢失。这直接影响了安装基数最大的平台上的用户工作流稳定性。**#7995** 严重程度较低，且已有关联的修复 PR #7996 在开发中。

另外两个上下文相关的问题（#7998、#7994）已被关闭，标记为问题澄清或已解决，这表明用户对上下文压缩触发机制存在困惑——可能是文档或 UX 的缺口。

---

## 六、功能需求与路线图信号

本日记录了 5 个功能需求：

| Issue | 标题 | 领域 | 近期实现可能性 |
|-------|------|------|---------------|
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 手动停用预置模型和频道 | UI/UX | 中等 — 用户友好型增强 |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | 智能体自主管理的上下文生命周期（定时任务的自动检查点与重置） | 核心智能体运行时 | **高** — 解决已记录的质量下降问题 |
| [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | 桌面端 UI 字体大小可调（小/默认/大/特大） | 桌面端 UI | 中等 — 无障碍需求 |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | WebUI 端支持消息撤回/编辑和工作区回滚 | WebUI | 低至中 — 实现复杂 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | 添加可配置的工具调用超时（MCP） | MCP/工具链 | **高** — PR 已在审核中 |

**预测：** 基于 PR 活动量和 issue 数量，下一个版本（可能是小版本或补丁版本）很可能包含 **可配置的 MCP 工具调用超时**（#6874）、**文件面板刷新修复**（#7996），以及可能包含 **桌面端 UI 字体大小调整**（#9999，无障碍相关）。智能体上下文生命周期功能（#4525）涉及核心性能问题，若设计获批可能在近期优先开发。

---

## 七、用户反馈摘要

**已识别的痛点：**

- **上下文管理挫败感：** 用户反映上下文压缩不会在智能体驱动的工作流中自动触发，仅在用户手动提交时才会执行。切换会话时上下文指示器圆圈有时未能及时更新，需要完全重启应用（#7994）。这些问题表明自动上下文管理系统存在困惑或缺口。
- **Windows 桌面端稳定性：** 双击启动 bug（#8000）导致实例终止，是 Windows 用户桌面可靠性的一大问题。
- **无障碍需求：** 视力障碍和高分辨率显示器用户请求可调整的字体大小（#9999）。
- **UI 打磨：** 用户希望获得更多界面控制权——隐藏未使用的模型/频道（#7957）、撤回/编辑消息（#9997）——反映出对个性化、简洁工作区的需求。

**积极信号：** 社区开发者持续贡献 PR（#8001、#7956、#7996）表明开发者参与度持续活跃。Bug 报告包含详细的复现步骤和版本信息（如 #8000 明确标注 v2.2.1）表明用户群体具备一定经验。

---

## 八、待处理事项关注

需要维护者关注的长周期 issue：

| Issue | 开启时间 | 标题 | 关注点 |
|-------|----------|------|--------|
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | 2026-05-19（约 4 个月） | 智能体自主管理的上下文生命周期 — 定时任务的自动检查点与重置 | 核心功能需求；影响自动化工作流质量 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | 2026-08-10（约 7 周） | feat(mcp): add configurable tool call timeout | 审核中——等待最终合并决策 |

**#4525** 已开放约四个月，未标记 PR 或明确的路线图信号。鉴于它涉及自动化智能体质量保证的核心问题（上下文利用率 50%-60% 时质量下降），这是一个高价值的功能缺口。维护者应考虑提供状态更新或范围说明。

---

*生成时间：2026-09-28 | 数据来源：GitHub agentscope-ai/QwenPaw*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese (Simplified Chinese). I need to translate all the content while:
1. Preserving the Markdown structure exactly
2. Keeping all URLs, numbers, issue/PR references as-is
3. Using natural technical Chinese register
4. Not adding any preamble or explanation
5. Not using markdown code fences around the output

Let me translate section by section:

## 1. Today's Overview
ZeroClaw 保持高开发活跃度，过去 24 小时内有 **43 个 issue 和 50 个 pull request 更新**。项目在安全加固、频道改进和会话管理功能方面进展积极。本周没有发布新版本。多个关键的 P0 安全漏洞被新报告，同时多个大规模 PR（XL 级别）持续推进审查中，表明即将有重大更新。整体健康状况良好，但安全 bug 队列需要密切关注。

## 2. Releases
本周无新版本发布。

## 3. Project Progress
**今日关闭/Merged 的 PR：**

| PR | 标题 | 规模 |
|---|-------|-----|
| [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) | feat(tools): gate file_download against SSRF with private-host opt-in | XL |
| [#11199](https://github.com/zeroclaw-labs/zeroclaw/issues/11199) | [Bug]: Resumed shell environment diverges from admission state | — |

**关键进展：**

- **安全加固**：SSRF 保护 for `file_download` 已合并 — 这是工具层的重要安全改进。


- **构建工具**：[#11196](https://github.com/zeroclaw-labs/zeroclaw/pull/11196) 为守护进程和 relay 二进制文件添加构建提交哈希标记，提升生产环境调试能力。
- **WhatsApp 频道**：多个 PR 合并/改进了主题分隔、标题渲染和语音消息处理。
- **Telegram 表情**：[#10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843) 实现了 `add` 功能。

The most discussed issues show user confusion around bootstrap file truncation at 6000 chars, which happens silently during `compact_context` operations. There's also a provider compatibility problem with OpenCode's free tier returning 403 errors. Core agent loop design requires clarifying `ToolLoop.shared_budget` ownership for execution tree iteration, and the realtime voice-host channel using a backend-agnostic WebSocket client is gaining strong community interest.

A major architectural shift is underway with the knowledge graph being elevated from a tool to a memory layer, fundamentally changing agent context handling. Several large-scale PRs are advancing—persistent session prompt attachments with over 20 labels, the canonical sandbox_policy schema for security, and image request recovery logic. Security vulnerabilities are the top priority, with two P0 issues requiring immediate attention around delegated memory tool scope and session state restoration after admin revocation.

High-priority items include preventing concurrent file edits from silently dropping changes, fixing multimodal image caption eviction to preserve history, resolving DeepSeek DSML tool-call markup parsing, and implementing end-to-end tests to verify the wasi:http hook dials pinned addresses. Test instability is noted in parallel runtime scenarios and A2A/HTTP tool tests that conflict on global proxy state. The knowledge graph as first-class memory is progressing as an RFC alongside the canonical sandbox_policy schema and persistent session prompt attachments.

Several features are advancing through development including channel turns filtered by sender role, the stall watchdog enabled by default, and realtime voice-host channels. Users report that context truncation with compact_context remains invisible to them, Windows Ctrl+C handling needs improvement, and the REPL has multi-byte character issues. The WhatsApp and Telegram channel enhancements appear well-received. Several long-standing issues need attention including Windows force quit on Ctrl+C and runtime and gateway delivery tracking. Some PRs like the persistent sessions feature and sandbox policy schema require author follow-up, while the runtime composition contract docs are blocked.</think>

# ZeroClaw 项目简报 — 2026-09-28

## 1. 今日概览

ZeroClaw 保持高开发活跃度，过去 24 小时内有 **43 个 issue 和 50 个 pull request 更新**。项目在安全加固、频道改进和会话管理功能方面进展积极。本周没有发布新版本。多个关键的 P0 安全漏洞被新报告，同时多个大规模 PR（XL 级别）持续推进审查中，表明即将有重大更新。整体健康状况良好，但安全 bug 队列需要密切关注。

---

## 2. 版本发布

本周无新版本发布。

---

## 3. 项目进展

**今日关闭/Merged 的 PR：**

| PR | 标题 | 规模 |
|---|-------|-----|
| [#10070](https://github.com/zeroclaw-labs/zeroclaw/pull/10070) | feat(tools): gate file_download against SSRF with private-host opt-in | XL |
| [#11199](https://github.com/zeroclaw-labs/zeroclaw/issues/11199) | [Bug]: Resumed shell environment diverges from admission state | — |

**关键进展：**

- **安全加固**：SSRF 保护 for `file_download` 已合并 — 这是工具层的重要安全改进。
- **构建工具**：[#11196](https://github.com/zeroclaw-labs/zeroclaw/pull/11196) 为守护进程和 relay 二进制文件添加构建提交哈希标记，提升生产环境调试能力。
- **WhatsApp 频道**：多个 PR 合并/改进了主题分隔、标题渲染和语音消息处理。
- **Telegram 表情**：[#10843](https://github.com/zeroclaw-labs/zeroclaw/pull/10843) 实现了 `add_reaction`/`remove_reaction` 并使用正确的 API 调用。

---

## 4. 社区热点

**讨论最多的问题（按评论数排序）：**

1. **[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)** — Bootstrap file truncation at 6000 chars is invisible to the operator *(5 条评论，已关闭)*
   - *根本原因*：`compact_context` 静默截断工作区 bootstrap 文件，导致操作员对 agent 实际看到的上下文感到困惑。

2. **[#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)** — OpenCode big-pickle returns 403 FreeTierError *(5 条评论，已关闭)*
   - 提供商兼容性问题，与 OpenCode 免费层模型相关。

3. **[#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)** — Define execution-tree iteration budget ownership *(4 条评论)*
   - 核心 agent 循环架构讨论；`ToolLoop.shared_budget` 需要正确的所有权语义。

4. **[#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)** — Realtime voice-host channel (backend-agnostic WS client) *(4 条评论)*
   - 社区对语音集成有强烈兴趣；提议作为与 Wyoming 协议对齐的后端无关 WebSocket 客户端。

5. **[#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053)** — RFC: Knowledge graph as first-class agent memory layer *(3 条评论)*
   - 重大架构提案：将知识图谱从工具提升为内存层，从根本上改变 agent 上下文的工作方式。

**热门 PR（按活动/规模排序）：**

- **[#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)** — 持久化会话提示附件（XL，20+ 标签）— 积极开发中
- **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** — 规范的 sandbox_policy schema（XL，安全重点）
- **[#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480)** — 从被拒绝的图像请求中恢复（XL）

---

## 5. Bug 与稳定性

**紧急（P0）— 需要立即关注：**

| Issue | 严重程度 | 状态 | 修复 PR？ |
|-------|----------|--------|---------|
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) — 委托内存工具失去 principal scope | P0, S0, 安全 | OPEN | 无 |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) — 会话恢复在管理员撤销后恢复转发的环境 | P0, S0, 安全 | OPEN | 无 |

**高优先级（P1）：**

| Issue | 严重程度 | 状态 | 修复 PR？ |
|-------|----------|--------|---------|
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) — 并发 file_edit/file_write 静默丢弃编辑 under parallel_tools | P1, S0, 数据丢失 | OPEN，进行中 | 无 |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) — 多模态图像标题逐出重写历史并使缓存失效 | P1, S0 | OPEN，已接受 | [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) 进行中 |
| [#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130) — DeepSeek DSML 工具调用标记未解析 | P1, S1, 工作流阻塞 | OPEN，进行中 | 无 |
| [#10008](https://github.com/zeroclaw-labs/zeroclaw/issues/10008) — Prove plugin wasi:http hook dials pinned address (e2e test) | P1, 安全 | OPEN, no-stale | 无 |

**测试不稳定：**

- [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) — Parallel runtime gate 下的 flaky test
- [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) — A2A/HTTP 工具测试对全局代理状态使用单独的锁

---

## 6. 功能请求与路线图信号

**推进中的高影响力功能：**

| 功能 | Issue/PR | 状态 | 预计版本 |
|---------|----------|--------|----------------|
| 知识图谱作为一级内存 | [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | RFC，进行中 | v0.9.0+ |
| 规范的 sandbox_policy schema | [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | OPEN，需要作者操作 | v0.8.6/v0.9.0 |
| 持久化会话提示附件 | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | OPEN，积极开发 | v0.8.6 |
| 实时语音主机频道 | [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | OPEN, parking-lot | 未来 |
| 按发送者角色筛选频道轮次 | [#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068) | OPEN | v0.8.6 |
| 默认启用 stall watchdog | [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | OPEN，已接受 | v0.8.6 |

**即将发布版本的跟踪器：**
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — v0.8.6 和 v0.9.0 的 Runtime 和 Gateway 交付跟踪

---

## 7. 用户反馈总结

**从 Issue 中识别的痛点：**

1. **不可见的截断** — 启用了 `compact_context` 的用户看不到 bootstrap 文件在 6000 字符处被截断，导致对 agent 实际上下文感到困惑。
2. **Windows Ctrl+C 强制退出** — Windows 用户报告交互式会话中 Ctrl+C 导致 zeroclaw 以代码 1073741510 退出，这是交互式会话的重要 UX 问题。
3. **REPL 中的退格键** — 交互式 REPL 中的多字节字符处理删除原始字节而非字符。
4. **内存没有作为内存工作** — 用户期望知识图谱作为持久化内存运行，但目前它是一个需要显式调用的工具。

**满意度信号：**

- WhatsApp 频道改进（主题分隔、语音消息）反响良好，多个 PR 堆叠推进。
- Telegram 表情实现解决了频道功能长期以来的差距。

---

## 8. 积压关注

**需要维护者关注的 Issue：**

| Issue | 存在时间 | 状态 | 关注原因 |
|-------|-----|--------|-----------|
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) — Ctrl+C on Windows causes force quit | 约 3 个月 | OPEN, no-stale | P2 但严重影响 Windows 用户体验 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Runtime/gateway delivery tracker | 约 4 个月 | OPEN | v0.8.6/v0.9.0 关键路径 |
| [#11092](https://github.com/zeroclaw-labs/zeroclaw/issues/11092) | 在 [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) 中引用 | 阻塞中 | 阻塞运行时组合契约文档 |

**需要审查/操作的 PR：**

| PR | 作者 | 存在时间 | 阻塞原因 |
|----|--------|-----|------------|
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) — 持久化会话 | vrurg | 约 1 个月 | 需要作者操作 |
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) — Sandbox policy | rarean | 约 3 个月 | 需要作者操作 |
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) — 运行时组合契约文档 | JordanTheJet | 4 天 | 被 #11092 阻塞（核心团队） |

---

*基于 2026-09-28 的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*