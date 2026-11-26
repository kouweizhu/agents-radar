# AI CLI 工具社区动态日报 2026-11-26

> 生成时间: 2026-11-26 04:19 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me translate it carefully, following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, code, numbers, dates, project names, version tags, etc. as-is
4. Use natural technical Chinese register

Let me translate section by section:

**Title:**
AI CLI Tools Ecosystem — Cross-Tool Comparison Report
AI CLI 工具生态——跨工具对比报告

**Date and period:**
Date: 2026-11-26
日期：2026-11-26
Period: 24-hour window
周期：24 小时窗口

**Section 1: Ecosystem Overview**
The AI CLI tools landscape is in an active consolidation phase, with all major providers (Anthropic, OpenAI, Google, GitHub, and emerging players) racing to add enterprise-grade features—multi-account management, session durability, and cross-platform stability. Security vulnerabilities are receiving heightened attention across the board, with Gemini CLI merging SSRF prevention and OpenCode patching a critical Windows shell-escaping flaw. Platform-specific regressions (particularly on Windows) dominate issue trackers, reflecting the complexity of supporting TUI interactions across Windows Terminal, PowerShell, cmd.exe, Kitty, Ghostty, and WSL environments. The community is increasingly vocal about token efficiency, with cache warming, AST-aware file reading, and output truncation emerging as cross-cutting concerns.

AI CLI 工具领域正处于活跃的整合期，各大厂商（Anthropic、OpenAI、Google、GitHub 以及新兴势力）竞相添加企业级特性——多账户管理、会话持久化和跨平台稳定性。安全漏洞已引起全生态的高度关注，Gemini CLI 合并了 SSRF 防护，OpenCode 修补了一个严重的 Windows shell 转义漏洞。

Platform-specific regressions—particularly on Windows—are dominating issue trackers, highlighting the complexity of maintaining TUI interactions across diverse environments like Windows Terminal, PowerShell, cmd.exe, Kitty, Ghostty, and WSL. Community members are increasingly raising concerns about token efficiency, with cache warming, AST-aware file reading, and output truncation emerging as shared pain points across the ecosystem.

**Section 2: Activity Comparison**

Table translation:
- Repository → 仓库
- Issues → Issues
- PRs → PRs (keep as-is)
- Discussions → 讨论区
- Releases (24h) → 发布（24h）

Observations:
- Most active PR engines → PR 最活跃的引擎
- Gemini CLI (30 PRs) and OpenAI Codex (20 PRs) lead in code throughput, indicating rapid iteration cycles. → Gemini CLI（30 个 PR）和 OpenAI Codex（20 个 PR）在代码吞吐量上领先，表明迭代周期快速。

Copilot CLI saw the most releases in 24 hours (3 patches), suggesting a focused stabilization effort. Community engagement varies—OpenAI Codex and Pi maintain active Discussions alongside Issues, while others rely primarily on Issues. Claude Code, Gemini CLI, OpenCode, and Pi all report around 50 issues, indicating comparable community engagement across these tools despite their different maturity levels.

