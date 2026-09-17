# AI CLI 工具社区动态日报 2026-09-17

> 生成时间: 2026-09-17 00:50 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this entire report into Chinese, following specific rules. Let me go through it carefully:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, maintaining the structure:

---

# 跨工具 AI CLI 生态系统对比

## 生态系统概览

截至 2026 年 9 月，AI 驱动的开发者 CLI 工具领域呈现出成熟且多元的生态。主要提供商（Anthropic、OpenAI、Google）和区域玩家（Qwen/阿里）都已推出 CLI 产品，同时还有独立项目（OpenCode、Pi）。各工具的社区参与度都很高，issue 追踪活跃、版本发布频繁、PR 吞吐量强劲。核心主题——会话可靠性、模型访问、可扩展性（MCP/skills）、跨平台兼容性——反映出这是一个正在解决基础开发者体验问题的成熟市场。

---

## 活动对比

| 工具 | 仓库 | Issue (24h) | PRs (24h) | Releases (24h) | Discussions |
|------|------------|:------------:|:---------:|:--------------:|:-----------:|
| **Claude Code** | anthropics/claude-code | 10 | 3 | 1 | N/A |
| **OpenAI Codex** | openai/codex | 10 | ~15 | 9 | 3 |


| **Gemini CLI** | google-gemini/gemini-cli | 10 | 10 | 1 | N/A |
| **OpenCode** | anomalyco/opencode | 10 | 10 | 0 | N/A |
| **Pi** | earendil-works/pi | 10 | 10 | 0 | 2 |
| **Copilot CLI** | github/copilot-cli | 10 | 0 | 4 | N/A |
| **Qwen Code** | QwenLM/qwen-code | 10 | 10 | 3 | N/A |

The data shows nearly identical activity across most tools—10 issues each over 24 hours—suggesting consistent development velocity. OpenCode, Pi, and Copilot CLI have zero new PRs, while Qwen Code leads in releases with three. Only Codex and Pi track discussions, with Codex showing notably higher community engagement at three active threads.

For the notes section: these platforms primarily use Issues and PRs rather than dedicated Discussion forums. Codex maintains the most active community dialogue, while the others rely on issue tracking. Release activity varies—stable, preview, nightly, and alpha variants are all being published regularly across the ecosystem.

The core focus across these tools centers on reliability: session recovery, memory handling, tool integration through MCP, flexible UI layouts, accessibility features, remote development workflows, and platform-specific bug fixes. Claude Code stands out with its emphasis on configuration flexibility and tight desktop integration. OpenAI Codex prioritizes API reliability and rate management. Gemini CLI concentrates on sandbox security and AST-aware tooling. OpenCode and Pi both push layout and workspace flexibility—OpenCode through web-based architecture, Pi through session persistence. Copilot CLI aligns closely with editor integration. Qwen Code takes a web-shell approach with remote development support. These differences create distinct trade-offs in how each tool approaches the core challenges of session state, model access, and extensibility.

Across these tools, common issues emerge: layout changes and UI flexibility dominate discussions, with forced updates causing friction in both OpenCode and Claude Code. Session persistence has become a baseline expectation—users want reliable recovery from interruptions and transcript corruption. Token governance matters more as users demand explicit control over non-conversation context. Remote development support is increasingly important, particularly for Qwen Code and Claude Code addressing SSH and container issues. MCP reliability affects everyone, with configuration reload being a persistent pain point. Technical patterns like prompt caching and sandboxing are emerging, while Qwen Code's shift from Electron to Tauri signals a broader industry movement. Enterprise adoption is accelerating, as evidenced by subscription and Pro tier concerns, though power-user workflows like Vim mode, inline skill invocation, and custom agent frontmatter show this is still an evolving market.</think>

# 跨工具 AI CLI 生态系统对比

## 生态系统概览

截至 2026 年 9 月，AI 驱动的开发者 CLI 工具领域呈现出成熟且多元的生态。主要提供商（Anthropic、OpenAI、Google）和区域玩家（Qwen/阿里）都已推出 CLI 产品，同时还有独立项目（OpenCode、Pi）。各工具的社区参与度都很高，issue 追踪活跃、版本发布频繁、PR 吞吐量强劲。核心主题——会话可靠性、模型访问、可扩展性（MCP/skills）、跨平台兼容性——反映出这是一个正在解决基础开发者体验问题的成熟市场。

---

## 活动对比

| 工具 | 仓库 | Issue (24h) | PRs (24h) | Releases (24h) | Discussions |
|------|------------|:------------:|:---------:|:--------------:|:-----------:|
| **Claude Code** | anthropics/claude-code | 10 | 3 | 1 | N/A |
| **OpenAI Codex** | openai/codex | 10 | ~15 | 9 | 3 |
| **Gemini CLI** | google-gemini/gemini-cli | 10 | 10 | 1 | N/A |
| **OpenCode** | anomalyco/opencode | 10 | 10 | 0 | N/A |
| **Pi** | earendil-works/pi | 10 | 10 | 0 | 2 |
| **Copilot CLI** | github/copilot-cli | 10 | 0 | 4 | N/A |
| **Qwen Code** | QwenLM/qwen-code | 10 | 10 | 3 | N/A |

**注：**

- "N/A" 表示 GitHub Discussions 并非该工具的主要社区渠道（Issues 和 PRs 已启用）
- OpenAI Codex 积极使用 Discussions；其他工具主要通过 Issues 追踪功能需求
- Release 数量包含 stable、preview、nightly 和 alpha 版本

---

## 共同功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|------------------|------------------|----------------|
| **会话/状态恢复** | Claude Code、Copilot CLI、Pi | 恢复中断的会话、转录本损坏恢复、持久化会话 |
| **内存与上下文管理** | Claude Code、Pi、Copilot CLI | 自动记忆、压缩、令牌治理、注入上下文处理 |
| **MCP / 工具集成** | Claude Code、OpenCode、Copilot CLI | MCP 服务器可靠性、自定义工具、工作区级 MCP 配置 |
| **界面/布局灵活性** | OpenCode、Qwen Code、Claude Code | 传统与新布局切换、工作区切换、侧边栏定制 |
| **无障碍访问** | Claude Code、Copilot CLI | 语音朗读、语音模式、屏幕阅读器支持 |
| **远程开发** | Qwen Code、Claude Code、OpenCode | Remote-SSH、Dev Containers、远程守护进程支持 |
| **平台特定修复** | 所有工具 | Windows 沙箱、macOS 剪贴板、Linux 终端处理 |

---

## 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------------|--------------|-------------------|
| **Claude Code** | 桌面端与 CLI 对等、配置灵活性 | 企业及个人开发者 | 深度桌面集成、内存预警、MCP 优先 |
| **OpenAI Codex** | 模型可靠性、API 访问、速率管理 | OpenAI 生态用户 | 重点关注 API 稳定性、容量处理 |
| **Gemini CLI** | 沙箱安全、AST 感知工具 | 安全意识强的开发者 | 零依赖 OS 沙箱、AST 解析以减少 token 开销 |
| **OpenCode** | 布局/工作区灵活性、基于 Web | 多项目高级用户 | V2 Web 架构、布局持久化 |
| **Pi** | 会话连续性、压缩逻辑 | 长时间工作流用户 | 持久化会话、事件流式传输、提示缓存 |
| **Copilot CLI** | 编辑器集成、Vim 工作流 | VS Code/GitHub 生态用户 | Vim 模式、编辑器原生体验 |
| **Qwen Code** | Web-shell 架构、远程开发 | 远程/容器开发者 | Tauri 桌面端、Web-shell 优先、ACP 协议 |

**显著技术分歧：**

- **Claude Code** 和 **Copilot CLI** 将桌面集成作为一等公民体验
- **Gemini CLI** 投入 AST 工具以降低 token 开销
- **Qwen Code** 正从 Electron 迁移到 Tauri 实现桌面应用
- **OpenCode** 和 **Pi** 在 UI/UX 权衡方面有最活跃的社区讨论

---

## 社区活力与成熟度

| 工具 | 社区信号 | 成熟度指标 |
|------|-------------------|---------------------|
| **Claude Code** | 高参与度（热门 issue 33+ 👍），快速发布 | 成熟；v2.1 稳定版，夜间构建频繁 |
| **OpenAI Codex** | 讨论活跃（远程控制 190 👍），PR 量大 | 成熟；稳定发布 + Rust 工具链 alpha |
| **Gemini CLI** | Issue 分类活跃，P1/P2 优先级明确 | 活跃开发；夜间发布节奏 |
| **OpenCode** | Issue 👍 数量高（布局相关 24+），反馈两极化 | 快速迭代；布局变更引发争议 |
| **Pi** | PR 稳定流入，聚焦 bug 修复 | 活跃；v0.85.x API 稳定 |
| **Copilot CLI** | Issue 参与度较低但发布稳定 | 成熟；Vim 模式 GA，长发布历史 |
| **Qwen Code** | P1 bug 快速响应，安全修复及时 | 活跃；v0.24 含破坏性变更 |

**社区最活跃：** OpenAI Codex 和 Claude Code 在绝对数量上领先；Pi 和 Qwen Code 按 issue 数量计算参与度强劲。

---

## 趋势信号

### 上升中的需求

1. **布局与界面灵活性** — 多个工具因强制 UI 变更受到用户反弹（OpenCode、Claude Code）。用户期待可切换的界面。
2. **会话状态持久化** — 从中断恢复、转录本损坏修复到会话续接，现在已是基线预期。
3. **令牌治理** — 用户对非对话上下文（系统提示、工具模式）的显式控制需求日益增长。
4. **远程开发平权** — Qwen Code 和 Claude Code 都在解决 Remote-SSH/容器问题；这是增长中的用例。
5. **MCP 成为生态标准** — 所有工具都在处理 MCP 集成可靠性；MCP 配置重载是反复出现的痛点。

### 技术模式

- **提示缓存** — Pi 的"提示缓存预热"和 Claude Code 的压缩都瞄准 token 效率
- **沙箱化** — Gemini CLI 的零依赖方案 vs. 传统基于容器的解决方案
- **桌面端整合** — Qwen Code 从 Electron 转向 Tauri；反映行业趋势

