# AI CLI 工具社区动态日报 2026-09-21

> 生成时间: 2026-09-21 00:27 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this report from English to Chinese. I need to:
1. Translate the content
2. Keep all Markdown structure, tables, links, code references
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Keep all project names, repo slugs, issue numbers, etc. as-is
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate this carefully, maintaining the professional technical Chinese register.</think>

# AI CLI 工具生态 —— 跨工具对比报告

**日期：** 2026 年 9 月 21 日

---

## 1. 生态概览

AI CLI 工具领域正在围绕多提供商支持、可扩展的智能体架构以及更紧密的开发者工作流集成进行整合。当日活动显示，所有主流工具都在积极发布版本，大多数开发工作都聚焦于可靠性（认证、会话管理、沙盒化），而非炫酷的新功能。这个领域正在走向成熟：问题集中在运营层面——配额管理、平台一致性和安全加固——而非核心能力差距。值得注意的是，向托管智能体、跨会话工作流和 MCP 集成的转变在多个工具中都很明显。

---

## 2. 活动对比

| 工具 | Issues（24h） | PRs（24h） | Discussions | Releases（24h） |
|------|---------------|-----------|-------------|----------------|
| **Claude Code** | 50 | 5 | 0 | 0 |
| **OpenAI Codex** | 33 | 20+ | 5 | 3（Rust α）|
| **Gemini CLI** | 33 | 20 | 0 | 1（nightly）|
| **GitHub Copilot CLI** | ~15 | 0 | 0 | 0 |
| **OpenCode** | ~25 | 10 | 0 | 0 |
| **Pi** | 48 | 7 | 0 | 1 |
| **Qwen Code** | ~20 | 10 | 0 | 2 |

*注：如上游仓库禁用 Issues/PRs，则标记为"N/A"。上述所有工具均启用了活跃的 issue 跟踪。*

---

## 3. 功能方向共性

| 方向 | 涉及工具 | 具体需求 |
|-----------|----------------|----------------|
| **MCP 集成** | Codex、Gemini CLI、Qwen Code | MCP 服务器错误处理（Codex #4870）、子智能体的 MCP 征询（Gemini #29371）、每个服务器的可配置资源限制（Qwen #12258）|
| **配额/Token 管理** | Codex、Claude Code、Qwen Code、OpenCode | 用量警告可见性（Codex）、会话状态分类（Claude）、非对话上下文治理（Qwen）、limit.output 封顶（OpenCode）|
| **认证与 OAuth** | Claude Code、Copilot CLI、Gemini CLI、Pi | 无头设备的设备码流程（Claude）、OAuth 持久化（Gemini、Pi）、提供商徽章（Pi）|
| **Windows 平台** | Claude Code、Copilot CLI、OpenCode、Pi | 浏览器扩展阻塞（Claude）、发送按钮禁用（Codex）、CJK 输入法延迟（Pi）、剪贴板问题 |
| **会话/状态可靠性** | Claude Code、Gemini CLI、Qwen Code、OpenCode | 会话损坏处理、检查点恢复缺陷、可恢复会话、跨会话状态 |
| **沙盒与安全** | Claude Code、Gemini CLI、Qwen Code | bwrap 执行边界（Claude）、Landlock 回退（Qwen）、信号转发 |
| **TUI 改进** | Gemini CLI、OpenCode、Pi | 流式性能、懒加载命令、移动端导航 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------------|--------------|----------------|
| **Claude Code** | 企业级可靠性、安全、Anthropic 深度集成 | Pro/Max 订阅者、企业团队 | 内置插件、严格会话控制、全面的遥测 |
| **OpenAI Codex** | VS Code/IDE 深度集成，Windows 桌面体验 | Visual Studio Code 用户 | VS Code 扩展优先、桌面应用、模型容量不足处理 |
| **Gemini CLI** | 可扩展性、托管智能体、插件生态 | 高级用户、需要定制的开发者 | 插件钩子、托管智能体架构、扩展性优先 |
| **Copilot CLI** | GitHub 生态集成，轻量级 CLI | GitHub 用户、Git 工作流 | gh CLI 扩展、工作区感知、Git 原生 |
| **OpenCode** | Zen 模型，SaaS 优先 | Zen 订阅用户 | Web 优先架构、轻量级客户端 |
| **Pi** | 多提供商支持、Ollama/本地运行 | 本地模型爱好者 | 多后端兼容、轻量级、关注隐私 |
| **Qwen Code** | 多会话编排、大规模上下文 | 大上下文需求用户、高级开发者 | 百万级 token 支持、跨会话管理、远程工作区 |

---

## 5. 社区活力与成熟度

### 高活跃度 / 快速迭代
- **Gemini CLI** — 20 个 PR、nightly 发布、活跃功能开发（托管智能体、Live Voice、MCP 加固）
- **OpenAI Codex** — 20+ 个 PR、多个 α 版本、讨论参与度高
- **Claude Code** — 最高 issue 量（50），说明 bug 发现活跃；PR 较少表明合并节奏较慢或发布流程更保守

### 中等活跃度
- **Qwen Code** — 稳定的 PR 流（10 个）、v0.24.2 发布、上下文治理聚焦表明路线图成熟
- **Pi** — 7 个 PR、v0.86.1 发布、活跃的 Windows/输入法调试
- **OpenCode** — 10 个 PR、功能丰富但社区规模较小

### 较低可见度
- **GitHub Copilot CLI** — 24 小时活动极少；可能表明发布节奏稳定或开发关注点减少

### 成熟度信号
- **Claude Code**、**OpenAI Codex**、**Gemini CLI** — 完善的 issue 分类、成熟的标签体系、结构化的 PR 审核
- **Pi**、**Qwen Code** — 活跃开发但贡献者基数较小
- **Copilot CLI** — issue 量低表明稳定性好或社区参与度下降

---

## 6. 趋势信号

### 运营问题占主导
Token/配额管理、会话可靠性和平台一致性现在驱动着所有工具的大部分问题。生态正在从能力建设转向运营加固。

### MCP 成为一等公民
MCP 服务器支持已从新特性变为预期。工具现在在 MCP 错误处理、资源限制和子智能体集成方面展开竞争，而不是讨论 MCP 是否能工作。

### 多提供商多元化
每个工具现在都支持多个 AI 提供商。差异化正在转向认证流程（OAuth、设备码）、提供商特定优化和跨提供商配额管理。

### 安全与沙盒走向成熟
从 bwrap 到 Landlock，工具正在投资执行边界。内联凭证处理和多智能体工作流中的敏感信息脱敏正在成为关键安全问题。

### 大上下文成为一等公民
Qwen Code 的上下文治理工作（非对话 token 使用追踪）标志着随着模型支持 100 万 + token，一个新类别的问题正在出现。预算缩放、截断策略和上下文优化正在成为产品差异化的关键。

### 跨平台仍很痛苦
4 个以上的工具存在 Windows 特定问题（剪贴板、输入法、桌面应用可靠性）。macOS/Linux 开发与 Windows 生产使用之间的"在我机器上能工作"差距仍然是一个持续的痛点。

---

*报告基于 7 个工具社区摘要生成，2026 年 9 月 21 日*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English report about Claude Code Skills Community Highlights into Simplified Chinese. I need to:

1. Translate all the text while keeping the structure exactly as-is
2. Keep all markdown elements (headings, tables, lists, bold, etc.)
3. Keep URLs, issue/PR numbers, usernames, file paths, code identifiers as-is
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate this carefully while preserving all formatting:

The title: "Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区亮点报告"

"Data as of 2026-09-21" → "数据截至 2026-09-21"

"Source: anthropics/skills repository" → "数据来源：anthropics/skills 仓库"

"1. Top Skills Ranking" → "一、热门 Skills 排行"

"The PRs below represent the most notable Skill contributions by activity level and community interest. Note: Comment counts are undefined in the dataset; rankings reflect recency, functional scope, and discussion potential." → "以下 Pull Request 是根据活跃度和社区关注度筛选出的最具代表性的 Skill 贡献。需要说明的是：数据集中评论数为 undefined，排名综合考虑了时效性、功能范围和讨论热度。"

I'll continue translating the table and content accordingly, maintaining all the markdown structure, URLs, issue numbers, and technical terminology in their original form.

For Chinese, I'll use "代码评审" or "合并请求" for PR, and keep the English issue numbers. I'll translate descriptions naturally while keeping technical terms in English or as-is.</think>

# Claude Code Skills 社区亮点报告

**数据截至 2026-09-21** | 数据来源：anthropics/skills 仓库

---

## 一、热门 Skills 排行

以下 Pull Request 是根据活跃度和社区关注度筛选出的最具代表性的 Skill 贡献。需要说明的是：数据集中评论数为 undefined，排名综合考虑了时效性、功能范围和讨论热度。