Several cross-cutting requirements are emerging: multi-account and multi-profile management is sought by Claude Code (#18435 with 1,112 👍) and Copilot CLI; session persistence and recovery features appear in Gemini CLI's OSC 7577 implementation, Pi's session resume, Claude Code's cowork functionality, and OpenCode's archive/unarchive capabilities; cross-platform terminal reliability is a priority for OpenAI Codex (addressing Linux middle-click and Kitty/Ghostty support), Pi (Windows mouse reporting), Qwen Code (ARM64 CI), and OpenCode (Windows shell escaping); MCP ecosystem expansion is underway in Gemini CLI (OAuth binding, tool approvals, elicitation fields) and other tools. 插件/扩展 API | Copilot CLI（JSON Schema 扩展清单）、Claude Code（技能、子代理）、OpenCode（脚本自定义工具） | 发现机制、权限模型、市场可靠性 |
| **安全加固** | Gemini CLI（SSRF、OAuth 绑定遥测劫持）、OpenCode（Windows 路径穿越） | 输入校验、凭证隔离、可信工作区控制 |
| **ACP（代理通信协议）** | Gemini CLI（会话管理、并行工具）、OpenAI Codex（Fusion 层配置）、Pi（持久化执行） | 跨代理协调、会话生命周期、人机交互审批 |
| **Windows 优先稳定性** | OpenAI Codex（启动挂起、ARM64）、

Qwen Code（热重载）、Copilot CLI（PowerShell）、Pi（终端清理） | PowerShell、cmd.exe、WSL 行为一致性 |
| **国际化** | Qwen Code（俄语 i18n）、Claude Code（日语漂移）、OpenCode（WCAG 2.2 主题） | 语言环境感知模型行为、UI 无障碍、复数处理 |

### 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User | Technical Focus |
|------|------------------------|-------------|-----------------|
| **Claude Code** | Cowork 协作会话、多账户需

求 | 专业开发者、团队 | 代理委托、上下文管理、桌面集成 |
| **OpenAI Codex** | ACP 模式、Fusion 层、Rust SDK alpha | 企业 + CLI 高级用户 | 跨平台 TUI 一致性、MCP stdio 韧性、斜杠命令生态 |
| **Gemini CLI** | ACP 优先架构、Pi Durable 用于客户端执行 | 高级代理、外部编排器 | 安全加固（SSRF/OAuth）、并行工具批处理、会话生命周期 |
| **Copilot CLI** | 基于 JSON Schema 验证的扩展市场 | 插件开发者、IDE 优先团队 | 扩展加载、会话卡顿恢复、VS Code 集成 |
| **Pi** | 决策模型（`models.classify()`）、优雅终端关闭 | 性能导向开发者、本地推理用户 | 缓存预热智能、推理力度处理、OSC 协议 |
| **Qwen Code** | Qwen4-Max 订阅（1M 上下文）、快速预览节奏 | 中国市场开发者、成本敏感用户 | 订阅 UX、信用管理、ARM64 CI 可靠性 |

**关键技

术分歧：**

不同工具在协议采用上存在明显差异。Gemini CLI 和 OpenAI Codex 侧重于 ACP/代理间协议的开发，而 Claude Code 和 Copilot CLI 则专注于 IDE/桌面集成，Pi 则开创了决策模型集成的新方向。平台优先级也各不相同——OpenAI Codex 和 Qwen Code 在 Windows 稳定性上遇到困难，Gemini CLI 和 Claude Code 面临 Linux TUI 边缘情况，Copilot CLI 正在解决 PowerShell ConstrainedLanguage 模式的限制。版本策略上，GitHub Copilot CLI 采用频繁的小版本更新，Claude Code 和 Gemini CLI 则保持较长的发布周期。

Qwen Code 选择了预览版本号的方式。

**5. Community Momentum & Maturity**

### 高活跃度社区

**Gemini CLI** 在 24 小时内合并了 30 个 PR，展现出卓越的代码吞吐能力。安全导向的开发模式（多个 SSRF/OAuth 修复）反映了成熟的 DevOps 实践。Pi Durable 功能集的设计则体现了雄心勃勃的长期架构规划。

**OpenAI Codex** 同样在 24 小时内合并了 20 个 PR，并维持活跃的讨论区（Awesome Codex CLI 列表获得 15 条评论），显示出健康的社区贡献生态。

Windows 回归测试（#62943）引发了 34 条评论，表明用户对可靠性的高度关注。**Pi** 的 25 个 PR 中既有功能开发（决策模型、OSC 7577 会话恢复），也有缺陷修复（Anthropic SSE CRLF 解析器），体现了均衡的迭代策略。关于隐私（DO_NOT_TRACK）和本地推理的活跃讨论反映出社区的深思熟虑。**Claude Code** 的社区驱动型开源努力（#41518、#41447）表明用户高度投入，尽管官方尚未承诺开源。**Qwen Code** 的 P1 安全披露和快速预览发布（v1.0.0-preview.2）表明开发活跃，但 CI 可靠性问题（#18252 有 73+ 个子问题）暴露了规模化的挑战。**OpenCode** 的安全补丁节奏和会话归档功能显示了企业级应用的成熟度，WCAG 2.2 无障碍工作则表明了产品成熟度。

**Copilot CLI** 的三次快速补丁（v1.0.117-0/1/2）表明正在进行稳定化冲刺，插件生态系统的增长（18 个技能）显示出稳定的采用趋势。Windows 已成为新的痛点领域，每个工具都在 Windows 稳定性上挣扎——shell 转义、终端报告、热重载和启动挂起等问题出现在所有社区中。

在 Windows CI 基础设施和 PowerShell/cmd.exe 兼容性测试上的投入已成为基本要求。MCP 协议碎片化是真实存在的问题，Gemini CLI、Copilot CLI 和 Claude Code 都报告了 MCP 版本协商问题，工具作者应该实现版本检测和优雅降级，而不是假设规范合规。安全已不再是可选项，Gemini CLI 在单个周期内合并了 SSRF 防护、OAuth 绑定和遥测劫持修复，OpenCode 的 Windows shell 转义漏洞表明需要更严格的安全实践。

缓存智能是竞争优势，Claude Code、Pi 都通过不同方式处理缓存预热，允许用户配置缓存范围、跨模型切换保留缓存并提供缓存状态可见性的工具将赢得开发者信任。ACP/代理间协议正在汇聚，多个工具独立开发了会话管理、并行工具执行和人机交互审批模式，标准化协议的出现预示着互操作性的前景。对于决策者，企业功能往往落后于社区需求，多账户管理等功能需要优先考虑。

CI 可靠性反映了代码质量，Qwen Code 的 73+ 个 E2E 测试失败和 Gemini CLI 的 doom-loop 检测回归表明快速迭代可能损害可靠性。本地推理正在获得关注，Pi 专注于 Ollama 输出上限、本地决策模型和本地推理支持，表明对离线 AI 工具的需求增长，这可能重塑竞争格局。WCAG 2.2 无障碍工作正成为要求，而非可选项。国际化支持存在差距，Claude Code 的日语漂移和 Qwen Code 的俄语复数修复表明多语言支持仍然不够均衡。

全球团队在部署前应验证语言准确性。

报告数据来源涵盖 GitHub 上各主要 AI CLI 工具的社区动态，包括 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code，生成于 2026-11-26。
</think>


# AI CLI 工具生态——跨工具对比报告

**日期：** 2026-11-26
**周期：** 24 小时窗口

---

## 1. 生态概览

AI CLI 工具领域正处于活跃的整合期，各大厂商（Anthropic、OpenAI、Google、GitHub 以及新兴势力）竞相添加企业级特性——多账户管理、会话持久化和跨平台稳定性。安全漏洞已引起全生态的高度关注，Gemini CLI 合并了 SSRF 防护，OpenCode 修补了一个严重的 Windows shell 转义漏洞。平台特定的回归问题（尤其是 Windows）占据了 issue  trackers 的主导地位，反映出跨 Windows Terminal、PowerShell、cmd.exe、Kitty、Ghostty 和 WSL 环境支持 TUI 交互的复杂性。社区对 token 效率的关注度日益上升，缓存预热、AST 感知的文件读取和输出截断正成为跨工具的共同诉求。

---

## 2. 活动量对比

| 工具 | 仓库 | Issues | PRs | 讨论区 | 发布（24h） |
|------|------|--------|-----|--------|-------------|
| **Claude Code** | anthropics/claude-code | 50 | 2 | N/A | 0 |
| **OpenAI Codex** | openai/codex | ~40 | 20 | 3 个分类 | 1 (rust-v0.174.0-alpha.6) |
| **Gemini CLI** | google-gemini/gemini-cli | 50 | 30 | N/A | 0 |
| **GitHub Copilot CLI** | github/copilot-cli | ~40 | N/A | N/A | 3 (v1.0.117-0/1/2) |
| **OpenCode** | anomalyco/opencode | ~50 | ~10 | N/A | 1 (v2.4.2) |
| **Pi** | earendil-works/pi | 50 | 25 | 3 | 1 (v1.6.1) |
| **Qwen Code** | QwenLM/qwen-code | ~30 | ~10 | N/A | 1 (v1.0.0-preview.2) |

**观察：**

- **PR 最活跃的引擎：** Gemini CLI（30 个 PR）和 OpenAI Codex（20 个 PR）在代码吞吐量上领先，表明迭代周期快速。
- **发布频率：** GitHub Copilot CLI 在 24 小时内发布了最多的版本（3 个补丁），反映出快速的稳定化冲刺。
- **社区渠道：** OpenAI Codex 和 Pi 在 Issues 之外还维护活跃的讨论区；其他工具主要依赖 Issues。
- **Issue 量级相当：** Claude Code、Gemini CLI、OpenCode 和 Pi 都报告了约 50 个 issues，表明尽管成熟度不同，社区参与度相当。

---

## 3. 共同特性方向

以下需求出现在多个工具社区中，代表了生态系统的共同诉求：

| 特性方向 | 受影响工具 | 具体需求 |
|-------------------|----------------|----------------|
| **多账户 / 多配置管理** | Claude Code (#18435, 1,112 👍)、Copilot CLI | 原生配置切换、桌面应用内的账户隔离 |
| **会话持久化与恢复** | Gemini CLI (OSC 7577)、Pi (会话恢复)、Claude Code (cowork)、OpenCode (归档/解档) | 优雅关闭、跨重启连续性、会话归档 |
| **跨平台终端可靠性** | OpenAI Codex (Linux 中键、Kitty/Ghostty)、Pi (Windows 鼠标上报)、Qwen Code (ARM64 CI)、OpenCode (Windows shell 转义) | 跨终端一致的键盘/鼠标行为 |
| **MCP 生态扩展** | Gemini CLI (OAuth 绑定、工具审批、征询字段)、Claude Code (插件 API 缓存预热)、Copilot CLI (MCP 兼容性) | 多版本协议支持、凭证管理、权限粒度 |
| **缓存 / Token 优化** | Claude Code (提示缓存失效)、Gemini CLI (缓存预热修复)、OpenAI Codex (输出截断)、Pi (空闲缓存 horizon 配置) | 智能预热、输出边界、跨模型缓存保持 |
| **插件 / 扩展 API** | Copilot CLI (扩展清单 JSON Schema)、Claude Code (skills、子代理)、OpenCode (脚本自定义工具) | 发现机制、权限模型、市场可靠性 |
| **安全加固** | Gemini CLI (SSRF、OAuth 绑定、遥测劫持)、OpenCode (Windows 路径穿越) | 输入校验、凭证隔离、可信工作区控制 |
| **ACP（代理通信协议）** | Gemini CLI (会话管理、并行工具)、OpenAI Codex (Fusion 层配置)、Pi (持久化执行) | 跨代理协调、会话生命周期、人机交互审批 |
| **Windows 优先稳定性** | OpenAI Codex (启动挂起、ARM64)、Qwen Code (热重载)、Copilot CLI (PowerShell)、Pi (终端清理) | PowerShell、cmd.exe、WSL 行为一致性 |
| **国际化** | Qwen Code (俄语 i18n)、Claude Code (日语漂移)、OpenCode (WCAG 2.2 主题) | 语言环境感知模型行为、UI 无障碍、复数处理 |

---

## 4. 差异化分析

| 工具 | 核心差异化 | 目标用户 | 技术重心 |
|------|------------------------|-------------|-----------------|
| **Claude Code** | Cowork 协作会话、多账户需求 | 专业开发者、团队 | 代理委托、上下文管理、桌面集成 |
| **OpenAI Codex** | ACP 模式、Fusion 层、Rust SDK alpha | 企业 + CLI 高级用户 | 跨平台 TUI 一致性、MCP stdio 韧性、斜杠命令生态 |
| **Gemini CLI** | ACP 优先架构、Pi Durable 用于客户端执行 | 高级代理、外部编排器 | 安全加固（SSRF/OAuth）、并行工具批处理、会话生命周期 |
| **Copilot CLI** | 基于 JSON Schema 验证的扩展市场 | 插件开发者、IDE 优先团队 | 扩展加载、会话卡顿恢复、VS Code 集成 |
| **Pi** | 决策模型（`models.classify()`）、优雅终端关闭 | 性能导向开发者、本地推理用户 | 缓存预热智能、推理力度处理、OSC 协议 |
| **Qwen Code** | Qwen4-Max 订阅（1M 上下文）、快速预览节奏 | 中国市场开发者、成本敏感用户 | 订阅 UX、信用管理、ARM64 CI 可靠性 |

**关键技术分歧：**

- **协议采纳：** Gemini CLI 和 OpenAI Codex 大力投入 ACP/代理间协议；Claude Code 和 Copilot CLI 聚焦 IDE/桌面集成；Pi 开创决策模型集成。
- **平台优先级：** OpenAI Codex 和 Qwen Code 在 Windows 稳定性上苦苦挣扎；Gemini CLI 和 Claude Code 面临 Linux TUI 边缘情况；Copilot CLI 处理 PowerShell ConstrainedLanguage 模式。
- **发布理念：** GitHub Copilot CLI 频繁发布微补丁；Claude Code 和 Gemini CLI 采用更长发布周期；Qwen Code 使用预览版本号。

---

## 5. 社区势能与成熟度

### 高活跃度社区

**Gemini CLI** — 24 小时内合并 30 个 PR，展现卓越的代码吞吐量。安全导向的开发（多个 SSRF/OAuth 修复）表明成熟的 DevOps 实践。Pi Durable 功能集预示着宏大的长期架构规划。

**OpenAI Codex** — 合并 20 个 PR 并维持活跃的讨论区（Awesome Codex CLI 列表获 15 条评论），表明健康的社区贡献。Windows 回归 (#62943) 引发 34 条评论，表明用户对可靠性的强烈关注。

**Pi** — 25 个 PR 兼顾功能开发（决策模型、OSC 7577 会话恢复）和缺陷修复（Anthropic SSE CRLF 解析器），展现均衡的迭代。关于隐私（DO_NOT_TRACK）和本地推理的活跃讨论反映出深思熟虑的社区。

### 成长中社区

**Claude Code** — 社区驱动的开源努力 (#41518, #41447) 表明用户投入，尽管无官方开源承诺。多账户特性 (#18435) 获 1,112 👍 表明强烈需求但官方响应缓慢。

**Qwen Code** — P1 安全披露和快速预览发布 (v1.0.0-preview.2) 表明活跃开发。CI 可靠性问题 (#18252 含 73+ 子问题) 表明规模化挑战。

**OpenCode** — 安全补丁节奏和会话归档功能显示企业级相关性增长。WCAG 2.2 无障碍工作表明成熟度。

### 稳定 / 成熟社区

**Copilot CLI** — 三个快速补丁 (v1.0.117-0/1/2) 表明扩展清单工作后的稳定化冲刺。插件生态系统增长（18 个 skills）表明稳定采用。

---

## 6. 趋势信号

### 给工具开发者的建议

1. **Windows 是新的痛点前沿。** 每个工具都在 Windows 稳定性上挣扎——shell 转义、终端报告、热重载和启动挂起出现在所有社区。在 Windows CI 基础设施和 PowerShell/cmd.exe 兼容性测试上的投入是必备基础。

2. **MCP 协议碎片化是真实的。** Gemini CLI、Copilot CLI 和 Claude Code 都报告了 MCP 版本协商问题（legacy vs. modern SDK）。工具作者应实现版本检测和优雅降级，而非假设规范合规。

3. **安全不再是可选项。** Gemini CLI 在单周期内合并 SSRF 防护、OAuth 绑定和遥测劫持修复，树立了新基准。OpenCode 的 Windows shell 转义漏洞 (#66449) 导致删除 27 万文件是前车之鉴。

4. **缓存智能是竞争优势。** Claude Code、Gemini CLI 和 Pi 都以不同方式解决缓存预热。允许用户配置缓存 horizon、跨模型切换保持缓存、提供缓存状态可见性的工具将赢得开发者信任。

5. **ACP/代理间协议正在收敛。** 多个工具独立开发了会话管理、并行工具执行和人机交互审批模式。标准化协议的出现（OSC 7577 会话恢复、ACP 代理协调）预示最终互操作性。

### 给决策者的建议

1. **企业功能落后于社区需求。** 多账户管理（Claude Code 获 1,112 👍）已请求数月未解决。组织在提交前应评估当前工具是否满足多租户需求。

2. **CI 可靠性是代码质量的代理指标。** Qwen Code 的 73+ E2E 测试失败和 Gemini CLI 的 doom-loop 检测回归 (#12318) 表明快速迭代可能损害可靠性。发布周期较慢的工具（Claude Code、Gemini CLI）可能提供更稳定体验。

3. **本地推理正在获得关注。** Pi 聚焦 Ollama 输出上限、本地决策模型和 `AGENTS.local.md` 支持，表明对离线 AI 工具的需求增长。这一趋势可能重塑竞争定位。

4. **无障碍正在成为要求。** OpenCode 的 WCAG 2.2 校准工作覆盖 35 个主题，Pi 的键盘重复竞态条件修复，表明无障碍正从加分项变为基线期望。

5. **国际化缺口持续存在。** Claude Code 的日语漂移 bug (#96326) 和 Qwen Code 的俄语复数修复 (#18320) 表明多语言支持仍不均衡。全球团队部署前应验证语言保真度。

---

*报告生成于 2026-11-26 | 数据来源：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi、Qwen Code 的 GitHub 社区 digest*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Keep all markdown structure exactly the same
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
5. Keep issue/PR references like #12345 as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

Title: "Claude Code Skills Community Highlights Report" -> "Claude Code Skills 社区亮点报告"

Date and source line stays mostly the same.

Section 1: "Top Skills Ranking" -> "一、最佳技能排名"

The table header: "Summary" -> "概述", "Status" -> "状态"

The table rows need careful translation.

Let me work through each section carefully.

---

**Claude Code Skills 社区亮点报告**

*数据截至 2026-11-26 | 来源：anthropics/skills 仓库*

---

**一、最佳技能排名**

The following Skills (PRs) represent... -> 以下 PR 所列技能代表了最高的社区参与度，这些参与度体现在讨论广度、跨功能影响或创新功能添加上：

Table content translation:
- "Summary" -> "概述"
- "Fixes" -> "修复" or "修复了"
- "improves" -> "改进了"
- "Adds" -> "新增"
- "Eliminate" -> "消除"
- "Guides" -> "指导"
- "Prevents" -> "防止"

PR #1742: "Fixes `streamablehttp_client` → `streamable_http_client` rename in MCP ≥2.0 and re-routes custom HTTP headers through `create_mcp_http_client`. Restores compatibility for MCP-based tool integrations."


修复了 MCP ≥2.0 中 `streamablehttp_client` → `streamable_http_client` 的重命名问题，并通过 `create_mcp_http_client` 重新路由自定义 HTTP 头。恢复了基于 MCP 的工具集成的兼容性。

PR #1298: "Improves evaluation reliability by isolating per-worker command probes, fixing `select()` subprocess pipe failures on Windows, preventing unrelated tools from stopping scans, and correctly treating runtime failures as non-triggers."

通过隔离各工作进程的命令探测、修复 Windows 上 `select()` 子进程管道故障、阻止无关工具中断扫描，以及正确地将运行时故障视为非触发条件，提升了评估的可靠性。

PR #1245: "Two new skills: (1) converts product/tech specs into actionable Notion tasks with acceptance criteria; (2) performs quantitative auditing of resumes for ATS optimization."

新增两个技能：(1) 将产品/技术规格转换为附带验收标准的可执行 Notion 任务；(2) 对简历进行量化审计以优化 ATS 表现。

PR #1980: "Eliminates command injection risk (CWE-78) by removing `shell=True` from server subprocess spawning. Directly addresses a security-critical vulnerability in the webapp-testing workflow."

通过移除服务器子进程生成中的 `shell=True` 来消除命令注入风险（CWE-78），直接应对 webapp-testing 工作流中的安全关键漏洞。

PR #1771: "Adds automated static analysis for Solidity/Rust smart contracts, anchoring cryptographic audit proofs onto the TON Blockchain via a zero-storage Merkle protocol. Targets Web3 developers."

新增 Solidity/Rust 智能合约的自动化静态分析，通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链，面向 Web3 开发者。

PR #1703: "Compiles Markdown documents into MP4 videos with realistic voiceovers using Marp for slide generation. Zero-cost professional video output from plain text."

使用 Marp 生成幻灯片，将 Markdown 文档编译成带逼真旁白的 MP4 视频，从纯文本实现零成本专业视频输出。

PR #525: "Guides creation, debugging, and verification of retro games in Python using the Pyxel library. Covers headless input-driven runs, frame inspection, and task-specific state checks."

指导使用 Pyxel 库在 Python 中创建、调试和验证复古游戏，涵盖无头输入驱动运行、帧检查和任务特定状态检查。

PR #514: "Prevents typographic failures in AI-generated documents: orphan word wrap, widow paragraphs, and numbering misalignment. Addresses a pervasive quality issue across all document-generation Skills."

防止 AI 生成文档中的排版失败：孤行单词、寡妇产段落和编号错位。解决了所有文档生成技能中的常见质量问题。

"Discussion Highlights" -> "讨论亮点"
"Security focus" -> "安全重点"
"Evaluation reliability" -> "评估可靠性"
"Cross-domain expansion" -> "跨领域扩展"

---

**二、社区需求趋势**

Issues reveal... -> Issues 揭示了以下对新技能或改进技能的高度需求方向：

### a) Collaboration & Sharing Infrastructure -> ### a) 协作与共享基础设施
- "Org-wide skill sharing" -> "组织级技能共享"
- "Users want a native mechanism to distribute Skills within organizations without manual file handoff." -> "用户希望有一种原生机制能够在组织内部分发技能，无需手动文件传递。"
- "Duplicate skill conflict" -> "重复技能冲突"
- "Users want Skills to be shared across organizations without manual file handoff." -> "用户希望有一种原生机制能够在组织内部分发技能，无需手动文件传递。"

"document-skills and example-skills plugins ship identical content, causing context pollution." -> "`document-skills` 和 `example-skills` 插件包含相同内容，导致上下文污染。"

### b) Evaluation & Quality Assurance -> ### b) 评估与质量保障
- "run_eval.py trigger failures" -> "run_eval.py 触发失败"
- "A critical bug where `claude -p` never triggers Skills/commands, producing 0% trigger rates across all queries." -> "一个关键缺陷：`claude -p` 永远不会触发技能/命令，导致所有查询的触发率为 0%。"
- "Parallel worker UUID collision" -> "并行工作进程 UUID 冲突"
- "Silent false negatives in trigger evaluation when `--num-workers > 1`." -> "当 `--num-workers > 1` 时，触发评估中出现静默假阴性。"

### c) Governance & Trust -> ### c) 治理与信任
- "Security: namespace impersonation" -> "安全：命名空间冒用"
- "Community Skills distributed under `anthropic/` namespace blur the trust boundary; users may grant elevated permissions to unofficial Skills." -> "通过 `anthropic/` 命名空间分发的社区技能模糊了信任边界；用户可能向非官方技能授予提升的权限。"
- "Agent governance skill proposal" -> "代理治理技能提案"

### d) Workflow Automation -> ### d) 工作流自动化
- "compact-memory notation" -> "紧凑内存记号"
- "Symbolic notation for compact agent state, reducing context overhead for long-running agents." -> "用于紧凑代理状态的符号记号，减少长时间运行代理的上下文开销。"
- "Reasoning Quality Gate Pipeline" -> "推理质量门控管道"
- "Three-stage pre-task calibration, adversarial review, and delivery verification pipeline." -> "三阶段任务前校准、对抗性审查和交付验证管道。"

### e) Context & Resource Management -> ### e) 上下文与资源管理
- "claude-api Skill context exhaustion" -> "claude-api 技能上下文耗尽"
- "Bundled `claude-api` Skill injects ~156k tokens, causing excessive context overhead for long conversations." -> "捆绑的 `claude-api` 技能注入约 156k token，导致长时间对话的上下文开销过大。"
- "Email change capability" -> "邮箱变更功能"
- "Platform feature request to prevent workspace data loss; highest 👍 count for non-Skill issues." -> "平台功能请求，防止工作区数据丢失；非技能类 issue 中 👍 数最多。"

"Trend Summary" -> "趋势总结"
"The community's most active demand centers on **evaluation tooling reliability**, **collaborative sharing infrastructure**, and **security hardening**—indicating a maturation phase where workflow-scale concerns outweigh feature-scale additions." -> "社区最活跃的需求集中在**评估工具可靠性**、**协作共享基础设施**和**安全加固**上——表明生态系统正处于成熟阶段，工作流层面的需求超过了功能层面的增加。"

---

**三、高潜力待合并技能**

"These PRs have active engagement or represent significant new capabilities; they are strong candidates for near-term merging:" -> "这些 PR 具有活跃参与度或代表了重要的新功能；它们是近期合并的强候选："

"Why It May Land Soon" -> "近期可能合并的原因"

"Directly unblocks MCP ≥2.0 compatibility; critical infrastructure fix with clear problem statement" -> "直接解除 MCP ≥2.0 兼容性阻塞；关键基础设施修复，问题陈述清晰"

"Addresses CWE-78 with a focused, well-scoped remediation" -> "针对 CWE-78 的聚焦式、范围明确的修复"

"Zero-cost, broad utility for documentation and presentation workflows" -> "零成本，广泛适用于文档和演示工作流"

"Niche but well-defined; long-open with consistent updates (latest 2026-11-01)" -> "小众但定义明确；长期开放，持续更新（最新 2026-11-01）"

"Improves core tooling used by all contributors; multi-platform (Windows) impact" -> "改进所有贡献者使用的核心工具；多平台（Windows）影响"

---

**四、技能生态系统洞察**

"**The community's most concentrated demand is for reliable evaluation tooling, cross-organization sharing infrastructure, and security hardening—indicating the ecosystem is maturing from feature proliferation toward operational maturity and trust governance.**" -> "**社区最集中的需求是对可靠的评估工具、跨组织共享基础设施和安全加固的呼声——表明生态系统正从功能扩张向运营成熟和信任治理演进。**"

---

**GitHub 链接：**
- Repository: https://github.com/anthropics/skills -> "仓库：https://github.com/anthropics/skills"
- All PRs above: `https://github.com/anthropics/skills/pull/{number}` -> "所有上述 PR："
- All Issues above: `https://github.com/anthropics/skills/issues/{number}` -> "所有上述 Issues："

---

Now I need to format the output as a clean Chinese translation without any code fences or additional formatting.
</think>


Claude Code Skills 社区亮点报告

*数据截至 2026-11-26 | 来源：anthropics/skills 仓库*

---

## 一、最佳技能排名

以下 PR 所列技能代表了最高的社区参与度，这些参与度体现在讨论广度、跨功能影响或创新功能添加上：

| # | PR | 作者 | 概述 | 状态 |
|---|-----|--------|---------|--------|
| 1 | **fix(mcp-builder): support mcp≥2 streamable_http_client import and custom headers** (#1742) | Kuldeeep18 | 修复了 MCP ≥2.0 中 `streamablehttp_client` → `streamable_http_client` 的重命名问题，并通过 `create_mcp_http_client` 重新路由自定义 HTTP 头。恢复了基于 MCP 的工具集成的兼容性。 | Open |
| 2 | **fix(skill-creator): isolate trigger evals and handle Windows and runtime failures** (#1298) | MartinCajiao | 通过隔离各工作进程的指令探测、修复 Windows 上 `select()` 子进程管道故障、阻止无关工具中断扫描，以及正确地将运行时故障视为非触发条件，提升了评估的可靠性。 | Open |
| 3 | **Add notion-spec-to-implementation and quantitative-resume-auditor skills** (#1245) | mrdesouzaphd-cmyk | 两个新技能：(1) 将产品/技术规格转换为附带验收标准的可执行 Notion 任务；(2) 对简历进行量化审计以优化 ATS 表现。 | Open |
| 4 | **webapp-testing: avoid shell=True in with_server.py** (#1980) | Pcmhacker-piro | 通过移除服务器子进程生成中的 `shell=True` 来消除命令注入风险（CWE-78）。直接应对 webapp-testing 工作流中的安全关键漏洞。 | Open |
| 5 | **Add proofcore-contract-auditor for smart contract notarization** (#1771) | ProofCore-Protocol | 新增 Solidity/Rust 智能合约的自动化静态分析，通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链。面向 Web3 开发者。 | Open |
| 6 | **Add md2video-audio skill** (#1703) | 70v-Yoyo | 使用 Marp 生成幻灯片，将 Markdown 文档编译成带逼真旁白的 MP4 视频。从纯文本实现零成本专业视频输出。 | Open |
| 7 | **Add pyxel skill for retro game development** (#525) | kitao | 指导使用 Pyxel 库在 Python 中创建、调试和验证复古游戏。涵盖无头输入驱动运行、帧检查和任务特定状态检查。 | Open |
| 8 | **Add document-typography skill** (#514) | PGTBoos | 防止 AI 生成文档中的排版失败：孤行单词、寡妇产段落和编号错位。解决了所有文档生成技能中的常见质量问题。 | Open |

**讨论亮点：**

- **安全重点：** PR #1980（CWE-78 修复）和 PR #1771（Web3 合约审计）表明对抗性用例的关注度日益增长。
- **评估可靠性：** PR #1298 针对影响技能质量衡量的基础工具缺陷——这对社区的 CI/CD 实践至关重要。
- **跨领域扩展：** 这些 PR 涵盖 MCP 基础设施、生产力工具（Notion、视频、排版）以及领域专用自动化（Web3、复古游戏）。

---

## 二、社区需求趋势

Issues 揭示了以下对新技能或改进技能的高度需求方向：

### a) 协作与共享基础设施

- **组织级技能共享** (#228, 17 评论, 8 👍) — 用户希望有一种原生机制能够在组织内部分发技能，无需手动文件传递。这是最受期待的结构性功能。
- **重复技能冲突** (#189, 6 评论, 9 👍) — `document-skills` 和 `example-skills` 插件包含相同内容，导致上下文污染。

### b) 评估与质量保障

- **run_eval.py 触发失败** (#556, 13 评论, 7 👍) — 一个关键缺陷：`claude -p` 永远不会触发技能/指令，导致所有查询的触发率为 0%。
- **并行工作进程 UUID 冲突** (#1352, 6 评论, 3 👍) — 当 `--num-workers > 1` 时，触发评估中出现静默假阴性。

### c) 治理与信任

- **安全：命名空间冒用** (#492, 46 评论, 3 👍) — 通过 `anthropic/` 命名空间分发的社区技能模糊了信任边界；用户可能向非官方技能授予提升的权限。
- **代理治理技能提案** (#412, 6 评论, 已关闭) — AI 代理系统中的安全模式、威胁检测和审计追踪需求。

### d) 工作流自动化

- **紧凑内存记号** (#1329, 10 评论) — 用于紧凑代理状态的符号记号，减少长时间运行代理的上下文开销。
- **推理质量门控管道** (#1385, 8 评论) — 三阶段任务前校准、对抗性审查和交付验证管道。

### e) 上下文与资源管理

- **claude-api 技能上下文耗尽** (#1487, 5 评论) — 捆绑的 `claude-api` 技能单次注入约 156k tokens，导致上下文窗口在单次工具调用中耗尽。
- **邮箱变更功能** (#1143, 7 评论, 20 👍) — 平台功能请求，防止工作区数据丢失；非技能类 issue 中 👍 数最多。

**趋势总结：** 社区最活跃的需求集中在**评估工具可靠性**、**协作共享基础设施**和**安全治理**上——表明生态系统正处于成熟阶段，工作流层面的需求超过了功能层面的增加。

---

## 三、高潜力待合并技能

这些 PR 具有活跃参与度或代表了重要的新功能；它们是近期合并的强候选：

| PR | 技能 | 近期可能合并的原因 |
|----|-------|----------------------|
| #1742 | **mcp-builder 修复** | 直接解除 MCP ≥2.0 兼容性阻塞；关键基础设施修复，问题陈述清晰 |
| #1980 | **webapp-testing 安全修复** | 针对 CWE-78 的聚焦式、范围明确的修复 |
| #1703 | **md2video-audio** | 零成本，广泛适用于文档和演示工作流 |
| #525 | **pyxel 复古游戏开发** | 小众但定义明确；长期开放，持续更新（最新 2026-11-01） |
| #1298 | **skill-creator 评估隔离** | 改进所有贡献者使用的核心工具；多平台（Windows）影响 |

---

## 四、技能生态系统洞察

> **社区最集中的需求是对可靠评估工具、跨组织共享基础设施和安全加固的呼声——表明生态系统正从功能扩张向运营成熟和信任治理演进。**

---

**GitHub 链接：**

- 仓库：https://github.com/anthropics/skills
- 所有上述 PR：`https://github.com/anthropics/skills/pull/{number}`
- 所有上述 Issues：`https://github.com/anthropics/skills/issues/{number}`

---

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the headings, body text, and table content
2. Keep all markdown formatting intact
3. Keep URLs, numbers, dates, issue references (#18435, etc.), usernames, file paths, and other technical identifiers in their original form
4. Use natural technical Chinese register
5. Preserve tables including alignment rows
6. Keep emojis
7. Output only the translation, no preamble or explanation

Let me translate section by section:

Title:
Claude Code 社区速递 — 2026年11月26日

## 今日要点

The community continues to drive significant feature discussions around multi-account management and desktop app improvements, with Issue #18435 accumulating 256 comments from developers requesting easier profile switching. Platform-specific bugs on Windows, macOS, and Linux dominate recent activity, including critical issues with Remote Control session restoration and timeout handling during system sleep states.

社区持续围绕多账户管理和桌面应用改进推动重要的功能讨论，Issue #18435 已积累 256 条评论，反映开发者对更便捷的账户切换方案的强烈需求。近期活动以 Windows、macOS 和 Linux 平台相关的 bug 为主，包括 Remote Control 会话恢复以及系统休眠期间超时处理的严重问题。

## Releases / 发版动态

**过去 24 小时内无新版本发布。** 团队在近期更新后似乎处于静默期。

## Hot Issues / 热门 issue

Let me continue translating each issue title and description carefully...

Let me translate this carefully, keeping the technical Chinese register and all formatting intact.
</think>


# Claude Code 社区速递 — 2026年11月26日

## 今日要点

社区持续围绕多账户管理和桌面应用改进推动重要的功能讨论，Issue #18435 已积累 256 条评论，反映开发者对更便捷的账户切换方案的强烈需求。近期活动以 Windows、macOS 和 Linux 平台相关的 bug 为主，包括 Remote Control 会话恢复以及系统休眠期间超时处理的严重问题。

---

## 发版动态

**过去 24 小时内无新版本发布。** 团队在近期更新后似乎处于静默期。

---

## 热门 Issue

### 1. [功能需求] 在 Claude Desktop 应用中支持管理多个 Claude 账户 [#18435](https://github.com/anthropics/claude-code/issues/18435)
**256 条评论 · 1,112 👍**

该仓库历史上呼声最高的功能需求。用户希望在 Claude Desktop 中原生支持配置文件切换，以便在不同 Anthropic 账户间无缝切换。这对于需要区分工作/个人使用或管理多个客户账户的开发者至关重要。高参与度表明团队需要解决这一根本性的用户体验缺口。

### 2. [功能需求] 支持从 Cowork 项目上下文中移除本地文件夹 [#40043](https://github.com/anthropics/claude-code/issues/40043)
**34 条评论 · 109 👍**

Cowork 用户无法选择性排除某些文件夹，导致不必要的 token 消耗和不相关的上下文污染，令用户感到沮丧。此增强功能将为团队提供更好的协作会话上下文控制能力。

### 3. [缺陷] 尽管 CLAUDE.md 规则要求使用日语，回复仍漂移为英语 [#96326](https://github.com/anthropics/claude-code/issues/96326)
**26 条评论 · 42 👍**

影响多语言开发者的语言保真度 bug。尽管 CLAUDE.md 明确配置且会话设置强制使用日语，模型在处理英语工具输出后仍会退回英语。这破坏了本地化工作流和国际团队协作。

### 4. [缺陷] Windows 桌面版：应用重启后 Remote Control 未恢复 [#100114](https://github.com/anthropics/claude-code/issues/100114)
**18 条评论 · 11 👍**

Windows 用户在应用更新或重启后发现 Remote Control 会话中断，移动端显示已连接会话被错误归档。这扰乱了依赖跨设备会话无缝延续的工作流。

### 5. [缺陷] Subagent Write 工具拒绝名为 "report"/"summary"/"findings"/"analysis" 的 .md 文件 [#44657](https://github.com/anthropics/claude-code/issues/44657)
**16 条评论 · 35 👍**

过于严格的文件名过滤阻止 subagent 创建具有常见命名约定的文档文件。用户无法禁用此限制，迫使开发者使用复杂化自动工作流的变通方案。

### 6. [缺陷] Cowork 云会话以"已弃用模式"启动 — hooks 和斜杠命令失效 [#107077](https://github.com/anthropics/claude-code/issues/107077)
**15 条评论**

严重的 Cowork bug，plugin hooks 和斜杠命令在某些云会话模式中无法执行。确定性行为（某模式下 100% 失败）表明存在配置或初始化问题，需要立即处理。

### 7. [缺陷] Code Mode：事件 nonce 以每进程密钥重新生成，导致提示词缓存失效 [#112264](https://github.com/anthropics/claude-code/issues/112264)
**5 条评论 · 已提供复现步骤**

缓存 bug，事件 nonce 重新生成在每次会话恢复时破坏提示词缓存完整性，导致不必要的重新计算和 API 成本增加。影响重度使用 Code Mode 的成本敏感型开发者。

### 8. [缺陷] macOS：超时计时包含 Mac 休眠时间 [#112366](https://github.com/anthropics/claude-code/issues/112366)
**1 条评论 · 已提供复现步骤**

超时机制错误地包含系统休眠时长，导致长时间运行操作在 Mac 进入休眠状态时提前失败。影响 MCP 超时、hook 超时和 Bash 超时限制。

### 9. [功能需求] Plugin API：回放主线程上一次请求以预热缓存 [#101755](https://github.com/anthropics/claude-code/issues/101755)
**5 条评论**

Plugin 开发者希望在空闲期间拥有缓存预热机制，以保持会话响应能力。这将改善使用 keepalive 修改的开发体验。

### 10. [缺陷] VS Code：设置 CLAUDE_CONFIG_DIR 后重命名空闲会话失败并报 ENOENT [#112381](https://github.com/anthropics/claude-code/issues/112381)
**1 条评论 · 已提供复现步骤**

VS Code 扩展中的配置路径解析 bug，使用自定义配置目录时无法重命名会话，破坏了采用非标准配置的开发者工作流。

---

## 关键 PR 进展

### 1. [开放] 将 Claude Code 完全开源 [#41518](https://github.com/anthropics/claude-code/pull/41518)
**作者：BH3GEI**

一项雄心勃勃的逆向工程工作，从发布的 `cli.js.map` 中提取了 1,906 个 TypeScript 源文件，并使用 Bun bundler 创建了构建配置。成功构建并可运行基本命令。这一社区驱动的举措反映了开发者对 Claude Code 内部代码开源访问的强烈需求。

### 2. [开放] feat: 将 claude code 开源 ✨ [#41447](https://github.com/anthropics/claude-code/pull/41447)
**作者：gameroman**

另一个将 Claude Code 开源的社区尝试，声称将关闭多个相关 issue。尽管该 PR 表明在开源方向取得进展，但社区验证仍在进行中。

---

## 功能需求趋势

对近期 issue 的分析揭示以下主导功能方向：

| 类别 | 核心需求 | 社区热度 |
|----------|--------------|-------------------|
| **多账户管理** | 配置文件切换、账户隔离 | 🔥🔥🔥 (1,112+ 👍) |
| **Cowork 增强** | 选择性文件夹排除、会话模式修复 | 🔥🔥 |
| **Plugin API 扩展** | 缓存控制、请求元数据、microcompact hooks | 🔥🔥 |
| **桌面应用功能** | 听写热键、斜杠命令面板 | 🔥 |
| **身份验证** | MCP OAuth 改进、多账户支持 | 🔥 |
| **平台一致性** | Remote Control、权限跨平台对标 | 🔥 |

---

## 开发者痛点

### 身份验证与账户管理
- 多账户切换是最突出的痛点，暂无原生解决方案
- MCP OAuth 实现丢弃了 RFC 8707 的 `resource` 参数，导致登录失败
- 身份验证问题在多次提交工单后仍未解决

### 平台特定的不稳定性
- **Windows**：重启后 Remote Control 会话持久化失效；git fsmonitor 轮询导致全量目录扫描
- **macOS**：休眠感知超时处理失败；权限绕过设置未能持久生效
- **Linux**：语言漂移 bug；Write 工具过度限制文件名

### 工具与 MCP 生态
- 通过搜索发现的工具在压缩后会丢失 schema
- Subagent Write 工具的文件名限制缺乏灵活性
- MultiEdit 删除后未提供批量编辑替代方案

### 性能与成本
- 事件 nonce 重新生成在会话恢复时使提示词缓存失效
- Projects beta 中自动压缩静默运行，无用户通知
- update-config skill 每次调用都输出完整的 3,000+ 行 schema

### 模型行为
- 安全检查错误标记合法科学工作（计算化学领域）
- 模型忽略简短的/style 指令并过度设计解决方案
- 长会话中的并行 agent 导致变更累积而未经测试

---

*数据来源：GitHub · [anthropics/claude-code](https://github.com/anthropics/claude-code) · 2026-11-26*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while keeping technical terms, code, URLs, version numbers, issue numbers, etc. in their original form
2. Preserve the exact Markdown structure including tables, lists, headings, etc.
3. Use natural technical Chinese register - not literal word-for-word translation
4. Output ONLY the translation without any preamble or explanation
5. No markdown fences around the output

Let me carefully translate each section:

**Title and Date:**
"OpenAI Codex Community Digest" → "OpenAI Codex 社区动态"
"Date: 2026-11-26" → "日期：2026-11-26"
"Repository: github.com/openai/codex" → "仓库：github.com/openai/codex"

**Section 1: Today's Highlights**
- Translate naturally while preserving the technical meaning
- "regressions" → "回归问题"
- "accumulating 34 comments" → "已积累 34 条评论"
- "shipping alongside 20 merged PRs" → "同期合并了 20 个 PR"
- "credit usage ledger freezing" → "积分使用台账冻结"
- "85.4% of purchased credits" → "85.4% 的已购积分"

**Section 2: Releases**
- "Rust SDK Alpha" → "Rust SDK Alpha"
- "alpha release" → "Alpha 版本"
- "rapid iteration cycle" → "快速迭代周期"
- "changelog" → "更新日志"

**Section 3: Hot Issues**
- Translate issue titles and descriptions naturally
- "Conversation permissions" → "会话权限"
- "execution-location selectors" → "执行位置选择器"
- "Max reasoning effort" → "最大推理强度"
- "Bottom Panel" → "底部面板"
- "ARM64 startup issue" → "ARM64 启动问题"


- "Credit usage ledger" → "积分使用台账"
- "frozen" → "冻结"
- "mouse selection" → "鼠标选择"
- "middle-click paste" → "中键粘贴"
- "Pasting is slow" → "粘贴速度慢"
- "hangs on startup" → "启动时卡死"
- "WSL PATH Probe" → "WSL PATH 探测"
- "image paste fails" → "图片粘贴失败"
- "numbered image marker" → "图片编号标记"

**Section 4: Key PR Progress**
- Translate PR titles and descriptions while maintaining technical accuracy. For "Resolve TUI image attachments relative to file search root", use "修复 TUI 图片附件相对于文件搜索根目录的路径解析问题". The key technical terms like "TUI", "image attachments", and "file search root" should remain recognizable to Chinese developers while being naturally expressed.

- For "Prevent Kitty pet animation flicker in tmux", translate as "修复 Kitty 宠物动画在 tmux 中的闪烁问题", where "flicker" becomes "闪烁" and the tmux context is preserved.

- "Fix code fence tracking in TUI streaming preview" becomes "修复 TUI 流式预览中的代码围栏追踪问题", using "代码围栏" as the natural Chinese term for "code fence" while keeping "TUI" and "streaming preview" recognizable.

- "Fix Unicode fuzzy matching and slash popup activation" translates to "修复 Unicode 模糊匹配和斜杠弹窗激活问题", maintaining technical accuracy for "Unicode fuzzy matching" while expressing the popup behavior naturally.

- For mouse control features like "Add mouse controls to hide/restore TUI sidebar", use "为 TUI 侧边栏添加鼠标显隐控制", which concisely captures the functionality without unnecessary technical jargon.

- "Refactor TUI sidebar chooser input handling" becomes "重构 TUI 侧边栏选择器输入处理逻辑", using "重构" for refactoring and "输入处理逻辑" to describe the input handling mechanism.

- "Extract TUI sidebar input routing into its own module" translates to "将 TUI 侧边栏输入路由提取为独立模块", clearly indicating the module extraction concept.

- "Honor per-executor plugin settings in capability discovery" uses "在能力发现中遵循按执行器的插件设置", where "capability discovery" becomes "能力发现" and the per-executor context is preserved.

- "Support numeric MCP elicitation fields in TUI" becomes "TUI 支持数字类型 MCP 请求字段", simplifying the concept while maintaining the MCP protocol reference.

- "Preserve native exit codes in Windows PowerShell hooks" translates to "在 Windows PowerShell 钩子中保留原生退出码", using "钩子" as the standard term for hooks in Chinese.

**Section 5: Hot Discussions**

The translations cover different discussion categories: Ideas with titles like "What if spare GPU time could earn Codex credits?" becoming "如果空闲 GPU 时间可以赚取 Codex 积分会怎样", and Q&A sections addressing questions about VS Code extension behavior.

**Section 6: Feature Request Trends**

Feature requests are categorized by platform and type, starting with "Cross-Platform Input Reliability" (跨平台输入可靠性) covering keyboard and mouse behavior across Linux and Windows systems, followed by "Enhanced CLI Automation" (增强 CLI 自动化) for deeper scripting capabilities.

The remaining trends include Memory & Session Management, MCP Ecosystem Expansion, and Windows-First Development Concerns, each with corresponding frequency indicators.

**Section 7: Developer Pain Points**

Pain points are measured by frequency—High, Medium-High, Medium, Low-Medium—with specific issue numbers assigned to each category.

**Bottom line and Footer**

The summary translates to "简而言之：Windows 稳定性仍是主要问题，而 Linux 用户则报告了零散但持续存在的 TUI 交互问题。积分台账冻结已持续三个多月，正在侵蚀付费企业用户的信任。"

The team is actively merging fixes, with 20 PRs merged today, particularly focusing on TUI UX improvements and MCP robustness enhancements. Footer text includes the generation timestamp and repository reference in Simplified Chinese.
</think>


# OpenAI Codex 社区动态

**日期：** 2026-11-26  
**仓库：** github.com/openai/codex

---

## 1. 今日要点

社区正在积极应对 11 月 21 日更新后出现的严重 Windows 回归问题。Issue #62943（新会话的权限和执行位置选择器丢失）已积累 34 条评论，成为今日讨论最活跃的工单。Rust Alpha 版本（v0.174.0-alpha.6）同期发布，此外还合并了 20 个 PR，主要涉及 TUI 改进、MCP 增强和跨平台兼容性修复。自 8 月 8 日以来积分使用台账持续冻结，Issue #39260 仍在困扰企业用户，85.4% 的已购积分去向不明。

---

## 2. 版本发布

### Rust SDK Alpha
**版本：** `rust-v0.174.0-alpha.6`  
**链接：** https://github.com/openai/codex/releases/tag/rust-v0.174.0-alpha.6

此 Alpha 版本延续了 Rust SDK 的快速迭代节奏，发布说明中未提供额外的变更日志详情。

---

## 3. 热门工单

### 1. **[Windows] 11 月 21 日更新回归 — 新会话丢失权限与选择器** (#62943)  
**状态：** 开启中 | **评论：** 34 | **👍：** 17  
**链接：** https://github.com/openai/codex/issues/62943

11 月 21 日更新后创建的新会话缺少权限选择器和执行位置选择器，"最大推理强度" 选项也完全消失。受影响系统为 Windows x64 build 26200。此为今日流量最高的工单，表明 ChatGPT Work 用户正遭受严重回归问题。

---

### 2. **macOS：底部面板设置更新后消失** (#62234)  
**状态：** 已关闭 | **评论：** 25 | **👍：** 25  
**链接：** https://github.com/openai/codex/issues/62234

macOS 27.0.1（Apple M5）用户反映终端布局被强制改为右侧，底部面板设置变得不可访问。高参与度（25 个 👍 反应）表明这曾是 Pro 用户在统一桌面应用中面临的广泛困扰。

---

### 3. **[Windows ARM64] 启动时缺少 Scope 实例** (#63783)  
**状态：** 开启中 | **评论：** 10 | **👍：** 4  
**链接：** https://github.com/openai/codex/issues/63783

更新至 build 26.1120.6357.0 后，ChatGPT 桌面应用在 Windows ARM64 上启动时立即崩溃。影响 Business 层级用户，核心功能完全不可用。

---

### 4. **Linux 回归：鼠标选择不再支持中键粘贴** (#49162)  
**状态：** 开启中 | **评论：** 9 | **👍：** 6  
**链接：** https://github.com/openai/codex/issues/49162

自 Codex CLI 0.158.0 起，在 TUI 中选择文本后无法通过中键粘贴。虽然显示复制确认消息，但剪贴板始终未收到内容。此问题自 9 月起持续至今。

---

### 5. **积分使用台账自 8 月 8 日冻结 — 85.4% 积分去向不明** (#39260)  
**状态：** 开启中 | **评论：** 8 | **👍：** 0  
**链接：** https://github.com/openai/codex/issues/39260

Analytics 积分使用日志自 2026 年 8 月 8 日起停止记录。在 53,000 个已购积分中，45,252 个（85.4%）显示已消耗，却没有任何对应的使用记录。这是企业透明度方面的严重问题，历时三个多月仍未解决。

---

### 6. **Windows CLI 粘贴速度极慢** (#14099)  
**状态：** 开启中 | **评论：** 8 | **👍：** 2  
**链接：** https://github.com/openai/codex/issues/14099

Codex CLI 0.112.0 在 Windows NT 10.0.26100.0 上粘贴延迟严重。尽管自 2026 年 3 月就已开放，但此性能问题至今未解决，影响日常工作效率。

---

### 7. **[Windows] ChatGPT Work 无法本地运行** (#63035)  
**状态：** 开启中 | **评论：** 7 | **👍：** 3  
**链接：** https://github.com/openai/codex/issues/63035

Windows 11 Pro 用户反映 ChatGPT Work 仅支持云端运行，即使拥有相应订阅层级也无法选择本地执行。这限制了离线办公能力和数据隐私选项。

---

### 8. **Windows 桌面应用启动时卡死：WSL PATH 探测无超时机制** (#60484)  
**状态：** 开启中 | **评论：** 5 | **👍：** 2  
**链接：** https://github.com/openai/codex/issues/60484

Windows 桌面应用在启动时因主线程调用 `spawnSync bash -ilc` 探测 WSL PATH 且无超时保护而无限期卡死。用户必须手动结束进程。

---

### 9. **CLI 图片粘贴失败：缺少编号图片标记** (#60410)  
**状态：** 开启中 | **评论：** 3 | **👍：** 0  
**链接：** https://github.com/openai/codex/issues/60410

Linux aarch64 上 Codex CLI 0.167.0 通过剪贴板粘贴图片时静默失败——既不显示编号图片标记，也不向模型发送附件。影响依赖视觉上下文共享的用户。

---

### 10. **更新后 Windows 每次启动都卡死** (#63913)  
**状态：** 开启中 | **评论：** 3 | **👍：** 0  
**链接：** https://github.com/openai/codex/issues/63913

Windows 11 x64（build 26.1120.6357.0）上 ChatGPT 桌面应用启动后立即卡死。稳定复现导致应用完全无法使用。

---

## 4. 重要 PR 进展

| PR | 标题 | 概要 |
|----|------|------|
| [#64071](https://github.com/openai/codex/pull/64071) | 修复 TUI 图片附件相对于文件搜索根目录的路径解析 | 修复了当文件搜索根目录与工作目录不同时，通过 `@` 补全选择图片失败的问题 |
| [#64069](https://github.com/openai/codex/pull/64069) | 消除 Kitty 宠物动画在 tmux 中的闪烁 | 通过在 tmux 透传时交替使用两张 Kitty 图片缓解动画闪烁 |
| [#64067](https://github.com/openai/codex/pull/64067) | 修复 TUI 流式预览中的代码围栏追踪 | 防止引用块中的围栏标记导致未引用代码块提前结束 |
| [#64058](https://github.com/openai/codex/pull/64058) | 修复 Unicode 模糊匹配与斜杠弹窗激活 | 解决希腊字母 Sigma 变体匹配失败和斜杠弹窗行为异常问题 |
| [#64055](https://github.com/openai/codex/pull/64055) | 为 TUI 侧边栏添加鼠标显隐控制 | 实现点击控制（`›`/`‹`）来切换侧边栏可见性，无需键盘操作 |
| [#64054](https://github.com/openai/codex/pull/64054) | 重构 TUI 侧边栏选择器输入处理逻辑 | 模块化选择器事件处理，增强行可见性检查 |
| [#64053](https://github.com/openai/codex/pull/64053) | 将 TUI 侧边栏输入路由提取为独立模块 | 改进指针事件解析和输入分发架构 |
| [#64052](https://github.com/openai/codex/pull/64052) | 在能力发现中遵循按执行器的插件设置 | 插件禁用现在独立尊重执行器级别的安装配置 |
| [#64023](https://github.com/openai/codex/pull/64023) | TUI 支持数字类型 MCP 请求字段 | MCP 表单中的数字字段现在渲染正确的输入 UI，而非通用审批提示 |
| [#64013](https://github.com/openai/codex/pull/64013) | 在 Windows PowerShell 钩子中保留原生退出码 | 修复 `$LASTEXITCODE` 转发，使 `PreToolUse` 钩子正确检测命令失败 |

---

## 5. 热门讨论

### 创意
| # | 标题 | 评论数 | 链接 |
|---|------|--------|------|
| #63915 | 如果空闲 GPU 时间可以赚取 Codex 积分会怎样？ | 0 | [链接](https://github.com/openai/codex/discussions/63915) |
| #63850 | 在 Shell 工具结果中展示 Unix 信号终止信息 | 0 | [链接](https://github.com/openai/codex/discussions/63850) |

### 问答
| # | 标题 | 评论数 | 链接 |
|---|------|--------|------|
| #22829 | 为什么 codex 扩展显示所有历史会话而不是仅显示项目会话？ | 1 | [链接](https://github.com/openai/codex/discussions/22829) |
| #56409 | exec_command / write_stdin：对捕获、终止和持续时间有文档化的保证吗？ | 1 | [链接](https://github.com/openai/codex/discussions/56409) |

### 展示与分享
| # | 标题 | 评论数 | 链接 |
|---|------|--------|------|
| #16329 | Awesome Codex CLI — 150+ 生态系统工具精选列表 | 15 | [链接](https://github.com/openai/codex/discussions/16329) |
| #58220 | recall：为 Codex 赋予 Claude Code 的记忆功能（MCP，零依赖） | 1 | [链接](https://github.com/openai/codex/discussions/58220) |
| #63921 | 一个用于游戏构建试玩的 Codex 工作流 | 0 | [链接](https://github.com/openai/codex/discussions/63921) |
| #63395 | Codex Desk：查找历史回答并继续任务 | 0 | [链接](https://github.com/openai/codex/discussions/63395) |
| #63884 | 用 Codex 测试几何课堂中的似是而非的答案 | 0 | [链接](https://github.com/openai/codex/discussions/63884) |

---

## 6. 功能需求趋势

对今日 Issues 和 Discussions 的分析揭示以下新兴需求模式：

1. **跨平台输入可靠性** — 多份报告涉及 Linux（中键粘贴、西里尔字母布局、Kitty/Ghostty 集成）和 Windows（Alt+数字键盘、粘贴性能）上的键盘/鼠标行为回归。用户期望无论使用何种环境都能获得一致的终端交互体验。

2. **增强 CLI 自动化能力** — 通过命令行暴露 Goal 控制（#31783）和展示 Unix 信号终止信息（#63850）的请求表明，用户对更深入的脚本编写和可靠性基准测试功能有需求。

3. **记忆与会话管理** — `recall` 和 `Codex Desk` 等社区工具凸显了对更好的会话历史、会话切换和记忆持久化功能的需求。

4. **MCP 生态系统扩展** — 多个 MCP 相关 PR 和讨论表明，对 Model Context Protocol 集成的兴趣正在增长，尤其是数字请求字段和会话恢复方面。

5. **Windows 优先开发隐忧** — 40%+ 的活跃工单针对 Windows 特定问题（启动卡死、ARM64 支持、本地运行、沙盒网络），表明 Windows 用户可能感到服务不足。

---

## 7. 开发者痛点

今日数据中最频繁出现的挫败感：

| 痛点 | 频率 | 代表性工单 |
|------|------|-----------|
| **Windows 启动/卡死故障** | 高 | #63783, #63913, #60484, #63035 |
| **TUI 鼠标/选择行为** | 中高 | #49162, #59608, #60588, #24908 |
| **图片/剪贴板操作** | 中 | #60410, #24908, #64071（已修复） |
| **积分/使用透明度** | 中 | #39260 |
| **终端模拟器兼容性** | 中 | #52003, #46881, #63705（已修复）, #42421 |
| **MCP 连接韧性** | 中低 | #59289, #64011（已修复） |

**简而言之：** Windows 稳定性仍是主要问题，而 Linux 用户则报告了零散但持续存在的 TUI 交互问题。积分台账冻结已持续三个多月，正在侵蚀付费企业用户的信任。好的一面：团队正在积极合并修复（今日 20 个 PR），尤其是围绕 TUI 用户体验改进和 MCP 健壮性提升。

---

*数据来源：GitHub • github.com/openai/codex • 2026-11-26*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this English technical digest into Simplified Chinese. I need to:

1. Translate all the text content while keeping the structure
2. Keep URLs, numbers, issue numbers, file paths, etc. as-is
3. Use natural technical Chinese
4. Preserve all formatting (tables, headings, lists, etc.)
5. Output only the translation with no preamble

Let me translate section by section.
</think>


# Gemini CLI 社区动态 — 2026-11-26

---

## 1. 今日要点

Gemini CLI 项目在**核心稳定性与安全加固**方面展现出高度活跃。多个影响子代理行为和代理挂起的 P1 级缺陷正在推动优先级修复，同时团队正在积极合并 SSRF 防护和 OAuth 令牌绑定漏洞的关键安全补丁。ACP（Agent Protocol）模式改进主导了近期 PR 的合并方向，包括会话管理、令牌追踪和并行工具调用等增强功能。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。项目持续将修复合并至主分支。

---

## 3. 热门议题

### 🔴 优先级 1 — 严重缺陷

| # | 议题 | 摘要 | 影响 |
|---|-------|---------|--------|
| **#22323** | [子代理达到 MAX_TURNS 后错误报告 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | 子代理达到最大轮次限制，但错误地报告 `status: "success"` 且 `Termination Reason: "GOAL"`，而非正确地发出中断信号。 | **14 条评论** — 用户无法知晓子代理何时被提前截断。影响代码库调查任务的可靠性。 |
| **#21409** | [通才代理无限期挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | 当 Gemini CLI 交由通才代理处理时，会无限挂起（测试长达 1 小时）。即使创建文件夹等简单操作也会阻塞。 | **8 条评论，8 👍** — 阻塞基本工作流。存在变通方案（指示模型跳过子代理）。 |
| **#22186** | [get-shit-done 输出钩子导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done 输出打印用户摘要时发生崩溃。 | **3 条评论** — 中断任务结束报告。 |
| **#21763** | [Bug 报告缺少子代理上下文](https://github.com/google-gemini/gemini-cli/issues/21763) | `/bug` 报告仅捕获主会话，不记录子代理活动。 | **2 条评论** — 妨碍子代理失败时的调试。 |

### 🟡 优先级 2 — 值得关注的问题与增强

| # | 议题 | 摘要 | 影响 |
|---|-------|---------|--------|
| **#19873** | [基于模型 bash 亲和性的零依赖操作系统沙箱](https://github.com/google-gemini/gemini-cli/issues/19873) | 提议利用 Gemini 3 原生的 bash 能力实现安全沙箱，无需外部依赖。 | **9 条评论** — 雄心勃勃的安全/用户体验提案；可显著降低攻击面。 |
| **#22745** | [支持 AST 感知的文件读取、搜索与映射](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知工具的可行性，实现精确的方法级边界读取和精准导航。 | **7 条评论** — 可大幅降低 token 用量并提升准确性。 |
| **#21968** | [Gemini 未能充分利用 skills 和子代理](https://github.com/google-gemini/gemini-cli/issues/21968) | 模型忽略自定义 skills/子代理，即使任务高度相关（如 git/gradle skills）。 | **7 条评论** — 限制了技能定制的价值。 |
| **#22267** | [浏览器代理忽略 settings.json 覆盖配置](https://github.com/google-gemini/gemini-cli/issues/22267) | 全局/项目级 `settings.json` 配置（如 `maxTurns`）被浏览器代理忽略。 | **5 条评论** — 破坏用户配置预期。 |
| **#24246** | [工具数量超过 128 时返回 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246) | 当可用工具超过 128 个时，Gemini CLI 抛出 400 错误。 | **3 条评论** — 限制了 MCP 服务器扩展能力。 |
| **#20079** | [符号链接代理无法识别](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/filename.md` 符号链接无法注册为子代理。 | **4 条评论** — 妨碍模块化代理组织。 |

---

## 4. 关键 PR 进展

### ✅ 最近合并（已关闭）

| PR | 标题 | 领域 | 重要性 |
|----|-------|------|--------------|
| **#30247** | [fix(core): 避免在 shell 检查期间阻塞 PowerShell 解析](https://github.com/google-gemini/gemini-cli/pull/30247) | Core | **P2** — 修复 Windows 上 shell 策略检查时的 UI 冻结。同步 PowerShell AST 解析阻塞了事件循环。 |
| **#30246** | [fix(core): 在 Windows 上为 cmd.exe 引用 IDE CLI 路径](https://github.com/google-gemini/gemini-cli/pull/30246) | Core | 修复 VS Code 路径含空格时（默认安装位置）`/ide install` 失败的问题。 |
| **#30239** | [fix(core): tier 解析时保留别名配置](https://github.com/google-gemini/gemini-cli/pull/30239) | Core | 层别名（`flash-lite`、`flash`、`pro`）上的自定义别名现在会保留 `generateContentConfig`。 |
| **#30230** | [fix(core): 为音频/视频保留合成二进制确认](https://github.com/google-gemini/gemini-cli/pull/30230) | Agent | **P1** — 修复 Code Assist（Google 登录）下对音频/视频执行 `read_file` 时的 400 错误。 |
| **#30234** | [fix(acp): 为模型截断大型工具输出](https://github.com/google-gemini/gemini-cli/pull/30234) | ACP | ACP 现在对大型工具输出进行边界限制，与 CLI 行为一致；一个测试用例从 369k 输入 tokens 降至更小。 |
| **#30236** | [fix(acp): 并行执行可并行的工具调用](https://github.com/google-gemini/gemini-cli/pull/30236) | ACP | ACP 现在按轮次并行化独立工具调用，与 CLI 调度器行为匹配。 |
| **#30232** | [feat(acp): 支持 session/close](https://github.com/google-gemini/gemini-cli/pull/30232) | ACP | ACP 客户端现可释放会话，释放配置、聊天和 MCP 连接。 |
| **#30241** | [fix(core): 截断时保留注入的二进制数据完整性](https://github.com/google-gemini/gemini-cli/pull/30241) | Core | 修复截断包含 `__binary_injection__` 的工具响应时 base64 损坏问题。 |
| **#30454** | [fix(core): 在 MCP OAuth 中强制来源一致性](https://github.com/google-gemini/gemini-cli/pull/30454) | Core | **P1** — RFC 8414 发行方匹配及 MCP OAuth 流程的来源一致性。 |

### 🔄 开放与审查中

| PR | 标题 | 领域 | 状态 |
|----|-------|------|--------|
| **#30479** | [解决 issue #30474](https://github.com/google-gemini/gemini-cli/pull/30479) | — | **P1, XL** — 社区贡献；详情待定。 |
| **#30477** | [fix(web-fetch): 通过 DNS 主机名和重定向防止 SSRF](https://github.com/google-gemini/gemini-cli/pull/30477) | 安全 | #27739 的延续 — 修复代理重定向 SSRF（R5）。URL 传递的私有 IP 检查可被重定向至回环/私有地址。 |
| **#30478** | [修复：将 MCP 工具批准绑定至工具定义](https://github.com/google-gemini/gemini-cli/pull/30478) | MCP | 仅按名称的批准在 `tools/list_changed` 时丢失；现绑定至工具定义。 |
| **#30475** | [修复：将 MCP OAuth 令牌绑定至服务器 URL](https://github.com/google-gemini/gemini-cli/pull/30475) | MCP | 服务器 URL 重定向时保留的 OAuth 令牌；强制重新认证而非静默重放。 |
| **#30476** | [fix(cli): 阻止受信任工作区设置重定向遥测数据](https://github.com/google-gemini/gemini-cli/pull/30476) | CLI | **P2** — 受信任工作区 settings.json 覆盖了遥测配置，使仓库得以重定向用户数据。 |
| **#30353** | [fix(acp): 标准化令牌使用追踪和配额元数据](https://github.com/google-gemini/gemini-cli/pull/30353) | ACP | 解决 #24280 和 #27985 — 在取消轮次时保留 `PromptResponse.usage`。 |
| **#30363** | [fix(core): 避免在托管历史中重复待处理提示](https://github.com/google-gemini/gemini-cli/pull/30363) | Core | 修复 #30069 — 防止历史强化已合并后重新追加原始提示。 |
| **#30362** | [fix(acp): 报告停止代理的原因](https://github.com/google-gemini/gemini-cli/pull/30362) | ACP | 修复 #30199 — 将停止原因作为助手消息发送，而非静默的空轮次。 |
| **#30349** | [⚡ Bolt: 优化工具参数清理热路径](https://github.com/google-gemini/gemini-cli/pull/30349) | 性能 | 在模块作用域预编译正则表达式（`KEY_WITH_DELIMITER_REGEX` 等）并预计算敏感模式。 |
| **#30348** | [🎨 Palette: DevTools 复制反馈和无障碍图标按钮](https://github.com/google-gemini/gemini-cli/pull/30348) | 用户体验 | 复制 payload/response JSON 时的视觉确认（勾选标记、绿色）；改进 aria-labels。 |

---

## 5. 热门讨论

*该数据源未提供讨论数据。*

---

## 6. 功能需求趋势

对全部 50 个议题的分析揭示五大主导功能方向：

| 主题 | 热度 | 关键议题 |
|-------|-----------|------------|
| **🔬 AST 感知工具链** | 高 | #22745, #22746, #22747, #19561 — 通过 AST grep 实现精准代码发现、方法级边界读取、节省 token 的提取 |
| **🤖 子代理智能** | 高 | #19873, #21968, #20195, #18282, #18283, #18285, #18287 — 更好的技能调用、并行协作、共享内存、发现机制 |
| **🛡️ 安全与沙箱** | 高 | #19873（操作系统沙箱）、#30477（SSRF）、#30475/#30478（MCP OAuth/令牌）、#30476（遥测劫持） |
| **📊 ACP 模式一致性** | 中 | #30232, #30234, #30236, #30353, #30362 — 会话管理、输出截断、令牌追踪、停止原因 |
| **🌐 浏览器代理可靠性** | 中 | #22267, #22232, #21983 — 设置覆盖、会话接管、Wayland 兼容性 |

---

## 7. 开发者痛点

以下问题在议题和 PR 中反复出现：

| 痛点 | 证据 | 优先级 |
|------------|----------|----------|
| **子代理委托时代理挂起** | #21409 — 通才代理阻塞；用户被迫禁用子代理 | 🔴 高 |
| **设置继承不一致** | #22267 — 浏览器代理忽略全局/项目 settings.json | 🟡 中 |
| **大文件读取导致 token 膨胀** | #19561 — 每轮上下文基线约 36.6k tokens；大文件读取额外增加 +15k | 🟡 中 |
| **符号链接代理发现失效** | #20079 — 通过符号链接实现的模块化代理组织静默失败 | 🟡 中 |
| **Windows PowerShell UI 冻结** | #30247（已合并）— 同步解析阻塞事件循环 | 🟡 中（已修复） |
| **MCP OAuth 令牌复用漏洞** | #30475/#30478（开放）— 令牌被重放至不同来源 | 🔴 高 |
| **工具数量上限** | #24246 — 超过 128 个工具时 400 错误，限制 MCP 扩展性 | 🟡 中 |
| **Bug 报告中缺少子代理上下文** | #21763 — 调试子代理失败需手动收集上下文 | 🟡 中 |

---

**动态结束** | 生成于 2026-11-26 | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI community digest from English into Simplified Chinese. I need to follow the rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully, maintaining the structure and using natural Chinese technical writing style.

Key terms to translate:
- GitHub Copilot CLI Community Digest → GitHub Copilot CLI 社区速报
- Today's Highlights → 今日要闻
- Releases → 版本更新
- Hot Issues → 热门 issue
- Key PR Progress → 重要 PR 进展
- Hot Discussions → 热门讨论
- Feature Request Trends → 功能请求趋势
- Developer Pain Points → 开发者痛点

Let me translate section by section, keeping the technical Chinese natural.
</think>


# GitHub Copilot CLI 社区速报

**日期：** 2026-11-26
**仓库：** github.com/github/copilot-cli

---

## 1. 今日要闻

Copilot CLI 团队在 **v1.0.117** 版本中发布了三个补丁版本，引入了自定义 Agent 的显式工具暴露功能，并对模型选择器进行了大幅改进，新增服务通知和退役模型警告。关键修复包括：GitHub 登录待完成时正确恢复会话，以及修正受约束环境下的 PowerShell 参数处理。社区持续报告 MCP 协议兼容性、会话状态管理和插件市场可靠性等问题。

---

## 2. 版本更新

### v1.0.117-2 (2026-11-26)
**修复：**
- 扩展加载现在能正确识别仅获预批准的扩展，并在 `copilot help extensions` 输出中显示
- 当 Copilot 发送行相关标志时，内置搜索不再失败

### v1.0.117-1 (2026-11-26)
**改进：**
- 模型选择器现显示服务通知，并在选择前标记退役模型警告

**修复：**
- 当仓库绑定的 provider 不可用时，显示明确的错误提示而非静默切换 provider
- 修正新会话检查点公告的时序

### v1.0.117-0 (2026-11-26)
**新增：**
- 新增显式工具暴露 API，允许自定义 Agent 选择性接入特定工具

**修复：**
- CLI 会话恢复现在可以在 GitHub 登录待完成期间正确加载已连接的 Copilot Connector
- 后台 Agent 在 CLI 重启并恢复会话后可以继续对话

### v1.0.116-4/5 (2026-11-25)
**新增：**
- 构建时 JSON Schema 验证扩展清单

**修复：**
- 带有数字参数名的 PowerShell 命令（如 `-n1`、`-ExpectedSha256`）再次正确遵循允许规则
- ACP 客户端中的 Shell 审批提示现在显示实际待授权的命令
- 计划审批不再错误地提供 `/fleet` 自动驾驶续聊选项

---

## 3. 热门 Issue

### 🔴 高优先级

**#5323 - 功能请求：添加设置项以禁用 Agent 检查点引用 (refs/agents/*)**
- **重要性：** 每次 Agent 对话都会在 `refs/agents/<session-id>/checkpoints/turn/N` 下创建 git 提交，使用用户身份署名，污染仓库历史并在 Git 工具中显示
- **社区反馈：** 6 👍 | 8 条评论
- **链接：** https://github.com/github/copilot-cli/issues/5323

**#2073 - [Bug] 由于临时 API 错误导致请求失败**
- **重要性：** 用户频繁遇到重试循环，导致用户体验下降，并可能引发速率限制问题
- **社区反馈：** 13 👍 | 6 条评论
- **链接：** https://github.com/github/copilot-cli/issues/2073

**#4755 - [Bug] 当排队车道消息在回合结束时到达时会话永久卡死**
- **重要性：** 会话完全无响应——不接收任何输入，应用显示已停止，只能通过杀掉进程恢复。对长时间运行的工作流影响严重
- **社区反馈：** 5 条评论（未显示 👍）
- **链接：** https://github.com/github/copilot-cli/issues/4755

**#4683 - [Bug] PowerShell ConstrainedLanguage 模式发出虚假的 $host.SetShouldExit() 错误**
- **重要性：** 影响使用 AppLocker 或 WDAC 策略的企业 Windows 环境——每个 Shell 命令都产生错误输出，污染日志并可能表明安全边界问题
- **社区反馈：** 1 👍 | 4 条评论
- **链接：** https://github.com/github/copilot-cli/issues/4683

**#2753 - [Bug] 插件技能未包含在主 Agent 的 available_skills 中**
- **重要性：** 插件在 `/skills` UI 中可见（显示 18 个技能）但未注入 Agent 系统提示，导致基于技能的工作流失效
- **社区反馈：** 1 👍 | 5 条评论
- **链接：** https://github.com/github/copilot-cli/issues/2753

### 🟡 值得关注

**#1826 - 功能请求：支持通过 .code-workspace 文件实现多根工作区**
- **重要性：** 通过 `/ide` 连接时 CLI 无法从 `.code-workspace` 文件发现额外的根文件夹，导致次级文件夹中的指令文件（AGENTS.md）无法加载
- **社区反馈：** 22 👍 | 6 条评论
- **链接：** https://github.com/github/copilot-cli/issues/1826

**#5354 - [Bug] ACP 未广告 Copilot Fusion 或其层级配置**
- **重要性：** ACP 客户端（如 T3 Code）无法显示 Fusion 或提供其层级选择器，导致非交互式工作流的 AI provider 体验不完整
- **社区反馈：** 11 👍 | 3 条评论
- **链接：** https://github.com/github/copilot-cli/issues/5354

**#5440 - [Bug] Agent 插件 1.0 的 .instructions.md 文件被静默忽略**
- **重要性：** 新插件格式的指令文件和 `com.github.copilot/rules/` 中的 `applyTo` frontmatter 未加载，导致声明式插件配置失效
- **社区反馈：** 1 👍 | 2 条评论
- **链接：** https://github.com/github/copilot-cli/issues/5440

**#5574 - [Bug] Agent 成功但未输出结论时 -p 模式失败**
- **重要性：** 依赖 `-p`（程序化）模式的自动化脚本自 1.0.115 起以错误退出码失败，导致 CI/CD 集成中断
- **社区反馈：** 0 👍 | 0 条评论
- **链接：** https://github.com/github/copilot-cli/issues/5574

**#3904 - [Bug] CloudQueryError 导致 /chronicle standup 失败，尽管存在本地回退数据**
- **重要性：** 云端错误时 standup 命令失败，即使本地会话数据存在，迫使用户不必要地保持云端连接
- **社区反馈：** 0 👍 | 2 条评论
- **链接：** https://github.com/github/copilot-cli/issues/3904

---

## 4. 重要 PR 进展

过去 24 小时内无新 Pull Request 合并或创建。团队似乎正处于 v1.0.116 和 v1.0.117 发布周期后的稳定期。

---

## 5. 热门讨论

*本期未提供讨论数据。*

---

## 6. 功能请求趋势

对 Open Issue 的分析揭示以下主要功能方向：

| 主题 | 描述 | 热度 |
|-------|-------------|--------|
| **工作区智能** | 多根工作区支持、.code-workspace 文件解析、跨文件夹 AGENTS.md 发现 | 高 |
| **插件生态** | 扩展清单 Schema、.instructions.md 加载、受管插件预批准、市场可靠性 | 高 |
| **MCP 协议** | 多版本 MCP 兼容性、stdio 连接处理、已禁用服务器警告 | 高 |
| **会话管理** | 检查点引用控制、会话卡死恢复、提示历史范围隔离 | 中 |
| **模型/Fusion 控制** | Fusion 路由到本地服务器、ACP 层级配置、动态 Auto 层标志 | 中 |
| **企业合规** | PowerShell ConstrainedLanguage 支持、Perforce depot 路径处理、Windows 沙盒规则 | 中 |
| **自动化可靠性** | `-p` 模式健壮性、错误退出码、后台 Agent 持久化 | 中 |

---

## 7. 开发者痛点

### 反复出现的问题

1. **MCP 协议版本不匹配** — 多个 Issue（#4888、#5464）突出双时代 MCP SDK 兼容性问题：CLI 先发送 `2026-07-28` 发现请求，然后回退到旧版 `initialize`，导致严格服务器拒绝连接

2. **插件市场可靠性** — 大型市场下载克隆整个仓库且无进度提示，忽略取消操作并留下孤立的 Git 状态（#5491）。市场 JSON 验证失败阻止安装（#5582）

3. **会话状态不稳定** — 会话进入永久卡死状态（#4755）、远程会话切换时内存泄漏（#5577）、恢复失败，造成开发者体验不可预测

4. **企业环境缺口** — PowerShell ConstrainedLanguage 错误（#4683）、Windows 沙盒 TCP 阻塞（#5580）、GHE 认证失败（#5571）阻碍企业托管环境的采用

5. **ACP/非交互式对等性** — Fusion 未在 ACP 中广告（#5354）、审批模态框中的工具调用标题隐藏 Shell 命令（#4335）、上下文大小设置无法在不修改默认值的情况下配置，表明交互式和程序化模式之间存在功能差距

6. **检查点/历史污染** — Agent 检查点引用使用用户身份署名（#5323），提示历史包含无关会话条目（#5576），造成开发者工作流噪音

---

*速报结束。下次更新：2026-11-27*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate a GitHub community digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, technical identifiers, code references as-is
4. Use natural technical Chinese, not literal word-for-word translation
5. Handle tables, lists, headings, blockquotes, emoji properly

Let me translate this carefully, maintaining the technical accuracy and natural Chinese flow.

Key terms to translate consistently:
- "Release" → 发布
- "Hot Issues" → 热门议题
- "Key PR Progress" → 重要 PR 进展
- "Feature Request Trends" → 功能需求趋势
- "Developer Pain Points" → 开发者痛点
- "Community" → 社区
- "Bug Fix" → 缺陷修复
- "Feature" → 功能
- "Refactor" → 重构
- "Closed" → 已关闭
- "Open" → 进行中
- "Critical" → 严重
- "security vulnerability" → 安全漏洞

Let me go through section by section.
</think>


# OpenCode 社区速报 — 2026-11-26

## 今日要点

v2.4.2 版本为 Sol 和 Astra 模型带来了 GPT-6.2 system prompt 支持。一个严重的 **Windows 安全漏洞** 已被修复——此前格式错误的 bash 命令可能删除整个驱动器，这深刻提醒了跨平台 shell 转义的复杂性。社区正在积极改进会话管理功能，新增了 archive/unarchive CLI 命令，并恢复了 v1 中的 doom-loop 检测机制。

---

## 发布

### v2.4.2
**发布日期：** 2026-11-26

- **GPT-6.2 System Prompt：** 为 GPT-6.2 Sol 和 Astra 模型更新了 system prompt，包括 `gpt-latest` 别名。
- **OpenCode Go 引导修复：** 连接后模型选择器现在可以正确列出 OpenCode Go。

[Release #66297](https://github.com/anomalyco/opencode/pull/66297)

---

## 热门议题

### 1. 免费套餐问题总览 📌
**Issue [#59387](https://github.com/anomalyco/opencode/issues/59387)** | 410 条评论 | 👍 31

社区最活跃的议题记录了广泛的免费套餐问题：用量限制未重置、"订阅 Go 版"提示弹窗、以及版本兼容错误。410 条评论表明这已造成严重的用户体验摩擦和潜在的用户流失风险。

---

### 2. Agent Teams — 并行多模型支持
**Issue [#12711](https://github.com/anomalyco/opencode/issues/12711)** | 17 条评论 | 👍 24 | **已关闭**

提议采用扁平化 agent 团队，支持命名消息传递和多模型协作，并集成到 TUI。目前 `task` 工具只能串行生成子 agent。24 个 👍 表明社区对并发 agent 编排的强烈需求——这将是 OpenCode 架构的一次根本性转变。

---

### 3. 自定义 Provider 的 GUI 配置选项
**Issue [#33704](https://github.com/anomalyco/opencode/issues/33704)** | 13 条评论 | 👍 4

请求通过 GUI 管理自定义 provider（LM Studio、Jan AI 等），而非手动编辑 JSON 配置。目前需要直接编辑 provider 定义——这对非技术用户是一道门槛。

---

### 4. 在空 Git 仓库中移动会话导致 Worktree 损坏
**Issue [#50979](https://github.com/anomalyco/opencode/issues/50979)** | 11 条评论 | 👍 3

将会话移动到空 git 仓库会静默地将全局项目的 worktree 重定向到目标目录，导致数据丢失和路径混乱。影响使用新仓库工作的用户。

---

### 5. 会话在 Git 根目录而非子目录打开
**Issue [#51191](https://github.com/anomalyco/opencode/issues/51191)** | 9 条评论 | 👍 4

在嵌套的项目文件夹中启动会话时默认定位到仓库根目录，破坏了 `.opencode/skills` 发现机制和本地上下文。已在 [#57358](https://github.com/anomalyco/opencode/pull/57358) 中合并修复。

---

### 6. 严重：Windows `rd /s /q` 删除了整个驱动器
**Issue [#66449](https://github.com/anomalyco/opencode/issues/66449)** | 7 条评论 | **已关闭**

一个严重的安全/正确性缺陷：Windows bash 工具命令中带转义引号的命令被错误解析，导致 `rd /s /q` 递归删除了当前驱动器根目录（27 万个文件）。这暴露了 PowerShell/CMD 转义的脆弱性。

---

### 7. Copilot 模型在共享服务中同步失败
**Issue [#60702](https://github.com/anomalyco/opencode/issues/60702)** | 6 条评论

GitHub Copilot 模型仅在 `--standalone` 模式下同步；桌面端和 TUI 使用的共享后台服务会出现间歇性失败。影响依赖 Copilot 集成的用户。

---

### 8. 桌面通知声音无法配置
**Issue [#41355](https://github.com/anomalyco/opencode/issues/41355)** | 5 条评论 | **已关闭**

每次失败都会触发系统错误提示音，无法静音或按事件类型控制。在网络不稳定的环境下，这变成了一场"蜂鸣声风暴"。相关功能请求 [#66524](https://github.com/anomalyco/opencode/issues/66524) 将此扩展到自定义音频文件。

---

### 9. Edit 工具 "Missing key" 错误
**Issue [#57051](https://github.com/anomalyco/opencode/issues/57051)** | 5 条评论

用户在不同 LLM 和项目中收到 `edit` 工具的 "Missing key" 错误。工具描述可能不充分，导致模型生成了格式错误的参数。

---

### 10. 会话暂停/稍后提醒功能请求
**Issue [#64249](https://github.com/anomalyco/opencode/issues/64249)** | 2 条评论

请求支持将会话暂停到未来某个时间，并在切换器中显示时钟指示器。适用于定时工作流和延迟上下文恢复。

---

## 重要 PR 进展

| PR | 作者 | 类型 | 状态 | 概要 |
|----|------|------|------|------|
| [#66525](https://github.com/anomalyco/opencode/pull/66525) | hearnadam | 功能 | 进行中 | **Code Mode 脚本复用为自定义工具** — 在 `.opencode/tools/` 中保存带类型参数的 `.js` 脚本，实现会话复用。需开启 `codemode_tools` 特性开关。 |
| [#66521](https://github.com/anomalyco/opencode/pull/66521) | Hona | 功能 | 进行中 | **WCAG 2.2 主题校准** — 针对无障碍标准和感知均匀性（OKLCH）校准全部 35 个内置 GUI 主题。 |
| [#66505](https://github.com/anomalyco/opencode/pull/66505) | 1107186916 | 功能 | 进行中 | **会话历史天数设置** — 在 `cli.json` 中新增 `session_history_days` 配置项，用于控制 TUI 会话列表的保留时长。 |
| [#66503](https://github.com/anomalyco/opencode/pull/66503) | oliver-mee | 功能 | 进行中 | **会话归档 CLI 命令** — 新增 `session archive <id>` 和 `session unarchive <id>` 子命令，完善会话生命周期管理。 |
| [#66276](https://github.com/anomalyco/opencode/pull/66276) | ErOr-0 | 缺陷修复 | 进行中 | **Ollama 输出截断** — 限制 Ollama provider 在 agent steps、titles 和 generate 请求中的输出，防止无限循环。 |
| [#62915](https://github.com/anomalyco/opencode/pull/62915) | kraso | 缺陷修复 | 已关闭 | **展示插件错误根因** — 显示可操作的 npm `ERESOLVE` 详情，而非仅显示裸 `NpmInstallFailedError`。 |
| [#66451](https://github.com/anomalyco/opencode/pull/66451) | Tarquinen | 功能 | 已关闭 | **推送问题/回答/错误/权限详情** — 为手机应用通知发送结构化数据，而非依赖截图。 |
| [#66498](https://github.com/anomalyco/opencode/pull/66498) | kitlangton | 重构 | 已关闭 | **基于 Environment 控制 VCS/Snapshot/Worktree** — 阻止远程 workspace 探测主机磁盘；安全与隔离改进。 |
| [#66515](https://github.com/anomalyco/opencode/pull/66515) | WlnJBrn09 | 缺陷修复 | 进行中 | **TUI 问题表单选择样式** — 使用正确的选择背景色，而非硬编码的 raised base。 |
| [#66516](https://github.com/anomalyco/opencode/pull/66516) | WlnJBrn09 | 缺陷修复 | 进行中 | **升级 google-auth-library 至 10.6.1** — 修复 Google Vertex 与 AWS Web Identity Federation 的认证问题。 |

---

## 功能需求趋势

通过对 issues 和 PRs 的分析，我们发现了这些反复出现的新功能方向：

| 类别 | 相关请求 | 示例 |
|------|----------|------|
| **会话管理** | 6+ | 归档/取消归档、暂停/稍后提醒、历史保留、会话状态跨 fork 持久化 |
| **UI/UX 打磨** | 5+ | 自定义通知音、会话外文件树、可折叠问题弹窗、主题对比度修复 |
| **自定义 Provider 管理** | 3+ | Provider 配置 GUI、模型列表管理、本地推理引擎支持 |
| **Agent 编排** | 2+ | 并行 agent（Agent Teams）、doom-loop 检测恢复、多模型协同 |
| **权限/Shell 粒度** | 2+ | 更细粒度的 shell 权限模式、plan 模式通过 bash 工具强制执行 |
| **跨平台稳定性** | 4+ | SSH 连接保活、多显示器 TUI、Windows 路径处理 |

---

## 开发者痛点

1. **免费套餐摩擦：** 社区首要困扰——用量限制未重置、订阅提示弹窗、无清晰的升级路径。410 条评论的总览帖印证了这一点。

2. **Git/嵌套目录边界情况：** 会话/项目行为在空仓库、子目录和 worktree 配置下出现异常。多个相关缺陷同时被反馈。

3. **Windows Shell 转义：** 关键数据丢失事件（#66449）暴露了 PowerShell/CMD 处理的脆弱性。需要系统性修复，而非应急补丁。

4. **插件错误信息不透明：** npm 安装失败仅显示泛化错误，无可操作的详细信息。#62915 正在解决这个问题，但需要更广泛地推广错误暴露机制。

5. **会话 Fork 的副作用：** Fork 出的会话保留过期配置（模型限制、provider 设置），不会拾取变更——一种认知模型错位。

6. **远程 Workspace 隔离：** 当前架构允许远程 workspace 探测主机磁盘；#66498 的重构正在解决这一安全和架构层面的问题。

7. **E2E 测试脆弱性：** 近期 `GET /api/experimental/flag` 未 mock 导致数百次测试失败，暴露了测试基础设施的短板。

---

*数据来源：anomalyco/opencode GitHub 仓库，2026-11-26*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate a Pi community digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, and API/config identifiers in their original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, keeping all the technical elements intact while making it read naturally in Chinese.

Key terms to handle:
- "Pi" - keep as is
- "coremode" → "coremode" (or keep as codemode based on context)
- Issue/PR numbers - keep as is
- Code spans like `cache_warming_decision`, `models.classify()`, `gpt-6-luna-decisions` - keep as is
- Table content - translate the descriptions
- Code blocks - keep content as is
- Links - keep the text structure

Let me go through section by section:

Title: "Pi Community Digest — 2026-11-26" → "Pi 社区周刊 — 2026-11-26"

Today's Highlights → 今日要点

Release section needs careful translation...

Let me do this systematically:
</think>


# Pi 社区周刊 — 2026-11-26

## 今日要点

Pi v1.6.1 随 coremode 中的决策模型集成一同发布，现在 `models.classify()` 可以调用 GitHub Copilot 的 `gpt-6-luna-decisions` 和 Radius 决策模型。社区围绕 Windows 终端清理问题和缓存预热行为展开了热烈讨论，多个 PR 相继落地，改进了优雅关闭、推理算力处理和模型切换时的提示缓存保持。

## 版本发布

### v1.6.1（最新版）
- **coremode 中的决策模型**：`models.classify()` 现已支持 GitHub Copilot 的 `gpt-6-luna-decisions` 和 Radius 决策模型，结果中返回 provider 的 `responseId`。这使得更精细的工具调用门控工作流成为可能。

## 热门 Issue

1. **[#10956](https://github.com/earendil-works/pi/issues/10956)** — `cacheWarming: "idle"` 在扩展处理 `turn_end` 后静默停止 — **19 条评论，开放中**  
   自定义消息或压缩消息进入上下文后，空闲缓存预热不再触发，九月以来全部 507 次 `cache_warming_decision` 事件的 `continuationProbability` 均为 1。长时间会话用户完全失去了缓存刷新收益。

2. **[#8834](https://github.com/earendil-works/pi/issues/8834)** — skills 和 prompt 模板的可选 `pi.namespace` 包字段 — **18 条评论，已关闭**  
   提议为包资源提供统一的命名空间接口，以 `<namespace>:<name>` 格式加载 skills 和模板，带来更清晰的组合与隔离。

3. **[#12133](https://github.com/earendil-works/pi/issues/12133)** — Windows 终端在 stop/exit 后仍保留鼠标/Kitty 输入报告 — **11 条评论，已关闭**  
   退出 Pi 后，PowerShell 被 SGR 鼠标报告和乱码字符淹没。多位用户确认 1.6.0 存在回归；相关修复 PR（#12553、#12564）覆盖了优雅关闭路径。

4. **[#10390](https://github.com/earendil-works/pi/issues/10390)** — Anthropic SSE 解析器对跨网络分块的 CRLF 处理有误 — **11 条评论，已关闭**  
   当 `\r` 和 `\n` 分开到达时，`iterateSseMessages` 将其视为两个换行符，刷新出空事件导致 `Unexpected end of JSON input`。上游已修复。

5. **[#12464](https://github.com/earendil-works/pi/issues/12464)** — GPT-6 请求仍在直接 OpenAI provider 上发送 medium effort + `configuration_update` — **10 条评论，已关闭**  
   继 #12361/#12437 之后的后续：`openai-codex` 已修复，但直接 `openai` provider（Responses API）仍发送错误的 effort 级别和额外请求字段，导致工具轮次推理被压制。

6. **[#4399](https://github.com/earendil-works/pi/issues/4399)** — 在 Windows 上全新安装 pi 后无法运行 agent — **9 条评论，已关闭**  
   npm 和 pnpm 全局安装后在 Windows 11 上静默退出、无报错信息，完全阻断了新用户体验。历时已久的问题现在开始得到处理。

7. **[#11071](https://github.com/earendil-works/pi/issues/11071)** — 在 `AssistantMessage` 中保留结构化的 provider 失败元数据 — **8 条评论，开放中**  
   呼吁为 HTTP 状态码、provider 错误码和重试可行性提供类型化契约。Cherry Studio Mobile 等客户端需要这些信息来实现智能重试逻辑。

8. **[#8829](https://github.com/earendil-works/pi/issues/8829)** — `wrapUIPromptContext` 使用展开复制导致 UI 原型方法丢失 — **7 条评论，开放中**  
   上下文包装器使用 spread 只会复制自有可枚举字段，破坏了带有原型方法的类实例。Pi 自带的 TUI、RPC 和 no-op UI 能正常工作是因为它们都是普通对象。

9. **[#11127](https://github.com/earendil-works/pi/issues/11127)** — 允许配置空闲缓存预热的时间范围 — **6 条评论，开放中**  
   当前 30 分钟默认值与标准 prompt-cache TTL 的 27/54 分钟刷新周期不匹配。长时间运行会话的用户希望可配置时间范围（60–120 分钟）。

10. **[#12420](https://github.com/earendil-works/pi/issues/12420)** — 从 Claude 切换到 Gemini 4（google-vertex）时出现 Function Call Error — **3 条评论，开放中**  
    会话中途切换模型会触发 Vertex 的 `400` 错误："Function call is missing a `thought_signature` in functionCall parts"。这是影响多 provider 工作流的 p0 bug。

## 重要 PR 进展

1. **[#12557](https://github.com/earendil-works/pi/pull/12557)** — `feat(tui,coding-agent)`: 通过 OSC 7577 上报会话恢复命令 — **已关闭**  
   实现 Program Resume Protocol（OSC 7577）：设置 `OSC7577_TOKEN` 的终端可在重启后自动恢复 Pi 会话，省去手动恢复。

2. **[#12562](https://github.com/earendil-works/pi/pull/12562)** — `feat(durable)!`: 彻底删除对话 — **开放中**  
   新增 `Harness.deleteConversations(ids, context)`，中止所有工作（包括后台任务）并永久移除对话及其拥有的子 agent。

3. **[#12505](https://github.com/earendil-works/pi/pull/12505)** — `fix(ai)`: 在 openai-completions 中回放 GitHub Copilot `reasoning_opaque` — **开放中**  
   修复 #12418：Copilot 的 `claude-opus-5.5` 先流式输出 `reasoning_text` delta，再发送单一 `reasoning_opaque` delta；Pi 此前丢弃了 opaque 值，导致回放失败。

4. **[#12539](https://github.com/earendil-works/pi/pull/12539)** — `feat(ai)`: 在 GitHub Copilot 上变更 effort 和工具时保持 prompt cache — **已关闭**  
   关闭 #12316：Copilot 现在在变更思考级别或工具集时保留 prompt cache，与直接使用 Anthropic 和 OpenAI 模型的行为保持一致。

5. **[#12556](https://github.com/earendil-works/pi/pull/12556)** — `feat(coding-agent)`: 对安装遥测和归属遵循 `DO_NOT_TRACK` — **开放中**（Draft）  
   回应公开遥测审计评级 Pi C：添加 `DO_NOT_TRACK=1` 支持用于安装时遥测和归属，与跨工具隐私标准对齐。

6. **[#12543](https://github.com/earendil-works/pi/pull/12543)** — 在 coding agent 中支持 `AGENTS.local.md` — **已关闭**  
   扩展 #7681：Pi 现按顺序检查每个目录下的 `AGENTS.local.md`（在 `AGENTS.override.md` 之后、`AGENTS.md` 之前），支持按项目本地覆盖。

7. **[#12553](https://github.com/earendil-works/pi/pull/12553)** — `fix(coding-agent)`: 在 Windows 上 Ctrl+Break 时优雅关闭 — **已关闭**  
   Pi 此前只监听 SIGTERM 和 SIGHUP，没有处理 SIGBREAK；Ctrl+Break 导致进程立即终止，终端停留在交替屏幕模式且鼠标报告保持启用。

8. **[#12551](https://github.com/earendil-works/pi/pull/12551)** — `fix(ai)`: 为 Bedrock 扁平 `reasoning_effort` 模型发送 `models.dev` 推理算力 — **已关闭**  
   修复 #12462：Bedrock Kimi K3.1 profile 缺少 `thinkingLevelMap`，导致 Pi 提供通用 effort 级别并将 `--thinking max` 限制在 `high`。

9. **[#12552](https://github.com/earendil-works/pi/pull/12552)** — `fix(ai,coding-agent)`: 替换上游已移除的模型 — **已关闭**  
   CI 因上游下架引用的模型而失败：Qwen Token Plan 将 `qwen4-max-preview`（preview）退役，而 `qwen4-max` 进入 GA。

10. **[#12538](https://github.com/earendil-works/pi/pull/12538)** — `fix(tui)`: 慢速搜索时保持 `@` 文件补全响应 — **已关闭**  
    递归搜索后仍显示过时建议；接受建议时只替换旧前缀。现在搜索慢时直接显示直接匹配结果，并正确替换 token。

## 热门讨论

### Ideas

1. **[#12528](https://github.com/earendil-works/pi/discussions/12528)** — VS Code 原生 Agent Harness 集成 — **2 👍**  
   提议将 Pi 集成到 VS Code 的原生 Agent Harness 中，与 Claude Code、Codex 和 GitHub Copilot 并列，利用 VS Code 统一的 agent harness 选择界面。

### Show & Tell

2. **[#12559](https://github.com/earendil-works/pi/discussions/12559)** — `local-decider`: 在你自己的 GPU 上用决策模型守护 Pi 的工具调用 — **1 👍**  
   社区扩展工具：在工具调用前运行小型决策模型，让用户在 Pi 自主工作流中批准或拦截 `rm -rf`、强制推送等高风险操作。

3. **[#12530](https://github.com/earendil-works/pi/discussions/12530)** — 预发送 PII 脱敏器 + 动态 `models.json` 上下文大小调整（适配本地 27B 运行） — **1 👍**  
   记录了在 16GB MacBook 上运行本地模型（Qwen3.5-9B、Qwen3.8-27B）的两个痛点：静态 32K 上下文窗口会将 `max_tokens` 压缩到 1，需要根据可用内存动态调整。

## 功能请求趋势

对开放 issue 和讨论的分析揭示了以下主导需求向量：

| 主题 | 信号 | 描述 |
|------|------|------|
| **缓存预热控制** | #10956, #11127 | 用户需要可配置的空闲缓存预热时间范围，以及修复扩展处理 turn 事件时的静默停止问题 |
| **Windows 终端状态清理** | #12133, #12564, #12553 | 崩溃或 Ctrl+Break 时鼠标/键盘报告和交替屏幕清理的反复出现问题 |
| **Provider 元数据保留** | #11071 | 需要类型化契约来传递 provider 错误码和重试可行性，以支持移动端/CLI 客户端 |
| **Pi Durable 可扩展性** | #10852, #12471 | 客户端工具执行、人工审批工作流和独立工具调用批处理指导 |
| **命名空间/包隔离** | #8834 | skills 和模板的可选命名空间支持，以实现更干净的包组合 |
| **模型切换鲁棒性** | #12420, #12464 | 会话中 provider 切换需要更好地处理 schema 差异和 effort 参数 |
| **遥测退出机制** | #12556 | 安装时遥测的 `DO_NOT_TRACK` 支持，与跨平台隐私标准对齐 |

## 开发者痛点

1. **Windows 关闭混乱**：Pi 非正常死亡（kill -9、OOM、Ctrl+Break）后终端处于损坏状态，提示符中充满乱码。用户反复遇到此问题；修复覆盖面在改善但边缘情况依然存在。

2. **Prompt cache 脆弱性**：缓存在扩展、effort 变更和工具集修改时行为不一致，尤其在 GitHub Copilot 上。#12539 的修复有所帮助，但跨 provider 的缓存行为仍很复杂。

3. **SSE 分块边界 bug**：Anthropic SSE 解析器对跨网络分块的 CRLF 处理有误，导致静默的 turn 中止。流式解析器需要仔细的状态管理。

4. **Windows 安装摩擦**：在 Windows 11 上 npm/pnpm 全局安装后静默失败阻断了 onboarding。错误可见性很差。

5. **静态模型目录假设**：硬编码的上下文窗口在本地模型运行时会出问题——内存受限的硬件需要动态 `max_tokens` 计算。`models.json` schema 需要灵活性。

6. **Auth 符号链接竞态**：并发 Pi 进程通过不同路径（符号链接）打开 `auth.json` 可能在 OAuth 刷新令牌上产生竞态，这是安全和可靠性隐患。

---

*本周刊数据来源于 [earendil-works/pi](https://github.com/earendil-works/pi) 在 2026-11-26 的活动。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the content while maintaining the exact Markdown structure
2. Keep URLs, code references, issue numbers, version tags, file paths, and technical identifiers in their original form
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output only the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

---

# Qwen Code Community Digest

**日期：** 2026-11-26
**来源：** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. 今日要闻

Qwen Code 团队发布了 **v1.0.0-preview.2**，将 Qwen4-Max（1M 上下文窗口，支持图片/视频）加入订阅目录，并改进了积分余额提示和升级相关的用户体验。一个 **P1 安全漏洞**（#18379）被披露，涉及非交互模式下文件访问权限问题，需要立即处理。CI 基础设施持续存在不稳定性，capture-tui 测试（#18402）被标记为需要修复不稳定问题，ARM64 上的网络不稳定（#18394）在之前的修复后仍未完全解决。

---

## 2. 版本发布

### v1.0.0-preview.2
**链接：** [GitHub Releases](https://github.com/QwenLM/qwen-code/releases) 上的发布产物

- **订阅目录新增 Qwen4-Max**：1M 上下文窗口，支持图片和视频输入
- **积分重置交互优化**：订阅积分不足时显示视觉倒计时
- **升级命令**：新增 `/upgrade` 命令，可打开订阅方案页面


- **订阅请求头更新**：调整了面向 QwenCode u 的请求负载结构

---

## 3. 热门 Issue

I'll track the most discussed issues with key details, focusing on the highest-traffic CI failure that significantly impacts release readiness. The issue #18252 has generated over 73 sub-issues, making it the most critical problem currently blocking development progress.

The security vulnerability (#18379) involving file access permissions in non-interactive mode requires immediate attention. This critical issue potentially exposes system files outside the intended workspace, posing a significant risk to user data security.

A UX regression (#15686) has emerged where user input gets blocked during active tool execution, causing unexpected message queuing and interruption of workflow. This impacts user experience by preventing immediate interaction during complex task processing.

File watching mechanisms (#16708) show a critical bug in chokidar 4.0.3, potentially causing silent file loss in hook and event-driven workflows. The issue specifically affects Windows platform settings, rendering project configuration hot-reload ineffective after startup.

A provider API compatibility problem (#12928) involves hard-coded temperature parameters that trigger HTTP 400 errors, indicating a need for more flexible configuration in language model interactions.

The automated deflake approved for the capture-tui test (#18402) addresses a flaky test scenario blocking reliable CI execution, with a race condition involving send and stop button interactions potentially causing unexpected double-firing behavior.

ARM64 CI is experiencing network instability, with 22 specifications skipping bootRetry despite previous mitigation attempts. These issues collectively highlight infrastructure and interaction design challenges requiring targeted resolution.

The Qwen Code project continues advancing with key enhancements across multiple domains. Web-shell improvements focus on optional prompt history and session task visualization. Core fixes target JSON parsing precision, while CI/CD enhancements strengthen security controls. Performance optimization includes shallow-checkout strategies for faster release preparation.

Managed agent capabilities expand through workspace skill admission and external runtime integration. Internationalization efforts address nuanced Russian language translation complexities. UI refinements include Git status badge visibility restoration.

Key unresolved challenges center on CI reliability, particularly around test stability on ARM64 platforms. Windows-specific nuances and permission boundary configurations remain active investigation areas, with interactive CLI user experience gaps also under focused review.

The community request highlights advanced UI panel capabilities like search, filtering, sorting, and timestamp tracking. Emerging feature requests include workspace-level extension installation and external runtime embedding strategies targeting core functionality and platform integration.

Developer feedback indicates critical pain points around CI reliability, with test flakiness emerging as the most discussed theme. Specific challenges include unpredictable E2E test failures, problematic capture-tui test timing, and persistent ARM64 runner network instability generating significant issue volume.

Windows-specific challenges involve project settings hot-reload mechanisms and platform-specific path watching complexities. Security considerations reveal potential file access vulnerabilities in non-interactive mode, with approval mode inheritance presenting inconsistent cross-managed agent definition behaviors.

Interactive CLI user experience gaps manifest through command queuing problems, keyboard repeat race conditions, and language switch scope confusion. File watching mechanisms expose silent failures stemming from chokidar's snapshot-then-watch synchronization gaps.

The technical digest concludes with a specific date reference, marking the current reporting period's endpoint.

I'll continue the thought about preserving technical references. The translation maintains critical technical identifiers like issue numbers, version tags, and file paths in their original form. Code references and link targets remain untouched, ensuring technical precision. Numerical and date representations stay consistent with the source document.

For numerical and date representations, I'm keeping numbers exactly as they appear - 1, 2, 3, 4, 5, 7, 51, 73+ are preserved verbatim. The date 2026-11-26 and 48 hours remain unchanged, reflecting a meticulous approach to technical translation that prioritizes accuracy and original context.

The i18n section's plural handling in Russian requires nuanced linguistic consideration. I'll need to carefully translate the text while preserving the linguistic complexity of plural forms in Russian, ensuring the translation captures both technical and linguistic subtleties.

The hard-coded temperature parameter suggests a specific implementation detail that needs precise translation, maintaining the technical context of the code reference.

The race condition description provides clear technical context for translation, highlighting a synchronization issue during user interaction.

The table structure demands meticulous attention to column alignment, ensuring the translation preserves the original formatting and readability of the content.

I'll carefully translate each section, maintaining the technical precision and structural integrity of the original document. The goal is to create a Chinese version that reads naturally while preserving the technical nuances of the source material.

The community digest requires a careful balance between linguistic adaptation and technical accuracy, ensuring that each term and description is appropriately rendered in Simplified Chinese.
</think>


# Qwen Code 社区周报

**日期：** 2026-11-26
**来源：** [github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. 今日要闻

Qwen Code 团队发布了 **v1.0.0-preview.2**，将 Qwen4-Max（1M 上下文窗口，支持图片/视频）加入订阅目录，并改进了积分余额提示和升级相关的用户体验。一个 **P1 安全漏洞**（#18379）被披露，涉及非交互模式下文件访问权限问题，需要立即处理。CI 基础设施持续存在不稳定性，capture-tui 测试（#18402）被标记为需要修复不稳定问题，ARM64 上的网络不稳定（#18394）在之前的修复后仍未完全解决。

---

## 2. 版本发布

### v1.0.0-preview.2
**链接：** [GitHub Releases](https://github.com/QwenLM/qwen-code/releases) 上的发布产物

- **订阅目录新增 Qwen4-Max**：1M 上下文窗口，支持图片和视频输入
- **积分重置交互优化**：订阅积分不足时显示视觉倒计时
- **升级命令**：新增 `/upgrade` 命令，可打开订阅方案页面
- **订阅请求头更新**：调整了面向 QwenCode u 的请求负载结构

---

## 3. 热门 Issue

| # | Issue | 优先级 | 评论数 | 关注原因 |
|---|-------|----------|----------|----------------|
| **#18252** | [Main CI failed: E2E Tests – cron tools test](https://github.com/QwenLM/qwen-code/issues/18252) | 待定 | 51 | 流量最高的 CI 失败议题；关联 73+ 条子问题；影响发布就绪状态 |
| **#18379** | [`qwen -p` 在非交互模式下读取工作区之外的文件](https://github.com/QwenLM/qwen-code/issues/18379) | **P1** | 2 | **安全漏洞**：非交互模式绕过 trusted-folder 边界 |
| **#15686** | [活动 Goal 在轮次完成前阻塞用户输入](https://github.com/QwenLM/qwen-code/issues/15686) | P2 | 7 | UX 回退：活动工具执行期间禁止 Enter 发送和粘贴消息 |
| **#16708** | [FileChangedWatcher 在新增子目录后永久遗漏文件监控](https://github.com/QwenLM/qwen-code/issues/16708) | P2 | 5 | Chokidar 4.0.3 静默文件丢失 bug；影响 hook/event 工作流 |
| **#17489** | [Windows：项目设置在启动后无法热重载](https://github.com/QwenLM/qwen-code/issues/17489) | P2 | 3 | Windows 专属回退；`qwen mcp add --scope project` 在启动后无效 |
| **#12928** | [移除内部模型请求中硬编码的 temperature](https://github.com/QwenLM/qwen-code/issues/12928) | P2 | 3 | Provider API 兼容性；当前 `temperature: 0.2` 触发 HTTP 400 |
| **#18402** | [deflake: capture-tui 测试在信号时序上不稳定](https://github.com/QwenLM/qwen-code/issues/18402) | **P1** | 2 | 不稳定测试阻塞可靠 CI；已批准自动化 deflake |
| **#18401** | [`/btw` 命令在工具执行期间被挂起至轮次结束](https://github.com/QwenLM/qwen-code/issues/18401) | P2 | 2 | 侧聊命令忽略提示引导；意外进入队列 |
| **#18374** | [键盘重复在提交后立即取消提示](https://github.com/QwenLM/qwen-code/issues/18374) | P2 | 2 | 竞态条件：发送→停止按钮切换与按键重复导致双触发 |
| **#18394** | [E2E smoke 测试在 ARM64 上因 ERR_NETWORK_CHANGED 而失败](https://github.com/QwenLM/qwen-code/issues/18394) | P2 | 1 | 22 个 spec 跳过 bootRetry；之前的缓解措施不足；阻塞 ARM64 CI |

---

## 4. 关键 PR 进展

| # | PR | 类别 | 状态 | 概要 |
|---|-----|----------|--------|---------|
| **#18399** | [feat: 将方向键历史提示设为可选](https://github.com/QwenLM/qwen-code/pull/18399) | web-shell | OPEN | 新设置"方向键调出历史"默认开启；Ctrl+R 打开历史面板；关闭后启用光标/补全导航 |
| **#18112** | [feat: 在会话内展示和控制定时任务](https://github.com/QwenLM/qwen-code/pull/18112) | web-shell | OPEN | 会话内定时任务 UI（cron、loop 唤醒、计划任务）；内联暂停/立即执行/删除/停止控制 |
| **#18346** | [fix: 当工具参数以损坏文本到达时指向 JSON 错误](https://github.com/QwenLM/qwen-code/pull/18346) | core | OPEN | 解析错误现显示精确失败位置及标记；改善模型调试体验 |
| **#18370** | [fix(ci): 对 authority-surface PR 和环境凭证探测闭.fail](https://github.com/QwenLM/qwen-code/pull/18370) | ci-cd | OPEN | 加强自动化分类/评审逻辑；判断 PR 可达性而非仅短语匹配 |
| **#18373** | [perf: prepare job 浅克隆并获取版本标签（不含 tree）](https://github.com/QwenLM/qwen-code/pull/18373) | release | OPEN | Release 准备浅克隆；标签获取不含 blob 下载；CI 加速 |
| **#18099** | [fix(managed-agent): 允许外部 Workspace 创建时注入会话技能](https://github.com/QwenLM/qwen-code/pull/18099) | managed-agent | OPEN | 外部 Workspace 创建现接受调用方提供的技能目录 |
| **#18389** | [feat: 支持嵌入外部 Runtime 和 Workspace 执行](https://github.com/QwenLM/qwen-code/pull/18389) | managed-agent | **MERGED** | 外部 Runtime 客户端支持嵌入宿主；Workspace 恢复绑定到物化回执 |
| **#18390** | [fix: 保留继承的 approval modes](https://github.com/QwenLM/qwen-code/pull/18390) | managed-agent | **MERGED** | 空 approval-mode 现生成空策略；显式值经过校验；继承关系保留 |
| **#18359** | [fix: 保持紧凑 Git 状态徽章可见](https://github.com/QwenLM/qwen-code/pull/18359) | web-shell | **MERGED** | 恢复缺失的严重性徽章；三档响应式分支指示器；调整状态栏排版 |
| **#18320** | [fix(i18n): 修正俄语计数和设置描述](https://github.com/QwenLM/qwen-code/pull/18320) | i18n | OPEN | 正确的俄语复数形式（1/2-4/5+）；单数能力名称；区分任务列表标签 |

---

## 5. 功能请求趋势

### Web Shell 与 UI 增强
- **#17772**: 归档会话面板需要搜索、工作区筛选、排序、归档时间戳
- **#17142**: 工作区选择器和侧边栏应支持按名称筛选
- **#18339**: 支持在工作区级别安装扩展，路径为 `.qwen/extensions/`
- **#18399**: 方向键历史提示开关（在 PR #18399 中已实现）

### 核心功能
- **#18386**: 在 managed-agent 中嵌入外部 Runtime 和 Workspace 执行
- **#15686**: 在活动轮次期间将用户输入投递到下一个安全的采样边界
- **#12928**: 移除内部分类请求中硬编码的 temperature

### 平台与集成
- **#18240**: 生态系统列表提案：Niro iPhone 伴侣应用
- **#18298**: 布尔值设置在 schema 默认值为 undefined 时不应渲染为 OFF（部分已解决）

---

## 6. 开发者痛点

### CI 可靠性（反复出现）
本周期讨论最多的话题是 **CI 不稳定性**：
- E2E 测试失败且无法识别具体测试用例（#18342）
- capture-tui 测试在信号处理时序上超时（#18271、#18402）
- ARM64 runner 池遭遇 `ERR_NETWORK_CHANGED` 中断风暴（#18394）
- 48 小时内自动生成了 20+ 个 CI 失败议题

### Windows 专属问题
- 项目设置在启动后热重载失效（#17489）
- 暗示平台相关的路径监听存在分歧

### 权限与安全边界混淆
- `qwen -p` 安全漏洞（#18379）：非交互模式可读取 trusted folder 之外的文件
- Approval mode 继承在 managed-agent 定义中不一致（#18390）

### 交互式 CLI UX 缺口
- `/btw` 命令意外进入队列（#18401）
- 提交后键盘重复导致竞态条件（#18374）
- 语言切换命令作用于错误的作用域（#18391）

### 文件监听静默失败
- Chokidar 先快照再监听的间隙导致永久遗漏文件通知（#16708）

---

**周报完**

*生成日期：2026-11-26 | 数据窗口：24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*