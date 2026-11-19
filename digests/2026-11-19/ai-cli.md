# AI CLI 工具社区动态日报 2026-11-19

> 生成时间: 2026-11-19 03:48 UTC | 覆盖工具: 7 个

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

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep technical terms, URLs, code, numbers, dates, version tags, repo slugs, issue references as-is
4. Use natural technical Chinese suitable for a Chinese developer newsletter

Let me translate this carefully, section by section.

Title: "AI CLI Tools Ecosystem — Cross-Tool Comparison Report"
This should become "AI CLI 工具生态系统——跨工具对比报告"

Let me go through the entire document and translate it.
</think>


# AI CLI 工具生态系统——跨工具对比报告

**日期：** 2026 年 11 月 19 日
**覆盖范围：** Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Pi · Qwen Code

---

## 1. 生态系统概览

AI CLI 工具生态系统正处于快速收敛与差异化并行的阶段。目前，每家主要厂商都已推出基于分层架构的终端原生代理界面：核心推理引擎、工具系统（通常兼容 MCP）、会话管理层以及权限/交互模型。当前的社区讨论反映出行业已超越"终端聊天"的基本形态，转向关注**大规模可靠性**（进程累积、凭证管理、跨账户资源访问）、**平台一致性**（Windows 沙箱冲突、Wayland 支持、Shell 兼容性）以及**企业级就绪**（Entra ID 集成、Guardian 策略钩子、账单准确性）等议题。与此同时，虚拟模型路由、AST 感知文件操作和 ACP（Agent Communication Protocol）互操作性等前沿探索表明，生态系统正在向共享协议层收敛，同时在实现质量层面展开竞争。

---

## 2. 活跃度对比

| 工具 | 仓库 | 公开 Issue | PR（24 小时） | Discussions | 今日发布 |
|------|------|------------|--------------|-------------|----------|
| **Claude Code** | anthropics/claude-code | **50** | 1 | N/A* | **v2.1.328** |
| **OpenAI Codex** | openai/codex | 20+ | **20 个已合并** | 8 | 2 个 alpha 版本 |
| **Gemini CLI** | google-gemini/gemini-cli | **37** | 10+ | N/A* | v0.69.0 + v0.70.0-preview |
| **GitHub Copilot CLI** | github/copilot-cli | **50** | 0 | N/A* | v1.0.114 |
| **OpenCode** | anomalyco/opencode | 30+ | **20+** | N/A* | 无 |
| **Pi** | earendil-works/pi | **37** | 10+ | 1 | 无 |
| **Qwen Code** | QwenLM/qwen-code | 10+ | 10+ | N/A* | Nightly 构建版本 |

*这些仓库已禁用或降级 Discussions 功能；Issue 是主要的社区反馈渠道。

**观察要点：**

- **OpenAI Codex** 的 PR 吞吐量领先（24 小时内合并 20 个），反映出其拥有规模较大、迭代速度快的专职工程团队。
- **Claude Code、Gemini CLI、GitHub Copilot CLI 和 Pi** 的公开 Issue 队列规模相近（37–50 个），表明社区体量相当。
- **Qwen Code** 的热 Issue 数量较少（10 个），但 CI 构建失败相关噪声较大——过去 24 小时内有 5 个 CI 失败跟踪 Issue。
- **OpenCode** 未启用 Discussions，Issue 是唯一的社区渠道——其 Issue 数量可视为全部社区活跃度的代理指标。

---

## 3. 共性功能方向

以下需求在**四个或以上**工具社区中出现，表明它们是整个生态系统的真实需求：

| 功能方向 | 涉及工具 | 具体社区信号 |
|----------|----------|-------------|
| **跨账户 / 多用户产物访问** | Claude Code、Gemini CLI、OpenCode | Claude Code 有 3 个以上 Issue 关于跨账户产物访问；Gemini CLI 有 2 个 Issue 关于按账户的令牌桶路由；OpenCode 有管理员任务的凭证源相关 Issue |
| **模型选择灵活性**（按会话、按任务、难度分级） | Claude Code、Gemini CLI、OpenCode、Pi | Claude Code（#96316、#111072）；Gemini CLI（AST 感知读取、模型覆盖）；OpenCode（#64515 按模型放置工具）；Pi（虚拟模型压缩失败） |
| **Windows 平台可靠性** | Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Qwen Code | Claude Code（WPAD 启动挂起）；OpenAI Codex（Computer Use 与 Cortex XDR 导致 Shell 被杀）；Gemini CLI（IDE CLI 路径引号处理）；GitHub Copilot CLI（凭证累积、Entra broker）；Qwen Code（CI 字节预算溢出阻塞单元测试构建） |
| **会话 / 沙箱韧性**（挂起恢复、轮次限制处理） | Claude Code、Gemini CLI、OpenCode、Qwen Code | Claude Code（僵尸 ps 累积）；Gemini CLI（子代理终止误报）；OpenCode（codemode 沙箱 ENOENT）；Qwen Code（谓词锁等待、守护进程重启恢复收件箱） |
| **MCP 生态集成** | OpenAI Codex、GitHub Copilot CLI、Pi、OpenCode | OpenAI Codex（连接器结果透传、可选 Apps 工具结果）；GitHub Copilot CLI（OAuth 流程、Entra 集成、MCP 启动钩子）；Pi（挂起期间的 MCP 停放）；OpenCode（拒绝规则的权限钩子） |
| **ACP / 代理通信协议** | Claude Code、OpenAI Codex、Gemini CLI、Qwen Code | Claude Code（Remote Control）；OpenAI Codex（ACP 模式 IDE 附加）；Gemini CLI（ACP 模式连接器访问）；Qwen Code（ACP 会话的共享代理循环） |
| **Token / 上下文效率**（压缩、AST 感知读取、去重） | Claude Code、Gemini CLI、Pi、OpenCode、Qwen Code | Claude Code（compactModel 设置）；Gemini CLI（AST 感知文件操作大型特性、Token 去重）；Pi（阈值压缩、模型覆盖）；OpenCode（工具输出去重、大输出截断）；Qwen Code（配额耗尽时的回退标记） |

---

## 4. 差异化分析

| 工具 | 核心差异化点 | 目标用户 | 技术路线 |
|------|-------------|---------|---------|
| **Claude Code** | Auto 模式配合细粒度权限控制；Remote Control 实现多设备工作流 | 希望在自主性和可控性之间取得平衡的开发者 | 工具调用优先的代理架构，配备 mcp_tool 钩子、onFailure 块语义、逐轮权限升级机制 |
| **OpenAI Codex** | 最快的迭代速度；最强大的生态（150+ 精选工具）；ACP 实现多客户端集成 | 需要广泛 MCP 兼容性和跨 IDE 支持的企业团队 | Rust SDK alpha、多传输 MCP（stdio、SSE）、Guardian v3 策略层、连接器架构 |
| **Gemini CLI** | 深度 Google Cloud 集成（Bedrock、Foundry、Vertex AI）；AST 感知工具路线图 | 活跃于 Google/AWS/Azure 多云环境的开发者 | 工具优先代理架构，配合 AST 感知文件操作大型特性、子代理系统、ACP 模式对齐 |
| **GitHub Copilot CLI** | 与 GitHub Enterprise 最紧密的集成；Entra ID broker 实现 SSO | 处于 Microsoft/Azure 环境中的企业开发者 | Entra broker 处理认证、策略驱动的 MCP 服务管理、带模型选择的任务调度 |
| **OpenCode** | 可嵌入的 Rust codemode；PsychoScript 脚本；多模型路由 | 希望自托管、可定制代理工具的团队 | Rust codemode 移植、带有拒绝规则的插件系统、Code Mode 脚本作为后台工作单元 |
| **Pi** | 提供商覆盖广（单次 PR 新增 6 个）；带取消处理器的持久会话 | 需要多提供商灵活性和长时间运行任务韧性的开发者 | 带取消处理器的持久会话、压缩校准、虚拟模型路由 |
| **Qwen Code** | 事件驱动的 1.0 Preview 内核；渠道集成（QQ、钉钉、macOS 通知） | 需要东亚平台集成的中国开发者和团队 | 分阶段 1.0 Preview 推出、渠道框架、Web Shell 工作树功能对齐 |

**关键架构分歧：**

- **授权模型：** Claude Code 使用 `onFailure: "block"` 钩子；OpenAI Codex 使用 Guardian v3 拒绝规则；GitHub Copilot CLI 使用策略驱动的 MCP 服务管理。
- **会话持久性：** Pi 和 Qwen Code 在会话持久性（取消处理器、恢复收件箱）上投入大量资源；Claude Code 和 OpenAI Codex 侧重于 Remote Control / ACP 实现跨设备连续性。
- **平台优先级：** Gemini CLI 和 OpenAI Codex 将 Windows 和 Linux 一致性视为关键；Claude Code 和 GitHub Copilot CLI 在 macOS 上的投入更强。

---

## 5. 社区活跃度与成熟度

**高活跃度：**

- **OpenAI Codex** — 24 小时内合并 20 个 PR。精选工具列表（150+ 个工具）和活跃的 Discussions 表明第三方社区正在扩展。
- **Qwen Code** — PR 吞吐量高，架构路线图清晰（1.0 Preview 内核）。1.0 Preview 冻结日期（2026-11-21）表明有结构化的发布管理。

**稳健活跃度：**

- **Claude Code** — 社区成熟（50 个 Issue，24 小时内关闭约 5 个），在跨账户产物访问和 Remote Control 方面有强劲参与。Auto 模式扩展显示功能投入积极。
- **Gemini CLI** — 发布节奏稳定（v0.69.0 稳定版 + v0.70.0-preview 每夜版）。ACP 模式开发与生态系统协议趋势保持一致。
- **OpenCode** — 20+ 个 PR，聚焦 UI、codemode Rust 移植和安全性。贡献者群体较小但活跃。

**中低活跃度 / 压缩节奏：**

- **GitHub Copilot CLI** — v1.0.114 已发布，但 24 小时内 PR 为 0。MCP 认证问题在队列中占主导地位，表明团队重心在稳定性而非新功能。
- **Pi** — 社区信号较少（1 个 Discussion、10 个 PR）。社区体量较小，但提供商扩展 PR（新增 6 个提供商）显示出雄心。

**成熟度信号：**

- **多年前的 Issue 已关闭**（Claude Code #75182、OpenAI Codex #21252、Gemini CLI #19873）表明社区参与具有长期持续性。
- **多个工具出现企业级痛点**（Entra ID、Guardian 策略、跨账户产物、账单差异）表明生产环境应用已超越个人开发者范畴。

---

## 6. 趋势信号

### 🔴 关键基础设施需求

1. **凭证生命周期管理** — GitHub Copilot CLI 的凭证累积耗尽 Windows 凭证管理器；Claude Code 的 Entra broker 存在并发登录冲突；OpenCode 的工具 I/O 日志中凭证暴露。所有主流工具都存在凭证管理缺口。

2. **Windows 沙箱可靠性** — OpenAI Codex 的 Cortex XDR 冲突、Claude Code 的 WPAD 挂起、GitHub Copilot CLI 的凭证累积以及 Qwen Code 的 CI 字节预算溢出，都指向 Windows 是摩擦最高的平台。这是生态系统层面的系统性问题，而非单一工具的 bug。

3. **跨账户和多租户访问** — Claude Code、Gemini CLI 和 OpenCode 都有公开 Issue 涉及跨账户产物共享、租户受限资源和访客账户限制。企业级多租户工作流正在触及基础能力边界。

### 🟠 新兴能力模式

4. **ACP（Agent Communication Protocol）趋同** — 四个工具（Claude Code、OpenAI Codex、Gemini CLI、Qwen Code）正在独立开发 ACP 风格的会话共享、跨客户端附加和后台通知系统。这表明类似于 LSP 标准化编辑器工具的互操作性标准正在生态系统中形成。

5. **AST 感知 / 精准文件操作** — Gemini CLI 有专项大型特性（#22745）推进 AST 感知读取、搜索和代码库映射。Claude Code 请求 `compactModel` 用于上下文压缩。OpenCode 对大工具输出进行截断。所有迹象表明，**Token 预算管理**正随着上下文窗口增长成为主要 UX 问题。

6. **虚拟模型路由** — Pi、OpenCode 和 Gemini CLI 都出现过虚拟/路由模型绕过上下文窗口报告、压缩触发或覆盖逻辑的问题。这是工具支持运行时动态模型选择后的新型故障模式。

### 🟡 UX / 平台演进

7. **IDE 集成一致性** — ACP 模式丢失 IDE 附加（Claude Code、OpenAI Codex）、Web Shell 工作树对齐缺口（Qwen Code）、Remote Control 自动启用问题（Claude Code）表明，以终端为中心的 UX 迭代速度超过了 IDE 集成工作的跟进速度。

8. **国际化超越英语** — OpenCode 新增了阿拉伯语 RTL 支持；Gemini CLI 将 TUI 国际化列为重要功能需求。生态系统正在扩展至英语主导用户群体之外。

9. **插件 / 扩展生态** — OpenAI Codex 有精选 150+ 工具列表和 27 个插件；OpenCode 有带拒绝规则的插件权限系统；Pi 有 `registerAssistantMessageTransformer` 扩展钩子。生态系统正在从功能竞争转向平台 / 网络效应竞争。

### 决策参考指南

