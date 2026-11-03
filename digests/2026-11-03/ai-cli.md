# AI CLI 工具社区动态日报 2026-11-03

> 生成时间: 2026-11-03 03:40 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the entire report to Chinese (Simplified), following very specific rules:

1. Only output the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - register of a Chinese developer newsletter, not literal word-for-word

Let me translate this carefully while maintaining the exact structure and technical accuracy.

The report has:
- Title with date
- 6 sections with headings
- Tables (with alignment)
- Lists
- Bold text
- Horizontal rules

Let me go through section by section:

## 1. 生态系统概览

"AI-powered CLI tooling landscape" - AI CLI 工具领域
"market defined by" - 市场由...定义
"platform-specific differentiation" - 平台特定差异化

## 2. 活动对比

Table headers need translation:
- Open Issues → 开放 Issues
- PRs Merged (24h) → 合并的 PRs（24小时）
- Discussions → 讨论
- Releases (24h) → 发布版本（24小时）

Notes section needs translation.

## 3. 共享功能方向

Feature table needs careful translation.

## 4. 差异化分析

Table with different focus areas.

## 5. 社区活力与成熟度

## 6. 趋势信号

Let me translate this now, making sure to keep all the technical terms, URLs, version numbers, issue numbers, etc. in their original form.</think>

# 跨工具 AI CLI 生态系统报告 — 2026-11-03

---

## 1. 生态系统概览

截至 2026 年 11 月，AI CLI 工具领域依然保持高度活跃状态，七大主要项目（Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi、Qwen Code）在以快速迭代功能和平台特定差异化著称的市场中展开竞争。各社区的共同诉求逐渐清晰：会话可靠性问题、多模型灵活性需求，以及通过插件/代理架构实现的扩展性。市场似乎正在围绕三个核心价值主张趋于一致——企业级治理（Claude Code、Copilot CLI）、开发者体验集成（Codex、Qwen Code）和生态系统/定制化（OpenCode、Pi、 Gemini CLI）。

---

## 2. 活动对比

| 工具 | 开放 Issues | 合并的 PRs（24h） | 讨论 | 发布版本（24h） |
|------|-------------|------------------|------|----------------|
| **Claude Code** | 50 | 1 | 0 | 1（v2.1.317） |
| **OpenAI Codex** | 30 | 20 | 18 | 1（rust-v0.167.0-alpha.4） |
| **Gemini CLI** | 50 | 11 | 0 | 1（v0.67.0-nightly） |
| **Copilot CLI** | 47 | 2 | 0 | 3（v1.0.106-3/4/5） |
| **OpenCode** | 50 | 11 | 0 | 0 |
| **Pi** | 30 | 10 | 2 | 1（v1.5.0） |
| **Qwen Code** | ~20+ | 11 | 0 | 2（v0.26.6 + nightly） |

*注：OpenAI Codex 和 Pi 启用了 Discussions 功能并积极使用；其他工具主要依赖 Issues。"Discussions" 栏为 0 表示该渠道可用但今日未活跃使用，而非已禁用。*

---

## 3. 共享功能方向

以下需求在多个社区中均有出现：

| 功能方向 | 提出需求的相关工具 | 具体需求 |
|----------|-------------------|----------|
| **多模型 / BYOK 灵活性** | Claude Code、Copilot CLI、OpenCode、Pi | 在模型间切换、自定义端点、本地提供商 |
| **会话管理与历史** | Claude Code、Copilot CLI、OpenCode、Pi、Qwen Code | 消息隔离、会话固定、无需重新摘要的切换 |
| **工作区/项目作用域** | Claude Code、Codex、OpenCode | 将上下文/历史限制在当前项目 vs 全局 |
| **成本/Token 可视化** | Claude Code、Codex、OpenCode | 实时预算暴露给模型、使用提醒、Token 统计 |
| **MCP / 扩展性** | Claude Code、Codex、Pi | OAuth 可靠性、工具发现、插件生态 |
| **协作功能** | Claude Code、OpenCode、Qwen Code | 实时共享、多用户会话 |
| **安全加固** | Claude Code、Codex、 Gemini CLI | 沙盒、权限控制、安全过滤器调优 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------|---------|----------|
| **Claude Code** | 企业治理、预算控制、代理钩子 | 企业团队、受监管行业 | 重点强调安全、角色、订阅管理 |
| **OpenAI Codex** | VS Code 深度集成、网页搜索、MCP | VS Code 重度开发者 | 搜索工具发现、工作区上下文、ACP 协议 |
| **Gemini CLI** | 子代理编排、AST 感知代码库分析 | 高级用户、复杂代码库分析 | 代理式工作流、多轮规划、技能调用 |
| **Copilot CLI** | GitHub 工作流集成、终端生产力 | GitHub 用户、CLI 爱好者 | 会话管理、IDE 桥接、AGENTS.md 支持 |
| **OpenCode** | OpenAI 生态、插件市场 | 插件开发者、OpenAI 用户 | 包生态（pi.dev/packages）、技能、MCP |
| **Pi** | 可扩展 TUI、提示词工程 | TUI 爱好者、提示词工程师 | 带变更日志的扩展系统、线程续接 |
| **Qwen Code** | Web Shell、托管代理、频道式工作流 | GitHub/GitLab 用户、企业团队 | 托管代理基础设施、基于网页的会话 |

---

## 5. 社区活力与成熟度

**高速度：**
- **Gemini CLI** — 合并 11 个 PR，夜间版本发布，积极调查子代理可靠性
- **Qwen Code** — 11 个 PR 包括 schema 对齐、CI 修复、Web Shell 增强
- **OpenCode** — 11 个 PR 涉及生态集成（Totem、TrendsAGI）

**活跃但聚焦：**
- **Claude Code** — 1 个 PR 但 Issues 分类处理活跃；高社区参与度（50 个 Issues、3 个版本发布）
- **Pi** — 10 个 PR，线程和 Token 估算稳步改进

**成熟 / 稳定：**
- **Copilot CLI** — 补丁版本发布节奏，主要修复 bug，功能集成熟
- **OpenAI Codex** — 20 个 PR 表明后端工作量大；讨论文化活跃（18 个主题）

**指标：** Issue 评论量和 PR 吞吐量表明 Qwen Code、Gemini CLI 和 OpenCode 处于快速迭代阶段；Claude Code 和 Copilot CLI 呈现成熟、维护模式特征。

---

## 6. 趋势信号

以下来自社区反馈的信号对开发者和决策者具有战略价值：

1. **多模型灵活性已成必备功能** — 每个工具都收到 BYOK、多模型切换和自定义端点支持的请求。没有这一路线图的项目可能失去开发者关注度。

2. **会话可靠性是竞争壁垒** — 消息丢失、SIGHUP 处理和僵尸进程问题在所有工具中都出现过。解决会话持久性（恢复、优雅降级）直接影响开发者信任。

3. **可扩展性推动生态锁定** — Pi 的扩展生态和 Qwen Code 的 Web Shell 侧边栏表明，编程能力（技能、插件、MCP）比原始模型能力更能推动采用。

4. **企业需求正在趋同** — 基于角色的访问、成本可见性、审计追踪和合规功能出现在 Claude Code 和 Copilot CLI 中；预计这将成为横向需求。

5. **平台特定痛点投入不足** — Windows 问题（NumLock、浏览器切换、WSL 集成）在多个工具中反复出现但关注度不一致。系统性地解决平台兼容性将形成差异化。

6. **CI/构建可靠性阻碍速度** — Qwen Code 多次"Main CI failed"问题和 Gemini CLI 的 CVE 审计失败表明，基础设施质量直接影响贡献者速度。

---

*报告基于七个工具的 GitHub 数据编制 — 2026-11-03*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report about Claude Code Skills Community into Chinese. I need to:

1. Output ONLY the translation - no preamble or explanation
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure and using appropriate technical Chinese.

Key terms to translate:
- Skills → 技能
- Pull Requests → PR / 拉取请求
- Community → 社区
- Issues → Issue / 问题
- Security → 安全
- Trust boundary → 信任边界
- Workflow → 工作流
- Tooling → 工具
- Evaluation → 评估
- Trigger → 触发
- Breaking change → 破坏性变更

Let me go through and translate the report:</think>

# Claude Code 技能社区亮点报告

**数据来源：github.com/anthropics/skills | 截至 2026-11-03**

---

## 1. 热门技能排名

PR 数据显示所有条目都显示 "Comments: undefined"——这可能表明排序反映的是内部参与信号而非公开的 GitHub 评论。根据 PR 的范围、复杂度和近期活动：

| # | PR | 作者 | 摘要 | 状态 |
|---|-----|--------|---------|--------|
| **1742** | fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | Kuldeeep18 | 修复 MCP SDK 2.0 中的破坏性变更——更新导入名称（`streamablehttp_client` → `streamable_http_client`）并通过 `create_mcp_http_client` 处理自定义 HTTP 头配置。对 MCP 集成技能至关重要。 | 开放 |
| **1298** | fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | MartinCajiao | 修复触发评估中的误报问题，修复 Windows 上的 `select()` 失败问题，防止无关工具停止扫描。提升技能测试可靠性。 | 开放 |
| **1245** | Add notion-spec-to-implementation and quantitative-resume-auditor skills | mrdesouzaphd-cmyk | 两个新技能：Notion 规范→实现工作流，以及量化岗位简历审核技能。 | 开放 |
| **1980** | webapp-testing: avoid shell=True in with_server.py | Pcmhacker-piro | **安全修复**：移除 `shell=True` 以防止命令注入（CWE-78）。处理未经过滤的用户输入风险。 | 开放 |
| **525** | Add pyxel skill for retro game development | kitao | 使用 Pyxel（Python 游戏引擎）创建/调试复古游戏的新技能。包含无头测试、帧检查、状态验证。 | 开放 |
| **1771** | feat(skills): add proofcore-contract-auditor | ProofCore-Protocol | 智能合约公证技能——对 Solidity/Rust 合约执行静态分析，并通过零存储 Merkle 协议将审计证明锚定到 TON 区块链。 | 开放 |
| **1703** | Add md2video-audio skill | 70v-Yoyo | 零成本技能，使用 Marp 将 Markdown 编译为带逼真配音的 MP4 视频。 | 开放 |
| **514** | Add document-typography skill | PGTBoos | 防止 AI 生成文档中的排版问题：孤行单词、孤段、编号错位。 | 开放 |

---

## 2. 社区需求趋势

Issue 揭示了社区实际需要但尚未拥有的功能：

