# OpenClaw 生态日报 2026-09-19

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-19 00:33 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the project digest into Chinese, following the specific rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code spans, etc. verbatim
4. Keep project names, usernames, issue/PR references as-is
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure and using appropriate technical Chinese terminology.</think>

# OpenClaw 项目摘要 — 2026-09-19

## 今日概览

OpenClaw 今日活跃度较高，过去 24 小时内有 500 个 issue 和 500 个 PR 更新。项目正在修复多个关键稳定性问题，尤其是内存管理和事件循环阻塞方面。今日未发布新版本。仍有大量 P0/P1 问题待解决，包括大规模集群部署中的关键网关挂起问题和 Windows 更新失败。维护团队正在积极推进 SQLite、备份和服务修复方面的修复工作。

---

## 发布动态

今日无新版本发布。

---

## 项目进展

**PR 更新（过去 24h）：** 500 个 — 254 个 open，246 个已合并/关闭

| PR | 作者 | 描述 | 状态 |
|----|--------|-------------|--------|
| [#152302](https://github.com/openclaw/openclaw/pull/152302) | steipete | fix(sqlite): 空闲进程中恢复已完成的备份 | 待维护者审核 |
| [#152120](https://github.com/openclaw/openclaw/pull/152120) | steipete | fix: 更新期间修复过期的 Gateway 服务定义 | 待维护者审核 |
| [#152299](https://github.com/openclaw/openclaw/pull/152299) | steipete | fix(ui): 对话结束后被阻塞的消息队列保持阻塞状态 | 待维护者审核 |
| [#150426](https://github.com/openclaw/openclaw/pull/150426) | RomneyDa | fix(ui): 稳定工作树选择器的输入框 | 待维护者审核 |
| [#152287](https://github.com/openclaw/openclaw/pull/152287) | steipete | fix: 其他会话忙碌时仍投递 watcher 结果 | 待维护者审核 |
| [#150857](https://github.com/openclaw/openclaw/pull/150857) | Kimiyu-186 | feat: 在 Gateway 和远程工作空间之间传输附件 | 待维护者审核 |
| [#152247](https://github.com/openclaw/openclaw/pull/152247) | Kimiyu-186 | feat(memory): 从工作空间主机索引文件 | 待验证 |
| [#126924](https://github.com/openclaw/openclaw/pull/126924) | zeroaltitude | fix(subagents): 区分子 agent 等待超时与子进程退出 | 待验证 |

**重点进展：**
- SQLite 备份恢复能力得到改进
- 更新期间的服务定义修复现在支持 Discord/systemd/Windows 任务中的过期定义
- 修复了对话结束后 UI 消息队列无法解锁的问题
- 远程工作空间文件传输基础设施正在推进

---

## 社区热点

### 活跃度最高的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 回应 |
|-------|-------|----------|-----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄露未回收的 hook/tool 子进程，导致僵尸进程积累 | 30 | 👍 1 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 — RSS 从 350MB 增长到 15.5GB | 26 | 👍 1 |
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | 统合问题：WebUI 性能和稳定性 | 22 | — |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式不会在主会话中途注入消息 | 20 | 👍 4 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway 达到 ready 状态但从不服务；事件循环饥饿（632 个 agent 集群） | 19 | — |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite  transcript 清理阻塞 gateway 事件循环 | 17 | — |
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | Windows 更新候选快照失败；Gateway SQLite 检查超时 | 16 | — |

**分析：** 社区关注重点集中在：
1. **资源泄漏** — 子进程（僵尸）、内存（RSS 增长至 15.5GB）、SQLite WAL 文件（1.4–2.8GB）
2. **事件循环阻塞** — 大文件 I/O 操作导致 gateway 冻结
3. **大规模集群部署** — 632 个 agent 的场景暴露了架构瓶颈
4. **WebUI 稳定性** — 统合问题追踪多个 UI 性能问题

---

## 缺陷与稳定性

### 关键问题（P0）

| Issue | 标题 | 严重程度 | 修复 PR？ |
|-------|-------|----------|---------|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway 达到 ready 状态但从不服务；事件循环饥饿（632 个 agent 集群） | P0，崩溃循环 | — |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 增长到 1.4–2.8 GB；阻塞 gateway 启动（Windows） | P0，崩溃循环 | — |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | 自我升级死锁 & 回滚 Cron 失败 — v6.33 → v9.4 | P0，崩溃循环 | — |
| [#152252](https://github.com/openclaw/openclaw/issues/152252) | 配置写入未识别迁移密钥；旧版 Gateway 硬性失败（退出码 78） | P0，崩溃循环 | — |
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | Windows 更新失败；Gateway SQLite 检查超时 | P0，UX 发布阻塞 | — |

### 高优先级（P1）问题

| Issue | 标题 | 影响 |
|-------|-------|--------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏 → 僵尸进程积累 | 消息丢失，崩溃循环 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 从 350MB 增长到 15.5GB | 会话状态，崩溃循环 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式在主会话中途不注入消息 | 会话状态，消息丢失 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite transcript 清理阻塞事件循环 | 会话状态 |
| [#134993](https://github.com/openclaw/openclaw/issues/134993) | Gateway 在 2026.8.1 后因大型 skill 集群导致 CPU 满载 | 崩溃循环 |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏在 15-24 小时内再次发生（WSL2） | 数据丢失，崩溃循环 |

**值得注意的回归问题：** Issue [#148529](https://github.com/openclaw/openclaw/issues/148529)（现已关闭）揭示了 Gateway 启动时间回归：632 个 agent 集群约需 12 分钟（对比 2026.7.1-2 版本的约 2 秒）。

---

## 功能请求与路线图信号

| Issue | 请求 | 优先级 | 信号 |
|-------|---------|------|---------|
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 完全动态的模型发现（OpenRouter 及更多） | P3 | 👍 3 |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) | 添加 maxTurns/maxToolCalls 配置选项 | P2 | 👍 1 |
| [#9637](https://github.com/openclaw/openclaw/issues/9637) | 无障碍：TUI 中禁用 emoji/unicode | P2 | — |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | 上下文长度超限时触发模型回退 | P2 | — |
| [#7406](https://github.com/openclaw/openclaw/issues/7406) | Telegram 会话下拉菜单中显示人类可读的主题名称 | P2 | 👍 1 |

**路线图指标：**
- 远程/配对节点的内存和工作空间文件处理正在积极开发中（PR #152247、#150857、#150734）
- 文件传输插件基础设施正在推进
- 模型发现和回退改进仍为请求功能

---

## 用户反馈摘要

**痛点：**
1. **内存耗尽** — 用户报告 RSS 从 350MB 增长到 15.5GB，导致 OOM 杀死
2. **启动回归** — 大规模集群（600+ agents）启动需 12 分钟，而之前仅需 2 秒
3. **Windows 不稳定** — 更新失败、SQLite 超时、计划任务配置问题
4. **消息丢失** — Steer 模式、被打断的回合、子 agent 完成消息丢失
5. **无限增长** — SQLite WAL 文件、provider-payload.jsonl、cache-trace.jsonl 无轮转机制

**满意度信号：**
- 维护者对关键问题响应积极
- 性能优化 PR 聚焦于减少分配和提高定时器效率
- UI 修复解决用户工作流问题

---

## 待处理事项

### 长期未回复的重要 Issue

| Issue | 标题 | 时长 | 状态 |
|-------|-------|-----|--------|
| [#85103](https://github.com/openclaw/openclaw/issues/85103) | 模型回退链在提供商配额耗尽时未触发 | 约 4 个月 | 停滞，需要产品决策 |
| [#75380](https://github.com/openclaw/openclaw/issues/75380) | provider-payload.jsonl 和 cache-trace.jsonl 无限增长 | 约 4.5 个月 | 需要维护者审核 |
| [#77886](https://github.com/openclaw/openclaw/issues/77886) | 添加受保护配置更改的所有者审批流程 | 约 4.5 个月 | 停滞，需要产品决策 |
| [#84610](https://github.com/openclaw/openclaw/issues/84610) | Gateway 在 WSL2 中每约 90 秒以 SIGTERM 循环 | 约 4 个月 | 停滞，需要复现 |

**需要维护者关注：**
- SQLite 损坏调查（Windows/WSL2 多起报告）
- 大规模集群事件循环饥饿根本原因
- 上下文长度超限时模型回退（#9986）— 影响 KIMI K2.6 用户

---

*基于 OpenClaw GitHub 数据生成 — 2026-09-19*

---

## 横向生态对比

<think>The user wants me to translate this cross-project ecosystem report into Simplified Chinese. I need to:

1. Translate all the content into Simplified Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Keep all technical terms, project names, PR/issue numbers, URLs, code references as-is
4. Use natural technical Chinese register (like a Chinese developer newsletter)

Let me go through and translate section by section:

---

# 跨项目生态系统报告 — 2026-09-19

## 1. 生态系统概览

2026年9月19日，个人AI助手和Agent开源领域仍然高度碎片化，但技术上已相当成熟。四大项目——OpenClaw、Hermes Agent、IronClaw和QwenPaw——代表了不同的架构理念：一些注重多profile企业级部署，另一些关注开发者可扩展性，还有些强调轻量级CLI优先体验。贯穿所有项目的共同主题包括**安全加固**（授权、提示词注入）、**规模化稳定性**（事件循环、内存管理、SQLite）以及**运行时可扩展性**（插件、动态发现）。社区正在热烈讨论基本设计问题：profile多路复用、提供商原生参数映射以及多租户架构。

## 2. 活动对比

| 项目 | Issues更新 (24h) | PRs更新 (24h) | Releases (24h) | 主要健康指标 |
|---------|---------------------|-------------------|---------------|---------------------------|
| **OpenClaw** | 500 | 500 | 0 | 多项P0/P1 bug；内存泄漏；回归问题；社区活跃度高 |
| **Hermes Agent** | 50 | 50 | 0 | 安全漏洞(#113270)；授权泄漏；部分积压 |


| **IronClaw** | 1 | 2 | 0 | 稳定；问题极少；小团队专注开发 |
| **QwenPaw** | 24 | 50 | 1 (v2.2.2-beta.1) | 安全与稳定性bug正在处理；发布节奏活跃 |

**健康评分（推断）：**
- **OpenClaw**: 6/10 — 高量但多关键bug；正在积极修复
- **Hermes Agent**: 7/10 — 安全问题已标记但可控
- **IronClaw**: 9/10 — 静

默但稳定
- **QwenPaw**: 7/10 — 活跃发布周期；多个修复进行中

OpenClaw凭借500条issue/PR的规模处于**生产成熟阶段**，其7+关键bug数量反映了这一规模带来的复杂性。

跨项目对比显示，OpenClaw在**社区规模**上占据主导地位，拥有最丰富的功能集，发布频率最高，且面向企业级应用。Hermes Agent则保持了较大的社区活跃度moderate_release_velocity。IronClaw社区规模较小，主要专注于extensions和OAuth的集成，而QwenPaw提供了丰富的功能支持和高频率的发布节奏，定位更偏向创作者和最终用户。

在技术实现上，OpenClaw采用单体gateway加SQLite架构来支撑大规模部署，Hermes Agent则通过profile/instance分离来处理安全和授权边界问题，IronClaw追求轻量级的extension模型，QwenPaw则强调console优先的scroll聚焦体验。OpenClaw的500条issue/PR数据表明它是一个**生产级别**的项目

，同时伴随着相应的复杂性。

安全方面存在明显的共识，所有四个项目都标记了安全相关问题（prompt injection、authorization leaks、skill deletion），这预示着社区和企业用户对沙箱、来源追踪和fail-closed审批机制的需求会不断增长。多租户功能正在成为关键战场，Hermes和QwenPaw都在积极开发profile multiplexing/multi-tenant功能，这反映出市场正朝着团队部署的方向发展。

运行时可扩展性方面，#8850(ZeroClaw)和#4853(skill discovery)等特性表明动态插件加载正成为主流需求，静态构建模式正在被淘汰。内存和SQLite问题在OpenClaw(15.5GB RSS增长)和QwenPaw(无限制base64累积)中都很普遍，说明大规模场景下的状态管理仍是待解决的难题。IronClaw的thinking/effort控制和OpenClaw的多模型支持表明LLM提供商的选择正在变成基础功能。

对于企业级应用，OpenClaw的fleet功能最成熟但有技术债务，Hermes Agent提供了更清晰的安全模型；IronClaw的extension API最干净，而QwenPaw的UX体验最佳。QwenPaw和Hermes Agent在积极改进，OpenClaw在应对问题，IronClaw则处于维护状态。</think>

# 跨项目生态系统报告 — 2026-09-19

---

## 1. 生态系统概览

2026年9月19日，个人AI助手和Agent开源领域仍然高度碎片化，但技术上已相当成熟。四大项目——OpenClaw、Hermes Agent、IronClaw和QwenPaw——代表了不同的架构理念：一些注重多profile企业级部署，另一些关注开发者可扩展性，还有些强调轻量级CLI优先体验。贯穿所有项目的共同主题包括**安全加固**（授权、提示词注入）、**规模化稳定性**（事件循环、内存管理、SQLite）以及**运行时可扩展性**（插件、动态发现）。社区正在热烈讨论基本设计问题：profile多路复用、提供商原生参数映射以及多租户架构。

---

## 2. 活动对比

| 项目 | Issues更新 (24h) | PRs更新 (24h) | Releases (24h) | 主要健康指标 |
|---------|---------------------|-------------------|---------------|---------------------------|
| **OpenClaw** | 500 | 500 | 0 | 多项P0/P1 bug；内存泄漏；回归问题；社区活跃度高 |
| **Hermes Agent** | 50 | 50 | 0 | 安全漏洞(#113270)；授权泄漏；部分积压 |
| **IronClaw** | 1 | 2 | 0 | 稳定；问题极少；小团队专注开发 |
| **QwenPaw** | 24 | 50 | 1 (v2.2.2-beta.1) | 安全与稳定性bug正在处理；发布节奏活跃 |

**健康评分（推断）：**

- **OpenClaw**: 6/10 — 高量但多关键bug；正在积极修复
- **Hermes Agent**: 7/10 — 安全问题已标记但可控
- **IronClaw**: 9/10 — 静默但稳定
- **QwenPaw**: 7/10 — 活跃发布周期；多个修复进行中

OpenClaw的500-issue/PR量级表明这是一个处于**生产规模化**状态的项目，对应其相应的复杂性。其7+关键bug数量正是这种规模化挑战的体现。

---

## 3. OpenClaw的定位

### 相对优势

| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw |
|-----------|----------|--------------|----------|---------|
| **社区规模** | 主导性 (500 issues/PRs) | 较大 (50) | 极小 (3) | 较大 (50 PRs) |
| **功能广度** | Gateway、WebUI、SQLite、插件 | Multi-profile、cron、desktop | 扩展、OAuth、LLM | Console、scroll、memory |
| **发布速度** | 高 (每日) | 中等 | 低 | 高 (beta releases) |
| **企业聚焦** | 规模化部署 (600+ agents) | Multi-profile/多租户 | 单profile扩展 | 创作者/终端用户 |

### 技术路径差异

- **OpenClaw** 采用单体gateway架构，深度依赖SQLite；面向大规模部署
- **Hermes Agent** 分离profile/cron/instance；关注安全与授权边界
- **IronClaw** 面向提供商无关的架构，基于扩展的OAuth；轻量且专注
- **QwenPaw** 强调UI/console体验，聚焦scroll和context管理；以创作者为导向

OpenClaw的500-issue/PR数据表明它是一个处于**生产规模化**状态的项目，对应其相应的复杂性。其7+关键bug数量正是规模化挑战的体现。

---

## 4. 共同技术关注点

| 需求 | OpenClaw | Hermes Agent | IronClaw | QwenPaw | 说明 |
|-------------|----------|--------------|----------|---------|-------|
| **安全加固** | ✅ | ✅ | — | ✅ | 提示词注入(#7859)、授权泄漏(#113270)、技能删除 |
| **内存/资源管理** | ✅ | ✅ | — | ✅ | RSS增长、SQLite WAL、产物缓存 |
| **提供商/LLM灵活性** | — | — | ✅ | ✅ | Thinking/effort控制(#7537)、多模型profile(#9809) |
| **插件/运行时可扩展性** | — | ✅ | ✅ | ✅ | 运行时插件(#8850)、技能发现(#4853) |
| **多租户/团队功能** | — | ✅ | — | ✅ | Profile多路复用(#109417)、Hub多租户(#7318) |
| **数据库可靠性** | ✅ | — | — | ✅ | SQLite损坏、WAL增长、备份恢复 |

**共识：** 整个生态系统正围绕**安全加固**和**资源管理**收敛，这些已成为基础门槛。插件/运行时可扩展性和多租户功能正在成为差异化竞争力。

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | IronClaw | QwenPaw |
|-----------|----------|--------------|----------|---------|
| **主要目标** | 企业级fleet (600+ agents) | 开发者、自托管 | 提供商、扩展 | 创作者、终端用户 |
| **架构** | 单体gateway + SQLite | Profile/instance分离 | 轻量扩展模型 | Console优先，scroll聚焦 |
| **独特优势** | Fleet管理、cron | Desktop集成、移动端 | LLM提供商抽象 | UI打磨、memory recall |
| **独特劣势** | 内存泄漏、启动回归 | 安全授权gap | 社区有限 | 插件不稳定 |

OpenClaw以**规模化**差异化（大规模fleet管理），Hermes以**生态广度**（desktop、移动端、cron），IronClaw以**提供商灵活性**，QwenPaw以**用户体验**（console、scroll、视频创作）。

---

## 6. 社区活力与成熟度

| 项目 | 活跃度层级 | 迭代速度 | 成熟阶段 |
|---------|---------------|------------------|----------------|
| **OpenClaw** | 极高 (500) | 快速每日 | 生产成熟化 |
| **Hermes Agent** | 高 (50) | 中等 | 功能加固期 |
| **QwenPaw** | 高 (50 PRs) | 快速beta发布 | 活跃开发期 |
| **IronClaw** | 低 (3) | 缓慢 | 稳定维护期 |

**解读：**

- **OpenClaw和QwenPaw** 正在快速迭代；预期发布频繁且伴随回归问题
- **Hermes Agent** 处于**稳定期** — 聚焦安全和积压清理
- **IronClaw** 处于**成熟低活跃** — 适合生产使用且变更极少

---

## 7. 趋势信号

### AI Agent开发者应关注

1. **安全是硬性要求** — 四个项目都标记了安全相关问题（提示词注入、授权泄漏、技能删除）。预期社区和企业用户将要求沙箱化、来源追踪以及fail-closed审批强制执行。

2. **多租户是下一片疆域** — 两个项目（Hermes、QwenPaw）正积极开发multi-tenant/multi-profile功能，这标志着市场正朝着团队部署方向演进。

3. **运行时可扩展性优于编译时** — 特性请求#8850(ZeroClaw)和#4853(技能发现)反映了动态插件加载的需求，静态构建正在被抛弃。

4. **内存和SQLite是普遍痛点** — OpenClaw的15.5GB RSS增长和QwenPaw的无界base64累积都表明，规模化下的状态管理仍未被解决。

5. **提供商抽象正在成为标配** — IronClaw的thinking/effort控制和OpenClaw的多模型支持表明，LLM提供商选择正在变成基础期望，而非差异化点。

### 战略启示

- **面向企业构建**：OpenClaw提供最成熟的fleet功能但带有技术债务；Hermes Agent提供更清晰的安全模型
- **面向开发者构建**：IronClaw提供最干净的扩展API；QwenPaw提供最佳UX
- **评估生态系统健康**：QwenPaw和Hermes Agent正在积极改进；OpenClaw正在救火；IronClaw在平稳运行

---

*跨项目分析基于GitHub数据 — 2026-09-19*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this English Hermes Agent project digest into Chinese while following the specific rules provided. Let me analyze what needs to be done:

1. **Output ONLY the translation** - no preamble, no explanation, no markdown fences around the whole output
2. **Preserve the Markdown structure exactly** - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. **Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim**
4. **Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers** in their original form
5. **Issue/PR references** like #12345 and their link text stay as-is
6. **Use natural technical Chinese** - the register of a Chinese developer newsletter, not literal word-for-word

Let me translate this carefully, maintaining the structure and using appropriate technical Chinese terminology:

Key terminology decisions:
- "Hermes Agent" → "Hermes Agent" (keep as-is)
- "PR" → "PR" (keep as-is)
- "issue" → "Issue" / "issue"
- "merged/closed" → "已合并/已关闭"
- "tracking issue" → "追踪 Issue"
- "hot topics" → "热门话题"
- "bugs & stability" → "Bug 与稳定性"
- "feature requests" → "功能请求"
- "roadmap signals" → "路线图信号"
- "pain points" → "痛点"
- "satisfaction signals" → "满意度信号"
- "backlog watch" → "待办关注"
- "P1", "P2", "P3" → keep as-is

Let me now translate section by section, being careful with the formatting:

---

# Hermes Agent 项目摘要 — 2026-09-19

## 1. 今日概览

Hermes Agent 项目今日保持高活跃度，过去 24 小时内有 50 个 Issue 和 50 个 PR 更新。

Issue 队列中 42 个待处理、8 个已关闭，PR 方面 49 个待处理、仅 1 个已合并/关闭——这表明团队正处于积极审查阶段，可能处于稳定期。今天标记了多个高优先级的安全性和稳定性问题，包括一个影响派生子 Hermes 的 Profile 作用域授权泄露漏洞。

社区对 Profile 复用的讨论很活跃，作为一个重大架构改进方向。

## 2. 发布

今日未发布新版本。项目上次发布信息未在数据中提供。

## 3. 项目进展

### 今日合并/关闭的 PR
- 过去 24 小时内

有 **1 个 PR 已合并/关闭**

### 今日推进的重要开放 PR

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#115510](https://github.com/NousResearch/hermes-agent/pull/115510) | kama-dev | plugin-catalog: 新增 session-ref（社区、桌面版）|
| [#115508](https://github.com/NousResearch/hermes-agent/pull/115508) | chelsealong | 功能(dashboard): 聊天中支持拖拽和粘贴非图片文件附件 |
| [#115509](https://github.com/NousResearch/hermes-agent/pull/115509) |

我看到几个关键的功能改进：session-ref 插件为桌面版带来社区支持，仪表板现在允许处理非图片文件，token 消耗在简单任务中得到优化。状态管理和 Windows 平台都有相应的 bug 修复，同时插件生态圈也在扩展，MCP 服务器的性能优化也在进行中。

接下来是用户反馈部分，涉及多个平台的稳定性问题：Windows 平台的更新经常被后台进程（比如搜狗云）阻挡，移动端存在 IME 输入问题，WAL 保护的触发频率很高导致缺乏恢复路径，技能索引的自动刷新探测也失败了。积极的方面是，Profile 复用作为简化多 Profile 部署的方案获得认可，仪表板的改进满足了实际使用需求。

最后是待办事项，其中卡顿_worker 死锁和矩阵邀请处理已经开放很久，安全问题需要立即处理。</think>

# Hermes Agent 项目摘要 — 2026-09-19

## 1. 今日概览

Hermes Agent 项目今日保持高活跃度，过去 24 小时内有 50 个 Issue 和 50 个 PR 更新。Issue 队列中 42 个待处理、8 个已关闭，PR 方面 49 个待处理、仅 1 个已合并/关闭——这表明团队正处于积极审查阶段，可能处于稳定期。今天标记了多个高优先级的安全性和稳定性问题，包括一个影响派生子 Hermes 的 Profile 作用域授权泄露漏洞。社区对 Profile 复用（profile multiplexing）的讨论很活跃，作为一个重大架构改进方向。

## 2. 发布

今日未发布新版本。项目上次发布信息未在数据中提供。

## 3. 项目进展

### 今日合并/关闭的 PR

- 过去 24 小时内有 **1 个 PR 已合并/关闭**

### 今日推进的重要开放 PR

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#115510](https://github.com/NousResearch/hermes-agent/pull/115510) | kama-dev | plugin-catalog: 新增 session-ref（社区、桌面版）|
| [#115508](https://github.com/NousResearch/hermes-agent/pull/115508) | chelsealong | 功能(dashboard): 聊天拖拽/粘贴支持非图片文件附件 |
| [#115509](https://github.com/NousResearch/hermes-agent/pull/115509) | JoaoMarinos44 | 修复(agent): 精简 setup 流程，降低简单配置任务的 token 消耗 |
| [#115500](https://github.com/NousResearch/hermes-agent/pull/115500) | whyyagswhy | 修复(state): 自动 lineage 归档保留开放的 live tip |
| [#115503](https://github.com/NousResearch/hermes-agent/pull/115503) | whyyagswhy | 修复(state): 回溯能看穿内存中的 user-merge（位于 history guard 之前）|
| [#115504](https://github.com/NousResearch/hermes-agent/pull/115504) | whyyagswhy | 修复(process): 写入 killed 回执前验证 tree 死亡 |
| [#115501](https://github.com/NousResearch/hermes-agent/pull/115501) | Driskol | 功能(hindsight): reflect 支持可选的 tag filter |
| [#115502](https://github.com/NousResearch/hermes-agent/pull/115502) | teknium1 | MCP tools/list_changed 风暴不再为每个通知触发一次刷新 |
| [#115495](https://github.com/NousResearch/hermes-agent/pull/115495) | sgustjd2 | 修复(windows): 通过计划任务实现更新后网关自愈重启 |

**主题：** 状态管理改进、Windows 平台修复、插件生态扩展、MCP 服务器性能优化。

## 4. 社区热门话题

按评论数排序，最活跃的讨论：

1. **[#109417](https://github.com/NousResearch/hermes-agent/issues/109417)** — 追踪：Profile 复用作为唯一的网关模式（11 条评论）  
   *重点：架构变更——让一个 `hermes gateway run` 服务 `profiles/` 下的所有 Profile*

2. **[#115061](https://github.com/NousResearch/hermes-agent/issues/115061)** — 工具调用 JSON 被截断/损坏且未修复；插件没有原生按钮回调（6 条评论）  
   *重点：低价模型（DeepSeek）导致 malformed tool_calls 的生产问题*

3. **[#107918](https://github.com/NousResearch/hermes-agent/issues/107918)** — Web Dashboard TUI 显示"Setup Required"，尽管已配置有效的自定义 provider（6 条评论，已关闭）  
   *重点：Docker 环境回归*

4. **[#76292](https://github.com/NousResearch/hermes-agent/issues/76292)** — 修复(matrix): 忽略针对其他用户的成员邀请（5 条评论）  
   *重点：Matrix 适配器错误处理桥接房间邀请*

5. **[#101445](https://github.com/NousResearch/hermes-agent/issues/101445)** — 发生 429 时展示可操作的速率限制提示（5 条评论）  
   *重点：免费层用户需要更好的速率限制错误提示*

**潜在需求：** Profile 架构演进、低价/低成本 LLM provider 的更好错误处理、桥接环境中 Matrix 机器人行为改进。

## 5. Bug 与稳定性

### P1 — 严重/紧急

| Issue | 组件 | 描述 | 修复 PR？|
|-------|-----------|-------------|---------|
| [#113270](https://github.com/NousResearch/hermes-agent/issues/113270) | cli, gateway, cron | **安全：** Profile 作用域的授权门控泄露到其他 Profile——派生的 `hermes` 子进程继承了父 Profile 的 Discord/Telegram/Slack/GATEWAY_ALLOW* 规则 | 无 |
| [#115475](https://github.com/NousResearch/hermes-agent/issues/115475) | gateway, telegram | **高：** 硬编码 `stream: True` 导致 DSML 工具调用标记泄露到 Telegram 聊天 | 无 |
| [#115311](https://github.com/NousResearch/hermes-agent/issues/115311) | cli | hermes update 成功后以 "Fleet restart incomplete" 退出 1 | 无 |
| [#115306](https://github.com/NousResearch/hermes-agent/issues/115306) | agent, gemini | Google AI Studio 的 Gemini 密钥（AQ.* 前缀）在最近提交后不再工作 | 无（已存在回退方案）|
| [#110054](https://github.com/NousResearch/hermes-agent/issues/110054) | cli, desktop | 疼痛点集群：deleted-WAL guard 触发频繁，本产品内无恢复路径（本周 4 条 Discord 讨论，13 个 Issue）| 无 |

### P2 — 高优先级

| Issue | 组件 | 描述 |
|-------|-----------|-------------|
| [#115061](https://github.com/NousResearch/hermes-agent/issues/115061) | agent | 工具调用 JSON 被截断/损坏且未修复 |
| [#101789](https://github.com/NousResearch/hermes-agent/issues/101789) | desktop, windows | Windows 桌面版更新在最终交换阶段失败——被第三方进程阻塞 |
| [#113245](https://github.com/NousResearch/hermes-agent/issues/113245) | desktop, browser | 回归：drive_preview 超时，无 GUI 窗口 |
| [#78888](https://github.com/NousResearch/hermes-agent/issues/78888) | tools, file | checkpoint git add 在 root 拥有的 node-compile-cache 上中止 |
| [#115342](https://github.com/NousResearch/hermes-agent/issues/115342) | tools, file | write_file 在进程 cwd 被删除时报告虚假的 `[Errno 2]` |

### 今日识别的回归

- **Issue #115366**: Skills 索引已过时（49.5 小时旧，降级状态）——自动化探测失败
- **Issue #115306**: Gemini API 密钥认证回归（回退到提交 `98f758ae7e` 作为临时方案）

## 6. 功能请求与路线图信号

### 活跃中的功能工作

| Issue/PR | 类型 | 描述 | 近期发布可能性 |
|----------|------|-------------|--------------------------------|
| [#109417](https://github.com/NousResearch/hermes-agent/issues/109417) | 功能 | Profile 复用作为默认网关模式 | 高——追踪 Issue 活跃中 |
| [#115510](https://github.com/NousResearch/hermes-agent/pull/115510) | 功能 | session-ref 插件（桌面版）| 高——PR 开放中 |
| [#115508](https://github.com/NousResearch/hermes-agent/pull/115508) | 功能 | Dashboard 非图片文件附件 | 高——PR 开放中 |
| [#115501](https://github.com/NousResearch/hermes-agent/pull/115501) | 功能 | hindsight reflect tag filter opt-in | 高——PR 开放中 |
| [#108798](https://github.com/NousResearch/hermes-agent/pull/108798) | 功能 | Hermes Talk 插件目录新增 | 中——PR 开放中 |

**路线图信号：** Profile 复用显然是下一发布周期的重大架构举措。插件生态持续扩展，新增 session-ref 和 Hermes Talk 集成。

## 7. 用户反馈摘要

### 表达的痛点

1. **Windows 平台不稳定**：多次报告更新失败（被搜狗云等第三方进程阻塞）、网关重启问题、自愈问题
2. **认证失败**：最近更新后 Google AI Studio 的 Gemini 密钥（"AQ." 前缀）停止工作；MiniMax provider 回归影响自定义 base_url 配置
3. **移动端体验**：Android 上 Dashboard 聊天存在 IME/组合输入问题——文字重复、退格键删除后回退
4. **状态恢复缺口**：deleted-WAL guard 频繁触发（本周已达 13 个 Issue），无本产品内恢复路径
5. **Skills 索引降级**：自动化新鲜度探测失败，影响 Skills Hub 功能

### 满意度信号

- Profile 复用作为简化多 Profile 部署的方案受到好评
- Dashboard 改进（非图片附件、session-ref 插件）解决了表达的使用需求
- Setup 流程的 token 消耗降低（60k-100k → 优化）表明对成本关切的响应

## 8. 待办关注

### 长期未答复的重要 Issue

| Issue | 时长 | 优先级 | 描述 |
|-------|-----|----------|-------------|
| [#42248](https://github.com/NousResearch/hermes-agent/issues/42248) | 约 3 个月 | P2 | Kanban workers 在使用自定义本地模型 provider 时在 __psynch_cvwait 死锁 |
| [#73085](https://github.com/NousResearch/hermes-agent/issues/73085) | 约 2 个月 | P2 | Dashboard 内嵌聊天运行在默认作用域，忽略预选的 Profile |
| [#69451](https://github.com/NousResearch/hermes-agent/issues/69451) | 约 2 个月 | P2 | 桌面版自定义端点忽略活动的 Profile（已关闭，可能需要验证）|
| [#76292](https://github.com/NousResearch/hermes-agent/issues/76292) | 约 7 周 | P3 | Matrix 忽略针对其他用户的成员邀请（PR #111170 存在）|

### 停滞的 PR / 需要维护者关注

| PR | 时长 | 描述 |
|----|-----|-------------|
| [#87258](https://github.com/NousResearch/hermes-agent/pull/87258) | 约 5 周 | 修复(matrix): 对协调的待处理邀请应用 inviter allowlist |
| [#109202](https://github.com/NousResearch/hermes-agent/pull/109202) | 约 1 周 | 修复(desktop): 禁用 AsyncDns 防止 SIGTRAP 崩溃 |

**建议行动：** Kanban worker 死锁问题（#42248）和 Matrix 邀请处理（#76292/#87258）已开放较久，可能需要优先处理。安全问题（#113270）鉴于 Profile 间授权泄露，需要立即关注。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate the project digest from English to Chinese. Let me analyze what I need to do:

1. Translate the content from English to Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep all technical terms, URLs, issue numbers, usernames, project names as-is
4. Use natural technical Chinese register - not literal word-for-word translation

Let me go through and translate while maintaining the structure:

**Title:** IronClaw Project Digest — 2026-09-19
→ 翻译：IronClaw 项目简报 — 2026-09-19

**Section 1: Today's Overview**
需要翻译成自然的技术中文

**Section 2: Releases**
→ 发布

**Section 3: Project Progress**
→ 项目进展

**Section 4: Community Hot Topics**
→ 社区热点话题

**Section 5: Bugs & Stability**
→ 缺陷与稳定性

**Section 6: Feature Requests & Roadmap Signals**
→ 功能请求与路线图信号

**Section 7: User Feedback Summary**
→ 用户反馈摘要

**Section 8: Backlog Watch**
→ 待办事项关注

Let me translate each section carefully while preserving the structure and format.</think>

# IronClaw 项目简报 — 2026-09-19

## 1. 今日概览

2026年9月19日，IronClaw 项目呈现温和态势。过去24小时内有 **1 个活跃 Issue** 和 **2 个待处理 Pull Request**。今日无代码合并，亦无新版本发布。工作重心仍集中在 LLM 集成增强以及基础设施稳定性修复上（尤其是扩展程序的 OAuth 配置处理和 Reborn 系统的 Profile 无感知存储）。整体健康状态稳定，未见严重缺陷报告。

---

## 2. 发布动态

过去24小时内 **无新版本**。

---

## 3. 项目进展

过去24小时内无 Pull Request 被合并或关闭。两条 PR 处于开放状态：

- **PR #8102** — *fix(extensions): resolve provider-instance readiness live, administrator configuration first*（henrypark133）—— 修复了当 OAuth 通过 Web UI 而非环境变量配置时，Gmail/Google Calendar 扩展无法激活的回归问题。

- **PR #7456** — *fix(reborn): make durable storage profile-agnostic*（henrypark133）—— 针对 Reborn 系统存储架构的大型跨域 PR，涉及 sandbox、CI、docs 及依赖项改造。

---

## 4. 社区热点话题

| 项目 | 类型 | 作者 | 动态 | 摘要 |
|------|------|------|------|------|
| [#7537](https://github.com/nearai/ironclaw/issues/7537) | Issue | serrrfirat | 2 条评论 | **feat(llm): generic per-request thinking/effort control** — 请求实现统一的请求级 thinking/effort 参数，映射至各提供商原生配置（如 DeepSeek 的 `chat_template_kwargs`）。触发场景是 DeepSeek V4 Flash（0731 checkpoint）的输出冗余问题，但方案设计为跨 LLM 提供商的通用实现。反映出用户对请求级模型行为精细控制的迫切需求。 |
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | PR | henrypark133 | 新增 | **fix(extensions): resolve provider-instance readiness live** — 修复了 Web UI 配置 Google OAuth 时，扩展激活失败但 OAuth 流程本身成功的配置异常。这是运维管理员的实际可用性阻塞问题。 |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | PR | henrypark133 | 更新中 | **fix(reborn): make durable storage profile-agnostic** — 重构 Reborn 存储架构，根目录改为 `IRONCLAW_REBORN_HOME`，并引入显式命名空间（`state/`、`system/`、`workspaces/` 等）及类型化安全封装。 |

**潜在需求分析：** 最活跃的讨论集中在 **LLM 提供商原生参数映射**（Issue #7537），表明用户渴望跨不同 LLM 后端获得统一的参数控制能力——这是多提供商 AI Agent 框架中的常见痛点。

---

## 5. 缺陷与稳定性

| 严重程度 | 项目 | 状态 | 修复可用？ |
|----------|------|------|------------|
| **中等** | PR #8102: 通过 Web UI 配置 OAuth 后 Gmail/Google Calendar 扩展无法激活 | 开放 | 否（PR 待审） |

**注：** 此回归问题影响管理员工作流。OAuth 流程正常完成，但激活时抛出 provider 就绪异常。今日未报告其他缺陷。

---

## 6. 功能请求与路线图信号

最值得关注的功能请求是 **Issue #7537** —— *通用请求级 thinking/effort 控制与提供商原生映射*。此增强功能将允许用户设置统一的 `thinking_level` 或 `effort` 参数，由各 LLM 适配器翻译为对应提供商的原生配置（如 DeepSeek 的 `chat_template_kwargs`）。鉴于请求的具体性以及提供商特定的触发场景（DeepSeek V4 Flash），该功能可能纳入下一版以 LLM 灵活性为核心的小版本更新。

---

## 7. 用户反馈摘要

- **痛点：** 通过 Web UI（而非环境变量）部署 IronClaw 并配置 Google OAuth 的用户无法激活 Gmail 或 Calendar 扩展——这阻碍了非运维管理员的生产环境使用。
- **用例：** 多提供商 LLM 部署需要统一的参数控制能力，能够映射至各提供商的原生设置，而不仅是固定的 API 参数。
- **满意度：** Reborn 存储 Profile 无感知重构（PR #7456）解决了已知的架构限制，预计会受到多环境管理用户的欢迎。

---

## 8. 待办事项关注

| 项目 | 存续时间 | 状态 | 备注 |
|------|----------|------|------|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | ~70 天 | 开放 | 大型跨域重构（XL 规模，中等风险）—— 需维护者关注 |
| [#7537](https://github.com/nearai/ironclaw/issues/7537) | ~38 天 | 开放 | 功能增强，2 条评论 —— 待定路线图纳入 |

以上两项已开放超过一个月，分别代表重要的功能开发或架构重构工作。优先推进 PR #7456 评审将释放 Reborn 存储架构阻塞，而 Issue #7537 明确传递了跨提供商 LLM 控制一致性的用户需求。

---

*简报结束 — 基于 IronClaw（nearai/ironclaw）2026-09-19 活动生成。*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. I need to:
1. Translate all the text content
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, code references, project names, etc. as-is
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me go through and translate this carefully while preserving the exact structure.</think>

# QwenPaw 项目简报 — 2026-09-19

## 1. 今日概览

QwenPaw 今日开发活跃，共更新 **24 个 issue** 和 **50 个 PR**。项目发布了 **v2.2.2-beta.1** 版本，带来了控制台和记忆功能的改进。社区参与度持续高涨，尤其是关于多租户 Hub 功能和安全性 bug 修复的讨论。开发重点放在稳定性改进上，多个 PR 正在处理事件循环隔离、提示词注入防护和工具结果处理等问题。

---

## 2. 版本发布

### v2.2.2-beta.1 (Beta)

**更新内容：**
| 功能 | 描述 | PR |
|------|------|-----|
| **控制台** | 优化分组聊天历史展示 | [#7665](https://github.com/agentscope-ai/QwenPaw/pull/7665) |
| **记忆** | 统一 ReMe 斜杠命令 | [#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444) |

**发布页面：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.1

---

## 3. 项目进展

### 今日合并/关闭的 PR（共 17 个）

**已交付的关键修复：**

| PR | 状态 | 描述 |
|----|------|------|
| [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) | OPEN | **修复(安全)：** 保护技能目录免受提示词注入删除攻击 (#7859) |
| [#7854](https://github.com/agentscope-ai/QwenPaw/pull/7854) | OPEN | **修复(驱动)：** 保留驱动重载期间的并发策略更新 (#7850) |
| [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842) | OPEN | **修复(插件)：** 隔离同步钩子并添加事件循环延迟监控 (#7840) |
| [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871) | OPEN | **修复(工具)：** 防止字面量标记绕过输出截断 |
| [#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) | OPEN | **修复(滚动)：** 保留中断请求在后续压缩时的状态 (#7836) |
| [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) | OPEN | **修复(控制台)：** 激活文件区域标签页时重新验证内容 (#7866) |
| [#7865](https://github.com/agentscope-ai/QwenPaw/pull/7865) | OPEN | **修复(控制台)：** 聊天流中途断开时的恢复机制 |
| [#7873](https://github.com/agentscope-ai/QwenPaw/pull/7873) | OPEN | **修复(滚动)：** 说明高级召回沙箱的局限性 |

**性能与架构优化：**

| PR | 描述 |
|----|------|
| [#7868](https://github.com/agentscope-ai/QwenPaw/pull/7868) | **性能(运行时)：** 在每请求构建热路径上缓存不可变产物 |
| [#7807](https://github.com/agentscope-ai/QwenPaw/pull/7807) | **修复(通道)：** 仅在启用时导入通道模块（减少启动卡顿） |
| [#7762](https://github.com/agentscope-ai/QwenPaw/pull/7762) | **修复(运行时)：** 每个工具结果只发送一次，而非按块发送 |
| [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) | **性能(驱动)：** 避免阻塞在过时的能力检查上 |

**新功能进行中：**

| PR | 描述 |
|----|------|
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | **功能(创作者)：** 通过 PawApp 委托视频创作 |
| [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875) | **文档(pawapp)：** 指定 Creator create-video 控制平面 |
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | **功能(供应商)：** 支持 Responses 提示词缓存 (GPT-5.6+) |

---

## 4. 社区热点

### 最活跃的讨论

| Issue | 类型 | 评论数 | 点赞 | 摘要 |
|-------|------|--------|------|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 讨论 | **30** | 👍 4 | **QwenPaw Hub 多租户版本** — 社区请求团队/多用户部署能力 |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | Bug | 4 | 0 | ToolResultPruner 跳过媒体块 (type="data")，导致 base64 无限累积 |
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | Bug (安全) | 4 | 0 | 工具结果系统提醒中存在持续性提示词注入，指导 Agent 删除所有技能 |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) | Bug | 4 | 0 | 控制台 SSE：裸 null payload 可能导致流卡死 |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | Bug | 4 | 0 | 插件同步 I/O 冻结整个实例 |

### 潜在需求分析

- **多租户 Hub** (#7318)：社区对团队部署需求强烈 — 推动 2.2.0 路线图
- **安全加固**：两个提示词注入问题 (#7859) 和技能目录保护表明安全关注度提升
- **插件隔离**：用户需要可靠的插件执行而不会导致主应用崩溃
- **滚动/上下文管理**：多个关于驱逐、召回和会话连续性的问题

---

## 5. Bug 与稳定性

### 报告的 Bug（按严重程度排序）

| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|------|---------|
| **高** | [#7859](https://github.com agentscope-ai/QwenPaw/issues/7859) — 工具结果系统提醒中的提示词注入 | OPEN | [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) |
| **高** | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) — 插件事件循环冻结 | OPEN | [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842) |
| **高** | [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) — 驱动重载时驱动卡片策略丢失 | OPEN | [#7854](https://github.com/agentscope-ai/QwenPaw/pull/7854) |
| **中** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) — ToolResultPruner 跳过媒体块 | OPEN | — |
| **中** | [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) — 文件区域标签页显示过期内容 | OPEN | [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) |
| **中** | [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) — qwenpaw-pet 破坏工具审批 | OPEN | — |
| **中** | [#7847](https://github.com/agentscope-ai/QwenPaw/issues/7847) — 字面量百分号文件名发送错误文件 | OPEN | — |
| **中** | [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) — ACP 关闭可能跳过会话清理 | OPEN | — |
| **低** | [#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) — session-sync 跳过孤立文件，导致数据库损坏 | OPEN | — |
| **低** | [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) — 桌面 UI 在后端就绪前加载 | OPEN | — |

---

## 6. 功能请求与路线图信号

### 活跃的功能请求

| Issue | 组件 | 描述 |
|-------|------|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **Hub/多租户** | QwenPaw Hub 多租户支持（计划在 2.2.0 实现） |
| [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | **定时任务** | Agent 类型定时任务应可选择指定模型 ✅ 已关闭 |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | **上下文管理** | Agent 自主上下文管理，平滑跨驱逐交接 |
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | **供应商** | 支持 OpenAI Responses API 提示词缓存 |

### 路线图信号

- **v2.2.x**：聚焦稳定性（多个修复中的 bug）、滚动改进和多租户 Hub 准备
- **提示词缓存** (#6668)：新增 PR 支持 GPT-5.6+
- **创作者视频委托** (#7874)：PawApp 视频创作工作流集成

---

## 7. 用户反馈摘要

### 识别的痛点

| Issue | 用户影响 |
|-------|----------|
| **上下文驱逐** | 用户运行长时间工具密集型任务时意外丢失请求上下文 (#7836, #7733) |
| **插件不稳定** | 同步插件操作冻结整个应用 (#7840) |
| **桌面启动时序** | UI 在后端就绪前渲染，显示空白面板 (#7841) |
| **滚动/召回限制** | 旧内核上高级 Python 召回不可用，缺乏明确用户提示 (#7838) |
| **文件处理 bug** | 百分号转义文件名导致错误文件发送 (#7847) |

### 正面信号

- 控制台聊天历史分组改进受到好评
- 记忆斜杠命令统一解决了一致性问题
- 性能优化（产物缓存、通道延迟导入）改善用户体验

---

## 8. 待办关注

### 需要维护者关注的 Issue

| Issue | 存在时长 | 状态 | 描述 |
|-------|----------|------|------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 约 24 天 | OPEN | Hub 多租户路线图 — 社区高度关注，需要优先处理 |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 约 6 天 | OPEN | Agent 自主上下文管理 — 基础性 UX 改进 |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | 约 12 天 | OPEN | OpenCode Go "MissingSessionID" — 阻塞用户模型使用 |
| [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | 约 14 天 | 已关闭 | 飞书流式折叠思考 — 已完成 |

### 长期运行的 PR

| PR | 存在时长 | 状态 | 描述 |
|----|----------|------|------|
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | 约 46 天 | OPEN | 提示词缓存支持 — 需要评审 |
| [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381) | 约 58 天 | OPEN | 驱动能力缓存 — 需要评审 |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 约 29 天 | OPEN | 防止注入上下文持久化 — 评审中 |

---

*基于 2026-09-19 的 GitHub 数据生成*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese. Let me go through the content and translate it while:

1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Keeping URLs, issue numbers, code references as-is
3. Using natural technical Chinese register
4. Not adding any preamble or explanation

Let me translate section by section:

"ZeroClaw Project Digest — 2026-09-19" → "ZeroClaw 项目动态 — 2026年9月19日"

"Today's Overview" → "今日概览"

"ZeroClaw shows **very high activity** today with 50 PRs and 13 issues updated in the last 24 hours. The project remains in a steady development phase with no new releases, but significant progress is visible across multiple fronts: security hardening, provider enhancements, RPC improvements, and documentation. Several high-priority bugs are in-flight, including p1-severity issues around image marker provenance and approval enforcement. The community is actively engaged with 8+ comment threads on key feature proposals."

→ "ZeroClaw 今日**活动量极高**，过去24小时内有50个PR和13个Issue更新。项目处于稳定开发阶段，暂无新版本发布，但在多个方面取得显著进展：安全加固、Provider增强、RPC改进和文档完善。有多个高优先级bug正在处理中，包括围绕图像标记来源验证和审批强制执行的p1级别问题。社区对关键功能提案积极参与，8+个评论线程正在讨论。"

"Releases" → "版本发布"

"No new releases today. The project is tracking toward v0.8.6 and v0.9.0 (see tracker [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432))."

→ "今日无新版本发布。

项目正在推进 v0.8.6 和 v0.9.0（见追踪器 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。"

"Project Progress" → "项目进展"

"Merged/Closed PRs (6 total)" → "已合并/关闭的 PR（共6个）"

"Advancing Features" → "推进中的功能特性"

Let me continue translating all the tables and content...

I'll maintain the technical Chinese register throughout, preserving all Markdown formatting, issue numbers, URLs, and code references exactly as they appear.</think>

# ZeroClaw 项目动态 — 2026年9月19日

## 今日概览

ZeroClaw 今日**活动量极高**，过去24小时内有50个PR和13个Issue更新。项目处于稳定开发阶段，暂无新版本发布，但在多个方面取得显著进展：安全加固、Provider增强、RPC改进和文档完善。有多个高优先级bug正在处理中，包括围绕图像标记来源验证和审批强制执行的p1级别问题。社区对关键功能提案积极参与，8+个评论线程正在讨论。

---

## 版本发布

今日无新版本发布。项目正在推进 v0.8.6 和 v0.9.0（见追踪器 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。

---

## 项目进展

### 已合并/关闭的 PR（6个）

| PR | 标题 | 状态 |
|----|------|------|
| [#10774](https://github.com/zeroclaw-labs/zeroclaw/pull/10774) | docs(skills): 修正配置和安全指南 | CLOSED |
| [#10809](https://github.com/zeroclaw-labs/zeroclaw/pull/10809) | fix(zerocode): 恢复 macOS Control 快捷键别名 | CLOSED |
| [#10831](https://github.com/zeroclaw-labs/zeroclaw/pull/10831) | docs(adr): 记录入站认证主体权威 | CLOSED |

*其他PR可能已被合并；仅展示标记为"CLOSED"的数据。*

### 推进中的功能特性

- **多模型 Provider 支持** — [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) 引入 `[providers.models.<family>.<alias>.models.<model_alias>]` 子表，支持单一凭证多模型托管（XL规模，高风险）
- **Telegram 群组被动上下文** — [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) 新增可选的 `passive_group_context` 配置
- **原子批量配置写入** — [#10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823) 新增 `config/set-many` RPC 方法；[#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824) 对条目进行配置路径选择器 gating
- **内部主体信封** — [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) 实现 RFC #6954（三个阶段中的第一阶段）
- **出口授权仪式** — [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) 为 plugin install/list 添加授权工作流
- **WhatsApp 密钥支持** — [#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084) 响应 WhatsApp 的密钥验证以完成设备配对

---

## 社区热点话题

| Issue/PR | 标题 | 评论数 | 状态 |
|----------|------|--------|------|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 功能：从 .well-known agent-skills 发现索引安装技能 | **8** | OPEN |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 将可选通道和工具从编译时特性标志迁移到运行时插件 | **4** | OPEN |
| [#9649](https://github.com/zeroclaw-labs/zeroclaw/issues/9649) | 测试(agent)：翻转奇偶行1为已测试的密封状态 | **3** | OPEN |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | [Bug]：预输出流失败跳过声明的非流式回退 | **3** | CLOSED |
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | [Bug]：工具结果文本中的图像标记被提升为附件但缺乏来源 | **3** | OPEN |

**分析：** 讨论最多的是 **`.well-known` 技能发现索引**（issue #4853），反映社区对标准化技能安装的强烈兴趣。运行时插件迁移（#8850）也引发讨论，表明用户对更轻量二进制文件和运行时扩展性的需求。

---

## 缺陷与稳定性

### P1 级别缺陷（严重/高危）

| Issue | 标题 | 修复 PR？ | 状态 |
|-------|------|----------|------|
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | 工具结果文本中的图像标记被提升为缺乏来源验证的附件 | — | OPEN |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | 受限子循环工具的 fail-closed 审批强制执行 | — | OPEN |
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | 缝隙清理器重写助手工具调用信封内的签名推理 | — | OPEN |

### P2 级别缺陷

| Issue | 标题 | 状态 |
|-------|------|------|
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | 预输出流失败跳过声明的非流式回退 | CLOSED |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 受限委托文件系统工具尊重目标工作区 | OPEN (PR) |

**注意：** 三个 P1 缺陷均涉及**安全和数据完整性**（图像来源验证、审批强制执行、推理签名完整性）。这些需要立即关注。

---

## 功能请求与路线图信号

| Issue | 标题 | 优先级 | 纳入下个版本的可能性 |
|-------|------|--------|------------------------|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 从 .well-known URI 安装技能 | p2 | 中 |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 将可选通道/工具迁移到运行时 WASM 插件 | p2 | 高 |
| [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | 向委托子代理转发会话身份 | — | 中 |
| [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) | 通过 /ws/chat 流转发工具结果负载 | — | 中 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 追踪器：运行时/网关交付 v0.8.6 和 v0.9.0 | p2 | **高**（版本目标） |

**预测：** 运行时插件架构（#8850）和 v0.8.6/v0.9.0 路线图项目（#7432）有望纳入下一个发布周期，考虑到其追踪器状态和持续的 PR 活动。

---

## 用户反馈摘要

- **正面信号：** 用户对 Provider 配置改进（#9809）、Telegram 群组增强（#10640）和治理文档（#10677）表现出兴趣
- **痛点：**
  - **安全问题突出** — 三个 P1 缺陷涉及安全（图像来源验证、审批强制执行、签名推理完整性）
  - **Provider 回退行为混乱** — issue #10736（现已关闭）凸显了非流式回退机制不清晰
  - **委托需要更好的上下文处理** — #10963 和 #10962 请求转发会话/工具结果
- **文档需求：** Astra API-key 和 Codex Provider 的设置文档（#10709，现已关闭）表明 Provider 文档存在缺口

---

## 待办事项关注

| 项目 | 标题 | 状态 | 关注点 |
|------|------|------|--------|
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | ADR 清单和已接受的 RFC 决策追踪器 | 进行中 | 长期追踪器；需要持续关注 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 运行时/网关交付 v0.8.6 和 v0.9.0 | 进行中 | 主要版本交付物待完成 |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 每个 Provider 配置文件支持多模型 | 需要作者处理 | XL 规模功能，可能需要更多审查资源 |
| [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) | 内部主体信封（RFC #6954，第1阶段） | 进行中 | 多阶段 RFC；依赖后续阶段 |
| [#10084](https://github.com/zeroclaw-labs/zeroclaw/pull/10084) | WhatsApp 密钥验证修复 | 进行中，高风险 | 安全敏感；需要仔细审查 |

这些项目代表了重大的开发投入，应优先安排维护者审查以防止瓶颈。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*