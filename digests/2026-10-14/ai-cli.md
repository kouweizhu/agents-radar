# AI CLI 工具社区动态日报 2026-10-14

> 生成时间: 2026-10-14 01:21 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English cross-tool comparison report into Chinese, following very specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical terms:

---

# Cross-Tool Comparison: AI CLI Tools Ecosystem

## 1. Ecosystem Overview

The AI-assisted CLI development landscape has matured significantly, with seven active tools competing for developer mindshare. The market exhibits clear stratification: **OpenAI Codex** and **Claude Code** represent the most feature-rich, enterprise-ready options with extensive plugin ecosystems, while **Qwen Code** and **Pi** target developers seeking deeper programmatic control. A notable trend is the shift toward **session-level persistence and recovery**, with every tool investing heavily in resumable workflows and context management—driven by the reality that long-running agentic tasks require robust fault tolerance. Cross-platform parity (particularly Windows) remains a pain point across the board, alongside tension between security constraints and extensibility.

## 2. Activity Comparison

I need to translate this table carefully - keeping all formatting and values intact:

| Tool | Repository | Issues (24h) | PRs (24h) | Discussions | Releases (24h) |
|------|------------|:------------:|:---------:|:-----------:|:--------------:|
| Claude Code | anthropics/claude-code | 30 | 2 | N/A* | 0 |


| OpenAI Codex | openai/codex | 30 | 20 | 10+ | 3 |
| Gemini CLI | google-gemini/gemini-cli | 30 | 20 | N/A* | 3 |
| Copilot CLI | github/copilot-cli | 10 | 0 | N/A* | 4 |
| OpenCode | anomalyco/opencode | 30 | 20 | N/A* | 0 |
| Pi | earendil-works/pi | 30 | 14 | N/A* | 0 |
| Qwen Code | QwenLM/qwen-code | 30

I'm tracking activity metrics across seven development tools, capturing their issue volumes, pull requests, discussion activity, and release cadence over a 24-hour window. The data shows varied engagement levels, with some tools like OpenAI Codex and Gemini CLI maintaining high activity while others show minimal movement. 这些工具展现出一些共性的技术需求。多个平台都在寻求更好的会话状态恢复机制，包括Claude Code、Gemini CLI、Pi和Qwen Code在内的工具都希望实现更完善的工具恢复能力。扩展性方面，Claude Code、OpenCode和Gemini CLI都在构建更灵活的插件系统来支持MCP服务器集成。

在提供商灵活性上，Copilot CLI、OpenCode、Pi和Qwen Code都期望支持自定义提供商和模型别名功能。成本控制也成为关注点，Claude Code和OpenCode都在探索预算上限的实现方式。此外，Claude Code、OpenAI Codex和Gemini CLI都在加强与VS Code和Zed IDE的深度集成。

多账户管理方面，Claude Code和Copilot CLI需要支持便捷的账户切换和跨应用会话同步。终端用户体验上，Gemini CLI、OpenCode和Pi都在优化渲染效果、tmux兼容性和硬件光标支持。安全防护层面，Claude Code和Gemini CLI都在强化代码执行的沙箱限制和只读工作区配置。

各工具在定位上存在明显差异。Claude Code面向企业级开发者，强调代理能力和Mods扩展性；OpenAI Codex服务于Web开发者，专注于浏览器自动化和VS Code集成；Gemini CLI面向早期采用者和Gemini生态用户，采用激进的预览版发布策略；Copilot CLI则定位于GitHub原生开发者的工作流优化；OpenCode面向重视本地部署和隐私的群体；Pi满足终端爱好者和研究人员对深度定制的需求；Qwen Code则面向企业Java团队和Qwen生态，提供代理-运行时架构。

在社区活跃度方面，OpenAI Codex表现最突出，保持高PR数量和发布频率，同时拥有活跃的讨论环境。Claude Code虽然Issue数量较多，但PR活跃度相对较低。

Gemini CLI和Qwen Code展现出强劲的发展势头，前者保持高PR和发布量，后者则在快速迭代中解决关键问题。相比之下，Copilot CLI虽然发布频率不错，但完全依赖内部开发。

企业级应用方面，Claude Code和OpenAI Codex凭借成熟的插件生态和稳定表现占据领先地位。Qwen Code和Pi等较新的项目正在迅速补充企业级功能，比如多租户隔离和持久化能力。

开发者社区的核心诉求很明确：容错恢复机制已成为基础要求，供应商选择趋于多元化，Windows兼容性仍是主要痛点，同时在安全性和可扩展性之间存在持续的张力。

推理控制能力正成为新的差异化因素，MCP协议的采用范围在不断扩大。

企业在选择时若重视成熟度和生态完整性，Claude Code和OpenAI Codex是首选；若倾向于自托管或本地部署，OpenCode提供了明确的方向；Qwen用户则能从Qwen Code获得原生优化；终端爱好者可在Pi中获得深度的TUI定制。当前阶段所有工具都面临Windows稳定性的挑战，这应纳入部署规划中。

基于2026年10月14日的社区摘要编制，反映了全部七个工具的活动状态。</think>

# 跨工具对比：AI CLI 工具生态

## 1. 生态概览

AI 辅助 CLI 开发领域已显著成熟，七款活跃工具在开发者心智中展开竞争。市场呈现明显的分层：**OpenAI Codex** 和 **Claude Code** 是功能最丰富、企业级就绪程度最高的选项，拥有广泛的插件生态；而 **Qwen Code** 和 **Pi** 则面向追求更深层编程控制权的开发者。一个值得注意的趋势是向 **会话级持久化和恢复** 的转变——每款工具都在大力投资可恢复的工作流和上下文管理，这背后的驱动力是长时间运行的代理任务需要强大的容错能力。跨平台一致性（尤其是 Windows）仍然是整个领域的痛点，同时安全约束与可扩展性之间也存在张力。

---

## 2. 活跃度对比

| 工具 | 仓库 | Issues (24h) | PRs (24h) | Discussions | Releases (24h) |
|------|------------|:------------:|:---------:|:-----------:|:--------------:|
| Claude Code | anthropics/claude-code | 30 | 2 | N/A* | 0 |
| OpenAI Codex | openai/codex | 30 | 20 | 10+ | 3 |
| Gemini CLI | google-gemini/gemini-cli | 30 | 20 | N/A* | 3 |
| Copilot CLI | github/copilot-cli | 10 | 0 | N/A* | 4 |
| OpenCode | anomalyco/opencode | 30 | 20 | N/A* | 0 |
| Pi | earendil-works/pi | 30 | 14 | N/A* | 0 |
| Qwen Code | QwenLM/qwen-code | 30 | 10 | N/A* | 2 |

*这些仓库将 GitHub Issues 作为主要社区渠道；这不是本生态的讨论常态。

---

## 3. 共同的功能方向

| 功能方向 | 涉及的工具 | 具体需求 |
|------------------|------------------|----------------|
| **会话/上下文恢复** | Claude Code, Gemini CLI, Pi, Qwen Code | 中断后可恢复的会话、恢复时的工具恢复、对 MAX_TURNS 终止的正确处理 |
| **可扩展性 / 插件系统** | Claude Code, OpenCode, Gemini CLI | Mods/hooks/插件、MCP 服务器集成、提供商扩展 API |
| **提供商/模型灵活性** | Copilot CLI, OpenCode, Pi, Qwen Code | 自定义提供商支持、模型别名、BYOK（使用自己的密钥）、正确的采样参数处理 |
| **成本/预算控制** | Claude Code, OpenCode | 单次会话支出上限、token 使用可见性、后台代理限制 |
| **IDE/编辑器集成** | Claude Code, OpenAI Codex, Gemini CLI | VS Code 语法高亮、Zed IDE 支持、编辑器嵌入式工具 |
| **多账户 / 配置管理** | Claude Code, Copilot CLI | 便捷的账户切换、跨应用会话同步 |
| **终端/UI 改进** | Gemini CLI, OpenCode, Pi | 渲染修复、tmux 兼容性、硬件光标、双向文本 |
| **安全/沙箱** | Claude Code, Gemini CLI | 只读工作区设置、针对不受信任代码的操作系统级沙箱 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------------|--------------|---------------------|
| **Claude Code** | 具备"Mods"可扩展性的代理开发 | 企业开发者、进阶用户 | 大力投入安全过滤器、MCP 协议、桌面集成 |
| **OpenAI Codex** | 浏览器/Computer Use 自动化、深度 VS Code 集成 | Web 开发者、自动化工程师 | 以代理为中心，具备浏览器工具原语，Windows 优先 |
| **Gemini CLI** | 快速迭代、实验性功能 | 早期采用者、Gemini 生态用户 | 夜间/预览版发布节奏、AST 感知工具探索 |
| **Copilot CLI** | 开发者工作流集成、GH 生态 | GitHub 原生开发者 | 代理作用域声明式 hooks、紧密的 GitHub 集成 |
| **OpenCode** | 自托管、本地优先 | 自托管部署者、隐私敏感用户 | 托管配置、本地优先架构 |
| **Pi** | 深度定制、终端中心 | 终端爱好者、研究人员 | 思考级别控制、NVIDIA Nemotron 优化、模型特定参数调优 |
| **Qwen Code** | 受管代理生产、Java/企业级 | 企业 Java 团队、Qwen 生态 | Broker-运行时架构、CSI 会话、Java SDK 深度 |

---

## 5. 社区活力与成熟度

**最活跃（高量 + 快迭代）：**
- **OpenAI Codex** — 24 小时内 20 个 PR、3 个发布、10+ 条讨论。强劲的开发节奏和社区参与度的有力证据。
- **Gemini CLI** — 20 个 PR、3 个发布。匹配 Codex 的开发速度；功能请求显示了雄心勃勃的路线图（AST 工具、沙箱）。
- **Qwen Code** — 10 个 PR、2 个发布；高优先级的 bug 修复速度（P1/P2 问题正在积极处理中）。团队虽小但聚焦度极高。

**中等活跃：**
- **Claude Code** — 30 个活跃 issue，但仅 2 个 PR。社区在 issue 上参与度高；似乎外部贡献者基数较小。
- **OpenCode** — 20 个 PR 表明开发活跃，虽然今天没有发布。
- **Pi** — 14 个 PR；小众但持续贡献模式。

**较低活力：**
- **Copilot CLI** — 4 个发布很可观，但 0 个 PR 表明内部开发或封闭的贡献模式。

**成熟度信号：**
- **Claude Code** 与 **OpenAI Codex**：最长的发展轨迹、最大的 issue 量、成熟的插件生态。
- **Qwen Code** 与 **Pi**：较新的项目但正在快速添加企业级功能（租户隔离、持久化整合）。
- **OpenCode**：强大的自托管定位；小众但忠实的受众。

