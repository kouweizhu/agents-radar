# AI CLI 工具社区动态日报 2026-09-25

> 生成时间: 2026-09-25 00:44 UTC | 覆盖工具: 7 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/earendil-works/pi)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

<think>The user wants me to translate this report into Chinese, following the specific rules provided. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code spans, file paths, project names, repository slugs, usernames, version tags, issue/PR references as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, keeping all the structural elements and non-translatable items in their original form.</think>

# 跨工具对比报告：AI CLI 工具生态

## 生态概览

2026 年 9 月底的 AI CLI 工具领域呈现出成熟但竞争激烈的态势。所有七款工具都在积极开发核心原语——会话管理、内存/上下文处理、安全沙盒和多提供商支持——但成熟度各不相同。Claude Code 和 Codex 在发布节奏上领先，而 Qwen Code 和 OpenCode 在前沿功能上迭代激进。Gemini CLI 和 Copilot CLI 聚焦企业级可靠性。Pi 以轻量级架构差异化。所有平台的社区反馈都揭示了一致的主题：内存管理、跨平台稳定性和安全模型灵活性仍是最优先关注的问题。

---

## 活动对比

| 工具 | Issue（24h） | PR（24h） | Release（24h） | Discussions |
|------|-------------|------------|----------------|-------------|
| **Claude Code** | 50 | 5 | 1 | — |
| **OpenAI Codex** | 50 | 20+ | 6 | 5 |
| **Gemini CLI** | 50 | 20 | 1 | — |
| **Copilot CLI** | ~20+ | 1 | 2 | — |
| **OpenCode** | 50 | 10 | 0 | — |
| **Pi** | 50 | 11 | 0 | 0 |
| **Qwen Code** | 50 | 10 | 4 | — |

*注："—"表示源数据中未提供。显示所有仓库都有活跃的 Issue/PR 活动；Discussion 数据缺失并不表示不活跃。*

---

