# AI CLI 工具社区动态日报 2026-10-09

> 生成时间: 2026-10-09 02:30 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English report about AI CLI tools into Simplified Chinese. I need to:

1. Translate ONLY - no preamble, no explanation, no markdown fences
2. Preserve ALL Markdown structure exactly
3. Keep all technical terms, URLs, project names, version numbers, issue numbers, code identifiers as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through and translate this carefully while maintaining the exact structure and keeping technical elements intact.

I'll translate the content, preserving:
- Headings
- Tables (including alignment rows)
- Lists
- Bold/italic
- Horizontal rules
- Emoji
- URLs
- Issue/PR references
- Version tags
- Project names
- Code/technical identifiers

Let me translate section by section:

---

## 1. Ecosystem Overview

AI CLI 工具领域已经相当成熟，七大主要玩家正在争夺开发者的关注。Claude Code、OpenAI Codex 和 GitHub Copilot CLI 在发布频率、安全性和可靠性方面领先，每周发布多个版本，具有强大的安全性和可靠性重点。Google 的 Gemini CLI 和开源替代方案（OpenCode、Pi、Qwen Code）在托管代理、多会话持久化和平台分发方面表现出更激进的功能开发。所有工具都保持了活跃的问题跟踪和 PR 流程，社区参与度整体健康——不过值得注意的是，GitHub Copilot CLI 缺少 Discussions 频道，依赖 Issues 作为唯一的社区渠道。

---

## 2. Activity Comparison

| 工具 | Issues (显示) | PRs (显示) | Discussions | Releases (24h) |
|------|------------------|---------------|-------------|----------------|
| **Claude Code** | 50 (top 30) | 2 | N/A | 2 (v2.1.294, v2.1.295) |


| **OpenAI Codex** | 50 (top 30) | 20 | 4 | 5 (rust-v0.162.0, alphas) |
| **Gemini CLI** | 50 (top 30) | 10 | 0 | 0 |
| **Copilot CLI** | 50 (top 30) | 0 | N/A | 3 (v1.0.94–95-1) |
| **OpenCode** | 50 (top 30) | 20 | N/A | 0 |

我注意到每个工具在活跃度和社区参与方面展现了不同的特征。OpenAI Codex 拥有最高的发布频率和最多的 PR 数量，而其他工具则在 Issues 数量上保持相对稳定。值得注意的是，Discussions 频道的使用非常有限，大多数工具依赖 Issues 作为主要的社区互动渠道。

| **Pi** | 50 (top 30) | 10 | 4 | 0 |
| **Qwen Code** | 50 (top 30) | 10 | 0 | 0 |

*注："N/A" 表示该工具未启用 Discussions 作为社区渠道（GitHub 功能已禁用）。*

---

## 3. Shared Feature Directions

以下需求在多个工具社区中都有出现：

| 功能方向 | 涉及工具 | 具体需求 |
|-------------------|----------------|----------------|
| **多代理 / 子代理系统** | Claude Code, Gemini CLI, Pi, Qwen Code | 子代理恢复逻辑、双路径架构、子会话运行时 |
| **持久化 / 会话保持** | Claude Code, OpenAI Codex, Gemini CLI, Pi, Qwen Code | 会话检查点、轮次/动作跟踪、跨会话连续性 |

多个工具社区正在解决一些共同的技术挑战。代理系统的复杂性导致了双路径架构和子代理恢复机制的出现。会话管理也成为关键领域，各工具都在实现跨会话的持久化方案。

内存管理和终端增强是主要的技术方向。Claude Code、Gemini CLI 和 OpenCode 都在优化截断策略和提取边界。同时，终端体验的改进涉及全屏模式、快捷键、调整大小处理等。安全方面也在加强，涵盖 OAuth 修复、沙盒模式和路径遍历防护。

在协议层面，MCP 集成和平台分发成为关键。Claude Code、Copilot CLI、OpenCode 和 Pi 都在推动动态工具刷新和 OAuth 合规性。Windows 沙盒和 WSL 互操作性代表了重要的平台支持策略。

---

## 4. Differentiation Analysis

| 工具 | 主要焦点 | 目标用户 | 技术方案 |
|------|---------------|--------------|---------------------|
| **Claude Code** | 钩子、安全性、企业级控制 | 需要工作流自动化的开发者 | 指令驱动型钩子配合 `onFailure: "block"` |
| **OpenAI Codex** | Windows 桌面、可靠性、IDE 集成 | Windows 开发者、VS Code 用户 | Windows 优先架构，结合命令中心和置顶任务 |
| **Gemini CLI** | 托管代理、平台分发 | 期望代理编排的高级用户 | 分阶段托管代理架构，配置独立运行时 |
| **Copilot CLI** | 身份验证、MCP、快捷 CLI 工作流 | GitHub 用户、MCP 生态消费者 | 微软 Entra 代理，MCP 优先方案 |
| **OpenCode** | 会话 UI、时间线、确定性解析 | 追求对话清晰度的强力用户 | 确定性子串解析，支持国际化 |
| **Pi** | 扩展

、无人值守操作、钩子 | 构建自定义代理的开发者 | 广泛钩子 API，点对点消息传递 |
| **Qwen Code** | 多代理、A2A 协议、Kubernetes | 企业级部署 | H4b/H5 子运行时，会话级 A2A |

从市场定位来看，每个工具都有独特的策略：Claude Code 强调安全性和企业级控制，OpenAI Codex 专注 Windows 生态，Gemini CLI 突出代理编排能力。Copilot CLI 借助 GitHub 生态系统，OpenCode 追求清晰会话体验，Pi 注重开发者定制，Qwen Code 则面向企业大规模部署。 多个工具正在开发代理编排功能，包括 Gemini CLI、Qwen Code 和 Pi，它们专注于多代理架构、子会话运行时间和代理间通信协议。这表明行业正从单一代理 CLI 工具向协调代理系统转变。

2. **持久化成为基础功能** — 会话持久化、检查点恢复和轮次/动作跟踪已在 Codex、Claude Code、Gemini CLI、Pi 和 Qwen Code 中普及，用户期望长时间运行的对话能在重启和网络中断后继续。

3. **安全优先开发** — 每个工具都在加强安全加固：OAuth 合规性、路径遍历防护、沙盒模式、凭证掩码，这反映了企业级应用和安全期望的提升。

4. **Windows 平台最具挑战** — Windows 特定问题在 Codex、Copilot CLI、Pi 和 Gemini CLI 的错误报告中占主导，包括文件锁定、沙盒配置、TCC 权限和 PowerShell 集成。若要在这一生态系统开发，需要优先进行 Windows 测试。

5. **MCP 正在成为通用标准** — MCP（模型上下文协议）集成几乎无处不在。各工具在 MCP 服务器管理、动态工具刷新和 OAuth 合规性方面展开竞争，MCP 正在成为差异化因素。

6. **终端体验差异化** — 虽然所有工具都有 TUI 组件，但差异化正在显现：Claude Code 的 OSC 7501 终端状态、Copilot CLI 的模型切换、OpenCode 的确定性时间线、Pi 的快捷键扩展。CLI 体验正成为关键竞争维度。

7. **企业级功能正在涌现** — Claude Code 的 HIPAA 设置、OpenAI Codex 的权限中心、Qwen Code 的 Kubernetes 部署、Copilot CLI 的 BYOK 模型切换——生态系统正在从个人开发者工具向团队/企业工作流演进。

---

*跨工具分析基于 2024-10-09 的社区摘要数据。*</think>

# 跨工具对比：AI CLI 工具生态概览

## 1. 生态概览

AI CLI 工具领域已经相当成熟，七大主要玩家正在争夺开发者的关注。Claude Code、OpenAI Codex 和 GitHub Copilot CLI 在发布频率、安全性和可靠性方面领先，每周发布多个版本。Google 的 Gemini CLI 和开源替代方案（OpenCode、Pi、Qwen Code）在托管代理、多会话持久化和平台分发方面表现出更激进的功能开发。所有工具都保持了活跃的问题跟踪和 PR 流程，社区参与度整体健康——不过值得注意的是，GitHub Copilot CLI 缺少 Discussions 频道，依赖 Issues 作为唯一的社区渠道。

---

## 2. 活跃度对比

| 工具 | Issues (显示) | PRs (显示) | Discussions | Releases (24h) |
|------|------------------|---------------|-------------|----------------|
| **Claude Code** | 50 (top 30) | 2 | N/A | 2 (v2.1.294, v2.1.295) |
| **OpenAI Codex** | 50 (top 30) | 20 | 4 | 5 (rust-v0.162.0, alphas) |
| **Gemini CLI** | 50 (top 30) | 10 | 0 | 0 |
| **Copilot CLI** | 50 (top 30) | 0 | N/A | 3 (v1.0.94–95-1) |
| **OpenCode** | 50 (top 30) | 20 | N/A | 0 |
| **Pi** | 50 (top 30) | 10 | 4 | 0 |
| **Qwen Code** | 50 (top 30) | 10 | 0 | 0 |

*注："N/A" 表示该工具未启用 Discussions 作为社区渠道（GitHub 功能已禁用）。*

---

## 3. 共性功能方向

以下需求在多个工具社区中都有出现：

| 功能方向 | 涉及工具 | 具体需求 |
|-------------------|----------------|----------------|
| **多代理 / 子代理系统** | Claude Code, Gemini CLI, Pi, Qwen Code | 子代理恢复逻辑、双路径架构、子会话运行时 |
| **持久化 / 会话保持** | Claude Code, OpenAI Codex, Gemini CLI, Pi, Qwen Code | 会话检查点、轮次/动作跟踪、跨会话连续性 |
| **内存管理** | Claude Code, Gemini CLI, OpenCode | 截断透明度、有界提取、提示词前缀保留 |
| **终端 / TUI 增强** | Claude Code, Copilot CLI, OpenCode | 全屏模式、leader 快捷键、调整大小处理、工具输出预览 |
| **安全加固** | Claude Code, Gemini CLI, Copilot CLI, OpenCode, Qwen Code | OAuth 修复、沙盒模式、路径遍历防护、凭证掩码 |
| **MCP 集成** | Claude Code, Copilot CLI, OpenCode, Pi | 动态工具刷新、OAuth RFC 合规、服务器懒加载 |
| **平台分发** | Gemini CLI, OpenAI Codex, Copilot CLI | Windows 沙盒、WSL 互操作性、Kubernetes 运行时 |

---

## 4. 差异化分析

| 工具 | 主要焦点 | 目标用户 | 技术方案 |
|------|---------------|--------------|---------------------|
| **Claude Code** | 钩子、安全性、企业级控制 | 需要工作流自动化的开发者 | 指令驱动型钩子配合 `onFailure: "block"` |
| **OpenAI Codex** | Windows 桌面、可靠性、IDE 集成 | Windows 开发者、VS Code 用户 | Windows 优先架构，结合 Command Center 和置顶任务 |
| **Gemini CLI** | 托管代理、平台分发 | 期望代理编排的高级用户 | 分阶段托管代理架构，CSI 运行时 |
| **Copilot CLI** | 身份验证、MCP、快捷 CLI 工作流 | GitHub 用户、MCP 生态消费者 | Microsoft Entra broker，MCP 优先 |
| **OpenCode** | 会话 UI、时间线、确定性解析 | 追求对话清晰度的强力用户 | 确定性文件链接解析，i18n |
| **Pi** | 扩展、无人值守操作、钩子 | 构建自定义代理的开发者 | 广泛钩子 API，点对点消息传递 |
| **Qwen Code** | 多代理、A2A 协议、Kubernetes | 企业级部署 | H4b/H5 子运行时，会话级 A2A |

---

