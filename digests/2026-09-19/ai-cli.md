# AI CLI 工具社区动态日报 2026-09-19

> 生成时间: 2026-09-19 00:33 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the cross-tool comparison report into Chinese. Let me go through the translation carefully, following all the rules specified:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
4. Issue/PR references like #12345 stay as-is
5. Use natural technical Chinese register

Let me translate section by section:

---

**Cross-Tool Comparison Report: AI CLI Tools Ecosystem**

跨工具对比报告：AI CLI 工具生态概览

---

**1. Ecosystem Overview**

生态系统概览

---

**The AI CLI tools landscape in September 2026 shows a maturing market with clear specialization.** 

2026年9月的AI CLI工具领域呈现出成熟市场的特征，各工具定位清晰、分工明确。

---

**Claude Code leads in enterprise-focused features with AGENTS.md standardization and project-level instruction handling, while OpenAI Codex prioritizes model-specific optimizations and sandbox security.**

Claude Code 在企业级功能方面领先，推行 AGENTS.md 标准化和项目级指令处理；OpenAI Codex 则专注于模型特定的优化和沙盒安全。

---

**Gemini CLI targets developer experience with AST-aware tooling, OpenCode emphasizes performance and extensibility, and Qwen Code positions as a lightweight alternative with hybrid code execution.**

Gemini CLI 以 AST 感知的工具链提升开发者体验，OpenCode 强调性能和可扩展性，Qwen Code 则定位为具备混合代码执行能力的轻量替代方案。

---

**GitHub Copilot CLI bridges the Microsoft ecosystem, and Pi serves the self-hosted community.**

GitHub Copilot CLI 桥接微软生态，Pi 则服务于自托管社区。

---

**All tools are iterating rapidly on reliability, cross-platform support, and agent autonomy—reflecting a market that has moved beyond proof-of-concept toward production hardening.**

所有工具都在快速迭代，提升可靠性、跨平台支持和智能体自主性——这反映出市场已从概念验证阶段迈向生产环境加固。

---

**2. Activity Comparison**

活动对比

---

The table should remain in Markdown format. Let me translate the content:

| 工具 | 问题 (24h) | PRs (24h) | 讨论 (24h) | 版本发布 |
|------|------------|-----------|------------|----------

---

The remaining tools show varied activity levels. Claude Code demonstrates strong issue engagement with 8 active pull requests and consistent releases. OpenAI Codex maintains high pull request activity at 10, alongside discussions. Gemini CLI follows with 11 active pull requests, while GitHub Copilot CLI shows lower engagement with no pull requests. OpenCode and Pi both have 10 and 11 active pull requests respectively, though Pi also participates in discussions. Qwen Code rounds out the group with 10 pull requests and 2 releases.

The ecosystem shows diverse approaches to tool development, with each platform balancing issue tracking, collaborative development, and version management differently. Most tools have significant community engagement through issues and pull requests, indicating active maintenance and user interaction. 许多工具正在投资结构化代码导航，这表明随着上下文窗口的增大，标记效率已成为主要关注点。

企业级功能正在向标准化方向发展——AGENTS.md、项目级配置和组织级智能体策略的采用，标志着一个从个人工具向团队/企业部署的转型。Windows 作为一个关键的竞争平台存在——每个工具都报告了特定于 Windows 的问题（PTY、沙盒、内存泄漏、GPU 崩溃），这反映出平台 parity 是一个主要的摩擦点，也是差异化的机会。

随着会话运行时间更长、上下文更大，重复的工具响应、状态损坏和会话恢复问题已成为所有工具的阻塞问题。

MCP 生态系统集成正在成熟，但仍不稳定——MCP 服务器故障、OAuth 边缘情况和传输超时问题表明该协议正在获得采用，但实施质量参差不齐。

自托管/自定义提供商支持正在扩展——OpenCode、Pi 和 Qwen Code 都优先考虑自定义提供商的灵活性，反映出对供应商中立部署的需求。

对于工具选择，企业团队适合 Claude Code 或 GitHub Copilot CLI；性能优先的用户可考虑 OpenCode 或 Qwen Code；Google 生态系统用户可选择 Gemini CLI；需要完全控制的用

户可选 Pi。所有工具都存在 Windows 特定问题，需要进行彻底测试；长时间会话会引发跨工具的可靠性问题；MCP 集成需要仔细的提供商兼容性测试。</think>

# 跨工具对比报告：AI CLI 工具生态概览

## 1. 生态系统概览

2026年9月的AI CLI工具领域呈现出成熟市场的特征，各工具定位清晰、分工明确。Claude Code 在企业级功能方面领先，推行 AGENTS.md 标准化和项目级指令处理；OpenAI Codex 则专注于模型特定的优化和沙盒安全。Gemini CLI 以 AST 感知的工具链提升开发者体验，OpenCode 强调性能和可扩展性，Qwen Code 则定位为具备混合代码执行能力的轻量级替代方案。GitHub Copilot CLI 桥接微软生态，Pi 则服务于自托管社区。所有工具都在快速迭代，提升可靠性、跨平台支持和智能体自主性——这反映出市场已从概念验证阶段迈向生产环境加固。

## 2. 活动对比

| 工具 | Issues (24h) | PRs (24h) | 讨论 (24h) | Releases |
|------|--------------|-----------|------------|----------|
| **Claude Code** | 20+ 更新 | 8 进行中 | 未启用 | 2 (v2.1.276, v2.1.277) |
| **OpenAI Codex** | 10+ 更新 | 10 进行中 | 5 | 1 (rust-v0.155.1) + 5 个 alpha 版 |
| **Gemini CLI** | 15+ 更新 | 11 进行中 | 未启用 | 1 (v0.62.0-nightly) |
| **GitHub Copilot CLI** | 10+ 更新 | 0 | 未启用 | 1 (v1.0.87-0) |
| **OpenCode** | 30+ 更新 | 10 进行中 | 未启用 | 0 |
| **Pi** | 30+ 更新 | 11 进行中 | 6 | 0 |
| **Qwen Code** | 10+ 更新 | 10 进行中 | 未启用 | 2 (v0.24.1-preview.0, v0.24.0-nightly) |

## 3. 共同的功能方向

| 功能方向 | 相关工具 | 具体需求 |
|----------|----------|----------|
| **AST 感知/结构化代码工具** | Claude Code, Gemini CLI, Qwen Code | 精确的符号导航、基于方法边界的读取、通过精细化编辑减少 token 浪费 |
| **多账户/配置文件切换** | Claude Code, GitHub Copilot CLI | 账户间轻松切换上下文，无需重新认证 |
| **持久化任务/追踪器集成** | Gemini CLI, Pi, Qwen Code | 基于文件的任务追踪，替代上下文中的笔记，减少上下文衰减 |
| **离线模式/网络容错** | Gemini CLI, Pi, OpenCode | 明确的离线行为、无网络的模型发现、优雅降级 |
| **Windows 平台一致性** | 所有工具 | PTY 问题、沙盒故障、ConPTY/MSIX 特定的内存泄漏 |
| **内存/会话持久化可靠性** | Claude Code, Gemini CLI, Qwen Code | 防止重复工具响应、处理会话损坏、原子状态写入 |
| **MCP 服务器集成** | GitHub Copilot CLI, Claude Code, Qwen Code | OAuth 可靠性、stdio 传输超时、服务器发现 |
| **推理深度/摘要控制** | OpenAI Codex, Claude Code | 按请求调整推理深度、摘要与完整思考的切换 |

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业标准化 (AGENTS.md)、沙盒安全、项目级配置 | 需要跨项目统一智能体行为的标准团队 | 显式配置文件、严格沙盒、代理/网关支持 |
| **OpenAI Codex** | 模型特定优化、Windows/VS Code 集成、安全过滤 | 深度嵌入微软生态系统的开发者 | 深度 VS Code 耦合、安全分类器调优、Alpha/Beta 频道 |
| **Gemini CLI** | 智能体可靠性、AST 感知导航、内存管理 | 需要精准代码编辑的大规模代码库开发者 | 结构化搜索工具、延迟 MCP 加载、会话压缩 |
| **GitHub Copilot CLI** | 组织级智能体、MCP 生态、CLI 优先工作流 | GitHub Enterprise 用户、DevOps 工程师 | 智能体模板、组织策略、MCP 服务器集成 |
| **OpenCode** | 性能 (25ms 轮询)、可扩展性、多供应商灵活性 | 高级用户、自托管部署 | 插件子路径导出、工作树感知、供应商抽象 |
| **Pi** | 自定义供应商支持、扩展生态、TUI 优化 | 希望完全掌控 LLM 供应商的开发者 | 扩展系统、提示缓存预热、会话时间线 |
| **Qwen Code** | 混合代码执行、轻量级占用、上下文优化 | 资源敏感型开发者、Qwen 模型用户 | 代码模式隔离、token 治理、延迟工具的提示缓存 |

## 5. 社区活跃度与成熟度

### 最活跃社区

1. **Claude Code** — 最高互动量（单一功能请求获 5,168+ 👍），快速发布节奏（24小时内 2 个版本），企业驱动的问题量。成熟。

2. **OpenAI Codex** — 活跃的 alpha/beta 频道参与，开放的讨论区，广泛的平台问题覆盖。成熟。

3. **Pi** — 最高问题+PR 总量，同时有活跃的讨论区（6 个主题）。强大的扩展生态势头。增长中。

### 快速迭代中

- **Qwen Code** — 10 个进行中的 PR，频繁的夜间构建，积极推进上下文优化路线图。快速演进。
- **OpenCode** — 10 个进行中的 PR，性能导向的发布，夜间构建。快速演进。
- **Gemini CLI** — 11 个进行中的 PR，夜间节奏，强烈关注可靠性修复。快速演进。

### 较低活跃度

- **GitHub Copilot CLI** — 24 小时内 0 个 PR，但保持一致的发布节奏。稳定但开发活跃度较低。

## 6. 趋势信号

### 来自社区反馈的行业趋势

1. **AST 感知工具正在成为标配** — 三个主要工具（Claude Code、Gemini CLI、Qwen Code）明确投资结构化代码导航，表明随着上下文窗口增大，token 效率已成为核心关注点。

2. **企业功能正在向标准化收敛** — AGENTS.md（Claude Code）、项目级配置和组织级智能体策略的出现，标志着从个人工具向团队/企业部署的转变。

3. **Windows 是新的战场** — 每个工具都报告了 Windows 特定问题（PTY、沙盒、内存泄漏、GPU 崩溃）。平台一致性是主要摩擦点，也是差异化机会。

4. **内存/会话可靠性是关键的大规模问题** — 随着会话运行时间更长、上下文更大，重复工具响应、状态损坏和会话恢复成为所有工具的阻塞问题。

5. **MCP 生态集成正在成熟但仍然脆弱** — MCP 服务器故障、OAuth 边缘情况和传输超时表明协议正在获得采用，但实现质量参差不齐。

6. **自托管/自定义供应商支持正在扩展** — OpenCode、Pi 和 Qwen Code 都优先考虑自定义供应商灵活性，反映出对供应商中立部署的需求。

### 开发者的参考价值

- **选择工具**：企业团队 → Claude Code 或 GitHub Copilot CLI；性能优先 → OpenCode 或 Qwen Code；Google 生态 → Gemini CLI；完全控制 → Pi。
- **规避痛点**：所有工具都有 Windows 特定问题——需充分测试；长会话会触发跨工具的可靠性问题；MCP 集成需要仔细的供应商兼容性测试。

---

*基于 2026-09-19 的 GitHub 数据进行跨工具分析*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the entire report into Simplified Chinese, following the rules provided:
- Only output the translation, no preamble
- Preserve Markdown structure exactly
- Keep URLs, numbers, code, technical terms as-is
- Use natural technical Chinese register

Let me translate section by section, maintaining the exact structure.</think>

# Claude Code Skills 社区亮点报告

**数据来源：** anthropics/skills（截至 2026-09-19）

---

## 1. 技能排行榜

仓库共有 **50 个 PR**，代表技能提交和问题修复。值得注意的是，所有展示的 PR 评论数均显示为 `undefined`（可能因数据提取方式），因此排名基于近期活跃度、互动信号及 Issue 关联度。

| PR | 技能/功能 | 功能描述 | 状态 |
|----|----------------|----------------|--------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复** | 隔离触发器评估逻辑，处理 Windows 特定失败和运行时错误；修复技能触发器检测中的误报/无效分数问题 | OPEN |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 支持使用 Python 进行复古游戏开发，包含确定性无头运行、帧检查和状态验证功能 | OPEN |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 预防 AI 生成文档中的排版问题（孤行、 widow 词、对齐错误） | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | 对 Solidity/Rust 智能合约进行自动化静态分析，并将审计证明锚定到 TON 区块链 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本技能，将 Markdown 编译为带逼真配音的 MP4 视频（基于 Marp） | OPEN |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer** | 元技能，从 5 个维度评估 Claude Skills：结构/文档（20%）、触发质量、可操作性、鲁棒性、安全性 | OPEN |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | 多智能体编排技能，将工作委托给无头 opencode 工作者，Claude Code 保持规划者/审查者角色 | OPEN |

