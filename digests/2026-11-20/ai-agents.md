# OpenClaw 生态日报 2026-11-20

> Issues: 462 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-20 03:41 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. I need to:

1. Translate all headings, body text, table content, list items, and blockquotes
2. Preserve the exact Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, usernames, version tags, and code identifiers as-is
4. Use natural technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation, no preamble or explanation

Let me translate section by section carefully.

Note: The user's rules mention "Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output." So I should not use any markdown fences at all.

Let me proceed with the translation:
</think>


# OpenClaw 项目速报 — 2026-11-20

## 1. 今日概览

OpenClaw 保持高度活跃，共追踪 462 个 issue 和 500 个 PR。本期快照显示过去 24 小时内处理了 500 个 PR（302 个 open，198 个 merged/closed），开发节奏稳健。本周期发布了两个新版本——v2026.11.10-beta.1 带来了通过 ClawHub 获取 Agent 模板和 OpenClaw ID 功能，v2026.11.6 则改善了升级路径的流畅度。Issue 队列反映出更新/Doctor 可靠性、SQLite worker 内存限制及高负载下的会话状态管理等持续性痛点。社区参与度保持强劲，关于崩溃循环、消息丢失场景和频道集成的讨论都很活跃。

## 2. 版本发布

### v2026.11.10-beta.1
**发布日期：** 2026-11-10

