# OpenClaw 生态日报 2026-11-28

> Issues: 344 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-28 04:09 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the entire document while maintaining the Markdown structure, tables, formatting, and all technical elements exactly as they are.

Key things to preserve:
- Markdown headings, tables, lists, blockquotes
- URLs, links, issue/PR references
- Version tags, usernames, repository slugs
- Code blocks and inline code
- Emoji
- Numbers, dates

I should use natural technical Chinese, not a literal word-for-word translation. Let me translate section by section.
</think>


# OpenClaw 项目摘要 — 2026-11-28

## 1. 今日概览

OpenClaw 保持了较高的活跃度，过去 24 小时内共有 **500 个 PR 和 344 个 issue** 更新。项目发布了 **v2026.12.1-beta.1**，引入了 prepared Git releases 和 resident launcher，以及跨路由复用 prompt cache 的机制。社区参与热情高涨——prepared-release 设计方案的 issue 就有 58 条评论。在资源受限的主机上，内存消耗问题仍然突出，SQLite 事务超时问题也持续存在，多个 P0/P1 级别的 bug 仍待处理。团队正在积极合并小修复，而更大规模的功能工作（如 automation billing、session 管理）则在等待 review。

---

## 2. 版本发布

### v2026.12.1-beta.1
**发布时间：** 2026-11-28 | [Release 页面](https://github.com/openclaw/openclaw/releases/tag/v2026.12.1-beta.1)

**主要变更：**
| 领域 | 变更内容 | 相关 PR |
|------|----------|---------|
| **Git 安装** | 使用 prepared releases 和 resident launcher | [#203194](https://github.com/openclaw/openclaw/issues/203194)、[#203497](https://github.com/openclaw/openclaw/issues/203497) |
| **包更新** | 准备更新时无需停止运行中的 Gateway | 同上 |
| **Prompt 缓存** | 压缩时跨路由复用 warm prompt cache（只读） | — |

**贡献者：** @obviyus

> ⚠️ 这是一个 beta 版本。稳定版用户请等待 v2026.12.1 稳定版发布。

---

## 3. 项目进展

### 今日合并/关闭的 PR（精选亮点）

| PR | 标题 | 规模 | 影响 |
|----|------|------|------|
| [#207208](https://github.com/openclaw/openclaw/pull/207208) | fix(doctor): lint --all 从源码状态读取客户端凭证 | S | 用户体验摩擦 |
| [#207202](https://github.com/openclaw/openclaw/pull/207202) | improve: 延迟无浏览器配置的浏览器配置初始化 | M | 性能优化 |
| [#207207](https://github.com/openclaw/openclaw/pull/207207) | docs(skills): 为选定任务加载 specialty 程序 | XL | 用户体验摩擦 |
| [#207196](https://github.com/openclaw/openclaw/pull/207196) | fix: 防止 Skills 详情冷加载导致布局测试失败 | XS | 测试稳定性 |
| [#207119](https://github.com/openclaw/openclaw/pull/207119) | fix: 稳定 Bun 上 Control UI update-triage 测试 | XS | 测试稳定性 |
| [#207211](https://github.com/openclaw/openclaw/pull/207211) | chore(i18n): 刷新原生语言环境 | XL | 本地化 |

**待 Review 的开放 PR：**
- [#201288](https://github.com/openclaw/openclaw/pull/201288) — `fix: make automation billing accounts explicit`（XL，兼容性/auth-provider 风险）
- [#207205](https://github.com/openclaw/openclaw/pull/207205) — `fix(agents): keep every untrusted-content block closed`（M，安全敏感）
- [#207109](https://github.com/openclaw/openclaw/pull/207109) — `improve: reduce allocations when preparing session rows`（M）

---

## 4. 社区热点话题

### 评论最活跃的 Issue（按评论数排序）

| # | 标题 | 评论数 | 优先级 | 主题 |
|---|------|--------|--------|------|
| [#204775](https://github.com/openclaw/openclaw/issues/204775) | 设计：prepared-release 更新（状态、所有权和计划） | **58** | P2 | 架构协调 |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix --non-interactive 空闲 15+ 分钟（macOS） | **33** | P1 | CLI 挂起 |
| [#192547](https://github.com/openclaw/openclaw/issues/192547) | 降低受限 ARM64 主机上 Gateway 启动内存 | **30** | P2 | 内存优化 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite 无界增长：缺少保留策略 | **20** | P2 | 数据管理 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 基准 RSS 内存过高（~1.9 GB），v2026.10.5 | **16** | P1 | 内存回退 |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | 16 条相同的"starting work 时已变更"错误 | **15** | P2 | 可观测性 |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | session.maintenance enforce 模式无界 | **14** | P2 | Session 状态 |
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | 模型回退提示泄露到外部渠道 | **13** | P2 | 用户体验 |
| [#79223](https://github.com/openclaw/openclaw/issues/79223) | Dream Diary 语言可配置 | **13** | P2 | 本地化 |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏反复出现 | **13** | P1 | 稳定性 |

### 分析

**Prepared Release 架构（#204775，58 条评论）：**
社区对新更新机制的架构设计深度参与。这么高的评论量表明，关于状态管理、所有权边界和实现计划的讨论非常充分。这是一个跨领域架构变更，会影响 Git 安装和包更新机制。

**内存问题占据主导：**
前五大 issue 中有三个与内存消耗相关：
- ARM64 启动内存受限
- 1.9 GB 基准 RSS 回退
- SQLite 表无界增长

这表明用户在资源受限的基础设施上运行 OpenClaw，需要更激进的内存优化。

---

## 5. Bug 与稳定性

### 关键 Bug（P0/P1）— 活跃中

| # | 标题 | 严重程度 | 影响 | 持续时间 | 有修复 PR？ |
|---|------|----------|------|---------|-------------|
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix 挂起 15+ 分钟，无输出 | 🦪 Silver | Crash 循环 | 39 天 | 否 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 1.9 GB RSS 基准内存（v2026.10.5） | 🦪 Silver | Crash 循环 | 36 天 | 否 |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex protected 延续块阻断后续操作 | 🦞 Diamond | UX 发布阻塞 | 21 天 | 否 |
| [#202518](https://github.com/openclaw/openclaw/issues/202518) | claude-cli run 在 sessions_spawn 后永不关闭 | 🦪 Silver | Session 状态、消息丢失 | 8 天 | 否 |
| [#200148](https://github.com/openclaw/openclaw/issues/200148) | macOS 上 /restart 永远挂起 | 🦐 Gold | Crash 循环 | 12 天 | 否 |
| [#206669](https://github.com/openclaw/openclaw/issues/206669) | Windows SQLite integrity worker 持续存活 | 🦪 Silver | Crash 循环 | 1 天 | 否 |

### 今日报告的回退

| # | 标题 | 回退 | 优先级 |
|---|-------|------|--------|
| [#206669](https://github.com/openclaw/openclaw/issues/206669) | Windows SQLite integrity worker 持续存活（每个 DB 等待 300s） | 是 | P1 |
| [#205566](https://github.com/openclaw/openclaw/issues/205566) | Control UI 回复永不完成 — 360s 看门狗中止压缩 | 是 | P1 |
| [#196820](https://github.com/openclaw/openclaw/issues/196820) | Control UI 在 `getAnimations()` 循环中 CPU 占用 ~100% 卡死 | 是 | P1 |

### 稳定性监控

- **SQLite 损坏（#126821）：** 5 天内 WSL2 上发生 5 起，包括"gateway 瘫痪"模式
- **内存增长（#195497）：** v2026.11.1 上 17 小时内约 3 GB
- **迁移后回收（#206030）：** Session DB 降级，channel 消息被拒绝

---

## 6. 功能需求与路线图信号

### 高参与度功能需求

| # | 标题 | 评论数 | 👍 | 状态 |
|---|-------|--------|-----|------|
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | 模型回退提示泄露到外部渠道 | 13 | 1 | Triaged |
| [#79223](https://github.com/openclaw/openclaw/issues/79223) | Dream Diary 语言/提示词可配置 | 13 | 2 | Closed |
| [#204701](https://github.com/openclaw/openclaw/issues/204701) | backup git create: git 超时可配置 + 表排除 | 7 | 0 | Open |
| [#151766](https://github.com/openclaw/openclaw/issues/151766) | active-memory 德语（DE）升级模式缺失 | 6 | 2 | Open |
| [#167341](https://github.com/openclaw/openclaw/issues/167341) | 分类模型请求失败时覆盖用户可见文案 | 9 | 0 | Open |

### 近期可能纳入的功能

基于 PR 活动和 issue 参与度判断：

1. **Automation billing 显式化（#201288）** — 大型 PR 正在 review 中，解决计费账户清晰度问题
2. **Session 行分配优化（#207109）** — 内存优化工作进行中
3. **德语语言支持（#151766）** — 简单的模式补充，2 个 👍
4. **Git 超时可配置（#204701）** — 解决计划备份失败的常见场景

---

## 7. 用户反馈摘要

### 痛点（反复出现的主题）

| 主题 | 证据 | 严重程度 |
|------|------|----------|
| **内存消耗** | 多份报告 1.9-3 GB RSS，ARM64 崩溃 | 高 |
| **SQLite 不稳定** | 损坏、无界增长、事务超时 | 高 |
| **macOS 问题** | doctor 挂起、重启失败、AppImage 白屏 | 中高 |
| **Session 生命周期** | Helper 完成、protected 延续、spawn/yield | 中 |
| **用户体验摩擦** | TUI 中缺少审批卡片、模型回退泄露 | 中 |

### 积极信号

- **新 beta 版本（#207207、#207211）** 显示 i18n 和文档工作持续推进
- **测试基础设施投入**（#207209、#207217、#207199）表明对质量的重视
- **Copilot 测试清理（#207203）** 体现了对开发者体验的关注

### 用户满意度指标

- 功能需求 #79223（Dream Diary 语言）在关闭前获得 2 个 👍——表明对本地化的需求
- Bug 报告 #202213 获得 1 个 👍——用户希望稳定版修复压缩归档问题
- 安全相关 issue #205007 疑似误报（许可证混淆）

---

## 8. 积压清单关注

### 长期未响应的重要 Issue

| # | 标题 | 创建时间 | 开放天数 | 优先级 | 阻塞因素 |
|---|-------|---------|-----------|--------|----------|
| [#58289](https://github.com/openclaw/openclaw/issues/58289) | 非主 agent 可能在空 provider plan 上缺少 models.json | 2026-03-31 | **241 天** | P2 | Auth-provider |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | SQLite 无界增长（内存表） | 2026-07-27 | **124 天** | P2 | 数据管理 |
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | 模型回退提示泄露到外部渠道 | 2026-06-12 | **169 天** | P2 | 用户体验摩擦 |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | 16 条相同的"starting work 时已变更"错误 | 2026-08-21 | **99 天** | P2 | 可观测性 |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | session.maintenance enforce 模式无界 | 2026-07-22 | **129 天** | P2 | Session 状态 |

### 需要维护者关注的 Issue

| # | 标题 | 标签 | 评论数 | 阻塞状态 |
|---|-------|-------|--------|----------|
| [#207190](https://github.com/openclaw/openclaw/issues/207190) | Agent 无法停止 Gateway — 324s 挂起 | needs-maintainer-review | 5 | 今日 |
| [#207205](https://github.com/openclaw/openclaw/pull/207205) | Untrusted-content block 安全修复 | needs-environment | — | Stacked PR |
| [#201288](https://github.com/openclaw/openclaw/pull/207288) | Automation billing 显式化 | compatibility, auth-provider | — | Draft |

### 需要 Triage 的失活 Issue

| # | 标题 | 失活日期 | 需要的处置 |
|---|-------|----------|------------|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏反复出现（WSL2） | — | 复现或关闭 |
| [#158897](https://github.com/openclaw/openclaw/issues/158897) | Dreaming MEMORY.md 预算可配置 | 2026-11-27 | 关闭或分配 |
| [#178914](https://github.com/openclaw/openclaw/issues/178914) | 内存搜索排名不可配置 | 2026-11-27 | 产品决策 |

---

## 汇总指标

| 指标 | 数值 | 趋势 |
|------|------|------|
| 活跃 issue（24h） | 344 | 高 |
| 活跃 PR（24h） | 500 | 高 |
| 开放 P0/P1 bug | ~15 | 稳定 |
| 新版本 | v2026.12.1-beta.1 | — |
| Top 10 issue 平均年龄 | ~45 天 | 需关注 |

---

*本摘录基于 2026-11-28 的 OpenClaw GitHub 数据生成。所有链接指向 https://github.com/openclaw/openclaw。*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content to natural, fluent Simplified Chinese
2. Preserve all Markdown formatting exactly (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, code spans, numbers, dates, version tags, repository slugs, issue/PR references as-is
4. Use the register of a Chinese developer newsletter — natural technical Chinese, not literal word-for-word
5. Output ONLY the translation, no preamble or explanation

Let me work through this section by section:

---

# Personal AI Assistant & Agent Open-Source Ecosystem Report
**As of 2026-11-28**

→ # 个人 AI 助手与 Agent 开源生态报告
**截至 2026-11-28**

---

## 1. Ecosystem Overview

→ ## 1. 生态概览

The personal AI assistant and agent open-source ecosystem is experiencing a period of vigorous, uneven growth.

→ 个人 AI 助手与 Agent 开源生态正处于快速增长但发展不均衡的阶段。

**OpenClaw** dominates in absolute activity volume—10× the issue and PR throughput of any peer—but carries a correspondingly large bug surface, with ~15 active P0/P1 issues spanning memory regressions, SQLite corruption, and session lifecycle failures.

→ **OpenClaw** 在绝对活动量上占据主导地位——Issue 和 PR 吞吐量是其他任何项目的 10 倍——但同时也背负着庞大的 Bug 负担，约有 15 个活跃的 P0/P1 问题，涵盖内存回退、SQLite 损坏和会话生命周期故障。

**Hermes Agent** maintains the second-largest footprint, distinguished by a deliberate modularization strategy (moving Weixin, WeCom, DingTalk to separate plugins) and a sweeping Desktop workspace redesign.

→ **Hermes Agent** 保持着第二大的活动规模，其特点是采用了明确的模块化策略（将企业微信、企微、钉钉迁移至独立插件），并正在推进全面的 Desktop 工作区重构。

**ZeroClaw** shows the highest velocity-per-contributor ratio, fielding a substantial feature pipeline (macOS `computer_use`, LLMTR provider, Codex subscription UI) alongside five critical S1/S2 bugs reported in a single 24-hour window.

→ **ZeroClaw** 展现出最高的每人贡献速率，正在推进大规模功能管线（macOS `computer_use`、LLMTR 提供者、Codex 订阅 UI），同时在 24 小时内收到了 5 个关键 S1/S2 Bug 的报告。

**QwenPaw** operates at a smaller scale but with strong enterprise adoption signals and a disciplined focus on console stability.

→ **QwenPaw** 规模相对较小，但呈现出强烈的企业采用信号，并专注于控制台稳定性。

**IronClaw** has no recent public activity and may be operating under a private or nearline development model.

→ **IronClaw** 没有最近的公开活动，可能采用了私有或近线开发模式。

The collective picture is of an ecosystem still iterating rapidly on core primitives: memory management, session isolation, tool-result handling, and cross-platform stability.

→ 整体来看，生态系统仍在快速迭代核心基础组件：内存管理、会话隔离、工具结果处理和跨平台稳定性。

No project has reached a plateau of feature completeness; the landscape remains competitive, with architectural choices—Rust-based gateways (ZeroClaw), Python-centric design (QwenPaw), prepared release mechanisms (OpenClaw)—emerging as meaningful differentiators.

→ 没有任何项目达到功能完备的稳定期；竞争格局依然激烈，架构选择——基于 Rust 的网关（ZeroClaw）、以 Python 为中心的设计（QwenPaw）、预构建发布机制（OpenClaw）——正成为关键的差异化因素。

---

## 2. Activity Comparison

→ ## 2. 活跃度对比

| Project | Issues (24h) | PRs (24h) | Open Issues | Open PRs | Releases (24h) | Health Score |
|---------|-------------|-----------|-------------|----------|----------------|--------------|
| **OpenClaw** | 344 | 500 | ~206 active | ~278 open | v2026.12.1-beta.1 | 🟡 High activity, high bug surface |
| **Hermes Agent** | 50 | 50 | ~48 active | ~49 open | v0.23.5 | 🟢 High velocity, stable releases |
| **QwenPaw** | 10 | 25 | 8 active | 19 open | None | 🟢 Solid activity-to-bug ratio |
| **ZeroClaw** | 11 | 39 | 11 active | 39 open | None | 🟡 High velocity, active S1 bugs |
| **IronClaw** | 0 | 0 | — | — | None | ⚫ No public activity |

→ | 项目 | Issue (24h) | PR (24h) | 开放 Issue | 开放 PR | 发布 (24h) | 健康评分 |
|---------|-------------|-----------|-------------|----------|----------------|--------------|
| **OpenClaw** | 344 | 500 | ~206 活跃 | ~278 开放 | v2026.12.1-beta.1 | 🟡 高活跃度，高 Bug 密度 |
| **Hermes Agent** | 50 | 50 | ~48 活跃 | ~49 开放 | v0.23.5 | 🟢 高效率，稳定发布 |
| **QwenPaw** | 10 | 25 | 8 活跃 | 19 开放 | 无 | 🟢 活跃度与 Bug 比例健康 |
| **ZeroClaw** | 11 | 39 | 11 活跃 | 39 开放 | 无 | 🟡 高效率，存在活跃 S1 Bug |
| **IronClaw** | 0 | 0 | — | — | 无 | ⚫ 无公开活动 |

**Observations:**

→ **观察：**

- **OpenClaw's absolute volume is 10× peers**, but the open-to-closed ratio (206:138 issues, 278:222 PRs) suggests the project absorbs a high volume of low-friction contributions rather than achieving proportional closure. A 1.5:1 open-to-closed ratio is healthy; the project's scale amplifies absolute backlog.

→ **OpenClaw 的绝对规模是其他项目的 10 倍**，但开放与关闭比例（Issue 为 206:138，PR 为 278:222）表明该项目吸纳了大量低摩擦贡献，而非实现相应的关闭率。1.5:1 的开放关闭比是健康的；该项目的规模放大了绝对待办积压。

- **ZeroClaw's 39 open PRs with zero closed PRs** in 24 hours indicates a snapshot window where contributions outpaced merges—a normal burst pattern given the number of active fix branches, but worth monitoring.

→ **ZeroClaw 在 24 小时内有 39 个开放 PR 但无关闭 PR**，这表明处于一个贡献超过合并速度的快照窗口——考虑到大量活跃修复分支的存在，这是一种正常的突发模式，但值得持续关注。

- **QwenPaw shows the healthiest open-to-closed ratio** among active projects (8 open, 6 closed on PRs), suggesting efficient review cadence.

→ **在活跃项目中，QwenPaw 展现出最健康的开放关闭比**（PR 开放 8 个，关闭 6 个），表明其代码审查节奏高效。

- **Hermes Agent's 50:1 PR ratio** (1 closed out of 50 updated) reflects the same snapshot artifact; the v0.23.5 release merged ~338 PRs, demonstrating the project processes batches rather than individual PRs.

→ **Hermes Agent 的 50:1 PR 比例**（50 个更新中仅关闭 1 个）反映了同样的快照特征；v0.23.5 版本合并了约 338 个 PR，表明该项目采用批量处理而非逐个审查 PR 的模式。

---

## 3. OpenClaw's Position

→ ## 3. OpenClaw 的定位

### Advantages vs. Peers

→ ### 与竞品的优势对比

| Dimension | OpenClaw's Position | Peer Comparison |
|-----------|---------------------|-----------------|
| **Community size** | Largest by volume (344 issues, 500 PRs/24h) | 10× Hermes Agent, 34× QwenPaw |
| **Release cadence** | Beta/stable dual-track with prepared releases | Hermes Agent publishes stable checkpoints; others irregular |
| **Feature scope** | Broadest: skills, memory, compression, gateway, TUI, CLI | Hermes Agent leads in Desktop and plugin architecture; ZeroClaw leads in security and platform-specific tools |
| **Memory management** | Most mature concerns (prompt caching, RSS monitoring, compaction) | Hermes Agent has comparable compression issues; ZeroClaw focused on Rust-native efficiency |
| **SQLite expertise** | Deepest (integrity workers, corruption recovery, unbounded growth tracking) | Unique to OpenClaw; others use different data layers |

→ | 维度 | OpenClaw 的定位 | 与竞品对比 |
|-----------|---------------------|-----------------|
| **社区规模** | 绝对数量最大（344 个 Issue，500 个 PR/24h） | 是 Hermes Agent 的 10 倍，QwenPaw 的 34 倍 |
| **发布节奏** | Beta/stable 双轨制，含预构建发布 | Hermes Agent 发布稳定检查点；其他项目不规律 |
| **功能范围** | 最广泛：skills、memory、compression、gateway、TUI、CLI | Hermes Agent 在 Desktop 和插件架构上领先；ZeroClaw 在安全性和平台专属工具上领先 |
| **内存管理** | 最为成熟（prompt 缓存、RSS 监控、compaction） | Hermes Agent 存在相当的 compression 问题；ZeroClaw 专注于 Rust 原生效率 |
| **SQLite 专长** | 最深入（完整性检查、损坏恢复、无界增长追踪） | OpenClaw 独有；其他项目使用不同的数据层 |

### Technical Approach Differences

→ ### 技术路线差异

OpenClaw's **prepared release mechanism** (resident launchers with pre-downloaded artifacts) is architecturally distinct from peers. It trades download flexibility for reliability, targeting environments where network interruptions during upgrades are costly—aligning with its ARM64 and constrained-host user base.

→ OpenClaw 的**预构建发布机制**（预下载制品的常驻启动器）在架构上与竞品截然不同。它以下载灵活性换取可靠性，针对升级过程中网络中断代价高昂的环境——这与其 ARM64 和资源受限主机用户群体高度契合。

Hermes Agent operates at a higher **abstraction level** (autonomous skill improvement, Dream Diary, delegation modes) rather than infrastructure reliability. ZeroClaw's Rust-based gateway prioritizes throughput and memory safety over Python's flexibility, reflected in its focus on `computer_use` tools and low-level `allowed_commands` policy enforcement.

→ Hermes Agent 处于更高的**抽象层级**（自主 skill 改进、Dream Diary、委托模式），而非基础设施可靠性。ZeroClaw 的 Rust 网关优先考虑吞吐量和内存安全而非 Python 的灵活性，体现在其对 `computer_use` 工具和底层 `allowed_commands` 策略执行的专注。

### Community Size

→ ### 社区规模

OpenClaw's comment velocity on design issues (58 comments on the prepared-release architecture) indicates a large, engaged community participating in architectural decisions. However, the 241-day age of issue #58289 suggests maintainer bandwidth is the limiting factor, not community size.

→ OpenClaw 在设计 Issue 上的评论速度（预构建发布架构 Issue 有 58 条评论）表明其拥有庞大且积极参与架构决策的社区。然而，Issue #58289 已存在 241 天这一事实表明，维护者带宽才是瓶颈，而非社区规模。

---

## 4. Shared Technical Focus Areas

→ ## 4. 共同的技术聚焦领域

Several cross-cutting concerns appear independently across multiple projects, indicating genuine ecosystem-level pain points:

→ 多项跨项目共性问题的独立出现，表明存在真正的生态系统级痛点：

### Memory Management & Optimization
→ ### 内存管理与优化

| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | 1.9 GB RSS baseline regression, ARM64 startup memory, SQLite unbounded growth |
| **Hermes Agent** | Compression sends role-typed tools to incompatible endpoints; compaction watchdog aborts at 360s |
| **ZeroClaw** | Markdown log memory bounds; SQLite embedding repairs |

→ | 项目 | 具体问题 |
|---------|----------------|
| **OpenClaw** | 1.9 GB RSS 基线回退，ARM64 启动内存，SQLite 无界增长 |
| **Hermes Agent** | Compression 将 role-typed tools 发送至不兼容的端点；compaction 看门狗在 360s 时中止 |
| **ZeroClaw** | Markdown 日志内存边界；SQLite 嵌入修复 |

**Unified need:** All three projects are experiencing memory pressure from different angles—baseline RSS, compression pipeline efficiency, and data store growth—suggesting no single silver-bullet solution and that memory profiling tooling would benefit the entire ecosystem.

→ **共同需求：** 三个项目正从不同角度承受内存压力——基线 RSS、compression 管线效率和数据库增长——这表明没有单一万能解决方案，而内存分析工具将惠及整个生态系统。

### Tool-Result Reliability & Multi-Modal Delivery
→ ### 工具结果可靠性与多模态交付

| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | Prompt cache reuse, tool-result envelope handling |
| **Hermes Agent** | `delegate_task(continue)` subagent store updates; mid-turn subagent results (`busy_result_mode`) |
| **ZeroClaw** | OpenRouter drops declared image attachments; damaged tool-result envelope pairing |

→ | 项目 | 具体问题 |
|---------|----------------|
| **OpenClaw** | Prompt 缓存复用，工具结果信封处理 |
| **Hermes Agent** | `delegate_task(continue)` subagent store 更新；中轮次 subagent 结果（`busy_result_mode`） |
| **ZeroClaw** | OpenRouter 丢弃声明的图片附件；损坏的 tool-result 信封配对 |

**Unified need:** Tool-result handling—pairing results with calls, delivering multi-modal content (images), and propagating results across subagent boundaries—is the most active cross-project bug category. This is a fundamental architectural challenge as agents grow more complex.

→ **共同需求：** 工具结果处理——将结果与调用配对、传递多模态内容（图片）、跨 subagent 边界传播结果——是跨项目最活跃的 Bug 类别。随着 Agent 变得越来越复杂，这是一个根本性的架构挑战。

### Session Lifecycle & State Management
→ ### 会话生命周期与状态管理

| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | "changed while starting work" errors, session maintenance enforce mode, compaction race conditions |
| **Hermes Agent** | Subagent store drops updates for terminal IDs; cron agent sessions lack external memory tools |
| **ZeroClaw** | Gateway /health not answering during startup; MCP failure leaves agent without tools |
| **QwenPaw** | Subagent spawning leaks parent's `_execution_toolkit` |

→ | 项目 | 具体问题 |
|---------|----------------|
| **OpenClaw** | "changed while starting work" 错误，session maintenance enforce 模式，compaction 竞态条件 |
| **Hermes Agent** | Subagent store 为 terminal ID 丢弃更新；cron agent session 缺少外部 memory tools |
| **ZeroClaw** | 网关 /health 在启动时不响应；MCP 故障导致 agent 无可用工具 |
| **QwenPaw** | Subagent 派生时泄漏父级的 `_execution_toolkit` |

**Unified need:** Session lifecycle—initialization, delegation, maintenance, and teardown—is fragile across all projects. The specific failure modes differ (Rust vs. Python vs. Go foundations) but the underlying challenge is the same: maintaining consistent state when agents spawn subagents, compress contexts, or reconnect.

→ **共同需求：** 会话生命周期——初始化、委托、维护和清理——在所有项目中都很脆弱。具体的失败模式各不相同（Rust vs. Python vs. Go 底层），但根本挑战是相同的：在 Agent 派生 subagent、压缩上下文或重连时保持状态一致性。

### Configuration Validation & Safety
→ ### 配置校验与安全

| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | `doctor --fix` hangs; SQLite corruption on WSL2 |
| **Hermes Agent** | `bind-board` leaves `board.project_id` unset; `allowed_commands` policy parsing |
| **ZeroClaw** | Gateway config validated before admin reload; `allowed_commands` unified parsing |

→ | 项目 | 具体问题 |
|---------|----------------|
| **OpenClaw** | `doctor --fix` 挂起；WSL2 上的 SQLite 损坏 |
| **Hermes Agent** | `bind-board` 未设置 `board.project_id`；`allowed_commands` 策略解析 |
| **ZeroClaw** | 网关配置在 admin reload 前校验；`allowed_commands` 统一解析 |

**Unified need:** Config validation at the boundary between user intent and runtime application is a recurring gap. All projects have at least one issue where invalid config silently propagates into failures.

→ **共同需求：** 用户意图与运行时应用边界处的配置校验是一个反复出现的缺陷。所有项目都至少有一个问题，其中无效配置被静默传播导致故障。

### Localization & Internationalization
→ ### 本地化与国际化

| Project | Specific Issue |
|---------|----------------|
| **OpenClaw** | Active-memory German (DE) escalation patterns missing |
| **Hermes Agent** | Dream Diary configurable language (closed request with 2 👍); i18n locale refresh |
| **QwenPaw** | No specific i18n issues, but web console rendering implies broad audience |

→ | 项目 | 具体问题 |
|---------|----------------|
| **OpenClaw** | Active-memory 德语（DE）升级模式缺失 |
| **Hermes Agent** | Dream Diary 可配置语言（已关闭请求，2 个 👍）；i18n locale 刷新 |
| **QwenPaw** | 无特定 i18n 问题，但 Web 控制台渲染暗示受众广泛 |

**Unified need:** Internationalization beyond English is nascent. German language patterns (#151766 on OpenClaw) and configurable agent prompts (#79223 on Hermes Agent) indicate non-English markets are adopting these tools and need localization.

→ **共同需求：** 英语以外的国际化尚处于萌芽阶段。德语模式（OpenClaw #151766）和可配置 Agent 提示词（Hermes Agent #79223）表明非英语市场正在采用这些工具，亟需本地化支持。

---

## 5. Differentiation Analysis

→ ## 5. 差异化分析

| Dimension | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **Primary focus** | Reliability & scale | Desktop UX & modularity | Console stability & enterprise | Security & platform-specific tools |
| **Target user** | Power users, ARM64/self-hosted | Desktop-first users, developers | Enterprise teams, web deployments | Security-conscious, desktop-power users |
| **Architecture** | Python + C extensions | Python + Electron | Python (AgentScope-based) | Rust gateway + Python plugins |
| **Key differentiator** | Prepared releases, prompt caching, SQLite expertise | SkillOpt autonomous learning, plugin extraction | Enterprise signals, console polish | `computer_use` tool, LLMTR provider, Buzz channel |
| **Bug profile** | Memory regressions, SQLite corruption | Desktop GPU, Kanban process leaks, compression | Console UX, code mode tool leaks | MCP resilience, /health startup, image attachments |
| **Release model** | Beta → stable dual-track | Stable checkpoint releases | Incremental (no scheduled cadence) | Rolling (no formal releases in 24h) |

→ | 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **核心聚焦** | 可靠性与规模化 | Desktop 体验与模块化 | 控制台稳定性与企业级 | 安全性与平台专属工具 |
| **目标用户** | 高级用户，ARM64/自托管 | Desktop 优先用户，开发者 | 企业团队，Web 部署 | 安全意识强、桌面需求高的用户 |
| **架构** | Python + C 扩展 | Python + Electron | Python（基于 AgentScope） | Rust 网关 + Python 插件 |
| **核心差异化** | 预构建发布，prompt 缓存，SQLite 专长 | SkillOpt 自主学习，插件提取 | 企业级信号，控制台打磨 | `computer_use` 工具，LLMTR 提供者，Buzz 频道 |
| **Bug 画像** | 内存回退，SQLite 损坏 | Desktop GPU，Kanban 流程泄漏，compression | 控制台 UX，代码模式工具泄漏 | MCP 韧性，/health 启动，图片附件 |
| **发布模式** | Beta → stable 双轨制 | 稳定检查点发布 | 增量式（无固定节奏） | 滚动式（24h 内无正式发布） |

### Strategic Positioning

→ ### 战略定位

**OpenClaw** positions itself as the reliable backbone—designed for constrained environments, with prepared releases and aggressive memory management. Its bug surface reflects broad deployment across diverse hardware and OS configurations.

→ **OpenClaw** 将自己定位为可靠的核心支柱——为受限环境设计，具备预构建发布和激进的内存管理。其 Bug 覆盖面反映了在多样化硬件和操作系统配置上的广泛部署。

**Hermes Agent** differentiates on developer and desktop experience—the most sophisticated plugin ecosystem, autonomous skill improvement, and the only project with an active Desktop workspace redesign initiative.

→ **Hermes Agent** 以开发者体验和桌面体验为差异化方向——拥有最成熟的插件生态、自主 skill 改进能力，且是唯一一个正在推进 Desktop 工作区重构的项目。

**QwenPaw** is the most pragmatic—targeting enterprise deployments with a focus on console reliability and stable web UX rather than cutting-edge agentic features.

→ **QwenPaw** 是最务实的——面向企业部署，专注于控制台可靠性和稳定的 Web 体验，而非前沿的 Agent 功能。

**ZeroClaw** competes on security and platform depth—Rust-based performance, `computer_use` tool development, and fine-grained `allowed_commands` policy enforcement make it attractive for security-conscious deployments.

→ **ZeroClaw** 在安全性和平台深度上竞争——基于 Rust 的性能、`computer_use` 工具开发以及细粒度的 `allowed_commands` 策略执行，使其对安全敏感型部署具有吸引力。

**IronClaw** appears strategically positioned as a private or nearline project (potentially serving Near.ai's commercial product), with no public community engagement visible in this digest window.

→ **IronClaw** 似乎被战略性地定位为私有或近线项目（可能服务于 Near.ai 的商业产品），在本报告窗口内未见公开社区参与。

---

## 6. Community Momentum & Maturity

→ ## 6. 社区势头与成熟度

### Activity Tiers

→ ### 活跃度分层

| Tier | Project | Velocity Indicator | Maturity Assessment |
|------|---------|-------------------|---------------------|
| **1 — Rapid iteration** | OpenClaw | 500 PRs/24h, beta releases every 1–2 weeks | Mature core, experimental features; high bug volume but proportional contribution |
| **1 — Rapid iteration** | ZeroClaw | 39 PRs/24h, no formal releases | Newer project in rapid feature expansion; 5 S1 bugs in 24h signals aggressive shipping |
| **2 — Active development** | Hermes Agent | 50 PRs/24h, stable checkpoint every ~2 weeks | Stable with periodic batch releases; modularization work signals architectural maturity |
| **3 — Steady maintenance** | QwenPaw | 25 PRs/24h, no formal cadence | Smaller scale but high efficiency; focused on console polish over feature expansion |
| **4 — Inactive / nearline** | IronClaw | 0 activity | No public community engagement; likely private development or archived |

→ | 层级 | 项目 | 速度指标 | 成熟度评估 |
|------|---------|-------------------|---------------------|
| **1 — 快速迭代** | OpenClaw | 500 PRs/24h，beta 发布间隔 1–2 周 | 核心成熟，功能实验性；Bug 数量高但贡献量相应 |
| **1 — 快速迭代** | ZeroClaw | 39 PRs/24h，无正式发布 | 新项目在快速扩展功能；24h 内出现 5 个 S1 Bug 表明激进发布策略 |
| **2 — 活跃开发** | Hermes Agent | 50 PRs/24h，稳定检查点间隔约 2 周 | 稳定且有周期性批量发布；模块化工作表明架构成熟度 |
| **3 — 稳步维护** | QwenPaw | 25 PRs/24h，无固定节奏 | 规模较小但效率高；聚焦控制台打磨而非功能扩展 |
| **4 — 不活跃/近线** | IronClaw | 0 活动 | 无公开社区参与；可能为私有开发或已归档 |

### Which Projects Are Stabilizing

→ ### 哪些项目正在趋于稳定

- **Hermes Agent** is the closest to stabilizing: v0.23.5 as a curated checkpoint, modularization nearly complete (Weixin, WeCom, DingTalk extracted), and Desktop workspace redesign entering final review. The bug surface is manageable (~15 open P2/P3 issues with no active P1s in the last 24 hours).

→ **Hermes Agent** 最接近稳定状态：v0.23.5 作为精心策划的检查点，模块化工作接近完成（企业微信、企微、钉钉已提取），Desktop 工作区重构进入最终评审阶段。Bug 覆盖面可控（约 15 个开放 P2/P3 问题，过去 24 小时无活跃 P1）。

### Which Projects Are Rapidly Iterating

→ ### 哪些项目处于快速迭代中

- **ZeroClaw** is in peak iteration: 39 open PRs, 5 S1 bugs in one day, and large features (`computer_use`, LLMTR, Codex UI) in flight simultaneously. The project is expanding its surface faster than it can stabilize the existing one.

→ **ZeroClaw** 处于峰值迭代期：39 个开放 PR、单日 5 个 S1 Bug，以及大型功能（`computer_use`、LLMTR、Codex UI）同步推进。该项目扩展功能面的速度快于稳定现有功能的速度。

- **OpenClaw** maintains high velocity by design—a large contributor base sustains continuous churn—but the consistent presence of 15+ P0/P1 bugs suggests the project is in a high-throughput, continuous-improvement mode rather than approaching a stable plateau.

→ **OpenClaw** 在设计上保持高速度——庞大的贡献者基数维持着持续的高吞吐量——但 15+ P0/P1 Bug 的持续存在表明，该项目处于高吞吐、持续改进模式，而非接近稳定的平台期。

---

## 7. Trend Signals

→ ## 7. 趋势信号

The following patterns emerge from cross-project community feedback and are likely to shape the ecosystem in the coming 6–12 months:

→ 以下模式从跨项目社区反馈中浮现，可能在未来 6–12 个月内塑造整个生态系统：

### 1. Agentic Delegation Is the Primary Battleground
→ ### 1. Agent 委托是核心战场

Every project is investing in subagent/session delegation mechanics—OpenClaw's `session.maintenance`, Hermes Agent's `busy_result_mode` and `delegate_task(continue)`, QwenPaw's subagent toolkit isolation, and ZeroClaw's MCP resilience. The fundamental challenge is **state consistency across agent boundaries**: tool results, memory context, and session identity must survive delegation, compression, and reconnection. Projects that solve this reliably will have a decisive competitive advantage.

→ 每个项目都在投资 subagent/会话委托机制——OpenClaw 的 `session.maintenance`、Hermes Agent 的 `busy_result_mode` 和 `delegate_task(continue)`、QwenPaw 的 subagent toolkit 隔离，以及 ZeroClaw 的 MCP 韧性。根本挑战是**跨 Agent 边界的状态一致性**：工具结果、内存上下文和会话标识必须在委托、压缩和重连中存活。能可靠解决这一问题的项目将拥有决定性的竞争优势。

### 2. Memory Management Is a Universal Scaling Bottleneck
→ ### 2. 内存管理是普遍的规模化瓶颈

Three of four active projects have reported memory regressions or unbounded growth in the last 24 hours. As agents handle longer conversations, larger tool result sets, and more concurrent sessions, memory pressure is becoming the **primary reliability concern** across the ecosystem—not feature gaps. Expect to see:
→ 四个活跃项目中有三个在过去 24 小时内报告了内存回退或无界增长。随着 Agent 处理更长的对话、更大的工具结果集和更多并发会话，内存压力正成为整个生态系统**首要的可靠性问题**——而非功能缺口。预计将看到：

- Bounded prompt cache strategies (already in OpenClaw)
→ 有界 prompt 缓存策略（已在 OpenClaw 中实现）

- Compression pipeline hardening (Hermes Agent, OpenClaw)
→ Compression 管线加固（Hermes Agent、OpenClaw）

- Rust-native efficiency gains (ZeroClaw)
→ Rust 原生效率提升（ZeroClaw）

- Explicit retention policies for SQLite data stores (OpenClaw)
→ SQLite 数据存储的显式保留策略（OpenClaw）

### 3. Desktop and Cross-Platform Stability Is Underinvested Relative to Demand
→ ### 3. Desktop 和跨平台稳定性相对于需求投入不足

OpenClaw has 3+ macOS-specific bugs open for 12–39 days. Hermes Agent has a desktop GPU regression on AMD Linux lasting 3 months. ZeroClaw has `/health` startup issues affecting Kubernetes deployments. The **gap between CLI/server reliability and desktop UI reliability** is a consistent pattern. As non-technical users adopt these tools, desktop UX stability will become a gating factor for adoption.

→ OpenClaw 有 3+ 个 macOS 特异性 Bug 已开放 12–39 天。Hermes Agent 有一个持续 3 个月的 AMD Linux Desktop GPU 回退。ZeroClaw 有影响 Kubernetes 部署的 `/health` 启动问题。**CLI/服务端可靠性与 Desktop UI 可靠性之间的差距**是一个一贯的模式。随着非技术用户开始采用这些工具，Desktop UX 稳定性将成为采用的门槛因素。

### 4. Plugin Ecosystem Architecture Is Converging
→ ### 4. 插件生态架构正在收敛

Hermes Agent's extraction of Weixin, WeCom, and DingTalk to separate plugin repos signals a broader architectural trend: **core should not bundle channel-specific integrations**. OpenClaw's `skills` system and ZeroClaw's `mcp_bundles` follow the same pattern. The next ecosystem question is whether a shared plugin API standard emerges or each project defines its own.

→ Hermes Agent 将企业微信、企微和钉钉提取到独立插件仓库，标志着一个更广泛的架构趋势：**核心不应捆绑渠道特定的集成**。OpenClaw 的 `skills` 系统和 ZeroClaw 的 `mcp_bundles` 遵循相同的模式。下一个生态系统问题是：是否会出现共享的插件 API 标准，还是各项目自行定义。

### 5. Enterprise Adoption Is Emerging Across All Active Projects
→ ### 5. 企业级采用正在所有活跃项目中涌现

- QwenPaw received a formal enterprise platform-worker implementation review request (#8959)
→ QwenPaw 收到了正式的企业级 platform-worker 实现评审请求（#8959）

- Hermes Agent has enterprise-grade features (billing account explicitness, Nous Portal usage reporting)
→ Hermes Agent 具备企业级功能（计费账户明确性、Nous Portal 使用量报告）

- OpenClaw's prepared releases and SQLite expertise align with self-hosted enterprise requirements
→ OpenClaw 的预构建发布和 SQLite 专长与自托管企业需求相符

- ZeroClaw's `allowed_commands` policy and security-focused `computer_use` tool signal enterprise security requirements
→ ZeroClaw 的 `allowed_commands` 策略和以安全为中心的 `computer_use` 工具表明企业安全需求

**Implication for AI agent developers:** The market is transitioning from "individual developers experimenting with AI agents" to "teams deploying AI agents in production environments." Reliability, auditability, and enterprise integration will become weighted higher than feature velocity.

→ **对 AI Agent 开发者的启示：** 市场正在从"个人开发者实验 AI Agent"转向"团队在生产环境中部署 AI Agent"。可靠性、可审计性和企业集成将比功能速度获得更高的权重。

### 6. Internationalization Is a Pending Gap
→ ### 6. 国际化是一个待填补的缺口

Only two internationalization issues appeared across all four active projects (German patterns on OpenClaw, Dream Diary language on Hermes Agent), but the combined comment and reaction counts suggest genuine demand. As these tools expand beyond English-speaking markets, i18n will move from optional polish to a competitive differentiator.

→ 在所有四个活跃项目中仅出现了两个国际化问题（OpenClaw 的德语模式、Hermes Agent 的 Dream Diary 语言），但综合评论和反应数量表明存在真实需求。随着这些工具扩展到英语市场以外，i18n 将从可选的润色工作转变为竞争差异化因素。

---

*This report synthesizes community digest data from OpenClaw, Hermes Agent, QwenPaw, and ZeroClaw for 2026-11-28. IronClaw showed no public activity and was excluded from trend analysis.*

→ *本报告综合了 OpenClaw、Hermes Agent、QwenPaw 和 ZeroClaw 在 2026-11-28 的社区摘要数据。IronClaw 无公开活动，未纳入趋势分析。*</think>



---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate the content accurately while maintaining the Markdown structure
2. Use natural technical Chinese (the register of a Chinese developer newsletter)
3. Keep URLs, issue/PR references, version tags, file paths, and technical identifiers as-is
4. Preserve all formatting: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section carefully.

Key terms I need to handle consistently:
- Hermes Agent - 项目名称，不翻译
- Desktop - 桌面端
- workspace - 工作区
- PR - PR (保持不变)
- issues - Issues (保持不变)
- merge/merged - 合并
- release - 版本/发布
- patch - 补丁
- hot topics - 热点话题
- bug - bug (或缺陷)
- stability - 稳定性
- feature requests - 功能请求
- user feedback - 用户反馈
- pain points - 痛点
- satisfaction signals - 满意度信号
- backlog watch - 待办关注
- root need - 根本需求
- signal - 信号/趋势
- plugin - 插件
- cron - cron (定时任务系统)
- compression - 压缩
- summarizer - 摘要器
- gateway - 网关
- delegate/subagent - 委托/子代理
- Kanban - 看板
- OAuth - OAuth (保持)
- prefix-cache - 前缀缓存
- skill - skill (技能)
- skill ledger - 技能账本
- GPU - GPU
- iGPU - 集成GPU
- GIL - GIL (全局解释器锁)
- electron-updater - electron-updater (保持)
- AppImage - AppImage (保持)


- Docker - Docker (保持)
- hot-reload - 热重载
- reconciliation - 协调/同步
- false-positive - 误报
- prefix-cache invalidation - 前缀缓存失效
- data integrity - 数据完整性
- process leak - 进程泄漏
- fallback chain - 降级链
- billing - 计费
- account usage - 账户用量
- environment generation - 环境生成
- dependency pin - 依赖锁定
- upgrade - 升级
- silent revert - 静默回退

Now I'll translate the full document.
</think>


# Hermes Agent 项目日报 — 2026-11-28

---

## 1. 今日概览

Hermes Agent 今日保持**极高开发活跃度**，过去 24 小时内共有 **50 个 Issues 和 50 个 PR 发生更新**。项目于昨日（11 月 27 日）发布了 **v0.23.5** 版本，作为稳定检查点，汇总了自 v0.23.4 以来的约 338 个合并 PR。当前活动主要集中在桌面端（Linux/macOS GPU 性能、Workspace 重构）、网关会话管理以及插件抽离重构工作（Weixin、WeCom、DingTalk 迁移至独立插件）。社区参与热度高涨，多个长期悬而未决的 P2 级 bug 正在引发积极讨论。Open 与 Closed Issues 的比例（48:2）表明问题报告的流入和分诊工作运转正常，但在看板、cron、压缩等遗留子系统上，维护者的人力投入已呈现明显压力。

---

## 2. 版本发布

### v0.23.5 — Hermes Agent（2026 年 11 月 27 日）
- **类型：** 补丁版本 / 稳定检查点
- **范围：** 自 v0.23.4 以来合并了约 338 个 PR；涵盖 CLI、安装器、Microsoft Store 应用、Docker 及 Hermes Cloud
- **迁移说明：** 无——本次为累计稳定发布；完整变更日志随 v0.24.0 正式发布
- **参考：** [NousResearch/hermes-agent Release v0.23.5](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.5)

---

## 3. 项目进展

### 今日合并 / 关闭的 PR（1 个合并）
| PR | 类型 | 组件 | 概要 |
|----|------|-----------|---------|
| #147564 | bug（已关闭） | platform/telegram, provider/nous | 修复了 Hermes Cloud 实例在认证 provider 重置后出站 TCP 连接被拒绝的问题 |

### 推进中的活跃 PR（重点变动）

| PR | 类型 | 领域 | 概要 |
|----|------|------|---------|
| [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) | feat | desktop, webapp | 重构桌面端及共享 web 的 Agent Workspace 为默认 shell，提供一键开关恢复经典布局 |
| [#159644](https://github.com/NousResearch/hermes-agent/pull/159644) | refactor | weixin, plugin-migration | Weixin 迁出核心 → 官方 `weixin` 插件（位于 NousResearch/hermes-official-plugins） |
| [#159649](https://github.com/NousResearch/hermes-agent/pull/159649) | refactor | wecom, plugin-migration | WeCom 迁出核心 → Labs 插件（自动迁移，可选启用） |
| [#159638](https://github.com/NousResearch/hermes-agent/pull/159638) | refactor | dingtalk, plugin-migration | DingTalk 迁出核心 → Labs 插件（自动迁移） |
| [#136708](https://github.com/NousResearch/hermes-agent/pull/136708) | feat | gateway, delegate | `busy_result_mode`——将子代理在轮次中途产生的结果注入当前仍在运行的轮次中 |
| [#154578](https://github.com/NousResearch/hermes-agent/pull/154578) | feat | desktop (Linux) | 桌面端 Linux AppImage 支持通过 electron-updater 应用内更新 |
| [#160994](https://github.com/NousResearch/hermes-agent/pull/160994) | feat | cli, billing | `hermes usage --provider nous --json` 导出 Nous Portal 账户用量 |
| [#160993](https://github.com/NousResearch/hermes-agent/pull/160993) | feat | desktop | 插件可通过 `session.sourceLabels` 为消息侧边栏分区设置标签和分组 |
| [#160990](https://github.com/NousResearch/hermes-agent/pull/160990) | feat | plugin-catalog | Grimoire 插件升级至 v0.28.0 |
| [#160995](https://github.com/NousResearch/hermes-agent/pull/160995) | feat | plugin-catalog | REVamp 插件升级至 v1.0.0 稳定版 |

---

## 4. 社区热点话题

### 讨论最活跃的 Issues（按评论数排序）

**#89732** — *桌面端环境动画导致 Linux + AMD 环境下集成 GPU 持续占用 50–69%* — 9 条评论  
[Issue #89732](https://github.com/NousResearch/hermes-agent/issues/89732)  
> **根本需求：** 使用 AMD 集成显卡的用户在空闲时桌面端动画（圆弧边框、微光动效、状态点脉冲）会导致显著的电量消耗和发热问题。这是一个**平台相关的性能回退**，反映出渲染层缺乏 GPU 感知调度或缺少关闭环境动效的开关。  
> **趋势信号：** 若 AMD 笔记本电脑用户群体规模可观，此问题很可能升级为 P1。

**#136931** — *Skill 自我改进机制可能导致已有良好工作流退化* — 8 条评论  
[Issue #136931](https://github.com/NousResearch/hermes-agent/issues/136931)  
> **根本需求：** 自主技能学习功能受到认可，但用户无法区分持久性改进、任务局部的临时方案或过于狭隘的澄清内容——后者会污染技能账本。用户呼吁提供审计、标记或回滚学习规则的手段。  
> **趋势信号：** 核心 AI 质量问题；与 #71266 中的 SkillOpt 提案相关。

**#91169** — *project bind-board 未正确设置 board.project_id* — 6 条评论  
[Issue #91169](https://github.com/NousResearch/hermes-agent/issues/91169)  
> **根本需求：** 看板绑定不完整——绑定看板上的任务未继承 Project 归属，导致任务回退至无作用域的默认状态。影响工作流组织的可靠性。

**#80280** — *看板超时/被取代的 Worker 遗留子孙进程组未清理* — 6 条评论（1 个 reaction）  
[Issue #80280](https://github.com/NousResearch/hermes-agent/issues/80280)  
> **根本需求：** 过期的 Worker 进程及替代运行实例可能同时修改同一工作树，违反事务性假设。这既是进程泄漏 bug，也存在数据完整性风险。

**#92774** — *register_system_prompt_section() 限制值硬编码（每节 4k，总计 8k）* — 5 条评论  
[Issue #92774](https://github.com/NousResearch/hermes-agent/issues/92774)  
> **根本需求：** 插件作者无法通过合规的 MemoryProvider 路径注入大型常驻上下文块（如领域知识库），因为存在人为上限。用户请求改为可配置的限值。

---

## 5. Bug 与稳定性

按严重程度排序（P2 = 高，P3 = 中/低）。标注 🔧 的项存在已提交的修复 PR。

### P2 — 高严重性

| Issue | 组件 | 描述 | 修复 PR |
|-------|-----------|-------------|--------|
| [#89732](https://github.com/NousResearch/hermes-agent/issues/89732) | desktop/shell (Linux+AMD) | 环境动画使集成 GPU 持续处于 50–69% gpu_busy | — |
| [#91169](https://github.com/NousResearch/hermes-agent/issues/91169) | cli, cron | `bind-board` 未设置 `board.project_id` → 任务丢失项目作用域 | — |
| [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) | gateway, cron | 看板过期 Worker 遗留子孙进程组；存在并发工作树修改风险 | — |
| [#120858](https://github.com/NousResearch/hermes-agent/issues/120858) | agent, provider/anthropic | Anthropic OAuth 字段别名 `chat_history_lookup` 未反向映射 → 报 `not_found` 错误 | — |
| [#146237](https://github.com/NousResearch/hermes-agent/issues/146237) | desktop, profiles | 看板卡片重新分配至其他 profile 时以 403 `profile_scope_mismatch` 失败 | — |
| [#148413](https://github.com/NousResearch/hermes-agent/issues/148413) | gateway, TUI | `session.list` 丢失 preview 和 `show_subagents`，历史记录硬上限 200 且无分页 | — |
| [#158684](https://github.com/NousResearch/hermes-agent/issues/158684) | agent, compression | 压缩模块将带角色类型的工具消息发送至不支持工具调用的摘要端点 → 每次压缩都回退至主模型 | — |
| [#148857](https://github.com/NousResearch/hermes-agent/issues/148857) | agent, billing | 降级链耗尽后会话停留在最后一个失败的降级节点，而非尝试之前曾恢复的节点 | — |
| [#159238](https://github.com/NousResearch/hermes-agent/issues/159238) | agent, compression | Worker 会话压缩中止：工具行携带了 handoff 时 worker 不接受的 'name' 键 | — |
| [#160945](https://github.com/NousResearch/hermes-agent/issues/160945) | agent, cron, memory | Cron Agent 会话始终无法获得外部 memory provider 的工具（`honcho_*`），尽管 provider 已注册 | — |
| [#160977](https://github.com/NousResearch/hermes-agent/issues/160977) | agent, billing | `_fetch_anthropic_account_usage` 传入 `fraction=True` 时将 1% 误作 100% 处理（百分比被误解析为小数） | — |
| [#160938](https://github.com/NousResearch/hermes-agent/issues/160938) | install-update | 仅插件的依赖锁定版本永不推进——每次环境重建都继承上次的 `uv.lock`，悄然回退升级 | — |
| [#150518](https://github.com/NousResearch/hermes-agent/issues/150518) | gateway, macOS | 网关在 macOS 上冻结数分钟：housekeeping 中的 `gc.collect()` 在大内存交换堆上阻塞 GIL | — |
| [#157805](https://github.com/NousResearch/hermes-agent/issues/157805) | desktop, delegate | `delegate_task(continue)` 复用了 `subagent_id`；store 丢弃对已处于终态 ID 的更新 → 继续运行的子代理始终不显示 | 🔧 [#146851](https://github.com/NousResearch/hermes-agent/pull/146851) |

### P3 — 中/低严重性

| Issue | 组件 | 描述 |
|-------|-----------|-------------|
| [#160877](https://github.com/NousResearch/hermes-agent/issues/160877) | cli, webapp | 最新更新强制安装配置的 "webapp" 且未预先警告即禁用 dashboard |
| [#160982](https://github.com/NousResearch/hermes-agent/issues/160982) | cron | `lifecycle_guard` 误报：命令正则跨 JSON 字符串字段匹配 |
| [#160983](https://github.com/NousResearch/hermes-agent/issues/160983) | kanban | 单次 `hermes kanban claim` 在 TTL 时被回收并标记为失败，触发 `gave_up` |
| [#160941](https://github.com/NousResearch/hermes-agent/issues/160941) | docker, profiles | Docker 启动时状态协调在 `gateway_state.json` 持有合法但形状不符的 JSON 时崩溃 |
| [#94714](https://github.com/NousResearch/hermes-agent/issues/94714) | cli, sessions | `hermes sessions browse` 在按方向键时以 `Cancelled.` 退出 |
| [#160342](https://github.com/NousResearch/hermes-agent/pull/160342) 🔧 | desktop | Composer：媒体载荷在轮次运行中排队而非结束轮次；大段粘贴会附加；未设置阈值时静默通过 |

---

## 6. 功能请求与路线图信号

### 高关注请求（按参与度和战略契合度排序）

| Issue/PR | 领域 | 请求 | 近期合并可能性 |
|----------|------|---------|-------------------------------|
| [#71266](https://github.com/NousResearch/hermes-agent/issues/71266) | skills, agent | 原生 skill 休眠机制，附带 SkillOpt 验证门的自我改进（无外部依赖） | 高——与现有自主改进路线图一致 |
| [#136703](https://github.com/NousResearch/hermes-agent/issues/136703) / [#136708](https://github.com/NousResearch/hermes-agent/pull/136708) | gateway, delegate | `delegation.busy_result_mode`——将子代理轮次中途的结果注入当前运行中的轮次 | **已有 PR，高就绪度** |
| [#54941](https://github.com/NousResearch/hermes-agent/issues/54941) | plugins, cli | `/reload-plugins`——在不创建新会话的情况下热重载 `plugins.enabled` | 中——可实现 git-pull 即时生效工作流 |
| [#74622](https://github.com/NousResearch/hermes-agent/issues/74622) | gateway, cli | `/refresh`——在不丢失对话的情况下重载系统提示来源 | 中——受阻于前缀缓存失效机制设计 |
| [#28226](https://github.com/NousResearch/hermes-agent/issues/28226) | memory | 诊断、盘点、隔离测试功能的多租户 Memory OS | 中低——架构层面，长期规划 |
| [#88512](https://github.com/NousResearch/hermes-agent/issues/88512) | desktop | 空聊天界面 logo 开放自定义（皮肤驱动） | 低——纯装饰性 |
| [#160948](https://github.com/NousResearch/hermes-agent/issues/160948) | desktop, chat | 将选中的会话日志片段作为上下文片段（类似 @file）附加至 Composer | 中——提升上下文复用体验 |

**路线图信号：** 正在进行的插件抽离工作（Weixin、WeCom、DingTalk 迁至独立仓库）和桌面端 Workspace 重构（#152168）表明团队当前优先推进**模块化**和**桌面端功能对等**。SkillOpt 技能改进工作（#71266）和 `busy_result_mode` 功能（#136708）则反映出对**智能体委托质量**的关注。Memory 系统改进（#28226、#160945）和压缩鲁棒性（#158684、#159238）反映了随着生产级用量增长，架构正在经历压力测试。

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 影响 |
|-------|----------|--------|
| **Linux/AMD 桌面端 GPU 问题** | #89732：空闲动画下集成 GPU 持续占用 50–69% | 集成显卡笔记本的续航和发热问题 |
| **插件依赖版本锁定失效** | #160938：升级在下次环境重建时悄然回退 | 用户无法可靠地锁定插件特定包版本 |
| **看板可靠性问题** | #80280（进程泄漏）、#91169（项目绑定）、#160983（claim TTL）、#107347（active_pr 反复重建循环） | 工作队列完整性受到质疑；存在工作丢失风险 |
| **限流降级逻辑缺陷** | #148857：会话卡在最后一个失败的降级节点而非尝试之前恢复的节点 | Provider 故障期间浪费轮次，用户困惑 |
| **Cron 缺失 memory 工具** | #160945：`honcho_*` 工具在 Cron Agent 会话中不可用 | 使用外部 memory 后端的用户的 cron 任务自主性受限 |
| **压缩模块破坏摘要端点** | #158684：带角色类型的工具消息被非工具感知端点拒绝 | 特定 provider 配置下上下文压缩无效 |
| **Docker profile 状态协调** | #160941：`gateway_state.json` 形状不符时崩溃 | 配置迁移不完整后 Docker 部署静默失败 |

### 满意度信号

- **插件生态增长：** 插件目录持续更新（REVamp 1.0.0、Grimoire 0.28.0、#160995、#160990）表明第三方贡献活跃
- **桌面端重构受关注：** #152168（Workspace 重构）正积极开发，并提供切换开关保留经典布局——用户可在不强制离开熟悉界面的前提下体验新设计
- **Nous 计费集成：** #160994 开放 JSON 格式账户用量导出，改善了高级用户的程序化访问能力
- **macOS 网关 GIL 修复进行中：** #150518 已被确认；修复网关 housekeeping 清理逻辑指日可待

---

## 8. 待办关注

需要维护者关注的长周期或重要事项：

| Issue/PR | 存续时间 | 优先级 | 状态 | 关注原因 |
|----------|-----|----------|--------|---------|
| [#80280](https://github.com/NousResearch/hermes-agent/issues/80280) | 约 3.5 个月（2026-08-06） | P2 | OPEN | 进程泄漏 + 并发工作树修改——数据完整性风险；尚无修复 PR |
| [#89732](https://github.com/NousResearch/hermes-agent/issues/89732) | 约 3 个月（2026-08-19） | P2 | OPEN | Linux+AMD GPU 回退；尚无修复 PR；影响主流硬件的续航和发热 |
| [#91169](https://github.com/NousResearch/hermes-agent/issues/91169) | 约 3 个月（2026-08-20） | P2 | OPEN | 看板项目绑定失效；任务作用域丢失；尚无修复 PR |
| [#150518](https://github.com/NousResearch/hermes-agent/issues/150518) | 约 3 周（2026-11-07） | P2 | OPEN | macOS 网关冻结（GIL + gc.collect）；影响服务可用性 |
| [#158684](https://github.com/NousResearch/hermes-agent/issues/158684) | 1 周（2026-11-21） | P2 | OPEN | 压缩回退循环；受影响端点的上下文永不缩减 |
| [#160938](https://github.com/NousResearch/hermes-agent/issues/160938) | 1 天（2026-11-27） | P2 | OPEN | 依赖锁定回退；升级悄然丢失 |
| [#136931](https://github.com/NousResearch/hermes-agent/issues/136931) | 约 7 周（2026-10-12） | P3 | OPEN | Skill 自我改进退化风险；需架构层面决策 |
| [#71266](https://github.com/NousResearch/hermes-agent/issues/71266) | 约 4 个月（2026-07-25） | P3 | OPEN | SkillOpt 功能；需决策是否采纳该方法论 |
| [#28226](https://github.com/NousResearch/hermes-agent/issues/28226) | 约 6 个月（2026-05-18） | P3 | OPEN | 多租户 memory OS；已有架构提案但无可见推进 |

**关键结论：** 三个 P2 bug（#80280、#89732、#91169）已悬而未决超过 3 个月且无修复 PR，表明维护者精力正被桌面端重构、插件抽离和 v0.24.0 准备工作所分散。优先推进至少 **进程泄漏**（#80280）和 **看板绑定**（#91169）两个 bug 的修复，将显著改善生产环境的可靠性。

---

*本日报基于 NousResearch/hermes-agent 在 2026-11-28 的公开活动数据生成。所有 GitHub 链接均指向项目公开仓库。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content while maintaining the exact Markdown structure
2. Keep all technical terms, URLs, issue numbers, project names, etc. in their original form
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me carefully translate each section:

**Title:** QwenPaw 项目速报 — 2026-11-28

**Section 1 - Today's Overview:** High activity with 25 PRs and 10 issues updated in last 24h. Strong community engagement. 6 PRs merged, 19 open. No releases. Overall health stable.

**Section 2 - Releases:** No new releases. Last version mentioned: v2.3.0.post1 and v2.2.2.post1.

**Section 3 - Project Progress:** Tables with PR info need translation but keeping technical terms.

**Section 4 - Community Hot Topics:** Active issues by comment count.

**Section 5 - Bugs & Stability:** Open bugs ranked by activity.

**Section 6 - Feature Requests & Roadmap Signals:** Active feature PRs and roadmap predictions.

**Section 7 - User Feedback Summary:** Pain points and positive signals.

**Section 8 - Backlog Watch:** Issues needing attention and stale PRs.

Let me translate this carefully, maintaining the exact structure and formatting.
</think>


# QwenPaw 项目速报 — 2026-11-28

## 1. 今日概览

QwenPaw 保持了高水平的开发活跃度，过去 24 小时内共更新 25 个 PR 和 10 个 Issue。项目展现出强劲的社区参与度，尤其集中在控制台稳定性、代码模式可靠性和平台可扩展性方面。今日有 6 个 PR 合入/关闭，19 个保持开放状态并处于 Review 中。今日未发布新版本。整体健康状况稳定，多个子系统均有活跃的缺陷修复，并持续推进重要功能开发。

---

## 2. 发版情况

**今日无新版本发布。** Issue 追踪中涉及的最新稳定版本为 v2.3.0.post1（多个 Bug 报告涉及），企业基线版本为 v2.2.2.post1。

---

## 3. 项目进展

### 今日合入/关闭的 PR（共 6 个）

| PR | 标题 | 规模 | 聚焦领域 |
|----|------|------|----------|
| [#8951](https://github.com/agentscope-ai/QwenPaw/pull/8951) | 稳定化聊天导航、滚动与引导时间戳 | L | Console |
| [#8952](https://github.com/agentscope-ai/QwenPaw/pull/8952) | 处理中断的恢复与关闭流程 | L | Relay |
| [#8953](https://github.com/agentscope-ai/QwenPaw/pull/8953) | 稳定化聊天历史分页与滚动 | M | Console |
| [#8941](https://github.com/agentscope-ai/QwenPaw/issues/8941) | （Issue 已关闭：Windows plugin-install 测试失败文档化） | — | Testing |

**核心主题：**

- **控制台稳定性占主导：** 三个合入的 PR 都聚焦于聊天导航、分页和滚动行为——表明 UI 层在本周期得到了重点关注。
- **Relay 韧性提升：** PR #8952 改进了 Relay 系统中恢复和关闭的处理逻辑。
- **Bug 闭环：** Issue #8712（doom-loop 门控录制）和 #8941（Windows 测试失败）已关闭，解决了已知的回归问题。

### 推进功能开发的开放 PR

| PR | 标题 | 规模 | 状态 | 意义 |
|----|------|------|------|------|
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | 支持自定义决策模型端点 | S | 首次贡献者，Review 中 | 扩展模型提供商灵活性 |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | 支持运行时 base-path 部署 | XXXL | Review 中 | 支持反向代理部署 |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 防止注入的上下文持续留存 | L | Review 中 | 修复跨轮次上下文泄露 |
| [#8965](https://github.com/agentscope-ai/QwenPaw/pull/8965) | 解决 cron 动作的默认 workspace 问题 | S | 修复 #8960 | 解决 Cron API 500 错误 |

---

## 4. 社区热点话题

### 评论最多的 Issue（按评论数排序）

1. **[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)** — Console：Markdown 表格溢出消息气泡且无横向滚动
   - **作者：** caldefoc | **评论数：** 5 | **反应：** 1 👍
   - **根因：** 助手消息中的 Markdown 表格超出消息气泡边界，且缺少横向滚动支持。
   - **影响：** 影响 Web Console 消息渲染的 UX 回归问题。

2. **[#8956](https://github.com/agentscope-ai/QwenPaw/issues/8956)** — Creator App 测试自 #8785 以来在 main 分支失败
   - **作者：** aiyili | **评论数：** 4
   - **根因：** `call_with_overflow_recovery` 中的共享恢复预算导致使用对象身份而非内容进行放弃检测的逻辑出错。
   - **状态：** PR #8957 已提交修复。

3. **[#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962)** — QQ 频道重连监督进程永久退出
   - **作者：** yaozy2020 | **评论数：** 3
   - **问题：** WebSocket 清理错误导致 QQ 重连循环永久终止。
   - **修复：** PR #8963 实现了最小化 QQ 专用修复方案。

4. **[#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959)** — 企业 Platform-Worker 实现评审请求（技术评审）
   - **作者：** wenjunlong | **评论数：** 2 | **反应：** 1 👍
   - **意义：** 企业用户寻求将 platform-worker 架构贡献上游；反映出对可扩展部署模式的需求。

### 社区深层需求

- **UI/Console 可靠性：** 多个 Issue（#8845、#8951、#8953）表明 Web Console 需要为实际生产中的消息格式化和导航场景进行加固。
- **插件生态健康：** Windows 兼容性（#8941）和 Creator App 测试稳定性（#8956）反映出插件复杂度日益增长。
- **企业就绪度：** Issue #8959 反映出 QwenPaw 在企业场景中的实际部署应用，并需要上游贡献路径。

---

## 5. Bug 与稳定性

### 开放中的 Bug（按活跃度排序）

| 优先级 | Issue | 标题 | 修复 PR | 状态 |
|--------|-------|------|---------|------|
| **高** | [#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960) | Cron API 端点返回 500 — `mam._workspaces` 拼写错误 | [#8965](https://github.com/agentscope-ai/QwenPaw/pull/8965) | 修复已提交 |
| **高** | [#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962) | QQ 重连监督进程永久退出 | [#8963](https://github.com/agentscope-ai/QwenPaw/pull/8963) | 修复已提交 |
| **中** | [#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954) | 子 Agent 生成时泄露父级的 `_execution_toolkit` | — | 暂无 PR |
| **中** | [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903) | 代码模式 `run_tool_batch` 工具调用失败 | — | 暂无 PR |
| **中** | [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) | Markdown 表格溢出控制台气泡 | — | 暂无 PR |
| **低** | [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | Governance 内置规则无法配置 | — | 功能请求 |

### 回归问题

- **[#8956](https://github.com/agentscope-ai/QwenPaw/issues/8956)：** 由 PR #8785（2026-11-26 合入）引入的回归问题，影响 Creator App 测试。共享恢复预算的变更破坏了基于对象身份的放弃检测逻辑。修复 PR [#8957](https://github.com/agentscope-ai/QwenPaw/pull/8957) 等待合并。

---

## 6. 功能请求与路线图信号

### 活跃中的功能 PR

| PR | 标题 | 规模 | 相关性 |
|----|------|------|--------|
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | 支持自定义决策模型端点 | S | 模型提供商可扩展性 |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | 支持运行时 base-path 部署 | XXXL | 部署灵活性（反向代理） |
| [#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959) | 企业 Platform-Worker 评审请求 | — | 可扩展架构信号 |

### 功能请求 Issue

| Issue | 请求 | 备注 |
|-------|------|------|
| [#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959) | 企业 Platform-Worker 实现与上游集成 | 暗示需要标准化的扩展接口 |
| [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | Governance 内置规则应可配置/禁用 | 用户对无法独立于 tool_guard 配置规则感到困惑 |

### 路线图预测

基于当前活跃度，近期开发可能聚焦于：

1. **控制台稳定性** — 多个 PR 修复导航、分页和格式化问题，表明 UI 打磨是当前重点。
2. **部署灵活性** — PR #8719（base-path 部署）表明正在投资企业级/代理友好的托管方式。
3. **模型可扩展性** — #8928 添加自定义决策模型支持，扩大提供商选择范围。
4. **代码模式加固** — Issue #8903、#8954 和 #8956 均涉及代码模式或工具执行，表明该领域需要在 v2.4 之前重点关注。

---

## 7. 用户反馈摘要

### 痛点

| 类别 | Issue | 用户反馈 |
|------|-------|----------|
| **Console UI** | Markdown 表格溢出 [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) | 表格超出消息气泡且无滚动；宽表格内容不可见，用户感到困扰。 |
| **Cron API** | 所有 cron 端点返回 500 [#8960](https://github.com/agentscope-ai/QwenPaw/issues/8960) | 因 workspace 解析中的拼写错误，用户无法通过 REST API 管理定时任务。 |
| **QQ 频道** | 重连失败导致永久断开 [#8962](https://github.com/agentscope-ai/QwenPaw/issues/8962) | 一次清理错误永久禁用 QQ 重连监督进程，导致 Worker 持续断开连接。 |
| **代码模式** | 子 Agent 工具包泄露 [#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954) | 在代码模式中生成子 Agent 会导致因继承的上下文污染而触发 `ToolNotFoundError`。 |
| **Governance** | 内置规则无法配置 [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | 用户无法独立于 tool_guard 规则禁用 governance 规则，造成困惑。 |

### 正面信号

- 企业级采纳：Issue #8959 表明基于 QwenPaw 构建的企业解决方案已在实际生产中部署。
- 活跃贡献：多个首次贡献者（PR #8928、#7211、#8965、#8961）参与贡献，表明社区参与度持续增长。
- 快速响应：关键修复（#8963、#8965、#8957）在 Issue 创建后数小时内即提交，反映出高效的社区响应能力。

---

## 8. 待办事项关注

### 需要维护者关注的问题

| Issue | 时长 | 标题 | 备注 |
|-------|------|------|------|
| [#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845) | 8 天 | Markdown 表格溢出 | 5 条评论，1 个 👍；影响所有查看宽表格的用户；暂无 PR。 |
| [#8903](https://github.com/agentscope-ai/QwenPaw/issues/8903) | 3 天 | 代码模式 `run_tool_batch` 失败 | 阻断代码模式用户使用；需要调查。 |
| [#8954](https://github.com/agentscope-ai/QwenPaw/issues/8954) | 1 天 | 子 Agent 工具包泄露 | 回归问题；影响多 Agent 工作流；需要尽快修复。 |
| [#8959](https://github.com/agentscope-ai/QwenPaw/issues/8959) | 1 天 | 企业评审请求 | 高战略价值；维护者需对架构给出意见。 |
| [#8955](https://github.com/agentscope-ai/QwenPaw/issues/8955) | 1 天 | Governance 规则配置 | 影响安全敏感型部署的功能缺口。 |

### 需要 Review 的陈旧 PR

| PR | 时长 | 标题 | 状态 |
|----|------|------|------|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 约 3 个月 | 防止注入的上下文持续留存 | Review 中（规模/L）—— 对上下文隔离影响重大 |
| [#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719) | 约 15 天 | 支持运行时 base-path 部署 | Review 中（规模/XXXL）—— 重大架构变更 |

---

*本速报数据来源于 2026-11-28 的 QwenPaw GitHub 数据。所有 Issue 和 PR 链接均指向 https://github.com/agentscope-ai/QwenPaw。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the English technical report about ZeroClaw project into Simplified Chinese. Let me go through this carefully.

Key things to remember:
1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, code references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

# ZeroClaw Project Digest — 2026-11-28
# ZeroClaw 项目摘要 — 2026-11-28

## 1. Today's Overview
## 1. 今日概览

"ZeroClaw is experiencing **high-volume activity** with 39 PRs and 11 issues updated in the last 24 hours, indicating active development momentum."
ZeroClaw 处于**高活跃状态**，过去 24 小时内有 39 个 PR 和 11 个 issue 更新，表明开发节奏强劲。

"The project is in a stabilization phase with five S1/S2 severity bugs reported overnight—primarily around tool-result handling, MCP resilience, and gateway health checks—while several large cross-cutting features are in flight (macOS computer_use tool, Codex subscription UI, LLMTR provider)."
项目正处于稳定化阶段，昨夜报告了 5 个 S1/S2 级别的严重 bug——主要集中在工具结果处理、MCP 弹性和网关健康检查——同时多条大型跨领域功能正在推进中（macOS computer_use 工具、Codex 订阅 UI、LLMTR provider）。

"No releases were cut today; the codebase remains on `master` at `0.9.0`."
今日未发布新版本；代码库仍停留在 `0.9.0` 版本的 `master` 分支上。

## 2. Releases
## 2. 发布动态

**No new releases today.** The latest stable remains `0.9.0` (tagged on `master` at commit `d4a5d2afd`). No release blockers or deprecation notices were posted.
**今日无新版本发布。** 最新稳定版仍为 `0.9.0`（标记于 `master` 分支的 `d4a5d2afd` 提交）。无发布阻塞项或弃用公告。

## 3. Project Progress
## 3. 项目进展

The following PRs represent the most substantive advances merged/updated today (all still open, but indicating active development velocity):
以下 PR 体现了今日最实质性的进展（均仍处于开放状态，但反映出活跃的开发节奏）：

Now I need to handle the table carefully. Let me identify the columns:
- PR | Author | Area | Summary

| PR | Author | Area | Summary |
|---|---|---|---|
| [#12781](https://github.com/zeroclaw-labs/zeroclaw/pull/12781) | Aarlington | providers | Fixes damaged tool-result envelope recovery; pairs orphaned results with remaining calls |
| [#12780](https://github.com/zeroclaw-labs/zeroclaw/pull/12780) | Aarlington | providers/OpenRouter | Fixes #12774 — delivers declared tool-result image attachments across chat paths |
| [#12779](https://github.com/zeroclaw-labs/zeroclaw/pull/12779) | vadelma-agent | gateway | Validates on-disk config before admin reload to prevent teardown on invalid candidates |
| [#12776](https://github.com/zeroclaw-labs/zeroclaw/pull/12776) | tidux | tools, security | Adds opt-in macOS `computer_use` tool (feature-flagged) and OpenRouter tool-result image delivery (XL size) |
| [#12778](https://github.com/zeroclaw-labs/zeroclaw/pull/12778) | tidux | config, security | Unifies `allowed_commands` parsing and `"*"` comparison across all policy checks |
| [#12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) | vadelma-agent | gateway, web | Shows Codex subscription usage in web chat (stacked on #12641; XL size) |
| [#12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) | vadelma-agent | skills, security | Skills can now pass literal arguments to executables without a shell (`argv` array in SKILL.toml) |
| [#12264](https://github.com/zeroclaw-labs/zeroclaw/pull/12264) | knowhycodata | providers | Adds first-class `llmtr` model-provider slot for LLMTR Chat Completions gateway |

| PR | 作者 | 领域 | 摘要 |
|---|---|---|---|
| [#12781](https://github.com/zeroclaw-labs/zeroclaw/pull/12781) | Aarlington | providers | 修复损坏的工具结果信封恢复；将孤立结果与剩余调用配对 |
| [#12780](https://github.com/zeroclaw-labs/zeroclaw/pull/12780) | Aarlington | providers/OpenRouter | 修复 #12774 — 在各聊天路径中传递声明的工具结果图片附件 |
| [#12779](https://github.com/zeroclaw-labs/zeroclaw/pull/12779) | vadelma-agent | gateway | 在管理员重载前验证磁盘配置，防止因候选配置无效而触发服务销毁 |
| [#12776](https://github.com/zeroclaw-labs/zeroclaw/pull/12776) | tidux | tools, security | 新增可选 macOS `computer_use` 工具（功能开关控制）及 OpenRouter 工具结果图片传递（XL） |
| [#12778](https://github.com/zeroclaw-labs/zeroclaw/pull/12778) | tidux | config, security | 统一所有策略检查中的 `allowed_commands` 解析及 `"*"` 比较逻辑 |
| [#12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) | vadelma-agent | gateway, web | 在 Web 聊天中展示 Codex 订阅用量（依赖 #12641；XL） |
| [#12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) | vadelma-agent | skills, security | Skills 现可通过 `argv` 数组（SKILL.toml）向可执行文件传递字面参数，无需 shell |
| [#12264](https://github.com/zeroclaw-labs/zeroclaw/pull/12264) | knowhycodata | providers | 新增原生 `llmtr` 模型 provider 槽位，用于 LLMTR Chat Completions 网关 |

**Infrastructure & tooling fixes:**
**基础设施与工具修复：**

- [#12777](https://github.com/zeroclaw-labs/zeroclaw/pull/12777): Updated `zip` crate from 9.0.5 → 9.8.2 (includes `constant_time_eq` 0.6.2, `typed-path` bump)
- [#12777](https://github.com/zeroclaw-labs/zeroclaw/pull/12777): 将 `zip` crate 从 9.0.5 升级至 9.8.2（包含 `constant_time_eq` 0.6.2 及 `typed-path` 升级）

- [#12775](https://github.com/zeroclaw-labs/zeroclaw/pull/12775): Guards SQLite embedding repairs against concurrent edits
- [#12775](https://github.com/zeroclaw-labs/zeroclaw/pull/12775): 保护 SQLite 嵌入修复逻辑免受并发编辑影响

- [#12761](https://github.com/zeroclaw-labs/zeroclaw/pull/12761): Honors recall date bounds for suffixed Markdown log filenames
- [#12761](https://github.com/zeroclaw-labs/zeroclaw/pull/12761): 对带后缀的 Markdown 日志文件名尊重召回日期边界

- [#12755](https://github.com/zeroclaw-labs/zeroclaw/pull/12755): Compares RFC 3339 timestamp bounds by `Instant` instead of text
- [#12755](https://github.com/zeroclaw-labs/zeroclaw/pull/12755): 使用 `Instant` 而非文本比较 RFC 3339 时间戳边界

## 4. Community Hot Topics
## 4. 社区热点话题

The most active discussions center on two high-impact implementation tracks and one provider deprecation:
最活跃的讨论集中在两条高影响力实现路线和一项 provider 弃用：

**① Desktop computer-use protocol —** Issue [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) is an accepted implementation batch tracker for arbitrary local desktop applications (screen observation, accessibility-first control). PR [#12776](https://github.com/zeroclaw-labs/zeroclaw/pull/12776) delivers the initial macOS feature-flagged built-in `computer_use` tool. This represents a major new surface area for agent autonomy and carries high risk; the feature is gated behind both Cargo features and config-level `risk_profiles`.
**① 桌面 computer-use 协议 —** Issue [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) 是一个已接受的批量实现追踪器，面向任意本地桌面应用（屏幕观测、无障碍优先控制）。PR [#12776](https://github.com/zeroclaw-labs/zeroclaw/pull/12776) 交付了首个 macOS 功能开关控制的内置 `computer_use` 工具。这代表着代理自主性的一个重大新攻击面，风险较高；该功能受 Cargo features 和配置级 `risk_profiles` 双重门控。

**② Gemini provider modernization —** Issue [#12669](https://github.com/zeroclaw-labs/zeroclaw/issues/12669) coordinates migration off retired Gemini CLI and Gemini Code Assist consumer OAuth onto supported paths (Gemini API keys, Vertex, Agent Platform, Gemini Enterprise). This is a provider continuity concern affecting all users who integrated via the deprecated Google consumer paths.
**② Gemini provider 现代化 —** Issue [#12669](https://github.com/zeroclaw-labs/zeroclaw/issues/12669) 协调从已停用的 Gemini CLI 和 Gemini Code Assist 消费者 OAuth 迁移到受支持路径（Gemini API keys、Vertex、Agent Platform、Gemini Enterprise）。这涉及 provider 连续性问题，影响所有通过已弃用 Google 消费者路径集成的用户。

**③ Skills literal-argument execution —** PR [#12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) introduces `argv`-based skill invocation without shell wrapping, improving argument fidelity and security posture. Community interest is reflected in its XL size and broad scope.
**③ Skills 字面参数执行 —** PR [#12744](https://github.com/zeroclaw-labs/zeroclaw/pull/12744) 引入了基于 `argv` 的 skill 调用，无需 shell 包装，提升了参数保真度和安全态势。其 XL 规模和广泛影响范围反映了社区的关注度。

## 5. Bugs & Stability
## 5. Bug 与稳定性

Five bugs were reported in the last 24 hours, ranked by severity:
过去 24 小时内报告了 5 个 bug，按严重程度排序：

| Severity | Issue | Title | Status | Fix PR? |
|---|---|---|---|---|
| **S1** | [#12774](https://github.com/zeroclaw-labs/zeroclaw/issues/12774) | OpenRouter drops declared tool-result image attachments | open | [#12780](https://github.com/zeroclaw-labs/zeroclaw/pull/12780) |
| **S1** | [#12773](https://github.com/zeroclaw-labs/zeroclaw/issues/12773) | Quickstart cannot configure Lark/Feishu credentials; writes invalid block | open | — |
| **S1** | [#12766](https://github.com/zeroclaw-labs/zeroclaw/issues/12766) | Gateway does not answer /health during startup while MCP connects; liveness probes restart daemon | open | — |
| **S2** | [#12767](https://github.com/zeroclaw-labs/zeroclaw/issues/12767) | Transient MCP failure at startup leaves agent without tools; /health stays green | open | — |
| **S3** | [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) | Web chat input doesn't regain focus after agent reply | open, in-progress | — |
| **S3** | [#12746](https://github.com/zeroclaw-labs/zeroclaw/issues/12746) | Chat message box doesn't get focus back after reconnect | open | — |

| 严重程度 | Issue | 标题 | 状态 | 修复 PR？ |
|---|---|---|---|---|
| **S1** | [#12774](https://github.com/zeroclaw-labs/zeroclaw/issues/12774) | OpenRouter 丢弃声明的工具结果图片附件 | open | [#12780](https://github.com/zeroclaw-labs/zeroclaw/pull/12780) |
| **S1** | [#12773](https://github.com/zeroclaw-labs/zeroclaw/issues/12773) | Quickstart 无法配置 Lark/Feishu 凭证；写入无效块 | open | — |
| **S1** | [#12766](https://github.com/zeroclaw-labs/zeroclaw/issues/12766) | 网关在 MCP 连接期间启动时不响应 /health；存活探针导致守护进程重启 | open | — |
| **S2** | [#12767](https://github.com/zeroclaw-labs/zeroclaw/issues/12767) | 启动时 MCP 短暂失败导致代理失去工具；/health 仍为绿色 | open | — |
| **S3** | [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) | Web 聊天输入框在代理回复后不恢复焦点 | open, in-progress | — |
| **S3** | [#12746](https://github.com/zeroclaw-labs/zeroclaw/issues/12746) | 聊天输入框在重连后不恢复焦点 | open | — |

**Assessment:** Three S1 bugs represent genuine workflow blockers. The OpenRouter image-attachments bug (#12774) already has a fix PR (#12780) in review. The Lark/Feishu quickstart bug (#12773) and the gateway liveness-probe issue (#12766) lack fix PRs and should receive maintainer attention urgently—particularly #12766 which causes production daemon restarts during MCP outages.
**评估：** 三个 S1 bug 代表了真实的工作流阻塞点。OpenRouter 图片附件 bug（#12774）已有修复 PR（#12780）在审。Lark/Feishu quickstart bug（#12773）和网关存活探针问题（#12766）缺少修复 PR，应紧急引起维护者关注——尤其是 #12766，它会导致 MCP 中断期间生产环境守护进程重启。

## 6. Feature Requests & Roadmap Signals
## 6. 功能请求与路线图信号

Notable feature requests from today:
今日值得注意的功能请求：

| Issue | Title | Severity | Likelihood of Near-Term Inclusion |
|---|---|---|---|
| [#12772](https://github.com/zeroclaw-labs/zeroclaw/issues/12772) | Support excluding individual MCP tools inside `mcp_bundles` | **S0** (data loss/security risk) | **High** — S0 severity flags it for immediate attention |
| [#12765](https://github.com/zeroclaw-labs/zeroclaw/issues/12765) | Add a Buzz (buzz.xyz) channel (free open-source Slack alternative) | enhancement | **Medium** — aligned with existing channel architecture |
| [#12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459) | Enable browser voice for OIDC sessions | docs (needs-author-action) | **Medium** — PR exists, awaiting author |
| [#12264](https://github.com/zeroclaw-labs/zeroclaw/pull/12264) | Add LLMTR chat-completions gateway | provider | **Medium** — PR in review |

| Issue | 标题 | 严重程度 | 近期纳入可能性 |
|---|---|---|---|
| [#12772](https://github.com/zeroclaw-labs/zeroclaw/issues/12772) | 支持在 `mcp_bundles` 内排除单个 MCP 工具 | **S0**（数据丢失/安全风险） | **高** — S0 严重程度使其获得即时关注 |
| [#12765](https://github.com/zeroclaw-labs/zeroclaw/issues/12765) | 新增 Buzz（buzz.xyz）频道（免费开源 Slack 替代） | 增强功能 | **中** — 与现有频道架构对齐 |
| [#12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459) | 为 OIDC 会话启用浏览器语音 | 文档（需要作者操作） | **中** — PR 已存在，等待作者处理 |
| [#12264](https://github.com/zeroclaw-labs/zeroclaw/pull/12264) | 新增 LLMTR chat-completions 网关 | provider | **中** — PR 在审 |

**Roadmap signals:** The convergence of the macOS `computer_use` tool (#12776), desktop protocol tracker (#11015), and the OpenRouter image delivery work suggests computer-use and multi-modal tool result handling are high-priority focus areas for the next release cycle.
**路线图信号：** macOS `computer_use` 工具（#12776）、桌面协议追踪器（#11015）和 OpenRouter 图片传递工作的交汇表明，computer-use 和多模态工具结果处理是下一版本周期的重点关注领域。

## 7. User Feedback Summary
## 7. 用户反馈摘要

Based on issue and PR activity, the following user pain points emerge:
基于 issue 和 PR 活动，以下用户痛点浮现：

- **Provider reliability:** OpenRouter's tool-result image handling is broken (#12774), and the Gemini provider migration is causing confusion as Google sunsets legacy OAuth paths (#12669).
- **Provider 可靠性：** OpenRouter 的工具结果图片处理出现故障（#12774），同时随着 Google 停用旧版 OAuth 路径，Gemma provider 迁移引发了混淆（#12669）。

- **MCP resilience in production:** Users deploying ZeroClaw in Kubernetes environments report daemon restarts triggered by liveness probes during transient MCP failures (#12766) and silent tool-loss without restart (#12767).
- **生产环境 MCP 弹性：** 在 Kubernetes 环境中部署 ZeroClaw 的用户报告，短暂 MCP 失败期间存活探针触发守护进程重启（#12766），以及静默失去工具而不重启（#12767）。

- **Onboarding friction:** The quickstart flow fails to collect Lark/Feishu credentials (#12773), blocking new channel setup.
- **入门体验摩擦：** quickstart 流程无法收集 Lark/Feishu 凭证（#12773），阻塞了新渠道的设置。

- **Web UX regressions:** Two focus-related bugs (#11658, #12746) create friction in conversational usage—minor individually but notable as a pattern.
- **Web UX 回归问题：** 两个与焦点相关的 bug（#11658、#12746）在会话使用中造成摩擦——单独看是小问题，但作为模式值得关注。

- **Fine-grained tool control:** Users want per-tool disabling within MCP bundles (#12772), citing data-loss/security-risk implications of exposing entire MCP servers.
- **细粒度工具控制：** 用户希望在 MCP bundles 内逐个禁用工具（#12772），因为暴露整个 MCP server 存在数据丢失/安全风险。

## 8. Backlog Watch
## 8. 待办事项关注

The following issues are open, long-standing, or at risk of going stale and may need maintainer attention:
以下 issue 处于开放状态、时间较长或面临过时风险，可能需要维护者关注：

| Issue | Age | Status | Notes |
|---|---|---|---|
| [#11005](https://github.com/zeroclaw-labs/zeroclaw/issues/11005) — Stable RPC denial reasons & localized selector denials | ~2 months | in-progress | Part of stage 3 of #8289; high risk, CLI/topic:identity-access |
| [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) — Desktop computer-use tracker | ~2 months | accepted | Large implementation batch; PR #12776 is the first slice |
| [#12062](https://github.com/zeroclaw-labs/zeroclaw/pull/12062) — Bounded RPC denial exception (docs) | ~1 month | needs-author-action | ADR proposal awaiting author |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) — Zerocode reopen sessions | ~1.5 months | needs-author-action | Large PR (#11727) stalled |
| [#12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459) — Browser voice for OIDC | ~2 weeks | needs-author-action | Large PR stalled |
| [#12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) — Codex subscription UI | 5 days | open | Depends on #12641; large (XL), likely next sprint candidate |

| Issue | 存续时间 | 状态 | 备注 |
|---|---|---|---|
| [#11005](https://github.com/zeroclaw-labs/zeroclaw/issues/11005) — 稳定 RPC 拒绝原因及本地化选择器拒绝 | 约 2 个月 | in-progress | 属于 #8289 第三阶段；高风险，CLI/topic:identity-access |
| [#11015](https://github.com/zeroclaw-labs/zeroclaw/issues/11015) — 桌面 computer-use 追踪器 | 约 2 个月 | accepted | 大型实现批次；PR #12776 是第一部分 |
| [#12062](https://github.com/zeroclaw-labs/zeroclaw/pull/12062) — 受限 RPC 拒绝异常（文档） | 约 1 个月 | needs-author-action | ADR 提案等待作者处理 |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) — Zerocode 重新打开会话 | 约 1.5 个月 | needs-author-action | 大型 PR（#11727）停滞 |
| [#12459](https://github.com/zeroclaw-labs/zeroclaw/pull/12459) — OIDC 浏览器语音 | 约 2 周 | needs-author-action | 大型 PR 停滞 |
| [#12691](https://github.com/zeroclaw-labs/zeroclaw/pull/12691) — Codex 订阅 UI | 5 天 | open | 依赖 #12641；大型（XL），可能是下个 sprint 的候选 |

**Recommendation:** The three `needs-author-action` PRs (#12062, #11727, #12459) should either be assigned a maintainer to shepherd or closed with a clear next-steps comment to avoid backlog noise.
**建议：** 三个 `needs-author-action` 的 PR（#12062、#11727、#12459）应指定维护者进行跟进，或关闭并给出明确的后续步骤说明，以避免待办清单噪音。

---

*Digest generated from zeroclaw-labs/zeroclaw GitHub data on 2026-11-28. All issue/PR links use the format `https://github.com/zeroclaw-labs/zeroclaw/[issue|PR]/<number>`.*
*本摘要根据 2026-11-28 的 zeroclaw-labs/zeroclaw GitHub 数据生成。所有 issue/PR 链接格式为 `https://github.com/zeroclaw-labs/zeroclaw/[issue|PR]/<number>`。*</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*