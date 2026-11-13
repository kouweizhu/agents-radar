# AI CLI 工具社区动态日报 2026-11-13

> 生成时间: 2026-11-13 02:51 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content naturally into Chinese technical register
2. Preserve all Markdown structure exactly
3. Keep all URLs, code, version numbers, issue references as-is
4. Keep project names, repository slugs, usernames in original form
5. Use natural technical Chinese - not literal word-for-word

Let me translate this carefully section by section.
</think>


# AI CLI 工具生态全景 — 跨工具对比报告

**报告日期：** 2026-11-13
**覆盖范围：** 五款主流 AI CLI 工具在开发者工具生态中的表现

---

## 1. 生态概览

AI CLI 工具领域正处于快速迭代与架构演进阶段，五款工具均将多智能体编排、增强权限模型和跨平台稳定性作为首要工程目标。**Claude Code** 以 Code Mode 引领 Agent 化工具执行，**OpenAI Codex** 深化企业级和 SSH 远程工作流，**Gemini CLI** 提升会话持久性和 AST 感知工具链，**GitHub Copilot CLI** 推进企业策略管控和 MCP 生态成熟度，**Qwen Code** 正在对 v1.0.0 的循环内核进行重构。社区讨论反映出这是一个走向成熟的生态——基础对话功能已是门槛，真正的差异化在于平台稳定性、可扩展性和智能自动化能力。

---

## 2. 活跃度对比

| 工具 | 代码仓库 | Issues（24h） | PRs（24h） | Discussions | Releases（24h） | 社区信号 |
|------|----------|:------------:|:---------:|:-----------:|:--------------:|------------------|
| **Claude Code** | anthropics/claude-code | 50 条 issues 展示 | 1 条 PR | 无数据 | v2.1.323（Code Mode、插件校验） | 🔴 回归问题（subagentStatusLine 被移除） |
| **OpenAI Codex** | openai/codex | 50 条 issues 展示 | 20+ 条 PRs | 8 条讨论 | 2 个 alpha 版本（rust-v0.170.0-alpha.3/4） | 🟡 Windows 稳定性危机 |
| **Gemini CLI** | google-gemini/gemini-cli | 50 条 issues 展示 | 30 条 PRs | 无数据 | 无 | 🟢 处于积极稳定化周期 |
| **GitHub Copilot CLI** | github/copilot-cli | 42 条 issues | 0 条 PRs | 无数据 | v1.0.111-0（shell 正则规则、session 创建标志） | 🟡 MCP 生态成熟度推进 |
| **OpenCode** | anomalyco/opencode | 50 条 issues 展示 | 50 条 PRs | 无数据 | 无 | 🟢 社区贡献活跃 |
| **Pi** | earendil-works/pi | 50 条 issues 展示 | 50 条 PRs | 无数据 | 无 | 🟡 v1.5.2 崩溃严重 bug |
| **Qwen Code** | QwenLM/qwen-code | 50 条 issues 展示 | 未追踪 | 无数据 | 5 个版本（v1.0.0-preview.1、v0.27.3 等） | 🔴 CI 流水线不稳定 |

**关于"无数据"：** Claude Code、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code 或未将 Discussions 作为公开社区渠道，或在本报告周期内未获取到讨论数据。OpenAI Codex 是唯一有活跃 Discussions 使用的工具（8 条，主要为"Show and tell"和"Q&A"类型），反映出更偏向社区驱动的功能分享文化。

---

## 3. 共同功能方向

以下能力需求在多个工具社区中均有所体现，表明整个生态正在向相同的工程优先级收敛：

### 多智能体编排
| 工具 | 具体需求 |
|------|---------------|
| Claude Code | `subagentStatusLine` 用于每个 Agent 的成本/上下文追踪（v2.1.323 中出现回归） |
| Gemini CLI | 子 Agent 自主调用、轨迹可见性、MAX_TURNS 时的恢复机制 |
| Qwen Code | ACP 会话子进程管理、后台视图 UI、多 Agent 工作流支持 |
| OpenCode | Advisor 工具，支持会话模型调用辅助模型 |

### 增强的权限与安全模型
| 工具 | 具体需求 |
|------|---------------|
| Claude Code | UserPromptSubmit 钩子存在提示词注入面（Agent 注入的消息）；`DISABLE_TELEMETRY` 副作用 |
| Gemini CLI | `.env` 文件注入漏洞（针对 `GIT_*` 变量）；沙箱隔离方案 |
| GitHub Copilot CLI | 正则表达式支持 shell 权限规则；MCP OAuth 安全（Google 尾部斜杠不匹配问题） |
| OpenCode | Amend-guard 惰性证明扩展；shell 路径无法解码时的 fail-closed 策略 |

### 平台可靠性与回归管控
| 工具 | 具体需求 |
|------|---------------|
| OpenAI Codex | Computer Use 导致的 Windows UI 延迟；沙箱登录会话泄漏；lsass.exe 进程膨胀 |
| Qwen Code | Managed Agent gate CI 失败（单条 issue 产生 342 条评论）；端到端测试不稳定 |
| Pi | 直接写入终端导致 TUI 显示损坏；被信号终止的 exec 被报告为成功 |
| Claude Code | `subagentStatusLine` 被移除且无迁移路径；自动压缩阈值从 80% 改为 12% |

### 会话与上下文持久性
| 工具 | 具体需求 |
|------|---------------|
| Gemini CLI | 工作区目录在恢复失败时的清理；会话历史保留（输出已脱敏） |
| OpenCode | 可折叠的压缩摘要；会话删除 API；项目删除功能 |
| GitHub Copilot CLI | 长时间运行会话中的事件存储耗尽；worktree 堆积 |
| Qwen Code | 跨会话共享常驻外部工作区；轮次限制透明度 |

### MCP 生态成熟度
| 工具 | 具体需求 |
|------|---------------|
| GitHub Copilot CLI | OAuth 刷新令牌缺口（Google MCP）；content/structuredContent 双暴露；委托子认证 |
| Gemini CLI | 超过 128 个工具时的工具范围界定（400 错误）；AST 感知精确工具发现 |
| OpenAI Codex | MCP 服务器图标；工作区作用域的 MCP 上下文 |
| OpenCode | 扩展注册的 provider 认证检查可见性；命名空间作用域的 tool_search |

---

## 4. 差异化分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Qwen Code | OpenCode | Pi |
|-----------|------------|--------------|------------|-------------------|-----------|----------|-----|
| **核心定位** | Agent 化工具执行（Code Mode） | 企业可靠性、SSH 远程工作流 | 会话持久性、AST 感知工具链 | 企业策略管控、MCP 生态 | 统一 Agent 循环架构 | 可扩展性、多模态支持 | 终端完整性、最小依赖 |
| **目标用户** | 高级开发者、AI 优先工作流 | 企业团队、远程开发 | 高级用户、本地部署 | 企业 IT、安全敏感组织 | 中国市场、订阅用户 | 可扩展性爱好者 | 极简终端用户 |
| **技术路线** | 基于 JavaScript 的 Agent 化工具执行 | Rust SDK + 原生集成 | TypeScript、AST 感知发现 | TypeScript、企业策略引擎 | TypeScript、订阅目录 | TypeScript、插件架构 | TypeScript、TUI 优先 |
| **核心差异点** | 模型自行编写工具调用代码 | SPIFFE 工作负载身份、SSH 远程会话 | Agent 轨迹共享、Skill 调用 | 策略驱动的插件激活、正则权限 | v1.0 循环内核重构 | 混合 Code Mode、多模态音视频 | 直接终端写保护、XDG 规范 |
| **平台深度** | 跨平台 + 云会话 | Windows/SSH 远程为重点 | 浏览器 Agent、Wayland 支持 | Windows Entra、企业 MDM | 桌面应用、Web Shell | 桌面应用、浏览器配置持久化 | 终端原生、最小依赖 |
| **发布节奏** | 快速（今日 v2.1.323） | 中等（alpha 版本） | 中等（稳定化中） | 中等（v1.0.111-0） | 快速（今日 5 个版本） | 快速（50 条 PRs 合并） | 快速（50 条 PRs 合并） |

---

## 5. 社区活跃度与成熟度评估

### 高活跃度社区

**Qwen Code** 显示了最高的原始产出量（50 条 issues、1 天内 5 个版本），反映出向 v1.0.0 冲刺的激进迭代节奏和庞大的贡献者群体。然而，Managed Agent gate 失败单条 issue 产生 342 条评论，表明技术债务积累和基础设施压力，而非健康的增长态势。

**OpenCode 与 Pi** 均展示了强劲的社区贡献文化，报告期内各有 50 条 PRs 合并。OpenCode 对可扩展性的专注（插件架构、多模态支持）吸引了外部贡献者，而 Pi 的 TUI 优先设计则吸引追求极简的开发者。

### 稳定但面临挑战的社区

**OpenAI Codex** 拥有最成熟的企业故事（SPIFFE、Windows 可靠性、SSH 远程），但正与 Windows 稳定性危机搏斗——UI 延迟和资源泄漏已产生多条 20+ 评论的讨论串。8 条活跃 Discussions 表明其拥有超越 issue 追踪的健康社区互动层。

**GitHub Copilot CLI** 显示中等活跃度，今日无 PRs 合并，暗示团队重心在稳定化和企业特性而非快速功能扩展。MCP 生态成熟度推进（OAuth 修复、插件激活 bug）表明正处跨越"鸿沟"阶段——从早期采纳者向企业市场进军。

**Claude Code** PR 活跃度低（24h 仅 1 条），但 issue 参与度高。`subagentStatusLine` 回归问题引发社区即时反弹。今日 Code Mode 发布是对 Agent 执行能力的重大押注，将塑造生态演进方向。

### 低互动社区

**Gemini CLI** PR 产出居第二（30 条），但 24h 内无版本发布，暗示内部开发活跃但公发节奏不明。`.env` 注入安全漏洞（#29003）及多个 P1 Agent 挂起问题表明该工具仍在解决基础可靠性问题。

---

## 6. 趋势信号

以下来自今日社区数据的信号为开发者和决策者提供前瞻性情报：

### 🔴 高置信度信号（多独立来源验证）

**1. Windows 平台可靠性是共同的薄弱环节**

每款在 Windows 上有重要用户量的工具都报告了平台特定 bug：OpenAI Codex（UI 延迟、沙箱泄漏、Chrome 访问）、GitHub Copilot CLI（Entra 令牌缓存、浏览器门控）、Claude Code（云会话代理）、Qwen Code（Web Shell 守护进程稳定性）。整个生态在 Windows 测试基础设施上的投入集体不足。

**2. 多智能体会话管理是下一个前沿**

Claude Code 的 `subagentStatusLine`、Gemini CLI 的子 Agent 恢复、Qwen Code 的 ACP 子进程管理、OpenCode 的 Advisor 工具，都指向范式转变——从单 Agent 对话转向编排式多 Agent 工作流。资源清理、上下文隔离、轮次核算等技术挑战在各工具中均未解决。

**3. CI/CD 流水线可靠性是系统性风险**

Qwen Code 的 342 条评论 Managed Agent gate 失败、OpenAI Codex 的多个端到端测试失败，都表明 CI 基础设施跟不上开发速度。团队发版速度超过测试基础设施稳定化速度。

### 🟡 中置信度信号（新兴模式）

**4. MCP 生态成熟速度快于安全管控**

GitHub Copilot CLI 的 OAuth 刷新令牌缺口、OAuth 尾部斜杠不匹配、委托子认证失败，都表明 MCP 被采纳的速度超过了安全最佳实践的编纂速度。企业 MCP 部署应预期会遇到摩擦。

**5. 权限模型正在收敛到"默认拒绝"**

Claude Code 的提示词注入担忧、Gemini CLI 的 `.env` 注入漏洞、GitHub Copilot CLI 的正则 shell 权限规则、OpenCode 的 fail-closed shell 路径验证，都指向安全优先的权限模型正成为基础设施标准。

**6. 文档产出速度滞后于功能交付**

Claude Code Code Mode 发布当天文档返回 404、OpenCode 中文文档缺口（现正填补中）、GitHub Copilot CLI 缺失的 `providers.json` schema，都表明文档工作一致性地资源不足。

### 🟢 前瞻性指标

**7. AST 感知工具链正在获得牵引力**

Gemini CLI 追踪 AST 感知文件读取和搜索的史诗，结合对精确方法边界和减少 token 噪音的兴趣，标志工具链从简单文本处理向语义感知演进。

**8. 订阅和 BYOK 模式推动 Provider 灵活性**

Qwen Code 的订阅目录自动跟随登录、Claude Code 的 `DISABLE_TELEMETRY` 行为、GitHub Copilot CLI 的 `providers.json` schema 请求，都指向用户期望无缝切换 Provider 而无需手动配置的未来。

**9. TUI 完整性成为差异化因素**

Pi 系统性地防止直接终端写入导致显示损坏，结合 OpenCode 的叠加渲染修复，表明 TUI 健壮性正成为质量信号。终端用户对显示损坏的容忍度越来越低。

---

## 摘要表：关键要点

| 工具 | 今日叙事 | 风险等级 | 机遇 |
|------|------------------|------------|-------------|
| **Claude Code** | Code Mode 发布；回归问题侵蚀信任 | 🟡 中等 | Agent 执行领先地位 |
| **OpenAI Codex** | Windows 稳定性危机；企业特性强劲 | 🔴 高 | SSH 远程、SPIFFE 身份 |
| **Gemini CLI** | 安全 + 挂起 bug；积极稳定化 | 🟡 中等 | AST 感知发现 |
| **GitHub Copilot CLI** | MCP 生态成熟度；企业推进 | 🟢 低 | 策略驱动企业市场 |
| **OpenCode** | 社区活跃；多模态 + 可扩展性 | 🟢 低 | 插件架构、混合 Code Mode |
| **Pi** | TUI 完整性专注；v1.5.2 崩溃 bug | 🟡 中等 | 极简终端体验 |
| **Qwen Code** | CI 不稳定；激进 v1.0 推进 | 🔴 高 | 订阅模式、循环内核 |

---

*本报告基于各工具主仓库的社区摘要数据整理。指标反映截至 2026-11-13 的 24 小时周期。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese while preserving the Markdown structure exactly and keeping technical terms, URLs, code, and project identifiers in their original form.

Let me carefully translate this report maintaining:
1. The exact Markdown structure (headings, tables, lists, blockquotes, horizontal rules)
2. Technical terms that are commonly used in English in Chinese technical contexts
3. URLs, PR numbers, file paths, version numbers - all stay as-is
4. Natural Chinese technical register

Let me work through this section by section.

---

# Claude Code Skills Community Highlights Report

*数据截至 2026-11-13 — 数据来源：github.com/anthropics/skills*

---

## 1. Top Skills Ranking

The following Skills (PRs) have attracted the most attention through discussion, complexity, or security implications:

| # | Skill / PR | 功能 | 亮点 | 状态 |
|---|-----------|---------------|------------|--------|
| **#1742** | [fix(mcp-builder): mcp≥2 streamable_http_client import + custom headers](https://github.com/anthropics/skills/pull/1742) | 更新 MCP builder Skill 以支持 MCP v2 中重命名的 `streamable_http_client` 模块及新的 header 配置 API | 关键兼容性修复，针对 MCP 协议演进带来的 breaking changes；解决了上游库的结构性变更 | **OPEN** |
| **#1298** | [fix(skill-creator): isolate trigger evals + Windows/runtime failures](https://github.com/anthropics/skills/pull/1298) | 增强了 Skill 创建评估框架的隔离性，修复了 Windows `select()` 崩溃和跨 worker 子进程干扰导致的 trigger 误触发问题 | 针对 skill 创作工具链的系统性可靠性问题；影响整个 Skills 生态的 CI/CD | **OPEN** |


| **#1245** | [Add notion-spec-to-implementation + quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245) | 将产品规格/技术规格转换为可执行的 Notion 任务列表（含验收标准）；新增简历审核 Skill 用于量化候选人评估 | 一 PR 两 Skill，覆盖产品管理和 HR/招聘场景；将 Skills 拓展至非代码工作流的里程碑式尝试 | **OPEN** |
| **#1980** | [webapp-testing: avoid shell=True in with_server.py](https://github.com/anthropics/skills/pull/1980) | 从 webapp-testing Skill 中移除 `subprocess.Popen(..., shell=True)`，封堵 CWE-78 命令注入漏洞 | 安全优先的补丁；直接缓解了未净化 agent/USER 输入到达系统 shell 的风险 | **OPEN** |

This PR eliminates shell command injection risks by removing shell execution from subprocess calls, addressing a critical CWE-78 vulnerability where unsanitized agent or user input could reach the system shell.

| **#1792** | [fix(docx): report LibreOffice timeout as error + verify output](https://github.com/anthropics/skills/pull/1792) | docx Skill 将 LibreOffice 超时失败报告为 Error 而非静默成功；验证输出 DOCX 的修订标记已被清除 | 提升文档验收工作流的可靠性；通过防御性编程避免误报 | **OPEN** |

The document conversion skill now properly handles LibreOffice timeout failures by reporting them as errors and validating that revision marks are removed from the output, improving workflow reliability through defensive programming practices.

| **#525** | [Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525) | 通过 Pyxel（Python 游戏引擎）实现复古游戏创建、调试和验证；涵盖无头测试、帧检查和状态验证 | 运行时间最长的开放 PR（自 2026 年 3 月起），面向小众但热情的开发者群体；包含独立的 Pyxel 行为参考文档 | **OPEN** |

A retro game development skill leveraging Pyxel that enables creation, debugging, and verification with headless testing, frame inspection, and state validation capabilities.

| **#2019** | [fix(xlsx): worksheet-scoped defined names + external_links_at_risk](https://github.com/anthropics/skills/pull/2019) | 通过处理工作表作用域定义的名称和别名链，修复了电子表格外部链接检测的误报问题 | 解决了金融/合规电子表格工作流中一个隐蔽但真实的数据完整性风险 | **OPEN** |

An Excel skill fix addressing false negatives in external link detection by handling worksheet-scoped defined names and alias chains, mitigating real data integrity risks in financial and compliance workflows.

## 2. Community Demand Trends

The Issues section reveals concentrated demand across three main areas:

1. **Trust & Security Governance** — Issue #492 (46 comments) raises a critical concern: community Skills distributed under the `anthropic/` namespace may mislead users into granting elevated permissions to unofficial code. The community is calling for namespace differentiation or signing/verification mechanisms.

2. **Organizational Skill Sharing** — Issue #228 (17 comments) requests native org-wide skill sharing within Claude.ai, eliminating the current manual download/upload workflow. This is the highest-upvoted feature request (👍 8).