## 5. 社区活力与成熟度

**最高迭代速度（频繁发布，积极开发）：**

- **OpenAI Codex** — 24 小时内 5 个发布，20 个 PR，强大的 Windows 可靠性投入
- **Claude Code** — 2 个发布，稳定 v2.1.x，成熟的钩子系统
- **Copilot CLI** — 3 个发布，Microsoft 生态集成领先

**活跃开发（显著 PR 量，功能丰富）：**

- **OpenCode** — 20 个 PR，i18n 基础设施，会话 UI 改进
- **Qwen Code** — 托管代理架构（Stage D），H4b/H5 运行时
- **Pi** — 扩展 API，OAuth 修复，MCP 增强
- **Gemini CLI** — 0 个发布但 10 个 PR，托管代理架构

**社区参与（问题/评论）：**

- **Qwen Code** — 最高问题评论量（top issues 共 50 条评论），表明活跃的讨论
- **Claude Code** — #65961（250 👍）显示最强的单 issue 社区共识
- **Pi** — 关于点对点消息传递和无人值守运行的活跃讨论
- **OpenAI Codex** — 多条高评论 issue（85、46、25 条），表明广泛的用户反馈

---

## 6. 趋势信号

以下模式从社区反馈中浮现，对评估此生态的开发者具有参考价值：

1. **代理编排是下一个前沿** — 多个工具（Gemini CLI、Qwen Code、Pi）正在大力投入多代理架构、子会话运行时间和代理间通信协议（A2A）。这标志着从单代理 CLI 工具向协调代理系统的转变。

2. **持久化成为标配** — 会话持久化、检查点恢复和轮次/动作跟踪出现在 Codex、Claude Code、Gemini CLI、Pi 和 Qwen Code 中。用户期望长时间运行的对话能经受住重启和网络中断。

3. **安全优先开发** — 每个工具都在解决安全加固问题：OAuth 合规性、路径遍历防护、沙盒模式、凭证掩码。这反映了企业级采用和安全期望的提升。

4. **Windows 是最具挑战的平台** — Windows 特定问题在 Codex、Copilot CLI、Pi 和 Gemini CLI 的 bug 报告中占主导：文件锁定、沙盒配置、TCC 权限、PowerShell 集成。若要在这一生态构建，请考虑优先进行 Windows 测试。

5. **MCP 正在成为通用标准** — MCP（Model Context Protocol）集成几乎无处不在。各工具在 MCP 服务器管理、动态工具刷新和 OAuth 合规性方面展开竞争。MCP 正在成为差异化因素。

6. **终端体验差异化** — 虽然所有工具都有 TUI 组件，但差异化正在显现：Claude Code 的 OSC 7501 终端状态、Copilot CLI 的模型切换、OpenCode 的确定性时间线、Pi 的快捷键扩展。CLI 体验正成为关键竞争维度。

7. **企业级功能正在涌现** — HIPAA 设置（Claude Code）、权限中心（OpenAI Codex）、Kubernetes 部署（Qwen Code）、BYOK 模型切换（Copilot CLI）——该生态正在从个人开发者工具向团队/企业工作流演进。

---

*跨工具分析基于 2026-10-09 的社区摘要数据。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English report about Claude Code Skills Community Highlights into Chinese. I need to:

1. Translate all the content into Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, code references, issue numbers, project names as-is
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation with no preamble or explanation

Let me translate this carefully:

Title: Claude Code Skills Community Highlights Report
Data as of October 9, 2026 → 截至2026年10月9日的数据

Let me go through section by section:</think>

# Claude Code 技能社区亮点报告

**数据截至2026年10月9日**

---

## 1. 热门技能排名

以下 PR 按参与度和讨论量排列，代表最活跃的技能贡献：

| PR | 技能 | 作者 | 状态 | 概要 |
|----|-------|--------|--------|---------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder**（修复） | Kuldeeep18 | OPEN | 修复 MCP SDK v2 重大变更：`streamablehttp_client` 重命名为 `streamable_http_client`，通过 `create_mcp_http_client`/`http_client` 更新请求头配置。MCP 集成的关键兼容性更新。 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator**（修复） | MartinCajiao | OPEN | 修复触发评估可靠性问题：解决因每工作线程命令探测冲突导致的误报、Windows `select()` 在子进程管道上的失败，以及错误地将运行时失败判定为负例的问题。 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | ProofCore-Protocol | OPEN | 面向 Web3 开发者的智能体技能：对 Solidity 和 Rust 智能合约执行自动化静态分析，使用零存储 Merkle 协议将加密审计证明锚定到 TON 区块链。 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 70v-Yoyo | OPEN | 零成本技能，将 Markdown 文档合成为带有逼真人声旁白的专业 MP4 视频，采用 Marp 实现。 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation** | mrdesouzaphd-cmyk | OPEN | 将产品/技术规格转换为 Claude Code 实现的 Notion 任务，包含详细任务、验收标准和进度追踪。 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | kitao | OPEN | 使用 Pyxel 框架开发 Python 复古游戏的技能：指导实现、无头输入驱动运行、帧检查和任务特定状态验证。 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | PGTBoos | OPEN | 防止 AI 生成文档中的排版问题：孤行单词、寡夫段落、编号错位。 |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT（AI Watch Tester）** | ksgisang | OPEN | 端到端测试技能，赋予 Claude 视觉和浏览器控制能力，实现零代码自动化测试生成。 |

**注意：** 所有热门 PR 均为 OPEN 状态，表明开发周期活跃或待审核。在此数据集中，前20名 PR 暂无合并记录。

---

## 2. 社区需求趋势

 Issues 分析揭示以下高优先级需求领域：