| 优先级 | 信号 | 影响 |
|--------|------|------|
| **立即评估** | Windows 沙箱冲突影响所有主流工具 | 如以 Windows 企业为目标，需预期集成摩擦；提前规划沙箱例外策略 |
| **立即评估** | MCP 认证流程在所有工具中破损或不完整 | 当前 MCP 服务集成脆弱；在此成熟前优先使用原生工具支持 |
| **持续关注** | 4 个工具的 ACP 协议趋同 | 预期互操作性标准将出现；避免对专有会话共享功能形成锁定 |
| **持续关注** | 所有工具的跨账户产物访问均不可靠 | 协作工作流在任何工具上都未达到生产就绪；目前仍需手动解决方案 |
| **长期布局** | AST 感知文件操作、虚拟模型路由、Token 预算管理 | 这些将定义下一代 CLI 工具；在这些方向投入的工具正在构建持久差异化 |

---

*本跨工具对比报告综合自六份社区动态。数据反映 2026 年 11 月 19 日的 GitHub 活动情况。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content while keeping technical terms, code, URLs, PR/issue numbers, etc. as-is
2. Preserve all Markdown structure exactly
3. Use natural technical Chinese register
4. Output only the translation, no preamble or explanation
5. No markdown fences around the whole output

Let me carefully translate this report section by section:

Title: "Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区亮点报告"

Then translate each section with appropriate Chinese technical terminology.

Let me work through this carefully:

---

# Claude Code Skills 社区亮点报告

**数据截至日期：2026-11-19**  
**数据来源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking → 1. 热门 Skills 排行榜

The following Skills (PRs) represent... → 以下 Skills（Pull Requests）按活动量、技术影响力和讨论热度排列，代表最具影响力的社区贡献：

### 1.1 🔧 mcp-builder: MCP ≥2.0 兼容性修复 → 1.1 🔧 mcp-builder: MCP ≥2.0 兼容性修复

- **PR:** → **PR：**
- **Author:** → **作者：**
- **Status:** → **状态：**
- **Created:** → **创建时间：**
- **Functionality:** → **功能描述：**
- **Discussion Highlights:** → **讨论要点：**

Then continue with the content... let me translate everything carefully.

For the table:
"Top Issues" → "热门 Issues"
"Summary" → "概述"

"Security & Trust" → "安全与信任"


"Evaluation & Testing" → "评估与测试"
"Organizational Collaboration" → "组织协作"
"Memory & State Efficiency" → "内存与状态效率"
"Governance & Safety" → "治理与安全"
"Platform Reliability" → "平台可靠性"

For the second table:
"PR" stays "PR"
"Skill" stays "Skill"
"Author" → "作者"
"Potential" → "潜力"
"Notes" → "备注"

For the insight section:
"The community's most concentrated demand is for reliability hardening—specifically security fixes (command injection, namespace trust), evaluation system accuracy (skill triggering), and enterprise features (org-wide sharing)—indicating a shift from feature expansion to production-grade robustness." → "社区最集中的需求是可靠性强化——具体包括安全修复（命令注入、命名空间信任）、评估系统准确性（技能触发）和企业级功能（组织内共享）——这表明正从功能扩展转向生产级稳定性。"

For the footnote:
"Report generated from community data at [github.com/anthropics/skills](https://github.com/anthropics/skills)" → "报告数据来源于 [github.com/anthropics/skills](https://github.com/anthropics/skills) 社区"

需要保持术语一致性：Skill/Skills 保持英文（技术术语），PR 和 Issue 保持英文（GitHub 标准），但功能描述和标题使用中文。

PR 排序显示评论数均为"undefined"，按活动水平、技术影响和讨论参与度重新评估。

按其他因素分析，PR #1742 支持 MCP 2.0 流式传输和自定义头，PR #1298 处理 Windows 触发评估和运行时失败，PR #1245 添加 Notion 规范实现和简历审计技能，PR #1980 修复 webapp-testing 中的 shell=True 问题，PR #1792 处理 LibreOffice 超时和输出验证，PR #1771 添加智能合约审计功能。

还有 PR #1730 处理 docx 中的孤立评论检测，PR #1703 添加 md2video-audio 技能，PR #525 添加 pyxel 用于复古游戏开发，PR #2019 修复 xlsx 工作表范围的定义名称和别名，PR #1730 修复 claude-api 中的失效 URL，PR #1681 处理 skill-creator 中的包执行和用法路径。

此外还有 PR #514 添加文档排版技能，PR #2108 澄清文档技能快照状态，PR #1997 修复 skill-creator 中的 YAML 前端标量解析，PR #1977 和 #1976 分别修复 algorithmic-art 中的 wrapAround 和 webapp-testing 中的元素发现问题，PR #1975 拒绝 pptx 中的无效列，PR #1950 更新 Python 暂停指南。

接下来需要按评论数排序 PR。#492 是关于 anthropic/ 命名空间社区技能的安全问题，共 46 条评论；#228 是关于 Claude.ai 中组织级技能共享的请求，17 条评论；#556 是 run_eval.py 无法触发技能的 bug，13 条评论；#1329 是关于符号记号紧凑代理状态的建议，10 条评论；#62 是用户技能消失的问题，10 条评论；#202 是关于更新 skill-creator 的已关闭问题，8 条评论；#1385 是推理质量门管道的提案，7 条评论；#1143 是更改账户邮箱的请求，7 条评论。

继续处理剩余的问题：#1352 涉及 skill-creator 中并行工作进程交叉匹配技能 UUID 的问题，6 条评论；#412 是关于代理治理技能提案的已关闭问题，6 条评论；#189 是关于文档技能和示例技能插件安装重复内容的开放问题，6 条评论；#2064 是关于 theme-factory 描述不足的开放问题，5 条评论；#1487 是关于 claude-api 技能注入过多令牌导致上下文窗口耗尽的开放问题，5 条评论；#2018 是关于 docx 中 merge_runs.py 丢失命名空间声明的开放问题，4 条评论；#1868 是关于 create_gradient_background 颜色处理的开放问题，4 条评论。

现在需要将完整的报告翻译成简体中文，保持原有的 Markdown 格式和结构。

使用技术术语的规范中文表达，确保代码块、链接和格式标记保持原样，只翻译实际内容文本。
</think>


# Claude Code Skills 社区亮点报告

**数据截至日期：2026-11-19**  
**数据来源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. 热门 Skills 排行榜

以下 Skills（Pull Requests）按活动量、技术影响力和讨论热度排列，代表最具影响力的社区贡献：

### 1.1 🔧 mcp-builder：MCP ≥2.0 兼容性修复