3. **Evaluation Reliability** — Two Issues (#556, #1352, 19 combined comments) document that `run_eval.py` produces near-zero trigger rates, especially with parallel workers. This undermines the entire skill-authoring feedback loop and is blocking quality contributions.

4. **Memory & Token Efficiency** — Issue #1329 proposes a `compact-memory` Skill for compressing agent state notation; Issue #1487 reports that the `claude-api` Skill injects ~156k tokens in a single call, exhausting context windows. Both point to demand for leaner, more efficient Skills.

5. **Cross-Platform / Robustness** — Multiple PRs (#1298, #1792, #1975) target Windows compatibility, timeout handling, and input validation, reflecting a community that is deploying Skills in heterogeneous environments and expects production-grade reliability.

---

## 3. High-Potential Pending Skills

These active PRs have substantive implementations and clear utility; they are strong candidates for near-term merge:

| # | Skill | Why It May Land Soon |
|---|-------|----------------------|
| **#525** | [pyxel — retro game development](https://github.com/anthropics/skills/pull/525) | Well-scoped, includes comprehensive behavior references; active maintenance (updated 2026-11-01) |
| **#1703** | [md2video-audio](https://github.com/anthropics/skills/pull/1703) | Zero-cost, unique use case (Markdown → MP4 with voiceover); differentiates Claude Code from pure code tools |
| **#1771** | [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) | Targets Web3/Solidity/Rust audience; cryptographic audit-proof anchoring on TON blockchain is a novel vertical |
| **#1615** | [scnet-hpc](https://github.com/anthropics/skills/pull/1615) | Operational tooling for HPC clusters via SSH/Slurm; fills a gap for scientific computing users |
| **#514** | [document-typography](https://github.com/anthropics/skills/pull/514) | Addresses a universal pain point (orphan/widow control, numbering alignment) affecting every document-generation workflow |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for production-grade reliability and trust infrastructure** — hardening Skills against security vulnerabilities (shell injection, namespace impersonation), cross-platform failures, and evaluation blind spots — rather than for entirely new Skill categories.

This signals a maturing ecosystem: contributors are shifting from *breadth* (new Skill types) to *depth* (security, robustness, governance), which is a healthy indicator that Claude Code Skills are moving from experimental to enterprise-ready. The ecosystem is maturing beyond novelty and into production readiness—contributors are prioritizing reliability and security hardening over expanding into new skill categories, which signals a transition from experimental phase to enterprise adoption. 社区最集中的需求是生产级可靠性和信任基础设施——强化 Skills 抵御安全漏洞（shell 注入、命名空间冒用）、跨平台故障和评估盲点——而非全新 Skill 类别的开发。这表明贡献者正从广度（新 Skill 类型）转向深度（安全性、可靠性、治理），是 Claude Code Skills 从实验性走向企业级的健康信号。 The ecosystem is maturing beyond its initial experimental phase, with contributors focusing on production-grade reliability and security hardening rather than expanding into entirely new skill categories—this shift from breadth to depth signals a healthy transition toward enterprise readiness.
</think>


# Claude Code Skills 社区亮点报告

*数据截至 2026-11-13 — 数据来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

以下 Skills（PRs）因讨论热度、复杂程度或安全影响而备受关注：

| # | Skill / PR | 功能 | 亮点 | 状态 |
|---|-----------|---------------|------------|--------|
| **#1742** | [fix(mcp-builder): mcp≥2 streamable_http_client import + custom headers](https://github.com/anthropics/skills/pull/1742) | 更新 MCP builder Skill 以支持 MCP v2 中重命名的 `streamable_http_client` 模块及新的 header 配置 API | 针对 MCP 协议演进中 breaking changes 的关键兼容性修复；解决了上游库的接口变更 | **OPEN** |
| **#1298** | [fix(skill-creator): isolate trigger evals + Windows/runtime failures](https://github.com/anthropics/skills/pull/1298) | 增强 Skill 创建评估框架的隔离性，修复 Windows `select()` 崩溃及跨 worker 子进程干扰导致的 trigger 误触发问题 | 直面 skill 创作工具链的系统性可靠性问题；影响整个 Skills 生态的 CI/CD | **OPEN** |
| **#1245** | [Add notion-spec-to-implementation + quantitative-resume-auditor](https://github.com/anthropics/skills/pull/1245) | 将产品规格/技术规格转换为可执行的 Notion 任务列表（含验收标准）；新增简历审核 Skill 用于量化候选人评估 | 一 PR 双 Skill，覆盖产品管理和 HR/招聘场景；将 Skills 拓展至非代码工作流的里程碑式尝试 | **OPEN** |
| **#1980** | [webapp-testing: avoid shell=True in with_server.py](https://github.com/anthropics/skills/pull/1980) | 从 webapp-testing Skill 中移除 `subprocess.Popen(..., shell=True)`，封堵 CWE-78 命令注入漏洞 | 安全优先的补丁；直接缓解了未净化 agent/USER 输入到达系统 shell 的风险 | **OPEN** |
| **#1792** | [fix(docx): report LibreOffice timeout as error + verify output](https://github.com/anthropics/skills/pull/1792) | docx Skill 将 LibreOffice 超时失败报告为 Error 而非静默成功；验证输出 DOCX 的修订标记已被清除 | 提升文档验收工作流的可靠性；通过防御性编程避免误报 | **OPEN** |
| **#1771** | [feat(skills): add proofcore-contract-auditor for smart contract notarization](https://github.com/anthropics/skills/pull/1771) | 新增面向 Web3/Solidity/Rust 受众的智能合约审计 Skill，在 TON 区块链上提供密码学审计证明锚定 | 将 Claude Code 引入 Web3 审计领域的新垂直场景；TO 链上证明锚定具有差异化价值 | **OPEN** |
| **#1703** | [Add md2video-audio skill](https://github.com/anthropics/skills/pull/1703) | 将 Markdown 文档转换为带配音的 MP4 视频 | 零成本内容再创作的独特用例；将 Claude Code 的能力从代码工具延伸至多媒体创作 | **OPEN** |
| **#525** | [Add pyxel skill for retro game development](https://github.com/anthropics/skills/pull/525) | 通过 Pyxel（Python 游戏引擎）实现复古游戏创建、调试和验证；涵盖无头测试、帧检查和状态验证 | 运行时间最长的开放 PR（自 2026 年 3 月起），面向小众但热情的开发者群体；包含独立的 Pyxel 行为参考文档 | **OPEN** |
| **#2019** | [fix(xlsx): worksheet-scoped defined names + external_links_at_risk](https://github.com/anthropics/skills/pull/2019) | 通过处理工作表作用域定义的名称和别名链，修复电子表格外部链接检测的漏报问题 | 解决了金融/合规电子表格工作流中一个隐蔽但真实的数据完整性风险 | **OPEN** |
| **#1730** | [fix(claude-api): replace dead URLs](https://github.com/anthropics/skills/pull/1730) | 替换 claude-api Skill 中失效的外部链接 | 小型但实用的维护性修复，确保 Skill 文档可正常访问 | **OPEN** |
| **#1681** | [fix(skill-creator): support direct execution of package_skill.py](https://github.com/anthropics/skills/pull/1681) | 支持直接运行 `package_skill.py`，无需手动切换目录或设置 PYTHONPATH | 降低 skill 打包的上手门槛，改善开发者体验 | **OPEN** |
| **#514** | [Add document-typography skill](https://github.com/anthropics/skills/pull/514) | 自动化处理文档排版细节：孤行/寡行控制、编号对齐、连字符处理等 | 解决文档生成工作流中的高频痛点，影响面广 | **OPEN** |
| **#2108** | [docs: clarify document skills snapshot status](https://github.com/anthropics/skills/pull/2108) | 明确说明 document skills 的 snapshot 状态和使用限制 | 文档澄清，消除用户对功能边界的误解 | **OPEN** |
| **#1997** | [fix(skill-creator): parse YAML frontmatter scalars correctly](https://github.com/anthropics/skills/pull/1997) | 正确解析 YAML frontmatter 中的标量值（避免类型推断错误） | 提升 skill 创作者对 frontmatter 的解析鲁棒性 | **OPEN** |
| **#1977** | [algorithmic-art: wrapAround() now wraps](https://github.com/anthropics/skills/pull/1977) | algorithmic-art Skill 中 `wrapAround()` 函数现在正确执行环绕逻辑 | 修复该 Skill 生成艺术作品时的逻辑缺陷 | **OPEN** |
| **#1976** | [webapp-testing: report textarea and select correctly](https://github.com/anthropics/skills/pull/1976) | webapp-testing Skill 现在正确报告 `<textarea>` 和 `<select>` 元素 | 改善 Web 应用 UI 测试覆盖率 | **OPEN** |
| **#1975** | [pptx: reject --cols below 1 in thumbnail.py](https://github.com/anthropics/skills/pull/1975) | pptx Skill 在 `thumbnail.py` 中对 `--cols < 1` 的输入进行校验并报错 | 输入验证，防止无效参数导致异常 | **OPEN** |
| **#1950** | [docs(claude-api): update Python pause_turn runner guidance](https://github.com/anthropics/skills/pull/1950) | 更新 claude-api Skill 文档中 Python pause_turn runner 的使用指南 | 文档与最新 API 行为保持同步 | **OPEN** |
| **#1615** | [Add scnet-hpc skill](https://github.com/anthropics/skills/pull/1615) | 通过 SSH/Slurm 操作用户 HPC 集群的 Skill | 填补科学计算用户群体的需求空白；运维场景实用工具 | **OPEN** |

---

## 2. 社区需求趋势

Issues 揭示了五个方向的集中需求：

1. **信任与安全治理** — Issue #492（46 条评论）提出了关键警示：分发在 `anthropic/` 命名空间下的社区 Skills 可能误导用户向非官方代码授予提升权限。社区呼吁命名空间区分或签名/验证机制。

2. **组织级 Skill 共享** — Issue #228（17 条评论）请求在 Claude.ai 内置组织级 skill 共享功能，以消除当前手动下载/上传的工作流。这是目前点赞数最高的 Feature Request（👍 8）。

3. **评估可靠性** — 两个 Issues（#556、#1352，共 19 条评论）记录了 `run_eval.py` 产生的 trigger 命中率接近零的问题，尤其在使用并行 worker 时。该问题动摇了整个 skill 创作反馈闭环，正在阻塞优质贡献的提交。

4. **内存与 Token 效率** — Issue #1329 提议开发 `compact-memory` Skill 以压缩 agent 状态表示；Issue #1487 报告 `claude-api` Skill 单次调用注入约 156k tokens，导致上下文窗口耗尽。两者均指向对更精简、高效 Skills 的需求。

5. **跨平台 / 鲁棒性** — 多个 PRs（#1298、#1792、#1975）聚焦 Windows 兼容性、超时处理和输入校验，反映出社区正在将 Skills 部署到异构环境中，并对生产级可靠性有明确预期。

---

## 3. 高潜力待合并 Skills

以下活跃 PRs 拥有实质性实现和明确用途，是近期合并的强有力候选：

| # | Skill | 快速合并理由 |
|---|-------|----------------------|
| **#525** | [pyxel — retro game development](https://github.com/anthropics/skills/pull/525) | 需求边界清晰，包含完整的行为参考文档；维护活跃（2026-11-01 更新） |
| **#1703** | [md2video-audio](https://github.com/anthropics/skills/pull/1703) | 零成本内容创作用例独特（Markdown → 带配音 MP4）；将 Claude Code 与纯代码工具区分开来 |
| **#1771** | [proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771) | 面向 Web3/Solidity/Rust 受众；在 TON 区块链上的密码学审计证明锚定是一个新颖的垂直场景 |
| **#1615** | [scnet-hpc](https://github.com/anthropics/skills/pull/1615) | 通过 SSH/Slurm 操作 HPC 集群的运维工具；填补科学计算用户群体的需求空白 |
| **#514** | [document-typography](https://github.com/anthropics/skills/pull/514) | 解决影响所有文档生成工作流的共性痛点（孤行/寡行控制、编号对齐） |

---

## 4. Skills 生态洞察

> **社区最集中的需求是生产级可靠性与信任基础设施** — 即强化 Skills 抵御安全漏洞（shell 注入、命名空间冒用）、跨平台故障和评估盲点的能力 — 而非全新 Skill 类别的开发。

这标志着生态正在走向成熟：贡献者正从*广度*（新 Skill 类型）转向*深度*（安全性、可靠性、治理），Claude Code Skills 从实验性走向企业级应用的健康信号。

---

<think>The user wants me to translate the Claude Code Community Digest from English to Simplified Chinese. I need to follow the rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this carefully, maintaining the professional technical Chinese newsletter style.

Title: "Claude Code Community Digest" → I should translate this to Chinese but keep the name "Claude Code" as-is.

Let me go through section by section:

**Today's Highlights:**
- Code Mode → 代码模式
- agentic tool execution → 代理式工具调用
- plugin.json → keep as-is
- subagentStatusLine → keep as-is
- multi-agent workflow users → 多智能体工作流用户

**Releases:**
- Code Mode (Experimental) → 代码模式（实验性）
- opt-in → 手动启用
- organization-level control → 组织级控制
- Plugin Validation → 插件验证
- Plugin Manifest Validation → 插件清单验证

**Hot Issues:**
I need to translate the issue titles and descriptions naturally while keeping technical terms as-is.

**Key PR Progress:**
Translate the PR title and description.

**Feature Request Trends:**
Translate category names and feature request titles.

**Developer Pain Points:**
Translate the section headings and content naturally.

Let me write the translation:
</think>


# Claude Code 社区周刊

## 2026 年 11 月 13 日

---

### 今日要点

**Claude Code v2.1.323** 正式推出 **代码模式（Code Mode）**，这是一项实验性功能，让 Claude 可以通过编写 JavaScript 来调用自身的工具，标志着向代理式工具调用迈出了重要一步。该版本还新增了 `plugin.json` 中 `engines["claude-code"]` 字段的验证。与此同时，社区正在应对 v2.1.323 中的一个回归问题——`subagentStatusLine` 设置被静默移除，导致多智能体工作流用户无法看到每个 agent 的上下文、成本和使用量信息，引发了强烈反响。

---

### 版本更新

**v2.1.323**（最新版）

- **代码模式（实验性）**：Claude 现在可以编写 JavaScript 来调用自身的工具，可通过设置手动启用，组织级控制选项也已提供。文档链接目前返回 404 错误——详见 [Issue #109442](https://github.com/anthropics/claude-code/issues/109442)。
- **插件验证**：`plugin.json` 现在强制要求声明 `engines["claude-code"]`；超出声明的 Claude Code 版本范围的插件将被标记。

---

### 热门议题

1. **#108726** — `[BUG] DISABLE_TELEMETRY 在 /model picker 中隐藏了 Fable 5.2` (23 👍)
   设置 `DISABLE_TELEMETRY=1` 会导致功能开关无法下载或加载，静默破坏了依赖这些开关的功能。用户反映 Fable 5.2 完全从模型选择器中消失。这影响了安全意识较强的开发者和受限环境中的用户。
   [查看议题](https://github.com/anthropics/claude-code/issues/108726)

2. **#104529** — 重构实验 "fizzy_lake" 样式问题 (17 条评论, 10 👍)
   拉丁字母的粗体文本几乎不可见，西里尔字母则完全消失；行内代码显示为灰色。全新登录和页面重载后的格式表现不一致。10 月 24 日更新后，之前的变通方案已不再有效。
   [查看议题](https://github.com/anthropics/claude-code/issues/104529)

3. **#105770** — Android 应用在已 root/解锁设备上登录失败 (13 条评论, 10 👍)
   Google 登录成功但 `/auth/verify_google_mobile` 返回 HTTP 400，阻止了 root 设备用户的登录。这影响了需要 root 权限进行正当调试和设备定制的开发者。
   [查看议题](https://github.com/anthropics/claude-code/issues/105770)

4. **#94675** — UserPromptSubmit 对 agent 注入的消息触发 (9 条评论)
   存在提示注入风险：来自 subagent、跨会话载荷和系统注入的消息会触发 `UserPromptSubmit` 钩子，但没有 `prompt_source` 或 `is_meta` 元数据，导致钩子无法区分用户输入和自动化内容。
   [查看议题](https://github.com/anthropics/claude-code/issues/94675)

5. **#97926** — Cowork 会话中 GitHub 集成不可用 (6 条评论, 4 👍)
   部分账户的 Cowork 会话中无法使用 `list_repos` 或 `add_repo` 工具，尽管 GitHub App 在其他地方工作正常，阻断了协作开发工作流。
   [查看议题](https://github.com/anthropics/claude-code/issues/97926)

6. **#108585** — 强制重新登录会终止后台 subagent (5 条评论)
   会话中重新认证会终止所有后台 subagent 并丢弃进行中的工作（测试、重基等）。没有自动恢复机制，强制开发者手动恢复 agent。
   [查看议题](https://github.com/anthropics/claude-code/issues/108585)

7. **#109446** — v2.1.323 回归：subagentStatusLine 被移除 (1 条评论, 0 👍 但活跃)
   **回归警告**：v2.1.323 静默移除了 `subagentStatusLine` 设置，没有提供替代方案，破坏了依赖该功能的多智能体工作流（per-agent 上下文、成本、模型和用量可见性）。
   [查看议题](https://github.com/anthropics/claude-code/issues/109446)

8. **#109000** — Desktop 自动模式下 mod 自身的 MCP 工具调用被阻止 (3 条评论, 2 👍)
   在 Desktop 自动模式下，当 mod 自己的代码调用工具时（如 `ccd_sidebar`、`move_sessions`），Claude 拒绝执行，限制了 mod 的能力。
   [查看议题](https://github.com/anthropics/claude-code/issues/109000)

9. **#106049** — 云会话无法向 PR/issue 附加图片 (2 条评论, 7 👍)
   Anthropic 托管的云环境中 GitHub 代理拒绝所有 GraphQL 请求，无法向 pull request 和 issue 上传图片。
   [查看议题](https://github.com/anthropics/claude-code/issues/106049)

10. **#109439** — 自动压缩在 12% 而非 80% 阈值触发 (0 条评论)
    后台任务会话在远低于配置的 80% 上下文使用量阈值时触发自动压缩，反复降至约 9%，干扰长时间运行的任务。
    [查看议题](https://github.com/anthropics/claude-code/issues/109439)

---

### 重要 PR 进展

1. **#81672** — `fix(hookify): make package import independent of the install directory name` (开放中)
   修复 #69665, #81448。解决了 hook 入口点依赖插件目录必须命名为 `hookify` 的问题，打破了使用不同目录名称的市场安装。
   [查看 PR](https://github.com/anthropics/claude-code/pull/81672)

---

### 功能请求趋势

**平台与无障碍**

- 在 Claude UI 中支持自定义 MCP 服务器图标（[#108788](https://github.com/anthropics/claude-code/issues/108788)）
- 内置浏览器窗格支持 Passkey（WebAuthn）和密码管理器（[#109441](https://github.com/anthropics/claude-code/issues/109441)）
- 可配置的拼写检查/自动纠正，支持语言选择（[#108885](https://github.com/anthropics/claude-code/issues/108885)）

**智能体与工作流增强**

- 让模型在 computer use 模式中看到截图之间的变化（[#109444](https://github.com/anthropics/claude-code/issues/109444)）
- 可配置空闲会话清理时长或禁用选项（[#109443](https://github.com/anthropics/claude-code/issues/109443)）
- 禁用提示输入中自动列表转换的选项（[#108824](https://github.com/anthropics/claude-code/issues/108824)）

**模型与上下文**

- 允许在合理的生物学相关工作中覆盖 `[bio]` 安全限制（[#108742](https://github.com/anthropics/claude-code/issues/108742)、[#109437](https://github.com/anthropics/claude-code/issues/109437)）
- 修复网络安全限制误报，阻止正当安全任务的问题（[#109438](https://github.com/anthropics/claude-code/issues/109438)）

---

### 开发者痛点

**回归与稳定性问题**
v2.1.323 版本移除了 `subagentStatusLine` 而未发出警告或提供迁移路径，直接影响了管理多智能体工作流的开发者。这是静默破坏性变更模式的延续，正在侵蚀用户信任。

**平台碎片化**
问题横跨 Windows、macOS、Linux、Android 和 Web 平台，行为表现不一致——尤其是登录方面（root 设备、云会话）、GitHub 集成（Cowork 会话）和 UI 渲染（拼写词典、重构实验）。

**遥测与功能开关**
`DISABLE_TELEMETRY` 标志产生了意外的副作用，阻断了需要在不收集遥测数据的情况下使用功能开关的合法用例。

**文档缺口**
代码模式文档在上线当天返回 404 错误，凭证变更时的准入/退出边界缺乏清晰说明，迫使开发者通过试错来发现行为。

**上下文管理**
自动压缩在远低于配置阈值时触发，干扰长时间运行的后台任务；而 `[bio]` 安全限制的误报阻止了安全、生物学和软件开发领域的正当工作。

---

*周刊数据来源：GitHub • [报告问题](https://github.com/anthropics/claude-code/issues) • [查看所有版本](https://github.com/anthropics/claude-code/releases)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure intact
2. Preserve all formatting: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep all URLs, link targets, code spans, code blocks, numbers, dates, and technical identifiers as-is
4. Keep project names, repository slugs, usernames, version tags, file paths, and API/config identifiers in their original form
5. Use natural technical Chinese register
6. Output ONLY the translation, no preamble or explanation
7. No markdown fences around the output

Let me translate this carefully section by section.
</think>


# OpenAI Codex 社区日报

**日期：** 2026-11-13  
**仓库：** [openai/codex](https://github.com/openai/codex)

---

## 1. 今日要点

Codex 社区正在积极应对 **Windows 平台稳定性** 问题，多份报告指出 Computer Use 操作后会出现系统级 UI 延迟和资源泄漏。一项将 VS Code 聊天作用域限定到当前工作区的重大功能请求已获得 134 个 👍，表明用户对多项目隔离有强烈需求。在基础设施方面，Rust 工具链已升级至 1.99.1，新的 SPIFFE JWT-SVID 认证支持使 Unix 工作负载能够进行工作负载身份认证。

---

## 2. 版本发布

| 版本 | 概要 |
|------|------|
| **rust-v0.170.0-alpha.4** | v0.170 系列的最新 alpha 版本。暂无变更日志详情。 |
| **rust-v0.170.0-alpha.3** | v0.170 系列的前一个 alpha 版本。 |

*注：这些是 Rust SDK/预览版本，变更日志内容较少。*

---

## 3. 热门议题

| # | 议题 | 关键要点 | 社区反馈 |
|---|------|----------|----------|
| **#25319** | **[工作区范围的 VS Code 聊天](https://github.com/openai/codex/issues/25319)** | 请求将 Codex VS Code 扩展的聊天限定到当前工作区/项目，防止跨工作区上下文污染。 | **60 条评论，134 个 👍** — 最活跃的增强请求；用户强调开发者工作流隔离的重要性。 |
| **#57101** | **[Windows Computer Use：UI 残影持续存在](https://github.com/openai/codex/issues/57101)** | 截图生成回合结束后，捕获访问边框和黄色显示边框仍然残留。 | **24 条评论** — 影响日常工作的视觉回归问题。 |
| **#56941** | **[Computer Use 后系统级 UI 延迟](https://github.com/openai/codex/issues/56941)** | Windows 11 在 Codex Computer Use 后出现严重 UI 迟滞；只有结束 `codex-computer-use.exe` 才能解决。 | **24 条评论** — 关键性能回归；用户反映工作无法正常进行。 |
| **#47511** | **[缺少 git commit/push 按钮](https://github.com/openai/codex/issues/47511)** | v26.917.51856 中桌面应用的可见 commit/push 按钮消失。 | **20 条评论，49 个 👍** — 直接影响核心开发者工作流；多份确认回归的报告。 |
| **#55141** | **[macOS 工具服务器内存压力](https://github.com/openai/codex/issues/55141)** | 重启后每个线程的工个服务器累积，导致 Apple M4 MacBook Air 内存压力上升。 | **15 条评论** — 影响长时间运行的会话；硬件受限用户受影响。 |
| **#59546** | **[自动化限制阻止外部监控](https://github.com/openai/codex/issues/59546)** | 内置自动化限制与计划任务文档冲突，阻止了合法的监控工作流。 | **15 条评论，19 个 👍** — 组件间的功能不兼容；需要变通方案。 |
| **#35940** | **[沙箱泄漏 Windows 登录会话](https://github.com/openai/codex/issues/35940)** | Windows 上的 `codex sandbox` 每次调用创建一个新的交互式登录会话，导致 lsass.exe 持续增长直至重启。 | **14 条评论** — 安全和资源泄漏问题，目前无缓解方案。 |
| **#59931** | **[SSH 主机未自动重连](https://github.com/openai/codex/issues/59931)** | Windows Desktop 在应用重启后未能自动连接已启用的 SSH 主机。 | **14 条评论，8 个 👍** — 破坏远程开发工作流；在多台设备上可复现。 |
| **#60530** | **[速率限制消耗过快](https://github.com/openai/codex/issues/60530)** | GPT-6.1 Sol 使用限额以远超预期的速度消耗 5 小时配额。 | **7 条评论** — 经济影响；用户报告配额异常加速。 |
| **#59300** | **[Windows CLI 上 Chrome 访问失败](https://github.com/openai/codex/issues/59300)** | 原先可用的 Chrome 浏览器访问现在在 Windows CLI 上返回"浏览器访问主机不可用"错误，但 Desktop 仍正常。 | **6 条评论** — CLI/Desktop 一致性问题；阻止无头自动化工作流。 |

---

## 4. 重要 PR 进展

| PR | 标题 | 影响 |
|----|------|------|
| **[#61207](https://github.com/openai/codex/pull/61207)** | **Unix 工作负载身份的 SPIFFE JWT-SVID 支持** | 使 Unix 工作负载能够直接从 SPIFFE Workload API 获取声明以进行 OpenAI 令牌交换。通过 `OPENAI_IDENTITY_TOKEN_SOURCE=spiffe` 配置。 |
| **[#61205](https://github.com/openai/codex/pull/61205)** | **将 Rust 工具链升级至 1.99.1** | 重大工具链升级；包含针对 `try_update` 原子操作和 `as_chunks` API 的 Clippy lint 适配。 |
| **[#61222](https://github.com/openai/codex/pull/61222)** | **将 rollout trace 负载存储在压缩分片中** | 将 JSON 负载文件替换为 Zstandard 压缩分片；添加 `PayloadReader` 用于回放期间的缓存和验证。 |
| **[#61221](https://github.com/openai/codex/pull/61221)** | **通过 npm 包装器转发重复信号** | 修复首次信号后的信号转发问题；移除 `child.killed` 守卫，该守卫阻止了第二次中断时的优雅关闭。 |
| **[#61219](https://github.com/openai/codex/pull/61219)** | **为只读历史隐藏 TUI 状态详情** | 通过隐藏状态行和上下文使用情况，改善只读线程查看体验。 |
| **[#61218](https://github.com/openai/codex/pull/61218)** | **从代理概览中隐藏附加线程** | 阻止带有 `attached_to_thread_id` 的侧边聊天作为根会话出现在概览中。 |
| **[#61216](https://github.com/openai/codex/pull/61216)** | **跨 TUI 会话恢复保留线程输入** | 在会话恢复时保留草稿、排队的后续内容和中断的引导重试，保持其原始线程上下文。 |
| **[#61215](https://github.com/openai/codex/pull/61215)** | **跟踪用户接受的听写输入的使用情况** | 捕获每个输入的 `codex_app_used_dictation` 元数据；在用户原始输入被接受时记录归属。 |
| **[#61227](https://github.com/openai/codex/pull/61227)** | **在 MXC 进程启动失败中包含 Win32 错误码** | 从 `CreateProcessW` 失败中提取数字错误码，改善 Windows 诊断输出。 |
| **[#61224](https://github.com/openai/codex/pull/61224)** | **在 Windows 运行时注册错误中包含 AppX 事件 ID** | 使用 Windows 事件日志中的 `appx_event_ids` 补充托管运行时包注册失败信息。 |

---

## 5. 热门讨论

### 展示与分享

| 讨论 | 概要 |
|------|------|
| **[#61174](https://github.com/openai/codex/discussions/61174)** — **Commonly** | 开源工作区（Apache-2.0），支持团队使用多个 Codex 实例共享一个 pod 进行协作编码。每个队友的 Codex 在本地运行，并加入共享对话和任务面板。 |
| **[#55082](https://github.com/openai/codex/discussions/55082)** — **Estafeta** | 用于在 Codex 和其他终端代理之间交接编码项目的工具。`session-end` 保存交接信息；`session-start` 读取项目状态并在继续前检查变更。 |
| **[#61058](https://github.com/openai/codex/discussions/61058)** — **1ToolRing** | 远程 MCP 服务器，通过单一集成向 Codex 提供实时 Google、地图、Amazon 和汇率数据。 |
| **[#61049](https://github.com/openai/codex/discussions/61049)** — **TokenWatch** | iOS/Android 仪表盘应用，显示 Codex 和 Claude 的使用情况和重置时间。11 月 16 日前免费。 |
| **[#61030](https://github.com/openai/codex/discussions/61030)** — **Mons beta** | 用于继续跨设备 Codex CLI 会话的原生 iPhone/iPad 终端（Mac/Linux 主机）。 |
| **[#59147](https://github.com/openai/codex/discussions/59147)** — **SnipToss** | 用于标注 Codex 生成的图像和视频的工具，注释以文件形式返回用于精确的编辑反馈。 |

### 问答

| 讨论 | 概要 |
|------|------|
| **[#61177](https://github.com/openai/codex/discussions/61177)** — **验证线程输入完整性** | 询问 `thread/start` 是否可以验证加载了哪些指令字节以及在发送第一条消息前的完整启动输入顺序。 |

---

## 6. 功能请求趋势

基于议题和讨论分析，社区请求的功能包括：

1. **工作区范围的上下文隔离** — 将 VS Code 扩展聊天限定在当前项目内，防止跨工作区上下文意外泄漏（#25319, #60228）。

2. **增强的 git/版本控制集成** — 恢复缺失的 commit/push 按钮，并为排队消息添加每条消息的模型/推理努力选择器（#47511, #50383）。

3. **跨设备会话连续性** — 在移动设备上继续 Codex 终端会话而不中断（#61030, #57676）。

4. **代理交接与编排** — 支持在 Codex 实例和外部代理之间传递工作（#55082, #57676）。

5. **丰富的外部数据集成** — 通过 MCP 服务器访问实时网络数据（搜索排名、地图、价格），无需手动研究（#61058）。

---

## 7. 开发者痛点

| 类别 | 描述 | 频率 |
|------|------|------|
| **Windows 稳定性回归** | Computer Use 导致持续的 UI 延迟、沙箱登录会话泄漏，以及 CLI 上 Chrome 访问失败。影响 Windows 开发者的日常工作效率。 | 🔴 高 |
| **UI 元素缺失** | Git commit/push 按钮回归；TUI/CLI 信号处理缺陷；Windows 上缺少 `/plan` 操作。 | 🔴 高 |
| **资源泄漏** | 每个线程的工个服务器累积导致的内存压力（macOS）；沙箱调用导致的 lsass.exe 增长（Windows）。 | 🔴 高 |
| **SSH/远程工作流故障** | 重启后自动重连失败；共享主机上会话附加到错误的用户目录。 | 🟡 中 |
| **速率限制可见性** | 用户缺乏对配额消耗的清晰了解；使用量看起来比预期更快且无解释。 | 🟡 中 |
| **自动化限制冲突** | 内置限制阻止合法的外部监控和计划任务，与文档记录的功能相矛盾。 | 🟡 中 |
| **平台一致性差距** | CLI 和 Desktop 行为不同（Chrome 访问、浏览器门控）；Linux emoji 滚动被阻止。 | 🟡 中 |

---

*日报结束。所有议题和 PR 链接均指向 [openai/codex](https://github.com/openai/codex) 仓库。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content while maintaining the exact Markdown structure
2. Keep URLs, issue numbers, code, file paths, config names, etc. in their original form
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

Title and date: Straightforward
"Today's Highlights" - 今日要闻
"Releases" - 版本发布
"Hot Issues" - 热门议题
"Key PR Progress" - 关键 PR 进展
"Hot Discussions" - 热门讨论
"Feature Request Trends" - 功能需求趋势
"Developer Pain Points" - 开发者痛点

Let me go through carefully and translate the content while maintaining natural Chinese technical writing style.

Key terms to consider:
- "releases" = 发布/版本发布
- "issues" = Issue（保持英文，因为这是技术术语）/议题
- "PRs" = PR（保持英文）
- "hot issues" = 热门议题
- "subagent" = 子 Agent
- "generalist agent" = 通用 Agent
- "browser agent" = 浏览器 Agent
- "hanging" = 卡死/挂起
- "workspace" = 工作区/工作目录
- "hooks" = Hook/钩子
- "settings.json" = settings.json（保持）
- ".env file" = .env 文件
- "token" = Token（保持）
- "AST-aware" = AST 感知
- "sandboxing" = 沙箱化
- "telemetry" = 遥测/遥测数据
- "OTel" = OTel（保持）
- "wayland" = Wayland（保持）


- "ACP mode" = ACP 模式
- "undici" = undici（保持，这是 Node.js HTTP 客户端库名）
- "serial" = 序列号
- "proxy" = 代理
- "crash" = 崩溃
- "hook" = Hook/钩子
- "masking" = 掩码处理/脱敏
- "recovery" = 恢复
- "trajectory" = 轨迹
- "grep" = grep（保持）
- "CRUD" = CRUD（保持）
- "destructive operations" = 破坏性操作
- "git reset/--force" = git reset/--force（保持）
- "lock recovery" = 锁恢复

I'm working through the translation while keeping technical terminology, code references, and configuration parameters in their original form. The focus is on maintaining clarity for Chinese developers while preserving the exact Markdown structure and using natural technical language throughout.
</think>


# Gemini CLI 社区周报 — 2026-11-13

## 今日要闻

社区持续高度关注 Agent 可靠性问题，多个 P1 级缺陷涉及子 Agent 行为、卡死问题与会话管理。值得特别注意的是，Issue #29003 披露了一个安全漏洞：项目 `.env` 文件可能通过注入 `GIT_*` 变量（如 `GIT_EXEC_PATH`、`GIT_SSH_COMMAND`、`GIT_PROXY_COMMAND`）影响内部 git 操作，而当前sanitize 仅过滤 `GIT_CONFIG_*`。在 PR 方面，Windows 兼容性、会话历史保留和模型 Token 上限准确上报等重要修复已合入主线。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门议题

| # | 议题 | 优先级 | 关键要点 | 社区反馈 |
|---|-------|----------|------------|-------------------|
| **#22323** | [子 Agent 达到 MAX_TURNS 后被报告为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 子 Agent（`codebase_investigator`）在达到最大轮次限制且未完成分析时，仍错误地报告成功状态并以 "GOAL" 终止 | 13 条评论，2 👍 |
| **#19873** | [零依赖 OS 沙箱化及执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 提议利用 Gemini 3 原生 bash 亲和性，通过 OS 级别沙箱实现，无需外部依赖 | 9 条评论，1 👍 |
| **#21409** | [通用 Agent 无限卡死](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | Gemini CLI 在委托给通用 Agent 时无限挂起；即便是创建文件夹这样简单的操作也会卡住数小时 | 8 条评论，8 👍 |
| **#22745** | [AST 感知的文件读取、搜索及影响评估](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 追踪调查为代码导航提供精确方法边界、降低 Token 噪声的 AST 感知工具 | 7 条评论，1 👍 |
| **#21968** | [Gemini 不够充分地使用 skills 和子 Agent](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 模型未能自主利用自定义 skills（如 "gradle"、"git"），即使提供了描述；需要显式指令 | 7 条评论，0 👍 |
| **#22267** | [浏览器 Agent 忽略 settings.json 覆盖配置](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 浏览器 Agent 完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`） | 5 条评论，0 👍 |
| **#21983** | [浏览器子 Agent 在 Wayland 上失败](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 浏览器子 Agent 在 Wayland 显示服务器上运行失败 | 4 条评论，1 👍 |
| **#29003** | [安全：.env 文件注入 GIT_* 变量](https://github.com/google-gemini/gemini-cli/issues/29003) | P1 | 项目 `.env` 文件可注入 `GIT_EXEC_PATH`、`GIT_SSH_COMMAND`、`GIT_PROXY_COMMAND` 到内部 git 操作；当前 sanitize 仅过滤 `GIT_CONFIG_*` | 3 条评论，0 👍 |
| **#24246** | [工具数量 >128 时返回 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246) | P2 | 当可用工具超过约 400 个时 Gemini CLI 收到 400 API 错误；Agent 需要更智能的工具作用域策略 | 3 条评论，0 👍 |
| **#22186** | [get-shit-done output hook 导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186) | P1 | get-shit-done 输出完成时（在打印用户摘要期间）反复崩溃 | 3 条评论，0 👍 |

---

## 关键 PR 进展

| # | PR | 领域 | 概述 |
|---|-----|------|---------|
| **#30259** | [仅在 resumeChat 成功后恢复工作区目录](https://github.com/google-gemini/gemini-cli/pull/30259) | 核心 | 修复会话恢复失败时工作区目录残留在当前上下文的问题 |
| **#30253** | [在 models list 中准确上报输出 Token 上限](https://github.com/google-gemini/gemini-cli/pull/30253) | 核心 | 修正 `gemini models list` 对 Gemini 2.5/3 模型报告 65,536 输出 Token 而非硬编码的 8,192 |
| **#30258** | [当请求超时超过 300s 时缩放 undici bodyTimeout](https://github.com/google-gemini/gemini-cli/pull/30258) | 核心 | 允许对超过 5 分钟默认值的长时间运行请求配置正确的超时 |
| **#30159** | [添加 gemini-2.5-flash-image 模型配置](https://github.com/google-gemini/gemini-cli/pull/30159) | 扩展 | 注册内置图像生成模型，修复 #28445 |
| **#30157** | [在 safeJsonStringify 中仅将 true 循环替换为 [Circular]](https://github.com/google-gemini/gemini-cli/pull/30157) | 企业版 | 修复遥测 OpenTelemetry SDK 中跨数据点共享数组的问题 |
| **#30156** | [在 OTel SDK 就绪前缓冲聊天压缩事件](https://github.com/google-gemini/gemini-cli/pull/30156) | 企业版 | 防止在 SDK 初始化前触发的聊天压缩丢失遥测事件 |
| **#30154** | [进入 ACP 模式前刷新缓冲的 stdio](https://github.com/google-gemini/gemini-cli/pull/30154) | CLI | 确保 Hook 警告在 ACP 模式下写入 stderr；防止 SIGKILL/崩溃时丢失 |
| **#30043** | [向 Hook 暴露工具调用 ID](https://github.com/google-gemini/gemini-cli/pull/30043) | Agent | 在 BeforeTool/AfterTool Hook 输入中添加 `tool_call_id`；支持事件配对 |
| **#30033** | [在安全文件读取中容忍 Windows 路径 stat 返回 dev 0](https://github.com/google-gemini/gemini-cli/pull/30033) | 核心 | 修复 Node 22.12-22.16 下卷序列号不匹配导致的 Windows 文件读取失败 |
| **#30019** | [在工具输出脱敏期间保留会话历史](https://github.com/google-gemini/gemini-cli/pull/30019) | 核心 | 恢复包含脱敏工具输出的会话时保留用户首条提示词 |

---

## 热门讨论

*数据集未提供讨论数据。*

---

## 功能需求趋势

分析 Issue 追踪器可归纳出以下几个主要功能方向：

1. **子 Agent 智能化** — 多个 Issue（#21968、#18283、#18282、#22598）请求更好的自主子 Agent 调用、通过 `settings.json` 发现以及轨迹可见性/共享

2. **AST 感知工具链** — Epic #22745 配合支持 Issue（#22746、#19561）提出通过 grep→AST→语义搜索层级实现精准代码发现，以降低 Token 膨胀

3. **零依赖沙箱化** — #19873 建议利用模型原生 bash 亲和性结合 OS 级别沙箱，而非外部依赖

4. **持久化任务追踪** — #18836 请求以文件 CRUD 替代上下文内 WriteToDo，实现跨会话持久化

5. **非交互模式下的 Skill 激活** — PR #29546 解决了在交互式 UI 外部使用 `/skill-name` 的问题

6. **浏览器 Agent 韧性** — 多个 Issue（#22232、#22267、#21983）请求自动会话接管、锁恢复和 Wayland 支持

---

## 开发者痛点

| 痛点 | 证据 | 影响 |
|------------|----------|--------|
| **Agent 卡死** | #21409（通用 Agent）、#21983（Wayland 上的浏览器 Agent） | 工作流停滞；用户等待数小时后被迫取消 |
| **子 Agent 行为异常** | #22323（虚假成功）、#21968（利用不足）、#21763（上下文缺失） | 可靠性降低，调试困难 |
| **配置被忽略** | #22267（浏览器 Agent 忽略 `maxTurns`） | 配置行为不可预测 |
| **工具作用域问题** | #24246（工具数 >128 时 400 错误） | 阻碍大型工具生态系统的使用 |
| **安全漏洞** | #29003（env 注入） | 恶意 `.env` 可能被利用 |
| **会话持久性** | #30019、#30259（历史/工作区问题） | 恢复或取消时上下文丢失 |
| **破坏性操作** | #22672（git reset/--force 使用） | 可能导致意外数据丢失 |
| **Windows 兼容性** | #30033（路径 stat 问题） | Node 22.x 下 Windows 文件操作失败 |

---

*生成时间：2026-11-13 | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI community digest from English into Simplified Chinese. I need to:

1. Translate all the text content while keeping the markdown structure
2. Keep all URLs, code, numbers, version tags, issue references, file paths, etc. as-is
3. Use natural technical Chinese register
4. Output ONLY the translation without any preamble or explanation
5. No markdown fences around the whole output

Let me translate section by section:

---

# GitHub Copilot CLI 社区日报

**日期：** 2026-11-13
**仓库：** github.com/github/copilot-cli
**数据周期：** 最近 24 小时

---

## 今日要闻

Copilot CLI 团队发布了 **v1.0.111-0**，带来了重要的企业级安全增强，包括 Shell 权限规则的正则表达式支持以及允许在 CLI 主机上创建远程会话的新增标志。昨日的 **v1.0.110** 引入了实验性功能，为 git/ssh/sudo 密码提示提供掩码对话框。与此同时，社区反馈了多个关键问题，包括 Windows 身份验证、MCP OAuth 流程和模型上下文限制等方面，需要重点关注。

---

## 版本发布

### v1.0.111-0
**发布日期：** 2026-11-13

**新增功能：**
- 企业托管的 Shell、Bash 和 PowerShell 权限规则支持正则表达式 — 实现更精细的 Shell 执行策略控制
- `--host-allow-session-creation` 标志 — 允许远程客户端在 CLI 主机上创建单次启动的会话，而无需持久化设置

**改进：**
- 组织支持链接现在在策略配置界面中展示

### v1.0.110
**发布日期：** 2026-11-12


- **实验性功能：** Agent 命令现在通过掩码对话框响应 git、ssh 和 sudo 密码提示（使用 `/experimental on` 启用）
- 减少 Microsoft Entra 登录时不必要的错误弹窗，当组织账户可用时
- 改进了会话识别和播报的屏幕阅读器无障碍功能

---

## 热门 Issue

### 1. [Windows: MCP 登录后 Entra broker token 缓存仍为 0 字节](https://github.com

/github/copilot-cli/issues/5236)
**状态：** 开放 | **评论数：** 7 | ** 👍：** 1

通过 Microsoft Entra broker 为 HTTP MCP 服务器登录后，token 缓存文件保持为空，导致每个新进程都重新提示账户选择。这对于依赖 MCP 集成的 Windows 企业用户来说是一个显著的 UX 摩擦点。该问题可通过 `~/.copilot/entra-broker-accounts/<id>.bin` 保持为空而持续复现。

### 2. [Google Workspace MCP OAuth 因末尾斜杠 issuer 不匹配而失败](https://github.com/github/copilot-cli/issues/4606)
**状态：** 开放 | **评论数：** 5 | ** 👍：** 2

本地 HTTP MCP 认证无法用于 Google 的官方 Workspace 端点，因为受保护资源元数据声明 `https://accounts.google.com/` 包含末尾斜杠，但客户端在 issuer 验证时未进行规范化处理。这阻止了 Google Workspace 用户的采用。

### 3. [策略配置的 enabledPlugins 仅安装但从不激活](https://github.com/github/copilot-cli/issues/4837)
**状态：** 开放 | **评论数：** 3 | ** 👍：** 2

通过策略配置 `enabledPlugins` 时，插件会安装到磁盘但 `config.json` 中被标记为 `"enabled": false`，导致无法激活。通过设备/MDM 和仓库级设置可复现此问题。企业部署的插件管理功能基本失效。

### 4. [回归问题：当工具定义超过约 260K tokens 时，Sol 模型在首次提示前即被拒绝](https://github.com/github/copilot-cli/issues/5151)
**状态：** 开放 | **评论数：** 2 | ** 👍：** 0

自 2026-10-14 起，默认上下文层级的 `gpt-5.6-sol` 和 `gpt-6.1-sol` 在接受任何用户输入前就因 `compaction_static_context_blocked` 而失败。具有丰富 MCP 工具定义的用户完全无法使用这些模型。

### 5. [请求：为 providers.json 发布 JSON Schema](https://github.com/github/copilot-cli/issues/5287)
**状态：** 开放 | **评论数：** 2 | ** 👍：** 0

用户配置 BYOK (Bring Your Own Key) 提供商时，缺乏可用配置参数的文档。发布 JSON Schema 可实现 IDE 自动完成、验证和提供商选项的发现。

### 6. [功能请求：将现有聊天或会话附加到项目](https://github.com/github/copilot-cli/issues/4922)
**状态：** 开放 | **评论数：** 2 | ** 👍：** 0

通用聊天和项目会话被分开处理，创建后无法关联。用户必须重新开始，丢失上下文。对于中途发现需要项目级功能的用户，这破坏了工作流程的连续性。

### 7. [1.0.109 中长时间交互会话期间 OOM 崩溃](https://github.com/github/copilot-cli/issues/5435)
**状态：** 开放 | **评论数：** 1 | ** 👍：** 0

今日的新 Issue 报告长时间交互会话期间出现递归 OOM 崩溃。崩溃恢复后，先前的后台 agent 无法从恢复的会话中访问，加剧了数据丢失。

### 8. [长时间运行的 agent 会话耗尽事件存储而 CLI 保持活跃](https://github.com/github/copilot-cli/issues/4467)
**状态：** 开放 | **评论数：** 1 | ** 👍：** 1

生成大量子 agent 的会话最终会耗尽远程事件存储，导致会话显示为不活跃或已取消，尽管 CLI 进程仍然存活。这造成了一种静默失败模式，工作可能会丢失。

### 9. [VSCode Server 中无法将 Copilot CLI 输出复制到剪贴板](https://github.com/github/copilot-cli/issues/3996)
**状态：** 开放 | **评论数：** 1 | ** 👍：** 0

在基于浏览器的 VSCode Server 环境中，"复制到剪贴板"静默失败，无备选方案。这对于在云端或远程工作区环境中开发的用户影响尤为显著。

### 10. [ACP 模式在满足有效条件时从不附加到 IDE](https://github.com/github/copilot-cli/issues/5447)
**状态：** 开放 | **评论数：** 0 | ** 👍：** 0

`copilot --acp` 完全跳过 `~/.copilot/ide` 发现过程，因此 ACP 会话缺乏 IDE MCP 服务器连接，即使从编辑器的集成终端启动。交互式 CLI 在相同条件下约 1 秒内即可完成附加。

---

## 关键 PR 进展

过去 24 小时内无 PR 更新。团队似乎专注于 v1.0.110/111 发布后的 Issue 分类和稳定性工作。

---

## 功能请求趋势

对开放 Issue 和近期活动的分析揭示了这些主要功能方向：

| 趋势 | 证据 |
|-------|----------|
| **MCP 生态系统成熟度** | OAuth 认证失败 (#4606)、content/structuredContent 双暴露 (#4515)、工具缓存增长 (#5446)、委托子认证失败 (#5437) |
| **企业配置与策略** | 正则权限规则（已发布）、enabledPlugins 激活缺陷 (#4837)、providers.json schema (#5287) |
| **会话与内存管理** | OOM 崩溃 (#5435)、事件存储耗尽 (#4467)、worktree 堆积 (#5443)、MCP 工具缓存膨胀 (#5446) |
| **模型灵活性与选择** | Sol 模型回归 (#5151)、ACP 会话模型不匹配 (#5363)、全局模型持久化缺陷 (#5445) |
| **IDE 集成对等性** | ACP IDE 附加 (#5447)、VSCode Server 剪贴板 (#3996)、Vim 模式工具调用 (#5442) |
| **Agent 编排** | 子会话回复路由 (#5444)、exit_plan_mode 批准后子 agent 工具继承 (#5243) |

---

## 开发者痛点

### 身份验证与会话管理
- **持续摩擦：** Entra token 缓存失败导致反复登录 (#5236)；macOS 上"始终允许"后 OAuth 提示仍然出现 (#5434)
- **ACP 缺陷：** ACP 模式绕过 IDE 发现 (#5447)、报告错误的会话模型 (#5363)

### MCP 服务器可靠性
- Google Workspace OAuth 因末尾斜杠不匹配被阻止 (#4606)
- HTTP-OAuth MCP 服务器在委托子任务中失败 (#5437)
- 钥匙串提示创建重复条目 (#5434)

### 资源消耗
- 长时间会话触发 OOM 崩溃 (#5435) 或耗尽事件存储 (#4467)
- 临时工作区导致 MCP 工具缓存膨胀 (#5446)
- Git worktree 在非活跃会话中堆积 (#5443)

### 模型上下文限制
- 工具定义超过约 260K tokens 时 Sol 模型拒绝提示 (#5151)
- 全局模型选择不会持久化 (#5445)

### 插件与扩展系统
- 策略驱动的插件安装但不激活 (#4837)
- Agent Plugins 1.0 的 `.instructions.md` 和 `applyTo` frontmatter 被静默忽略 (#5440)

### 错误可见性
- 结构化 403 错误被掩盖为通用认证失败 (#5436)
- 报告后台 bash 命令停止时无匹配停止调用 (#5448)

---

**日报结束**

*数据来源：github.com/github/copilot-cli，2026-11-13*</think>



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content into Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, bold/italic, etc.)
3. Keep URLs, issue/PR numbers, project names, version tags, file paths as-is
4. Use natural technical Chinese register

Let me translate section by section:

---

# OpenCode 社区日报

**日期：** 2026 年 11 月 13 日
**来源：** github.com/anomalyco/opencode

---

## 1. 今日要点

OpenCode 社区今天在 v2 稳定性方面活动频繁，多个关于对话中断和桌面客户端崩溃的报告正在调查中。团队合并了一项重要新功能，为多模态模型启用音频/视频附件支持，而贡献者们正在积极完善面向国际用户的中文文档。一位新的"顾问"工具提案允许会话模型在工作过程中咨询辅助模型。

过去 24 小时内**未发布新版本**。

---

## 2. 版本发布

**过去 24 小时内无版本发布。**

---

## 3. 热门 Issue

### Issue #785 — 请求禁用流式模式 (已关闭)
**链接：** https://github.com/anomalyco/opencode/issues/785 | 37 条评论，40 个 👍

用户请求提供完全禁用流式模式的方法。这对某些不支持流式传输的代理提供商（如 Credal OpenAI Proxy）的用户至关重要。该 issue 以 40 个赞同位居社区关注榜首，表明对非流式操作模式有广泛需求。

### Issue #49742 — CLI v2.0.8 中缺少消息时间戳选项
**链接：** https://github.com/anomalyco/opencode/issues/49742 | 13 条评论，10 个 👍


v1.18.31 回归问题浮现：v2.0.8 版本中通过 Ctrl+P 切换消息时间戳的功能已消失。这一可用性缺陷正推动用户回退到旧版本，代表着严重的用户体验倒退。

### Issue #53756 — Bedrock 应用推理配置文件 ARN Nova 格式问题
**链接：** https://github.com/anomalyco/opencode/issues/53756 | 10 条评论

使用 Bedrock 应用推理配置文件 ARN 调用 Claude 模型时，系统错误地生成了 Amazon Nova 格式的 effort 变体。这导致在 `reasoningConfig` 上触发 API 400 错误，破坏了推理配置文件与 Claude 模型的兼容性——这是一个关键的集成缺陷。

桌面 TUI 提示符页脚在斜杠命令通过 frontmatter 设置不同模型时，无法正确反映模型切换。虽然 API 和元数据确认了模型已更改，但界面仍持续显示旧模型名称，造成用户对实际运行模型的混淆。当规则解析为 `ask` 且无用户在场批准时，会话可能无限期挂起。请求为权限对话框添加超时机制，防止被遗弃的会话占用资源。

v2 中存在严重的回归问题：对话静默中断且无请求者标识，存储和流之间信息不一致，关键结算字段在版本间丢失，严重影响生产环境的可靠性。工具名称在规范化后发生冲突，具有规范化字符差异的名称（如特殊字符→下划线）因注册表使用 `effectiveName` 作为键而静默冲突，导致工具选择行为不可预测。

GitLab `duo-workflow-*` 模型在纯文本模式下工作正常，但尝试调用工具时静默失败，相比 v1 实现，`toolExecutor`、`approvalHandler` 和 `sessionConfig` 的连接似乎缺失。`opencode_console` MCP 服务器返回 403 错误，导致每约 6 秒循环重新连接，持续数分钟而不向用户显示可操作的错误消息。

自动会话压缩后的摘要占用大量屏幕空间，用户请求默认折叠以减少视觉干扰，可选择需要时展开。新的 PR #54496 为多模态模型启用音频和视频附件功能，这是重要的功能交付。

`read` 工具现在支持音频和视频附件，解决了 issues #54491、#54049 和 #10531，大大扩展了媒体处理能力。

PR #63637 实现了一个类似 Claude Code 的"顾问"工具，允许会话模型在工作过程中咨询用户选择的第二个模型作为指导，关闭 issue #63631。PR #63002 将桌面应用内浏览器从签名的内存面板（每 5 个工具调用失败 1 次）转变为持久化、加密的配置文件，支持导入的登录状态、Chrome 扩展和可用的面板内链接。PR #62743 为模型提供商添加了 Unix 套接字连接的传输设置。

现在可以消除连接到 llama.cpp、Ollama 或 vLLM 等本地服务器时对 socat 桥接的需求。PR #62576 修复了 `.git/opencode` 项目 ID 文件中的 NUL 或控制字节被错误采用为有效项目 ID 的 bug，关闭了 issue #53991。PR #63645 优化了 OAuth 令牌刷新，仅在令牌距过期 5 分钟内时才触发，减少了可能触发速率限制的不必要刷新调用。

PR #63590 通过确保插件可以在提示钩子中通过 `event.metadata` 在用户消息上存储数据，修复了 issue #63252，恢复了在元数据字段重构后丢失的功能。PR #60895 在 `opencode session list` 中添加了带有游标分页的 `--all` 标志，当前按当前目录的项目进行过滤，此更改允许查看所有项目中的会话。

PR #63647 重构了 shell 工具，为完成的命令返回 `{ output, exitCode, wallTimeSeconds }`，为运行的后台作业返回 shell ID 和空退出代码，提高了可观察性。PR #63612 确保命令 `/clear` 和 `/exit` 现在请求服务器卸载本地模型，在会话重置后释放 GPU/CPU 资源而不是让模型保持加载状态。PR #58030、#58029、#57674 是来自贡献者 Kissshot-2003 的多个文档 PR，完成了键绑定、权限、故障排除页面和 Windows Terminal 键绑定注意事项的缺失中文翻译。

PR #63653 更新了文档，解释了如何启动子会话以及它们何时报告回来，阐明了 API 规范中的 `parentID` 字段。

从 issue 和 PR 分析来看，以下功能方向主导了社区请求：提供商灵活性方面有高需求，包括非流式模式、Unix 套接字传输、更多提供商集成（EVREN LLM）和基于订阅的 API 访问；UI/UX 方面有高需求，包括可折叠压缩摘要、RTL 语言支持、消息时间戳和深色主题二维码修复；桌面改进方面有中等需求，包括企业部署的 MSI 安装程序、持久化浏览器配置文件和稳定的多平台行为。

模型/工具控制方面有中等需求，包括每个会话的可用工具、顾问咨询工具和权限对话框的超时处理；多模态扩展方面有中等需求，包括音频/视频附件支持（已交付）和 Wayland 上的剪贴板图像粘贴；会话管理方面有中等需求，包括多项目会话列表、项目删除和按使用量自动平衡模型。

关键稳定性问题包括 v2 可靠性问题导致对话无明确原因中止、Windows x64 上的桌面窗口崩溃影响生产使用、长代理对话上的 ECONNRESET 错误以及大型工作树中的 Git 轮询 CPU 饱和。集成方面的挑战涉及 GitLab duo-workflow 工具调用静默失败、MCP 控制台 403 与静默重连循环以及 Bedrock 推理配置文件格式不匹配导致的提供商兼容性问题。

可用性摩擦包括 v1→v2 回归中的功能回归、TUI 页脚中的模型显示过时、规范化后的工具名称冲突以及阻止某些代理用户的流式模式不兼容性。文档方面的空白包括中文文档之前不完整现已解决，以及 Windows Terminal 键绑定限制现已记录的未记录问题。

日报结束

生成日期：2026-11-13 | 数据窗口：过去 24 小时

仅输出翻译内容，不添加任何解释，使用自然技术中文作为中文开发者通讯的用语。
</think>


# OpenCode 社区日报

**日期：** 2026 年 11 月 13 日
**来源：** github.com/anomalyco/opencode

---

## 1. 今日要点

OpenCode 社区今天在 v2 稳定性方面活动频繁，多个关于对话中断和桌面客户端崩溃的报告正在调查中。团队合并了一项重要新功能，为多模态模型启用音频/视频附件支持，而贡献者们正在积极完善面向国际用户的中文文档。一位新的"顾问"工具提案允许会话模型在工作过程中咨询辅助模型。

过去 24 小时内**未发布新版本**。

---

## 2. 版本发布

**过去 24 小时内无版本发布。**

---

## 3. 热门 Issue

### Issue #785 — 请求禁用流式模式 (已关闭)
**链接：** https://github.com/anomalyco/opencode/issues/785 | 37 条评论，40 个 👍

用户请求提供完全禁用流式模式的方法。这对某些不支持流式传输的代理提供商（如 Credal OpenAI Proxy）的用户至关重要。该 issue 以 40 个赞同位居社区关注榜首，表明对非流式操作模式有广泛需求。

### Issue #49742 — CLI v2.0.8 中缺少消息时间戳选项
**链接：** https://github.com/anomalyco/opencode/issues/49742 | 13 条评论，10 个 👍

v1.18.31 存在的一个功能退化：v2.0.8 中无法通过 Ctrl+P 切换消息时间戳显示。这一可用性缺陷正推动用户回退到旧版本，代表着严重的用户体验倒退。

### Issue #53756 — Bedrock 应用推理配置文件 ARN Nova 格式问题
**链接：** https://github.com/anomalyco/opencode/issues/53756 | 10 条评论

使用 Bedrock 应用推理配置文件 ARN 调用 Claude 模型时，OpenCode 会生成 Amazon Nova 格式的 effort 变体，导致 `reasoningConfig` 触发 API 400 错误。这破坏了推理配置文件与 Claude 模型的兼容性——这是一个严重的集成缺陷。

### Issue #63506 — 桌面客户端提示区页脚显示过时模型名称
**链接：** https://github.com/anomalyco/opencode/issues/63506 | 6 条评论

当斜杠命令通过 frontmatter 设置不同模型时，模型切换正确执行（API 和元数据均已确认），但 TUI 提示区的页脚仍继续显示旧模型名称。这种视觉不一致可能使用户对当前运行的模型产生困惑。

### Issue #61504 — 权限请求超时机制
**链接：** https://github.com/anomalyco/opencode/issues/61504 | 6 条评论，1 个 👍

当规则解析为 `ask` 且无用户在场批准时，会话可能无限期挂起。功能请求为权限对话框添加超时功能，以防止废弃会话阻塞资源。

### Issue #63632 — 对话意外中止，无请求方（v2 严重问题）
**链接：** https://github.com/anomalyco/opencode/issues/63506 | 5 条评论

v2 的一个严重回归问题：对话静默中止，未标识请求方。store 和 stream 之间存在不一致，关键结算字段在版本间丢失。这影响了生产环境的可靠性。

### Issue #52420 — 规范化后工具名称冲突
**链接：** https://github.com/anomalyco/opencode/issues/52420 | 5 条评论

名称仅在规范化字符上有差异的工具（如特殊字符 → 下划线）会静默冲突，因为注册表使用 `effectiveName` 作为键。这可能导致不可预测的工具选择行为。

### Issue #63212 — GitLab Duo Workflow 工具在 v2 中无法工作
**链接：** https://github.com/anomalyco/opencode/issues/63212 | 4 条评论

在 v2 中，GitLab `duo-workflow-*` 模型在纯文本模式下工作正常，但尝试调用工具时静默失败。相比 v1 实现，`toolExecutor`、`approvalHandler` 和 `sessionConfig` 的连接似乎缺失。

### Issue #59806 — MCP 控制台返回 403 禁止访问错误
**链接：** https://github.com/anomalyco/opencode/issues/59806 | 4 条评论

`opencode_console` MCP 服务器在访问工作区时返回 403 错误，导致每约 6 秒循环重新连接，持续数分钟而不向用户显示可操作的错误消息。

### Issue #48596 — 压缩摘要默认折叠
**链接：** https://github.com/anomalyco/opencode/issues/48596 | 5 条评论，4 个 👍

自动会话压缩后的摘要占用大量屏幕空间。用户请求默认折叠以减少视觉干扰，并提供按需展开的选项。

---

## 4. 重要 PR 进展

### PR #54496 — 为多模态模型支持音频和视频附件 (已关闭)
**链接：** https://github.com/anomalyco/opencode/pull/54496

重要功能交付：`read` 工具现在支持多模态模型的音频和视频附件。同时关闭了 issues #54491、#54049 和 #10531，大大扩展了媒体处理能力。

### PR #63637 — 会话模型咨询的顾问工具
**链接：** https://github.com/anomalyco/opencode/pull/63637 | 进行中

实现类似 Claude Code 的"顾问"工具，允许会话模型在工作过程中咨询用户选择的第二个模型作为指导。关闭 issue #63631。

### PR #63002 — 持久化浏览器配置文件、扩展及代理工具修复
**链接：** https://github.com/anomalyco/opencode/pull/63002 | 进行中

将桌面应用内浏览器从签名的内存面板（每 5 个工具调用失败 1 次）转变为持久化、加密的配置文件，支持导入的登录状态、Chrome 扩展和可用的面板内链接。

### PR #62743 — 通过 Unix 套接字连接模型提供商
**链接：** https://github.com/anomalyco/opencode/pull/62743 | 进行中

添加模型提供商 Unix 套接字连接的传输设置。消除了连接 llama.cpp、Ollama 或 vLLM 等本地服务器时对 `socat` 桥接的需求。

### PR #62576 — 忽略损坏的缓存项目 ID
**链接：** https://github.com/anomalyco/opencode/pull/62576 | 进行中

修复了 `.git/opencode` 项目 ID 文件中的 NUL 或控制字节被错误采用为有效项目 ID 的 bug。关闭 issue #53991。

### PR #63645 — 仅在令牌临近过期时刷新提供商 OAuth 令牌
**链接：** https://github.com/anomalyco/opencode/pull/63645 | 进行中

优化 OAuth 令牌刷新逻辑，仅在令牌距过期 5 分钟内时才触发，减少可能触发速率限制的不必要刷新调用。关闭 issue #50759。

### PR #63590 — 向会话请求钩子传递存储的消息元数据
**链接：** https://github.com/anomalyco/opencode/pull/63590 | 已关闭

通过确保插件可在提示钩子中通过 `event.metadata` 在用户消息上存储数据，修复了 issue #63252。恢复了元数据字段重构后丢失的功能。

### PR #60895 — 为会话列表添加 --all 标志
**链接：** https://github.com/anomalyco/opencode/pull/60895 | 进行中

为 `opencode session list` 添加带有游标分页的 `--all` 标志。当前按当前目录的项目过滤；此更改允许跨所有项目查看会话。

### PR #63647 — 暴露 Shell 退出码、耗时和日志路径
**链接：** https://github.com/anomalyco/opencode/pull/63647 | 进行中

重构 shell 工具，为完成的命令返回 `{ output, exitCode, wallTimeSeconds }`，为运行中的后台作业返回 shell ID 和空退出码，提升可观测性。

### PR #63612 — 在 /clear 和 /exit 时卸载本地模型
**链接：** https://github.com/anomalyco/opencode/pull/63612 | 进行中

命令 `/clear` 和 `/exit` 现在请求服务器卸载本地模型，在会话重置后释放 GPU/CPU 资源，而不是让模型保持加载状态。

### PR #58030 / #58029 / #57674 — 中文文档补全 (已关闭)
**链接：** https://github.com/anomalyco/opencode/pull/58030 | https://github.com/anomalyco/opencode/pull/58029 | https://github.com/anomalyco/opencode/pull/57674

来自贡献者 Kissshot-2003 的多个文档 PR，补全了键绑定、权限、故障排除页面和 Windows Terminal 键绑定注意事项的缺失中文翻译。

### PR #63653 — 记录会话创建时的 parentID (已关闭)
**链接：** https://github.com/anomalyco/opencode/pull/63653

更新文档，说明如何启动子会话以及它们何时报告回来，阐明了 API 规范中的 `parentID` 字段。

---

## 5. 热门讨论

*数据源中未提供讨论数据。*

---

## 6. 功能需求趋势

基于 issue 和 PR 分析，以下功能方向主导了社区需求：

| 类别 | 热度 | 描述 |
|----------|----------|-------------|
| **提供商灵活性** | 高 | 非流式模式、Unix 套接字传输、更多提供商集成（EVREN LLM）、基于订阅的 API 访问 |
| **UI/UX 打磨** | 高 | 可折叠压缩摘要、RTL 语言支持、消息时间戳、深色主题二维码修复 |
| **桌面端改进** | 中 | 企业部署的 MSI 安装程序、持久化浏览器配置文件、稳定的多平台行为 |
| **模型/工具控制** | 中 | 每个会话的工具可用性、顾问咨询工具、权限对话框超时处理 |
| **多模态扩展** | 中 | 音频/视频附件支持（已交付）、Wayland 剪贴板图片粘贴 |
| **会话管理** | 中 | 跨项目会话列表、项目删除、按使用量自动平衡模型 |

---

## 7. 开发者痛点

**关键稳定性问题：**
- **对话无明确原因中止** (#63632) — v2 可靠性问题
- **Windows x64 桌面窗口崩溃** (#63001) — 影响生产使用
- **长对话轮次的 ECONNRESET** (#60940) — 影响扩展操作
- **大型工作树中 Git 轮询导致 CPU 饱和** (#62948) — 性能问题

**集成缺口：**
- **GitLab duo-workflow 工具调用静默失败** (#63212) — 集成损坏
- **MCP 控制台 403 伴随静默重连循环** (#59806) — 错误信息暴露不足
- **Bedrock 推理配置文件格式不匹配** (#53756) — 提供商兼容性

**可用性摩擦：**
- **功能退化：时间戳切换缺失** (#49742) — v1→v2 回归
- **流式模式不兼容** (#785) — 阻止部分代理用户使用
- **TUI 页脚显示过时模型** (#63506) — 视觉不一致
- **规范化后工具名称冲突** (#52420) — 不可预测的行为

**文档缺口：**
- 中文文档之前不完整（现已补全）
- Windows Terminal 键绑定限制之前未记录（现已记录）

---

*日报结束*

*生成日期：2026-11-13 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this technical report/digest about the pi project from English to Simplified Chinese. Let me go through it carefully:

1. Preserve all Markdown structure exactly
2. Keep URLs, link references, code, numbers, dates verbatim
3. Keep project names, repository slugs, issue numbers as-is
4. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Header**: "Pi Community Digest — 2026-11-13" → "Pi 社区日报 — 2026-11-13"

**Today's Highlights**: "Today's Highlights" → "今日要点"

Content: The pi project saw significant activity... Let me translate naturally.

"The pi project saw significant activity on the TUI layer this cycle—multiple fixes landed to prevent direct terminal writes from corrupting the display, and an overlay bug that left holes over terminal images was finally resolved."
→ "本期 pi 项目在 TUI 层面上活动频繁——多项修复落地解决了直接写入终端导致显示损坏的问题，覆盖层在终端图片上留下空洞的顽疾也终于被解决。"

"On the AI provider side, GitHub Copilot's Gemini models now correctly receive reasoning effort parameters, and Google Gemini adapters gained custom fetch support."
→ "AI 接入方方面，GitHub Copilot 的 Gemini 模型现在能正确接收 reasoning effort 参数，Google Gemini 适配器也获得了自定义 fetch 的支持。"


A serious durability problem surfaced with v1.5.2, where uncaught `AbortError` exceptions during stream aborts were causing crashes. The translation should capture this as a notable durability concern that emerged during this release cycle.

**Releases**: "Releases" → "版本发布", "No new releases in the last 24 hours" → "过去 24 小时无新版本", "The last stable release remains v1.5.2" → "最新稳定版仍为 v1.5.2", though users should be aware of the crash issue noted in [#12118]. "Why It Matters" → "重要性", "Community Reaction" → "社区反响"

For the table, I need to translate issue titles while keeping the `#2870` numbers intact. The title "[bug] Follow XDG Base Directory" becomes "[bug] 遵循 XDG 基础目录规范". Then "[OPEN] OSC 52 copy in fullscreen TUI swallowed by tmux" translates to "[OPEN] 全屏 TUI 中 OSC 52 复制内容被 tmux 吞掉", and "[prio:p0] github-copilot" continues with the priority flag.

For the remaining issues, I'm working through "[prio:p0] github-copilot: Gemini models never get reasoning_effort" which becomes "[prio:p0] github-copilot: Gemini 模型始终收不到 reasoning_effort", then "[durable] pi-durable: permanently delete a conversation" as "[durable] pi-durable: 永久删除对话", and "[untriaged] Codex: Use file references for image-heavy tool results" as "[untriaged] Codex: 对图片密集型工具结果使用文件引用". The next entry "[prio:p0] bash temp-file stream errors still crash the whole process" translates to "[prio:p0] bash 临时文件流错误仍会导致整个进程崩溃".

Continuing with "[bug, untriaged] TUI after /reload does not follows custom tool's renderCall/renderResult" → "[bug, untriaged] /reload 后 TUI 不遵循自定义工具的 renderCall/renderResult", "[untriaged] v1.5.2 exits with uncaught AbortError" → "[untriaged] v1.5.2 退出时抛出未捕获的 AbortError", and "[bug] find: path globs match directories above the search path" → "[bug] find: 路径通配符匹配到了搜索路径上层的目录". For the final item "[bug] /login llama.cpp connection store doesn't persist across sessions" → "[bug] /login llama.cpp 连接存储在会话间不持久化".

Moving through more issues now: "[untriaged] Proposal: bounded retry for Gemini MALFORMED_FUNCTION_CALL" becomes "[untriaged] 提案：为 Gemini MALFORMED_FUNCTION_CALL 增加有界重试", "[bug, no-action] Request-size rejections from a proxy leave the session resending the same oversized body" translates to "[bug, no-action] 代理拒绝请求大小导致会话重复发送相同超大型请求体", and "[bug, fix-available] /resume selects an unrelated session after deletion" → "[bug, fix-available] /resume 在删除后选择了无关会话".

Now I need to handle the key sections: "Key PR Progress" for PR 进度, "Hot Discussions" for 热点讨论, "Feature Request Trends" for 功能需求趋势, and "Developer Pain Points" for 开发者痛点. Let me work through these systematically with proper technical Chinese terminology. 码模式下 Promise.allSettled 保留嵌套 Error 信息，forceSystemPrompt 投影正确性验证，批量编辑时复用整个文件的规范化逻辑，这些功能需求反映了工具调用链路的可靠性改进。开发者面临的核心问题包括 Bash 临时文件流异常时的进程崩溃，以及 v1.5.2 版本中 AbortError 的处理不当。

信号终止的 exec 调用被错误地报告为成功而非异常状态；VCS 目录中的噪音数据干扰工具搜索结果；TUI 刷新时直接写入终端导致界面损坏；Google MCP 的 OAuth 刷新令牌机制不完整；代理请求体大小限制引发的循环重试问题。

会话删除后 /resume 选择器跳转到无关会话，这也需要解决。发布说明部分显示过去 24 小时无新版本，最后一个稳定版本仍为 v1.5.2，但存在已知的崩溃问题需要关注。接下来的内容涵盖热门问题的表格数据。

Linux 用户期望 `$XDG_CONFIG_HOME` 合规，但当前行为在 `$HOME` 中生成配置文件和状态目录，违反了既定标准并分散了用户期望。这是该摘要中参与度最高的讨论。14 条评论，7 个赞同。复制时选择写入原始 OSC 52 转义序列，tmux 会拦截这些序列，导致在没有显示服务器的远程 SSH 用户中剪贴板集成失效。pi 通过 `COLORTERM` 检测真彩色支持，但 GNU screen 传递 `COLORTERM=truecolor` 时实际上并不支持 24 位色彩。

这导致 TUI 渲染时无色彩显示。Bash 执行期间磁盘空间或访问权限错误会导致进程崩溃且无恢复，在资源受限的环境中影响运行流程。图像存储目前与提供商负载耦合，导致冗余的 base64 传输，使用 `file_id` 引用解耦可减少带宽并提高性能。作者有本地原型。从 `/tmp/src/app` 的 `find src/**/*.ts` 命令不正确地返回父目录中的文件，因为 `fd --full-path` 匹配绝对路径。

运行完成后，当读取工具流中止时，未捕获的 `AbortError` 会终止整个进程。无需扩展即可重现——用 `pi -ne` 即可触发。工具在 `session_start` 上注册后由于加载顺序问题在 `/reload` 后无法正确渲染，破坏了 MCP 扩展的可见性。关键 PR 进展表格显示正在进行的项目，如 [#12110](https://github.com/earendil-works/pi/issues/12110) 和其他相关链接。

为 Copilot Gemini 模型（`gemini-4-argon`、`gemini-3.8-flash`、`gemini-4-carbon`）启用 `--thinking` 标志，解决了 [#12019](https://github.com/earendil-works/pi/issues/12019) 中的问题。修复被中断的辅助文本复制问题——即中间工具调用或中间推理期间的最后一条消息没有文本内容——对应 [#12119](https://github.com/earendil-works/pi/issues/12119)。清理在启动期间泄漏到 TUI 后台的 `console.error` 调用，与 [#11264](https://github.com/earendil-works/pi/issues/11264) 相关。确保运行时诊断（警告、错误）在 `/new`、`/resume`、`/fork` 和会话切换时显示，而不是仅在初始启动时显示。

[#12109](https://github.com/earendil-works/pi/pull/12109) 解决了长期存在的 TUI 缺陷，即在 Kitty/iTerm2 图像上绘制的覆盖层留下视觉空洞。 [#12103](https://github.com/earendil-works/pi/pull/12103) 启用了通过自定义 HTTP 代理路由 Gemini 请求，用于 URL 检查和重试头处理。 [#12089](https://github.com/earendil-works/pi/pull/12089) 确保信号终止的 pi.exec 命令被正确报告为失败。

之前，SIGSEGV、SIGKILL 和超时退出返回退出代码 0（成功），现在这些被正确报告为失败。 `--hidden` 标志导致搜索包含 `.git/` 内容（例如，15 个 TODO 匹配中有 18 个来自 reflog），现在排除 `.git`、`.svn`、`.hg`。Token Plan 提供商迁移到当前 QwenCloud 网关。主要 TUI 稳定性修复解决了 stdout/stderr 写入时的显示状态损坏问题。

在 `/reload` 后工具注册失败是因为加载顺序问题，破坏了 MCP 扩展可见性。关键 PR 包括为 Copilot Gemini 模型启用 `--thinking` 标志、修复复制粘贴中断工具调用的助手文本、清理 TUI 启动时的 `console.error` 调用，以及确保会话切换时显示运行时诊断。

后续修复涵盖 Gemini 请求的代理路由、信号终止命令的正确错误报告、VCS 目录排除、TUI 显示损坏修复和 Token Plan 迁移。

功能需求集中在持久化层（对话删除、llama.cpp 连接持久化）、终端适配（XDG 规范、tmux OSC 52、screen 真彩色）和 AI 接入能力（reasoning effort、自定义 fetch、命名空间隔离 MCP 工具搜索）。

此外还涉及扩展架构（provider 注册可见性、OAuth 渲染、Codex 图像引用解耦）和工具质量（Error 保留、forceSystemPrompt 投影、批量编辑规范化）。

开发者在处理信号终止的 exec 调用时遇到问题，被错误地报告为成功而非异常状态。

VCS 噪音干扰工具搜索，TUI 刷新时直接写入终端导致界面损坏，Google MCP 的 OAuth 刷新令牌机制不完整，代理请求大小限制引发循环重试，会话删除后 /resume 选择器跳转到无关会话。
</think>


# Pi 社区日报 — 2026-11-13

## 今日要点

本期 pi 项目在 TUI 层面上活动频繁——多项修复落地解决了直接写入终端导致显示损坏的问题，覆盖层在终端图片上留下空洞的顽疾也终于被解决。在 AI 接入方方面，GitHub Copilot 的 Gemini 模型现在能正确接收 reasoning effort 参数，Google Gemini 适配器也获得了自定义 fetch 的支持。值得注意的是，v1.5.2 出现了一个值得关注的问题——流中止时的未捕获 `AbortError` 会导致程序崩溃。

---

## 版本发布

**过去 24 小时无新版本。** 最新稳定版仍为 v1.5.2，但用户应注意 [#12118](#12118) 中提到的崩溃问题。

---

## 热点 Issue

| # | 标题 | 优先级 | 为何重要 | 社区反响 |
|---|-------|----------|----------------|-------------------|
| [#2870](https://github.com/earendil-works/pi/issues/2870) | 遵循 XDG 基础目录规范 | 高 (75 👍) | Linux 用户期望 `$XDG_CONFIG_HOME` 合规。当前行为会在 `$HOME` 下生成 config 和 state 目录，违反既定标准并使用户预期碎片化。 | 28 条评论，75 👍——本期最高互动量。已关闭；修复方案预期落地中。 |
| [#10628](https://github.com/earendil-works/pi/issues/10628) | 全屏 TUI 中 OSC 52 复制内容被 tmux 吞掉 | 中 | 复制选中内容时写入原始 OSC 52 转义序列，tmux 会拦截这些序列，导致在没有显示服务器的 headless SSH 用户中剪贴板集成失效。 | 14 条评论，7 👍。 |
| [#12019](https://github.com/earendil-works/pi/issues/12019) | GitHub Copilot Gemini 模型始终收不到 reasoning_effort | P0 | `--thinking` 标志对 Copilot 的 Gemini 模型静默失效，因为 catalog 硬编码了 `supportsReasoningEffort: false`。影响所有扩展思考工作流。 | 9 条评论。已在 [#12110](https://github.com/earendil-works/pi/pull/12110) 中修复。 |
| [#11026](https://github.com/earendil-works/pi/issues/11026) | pi-durable: 永久删除对话 | 持久化跟踪 | 当前没有 API 可以从持久化存储中清除对话。累积大量会话的用户没有除手动操作存储外的清理路径。 | 8 条评论，6 👍。 |
| [#10618](https://github.com/earendil-works/pi/issues/10618) | GNU screen: 继承的 COLORTERM 覆盖了屏幕保护 | 中 | pi 通过 `COLORTERM` 检测真彩色支持，但 GNU screen 会透传 `COLORTERM=truecolor` 而实际并不支持 24 位色彩，导致 TUI 渲染无色彩。 | 7 条评论。 |
| [#10585](https://github.com/earendil-works/pi/issues/10585) | Bash 临时文件流错误导致整个进程崩溃 | P0 | ENOSPC 或 EACCES 错误在 bash 执行期间会导致进程崩溃且无恢复，丢失进行中的运行。在资源受限环境中影响严重。 | 4 条评论。 |
| [#8617](https://github.com/earendil-works/pi/issues/8617) | Codex: 对图片密集型工具结果使用文件引用 | 增强功能 | 图片存储当前与 provider 负载耦合，导致冗余的 base64 传输。使用 `file_id` 引用解耦可减少带宽并提升性能。 | 6 条评论。作者已有本地原型。 |
| [#12066](https://github.com/earendil-works/pi/issues/12066) | find: 路径通配符匹配到了搜索路径上层的目录 | Bug | 从 `/tmp/src/app` 执行 `find src/**/*.ts` 时错误地返回父目录中的文件，因为 `fd --full-path` 匹配的是绝对路径。 | 3 条评论。已在 [#12116](https://github.com/earendil-works/pi/pull/12116) 中修复。 |
| [#12118](https://github.com/earendil-works/pi/issues/12118) | v1.5.2 退出时抛出未捕获的 AbortError（read 工具流被中止时） | 严重 | 运行完成后，如果 read 工具流被中止，一个未捕获的 `AbortError` 会杀死整个进程。无需扩展——用 `pi -ne` 即可复现。 | 3 条评论。同日报告（2026-11-13）。 |
| [#7740](https://github.com/earendil-works/pi/issues/7740) | /reload 后 TUI 不遵循自定义工具的 renderCall/renderResult | Bug | 在 `session_start` 上注册的工具由于加载顺序问题在 `/reload` 后无法正确渲染，破坏了 MCP 扩展的可见性。 | 4 条评论。 |

---

## 关键 PR 进展

| # | 标题 | 状态 | 影响 |
|---|-------|--------|--------|
| [#12110](https://github.com/earendil-works/pi/pull/12110) | 向 GitHub Copilot 发送 reasoning_effort 和读取 reasoning tokens | OPEN（进行中） | 为 Copilot Gemini 模型（`gemini-4-argon`、`gemini-3.8-flash`、`gemini-4-carbon`）启用 `--thinking` 标志。关闭 [#12019](https://github.com/earendil-works/pi/issues/12019)。 |
| [#12121](https://github.com/earendil-works/pi/pull/12121) | /copy 跳过没有给出答案就结束的轮次 | OPEN | 修复中断的辅助文本（工具调用中途或推理中途，最后一条消息无文本内容）的复制粘贴问题。关闭 [#12119](https://github.com/earendil-works/pi/issues/12119)。 |
| [#12117](https://github.com/earendil-works/pi/pull/12117) | 移除两处剩余的直接终端写入 | OPEN | 清理启动期间泄漏到 TUI 后台的 `console.error` 调用。与 [#11264](https://github.com/earendil-works/pi/issues/11264) 相关。 |
| [#12115](https://github.com/earendil-works/pi/pull/12115) | 在会话替换时报告诊断信息 | OPEN | 确保运行时诊断（警告、错误）在 `/new`、`/resume`、`/fork` 和会话切换时显示——而不是仅在初始启动时。 |
| [#12109](https://github.com/earendil-works/pi/pull/12109) | 隐藏被覆盖层遮挡的终端图片 | CLOSED | 解决了长期存在的 TUI 顽疾——在 Kitty/iTerm2 图片上绘制的覆盖层留下视觉空洞。关闭 [#11584](https://github.com/earendil-works/pi/issues/11584) 及四个重复 issue。 |
| [#12103](https://github.com/earendil-works/pi/pull/12103) | 向 Google GenAI SDK 适配器传递自定义 fetch | CLOSED | 启用通过自定义 HTTP 代理路由 Gemini 请求，用于 URL 检查和重试头处理。关闭 [#12097](https://github.com/earendil-works/pi/issues/12097)。 |
| [#12089](https://github.com/earendil-works/pi/pull/12089) | 将被信号终止的 pi.exec 命令报告为失败 | CLOSED | 此前，被信号终止的进程（超时、SIGSEGV、被外部杀死）返回退出码 0（成功）。现在正确报告为失败。 |
| [#12087](https://github.com/earendil-works/pi/pull/12087) | 在 grep 和 find 工具中跳过 VCS 目录 | CLOSED | `--hidden` 标志导致搜索包含了 `.git/` 内容（例如 18 个 `TODO` 匹配中有 15 个来自 reflog）。现在排除 `.git`、`.svn`、`.hg`。 |
| [#12112](https://github.com/earendil-works/pi/pull/12112) | 将 Qwen Token Plan 迁移到当前网关和模型列表 | CLOSED | 将 Token Plan 提供商迁移到当前 QwenCloud 网关。关闭 [#11773](https://github.com/earendil-works/pi/issues/11773)。 |
| [#11966](https://github.com/earendil-works/pi/pull/11966) | TUI 绘制期间停止向终端写入 | CLOSED | 重大 TUI 稳定性修复。TUI 持有终端期间任何写入 stdout/stderr 都会导致显示状态损坏，后续重绘时出现陈旧内容。修复 [#11264](https://github.com/earendil-works/pi/issues/11264)。 |

---

## 热点讨论

*本期未提供讨论数据。*

---

## 功能需求趋势

综合开放 issue 和功能导向的讨论，以下主题占据主导：

1. **持久化与存储**
   - 永久删除对话的 API（[#11026](https://github.com/earendil-works/pi/issues/11026)）
   - 为 pi-durable 定义扩展的轻量级入口点（[#11446](https://github.com/earendil-works/pi/issues/11446)）
   - Llama.cpp 连接存储在会话间的持久化（[#12096](https://github.com/earendil-works/pi/issues/12096)）

2. **终端与 TUI 健壮性**
   - XDG 基础目录规范合规（[#2870](https://github.com/earendil-works/pi/issues/2870)）
   - tmux OSC 52 透传（[#10628](https://github.com/earendil-works/pi/issues/10628)）
   - GNU screen 真彩色保护（[#10618](https://github.com/earendil-works/pi/issues/10618)）
   - 全屏模式下转录压缩行为（[#12120](https://github.com/earendil-works/pi/issues/12120)）

3. **AI Provider 对等性**
   - Copilot Gemini 模型的 reasoning effort（[#12019](https://github.com/earendil-works/pi/issues/12019)）
   - Google 适配器的自定义 fetch 转发（[#12097](https://github.com/earendil-works/pi/issues/12097)）
   - 命名空间作用域的 MCP tool_search（[#11558](https://github.com/earendil-works/pi/issues/11558)）
   - Gemini MALFORMED_FUNCTION_CALL 的有界重试（[#12113](https://github.com/earendil-works/pi/issues/12113)）

4. **扩展架构**
   - 扩展注册 provider 的认证检查可见性（[#9448](https://github.com/earendil-works/pi/issues/9448)）
   - OAuth HTML 渲染函数公开化（[#6930](https://github.com/earendil-works/pi/issues/6930)）
   - Codex 图片引用解耦（[#8617](https://github.com/earendil-works/pi/issues/8617)）

5. **工具链质量**
   - codemode 中 Promise.allSettled 的嵌套 Error 保留（[#10650](https://github.com/earendil-works/pi/issues/10650)）
   - forceSystemPrompt 投影正确性（[#10489](https://github.com/earendil-works/pi/issues/10489)）
   - 批量编辑中的文件规范化复用（[#9545](https://github.com/earendil-works/pi/issues/9545)）

---

## 开发者痛点

1. **资源耗尽时崩溃** — Bash 临时文件流错误（ENOSPC、EACCES）导致整个进程崩溃且无优雅降级（[#10585](https://github.com/earendil-works/pi/issues/10585)）。

2. **v1.5.2 中的 AbortError 泄漏** — 一个严重回归问题导致运行完成后 read 工具流中止时抛出未捕获的 `AbortError`，杀死整个进程（[#12118](https://github.com/earendil-works/pi/issues/12118)）。

3. **被信号终止的 Exec 被报告为成功** — 直到 [#12089](https://github.com/earendil-works/pi/pull/12089)，`pi.exec` 对被信号终止的进程（超时、SIGSEGV、被外部杀死）返回退出码 0，静默掩盖了失败。

4. **VCS 噪音干扰工具搜索** — `grep` 和 `find` 默认包含 `.git/` 内容，搜索结果被 reflog 和 hook 内容淹没。

5. **直接终端写入导致 TUI 损坏** — TUI 持有终端期间任何 stdout/stderr 写入都会损坏显示状态，导致后续重绘出现陈旧内容。多项 PR（[#11966](https://github.com/earendil-works/pi/pull/11966)、[#12115](https://github.com/earendil-works/pi/pull/12115)、[#12117](https://github.com/earendil-works/pi/pull/12117)）正在收敛修复。

6. **Google MCP 的 OAuth 刷新令牌缺口** — Google 的 MCP 服务器（`gmailmcp`、`calendarmcp`）只有 `access_type=offline` 时才颁发刷新令牌，而 pi 的 OAuth 实现目前不支持此参数。

7. **代理请求大小拒绝引发循环** — 当代理限制请求体大小时，pi 报错但下一轮重发相同（现在更大）的请求体，造成不可恢复的循环。

8. **删除后会话选择漂移** — `/resume` 选择器在删除当前会话后跳转到无关会话，使批量清理变得繁琐。

---

*日报生成于 2026-11-13。数据来源为 github.com/earendil-works/pi。所有 issue 和 PR 链接均使用 `earendil-works/pi` 命名空间。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the content into natural, fluent Simplified Chinese
2. Preserve all formatting - headings, tables, lists, bold/italic, etc.
3. Keep all technical terms, version numbers, file paths, issue numbers as-is
4. Keep URLs verbatim
5. Use technical Chinese register appropriate for a developer newsletter
6. Output ONLY the translation, no preamble or explanation
7. No markdown fences around the whole output

Let me translate section by section:

## Today's Highlights -> 今日要闻
## Releases -> 发布版本
## Hot Issues -> 热门议题
## Key PR Progress -> 关键 PR 进展
## Feature Request Trends -> 功能需求趋势
## Developer Pain Points -> 开发者痛点

I need to maintain the table structures, bullet points, bold text, and all formatting.

Let me work through this carefully, preserving technical accuracy and natural Chinese expression.
</think>


# Qwen Code 社区日报 — 2026-11-13

## 今日要闻

Qwen Code 发布了 **v1.0.0-preview.1**，现已支持订阅模式目录自动跟随登录状态，无需手动配置 provider。同时还发布了 v0.27.3（桌面版）、v0.27.2-nightly 和 SDK TypeScript v0.1.33。与此同时，CI 基础设施问题占据主导——多个 Managed Agent gate 和 E2E 测试失败已累计数百条评论，表明主线流水线存在持续不稳定因素。

---

## 发布版本

| 版本 | 包 | 关键变更 |
|---------|---------|-------------|
| **v1.0.0-preview.1** | Core | 订阅模式目录现已自动跟随登录状态；与 Qwen Code 0.2 订阅模式目录及 thinking-budget 映射同步 |
| **v0.27.3** | Desktop | Prettier ignore 集修复；Agent Host 改进 |
| **v0.27.2-nightly.20261112** | Nightly | MCP owner 在 Session 关闭时释放；Managed Agent 加固 |
| **v0.1.33** | SDK TypeScript | 捆绑 CLI v0.27.3 |
| **v0.27.3** | CLI | 在 Web Shell 合成器上方显示未完成的后台工作流、shell、监控器和本地 agent 的 chips |

---

## 热门议题

### 1. [主线 CI 失败：Managed Agent Gate — 未识别测试](https://github.com/QwenLM/qwen-code/issues/14724) (342 条评论)
**优先级：** 高 | **状态：** OPEN  
慢性 CI 失败，涉及 6+ 个 commit 失败。当 Managed Agent gate 在任何测试结果上报前就失败时，bot 会自动按 commit 归档 issue。这表明 gate 流水线存在系统性问题，阻塞了合并。社区反响强烈——342 条评论仍无明确解决路径。

### 2. [主线 CI 失败：E2E Tests — 未识别测试](https://github.com/QwenLM/qwen-code/issues/11680) (53 条评论)
**优先级：** 高 | **状态：** OPEN  
与 #14724 类似，但针对 Linux Docker 分片的 E2E 测试。测试运行器在上报结果前就终止了，使得根本原因诊断困难。涉及多个 commit，表明这是持续性基础设施问题而非偶发性测试不稳定。

### 3. [每日依赖 CVE 审计失败](https://github.com/QwenLM/qwen-code/issues/13078) (50 条评论)
**优先级：** 中 | **状态：** OPEN  
定时 CVE 审计执行失败。可能原因包括发现新的高危漏洞或 npm audit 端点不可用。这是安全卫生问题——未解决的 CVE 可能影响已发布的 SDK 包。

### 4. [主线 CI 失败：E2E Tests — Cron Tools](https://github.com/QwenLM/qwen-code/issues/13009) (22 条评论)
**优先级：** 高 | **状态：** OPEN | **自动修复：** 进行中  
`cli/cron-tools.test.ts` 的 E2E 测试持续失败。自动修复正在进行中，表明团队已定位故障模式并正在积极打补丁。

### 5. [任务报两个错误后无法继续](https://github.com/QwenLM/qwen-code/issues/16915) (9 条评论)
**优先级：** P2 | **状态：** CLOSED  
用户遇到 API 慢导致任务中断。"连接模型服务被中断"错误阻止任务完成。已关闭处理，但表明长时运行任务的可靠性存在问题。

### 6. [Auto Mode 对包含"Amend"的无关文本进行拦截](https://github.com/QwenLM/qwen-code/issues/13570) (9 条评论)
**优先级：** P2 | **安全** | **状态：** OPEN  
Auto mode 错误地将包含"amend"字样的无害文本识别为敏感操作，覆盖用户定义的 ask 规则，且无逃生出口。这是影响工作流可用性和安全态势的误判权限问题。

### 7. [追踪：1.0 Preview 循环内核登陆主线](https://github.com/QwenLM/qwen-code/issues/17045) (8 条评论)
**优先级：** P1 | **状态：** 进行中  
重大架构举措：将事件驱动内核从 v1.0.0-preview 分片迁移到主线。每次一个 surface 逐步落地，支持回滚。这是流水线中最重要的结构性变更。

### 8. [ACP Session Child 在 curl/网络调用后进入空闲无响应状态](https://github.com/QwenLM/qwen-code/issues/17040) (5 条评论)
**优先级：** P1 | **范围：** Windows, Web Shell | **状态：** OPEN  
在 Windows Web Shell 上，通过本地 HTTP 代理运行 curl 时会话终止，报"agent channel closed mid-request"错误。子进程进入空闲而非崩溃，提示 daemon stats 超时存在问题。影响 Windows 上的生产可用性。

### 9. [CI hz3 /tmp inode 耗尽](https://github.com/QwenLM/qwen-code/issues/17037) (4 条评论)
**优先级：** P1 | **状态：** OPEN  
CI runner hz3 的 inode 利用率达 92%，由遗留的 verify work trees 导致。任务在到达磁盘 floor gate 前就已失败。这是阻塞主要 runner 之一 CI 的基础设施问题。

### 10. [托管 v1 Detach 在 Hook 配置的 Turn 上卡死](https://github.com/QwenLM/qwen-code/issues/16579) (4 条评论)
**优先级：** P1 | **范围：** Managed, Daemon | **状态：** OPEN  
当 Hook 配置的 turn 有活跃的后台运行时，托管 detach 操作会卡死。需要 keep-READY drain 机制。影响托管运行时的可靠性。

---

## 关键 PR 进展

### 1. [fix(core): 拒绝或减少无法容纳窗口的压缩请求](https://github.com/QwenLM/qwen-code/pull/15936)
阻止冷压缩请求（其无法为摘要本身留出空间）。现在要求至少 4,096 个输出 token 或上下文窗口的 25%。在 provider 因上下文长度拒绝时恢复。这是内存管理稳定性的关键修复。

### 2. [feat(channels): 新增飞书自定义机器人 Webhook 投递](https://github.com/QwenLM/qwen-code/pull/17012)
新增飞书自定义机器人 Channel，支持向配置群发送 Markdown 卡片。支持 webhook URL 存储及可选签名密钥。启用向飞书团队的通知投递，扩展了现有渠道之外的集成选项。

### 3. [fix(ci): Release Docker 测试套件重试一次](https://github.com/QwenLM/qwen-code/pull/16862)
Release Docker 集成脚本现在在任务重试预算内对失败的 CLI 和交互式套件重试一次。重试前移除以任务 owner 标记的容器以避免污染。减少了由瞬时基础设施问题导致的虚假发布失败。

### 4. [feat(web-shell): 改善 Session 搜索体验](https://github.com/QwenLM/qwen-code/pull/16779)
Session 搜索现在在专用居中对话框中打开，附带稳定的侧边栏。显示近期 session，含清晰标题、对话片段和工作区上下文。包含键盘选择、焦点恢复、加载/重试状态和响应式布局。

### 5. [feat: 新增混合 Code Mode](https://github.com/QwenLM/qwen-code/pull/11854)
新增 `tools.mode` 枚举，含 `direct`、`code_mode` 和 `code_mode_only` 选项。Code mode 暴露一个与普通工具并存的隔离 `exec` JavaScript 工具。每项工具携带嵌套的 JavaScript 声明。这是面向高级用户的重大 DX 提升。

### 6. [fix(core): 将 `git remote show` 视为非只读](https://github.com/QwenLM/qwen-code/pull/14360)
`git remote show` 曾被分类为只读并自动批准，但它会查询网络上的 remote。现在正确分类为非只读，需要权限分类。这是 auto mode 的安全加固。

### 7. [fix(core): 对不可解码的 Shell 路径Fail Closed](https://github.com/QwenLM/qwen-code/pull/16784)
不可解码的 shell 文件名现保持未解析状态，而非继承 allow 裁定。字节转义表示在引号移除、片段连接和 ANSI-C 解析中得以保留。防止路径遍历绕过的关键安全修复。

### 8. [feat(headless): 在终端错误结果上保留 Provider HTTP 状态](https://github.com/QwenLM/qwen-code/pull/16686)
Headless 运行中的 provider 失败现在在终端结果信封上保留上游 HTTP 状态（401、429、5xx）。支持 API 失败时的更好错误诊断。

### 9. [feat(managed-agent): 跨 Session 共享常驻外部工作区](https://github.com/QwenLM/qwen-code/pull/16023)
外部 Workspace 工具现在跨 session 边界持久化，而非在每个周期销毁。每个 Workspace-scoped 绑定配置一个 worker，供后续 Session 和 Turn 复用。显著提升多 session 工作流的性能。

### 10. [fix(web-shell): 选择工作区后聚焦 Prompt 合成器](https://github.com/QwenLM/qwen-code/pull/17089)
从下拉菜单选择工作区后，焦点现在移至 prompt 合成器，而非停留在触发按钮上。消除了选择工作区后开始输入所需的额外点击。

---

## 功能需求趋势

分析 issue 和 PR 领域揭示这些主导性功能方向：

| 趋势 | 证据 | 重要性 |
|-------|----------|----------|
| **统一 Agent Loop 架构** | #17045, #15327 追踪统一内核落地 | 核心架构重构，确保跨所有 surface 的一致性 |
| **多 Agent 编排** | #16444 (background-view UX), 多 agent 路线图标签 | 迈向多 agent 工作流支持，配以适当的 UX 模式 |
| **增强安全性/权限** | #13570, #16449, #16784 | Amend-guard 扩展、shell 路径验证、权限加固 |
| **企业集成** | #17012 (飞书), #16434 (依赖升级) | 日益关注企业消息和安全合规 |
| **Windows/Daemon 稳定性** | #17040, #16579 | Web Shell daemon 改进，面向 Windows 生产部署 |
| **Session 持久化与性能** | #16023 (共享工作区), #16525 (turn 上限暴露) | 更好的 session 生命周期管理和资源复用 |
| **CI 可靠性** | #14724, #11680, #16862 | 投资于 flaky test 处理和基础设施弹性 |

---

## 开发者痛点

社区正在反馈这些反复出现的问题：

1. **CI 流水线不稳定** — 主线 CI 失败且无可操作的诊断信息（多个 issue 有 50-342 条评论）。开发者在 gate 静默或不一致失败时无法自信地合并代码。

2. **订阅模式配置摩擦** — v1.0.0-preview.1 之前，用户需要为订阅模式手动配置 provider。已在 v1.0.0-preview.1 中解决，但这是重大的 UX 痛点。

3. **Windows 上 Web Shell Daemon 可靠性** — 网络工具调用后会话无响应，Windows 用户受影响不成比例。Stats 超时行为造成不可预测的中断。

4. **Auto Mode 误报** — 包含权限敏感关键词（如"amend"）的无害文本会触发拦截，阻断合法工作流。用户无逃生出口。

5. **E2E 测试不稳定** — 归档了多个 deflake issues（#17090, #17063, #17079, #17046, #16975）。CI Failure Patrol 正在积极捕获这些问题，但持续的不稳定性拖慢了开发速度。

6. **Directory vs. File Glob 行为不一致** — 此前 glob 只返回文件而非目录，导致"exists"探测结果因条目类型而异。在 #16924 中已修复。

7. **Session Turn 上限透明度** — 超过 `maxSessionTurns` 的 session 曾静默重复答案而非暴露上限。现在按 #16525 正确记录在 JSON 输出中。

---

*日报数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) GitHub 数据 | 2026-11-13*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*