---

## 6. 趋势信号

### 开发者正在要求什么（需求信号）

1. **容错会话已是标配** — 每款工具都在投资会话恢复、检查点和工具恢复。社区明确期望长时间运行的代理任务能够经受住重启、网络中断和终端关闭。

2. **提供商碎片化正在加速** — 自定义提供商支持、BYOK、模型别名出现在 4+ 工具中。开发者想用自己的 API 密钥、模型和网关。不提供这些的工具正在失去市场相关性。

3. **Windows 一致性仍未解决** — 尽管开发多年，Windows 特定问题仍然主导热门 bug 列表（OAuth 循环、浏览器工具失败、PTY helper 路径问题）。这仍然是正确处理 Windows 的工具的战略差异化点。

4. **安全与可扩展性的张力** — Claude Code 的安全过滤器阻止合法的逆向工程工作，以及 Gemini CLI 的只读工作区强制执行，显示"代理可以执行任何操作"的模型正在为企业采用而被约束。

5. **思考/推理控制是新前沿** — Pi 和 Qwen Code 正在开创模型特定控制（思考级别、effort 变化、缓存保留）。这反映了推理模型根据推理时参数表现不同的崛起。

6. **"MCP 效应"真实存在** — MCP（Model Context Protocol）在多工具的 issue 中出现。与 MCP 服务器的互操作性正在成为基础预期。

### 决策者需关注的重点

- **需要企业级支持与生态**：Claude Code 或 OpenAI Codex 在成熟度和插件广度上领先。
- **需要自托管或本地执行**：OpenCode 填补了其他工具忽视的空白。
- **在 Qwen 或 NVIDIA 生态中**：Qwen Code 提供原生优化。
- **优先终端中心工作流**：Pi 提供最深的 TUI 定制化。
- **今天就需要 Windows 稳定性**：整个领域都存在摩擦；将此纳入部署规划。

---

*跨工具分析基于 2026-10-14 的社区摘要编制。数据反映全部七款工具的活动情况。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report into Chinese (Simplified). Let me translate it carefully, following the rules:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, project names, issue/PR references as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate:

---

# Claude Code Skills 社区亮点报告

**数据来源: anthropics/skills (截至 2026-10-14)**

---

## 1. 技能排名

*注：数据集中 PR 评论数不可用。排名依据：功能新颖度、复杂度和范围。*