## 共同的功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|-------------------|------------|----------------|
| **内存/上下文管理** | Claude Code, Gemini CLI, OpenCode, Pi | 透明化自动内存 (#82056)；token 计数透明度；窗口 85% 时触发压缩（OpenCode）；持久化内存系统 |
| **会话透明度与审计** | Claude Code, Gemini CLI, OpenCode | 指令加载报告；可用能力 UI；执行证据日志；MCP 会话标识符 |
| **安全/沙盒灵活性** | Claude Code, Gemini CLI, OpenCode, Copilot CLI | 零依赖 OS 沙盒；项目级 PIN/生物识别锁；可选的密码输入权限管控 |
| **MCP 集成改进** | Claude Code, Codex, Copilot CLI, Pi, OpenCode | MCP 服务器会话隔离；预热/预生成机制；OAuth 范围合规；工具缓存失效 |
| **平台稳定性（Windows）** | Codex, Copilot CLI, Qwen Code, Gemini CLI | ConPTY 进程泄漏；shell 路径解析；提权沙盒失败；桌面冻结问题 |
| **多提供商支持** | Codex, Gemini CLI, Pi, Qwen Code | Azure Foundry；Vertex AI Claude；OpenAI 兼容网关；Bedrock 图像处理 |

---

## 差异化分析

| 工具 | 主要焦点 | 目标用户 | 技术路线 |
|------|---------------|--------------|---------------------|
| **Claude Code** | 企业级安全、内存可观测性 | 需要严格审计追踪的开发者 | 强安全防护、prompt-cache 透明度、`/status` 诊断 |
| **OpenAI Codex** | Windows 生态、开发者效率 | Windows Pro 用户、GitHub 集成团队 | Pro Max 订阅模式；实验性 Windows 沙盒；快速 CLI alpha 迭代 |
| **Gemini CLI** | 安全加固、AST 感知工具链 | 安全敏感型企业 | 零依赖沙盒；OTEL 导出；成本控制决策门 |
| **Copilot CLI** | GitHub 生态集成 | GitHub 用户、VS Code 高级用户 | 分支式会话；插件市场；`ghfs` 本地挂载集成 |
| **上下文窗口优化、模型路由** | 成本敏感用户、多模型工作流 | 动态输出适配；每步模型选择钩子；85% 压缩阈值 |
| **Pi** | 轻量级 TUI、提供商灵活性 | 极简用户、多云部署 | 独立架构；广泛提供商支持（Bedrock、Vertex、Azure Foundry）；OTLP 导出 |
| **Qwen Code** | 托管代理、多根工作区 | 复杂环境的企业团队 | 双路径托管代理架构；Tauri 桌面版；运行时持久化 |

---

## 社区活跃度与成熟度

### 高迭代速度

- **OpenAI Codex**：24 小时内 6 次发布 + 20+ PR——激进迭代，聚焦 Windows，企业支持强劲
- **Gemini CLI**：20+ PR，安全加固——托管代理能力快速交付

### 积极开发中

- **Claude Code**：稳定 5 PR + 1 发布；社区参与度高（50 issues，约 200+ 评论）
- **Qwen Code**：4 发布 + 10 PR；托管代理架构推进中
- **OpenCode**：10 PR，显著的压缩/上下文工作；功能请求管道强劲
- **Pi**：11 PR，提供商扩展（Azure Foundry、Vertex AI）、OTLP 遥测

### 较低活跃度

- **Copilot CLI**：1 PR，2 个小版本——维护模式；已知问题（OOM、会话生命周期）仍未解决

### 社区规模指标（评论活跃度）

| 工具 | 高评论 Issue（>10） | 平均评论/Issue |
|------|--------------------------|---------------------|
| Claude Code | 2 | ~5 |
| Codex | 1 | ~3 |
| Gemini CLI | 1 | ~4 |
| Copilot CLI | 1 | ~4 |
| OpenCode | 0 | ~2 |
| Pi | 0 | ~2 |
| Qwen Code | 3 | ~5 |

---

## 趋势信号

### 1. 内存与上下文成为新战场

每个工具都在重新思考如何处理长对话。OpenCode 的 85% 压缩触发器、Claude 的自动内存透明度请求，以及 Gemini 的 AST 感知读取，都指向 **token 效率作为主要差异化因素**。开发者受够了不透明的内存管理消耗预算。

### 2. 安全模型灵活性是硬需求

硬性限制（密码输入、shell 命令）正在造成摩擦。多个工具正在转向 **权限门控可选方案**、**项目级 PIN** 和 **零依赖沙盒**。"默认拒绝"模式对安全有效，但会破坏合法工作流。

### 3. Windows 是痛点

跨 Codex、Copilot CLI、Qwen Code 和 Gemini CLI 的 Issue 追踪器，平台特定 bug 占主导。如果你的团队面向 Windows 开发者，预期需要投入大量平台特定测试——特别是 PTY/进程管理和沙盒方面。

### 4. MCP 正在成熟但仍脆弱

MCP 服务器管理（预热、会话隔离、OAuth 合规）仍是常见痛点。协议采用在增长，但 **运维可靠性** 滞后于功能完整性。

### 5. 提供商多元化加速

每个工具都在竞相支持更多模型：Azure Foundry、Vertex AI Claude、Bedrock、OpenAI 兼容网关。差异化不再取决于 *支持哪些* 模型，而是 **如何优雅地处理提供商特定特性**（重放失败、参数序列化、认证刷新）。

### 6. 企业功能正在趋同

可审计性（指令加载可见性、执行日志）、遥测（OpenTelemetry 导出）和多工作区支持正在跨工具出现。这些曾是差异化因素；现在正成为 **基本门槛**。

---

*报告基于跨仓库 GitHub 活动数据生成于 2026-09-25。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the report into Chinese, following the specific rules provided. I need to:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Issue/PR references like #12345 and their link text stay as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical terms.</think>

# Claude Code Skills 社区亮点报告

**数据截止至 2026-09-25**

---

## 1. Skills 排行

Pull Request 数据显示前 20 名 PR 的评论数均为 "undefined"，说明数据采集时 GitHub 评论数未填充。不过这些 PR 代表了最近最活跃的 Skill 提交：

| # | PR | 作者 | 功能 | 状态 |
|---|-----|--------|---------------|--------|
| 1 | **[PR #1771](https://github.com/anthropics/skills/pull/1771)** proofcore-contract-auditor | ProofCore-Protocol | 智能合约公证：自动化 Solidity/Rust 合约静态分析，通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | OPEN |
| 2 | **[PR #1792](https://github.com/anthropics/skills/pull/1792)** fix(docx): LibreOffice 超时处理 | TINGyu123644 | soffice 超时时返回正确错误；验证输出 DOCX 无修订标记 | OPEN |
| 3 | **[PR #1790](https://github.com/anthropics/skills/pull/1790)** fix(docx): 创建 document.xml.rels | TINGyu123644 | 为评论创建缺失的关系文件，注册 4 种评论关系类型 | OPEN |
| 4 | **[PR #1776](https://github.com/anthropics/skills/pull/1776)** blast-radius | kishormorol | 危险批量操作清单 Skill：归档用户、撤销权限、删除行 — 写入操作前进行安全检查分类 | OPEN |
| 5 | **[PR #1742](https://github.com/anthropics/skills/pull/1742)** fix(mcp-builder): mcp>=2 支持 | Kuldeeep18 | 修复 streamable_http_client 重命名导入及 MCP v2 自定义 headers 配置 | OPEN |
| 6 | **[PR #1703](https://github.com/anthropics/skills/pull/1703)** md2video-audio | 70v-Yoyo | 零成本 Skill，使用 Marp 将 Markdown 编译为带逼真人声旁白的 MP4 视频 | OPEN |
| 7 | **[PR #1298](https://github.com/anthropics/skills/pull/1298)** fix(skill-creator): 触发器评估 | MartinCajiao | 隔离触发器评估，处理 Windows/运行时，修复误判和子进程管道失败 | OPEN |
| 8 | **[PR #822](https://github.com/anthropics/skills/pull/822)** AWT (AI Watch Tester) | ksgisang | 端到端测试 Skill，赋予 Claude 视觉/浏览器控制能力，实现零代码自动化测试生成 | OPEN |

---

## 2. 社区需求趋势

基于 Issue 讨论，最受期待的 Skill 方向：

| 趋势 | Issue | 需求信号 |
|-------|-------|----------------|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) (43 条评论) | anthropic/ 命名空间下的社区 Skill 导致信任滥用 — 呼吁命名空间隔离 |
| **组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) (16 条评论) | 组织内部直接共享 Skill，而非手动文件传输 |
| **评估/触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556) (12 条评论) | run_eval.py 显示 0% 触发率 — 技能调用机制存在根本问题 |
| **Agent 内存优化** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 条评论) | compact-memory Skill，使用符号记号减少冗余叙述开销 |
| **治理与安全** | [#412](https://github.com/anthropics/skills/issues/412) (6 条评论) | agent-governance 用于策略执行、威胁检测、审计追踪 |
| **MCP 集成** | [#16](https://github.com/anthropics/skills/issues/16) (4 条评论) | 将 Skill 暴露为 MCP 以实现标准化 API 封装 |

---

## 3. 高潜力待上线 Skills

这些活跃的 PR 具有实质性功能，似乎即将合并：

- **[PR #1771](https://github.com/anthropics/skills/pull/1771)** — proofcore-contract-auditor（Web3 智能合约公证）
- **[PR #1703](https://github.com/anthropics/skills/pull/1703)** — md2video-audio（Markdown 转视频+配音）
- **[PR #822](https://github.com/anthropics/skills/pull/822)** — AWT（AI 驱动的端到端测试）
- **[PR #525](https://github.com/anthropics/skills/pull/525)** — Pyxel（复古游戏开发）
- **[PR #723](https://github.com/anthropics/skills/pull/723)** — testing-patterns（综合测试技术栈）
- **[PR #1245](https://github.com/anthropics/skills/pull/1245)** — notion-spec-to-implementation + quantitative-resume-auditor

---

## 4. Skills 生态系统洞察

> **社区最集中的需求是健壮的 Skill 基础设施 — 触发评估可靠性修复、组织级共享机制、以及官方与社区 Skill 之间的安全隔离 — 而非新增特定领域功能。**

Issue 讨论（前 5 个 Issue 共 75+ 条评论）几乎完全聚焦于平台层面问题：信任边界、评估可靠性、分发机制。这表明生态系统在分支到专业领域之前，仍在围绕核心平台问题逐步成熟。

---

<think>The user wants me to translate the Claude Code Community Digest into Simplified Chinese, following the detailed rules provided. Let me go through the content and translate it appropriately.

Key points to remember:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, issue/PR numbers, file paths, API identifiers as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter
- Maintain headings, tables, lists, etc.

Let me translate:

# Claude Code 社区周刊 — 2026-09-25

## 今日要闻

**v2.1.282** 版本新增了 `maxProseWidth` 设置，可在宽终端中限制文本宽度，同时保持表格和代码块全宽显示。版本还为 `/status` 和 `claude doctor` 添加了启动通知和遥测诊断功能，提升了项目设置的可视性。与此同时，社区正在热烈讨论自动记忆索引透明度问题（#82056）和影响 Cloud/Cowork 会议的 Git 代理回归问题（#76248）。

---

## 版本发布

| 版本 | 关键更新 |
|---------|-------------|
| **v2.1.282** | 新增 `maxProseWidth` 设置，可在宽终端中限制文本宽度，同时表格/代码块保持全宽。添加启动通知、`/status` 和 `claude doctor` 条目，列出项目设置文件中的遥测变量。 |

---

## 热门 issue

| # | Issue | 关注原因 | 社区反馈 |
|---|-------|----------------|-------------------|
| **#82056** | [会议无法确定其自动记忆索引是完整加载、部分加载还是未加载](https://github.com/anthropics/claude-code/issues/82056) | 用户无法了解自动记忆是完整加载、部分加载还是失败——使调试记忆问题变得不可能。 | **55 条评论**，1 👍 |
| **#76248** | [Git 代理现在阻止 Cloud/Cowork 会议中的所有推送 — PAT 穿透不再工作](https://github.com/anthropics/claude-code/issues/76248) | 严重回归：用户无法推送到"授权仓库集"之外的仓库，即使使用之前有效的精细 PAT。 | **38 条评论**，15 👍 |
| **#41836** | [未向 MCP 服务器发送会话/对话标识符](https://github.com/anthropics/claude-code/issues/41836) | MCP 服务器无法区分并发会话，导致无法进行每会话的状态管理。 | **17 条评论**，37 👍 |
| **#78160** | [密码输入的硬阻塞破坏合法开发/测试工作流](https://github.com/anthropics/claude-code/issues/78160) | Claude 拒绝在 localhost 输入测试凭证——即使是开发者自己的应用——阻

碍了合法的测试流程。需要权限门控的 opt-in。 | **5 条评论**，14 👍 |
| **#90018** | [totalTokensReminder 导致工具循环中提示缓存持续失效](https://github.com/anthropics/claude-code/issues/90018) | 令牌提醒设置导致提示缓存失效，消除了增量缓存命中并增加了 API 成本。 | **7 条评论**，2 👍 |
| **#96118** | [Opus 5.5 安全防护标记了 reasoning_extraction 消息](https://github.com/anthropics/claude-code/issues/96118) | 用户看到不透明的安全过滤器错误，无法了解是什么触发了防护。 | **6 条评论**，1 👍 |
| **#95813** | [sandbox.excludedCommands 无效](https://github.com/anthropics/claude-code/issues/95813) | 列入排除列表的命令仍然以沙箱模式运行，违背了配置意图。 | **2 条评论**，4 👍 |
| **#94571** | [并发会话之间的文件更改归属不对称](https://github.com/anthropics/claude-code/issues/94571) | 一个会话的文件更改被错误地归属到另一个会话，造成混淆。 | **3 条评论**，1 👍 |
| **#81210** | [崩溃导致用户启动的后台进程孤立](https://github.com/anthropics/claude-code/issues/81210) | 不可捕获的崩溃导致后台进程继续运行，终端卡在鼠标报告模式，没有清理。 | **2 条评论**，0 👍 |
| **#95930** | [非会话文件更改被错误地显示为聊天中的 diff](https://github.com/anthropics/claude-code/issues/95930) | 分支更改/rebase 导致外部文件修改被误显示为 Claude 的编辑，误导用户。 | **2 条评论**，2 👍 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| **#96364** | [agents-md: 自动分页的 Read 不再计入交付](https://github.com/anthropics/claude-code/pull/96364) | 修复了嵌套 AGENTS.md 自动分页检测问题，使分页文件读取能正确附加目录上下文。 |
| **#96363** | [diff: 传递 --no-color 以强制 git 颜色](https://github.com/anthropics/claude-code/pull/96363) | 解决了当 git 中配置 `color.ui=always` 或 `color.diff=always` 时 diff 正文为空的问题。 |
| **#96487** | [telemetry: 行携带引擎版本信息](https://github.com/anthropics/claude-code/pull/96487) | 外部版本现在通过 `$.session.version()` 在遥测行中包含引擎版本、基础版本和构建时间。 |
| **#95423** | [diff: 只读 shell 命令不获取任何内容](https://github.com/anthropics/claude-code/pull/95423) | 优化 diff 面板以跳过只读 shell 命令（`ls`、`git status`、`cat`）后的重新获取。 |
| **#96570** | [diff: command.run 钩子使用字面命令名称](https://github.com/anthropics/claude-code/pull/96570) | 通过读取字面命令名称进行钩子匹配，修复了斜杠命令启动顺序问题。 |

---

## 功能需求趋势

根据 issue 分析，以下功能方向需求最多：

1. **会话/会话透明度** — 用户希望了解自动记忆加载状态、会话标识符（用于 MCP）和遥测配置详情。
2. **Git/Cowork 集成改进** — 围绕仓库授权、PAT 处理和云会议 Git 操作的多

个问题。
3. **安全模型灵活性** — 需要权限门控的 opt-in，以允许在开发者控制的环境中输入密码。
4. **提示缓存成本控制** — 用户寻求更好的理解和控制缓存行为及令牌计数。
5. **跨平台桌面功能对等** — Windows 特定的功能差距（回复弹出框、侧边栏行为）与 macOS 相比。

---

## 开发者痛点

- **Git 代理回归 (#76248)**: Cloud/Cowork 用户无法使用 PAT 推送到授权仓库——主要工作流中断。
- **不透明的安全过滤器**: 用户遇到安全防护时无法了解触发原因 (#96118, #96907, #96912)。
- **记忆索引不透明 (#82056)**: 无法调试自动记忆是否正确加载或根本没有加载。
- **MCP 会话隔离 (#41836)**: 服务器无法跟踪并发会话，破坏多租户设置。
- **密码输入硬阻塞 (#78160)**: localhost 上的合法测试流程被过于严格的安全限制阻止。
- **沙箱配置不生效 (#95813)**: 排除的命令仍然以沙箱模式运行，违背用户意图。
- **崩溃清理 (#81210)**: 未处理的崩溃留下孤立进程和损坏的终端状态。

---

*基于 2026-09-25 的 GitHub 数据生成的周刊*</think>

# Claude Code 社区周刊 — 2026-09-25

## 今日要闻

**v2.1.282** 版本新增了 `maxProseWidth` 设置，可在宽终端中限制文本宽度，同时保持表格和代码块全宽显示。版本还为 `/status` 和 `claude doctor` 添加了启动通知和遥测诊断功能，提升了项目设置的可视性。与此同时，社区正在热烈讨论自动记忆索引透明度问题（#82056）和影响 Cloud/Cowork 会议的 Git 代理回归问题（#76248）。

---

## 版本发布

| 版本 | 关键更新 |
|---------|-------------|
| **v2.1.282** | 新增 `maxProseWidth` 设置，可在宽终端中限制文本宽度，同时表格/代码块保持全宽。添加启动通知、`/status` 和 `claude doctor` 条目，列出项目设置文件中的遥测变量。 |

---

## 热门 Issue

| # | Issue | 关注原因 | 社区反馈 |
|---|-------|----------------|-------------------|
| **#82056** | [会话无法确定其自动记忆索引是完整加载、部分加载还是未加载](https://github.com/anthropics/claude-code/issues/82056) | 用户无法了解自动记忆是完整加载、部分加载还是失败——使调试记忆问题变得不可能。 | **55 条评论**，1 👍 |
| **#76248** | [Git 代理现在阻止 Cloud/Cowork 会议中的所有推送 — PAT 穿透不再工作](https://github.com/anthropics/claude-code/issues/76248) | 严重回归：用户无法推送到"授权仓库集"之外的仓库，即使使用之前有效的精细 PAT。 | **38 条评论**，15 👍 |
| **#41836** | [未向 MCP 服务器发送会话/对话标识符](https://github.com/anthropics/claude-code/issues/41836) | MCP 服务器无法区分并发会话，导致无法进行每会话的状态管理。 | **17 条评论**，37 👍 |
| **#78160** | [密码输入的硬阻塞破坏合法开发/测试工作流](https://github.com/anthropics/claude-code/issues/78160) | Claude 拒绝在 localhost 输入测试凭证——即使是开发者自己的应用——阻碍了合法的测试流程。需要权限门控的 opt-in。 | **5 条评论**，14 👍 |
| **#90018** | [totalTokensReminder 导致工具循环中提示缓存持续失效](https://github.com/anthropics/claude-code/issues/90018) | 令牌提醒设置导致提示缓存失效，消除了增量缓存命中并增加了 API 成本。 | **7 条评论**，2 👍 |
| **#96118** | [Opus 5.5 安全防护标记了 reasoning_extraction 消息](https://github.com/anthropics/claude-code/issues/96118) | 用户看到不透明的安全过滤器错误，无法了解是什么触发了防护。 | **6 条评论**，1 👍 |
| **#95813** | [sandbox.excludedCommands 无效](https://github.com/anthropics/claude-code/issues/95813) | 列入排除列表的命令仍然以沙箱模式运行，违背了配置意图。 | **2 条评论**，4 👍 |
| **#94571** | [并发会话之间的文件更改归属不对称](https://github.com/anthropics/claude-code/issues/94571) | 一个会话的文件更改被错误地归属到另一个会话，造成混淆。 | **3 条评论**，1 👍 |
| **#81210** | [崩溃导致用户启动的后台进程孤立](https://github.com/anthropics/claude-code/issues/81210) | 不可捕获的崩溃导致后台进程继续运行，终端卡在鼠标报告模式，没有清理。 | **2 条评论**，0 👍 |
| **#95930** | [非会话文件更改被错误地显示为聊天中的 diff](https://github.com/anthropics/claude-code/issues/95930) | 分支更改/rebase 导致外部文件修改被误显示为 Claude 的编辑，误导用户。 | **2 条评论**，2 👍 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| **#96364** | [agents-md: 自动分页的 Read 不再计入交付](https://github.com/anthropics/claude-code/pull/96364) | 修复了嵌套 AGENTS.md 自动分页检测问题，使分页文件读取能正确附加目录上下文。 |
| **#96363** | [diff: 传递 --no-color 以强制 git 颜色](https://github.com/anthropics/claude-code/pull/96363) | 解决了当 git 中配置 `color.ui=always` 或 `color.diff=always` 时 diff 正文为空的问题。 |
| **#96487** | [telemetry: 行携带引擎版本信息](https://github.com/anthropics/claude-code/pull/96487) | 外部版本现在通过 `$.session.version()` 在遥测行中包含引擎版本、基础版本和构建时间。 |
| **#95423** | [diff: 只读 shell 命令不获取任何内容](https://github.com/anthropics/claude-code/pull/95423) | 优化 diff 面板以跳过只读 shell 命令（`ls`、`git status`、`cat`）后的重新获取。 |
| **#96570** | [diff: command.run 钩子使用字面命令名称](https://github.com/anthropics/claude-code/pull/96570) | 通过读取字面命令名称进行钩子匹配，修复了斜杠命令启动顺序问题。 |

---

## 功能需求趋势

根据 issue 分析，以下功能方向需求最多：

1. **会话/会话透明度** — 用户希望了解自动记忆加载状态、会话标识符（用于 MCP）和遥测配置详情。
2. **Git/Cowork 集成改进** — 围绕仓库授权、PAT 处理和云会议 Git 操作的多 个问题。
3. **安全模型灵活性** — 需要权限门控的 opt-in，以允许在开发者控制的环境中输入密码。
4. **提示缓存成本控制** — 用户寻求更好的理解和控制缓存行为及令牌计数。
5. **跨平台桌面功能对等** — Windows 特定的功能差距（回复弹出框、侧边栏行为）与 macOS 相比。

---

## 开发者痛点

- **Git 代理回归 (#76248)**: Cloud/Cowork 用户无法使用 PAT 推送到授权仓库——主要工作流中断。
- **不透明的安全过滤器**: 用户遇到安全防护时无法了解触发原因 (#96118, #96907, #96912)。
- **记忆索引不透明 (#82056)**: 无法调试自动记忆是否正确加载或根本没有加载。
- **MCP 会话隔离 (#41836)**: 服务器无法跟踪并发会话，破坏多租户设置。
- **密码输入硬阻塞 (#78160)**: localhost 上的合法测试流程被过于严格的安全限制阻止。
- **沙箱配置不生效 (#95813)**: 排除的命令仍然以沙箱模式运行，违背用户意图。
- **崩溃清理 (#81210)**: 未处理的崩溃留下孤立进程和损坏的终端状态。

---

*基于 2026-09-25 的 GitHub 数据生成的周刊*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English community digest into Simplified Chinese, following the specific rules provided. Let me carefully translate this while:

1. Keeping all Markdown structure exactly the same
2. Keeping URLs, numbers, dates, issue/PR numbers, code references as-is
3. Using natural technical Chinese register
4. Not adding any preamble or explanation
5. Not using markdown fences around the output

Let me go through and translate:</think>

# OpenAI Codex 社区简报 — 2026-09-25

## 今日要闻

Codex 团队本周发布了 **6 个 Rust alpha 版本**（v0.157–0.158 系列），并合并了 **20+ 个 PR**，涉及基础设施、平台兼容性和用户可见 bug。Windows 相关问题占据issue追踪器的热点位置——围绕沙盒、CLI 回归和桌面 UI 冻结的多条高评论 bug 表明平台稳定性仍面临挑战。新的 **Pro Max 订阅套餐** 现已推出，附带更新的显示名称。

---

## 版本发布

| 版本 | 类型 | 摘要 |
|---------|------|---------|
| [rust-v0.158.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.11) | Alpha | v0.158 Rust 发布系列的最新版本 |
| [rust-v0.158.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.10) | Alpha | — |
| [rust-v0.158.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.9) | Alpha | — |
| [rust-v0.158.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.8) | Alpha | — |
| [rust-v0.158.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.158.0-alpha.7) | Alpha | — |
| [rust-v0.157.0-alpha.11.1](https://github.com/openai/codex/releases/tag/rust-v0.157.0-alpha.11.1) | Alpha | v0.157 系列的补丁版本 |

*所有版本均为 Rust CLI/工具链更新。24 小时内未标记桌面客户端新版本。*

---

## 热点 Issue

| # | Issue | 为何重要 | 反应 |
|---|-------|----------------|----------|
| [#20214](https://github.com/openai/codex/issues/20214) | **[Windows] Codex 应用在 Windows 11 专业版上频繁卡顿/闪烁** — 尽管拥有足够内存（32GB）和现代 Ryzen 5 CPU，桌面应用仍反复冻结。 | 高影响：阻止 Windows 专业版用户的日常工作。这是 **评论最多的 issue**（112 条评论，87 个 👍），表明问题广泛存在。 | 社区请求紧急修复；变通方案讨论进行中 |
| [#46388](https://github.com/openai/codex/issues/46388) | **[Windows] CLI 0.155.0 回归：运行期间路径验证时提升沙盒初始化失败** — 在 0.154.0 中正常，0.155.0 中失败 | 明确的回归问题：近期 CLI 版本引入。用户可以回滚版本，但阻止了升级。 | 13 条评论，3 个 👍 |
| [#46986](https://github.com/openai/codex/issues/46986) | **现有对话中的发送按钮保持禁用状态** — 变通方法：切换到设置页面后再切回 | 阻塞 UX 的 bug：无法在持续对话中发送消息。属于已知的 Windows 编写器状态问题系列。 | 12 条评论，1 个 👍 |
| [#47511](https://github.com/openai/codex/issues/47511) | **缺少 git commit 和 push 按钮** — 回归：可见控件被移除 | 工作流回归：用户依赖侧边栏的一键 commit/push。 | 10 条评论，27 个 👍 |
| [#44736](https://github.com/openai/codex/issues/44736) | **Windows：ChatGPT 项目预热锁定本地镜像；启动时擦除 node_repl cwd 变通方案** | 与项目初始化和镜像同步相关——阻塞 Windows Work 项目使用。 | 18 条评论，0 个 👍 |
| [#42520](https://github.com/openai/codex/issues/42520) | **Windows Codex 桌面版：已安装 Chrome 集成但 chrome-native-hosts-v2.json 从未创建** | Windows 上的浏览器集成损坏——影响开发工作流。 | 15 条评论，1 个 👍 |
| [#15807](https://github.com/openai/codex/issues/15807) | **VSCode 插件：无法通过 `Codex: New Codex Agent` 打开多个窗口** | 多显示器 / 多项目用户受阻。 | 11 条评论，15 个 👍 |
| [#46114](https://github.com/openai/codex/issues/46114) | **Windows 桌面版：提升沙盒失败，提示"需要有效的 :root 读取权限"** | 在受影响的 Windows 机器上完全阻塞沙盒执行。 | 13 条评论，4 个 👍 |
| [#33266](https://github.com/openai/codex/issues/33266) | **MCP tools/list_changed 通知不会使延迟工具缓存失效** | MCP 服务器集成 bug——过时的工具列表导致错误行为。 | 8 条评论，9 个 👍 |
| [#47868](https://github.com/openai/codex/issues/47868) | **Windows：Codex 内使用 stdio 管道时 Node.js spawn 失败并报 EPERM** | Windows 上的沙盒 Node 执行损坏——阻塞许多开发任务。 | 4 条评论，0 个 👍 |

---

## 主要 PR 进展

| # | PR | 变更内容 |
|---|-----|--------------|
| [#47971](https://github.com/openai/codex/pull/47971) | **添加 Pro Max 套餐支持并更新 Pro 显示名称** | 在认证/限制中识别 `promax`；更新 UI 标签："Pro"、"Pro (更多)"、"Pro (最大)" |
| [#47974](https://github.com/openai/codex/pull/47974) | **跨可写根目录保留 Git 目录保护** | 修复 `.git` 指针解析到另一个可写根目录内目录的问题，保留元数据保护 |
| [#47975](https://github.com/openai/codex/pull/47975) | **防止过时的语音回答在语音恢复时重新出现** | 过滤当语音失败作为文本出现在较新问题下时恢复的语音回答 |
| [#47970](https://github.com/openai/codex/pull/47970) | **暴露当前回合的环境选择** | 添加 `current_turn_environment_selections()` 以反映回合中实时的环境变化 |
| [#47967](https://github.com/openai/codex/pull/47967) | **将 Flex 容量失败作为独立终端错误呈现** | 在 HTTP 429 中识别 `flex_unavailable` 并流式传输专用的 "Flex capacity unavailable." 错误 |
| [#47957](https://github.com/openai/codex/pull/47957) | **将工具调用观察绑定到外发 Responses 消息预算** | 修剪超出 15 MiB 消息预算的工具调用/参数 |
| [#47956](https://github.com/openai/codex/pull/47956) | **支持图像编辑请求中的文件引用** | 允许 `ImageEditRequest` 同时接受 `image_url` 和 `file_id` 输入 |
| [#47968](https://github.com/openai/codex/pull/47968) | **处理 Btrfs 设备不匹配时屏蔽守护进程套接字** | 仅当打开的目录和挂载信息条目共享相同设备 ID 时才允许设备不匹配 |
| [#47964](https://github.com/openai/codex/pull/47964) | **为 Amazon Bedrock Runtime 保留客户端代理头** | 为 Bedrock Runtime 请求保留 `x-amzn-mantle-client-agent: codex` 头 |
| [#47962](https://github.com/openai/codex/pull/47962) | **为 Cargo 和 Bazel rustc 作业请求透明大页** | 为 Cargo 启用 `MALLOC_CONF=thp:always`；为 Bazel 修补 `rules_rust` |

---

## 热点讨论

| # | 分类 | 讨论 | 摘要 |
|---|----------|------------|---------|
| [#6065](https://github.com/openai/codex/discussions/6065) | **公告** | **帮助测试实验性 Windows 沙盒** | 团队寻求 CLI 测试人员用于原生 Windows 上的实验性文件系统/网络沙盒——目标是更少的审批和更安全的代理模式。 |
| [#47058](https://github.com/openai/codex/discussions/47058) | **想法** | **使指令加载、功能和执行证据可见且可审计** | 请求：(1) 指令加载报告，(2) 可用功能 UI，(3) 执行证据日志——标准防护措施而非自定义提示词。 |
| [#47938](https://github.com/openai/codex/discussions/47938) | **想法** | **单个私有项目的安全** | 请求对单个 ChatGPT 项目提供可选的 PIN/密码/生物识别锁定——即使账户已登录也能保护敏感项目。 |
| [#47730](https://github.com/openai/codex/discussions/47730) | **展示** | **ghfs：将 GitHub issue 作为只读本地文件** | 第三方工具将仓库 issue 挂载为 `.ghfs/` 下的 Markdown——让编码代理通过 `cat` 读取 issue 而非 GitHub API 调用。 |
| [#47782](https://github.com/openai/codex/discussions/47782) | **展示** | **Vestige，编码代理的记忆系统** | 提供代理持久记忆的 MCP 服务器插件，具有"回填"功能可在错误发生时自动回溯。 |

---

## 功能请求趋势

1. **增强项目安全** — 多条请求对单个 ChatGPT 项目提供可选的 PIN/密码/生物识别锁定以保护敏感项目
2. **可审计的代理行为** — 用户希望看到加载了哪些指令、哪些功能处于活跃状态、以及执行了哪些操作
3. **多窗口/多实例 VSCode 支持** — 从同一 VSCode 实例打开多个 Codex 代理窗口
4. **Git 工作流可见性** — 恢复 commit/push 按钮；在会话选择器中添加当前工作树过滤
5. **更好的用量计量** — 持续显示剩余配额；计量异常检测（例如：几分钟内消耗了 5 小时配额）

---

## 开发者痛点

1. **Windows 平台不稳定** — 本周期的主要主题：
   - Windows 11 专业版上的冻结/闪烁（高配置机器）
   - 沙盒初始化 CLI 回归（0.154 → 0.155）
   - 权限错误导致的提升沙盒失败
   - Chrome 集成失败和镜像同步问题

2. **桌面应用 UX 回归** — 发送按钮禁用、缺少 commit/push UI、编写器状态 bug

3. **MCP 工具缓存** — `tools/list_changed` 通知不会使延迟工具缓存失效，导致工具列表过时

4. **用量计量异常** — 报告称几分钟内消耗了 5 小时配额，但无明确解释

5. **远程会话连续性** — "分页聊天尚不能在另一台主机上继续" 阻塞跨设备工作流

6. **VSCode 扩展缺失** — 商业工作区缺少用量设置；重新加载后侧边栏活动对话无法恢复

---

*简报结束。数据来源于 github.com/openai/codex — 2026-09-25。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the GitHub community digest to Chinese. Let me translate it following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, issue/PR references verbatim
4. Keep project names, repository slugs, etc. in original form
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me go through and translate this carefully:

**Title**: Gemini CLI Community Digest — 2026-09-25
→ Gemini CLI 社区简报 — 2026-09-25

**Highlights section** - translate naturally

**Releases section** - keep the table format

**Hot Issues section** - keep the table, translate descriptions

**Key PR Progress section** - keep the table, translate descriptions

**Feature Request Trends** - translate the themes

**Developer Pain Points** - translate the pain points

Let me do this carefully now:</think>

# Gemini CLI 社区简报 — 2026-09-25

## 今日要闻

Gemini CLI 团队发布了 **v0.62.0-nightly.20260924.g8e70c862f**，包含两个针对性修复：VSC 集成测试检测，以及连接恢复时的重试进度指示器。更重要的是，一个针对文件工具的**关键竞态条件修复**（#29494）已合并，解决了多个工具并发执行时可能出现的更新丢失问题。Windows/WSL/无头环境下的认证循环修复（#29448）仍在开放状态——这是企业用户关注的高优先级事项。

---

## 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v0.62.0-nightly.20260924.g8e70c862f** | 合并 2 个 PR：检查 VSC 集成测试是否存在后再运行测试（[#29462](https://github.com/google-gemini/gemini-cli/pull/29462)）；连接恢复时显示重试进度指示器（[#28340](https://github.com/google-gemini/gemini-cli/pull/28340)） |

---

## 热门 Issue

| # | Issue | 优先级 | 为何重要 | 社区反馈 |
|---|-------|----------|----------------|-----------|
| **#22323** | [子代理在 MAX_TURNS 报告后恢复，误报为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 子代理在达到轮次限制未完成分析时错误报告成功——掩盖了实际失败 | 13 条评论，2 👍 |
| **#21409** | [通用代理挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | CLI 在求助于通用代理时无限挂起；简单任务阻塞长达一小时 | 8 条评论，8 👍 |
| **#19873** | [零依赖操作系统沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 提出利用模型原生 bash 亲和性结合沙箱——可能带来重大安全和用户体验提升 | 9 条评论，1 👍 |
| **#22745** | [评估 AST 感知文件读取、搜索、映射的影响](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 追踪 AST 感知工具以减少 token 膨胀和错位读取的史诗级特性 | 7 条评论，1 👍 |
| **#21968** | [Gemini 不够频繁使用技能和子代理](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 模型忽略自定义技能/子代理，除非明确指示——降低了自动化价值 | 6 条评论 |
| **#26525** | [添加确定性脱敏并减少自动记忆日志](https://github.com/google-gemini/gemini-cli/issues/26525) | P2 | 安全问题：自动记忆在提取前将未脱敏的密钥发送到模型上下文 | 5 条评论 |
| **#26522** | [阻止自动记忆无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522) | P2 | 自动记忆可能在低信号会话中陷入无限重试循环 | 4 条评论 |
| **#22267** | [浏览器代理忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267) | P1 | 浏览器代理无视用户配置如 `maxTurns`——破坏预期行为 | 4 条评论 |
| **#21983** | [浏览器子代理在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 浏览器代理在 Wayland 显示服务器上不可用 | 4 条评论，1 👍 |
| **#22186** | [get-shit-done 输出钩子导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | 任务完成摘要打印时 CLI 间歇性崩溃 | 3 条评论 |

---

## 关键 PR 进展

| PR | 优先级 | 状态 | 内容描述 |
|----|----------|--------|--------------|
| **[#29494](https://github.com/google-gemini/gemini-cli/pull/29494)** — 序列化文件工具操作 | P1 | ✅ 已关闭 | 修复并发编辑同一文件时的丢失更新竞态条件 |
| **[#29448](https://github.com/google-gemini/gemini-cli/pull/29448)** — 阻止无限认证循环 | P1 | 开放中 | 修复 Windows/WSL/无头环境下的认证循环；处理与 VS Code 扩展的文件竞争 |
| **[#29451](https://github.com/google-gemini/gemini-cli/pull/29451)** — 限制工具输出大小 | P1 | ✅ 已关闭 | 防止长时运行的代理循环因无限制工具输出导致内存膨胀 |
| **[#29482](https://github.com/google-gemini/gemini-cli/pull/29482)** — 添加决策门 | — | 开放中 | 新增可选的快速决策层；将简单消息路由到轻量路径 |
| **[#29487](https://github.com/google-gemini/gemini-cli/pull/29487)** — 恢复暂停的 stdin | P1 | ✅ 已关闭 | 修复集成终端中能力检测后 stdin 冻结问题 |
| **[#29492](https://github.com/google-gemini/gemini-cli/pull/29492)** — 避免 shell 插值 | 安全 | 开放中 | 修复沙箱构建中路径含 shell 元字符的漏洞 |
| **[#29476](https://github.com/google-gemini/gemini-cli/pull/29476)** — 解决回车键挂起 | P1 | 开放中 | 修复 IDE companion 启用时工具确认回车无响应问题 |
| **[#29490](https://github.com/google-gemini/gemini-cli/pull/29490)** — 避免重复工具响应轮次 | P1 | 开放中 | 防止使用 `-r` 恢复会话时重复工具结果 |
| **[#29489](https://github.com/google-gemini/gemini-cli/pull/29489)** — 阻止 Flash-Lite 模型使用 HIGH thinking | P1 | 开放中 | 修复 Flash-Lite 模型上不兼容的 thinking budget（budget: 0） |
| **[#29488](https://github.com/google-gemini/gemini-cli/pull/29488)** — MCP OAuth RFC 9207 合规 | P1 | 开放中 | 修复缺少 `iss` 字段的 MCP 服务器授权响应导致认证失败 |

---

## 功能需求趋势

从 issue 追踪器来看，出现了几个明确的趋势：

1. **代理可靠性与恢复** — 多个 P1 缺陷涉及子代理挂起、崩溃和误报，需要关注
2. **内存与上下文优化** — AST 感知读取（#22745）、"得体提取"（#19561）和 token 节约模式正在推进中
3. **安全加固** — 沙箱（#19873）、确定性脱敏（#26525）和 shell 注入修复
4. **更好的工具使用** — 鼓励技能/子代理调用，减少破坏性命令
5. **平台兼容性** — Wayland、无头环境和跨平台认证仍是痛点

---

## 开发者痛点

- **子代理行为不可预测**：挂起、误报成功、忽略配置侵蚀信任
- **内存增长无界限**：长时运行会话无清理膨胀；自动记忆无限重试
- **Windows/WSL 认证摩擦**：与 VS Code 扩展的文件竞争导致无限循环
- **终端性能问题**：调整大小闪烁和交互式提示挂起影响日常使用
- **配置不一致**：部分代理完全忽略 `settings.json` 覆盖

---

*来源：github.com/google-gemini/gemini-cli — 2026-09-25*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese. Let me carefully follow the rules:

1. Output ONLY the translation - no preamble, no explanation
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue references (#4742, etc.), version tags, file paths as-is
4. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title:** 
GitHub Copilot CLI Community Digest — September 25, 2025 (should be 2026 based on the content)
Wait, looking at the original, it says "September 25, 2026" - but in the system prompt it says today's date is 2025-09-25. Let me check the original again... Actually the original says "September 25, 2026" - I'll keep it as is since the user said preserve numbers and dates verbatim.

**Section 1: Today's Highlights**
GitHub发布了v1.0.89系列的两次小版本更新：v1.0.89-3修复了Ask-user表单错误合并不同问题中自定义"Other"答案的问题，v1.0.89-2则完善了MCP预注册OAuth客户端的OAuth scope支持，并改进了本地会话中的Esc Esc输入行为。问题追踪器仍然活跃，多个高影响力bug影响会话管理和内存稳定性。

**Section 2: Releases**
表格翻译 - keep version numbers and changes in English where they describe technical things but translate the narrative parts:

| 版本 | 变更 |
|------|------|
| **v1.0.89-3** | **修复：** Ask-user表单现在可以在不同问题之间保持独立的自定义"Other"答案，保留多问题流程中的用户意图。 |


| **v1.0.89-2** | **新增：** MCP预注册OAuth客户端现在遵循配置的`oauthScopes`。**新增：** 在本地会话中，当聊天输入为空时按Esc Esc现在可以正确撤销尚未开始回复的提示，并将其从对话中移除。 |

**Section 3: Hot Issues**
表格翻译，保留URLs和issue numbers:

| Issue | 摘要 | 社区关注度 |
|-------|------|-----------|
| **[#4742](https://github.com/github/copilot-cli/issues/4742)** | 桌面应用1.1.15阻止在运行一个本地（分支）会话时创建第二个会话 — "此项目已有活动的本地工作区" | 11条评论，5👍 — 阻断多任务工作流；影响并行分支管理 |
| **[#2058](https://github.com/github/copilot-cli/issues/2058)** | **[已关闭]** 功能请求：添加`/fork`命令以将会话分支用于支线任务而不破坏主要目标 | 10条评论，10👍 — 强烈需求；支持非破坏性探索 |
| **[#3534](https://github.com/github/copilot-cli/issues/3534)** | WSL2 (ARM64)：`/copy`因1.0.55中的cmd.exe引号问题失败，退出码为1 | 7条评论，5👍 — ARM64 WSL上剪贴板功能损坏；暂无解决方案 |
| **[#4725](https://github.com/github/copilot-cli/issues/4725)** | Linux上频繁出现JavaScript堆内存溢出 | 6条评论，1👍 — 使用期间崩溃；稳定性问题 |
| **[#4699](https://github.com/github/copilot-cli/issues/4699)** | 长会话`--resume`时OOM崩溃；转储文件写入当前目录 | 6条评论，7👍 — 重度用户影响严重；污染工作区 |
| **[#4905](https://github.com/github/copilot-cli/issues/4905)** | 桌面应用会话在启动几分钟后失效 — "GitHub凭证注册不再可用" | 5条评论，4👍 — 会话无法使用；需重启 |
| **[#4929](https://github.com/github/copilot-cli/issues/4929)** | 进程本

地auth令牌停止刷新；所有提示失败直至重启 | 5条评论，0👍 — 长时间运行的进程丢失认证；`/login`无法恢复 |
| **[#4683]((https://github.com/github/copilot-cli/issues/4683))** | 每个shell命令在PowerShell ConstrainedLanguage模式下发出虚假错误 | 3条评论，0👍 — 影响企业环境；输出混乱 |
| **[#4780](https://github.com/github/copilot-cli/issues/4780)** | 会话压缩OOM且永不完成，导致会话永久无法恢复 | 2条评论，3👍 — 数据丢失风险；会话永久损坏 |
| **[#4755](https://github.com/github/copilot-cli/issues/4755)** | 当排队车道消息到达回合末尾时会话永久卡死 | 2条评论，0👍 — 进程挂起；需强制终止 |

---

### Section 4: Key PR Progress

Only one pull request updated in the last 24 hours:

| PR | 摘要 |
|----|------|
| **[#4948](https://github.com/github/copilot-cli/pull/4948)** | **OPEN** — Refreshes the pinned `actions/github-script` dependency to v9.0.0 release commit. |

---

### Section 5: Feature Request Trends

Based on issue analysis, the following feature directions are most requested:

1. **Session Branching / Forking** — Users want `/fork` to create side branches without losing context (#2058, closed)
2. **Timeline Search** — Enable searchable history to jump to previous entries (#2170, closed)
3. **Memory Management** — Reduce OOM crashes during long sessions and compaction (#4699, #4725, #4780)
4. **Sparse Checkout for Plugins** — Install only shipping assets, not entire repos (#2399)
5. **BYOK Credential Refresh** — Support refreshing provider credentials without restarting CLI (#3682, closed)
6. **Plugin Skills Visibility** — Ensure marketplace plugins appear in `available_skills` for the main agent (#2753)

---

### Section 6: Developer Pain Points

- **Memory instability**: JavaScript堆内存溢出错误困扰长时间运行的会话，尤其在Linux上以及`--resume`操作期间
- **Session lifecycle bugs**: 多个问题导致会话卡住、永久中止或无法恢复（#4755、#4780）
- **Authentication fragility**: 令牌刷新失败导致需要完全重启；进程本地认证无法正常恢复（#4929）
- **Platform-specific breakage**: WSL2 ARM64剪贴板、PowerShell ConstrainedLanguage模式、Windows沙箱策略冲突
- **MCP integration gaps**: OAuth scopes未遵循、注册验证失败、市场插件静默注册失败

---

*摘要生成自github.com/github/copilot-cli — 数据获取于2025年9月25日*</think>

# GitHub Copilot CLI 社区简报 — 2025年9月25日

---

## 1. 今日要闻

GitHub发布了v1.0.89系列的两次小版本更新：**v1.0.89-3** 修复了Ask-user表单错误合并不同问题中自定义"Other"答案的问题，**v1.0.89-2** 则完善了MCP预注册OAuth客户端的oauthScopes支持，并改进了本地会话中的Esc Esc输入行为。问题追踪器仍然活跃，多个高影响力bug正影响会话管理和内存稳定性。

---

## 2. 版本发布

| 版本 | 变更 |
|------|------|
| **v1.0.89-3** | **修复：** Ask-user表单现在可以在不同问题之间保持独立的自定义"Other"答案，保留多问题流程中的用户意图。 |
| **v1.0.89-2** | **新增：** MCP预注册OAuth客户端现在遵循配置的`oauthScopes`。**新增：** 在本地会话中，当聊天输入为空时按Esc Esc现在可以正确撤销尚未开始回复的提示，并将其从对话中移除。 |

---

## 3. 热门问题

| Issue | 摘要 | 社区关注度 |
|-------|---------|------------------|
| **[#4742](https://github.com/github/copilot-cli/issues/4742)** | 桌面应用1.1.15阻止在运行一个本地（分支）会话时创建第二个 — "此项目已有活动的本地工作区" | 11条评论，5 👍 — 阻断多任务工作流；影响并行分支管理 |
| **[#2058](https://github.com/github/copilot-cli/issues/2058)** | **[已关闭]** 功能请求：添加 `/fork` 命令以将会话分支用于支线任务而不破坏主要目标 | 10条评论，10 👍 — 强烈需求；支持非破坏性探索 |
| **[#3534](https://github.com/github/copilot-cli/issues/3534)** | WSL2 (ARM64)：`/copy` 因 1.0.55 中的 cmd.exe 引号问题失败，退出码为 1 | 7条评论，5 👍 — ARM64 WSL 上剪贴板功能损坏；暂无解决方案 |
| **[#4725](https://github.com/github/copilot-cli/issues/4725)** | Linux 上频繁出现 JavaScript heap out of memory | 6条评论，1 👍 — 使用期间崩溃；稳定性问题 |
| **[#4699](https://github.com/github/copilot-cli/issues/4699)** | 长 `--resume` 会话时 OOM 崩溃；core dump 写入 cwd | 6条评论，7 👍 — 重度用户影响严重；污染工作目录 |
| **[#4905](https://github.com/github/copilot-cli/issues/4905)** | 桌面应用会话在启动几分钟后失效 — "GitHub credential registration is no longer available" | 5条评论，4 👍 — 会话无法使用；需重启 |
| **[#4929](https://github.com/github/copilot-cli/issues/4929)** | 进程本地 auth token 停止刷新；所有 prompt 失败直至重启 | 5条评论，0 👍 — 长时间运行进程丢失认证；`/login` 无法恢复 |
| **[#4683]((https://github.com/github/copilot-cli/issues/4683))** | 每个 shell 命令在 PowerShell ConstrainedLanguage 模式下发出虚假错误 | 3条评论，0 👍 — 企业环境受影响；输出嘈杂 |
| **[#4780](https://github.com/github/copilot-cli/issues/4780)** | 会话 compaction OOM 且永不完成，导致会话永久无法恢复 | 2条评论，3 👍 — 数据丢失风险；会话变砖 |
| **[#4755](https://github.com/github/copilot-cli/issues/4755)** | 当排队 lane 消息到达回合末尾时会话永久卡死 | 2条评论，0 👍 — 进程挂起；需 kill -9 |

---

## 4. PR 进展

| PR | 摘要 |
|----|---------|
| **[#4948](https://github.com/github/copilot-cli/pull/4948)** | **OPEN** — 更新 pinned `actions/github-script` 依赖至 v9.0.0 release commit。 |

*注：过去24小时仅有1个PR更新。*

---

## 5. 功能需求趋势

基于 issue 分析，以下功能方向呼声最高：

1. **会话分支/Forking** — 用户期望 `/fork` 创建旁支而不丢失上下文（#2058，已关闭）
2. **时间线搜索** — 启用可搜索历史以跳转到之前的条目（#2170，已关闭）
3. **内存管理** — 减少长会话和 compaction 期间的 OOM 崩溃（#4699、#4725、#4780）
4. **插件稀疏检出** — 仅安装发布的资源，而非整个仓库（#2399）
5. **BYOK 凭证刷新** — 支持在不重启 CLI 的情况下刷新 provider 凭证（#3682，已关闭）
6. **插件技能可见性** — 确保市场插件在主 agent 的 `available_skills` 中可见（#2753）

---

## 6. 开发者痛点

- **内存不稳定**：JavaScript heap OOM 错误困扰长会话，尤其在 Linux 和 `--resume` 操作期间
- **会话生命周期 bug**：多个问题导致会话卡住、永久 wedged 或无法恢复（#4755、#4780）
- **认证脆弱性**：token 刷新失败需完全重启；进程本地认证无法优雅恢复（#4929）
- **平台特定故障**：WSL2 ARM64 剪贴板、PowerShell ConstrainedLanguage 模式、Windows 沙箱策略冲突
- **MCP 集成缺口**：OAuth scopes 未被遵循、registry 验证失败、市场插件静默注册失败

---

*简报生成自 github.com/github/copilot-cli — 数据获取于2025年9月25日*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this OpenCode Community Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the text content
2. Keep URLs, issue/PR numbers, code identifiers, project names, etc. as-is
3. Preserve the Markdown structure exactly
4. Use natural technical Chinese register

Let me go through and translate while maintaining the structure and formatting.</think>

# OpenCode 社区简报 — 2026-09-25

## 今日要闻

OpenCode 开发持续活跃，context 管理与模型限制方面取得重要进展。核心团队合并了多个改进 compaction 行为和输出适配的 PR，同时多个社区反馈的问题凸显了 MCP 权限、本地化以及 V2 迁移路径方面的持续挑战。一个值得关注的新 PR 修复了 gray-matter 缓存污染问题，该问题会导致包含无效 YAML frontmatter 的 skills 被静默丢弃。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

1. **[#49057](https://github.com/anomalyco/opencode/issues/49057)** — **通过 OpenCode Zen 访问 Muse Spark 1.3 Free 受限**  
   用户报告在使用免费的 Muse Spark 1.3 模型通过 OpenCode Zen 时收到 `user_blocked` 错误，且没有申诉渠道。15 条评论，0 👍

2. **[#43748](https://github.com/anomalyco/opencode/issues/43748)** — **发布的配置 schema 拒绝文档中的 V2 字段**  
   `opencode.ai/config.json` 中的 JSON Schema 不包含 V2 字段如 `skills`、`mcp.*` 和 `permissions`，导致编辑器中出现误报验证错误。6 条评论，9 👍

3. **[#50843](https://github.com/anomalyco/opencode/issues/50843)** — **GitLab Duo 工作流在自托管实例上失败**  
   两个问题：缺少工作目录/上下文，以及 OAuth token 刷新失效。5 条评论，0 👍

4. **[#48743](https://github.com/anomalyco/opencode/issues/48743)** — **需要 MCP 预热/预启动机制**  
   使用 14+ 个本地 stdio MCP 服务器时，全部在会话启动时被标记为失败，需要手动重启。功能请求预启动/重连机制。5 条评论，2 👍

5. **[#50091](https://github.com/anomalyco/opencode/issues/50091)** — **免费使用配额未正确重置**  
   用户报告配额在耗尽后意外延期而非约 20 小时后重置。3 条评论，4 👍

6. **[#51087](https://github.com/anomalyco/opencode/issues/51087)** — **TodoWrite 在非英语区域设置下崩溃**  
   Desktop 2.0.16 在使用泰语区域设置渲染会话时间线时抛出 `TypeError: Iterable yielded undefined`。2 条评论，0 👍

7. **[#50986](https://github.com/anomalyco/opencode/issues/50986)** — **One Dark Pro 工作区消息对比度低**  
   工作区会话中的用户消息对比度为 1.2:1（难以辨认），而本地会话中为 14.1:1。2 条评论，0 👍

8. **[#50168](](https://github.com/anomalyco/opencode/issues/50168)** — **Desktop 缩放在重启后重置**  
   Ctrl+/Ctrl- 缩放设置未在应用重启后持久化。2 条评论，2 👍

9. **[#51241](https://github.com/anomalyco/opencode/issues/51241)** — **当 shell/读取权限被拒绝时免费模型失败**  
   当 `shell` 或 `read` 权限设置为 `deny` 时，OpenCode 免费模型报错。0 条评论，0 👍

10. **[#51228](https://github.com/anomalyco/opencode/issues/51228)** — **TUI 列表渲染时超出最大调用栈大小**  
    `applyListRenderable` 和 `applyListItemChildren` 之间的无限递归导致 TUI 崩溃。0 条评论，0 👍

---

## 关键 PR 进展

1. **[#51245](https://github.com/anomalyco/opencode/pull/51245)** — **fix(core): 解析 frontmatter 时绕过 gray-matter 内容缓存**  
   修复 #51218 — 防止失败的 YAML 解析留下过期条目导致包含无效 frontmatter 的 skills 被静默丢弃。

2. **[#51235](https://github.com/anomalyco/opencode/pull/51235)** — **fix(core): 在输入窗口的 85% 时触发 compaction**  
   自动 compaction 现在在 85% 时开始而非固定的 20k/32k 预留，修复了小上下文窗口的过度 compaction 问题。

3. **[#51021](https://github.com/anomalyco/opencode/pull/51021)** — **feat(core): 使输出限制适应上下文窗口**  
   根据可用上下文动态调整输出限制；关闭 #46595 和 #47398。

4. **[#51238](https://github.com/anomalyco/opencode/pull/51238)** — **fix(core): 适配模型限制并恢复 compaction 溢出**  
   支持高达 256k 的输出限制；处理 compaction 溢出恢复。

5. **[#50965](https://github.com/anomalyco/opencode/pull/50965)** — **feat(core): 添加 session model.select 钩子用于每步模型路由**  
   支持插件在每步前动态选择模型，解决 #50729。

6. **[#51237](https://github.com/anomalyco/opencode/pull/51237)** — **feat(core): 让 title 钩子选择模型；使用 Copilot 的工具模型**  
   通过使用免费的 `gpt-4o-mini` 工具模型修复 title 生成的计费问题。

7. **[#50837](https://github.com/anomalyco/opencode/pull/50837)** — **feat(codemode): 在操作符中正确处理 program valueOf 和 toString**  
   在操作符和转换中实现自定义对象的正确 `valueOf`/`toString` 处理。

8. **[#51083](https://github.com/anomalyco/opencode/pull/51083)** — **fix(core): 在权限错误中包含匹配的拒绝规则**  
   在权限错误中显示匹配了哪个拒绝模式，改进调试体验。

9. **[#51243](https://github.com/anomalyco/opencode/pull/51243)** — **fix(tui): 处理启动后存储监听器错误**  
   #51210 的后续修复 — 处理延迟触发的 `fs.watch` 错误以防止 TUI 崩溃。

10. **[#51240](https://github.com/anomalyco/opencode/pull/51240)** — **fix(desktop): 在浮动内容下保持浏览器页面可见**  
    防止应用内浏览器在菜单/选择下拉框重叠时变白。

---

## 功能请求趋势

| 类别 | 热门请求 |
|----------|--------------|
| **模型/Provider** | 本地/云端/混合模式控制 (#51244)，自定义 provider 图标 (#51234)，斜杠命令中的模型变体 (#51234) |
| **UI/UX** | 可配置的推理气泡 (#51229)，运行中工具调用的耗时显示 (#50891)，TUI 键盘陷阱修复 (#47624) |
| **权限** | 执行前工具钩子/防护栏 (#51230)，自定义 agent 权限规范 (#50429)，MCP 权限 UX (#51223, #51224) |
| **MCP** | 预热/预启动机制 (#48743)，GitLab Duo 自托管支持 (#50843) |
| **可观测性** | 原生 OpenTelemetry 支持 (#51230) |
| **系统** | 带干净关闭功能的系统托盘 (#50633) |

---

## 开发者痛点

- **V2 迁移摩擦**：非 git 目录的会话历史在 V1→V2 导入后丢失 (#50551)；V2 配置 schema 与文档不匹配 (#43748)
- **本地化缺口**：TodoWrite 在非泰语区域设置下崩溃 (#51087)，One Dark Pro 主题对比度问题 (#50986)
- **MCP 可靠性**：多 MCP 服务器冷启动失败 (#48743)，Code Mode 中权限请求静默失败 (#51223)
- **权限复杂性**：免费模型在权限被拒绝时失败 (#51241)，自定义 agent 权限需要显式拒绝规则 (#50429)
- **Desktop UX**：缩放未持久化 (#50168)，权限检查时应用冻结 (#40066)，后台 CLI 服务中的过时配置 (#50633)
- **文档**：无官方 2.x.x 版本说明 (#50345)

---

*基于 GitHub 数据生成 — 2026-09-25*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the GitHub digest into Simplified Chinese. I need to:
1. Keep the structure exactly as-is (Markdown headings, tables, lists, etc.)
2. Translate the content into natural technical Chinese
3. Keep all technical identifiers, URLs, issue numbers as-is
4. Maintain the tone of a developer newsletter

Let me go through and translate section by section:

1. Title: "Pi Community Digest — 2026-09-25" → "Pi 社区摘要 — 2026-09-25"

2. Project info: Keep as-is

3. Section 1: Today's Highlights - translate naturally

4. Section 2: Releases - translate

5. Section 3: Hot Issues - translate issues but keep # numbers and URLs

6. Section 4: Key PR Progress - translate but keep PR numbers and URLs

7. Section 5: Hot Discussions - translate

8. Section 6: Feature Request Trends - translate table content

9. Section 7: Developer Pain Points - translate

10. Footer - translate

Let me do this translation carefully, maintaining the technical register.</think>

# Pi 社区摘要 — 2026-09-25

**项目：** earendil-works/pi  
**Issue 总数（过去 24 小时）：** 50 | **PR：** 11 | **发布：** 无

---

## 1. 今日要闻

Pi 项目在跨平台兼容性和多供应商支持方面取得显著进展。新增了 **OTLP/HTTP 导出器**（`pi-otel`）包，实现了 OpenTelemetry 集成。Windows 用户仍面临扩展加载时 `shellPath` 路径解析不确定的问题，社区则关闭了多个围绕图像渲染、工具结果处理和会话回放的长期 bug。Azure Foundry Chat Completions 支持正在开发中。

---

## 2. 发布动态

过去 24 小时内无新版本发布。

---

## 3. 热门 Issue

### Issue #9361 — Windows：`shellPath` 在加载扩展时被非确定性忽略
**状态：** 开启 | **评论：** 11 | 👍: 0  
📎 https://github.com/earendil-works/pi/issues/9361

在 Windows 上，当加载任何扩展时，配置中的有效 `shellPath` 会被静默忽略，回退到 Git Bash 路径和 PATH 解析。这对 Windows 高级用户造成了可复现性阻塞。

---

### Issue #8896 — /export HTML 静默丢弃 `display:false` 的自定义消息
**状态：** 已关闭 | **评论：** 8 | 👍: 0  
📎 https://github.com/earendil-works/pi/issues/8896

`/export` HTML 输出会丢弃设置了 `display:false` 的自定义消息，导致依赖 TUI 上下文的会话导出失败。已在 PR #10020 中修复。

---

### Issue #8643 — Bedrock：OpenAI 模型拒绝 `toolResult.content` 中嵌套的图像
**状态：** 开启 | **评论：** 7 | 👍: 2  
📎 https://github.com/earendil-works/pi/issues/8643

工具结果中嵌套的图像会导致 Bedrock 托管的 OpenAI 模型拒绝请求。作者已在分支上准备好修复方案；需要审核以将图像提升到同级的用户内容块中。

---

### Issue #9674 — mistral-conversations：空内容 delta 打开空的文本块（GLM 5.x）
**状态：** 开启 | **评论：** 7 | 👍: 0  
📎 https://github.com/earendil-works/pi/issues/9674

GLM 模型的零长度 `content: ""` delta 会打开空的文本块，导致回放时出现 400 错误。是 #8069 的后续；影响使用 Mistral 原生提示缓存的用户。

---

### Issue #9255 — TUI 变更行位于视口上方时触发全屏重绘风暴
**状态：** 开启 | **评论：** 7 | 👍: 1  
📎 https://github.com/earendil-works/pi/issues/9255

在长会话中，当思考区域超过视口高度时，`TuiMainScreen.doRender()` 几乎每帧都触发完整重绘，导致文字重影和剧烈跳动。

---

### Issue #9508 — pi-ai 向兼容供应商发送不支持的 OpenAI 专有字段
**状态：** 开启 | **评论：** 6 | 👍: 0  
📎 https://github.com/earendil-works/pi/issues/9508

OpenAI 专有的请求字段、角色或认证头会被发送到拒绝它们的 OpenAI 兼容供应商（如 Ollama），导致 400/422 错误。

---

### Issue #9566 — 上下文大小默认 128k，尽管实际大小可用
**状态：** 开启 | **评论：** 5 | 👍: 3  
📎 https://github.com/earendil-works/pi/issues/9566

当 `models.json` 条目匹配供应商暴露的模型时，使用默认的 128k 上下文而非实际大小，导致错误的费用和 maxTokens 计算。被广泛反馈——参见 #10008。

---

### Issue #9512 — 压缩在 GPT-6 Astra 满推理时触发摘要输出上限
**状态：** 开启 | **评论：** 5 | 👍: 1  
📎 https://github.com/earendil-works/pi/issues/9512

GPT-6 Astra 满推理时上下文压缩间歇性失败——生成达到 token 上限但摘要不完整，阻塞恢复。

---

### Issue #8537 — Kimi (moonshotai-cn) 回放工具历史时返回 400
**状态：** 已关闭 | **评论：** 4 | 👍: 0  
📎 https://github.com/earendil-works/pi/issues/8537

回放到 Kimi 时失败并返回 400：孤立的工具消息、交错的用户消息、重复的 `tool_call_id`。供应商特定的会话处理问题。

---

### Issue #10008 — Bug 报告未处理就被自动关闭
**状态：** 已关闭 | **评论：** 4 | 👍: 0  
📎 https://github.com/earendil-works/pi/issues/10008

沮丧的用户提交了关于 bug 报告被自动关闭的元投诉。以 #9566 为具体案例，突出了待分类积压的担忧。

---

## 4. 关键 PR 进展

### PR #10020 — feat(coding-agent)：为 HTML 导出添加隐藏消息开关
**状态：** 已关闭 | 📎 https://github.com/earendil-works/pi/pull/10020

为 HTML 导出中的隐藏 `CustomMessage` 条目添加显示/隐藏开关；保留工具/思考的按钮状态。修复 #8896。

---

### PR #10021 — feat(coding-agent)：在 bash 调用中高亮 heredoc 和内联脚本
**状态：** 开启 | 📎 https://github.com/earendil-works/pi/pull/10021

在 bash 工具输出中高亮 heredoc 语法——针对更倾向于使用 shell 脚本而非内置编辑工具的新版 Opus/Fable 模型。

---

### PR #9957 — fix(tui)：根据纵横比畸变选择 Kitty 图像尺寸
**状态：** 已关闭 | 📎 https://github.com/earendil-works/pi/pull/9957

通过在适配终端单元格后选择畸变较小的舍入方式，改善图像渲染效果。

---

### PR #10016 — fix(coding-agent)：当排队的 wake follow-up 时恢复中止的运行
**状态：** 开启 | 📎 https://github.com/earendil-works/pi/pull/10016

修复在中止运行期间发出 `deliverAs: "followUp"` 的 `sendMessage` 时 `triggerTurn` 被丢弃的问题。

---

### PR #9714 — feat(ai)：支持 Azure Foundry Chat Completions 部署
**状态：** 开启 | 📎 https://github.com/earendil-works/pi/pull/9714

实现 Azure Foundry Chat Completions 支持（如 DeepSeek V4 Pro），扩展现有 Responses API 之外的功能。

---

### PR #8398 — feat：添加颜色值和主题样式
**状态：** 已关闭 | 📎 https://github.com/earendil-works/pi/pull/8398

大规模重构，直接暴露颜色以支持智能体样式和非终端 UI，同时保持向后兼容。

---

### PR #10009 — feat(otel)：添加 pi-otel OTLP/HTTP 导出器包
**状态：** 已关闭 | 📎 https://github.com/earendil-works/pi/pull/10009

新 `@earendil-works/pi-otel` 包在现有契约之上实现 `TelemetryContext`，支持 OTLP/HTTP 导出。

---

### PR #9995 — fix(agent)：修复并行中止时 tool_result 丢弃
**状态：** 已关闭 | 📎 https://github.com/earendil-works/pi/pull/9995

修复 `executeToolCallsParallel` 在中止执行时丢弃未访问的工具调用——确保所有调用都有 `tool_execution_start` 和 `tool_result`。

---

### PR #9993 — feat(ai,coding-agent)：在 Google Vertex AI 上添加 Anthropic Claude 支持
**状态：** 已关闭 | 📎 https://github.com/earendil-works/pi/pull/9993

使用 Google Cloud 凭据在 Google Vertex AI Model Garden 中添加 Claude Opus、Sonnet 和 Haiku。

---

### PR #9988 — fix(coding-agent)：将读取渲染器的行范围参数强制转换为数字
**状态：** 已关闭 | 📎 https://github.com/earendil-works/pi/pull/9988

修复 TUI 显示 `dummy.txt:25-2512` 而非 `dummy.txt:25-37` 的问题——当模型发送字符串形式的 `offset`/`limit` 时（如小米 Mimo）。

---

## 5. 热门讨论

源数据中未提供讨论内容。

---

## 6. 功能需求趋势

| 趋势 | 描述 |
|-------|-------------|
| **供应商扩展** | Azure Foundry Chat Completions、Vertex AI Claude 模型、更广泛的 OpenAI 兼容支持 |
| **遥测/可观测性** | OTLP 导出（pi-otel 已落地）、会话跟踪改进 |
| **跨平台 Shell** | Windows shell 路径解析可靠性仍是优先事项 |
| **会话回放鲁棒性** | 多个供应商（Kimi、GLM、Anthropic 订阅）在回放时失败，需要通用修复 |
| **主题/UI 可扩展性** | 为非终端 UI 暴露颜色值；TUI 渲染改进 |

---

## 7. 开发者痛点

- **Windows + 扩展 = Shell 混乱**：加载扩展时 `shellPath` 路径解析不确定，阻塞 Windows 可复现性
- **上下文大小默认值**：尽管模型有实际大小，仍回退到 128k，导致费用估算和 token 限制错误
- **会话回放失败**：多个供应商（Kimi、GLM、Anthropic 订阅）因供应商特定的边缘情况在回放时失败
- **供应商兼容性**：OpenAI 专有字段被发送到兼容供应商，导致 400/422 错误
- **TUI 渲染跳动**：长会话上的完整重绘风暴降低了实时流式体验
- **扩展生命周期**：会话替换后的陈旧上下文导致崩溃；`package.json` 导出的 npm 包解析缺口

---

*摘要结束。欲了解更多，请访问 https://github.com/earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. Let me translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate this carefully:

---

# Qwen Code 社区简报 — 2026-09-25

## 今日要闻

本周 v0.24.5 版本发布周期成为焦点，稳定版、夜间构建版、TypeScript SDK 更新和桌面端应用同步发布。P1 级别严重 BUG 依然活跃——特别是 Windows ConPTY 进程泄漏问题，以及 TUI 在并行后台 Agent 执行时出现的 React #185 崩溃。Managed Agent 架构提案 (#12380) 正在热烈讨论中，团队规划双路径交付模型。

---

## 版本发布

| 版本 | 概要 |
|------|------|
| **v0.24.5** | 稳定版，通道组成员访问与发送者策略解耦 (#12475) |
| **v0.24.5-nightly.20260924.ffea2d024e** | 同分支夜间构建版 |
| **sdk-typescript-v0.1.15** | 捆绑 CLI 0.24.5；包含 Hosted Harness 私有客户端 (#12654) |
| **desktop-v0.24.5** | 桌面端应用刷新，修复会话创建失败诊断和托管运行时功能 |

---

## 热点 Issue

### 1. 

严重程度：关键 — 运行约 12 小时后产生 347 个孤立进程 / 约 2.8 GB 内存。VS Code Companion 扩展中嵌入的 qwen-cli 泄漏无头 `conhost.exe`（ConPTY）进程且从不释放。17 条评论表明这严重影响生产工作流。

### 2. 后台 Agent 完成后 TUI 因 React #185 退出 — P1
未捕获的 React "更新深度超限" 错误在多个后台子 Agent 连续完成时导致 TUI 崩溃。

进程退回 shell 且无错误提示。16 条评论，1 个表情。

### 3. macOS 上 Web Terminal PTY 不可用 — P1
`@lydell/node-pty` 已声明但未捆绑，本地安装的预构建被 macOS 代码签名阻止，Web Terminal 无法运行。14 条评论。

### 4. 会话运行时回收期间后台 Shell 输出丢失 — P1
守护进程托管的 Web Shell 会话中，后台 Shell 输出和唤醒通知在会话运行时回收时被静默丢弃，导致会话卡死。10 条评论。

### 5. 远程 SSH 会话创建时的 EPIPE 错误 — P1
Companion 0.24.2 中每次 `POST /session` 都因 `write EPIPE` / `BridgeChannelClosedError` 失败，而独立运行的捆绑 CLI 正常工作。8 条评论。

### 6. 无参数工具的 Parameters 字段序列化为 null — P2
将 'parameters' 字段序列化为 `null` 而非 `{}` 或省略字段，导致严格的 OpenAI 兼容网关拒绝整个请求。7 条评论。

### 7. Linux 上剪贴板图片粘贴静默失败 — P2
剪贴板图片粘贴在工具被

找到但查询失败时失败，原生模块抛出异常时失败，OpenTUI 渲染器上失败。6 条评论。

### 8. Shell 模式命令不保持会话忙碌 — P1
StreamingState 在 shell 命令运行时读取 `Idle` 状态，允许并发模型轮次被接受。准备进行人工审查。3 条评论。

### 9. 权限队列无限期阻塞所有会话 — P1
权限队列以 ACP 连接为键意味着一个空闲会话的未答复提示会阻塞守护进程上的每个其他会话——静默且无限期。5 条评论。

### 10. MCP 服务器在会话之间断开连接 — P2
即使配置有效，MCP 服务器在会话之间变得不可用。5 条评论。

---

## 关键 PR 进展

| PR | 描述 |
|----|------|
| [#12653](https://github.com/QwenLM/qwen-code/pull/12653) | **chore(desktop):** 将 `packages/desktop-shell` 重命名为 `packages/desktop` — Tauri 应用继承该名称 |
| [#12358](https://github.com/QwenLM/qwen-code/pull/12358) | **feat(managed-agent):** 添加独立托管 Agent 堆栈，包含持久化 Managed Session 记录、Hosted Harness 和 Runtime Broker |
| [#12354](https://github.com/QwenLM/qwen-code/pull/12354) | **feat:** 添加 `ui.hideStatusBar` 设置以减少闪烁 |
| [#

12183](https://github.com/QwenLM/qwen-code/pull/12183) | **feat(extensions):** 从目录加载部署管理的扩展 (`--managed-extensions <root>`) |
| [#12652](https://github.com/QwenLM/qwen-code/pull/12652) | **fix(web-shell):** 在折叠侧边栏轨道时清除 scrollbar-gutter |
| [#12666](https://github.com/QwenLM/qwen-code/pull/12666) | **fix(cli):** 当 Linux 剪贴板工具被找到但查询失败时通知 |
| [#12562](https://github.com/QwenLM/qwen-code/pull/12562) | **fix(core):** 保持 MCP 服务器连接onerror 时出错 |
| [#12649](https://github.com/QwenLM/qwen-code/pull/12649) | **fix(standalone):** 固定 `@lydell/node-pty-linux-arm64` 并在缺少预构建时使发布失败 |
| [#11794](https://github.com/QwenLM/qwen-code/pull/11794) | **fix(cli):** 在无状态生成中遵守输出语言 |
| [#12221](https://github.com/QwenLM/qwen-code/pull/12221) | **fix(core):** 识别 sed 静默别名 (`--quiet`, `--silent`) 为只读 |

---

## 功能需求趋势

根据 Issue 分析，最强烈的需求方向是：

1. **托管 Agent 架构** — 双路径架构，分阶段交付，持久化会话和工作区绑定 (#12380)
2. **多根工作区支持** — 守护进程 shell 保护程序需要支持 VS Code 多根工作区 (#12628)
3. **System One 决策门** — 可选的快速分类门（von-install + /superfast），避免为廉价决策唤醒完整 System Two LLM (#12589)
4. **HTTP 超时后会话恢复** — 网关超时后恢复原始会话创建结果 (#12381)
5. **Agent 上下文效率** — 防止重新调查对话历史中已有的内容以节省 tokens (#12579)
6. **桌面应用整合** — 弃用 Electron 桌面应用，统一到 Tauri (#8596)

---

## 开发者痛点

- **Windows ConPTY 泄漏** — VS Code Companion 中影响生产的内存/进程耗尽问题
- **React #185 崩溃** — 并行 Agent 工作流期间 TUI 变得不可用
- **MCP 不稳定** — 服务器意外断开；参数序列化错误导致网关拒绝
- **会话状态丢失** — 后台任务通知延迟 12-19 分钟或丢失；shell 输出在运行时回收期间被静默丢弃
- **macOS Web Terminal** — 捆绑 PTY 缺失导致功能完全受阻
- **并行 Agent 限制被绕过** — `maxParallelAgentsByModel` 对前台 Agent 被忽略 (#12470)
- **权限队列阻塞** — 一个卡住的会话会使守护进程上的所有其他会话停止

---

*简报基于 GitHub 数据生成 — 2026-09-25*</think>

# Qwen Code 社区简报 — 2026-09-25

## 今日要闻

本周 v0.24.5 版本发布周期成为焦点，稳定版、夜间构建版、TypeScript SDK 更新和桌面端应用同步发布。P1 级别严重 BUG 依然活跃——特别是 Windows ConPTY 进程泄漏问题，以及 TUI 在并行后台 Agent 执行时出现的 React #185 崩溃。Managed Agent 架构提案 (#12380) 正在热烈讨论中，团队规划双路径交付模型。

---

## 版本发布

| 版本 | 概要 |
|------|------|
| **v0.24.5** | 稳定版，通道组成员访问与发送者策略解耦 (#12475) |
| **v0.24.5-nightly.20260924.ffea2d024e** | 同分支夜间构建版 |
| **sdk-typescript-v0.1.15** | 捆绑 CLI 0.24.5；包含 Hosted Harness 私有客户端 (#12654) |
| **desktop-v0.24.5** | 桌面端应用刷新，修复会话创建失败诊断和托管运行时功能 |

---

## 热点 Issue

### 1. [Windows conhost.exe ConPTY 进程泄漏](https://github.com/QwenLM/qwen-code/issues/11303) — P1
**严重程度：** 关键 — 运行约 12 小时后产生 347 个孤立进程 / 约 2.8 GB 内存。VS Code Companion 扩展中嵌入的 qwen-cli 泄漏无头 `conhost.exe`（ConPTY）进程且从不释放。17 条评论表明这严重影响生产工作流。

### 2. [后台 Agent 完成后 TUI 因 React #185 退出](https://github.com/QwenLM/qwen-code/issues/11500) — P1
未捕获的 React "更新深度超限" 错误在多个后台子 Agent 连续完成时导致 TUI 崩溃。进程退回 shell 且无错误渲染。16 条评论，1 个表情。

### 3. [macOS 上 Web Terminal PTY 不可用](https://github.com/QwenLM/qwen-code/issues/11872) — P1
`@lydell/node-pty` 已声明但未捆绑，本地安装的预构建被 macOS 代码签名阻止，Web Terminal 无法运行。14 条评论。

### 4. [会话运行时回收期间后台 Shell 输出丢失](https://github.com/QwenLM/qwen-code/issues/11119) — P1
在守护进程托管的 Web Shell 会话中，后台 shell 输出和唤醒通知在会话运行时回收时被静默丢弃，导致会话卡死。10 条评论。

### 5. [Remote-SSH EPIPE 错误导致会话创建失败](https://github.com/QwenLM/qwen-code/issues/12416) — P1
Companion 0.24.2 中每次 `POST /session` 都因 `write EPIPE` / `BridgeChannelClosedError` 失败，而独立运行的捆绑 CLI 正常工作。8 条评论。

### 6. [无参数工具的 Parameters 字段序列化为 null](https://github.com/QwenLM/qwen-code/issues/11956) — P2
将 'parameters' 字段序列化为 `null` 而非 `{}` 或省略字段，导致严格的 OpenAI 兼容网关拒绝整个请求。7 条评论。

### 7. [Linux 上剪贴板图片粘贴静默失败](https://github.com/QwenLM/qwen-code/issues/12505) — P2
剪贴板图片粘贴在工具被找到但查询失败时失败，原生模块抛出异常时失败，OpenTUI 渲染器上失败。6 条评论。

### 8. [Shell 模式命令不保持会话忙碌](https://github.com/QwenLM/qwen-code/issues/12664) — P1
StreamingState 在 shell 命令运行时读取 `Idle` 状态，允许并发模型轮次被接受。Ready for human review. 3 条评论。

### 9. [权限队列无限期阻塞所有会话](https://github.com/QwenLM/qwen-code/issues/11795) — P1
权限队列以 ACP 连接为键意味着一个空闲会话的未答复提示会阻塞守护进程上的每个其他会话——静默且无限期。5 条评论。

### 10. [MCP 服务器在会话之间断开连接](https://github.com/QwenLM/qwen-code/issues/9675) — P2
即使配置有效，MCP 服务器在会话之间变得不可用。5 条评论。

---

## 关键 PR 进展

| PR | 描述 |
|----|------|
| [#12653](https://github.com/QwenLM/qwen-code/pull/12653) | **chore(desktop):** 将 `packages/desktop-shell` 重命名为 `packages/desktop` — Tauri 应用继承该名称 |
| [#12358](https://github.com/QwenLM/qwen-code/pull/12358) | **feat(managed-agent):** 添加独立托管 Agent 堆栈，包含持久化 Managed Session 记录、Hosted Harness 和 Runtime Broker |
| [#12354](https://github.com/QwenLM/qwen-code/pull/12354) | **feat:** 添加 `ui.hideStatusBar` 设置以减少闪烁 |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | **feat(extensions):** 从目录加载部署管理的扩展 (`--managed-extensions <root>`) |
| [#12652](https://github.com/QwenLM/qwen-code/pull/12652) | **fix(web-shell):** 在折叠侧边栏轨道时清除 scrollbar-gutter |
| [#12666](https://github.com/QwenLM/qwen-code/pull/12666) | **fix(cli):** 当 Linux 剪贴板工具被找到但查询失败时通知 |
| [#12562](https://github.com/QwenLM/qwen-code/pull/12562) | **fix(core):** 保持 MCP 服务器在 `-32601` onerror 时连接 |
| [#12649](https://github.com/QwenLM/qwen-code/pull/12649) | **fix(standalone):** 固定 `@lydell/node-pty-linux-arm64` 并在缺少预构建时使发布失败 |
| [#11794](https://github.com/QwenLM/qwen-code/pull/11794) | **fix(cli):** 在无状态生成中遵守输出语言 |
| [#12221](https://github.com/QwenLM/qwen-code/pull/12221) | **fix(core):** 识别 sed 静默别名 (`--quiet`, `--silent`) 为只读 |

---

## 功能需求趋势

根据 Issue 分析，最强烈的需求方向是：

1. **托管 Agent 架构** — 双路径架构，分阶段交付，持久化会话和工作区绑定 (#12380)
2. **多根工作区支持** — 守护进程 shell 保护程序需要支持 VS Code 多根工作区 (#12628)
3. **System One 决策门** — 可选的快速分类门（von-install + /superfast），避免为廉价决策唤醒完整 System Two LLM (#12589)
4. **HTTP 超时后会话恢复** — 网关超时后恢复原始会话创建结果 (#12381)
5. **Agent 上下文效率** — 防止重新调查对话历史中已有的内容以节省 tokens (#12579)
6. **桌面应用整合** — 弃用 Electron 桌面应用，统一到 Tauri (#8596)

---

## 开发者痛点

- **Windows ConPTY 泄漏** — VS Code Companion 中影响生产的内存/进程耗尽问题
- **React #185 崩溃** — 并行 Agent 工作流期间 TUI 变得不可用
- **MCP 不稳定** — 服务器意外断开；参数序列化错误导致网关拒绝
- **会话状态丢失** — 后台任务通知延迟 12-19 分钟或丢失；shell 输出在运行时回收期间被静默丢弃
- **macOS Web Terminal** — 捆绑 PTY 缺失导致功能完全受阻
- **并行 Agent 限制被绕过** — `maxParallelAgentsByModel` 对前台 Agent 被忽略 (#12470)
- **权限队列阻塞** — 一个卡住的会话会使守护进程上的所有其他会话停止

---

*简报基于 GitHub 数据生成 — 2026-09-25*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*