| Issue | 评论数 | 主题 |
|-------|----------|-------|
| **#492** — 安全：社区技能位于 anthropic/ 命名空间导致信任边界滥用 | **46** | 🔴 **安全与信任** — 社区技能冒充官方技能；用户可能在不知情的情况下授予提升的权限 |
| **#228** — 在 Claude.ai 中启用组织级技能共享 | **17** | 🔄 **工作流/协作** — 需要共享技能库；目前需要手动传输文件 |
| **#556** — run_eval.py: claude -p 从不触发技能（0% 触发率） | **13** | 🛠️ **工具/DX** — 评估工具无法触发技能；阻止技能验证 |
| **#1329** — 提议 compact-memory 技能 | **10** | 🧠 **智能体状态** — 长期运行会话中紧凑智能体记忆的符号表示法 |
| **#1385** — [提议] 推理质量门控流水线 | **7** | 🧪 **质量保证** — 任务前校准 → 对抗性审查 → 交付验证 |

**主导主题：**
- **安全与信任**（评论最多的 Issue）
- **协作/共享** 基础设施
- **评估/触发** 可靠性
- **特定领域** 新技能（Web3、HPC、游戏）

---

## 3. 高潜力待处理技能

这些 PR 活跃、范围明确、需求清晰——可能很快就会合并：

| PR | 技能/领域 | 为何可能很快合并 |
|----|--------------|---------------------|
| **#1742** | MCP SDK v2 兼容性 | 破坏性变更；MCP 技能工作的必要条件 |
| **#1980** | webapp-testing 安全修复 | 明确的安全修复（CWE-78）；低风险合并 |
| **#1792** | docx: 验证 LibreOffice 输出 | 质量改进；具体行为变更 |
| **#1977/1976/1975** | algorithmic-art, webapp-testing, pptx 修复 | 来自活跃贡献者的增量 bug 修复（gerardrecinto） |
| **#525** | Pyxel 复古游戏开发 | 小众但完整；作者是 kitao（Pxel 维护者） |
| **#1703** | md2video-audio | 价值主张明确；零成本工作流 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求是可靠的技能评估/触发基础设施和安全、组织级的技能共享机制——这些是当前技能开发和企业采用所面临的基本操作障碍。**

---

*报告数据来源：github.com/anthropics/skills（50 个 PR，50 个 Issue，截至 2026-11-03）*

---

<think>The user wants me to translate the GitHub digest into Simplified Chinese, following the specific rules provided. Let me go through the content and translate it appropriately while:

1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Preserving URLs, numbers, issue references (#95326, etc.)
3. Using natural technical Chinese
4. Keeping technical terms in English where appropriate
5. Maintaining the table format with proper alignment

Let me translate section by section:

## Today's Highlights
今日要闻

The rest needs to be translated naturally. Let me be careful with:
- "Hot Issues" -> 热门议题
- Feature Request Trends -> 功能需求趋势
- Developer Pain Points -> 开发者痛点
- Keep code-related terms in English
- Translate professionally

Let me go through the full translation:</think>

# Claude Code 社区简报 — 2026-11-03

## 今日要闻

v2.1.317 版本带来了注重隐私的工具调用机制——针对意外云调度任务连接器的警告，以及网络工具发送账户邮箱前的确认提示。同时，社区仍在应对平台特定问题，尤其是 Windows/Chrome 扩展权限和 macOS 提示词建议回归问题，而实时协作和成本透明度的功能需求获得了显著关注。

---

## 版本更新

**v2.1.317** — 3 项变更合并

| 变更 | 说明 |
|------|------|
| `/schedule` 连接器警告 | 当新增云调度任务包含非请求的连接器时通知用户，并提供移除说明 |
| 网络邮箱发送确认 | 在网页或 Shell 工具传输用户账户邮箱前请求确认 |
| Agent SDK `onFailure: "block"` | 新增钩子配置，可在失败时中止 Agent 执行 |

---

## 热门议题

| # | 议题 | 概要 | 为何重要 |
|---|------|------|----------|
| **#95326** | [reddit.com 上所有工具被阻止](https://github.com/anthropics/claude-code/issues/95326) | 自 2026-09-18 起 Chrome 扩展在 reddit.com/redd.it 上阻止所有工具；29 条评论，35 👍 | 影响范围广泛；Windows + Chrome 用户无法在 Reddit 上使用 Claude Code |
| **#88391** | [提示词建议回归问题](https://github.com/anthropics/claude-code/issues/88391) | macOS 桌面版自 2.1.229 后静默停止显示提示词建议；18 条评论，18 👍 | 桌面端用户体验下降；回归问题影响一个深受喜爱的生产力功能 |
| **#60082** | [实时多人协作](https://github.com/anthropics/claude-code/issues/60082) | 共享会话编辑功能需求（类 Google Docs / VS Code Live Share）；17 条评论，33 👍 | 票数最高的增强需求；支持团队协作工作流 |
| **#105240** | [5 倍周限额 48 小时内耗尽 94%](https://github.com/anthropics/claude-code/issues/105240) | 自 10 月 17 日起 WSL 环境突发 94% 用量；15 条评论 | 成本控制担忧；用量模式异常 |
| **#81691** | [向模型暴露订阅预算](https://github.com/anthropics/claude-code/issues/81691) | 让模型能查看实时 token 配额以规划会话；9 条评论 | 实现更智能的 token 分配——模型可在限额内规划工作 |
| **#102265** | [OAuth 刷新令牌未持久化](https://github.com/anthropics/claude-code/issues/102265) | 短生命周期的 CLI 命令丢失轮换后的刷新令牌，导致 `invalid_grant`；5 条评论 | Linux 认证 bug 导致插件验证工作流中断 |
| **#95539** | [naver.com 误报](https://github.com/anthropics/claude-code/issues/95539) | 韩国主流门户被默认安全限制阻止；5 条评论，7 👍 | 安全过滤器过度拦截了一个重要的国际服务 |
| **#97907** | [角色功能](https://github.com/anthropics/claude-code/issues/97907) | 按团队角色捆绑 agent + 设置 + 指令；5 条评论 | 面向团队的混合角色权限管理 |
| **#89865** | [工作流验证阶段发散 20 倍](https://github.com/anthropics/claude-code/issues/89865) | 单次工作流运行产生 355 个 Opus 5 agent，无费用预览；3 条评论 | Agent 数量失控导致巨额成本超支 |

---

## 主要 PR 进展

| # | PR | 概要 |
|---|-----|------|
| **#106583** | [迁移 triage 到 Sonnet 5.5](https://github.com/anthropics/claude-code/pull/106583) | 将 issue 分类和去重工作流从 Opus 4.6 / Sonnet 4.6 迁移到 Sonnet 5.5（已关闭） |

*注：过去 24 小时内仅更新 1 个 PR。*

---

## 功能需求趋势

从议题队列来看，主要需求主题：

1. **协作与多人使用** — 实时会话共享（#60082）仍是票数最高的增强需求
2. **成本可见性** — 开发者希望模型能获取实时预算和 token 使用情况（#81691），以及更完善的使用量告警（#105240）
3. **团队管理** — 基于角色的权限、设置和 agent 配置捆绑（#97907）
4. **审计与可观测性** — 隐私控制的会话日志（#97908），用于计划追踪的对话锚点（#97906）
5. **工作流治理** — Agent 启动前的成本预览，验证阶段防护机制（#89865）

---

## 开发者痛点

- **平台特定回归**：macOS 提示词建议、Windows/Chrome 扩展权限
- **安全误报**：安全防护持续拦截合法工作流（8 月以来多个已关闭的重复问题）
- **认证边界情况**：短生命周期 CLI 调用中的 OAuth 令牌刷新失败（#102265）
- **成本不可预测**：工作流验证阶段失控、意外用量峰值、缺乏执行前成本预估
- **权限摩擦**：尽管设置了允许规则，Bash 只读命令仍会弹窗提示；调度任务中的意外连接器

---

*简报基于 GitHub 数据生成 — [anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this English digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
- Keep URLs, numbers, dates, issue/PR references verbatim
- Keep technical terms in original form
- Use natural technical Chinese register - not literal word-for-word

Let me translate this carefully while preserving the structure and using appropriate technical Chinese.</think>

# OpenAI Codex 社区摘要 — 2026-11-03

## 今日要闻

Codex 项目今日完成了大量后端工作，共合并 20 个 PR，包括 WebSocket 指标、SQLite 迁移和 MCP 集成的改进。社区继续将 Windows 特定的浏览器和远程桌面问题列为持续痛点，同时一个广受期待的 VS Code 工作区范围功能（#25319，127 👍）引发了热烈讨论。

## 版本发布

| 版本 | 摘要 |
|------|------|
| [rust-v0.167.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.167.0-alpha.4) | Release 0.167.0-alpha.4 |

## 热门 Issue

| # | Issue | 摘要 | 反馈 |
|---|-------|------|------|
| [#25319](https://github.com/openai/codex/issues/25319) | **[功能增强] 将 Codex VS Code 聊天限定到当前工作区/项目** | 建议 VS Code 扩展将聊天/线程历史限制在当前项目上下文中，而非全局范围。 | 📈 127 👍, 57 💬 — *社区首要请求；实现更清晰的项目级工作流* |
| [#57641](https://github.com/openai/codex/issues/57641) | **[Bug] 终端 CLI @Browser 报错"browser access host unavailable"** | Windows 11 桌面应用更新 26.1023.6123.0 导致 CLI 中浏览器工具无法访问。 | 28 💬 — *影响终端工作流的 Windows 特定回归问题* |
| [#54989](https://github.com/openai/codex/issues/54989) | **[Bug] Windows：工作设置中浏览器报告已禁用，但浏览器开关已启用** | 浏览器工具报告已禁用，尽管开关已打开；重启应用通常可恢复。 | 23 💬 — *频繁的误报状态导致用户困惑* |
| [#56645](https://github.com/openai/codex/issues/56645) | **[Bug] 本地浏览器使用在工作设置中被禁用** | 与 #54989 类似；Windows 桌面应用报告浏览器已禁用，即使已启用。 | 20 💬 — *Windows 浏览器开关状态不一致* |
| [#58302](https://github.com/openai/codex/issues/58302) | **[Bug] macOS：XLSX 附件保持待处理状态且发送控件旋转** | Build 26.1027.30824 在 macOS 桌面端无法发送 XLSX 文件附件。 | 16 💬 — *文档工作流受阻* |
| [#53144](https://github.com/openai/codex/issues/53144) | **[Bug] Daybreak Blue 模式未能减少误报的网络安全拦截** | 即使启用 Daybreak 模式，安全过滤器仍限制网络安全请求。 | 13 💬 — *安全检查误报影响合法工作* |
| [#58482](https://github.com/openai/codex/issues/58482) | **[Bug] Windows 计算机使用报告错误的焦点元素** | 计算器索引操作在窗口生命周期中不一致；元素定位错误。 | 8 💬 — *Windows 自动化可靠性问题* |
| [#53264](https://github.com/openai/codex/issues/53264) | **[Bug] Windows 远程：无项目聊天创建失败** | 通过远程连接创建新聊天时报错"Unable to resolve projectless chat folder"。 | 8 💬 — *远程桌面工作流阻塞* |
| [#45846](https://github.com/openai/codex/issues/45846) | **[功能增强] CLI：添加用户设置以自动展开异步问题** | 请求用户设置以自动展开排队的后续输入，而非折叠它们。 | 7 💬 — *TUI 可用性改进* |
| [#58447](https://github.com/openai/codex/issues/58447) | **[Bug] macOS：dot 本地线程读取返回 DesktopThreadReadUnavailableError** | 本地线程读取失败，尽管桌面已连接并授权；dot 创建的云线程正常工作。 | 7 💬 — *跨设备线程访问回归* |

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|------|
| [#59047](https://github.com/openai/codex/pull/59047) | **在云客户端中解码实时转录更新** | 公开类型化转录事件（文本、命令、文件更改、轮次状态）通过 `Event::Transcript`。 |
| [#59043](https://github.com/openai/codex/pull/59043) | **将执行器附件绑定到环境选择生命周期** | 修复执行器移除时的连接事件泄漏；确保较旧的轮次快照不会保留过时引用。 |
| [#59041](https://github.com/openai/codex/pull/59041) | **公开助手内容令牌计数** | 在 `item/completed` 通知中添加 `contentTokenCount` 元数据，用于令牌统计。 |
| [#59036](https://github.com/openai/codex/pull/59036) | **使用策略感知的后备方案解析模型选择的搜索提供者** | 搜索发现尊重模型能力和主机限制，同时保留现有浏览引用。 |
| [#59034](https://github.com/openai/codex/pull/59034) | **在 MCP 绑定中添加模型搜索发现** | 使 MCP 绑定能够通过授权的应用连接发现模型的搜索工具配置。 |
| [#59033](https://github.com/openai/codex/pull/59033) | **添加网络搜索提供者元数据和配置** | 引入 `ModelInfo.web_search_provider`（`standalone` / `search_mcp`）和客户端配置暴露。 |
| [#59028](https://github.com/openai/codex/pull/59028) | **在 Guardian 审查中使用预准备的 MCP 所有者权限** | Guardian 审查现在使用捕获的权限，而非可能过时的实时权限。 |
| [#59025](https://github.com/openai/codex/pull/59025) | **移除代码模式中的严格第三方工具延迟** | 代码模式现在遵循命名空间排除和动态工具定义；移除严格的第三方工具延迟。 |
| [#59021](https://github.com/openai/codex/pull/59021) | **允许安装 ID 的并发读取** | 在共享锁下读取安装 ID；消除不必要的读取器序列化。 |
| [#59018](https://github.com/openai/codex/pull/59018) | **添加带有重新认证标签的 WebSocket 连接指标** | 新的 `codex.websocket.connect` 和 `codex.websocket.connect.duration_ms` 指标，带有 `reauth` 标签。 |

## 热门讨论

### 创意

| # | 讨论 | 摘要 |
|---|------|------|
| [#33682](https://github.com/openai/codex/discussions/33682) | **MCP 错误被系统性地忽视——这太疯狂了** | 社区对 MCP 堆栈中 OAuth 和工具发现错误持续数周未解决表示沮丧；22 👍 |
| [#59040](https://github.com/openai/codex/discussions/59040) | **提案：Codex 社区算力** | 利用空闲 PC 资源的共享 AI 基础设施提案（1 👍） |
| [#27754](https://github.com/openai/codex/discussions/27754) | **实验：用于可复用 AGENTS.md 的 Codex 插件** | 为 Codex 会话生成仓库本地指南映射的轻量级插件（4 👍） |

### 问答

| # | 讨论 | 摘要 |
|---|------|------|
| [#40773](https://github.com/openai/codex/discussions/40773) | **为什么 IntelliJ IDEA 终端中的用户输入区域这么暗？** | 用户报告 v0.149.1 中输入区域变暗的回归问题（2 💬） |
| [#58905](https://github.com/openai/codex/discussions/58905) | **如何配置 MCP 权限以进行选择性页面检查？** | 关于通过 Playwright MCP 允许导航/点击但禁用页面检查的问题 |
| [#16563](https://github.com/openai/codex/discussions/16563) | **版本 0.118 每次调用 MCP 时都需要持续授权** | 关于避免重复 MCP 授权提示的咨询 |

### 展示

| # | 讨论 | 摘要 |
|---|------|------|
| [#58912](https://github.com/openai/codex/discussions/58912) | **Codex 移动工作台** | 远程控制 Codex CLI 的自托管手机/PWA 界面（1 👍） |
| [#58492](https://github.com/openai/codex/discussions/58492) | **Bossanova：带 MCP 桥接的加密保险库** | 本地加密保险库，可选 MCP 桥接以保持 API 密钥不暴露在对话中（1 👍） |
| [#59032](https://github.com/openai/codex/discussions/59032) | **Turnfeed：Codex 构建的社交动态** | ChatGPT Sites 上分享 AI 体验的社交动态（1 👍） |
| [#58849](https://github.com/openai/codex/discussions/58849) | **code-review-skill：基于证据的代码审查** | 带可审计发现结果的 JSON 合并门代码审查技能（1 👍） |
| [#58834](https://github.com/openai/codex/discussions/58834) | **Friday：在独立 worktree 中运行 Codex 配合 Claude Code/Cursor** | MIT 许可的桌面应用，在隔离的 git worktree 中管理多个 AI 代理（1 👍） |
| [#58831](https://github.com/openai/codex/discussions/58831) | **Codex Hub：Codex CLI 的网页 UI** | 带有移动访问和代理间协调的浏览器 Codex CLI 会话管理器（1 👍） |
| [#58810](https://github.com/openai/codex/discussions/58810) | **为什么你们忽视 VS Code 用户？** | 社区对未解决的 VS Code 扩展 bug 的抱怨（1 👍） |

## 功能请求趋势

1. **工作区/项目范围限定** — 强烈需求将 VS Code 聊天、CLI 会话和线程历史限定到当前项目上下文（#25319）
2. **MCP 增强** — 代理可调用 MCP 重新连接/重新发现（#56970）、权限细化及 OAuth 可靠性
3. **跨设备线程连续性** — 跨连接桌面的本机线程访问（#58447）、远程会话可靠性（#53264）
4. **CLI/TUI 可用性** — 自动展开异步问题（#45846）、多后端主机轮换（#59007）
5. **浏览器工具可靠性** — Windows 特定的浏览器开关状态持久化修复（#54989、#56645、#57641）

## 开发者痛点

- **Windows 浏览器不稳定**：持续报告浏览器工具报告已禁用，尽管已启用开关；影响 CLI @Browser 和桌面应用工作流
- **远程桌面问题**：Windows 远程会话上的无项目聊天失败和线程同步问题
- **macOS 桌面回归**：XLSX 附件失败（#58302）、连接桌面的线程读取错误（#58447）、PPT 上传卡顿（#58252）
- **MCP OAuth/工具发现**：社区对未解决的 MCP 错误（#33682）表示沮丧
- **容量排队**：当模型达到容量时请求持久、可取消的队列（#50238）而非中断

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English GitHub digest into Chinese. I need to:

1. Translate all the text content
2. Keep all Markdown structure, tables, links, code references, issue numbers, etc.
3. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

**Title and Date:**
# Gemini CLI 社区动态
**日期：** 2026-11-03

**1. Today's Highlights**
- Latest release = 最新夜间版本
- subagent = 子代理
- MAX_TURNS = 最大回合数
- generalist agent = 通才代理
- Wayland = Wayland（保持不变）
- WSL2 = WSL2（保持不变）

Let me translate the whole thing carefully:</think>

# Gemini CLI 社区动态

**日期：** 2026-11-03

---

## 1. 今日要闻

最新夜间版本 **v0.67.0-nightly.20261103** 修复了一个关键的 Whisper 模型下载问题——此前被中断的下载会被错误地标记为已安装。与此同时，社区正在积极解决代理的可靠性问题——多个 P1 问题报告了子代理恢复失败、通才代理挂起，以及浏览器子代理在 Wayland 环境下崩溃等问题。多项 PR 正在推进子代理工具调用的 UI 可见性改进，并扩展 WSL2 平台支持。

---

## 2. 发布

| 版本 | 日期 | 变更 |
|------|------|------|
| [v0.67.0-nightly.20261103.g0ac57c029](https://github.com/google-gemini/gemini-cli/releases/tag/v0.67.0-nightly.20261103.g0ac57c029) | 2026-11-03 | **修复 (core):** 防止被中断的 Whisper 模型下载被错误标记为已安装 ([#30058](https://github.com/google-gemini/gemini-cli/pull/30058)) |

---

## 3. 热门问题

| Issue | 优先级 | 评论数 | 摘要 |
|-------|--------|--------|------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 13 | **子代理在 MAX_TURNS 后恢复时隐藏中断：** `codebase_investigator` 子代理在达到最大回合数未完成分析时仍报告 GOAL 成功，掩盖了失败。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | **零依赖 OS 沙箱与执行后意图路由：** 利用 Gemini 3 原生 bash 亲和力实现无依赖 OS 沙箱，并智能路由执行后意图的提案。 |
| [#21409](https://github.com/google-gemino/gemini-cli/issues/21409) | P1 | 8 | **通才代理无限挂起：** 当 Gemini CLI 交由通才代理处理时，会无限挂起——即使简单的文件夹创建任务也不例外。临时解决方案：指示模型避免使用子代理。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | **AST 感知的文件读取/搜索/映射：** 调研 AST 感知工具是否能提高方法边界检测精度并减少 token 噪音。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | **Gemini 使用技能和子代理不够充分：** 模型无法自主调用自定义技能（如 gradle、git），即使任务直接相关。 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 5 | **浏览器代理忽略 settings.json 覆盖：** 浏览器代理完全忽略全局或项目级 `settings.json` 中的 `maxTurns` 等配置覆盖。 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 | **浏览器代理韧性：** 请求在持久化模式下遇到锁定的浏览器配置文件时自动接管会话并恢复锁。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | **浏览器子代理在 Wayland 下失败：** 浏览器子代理在 Wayland 环境下崩溃。 |
| [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | P3 | 4 | **任务跟踪器的原生文件工具：** 用持久化文件 CRUD 操作替代上下文内任务跟踪的实验提案。 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | 4 | **符号链接代理无法识别：** `~/.gemini/agents/` 中的文件通过符号链接时无法识别为子代理。 |

---

## 4. 关键 PR 进展

| PR | 领域 | 规模 | 状态 | 摘要 |
|----|------|------|------|------|
| [#30094](https://github.com/google-gemini/gemini-cli/pull/30094) | core | M | OPEN | **在 UI 状态中显示正在执行的子代理工具调用：** 修复了不需要批准的子代理工具调用从 UI 状态中丢失的问题。 |
| [#30100](https://github.com/google-gemini/gemini-cli/pull/30100) | extensions | L/XL | OPEN | **处理扩展发布下载期间的流失败：** 添加 SSRF/重定向加固、套接字超时和部分文件清理。 |
| [#29831](https://github.com/google-gemini/gemini-cli/pull/29831) | agent | M/L | CLOSED | **将 ripgrep 搜索超时呈现为错误：** 修复超时后静默返回部分结果为"未找到匹配项"的问题。 |
| [#29958](https://github.com/google-gemini/gemini-cli/pull/29958) | non-interactive | S | OPEN | **向 ACP 客户端发送 AnsiOutput 结果的 shell 输出：** 修复 PTY 结果的 `tool_call_update` 为空的问题。 |
| [#29953](https://github.com/google-gemini/gemini-cli/pull/29953) | core | S/M | OPEN | **跟踪泄漏的 VSCode  disposables：** 修复 `gemini.diff.accept` 和 `onDidChangeWorkspaceFolders` 未注册的问题。 |
| [#29951](https://github.com/google-gemini/gemini-cli/pull/29951) | platform | M | OPEN | **重试瞬态 VS Code 下载失败：** 在集成测试中下载 VS Code 时重试网络超时。 |
| [#29960](https://github.com/google-gemini/gemini-cli/pull/29960) | enterprise | S | OPEN | **使用 CLI 版本进行遥测：** 将 OpenTelemetry `SERVICE_VERSION` 设为 CLI 版本而非 Node 运行时。 |
| [#30102](https://github.com/google-gemini/gemini-cli/pull/30102) | enterprise | S | OPEN | **使用 ide_connection 事件记录 IDE 连接：** 通过使用正确的事件名称修复会话计数膨胀问题。 |
| [#30104](https://github.com/google-gemini/gemini-cli/pull/30104) | agent | S | OPEN | **/skills link 后刷新斜杠命令：** 链接新技能后技能列表未重新显示。 |
| [#30095](https://github.com/google-gemini/gemini-cli/pull/30095) | security | L | OPEN | **防止 Windows git diff 权限绕过：** 修复 Windows Git 命令安全绕过——危险参数被错误视为安全。 |
| [#30097](https://github.com/google-gemini/gemini-cli/pull/30097) | agent | L | OPEN | **WSL2 上的图片粘贴：** 修复 WSLg 剪贴板检测并添加 BMP 后备方案。 |

---

## 5. 功能请求趋势

根据问题分析，最受关注的功能方向如下：

1. **代理自主性与工具调用**：多次请求模型能够自主使用技能、子代理和工具，无需显式提示。
2. **AST/代码库智能**：对 AST 感知的文件读取、搜索和映射有强烈兴趣，以减少 token 消耗并提高精度。
3. **增强型浏览器代理**：韧性功能（自动会话接管、锁恢复）、Wayland 支持以及配置覆盖合规性。
4. **沙箱与安全**：零依赖 OS 沙箱以及改进的 Git 命令安全验证。
5. **持久化任务跟踪**：基于文件的待办事项列表，替代上下文内跟踪，可在会话重启后保留。
6. **平台扩展**：WSL2（尤其是 WSLg）的剪贴板和图片粘贴功能支持。

---

## 6. 开发者痛点

| 痛点 | 频率 | 影响 |
|------|------|------|
| **代理挂起/冻结** | 高（3+ 问题） | 阻塞工作流；需要强制终止 |
| **子代理静默失败** | 高 | 达到 MAX_TURNS 限制后仍报告 GOAL 成功 |
| **配置被忽略** | 中 | 浏览器代理及其他组件忽略 settings.json |
| **符号链接处理** | 低但反响大 | 破坏代理发现工作流 |
| **环境变量默认值** | 中 | 当 VAR 为空时 `${VAR:-default}` 解析不正确 |
| **工具调用可见性** | 中 | 子代理工具调用缺失于 UI 状态 |
| **部分搜索结果** | 中 | Ripgrep 超时返回误导性的"无匹配项" |

---

*数据来源：google-gemini/gemini-cli GitHub 仓库，2026-11-03*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese. Let me follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate:

---

# GitHub Copilot CLI 社区简报

**日期：** 2026-11-03

---

## 1. 今日要闻

Copilot CLI 团队在 24 小时内连发三个补丁版本（v1.0.106-3/4/5），带来了会话管理增强、@file 提及功能改进以及关键 ACP 模式修复。社区活跃度持续高涨，共有 47 个活跃 Issue，其中包括一项关于在 BYOK 场景下切换多模型的热门需求，以及一条新增的 PR——提议为调试会话流添加一个只读的 Agent 监控 TUI。

---

## 2. 版本发布

**v1.0.106-5** (2026-11-02)
- **修复：** 现在 ACP 模式下 `includeCoAuthoredBy: false` 配置会被正确遵守——ACP 客户端不再指示 Agent 为提交添加 Co-authored-by 尾注
- **修复：** 定向的 /settings 命令现在会立即显示所选设置


- **修复：** 恢复会话时若遥测已禁用，现在会正确发出警告

**v1.0.106-4** (2026-11-02)
- **修复：** 空会话不再在消失前短暂闪入会话选择器
- **修复：** 写在括号、方括号、大括号、尖括号、引号或反引号内的 @file 提及现在可以正确附加，并在 shell 命令中展开

**v1.0.106-3** (2026-11-02)
- **新增：** 为已选择加入的本地会话提供可选的会话管理工具和 @提及功能
- **改进：** 托管账户策略刷新警告现在包含策略助手的相关发现

---

## 3. 热门 Issue

| # | Issue | 摘要 | 点赞 |
|---|-------|---------|-----------|
| **#1857** | [允许用户取消或移除排队中的消息](https://github.com/github/copilot-cli/issues/1857) | 用户无法在 Agent 忙碌时或 `/compact` 期间通过 `Ctrl+Q`/`Ctrl+Enter` 取消或移除排队的消息。消息一旦排队入列，会按顺序自动处理。 | 👍 33 |
| **#3709** | [允

许 /model 在多个模型之间切换，包括 BYOK/本地模型](https://github.com/github/copilot-cli/issues/3709) | BYOK 模式通过 `COPILOT_MODEL` 将会话固定到单一模型；/model 选择器只列出 GitHub 托管的模型，不包含已配置的本地 BYOK 提供商。 | 👍 34 |
| **#5112** | [在交互式 CLI 中支持 OSC 7501 程序状态](https://github.com/github/copilot-cli/issues/5112) | 建议发出 OSC 7501 程序状态协议报告（工作中、阻塞、空闲），以便支持相关功能的终端能更好地显示 Agent 状态。 | 👍 11 |
| **#5171** | [NumLock 关闭时数字键盘导航和 Delete 键被忽略](https://github.com/github/copilot-cli/issues/5171) | 回归问题：在 Windows 11 上关闭 NumLock 后，数字键盘 4/8/6/2 无法在 Copilot 提示符中移动光标。 | 👍 1 |
| **#3015** | [MCP JSON-RPC 工具调用时 Authorization 头被丢弃](https://github.com/github/copilot-cli/issues/3015) | OAuth 2.1 + DCR 流程成功后，Copilot 在 `initialize` 时发送 Authorization 头，但后续的 `tools/list` 和 `tools/call` 请求中缺少该头。 | 👍 2 |
| **#5145** | [思考模式下出现 400 `reasoning_text` 错误](https://github.com/github/copilot-cli/issues/5145) | 使用自定义 OpenAI 兼容提供商的会话在使用 `wireApi: "responses"` 时，在运行时合成的助手轮次后以 HTTP 400 崩溃。 | 👍 2 |
| **#4646** | [自定义模型上 compaction 失败并报"Tool choice must be auto"](https://github.com/github/copilot-cli/issues/4646) | 会话压缩（`/compact` 或自动压缩）在任何自定义模型上都因 CAPIError 失败。 | 👍 1 |
| **#5304** | [WSL2 中的 /keep-alive 无法阻止 Windows 主机休眠](https://github.com/github/copilot-cli/issues/5304) | WSL2 尝试使用 `systemd-inhibit`，这不会创建通过 `powercfg -requests` 可见的 Windows 主机电源请求。 | 👍 0 |
| **#5318** | [Copilot CLI grep 压缩破坏文件名和行号](https://github.com/github/copilot-cli/issues/5318) | 内置 rg 工具在输出压缩错误地将数字后缀解释为 grep 字段分隔符时，返回错误的文件名/行号。 | 👍 0 |
| **#5319** | [云

中继会话不可用](https://github.com/github/copilot-cli/issues/5319) | 会话列表中出现的现有云会话打开后显示"云中继会话在此 CLI 配置中不可用。" | 👍 0 |

---

## 4. 关键 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| **#5339** | [添加只读 Agent 监控 TUI（图表 + 时间线）](https://github.com/github/copilot-cli/pull/5339) | 在 `tools/agent-monitor` 下新增独立的终端查看器，用于显示选定的本地会话。呈现哪些 Agent 启动了什么、谁在等待谁以及等待时长。 |
| **#5321** | [添加 ADJU PHONE CAMERA Windows 应用](https://github.com/github/copilot-cli/pull/5321) | Windows 桌面应用，通过本地 Wi-Fi 将 Android/iPhone 摄像头画面连接到 PC，使用 PIN 授权的 WebSocket 信令和 WebRTC 视频连接。 |

---

## 5. 功能需求趋势

根据 Issue 态势，最集中的功能需求方向包括：

1. **多模型 / BYOK 灵活性** — 用户希望 /model 命令能够枚举并切换本地 BYOK 提供商和自定义端点，而不仅是 GitHub 托管的模型。
2. **会话管理增强** — 取消排队消息、会话故障恢复、以及改进会话选择器行为的需求。
3. **终端集成** — OSC 7501 程序状态支持、更好的终端调整大小/自动换行处理，以及 TUI 状态可见性。
4. **ACP/非交互模式对

齐** — 交互模式与 ACP（自定义技能、会话命令、`skillDirectories` 等设置）之间的功能差距导致自动化工作流中断。
5. **平台特定修复** — Windows 输入处理（NumLock）、崩溃漏洞（0xc0000005）以及 WSL2 电源管理缺陷令 Windows 开发者感到沮丧。

---

## 6. 开发者痛点

- **ACP 模式不一致**：多个 Issue（#5133、#5268、#5269、#4700）报告设置、技能和会话命令在交互模式下正常工作但在 ACP（`--acp`）中失效，破坏了自动化工作流。
- **自定义模型故障**：压缩和思考模式在与自定义/OpenAI 兼容模型一起使用时崩溃，限制了使用本地或第三方提供商的开发者的灵活性。
- **Windows 体验**：NumLock 输入回归、崩溃漏洞（0xc0000005）以及 WSL2 电源管理缺陷让 Windows 开发者感到沮丧。
- **MCP OAuth**：成功认证后的 Authorization 头处理存在 bug，阻碍了安全的 MCP 服务器集成。
- **会话丢失**：无 ID 恢复会进入新的空会话，丢失上下文；飞行中的轮次在崩溃时丢失且未清理。

---

*简报结束*</think>



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this OpenCode Community Digest from English to Simplified Chinese. I need to:

1. Translate all the content to Simplified Chinese
2. Keep all the Markdown structure exactly the same
3. Keep URLs, issue/PR references (#59387), code identifiers, file paths, etc. in their original form
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me go through and translate while preserving the structure:

- Title: OpenCode Community Digest — 2026-11-03 → OpenCode 社区周刊 — 2026-11-03
- Today's Highlights section
- Releases section
- Hot Issues section - translate descriptions but keep numbers, links, emojis
- Key PR Progress section - translate descriptions
- Feature Request Trends section
- Developer Pain Points section
- Footer/Generator note

I need to be careful to:
- Not translate the "Rules" at the end - this is user instruction, not content to translate
- Keep all formatting (headings, bold, etc.)
- Keep the emoji 👍 as is
- Keep URLs and # references</think>

# OpenCode 社区周刊 — 2026-11-03

## 今日要闻

OpenCode 社区在十一月初持续活跃，多个高影响力问题正在推进。免费套餐仍是讨论焦点，issue #59387 已累计 214 条评论——用户反映使用限额和重置的各种问题。与此同时，贡献者们已推出一系列重要改进，包括更准确的 CJK Token 估算、改进的会话标题向 ACP 客户端传播机制，以及修复 git clone 项目身份冲突问题。生态系统中还新增了 Totem MCP 和 TrendsAGI MCP 服务器集成。

---

## 发布更新

过去 24 小时内无新版本发布。

---

## 热门 Issue

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387)** — **免费套餐问题：请先阅读本文** *(214 条评论，17 个 👍)*
   免费套餐问题的主要跟踪 Issue。用户报告"免费使用量已超出"错误、重置不生效，以及桌面应用问题。作为免费套餐调试的中心枢纽——随着团队处理积压问题，预计会持续有新的活动。

2. **[#52958](https://github.com/anomalyco/opencode/issues/52958)** — **OpenCode Go 订阅：所有支付方式在意大利（欧盟）均被拒绝** *(14 条评论，2 个 👍，已关闭)*
   欧盟用户的重大阻碍——意大利订阅者无法通过任何方式（信用卡、Apple Pay、Stripe Link）完成支付。现已关闭，可能已解决。

3. **[#43250](https://github.com/anomalyco/opencode/issues/43250)** — **代理驱动的会话中未遵守 keep.tokens 设置** *(8 条评论，1 个 👍)*
   `keep.tokens` 设置（默认 15K）在代理会话中经常被超出 5–15 倍，导致无限制的上下文增长。这影响了长时间运行的代理工作流的会话性能和成本。

4. **[#52154](https://github.com/anomalyco/opencode/issues/52154)** — **按会话隔离消息历史** *(8 条评论，5 个 👍)*
   多会话用户报告按向上箭头召回的是错误会话的最后一条消息。是一个广受期待的多会话高级用户体验改进。

5. **[#51191](https://github.com/anomalyco/opencode/issues/51191)** — **嵌套项目文件夹中的会话在 git 仓库根目录打开** *(7 条评论，3 个 👍)*
   在子目录中启动会话会错误地解析到仓库根目录，导致 `.opencode/skills/` 无法发现。影响 monorepo 和嵌套项目工作流。

6. **[#61072](https://github.com/anomalyco/opencode/issues/61072)** — **Claude Agent：5 小时套餐限额消耗速度约为 1.8 倍** *(6 条评论，1 个 👍)*
   SDK 将请求标记为 `sdk-ts`，导致 Claude 的套餐限额消耗速度比 Claude Code TUI 中等效工作快 1.8 倍。对 Claude Agent 用户有直接的成本影响。

7. **[#61304](https://github.com/anomalyco/opencode/issues/61304)** — **OPENBOTJR 错误关闭 issue** *(5 条评论)*
   社区对 triaging 机器人错误关闭已有回复的 issue 表示不满，且无法 @提及或纠正。这是一个流程自动化 bug，导致社区参与摩擦。

8. **[#44160](https://github.com/anomalyco/opencode/issues/44160)** — **桌面端 deep link 创建会话不生效** *(5 条评论，1 个 👍，已关闭)*
   旨在启动桌面应用中新建会话的 deep link 无法正常工作——是外部集成和工作流的阻碍。

9. **[#61077](https://github.com/anomalyco/opencode/issues/61077)** — **请求在美国/欧盟托管 DeepSeek V4.1 Flash / V4 Pro** *(5 条评论，已关闭)*
   避免使用中国托管的 DeepSeek 模型端点的功能请求。现已关闭——可能已解决或合并到其他工作中。

10. **[#49286](https://github.com/anomalyco/opencode/issues/49286)** — **/handoff — 在新上下文中继续长会话** *(4 条评论)*
    在不重新进行 LLM 摘要的情况下继续会话的功能提案，解决长时间会话的上下文疲劳问题。建立在 `/compact` 之上，但提供更干净的切换方式。

---

## 关键 PR 进展

1. **[#60698](https://github.com/anomalyco/opencode/pull/60698)** — **feat(server): 添加实验性任务列表端点** *(贡献者)*
   通过 HTTP 暴露后台任务注册表（shell、子代理、图像），便于 CLI 和 SDK 观察——实现更好的异步工作流监控。

2. **[#60699](https://github.com/anomalyco/opencode/pull/60699)** — **fix(cli): opencode run 中等待后台任务** *(贡献者)*
   确保 `opencode run` 在后台任务仍在运行时不会提前退出。

3. **[#54713](https://github.com/anomalyco/opencode/pull/54713)** — **fix(core): 项目错误作为终端代理失败处理**
   修复子代理错误处理中显式 `error` 完成原因被错误报告为成功完成的问题。

4. **[#61324](https://github.com/anomalyco/opencode/pull/61324)** — **docs: 将 Totem MCP 集成添加到生态项目**
   添加 Totem MCP 集成，用于跨独立运营代理的持久化代理消息和 Mission。

5. **[#61204](https://github.com/anomalyco/opencode/pull/61204)** — **fix(core): 按脚本估算韩文和 CJK 文本**
   Token 估算现在将韩文按 0.65、其他 CJK 按 0.6 个 token 计算——对非拉丁语言更加准确。

6. **[#61315](https://github.com/anomalyco/opencode/pull/61315)** — **fix(acp): 向客户端转发会话标题更新**
   ACP 客户端现在通过 `session_info_update` 接收会话标题更新，消除了编程客户端的可见性缺口。

7. **[#61311](https://github.com/anomalyco/opencode/pull/61311)** — **feat(app): 在设置中显示模型使用情况**
   设置 → 模型现在显示哪些已配置的模型实际被使用过——虽小但有用的可用性改进。

8. **[#61317](https://github.com/anomalyco/opencode/pull/61317)** — **fix(core): 为独立的 git clone 分配不同的项目身份**
   修复将同一仓库克隆到多个位置时的项目身份冲突问题——解决了长期存在的 issue #35674、#29869 及相关问题。

9. **[#60867](https://github.com/anomalyco/opencode/pull/60867)** — **feat(app: 添加独立的侧边栏模式**
   新增可选的第四种界面模式用于并行工作——取代了之前的尝试 (#60446)。

10. **[#55261](https://github.com/anomalyco/opencode/pull/55261)** — **feat(tui): 添加提示历史范围设置**
    新增 `prompt.history_scope` 配置：`global`（默认，当前行为）或 `session`（仅当前会话）——直接解决 issue #52154。

---

## 功能请求趋势

从 Issue 积压中可以看出几个反复出现的主题：

- **会话管理**：消息历史隔离（#52154）、桌面端会话固定（#55764）、以及无需重新摘要的会话切换（#49286）都针对更好地处理长时间或多会话工作流。
- **模型/提供商改进**：更透明的定价（Copilot 长上下文套餐已在 #59803 中修正）、DeepSeek 托管选项（#61077）、以及设置中的模型使用追踪（#61311）表明团队关注成本和透明度。
- **后台与编排**：后台子代理、监控、定时任务和工作树隔离的提案（#49842）表明对代理编排的需求超过了单会话使用。
- **MCP 生态**：新集成（Totem、TrendsAGI）和 OAuth 处理修复（#61161）反映了不断增长的 MCP 采用。

---

## 开发者痛点

- **免费套餐稳定性**：主要痛点——免费套餐（#59387）产生大量流量，且对使用量追踪、重置和套餐限额感到沮丧。
- **支付与访问**：欧盟支付问题（#52958）和 DeepSeek 的全球区域路由（#61077）凸显了地理访问摩擦。
- **Bot/Triage 质量**：OPENBOTJR 错误关闭 issue（#61304）损害了社区对分类流程的信任。
- **上下文与 Token 管理**：keep.tokens 未遵守（#43250）和并行代理之间的缓存淘汰（#61318）导致意外的成本和性能问题。
- **嵌套项目处理**：子目录中的会话解析到仓库根目录（#51191、#61303）破坏了 monorepo 用户的预期行为。
- **ACP/SDK 问题**：模型配置响应反映之前的选中状态（#60316、#61302）和 JSON 解析错误（#50753）导致编程用户无法使用会话。

---

*数据来源：GitHub - anomalyco/opencode — 2026-11-03*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest from English to Chinese (Simplified Chinese - zh-CN). I need to:

1. Translate all the text content while preserving the exact Markdown structure
2. Keep URLs, issue numbers, code references, project names, etc. exactly as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation without any preamble or explanation

Let me go through and translate section by section, maintaining the structure:

- Headings
- Tables (with column alignment)
- Lists
- Bold/italic
- Horizontal rules
- Emoji
- URLs
- Issue/PR references

Let me translate this carefully:

---

# Pi 社区摘要 — 2026-11-03

## 今日要闻

Pi 项目发布 v1.5.0，新增扩展更新日志功能，同时多个性能和兼容性问题引发关注：Mac 长时间会话下 CPU 占用过高 (#7730)，完整转录帧重绘bug (#9549)，以及 npm 搜索未对新发布的 pi 包建立索引导致无法发现 (#7885)。社区合并了 10 个 PR，修复了 token 限制、grep 内存溢出和自更新报告等问题。

---

## 版本发布

**v1.5.0** — *扩展更新日志*  
包作者现可定义 changelog 路径，用户在更新后下次启动时可查看扩展的变化内容。`collapseChangelog` 选项可折叠通知。（[查看发布](https://github.com/earendil-works/pi/releases/tag/v1.5.0)）

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **Mac OS 长时间会话 CPU 占用过高** — 长时间会话 CPU 波动 50-110%，内存占用 600-800MB；似乎与上下文大小相关。 | 影响 macOS 核心体验；23 条评论，11 👍。| 🔥 进行中 |


| # | Issue | 内容 | 反馈 |
|---|-------|------|------|
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm 搜索未对新发布的 pi-packages 建立索引** — 新发布的包在 `npm search` 中不显示，导致 pi.dev/packages 画廊无法发现。 | 破坏扩展生态的发现机制。| ✓ 已关闭 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **大型转录每帧重绘** — 全屏模式下每次调整大小时都会重新渲染整个转录；占满 1 个 CPU 核心。 | 核心 TUI 性能回归；17 条评论。| 🔥 进行中 |
| [#10497](https://github.com/earendil-works/pi/issues/10497) | **OpenRouter 400 错误** — 请求超过 1M token 上下文限制，导致验证失败。 | 文件注入扩展常见问题；15 条评论。| ✓ 已关闭 |
| [#8834](https://github.com/earendil-works/pi/issues/8834) | **可选的包命名空间 (`pi.namespace`)** — 技能和提示模板将加载在统一的 `<namespace>:<name>` 命名空间下。 | 主要可扩展性改进；15 条评论。| ✓ 已关闭 |
| [#10956](https://github.com/earendil-works/pi/issues/10956) | **cacheWarming "idle" 静默停止** — 当上下文中包含自定义/压缩消息时，预热任务从不触发；所有决策都在 `continuationProbability: 1` 时进行。 | 破坏预期的缓存行为；11 条评论。| 🔥 开启 |
| [#11021](https://github.com/earendil-works/pi/issues/11021) | **ChatGPT 登录使用 272K 上下文，尽管目录显示 500K** — 报告的上下文窗口小于服务器公告。 | 7 👍 — 影响 Copilot 集成准确性。| 🔥 开启 |
| [#11527](https://github.com/earendil-works/pi/issues/11527) | **Bedrock：每次请求都创建新客户端** — 每次调用都创建新的 `BedrockRuntimeClient`（并循环凭据验证）。 | AWS 用户的性能和成本问题；5 条评论。| 🔥 开启 |
| [#9276](https://github.com/earendil-works/pi/issues/9276) | **grep 工具带上下文行导致 OOM** — 将匹配文件读入内存（不仅仅是输出），导致堆耗尽。 | 生产环境可靠性问题；4 条评论。| 🔥 进行中 |
| [#11687](https://github.com/earendil-works/pi/issues/11687) | **升级到 1.5.0 后工具调用失败，显示 `basispoints_tool_arguments_stamped`** — 工具参数生成回归。 | 新报告的升级阻断器。| 🔥 开启 |

---

## 关键 PR 进展

| PR | 摘要 | 状态 |
|----|------|------|
| [#11545](https://github.com/earendil-works/pi/pull/11545) | **Anthropic 消息线程** — 服务端会话续接，当启用会话 ID + 缓存时，仅发送新消息而非完整历史记录。 | 开启 |
| [#11712](https://github.com/earendil-works/pi/pull/11712) | **修复 OpenRouter 输入过度计数** — 为 OpenRouter 的分词器预留更多 token 空间（高达 12% 差异）；修复了对输出限制严格模型的拒绝。 | 已关闭 |
| [#11711](https://github.com/earendil-works/pi/pull/11711) | **仅在 pi update 检查时才报告包已更新** — 防止虚假的"已是最新"提示。 | 已关闭 |
| [#11705](https://github.com/earendil-works/pi/pull/11705) | **从 ripgrep 获取 grep 上下文** — 直接从 rg 读取上下文行，而非加载整个匹配文件；修复 OOM。 | 开启 |
| [#11709](https://github.com/earendil-works/pi/pull/11709) | **npm/pnpm/yarn/bun 自更新后报告安装版本** — 验证实际安装版本，而非声明的版本。 | 已关闭 |
| [#11707](https://github.com/earendil-works/pi/pull/11707) | **在 `pi update` 中列出版本有变化的已更新包** — 显示哪些扩展已更改及变更后的版本。 | 已关闭 |
| [#11704](https://github.com/earendil-works/pi/pull/11704) | **在 AGENTS.md 中要求向后兼容性** — 公共 API 在主版本外保持兼容；标记待清理的存根。 | 开启 |
| [#11679](https://github.com/earendil-works/pi/pull/11679) | **为 GitHub Copilot 添加 Microsoft-Decision-1 分类器** — 新的 `typesafe-system-one` 分类器。 | 已关闭 |
| [#11629](https://github.com/earendil-works/pi/pull/11629) | **添加 `PI_SELF_UPDATE_COMMAND` 和 `selfUpdateCommand`** — 允许包装器（mise, Nix）提供自定义更新逻辑。 | 已关闭 |
| [#9274](https://github.com/earendil-works/pi/pull/9274) | **保留渲染差异中的缩进** — 修复在未更改内容前插入文本时缩进丢失的问题。 | 开启进行中 |

---

## 热门讨论

### 想法
| # | 讨论 | 摘要 |
|---|------|------|
| [#4444](https://github.com/earendil-works/pi/discussions/4444) | **支持 Agent Client Protocol (ACP)** — Pi 的 headless RPC 模式是 pi 特有的；ACP 为 agent-to-editor 通信提供标准。 | 47 👍, 5 条评论 |

### 展示与分享
| # | 讨论 | 摘要 |
|---|------|------|
| [#11404](https://github.com/earendil-works/pi/discussions/11404) | **官方 pi 代码 agent 沙箱 via docker?** — 来自 "sbx" 的四个 Docker 镜像（sbx/pi, pi-mixin, pi-image, pi-kit）出现在 Docker Hub 上。社区寻求确认。 | 2 条评论 |

---

## 功能需求趋势

从 issue 和讨论中，以下方向持续出现需求：

1. **包发现和命名空间** — 可选命名空间支持 (#8834)，npm 搜索修复 (#7885)
2. **性能/扩展** — CPU 回归修复 (#7730)，转录渲染 (#9549)，grep 内存 (#9276)，Bedrock 客户端复用 (#11527)
3. **远程/无头 TUI** — 连接到其他机器会话的原生 TUI (#11715)
4. **国际化** — TUI 中的阿拉伯语 RTL 渲染 (#11579)
5. **协议标准化** — 编辑器集成的 ACP 支持 (#4444)
6. **持久执行** — 截止时间前唤醒睡眠任务 (#11683)

---

## 开发者痛点

- **扩展生态摩擦**：npm 搜索未对新包建立索引阻断发现；开发者无法让自己的扩展被列出
- **升级回归**：1.5.0 引入工具参数卡顿 (#11687) 和公共 API 潜在破坏性变更 (#11704)
- **规模化内存问题**：长时间会话导致 CPU 飙升，grep 上下文 OOM，转录重绘
- **AWS/Copilot 集成问题**：Bedrock 客户端开销，ChatGPT 上下文窗口不匹配
- **OAuth token 脆弱性**：进程停止后刷新 token 丢失 (#11692)，符号链接路径问题 (#11655)
- **编辑器 UX bug**：IME 多字符提交 (#11177)，新命令后旧输入仍可见 (#11264)

---

*摘要基于 GitHub 数据生成 — earendil-works/pi*

---

## 规则：
- 仅输出翻译内容。不添加前言、解释或整个输出的 markdown 标记。
- 严格保留 Markdown 结构：标题、表格（含列对齐行）、列表、引用、粗体/斜体、水平线。
- 保留网址、链接目标、代码片段、代码块、数字和日期原样。
- 保持项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原样——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文，开发者新闻通讯的语域——而非逐字直译。

# Pi 社区摘要 — 2026-11-03

## 今日要闻

Pi 项目发布 v1.5.0，新增扩展更新日志功能，同时多个性能和兼容性问题引发关注：Mac 长时间会话下 CPU 占用过高 (#7730)，完整转录帧重绘bug (#9549)，以及 npm 搜索未对新发布的 pi 包建立索引导致无法发现 (#7885)。社区合并了 10 个 PR，修复了 token 限制、grep 内存溢出和自更新报告等问题。

---

## 版本发布

**v1.5.0** — *扩展更新日志*  
包作者现可定义 changelog 路径，用户在更新后下次启动时可查看扩展的变化内容。`collapseChangelog` 选项可折叠通知。（[查看发布](https://github.com/earendil-works/pi/releases/tag/v1.5.0)）

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **Mac OS 长时间会话 CPU 占用过高** — 长时间会话 CPU 波动 50-110%，内存占用 600-800MB；似乎与上下文大小相关。 | 影响 macOS 核心体验；23 条评论，11 👍。| 🔥 进行中 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm 搜索未对新发布的 pi-packages 建立索引** — 新发布的包在 `npm search` 中不显示，导致 pi.dev/packages 画廊无法发现。 | 破坏扩展生态的发现机制。| ✓ 已关闭 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **大型转录每帧重绘** — 全屏模式下每次调整大小时都会重新渲染整个转录；占满 1 个 CPU 核心。 | 核心 TUI 性能回归；17 条评论。| 🔥 进行中 |
| [#10497](https://github.com/earendil-works/pi/issues/10497) | **OpenRouter 400 错误** — 请求超过 1M token 上下文限制，导致验证失败。 | 文件注入扩展常见问题；15 条评论。| ✓ 已关闭 |
| [#8834](https://github.com/earendil-works/pi/issues/8834) | **可选的包命名空间 (`pi.namespace`)** — 技能和提示模板将加载在统一的 `<namespace>:<name>` 命名空间下。 | 主要可扩展性改进；15 条评论。| ✓ 已关闭 |
| [#10956](https://github.com/earendil-works/pi/issues/10956) | **cacheWarming "idle" 静默停止** — 当上下文中包含自定义/压缩消息时，预热任务从不触发；所有决策都在 `continuationProbability: 1` 时进行。 | 破坏预期的缓存行为；11 条评论。| 🔥 开启 |
| [#11021](https://github.com/earendil-works/pi/issues/11021) | **ChatGPT 登录使用 272K 上下文，尽管目录显示 500K** — 报告的上下文窗口小于服务器公告。 | 7 👍 — 影响 Copilot 集成准确性。| 🔥 开启 |
| [#11527](https://github.com/earendil-works/pi/issues/11527) | **Bedrock：每次请求都创建新客户端** — 每次调用都创建新的 `BedrockRuntimeClient`（并循环凭据验证）。 | AWS 用户的性能和成本问题；5 条评论。| 🔥 开启 |
| [#9276](https://github.com/earendil-works/pi/issues/9276) | **grep 工具带上下文行导致 OOM** — 将匹配文件读入内存（不仅仅是输出），导致堆耗尽。 | 生产环境可靠性问题；4 条评论。| 🔥 进行中 |
| [#11687](https://github.com/earendil-works/pi/issues/11687) | **升级到 1.5.0 后工具调用失败，显示 `basispoints_tool_arguments_stamped`** — 工具参数生成回归。 | 新报告的升级阻断器。| 🔥 开启 |

---

## 关键 PR 进展

| PR | 摘要 | 状态 |
|----|------|------|
| [#11545](https://github.com/earendil-works/pi/pull/11545) | **Anthropic 消息线程** — 服务端会话续接，当启用会话 ID + 缓存时，仅发送新消息而非完整历史记录。 | 开启 |
| [#11712](https://github.com/earendil-works/pi/pull/11712) | **修复 OpenRouter 输入过度计数** — 为 OpenRouter 的分词器预留更多 token 空间（高达 12% 差异）；修复了对输出限制严格模型的拒绝。 | 已关闭 |
| [#11711](https://github.com/earendil-works/pi/pull/11711) | **仅在 pi update 检查时才报告包已更新** — 防止虚假的"已是最新"提示。 | 已关闭 |
| [#11705](https://github.com/earendil-works/pi/pull/11705) | **从 ripgrep 获取 grep 上下文** — 直接从 rg 读取上下文行，而非加载整个匹配文件；修复 OOM。 | 开启 |
| [#11709](https://github.com/earendil-works/pi/pull/11709) | **npm/pnpm/yarn/bun 自更新后报告安装版本** — 验证实际安装版本，而非声明的版本。 | 已关闭 |
| [#11707](https://github.com/earendil-works/pi/pull/11707) | **在 `pi update` 中列出版本有变化的已更新包** — 显示哪些扩展已更改及变更后的版本。 | 已关闭 |
| [#11704](https://github.com/earendil-works/pi/pull/11704) | **在 AGENTS.md 中要求向后兼容性** — 公共 API 在主版本外保持兼容；标记待清理的存根。 | 开启 |
| [#11679](https://github.com/earendil-works/pi/pull/11679) | **为 GitHub Copilot 添加 Microsoft-Decision-1 分类器** — 新的 `typesafe-system-one` 分类器。 | 已关闭 |
| [#11629](https://github.com/earendil-works/pi/pull/11629) | **添加 `PI_SELF_UPDATE_COMMAND` 和 `selfUpdateCommand`** — 允许包装器（mise, Nix）提供自定义更新逻辑。 | 已关闭 |
| [#9274](https://github.com/earendil-works/pi/pull/9274) | **保留渲染差异中的缩进** — 修复在未更改内容前插入文本时缩进丢失的问题。 | 开启进行中 |

---

## 热门讨论

### 想法
| # | 讨论 | 摘要 |
|---|------|------|
| [#4444](https://github.com/earendil-works/pi/discussions/4444) | **支持 Agent Client Protocol (ACP)** — Pi 的 headless RPC 模式是 pi 特有的；ACP 为 agent-to-editor 通信提供标准。 | 47 👍, 5 条评论 |

### 展示与分享
| # | 讨论 | 摘要 |
|---|------|------|
| [#11404](https://github.com/earendil-works/pi/discussions/11404) | **官方 pi 代码 agent 沙箱 via docker?** — 来自 "sbx" 的四个 Docker 镜像（sbx/pi, pi-mixin, pi-image, pi-kit）出现在 Docker Hub 上。社区寻求确认。 | 2 条评论 |

---

## 功能需求趋势

从 issue 和讨论中，以下方向持续出现需求：

1. **包发现和命名空间** — 可选命名空间支持 (#8834)，npm 搜索修复 (#7885)
2. **性能/扩展** — CPU 回归修复 (#7730)，转录渲染 (#9549)，grep 内存 (#9276)，Bedrock 客户端复用 (#11527)
3. **远程/无头 TUI** — 连接到其他机器会话的原生 TUI (#11715)
4. **国际化** — TUI 中的阿拉伯语 RTL 渲染 (#11579)
5. **协议标准化** — 编辑器集成的 ACP 支持 (#4444)
6. **持久执行** — 截止时间前唤醒睡眠任务 (#11683)

---

## 开发者痛点

- **扩展生态摩擦**：npm 搜索未对新包建立索引阻断发现；开发者无法让自己的扩展被列出
- **升级回归**：1.5.0 引入工具参数卡顿 (#11687) 和公共 API 潜在破坏性变更 (#11704)
- **规模化内存问题**：长时间会话导致 CPU 飙升，grep 上下文 OOM，转录重绘
- **AWS/Copilot 集成问题**：Bedrock 客户端开销，ChatGPT 上下文窗口不匹配
- **OAuth token 脆弱性**：进程停止后刷新 token 丢失 (#11692)，符号链接路径问题 (#11655)
- **编辑器 UX bug**：IME 多字符提交 (#11177)，新命令后旧输入仍可见 (#11264)

---

*摘要基于 GitHub 数据生成 — earendil-works/pi*</think>

# Pi 社区摘要 — 2026-11-03

## 今日要闻

Pi 项目发布 v1.5.0，新增扩展更新日志功能，同时多个性能和兼容性问题引发关注：Mac 长时间会话下 CPU 占用过高 (#7730)，完整转录帧重绘 bug (#9549)，以及 npm 搜索未对新发布的 pi 包建立索引导致无法发现 (#7885)。社区合并了 10 个 PR，修复了 token 限制、grep 内存溢出和自更新报告等问题。

---

## 版本发布

**v1.5.0** — *扩展更新日志*  
包作者现可定义 changelog 路径，用户在更新后下次启动时可查看扩展的变化内容。`collapseChangelog` 选项可折叠通知。（[查看发布](https://github.com/earendil-works/pi/releases/tag/v1.5.0)）

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **Mac OS 长时间会话 CPU 占用过高** — 长时间会话 CPU 波动 50-110%，内存占用 600-800MB；似乎与上下文大小相关。 | 影响 macOS 核心体验；23 条评论，11 👍。 | 🔥 进行中 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm 搜索未对新发布的 pi-packages 建立索引** — 新发布的包在 `npm search` 中不显示，导致 pi.dev/packages 画廊无法发现。 | 破坏扩展生态的发现机制。 | ✓ 已关闭 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **大型转录每帧重绘** — 全屏模式下每次调整大小时都会重新渲染整个转录；占满 1 个 CPU 核心。 | 核心 TUI 性能回归；17 条评论。 | 🔥 进行中 |
| [#10497](https://github.com/earendil-works/pi/issues/10497) | **OpenRouter 400 错误** — 请求超过 1M token 上下文限制，导致验证失败。 | 文件注入扩展常见问题；15 条评论。 | ✓ 已关闭 |
| [#8834](https://github.com/earendil-works/pi/issues/8834) | **可选的包命名空间 (`pi.namespace`)** — 技能和提示模板将加载在统一的 `<namespace>:<name>` 命名空间下。 | 主要可扩展性改进；15 条评论。 | ✓ 已关闭 |
| [#10956](https://github.com/earendil-works/pi/issues/10956) | **cacheWarming "idle" 静默停止** — 当上下文中包含自定义/压缩消息时，预热任务从不触发；所有决策都在 `continuationProbability: 1` 时进行。 | 破坏预期的缓存行为；11 条评论。 | 🔥 开启 |
| [#11021](https://github.com/earendil-works/pi/issues/11021) | **ChatGPT 登录使用 272K 上下文，尽管目录显示 500K** — 报告的上下文窗口小于服务器公告。 | 7 👍 — 影响 Copilot 集成准确性。 | 🔥 开启 |
| [#11527](https://github.com/earendil-works/pi/issues/11527) | **Bedrock：每次请求都创建新客户端** — 每次调用都创建新的 `BedrockRuntimeClient`（并循环凭据验证）。 | AWS 用户的性能和成本问题；5 条评论。 | 🔥 开启 |
| [#9276](https://github.com/earendil-works/pi/issues/9276) | **grep 工具带上下文行导致 OOM** — 将匹配文件读入内存（不仅仅是输出），导致堆耗尽。 | 生产环境可靠性问题；4 条评论。 | 🔥 进行中 |
| [#11687](https://github.com/earendil-works/pi/issues/11687) | **升级到 1.5.0 后工具调用失败，显示 `basispoints_tool_arguments_stalled`** — 工具参数生成回归。 | 新报告的升级阻断器。 | 🔥 开启 |

---

## 关键 PR 进展

| PR | 摘要 | 状态 |
|----|------|------|
| [#11545](https://github.com/earendil-works/pi/pull/11545) | **Anthropic 消息线程** — 服务端会话续接，当启用会话 ID + 缓存时，仅发送新消息而非完整历史记录。 | 开启 |
| [#11712](https://github.com/earendil-works/pi/pull/11712) | **修复 OpenRouter 输入过度计数** — 为 OpenRouter 的分词器预留更多 token 空间（高达 12% 差异）；修复了对输出限制严格模型的拒绝。 | 已关闭 |
| [#11711](https://github.com/earendil-works/pi/pull/11711) | **仅在 pi update 检查时才报告包已更新** — 防止虚假的"已是最新"提示。 | 已关闭 |
| [#11705](https://github.com/earendil-works/pi/pull/11705) | **从 ripgrep 获取 grep 上下文** — 直接从 rg 读取上下文行，而非加载整个匹配文件；修复 OOM。 | 开启 |
| [#11709](https://github.com/earendil-works/pi/pull/11709) | **npm/pnpm/yarn/bun 自更新后报告安装版本** — 验证实际安装版本，而非声明的版本。 | 已关闭 |
| [#11707](https://github.com/earendil-works/pi/pull/11707) | **在 `pi update` 中列出版本有变化的已更新包** — 显示哪些扩展已更改及变更后的版本。 | 已关闭 |
| [#11704](https://github.com/earendil-works/pi/pull/11704) | **在 AGENTS.md 中要求向后兼容性** — 公共 API 在主版本外保持兼容；标记待清理的存根。 | 开启 |
| [#11679](https://github.com/earendil-works/pi/pull/11679) | **为 GitHub Copilot 添加 Microsoft-Decision-1 分类器** — 新的 `typesafe-system-one` 分类器。 | 已关闭 |
| [#11629](https://github.com/earendil-works/pi/pull/11629) | **添加 `PI_SELF_UPDATE_COMMAND` 和 `selfUpdateCommand`** — 允许包装器（mise, Nix）提供自定义更新逻辑。 | 已关闭 |
| [#9274](https://github.com/earendil-works/pi/pull/9274) | **保留渲染差异中的缩进** — 修复在未更改内容前插入文本时缩进丢失的问题。 | 开启进行中 |

---

## 热门讨论

### 想法

| # | 讨论 | 摘要 |
|---|------|------|
| [#4444](https://github.com/earendil-works/pi/discussions/4444) | **支持 Agent Client Protocol (ACP)** — Pi 的 headless RPC 模式是 pi 特有的；ACP 为 agent-to-editor 通信提供标准。 | 47 👍, 5 条评论 |

### 展示与分享

| # | 讨论 | 摘要 |
|---|------|------|
| [#11404](https://github.com/earendil-works/pi/discussions/11404) | **官方 pi 代码 agent 沙箱 by docker?** — 来自 "sbx" 的四个 Docker 镜像（sbx/pi, pi-mixin, pi-image, pi-kit）出现在 Docker Hub 上。社区寻求确认。 | 2 条评论 |

---

## 功能需求趋势

从 issue 和讨论中，以下方向持续出现需求：

1. **包发现和命名空间** — 可选命名空间支持 (#8834)，npm 搜索修复 (#7885)
2. **性能/扩展** — CPU 回归修复 (#7730)，转录渲染 (#9549)，grep 内存 (#9276)，Bedrock 客户端复用 (#11527)
3. **远程/无头 TUI** — 连接到其他机器会话的原生 TUI (#11715)
4. **国际化** — TUI 中的阿拉伯语 RTL 渲染 (#11579)
5. **协议标准化** — 编辑器集成的 ACP 支持 (#4444)
6. **持久执行** — 截止时间前唤醒睡眠任务 (#11683)

---

## 开发者痛点

- **扩展生态摩擦**：npm 搜索未对新包建立索引阻断发现；开发者无法让自己的扩展被列出
- **升级回归**：1.5.0 引入工具参数卡顿 (#11687) 和公共 API 潜在破坏性变更 (#11704)
- **规模化内存问题**：长时间会话导致 CPU 飙升，grep 上下文 OOM，转录重绘
- **AWS/Copilot 集成问题**：Bedrock 客户端开销，ChatGPT 上下文窗口不匹配
- **OAuth token 脆弱性**：进程停止后刷新 token 丢失 (#11692)，符号链接路径问题 (#11655)
- **编辑器 UX bug**：IME 多字符提交 (#11177)，/new 后旧输入仍可见 (#11264)

---

*摘要基于 GitHub 数据生成 — earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code community digest into Chinese. I need to follow the rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, issue/PR references, project names, version tags, etc. as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate the content:

Title: Qwen Code 社区简报 — 2026-11-03

Let me go through each section carefully.</think>

# Qwen Code 社区简报 — 2026-11-03

## 今日要闻

Qwen Code 项目发布了新的稳定版 **v0.26.6**，同时还有夜间构建版，TypeScript SDK 升级到 v0.1.27，内置 CLI 0.26.6。团队正在积极解决 CI 可靠性问题——多个"主 CI 失败"问题仍处于开放状态，社区参与度很高。值得注意的是，一个新功能为可信工作区会话添加了 **Web Shell 侧边栏活动视图**。同时，围绕 Shell 安全解析器的内存占用问题（约 1.6 GiB WASM 分配）以及会话管理边界情况引发了性能担忧。

---

## 发布版本

| 版本 | 类型 | 关键信息 |
|---------|------|-------------|
| **v0.26.6** | 稳定版 | Release v0.26.6 |
| **v0.26.5-nightly.20261102.0441faff21** | 夜间版 | 包含 Web Shell 侧边栏活动视图，用于可信工作区会话（approval/input/error 状态，未读组件） |
| **sdk-typescript-v0.1.27** | SDK | 内置 CLI 版本 0.26.6 |

**完整变更日志**: https://github.com/QwenLM/qwen-code/compare/v0.26.6...v0.26.5-nightly.20261102.0441faff21

---

## 热门 Issue

| Issue | 优先级 | 为何重要 | 评论数 |
|-------|----------|-----------------|----------|
| **[#14724](https://github.com/QwenLM/qwen-code/issues/14724)** — 主 CI 失败：Managed Agent gate — 未识别到测试 | type/bug | 持续的 CI 失败阻塞合并；155 条评论表明正在积极调查 | 155 |
| **[#13078](https://github.com/QwenLM/qwen-code/issues/13078)** — 每日依赖 CVE 审计失败 | status/needs-triage | 安全扫描流水线中断；潜在漏洞无法被检测 | 40 |
| **[#15173](https://github.com/QwenLM/qwen-code/issues/15173)** — 主 CI 失败：E2E 测试 (interactive/context-compress) | type/bug | 端到端测试不稳定影响发布信心 | 36 |
| **[#16169](https://github.com/QwenLM/qwen-code/issues/16169)** — 工具运行时排队的消息在 SIGHUP 时丢失 | P2 | 交互式会话数据丢失问题——终端关闭时排队的消息被静默丢弃 | 5 |
| **[#15165](https://github.com/QwenLM/qwen-code/issues/15165)** — Shell 安全解析器触发约 1.6 GiB WASM 分配 | P2 / 性能 | Node 24.16.0 上 V8 优化期间的内存峰值；影响生产部署 | 7 |
| **[#16171](https://github.com/QwenLM/qwen-code/issues/16171)** — Web Shell 会话打开非常慢：实时回放保留完整文件内容 | P1 / 性能 | 包含大型编辑工具结果的会话加载缓慢；守护进程内存膨胀 | 4 |
| **[#16127](https://github.com/QwenLM/qwen-code/issues/16127)** — VS Code Companion 0.26.5 在 Linux 上因 Sharp 发生 SIGSEGV | P1 | 图像解码崩溃；影响 Linux VS Code Companion 用户 | 3 |
| **[#16144](https://github.com/QwenLM/qwen-code/issues/16144)** — GitHub/GitLab 频道默认对所有人开放 | P1 / 安全 | 频道访问控制配置错误；文档与行为矛盾 | 4 |
| **[#15799](https://github.com/QwenLM/qwen-code/issues/15799)** — 突然结束后报告已完成工具调用为"未记录" | P1 | 会话恢复时虚假的失败警告；影响可靠性 | 4 |
| **[#16006](https://github.com/QwenLM/qwen-code/issues/16006)** — feat(core)：让托管安装禁用 models.dev 目录刷新 | P2 / 功能请求 | 托管安装的隐私控制；允许禁用目录下载 | 4 |

---

## 关键 PR 进展

| PR | 类别 | 摘要 |
|----|----------|---------|
| **[#16181](https://github.com/QwenLM/qwen-code/pull/16181)** | web-shell | 优化编辑器操作菜单呈现，使用一致图标和紧凑间距 |
| **[#16143](https://github.com/QwenLM/qwen-code/pull/16143)** | managed-agent | 对齐共享 MySQL 模式约定；记录 38 张表和 843 列 |
| **[#16121](https://github.com/QwenLM/qwen-code/pull/16121)** | managed-agent | 收窄延迟存储消费者到其角色接口 |
| **[#16149](https://github.com/QwenLM/qwen-code/pull/16149)** | web-shell | 从频道编辑器编辑 GitHub 仓库设置（访问控制、@mention 行为、响应模式） |
| **[#16067](https://github.com/QwenLM/qwen-code/pull/16067)** | ci | 恢复 linter 归档下载——通过重试逻辑在节流的 release-asset 下载中存活 |
| **[#16024](https://github.com/QwenLM/qwen-code/pull/16024)** | core | 使持久化会话分页对相同 mtime 安全——按 mtime + 文件名排序 |
| **[#16180](https://github.com/QwenLM/qwen-code/pull/16180)** | mods | 在 Ink 终端中运行 prompt.submit 钩子（第 2 步，共 3 步） |
| **[#16177](https://github.com/QwenLM/qwen-code/pull/16177)** | core | 将监控和工作流通知归因到注册的轮次 |
| **[#13969](https://github.com/QwenLM/qwen-code/pull/13969)** | hooks | 为本地（非托管）会话添加 FileChanged 通知 |
| **[#16117](https://github.com/QwenLM/qwen-code/pull/16117)** | channels | 向 PR 绑定会话传递 GitHub 事件 |
| **[#14748](https://github.com/QwenLM/qwen-code/pull/14748)** | cli | 将项目钩子放在审批对话框后面（类似 MCP 服务器） |
| **[#16066](https://github.com/QwenLM/qwen-code/pull/16066)** | config | 添加操作员模型目录刷新开关（托管安装的隐私选择退出） |

---

## 功能请求趋势

根据 Issue 和 PR，社区正在请求：

1. **隐私与控制** — 托管安装的更多粒度设置（禁用目录刷新、选择退出使用统计）
2. **内存与性能优化** — 减少 WASM 编译器内存占用、更快的会话加载、更轻量的后台 Shell 处理
3. **增强 Web Shell 能力** — 频道事件时间线、GitHub 仓库设置 UI、基于 Web Shell 构建的桌面应用
4. **改进的 Token/上下文管理** — 切片文件引用、更好的 Ollama/OpenRouter/Bedrock 模型 ID 规范化
5. **会话可靠性** — 优雅处理 SIGHUP、清理僵尸进程、持久化工具调用结果

---

## 开发者痛点

- **CI 不稳定**：多个"主 CI 失败"Issue（Managed Agent、E2E、SDK Java）评论量高，表明测试可靠性问题持续存在
- **内存膨胀**：Shell 安全解析器分配约 1.6 GiB 和实时回放保留完整文件内容是生产环境问题
- **安全配置错误**：默认开放的 GitHub 频道与文档矛盾；CVE 审计流水线失败
- **会话边界情况**：SIGHUP 时消息丢失、长时间运行会话中的僵尸进程、虚假的"工具未记录"警告
- **平台特定崩溃**：Linux 上 VS Code Companion 中 Sharp 图像解码的 SIGSEGV

---

*基于 GitHub 数据生成 — 2026-11-03*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*