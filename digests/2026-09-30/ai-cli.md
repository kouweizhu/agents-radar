# AI CLI 工具社区动态日报 2026-09-30

> 生成时间: 2026-09-30 01:28 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this English report into Chinese. They have provided detailed rules about how to handle the translation, emphasizing:
1. Only output the translation - no preamble, explanation, or markdown fences
2. Preserve Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, project names, version numbers, issue/PR numbers in original form
4. Use natural technical Chinese register - not literal word-for-word

Let me translate this carefully while maintaining the structure and technical accuracy.

Key terms to translate:
- "AI CLI tools" → "AI CLI 工具"
- "Ecosystem" → "生态"
- "Activity Comparison" → "活跃度对比"
- "Shared Feature Directions" → "共同功能方向"
- "Differentiation Analysis" → "差异化分析"
- "Community Momentum & Maturity" → "社区活跃度与成熟度"
- "Trend Signals" → "趋势信号"
- "Enterprise" → "企业级"
- "Extensibility" → "可扩展性"
- "Multi-Account" → "多账户"
- "Token/Context Cost Controls" → "Token/上下文成本控制"
- "Memory & State Management" → "内存与状态管理"
- "MCP" → keep as is (Model Context Protocol)
- "Agent autonomy" → "智能体自主性"

Let me translate the entire report now.</think>

# 跨工具 AI CLI 生态报告 — 2026-09-30

## 1. 生态概览

AI CLI 工具领域呈现出各大主要供应商均有成熟、生产级生态系统的格局，Anthropic 的 Claude Code、OpenAI 的 Codex、谷歌的 Gemini CLI、GitHub 的 Copilot CLI，以及 OpenCode、Pi、Qwen Code 等新兴玩家都在积极发版。当前的快照显示这是一个竞争激烈的领域：供应商们竞相实现可扩展性（mods/插件）、改进多账户管理、优化 token/上下文治理——这些主要由企业开发者反馈驱动。平台可靠性（尤其是 Windows）仍是持续痛点，而向自主智能体工作流的转变正在重塑所有社区的架构讨论。

---

## 2. 活跃度对比

| 工具 | Issue | PR | Discussion | Release（24h） |
|------|-------|-----|------------|----------------|
| **Claude Code** | 50 | 9 | N/A* | 1（v2.1.285） |
| **OpenAI Codex** | 20+ | 10 | 3+ | 5（v1.0.90 系列） |
| **Gemini CLI** | 50 | 49 | N/A* | 2（v0.62.0、v0.63.0-preview.0） |
| **Copilot CLI** | 15+ | 1 | 3+ | 5（v1.0.90-1 至 v1.0.90-5） |
| **OpenCode** | 50 | 20 | N/A* | 0 |
| **Pi** | 20+ | ~15 | 1 | 2（v0.99.0、v0.99.1） |
| **Qwen Code** | 50 | 10 | N/A* | 2（v0.24.7、nightly） |

*这些仓库主要使用 Issue 和 PR 作为渠道；Discussion 并非主要媒介。

---

## 3. 共同功能方向

| 功能方向 | 需求工具 | 具体需求 |
|----------|----------|----------|
| **可扩展性 / Mods / 插件** | Claude Code、Copilot CLI、Pi、Qwen Code | 函数钩子、插件生命周期事件、基于白名单的工具选择、第三方插件支持 |
| **多账户 / 配置文件管理** | Claude Code、Copilot CLI | 原生配置文件切换、跨团队会话管理 |
| **Token / 上下文成本控制** | Claude Code、Codex、 Gemini CLI、Qwen Code | 系统提示词/工具模式开销可见性、提示词缓存改进、token 计量透明度 |
| **内存与状态管理** | OpenCode、Pi、 Gemini CLI、Qwen Code | 有界内存增长、会话压缩、转录修剪、持久化存储生命周期 |
| **Windows 平台一致性** | Claude Code、Codex、Copilot CLI、Pi | 控制台处理、守护进程权限、WSL2 集成、MSIX/沙箱可靠性 |
| **MCP 生态扩展** | Claude Code、Copilot CLI、Pi、Qwen Code | 服务器认证、OAuth 流程、本地托管服务器、工具发现 |
| **智能体自主性** | Claude Code、 Gemini CLI、Qwen Code | 子智能体恢复能力、自动恢复、分阶段/双路径架构 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路径 |
|------|----------|----------|----------|
| **Claude Code** | 通过 mods 实现可扩展性、企业安全默认 | 需要可定制 AI 工作流的开发者 | 系统提示词组合、权限拒绝规则、插件架构 |
| **OpenAI Codex** | Windows 稳定性、使用透明度、CLI 体验 | Windows 开发者、企业团队 | 控制台抑制、精简欢迎信息、速率限制可见性 |
| **Gemini CLI** | 智能体可靠性、AST 感知工具、沙箱化 | 需要代码理解的高级开发者 | 零依赖 OS 沙箱、仅追加增量修补、原子状态 |
| **Copilot CLI** | MCP 集成、会话管理、npm 发布 | 面向 DevOps 和自动化的用户 | MCP OAuth 缓存、会话级审批、npm tarball 发布 |
| **OpenCode** | 提供商灵活性、内存优化 | 多模型用户、成本敏感型开发者 | 多提供商支持、用量桥接、内存有界缓存 |
| **Pi** | Codemode 与 MCP、工作内存、长上下文治理 | 需要持久上下文的高级用户 | 会话绑定索引、token 治理追踪、托管 llama.cpp |
| **Qwen Code** | 托管智能体、A2A 多智能体、内存优化 | 从事智能体工作流的企业团队 | 双路径托管架构、Mem0 集成、有界冷却时间 |

---

## 5. 社区活跃度与成熟度

### 高速度
- **Gemini CLI**：PR 队列中有 49 条，表明开发非常活跃；工程投入力度大。
- **OpenCode**：20 条 PR 聚焦性能修复——快速迭代稳定性。
- **Claude Code**：稳定的发版节奏，专注于安全加固（拒绝规则、安全指南 CI）。

### 活跃且参与度高
- **Copilot CLI**：尽管只有 1 条 PR，但讨论区的社区参与度很高——用户积极提出功能需求。
- **Qwen Code**：10 条 PR 包含架构提案（双路径托管智能体）——路线图颇具雄心。
- **Pi**：15 条 PR 解决 OAuth 流程和 TUI 打磨——对用户体验反馈响应迅速。

### 新兴 / 关注点较窄
- **OpenCode**：讨论活动较少，但 issue 跟踪活跃；看起来更偏向工程师驱动而非社区驱动。

---

## 6. 趋势信号

| 信号 | 证据 | 意义 |
|------|------|------|
| **企业需求正在成为主导** | 多账户、组织级权限默认、安全拒绝规则、SSO/OAuth 功能 | AI CLI 工具正从个人助手成熟为团队/设备管理平台组件 |
| **Windows 是首要痛点** | 7 个工具中有 4 个存在活跃的 Windows 问题（控制台闪烁、守护进程失败、沙箱不兼容） | Windows 开发者体验是竞争差异化点——供应商正在大力投入 |
| **Token 成本不透明是用户最大抱怨** | Codex、Claude Code、Qwen Code、Gemini 都有用量/可见性问题 | 没有透明的计量，企业采用就会停滞——这正成为基础门槛 |
| **智能体架构正在重塑路线图** | Qwen 的双路径提案、Claude 的 mods、Gemini 的智能体生命周期 | 从聊天工具到自主智能体的转变需要新的架构模式（持久会话、后台任务、状态恢复） |
| **MCP 正在成为标准** | 多个工具竞相支持 MCP 服务器、OAuth、托管本地服务器 | Model Context Protocol 作为插件/集成层正在获得吸引力——避免供应商锁定 |
| **内存管理是跨领域关注点** | OpenCode（13GB+ 数据库）、Claude（OOM）、Gemini（压缩）、Pi（有界索引） | 长期运行的会话暴露了基础工程挑战——预计会看到更多投入 |

---

*报告汇总自 7 个 AI CLI 工具的 GitHub 数据 — 2026-09-30*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the Claude Code Skills Community Highlights Report into Chinese (Simplified Chinese). Let me follow the rules carefully:

1. Output ONLY the translation - no preamble, no explanation
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

---

# Claude Code Skills 社区亮点报告

**数据截至 2026-09-30 | 来源：anthropics/skills**

---

## 1. 技能排行榜

PR 数据显示评论数为 undefined，但以下技能表现出最实质性的活动：

| PR | 技能 | 功能 | 状态 |
|----|-------|---------------|--------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | 面向 Web3 开发者的智能体技能，可对 Solidity/Rust 智能合约进行自动化静态分析，通过 ProofCore 的零存储默克尔协议将加密审计证明锚定到 TON 区块链。 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本技能，可将 Markdown 文档合成为带真人语音旁白的专业 MP4 视频，采用 Marp 技术实现。 | OPEN |