### 安全与信任
- **[#492](https://github.com/anthropics/skills/issues/492)**（43条评论）— **关键问题：** 分发在 `anthropic/` 命名空间下的社区技能存在信任边界滥用风险。用户可能误以为社区技能为官方认证而无意中授予过高权限。

### 基础设施与工具
- **[#556](https://github.com/anthropics/skills/issues/556)**（12条评论）— `run_eval.py` 报告所有查询触发率为0%；技能/命令在评估期间从未触发。
- **[#1352](https://github.com/anthropics/skills/issues/1352)**（4条评论）— `run_eval.py` 中的并行工作线程交叉匹配技能 UUID，产生系统性误报。

### 协作与共享
- **[#228](https://github.com/anthropics/skills/issues/228)**（16条评论）— 强烈需求在 Claude.ai 中实现组织级技能直接共享；当前工作流程需要手动文件传输和设置导航。

### 技能质量与评估
- **[#83](https://github.com/anthropics/skills/pull/83)** — 元技能已添加：`skill-quality-analyzer` 和 `skill-security-analyzer`。
- **[#202](https://github.com/anthropics/skills/issues/202)**（已关闭）— `skill-creator` 修订版提升了可操作性代币效率。

### 性能与扩展性
- **[#1487](https://github.com/anthropics/skills/issues/1487)** — `claude-api` 技能单次调用注入约 156k token，耗尽上下文窗口。

---

## 3. 高潜力待发布技能

以下活跃 PR 展现强劲参与度，可能即将合并：

| PR | 技能 | 就绪指标 |
|----|-------|----------------------|
| [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator eval-viewer 加固** | 修复安全问题：脚本逃逸、DNS 重绑定、跨站 POST、转义漏洞 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx LibreOffice 超时处理** | 修复错误报告并验证输出 DOCX 清洁度 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | **claude-api 死链修复** | 将3个硬404 URL 替换为验证过的规范链接 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator 直接执行** | 支持独立执行 `package_skill.py`，更新过时文档 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求是稳健的技能评估和可靠性基础设施** — `skill-creator` 评估框架、触发检测和跨平台兼容性（Windows 支持）主导了讨论，其次是安全加固和组织级共享能力。

---

*报告数据来源于 GitHub anthropics/skills 仓库（数据截至 2026-10-09）。*

---

<think>The user wants me to translate the Claude Code Community Digest into Simplified Chinese. I need to:

1. Translate the content while preserving all formatting (headings, tables, lists, etc.)
2. Keep all URLs, issue numbers, code, file paths, version tags as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. No preamble, no explanation - just the translation in Chinese

Let me translate this carefully, maintaining the structure and technical accuracy.</think>

# Claude Code 社区摘要 — 2026-10-09

## 今日要闻

过去 24 小时发布了两个小版本（v2.1.294 和 v2.1.295），主要聚焦于钩子可靠性和终端集成。最重要的更新是增加了 Program Status Protocol（OSC 7501）支持，使终端能够显示 Claude Code 的运行状态。与此同时，社区讨论仍然集中在 Claude 忽略用户指令、默认生成冗长代码注释的行为上（#65961，250 👍），目前有 41 条评论——使其成为参与度最高的问题。

---

## 版本更新

**v2.1.295** — 2026-10-08

- 为命令钩子和 HTTP 钩子添加了 `onFailure: "block"`：钩子启动失败、超时或以非预期代码退出时，现在会阻止操作执行而非放行
- 添加了 **Program Status Protocol（OSC 7501）支持**：实现此协议的终端可以显示 Claude Code 当前是否正在运行

**v2.1.294** — 2026-10-08

- 修复了以指令形式编写的 `prompt` 和 `agent` 钩子（如"阻止命令……"）正确阻止目标行为的问题
- 改进了对以指令形式编写的 Stop 和 SubagentStop 上的 `prompt` 钩子（如"如果构建损坏则继续"）的评估方式，减少了误报

---

## 热门问题

1. **【#65961】【模型】Claude 默认生成冗长代码注释——忽略停止指令**  
   **问题核心：** 即使用户明确要求停止，模型仍会生成过于冗长的代码注释，影响代码可读性和 token 消耗。  
   **社区反馈：** 250 👍，41 条评论——远超其他问题的参与度。  
   🔗 https://github.com/anthropics/claude-code/issues/65961

2. **【#91495】Claude Code 桌面端内置浏览器忽略站点权限（"允许所有网站"）**  
   **问题核心：** macOS 用户反映配置的站点权限未在桌面应用的内置浏览器中生效，存在潜在安全和可用性问题。  
   **社区反馈：** 18 👍，18 条评论。  
   🔗 https://github.com/anthropics/claude-code/issues/91495

3. **【#95125】桌面应用：希望 Enter 键插入换行，仅 Ctrl+Enter 提交**  
   **问题核心：** Windows 桌面用户经常在编写多段落提示时误按 Enter 导致未完成的提示被提交。这是其他聊天应用的常见交互模式。  
   **社区反馈：** 28 👍，8 条评论——呼声很高的功能请求。  
   🔗 https://github.com/anthropics/claude-code/issues/95125

4. **【#99403】MEMORY.md 超出大小限制时被静默截断——没有提示哪些条目被丢弃**  
   **问题核心：** 当项目内存索引超过大小限制时，条目会被静默丢弃，且不会警告用户哪些条目已丢失，导致潜在的知识盲区。  
   **社区反馈：** 9 条评论，0 👍（新问题）。  
   🔗 https://github.com/anthropics/claude-code/issues/99403

5. **【#81024】VS Code 扩展：在会话列表中显示 git worktree 会话**  
   **问题核心：** 扩展硬编码了 `includeWorktrees: false`，导致 git worktree 中的会话不会出现在会话列表中——这是多分支工作流的痛点。  
   **社区反馈：** 9 👍，8 条评论。  
   🔗 https://github.com/anthropics/claude-code/issues/81024

6. **【#95822】短生命周期命令在初始化时启动 OAuth 刷新，退出时未保存，导致刷新令牌失效**  
   **问题核心：** 诸如 `claude auth status` 的命令会触发 OAuth 刷新但在完成前退出，导致配置文件中存储了无效的刷新令牌。  
   **社区反馈：** 6 条评论，1 👍。  
   🔗 https://github.com/anthropics/claude-code/issues/95822

7. **【#99524】网络变化后，下一个请求在死连接上挂起 180 秒才重试（Linux）**  
   **问题核心：** Linux 用户在网络拓扑变化时会遇到 3 分钟的挂起，因为客户端无法及时检测到死连接。  
   **社区反馈：** 4 条评论，0 👍。  
   🔗 https://github.com/anthropics/claude-code/issues/99524

8. **【#100278】每 2 分钟弹出一次警告："Max 模式运行时间更长，消耗可能是 Medium 的 3.5 倍或更多"**  
   **问题核心：** 故意选择 Max 努力等级的用户会被一条反复出现的警告条骚扰，且无法永久关闭。  
   **社区反馈：** 3 条评论，2 👍。  
   🔗 https://github.com/anthropics/claude-code/issues/100278

9. **【#87833】在 Claude Desktop 启动会话会撤销已运行 CLI 会话的文件系统访问权限（macOS TCC）**  
   **问题核心：** TCC（透明性、同意和控制）标识符冲突导致 CLI 会话在 Desktop 会话启动时失去对 TCC 保护文件夹的读取权限。  
   **社区反馈：** 3 条评论，1 👍。  
   🔗 https://github.com/anthropics/claude-code/issues/87833

10. **【#100672】桌面应用：新会话应默认使用所选会话的文件夹，而非上次使用的文件夹**  
    **问题核心：** 从特定选中的会话启动新会话时，应该继承该会话的工作目录，而非全局最近使用的文件夹。  
    **社区反馈：** 0 条评论，0 👍（新问题）。  
    🔗 https://github.com/anthropics/claude-code/issues/100672

---

## 主要 PR 进展

1. **【#100293】在 examples/settings 中添加 HIPAA 配置示例**  
   添加了 `settings-hipaa.json`、`managed-mcp-hipaa.json` 和 `README-hipaa.md`，供需要 HIPAA 合规会话内容处理的组织使用。  
   🔗 https://github.com/anthropics/claude-code/pull/100293

2. **【#41447】feat: 开源 claude code**  
   开源 Claude Code 的长期提案。引用了 issues #59、#456、#2846、#22002 和 #41434。  
   🔗 https://github.com/anthropics/claude-code/pull/41447

---

## 功能请求趋势

根据问题概况，最受请求的功能方向包括：

- **桌面应用 UX 改进** — Ctrl+Enter 提交（#95125）、Max 努力警告的永久关闭（#100278）、新会话默认使用选中会话的目录（#100672）
- **内存/知识管理** — MEMORY.md 截断的透明处理（#99403）、更清晰地提示丢弃的条目
- **终端/IDE 集成** — VS Code 中 git worktree 会话可见性（#81024）、RTL/波斯语文本方向修复（#100492）
- **钩子系统增强** — `UserPromptSubmit` 钩子的 prompt 来源字段文档（#100666）
- **代理视图功能** — 多会话批量回复支持（#97746）

---

## 开发者痛点

以下问题在多个 issues 中反复出现：

1. **模型行为不一致** — Claude 忽略要求停止生成冗长注释的明确指令（#65961），这是拥有 250+ 投票的长期投诉
2. **权限/授权冲突** — macOS TCC 标识符在 Desktop 和 CLI 会话之间冲突（#87833）、短生命周期命令中的 OAuth 令牌管理（#95822）
3. **网络韧性** — Linux 用户在网络变化后遇到 3 分钟挂起（#99524）
4. **静默失败** — MEMORY.md 截断不通知用户（#99403）、缺少 `name:` 字段的代理定义被静默跳过（#98058）
5. **桌面可用性** — 按键绑定期望与其他聊天应用不同（#95125）、警告无法永久关闭（#100278）

---

*基于 GitHub 数据生成 — 2026-10-09*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest from English to Chinese. Let me go through the content and translate it while following all the rules specified:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue/PR references, code identifiers as-is
4. Use natural technical Chinese register

Let me translate section by section:

## Today's Highlights
过去24小时，Windows桌面体验方面出现了大量活动，多个报告称沙盒配置由于文件锁定冲突而失败。0.162.0稳定版已发布，增加了托管Git worktree支持和Command Center的置顶任务。同时，团队继续推进持久化和线程状态功能，多个PR围绕读取状态管理和凭据处理进行合并。

## Releases
This is a table, I need to keep the structure:
| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.162.0** | Stable | Added tools for creating/listing managed Git worktrees from trusted local projects; pinned tasks in agent Command Center (`p` key); navigate and copy t... |

I'll translate these maintain the structure and technical accuracy.

## Hot Issues
1. **[#25178](https://github.com/openai/codex/issues/25178)** — **Windows Computer Use screenshot fails on Windows 10 22H2** (85 comments, 32 👍)
   - `get_window_state` calls requesting screenshots fail with `SetIsBorderRequired failed: 不支持此接口 (0x80004002)`. Affects users on Windows 10 22H2 specifically. High community engagement indicates broad impact on Windows Computer Use workflows.

2. **[#42739](https://github.com/openai/codex/issues/42739)** — **Local projects disappear from sidebar after Windows desktop update** (46 comments)


   - After updating the Windows desktop app, the Projects section shows "No projects" despite source folders existing on disk. Users lose visibility into their workspace structure.

I see the issue involves Windows desktop app users experiencing project visibility problems. The Projects section unexpectedly displays "No projects" even when source folders are present, causing significant user frustration by preventing workspace access.

The sandbox setup process encounters critical errors during runtime file handling, specifically on Windows 10 22H2 systems. The problem emerges during pre-execution checks, blocking development workflows and preventing smooth user interactions with the application.

Subsequent technical challenges include Windows clipboard path limitations preventing WSL agent access to image attachments. Additionally, durable chat conversation attempts fail due to AbsolutePathBuf deserialization issues, further complicating the user experience.

The application's pet overlay unexpectedly reappears after users tuck it away, causing frustration. Windows platform users experience intermittent crashes and potential data loss. Massive image history requests significantly impact system performance and network efficiency.

CLI reliability issues compound user frustration, particularly with quota reporting mechanisms that provide contradictory and unhelpful error messages. Interleaved text rendering in the terminal user interface introduces additional complexity for users.

An expanding set of pull requests aim to enhance platform capabilities. Key improvements include expanded voice support, more robust thread state management, and refined user interface interactions. Critical updates address source range handling, content attribution, and persistent user preferences.

Significant progress focuses on thread read states, history initialization tracking, and credential protection for sandboxed environments. New features provide flexible keyboard shortcuts and improve large argument handling in tool call metadata.

The latest discussions explore advanced integration possibilities, ranging from user-friendly permission management to innovative CLI solutions for permission and usage tracking challenges.

Key projects demonstrate remarkable creativity: a Python-based decision-tracking MCP, an adaptive AI memory system, video review tooling, and specialized Windows Codex workspace applications. These initiatives showcase developers' commitment to enhancing user experience and workflow automation.

Critical pain points emerge around Windows desktop stability, especially regarding file locking, sharing violations, and sandbox provisioning. Durable thread persistence, cross-platform resource access, and permission management represent significant technical hurdles requiring strategic solutions.</think>

# OpenAI Codex 社区简报 — 2026-10-09

## 今日要闻

过去 24 小时，Windows 桌面体验方面出现了大量活动，多个报告称沙盒配置因文件锁定冲突而失败。0.162.0 稳定版已发布，新增了托管 Git worktree 支持和 Command Center 的置顶任务。与此同时，团队继续推进持久化和线程状态功能，多个 PR 围绕读取状态管理和凭据处理合并。

---

## 版本发布

| 版本 | 类型 | 关键更新 |
|---------|------|-------------|
| **rust-v0.162.0** | 稳定版 | 新增从可信本地项目创建/列出托管 Git worktree 的工具；代理 Command Center 支持置顶任务（`p` 键）；导航和复制 t... |
| **rust-v0.163.0-alpha.2** | Alpha 版 | 发布 0.163.0-alpha.2 |
| **rust-v0.163.0-alpha.1** | Alpha 版 | 发布 0.163.0-alpha.1 |
| **rust-v0.162.0-alpha.18.1** | Alpha 版 | 发布 0.162.0-alpha.18.1 |
| **rust-v0.162.0-alpha.17.2** | Alpha 版 | 发布 0.162.0-alpha.17.2 |

---

## 热门问题

1. **[#25178](https://github.com/openai/codex/issues/25178)** — **Windows Computer Use 在 Windows 10 22H2 上截图失败**（85 条评论，32 👍）
   - 调用 `get_window_state` 请求截图时失败，返回 `SetIsBorderRequired failed: 不支持此接口 (0x80004002)`。仅影响 Windows 10 22H2 用户。社区高度关注表明该问题对 Windows Computer Use 工作流影响广泛。

2. **[#42739](https://github.com/openai/codex/issues/42739)** — **Windows 桌面应用更新后本地项目从侧边栏消失**（46 条评论）
   - Windows 桌面应用更新后，尽管源文件夹在磁盘上存在，Projects 区域却显示"No projects"。用户失去了对工作区结构的可见性。

3. **[#51634](https://github.com/openai/codex/issues/51634)** — **Windows 沙盒配置因 os error 32 失败**（25 条评论，12 👍）
   - 0.162.0-alpha.2 中的回归问题：当任何运行时文件被使用时，沙盒设置中止。多个用户报告相同的"共享冲突"行为——这似乎是 Windows 开发工作流的广泛阻塞问题。

4. **[#27552](https://github.com/openai/codex/issues/27552)** — **图片附件保存到 Temp 但 WSL 代理无法访问**（25 条评论，13 👍）
   - 使用 WSL 工作区的 Windows 用户无法访问保存到 Temp 的图片附件。破坏了依赖 WSL 进行开发的跨平台工作流。

5. **[#50428](https://github.com/openai/codex/issues/50428)** — **持久化聊天 turn/start 因 AbsolutePathBuf 反序列化缺少基础路径失败**（24 条评论）
   - Windows 桌面可以读取现有的持久化/云端聊天，但纯文本提交和同目录派生在执行前失败。阻塞了 Windows 上的持久化对话采用。

6. **[#42243](https://github.com/openai/codex/issues/42243)** — **Codex Pet 浮层在"Tuck Away Pet"后再次出现**（24 条评论，34 👍）
   - 用户选择"Tuck Away Pet"后，Pet 浮层会重新出现。尽管 UI 交互表明它应该保持隐藏，但行为仍然存在——影响用户体验。

7. **[#51824](https://github.com/openai/codex/issues/51824)** — **Windows 版 ChatGPT 在 windows-updater.node 中崩溃**（18 条评论）
   - Windows 应用打开后运行 30-60 秒然后关闭，没有屏幕显示错误。Crashpad 识别浏览器/主进程为罪魁祸首。用户工作中途丢失工作。

8. **[#43015](https://github.com/openai/codex/issues/43015)** — **严重 CLI 可靠性问题：63.8 MB 图像历史请求**（16 条评论）
   - 用户报告在任意压缩之前，图像历史字节大幅增长（每次请求 63.7 MB），WebSocket 回退导致长时间停滞。这是 CLI 高级用户的主要可靠性问题。

9. **[#31001](https://github.com/openai/codex/issues/31001)** — **代码审查报告 usage-limit 已耗尽，但仪表盘显示剩余 100%**（14 条评论，20 👍）
   - GitHub 代码审查阻止 `@codex review` 请求并报 usage-limit 错误，但分析仪表盘显示有可用配额且零审查活动。使得该错误无法操作。

10. **[#47538](https://github.com/openai/codex/issues/47538)** — **TUI 在中流断开后显示重复的交错文本**（13 条评论）
    - 第三方 Responses 提供商导致助手文本以不同的块边界在同一视觉流中渲染两次。使用自定义/向后兼容设置的用户受到影响。

---

## 主要 PR 进展

| PR | 摘要 |
|----|---------|
| **[#52363](https://github.com/openai/codex/pull/52363)** | 扩展实时 v3 语音支持 — 新增专用 v3 语音列表，包含 16 个 v1 之外的语音 |
| **[#52350](https://github.com/openai/codex/pull/52350)** | 在应用服务器中暴露实验性持久化线程读取状态 — 在 `thread/read` 中添加 `readState`，在 `thread/list` 中添加 `readStates` 映射 |
| **[#52337](https://github.com/openai/codex/pull/52337)** | 添加具有修订检查更新的持久化线程读取状态 — 防止过时的读取确认清除客户端快照后发布的结果 |
| **[#52330](https://github.com/openai/codex/pull/52330)** | 在重新映射终端超链接之前对包装的源范围进行限幅 — 修复光标哨兵超出输入末尾时的 panic |
| **[#52329](https://github.com/openai/codex/pull/52329)** | 移除每个内容的源归属元数据 — 简化上下文片段和钩子输出 |
| **[#52325](https://github.com/openai/codex/pull/52325)** | 在 Responses turn 元数据中跟踪历史初始化 — 区分 `new`、`cleared`、`cold_resume`、`warm_fork`、`cold_fork`、`supplied_history` |
| **[#52304](https://github.com/openai/codex/pull/52304)** | 在托管守护进程设置中持久化远程控制 RPC 首选项 |
| **[#52302](https://github.com/openai/codex/pull/52302)** | 为代理沙盒会话添加可选的凭据掩码 — 新增 `features.credential_masking` 标志 |
| **[#52268](https://github.com/openai/codex/pull/52268)** | 在执行的工具调用元数据中保留大参数 — 移除了 8 KiB/32 KiB 限制 |
| **[#52273](https://github.com/openai/codex/pull/52273)** | 为 TUI 添加可配置的持久化主键快捷键 — 新增 `tui.keymap.global.leader`，默认为 `ctrl-x` |

---

## 热门讨论

### 需求建议

- **[#52265](https://github.com/openai/codex/discussions/52265)** — 功能请求：面向 Codex 桌面的用户友好权限中心和允许列表
  - 提议为 Windows 桌面应用提供集中的权限管理界面。

### 问答

- **[#52181](https://github.com/openai/codex/discussions/52181)** — 原生 Windows Codex 预执行策略拒绝：支持的强制层诊断？
  - 寻求对 Windows Codex 预执行拒绝的官方诊断，而非变通方案。

### 展示分享

- **[#52372](https://github.com/openai/codex/discussions/52372)** — Selvedge：通过 MCP 在两个 Codex 会话中检索被拒绝的方法
  - 用于保存编码决策（包括被拒绝的方法）的 Python CLI 和本地 stdio MCP 服务器。

- **[#52198](https://github.com/openai/codex/discussions/52198)** — cloud-alter-ego：面向 Codex 和 Claude Code 的持久化记忆系统，从错误中学习
  - 为 AI 代理跟踪用户身份、偏好和会话历史的记忆系统。

- **[#52163](https://github.com/openai/codex/discussions/52163)** — Lampo：用于审查 Codex 渲染视频的 MCP 审查循环
  - 使用 MCP 审查 Codex 生成的 MP4 的视频审查应用，支持逐帧标注。

- **[#51759](https://github.com/openai/codex/discussions/51759)** — BigaCli：面向手机工作流的 Windows Codex 工作区
  - 用于排队提示和配额恢复的开源 Windows Codex Web 客户端。

---

## 功能请求趋势

根据 Issues 和 Discussions，以下主题浮现：

1. **Windows 桌面稳定性与沙盒** — 多份关于文件锁定、共享冲突和沙盒配置失败的报告指向基本的 Windows 集成问题。用户需要可靠的隔离执行环境。

2. **持久化/云端线程持久性** — 围绕线程状态、读取回执和跨设备连续性的多个问题表明对持久化对话状态的强烈需求。

3. **跨平台文件/资源访问** — WSL 互操作性、Temp 文件可见性和 Windows/Linux 边界间的路径处理是反复出现的痛点。

4. **权限与安全 UI** — 对集中化、用户友好的权限管理的请求，而非分散的、不透明的策略阻止。

5. **增强的 CLI/TUI 功能** — 主键快捷键、文本选择和全屏模式，以及更丰富的终端集成继续看到开发投入。

---

## 开发者痛点

- **Windows 文件锁定** — 沙盒设置尝试使用已打开的运行时文件时出现的"共享冲突"(os os error 32) 阻塞了许多 Windows 用户。过去 48 小时内提交了多个重复问题。

- **不一致的使用量报告** — 代码审查配额错误显示"已耗尽"，而仪表盘报告剩余 100%，造成混淆并阻塞了 productive 工作。

- **Windows 渲染器不稳定** — Windows 桌面应用中反复出现的空白屏幕重载和崩溃每 1-2 分钟影响一次受影响的用户。

- **图片/附件路径可见性** — Temp 目录隔离阻止 WSL 代理访问 Windows 保存的附件，破坏了混合开发工作流。

- **CLI 全屏行为** — 新的默认全屏 CLI 模式存在争议；一些用户更喜欢传统滚动终端。

---

*基于 GitHub 数据生成 — openai/codex | 2026-10-09*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this GitHub digest into Simplified Chinese, following specific rules:
- Output ONLY the translation, no preamble or explanation
- Preserve Markdown structure exactly
- Keep URLs, issue/PR references, code identifiers as-is
- Use natural technical Chinese register

Let me translate this carefully while preserving all the formatting and technical terms.</think>

# Gemini CLI 社区日报

**日期：** 2026-10-09
**仓库：** google-gemini/gemini-cli

---

## 今日要闻

过去 24 小时内出现了大量安全相关的活动，多个 PR 修复了沙箱构建、OAuth 流程和命令验证中的漏洞。Agent 相关问题依然突出，尤其是子代理行为、浏览器代理可靠性和通用代理挂起问题。大型仓库文件发现的性能优化也在推进中。

---

## 发布

*过去 24 小时内无新版本发布。*

---

## 热门 Issue

### 1. 子代理恢复时将 MAX_TURNS 误报为成功
**[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** | 优先级 P1 | 区域：Agent | 13 条评论 | 👍 2
`codebase_investigator` 子代理在达到最大轮次限制前未能完成分析时，仍会报告 `status: "success"` 和 `Termination Reason: "GOAL"`。这会掩盖真实的中断，可能导致开发者忽略未完成的调查。

### 2. 零依赖操作系统沙箱方案
**[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** | 优先级 P2 | 区域：Agent | 9 条评论 | 👍 1
利用 Gemini 3 模型原生 bash 亲和力，通过零依赖操作系统沙箱和执行后意图路由实现更高效 POSIX 工具（`grep`、`cat`、`sed`、`awk`）使用的提案。

### 3. 通用代理在延迟时挂起
**[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** | 优先级 P1 | 区域：Agent | 8 条评论 | 👍 8
当 Gemini CLI 延迟执行通用代理时，它会无限挂起——即使对于简单的操作（如创建文件夹）也是如此。用户报告等待长达一小时。指示模型避免使用子代理可以解决此问题。

### 4. AST 感知文件读取调研
**[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** | 优先级 P2 | 区域：Agent | 7 条评论 | 👍 1
追踪 AST 感知文件读取、搜索和代码库映射调研的 Epic。目标包括更精确的方法边界检测，以减少轮次错位和 token 噪音。

### 5. Gemini 未能充分利用自定义技能和子代理
**[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** | 优先级 P2 | 区域：Agent | 7 条评论
经验性观察到 Gemini 很少自主调用自定义技能（如 gradle、git）或子代理，即使任务高度相关。用户必须明确指示模型使用它们。

### 6. 语音模式需要 API 密钥尽管已通过 OAuth
**[#26301](https://github.com/google-gemini/gemini-cli/issues/26301)**（已关闭）| 优先级 P2 | 区域：Agent | 6 条评论
语音模式的云后端要求 `GEMINI_API_KEY`，即使对于通过 OAuth 完全身份验证的用户也是如此，导致 OAuth 用户无法在没有单独生成 AI Studio 密钥的情况下使用云语音模式。

### 7. agents.json 损坏导致确认失败
**[#29207](https://github.com/google-gemini/gemini-cli/issues/29207)**（已关闭）| 优先级 P2 | 区域：Agent | 4 条评论
格式正确但结构错误的损坏 `agents.json` 导致原始 `TypeError` 崩溃或静默确认丢失。受影响的用户包含 `null` 值或格式错误的文件。

### 8. 浏览器代理忽略 settings.json 覆盖
**[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** | 优先级 P2 | 区域：Agent | 4 条评论
浏览器代理完全忽略全局或项目级 `settings.json` 中的配置覆盖，包括 `maxTurns`。`AgentRegistry` 在初始化期间正确读取和合并设置，但浏览器代理没有应用它们。

### 9. 浏览器代理会话锁恢复
**[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** | 优先级 P3 | 区域：Agent | 4 条评论
增强浏览器代理弹性的提案，在遇到持久会话模式下的锁定浏览器配置文件时实现自动会话接管和锁恢复。

### 10. 浏览器子代理在 Wayland 下失败
**[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** | 优先级 P1 | 区域：Agent | 4 条评论 | 👍 1
浏览器子代理在 Wayland 环境下失败，报告 GOAL 终止尽管执行失败。

---

## 重要 PR 进展

### 1. 修复交互模式下按 Enter 键挂起问题
**[#29476](https://github.com/google-gemini/gemini-cli/pull/29476)**（已关闭）| 优先级 P1 | 区域：Core
修复 IDE 集成终端中工具确认提示时 `Enter` 键无响应的无响应问题。将用户确认事件发布与输入处理解耦。

### 2. MCP OAuth RFC 9207 iss-absence 拒绝
**[#29488](https://github.com/google-gemini/gemini-cli/pull/29488)**（已关闭）| 优先级 P1 | 区域：Security
修复 MCP OAuth 流程正确拒绝发布 RFC 8414 元数据但授权响应中未返回 `iss` 的授权服务器。

### 3. 恢复时避免重复工具响应轮次
**[#29490](https://github.com/google-gemini/gemini-cli/pull/29490)**（已关闭）| 优先级 P1 | 区域：Core
在使用 `-r` 恢复会话时防止重复工具结果。工具执行响应在客户端历史中被重放两次。

### 4. 快速消息分类的决策门
**[#29482](https://github.com/google-gemini/gemini-cli/pull/29482)**（已关闭）
添加可选的"决策门"，以几十毫秒读取用户消息进行分类。简单消息可以走更短、更快的路径。

### 5. 沙箱构建中的 Shell 插值修复
**[#29492](https://github.com/google-gemini/gemini-cli/pull/29492)**（已关闭）| 优先级 P1 | 区域：Security
防止沙箱镜像构建过程中检出路劲中的 shell 元字符执行任意命令（`BUILD_SANDBOX=1` 时）。

### 6. Flash-Lite 模型思考级别修复
**[#29489](https://github.com/google-gemini/gemini-cli/pull/29489)**（已关闭）| 优先级 P2 | 区域：Agent
通过为 `chat-base-3-flash-lite` 引入 `thinkingBudget: 0` 来防止 Flash-Lite 模型继承 `ThinkingLevel.HIGH`。

### 7. Windows 命令安全中的 Git 参数验证
**[#29480](https://github.com/google-gemini/gemini-cli/pull/29480)**（已关闭）| 优先级 P1 | 区域：Security
阻止 `git diff --output=<path>` 等写入/执行标志绕过 Windows 上的权限提示，防止静默文件覆盖。

### 8. 不可读的扩展配置重新启用所有扩展
**[#29481](https://github.com/google-gemini/gemini-cli/pull/29481)**（已关闭）| 优先级 P1 | 区域：Core
修复当 `extension-enablement.json` 变得不可读时静默重新启用所有用户已禁用的扩展的问题。

### 9. 旧版检查点路径遍历修复
**[#29479](https://github.com/google-gemini/gemini-cli/pull/29479)**（已关闭）| 优先级 P1 | 区域：Security
防止检查点删除/加载操作中的路径遍历。`x/../../secret` 等标签以前可以访问检查点目录之外的文件。

### 10. 优化忽略过滤并启用子树剪枝
**[#29582](https://github.com/google-gemini/gemini-cli/pull/29582)** | 优先级 P1 | 区域：Core
文件发现的重大性能改进：引入分层目录级状态记忆化、通配符目录模式展开和内存符号链接缓存。解决大型仓库中多秒阻塞延迟问题。

---

## 功能请求趋势

1. **AST/代码智能**：多个 Issue（#22745、#22746、#19561）请求 AST 感知文件读取、搜索和代码库映射，以减少 token 膨胀和提高精度
2. **代理自主性**：改进子代理技能调用（#21968）和自动会话恢复（#22232）的请求
3. **增强安全性**：OS 沙箱（#19873）和更细粒度权限控制（#22672）的提案
4. **终端体验**：调整时性能改进（#21924）、更好的任务跟踪（#18836）和 CLI 能力自我意识（#21432）
5. **子代理可见性**：通过 `/chat share`（#22598）请求子代理轨迹可见性

---

## 开发者痛点

1. **代理挂起**：多个报告称通用代理和浏览器子代理挂起，扰乱工作流程（#21409、#21983）
2. **配置被忽略**：特定代理忽略 `maxTurns` 等设置导致不可预测行为（#22267）
3. **工具膨胀问题**：可用工具超过 128 个时出现 400 错误，暗示需要更智能的工具范围划分（#24246）
4. **身份验证摩擦**：语音模式需要单独的 API 密钥尽管已登录 OAuth（#26301），以及凭据缓存问题（#29643）
5. **安全误报**：频繁的安全警告和 harmless 命令的确认暂停（#29672），影响生产力
6. **Token 效率低下**：模型在随机位置创建临时脚本（#23571）和过多的文件读取膨胀上下文

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese, following specific rules about preservation and natural technical Chinese register.

Let me go through this carefully:

1. Keep all markdown structure exactly - headings, tables, lists, etc.
2. Keep URLs, numbers, dates, version tags, issue/PR references, file paths, API identifiers as-is
3. Use natural technical Chinese register - not literal word-for-word
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title:**
GitHub Copilot CLI 社区动态 → GitHub Copilot CLI 社区动态
2026-10-09 → 2026年10月9日

**Today's Highlights:**
GitHub Copilot CLI 在昨天发布了两个小版本更新（v1.0.95-0 和 v1.0.95-1），带来了 macOS 原生 Microsoft Entra 代理认证（浏览器回退机制）以及改进的插件重试逻辑和 ACP 会话上下文处理。社区继续与模型选择稳定性问题纠缠——最近关于 Claude Opus 4.5 冻结和"不支持的模型"错误的 issues 突出了持续的连接挑战，不过这些问题已在最新版本中得到解决。

**Releases:**
Version → 版本
Date → 日期
Key Changes → 关键变更

For each release:
- v1.0.95-1: **Added:** → **新增：**
- v1.0.95-0: **Improved:** → **改进：** / **修复：** 
- v1.0.94: Added → 新增 / Fixed → 修复

**Hot Issues:**
Each issue needs:
- Title translation
- Keep all technical elements (issue #, URLs, comments count, 👍 count)


- Translate description naturally

I'll focus on translating issue titles and maintaining their technical essence while adapting to natural Chinese technical language. The key is preserving technical details while making the content accessible to Chinese developers.

For example, "Why it matters" sections will be condensed to capture the core technical impact, using concise technical Chinese that developers would use in real-world discussions. Version numbers, issue links, and technical specifications remain unchanged.

The goal is to create a translation that feels like it was originally written in Chinese, not a direct mechanical translation.

I notice several issues highlighting different technical challenges:
- Freeze and request consumption problems
- Model selection limitations
- File access control needs
- Device ID persistence causing operational blocks
- Model switching restrictions in multi-provider environments

These issues suggest systemic problems around model interaction, access controls, and flexible provider management in the current implementation.

The emerging pattern reveals requests for:
- Flexible model switching
- Enhanced sandbox capabilities
- Performance optimization
- Improved administrative control capabilities

Key focus areas include dynamic model selection, isolation mechanisms, and better integration with advanced programming environments like ACP. Developers want more granular control over model interactions, with an emphasis on reducing startup overhead and expanding configuration options.

The technical pain points center on reliability, compatibility, and performance, particularly in complex development environments like macOS and Windows. Specific concerns involve authentication, server loading, and system-level interaction limitations.</think>

# GitHub Copilot CLI 社区动态

## 2026年10月9日

---

### 今日要闻

GitHub Copilot CLI 在昨日发布了两个小版本更新（v1.0.95-0 和 v1.0.95-1），带来了 macOS 原生 Microsoft Entra 代理认证（支持浏览器回退）以及改进的插件重试逻辑和 ACP 会话上下文处理。社区仍在与模型选择稳定性问题缠斗——最近关于 Claude Opus 4.5 冻结和"不支持的模型"错误的 issue 突出了持续的连接挑战，不过这些问题已在最新版本中得到解决。

---

### 版本发布

| 版本 | 日期 | 关键变更 |
|------|------|----------|
| **v1.0.95-1** | 2026-10-09 | **新增：** 在 macOS 上提供原生 Microsoft Entra 代理认证，可用时自动启用，失败则回退到浏览器认证 |
| **v1.0.95-0** | 2026-10-09 | **改进：** 托管插件设置失败后改为每小时或策略变更后重试，而非每次消息失败都重试<br>**修复：** `--context` 现在会应用到新建和恢复的 ACP 会话，而非静默使用默认/已保存的上下文级别 |
| **v1.0.94** | 2026-10-08 | 新增 Claude Hailo 5.5 到模型选择和 `--model` 补全中<br>修复 `copilot mcp add` 在 MCP 配置初始化中断后的恢复问题<br>MCP enable/disable 现在可以在服务器发现之前使用，无需先启动 MCP 服务器<br>辅助权限判定现在发送可见的 shell 代码 |

---

### 热门 Issue

1. **[#770](https://github.com/github/copilot-cli/issues/770) — Claude Opus 4.5 在处理提示词时卡死** (16 条评论, 3 👍)  
   **为什么重要：** 用户报告模型在处理提示词中途卡死，每次都会消耗 3 次高级请求——由于浪费的额度而令人沮丧。已关闭。

2. **[#1941](https://github.com/github/copilot-cli/issues/1941) — 突然大量出现 "CAPIError: 400 The requested model is not supported"** (13 条评论)  
   **为什么重要：** 几乎每次请求后都有一波用户遇到此错误，有时会中止 agent 的工作流程。已关闭。

3. **[#892](https://github.com/github/copilot-cli/issues/892) — 添加沙盒模式以限制 Copilot CLI 的文件访问** (12 条评论, 49 👍)  
   **为什么重要：** 社区强烈请求（49 👍）实现沙盒功能，将 agent 的文件系统权限限制在指定的工作目录内。已关闭。

4. **[#4998](https://github.com/github/copilot-cli/issues/4998) — macOS 更新后 Copilot CLI 不可用，因为 `.mcp-writer.binding` 保留了过期的设备 ID** (10 条评论, 11 👍)  
   **为什么重要：** macOS 安全更新和重启后，所有会话都无法处理提示词，原因是文件系统设备 ID 已过期。已关闭。

5. **[#3709](https://github.com/github/copilot-cli/issues/3709) — 允许 /model 在单个会话中切换多个模型，包括 BYOK/本地提供商** (9 条评论, 34 👍)  
   **为什么重要：** 用户希望在会话中动态切换 GitHub 托管模型和本地 BYOK 提供商，但目前会话被绑定到单一模型。开启中。

6. **[#4224](https://github.com/github/copilot-cli/issues/4224) — 子 agent 调用的 OTel span 缺少计费属性** (6 条评论)  
   **为什么重要：** 子 agent 的模型调用消耗了真实的 AI 额度，但 OTel span 中缺少计费属性，导致外部成本核算少计。已关闭。

7. **[#4844](https://github.com/github/copilot-cli/issues/4844) — --yolo 启动标志被认证前 fail-closed 绕过上限吞掉** (4 条评论)  
   **为什么重要：** `--yolo` / `--allow-all` 标志在获取服务器策略前的短暂认证窗口期间丢失，导致无法绕过权限检查。已关闭。

8. **[#4275](https://github.com/github/copilot-cli/issues/4275) — ACP：暴露 contextTier 作为会话配置选项** (4 条评论, 3 👍)  
   **为什么重要：** 交互式 CLI 允许通过 `/model` 在会话中更改上下文级别，但 ACP 没有将其作为会话配置选项暴露。开启中。

9. **[#2901](https://github.com/github/copilot-cli/issues/2901) — 在首次工具调用时延迟加载 MCP 服务器** (3 条评论, 17 👍)  
   **为什么重要：** 所有 MCP 服务器在 CLI 启动时连接，即使大多数不会被使用也增加了启动时间。社区希望延迟加载（17 👍）。开启中。

10. **[#5053](https://github.com/github/copilot-cli/issues/5053) — 1.0.89 回归：ACP 会话停止索引对话历史和使用情况到 session-store.db** (2 条评论)  
    **为什么重要：** 升级到 1.0.89 后，ACP 会话不再填充本地对话/使用索引，破坏了会话历史功能。开启中。

---

### 关键 PR 进展

过去 24 小时内没有 PR 更新。

---

### 功能请求趋势

根据 issue 活动来看，最受关注的功能方向：

| 趋势 | 描述 |
|------|------|
| **灵活的模型切换** | 用户希望在会话中动态切换模型，包括 BYOK/本地提供商（#3709），而非仅在启动时 |
| **沙盒/文件隔离** | 强烈需求沙盒模式将文件访问限制在工作区根目录（#892、#5089） |
| **MCP 优化** | 在首次使用时延迟加载 MCP 服务器（#2901）以减少启动开销 |
| **ACP 功能对等** | 交互式 CLI 与 ACP 之间的功能对等——将 contextTier 暴露为会话配置（#4275） |
| **改进的可观测性** | 子 agent 调用的 OTel span 中包含计费属性（#4224）、正确的父 span 层级（#4858） |
| **PowerShell 集成** | 支持在 shell 模式下加载 PowerShell 配置（#1436） |

---

### 开发者痛点

1. **模型可靠性** — 模型冻结（#770）和"不支持的模型"错误（#1941）反复出现，导致浪费高级请求额度
2. **macOS 兼容性** — 更新/重启后由于过期的 MCP binding 设备 ID（#4998）和 Entra 认证挑战导致无法使用
3. **启动性能** — 所有配置的 MCP 服务器在 CLI 启动时加载，在大型仓库中尤其拖慢启动速度（#2901）
4. **ACP 限制** — 缺少 contextTier 暴露（#4275）和非交互模式下的会话索引回归（#5053）
5. **沙盒配置** — `--sandbox` 标志在 ACP 模式下被忽略（#5089）、标志持久化问题（#4844）
6. **剪贴板/UI 故障** — CLI 运行时复制功能在 Windows 上损坏（#3981）；/skills UI 拦截鼠标选择（#3741）

---

*数据来源：github.com/github/copilot-cli | 数据周期：2026年10月8日至2026年10月9日*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this English OpenCode Community Digest into Simplified Chinese, following the detailed translation rules provided. Let me go through it carefully:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve the exact Markdown structure
3. Keep URLs, numbers, dates, issue/PR references, project names, etc. in their original form
4. Use natural technical Chinese register

Let me translate section by section:

---

# OpenCode 社区动态 — 2026-10-09

## 今日要闻

OpenCode 社区今日主要围绕智能体行为协议和 UI 优化展开讨论。一个值得关注的未解决议题（#53955）报告了智能体在计划模式下仍执行编辑操作的问题，引发安全防护机制的担忧。在 PR 方面，贡献者们正在推进会话处理、本地化基础设施和令牌限制恢复等方面的改进。过去 24 小时内无新版本发布。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门议题

| # | 议题 | 关注原因 | 反馈 |
|---|-------|----------|------|
| [#40480](https://github.com/anomalyco/opencode/issues/40480) | **[BUG] OpenCode Go deepseek-v4-flash 返回 HTTP 500** | `deepseek-v4-flash` 模型在 OpenCode Go 上返回 HTTP 500 错误，而相同配置在 `mimo-v2.5` 上正常工作。这是依赖该模型用户的阻塞性问题。 | 10 条评论，3 👍 |
| [#53955](https://github.com/anomalyco/opencode/issues/53955) | **[未解决] 智能体在计划模式下执行编辑操作** | 智能体即使在明确设置为计划模式时仍执行破坏性命令。这是一个严重的安全问题。 | 4 条评论 |


| [#53835](https://github.com/anomalyco/opencode/issues/53835) | **权限问题：读取捆绑的 skill 引用时请求访问插件缓存** | 读取与 skill 捆绑的 Markdown 引用文件时错误地请求访问 OpenCode 的 npm 插件缓存——权限边界混淆。 | 7 条评论 |
| [#38932](https://github.com/anomalyco/opencode/issues/38932) | **在提示框粘贴长文本导致桌面应用卡死** | 在桌面应用的提示框中粘贴 5000+ 字符会导致应用无响应——影响用户体验。测试中 | 6 条评论，5 👍 |

The usage tracking system is experiencing data integrity issues, with usage exceeding 100% and failing to reset during compaction. Additionally, certain models like gpt-5.6-luna aren't properly signaling completion status, breaking stream handling. Users are requesting cleaner output modes that collapse intermediate AI work, and there's interest in debugging tools that can detect hypothesis loops and maintain context across sessions.

Feature requests cluster around four main areas: agent safety with safeguards like plan mode enforcement and loop detection; UX improvements including configurable output previews; integrations with external services like Linear and i18n support; and underlying reliability work around usage tracking and context management.

Several technical pain points persist—API endpoints for certain models return errors or incomplete responses, performance degrades with large inputs or repositories, permission handling for skills creates confusion, and session management has gaps in legacy restoration and deletion handling.</think>

# OpenCode 社区动态 — 2026-10-09

## 今日要闻

OpenCode 社区今日主要围绕智能体行为协议和 UI 优化展开讨论。一个值得关注的未解决议题（#53955）报告了智能体在计划模式下仍执行编辑操作的问题，引发安全防护机制的担忧。在 PR 方面，贡献者们正在推进会话处理、本地化基础设施和令牌限制恢复等方面的改进。过去 24 小时内无新版本发布。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门议题

| # | 议题 | 关注原因 | 反馈 |
|---|-------|----------|------|
| [#40480](https://github.com/anomalyco/opencode/issues/40480) | **[BUG] OpenCode Go deepseek-v4-flash 返回 HTTP 500** | `deepseek-v4-flash` 模型在 OpenCode Go 上返回 HTTP 500 错误，而相同配置在 `mimo-v2.5` 上正常工作。这是依赖该模型用户的阻塞性问题。 | 10 条评论，3 👍 |
| [#53955](https://github.com/anomalyco/opencode/issues/53955) | **[未解决] 智能体在计划模式下执行编辑操作** | 智能体即使在明确设置为计划模式时仍执行破坏性命令。这是一个严重的安全问题。 | 4 条评论 |
| [#53835](https://github.com/anomalyco/opencode/issues/53835) | **权限问题：读取捆绑的 skill 引用时请求访问插件缓存** | 读取与 skill 捆绑的 Markdown 引用文件时错误地请求访问 OpenCode 的 npm 插件缓存——权限边界混淆。 | 7 条评论 |
| [#38932](https://github.com/anomalyco/opencode/issues/38932) | **在提示框粘贴长文本导致桌面应用卡死** | 在提示框粘贴 5000+ 字符会导致桌面应用无限期卡死——一个重要的 UX 阻塞问题。 | 6 条评论 |
| [#39655](https://github.com/anomalyco/opencode/issues/39655) | **[Bug] OpenCode Web 显示"未找到文件夹"** | Web 界面显示"未找到文件夹"，尽管后端正确返回了项目——数据渲染问题。 | 6 条评论 |
| [#38081](https://github.com/anomalyco/opencode/issues/38081) | **[功能] Todo 侧边栏支持 Linear 集成** | 请求实现与 Linear 问题管理集成的项目级 Todo 侧边栏——工作流连续性的热门需求。 | 6 条评论 |
| [#41102](https://github.com/anomalyco/opencode/issues/41102) | **使用量 bug：超过 100% 且无法压缩** | 使用量追踪超过 100% 且压缩无法重置——数据完整性问题。 | 5 条评论 |
| [#40420](https://github.com/anomalyco/opencode/issues/40420) | **Hermes 智能体 — gpt-5.6-luna 返回 finish_reason:null** | OpenCode Go 网关对该模型从不发送终止性的 `finish_reason`，导致流处理中断。 | 4 条评论 |
| [#37003](https://github.com/anomalyco/opencode/issues/37003) | **[功能] 清洁输出模式：默认折叠 AI 工作过程** | 用户希望在任务完成后折叠中间 AI 工作以获得更清洁的输出——热门的 UX 需求。 | 4 条评论，3 👍 |
| [#39772](https://github.com/anomalyco/opencode/issues/39772) | **[功能] 调试循环检测与跨会话记忆** | 建议在调试期间检测假设循环并启用跨会话上下文——解决开发者工作流痛点。 | 4 条评论 |

---

## 重要 PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| [#54051](https://github.com/anomalyco/opencode/pull/54051) | **fix(tui): 在 /pair QR 码中编码可达的配对地址** | 改进设备配对的二维码生成，正确编码连接 URL。 |
| [#54048](https://github.com/anomalyco/opencode/pull/54048) | **fix(core): 在无标记项目中恢复旧版会话** | 修复无 Git/Hg 标记项目中的旧版会话恢复问题，关闭 #53450。 |
| [#54047](https://github.com/anomalyco/opencode/pull/54047) | **fix(app): 在作曲家清除的帧中显示已提交的提示** | 解决已提交提示在作曲家清除后延迟显示的时序问题。 |
| [#53876](https://github.com/anomalyco/opencode/pull/53876) | **feat(core): 在输出令牌限制后继续响应** | 当响应达到输出令牌限制时保留部分输出并注入引导，实现继续功能。 |
| [#53816](https://github.com/anomalyco/opencode/pull/53816) | **fix(session-ui): 展开时显示完整的工具错误文本** | 工具错误卡片现在显示完整错误信息，而非在首个 `": "` 后截断。 |
| [#53641](https://github.com/anomalyco/opencode/pull/53641) | **feat(session-ui): 确定性的时间线文件链接检测与解析** | 时间线文件链接仅在文件存在时解析；打开时定位到引用行或显示过滤后的选择器。 |
| [#52000](https://github.com/anomalyco/opencode/pull/52000) | **feat(tui): 添加按区域的 i18n 基础设施** | 为国际化接入 UI 字符串，支持 #37216——重要的本地化里程碑。 |
| [#51482](https://github.com/anomalyco/opencode/pull/51482) | **fix(core): 支持 AI SDK v4 媒体输入** | 修复 AI SDK v4 中工具图片的 null 序列化问题；正确支持媒体输入。 |
| [#54023](https://github.com/anomalyco/opencode/pull/54023) | **fix(core): 跨位置协调凭证刷新** | 在进程范围内协调凭证刷新，防止重复刷新操作。 |
| [#54039](https://github.com/anomalyco/opencode/pull/54039) | **feat(tui): 选择"点击展开"前显示多少工具输出** | 允许用户配置展开前的工具输出预览长度。 |

---

## 功能请求趋势

最热门的功能请求集中在四个主题：

1. **智能体安全与控制** — 智能体行为的防护机制（定义漂移检查、计划模式执行、循环检测）
2. **UX 优化** — 更清洁的输出模式、对话导航、可配置的工具输出预览
3. **集成** — Linear Todo 集成、按区域国际化、MCP 服务器配置改进
4. **稳定性** — 使用量追踪准确性、上下文压缩修复、会话迁移健壮性

---

## 开发者痛点

- **API 可靠性**：如 `deepseek-v4-flash` 和 `gpt-5.6-luna` 等模型返回 HTTP 500 或不完整响应
- **性能卡顿**：长文本粘贴导致桌面应用卡死；大型仓库导致文件监听器过载
- **权限困惑**：Skills 触发意外权限请求；CORS 问题阻止浏览器客户端
- **会话管理**：无标记项目中旧版会话无法恢复；删除回滚存在缺口
- **工具输出可见性**：错误被截断且工具结果无法展开，阻碍调试

---

*数据来源：anomalyco/opencode GitHub 数据，2026-10-09*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this Pi community digest from English to Chinese. Let me carefully translate it while:
1. Preserving all markdown structure exactly
2. Keeping URLs, numbers, issue/PR references as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble or explanation

Let me go through and translate this:

---

# Pi 社区摘要 — 2026-10-09

**仓库：** [earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. 今日要闻

大量关于 OAuth 和认证流程的 bug 报告涌现，特别是影响 ChatGPT 用户的 403 错误。Windows 特定问题仍然突出，`find` 工具的路径模式处理和 shell 解析问题。社区也在积极讨论通过 GitHub Issues 实现无人值守代理运行的扩展。

---

## 2. 发布

过去 24 小时内无新版本。

---

## 3. 热门 Issue

| # | Issue | 摘要 | 评论数 |
|---|-------|---------|----------|
| 1 | [#10031](https://github.com/earendil-works/pi/issues/10031) | **[bug] Pi 在按 `<esc>` 停止思考时偶发卡在"Working..."状态** — 自 ~v0.84.0 起，按 ESC 停止思考会导致 Pi 卡在"Working..."状态，需要 `CTRL+c` 并 `pi -c` 恢复。影响多台机器。 | 26 |
| 2 | [#6686](https://github.com/earendil-works/pi/issues/6686) | **[bug] Pi 自动退出 GitHub 登录** — GitHub provider 持续出现重新认证问题，重新激活之前报告过的问题。 | 14 |


| 3 | [#9773](https://github.com/earendil-works/pi/issues/9773) | **[OPEN] `before_provider_request` 在摘要/压缩请求时不触发** — 文档说明该钩子应在任何 provider 请求前触发，但压缩/分支摘要操作从未触发过。 | 11 |
| 4 | [#10497](https://github.com/earendil-works/pi/issues/10497) | **[bug] OpenRouter Error: 400** — 注入文件内容的扩展导致上下文长度超出错误（请求 1048576+ tokens）。 |

我注意到这些 issue 反映了认证流程中的多个问题。GitHub 登录状态管理存在缺陷，而 provider 请求的钩子机制也没有按预期工作。同时，上下文长度限制正在成为扩展功能的关键瓶颈。 10 |
| 5 | [#10605](https://github.com/earendil-works/pi/issues/10605) | **[bug] ChatGPT/OpenAI OAuth 403 问题** — 拥有 Plus 订阅的用户收到 `subscription_sharing_user_not_eligible` 错误。 | 8 |
| 6 | [#10267](https://github.com/earendil-works/pi/issues/10267) | **[OPEN] 在没有用户提示的运行中，`before_agent_start` 贡献的提示文本会被丢弃** — 后台任务、计划模式继续运行和重试会丢失系统提示添加，每次都重新计费完整提示。 | 8 |
| 7 | [#9946](https://github.com/earendil-works/pi/issues/9946) | **[CLOSED] CMD 模式 (!) 忽略 `outputPad` 设置** — 尽管配置了 `outputPad: 0`，行首空格仍然存在。 | 8 |
| 8 | [#4748](https://github.com/earendil-works/pi/issues/4748) | **[OPEN] pi-tui: `getKeybindings()` realm/instance 单例破坏扩展** — keybindings.ts 中的模块作用域单例导致扩展从自己的 node_modules 导入 keyText 时发生冲突。 | 7 |
| 9 | [#10645](https://github.com/earendil-works/pi/issues/10645) | **[inprogress] `resizeImage` 在编译后的 (Bun) 可执行文件中解析为 null** — 自 0.87.x 起，Windows 上的独立二进制文件中所有图片附件都被省略。 | 4 |
| 10 | [#10654](https://github.com/earendil-works/pi/issues/10654) | **[OPEN] transport 在 mcp.json 中的环境变量展开之前被解析** — MCP 服务器 URL 中的 `${MY_VAR}` 不会展开；只有在没有 schema 前缀时才有效。 | 4 |

---

## 4. 关键 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|---------|--------|
| 1 | [#10703](https://github.com/earendil-works/pi/pull/10703) | **feat(durable): 让扩展能够为中止的工具结果添加注释** — 使扩展能够为中止的工具结果添加注释，解决 abort handler 构建自己的结果的空白。 | OPEN |
| 2 | [#10698](https://github.com/earendil-works/pi/pull/10698) | **fix(coding-agent): 在 mcp oauth.clientId 中展开环境变量和命令** — 解决 OAuth clientId 中的 `${VAR}` 和 `!command`（原来只有 clientSecret 支持）。 | CLOSED |
| 3 | [#10690](https://github.com/earendil-works/pi/pull/10690) | **fix(mcp): 对 OAuth HTTP Basic 凭证进行 form-encode 编码** — 修复 RFC 6749 §2.3.1 中 `client_secret_basic` 认证的合规性。 | CLOSED |
| 4 | [#10689](https://github.com/earendil-works/pi/pull/10689) | **fix(agent): 在 prepareRequest 后同步工具声明** — 确保在可以替换 provider 请求上下文的回调之后协调工具声明。 | CLOSED |
| 5 | [#10688](https://github.com/earendil-works/pi/pull/10688) | **fix(coding-agent): 过滤包资源时保留 manifest 边界** — 修复设置暴露超出 pi manifest 边界泄露资源的问题。 | CLOSED |
| 6 | [#10680](https://github.com/earendil-works/pi/pull/10680) | **fix: 支持 npm 12 pack JSON 输出** — 适配 npm 12 改变的 `npm pack --json` 输出格式（对象 vs 数组）。 | CLOSED |
| 7 | [#10694](https://github.com/earendil-works/pi/pull/10694) | **fix(ai): 在 slow_down 后调整 OAuth device 轮询间隔** — 解决 WSL/Ubuntu 时钟漂移导致 OAuth device 流程在 COPILOT 速率限制下失败的问题。 | OPEN |
| 8 | [#10677](https://github.com/earendil-works/pi/pull/10677) | **fix(ai): 将 DashScope 配额节流分类为可重试** — 将阿里巴巴 Model Studio 配额错误标记为可重试而非终端错误。 | CLOSED |
| 9 | [#10521](https://github.com/earendil-works/pi/pull/10521) | **fix(ai): 为 NVIDIA NIM 模型内联 $ref 工具模式** — 修复模型返回仅含 `$ref` 的对象定义时被拒绝验证的问题。 | OPEN |
| 10 | [#10672](https://github.com/earendil-works/pi/pull/10672) | **feat(ai,coding-agent): 只列出 key 可能使用的 OpenRouter 模型** — 通过 `/models/user` 端点根据用户 key 权限过滤模型目录。 | OPEN |

---

## 5. 热门讨论

### 想法 / 功能请求

- [#10632](https://github.com/earendil-works/pi/discussion/10632) — **在工具调用时暂停运行直到人工批准** — 在持久化待批

工具调用以便后续批准（不保存在内存中）的提案。| 2 条评论

### 展示

- [#10069](https://github.com/earendil-works/pi/discussion/10069) — **agent-chat: 独立 Pi 代理的点对点消息** — 支持独立 Pi 会话（在 worktrees 间）共享 Docker 容器、端口和数据库的扩展。| 3 条评论
- [#10687](https://github.com/earendil-works/pi/discussion/10687) — **Orbi: 从 GitHub Issues 无人值守运行 Pi** — 开源运行器，通过标记为 `ai-ready` 的 GitHub Issues 驱动 Pi，创建分支/worktrees 并开启 PR。| 0 条评论

### 问答 / 通用

- [#5936](https://github.com/earendil-works/pi/discussion/5936) — **为什么 Pi 不使用原生终端光标？** — 讨论自定义光标实现与原生终端光标使用。| 3 条评论

---

## 6. 功能请求趋势

根据 Issue 和讨论，最热门的方向包括：

1. **人在环中控制** — 暂停运行、持久化待批工具调用的工具以供延迟批准
2. **扩展 API 增强** — 用于渲染 assistant/user 消息和 thinking block 的公开钩子（类似 `registerToolRenderer`）
3. **Windows 兼容性改进** — 更好地处理 Store 别名、路径模式和 shell 解析
4. **无人值守/无头运行** — 从外部触发器运行 Pi 的扩展（GitHub Issues、定时任务）
5. **按 key 权限过滤模型** — 根据 API key 限制自动过滤可用模型

---

## 7. 开发者痛点

| 痛点 | 频率 | 受影响用户 |
|------------|-----------|----------------|
| 按 ESC 停止思考时**卡在"Working..."状态** | 高（自 v0.84.0）| 所有平台 |
| **OAuth/Auth 失败**（GitHub 登出、ChatGPT 403、device 流程问题） | 高 | 多 provider |
| **Windows 路径处理**（`find` glob 模式、shell 别名） | 中-高 | Windows 用户 |
| **MCP 配置**（环境变量展开、OAuth 凭证） | 中 | 扩展开发者 |
| **压缩/文件列表增长** 跨会话无界 | 中 | 长时间运行会话 |
| **npm 版本兼容性**（npm 12 JSON 输出） | 低-中 | 包发布者 |

---

*基于 2026-10-09 的 GitHub 数据生成*</think>

# Pi 社区摘要 — 2026-10-09

**仓库：** [earendil-works/pi](https://github.com/earendil-works/pi)

---

## 1. 今日要闻

大量关于 OAuth 和认证流程的 bug 报告涌现，特别是影响 ChatGPT 用户的 403 错误。Windows 特定问题仍然突出，`find` 工具的路径模式处理和 shell 解析问题。社区也在积极讨论通过 GitHub Issues 实现无人值守代理运行的扩展。

---

## 2. 发布

过去 24 小时内无新版本。

---

## 3. 热门 Issue

| # | Issue | 摘要 | 评论数 |
|---|-------|---------|----------|
| 1 | [#10031](https://github.com/earendil-works/pi/issues/10031) | **[bug] Pi 在按 `<esc>` 停止思考时偶发卡在"Working..."状态** — 自 ~v0.84.0 起，按 ESC 停止思考会导致 Pi 卡在"Working..."状态，需要 `CTRL+c` 并 `pi -c` 恢复。影响多台机器。 | 26 |
| 2 | [#6686](https://github.com/earendil-works/pi/issues/6686) | **[bug] Pi 自动退出 GitHub 登录** — GitHub provider 持续出现重新认证问题，重新激活之前报告过的问题。 | 14 |
| 3 | [#9773](https://github.com/earendil-works/pi/issues/9773) | **[OPEN] `before_provider_request` 在摘要/压缩请求时不触发** — 文档说明该钩子应在任何 provider 请求前触发，但压缩/分支摘要操作从未触发过。 | 11 |
| 4 | [#10497](https://github.com/earendil-works/pi/issues/10497) | **[bug] OpenRouter Error: 400** — 注入文件内容的扩展导致上下文长度超出错误（请求 1048576+ tokens）。 | 10 |
| 5 | [#10605](https://github.com/earendil-works/pi/issues/10605) | **[bug] ChatGPT/OpenAI OAuth 403 问题** — 拥有 Plus 订阅的用户收到 `subscription_sharing_user_not_eligible` 错误。 | 8 |
| 6 | [#10267](https://github.com/earendil-works/pi/issues/10267) | **[OPEN] 在没有用户提示的运行中，`before_agent_start` 贡献的提示文本会被丢弃** — 后台任务、计划模式继续运行和重试会丢失系统提示添加，每次都重新计费完整提示。 | 8 |
| 7 | [#9946](https://github.com/earendil-works/pi/issues/9946) | **[CLOSED] CMD 模式 (!) 忽略 `outputPad` 设置** — 尽管配置了 `outputPad: 0`，行首空格仍然存在。 | 8 |
| 8 | [#4748](https://github.com/earendil-works/pi/issues/4748) | **[OPEN] pi-tui: `getKeybindings()` realm/instance 单例破坏扩展** — keybindings.ts 中的模块作用域单例导致扩展从自己的 node_modules 导入 keyText 时发生冲突。 | 7 |
| 9 | [#10645](https://github.com/earendil-works/pi/issues/10645) | **[inprogress] `resizeImage` 在编译后的 (Bun) 可执行文件中解析为 null** — 自 0.87.x 起，Windows 上的独立二进制文件中所有图片附件都被省略。 | 4 |
| 10 | [#10654](https://github.com/earendil-works/pi/issues/10654) | **[OPEN] transport 在 mcp.json 中的环境变量展开之前被解析** — MCP 服务器 URL 中的 `${MY_VAR}` 不会展开；只有在没有 schema 前缀时才有效。 | 4 |

---

## 4. 关键 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|---------|--------|
| 1 | [#10703](https://github.com/earendil-works/pi/pull/10703) | **feat(durable): 让扩展能够为中止的工具结果添加注释** — 使扩展能够为中止的工具结果添加注释，解决 abort handler 构建自己的结果时的空白。 | OPEN |
| 2 | [#10698](https://github.com/earendil-works/pi/pull/10698) | **fix(coding-agent): 在 mcp oauth.clientId 中展开环境变量和命令** — 解决 OAuth clientId 中的 `${VAR}` 和 `!command`（原来只有 clientSecret 支持）。 | CLOSED |
| 3 | [#10690](https://github.com/earendil-works/pi/pull/10690) | **fix(mcp): 对 OAuth HTTP Basic 凭证进行 form-encode 编码** — 修复 RFC 6749 §2.3.1 中 `client_secret_basic` 认证的合规性。 | CLOSED |
| 4 | [#10689](https://github.com/earendil-works/pi/pull/10689) | **fix(agent): 在 prepareRequest 后同步工具声明** — 确保在可以替换 provider 请求上下文的回调之后协调工具声明。 | CLOSED |
| 5 | [#10688](https://github.com/earendil-works/pi/pull/10688) | **fix(coding-agent): 过滤包资源时保留 manifest 边界** — 修复设置暴露超出 pi manifest 边界泄露资源的问题。 | CLOSED |
| 6 | [#10680](https://github.com/earendil-works/pi/pull/10680) | **fix: 支持 npm 12 pack JSON 输出** — 适配 npm 12 改变的 `npm pack --json` 输出格式（对象 vs 数组）。 | CLOSED |
| 7 | [#10694](https://github.com/earendil-works/pi/pull/10694) | **fix(ai): 在 slow_down 后调整 OAuth device 轮询间隔** — 解决 WSL/Ubuntu 时钟漂移导致 OAuth device 流程在 COPILOT 速率限制下失败的问题。 | OPEN |
| 8 | [#10677](https://github.com/earendil-works/pi/pull/10677) | **fix(ai): 将 DashScope 配额节流分类为可重试** — 将阿里巴巴 Model Studio 配额错误标记为可重试而非终端错误。 | CLOSED |
| 9 | [#10521](https://github.com/earendil-works/pi/pull/10521) | **fix(ai): 为 NVIDIA NIM 模型内联 $ref 工具模式** — 修复模型返回仅含 `$ref` 的对象定义时被拒绝验证的问题。 | OPEN |
| 10 | [#10672](https://github.com/earendil-works/pi/pull/10672) | **feat(ai,coding-agent): 只列出 key 可能使用的 OpenRouter 模型** — 通过 `/models/user` 端点根据用户 key 权限过滤模型目录。 | OPEN |

---

## 5. 热门讨论

### 想法 / 功能请求

- [#10632](https://github.com/earendil-works/pi/discussion/10632) — **在工具调用时暂停运行直到人工批准** — 持久化待批准的工具调用以便后续处理（不保存在内存中）的提案。 | 2 条评论

### 展示与分享

- [#10069](https://github.com/earendil-works/pi/discussion/10069) — **agent-chat: 独立 Pi 代理的点对点消息** — 支持独立 Pi 会话（在跨 worktrees）共享 Docker 容器、端口和数据库的扩展。 | 3 条评论
- [#10687](https://github.com/earendil-works/pi/discussion/10687) — **Orbi: 从 GitHub Issues 无人值守运行 Pi** — 开源运行器，通过标记为 `ai-ready` 的 GitHub Issues 驱动 Pi，创建分支/worktrees 并开启 PR。 | 0 条评论

### 问答 / 通用

- [#5936](https://github.com/earendil-works/pi/discussion/5936) — **为什么 Pi 不使用原生终端光标？** — 讨论自定义光标实现与原生终端光标使用。 | 3 条评论

---

## 6. 功能请求趋势

根据 Issue 和讨论，最热门的方向包括：

1. **人在环中控制** — 暂停运行、持久化待批工具调用以供延迟批准
2. **扩展 API 增强** — 用于渲染 assistant/user 消息和 thinking block 的公开钩子（类似 `registerToolRenderer`）
3. **Windows 兼容性改进** — 更好地处理 Store 别名、路径模式和 shell 解析
4. **无人值守/无头运行** — 从外部触发器运行 Pi 的扩展（GitHub Issues、定时任务）
5. **按 key 权限过滤模型** — 根据 API key 限制自动过滤可用模型

---

## 7. 开发者痛点

| 痛点 | 频率 | 受影响用户 |
|------------|-----------|----------------|
| 按 ESC 停止思考时**卡在"Working..."状态** | 高（自 v0.84.0）| 所有平台 |
| **OAuth/Auth 失败**（GitHub 登出、ChatGPT 403、device 流程问题） | 高 | 多 provider |
| **Windows 路径处理**（`find` glob 模式、shell 别名） | 中-高 | Windows 用户 |
| **MCP 配置**（环境变量展开、OAuth 凭证） | 中 | 扩展开发者 |
| **压缩/文件列表增长** 跨会话无界 | 中 | 长时间运行会话 |
| **npm 版本兼容性**（npm 12 JSON 输出） | 低-中 | 包发布者 |

---

*基于 2026-10-09 的 GitHub 数据生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English Qwen Code Community Digest into Chinese (Simplified Chinese, as indicated by the existing Chinese content in the prompt). I need to:

1. Translate all the text while keeping the markdown structure exactly as-is
2. Preserve URLs, issue/PR numbers, file paths, etc.
3. Use natural technical Chinese register - like a developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me translate section by section:

**1. Today's Highlights**
The project continues heavy investment in Managed Agent architecture... should become 项目持续大力投入 Managed Agent 架构建设...

Let me go through the entire digest:</think>

# Qwen Code 社区动态
## 2026-10-09

---

### 1. 今日要闻

Qwen Code 项目持续大力投入 Managed Agent 架构建设，在多代理会话管理和子会话运行时（H4b）方面取得显著进展。社区正在积极修复会话生命周期、MCP 工具确认和 Windows 平台兼容性等方面的关键问题。一个值得关注的安全隐患涉及 git worktree guard 的 heredoc 处理方式，同时依赖 CVE 审计出现失败需要排查。

---

### 2. 版本发布

**过去 24 小时内无新版本发布。**

---

### 3. 热门 Issue

**#12380** — [proposal(serve): 定义 Managed Agent 双路径架构与分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380) — 50 条评论
> 定义了分阶段 Managed Agent 架构，保留现有 TypeScript 代理循环，使模型推理独立于工具环境配置，并赋予会话持久所有权，包含工作区绑定和可恢复的工具执行。
> *意义：下一代多代理系统的基础架构。*

**#12867** — [feat(managed-agent): 持久生命周期的 D 阶段后续工作](https://github.com/QwenLM/qwen-code/issues/12867) — 19 条评论
> 涵盖持久生命周期、Turns、Actions、`java_durable` 准入配置文件和 AgentDefinition。
> *意义：长时运行代理会话的关键功能。*

**#13395** — [tracking(runtime): Kubernetes 工具运行时进度与跨平台交付门禁](https://github.com/QwenLM/qwen-code/issues/13395) — 16 条评论
> 跟踪 Kubernetes CSI 运行时基础架构和跨平台交付门禁的进度。
> *意义：支持容器化代理部署。*

**#13078** — [每日依赖 CVE 审计失败](https://github.com/QwenLM/qwen-code/issues/13078) — 14 条评论
> 计划的依赖 CVE 审计失败，可能是由于新增高危漏洞或 npm audit 端点问题。
> *意义：安全监控出现缺口。*

**#13004** — [perf(memory): 无操作提取后添加有界冷却时间](https://github.com/QwenLM/qwen-code/issues/13004) — 9 条评论
> 提议在无操作轮次后对托管自动内存提取实施有界节流策略。
> *意义：内存管理的性能优化。*

**#13632** — [feat(mcp): 在 notifications/tools/list_changed 时刷新服务器工具](https://github.com/QwenLM/qwen-code/issues/13632) — 7 条评论
> 处理 MCP 服务器通知以在会话期间动态刷新工具注册表。
> *意义：MCP 集成的动态工具发现。*

**#13707** — [stripAnalysisBlock: 重新绑定路径缺口导致推理对被剥离](https://github.com/QwenLM/qwen-code/issues/13707) — 5 条评论
> Bug：`stripAnalysisBlock` 的信封绑定在多闭合器重新绑定路径上失败，将有效载荷中的推理标签模式剥离了。
> *意义：分析块处理中的数据完整性问题。*

**#13689** — [子代理定义不能包含 ${identifier}](https://github.com/QwenLM/qwen-code/issues/13689) — 5 条评论
> Bug：子代理定义文件中的 fenced 代码块内包含 `${identifier}` 时，启动失败并报 templateString 错误。
> *意义：破坏了代理定义中常见的文档模式。*

**#13650** — [Managed Agent: 托管会话日志在故障后永久失效](https://github.com/QwenLM/qwen-code/issues/13650) — 4 条评论 | **P1**
> 托管会话日志在跨越激活续期的控制平面故障后永久停止，返回 503 错误。
> *意义：托管会话的关键可用性问题。*

**#13705** — [daemon git worktree guard: heredoc 内容被传给 shell 时执行](https://github.com/QwenLM/qwen-code/issues/13705) — 3 条评论 | **P1**
> 安全问题：git worktree guard 剥离的 heredoc 内容在接收方是 shell/解释器时会执行。
> *意义：潜在的代码执行漏洞。*

---

### 4. 关键 PR 进展

| PR | 标题 | 状态 |
|----|------|------|
| **#13697** | [fix(core): 在 MCP 工具确认时展示 PreToolUse ask 内容](https://github.com/QwenLM/qwen-code/pull/13697) | ✅ 已关闭 |
| **#13521** | [fix(memory): 内存索引变化时保留提示词前缀](https://github.com/QwenLM/qwen-code/pull/13521) | ✅ 已关闭 |
| **#13576** | [fix(core): 将发现提示限制在已注册能力上](https://github.com/QwenLM/qwen-code/pull/13576) | ✅ 已关闭 |
| **#13550** | [feat(managed-agent): H4b 子会话运行时](https://github.com/QwenLM/qwen-code/pull/13550) | 🔄 进行中 |
| **#13583** | [feat(agents): 移除 thread 后端并在会话上运行 A2A](https://github.com/QwenLM/qwen-code/pull/13583) | 🔄 进行中 |
| **#13526** | [feat(runtime): 添加私有 CSI 运行时基础架构](https://github.com/QwenLM/qwen-code/pull/13526) | 🔄 进行中 |
| **#13643** | [feat(web-shell: 支持将工作区固定到侧边栏](https://github.com/QwenLM/qwen-code/pull/13643) | 🔄 进行中 |
| **#13664** | [feat(web-shell): 添加只读 Excel 工件预览](https://github.com/QwenLM/qwen-code/pull/13664) | 🔄 进行中 |
| **#13654** | [feat(managed-agent): 异步验证工具发布](https://github.com/QwenLM/qwen-code/pull/13654) | 🔄 进行中 |
| **#13572** | [feat(managed-agent): H5b/H5c 邮件适配器通道运行时](https://github.com/QwenLM/qwen-code/pull/13572) | 🔄 进行中 |

---

### 5. 功能需求趋势

根据 Issue 分析，以下功能方向需求最强烈：

- **多代理架构**：Managed Agent 双路径架构、子会话运行时、A2A 协议采用
- **会话持久性**：持久生命周期、Turns/Actions、检查点恢复、会话恢复机制
- **平台分发**：Kubernetes CSI 运行时、跨平台交付门禁、Windows 本地消息传递支持
- **内存管理**：有界提取冷却策略、提示词前缀保留
- **MCP 增强**：动态工具刷新、工具发布验证
- **WebShell 改进**：工作区固定、Excel 工件预览、会话管理 UI

---

### 6. 开发者痛点

- **CI 可靠性**：E2E 测试和 Main CI 反复失败，导致开发效率受阻
- **依赖安全**：CVE 审计失败造成监控缺口
- **Windows 平台**：本地消息传递主机注册、PowerShell 钩子窗口最小化等多个问题
- **扩展调用**：#10841 修复后拒绝纯 authored 名称
- **模板解析**：代码块中的 `${identifier}` 破坏子代理定义
- **会话恢复**：故障后日志永久失效、冷缓存取消问题
- **ARM64 Linux**：打包的 ripgrep 二进制文件在树莓派 5 上运行失败

---

*动态基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*