**亮点：**
- **通过 ClawHub 获取 Agent 模板**：使用包含技能文件夹捆绑包的单个 `CLAW.md` 清单，直接从 ClawHub 包添加 agents，由原生信任流程检查。 ([#195707](https://github.com/openclaw/openclaw/issues/195707), [#196322](https://github.com/openclaw/openclaw/issues/196322), [#196348](https://github.com/openclaw/openclaw/issues/196348))
- **OpenClaw ID**：通过统一的身份识别系统连接各个节点。

**作者：** @steipete | **贡献者：** @Patrick-Erichsen

---

### v2026.11.6
**发布日期：** 2026-11-06

**亮点：**
- **更流畅的升级**：桥接 2026.11.5 更新器到当前发布路径；在 Windows 上正确验证暂存插件依赖项。 ([#200662](https://github.com/openclaw/openclaw/issues/200662), [#200595](https://github.com/openclaw/openclaw/issues/200595))
- **更健壮的会话**：保持子代理和会话连续性的改进。

**作者：** @steipete | **贡献者：** @RomneyDa, @desksk

---

## 3. 项目进展

### 本日 Merged/Closed 的 PR

| PR | 描述 | 规模 | 备注 |
|----|------|------|------|
| [#202207](https://github.com/openclaw/openclaw/pull/202207) | fix(models): 停止推荐已淘汰的 Kimi K3 | XS | 移除过时的模型推荐 |
| [#202204](https://github.com/openclaw/openclaw/pull/202204) | fix(worktrees): 保留已完成聊天会话的 worktrees 供空闲窗口使用 | S | 解决会话恢复失败问题 |
| [#202198](https://github.com/openclaw/openclaw/pull/202198) | test: 将模板预览的追踪带入审查对话框 | S | 测试用例更新 |
| [#202206](https://github.com/openclaw/openclaw/pull/202206) | feat: Gateway 崩溃后恢复被中断的 QuickJS cells | XL | 高风险会话状态恢复（等待作者确认） |
| [#202189](https://github.com/openclaw/openclaw/pull/202189) | perf(skills): 索引发现监听根目录 | L | 技能扫描性能优化 |

### 推进中的 Active Open PR

| PR | 描述 | 优先级 | 状态 |
|----|------|--------|------|
| [#202209](https://github.com/openclaw/openclaw/pull/202209) | fix(voice): 在 Claude CLI 代理上接听电话、会议和 FaceTime | P1 | 需提供复现证明；需安全审查 |
| [#202013](https://github.com/openclaw/openclaw/pull/202013) | feat(templates): 从私有草稿登录 ClawHub | P2 | 等待维护者 review |
| [#202214](https://github.com/openclaw/openclaw/pull/202214) | feat: 查看回复后消除浏览器完成通知 | L | Web UI 增强 |
| [#202220](https://github.com/openclaw/openclaw/pull/202220) | fix: 阻止不可用的聊天小部件频繁读取历史 | L | Bug 修复，含 intake 标签 |
| [#186955](https://github.com/openclaw/openclaw/pull/186955) | fix(gateway): cron 运行启动的工作在父进程结束时终止 | P1 | 钻石龙虾评级；等待维护者 |

## 4. 社区热点话题

### 评论数最多的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 优先级 | 核心主题 |
|-------|------|--------|--------|----------|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 安装后 Doctor WAL 发布验证导致 11.3 更新半完成 | 29 | P0 | 更新可靠性、SQLite |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步代理持久化在高并发时阻塞 Gateway 事件循环 | 29 | P1 | 性能、可扩展性 |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) | 代码模式的工具目录在定时/cron 执行轮次中构建不完整 | 27 | P2 | MCP 工具、定时任务 |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix --non-interactive 在 macOS 上闲置 15+ 分钟 | 27 | P1 | Doctor 工具卡死 |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 启动回归：ready ~1030s vs ~410s（Windows） | 23 | P1 | 性能回归 |

### 潜在需求分析

**更新/Doctor 可靠性（主导主题）：**
多个高评论 issue（#197083、#200606、#200289、#198218、#164800）指向更新机制的系统性脆弱性。用户需要原子性、可验证的更新机制——要么完全成功要么干净回滚，不会让 Gateway 处于损坏状态。

**大规模性能：**
Issue #119720 突出显示了高并发时同步持久化导致的阻塞问题。社区需要无论会话历史长度或并发代理数量如何都能保持可预测延迟的系统。

**频道集成成熟度：**
Telegram 死信问题（#125764）、Matrix 消费端关闭（#191476）和 Slack 机器人循环（#177555）等问题表明，频道适配器需要更健壮的重试和恢复机制。

## 5. Bug 与稳定性

### Critical/Beta 发布阻塞问题

| Issue | 标题 | 严重程度 | 已复现 | 是否有修复 PR？ |
|-------|------|----------|--------|----------------|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | WAL 发布验证导致更新半完成 | 🦪 P0 | 是 | 否 |
| [#201796](https://github.com/openclaw/openclaw/issues/201796) | Cron agentTurn 无限重新调用已完成的工具调用 | 🦐 P1 | 是 | 否 |
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | 自 2026.10.10 起 Codex 助手补全无法恢复父会话 | 🦪 P1 | 是 | 否 |
| [#191847](https://github.com/openclaw/openclaw/issues/191847) | 大会话导致 512 MB SQLite worker OOM | 🦪 P1 | 是 | 否 |

### 值得关注的回归问题

| Issue | 标题 | 引入版本 | 影响范围 |
|-------|------|----------|----------|
| [#196199](https://github.com/openclaw/openclaw/issues/196199) | Codex 助手补全恢复回归 | 2026.10.10 | 用户无法使用助手 |
| [#191847](https://github.com/openclaw/openclaw/issues/191847) | 大会话下 SQLite OOM | 2026.10.10 | 每次轮次都失败 |
| [#169797](https://github.com/openclaw/openclaw/issues/169797) | 自 2026.9.9 起内存增长 2.5 倍，启动慢 3-5 倍 | 2026.9.9 | 低 CPU 主机资源耗尽 |
| [#198373](https://github.com/openclaw/openclaw/issues/198373) | Prompt 缓存命中率回归至 1% | 2026.11.x | API 成本激增 |

### 崩溃循环报告
- [#178359](https://github.com/openclaw/openclaw/issues/178359)：Doctor 卡住 15+ 分钟
- [#164800](https://github.com/openclaw/openclaw/issues/164800)：托管更新在 Doctor 后停滞
- [#153899](https://github.com/openclaw/openclaw/issues/153899)：Gateway 关闭等待完整 TimeoutStopSec

## 6. 功能请求与路线图信号

### 高价值功能请求

| Issue | 标题 | 评论数 | 优先级 | 信号强度 |
|-------|------|--------|--------|----------|
| [#159478](https://github.com/openclaw/openclaw/issues/159478) | 让 agents 选择性地参与群组对话 | — | P2 | 强：9 位贡献者 |
| [#179954](https://github.com/openclaw/openclaw/issues/179954) | memory：可配置的逐条分块路径 | 10 | P3 | 中等 |
| [#170997](https://github.com/openclaw/openclaw/issues/170997) | memory FTS：添加 CJK 二元语法分词器 | 8 | P2 | 国际市场 |
| [#130247](https://github.com/openclaw/openclaw/issues/130247) | Cron 任务：添加 --until / --max-runs 支持 | 10 | P3 | 常见企业需求 |
| [#150029](https://github.com/openclaw/openclaw/issues/150029) | 使自动化 Inspect 链接可配置 | 8 | P3 | UX 打磨 |

### 功能趋势
- **群组对话智能**：多个 PR（#159478、#177555）处理选择性参与问题——大概率即将推出
- **语音/会议集成**：PR #202209 显示正在积极开发 FaceTime/Zoom/Teams 接听功能
- **模板市场**：v2026.11.10-beta.1 中的 ClawHub 集成表明战略性投入
- **CJK 语言支持**：FTS 分词器请求表明国际用户群不断增长

## 7. 用户反馈摘要

### 痛点

**更新脆弱性（反馈最多）：**
> "从 2026.11.1 到 2026.11.3 的托管 npm 升级激活了新核心，然后安装后 Doctor 失败……恢复了一个可服务的 11.3 Gateway，但外部插件……"
— [#197083](https://github.com/openclaw/openclaw/issues/197083)

**内存压力：**
> "在单 CPU 主机上，2026.9.9 的 Gateway 比 2026.9.4 多用约 2.5 倍内存……启动和首次回复慢 3–5 倍"
— [#169797](https://github.com/openclaw/openclaw/issues/169797)

**消息丢失：**
> "Telegram `sendMessage` 的瞬时网络故障会在恰好一次尝试后**永久死信**"
— [#125764](https://github.com/openclaw/openclaw/issues/125764)

### 满意度信号
- @steipete、@Patrick-Erichsen、@sukhdeepjohar 等人的活跃 PR 参与表明核心贡献者参与度良好
- ClawHub 模板等高级工作流的功能请求（#202013）表明用户正在采用进阶功能
- 技能发现索引（#202189）等性能 PR 回应了真实运维痛点

## 8. 待办关注区

### 长期未回复的重要 Issue（超过 14 天无更新，高优先级）

| Issue | 标题 | 存在时长 | 最后更新 | 评论数 | 阻塞原因 |
|-------|------|----------|----------|--------|----------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞事件循环 | 107 天 | 2026-11-19 | 29 | 需提供原始复现 |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | Telegram 单次失败后死信 | 94 天 | 2026-11-20 | 15 | 需产品决策 |
| [#141172](https://github.com/openclaw/openclaw/issues/141172) | Run 泄漏 agent.run.started 事件 | 74 天 | 2026-11-19 | 13 | FK 失败调查 |
| [#155868](https://github.com/openclaw/openclaw/issues/155868) | Agent 源运行获得的工具列表减少 | 59 天 | 2026-11-19 | 10 | 需安全审查 |
| [#112638](https://github.com/openclaw/openclaw/issues/112638) | session.maintenance enforce 模式无上限 | 121 天 | 2026-11-19 | 12 | 需产品决策 |
| [#164559](https://github.com/openclaw/openclaw/issues/164559) | agent_end 钩子在每次尝试而非每个运行时触发 | 48 天 | 2026-11-19 | 9 | 需产品决策 |
| [#153899](https://github.com/openclaw/openclaw/issues/153899) | Gateway 关闭等待完整 TimeoutStopSec | 61 天 | 2026-11-19 | 10 | 需补充信息 |

### 需要维护者关注的 PR

| PR | 标题 | 存在时长 | 状态 | 阻塞项 |
|----|-------|----------|------|--------|
| [#186955](https://github.com/openclaw/openclaw/pull/186955) | fix(gateway): cron 子工作不随父进程终止 | 23 天 | ⏳ 等待维护者 | P1 钻石龙虾 |
| [#202013](https://github.com/openclaw/openclaw/pull/202013) | feat(templates): 从草稿登录 ClawHub | 1 天 | 👀 等待维护者 review | 已提供复现证明 |
| [#202209](https://github.com/openclaw/openclaw/pull/202209) | fix(voice): 在 Claude CLI 上接听电话 | 0 天 | 📣 需提供证明 | 需安全审查 |
| [#202200154](https://github.com/openclaw/openclaw/pull/200154) | fix(agents): 长会话卡住且无可用 profile | 4 天 | ⏳ 等待维护者 | P1 金虾 |

---

**速报生成时间：** 2026-11-20  
**数据来源：** [openclaw/openclaw](https://github.com/openclaw/openclaw)  
**统计数据：** 462 个 issue，500 个 PR，2 个版本发布（24 小时窗口）

---

## 横向生态对比

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve all Markdown structure exactly
3. Keep URLs, code spans, numbers, dates, project names, slugs, version tags, file paths, API identifiers, issue/PR references verbatim
4. Use natural technical Chinese register

Let me translate section by section carefully.

Let me work through this carefully, maintaining the structure and converting to natural Chinese technical language.

---

# Personal AI Agent Open-Source Ecosystem: Cross-Project Comparison Report

# Personal AI Agent 开源生态：跨项目对比报告


Now I'm translating the key technical terminology and concepts into their natural Chinese equivalents - terms like "high-velocity growth phase," "converging on shared engineering challenges," and "privacy-first deployment models" need to be rendered in idiomatic Chinese that a developer would recognize.
</think>


# Personal AI Agent 开源生态：跨项目对比报告

## 2026-11-20

---

## 1. 生态总览

个人 AI 助手与 Agent 开源生态正处于**高速发展阶段**，四个追踪项目的日活跃度均十分可观，并在工程挑战上呈现高度趋同。领域成熟度已从单纯的 LLM 集成演进至**复杂多 Agent 编排、插件生态与隐私优先部署模式**。OpenClaw 与 Hermes Agent 是其中最为成熟的两大平台，版本节奏稳健、功能覆盖面广；QwenPaw 和 ZeroClaw 则以本地模型支持、多渠道集成和细粒度安全管控为方向快速迭代。贯穿四个项目，最大痛点集中在**更新可靠性、内存管理与渠道集成稳健性**——这说明整个生态正在共同应对生产级稳定性挑战，而非单纯追求功能新颖性。

---

## 2. 活跃度对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **Issue 总数** | 462 | ~1,400+（估算） | ~900+（估算） | ~350+（估算） |
| **24小时内 Issue 更新** | — | 50 | 21 | 12 |
| **24小时内 Issue 变动** | 330 个活跃 | 50 个待处理，0 个关闭 | 8 个待处理，13 个关闭 | 10 个待处理，2 个关闭 |
| **24小时内 PR 更新** | — | 50 | 39 | 50 |
| **24小时内 PR 变动** | 302 个待处理 | 45 个待处理，5 个已合并 | 27 个待处理，12 个已合并 | **50 个待处理，0 个已合并** |
| **24小时内新发版** | **2**（v2026.11.10-beta.1、v2026.11.6） | **2**（v0.23.3、v0.23.2+canary） | **0** | **0** |
| **24小时内安全修复** | 0 | 1（BlueBubbles 密码泄露） | 0 | 0 |
| **P1/P2 级缺陷待处理** | 8+ | 6+ | 3+ | 6+ |
| **社区参与度信号** | 高（Issue 讨论可达 84 条） | 非常高（每日发版） | 高（缺陷关闭率高） | 非常高（50 个 PR 在推进） |
| **健康度估算层级** | 🟢 稳定迭代中 | 🟢 可投产 | 🟢 趋于稳定 | 🟡 高变动期 |

**注：** OpenClaw 的 issue/PR 数量为累计追踪值，非 24 小时增量。ZeroClaw 的 50 个待处理 PR 与零合并量表明可能存在合入瓶颈。

---

## 3. OpenClaw 的定位

### 相比同类项目的优势

OpenClaw 作为本生态圈的**核心参考实现**，累计 issue/PR 体量最大，社区参与模式也最为成熟。主要优势包括：

- **通过 ClawHub 构建的成熟插件生态**：v2026.11.10-beta.1 引入了 Agent 模板（附带技能包与原生信任验证）——这是 QwenPaw（Plugin SDK 1.1）和 ZeroClaw（多 registry 来源）正在积极建设的方向。
- **统一身份体系（OpenClaw ID）**：跨平台节点互联层，Hermes Agent 和 QwenPaw 尚未公布对应规划。
- **社区参与深度最高**：Issue 讨论常见 84 条回复（#143547），说明技术用户群体高度活跃，愿意深入调试复杂交互问题。

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **核心理念** | Agent 模板市场 + 统一 ID | 隐私优先，本地 Ollama 优先 | Agent 作用域抽象 + 多记忆后端 | Operator 托管凭证 + 规范 V5 Registry |
| **更新策略** | 托管更新器 + Doctor 工具 | Canary + Stable 双轨发版节奏 | 滚动更新 | 发版前冻结 |
| **存储模型** | SQLite + 每会话独立 Worktree | SQLite + 插件管理状态 | 会话存储 + 分页历史 | Transcript 行替换 |
| **渠道模型** | 直连渠道适配器 | Gateway 统一消息处理 | 各平台专属渠道适配器 | Operator 作用域服务凭证 |
| **发版节奏** | Beta + 补丁版本 | 每周 Stable + Canary | 稀疏（v2.3.0.post1） | v0.9.1 前置阶段 |

### 社区规模对比

- **OpenClaw**：累计社区体量最大（462 条 Issue，500 个 PR）。活跃度高，但缺陷关闭速率相对较慢。
- **Hermes Agent**：PR 合并速度最快，按版本批量整合（v0.23.3 整合了约 370 个 PR）。Issue 量约 1,400+ 条，用户问题反馈面更广。
- **QwenPaw**：缺陷关闭率高（今日 21 条 Issue 中解决 13 条）。社区规模与 OpenClaw 相当。
- **ZeroClaw**：追踪体量最小，但 PR 密度最高（350 条 Issue 对应 50 个待处理 PR），说明贡献者集中度高。

---

## 4. 跨项目共同技术关注点

### 共性需求

| 需求 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | 重要程度 |
|---|---|---|---|---|---|
| **更新可靠性 / 原子升级** | WAL 验证遗留中间状态（#197083） | Gateway 合入后会话回归（#143547） | 守护进程因临时文件堆积而挂起（#12570） | 启动时因运行时 trace 文件泄漏而挂起（#12570） | **Critical** — 各项目均面临升级脆弱性问题 |
| **大规模场景下 SQLite/内存压力** | 512 MB SQLite Worker OOM（#191847） | 心跳轮询器每 5 秒全表扫描 state_meta（#155028） | — | — | **High** — 持久层扩展性是系统性挑战 |
| **渠道集成可靠性** | Telegram 死信积压（#125764），Matrix 关闭问题（#191476），Slack 循环（#177555） | QQ 消息静默丢失（#8313），小艺无状态帧（#8394） | QQ 流式输出间隙（#6421） | Telegram 语音消息阻塞全量消息（#12597） | **Critical** — 多渠道接入暴露了集成层的脆弱性 |
| **会话/状态管理** | 空闲窗口 Worktree 保留策略（#202204） | Desktop 无法恢复另一进程的会话（#144466） | 追加式会话存储全面重构（#8532） | Transcript 行时间戳保留（#11676） | **High** — 并发/多进程访问下的状态持久性 |
| **本地模型 / 隐私优先支持** | — | Ollama 工具调用格式错误（#153962） | llama-server 孤儿进程（#8830） | llama.cpp 自定义 Provider URL 错误（#11296） | **High** — 本地模型集成在各项目中均不成熟 |
| **记忆管理** | AgentMemory 后端支持（#3565） | 独立记忆写入模型（#7719） | OpenViking 记忆清理（#8588） | — | **Medium** — 记忆抽象正成为标准功能 |
| **插件生态扩展** | ClawHub 模板 | 带原生资产发布的插件目录（#158077） | Plugin SDK 1.1（#8764） | 多 Registry 来源（#12216） | **High** — 四个项目均在构建插件基础设施 |
| **成本/预算可见性** | — | Profile 成本限制与全局预算不匹配（#10635） | — | — | **Medium** — 消费透明度正成为用户诉求 |

**解读：** 生态圈正面临**汇聚式危机**，集中在更新机制、渠道可靠性和会话状态管理三个领域——这些问题在项目达到生产规模后才逐步显现。更新可靠性是最紧迫的跨项目议题，四个平台表现症状各异，但根因相同：**缺乏事务性保障的有状态原地升级**。

---

## 5. 差异化分析

### 功能重点

| 重点领域 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **首要差异化点** | ClawHub 模板市场 + OpenClaw ID | 隐私优先架构 + Desktop 备份/迁移 | Agent 作用域抽象 + 多记忆后端 | Operator 托管凭证 + 规范 V5 Registry |
| **安全路线** | 插件包原生信任流 | BlueBubbles 凭证泄露修复；Agent 来源工具名册限制 | AUTO/SMART 级别 Shell 命令检测 | Operator 作用域服务凭证，不向模型暴露（RFC） |
| **企业级信号** | 更新可靠性、会话隔离 | 跨进程会话恢复 | — | Operator 托管服务凭证、二进制大小管控 |
| **消费级信号** | ClawHub 模板、语音集成 | Desktop 应用 + 本地模型支持 | UI/UX 优化、移动端安全区 | Telegram/Discord/Matrix 审批流程简化 |
| **插件模型** | ClawHub 包 + CLAW.md 清单 | 插件目录 + OS 原生发行版 | Plugin SDK 1.1 + 生命周期管理 | 多 Registry 来源 + 来源级信任 |

### 目标用户画像

| 用户类型 | 最佳匹配 | 佐证 |
|---|---|---|
| **企业 / 高级专业用户** | OpenClaw | ClawHub 模板、OpenClaw ID、复杂会话管理 |
| **隐私优先 / 本地优先用户** | Hermes Agent、QwenPaw | Ollama 支持、本地模型插件、Desktop 备份/迁移 |
| **管理多渠道 Bot 的开发者/运营者** | ZeroClaw | Operator 托管凭证、Telegram/Discord/Matrix 适配器、MCP 视频路由 |
| **插件生态建设者** | OpenClaw、QwenPaw | ClawHub vs. Plugin SDK 1.1 成熟度对比 |
| **追求模板市场的跨平台用户** | OpenClaw | 唯一具备模板分发基础设施的项目 |

### 技术架构差异

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|---|---|---|---|---|
| **架构范式** | 单体架构 + Worktree 隔离 | Gateway 统一架构（2026 年 10 月迁移） | 模块化 + 插件后端抽象 | Registry 驱动 + 凭证作用域化 |
| **状态隔离策略** | 对话级 Worktree + 有界委托 | 统一 Gateway + 会话串扰问题 | 分页会话存储 + Turn 分支 | Transcript 行替换 + `created_at` 保留 |
| **渠道集成深度** | 飞书优先，Telegram/Discord/Matrix 成熟 | Telegram/Discord/Matrix 成熟，QQ/小艺不成熟 | 飞书优化，QQ/微信成熟 | Telegram 优先，审批 UX 目标对齐 |
| **更新机制** | Doctor 工具 + 分阶段插件依赖 | Canary/Stable 双轨 + 托管 npm | 滚动更新 | 发版前门控 + 二进制大小上限 |

---

## 6. 社区势能与成熟度

### 活跃度层级

| 层级 | 项目 | 指标 |
|---|---|---|
| **🚀 可投产 / 快速迭代** | Hermes Agent | v0.23.3 Stable 发布，v0.23.2 以来合并约 370 个 PR，24 小时内 2 次发版，1 个安全修复当日合入，每周节奏 |
| **🟢 活跃开发 / 功能建设** | OpenClaw | 500 个 PR，462 条 Issue，高评论量社区互动，ClawHub 基础设施上线 |
| **🟢 高吞吐量 + 趋于稳定** | QwenPaw | 今日关闭率 13/21，XXXL 会话存储 PR，Plugin SDK 1.1，首次贡献者入口健康 |
| **🟡 高变动 / 合入瓶颈风险** | ZeroClaw | 50 个待处理 PR，24 小时内零合入，2 个 S1 级缺陷待处理，4 个 XL 级 PR 评审中，Pre-release 阶段 |

### 快速迭代项目
- **Hermes Agent**：发版节奏最快；按版本批量合入大量 PR。安全修复响应（BlueBubbles 密码泄露）当日即合入。
- **QwenPaw**：缺陷关闭速度快（21 条 Issue 中解决 13 条），说明维护文化积极。

### 趋于稳定项目
- **OpenClaw**：体量大但遗留 Issue 多（#119720 等多条 Issue 超 100 天无回应）。核心架构已成熟，工作重心转向打磨与可靠性提升。

### 瓶颈风险项目
- **ZeroClaw**：50 个待处理 PR，24 小时内零合入，表明维护者评审存在瓶颈或有意暂停合入。两条 S1 级缺陷（Telegram 服务中断、守护进程启动挂起）需优先处理。

---

## 7. 趋势信号

### AI Agent 开发者与技术决策者关注事项

| 趋势 | 证据 | 影响 |
|---|---|---|
| **1. 隐私优先与本地模型支持已成为基础预期** | 四个项目均在积极推进 Ollama、llama.cpp、本地 Provider 支持。Hermes Agent 明确以本地 Ollama 为优先；QwenPaw 管理 `llama-server` 进程；ZeroClaw 修复自定义 Provider URL；OpenClaw 暂无本地模型工作，但用户诉求明显。 | 本地推理支持已非差异化优势，而是**必备能力**。缺乏此功能的项目将面临持续的用户压力。 |
| **2. 更新可靠性是整个生态的核心瓶颈** | 四个项目独立遭遇更新脆弱性问题。OpenClaw 的 Doctor 工具、Hermes Agent 的 Gateway 迁移回归、ZeroClaw 启动时临时文件泄漏、QwenPaw 守护进程稳定性问题——根因一致：**缺乏事务性保障的有状态原地升级**。 | 目前没有单个项目解决了原子升级问题。这是生态的重大工程机遇，也是生产部署的主要风险点。 |
| **3. 插件生态正在向 Registry + 信任模型收敛** | OpenClaw（ClawHub 含 CLAW.md 清单 + 原生信任）、Hermes Agent（插件目录含 OS 原生发行版）、QwenPaw（Plugin SDK 1.1 含生命周期钩子）、ZeroClaw（多 Registry 来源 + 来源级信任）。 | 社区正在标准化**签名、Registry 索引、平台专属二进制**的插件模式。该模式有望在未来 3–6 个月内进一步在各项目间整合统一。 |
| **4. 多渠道可靠性仍是普遍未解决的难题** | Telegram、QQ、Matrix、Discord、Slack、小艺——每种渠道适配器至少在两个项目中报告了可靠性问题。症状包括：静默丢消息、单次失败后死信积压、会话隔离失败。 | 渠道集成是生产部署中风险最高的表面层。生态亟需统一的**重试队列、死信处理、渠道级熔断**工具。 |
| **5. 会话与记忆管理正在经历架构重构** | 四个项目均在会话存储上展开主动工作：OpenClaw（Worktree 保留策略）、Hermes Agent（跨进程会话恢复）、QwenPaw（分页历史 + Turn 分支）、ZeroClaw（有界委托持久化）。记忆后端也在趋同：OpenClaw 的 AgentMemory、Heremes Agent 的独立记忆写入模型、QwenPaw 的多记忆后端。 | 会话与记忆抽象是 2026–2027 年的重点领域。率先交付清晰可扩展的会话模型与可配置记忆后端的项目，将在多 Agent 工作流场景中占据竞争优势。 |
| **6. 企业级安全与凭证管理正在兴起** | ZeroClaw 的 Operator 托管凭证 RFC、Hermes Agent 的 Agent 来源工具名册限制、OpenClaw 的原生插件信任流、QwenPaw 的 Shell 命令检测缺陷。 | 生态正从"个人助手"向"企业 Agent 平台"过渡。凭证隔离、工具名册安全与审计能力正成为采购决策的关键指标。 |
| **7. 仪表盘与可观测性属于滞后功能** | OpenClaw（更新可靠性）、Hermes Agent（成本预算可见性）、QwenPaw（成本概览栏缩放）、ZeroClaw（二进制大小追踪）均存在仪表盘/可观测性缺口。 | 可观测性工具是跨项目关注度最低的领域。这为工具厂商或贡献者提供了跨平台监控的切入点。 |

### 战略建议

1. **面向平台集成方**：以更新机制稳健性作为项目评估的核心指标——这是目前四个项目共同的薄弱环节。请向维护者明确索要回滚保证与事务性升级保证。

2. **面向插件开发者**：优先瞄准 Hermes Agent 的 Plugin SDK 1.1 或 OpenClaw 的 ClawHub 模型——两者均在构建标准化的 Registry 与生命周期管理。ZeroClaw 的多来源 Registry 方案架构上有潜力，但尚处 v1.0 前阶段。

3. **面向企业评估方**：Hermes Agent 和 OpenClaw 是当前最接近生产就绪的两个项目。ZeroClaw 的 Operator 托管凭证模型在架构上适合多租户部署，但需稳定性验证。QwenPaw 适合优先考虑飞书/QQ 集成与本地模型部署的团队。

4. **面向贡献者**：会话/记忆管理与更新可靠性是影响力最高的贡献方向——四个项目在这两个领域均有大量开放 Issue，解决方案将惠及整个生态。

---

*报告生成日期：2026-11-20。数据来源：GitHub 活跃度统计，对应仓库：openclaw/openclaw、NousResearch/hermes-agent、agentscope-ai/QwenPaw、zeroclaw-labs/zeroclaw。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, version tags, file paths as-is
5. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

Title: Hermes Agent Project Digest — 2026-11-20
→ Hermes Agent 项目日报 — 2026-11-20

Let me go through carefully and translate everything into natural technical Chinese.

I need to be careful about:
- Technical terms that have established Chinese translations
- Maintaining the exact table structure
- Preserving all URLs and identifiers
- Using appropriate Chinese punctuation
- Making it read naturally for a Chinese developer audience

Let me start translating:
</think>


# Hermes Agent 项目日报 — 2026-11-20

## 1. 今日概览

Hermes Agent 今日保持高开发强度，过去 24 小时内 **更新了 50 条 issue 和 50 条 PR**，反映出 v0.23.3 版本发布期间的高度活跃。昨日发布的补丁版本（v0.23.3）汇总了自 v0.23.2 以来的约 **370 个 PR**，为 CLI、Desktop、Docker 和 Hermes Cloud 提供了稳定的版本基础。社区活跃度较高，今日有 2 个新版本发布，5 个 PR 已合并/关闭，另有 45 个 PR 处于开放状态待审。整体项目健康度良好，但网关、桌面端和会话管理领域的若干 P2 级别 bug 正吸引大量关注。

---

## 2. 版本发布

### v0.23.3 — Hermes Agent（2026 年 11 月 19 日）
**发布日期：** 2026-11-19

**补丁版本**，汇总了自 v0.23.2 以来合并的约 **370 个 PR**。该版本在所有分发渠道均可获取：
- CLI 和安装程序
- Microsoft Store 应用
- Docker 镜像
- Hermes Cloud

> 完整的更新日志将在 **v0.24.0** 发布时附带。

📦 [Release v0.23.3](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.3)

### v0.23.2+canary.20261119T064637Z — Canary 构建（2026 年 11 月 19 日）
面向前沿用户的 Canary/预发布构建。

📦 [Canary Release](https://github.com/NousResearch/hermes-agent/releases/tag/v0.23.2+canary.20261119T064637Z)

---

## 3. 项目进展

### 今日合并/关闭的 PR（5 个）

| PR | 类型 | 组件 | 描述 |
|---|---|---|---|
| **#155459** 🔒 | security | agent, plugins | **[已修复]** BlueBubbles 密码已从网关日志中移除 — 防止 webhook 和出站 REST 调用中的凭证明文泄露 |
| **#129602** | bug | cron | **[已修复]** Cron 现在跳过格式错误的 Bot Chat 回执（字段缺失），不再阻塞延迟队列 |
| **#156330** | feature | cli, desktop, dashboard | **桌面备份与迁移** — 新增设置页面，支持备份 agent 或迁移至 Hermes Cloud，并提供撤销功能 |
| **#129610** | bug | cron | **[已修复]** Cron 在使用 `context_from` 选择时现在跳过空回复归档，修复了连续性问题 |
| *（另有 1 个已关闭 PR）* | — | — | — |

### 今日推进中的开放 PR（重点精选）

| PR | 类型 | 组件 | 描述 |
|---|---|---|---|
| **#158089** | bug | agent, openai | Token 用量统计修复 — 报告 token 位置不标准的 provider（choice 内 vs. 终端事件）现在可正确统计 |
| **#158088** | bug | desktop | 桌面搜索结果现在携带 profile 上下文至合成行，修复了搜索中的 profile 泄露问题 |
| **#158078** | bug | cli, skills | Skills 更新现可报告本地副本何时停止接收捆绑更新 |
| **#158083** | bug | dashboard, skills | `/learn` skill 切换现使用路由状态而非 URL，防止历史污染和控制字符注入 |
| **#158087** | feature | plugins | 新增插件：**instabox**（终端后端集成） |
| **#158091** | feature | plugins | 新增插件：**z0live**（自托管实时语音栈） |
| **#158092** | feature | plugins | 新增插件：**Interfaze**（托管式 InterfazeAI agent 连接器） |
| **#158082** | feature | plugins | 新增插件：**quote-selection**（桌面标注插件） |
| **#158079** | feature | plugins | BlazePhoenix 插件更新，新增 `blazephoenix_usd_value` 工具 |
| **#158077** | feature | cli, plugins | 插件目录现在为合适的 OS/CPU 安装经过审核的原生发布产物 |
| **#156305** | perf | cli, cron, dashboard | 重连优化 — 客户端重连时减少往返次数 |

🔗 [所有开放 PR](https://github.com/NousResearch/hermes-agent/pulls?q=is%3Apr+is%3Aopen+updated%3A%3E%3D2026-11-19)

---

## 4. 社区热点话题

### 评论最多的 Issue（按评论数排序）

| Issue | 评论数 | 类型 | 组件 | 话题 |
|---|---|---|---|---|
| **#143547** | **84** | bug/feature | gateway, cron, desktop | **[热点]** 统一网关合入后问题 — 网关整合（#106742）后的关键会话/profile 管理回归问题 |
| **#131859** | **64** | bug | auth | **[阻塞]** 无法通过 API 创建 pull request — `CreatePullRequest` 权限错误，影响 fork |
| **#155028** | 9 | perf | gateway, cron | 性能问题：心跳轮询器每 5 秒全表扫描 `state_meta`；脚本门控 cron 触发后遗留空会话 + 约 35 KB 策略回执 |
| **#150445** | 5 | bug | agent, anthropic, openai | 托管 worker 在初始化时崩溃，当回退落到 `anthropic_messages` 时 |
| **#144466** | 5 | bug | gateway, desktop | Desktop 无法打开其他进程写入的会话（session.resume 返回 `not_found`） |
| **#91057** | 5 | feature | desktop, browser | 将浏览器 profile/cookies 导入 Hermes Desktop（支持 Chrome/Arc/Brave/Edge/Firefox） |

### 热点话题分析

**🔴 #143547 — 统一网关回归问题（84 条评论）**
目前讨论最热烈的话题。2024 年 10 月 14 日，统一网关（#106742）将所有本地对话整合到一个网关进程中。然而，**合入后问题持续存在**，影响了 CLI、TUI、Desktop、API server、编辑器、消息机器人、cron 任务、看板卡片和群聊。该 issue 延续了 #134889 的讨论，表明这是一个复杂的多方面回归问题，团队正在积极处理。

**🔴 #131859 — API 权限错误阻塞 PR 创建（64 条评论，P3/阻塞）**
用户无法从 fork 向仓库创建 pull request。`CreatePullRequest` 权限错误阻塞了贡献者工作流。该 issue 标记为 `blocked` 和 `cause/upstream`，表明正在调查 GitHub API 范围或 token 权限问题。

**🟡 #91057 — 浏览器 Profile 导入（5 条评论）**
一个备受期待的功能请求，希望将 Chrome、Arc、Brave、Edge 和 Firefox 的认证浏览器会话（cookies/profiles）导入 Hermes Desktop。这将支持在认证后的网页上运行工作流 — 对注重隐私的用户而言是重大生产力提升。

🔗 [Issue #143547](https://github.com/NousResearch/hermes-agent/issues/143547) | [Issue #131859](https://github.com/NousResearch/hermes-agent/issues/131859) | [Issue #91057](https://github.com/NousResearch/hermes-agent/issues/91057)

---

## 5. Bug 与稳定性

### 今日报告的高优先级（P2）Bug

| Issue | 组件 | 严重度 | 描述 | 有修复 PR？ |
|---|---|---|---|---|
| **#155028** | gateway, cron | P2 | 性能问题：心跳轮询器每 5 秒全表扫描 `state_meta`；脚本门控 cron 触发后遗留空会话 + 约 35 KB 回执 | — |
| **#150445** | agent | P2 | 托管 worker 在初始化时崩溃，当初始化回退落到 `anthropic_messages` 时（AttributeError） | — |
| **#144466** | gateway, desktop | P2 | Desktop 无法打开其他进程写入的会话 — `session.resume` 返回 `not_found` | — |
| **#153962** | agent, ollama | P2 | **关键：** 本地 Ollama 模型通过 Hermes 发出格式错误的 tool call — 完全阻塞纯本地/隐私优先使用 | — |
| **#147070** | agent | P2 | `_recover_rate_limit` 在 Anthropic 速率限制时最长睡眠 600 秒才轮换凭证池 | — |
| **#152435** | cli | P2 | Windows 网关从不加入 kill-on-close 任务 — 子进程在 `hermes gateway stop` 后继续存活 | — |
| **#147606** | gateway | P2 | Docker：依赖环境从不复用 — 每次启动都重新安装，磁盘空间被填满 | — |
| **#157667** | desktop | P2 | 大段粘贴的文件未带 .txt 扩展名，导致预览 404 | — |
| **#158023** | desktop | P2 | 网关所属群聊在 @user 提及时从不显示"需要你"（文档承诺的功能） | — |

### 安全问题

| Issue | 类型 | 状态 | 描述 |
|---|---|---|---|
| **#155459** 🔒 | security | **已合并** | **[已修复]** BlueBubbles 密码以明文形式记录在日志中 — 已修复 webhook 和出站 REST 调用两种情况 |
| **#149586** | security | open | NixOS 模块创建的 hermesHome 目录权限为组可写，CLI 发现机制拒绝接受，重建后导致不安全权限 |

### 值得关注回归

**#158043**（P2）— 网关后台进程完成通知在行边界对齐截断尾部时截断为 0 字符。已完成 `waitfor` converge-row 的 exit-0 JSON 被丢弃。

---

## 6. 功能请求与路线图信号

### 获得关注的用户请求功能

| Issue | 组件 | 优先级 | 请求 | 近期纳入可能性 |
|---|---|---|---|---|
| **#91057** | desktop, browser | P2 | 从 Chrome/Arc/Brave/Edge/Firefox 导入浏览器 profiles/cookies | 高 — 用例清晰，5 条评论 |
| **#112627** | cli, config | P3 | 跨 profile 的配置继承（减少 50 个 profile 配置为仅需增量配置） | 中 — 标记 needs-decision |
| **#158090** | plugins, tts | P3 | 允许在转录上传大小检查前替换音频 | 中 — 插件钩子增强 |
| **#92774** | agent, cli, plugins | P3 | 提高 `register_system_prompt_section()` 限制（当前每段 4k，总计 8k） | 低 — 破坏性变更风险 |

### 插件生态扩展

今日 PR 活动显示社区插件开发活跃：
- **z0live** — 自托管实时语音栈集成
- **instabox** — 终端后端插件
- **Interfaze** — 托管式 AI agent 连接器
- **quote-selection** — 桌面标注插件
- **BlazePhoenix 更新** — 新增 `blazephoenix_usd_value` 工具

**趋势：** 插件目录随着原生可执行文件支持（#158077）快速成熟，表明团队正在投资可扩展性建设。

🔗 [功能请求 #91057](https://github.com/NousResearch/hermes-agent/issues/91057) | [功能请求 #112627](https://github.com/NousResearch/hermes-agent/issues/112627)

---

## 7. 用户反馈摘要

### 从 Issue 追踪器识别的痛点

**🔴 网关统一化后遗症**
#106742 统一网关迁移（10 月 14 日）造成广泛回归，影响会话管理、跨 profile 访问和多进程场景。用户反馈：
- 一个进程创建的会话无法被另一进程读取
- Profile 范围的 bot 中继写入分散到多个位置
- TUI 无法恢复 Desktop 应用的聊天
- 跨设备 agent 私信卡住

**🔴 本地模型支持缺口**
Issue #153962 强调本地 Ollama 模型通过 Hermes 发出格式错误的 tool call，"完全阻塞了使用纯本地模型的 agent 行为——这是一个核心用例（隐私优先、离线、无需 API key）"。这对注重隐私的用户群体是关键缺口。

**🟡 Windows 平台成熟度不足**
多个 Windows 特定问题：网关停止时进程清理（#152435）、SSH 交互式终端失败（#149812）、NixOS 模块与 CLI 发现机制冲突导致权限问题（#149586）。

**🟡 文档不一致**
Issue #158040 报告 `hooks.md` 在 `pre_llm_call` 注入位置描述上自相矛盾（append vs. prepend），造成用户困惑。

### 用户满意的用例

- **插件生态增长** — 多个社区提交表明外部贡献活跃
- **备份与迁移功能**（#156330）— 用户获得 agent 可移植性的掌控
- **重连优化**（#156305）— 移动网络/不稳定网络用户受益于减少的往返次数

---

## 8. 积压待办关注

### 长期未响应的重要 Issue

| Issue | 存在时间 | 组件 | 优先级 | 状态 | 备注 |
|---|---|---|---|---|---|
| **#131859** | 约 48 天 | auth | P3 | blocked | 无法通过 API 创建 PR — 64 条评论，暂无解决方案 |
| **#91057** | 约 92 天 | desktop, browser | P2 | open | 浏览器 profile 导入 — 需求量大，暂无 PR |
| **#112627** | 约 65 天 | cli, config | P3 | needs-decision | 配置继承 — 需要维护者决策 |
| **#92774** | 约 89 天 | agent, plugins | P3 | open | 硬编码的 system prompt 限制 — 无进展 |

### 需要维护者关注的 Issue

| Issue | 存在时间 | 组件 | 优先级 | 描述 |
|---|---|---|---|---|
| **#143907** | 约 27 天 | gateway, desktop, sessions | P2 | TUI 无法恢复 Desktop 应用的聊天 — 跨组件回归 |
| **#93592** | 约 88 天 | agent, config | P2 | `background_review` 忽略 fallback_chain 配置 |
| **#147070** | 约 20 天 | agent | P2 | 速率限制时 600 秒睡眠后才轮换凭证 |
| **#149586** | 约 15 天 | security | P3 | NixOS 模块 / CLI 发现机制冲突 |

### 值得关注的老旧 PR

| PR | 存在时间 | 组件 | 描述 |
|---|---|---|---|
| **#144701** | 约 26 天 | gateway, tui | 将有界控制读取移出串行队列 — 提升会话控制延迟表现 |
| **#142424** | 约 30 天 | desktop | 为仅归档会话路由 session RPC |

---

## 汇总表

| 指标 | 数值 |
|---|---|
| 24 小时内更新的 issue | 50（50 个开放，0 个关闭） |
| 24 小时内更新的 PR | 50（45 个开放，5 个合并/关闭） |
| 新版本发布 | 2（v0.23.3，v0.23.2+canary） |
| 安全修复 | 1 个已合并（#155459） |
| 报告的 P2 bug | 12 |
| 报告的 P3 bug/功能 | 11 |
| 新增插件提交 | 5 |

---

*日报生成时间：2026-11-20，数据来源：NousResearch/hermes-agent*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me translate this carefully, maintaining the structure and technical accuracy.

Let me go through the text carefully and translate it into natural technical Chinese:

1. Overview section
2. Releases section
3. Project Progress section with tables
4. Community Hot Topics section
5. Bugs & Stability section
6. Feature Requests & Roadmap Signals section
7. User Feedback Summary section
8. Backlog Watch section

I need to:
- Preserve all Markdown structure exactly
- Keep URLs, numbers, dates, issue numbers, usernames, version tags, etc. as-is
- Use natural technical Chinese
- Not use markdown fences
- Translate everything except the technical identifiers

Let me translate section by section:
</think>


# QwenPaw 项目日报 — 2026-11-20

## 1. 今日概览

QwenPaw 今日 **开发活跃度较高**，过去 24 小时内共更新了 39 个 PR 和 21 个 issue。今日未发布新版本，但项目正在积极推进 UI/UX 优化、稳定性修复和新功能开发。21 个 issue 中，13 个已关闭——表明问题处理效率良好，另有 8 个仍在处理中。今日无版本发布，暗示团队正在为下一版本积累更新内容。

---

## 2. 版本发布

**今日无新版本发布**。当前最新稳定版仍为 **v2.3.0.post1**（多个 issue 报告中均有引用）。维护团队似乎正在为下一版本储备更新。

---

## 3. 项目进展

### 已合并/关闭的 PR（12 个）

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#8829](https://github.com/agentscope-ai/QwenPaw/pull/8829) | zhaozhuang521 | **控制台修复**：仅在有新消息时更新标签页图标（移除蓝色"运行中"圆点，保留绿色"已完成"指示器） |
| [#8824](https://github.com/agentscope-ai/QwenPaw/pull/8824) | wilac-pv | **控制台修复**：在全屏移动端容器中预留顶部和侧边安全区域（修复 PWA/独立模式下的状态栏遮挡问题） |
| [#8822](https://github.com/agentscope-ai/QwenPaw/pull/8822) | cuiyuebing | **文档**：更新官网至 v2.3.0 |
| [#8766](https://github.com/agentscope-ai/QwenPaw/pull/8766) | AGImentu | **控制台修复**：防止侧边栏相邻会话背景重叠 |
| [#3565](https://github.com/agentscope-ai/QwenPaw/pull/3565) | zhenai1314521 | **功能**：`AgentMemory` 作为 `memory_manager_backend` 选项（首次贡献者） |
| [#4224](https://github.com/agentscope-ai/QwenPaw/pull/4224) | aqilaziz | **记忆修复**：自动记忆摘要后刷新索引（更新 reme-ai 依赖） |

### 正在审核中的待合并 PR（重点）

| PR | 作者 | 规模 | 描述 |
|----|--------|------|-------------|
| [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) | zhijianma | XXXL | **聊天功能**：仅追加式会话存储、分页历史记录和原生 Turn 分支（会话架构重大重构） |
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) | lalaliat | XXXL | **SDK 扩展**：Plugin SDK 1.1 API、生命周期管理和开发者工具 |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) | Leirunlin | XXXL | **Provider**：将本地模型管理提取为独立插件 |
| [#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785) | BeiMu-new | XXL | **媒体修复**：强制内联预算、拒绝后重新缩放、报告遗漏项 |
| [#8588](https://github.com/agentscope-ai/QwenPaw/pull/8588) | xypang33-sketch | XXL | **记忆修复**：OpenViking 后续清理及关闭修复 |
| [#8784](https://github.com/agentscope-ai/QwenPaw/pull/8784) | BeiMu-new | L | **技能修复**：保留回滚备份直到所有工作区恢复完成 |
| [#8713](https://github.com/agentscope-ai/QwenPaw/pull/8713) | BeiMu-new | M | **循环修复**：记录回复过程中追加的每次工具调用，以便 DoomLoopGate 正确触发 |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | iluv7 | XL | **记忆功能**：允许 ReMeLight 记忆写入使用独立模型 |

**评估**：项目在会话存储、插件 SDK 和记忆管理方面取得了重大架构进展。XXXL 规模的 PR 表明即将进行重大版本更新。

---

## 4. 社区热点

### 关注度最高的 Issue（按评论数排序）

1. **#8811** — *窄屏文字截断*（[开启中](https://github.com/agentscope-ai/QwenPaw/issues/8811)）—— 4 条评论  
   **核心诉求**：用户期望表格和代码块在窄视口下可滚动。这是 v2.3.0 到 v2.3.0.post1 的 UX 回归。PR #8823 已提交修复。

2. **#8815** — *定时任务会话无消息显示*（[已关闭](https://github.com/agentscope-ai/QwenPaw/issues/8815)）—— 3 条评论  
   **核心诉求**：需要实时了解后台任务的执行进度。用户希望在长时间运行的定时任务中获得反馈。

3. **#8700** — *DoomLoopGate 不触发*（[已关闭](https://github.com/agentscope-ai/QwenPaw/issues/8700)）—— 3 条评论  
   **核心诉求**：防止无限工具调用循环。PR #8713 正在解决此问题。

4. **#8313** — *QQ 群消息被静默丢弃*（[已关闭](https://github.com/agentscope-ai/QwenPaw/issues/8313)）—— 3 条评论  
   **核心诉求**：QQ 频道群聊的消息可靠性。

5. **#6952** — *前缀缓存不稳定*（[开启中](https://github.com/agentscope-ai/QwenPaw/issues/6952)）—— 3 条评论  
   **核心诉求**：通过确定性 prompt 构建实现性能优化。影响重复轮次的效率。

### 热门功能请求

- **#8821** — *任务完成后发送 Windows 系统通知*（[已关闭](https://github.com/agentscope-ai/QwenPaw/issues/8821)）—— 2 条评论  
  用户希望获得原生 OS 通知，避免持续盯着浏览器标签页。

- **#8817** — *Web UI/UX 专项优化*（[开启中](https://github.com/agentscope-ai/QwenPaw/issues/8817)）—— 1 条评论  
  详细列举了 UI 不一致、组件错位、移动端适配差等问题。这与今日合并的多个 UI 修复方向一致。

- **#8826** — *Rapid-MLX 作为本地 Provider 预设*（[开启中](https://github.com/agentscope-ai/QwenPaw/issues/8826)）—— 1 条评论  
  Apple Silicon 用户希望在本地推理中支持原生 MLX 框架。

---

## 5. 缺陷与稳定性

### 未关闭的缺陷（按严重程度排序）

| 优先级 | Issue | 描述 | 修复 PR？ |
|----------|-------|-------------|---------|
| **高** | [#8830](https://github.com/agentscope-ai/QwenPaw/issues/8830) | Windows 平台：`llama-server.exe` 在后端异常退出后未被终止，多次重启后进程堆积导致内存耗尽 | 暂无 |
| **高** | [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579) | 禁用 Provider 后遗留陈旧的 agent 运行配置模型 → `ProviderError` | 暂无 |
| **中** | [#8811](https://github.com/agentscope-ai/QwenPaw/issues/8811) | 窄屏下表格和代码块文字截断 | PR #8823 |
| **中** | [#8796](https://github.com/agentscope-ai/QwenPaw/issues/8796) | 移动端全屏模式下渲染区域被系统状态栏遮挡（顶部安全区域缺失） | PR #8824 ✓ |
| **安全** | [#8513](https://github.com/agentscope-ai/QwenPaw/issues/8513) | AUTO/SMART 审批级别下，Shell 包装的出站操作可绕过检测器 | 暂无 |

### 今日合并的重要修复
- **PR #8824**：修复移动端全屏容器的安全区域
- **PR #8829**：修复标签页图标指示器行为
- **PR #8766**：修复侧边栏会话背景重叠

### 稳定性风险
**Issue #8830** 是一个 **新报告的 Windows 平台缺陷**，本地模型进程（`llama-server.exe`）在后端异常退出时未被终止。每次重启都会在新随机端口上启动新实例，最终导致内存耗尽。需要维护团队立即关注。

---

## 6. 功能请求与路线图信号

### 用户请求的功能

| 请求 | Issue | 优先级信号 | 纳入可能性 |
|---------|-------|-----------------|------------------------|
| **Telegram 论坛话题隔离** | [#8827](https://github.com/agentscope-ai/QwenPaw/issues/8827) | 超级群组的频道级隔离 | 中 |
| **Rapid-MLX Provider 预设** | [#8826](https://github.com/agentscope-ai/QwenPaw/issues/8826) | Apple Silicon 本地推理 | 中 |
| **Windows 原生通知** | [#8821](https://github.com/agentscope-ai/QwenPaw/issues/8821) | 任务完成提醒 | 高（已关闭/实现） |
| **QQ 流式输出** | [#6421](https://github.com/agentscope-ai/QwenPaw/issues/6421) | QQ 频道消息流式推送 | 中 |
| **聊天存储生命周期管理** | [#8816](https://github.com/agentscope-ai/QwenPaw/issues/8816) | 可恢复删除、作用域保留策略 | 高（与 PR #8532 对齐） |
| **服务端代理客户端** | [#7002](https://github.com/agentscope-ai/QwenPaw/issues/7002) | 从个人电脑远程控制 agent | 低（架构复杂度高） |
| **远程 Playwright 端点** | [#4617](https://github.com/agentscope-ai/QwenPaw/issues/4617) | 自定义端点的 browser-use 工具 | 高（长期需求，与当前 SDK 扩展对齐） |

### 路线图对齐
从待合并的 PR 来看，以下方向是当前开发的重点：
1. **会话/聊天架构** — PR #8532（分页历史、Turn 分支）
2. **Plugin SDK v1.1** — PR #8764（开发者工具扩展）
3. **本地模型插件化** — PR #8499
4. **记忆管理优化** — PR #7719、#8588

---

## 7. 用户反馈摘要

### 痛点

1. **UI/UX 退化**（#8817、#8811、#8796、#8766）  
   多位用户反馈移动端适配差、组件样式不一致、布局问题频发。这似乎是一个持续性问题——同一用户（#MCQSJ）提交了多个 UI 相关 issue。今日的 PR 已部分解决了这些问题，但可能需要进行全面的 UI 审查。

2. **Windows 平台缺陷**（#8830）  
   Windows 平台的本地模型支持不够稳定——孤儿进程和内存泄漏表明平台特定测试存在盲区。

3. **频道可靠性**（#8313、#8394、#6421）  
   QQ 和小爱频道存在可靠性问题（消息静默丢失、状态帧缺失、无流式支持）。用户希望这些频道能拥有与飞书频道相同的功能体验。

4. **安全隐患**（#8513）  
   AUTO/SMART 审批级别下的 shell 命令检测盲区是一个重要的安全问题，需要尽快处理。

### 正面信号

- **功能落地**：Issue #8821（Windows 通知）已关闭，表明已实现或接受该请求。
- **社区参与**：PR #3565（AgentMemory 后端）由首次贡献者提交，显示社区活力良好。
- **长期需求推进**：Issue #4617（远程 Playwright）仍保持活跃，与当前 SDK 开发方向对齐。

---

## 8. 待处理清单

### 长期未处理的重要 Issue

| Issue | 存在时间 | 状态 | 关注点 |
|-------|-----|--------|---------|
| [#6952](https://github.com/agentscope-ai/QwenPaw/issues/6952) — 前缀缓存不稳定 | 约 3 个月 | 开启中 | 重复轮次性能下降；需要确定性的工具 schema 排序 |
| [#4617](https://github.com/agentscope-ai/QwenPaw/issues/4617) — 远程 Playwright 端点 | 约 6 个月 | 已关闭 | 近期已处理，需验证实现 |
| [#6421](https://github.com/agentscope-ai/QwenPaw/issues/6421) — QQ 流式输出 | 约 4 个月 | 已关闭 | 请求已满足还是被 #8307 取代？ |
| [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) — 统一的清理页面 | 约 4 个月 | 已关闭 | 需验证功能是否已实现 |

### 需要维护团队关注的 PR

| PR | 规模 | 状态 | 关注点 |
|----|------|--------|---------|
| [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) — 会话存储重构 | XXXL | 开启中，审核中 | 架构变更较大；需要全面审查 |
| [#8764](https://github.com/agentscope-ai/QwenPaw/pull/8764) — Plugin SDK 1.1 | XXXL | 开启中，审核中 | API 变更影响所有插件开发者 |
| [#8499](https://github.com/agentscope-ai/QwenPaw/pull/8499) — 本地模型插件化 | XXXL | 开启中 | 破坏现有本地模型配置；需要迁移路径 |
| [#8713](https://github.com/agentscope-ai/QwenPaw/pull/8713) — DoomLoopGate 修复 | M | 开启中，审核中 | 关键循环保护机制；应优先处理 |

### 维护团队建议行动

1. **高优先级**：审核 PR #8713（DoomLoopGate 修复）——这是一个关键的安全机制，目前处于失效状态。
2. **Windows 稳定性**：调查 Issue #8830，为 `llama-server.exe` 孤儿进程问题提供修复或临时解决方案。
3. **安全**：处理 Issue #8513——AUTO/SMART 级别下的 shell 命令检测盲区。
4. **XXXL PR 协调**：安排专项审核会议，针对三个大规模 PR（#8532、#8764、#8499）协调发布计划。

---

*日报生成日期：2026-11-20。数据来源：agentscope-ai/QwenPaw GitHub 活动日志。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. Let me translate it carefully, maintaining all the formatting, tables, links, and technical terminology while rendering it in natural technical Chinese.

Let me go through it section by section:

1. Title and date
2. Section 1: Today's Overview
3. Section 2: Releases
4. Section 3: Project Progress (table)
5. Section 4: Community Hot Topics (tables)
6. Section 5: Bugs & Stability (tables)
7. Section 6: Feature Requests & Roadmap Signals (tables)
8. Section 7: User Feedback Summary (tables)
9. Section 8: Backlog Watch (tables)
10. Footer

I need to:
- Use Simplified Chinese characters
- Keep URLs, numbers, dates, usernames, issue/PR numbers as-is
- Translate technical terms naturally
- Maintain all markdown structure
- Use Chinese punctuation throughout
- Make it read like a Chinese developer newsletter

Let me translate:
</think>


# ZeroClaw 项目日报 — 2026-11-20

## 1. 今日概览

ZeroClaw 今日呈现**极高的开发活跃度**，共 12 条 issue 更新，**50 个 pull request** 处于活跃推进中——全部处于 open 状态，今日无任何 PR 被合并或关闭，表明项目正处于集成前的积累阶段。当前面临 **两个 S1 级严重缺陷**（导致工作流阻断），涉及 Telegram 语音消息处理和守护进程启动稳定性，同时存在多个高优先级 S2 级问题。多个触及核心基础设施（注册表、提供商、频道、安全）的 XL 级 PR 正在审查中，暗示重大版本发布正在酝酿中。

---

## 2. 版本发布

今日**无新版本**发布。根据 issue 标签观察（#11580、#12476 均标注 `release:v0.9.1`），项目当前应为 **v0.9.1** 做准备。

---

## 3. 项目进展

| PR | 发起人 | 重点领域 | 规模 | 主要变更 |
|---|---|---|---|---|
| [#12453](https://github.com/zeroclaw-labs/zeroclaw/pull/12453) | NiuBlibing | Web：编辑规范注册表、选择精确模型引用 | XL | 新增注册表编辑器，支持草稿比较与保存；选择器和快速启动中使用精确模型键 |
| [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452) | NiuBlibing | Zerocode：配置和选择规范提供商模型 | XL | 将规范注册表接入 Zerocode 配置、快速启动和对话选择器 |
| [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450) | NiuBlibing | Providers：采用规范 V5 注册表和模型绑定 | XL | 启用 V5 注册表准入，推动 V4→V5 配置迁移，具象化完整路由模型 |
| [#12592](https://github.com/zeroclaw-labs/zeroclaw/pull/12592) | zhek | Telegram：新增 `trusted_groups` 群组授权 | L | 支持负数群组 ID 列表，实现无操作员介入的消息准入 |
| [#12579](https://github.com/zeroclaw-labs/zeroclaw/pull/12579) | wenhaozhao | MCP：将 MP4 资源路由至 Qwen 视频输入 | XL | 将 MCP `video/mp4` 数据块物化为视频文件而非文档路径 |
| [#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596) | CastelloBrancoTecnologia | Browser：独立划分用户名/密码和 TOTP 权限范围 | XL | 为独立浏览器授权草案目录和 WebUI，按 HTTPS 来源独立授权 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | joalvaradon | Delegate：保持跨会话延续的有界工作区/工具上限（#9872） | XL | 维持委托约束在会话续接过程中的有界性 |
| [#11676](https://github.com/zeroclaw-labs/zeroclaw/pull/11676) | joalvaradon | Infra：保留重置行在会话转录替换时的 `created_at` | XL | 修复会话转录行时间戳被重写为最近写入时间的问题 |
| [#12537](https://github.com/zeroclaw-labs/zeroclaw/pull/12537) | JordanTheJet | CLI：在无网关构建中检查本地守护进程 | S | 将网关后端 SOP 命令重定向至标准构建 |
| [#12595](https://github.com/zeroclaw-labs/zeroclaw/pull/12595) | JordanTheJet | CI：修复日常漏洞扫描被未关闭 issue 静默的情况 | XS | 修复漏洞扫描被陈旧追踪 issue 压制的问题 |
| [#12594](https://github.com/zeroclaw-labs/zeroclaw/pull/12594) | JordanTheJet | Dependabot：Rust 补丁更新独立成组 | XS | 拆分大型 cargo 更新 PR 以避免级联覆盖 |

**注意：** 全部 50 个 PR 均保持 open 状态——今日无合并。这一迹象表明项目正等待协调式合并窗口或进入发布冻结期。

---

## 4. 社区热议话题

### 讨论最多的 Issue（按评论数排序）

| Issue | 标题 | 评论数 | 严重程度 | 话题 |
|---|---|---|---|---|
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp/自定义提供商模型 URI 使用错误 | **7** | 高 | Bug：自定义提供商的模型 URL 解析失败 |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | 每次更新时重新计算 PR 风险和规模标签 | **7** | 高 | Feature：自动化标签维护 |
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | 运行时配置文件的费用限制未反映有效全局日预算 | **5** | P1 | Bug：费用台账不一致 |
| [#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) | x86_64 Linux 二进制文件距 64 MiB 上限约 0.7 MB | **5** | P1 | Task：需要确定发布门槛策略 |
| [#12422](https://github.com/zeroclaw-labs/zeroclaw/issues/12422) | RFC：操作员管理服务凭证的有限使用范围 | **3** | 安全 | RFC：凭证委托模型 |
| [#12217](https://github.com/zeroclaw-labs/zeroclaw/issues/12217) | 文档：邮件工具独立部署缺少 IMAP 监听说明 | **2** | 文档 | 文档缺失（已关闭） |

### 深层需求分析

1. **模型提供商配置**（#11296，7 条评论）——用户在自定义/llama.cpp 提供商获取模型时，其 URI 未被正确使用。这指向提供商抽象层存在**设计缺陷**，V5 注册表相关工作（#12450、#12452）有望解决。

2. **PR 质量自动化维护**（#9345，7 条评论）——社区希望自动重新计算 `size:*` 和 `risk:*` 标签，以减轻人工标注负担并提升审查优先级排序效率。

3. **费用预算透明度**（#10635，5 条评论）——用户反映配置文件显示"无限"费用限制（`4294967295 cents`），而实际全局预算强制执行 `$10/天` 上限。这引发了用户对费用控制的**信任危机**。

4. **安全凭证委托**（#12422，RFC）——关于操作员管理服务凭证但对模型隐藏的正式 RFC，回应了企业级安全多租户代理部署的**关键需求**。

---

## 5. 缺陷与稳定性

### S1 — 工作流阻断（严重）

| Issue | 标题 | 状态 | 修复 PR？ |
|---|---|---|---|
| [#12597](https://github.com/zeroclaw-labs/zeroclaw/issues/12597) | Telegram 语音转录失败后停止接收消息（offset 无法推进） | **OPEN** | 暂无 |
| [#12570](https://github.com/zeroclaw-labs/zeroclaw/issues/12570) | 守护进程启动时挂起，存在数百万个 `runtime-trace.tmp.*` 文件 | **OPEN** | 暂无 |

**#12597** 是今日新增的 brand-new issue，代表** Telegram 频道完全中断**——一旦语音消息转录失败，后续所有文字消息都被阻塞在挂起的更新位置之后。

**#12570** 是由两个缺陷叠加导致的**守护进程启动挂起**：滚动裁剪错误时产生临时文件泄漏，以及 `read_dir` 调用在处理数百万个孤立文件时性能严重退化。该问题影响经历过裁剪错误的长时间运行实例的运营商。

### S2 — 行为降级（高）

| Issue | 标题 | 状态 | 修复 PR？ |
|---|---|---|---|
| [#12569](https://github.com/zeroclaw-labs/zeroclaw/issues/12569) | 插件安装时报加载中，但内置工具名称已被占用 | **OPEN** | 暂无 |
| [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476) | 网关将每个连接都记录为 INFO 级别，淹没运行时追踪日志 | **CLOSED** | 推测已合并 |
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | 运行时配置文件的费用限制未反映有效全局日预算 | **IN-PROGRESS** | 暂无 |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp/自定义提供商的模型 URL 使用错误 | **ACCEPTED** | 暂无 |

### S3 — 轻微问题

| Issue | 标题 |
|---|---|
| [#12568](https://github.com/zeroclaw-labs/zeroclaw/issues/12568) | 仪表盘费用概览柱状图始终填满（以最大值作为刻度基准） |
| [#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) | x86_64 二进制文件距 64 MiB 发布上限 0.7 MB（需确定策略） |

**稳定性评估：** 两个 S1 缺陷代表**活跃的生产环境风险**。Telegram 频道缺陷会影响所有处理语音消息的机器人；启动挂起问题影响曾遭遇裁剪错误的运营商。两者目前均无修复 PR。

---

## 6. 功能需求与路线图信号

### 正在积极开发的高影响力功能

| PR | 标题 | 重要性 |
|---|---|---|
| [#12592](https://github.com/zeroclaw-labs/zeroclaw/pull/12592) | Telegram `trusted_groups` 授权机制 | 简化群组管理，降低操作员维护成本 |
| [#12579](https://github.com/zeroclaw-labs/zeroclaw/pull/12579) | 将 MCP MP4 资源路由至 Qwen 视频输入 | 扩展多模态能力，与 V5 注册表对齐 |
| [#12596](https://github.com/zeroclaw-labs/zeroclaw/pull/12596) | 独立的浏览器用户名/密码 + TOTP 权限划分 | 凭证管理的重大安全体验提升 |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | 多插件注册表来源支持 | 启用私有+公共插件生态 |
| [#12557](https://github.com/zeroclaw-labs/zeroclaw/issues/12557) | 简化 Discord 和 Matrix 的审批流程（功能请求） | 与 Telegram 审批按钮体验对齐，使用 emoji 回应 |

### 路线图信号分析

**#12450**（V5 注册表）、**#12452**（Zerocode 注册表集成）、**#12453**（Web 注册表编辑器）和 **#12596**（浏览器凭证隔离）同时推进，表明项目正朝着聚焦以下方向的 **0.10.0 或 1.0 重大版本** 迈进：

1. **规范模型注册表 v5** — 统一模型引用系统
2. **安全凭证隔离** — 操作员管理、对模型不可见的凭证
3. **插件生态扩展** — 多注册表来源支持
4. **频道能力对齐** — Telegram、Discord、Matrix 一致的审批体验

**#12557**（Discord/Matrix 审批简化）很可能以 **v0.9.1** 为目标版本，基于 Telegram 对等改进的模式推断。

---

## 7. 用户反馈摘要

### 痛点

| 主题 | 证据 | 严重程度 |
|---|---|---|
| **Telegram 语音处理失败** | #12597：语音转录失败后阻塞后续所有消息 | 严重 |
| **费用预算混乱** | #10635：配置文件显示无限，全局台账强制 $10/天 | 高 |
| **提供商 URL 解析错误** | #11296：自定义/llama.cpp URI 获取模型时被忽略 | 高 |
| **守护进程启动不稳定** | #12570：泄漏的临时文件导致重启时挂起 | 严重 |
| **插件命名冲突** | #12569：同名工具插件静默注册失败 | 高 |
| **仪表盘可视化失真** | #12568：费用柱状图无参考价值，无法对比预算 | 低 |
| **大型 PR 更新混乱** | #12594：单个 Dependabot PR 包含 35-37 个 Rust 更新导致合并失败 | 中 |

### 正面信号

- **#12217**（邮件工具独立部署文档）在补充文档后**已关闭**，表明团队响应文档缺失问题
- **#12476**（网关日志淹没运行时追踪）已**关闭**，说明可观测性问题的修复周期活跃
- **50 个 open PR** 且无 stale 标记，表明维护者参与度高

---

## 8. 待办积压追踪

### 需要维护者关注的问题

| Issue | 标题 | 积压时间 | 状态 | 优先级 | 关注点 |
|---|---|---|---|---|---|
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp/自定义提供商模型 URL 使用错误 | **52 天**（2026-09-30 起） | Accepted | P2 | 活跃缺陷，7 条评论，暂无修复 PR |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | 每次更新时重新计算 PR 风险/规模标签 | **119 天**（2026-07-24 起） | In Progress | P2 | 长期待处理，7 条评论 |
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | 运行时配置文件费用限制不一致 | **76 天**（2026-09-05 起） | In Progress | P1 | 活跃缺陷，5 条评论 |
| [#11580](https://github.com/zeroclaw-labs/zeroclaw/issues/11580) | 二进制大小上限决策待定 | **45 天**（2026-10-06 起） | Accepted | P1 | 阻塞 v0.9.1 发布 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 有界委托工作区持久化 | **86 天**（2026-08-26 起） | Open | 高 | XL 级 PR，关键安全修复 |

### 需要维护者关注的 PR

| PR | 标题 | 积压时间 | 规模 | 风险 | 关注点 |
|---|---|---|---|---|---|
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | 原生 Rust XMPP 配合 OMEMO | **31 天** | XL | 高 | 需要维护者审查 |
| [#12403](https://github.com/zeroclaw-labs/zeroclaw/pull/12403) | 有界委托的组成接缝行 | **8 天** | XS | 高 + Manual | RFC 文档 PR |
| [#12062](https://github.com/zeroclaw-labs/zeroclaw/pull/12062) | 有界 RPC 拒绝原因异常 | **24 天** | XS | 高 + Manual | RFC 文档 PR |

**积压风险：** Issue #11296 已 open **52 天**，有 7 条评论但无修复 PR，代表自定义提供商支持方面的持续缺口。**#10391**（86 天，XL，关键安全修复）及其三个配套 RFC PR（#12403、#12062、#12576）的组合，表明一个**复杂的有界委托安全修复**可能需要加速审查以解除相关工作的阻塞。

---

*日报基于 ZeroClaw（zeroclaw-labs/zeroclaw）2026-11-20 的 GitHub 活动数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*