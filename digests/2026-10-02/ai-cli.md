# AI CLI 工具社区动态日报 2026-10-02

> 生成时间: 2026-10-02 01:47 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this entire English report into Simplified Chinese (简体中文), following the detailed translation rules provided. Let me go through it carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, project names, version numbers, issue numbers in original form
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

---

## 1. Ecosystem Overview

The AI CLI tools landscape in late 2026 shows a mature but rapidly evolving ecosystem. Major providers (Anthropic, OpenAI, Google, GitHub) have shipped production-grade CLIs with distinct philosophical approaches—from Claude Code's plugin-centric extensibility to Qwen Code's managed agent architecture. Meanwhile, community-driven projects (OpenCode, Pi, Qwen Code) demonstrate that independent development continues to push innovation in token optimization, memory management, and multi-provider flexibility. The convergence around MCP (Model Context Protocol) as a standard for tool interoperability is now nearly universal, though implementations vary significantly in reliability and feature completeness.

2026 年底的 AI CLI 工具生态已趋于成熟但仍快速演进。主流厂商（Anthropic、OpenAI、Google、GitHub）都已推出生产级 CLI，各自理念差异明显——从 Claude Code 的插件化扩展架构到 Qwen Code 的托管 Agent 架构。同时，社区驱动的项目（OpenCode、Pi、Qwen Code）表明独立开发仍在推动 token 优化、内存管理和多提供商灵活性的创新。围绕 MCP（Model Context Protocol）作为工具互操作标准的趋同已成为主流，但在可靠性和功能完善程度上，各实现差异显著。

---

## 2. Activity Comparison

| Tool | Issues | PRs | Discussions | Releases (24h) |


| **Claude Code** | ~50 (active) | ~40 | ~15 | v2.1.287 |
| **OpenAI Codex** | ~50 (active) | ~40 | ~15 | v0.160.0, v0.162.0-alpha.2 |
| **Gemini CLI** | ~50 (active) | ~40 | ~15 | v0.64.0-nightly.20261002 |
| **Copilot CLI** | ~50 (active) | 1 | ~15 |

The comparison table tracks activity across major AI CLI tools over a 24-hour period. Claude Code, OpenAI Codex, and Gemini CLI each show similar engagement with around 50 active issues and 40 PRs, while Copilot CLI has minimal pull request activity despite high issue volume.

| **OpenCode** | ~50 (active) | ~10 | ~15 | None |
| **Pi** | ~30 (active) | 12 | 1 | v1.0.0 |
| **Qwen Code** | ~20 (active) | ~10 | N/A* | v0.24.7-nightly.20261001 |

*Qwen Code does not use Discussions; uses Issues exclusively.

OpenCode maintains moderate activity with fewer PRs, Pi shows lower engagement across metrics, and Qwen Code focuses exclusively on Issues rather than Discussions.

---

## Notes:

- All major tools show healthy activity levels with significant community engagement
- Pi and Qwen Code are more lean in issue volume but maintain active PR pipelines
- OpenCode has lower PR volume despite high issue activity—suggests stricter review or smaller core team

---

## 3. Shared Feature Directions

| Feature Direction | Tools Affected | Specific Needs |
|------------------|----------------|----------------|
| **Plugin/Mod Extensibility** | Claude Code, OpenCode, Qwen Code | Deeper behavioral modification, plugin access to core APIs, session capabilities parity |
| **Multi-Model / BYOK Flexibility** | Claude Code, Copilot CLI, OpenCode | Multiple BYOK models, enterprise model settings, model override controls |
| **Token Optimization** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Prompt cache improvements, context governance, surgical file reads (AST-aware), history windowing |
| **MCP Reliability** | Claude Code, Copilot CLI, Gemini CLI, OpenCode | Connection retry logic, OAuth refresh handling, Unix socket support, server name matching |
| **Session Persistence & Recovery** | Claude Code, Gemini CLI, OpenCode, Pi, Qwen Code | Durable sessions, atomic state persistence, corruption recovery, session takeover |
| **Sandboxing & Security** | Claude Code, Copilot CLI, Gemini CLI, Qwen Code | OS-level sandboxing, credential management, broker authentication, HTTPS enforcement |
| **Windows/Platform Parity** | Claude Code, Copilot CLI, Gemini CLI, OpenCode | Console behavior, sandbox setup, path handling, Wayland/browser agent support |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Mod-based extensibility, enterprise integration | Enterprise devs, power users | Deep plugin hooks, side-agent "You should know" mod |
| **OpenAI Codex** | Agentic coding, VS Code/browser integration | VS Code users, web developers | Agent command center, task browsing, transcript selection |
| **Gemini CLI** | CLI-native UX, memory management | CLI-first developers | ChatRecordingService delta patching, bounded history |
| **Copilot CLI** | GitHub ecosystem, sandbox automation | GitHub users, enterprise IT | CA trust automation, MCP OAuth, sandboxed commands |
| **OpenCode** | Provider flexibility, cost transparency | Multi-cloud users | Multi-provider support, cost reporting, lean deployments |
| **Pi** | Managed agent lifecycle, durability | Advanced multi-agent workflows | Dual-path architecture, durable sessions, token governance |
| **Qwen Code** | Managed agent platform, security | Enterprise multi-tenant | Broker authentication, workspace binding, staged delivery |

**Key Differentiators:**

- Claude Code leads in extensibility through Mods; Qwen Code pursues managed agent architecture with broker authentication. Copilot CLI differentiates on GitHub ecosystem tight integration; OpenCode on multi-provider flexibility. Pi uniquely targets managed agent durability with lifecycle management. Gemini CLI emphasizes CLI-native UX with aggressive memory optimization.

---

## 5. Community Momentum & Maturity