| [#822](https://github.com/anthropics/skills/pull/822) | **AWT（AI Watch Tester）** | 开源端到端测试工具，赋予 Claude 视觉和浏览器控制能力——通过指向的 URL 零代码生成测试用例。 | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 复古游戏开发技能，支持使用 Pyxel 库创建、调试和验证 Python 游戏，支持无头输入驱动运行。 | OPEN |

技能生态系统正快速扩展，涵盖 Web3、多媒体创作、测试自动化和游戏开发等领域。这些项目展示了开发者社区的创新活力和技术多样性。

我注意到 PR 数据中的评论数显示为 undefined，这可能意味着评论系统未正确集成或数据获取存在问题。同时，Issues 部分提供了关于社区参与和讨论的有意义见解，揭示了开发者对这些项目的实际需求和反馈。

主要问题包括：社区技能在 anthropic 命名空间的安全隐患、组织内技能共享的迫切需求、技能/命令触发评估中的关键缺陷，以及技能管理和潜在技能相关建议的问题。关键观察点涉及安全隐患、用户界面挑战和技能开发机会，突出了技能管理和社区互动中的系统性障碍。

The community's most anticipated directions focus on governance, security, and enterprise integration skills. Top active PRs demonstrate strong functional differentiation, with Web3/Blockchain audit tooling, Markdown-to-video conversion with voiceover, productivity/HR workflows, HPC cluster operations, and bulk destructive write safety checklists showing significant potential for imminent merging.

The ecosystem's most concentrated demand centers on enterprise-ready, security-hardened skills with improved evaluation infrastructure. Key priorities include fixing trust boundaries, enhancing trigger evaluation reliability, and enabling organization-wide skill distribution to address critical community needs.</think>

# Claude Code Skills 社区亮点报告

**数据截至 2026-09-30 | 来源：anthropics/skills**

---

## 1. 技能排行榜

PR 数据显示评论数为 undefined，但以下技能表现出最实质性的活动：

| PR | 技能 | 功能 | 状态 |
|----|-------|---------------|--------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | 面向 Web3 开发者的智能体技能，可对 Solidity/Rust 智能合约进行自动化静态分析，通过 ProofCore 的零存储默克尔协议将加密审计证明锚定到 TON 区块链。 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本技能，可将 Markdown 文档合成为带真人语音旁白的专业 MP4 视频，采用 Marp 技术实现。 | OPEN |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT（AI Watch Tester）** | 开源端到端测试工具，赋予 Claude 视觉和浏览器控制能力——通过指向的 URL 零代码生成测试用例。 | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 复古游戏开发技能，支持使用 Pyxel 库创建、调试和验证 Python 游戏，支持无头输入驱动运行。 | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** | 将产品/技术规范转化为具体的 Notion 任务，包含实施计划、验收标准和进度追踪。 | OPEN |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 全面的测试技能，涵盖 Testing Trophy、单元测试（AAA 模式）、使用 Testing Library 的 React 组件测试。 | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 防止 AI 生成文档中的排版问题：孤行词汇、孤儿段落、编号错位。 | OPEN |

---

## 2. 社区需求趋势

从 Issues 来看，最受期待的方向包括：

| Issue | 需求主题 | 摘要 |
|-------|--------------|---------|
| [#492](https://github.com/anthropics/skills/issues/492) (43 条评论) | **安全与信任** | anthropic/ 命名空间下的社区技能冒充官方技能——造成信任边界滥用，用户在不知情的情况下授予了过高权限。 |
| [#228](https://github.com/anthropics/skills/issues/228) (16 条评论) | **组织内共享** | 请求在组织内建立共享技能库——目前需要手动分发文件。 |
| [#556](https://github.com/anthropics/skills/issues/556) (12 条评论) | **评估基础设施** | run_eval.py 技能触发率为 0%——阻碍了正常的技能测试。 |
| [#189](https://github.com/anthropics/skills/issues/189) (6 条评论) | **插件去重** | document-skills 和 example-skills 包含相同内容，耗尽了上下文窗口。 |

**新兴方向：** 治理、安全和企业集成类技能（如智能体治理模式、SharePoint 文档处理）。

---

## 3. 潜力待发技能

这些活跃的 PR 展现出强劲的功能差异化，可能即将合并：

- **[#1771](https://github.com/anthropics/skills/pull/1771)** — proofcore-contract-auditor — Web3/区块链审计工具
- **[#1703](https://github.com/anthropics/skills/pull/1703)** — md2video-audio — Markdown 转视频（含语音旁白）
- **[#1245](https://github.com/anthropics/skills/pull/1245)** — notion-spec-to-implementation + quantitative-resume-auditor — 生产力/HR 工作流
- **[#1615](https://github.com/anthropics/skills/pull/1615)** — scnet-hpc — HPC 集群运维（SSH/Slurm）
- **[#1776](https://github.com/anthropics/skills/pull/1776)** — blast-radius — 批量破坏性写入安全检查清单

---

## 4. 技能生态系统洞察

> **社区最集中的需求是面向企业级应用、安全加固且具备更好评估基础设施的技能——需要修复信任边界、提升触发评估可靠性，并实现组织级技能分发。**

---

<think>The user wants me to translate the Claude Code Community Digest into Chinese. Let me analyze the content and translate it while preserving the structure and format exactly as specified.

Key points:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, etc.
3. Keep URLs, numbers, dates, issue/PR references, code, file paths as-is
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. The content is dated 2026-09-30

Let me translate section by section, maintaining the exact format:

**Headings:**
- Today's Highlights → 今日要闻
- Releases → 版本发布
- Hot Issues → 热门 issues
- Key PR Progress → 主要 PR 进展
- Feature Request Trends → 功能需求趋势
- Developer Pain Points → 开发者痛点

Let me go through and translate everything carefully:

---

# Claude Code 社区速报 — 2026-09-30

## 今日要闻

v2.1.285 版本带来三个值得关注的新功能：`CLAUDE_CODE_DISABLE_WEB_FETCH` 环境变量（面向注重安全的用户）、`claude --desktop` 命令（用于快速启动桌面应用），以及新的 `claude plugin configure` 子命令。与此同时，社区继续推动重要功能讨论——尤其是关于 mods 可扩展性（225 条评论）和多账户管理（198 条评论，841 👍），这两项都反映出用户对 Claude Code 深度定制能力的强烈需求。

---

## 版本发布

**v2.1.285** — 发布日期：2026-09-30

- **`CLAUDE_CODE_DISABLE_WEB_FETCH`**：新增环境变量，可完全禁用 WebFetch 工具


- **`claude --desktop`**：新增 CLI 参数，支持在当前目录启动桌面应用或通过 `--continue` / `--resume <id>` 恢复会话
- **`claude plugin configure <plugin>`**：新增子命令，用于显示插件配置详情

---

## 热门 Issues

| # | Issue | 概要 | 为何重要 | 反应 |
|---|-------|---------|----------------|-----------|
| **#91870** | [Mods - 让 Claude 可扩展性提升 10 倍](https://github.com/anthropics/claude-code/issues/91870) | 社区更新：函数钩子将在"几周内"发布

。扩展性的核心需求——使第三方插件开发者能够接入 Claude 的执行流程，这是呼声最高的功能。| 225 条评论，128 👍 |
| **#18435** | [桌面应用中的多账户管理](https://github.com/anthropics/claude-code/issues/18435) | 允许在桌面应用中管理多个 Claude 账户，支持便捷的配置文件切换。| 团队用户强烈需要此功能，841 👍 使其成为最迫切的需求。| 198 条评论，841 👍 |
| **#97854** | [Auto 模式：服务

端分类器阻止 Bash/ScheduleWakeup](https://github.com/anthropics/claude-code/issues/97854) | Auto 模式对 Bash 和 ScheduleWakeup 始终返回"无判定"，连 `echo ok` 这样的简单命令都被阻止。| Auto 模式中的严重可靠性问题——完全破坏了核心功能。| 25 条评论，33 👍 |
| **#98145** | [工具调用中间引导中未正确使用韩语](https://github.com/anthropics/claude-code/issues/98145) | 模型在工具调用之间的中间引导中反复忽略明确的韩语指令。

非英语用户的本地化问题，表明指令遵循存在持续缺陷。| 16 条评论，0 👍 |
| **#89599** | [Windows MSIX：后台静默更新导致应用退出但进程存活](https://github.com/anthropics/claude-code/issues/89599) | MSIX 更新后留下孤立进程，安装失败，应用无法启动需手动终止进程。| Windows 部署阻碍，影响企业/MSIX 分发场景。| 13 条评论，1 👍 |
| **#97665** | [子代理压缩：尾部记录未被写入](https://github.com/anthropics/claude

-code/issues/97665) | 子代理自动压缩时，保全段的最终记录被引用但从未实际写入记录。| 数据完整性问题，可能导致长会话中对话历史丢失。| 8 条评论，0 👍 |
| **#95566** | [二进制文件在 kvm64 CPU 上挂起（无 SSE4/POPCNT）](https://github.com/anthropics/claude-code/issues/95566) | 在使用 kvm64 CPU 型号的虚拟机上，本地二进制文件 100% CPU 挂起，因缺少 CPU 特性——需要预检查。| Linux 虚拟机用户的安装阻碍，影响容器化/

云环境。| 7 条评论，1 👍 |
| **#91775** | [/usage 统计标签页将 token 总数多算约 2 倍](https://github.com/anthropics/claude-code/issues/91775) | 按 transcript 行而非消息 ID 计算 `message.usage`，导致报告的 token 使用量翻倍。| 费用跟踪不准确，用户无法依赖内置使用统计。| 5 条评论，0 👍 |
| **#91395** | [Artifact 工具急切加载约 12k tokens](https://github.com/anthropics/claude-code/issues/91395) | Artifact 模式在每次会话初始化时预加载大量 token 数据，即使未实际使用该功能。| 对不使用 Artifact 的用户造成不必要的上下文膨胀。| 4 条评论，2 👍 |
| **#98292** | [GitHub 集成提示"无可用连接器"](https://github.com/anthropics/claude-code/issues/98292) | 聊天窗口显示 GitHub 连接器不可用，尽管账户已连接且 GitHub 应用已安装。| 集成可靠性问题，阻碍工作流自动化。| 3 条评论，0 👍 |

---

## 主要 PR 进展

| # | PR | 状态 | 概要 |
|---|-----|---------|---------|
| **#98275** | [agents-md：将 AGENTS.md 加载行输出到调试日志](https://github.com/anthropics/claude-code/pull/98275) | ✅ 已关闭 | 有 AGENTS.md 但无 CLAUDE.md 的项目现在会将加载路径输出到调试输出。 |
| **#97241** | [sec-default：系统提示部分延续到用户层之后](https://github.com/anthropics/claude-code/pull/97241) | ✅ 已关闭 | 组织级别的 `sec-default` 现在可以正确覆盖用户层对系统提示组合的插件影响。 |
| **#97334** | [sec-default：对话保留行延续到用户层之后](https://github.com/anthropics/claude-code/pull/97334) | 🔵 进行中 | 为企业部署扩展超出用户层的行保留逻辑。 |
| **#97293** | [mods：声明携带 process.run 截断标志和列表条目的 mtimeMs](https://github.com/anthropics/claude-code/pull/97293) | 🔵 进行中 | 在进程结果中添加 `isStdoutTruncated`/`isStderrTruncated` 和文件列表的 `mtimeMs`——实现 mod 级别的文件/进程检查。 |
| **#98080** | [sec-default：设置拒绝规则优先于插件允许/询问](https://github.com/anthropics/claude-code/pull/98080) | ✅ 已关闭 | 安全加固：组织拒绝规则现在优先于用户安装的插件权限。 |
| **#98083** | [sec-default：allowManagedModsOnly 选项](https://github.com/anthropics/claude-code/pull/98083) | ✅ 已关闭 | 新增管理选项，允许组织只允许受管的 mods，阻止用户安装的 mods。 |
| **#96434** | [security-guidance：将被拒绝/机密文件保持在审查者接触范围之外](https://github.com/anthropics/claude-code/pull/96434) | 🔵 进行中 | 修复安全漏洞，防止安全审查者通过 git diff/show 访问被会话权限阻止的文件。 |
| **#97952** | [CI：GitHub Actions 安全加固](https://github.com/anthropics/claude-code/pull/97952) | 🔵 进行中 | 为 Claude 触发的工作流添加出口防火墙运行器和输入验证。 |
| **#94847** | [diff：首次编辑仅在有文件时才打开窗格](https://github.com/anthropics/claude-code/pull/94847) | 🔵 进行中 | diff 窗格在首次编辑时不再空打开——避免在编辑仓库外/忽略文件时产生困惑。 |

---

## 功能需求趋势

1. **可扩展性和插件系统**：#91870 mods 倡议是主导主题——社区需要函数钩子、插件生命周期事件和更深入的集成点。多个 PR（#97293、#98080、#98083）正在奠定基础。

2. **多账户和配置文件管理**：#18435 强烈需求在桌面应用中实现原生多账户切换。相关：工作区/文件夹管理（#98285）和会话恢复。

3. **上下文/Token 成本控制**：多次请求减少未使用工具模式的急切加载（#91395、#91775、#79504、#92554、#94907）——用户想要基于允许列表的工具选择和明确的退出选项。

4. **平台特定可靠性**：Windows MSIX 更新问题（#89599）、Linux VM 兼容性（#95566）、ARM64 挂起（#98291）和 macOS 权限（#98169）表明平台 QA 存在差距。

5. **权限/认证改进**：Auto 模式分类器误报（#97854、#98169）、登录持久化（#97344）和安全默认覆盖（#98080）反映出权限系统日益复杂。

---

## 开发者痛点

- **Auto 模式可靠性**：分类器返回无判定完全阻止核心工具——影响日常工作流程的高严重性回归。
- **Token/成本不透明**：多个问题（#91775、#91395）指向用户无法理解或控制其上下文消耗。
- **跨平台不一致**：平台特定 bug（Windows/MSIX、Linux/kvm64、ARM64、macOS 权限）表明测试覆盖存在盲点。
- **集成摩擦**：GitHub 连接器显示不可用尽管设置有效（#98277、#98292）以及 Chrome 登录重启后丢失（#97344）阻碍自动化工作流。
- **数据丢失风险**：子代理压缩 bug（#97665）、git 重置无确认（#84660）和 Cowork 沙盘磁盘填满（#91680）代表严重的数据完整性问题。

---

*数据来源：GitHub — anthropics/claude-code*</think>

# Claude Code 社区速报 — 2026-09-30

## 今日要闻

v2.1.285 版本带来三个值得关注的新功能：`CLAUDE_CODE_DISABLE_WEB_FETCH` 环境变量（面向注重安全的用户）、`claude --desktop` 命令（用于快速启动桌面应用），以及新的 `claude plugin configure` 子命令。与此同时，社区继续推动重要功能讨论——尤其是关于 mods 可扩展性（225 条评论）和多账户管理（198 条评论，841 👍），这两项都反映出用户对 Claude Code 深度定制能力的强烈需求。

---

## 版本发布

**v2.1.285** — 发布日期：2026-09-30

- **`CLAUDE_CODE_DISABLE_WEB_FETCH`**：新增环境变量，可完全禁用 WebFetch 工具
- **`claude --desktop`**：新增 CLI 参数，支持在当前目录启动桌面应用或通过 `--continue` / `--resume <id>` 恢复会话
- **`claude plugin configure <plugin>`**：新增子命令，用于显示插件配置详情

---

## 热门 Issues

| # | Issue | 概要 | 为何重要 | 反应 |
|---|-------|---------|----------------|-----------|
| **#91870** | [Mods - 让 Claude 可扩展性提升 10 倍](https://github.com/anthropics/claude-code/issues/91870) | 社区更新：函数钩子将在"几周内"发布。这是可扩展性的旗舰级功能倡议。| 将使第三方插件开发者能够接入 Claude 的执行流程——这可以说是最迫切的需求。| 225 条评论，128 👍 |
| **#18435** | [桌面应用中的多账户管理](https://github.com/anthropics/claude-code/issues/18435) | 特性请求：在桌面应用中管理多个 Claude 账户，支持便捷的配置文件切换。| 高级用户和团队的高频需求；841 👍 使其成为最迫切的需求之一。| 198 条评论，841 👍 |
| **#97854** | [Auto 模式：服务端分类器阻止 Bash/ScheduleWakeup](https://github.com/anthropics/claude-code/issues/97854) | Auto 模式对 Bash 和 ScheduleWakeup 始终返回"无判定"，连 `echo ok` 这样的简单命令都被阻止。| Auto 模式中的严重可靠性问题——完全破坏了核心功能。| 25 条评论，33 👍 |
| **#98145** | [工具调用中间引导中未正确使用韩语](https://github.com/anthropics/claude-code/issues/98145) | 模型在工具调用之间的中间引导中反复忽略明确的韩语指令。| 影响非英语用户的本地化/i18n bug；表明指令遵循存在持续缺陷。| 16 条评论，0 👍 |
| **#89599** | [Windows MSIX：后台静默更新导致应用退出但进程存活](https://github.com/anthropics/claude-code/issues/89599) | MSIX 更新后留下孤立进程，注册失败，应用无法启动直到手动终止进程。| Windows 部署阻碍，影响企业/MSIX 分发场景。| 13 条评论，1 👍 |
| **#97665** | [子代理压缩：尾部记录未被写入](https://github.com/anthropics/claude-code/issues/97665) | 子代理自动压缩时，保全段的最终记录被引用但从未实际写入 transcript。| 数据完整性问题，可能导致长会话中对话历史丢失。| 8 条评论，0 👍 |
| **#95566** | [二进制文件在 kvm64 CPU 上挂起（无 SSE4/POPCNT）](https://github.com/anthropics/claude-code/issues/95566) | 在 kvm64 CPU 型号的虚拟机上，本地二进制文件 CPU 100% 挂起，原因是缺少 CPU 特性——需要预检查。| Linux 虚拟机用户的安装阻碍，影响容器化/云环境。| 7 条评论，1 👍 |
| **#91775** | [/usage 统计标签页将 token 总数多算约 2 倍](https://github.com/anthropics/claude-code/issues/91775) | 按 transcript 行而非 `message.id` 计算 `message.usage`，导致报告的 token 使用量翻倍。| 费用跟踪不准确，用户无法依赖内置使用统计。| 5 条评论，0 👍 |
| **#91395** | [Artifact 工具急切加载约 12k tokens](https://github.com/anthropics/claude-code/issues/91395) | Artifact schema 被无条件加载到每个会话中，无法通过拒绝规则选择退出。| 对于不使用 Artifact 的用户造成上下文膨胀；贡献了 token 开销。| 4 条评论，2 👍 |
| **#98292** | [GitHub 集成提示"无可用连接器"](https://github.com/anthropics/claude-code/issues/98292) | 聊天界面显示无可用 GitHub 连接器，尽管账户已连接且 GitHub App 已安装。| 集成可靠性问题；阻碍工作流自动化。| 3 条评论，0 👍 |

---

## 主要 PR 进展

| # | PR | 状态 | 概要 |
|---|-----|---------|---------|
| **#98275** | [agents-md：将 AGENTS.md 加载行输出到调试日志](https://github.com/anthropics/claude-code/pull/98275) | ✅ 已关闭 | 有 AGENTS.md 但无 CLAUDE.md 的项目现在会将加载路径输出到调试输出。 |
| **#97241** | [sec-default：系统提示部分延续到用户层之后](https://github.com/anthropics/claude-code/pull/97241) | ✅ 已关闭 | 组织级别的 `sec-default` 现在可以正确覆盖用户层对系统提示组合的插件影响。 |
| **#97334** | [sec-default：对话保留行延续到用户层之后](https://github.com/anthropics/claude-code/pull/97334) | 🔵 进行中 | 为企业部署扩展超出用户层的行保留逻辑。 |
| **#97293** | [mods：声明携带 process.run 截断标志和列表条目的 mtimeMs](https://github.com/anthropics/claude-code/pull/97293) | 🔵 进行中 | 在进程结果中添加 `isStdoutTruncated`/`isStderrTruncated` 和文件列表的 `mtimeMs`——实现 mod 级别的文件/进程检查。 |
| **#98080** | [sec-default：设置拒绝规则优先于插件允许/询问](https://github.com/anthropics/claude-code/pull/98080) | ✅ 已关闭 | 安全加固：组织拒绝规则现在优先于用户安装的插件权限。 |
| **#98083** | [sec-default：allowManagedModsOnly 选项](https://github.com/anthropics/claude-code/pull/98083) | ✅ 已关闭 | 新增管理选项，允许组织只允许受管的 mods，阻止用户安装的 mods。 |
| **#96434** | [security-guidance：将被拒绝/机密文件保持在审查者接触范围之外](https://github.com/anthropics/claude-code/pull/96434) | 🔵 进行中 | 修复漏洞，防止安全审查者通过 git diff/show 访问被会话权限阻止的文件。 |
| **#97952** | [CI：GitHub Actions 安全加固](https://github.com/anthropics/claude-code/pull/97952) | 🔵 进行中 | 为 Claude 触发的工作流添加出口防火墙运行器和输入验证。 |
| **#94847** | [diff：首次编辑仅在有文件时才打开窗格](https://github.com/anthropics/claude-code/pull/94847) | 🔵 进行中 | diff 窗格在首次编辑时不再空打开——避免在编辑仓库外/忽略文件时产生困惑。 |

---

## 功能需求趋势

1. **可扩展性和插件系统**：#91870 mods 倡议是主导主题——社区需要函数钩子、插件生命周期事件和更深入的集成点。多个 PR（#97293、#98080、#98083）正在奠定基础。

2. **多账户和配置文件管理**：#18435 强烈需求在桌面应用中实现原生多账户切换。相关：工作区/文件夹管理（#98285）和会话恢复。

3. **上下文/Token 成本控制**：多次请求减少未使用工具模式的急切加载（#91395、#91775、#79504、#92554、#94907）——用户想要基于允许列表的工具选择和明确的退出选项。

4. **平台特定可靠性**：Windows MSIX 更新问题（#89599）、Linux VM 兼容性（#95566）、ARM64 挂起（#98291）和 macOS 权限（#98169）表明平台 QA 存在差距。

5. **权限/认证改进**：Auto 模式分类器误报（#97854、#98169）、登录持久化（#97344）和安全默认覆盖（#98080）反映出权限系统日益复杂。

---

## 开发者痛点

- **Auto 模式可靠性**：分类器返回无判定完全阻止核心工具——影响日常工作流程的高严重性回归。
- **Token/成本不透明**：多个问题（#91775、#91395）指向用户无法理解或控制其上下文消耗。
- **跨平台不一致**：平台特定 bug（Windows/MSIX、Linux/kvm64、ARM64、macOS 权限）表明测试覆盖存在盲点。
- **集成摩擦**：GitHub 连接器显示不可用尽管设置有效（#98277、#98292）以及 Chrome 登录重启后丢失（#97344）阻碍自动化工作流。
- **数据丢失风险**：子代理压缩 bug（#97665）、git 重置无确认（#84660）和 Cowork 沙盘磁盘填满（#91680）代表严重的数据完整性问题。

---

*数据来源：GitHub — anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this OpenAI Codex Community Digest from English to Chinese. I need to:
1. Translate all headings, body text, and list items
2. Keep all Markdown formatting exactly as-is (headings, tables, lists, code spans, URLs, numbers, etc.)
3. Keep all technical identifiers unchanged (#issues, PRs, version numbers, etc.)
4. Use natural technical Chinese - not literal word-for-word

Let me go through and translate this carefully while preserving the structure.

The content includes:
- Headings
- Tables (with alignment)
- Lists (bullet and numbered)
- Bold text
- Links
- Code/technical references
- Emoji

I need to keep all formatting and translate the content naturally.</think>

# OpenAI Codex 社区简报 — 2026-09-30

## 今日要闻

本周期内 Codex 团队发布了三个小版本（0.159.0–0.159.2），将 GPT-6.1 Sol 设为默认模型，并修复了一个关键的 Windows 控制台闪烁问题（该问题已积累超过 100 条评论）。社区讨论的热点集中在 Windows 平台问题上——尤其是守护进程权限错误、沙盒命令执行失败以及 CLI 全屏行为——而今天合并的一个 PR 则根据用户反馈移除了随机的 TUI 问候语。

---

## 发布动态

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **0.159.2** | 补丁 | 修复了在 Windows 上启动后台进程和沙盒命令时控制台窗口闪烁的问题。修复 [#48074](https://github.com/openai/codex/issues/48074)。 |
| **0.159.1** | 小更新 | 在捆绑版、Amazon Bedrock Mantle 和 Runtime 目录中添加 GPT-6.1 Sol 作为默认模型。 |
| **0.159.0** | 小更新 | 新增 `instant_interrupt` 功能，允许在模型响应期间引导 Codex。新会话采用紧凑的欢迎屏幕，带有一致的标题和偶尔的提示。 |
| **0.160.0-alpha.6.1** | 预览版 | 预览版小更新。 |
| **0.161.0-alpha.1 / alpha.2** | 预览版 | 早期预览版本。 |

---

## 热门 Issue

### 平台与稳定性

1. **[#48074](https://github.com/openai/codex/issues/48074)** — **Windows：请求期间终端窗口持续闪烁**（117 条评论，139 👍）  
   *按互动量排名第一的 Issue。* Windows 11 用户报告 Codex 守护进程运行后台进程时出现持续的控制台闪烁。已在 0.159.2 中回填修复，但早期版本用户仍受影响。

2. **[#48043](https://github.com/openai/codex/issues/48043)** — **Codex CLI 0.157.0 在 Windows 上启动失败，守护进程权限错误**（37 条评论，36 👍）  
   0.157.0 中的回归问题；0.156.1 正常工作。用户报告守护进程权限错误完全阻止了 CLI 启动。

3. **[#44768](https://github.com/openai/codex/issues/44768)** — **守护进程为每个 hook 和 shell 命令打开可见的控制台窗口**（24 条评论，8 👍）  
   与 #48074 相关。在 Windows 上，每个 hook 和 shell 命令都会生成可见的控制台窗口，干扰工作流。

4. **[#25799](https://github.com/openai/codex/issues/25799)** — **Windows Codex 应用无法为 WSL2 项目启动沙盒命令**（19 条评论，9 👍）  
   跨平台问题：沙盒命令在 Windows 上运行但目标是 WSL2 项目时失败。

5. **[#41779](https://github.com/openai/codex/issues/41779)** — **Windows：本地 API 启动被"策略阻止"拒绝**（15 条评论，0 👍）  
   PowerShell 命令在执行前被 Windows 策略阻止，导致本地开发 API 无法启动。

### 交互与行为

6. **[#48913](https://github.com/openai/codex/issues/48913)** — **添加设置项以禁用随机会话问候语**（6 条评论，18 👍）  
   用户希望在每个新 CLI 会话中禁用随机选择的问候语（如 "Speak, friend, and enter a prompt"）。参见 PR #49395 的解决方案。

7. **[#42243](https://github.com/openai/codex/issues/42243)** — **Codex Pet 浮窗在隐藏后再次出现**（23 条评论，31 👍）  
   用户明确隐藏浮动 Pet 浮窗后，它会再次出现，干扰专注工作。

8. **[#48324](https://github.com/openai/codex/issues/48324)** — **ChatGPT Windows 桌面版："无法加载组织设置"**（24 条评论，4 👍）  
   Codex 无法在 ChatGPT Windows 桌面应用中加载，完全阻止了 composer 访问。

### 速率限制与认证

9. **[#45835](https://github.com/openai/codex/issues/45835)** — **尽管网络和账户状态健康，仍显示"所选模型已满负荷"**（21 条评论，6 👍）  
   用户在网络和账户状态健康的情况下仍看到重复的满负荷错误——可能是容量检测的误报。

10. **[#48777](https://github.com/openai/codex/issues/48777)** — **Android：Codex Remote 反复返回"授权此手机"**（7 条评论，0 👍）  
    在浏览器授权后，Android 与 WSL2 中运行的 Codex 配对失败，阻止了移动端远程工作流。

---

## 关键 PR 进展

| PR | 摘要 |
|----|---------|
| **[#49395](https://github.com/openai/codex/pull/49395)** | **移除 TUI 会话标题中的随机问候语** — 已合并。响应社区反馈（issue #48913、#48991）。 |
| **[#49424](https://github.com/openai/codex/pull/49424)** | 推断 Windows UNC 路径，支持正斜杠和混合斜杠。修复了 Windows 上的路径解析问题。 |
| **[#49416](https://github.com/openai/codex/pull/49416)** | 多行 ANSI 警告中省略载荷。减少大渲染内容产生的日志膨胀。 |
| **[#49415](https://github.com/openai/codex/pull/49415)** | 协议调试输出中截断输入文本。将 `ContentItem::InputText` 调试格式限制为 512 字节前缀。 |
| **[#49407](https://github.com/openai/codex/pull/49407)** | 环境信息超时时恢复 exec-server 会话。包装元数据 RPC 为 30 秒超时，防止传输卡死。 |
| **[#49406](https://github.com/openai/codex/pull/49406)** | 支持使用 OpenAI API 密钥的显式网络访问计划。为 `cyberAccessProgram` 选择添加新的默认禁用功能。 |
| **[#49403](https://github.com/openai/codex/pull/49403)** | 为登录 shell 添加捆绑工具的实验性标志。新增 `login_shell_package_path` 功能。 |
| **[#49386](https://github.com/openai/codex/pull/49386)** | **[0.160] 将 Windows 控制台修复回填到 alpha.6** — 为 0.160 分支移植控制台抑制修复。 |
| **[#49385](https://github.com/openai/codex/pull/49385)** | **[0.159] 将 Windows 控制台抑制修复回填到 0.159.2** — 在稳定版中修复 #48074。 |
| **[#49392](https://github.com/openai/codex/pull/49392)** | 添加归因 MCP OAuth 凭据存储遥测。记录凭据加载/保存/删除操作。 |

---

## 热门讨论

### 综合

- **[#2251](https://github.com/openai/codex/discussions/2251)** — **Codex 使用限额**（58 条评论，56 👍）  
  用户询问 Plus 套餐限额（每周 3000 次 Thinking）在 ChatGPT 应用和 Codex CLI 之间是否有差异。

- **[#8503](https://github.com/openai/codex/discussions/8503)** — **尽管 Code Review 显示 100% 剩余，仍显示"已达使用限额"**（22 条评论，9 👍）  
  GitHub Connector 在新 PR 上立即报告使用限额，即使配额显示可用。可能存在配额跟踪不匹配的问题。

- **[#49129](https://github.com/openai/codex/discussions/49129)** — **Codex CLI 全屏**（2 条评论，4 👍）  
  用户惊讶于最新 CLI 版本会占据整个终端窗口。有些人更喜欢滚动行为。

- **[#49282](https://github.com/openai/codex/discussions/49282)** — **Codex 劫持了 MacOS 终端的右键菜单**（0 条评论，1 👍）  
  用户报告在终端中右键时失去了 macOS Services 菜单。暂无回应。

### 问答

- **[#46001](https://github.com/openai/codex/discussions/46001)** — **Windows 桌面版：验证所选与实际生效的权限配置**（3 条评论，1 👍）  
  用户询问如何确认哪个权限配置实际生效，而非 UI 中选择的配置。

- **[#49259](https://github.com/openai/codex/discussions/49259)** — **Windows 11 上 Codex Desktop 本地执行器失败**（1 条评论，1 👍）  
  用户正在调试 `helper_unknown_error` 和 `SetNamedSecurityInfoW` 错误的 ACL/沙盒失败问题。

### 展示与分享

- **[#49253](https://github.com/openai/codex/discussions/49253)** — **Lunavect：Mac 菜单栏中的 Codex 会话列表**（1 条评论，1 👍）  
  开源的 macOS 菜单栏应用，显示活跃的 Codex/Claude Code 会话及其状态（工作中、等待审批）和速率限制计时器。

- **[#47231](https://github.com/openai/codex/discussions/47231)** — **Mobile Codex — 在 Android 上直接运行 Codex**（1 条评论，1 👍）  
  社区开发的 Android 应用，捆绑了 Codex 移植版本，无需远程 PC 即可在设备上运行。

---

## 功能请求趋势

从 Issue 和讨论中可以看出以下趋势：

1. **Windows 平台一致性** — 多个请求涉及 Windows 控制台处理、WSL2 沙盒兼容性和守护进程权限管理。Windows 用户遇到了 macOS/Linux 用户未遇到的摩擦点。
2. **自定义与控制** — 用户希望禁用 TUI 问候语（#48913）、控制会话标题，以及验证实际生效的权限配置（#46001）。
3. **使用量与速率限制透明度** — 对使用量跟踪（#8503、#49322）、容量错误误报（#45835）以及套餐限额差异（#2251）感到困惑。
4. **移动端与远程工作流** — Android 远程配对问题（#48777）、移动端会话可访问性（#49090）以及社区移动 Codex 实验（#47231）。
5. **UI 稳定性** — Pet 浮窗行为（#42243）、CLI 全屏行为变化（#49129）以及右键菜单劫持（#49282）。

---

## 开发者痛点

- **Windows 控制台闪烁与守护进程失败** — 首要痛点。回填修复正在推送，但旧版本用户仍受影响。
- **使用限额不明确** — 开发者报告在配额显示可用时仍被"已达使用限额"阻止，这表明计量逻辑不透明或不一致。
- **CLI 全屏行为** — 最近的全屏变化存在争议；部分用户更喜欢传统滚动方式。
- **Windows/WSL2 上的沙盒命令执行** — 跨环境工具调用经常因策略或沙盒错误失败。
- **凭据与认证状态混乱** — 用户难以理解自己是否已认证、哪个权限配置实际生效，以及凭据实际存储在哪里。

---

*简报基于 2026-09-30 的 GitHub 数据生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this English community digest into Chinese, preserving the exact Markdown structure while using natural technical Chinese (the register of a Chinese developer newsletter).

Let me translate while:
1. Keeping all headings, tables, lists, bold/italic, horizontal rules, emoji
2. Preserving URLs, issue/PR references (#12345), version tags, file paths exactly
3. Using natural technical Chinese - not literal word-for-word
4. Keeping the tone of a Chinese developer newsletter

Let me go through each section:

## 1. Today's Highlights
- 翻译: 今日要点

## 2. Releases
- 翻译: 版本发布

## 3. Hot Issues
- 翻译: 热门 Issue

## 4. Key PR Progress
- 翻译: 关键 PR 进展

## 5. Feature Request Trends
- 翻译: 功能需求趋势

## 6. (appears twice in the content - should be 5 and 6)
Actually looking at the content, there's:
- 5. Hot Discussions (no data)
- 6. Feature Request Trends (from Issues)

So I need to keep the structure.

## 7. Developer Pain Points
- 翻译: 开发者痛点

Let me translate the full content now:</think>

# Gemini CLI 社区digest — 2026-09-30

## 1. 今日要点

Gemini CLI 团队刚刚发布了两个新版本（v0.62.0 和 v0.63.0-preview.0），修复了关键稳定性问题，包括处理 scoped 包中 `@` 符号时的 CPU 挂起问题，以及改进了连接恢复时的进度指示器显示。社区正在积极解决智能体行为问题——多个 P1 Issue 报告了智能体恢复失败和通用智能体挂起的问题，这些问题严重影响了工作流。

---

## 2. 版本发布

| 版本 | 关键变更 |
|---------|-------------|
| **v0.63.0-preview.0** | 修复了连接恢复重试时 CLI 不显示进度指示器的问题（[#28340](https://github.com/google-gemini/gemini-cli/pull/29468)）；包含更新日志 |
| **v0.62.0** | 修复了 A2A 服务器在不支持 store 时提前返回 tasks 元数据端点的问题（[#29334](https://github.com/google-gemini/gemini-cli/pull/29334)） |

---

## 3. 热门 Issue

| Issue | 优先级 | 为何重要 | 社区反馈 |
|-------|----------|-----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)**: 子智能体在 MAX_TURNS 后恢复时被报告为 GOAL 成功 | P1 | 子智能体在达到轮次限制时错误地报告成功状态，隐藏了中断信息 | 13 条评论，2 👍 |
| **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)**: 利用模型原生 bash 亲和性实现零依赖 OS 沙箱 | P2 | 提出与模型原生 POSIX 工具偏好对齐的安全增强沙箱方案 | 9 条评论 |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)**: 通用智能体挂起 | P1 | **高影响**：将任务委托给子智能体后无限挂起；阻塞所有操作 | 8 条评论，**8 👍** |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)**: 评估 AST 感知的文件读取、搜索和映射 | P2 | 追踪精确代码导航和减少 token 使用的潜在改进路线图 | 7 条评论 |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)**: Gemini 没有充分利用 skills 和子智能体 | P2 | 模型无法自主调用自定义 skills/子智能体，需要用户显式提示 | 6 条评论 |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)**: 浏览器智能体忽略 settings.json 覆盖 | P2 | 浏览器智能体绕过用户配置（如 maxTurns），导致行为不可预测 | 4 条评论 |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)**: 浏览器智能体弹性——自动会话接管 | P3 | 提出浏览器会话的锁恢复机制，而非快速失败 | 4 条评论 |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)**: 浏览器子智能体在 Wayland 上失败 | P1 | 浏览器智能体在 Wayland 显示服务器上崩溃 | 4 条评论，1 👍 |
| **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)**: 任务追踪器的原生文件工具 | P3 | 提出持久化基于文件的待办追踪，替代上下文内追踪 | 4 条评论 |
| **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)**: 符号链接的智能体文件无法识别 | P2 | `~/.gemini/agents/` 中的符号链接无法加载为子智能体 | 4 条评论 |

---

## 4. 关键 PR 进展

| PR | 优先级 | 描述 |
|----|----------|-------------|
| **[#29568](https://github.com/google-gemini/gemini-cli/pull/29568)** | P1 | **重大改动**：在 ChatRecordingService 中实现追加式增量补丁和有界历史窗口，替代全量历史重写 |
| **[#29557](https://github.com/google-gemini/gemini-cli/pull/29557)** | P1 | **关键修复**：防止代码中包含 `@scope/pkg` 后跟引号字符串时在无头模式下导致 100% CPU 挂起 |
| **[#29573](https://github.com/google-gemini/gemini-cli/pull/29573)** | — | 修复沙箱镜像名中 registry port 的解析——防止标签丢失和无效容器名 |
| **[#29528](https://github.com/google-gemini/gemini-cli/pull/29528)** | P1 | 修复无头模式下文件夹信任状态的传递，解决状态分裂问题 |
| **[#29560](https://github.com/google-gemini/gemini-cli/pull/29560)** | P2 | Windows ConPTY IME 光标位置转发——修复 CJK 字符对齐问题 |
| **[#29558](https://github.com/google-gemini/gemini-cli/pull/29558)** | P1 | 原子状态持久化与备份恢复——防止 `state.json` 损坏 |
| **[#29564](https://github.com/google-gemini/gemini-cli/pull/29564)** | — | 设置迁移期间保留 `${VAR}` 环境变量占位符 |
| **[#29563](https://github.com/google-gemini/gemini-cli/pull/29563)** | — | 截断字符串时保留行终止符——修复静默删除 `\n` 的问题 |
| **[#29559](https://github.com/google-gemini/gemini-cli/pull/29559)** | — | 差异计算前规范化 CRLF——修复"每行都变"的误报 |
| **[#29549](https://github.com/google-gemini/gemini-cli/pull/29549)** | — | 在 ACP 模式桥接 `PromptResponse.usage`——修复约 3 倍的计费高估问题 |

---

## 5. 功能需求趋势

*（源数据中未提供讨论内容）*

---

## 6. 功能需求趋势（来自 Issue）

| 主题 | 相关 Issue |
|-------|----------------|
| **提升智能体自主性** | #21968（skills/子智能体利用不足）、#22598（子智能体轨迹可见性）、#22741（可后台运行的子智能体） |
| **AST/代码库感知** | #22745、#22746、#22747（AST 感知读取、搜索、映射工具） |
| **安全与沙箱** | #19873（零依赖 OS 沙箱）、#22672（阻止破坏性命令） |
| **持久化任务追踪** | #21000、#18836（基于文件 vs 上下文内待办） |
| **平台可靠性** | #21983（Wayland）、#21409（通用智能体挂起）、#22323（子智能体恢复） |

---

## 7. 开发者痛点

1. **智能体挂起与交互阻塞** — 多篇报告称通用智能体在委托给子智能体后无限挂起；浏览器智能体在 Wayland 上失败
2. **配置被忽略** — 浏览器智能体和其他子智能体绕过用户设置（maxTurns、信任状态），导致行为不可预测
3. **上下文膨胀与 Token 浪费** — 二进制资源被模糊匹配错误包含；大文件读取"大水漫灌"式消耗上下文；缺乏精确的代码发现层级
4. **状态损坏** — `state.json` 损坏导致数据丢失；缺少原子写入机制
5. **符号链接支持** — 无法使用符号链接定义智能体，限制了工作空间组织
6. **计费高估** — ACP 模式因缺失 usage 元数据桥接导致约 3 倍的高估（已在 #29549 中修复）

---

*数据来源：github.com/google-gemini/gemini-cli — 2026-09-30*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI Community Digest into Simplified Chinese. I need to:

1. Translate all the content into Simplified Chinese
2. Preserve all Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate while preserving the structure:

Title: GitHub Copilot CLI Community Digest -> GitHub Copilot CLI 社区简报

Date: 2026-09-30 -> keep as is

Let me translate section by section:

## 1. Today's Highlights

GitHub released five incremental versions (v1.0.90-1 through v1.0.90-5) addressing MCP improvements, OAuth token caching, and session state management. The community is actively reporting 400 error issues during code reviews and Figma MCP server failures, while a new PR proposes automated npm publishing from GitHub releases.

GitHub 发布了五个增量版本（v1.0.90-1 到 v1.0.90-5），主要改进了 MCP、OAuth 令牌缓存和会话状态管理。社区正在积极报告代码审查期间的 400 错误和 Figma MCP 服务器故障问题，同时一个新的 PR 提议从 GitHub Releases 自动发布 npm 包。

## 2. Releases

| Version | Changes |
|---------|---------|
| **v1.0.90-5** | Fixed: Model picker no longer shows "No supported model available" when a provider is configured. MCP tool calls now complete properly even when servers send progress updates after responding. |


| **v1.0.90-4** | Fixed: Fresh launch no longer prints "Failed to read model provider attribution" errors during sign-in. |
| **v1.0.90-3** | Added: `--mcp-github-auth` flag to scope GitHub account auth to approved MCP server origins. Added session-scoped read-only directory approvals to path access prompts. |
| **v1.0.90-2** | Various fixes and changes. |
| **v1.0.90-1** | Fixed: MCP OAuth sign-in reuses valid cached tokens. Withdrawn running prompts stay removed after session resume. |

The updates focus on resolving model picker issues, improving MCP tool interaction reliability, and managing OAuth token persistence across sessions. Key improvements include proper error handling during sign-in, GitHub authentication scoping for MCP servers, and maintaining prompt state after session resumption.

I'll prioritize addressing the most critical CLI and MCP integration challenges. The top issues involve fixing 400 error requests, preventing resource-intensive file monitoring, resolving Figma MCP server connection problems, handling tool name parsing with dots, and improving server environment secret management.

The next set of issues requires attention to organization-level agent visibility and addressing empty model response scenarios during compaction processes.

For /ask functionality, I need to resolve compatibility problems with auto models, tackle session recovery complications from stale lock states, and investigate AI model interactions with search view and rg commands.

Recent pull requests include publishing npm tarballs from existing releases and documenting multiple feature requests related to MCP enhancements, particularly around PDF file uploads, tool configuration flexibility, and conversation interface scrollback improvements.</think>

# GitHub Copilot CLI 社区简报

**日期：** 2026-09-30

---

## 1. 今日要点

GitHub 发布了五个增量版本（v1.0.90-1 到 v1.0.90-5），主要改进了 MCP、OAuth 令牌缓存和会话状态管理。社区正在积极报告代码审查期间的 400 错误和 Figma MCP 服务器故障问题，同时一个新的 PR 提议从 GitHub Releases 自动发布 npm 包。

---

## 2. 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v1.0.90-5** | 修复：配置了模型提供商后，模型选择器不再显示"No supported model available"。即使服务器在响应后发送进度更新，MCP 工具调用现在也能正常完成。 |
| **v1.0.90-4** | 修复：全新启动时不再在登录过程中打印"Failed to read model provider attribution"错误。 |
| **v1.0.90-3** | 新增：`--mcp-github-auth` 标志，用于将 GitHub 账户授权限制在已批准的 MCP 服务器来源。为路径访问提示新增了会话作用域的只读目录审批。 |
| **v1.0.90-2** | 各种修复和变更。 |
| **v1.0.90-1** | 修复：MCP OAuth 登录现在会重用有效的缓存令牌。已撤销的运行中提示在会话恢复后保持移除状态。 |

---

## 3. 热门议题

### 🔴 关键稳定性问题

**#1274 — CLI 持续收到 400 错误，请求体无效**  
31 条评论 · 13 👍  
约 95% 的代码审查 diff 文件请求失败。用户报告服务器端验证问题或请求体构造错误。[查看议题](https://github.com/github/copilot-cli/issues/1274)

**#4807 — 空闲的 Copilot CLI 陷入 FileWatch 事件风暴，消耗两个 CPU 核心**  
3 条评论 · 1 👍  
空闲的 CLI 进程连续 35+ 小时消耗 221% CPU，写入 33+ GB 调试日志。可能是严重的资源泄漏。[查看议题](https://github.com/github/copilot-cli/issues/4807)

### 🔧 MCP 集成

**#4870 — Figma 远程服务器加载失败 — `server/discover` 上的 `-32601` 被视为致命错误**  
8 条评论 · 12 👍  
Figma MCP 服务器 (`mcp.figma.com`) 已初始化，但 CLI 从未注册其工具。发现探针收到 `-32601` 错误码，CLI 将其视为致命错误。在 VS Code 中正常工作。[查看议题](https://github.com/github/copilot-cli/issues/4870)

**#2581 — 带点号的 MCP 工具名导致 400 Bad Request**  
3 条评论 · 3 👍  
带点号的工具（如 `custom.tool.name`）因模式不匹配 `^[a-zA-Z0-9_-]{1,128}$` 被拒绝，尽管 MCP 规范允许点号。[查看议题](https://github.com/github/copilot-cli/issues/2581)

**#4985 — MCP 服务器环境密钥占位符未传递给派生的进程**  
1 条评论 · 0 👍  
`${secret:...}` 占位符未传递到 macOS 上以 stdio 方式运行的 MCP 服务器进程，而普通环境变量正常工作。[查看议题](https://github.com/github/copilot-cli/issues/4985)

### 🏢 企业与组织

**#1285 — 组织级别的 Agent 未显示**  
11 条评论 · 14 👍  
在 `{org}/.github-private` 下创建的 Agent 未在 CLI 或 VS Code 中显示，尽管命名空间和模板配置正确。[查看议题](https://github.com/github/copilot-cli/issues/1285)

### 🧠 模型与上下文

**#2861 — 压缩失败：从模型收到空响应（重试 3 次）**  
7 条评论 · 5 👍  
在短会话中手动对 Claude Opus 4.6 运行 `/compact` 会连续三次失败，收到空的模型响应。[查看议题](https://github.com/github/copilot-cli/issues/2861)

**#4919 — /ask 与 auto 模型不兼容**  
4 条评论 · 0 👍  
处于 auto 模式的用户在使用 /ask 进行延伸提问时收到"model not supported"错误。[查看议题](https://github.com/github/copilot-cli/issues/4919)

### 📜 会话管理

**#4805 — 会话变得无法恢复：来自崩溃主机的过时 `inuse.<pid>.lock`**  
2 条评论 · 0 👍  
崩溃主机的运行时/生命周期锁文件阻止会话恢复，即使会话数据完好无损。[查看议题](https://github.com/github/copilot-cli/issues/4805)

---

## 4. 主要 PR 进展

| PR | 描述 |
|----|------|
| **#5000** [开放] — 从已发布的 Copilot CLI Releases 发布 npm tarball | 提议从 GitHub Releases 触发 npm 发布，并提供显式标签手动恢复路径。使用可信发布（OIDC）而非 npm token。[查看 PR](https://github.com/github/copilot-cli/pull/5000) |

---

## 5. 功能需求趋势

根据议题分析，最常请求的功能方向为：

| 类别 | 需求 |
|------|------|
| **MCP 增强** | PDF 文件上传支持、更便捷的 MCP 开关（像 skills 一样）、ACP 服务器模式的 BYOK |
| **工具交互** | 枚举/oneOf 字段应提供"其他 / 自定义答案"逃生出口 |
| **会话/UI** | 对话滚动改进（高亮请求/响应轮次、折叠中间内容）、恢复时的滚动条行为修复 |
| **认证** | MCP 服务器 OAuth 改进、更好的键盘输入处理 |

---

## 6. 开发者痛点

1. **可靠性问题**：代码审查和 MCP 工具调用期间的高频 400 错误让用户沮丧。diff 审查高达 95% 的失败率尤其令人担忧。

2. **MCP 集成摩擦**：多个 MCP 相关问题——Figma 服务器失败、OAuth 卡在认证、带点号的工具名被拒绝、密钥未传递给进程。

3. **资源消耗**：空闲 CLI 消耗 2 个 CPU 核心并生成 33GB+ 日志，表明存在严重 bug。

4. **企业功能缺口**：组织级别的 Agent 未在 CLI 中显示，阻碍了团队级采用。

5. **会话生命周期**：崩溃后因过时锁文件导致会话无法恢复，加上恢复时的滚动问题。

---

*简报结束*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest into Simplified Chinese. Let me go through and translate it while following all the rules:

1. Output ONLY the translation - no preamble, no explanation
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, issue numbers, code, etc. as-is
4. Use natural technical Chinese register

Let me translate section by section:

## Today's Highlights

Memory and performance issues dominate today's activity. A major megathread (#20695) for memory problems has attracted 147 comments as the team collects heap snapshots, while a separate TUI OOM issue (#51761) reports 24-28GB memory exhaustion. The community is also tracking a critical database bloat issue where `opencode.db` reaches 13GB+ due to unbounded event table growth (#33356). On the positive side, several high-impact PRs merged today address CORS issues, prompt caching for OpenRouter, and Copilot integration fixes.

今日热点聚焦于内存和性能问题。内存问题的主讨论串（#20695）已吸引147条评论，团队正在收集堆快照；同时，另一个TUI OOM问题（#51761）报告了24-28GB的内存耗尽。社区还在关注一个关键的数据库膨胀问题——由于事件表无限增长，`opencode.db`已达到13GB+（#33356）。积极的一面是，今日合并的多个高影响力PR解决了CORS问题、OpenRouter提示缓存以及Copilot集成修复。

---

## Hot Issues

热门问题

| # | Issue | Key Details | 👍 |
|---|-------|-------------|-----|
| **#20695** | **[Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)** | Central tracking for all memory issues. Team requests heap snapshots via manual flow—explicitly asks not to run LLMs for solutions. 147 comments, 112 👍 | 112 |
| **#33356** | **[Unbounded event table growth](https://github.com/anomalyco/opencode/issues/33356)** | SQLite store grows to 13GB+ on long-lived instances. Event-sourcing table never pruned/capped. Affects production systems at 97–99% disk usage. | 12 |
| **#52042** | **[Provider image rejection bricks session](https://github.com/anomalyco/opencode/issues/52042)** | When a custom provider rejects an image input, the session becomes unusable. Every subsequent request replays the failing image with no recovery path. | 0 |
| **#51761** | **[TUI OOM: 24-28GB memory exhaustion](https://github.com/anomalyco/opencode/issues/51761)** | Memory grows at 500MB/s–1GB/s without GC sawtooth, eventually OOM-killing the process in under a minute with no consistent trigger. | 1 |
| **#43379** | **[Streaming muse-* models missing finish_reason](https://github.com/anomalyco/opencode/issues/43379)** | Zen gateway streaming responses never send `finish_reason` chunk, causing strict OpenAI-compatible clients to enter retry loops. | 1 |
| **#51424** | **[Go subscription shows "Insufficient funds"](https://github.com/anomalyco/opencode/issues/51424)** | Active subscription with 0% usage returns "Insufficient account funds" error when trying to use Kimi models. | 2 |
| **#44821** | **[OAuth Codex budget misread as endpoint limit](https://github.com/anomalyco/opencode/issues/44821)** | OpenAI OAuth transform treats Codex product budget as physical endpoint limit, triggering premature compaction hundreds of thousands of tokens early. | 5 |
| **#51466** | **[Multiple reasoning_opaque values error](https://github.com/anomalyco/opencode/issues/51466)** | Error message "multiple reasoning_opaque values received in a single response" appears frequently with GitHub/Copilot + Opus 5.5. | 0 |
| **#38986** | **[SIGILL crash on AMD Ryzen Zen 3](https://github.com/anomalyco/opencode/issues/38986)** | OpenCode Desktop crashes with Illegal Instruction on AMD Ryzen 5 5600H (Zen 3) due to AVX-512 instructions in binary. | 0 |
| **#52178** | **[Zen API CORS only on /models endpoint](https://github.com/anomalyco/opencode/issues/52178)** | Zen gateway serves CORS headers only on `/zen/v1/models`—all inference endpoints fail preflight with 404, blocking third-party browser clients. | 0 |

---

## Key PR Progress

| # | PR | Description |
|---|-----|-------------|
| **#52190** | **[fix(core): tolerate multiple reasoning_opaque values from Copilot](https://github.com/anomalyco/opencode/pull/52190)** | Fixes `AI_InvalidResponseDataError`—Copilot models with interleaved thinking emit fresh `reasoning_opaque` before each tool call. |
| **#52185** | **[fix(console): answer CORS preflight on every Zen API route](https://github.com/anomalyco/opencode/pull/52185)** | Resolves #52178—serves CORS headers on all Zen routes, not just model-list endpoints. |
| **#52145** | **[fix(core): show structured provider error details](https://github.com/anomalyco/opencode/pull/52145)** | Shows decoded provider messages from structured error objects when AI SDK supplies generic HTTP errors. Refs #52042. |
| **#52110** | **[fix(ai): place prompt cache breakpoints on OpenRouter Anthropic and Qwen](https://github.com/anomalyco/opencode/pull/52110)** | Enables prompt caching for OpenRouter Anthropic and Qwen requests—fixes #51726 regression. |
| **#52187** | **[fix(tui): release oversized session message caches on switch](https://github.com/anomalyco/opencode/pull/52187)** | Releases memory when switching sessions with large message caches. Closes #39380. |
| **#52182** | **[fix(core): pass through Copilot Responses settings](https://github.com/anomalyco/opencode/pull/52182)** | Fixes #51850—GPT-6 reasoning effort now properly included in requests. |
| **#52188** | **[fix(ai): allocate system update cache markers once](https://github.com/anomalyco/opencode/pull/52188)** | Resolves cache-slot accounting issue by reusing cache markers across system updates. |
| **#51664** | **[fix(core): empty resources list no longer resolves to allow](https://github.com/anomalyco/opencode/pull/51664)** | Permission check with empty resources no longer falls through to `allow`. Closes #51648. |
| **#51625** | **[fix(tui): preserve alpha when tinting theme colors](https://github.com/anomalyco/opencode/pull/51625)** | Fixes transparent themes—tint() was dropping alpha channel. Closes #51555. |
| **#52195** | **[fix(core): keep commands whose model is not provider/model](https://github.com/anomalyco/opencode/pull/52195)** | Fixes regression where command `.md` files with short model names (e.g., `model: opus`) were incorrectly dropped. |

---

## Feature Request Trends

从今天的Issue活动来看，最热门的功能请求包括：

1. **内存管理** — 用户越来越需要更好的内存控制：显式清理、会话修剪和资源限制。
2. **本地数据库生命周期** — 对SQLite存储的压缩、保留策略和大小限制的需求越来越多。
3. **Provider灵活性** — 更多的自定义provider集成（如Nous Portal #47515），以及provider拒绝输入时的更强健的错误处理。
4. **增强的缓存** — 跨provider（OpenRouter、Anthropic等）的持续提示缓存请求。
5. **桌面体验** — 更好的附件选择器行为、桌面上的自定义provider支持，以及UI改进。

---

## 开发者痛点

社区对几个反复出现的问题感到沮丧：

- **内存膨胀** — 讨论串和OOM问题都表明系统性的内存问题导致生产故障。
- **数据库增长** — 无限增长的SQLite达到13GB+是一个主要的运维痛点。
- **Provider可靠性** — 图片拒绝（#52042）和通用400错误没有恢复路径，让用户陷入困境。
- **CORS阻止开发** — Zen gateway的CORS问题完全阻止了第三方浏览器集成。
- **订阅/账单困惑** — 围绕Go订阅账单和资金管理的多个问题。
- **平台兼容性** — 非AVX-512 CPU上的SIGILL崩溃限制了OpenCode的覆盖范围。

---

*基于2026年9月30日的GitHub数据生成的摘要*

---

规则：
- 仅输出翻译内容。不需要前言、解释，也不需要在整篇输出外加markdown代码块。
- 完全保留Markdown结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、水平分隔线。
- 保留URL、链接目标、代码片段、代码块、数字和日期不变。
- 保留项目名称、仓库slug、用户名、版本标签、文件路径和API/配置标识符的原始形式——不翻译它们。
- Issue/PR引用如#12345及其链接文本保持不变。
- 使用自然的技术中文，这是中文开发者通讯的语域——不是逐字直译。</think>



</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this Pi Community Digest into Simplified Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code references, issue/PR numbers as-is
4. Use natural technical Chinese register

Let me translate section by section, maintaining all formatting and structure.</think>

# Pi 社区摘要 — 2026-09-30

## 今日要闻

两个重要版本发布：**v0.99.1** 引入了 GPT-6.1 Sol 作为新的默认 OpenAI Codex 模型，而 **v0.99.0** 带来了 Codemode 和 MCP 服务器集成，支持通过 JavaScript 并行调用工具。社区活跃度保持高位，共有 50 个活跃 issues 和 21 个 PR，特别是围绕 Windows 兼容性、模型提供商行为和 TUI 性能方面。

---

## 版本发布

### v0.99.1
- **GPT-6.1 Sol** 现已在 OpenAI、Azure OpenAI 和 OpenAI Codex 上可用 — 设为 OpenAI Codex 的新默认模型
- 新增支持文档：[Select a model](https://github.com/earendil-works/pi/blob/v0.99.1/packages/coding-agent/docs/models.md#select-a-model)

### v0.99.0
- **Codemode 和 MCP** — 连接 MCP 服务器并运行可并行调用工具的 JavaScript
- 新文档：[MCP Servers](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md) 和 [Enable codemode](https://github.com/earendil-works/pi/blob/v0.99.0/pa)

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] How do you use Pi on windows? What issues are you seeing?** | 高优先级的 Windows 兼容性缺口 — 影响众多开发者，优先修复路径尚不明确 | 👍 2 (69 条评论) |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | **Bedrock: OpenAI models reject images nested in toolResult.content** | AWS Bedrock 上的图片处理失效；修复已在 fork 上就绪 | 👍 3 (9 条评论) |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | **Compaction prompt includes all thinking text and exceeds context window** | 推理模型的自动压缩失败（DeepSeek V4.1）— 核心可靠性问题 | 👍 1 (8 条评论) |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | **Anthropic tool calls: corrupted non-ASCII edit arguments silently accepted** | 文件中的韩文字符导致编辑内容损坏 — 引发重试和数据丢失 | 👍 0 (5 条评论) |
| [#10144](https://github.com/earendil-works/pi/issues/10144) | **Queued prompts are sent one by one instead of batching** | 用户期望提示词批处理；目前是串行执行 | 👍 0 (4 条评论) |
| [#10184](https://github.com/earendil-works/pi/issues/10184) | **Sign in with ChatGPT: OpenAI consent page rejects Pi with invalid_client** | 阻塞 ChatGPT 用户的 OAuth 登录流程 | 👍 6 (3 条评论) |
| [#10154](https://github.com/earendil-works/pi/issues/10154) | **Chinese bold renders literally when closing ** sits between CJK punctuation** | 中文 Markdown 渲染 bug — 长期存在的回归问题 (#3353) | 👍 0 (4 条评论) |
| [#10143](https://github.com/earendil-works/pi/issues/10143) | **TUI: syntax highlight lost for highlight tokens spanning multiple lines** | 多行代码块失去语法高亮 — 降低可读性 | 👍 0 (2 条评论) |
| [#10157](https://github.com/earendil-works/pi/issues/10157) | **Gemini tool-call thought signatures dropped with AI Studio endpoint** | 缺失 thought 签名导致 Google AI Studio 上的 Gemini Flash Lite 失效 | 👍 0 (2 条评论) |
| [#10202](https://github.com/earendil-works/pi/issues/10202) | **`pi remove` runs pnpm without proper flags, flipping autoInstallPeers** | 包移除时 pnpm 标志不正确，有锁文件损坏风险 | 👍 0 (1 条评论) |

---

## 重要 PR 进展

| # | PR | 变更内容 |
|---|----|----------|
| [#10200](https://github.com/earendil-works/pi/pull/10200) | **test(ai): cover reasoning summary separation** | 新增推理摘要事件与最终输出分离的回归测试 |
| [#10199](https://github.com/earendil-works/pi/pull/10199) | **docs(coding-agent): improve MCP server guide** | 快速入门引导，整合配置/故障排除表格 |
| [#10197](https://github.com/earendil-works/pi/pull/10197) | **feat: unify package artifact validation** | 单一清单驱动的工件集，确保本地/发布验证一致 |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | **feat(ai): add copy code login method to Anthropic OAuth** | 远程 pi 使用的代码登录方式（对比 localhost 重定向）|
| [#10190](https://github.com/earendil-works/pi/pull/10190) | **fix(coding-agent): mark native providers with stored credentials as configured** | 修复初始模型选择时提供商被误判为未配置的竞态条件 |
| [#10176](https://github.com/earendil-works/pi/pull/10176) | **feat(ai,coding-agent): add alternative sign in for openai provider** | OpenAI 提供商的新 OAuth 流程 |
| [#10174](https://github.com/earendil-works/pi/pull/10174) | **fix(extensions): show warning when replaceable builtin replaced** | 当用户扩展覆盖内置 `/mcp` 时发出警告 |
| [#10165](https://github.com/earendil-works/pi/pull/10165) | **fix(coding-agent): track discarded user bash output** | 修复用户 `!` 命令丢弃输出时的截断检测 |
| [#10122](https://github.com/earendil-works/pi/pull/10122) | **feat(coding-agent): add managed llama.cpp server mode** | pi 在首次使用模型时自动启动 llama-server，最后一个 pi 断开时自动关闭 |
| [#9329](https://github.com/earendil-works/pi/pull/9329) | **fix(tui): detect Orca terminals as Kitty-image capable** | 支持 Orca 终端模拟器显示内联图片 |

---

## 热门讨论

| # | 讨论 | 类别 |
|---|------|------|
| [#10151](https://github.com/earendil-works/pi/discussions/10151) | **想法：将工作记忆作为提示词段落（任务 + 过去会话），会话日志闭环** | 创意 |

---

## 功能请求趋势

基于 issue 和讨论分析，以下主题占据主导：

1. **增强的模型提供商灵活性** — 多个 issue 围绕提供商选择回退、认证流程改进以及提供商特定问题处理（Bedrock 图片、Gemini thought 签名、Anthropic 策略拦截）
2. **MCP 生态扩展** — 对 MCP 服务器集成、认证链接改进以及托管本地服务器模式的强烈兴趣
3. **Windows 平等** — 围绕统一 Windows 开发者体验的活跃讨论，涉及不同安装路径
4. **交互式 TUI 改进** — 游标隐藏、多行语法高亮修复以及鼠标滚轮滚动自定义的需求
5. **性能优化** — 随会话长度增长的提示词提交延迟以及交互模式空闲 CPU 使用率的担忧

---

## 开发者痛点

- **Windows 兼容性碎片化** — 官方支持的安装方式尚不明确
- **自动压缩可靠性** — 因 thinking 文本包含而在推理模型上失败；被提供商策略阻塞
- **认证流程摩擦** — 远程环境中 OAuth 重定向失败；缺少捆绑模块 (#10182)
- **会话内存管理** — 内存中与 JSONL 追加失败后的副本不一致
- **包解析缺口** — 扩展无法使用 `package.json` exports 字段解析 npm 包
- **模型目录性能** — 每次提示词提交重新合并模型目录导致延迟随规模增长

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English Qwen Code Community Digest into Chinese. I need to:

1. Translate all headings, body text, and table content
2. Keep all technical terms, issue numbers, URLs, code references, version numbers in their original form
3. Preserve the Markdown structure exactly - headings, tables, lists, bold, etc.
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through and translate section by section:

## 1. Today's Highlights
- This is straightforward, translate to Chinese

## 2. Releases
- Keep the table structure, translate summary content

## 3. Hot Issues
- Table translation with technical Chinese

## 4. Key PR Progress
- Table translation

## 5. Hot Discussions
- Brief note that there's no discussion data - translate naturally

## 6. Feature Request Trends
- Table translation

## 7. Developer Pain Points
- List items need translation

Footer - translate to Chinese

Let me do this translation now:</think>

# Qwen Code 社区简报 — 2026年9月30日

## 1. 今日要闻

Qwen Code 团队发布了 **v0.24.7** 版本，修复了 Code Mode 文本对齐问题以及权限处理逻辑，同时 TypeScript SDK 迎来 v0.1.17 小更新。一个重要的架构提案（#12380）正在引发热烈讨论，已有 37 条评论，提出了双路径 Managed Agent 架构与分阶段交付方案。社区还密切关注令牌治理问题（#12028），因为长上下文模型暴露了系统提示词和工具模式中隐藏的成本低效问题。

---

## 2. 版本发布

| 版本 | 更新内容 |
|------|----------|
| **v0.24.7** | 核心 CLI 版本，修复：Code Mode 文本与懒加载工具发现对齐 (#12990)，遵循已批准的权限。 |
| **v0.24.7-nightly.20260929.b906f937ec** | 同 Commit 的每日构建版本。 |
| **sdk-typescript-v0.1.17** | TypeScript SDK，捆绑 CLI v0.24.7。 |
| **desktop-v0.24.7** | 桌面客户端，修复会话创建失败时的诊断信息显示及 Java 托管运行时支持。 |

---

## 3. 热门 Issue

| # | Issue | 优先级 | 重要性 | 评论数 |
|---|-------|--------|--------|--------|
| **#12380** | [proposal(serve): 定义 Managed Agent 双路径架构与分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380) | P2 | 提出分阶段架构方案：保留现有 TypeScript Agent 循环，将模型推理与工具环境配置独立运行，并建立持久的 Session 所有权和 Workspace 绑定。 | **37** |
| **#12028** | [tracking(core): 非会话上下文令牌治理](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | 暴露了一个问题：系统提示词、工具模式、上下文文件、技能列表在每次请求中都会被发送——在长上下文模型中这些内容很容易超过实际对话的令牌数，且用户无法察觉。 | **15** |
| **#13016** | [SDK abort 或 close 后重启的 CLI worker 仍在运行](https://github.com/QwenLM/qwen-code/issues/13016) | P1 | **Bug**: SDK 发送的 SIGTERM/SIGKILL 无法到达子监督进程，导致 CLI worker 孤儿进程残留。 | **5** |
| **#13030** | [feat(managed-agent): 在新版 Hosted Workspace 配置中引入只读搜索工具](https://github.com/QwenLM/qwen-code/issues/13030) | P2 | 提议向 Hosted Workspace 工具集中添加 `list_directory`、`glob` 和 `grep_search`——这对于只读工作区访问至关重要。 | **7** |
| **#12889** | [Deferred `tool_call` 模式对有必填字段的工具允许空参数](https://github.com/QwenLM/qwen-code/issues/12888) | P2 | ToolSearch 使用错误的查询调用 `tool_search`，而非用户的实际请求，导致返回不相关结果。 | **5** |
| **#13059** | [fix(runtime-broker): provider start 被拒绝时返回 `200 prepared`，客户端无限等待](https://github.com/QwenLM/qwen-code/issues/13059) | P2 | Runtime Broker 对被拒绝的分发返回 200 状态码并附带 "prepared" 消息，导致 provider 客户端无限期挂起。 | **4** |
| **#13042** | [fix(serve): 限制每个 Session 的索引随发布的 provider Session 持续增长](https://github.com/QwenLM/qwen-code/issues/13042) | P2 | 内存泄漏：`closedSessions` 等索引在 Session 释放后仍未清理，持续增长。 | **4** |
| **#13068** | [Ctrl + a 在 shell 模式下发送原始 C0 字节而非转义序列](https://github.com/QwenLM/qwen-code/issues/13068) | P2 | 修饰键配合方向键/功能键向 PTY 发送错误的字节，导致 shell 行为异常。 | **4** |
| **#13004** | [perf(memory): 在无操作提取后添加有界冷却时间](https://github.com/QwenLM/qwen-code/issues/13004) | P3 | 提议在无操作提取成功后限制自动内存提取的频率，以降低开销。 | **5** |
| **#12999** | [core: 延迟 tool_call 桥接层强制执行声明模式，但 8 个工具族从未强制执行](https://github.com/QwenLM/qwen-code/issues/12999) | P2 | 桥接层预先验证参数与模式匹配，但 8 个工具族已在内部验证——导致双重验证失败。 | **4** |

---

## 4. 关键 PR 进展

| PR | 标题 | 状态 | 意义 |
|----|------|------|------|
| **#12901** | [fix(core): 根据目标模式预验证桥接的 tool_call 参数](https://github.com/QwenLM/qwen-code/pull/12901) | Open | 通过将工具名称附加到验证失败信息而非无标签错误，提升错误消息质量。 |
| **#13071** | [feat(managed-agent): 请求 Hosted 工具批准 (D6a)](https://github.com/QwenLM/qwen-code/pull/13071) | Open | 实现 Hosted Harness 中非预批准工具的批准提示——这是 managed-agent 路线图的 D6a 阶段。 |
| **#13023** | [fix(core): 为使用统计 RUM 上传遵守 NO_PROXY 配置](https://github.com/QwenLM/qwen-code/pull/13023) | Closed | 修复 RUM 上传忽略 `NO_PROXY` 环境变量的问题（会话自身的出站流量已遵守此配置）。 |
| **#13029** | [fix(core): 将已投递的通知轮次排除在 ACP 回滚序号之外](https://github.com/QwenLM/qwen-code/pull/13029) | Open | 修复 ACP 回滚错误计算后台通知轮次的问题——这些轮次不会产生客户端可见的轮次。 |
| **#12998** | [fix(managed-agent): 确定任务事件与取消语义](https://github.com/QwenLM/qwen-code/pull/12998) | Open | 在任务事件路由可用前解决 #12847 的 A1–A8 问题；定义持久保留下限和稳定的游标标识。 |
| **#13064** | [fix(runtime-broker): 将被拒绝的 provider start 回答为 unknown 而非 prepared](https://github.com/QwenLM/qwen-code/pull/13064) | Open | 将被拒绝的 provider 执行改为返回 409 而非 200 并附带误导性的 "prepared" 状态。 |
| **#12891** | [feat(memory): 将 Mem0 捆绑进主 CLI](https://github.com/QwenLM/qwen-code/pull/12891) | Open | 通过 `memory.mem0` 配置添加可选的 Mem0 连接，支持 endpoint 和 envKey。 |
| **#12946** | [feat(managed-agent): 实现私有 Hosted MCP 运行时 (H1)](https://github.com/QwenLM/qwen-code/pull/12946) | Open | 实现私有的 `hosted-workspace-mcp/1` 配置，包含 Runtime 拥有的 stdio、Streamable HTTP 和 SSE 连接。 |
| **#12982** | [fix(core): 停止将格式错误的 tool-call 参数误诊为 max_tokens 截断](https://github.com/QwenLM/qwen-code/pull/12982) | Open | 防止流式解析器在 JSON 格式错误时（而非截断时）将 `finish_reason` 重写为 `length`。 |
| **#12851** | [feat(agents): 为工作区代理添加 A2A 访问与共享](https://github.com/QwenLM/qwen-code/pull/12851) | Open | 为持久化工作区代理添加可选的 A2A 1.0 JSON-RPC 访问，支持 Web Shell 共享流程。 |

---

## 5. 热门讨论

*源数据中未提供讨论信息。*

---

## 6. 功能需求趋势

| 主题 | 相关 Issue | 信号 |
|------|-----------|------|
| **Managed Agent 架构** | #12380, #12867, #13030, #13071 | 社区对双路径架构、分阶段交付和 Hosted Workspace 工具配置表现出强烈兴趣。 |
| **令牌/上下文治理** | #12028, #12326, #12333 | 长上下文成本可见性日益受到关注；需要测量工具和动态工具表面选择。 |
| **内存优化** | #13004, #13003, #13063 | 自动内存提取的性能调优以及自主工具运行期间的召回优化。 |
| **A2A 与多代理** | #12851, #12380 | 工作区代理共享和多代理编排正在获得关注。 |
| **MCP 运行时** | #12946, #13039 | 私有 Hosted MCP 运行时及通过托管运行时 worker 进行媒体传输。 |

---

## 7. 开发者痛点

1. **SDK 进程泄漏 (#13016)**: SDK 中止/关闭后残留孤儿 CLI worker 进程，需要手动清理。
2. **Runtime Broker 挂起 (#13059, #13060)**: Provider 启动被拒绝时返回误导性状态，导致客户端无限等待。
3. **会话管理内存泄漏 (#13042)**: 每个 Session 的索引在 Session 释放后仍未清理，持续增长。
4. **工具模式双重验证 (#12999)**: 延迟 tool_call 桥接层对已在内部验证的工具强制执行模式验证。
5. **非会话令牌膨胀 (#12028)**: 系统提示词和工具模式在每次请求中发送，在长上下文模型中无形增加成本。
6. **测试不稳定**: 多个 SDK Java 测试 (#13017, #13031) 出现恢复扫描器的竞态条件。
7. **Shell 按键处理 (#13068)**: 修饰键配合特殊键发送错误字节，破坏预期的 shell 行为。

---

*数据来源：github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*