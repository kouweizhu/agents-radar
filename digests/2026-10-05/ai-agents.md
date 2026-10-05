# OpenClaw 生态日报 2026-10-05

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-10-05 01:11 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate this project digest into Simplified Chinese, maintaining all the Markdown structure, tables, links, numbers, code references, etc. They want technical Chinese that's natural for a developer newsletter.

Let me translate this carefully while preserving the exact structure:

1. Headings
2. Tables (including alignment rows)
3. Lists
4. Bold/italic
5. Links
6. Code spans and blocks
7. Numbers and dates
8. URLs and identifiers

I'll maintain:
- Issue/PR numbers (#42475, etc.)
- URLs
- Table structures
- All formatting

Let me translate section by section:</think>

# OpenClaw 项目简报 — 2026年10月5日

## 今日概览

OpenClaw 在2026年10月5日显示出极高的活跃度，过去24小时内有 **500 个 issue** 和 **500 个 pull request** 更新。项目今日无新版本发布。问题追踪显示存在显著的稳定性问题：多个 P0/P1 级 bug 影响消息投递、会话状态管理和渠道集成，同时会话组合、运行时重构和性能优化方面也有活跃的开发。社区参与度仍然很高，多个高评论数的讨论串表明，围绕内存管理、子进程处理和跨平台可靠性的痛点持续存在。

---

## 版本发布

今日无新版本发布。

---

## 项目进展

**近期合并/关闭的 PR（5个）：**

| PR | 标题 | 状态 |
|----|------|------|
| #165219 | fix: stuck publication error after worktree cleanup; compact Publish PR card | 已关闭 |
| #165228 | fix: reduce UI startup download for Talk settings | 已关闭 |
| #165231 | chore(ci): defer heavy PR jobs to later validation tiers | 已关闭 |
| #165237 | chore(ui): refresh control ui locales | 已关闭 |
| #144396 | fix(codex): permit session deletion of predecessor retired tombstones | 已关闭 |

**活跃开发亮点：**

- **#165235** — 恢复扩展稳定版上的隔离计划任务轮次，修复了 2026.8.35 版本用户的回归问题
- **#165238** — 在交接租约数据库缺失时处理更新恢复，解决 #164254
- **#165193** — 将每轮次原生会话补丁通过写入器路由以提升性能
- #165018 — 限制待处理入站 IRC 行长度以防止内存耗尽攻击

---

## 社区热点话题

**评论最活跃的 Issue：**

| Issue | 标题 | 评论数 | 链接 |
|-------|------|--------|------|
| #42475 | [功能] 在网关层面实现每个智能体的成本预算控制 | 25 | [查看](https://github.com/openclaw/openclaw/issues/42475) |
| #97616 | [Bug] OpenClaw 泄漏未回收的 hook/工具子进程，导致僵尸进程累积 | 17 | [查看](https://github.com/openclaw/openclaw/issues/97616) |
| #150635 | [Bug] 短期召回保留每晚逐出被召回的条目 | 17 | [查看](https://github.com/openclaw/openclaw/issues/150635) |
| #114612 | [Bug] SQLite 在 memory_index_chunks + memory_embedding_cache 中无限增长 | 16 | [查看](https://github.com/openclaw/openclaw/issues/114612) |
| #94228 | [Bug] Native Anthropic 路径：重放 thinking 块使工具线程卡死 | 15 | [查看](https://github.com/openclaw/openclaw/issues/94228) |

**分析 — 潜在需求：**

1. **成本控制**：Issue #42475 要求在网关层面实现每个智能体的预算控制，表明运维人员需要超越事后追踪的主动支出管理
2. **资源泄漏**：多个 issue（#97616、#114612）指出内存/进程管理缺陷导致生产环境随时间推移而退化
3. **多平台消息可靠性**：WhatsApp（#161976）、iMessage（#143632）、Signal（#143581）和 Telegram（#143278）都存在渠道特定的投递失败问题
4. **回归追踪**：多个 P1 issue 标记为从先前工作版本的回归，表明需要加强 CI 覆盖率

---

## Bug 与稳定性

**今日关键（P0）Bug：**

| Issue | 严重级别 | 影响范围 | 标题 | 修复 PR？ |
|-------|----------|----------|------|----------|
| #157415 | P0 | ux-release-blocker | Doctor --fix 拒绝外部安装的 acpx 和 codex 的会话后插件迁移 | — |
| #164396 | P0, crash-loop | ux-release-blocker | Openclaw 2026.9.8 在全新 Node 22 LTS + Windows 11 安装后拒绝连接本地网关 | — |
| #164422 | P0, crash-loop | ux-release-blocker | macOS 非 root 更新毒化启动器组，阻止回滚 | — |
| #164066 | P0 | ux-release-blocker | 2026.9.8 托管更新回滚：Doctor 激活拒绝 | — |
| #158390 | P0 | ux-release-blocker | plugin-captures 临时目录未 GC——磁盘无限填充 | — |
| #143334 | P0 | ux-release-blocker | 子智能体完成投递丢失将请求者停在 settle-yield | — |

**高优先级（P1）回归/行为 Bug：**

| Issue | 严重级别 | 影响范围 | 标题 |
|-------|----------|----------|------|
| #97616 | P1 | crash-loop | 泄漏未回收的 hook/工具子进程，僵尸进程累积 |
| #161379 | P1 | crash-loop | 网关永久固定 CPU 核心：预置模型目录刷新循环 |
| #163029 | P1 | crash-loop | 2026.9.7 仍在轮次中期重新加载外部插件（40–70秒卡顿） |
| #113434 | P1 | crash-loop | Codex sessions.reset 重用已退役会话 ID；目录扫描耗尽 RAM |
| #164972 | P1 | security | claude-cli 多智能体团队：可见性矩阵失效 |
| #162119 | P1 | security | 模型切换后 Codex 间歇性返回 403 所有者验证错误 |
| #142271 | P1 | security | CLI 后端的 cron agentTurn 在活动出口代理存在时无法执行 |

---

## 功能请求与路线图信号

**活跃的高参与度功能请求：**

| Issue | 优先级 | 标题 | 评论数 |
|-------|--------|------|--------|
| #42475 | P2 | 在网关层面实现每个智能体的成本预算控制 | 25 |
| #59149 | P2 | 每个智能体的 agentToAgent 和会话可见性作用域 | 6 |
| #95724 | P2 | 按源目录而非智能体索引内存 | 6 |
| #156632 | P2 | Swarm agents.run 的有界启动契约 | 6 |

**路线图信号：**

- **成本管理**（#42475）似乎是用户需求驱动的；鉴于25条评论，可能是近期实现的目标
- **内存去重**（#95724）针对多智能体工作区效率——对大规模部署具有战略意义
- **每个智能体的可见性作用域**（#59149）解决多租户/团队用例——企业级信号

---

## 用户反馈总结

**痛点（反复出现的主题）：**

1. **内存/磁盘耗尽**：用户报告 SQLite 无限增长（#114612）、未回收的僵尸进程（#97616）以及插件临时目录永不清理（#158390）——都会导致生产环境随时间退化
2. **渠道可靠性**：多个消息渠道（WhatsApp、iMessage、Signal、Telegram）出现消息丢失或投递失败，尤其在重启后
3. **更新/回滚失败**：多个用户报告托管更新失败并回滚，更新机制本身变得不稳定（#164422、#164066）
4. **跨平台差距**：Windows 计划任务配置无法无人值守运行（#143757）、Docker 沙盒中的智能体 cwd 不可用导致失败（#143980）、全新 Windows 安装后网关连接被拒绝（#164396）
5. **Claude-CLI 集成问题**：关于转录路径、MCP 桥接作用域和多智能体可见性的多个问题表明 CLI 后端路径存在粗糙之处

**满意度信号：**

- 会话发布改进（#165219）和 UI 优化（#165228、#165199）显示对用户反馈的响应性
- 会话路由性能工作（#165193、#165028）解决可扩展性担忧
- IRC 安全修复（#165018）主动解决拒绝服务向量

---

## 待处理事项关注

**需要维护者关注的长周期 Issue：**

| Issue | 时长 | 优先级 | 标题 | 状态 |
|-------|------|--------|------|------|
| #84037 | 约5个月 | P1 | 降低 Codex app-server 稳态 CPU 和辅助进程开销 | OPEN，需要维护者审查 |
| #138775 | 约1个月 | P2 | 内存搜索活锁 — 每次搜索触发完整重建索引 | OPEN |
| #139215 | 约1个月 | P1 | Cron 调度器自 2026.9.1 起静默丢弃计划滴答 | OPEN |
| #120422 | 约2个月 | P2 | 死信渠道入口事件不可恢复 | OPEN |
| #120385 | 约2个月 | P2 | 代码模式的工具目录对计划/轮询轮次不完整 | OPEN |

**等待审查的高优先级 PR：**

| PR | 标题 | 状态 |
|----|------|------|
| #165151 | refactor(sessions): compose pending input and collaboration (P7e, inactive) | 需要验证 |
| #164501 | feat: add versioned upgrade recipes | 需要验证，security-review-required |
| #156636 | fix(agents): context budget stays at Copilot synthetic 128k fallback | 需要验证 |
| #147886 | fix(feishu): accept the documented markdown table mode | 准备维护者审核 |

---

*简报基于 OpenClaw 仓库数据生成 — github.com/openclaw/openclaw*

---

## 横向生态对比

<think>The user wants me to translate this entire document into Simplified Chinese, following the specific rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure exactly
3. Keep all technical identifiers (project names, repository slugs, issue numbers, URLs, file paths, code, version numbers) in their original form
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this document carefully, maintaining the table structure and all formatting.</think>

# 跨项目对比报告：开源个人AI助手生态系统

## 1. 生态系统概览

个人AI助手和智能体框架领域正处于密集的工程开发阶段，所有五个监控仓库在过去24小时内合计更新了超过600个issue和600个pull request。虽然今日均未发布正式版本，但开发工作量大表明这些项目正处于积极迭代期而非维护模式。生态系统中呈现出明显的差异化：OpenClaw和ZeroClaw在处理企业级需求（多渠道消息、会话组合、成本控制），Hermes Agent专注于桌面客户端稳定性，QwenPaw关注容器部署稳定性，而IronClaw仅维持最低的依赖更新频率。所有项目共同面临的一个主题是构建可靠的长期运行智能体系统——内存管理、会话状态持久化、跨平台兼容性都作为反复出现的技术难题浮现。

---

## 2. 活跃度对比

| 项目 | Issue（24h） | 开启Issue | PR（24h） | 开启PR | Release（24h） | 活跃度 |
|---------|-------------|-----------|-----------|---------|----------------|---------------|
| **OpenClaw** | 500 | 349 | 500 | 314 | 0 | **极高** |
| **ZeroClaw** | 43 | 42 | 50 | 45 | 0 | **高** |
| **Hermes Agent** | 50 | 47 | 50 | 43 | 0 | **中-高** |
| **QwenPaw** | 12 | 11 | 8 | 7 | 0 | **中等** |
| **IronClaw** | 0 | 0 | 5 | 4 | 0 | **极低** |

**健康度评估：**

| 项目 | 严重Bug | 回归问题 | 合并率 | 备注 |
|---------|---------|----------|--------|-------|
| OpenClaw | 6个P0 | 多个 | 健康（约37%） | 高迭代速度，积极捕虫 |
| ZeroClaw | 2个S0 | 未标记 | 中等（约10%） | 聚焦v0.9.0稳定性 |
| Hermes Agent | 1个P1 | 1个回归 | 低（约14%） | 桌面客户端方向 |
| QwenPaw | 1个Critical | 未标记 | 低（约12%） | 内存问题突出 |
| IronClaw | 无 | 无 | 低（约20%） | 仅依赖维护工作 |

---

## 3. OpenClaw的定位

**相对竞品的优势：**

- **最高的开发迭代速度**：每日500个issue和500个PR更新，活动量超过所有竞品总和——反映出更大的贡献者群体或激进的迭代策略
- **丰富的多渠道支持**：唯一深入处理WhatsApp、iMessage、Signal和IRC渠道的项目，并针对各渠道分别进行缺陷跟踪，竞品仅支持较少的集成点
- **先进的会话架构**：PR #165217和#165193中的"会话组合"和"计算/分支路径"重构，表明其会话状态模型比竞品更加精细
- **成本治理聚焦**：网关级别的per-agent预算控制（#42475，25条评论）满足了其他项目尚未涉及的企业级需求

**技术路线差异：**

| 领域 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|------|----------|--------------|----------|---------|
| **运行时模型** | 状态化会话，支持组合 | 桌面优先，守护进程模式 | ACP协议驱动turn路径 | 容器优先 |
| **渠道多样性** | 4+消息平台 | 有限（Telegram、IRC） | 有限 | 有限 |
| **更新机制** | 托管git/ZIP替换，崩溃安全 | Electron自更新 | CLI驱动 | 控制台热重载 |
| **内存策略** | SQLite + recall召回 | 内存内+压缩 | ACP会话持久化 | 流缓冲 |
| **成本追踪** | per-agent预算 | 未暴露 | per对话（损坏） | 未暴露 |

**社区规模：** OpenClaw的issue/comment量（热门功能请求25条评论）表明其社区参与度高于ZeroClaw（热门功能请求9条评论）或Hermes Agent（热门Bug 13条评论）。IronClaw没有社区互动；QwenPaw的最高热度issue仅有6条评论。

---

## 4. 共同技术聚焦方向

**跨多项目涌现的需求：**

| 聚焦方向 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|------------|:--------:|:------------:|:--------:|:-------:|:--------:|
| **内存管理/泄漏防护** | ✅ | ✅ | | ✅ | |
| **会话状态持久化** | ✅ | ✅ | ✅ | | |
| **更新/回滚可靠性** | ✅ | ✅ | | | |
| **跨平台（Windows/macOS/Linux）** | ✅ | ✅ | ✅ | | |
| **多供应商降级** | | ✅ | | ✅ | |
| **成本/支出治理** | ✅ | | | | |
| **插件/模块隔离** | | | | ✅ | |
| **CLI审批/溯源** | | | ✅ | | |

**具体共同需求：**

1. **内存耗尽处理**：OpenClaw有issue #114612（SQLite增长）和#97616（僵尸进程）；QwenPaw有#7722（三条内存路径）；Hermes Agent有#84037（CPU/进程开销）
2. **更新机制崩溃**：OpenClaw的Linux更新在文件替换时崩溃（#132670）；Hermes Agent的Windows更新器导致网关失联（#132338）；ZeroClaw追踪v0.8.6发布修复
3. **跨平台shell执行**：OpenClaw的SSH远程配置处理回归（#88994）；ZeroClaw的macOS Seatbelt忽略配置的root（#10536）；QwenPaw的Android/Termux快速入门失败（#11525）

---

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw | IronClaw |
|-----------|----------|--------------|----------|---------|----------|
| **主要目标用户** | 企业团队，多智能体部署 | 个人桌面高级用户 | 在地运行的DevOps/sre团队 | 容器化部署运维人员 | 极简——仅依赖维护 |
| **核心价值主张** | 多渠道智能体通信、会话组合 | 原生桌面AI助手体验 | 本地优先智能体+ACP协议 | 容器原生智能体运行时 | — |
| **差异化特性** | 网关级成本预算、会话分支、12模型降级链 | 桌面流式UI、自更新Electron应用 | Turn路径分类、运行时能力边界 | 插件沙箱、消息分页 | — |
| **技术差异化** | 状态化多智能体会话+协作 | 桌面客户端成熟度 | ACP协议、结构化turn中止 | 容器优先、插件隔离 | — |
| **发布节奏** | 快速（每日更新） | 中等 | 追踪v0.9.0 | 中等 | 无 |

---

## 6. 社区动能与成熟度

**活跃度分层：**

| 层级 | 项目 | 特征 |
|------|----------|-----------------|
| **快速迭代** | OpenClaw | 每日发布级质量工作，高Bug量，活跃回归追踪，500+更新/天 |
| **积极开发** | ZeroClaw, Hermes Agent | 规律提交，多功能并行推进，稳定但演进中 |
| **稳态运营** | QwenPaw | 中等活动，聚焦缺陷修复，路线图明确 |
| **最低维护** | IronClaw | 仅自动化依赖更新，无用户面开发 |

**成熟度信号：**

- **趋于稳定**：Hermes Agent（严重Bug减少，聚焦UX改进如重复渲染修复#132773）
- **快速迭代中**：OpenClaw（P0数量多但吞吐量也高；接近稳定态）
- **预发布阶段**：ZeroClaw（追踪v0.9.0，大量架构工作待完成）
- **不成熟/存在问题**：QwenPaw（关键内存问题未解决，插件隔离失效）

---

## 7. 智能体开发者的趋势信号

**从社区反馈提炼的行业趋势：**

1. **多渠道智能体部署正在成熟**：OpenClaw针对WhatsApp、iMessage Signal、Telegram、IRC的详细渠道缺陷跟踪表明生产级多渠道智能体已是常见用例——不再是实验性质。

2. **内存管理仍是最棘手的问题**：四个活跃项目都有未解决的内存问题。行业尚未就长期运行智能体的内存管理达成一致方案；SQLite、内存内、混合方案都存在问题。

3. **企业级需求正在涌现**：OpenClaw中的成本预算（#42475）、per-agent可见性作用域（#59149）、多智能体安全（#164972）表明企业级采用——这些需求在爱好者项目中很少出现。

4. **桌面客户端正在向Electron收敛**：Hermes Agent和OpenClaw都使用Electron构建桌面客户端。这表明该框架已在跨平台桌面智能体领域胜出。

5. **容器部署暴露新型故障模式**：QwenPaw在容器中遇到的PIP_TARGET泄漏、importlib失败、流缓冲问题代表了一类与传统桌面/服务器部署不同的全新问题。

6. **自更新系统本质上有风险**：多个项目（OpenClaw、Hermes Agent、ZeroClaw）的更新机制都存在缺陷——这表明自修改智能体系统需要更严格的CI/CD投入。

7. **会话状态损坏是普遍的反模式**：流错误时会话丢失（QwenPaw #8109）、压缩交接损坏（Hermes Agent #132934）、会话ID重用Bug（OpenClaw #113434）表明整个生态系统的会话管理都存在工程不足的问题。

**智能体开发者的价值提示：**

- **构建多渠道系统时务必研究OpenClaw的渠道专项问题**——故障模式有详细记录
- **若目标是容器，优先实现插件隔离**——QwenPaw的经验表明这是关键空白
- **桌面端采用Electron，但要投入更新崩溃安全**——Hermes Agent的工作模式可复制
- **面向企业，优先实现成本治理和多智能体访问控制**——OpenClaw社区明确提出了这些需求

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate this project digest from English to Chinese. I need to:
1. Translate all the text content
2. Keep the Markdown structure exactly as-is
3. Keep all URLs, code references, issue numbers, etc. unchanged
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through the document and translate it section by section while maintaining the exact structure.</think>

# Hermes Agent 项目摘要 — 2026-10-05

## 1. 今日概览

Hermes Agent 项目在 2026 年 10 月 5 日表现出 **高度活跃**，过去 24 小时内有 50 个 issue 和 50 个 pull request 更新。代码库正在围绕更新基础设施（多个 PR 解决崩溃安全和 Windows/Linux 兼容性问题）、桌面客户端稳定性（流式传输 bug、重复渲染）以及 WhatsApp 桥接的安全性加固进行大量开发。过去 24 小时未发布新版本。Issue 积压仍然较多，共有 47 个待处理项目，但 7 个已合并/关闭的 PR 表明开发吞吐量健康。有多个 P1/P2 级 bug 与会话状态损坏相关，可能需要优先关注。

## 2. 版本发布

过去 24 小时 **未发布新版本**。

---

## 3. 项目进展

以下 pull request **已合并或关闭**：

| PR | 标题 | 状态 |
|----|-----|--------|
| [#132773](https://github.com/NousResearch/hermes-agent/pull/132773) | Desktop no longer paints the same reply twice in one bubble after a housekeeping tool | CLOSED |
| [#132995](https://github.com/NousResearch/hermes-agent/pull/132995) | docs(image-routing): stop claiming the reverted provider-wide supports_vision probe | CLOSED |
| [#132970](https://github.com/NousResearch/hermes-agent/pull/132970) | [Bug][Desktop/SSH]: Bots roster does not discover new remote profiles after successful inventory until connection Test | CLOSED（重复） |
| [#132985](https://github.com/NousResearch/hermes-agent/pull/132985) | test | CLOSED（无效） |

**推进代码库的待合并 PR：**

- [#132361](https://github.com/NousResearch/hermes-agent/pull/132361): `fix(update)`: makes the git/ZIP swap a single crash-safe commit point
- [#132365](https://github.com/NousResearch/hermes-agent/pull/132365): Update marker v2 (owner liveness, no age ceiling) + checkout lock held by the whole update tree
- [#132338](https://github.com/NousResearch/hermes-agent/pull/132338): Windows updater no longer strands paused gateways
- [#133011](https://github.com/NousResearch/hermes-agent/pull/133011): WhatsApp bridge now requires per-session token（安全修复）
- [#133009](https://github.com/NousResearch/hermes-agent/pull/133009): Update vulnerable npm dependencies + upgrade Electron to 43.7.7
- [#133007](https://github.com/NousResearch/hermes-agent/pull/133007): Bound encrypted-reasoning replay on proxy routes

---

## 4. 社区热点话题

**按评论数排序的最活跃 issue：**

| Issue | 标题 | 评论数 | 👍 |
|-------|-------|----------|-----|
| [#128468](https://github.com/NousResearch/hermes-agent/issues/128468) | Desktop transcript: duplicated message render + scroll jumping during streaming | 13 | 1 |
| [#125649](https://github.com/NousResearch/hermes-agent/issues/125649) | fix(kanban): dispatcher workers crash at birth with ModuleNotFoundError under managed Python runtime | 6 | 0 |
| [#102811](https://github.com/NousResearch/hermes-agent/issues/102811) | [RFC] Skills prompt in prompt_builder.py forces over-eager skill loading | 6 | 0 |
| [#125091](https://github.com/NousResearch/hermes-agent/issues/125091) | Desktop Bot Mode message_agent fails with "No module named 'ruamel'" | 5 | 0 |
| [#125654](https://github.com/NousResearch/hermes-agent/issues/125654) | Bot-to-bot delivery dies with "No module named 'ruamel'" | 5 | 0 |
| [#131711](https://github.com/NousResearch/hermes-agent/issues/131711) | fix(google-workspace): empty Gmail searches return non-JSON | 5 | 0 |
| [#88994](https://github.com/NousResearch/hermes-agent/issues/88994) | SSH remote profile broken when local profile name ≠ remote remoteProfile | 4 | 0 |

**分析：** 桌面流式传输/渲染 bug（#128468）引发最多社区讨论，表明用户对可见的 UI 问题感到沮丧。"ruamel" 模块错误（#125091、#125654）是一个反复出现的依赖解析问题，影响 Bot Mode 和机器人间通信——可能源于近期版本中 Python 运行时管理的变更。Skills 加载 RFC（#102811）表明开发者正在深入思考性能和上下文管理。

---

## 5. Bug 与稳定性

**P1（严重）Bug：**

| Issue | 标题 | 状态 |
|-------|-------|--------|
| [#132934](https://github.com/NousResearch/hermes-agent/issues/132934) | Compaction handoff republished as assistant reply, with paraphrased opener that defeats summary classification | OPEN |

**P2（高）Bug：**

| Issue | 标题 | 修复 PR？ |
|-------|-------|---------|
| [#128468](https://github.com/NousResearch/hermes-agent/issues/128468) | Desktop transcript: duplicated message render + scroll jumping during streaming | — |
| [#125649](https://github.com/NousResearch/hermes-agent/issues/125649) | kanban dispatcher workers crash with ModuleNotFoundError | — |
| [#88994](https://github.com/NousResearch/hermes-agent/issues/88994) | SSH remote profile broken (regression from 30299efa3) | — |
| [#132935](https://github.com/NousResearch/hermes-agent/issues/132935) | /model --provider openai-codex mid-session switch silently fails (403) | — |
| [#132998](https://github.com/NousResearch/hermes-agent/issues/132998) | `hermes prompt-size` fetches OpenRouter model list despite being offline | — |
| [#132999](https://github.com/NousResearch/hermes-agent/issues/132999) | Infinite WebSocket reconnect loop in ChatSidebar (100% CPU) | — |
| [#132670](https://github.com/NousResearch/hermes-agent/issues/132670) | Linux desktop app crashes with SIGTRAP during `hermes update` | — |

**关键观察：**
- 会话状态损坏问题突出（compaction handoff、WebSocket 循环、reasoning replay 被意外清除）
- Linux 上的更新机制遇到进程文件替换的竞态条件
- SSH profile 处理出现回归

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 优先级 |
|-------|-------|----------|
| [#102811](https://github.com/NousResearch/hermes-agent/issues/102811) | [RFC] Skills prompt forces over-eager skill loading | P2，需要决策 |
| [#100944](https://github.com/NousResearch/hermes-agent/issues/100944) | Kanban: deny worker create/link per profile while retaining lifecycle tools | P3，需要决策 |
| [#133010](https://github.com/NousResearch/hermes-agent/issues/133010) | Run browser_exec's Python harness inside Docker sandbox | P3 |
| [#115097](https://github.com/NousResearch/hermes-agent/issues/115097) | Plugin-owned inline-keyboard callbacks have no registration point | P3，需要决策 |
| [#132963](https://github.com/NousResearch/hermes-agent/issues/132963) | hermes config set cannot address named entries inside list-type config keys | P3 |

**路线图信号：** Skills 加载 RFC（#102811）和 kanban 能力控制（#100944）代表了可能影响下一个次版本架构的决策。browser_exec 的 Docker 沙箱功能（#133010）与近期 PR 中见到的安全边界加固方向一致。

---

## 7. 用户反馈摘要

**今日报告的痛点：**

1. **桌面 UI 异常**：用户在流式传输期间遇到消息重复渲染和滚动跳跃（#128468）——直接影响日常使用体验
2. **Python 运行时故障**：多个问题涉及托管 Python 运行时导致 kanban worker、bot mode 和 delivery runner 中出现模块未找到错误（#125649、#125091、#125654）
3. **更新流程脆弱**：Linux 在实时文件替换期间崩溃（#132670），Windows 更新器使网关处于不良状态（#132338）
4. **会话状态不稳定**：Compaction handoff 被暴露给用户，WebSocket 重连循环消耗 100% CPU，reasoning replay 被意外清除
5. **SSH profile 缓存**：新远程 profile 直到连接重试后才会出现（#132968）

**满意度指标：** Gmail 空搜索 issue（#131711）的关闭表明对工具契约不一致问题的响应能力。桌面重复渲染修复（#132773）的快速跟进展示了积极的维护态度。

---

## 8. 积压关注

**长期未答的重要 issue：**

| Issue | 标题 | 存在时间 | 状态 |
|-------|-------|-----|--------|
| [#72082](https://github.com/NousResearch/hermes-agent/issues/72082) | Background self-improvement review writes to skill library during read-only-scoped turns | 约 70 天 | OPEN |
| [#88994](https://github.com/NousResearch/hermes-agent/issues/88994) | SSH remote profile broken when local ≠ remote name | 约 48 天 | OPEN |
| [#89207](https://github.com/NousResearch/hermes-agent/issues/89207) | Truncated tool_call arguments silently replaced with {} | 约 48 天 | OPEN |
| [#73991](https://github.com/NousResearch/hermes-agent/pull/73991) | fix(cron): surface the script execution host and its isolation gap | 约 68 天 | OPEN（需要决策） |

**需要维护者关注的 issue：**
- #72082：安全/隔离问题，后台审查在只读范围内写入 skill 仓库
- #88994：特定提交后的回归，影响 SSH 功能
- #89207：工具调用中的静默数据损坏，影响会话记录
- #73991：被 cron 任务执行主机的产品决策阻塞

---

*数据来源：Hermes Agent 代码库 — 2026-10-05*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving all the formatting and technical terms.</think>

# IronClaw 项目简报 — 2026-10-05

**仓库地址：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日概览

2026年10月5日，IronClaw 仓库的活跃度持续保持在较低水平。过去24小时内没有 Issue 更新，仅有 5 个 Pull Request 有所活动——全部来自 dependabot 的自动化依赖更新。其中一个依赖 PR（#8078）已被关闭/合并，其余四个保持开放状态。没有发布新版本。今天的数据中没有显示任何用户驱动的功能开发或缺陷修复。项目目前处于稳定的维护状态。

---

## 2. 版本发布

过去24小时内没有发布新版本。当前数据快照中不包含最新的版本信息。

---

## 3. 项目进展

| PR | 状态 | 摘要 |
|---|---|---|
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | **已关闭** | 升级 tokio-ecosystem 组，包含 2 个更新（tower-http 0.7.0→0.7.1、tokio-tungstenite） |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | 开放 | 升级 tokio-ecosystem 组，包含 3 个更新（tokio-test、tower-http、tokio-tungstenite） |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | 开放 | 升级 everything-else 组，包含 31 个更新（thiserror、uuid、base64 等） |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | 开放 | 升级 actions 组，包含 8 个更新（claude-code-action、setup-node 等） |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 开放 | 升级 wasm 组，包含 4 个更新（wasmtime、wasmtime-wasi、wit-component、wit-parser） |

**评估：** 今天的全部进展都是常规的依赖维护工作。PR #8078 已成功合并，推进了项目的依赖时效性。

---

## 4. 社区热点话题

今天没有任何 Issue 或 Pull Request 包含来自社区成员的评论或互动。所有活跃的 PR 都是自动化 dependabot 更新，零用户参与。没有用户发起讨论或功能提案可供分析。

---

## 5. 缺陷与稳定性

过去24小时内没有提交或更新任何缺陷报告、崩溃日志或回归问题。

---

## 6. 功能请求与路线图信号

今天没有提交或讨论任何功能请求。当前数据中没有显示可能包含在即将发布版本中的内容信号。

---

## 7. 用户反馈摘要

过去24小时内没有记录任何用户反馈（Issue、评论或互动）。今天在平台上没有看到明显的用户参与活动。

---

## 8. 待办事项关注

今天的活动数据中没有标记任何长期未回复的 Issue 或过时的 Pull Request。待办队列看起来很干净，所有开放项都是来自自动化 dependabot 系统的依赖更新 PR。

---

*基于 2026-10-05 的 GitHub 数据生成*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this project digest into Chinese. I need to:
1. Translate all headings, body text, and table content
2. Keep all technical identifiers, URLs, issue numbers, code references, etc. as-is
3. Preserve the Markdown structure exactly
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate section by section:

## 1. Today's Overview

QwenPaw今日活跃度适中，过去24小时内有12个issue和8个pull request更新。项目暂无新版本。当前待办事项混合了稳定性问题（内存管理、插件隔离、会话处理）和功能开发（消息分页、可观测性）。已关闭1个issue（#8109），代表已解决的会话丢失问题；7个PR仍在积极开发中，表明团队持续投入控制台可靠性和插件基础设施的建设。

## 2. Releases

**今日无新版本。** 数据集中未提供最新版本信息，但issue引用表明v2.2.0、v2.2.1和v2.2.2b4版本正在流通。

## 3. Project Progress

表格翻译 - 将状态和摘要翻译成中文

## 4. Community Hot Topics

### Most Active Issues by Comments

按评论数最活跃的Issue

## 5. Bugs & Stability

翻译表格

## 6. Feature Requests & Roadmap Signals

## 7. User Feedback Summary

### Pain Points

### Use Cases Observed

## 8. Backlog Watch

### Issues Needing Maintainer Attention

### PRs Awaiting Review

Let me do this translation properly:</think>

# QwenPaw 项目简报 — 2026-10-05

## 1. 今日概览

QwenPaw 今日活跃度适中，过去 24 小时内有 12 个 issue 和 8 个 pull request 更新。项目暂无新版本。当前待办事项以稳定性缺陷（内存管理、插件隔离、会话处理）和功能开发（消息分页、可观测性）为主。1 个 issue (#8109) 已关闭，代表已解决的会话丢失问题；7 个 PR 仍在积极开发中，表明团队持续投入控制台可靠性和插件基础设施的建设。

---

## 2. 版本发布

**今日无新版本。** 数据集中未提供最新版本信息，但 issue 引用表明 v2.2.0、v2.2.1 和 v2.2.2b4 版本正在流通。

---

## 3. 项目进度

| PR | 状态 | 摘要 |
|----|--------|---------|
| [#8108](https://github.com/agentscope-ai/QwenPaw/pull/8108) | **OPEN** | **fix(console): make lazy-route loading retryable after chunk failures** — 为懒加载的 Console 页面添加重试逻辑，应对部署竞态、资源过期或瞬态网络问题导致的加载失败 |
| [#8107](https://github.com/agentscope-ai/QwenPaw/pull/8107) | **OPEN** | **fix(plugins): sanitize pip subprocess env and tolerate cache-invalidation failures** — 修复 `PIP_TARGET` 泄漏到 pip 隔离构建环境的问题，以及容器部署中 `importlib.invalidate_caches()` 失败的问题（对应 #8106） |
| [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) | **OPEN** | **fix(console): recover boot from failed entry loads with watchdog error surface** — 启动画面现在可以在入口 chunk 加载失败时（缓存过期、网络卡顿）显示错误状态和重载按钮；包含一次自动重载尝试 |
| [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | **OPEN** | **fix(providers): surface finish_reason length truncation in chat response metadata** — 使截断回答与完整回答可区分，当输出达到上限时能识别是截断还是正常完成 |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | **OPEN** | **feat(chats): add scroll-back message pagination** — 支持从 history.db 中检索已压缩出实时会话 JSON 的历史消息 |
| [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) | **OPEN** | **fix(providers): filter unrecognized kwargs before OpenAI completions.create()** — 防止中间件注入的自定义 kwargs（如 `streamIdleTimeoutMs`）导致 TypeError |
| [#7774](https://github.com/agentscope-ai/QwenPaw/pull/7774) | **OPEN** | **fix(hub): derive the startup provisioner allow-list from the build** — 使 `run_hub_app()` 与运行时服务 provisioner 对齐，而非使用硬编码值 |

**已关闭：**
- [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) — fix(console): reject conflicting chat payloads — 已合并/关闭

---

## 4. 社区热点话题

### 评论最活跃的 Issue

1. **[#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)** — 内存通过三条路径耗尽 — **6 条评论**
   - 严重程度：**紧急** — 识别出三条叠加的内存泄漏路径：无界流缓冲区、保活实例堆积、doom-loop 门控规避
   - 深层需求：长时间运行的容器部署场景下的生产稳定性

2. **[#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840)** — 插件共享宿主事件循环 — **5 条评论**
   - 严重程度：**高** — 任何插件中的同步 I/O 都会冻结整个实例约 40 秒
   - 深层需求：生产环境下的插件隔离和沙箱化

3. **[#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026)** — deepseek-v4-pro chat_template_kwargs TypeError — **3 条评论**
   - 严重程度：**中** — 自动注入的 `chat_template_kwargs` 未包装在 `extra_body` 中，导致 OpenAI SDK 报错

4. **[#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599)** — OpenCode Go "MissingSessionID" — **3 条评论**
   - 严重程度：**中** — 特定 provider 的 API 连接测试失败

---

## 5. 缺陷与稳定性

| Issue | 严重程度 | 描述 | 对应修复 PR？ |
|-------|----------|-------------|---------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | **紧急** | 内存耗尽（三条叠加路径），约 1MB/s 增长，服务挂起/OOM | 无 |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | **高** | 插件同步 I/O 冻结整个实例 | 无 |
| [#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105) | **高** | 工具审批按钮（批准/拒绝）都执行"拒绝"操作 | 无 |
| [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109) | **高** | 流错误导致完整会话丢失 — **已关闭** | — |
| [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | **中** | 控制台启动画面无重试，WebView2 缓存过期导致无法启动 | [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) |
| [#8106](https://github.com/agentscope-ai/QwenPaw/issues/8106) | **中** | 容器中插件安装失败（PIP_TARGET 泄漏、importlib 失败） | [#8107](https://github.com/agentscope-ai/QwenPaw/pull/8107) |
| [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | **中** | 内容检查误报被分类为 bad_request，无法重试，对话被终止 | 无 |
| [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) | **中** | 深度链接（`/chat/<id>`）在跨 agent 和同 agent 内均失败 | 无 |

**评估：** 两个紧急/高严重级别缺陷（#7722、#7840）暂无修复 PR，属于系统性架构问题。审批按钮缺陷（#8105）是影响核心功能的明显回归。控制台启动修复（#8102、#8108）正在 PR 流程中推进。

---

## 6. 功能需求与路线图信号

| Issue | 类型 | 描述 | 近期实现可能性 |
|-------|------|-------------|------------------------------------------|
| [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) | **功能（可观测性）** | 当守护进程静默回退到不同模型时通知用户 | **高** — 简单的可观测性增强，用户影响明确 |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | **功能（聊天）** | 消息倒序分页，支持已压缩聊天的历史检索 | **高** — 活跃 PR，解决真实 UX 痛点 |
| [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) | **缺陷/功能** | deepseek-v4-pro `chat_template_kwargs` 包装问题 | 中 — 需要修复，有变通方案 |
| [#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104) | **疑问** | OpenCode API 要求新的请求头 `x-opencode-session` 每个会话一个 | 待澄清 — 可能为 provider 端需求 |

**预测：** 模型回退通知（#8103）和消息分页（#7542）最有可能出现在下一版本中，因为它们针对明确的用户痛点且有明确的解决方案。

---

## 7. 用户反馈摘要

### 痛点

- **容器中的内存稳定性**：多位用户报告生产容器部署中内存耗尽（#7722），说明这不是边缘情况
- **插件隔离失效**：执行同步 I/O 的插件会冻结整个实例（#7840），用户无法安全安装第三方插件
- **工具审批功能失效**：审批 UI 对"批准"和"拒绝"两个操作都执行拒绝（#8105），阻断工作流自动化
- **流错误导致会话丢失**：流失败时用户丢失完整对话历史（#8109）— 高影响力的数据完整性问题
- **静默模型回退**：用户收到意外模型的回复却没有任何提示（#8103）

### 观察到的使用场景

- **DevOps 工作流** 触发内容检查误报（#7599, #8104）
- **OpenCode provider 集成**，特定请求头要求
- **多 provider 回退链**（跨 4 个 provider 的 12 模型回退）

---

## 8. 待办事项追踪

### 需要维护者关注的 Issue

| Issue | 存在时间 | 优先级 | 原因 |
|-------|-----|----------|--------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 约 3 周 | **紧急** | 内存耗尽影响生产；无修复 PR；多路径根因需架构评审 |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 约 2 周 | **高** | 插件隔离根本问题；需设计决策关于沙箱化 |

### 待审核的 PR

| PR | 作者 | 存在时间 | 状态 |
|----|--------|-----|--------|
| [#7774](https://github.com/agentscope-ai/QwenPaw/pull/7774) | wangjian124 | 约 3 周 | Under Review — 首次贡献者 |
| [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) | lumenfield | 约 3 周 | Under Review — 首次贡献者 |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | auwc | 约 1 个月 | Open — 大改动 (XXXL)，首次贡献者 |

**建议行动：** 优先审核 #7774 和 #7738（均已 Under Review 约 3 周）；#7722 和 #7840 鉴于生产影响需立即分类处理。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this project digest into Chinese, following the detailed rules provided. Let me analyze what needs to be done:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code references, issue/PR numbers verbatim
4. Keep project names, repository names, usernames, version tags, file paths in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, maintaining the structure:

**Today's Overview**
- High development activity → 高度开发活跃度
- 43 issues and 50 pull requests → 保持英文数字
- P0/P1 bugs → 保持英文
- Config::save() → 保持代码格式
- v0.8.6 release → 保持版本号

**Releases**
- No new releases → 没有新版本发布

**Project Progress**
- PRs Merged/Closed → 已合并/关闭的 PR
- CLI approval provenance → CLI 审批来源追溯
- Test determinism → 测试确定性

**Community Hot Topics**
- Most Active Issues → 最活跃的 Issue
- Hardening test infrastructure → 强化测试基础设施
- Local/LLM scenarios → 本地/LLM 场景

**Bugs & Stability**
- Critical & High-Priority Bugs → 关键和高优先级缺陷
- Data loss risk → 数据丢失风险
- Platform incompatibility → 平台兼容性

**Feature Requests & Roadmap Signals**
- Enhancement Issues → 增强功能 Issue
- Roadmap Signals → 路线图信号
- Local-first model optimization → 本地优先模型优化


- Gateway separation → 网关分离

I'll continue the translation with a focus on maintaining technical precision while adapting to Chinese technical writing conventions. The key is to preserve the technical nuance while making it feel natural in Chinese technical documentation.

The next section reveals critical user pain points that could significantly impact project adoption. Data loss risks and platform compatibility issues are particularly concerning. These technical challenges could deter potential users and undermine confidence in the project's reliability.

Specific problems emerge around configuration saving, platform support, clipboard functionality, and session management. Each issue represents a potential barrier to seamless user experience, ranging from severe data integrity risks to platform-specific limitations that prevent core features from functioning correctly.</think>

# ZeroClaw 项目摘要 — 2026-10-05

## 今日概览

ZeroClaw 今日表现出**高度开发活跃度**，过去 24 小时内共有 43 个 issue 和 50 个 pull request 更新。项目正在积极解决稳定性问题——本周提交了多个 P0/P1 级别的关键缺陷，包括 `Config::save()` 中的一个严重数据丢失 bug，该 bug 可能将填充好的配置文件替换为近乎空白的版本。有 5 个 PR 被合并/关闭，主要针对 v0.8.6 版本修复，包括 CLI 审批处理、提供商控制及测试确定性等方面。今日未发布新版本。

---

## 发布版本

*今日无新版本发布。*

---

## 项目进展

**今日已合并/关闭的 PR（5 个）：**

| PR | 标题 | 状态 |
|----|-------|--------|
| [#11521](https://github.com/zeroclaw-labs/zeroclaw/pull/11521) | docs(runtime): 记录核心团队对组合异常的审批 | CLOSED |
| [#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518) | fix(approval): 保留 CLI 输入失败时的来源信息 | CLOSED |
| [#11335](https://github.com/zeroclaw-labs/zeroclaw/issues/11335) | Bug: 当终端不可用且 stdin 处于 EOF 时，CLI 审批提示错误地报告拒绝 | CLOSED |

**关键进展：**

- **CLI 审批来源追溯修复** — 运行时现在能正确报告审批因输入不可用（EOF、无终端）而失败，而非将其归因于用户拒绝。
- **测试确定性改进** — PR #11534 和 #11533 提高了 RPC/委托fixture和 bootstrap 警告捕获的并行测试可靠性。

---

## 社区热门话题

**按评论数排序的最活跃 Issue：**

| Issue | 标题 | 评论数 | 👍 |
|-------|-------|----------|-----|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | [任务]：在并行运行时门控下强化运行时编写的可执行测试fixture | 14 | 0 |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | [功能]：定义紧凑的 local_small 运行时配置和提示预算合约 | 9 | 2 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | [追踪]：Runtime 和 Gateway 交付 - v0.8.6 和 v0.9.0 | 6 | 0 |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | [Bug]：Config::save() 可能将用户填充的 config.toml 替换为近乎空白的文件 | 5 | 0 |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | [Bug]：SQLite 会话后端重写每条消息的 created_at | 4 | 0 |

**分析：** 参与度最高的 Issue #9965 涉及测试基础设施强化——这是一项技术债务。local_small 运行时配置请求（#5287）反映了社区对优化 ZeroClaw 本地/LLM 场景（减少提示开销）的强烈兴趣。追踪 Issue #7432 表明团队正在积极推进 v0.9.0 网关分离工作。

---

## 缺陷与稳定性

**关键和高优先级缺陷（P0/P1）：**

| Issue | 严重级别 | 标题 | 状态 |
|-------|----------|-------|--------|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | S0 - 数据丢失 | Config::save() 可能将填充好的 109KB 配置替换为 702 字节文件 | 进行中 |
| [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | S1 - 阻塞 | macOS Seatbelt 忽略配置的 shell 命令 allowed_roots | 进行中 |
| [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | S1 - 阻塞 | Android/Termux 上 quickstart 失败 | 待处理 |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | S1 - 阻塞 | "复制"一键功能不工作 | 进行中 |
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | S1 - 阻塞 | 持久化失败的 ACP 开启守护进程 RPC 路径 | 待处理 |

**可用修复 PR：**
- [#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518) — CLI 审批来源追溯（已合并）
- [#11468](https://github.com/zeroclaw-labs/zeroclaw/pull/11468) — Ollama/llama.cpp 思考控制（开放）
- [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527) — 拒绝未经验证的完整配置保存（开放，阻塞 #10495）

---

## 功能请求与路线图信号

**活跃的增强功能 Issue：**

| Issue | 优先级 | 标题 |
|-------|----------|-------|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | P2 | 定义紧凑的 local_small 运行时配置和提示预算合约 |
| [#8383](https://github.com/zeroclaw-labs/zeroclaw/issues/8383) | P2 | 在 ZeroCode Dashboard 显示活跃运行时上下文 |
| [#7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) | P2 | 基于工作量的本地/云端模型路由 |
| [#8527](https://github.com/zeroclaw-labs/zeroclaw/issues/8527) | P2 | 通过通道附件路由大型生成文件 |
| [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) | 增强功能 | 添加引导式 cron 调度编辑器（PR，候选人待定） |

**路线图信号：** 结合 #5287（local_small 配置）、#7951（基于工作量的路由）和 v0.9.0 追踪器（#7432），下一个发布周期将聚焦于**本地优先模型优化**和**网关分离**。cron 编辑器（#10698）似乎停滞，可能需要维护者关注。

---

## 用户反馈摘要

**已识别的实际痛点：**

1. **数据丢失风险** — Config::save() 无声地将 109KB 配置截断为 702 字节是严重的信任问题（#10495）
2. **平台兼容性** — Android/Termux 用户无法运行 quickstart（#11525）
3. **剪贴板故障** — ZeroCode 的复制功能在多平台上损坏（#11418、#11529）
4. **按会话成本追踪失效** — 成本记录使用守护进程生命周期的会话 ID，无法分离按会话的费用（#10700）
5. **记忆连续性缺失** — ACP/代码面板会话在回合之间丢失上下文（#10570）

**满意度信号：** 带有 2 个 👍 的 local_small 运行时配置请求（#5287）表明用户对更精简的本地运行有需求。该功能正在进行中，表明与用户需求一致。

---

## 积压关注

**需要维护者关注的 Issue：**

| Issue | 时长 | 优先级 | 标题 |
|-------|------|----------|-------|
| [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) | 约 75 天 | P2 | 可靠的提供商 API 密钥轮换选中但无法应用备用密钥 |
| [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) | 约 45 天 | P2 | 插件出口连接截止时间无法取消阻塞的 getaddrinfo |
| [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) | 约 28 天 | 增强功能 | 引导式 cron 调度编辑器（候选人待定，需要作者处理） |
| [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) | 约 25 天 | 增强功能 | 添加 Sendblue iMessage/SMS 通道（候选人待定，需要作者处理） |
| [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) | 约 35 天 | 增强功能 | 回合路径中止的类型化停止分类（需要作者处理） |

**注意：** 多个"候选人待定"的 PR（#10698、#10768）可能需要重新平衡或关闭。自 7 月以来一直开放 API 密钥轮换缺陷（#9190），尽管标记为 P2/高风险，但似乎没有进展。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*