### High Momentum (Active Development)
- **Claude Code** — 230+ comment issue (#91870 on Mods), v2.1.287 shipped with major features, high community engagement
- **Gemini CLI** — Active security (gVisor/ACP fixes), memory optimization (ChatRecordingService), performance work
- **Qwen Code** — Strong architectural work (dual-path managed agents), security hardening, durable sessions

### Moderate Momentum (Steady Progress)
- **OpenAI Codex** — Consistent releases, Windows reliability focus, but fewer community discussions
- **Pi** — v1.0.0 major release, shrinkwrap fix in progress, active security patches
- **Copilot CLI** — Maintenance mode with targeted fixes, lower community volume but stable

### Lower Activity (Fewer Contributors)
- **OpenCode** — Lower PR volume despite high issue count; potential bottleneck in review

### Maturity Indicators
- **Copilot CLI** — Mature enterprise features (CA trust, unattended setup)
- **Claude Code** — Established plugin ecosystem with Mods extension
- **Qwen Code** — Early-stage but architecturally sophisticated (managed agents, broker auth)

---

## 6. Trend Signals

### Signals for Decision-Makers

1. **Extensibility is the next battlefield** — Claude Code's Mods, OpenCode plugins, and Qwen Code managed hooks indicate that base functionality is table-stakes; differentiation now comes from how deeply third parties can customize behavior.

2. **MCP is becoming infrastructure** — Every tool is investing in MCP reliability (retry logic, OAuth refresh, connection handling). The protocol has won; implementation maturity varies.

3. **Token optimization is a primary concern** — Multiple communities flag token waste from system prompts, tool schemas, and context files. Expect aggressive caching, lazy loading, and AST-aware tools to become standard.

4. **Session durability is a premium feature** — Managed agent architectures (Pi, Qwen Code) and session recovery (Claude Code, Gemini CLI) show that long-running, interruptible workflows are increasingly expected.

5. **Windows enterprise support remains uneven** — Despite years of development, Windows-specific bugs persist (console flashing, sandbox setup, path handling). Organizations with Windows-first workflows face more friction.

6. **Security is tightening** — Broker authentication (Qwen Code), HTTPS enforcement (Copilot CLI), confinement guards (Qwen Code), and sandbox improvements across tools indicate a shift toward enterprise-ready security postures.

### Developer Takeaway

If choosing an AI CLI tool today:

- **For maximum extensibility**: Claude Code
- **For GitHub-integrated workflows**: Copilot CLI  
- **For multi-provider flexibility**: OpenCode
- **For CLI-native pure experience**: Gemini CLI
- **For managed agent platforms**: Pi or Qwen Code

---

*Report generated from 2026-10-02 community digest data across seven AI CLI tools.*

---

现在我需要将这些内容翻译成中文，遵循用户提供的规则。

---

# 跨工具对比：AI CLI 工具生态报告

## 1. 生态概览

2026 年底的 AI CLI 工具生态已趋于成熟但仍快速演进。主流厂商（Anthropic、OpenAI、Google、GitHub）都已推出生产级 CLI，各自理念差异明显——从 Claude Code 的插件化扩展架构到 Qwen Code 的托管 Agent 架构。同时，社区驱动的项目（OpenCode、Pi、Qwen Code）表明独立开发仍在推动 token 优化、内存管理和多提供商灵活性的创新。围绕 MCP（Model Context Protocol）作为工具互操作标准的趋同已成为主流，但在可靠性和功能完善程度上，各实现差异显著。

---

## 2. 活跃度对比

| 工具 | Issues | PRs | Discussions | 发布 (24h) |
|------|--------|-----|-------------|------------|
| **Claude Code** | ~50 (活跃) | ~40 | ~15 | v2.1.287 |
| **OpenAI Codex** | ~50 (活跃) | ~40 | ~15 | v0.160.0, v0.162.0-alpha.2 |
| **Gemini CLI** | ~50 (活跃) | ~40 | ~15 | v0.64.0-nightly.20261002 |
| **Copilot CLI** | ~50 (活跃) | 1 | ~15 | v1.0.92-0 |
| **OpenCode** | ~50 (活跃) | ~10 | ~15 | 无 |
| **Pi** | ~30 (活跃) | 12 | 1 | v1.0.0 |
| **Qwen Code** | ~20 (活跃) | ~10 | N/A* | v0.24.7-nightly.20261001 |

*Qwen Code 不使用 Discussions；仅使用 Issues。

**备注：**

- 所有主流工具都表现出健康的活跃度水平，社区参与度显著
- Pi 和 Qwen Code 的 issue 数量较少，但仍保持活跃的 PR 流程
- OpenCode 的 issue 数量高但 PR 数量较低——表明审核更严格或核心团队规模较小

---

## 3. 共同功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **插件/Mod 可扩展性** | Claude Code、OpenCode、Qwen Code | 更深层的

行为修改、插件访问核心 API、会话能力一致性 |
| **多模型/BYOK 灵活性** | Claude Code、Copilot CLI、OpenCode | 多 BYOK 模型、企业模型设置、模型覆盖控制 |
| **Token 优化** | Claude Code、OpenCode、Pi、Qwen Code | 提示缓存改进、上下文治理、精准文件读取（AST 感知）、历史窗口化 |
| **MCP 可靠性** | Claude Code、Copilot CLI、OpenCode、Qwen Code | 连接重试逻辑、OAuth 刷新处理、Unix 套接字支持、服务器名称匹配 |
| **会话持久化与恢复** | Claude Code、Copilot CLI、OpenCode、Pi、Qwen Code | 持久会话、原子状态持久化、损坏恢复、会话接管 |
| **沙箱与安全** | Claude Code、Copilot CLI、Qwen Code | 操作系统级沙箱、凭据管理、代理认证、HTTPS 强制 |
| **Windows/平台一致性** | Claude Code、Copilot CLI、OpenCode | 控制台行为、沙箱设置、路径处理、Wayland/浏览器代理支持 |

---

## 4. 差异化分析

| 工具 | 主要定位 | 目标用户 | 技术方案 |
|------|----------|----------|----------|
| **Claude Code** | Mod 扩展、企业集成 | 企业开发者、高级用户 | 深度插件钩子、辅助代理"你应该知道"Mod |
| **OpenAI Codex** | 代理编码、VS Code/浏览器集成 | VS Code 用户、Web 开发者 | 代理命令中心、任务浏览、转录选择 |
| **Gemini CLI** | CLI 原生 UX、内存管理 | CLI 优先开发者 | ChatRecordingService 增量修补、有界历史 |
| **Copilot CLI** | GitHub 生态、沙箱自动化 | GitHub 用户、企业 IT | CA 信任自动化、MCP OAuth、沙箱命令 |
| **OpenCode** | 提供商灵活性、成本透明 | 多云用户 | 多提供商支持、成本报告、精简部署 |
| **Pi** | 托管代理生命周期、持久性 | 高级多代理工作流 | 双路径架构、持久会话、token 治理 |
| **Qwen Code** | 托管代理平台、安全 | 企业多租户 | 代理认证、工作区绑定、分阶段交付 |

**关键差异化：**

- Claude Code 以 Mod 扩展性领先；Qwen Code 采用带代理认证的托管代理架构
- Copilot CLI 依托 GitHub 生态深度集成实现差异化；OpenCode 以多提供商灵活性著称
- Pi 独树一帜地专注托管代理的持久性和生命周期管理
- Gemini CLI 强调 CLI 原生体验，在内存优化上更为激进

---

## 5. 社区活力与成熟度

### 高活力（活跃开发）
- **Claude Code** — 230+ 评论的 issue（#91870 关于 Mods），v2.1.287 重大功能发布，社区参与度高
- **Gemini CLI** — 积极的安全修复（gVisor/ACP）、内存优化（ChatRecordingService）、性能改进
- **Qwen Code** — 强大的架构工作（双路径托管代理）、安全加固、持久会话

### 中等活力（稳步推进）
- **OpenAI Codex** — 稳定发布，专注 Windows 可靠性，但社区讨论较少
- **Pi** — v1.0.0 重大发布，shrinkwrap 修复进行中，积极的安全补丁
- **Copilot CLI** — 维护模式，精准修复，社区音量较低但稳定

### 较低活跃（贡献者较少）
- **OpenCode** — issue 多但 PR 少；可能存在审核瓶颈

### 成熟度指标
- **Copilot CLI** — 成熟的企业功能（CA 信任、无人值守安装）
- **Claude Code** — 成熟的插件生态，Mod 扩展
- **Qwen Code** — 早期阶段但架构成熟（托管代理、代理认证）

---

## 6. 趋势信号

### 决策者信号

1. **可扩展性成为新战场** — Claude Code 的 Mods、OpenCode 插件和 Qwen Code 托管钩子表明基础功能已成标配；差异化现在取决于第三方能多深入地定制行为。

2. **MCP 正在成为基础设施** — 每个工具都在投资 MCP 可靠性（重试逻辑、OAuth 刷新、连接处理）。协议已胜出；实现成熟度各异。

3. **Token 优化是首要关切** — 多个社区指出系统提示、工具模式和上下文文件的 token 浪费问题。预计激进缓存、延迟加载和 AST 感知工具将成为标准。

4. **会话持久性是一项高级功能** — 托管代理架构（Pi、Qwen Code）和会话恢复（Claude Code、Gemini CLI）表明长时间运行、可中断的工作流程正逐渐成为预期。

5. **Windows 企业支持仍不均衡** — 尽管开发多年，Windows 特定问题依然存在（控制台闪烁、沙箱设置、路径处理）。Windows 优先工作流的组织面临更多困难。

6. **安全正在收紧** — 代理认证（Qwen Code）、HTTPS 强制（Copilot CLI）、限制防护（Qwen Code）以及各工具的沙箱改进，表明向企业级安全姿态的转变。

### 开发者建议

如果现在选择 AI CLI 工具：

- **最大化可扩展性**：Claude Code
- **GitHub 集成工作流**：Copilot CLI  
- **多提供商灵活性**：OpenCode
- **纯 CLI 原生体验**：Gemini CLI
- **托管代理平台**：Pi 或 Qwen Code

---

*本报告基于 2026-10-02 七个 AI CLI 工具的社区摘要数据生成。*</think>

# 跨工具对比：AI CLI 工具生态报告

## 1. 生态概览

2026 年底的 AI CLI 工具生态已趋于成熟但仍快速演进。主流厂商（Anthropic、OpenAI、Google、GitHub）都已推出生产级 CLI，各自理念差异明显——从 Claude Code 的插件化扩展架构到 Qwen Code 的托管 Agent 架构。同时，社区驱动的项目（OpenCode、Pi、Qwen Code）表明独立开发仍在推动 token 优化、内存管理和多提供商灵活性的创新。围绕 MCP（Model Context Protocol）作为工具互操作标准的趋同已成为主流，但在可靠性和功能完善程度上，各实现差异显著。

---

## 2. 活跃度对比

| 工具 | Issues | PRs | Discussions | 发布 (24h) |
|------|--------|-----|-------------|------------|
| **Claude Code** | ~50 (活跃) | ~40 | ~15 | v2.1.287 |
| **OpenAI Codex** | ~50 (活跃) | ~40 | ~15 | v0.160.0, v0.162.0-alpha.2 |
| **Gemini CLI** | ~50 (活跃) | ~40 | ~15 | v0.64.0-nightly.20261002 |
| **Copilot CLI** | ~50 (活跃) | 1 | ~15 | v1.0.92-0 |
| **OpenCode** | ~50 (活跃) | ~10 | ~15 | 无 |
| **Pi** | ~30 (活跃) | 12 | 1 | v1.0.0 |
| **Qwen Code** | ~20 (活跃) | ~10 | N/A* | v0.24.7-nightly.20261001 |

*Qwen Code 不使用 Discussions；仅使用 Issues。

**备注：**

- 所有主流工具都表现出健康的活跃度水平，社区参与度显著
- Pi 和 Qwen Code 的 issue 数量较少，但仍保持活跃的 PR 流程
- OpenCode 的 issue 数量高但 PR 数量较低——表明审核更严格或核心团队规模较小

---

## 3. 共同功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **插件/Mod 可扩展性** | Claude Code、OpenCode、Qwen Code | 更深层的功能定制、插件访问核心 API、会话能力一致性 |
| **多模型/BYOK 灵活性** | Claude Code、Copilot CLI、OpenCode | 多 BYOK 模型、企业模型设置、模型覆盖控制 |
| **Token 优化** | Claude Code、OpenCode、Pi、Qwen Code | 提示缓存改进、上下文治理、精准文件读取（AST 感知）、历史窗口化 |
| **MCP 可靠性** | Claude Code、Copilot CLI、OpenCode、Qwen Code | 连接重试逻辑、OAuth 刷新处理、Unix 套接字支持、服务器名称匹配 |
| **会话持久化与恢复** | Claude Code、Copilot CLI、OpenCode、Pi、Qwen Code | 持久会话、原子状态持久化、损坏恢复、会话接管 |
| **沙箱与安全** | Claude Code、Copilot CLI、Qwen Code | 操作系统级沙箱、凭据管理、代理认证、HTTPS 强制 |
| **Windows/平台一致性** | Claude Code、Copilot CLI、OpenCode | 控制台行为、沙箱设置、路径处理、Wayland/浏览器代理支持 |

---

## 4. 差异化分析

| 工具 | 主要定位 | 目标用户 | 技术方案 |
|------|----------|----------|----------|
| **Claude Code** | Mod 扩展、企业集成 | 企业开发者、高级用户 | 深度插件钩子、辅助代理"你应该知道"Mod |
| **OpenAI Codex** | 代理编码、VS Code/浏览器集成 | VS Code 用户、Web 开发者 | 代理命令中心、任务浏览、转录选择 |
| **Gemini CLI** | CLI 原生 UX、内存管理 | CLI 优先开发者 | ChatRecordingService 增量修补、有界历史 |
| **Copilot CLI** | GitHub 生态、沙箱自动化 | GitHub 用户、企业 IT | CA 信任自动化、MCP OAuth、沙箱命令 |
| **OpenCode** | 提供商灵活性、成本透明 | 多云用户 | 多提供商支持、成本报告、精简部署 |
| **Pi** | 托管代理生命周期、持久性 | 高级多代理工作流 | 双路径架构、持久会话、token 治理 |
| **Qwen Code** | 托管代理平台、安全 | 企业多租户 | 代理认证、工作区绑定、分阶段交付 |

**关键差异化：**

- Claude Code 以 Mod 扩展性领先；Qwen Code 采用带代理认证的托管代理架构
- Copilot CLI 依托 GitHub 生态深度集成实现差异化；OpenCode 以多提供商灵活性著称
- Pi 独树一帜地专注托管代理的持久性和生命周期管理
- Gemini CLI 强调 CLI 原生体验，在内存优化上更为激进

---

## 5. 社区活力与成熟度

### 高活力（活跃开发）

- **Claude Code** — 230+ 评论的 issue（#91870 关于 Mods），v2.1.287 重大功能发布，社区参与度高
- **Gemini CLI** — 积极的安全修复（gVisor/ACP）、内存优化（ChatRecordingService）、性能改进
- **Qwen Code** — 强大的架构工作（双路径托管代理）、安全加固、持久会话

### 中等活力（稳步推进）

- **OpenAI Codex** — 稳定发布，专注 Windows 可靠性，但社区讨论较少
- **Pi** — v1.0.0 重大发布，shrinkwrap 修复进行中，积极的安全补丁
- **Copilot CLI** — 维护模式，精准修复，社区音量较低但稳定

### 较低活跃（贡献者较少）

- **OpenCode** — issue 多但 PR 少；可能存在审核瓶颈

### 成熟度指标

- **Copilot CLI** — 成熟的企业功能（CA 信任、无人值守安装）
- **Claude Code** — 成熟的插件生态，Mod 扩展
- **Qwen Code** — 早期阶段但架构成熟（托管代理、代理认证）

---

## 6. 趋势信号

### 决策者信号

1. **可扩展性成为新战场** — Claude Code 的 Mods、OpenCode 插件和 Qwen Code 托管钩子表明基础功能已成标配；差异化现在取决于第三方能多深入地定制行为。

2. **MCP 正在成为基础设施** — 每个工具都在投资 MCP 可靠性（重试逻辑、OAuth 刷新、连接处理）。协议已胜出；实现成熟度各异。

3. **Token 优化是首要关切** — 多个社区指出系统提示、工具模式和上下文文件的 token 浪费问题。预计激进缓存、延迟加载和 AST 感知工具将成为标准。

4. **会话持久性是一项高级功能** — 托管代理架构（Pi、Qwen Code）和会话恢复（Claude Code、Gemini CLI）表明长时间运行、可中断的工作流程正逐渐成为预期。

5. **Windows 企业支持仍不均衡** — 尽管开发多年，Windows 特定问题依然存在（控制台闪烁、沙箱设置、路径处理）。Windows 优先工作流的组织面临更多困难。

6. **安全正在收紧** — 代理认证（Qwen Code）、HTTPS 强制（Copilot CLI）、限制防护（Qwen Code）以及各工具的沙箱改进，表明向企业级安全姿态的转变。

### 开发者建议

如果现在选择 AI CLI 工具：

- **最大化可扩展性**：Claude Code
- **GitHub 集成工作流**：Copilot CLI  
- **多提供商灵活性**：OpenCode
- **纯 CLI 原生体验**：Gemini CLI
- **托管代理平台**：Pi 或 Qwen Code

---

*本报告基于 2026-10-02 七个 AI CLI 工具的社区摘要数据生成。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the Claude Code Skills Community Highlights Report from English to Chinese. I need to follow the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Issue/PR references like #12345 and their link text stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate the content:

---

# Claude Code 技能社区亮点报告

*数据截至 2026-10-02 | 来源：anthropics/skills（官方仓库）*

---

## 1. 技能排行榜

当前所有追踪的 PR 状态均为 **OPEN**，暂无评论数据可用。根据近期活动及仓库关注度，以下技能为最活跃开发或最受讨论的贡献：

| # | PR | 作者 | 描述 | 状态 |
|---|-----|--------|-------------|--------|
| 1 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | ProofCore-Protocol | 面向 Web3 开发者的智能体技能，对 Solidity 和 Rust 智能合约进行自动化静态分析，通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | OPEN |
| 2 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 70v-Yoyo | 零成本技能，将 Markdown 文档编译成带有人声旁白的专业级 MP4 视频，语音由 Marp 生成的逼真人类音色合成 | OPEN |


| 3 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation | mrdesouzaphd-cmyk | 将产品/技术规范转化为具体的 Notion 任务，包含详细的实施计划、验收标准和进度跟踪 | OPEN |
| 4 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | ksgisang | 端到端测试开源技能，赋予 Claude 视觉和浏览器控制能力，实现零代码自动化测试生成 | OPEN |
| 5 | **[#525](https://github.com/anthropics/skills/pull/525)** - pyxel | kitao | 复古游戏开发技能，支持 Python 中 Pyxel 游戏的创建、调试和验证，包含无头输入驱动运行和帧检查 | OPEN |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** - document-typography | PGTBoos | 排版质量控制，防止 AI 生成文档中的孤儿/寡行段落和编号错位 | OPEN |
| 7 | **[#486](https://github.com/anthropics/skills/pull/486)** - ODT | GitHubNewbie0 | OpenDocument 格式创建、模板填充和 ODT 转 HTML 转换技能 | OPEN |
| 8 | **[#723](https://github.com/anthropics/skills/pull/723)** - testing-patterns | 4444J99 | 全面测试技能，涵盖测试金字塔理念、单元测试（AAA 模式）、React 组件测试和端到端模式 | OPEN |

---

## 2. 社区需求趋势

Issues 部分揭示了明确的需求信号：

| 趋势 | Issue | 评论数 | 描述 |
|-------|-------|----------|-------------|
| **🔴 安全与信任** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 安全漏洞：社区技能冒充官方 `anthropic/` 命名空间的技能，破坏了信任边界 |
| **🔧 工作流/共享** | [#228](https://github.com/anthropics/skills/issues/228) | **16** | 请求在 Claude.ai 中实现组织级技能共享——目前需要手动文件分发 |
| **🐛 评估/基准测试** | [#556](https://github.com/anthropics/skills/issues/556) | **12** | `run_eval.py` 报告所有查询的触发率为 0%——技能在评估期间从未触发 |
| **💾 技能持久化** | [#62](https://github.com/anthropics/skills/issues/62) | **10** | 用户报告文件重命名后技能完全消失；需要健壮的持久化处理 |
| **📦 新技能提案** | [#1329](https://github.com/anthropics/skills/issues/1329), [#412](https://github.com/anthropics/skills/issues/412) | 9, 6 | 社区提案技能：compact-memory（符号化智能体状态表示）、agent-governance（智能体安全模式） |

**要点：** 社区最迫切的需求集中在**安全治理**（信任边界）、**运

营基础设施**（评估可靠性、技能共享）和**新能力领域**（Web3、视频生成、治理）。

---

## 3. 潜力待发技能

这些 PR 显示正在积极开发，可能即将发布：

| PR | 作者 | 关注领域 | 活动信号 |
|----|--------|------------|------------------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** - mcp-builder 修复 | Kuldeeep18 | MCP SDK v2 兼容性 | 更新于 2026-09-29；修复 #1668 |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** - skill-creator Windows/运行时修复 | MartinCajiao | 核心基础设施 | 更新于 2026-09-16；解决评估可靠性问题 |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** - docx LibreOffice 超时处理 | TINGyu123644 | 文档自动化 | 更新于 2026-09-25；添加输出验证 |
| **[#1681](https://github.com/anthropics/skills/pull/1681)** - package_skill.py 直接执行 | Kuldeeep18 | 开发者体验 | 更新于 2026-09-27 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求在于强大的评估/触发基础设施和信任安全的技能分发机制——这些核心平台改进将赋能所有下游技能的质量和采用。**

43 条评论的安全问题（#492）和评估失败（#556）表明，尽管技能*创建*非常活跃，但底层的**信任和可靠性基础设施**仍是社区的关键瓶颈。

---

*报告基于 GitHub 数据生成；除非另有说明，PR 保持打开状态。*</think>

# Claude Code 技能社区亮点报告

*数据截至 2026-10-02 | 来源：anthropics/skills（官方仓库）*

---

## 1. 技能排行榜

当前所有追踪的 PR 状态均为 **OPEN**，暂无评论数据可用。根据近期活动及仓库关注度，以下技能为最活跃开发或最受讨论的贡献：

| # | PR | 作者 | 描述 | 状态 |
|---|-----|--------|-------------|--------|
| 1 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | ProofCore-Protocol | 面向 Web3 开发者的智能体技能，对 Solidity 和 Rust 智能合约进行自动化静态分析，通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | OPEN |
| 2 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 70v-Yoyo | 零成本技能，将 Markdown 文档编译成带有人声旁白的 MP4 视频，语音由 Marp 生成的逼真人类音色合成 | OPEN |
| 3 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation | mrdesouzaphd-cmyk | 将产品/技术规范转化为具体的 Notion 任务，包含详细的实施计划、验收标准和进度跟踪 | OPEN |
| 4 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | ksgisang | 端到端测试开源技能，赋予 Claude 视觉和浏览器控制能力，实现零代码自动化测试生成 | OPEN |
| 5 | **[#525](https://github.com/anthropics/skills/pull/525)** - pyxel | kitao | 复古游戏开发技能，用于在 Python 中创建、调试和验证 Pyxel 游戏，支持无头输入驱动运行和帧检查 | OPEN |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** - document-typography | PGTBoos | 排版质量控制，防止 AI 生成文档中的孤儿/寡行段落和编号错位问题 | OPEN |
| 7 | **[#486](https://github.com/anthropics/skills/pull/486)** - ODT | GitHubNewbie0 | OpenDocument 格式创建、模板填充和 ODT 转 HTML 转换技能 | OPEN |
| 8 | **[#723](https://github.com/anthropics/skills/pull/723)** - testing-patterns | 4444J99 | 综合测试技能，涵盖 Testing Trophy 理念、单元测试（AAA 模式）、React 组件测试和端到端模式 | OPEN |

---

## 2. 社区需求趋势

Issues 部分揭示了明确的需求信号：

| 趋势 | Issue | 评论数 | 描述 |
|-------|-------|----------|-------------|
| **🔴 安全与信任** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 安全漏洞：社区技能冒充官方 `anthropic/` 命名空间的技能，滥用信任边界 |
| **🔧 工作流/共享** | [#228](https://github.com/anthropics/skills/issues/228) | **16** | 请求在 Claude.ai 中实现组织级技能共享——目前需要手动文件分发 |
| **🐛 评估/基准测试** | [#556](https://github.com/anthropics/skills/issues/556) | **12** | `run_eval.py` 报告所有查询的触发率为 0%——技能在评估期间从未触发 |
| **💾 技能持久化** | [#62](https://github.com/anthropics/skills/issues/62) | **10** | 用户报告文件重命名后技能完全消失；需要健壮的持久化处理 |
| **📦 新技能提案** | [#1329](https://github.com/anthropics/skills/issues/1329), [#412](https://github.com/anthropics/skills/issues/412) | 9, 6 | 社区提案技能：compact-memory（符号化智能体状态表示）、agent-governance（智能体安全模式） |

**要点：** 社区最迫切的需求集中在**安全治理**（信任边界）、**运营基础设施**（评估可靠性、技能共享）和**新能力领域**（Web3、视频生成、治理）。

---

## 3. 高潜力待发技能

这些 PR 显示正在积极开发，可能即将发布：

| PR | 作者 | 关注领域 | 活动信号 |
|----|--------|------------|------------------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** - mcp-builder 修复 | Kuldeeep18 | MCP SDK v2 兼容性 | 更新于 2026-09-29；修复 #1668 |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** - skill-creator Windows/运行时修复 | MartinCajiao | 核心基础设施 | 更新于 2026-09-16；解决评估可靠性问题 |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** - docx LibreOffice 超时处理 | TINGyu123644 | 文档自动化 | 更新于 2026-09-25；添加输出验证 |
| **[#1681](https://github.com/anthropics/skills/pull/1681)** - package_skill.py 直接执行 | Kuldeeep18 | 开发者体验 | 更新于 2026-09-27 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求在于强大的评估/触发基础设施和信任安全的技能分发机制——这些核心平台改进将赋能所有下游技能的质量和采用。**

43 条评论的安全问题（#492）和评估失败（#556）表明，尽管技能*创建*非常活跃，但底层的**信任和可靠性基础设施**仍是社区的关键瓶颈。

---

*报告基于 GitHub 数据生成；除非另有说明，PR 保持打开状态。*

---

<think>The user wants me to translate the English digest into Simplified Chinese, preserving all Markdown structure, URLs, numbers, code references, etc. I need to write in natural technical Chinese (the register of a Chinese developer newsletter), not a literal word-for-word translation.

Let me go through and translate while maintaining the structure:

**Headlines:**
- "Today's Highlights" → 今日要闻
- "Releases" → 版本发布
- "Hot Issues" → 热门 issues
- "Key PR Progress" → 主要 PR 进展
- "Feature Request Trends" → 功能需求趋势
- "Developer Pain Points" → 开发者痛点

Let me translate carefully, preserving the format:</think>

# Claude Code 社区摘要 — 2026-10-02

## 今日要闻

v2.1.287 版本带来了 **Claude Mods**，这是一项重大的可扩展性升级，使插件能够修改 Claude 的更深层行为。新增内置的"你应该知道"模组可以充当辅助代理，提醒你和 Claude 可能遗漏的事项。与此同时，社区正在 issue #91870（230 条评论）上热议可扩展性的取舍，另外还有一个严重的 GitHub 连接器回归问题（#71542）导致仓库内容完全无法访问。

---

## 版本发布

**v2.1.287** — 2026 年 10 月 2 日

- **Claude Mods**：插件现在可以修改 Claude 的更深层行为，大幅提升可扩展性
- **"你应该知道"模组**：内置的辅助代理会留意你的背后，提醒你或 Claude 可能遗漏的事项。可通过 `/plugin enable cc-plugin-you-should-know@builtin` 启用（支持 tel 的第一方会话）

---

## 热门 issues

1. **[#91870](https://github.com/anthropics/claude-code/issues/91870)** — Mods：让 Claude 可扩展性提升 10 倍  
   *230 条评论，130 👍* — 社区微型更新宣布将在 N 周后发布。这是新 Mods 可扩展性系统反馈的核心讨论串。

2. **[#71542](https://github.com/anthropics/claude-code/issues/71542)** — GitHub 连接器链接了仓库但 Claude 无法访问内容（账户级别，公开 + 私有）— 近期回归问题  
   *68 条评论，64 👍* — 严重 bug：所有仓库的 GitHub 集成都已失效。这是影响所有用户的高优先级回归问题。

3. **[#97854](https://github.com/anthropics/claude-code/issues/97854)** — Auto 模式：服务端安全分类器间歇性返回无裁决结果，完全阻止 Bash 和 ScheduleWakeup 执行  
   *28 条评论，35 👍* — Auto 模式用户在使用 Bash 和 ScheduleWakeup 时遭遇 100% 失败率，即使是 `echo ok` 这样简单的命令也不行。

4. **[#84862](https://github.com/anthropics/claude-code/issues/84862)** — [功能建议] Claude 账户支持 Passkey（WebAuthn）登录  
   *10 条评论，84 👍* — 社区对各场景无密码认证的需求强烈。

5. **[#83848](https://github.com/anthropics/claude-code/issues/83848)** — 后台子代理间歇性卡死，无最终文本，但 harness 仍报告 status:completed  
   *9 条评论* — 新推出的子代理类型在产生输出前卡死，而父代理已报告完成。间歇性但影响较大。

6. **[#98184](https://github.com/anthropics/claude-code/issues/98184)** — [BUG] 网络切换后，下一次请求在死连接上挂起 184 秒才重试（Linux）  
   *5 条评论* — Linux 特有的网络 bug 导致网络切换后约 3 分钟的卡顿。

7. **[#81024](https://github.com/anthropics/claude-code/issues/81024)** — VS Code 扩展：在会话列表中包含 git-worktree 会话  
   *5 条评论，6 👍* — 功能请求：展示 worktree 会话；目前硬编码为 `includeWorktrees: false`。

8. **[#98679](https://github.com/anthropics/claude-code/issues/98679)** — [模型] Claude Opus 5.5 行为自 2026-10-01 起发生变化：思考量约 2 倍，输出量约 1.6 倍，判断力下降  
   *3 条评论* — 回归报告：用户观察到显著的模型行为变化，token 消耗大幅增加，判断力下降。

9. **[#89827](https://github.com/anthropics/claude-code/issues/89827)** — Markdown 强调分隔符在日语输出的 CJK 标点旁失效  
   *2 条评论* — CommonMark 合规性问题：`**` 紧邻 CJK 括号外时强调渲染失效。

10. **[#89110](https://github.com/anthropics/claude-code/issues/89110)** — Claude Desktop 在 Linux 上阻止睡眠且退出时留下孤儿进程  
    *2 条评论* — Desktop 应用导致睡眠阻止，退出时留下僵尸进程。

---

## 主要 PR 进展

1. **[#16632](https://github.com/anthropics/claude-code/pull/16632)** — 修复：`This command uses shell operators that require approval for safety`  
    将 ralph-loop 初始化从 Markdown 代码块迁移为功能性 Bash 工具调用。**已合并。**

2. **[#62592](https://github.com/anthropics/claude-code/pull/62592)** — 更新 security-guidance 插件  
    README.md 更新。**已合并。**

3. **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — diff：首次编辑仅在有待列出文件时才打开面板  
    避免写入被忽略文件、仓库外或不同 worktree 时打开空的 diff 面板。**开放中。**

4. **[#98018](https://github.com/anthropics/claude-code/pull/98018)** — mods：回滚两处更改（agents-md 截断读取、diff 强制颜色）  
    回滚 #96363 和 #96464，使 agents-md 和 diff 模组恢复之前行为。**已合并。**

5. **[#98555](https://github.com/anthropics/claude-code/pull/98555)** — diff：对话框列出每个文件时都会打开，关闭时显示 nothing  
    修复 `/diff` 对话框行为，现在列出的每个文件都会自动打开其 diff。**已合并。**

---

## 功能需求趋势

| 类别 | 请求 |
|------|------|
| **可扩展性** | Mods/hooks/插件 (#91870)、持久化自定义指令 (#98844) |
| **认证** | Passkey/WebAuthn 登录 (#84862) |
| **IDE 集成** | VS Code 中的 git worktree 会话 (#81024) |
| **后台代理** | 更好的卡死检测、收件箱清理 (#83848, #82858) |

---

## 开发者痛点

- **GitHub 连接器回归** — 所有仓库的内容访问完全失效，影响工作流
- **Auto 模式可靠性** — 安全分类器完全阻止核心工具（Bash、ScheduleWakeup）
- **Linux 特有问题** — 网络卡顿（184 秒）、阻止睡眠、孤儿进程
- **模型行为变化** — Opus 5.5 显示约 2 倍 token 消耗，判断力下降
- **后台代理卡死** — 桌面应用无法看到卡住的子代理，无卡死检测
- **启动延迟** — 无法识别的 `TERM_PROGRAM` 导致交互式启动增加约 3 秒
- **MCP 空参数** — 对象参数中的空值对服务器无效果

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest into Simplified Chinese, following the detailed translation guidelines provided. Let me go through this carefully.

Key points from the instructions:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, keeping the structure intact:

Title: "OpenAI Codex Community Digest" → "OpenAI Codex 社区简报"
Date: "2026-10-02" stays as-is

## Today's Highlights → 今日要闻

"Highlights" in newsletter context = "要闻" or "亮点"

"The Codex team shipped **rust-v0.160.0** with significant UX improvements including keyboard-accessible task browsing in the agent command center, transcript text selection in fullscreen Linux X11 terminals, and the ability to start sessions outside a project with workspace defaults. Meanwhile, the community is actively reporting Windows-related issues—particularly around sandbox setup failures, dot/Computer Use functionality, and mixed Linux/Windows path handling in cross-platform workflows. Feature requests to disable or remove the Pets feature continue to gain traction, with two related issues collectively earning 101 👍."

Codex 团队发布了 **rust-v0.160.0**，带来多项重要的用户体验优化：智能体命令中心支持键盘导航浏览历史任务、全屏 Linux X11 终端可选择转录文本、支持在项目外启动会话并使用工作区默认配置。与此同时，社区正在积极反馈 Windows 相关问题——尤其是沙箱设置失败、dot/Computer Use 功能异常，以及跨平台工作流中 Linux/Windows 路径混用的问题。禁用或移除 Pets 功能的特性请求持续受到关注，两个相关 issue 共获得 101 个 👍。

## Releases → 发布

The table content needs natural Chinese rendering. I'll translate the version details while preserving the technical context and ensuring the language sounds like a developer newsletter. I'll focus on the nuanced translation that maintains the original's informative tone while adapting it to Chinese technical communication style.

| Version | Key Changes |
|---------|-------------|
| **rust-v0.160.0** | Browse older tasks in agent command center with keyboard-accessible "Show more" action (#49106); select transcript text and paste with middle-click in fullscreen mode on supported local Linux X11 terminals (#49112); start sessions outside a project with workspace default |
| **rust-v0.162.0-alpha.2** | Alpha release |
| **rust-v0.162.0-alpha.1** | Alpha release |
| **rust-v0.161.0-alpha.6 through alpha.13** | Series of alpha releases |

I'll translate the version table into Chinese, focusing on clear, concise technical communication that preserves the original's technical details and release context.

| 版本 | 关键更新 |
|------|----------|
| **rust-v0.160.0** | 智能体命令中心支持键盘快捷键浏览更早任务（#49106）；在全屏模式下支持本地 Linux X11 终端选中转录文本并用中键粘贴（#49112）；支持在工作区外启动会话，使用工作区默认配置 |
| **rust-v0.162.0-alpha.2** | Alpha 版本发布 |
| **rust-v0.162.0-alpha.1** | Alpha 版本发布 |
| **rust-v0.161.0-alpha.6 至 alpha.13** | Alpha 版本系列 |

## Hot Issues → 热门 Issue

| # | Issue | Summary | Why It Matters |
|---|-------|---------|----------------|
| 1 | **[#34349](https://github.com/openai/codex/issues/34349)** | Feature Request: Allow users to completely disable Pets | 24 comments, 81 👍 — Users want full control to remove the Pets feature and its UI elements entirely |
| 2 | **[#40858](https://github.com/openai/codex/issues/40858)** | Native subagent ignores explicit model_provider override | 20 comments — Subagent model selection is broken when using custom providers, affecting advanced workflows |
| 3 | **[#49729](https://github.com/openai/codex/issues/49729)** | Dot cannot create or follow up with local Codex tasks in saved projects | 17 comments — Core integration between Dot and saved projects is broken |
| 4 | **[#49497](https://github.com/openai/codex/issues/49497)** | Codex Web: first message fails with "Unable to determine project root" | 15 comments, 24 👍 — Cloud environment setup fails on first message, blocking web users |
| 5 | **[#23999](https://github.com/openai/codex/issues/23999)** | Codex Desktop sidebar chat history disappears | 12 comments — Persistent chat history loss impacts workflow continuity |
| 6 | **[#43776](https://github.com/openai/codex/issues/43776)** | Windows: Codex-created .agents ownership breaks sandbox | 11 comments — Sandbox and in-app browser control fail on Windows due to ownership issues |
| 7 | **[#49488](https://github.com/openai/codex/issues/49488)** | [Windows][dot/Work] Computer tasks lack browser/desktop tools | 11 comments — MCP startup failures prevent Computer Use on Windows |
| 8 | **[#49718](https://github.com/openai/codex/issues/49718)** | [Windows] App stuck on logo splash at startup | 8 comments — Renderer misses initial "connected" state; sandbox setup always fails |
| 9 | **[#44546](https://github.com/openai/codex/issues/44546)** | Remove the desktop pet feature completely | 7 comments, 20 👍 — Duplicate request emphasizing Pets causes user stress |
| 10 | **[#49753](https://github.com/openai/codex/issues/49753)** | Dot creates Codex tasks with mixed Linux/Windows working paths | 7 comments — Cross-platform path mixing causes follow-up turn failures |

I'll track the issues in a structured table format, highlighting key details and user impact. The table captures issue numbers, summaries, and their significance for the Codex project. Each issue represents a specific pain point affecting user experience, workflow, or system functionality across different platforms.

The issues range from feature removal requests to critical technical problems, with varying levels of community engagement. Windows-related problems seem particularly prevalent, indicating potential platform-specific challenges. The table provides a quick overview of current technical债务 and user-reported concerns.

| # | Issue | 摘要 | 为何重要 |
|---|-------|-----|----------|
| 1 | **[#34349](https://github.com/openai/codex/issues/34349)** | 特性请求：允许用户完全禁用 Pets | 24 条评论，81 👍 — 用户希望完全移除 Pets 功能及其 UI 元素 |
| 2 | **[#40858](https://github.com/openai/codex/issues/40858)** | 本地子智能体忽略显式的 model_provider 覆盖 | 20 条评论 — 使用自定义 provider 时子智能体模型选择失效，影响高级工作流 |
| 3 | **[#49729](https://github.com/openai/codex/issues/49729)** | Dot 无法在已保存项目中创建或继续本地 Codex 任务 | 17 条评论 — Dot 与已保存项目的核心集成损坏 |
| 4 | **[#49497](https://github.com/openai/codex/issues/49497)** | Codex Web：首条消息失败，提示"Unable to determine project root" | 15 条评论，24 👍 — 云环境设置在首条消息时失败，阻断 Web 用户 |
| 5 | **[#23999](https://github.com/openai/codex/issues/23999)** | Codex Desktop 侧边栏聊天历史消失 | 12 条评论 — 聊天历史丢失影响工作流连续性 |
| 6 | **[#43776](https://github.com/openai/codex/issues/43776)** | Windows：Codex 创建的 .agents 所有权破坏沙箱 | 11 条评论 — 沙箱和应用内浏览器控制在 Windows 上因所有权问题失败 |
| 7 | **[#49488](https://github.com/openai/codex/issues/49488)** | [Windows][dot/Work] 计算机任务缺少浏览器/桌面工具 | 11 条评论 — MCP 启动失败导致 Windows 无法使用 Computer Use |
| 8 | **[#49718](https://github.com/openai/codex/issues/49718)** | [Windows] 启动时应用卡在 Logo 画面 | 8 条评论 — 渲染器错过初始"已连接"状态；沙箱设置始终失败 |
| 9 | **[#44546](https://github.com/openai/codex/issues/44546)** | 完全移除桌面宠物功能 | 7 条评论，20 👍 — 重复请求强调 Pets 导致用户困扰 |
| 10 | **[#49753](https://github.com/openai/codex/issues/49753)** | Dot 创建的 Codex 任务混合了 Linux/Windows 工作路径 | 7 条评论 — 跨平台路径混用导致后续轮次失败 |

The "## Key PR Progress" section highlights significant pull requests driving project improvements. Each PR represents a targeted enhancement addressing technical challenges, platform compatibility, and user experience refinements. The list demonstrates ongoing efforts to strengthen Codex's core functionality, diagnostics, and cross-platform support through strategic code contributions.

The next set of PRs continues this theme of methodical system refinement, introducing features like decision comparison mechanisms, dynamic tool inheritance, and advanced session management techniques that incrementally improve the framework's robustness and flexibility.

The PRs explore critical infrastructure improvements, including agent communication, UI interaction optimization, and introducing granular diagnostic capabilities for network communication. Each pull request represents a strategic enhancement addressing specific technical challenges in the system's architecture.

The collection demonstrates a comprehensive approach to system development, focusing on nuanced performance tuning, platform-specific adaptations, and intelligent feature implementations that collectively elevate the overall technical ecosystem.</think>

# OpenAI Codex 社区简报

**日期：** 2026-10-02

---

## 今日要闻

Codex 团队发布了 **rust-v0.160.0**，带来多项重要的用户体验优化：智能体命令中心支持键盘导航浏览历史任务、全屏 Linux X11 终端可选择转录文本、支持在项目外启动会话并使用工作区默认配置。与此同时，社区正在积极反馈 Windows 相关问题——尤其是沙箱设置失败、dot/Computer Use 功能异常，以及跨平台工作流中 Linux/Windows 路径混用的问题。禁用或移除 Pets 功能的特性请求持续受到关注，两个相关 issue 共获得 101 个 👍。

---

## 发布

| 版本 | 关键更新 |
|------|----------|
| **rust-v0.160.0** | 智能体命令中心支持键盘快捷键浏览更早任务（#49106）；在全屏模式下支持本地 Linux X11 终端选中转录文本并用中键粘贴（#49112）；支持在工作区外启动会话，使用工作区默认配置 |
| **rust-v0.162.0-alpha.2** | Alpha 版本发布 |
| **rust-v0.162.0-alpha.1** | Alpha 版本发布 |
| **rust-v0.161.0-alpha.6 至 alpha.13** | Alpha 版本系列 |

---

## 热门 Issue

| # | Issue | 摘要 | 为何重要 |
|---|-------|-----|----------|
| 1 | **[#34349](https://github.com/openai/codex/issues/34349)** | 特性请求：允许用户完全禁用 Pets | 24 条评论，81 👍 — 用户希望完全移除 Pets 功能及其 UI 元素 |
| 2 | **[#40858](https://github.com/openai/codex/issues/40858)** | 本地子智能体忽略显式的 model_provider 覆盖 | 20 条评论 — 使用自定义 provider 时子智能体模型选择失效，影响高级工作流 |
| 3 | **[#49729](https://github.com/openai/codex/issues/49729)** | Dot 无法在已保存项目中创建或继续本地 Codex 任务 | 17 条评论 — Dot 与已保存项目的核心集成损坏 |
| 4 | **[#49497](https://github.com/openai/codex/issues/49497)** | Codex Web：首条消息失败，提示"Unable to determine project root" | 15 条评论，24 👍 — 云环境设置在首条消息时失败，阻断 Web 用户 |
| 5 | **[#23999](https://github.com/openai/codex/issues/23999)** | Codex Desktop 侧边栏聊天历史消失 | 12 条评论 — 聊天历史丢失影响工作流连续性 |
| 6 | **[#43776](https://github.com/openai/codex/issues/43776)** | Windows：Codex 创建的 .agents 所有权破坏沙箱 | 11 条评论 — 沙箱和应用内浏览器控制在 Windows 上因所有权问题失败 |
| 7 | **[#49488](https://github.com/openai/codex/issues/49488)** | [Windows][dot/Work] 计算机任务缺少浏览器/桌面工具 | 11 条评论 — MCP 启动失败导致 Windows 无法使用 Computer Use |
| 8 | **[#49718](https://github.com/openai/codex/issues/49718)** | [Windows] 启动时应用卡在 Logo 画面 | 8 条评论 — 渲染器错过初始"已连接"状态；沙箱设置始终失败 |
| 9 | **[#44546](https://github.com/openai/codex/issues/44546)** | 完全移除桌面宠物功能 | 7 条评论，20 👍 — 重复请求强调 Pets 导致用户困扰 |
| 10 | **[#49753](https://github.com/openai/codex/issues/49753)** | Dot 创建的 Codex 任务混合了 Linux/Windows 工作路径 | 7 条评论 — 跨平台路径混用导致后续轮次失败 |

---

## 关键 PR 进展

| PR | 描述 |
|----|------|
| **[#50140](https://github.com/openai/codex/pull/50140)** | 使用服务端权限目录实现 TUI 权限快捷方式 — 确保快捷方式遵循服务端限制 |
| **[#50131](https://github.com/openai/codex/pull/50131)** | 为 TCP 隧道添加可选的 JSON 诊断功能 — `codex tcp-tunnel --diagnostics-json` 用于调试 |
| **[#50129](https://github.com/openai/codex/pull/50129)** | 为远程 MCP 服务器保留 Windows 环境变量 — 修复 Windows 运行时变量被过滤的问题 |
| **[#50128](https://github.com/openai/codex/pull/50128)** | 通过 `CodexThread::current_turn_model` 暴露当前轮次选择的模型 |
| **[#50113](https://github.com/openai/codex/pull/50113)** | 为云端线程恢复和附加添加原生 gRPC 客户端 — `codex-cloud-client` 支持 HTTP/2 |
| **[#50112](https://github.com/openai/codex/pull/50112)** | 将 TUI 加载动画和帧调度集中到共享辅助模块 |
| **[#50109](https://github.com/openai/codex/pull/50109)** | 保持全屏提示框边界并可滚动 — 限制输入框最大高度为视口三分之二 |
| **[#50099](https://github.com/openai/codex/pull/50099)** | 通过 `guardianv2_decisions_comparison` 特性为 Guardian V2 添加可选的决策对比功能 |
| **[#50087](https://github.com/openai/codex/pull/50087)** | 保留被驱逐会话中的排队智能体邮件 — 避免不必要的会话加载 |
| **[#50082](https://github.com/openai/codex/pull/50082)** | 通过 `multi_agent_v2_dynamic_tools` 特性为全新的 V2 子智能体启用动态工具继承 |

---

## 热门讨论

### 想法
- **[#4107](https://github.com/openai/codex/discussions/4107)** — "Copy as Markdown"选项置于回答上下文下拉菜单中（2 条评论，3 👍）
- **[#42703](https://github.com/openai/codex/discussions/42703)** — 长上下文：历史检索是否会使历史产生递归自指？（2 条评论）
- **[#49977](https://github.com/openai/codex/discussions/49977)** — Codex/Work 中的动态模型和推理编排（0 条评论）

### 问答
- **[#8503](https://github.com/openai/codex/discussions/8503)** — 尽管代码审查显示 100% 剩余，仍提示"usage limit reached"（23 条评论，10 👍）— **活跃中**
- **[#9277](https://github.com/openai/codex/discussions/9277)** — 提示"To use Codex here, create a Codex account"错误（8 条评论，6 👍）
- **[#21935](https://github.com/openai/codex/discussions/21935)** — "codex remote-control"入口点的意图方向（4 条评论，7 👍）
- **[#37960](https://github.com/openai/codex/discussions/37960)** — 协调使用不同模型供应商的本地和远程编码智能体（6 条评论）

### 展示与分享
- **[#50062](https://github.com/openai/codex/discussions/50062)** — MAIOS 项目内核：维持 AI 智能体学习过程中的方向感
- **[#50003](https://github.com/openai/codex/discussions/50003)** — agent-squiggles：Codex 编辑错误的 LSP 诊断
- **[#49981](https://github.com/openai/codex/discussions/49981)** — Agent 007：浏览器中 Codex 工作者的任务看板和管理器
- **[#50048](https://github.com/openai/codex/discussions/50048)** — OpenAI Codex 已上架 Protagentic — 能否展示其评级？

### 综合
- **[#49129](https://github.com/openai/codex/discussions/49129)** — Codex CLI 全屏模式（4 条评论，4 👍）

---

## 特性请求趋势

1. **移除 Pets 功能** — 多项请求（issue #34349、#44546）希望完全禁用/隐藏 Pets；累计 101 个 👍 表明用户需求强烈
2. **Windows 稳定性** — 沙箱修复、MCP 稳定性、dot/Computer Use 功能及跨平台路径处理是错误报告的主要方向
3. **模型/供应商灵活性** — 子智能体模型覆盖和动态模型编排请求
4. **聊天历史与会话管理** — 已归档任务删除、聊天历史保留、会话驱逐处理
5. **跨平台体验一致性** — 全屏终端特性、键盘导航、滚动行为一致性

---

## 开发者痛点

- **Windows 沙箱故障** — .agents 所有权、权限配置文件、沙箱设置问题反复出现（多个 issue：#43776、#49718、#47213）
- **Windows 上的 Dot/Computer Use** — MCP 启动失败导致核心自动化工作流无法使用（#49488）
- **消息队列问题** — 扩展在更新后丢失消息、提示队列错误、线程卡在流式传输状态（#49988、#50118、#50142）
- **云环境设置** — "Unable to determine project root"错误阻断 Codex Web 用户（#49497）
- **Pets 造成困扰** — 桌面宠物功能引发真实用户不满和困扰（#34349、#44546）
- **跨平台路径冲突** — dot 创建的任务混合 Linux/Windows 路径导致后续轮次失败（#49753）

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this GitHub digest into Chinese (Simplified), preserving all the Markdown structure exactly, keeping technical terms and identifiers in their original form, and using natural technical Chinese register.

Let me translate this carefully:

## Today's Highlights → 今日要闻

The v0.64.0-nightly.20261002.gc9096a847 release delivers two critical fixes: append-only delta patching for chat history to reduce memory overhead, and atomic state persistence with corruption recovery. Meanwhile, the community is grappling with several high-priority agent reliability issues—particularly around subagent termination reporting and generalist agent hangs that block core workflows.

→ v0.64.0-nightly.20261002.gc9096a847 版本带来了两个关键修复：聊天历史采用仅追加的差分补丁以减少内存开销，以及原子状态持久化与损坏恢复。与此同时，社区正在处理几个高优先级的代理可靠性问题——尤其是子代理终止报告和导致核心工作流阻塞的通用代理挂起问题。

Let me continue with the rest...

Releases → 发布

Hot Issues → 热门问题

Key PR Progress → 关键 PR 进展

Feature Request Trends → 功能需求趋势

Developer Pain Points → 开发者痛点

I need to translate everything while preserving:
- All Markdown structure
- Tables with alignment
- URLs and issue/PR references
- Technical terms, file paths, version numbers
- Emoji
- Bold/italic formatting

Let me go through systematically:</think>

# Gemini CLI 社区摘要 — 2026-10-02

## 今日要闻

v0.64.0-nightly.20261002.gc9096a847 版本带来了两个关键修复：聊天历史采用仅追加的差分补丁以减少内存开销，以及原子状态持久化与损坏恢复。与此同时，社区正在处理几个高优先级的代理可靠性问题——尤其是子代理终止报告和导致核心工作流阻塞的通用代理挂起问题。

---

## 发布

**v0.64.0-nightly.20261002.gc9096a847** — 2026-10-02

- **fix(core)**：在 `ChatRecordingService` 中实现了仅追加的差分补丁和有界历史窗口——减少了全量历史重写带来的内存膨胀。（[PR #29568](https://github.com/google-gemini/gemini-cli/pull/29568)）
- **fix(cli)**：原子化持久化状态，并在损坏时从备份恢复——防止 `~/.gemini/state.json` 中的状态丢失。（[PR #29558](https://github.com/google-gemini/gemini-cli/pull/29558)，亦见于发布说明）

---

## 热门问题

| # | 问题 | 优先级 | 为何重要 | 反馈 |
|---|-----|--------|----------|------|
| **#22323** | [子代理在 MAX_TURNS 报告为 GOAL 成功后的恢复](https://github.com/google-gemini/gemini-cli/issues/22323) | p1 | 子代理即使达到轮次限制也报告成功，掩盖了实际的中断——这会破坏评估数据并损害用户信任。 | 👍 2 |
| **#21409** | [通用代理挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | p1 | 当代理降级为通用代理时 CLI 无限期挂起；简单操作如创建文件夹也会阻塞 60 分钟以上。 | 👍 8 |
| **#21983** | [浏览器子代理在 Wayland 上失败](https://github.com/google-gemini/gemini-cli/issues/21983) | p1 | 浏览器自动化在 Wayland 显示服务器上无法运行——这是日益增长的 Linux 桌面环境。 | 👍 1 |
| **#19873** | [零依赖操作系统沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873) | p2 | 利用模型原生的 bash 亲和力结合沙箱的提案——可同时改善安全性和用户体验。 | 👍 1 |
| **#21409** | [通用代理挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | p1 | （重复条目 —— 见上文） | — |
| **#22745** | [评估 AST 感知的文件读取、搜索和映射](https://github.com/google-gemini/gemini-cli/issues/22745) | p2 | 调研 AST 感知工具是否能减少 token 开销并提高代码导航精度。 | 👍 1 |
| **#21968** | [Gemini 没有充分利用 skills 和 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968) | p2 | 模型除非明确提示否则忽略自定义 skills/subagents——这破坏了可扩展性的意义。 | 👍 0 |
| **#22267** | [浏览器代理忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267) | p2 | 浏览器代理中 `maxTurns` 等配置覆盖被静默忽略——违背用户预期。 | 👍 0 |
| **#20079** | [无法识别符号链接的代理文件](https://github.com/google-gemini/gemini-cli/issues/20079) | p2 | `~/.gemini/agents/filename.md` 符号链接无法作为代理加载——限制了代理定义的组织方式。 | 👍 0 |
| **#24246** | [Gemini CLI 在工具超过 128 个时遇到 400 错误](https://github.com/google-gemino/gemini-cli/issues/24246) | p2 | 工具超过 400 个时 API 返回 400 —— 代理需要更智能的工具作用域管理。 | 👍 0 |

---

## 关键 PR 进展

| # | PR | 优先级 | 描述 |
|---|-----|--------|------|
| **#29596** | [feat(cli): 在 ACP 权限请求中包含 MCP 服务器和工具名称](https://github.com/google-gemini/gemini-cli/pull/29596) | — | 为 MCP 工具权限提示添加服务器上下文，使用户可以区分具有相同工具名称的不同服务器。 |
| **#29597** | [fix(companion): 为 gVisor/runsc 沙箱允许 IPC socket 后备](https://github.com/google-gemini/gemini-cli/pull/29597) | p2 | 当 gVisor 隔离容器环回时启用 stdio IPC 后备——对沙箱环境至关重要。 |
| **#29457** | [fix(core): 用 glob 匹配替换模糊的 requestedExplicitly 逻辑](https://github.com/google-gemini/gemini-cli/pull/29457) | p1 | 修复上下文膨胀 bug：二进制资源（图片、PDF）因字符串匹配过于粗糙被错误包含。 |
| **#29582** | [perf(core): 优化忽略过滤并启用子树剪枝](https://github.com/google-gemini/gemini-cli/pull/29582) | p1 | 通过尽早剪枝忽略的子树来解决大型仓库的多秒阻塞延迟。 |
| **#29584** | [fix(core): 防止快速退出时删除已恢复会话的历史](https://github.com/google-gemini/gemini-cli/pull/29584) | p1 | 修复数据丢失问题：在 `Ctrl+C` 于提交提示符前快速退出时，会永久删除已恢复会话的历史。 |
| **#29502** | [fix(cli): 确保回车和空格键可靠地确认选择](https://github.com/google-gemini/gemini-cli/pull/29502) | p1 | 使选择列表在各类终端中一致工作，包括不支持 Kitty Keyboard Protocol 的 Windows IDE。 |
| **#29520** | [fix(cli): 保留滚动位置并分区待处理高度预算](https://github.com/google-gemini/gemini-cli/pull/29520) | p1 | 解决了流式输出、工具提示和高度检查期间的视口滚动重置问题。 |
| **#29580** | [fix(acp): 按精确 id 解析会话并处理监听器清理](https://github.com/google-gemini/gemini-cli/pull/29580) | p1 | 修复没有对话轮次的新会话恢复失败的问题。 |
| **#29583** | [fix(cli): 在不受信任的文件夹中强制只读工作区设置](https://github.com/google-gemini/gemini-cli/pull/29583) | p1 | 防止 CLI 在未验证的工作区中运行时出现遗漏同步导致的破坏性操作。 |
| **#28738** | [fix(feat): 允许代理调用代理](https://github.com/google-gemini/gemini-cli/pull/28738) | p2 | 通过 `tools:` frontmatter 实现子代理委托和递归——扩展了可组合性。 |

---

## 功能需求趋势

1. **代理可靠性与恢复** — 多个问题（#22323、#21409、#21983）凸显了对健壮的终止处理、挂起检测和跨平台（Wayland）支持的需求。
2. **更智能的工具与技能调用** — 模型应能自主调用自定义 skills/subagents（#21968）而非依赖显式提示。
3. **AST 感知的代码库操作** — 持续调研（#22745、#22746、#22747）利用 AST grep 等工具来减少 token 开销并实现精准的代码读取。
4. **沙箱与安全** — 零依赖操作系统沙箱（#19873）结合执行后意图路由的提案。
5. **持久化任务跟踪** — 希望用基于文件的 CRUD 操作（#18836）替代上下文中的待办列表，以跨越会话边界持久化。
6. **子代理可见性** — 希望子代理轨迹可通过 `/chat share` 可见（#22598），便于评估和调试。

---

## 开发者痛点

- **代理挂起与中断失败** — 通用代理在简单操作上挂起（#21409）且 `Ctrl+C` 无法可靠触发取消处理程序（#29586）正在阻碍开发效率。
- **状态损坏与数据丢失** — 最近的修复（#29584、#29558）解决了快速退出或损坏时会话历史或 state.json 丢失的长期问题。
- **配置覆盖被忽略** — 浏览器代理忽略 `settings.json` 覆盖（#22267）导致行为不一致。
- **上下文膨胀** — 二进制资源被错误包含在上下文中（#29457），且缺乏精准的文件读取（#19561）导致不必要的 token 消耗。
- **平台兼容性** — Wayland 失败（#21983）、Windows IME 光标错位（#29560）以及 Windows 扩展更新期间的文件锁定（#29540）表明跨平台仍存在差距。

---

*基于 GitHub 数据生成 — 2026-10-02*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese while preserving the exact Markdown structure, URLs, issue numbers, code snippets, and other technical elements.

Let me go through the content and translate it appropriately:

1. Title: "GitHub Copilot CLI Community Digest" -> "GitHub Copilot CLI 社区动态"
2. Date: Keep as-is
3. All headings in Chinese
4. Translate content to natural technical Chinese
5. Keep all URLs, issue numbers (#3282), code blocks, etc.

Let me translate section by section:

"Today's Highlights" -> "今日要闻"
"Releases" -> "版本发布"
"Hot Issues" -> "热门问题"
"Key PR Progress" -> "关键 PR 进展"
"Feature Request Trends" -> "功能需求趋势"
"Developer Pain Points" -> "开发者痛点"

For the content, I'll translate to natural Chinese technical register while keeping technical terms in English where appropriate.</think>

# GitHub Copilot CLI 社区动态

**日期：** 2026 年 10 月 2 日

---

## 今日要闻

GitHub Copilot CLI 团队发布了 **v1.0.92-0**，修复了 MCP 工具在 OAuth 重新认证后停止工作的问题。近期 v1.0.91 版本引入了重要的新功能，包括用于代理 CA 信任管理的 `copilot sandbox ca` 命令集（支持无人值守 Windows 环境），同时改进了遥测处理和会话时间线功能。过去 24 小时内社区共更新了 38 个 issue，参与度保持高涨。

---

## 版本发布

### v1.0.92-0（2026 年 10 月 2 日）
**修复：** 当工具定义未更改时，MCP 工具在 OAuth 重新认证后继续工作。

### v1.0.91 / v1.0.91-1（2026 年 10 月 1 日）
**新增：**
- 新增 `copilot sandbox ca` 命令：`check`、`create`、`trust`、`rotate` 和 `remove`，用于代理 CA 信任管理
- 支持无人值守 Windows 环境下的 CA 信任设置
- `/sandbox ca install` 拆分为独立的 `create` 和 `trust` 命令

**改进：**
- 会话时间线现在会在中断的回合后清除忙碌状态
- 沙盒命令现已在 Windows 上运行
- CLI 关闭时会先刷新待处理的遥测数据再退出（带有有限的延迟）

---

## 热门问题

### 1. [在 copilot cli 中添加多个 BYOK 模型支持](https://github.com/github/copilot-cli/issues/3282) — #3282
**状态：** 已关闭 | **评论：** 12 | **点赞：** 31 👍
**重要性：** 用户希望通过环境变量启用多个自带密钥（BYOK）模型。目前，在不同 BYOK 模型之间切换需要终止会话并设置新的环境变量，严重影响工作流程。这一高需求功能获得了 31 个赞，表明社区对多模型支持的强烈诉求。

### 2. [权限请求过于宽泛](https://github.com/github/copilot-cli/issues/953) — #953
**状态：** 开放 | **评论：** 8 | **点赞：** 5 👍
**重要性：** 企业用户在仅计划在单个仓库中工作时，Copilot 仍在身份验证过程中请求所有仓库的读写权限。这一长期存在的问题凸显了对更精细权限控制的需求。

### 3. [macOS 更新/重启后 Copilot CLI 不可用，因为 `.mcp-writer.binding` 保留了过时的文件系统设备 ID](https://github.com/github/copilot-cli/issues/4998) — #4998
**状态：** 开放 | **评论：** 6 | **点赞：** 4 👍
**重要性：** 安装 macOS 安全更新并重启后，所有 Copilot CLI 会话都无法处理提示词，因为 `.mcp-writer.binding` 文件中保留了过时的文件系统设备 ID。这导致 CLI 完全不可用，用户必须手动干预才能恢复。

### 4. [1.0.89 版本启动错误 "Failed to read model provider attribution: Error: Not authenticated"](https://github.com/github/copilot-cli/issues/5008) — #5008
**状态：** 开放 | **评论：** 6 | **点赞：** 5 👍
**重要性：** 用户在启动时会在身份验证完成前（约 3 秒后）看到两次身份验证错误。这似乎是 CLI 在身份验证完成前尝试读取模型提供商归属而导致的启动竞态条件。虽然功能最终可以正常工作，但错误信息会造成困扰。

### 5. [Azure MCP 服务器发送 HTTP 请求失败](https://github.com/github/copilot-cli/issues/4851) — #4851
**状态：** 开放 | **评论：** 5 | **点赞：** 8 👍
**重要性：** Copilot CLI 在验证 Azure API Center MCP 注册表端点时出现 BrokenPipe 错误而失败。这是一个回归问题，会破坏使用 Azure MCP 服务器的现有企业工作流程——标记为 "triage" 表明正在积极调查中。

### 6. [企业管理的 `model` 设置已接收但未应用](https://github.com/github/copilot-cli/issues/4959) — #4959
**状态:** 开放 | **评论：** 2 | **点赞：** 3 👍
**重要性：** 从策略中获取的企业管理设置（如 `"model": "auto"`）并未在运行时实际应用。模型解析器默认使用其他值，而非遵循企业策略，这削弱了 IT 管理员的配置效果。

### 7. [添加设置以隐藏冗长的 MCP 状态通知](https://github.com/github/copilot-cli/issues/5034) — #5034
**状态:** 开放 | **评论：** 1 | **点赞：** 0
**重要性：** 用户希望有一个设置来抑制会话启动和运行期间显示的冗长 MCP 连接/断开及工具可用性通知。建议的解决方案是添加一个用户级设置，如 `mcp.showStatusNotifications: false`。

### 8. [当掩码代码变更指标使 session.shutdown 计数器变为字符串时，会话恢复失败](https://github.com/github/copilot-cli/issues/5023) — #5023
**状态:** 开放 | **评论：** 1 | **点赞：** 0
**重要性：** 持久化的 CLI 会话在工具遥测中的代码变更计数器被存储为掩码字符串而非数字时，会变成永久无法恢复的状态。这种数据损坏会导致会话恢复功能完全失效。

### 9. [Windows：VS Code 代理主机加载 ~/.copilot/instructions 两次](https://github.com/github/copilot-cli/issues/5022) — #5022
**状态:** 开放 | **评论：** 1 | **点赞：** 1 👍
**重要性：** 在 Windows 上，存放在 `~/.copilot/instructions` 下的个人指令文件由于去重逻辑中的驱动器字母大小写不匹配而被重复注入会话。这导致内容重复和意外行为。

### 10. [Linux 沙盒中使用 systemd-resolved 存根解析器时 DNS 故障](https://github.com/github/copilot-cli/issues/5027) — #5027
**状态:** 开放 | **评论：** 0 | **点赞：** 0
**重要性：** 在 Linux 上使用 systemd-resolved 运行沙盒时，DNS 查询会失败，因为沙盒继承的 `/etc/resolv.conf` 指向 `127.0.0.53`，这在沙盒容器内无法访问。

---

## 关键 PR 进展

### 1. [#5036: Update default model version in README](https://github.com/github/copilot-cli/pull/5036)
**状态:** 开放 | **作者:** mjgard
更新文档以反映 Copilot CLI 当前的默认模型。

---

## 功能需求趋势

分析 issue 队列揭示了几个主要的功能方向：

1. **多模型支持：** 多个 BYOK 模型（#3282）和企业模型设置应用（#4959）表明对灵活模型选择有强烈需求。

2. **MCP 改进：** macOS 更新后的 MCP 服务器可靠性（#4998）、Azure MCP HTTP 失败（#4851）和冗长通知控制（#5034）表明 MCP 正在成为关键工作流组件。

3. **权限细粒度：** 用户希望对仓库访问（#953）和企业管理的 MCP 服务器允许列表（#4989）进行精细控制。

4. **会话管理：** 工作树配置（#3675）、会话恢复可靠性（#5023、#2303）和会话命名一致性是反复出现的主题。

5. **Windows 体验：** CMD 窗口闪烁（#3171）、指令路径处理（#5022）和无人值守环境下的 CA 信任自动化表明 Windows 企业需求。

---

## 开发者痛点

影响最大的反复出现的挫败感：

1. **更新后的可靠性：** macOS 更新使 CLI 不可用（#4998）—— 用户需要跨系统变更的可预测行为。

2. **启动错误：** 身份验证竞态条件（#5008）即使在功能正常时也会产生错误的错误信息。

3. **会话持久性：** 会话因数据损坏（#5023）永久无法恢复，破坏了会话连续性的核心价值。

4. **企业配置缺口：** 企业管理的设置未被应用（#953）、权限过度问题（#953）和 GHEC 数据驻留路由问题（#4938）困扰着企业部署。

5. **MCP 生态系统：** STDIO MCP 服务器在新会话后加载失败（#4811）、Azure MCP 回归（#4851）和服务器名称匹配失败（#4989）表明 MCP 复杂性日益增加。

6. **Windows 集成：** CMD 窗口闪烁、路径大小写敏感性和沙盒环境中的 DNS 需要特定于平台的关注。

---

*动态基于 github.com/github/copilot-cli 数据生成*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode community digest from English to Chinese. Let me analyze the content and translate it while preserving the exact structure and formatting.

Key points to remember:
1. Only output the translation, no preamble or explanation
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, issue/PR references as-is
4. Keep technical terms, project names, usernames, etc. untranslated
5. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate section by section:

Title: "OpenCode 社区digest — 2026-10-02" 
"digest" can stay as is, or I can use "周报" or "摘要"
Actually, "digest" is commonly used in Chinese tech context, so I'll keep it.

Today's highlights:
- 需要翻译第一段，preserve technical terms

Releases: "发布" or "版本发布"

Hot Issues: "热门问题"

Key PR Progress: "关键 PR 进展"

Feature Request Trends: "功能需求趋势"

Developer Pain Points: "开发者痛点"

Let me translate the full piece now:</think>

# OpenCode 社区 Digest — 2026-10-02

## 今日要闻

OpenCode 社区正在积极处理几个高影响力问题，Q4 2026 即将到来。Claude Opus 4.6 助手消息预填充的关键修复（#13768）已通过 PR #14772 合并，解决了该模型用户的主要障碍。团队还在推进性能相关修复，包括 Anthropic 提示缓存改进（#14743）和 MCP 连接重试逻辑（#52614）。然而，Go 平台上多个与计费/订阅相关的问题仍未解决，用户报告了重复扣款和订阅激活失败的情况。

---

## 发布

过去 24 小时内无新版本发布。

---

## 热门问题

| # | Issue | 摘要 | 反应 |
|---|-------|---------|----------|
| [#13768](https://github.com/anomalyco/opencode/issues/13768) | **Claude Opus 4.6 助手消息预填充不受支持** | 使用 Opus 4.6 时频繁停止，报错"This model does not support assistant message prefill"。修复已在 #14772 中合并。 | 74 💬, 35 👍 |
| [#29363](https://github.com/anomalyco/opencode/issues/29363) | **`limit.output` 被静默限制为 32k** | 即使配置设置更高值（如 DeepSeek 的 384000），OpenCode 也会静默将 `maxOutputTokens` 限制为 32,000。只有实验性环境变量解决方案。 | 26 💬, 29 👍 |
| [#49389](https://github.com/anomalyco/opencode/issues/49389) | **插件会话功能缺口** | 核心中存在五个会话功能，但插件无法访问——影响会话枚举、隐藏/临时会话和工具上下文访问。 | 16 💬, 4 👍 |
| [#42440](https://github.com/anomalyco/opencode/issues/42440) | **Windows 控制台窗口在子进程启动时闪烁** | 在 Windows 11 上，每个 shell 命令执行都会短暂弹出控制台窗口——严重的 UX 困扰。 | 12 💬, 0 👍 |
| [#43355](https://github.com/anomalyco/opencode/issues/43355) | **桌面 UI 在智能体回合后冻结** | Electron 桌面应用在助手回合后冻结，渲染器卡在 ResizeObserver 循环中；只能强制退出恢复。 | 8 💬, 0 👍 |
| [#35276](https://github.com/anomalyco/opencode/issues/35276) | **Zen/Go API 返回 500 错误** | 所有发往 `/zen/v1/chat/completions` 的 POST 请求都返回 HTTP 500 内部服务器错误，无论模型或 API 密钥如何。 | 7 💬, 0 👍 |
| [#52367](https://github.com/anomalyco/opencode/issues/52367) | **未使用 gpt-6-luna 却被报告使用量** | 用户报告即使从未选择该模型，也在使用日志中看到 gpt-6-luna 模型使用量——引发计费担忧。 | 6 💬, 0 👍 |
| [#34407](https://github.com/anomalyco/opencode/issues/34407) | **LaTeX 数学在 CLI 中显示为原始文本** | LaTeX 数学公式（$...$, $$...$$）在终端输出中显示为原始源代码，而非渲染后的数学公式。 | 6 💬, 3 👍 |
| [#51682](https://github.com/anomalyco/opencode/issues/51682) | **达到使用限额时 Go 免费模型被阻止** | 达到 Go 使用限额后，文档标注为"无限"的免费模型被阻止——与文档描述相矛盾。 | 4 💬, 2 👍 |
| [#49184](https://github.com/anomalyco/opencode/issues/49184) | **Go 付费订阅未激活** | 用户支付了每月 $10 的订阅，但 Go 页面仍显示"订阅 Go"——DeepSeek 模型需要全局区域。 | 4 💬, 0 👍 |

---

## 关键 PR 进展

| # | PR | 描述 | 状态 |
|---|-----|-------------|--------|
| [#52620](https://github.com/anomalyco/opencode/pull/52620) | **fix(app): restore pre-extension behavior** | 扩展迁移的 A/B 审计修复——针对扩展前基线审计发现的约 30 个回归问题进行处理。 | ✅ 已关闭 |
| [#14743](https://github.com/anomalyco/opencode/pull/14743) | **fix(cache): improve Anthropic prompt cache hit rate** | 修复跨仓库和跨会话的 Anthropic 提示缓存未命中问题，改进了系统拆分和工具稳定性。 | 🔄 开放 |
| [#52612](https://github.com/anomalyco/opencode/pull/52612) | **fix(ai): enable Alibaba chat prompt caching** | 为阿里云 Qwen 模型启用系统提示和会话尾部缓存检查点；默认将提示降低为 `cache_control`。 | 🔄 开放 |
| [#52614](https://github.com/anomalyco/opencode/pull/52614) | **fix(core): retry transient MCP connect failures** | 远程 MCP 服务器在连接或目录列表期间遇到临时 503 失败时，现在会获得两次重试机会——防止过早进入 `failed` 状态。 | 🔄 开放 |
| [#49229](https://github.com/anomalyco/opencode/pull/49229) | **fix(core): default provider timeouts to five minutes** | 提供商请求现在默认使用两个五分钟超时（300,000 ms）：一个用于响应头，一个用于数据块间隔——限制无活动时长而非总时长。 | 🔄 开放 |
| [#52268](https://github.com/anomalyco/opencode/pull/52268) | **fix(core): warn when a command file is skipped** | 无效 `model:` 的命令 `.md` 文件现在会记录警告，而非被静默丢弃。 | 🔄 开放 |
| [#52063](https://github.com/anomalyco/opencode/pull/52063) | **fix(ui): only strike through double tildes** | 修复单个 `~` 对被错误处理为删除线的问题——防止如 `~5 min ... ~10 min` 这样的误判。 | 🔄 开放 |
| [#52515](https://github.com/anomalyco/opencode/pull/52515) | **chore(stats): retire legacy S3 lake** | 移除已废弃的 S3 表、目录、Athena 工作组及相关基础设施——将 LakeVpc/LakeCluster 移入 stats.ts。 | 🔄 开放 |
| [#52610](https://github.com/anomalyco/opencode/pull/52610) | **docs: describe v2 server authentication** | 修正 V2 服务器模式描述中关于 Basic Auth 和无密码嵌入式 fetch 处理器的说明。 | 🔄 开放 |
| [#14772](https://github.com/anomalyco/opencode/pull/14772) | **fix: disable assistant prefill for Claude 4.6 models** | 为拒绝预填充请求的 Claude Opus 4.6 和 Sonnet 4.6 模型禁用助手消息预填充。 | 🔄 开放 |

---

## 功能需求趋势

根据 Issue 分析，以下主题是功能需求的主流：

1. **插件/核心功能对等** — 插件无法访问核心会话功能（#49389）——用户希望向插件开发者开放完整的会话枚举、隐藏/临时会话和工具上下文 API。

2. **增强输出控制** — 对更高输出 token 限制的需求，无需实验性解决方案（#29363）——用户需要无缝支持 DeepSeek（384k）和 GPT/Claude（128k）等模型。

3. **跨平台一致性** — 特定于 Windows 的问题（控制台闪烁 #42440、UI 冻结 #43355）表明需要开展平台一致性工作。

4. **更好的 LaTeX 渲染** — 多个 Issue（#34407、#39170、#49486）请求在 CLI 和桌面版中正确渲染内联/块级 LaTeX。

5. **Linux 剪贴板增强** — PR #32370 为 Linux 添加了主缓冲区选择支持——这是 TUI 频繁请求的改进。

---

## 开发者痛点

社区对以下反复出现的挫折表达了强烈不满：

- **计费和订阅问题** — 多位 Go 用户报告重复扣款（#52592）、订阅激活失败（#49184、#52596）和不明模型使用量（#52367）。"端点不可用"错误（#43102、#42787、#42750）也表明影响开发者工作流的上游可靠性问题。

- **配置意外行为** — 静默行为如 32k token 限制（#29363）和静默跳过文件（#52268）让用户沮丧，他们期望可预测的行为。

- **平台特定 Bug** — Windows 开发者面临控制台闪烁（#42440）、UI 冻结（#43355）和 16 位二进制不兼容（#37628）——这些问题阻止了高效工作。

- **API 可靠性** — Zen/Go API 返回 500 错误（#35276）且无明确根本原因或解决时间表，是生产使用的阻碍。

- **缓存行为不透明** — 提示缓存未命中（#14743）和新图像的意外缓存行为（#51993）使成本预测困难。

---

*本文档基于 GitHub 数据为 anomalyco/opencode 生成 — 2026-10-02*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest from English to Chinese. I need to translate the content while:
1. Preserving the Markdown structure exactly
2. Keeping all URLs, numbers, issue/PR references, code, file paths, project names as-is
3. Using natural technical Chinese appropriate for a developer newsletter
4. Outputting ONLY the translation with no preamble or explanation

Let me translate this carefully:

# Pi 社区摘要 — 2026-10-02

## 今日要闻

v1.0.0 版本带来 **TUI 全屏默认** —— 这是一个重大的 UI 变更，同时也引入了 Home/End 键的行为变化，已经出现了内联图片渲染和 tmux 兼容性问题。与此同时，社区正在积极解决长期痛点：shrinkwrap 漏洞修复、OpenRouter 计费准确性改进，以及空闲会话的内存优化提案。

---

## 发布

### v1.0.0
- **全屏默认** — TUI 现在以全屏模式运行。将 `tuiMode` 设为 `"regular"` 可保留普通滚动回退。参见 [Terminal and display](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display)。
- **更精简的 cod...** *(发布说明在源文件中被截断)*

---

## 热门问题

| # | 标题 | 重要性 | 评论数 |
|---|-------|--------|----------|
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **[进行中] 移除 Shrinkwrap** | 由于 shrinkwrap 提升导致的磁盘上重复 `pi-ai` 包破坏了 API provider 注册表（模块级 Map）。影响同时将 `@earendil-works/pi-ai` 和 `@earendil-works/pi-coding-agent` 作为直接依赖的用户。 | 23 |
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **使用 ESC 停止思考时 Pi 卡在"Working..."** | 自 ~v0.0 版本以来的频繁 bug，用户需要用 `pi -c` 强制恢复会话。 | 19 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | **回归：剪贴板复制功能失效** | OSC 52 剪贴板逻辑现在需要 SSH 会话检测，在非 SSH 交互式容器中失效。 | 9 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | **满屏红

重绘风暴** | 长对话导致剧烈跳动和文字重影，TUI 全屏渲染效率问题。 | 9 |
| [#9980](https://github.com/earendil-works/pi/issues/9980) | **OpenRouter 费用比实际高 2-3 倍** | 目录使用最便宜 provider 定价，但实际路由常选更贵 provider，费用报告系统不准确。 | 5 |
| [#9887](https://github.com/earendil-works/pi/issues/9887) | **`read` 工具在行号为字符串时失效** | `xiaomi/mimo-v2.6-flash` 等模型发送字符串偏移，TUI 变成字符串拼接而非数值相加，显示异常。 | 5 |
| [#10250](https://github.com/earendil-works/pi/issues/10250) | **tmux 输入区自 0.99.0 起充满十六进制颜色垃圾** | 新的默认系统主题导致 tmux 3.6/3.6a 中输入损坏，启动时输入不可用。 | 3 |
| [#10247](https://github.com/earendil-works/pi/issues/10247) | **支持通过 unix socket 连接 mcp** | 当前仅支持 stdio 和 HTTP，Unix socket 支持可改善容器化和有命名空间的部署。 | 2 |
| [#9793](https://github.com/earendil-works/pi/issues/9793) | **长度截断导致历史记录远低于窗口** | 推理 token 省略导致意外的历史压缩，流式使用数据边缘情况。 | 3 |
| [#10319](https://github.com/earendil-works/pi/issues/10319) | **全屏 TUI：内联图片滚动时塌陷** | #9169 后续 — 图片初始渲染但在任何滚动操作后塌陷成一条。 | 1 |

---

## 关键 PR 进展

| # | 标题 | 状态 | 摘要 |
|---|-------|--------|---------|
| [#10322](https://github.com/earendil-works/pi/pull/10322) | 添加 Cloudflare Clef 分类器 | 已关闭 | 新增 `@cf/cloudflare/clef` (27B, $0.24/M) 和 `clef-flash` (9B, $0.09/M) 作为 Workers AI 分类器。 |
| [#10286](https://github.com/earendil-works/pi/pull/10286) | 使用 OpenRouter 报告的总费用 | 进行中 | 从目录估算切换到 OpenRouter 实际计费金额以实现准确计费。 |
| [#10293](https://github.com/earendil-works/pi/pull/10293) | 在系统主题中保持柔和调色板 | 已关闭 | 用衰减曲线限制色度，修复过饱和问题的同时保持对比度。 |
| [#10290](https://github.com/earendil-works/pi/pull/10290) | 强制转换字符串 read offset/limit | 已关闭 | 修复 #9887 — 确保数值相加即使模型发送字符串参数时也能正常处理。 |
| [#10275](https://github.com/earendil-works/pi/pull/10275) | 添加 Kenari 作为 API 密钥提供商 | 已关闭 | 新增印尼提供商 `kenari.id`，支持 `kn-` 密钥认证和筛选的工具能力模型。 |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | Anthropic OAuth 添加复制代码登录方式 | 已关闭 | 为远程 pi 使用启用代码登录方式，作为本地主机重定向的替代方案。 |
| [#10295](https://github.com/earendil-works/pi/pull/10295) | 登录时显示 Radius 动画 | 已关闭 | 在 /login 菜单中为 Radius 品牌添加流动颜色动画。 |
| [#9880](https://github.com/earendil-works/pi/pull/9880) | 发布配置模式 | 进行中 | 从 TypeBox 契约生成 `models.json`、`settings.json`、`keybindings.json` 和主题的 JSON Schema。 |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | 添加 LLM Gateway provider | 进行中 | 添加类似 OpenRouter 的 LLM Gateway 路由器作为内置 `openai-completions` provider。 |
| [#8383](https://github.com/earendil-works/pi/pull/8383) | 在 gemini-3.7-flash 上发送 LOW 禁用思考 | 进行中 | 修复 `MINIMAL` 思考级别被拒绝的问题，为 gemini-3.7-flash 切换到 `LOW`。 |

---

## 热门讨论

### 展示与分享
- [#10304](https://github.com/earendil-works/pi/discussions/10304): **pi-trim — 可检查的系统提示裁剪** — 一个 Pi 包，从 provider 绑定的系统消息中移除 Pi 特定的模板（harness 身份、文档指针、`PI_*` 提示），同时保留工具 schema。[👍 1]

---

## 功能请求趋势

1. **TUI/UX 改进** — 全屏模式改进：Home/End 键行为、焦点丢失时光标可见性、滚动时内联图片稳定性、柔和调色板处理
2. **Provider/OAuth 增强** — 每个 MCP 条目独立 OAuth 账户 (#10252)、MCP Unix socket 支持 (#10247)、改进的计费报告准确性
3. **内存与性能** — highlight.js 语法高亮懒加载 (#10308)、移除 shrinkwrap (#5653)
4. **模型/Provider 扩展** — Cloudflare Clef 分类器、Kenari provider、LLM Gateway 集成
5. **配置管理** — JSON Schema 发布 (#9880)、统一制品验证 (#10197)、`quietStartup` headeronly 选项

---

## 开发者痛点

- **卡在"Working..."** — ESC 停止思考冻结 (#10031) 频繁且具有破坏性；没有可靠的解决方案
- **tmux 兼容性** — 系统主题默认 (#10250) 在 tmux 中破坏输入；需要紧急修复
- **重复包问题** — Shrinkwrap 导致 `pi-ai` 重复，破坏注册表 (#5653)
- **计费不准确** — OpenRouter 费用报告系统错误 (#9980, #10286 正在进行中)
- **内存膨胀** — 空闲会话消耗约 140 MiB；开发者希望降低占用
- **剪贴板回归** — 容器用户失去 OSC 52 剪贴板功能 (#9688)

---

*摘要根据 2026-10-02 的 GitHub 数据为 earendil-works/pi 生成*</think>

# Pi 社区摘要 — 2026-10-02

## 今日要闻

v1.0.0 版本带来 **TUI 全屏默认** —— 这是一个重大的 UI 变更，同时也引入了 Home/End 键的行为变化，已经出现了内联图片渲染和 tmux 兼容性问题。与此同时，社区正在积极解决长期痛点：shrinkwrap 漏洞修复、OpenRouter 计费准确性改进，以及空闲会话的内存优化提案。

---

## 发布

### v1.0.0

- **全屏默认** — TUI 现在以全屏模式运行。将 `tuiMode` 设为 `"regular"` 可保留普通滚动回退。参见 [Terminal and display](https://github.com/earendil-works/pi/blob/v1.0.0/packages/coding-agent/docs/settings.md#terminal-and-display)。
- **更精简的 cod...** *(发布说明在源文件中被截断)*

---

## 热门问题

| # | 标题 | 重要性 | 评论数 |
|---|-------|--------|----------|
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **[inprogress] 移除 Shrinkwrap** | 由于 shrinkwrap 提升导致的磁盘上重复 `pi-ai` 包破坏了 API provider 注册表（模块级 Map）。影响同时将 `@earendil-works/pi-ai` 和 `@earendil-works/pi-coding-agent` 作为直接依赖的用户。 | 23 |
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **使用 ESC 停止思考时 Pi 卡在"Working..."** | 自 ~v0.84.0 以来的频繁 bug；用户必须 kill pi 并用 `pi -c` 恢复。没有可行的解决方案。 | 19 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | **回归：剪贴板复制功能失效** | OSC 52 剪贴板逻辑现在需要 SSH 会话检测；在非 SSH 交互式容器中失效。 | 9 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | **满屏重绘风暴，当修改行在视口上方时** | 长对话导致剧烈跳动和文字重影 — 全屏模式下 TUI 渲染效率问题。 | 9 |
| [#9980](https://github.com/earendil-works/pi/issues/9980) | **OpenRouter 费用比实际高 2-3 倍** | 目录使用最便宜 provider 定价，但实际路由常选更贵 provider — 费用报告系统性不准确。 | 5 |
| [#9887](https://github.com/earendil-works/pi/issues/9887) | **`read` 工具在行号为字符串时失效** | `xiaomi/mimo-v2.6-flash` 等模型发送字符串偏移；TUI 进行字符串拼接而非数值相加，破坏显示。 | 5 |
| [#10250](https://github.com/earendil-works/pi/issues/10250) | **自 0.99.0 起 tmux 输入充满十六进制颜色垃圾** | 新的系统主题默认导致 tmux 3.6/3.6a 中输入损坏 — 启动时输入不可用。 | 3 |
| [#10247](https://github.com/earendil-works/pi/issues/10247) | **支持通过 unix socket 连接 mcp** | 当前仅支持 stdio 和 HTTP；Unix socket 支持可改善容器化和有命名空间的部署。 | 2 |
| [#9793](https://github.com/earendil-works/pi/issues/9793) | **模糊的长度截断导致历史远低于窗口** | 推理 token 省略导致意外的历史压缩 — 流式使用数据边缘情况。 | 3 |
| [#10319](https://github.com/earendil-works/pi/issues/10319) | **全屏 TUI：内联图片滚动时塌陷** | #9169 后续 — 图片初始渲染但在任何滚动操作后塌陷成一条。 | 1 |

---

## 关键 PR 进展

| # | 标题 | 状态 | 摘要 |
|---|-------|--------|---------|
| [#10322](https://github.com/earendil-works/pi/pull/10322) | 添加 Cloudflare Clef 分类器 | **已关闭** | 新增 `@cf/cloudflare/clef` (27B, $0.24/M) 和 `clef-flash` (9B, $0.09/M) 作为 Workers AI 分类器。 |
| [#10286](https://github.com/earendil-works/pi/pull/10286) | 使用 OpenRouter 报告的总费用 | **进行中** | 从目录估算切换到 OpenRouter 实际计费金额以实现准确计费。 |
| [#10293](https://github.com/earendil-works/pi/pull/10293) | 在系统主题中保持柔和调色板 | **已关闭** | 用衰减曲线限制色度；修复过饱和 (#10255) 同时保持对比度。 |
| [#10290](https://github.com/earendil-works/pi/pull/10290) | 强制转换字符串 read offset/limit | **已关闭** | 修复 #9887 — 确保数值相加即使模型发送字符串参数时也能正常处理。 |
| [#10275](https://github.com/earendil-works/pi/pull/10275) | 添加 Kenari 作为 API 密钥提供商 | **已关闭** | 新增印尼提供商 `kenari.id`，支持 `kn-` 密钥认证和筛选的工具能力模型。 |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | Anthropic OAuth 添加复制代码登录方式 | **已关闭** | 为远程 pi 使用启用代码登录方式 — 作为本地主机重定向的替代方案。 |
| [#10295](https://github.com/earendil-works/pi/pull/10295) | 登录时显示 Radius 动画 | **已关闭** | 在 /login 菜单中为 Radius 品牌添加流动颜色动画。 |
| [#9880](https://github.com/earendil-works/pi/pull/9880) | 发布配置模式 | **进行中** | 从 TypeBox 契约生成 `models.json`、`settings.json`、`keybindings.json` 和主题的 JSON Schema。 |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | 添加 LLM Gateway provider | **进行中** | 添加类似 OpenRouter 的 LLM Gateway 路由器作为内置 `openai-completions` provider。 |
| [#8383](https://github.com/earendil-works/pi/pull/8383) | 在 gemini-3.7-flash 上发送 LOW 禁用思考 | **进行中** | 修复 `MINIMAL` 思考级别被拒绝的问题 — 为 gemini-3.7-flash 切换到 `LOW`。 |

---

## 热门讨论

### 展示与分享
- [#10304](https://github.com/earendil-works/pi/discussions/10304): **pi-trim — 可检查的系统提示裁剪** — 一个 Pi 包，从 provider 绑定的系统消息中移除 Pi 特定的模板（harness 身份、文档指针、`PI_*` 提示），同时保留工具 schema。[👍 1]

---

## 功能请求趋势

1. **TUI/UX 改进** — 全屏模式改进：Home/End 键行为、焦点丢失时光标可见性、滚动时内联图片稳定性、柔和调色板处理
2. **Provider/OAuth 增强** — 每个 MCP 条目独立 OAuth 账户 (#10252)、MCP Unix socket 支持 (#10247)、改进的计费报告准确性
3. **内存与性能** — highlight.js 语法高亮懒加载 (#10308)、移除 shrinkwrap (#5653)
4. **模型/Provider 扩展** — Cloudflare Clef 分类器、Kenari provider、LLM Gateway 集成
5. **配置管理** — JSON Schema 发布 (#9880)、统一制品验证 (#10197)、`quietStartup` headeronly 选项

---

## 开发者痛点

- **卡在"Working..."** — ESC 停止思考冻结 (#10031) 频繁且具有破坏性；没有可靠的解决方案
- **tmux 兼容性** — 系统主题默认 (#10250) 在 tmux 中破坏输入；需要紧急修复
- **重复包问题** — Shrinkwrap 导致 `pi-ai` 重复，破坏注册表 (#5653)
- **计费不准确** — OpenRouter 费用报告系统性错误 (#9980, #10286 正在进行中)
- **内存膨胀** — 空闲会话消耗约 140 MiB；开发者希望降低占用
- **剪贴板回归** — 容器用户失去 OSC 52 剪贴板功能 (#9688)

---

*摘要根据 2026-10-02 的 GitHub 数据为 earendil-works/pi 生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. I need to:

1. Translate all the text content (headings, body text, descriptions)
2. Keep all technical elements unchanged (URLs, issue numbers, PR numbers, version tags, file paths, code terms, etc.)
3. Keep all markdown structure (tables, lists, headings)
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the table structures and all technical details:

Key points to translate:
- "Today's Highlights" → "今日要闻"
- "Releases" → "版本发布"
- "Hot Issues" → "热门议题"
- "Key PR Progress" → "关键 PR 进展"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"
- All the issue descriptions and PR summaries
- The rules at the end

Let me go through each section:

**1. Today's Highlights**
The Qwen Code project continues its rapid Managed Agent evolution with significant architectural work on durable Sessions, lifecycle management, and security hardening. A new nightly release **v0.24.7-nightly.20261001.a7deb01bcb** addresses a Code Mode text alignment fix and permissions honoring. The community is heavily engaged with the Managed Agent dual-path architecture proposal (#12380, 38 comments) and token governance for long-context models (#12028). Security remains a focus with broker authentication design (#13180) and credential handling improvements.

**2. Releases**
**v0.24.20261001** brings important fixes and improvements to the Qwen Code project. The community is actively discussing the Managed Agent dual-path architecture (#12380, 38 comments) and token governance strategies (#12028). Security enhancements are underway, particularly around broker authentication (#13180) and credential management.

**3. Hot Issues**
The table needs translation of descriptions and priority explanations.

**4. Key PR Progress**
**5. Feature Request Trends**
Translation of technical terminology while maintaining precise specifications.

**6. Developer Pain Points**
Addressing core technical challenges in current development workflows.</think>

# Qwen Code 社区周报 — 2026-10-02

## 1. 今日要闻

Qwen Code 项目的 Managed Agent 正在快速演进，本周重点推进持久化 Session、生命周期管理和安全加固等架构工作。新发布 **v0.24.7-nightly.20261001.a7deb01bcb** 解决了 Code Mode 文本对齐问题和权限认可逻辑。社区对 Managed Agent 双路径架构提案（#12380，38 条评论）和长上下文模型的令牌治理（#12028）讨论热烈。安全方面持续关注 Broker 认证设计（#13180）和凭证管理改进。

---

## 2. 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v0.24.7-nightly.20261001.a7deb01bcb** | **fix(core):** 调整 Code Mode 文本以适配延迟工具发现（PR #12990）。**fix(permissions):** 正确识别已批准的权限。 |

---

## 3. 热门议题

| # | 议题 | 优先级 | 重要性 | 评论数 |
|---|------|--------|--------|--------|
| **#12380** | [proposal(serve): 定义 Managed Agent 双路径架构及分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380) | P2 | 提出分阶段 Managed Agent 架构，包含持久化所有权、Workspace 绑定、可恢复的工具执行和稳定的 WebSocket 生命周期。是多 Agent 和平台分发路线图的基石。 | 38 |
| **#12028** | [tracking(core): 非会话上下文令牌治理](https://github.com/QwenLM/qwen-code/issues/12028) | P2 | 解决系统性的令牌浪费问题：系统提示词、内置工具 Schema、上下文文件和技能列表每次请求都会发送，在大上下文模型中往往超过实际对话的令牌量。关乎成本与性能。 | 18 |
| **#12867** | [feat(managed-agent): Stage D 后续：持久化生命周期、Turns、Actions、持久化准入和 AgentDefinition](https://github.com/QwenLM/qwen-code/issues/12867) | P2 | 涵盖 Stage D 交付内容：持久化生命周期、Turns、Actions、`java_durable` 准入配置和 AgentDefinition。Managed Agent 技术栈的 API 契约打磨。 | 17 |
| **#12889** | [Deferred `tool_call` Schema 对具有必填字段的工具允许空参数](https://github.com/QwenLM/qwen-code/issues/12889) | P2 | **Bug:** 延迟工具（`tool_search`）在有必填字段时被以空参数调用，导致下游 Provider 报错。已可待评审。 | 7 |
| **#13157** | [Agent Host：在权限流程前运行隔离防护](https://github.com/QwenLM/qwen-code/issues/13157) | P2 | **Bug:** 在 Agent Host（`qwen serve --join`）模式下，Workspace 外的工具调用先触发权限流程，PLAN 模式升级时会自动拒绝，导致整个 Host 运行被终止。 | 5 |
| **#13182** | [fix(managed-agent): 重试循环缺乏终止状态，导致投影永久卡死](https://github.com/QwenLM/qwen-code/issues/13182) | P2 | **Bug:** 异步重试循环缺少终止状态；Java Broker 的消息投影无限期死锁。影响 Managed Agent 稳定性。 | 4 |
| **#13145** | [fix(memory): MEMORY.md 索引截断导致链接目标无法解析](https://github.com/QwenLM/qwen-code/issues/13145) | P2 | **Bug:** 内存索引构建器在 150 字符处截断行，导致链接 `[title](path.md)` 解析失败，留下悬空的省略号。 | 4 |
| **#13180** | [feature(managed-agent): Broker 认证和 Broker 提供的 Writer 凭证](https://github.com/QwenLM/qwen-code/issues/13180) | P2 | 为 Managed Agent Runtime Broker 设计认证/凭证层，用经过认证的主体中的租户/ Actor 身份替代当前的信任机制。 | 4 |
| **#13030** | [feat(managed-agent): 在新的 Hosted Workspace 配置文件中引入只读搜索工具](https://github.com/QwenLM/qwen-code/issues/13030) | P2 | 提议为 Hosted Harness 的 Workspace 配置文件添加 `list_directory`、`glob` 和 `grep_search` 等只读工具。 | 9 |
| **#12702** | [fix(core): 延迟工具丢失"用我替代 X"的规则](https://github.com/QwenLM/qwen-code/issues/12702) | P2 | **Bug:** 延迟工具的"用我替代 X"引导规则被 `declaredTools` 条件阻挡，模型无法看到替换建议。 | 4 |

---

## 4. 关键 PR 进展

| # | PR | 作者 | 摘要 |
|---|-----|------|------|
| **#13135** | [feat(managed-agent): 可靠关闭 Workspace 绑定的 Session](https://github.com/QwenLM/qwen-code/pull/13135) | doudouOUC | 通过公开和 WebShell 生命周期操作实现空闲 Workspace 绑定 Session 的可靠关闭，支持幂等 202 准入。 |
| **#13179** | [fix(managed-agent): 加固提交重试、Worker 隔离、面板轮询](https://github.com/QwenLM/qwen-code/pull/13179) | wenshao | 三个鲁棒性修复：拒绝 Workspace 外的相对文件路径，附带新单元测试。 |
| **#13146** | [fix(serve): 让 Web Shell 信任没有终端的 Workspace](https://github.com/QwenLM/qwen-code/pull/13146) | yiliang114 | 添加守护进程路由以记录文件夹信任决策，在 Web Shell 项目面板中显示"信任"操作。 |
| **#13192** | [fix(managed-agent): 保留 Writer 和发布版 epoch 截止时间](https://github.com/QwenLM/qwen-code/pull/13192) | yiliang114 | 修正托管 Writer 租约和工具发布授权的 Unix epoch 截止时间，修复 JDBC/JVM/DB 时区不匹配问题。 |
| **#13084** | [feat(managed-agent): 保护 Session 拥有的工具输出回收](https://github.com/QwenLM/qwen-code/pull/13084) | doudouOUC | 添加永久 Session 回收、限定预算的数据库 Reader 租约、独立的物理 PUT 尝试、前台 Shell 输出的候选观察。 |
| **#13156** | [fix(memory): 保证 MEMORY.md 索引链接目标可解析](https://github.com/QwenLM/qwen-code/pull/13156) | yiliang114 | 修复索引截断以保留链接完整性；在字符限制前先拼接完整行。 |
| **#13138** | [feat(managed-agent): 添加离线 W1b 恢复包](https://github.com/QwenLM/qwen-code/pull/13138) | doudouOUC | 完整的 W1b 离线恢复证据工作流：捕获恢复点、导出日志、与存储对比。 |
| **#13136** | [fix(managed-hooks): 限制 Hook 准入和冷启动成本](https://github.com/QwenLM/qwen-code/pull/13136) | wenshao | Hook 准入不再读取 Session 历史；冷 Workspace 加载每个 Hook 资源仅读取一次；将项目键投影到索引列。 |
| **#13033** | [feat(core): 默认延迟声明 Agent 和 Goal](https://github.com/QwenLM/qwen-code/pull/13033) | yiliang114 | 使 Agent/Goal 协调工具（`agent`、`list_agents`、`get_goal`、`update_goal`、`propose_goal`）默认按需发现。 |
| **#13151** | [feat(core): 允许 Code Mode 中并发调用 Bash](https://github.com/QwenLM/qwen-code/pull/13151) | tanzhenxin | 允许 Code Mode 中的 Bash 调用在模型使用 `await Promise.allSettled([...])` 时并发运行。 |

---

## 5. 功能需求趋势

基于 Issue 和 PR 统计，以下功能方向需求最强烈：

| 趋势 | 描述 | 相关议题 |
|------|------|----------|
| **Managed Agent 持久化** | 持久化生命周期、Session 所有权、Workspace 绑定、可恢复执行、Turn/Action 模型 | #12380, #12867, #12952, #13135 |
| **令牌/上下文治理** | 非会话上下文优化、令牌成本基准测试、记忆提取冷却策略 | #12028, #12333, #13004, #13003 |
| **安全加固** | Broker 认证、凭证管理、远程连接 HTTPS 强制、隔离防护 | #13180, #13123, #13157 |
| **Hosted Workspace 工具** | Hosted 环境中的只读搜索工具（`list_directory`、`glob`、`grep_search`） | #13030 |
| **Session 历史与接管** | 权威 Session 历史、Writer 围栏、外部检查点、Turn 接管 | #12952, #13187 |

---

## 6. 开发者痛点

- **令牌成本不透明**：开发者苦于非会话上下文（系统提示词、工具 Schema、技能列表）每次请求都被发送，却无法看清实际令牌消耗或任务成功的影响（#12028, #12333）。
- **Managed Agent 稳定性**：重试循环缺乏终止状态、投影死锁、权限流程顺序导致 Host 崩溃等反复出现的问题（#13182, #13157）。
- **内存索引损坏**：MEMORY.md 索引截断 bug 破坏内部链接解析，影响使用托管记忆功能的用户（#13145）。
- **延迟工具引导失效**："用我替代 X"的替换规则在默认配置下被挡在模型视野之外，降低了工具优化效果（#12702）。
- **CI/依赖漏洞**：每日 CVE 审计持续失败（#13078），带来维护负担。

---

*周报基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

---

规则：
- 仅输出翻译内容。不需要前言、解释，或在整体输出外加 Markdown 代码块。
- 完全保留 Markdown 结构：标题、表格（含对齐行）、列表、引用、粗斜体、分隔线。
- 保持 URL、链接目标、代码片段、代码块、数字和日期不变。
- 保持项目名称、仓库标识、用户名、版本标签、文件路径和 API/配置名称的原始形式——不翻译。
- Issue/PR 引用如 #12345 及其链接文字保持原样。
- 使用自然的技术中文，中国开发者Newsletter 的语体风格——而非逐字直译。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*