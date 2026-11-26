# OpenClaw 生态日报 2026-11-26

> Issues: 359 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-26 04:19 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all English text to Simplified Chinese
2. Preserve the exact Markdown structure
3. Keep URLs, project names, issue numbers, version tags, etc. in their original form
4. Use natural technical Chinese, not literal word-for-word translation

Let me translate section by section.
</think>


# OpenClaw 项目摘要 — 2026-11-26

---

## 1. 今日概览

OpenClaw 展现出极高的开发活跃度，过去 24 小时内共有 **500 个 PR 和 359 个 Issue 进行了更新**，表明代码库各部分均处于紧张开发状态。今日发布了两上版本——**v2026.11.10** 作为最新稳定版，以及 **v2026.10.34** 作为 LTS 等效的扩展稳定版网关发布版，内含关键安全与可靠性修复。项目当前正积极解决内存管理问题（多个不同组件均报告了内存泄漏）、更新系统稳定性以及会话状态完整性问题。社区参与度保持强劲，拥有 349 位贡献者和超过 7,600 个已合并 PR，但若干围绕内存泄漏和会话损坏的 P0 问题需要紧急处理。

---

## 2. 版本发布

### v2026.11.10 — 最新稳定版
- **提交数：** 8,309 | **合并 PR 数：** 7,671 | **贡献者：** 349
- 发布说明及变更日志见 [docs.openclaw.ai](https://docs.openclaw.ai/release)

### v2026.10.34 — 扩展稳定版（LTS 等效）
- **类型：** 仅网关 `extended-stable` 发布版
- **内容：** 基于 2026 年 10 月末版本的 OpenClaw，并包含：
  - 关键安全更新
  - 可靠性与性能修复
  - 新模型支持功能
- **建议：** 生产环境应考虑此版本以获得更好的稳定性；参见 [OpenClaw releases](https://github.com/openclaw/openclaw/releases)

---

## 3. 项目进展

### 已合并/已关闭的 PR（218 个总计）
今日推进的关键贡献：

| PR | 作者 | 优先级 | 描述 |
|----|------|--------|------|
| [#205728](https://github.com/openclaw/openclaw/pull/205728) | vincentkoc | P3 | 凭证刷新期间跳过未使用的模型行 |
| [#205687](https://github.com/openclaw/openclaw/pull/205687) | tideclaw-bot | P2 | 保持流式预检连接，停滞时附带原因失败 |
| [#205723](https://github.com/openclaw/openclaw/pull/205723) | brandon-julio-t | P2 | 防止大型 MCP 工具目录在会话启动时挂起网关 |
| [#201826](https://github.com/openclaw/openclaw/pull/201826) | Vaibhav2824 | P2 | 允许内存索引为大型 PostgreSQL 聊天历史完成处理 |

### 待审查的开放 PR（282 个总计）
等待合并的重要贡献：

| PR | 作者 | 优先级 | 聚焦领域 |
|----|------|--------|----------|
| [#205731](https://github.com/openclaw/openclaw/pull/205731) | roboclaw-bot | P1 | 支持 Antigravity 会话的断点安全恢复续接 |
| [#205743](https://github.com/openclaw/openclaw/pull/205743) | fuller-stack-dev | P1 | 防止 Doctor 在包更新期间重启网关 |
| [#205730](https://github.com/openclaw/openclaw/pull/205730) | wr-web | P1 | 配置发送后保持计划的会话轮次继续执行 |
| [#205726](https://github.com/openclaw/openclaw/pull/205726) | tideclaw-bot | P2 | 恢复经审查的 MEMORY.md 信任状态（修复 #204738） |
| [#204132](https://github.com/openclaw/openclaw/pull/204132) | etzelm | P2 | 根据模型大小自动选择 Agent Profile |
| [#204431](https://github.com/openclaw/openclaw/pull/204431) | roboclaw-bot | P2 | 让插件在聊天中解释 Provider 错误 |
| [#205740](https://github.com/openclaw/openclaw/pull/205740) | roboclaw-bot | P3 | 在单用户网关上隐藏人员快捷方式 |

---

## 4. 社区热点话题

### 评论最活跃的 Issue（按评论数排序）

**1. [#164294](https://github.com/openclaw/openclaw/issues/164294) — WAL 自动检查点永不完成**（44 条评论）
- **严重程度：** P2 | **评级：** 银贝
- 网关的 SQLite WAL 在 `state/openclaw.sqlite` 上自动检查点自启动以来被进程内读取器永久阻塞
- 已检查点 866 帧，日志帧仍剩余 17,091 帧；连续 17,000+ 次阻塞尝试
- **深层需求：** 数据库可靠性与存储膨胀防护

**2. [#91588](https://github.com/openclaw/openclaw/issues/91588) — 严重内存泄漏（RSS 350MB → 15.5GB）**（42 条评论）
- **严重程度：** P0 | **评级：** 金虾 | **影响：** 崩溃循环、OOM 杀死
- 网关进程在 2-3 天内从约 350 MB 增长到 15.5 GB，触发 OOM killer
- 导致 `launchd-handoff` 重启循环不断发生
- **深层需求：** 长时间运行部署的生产稳定性

**3. [#197083](https://github.com/openclaw/openclaw/issues/197083) — 安装后 Doctor WAL 验证失败**（40 条评论）
- **严重程度：** P0 | **评级：** 银贝 | **影响：** 用户体验 / 发布阻塞
- 托管 npm 升级（2026.11.1 → 2026.11.3）导致网关部分最终化，WAL 发布验证未完成
- 更新程序拒绝回滚；外部插件处于不一致状态
- **深层需求：** 可靠的更新回滚机制

**4. [#159662](https://github.com/openclaw/openclaw/issues/159662) — prepared-model-catalog Worker 内存泄漏**（28 条评论）
- **严重程度：** P1 | **影响：** 崩溃循环
- Worker 线程独立于工作负载、Provider 或插件，以每小时 4-5 GB 的速度泄漏
- 在空闲到轻度流量下，RSS 在 60-90 分钟内从约 2.5 GB 增长到 8-10 GB
- **深层需求：** 有资源边界的后台 Worker

**5. [#153426](https://github.com/openclaw/openclaw/issues/153426) — 策展内存根目录被静默排除**（25 条评论）
- **严重程度：** P0 | **评级：** 钻石龙虾 | **影响：** 会话状态、安全
- 一旦溯源棘轮标记 `MEMORY.md`/`USER.md` 为"不可信"，它们将被永久排除在引导注入之外
- 无诊断信息、无 CLI 恢复手段、无用户通知
- **深层需求：** 透明的安全边界与恢复路径

### 热门 PR（按关注度排序）
- **[#205726](https://github.com/openclaw/openclaw/pull/205726)** — MEMORY.md 信任恢复修复（关联 #204738、#203532、#153426）
- **[#205743](https://github.com/openclaw/openclaw/pull/205743)** — 防止包更新期间网关重启（P1）
- **[#204794](https://github.com/openclaw/openclaw/pull/204794)** — 更新期间保留可操作的运行历史（铂金寄居蟹评级）

---

## 5. Bug 与稳定性

### 严重级别（P0）— 需要立即处理

| Issue | 标题 | 严重程度 | 状态 | 修复 PR？ |
|-------|------|----------|------|-----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 网关内存泄漏（350MB→15.5GB） | P0 | 开放 | 无 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | MEMORY.md/USER.md 被静默排除 | P0 | 开放 | 无（PR #205726 待审） |
| [#158912](https://github.com/openclaw/openclaw/issues/158912) | MEMORY.md 在引导时未被注入 | P0 | 开放 | 无 |
| [#190563](https://github.com/openclaw/openclaw/issues/190563) | 无法恢复已暂停的 Codex 聊天 | P0 | 开放 | 无 |

### 高优先级（P1）— 崩溃/回归问题

| Issue | 标题 | 回归？ | 修复 PR？ |
|-------|------|--------|-----------|
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog Worker 泄漏（~4-5 GB/h） | 否 | 无 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | V8 堆外 RSS 失控 → OOM | 否 | 无 |
| [#181432](https://github.com/openclaw/openclaw/issues/181432) | 基线 RSS 过高（1.9 GB）+ SQLite 超时 | 是（2026.10.5） | 无 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 回复丢失 — "无活动工具授权快照" | 是（2026.9.4） | 无 |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | Codex Helper 完成无法恢复父会话 | 是（2026.10.10） | 无 |
| [#161379](https://github.com/openclaw/openclaw/issues/161379) | 网关永久固定 CPU 核心（目录刷新循环） | 是 | 无 |
| [#185085](https://github.com/openclaw/openclaw/issues/185085) | Exec 完成唤醒丢失（SESSION_DELIVERY_GENERATION_UNAVAILABLE） | 是 | 部分（稳定版未含修复） |

### 已合并/已关闭的重要 Bug 修复
- **[#205728](https://github.com/openclaw/openclaw/pull/205728)** — 凭证刷新期间跳过未使用的模型行
- **[#205723](https://github.com/openclaw/openclaw/pull/205723)** — 防止大型 MCP 工具目录挂起网关（取代 #199346）
- **[#182891](https://github.com/openclaw/openclaw/issues/182891)** — 提示缓存从未被复用（已关闭）

---

## 6. 功能需求与路线图信号

### 高影响力功能请求

**1. [#204775](https://github.com/openclaw/openclaw/issues/204775) — Prepared-Release 更新设计**
- **状态：** P2 | **评论数：** 18
- **范围：** 重新设计状态、所有权和计划相关的更新路径
- **路线图信号：** 更新系统大规模重构进行中；运维人员应预期 `openclaw update` 行为将发生重大变化

**2. [#103067](https://github.com/openclaw/openclaw/issues/103067) — 集中化聊天会话命名**
- **状态：** P2 | **评论数：** 12 | **评级：** 钻石龙虾
- 定义子 agent 会话生命周期和跨渠道持久化
- **路线图信号：** 会话管理整合已在规划中

**3. [#150238](https://github.com/openclaw/openclaw/issues/150238) — 技能工坊体验审查的上下文预算**
- **状态：** P2 | **评论数：** 14
- 在技能工坊中添加超大会话的跳过策略
- **路线图信号：** 针对长会话的上下文窗口管理

**4. [#56349](https://github.com/openclaw/openclaw/issues/56349) — 不可绕过的出站策略强制执行**
- **状态：** P2 | **涉及安全** | **评论数：** 9 | **评级：** 铂金寄居蟹
- 对所有出站消息提供发送前验证保证
- **路线图信号：** 多投递路径架构的安全加固

**5. [#204132](https://github.com/openclaw/openclaw/pull/204132) — 根据模型大小自动选择 Agent Profile**
- **状态：** PR 开放（P2）| **规模：** XL
- 基于模型上下文窗口的精简模式
- **路线图信号：** 按模型能力自动进行资源优化

**6. [#197803](https://github.com/openclaw/openclaw/pull/197803) — XingChen-AGI Provider 插件**
- **状态：** PR 开放（P3）
- 新 Provider：Xing4.1-Preview（中国电信人工智能科技有限公司）
- **路线图信号：** Provider 生态持续扩展

---

## 7. 用户反馈摘要

### 已识别的痛点

| 类别 | 问题数 | 首要关切 |
|------|--------|----------|
| **内存管理** | 5+ 个严重问题 | 网关、Worker 和 CLI 状态读取中的无界泄漏 |
| **更新可靠性** | 4+ 个问题 | 部分更新、失败回滚、Doctor 干扰 |
| **会话状态** | 8+ 个问题 | 回复丢失、重复渲染、状态损坏 |
| **Provider 集成** | 3+ 个问题 | Codex Helper 失败、目录刷新挂起 |

### 关键用户场景

**长时间运行的网关部署：**
> "RSS 从启动时的约 350 MB 增长到正常使用时 15.5 GB，最终导致进程被操作系统 OOM killer 杀死。" — [#91588](https://github.com/openclaw/openclaw/issues/91588)

**多 Agent 设置：**
> "从 2026.9.2 升级到 2026.9.6 后，多 agent 运行时发布失败及独立的 Codex 启动超时" — [#158127](https://github.com/openclaw/openclaw/issues/158127)

**更新失败：**
> "候选 Doctor 因迁移输入冲突和 `changed=[]` 阻止 2026.11.3 → 2026.11.5" — [#200606](https://github.com/openclaw/openclaw/issues/200606)

**资源受限环境：**
> "在小机器上，Git 安装可以克隆 OpenClaw、安装工作区依赖并构建 Control UI，然后才发现完整源码构建无法容纳。" — [PR #205735](https://github.com/openclaw/openclaw/pull/205735)

### 满意度信号
- 新 Provider 插件生态获得广泛认可（XingChen-AGI PR 收到欢迎）
- Antigravity 会话功能提案社区参与积极
- 社区积极提交附有复现步骤的详细 Bug 报告

---

## 8. 积压事项关注

### 需要维护者关注的长期待回复 Issue

| Issue | 存在时间 | 评论数 | 优先级 | 描述 |
|-------|----------|--------|--------|------|
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 约 4 个月 | 16 | P2 | 死信出站队列条目永久存在；CLI/RPC/TTL 均无法清除 |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | 约 4 个月 | 13 | P2 | session.maintenance enforce 模式未限制存储；线程/频道条目不受约束 |
| [#127195](https://github.com/openclaw/openclaw/issues/127195) | 约 3 个月 | 15 | P2 | 16 处调用点发出相同错误但无原因码 |
| [#141172](https://github.com/openclaw/openclaw/issues/141172) | 约 2.5 个月 | 14 | P2 | 在首次会话提交前终止的运行会永久泄漏 agent.run.started |
| [#56349](https://github.com/openclaw/openclaw/issues/56349) | 约 8 个月 | 9 | P2 | 不可绕过的出站策略强制执行功能请求 |

### 需要分类的过期 Issue

| Issue | 存在时间 | 状态 | 描述 |
|-------|----------|------|------|
| [#162585](https://github.com/openclaw/openclaw/issues/162585) | 约 2 个月 | 过期 | Windows 插件 staging 重新物化到 package-0/node_modules/<self> |
| [#158127](https://github.com/openclaw/openclaw/issues/158127) | 约 2 个月 | 过期 | 多 agent 运行时发布失败 |
| [#164065](https://github.com/openclaw/openclaw/issues/164065) | 约 2 个月 | 过期 | Telegram requireMention 未限制裸斜杠命令 |

### 需要审查的 PR

| PR | 作者 | 规模 | 状态 | 描述 |
|----|------|------|------|------|
| [#205731](https://github.com/openclaw/openclaw/pull/205731) | roboclaw-bot | XL | 等待作者 | Antigravity 会话的断点安全恢复续接 |
| [#204431](https://github.com/openclaw/openclaw/pull/204431) | roboclaw-bot | M | 准备就绪待维护者查看 | 让插件在聊天中解释 Provider 错误 |
| [#204794](https://github.com/openclaw/openclaw/pull/204794) | EnesKartal | M | 准备就绪待维护者查看 | 更新期间保留可操作的运行历史 |
| [#205689](https://github.com/openclaw/openclaw/pull/205689) | roboclaw-bot | L | 等待作者 | 在收件箱中显示恢复的访客访问权限 |

---

## 总结评估

**健康指标：**
- 🟢 活跃开发（24 小时内 500 个 PR 更新）
- 🟡 更新系统稳定性存疑（多个回滚/部分更新问题）
- 🔴 内存管理危急（多个影响生产的 P0/P1 泄漏）
- 🟡 会话状态完整性问题（回复丢失、重复渲染、损坏）

**维护者推荐行动：**
1. 优先处理内存泄漏修复（[#91588](https://github.com/openclaw/openclaw/issues/91588)、[#159662](https://github.com/openclaw/openclaw/issues/159662)、[#154812](https://github.com/openclaw/openclaw/issues/154812)）
2. 在下次稳定版发布前解决更新系统可靠性问题
3. 分类积压的过期 Issue（4+ 个月无响应）
4. 审查 P0 问题，考虑纳入 v2026.11.11 或 v2026.10.35

---

*摘要生成日期：2026-11-26 | 数据来源：[OpenClaw GitHub](https://github.com/openclaw/openclaw)*

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this while maintaining the exact structure, formatting, tables, and keeping technical terms, project names, version numbers, etc. in their original form.

Let me go through it section by section.
</think>


# 个人 AI 助手开源生态 — 跨项目对比报告
*数据周期：2026-11-26*

---

## 1. 生态概览

个人 AI 助手与 Agent 开源生态正处于**高速增长阶段**，四个活跃维护的项目驱动着显著的架构多样性。OpenClaw 在开发体量上遥遥领先——问题与 PR 活跃度约为其他项目的近 8 倍——但同时也背负着更大体量的缺陷，尤其是长时运行 gateway 部署场景下的内存管理问题。Hermes Agent 和 ZeroClaw 共同聚焦于**多渠道编排**（Telegram、Discord、邮件、IRC），在安全加固和插件架构上有较强侧重。QwenPaw 则通过**多模型路由**和基于 AgentScope 的 Agent 编排实现差异化，并具备原生视频显存支持。整体生态在三个维度上呈现出成熟化信号：（1）基于 OIDC 的身份认证与会话管理；（2）WASM/插件化扩展逐步取代单体二进制；（3）可穿越上下文压缩的持久化记忆层。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | IronClaw |
|------|----------|--------------|---------|----------|----------|
| **Issues（24h）** | 359 | 50 | 35 | 11 | 0 |
| **PRs（24h）** | 500 | 50 | 50 | 50 | 0 |
| **Issues 开放/活跃** | 246 | 48 | 25 | 8 | 0 |
| **Issues 已关闭** | 113 | 2 | 10 | 3 | 0 |
| **PRs 开放** | 282 | 42 | 26 | 39 | 0 |
| **PRs 已合并/关闭** | 218 | 8 | 24 | 11 | 0 |
| **Releases（24h）** | **2** | 1 | 0 | 0 | 0 |
| **贡献者总数** | 349 | — | — | — | — |
| **提交总数** | 8,309 | — | — | — | — |
| **已合并 PRs 总数** | 7,671 | — | — | — | — |
| **健康度评分** | 🟡 高风险/稳定 | 🟡 功能迭代期 | 🟢 稳步推进 | 🟢 架构演进期 | ⚫ 无活跃 |

---

## 3. OpenClaw 的定位

### 相比同行的优势

| 维度 | OpenClaw | 与同行对比 |
|------|----------|------------|
| **社区规模** | 349 位贡献者，7,671 个已合并 PR | ZeroClaw 和 QwenPaw 未公布总量，但体量明显落后 |
| **发版节奏** | 24h 内 2 个 Release（stable + LTS 对等版） | Hermes Agent 发 canary 版；其他不规律 |
| **Issue 解决速度** | 24h 内关闭 113 个 issues | Hermes Agent: 2，QwenPaw: 10，ZeroClaw: 3 |
| **功能广度** | CLI、gateway、MCP、记忆、多 Agent、更新系统 | Hermes Agent 专注渠道；ZeroClaw 专注安全；QwenPaw 专注模型 |
| **缺陷跟踪深度** | P0/P1 严重级别，含社区评分 | Hermes Agent 使用 P1/P2/P3；其他较为随意 |

### 技术路径差异

OpenClaw 采用**单体分层架构**，单一二进制文件中包含 CLI、gateway、worker 和更新组件，以 SQLite WAL 作为状态管理后端。Hermes Agent 和 ZeroClaw 则采用**插件优先架构**，渠道和工具均以 WASM 插件形式交付。QwenPaw 基于 **AgentScope 框架** 构建，每个模型有独立适配器，并提供专用 `video_memory` 插件处理多模态工作流。OpenClaw 的记忆模型依赖精选文件注入（`MEMORY.md`/`USER.md`）配合来源追溯棘轮机制，而 Hermes Agent 则提出 Doc-Chain Substrate 作为持久化记录层记忆——这是一条根本不同的架构路线。

### 社区规模对比

OpenClaw 的 349 位贡献者和 7,671 个已合并 PR 代表一个**成熟的大规模开源项目**，可与中型框架仓库相提并论。Hermes Agent 和 ZeroClaw 的规模约为 OpenClaw 的 10%–20%，属于更早期的项目，核心团队更精简。QwenPaw 的贡献者群体规模较小，但人均活跃度较高（50 个 PR 来自未公开数量的贡献者群体）。

---

## 4. 跨项目共同技术关注点

以下需求在多个项目中同时出现，表明了整个生态的共同诉求：

### 4.1 长时运行 Gateway 稳定性

| 项目 | 具体需求 | 严重程度 |
|------|----------|----------|
| **OpenClaw** | RSS 无界增长（2-3 天内从 350MB 飙至 15.5GB）；worker 泄漏；SQLite WAL 检查点停滞 | **关键（P0 ×3）** |
| **Hermes Agent** | 空闲 gateway 在 110 MB/s 吞吐下仍消耗 50-70% CPU | **高（P2）** |
| **ZeroClaw** | 重启后邮件渠道重复回复消息（UNSEEN 标志从未被设置） | **高（S2）** |

**跨项目信号：** 所有具备持久化 gateway 进程的项目都面临内存或状态管理挑战。这是 Agent 超越单轮交互持久运行时的结构性需求。

### 4.2 更新/回滚可靠性

| 项目 | 具体需求 |
|------|----------|
| **OpenClaw** | 安装后 Doctor 未验证 WAL 发布状态；部分更新使外部插件处于不一致状态；Doctor 在迁移输入冲突时阻塞更新 |
| **ZeroClaw** | Containerfile 检查阶段在 StageX 镜像中失败；CI 工具链存在缺口 |

**跨项目信号：** 更新系统在多组件部署场景下缺乏充分测试。"部分更新 → 状态不一致 → 无法回滚"这一反模式在整个生态中普遍存在。

### 4.3 OIDC / 认证加固

| 项目 | 具体需求 |
|------|----------|
| **OpenClaw** | 当来源追溯棘轮将 MEMORY.md/USER.md 标记为"不可信"时，会静默排除——无用户通知，无恢复路径 |
| **Hermes Agent** | MCP OAuth 作用域被服务器元数据覆盖；每次加载 profile-scope 时仪表盘认证都会触发警告 |
| **ZeroClaw** | OIDC 刷新授权管理（ADR-017）；守护进程持有的授权；带撤销的注册；ACP turn 重连重放 |

**跨项目信号：** 随着 Agent 进入生产多用户环境，身份认证、会话持久化和凭证生命周期管理正在成为一等公民需求。

### 4.4 多渠道会话管理

| 项目 | 具体需求 |
|------|----------|
| **Hermes Agent** | Telegram 论坛话题应映射到独立 Agent 会话；看板分发被陈旧错误信息困住 |
| **ZeroClaw** | ACP 作为主要传输协议；接收方自主的会话消息（RFC #11027）；Discord 外部对等节点需要更清晰的错误提示 |
| **QwenPaw** | Telegram 话题隔离已在 PR #8857 中交付 |

**跨项目信号：** 会话边界定义——一段对话何时结束、另一段何时开始——在各平台均未得到解决。项目正逐渐收敛于平台原生概念（Telegram 话题、Discord 线程）作为会话作用域。

### 4.5 本地化与 i18n

| 项目 | 具体需求 |
|------|----------|
| **OpenClaw** | 多个非英语语言包请求待处理；面向用户的字符串仍以英语为主 |
| **ZeroClaw** | 尽管 UI 翻译已有进展，但配置元数据在本地化 ZeroCode 和 Web 界面中仍为英语 |

**跨项目信号：** 本地化正从 UI 字符串向结构化数据（配置元数据、模型名称、错误消息）延伸。已完成 UI i18n 的项目现在正面临更底层的本地化缺口。

---

## 5. 差异化分析

### 功能侧重

| 项目 | 核心差异化 | 次要聚焦 |
|------|-----------|----------|
| **OpenClaw** | 记忆来源追溯、多 Agent 编排、精选记忆注入 | 更新系统、CLI 扩展性、MCP 生态 |
| **Hermes Agent** | 多渠道集成（Telegram、Discord、邮件、IRC、飞书） | 仪表盘 UX、看板任务管理、Webhook 自动化 |
| **QwenPaw** | 多模型路由（基于 AgentScope）、视频显存、上下文压缩 | 媒体处理、JSON 提取、Linux 桌面打包 |
| **ZeroClaw** | 安全优先的 ACP 协议、OIDC/刷新授权、WASM 插件架构 | 渠道即插件（IRC/Twitch → WASM）、目标执行系统 |

### 目标用户

| 项目 | 主要受众 | 部署形态 |
|------|---------|----------|
| **OpenClaw** | 高级用户、开发者、AI 前沿企业 | 自托管 gateway；CLI 优先；主动更新 |
| **Hermes Agent** | 管理多渠道 Bot 的开发者与运维人员 | 桌面 GUI + CLI；定时任务驱动；Webhook 为核心 |
| **QwenPaw** | 使用 AgentScope 生态的开发者；Linux 用户 | 桌面（Tauri）、CLI、Docker；多模型工作流 |
| **ZeroClaw** | 安全敏感型部署；Rust 生态开发者 | ACP 原生传输；插件驱动；WASM 工具链 |

### 技术架构

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------|----------|--------------|---------|----------|
| **状态后端** | SQLite WAL | PostgreSQL | AgentScope 托管 | 证书账本 |
| **扩展模型** | MCP catalog + 插件 | WASM 插件 + 渠道适配器 | AgentScope 插件 + 工具注册表 | WASM 插件 + ACP 协议 |
| **记忆模型** | 文件注入式来源追溯棘轮 | Doc-Chain Substrate（RFC） | 视频显存插件 | 通过 ACP 的持久化记录 |
| **发布策略** | Stable + LTS 对等版 | Canary + stable | Beta（v2.3.x） | 里程碑驱动（v1.0.0 路线） |
| **语言** | Node.js/TypeScript | Python（主语言） | Python | Rust |
| **更新机制** | 内置 `openclaw update` + Doctor | Canary channel | 手动更新 | Cargo + 插件注册表 |

---

## 6. 社区势能与成熟度

### 活跃度分层

**第一梯队 — 高体量、成熟期**  
**OpenClaw** — 24h 内 500 个 PR / 359 个 issues，349 位贡献者，7,671 个已合并 PR。该项目已达到生产级水平，但在内存管理和更新可靠性方面背负着技术债务。"gold shrimp"和"diamond lobster"等社区评分的存在表明用户参与度已相当深入。v2026.10.34 LTS 对等版的发布标志着向企业级稳定性保障的转变。

**第二梯队 — 活跃、功能迭代期**  
**Hermes Agent** 和 **QwenPaw** — 两者均维持约 50 个 PR/天，合并率健康（分别为 16% 和 48%）。Hermes Agent 正在推进 webhook 自动化（PagerDuty、PagerDuty 集成）和平台专项修复。QwenPaw 正在解决媒体处理和模型路由中的边界情况。两个项目都呈现出健康的社区贡献模式，贡献者背景多元。

**第三梯队 — 架构演进期、低体量**  
**ZeroClaw** — 体量较低（50 个 PR、11 个 issues），但技术抱负较高。ACP 协议现代化、OIDC 刷新授权系统以及将运行时拆分为更小 crate 的做法表明，该项目在投资基础架构而非功能广度。v1.0.0 路线图追踪器带来了所需的透明度。

**第四梯队 — 无活跃**  
**IronClaw** — 过去 24 小时零活动。状态：休眠或已终止。

### 快速迭代 vs. 稳定化信号

| 项目 | 轨迹 | 信号 |
|------|------|------|
| **OpenClaw** | ⚠️ 快速但风险偏高 | 24h 合并 218 个 PR，但 5+ 个 P0/P1 缺陷未解决；体量掩盖了稳定性债务 |
| **Hermes Agent** | 🟢 功能加速期 | PagerDuty 集成、Desktop workspace 切换器、OSC 7577 协议支持并行推进 |
| **QwenPaw** | 🟢 稳步打磨 | Bug 修复 PR（8 个合并）多于功能 PR；项目似乎正在加固 v2.3.x |
| **ZeroClaw** | 🟢 架构演进期 | ACP/OIDC 工作属于基础性变更；这在 1.0 之前属于正常状态 |

---

## 7. 趋势信号

### 给 AI Agent 框架开发者的建议

**1. Gateway 内存管理仍是未解难题**  
每个拥有持久化 Agent 进程的项目都在独立地发现内存管理失效模式。这不是简单的 bug——而是 Agent 管理长生命周期状态时的架构性缺陷。OpenClaw 的 15.5 GB 泄漏与 Hermes Agent 在 110 MB/s 吞吐下 50-70% 的空闲 CPU 消耗之间的对比表明，目前尚无共享的最佳实践。新框架开发者应从第一天起就设计有界内存策略，并为 WAL/worker/cache 生命周期管理制定明确的策略。

**2. 更新/回滚系统需要鲁棒性测试**  
整个生态呈现出更新失败后部署处于不一致状态的反模式。当 Agent 处理生产工作流时，这种可靠性反模式将变得至关重要。框架开发者应在事务性更新语义和全面的回滚路径上加大投入。

**3. 插件架构已成为默认的扩展模型**  
Hermes Agent 和 ZeroClaw 都在将渠道集成迁移到 WASM 插件，打破了现有的二进制假设。OpenClaw 使用基于 MCP 的方式。QwenPaw 使用 AgentScope 的注册表模型。开发者应预期插件优先的部署模式，并为插件隔离、生命周期管理和沙箱化做好准备。

**4. 会话边界定义是跨平台挑战**  
各项目正在独立定义一段对话会话何时结束、另一段何时开始，目前没有共识。向平台原生概念（Telegram 话题、Discord 线程）的收敛表明，会话应按平台自然的对话单元来界定，而非一个通用定义。

**5. OIDC 与凭证生命周期管理正在兴起**  
ZeroClaw 的 ADR-017（守护进程持有的刷新授权）、Hermes Agent 的 MCP OAuth 作用域问题，以及 OpenClaw 的 MEMORY.md 信任棘轮机制，都反映了一个共同需求：**生产级 Agent 需要像传统服务器应用一样严谨地管理身份和凭证**。这是一个成熟化信号。

**6. 多模型路由正在成为标配**  
QwenPaw 的上下文表、OpenClaw 的模型目录，以及 Hermes Agent 的 Provider 回退逻辑都表明，单模型 Agent 已不再是预期的部署模式。开发者应为模型多样性、自动故障转移和预算感知型模型选择构建支持。

**7. Linux 桌面打包存在缺口**  
QwenPaw 和 Hermes Agent 都在积极推进 Linux 桌面制品（QwenPaw 的 AppImage/deb；Hermes Agent 的 Electron 方案）。这代表了一类偏好原生桌面体验而非 Docker 或纯 CLI 部署的用户群体。

### 战略建议

- **对于贡献者：** OpenClaw 的 P0 内存问题提供了高影响力的贡献机会。Hermes Agent 的 webhook 自动化功能正在积极 review。ZeroClaw 的 OIDC 和 ACP 工作具有架构意义。
- **对于运维方：** OpenClaw 的 v2026.10.34 LTS 对等版推荐用于生产稳定性。Hermes Agent 的 canary channel 可获取最新修复但存在回归风险。QwenPaw v2.3.x 对一般使用而言较为稳定。ZeroClaw 适合以 Rust 生态为目标且需要 ACP 原生传输的团队。
- **对于平台构建者：** 整个生态在会话边界、更新语义和记忆生命周期策略上缺乏共享标准。这些是跨项目规范工作的机会。

---

*本报告基于 2026-11-26 的社区摘要数据整理。项目：OpenClaw、Hermes Agent、IronClaw、QwenPaw、ZeroClaw。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the content into Simplified Chinese
2. Keep all Markdown structure exactly the same
3. Keep URLs, link targets, code spans, numbers, dates, usernames, version tags, etc. as-is
4. Use natural technical Chinese register
5. Output ONLY the translation, no preamble or explanation

Let me go through this carefully and translate it section by section.
</think>


# Hermes Agent 项目日报 — 2026年11月26日

---

## 1. 今日概览

2026年11月26日，Hermes Agent 保持了**极高的开发活跃度**，过去24小时内有50个 issue 和50个 PR 更新，8个 PR 被合并或关闭。项目发布了 **canary.20261125T064800Z-v0.23.4**，持续快速迭代节奏。社区参与热度不减——关于 Doc-Chain Substrate 网络的 RFC 以57条评论遥遥领先，反映出社区对更可靠的持久化记忆架构的迫切需求。缺陷 backlog 中以性能回退（Windows 文件系统风暴、空闲 gateway CPU 占用）和平台特定 bug（Termux/Android 硬链接崩溃、Windows 休眠唤醒遮罩层、macOS CLT git stub 弹窗）为主，同时 Webhook 管理、PagerDuty 集成、Desktop 工作区切换等新功能正在稳步推进。

---

## 2. 版本发布

### canary.20261125T064800Z-v0.23.4
**发布日期：** 2026年11月25日  
**类型：** Canary（预发布）构建

这是 v0.23.x 系列的标准 canary 版本，在稳定版之间持续接收上游修复和新功能。发布元数据中未记录破坏性变更或迁移说明。

- **下载：** Hermes Desktop DMG（macOS Apple Silicon/M系列芯片可用）
- **发布链接：** https://github.com/NousResearch/hermes-agent/releases/tag/canary.20261125T064800Z-v0.23.4

---

## 3. 项目进展

### 今日合并/关闭的 PR（8个）

| PR | 作者 | 变更摘要 |
|---|---|---|
| [#159003](https://github.com/NousResearch/hermes-agent/pull/159003) | mr-pewpy | plugin-catalog: Model Forge v1.2.0 — 更新五个条目 |
| [#128785](https://github.com/NousResearch/hermes-agent/pull/128785) | chen964224 | fix(gateway): 限制每个完成通知的文档制品数量 |
| [#123498](https://github.com/NousResearch/hermes-agent/pull/123498) | chen964224 | skills: 生产环境避坑指南 — 内置 skills、agy output-format/effort、opencode --model id、xlsx 批量读取 |
| [#122191](https://github.com/NousResearch/hermes-agent/pull/122191) | chen964224 | fix(kanban): 修复相对路径完成制品相对于任务工作区解析 |
| [#159964](https://github.com/NousResearch/hermes-agent/pull/159964) | csjoyxy | WebApp iOS 独立模式：面板切换图标导致页面刷新（bugfix，已关闭） |
| [#160278](https://github.com/NousResearch/hermes-agent/pull/160278) | lldois | 移动端 App 会话展示 bug（已撤回 — 未授权报告） |

### 推进中的活跃 PR

- **[#160306](https://github.com/NousResearch/hermes-agent/pull/160306)** — `teknium1`：PagerDuty Webhook 接入，支持签名验证、密钥轮换、事件过滤和重试
- **[#156947](https://github.com/NousResearch/hermes-agent/pull/156947)** — `teknium1`：`hermes webhook disable/enable/rotate-secret` 命令，支持动态路由管理
- **[#160300](https://github.com/NousResearch/hermes-agent/pull/160300)** — `BearHuddleston`：加强 macOS CLT git stub 守卫逻辑，修复子进程 cwd PATH 解析，测试 xcode-select 超时
- **[#160301](https://github.com/NousResearch/hermes-agent/pull/160301)** — `BearHuddleston`：保护 Electron resolveGitBinary 避免 macOS CLT git stub 触发弹窗
- **[#151754](https://github.com/NousResearch/hermes-agent/pull/151754)** — `pashakbit`：为 Hermes Desktop 添加原生项目/工作区切换器
- **[#160297](https://github.com/NousResearch/hermes-agent/pull/160297)** — `freqyfreqy`：跨交互式终端界面支持 OSC 7577（程序恢复协议）
- **[#160232](https://github.com/NousResearch/hermes-agent/pull/160232)** — `unsupportedpastels`：Gateway 启动时等待 webapp.host 延迟赋值（修复 #160209）
- **[#159876](https://github.com/NousResearch/hermes-agent/pull/159876)** — `benbarclay`：支持无 agent 的主机运行 Webapp，用于 Hermes Cloud 托管仪表盘
- **[#148419](https://github.com/NousResearch/hermes-agent/pull/148419)** — `neaucode`：限制后台委托回执中 goal/context 的回显大小
- **[#128626](https://github.com/NousResearch/hermes-agent/pull/128626)** — `0ut5ider`：用 SHA-256 摘要验证保护远程完整文件覆写操作

---

## 4. 社区热点话题

### 互动量最高的讨论

| # | 话题 | 作者 | 评论数 | 链接 |
|---|---|---|---|---|
| 1 | **RFC: Doc-Chain Substrate 网络设计** | c0wb0yp0tat0 | 57 | [#143379](https://github.com/NousResearch/hermes-agent/issues/143379) |
| 2 | Gateway 在多 profile 下产生 34k-99k 文件系统元数据操作/秒 | kabirMas | 15 | [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) |
| 3 | kanban: blocked→ready 推进时保留陈旧的 last_failure_error | DresvyanskiyDenis | 10 | [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) |
| 4 | patchelf 在 patchelf-0.15.2（nixpkgs-unstable）下补丁失败 | alaendle | 9 | [#154275](https://github.com/NousResearch/hermes-agent/issues/154275) |
| 5 | `hermes profile create --clone` 未携带 agent.max_turns 配置 | 2ndNatureAI | 8 | [#108575](https://github.com/NousResearch/hermes-agent/issues/108575) |

### 解读

**#143379 — Doc-Chain Substrate RFC：** 以57条评论大幅领先，提案为记忆层设计一个持久化记录层，在会话压缩时仍能保留来源溯源能力。这反映出社区对**可靠的长期记忆架构存在深层需求**——用户希望 agent 能重新读取持久化记录而非重复上下文。RFC 涵盖了读取协议、治理模型和压缩策略。维护者应优先推进这场架构讨论，因为它直接影响 agent 的核心行为。

**#146538 — Windows 文件系统风暴：** 在 Windows 平台上引起15条评论的性能回退问题——在多 profile（66个）环境下 gateway 每秒产生 34,000–99,000 次文件系统元数据操作。这是复杂多 profile 场景下的**严重性能和资源问题**，会耗尽一个完整的 CPU 核心。

---

## 5. 缺陷与稳定性

### P1/P2 级缺陷（严重/高优先级）

| 优先级 | 缺陷 | 组件 | 概述 | 有修复 PR？ |
|---|---|---|---|---|
| **P2** | [#146538](https://github.com/NousResearch/hermes-agent/issues/146538) | Gateway, profiles | Windows：多 profile 下 34k-99k 文件系统元数据操作/秒 — 内核池持续增长 | — |
| **P2** | [#160281](https://github.com/NousResearch/hermes-agent/issues/160281) | Gateway, sessions | 空闲 gateway CPU 占用 50-70%，繁忙多 profile 环境下读取约 110 MB/s | — |
| **P2** | [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) | CLI, cron, kanban | kanban blocked→ready 推进时保留陈旧 last_failure_error，blocker_auth 将卡片永久挂起 | — |
| **P2** | [#158318](https://github.com/NousResearch/hermes-agent/issues/158318) | CLI, kanban | kanban 调度器中陈旧的速率限制文本导致卡片永久困在 blocker_auth | — |
| **P2** | [#158513](https://github.com/NousResearch/hermes-agent/issues/158513) | Gateway, Termux/Android | Termux 上 os.link 不可用 — 硬链接原子创建处每次收到入站消息时崩溃 | — |
| **P2** | [#143658](https://github.com/NousResearch/hermes-agent/issues/143658) | Desktop, Windows | Windows 休眠唤醒后 Desktop 弹出首次运行设置遮罩层 | — |
| **P2** | [#158734](https://github.com/NousResearch/hermes-agent/issues/158734) | Agent, kimi | kimi-k3 tool_call 桥接层对所有含参数的延迟工具调用接收到空参数 {} | — |
| **P2** | [#122010](https://github.com/NousResearch/hermes-agent/issues/122010) | Agent, providers | 备用 provider 切换保留了 Anthropic fast-mode 速度，导致 OpenAI 兼容备用崩溃 | — |
| **P2** | [#160067](https://github.com/NousResearch/hermes-agent/issues/160067) | Gateway, email | 自定义邮件主题被忽略，文本被写入消息正文而非主题行 | — |
| **P2** | [#160293](https://github.com/NousResearch/hermes-agent/issues/160293) | CLI, Desktop, Windows | Windows gateway ensure 拒绝一个 Scheduled Task 仍在运行 pre-wscript .cmd 启动器的 home | — |
| **P2** | [#160232](https://github.com/NousResearch/hermes-agent/pull/160232) | Gateway, webapp | Gateway 启动时未等待 webapp.host 延迟赋值 | **是 — #160232** |
| **P2** | [#160298](https://github.com/NousResearch/hermes-agent/pull/160298) | Gateway, Telegram | 预接受失败时重新持有缓冲的 Telegram 事件 | **是 — #160298** |

### P3 级缺陷（中优先级）

值得关注的 P3 缺陷包括：kanban Worker 日志缺少实时工具输出流（[#144334](https://github.com/NousResearch/hermes-agent/issues/144334)）、迭代预算耗尽消息泄露到 Slack/Discord（[#79424](https://github.com/NousResearch/hermes-agent/issues/79424)）、规范组头像忽略迁移后的 bot avatar 密钥（[#148923](https://github.com/NousResearch/hermes-agent/issues/148923)——唯一带有 👍: 2 的缺陷）、以及飞书 merge_forward 产生空消息（[#25620](https://github.com/NousResearch/hermes-agent/issues/25620)）。

### 已合并的重要修复

- **[#128785](https://github.com/NousResearch/hermes-agent/pull/128785)：** 限制 kanban 完成通知中的文档制品数量 — 防止大量上传涌入聊天
- **[#122191](https://github.com/NousResearch/hermes-agent/pull/122191)：** Kanban 现在相对于任务工作区解析相对路径制品，而非调用进程的 cwd

---

## 6. 功能提案与路线图信号

### 高关注度功能提案

| PR/Issue | 话题 | 作者 | 优先级 | 近中期合并可能性 |
|---|---|---|---|---|
| [#160306](https://github.com/NousResearch/hermes-agent/pull/160306) | PagerDuty Webhook 集成（签名验证、轮换、重试） | teknium1 | P2 | **高** — 今日 PR 已开 |
| [#156947](https://github.com/NousResearch/hermes-agent/pull/156947) | `hermes webhook disable/enable/rotate-secret` | teknium1 | P2 | **高** — CI 已 review，推进中 |
| [#151754](https://github.com/NousResearch/hermes-agent/pull/151754) | Desktop 工作区切换器 | pashakbit | P3 | **高** — 大型多组件功能 |
| [#160297](https://github.com/NousResearch/hermes-agent/pull/160297) | OSC 7577 程序恢复协议支持 | freqyfreqy | P3 | **中** — 今日新 PR |
| [#159876](https://github.com/NousResearch/hermes-agent/pull/159876) | 无 agent 主机运行 Webapp 用于 Cloud 仪表盘 | benbarclay | P3 | **中** — 与 Cloud 路线图绑定 |
| [#147393](https://github.com/NousResearch/hermes-agent/issues/147393) | Desktop 审批超时恢复与陈旧命令守卫 | iankoratskydcn | P3 | **中** — UX 空白明确 |
| [#144252](https://github.com/NousResearch/hermes-agent/issues/144252) | Desktop cron 侧边栏：按名称前缀折叠文件夹 | Joe070707 | P3 | **低-中** — 体验优化 |

### 路线图信号

**Doc-Chain Substrate RFC（#143379）** 以57条评论强烈表明社区需要第一方持久化记忆层。PagerDuty 集成和 Webhook 管理功能表明项目正在投入**运维/自动化用例**。Desktop 工作区切换和 Cloud 仪表盘托管功能指向**多项目/组织化工作流**方向。

---

## 7. 用户反馈摘要

### 痛点

1. **Windows 平台稳定性：** 多个 P2 缺陷集中在 Windows（文件系统风暴、休眠唤醒遮罩层、Scheduled Task 启动器冲突），Windows 是明显的痛点。多 profile 场景下 Windows 用户报告了显著的资源开销。

2. **Kanban 可靠性：** 两个独立的 P2 缺陷（[#121281](https://github.com/NousResearch/hermes-agent/issues/121281)、[#158318](https://github.com/NousResearch/hermes-agent/issues/158318)）都涉及 kanban 调度器因陈旧错误信息永久困在 `blocker_auth`。这是一个**可复现的运维故障**，用户会反复遇到。

3. **Profile 克隆配置丢失：** `hermes profile create --clone` 静默丢弃 `agent.max_turns`，导致 kanban 调度报"迭代预算耗尽 (4/4)"——关键配置字段的**静默数据丢失**。

4. **Termux/Android 硬链接崩溃：** Termux 上 `os.link` 不可用，每次收到入站消息都会崩溃直到预先创建盐文件。这是一个**根本性的兼容性缺陷**，缺乏优雅降级。

5. **邮件主题 bug（#160067）：** 用户报告自定义邮件主题被写入正文，导致发出的邮件难以整理——昨日刚报告。

### 正面信号

- Model Forge 插件 v1.3.1 更新和活跃的社区插件开发表明插件生态健康
- 安全功能（PagerDuty Webhook 签名验证、HMAC 密钥轮换）展示了对生产级安全的投入
- Desktop 工作区切换解决了真实的多项目工作流需求

---

## 8. 积压事项监控

### 长期无响应的重要 Issue

| Issue | 时长 | 话题 | 状态 | 风险 |
|---|---|---|---|---|
| [#25620](https://github.com/NousResearch/hermes-agent/issues/25620) | 约6个月 | 飞书 merge_forward 产生空'[Merged forward message]' | Open | 消息投递风险 |
| [#79424](https://github.com/NousResearch/hermes-agent/issues/79424) | 约3.5个月 | 迭代预算耗尽消息泄露到 Slack/Discord | Open | 用户可见的 UX 污染 |
| [#108575](https://github.com/NousResearch/hermes-agent/issues/108575) | 约2.5个月 | Profile 克隆丢失 agent.max_turns | Open | 静默配置丢失 |
| [#119190](https://github.com/NousResearch/hermes-agent/issues/119190) | 约2个月 | 图片轮次中注入的记忆上下文被显示为用户发言 | Open | 记录保真度 |
| [#93719](https://github.com/NousResearch/hermes-agent/issues/93719) | 约3个月 | MCP OAuth scope 被服务端元数据覆盖 | Open | 认证配置失效 |
| [#142477](https://github.com/NousResearch/hermes-agent/issues/142477) | 约1个月 | MCP oauth.scope 被忽略（SDK 覆写） | Open | 与 #93719 同根因 |

### 需要维护者关注的 PR

| PR | 时长 | 话题 | 状态 |
|---|---|---|---|
| [#128626](https://github.com/NousResearch/hermes-agent/pull/128626) | 约2个月 | 保护远程完整文件覆写 | Open |
| [#151754](https://github.com/NousResearch/hermes-agent/pull/151754) | 约17天 | Desktop 工作区切换器 | Open — 大型功能 PR |
| [#148419](https://github.com/NousResearch/hermes-agent/pull/148419) | 约23天 | 限制后台委托回执中的 goal/context | Open |

### 建议归档候选

- **[#160278](https://github.com/NousResearch/hermes-agent/issues/160278)：** 移动端 App 会话展示 bug — **已撤回**（未授权提交，应关闭）
- 对于超过3个月无维护者响应且无关联 PR 的 issue，建议 sweeper 清理或归档

---

*日报数据来源于 2026-11-26 的 Hermes Agent 仓库。所有 issue/PR 链接指向 https://github.com/NousResearch/hermes-agent。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me go through the content carefully and translate it while following all the rules provided.

Key things to remember:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, links, numbers, dates, code, project names, usernames, etc. verbatim
- Use natural technical Chinese register

Let me translate section by section:

Title: "QwenPaw Project Digest — 2026-11-26"
→ "QwenPaw 项目日报 - 2026-11-26"

## 1. Today's Overview
"QwenPaw maintains high development velocity with **35 issues and 50 PRs** updated in the last 24 hours. No new releases shipped today. The project remains on the `2.3.x` beta track."

Translation: QwenPaw 项目保持高强度的开发节奏，过去 24 小时内共更新了 **35 个 issue 和 50 个 PR**。今日无新版本发布。项目当前仍处于 `2.3.x` beta 阶段。

"The community closed **10 issues** and **24 PRs**, indicating strong merge cadence. A recurring contributor, **passionworkeer**, opened multiple XS-sized bug fixes for the `video_memory` plugin, while **qbc2016** submitted a larger refactor for channel worker shutdown semantics. Notable new features under development include Linux desktop packaging and custom decision model endpoints. Overall project health appears robust with balanced bug-fix and feature work."

社区关闭了 **10 个 issue** 和 **24 个 PR**，合并节奏稳健。老面孔 **passionworkeer** 为 `video_memory` 插件连续提交了多个 XS 级 bug 修复，**qbc2016** 则带来了一个规模更大的 channel worker 关闭语义重构。值得关注的新功能方向包括 Linux 桌面打包和自定义决策模型端点。总体来看，项目健康状态良好，bug 修复与功能开发齐头并进。

---

## 2. Releases

"**None** — No new releases were published in the last 24 hours."

**无** — 过去 24 小时内无新版本发布。

---

## 3. Project Progress

"### Merged / Closed PRs (24 total)"

### 已合并 / 已关闭的 PR（24 个）

Now I need to translate the table headers and content. Let me work through each row:

"| PR | Author | Size | Description |"
"|----|--------|------|-------------|"

"Description" → 描述

"fix(scroll): recognize URL-referenced media in tool-result folding — collapses historical tool results that carry media URLs during context compression"

→ fix(scroll)：识别工具结果折叠中的 URL 引用媒体 — 在上下文压缩时折叠包含媒体 URL 的历史工具结果

"fix(task_tracker): bound the run completion callback and always clean up — prevents zombie `running` entries when a callback hangs or is cancelled"

→ fix(task_tracker)：限定运行完成回调的执行并始终清理 — 防止回调卡住或被取消时产生僵尸 `running` 条目

"fix(media): enforce inline budget, rescale after refusal, and report omissions — fixes three gaps: byte budget vs. side limit independence, rescale logic after refusals, and omission reporting"

→ fix(media)：强制内联预算、拒绝后重新缩放并上报遗漏 — 修复了三个缺陷：字节预算与侧限独立性问题、拒绝后的重新缩放逻辑缺失，以及遗漏上报功能

"suggest retrying a failed context compaction — changes error message to recommend `/compact` retry instead of `/clear`, reducing unintended context loss"

→ 建议重试上下文压缩失败 — 修改错误提示，引导用户重试 `/compact` 而非使用 `/clear`，减少意外上下文丢失

"fix(plugins): keep llama-server from outliving a crashed backend — ensures the local Llama server process is terminated when the backend dies"

→ fix(plugins)：防止 llama-server 在后端崩溃后继续存活 — 确保后端终止时本地 Llama 服务进程一并结束

"feat(telegram): isolate agent sessions by forum topic — Telegram forum topics now map to separate agent sessions, memory, and Console conversations"

→ feat(telegram)：按论坛主题隔离 agent 会话 — Telegram 论坛主题现在映射到独立的 agent 会话、记忆和 Console 对话

"test(api): verify missing provider lookup returns 404"

→ test(api)：验证缺失 provider 查找返回 404

Now moving to the next section with the new open PRs.

### 新开启的 Open PR（26 个，重点节选）

Several recent contributions address video memory issues and model configuration. passionworkeer fixed coercion of root themes to strings while guarding against null values in the merged graph payload, and also capped folded short-tail segments at the maximum scene duration during segment planning. liyangxu1 added support for custom decision model endpoints, expanding flexibility in model configuration.

Linux packaging has been expanded to include deb and AppImage formats for the Tauri build, while qbc2016 implemented a critical fix requiring worker acknowledgment before stopping. Code-mode tool batch functionality was patched to allow tool calls to reach catalog tools, and MCP header form support was added for configuration. The GLM-5.3/5.4 context table gap was also addressed.

Several issues are drawing significant community attention. Issue #8464 involves the /compact command failing to respect session-level model switches, causing compression to break with 400 errors when the default model rejects the payload—this has been resolved. Windows users with ReMe Light backend are experiencing permanent tag-index failures due to an invalid workspace-relative path, affecting versions 2.3.0 and 2.3.0.post1, with no fix available yet. A continuation summary problem has emerged related to the OpenAI Responses protocol's disable_thinking parameter.

The Responses API's `disable_thinking=True` setting strips the `reasoning` field entirely rather than preserving an empty reasoning structure, which breaks continuation summaries. Users are requesting an AI Prompt Polishing button to assist with input refinement, and built-in provider metadata is missing for newer GLM models, causing them to default to the 128k context window and potentially over-tokenize. Multiple bugs of varying severity are being tracked, with the Windows ReMe tag-index issue marked as high priority.

The Windows issue has no fix PR yet. Media data blocks in tool results trigger 400 errors on non-multimodal models, and model overload in OpenAI-compatible streams bypasses retry logic—both high severity without patches. Medium-priority issues include null/non-string root themes in `merged_graph_payload()` (fixed in #8933), oversized segments in `plan_segments()` (fixed in #8932), code-mode `run_tool_batch` failures (fixed in #8923), and missing agent-scope settings in console model configuration. A transcript rendering issue when content height shrinks is low priority.

Feature requests span from UI enhancements like an AI Prompt Polishing button to architectural changes. The MCP header form for configuration, Linux deb and AppImage packaging, and custom decision model endpoints all have active PRs with high inclusion likelihood. Tenant-scoped memory retrieval requires design review and may target v2.4. The Telegram forum topic isolation feature has already shipped in #8857.

User feedback indicates platform friction on Windows where the ReMe memory backend is unusable across multiple machines and versions. Context compression failures are pushing users toward /clear commands, risking context loss. Stale built-in provider metadata and missing per-agent scope in console settings create configuration friction. Linux users lack native desktop builds, relying on Docker instead. Positive sentiment surrounds the shipped Telegram forum feature and media handling improvements in #8785. An issue from 3 days ago blocks Windows memory users with a high-impact path normalization bug, while another from 13 days ago breaks scrolling behavior due to continuation summary failures.

A two-day-old issue addresses missing GLM-5.3/5.4 context metadata causing misconfigured token budgets, solvable by updating the catalog fetcher. Overload SSE handling bypasses retry logic and causes silent failures under load. Tenant-scoped memory retrieval requires architectural review and is tentatively scheduled for v2.4. Linux packaging, pending review and merge after 31 days, fills a platform gap. The digest was compiled from QwenPaw activity on 2026-11-26, pulling data from GitHub Issues and Pull Requests.

I'm verifying the terminology choices: "PR" remains as-is in technical Chinese, "merge cadence" translates to 合并节奏, "open PRs" to 新开启的 Open PR, and "backlog" to 待办. The translation maintains technical precision while ensuring natural readability in Chinese.
</think>


# QwenPaw 项目日报 - 2026-11-26

## 1. 今日概览

QwenPaw 项目保持高强度的开发节奏，过去 24 小时内共更新了 **35 个 issue 和 50 个 PR**。今日无新版本发布。项目当前仍处于 `2.3.x` beta 阶段。

社区关闭了 **10 个 issue** 和 **24 个 PR**，合并节奏稳健。老面孔 **passionworkeer** 为 `video_memory` 插件连续提交了多个 XS 级 bug 修复，**qbc2016** 则带来了一个规模更大的 channel worker 关闭语义重构。值得关注的新功能方向包括 Linux 桌面打包和自定义决策模型端点。总体来看，项目健康状态良好，bug 修复与功能开发齐头并进。

---

## 2. 版本发布

**无** — 过去 24 小时内无新版本发布。

---

## 3. 项目进展

### 已合并 / 已关闭的 PR（24 个）

| PR | 作者 | 规模 | 描述 |
|----|------|------|------|
| [#8487](https://github.com/agentscope-ai/QwenPaw/pull/8487) | passionworkeer | S | **fix(scroll):** 识别工具结果折叠中的 URL 引用媒体 — 在上下文压缩时折叠包含媒体 URL 的历史工具结果 |
| [#8268](https://github.com/agentscope-ai/QwenPaw/pull/8268) | passionworkeer | M | **fix(task_tracker):** 限定运行完成回调的执行并始终清理 — 防止回调卡住或被取消时产生僵尸 `running` 条目 |
| [#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785) | BeiMu-new | XXL | **fix(media):** 强制内联预算、拒绝后重新缩放并上报遗漏 — 修复了三个缺陷：字节预算与侧限独立性问题、拒绝后的重新缩放逻辑缺失，以及遗漏上报功能 |
| [#8853](https://github.com/agentscope-ai/QwenPaw/pull/8853) | Ymmcc | XS | **fix(agents):** 建议重试上下文压缩失败 — 修改错误提示，引导用户重试 `/compact` 而非使用 `/clear`，减少意外上下文丢失 |
| [#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841) | BeiMu-new | L | **fix(plugins):** 防止 llama-server 在后端崩溃后继续存活 — 确保后端终止时本地 Llama 服务进程一并结束 |
| [#8857](https://github.com/agentscope-ai/QwenPaw/pull/8857) | aming | S | **feat(telegram):** 按论坛主题隔离 agent 会话 — Telegram 论坛主题现在映射到独立的 agent 会话、记忆和 Console 对话 |
| [#8308](https://github.com/agentscope-ai/QwenPaw/pull/8308) | passionworkeer | XS | **test(api):** 验证缺失 provider 查找返回 404 |

### 新开启的 Open PR（26 个，重点节选）

| PR | 作者 | 规模 | 描述 |
|----|------|------|------|
| [#8933](https://github.com/agentscope-ai/QwenPaw/pull/8933) | passionworkeer | XS | **fix(video_memory):** 在 `merged_graph_payload` 中将根主题强制转为 str 并防御空值 |
| [#8932](https://github.com/agentscope-ai/QwenPaw/pull/8932) | passionworkeer | XS | **fix(video_memory):** 在 `plan_segments` 中将折叠后的短尾段落上限限制为 `max_scene_sec` |
| [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | liyangxu1 | L | **feat(models):** 支持自定义决策模型端点 |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | LUOSENGWA | XL | **feat(desktop):** 在 Tauri 构建中添加 Linux deb 和 AppImage 打包 |
| [#8899](https://github.com/agentscope-ai/QwenPaw/pull/8899) | qbc2016 | XXL | **fix(channels):** 要求 worker 确认后才能干净关闭 |
| [#8923](https://github.com/agentscope-ai/QwenPaw/pull/8923) | AyhamJo7 | S | **fix(code-mode):** 让 `run_tool_batch` 能调用 code mode 内的 catalog 工具 |

---

## 4. 社区热点

### 互动最多的 Issue（按评论数排序）

1. **#8464** — **[Bug] /compact 忽略会话级模型切换**（已关闭，6 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/8464  
   **用户核心诉求：** 用户在会话中途切换模型后，期望 `/compact` 命令使用当前激活的模型而非 agent 级默认模型。该 bug 导致默认模型拒绝 payload 时压缩静默失败，返回 400 错误。*该 issue 已关闭。*

2. **#8863** — **[Bug] Windows ReMe 标签索引永久性失败**（Open，5 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/8863  
   **用户核心诉求：** `v2.3.0` 和 `v2.3.0.post1` 版本的 Windows 用户使用 ReMe Light 后端时，无法使用记忆标签功能，原因是路径计算错误产生了无效的工作区相对路径。ReMe 集成的跨平台可靠性问题值得关注。

3. **#8727** — **[Bug] Responses 续写摘要在 4000-token reasoning 预算下失败**（Open，3 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/8727  
   **用户核心诉求：** OpenAI Responses 协议的 `disable_thinking=True` 会剥离 `reasoning` 字段而非保留"无 reasoning"语义，导致续写摘要失败。

4. **#8892** — **[Feature] 增加"AI 提示词润色"按钮**（Open，3 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/8892  
   **用户核心诉求：** 用户希望有一个辅助输入功能，在发送前对原始提示词进行优化和结构化，降低提示词工程的门槛。

5. **#8891** — **内置 providers 缺少 glm-5.3/5.4 的上下文元数据**（Open，3 条评论）  
   https://github.com/agentscope-ai/QwenPaw/issues/8891  
   **用户核心诉求：** 最新的 GLM 模型回退到 128k 默认上下文窗口，可能导致截断或过度 tokenization。用户需要准确的最新模型内置元数据。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 修复 PR？ |
|----------|-------|------|-----------|
| **高** | #8863 | Windows ReMe 标签索引永久失败，路径计算产生无效工作区相对路径 | 暂无 |
| **高** | #8877 | OpenAI 兼容流中无状态的模型过载绕过重试机制 | 暂无 |
| **高** | #8887 | 工具结果中的媒体数据块在非多模态模型上触发 400 | 暂无 |
| **中** | #8931 | `merged_graph_payload()` 在根主题为空或非字符串时崩溃 | [#8933](https://github.com/agentscope-ai/QwenPaw/pull/8933) |
| **中** | #8930 | `plan_segments()` 返回超出 `max_scene_sec` 的段落 | [#8932](https://github.com/agentscope-ai/QwenPaw/pull/8932) |
| **中** | #8903 | Code-mode 下 `run_tool_batch` 工具调用失败 | [#8923](https://github.com/agentscope-ai/QwenPaw/pull/8923) |
| **中** | #8893 | Console 模型设置无 agent 作用域；聊天选择器仅限当前会话 | 暂无 |
| **低** | #8888 | 内容高度收缩时回溯跳跃数个屏幕 | 暂无 |

**稳定性备注：** 多处 JSON 提取工具（`extract_json`、`extract_json_payload`、`extract_json_key`）被同一贡献者报告了边界情况解析问题。对应的修复 PR 已开启，表明代码库中结构化输出处理的各模块正在被系统性地梳理。

---

## 6. 功能需求与路线图信号

| 需求 | Issue/PR | 纳入可能性 | 备注 |
|------|---------|-----------|------|
| **AI 提示词润色按钮** | [#8892](https://github.com/agentscope-ai/QwenPaw/issues/8892) | 中 | 简单的 UI 增量，符合提升生产力的 UX 趋势 |
| **MCP 配置页：header 表单** | [#8929](https://github.com/agentscope-ai/QwenPaw/issues/8929) | 高 | 用户直接感知的功能缺口；大量 MCP 服务器需要 header 认证 |
| **Linux deb + AppImage 打包** | [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) | 高 | PR 已开，填补明确的平台缺口 |
| **自定义决策模型端点** | [#8928](https://github.com/agentscope-ai/QwenPaw/pull/8928) | 高 | PR 已开，解决自定义 providers 的已知限制 |
| **租户级记忆检索** | [#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881) | 中 | 架构级重构；改善多租户隔离 |
| **Telegram 论坛主题隔离** | [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) | **已合并** | 已在 [#8857](https://github.com/agentscope-ai/QwenPaw/pull/8857) 中发版 |

---

## 7. 用户反馈摘要

| 主题 | 证据 | 情绪 |
|------|------|------|
| **Windows 平台痛点** | #8863 来自两个独立用户的报告，覆盖两台机器和两个版本，ReMe 内存后端不可用 | ⚠️ 不满意 |
| **上下文压缩 UX 问题** | #8464 和 #8848 均反映压缩失败时引导用户使用 `/clear`，存在上下文丢失风险 | ⚠️ 不满意 |
| **模型配置摩擦** | #8891 和 #8893 指出内置 provider 元数据过时，且 Console 设置缺乏 per-agent 作用域 | ⚠️ 不满意 |
| **跨平台桌面需求** | #8444 — Linux 用户被迫使用 Docker，无原生桌面产物 | ⚠️ 不满意 |
| **正面：Telegram 论坛功能** | #8857 已合并；在 Telegram 超级群中实现了主题级会话隔离 | ✅ 满意 |
| **正面：媒体处理修复** | #8785 — 一次性修复了媒体预算/重新缩放相关的三个 bug | ✅ 满意 |

---

## 8. 待办事项追踪

以下 open issue 存在时间超过 5 天或具有重大用户影响，但暂无修复 PR：

| Issue | 存在时间 | 影响范围 | 所需行动 |
|-------|---------|---------|---------|
| [#8863](https://github.com/agentscope-ai/QwenPaw/issues/8863) — Windows ReMe 标签索引失败 | 3 天 | 高（阻断 Windows 用户使用记忆功能） | 维护者介入；大概率需要路径规范化修复 |
| [#8727](https://github.com/agentscope-ai/QwenPaw/issues/8727) — Responses 续写摘要失败 | 13 天 | 中（部分模型滚动时失效） | 调查 Responses API 中 `disable_thinking` 的语义行为 |
| [#8891](https://github.com/agentscope-ai/QwenPaw/issues/8891) — 缺少 GLM-5.3/5.4 上下文元数据 | 2 天 | 中（导致 token 预算配置错误） | 在 context table 中添加静态条目；更新 catalog fetcher |
| [#8877](https://github.com/agentscope-ai/QwenPaw/issues/8877) — 过载 SSE 绕过重试逻辑 | 2 天 | 中（负载下静默失败） | 检查流解析器中无状态错误的处理逻辑 |
| [#8881](https://github.com/agentscope-ai/QwenPaw/issues/8881) — 租户级记忆检索 | 2 天 | 低（架构问题；多租户场景） | 架构评审；可能列入 v2.4 |
| [#8444](https://github.com/agentscope-ai/QwenPaw/pull/8444) — Linux 打包 | 31 天 | 中（平台缺口） | PR 待 review/合并 |

---

*本日报基于 2026-11-26 QwenPaw（agentscope-ai/QwenPaw）的 GitHub 活动数据生成。数据来源：GitHub Issues 与 Pull Requests。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me translate this carefully, maintaining all the structure, tables, formatting, and technical accuracy.

Key things to remember:
- Output ONLY the translation, no preamble
- Preserve Markdown structure exactly
- Keep URLs, issue numbers, project names as-is
- Use natural technical Chinese
- No markdown fences around the whole output

Let me go through section by section and translate it.
</think>


# ZeroClaw 项目简报 — 2026-11-26

---

## 1. 今日概览

ZeroClaw 今日保持了**高强度的开发节奏**，过去 24 小时内共有 50 个 PR 和 11 个 issue 更新，显示出项目正同时在多个技术方向上稳步推进 v1.0.0 里程碑。核心进展包括：ACP 网关的 OIDC 身份认证与主体作用域重构、设备会话的守护进程持有刷新授权，以及 Goal 执行生命周期的完善。今日还新建了两个追踪器（v1.0.0 路线图和运行时拆分），为社区提供了更清晰的方向指引。今日未发布任何版本，项目仍处于大规模功能整合阶段。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

项目尚未发布任何版本。新的 v1.0.0 路线图追踪器（[#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712)）表明，后续版本发布将以里程碑形式组织，逐步替代 FND-001 §6 中原有的版本规划。

---

## 3. 项目进展

### 已合并/关闭项

| # | 类型 | 标题 | 关键变更 |
|---|------|-------|------------|
| [#11872](https://github.com/zeroclaw-labs/zeroclaw/pull/11872) | PR（修复） | fix(mcp): 对因 HTTP 会话过期而被拒绝的工具调用进行重放 | MCP 客户端现在能正确处理空闲驱逐或重启后 Streamable HTTP 服务器返回的 HTTP 404，自动开启新会话。 |
| [#12167](https://github.com/zeroclaw-labs/zeroclaw/issues/12167) | Issue（已关闭） | send_message_to_peer 忽略发送者自主级别 | 已确认为 S2 级安全漏洞；`readonly` 代理竟能代表对端发起对话轮次。修复后 `send_message_to_peer` 现在正确校验自主级别与操作配额。 |
| [#12107](https://github.com/zeroclaw-labs/zeroclaw/issues/12107) | Issue（已关闭） | Socket 在对话轮次结束前重新打开时展示被拆离的轮次回复 | 仪表盘现已跟踪对话中途的 Socket 关闭，并在轮次完成后重新加载对话记录。 |
| [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) | Issue（已关闭） | 实现 Telegram Bot API 10.1 富媒体消息 | 移至冷宫（icebox）；Telegram 传统兼容方案（Markdown 表格形式）被认为优先级较低。 |

### 活跃中的功能 PR（近期有更新）

| # | 标题 | 涉及范围 | 状态说明 |
|---|-------|-------|-------------|
| [#12440](https://github.com/zeroclaw-labs/zeroclaw/pull/12440) | feat(plugins): 添加宿主介导的代理唤醒分发 | 插件 WIT 接口、WASM 工具链 | 高风险、XL 规模；向 tool-plugin 世界新增 `dispatch.wake` |
| [#12653](https://github.com/zeroclaw-labs/zeroclaw/pull/12653) | feat(gateway): 为 /acp 添加 OIDC 认证、主体作用域及轮次重连回放 | 网关、ACP | 基于会话管理层层叠；支持仪表盘身份绑定与重连 |
| [#12654](https://github.com/zeroclaw-labs/zeroclaw/pull/12654) | feat(webchat): 接入 ACP 启动切换并将仪表盘传输层迁移至 /acp | Web、ACP | 引入 `acp_webchat_cutover` 网关开关 |
| [#12717](https://github.com/zeroclaw-labs/zeroclaw/pull/12717) | feat(oidc): 在证书账本中持有、密封并存储刷新授权 | 安全、OIDC | 守护进程持有 OIDC 刷新授权第 2–3 部分（ADR-017） |
| [#12716](https://github.com/zeroclaw-labs/zeroclaw/pull/12716) | feat(oidc): 在注册流程中增加刷新与撤销请求 | 安全、OIDC | 第 1 部分；向 Enrollment 结构体添加 IdP 请求 |
| [#11881](https://github.com/zeroclaw-labs/zeroclaw/pull/11881) | feat(goal): 添加资源记账的 Goal 执行生命周期 | Goal 系统 | V1 提案第 4/12 项；草稿状态，本地验证未通过 |
| [#12443](https://github.com/zeroclaw-labs/zeroclaw/pull/12443) | chore(channels)!: 将 IRC 和 Twitch 从主程序移至注册表插件 | 渠道插件、破坏性变更 | IRC 和 Twitch 改为 WASM 插件；影响现有部署方式 |
| [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) | feat(zerocode): 配置并选择规范提供商模型 | Zerocode、配置 | 编辑器基线模型蒙版；配置中指定精确模型引用 |
| [#12678](https://github.com/zeroclaw-labs/zeroclaw/pull/12678) | feat(tools)!: 移除 gemini_cli 编码工具 | 工具链、破坏性变更 | 移除已废弃的 Gemini CLI（已由 Antigravity CLI 替代） |

---

## 4. 社区热点话题

### 评论最活跃的 Issue（按评论数排序）

| # | 标题 | 作者 | 评论数 | 点赞数 | 重要性 |
|---|-------|--------|----------|-----------|--------------|
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | 配置元数据在本地化的 ZeroCode 和 Web 界面中仍显示英文 | Audacity88 | 5 | 0 | 国际化缺口；影响使用 ZeroCode CLI 和仪表盘的非英语用户 |
| [#12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697) | 追踪器：将 zeroclaw-runtime 拆分为更小的 crate | JordanTheJet | 3 | 1 | 架构重构追踪器；协调模块所有权划分 |
| [#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712) | 追踪器：v1.0.0 路线图 | JordanTheJet | 1 | 1 | 提升社区对发布节奏和优先级的可见性 |
| [#11119](https://github.com/zeroclaw-labs/zeroclaw/issues/11119) | 追踪器：实现 RFC #11027 中的接收方自决会话消息机制 | Audacity88 | 1 | 0 | 原生代理间会话消息契约；影响多代理工作流 |

**深层需求：** 国际化问题（#9363）凸显出项目在 Shell 字符串之外的 i18n 能力仍有不足，影响仪表盘和 ZeroCode UI 中配置元数据的展示。运行时拆分追踪器（#12697）反映了社区对更小型化、可组合 crate 的需求，以支持更轻量的部署方式和更清晰的模块边界。

### 最近更新最多的 PR（按更新量排序）

以下大型 PR 正处于活跃更新和审查中，体现了重大的工程投入：

- **ACP 网关现代化**（[#12653](https://github.com/zeroclaw-labs/zeroclaw/pull/12653)、[#12654](https://github.com/zeroclaw-labs/zeroclaw/pull/12654)）：将仪表盘 WebChat 和编辑器的共享会话生命周期迁移至 ACP，是一项重大的架构收敛工作。
- **Goal 系统**（[#11881](https://github.com/zeroclaw-labs/zeroclaw/pull/11881)、[#11880](https://github.com/zeroclaw-labs/zeroclaw/pull/11880)、[#11879](https://github.com/zeroclaw-labs/zeroclaw/pull/11879)）：12 项提案的 V1 路线图正在推进合同、配置语法和执行生命周期的相关工作。
- **OIDC 安全**（[#12716](https://github.com/zeroclaw-labs/zeroclaw/pull/12716)、[#12717](https://github.com/zeroclaw-labs/zeroclaw/pull/12717)）：守护进程持有刷新授权以实现持久化设备会话（ADR-017）。

---

## 5. 缺陷与稳定性

### 报告的缺陷（按严重程度排序）

| # | 严重程度 | 组件 | 标题 | 修复状态 |
|---|----------|-----------|-------|------------|
| [#12167](https://github.com/zeroclaw-labs/zeroclaw/issues/12167) | **安全 S2** | 运行时 | send_message_to_peer 忽略发送者自主级别 | **已修复** — `readonly` 代理不再能绕过操作配额检查 |
| [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | **S2** | 邮件渠道 | 重启后邮件渠道重复回复新邮件（UNSEEN 标志从未设置） | 进行中 |
| [#12703](https://github.com/zeroclaw-labs/zeroclaw/issues/12703) | **S2** | 邮件渠道 | 实时处理的消息始终保持 UNSEEN 状态，导致积压消息被重复处理 | 待处理 |
| [#12710](https://github.com/zeroclaw-labs/zeroclaw/issues/12710) | **S2** | CI/工具链 | Containerfile `check` 阶段在 StageX 镜像中构建失败 | 待处理 |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | **降级体验** | 配置、Web | 配置元数据在本地化界面中仍显示英文 | 待处理 |

### 分析

**邮件渠道的 UNSEEN 标志缺陷**是当前运营影响最大的待处理问题——任何重启都会导致邮件被重复回复，直接影响生产环境部署。关联 issue（#12703）表明问题根源在于实时模式启动时的积压消息处理逻辑。该修复应在下次发布前优先处理。

**Containerfile check 阶段构建失败**是 CI 阻塞问题：目前没有工作流构建 Containerfile 注释中引用的 StageX 镜像，说明存在工具链缺口。

---

## 6. 需求与路线图信号

### 预示战略方向的新建追踪器

| # | 标题 | 含义 |
|---|-------|-------------|
| [#12712](https://github.com/zeroclaw-labs/zeroclaw/issues/12712) | v1.0.0 路线图 | 首个结构化发布计划；社区可期待带有目标日期的版本化里程碑 |
| [#12697](https://github.com/zeroclaw-labs/zeroclaw/issues/12697) | 将 zeroclaw-runtime 拆分为更小的 crate | 重构计划将实现插件优先架构和更精简的二进制文件 |
| [#12707](https://github.com/zeroclaw-labs/zeroclaw/issues/12707) | 守护进程持有 OIDC 刷新授权（ADR-017） | 实现持久化设备会话无需重新认证；ACP 安全关键特性 |

### 下一版本可能的特性

基于 PR 成熟度和追踪器活跃度判断：

1. **ACP 作为主要网关传输协议** — [#12653](https://github.com/zeroclaw-labs/zeroclaw/pull/12653)、[#12654](https://github.com/zeroclaw-labs/zeroclaw/pull/12654) 表明 ACP 将替代旧的 `/ws/chat` 成为仪表盘和编辑器的首选传输层
2. **渠道插件化架构** — [#12443](https://github.com/zeroclaw-labs/zeroclaw/pull/12443) 将 IRC/Twitch 迁移为 WASM 插件；IRC/Twitch 用户需适应新的部署模式
3. **规范提供商模型选择** — [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) 支持在 Zerocode 中显式配置模型
4. **Qwen 视频输入（MP4）** — [#12578](https://github.com/zeroclaw-labs/zeroclaw/pull/12578) 为 Qwen 提供商添加视频文件支持

### 需关注的破坏性变更

- **#12443**：IRC 和 Twitch 从默认二进制中移除；运维人员需安装 WASM 插件
- **#12678**：移除 Gemini CLI 工具（Gemini CLI 已于 2026 年 6 月停用）

---

## 7. 用户反馈摘要

### 从 Issue 活动中识别出的痛点

| 主题 | 证据 | 影响 |
|-------|----------|-----------|
| **邮件渠道可靠性** | #11760、#12703（2 个 issue，活跃讨论中） | 重启后邮件幂等性丧失；生产环境运营风险高 |
| **国际化缺口** | #9363（5 条评论，持续存在） | 非英语用户看到配置元数据和 Web 界面中混杂的语言 |
| **插件生态迁移** | #12443、#12440 | 对 IRC/Twitch 用户为破坏性变更；需要迁移路径文档 |
| **仪表盘会话持久化** | #11727（zerocode 重开会话） | ZeroCode 用户重启后丢失开放会话列表；PR 中已修复 |
| **Telegram 功能对等** | #8415（已移至冷宫） | Telegram 机器人用户缺少富媒体消息支持；优先级较低 |

### 满意度信号

- 已关闭 issue #12107（被拆离对话轮次展示）和 PR #11727（会话列表持久化）表明项目正在积极改进面向用户的使用体验
- #12167 的安全漏洞修复体现了对代理自主性问题的快速响应
- 多位贡献者（tidux、JordanTheJet、Audacity88、vadelma-agent）正积极维护和推进代码库

---

## 8. 待办事项跟踪

### 需要维护者关注的问题

| # | 提出时间 | 标题 | 风险 | 备注 |
|---|-----|-------|------|------|
| [#8415](https://github.com/zeroclaw-labs/zeroclaw/issues/8415) | 约 5 个月前 | Telegram Bot API 10.1 富媒体消息 | 中 | 已移至冷宫；社区有 2 个 👍，可考虑重新评估 |
| [#11760](https://github.com/zeroclaw-labs/zeroclaw/issues/11760) | 约 1.5 个月前 | 邮件 UNSEEN 标志缺陷 | 中 | 进行中但无人认领；阻断生产邮件部署 |
| [#12710](https://github.com/zeroclaw-labs/zeroclaw/issues/12710) | 1 天前 | Containerfile check 阶段构建失败 | 中 | CI 阻塞；缺少 StageX 镜像构建工作流 |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | 约 4 个月前 | 配置元数据国际化 | 低 | 影响非英语用户；需要修复 PR |

### 需要作者或维护者处理的 PR

| # | 标题 | 阻塞原因 |
|---|-------|----------|
| [#11881](https://github.com/zeroclaw-labs/zeroclaw/pull/11881) | Goal 执行生命周期 | 本地验证未通过；需作者处理 |
| [#11510](https://github.com/zeroclaw-labs/zeroclaw/pull/11510) | Zerocode 确认配置删除/重置 | 需作者处理 |
| [#11727](https://github.com/zeroclaw-labs/zeroclaw/pull/11727) | Zerocode 重开会话 | 需作者处理 |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | 持久化会话提示附件 | 由资深贡献者提交；长期未合入，可能需要 rebase |

### 过时或阻塞中的追踪器

- **#8415**（Telegram 富媒体消息）：已搁置；可考虑 Telegram API 的演进是否值得重新启动
- **#12678**（Gemini CLI 移除）：等待合并确认；移除逻辑简单直接，但需要维护者签署破坏性变更标签

---

*本简报基于 2026-11-26 ZeroClaw 项目活动数据生成。数据来源：GitHub（zeroclaw-labs/zeroclaw）。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*