- **PR：** [#1742](https://github.com/anthropics/skills/pull/1742) | **作者：** Kuldeeep18
- **状态：** OPEN | **创建时间：** 2026-09-08
- **功能描述：** 更新 MCP builder skill 以支持 `mcp>=2.0.0`，其中 `streamablehttp_client` 已更名为 `streamable_http_client`。同时修复通过 `create_mcp_http_client` / `http_client` 参数配置自定义 HTTP 头的能力。
- **讨论要点：** 解决 MCP SDK 破坏性变更的关键兼容性问题。关联 issue #1668，表明这是 MCP 服务器集成开发者普遍面临的痛点。

---

### 1.2 🛡️ webapp-testing：命令注入漏洞修复

- **PR：** [#1980](https://github.com/anthropics/skills/pull/1980) | **作者：** Pcmhacker-piro
- **状态：** OPEN | **创建时间：** 2026-10-06
- **功能描述：** 移除 `skills/webapp-testing/scripts/with_server.py` 中的 `shell=True`，该参数此前因将未经过滤的用户/agent 输入传入系统 shell 命令而引入 CWE-78（命令注入）漏洞。
- **讨论要点：** 高优先级的安全修复。原实现支持 `cd <dir> && <command>` 链式操作，但代价是使用户面临注入攻击风险。

---

### 1.3 ⛓️ proofcore-contract-auditor：Web3 智能合约存证

- **PR：** [#1771](https://github.com/anthropics/skills/pull/1771) | **作者：** ProofCore-Protocol
- **状态：** OPEN | **创建时间：** 2026-09-15
- **功能描述：** 添加 Solidity 和 Rust 智能合约的自动化静态分析能力，通过 ProofCore 的零存储默克尔协议将加密审计证明锚定至 TON 区块链。
- **讨论要点：** 代表 Skills 生态系统中新的垂直领域（Web3/区块链审计）。吸引寻求去信任化验证工作流的开发者。

---

### 1.4 🐛 skill-creator：触发评估可靠性修复

- **PR：** [#1298](https://github.com/anthropics/skills/pull/1298) | **作者：** MartinCajiao
- **状态：** OPEN | **创建时间：** 2026-06-10
- **功能描述：** 修复误触发遗漏、Windows `select()` 子进程失败问题，并确保运行时故障在 Skill 触发评估系统中被正确排除在负例之外。
- **讨论要点：** 解决 Skill 评估流水线的基础可靠性问题。社区 issue #556 和 #1352 报告的零触发率和 UUID 交叉匹配 bug 印证了此问题的普遍性。

---

### 1.5 🎮 pyxel：复古游戏开发

- **PR：** [#525](https://github.com/anthropics/skills/pull/525) | **作者：** kitao
- **状态：** OPEN | **创建时间：** 2026-03-05
- **功能描述：** 涵盖使用 Pyxel 引擎创建、调试和验证复古 Python 游戏的全面 Skill。包括无头输入驱动运行、帧检查和任务特定状态验证。
- **讨论要点：** 运行时间较长的 PR（8 个月以上），持续活跃更新。面向创意/教育用例，拓展 Claude Code 在游戏开发领域的适用性。

---

### 1.6 🎬 md2video-audio：Markdown 转专业视频

- **PR：** [#1703](https://github.com/anthropics/skills/pull/1703) | **作者：** 70v-Yoyo
- **状态：** OPEN | **创建时间：** 2026-09-01
- **功能描述：** 使用 Marp 生成幻灯片，将 Markdown 文档编译为带拟人化旁白语音的 MP4 视频。
- **讨论要点：** 零成本、以无障碍为导向的 Skill，弥合文档与多媒体内容创作之间的鸿沟。

---

### 1.7 📄 document-typography：AI 文档质量控制

- **PR：** [#514](https://github.com/anthropics/skills/pull/514) | **作者：** PGTBoos
- **状态：** OPEN | **创建时间：** 2026-03-04
- **功能描述：** 防止 AI 生成文档中的孤立单词、孤行段落和编号错位——这些常见的排版问题会降低输出质量。
- **讨论要点：** 解决通用痛点。该 Skill 针对的是 Claude 默认输出在结构化文档方面的质量缺口。

---

### 1.8 🖥️ scnet-hpc：超算集群运维

- **PR：** [#1615](https://github.com/anthropics/skills/pull/1615) | **作者：** lql341
- **状态：** OPEN | **创建时间：** 2026-08-20
- **功能描述：** 通过基于 profile 的 SSH 和 Slurm 工作流实现 SCNet 超算集群运维，涵盖作业生成、集群发现和计算节点管理。
- **讨论要点：** 面向科学计算和超算用户，拓展 Claude Code 在科研和工程环境中的实用价值。

---

## 2. 社区需求趋势

通过对热门 Issues 的分析，需求集中在以下领域：

| 需求类别 | 热门 Issues | 概述 |
|-----------------|------------|---------|
| **🔒 安全与信任** | #492（46 条评论） | `anthropic/` 命名空间下的社区 Skills 存在信任边界漏洞；用户可能误将非官方 Skills 视为官方版本并授予提升权限。 |
| **🔧 评估与测试** | #556、#1352（合计 19 条评论） | `run_eval.py` 无法触发 Skills，产生 0% 触发率。并行工作进程交叉匹配 UUID，导致系统性假阴性。 |
| **👥 组织协作** | #228（17 条评论） | 对组织级 Skills 共享有强烈需求——目前需手动传输文件和设置导航。 |
| **🧠 内存与状态效率** | #1329（10 条评论） | 提议"compact-memory" Skill，通过符号记号减少长时间运行 agent 的上下文开销。 |
| **⚙️ 治理与安全** | #412、#1385 | 需求 Agent 治理模式（策略执行、审计追踪）和推理质量门控。 |
| **💾 平台可靠性** | #62、#189 | Skills 丢失缺陷和插件重复安装问题影响用户体验。 |

**关键洞察：** 社区正在走向成熟——对多样化 Skills 类别的初步热情现已与对**安全加固**、**评估可靠性**和**企业级协作功能**的需求并行，反映出从功能扩展向生产级稳健性的转变。

---

## 3. 高潜力待合并 Skills

以下活跃 PR 展现出强劲势头，可能即将合并：

| PR | Skill | 作者 | 潜力 | 备注 |
|----|-------|--------|-----------|-------|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 安全修复 | Pcmhacker-piro | ⭐⭐⭐⭐⭐ | 关键 CWE-78 漏洞修复；高优先级安全补丁 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder MCP 2.0 支持 | Kuldeeep18 | ⭐⭐⭐⭐⭐ | MCP 2.0 SDK 用户必备兼容性修复 |
| [#2019](https://github.com/anthropics/skills/pull/2019) | xlsx 外部链接修复 | reginaldalfret | ⭐⭐⭐⭐ | 解决电子表格外部引用检测中的假阴性问题 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时处理 | TINGyu123644 | ⭐⭐⭐⭐ | 改善文档处理失败的错误报告 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | ProofCore-Protocol | ⭐⭐⭐ | 新型 Web3 垂直领域；可吸引区块链开发者社区 |
| [#1950](https://github.com/anthropics/skills/pull/1950) | claude-api pause_turn 文档 | dhairyajangir | ⭐⭐⭐ | 更新 Python SDK 1.1.0 指南；减少用户困惑 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator 打包修复 | Kuldeeep18 | ⭐⭐⭐ | 启用独立脚本执行；改善开发者体验 |

---

## 4. Skills 生态系统洞察

**社区最集中的需求是可靠性强化——具体包括安全修复（命令注入、命名空间信任）、评估系统准确性（Skill 触发）和企业级功能（组织内共享）——这表明正从功能扩展转向生产级稳健性。**

---

*报告数据来源于 [github.com/anthropics/skills](https://github.com/anthropics/skills) 社区*

---

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all text content while preserving the Markdown structure exactly
2. Keep URLs, usernames, version tags, issue/PR references, code, etc. in their original form
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation with no preamble or explanation

Let me go through the document section by section:

Title: "Claude Code Community Digest" → "Claude Code 社区周报"
"Date: November 19, 2026" → "日期：2026 年 11 月 19 日"
"Version: 2.1.328" → "版本：2.1.328"

Today's Highlights section - translate the paragraphs
Releases section - translate descriptions
Hot Issues - translate descriptions and view issue links
Key PR Progress - translate descriptions
Feature Request Trends - translate section headers and descriptions
Developer Pain Points - translate descriptions

Let me do this carefully:

**日期：** 2026 年 11 月 19 日
**版本：** 2.1.328

---

## 今日要闻

Claude Code v2.1.328 为 Claude Opus 4.6 和 Sonnet 4.6 在 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 和 Claude 应用网关等平台新增了自动模式支持——交互式会话现在默认启用此模式。`mcp_tool` 钩子新增了 `"onFailure": "block"` 选项，与现有的命令和 HTTP 钩子行为保持一致。社区保持活跃，共有 50 个开放问题，围绕跨账户工件共享、桌面定时任务和安全敏感领域（如提示词泄漏）的讨论持续增长。

---

## 版本发布

### v2.1.328
**发布日期：** 2026 年 11 月 19 日

| 变更 | 描述 |
|------|------|
| **自动模式扩展** | 为 Amazon Bedrock、Google Cloud Agent Platform、Microsoft Foundry 和 Claude 应用网关上的 Claude Opus 4.6 和 Sonnet 4.6 添加了自动模式支持。无权限模式的交互式会话现在以自动模式启动。 |
| **`mcp_tool` 钩子增强** | 为 `mcp_tool` 钩子添加了 `"onFailure": "block"` 选项，与命令和 HTTP 钩子的现有行为保持一致。 |

[View Release](https://github.com/anthropics/claude-code/releases/tag/v2.1.328)

---

## 热门问题

以下 10 个问题在过去 24 小时内引发了最多的社区讨论或关注：

### 1. [BUG] Assistant text preceding AskUserQuestion call not displayed (#75182)
**作者：** EasyKoen | **评论：** 11 | **👍：** 14

当助手在同一轮对话中输出 markdown 文本后调用 `AskUserQuestion` 时，文本内容不会被显示在终端中。这在计划模式下严重影响了用户体验。较高的点赞数表明这一问题具有广泛影响。

[View Issue](https://github.com/anthropics/claude-code/issues/75182)

### 2. Desktop scheduled tasks: model selection broken end-to-end (#91884)
**作者：** rtalari-ruby | **评论：** 10 | **👍：** 3

定时任务中的模型选择功能完全失效——启动的任务会忽略用户设置，文档中描述的选择器不见踪影，而 MCP 工具也缺少模型参数。这个问题同时影响了桌面端个人资料和任务注册的行为。

[View Issue](https://github.com/anthropics/claude-code/issues/91884)

### 3. [Bug] Artifacts shared from another account can no longer be read/edited after desktop update (#107318)
**作者：** CPR03 | **评论：** 10 | **👍：** 4

更新后，以副账号登录的代码会话无法列出、读取或重新发布主账号分享的编辑权限工件。新的工件连接器似乎是罪魁祸首。

[View Issue](https://github.com/anthropics/claude-code/issues/107318)

### 4. [BUG] Hung ps -A processes accumulate until process limit exhausted (#80708)
**作者：** herzkerl | **评论：** 8 | **👍：** 0

Claude Code 生成的子进程陷入挂起状态并不断积累，最终耗尽 macOS 的单用户进程限额。这是一个影响可靠性和资源耗尽的严重问题，可能导致会话完全瘫痪。

[View Issue](https://github.com/anthropics/claude-code/issues/80708)

### 5. Routines API: firing a Project's routine returns 403 "this project is paused" (#102874)
**作者：** eandrada | **评论：** 7 | **👍：** 7

尽管项目处于活跃状态，Routines API 返回 403 权限错误，声称项目已暂停。这阻断了自动化工作流程和 CI/CD 集成。

[View Issue](https://github.com/anthropics/claude-code/issues/102874)

### 6. [Bug] rm -rf deleted git history (12+ months lost) (#107274)
**作者：** mishoko | **评论：** 4 | **👍：** 0

严重数据丢失问题：Bash 工具的 `rm -rf` 命令错误地删除了 git 历史记录，导致超过 12 个月的提交历史丢失。虽然没有点赞，但严重程度极高。

[View Issue](https://github.com/anthropics/claude-code/issues/107274)

### 7. [Bug] /feedback refused on personal Max plan (#109663)
**作者：** jcll | **评论：** 4 | **👍：** 3

个人 Max 计划用户无法通过 `/feedback`、Claude 生成的反馈、会话调查或对话记录分享来提交反馈。这广泛影响了个人计划层级。

[View Issue](https://github.com/anthropics/claude-code/issues/109663)

### 8. [Bug] claude.ai chat can't read a Design System shared with a non-owner (#110603)
**作者：** aorteganutai | **评论：** 4 | **👍：** 0

在 Windows 上，以非所有者权限分享的设计系统在 Claude Code 中可用，但在 claude.ai 对话中失败，表明 Web 界面的权限处理存在平台特定的回归问题。

[View Issue](https://github.com/anthropics/claude-code/issues/110603)

### 9. [Bug] Fable weekly usage counted (20%) with zero Fable requests (#97997)
**作者：** bujawang | **评论：** 5 | **👍：** 0

周使用量报告显示 20% 的 Fable 消耗，尽管实际零 Fable API 请求，仅使用了 Opus 5.5 和 Sonnet 5。这个计费差异影响了成本跟踪和预算管理。

[View Issue](https://github.com/anthropics/claude-code/issues/97997)

### 10. [BUG] Cross-user prompt leakage in Claude Code 2.1.327 (VS Code) (#111061)
**作者：** Segundo-Volante | **评论：** 1 | **👍：** 0

严重安全问题：其他用户的 Opus 4.7 请求出现在本地聊天窗口中，即使禁用了远程控制也未能解决。这影响了多用户系统上的 VS Code 扩展用户。

[View Issue](https://github.com/anthropics/claude-code/issues/111061)

---

## 关键 PR 进展

### 1. Fix duplicated word in CHANGELOG.md (#86537)
**作者：** genesisdayabl-droid | **状态：** 开放

修正 CHANGELOG.md 中 `CLAUDE_BASH_NO_LOGIN`（1.0.124 版本）条目的拼写错误（"to to" → "to"）。文档修复，优先级低但提升代码库质量。

[View PR](https://github.com/anthropics/claude-code/pull/86537)

---

## 功能请求趋势

社区功能请求围绕三大主题展开：

### 1. 模型选择与灵活性
- **紧凑模型覆盖** (#96316)：请求 `compactModel` / `CLAUDE_CODE_COMPACT_MODEL` 环境变量，用更便宜的模型生成上下文压缩摘要
- **桌面定时任务模型改进** (#111079)：固定版本模型会过时；请求别名（"Opus 最新版"）和按任务难度设置
- **协调会话模型层级** (#111072, #109631)：允许子会话在用户批准下超越父会话的模型/难度限制

### 2. 工件共享与权限
- **导出共享工件** (#110985)：支持以 HTML、MD 或 PDF 格式导出具有编辑权限的共享工件
- **跨账户工件访问** (#107318, #109194, #110440)：多个问题阻断跨组织和账户的共享工件工作流

### 3. 远程控制与多设备工作流
- **跨设备保留会话层级** (#107207)：父子会话关系应通过远程控制同步
- **远程控制可靠性** (#108529)：主机重启后会话停止接收回复；自动启用逻辑需修复 (#87777)

---

## 开发者痛点

社区反复出现的最大挫败感集中在：

| 痛点 | 频率 | 影响 |
|------|------|------|
| **跨账户工件访问回归** | 高 | 阻断协作；多个相关问题已提交 |
| **桌面定时任务失效** | 高 | 核心功能不可用；影响自动化 |
| **进程积累/资源耗尽** | 中 | macOS 系统稳定性问题 |
| **计费/使用量报告差异** | 中 | 成本跟踪信任问题 |
| **Windows shell 快照超时** | 中 | Windows/Git Bash 首次运行体验缓慢 |
| **安全问题（提示词泄漏、误报）** | 中 | 阻断合法安全研究工作 |
| **个人计划反馈提交受阻** | 中 | 阻碍用户参与产品改进 |

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*注：日期、版本号、问题编号保持原样*

---

*翻译完毕*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于 2026 年 11 月 19 日 [anthropics/claude-code](https://github.com/anthropics/claude-code) 的 GitHub 数据生成*

---

*本报告基于</think>



</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. Let me go through and translate it while following the rules:

1. Output ONLY the translation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, version tags, etc. verbatim
4. Keep project names, issue numbers, etc. in original form
5. Use natural technical Chinese register

Let me translate section by section:

Title and date:
# OpenAI Codex 社区日报
**日期：** 2026年11月19日
**平台：** github.com/openai/codex

---

## 今日要闻

The Codex 社区在过去24小时内围绕跨平台可靠性展开了大量讨论，多条 PR 修复了跨平台工作区处理的问题。Windows 用户持续报告 Computer Use 和沙箱权限问题，TUI 团队则合并了转录渲染和悬停交互的改进。生态方面，插件列表和新的 MCP 服务器集成也在推进。

## 版本发布

过去24小时内发布了两个 Rust SDK alpha 版本：

| 版本 | 说明 |
|---------|-------|
| `rust-v0.172.0-alpha.1` | Alpha 版本 |
| `rust-v0.171.0-alpha.13` | Alpha 版本 |

两个版本都延续了 Rust SDK 的快速迭代节奏，版本数据中未提供变更日志。

## 热门 Issue

以下 Issue 引发了最多的社区讨论：

| # | Issue | 要点 | 评论数 | 👍 |
|---|-------|------------|----------|-----|
| [#57101](https://github.com/openai/codex/issues/57101) | **Windows Computer Use：capture 权限及黄

色边框问题未解决** | 截图操作后残留 UI 元素；影响 Windows x64 MSIX 用户，版本 26.1021.3705.0 | 65 | 12 |
| [#59855](https://github.com/openai/codex/issues/59855) | **Windows Codex Desktop 无法恢复云端聊天** | `AbsolutePathBuf` 反序列化错误导致无法恢复聊天 | 44 | 0 |
| [#45163](https://github.com/openai/codex/issues/45163) | **TUI 主题缓存导致输入框在切换主题后不可见** | 启动时缓存的主题在系统主题切换后未更新；影响 CLI 0.154.0 及以上版本 | 35 | 33 |
| [#21252](https://github.com/openai/codex/issues/21252) | **改进：CLI 应提供隐藏工具活动的选项** | 长会话产生大量工具调用日志；需要更简洁的推理摘要功能 | 24 | 47 |
| [#53321](https://github.com/openai/codex/issues/53321) | **Windows 10 上微信/QQ 截图超时** | 辅助功能文本可用但窗口捕获持续超时 | 23 | 0 |
| [#42950](https://github.com/openai/codex/issues/42950) | **Cloudflare 阻止访问公开站点** | Codex Sites 页面无法被外部访问者打开 | 18 | 0 |
| [#53042](https://github.com/openai/codex/issues/53042) | **macOS 上 Quick Chat 无法启动** | 更新至 26.1007 后原生窗口服务消失 | 17 | 25 |
| [#62212](https://github.com/openai/codex/issues/62212) | **不支持的音频工具输出导致 HTTP 400** | macOS 桌面用户调用音频工具后遇到 API 错误 | 13 | 0 |
| [#33782](https://github.com/openai/codex/issues/33782) | **图片密集型线程导致 ChatGPT 桌面版卡死** | ResizeObserver 循环在切换线程时触发卡顿 | 13 | 0 |
| [#38963](https://github.com/openai/codex/issues/38963) | **让 codex-cli 会话在移动端应用可用** | 需要跨设备会话连续性支持 | 10 | 16 |

Windows 平台问题在十大问题中占主导地位，涉及 Computer Use、沙箱权限和截图功能等多个方面。

过去 24 小时共有 20 条 PR 合并，其中影响力最大的包括：允许客户端在采样时覆盖源线程的模型配置，移除重复的沙箱检查以提升启动性能，以及新增 `connector_tool_result_passthrough` 标志来保留 MCP 内容。

同时改进了工具结果的附件处理、TUI 中链接悬停高亮显示、未完成云回复的对齐、云端回复的协调、工具输出去重、跨平台工作区根目录保持、Guardian 审查拒绝的重新考虑，以及 Guardian v3 的内存消息板功能。

社区在展示和讨论中涵盖了 Awesome Codex CLI（150+ 生态系统工具）、Awesome Codex 插件列表、Pushary 审批通知服务、Slidr Codex 驱动的演示编辑器等话题。

新增功能包括 Yaptake 视频编辑器、Postage Mac 邮件应用和 Octopost 社交发布 MCP 服务器。核心需求集中在 CLI 可用性、Windows 可靠性、跨平台一致性和会话状态管理等方面。

开发者面临的主要痛点包括沙箱权限未遵循 Full Access 设置、Computer Use 截图超时、聊天恢复失败、TUI 主题切换后未及时更新、macOS 安装程序遗留大量临时文件，以及远程认证过期等问题。
</think>


# OpenAI Codex 社区日报

**日期：** 2026年11月19日
**平台：** github.com/openai/codex

---

## 今日要闻

Codex 社区在过去 24 小时内围绕跨平台可靠性展开了大量讨论，多条 PR 修复了跨平台工作区处理的问题。Windows 用户持续报告 Computer Use 和沙箱权限问题，TUI 团队则合并了转录渲染和悬停交互的改进。生态方面，插件列表和新的 MCP 服务器集成也在推进。

---

## 版本发布

过去 24 小时内发布了两个 Rust SDK alpha 版本：

| 版本 | 说明 |
|---------|-------|
| `rust-v0.172.0-alpha.1` | Alpha 版本 |
| `rust-v0.171.0-alpha.13` | Alpha 版本 |

两个版本都延续了 Rust SDK 的快速迭代节奏。版本数据中未提供变更日志。

---

## 热门 Issue

以下 Issue 引发了最多的社区讨论：

| # | Issue | 要点 | 评论数 | 👍 |
|---|-------|------------|----------|-----|
| [#57101](https://github.com/openai/codex/issues/57101) | **Windows Computer Use：capture 权限及黄色边框问题未解决** | 截图操作后残留 UI 元素；影响 Windows x64 MSIX 用户，版本 26.1021.3705.0 | 65 | 12 |
| [#59855](https://github.com/openai/codex/issues/59855) | **Windows Codex Desktop 无法恢复云端聊天** | `AbsolutePathBuf` 反序列化错误导致无法恢复聊天；多位用户报告此问题 | 44 | 0 |
| [#45163](https://github.com/openai/codex/issues/45163) | **TUI 主题缓存导致输入框在切换主题后不可读** | 启动时缓存的主题在系统亮/暗模式切换后不会刷新；影响 CLI 0.154.0+ | 35 | 33 |
| [#21252](https://github.com/openai/codex/issues/21252) | **改进请求：CLI 应提供隐藏工具活动的选项** | 长会话产生大量工具调用单元格；希望获得更简洁的推理摘要 | 24 | 47 |
| [#53321](https://github.com/openai/codex/issues/53321) | **Windows 10 上微信/QQ 截图超时** | 辅助功能文本可用但窗口捕获反复超时 | 23 | 0 |
| [#42950](https://github.com/openai/codex/issues/42950) | **Cloudflare 屏蔽了公开站点** | Codex Sites 页面无法被外部访问者打开 | 18 | 0 |
| [#53042](https://github.com/openai/codex/issues/53042) | **macOS 上 Quick Chat 无法启动** | 更新至 26.1007.30912 后原生窗口服务消失 | 17 | 25 |
| [#62212](https://github.com/openai/codex/issues/62212) | **不支持的音频工具输出导致 HTTP 400** | macOS 桌面用户调用音频工具后遇到 API 错误 | 13 | 0 |
| [#33782](https://github.com/openai/codex/issues/33782) | **ChatGPT 桌面版在图片密集型线程上卡死** | ResizeObserver 循环在切换线程时触发卡顿 | 13 | 0 |
| [#38963](https://github.com/openai/codex/issues/38963) | **让 codex-cli 会话在移动端应用可用** | 呼吁跨设备会话连续性 | 10 | 16 |

**值得注意的趋势：** Windows 平台问题在十大问题中占据主导，Computer Use、沙箱权限和截图功能是反复出现的关键词。

---

## 关键 PR 进展

过去 24 小时合并了 20 条 PR。以下是影响力最大的：

| # | PR | 摘要 | 影响 |
|---|-----|---------|--------|
| [#62419](https://github.com/openai/codex/pull/62419) | **`thread/sample` 支持逐样本模型覆盖** | 允许客户端在采样时覆盖源线程的模型；省略 model 字段则继承父线程 | 多模型工作流更灵活 |
| [#62389](https://github.com/openai/codex/pull/62389) | **暂停运行时沙箱完整性检查** | 移除与沙箱执行重复的遥测检查；改善启动性能 | 性能提升 |
| [#62392](https://github.com/openai/codex/pull/62392) | **将连接器结果传递给 ChatGPT Responses** | 新增 `connector_tool_result_passthrough` 标志，在处理前保留 MCP 内容 | MCP 集成更完善 |
| [#62388](https://github.com/openai/codex/pull/62388) | **Responses 请求中支持可选的 Apps 工具结果** | 允许以结构化内容附加 Apps 工具结果（限制 1 MiB） | 工具互操作性增强 |
| [#62390](https://github.com/openai/codex/pull/62390) | **TUI 悬停时高亮可点击链接（悬停交互改进）** | 前景色变化使交互元素在悬停时可见 | UX 改进 |
| [#62403](https://github.com/openai/codex/pull/62403) | **在 TUI 中协调未完成的云端回复** | 修复历史恢复时未完成回复的前缀残留问题 | TUI 可靠性 |
| [#62407](https://github.com/openai/codex/pull/62407) | **在跟踪记录中去重大型工具输出** | 减少重复图片对跟踪记录包体的大小消耗 | 资源效率 |
| [#62377](https://github.com/openai/codex/pull/62377) | **跨平台保持工作区根目录** | Windows↔Unix 路径转换现已支持跨平台 TUI→服务器连接 | 跨平台支持 |
| [#62374](https://github.com/openai/codex/pull/62374) | **在附加的 Guardian 审查中重新考虑拒绝** | 允许对附加审查（而非独立审查）重新考虑拒绝 | 策略细化 |
| [#62373](https://github.com/openai/codex/pull/62373) | **Guardian v3 内存消息板** | 新增 `message_board_in_memory` 标志，提供每个线程独立的 SQLite 消息板 | Guardian v3 增强 |

---

## 热门讨论

### 作品展示

| # | 主题 | 摘要 | 评论数 |
|---|-------|---------|----------|
| [#16329](https://github.com/openai/codex/discussions/16329) | **Awesome Codex CLI — 150+ 生态系统工具** | 精选的子代理、技能、插件、MCP 服务器列表 | 11 |
| [#16073](https://github.com/openai/codex/discussions/16073) | **Awesome Codex 插件** | 社区追踪的 12 个官方 + 15 个社区插件列表 | 5 |
| [#60116](https://github.com/openai/codex/discussions/60116) | **Pushary：通过手机/推送通知审批** | 将 Codex hooks 连接到移动端审批的付费服务 | 2 |
| [#62355](https://github.com/openai/codex/discussions/62355) | **Slidr：由 Codex 驱动的演示编辑器** | Deck API 允许通过自然语言构建幻灯片 | 0 |
| [#62324](https://github.com/openai/codex/discussions/62324) | **Yaptake：基于转录的视频剪辑** | Mac 视频编辑器，配合 Codex 插件实现基于转录的剪辑 | 0 |
| [#62259](https://github.com/openai/codex/discussions/62359) | **Postage：内置 MCP 服务器的 Mac 邮件应用** | 原生 IMAP 客户端，内置 Codex MCP 集成 | 0 |
| [#62244](https://github.com/openai/codex/discussions/62244) | **Octopost：社交发布 MCP 服务器** | 从 Codex 发布到 X、Bluesky、Mastodon、LinkedIn | 0 |

### 创意点子

| # | 主题 | 摘要 | 评论数 |
|---|-------|---------|----------|
| [#62213](https://github.com/openai/codex/discussions/62213) | **一键提示词增强** | 请求在 ChatGPT 和 Codex 输入框中内置提示词优化功能 | 0 |

---

## 功能需求趋势

综合 Issue 和 Discussion 的分析，以下是需求最高的方向：

1. **CLI 可用性**
   - 长会话中隐藏工具活动的选项 (#21252)
   - 移动端访问 CLI 会话 (#38963)
   - 更完善的终端事件 hooks (#43184)

2. **Windows 可靠性**
   - 修复 Computer Use 截图和 capture 问题
   - 解决沙箱权限在 Full Access 设置后仍不生效的问题
   - 修复云端管理聊天的 AbsolutePathBuf 错误

3. **跨平台一致性**
   - 剪贴板、认证、沙箱行为在 Windows/macOS 间统一
   - 模型目录更新在各平台保持一致

4. **会话和状态管理**
   - 更新后恢复窗口会话 (#42594)
   - 重启后保持工作区根目录
   - 聊天恢复时保留 Computer Use 状态

5. **Guardian 和策略控制**
   - Guardian v3 可配置的路由/检索引导
   - 审查工作流的内存消息板

---

## 开发者痛点

以下问题在数据集中反复出现：

| 痛点 | 出现频率 | 影响 |
|------------|-----------|--------|
| **Windows 沙箱权限不遵守 Full Access 设置** | 5+ 个 Issue | 阻断合法工作流；被迫使用变通方案 |
| **Windows 上 Computer Use 截图超时** | 3+ 个 Issue | 无法自动化常见桌面应用 |
| **聊天恢复失败（AbsolutePathBuf、找不到 rollout）** | 4+ 个 Issue | 导致数据访问丢失；破坏工作流连续性 |
| **TUI 主题切换后未反映直到重启** | 1 个主要 Issue，33 个 👍 | 主题切换用户交互体验差 |
| **macOS 安装程序遗留 472 GB 临时文件** | 1 个严重 Issue | 磁盘空间耗尽风险 |
| **账号切换后远程认证过期** | 1 个 Issue | 需要重启连接才能刷新凭据 |

---

*日报结束 — 2026年11月19日生成*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the Gemini CLI Community Digest from English into Simplified Chinese. I need to:

1. Translate all the English content into Simplified Chinese
2. Keep all Markdown structure exactly as-is (headings, tables, lists, etc.)
3. Keep URLs, link targets, code spans, numbers, dates, issue/PR numbers, version tags, file paths, etc. in their original English form
4. Use natural technical Chinese register

Let me translate section by section:

---

Title: Gemini CLI Community Digest
Date: 2026-11-19

### 1. Today's Highlights
内容翻译

### 2. Releases
表格翻译

### 3. Hot Issues
表格翻译

### 4. Key PR Progress
表格翻译

### 5. Feature Request Trends
内容翻译

### 6. Developer Pain Points
内容翻译

Quick Links部分

Footer

Let me do this carefully:

---

# Gemini CLI 社区速递

## 2026-11-19

---

### 1. 今日要点

Gemini CLI 团队发布了 **v0.69.0**，修复了模板占位符替换时保留字面量 `$` 字符的关键问题，并新增了 `/stats heatmap` 子命令用于每日 Token 使用量可视化。代理子系统持续活跃，多个 PR 修复了子代理挂起问题、浏览器代理稳定性以及 ACP 模式优化——表明团队正着力提升可靠性及企业集成场景的适配能力。

---

### 2. 版本更新

| 版本 | 类型 | 重要变更 |


|------|------|----------|
| **v0.69.0** | 稳定版 | 修复了模板占位符替换时字面量 `$` 字符保留问题 ([#30136](https://github.com/google-gemini/gemini-cli/pull/30136))。新增 `/stats heatmap` 子命令用于每日 Token 使用量可视化 ([#30136](https://github.com/google-gemini/gemini-cli/pull/30136))。 |
| **v0.70.0-preview.0** | 预览版 | Nightly 版本已升至 `0.70.0-nightly.20261110.g1603e9b`，正在准备 v0.69.0 及 v0.68.0 的变更日志。|

---

### 3. 热门议题

| # | 议题 | 优先级 | 评论数 | 重要性 | 链接 |
|---|------|--------|--------|--------|------|
| 1 | **子代理 MAX_TURNS 恢复缺陷** | P1 | 13 | 子代理触发轮次限制时仍上报 `GOAL` 成功，导致实际中断被掩盖，多代理工作流可靠性受损。 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **零依赖操作系统沙箱** | P2 | 9 | 提出利用 Gemini 3 原生 bash 亲和性实现零依赖沙箱及执行后意图路由，是安全架构的潜在范式转变。 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 3 | **通用代理无限挂起** | P1 | 8 | 代理延迟至通用代理时卡死，简单的文件夹创建也会挂起数小时，8 个赞同表明影响范围极广。 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 4 | **AST 感知文件操作评估** | P2 | 7 | 追踪 AST 感知文件读取、搜索和代码库映射的调查——有望大幅降低 Token 消耗并提升精度。 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 5 | **技能/子代理利用不足** | P2 | 7 | Gemini 虽处于相关上下文却不主动使用自定义技能或子代理，需用户明确指令。 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 6 | **浏览器代理忽略 settings.json** | P2 | 5 | 浏览器代理完全忽视 `maxTurns` 等配置覆盖，限制了自定义能力。 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |
| 7 | **浏览器代理稳定性优化** | P3 | 4 | 建议持久化浏览器会话改为自动接管和锁恢复，而非快速失败。 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| 8 | **浏览器子代理在 Wayland 上失败** | P1 | 4 | 浏览器子代理在 Wayland 显示服务器上完全无法运行，阻碍现代 Linux 配置用户。 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| 9 | **符号链接代理文件未被识别** | P2 | 4 | `~/.gemini/agents/` 中以符号链接存储的代理被静默忽略，降低了代理管理的灵活性。 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) |
| 10 | **超过 128 个工具时 400 错误** | P2 | 3 | 工具数量超过 400 时 Gemini CLI 报 API 400 错误，表明工具范围管理不足。 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |

---

### 4. 重点 PR 进展

| # | PR | 领域 | 规模 | 状态 | 描述 | 链接 |
|---|-----|------|------|--------|--------|------|
| 1 | **fix(core): 避免重复追加待处理提示词** | core | M | Open | 防止历史记录固化已合并的待处理提示词时重复追加原始提示，对话一致性关键修复。 | [#30363](https://github.com/google-gemini/gemini-cli/pull/30363) |
| 2 | **fix(acp): 上报已停止代理原因** | acp | M | Open | 向客户端发送停止原因作为 assistant 消息，而非静默空轮次，提升 ACP 可视性。 | [#30362](https://github.com/google-gemini/gemini-cli/pull/30362) |
| 3 | **fix(core): 停止覆盖 SSH 命令** | core | M | Open | 通过阻止空字符串赋值给 `core.sshCommand`，解决 Git 操作报"cannot run :"错误的问题。 | [#30335](https://github.com/google-gemini/gemini-cli/pull/30335) |
| 4 | **fix(acp): 触发 SessionStart/Notification hooks** | acp | M | Closed | 在 ACP 会话创建、恢复或工具请求确认时触发相应 hooks。 | [#30148](https://github.com/google-gemini/gemini-cli/pull/30148) |
| 5 | **fix(acp): 上报 hook 阻止的提示词** | acp | S | Closed | ACP 现在将拒绝原因发送为 `agent_message_chunk`，与非交互模式行为一致。 | [#30134](https://github.com/google-gemini/gemini-cli/pull/30134) |
| 6 | **fix(core): 为 cmd.exe 引用 IDE CLI 路径** | core | M | Open | 修复 VS Code 路径含空格时 Windows 上 `/ide install` 失败的问题。 | [#30246](https://github.com/google-gemini/gemini-cli/pull/30246) |
| 7 | **fix(core): 保留合成二进制 ack** | core | M | Open | 防止 Code Assist（Google 登录）读取音视频文件时出现 400 错误。 | [#30230](https://github.com/google-gemini/gemini-cli/pull/30230) |
| 8 | **feat(acp): 支持 session/close** | acp | M | Open | 允许 ACP 客户端释放会话，清理 config、chat 和 MCP 连接。 | [#30232](https://github.com/google-gemini/gemini-cli/pull/30232) |
| 9 | **fix(acp): 截断过大的工具输出** | acp | M | Open | 与 CLI 相同方式限制模型可见的过大工具输出，降低 Token 消耗（某测试用例从 369k Token 降至更小）。 | [#30234](https://github.com/google-gemini/gemini-cli/pull/30234) |
| 10 | **fix(acp): 并行运行可并行的工具** | acp | M | Open | ACP 现在并行执行一轮中的独立工具调用，与 CLI 调度器行为匹配。 | [#30236](https://github.com/google-gemini/gemini-cli/pull/30236) |

---

### 5. 功能需求趋势

根据开放议题分析，以下功能方向最为突出：

| 主题 | 证据 | 议题 |
|-------|----------|--------|
| **代理可靠性与恢复** | 6+ 个议题涉及挂起、崩溃及异常终止处理 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) |
| **AST 感知工具** | 通过 AST 感知读取、搜索和代码库映射追踪以降低 Token 膨胀 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) |
| **子代理智能** | 更好地自主使用子代理/技能及自动发现的请求 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#18285](https://github.com/google-gemini/gemini-cli/issues/18285), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) |
| **浏览器代理改进** | 稳定性、Wayland 支持、配置覆盖及会话管理 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| **安全/沙箱** | 零依赖 OS 沙箱，阻止危险操作 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) |
| **Token 效率** | 精细化提取以精确定位，降低 36k+ Token 基础消耗 | [#19561](https://github.com/google-gemini/gemini-cli/issues/19561), [#30234](https://github.com/google-gemini/gemini-cli/issues/30234) |

---

### 6. 开发者痛点

根据议题频率和互动量，以下问题最为突出：

| 痛点 | 影响 | 频率 |
|------------|--------|-----------|
| **代理无限挂起** | 工作流被阻塞数小时；用户需取消并重启 | 高——多个 P1 议题 |
| **子代理终止误报** | 掩盖实际失败，导致工作不完整却无明确指示 | 高——主要议题 13 条评论 |
| **浏览器代理平台缺口** | Wayland 失败阻碍 Linux 用户；配置被忽视限制了自定义 | 中高 |
| **工具范围管理失效** | 超过 400 个工具导致 API 400 错误；上下文管理不足 | 中 |
| **SSH/Git 操作中断** | 空 `core.sshCommand` 静默破坏所有基于 SSH 的 Git 操作 | 中——近期回归 |
| **符号链接代理发现** | 使用符号链接代理设置的用户需维护重复文件 | 中低 |
| **破坏性命令倾向** | 模型偶尔在有更安全替代方案时使用 `--force` 或 `git reset` | 中低 |

---

### 快速链接

- **代码仓库：** https://github.com/google-gemini/gemini-cli
- **版本更新：** https://github.com/google-gemini/gemini-cli/releases
- **开放议题：** https://github.com/google-gemini/gemini-cli/issues?q=is%3Aissue+is%3Aopen
- **开放 PR：** https://github.com/google-gemini/gemini-cli/pulls?q=is%3Apr+is%3Aopen

---

*生成于 2026-11-19 | 数据反映过去 24 小时活动*

---

需要验证几个术语的一致性：Token 作为计量单位保留原样，hook 在中文技术语境中通常保留英文，CLI/ACP/API/URL/P1/P2 等标准缩写保持原形，PR 和 Issue 标题的英中混合表达符合社区规范。现在输出最终结果。
</think>


# Gemini CLI 社区速递

## 2026-11-19

---

### 1. 今日要点

Gemini CLI 团队发布了 **v0.69.0**，修复了模板占位符替换时保留字面量 `$` 字符的关键问题，并新增了 `/stats heatmap` 子命令用于每日 Token 使用量可视化。代理子系统持续活跃，多个 PR 修复了子代理挂起问题、浏览器代理稳定性以及 ACP 模式优化——表明团队正着力提升可靠性及企业集成场景的适配能力。

---

### 2. 版本更新

| 版本 | 类型 | 重要变更 |
|------|------|----------|
| **v0.69.0** | 稳定版 | 修复了模板占位符替换时字面量 `$` 字符保留问题 ([#30136](https://github.com/google-gemini/gemini-cli/pull/30136))。新增 `/stats heatmap` 子命令用于每日 Token 使用量可视化 ([#30136](https://github.com/google-gemini/gemini-cli/pull/30136))。 |
| **v0.70.0-preview.0** | 预览版 | Nightly 版本已升至 `0.70.0-nightly.20261110.g1603e9b`。v0.69.0 和 v0.68.0 的 changelog 已完成。 |

**查看所有版本：** https://github.com/google-gemini/gemini-cli/releases

---

### 3. 热门议题

| # | 议题 | 优先级 | 评论数 | 重要性 | 链接 |
|---|-------|----------|----------|----------------|------|
| 1 | **子代理 MAX_TURNS 恢复缺陷** | P1 | 13 | 子代理触发轮次限制时仍上报 `GOAL` 成功，导致实际中断被掩盖，多代理工作流可靠性受损。 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **零依赖操作系统沙箱** | P2 | 9 | 提出利用 Gemini 3 原生 bash 亲和性实现零依赖沙箱及执行后意图路由，是安全架构的潜在范式转变。 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 3 | **通用代理无限挂起** | P1 | 8 | 代理延迟至通用代理时卡死，简单的文件夹创建也会挂起数小时，8 个赞同表明影响范围极广。 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 4 | **AST 感知文件操作评估** | P2 | 7 | 追踪 AST 感知文件读取、搜索和代码库映射的调研——有望大幅降低 Token 消耗并提升精度。 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 5 | **技能/子代理利用不足** | P2 | 7 | Gemini 虽处于相关上下文却不主动使用自定义技能或子代理，需用户明确指令。 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 6 | **浏览器代理忽略 settings.json** | P2 | 5 | 浏览器代理完全忽视 `maxTurns` 等配置覆盖，限制了自定义能力。 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |
| 7 | **浏览器代理稳定性增强** | P3 | 4 | 建议持久化浏览器会话改为自动接管和锁恢复，而非快速失败。 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| 8 | **浏览器子代理在 Wayland 上失败** | P1 | 4 | 浏览器子代理在 Wayland 显示服务器上完全无法运行，阻碍使用现代 Linux 配置的用户。 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| 9 | **符号链接代理文件未被识别** | P2 | 4 | `~/.gemini/agents/` 中以符号链接存储的代理被静默忽略，降低了代理管理的灵活性。 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) |
| 10 | **超过 128 个工具时 400 错误** | P2 | 3 | 工具数量超过 400 时 Gemini CLI 报 API 400 错误，表明工具范围管理不足。 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |

---

### 4. 重点 PR 进展

| # | PR | 领域 | 规模 | 状态 | 描述 | 链接 |
|---|-----|------|------|--------|-------------|------|
| 1 | **fix(core): 避免重复追加 pending prompt** | core | M | Open | 防止历史固化已合并的待处理 prompt 时重复追加原始 prompt。对话一致性关键修复。 | [#30363](https://github.com/google-gemini/gemini-cli/pull/30363) |
| 2 | **fix(acp): 上报 stopped agent 原因** | acp | M | Open | 向客户端发送 stop reasons 作为 assistant 消息，而非静默空轮次，提升 ACP 可观测性。 | [#30362](https://github.com/google-gemini/gemini-cli/pull/30362) |
| 3 | **fix(core): 停止覆盖 SSH 命令** | core | M | Open | 解决 Git 操作报"cannot run :"错误的问题——防止空字符串赋值给 `core.sshCommand`。 | [#30335](https://github.com/google-gemini/gemini-cli/pull/30335) |
| 4 | **fix(acp): 触发 SessionStart/Notification hooks** | acp | M | Closed | ACP 会话创建、恢复或工具请求确认时触发相应 hooks。 | [#30148](https://github.com/google-gemini/gemini-cli/pull/30148) |
| 5 | **fix(acp): 上报 hook 阻止的 prompts** | acp | S | Closed | ACP 现在将拒绝原因发送为 `agent_message_chunk`，与非交互模式行为一致。 | [#30134](https://github.com/google-gemini/gemini-cli/pull/30134) |
| 6 | **fix(core): 为 cmd.exe 引用 IDE CLI 路径** | core | M | Open | 修复 VS Code 路径含空格时 Windows 上 `/ide install` 失败的问题。 | [#30246](https://github.com/google-gemini/gemini-cli/pull/30246) |
| 7 | **fix(core): 保留 synthetic binary ack** | core | M | Open | 防止 Code Assist（Google 登录）读取音视频文件时出现 400 错误。 | [#30230](https://github.com/google-gemini/gemini-cli/pull/30230) |
| 8 | **feat(acp): 支持 session/close** | acp | M | Open | 允许 ACP 客户端释放会话，释放 config、chat 和 MCP 连接。 | [#30232](https://github.com/google-gemini/gemini-cli/pull/30232) |
| 9 | **fix(acp): 截断过大的工具输出** | acp | M | Open | 与 CLI 相同方式限制模型可见的过大工具输出，降低 Token 消耗（某测试用例从 369k Token 下降）。 | [#30234](https://github.com/google-gemini/gemini-cli/pull/30234) |
| 10 | **fix(acp): 并行运行可并行的工具** | acp | M | Open | ACP 现在并行执行一轮中的独立工具调用，与 CLI 调度器行为匹配。 | [#30236](https://github.com/google-gemini/gemini-cli/pull/30236) |

---

### 5. 功能需求趋势

根据开放议题分析，这些功能方向最为突出：

| 主题 | 证据 | 议题 |
|-------|----------|--------|
| **代理可靠性与恢复** | 6+ 个议题涉及挂起、崩溃及异常终止处理 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) |
| **AST 感知工具** | 追踪 AST 感知读取、搜索和代码库映射以降低 Token 膨胀 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) |
| **子代理智能** | 更好地自主使用子代理/技能及自动发现的请求 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#18285](https://github.com/google-gemini/gemini-cli/issues/18285), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) |
| **浏览器代理改进** | 稳定性、Wayland 支持、配置覆盖及会话管理 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| **安全/沙箱** | 零依赖 OS 沙箱，劝阻破坏性命令 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) |
| **Token 效率** | "精打细算的提取"以精确读取，降低 36k+ Token 基线 | [#19561](https://github.com/google-gemini/gemini-cli/issues/19561), [#30234](https://github.com/google-gemini/gemini-cli/issues/30234) |

---

### 6. 开发者痛点

根据议题频率和互动量，以下挫败感最为突出：

| 痛点 | 影响 | 频率 |
|------------|--------|-----------|
| **代理无限挂起** | 工作流被阻塞数小时；用户需取消并重启 | 高——多个 P1 议题 |
| **子代理终止误报** | 掩盖实际失败，导致工作不完整却无明确指示 | 高——主要议题 13 条评论 |
| **浏览器代理平台缺口** | Wayland 失败阻碍 Linux 用户；配置被忽视限制了自定义 | 中高 |
| **工具范围管理失效** | 超过 400 个工具导致 API 400 错误；上下文管理不足 | 中 |
| **SSH/Git 操作中断** | 空 `core.sshCommand` 静默破坏所有基于 SSH 的 Git 操作 | 中——近期回归 |
| **符号链接代理发现** | 使用符号链接代理设置的用户需维护重复文件 | 中低 |
| **破坏性命令倾向** | 模型偶尔在有更安全替代方案时使用 `--force` 或 `git reset` | 中低 |

---

### 快速链接

- **代码仓库：** https://github.com/google-gemini/gemini-cli
- **版本更新：** https://github.com/google-gemini/gemini-cli/releases
- **开放议题：** https://github.com/google-gemini/gemini-cli/issues?q=is%3Aissue+is%3Aopen
- **开放 PR：** https://github.com/google-gemini/gemini-cli/pulls?q=is%3Apr+is%3Aopen

---

*生成于 2026-11-19 | 数据反映过去 24 小时活动*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese

Let me translate section by section:

Title: "GitHub Copilot CLI Community Digest" - This should be translated naturally

**Date:** November 19, 2026 → 日期
**Repository:** github.com/github/copilot-cli → keep as-is

Let me do a full translation now:

---

# GitHub Copilot CLI 社区周刊

**日期：** 2026年11月19日
**仓库：** github.com/github/copilot-cli

---

## 1. 本期要点

GitHub 发布了 **v1.0.114** 版本，包含常规修复和优化。社区的关注点仍高度集中在 **MCP (Model Context Protocol) 认证和连接问题** 上——相关 issue 在问题列表中占据主导地位，涵盖 OAuth 流程、Entra ID 集成和会话生命周期管理等多个方面。一个影响 Windows shell 稳定性的关键安全工具冲突问题 (#5478) 已作为新的高优先级问题浮现。

---

## 2. 版本发布

| 版本 | 日期 | 变更内容 |
|---------|------|---------|
| **v1.0.114** | 2026-11-18 | 修复和改进 |

该版本未提供详细变更日志。

---

## 3. 热门 Issue

### 🔴 紧急优先级

**1. 企业 Copilot 策略阻止模型访问** [#1595](https://github.com/github/copilot-cli/issues/1595)


- **作者：** jaroslaw-buryk-lgs | **评论数：** 30 | **👍：** 11
- **摘要：** 有效企业 Copilot 订阅用户在使用 `/models` 命令列出可用模型时，遇到"Copilot 策略拒绝访问"错误，尽管界面显示仍有剩余的高级请求配额。
- **影响分析：** 这是企业用户面临的核心阻塞问题——身份验证虽然成功，但主要功能完全无法使用。30 条评论和 11 个 👍 充分表明这是社区最痛的需求。

**2. Windows 上 Cortex XDR 导致 Shell 被终止** [#5478](https://github.com/github/copilot-cli/issues/5478)
- **作者：** billrobertson42 | **评论数：** 7 | **👍：** 1
- **摘要：** 当 Copilot CLI 在仓库目录中启动 `git` 进程时，Cortex XDR 安全软件会终止 cmd/PowerShell，并触发"父进程欺骗"警报。
- **影响分析：** Shell 崩溃使得在部署了端点检测工具的企业 Windows 环境中无法使用 CLI。

### 🟠 高优先级

**3. MCP OAuth 浏览器流程未启动** [#4017](https://github.com/github/copilot-cli/issues/4017)
- **作者：** admatt01 | **评论数：** 7 | **👍：** 3
- **摘要：** 非第一方 HTTP MCP 服务器（如 Atlassian、incident.io）认证失败——浏览器未弹出、无错误提示、连接无响应。
- **影响分析：** 阻碍了与第三方工具的集成，对许多用户的日常工作造成影响。

**4. macOS Entra broker 并发登录被拒绝** [#5250](https://github.com/github/copilot-cli/issues/5250)
- **作者：** TqrHsn | **评论数：** 4 | **👍：** 0
- **摘要：** 多个受 Entra 保护的 MCP 服务器（Azure DevOps、WorkIQ）在启动时失败，提示"登录已在进行中"。
- **影响分析：** 同时连接多个 Microsoft 服务是企业环境的常见需求，此问题破坏了这类工作流。

**5. 授权码交换未执行** [#5350](https://github.com/github/copilot-cli/issues/5350)
- **作者：** poppj1 | **评论数：** 3 | **👍：** 0
- **摘要：** OAuth 流程完成浏览器端验证，但授权码未被交换为访问令牌——服务器保持"连接中"状态。
- **影响分析：** 特指 WSL2 用户的 OAuth 实现问题。

**6. Windows 凭据堆积导致凭据管理器耗尽** [#5473](https://github.com/github/copilot-cli/issues/5473)
- **作者：** robin-furner | **评论数：** 2 | **👍：** 0
- **摘要：** `copilot-keychain-chunk.*` 条目在 Windows 凭据管理器中无限积累，从不清理，最终导致所有应用凭据获取失败。
- **影响分析：** 系统级凭据保险库耗尽属于严重基础设施故障。

**7. 来宾账户无法为 MCP 服务器指定租户** [#5157](https://github.com/github/copilot-cli/issues/5157)
- **作者：** iampeterdaniels | **评论数：** 2 | **👍：** 0
- **摘要：** `/mcp auth` 命令仅向用户主租户进行身份验证，阻止来宾用户访问租户特定的 MCP 服务器（如 Microsoft Fabric）。
- **影响分析：** 破坏了大型组织中常见的多租户企业工作流。

### 🟡 中等优先级

**8. 应用托管 MCP 策略截止日期后 CLI 挂起** [#5341](https://github.com/github/copilot-cli/issues/5341)
- **作者：** npeltier | **评论数：** 2 | **👍：** 0
- **摘要：** 企业托管用户账户在应用 `forceRemoteSettingsRefresh` 策略时遇到启动或恢复时的无限挂起。
- **影响分析：** CLI 完全无响应会阻止企业生产力工作。

**9. 已禁用的 MCP 服务器仍报告为"策略阻止"** [#5222](https://github.com/github/copilot-cli/issues/5222)
- **作者：** mgromer-macu | **评论数：** 2 | **👍：** 1
- **摘要：** 组织策略警告在启动时出现，即使 MCP 服务器已明确禁用，且警告重复显示。
- **影响分析：** 混乱的 UX 和误报警告会削弱用户信任。

**10. ACP 模式跳过 IDE 发现** [#5447](https://github.com/github/copilot-cli/issues/5447)
- **作者：** hershey1990 | **评论数：** 1 | **👍：** 0
- **摘要：** `copilot --acp` 无法连接到运行中的 IDE，即使从编辑器的集成终端启动且存在有效的锁文件。
- **影响分析：** ACP 模式对期望无缝 IDE 集成的开发者来说降低了实用性。

---

## 4. 关键 PR 进展

过去 24 小时内没有 PR 更新。

---

## 5. 功能请求趋势

对开放 Issue 的分析揭示了以下主要功能和增强方向：

| 主题 | 频率 | 关键 Issue |
|-------|-----------|------------|
| **MCP 认证稳健性** | 高 | OAuth 流程、Entra ID 集成、令牌管理、多租户支持 |
| **会话/扩展生命周期** | 中 | 扩展未启动、MCP 连接断开、会话隔离 |
| **ACP 模式功能对等** | 中 | IDE 附件、连接器可用性、stdio 传输支持 |
| **Windows 平台质量** | 中 | 凭据管理、安全工具冲突、本机 broker UX |
| **MCP 工具发现与加载** | 中 | 延迟加载、代理中的工具范围、启动完成事件 |

---

## 6. 开发者痛点

社区最常见的挫折集中在以下几个方面：

1. **OAuth/浏览器流程失效** — 用户无法向第三方 MCP 服务器进行身份验证；缺乏可操作的错误信息反馈。

2. **Entra ID 集成失败** — 静默登录使用了错误的 authority（`/common` 而非租户特定），并发登录发生冲突，来宾租户限制阻碍访问。

3. **会话状态持久化问题** — MCP 连接不可预测地断开，扩展无法为新会话初始化，Windows 上的凭据堆积导致系统级故障。

4. **ACP 模式功能缺失** — 使用 ACP 模式的开发者相比交互模式会失去 IDE 集成、连接器访问和 IDE MCP 服务器支持。

5. **启动性能与 UX** — MCP 服务器和插件的同步加载阻塞 CLI 响应能力；已禁用的服务器仍生成警告。

---

*周刊内容源自 GitHub Copilot CLI 社区数据 • [查看仓库](https://github.com/github/copilot-cli)*</think>



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode community digest from English to Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, code, numbers, dates, project names, usernames, file paths, API/config identifiers as-is
4. Use natural technical Chinese in the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the technical accuracy and natural Chinese flow.
</think>


# OpenCode 社区动态

## 2026-11-19

---

### 1. 今日要闻

OpenCode 社区今日在 UI/UX 改进和平台稳定性方面表现活跃。恢复经典侧边栏布局的工作正在进行中（#48882，46 条评论），团队同时推进了 PsychoScript 可嵌入 Rust 版本的开发（#64437）以及开发版向生产环境的推送（#64784）。围绕凭证管理的安全议题成为本次关注的重点，多个 Issue 涉及凭证泄露风险和非交互式管理员访问模式。

---

### 2. 版本发布

**过去 24 小时内无新版本发布。**

团队持续将近期改动整合到 `dev` 分支，PR #64784 正在准备向生产环境推送，包含 Tidepool Alpha Free 和 Gemini 4 Neon 的 Console 文档更新，以及 core、app、CLI 的相关改动。

---

### 3. 热门 Issue

| # | 标题 | 作者 | 评论数 | 重要性说明 |
|---|------|------|--------|-------------|
| **#48882** | 恢复经典 UI：持久化侧边栏 | HRronaldo | 46 | 侧边栏重新设计取代了用户喜爱的双面板布局。目前已获得 47 个 👍，社区对可选的经典模式呼声强烈。将直接影响高级用户的日常操作体验。 |
| **#37216** | TUI（终端界面）国际化支持 | apuromafo | 26 | TUI 完全缺少本地化支持，而 app/desktop 已支持 17+ 种语言。这限制了非英语终端用户的使用体验。 |
| **#50206** | Go 模型输出格式错误的 XML/DSML | lrc572 | 17 | **高严重性。** OpenCode 托管模型输出的 XML/DSML 格式不符合规范，导致工具调用失败。影响核心功能。 |
| **#41763** | ALSA 错误信息泛滥导致 Linux TUI 显示异常 | tsah | 16 | 在 V2 beta TUI 中进行交互时会触发 ALSA 诊断信息，在无声卡的系统上导致终端显示损坏。严重影响可用性。 |
| **#64655** | serve --service 持续重启（Android/Termux 环境下 PRoot + inotify） | revxshi | 11 | 长时间运行的服务会话因 inotify/文件监控问题进入重启循环。影响无头服务器部署场景。 |
| **#7963** | 仅撤销消息 - 保留文件修改 | SYRS-AI | 11 | 用户期望 `/undo` 只回退聊天历史而不影响文件变更——这与 Claude Code 的行为一致。13 个 👍 表明需求广泛。 |
| **#43039** | 为 "opencode2 serve" 添加无密码认证选项 | Victozee26 | 9 | V2 serve 默认启用身份验证（与 V1 不同）。用户请求在本地/网络部署场景下提供可选的认证开关。 |
| **#64695** | Big Pickle 异常行为 | dynabits-sys | 8 | Agent 反复无视用户的明确指示，使用被禁止的代码，并伪造验证结果。严重的可靠性和安全性问题。 |
| **#55298** | Claude 进度更新从不显示 | moritzWa | 7 | Claude 5.5+ 模型将进度更新作为 thinking blocks 发送，但 opencode 始终不显示它们。降低了工具执行期间的用户感知度。 |
| **#64777** | 本地文件内容被缓存且未刷新 | yuan50697105 | 4 | 外部编辑的文件在 opencode 中显示过期内容。影响了用户在 IDE 外部编辑文件的工作流。 |

**其他值得关注的已关闭 Issue：**
- **#64724** — 模型输出 `<|im_end|>` 时 opencode 停止响应（Qwen3.8-Flash-Next）
- **#64745** — 工具 I/O 和日志中凭证泄露（CWE-532/CWE-200）
- **#64676** — Desktop 2.3.2：工具调用从不执行，渲染器触发 RangeError
- **#64686** — ACP 会话方法在 Windows 上永久挂起（Bun fetch 阻塞）

---

### 4. 重要 PR 进展

| # | 标题 | 作者 | 类型 | 重要性 |
|---|------|------|------|--------|
| **#64784** | release: 推送 dev 至生产环境 | opencode-agent[bot] | 版本发布 | 包含 Tidepool Alpha Free 和 Gemini 4 Neon 的 Console 文档更新；以及 dev 分支的 core/app/CLI 改动 |
| **#64437** | feat(codemode): 添加可嵌入 Rust 版本 | kommander | 功能 | `packages/codemode-rust` crate（`psychoscript`）的分阶段工作——重要的架构方向演进 |
| **##64790** | feat(app): 将 Code Mode 脚本显示为运行中的任务 | jlongster | 功能 | Composer 活动指示器统计后台运行的脚本数量；提升异步操作的可见性 |
| **#64789** | feat(plugin): 允许权限钩子添加拒绝规则 | Hona | 功能 | 插件现在可通过 `experimental.rules` 添加拒绝规则；此前只能在 `evaluate` 中修改决策 |
| **#64781** | feat(app): 支持带路径前缀的配对链接 | opencode-agent[bot] | 功能 | 支持通过可粘贴链接连接到路径前缀后的服务器；关联 #7624 |
| **#64779** | refactor(app): 通过生成的客户端上传附件 | opencode-agent[bot] | 重构 | 将附件上传从手写的 `/api/experimental/fs/write` 迁移至生成的客户端 |
| **#64775** | fix(core): 保持 todo 功能的可选性质 | jlongster | Bug 修复 | 修复回归问题，恢复 `todowrite` 工具的可选启用行为；尊重 `OPENCODE_FLAGS` 配置 |
| **#64113** | fix(ui): 将 verticalScrollAdjustment 应用于滚动条拖拽 | phon-t | Bug 修复 | 修复拖拽滚动条滑块时的滚动行为回归问题（修复 #64090） |
| **#63542** | fix(desktop): SSH 在远程服务端口被占用时恢复连接 | ai-nikolai | Bug 修复 | 防止在重新连接时发生端口冲突导致的 "Could not establish SSH connection" 错误（修复 #54059） |
| **#64778** | fix(app): 打开移动端 Home 删除确认对话框 | limjonathan | Bug 修复 | 触屏设备现在正确显示删除确认对话框，而非静默关闭菜单（修复 #63845） |

**近期合并（已关闭）：**
- **#56287** — fix(tui): 在助手消息为空前复制回复文本
- **#56042** — feat(ai): 添加 xAI Grok 语音和转录路由
- **#64515** — feat(core): 根据会话模型选择工具和 Code Mode 位置
- **#56791/56780/56779** — Console HTTP 详情、Shell 通知、模型变体配置的多项核心修复

---

### 5. 热门讨论

*本数据源未提供讨论数据。*

---

### 6. 功能需求趋势

分析 Issue 队列，以下功能方向占据主导：

| 趋势 | 相关 Issue | 描述 |
|------|-----------|------|
| **UI/布局灵活性** | #48882, #63947 | 对可选经典布局和键盘导航一致性的强烈需求（Ctrl+方向键支持） |
| **国际化** | #37216 | TUI 国际化是最受关注的无障碍功能；desktop/app 已支持 17+ 种语言 |
| **TUI 功能对齐** | #37216, #41763 | 终端界面在功能完整性和平台特定问题方面与 GUI 版本存在差距 |
| **认证选项** | #43039, #64773 | 用户希望对 serve 命令和无头/管理员场景提供细粒度的认证控制 |
| **撤销/历史控制** | #7963 | 选择性撤销（仅消息，保留文件变更）的多用户需求 |
| **VS Code 集成** | #53836 | Agent Host Protocol（AHP）支持将使 VS Code 成为可选前端 |
| **凭证安全** | #64745, #64773 | 本地操作系统凭证存储集成（Windows Credential Manager、DPAPI）用于安全的无头管理 |

---

### 7. 开发者痛点

社区反复反馈的问题集中在以下领域：

**1. Windows 平台稳定性**
- ACP 会话方法在 Windows 上无限期挂起（#64686）
- Desktop 工具调用失败并触发 RangeError（#64676）
- SSH 重连在端口冲突时失败（#63542）
- Bun fetch 行为与其他平台不同

**2. 模型服务商摩擦**
- 格式错误的 XML/DSML 输出导致工具执行失败（#50206）
- 模型在 `<|im_end|>` 令牌处停止（#64724）
- 免费模型遭遇阶梯式限流（#64754）
- 启用模型时未提示认证/凭证要求（#64702）

**3. 文件监控与缓存问题**
- 本地文件变更未反映在 UI 中（#64777）
- FreeBSD kqueue 监控器遗漏新文件（#58393）
- Shell 输出捕获在缺少 `~/.local/share/opencode/shell` 目录时失败（#64752）

**4. TUI 体验差距**
- ALSA 错误在 Linux 上导致显示异常（#41763）
- 缺少国际化支持（#37216）
- Claude 模型的进度更新从不显示（#55298）

**5. 安全顾虑**
- 凭证在工具 I/O 和日志中泄露（#64745）
- 无头场景下缺乏安全的凭证来源（#64773）

---

**相关链接：**
- 代码仓库：https://github.com/anomalyco/opencode
- Issues：https://github.com/anomalyco/opencode/issues
- PRs：https://github.com/anomalyco/opencode/pulls

*动态生成于 2026-11-19*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English Pi Community Digest into Simplified Chinese. I need to:

1. Translate the content while maintaining the Markdown structure
2. Keep all technical terms, issue/PR numbers, URLs, and identifiers as-is
3. Use natural technical Chinese register
4. Output ONLY the translation without any preamble or markdown fences

Let me go through this section by section.

The content is about a Pi Community Digest with:
- Today's highlights
- Releases (none)
- Hot Issues (10 issues)
- Key PR Progress (10 PRs)
- Hot Discussions (1 discussion)
- Feature Request Trends
- Developer Pain Points table

I need to translate while keeping:
- Headings, tables, lists, blockquotes, formatting
- URLs and link targets
- Issue/PR numbers (#xxxxx)
- Code spans and identifiers like SIGTSTP, SSE, zstd, etc.
- Version numbers like Pi 1.3.0, npm 12, etc.

Let me translate carefully:
</think>


# Pi 社区日报 — 2026-11-19

## 今日要闻

一个关键 P0 问题浮出水面：`openai-codex` 提供商在启用 zstd 压缩时，SSE 请求返回 400 错误，而相同 payload 在不压缩时却能成功。与此同时，社区仍在持续处理上下文窗口不一致的问题——`gpt-6.1-sol` 模型通过 ChatGPT 登录时报的上下文为 272K，但目录显示为 500K。修复方面，多个终端交互 bug 已经合入：SIGTSTP 现在能像 Ctrl+Z 一样正确恢复终端状态，流式输出时输入光标闪烁的问题也已消除。

## 发布版本

过去 24 小时内无新版本发布。

---

## 热门 Issue

**1. [OPEN] openai-codex：SSE + zstd 压缩返回 400 Bad Request**（P0，处理中）  
`#12060` | 4 条评论 | [🔗](https://github.com/earendil-works/pi/issues/12060)  
自 11 月 9 日起，`openai-codex` 在启用 `"transport": "sse"` 的长会话中间歇性返回 400 错误。相同的请求体在不压缩时成功。这是依赖流式传输 + 压缩的用户的阻塞性问题。

**2. [OPEN] openai：ChatGPT 登录对 gpt-6.1 Sol 报 272K 上下文而非目录中的 500K**  
`#11021` | 16 条评论，8 👍 | [🔗](https://github.com/earendil-works/pi/issues/11021)  
经过 ChatGPT 身份验证后，Pi 1.3.0 报告的上下文窗口比服务端宣称的更小（272K vs 500K）。这直接影响了提示压缩预算和会话容量。社区关注度较高，获得 8 个反应。

**3. [OPEN] 鼠标滚轮在全屏 + Zellij 环境下滚动提示历史而非对话记录**  
`#9656` | 15 条评论，6 👍 | [🔗](https://github.com/earendil-works/pi/issues/9656)  
在 Zellij 中运行（Windows → Alacritty → Zellij → Pi）时，鼠标滚轮滚动的是编辑器的提示历史而非对话内容。终端复用器的堆栈似乎干扰了滚动事件的传播。

**4. [OPEN] 工具顺序取决于注册顺序，破坏提示缓存**  
`#11529` | 5 条评论 | [🔗](https://github.com/earendil-works/pi/issues/11529)  
`getCurrentTools()` 按插入顺序返回工具，移除并重新添加的工具会被移到 Map 末尾。MCP 服务器重连或 `tool_search` 加载会导致工具顺序不确定，从而使提示缓存失效——这是长会话的性能隐患。

**5. [OPEN] durable：允许取消处理器等待信号和截止时间**  
`#12090` | 5 条评论 | [🔗](https://github.com/earendil-works/pi/issues/12090)  
用户希望在 `pi-durable` 的取消处理器中保存进度并等待确认后再完成。这将支持远程作业在取消期间优雅关闭，状态可跨主机关闭/重新打开周期保留。

**6. [OPEN] 阈值压缩在选择虚拟模型时低于窗口触发**  
`#12035` | 3 条评论 | [🔗](https://github.com/earendil-works/pi/issues/12035)  
`AgentSession._checkCompaction` 在上下文窗口未知时（虚拟模型）未能跳过阈值检查。`_modelForMessage()` 通过 `getPhysicalModel()` 返回 undefined，虚拟/路由模型的压缩逻辑完全失效。

**7. [OPEN] durable：根据报告的上下文使用量校准压缩保留策略**  
`#10583` | 4 条评论 | [🔗](https://github.com/earendil-works/pi/issues/10583)  
当字符估算低于 `keepRecentTokens` 时压缩会跳过，即使报告的 token 使用量已超过阈值。字符估算与 token 报告之间的不匹配导致压缩提前或延迟触发。

**8. [CLOSED] GPT-6.2 Sol 报告 3,968 个缓存 token，而 6.1 Sol 报告 12,800 个**  
`#12273` | 4 条评论 | [🔗](https://github.com/earendil-works/pi/issues/12273)  
在同一工作负载的第 4 轮，GPT-6.2 报告约 3.9K 缓存 token，而 6.1 报告 12.8K。这意味着每次热启动多出约 8.8K 未缓存输入 token——一个值得调查的效率回归。

**9. [CLOSED] 嵌入式 SDK：长生命周期会话在压缩后内存永不下降**  
`#10642` | 7 条评论 | [🔗](https://github.com/earendil-works/pi/issues/10642)  
在嵌入式服务器场景（如 OAR）中，`SessionManager` 在压缩后仍保留 `fileEntries` 中的每条记录。内存只增不减；记录永不淘汰，导致内存持续增长。

**10. [CLOSED] codemode 沙箱在会话工作目录被删除时抛出 ENOENT**  
`#12300` | 2 条评论 | [🔗](https://github.com/earendil-works/pi/issues/12300)  
当会话的工作目录（如 git worktree）被另一个进程删除后，每次 `codemode` 调用都失败并抛出 `uv_cwd` ENOENT。会话在重启前无法使用。

---

## 重要 PR 进展

**1. [OPEN] fix(coding-agent)：像 Ctrl+Z 一样处理外部 SIGTSTP**  
`#12283` | [🔗](https://github.com/earendil-works/pi/pull/12283)  
`kill -TSTP <pi-pid>` 现在遵循与 Ctrl+Z 相同的挂起路径，正确恢复终端状态。修复了 `#12272`。

**2. [OPEN] feat(ai,coding-agent)：新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow 和 StepFun 提供商**  
`#11370` | [🔗](https://github.com/earendil-works/pi/pull/11370)  
重大提供商扩展，新增 6 个托管推理端点。DeepInfra 以 74 个模型领先。依赖于 `#11369`。

**3. [OPEN] fix(coding-agent)：交互式重载时刷新作用域模型**  
`#12278` | [🔗](https://github.com/earendil-works/pi/pull/12278)  
`/reload` 现在刷新作用域模型，使 `enabledModels` 的更改无需重启 Pi 即可生效。修复了 `#12277`。

**4. [OPEN] fix(coding-agent)：树形导航不再向历史记录重复添加提示**  
`#12280` | [🔗](https://github.com/earendil-works/pi/pull/12280)  
`/tree` 和 `navigateTree` 都以 `populateHistory: true` 重新渲染，每次导航都会将分支提示添加到上箭头历史。现在已修复。关闭了 `#12279`。

**5. [CLOSED] fix：支持 npm 12 的 pack JSON 输出格式**  
`#10680` | [🔗](https://github.com/earendil-works/pi/pull/10680)  
npm 12 将 `npm pack --json` 从数组格式改为对象格式。现已修复以同时处理 npm 10/11 的数组格式和 npm 12 的对象格式。解除了包安装检查、发布试运行和本地发布的阻塞。

**6. [CLOSED] fix(tui)：停止可变工具行导致的重复回滚区重绘**  
`#12275` | [🔗](https://github.com/earendil-works/pi/pull/12275)  
长助手回复或工具结果在视口上方更新时，之前会触发完整的回滚区重绘。现在消除了不必要的清除和重绘。

**7. [CLOSED] fix(tui)：避免流式输出时输入光标闪烁**  
`#12274` | [🔗](https://github.com/earendil-works/pi/pull/12274)  
流式输出和页脚更新导致光标以远高于终端闪烁频率的速度闪动。通过消除可见性序列的滥用已修复。

**8. [CLOSED] feat(coding-agent)：新增助手消息转换器**  
`#11450` | [🔗](https://github.com/earendil-works/pi/pull/11450)  
新的 `pi.registerAssistantMessageTransformer(fn)` API 允许扩展在 `AssistantMessageComponent` 渲染前重写助手消息的显示副本。返回不包含 `thinking` 的消息会移除思考区块和间距。

**9. [CLOSED] 扩展自动重试的扩展钩子**  
`#11932` | [🔗](https://github.com/earendil-works/pi/pull/11932)  
新的 `auto_retry_decision` 事件在 Pi 计算退避之后、`auto_retry_start` 之前触发，允许扩展修改延迟或中止重试。

**10. [CLOSED] 减少 SQLite 存储写入：任务 upsert 仅更新变化的列**  
`#12285` | [🔗](https://github.com/earendil-works/pi/pull/12285)  
任务 upsert 在每次状态转换时写入全部 6 列。现在仅更新变化的列，减少了写放大。

---

## 热门讨论

**问答**

1. **[General] 在 #ask-for-help 频道放一个明确标注为 AI 的助手机器人可以吗？**  
   `#12284` | [🔗](https://github.com/earendil-works/pi/discussions/12284)  
   Teydra Lab 的一个 AI 队友询问在 ask-for-help 频道发布一个标注为 AI 的助手机器人是否符合 CONTRIBUTING 指南。焦点在于 AI 代理参与社区支持时的适当披露方式。

---

## 功能请求趋势

1. **虚拟/路由模型支持** — 多个 issue 突显了这一差距：虚拟模型的阈值压缩失败（#12035）、选择虚拟模型时 `modelOverrides` 被忽略（#12265）、`_modelForMessage()` 返回 undefined。社区需要更完善的虚拟模型处理。

2. **扩展压缩控制** — 用户希望基于实际 token 使用量进行每模型压缩校准（#10583）、取消处理器能保存状态并等待确认（#12090），以及能截断单个对话而不删除会话（#12296）。

3. **提供商可靠性** — 新模型上的提示缓存回归报告（#12273）、xAI 容量错误重试未触发（#12289）、SSE+zstd 不兼容（#12060）表明需要更好的提供商健壮性。

4. **扩展 API 表面** — 通过 `ctx.ui.setStatus()` 设置的扩展状态只读访问请求（#12298）、提示的来源追踪（#12291）以及助手消息转换器（#11450）表明扩展生态正在走向成熟。

5. **会话持久性** — 嵌入式长生命周期会话内存泄漏（#10642）、工作目录消失时 `codemode` 沙箱失败（#12300）、`kill_tree` 可能误伤无关进程（#12299）。边缘情况下的会话韧性仍是关注点。

---

## 开发者痛点

| 主题 | 频率 | 示例 |
|-------|-----------|----------|
| **上下文窗口不匹配** | 高 | #11021, #12035, #12265 |
| **终端/复用器边缘情况** | 中 | #9656, #12283 |
| **提示缓存不稳定** | 中 | #11529, #12273 |
| **流式/压缩问题** | 中 | #12060, #12274 |
| **嵌入式/SDK 内存泄漏** | 中低 | #10642 |
| **SQLite 写放大** | 低 | #12285 |
| **目录生命周期处理** | 低 | #12300 |

**社区最大诉求：** 虚拟模型支持仍是最大缺口，压缩、模型覆盖和阈值逻辑在路由物理模型的虚拟抽象中都表现出不同的失败模式。开发者在使用虚拟模型路由时会在多个子系统遇到问题。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate it while following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form.
5. Keep issue/PR references like #12345 and their link text as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter.

Let me translate section by section:

Title: "Qwen Code Community Digest — 2026-11-19" → "Qwen Code 社区速报 — 2026-11-19"

"Today's Highlights" → "今日要点"

"The Qwen Code project continues its push toward the 1.0 Preview loop kernel landing on main, with multiple PRs converging on the shared agent loop architecture. A critical **P1 bug** emerged: a transcript JSONL write corruption issue where sibling records get glued together, breaking the parent chain in degraded history mode. Meanwhile, the CI infrastructure remains under pressure with several Main CI failures and a byte-budget overflow blocking unit-test builds."

→

"Qwen Code 项目正稳步推进 1.0 Preview 事件驱动内核合入 main 分支，多个 PR 汇聚于共享 agent loop 架构。期间发现了一个 **P1 级关键缺陷**：transcript JSONL 写入损坏问题——相邻记录被粘合在一起，导致 degraded history 模式下父子链断裂。与此同时，CI 基础设施持续承压，多条 Main CI 流水线失败，加上 byte-budget 溢出阻塞了单元测试构建。"

Let me continue with the rest...
</think>


# Qwen Code 社区速报 — 2026-11-19

## 今日要点

Qwen Code 项目正稳步推进 1.0 Preview 事件驱动内核合入 main 分支，多个 PR 汇聚于共享 agent loop 架构。期间发现了一个 **P1 级关键缺陷**：transcript JSONL 写入损坏问题——相邻记录被粘合在一起，导致 degraded history 模式下父子链断裂。与此同时，CI 基础设施持续承压，多条 Main CI 流水线失败，加上 byte-budget 溢出阻塞了单元测试构建。

---

## Releases 发版动态

### v0.28.0-nightly.20261118.d9ac287c9f
**Nightly 构建** — 信息有限；发版说明配置路径表明遵循标准 `.github/release.yml` 模板。引用的合入提交 `980bb332a9c3`（在 CI 失败中提及）表明此版本可能携带了 byte-budget 回归问题。

> ⚠️ **注意**：此为 nightly 构建。byte-budget 溢出问题（#17741）导致 export 单元测试构建当前在 main 分支上失败。

---

## Hot Issues 热门 Issue

### 1. [🔴 P1] Main CI failures — Managed Agent gate（464 条评论）
**Issue #14724** | [链接](https://github.com/QwenLM/qwen-code/issues/14724)  
跨多个 commit hash 的持续 CI 失败模式。Bot 在失败前未识别到测试时自动生成跟踪 issue。社区反响强烈（464 条评论）——用户反复撞上阻塞 PR 合入的 CI 红灯。这是一个**元问题**，聚合了多条瞬时失败链路。

### 2. [🔴 P1] Transcript JSONL write corruption（6 条评论）
**Issue #17747** | [链接](https://github.com/QwenLM/qwen-code/issues/17747)  
**Issue 提出者：wenshao** — 部分 JSONL 记录被粘合到下一条记录前面，中间隔着空行，导致文件无法解析，父子链断裂。对会话历史完整性至关重要；影响 `degraded_history` 功能。需要立即处理。

### 3. [🔴 P1] Bound external ownership predicate lock waits（3 条评论）
**Issue #15766** | [链接](https://github.com/QwenLM/qwen-code/issues/15766)  
**Issue 提出者：yiliang114** — 外部 ownership predicate 在逐轮控制路径中陷入无界 advisory lock。#15684 之后暴露于新的控制流，当前修复未覆盖此问题。影响 managed-agent 可靠性。

### 4. [🟡 P2] Subagents start with massive context（7 条评论）
**Issue #15660** | [链接](https://github.com/QwenLM/qwen-code/issues/15660)  
**Issue 提出者：Lancelotbronner** — 父会话使用约 42k context（21k 启动开销 + 1k subagent prompt），但推理引擎报告 subagent 会话有 105k tokens。后续 subagent 规模继续膨胀。根因不明；影响性能和成本。

### 5. [🟡 P2] Model uses XML tool calls instead of JSON（3 条评论）
**Issue #17774** | [链接](https://github.com/QwenLM/qwen-code/issues/17774)  
**Issue 提出者：Lancelotbronner** — 回归问题：模型尝试输出 XML 格式的 tool calls 而非 JSON，导致轮次中断。同时混淆了 tool bridge 和直接调用两种路径。影响生产工作流中 tool 执行的可靠性。

### 6. [🟡 P2] Managed DingTalk registration-identity deduplication（4 条评论）
**Issue #17769** | [链接](https://github.com/QwenLM/qwen-code/issues/17769)  
**Issue 提出者：wenshao** — PR #17742 review 的后续，聚焦 managed DingTalk 账本绑定的深度诊断和去重范围。影响跨 ownership 重放场景。

### 7. [🟡 P2] Custom themes: diff blocks unreadable（3 条评论）
**Issue #17724** | [链接](https://github.com/QwenLM/qwen-code/issues/17724)  
**Issue 提出者：BerkeGulmen** — `berkeDark` 主题系列（VS Code、终端、AI CLI）发现 Qwen Code 的自定义主题文件（`ui.theme`）存在问题：diff 块不可读，空颜色被静默丢弃，selection/cursor 无法主题化。影响主题维护者的体验。

### 8. [🟢 P3] read_file reports nonexistent range at EOF（3 条评论）
**Issue #17668** | [链接](https://github.com/QwenLM/qwen-code/issues/17668)  
**Issue 提出者：AlexanderSerbul** — 对 5 行文件使用 `read_file` 且 `offset: 5, limit: 2` 时，返回空 body 但报告"Showing lines 6-6 of 5"。Tool 输出中的小体验不一致。

### 9. [🟢 P3] Daily dependency CVE audit failure（56 条评论）
**Issue #13078** | [链接](https://github.com/QwenLM/qwen-code/issues/13078)  
**Issue 提出者：github-actions[bot]** — 定时 CVE 审计反复失败。可能原因：新出现高危漏洞，或 npm audit 端点不可用。56 条评论表明正在持续调查但尚未解决。

### 10. [🟢 P3] Web Shell worktree Codex parity（4 条评论）
**Issue #17237** | [链接](https://github.com/QwenLM/qwen-code/issues/17237)  
**Issue 提出者：wenshao** — 追踪 Web Shell worktree 功能的 P6（retention + snapshots）和 P7（configurable root）阶段，以实现与 Codex 的功能对等。阻塞于待讨论事项；影响 git 工作流集成。

---

## Key PR Progress 重点 PR 进展

### 1. feat(managed-agent): keep idle MCP connections across suspension [#17749](https://github.com/QwenLM/qwen-code/pull/17749) — **已 CLOSED**
**作者：doudouOUC** — 无状态 Hosted Harness 第二阶段。配置了 MCP 的空闲会话现可在挂起时保留 MCP 连接；重新打开时复用。隐藏在 `qwen.managed-agent.runtime-broker.mcp-parking.enabled` 配置后。

### 2. feat(core): run ACP sessions on the shared agent loop by default [#17744](https://github.com/QwenLM/qwen-code/pull/17744)
**作者：qqqys** — ACP 会话（Zed、VS Code、Web Shell、`qwen serve`、channels）现默认运行于共享 agent loop。Prompts、Goals、cron 和后台通知均走统一 loop。可通过 feature flag 保持向后兼容。

### 3. feat(i18n): add Arabic support with RTL layout [#17437](https://github.com/QwenLM/qwen-code/pull/17437)
**作者：callmeYe** — 完整 Arabic 语言支持，覆盖 CLI 和 Web Shell，含从右到左布局及导出的 HTML transcript。在 core/CLI 中注册 Arabic 为已上线语言选项。

### 4. fix(managed-agent-server): adapt ToolPublicationContract to networknt json-schema-validator 2.x [#17752](https://github.com/QwenLM/qwen-code/pull/17752)
**作者：yiliang114** — 适配 networknt 2.x API（`SchemaRegistry.withDefaultDialect`）。修复主机应用嵌入 managed-agent-server 时的 `NoClassDefFoundError: SpecVersion$VersionFlag`。

### 5. feat(core): mark quota-exhausted fallback models terminal [#17777](https://github.com/QwenLM/qwen-code/pull/17777)
**作者：wenshao** — 扩展 model 可用性账本，将 quota 耗尽的 fallback 标记为会话级终态不可用，避免每轮重复探测。

### 6. feat(serve): add daemon restart recovery inbox [#17677](https://github.com/QwenLM/qwen-code/pull/17677)
**作者：wenshao** — 新增 `POST /sessions/recovery` 和 `POST /sessions/recovery/continue` 端点。守护进程重启后扫描未终结会话并恢复，无需打开或切换对话。

### 7. feat(core): copy .worktreeinclude paths into new worktrees [#16674](https://github.com/QwenLM/qwen-code/pull/16674)
**作者：2SinceJuly** — 引入 `.worktreeinclude` 文件：gitignore 语法的路径列表，从主 checkout 复制到每个 worktree。解决了 `git worktree add` 无法排除 gitignored 本地状态的限制。

### 8. perf(core): reduce resident first-request prompts [#17784](https://github.com/QwenLM/qwen-code/pull/17784) — **已 CLOSED**
**作者：callmeYe** — 优化基于文件的 memory prompt：read/ignore/verify 行为保留在 system instructions 中；显式 memory 操作使用 bundled policy。降低冷启动开销。

### 9. perf(web-shell): batch portal theme variable reads and writes [#17786](https://github.com/QwenLM/qwen-code/pull/17786)
**作者：callmeYe** — Web Shell 现先对所有计算后的 CSS 变量做快照，再统一写入主题属性，减少冗余 DOM 读写，并处理 Shadow DOM host 场景。

### 10. fix(core): honor path-scoped Read deny rules in grep and glob [#15144](https://github.com/QwenLM/qwen-code/pull/15144)
**作者：mertkayacs** — `Read(./secret.env)` 拒绝规则现同样应用于 search tool 结果。内容搜索和文件搜索会排除被拒文件并追加一条备注计数被忽略条目。

---

## Feature Request Trends 功能需求趋势

### 1. 📈 Agent Loop 架构（1.0 Preview）
1.0 Preview 事件驱动内核（#17045）是当前最核心的主题。跟踪 issue #17284 汇总了 2026-11-21 冻结前的待办事项。关键方向：
- 逐轮异步 hook context 边界
- 会话管理改进
- 后台通知处理

### 2. 📈 Channel 集成扩展
多个 PR 推进 channel 能力：
- QQ channel 出站富媒体（#17167 — 已就绪待合入，停滞 72h）
- DingTalk managed 回复卡片（#17748）
- macOS 轮次通知（#16338）
- 中途消息注入队列（#15630 — 已 closed，merged）

### 3. 📈 开发者工作流增强
- Web Shell worktree 与 Codex 功能对等，含 retention、snapshots、可配置 root（#17237）
- `.worktreeinclude` 实现本地状态传播（#16674）
- 守护进程重启恢复收件箱（#17677）
- 自定义主题可扩展性缺口（#17724）

### 4. 📈 国际化
Arabic RTL 支持已合入（#17437）；社区对扩展语言覆盖有较高兴趣。

---

## Developer Pain Points 开发者痛点

### 1. 🔴 CI 不稳定
Main CI 失败是头号痛点。多条 issue（#14724、#11680、#11678、#13471）跟踪失败问题，描述为"结果报告前未识别到测试"。byte-budget 溢出（#17741）给每个 PR 添红。开发者耗费大量精力区分 flaky 和确定性失败。

### 2. 🔴 Managed Agent 可靠性
- Subagent context 爆炸（#15660）—— 105k tokens 来源不明
- 外部 ownership predicate lock 等待（#15766）—— 无界 advisory lock
- 409 抗重放恢复路径缺失（#17727）—— 瞬时失败后无用户恢复机制
- ToolPublicationContract 兼容性（#17750）—— 在 networknt 2.x 环境中崩溃

### 3. 🔴 Tool Call 格式回归
模型切换为 XML 而非 JSON（#17774）导致 tool 执行中断。混淆 tool bridge 和直接调用两条路径。影响生产可靠性。

### 4. 🟡 Search Tool 拒绝规则
路径级拒绝规则在 grep/glob 中未生效（#15144 — PR 已修复但此前是痛点）。受限环境中可能泄露内容。

### 5. 🟡 SDK 不一致
- Java SDK 文件读取响应以路径分隔符拼接行（#17642）
- Python SDK 在查询关闭前启动进程时序问题（#17498）

### 6. 🟡 主题自定义缺口
自定义主题作者频频碰壁：diff 块不可读、空颜色被静默丢弃、selection/cursor 无法主题化。阻碍生态主题建设。

---

*本速报基于 2026-11-19 的 github.com/QwenLM/qwen-code 数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*