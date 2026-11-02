# AI CLI 工具社区动态日报 2026-11-02

> 生成时间: 2026-11-02 01:45 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this entire report into Chinese (Simplified), following the specific rules provided. Let me analyze what I need to do:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form - do not translate them
5. Use natural technical Chinese - the register of a Chinese developer newsletter - not literal word-for-word

Let me translate section by section, keeping the structure intact:

**Title:** AI CLI Tools — Cross-Tool Comparison Report
**Date:** 2026-11-02

---

## 1. Ecosystem Overview

Translate: The AI coding assistant CLI ecosystem is experiencing rapid fragmentation, with seven major tools now competing for developer mindshare. Today's activity shows high engagement across all platforms — 299 total issues tracked, 151 PRs merged or in progress — indicating intense development velocity. Key themes converging across vendors include: context management reliability, cross-platform compatibility, and enterprise-friendly features (OAuth, permissions, usage quotas). The market is shifting from pure capability toward operational maturity — stability, security hardening, and developer experience refinements are now differentiating factors.

Let me translate naturally:

AI 编码助手 CLI 生态正在快速碎片化，七款主流工具正在争夺开发者的关注度。当日各平台均呈现高活跃度——共计追踪 299 个 issue、151 个 PR 已合并或正在处理——反映出开发节奏的紧张。各厂商正在收敛到几个共同主题：上下文管理可靠性、跨平台兼容性，以及企业友好特性（OAuth、权限、使用配额）。市场正从单纯的能力竞争转向运维成熟度的较量——稳定性、安全加固和开发者体验优化已成为差异化因素。

---

## 2. Activity Comparison

Translate the table - keep numbers, tool names, versions as-is:

| 工具 | Issues | PRs | Discussions | Releases (24h) |
|------|--------|-----|-------------|----------------|
| **Claude Code** (anthropic) | 50 | 13 | — | 0 |


| **OpenAI Codex** (OpenAI) | 50 | 13 | 7 | 2 (α) |
| **Gemini CLI** (Google) | 50 | 31 | — | 1 |
| **GitHub Copilot CLI** | 22 | 0 | — | 1 |
| **OpenCode** (Anomaly) | 50 | 40 | — | 0 |
| **Pi** (earendil) | 27 | 4 | 2 | 0 |
| **Qwen Code** (Alibaba) | 50 | 50 | — | 3 |

*Note: Discussions column marked "—" where data was not available

I'm tracking activity across different AI coding assistant tools, focusing on their GitHub metrics. The table reveals interesting patterns of engagement. Most tools show significant pull request activity, with Qwen Code standing out with 50 PRs. Discussion availability varies, with some tools having no tracked discussions. Release frequency seems relatively low across the board, with most tools having zero or minimal releases in the past 24 hours.

The landscape suggests these developer tools are at different stages of community interaction and project management. Some tools like Qwen Code demonstrate high activity, while others appear more passive in their current development approach.

I'm noticing security is becoming a critical concern. Vendors are focusing on hardening OAuth token handling, approval sanitization, and ensuring stream safety. This indicates a maturing ecosystem where robust security practices are increasingly prioritized.

The market is shifting towards reliability and enterprise-readiness. Developers now expect more than just raw capabilities, prioritizing operational concerns like context management and platform compatibility. Companies that can deliver stable CI/CD workflows and sophisticated permission systems are likely to capture enterprise contracts.</think>

# AI CLI 工具横评报告

**日期：** 2026-11-02

---

## 1. 生态概览

AI 编码助手 CLI 生态正在快速碎片化，七款主流工具正在争夺开发者的关注度。当日各平台均呈现高活跃度——共计追踪 299 个 issue、151 个 PR 已合并或正在处理——反映出开发节奏的紧张。各厂商正在收敛到几个共同主题：上下文管理可靠性、跨平台兼容性，以及企业友好特性（OAuth、权限、使用配额）。市场正从单纯的能力竞争转向运维成熟度的较量——稳定性、安全加固和开发者体验优化已成为差异化因素。

---

## 2. 活动对比

| 工具 | Issues | PRs | Discussions | Releases (24h) |
|------|--------|-----|-------------|----------------|
| **Claude Code** (anthropic) | 50 | 13 | — | 0 |
| **OpenAI Codex** (OpenAI) | 50 | 13 | 7 | 2 (α) |
| **Gemini CLI** (Google) | 50 | 31 | — | 1 |
| **GitHub Copilot CLI** | 22 | 0 | — | 1 |
| **OpenCode** (Anomaly) | 50 | 40 | — | 0 |
| **Pi** (earendil) | 27 | 4 | 2 | 0 |
| **Qwen Code** (Alibaba) | 50 | 50 | — | 3 |

*注：Discussions 列标记 "—" 表示原始 digest 中未获取到相关数据。OpenAI Codex 和 Pi 积极使用 GitHub Discussions 作为主要社区渠道。*

---

## 3. 特性方向趋同

| 方向 | 涉及工具 | 具体需求 |
|-----------|---------------|----------------|
| **Agent 可靠性 / 卡死恢复** | Claude Code、OpenCode、 Gemini CLI、Pi | 子 Agent 卡死、无限循环、虚假成功上报 |
| **上下文管理 / 压缩** | Claude Code、OpenCode、 Gemini CLI、Qwen Code | 精确的 token 计数、自动压缩触发、检查点可靠性 |
| **平台特定修复** | Claude Code（Windows/Mac）、OpenCode（Windows）、Gemini CLI（Wayland）、Copilot CLI（传统终端） | 输入法、剪贴板、显示服务器兼容性 |
| **安全加固** | Qwen Code、Claude Code、OpenAI Codex、Pi | OAuth token 处理、审批卡片净化、流安全 |
| **多模型 / BYOK 支持** | Claude Code、Copilot CLI、 Gemini CLI、Qwen Code | 模型选择器灵活性、本地/BYOK 提供商集成 |
| **权限系统改进** | OpenCode、Claude Code、Qwen Code | 细粒度审批、自动模式守卫、shell 命令安全 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------------|-------------|-------------------|
| **Claude Code** | 可靠性、企业合规 | 企业团队、安全敏感组织 | 重点投入权限控制、Guardian 策略、MCP 生态 |
| **OpenAI Codex** | 桌面集成、原生应用 | 使用 VS Code、JetBrains 的开发者 | 深度 IDE 集成、通过 GitHub 的远程会话、桌面优先 |
| **Gemini CLI** | Agentic 工作流、多会话 | 需要复杂委托的高级用户 | 子 Agent 架构、原生 bash 亲和力、循环检测 |
| **Copilot CLI** | CLI 驱动的开发者工作流 | GitHub 原生开发者 | 轻量级 CLI、斜杠命令、快速交互 |
| **OpenCode** | 开源可扩展性 | 自托管/隐私优先用户 | 本地模型、MCP 连接器、持久化执行 |
| **Pi** | 持久化执行、状态化 Agent | 长时间运行的 Agentic 工作流 | 持久化运行文档、检查点/恢复、代码模式 |
| **Qwen Code** | 规模化、托管基础设施 | 大规模企业部署 | 托管 Agent、SQL 持久化历史、Web shell、高并发 CI |

---

## 5. 社区活力与成熟度

**高速迭代：**
- **Qwen Code** — 50 个 PR、三路并发发版、活跃的安全加固讨论
- **Gemini CLI** — 31 个 PR、每日夜间构建、多领域功能（TUI、MCP、权限）
- **OpenCode** — 40 个 PR、专注性能优化（SQLite WAL 削减）和持久化

**稳健推进：**
- **Claude Code** — 50 个 Issue，但以 bug 反馈为主；PR 数量较少，发版节奏偏慢
- **OpenAI Codex** — 稳步推进 alpha 版本；社区积极构建第三方集成（Zozo、Cloakroom、Bossanova）
- **Pi** — 社区规模较小，但专注持久化执行——这是一条差异化路线

**成熟/维稳：**
- **GitHub Copilot CLI** — 24 小时内 0 个 PR，单一补丁版本；给人维护模式的感觉

---

## 6. 趋势信号

**开发者诉求：**

1. **模型灵活性** — 四个工具的用户都希望支持 BYOK/本地模型，并能控制推理强度（在 Claude Code、Copilot CLI、 Gemini CLI、Qwen Code 中均有体现）