| # | PR | 功能 | 状态 |
|---|-----|---------------|--------|
| 1 | **[#1961](https://github.com/anthropics/skills/pull/1961)** - skill-creator: 强化 eval viewer | 强化 eval viewer 防御脚本越狱、DNS 重新绑定、跨站 POST 和转义漏洞 | OPEN |
| 2 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | Web3 技能，实现自动化 Solidity/Rust 智能合约静态分析；通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | OPEN |
| 3 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 零成本技能，将 Markdown 文档编译成专业 MP4 视频，配有逼真人声旁白（基于 Marp） | OPEN |


| 4 | **[#1298](https://github.com/anthropics/skills/pull/1298)** - skill-creator: 隔离触发评估 | 修复 Windows 下的误触发、子进程竞态条件，以及运行时失败被错误分类的问题 | OPEN |
| 5 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation + quantitative-resume-auditor | 将产品/技术规范转换为可执行的 Notion 任务；提供量化评分的简历审计 | OPEN |
| 6 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | 端到端测试技能，赋予 Claude 视觉/浏览器控制能力，实现零代码自动化测试生成 | OPEN |
| 7 | **[#1742](https://github.com/anthropics/skills/pull/1742)** - mcp-builder: mcp>=2 支持 | 修复 MCP v2.0+ 导入命名（`streamable_http_client`）和自定义标头配置 | OPEN |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** - document-typography | 防止 AI 生成文档中的排版问题：孤行控制、段落处理 | OPEN |

## 2. 社区需求趋势

*基于高参与度 Issue 分析：*

| 主题 | 评论数 | 关键洞察 |
|-------|-------------|-------------|
| **安全与信任** | 46 条 | 通过 `anthropic/` 命名空间冒充实现的信任边界滥用是社区首要关注点 |
| **企业/组织级共享** | 16 条 | 对组织级技能库有强烈需求；目前需手动文件分发 |
| **评估/触发可靠性** | 12+ 条 | `run_eval.py` 显示 0% 触发率——阻碍技能验证工作流 |
| **技能持久化** | 10 条 | 用户报告技能无声丢失；文件管理脆弱 |
| **元技能（质量/安全）** | 8 条 | 对评估/分析其他技能的技能感兴趣 |
| **治理与安全** | 6 条 | 代理治理模式提案：策略执行、威胁检测、审计追踪 |

**新兴方向：** 社区正在发出明确信号——需求正从"技能数量"转向**"质量与信任"**，对**企业级治理、安全加固和可靠评估基础设施**的呼声日益高涨。

## 3. 潜力待定技能

这些活跃的 PR 展现出实质性功能，可能即将合并：

| PR | 技能 | 近期可能合并的原因 |
|----|-------|----------------------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | proofcore-contract-auditor | Web3 领域定位清晰；作者来自协议团队 |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | md2video-audio | 价值主张明确；零成本吸引力 |
| **[#1961](https://github.com/anthropics/skills/pull/1961)** | eval-viewer 加固 | 安全修复；低风险高影响 |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** | docx: LibreOffice 超时修复 | 健壮性改进；范围明确 |
| **[#1997](https://github.com/anthropics/skills/pull/1997)** | YAML frontmatter 解析修复 | 修正技能描述中的元数据丢失 |

## 4. 技能生态系统洞察

> **社区最集中的需求是面向企业的基础设施：安全技能分发、可靠评估/触发，以及组织级共享——而非额外的单一用途技能。**

---

*报告基于 GitHub Issues/PRs 数据生成。所有链接指向 anthropics/skills。*</think>

# Claude Code Skills 社区亮点报告

**数据来源: anthropics/skills (截至 2026-10-14)**

---

## 1. 技能排名

*注：数据集中 PR 评论数不可用。排名依据：功能新颖度、复杂度和范围。*

| # | PR | 功能 | 状态 |
|---|-----|---------------|--------|
| 1 | **[#1961](https://github.com/anthropics/skills/pull/1961)** - skill-creator: 强化 eval viewer | 强化 eval viewer 防御脚本越狱、DNS 重新绑定、跨站 POST 和转义漏洞 | OPEN |
| 2 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | Web3 技能，实现自动化 Solidity/Rust 智能合约静态分析；通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | OPEN |
| 3 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 零成本技能，将 Markdown 文档编译成专业 MP4 视频，配有逼真人声旁白（基于 Marp） | OPEN |
| 4 | **[#1298](https://github.com/anthropics/skills/pull/1298)** - skill-creator: 隔离触发评估 | 修复 Windows 下的误触发、子进程竞态条件，以及运行时失败被错误分类的问题 | OPEN |
| 5 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation + quantitative-resume-auditor | 将产品/技术规范转换为可执行的 Notion 任务；提供量化评分的简历审计 | OPEN |
| 6 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | 端到端测试技能，赋予 Claude 视觉/浏览器控制能力，实现零代码自动化测试生成 | OPEN |
| 7 | **[#1742](https://github.com/anthropics/skills/pull/1742)** - mcp-builder: mcp>=2 支持 | 修复 MCP v2.0+ 导入命名（`streamable_http_client`）和自定义标头配置 | OPEN |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** - document-typography | 防止 AI 生成文档中的排版问题：孤行控制、段落处理、编号对齐 | OPEN |

---

## 2. 社区需求趋势

*基于高参与度 Issue 分析：*

| 主题 | 评论数 | 关键洞察 |
|-------|-------------|-------------|
| **安全与信任** | 46 条 | 通过 `anthropic/` 命名空间冒充实现的信任边界滥用是社区首要关注点 |
| **企业/组织级共享** | 16 条 | 对组织级技能库有强烈需求；目前需手动文件分发 |
| **评估/触发可靠性** | 12+ 条 | `run_eval.py` 显示 0% 触发率——阻碍技能验证工作流 |
| **技能持久化** | 10 条 | 用户报告技能无声丢失；文件管理脆弱 |
| **元技能（质量/安全）** | 8 条 | 对评估/分析其他技能的技能感兴趣 |
| **治理与安全** | 6 条 | 代理治理模式提案：策略执行、威胁检测、审计追踪 |

**新兴方向：** 社区正在发出明确信号——需求正从"技能数量"转向**"质量与信任"**，对**企业级治理、安全加固和可靠评估基础设施**的呼声日益高涨。

---

## 3. 潜力待定技能

这些活跃的 PR 展现出实质性功能，可能即将合并：

| PR | 技能 | 近期可能合并的原因 |
|----|-------|----------------------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | proofcore-contract-auditor | Web3 领域定位清晰；作者来自协议团队 |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | md2video-audio | 价值主张明确；零成本吸引力 |
| **[#1961](https://github.com/anthropics/skills/pull/1961)** | eval-viewer 加固 | 安全修复；低风险高影响 |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** | docx: LibreOffice 超时修复 | 健壮性改进；范围明确 |
| **[#1997](https://github.com/anthropics/skills/pull/1997)** | YAML frontmatter 解析修复 | 修正技能描述中的元数据丢失 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求是面向企业的基础设施：安全技能分发、可靠评估/触发，以及组织级共享——而非额外的单一用途技能。**

---

*报告基于 GitHub Issues/PRs 数据生成。所有链接指向 anthropics/skills。*

---

<think>The user wants me to translate this English newsletter into Chinese. Let me carefully follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code, identifiers as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate:

# Claude Code 社区简报

**2025年10月14日**

---

## 今日要点

社区继续围绕可扩展性和多账户管理推动重要的功能讨论。"Mods"功能提案（#91870）获得了大量关注，收到了256条评论，而长期以来的多账户请求（#18435）即将突破900个赞。今天关闭了多个网络安全误报问题，但这表明安全过滤器与合法的逆向工程工作流程之间仍存在持续紧张。

---

## 发布动态

过去24小时内无新版本发布。

---

## 热门问题

| # | Issue | 摘要 | 评论 | 👍 |
|---|-------|---------|----------|-----|
| 1 | [#91870](https://github.com/anthropics/claude-code/issues/91870) | **[Mods] 让 Claude 可扩展性提升 10 倍** — 关于插件/钩子系统的重大可扩展性提案。团队表示"几周内发布。" | 256 | 131 |
| 2 | [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Claude Desktop 多账户管理** — 轻松切换账户的简易配置请求。热度很高（895赞）。 | 200 | 895 |
| 3 | [#26457](https://github.com/anthropics/claude-code/issues/26457) | **Windows 11 重装失败：签名验证** — Windows 11 上首次安装后桌面应用无法重新打开。 | 31 | 20 |


| 4 | [#31537](https://github.com/anthropics/claude-code/issues/31537) | **充值后积分余额异常** — 用户反映购买积分后余额显示不正确。 | 25 | 11 |
| 5 | [#32362](https://github.com/anthropics/claude-code/issues/32362) | **Zed IDE 集成支持** — 官方 Zed 扩展请求；当前显示"未检测到可用 IDE"。 | 20 | 54 |
| 6 | [#64968](https://github.com/anthropics/claude-code/issues/64968) | **VS Code 扩展聊天面板中的语法高亮** — 代码块无论语言标签如何都呈现为纯文本。 | 15 | 37 |
| 7 | [#89812](https://github.com/anthropics/claude-code/issues/89812) | **Linux 桌面版：需要每日重新登录** — 会话过期重置需要重复验证；Cowork 文件夹需要双重登录。 | 15 | 5 |
| 8 | [#95966](https://github.com/anthropics/claude-code/issues/95966) | **计划任务在触发窗口期间静默跳过** — 任务未执行且 Windows 上无错误或历史记录。 | 10 | 0 |
| 9 | [#94013](https://github.com/anthropics/claude-code/issues/94013) | **后台子代理：无令牌/轮次限制** — 三个研究代理消耗了 1.7M 令牌且无需批准。 | 5 | 0 |
| 10 | [#95964](br https://github.com/anthropics/claude-code/issues/95964) | **每个会话的消费上限** — `--max-budget-usd` 仅在打印模式下有效，交互模式下不可用。 | 4 | 1 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| 1 | [#44393](https://github.com/anthropics/claude-code/pull/44393) | **修复：在 backfill-duplicate-comments 脚本中正确处理 DAYS_BACK 环境变量** — 脚本现在通过环境变量正确过滤创建日期的问题，而不是忽略它。 |
| 2 | [#1](https://github.com/anthropics/claude-code/pull/1) | **创建 SECURITY.md** — 在仓库中添加安全策略文档。 |

---

## 功能需求趋势

根据问题分析，社区主要请求包括：

1. **可扩展性和插件** — "Mods"系统（#91870）、MCP 改进、TUI 转 Web GUI（#101910）
2. **IDE 集成** — Zed IDE 支持（#32362）、VS Code 语法高亮（#64968）
3. **多账户/个人资料管理** — 桌面应用需要更简单的账户切换（#18435）
4. **成本控制** — 每会话消费上限（#95964）、后台代理令牌限制（#94013）、代理并发限制执行
5. **桌面平台可靠性** — Windows 11 安装问题（#26457）、Linux 登录循环（#89812）、计划任务失败（#95966）

---

## 开发者痛点

- **身份验证和会话管理**：Linux 用户面临频繁的重新登录；Windows 安装签名验证失败；Cowork 文件夹需要双重登录
- **成本可见性**：交互式会话中无实时预算跟踪；后台子代理无声消耗令牌且无批准
- **IDE 集成差距**：Zed 未被检测到；VS Code 扩展在聊天中缺少语法高亮
- **安全过滤器误报**：多个网络安全相关阻止合法的逆向工程工作（无人机协议、Android 调试、内存转储分析）— 今天关闭了几个作为重复的问题，表明持续存在待分类积压
- **平台可靠性**：计划任务静默失败，充值后积分余额异常

---

*数据来源：github.com/anthropics/claude-code | 2025年10月14日*</think>

# Claude Code 社区简报

**2025年10月14日**

---

## 今日要点

社区继续围绕可扩展性和多账户管理推动重要的功能讨论。"Mods"功能提案（#91870）获得了大量关注，收到了256条评论，而长期以来的多账户请求（#18435）即将突破900个赞。今天关闭了多个网络安全误报问题，但这表明安全过滤器与合法的逆向工程工作流程之间仍存在持续紧张。

---

## 发布动态

过去24小时内无新版本发布。

---

## 热门问题

| # | Issue | 摘要 | 评论 | 👍 |
|---|-------|---------|----------|-----|
| 1 | [#91870](https://github.com/anthropics/claude-code/issues/91870) | **[Mods] 让 Claude 可扩展性提升 10 倍** — 关于插件/钩子系统的重大可扩展性提案。团队表示"几周内发布。" | 256 | 131 |
| 2 | [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Claude Desktop 多账户管理** — 轻松切换账户的简易配置请求。热度很高（895赞）。 | 200 | 895 |
| 3 | [#26457](https://github.com/anthropics/claude-code/issues/26457) | **Windows 11 重装失败：签名验证** — Windows 11 上首次安装后桌面应用无法重新打开。 | 31 | 20 |
| 4 | [#31537](https://github.com/anthropics/claude-code/issues/31537) | **充值后积分余额异常** — 用户反映购买积分后余额显示不正确。 | 25 | 11 |
| 5 | [#32362](https://github.com/anthropics/claude-code/issues/32362) | **Zed IDE 集成支持** — 官方 Zed 扩展请求；当前显示"未检测到可用 IDE"。 | 20 | 54 |
| 6 | [#64968](https://github.com/anthropics/claude-code/issues/64968) | **VS Code 扩展聊天面板中的语法高亮** — 代码块无论语言标签如何都呈现为纯文本。 | 15 | 37 |
| 7 | [#89812](https://github.com/anthropics/claude-code/issues/89812) | **Linux 桌面版：需要每日重新登录** — 会话过期重置需要重复验证；Cowork 文件夹需要双重登录。 | 15 | 5 |
| 8 | [#95966](https://github.com/anthropics/claude-code/issues/95966) | **计划任务在触发窗口期间静默跳过** — 任务未执行且 Windows 上无错误或历史记录。 | 10 | 0 |
| 9 | [#94013](https://github.com/anthropics/claude-code/issues/94013) | **后台子代理：无令牌/轮次限制** — 三个研究代理消耗了 1.7M 令牌且无需批准。 | 5 | 0 |
| 10 | [#95964](https://github.com/anthropics/claude-code/issues/95964) | **每个会话的消费上限** — `--max-budget-usd` 仅在打印模式下有效，交互模式下不可用。 | 4 | 1 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| 1 | [#44393](https://github.com/anthropics/claude-code/pull/44393) | **修复：在 backfill-duplicate-comments 脚本中正确处理 DAYS_BACK 环境变量** — 脚本现在通过环境变量正确过滤创建日期的问题，而不是忽略它。 |
| 2 | [#1](https://github.com/anthropics/claude-code/pull/1) | **创建 SECURITY.md** — 在仓库中添加安全策略文档。 |

---

## 功能需求趋势

根据问题分析，社区主要请求包括：

1. **可扩展性和插件** — "Mods"系统（#91870）、MCP 改进、TUI 转 Web GUI（#101910）
2. **IDE 集成** — Zed IDE 支持（#32362）、VS Code 语法高亮（#64968）
3. **多账户/个人资料管理** — 桌面应用需要更简单的账户切换（#18435）
4. **成本控制** — 每会话消费上限（#95964）、后台代理令牌限制（#94013）、代理并发限制执行
5. **桌面平台可靠性** — Windows 11 安装问题（#26457）、Linux 登录循环（#89812）、计划任务失败（#95966）

---

## 开发者痛点

- **身份验证和会话管理**：Linux 用户面临频繁的重新登录；Windows 安装签名验证失败；Cowork 文件夹需要双重登录
- **成本可见性**：交互式会话中无实时预算跟踪；后台子代理无声消耗令牌且无批准
- **IDE 集成差距**：Zed 未被检测到；VS Code 扩展在聊天中缺少语法高亮
- **安全过滤器误报**：多个网络安全相关阻止合法的逆向工程工作（无人机协议、Android 调试、内存转储分析）— 今天关闭了几个作为重复的问题，表明持续存在待分类积压
- **平台可靠性**：计划任务静默失败，充值后积分余额异常

---

*数据来源：github.com/anthropics/claude-code | 2025年10月14日*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the content to Simplified Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Preserve URLs, issue/PR references, version tags, file paths, numbers, dates
4. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate section by section, keeping the structure intact.

Key translations to consider:
- "Community Digest" → 社区摘要/技术digest
- "Today's Highlights" → 今日要闻
- "Releases" → 版本发布
- "Hot Issues" → 热门issue
- "Bug" → Bug/缺陷
- "Enhancement" → 增强功能
- "Feature Request Trends" → 功能需求趋势
- "Developer Pain Points" → 开发者痛点
- "Hot Discussions" → 热门讨论
- "Show and Tell" → 展示与分享
- "Q&A" → 问答

Let me start translating while preserving all formatting.</think>

# OpenAI Codex 社区摘要 — 2026-10-14

## 今日要闻

今日社区动态以 Windows 平台问题为主，多个高评论量的 bug 涉及浏览器工具、连接性和 MCP 集成。团队发布了三个 Rust alpha 版本（v0.163.0-alpha.8/9/10），同时社区贡献持续扩展跨浏览器支持和开发者工具。值得注意的是，围绕 Windows 任务中缺失 Computer Use 工具的讨论已形成 79 条评论的活跃线程。

---

## 版本发布

| 版本 | 说明 |
|------|------|
| **rust-v0.163.0-alpha.10** | Rust SDK alpha 版本 |
| **rust-v0.163.0-alpha.9** | Rust SDK alpha 版本 |
| **rust-v0.163.0-alpha.8** | Rust SDK alpha 版本 |

过去 24 小时内连续发布了 v0.163.0 Rust SDK 系列的三个 alpha 版本。未附带变更日志——用户可通过 [codex-release](https://github.com/openai/codex/releases) 订阅更新。

---

## 热门 Issue

### 1. Windows 任务中缺失 Computer Use 工具
**Issue [#49458](https://github.com/openai/codex/issues/49458)** — 79 条评论，26 👍  
*Bug • Windows OS • computer-use*

使用点号启动的本 Codex 任务缺少 Computer Use 工具，而普通本地会话则正常工作。这是今日最活跃的 issue，表明 Windows 用户依赖的自动化工作流存在重大回归。

### 2. Windows 浏览器工具初始化失败（MXC Launcher 错误）
**Issue [#53188](https://github.com/openai/codex/issues/53188)** — 19 条评论  
*Bug • Windows OS • browser*

Windows 浏览器工具初始化失败，显示 HRESULT 0x80070003，阻止了受影响的机器上的所有浏览器自动化操作。

### 3. 使用 ChatGPT 认证时 Sol Ultrafast 模型未出现在目录中
**Issue [#52839](https://github.com/openai/codex/issues/52839)** — 19 条评论  
*Bug • CLI • windows-os*

使用 ChatGPT 认证（非 API key）时，Sol Ultrafast 未出现在第一方模型目录中，限制了受影响用户的模型选择。

### 4. Windows Desktop 间歇性连接中断
**Issue [#52919](https://github.com/openai/codex/issues/52919)** — 14 条评论，2 👍  
*Bug • Windows OS • connectivity*

Windows 用户报告自 10 月 10 日起出现间歇性连接中断和重连失败，影响长时间运行的 Codex 会话。

### 5. TUI 队列管理增强
**Issue [#28864](https://github.com/openai/codex/issues/28864)** — 13 条评论，24 👍  
*增强功能 • TUI • CLI*

请求添加快捷键以编辑或移除 TUI 中排队的后续输入。社区对此表现出强烈兴趣（24 👍），希望改进队列管理。

### 6. VS Code 代理沙箱 Mountinfo 错误
**Issue [#47559](https://github.com/openai/codex/issues/47559)** — 12 条评论，6 👍 *（已关闭）*  
*Bug • VS Code 扩展 • sandbox*

命令运行前沙箱失败，提示"mountinfo path is not absolute"。现已关闭——可能已修复。

### 7. Windows MCP HTTP 响应解码失败
**Issue [#48504](https://github.com/openai/codex/issues/48504)** — 10 条评论  
*Bug • Windows OS • MCP*

Windows MCP HTTP 响应解码失败，显示"error decoding response body"，导致应用连接器不可用。

### 8. iOS 远程项目不同步
**Issue [#36454](https://github.com/openai/codex/issues/36454)** — 10 条评论  
*Bug • iOS • session*

iOS 远程项目列表与 Codex Desktop 不同步——项目未以 Desktop 作为数据源。

### 9. Windows Node_repl MCP 进程泄漏
**Issue [#35485](https://github.com/openai/codex/issues/35485)** — 9 条评论  
*Bug • Windows OS • MCP • performance*

Windows Desktop 上捆绑的 node_repl MCP 进程每线程泄漏一个，且直到 app-server 退出才会被回收，导致内存膨胀。

### 10. macOS 浏览器访问被会话级拒绝的源阻止
**Issue [#50789](https://github.com/openai/codex/issues/50789)** — 8 条评论  
*Bug • macOS • browser*

尽管设置了全局/站点级别的允许，浏览器访问仍被会话级拒绝的源阻止——权限未正确作用域化。

---

## 关键 PR 进展

| PR | 摘要 |
|----|------|
| [#53816](https://github.com/openai/codex/pull/53816) | **在交互式 CLI 恢复时拒绝 Guardian 审查线程** — 恢复前验证 app-server 元数据；如检测到 Guardian 审查则建议父会话。 |
| [#53811](https://github.com/openai/codex/pull/53811) | **支持从 Windows WinGet 包安装守护进程** — 修复布局不匹配（WinGet 将二进制文件放在包根目录而非 `bin/`）。 |
| [#53805](https://github.com/openai/codex/pull/53805) | **为工作区路由配置错误添加安全诊断** — 在错误消息中包含安全（非秘密）原因。 |
| [#53804](https://github.com/openai/codex/pull/53804) | **在归档/删除时保持 Agent 命令中心可见** — 将进度渲染为居中对话框，而非替换任务列表。 |
| [#53800](https://github.com/openai/codex/pull/53800) | **将后台压缩接入轮次生命周期** — 在 pre-turn、mid-turn 和 post-turn 检查点启动异步压缩。 |
| [#53797](https://github.com/openai/codex/pull/53797) | **审查上下文更改时刷新 Guardian 审查** — 上下文更改时触发新的评估而非中止。 |
| [#53790](https://github.com/openai/codex/pull/53790) | **修复 macOS 用户验证提示的取消** — 显式评估存储密钥的访问控制策略。 |
| [#53784](https://github.com/openai/codex/pull/53784) | **在实时请求中转发客户端语音会话 ID** — 添加 `voiceSessionId` 参数和请求头转发。 |
| [#53754](https://github.com/openai/codex/pull/53754) | **TUI 快捷键支持 Command/Super 修饰键** — 接受 `super` 修饰符；添加导航快捷键。 |
| [#53753](https://github.com/openai/codex/pull/53753) | **将即选即拷扩展到编辑器文本** — 应用于鼠标选择，包括 X11 PRIMARY 发布。 |

---

## 热门讨论

### 展示与分享

- **[Reset Alerts](https://github.com/openai/codex/discussions/53200)** — 面向美国/加拿大的短信/短信服务和 Telegram 机器人，用于 Codex 重置通知，带有追踪准时率的仪表板。*（1 条评论，2 👍）*

- **[tokenreceipt](https://github.com/openai/codex/discussions/53721)** — npm 工具，读取 Codex 会话日志并打印收据，显示 API 列表价格计算的成本。*（1 条评论，1 👍）*

- **[Secure Browser Use for Zen](https://github.com/openai/codex/discussions/53492)** — Firefox/Zen 浏览器兼容性层，用于 Codex 浏览器控制，已提交至 Mozilla 附加组件。*（1 条评论，1 👍）*

- **[cloud-alter-ego](https://github.com/openai/codex/discussions/52198)** — 面向 Codex 和 Claude Code 的持久化记忆系统，从跨会话的错误中学习。*（1 条评论，1 👍）*

- **[NOS](https://github.com/openai/codex/discussions/53552)** — 粘贴 HTML，屏幕上修改措辞，生成链接分享。*（1 条评论，1 👍）*

- **[swe-mux](https://github.com/openai/codex/discussions/53803)** — 运行多个 Codex 会话并显示实时状态；手机端也能用。*（0 条评论，1 👍）*

### 问答

- **[单个项目的网络访问](https://github.com/openai/codex/discussions/53199)** — 在自定义权限配置文件缺失时，如何仅允许一个本地 Codex Desktop 项目访问网络。*（1 条评论，1 👍）*

---

## 功能需求趋势

| 主题 | 证据 |
|------|------|
| **TUI 队列改进** | Issue #28864（24 👍）— 编辑/移除排队输入；Issue #51150 — 队列无法清除 |
| **跨平台浏览器一致性** | Issues #50789、#53188、#52811 — Windows/macOS 浏览器行为与网页端不同 |
| **Windows 上 MCP 稳定性** | 多条 issue（#48504、#35485、#50329）— 进程泄漏、HTTP 失败、响应解码 |
| **更好的连接诊断** | Issues #52919、#53203、#52406 — 连接中断需要更好的错误报告 |
| **上下文/压缩透明度** | Issue #43648 — 指示器与压缩后的 token 计数不一致 |

---

## 开发者痛点

1. **Windows 平台不稳定** — 浏览器工具、MCP 和连接性问题持续占据评论量榜首。多个 Windows 特有的 bug 影响核心功能。

2. **权限/授权混乱** — 用户在浏览器权限（会话级 vs. 全局）、BOM 编码文件的自动化发现以及网络访问配置文件方面遇到困难。

3. **上下文管理不透明** — Token 计数不一致和压缩失败让用户对实际上下文使用量感到困惑。

4. **CLI/IDE 集成差距** — TUI 引导失败、沙箱挂载问题和模型目录遗漏给专注 CLI 的开发者带来阻碍。

5. **功能发现** — 用户请求可能已存在的功能（模型覆盖、重命名选项），表明文档或 UI 存在可发现性不足的问题。

---

*数据来源：github.com/openai/codex — 2026-10-14*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the Gemini CLI Community Digest from English to Chinese. I need to:

1. Translate all the content to Simplified Chinese
2. Keep the Markdown structure exactly as-is (headings, tables, lists, bold, links, etc.)
3. Keep all technical identifiers, URLs, issue numbers, version tags, etc. in their original form
4. Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me go through the content and translate it while preserving the structure.

I'll translate:
- Headings
- Body text (using natural technical Chinese)
- Keep all tables, lists, code spans
- Keep URLs, issue numbers, version numbers, etc.

Let me do this translation carefully:</think>

# Gemini CLI 社区简报 — 2026-10-14

## 今日要闻

过去 24 小时内，Gemini CLI 团队发布了三个版本：**v0.65.0-preview.0**、**v0.65.65.0-nightly** 和 **v0.64.0**，修复了工作区安全、会话恢复和 UI 渲染等方面的关键问题。Issue 方面，P1 级别的 #22323（关于子代理 MAX_TURNS 后虚假报告成功的问题）引发了大量讨论，同时一个重要的 PR #29737 新增了对 Gemini 4 Argon 模型的支持。

---

## 版本发布

| 版本 | 概要 |
|---------|---------|
| **v0.65.0-preview.0** | 安全修复：在不受信任的文件夹中强制执行只读工作区设置（[#29583](https://github.com/google-gemini/gemini-cli/pull/29583)）。核心修复：恢复会话时防止重复工具响应轮次（[diegogodinezr](https://github.com/google-gemini/gemini-cli/pull/29583)）。 |
| **v0.65.0-nightly.20261013** | 扩展加载修复：当一个扩展在允许列表检查失败时，继续加载其他扩展（[#29720](https://github.com/google-gemini/gemini-cli/pull/29720)）。 |
| **v0.64.0** | 重构：实现 V1 到 V2 设置迁移（[#29450](https://github.com/google-gemini/gemini-cli/pull/29450)）。修复：桥接 `PromptResponse.usage` 并发送 usage_update 通知（[#29389](https://github.com/google-gemini/gemini-cli/pull/29389)）。 |

---

## 热门 Issue

| # | Issue | 优先级 | 重要性 | 反馈 |
|---|-------|----------|----------------|-----------|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子代理 MAX_TURNS 后恢复报告虚假的 GOAL 成功 | P1 | 子代理达到最大轮次但错误地报告为"成功"而非"中断"，掩盖了失败。13 条评论。 | 👍 2 |
| 2 | **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 零依赖操作系统沙箱与执行后意图路由 | P2 | 提议利用 Gemini 3 原生 bash 亲和力与沙箱，在不牺牲模型能力的情况下提升安全性。9 条评论。 | 👍 1 |
| 3 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通才代理无限挂起 | P1 | CLI 在求助于通才代理时无限挂起——阻塞基本工作流。8 条评论，8 👍。 | 👍 8 |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知文件读取/搜索/映射 | P2 | 评估 AST 感知工具是否能减少 token 浪费并提高精确度。7 条评论。 | 👍 1 |
| 5 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 没有充分使用自定义技能/子代理 | P2 | 模型即使在高度相关的情况下也未能主动调用自定义技能。7 条评论。 | — |
| 6 | **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — 浏览器代理忽略 settings.json 覆盖 | P2 | 浏览器代理绕过用户配置（如 maxTurns），破坏自定义能力。4 条评论。 | — |
| 7 | **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — 浏览器代理：自动会话接管与锁恢复 | P3 | 提议为持久化浏览器会话增强弹性。4 条评论。 | — |
| 8 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 浏览器子代理在 Wayland 上失败 | P1 | 阻塞 Linux/Wayland 用户使用浏览器自动化。4 条评论。 | 👍 1 |
| 9 | **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)** — 任务追踪器原生文件工具实验 | P3 | 探索用持久化基于文件的 CRUD 替换上下文内 todo 追踪。4 条评论。 | — |
| 10 | **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** — 无法识别符号链接的代理文件 | P2 | `~/.gemini/agents/` 中的符号链接被忽略，限制代理组织。4 条评论。 | — |

---

## 关键 PR 进展

| # | PR | 领域 | 描述 |
|---|-----|------|-------------|
| 1 | **[#29737](https://github.com/google-gemini/gemini-cli/pull/29737)** | 模型 | **新增 Gemini 4 Argon 模型支持** — 注册 `gemini-4-argon` 供选择。 |
| 2 | **[#29728](https://github.com/google-gemini/gemini-cli/pull/29728)** | 核心 | **防止快速 Ctrl+C 时的会话污染** — 修复双重中断触发 `/quit` 的竞态条件。 |
| 3 | **[#29725](https://github.com/google-gemini/gemini-cli/pull/29725)** | UI | **同步输出与隔离加载动画** — 消除 tmux 中的闪烁。 |
| 4 | **[#29742](https://github.com/google-gemini/gemini-cli/pull/29742)** | UI | **修复可滚动工具容器的右边框溢出** |
| 5 | **[#29695](https://github.com/google-gemini/gemini-cli/pull/29695)** | UI | **调试控制台高度计算与 terminalBuffer 闪烁修复** |
| 6 | **[#29736](https://github.com/google-gemini/gemini-cli/pull/29736)** | 扩展 | **重构工具调用分组** — 从调度器发出分组，移除 UI 前瞻。 |
| 7 | **[#29735](https://github.com/google-gemini/gemini-cli/pull/29735)** | 扩展 | **处理扩展 downloadFile 中 response/write 流错误** |
| 8 | **[#29722](https://github.com/google-gemini/gemini-cli/pull/29722)** | 核心 | **将纯空白 UTF-16/UTF-32 文件视为空** — 回归修复。 |
| 9 | **[#29718](https://github.com/google-gemini/gemini-cli/pull/29718)** | 核心 | **对无根 Podman 使用 `--userns=keep-id`** — 修复 EACCES 错误。 |
| 10 | **[#29703](https://github.com/google-gemini/gemini-cli/pull/29703)** | 核心 | **保持原子写入临时文件名在 NAME_MAX 内** — 防止 ENAMETOOLONG。 |

---

## 功能请求趋势

1. **AST 感知工具** — 对 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747) 的浓厚兴趣，探讨利用抽象语法树解析进行精准代码读取，减少 token 消耗。
2. **子代理自主性** — 多个 issue（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#20195](https://github.com/google-gemini/gemini-cli/issues/20195)）请求模型主动调用自定义技能和子代理。
3. **沙箱与安全** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 提出与模型 bash 亲和力对齐的零依赖操作系统沙箱方案。
4. **持久化任务追踪** — [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) 请求用基于文件的 CRUD 替换上下文内 todos。
5. **浏览器代理弹性** — [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) 要求更好的会话处理和配置覆盖支持。

---

## 开发者痛点

- **UI/终端不稳定**：渲染异常（边框溢出、tmux 闪烁）和终端调整大小处理反复出现。
- **子代理行为不透明**：调试报告缺少子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）；轨迹不易分享（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）。
- **配置摩擦**：某些代理忽略设置覆盖；环境变量加载顺序竞态（[#29678](https://github.com/google-gemini/gemini-cli/issues/29678)）。
- **模型能力差距**：模型未能充分利用技能、错误报告成功/失败状态、在求助于通才代理时挂起。
- **文件处理边界情况**：反向搜索中的 Unicode、纯空白非 UTF8 文件、临时文件名长度限制。

---

*简报基于 GitHub 数据生成 — 2026-10-14*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese. Let me analyze what I need to do:

1. Translate the entire digest while preserving all markdown structure exactly
2. Keep URLs, issue numbers, version tags, file paths, etc. as-is
3. Use natural technical Chinese - the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences around the whole output

Let me translate section by section:

**Title:** GitHub Copilot CLI 社区动态

**Date:** 2026年10月14日

**Section 1: Today's Highlights**
GitHub Copilot CLI 发布了 v1.0.98-1 版本，新增 Gemini 4 Argon 支持，并修复了多个会话处理问题，包括分屏切换后的 MCP 状态同步以及会话恢复时对待放弃的 pending-permission 任务的处理。该版本还解决了 BYOK 自定义提供商强制使用贪婪采样（temperature=0）导致推理模型退化这一长期问题。社区对会话管理和跨应用同步功能的关注度仍然很高。

**Section 2: Releases**
I need to keep the table format with version, type, and key changes. Let me translate the content.

**Section 3: Hot Issues**
Translate each issue title and description, keeping issue numbers and links intact.

**Section 4: Key PR Progress**
Translate the note about no PRs.

**Section 5: Feature Request Trends**
Translate the table and descriptions.

**Section 6: Developer Pain Points**
Translate each pain point.

**Footer:**
Translate the note about data source and period.

Let me go through this carefully and produce a natural, technical Chinese translation.</think>

# GitHub Copilot CLI 社区动态

**日期：** 2026年10月14日

---

## 1. 今日要闻

GitHub Copilot CLI 发布了 **v1.0.98-1** 版本，新增 Gemini 4 Argon 支持，并修复了重要的会话处理问题，包括分屏视图切换后 MCP 状态和 /mcp 命令的同步，以及会话恢复时对已放弃的 pending-permission 任务的正确处理。该版本还修复了字符输入的正常响应问题。自定义 BYOK 提供商强制使用贪婪采样（temperature=0）的问题仍然存在，这会导致推理模型退化，社区对此持续关注。会话管理和跨应用同步功能也是热点话题。

---

## 2. 版本发布

| 版本 | 类型 | 重要变更 |
|---------|------|-------------|
| **v1.0.98-1** | 当前版 | ✅ 新增 Gemini 4 Argon 支持。修复了分屏视图会话切换后 MCP 状态和 /mcp 命令保持同步的问题。修复了会话恢复时正确处理已放弃的 pending-permission 任务的问题。修复了普通字符输入的响应问题。 |
| **v1.0.98-0** | 上一版 | 常规修复和变更 |
| **v1.0.97** | 稳定版 | 新增自定义代理的声明式钩子（agent-scoped declarative hooks）。远程插件市场和插件获取在 HTTPS 认证失败后支持使用已登录的 GitHub token 重试一次。在 TLS intercepting 代理后 stream 响应时 now complete when close_notify is omitted。修复了 GitHub SCP remote 的解析问题。 |
| **v1.0.97-3** | 补丁版 | 修复了远程插件市场重试逻辑和 TLS 代理问题。修复了带绝对路径的 GitHub SCP remote 解析问题。 |

---

## 3. 热门 Issue

### 🔴 紧急问题

1. **[#5115] ACP 模式下 /rename 报告成功但实际未重命名会话**
   - **问题原因：** 在 ACP 模式（`copilot --acp --stdio`）下，`/rename` 命令虚假报告成功，却未实际重命名会话。这破坏了依赖会话命名的自动化工作流。
   - **状态：** Open | 5 条评论 | [查看 Issue](https://github.com/github/copilot-cli/issues/5115)

2. **[#5134] Windows：MCP OAuth 初始化失控导致不断打开浏览器会话**
   - **问题原因：** 在 Windows 上以交互方式运行 `copilot` 会导致 OAuth 浏览器会话无限循环打开，正常启动和认证完全无法进行。
   - **状态：** Open（待分类） | [查看 Issue](https://github.com/github/copilot-cli/issues/5134)

3. **[#5123] 终端安全拒绝导致会话恢复陷入死胡同**
   - **问题原因：** Windows 重启后，在命名终端标签中尝试恢复现有会话会导致无休止的拒绝循环，造成严重的恢复障碍。
   - **状态：** Open | [查看 Issue](https://github.com/github/copilot-cli/issues/5123)

### 🟡 高优先级

4. **[#4950] BYOK 自定义提供商：CLI 强制贪婪采样 (temperature=0)，导致推理模型退化**
   - **问题原因：** 自 CLI 1.0.81 起，所有 BYOK/OpenAI 兼容请求都使用 `temperature: 0`、`top_p: 0.95` 发送，导致小型推理模型（如通过 vLLM 的 qwen-27b）退化并在上下文溢出时挂起。1.0.80 版本正确地未发送任何采样参数。
   - **状态：** Open（待分类） | 3 条评论 | [查看 Issue](https://github.com/github/copilot-cli/issues/4950)

5. **[#5133] ACP 模式下 includeCoAuthoredBy: false 被忽略**
   - **问题原因：** `includeCoAuthoredBy: false` 设置在 ACP 模式下被忽略，导致提交仍包含 `Co-authored-by: Copilot`  trailers——这涉及隐私/合规问题。
   - **状态：** Open（待分类） | [查看 Issue](https://github.com/github/copilot-cli/issues/5133)

6. **[#4931] 云代理：内置 Playwright MCP 会话在首次工具调用时关闭**
   - **问题原因：** 在 GHEC 数据驻留租户的 Copilot 云代理会话中，每次调用都失败，因为 Playwright MCP 会话在首次工具调用时关闭，恢复时错误地报告需要浏览器 OAuth。
   - **状态：** Open（待分类） | 2 条评论 | [查看 Issue](https://github.com/github/copilot-cli/issues/4931)

### 🟢 功能需求与改进

7. **[#4082] Copilot CLI 与 Copilot Desktop App 之间的跨应用会话同步**
   - **问题原因：** 在 macOS 上同时运行 CLI 和 Desktop 应用的用户无法在两者之间共享会话。这是一个高需求功能（13 个 👍），旨在实现跨平台的统一工作流。
   - **状态：** Open | 3 条评论, 13 个 👍 | [查看 Issue](https://github.com/github/copilot-cli/issues/4082)

8. **[#4358] BYOK：从提供商的 /models 端点填充 /model 选择器**
   - **问题原因：** 使用自定义提供商时，只能配置一个模型。用户无法浏览或切换模型，必须退出并重新配置——严重限制了灵活性。
   - **状态：** Open（待分类） | 2 条评论, 9 个 👍 | [查看 Issue](https://github.com/github/copilot-cli/issues/4358)

9. **[#1724] 显示当前 TODO 状态**
   - **问题原因：** TODO 列表在内部管理但未向用户展示。这是一个需求功能（12 个 👍），用于匹配 opencode 等竞品的用户体验。
   - **状态：** Open | 2 条评论, 12 个 👍 | [查看 Issue](https://github.com/github/copilot-cli/issues/1724)

10. **[#5136] 支持从 Copilot CLI 向 GitHub Issue 附加 PDF 文件**
    - **问题原因：** 用户希望能够直接从 CLI 上传并附加 PDF 文档到 GitHub Issue，匹配浏览器编辑器的功能。
    - **状态：** Closed | 1 条评论 | [查看 Issue](https://github.com/github/copilot-cli/issues/5136)

---

## 4. 重要 PR 进展

过去 24 小时内没有 Pull Requests 更新。

---

## 5. 功能需求趋势

根据 Issue 态势，以下是需求最强烈的功能方向：

| 趋势 | 描述 | 相关 Issue |
|-------|-------------|----------------|
| **BYOK/自定义提供商灵活性** | 用户希望自定义 OpenAI 兼容提供商能够完整浏览、切换模型，并正确配置采样参数 | #4950, #4358, #5126, #5127 |
| **跨应用会话同步** | CLI 与 Desktop App 之间统一会话状态 | #4082 |
| **增强的会话管理** | 从 UI 重命名会话、更好的会话恢复、TODO 状态可见性 | #5115, #1724, #5128, #5123 |
| **Windows/平台改进** | 系统级企业安装程序、通知徽章修复、OAuth 处理 | #4381, #5129, #5134 |
| **MCP 稳定性** | 可靠的 MCP 服务器连接、MCP 服务器的工具选择 | #4931, #3113 |

---

## 6. 开发者痛点

社区对以下反复出现的问题表示不满：

1. **BYOK 采样被破坏：** 强制 `temperature=0` 会破坏推理模型；用户无法为自定义提供商覆盖此设置。

2. **会话恢复失败：** 终端安全拒绝和权限问题会在重启后阻止平滑的会话恢复。

3. **ACP 模式不一致：** 核心设置如 `includeCoAuthoredBy: false` 和 `/rename` 在 ACP（`--acp`）模式与标准模式下的行为不同。

4. **Windows OAuth 循环：** 重复的浏览器认证会话阻止了 Windows 上 CLI 的正常启动。

5. **插件上下文丢失：** 当多个插件提供 `additionalContext` 时，只有最后一个插件的上下文能到达模型——其他插件的上下文被静默丢弃。

6. **代理选择竞态条件：** 通过 `--agent` 指定的自定义代理在启动约 1 秒后被静默取消选择，原因是与登录/MCP 加载的竞态。

---

*数据来源：GitHub copilot-cli 仓库 • 周期：2026年10月13日至2026年10月14日*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest from English to Chinese. I need to translate the content while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, register of Chinese developer newsletter

Let me translate this carefully, maintaining all the formatting and technical terms.

I'll go through each section:
- Title and date
- Today's Highlights
- Releases
- Hot Issues table
- Key PR Progress table
- Feature Request Trends
- Developer Pain Points
- Footer with attribution

Let me translate now:</think>

# OpenCode 社区简报 — 2026-10-14

## 今日要闻

OpenCode 社区的关注重点是 V2 稳定性和迁移问题。最活跃的讨论集中在免费模型的使用限额（#15585，56 条评论）。多个 PR 正在解决会话管理问题，包括子会话环境继承（#55257）和网络重连后"会话位置不可用"的误报（#55258）。Figma MCP 服务器功能请求（#54805）已关闭，正在进行集成工作。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门问题

| 问题 | 摘要 | 重要性 | 点赞 |
|-----|------|--------|-----|
| [#15585](https://github.com/anomalyco/opencode/issues/15585) | 免费模型显示"免费额度已用尽"错误 | 用户报告所有 3 个免费模型都出现额度已用尽的错误，尽管看起来没有超出配额。56 条评论表明免费套餐的限额存在广泛误解。 | 👍 17 |
| [#42421](https://github.com/anomalyco/opencode/issues/42421) | **[V2] 特性：添加 TODO 支持** | V1 的 `todowrite`/`todoread` 工具在 V2 中缺失，破坏了原生的任务追踪工作流。活跃的功能请求，聚焦 V2。 | 👍 5 |
| [#30158](https://github.com/anomalyco/opencode/issues/30158) | 自 v1.15.12 起网页 UI 中终端按钮消失 | 影响网页 UI 用户的回归问题——终端不可用。回退到 v1.15.11 可恢复正常功能。 | 👍 14 |
| [#34644](https://github.com/anomalyco/opencode/issues/34644) | GitHub Copilot Provider 未注册学生订阅 | Copilot 学生版（Auto-only 模式）用户无法使用其订阅。高关注度（22 👍）来自学生群体。 | 👍 22 |
| [#51949](https://github.com/anomalyco/opencode/issues/51949) | 自动压缩后 Agent 停止使用顶层工具 | 严重 bug：上下文压缩后，Agent 将所有工作路由到 `execute` → `tools.shell`，导致每个会话都失败。 | 👍 0 |
| [#49827](https://github.com/anomalyco/opencode/issues/49827) | V1→V2 升级后非 git 会话被隐藏 | 迁移痛点：来自非 git 目录的会话在 V2 TUI 会话选择器中不可见。 | 👍 1 |
| [#51109](https://github.com/anomalyco/opencode/issues/51109) | 每个 Agent 可配置的 prompt-cache TTL | 成本优化：当前 5 分钟默认值为长期会话带来成本压力。需要按供应商/型号配置 TTL。 | 👍 0 |
| [#54805](https://github.com/anomalyco/opencode/issues/54805) | 将 OpenCode 添加为 Figma MCP 服务器客户端 | 功能请求：连接到 `https://mcp.figma.com/mcp` 以实现 Figma 集成。 | 👍 0 |
| [#49742](https://github.com/anomalyco/opencode/issues/49742) | CLI v2.0.8 缺少消息时间戳选项 | 可用性回归：V1 的 Ctrl+P 时间戳切换在 V2 中缺失。 | 👍 3 |
| [#55189](https://github.com/anomalyco/opencode/issues/55189) | Windows 上桌面集成终端失败（找不到 opencode-pty） | Windows 用户无法使用集成终端——帮助程序二进制文件返回 503 错误。 | 👍 0 |

---

## 关键 PR 进展

| PR | 摘要 | 类型 |
|----|------|------|
| [#55274](https://github.com/anomalyco/opencode/pull/55274) | 为 OpenCode 添加 SerpApi 网页搜索 | 新功能 |
| [#55258](https://github.com/anomalyco/opencode/pull/55258) | 修复 TUI 在重连后位置同步瞬时失败时的容错能力 | Bug 修复 |
| [#55257](https://github.com/anomalyco/opencode/pull/55257) | 子会话继承父会话的环境变量 | Bug 修复 |
| [#55267](https://github.com/anomalyco/opencode/pull/55267) | 托管配置拥有最高优先级 | Bug 修复 |
| [#55261](https://github.com/anomalyco/opencode/pull/55261) | 添加 prompt 历史范围设置（`global` vs `session`） | 新功能 |
| [#55265](https://github.com/anomalyco/opencode/pull/55265) | 将 base64 FileContent 字符串替换为 Uint8Array | 重构 |
| [#54930](https://github.com/anomalyco/opencode/pull/54930) | 支持插件声明权限 | 新功能 |
| [#54023](https://github.com/anomalyco/opencode/pull/54023) | 跨位置协调凭证刷新 | 核心修复 |
| [#55270](https://github.com/anomalyco/opencode/pull/55270) | 修复 CI：使用 OpenCode 应用令牌推送每日统计 | CI 修复 |
| [#55269](https://github.com/anomalyco/opencode/pull/55269) | 解决 Figma 插件的 peer dependency（已关闭） | 构建修复 |

---

## 功能请求趋势

根据问题积压，最受关注的方向是：

1. **供应商/模型扩展** — 添加 Google Vertex OpenAI 兼容模型、Bedrock 区域特定过滤、Figma MCP 集成、SerpApi 网页搜索的请求
2. **V2 与 V1 对齐** — TODO 支持、消息时间戳、托管配置加载、会话历史范围
3. **会话稳定性** — 更好地处理网络中断、子会话继承、长时间运行任务的进程注册
4. **配置灵活性** — 可配置的 prompt-cache TTL、指数退避策略、Windows 上的 shell 选择
5. **插件系统增强** — 权限声明 API、AI-SDK 路径的 HTTP 请求钩子、并行工具调用的错误处理

---

## 开发者痛点

- **免费套餐困惑**：用户对实际免费模型限额感到困惑，遇到神秘的"额度已用尽"错误
- **V2 迁移摩擦**：非 git 会话丢失、托管配置未加载、终端按钮回归
- **Windows 集成问题**：忽略 shell 配置、PTY 帮助程序不在 PATH 中、PowerShell 版本不匹配
- **网络弹性**：中断后会话失败、WebSocket 错误、误报"会话位置不可用"
- **多用户/WSL 冲突**：硬编码的端口 49374 阻止共享环回上的第二个客户端

---

*数据来源：GitHub — anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Simplified Chinese, following the detailed translation rules provided. Let me analyze the content and translate it while preserving the structure and using natural technical Chinese.

Key points to remember:
1. Output ONLY the translation
2. No preamble, no explanation, no markdown fences
3. Preserve Markdown structure exactly
4. Keep URLs, numbers, code, IDs as-is
5. Use natural technical Chinese register
6. Use Chinese punctuation (，。：；""）
7. Translate headings
8. Be careful with tables - maintain alignment

Let me translate section by section:

## Today's Highlights -> 今日要闻

## Releases -> 版本更新

## Hot Issues -> 热门 issue

## Key PR Progress -> 关键 PR 进展

## Feature Request Trends -> 功能需求趋势

## Developer Pain Points -> 开发者痛点

Now let me translate the content:

---

# π 社区简报 — 2026-10-14

## 今日要闻

Pi 开发活动保持高度活跃，今天合并了多个关键修复，尤其是 Gemini 4 thinking level 支持和会话工具恢复相关的内容。社区正在积极讨论全屏 TUI 模式下 Home/End 键行为的变化（25 条评论），同时影响 ChatGPT 扩展的一个重要 OAuth token 持久化 bug 仍未解决。NVIDIA provider 准备切换到新的 Nemotron 3.5 Super VL 模型，等待公开发布。

## 版本更新

过去 24 小时无新版本发布。

## 热门 Issue

### 1. 全屏模式下 Home/End 键行为
**#10314** — 25 条评论 | 👍 5  
*状态：已关闭*  
讨论 Home/End 键是否应保留传统的行编辑行为（光标移至行首/行尾），还是采用全屏滚动行为（内容顶部/底部）。


这是 TUI 用户面临的关键交互权衡。链接点击功能在切换到备用终端模式后失效，对依赖点击源代码链接的用户造成了影响。

第二个问题涉及 OAuth 登录流程——保存的凭证中缺少 ID token，导致扩展无法访问用户账户身份。由于 token 刷新采用相同的有缺陷转换方式，这是一个持久的认证问题。用户呼吁在 UI 中增加对 OpenRouter provider 模型别名的配置支持，目前只能通过手动编辑 `models.json` 实现。

自适应思考 Anthropic 模型的压缩摘要会继承会话的思考级别，但使用固定的约 13k token 预算，导致高思考级别设置下出现确定性输出上限问题。

硬件光标在鼠标选择时位置计算错误，导致跳转到错误的列。当 `showHardwareCursor: true` 时会出现这个问题。Radius 相关的 /share 行为变化需要增加 `PI_SHARE_USE_RADIUS` 环境变量来控制。用户希望在 GPT-6 上通过 `configuration_update` 而非请求级别的变化来发送思考工作调整，以保持缓存连续性。

提示模板中的空引用参数会被静默丢弃，导致后续位置值发生偏移。多项目主机在每次新会话时重新导入所有扩展，因为缓存是以单个全局 cwd 槽位作为键，任何 cwd 不同的重新加载都会清除缓存。

关键 PR 进展包括修复模型引用以遵守凭证选择策略，以及 NVIDIA 切换到 Nemotron 3.5 Super VL 的更新。

Gemini 4 模型的 thinkingBudget 现已正确使用离散的 thinkingLevel 控制，动态激活的工具在会话恢复时也能正确保留。

GPT-6 的工作调整改为通过 configuration_update 发送以保持缓存和 WebSocket 连续性。鼠标滚轮事件在 rxvt-unicode 中的重复问题已修复，NVIDIA NIM 模型的本地 $ref 模式也已内联以确保工具验证正常工作。

图像在错误工具结果中的显示问题已解决，OAuth 设备轮询的容错机制也得到了调整。

在功能需求方面，用户更关注 Provider 配置界面的改进、思考控制的精细化以及跨会话的工具状态保持。开发者面临的主要挑战包括会话状态在工具动态激活时的丢失问题。

此外，推理工作的缓存碎片化、频繁的 Provider 和 API 破坏性变更、终端兼容性，以及 Tool 验证失败都加剧了开发成本。</think>

# π 社区简报 — 2026-10-14

## 今日要闻

Pi 开发活动保持高度活跃，今天合并了多个关键修复，尤其是 Gemini 4 thinking level 支持和会话工具恢复相关的内容。社区正在积极讨论全屏 TUI 模式下 Home/End 键行为的变化（25 条评论），同时影响 ChatGPT 扩展的一个重要 OAuth token 持久化 bug 仍未解决。NVIDIA provider 准备切换到新的 Nemotron 3.5 Super VL 模型，等待公开发布。

---

## 版本更新

过去 24 小时无新版本发布。

---

## 热门 Issue

### 1. 全屏模式下 Home/End 键行为

**#10314** — 25 条评论 | 👍 5  
*状态：已关闭*  
讨论 Home/End 键是否应保留传统的行编辑行为（光标移至行首/行尾），还是采用全屏滚动行为（内容顶部/底部）。这是 TUI 用户面临的关键交互权衡。
[Link](https://github.com/earendil-works/pi/issues/10314)

### 2. 切换终端模式后链接无法点击

**#4180** — 19 条评论 | 👍 0  
*状态：已关闭*  
切换到备用终端模式后，超链接变得无法点击。影响依赖点击 agent 提供的源代码链接的用户。
[Link](https://github.com/earendil-works/pi/issues/4180)

### 3. ChatGPT OAuth ID Token 未持久化

**#10300** — 15 条评论 | 👍 0  
*状态：开放中* — *P0 可能*  
OAuth 登录流程遗漏了保存凭证中的 ID token，导致扩展无法访问用户账户身份。Token 刷新使用相同的有缺陷转换方式，使得这成为一个持久的认证问题。
[Link](https://github.com/earendil-works/pi/issues/10300)

### 4. Provider 扩展支持模型别名

**#5916** — 14 条评论 | 👍 0  
*状态：开放中* — *进行中*  
请求 UI 支持配置 OpenRouter provider 的模型别名，目前只能通过手动编辑 `models.json` 实现。社区成员已构建可用的覆盖配置方案。
[Link](https://github.com/earendil-works/pi/issues/5916)

### 5. 压缩摘要继承会话 Thinking Level

**#9075** — 10 条评论 | 👍 4  
*状态：开放中*  
在自适应思考的 Anthropic 模型上，压缩摘要以会话的 thinking level 运行，但使用固定的约 13k token 预算，导致高思考级别设置下出现确定性输出上限问题。
[Link](https://github.com/earendil-works/pi/issues/9075)

### 6. 鼠标选择时光标跳动

**#10862** — 7 条评论 | 👍 0  
*状态：已关闭*  
设置 `showHardwareCursor: true` 时，鼠标选择时光标跳转到错误的列，原因是 `extractCursorPosition()` 中的计算错误。
[Link](https://github.com/earendil-works/pi/issues/10862)

### 7. Radius 改变 /share 行为

**#10870** — 7 条评论 | 👍 0  
*状态：已关闭*  
提议添加 `PI_SHARE_USE_RADIUS` 环境变量，使 Radius 依赖的分享功能可配置，允许用户回退到基于 gist 的分享方式。
[Link](https://github.com/earendil-works/pi/issues/10870)

### 8. GPT-6 保留缓存的 Reasoning Effort 变更

**#10853** — 5 条评论 | 👍 0  
*状态：开放中* — *P0*  
请求将 reasoning effort 变更作为 `configuration_update` 输入项发送，而非请求级别变更，以在 GPT-6 上保持缓存连续性，避免 Codex 上丢弃 WebSocket 继续。
[Link](https://github.com/earendil-works/pi/issues/10853)

### 9. 提示模板丢弃空引用参数

**#10867** — 2 条评论 | 👍 0  
*状态：开放中*  
提示模板中的空引用参数被静默丢弃，导致后续位置值发生偏移，改变了发送给模型的提示内容。
[Link](https://github.com/earendil-works/pi/issues/10867)

### 10. CWD 切换时扩展工厂缓存被清空

**#10911** — 1 条评论 | 👍 0  
*状态：开放中*  
多项目主机在每次新会话时重新导入所有扩展，因为缓存以单个全局 cwd 槽位作为键，任何 cwd 不同的重新加载都会清空所有内容。
[Link](https://github.com/earendil-works/pi/issues/10911)

---

## 关键 PR 进展

### 1. 通过 Provider 选择策略修复模型引用

**#10913** — 开放中  
*作者：christianklotz*  
解决 #10160 — 修复 `--model provider/id` 在指定 provider 没有模型但 gateway 暴露该模型时正确遵循凭证，而非按目录顺序默认使用第一个 gateway。
[Link](https://github.com/earendil-works/pi/pull/10913)

### 2. NVIDIA 默认切换到 Nemotron 3.5 Super VL

**#10910** — 开放中（草稿）  
*作者：cv*  
将 NVIDIA provider 的默认模型从 Nemotron 3 Ultra 550B 切换到 Nemotron 3.5 Super VL 120B。与 NVIDIA 合作开发；等待模型公开发布。
[Link](https://github.com/earendil-works/pi/pull/10910)

### 3. Gemini 4 模型使用 Thinking Levels

**#10902** — 已关闭  
*作者：lfayoux*  
修复 Gemini 4 模型因 400 错误拒绝 `thinkingBudget` 的问题 — 现在根据模型要求正确使用离散的 `thinkingLevel` 控制。
[Link](https://github.com/earendil-works/pi/pull/10902)

### 4. 会话恢复时恢复激活的工具

**#10887** — 已关闭  
*作者：davidbrai*  
修复 #10785 — 恢复的会话现在正确恢复会话中动态激活的工具（记录在 transcript 中），并将对激活工具的修改（`--tools +name/-name`）应用到恢复的负载中。
[Link](https://github.com/earendil-works/pi/pull/10887)

### 5. GPT-6 Effort 变更作为 configuration_update 发送

**#10886** — 已关闭  
*作者：dleviminzi*  
关闭 #10853 — 将首次 reasoning effort 保留在请求级别，后续变更作为 `configuration_update` 输入项发送，以保持缓存和 WebSocket 连续性。
[Link](https://github.com/earendil-works/pi/pull/10886)

### 6. 修复 rxvt-unicode 上鼠标滚轮重复

**#10872** — 已关闭  
*作者：sim-**  
修复 #10824 — rxvt-unicode 上鼠标滚轮事件重复；现在行为与其他 TUI 一致。
[Link](https://github.com/earendil-works/pi/pull/10872)

### 7. 为 NVIDIA NIM 内联 $ref 工具模式

**#10521** — 开放中  
*作者：cv*  
修复 #10270 — 为 NVIDIA NIM 模型（Nemotron 3.5 Super VL 预览版、Qwen 3.8 Flash Next）内联本地 `$ref` 模式，使工具验证正常工作。
[Link](https://github.com/earendil-works/pi/pull/10521)

### 8. 从 Anthropic 错误工具结果中移除图片

**#10795** — 已关闭  
*作者：aliou*  
修复 #10794 — 防止错误工具结果中的图片导致会话显示问题。
[Link](https://github.com/earendil-works/pi/pull/10795)

### 9. 在 --export HTML 中包含系统提示

**#10718** — 开放中  
*作者：yzhg1983*  
CLI `--export` 现在在 HTML 输出中包含记录的系统提示，与 `/export` 行为一致。
[Link](https://github.com/earendil-works/pi/pull/10718)

### 10. 调整 OAuth 设备轮询容错

**#10694** — 开放中  
*作者：petrroll*  
解决 WSL/Ubuntu 时钟漂移导致 OAuth 设备流失败的问题，以略快于 "slow_down" 阈值的频率轮询，导致持续失败。
[Link](https://github.com/earendil-works/pi/pull/10694)

---

## 功能需求趋势

根据 issue 分析，以下方向需求最多：

| 主题 | 描述 |
|-------|-------------|
| **增强 Provider 配置** | 更好的 UI 用于 provider/模型别名管理（如 OpenRouter 覆盖）、系统级配置优先级（#10895） |
| **细粒度 Thinking 控制** | 对每个模型的 thinking budget/level 精细控制，尤其是 Gemini 4、GPT 6 和自适应思考模型 |
| **会话连续性** | 恢复时工具恢复、跨 effort 变更的缓存保持、扩展工厂缓存改进 |
| **终端/显示改进** | Home/End 行为标准化、硬件光标处理、tmux 内联图片支持 |
| **OAuth/认证优化** | ID token 持久化、WSL 上设备流可靠性、MCP 正确的用户代理识别 |

---

## 开发者痛点

1. **会话状态丢失** — 会话中动态激活的工具在恢复时丢失；多项目环境下任何 cwd 变更都会清空扩展缓存
2. **缓存碎片化** — Reasoning effort 变更使 prompt 缓存失效；自适应模型变 thinking budget 没有好的解决方案
3. **Provider/API 破坏性变更** — Gemini 4 放弃 `thinkingBudget`、Llama.cpp 升级后从 providers 消失、SDK 版本不匹配
4. **终端兼容性** — Rxvt-unicode 滚轮事件、tmux 内联图片、鼠标选择时的硬件光标定位都造成摩擦
5. **工具验证失败** — NVIDIA NIM 模型只返回 `$ref`-only 模式、OpenRouter 的 GLM 空工具调用导致会话永久卡住

---

*数据来源：github.com/earendil-works/pi | 日期：2026-10-14*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. I need to:

1. Translate the text content while preserving all Markdown structure
2. Keep URLs, code references, issue numbers, project names, etc. as-is
3. Use natural technical Chinese appropriate for a developer newsletter

Let me go through and translate this carefully, maintaining the format exactly.

Key things to translate:
- Headings
- Body text
- Table content
- List items

Things to keep as-is:
- URLs
- Issue numbers (#14114, etc.)
- Project names (qwen-code, vLLM, SGLang, MCP, ACP, etc.)
- Code identifiers
- Version numbers
- Tables structure including the |---|---| format
- Bold/italic formatting

Let me do the translation:</think>

# Qwen Code 社区动态 — 2026-10-14

## 今日要闻

Qwen Code 项目继续快速迭代，发布了新的预览版 **v0.25.2-preview.0**，并在 managed-agent 运行时方面持续改进。当前重点关注影响会话可靠性和 ACP 模式下 MCP 工具发现的 **P1 级别 bug**，同时推进持久化层整合和 Java SDK 增强工作。团队还在解决 vLLM 和 SGLang 后端的兼容性问题。

---

## 版本发布

| 版本 | 类型 | 摘要 |
|------|------|------|
| [v0.25.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-preview.0) | 预览版 | 包含 managed-agent 改进的最新预览版 |
| [v0.25.1-nightly.20261013.6212189f1f](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261013.6212189f1f) | 每夜版 | R2 审查后针对连接器和代理器鲁棒性的修复 |

---

## 热点问题

### 关键优先级 (P1)

1. **[#14114](https://github.com/QwenLM/qwen-code/issues/14114)** — ACP 会话从未宣布在会话启动后发现的 MCP 工具  
   *ACP 模式无法发现 `session/new` 中传递的 MCP 工具——它们永远不会出现在模型的工具列表或延迟工具提醒中，导致 ACP 模式下的 MCP 服务器集成失效。*

2. **[#14116](https://github.com/QwenLM/qwen-code/issues/14116)** — 在 Harness 终止前提交的唤醒输入不会运行，直到无关会话被加载  
   *会话的唤醒输入仅在加载到 Hosted Harness 时运行；已提交的唤醒输入处于休眠状态，直到无关操作触发该会话，导致通知丢失。*

### 高优先级 (P2)

3. **[#14115](https://github.com/QwenLM/qwen-code/issues/14115)** — 无 Body 的 provider 400 错误无法诊断  
   *来自严格 OpenAI 兼容后端的 vLLM 风格 400 错误不显示 `errorResponse`、`headers` 或 `x-request-id`，导致调试无法进行。需要在 CLI 和 `OPENAI_ERROR` 日志中暴露 APIError 详情。*

4. **[#14112](https://github.com/QwenLM/qwen-code/issues/14112)** — 由 vLLM 支持的 OpenAI 兼容 provider：每次请求都返回 400  
   *vLLM 支持的 provider 由于无参数的 tools 被序列化为没有 "parameters" 字段，以及不支持的 `tool_choice: "required"`，导致每次请求都失败。影响 DeepSeek 和 GLM 模型集成。*

5. **[#14062](https://github.com/QwenLM/qwen-code/issues/14062)** — Hosted send_message 溢出时直接抛错而非优雅拒绝  
   *一个通过本地大小检查的 hosted `send_message` 在 encode 时仍可能因 `encodeToolInput` 溢出而失败，导致整个轮次崩溃而非返回模型可处理的拒绝响应。*

6. **[#14110](https://github.com/QwenLM/qwen-code/issues/14110)** — 构建失败：packages/cli 使用了 ink@7.0.3 未导出的 API  
   *packages/cli 中有 51 个 TypeScript 错误，原因是固定版本 ink@7.0.3 缺少导出（`ReadonlyFrame` 等），使用冻结的 lockfile 时构建阻塞。*

7. **[#14097](https://github.com/QwenLM/qwen-code/issues/14097)** — SGLang 上下文溢出错误被忽略或丢失 token 计数  
   *SGLang 的溢出错误消息未被 tokenizer 识别，导致会话卡在不断失败的状态，无法进行响应式压缩或正确的错误处理。*

8. **[#14096](https://github.com/QwenLM/qwen-code/issues/14096)** — vLLM 上下文溢出错误未被识别，响应式压缩从不运行  
   *vLLM 的 400 错误（请求过大）未被识别，因此 `llm-chat` 不会触发响应式压缩，会话永远无法恢复。*

### 中等优先级 (P3)

9. **[#13787](https://github.com/QwenLM/qwen-code/issues/13787)** — XML 恢复在大规模多调用响应中重复前缀扫描  
   *XML 工具调用恢复因重复前缀扫描而变得越来越慢，确认在主分支和 PR #13579 上都存在性能回归。*

10. **[#14075](https://github.com/QwenLM/qwen-code/issues/14075)** — 静态模式 word-wrap 在终端宽度处孤立 1-2 个字符  
    *在禁用虚拟化历史的模式下（`ui.useTerminalBuffer: false`），自动换行在满终端宽度时失效，留下 1-2 个字符孤立在下一行。*

---

## 关键 PR 进展

| PR | 作者 | 描述 |
|----|------|------|
| [#14123](https://github.com/QwenLM/qwen-code/pull/14123) | wenshao | **fix(managed-agent): restart-proof held-Runtime drain** — 确保托管 Runtime 的 drain 义务在 Harness 重启/接管后仍然有效 |
| [#13996](https://github.com/QwenLM/qwen-code/pull/13996) | doudouOUC | **feat(sdk-java): add private CSI Session and native SQL authority** — 提取完整的私有 CSI Session 权限，支持显式创建和持久化请求固定 |
| [#13642](https://github.com/QwenLM/qwen-code/pull/13642) | doudouOUC | **feat(runtime-broker): bounded JDBC history retention** — 为已回收绑定的旧终端 Runtime Broker 历史添加可选清理 |
| [#14073](https://github.com/QwenLM/qwen-code/pull/14073) | yiliang114 | **feat(providers): add QwenCloud as first /auth entry** — 在 ModelStudio 之前添加 QwenCloud 作为新的顶级认证入口 |
| [#11562](https://github.com/QwenLM/qwen-code/pull/11562) | qwen-code-dev-bot | **fix(cli): keep one-shot system reminders out of user's own message** — 防止提醒文本出现在用户对话记录中 |
| [#13816](https://github.com/QwenLM/qwen-code/pull/13816) | wenshao | **fix(managed-agent): hand back Workspace mount on recovery-blocked tool turn** — 为托管 Workspace Sessions 添加代理内部挂载释放端点 |
| [#14021](https://github.com/QwenLM/qwen-code/pull/14021) | yiliang114 | **fix: settle never-started background dispatches in live turn** — 处理从未创建发布行的后台 Shell 分发 |
| [#14035](https://github.com/QwenLM/qwen-code/pull/14035) | hahahahahayesyeseys | **fix(web-shell): isolate mixed-direction Markdown text** — 为双向文本隔离添加自动基础方向检测 |
| [#14069](https://github.com/QwenLM/qwen-code/pull/14069) | doudouOUC | **feat(managed-agent): consolidate to 32-table baseline** — 将持久化从 63 个表缩减为共享的 32 个 MySQL 8.4 基线表 |
| [#14120](https://github.com/QwenLM/qwen-code/pull/14120) | wenshao | **test(managed-agent): add FG8e/FG8f monitor_run and background-shell fault gates** — 托管能力的多进程集成测试 |

---

## 功能请求趋势

根据 issue 标签和路线图，以下功能方向正在获得关注：

1. **多代理会话管理** — 多个问题针对并发会话处理、子会话恢复和协调器逻辑 (#14070, #14122, #14047)
2. **Provider 兼容性扩展** — 越来越关注 vLLM、SGLang 和 OpenAI 兼容 provider 的错误处理和恢复
3. **MCP 集成深度** — ACP 工具发现、stdio 服务器生命周期管理和延迟工具提醒改进
4. **上下文性能** — 长上下文处理、响应式压缩、token 管理和溢出检测
5. **Java SDK 扩展** — 私有 CSI 会话、SQL 权限和代理级 JDBC 保留
6. **生产环境加固** — Actor 角色、租户隔离和 managed-agent 运行的容错能力

---

## 开发者痛点

来自近期 issue 的高频困扰：

1. **Provider 错误不透明** — vLLM 和 SGLang 后端返回无法识别的错误格式，导致故障无法诊断 (#14115, #14112, #14097, #14096)
2. **依赖漂移导致构建破坏** — ink@7.0.3 缺少导出，在冻结 lockfile 时阻塞 CLI 构建 (#14110)
3. **ACP MCP 工具发现失败** — ACP 模式下核心功能损坏，无 workaround (#14114)
4. **XML 解析性能回归** — 多调用响应处理在近期更改中显著变慢 (#13787)
5. **Hosted 会话竞态条件** — 并发接管加载导致 409 冲突，浪费退避周期 (#14070, #13838)
6. **终端 UI 边缘情况** — 静态模式自动换行在满宽度时失效 (#14075)，双向文本需要隔离 (#14035)

---

*基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*