### 市场信号

- **企业就绪** — 订阅访问（Claude Code #82700）、Pro 套餐速率限制（Codex #45832）和团队策略问题表明企业采用在增长
- **开发者人体工学** — Vim 模式（Copilot CLI）、内联技能调用（OpenCode #15617）和自定义 agent frontmatter（Copilot CLI #2904）表明在投入高级用户工作流

---

*基于社区摘要数据 — 2026-09-17*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the report into Chinese (Simplified Chinese based on the context - they mentioned "简体中文" in the rules). I need to:

1. Translate all the content into Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji)
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the exact Markdown structure.</think>

# Claude Code Skills 社区亮点报告

*数据截至 2026-09-17*

---

## 1. 热门技能排行

最具讨论热度的 PR 代表了重要的技能增强和新功能。根据活动级别和技术影响力：

| PR | 技能 | 功能 | 状态 |
|----|-------|---------------|--------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator（修复） | 修复触发评估误报、Windows 子进程故障及运行时错误处理 | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | Python 复古游戏开发——实现、无头确定性运行、帧检查、状态验证 | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 排版质量控制：防止孤行、寡妇段落、AI 生成文档中的编号错位 | OPEN |
| [#210](https://github.com/anthropics/skills/pull/210) | frontend-design（改进） | 修订前端设计指导的清晰度、可操作性和内在一致性 | OPEN |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer & skill-security-analyzer | 元技能：从 5 个维度（结构、文档、安全等）评估 SKILL.md 质量 | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 智能合约静态分析（Solidity/Rust）+ 锚定到 TON 区块链的加密审计证明 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 零成本 Markdown 转 MP4 视频生成，集成 Marp 实现逼真配音 | OPEN |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder（修复） | 修复 MCP v2.0.0 streamable_http_client 导入及自定义请求头支持 | OPEN |

---

## 2. 社区需求趋势

从 Issue 讨论中，最受期待的方向包括：

| 主题 | Issue | 需求信号 |
|-------|-------|---------------|
| **安全与信任** | [#492](https://github.com/anthropics/skills/issues/492)（43 条评论） | 信任边界滥用——社区技能冒充官方 `anthropic/` 命名空间下的技能 |
| **企业协作** | [#228](https://github.com/anthropics/skills/issues/228)（16 条评论） | Claude.ai 中的组织级技能共享——当前手动上传流程繁琐 |
| **评估/触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556)（12 条评论） | `run_eval.py` 报告 0% 触发率——阻碍技能验证 |
| **治理与安全** | [#412](https://github.com/anthropics/skills/issues/412)（6 条评论） | Agent 治理技能——策略执行、威胁检测、审计追踪 |
| **SharePoint/企业集成** | [#1175](https://github.com/anthropics/skills/issues/1175)（4 条评论） | 通过 Agent 技能安全处理 SharePoint Online 文档 |
| **MCP 暴露** | [#16](https://github.com/anthropics/skills/issues/16)（4 条评论） | 将 Skills 暴露为 MCP 以实现标准化 API 打包 |

---

## 3. 值得期待的新增技能

近期有更新、可能即将合并的活跃 PR：

- **[#1771](https://github.com/anthropics/skills/pull/1771)** proofcore-contract-auditor — Web3 智能合约审计 + TON 区块链 notarization（创建于 2026-09-15）
- **[#1769](https://github.com/anthropics/skills/pull/1769)** skill-creator 触发检测修复 — 错误报告 0% 召回率（创建于 2026-09-14）
- **[#1765](https://github.com/anthropics/skills/pull/1765)** office UTF-8 diff 解码 — DOCX/PPTX/XLSX 差异对比修复（创建于 2026-09-14）
- **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder MCP v2.0 支持 — 流式 HTTP 客户端关键修复（创建于 2026-09-08）
- **[#1734](https://github.com/anthropics/skills/pull/1734)** 检测孤立 docx 注释 — 文档完整性保障（创建于 2026-09-06）

---

## 4. 技能生态系统洞察

> **社区最集中的需求是企业级安全改进、可靠的技能评估/触发机制以及跨组织技能共享能力——这表明从实验性技能创建向生产级、协作工作流的转变。**

---

*报告数据来源于 anthropics/skills 仓库（50 个 PR，50 个 Issue 采样）*

---

<think>The user wants me to translate the Claude Code Community Digest into Chinese. I need to translate only the content, keeping the structure intact, while maintaining technical terminology appropriately. Let me go through each section:

1. Today's Highlights - summarize the key updates
2. Releases - translate the release notes
3. Hot Issues - translate the issue descriptions and summaries
4. Key PR Progress - translate the PR descriptions
5. Feature Request Trends - translate the community requests
6. Developer Pain Points - translate the frustrations

I need to output ONLY the translation with no preamble or explanation, and no markdown fences around the entire output.</think>

# Claude Code 社区简报 — 2026-09-17

## 今日要闻

v2.1.274 版本带来关键内存管理改进，新增可视化警告系统，并推出 `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` 环境变量用于控制 MCP 服务器连接超时时间。与此同时，社区热议无障碍功能（远程控制会话的 TTS 语音播报）、影响 Windows MSIX 部署的平台级 bug，以及桌面端主题定制化的持续讨论。

---

## 版本更新

### v2.1.274 — 2026-09-17

**更新内容：**
- **内存警告** — 内存使用达到临界值时显示可视化警告，并提供释放内存或安全重启的操作指引
- **MCP 启动控制** — 新增 `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` 环境变量，用于限制首次非交互式调用等待连接 MCP 服务器的时间（`0` = 不等待）
- **Effort 属性** — 新增 `effort` 属性支持

[发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.274)

---

## 热门 issue

### 1. Windows MSIX：点击"编辑配置"打开了错误的配置文件 — MCP 服务器静默失败
**#26073** | [查看 Issue](https://github.com/anthropics/claude-code/issues/26073) | 23 条评论 | 33 个 👍

**重要性：** 在 Windows MSIX 安装环境中，点击"编辑配置"会打开错误的 `claude_desktop_config.json`，导致 MCP 服务器无法加载但没有任何提示。用户完全无法洞察为什么 MCP 集成不生效，调试极其困难。

---

### 2. 远程控制会话的 TTS 语音播报 + 语音模式
**#42700** | [查看 Issue](https://github.com/anthropics/claude-code/issues/42700) | 22 条评论 | 30 个 👍

**重要性：** 这一无障碍增强功能将为远程控制会话添加文本转语音播报和语音输入，使 Claude Code 更具包容性，并能在远程协助场景中实现免手操作。

---

### 3. 桌面端：支持自定义主题 / 强调色
**#79305** | [查看 Issue](https://github.com/anthropics/claude-code/issues/79305) | 8 条评论 | 16 个 👍

**重要性：** 桌面端仅提供浅色/深色模式，导致 Claude Desktop 窗口在多显示器环境下与其他应用难以区分。用户希望自定义强调色，以便一眼识别 Claude Code 窗口。

---

### 4. Pro 订阅被阻止 — "组织已禁用订阅访问"
**#82700** | [查看 Issue](https://github.com/anthropics/claude-code/issues/82700) | 7 条评论

**重要性：** 拥有 Pro 订阅的用户在使用 Claude Code 时被阻止，提示"组织已禁用订阅访问"错误，即使完全重新认证并联系支持后仍无法解决。这是付费用户的阻塞性问题。

---

### 5. 桌面应用更新后远程控制返回 HTTP 403 错误
**#91717** | [查看 Issue](https://github.com/anthropics/claude-code/issues/91717) | 5 条评论

**重要性：** 在最近的桌面应用更新后，远程控制会话开始返回 HTTP 403 错误。`/remote-control retry` 命令无法恢复会话，破坏了众多用户的工作流程。

---

### 6. 浏览器面板：无法授予持久化的站点权限
**##93156** | [查看 Issue](https://github.com/anthropics/claude-code/issues/93156) | 5 条评论

**重要性：** 应用内浏览器面板对每个操作都需要获得对某个 origin 的审批。没有"始终允许"选项——只有"拒绝"和"本次允许"——导致权限管理体验非常繁琐。

---

### 7. VSCode 扩展：会话列表仅支持归档/取消归档，无法删除
**#93835** | [查看 Issue](https://github.com/anthropics/claude-code/issues/93835) | 4 条评论 | 5 个 👍

**重要性：** 用户无法在 VSCode 扩展中永久删除会话——只有归档/取消归档选项可用。这导致会话列表不断累积垃圾内容，却没有清理机制。

---

### 8. 浏览器/预览面板隐藏 30 分钟后被销毁，且不会恢复
**#92610** | [查看 Issue](https://github.com/anthropics/claude-code/issues/92610) | 2 条评论 | 1 个 👍

**重要性：** 浏览器面板有硬编码的 30 分钟空闲超时（`idleTimeoutMs: 18e5`），超时后会销毁预览，且重新聚焦时不会自动恢复。用户希望此行为可配置或能在预热时恢复。

---

### 9. 桌面端代码侧边栏：当"分组"设为"无"时，在会话标题旁显示项目文件夹
**#94898** | [查看 Issue](https://github.com/anthropics/claude-code/issues/94898) | 0 条评论

**重要性：** 当会话未分组时，用户会失去每个会话所属项目文件夹的上下文信息。此增强功能将在侧边栏恢复项目可见性。

---

### 10. effortLevel 设置无法持久化"Max" effort 级别
**#94893** | [查看 Issue](https://github.com/anthropics/claude-code/issues/94893) | 1 条评论

**重要性：** UI 提供五个 effort 级别包括"Max"，状态栏也确认选择为"Opus 5 Max"，但该值无法写入配置文件。这是配置持久化 bug。

---

## 关键 PR 进展

### 1. diff：首次编辑仅在有文件可列出时才打开面板
**#94847** | [查看 PR](https://github.com/anthropics/claude-code/pull/94847) | OPEN | 作者：bcherny

**改动内容：** 修复了首次成功执行 Edit/Write/NotebookEdit 到任意路径时 diff 面板自动打开的问题，即使写入的是忽略的文件、仓库外的文件或不同的工作树也会触发。现在只有确实有文件可列出时才会打开。

---

### 2. diff：提示信息通过可能缺少该字段的类型读取视口的布局
**#94843** | [查看 PR](https://github.com/anthropics/claude-code/pull/94843) | CLOSED | 作者：poteat

**改动内容：** 修复了类型检查问题：`mods/diff` 在读取 `viewport.isFullscreen` 时遇到引擎的 `RenderViewport` 未声明该字段的情况。Hook 现已安全读取视口布局。

---

### 3. diff：首次编辑仅在布局允许停靠的位置打开面板
**#94653** | [查看 PR](https://github.com/anthropics/claude-code/pull/94653) | CLOSED | 作者：poteat

**改动内容：** 优化 diff 面板行为，现在仅在布局能够停靠时才在首次编辑时打开，而不是当终端宽度足够（144 列）时就在提示符上方以内联方式打开。

---

## 功能请求趋势

基于 issue 分析，社区最迫切的需求包括：

1. **桌面端定制化** — 自定义主题、强调色、字体大小配置
2. **无障碍增强** — 远程控制会话的 TTS 语音播报、语音模式
3. **持久化权限** — 浏览器面板的"始终允许"站点权限选项
4. **会话管理** — VSCode 扩展中删除会话、会话置顶在 CLI 中的可见性
5. **平台集成** — Windows 11 Copilot 键重映射、原生搜索集成

---

## 开发者痛点

来自社区最频繁的抱怨：

- **平台级故障** — Windows MSIX MCP 静默失败、macOS/Windows 远程控制 403 错误、Chrome 扩展连接问题
- **认证困扰** — MFA 验证失败、订阅访问被阻止（尽管拥有有效 Pro 账户）
- **内存问题** — v2.1.274 新增的临界内存警告表明这是真实存在的用户痛点
- **配置摩擦** — Effort "Max" 级别无法持久化、浏览器权限每次会话重置
- **预览面板脆弱性** — 浏览器面板 30 分钟自动销毁且无恢复机制

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this OpenAI Codex Community Digest from English to Chinese. Let me go through and translate it while preserving the Markdown structure, URLs, code references, and using natural technical Chinese.

Let me carefully translate this while:
1. Keeping all Markdown structure (headings, tables, lists, etc.)
2. Preserving URLs, issue numbers, usernames, version tags
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation
5. Not using markdown fences around the output</think>

# OpenAI Codex 社区摘要 — 2026-09-17

## 今日要闻

Codex 生态在模型可靠性和容量管理方面出现显著活动。多起高影响力 issue 报告了状态轮询期间因不必要的模型重新进入导致的积分消耗问题，同时多个 PR 改善了平台特定功能，包括 Windows 沙盒管理、TUI 中的 Mermaid 图表渲染，以及屏幕阅读器的无障碍功能。社区继续围绕账户切换和远程控制功能推动特性讨论。

---

## 版本发布

**Rust 工具链更新**

| 版本 | 类型 |
|------|------|
| `rusty-v8-v152.2.0` | 稳定版 |
| `rust-v0.155.0-alpha.14` | 预览版 |
| `rust-v0.155.0-alpha.13` | 预览版 |
| `rust-v0.155.0-alpha.12` | 预览版 |
| `rust-v0.155.0-alpha.11` | 预览版 |
| `rust-v0.155.0-alpha.10` | 预览版 |
| `rust-v0.155.0-alpha.9` | 预览版 |
| `rust-v0.155.0-alpha.2.6` | 预览版 |
| `rust-v0.155.0-alpha.2.5` | 预览版 |

v0.155.0 系列有多个 alpha 版本发布，表明开发活跃。这些版本未提供更新日志。

---

## 热门 Issue

### 1. Codex Desktop 轮询重新进入造成的积分浪费
**#35259** — [Open] [bug, rate-limits, tool-calls, app, subagent]  
`dimasyankauskas` · 26 条评论 · 22 👍  
https://github.com/openai/codex/issues/35259

在 Ultra 和多智能体工作中，Codex Desktop 仅为了轮询智能体状态或终端状态就反复重新进入模型。这些纯等待轮次在测量窗口内消耗了 **19.8% 的本地原始 token 使用量**——对于非生产性操作来说，这是相当严重的积分浪费。社区反应强烈（22 👍），凸显了重度用户面临的成本效率问题。

---

### 2. 网页版 ChatGPT"请求过多"阻止访问
**#38503** — [Open] [bug, codex-web, rate-limits, app]  
`omarpinarecords` · 22 条评论 · 17 👍  
https://github.com/openai/codex/issues/38503

ChatGPT 网页版显示一个阻塞性的"请求过多"弹窗，完全阻止了聊天访问，并中断工作流程。这影响了同时运行网页版和桌面版的用户。17 👍 反映了服务可用性方面的广泛挫败感。

---

### 3. Windows PowerShell ExecPolicy 误报
**#40060** — [Open] [bug, windows-os, sandbox, CLI]  
`keyou` · 19 条评论  
https://github.com/openai/codex/issues/40060

当 PowerShell 脚本中同一处同时出现 `Start-Process` 和无关 URL 时，Codex CLI 错误地将其标记为违反执行策略。这导致有效工作流程出现误报。在 0.146.0、0.149.0 和当前 main 版本上均可复现。

---

### 4. 特性请求：AGENTS.md 的 @include 指令
**#17401** — [Open] [enhancement, context]  
`ylluminate` · 13 条评论 · 21 👍  
https://github.com/openai/codex/issues/17401

请求添加 `@path/to/file.md` 指令，在指令组装时将外部文件内容内联到 AGENTS.md 中。这将实现模块化、可维护的智能体配置。强烈的社区兴趣（21 👍）表明对更好的项目组织存在需求。

---

### 5. 详细推理摘要仅显示标题
**#34873** — [Open] [bug, model-behavior, exec, CLI]  
`LiuSZZ` · 9 条评论 · 12 👍  
https://github.com/openai/codex/issues/34873

使用 `model_reasoning_summary = "detailed"` 时，完成的推理项仅包含粗体的状态标题，没有解释性文字。这违背了详细推理摘要的目的。12 👍 表明这是一个有意义的体验退化。

---

### 6. GPT-5.6 Sol / GPT-6 Astra：任务完成可靠性下降
**#42937** — [Open] [bug, model-behavior, app]  
`maikolb` · 8 条评论 · 5 👍  
https://github.com/openai/codex/issues/42937

用户报告称，较新的模型（GPT-5.6 Sol、GPT-6 Astra）虽然表现出更高的智能，但相比前代模型，自主任务完成和运行可靠性反而下降。包括对交付成果和后续版本推出的关联分析。

---

### 7. macOS 远程：作曲家草稿中下划线转义
**#39844** — [Open] [bug, app, session, remote]  
`winnerwbx` · 8 条评论  
https://github.com/openai/codex/issues/39844

在 macOS 远程会话中，反复切换聊天会导致未发送的作曲家草稿中的下划线被转义，破坏输入。特定于 build 6849 (26.818.21641)。

---

### 8. 模型容量错误尽管配额充足
**#45832** — [Open] [bug, windows-os, rate-limits, CLI]  
`laughlife` · 7 条评论 · 3 👍  
https://github.com/openai/codex/issues/45832

Pro 20x 计划用户在配额应该可用的情况下仍收到"所选模型已达容量"错误。影响 Windows 11 上的 GPT-6-Astra 和 GPT-5.6-Sol。

---

### 9. 流断开按账户范围划分
**#45925** — [Open] [bug, app, connectivity]  
`eteai` · 6 条评论  
https://github.com/openai/codex/issues/45925

"完成前流断开"错误显示，根据活跃的 ChatGPT 账户不同，失败率差异约 7 倍。切换账户会显著改变失败率，表明存在账户级别的服务路由问题。

---

### 10. Windows Desktop：首次对话后发送按钮禁用
**#45886** — [Open] [bug, windows-os, app]  
`molijeur-blip` · 6 条评论  
https://github.com/openai/codex/issues/45886

在 Windows Desktop (26.908.40834) 上首次成功对话后，发送按钮变为禁用状态，无法再发送任何提示——而 CLI 正常工作。这阻断了多轮工作流程。

---

## 关键 PR 进展

| PR | 描述 | 影响 |
|----|------|------|
| **#46065** | 通过附件存储路由预准备图像 | 改进消息和工具输出中的图像处理 |
| **#46064** | 在共享策略边界整合 Guardian 测试 | 改进审批路由的测试覆盖 |
| **#46063** | 精简 Guardian 测试，紧缩请求布局断言 | 提高测试可靠性 |
| **#46058** | 将分析事件归因到实时语音会话 | 使用 `voice_session_id` 进行语音会话追踪 |
| **#46054** | 在 TUI 中将 Mermaid 代码块渲染为图表 | 终端 UI 中的可视化图表渲染 |
| **#46051** | 追踪 WebSocket 持续模式和完整输入发送原因 | 更好地了解重连问题的遥测数据 |
| **#46047** | 按触发器标记滚动压缩指标 | 区分启动压缩与请求压缩 |
| **#46044** | 在压缩提示中包含 Code Mode 工具元数据 | 保留压缩中的工具清单 |
| **#46043** | 在设置期间修复过期的 Windows 沙盒账户密码 | 修复 Windows 沙盒设置失败 |
| **#46042** | 为 MCP 工具请求添加只读策略支持 | 保持 MCP 发现的一致性策略 |

**其他值得注意的 PR：**
- **#46040**: 检测到屏幕阅读器时默认关闭 TUI 动画 — 无障碍改进
- **#46038**: 测试 Windows 沙盒 bin DACL 修改权限
- **#46036**: 保存审批审核员时保留配置错误原因
- **#46035**: 为 MCP 连接器添加每个应用的工具暴露配置
- **#46033**: 在 MCP 运行时更新时保留编排器技能缓存

---

## 热门讨论

### 想法

**从 ChatGPT 应用远程控制 Codex**  
#9200 — 50 条评论 · 190 👍  
https://github.com/openai/codex/discussions/9200

> "在笔记本电脑/桌面上以无头/守护进程模式运行 Codex，然后从 ChatGPT → Codex 应用远程控制。"

得票最高的特性请求（190 👍）。用户希望获得移动/远程控制功能，目前可通过 Tailscale + SSH 近似实现。

**账户切换**  
#25630 — 6 条评论 · 7 👍  
https://github.com/openai/codex/discussions/25630

小而实用的请求：无需完全注销/登录即可切换账户的按钮。

**Windows：在现有任务中重新加载沙盒/网络权限**  
#34699 — 1 条评论 · 2 👍  
https://github.com/openai/codex/discussions/34699

现有的长时间运行任务在应用重启后不会重新加载更新后的权限，导致永久性的环境访问丢失。

**蜂群智能：专业模型网络**  
#45841 (Issue) — 6 条评论  
https://github.com/openai/codex/issues/45841

让 Codex 成为首个真正的蜂群智能 / 模型网络系统的提议。

### 问答

**PreToolUse 边界问题**  
#45938 — 1 条评论 · 1 👍  
https://github.com/openai/codex/issues/45938

开发者询问这是有意设计的边界还是漏洞：PreToolUse 可以阻止/重写调用，但无法替换工具结果。

**验证所选与实际权限配置文件**  
#46001 — 0 条评论 · 1 👍  
https://github.com/openai/codex/discussions/46001

Windows Desktop：如何验证所选的自定义权限配置文件实际已应用于任务。

### 展示与分享

**Awesome Codex CLI — 150+ 生态工具**  
#16329 — 8 条评论  
https://github.com/openai/codex/discussions/16329

子智能体、技能、插件、MCP 服务器的精选列表。解决生态碎片化问题。

---

## 特性请求趋势

从 Issue 和讨论中，最受请求的方向：

1. **多账户管理** — 无需完全注销/登录即可切换账户
2. **远程/无头控制** — 守护进程模式配合移动应用 UI
3. **模块化 AGENTS.md** — 用于可组合配置的 include/import 指令
4. **蜂群/网络架构** — 多个专业模型协作
5. **权限运行时重新加载** — 无需重启即可将更新后的权限应用于现有任务
6. **MCP 无状态协议支持** — MCP 2026-07-28 stdio 服务器支持
7. **项目过滤** — 项目侧边栏中的内联搜索

---

## 开发者痛点

### 高频摩擦点

- **速率限制 / 容量错误** — 多起报告称尽管有未使用配额，仍出现"模型已达容量"错误，影响 Pro 和 Pro-Light 用户
- **轮询造成的积分消耗** — 多智能体工作流程中 19.8% 的 token 浪费在状态轮询上
- **平台特定 bug** — Windows execpolicy 误报、macOS sandbox-exec 错误、TUI 韩文 IME 问题
- **模型可靠性退化** — 较新的模型（GPT-5.6 Sol、GPT-6 Astra）尽管智能更高但任务完成率更低
- **流断开** — 账户范围内的连接失败，不同账户间失败率差异 7 倍
- **UI/UX 退化** — 发送按钮禁用、作曲家草稿损坏、对话空白渲染

### 反复出现的主题

- **权限管理复杂性** — Windows 沙盒设置失败、配置文件验证缺口、运行时权限重新加载缺失
- **跨平台不一致** — 桌面版 vs CLI 行为差异、网页版 vs 桌面版速率限制
- **工具元数据丢失** — 压缩提示遗漏 Code Mode 工具调用

---

*基于 2026-09-17 的 GitHub 数据生成*

---

规则：
- 仅输出翻译内容。不添加前言、解释，不在整段输出外加 Markdown 代码块 fences。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、水平线。
- 保留 URL、链接目标、代码片段、代码块、数字和日期的原文。
- 保留项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文字保持不变。
- 使用自然的技术中文，即中文开发者技术通讯的语体风格——而非逐字直译。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the Gemini CLI Community Digest into Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly: headings, tables, lists, bold/italic, etc.
3. Keep URLs, numbers, dates, issue/PR numbers, version tags, file paths as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and technical accuracy.

Key terms to translate:
- Release → 发布
- Hot Issues → 热门议题
- Key PR Progress → 关键 PR 进展
- Feature Request Trends → 功能需求趋势
- Developer Pain Points → 开发者痛点
- Priority → 优先级
- Generalist agent → 通用代理
- Subagent → 子代理
- Shell execution → Shell 执行
- Agent hangs → 代理挂起
- AST-aware → AST 感知
- Auto Memory → 自动记忆
- PTY → 伪终端

Let me go through and translate:</think>

# Gemini CLI 社区动态 — 2026-09-17

## 今日要闻

项目发布了 **v0.62.0-nightly.20260916**，包含两个针对性修复——AgentLoopContext 属性保留和 A2A 服务器元数据处理。与此同时，问题追踪器显示持续存在的挑战：P1 级问题如代理挂起（#21409）和 Shell 执行卡顿（#25166）仍然活跃，而社区正在大力推动 AST 感知工具和改进的子代理/技能编排。

---

## 发布

**v0.62.0-nightly.20260916.g6a466a7e2** — 2026-09-16

- **fix(core):** 确保 `AgentLoopContext` 属性在对象展开时保留（[#29335](https://github.com/google-gemini/gemini-cli/pull/29335)）
- **fix(a2a-server):** 在任务元数据端点中对不支持的 store 添加提前返回

---

## 热门议题

| # | 议题 | 优先级 | 为何重要 | 反馈 |
|---|------|--------|----------|------|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子代理在 MAX_TURNS 达到后报告为 GOAL success，无法隐藏中断 | P1 | 子代理在达到轮次限制时错误地报告成功，向用户隐藏了失败 | 👍 2 |
| 2 | **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 通过零依赖操作系统沙箱利用模型的 bash 亲和性 | P2 | 利用 Gemini 3 的 POSIX 工具链亲和性进行更智能的代码探索，同时不牺牲安全性 | 👍 1 |
| 3 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通用代理无限挂起 | P1 | 核心阻塞问题：CLI 在调用通用代理时挂起，即使对于创建文件夹等简单操作也是如此 | 👍 8 |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知文件读取、搜索和映射的影响 | P2 | 追踪 AST 工具调研的史诗级议题，以减少 token 消耗并提高代码导航精度 | 👍 1 |
| 5 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 不够频繁使用技能和子代理 | P2 | 模型除非明确指示，否则会忽略自定义技能/子代理，限制了自动化潜力 | — |
| 6 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — 添加确定性脱敏并减少自动记忆日志 | P2 | 安全问题：自动记忆在脱敏前将内容发送给模型 | — |
| 7 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — 阻止自动记忆无限重试低信号会话 | P2 | 记忆系统可能在低价值会话上无限循环，浪费资源 | — |
| 8 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — Shell 命令执行完成后卡在"等待输入"状态 | P1 | Shell 命令完成后 CLI 仍然显示"等待用户输入"而挂起——阻塞性 UX 缺陷 | 👍 3 |
| 9 | **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — 增强 browser_agent 弹性：自动会话接管和锁恢复 | P3 | 浏览器代理在配置文件锁定时快速失败，而不是优雅恢复 | — |
| 10 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 浏览器子代理在 wayland 上失败 | P1 | 浏览器子代理在 Wayland 上崩溃——影响 Linux 桌面用户 | 👍 1 |

---

## 关键 PR 进展

| PR | 区域 | 描述 |
|----|------|------|
| **[#29359](https://github.com/google-gemini/gemini-cli/pull/29359)** | agent | **fix(core):** 在 `web_fetch` 中保留表格行/列——修复 HTML 表格数据丢失 |
| **[#29340](https://github.com/google-gemini/gemini-cli/pull/29340)** | core | **fix(core):** 改进 PTY 文件描述符清理和执行生命周期管理——解决 POSIX 资源泄漏 |
| **[#29354](https://github.com/google-gemini/gemini-cli/pull/29354)** | core | **fix(cli):** 对无根 Podman 沙箱使用 `--userns=keep-id`——修复 node-gyp 重建时的 `EACCES` 问题 |
| **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163)** | security | **fix(cli):** 防止 git 仓库中身份验证时崩溃（macOS Seatbelt 受限环境） |
| **[#29249](https://github.com/google-gemini/gemini-cli/pull/29249)** | core | **fix(core):** 关闭 `get_internal_docs` 路径守卫中的兄弟前缀绕过——安全修复 |
| **[#29244](https://github.com/google-gemini/gemini-cli/pull/29244)** | core | **fix(core):** 使工具文件写入原子化并序列化同路径写入——防止静默数据丢失 |
| **[#29156](https://github.com/google-gemini/gemini-cli/pull/29156)** | core | **fix(core):** 停止在 shell 执行中清除用户 git 配置——恢复 `user.name`/`user.email` 可见性 |
| **[#29358](https://github.com/google-gemini/gemini-cli/pull/29358)** | cli | **fix(cli):** 使反向搜索高亮与原始文本对齐——修复 Unicode 文本上的 Ctrl+R 高亮 |
| **[#29352](https://github.com/google-gemini/gemini-cli/pull/29352)** | docs | **docs(hooks):** 记录所有钩子决策值（`ask`、``approve`）——关闭 #28977 |
| **[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)** | core | **fix(cli):** 截断时避免拆分代理对——修复显示中的 emoji 渲染 |

---

## 功能需求趋势

1. **AST 感知工具** — 多个议题（#22745、#22746、#19561）倡导基于 AST 的文件读取、搜索和代码库映射，以减少 token 消耗并提高精度
2. **更好的子代理编排** — 改进技能/子代理发现、自动调用和轨迹可见性的请求（#21968、#22598、#20195）
3. **记忆系统改进** — 确定性脱敏、会话隔离和精确提取逻辑（#26525、#26522、#26523、#19561）
4. **Shell 执行鲁棒性** — 零依赖操作系统沙箱、改进的 PTY 处理和更好的交互式提示管理（#19873、#25166、#22465）

---

## 开发者痛点

- **代理挂起** — 通用代理和 Shell 执行频繁冻结，阻塞工作流程（#21409、#25166）
- **子代理透明度** — 失败被掩盖为成功；上下文在错误报告中丢失（#22323、#21763）
- **技能/子代理利用不足** — Gemini 除非明确提示，否则会忽略自定义能力（#21968）
- **记忆系统循环** — 低信号会话触发无限重试；无效补丁被静默跳过（#26522、#26523）
- **安全问题** — 自动记忆中的脱敏前数据暴露、路径遍历风险（#26525、#29249）
- **文件操作竞态** — 并发编辑同一文件会静默丢失数据（#29244）

---

*根据 GitHub 数据生成动态 — 2026-09-17*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI Community Digest into Chinese. I need to:
1. Translate the content while preserving the exact Markdown structure
2. Keep all technical terms, URLs, issue numbers, file names, code, etc. in their original form
3. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate this carefully while maintaining the format.

Key elements to preserve exactly:
- Headings (##, ###)
- Tables with column alignment (| --- |)
- Lists with | for tables
- Emoji
- URLs
- Issue numbers (#1234)
- Version numbers (v1.0.86-2)
- File names (.agent.md, AGENTS.md, etc.)
- Code terms (CLI, MCP, OAuth, etc.)
- Bold text (**text**)
- Horizontal rules (---)

Let me translate section by section:

Title: GitHub Copilot CLI 社区简报

Date: 2026年9月17日

Let me continue with the full translation...</think>

# GitHub Copilot CLI 社区简报

**日期：** 2026年9月17日

---

## 1. 今日要闻

Copilot CLI 团队发布了 **v1.0.86-2** 版本，带来关键修复，包括改进的会话恢复和转录文件损坏恢复。一个重要的新功能现已上线：自定义代理现在可以通过 frontmatter 选择加入仓库指令文件（AGENTS.md、copilot-instructions.md、CLAUDE.md）。Vim 模式现已普遍可用，支持在 composer 中进行模态编辑。过去24小时内社区活跃度依然很高，共有 50 个 issue 更新，其中包含多个长期悬而未决的功能请求正在推进解决。

---

## 2. 发布动态

| 版本 | 关键变更 |
|--------|-------------|
| **v1.0.86-2** | 常规修复和改进 |
| **v1.0.86-1** | **新增：** 自定义代理可通过在 `.agent.md` frontmatter 中设置 `include-custom-instructions: true` 来选择加入仓库指令文件（AGENTS.md、copilot-instructions.md、CLAUDE.md）。**修复：** 现在可以正确保留插件目录、发现或工作目录覆盖的设置，而不会意外丢失。 |
| **v1.0.86-0** | **修复：** 即使转录文件存在可恢复的损坏也能恢复会话。紧凑时间轴中的推理文本现在可完全读取。自动飞行员在任务完成后停止，不会继续执行意外操作。 |
| **v1.0.85** | Vim 模式现已对所有用户开放（使用 `/vim` 或设置 `editorMode: vim`）。新增 `/settings` 选项用于上下文管理工具。增加 transcriptView 配置。 |

---

## 3. 热门 Issue

### 社区关注度最高的 Issue

| Issue | 概要 | 评论 | 👍 |
|-------|---------|----------|-----|
| [#2904](https://github.com/github/copilot-cli/issues/2904) | **自定义代理 YAML Frontmatter 应支持推理强度配置** — 目前推理强度只能通过 CLI 参数全局配置。请求在 `.agent.md` frontmatter 中支持按代理配置。 | 9 | 23 |
| [#2050](https://github.com/github/copilot-cli/issues/2050) | **Claude Sonnet 4.6 执行失败** — 间歇性 HTTP/2 GOAWAY 连接错误导致重试5次，等待时间超过84秒。与模型相关的问题（Sonnet 4.6 失败，Gemini 3 Pro 正常）。 | 9 | 4 |
| [#1322](https://github.com/github/copilot-cli/issues/1322) | **功能请求：显示子代理工具调用详情** — 用户希望能看到类似 VS Code Copilot Chat 中的子代理操作。目前只显示状态、ID 和类型。 | 7 | 25 |
| [#4855](https://github.com/github/copilot-cli/issues/4855) | **macOS 终端中交互式键盘输入无法工作** — CLI 启动但忽略交互模式下的所有键盘输入。早期版本（1.0.83）正常工作。 | 3 | 0 |
| [#4542](https://github.com/github/copilot-cli/issues/4542) | **工作区 .mcp.json 被检测到但未在代理会话中连接** — MCP 服务器在 `copilot mcp list` 中可见，但在交互会话中不可用。 | 3 | 1 |
| [#4854](https://github.com/github/copilot-cli/issues/4854) | **本地沙箱'允许本地网络'设置不生效** — 无论切换状态如何，`/sandbox policy` 都显示被阻止。 | 3 | 0 |
| [#1882](https://github.com/github/copilot-cli/issues/1882) | **支持 Windows 上 $env:EDITOR 为 .bat/.cmd 脚本** — 通过批处理脚本调用的外部编辑器不支持 Ctrl+G。 | 4 | 2 |
| [#1392](https://github.com/github/copilot-cli/issues/1392) | **大型项目中 OmniSharp LSP 服务器加载失败** — LSP 服务器需要可配置的 `initializeTimeout` 以处理大型 C# 解决方案。 | 4 | 5 |
| [#4531](https://github.com/github/copilot-cli/issues/4531) | **从 Copilot CLI 启动 VS Code 时 GIT_CONFIG_VALUE 为空** — Copilot CLI 导出的空配置值在启动 VS Code 时会破坏 Git 发现。 | 2 | 2 |
| [#3009](https://github.com/github/copilot-cli/issues/3009) | **远程容器中 MCP OAuth 回调无法访问** — 在 Codespaces/开发容器中运行时没有手动令牌粘贴回退方案。 | 2 | 1 |

---

## 4. 重要 PR 进展

*过去24小时内没有更新任何拉取请求。*

---

## 5. 功能请求趋势

基于 Issue 分析，最受关注的功能方向包括：

1. **增强代理自定义能力** — 按代理配置推理强度、子代理可见性、自定义指令文件支持
2. **改进 MCP 集成** — 工作区配置可靠性、远程环境下的 OAuth 流程、配置重载行为
3. **平台特定增强** — Windows .bat/.cmd 编辑器支持、macOS 终端兼容性
4. **LSP 可扩展性** — 大型项目加载的可配置超时
5. **会话可靠性** — 转录文件损坏恢复、会话恢复稳定性

---

## 6. 开发者痛点

来自开发者社区最常见的挫败感：

- **MCP 配置不一致** — 多个 issue（#4542、#4562、#3100）涉及 MCP 服务器连接不正常或配置更改后无法重载
- **交互模式故障** — macOS 终端键盘输入不工作（#4855）影响核心工作流程
- **网络可靠性问题** — 模型连接失败（#2050、#2848）导致会话中断
- **Git 集成冲突** — 环境变量污染（#4531）影响外部工具启动
- **权限误报** — 计划模式阻止合法只读操作（#4220）
- **大型项目性能** — 大型代码库的 LSP 超时（#1392）

---

*简报结束。数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this OpenCode Community Digest from English to Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure exactly
2. Keep URLs, issue numbers, code identifiers, project names as-is
3. Use natural technical Chinese register (like a developer newsletter)
4. Output ONLY the translation, no preamble or explanation

Let me go through and translate while maintaining the structure:

- **Releases** - 发布
- **Hot Issues** - 热门 issue
- **Key PR Progress** - 主要 PR 进展
- **Feature Request Trends** - 功能请求趋势
- **Developer Pain Points** - 开发者痛点

Let me translate carefully, keeping the technical tone appropriate for Chinese developers.</think>

# OpenCode 社区简报 — 2026-09-17

## 今日要闻

今日社区活跃度主要集中于新版 V2 布局带来的显著用户体验问题，以及影响免费层模型的 API 端点可靠性问题。社区正在积极报告旧版界面的回归和功能缺失问题，同时多个贡献者 PR 致力于优化桌面端体验。值得注意的是，过去 24 小时内无新版本发布。

---

## 版本发布

过去 24 小时内**无新版本**发布。

---

## 热门 Issue

| Issue | 描述 | 社区反馈 |
|-------|-------------|-------------------|
| [#44300](https://github.com/anomalyco/opencode/issues/44300) | **Zen API 工具调用失败** — Ox Alpha 免费模型对任何包含工具的请求都返回"端点不可用"。自 2026-08-23 起影响 `x-preview-f-free` 和 `ox-alpha-free` 路由。 | 15 条评论，5 👍 — 高优先级阻塞 bug |
| [#15617](https://github.com/anomalyco/opencode/issues/15617) | **内联技能调用** — 请求支持在提示词任意位置使用 `$skill-name` 语法，而非仅在开头。 | 9 条评论，25 👍 — 高人气功能请求 |
| [#37546](https://github.com/anomalyco/opencode/issues/37546) | **新版布局缺失工作区** — v1.17.19 之后的 Web UI 没有回退布局的入口，且完全缺乏 git worktree 支持。 | 6 条评论，24 👍 — 严重影响工作流 |
| [#48837](https://github.com/anomalyco/opencode/issues/48837) | **强制 V2 界面破坏生产力** — 拥有 20+ 会话的用户无法管理多项目工作流。布局切换完全移除。 | 5 条评论，17 👍 — 强烈不满 |
| [#23114](https://github.com/anomalyco/opencode/issues/23114) | **会话标题来自注入的 memory** — 标题生成器从系统上下文/memory 而非实际用户消息生成标题。 | 7 条评论，3 👍 — 上下文污染 bug |
| [#46651](https://github.com/anomalyco/opencode/issues/46651) | **Windows 上 TypeError: Failed to fetch** — 新建 Windows 登录后频繁出现；需要重启应用。 | 5 条评论，0 👍 — v1.18.25-27 回归问题 |
| [#49021](https://github.com/anomalyco/opencode/issues/49021) | **恢复旧版布局** — 直接请求恢复旧版界面。 | 7 条评论，3 👍 |
| [#37628](https://github.com/anomalyco/opencode/issues/37628) | **16 位兼容性问题** — npm 安装的 opencode-ai 与 Windows 版本不兼容。 | 6 条评论，0 👍 — 安装阻塞问题 |
| [#34214](https://github.com/anomalyco/opencode/issues/34214) | **OpenCode 会话中冻结** — 多次调用工具后，UI 无响应；需要强制关闭。 | 6 条评论，1 👍 — 严重稳定性问题 |
| [#35283](https://github.com/anomalyco/opencode/issues/35283) | **reasoning 字段丢失** — 使用 OpenAI 兼容协议流式传输 `reasoning`（而非 `reasoning_content`）的提供商的 reasoning 被完全丢弃。 | 5 条评论，0 👍 — 协议兼容性 bug |

---

## 主要 PR 进展

| PR | 描述 | 状态 |
|----|-------------|--------|
| [#46344](https://github.com/anomalyco/opencode/pull/46344) | **可折叠推理卡片** — 将 reasoning 部分渲染为 UI 中的可折叠卡片。关闭 #8789, #14340, #37115, #21548。 | Open |
| [#45472](https://github.com/anomalyco/opencode/pull/45472) | **移除 websearch 提供商白名单** — 对所有提供商启用 websearch，因其基于公共 Exa/Parallel MCP 端点。 | Open |
| [#44725](https://github.com/anomalyco/opencode/pull/44725) | **恢复 OPENCODE_DISABLE_CLAUDE_CODE** — 在 v2 分支恢复环境变量支持以禁用读取 `~/.claude`。 | Open |
| [#47510](https://github.com/anomalyco/opencode/pull/47510) | **精简 durable event 快照** — 通过精简被取代的快照来解决 `event` 表无限增长问题。关闭 #47223, #47512, #47513。 | Open |
| [#48689](https://github.com/anomalyco/opencode/pull/48689) | **测量包含 reasoning 的请求吞吐量** — 在 tok/s 指标中包含 reasoning token。关闭 #48705。 | Open |
| [#48438](https://github.com/anomalyco/opencode/pull/48438) | **原生 Anthropic 顾问工具** — 执行器响应流中的新型咨询工具。 | Open（草稿） |
| [#43319](https://github.com/anomalyco/opencode/pull/43319) | **注入文本的 markdown 渲染** — 让注入的文本部分选择启用 markdown 渲染。 | Open |
| [#46199](https://github.com/anomalyco/opencode/pull/46199) | **可配置的 plans 目录** — 退出插件依赖安装；解决启动挂起的根本原因。 | Open |
| [#49426](https://github.com/anomalyco/opencode/pull/49426) | **重试传输错误** — 修复 Windows 登录后网络相关的 fetch 失败（ERR_NETWORK_CHANGED）。 | Closed |
| [#49418](https://github.com/anomalyco/opencode/pull/49418) | **对无法识别的 finish reason 限制重试次数** — 防止 finish reason 为 "unknown" 时出现无限请求风暴。 | Closed |

---

## 功能请求趋势

基于 issue 和 PR 分析，最受请求的功能方向为：

1. **布局灵活性** — 持续请求恢复旧版布局的开关，跨 6+ issue 累计 50+ 互动。用户希望恢复旧的侧边栏和工作区支持。

2. **UI/UX 优化** — 可折叠推理卡片（#46344）、更好的终端标题指示器、markdown 链接渲染修复、持久化侧边栏布局。

3. **模型/提供商可靠性** — 修复免费模型上的端点可用性、工具调用失败、reasoning 字段兼容性。

4. **平台扩展** — Android APK 可用性（#49316）、桌面应用中的 SSH 访问（#49409）、跨平台剪贴板处理。

5. **开发者体验** — 内联技能调用、可配置的 plans 目录、原生顾问工具。

---

## 开发者痛点

- **布局回归之痛**：强制使用 V2 界面且无回退选项是当前最主要的痛点，尤其是对拥有多项目工作流的高级用户影响严重。
- **工作区消失**：Git worktree 仅存在于旧版布局；新版 UI 对 Web 用户完全缺乏此功能。
- **免费层 API 不稳定**：多个 issue 报告免费模型（Ox Alpha、Union Alpha、Muse Spark）工具调用失败，返回 503/端点不可用错误。
- **Windows 连接问题**：登录后不久出现网络相关 fetch 失败，需要重启应用。
- **会话冻结**：长时间使用工具时会话中无响应，强制重启会丢失上下文。
- **内存/上下文污染**：会话标题从注入的 memory 而非实际用户消息生成，造成混淆。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest from English to Chinese (Simplified). I need to:

1. Translate all the content to Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, code references, issue numbers, etc. as-is
4. Use natural technical Chinese register

Let me go through and translate this carefully:

## Today's Highlights - 今日要闻
The past 24 hours saw significant activity around session management and TUI improvements, with several bug fixes merged alongside ongoing work in agent session handling. Notably, the compaction queue rollback bug and Windows-specific issues (mouse tracking, clipboard encoding) were resolved, while a new prompt cache warming feature is underway. Community discussions are picking up around job-search workflows and extension preferences.

过去24小时，session 管理和 TUI 改进方面有显著进展，多个 bug 修复已合并，同时代理 session 处理工作仍在进行中。值得注意的是，压缩队列回滚 bug 和 Windows 特定问题（鼠标追踪、剪贴板编码）已解决，新的提示缓存预热功能正在进行中。围绕求职工作流和扩展偏好的社区讨论也在升温。

---

## Releases - 发布

No new releases in the past 24 hours.

过去24小时无新版本发布。

---

## Hot Issues - 热门问题

Let me continue translating the rest...

I need to be careful with:
- Technical terms that are commonly used in Chinese technical communities
- Issue/PR titles that should be kept in original form
- Table structure
- Markdown formatting</think>

# Pi 社区摘要 — 2026-09-17

## 今日要闻

过去 24 小时，session 管理和 TUI 改进方面有显著进展，多个 bug 修复已合并，同时代理 session 处理工作仍在进行中。值得注意的是，压缩队列回滚 bug 和 Windows 特定问题（鼠标追踪、剪贴板编码）已解决，新的提示缓存预热功能正在进行中。围绕求职工作流和扩展偏好的社区讨论也在升温。

---

## 发布

过去 24 小时无新版本发布。

---

## 热门问题

| # | 问题 | 摘要 | 评论 | 👍 |
|---|-------|---------|----------|-----|
| **1** | **[#5886](https://github.com/earendil-works/pi/issues/5886)** — AgentSession 结算/续接和 assistant-tail 生命周期 bug | 追踪运行后逻辑尝试从一个已失效的 transcript 继续代理会话的重复 bug。影响 `pkg:agent` 和 `pkg:coding-agent`。 | 12 | 4 |
| **2** | **[#8928](https://github.com/earendil-works/pi/issues/8928)** — 并行 pi 启动时报"No API key found"约 48 秒（OAuth 已过期） | 可复现的并行启动问题：当 `auth.json` 包含另一个提供商的过期 OAuth 凭证时触发 48 秒延迟。与 #1871、#4919、#6880 相关。 | 9 | 0 |
| **3** | **[#5323](https://github.com/earendil-works/pi/issues/5323)** — 改进 Vertex + GCP 元数据服务器支持 | 同步 `existsSync` 检查 `GOOGLE_APPLICATION_CREDENTIALS` 阻塞；需要 Vertex 的异步元数据服务器认证。 | 9 | 2 |
| **4** | **[#9216](https://github.com/earendil-works/pi/issues/9216)** — Ollama qwen3.8:27b 流式'terminated'错误（0.84.x→0.85.x 回归） | 本地 Ollama 使用中大量工具调用时的明确回归；自动压缩在首次运行后不再重新触发。 | 5 | 0 |
| **5** | **[#9410](https://github.com/earendil-works/pi/issues/9410)** — Escape 中断流式响应导致 TUI 冻结约 60 秒 | 在大 session（约 465k token）上按 Escape 会在 `⠸ Working` 期间冻结 CLI 约 58 秒。 | 4 | 0 |
| **6** | **[#9255](https://github.com/earendil-works/pi/issues/9255)** — TuiMainScreen 全屏重绘风暴 | 在长 transcript 上，`doRender()` 几乎每帧都触发全屏重绘，因为流式组件超出视口。 | 4 | 1 |
| **7** | **[#9129](https://github.com/earendil-works/pi/issues/9129)** — Windows bash 超时遗留管道进程 | 使用 Git for Windows (MSYS2) bash 时，`taskkill /F /T` 无法终止所有管道阶段。 | 4 | 0 |
| **8** | **[#8791](https://github.com/earendil-works/pi/issues/8791)** — 向扩展公开模型运行时 | 请求 `ExtensionContext` 公开支持其 `modelRegistry` 的 `ModelRuntime`。支持独立的进程内代理会话。 | 4 | 5 |
| **9** | **[#9616](https://github.com/earendil-works/pi/issues/9616)** — zai-coding-cn: GLM-5.3 整合问题 | 智谱的 GLM Coding Plan 现仅提供 GLM-5.3/GLM-5.3-Flash，但 pi 仍列出 8 个遗留模型。 | 4 | 0 |
| **10** | **[#9099](https://github.com/earendil-works/pi/issues/9099)** — pi.dev OpenRouter 错误的 baseUrl（缺少 /v1） | 提供商注册表为非批处理 Anthropic 模型提供 `https://openrouter.ai/api`（缺少 `/v1`），导致 404 错误。 | 2 | 0 |

---

## 关键 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|---------|--------|
| **1** | **[#9682](https://github.com/earendil-works/pi/pull/9682)** — fix(clipboard): 使用 pbcopy 时保持非 ASCII 字符完整性 | 修复 macOS 上剪贴板回退运行时 UTF-8 → MacRoman 损坏问题。 | 已关闭 |
| **2** | **[#9677](https://github.com/earendil-works/pi/pull/9677)** — fix(coding-agent): 防止压缩队列回滚重放已接受的消息 | 防止压缩队列刷新失败时恢复整个预刷新状态。 | 已关闭 |
| **3** | **[#9662](https://github.com/earendil-works/pi/pull/9662)** — fix(coding-agent): 用户 bash hook 错误时失败关闭 | `!`、`!!` 和 RPC `bash` 现在在处理器抛出时失败，而不是回退到本地 shell。 | 已关闭 |
| **4** | **[#9668](https://github.com/earendil-works/pi/pull/9668)** — feat(coding-agent): 添加提示缓存预热 | 实验性支持在会话之间保持缓存温热。 | 开放 |
| **5** | **[#9548](https://github.com/earendil-works/pi/pull/9548)** — 会话中系统消息 | 系统提示变更现在记录在 transcript 中，而不是静默重写起始条件。 | 已关闭 |
| **6** | **[#8744](https://github.com/earendil-works/pi/pull/8744)** — feat(tui): 添加可选的叠加层选择排除 | 允许持久化扩展 UI 排除 transcript 选择。 | 开放 |
| **7** | **[#9601](https://github.com/earendil-works/pi/pull/9601)** — fix(coding-agent): 避免精确 session ID 的 transcript 扫描 | 使用精确 session-ID 查询而非扫描所有 transcript；约 16 秒 → 约 0.47 秒改进。 | 已关闭 |
| **8** | **[#9655](https://github.com/earendil-works/pi/pull/9655)** — fix(tui): 进入原始模式后启用鼠标追踪 | 将 ConPTY 鼠标初始化移至 Windows 原始模式之后。 | 已关闭 |
| **9** | **[#9570](https://github.com/earendil-works/pi/pull/9570)** — fix(ai): 将 TOO_MANY_TOOL_CALLS 映射为错误停止原因 | 处理新的 Gemini `TOO_MANY_TOOL_CALLS` 结束原因。 | 开放 |
| **10** | **[#9630](https://github.com/earendil-works/pi/pull/9630)** — feat(coding-agent): 添加事件处理器取消订阅 | 允许扩展取消订阅事件处理器。 | 开放 |

---

## 热门讨论

| # | 讨论 | 分类 | 评论 | 👍 |
|---|------------|----------|----------|-----|
| **1** | **[#3373](https://github.com/earendil-works/pi/discussions/3373)** — 您最喜欢与 Pi 代理一起使用哪些插件、附加组件或扩展？ | **展示与问答** | 17 | 9 |
| **2** | **[#9679](https://github.com/earendil-works/pi/discussions/9679)** — job-agent-skills: pi 的求职工作流（10 项技能 + MCP 桥接） | **展示** | 0 | 1 |

---

## 功能需求趋势

1. **扩展 API 扩展** — 多项请求向扩展公开更多内部 API：`ModelRuntime`、事件处理器取消订阅、会话系统提示追加、OAuth/renderPage 函数。
2. **结构化输出 / JSON schema** — 提供商级结构化输出支持仍是请求的功能（#1086 已关闭但可能仍在进行中）。
3. **本地模型改进** — 更好的 Ollama 集成、llama.cpp 支持，以及压缩中思考块的处理。
4. **会话优化** — 更快的 session ID 查询、避免 transcript 扫描、提示缓存预热。

---

## 开发者痛点

1. **TUI 长时间冻结** — 大 session 上 Escape 键中断导致约 60 秒冻结；长 transcript 上的全屏重绘风暴。
2. **平台特定 bug** — Windows 特定问题包括 bash 超时遗留进程、ConPTY 鼠标追踪、剪贴板编码。
3. **压缩失败** — 压缩溢出、思考块导致压缩拒绝、队列回滚 bug 反复出现。
4. **提供商配置摩擦** — OAuth 凭证处理延迟、baseUrl 路径缺失、模型目录过期（GLM、OpenRouter）。
5. **扩展静默回退** — `user_bash` hook 错误静默回退到本地 shell 是反复出现的问题；现已修复为失败关闭。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest into Simplified Chinese. I need to:

1. Translate all headings
2. Translate all body text while keeping technical terms, URLs, issue numbers, etc.
3. Keep the table structure intact
4. Preserve all formatting (markdown)

Let me go through this carefully:

---

# Qwen Code 社区简报 — 2026-09-17

## 今日要闻

Qwen Code 项目发布了 **v0.24.0** 及其对应的夜间构建版本，其中包含一项破坏性变更：命令钩子中的 bash 现在会展开项目目录变量。关键问题集中在 VS Code Remote（SSH/容器）连接上——多个 P1 级别的 bug 报告了 webview 无法访问工作区守护进程的故障，这影响了远程开发环境下的用户工作流。团队还修复了一个安全问题：被拒绝的 daemon 替代参数错误地在 URL 片段中保留了凭据。

---

## 发布版本

| 版本 | 摘要 |
|------|------|
| **v0.24.0** | 最新稳定版。包含破坏性变更：bash 现在会在命令钩子中展开项目目录变量（[#11864](https://github.com/QwenLM/qwen-code/pull/11864)）。 |
| **v0.24.0-nightly.20260916.b8def02aad** | 夜间构建版本，包含文档更新（ACP 边界验收）和 CI 修复。 |
| **v0.23.5-preview.0** | 预览版本，改进了 Windows inode 测试和 Linux 观测数据保留。 |

---

## 热门问题

| Issue | 优先级 | 摘要 | 为何重要 |
|-------|--------|------|----------|
| [#8596](https://github.com/QwenLM/qwen-code/issues/8596) | P2 | **弃用 Electron 桌面应用并将 desktop-shell 重命名为 desktop** — 建议移除 `packages/desktop`（Electron），并将 `packages/desktop-shell`（Tauri）重命名为 `desktop` 命名空间。 | 战略转向 Tauri 作为唯一的桌面平台；影响未来的维护和用户迁移。9 条评论。 |
| [#11556](https://github.com/QwenLM/qwen-code/issues/11556) | P1 | **vscode-ide-companion 0.23.1 无法在 Remote-SSH 环境下工作 — webview 无法加载** — Webview 在 VS Code Remote-SSH 环境中无法加载。 | 阻塞了远程开发工作流；影响在远程主机上进行开发的用户。8 条评论。 |
| [#11976](https://github.com/QwenLM/qwen-code/issues/11976) | P1 | **Webview 无法在 VS Code Remote（容器）中访问工作区守护进程，因为动态端口绑定未正确处理 asExternalUri** — 守护进程在 Dev Containers 中不可达。 | 对容器化开发至关重要；阻塞了常见 DevOps 工作流中的核心功能。 |
| [#12023](https://github.com/QwenLM/qwen-code/issues/12023) | P1 | **vscode 插件最新版本在 ssh 远程开发时无法使用** — 中文问题报告，反映 SSH 远程开发功能失效。 | 与 #11976 根本原因相同，表明问题影响范围更广。 |
| [#11955](https://github.com/QwenLM/qwen-code/issues/11955) | P2 | **桌面应用忽略 ui.theme 和 general.language 设置** — 主题和语言设置未在桌面应用中生效。 | 用户体验层面的 bug；破坏了主题自定义的预期。 |
| [#12040](https://github.com/QwenLM/qwen-code/issues/12040) | P2 | **web-shell: 拒绝的 `?daemon=` 替代参数会在页面源下错误地保留 URL 片段凭据** — 凭据错误地持久化的问题。 | 安全漏洞；处理不当可能导致敏感数据暴露。 |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | **追踪(核心): 非会话上下文令牌治理** — 系统提示、工具 schema 和上下文文件在每次请求时都发送，导致令牌使用膨胀。 | 大上下文模型的成本和性能问题；用户目前无法看到这些开销。 |
| [#12027](https://github.com/QwenLM/qwen-code/issues/12027) | P2 | **【Bug】Windows 上 Ink getMaxWidth 中出现无效数组长度的未捕获 RangeError 导致 CLI 崩溃** — 大上下文的长交互会话在 Windows 上崩溃。 | Windows 稳定性问题；影响拥有大上下文的核心用户。 |
| [#11995](https://github.com/QwenLM/qwen-code/issues/11995) | P2 | **Web Shell 会话恢复横幅误报** — "继续执行"按钮在正常完成的轮次后仍显示。 | 令人困惑的 UX；用户被不必要地提示。 |
| [#11728](https://github.com/QwenLM/qwen-code/issues/11728) | P3 | **test(cli): 关闭 REST 文档契约守卫中剩余的开放缺口** — REST API 文档契约测试覆盖缺口。 | 技术债务；确保文档完整性。 |

---

## 关键 PR 进展

| PR | 作者 | 摘要 |
|----|------|------|
| [#11975](https://github.com/QwenLM/qwen-code/pull/11975) | Lilian0122 | **功能(web-shell): 支持主机设置项排除** — 添加可选排除列表以隐藏设置 UI 元素，同时保留表单结构。 |
| [#12001](https://github.com/QwenLM/qwen-code/pull/12001) | qqqys | **修复(核心): 在工具往返中统计 Stop-hook 块** — 跨工具执行追踪每个提示的连续 stop-hook 块。 |
| [#12007](https://github.com/QwenLM/qwen-code/pull/12007) | yiliang114 | **修复(核心): 阻止会话恢复误标未回复的通知** — 防止会话恢复分类中的误报。 |
| [#12039](https://github.com/QwenLM/qwen-code/pull/12039) | L4XB | **修复(核心): 将获取的表格转换为表格，而非松散段落** — 添加 Turndown 表格规则以保留 web_fetch 中的 HTML 表格。 |
| [#12016](https://github.com/QwenLM/qwen-code/pull/12016) | qwen-code-dev-bot | **修复(ci): 容忍自托管运行器上不可写的 docker 沙箱锁目录** — 处理根拥有缓存目录的 EACCES 错误。 |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | yiliang114 | **重构: 锚点回退映射到稳定提示标识** — 回退现在使用持久化的提示标识而非位置轮次顺序。 |
| [#12000](https://github.com/QwenLM/qwen-code/pull/12000) | qqqys | **功能(workflows): 让 agent() 将子代理收窄到显式工具允许列表** — 工作流代理现在可以通过允许列表限制工具访问。 |
| [#11711](https://github.com/QwenLM/qwen-code/pull/11711) | wenshao | **功能(核心): 为子代理添加容器执行** — 支持 Docker/Podman 执行后端进行子代理调度。 |
| [#11821](https://github.com/QwenLM/qwen-code/pull/11821) | yiliang114 | **修复(核心): 在拆分 shell 命令时将词首 # 视为注释** — Shell 拆分器现在识别 # 注释。 |
| [#11857](https://github.com/QwenLM/qwen-code/pull/11857) | yiliang114 | **ci(review): 跳过对无变更推送的重新审查** — 避免对无操作分支更新的冗余审查。 |

---

## 功能请求趋势

基于问题分析，最热门的请求方向：

1. **远程/容器开发支持** — 多个问题（#11556、#11976、#12023）强调需要稳健的 VS Code Remote（SSH、容器）兼容性。
2. **令牌/上下文治理** — 请求对非会话上下文开销的可见性和控制（#12028）。
3. **桌面应用整合** — 持续努力弃用 Electron，转向 Tauri（#8596）。
4. **聊天面板整合** — 提议统一 web-shell、VSCode webview 和桌面的聊天 UI（#5883）。
5. **远程守护进程工作流** — 连接本地客户端到远程守护进程以进行工作区/会话管理的功能请求（#11475）。

---

## 开发者痛点

- **远程开发故障**: 多个 P1 bug 表明 VS Code 扩展和 webview 在 Remote-SSH 和容器环境中持续失败，阻塞了核心用户工作流。
- **Windows 稳定性**: 大上下文渲染时出现 `RangeError: Invalid array length` 导致 CLI 崩溃（#12027）。
- **主题/语言设置被忽略**: 桌面应用不遵守用户配置的主题和语言首选项（#11955）。
- **会话恢复误报**: 用户在已完成的轮次后看到虚假的"继续执行"提示（#11995）。
- **凭据处理 Bug**: 守护进程凭据在 URL 片段中持久化（#12040）和导航路径凭据泄漏（#12010）的安全问题。
- **CI 基础设施**: ECS 运行器集群僵化（#11633）和辅助测试失败（#11937）导致集成延迟。

---

*数据来源：github.com/QwenLM/qwen-code*</think>

# Qwen Code 社区简报 — 2026-09-17

## 今日要闻

Qwen Code 项目发布了 **v0.24.0** 及其对应的夜间构建版本，其中包含一项破坏性变更：命令钩子中的 bash 现在会展开项目目录变量。关键问题集中在 VS Code Remote（SSH/容器）连接上——多个 P1 级别的 bug 报告了 webview 无法访问工作区守护进程的故障，这影响了远程开发环境下的用户工作流。团队还修复了一个安全问题：被拒绝的 daemon 替代参数错误地在 URL 片段中保留了凭据。

---

## 发布版本

| 版本 | 摘要 |
|------|------|
| **v0.24.0** | 最新稳定版。包含破坏性变更：bash 现在会在命令钩子中展开项目目录变量（[#11864](https://github.com/QwenLM/qwen-code/pull/11864)）。 |
| **v0.24.0-nightly.20260916.b8def02aad** | 夜间构建版本，包含文档更新（ACP 边界验收）和 CI 修复。 |
| **v0.23.5-preview.0** | 预览版本，改进了 Windows inode 测试和 Linux 观测数据保留。 |

---

## 热门问题

| Issue | 优先级 | 摘要 | 为何重要 |
|-------|--------|------|----------|
| [#8596](https://github.com/QwenLM/qwen-code/issues/8596) | P2 | **弃用 Electron 桌面应用并将 desktop-shell 重命名为 desktop** — 建议移除 `packages/desktop`（Electron），并将 `packages/desktop-shell`（Tauri）重命名为 `desktop` 命名空间。 | 战略转向 Tauri 作为唯一的桌面平台；影响未来的维护和用户迁移。9 条评论。 |
| [#11556](https://github.com/QwenLM/qwen-code/issues/11556) | P1 | **vscode-ide-companion 0.23.1 无法在 Remote-SSH 环境下工作 — webview 加载卡住** — Webview 在 VS Code Remote-SSH 环境中无法加载。 | 阻塞了远程开发工作流；影响在远程主机上进行开发的用户。8 条评论。 |
| [#11976](https://github.com/QwenLM/qwen-code/issues/11976) | P1 | **Webview 在 VS Code Remote（容器）中因动态端口绑定且未使用 asExternalUri 而无法访问工作区守护进程** — 守护进程在 Dev Containers 中不可达。 | 对容器化开发至关重要；阻塞了常见 DevOps 工作流中的核心功能。 |
| [#12023](https://github.com/QwenLM/qwen-code/issues/12023) | P1 | **vscode 插件最新版本在 ssh 远程开发时无法使用** — 中文反馈 SSH 远程开发功能失效问题。 | 与 #11976 根本原因相同，表明问题影响范围更广。 |
| [#11955](https://github.com/QwenLM/qwen-code/issues/11955) | P2 | **桌面应用忽略 ui.theme 和 general.language 设置** — 主题和语言设置未在桌面应用中生效。 | 用户体验层面的 bug；破坏了主题自定义的预期。 |
| [#12040](https://github.com/QwenLM/qwen-code/issues/12040) | P2 | **web-shell: 被拒绝的 `?daemon=` 覆盖参数会将 URL 片段凭据错误地保存在页面源 origin 下** — 凭据错误地持久化的问题。 | 安全漏洞；处理不当可能导致敏感数据暴露。 |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | **跟踪(核心): 非会话上下文令牌治理** — 系统提示词、工具 schema 和上下文文件在每次请求时都发送，导致令牌开销膨胀。 | 大上下文模型的成本和性能问题；用户目前无法看到这些开销。 |
| [#12027](https://github.com/QwenLM/qwen-code/issues/12027) | P2 | **【Bug】Windows 上 Ink getMaxWidth 中出现无效数组长度的未捕获 RangeError 导致 CLI 崩溃** — 大上下文的长交互会话在 Windows 上崩溃。 | Windows 稳定性问题；影响拥有大上下文的高级用户。 |
| [#11995](https://github.com/QwenLM/qwen-code/issues/11995) | P2 | **Web Shell 会话恢复横幅误报** — "继续执行"按钮在正常完成的轮次后仍显示。 | 令人困惑的 UX；用户被不必要地提示。 |
| [#11728](https://github.com/QwenLM/qwen-code/issues/11728) | P3 | **test(cli): 关闭 REST 文档契约守卫中剩余的 fail-open 缺口** — REST API 文档契约测试覆盖缺口。 | 技术债务；确保文档完整性。 |

---

## 关键 PR 进展

| PR | 作者 | 摘要 |
|----|------|------|
| [#11975](https://github.com/QwenLM/qwen-code/pull/11975) | Lilian0122 | **feat(web-shell): 支持主机设置项排除** — 添加可选排除列表以隐藏设置 UI 元素，同时保留表单结构。 |
| [#12001](https://github.com/QwenLM/qwen-code/pull/12001) | qqqys | **fix(core): 跨工具轮次统计 Stop-hook 块** — 跨工具执行追踪每个提示词的连续 stop-hook 块。 |
| [#12007](https://github.com/QwenLM/qwen-code/pull/12007) | yiliang114 | **fix(core): 阻止会话恢复误标未回复的通知** — 防止会话恢复分类中的误报。 |
| [#12039](https://github.com/QwenLM/qwen-code/pull/12039) | L4XB | **fix(core): 将获取的表格转换为表格，而非松散段落** — 添加 Turndown 表格规则以保留 web_fetch 中的 HTML 表格。 |
| [#12016](https://github.com/QwenLM/qwen-code/pull/12016) | qwen-code-dev-bot | **fix(ci): 容忍自托管运行器上不可写的 docker 沙箱锁目录** — 处理根拥有缓存目录的 EACCES 错误。 |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | yiliang114 | **refactor: 锚点回退映射到稳定提示词标识** — 回退现在使用持久化的提示词标识而非位置轮次顺序。 |
| [#12000](https://github.com/QwenLM/qwen-code/pull/12000) | qqqys | **feat(workflows): 让 agent() 将子代理收窄到显式工具允许列表** — 工作流代理现在可以通过允许列表限制工具访问。 |
| [#11711](https://github.com/QwenLM/qwen-code/pull/11711) | wenshao | **feat(core): 为子代理添加容器执行** — 支持 Docker/Podman 执行后端进行子代理调度。 |
| [#11821](https://github.com/QwenLM/qwen-code/pull/11821) | yiliang114 | **fix(core): 在拆分 shell 命令时将词首 # 视为注释** — Shell 拆分器现在识别 # 注释。 |
| [#11857](https://github.com/QwenLM/qwen-code/pull/11857) | yiliang114 | **ci(review): 跳过对无变更推送的重新审查** — 避免对无操作分支更新的冗余审查。 |

---

## 功能请求趋势

基于问题分析，最热门的请求方向：

1. **远程/容器开发支持** — 多个问题（#11556、#11976、#12023）强调需要稳健的 VS Code Remote（SSH、容器）兼容性。
2. **令牌/上下文治理** — 请求对非会话上下文开销的可见性和控制（#12028）。
3. **桌面应用整合** — 持续努力弃用 Electron，转向 Tauri（#8596）。
4. **聊天面板整合** — 提议统一 web-shell、VSCode webview 和桌面的聊天 UI（#5883）。
5. **远程守护进程工作流** — 连接本地客户端到远程守护进程以进行工作区/会话管理的功能请求（#11475）。

---

## 开发者痛点

- **远程开发故障**: 多个 P1 bug 表明 VS Code 扩展和 webview 在 Remote-SSH 和容器环境中持续失败，阻塞了核心用户工作流。
- **Windows 稳定性**: 大上下文渲染时出现 `RangeError: Invalid array length` 导致 CLI 崩溃（#12027）。
- **主题/语言设置被忽略**: 桌面应用不遵守用户配置的主题和语言首选项（#11955）。
- **会话恢复误报**: 用户在已完成的轮次后看到虚假的"继续执行"提示（#11995）。
- **凭据处理 Bug**: 守护进程凭据在 URL 片段中持久化（#12040）和导航路径凭据泄漏（#12010）的安全问题。
- **CI 基础设施**: ECS 运行器集群僵化（#11633）和辅助测试失败（#11937）导致集成延迟。

---

*数据来源：github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*