2. **真正的计划/只读模式** — Claude Code (#96326)、OpenCode (#53955)、Qwen Code (#13570) 都有相关 issue，反映 Agent 忽略计划模式——这似乎是系统性挑战

3. **平台一致性仍是难题** — Windows 输入法、Wayland 支持、传统终端兼容性——各平台都有独特的痛点

4. **上下文可靠性是头号技术债** — Token 误报、压缩失败、检查点损坏——每个 digest 都有提及

5. **第三方集成生态正在兴起** — OpenAI Codex 有第三方工具（Zozo、Cloakroom、Bossanova）；OpenCode 积极开发 MCP 连接器

6. **安全正在成为一等公民** — OAuth token 处理、审批净化、流安全——所有厂商都在加固

**决策者信号：** 市场正在向可靠性和企业就绪方向收敛。原始能力已被视为前提；运维层面的关注点（上下文管理、安全、跨平台）才是驱动采用的关键。拥有稳定 CI/CD 和成熟权限系统的厂商将赢得企业合同。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report into Chinese. Let me carefully preserve the structure and translate the content into natural technical Chinese, keeping all formatting, URLs, code references, etc. intact.

I need to:
1. Keep all Markdown structure exactly (headings, tables, lists, etc.)
2. Preserve URLs, PR/Issue numbers, file names, etc.
3. Use natural technical Chinese register
4. Output only the translation, no preamble</think>

# Claude Code Skills 社区亮点报告

**数据截至 2026 年 11 月 2 日** | 来源：`anthropics/skills` 仓库

---

## 1. 热门技能排行

由于所有 PR 条目的评论数均显示为 "undefined"（可能是数据采集时机问题），我按**近期性、技术重要性和社区参与度**（PR 活动、issue 关联）进行排序。

| # | PR | 功能 | 状态 |
|---|-----|---------------|--------|
| 1 | **[#1980](https://github.com/anthropics/skills/pull/1980)** — `webapp-testing`：避免 shell=True | 安全修复：移除 `with_server.py` 中未经过滤的用户输入以消除命令注入漏洞（CWE-78） | 进行中 |
| 2 | **[#1742](https://github.com/anthropics/skills/pull/1742)** — `mcp-builder`：支持 mcp>=2 streamable_http_client | 更新 MCP 集成以适配 2.0+ 版本 — 处理模块重命名并支持通过 `create_mcp_http_client` 配置自定义 HTTP 头 | 进行中 |
| 3 | **[#525](https://github.com/anthropics/skills/pull/525)** — `pyxel` 技能 | 新增复古游戏开发能力，使用 Pyxel Python 库 — 包含调试、无头运行、帧检查功能 | 进行中 |
| 4 | **[#1771](https://github.com/anthropics/skills/pull/1771)** — `proofcore-contract-auditor` | Web3 技能：针对 Solidity/Rust 智能合约的自动化静态分析，通过 ProofCore 的零存储 Merkle 协议锚定加密证明至 TON 区块链 | 进行中 |
| 5 | **[#1245](https://github.com/anthropics/skills/pull/1245)** — `notion-spec-to-implementation` + `quantitative-resume-auditor` | 两个新技能：将 Notion 规格转换为可执行实现任务；为 ATS 优化审计简历 | 进行中 |
| 6 | **[#1703](https://github.com/anthropics/skills/pull/1703)** — `md2video-audio` | 零成本技能：使用 Marp + 语音合成将 Markdown 编译为带逼真配音的 MP4 | 进行中 |
| 7 | **[#514](https://github.com/anthropics/skills/pull/514)** — `document-typography` | 排版质量控制 — 防止 AI 生成文档中的孤行/寡行、编号错位问题 | 进行中 |

**关键观察：** 所有热门 PR 均为**进行中**状态 — 该仓库显示了显著的贡献活动流入，但似乎存在审核/合并瓶颈。

---

## 2. 社区需求趋势

从 Issue 来看，讨论最多的需求集中在：

| 主题 | Issue | 需求信号 |
|-------|-------|---------------|
| **信任与安全** | [#492](https://github.com/anthropics/skills/issues/492) (46 条评论) | 社区技能冒充官方 `anthropic/` 命名空间 — 需要命名空间隔离的安全漏洞 |
| **组织级共享** | [#228](https://github.com/anthropics/skills/issues/228) (17 条评论, 8 👍) | 组织内直接共享技能 — 目前需要手动文件分发 |
| **评估/可靠性** | [#556](https://github.com/anthropics/skills/issues/556) (13 条评论, 7 👍) | `run_eval.py` 技能触发率为 0% — 评估管道损坏 |
| **智能体记忆** | [#1329](https://github.com/anthropics/skills/issues/1329) (10 条评论) | 提议 `compact-memory` 技能：用于长时间运行智能体的符号化记忆 |
| **推理质量** | [#1385](https://github.com/anthropics/skills/issues/1385) (7 条评论) | 提议：任务前校准 → 对抗性审查 → 交付验证管道 |

**趋势洞察：** 社区正从 **"更多技能"** 转向 **"可信赖、可评估、可共享的技能基础设施"**。安全（命名空间冒充）、评估可靠性（0% 触发率）和组织级分发主导了讨论，表明生态系统正从"技能数量"向"生产级技能治理"成熟。

---

## 3. 潜力待定技能

这些 PR 近期有活动且需求明确 — 可能是即将合并的候选：

| PR | 技能/领域 | 为何重要 |
|----|--------------|----------------|
| [#1997](https://github.com/anthropics/skills/pull/1997) | `skill-creator` YAML 解析 | 修复标量 frontmatter 解析 — 影响所有技能创建 |
| [#1977](https://github.com/anthropics/skills/pull/1977) | `algorithmic-art` wrapAround() | 修复负值取模 — 完善功能 |
| [#1976](https://github.com/anthropics/skills/pull/1976) | `webapp-testing` 元素发现 | 修正 textarea/select 报告 — 提高测试准确性 |
| [#1975](https://github.com/anthropics/skills/pull/1975) | `pptx` 缩略图验证 | `--cols` 输入验证 — 防止后期失败 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | `docx` LibreOffice 验证 | 超时时返回正确错误 + 验证输出 DOCX |
| [#1298](#1298) | `skill-creator` Windows 支持 | 修复触发评估竞态条件、Windows select() 失败 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求不是新技能——而是信任、评估和共享基础设施。** 安全（命名空间冒充）、评估可靠性（0% 触发率）和组织级分发主导了讨论，表明生态系统正在从"技能数量"向"生产就绪的技能治理"演进。

---

*报告根据 GitHub Issue 和 PR 数据生成，采样范围为 50 个 PR 和 50 个 Issue。*

---

<think>The user wants me to translate the entire Claude Code Community Digest into Simplified Chinese. Let me analyze the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while preserving all the structure and technical elements.

The content is:
- A digest for 2026-11-02
- Contains highlights, releases (none), hot issues (table with 10 items), key PR progress, feature request trends, and developer pain points
- The format is clear - headings, tables, lists

Let me translate each section:

---

# Claude Code 社区周报 — 2026-11-02

## 今日要闻

GitHub 仓库显示近期平台特定 bug 和功能请求的 issues 讨论非常活跃。最受关注的问题包括语言合规漂移 (#96326，36 👍)、Windows 键盘/输入回归 (#106479)，以及波斯语 RTL 支持缺失 (#100492)。过去 24 小时内未发布新版本，但有一个 open 的 PR 提议将内部分类工作流迁移到 Sonnet 5.5。

---

## 版本发布

过去 24 小时内**无新版本**发布。

---

## 热门 Issues

| # | Issue | 摘要 | 影响 | 👍 |
|---|-------|---------|--------|---|
| #96326 | **[BUG] 尽管 CLAUDE.md 规则要求日语，回复仍会漂移到英语** | 模型 (Opus 5.5) 在读取英语工具输出后切换到英语，忽略用户级和会话级的日语规则。纠正不会持久化。 | 多语言用户无法强制语言偏好；破坏本地化工作流。 | 36 |
| #106479 | **[BUG] Windows：死键无法工作，无法输入重音字母 (á, é, í, ó, ú)** | 西班牙语（拉丁美洲）键盘布局无法在桌面应用中输入重音字符。 | 阻止使用拉丁美洲西班牙语键盘的开发人员。 | 7 |

---

## 关键 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|---------|--------|
| #106583 | **将 issue 分类和去重工作流迁移到 Sonnet 5.5** | 将三个内部工作流（`claude-issue-triage.yml`、`claude-dedupe-issues.yml`、Claude 助手）从 Opus 4.6 / Sonnet 4.6 迁移到 Sonnet 5.5。 | OPEN |
| #19866 | **修复 ralph-wiggum：使用 set -u 处理空 PROMPT_PARTS 数组** | 修复无参数调用 `/ralph-loop` 时的崩溃；在数组扩展中添加默认空字符串以兼容 `set -u`。 | CLOSED |
| #44071 | **文档：将 README 中的"Get Started"标题大写** | 修复 README.md 中的标题大小写不一致。 | CLOSED |
| #50672 | **文档(changelog)：修正 2.1.111 条目中的技能名称** | 将 CHANGELOG 中的技能名称从 `/less-permission-prompts` 修正为 `/fewer-permission-prompts`。 | CLOSED |
| #19867 | **修复(code-review)：允许在新提交时重新审查** | 使 code-review 插件能够在新提交后重新运行审查；添加 `--force` 标志以绕过跳过逻辑。 | CLOSED |
| #40822 | **文档(vscode)：添加"无响应"状态栏指南** | 记录 VS Code 扩展状态栏状态，澄清"无响应"表示约 60 秒的后端沉默。 | CLOSED |
| #24360 | **文档：在 README 中添加配置文件参考** | 添加配置部分，记录 `~/.claude.json` vs `~/.claude/settings.json` 层次结构和优先级。 | CLOSED |

---

## 功能请求趋势

| 类别 | 请求 |
|----------|----------|
| **平台 UX** | 本地代码会话的项目 (#106064)、轻量级会话等待面板 (#106410)、侧边栏配置 (#106410)、可配置的跨会话消息限制 (#106438) |
| **平台集成** | 一流 Forgejo/Gitea 集成 (#106412)、Read Aloud 的德语女声 (#106600) |
| **性能** | VS Code 扩展面板中的空闲压缩 (#103674)、以全新环境启动会话的选项 (#106250) |
| **无障碍/国际化** | 幻灯片工件的 RTL/CSS 支持 (#106492)、恢复更快/更智能努力滑块 (#106642) |
| **代理工作流** | 桌面任务视图改进，用于卡住的子代理 (#106641) |

---

## 开发者痛点

1. **语言/本地化强制执行** — Claude Code 忽略显式 `CLAUDE.md` 语言规则和会话设置 (#96326)；波斯语 RTL 支持不完整 (#100492)
2. **Windows 输入/键盘** — 拉丁美洲西班牙语键盘的死键损坏 (#106479)；无头 Chrome 触发 IdP 锁定 (#106003)
3. **上下文管理** — 误导性大小拒绝消息导致过早的上下文限制 (#106431)；使用计数差异 (#106598)
4. **MCP/集成 bug** — 远程 MCP 连接器显示为 UUID (#106421)；Routines API 返回错误 403 错误 (#102874)；OAuth 令牌刷新在唤醒后破坏所有会话 (#105949)
5. **模型/配额混淆** — 工作流代理静默继承父模型，消耗意外配额 (#106501)
6. **企业差距** — 企业策略如 `effortLevel` 被忽略为"无法识别" (#105993)；网关遥测令牌过期 (#106046)

---

*来自 GitHub 数据生成 — anthropics/claude-code*

---

规则：
- 仅输出翻译。不需要序言、解释，或在整

个输出周围使用 markdown 栅栏。
- 精确保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、水平线、表情符号。
- 保留 URL、链接目标、代码片段、代码块、数字和日期不变。
- 保留项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文——中国开发者通讯的语域——而不是逐字直译。

保留项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文——中国开发者通讯的语域——而不是逐字直译。

The markdown structure needs careful handling - maintaining the exact format from the source while adapting the Chinese content naturally. I should keep technical terms like GitHub issues and pull requests recognizable while ensuring the translation reads fluently in Chinese technical documentation style.</think>

# Claude Code 社区周报 — 2026-11-02

## 今日要闻

GitHub 仓库显示近期平台特定 bug 和功能请求的 issues 讨论非常活跃。最受关注的问题包括语言合规漂移 (#96326，36 👍)、Windows 键盘/输入回归 (#106479)，以及波斯语 RTL 支持缺失 (#100492)。过去 24 小时内未发布新版本，但有一个 open 的 PR 提议将内部分类工作流迁移到 Sonnet 5.5。

---

## 版本发布

过去 24 小时内**无新版本**发布。

---

## 热门 Issues

| # | Issue | 摘要 | 影响 | 👍 |
|---|-------|---------|--------|---|
| #96326 | **[BUG] 尽管 CLAUDE.md 规则要求日语，回复仍会漂移到英语** | 模型 (Opus 5.5) 在读取英语工具输出后切换到英语，忽略用户级和会话级的日语规则。纠正不会持久化。 | 多语言用户无法强制语言偏好；破坏本地化工作流。 | 36 |
| #106479 | **[BUG] Windows：死键无法工作，无法输入重音字母 (á, é, í, ó, ú)** | 西班牙语（拉丁美洲）键盘布局无法在桌面应用中输入重音字符。 | 阻止使用拉丁美洲西班牙语键盘的开发人员。 | 7 |
| #102874 | **[BUG] Routines API 返回 403 "this project is paused"** | 通过 `POST /v1/claude_code/routines/{id}/fire` 触发 routine 时，即使 Project 处于活跃状态也返回权限错误。 | 破坏基于 Project 的 Routines API 集成工作流。 | 6 |
| #100492 | **[BUG] 桌面 Code 标签页：波斯语权限提示中反转，RTL 问题** | 波斯语（RTL）文本在权限提示中显示不正确；ZWNJ/RLM 字符损坏；多处未设置文本方向。 | 阻止波斯语开发人员使用 Code 标签页。 | 3 |
| #103674 | **[BUG] VS Code 扩展面板中的空闲压缩** | 面板闲置时未释放内存，导致长时间会话内存增长。 | 影响长时间运行的开发会话性能。 | 1 |
| #106598 | **[BUG] 可能的使用量计数问题：一周限额在一天内耗尽，额外收费 $155** | 用户报告一周 token 配额意外耗尽，产生 $155 超额费用。 | 影响成本可见性的潜在计费/遥测 bug。 | 1 |
| #106064 | **[BUG] 本地 Code 会话的项目** | 请求在本地开发环境中按项目组织会话的功能。 | UX 改进请求。 | 2 |
| #101419 | **[BUG] iOS Projects 线程中不显示 Artifact 删除审批提示** | iOS 上删除 artifact 时不显示确认对话框。 | 破坏 iOS 上的安全删除流程。 | 1 |
| #106501 | **[BUG] 通过 start_session 启动的会话使用父级模型 (Fable)** | 工作流代理静默继承父级模型；get_session 报告错误的模型。31 分钟内消耗了 43% 的 Fable 配额。 | 模型选择混淆导致意外的配额消耗。 | 1 |
| #106431 | **[BUG] Read 大小拒绝说"more than fits"但上下文大部分空闲** | 工具报告上下文耗尽时窗口大部分仍空闲；模型开始过早地限制上下文。 | 降低有效上下文窗口利用率。 | 1 |

---

## 关键 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|---------|--------|
| #106583 | **将 issue 分类和去重工作流迁移到 Sonnet 5.5** | 将三个内部工作流（`claude-issue-triage.yml`、`claude-dedupe-issues.yml`、Claude 助手）从 Opus 4.6 / Sonnet 4.6 迁移到 Sonnet 5.5。 | OPEN |
| #19866 | **fix(ralph-wiggum)：使用 set -u 处理空 PROMPT_PARTS 数组** | 修复无参数调用 `/ralph-loop` 时的崩溃；在数组扩展中添加默认空字符串以兼容 `set -u`。 | CLOSED |
| #44071 | **docs：将 README 中的"Get Started"标题大写** | 修复 README.md 中的标题大小写不一致。 | CLOSED |
| #50672 | **docs(changelog)：修正 2.1.111 条目中的技能名称** | 将 CHANGELOG 中的技能名称从 `/less-permission-prompts` 修正为 `/fewer-permission-prompts`。 | CLOSED |
| #19867 | **fix(code-review)：允许在新提交时重新审查** | 使 code-review 插件能够在新提交后重新运行审查；添加 `--force` 标志以绕过跳过逻辑。 | CLOSED |
| #40822 | **docs(vscode)：添加"无响应"状态栏指南** | 记录 VS Code 扩展状态栏状态，澄清"无响应"表示约 60 秒的后端沉默。 | CLOSED |
| #24360 | **docs：在 README 中添加配置文件参考** | 添加配置部分，记录 `~/.claude.json` vs `~/.claude/settings.json` 层次结构和优先级。 | CLOSED |

---

## 功能请求趋势

| 类别 | 请求 |
|----------|----------|
| **平台 UX** | 本地 Code 会话的项目 (#106064)、轻量级等待用户操作的会话面板 (#106356)、侧边栏可配置性 (#106410)、可配置的跨会话消息限制 (#106438) |
| **平台集成** | 一流 Forgejo/Gitea 集成 (#106412)、Read Aloud 的德语女声 (#106600) |
| **性能** | VS Code 扩展面板中的空闲压缩 (#103674)、以全新环境启动会话的选项 (#106250) |
| **无障碍/国际化** | 幻灯片工件的 RTL/CSS 支持 (#106492)、恢复 Faster/Smarter 努力滑块 (#106642) |
| **代理工作流** | 桌面任务视图改进，用于卡住的子代理 (#106641) |

---

## 开发者痛点

1. **语言/本地化强制执行** — Claude Code 忽略显式 `CLAUDE.md` 语言规则和会话设置 (#96326)；波斯语 RTL 支持不完整 (#100492)
2. **Windows 输入/键盘** — 拉丁美洲西班牙语键盘的死键损坏 (#106479)；无头 Chrome 触发 IdP 锁定 (#106003)
3. **上下文管理** — 误导性大小拒绝消息导致过早的上下文限制 (#106431)；使用计数差异 (#106598)
4. **MCP/集成 bug** — 远程 MCP 连接器显示为 UUID (#106421)；Routines API 返回错误 403 错误 (#102874)；OAuth 令牌刷新在唤醒后破坏所有会话 (#105949)
5. **模型/配额混淆** — 工作流代理静默继承父级模型，消耗意外配额 (#106501)
6. **企业差距** — 企业策略如 `effortLevel` 被忽略为"无法识别" (#105993)；网关遥测令牌过期 (#106046)

---

*来自 GitHub 数据生成 — anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the content while preserving the Markdown structure exactly
2. Keep all URLs, issue numbers, code references, file paths, version tags, etc. as-is
3. Use natural technical Chinese - the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section while maintaining the structure:

**Title:** OpenAI Codex 社区动态 → OpenAI Codex 社区简报

**Date:** 2026-11-02 → 2026年11月2日

**Section 1: Today's Highlights**
- "The Codex project shipped two alpha releases" → "Codex 项目发布两个 alpha 版本"
- "focused on Rust tooling improvements" → "聚焦于 Rust 工具链改进"
- "Community attention is heavily concentrated on subscription and rate-limiting concerns" → "社区关注点主要集中在订阅和速率限制相关问题"
- "with multiple issues filed requesting separate ChatGPT and Codex usage allowances" → "多个 issue 请求保留独立的 ChatGPT 和 Codex 使用配额"
- Platform-specific bugs → 平台特定问题

**Section 2: Releases**
- "Notes" → "备注"
- "Release 0.167.0-alpha.3" → "发布 0.167.0-alpha.3"
- "No changelog details provided for these releases." → "这些版本未提供变更日志详情。"

**Section 3: Hot Issues**
- Table headers need translation
- "Why It Matters" → "问题说明"
- Issue titles need translation
- Comments → 评论数
- 👍 → 👍

**Section 4: Key PR Progress**


- "Summary" → "概要"

I'll continue translating the key PR sections, focusing on maintaining the technical Chinese newsletter style while preserving the original structure and technical terminology.

- "Validate `/fork` before consuming the composer draft" → "在消耗 composer draft 前验证 `/fork`"
- "Distinguish update handoffs in TUI startup telemetry" → "在 TUI 启动遥测中区分更新交接"
- "Remove Bazel outputs from DotSlash release configs" → "从 DotSlash 发布配置中移除 Bazel 输出"
- "Release superseded assistant text from live paginated history" → "从实时分页历史中释放被取代的助手文本"
- "Use local Bazel for voice release builds" → "使用本地 Bazel 进行语音发布构建"
- "Add naming and navigation helpers for TUI backend sessions" → "为 TUI 后端会话添加命名和导航辅助方法"
- "Prioritize pending approvals in the subagent picker" → "在子代理选择器中优先处理待批准项"
- "Wire native voice dependencies into full Rust CI" → "将本地语音依赖接入完整 Rust CI"
- "Support rendering TUI conversations within an inset area" → "支持在嵌入区域渲染 TUI 对话"
- "Make Bazel checks advisory and pause Bazel release artifacts" → "使 Bazel 检查变为建议性并暂停 Bazel 发布产物"

I'll translate these project descriptions using technical Chinese, maintaining their concise format while preserving the core technical meaning.

The next section focuses on community projects and discussions, highlighting various innovative tools and platforms:

Showcasing creative developer solutions like an inspectable issue-to-PR workflow, a local secret replacement mechanism, an iOS app visualizing coding agents as pixel villagers, and an innovative context management approach with threshold alerts. These community-driven projects demonstrate diverse technical problem-solving strategies.

The discussion section explores cross-platform context sharing between ChatGPT and Codex, representing an interesting technical exploration in the Spanish-speaking developer community.

I'll focus on the key trends emerging in feature requests and developer challenges:

1. Distinct usage quotas spark strong community engagement
2. Native approval prompt requirements gaining momentum
3. Cross-platform session continuity becomes a critical user need
4. Third-party secret management tools indicate growing ecosystem complexity

Platform-specific challenges persist, including Quick Chat launch failures, browser permission inconsistencies, and messaging queue complications on Android. Subscription rate limits create user anxiety, particularly around merged ChatGPT/Codex quotas.

Authentication challenges emerge across Linux, macOS, and Windows, with cloudflare login re-verification causing friction. Context management issues, like automatic compaction disrupting instruction retention, highlight ongoing usability concerns. File attachment problems, especially with large PowerPoint and Excel files, continue to frustrate users.

A technical Chinese developer newsletter digest will be crafted to address these multifaceted technical challenges.</think>

# OpenAI Codex 社区简报

**日期：** 2026年11月2日

---

## 1. 今日要闻

Codex 项目发布了两个 alpha 版本（v0.167.0-alpha.2 和 alpha.3），聚焦于 Rust 工具链改进。社区关注点主要集中在订阅和速率限制相关问题，多个 issue 请求保留独立的 ChatGPT 和 Codex 使用配额。平台特定问题持续存在——尤其是 macOS Quick Chat、Windows 浏览器权限和 Android Remote 连接问题。

---

## 2. 版本发布

| 版本 | 备注 |
|---------|-------|
| **rust-v0.167.0-alpha.3** | 发布 0.167.0-alpha.3 |
| **rust-v0.167.0-alpha.2** | 发布 0.167.0-alpha.2 |

*这些版本未提供变更日志详情。*

---

## 3. 热门 Issue

| # | Issue | 问题说明 | 👍 |
|---|-------|----------------|-----|
| **#57721** | **[macOS] 移动端创建的远程对话报告浏览器已禁用** — 移动端发起的对话无法访问已连接的 Mac，必须在桌面端发送消息初始化同一对话才会生效。影响跨设备工作流。 | 17 | 0 |
| **#41708** | **[Android Remote] 主机端回合完成后消息队列可能卡住** — 恢复期间消息可能丢失或延迟。 | 15 | 3 |
| **#53042** | **[macOS] Quick Chat 无法再启动** — 原有的命令和原生窗口服务已不可用。用户影响较大（24 👍）。 | 15 | 24 |
| **#58530** | **保留 Plus 订阅中独立的 ChatGPT 和 Codex 使用配额** — 用户担忧合并配额会降低订阅价值。针对订阅政策的活跃反馈。 | 13 | 19 |
| **#50000** | **[Windows] 已有对话间歇性显示"无法加载此 ChatGPT 对话"** — Windows 端会话加载失败。 | 12 | 0 |
| **#57190** | **[macOS] 重启后已有对话中浏览器报告已禁用** — 重启时浏览器状态不一致。 | 11 | 1 |
| **#52197** | **send_message_to_thread 对可见的 Dot 返回"找不到线程"** — Dot 用户的 API 可靠性问题。 | 10 | 0 |
| **#50309** | **Guardian 静默忽略 auto_review.extra_policy** — 安全策略配置静默失败。 | 10 | 2 |
| **#58258** | **[Windows] PPTX 发送在 Office 预检中持续转圈** — PowerPoint 附件发送失败且无错误提示。 | 9 | 1 |
| **#28437** | **支持 PreToolUse permissionDecision: ask 实现原生审批提示** — 为钩子实现人工审批的增强功能请求。 | 9 | 9 |

---

## 4. 主要 PR 进展

| # | PR | 概要 |
|---|-----|---------|
| **#58767** | [在消耗 composer draft 前验证 `/fork`](https://github.com/openai/codex/pull/58767) | 延迟 draft 消耗直到线程验证完成；拒绝 fork 时保留 draft。 |
| **#58766** | [在 TUI 启动遥测中区分更新交接](https://github.com/openai/codex/pull/58766) | 交接给更新器时记录 `app_server_mode=update_requested`。 |
| **#58757** | [从 DotSlash 发布配置中移除 Bazel 输出](https://github.com/openai/codex/pull/58757) | 移除仅 Cargo 发布的 Bazel 依赖（v0.167.0-alpha.2）。 |
| **#58751** | [从实时分页历史中释放被取代的助手文本](https://github.com/openai/codex/pull/58751) | 在有持久化历史的线程中驱逐较旧的助手文本；保留恢复响应。 |
| **#58727** | [使用本地 Bazel 进行语音发布构建](https://github.com/openai/codex/pull/58727) | 设置空的 `BUILDBUDDY_API_KEY` 使语音构建使用本地 Bazel 配置。 |
| **#58722** | [为 TUI 后端会话添加命名和导航辅助方法](https://github.com/openai/codex/pull/58722) | 辅助方法用于按注册顺序命名、查找和循环切换监听后端。 |
| **#58720** | [在子代理选择器中优先处理待批准项](https://github.com/openai/codex/pull/58720) | 将需要审批的线程排在 `/subagents` 首位，标记 `(needs approval)`。 |
| **#58719** | [将原生语音依赖接入完整 Rust CI](https://github.com/openai/codex/pull/58719) | 使用 Bazel 为 Linux/macOS/Windows x64/ARM64 构建原生语音 SDK。 |
| **#58718** | [支持在嵌入区域渲染 TUI 对话](https://github.com/openai/codex/pull/58718) | 将渲染分为准备/绘制/后绘制阶段；支持嵌入边界。 |
| **#58717** | [使 Bazel 检查变为建议性并暂停 Bazel 发布产物](https://github.com/openai/codex/pull/58717) | 暂时移除 Bazel 阻塞性 CI；发布仅 Cargo 产物。 |

---

## 5. 热门讨论

### 展示与分享
- **#57746** — [Zozo: 一个可检查的 issue 到 PR 示例及审查清单](https://github.com/openai/codex/discussion/57746) — Zozo 的 Ryan 分享了一个协调 Codex 对抗积压工作的示例工作流。
- **#58749** — [Cloakroom: Codex 看到的占位符而非你的密钥](https://github.com/openai/codex/discussion/58749) — 通过钩子本地运行；将密钥替换为 `PII_SECRET_*` 占位符，同时适用于 CLI 和应用。
- **#58738** — [Wudland - 将你的 Codex 会话变成 iPhone 上的像素村民](https://github.com/openai/codex/discussion/58738) — iOS 应用（iOS 26）将编码 agents 展示为村民；通过 `~/.codex/config.toml` 关联。
- **#58735** — [Codex Context Weather: 上下文 gauge 和交接工作流](https://github.com/openai/codex/discussion/58735) — 带阈值警报的日期化上下文 gauge 及交接准备。
- **#58492** — [Bossanova: 面向 Codex 的 MCP 桥接加密保险库](https://github.com/openai/codex/discussion/58492) — Windows/macOS 本地加密保险库，支持可选 MCP 桥接。

### 问答
- **#58546** — [支持索引分页历史的同 ID 迁移](https://github.com/openai/codex/discussion/58546) — 询问在保留身份的同时在 Windows 和 Intel Mac 之间迁移索引线程。
- **#58756** — [Codex 桌面端外部 STDIO MCP：支持的目标身份？](https://github.com/openai/codex/discussion/58756) — 关于信任保证和稳定认证目标绑定的问题。

### 创意想法
- **#58776** — [ChatGPT 和 Codex 通过共享上下文空间实现双向集成](https://github.com/openai/codex/discussion/58776) — 西班牙语提案，探讨 ChatGPT 和 Codex 之间的共享上下文（来自使用 Pro $100/月的开发者）。

---

## 6. 功能需求趋势

1. **独立使用配额** — 强烈社区呼声要求保留 ChatGPT 与 Codex 各自的配额（Issue #58530、#58723、#58742）
2. **钩子原生审批提示** — 请求 `PreToolUse` 支持 `permissionDecision: "ask"`（Issue #28437）
3. **跨平台会话连续性** — 用户希望线程在设备间无缝迁移（Discussion #58546）
4. **密钥管理集成** — 多个第三方工具涌现（Cloakroom、Bossanova），表明安全凭证处理需求旺盛

---

## 7. 开发者痛点

- **平台特定问题**：macOS Quick Chat 启动失败、Windows 浏览器权限与保存设置不一致、Android Remote 消息队列卡住
- **速率限制焦虑**：Plus 订阅用户担忧合并后的 ChatGPT/Codex 配额会减少可用使用量
- **认证摩擦**：Linux 上通过托管 Chromium 被阻止；macOS 重新登录后遇到 cloudflare 挑战
- **上下文管理**：自动压缩丢失当前指令；压缩后模型询问"您想做什么？"
- **文件附件失败**：PPTX/XLSX 附件导致无限转圈；图片大小超过 WebSocket 限制

---

*简报基于 GitHub 数据生成 — github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the GitHub community digest into Chinese. Let me translate it while following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code, version tags, etc. verbatim
4. Keep project names, repository slugs, usernames, etc. in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

---

# Gemini CLI 社区摘要 — 2026年11月2日

## 今日要闻

项目刚刚发布了 **v0.67.0-nightly.20261102.g6814e00d6**，这是一次常规的每日构建版本。与此同时，社区正在处理几个高优先级的智能体稳定性问题——最值得关注的是**通用智能体在委托子智能体时无限挂起**的bug，以及**子智能体恢复错误地将MAX_TURNS终止报告为GOAL成功**的问题。安全和Windows兼容性修复正在PR中推进。

---

## 版本发布

| 版本 | 日期 | 摘要 |
|------|------|------|
| **v0.67.0-nightly.20261102.g6814e00d6** | 2026-11-02 | 自动化每日构建版本号更新。完整变更日志：[compare v0.67.0-nightly.20261101...v0.67.0-nightly.20261102](https://github.com/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261101.g6814e00d6...v0.67.0-nightly.20261102.g6814e00d6) |

---

## 热门 Issue

### 1. 子智能体恢复错误地将MAX_TURNS报告为GOAL成功


这个问题出现在代码库调查器子智能体中，它会在达到最大轮次限制前就报告任务成功，导致用户无法区分真正的完成与被中断的情况。社区对此表示中等程度的担忧，因为完成状态的误导性信息会影响工作流程的可靠性。

### 2. 提案：零依赖操作系统沙箱与执行后意图路由
**[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 优先级 P2 · 9 个评论 · 👍 1

利用Gemini 3对bash的原生亲和力，实现零依赖操作系统沙箱和执行后意图路由。这是一个宏大的增强提案，让模型能够更有效地链接POSIX工具链，同时不危

及安全性。标记为 effort/large——需要大量实现工作。

### 3. 通用智能体无限挂起
**[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 优先级 P1 · 8 个评论 · 👍 8 (社区高度关注)

当 Gemini CLI 委托给通用智能体时，它会无限挂起——即使对于简单的操作（如创建文件夹）也是如此。用户报告等待长达一小时后才被迫取消。指示模型避免使用子智能体可以解决

此问题，表明是委托逻辑的bug。**这是用户最大的痛点。**

### 4. 史诗：评估 AST 感知的文件读取、搜索和映射
**[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 优先级 P2 · 7 个评论

一个追踪调查的史诗，旨在研究用于更精确代码导航的 AST 感知工具——减少因读取错位导致的 token 浪费，并实现精确的方法边界检测。正在评估的潜在工具包括 tilth 或 glyph。

### 5. Gemini 不会主动利用技能和子智能体
**[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — 优先级 P2 · 7 个评论

尽管任务明显符合其描述（例如 gradle 或 git 技能），但 Gemini 很少自主调用自定义技能或子智能体。用户必须明确提示才能使用它们——这限制了自动化潜力。

### 6. 浏览器智能体忽略 settings.json 覆盖
**[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — 优先级 P2 · 5 个评论

浏览器智能体完全忽略 settings.json 中的配置覆盖（例如 maxTurns），尽管 AgentRegistry 在初始化期间正确读取并合并了它们。这是一个配置持久化 bug。

### 7. 权限提示在选择"本次会话允许"后仍然出现
**[#28886](https://github.com/google-gemini/gemini-cli/issues/28886)** — 优先级 P1 (安全) · 4 个评论

用户报告即

使选择"本次会话允许"或"允许所有未来会话"后，仍然会重复出现读取操作的权限提示。影响 geminicli.com 前端——可能是会话令牌处理问题。

### 8. 浏览器智能体：自动会话接管和锁恢复
**[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — 优先级 P3 · 4 个评论

功能请求：增强浏览器智能体弹性——在遇到持久会话模式下的锁定浏览器配置文件时实现自动会话接管和锁恢复，而不是当前的快速失败策略。

### 9. 浏览器子智能体在 Wayland 上失败
**[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 优先级 P1 · 4 个评论 · 👍 1

浏览器子智能体在 Wayland 显示服务器上失败，限制了纯 Wayland 环境下 Linux 用户的 CLI 实用性。

### 10. 实验：任务追踪器的原生文件工具
**[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)** — 优先级 P3 · 4 个评论

用持

久化的基于文件的 CRUD 操作替代上下文内任务追踪（WriteToDo）的提案，旨在降低 token 消耗并防止会话间的上下文衰减。关联到史诗 #18836。

---

## 关键 PR 进展

| PR | 作者 | 区域 | 描述 |
|----|------|------|------|
| **#30091** | gemini-cli-robot | 发布 | 版本号更新至 v0.67.0-nightly.20261102.g6814e00d6 |
| **#29921** | AbbasFullstack | 核心 | 识别 TortoiseGitPlink 为 PuTTY 系列 SSH 客户端（修复 Windows 上使用 TortoiseGit 时的 git 操作） |
| **#29946** | Web4everyone32 | 智能体 | 按父会话和端点隔离远程会话——防止跨会话对话泄漏 |
| **#29940** | Web4everyone32 | 平台 | 不使用 Unix 管道运行 YAML lint——修复 Windows 原生兼容性（`'grep' is not recognized`） |
| **#29942** | Web4everyone32 | 智能体 | 扫描完整计划内容并报告读取失败——修复前导空白导致计划被拒绝的问题 |
| **#29935** | Web4everyone32 | 核心 | 保留 @file 引用内容中的空白——修复附加文件中的缩进丢失 |
| **#29931** | wzhyhxn | 核心 | 展开 Windows 主目录相对路径（`~\policies\custom.toml`） |
| **#29929** | DisturbedCrow | 核心 | 在模型列表中显示准确输出限制（Gemini 2.5 Pro/Flash 的 65,536，而非误导性的 8,192） |
| **#29924** | 0x5t4l1n | 核心 | 保留会话预览中的 Unicode——修复非 ASCII 提示的空白/误导性描述 |
| **#30088** | Neal006 | 安全 | 将错误报告（`gemini-client-error-*.json`）移至受限权限的 `~/.gemini/tmp/error-reports/` |

### 其他亮点

- **#30090** (oflavioc): CI 安全修复——防止在链式 e2e 工作流中将 GEMINI_API_KEY 暴露给 fork 控制的代码
- **#30089** (dependabot): 大规模 npm 依赖更新——70 个包，包括 @modelcontextprotocol/sdk 1.23→1.32.2 和 @octokit/rest 22.0.0→22.0.1
- **#30051** (Vara715): 修复 headless 运行中断——现在在收到 SIGINT/SIGTERM 时会终止活动 shell 并持久化工具调用

---

## 功能请求趋势

根据 issue 分析，社区重点关注：

1. **智能体自主性和工具调用** — 用户希望 Gemini 在没有明确提示的情况下主动调用技能和子智能体（#21968, #19873）
2. **AST 感知的代码库导航** — 对超越 grep/cat 的结构化代码理解工具有强烈兴趣（#22745, #22746）
3. **子智能体可靠性** — 修复挂起（#21409）、虚假成功报告（#22323）和会话隔离（#29946）问题
4. **平台对等** — Windows 路径展开、Wayland 支持、原生 YAML 解析（#29931, #21983, #29940）
5. **持久化任务追踪** — 基于文件的 todo 列表替代上下文内内存（#21000, #18836）
6. **安全加固** — 错误报告隔离、会话令牌处理（#30088, #28886）

---

## 开发者痛点

- **通用智能体挂起** — 最阻塞的问题；任何需要子智能体委托的任务都会导致生产力下降
- **权限循环疲劳** — 即使授予会话级访问权限后仍重复提示（#28886）
- **配置被忽略** — 浏览器智能体 settings.json 覆盖不生效（#22267）
- **工具膨胀** — 400+ 工具触发 400 错误；智能体需要更智能的范围界定（#24246）
- **临时脚本泛滥** — 模型将编辑脚本写入随机目录，造成清理负担（#23571）
- **破坏性行为** — 智能体偶尔使用 `git reset --force` 而非更安全的替代方案（#22672）

---

*基于 GitHub 数据生成 — 2026年11月2日*</think>

# Gemini CLI 社区摘要 — 2026年11月2日

## 今日要闻

项目刚刚发布了 **v0.67.0-nightly.20261102.g6814e00d6**，这是一次常规的每日构建版本。与此同时，社区正在处理几个高优先级的智能体稳定性问题——最值得关注的是**通用智能体在委托子智能体时无限挂起**的bug，以及**子智能体恢复错误地将MAX_TURNS终止报告为GOAL成功**的问题。安全和Windows兼容性修复正在PR中推进。

---

## 版本发布

| 版本 | 日期 | 摘要 |
|------|------|------|
| **v0.67.0-nightly.20261102.g6814e00d6** | 2026-11-02 | 自动化每日构建版本号更新。完整变更日志：[compare v0.67.0-nightly.20261101...v0.67.0-nightly.20261102](https://github.com/google-gemini/gemini-cli/compare/v0.67.0-nightly.20261101.g6814e00d6...v0.67.0-nightly.20261102.g6814e00d6) |

---

## 热门 Issue

### 1. 子智能体恢复错误地将MAX_TURNS报告为GOAL成功
**[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 优先级 P1 · 13 个评论 · 👍 2

`codebase_investigator` 子智能体在达到最大轮次限制前就报告 `status: "success"` 和 `Termination Reason: "GOAL"`，即使它并未完成分析。这向用户隐藏了实际的中断，使用户无法区分真正的成功与被截断的工作。社区反应：对误导性的完成状态表示中等程度的担忧。

### 2. 提案：零依赖操作系统沙箱与执行后意图路由
**[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 优先级 P2 · 9 个评论 · 👍 1

利用 Gemini 3 对 bash 的原生亲和力，实现零依赖操作系统沙箱和执行后意图路由的宏大增强提案。这将让模型更有效地链接 POSIX 工具（`grep`、`cat`、`sed`、`awk`），同时不危及安全性。标记为 effort/large——需要大量实现工作。

### 3. 通用智能体无限挂起
**[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 优先级 P1 · 8 个评论 · 👍 8（社区高度关注）

当 Gemini CLI 委托给通用智能体时，它会无限挂起——即使对于简单的操作（如创建文件夹）也是如此。用户报告等待长达一小时后才被迫取消。指示模型避免使用子智能体可以解决此问题，表明是委托逻辑的bug。**这是用户最大的痛点。**

### 4. 史诗：评估 AST 感知的文件读取、搜索和映射
**[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 优先级 P2 · 7 个评论

一个追踪调查的史诗，旨在研究用于更精确代码导航的 AST 感知工具——减少因读取错位导致的 token 浪费，并实现精确的方法边界检测。正在评估的潜在工具包括 tilth 或 glyph。

### 5. Gemini 不会主动利用技能和子智能体
**[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — 优先级 P2 · 7 个评论

一个反复出现的经验性投诉：即使任务明显符合其描述（例如 gradle 或 git 技能），Gemini 也很少自主调用自定义技能或子智能体。用户必须明确提示才能使用它们——这限制了自动化潜力。

### 6. 浏览器智能体忽略 settings.json 覆盖
**[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — 优先级 P2 · 5 个评论

浏览器智能体完全忽略 `settings.json` 中的配置覆盖（例如 `maxTurns`），尽管 `AgentRegistry` 在初始化期间正确读取并合并了它们。这是一个配置持久化 bug。

### 7. 权限提示在选择"本次会话允许"后仍然出现
**[#28886](https://github.com/google-gemini/gemini-cli/issues/28886)** — 优先级 P1（安全）· 4 个评论

用户报告即使选择"本次会话允许"或"允许所有未来会话"后，仍然会重复出现读取操作的权限提示。影响 geminicli.com 前端——可能是会话令牌处理问题。

### 8. 浏览器智能体：自动会话接管和锁恢复
**[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — 优先级 P3 · 4 个评论

功能请求：增强浏览器智能体弹性——在遇到持久会话模式下的锁定浏览器配置文件时实现自动会话接管和锁恢复，而不是当前的快速失败策略。

### 9. 浏览器子智能体在 Wayland 上失败
**[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 优先级 P1 · 4 个评论 · 👍 1

浏览器子智能体在 Wayland 显示服务器上失败，限制了纯 Wayland 环境下 Linux 用户的 CLI 实用性。

### 10. 实验：任务追踪器的原生文件工具
**[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)** — 优先级 P3 · 4 个评论

用持久化的基于文件的 CRUD 操作替代上下文内任务追踪（WriteToDo）的提案，旨在降低 token 消耗并防止会话间的上下文衰减。关联到史诗 #18836。

---

## 关键 PR 进展

| PR | 作者 | 区域 | 描述 |
|----|------|------|------|
| **#30091** | gemini-cli-robot | 发布 | 版本号更新至 v0.67.0-nightly.20261102.g6814e00d6 |
| **#29921** | AbbasFullstack | 核心 | 识别 TortoiseGitPlink 为 PuTTY 系列 SSH 客户端（修复 Windows 上使用 TortoiseGit 时的 git 操作） |
| **#29946** | Web4everyone32 | 智能体 | 按父会话和端点隔离远程会话——防止跨会话对话泄漏 |
| **#29940** | Web4everyone32 | 平台 | 不使用 Unix 管道运行 YAML lint——修复 Windows 原生兼容性（`'grep' is not recognized`） |
| **#29942** | Web4everyone32 | 智能体 | 扫描完整计划内容并报告读取失败——修复前导空白导致计划被拒绝的问题 |
| **#29935** | Web4everyone32 | 核心 | 保留 @file 引用内容中的空白——修复附加文件中的缩进丢失 |
| **#29931** | wzhyhxn | 核心 | 展开 Windows 主目录相对路径（`~\policies\custom.toml`） |
| **#29929** | DisturbedCrow | 核心 | 在模型列表中显示准确输出限制（Gemini 2.5 Pro/Flash 的 65,536，而非误导性的 8,192） |
| **#29924** | 0x5t4l1n | 核心 | 保留会话预览中的 Unicode——修复非 ASCII 提示的空白/误导性描述 |
| **#30088** | Neal006 | 安全 | 将错误报告（`gemini-client-error-*.json`）移至受限权限的 `~/.gemini/tmp/error-reports/` |

### 其他亮点

- **#30090** (oflavioc): CI 安全修复——防止在链式 e2e 工作流中将 GEMINI_API_KEY 暴露给 fork 控制的代码
- **#30089** (dependabot): 大规模 npm 依赖更新——70 个包，包括 @modelcontextprotocol/sdk 1.23→1.32.2 和 @octokit/rest 22.0.0→22.0.1
- **#30051** (Vara715): 修复 headless 运行中断——现在在收到 SIGINT/SIGTERM 时会终止活动 shell 并持久化工具调用

---

## 功能请求趋势

根据 issue 分析，社区重点关注：

1. **智能体自主性和工具调用** — 用户希望 Gemini 在没有明确提示的情况下主动调用技能和子智能体（#21968, #19873）
2. **AST 感知的代码库导航** — 对超越 grep/cat 的结构化代码理解工具有强烈兴趣（#22745, #22746）
3. **子智能体可靠性** — 修复挂起（#21409）、虚假成功报告（#22323）和会话隔离（#29946）问题
4. **平台对等** — Windows 路径展开、Wayland 支持、原生 YAML 解析（#29931, #21983, #29940）
5. **持久化任务追踪** — 基于文件的 todo 列表替代上下文内内存（#21000, #18836）
6. **安全加固** — 错误报告隔离、会话令牌处理（#30088, #28886）

---

## 开发者痛点

- **通用智能体挂起** — 最阻塞的问题；任何需要子智能体委托的任务都会导致生产力下降
- **权限循环疲劳** — 即使授予会话级访问权限后仍重复提示（#28886）
- **配置被忽略** — 浏览器智能体 settings.json 覆盖不生效（#22267）
- **工具膨胀** — 400+ 工具触发 400 错误；智能体需要更智能的范围界定（#24246）
- **临时脚本泛滥** — 模型将编辑脚本写入随机目录，造成清理负担（#23571）
- **破坏性行为** — 智能体偶尔使用 `git reset --force` 而非更安全的替代方案（#22672）

---

*基于 GitHub 数据生成 — 2026年11月2日*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese, following the rules provided. I need to:

1. Translate the content into natural technical Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep all technical identifiers, URLs, issue numbers, version tags as-is
4. Use the register of a Chinese developer newsletter

Let me go through the content:

**Title:**
GitHub Copilot CLI 社区简报

**Date:**
2026-11-02

**Section 1: Today's Highlights**
GitHub 发布了 v1.0.106-2，包含两个针对性修复：改进了屏幕阅读器用户在处理错误/警告时的无障碍体验，以及修复了 /resume 命令错误显示重复后台会话的问题。社区正在积极报告模型配置灵活性相关的问题，其中 #3709（/model 选择器支持 BYOK/本地模型）获得 34 个 👍，成为本期呼声最高的功能需求。

**Section 2: Releases**
保持版本号和链接。

**Section 3: Hot Issues**
翻译每个问题的标题和摘要，保持编号和 👍 数量。

**Section 4: Key PR Progress**
无更新，保持原样。

**Section 5: Feature Request Trends**
翻译趋势描述。

**Section 6: Developer Pain Points**
翻译痛点描述。

**Footer:**
保持链接和日期。

Let me translate carefully:</think>

# GitHub Copilot CLI 社区简报

**日期：** 2026-11-02

---

## 1. 今日要闻

GitHub 发布了 **v1.0.106-2**，包含两个针对性修复：改进了屏幕阅读器用户在处理错误/警告消息时的无障碍体验，以及修复了 `/resume` 命令错误重复显示后台会话的问题。与此同时，社区正在积极反馈模型配置灵活性相关的问题——**#3709**（在 `/model` 中切换 BYOK/本地模型支持）获得 34 个 👍，成为本期呼声最高的功能需求。

---

## 2. 版本发布

### v1.0.106-2
**发布日期：** 2026-11-01 | [版本标签](https://github.com/github/copilot-cli/releases/tag/v1.0.106-2)

| 修复内容 | 说明 |
|----------|------|
| **屏幕阅读器无障碍** | 错误、失败/拒绝的工具调用和警告消息现已在前面正确添加 "Error:" 或 "Warning:" 前缀，而非像普通消息那样朗读 |
| **/resume 修复** | 将已运行的后台会话切换到前台，而非重复显示 |

---

## 3. 热门 Issue

| 编号 | Issue | 摘要 | 👍 |
|------|-------|------|---|
| **#3709** | [允许 /model 在多个模型间切换，包括 BYOK/本地模型](https://github.com/github/copilot-cli/issues/3709) | BYOK 模式通过 `COPILOT_MODEL` 将会话固定到单一模型，而 `/model` 选择器仅列出 GitHub 托管模型——本地 BYOK 提供商的模型无法选择。 | **34** |
| **#5312** | [上下文窗口回滚失败：1.0.105 缺少 checkpoint.md](https://github.com/github/copilot-cli/issues/5312) | 回归问题：上下文内存检查点文件缺失，导致回滚失败。在 #5205 未给出解释或修复的情况下关闭后提交。 | 0 |
| **#5318** | [grep 压缩导致文件名和行号错乱](https://github.com/github/copilot-cli/issues/5318) | 内置 `rg` 工具在输出压缩误解数字后缀为字段分隔符时返回错误的文件/行数据。 | 0 |
| **#4560** | [模型 "auto" 始终以推理强度禁用状态运行](https://github.com/github/copilot-cli/issues/4560) | 自动模型选择设置 `reasoningEffort: null`，并拒绝用户配置推理强度的任何尝试。 | 0 |
| **#4681** | [MCP OAuth 缺少 User-Agent 请求头](https://github.com/github/copilot-cli/issues/4681) | OAuth 登录后，对 MCP 服务器的 `initialize` 请求未携带 User-Agent 头，忽略了自定义请求头配置。 | 0 |
| **#4548** | [自定义技能调用丢失选项参数](https://github.com/github/copilot-cli/issues/4548) | 调用 `/skill-name --option value` 记录了完整输入，但在发送给技能的提示中遗漏了选项参数。 | 0 |
| **#5317** | [/compact 后 checkpoint 列表变化，导致提示缓存失效](https://github.com/github/copilot-cli/issues/5317) | 压缩后，系统提示中的 checkpoint 列表发生变化，使后续每个请求的提供商缓存前缀都失效。 | 0 |
| **#5315** | [远程控制：通过 GitHub Mobile 实现语音模式](https://github.com/github/copilot-cli/issues/5315) | 功能需求：通过 GitHub Mobile 应用为远程 CLI 会话启用语音输入/输出。 | 0 |
| **#5274** | [可视化区分内置命令和自定义技能](https://github.com/github/copilot-cli/issues/5274) | 请求在视觉上区分（如同色标识）斜杠命令来源于内置功能还是技能。 | 0 |
| **#5272** | [黑底白字主题支持](https://github.com/github/copilot-cli/issues/5272) | CLI 当前针对深色终端优化；请求添加浅色主题支持。 | 0 |

---

## 4. 关键 PR 进展

过去 24 小时内无更新。

---

## 5. 功能需求趋势

| 趋势 | 说明 |
|------|------|
| **模型灵活性** | 强烈希望在单一会话中切换 GitHub 托管模型和 BYOK/本地模型（#3709），并修复 "auto" 模型行为（#4560） |
| **远程控制扩展** | 用户希望实现语音 I/O（#5315）、嵌套会话可见性（#5316）以及更好的 GitHub Mobile 集成（#5313） |
| **无障碍与主题** | 浅色主题支持（#5272）、命令可视化区分（#5274），v1.0.106-2 中的屏幕阅读器改进 |
| **稳定性修复** | 上下文内存检查点问题（#5312、#5317）、grep 输出错乱（#5318）、提交失败后提示丢失（#5264） |
| **跨产品一致性** | VS Code Copilot 与 CLI 之间的工具名称不匹配（#738） |

---

## 6. 开发者痛点

- **模型选择受限**：无法通过 `/model` 选择器使用本地/BYOK 模型；"auto" 模式强制禁用推理强度
- **上下文内存不稳定**：检查点文件损坏/阻止列表问题导致 v1.0.105+ 会话回滚失败
- **自定义技能参数丢失**：传递给技能的选项在发送给模型前丢失
- **MCP OAuth 集成缺陷**：缺少 User-Agent 头导致自定义 MCP 服务器配置失效
- **终端兼容性**：浅色主题用户渲染效果差；grep 结果因输出压缩缺陷导致归属错误

---

*内容来源：github.com/github/copilot-cli | 数据时间：2026-11-01*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English OpenCode Community Digest into Chinese (Simplified), following specific translation rules. Let me carefully translate this while:

1. Keeping all Markdown structure exactly as-is (headings, tables, lists, bold, emoji, horizontal rules)
2. Preserving URLs, issue/PR numbers, code references, file paths as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Translating conceptually, not word-for-word

Let me go through the digest section by section:

## Today's Highlights

The OpenCode community is addressing several high-impact issues as we close out the week. Critical problems include a shell timeout bug that can hang indefinitely when process creation stalls, sudo-based commands breaking the UI, and a plan/build mode state desync causing unauthorized edits. On the positive side, performance improvements to SQLite WAL writes (84.4% reduction) and new loop detection logic for reasoning/tool-call cycles are progressing through PRs.

OpenCode 社区本周收官之际正在处理多个高影响力问题。主要包括：shell 超时 bug 导致进程创建阻塞时无限挂起、sudo 命令导致 UI 崩溃、以及 plan/build 模式状态不同步引发的未授权编辑。好消息是，SQLite WAL 写入性能优化（减少 84.4%）和推理/工具调用循环检测新逻辑正在 PR 推进中。

## Releases

No new releases in the last 24 hours.

过去 24 小时无新版本发布。

## Hot Issues

Then the table - I need to translate the descriptions while keeping the format

Let me continue translating all sections properly.</think>

# OpenCode 社区简报 — 2026-11-02

## 今日焦点

OpenCode 社区本周收官之际正在处理多个高影响力问题。主要包括：shell 超时 bug 在进程创建阻塞时无法触发导致无限挂起、sudo 命令导致 UI 崩溃、以及 plan/build 模式状态不同步引发的未授权编辑。好消息是，SQLite WAL 写入性能优化（减少 84.4%）和推理/工具调用循环检测新逻辑正在 PR 推进中。

---

## 版本发布

过去 24 小时无新版本发布。

---

## 热门问题

| # | 问题 | 重要性 | 反馈 |
|---|-------|--------|------|
| **[#1852](https://github.com/anomalyco/opencode/issues/1852)** | 需要 sudo 权限的命令会导致 UI 崩溃并使 agent 挂起 | 严重用户体验问题 — 需要 sudo 的工具静默失败，用户卡住无法操作 | 👍 11, 💬 14 |
| **[#53955](https://github.com/anomalyco/opencode/issues/53955)** | Agent 在 plan 模式下仍然进行编辑 | 严重协议违规 — plan 模式应为只读，但 agent 仍执行破坏性更改 | 👍 1, 💬 12 |
| **[#61122](https://github.com/anomalyco/opencode/issues/61122)** | Shell 超时在进程创建卡死时永远无法触发 | 核心可靠性问题 — 前台 shell 调用在 spawn 阻塞时可能永久挂起 | 💬 6 |
| **[#61010](https://github.com/anomalyco/opencode/issues/61010)** | Plan/build 模式状态在 UI 和 agent 间不同步 | 状态不一致导致 agent 忽略用户实际的模式选择，引发未授权操作 | 💬 4 |
| **[#60753](https://github.com/anomalyco/opencode/issues/60753)** | opencode-go 网关返回无效 JSON，导致会话崩溃 | 间歇性上游故障永久污染会话 — 只能通过回滚恢复 | 💬 3 |
| **[#52870](https://github.com/anomalyco/opencode/issues/52870)** | 功能请求：V2 插件的只读历史执行变更集 | 插件开发者需要访问历史执行数据用于调试和审计 — 呼声很高 | 👍 1, 💬 5 |
| **[#53529](https://github.com/anomalyco/opencode/issues/53529)** | 功能请求：允许 API 客户端和 agent 将现有会话作为 Desktop 标签页打开 | API 用户无法在 Desktop 客户端中显示会话 — 限制了集成场景 | 👍 1, 💬 4 |
| **[#60982](https://github.com/anomalyco/opencode/issues/60982)** | 功能请求：为老旧非 SSE4.2 CPU 提供 Node.js 后备方案 | 2011 年前的旧硬件用户完全无法运行 OpenCode — 阻碍推广 | 💬 4 |
| **[#53524](https://github.com/anomalyco/opencode/issues/53524)** | LM Studio + Qwen3.8 27b Splash 模型的 IOP 问题 | 协议不兼容导致热门本地模型无法使用 | 💬 3 |
| **[#60413](https://github.com/anomalyco/opencode/issues/60413)** | 永久 404 SessionNotFoundError 被无限重试 | 客户端浪费资源永久重试已失败请求 — 某案例达 94 次请求/43 分钟 | 💬 3 |

---

## 主要 PR 进展

| # | PR | 内容 |
|---|-----|------|
| **[#58916](https://github.com/anomalyco/opencode/pull/58916)** | perf(core): write each assistant part as its own row | 大量减少 SQLite WAL 写入 — 工具密集型会话写入减少 84.4%（47.89 MB → 7.46 MB）|
| **[#61128](https://github.com/anomalyco/opencode/pull/61128)** | feat(core): reasoning + cross-step tool-call loop detection | 移植 fork 的循环保护 — 检测推理重复和工具调用循环（周期 1-4）|
| **[#61130](https://github.com/anomalyco/opencode/pull/61130)** | feat(core): dsv4 recovery middleware | llmgw/dsv4 提供商的 DSML 保护 + 历史清理 + 诊断 |
| **[#57088](https://github.com/anomalyco/opencode/pull/57088)** | fix(desktop): restore edge-snapped window bounds | 修复窗口吸附边缘时窗口边界被丢弃的问题 |
| **[#56918](https://github.com/anomalyco/opencode/pull/56918)** | fix(desktop): show SSH setup progress | SSH 设置现在显示进度而不是卡住不动 |
| **[#61028](https://github.com/anomalyco/opencode/pull/61028)** | fix(core): skip projects with invalid stored worktree | 跨系统 worktree 路径残留在配置中时防止崩溃 |
| **[#61094](https://github.com/anomalyco/opencode/pull/61094)** | fix(tui): surface unsupported clipboard reads as paste errors | Wayland/Nix 下剪贴板不可用时显示更友好的错误信息 |
| **[#60836](https://github.com/anomalyco/opencode/pull/60836)** | fix(core): let retry hooks handle content-filter finishes | 内容过滤器触发时重试钩子现在也能工作 — 修复 #60822 |
| **[#61120](https://github.com/anomalyco/opencode/pull/61120)** | fix(core): avoid holding models.dev refresh lock across network timeout | 防止模型列表刷新缓慢/失败时的锁争用 |
| **[#59409](https://github.com/anomalyco/opencode/pull/59409)** | feat(cli): report subagent parentID in ACP session/list | API 消费者现在可以识别 subagent 层级关系 |

---

## 功能请求趋势

1. **插件与 API 扩展性** — 只读历史变更集 (#52870)、请求级工具执行 (#47541)、将会话作为 Desktop 标签页打开 (#53529)
2. **老旧硬件支持** —  pre-SSE4.2 CPU 的 Node.js 兼容性 (#60982)
3. **GUI 插件平权** — 在 web 应用中加载 `./gui-experimental` 插件 (#60976)
4. **模型选择透明度** — 默认模型可见性提升 (#61123)
5. **配额/计费改进** — 按账户（而非按 IP）的免费额度执行 (#60991)

---

## 开发者痛点

- **Plan 模式安全性违规** — 多起报告称 agent 忽略 plan 模式进行编辑；这是核心信任问题
- **无限重试循环** — 永久性错误（404、内容过滤）触发无限重试，浪费资源
- **配额耗尽** — 免费版用户报告 BigPickle 配额几乎瞬间耗尽，共享 IP 桶化导致新用户被拦截
- **Shell 挂起** — 进程创建卡死时超时永不触发，用户只能面对冻结的会话
- **支付失败** — 欧盟用户（尤其是意大利）因通用支付拒绝无法订阅
- **模型/提供商兼容性** — LM Studio、OpenAI 兼容网关和本地模型存在协议差距导致故障

---

*简报基于 2026-11-02 的 GitHub 数据生成*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest from English to Chinese. Let me translate it according to the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, preserving all the markdown structure while making it read naturally in Chinese.</think>

# Pi 社区digest — 2026-11-02

## 1. 今日要闻

今天的活动主要围绕 bug 修复和性能改进展开。值得关注的工作包括：为代码模式截止时间处理修复 durable 执行问题、为 Qwen token 计划添加 GLM-5.3 模型支持，以及多个关于上下文管理和文件系统操作的重要 bug 报告。过去 24 小时内社区活跃，共更新了 27 个 issue 和 4 个 PR。

## 2. 发布动态

过去 24 小时内无新版本发布。

## 3. 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| [#8301](https://github.com/earendil-works/pi/issues/8301) | **[bug] 无法在提示队列中交错插入压缩请求** — 第一个 `/compact` 命令会立即取消会话并开始压缩，破坏了 `"做任务1" /compact "做任务2"` 这类工作流 | 破坏了基本的队列组合；用户无法混合使用压缩和提示 | 8 条评论，2 👍 |
| [#10287](https://github.com/earendil-works/pi/issues/10287) | **[bug] `getContextUsage()` 在可重试网络错误后严重高估上下文** — 上下文在 WebSocket/fetch 失败后从约 42k 飙升到 330k tokens | 导致不必要的压缩和 tokens 浪费；误导用户对实际用量的判断 | 6 条评论，1 👍 |
| [#10885](https://github.com/earendil-works/pi/issues/10885) | **未检测到来自 llama.cpp 服务器的上下文溢出，自动压缩从未触发** — llm-server 返回的 "Context size exceeded" 错误未被 Pi 识别 | llama.cpp 用户的自动压缩失效；上下文管理被破坏 | 6 条评论，1 👍 |
| [#11527](https://github.com/earendil-works/pi/issues/11527) | **Bedrock: 每次请求都创建新的 BedrockRuntimeClient** — 每次模型调用都创建新的凭证和 HTTP/2 会话，触发 SSO `GetRoleCredentials` 往返 | AWS Bedrock 用户的性能杀手；不必要的 API 开销 | 4 条评论 |
| [#11026](https://github.com/earendil-works/pi/issues/11026) | **[durable] pi-durable: 永久删除存储中的对话** — 不存在删除对话的 API，只能放弃它们 | 长期运行的部署无法清理存储 | 4 条评论，4 👍 |
| [#11584](https://github.com/earendil-works/pi/issues/11584) | **tui: 遮罩未覆盖终端图片** — Kitty/iTerm2 图片在遮罩层下仍然可见，造成视觉空洞 | 影响终端用户体验的 UI 渲染 bug | 2 条评论 |
| [#11613](](https://github.com/earendil-works/pi/issues/11613) | **bash 工具对已退出的命令报告"命令超时"** — 子进程保持 stdout/stderr 管道繁忙时产生误报超时 | 误导性错误信息让用户困惑 | 3 条评论 |
| [#10740](https://github.com/earendil-works/pi/issues/10740) | **[bug, codemode] `schemaToType` 在 JSON Schema draft 2020-12 下处理 `prefixItems` 和 `items` 不正确** — 带 `prefixItems` 的元组类型错误转换为 `Array<never>` | 破坏有效 JSON Schema 定义的代码生成 | 3 条评论 |
| [#8829](https://github.com/earendil-works/pi/issues/8829) | **[bug] wrapUIPromptContext 通过展开复制丢失 ui 原型方法** — 类实例通过展开复制时丢失原型方法 | 使用自定义 UI 类的 SDK 用户遇到运行时错误 | 5 条评论 |
| [#11226](https://github.com/earendil-works/pi/issues/11226) | **[bug] 声明顶层变量名为 `tools` 的 codemode 脚本在运行前失败** — 保留关键字冲突导致提前失败 | codemode 用户遭遇的意外破坏性变更 | 2 条评论，1 👍 |

## 4. PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| [#11672](https://github.com/earendil-works/pi/pull/11672) | **fix(durable): 在人工输入时暂停代码模式截止时间** — 等待外部人工决策的代码模式脚本现在会暂停挂钟截止时间。等待间隔持久化在 durable 运行文档中，重启后保留剩余时间。 |
| [#11659](https://github.com/earendil-works/pi/pull/11659) | **feat(ai): 在 qwen-token-plan-individual 中添加 glm-5.3** — 将 GLM-5.3 添加到 Individual Token Plan 白名单，覆盖 models.dev 的低/高/最大努力层级。 |
| [#11656](https://github.com/earendil-works/pi/pull/11656) | **启动时协调更改的 pinned git SHA** — 修复 #10758。启动时现在检查现有 checkout 并检测 pinned SHA 是否已更改，无需手动 `pi update --extensions`。 |
| [#4037](https://github.com/earendil-works/pi/pull/4037) | **fix: 在传统终端中处理 shift+enter** — 在已知终端中将传统 SS3 M 视为 Shift+Enter，插入换行符而非提交。 |

## 5. 热门讨论

| # | 讨论 | 分类 |
|---|------------|----------|
| [#11668](https://github.com/earendil-works/pi/discussions/11668) | **展示与分享: Pi 的 Iris Chat 加密消息扩展** — Iris Chat（类似 Signal 的 Nostr 双重棘轮加密消息）现已作为原生 Pi 扩展提供。配对联系人可安全发送编码任务。 | 展示与分享 |
| [#11662](https://github.com/earendil-works/pi/discussions/11662) | **设置审计: 哪些 settings.json 键有 UI，以及差距在哪里** — 全面审计所有 settings.json 键及其 UI 访问点。识别出四个不可达的设置并提出改进建议。 | 想法 |

## 6. 功能请求趋势

对今日 issue 和讨论的分析揭示了几个反复出现的主题：

- **上下文管理与压缩**: 多个 issue（#8301、#10287、#10885、#11557）集中在上下文估算错误、溢出检测失败和压缩队列问题。用户希望可靠的自动压缩不会误触发。

- **Durable 执行增强**: 对话删除（#11026）、上下文限制时的交接（#11557）和代码模式输出写入器定制（#11070）的请求表明 durable 执行采用率在增长。

- **AWS Bedrock 优化**: #11527 强调生产 AWS 部署需要连接池化和凭证缓存。

- **终端 UI 改进**: 遮罩未覆盖图片（#11584）、复制粘贴行为（#11660）和终端兼容性（#4037）周围的 issue 表明 TUI 开发活跃。

## 7. 开发者痛点

- **上下文误报**: 开发者对 `getContextUsage()` 返回严重不准的 token 计数感到沮丧，尤其是在网络错误后，导致不必要的压缩周期。

- **llama.cpp 集成缺口**: "Context size exceeded" 错误未被 Pi 的自动压缩识别，强制手动干预。

- **OAuth 代理路由**: Token 请求绕过 HTTP_PROXY 设置，在企业代理环境中被阻止。

- **设置可发现性**: 四个设置存在但在初始设置后无法通过 UI 访问，让想要修改它们的用户困惑。

- **代码模式原型丢失**: 自定义 UI 类实例在通过 Pi 内部复制逻辑传递时丢失方法，这是一个微妙但破坏性的 API 设计问题。

---

*基于 2026-11-02 的 GitHub 数据为 earendil-works/pi 生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English Qwen Code Community Digest into Chinese. I need to:

1. Translate the content into Simplified Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, code blocks, etc.)
3. Keep URLs, issue/PR numbers, usernames, version tags, file paths, and technical identifiers in their original form
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Not add any preamble, explanation, or markdown fences around the output

Let me translate section by section:

## 1. Today's Highlights
- Today's → 今日
- Highlights → 重点速览
- v0.26.5 release introduces → v0.26.5 版本引入了
- bounded SQL history queries → 有限制的 SQL 历史查询
- Managed local H2 and Hosted MySQL → 托管的本地 H2 和托管的 MySQL
- paged recent messages → 分页的最新消息
- journal transactions → 日志事务
- desktop client also received an update → 桌面客户端也收到了更新
- UI improvements → UI 改进
- release build job for the sandbox image failed → 沙箱镜像的发布构建任务失败了
- `ghcr.io/qwenlm/qwen-code:0.26.5` was not published → `ghcr.io/qwenlm/qwen-code:0.26.5` 未被发布
- which will impact sandbox-based CI lanes → 这将影响基于沙箱的 CI 流水线
- The Managed Agent gate remains unstable → 托管 Agent 门禁仍然不稳定
- hosted process fault gates show inconsistent failures → 托管进程故障门禁显示不一致的失败

Let me continue with the full translation:

## 2. Releases
- Releases → 版本发布
- Type → 类型


- Key Changes → 主要变更

## 3. Hot Issues
I'll focus on the key issues section, highlighting the critical problems in the Qwen Code project. The main areas of concern involve CI/Infra issues and security vulnerabilities. The Managed Agent gate on the main branch is problematic, blocking pull requests that trigger full testing tiers. E2E Tests are also failing, specifically in interactive/context-compress-interactive.test.ts, without a clear root cause. Additionally, Hosted process fault gates show inconsistent behavior, with the specific job failing unpredictably between runs.

The Node.js path issue on a specific ECS pool host causes mandatory Lint & Static check failures. RocketMQ broker encounters disk exhaustion problems, preventing writes and disrupting Java lane temp directory creation. The 0.26.5 Docker image release build job was unsuccessful, impacting sandbox-based CI pipeline lanes.

Security concerns include the Anthropic content generator lacking stream-safety protections, similar to P1 issues in the OpenAI implementation. Auto mode incorrectly blocks text mentioning the "amend" phrase. The approval card renders unsanitised model-supplied text, and the command block comment overclaims coverage.

In non-interactive mode, read-only commands with file-descriptor duplication are incorrectly denied as file writes.

Key PRs involve web-shell enhancements like GitHub channel configuration, host mount entries, and prompt pinning. Permission fixes include matching amend invocations instead of raw text. Session history gets bucketed by calendar week, and Managed Session list failures are surfaced. OAuth-protected MCP servers now receive current access tokens, with shell redirection parsing implemented.

File changes will trigger notifications for local sessions, and local verification now works inside Docker with a host-side model proxy.

The feature request focuses on enhancing SQL and history querying capabilities, with SQL history queries already delivered in v0.26.5. Web shell improvements include GitHub channel configuration, error handling, and UI enhancements. Permission system hardening involves parsing bash redirections and matching parsed shell invocations. CI infrastructure optimization targets ECS runner pools and dedicated network-isolated runners for web shell smoke tests.

MCP OAuth enhancement ensures current token refresh on each request. Privacy controls allow disabling model.dev catalog refresh. Session management features include calendar-week bucketing and file change notifications.

Developers face recurring challenges with unstable CI on the main branch, inconsistent test failures, and missing Node.js on CI runners. Additional pain points involve disk exhaustion on CI systems, sandbox image publication complications, security false positives, and desktop update failures on Windows. WeChat message ID truncation presents another technical obstacle.

The project's GitHub data compilation from 2026-11-02 provides a comprehensive overview of ongoing development and technical challenges.</think>

# Qwen Code 社区周报 — 2026-11-02

## 1. 今日重点

v0.26.5 版本引入了托管本地 H2 和托管 MySQL 的有限制 SQL 历史查询功能，支持分页查询最近消息和日志事务。桌面客户端也同步更新至 v0.26.5，新增了"保留卡片继续对话"等 UI 改进。然而，由于发布构建任务失败，沙箱镜像 `ghcr.io/qwenlm/qwen-code:0.26.5` 未能成功发布，这将导致基于沙箱的 CI 流水线受到影响。托管 Agent 门禁在 main 分支上仍不稳定，托管进程故障门禁也呈现出运行间不一致的失败情况。

## 2. 版本发布

| 版本 | 类型 | 主要变更 |
|------|------|----------|
| [v0.26.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5) | 稳定版 | 新增托管本地 H2 和托管 MySQL 的有限制 SQL 历史查询，支持分页查询最近消息和日志事务。重构了托管 Agent 会话事件投递循环。 |
| [desktop-v0.26.5](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.26.5) | 桌面版 | Qwen Code Desktop v0.26.5，UI 改进包括"保留卡片继续对话"功能。 |
| [v0.26.5-nightly.20261101.7b4b353750](https://github.com/QwenLM/qwen-code/releases/tag/v0.26.5-nightly.20261101.7b4b353750) | 夜间版 | 发布 v0.26.5-nightly 构建版本。 |

**⚠️ 已知问题：** 由于发布构建任务失败，0.26.5 版本的沙箱镜像未发布（[#16039](https://github.com/QwenLM/qwen-code/issues/16039)）。

## 3. 热门 issue

### 关键 CI/基础设施问题

1. **[#14724](https://github.com/QwenLM/qwen-code/issues/14724)** — Main CI failed: Managed Agent gate — no test identified (147 条评论)
   - **问题原因：** Main 分支上的托管 Agent 门禁测试失败，所有触发完整 tier 的 PR 都被阻塞。期间曾标记过多个不同的测试标识符。
   - **状态：** Open, P1

2. **[#15173](https://github.com/QwenLM/qwen-code/issues/15173)** — Main CI failed: E2E Tests — no test identified (35 条评论)
   - **问题原因：** `interactive/context-compress-interactive.test.ts` 的 E2E 测试失败，暂未找到明确根本原因。
   - **状态：** Open, P1

3. **[#15898](https://github.com/QwenLM/qwen-code/issues/15898)** — Hosted process fault gates fail on main (9 条评论，已关闭)
   - **问题原因：** `Hosted process fault gates / MySQL 8.4 / Java 21` 任务在不同运行之间出现不一致的失败，失败的测量形状在运行间也会变化。
   - **状态：** Closed, P1

4. **[#16005](https://github.com/QwenLM/qwen-code/issues/16005)** — ci: ecs-qwen-hz6-18 has no Node.js on PATH (7 条评论)
   - **问题原因：** 某 ECS 池主机缺少 Node.js，导致任何提交到该机器都会使必需的 Lint & Static 检查失败。
   - **状态：** Open, P2, ready-for-human

5. **[#16003](https://github.com/QwenLM/qwen-code/issues/16003)** — CI runners run out of disk (4 条评论)
   - **问题原因：** RocketMQ broker 拒绝写入，Java 流水线无法创建临时目录，导致多轮运行出现失败。
   - **状态：** Open, P2

6. **[#16039](https://github.com/QwenLM/qwen-code/issues/16039)** — Sandbox image for 0.26.5 not published (3 条评论)
   - **问题原因：** 发布构建任务在 Docker 镜像发布前失败，导致基于沙箱的 CI 流水线被阻塞。
   - **状态：** Open

### 安全与核心功能

7. **[#9005](https://github.com/QwenLM/qwen-code/issues/9005)** — The Anthropic wire is missing stream-safety protections the OpenAI wire already has (8 条评论)
   - **问题原因：** P1 安全问题：Anthropic 内容生成器缺少 OpenAI 实现已有的流安全保护，可能导致数据完整性问题。
   - **状态：** Open, P1

8. **[#13570](https://github.com/QwenLM/qwen-code/issues/13570)** — Auto mode blocks inert text mentioning "amend" phrase (8 条评论)
   - **问题原因：** P2 安全问题：Auto 模式错误地阻止了仅提及 amend 短语但不含实际修改意图的文本，且用户在 ask 规则中没有逃逸口。
   - **状态：** Open, P2

9. **[#13566](https://github.com/QwenLM/qwen-code/issues/13566)** — web-shell: approval card leaves sibling model-supplied text unsanitised (7 条评论)
   - **问题原因：** P2 安全问题：审批卡片渲染了未经消毒的模型生成文本，命令块注释过度声称覆盖范围。
   - **状态：** Open, P2

10. **[#15600](https://github.com/QwenLM/qwen-code/issues/15600)** — Headless -p refuses read-only shell commands using 2>&1 (6 条评论)
    - **问题原因：** 在非交互模式下，包含文件描述符复制（`2>&1`）的只读命令被错误地拒绝为文件写入操作。
    - **状态：** Open, P2

## 4. 关键 PR 进展

| PR | 作者 | 描述 |
|----|------|------|
| **[#16096](https://github.com/QwenLM/qwen-code/pull/16096)** | wenshao | **feat(web-shell): make GitHub channel configuration usable** — GitHub Channel 配置现已采用 GitHub 表单风格，支持通知原因勾选和令牌验证。 |
| **[#15928](https://github.com/QwenLM/qwen-code/pull/15928)** | yiliang114 | **feat(web-shell): add host mount entries and align managed empty-state layout** — 为非 React 主机添加挂载条目，可在无手绘边框的情况下渲染 WebShell。 |
| **[#16095](https://github.com/QwenLM/qwen-code/pull/16095)** | ykakade | **feat(web-shell): pin the prompt of the turn being read** — 当查看的轮次提示行不在视野内时，显示提示叠加层。 |
| **[#16075](https://github.com/QwenLM/qwen-code/pull/16075)** | yiliang114 | **fix(permissions): match amend invocations instead of raw text** — AUTO 模式 amend 守卫现匹配解析后的 shell 调用而非原始命令文本。 |
| **[#16097](https://github.com/QwenLM/qwen-code/pull/16097)** | yiliang114 | **fix(vscode): bucket session history by calendar week** — 会话历史下拉菜单现按公历周分组而非滚动 168 小时窗口。 |
| **[#16082](https://github.com/QwenLM/qwen-code/pull/16082)** | yiliang114 | **fix(web-shell): surface Managed session list failures** — 托管会话列表加载失败现显示为本地化的错误提示并提供重试操作。 |
| **[#15650](https://github.com/QwenLM/qwen-code/pull/15650)** | n1nja88888 | **fix(core): send a current MCP OAuth bearer token on every request** — 受 OAuth 保护的 MCP 服务器现在每次请求都会获取当前访问令牌。 |
| **[#14121](https://github.com/QwenLM/qwen-code/pull/14121)** | yanyukang2003-ux | **fix(core): parse every bash redirection form in shell permission checks** — Shell 权限检查现支持所有 bash 重定向形式，包括带文件描述符编号和强制的形式。 |
| **[#13969](https://github.com/QwenLM/qwen-code/pull/13969)** | samuelhsin | **feat(hooks): add FileChanged notifications for local sessions** — 为本地非托管会话添加 FileChanged 钩子。 |
| **[#16077](https://github.com/QwenLM/qwen-code/pull/16077)** | wenshao | **feat(verify-pr): add local Docker recipe with a host-side model proxy** — 本地 `/verify-pr` 现可通过代理在 Docker 内部使用宿主机上的模型凭证。 |

## 5. 功能趋势

根据 issue 和 PR 分析，以下功能方向需求最多：

| 趋势 | 描述 |
|------|------|
| **增强 SQL/历史查询** | 为托管本地 H2 和托管 MySQL 提供有限制的 SQL 历史查询（已在 v0.26.5 中实现） |
| **Web Shell 改进** | GitHub 渠道配置 UX、托管会话列表错误处理、提示固定叠加层 |
| **权限系统加固** | 解析所有 bash 重定向形式、匹配解析后的 shell 调用进行 amend 检测 |
| **CI 基础设施** | ECS runner 池优化、为 web-shell 冒烟测试配置专用网络隔离 runner |
| **MCP OAuth 增强** | 每次请求刷新当前令牌而非使用捕获的令牌 |
| **隐私控制** | 托管安装的设置中支持禁用 models.dev 目录刷新 |
| **会话管理** | 按公历周对会话历史分组、为本地会话添加 FileChanged 通知 |

## 6. 开发者痛点

### 反复出现的问题

1. **Main 分支 CI 不稳定** — 托管 Agent 门禁和 E2E 测试经常在 main 分支失败，无法确定统一的测试标识符，导致 PR 合并受阻。

2. **测试失败不一致** — 托管进程故障门禁在不同运行间呈现不同的失败模式，使得根本原因诊断困难。

3. **CI runner 缺少 Node.js** — ECS runner `ecs-qwen-hz6-18` 的 PATH 中没有 Node.js，导致不相关提交的必需检查失败。

4. **CI 磁盘耗尽** — RocketMQ broker 和临时目录创建因磁盘空间不足失败，多轮运行均受影响。

5. **沙箱镜像发布失败** — 发布构建任务未能成功发布 Docker 镜像，导致基于沙箱的 CI 流水线中断。

6. **安全误报** — Auto 模式错误阻止提及"amend"的合法文本，shell 权限检查将 `2>&1` 误判为文件写入。

7. **Windows 桌面更新失败** — 旧版本桌面客户端尝试自覆盖导致从旧版本更新失败。

8. **微信消息 ID 截断** — 64 位消息 ID 超出 `Number.MAX_SAFE_INTEGER`，导致数据丢失。

---

*本报告基于 qwen-code 在 2026-11-02 的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*