**讨论要点：**
- **#1298** 直接解决 Issue #556（触发率 0% 的 bug）和 #1721（召回率报告为 0%）
- **#83** 为整个技能市场引入质量门槛 — 一个技能开发的元工具
- **#525**（Pyxel）作为生态中唯一的复古游戏开发技能，持续受到关注

---

## 2. 社区需求趋势

Issue 揭示了以下高需求方向：

| Issue | 主题 | 需求信号 |
|-------|-------|---------------|
| [#492](https://github.com/anthropics/skills/issues/492)（43 条评论） | **安全/信任边界** — 社区技能位于 anthropic/ 命名空间下，冒充官方技能 | 关键问题；用户可能在不知情的情况下授予 elevated 权限 |
| [#228](https://github.com/anthropics/skills/issues/228)（16 条评论） | **组织级技能共享** — 组织内部需要共享技能库 | 企业工作流缺口 |
| [#556](https://github.com/anthropics/skills/issues/556)（12 条评论） | **触发器评估可靠性** — run_eval.py 显示 0% 触发率 | 阻塞技能验证的核心工具 bug |
| [#1329](https://github.com/anthropics/skills/issues/1329)（9 条评论） | **compact-memory** — 紧凑的智能体状态符号表示 | 长时运行智能体的新兴模式 |
| [#412](https://github.com/anthropics/skills/issues/412)（6 条评论） | **agent-governance** — 安全模式、策略执行、威胁检测 | 安全/审计需求 |

**最期待的技能方向：**
1. **安全与信任执行** — 审核、验证和沙箱化社区提交稿的技能
2. **企业协作** — 组织级共享、治理和权限控制
3. **智能体内存/状态** — 持久化上下文的紧凑表示
4. **治理与审计** — 策略执行、威胁检测、审计追踪

---

## 3. 高潜力待合并技能

这些活跃的 PR 是近期有望合并的候选：

| PR | 技能 | 快速合并的理由 |
|----|-------|----------------------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Web3 智能合约审计是增长领域；最新提交（2026-09-15） |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 零成本媒体生成解决常见工作流缺口 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 修复 | 修复 mcp>=2.0.0 的破坏性变更 — 高紧急度 |
| [#1769](https://github.com/anthropics/skills/pull/1769) | skill-creator 召回率修复 | 修复确认的 bug #1721 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 破坏性操作部署前安全检查清单 |
| [#1765](https://github.com/anthropics/skills/pull/1765) | office UTF-8 修复 | 解决 #1707 — 跨平台文档处理 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求是基础设施工具类技能** — 质量分析、安全审核、触发器评估可靠性，以及组织级共享机制 — 而非领域特定的 productivity 技能。

生态系统正在从"更多技能"向"更好的技能基础设施"成熟。Issue 压倒性地暴露了元级别问题（信任、治理、评估），而 PR 则聚焦于修复技能创建工具链本身。

---

<think>The user wants me to translate the English digest into Chinese, following the specific rules provided. Let me carefully translate while:

1. Keeping all Markdown structure exactly (headings, tables, lists, etc.)
2. Preserving URLs, issue/PR references, version tags, file paths, config identifiers
3. Using natural technical Chinese register
4. Keeping the tone of a Chinese developer newsletter

Let me go through and translate:

---

# Claude Code 社区每日简报 — 2026-09-19

## 今日要闻

Claude Code 团队在过去 24 小时内发布了两版本：**v2.1.277** 新增了原生 AGENTS.md 支持，作为 CLAUDE.md 的标准化替代方案；v2.1.276 修复了一个回归问题——当使用代理网关时，所有请求都因 `400` 错误而失败。社区呼声最高的功能请求（#6235，5,168 👍）现已解决，不过用户注意到新配置选项在 Bedrock、Vertex 或 Foundry 上暂不可用。

---

## 版本更新

**v2.1.277**
- 新增 AGENTS.md 支持：在没有 CLAUDE.md 的项目中，Claude Code 现在会读取 AGENTS.md；可通过 `/config` 中的"项目说明"进行配置（Bedrock、Vertex、Foundry 上暂不可用）
- 新增 `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` 环境变量，适用于仅出口指向 Anthropic API 的 Claude 应用网关
- [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

**v2.1.276**
- 修复回归问题（2.1.275）：当 `ANTHROPIC_BASE_URL` 指向代理或网关时，所有请求因 `400 … Input tag 'advisor_20260301'` 错误而失败
- [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.276)

---

## 热门 Issue

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235)** — 功能请求：支持 AGENTS.md — **已关闭**
   - 社区驱动的标准化工作（5,168 👍，400 条评论）。Codex、Amp、Cursor 等已采用 AGENTS.md 作为编码代理的统

一格式。已在 v2.1.277 中发布。

2. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — 添加管理多个 Claude 账户并轻松切换配置文件的功能 — **进行中**
   - 呼声很高的生活质量改进（814 👍，192 条评论）。用户希望在桌面应用中无需注销/重新登录即可在账户间切换。

3. **[#76694](https://github.com/anthropics/claude-code/issues/76694)** — 合著：新项目的"选择文件夹"在聊天/合著合并后消失 — **进行中**
   - Windows/macOS 上的合并后回归问题。上下文菜单被聊天风格的纯上传菜单取代，破坏了项目文件夹选择功能。

4. **[#89398](https://github.com/anthropics/claude-code/issues/89398)** — 斜杠命令选择器仅在 "/" 作为首字符时才打开 — **进行中**
   - Windows 上的 UX 问题：选择器虽未触发显示，但提交时命令仍会执行。影响工作流效率。

5. **[#87647](https://github.com/anthropics/claude-code/issues/87647)** — 自 2026 年 3 月以来超过 6,000 个 "has repro" issue 被自动关闭 — **进行中**
   - 流程问题（49 👍）。用户报告由于自动关闭策略，有效的 issue 追踪丢失。

6. **[#95455](https://github.com/anthropics/claude-code/issues/95455)** — excludedCommands "每个部分必须匹配" 导致带有前置子命令标志的单命令被过滤 — **进行中**
   - v2.1.277 在 Linux/WSL 上的回归问题。像 `git -C`、`-c`、`--git-dir` 这样的命令被错误地从沙箱中排除。

7. **[#95367](https://github.com/anthropics/claude-code/issues/95367)** — 2.1.271 中磁盘来源的技能无法加载 — **进行中**
   - 关键回归：用户技能（位于 `~/.claude/skills/`）和插件技能加载失败；仅有内置技能可用。

8. **[#94735](https://github.com/anthropics/claude-code/issues/94735)** — 会话意外归档；计划任务不同步到 iOS 远程控制 — **进行中**
   - 影响 iOS 远程控制用户的平台特定问题。任务丢失，会话中断。

9. **[#95489](https://github.com/anthropics/claude-code/issues/95489)** — Windows/MSIX：fswatch-probe 重试约 38,000 次/秒，泄漏约 230 MB/分钟 — **进行中**
   - Windows/MSIX 上的关键内存泄漏。可通过 `CLAUDE_CODE_TMPDIR` 临时解决。

10. **[#95479](https://github.com/anthropics/claude-code/issues/95479)** — 分类器在工具执行验证中过度触发误报 — **进行中**
    - 安全/权限摩擦。用户报告合法编码任务被错误标记。

---

## 关键 PR 进展

1. **[#95488](https://github.com/anthropics/claude-code/pull/95488)** — 停靠面板在打开前预读仓库
   - 差异面板现在在显示前预加载数据，消除了首次编辑或执行 `/diff` 时的"加载差异中…"状态。

2. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — 首次编辑仅在有待列出文件时打开面板
   - 防止为仓库外写入、被忽略文件或不同工作树的写入显示空面板。

3. **[#95423](https://github.com/anthropics/claude-code/pull/95423)** — 差异模式：只读 shell 命令不获取任何内容
   - 优化差异重新获取：跳过不会修改文件的 `ls`、`git status`、`cat`、grep 调用。

4. **[#95417](https://github.com/anthropics/claude-code/pull/95417)** — AGENTS.md 读取：引擎未附加内容时不读取嵌套附件
   - 修复 AGENTS.md mod 与 `--bare` 和 `CLAUDE_CODE_DISABLE_ATTACHMENTS` 的兼容性。

5. **[#95409](https://github.com/anthropics/claude-code/pull/95409)** — AGENTS.md 项目说明 mod
   - 在 `mods/agents-md` 下发布 `agents-md` mod 源代码，包含完整测试覆盖。

6. **[#95476](https://github.com/anthropics/claude-code/pull/95476)** — 仅在主循环中且启用检查点时首次编辑打开面板
   - 改进差异面板行为：子代理编辑或没有检查点的会话不再触发面板。

7. **[#95198](https://github.com/anthropics/claude-code/pull/95198)** — 将 openPane 的返回值类型设为 unknown
   - 为未来引擎版本中更丰富的 `$.ui.open` 返回值做准备。

---

## 功能请求趋势

| 主题 | 热度 | 状态 |
|-------|---------|--------|
| **多账户管理** | #18435 (814 👍) | 需求强烈，未公布时间表 |
| **AGENTS.md 标准化** | #6235 (5,168 👍) | ✅ 已在 v2.1.277 中发布 |
| **改进的差异面板 UX** | 多个 PR | 正在开发中 |
| **DAG/工作流可视化** | #76963 | 已关闭，不计划实现 |
| **自动清理临时目录** | #76995 | 已关闭，不计划实现 |
| **大型粘贴草稿板** | #77062 | 已关闭，不计划实现 |

---

## 开发者痛点

- **平台特定回归**：Windows/MSIX（文件夹选择器、内存泄漏、斜杠命令）和 iOS 远程控制同步存在多个问题
- **技能系统不稳定**：磁盘来源技能加载失败（#95367）破坏自定义工作流
- **沙箱配置边界情况**：`excludedCommands` glob 行为（#95455）破坏常见 git 工作流
- **分类器误报**：安全工具过度标记合法编码任务造成摩擦
- **iOS 集成缺口**：远程控制会话意外断开，深链接未按预期工作
- **UI/UX 不一致**：删除的日程仍显示在侧边栏，分享菜单中的版本选择器被移除

---

*简报基于 GitHub 数据生成 — 2026-09-19*</think>

# Claude Code 社区每日简报 — 2026-09-19

## 今日要闻

Claude Code 团队在过去 24 小时内发布了两版本：**v2.1.277** 新增了原生 AGENTS.md 支持，作为 CLAUDE.md 的标准化替代方案；v2.1.276 修复了一个回归问题——当使用代理网关时，所有请求都因 `400` 错误而失败。社区呼声最高的功能请求（#6235，5,168 👍）现已解决，不过用户注意到新配置选项在 Bedrock、Vertex 或 Foundry 上暂不可用。

---

## 版本更新

**v2.1.277**
- 新增 AGENTS.md 支持：在没有 CLAUDE.md 的项目中，Claude Code 现在会读取 AGENTS.md；可通过 `/config` 中的"项目说明"进行配置（Bedrock、Vertex、Foundry 上暂不可用）
- 新增 `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` 环境变量，适用于仅出口指向 Anthropic API 的 Claude 应用网关
- [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.277)

**v2.1.276**
- 修复回归问题（2.1.275）：当 `ANTHROPIC_BASE_URL` 指向代理或网关时，所有请求因 `400 … Input tag 'advisor_20260301'` 错误而失败
- [发布说明](https://github.com/anthropics/claude-code/releases/tag/v2.1.276)

---

## 热门 Issue

1. **[#6235](https://github.com/anthropics/claude-code/issues/6235)** — 功能请求：支持 AGENTS.md — **已关闭**
   - 社区驱动的标准化工作（5,168 👍，400 条评论）。Codex、Amp、Cursor 等已采用 AGENTS.md 作为编码代理的统一格式。已在 v2.1.277 中发布。

2. **[#18435](https://github.com/anthropics/claude-code/issues/18435)** — 添加管理多个 Claude 账户并轻松切换配置文件的功能 — **进行中**
   - 呼声很高的生活质量改进（814 👍，192 条评论）。用户希望在桌面应用中无需注销/重新登录即可在账户间切换。

3. **[#76694](https://github.com/anthropics/claude-code/issues/76694)** — 合著：新项目的"选择文件夹"在聊天/合著合并后消失 — **进行中**
   - Windows/macOS 上的合并后回归问题。上下文菜单被聊天风格的纯上传菜单取代，破坏了项目文件夹选择功能。

4. **[#89398](https://github.com/anthropics/claude-code/issues/89398)** — 斜杠命令选择器仅在 "/" 作为首字符时才打开 — **进行中**
   - Windows 上的 UX 问题：选择器虽未触发显示，但提交时命令仍会执行。影响工作流效率。

5. **[#87647](https://github.com/anthropics/claude-code/issues/87647)** — 自 2026 年 3 月以来超过 6,000 个 "has repro" issue 被自动关闭 — **进行中**
   - 流程问题（49 👍）。用户报告由于自动关闭策略，有效的 issue 追踪丢失。

6. **[#95455](https://github.com/anthropics/claude-code/issues/95455)** — excludedCommands "每个部分必须匹配" 导致带有前置子命令标志的单命令被过滤 — **进行中**
   - v2.1.277 在 Linux/WSL 上的回归问题。像 `git -C`、`-c`、`--git-dir` 这样的命令被错误地从沙箱中排除。

7. **[#95367](https://github.com/anthropics/claude-code/issues/95367)** — 2.1.271 中磁盘来源的技能无法加载 — **进行中**
   - 关键回归：用户技能（位于 `~/.claude/skills/`）和插件技能加载失败；仅有内置技能可用。

8. **[#94735](https://github.com/anthropics/claude-code/issues/94735)** — 会话意外归档；计划任务不同步到 iOS 远程控制 — **进行中**
   - 影响 iOS 远程控制用户的平台特定问题。任务丢失，会话中断。

9. **[#95489](https://github.com/anthropics/claude-code/issues/95489)** — Windows/MSIX：fswatch-probe 重试约 38,000 次/秒，泄漏约 230 MB/分钟 — **进行中**
   - Windows/MSIX 上的关键内存泄漏。可通过 `CLAUDE_CODE_TMPDIR` 临时解决。

10. **[#95479](https://github.com/anthropics/claude-code/issues/95479)** — 分类器在工具执行验证中过度触发误报 — **进行中**
    - 安全/权限摩擦。用户报告合法编码任务被错误标记。

---

## 关键 PR 进展

1. **[#95488](https://github.com/anthropics/claude-code/pull/95488)** — 停靠面板在打开前预读仓库
   - 差异面板现在在显示前预加载数据，消除了首次编辑或执行 `/diff` 时的"加载差异中…"状态。

2. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — 首次编辑仅在有待列出文件时打开面板
   - 防止为仓库外写入、被忽略文件或不同工作树的写入显示空面板。

3. **[#95423](https://github.com/anthropics/claude-code/pull/95423)** — 差异模式：只读 shell 命令不获取任何内容
   - 优化差异重新获取：跳过不会修改文件的 `ls`、`git status`、`cat`、grep 调用。

4. **[#95417](https://github.com/anthropics/claude-code/pull/95417)** — AGENTS.md 读取：引擎未附加内容时不读取嵌套附件
   - 修复 AGENTS.md mod 与 `--bare` 和 `CLAUDE_CODE_DISABLE_ATTACHMENTS` 的兼容性。

5. **[#95409](https://github.com/anthropics/claude-code/pull/95409)** — AGENTS.md 项目说明 mod
   - 在 `mods/agents-md` 下发布 `agents-md` mod 源代码，包含完整测试覆盖。

6. **[#95476](https://github.com/anthropics/claude-code/pull/95476)** — 仅在主循环中且启用检查点时首次编辑打开面板
   - 改进差异面板行为：子代理编辑或没有检查点的会话不再触发面板。

7. **[#95198](https://github.com/anthropics/claude-code/pull/95198)** — 将 openPane 的返回值类型设为 unknown
   - 为未来引擎版本中更丰富的 `$.ui.open` 返回值做准备。

---

## 功能请求趋势

| 主题 | 热度 | 状态 |
|-------|---------|--------|
| **多账户管理** | #18435 (814 👍) | 需求强烈，未公布时间表 |
| **AGENTS.md 标准化** | #6235 (5,168 👍) | ✅ 已在 v2.1.277 中发布 |
| **改进的差异面板 UX** | 多个 PR | 正在开发中 |
| **DAG/工作流可视化** | #76963 | 已关闭，不计划实现 |
| **自动清理临时目录** | #76995 | 已关闭，不计划实现 |
| **大型粘贴草稿板** | #77062 | 已关闭，不计划实现 |

---

## 开发者痛点

- **平台特定回归**：Windows/MSIX（文件夹选择器、内存泄漏、斜杠命令）和 iOS 远程控制同步存在多个问题
- **技能系统不稳定**：磁盘来源技能加载失败（#95367）破坏自定义工作流
- **沙箱配置边界情况**：`excludedCommands` glob 行为（#95455）破坏常见 git 工作流
- **分类器误报**：安全工具过度标记合法编码任务造成摩擦
- **iOS 集成缺口**：远程控制会话意外断开，深链接未按预期工作
- **UI/UX 不一致**：删除的日程仍显示在侧边栏，分享菜单中的版本选择器被移除

---

*简报基于 GitHub 数据生成 — 2026-09-19*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest into Simplified Chinese. I need to:

1. Translate all headings, body text, and list items
2. Keep all Markdown structure (tables, lists, headings, horizontal rules, etc.)
3. Keep all technical identifiers, URLs, issue numbers, version tags, file paths as-is
4. Use natural technical Chinese register

Let me go through and translate this carefully, preserving all formatting.</think>

# OpenAI Codex 社区速览 — 2026-09-19

## 今日要闻

Codex 团队发布了 **rust-v0.155.1**，这是一个修复版本，在新的本地 TUI 会话中默认关闭推理摘要功能，解决了向不支持该功能的 provider 发送请求时被拒绝的问题。与此同时，社区仍在应对 Windows 平台特有的问题：Windows 10 22H2 上的 Windows Computer Use 截图失败问题引发了大量关注（69 条评论），此外还有 Windows 桌面应用中持续的沙箱和项目同步问题。Alpha 版本继续更新中。

---

## 版本发布

| 版本 | 类型 | 变更说明 |
|---------|------|-------------|
| [rust-v0.155.1](https://github.com/openai/codex/releases/tag/rust-v0.155.1) | 补丁 | 新 TUI 会话默认关闭推理摘要，修复了 provider 不支持该功能时的请求被拒问题。显式设置的 reasoning-summary 参数保持有效。 |
| [rust-v0.156.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.5) | Alpha | Release 0.156.0-alpha.5 |
| [rust-v0.156.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.4) | Alpha | Release 0.156.0-alpha.4 |
| [rust-v0.156.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.3) | Alpha | Release 0.156.0-alpha.3 |
| [rust-v0.156.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.2) | Alpha | Release 0.156.0-alpha.2 |
| [rust-v0.155.0-alpha.9.2](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9.2) | Alpha | Release 0.155.0-alpha.9.2 |

---

## 热门 Issue

| # | Issue | 摘要 | 为何重要 |
|---|-------|---------|----------------|
| [#9203](https://github.com/openai/codex/issues/9203) | **[TUI] 请恢复 "/undo" 功能** | 用户请求 `/undo` 命令来撤销非 Git 跟踪文件的误删或误改。 | 高优先级安全功能；77 条评论，453 👍。Undo 对防止非 Git 追踪文件的数据丢失至关重要。 |
| [#25178](https://github.com/openai/codex/issues/25178) | **Windows Computer Use 截图在 Windows 10 22H2 上失败** | `get_window_state` 调用请求截图时失败，提示 `SetIsBorderRequired failed: 不支持此接口 (0x80004002)`。 | 影响了广泛部署的 Windows 版本上的 Computer Use 功能；69 条评论。 |
| [#42215](https://github.com/openai/codex/issues/42215) | **Windows ChatGPT Work：项目上下文同步反复失败** | ChatGPT 项目内的本地聊天在文件系统阶段失败。 | 阻塞了 Windows 桌面应用的核心工作流；34 条评论。 |
| [#37104](https://github.com/openai/codex/issues/37104) | **集成终端在 PTY/WSL 启动前静默失败** | 终端静默失败；底部和侧边栏面板无法打开。 | 用户体验阻塞；24 条评论，10 👍。 |
| [#17322](https://github.com/openai/codex/issues/17322) | **关闭窗口时应用未完全退出** | 两个问题：点击 X 按钮应用未完全退出，侧边栏存在 UI 命中测试问题。 | 持久化/资源泄漏；22 条评论，19 👍。 |
| [#45119](https://github.com/openai/codex/issues/45119) | **macOS 14.2：沙箱启动失败，TIOCSTI 未绑定** | 沙箱启动在 macOS 14.2 Apple Silicon 上失败。 | 阻塞了最新 macOS 上的开发；21 条评论。 |
| [#34306](https://github.com/openai/codex/issues/34306) | **安全检查阻止了正常操作** | 在正常使用 Codex 时出现"无法显示此内容"。 | 安全过滤误报；21 条评论，17 👍。 |
| [#45835](https://github.com/openai/codex/issues/45835) | **尽管连接正常仍反复显示"所选模型已达容量"** | 尽管连接状态良好，Codex 仍反复显示容量错误。 | 误导性错误提示；15 条评论。 |
| [#44736](https://github.com/openai/codex/issues/44736) | **ChatGPT 项目预热锁定本地镜像** | 项目预热锁定本地镜像；启动时擦除了 cwd 变通方案。 | Windows 特定工作流阻塞；12 条评论。 |
| [#46398](https://github.com/openai/codex/issues/46398) | **意外的 access_programs.cyber 参数导致 HTTP 400** | 意外的安全参数导致普通工作时出现 HTTP 400。 | API 回归问题；10 条评论，6 👍。 |

---

## 关键 PR 进展

| PR | 摘要 | 影响 |
|----|---------|--------|
| [#46535](https://github.com/openai/codex/pull/46535) | 在 Linux 沙箱 socket 检查中允许无关命名空间挂载 | 修复了 Linux 上命名空间挂载（如 `mnt:[inode]`, `net:[inode]`）导致的沙箱启动问题。 |
| [#46534](https://github.com/openai/codex/pull/46534) | 在 `workspace_root_test` 中支持 `env_inherit` | 使测试能够继承选定的环境变量。 |
| [#46533](https://github.com/openai/codex/pull/46533) | 新 TUI 线程默认关闭推理摘要 | 新线程默认 `model_reasoning_summary` 为 `none`；启用 `features.concurrent_reasoning_summaries` 而非自动启用摘要。 |
| [#46532](https://github.com/openai/codex/pull/46532) | 从 Seatbelt 平台默认值中移除 `com.apple.runningboard` | macOS 安全策略优化。 |
| [#46531](https://github.com/openai/codex/pull/46531) | 为 memory 和 title workers 保留请求级推理工作流 | 记忆整合和标题生成现在尊重选定的推理工作流。 |
| [#46530](https://github.com/openai/codex/pull/46530) | 在显式模型支持下启用推理工作流更新 | 在恢复历史时，对不支持的模型使用请求级 effort。 |
| [#46527](https://github.com/openai/codex/pull/46527) | 固定 WinGet 发布依赖 | 修复发布工作流以符合 SHA 锁定操作要求。 |
| [#46523](https://github.com/openai/codex/pull/46523) | MXC 托管网络默认启用本地绑定 | 修复 MXC 托管网络默认配置。 |
| [#46522](https://github.com/openai/codex/pull/46522) | 默认启用 Guardian 父级压缩复用 | 将 `guardian_reuse_parent_compaction` 推向稳定版；启用加密父级压缩复用。 |
| [#46521](https://github.com/openai/codex/pull/46521) | 在共享进程组终止辅助函数中使用 macOS member 后备 | 通过对组 member 重试信号来提高 macOS 上的清理可靠性。 |

---

## 热门讨论

### 想法

| 讨论 | 摘要 |
|-------------|---------|
| [#9200](https://github.com/openai/codex/discussions/9200) | **从 ChatGPT 应用远程控制 Codex** — 用户希望有 headless/守护进程模式，支持从移动端/ChatGPT 应用远程控制。50 条评论，191 👍。 |

### 问答

| 讨论 | 摘要 |
|-------------|---------|
| [#46442](https://github.com/openai/codex/discussions/46442) | **Windows Codex 桌面版：不通过 cmd.exe 启动 PowerShell 是否可行？** — 咨询是否可以直接启动 PowerShell 而无需 cmd.exe 包装器。 |

### 展示

| 讨论 | 摘要 |
|-------------|---------|
| [#46477](https://github.com/openai/codex/discussions/46477) | **显式编辑基准测试：Codex 与其他测试工具对比** — 用于评估 Agent 文本编辑能力的自定义基准测试。 |
| [#46461](https://github.com/openai/codex/discussions/46461) | **在 Windows 用户配置文件之间迁移 Codex 历史和项目** | 在 Windows 配置文件之间移动 ChatGPT/Codex 的实用指南。 |

---

## 功能请求趋势

1. **撤销/恢复**：对 `/undo` 功能的需求强烈，用于恢复非 Git 追踪文件的误操作（Issue #9203，453 👍）。
2. **平台特定增强**：根据 OS 偏好自动检测浅色/深色主题（#12840），Vim 模式大写单词动作（#41718）。
3. **UI/UX 优化**：移除命令建议中多余的前导空格（#9252），禁用烦人的托盘图标（#17442）。
4. **远程/移动控制**：headless Codex，支持从 ChatGPT 应用远程控制（#9200）。
5. **Windows 集成**：不通过 cmd.exe 直接启动 PowerShell（#46442），改进 Windows 项目同步（#42215）。

---

## 开发者痛点

1. **Windows 沙箱故障**：Windows 上沙箱设置持续出现问题——提权沙箱错误（#46114）、辅助程序失败（#44696）、非管理员用户问题（#46515）、.git 写权限授权无效（#46526）。
2. **Windows Computer Use**：Windows 10 22H2 上的截图捕获失败（#25178）、多显示器超时问题（#45353）、无 TUN 时 Chrome 控制失败（#44364）。
3. **macOS 差距**：应用整合后 Option+Space 快速聊天消失（#31925）、macOS 14.2 沙箱启动失败（#45119）、Voice 访问被拒绝（#45752）。
4. **认证/远程问题**：启用 MFA 后远程控制失效（#46449），身份验证器应用集成问题。
5. **速率限制用户体验**：尽管连接正常仍反复显示"模型达容量"（#45835），配额限制问题（#37619）。
6. **安全检查误报**：过度激进的内容过滤阻止了正常操作（#34306），意外的 cyber 参数触发 HTTP 400（#46398）。

---

*基于 GitHub 数据生成 — 2026-09-19*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English community digest into Chinese, following specific rules about preserving formatting and using natural technical Chinese. Let me translate this while maintaining the exact structure.

Key points:
- Output ONLY the translation, no preamble
- Preserve Markdown structure exactly
- Keep URLs, numbers, issue numbers, etc. as-is
- Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate section by section:

## Today's Highlights
- Same content in Chinese

## Releases
- Same in Chinese

## Hot Issues
- Same structure, translate descriptions

## Key PR Progress
- Same tables, translate descriptions

## Feature Request Trends
- Translate this section

## Developer Pain Points
- Translate this section

Let me do the translation:</think>

# Gemini CLI 社区摘要 — 2026-09-19

## 今日要闻

Gemini CLI 团队发布了 **v0.62.0-nightly.20260918.g9450ade79**，改进了 OAuth 凭证处理和 UI 边界情况。主要开发活动集中在 agent 可靠性方面：P1 PR 正在修复会话恢复期间的重复工具响应、持久化状态写入安全性以及会话上下文污染问题。社区持续推动 AST 感知代码导航功能，新版结构化搜索工具正在积极开发中。

---

## 版本发布

### v0.62.0-nightly.20260918.g9450ade79 (2026-09-18)

**变更：**
- **fix(core):** 刷新时保留 OAuth 刷新令牌，使凭证删除具备幂等性 — 提升身份验证可靠性 ([#29339](https://github.com/google-gemini/gemini-cli/pull/29339))
- **fix(ui):** 防止边框渲染中出现负数布局尺寸 — 避免边界情况下的渲染崩溃

**发布 PR：** [#29383](https://github.com/google-gemini/gemini-cli/pull/29383)

---

## 热门 Issue

### P1 — 紧急

1. **[#22323] MAX_TURNS 后 Subagent 恢复错误报告为 GOAL 成功** — `codebase_investigator` subagent 在达到最大轮次限制未完成分析时，仍错误地报告成功状态。这会掩盖失败，可能导致自动化工作流中遗漏问题。*(13 条评论, 2 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#21409] Generalist agent 无限挂起** — 当 Gemini CLI 将控制权交给 generalist agent 时，简单操作（如创建文件夹）会无限挂起。用户报告等待长达一小时后才被迫取消。临时解决方案：明确指示模型避免使用 subagent。*(8 条评论, 8 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/21409

3. **[#21983] 浏览器 Subagent 在 Wayland 上失败** — 浏览器 subagent 在 Wayland 显示服务器上失败，限制了 Linux 桌面运行流行 Wayland  compositor 时的 CLI 功能。*(4 条评论, 1 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/21983

4. **[#22186] get-shit-done output hook 导致崩溃** — 在任务完成时输出用户摘要的 output hook 会导致 Gemini CLI 崩溃，造成不可预测的 CLI 终止。*(3 条评论)*  
   https://github.com/google-gemini/gemini-cli/issues/22186

5. **[#21763] Bugreport 不提供 subagent 上下文** — 生成 bug 报告时缺少 subagent 上下文，使得多 agent 会话的调试变得更加困难。*(2 条评论)*  
   https://github.com/google-gemini/gemini-cli/issues/21763

### P2 — 高优先级

6. **[#19873] 利用模型的 bash 亲和性实现零依赖 OS 沙箱** — 提议利用 Gemini 3 原生的 POSIX 工具链能力（`grep`、`cat`、`sed`、`awk`）而无需外部沙箱依赖。可显著提升代码探索和编辑效率。*(9 条评论, 1 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/19873

7. **[#22745] 评估 AST 感知文件读取、搜索和映射的影响 (EPIC)** — 追踪对 AST 感知工具的调研，以实现精确的方法边界读取，减少因文件读取不对齐导致的令牌浪费。PR [#29396](https://github.com/google-gemini/gemini-cli/pull/29396) 已在积极开发中。*(7 条评论, 1 👍)*  
   https://github.com/google-gemini/gemini-cli/issues/22745

8. **[#21968] Gemini 使用 skills 和 sub-agents 不够** — 模型很少自主调用自定义 skills 或 sub-agent，即使描述明显匹配任务。需要明确提示才能利用它们。*(6 条评论)*  
   https://github.com/google-gemini/gemini-cli/issues/21968

9. **[#26525] 添加确定性脱敏并减少 Auto Memory 日志** — Auto Memory 在向模型发送内容时未进行确定性密钥脱敏，服务可能会记录敏感数据。企业用户的安全隐患。*(5 条评论)*  
   https://github.com/google-gemini/gemini-cli/issues/26525

10. **[#22232] 增强 browser_agent 韧性：自动会话接管和锁恢复** — 浏览器 agent 在遇到锁定配置文件时快速失败而非尝试恢复，破坏了长时间运行的浏览器自动化任务。*(4 条评论)*  
    https://github.com/google-gemini/gemini-cli/issues/22232

---

## 关键 PR 进展

### 功能与增强

| PR | 描述 | 优先级 |
|----|-------------|----------|
| [#29396](https://github.com/google-gemini/gemini-cli/pull/29396) | **AST 感知结构化搜索工具** — 通过新的 `ast_search` 工具实现精确的符号级导航，使 agent 能够避免猜测行范围或读取整个文件。 | P2 |
| [#29393](https://github.com/google-gemini/gemini-cli/pull/29393) | **用持久化文件任务追踪替换 WriteToDo** — 从上下文内任务追踪（导致上下文膨胀和令牌浪费）迁移到 TrackerService 支持的 CRUD 操作。 | P3 |
| [#29397](https://github.com/google-gemini/gemini-cli/pull/29397) | **防止会话上下文污染和无限循环** — 阻止合成中断消息污染聊天历史，这会导致严重的上下文内会话污染。 | P2 |
| [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) | **修复重复工具响应** — 解决使用 `-r` 恢复会话时重复发送 `functionResponse` 消息的问题，原因是工具结果同时持久化在 `toolCalls[].result` 和持久化用户消息中。 | P1 |
| [#29394](https://github.com/google-gemini/gemini-cli/pull/29394) | **强制执行用户 hold 指令** — 当用户说"wait"或"explain first"时，在调度器层阻止变更工具，防止 agent 忽略明确的 hold 请求。 | P1 |

### Bug 修复

| PR | 描述 | 优先级 |
|----|-------------|----------|
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | **使持久化状态写入失败安全** — 使用原子临时文件写入 + `fsync` + 重命名，防止中断时截断的 JSON 静默清除 CLI 状态。 | P1 |
| [#29401](https://github.com/google-gemini/gemini-cli/pull/29401) | **规范化 proxy-agent esbuild 互操作** — 修复 `https-proxy-agent` 和 `http-proxy-agent` 的 CJS/ESM 互操作，确保构造函数解析一致。 | P1 |
| [#29398](https://github.com/google-gemini/gemini-cli/pull/29398) | **将 MCP 初始工具发现限制在短超时内** — 通过限制超时防止 MCP 服务器发送畸形 JSON-RPC 响应时出现 10 分钟挂起。 | P1 |
| [#29399](https://github.com/google-gemini/gemini-cli/pull/29399) | **编辑时保留无关注释** — 加强替换工具契约以保留注释和未触达代码，引导模型进行最小化单独编辑。 | P2 |
| [#29379](https://github.com/google-gemini/gemini-cli/pull/29379) | **同步 ConPTY 进程退出生命周期** — 改进 Windows ConPTY 环境下 shell 执行的进程生命周期确定性。 | P1 *(已合并)* |

### 依赖更新

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#29137](https://github.com/google-gemini/gemini-cli/pull/29137) | **批量更新 npm 依赖组** — 77 个更新，包括 `simple-git` 3.28→3.36 和 `@modelcontextprotocol/sdk`。 | 维护 |
| [#28986](https://github.com/google-gemini/gemini-cli/pull/28986) | **更新 puppeteer-core** 24→25.10.0 | 浏览器自动化 |

---

## 功能需求趋势

基于 issue 和 PR 分析，社区正在推动以下主要能力方向：

1. **AST 感知代码智能** — 多个 issue (#22745, #22746) 和 PR #29396 表明对精确符号导航、方法边界检测和精准代码读取的强烈需求，以减少令牌消耗。

2. **Agent 自主性与工具使用** — 关于模型更主动调用自定义 skills (#21968) 和 sub-agent 而无需明确提示的请求，反映了用户对更强大、自导向 agent 的期望。

3. **持久化任务追踪** — WriteToDo 被基于文件的 CRUD 追踪替换 (#29393) 解决了上下文膨胀和会话内存丢失的长期抱怨 (#18836)。

4. **安全与隐私加固** — Issue #26525、#26522、#26523 聚焦于确定性脱敏、Auto Memory 保护以及日志和提取流程中敏感数据的安全处理。

5. **可靠性与恢复** — Agent 挂起 (#21409)、subagent 恢复 (#22323) 和会话状态损坏 (#29400, #29402) 是 P1 关注的核心，表明 agent 需要为生产使用进行加固。

---

## 开发者痛点

- **Agent 挂起和无限循环** — deferral 时 generalist agent 挂起以及中断导致的上下文污染是高频阻塞问题。
- **Subagent 行为不一致** — Subagent 报告虚假成功 (#22323)、忽略设置覆盖 (#22267)、在特定环境（Wayland, #21983）下失败。
- **令牌效率低下** — "消防水带"式文件读取导致每轮 +15k 令牌；用户需要精准、有策略的提取 (#19561)。
- **会话和状态脆弱** — 重复工具响应、中断时状态文件截断以及 `/compress` 不持久化 (#21335) 造成数据完整性风险。
- **配置不一致** — 钩子超时单位在 Claude Code 和 Gemini CLI 之间不匹配 (#29125)、subagent 事件键命名错误 (#29124)、settings.json 被浏览器 agent 忽略 (#22267)。
- **工具调用可靠性** — 模型不主动使用可用的 skills 或 sub-agent，限制了自定义扩展的实用性。

---

*摘要基于 2026-09-19 的 google-gemini/gemini-cli GitHub 数据生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI Community Digest into Simplified Chinese. I need to:

1. Translate all the text content while keeping the same structure
2. Keep URLs, issue numbers, code, file paths, version tags as-is
3. Keep the Markdown structure exactly the same
4. Use natural technical Chinese register

Let me go through it section by section:

**Title:** GitHub Copilot CLI Community Digest → GitHub Copilot CLI 社区简报

**Date:** 2026-09-19 → 2026年9月19日

**1. Today's Highlights:**
- GitHub Copilot CLI v1.0.87-0 shipped with... → GitHub Copilot CLI v1.0.87-0 已发布...
- Auto routing tier defaults and improved prompt handling → 自动路由层级默认值和改进的提示处理
- While the community continues to surface integration challenges with MCP servers and configuration management → 社区持续反馈 MCP 服务器集成和配置管理方面的挑战
- Several high-impact issues around Figma MCP failures, OAuth authentication, and session stability remain open → 若干关于 Figma MCP 故障、OAuth 认证和会话稳定性的高影响力问题仍未解决
- indicating ongoing refinement needed for enterprise and cross-platform workflows → 表明企业和跨平台工作流仍需优化

**2. Releases:**
- Released → 已发布
- Added → 新增

For each feature:
- **Auto routing tier defaults**: User and managed startup defaults for the Auto routing tier, including strict and user-overridable organization policy → **自动路由层级默认值**：自动路由层级的用户和托管启动默认值，包括严格的组织策略且支持用户覆盖

- **Steering prompts improvement**: Consecutive steering prompts in the same mode combine into one pending message → **改进的引导提示**：同一模式下的连续引导提示会合并为一条待处理消息
 
I'll enhance the chat input editing feature by allowing users to edit the entire message content, including previously pasted text, by pressing the up arrow key. This provides more flexible message manipulation for developers.

---

The community highlights focus on key issues impacting Copilot CLI's usability, particularly around Figma MCP server failures, OAuth authentication, and session management. These challenges underscore the need for robust enterprise and cross-platform integration.

The issue #1285 reveals a critical enterprise adoption barrier: organization-level agents are invisible to CLI and VS Code users, despite correct template and namespace configuration. Similarly, issue #4870 exposes deep integration problems with Figma MCP servers, where tool registration fails and discovery probes trigger fatal errors.

Emerging technical constraints include default model selection limitations, configuration challenges in non-standard directory structures, and platform-specific UX frustrations like mandatory PowerShell on Windows. These issues collectively signal the need for more flexible, enterprise-ready design in GitHub Copilot CLI.

Session management and plugin discovery present additional workflow disruptions. Sessions abruptly terminating and plugin skills being inconsistently displayed across interfaces highlight potential reliability gaps in the current implementation.

The development team's priorities center on robust MCP integration, particularly addressing server failures and authentication complexities. Enterprise-level agent visibility and configuration flexibility emerge as critical design considerations, alongside nuanced plugin and skill management strategies.

Platform consistency and session reliability represent key technical challenges. Developers anticipate targeted improvements across Windows PowerShell configuration, Linux selection processes, and argument parsing to enhance overall system stability.

Ongoing configuration and platform-specific challenges continue to surface developer experience pain points, requiring comprehensive debugging and refinement strategies.</think>

# GitHub Copilot CLI 社区简报

**日期：** 2026年9月19日

---

## 1. 今日要闻

GitHub Copilot CLI v1.0.87-0 已发布，带来自动路由层级默认值和改进的提示处理功能，同时社区持续反馈 MCP 服务器集成和配置管理方面的挑战。若干关于 Figma MCP 故障、OAuth 认证和会话稳定性的高影响力问题仍未解决，表明企业和跨平台工作流仍需进一步优化。

---

## 2. 版本发布

### v1.0.87-0 (2026-09-19)

**新增：**

- **自动路由层级默认值**：为自动路由层级提供用户和托管启动默认值，包括严格的组织策略且支持用户覆盖
- **引导提示改进**：同一模式下的连续引导提示会合并为一条待处理消息
- **聊天输入编辑**：在空聊天输入框中按上键可调出内容进行编辑，包括粘贴的文本

---

## 3. 热门 Issue

| # | Issue | 摘要 | 👍 | 状态 |
|---|-------|------|---|------|
| **#1632** | [支持 skills 子文件夹](https://github.com/github/copilot-cli/issues/1632) | 用户希望在 `.github/skills/` 下组织 skills 到子文件夹，以便更清晰地管理 10+ 个自定义 skills | 24 | 已关闭 |
| **#1285** | [组织级别 Agent 不显示](https://github.com/github/copilot-cli/issues/1285) | 企业用户即使正确配置了模板和命名空间，也无法在 CLI 或 VS Code 中看到组织级别的 agents | 13 | 开放 |
| **#4870** | [Figma MCP 服务器报错 `-32601`](https://github.com/github/copilot-cli/issues/4870) | Figma 托管 MCP 服务器初始化成功，但 CLI 从未注册其工具；发现探测收到 `-32601` 错误被视为致命错误（在 VS Code 中可正常工作） | 11 | 开放 |
| **#1824** | [默认模型选择](https://github.com/github/copilot-cli/issues/1824) | 用户无法设置默认模型——CLI 始终默认使用 Claude Sonnet；希望支持用户可配置的默认模型 | 3 | 已关闭 |
| **#4765** | [非仓库根目录配置读取失败](https://github.com/github/copilot-cli/issues/4765) | 工作目录不是 git 仓库根目录时，CLI 无法读取 `.mcp.json` 或 hook 文件（在多仓库工作区中很常见） | 0 | 开放 |
| **#1086** | [不要在 Windows 上强制使用 PowerShell](https://github.com/github/copilot-cli/issues/1086) | CLI 强制使用 PowerShell 处理简单的批处理文件（如 `gradlew`）；拥有 capable cmd 终端的用户无法使用 | 2 | 已关闭 |
| **#4839** | [提供禁用任务栏图标的选项](https://github.com/github/copilot-cli/issues/4839) | 拥有大量会话的用户希望禁用 CLI 任务栏图标以避免混乱；目前无退出选项 | 2 | 开放 |
| **#4886** | [`--plugin-dir` skills 未显示在 `/skills` 中](https://github.com/github/copilot-cli/issues/4886) | Plugin skills 出现在 `copilot skill list --json` 中，但缺失于交互式 `/skills` 仪表板和 `/env` 输出 | 0 | 开放 |
| **#4905** | [桌面应用会话几分钟后终止](https://github.com/github/copilot-cli/issues/4905) | 会话启动后不久即终止，提示"GitHub 凭证注册不再可用"；受影响的捆绑 CLI 版本为 1.0.84-5 | 2 | 开放 |
| **#2892** | [MCP stdio 传输约 4 秒后关闭](https://github.com/github/copilot-cli/issues/2892) | 子 agent 仍在运行时 MCP stdio 传输关闭（约 4 秒后），导致该时间窗口后的任何 MCP 工具调用失败 | 0 | 已关闭 |

---

## 4. 重要 PR 进展

过去 24 小时内没有 Pull Request 更新。

---

## 5. 热门讨论

数据源中未提供讨论数据。

---

## 6. 功能请求趋势

| 类别 | 请求 |
|------|------|
| **模型/Agent 配置** | 默认模型选择 (#1824)、橡皮鸭模式的自定义模型 (#3480)、按组织配置默认模型 |
| **MCP 集成** | Figma 服务器支持 (#4870)、OAuth 修复 (#4901, #4906)、可靠的 MCP 重连 (#4907) |
| **组织/企业** | 组织级别 agent 可见性 (#1285)、组织策略控制 |
| **Plugin/Skills 管理** | 子文件夹支持 (#1632)、plugin-dir skill 可见性 (#4886)、可工具调用的 cwd (#3035) |
| **平台/体验** | 任务栏图标开关 (#4839)、Windows 上 PowerShell 可选 (#1086)、Linux PRIMARY 选择 (#4236) |
| **配置** | 非仓库根目录配置支持 (#4765)、trustedFolders 冲突处理 (#4900) |

---

## 7. 开发者痛点

1. **MCP 可靠性问题**：Figma MCP 服务器故障、OAuth 认证问题和 stdio 传输超时表明 MCP 集成在不同环境中表现脆弱

2. **企业可见性问题**：组织级别的 agents 和策略无法正确显示，仍是团队采用的主要障碍

3. **配置边界问题**：在非 git 仓库根目录运行时 CLI 无法读取配置——这在 monorepo 和工作区环境中很成问题

4. **平台不一致性**：Windows 强制使用 PowerShell、Linux PRIMARY 选择以及 bash 5.3 兼容性问题给跨平台开发者带来困扰

5. **会话管理问题**：桌面应用会话在使用中过期以及并发配置文件覆盖表明共享状态管理存在竞态条件

6. **参数解析回归**：1.0.85 版本中以 `-` 开头的 prompt 值被错误解析为 flag——这影响了使用 YAML frontmatter 的用户

---

*简报结束。数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following specific rules:
- Only output the translation, no preamble or explanation
- Keep Markdown structure exactly
- Keep URLs, numbers, issue references as-is
- Keep technical terms and project names in original form
- Use natural technical Chinese register

Let me translate this carefully, maintaining the format and making it read naturally in Chinese.</think>

# OpenCode 社区摘要 — 2026-09-19

## 今日要点

OpenCode 社区昨天遭遇了一次严重的免费套餐认证问题，引发了 100+ 条评论和多个重复报告。与此同时，核心团队持续推进桌面应用的性能优化，多个 PR 聚焦于启动延迟和插件处理。

---

## 发布版本

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 摘要 | 评论 | 👍 |
|---|-------|---------|----------|-----|
| 1 | **[#49433](https://github.com/anomalyco/opencode/issues/49433)** | **免费套餐报错 "can only be used from within OpenCode"** — 免费套餐的任何模型都返回此错误，约在 9 月 17-18 日出现。多位用户同时受到影响。 | 43 | 8 |
| 2 | **[#49580](https://github.com/anomalyco/opencode/issues/49580)** | **免费套餐 (Muse Spark 1.3 Free) 在 MonoCode 前端报同样错误** — 使用 MonoCode 桌面 UI 搭配 OpenCode 后端时出现问题，约 55 秒后失败。 | 43 | 2 |
| 3 | **[#12393](https://github.com/anomalyco/opencode/issues/12393)** | **[web] 如何在 opencode-desktop 中取消归档** — 用户误将一个会话归档，需要恢复。最近已关闭。 | 21 | 35 |
| 4 | **[#35870](https://github.com/anomalyco/opencode/issues/35870)** | **无头 opencode 启动时随机卡死** — `opencode run` 在 bootstrap 后卡住，主线程停在 `epoll_wait`。由 `InstanceStore.load` 在 bootstrap 期间 fork 导致。 | 6 | 1 |
| 5 | **[#49014](https://github.com/anomalyco/opencode/issues/49014)** | **Go：某个模型达到 5 小时使用限制后阻塞所有模型** — grok-4.6 达到限制后，所有其他 OpenCode Go 模型开始返回相同错误。 | 4 | 0 |
| 6 | **[#48747](https://github.com/anomalyco/opencode/issues/48747)** | **Windows 应用启动失败 — AMD Radeon GPU 和 Renderer 崩溃** — 在 AMD 显卡上以 exitCode -2147483645 崩溃。 | 4 | 0 |
| 7 | **[#46692](https://github.com/anomalyco/opencode/issues/46692)** | **v2 packages/llm provider 路径中 chunkTimeout 和 timeout 被静默忽略** — 设置被 schema 接受但从未读取；provider 没有客户端 stall 上限。 | 3 | 0 |
| 8 | **[#48675](https://github.com/anomalyco/opencode/issues/48675)** | **"opencode run"：零 chunk provider 流卡死永不报错** — 无超时、无重试、无退出。三个无头 worker 在 17 秒内全部卡死。 | 3 | 0 |
| 9 | **[#49777](https://github.com/anomalyco/opencode/issues/49777)** | **tui：/btw 在渲染答案对话框时崩溃** — 内置的 `/btw` 斜杠命令在 TUI 中崩溃，原因是试图在上下文外访问 `PluginProvider`。 | 3 | 2 |
| 10 | **[#49756](https://github.com/anomalyco/opencode/issues/49756)** | **Server (1.18.31)：免费套餐 zen 模型失败 — User-Agent 未转发到 zen API** — Server 未转发 User-Agent 头，导致免费套餐认证失败。 | 1 | 0 |

---

## 主要 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|---------|--------|
| 1 | **[#49869](https://github.com/anomalyco/opencode/pull/49869)** | **perf(desktop)：Electron 就绪时立即显示第一个窗口** — 通过延迟模块加载和并行化窗口创建，消除约 900ms 白屏。 | OPEN |
| 2 | **[#49865](https://github.com/anomalyco/opencode/pull/49865)** | **feat(opencode)：添加 sysml-lsp 内置 LSP 服务器** — 为 `.sysml` 和 `.kerml` 文件添加 SysML LSP 支持，带自动 `go install` 回退。 | OPEN |
| 3 | **[#49863](https://github.com/anomalyco/opencode/pull/49863)** | **fix(plugin)：支持 package subpath exports** — 修复 #49852；处理 npm subpath exports 如 `opencode-pty/v2`。 | OPEN |
| 4 | **[#49862](https://github.com/anomalyco/opencode/pull/49862)** | **fix(event)：移除工作树会话 SSE 流的目录过滤** — 修复了导致共享同一目录的工作树会话失败的过滤逻辑。 | CLOSED |
| 5 | **[#49868](https://github.com/anomalyco/opencode/pull/49868)** | **fix(simulation)：在 UI 捕获中包含图像** — 捕获的帧现在包含图像渲染器，实现截图的完整视觉证据。 | CLOSED |
| 6 | **[#49838](https://github.com/anomalyco/opencode/pull/49838)** | **feat(plugin)：在 tool domain 中添加 list** — 允许插件在 `transform` 外部读取已注册的工具，用于输入修复。 | CLOSED |
| 7 | **[#48638](https://github.com/anomalyco/opencode/pull/48638)** | **fix：强化 session diffs、snapshots 和写入路径；消除 worker-thread 卡顿** — 将完整 git patch 附加到用户消息并在 fork 时正确处理以防止卡顿。 | OPEN |
| 8 | **[#21627](https://github.com/anomalyco/opencode/pull/21627)** | **fix(provider)：为自定义 OpenAI 兼容 provider 启用图像支持** — 允许自定义 provider（如 Ollama）中的视觉模型处理图像附件。 | OPEN |
| 9 | **[#49780](https://github.com/anomalyco/opencode/pull/49780)** | **perf(client)：每 25ms 轮询一次启动中的服务** — 将服务启动轮询从 100ms 降至 25ms，加快启动速度。 | OPEN |
| 10 | **[#49866](https://github.com/anomalyco/opencode/pull/49866)** | **revert(core)：移除 autonomous goal 命令** — 按维护者请求撤销 `/goal` 命令。 | CLOSED |

---

## 功能请求趋势

| 请求 | 描述 | Issue |
|---------|-------------|-------|
| **MCP 工具搜索支持延迟 schema 加载** | 配置选项：将 MCP tool schema 排除在 system-prompt 之外，改为通过搜索工具暴露 | [#49645](https://github.com/anomalyco/opencode/issues/49645) |
| **后台子 agent、监控、定时任务、工作树隔离** | Fork 包含 agent 编排功能 | [#49840](https://github.com/anomalyco/opencode/issues/49840) |
| **GitHub Discussions** | 启用 Discussions 作为 Discord 的替代方案 | [#37817](https://github.com/anomalyco/opencode/issues/37817) |
| **更好的项目配置隔离** | `OPENCODE_DISABLE_PROJECT_CONFIG=1` 和 `--pure` 还应跳过 `.opencode/plugins/` 加载 | [#49836](https://github.com/anomalyco/opencode/issues/49836) |

---

## 开发者痛点

1. **免费套餐认证服务中断** — 今天是主要的痛点。免费套餐用户（Muse Spark 1.3 Free 等）无法使用 OpenCode，服务错误地将请求识别为"非来自 OpenCode"。已提交多个重复 issue。同时影响直接 CLI 和第三方前端（MonoCode）。

2. **Windows 桌面崩溃** — 配备 AMD Radeon 显卡的用户继续遭遇 GPU 进程崩溃（exitCode -2147483645），导致应用无法启动。

3. **无头模式可靠性** — 无头 `opencode run` 命令启动时随机卡死，无超时或恢复机制。此外，零 chunk provider 流会无限卡死，没有任何错误处理。

4. **TUI 不稳定** — 多个 TUI bug：Tab 键无法切换 agent（Shift+Tab 反而循环），resize 监听器泄漏导致内存警告，`/btw` 命令崩溃。

5. **Provider 配置被忽略** — 超时和 chunkTimeout 设置在 v2 provider 路径中静默失败，用户没有任何 stall 保护。

6. **Go 计划跨模型污染** — 某个模型达到 5 小时限制后错误地阻塞所有其他 Go 模型，即使这些模型使用量为零。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>用户要求我将这篇英文的Pi社区摘要翻译成中文。我需要：
1. 保持所有Markdown结构完全一致：标题、表格、列表、块引用、粗体/斜体、水平线、emoji
2. 保留所有URL、链接目标、代码片段、代码块、数字和日期
3. 保持项目名称、仓库slug、用户名、版本标签、文件路径和API/配置标识符的原始形式
4. 使用自然的技术中文，像中文开发者新闻通讯的语域

让我逐段翻译：

---

# Pi 社区摘要 — 2026-09-19

## 今日要闻

Pi 社区本周聚焦关键性能和兼容性问题。一项影响新版 Claude 模型编辑工具的重要缺陷已修复（#6278），同时团队正在处理 macOS 长时间会话的高 CPU 消耗（#7730）、并行启动时 OAuth 凭证超时延迟（#8928）以及导致 OpenRouter baseUrl 覆盖失效的回归问题（#9725）。与此同时，来自贡献者的新功能正在涌现：Azure Foundry Chat Completions 支持、文件自动补全中的 CJK 标点处理，以及实验性的提示缓存预热系统。

---

## 发布

*过去 24 小时内无新版本。*

---

## 热门问题

| 问题 | 摘要 | 影响 |
|-------|---------|--------|
| [#6278](https://github.com/earendil-works/pi/issues/6278) | **新版 Claude 模型约 20% 的编辑失败** — 编辑工具拒绝 LLM 凭空生成的额外键（`new_text_x`、`type`、`in_file` 等），导致验证错误。*状态：已关闭* | Claude 用户的关键可靠性问题；25 条评论，10 个 👍 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **macOS 长时间会话 CPU 占用高** — CPU 在 600-800MB 内存下波动于 50-110%；似与上下文/会话时长相关。*状态：进行中* | macOS 性能显著下降；16 条评论，10 个 👍 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **并行启动报告"未找到 API 密钥"约 48 秒** — 当 `auth.json` 包含过期的 OAuth 凭证时，尽管有有效的活跃提供商凭证，并行初始化仍会阻塞在身份验证检查上。*状态：进行中* | 误导性错误信息；11 条评论 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | **PI_OFFLINE 禁用所有提供商模型发现** — 标志文档仅说明禁用启动维护工作，但实际静默禁用了整个模型目录网络发现。*状态：进行中* | 未记录的行为在离线模式下破坏远程模型发现；11 条评论 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **全屏滚轮滚动速度慢 3 倍** — 修复了输入框，但滚动感觉迟钝。*状态：已关闭* | 全屏模式 UX 回归；10 条评论，6 个 👍 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search 未索引 pi-packages** — 自 8 月 4 日起，发布的包未出现在 npm search 或 pi.dev 画廊中。*状态：已关闭* | 社区包发现失败；9 条评论 |
| [#8896](https://github.com/earendil-works/pi/issues/8896) | **/export HTML 丢弃 display:false 消息** — 带 `display:false` 标志的自定义消息在导出时被静默排除，尽管它们与会话相关。*状态：进行中* | 导出会话中的数据丢失；8 条评论 |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | **Claude Fable 因思考块导致压缩失败** — 序列化转录思考块，触发 Anthropic 的 `reasoning_extraction` 分类器拒绝。*状态：进行中* | 与 Claude Fable 模型一起使用时压缩不可用；6 条评论，2 个 👍 |
| [#9725](https://github.com/earendil-works/pi/issues/9725) | **OpenRouter baseUrl 覆盖回归** — 提交 4e69b0c 破坏了 OpenRouter 模型的文档化 baseUrl 覆盖方法。*状态：已关闭，无需处理* | 配置回归；6 条评论 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **大型转录每帧重新渲染** — 全屏模式在每次调整大小时重新发送整个转录， saturating 1 CPU 核心。*状态：进行中* | 大型会话的性能杀手；5 条评论 |

---

## 关键 PR 进展

| PR | 摘要 | 状态 |
|----|---------|--------|
| [#9763](https://github.com/earendil-works/pi/pull/9763) | **添加 pi.dev 兼容性检查** — 将已批准的提交分派到内部兼容性工作流并报告稳定的模型目录状态。 | 进行中 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **支持 Azure Foundry Chat Completions** — 实现 #9645；通过 Chat Completions API 添加 DeepSeek V4 Pro 支持（Responses API 已可用）。 | 进行中 |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | **提示缓存预热** — 保持缓存热态的实验性支持，目前仅限于 Anthropic 提供商。 | 进行中 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | **扩展可以追加到会话系统提示** — 允许 `session_start` 处理器贡献仅追加的 `systemPromptAppend`，并具有正确的排序和错误隔离。 | 进行中 |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | **处理文件自动补全中的 CJK 标点** — 将 CJK 标点视为路径补全的边界（例如，中文标点后的 `docs<tab>`）。 | 进行中 |
| [#9762](https://github.com/earendil-works/pi/pull/9762) | **保护 TUI 免受无内容数组的工具结果影响** — 修复扩展工具返回 `{ output: "..." }` 而不是 `{ content: [...] }` 时的崩溃。 | 已关闭 |
| [#9754](https://github.com/earendil-works/pi/pull/9754) | **将同一仓库的工作树视为一个项目** — 解析会话目录符号链接，使从同一仓库的另一个工作树恢复不会提示分叉。 | 已关闭 |
| [#9744](https://github.com/earendil-works/pi/pull/9744) | **添加 /retry 命令** — 允许在连接重试失败后恢复放弃的回合（对本地 LLM 有用）。 | 已关闭 |
| [#9742](https://github.com/earendil-works/pi/pull/9742) | **以小时/分钟/秒显示 shell 时长** — 改进时长格式以支持更长时间运行的命令。 | 已关闭 |
| [#9736](https://github.com/earendil-works/pi/pull/9736) | **无论措辞如何，在终端事件之前重试流截断** — 修复 OpenAI 兼容代理截断流时的重试逻辑。 | 已关闭 |

---

## 热门讨论

### 展示与分享
- [#9747](https://github.com/earendil-works/pi/discussions/9747) — **pi-heed**: 运行时约束强制执行 — 在代理执行前检查副作用工具调用，防止代理忘记"不修改文件"或"不触碰测试"等约束。
- [#9732](https://github.com/earendil-works/pi/discussions/9732) — **pi-conversation-timer** — 轻量级状态栏扩展，显示*实际工作经过时间*而非挂钟时间。
- [#9446](https://github.com/earendil-works/pi/discussions/9446) — **Phosphor**: 并行任务，多个 Claude 账户 — 用于同时处理项目和代理的桌面工作区，使用多个账户并行运行任务。

### 问答 / 创意
- [#1637](https://github.com/earendil-works/pi/discussions/1637) — **基准测试 pi 的测试工具** — 社区成员寻求对 pi 与 codex cli / claude agent sdk 进行基准测试以供团队评估（31 个 👍）。
- [#1527](https://github.com/earendil-works/pi/discussions/1527) — **Windows 上粘贴不工作** — ConPTY 剥离带粘贴标记，导致多行粘贴作为单独行提交。
- [#8729](https://github.com/earendil-works/pi/discussions/8729) — **为什么代理团队喜欢 npm?** — 关于 npm 与版本管理器节点版本冲突的讨论。

---

## 功能请求趋势

1. **增强的模型提供商支持**: Azure Foundry Chat Completions (#9645 → #9714)、DeepSeek V4 Pro、GLM-5.3 模型目录更新
2. **性能优化**: macOS 上的 CPU 使用率降低（#7730）、大型转录渲染（#9549）、O(N²) 工具调用解析修复（#9062）
3. **离线/网络行为澄清**: PI_OFFLINE 范围文档（#8684）、并行启动认证时序（#8928）
4. **平台特定修复**: Windows 剪贴板/ConPTY 问题（#1527）、CJK 文本处理（#9746）、Wayland 剪贴板 stderr 泄漏（#9011）
5. **会话/项目管理**: 工作树感知会话处理（#9753 → #9754）、模糊会话 ID 解析（#9734）

---

## 开发者痛点

1. **模型兼容性问题**: Claude 模型编辑失败（#6278）、思考块破坏压缩（#9652）、目录与提供商变更不匹配（#9616）
2. **配置回归挫败感**: OpenRouter baseUrl 覆盖在 0.85.1 中失效（#9725）、无效 CLI 参数被静默忽略（#9045）
3. **包发现失败**: npm search 未索引 pi-packages（#7885）、画廊缺少重新发布的包（#7987）
4. **规模性能问题**: 长时间会话高 CPU（#7730）、碎片化 delta 二次解析（#9062）、Codex 流上的堆 OOM（#9036）
5. **错误信息模糊**: "未找到 API 密钥"指向错误的提供商（#8928）、空体错误误分类（#8682）、零输出退出无法与失败区分（#9718）

---

*数据来源：GitHub — earendil-works/pi*</think>

# Pi 社区摘要 — 2026-09-19

## 今日要闻

Pi 社区本周聚焦关键性能和兼容性问题。一项影响新版 Claude 模型编辑工具的重要缺陷已修复（#6278），同时团队正在处理 macOS 长时间会话的高 CPU 消耗（#7730）、并行启动时 OAuth 凭证超时延迟（#8928）以及导致 OpenRouter baseUrl 覆盖失效的回归问题（#9725）。与此同时，来自贡献者的新功能正在涌现：Azure Foundry Chat Completions 支持、文件自动补全中的 CJK 标点处理，以及实验性的提示缓存预热系统。

---

## 发布

*过去 24 小时内无新版本。*

---

## 热门问题

| 问题 | 摘要 | 影响 |
|-------|---------|--------|
| [#6278](https://github.com/earendil-works/pi/issues/6278) | **新版 Claude 模型约 20% 的编辑失败** — 编辑工具拒绝 LLM 凭空生成的额外键（`new_text_x`、`type`、`in_file` 等），导致验证错误。*状态：已关闭* | Claude 用户的关键可靠性问题；25 条评论，10 个 👍 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **macOS 长时间会话 CPU 占用高** — CPU 在 600-800MB 内存下波动于 50-110%；似与上下文/会话时长相关。*状态：开放中* | macOS 性能显著下降；16 条评论，10 个 👍 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **并行启动报告"未找到 API 密钥"约 48 秒** — 当 `auth.json` 包含过期的 OAuth 凭证时，尽管有有效的活跃提供商凭证，并行初始化仍会阻塞在身份验证检查上。*状态：开放中，进行中* | 误导性错误信息；11 条评论 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | **PI_OFFLINE 禁用所有提供商模型发现** — 标志文档仅说明禁用启动维护工作，但实际静默禁用了整个模型目录网络发现。*状态：开放中* | 未记录的行为在离线模式下破坏远程模型发现；11 条评论 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **全屏滚轮滚动速度慢 3 倍** — 修复了输入框，但滚动感觉迟钝。*状态：已关闭* | 全屏模式 UX 回归；10 条评论，6 个 👍 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search 未索引 pi-packages** — 自 8 月 4 日起，发布的包未出现在 npm search 或 pi.dev 画廊中。*状态：已关闭* | 社区包发现失败；9 条评论 |
| [#8896](https://github.com/earendil-works/pi/issues/8896) | **/export HTML 丢弃 display:false 消息** — 带 `display:false` 标志的自定义消息在导出时被静默排除，尽管它们与会话相关。*状态：开放中* | 导出会话中的数据丢失；8 条评论 |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | **Claude Fable 因思考块导致压缩失败** — 序列化转录思考块，触发 Anthropic 的 `reasoning_extraction` 分类器拒绝。*状态：开放中* | 与 Claude Fable 模型一起使用时压缩不可用；6 条评论，2 个 👍 |
| [#9725](https://github.com/earendil-works/pi/issues/9725) | **OpenRouter baseUrl 覆盖回归** — 提交 4e69b0c 破坏了 OpenRouter 模型的文档化 baseUrl 覆盖方法。*状态：已关闭，无需处理* | 配置回归；6 条评论 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | **大型转录每帧重新渲染** — 全屏模式在每次调整大小时重新发送整个转录，耗尽 1 个 CPU 核心。*状态：开放中* | 大型会话的性能杀手；5 条评论 |

---

## 关键 PR 进展

| PR | 摘要 | 状态 |
|----|---------|--------|
| [#9763](https://github.com/earendil-works/pi/pull/9763) | **添加 pi.dev 兼容性检查** — 将已批准的提交分派到内部兼容性工作流并报告稳定的模型目录状态。 | 开放中 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **支持 Azure Foundry Chat Completions** — 实现 #9645；通过 Chat Completions API 添加 DeepSeek V4 Pro 支持（Responses API 已可用）。 | 开放中 |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | **提示缓存预热** — 保持缓存热态的实验性支持，目前仅限于 Anthropic 提供商。 | 开放中 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | **扩展可以追加到会话系统提示** — 允许 `session_start` 处理器贡献仅追加的 `systemPromptAppend`，并具有正确的排序和错误隔离。 | 开放中 |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | **处理文件自动补全中的 CJK 标点** — 将 CJK 标点视为路径补全的边界（例如，中文标点后的 `docs<tab>`）。 | 开放中 |
| [#9762](https://github.com/earendil-works/pi/pull/9762) | **保护 TUI 免受无内容数组的工具结果影响** — 修复扩展工具返回 `{ output: "..." }` 而不是 `{ content: [...] }` 时的崩溃。 | 已关闭 |
| [#9754](https://github.com/earendil-works/pi/pull/9754) | **将同一仓库的工作树视为一个项目** — 解析会话目录符号链接，使从同一仓库的另一个工作树恢复不会提示分叉。 | 已关闭 |
| [#9744](https://github.com/earendil-works/pi/pull/9744) | **添加 /retry 命令** — 允许在连接重试失败后恢复放弃的回合（对本地 LLM 有用）。 | 已关闭 |
| [#9742](https://github.com/earendil-works/pi/pull/9742) | **以小时/分钟/秒显示 shell 时长** — 改进时长格式以支持更长时间运行的命令。 | 已关闭 |
| [#9736](https://github.com/earendil-works/pi/pull/9736) | **无论措辞如何，在终端事件之前重试流截断** — 修复 OpenAI 兼容代理截断流时的重试逻辑。 | 已关闭 |

---

## 热门讨论

### 展示与分享
- [#9747](https://github.com/earendil-works/pi/discussions/9747) — **pi-heed**: 运行时约束强制执行 — 在代理执行前检查副作用工具调用，防止代理忘记"不修改文件"或"不触碰测试"等约束。
- [#9732](https://github.com/earendil-works/pi/discussions/9732) — **pi-conversation-timer** — 轻量级状态栏扩展，显示*实际工作经过时间*而非挂钟时间。
- [#9446](https://github.com/earendil-works/pi/discussions/9446) — **Phosphor**: 并行任务，多个 Claude 账户 — 用于同时处理项目和代理的桌面工作区，使用多个账户并行运行任务。

### 问答 / 创意
- [#1637](https://github.com/earendil-works/pi/discussions/1637) — **基准测试 pi 的测试工具** — 社区成员寻求对 pi 与 codex cli / claude agent sdk 进行基准测试以供团队评估（31 个 👍）。
- [#1527](https://github.com/earendil-works/pi/discussions/1527) — **Windows 上粘贴不工作** — ConPTY 剥离带粘贴标记，导致多行粘贴作为单独行提交。
- [#8729](https://github.com/earendil-works/pi/discussions/8729) — **为什么代理团队喜欢 npm?** — 关于 npm 与版本管理器节点版本冲突的讨论。

---

## 功能请求趋势

1. **增强的模型提供商支持**: Azure Foundry Chat Completions (#9645 → #9714)、DeepSeek V4 Pro、GLM-5.3 模型目录更新
2. **性能优化**: macOS 上的 CPU 使用率降低（#7730）、大型转录渲染（#9549）、O(N²) 工具调用解析修复（#9062）
3. **离线/网络行为澄清**: PI_OFFLINE 范围文档（#8684）、并行启动认证时序（#8928）
4. **平台特定修复**: Windows 剪贴板/ConPTY 问题（#1527）、CJK 文本处理（#9746）、Wayland 剪贴板 stderr 泄漏（#9011）
5. **会话/项目管理**: 工作树感知会话处理（#9753 → #9754）、模糊会话 ID 解析（#9734）

---

## 开发者痛点

1. **模型兼容性问题**: Claude 模型编辑失败（#6278）、思考块破坏压缩（#9652）、目录与提供商变更不匹配（#9616）
2. **配置回归挫败感**: OpenRouter baseUrl 覆盖在 0.85.1 中失效（#9725）、无效 CLI 参数被静默忽略（#9045）
3. **包发现失败**: npm search 未索引 pi-packages（#7885）、画廊缺少重新发布的包（#7987）
4. **规模性能问题**: 长时间会话高 CPU（#7730）、碎片化 delta 二次解析（#9062）、Codex 流上的堆 OOM（#9036）
5. **错误信息模糊**: "未找到 API 密钥"指向错误的提供商（#8928）、空体错误误分类（#8682）、零输出退出无法与失败区分（#9718）

---

*数据来源：GitHub — earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this Qwen Code Community Digest into Simplified Chinese. Let me carefully translate while preserving:

1. All Markdown structure (headings, tables, lists, blockquotes, bold, horizontal rules, emoji)
2. All URLs, numbers, dates, version tags
3. Issue/PR references (#12345)
4. Project names, usernames, file paths (keep as-is)
5. Technical terminology in natural Chinese technical register

Let me translate section by section:

---

# Qwen Code 社区简报 — 2026-09-19

## 今日要闻

v0.24.0/v0.24.1 发布周期带来了 Desktop PTY 打包和 CLI 稳定性的关键修复。多个高优先级 bug 影响核心工作流：v0.24.0 中的 `/cd` 命令回归、后台任务导致的 TUI 崩溃，以及 LSP 对非 ASCII 响应的静默失败。随着上下文窗口不断增长，项目正积极解决令牌治理和会话管理方面的性能问题。

---

## 版本发布

| 版本 | 日期 | 变更 |
|------|------|------|
| **v0.24.1-preview.0** | 2026-09-18 | ACP 边界验收文档；修复导出渲染器时序的 CI 问题 |
| **v0.24.0-nightly.20260918** | 2026-09-18 | 同上 |

两个版本都涉及 CI 流水线的改进和 ACP（Agentic Computing Process，智能计算过程）边界相关的文档更新。

---

## 热门 Issue

### 1. [Web Terminal 显示"[Error: PTY not available]" — @lydell/node-pty 已声明但未打包，且 macOS 代码签名阻止本地安装的预构建](https://github.com/QwenLM/qwen-code/issues/11872) — P1

**为何重要：** 由于缺少打包的原生模块和代码签名与预构建二进制文件的冲突，Web Terminal 面板无法在 macOS 上创建 PTY 会话。

这直接影响了核心的 Web Shell 功能。
**社区反馈：** 10 条评论，正在积极调试打包流程。

### 2. [精简 Goal 运行时：根据当前轮次的证据判断完成状态，移除证据目录和检查点](https://github.com/QwenLM/qwen-code/issues/12053) — P2

**为何重要：** 性能优化提案，旨在消除 Goal 会话中不必要的状态追踪。早期实验表明，单轮完成在约 100 次工具调用内即可实现，使传统的检查点机制成为冗余。
**社区反馈：** 8 条评论，标记为 `need-discussion`。

### 3. [bug：v0.24.0 更新后无法使用 /cd 切换目录](https://github.com/QwenLM/qwen-code/issues/12224) — P1

**为何重要：** 关键回归问题，即使没有活动会话也阻止基本的 CLI 操作。用户无法切换目录。
**社区反馈：** 5 条评论，在 v0.24.0 发布后 24 小时内报告。

### 4. [会话回顾（离开摘要）始终用英语生成——无法匹配对话语言](https://github.com/QwenLM/qwen-code/issues/11847) — P3

**为何重要：** 国际用户返回会话时丢失上下文；回顾内容无论对话使用什么语言，都被硬编码为英语。
**社区反馈：** 5 条评论，请求语言感知的提示词。

### 5. [core/cli：api-history 投影后 provenance 未保留，导致两种通知形状仍被错误分类](https://github.com/QwenLM/qwen-code/issues/12042) — P2

**为何重要：** 会话历史投影中的 bug 导致通知项被错误分类，影响分析和会话恢复。
**社区反馈：** 5 条评论。

### 6. [TUI 在注册后台任务几秒后因未捕获的 React error #185（最大更新深度超出）崩溃](https://github.com/QwenLM/qwen-code/issues/11783) — P1

**为何重要：** 注册后台 shell 任务时的关键 UI 崩溃，使 TUI 无法用于长时间运行的操作。
**社区反馈：** 5 条评论，React 19.2.0 生命周期问题。

### 7. [追踪(core)：非对话上下文的令牌治理](https://github.com/QwenLM/qwen-code/issues/12028) — P2

**为何重要：** 系统提示词、工具 schema、上下文文件和技能列表在每次请求时都会被发送，在大上下文模型中可能超过实际对话令牌的数量。高优先级的性能追踪 issue。
**社区反馈：** 5 条评论，标记为 `roadmap/context-performance`。

### 8. [LSP：非 ASCII 响应被静默丢弃（Content-Length 按字节与 UTF-16 字符串长度比较）](https://github.com/QwenLM/qwen-code/issues/12206) — P1

**为何重要：** LSP 工具响应中的非 ASCII 内容存在静默数据丢失。包含中文标题的文档返回空结果。
**社区反馈：** 4 条评论。

### 9. [MCP OAuth 从 WWW-Authenticate 发现中丢弃 registrationUrl，破坏 Atlassian 远程 MCP](https://github.com/QwenLM/qwen-code/issues/12165) — P2

**为何重要：** Atlassian 远程 MCP 服务器的 OAuth 认证失败，阻止了与 Jira/Confluence MCP 工具的集成。
**社区反馈：** 4 条评论。

### 10. [Web Shell 会话恢复横幅误报：正常完成的轮次也会显示](https://github.com/QwenLM/qwen-code/issues/11995) — P2（已关闭）

**为何重要：** 虚假的"会话中断"警告让用户困惑；即使轮次正常完成也会显示恢复横幅。
**社区反馈：** 4 条评论，近期已关闭。

---

## 关键 PR 进展

### 1. [#12225 — fix(desktop): 将 node-pty 预构建打包到运行时中](https://github.com/QwenLM/qwen-code/pull/12225)
**修复 #11872。** 在 `prepare-runtime.js` 组装阶段将 @lydell/node-pty 包装器和预构建文件暂存到 Desktop 运行时的 `lib/node_modules` 中。包含 PTY 创建 round-trip 的冒烟测试。

### 2. [#11854 — feat: 添加混合代码模式](https://github.com QwenLM/qwen-code/pull/11854)
新增 Codex 对齐的 `tools.mode` 枚举，支持 `direct`、`code_mode` 和 `code_mode_only`。`code_mode` 在保持普通工具可调用的同时，暴露一个隔离的 `exec` JavaScript 工具。

### 3. [#12085 — feat(web-shell: 添加远程工作区恢复流程](https://github.com/QwenLM/qwen-code/pull/12085)
为独立 Web Shell 添加类似 Codex 的远程连接功能。设置 > 连接 管理经验证的守护进程来源和 bearer token 认证。

### 4. [#12156 — fix(core): 限制大扫描时 gitignore 匹配器的内存占用](https://github.com/QwenLM/qwen-code/pull/12156)
防止大型文件发现扫描为每个目录保留单独的已编译 gitignore 规则副本——显著的内存优化。

### 5. [#10410 — feat(core): 为延迟工具保留提示词缓存](https://github.com/QwenLM/qwen-code/pull/10410)
用稳定的两步桥接替换延迟工具的 schema 揭示：使用 `tool_search`（审查 schema）和 `tool_call`（验证并调用）。

### 6. [#12198 — fix(cli): 未决定的工作区需要显式信任](https://github.com/QwenLM/qwen-code/pull/12198)
启用文件夹信任后，未受信任的工作区现在在 CLI 和守护进程快速启动中都启动为未受信任状态，禁用项目设置/钩子直至授予信任。

### 7. [#11859 — ci(pnpm): 统一使用 pnpm 安装，移除 package-lock.json](https://github.com/QwenLM/qwen-code/pull/11859)
将 CI 和发布切换到固定版本的 pnpm，移除根目录的 `package-lock.json`。确保 CI 测试发布中完全相同的依赖图。

### 8. [#11237 — perf(web-shell): 派生会话工作流投影一次并在各 surface 间共享](https://github.com/QwenLM/qwen-code/pull/11237)
每个渲染周期都会缓存会话工作流投影并在所有 surface 间共享。修复 #10865。

### 9. [#12222 — feat(openai): 添加兼容性 provider，注入空参数](https://github.com/QwenLM/qwen-code/pull/12222)
向无参数工具发送时，始终发出 `"parameters": { "type": "object" }"`（发送给严格的 OpenAI 兼容服务器，尤其是 TabbyAPI 时）。

### 10. [#12115 — fix(installer): 独立 Linux 归档的 glibc 前置检查](https://github.com/QwenLM/qwen-code/pull/12115)
为独立 Linux 归档添加 glibc 前置检查，在不兼容发行版（如 CentOS 7）上安装前失败，而非运行时失败。

---

## 功能请求趋势

基于 issue 分析，最热门的方向包括：

1. **上下文优化** — 非对话令牌的治理、提示词缓存保护、gitignore 匹配器效率
2. **增强的会话恢复** — 更好的锁状态诊断、只读锁目录清单、不正常关闭的文档
3. **安全/信任模型** — 项目级权限规则覆盖用户级规则、显式工作区信任要求
4. **扩展系统** — 目录部署管理的扩展加载
5. **MCP 改进** — OAuth 修复、工作区发现配置

---

## 开发者痛点

1. **macOS Desktop PTY 打包** — 原生模块预构建被代码签名阻止；正在修复中的已知问题（#12225）
2. **v0.24.0 回归** — 最新版本后 `/cd` 命令完全失效
3. **静默失败** — LSP 非 ASCII 响应丢弃、MCP OAuth 缺少 `registrationUrl`
4. **TUI 稳定性** — 后台任务注册时的 React error #185 崩溃
5. **会话锁争用** — 不正常关闭后的永久 503 错误，错误信息不清晰
6. **CI 可靠性** — macOS E2E 分片 flaky，需要重试逻辑

---

*简报由 GitHub 数据生成 — 2026-09-19*

---

The translation maintains the original structure while using natural Chinese technical terminology like "简报" for digest, "Issue" and "PR" kept in English as they're standard in Chinese developer communities, and proper technical phrasing like "轮次" for "turn", "原生模块" for "native modules", and "提示词缓存" for "prompt cache".

Now I'll output the complete translation.</think>

# Qwen Code 社区简报 — 2026-09-19

## 今日要闻

v0.24.0/v0.24.1 发布周期带来了 Desktop PTY 打包和 CLI 稳定性的关键修复。多个高优先级 bug 影响核心工作流：v0.24.0 中的 `/cd` 命令回归、后台任务导致的 TUI 崩溃，以及 LSP 对非 ASCII 响应的静默失败。随着上下文窗口不断增长，项目正积极解决令牌治理和会话管理方面的性能问题。

---

## 版本发布

| 版本 | 日期 | 变更 |
|------|------|------|
| **v0.24.1-preview.0** | 2026-09-18 | ACP 边界验收文档；修复导出渲染器时序的 CI 问题 |
| **v0.24.0-nightly.20260918** | 2026-09-18 | 同上 |

两个版本都涉及 CI 流水线的改进和 ACP（Agentic Computing Process，智能计算过程）边界相关的文档更新。

---

## 热门 Issue

### 1. [Web Terminal 显示"[Error: PTY not available]" — @lydell/node-pty 已声明但未打包，且 macOS 代码签名阻止本地安装的预构建](https://github.com/QwenLM/qwen-code/issues/11872) — P1

**为何重要：** 由于缺少打包的原生模块和代码签名与预构建二进制文件的冲突，Web Terminal 面板无法在 macOS 上创建 PTY 会话。这直接影响了核心的 Web Shell 功能。
**社区反馈：** 10 条评论，正在积极调试打包流程。

### 2. [精简 Goal 运行时：根据当前轮次的证据判断完成状态，移除证据目录和检查点](https://github.com/QwenLM/qwen-code/issues/12053) — P2

**为何重要：** 性能优化提案，旨在消除 Goal 会话中不必要的状态追踪。早期实验表明，单轮完成在约 100 次工具调用内即可实现，使传统的检查点机制成为冗余。
**社区反馈：** 8 条评论，标记为 `need-discussion`。

### 3. [bug：v0.24.0 更新后无法使用 /cd 切换目录](https://github.com/QwenLM/qwen-code/issues/12224) — P1

**为何重要：** 关键回归问题，即使没有活动会话也阻止基本的 CLI 操作。用户无法切换目录。
**社区反馈：** 5 条评论，在 v0.24.0 发布后 24 小时内报告。

### 4. [会话回顾（离开摘要）始终用英语生成——无法匹配对话语言](https://github.com/QwenLM/qwen-code/issues/11847) — P3

**为何重要：** 国际用户返回会话时丢失上下文；回顾内容无论对话使用什么语言，都被硬编码为英语。
**社区反馈：** 5 条评论，请求语言感知的提示词。

### 5. [core/cli：api-history 投影后 provenance 未保留，导致两种通知形状仍被错误分类](https://github.com/QwenLM/qwen-code/issues/12042) — P2

**为何重要：** 会话历史投影中的 bug 导致通知项被错误分类，影响分析和会话恢复。
**社区反馈：** 5 条评论。

### 6. [TUI 在注册后台任务几秒后因未捕获的 React error #185（最大更新深度超出）崩溃](https://github.com/QwenLM/qwen-code/issues/11783) — P1

**为何重要：** 注册后台 shell 任务时的关键 UI 崩溃，使 TUI 无法用于长时间运行的操作。
**社区反馈：** 5 条评论，React 19.2.0 生命周期问题。

### 7. [追踪(core)：非对话上下文的令牌治理](https://github.com/QwenLM/qwen-code/issues/12028) — P2

**为何重要：** 系统提示词、工具 schema、上下文文件和技能列表在每次请求时都会被发送，在大上下文模型中可能超过实际对话令牌的数量。高优先级的性能追踪 issue。
**社区反馈：** 5 条评论，标记为 `roadmap/context-performance`。

### 8. [LSP：非 ASCII 响应被静默丢弃（Content-Length 按字节与 UTF-16 字符串长度比较）](https://github.com/QwenLM/qwen-code/issues/12206) — P1

**为何重要：** LSP 工具响应中的非 ASCII 内容存在静默数据丢失。包含中文标题的文档返回空结果。
**社区反馈：** 4 条评论。

### 9. [MCP OAuth 从 WWW-Authenticate 发现中丢弃 registrationUrl，破坏 Atlassian 远程 MCP](https://github.com/QwenLM/qwen-code/issues/12165) — P2

**为何重要：** Atlassian 远程 MCP 服务器的 OAuth 认证失败，阻止了与 Jira/Confluence MCP 工具的集成。
**社区反馈：** 4 条评论。

### 10. [Web Shell 会话恢复横幅误报：正常完成的轮次也会显示](https://github.com/QwenLM/qwen-code/issues/11995) — P2（已关闭）

**为何重要：** 虚假的"会话中断"警告让用户困惑；即使轮次正常完成也会显示恢复横幅。
**社区反馈：** 4 条评论，近期已关闭。

---

## 关键 PR 进展

### 1. [#12225 — fix(desktop): 将 node-pty 预构建打包到运行时中](https://github.com/QwenLM/qwen-code/pull/12225)
**修复 #11872。** 在 `prepare-runtime.js` 组装阶段将 @lydell/node-pty 包装器和预构建文件暂存到 Desktop 运行时的 `lib/node_modules` 中。包含 PTY 创建 round-trip 的冒烟测试。

### 2. [#11854 — feat: 添加混合代码模式](https://github.com/QwenLM/qwen-code/pull/11854)
新增 Codex 对齐的 `tools.mode` 枚举，支持 `direct`、`code_mode` 和 `code_mode_only`。`code_mode` 在保持普通工具可调用的同时，暴露一个隔离的 `exec` JavaScript 工具。

### 3. [#12085 — feat(web-shell): 添加远程工作区恢复流程](https://github.com/QwenLM/qwen-code/pull/12085)
为独立 Web Shell 添加类似 Codex 的远程连接功能。设置 > 连接 管理经验证的守护进程来源和 bearer token 认证。

### 4. [#12156 — fix(core): 限制大扫描时 gitignore 匹配器的内存占用](https://github.com/QwenLM/qwen-code/pull/12156)
防止大型文件发现扫描为每个目录保留单独的已编译 gitignore 规则副本——显著的内存优化。

### 5. [#10410 — feat(core): 为延迟工具保留提示词缓存](https://github.com/QwenLM/qwen-code/pull/10410)
用稳定的两步桥接替换延迟工具的 schema 揭示：使用 `tool_search`（审查 schema）和 `tool_call`（验证并调用）。

### 6. [#12198 — fix(cli): 未决定的工作区需要显式信任](https://github.com/QwenLM/qwen-code/pull/12198)
启用文件夹信任后，未受信任的工作区现在在 CLI 和守护进程快速启动中都启动为未受信任状态，禁用项目设置/钩子直至授予信任。

### 7. [#11859 — ci(pnpm): 统一使用 pnpm 安装，移除 package-lock.json](https://github.com/QwenLM/qwen-code/pull/11859)
将 CI 和发布切换到固定版本的 pnpm，移除根目录的 `package-lock.json`。确保 CI 测试发布中完全相同的依赖图。

### 8. [#11237 — perf(web-shell): 派生会话工作流投影一次并在各 surface 间共享](https://github.com/QwenLM/qwen-code/pull/11237)
每个渲染周期都会缓存会话工作流投影并在所有 surface 间共享。修复 #10865。

### 9. [#12222 — feat(openai): 添加兼容性 provider，注入空参数](https://github.com/QwenLM/qwen-code/pull/12222)
向无参数工具发送时，始终发出 `"parameters": { "type": "object" }"`（发送给严格的 OpenAI 兼容服务器，尤其是 TabbyAPI 时）。

### 10. [#12115 — fix(installer): 独立 Linux 归档的 glibc 前置检查](https://github.com/QwenLM/qwen-code/pull/12115)
为独立 Linux 归档添加 glibc 前置检查，在不兼容发行版（如 CentOS 7）上安装前失败，而非运行时失败。

---

## 功能请求趋势

基于 issue 分析，最热门的方向包括：

1. **上下文优化** — 非对话令牌的治理、提示词缓存保护、gitignore 匹配器效率
2. **增强的会话恢复** — 更好的锁状态诊断、只读锁目录清单、不正常关闭的文档
3. **安全/信任模型** — 项目级权限规则覆盖用户级规则、显式工作区信任要求
4. **扩展系统** — 目录部署管理的扩展加载
5. **MCP 改进** — OAuth 修复、工作区发现配置

---

## 开发者痛点

1. **macOS Desktop PTY 打包** — 原生模块预构建被代码签名阻止；正在修复中的已知问题（#12225）
2. **v0.24.0 回归** — 最新版本后 `/cd` 命令完全失效
3. **静默失败** — LSP 非 ASCII 响应丢弃、MCP OAuth 缺少 `registrationUrl`
4. **TUI 稳定性** — 后台任务注册时的 React error #185 崩溃
5. **会话锁争用** — 不正常关闭后的永久 503 错误，错误信息不清晰
6. **CI 可靠性** — macOS E2E 分片 flaky，需要重试逻辑

---

*简报由 GitHub 数据生成 — 2026-09-19*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*