| # | PR | 作者 | 功能描述 | 状态 |
|---|-----|--------|---------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | 基于零存储 Merkle 协议为 Solidity/Rust 智能合约提供自动化静态分析，审计证明锚定 TON 区块链 | OPEN |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | 70v-Yoyo | 零成本 Markdown 转 MP4 专业视频，集成 Marp 实现逼真人声旁白 | OPEN |
| 3 | **[mcp-builder](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 修复 MCP ≥2.0.0 兼容性：`streamable_http_client` 重命名 + 自定义 HTTP 头配置 | OPEN |
| 4 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** | ksgisang | 零代码端到端测试 skill，赋予 Claude 视觉和浏览器控制能力，自动生成测试用例 | OPEN |
| 5 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | kitao | Python 复古游戏开发，支持确定性无头运行、帧调试和状态验证 | OPEN |
| 6 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** | lql341 | 基于配置文件的 SSH/Slurm 工作流，用于 SCNet HPC 集群操作 | OPEN |
| 7 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** | kishormorol | 批量/破坏性操作（归档、撤销权限、批处理）前的安全检查清单 | OPEN |

**关键修复 PR（基础设施）：**
- **[#1790](https://github.com/anthropics/skills/pull/1790)** — 修复 DOCX comment.py 缺少 `document.xml.rels` 创建逻辑
- **[#1769](https://github.com/anthropics/skills/pull/1769)** — 修复 skill-creator 触发检测 0% 召回率问题
- **[#1765](https://github.com/anthropics/skills/pull/1765)** — 修复 Office 文档差异对比的 UTF-8 解码问题

---

## 二、社区需求趋势

Issues 区呈现出清晰的需求方向：

| 趋势 | Issue | 关注度 |
|-------|-------|----------------|
| **安全与信任** | [#492](https://github.com/anthropics/skills/issues/492) — 社区技能滥用 `anthropic/` 命名空间导致信任边界被突破 | **43 条评论**（最高） |
| **企业协作** | [#228](https://github.com/anthropics/skills/issues/228) — 支持在 Claude.ai 中实现组织级技能共享 | 16 条评论 |
| **评估与可靠性** | [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 触发率为 0% 的 bug | 12 条评论 |
| **数据安全** | [#62](https://github.com/anthropics/skills/issues/62) — 所有技能消失并报错 | 10 条评论 |
| **元技能** | [#1329](https://github.com/anthropics/skills/issues/1329) — `compact-memory` 技能提案：符号化 Agent 状态表示 | 9 条评论 |
| **治理** | [#412](https://github.com/anthropics/skills/issues/412) — `agent-governance` 技能提案：AI Agent 系统安全模式 | 6 条评论 |

**解读：** 社区最核心的关注点是 **企业级信任、可靠性和互操作性**。生态系统正从「酷炫的技能创意」向生产级工作流演进，其中安全（命名空间冒用）、评估（触发检测）和跨组织共享已成为关键瓶颈。#492 安全议题在讨论中占据主导，标志着社区已进入成熟期——用户已将 Skills 视为关键基础设施。

---

## 三、即将合并的高潜力待发布 Skills

以下 Open 状态的 PR 开发势头强劲，可能即将合并：

1. **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)**（2026-09-15）— Web3 智能合约审计 + TON 区块链存证
2. **[md2video-audio](https://github.com/anthropics/skills/pull/1703)**（2026-09-01）— Markdown 转 MP4 视频生成
3. **[blast-radius](https://github.com/anthropics/skills/pull/1776)**（2026-09-17）— 破坏性操作前安全检查清单
4. **[mcp-builder 修复](https://github.com/anthropics/skills/pull/1742)**（2026-09-08）— MCP ≥2.0 兼容性支持

以上 PR 均为 OPEN 状态，2026 年 9 月持续更新中。

---

## 四、Skills 生态洞察

> **社区最集中的需求在于企业级信任、可靠性和互操作性**——生态系统正从「有趣的技能创意」向生产级工作流演进，安全（命名空间仿冒）、评估（触发检测）和跨组织技能共享已成为关键瓶颈。

---

<think>The user wants me to translate the English Claude Code Community Digest into Chinese (Simplified Chinese - 简体中文). Let me translate it following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

## 1. Today's Highlights

过去 24 小时内，diff 模块有三次 PR 合并/提交，匿名认证改进的讨论也很活跃。Windows（Chrome 扩展屏蔽、桌面窗口状态）和 macOS（Auto 模式回归、登录 token 问题）都出现了平台特定的问题。最活跃的议题仍然是 RFC 8628 设备代码认证提案，有 19 条评论和 36 个 👍。

## 2. Releases

过去 24 小时内无新版本发布。

## 3. Hot Issues

Need to translate titles and descriptions. Keep the table format, keep # numbers and URLs as-is.

| Issue | Title | Impact | 👍 |
|-------|-------|--------|-----|
| [#22992](https://github.com/anthropics/claude-code/issues/22992) | **[enhancement]** Support device-code authentication flow (RFC 8628) for Pro/Max subscription users in headless environments | **High** — Enables CLI-only authentication for Pro/Max users without browser, critical for CI/CD and server workflows | 36 |


| [#67766](https://github.com/anthropics/claude-code/issues/67766) | **[bug]** `API Error: The socket connection was closed unexpectedly` — server-initiated FIN mid-stream | **High** — Intermittent socket closures affecting 8–18 times/day under heavy interactive use; includes packet captures and requestIds | 5 |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | **[bug]** Chrome extension: All tools blocked on reddit.com with "not allowed due to safety restrictions" | **Medium** — Regression since 2026-09-18; previously worked on 2026-09-17 | 5 |

This issue describes a Chrome extension problem where all tools are being blocked on reddit.com due to safety restrictions. This is marked as a Medium priority regression that started on September 18th, 2026, though it worked normally the previous day.

The next issue involves the desktop application making unrequested background git fetch operations to origin when refreshing diffs or commits, which happens without user consent and there's no setting available to disable this behavior.

The Auto mode regression since version 2.1.270 is causing the classifier to block the solo owner's routine work with 12 times more denials than before. This is particularly impacting one-person studios where manual fallback requires over 55 permission clicks just to make config changes.

There's also a documentation gap around the "Classify session states" feature—it's undocumented despite having 22 👍 from users who want to understand its privacy and cost implications.

The sandboxed Bash issue stems from a bwrap bug that tries to bind-mount `.git` as a file when it's actually a directory in standard git repositories, causing the sandbox to fail.

The login flow has a high-priority bug where `/login` reports success but the token never actually gets saved due to an ENOTDIR error when trying to remove a stale `.storage-write.lock` file. Additionally, the iOS Simulator tool's touch and tap injection silently fails after upgrading to Xcode 27, which replaced the old Simulator.app with a headless DeviceHub.

The agent has a critical issue where it asserts unverified causes as fact, acts on them, and persists these false assumptions to memory during extended sessions. Looking at the PR side, there's an open fix for plugin hooks that properly quotes script paths when running ralph-wiggum and output-style .sh hooks through bash, and another fix to optimize the diff panel so it skips refetching after read-only shell commands like `ls`, `git status`, `cat`, and grep.

Three PRs are in progress: one prevents empty diff panes by checking for tracked changes before opening, another implements batched telemetry for built-in plugins with origin tracking, and a third aligns the diff module behavior with the built-in panel for resumed sessions. The most requested features center on authentication improvements like RFC 8628 device-code OAuth for headless CLI environments, better documentation around session state classification, permission system refinements to reduce click fatigue in Auto mode, and more granular control over tool access.

Platform-specific needs include a read-only transcript viewer for session logs and VS Code extension prompt suggestions. Users also want more transparency around privacy guardrail warnings and clearer cost implications for session classification.

The main pain points involve socket reliability during heavy interactive use with no clear workaround, permission friction from Auto mode regression creating excessive manual approvals, and platform-specific issues around Chrome extension behavior on Windows and git operations.

Additional concerns include authentication edge cases where login reports success but fails silently, plus agents treating hypotheses as facts and persisting incorrect data to memory—a significant correctness problem.</think>

# Claude Code 社区简报 — 2026-09-21

## 1. 今日要闻

过去 24 小时内，diff 模块有三次 PR 合并/提交，匿名认证改进的讨论也很活跃。Windows（Chrome 扩展屏蔽、桌面窗口状态）和 macOS（Auto 模式回归、登录 token 问题）都出现了平台特定的问题。最活跃的议题仍然是 RFC 8628 设备代码认证提案，有 19 条评论和 36 个 👍。

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 热门议题

| 议题 | 标题 | 影响 | 👍 |
|-----|------|------|---|
| [#22992](https://github.com/anthropics/claude-code/issues/22992) | **[功能增强]** 为 Pro/Max 订阅用户在无头环境中支持设备代码认证流程 (RFC 8628) | **高** — 为 Pro/Max 用户启用纯 CLI 认证，无需浏览器，对 CI/CD 和服务器工作流至关重要 | 36 |
| [#67766](https://github.com/anthropics/claude-code/issues/67766) | **[缺陷]** `API Error: The socket connection was closed unexpectedly` — 服务器主动发送 FIN 导致连接中断 | **高** — 密集交互使用下间歇性出现 socket 关闭，每日 8–18 次；包含数据包捕获和 requestId | 5 |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | **[缺陷]** Chrome 扩展：reddit.com 上所有工具被屏蔽，显示"not allowed due to safety restrictions" | **中** — 2026-09-18 后的回归问题；2026-09-17 正常工作 | 5 |
| [#84698](https://github.com/anthropics/claude-code/issues/84698) | **[缺陷]** 桌面端：diff/提交刷新时未经请求在后台执行 `git fetch` 到 origin | **中** — 未经用户同意在后台执行 git fetch；无设置可禁用 | 3 |
| [#95200](https://github.com/anthropics/claude-code/issues/95200) | **[缺陷]** 自 2.1.270 以来 Auto 模式回归：分类器阻止单人所有者的常规工作（拒绝次数增加 12 倍） | **高** — 单人工作室报告拒绝次数增加 12 倍；手动回退需要 55+ 次权限点击才能修改配置 | 0 |
| [#60955](https://github.com/anthropics/claude-code/issues/60955) | **[文档]** 未记录的"Classify session states"及其对隐私和成本的影响 | **中** — 功能缺乏文档；22 个 👍 表明用户对理解隐私影响有浓厚兴趣 | 22 |
| [#72748](https://github.com/anthropics/claude-code/issues/72748) | **[缺陷]** 沙盒 Bash 因"bwrap: Can't create file at .git: Is a directory"在标准 git 仓库中失败 | **中** — 沙盒在标准 git 检出时失败，因为 bind-mount 将 `.git` 视为文件而非目录 | 0 |
| [#95425](https://github.com/anthropics/claude-code/issues/95425) | **[缺陷]** /login 报告"Login successful"但 token 未保存：ENOTDIR rmdir 在陈旧的 .storage-write.lock 文件上 | **高** — 登录显示成功但用户实际未认证；表明存在文件系统竞态条件 | 0 |
| [#95466](https://github.com/anthropics/claude-code/issues/95466) | **[缺陷]** iOS 模拟器工具：Xcode 27 升级后（Simulator.app 被替换为无头的 DeviceHub）触摸/点击注入静默失效 | **中** — Xcode 27 替换了 Simulator.app；iOS 自动化工具现在静默失败 | 0 |
| [#95436](https://github.com/anthropics/claude-code/issues/95436) | **[缺陷]** Agent 将未验证的原因断言为事实，基于其行动，并将其持久化到内存 | **高** — 长时间会话导致 Agent 将假设视为已验证的事实并将错误数据写入持久内存 | 0 |

---

## 4. 关键 PR 进展

| PR | 标题 | 状态 | 描述 |
|----|------|------|------|
| [#95698](https://github.com/anthropics/claude-code/pull/95698) | fix(plugins): run ralph-wiggum and output-style .sh hooks through bash with a quoted path | **开放** | 通过在 bash 调用中正确引用脚本路径来修复插件钩子执行 |
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | diff: a shell command the tool held read-only fetches nothing | **开放** | 优化 diff 面板，在只读 shell 命令后跳过重新获取 |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | diff: the first edit opens the pane only when it has a file to list | **开放** | 通过在打开前检查是否有跟踪的更改来防止首次编辑时 diff 面板为空 |
| [#95618](https://github.com/anthropics/claude-code/pull/95618) | telemetry: complete rows gathered through $, sent in batches, serving built-in plugins only | **已关闭** | 为内置插件实现带来源跟踪的批量遥测 |
| [#95587](https://github.com/anthropics/claude-code/pull/95587) | diff: a resumed session with edits opens the pane, /clear leaves it up, and the session line follows the engine's start | **已关闭** | 将会话恢复时的 diff 模块行为与内置面板对齐 |

---

## 5. 功能请求趋势

基于议题分析，最常请求的功能方向是：

1. **认证改进** — 适用于无头 CLI 环境的设备代码 OAuth 流程 (RFC 8628)；已记录会话状态分类设置
2. **权限系统优化** — 减少 Auto 模式下的权限点击疲劳；更精细的工具权限控制
3. **平台特定增强** — 会话日志的只读转录查看器；带 ghost-text 的 VS Code 扩展提示建议
4. **透明度功能** — 诊断命令的隐私 guardrail 警告；更清晰地说明会话分类的成本/隐私影响

---

## 6. 开发者痛点

- **Socket 可靠性**：密集交互使用期间间歇性出现 API 连接断开，没有明确的解决方案
- **权限摩擦**：Auto 模式回归严重影响了单人工作流，需要过多的手动审批
- **平台回归**：近期出现的 Chrome 扩展屏蔽（Windows）、git fetch 行为和 iOS 模拟器工具问题表明测试存在缺口
- **认证边缘情况**：登录报告成功但实际失败会产生令人困惑的调试体验
- **内存完整性**：Agent 将假设视为事实并将错误数据持久化到内存是一个影响重大的正确性缺陷

---

*数据来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, preserving the exact Markdown structure while using natural technical Chinese language. Let me go through and translate carefully, keeping all the formatting elements intact.

Key things to preserve:
- Headings (#, ##, ###)
- Tables with formatting
- Lists (bullet points, numbered)
- Bold/italic text
- Horizontal rules (---)
- URLs
- Issue/PR numbers (#XXXXX)
- Version tags (v0.156.0-alpha.12)
- Code elements
- Emoji (if any)

Let me translate:</think>

# OpenAI Codex 社区摘要
**日期：** 2026 年 9 月 21 日

---

## 今日要闻

Codex 团队发布了三个新的 Rust alpha 版本（v0.156.0-alpha.10/11/12），同时社区继续面临配额管理问题——多个高优先级问题报告在短对话轮次中快速消耗配额。Windows 特定问题占据了 issue 追踪器的主导地位，特别是桌面应用的发送按钮、模型容量错误和沙盒配置故障。今天 TUI 增强功能大量落地，共合并了 20 个 PR，专注于改进终端用户的可用性。

---

## 版本发布

| 版本 | 类型 | 备注 |
|---------|------|-------|
| [rust-v0.156.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.12) | Alpha | 最新的 Rust 运行时版本 |
| [rust-v0.156.0-alpha.11](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.11) | Alpha | 上一版 Rust 发布 |
| [rust-v0.156.0-alpha.10](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.10) | Alpha | 更早的 Rust 版本 |

---

## 热门 Issue

### 1. [GPT-6 Astra 在两轮对话内耗尽 Plus 5 小时配额](https://github.com/openai/codex/issues/42987)
**严重程度：** 严重 | **评论：** 25 | ** 👍 **: 15
- 报告称 GPT-6 Astra Medium 在几分钟内消耗了全部 5 小时 Codex 配额
- 影响使用本地仓库工作流的 Windows ChatGPT Plus 用户
- **问题所在：** 这是参与度最高的 bug，可能存在严重的配额泄漏或模型配置错误

### 2. [Codex 应用反复显示"所选模型已满负荷"](https://github.com/openai/codex/issues/45835)
**严重程度：** 高 | **评论：** 17 | ** 👍 **: 3
- Pro Lite 用户持续看到容量错误，尽管连接正常
- 平台：Windows 11
- **问题所在：** 即使配额还有剩余，用户也无法访问服务

### 3. [Windows：首次成功对话后发送按钮被禁用](https://github.com/openai/codex/issues/45307)
**严重程度：** 中 | **评论：** 14 | ** 👍 **: 3
- Windows 11 Codex 桌面工作流在首次对话后无法继续
- **问题所在：** 完全破坏了对话连续性

### 4. [VS Code Remote-SSH：陈旧的 app-server 阻塞新会话](https://github.com/openai/codex/issues/41849)
**严重程度：** 中 | **评论：** 11 | ** 👍 **: 12
- Remote-SSH 断开后旧的 app-server 仍持有 thread writer
- 新会话被"This is open in another app"阻塞
- **问题所在：** 对远程开发工作流至关重要

### 5. [Codex 移动端无法打开进行中的任务对话](https://github.com/openai/codex/issues/28340)
**严重程度：** 中 | **评论：** 11 | ** 👍 **: 14
- iOS 移动应用间歇性无法加载活跃对话
- **问题所在：** 影响移动生产力；社区关注度高

### 6. [Windows：existing-chat 因 loading-local-config 持续阻塞](https://github.com/openai/codex/issues/44342)
**严重程度：** 中 | **评论：** 11 | ** 👍 **: 4
- Windows 上的现有对话无限期挂起
- **问题所在：** 需要重新加载窗口才能继续

### 7. [Windows + WSL：浏览器/Computer Use 在共享桥接中失败](https://github.com/openai/codex/issues/34458)
**严重程度：** 中 | **评论：** 8 | ** 👍 **: 9
- WSL 工作流中 Chrome 控制和 Computer Use 不可用
- **问题所在：** 阻塞 Windows 开发者自动化用例

### 8. [OAuth MCP 服务器认证成功但工具未导入](https://github.com/openai/codex/issues/20009)
**严重程度：** 中 | **评论：** 7 | ** 👍 **: 5
- macOS：MCP OAuth 完成但线程中工具不可用
- **问题所在：** 破坏了可扩展性的关键 MCP 集成

### 9. [CLI 反复唤醒 xhigh 轮询，耗尽配额](https://github.com/openai/codex/issues/45974)
**严重程度：** 高 | **评论：** 6 | ** 👍 **: 0
- Pro-Light 用户：Astra-xhigh 轮询耗尽有限周配额
- **问题所在：** 又是配额管理失效

### 10. [Computer Use 在 macOS 上重复键盘事件](https://github.com/openai/codex/issues/36868)
**严重程度：** 中 | **评论：** 5 | ** 👍 **: 4
- 物理键盘和粘贴事件系统级重复
- **问题所在：** macOS 用户的安全/安全隐患

---

## 主要 PR 进展

| PR | 标题 | 影响 |
|----|-------|--------|
| [#46912](https://github.com/openai/codex/pull/46912) | 在 TUI 中保持配额警告可见 | 用户现在可以在 composer 附近看到持久的配额提醒 |
| [#46910](https://github.com/openai/codex/pull/46910) | 打开设置时保留对话位置 | 在设置选择器中保持阅读位置 |
| [#46905](https://github.com/openai/codex/pull/46905) | 在 `/status` 中标识本地后台服务器 | 将"Remote"重命名为"Server"；区分本地和远程 |
| [#46902](https://github.com/openai/codex/pull/46902) | 尾部可见时隐藏"返回底部" | 当对话滚动到当前内容时更干净的 UI |
| [#46899](https://github.com/openai/codex/pull/46899) | 统一的对话列表间距 | 修复流式传输后的间距不均 |
| [#46897](https://github.com/openai/codex/pull/46897) | 尊重终端颜色级别的活动图表 | 修复 Windows Terminal 真彩色支持 |
| [#46895](https://github.com/openai/codex/pull/46895) | 对话/composer 支持右键复制 | 改进剪贴板工作流 |
| [#46884](https://github.com/openai/codex/pull/46884) | 对对话链接使用普通点击 | 链接现在可以通过未修饰的左键点击打开 |
| [#46883](https://github.com/openai/codex/pull/46883) | 添加 `/tui` 选择 UI 模式 | 持久化 TUI 全屏/对话模式选择 |
| [#46877](https://github.com/openai/codex/pull/46877) | 允许子代理请求 MCP  elicitation | 支持子代理中的浏览器登录、表单输入 |

---

## 热门讨论

### 问答
- **[社区拉取请求的合并时间线](https://github.com/openai/codex/discussions/5111)** — 开发者询问修复等待 4 天后的合并时间线
- **[Windows Store Codex 包版本映射](https://github.com/openai/codex/discussions/37991)** — 请求权威的 Store 包到 CLI 版本映射
- **[OTEL 导出器接收 resourceSpans 而非 resourceLogs](https://github.com/openai/codex/discussions/17687)** — 遥测配置问题

### 想法
- **[功能请求：用于桌面对话排队消息的本地 API](https://github.com/openai/codex/discussions/46797)** — 持久化每联系人线程的 Python 自动化用例

### 展示
- **[按记忆关键词搜索旧 Codex 会话](https://github.com/openai/codex/discussions/46774)** — 用户构建的跨分割历史记录会话搜索方案
- **[Agent Lint：Codex、AGENTS.md、MCP、Claude Code、Cursor 的开源检查器](https://github.com/openai/codex/discussions/46874)** — 配置验证的新社区工具

---

## 功能需求趋势

根据 Issue 和讨论，最常请求的方向是：

1. **配额管理与透明度** — 多个问题要求更好的使用追踪、提前警告和防止意外耗尽
2. **Windows 桌面可靠性** — 发送按钮、沙盒设置和应用服务器会话管理需要加固
3. **MCP 集成改进** — OAuth 流程、工具导入和子代理 MCP 支持
4. **跨平台一致性** — WSL、macOS 和 Linux 与 Windows 功能的 parity
5. **本地 API / 自动化钩子** — 开发者希望对 Codex 线程进行编程访问

---

## 开发者痛点

- **配额泄漏：** 用户报告在几分钟内耗尽 100% 配额，破坏了对使用追踪的信任
- **Windows 摩擦：** 应用挂起、按钮禁用和 MSIX 更新失败造成糟糕的桌面体验
- **模型容量错误：** 尽管连接正常且配额仍有剩余，仍显示"已满负荷"消息
- **Remote-SSH 状态管理：** 陈旧服务器阻塞新会话，需要手动清理
- **移动端不一致：** iOS 无法恢复进行中的对话

---

*数据来源：github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the GitHub community digest from English to Chinese (Simplified). Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code, issue numbers verbatim
4. Keep project names, repository slugs, usernames in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate while maintaining the structure:

- Title: "GitHub 社区速报" or keep "Community Digest"
- Dates should stay in English format or convert to Chinese format (2026年9月21日)
- Technical terms: keep in English where appropriate (CLI, API, PR, etc.)
- Tables need to be preserved exactly
- Use Chinese punctuation throughout

Let me translate:</think>

# Gemini CLI 社区速报 — 2026年9月21日

**数据来源：** `github.com/google-gemini/gemini-cli` | *24小时内快照*

---

## 1. 今日要点

项目持续活跃开发中，已发布 **v0.62.0-nightly.20260920.gcfbcaa8df**。当前重点方向包括：Agent 可靠性修复（卡死、恢复、子 Agent 行为）、安全加固（OAuth 凭证持久化、自动记忆脱敏）以及平台健壮性提升（Windows IDE 检测、CPU 兼容性）。社区正在深入讨论 AST 感知工具链和原生 bash 亲和性作为长期架构方向。

---

## 2. 版本发布

| 版本 | 日期 | 备注 |
|---------|------|-------|
| **v0.62.0-nightly.20260920.gcfbcaa8df** | 2026-09-20 | 最新夜间构建版。完整变更日志：[compare v0.62.0-nightly.20260919...v0.62.0-nightly.20260920](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260919.gcfbcaa8df...v0.62.0-nightly.20260920.gcfbcaa8df) |

---

## 3. 热门 Issue

### Agent 可靠性与正确性

| Issue | 优先级 | 评论数 | 重要性 |
|-------|----------|----------|----------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — MAX_TURNS 后子 Agent 恢复被报告为 GOAL 成功 | P1 | 13 | 子 Agent 达到最大轮次限制后错误地报告 `status: "success"` 且终止原因为 `"GOAL"`，掩盖了实际失败。高优先级的正确性缺陷。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 通用 Agent 卡死 | P1 | 8 👍 | CLI 在向通用 Agent 委托时无限卡死，即使对于创建文件夹等简单操作也是如此。临时方案：显式禁用子 Agent 委托。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — 浏览器子 Agent 在 Wayland 上失败 | P1 | 4 | 浏览器子 Agent 在 Wayland 显示服务器上静默失败，限制了跨平台可用性。 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — get-shit-done 输出钩子导致崩溃 | P1 | 3 | 在 get-shit-done 模式下的最终输出打印时发生崩溃，表明存在生命周期或渲染问题。 |

### 功能与架构讨论

| Issue | 优先级 | 评论数 | 重要性 |
|-------|----------|----------|----------------|
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖操作系统沙箱与执行后意图路由 | P2 | 9 | 提议通过 OS 沙箱和基于意图的路由利用 Gemini 3 的原生 bash 亲和性。大规模增强功能，涉及安全性和用户体验。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知的文件读取、搜索和映射 | P2 | 7 | 调研 AST 感知工具是否能提高精度并减少 token 消耗。可能是代码库分析器的重大重构。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 不够主动使用技能和子 Agent | P2 | 6 | 模型尽管相关但不主动调用自定义技能/子 Agent。限制了扩展性和自动化潜力。 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 无法识别符号链接的 Agent 文件 | P2 | 4 | 用户无法在 `~/.gemini/agents/` 中使用符号链接定义子 Agent，降低了 Agent 组织灵活性。 |

### 记忆与安全

| Issue | 优先级 | 评论数 | 重要性 |
|-------|----------|----------|----------------|
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — 添加确定性脱敏并减少自动记忆日志 | P2 | 5 | 自动记忆在脱敏前向模型发送未脱敏的转录内容，存在潜在信息泄露风险。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — 阻止自动记忆无限重试低信号会话 | P2 | 4 | 自动记忆可能在低信号会话上无限循环，浪费资源并导致处理停滞。 |

---

## 4. 重要 PR 进展

| PR | 作者 | 领域 | 规模 | 描述 |
|----|--------|------|------|-------------|
| [#29432](https://github.com/google-gemini/gemini-cli/pull/29432) | andreivince | core | M | **fix(core): settle queued tool calls on scheduler disposal** — 调度器销毁时拒绝排队的工具调用批次，防止孤立待处理调用。 |
| [#29431](https://github.com/google-gemini/gemini-cli/pull/29431) | andreivince | core | M | **fix(core): skip invalid TOML policy rules** — 跳过产生验证错误的策略规则；防止空工具名导致启动崩溃。 |
| [#29429](https://github.com/google-gemini/gemini-cli/pull/29429) | sabhishek13-py | enterprise | L | **fix(quota): surface the limit and reset window** — 命中 `RESOURCE_EXHAUSTED` 时从 `ErrorInfo.metadata` 读取配额限制和重置时间戳；改进错误提示。 |
| [#29427](https://github.com/google-gemini/gemini-cli/pull/29427) | dylanyunlon | platform | XL | **fix: forward signals from parent to child process** — 父进程收到 SIGTERM/SIGHUP 时转发信号给子进程。防止子进程孤儿化。修复 #25590。（已关闭） |
| [#29426](https://github.com/google-gemini/gemini-cli/pull/29426) | dylanyunlon | platform | XL | **fix(platform): detect legacy CPU incompatibility** — 在显示 Antigravity CLI 迁移提示前检测 AVX 前置 CPU；防止在不支持的硬件上崩溃。（已关闭） |
| [#29404](https://github.com/google-gemini/gemini-cli/pull/29404) | Kaushik2210 | non-interactive | L | **feat(cli): add `gemini models list` with JSON output** — 新增模型发现子命令；使外部工具集成无需硬编码 ID。 |
| [#29387](https://github.com/google-gemini/gemini-cli/pull/29387) | Kaushik2210 | extensions | M | **fix(cli): don't let one malformed extension directory fail all extension loading** — 在 try/catch 后验证安全规则，允许优雅降级。 |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | Subhom1 | security | S/M | **fix(auth): persist oauth credentials after login** — 浏览器/用户代码登录后立即持久化 OAuth 凭证；消除重复登录提示。 |
| [#29376](https://github.com/google-gemini/gemini-cli/pull/29376) | Kaushik2210 | core | M | **fix(core): stop Windows IDE detection fallback from running Unix ps** — 修复跨平台进程检测；防止在 Windows 上运行 Unix 命令。 |
| [#26686](https://github.com/google-gemini/gemini-cli/pull/26686) | saymanq | extensions | S | **feat(cli): support git submodules in extension installs** — 从 Git 仓库安装扩展时初始化子模块；防止安装不完整。 |

---

## 5. 功能趋势

从 Issue 和 PR 聚合方向：

| 趋势 | 频率 | 描述 |
|-------|-----------|-------------|
| **AST 感知工具链** | 高 | 多个 Epic（#22745、#22746）调研 tree-sitter/glyph/tilth 集成以实现精确代码导航和精细化读取。 |
| **原生 bash/模型亲和性** | 高 | #19873 提议零依赖沙箱，利用 Gemini 的 POSIX 工具链偏好。 |
| **子 Agent 自主性** | 中 | #21968、#20195 — 改进何时/如何自动调用子 Agent 和自定义技能，无需显式提示。 |
| **模型发现 CLI** | 中 | #29404 已交付；支持外部工具程序化列出模型。 |
| **终端/UI 健壮性** | 中 | #21924（调整大小闪烁）、#22186（输出钩子崩溃）— 改进 TTY 处理和渲染稳定性。 |
| **记忆系统加固** | 中 | #26525、#26522、#26523 — 解决自动记忆重试循环、脱敏间隙和无效补丁处理问题。 |

---

## 6. 开发者痛点

### 高影响摩擦

1. **Agent 卡死** — 通用 Agent 委托导致无限卡死（#21409）阻塞实际使用；需要临时方案才能工作对于生产工作流来说不可接受。
2. **凭证重新认证** — OAuth 令牌初次登录后未持久化（#29282 刚刚修复）导致反复登录摩擦。
3. **子 Agent 失败掩盖** — MAX_TURNS 报告为 GOAL 成功（#22323）隐藏实际失败，侵蚀对 Agent 结果的信任。
4. **扩展加载级联失败** — 一个格式错误的扩展破坏全部加载（#29387 已修复）；隔离性差。
5. **Windows/Unix 跨平台 bug** — IDE 检测在 Windows 上运行 Unix 命令（#29376 已修复）表明测试存在缺口。

### 反复出现的主题

- **Token 效率低**：大文件"消防水龙"式读取（#19561）、边界未对齐和上下文臃肿导致 token 成本增加。
- **工具过度提供**：400+ 工具触发 API 错误（#24246）；需要更智能的范围限定。
- **浏览器 Agent 不稳定**：Wayland 失败（#21983）、设置覆盖被忽略（#22267）、锁恢复问题（#22232）。

---

*速报结束。数据基于 2026年9月21日 GitHub 快照生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, explanation, or markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code spans, project names, issue numbers (#12345), file paths as-is
4. Use natural technical Chinese register - like a Chinese developer newsletter

Let me translate this carefully:

---

# GitHub Copilot CLI 社区通讯

**日期：** 2026-09-21

---

## 1. 今日要闻

过去 24 小时内无新版本发布。社区正在积极调试几个高影响力问题：关键的 Figma MCP 服务器集成故障（#4870）、一个危险的检查点恢复 bug 会永久删除未跟踪文件（#1675），以及一个资源耗尽问题——空闲 CLI 进程消耗两个 CPU 核心并写入超过 33 GB 日志（#4807）。今天有三个新的分类问题提交，包括 ARM64 ripgrep 在 64 KiB 页面系统上崩溃以及自动模型选择问题。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门问题

| # | 问题 | 概要 | 关注度 |
|---|------|------|--------|
| **#4870** | [Figma MCP 服务器报 `-32601` 错误](https://github.com/github/copilot-cli/issues/4870) | Figma 托管的 MCP 服务器初始化成功但 CLI 从未注册其工具。Discovery probe 将 `-32601`（方法未找到）视为致命错误，而不是像 VS Code 那样优雅处理。 | 8 条评论，11 👍 |


| **#3762** | [contextTier 配置选项无效](https://github.com/github/copilot-cli/issues/3762) | Context Tier 设置无法影响代理的模型选择，除非用户通过选择器手动选择长上下文模型——然后它才能正常工作，包括主会话和子代理。 | 7 条评论 |
| **#1675** | [检查点恢复永久删除未跟踪文件](https://github.com/github/copilot-cli/issues/1675) | 

在代理运行期间按 Escape 键并选择"恢复到检查点"会执行 `git clean -fd`，永久删除所有未跟踪文件。关键数据丢失 bug。 | 5 条评论 |
| **#4224** | [OTel span 缺少子代理调用的计费属性](https://github.com/github/copilot-cli/issues/4224) | 子代理模型调用 span 缺少计费属性（`github.copilot.nano_aiu`、`github.copilot.cost`），导致外部成本核算系统低估实际使用量。 | 5 条评论，1 👍 |
| **#3874** | [preToolUse hook 拒绝不生效](https://github.com/

github/copilot-cli/issues/3874) | 安装一个拒绝所有命令的 hook 未能阻止工具执行——hooks 系统在权限执行方面似乎不工作。 | 4 条评论 |
| **#1886** | [.github/lsp.json 和 .github/mcp.json 不起作用](https://github.com/github/copilot-cli/issues/1886) | `.github/` 中的 LSP 和 MCP 服务器定义配置文件被忽略，尽管文档暗示它们应该工作。 | 4 条评论，4 👍 |
| **#4606** | [Google Workspace MCP OAuth 因 issuer 不匹配失败](https://github.com/

github/copilot-cli/issues/4606) | Google MCP 端点的 OAuth 因 issuer 元数据中的尾部斜杠不匹配而失败（`accounts.google.com/` vs `accounts.google.com`）。 | 3 条评论，1 👍 |
| **#3589** | [多个 sessionStart hook 仅注入最后一个上下文](https://github.com/github/copilot-cli/issues/3589) | 当多个 hook 输出 `additionalContext` 时，只有最后一个值被注入——更早的 hook 的上下文被静默丢弃。 | 3 条评论，2 👍 |
| **#4448** | [Search 工具卡住永不结束](https://github.com/

github/copilot-cli/issues/4448) | 内置的基于 grep 的搜索工具在某些环境中卡住数分钟；用户创建了变通方案文档。 | 3 条评论 |
| **#4910** | [非交互式 MCP 工具调用在进度后挂起](https://github.com/github/copilot-cli/issues/4910) | 在非交互模式下，Azure MCP 工具调用在交付进度通知后挂起，直到五

分钟空闲超时——相同 payload 在交互模式下成功。 | 3 条评论 |

---

## 4. 关键 PR 进展

**过去 24 小时内无 Pull Requests 更新。**

---

## 5. 热门讨论

**数据源中未提供讨论数据。**

---

## 6. 功能需求趋势

根据问题集，以下功能方向需求最多：

1. **跨平台会话支持** — `/remote` 应该支持非 GitHub git 仓库（GitLab、Bitbucket）工作（#2922）
2. **改进的模型选择智能** — 自动模式应为复杂任务选择更强的模型

，比如 Linux 内核补丁系列（#4917）
3. **Hook 系统增强** — 多个 `additionalContext` hook 都应贡献值，而不仅仅是最后一个（#3589）；`preToolUse` 拒绝 hook 应真正阻止执行（#3874）
4. **更好的配置文件支持** — `.github/lsp.json` 和 `.github/mcp.json` 应被识别并正常工作（#1886）
5. **暂存提示词功能** — 保存和检索提示词文本以供稍后使用的能力（#3034）
6. **重置模型为自动** — 清除模型选择重置为"自动"模式的机制（#2096）

---

## 7. 开发者痛点

| 类别 | 痛点 | 频率 |
|------|------|------|
| **MCP 集成** | 多个 MCP 服务器因错误处理问题无法加载或注册工具（#4870、#4606） | 高 |
| **数据丢失风险** | 检查点恢复命令永久删除未跟踪文件（#1675） | 严重 |
| **资源消耗** | 空闲 CLI 进入事件风暴，消耗 2 个 CPU 核心并写入 33+ GB 日志（#4807） | 高 |
| **配置** | 配置选项（contextTier、lsp.json、mcp.json）静默失效（#3762、#1886） | 中 |
| **会话损坏** | 恢复的会话包含格式错误的 JSONL 记录，导致无法继续恢复（#4098、#2012） | 中 |
| **成本核算** | 子代理计费属性缺失，导致外部成本跟踪不准确（#4224） | 中 |
| **平台特定** | Windows 批处理文件 MCP 服务器在 1.0.66 中损坏（#3958）；ARM64 ripgrep 在 64 KiB 页面系统上崩溃（#4918） | 中 |

---

*数据来源：github.com/github/copilot-cli • 最后更新：2026-09-21*</think>

# GitHub Copilot CLI 社区通讯

**日期：** 2026-09-21

---

## 1. 今日要闻

过去 24 小时内无新版本发布。社区正在积极调试几个高影响力问题：关键的 Figma MCP 服务器集成故障（#4870）、一个危险的检查点恢复 bug 会永久删除未跟踪文件（#1675），以及一个资源耗尽问题——空闲 CLI 进程消耗两个 CPU 核心并写入超过 33 GB 日志（#4807）。今天有三个新的分类问题提交，包括 ARM64 ripgrep 在 64 KiB 页面系统上崩溃以及自动模型选择问题。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门问题

| # | 问题 | 概要 | 关注度 |
|---|------|------|--------|
| **#4870** | [Figma MCP 服务器报 `-32601` 错误](https://github.com/github/copilot-cli/issues/4870) | Figma 托管的 MCP 服务器初始化成功但 CLI 从未注册其工具。Discovery probe 将 `-32601`（方法未找到）视为致命错误，而不是像 VS Code 那样优雅处理。 | 8 条评论，11 👍 |
| **#3762** | [contextTier 配置选项无效](https://github.com/github/copilot-cli/issues/3762) | Context Tier 设置无法影响代理的模型选择，除非用户通过选择器手动选择长上下文模型——然后它才能正常工作，包括主会话和子代理。 | 7 条评论 |
| **#1675** | [检查点恢复永久删除未跟踪文件](https://github.com/github/copilot-cli/issues/1675) | 在代理运行期间按 Escape 键并选择"恢复到检查点"会执行 `git clean -fd`，永久删除所有未跟踪文件。关键数据丢失 bug。 | 5 条评论 |
| **#4224** | [OTel span 缺少子代理调用的计费属性](https://github.com/github/copilot-cli/issues/4224) | 子代理模型调用 span 缺少计费属性（`github.copilot.nano_aiu`、`github.copilot.cost`），导致外部成本核算系统低估实际使用量。 | 5 条评论，1 👍 |
| **#3874** | [preToolUse hook 拒绝不生效](https://github.com/github/copilot-cli/issues/3874) | 安装一个拒绝所有命令的 hook 未能阻止工具执行——hooks 系统在权限执行方面似乎不工作。 | 4 条评论 |
| **#1886** | [.github/lsp.json 和 .github/mcp.json 不起作用](https://github.com/github/copilot-cli/issues/1886) | `.github/` 中的 LSP 和 MCP 服务器定义配置文件被忽略，尽管文档暗示它们应该工作。 | 4 条评论，4 👍 |
| **#4606** | [Google Workspace MCP OAuth 因 issuer 不匹配失败](https://github.com/github/copilot-cli/issues/4606) | Google MCP 端点的 OAuth 因 issuer 元数据中的尾部斜杠不匹配而失败（`accounts.google.com/` vs `accounts.google.com`）。 | 3 条评论，1 👍 |
| **#3589** | [多个 sessionStart hook 仅注入最后一个上下文](https://github.com/github/copilot-cli/issues/3589) | 当多个 hook 输出 `additionalContext` 时，只有最后一个值被注入——更早的 hook 的上下文被静默丢弃。 | 3 条评论，2 👍 |
| **#4448** | [Search 工具卡住永不结束](https://github.com/github/copilot-cli/issues/4448) | 内置的基于 grep 的搜索工具在某些环境中卡住数分钟；用户创建了变通方案文档。 | 3 条评论 |
| **#4910** | [非交互式 MCP 工具调用在进度后挂起](https://github.com/github/copilot-cli/issues/4910) | 在非交互模式下，Azure MCP 工具调用在交付进度通知后挂起，直到五分钟空闲超时——相同 payload 在交互模式下成功。 | 3 条评论 |

---

## 4. 关键 PR 进展

**过去 24 小时内无 Pull Requests 更新。**

---

## 5. 热门讨论

**数据源中未提供讨论数据。**

---

## 6. 功能需求趋势

根据问题集，以下功能方向需求最多：

1. **跨平台会话支持** — `/remote` 应该支持非 GitHub git 仓库（GitLab、Bitbucket）工作（#2922）
2. **改进的模型选择智能** — 自动模式应为复杂任务选择更强的模型，比如 Linux 内核补丁系列（#4917）
3. **Hook 系统增强** — 多个 `additionalContext` hook 都应贡献值，而不仅仅是最后一个（#3589）；`preToolUse` 拒绝 hook 应真正阻止执行（#3874）
4. **更好的配置文件支持** — `.github/lsp.json` 和 `.github/mcp.json` 应被识别并正常工作（#1886）
5. **暂存提示词功能** — 保存和检索提示词文本以供稍后使用的能力（#3034）
6. **重置模型为自动** — 清除模型选择重置为"自动"模式的机制（#2096）

---

## 7. 开发者痛点

| 类别 | 痛点 | 频率 |
|------|------|------|
| **MCP 集成** | 多个 MCP 服务器因错误处理问题无法加载或注册工具（#4870、#4606） | 高 |
| **数据丢失风险** | 检查点恢复命令永久删除未跟踪文件（#1675） | 严重 |
| **资源消耗** | 空闲 CLI 进入事件风暴，消耗 2 个 CPU 核心并写入 33+ GB 日志（#4807） | 高 |
| **配置** | 配置选项（contextTier、lsp.json、mcp.json）静默失效（#3762、#1886） | 中 |
| **会话损坏** | 恢复的会话包含格式错误的 JSONL 记录，无法继续恢复（#4098、#2012） | 中 |
| **成本核算** | 子代理计费属性缺失，导致外部成本跟踪不准确（#4224） | 中 |
| **平台特定** | Windows 批处理文件 MCP 服务器在 1.0.66 中损坏（#3958）；ARM64 ripgrep 在 64 KiB 页面系统上崩溃（#4918） | 中 |

---

*数据来源：github.com/github/copilot-cli • 最后更新：2026-09-21*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this OpenCode Community Digest from English to Chinese. Let me analyze what needs to be translated:

1. The headings, body text, tables, and lists need translation
2. Keep all technical identifiers, URLs, issue numbers, code as-is
3. Use natural technical Chinese - not literal word-for-word

Let me go through this carefully:

- "OpenCode Community Digest — 2026-09-21" → "OpenCode 社区周报 - 2026-09-21"
- "Today's Highlights" → "今日要闻"
- "Releases" → "发布"
- "Hot Issues" → "热门 Issue"
- "Key PR Progress" → "重要 PR 进展"
- "Feature Request Trends" → "功能请求趋势"
- "Developer Pain Points" → "开发者痛点"

Let me translate the full content now, being careful to keep technical terms, URLs, and identifiers intact.</think>

# OpenCode 社区周报 — 2026-09-21

## 今日要闻

OpenCode 社区本周聚焦于免费配额的使用摩擦——多条 Issue 反映用户意外触发使用限额，重试等待时间甚至出现递增，困惑与日俱增。与此同时，新版 Web 布局因缺失 workspaces 且无回滚选项持续遭受批评。不过多个体验优化 PR 取得进展，包括 lazy-load 命令以加速 `--version` 响应，以及静默会话终止的修复。

---

## 发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 摘要 | 投票 |
|---|-------|---------|-----------|
| **#49433** | [Error from provider: Free tier can only be used from within OpenCode](https://github.com/anomalyco/opencode/issues/49433) | 免费配额用户收到错误提示"只能在 OpenCode 内部使用"，引发大量困惑，48 条评论。 | 👍 12 |
| **#29363** | [`limit.output` 被静默限制在 32k](https://github.com/anomalyco/opencode/issues/29363) | 配置的 `limit.output`（如 DeepSeek 的 384k）被静默忽略；仅实验性环境变量可作为临时方案。 | 👍 23 |
| **#49927** | [Free Usage Exceeded on first session of the week](https://github.com/anomalyco/opencode/issues/49927) | 周末后首次使用即显示"Free Usage Exceeded"，尽管当天并未使用。 | 👍 0 |
| **#50093** | [Free limits exceed with escalating retry timers](https://github.com/anomalyco/opencode/issues/50093) | 免费用户等待 6+ 小时后重试反而延长至 13+ 小时——timer 递增行为不透明。 | 👍 5 |
| **#37546** | [Web: no way to revert new layout, missing workspaces](https://github.com/anomalyco/opencode/issues/37546) | Web 用户被强制升级到新布局，无法回滚；workspaces/git worktrees 在新版 UI 中完全缺失。 | 👍 26 |
| **#48958** | [New layout makes the UI unusable](https://github.com/anomalyco/opencode/issues/48958) | 用户反映无法在项目间切换或快速启动新 worktree 任务——基础工作流断裂。 | 👍 13 |
| **#33884** | [TUI plugins from npm packages fail to load in 1.17.10](https://github.com/anomalyco/opencode/issues/33884) | OpenTUI 0.4.2 回归导致 npm 方式安装的 TUI 插件加载失败；降级到 0.3.4 可临时解决。 | 👍 1 |
| **#43355** | [Desktop UI freezes after agent turn finishes](https://github.com/anomalyco/opencode/issues/43355) | ResizeObserver 循环导致渲染器冻结；只能强制退出恢复。影响 Electron 1.18.18。 | 👍 0 |
| **#49965** | [Auto-compaction fires after every tool-call for Ollama](https://github.com/anomalyco/opencode/issues/49965) | 即使远未触及上下文限制，Ollama openai-compatible provider 每次调用工具后都触发 auto-compaction。 | 👍 0 |
| **#10448** | [Feature Request: Zen balance API endpoint](https://github.com/anomalyco/opencode/issues/10448) | 请求公开 API 以编程方式查询 Zen 账户余额，用于系统状态栏集成。 | 👍 30 |

---

## 重要 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| **#50253** | [refactor(opencode): lazy-load commands so --version skips full startup](https://github.com/anomalyco/opencode/pull/50253) | 取代 #50219——使 `opencode --version` 通过 lazy-load 命令图实现即时响应，避免全量启动。 |
| **#49560** | [fix(tui): allow custom destination path in move session](https://github.com/anomalyco/opencode/pull/49560) | 扩展 `/move` 命令，支持任意路径作为目标（不限于当前项目的 worktrees）。 |
| **#50251** | [fix(session): surface turns that end with no model output](https://github.com/anomalyco/opencode/pull/50251) | 修复 provider 以 `stop` 和零 tokens 结束流时会话静默挂起的问题——现在会向用户展示。 |
| **#47486** | [fix(opencode): run live metadata updates from plugin tools](https://github.com/anomalyco/opencode/pull/47486) | 将 `ToolContext.metadata()` 桥接为返回 Effect，支持插件元数据实时更新。 |
| **#46495** | [fix(core): match absolute permission rules for relative paths](https://github.com/anomalyco/opencode/pull/46495) | 修复全局 Plan 目录位于活动 Location 内部时的 Plan 写入；优化权限匹配逻辑。 |
| **#50248** | [fix(cli): keep mini session waits alive](https://github.com/anomalyco/opencode/pull/50248) | 保持 mini session waits 活跃，防止过早终止。 |
| **#50249** | [fix(app): show OAuth provider connection badges](https://github.com/anomalyco/opencode/pull/50249) | 在设置中显示 OAuth provider 的连接状态徽章。 |
| **#50252** | [fix(util): expose npm installation failure details](https://github.com/anomalyco/opencode/pull/50252) | 改进 npm 安装失败时的错误提示，辅助调试。 |
| **#50239** | [fix(tui): show command in external_directory permission prompts](https://github.com/anomalyco/opencode/pull/50239) | 权限提示现在显示实际执行的命令，而不仅是目录。 |
| **#50106** | [fix(core): stop republishing summary diffs into durable event snapshots](https://github.com/anomalyco/opencode/pull/50106) | 防止 summary diff 重复写入事件快照，解决事件存储膨胀问题。 |

---

## 功能请求趋势

基于 Issue 和 PR 统计，最热门的方向为：

1. **跨 UI 的 workspace/worktree 对齐** — Web 和新版布局均缺失 workspaces，这是高级用户的核心工作流功能。
2. **精细化配额控制** — 用户希望免费配额更透明、程序化查询余额、可预测的重试行为。
3. **Provider 灵活性** — 更高的输出 token 上限控制权、按模型的 compaction 阈值调节、Ollama/本地模型优化。
4. **UI 回滚/切换** — 强烈需求在传统版和新版布局间切换的能力，Web 端尤为迫切。
5. **性能诊断工具** — 排查启动耗时的原因、SSH 下剪贴板行为、会话恢复内存飙涨等。

---

## 开发者痛点

- **免费配额不可预测**: 用户意外被拦截，等待时间不降反升——信任流失。
- **新版布局功能缺失**: 缺失 workspaces、无回滚、项目切换工作流断裂，阻塞实际开发。
- **静默失败**: 配置值被静默忽略（`limit.output`）、会话无提示终止、插件加载失败——反馈不明确。
- **性能回归**: ResizeObserver 冻结、会话恢复内存飙涨（数百 MB）、`--version` 启动缓慢。
- **插件生态摩擦**: TUI 插件加载器回归、npm vs 传统导出兜底问题、文件插件加载崩溃。

---

*数据来源：GitHub — anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Chinese. I need to:
1. Translate all the content into Chinese
2. Preserve the exact Markdown structure
3. Keep all technical terms, URLs, code references, issue numbers, etc. as-is
4. Use natural technical Chinese register

Let me go through and translate:

---

# Pi 社区简报 — 2026-09-21

## 今日要闻

**v0.86.1** 新增 Meta Muse provider 支持，用户可通过 `/login meta` 或设置 `META_API_KEY` 登录 Meta 并使用 Muse Spark 模型。本次版本更新幅度较小，但暴露了几个活跃的痛点：Windows 用户持续反映安装指引不清晰、CJK 输入延迟问题，而 TUI 的流式输出性能回退也引发了广泛关注，13+ 条评论在调查 CPU 满载问题。

---

## 版本发布

| 版本 | 概要 |
|------|------|
| **v0.86.1** | 新增 **Meta Muse provider** — 可通过 `/login meta` 登录 Meta 或设置 `META_API_KEY` 访问 Muse Spark 模型。文档：[Meta (Muse 订阅)](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)。 |

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] How do you use Pi on windows? What issues are you seeing?** | Windows 是重要平台，安装方式分散（WSL、原生、Scoop 等）。用户需要清晰的推荐配置和已知限制说明。 | 67 评论, 2 👍 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild** | 长会话时由于未缓存的 `Intl.Segmenter` 和重复的 Markdown 解析导致单核 100% CPU。影响核心 TUI 性能。 | 13 评论, 6 👍 |
| [#2616](https://github.com/earendil-works/pi/issues/2616) | **SessionManager is sync-only: blocks async/database-backed persistence** | 同步会话管理器阻止异步和数据库支持的持久化，所有会话 I/O 操作都被阻塞。 | 7 评论 |
| [#9815](https://github.com/earendil-works/pi/issues/9815) | **`mistral-conversations` API doesn't respect `Retry-After` header** | 未处理 `Retry-After` 头导致 429 限流错误崩溃而非优雅重试。 | 5 评论 |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | **pi-ai sends unsupported OpenAI-specific fields/roles/auth to compatible providers** | 向兼容 provider 发送 OpenAI 独有字段导致 400/422 错误。 | 5 评论 |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | **Tool-call argument parsing becomes quadratic with fragmented deltas** | 工具调用参数解析随增量更新呈现二次方增长。 | 5 评论 |
| [#9497](https://github.com/earendil-works/pi/issues/9497) | **Windows CJK IME input lag; enabling showHardwareCursor fixes it** | Windows 上中文/日文/韩文输入法出现延迟。 | 3 评论 |
| [#9810](https://github.com/earendil-works/pi/issues/9810) | **OpenAI Codex model metadata disables Pi's CacheWarmer during 100k+ idle cache misses** | 长时间空闲后 Codex 缓存未命中导致 100k+ 提示词重新计费。 | 3 评论 |
| [#9770](https://github.com/earendil-works/pi/issues/9770) | **find and grep tools have no timeout mechanism** | find 和 grep 工具缺少超时机制。 | 3 评论 |
| [#9748](https://github.com/earendil-works/pi/issues/9748) | **Option to use the terminal's hardware cursor as the editor caret** | 编辑器光标可使用终端硬件光标的选项。 | 3 评论 |

---

## PR 进展

| # | PR | 内容 |
|---|----|------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat(ai,coding-agent): add Meta provider with Muse subscription OAuth** | 实现 Meta 作为新 AI provider，支持 OAuth 登录。刷新令牌每日重新签发，流式输出暂为"假"（突发完整输出）。 |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | **feat(ai): add mid-conversation system messages** | 首层支持会话中动态添加系统消息的基础设施。 |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | **feat(coding-agent): deliver prompt and tool changes as system message deltas** | 连接 coding agent 以系统消息增量形式传递提示词和工具变更。 |
| [#9804](https://github.com/earendil-works/pi/pull/9804) | **fix(ai): exclude Cerebras from supportsStrictMode** | Cerebras 不支持 strict mode，混合使用导致 400 错误。 |
| [#9800](https://github.com/earendil-works/pi/pull/9800) | **fix(coding-agent): handle bash output temp file WriteStream errors** | 写入临时文件时处理 WriteStream 错误。 |
| [#9799](https://github.com/earendil-works/pi/pull/9799) | **fix(agent): terminate agentLoop streams on unrecoverable loop failure** | 循环失败时正确终止流。 |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | **fix(coding-agent): ignore stale tool image conversions** | 基于源图像缓存转换，忽略过期版本。 |

---

## 功能需求趋势

1. **Windows 优先改进** — 明确要求更清晰的 Windows 安装文档（Scoop、WSL、原生），以及 IME/输入性能修复。
2. **大规模 TUI 性能** — 多项需求涉及增量渲染、大会话列表优化、800+ 消息滚动回溯重绘。
3. **Provider 兼容性** — 对更好的 OpenAI 兼容 provider 处理（剥离不支持字段、尊重 `Retry-After` 等 provider 特定头）需求增长。
4. **光标/UI 定制** — 对硬件光标模式、图片缩放限制、全屏 TUI 渲染修复的兴趣。
5. **工具可靠性** — 对 `find`/`grep` 超时、被杀进程错误行为一致性、超时单位明确性的需求。

---

## 开发者痛点

- **性能回退**: TUI 流式输出 CPU 占用、工具调用中 JSON 二次方解析、会话列表大历史效率。
- **Windows 生态缺口**: CJK IME 输入延迟、0.86 中剪贴板复制行为变更、安装选项仍混乱。
- **Provider 边缘情况**: 缺少限流重试逻辑、OpenAI 独有字段破坏兼容 provider、特定模型（OpenAI Codex）缓存预热失效。
- **工具限制**: 文件搜索工具无超时、被外部杀死的进程错误行为不一致。
- **扩展/模块解析**: 扩展无法解析带 `package.json` 声明入口点的 npm 包。

---

*基于 2026-09-21 的 GitHub 数据生成。完整仓库：[earendil-works/pi](https://github.com/earendil-works/pi)。*</think>

# Pi 社区简报 — 2026-09-21

## 今日要闻

**v0.86.1** 新增 Meta Muse provider 支持，用户可通过 `/login meta` 或设置 `META_API_KEY` 登录 Meta 并使用 Muse Spark 模型。本次版本更新幅度较小，但暴露了几个活跃的痛点：Windows 用户持续反映安装指引不清晰、CJK 输入延迟问题，而 TUI 的流式输出性能回退也引发了广泛关注，13+ 条评论在调查 CPU 满载问题。

---

## 版本发布

| 版本 | 概要 |
|------|------|
| **v0.86.1** | 新增 **Meta Muse provider** — 可通过 `/login meta` 登录 Meta 或设置 `META_API_KEY` 访问 Muse Spark 模型。文档：[Meta (Muse 订阅)](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)。 |

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] How do you use Pi on windows? What issues are you seeing?** | Windows 是重要平台，安装方式分散（WSL、原生、Scoop 等）。用户需要清晰的推荐配置和已知限制说明。 | 67 评论, 2 👍 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild** | 长会话时由于未缓存的 `Intl.Segmenter` 和重复的 Markdown 解析导致单核 100% CPU。影响核心 TUI 性能。 | 13 评论, 6 👍 |
| [#2616](https://github.com/earendil-works/pi/issues/2616) | **SessionManager is sync-only: blocks async/database-backed persistence** | 所有会话 I/O 使用阻塞式 `*Sync` 方法，阻止数据库支持或异步会话存储——可扩展性的架构性障碍。 | 7 评论 |
| [#9815](https://github.com/earendil-works/pi/issues/9815) | **`mistral-conversations` API doesn't respect `Retry-After` header** | 缺少 `Retry-After` 头处理导致 429 限流错误崩溃而非优雅重试。 | 5 评论 |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | **pi-ai sends unsupported OpenAI-specific fields/roles/auth to compatible providers** | Pi 向兼容 provider 发送 OpenAI 独有字段，导致本可正常工作的端点返回 400/422 错误。 | 5 评论 |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | **Tool-call argument parsing becomes quadratic with fragmented deltas** | 每个增量追加到 `partialJson` 后重新解析整个缓冲区——O(N²) 复杂度。长时间工具调用存在性能问题。 | 5 评论 |
| [#9497](https://github.com/earendil-works/pi/issues/9497) | **Windows CJK IME input lag; enabling showHardwareCursor fixes it** | Windows 上中文/日文/韩文输入几乎不可用——按键延迟、候选窗缺失。有变通方案但需要调查。 | 3 评论 |
| [#9810](https://github.com/earendil-works/pi/issues/9810) | **OpenAI Codex model metadata disables Pi's CacheWarmer during 100k+ idle cache misses** | 长 Codex 会话在约 7 分钟空闲后反复冷启动，导致 10 万+ 提示词重新计费，首 token 延迟高。 | 3 评论 |
| [#9770](https://github.com/earendil-works/pi/issues/9770) | **find and grep tools have no timeout mechanism** | 与 `bash` 不同，`find`/`grep` 每次调用无超时。被杀死的进程返回空成功而非错误——工具行为不可靠。 | 3 评论 |
| [#9748](https://github.com/earendil-works/pi/issues/9748) | **Option to use the terminal's hardware cursor as the editor caret** | 请求支持可选的硬件光标模式，避免在真实光标上绘制伪反向视频光标。 | 3 评论 |

---

## 关键 PR 进展

| # | PR | 内容 |
|---|----|------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat(ai,coding-agent): add Meta provider with Muse subscription OAuth** | 新增 Meta 作为 AI provider，支持 OAuth 登录。特性：刷新令牌每日重新签发；流式输出暂为"假"（突发完整输出）。 |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | **feat(ai): add mid-conversation system messages** | 首层支持会话中动态添加系统消息的基础设施 PR，为动态提示词变更铺路。 |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | **feat(coding-agent): deliver prompt and tool changes as system message deltas** | 连接 coding agent，将提示词和工具加载变更以系统消息增量形式传递，而非重写顶层提示词。 |
| [#9804](https://github.com/earendil-works/pi/pull/9804) | **fix(ai): exclude Cerebras from supportsStrictMode** | 在 Cerebras 中标记 strict mode 不支持——混合 strict/non-strict 工具使用导致 400 错误。 |
| [#9800](https://github.com/earendil-works/pi/pull/9800) | **fix(coding-agent): handle bash output temp file WriteStream errors** | 为 bash 输出超过截断阈值时的临时文件 WriteStream 添加错误处理。 |
| [#9799](https://github.com/earendil-works/pi/pull/9799) | **fix(agent): terminate agentLoop streams on unrecoverable loop failure** | 为循环 promise 附加拒绝处理器，在不可恢复的失败（网络/认证/设置错误）时正确终止流。 |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | **fix(coding-agent): ignore stale tool image conversions** | 将图片转换缓存条目与源图片关联，忽略图片变更后完成的转换——修复竞态条件。 |

---

## 功能需求趋势

1. **Windows 优先改进** — 明确要求更清晰的 Windows 安装文档（Homebrew、Scoop、WSL），以及 IME/输入性能修复。
2. **大规模 TUI 性能** — 多项需求涉及增量渲染、大会话列表优化、800+ 消息滚动回溯重绘。
3. **Provider 兼容性** — 对更好的 OpenAI 兼容 provider 处理（剥离不支持字段、尊重 `Retry-After` 等 provider 特定头）需求增长。
4. **光标/UI 定制** — 对硬件光标模式、图片缩放限制、全屏 TUI 渲染修复的兴趣。
5. **工具可靠性** — 对 `find`/`grep` 超时、被杀进程错误行为一致性、超时单位明确性的需求。

---

## 开发者痛点

- **性能回退**: TUI 流式输出 CPU 占用、工具调用中 JSON 二次方解析、会话列表大历史效率。
- **Windows 生态缺口**: CJK IME 输入延迟、0.86 中剪贴板复制行为变更、安装选项仍混乱。
- **Provider 边缘情况**: 缺少限流重试逻辑、OpenAI 独有字段破坏兼容 provider、特定模型（OpenAI Codex）缓存预热失效。
- **工具限制**: 文件搜索工具无超时、被外部杀死的进程错误行为不一致。
- **扩展/模块解析**: 扩展无法解析带 `package.json` 声明入口点的 npm 包。

---

*基于 2026-09-21 的 GitHub 数据生成。完整仓库：[earendil-works/pi](https://github.com/earendil-works/pi)。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. Let me carefully translate it while:

1. Keeping all Markdown structure exactly as-is
2. Preserving all URLs, issue/PR numbers, code, file paths, version tags
3. Using natural technical Chinese
4. Keeping all tables, headings, lists, etc.

Let me go through and translate:

**Title:**
# Qwen Code Community Digest — 2026-09-21

# Qwen Code 社区动态 — 2026-09-21

**Today's Highlights:**
The Qwen Code team released **v0.24.2** with Live Voice microphone capture via AudioWorklet and remote workspace restoration. Meanwhile, the community is actively tackling long-context token governance — several issues highlight that non-conversation context (system prompts, tool schemas, built-in tools) can consume 45%+ of the context window on large models, with no tracking or optimization in place. The `/cd` command regression from v0.24.0 and a session deletion bug causing transcript corruption are also drawing significant attention.

今日要闻：Qwen Code 团队发布了 **v0.24.2**，新增 Live Voice 麦克风 AudioWorklet 采集和远程工作区恢复功能。与此同时，社区正在积极解决长上下文 token 治理问题——多个 issue 指出，非会话上下文（系统提示词、工具 schema、内置工具）在大型模型中可能占用超过 45% 的上下文窗口，且缺乏跟踪和优化机制。v0.24.0 引入的 `/cd` 命令回归以及会话删除导致转录文件损坏的问题也引起了广泛关注。

**Releases:**
发布版本：

| Version | Summary |
|---------|---------|
| **v0.24.2** | Stable release with restored remote workspace add flow and Live Voice microphone capture via AudioWorklet ([#12085](https://github.com/QwenLM/qwen-code/pull/12085)) |


|---------|---------|
| **v0.24.2-nightly.20260920.eceaede18e** | Nightly build from 2026-09-20 |

**Breaking Changes:** None reported.
**重大变更：** 无。

I notice significant context management challenges emerging. The team is addressing non-conversation token governance, where system prompts and tool schemas can consume substantial context window space. There's particular focus on the `/cd` command regression from v0.24.0 and session deletion bugs that risk transcript corruption.

The tracking reveals multiple technical debt issues: system prompts and tool schemas are inefficiently consuming context, percentage-based budgets are problematic, directory navigation commands are failing post-update, and session management has critical integrity risks. Inline credential exposure and network address conflicts also pose immediate security and usability concerns.

Unicode whitespace parsing appears to create unexpected command handling scenarios, potentially disrupting tool and command execution across different contexts.</think>

# Qwen Code 社区动态 — 2026-09-21

## 今日要闻

Qwen Code 团队发布了 **v0.24.2**，新增 Live Voice 麦克风 AudioWorklet 采集和远程工作区恢复功能。与此同时，社区正在积极解决长上下文 token 治理问题——多个 issue 指出，非会话上下文（系统提示词、工具 schema、内置工具）在大型模型中可能占用超过 45% 的上下文窗口，且缺乏跟踪和优化机制。v0.24.0 引入的 `/cd` 命令回归以及会话删除导致转录文件损坏的问题也引起了广泛关注。

---

## 发布版本

| 版本 | 概要 |
|------|------|
| **v0.24.2** | 稳定版：恢复远程工作区添加流程，新增 Live Voice 麦克风 AudioWorklet 采集（[#12085](https://github.com/QwenLM/qwen-code/pull/12085)） |
| **v0.24.2-nightly.20260920.eceaede18e** | 2026-09-20 每日构建版本 |

**重大变更：** 无。

---

## 热门 Issue

| Issue | 优先级 | 为何重要 | 评论数 |
|-------|--------|----------|--------|
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) — 非会话上下文 token 治理 | P2 | 核心问题追踪：系统提示词、工具 schema、上下文文件、技能列表每次请求都会被发送并计费。在 1M 上下文模型上，这部分内容轻易超过会话本身的大小。 | 10 |
| [#12029](https://github.com/QwenLM/qwen-code/issues/12029) — 百分比上下文窗口预算 scaling 错误 | P2 | 两个基于百分比的预算（ToolSearch 预加载、上下文警告）在上下文窗口变大时失效——它们防护的成本与窗口大小无关。 | 8 |
| [#12224](https://github.com/QwenLM/qwen-code/issues/12224) — `/cd` 命令在 v0.24.0 后失效 | P1 | 升级后用户无法使用 `/cd` 切换目录——CLI 即使在没有活跃会话时也错误报告"响应或工具调用进行中"。 | 6 |
| [#11847](https://github.com/QwenLM/qwen-code/issues/11847) — 会话回顾始终使用英文生成 | P3 | 离开摘要硬编码为英文，无法匹配对话语言，影响多语言用户。 | 7 |
| [#12091](https://github.com/QwenLM/qwen-code/issues/12091) — 对活跃会话执行 `sessions/delete` 破坏转录文件 | P1 | 在运行时附加时删除会话会无头地重新创建文件，导致会话永久损坏，degraded_history 和 auto-continue 被禁用。 | 5 |
| [#12002](https://github.com/QwenLM/qwen-code/issues/12002) — [安全] 工具调用参数中的内联凭据被明文记录 | P1 | 模型生成的包含内联凭据的 shell 命令（如 `export TOKEN='value'`）被原样持久化到 chat JSONL 和遥测数据中——存在离端泄露风险。 | 5 |
| [#12277](https://github.com/QwenLM/qwen-code/issues/12277) — 启用本地控制时出现 EADDRINUSE | P2 | 通过 QR + 配对令牌启用 LAN 访问时，会在同一临时端口上打开第二个 HTTP 监听器，导致地址占用错误。 | 5 |
| [#6137](https://github.com/QwenLM/qwen-code/issues/6137) — Qwen Code 终端闪烁 | P2 | xterm/tmux 和 alacritty 中的终端闪烁——自七月以来持续影响 Linux 用户的问题。 | 5 |
| [#11814](https://github.com/QwenLM/qwen-code/issues/11814) — `tools.disabled` 移除 zoom_image 但 schema 仍被发送 | P3 | 被禁用的工具仍保留在发送给模型的 schema 中，违背了禁用工具以节省上下文的初衷。 | 5 |
| [#12089](https://github.com/QwenLM/qwen-code/issues/12089) — shell-utils.ts 将 Unicode 空白符视为 bash 分隔符 | P2 | Unicode 空白符被错误地视为 bash 单词分隔符，可能破坏 shell 命令解析。 | 5 |

---

## 关键 PR 进展

| PR | 类别 | 变更内容 |
|----|------|----------|
| [#12358](https://github.com/QwenLM/qwen-code/pull/12358) — 添加独立托管代理栈 | *managed-agent* | 托管代理架构草案预览：持久化 Managed Session 记录、Hosted Harness、Runtime Broker 和 Spring Java 控制平面。 |
| [#12267](https://github.com/QwenLM/qwen-code/pull/12267) — 将 bwrap 沙箱移至工具执行阶段 | *cli* | 向无头 CLI 和终端 UI 暴露 `tools.executionSandbox` 策略，shell 入口通过共享运行时执行边界路由。 |
| [#12322](https://github.com/QwenLM/qwen-code/pull/12322) — 在非回环监听器上启用过期 QR 配对 | *web-shell* | 默认在已认证的非回环监听器上启用移动端 QR 访问，60 秒过期。 |
| [#12258](https://github.com/QwenLM/qwen-code/pull/12258) — 支持按服务器配置 App 资源限制 | *mcp* | 允许每个 MCP 服务器选择更大的 App HTML（最高 4 MiB）和更长的资源读取截止时间（最高 120 秒）。 |
| [#12154](https://github.com/QwenLM/qwen-code/pull/12154) — 在 git 对话框中管理工作树 | *web-shell* | 在 Web Shell git 对话框中添加"工作树"标签页，列出所有工作区工作树并标记 main/current/locked/missing 状态。 |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) — 从目录加载部署管理的扩展 | *extensions* | 向 CLI/守护进程添加 `--managed-extensions <root>` 用于从部署控制的目录发现完整扩展。 |
| [#12364](https://github.com/QwenLM/qwen-code/pull/12364) — 验证通配符导出目标是否在打包文件列表中 | *web-shell* | 修复发布验证器以正确处理 npm 子路径模式（如 `"./*": "./dist/*"`）。 |
| [#12362](https://github.com/QwenLM/qwen-code/pull/12362) — 恢复移动端历史导航 | *web-shell* | 恢复移动端编辑器的 ↑/↓ 按钮，修复欢迎页首次输入无法进入历史的问题。 |
| [#12278](https://github.com/QwenLM/qwen-code/pull/12278) — 添加 Landlock 执行回退 | *core* | 添加 Landlock 文件系统后端作为每工具执行边界；`auto` 优先使用 bwrap，在网络开放时回退到 Landlock。 |
| [#12255](https://github.com/QwenLM/qwen-code/pull/12255) — 支持无远程守护进程的 SSH 工作区 | *serve* | 允许在 Web Shell 中添加 `ssh://user@host:2222/absolute/project` 通过本地守护进程工作——文件操作、Git、终端通过 SSH。 |

---

## 功能请求趋势

1. **上下文窗口优化** — 多个 issue（#12028、#12029、#12054、#12030、#12326）推动非会话上下文治理、token 跟踪和大型上下文模型预算 scaling 的工作。

2. **多会话/跨会话管理** — Issue #12303 和 #11013 追踪与 Claude Code 2.1.260 对比的差距，包括动态工作流、会话弹性和分布式能力。

3. **扩展和打包改进** — 部署管理扩展（#12183）、Chrome Web Store 发布（#12240）和工作树管理（#12154）是活跃领域。

4. **安全加固** — 内联凭据泄露（#12002）、Unicode 空白符处理（#12089）和会话转录完整性（#12091）正在修复中。

5. **平台扩展** — SSH 工作区支持（#12255）、macOS 守护进程修复（#12350）和 Linux 终端闪烁（#6137）表明跨平台工作持续进行。

---

## 开发者痛点

- **大型模型 token/上下文膨胀** — 仅内置工具就消耗 21K+ token（非会话上下文的 45.9%），且无大小跟踪。
- **v0.24.0 回归** — 升级后 `/cd` 命令失效，阻塞基本工作流。
- **会话删除损坏** — 删除活跃会话会破坏转录文件，存在数据完整性问题。
- **CLI 启动崩溃** — 输出语言文件写入失败导致只读主目录上的启动崩溃（#10455）。
- **E2E 测试不稳定** — 多个 CI 重试 PR（#11297、#11731、#11134）表明端到端测试持续不稳定。
- **设置国际化缺口** — 约 31 个设置面板项目在 UI 语言设置为中文时仍未翻译（#12306）。
- **MCP 资源限制** — 默认 1 MiB / 10s 限制对某些用例不足；现已添加按服务器配置（#12258）。

---

*基于 GitHub 数据生成 — 2026-09-21*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*