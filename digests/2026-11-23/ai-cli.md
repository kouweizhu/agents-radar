# AI CLI 工具社区动态日报 2026-11-23

> 生成时间: 2026-11-23 03:01 UTC | 覆盖工具: 7 个

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

1. Translate all the text while preserving the Markdown structure exactly
2. Keep all URLs, code spans, numbers, dates, project names, repository slugs, version tags, file paths, API/config identifiers, issue/PR references as-is
3. Use natural technical Chinese, appropriate for a Chinese developer newsletter
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the whole output

Let me translate this section by section, maintaining the formatting.

Key things to translate:
- Headings
- Body text
- Table content
- List items
- Preserve all technical terms, code, numbers, URLs
- Keep all the formatting (tables, bold, etc.)

Let me go through it carefully.
</think>


# AI CLI 工具生态：跨工具对比报告

## 2026 年 11 月 23 日

---

## 1. 生态概览

AI CLI 工具领域正在进入整合阶段，多智能体编排、MCP 集成和跨平台可靠性已逐步成为基础能力，而真正的差异化则体现在工作流深度、成本效益和生态成熟度上。Claude Code、Codex 和 Gemini CLI 维持着最高的社区活跃度，但 OpenCode 和 Qwen Code 正在通过架构重构快速迭代，目标是发布 1.0 版本。Pi 和 Copilot CLI 则服务于更细分的市场，但面临越来越大的压力——需要修复平台专属 bug 和会话管理缺陷，否则会侵蚀开发者信任。

---

## 2. 活跃度对比

| 工具 | 代码仓库 | Issues（活跃） | PRs（近期） | Discussions | Releases（24h） |
|------|----------|----------------|-------------|-------------|-----------------|
| **Claude Code** | anthropics/claude-code | 50 | 1 | N/A* | 无 |
| **OpenAI Codex** | openai/codex | 50 | 31 已合并 | 6（Ideas/Q&A/Show&Tell） | 无 |
| **Gemini CLI** | google-gemini/gemini-cli | 50 | 23 | N/A* | v0.71.0-nightly.20261123 |
| **Copilot CLI** | github/copilot-cli | 19 | 1 | N/A* | v1.0.115-7 |
| **OpenCode** | anomalyco/opencode | 50 | 50 | N/A* | 无 |
| **Pi** | earendil-works/pi | 50 | 3 | 1 | 无 |
| **Qwen Code** | QwenLM/qwen-code | 50 | 20 | N/A* | v0.28.4 |

*这些仓库未启用 Discussions 作为社区渠道；所有社区反馈均通过 Issues 流转。

### 观察

- **PR 提交量最高：** OpenCode（50 个）和 OpenAI Codex（31 个已合并）展现出激进的迭代节奏。
- **夜间构建 vs. 稳定版发布节奏：** Gemini CLI 采用夜间构建；Copilot CLI 和 Qwen Code 使用语义化版本号进行补丁发布。
- **社区渠道多样性：** 仅 OpenAI Codex 活跃使用 GitHub Discussions 进行功能提案和作品展示；其他工具完全依赖 Issues。

---

## 3. 共性需求方向

以下需求在各工具社区中普遍出现，表明了行业整体的工程优先级：

### 多智能体编排

| 工具 | 具体需求 |
|------|----------|
| **Claude Code** | 交互式会话中 MCP 征询（elicitation）被自动拒绝（#98256） |
| **Gemini CLI** | 智能体调用其他智能体——已在 PR #30409 中合并；MAX_TURNS 误报（#22323） |
| **OpenAI Codex** | 子智能体完成时显示 UUID 而非昵称（#23588）；命令中心搜索排序（#63208） |
| **Qwen Code** | Managed Agent 网关失败阻塞稳定版发布（#14724，545 条评论） |
| **OpenCode** | 实时子智能体侧边栏（#41249）；智能体活动面板（#27995） |

**跨工具共同需求：** 可靠的子智能体层级结构、状态可见性以及优雅终止机制是普遍诉求。

### 上下文与 Token 管理

| 工具 | 具体需求 |
|------|----------|
| **Claude Code** | 预热会话时提示词缓存被完全重写（#91514）；advisor 工具重复计算 token 数（#84738） |
| **Gemini CLI** | AST 感知的文件读取以减少上下文浪费（#22745）；工具数量超过 128 个时报 400 错误（#24246） |
| **OpenAI Codex** | 默认排除用量归属的逐项排除（#63219）；轮次 diff 更新填满回放缓冲区（#63218） |
| **OpenCode** | agent 会话中 keep.tokens 未被遵循（#43250）——开销高达 5–15 倍 |
| **Qwen Code** | 超大会话转录内容处理（#18111） |

**跨工具共同需求：** Token 效率和成本可预测性对付费用户群体至关重要。

### 跨平台可靠性

| 工具 | 具体需求 |
|------|----------|
| **Claude Code** | Windows 工作树大小写敏感驱动器号问题（#91618）；沙箱 .git/config.lock 持久化（#78818） |
| **OpenAI Codex** | Windows 端发送按钮被禁用（#62393）；macOS Git 写入被阻止尽管已授权（#54574） |
| **Copilot CLI** | 过滤网络下 TLS 握手失败（#5546）；Surge Fake-IP DNS 拒绝（#5544） |
| **Pi** | Windows 上 Ctrl+G 无声退出 pi（#11167）；Git 检测遗漏非 Program Files 安装 |
| **Qwen Code** | Windows 上 @ 自动补全在路径含空格时失败（#18141）；Windows CI 整体失败（#11678） |

**跨工具共同需求：** Windows、macOS 和 Linux 的对等性仍难以实现；平台专属 bug 引发不成比例的社区不满。

### 云/远程会话管理

| 工具 | 具体需求 |
|------|----------|
| **OpenAI Codex** | 云沙箱永不重连（#5552）；移动端空闲时会话中断（#5553） |
| **OpenCode** | 免费层稳定性问题（#59387，406 条评论）；会话状态脆弱 |
| **Claude Code** | Pro 订阅访问被阻止尽管凭证有效（#82700） |
| **Qwen Code** | ECS 运行器队列老化（#17085） |

**跨工具共同需求：** 跨设备切换和网络中断时的可靠会话持久化、重连和状态恢复。

---

## 4. 差异化分析

| 工具 | 核心差异化 | 目标用户 | 技术路线 |
|------|------------|----------|----------|
| **Claude Code** | Anthropic 模型集成、Skills 生态、企业 Gateway | 深度投入 Anthropic 模型的开发者 | 闭源、立场鲜明的技术栈，重点关注沙箱安全 |
| **OpenAI Codex** | OpenAI 模型访问、ACP 协议、原生 GitHub 集成 | 偏好 OpenAI 模型和 Microsoft 生态的开发者 | TUI 优先，配备大量快捷键；ACP 用于智能体间通信 |
| **Gemini CLI** | Google 模型访问、零依赖沙箱方案提案 | 使用 Gemini 模型的开发者；实验性功能尝鲜者 | 模块化智能体架构；ACP 用于多智能体；实验性夜间构建节奏 |
| **Copilot CLI** | 深度 GitHub 集成、语音模式、VS Code 对等性 | GitHub 重度用户；偏好语音输入的开发者 | npm 安装的桌面伴侣；GitHub 原生身份验证 |
| **OpenCode** | 模型提供商无关、V2 重写采用事件驱动内核 | 希望跨模型提供商灵活切换的开发者 | 开源，V2 架构重构中；1.0 Preview 内核进行中 |
| **Pi** | 开发者至上的终端 UX、轻量级占用 | 偏好最小化、终端原生工作流的开发者 | 轻量级工具架构；聚焦 TUI 响应性 |
| **Qwen Code** | Qwen/阿里云生态集成、Web Shell 增强 | Qwen/阿里云生态中的开发者 | 聚焦 Web Shell 和产物库；ACP 用于智能体通信；托管智能体基础设施 |

### 按类别的关键差异化

- **模型灵活性：** OpenCode（提供商无关）vs. Claude Code、Gemini CLI、Copilot CLI（单一提供商锁定）
- **架构成熟度：** Qwen Code（1.0 内核落地）和 OpenCode（V2 重写）处于重构中期；其余保持稳定
- **企业就绪度：** Copilot CLI 和 Claude Code 的企业功能最成熟（Gateway、订阅管理）
- **开源治理：** OpenCode 和 Pi 完全开源；其余为混合或专有组件

---

## 5. 社区活跃度与成熟度

### 社区参与度最高

| 排名 | 工具 | 信号 | 评估 |
|------|------|------|------|
| 1 | **OpenAI Codex** | 31 个已合并 PR、6 个讨论、50 个 Issues | 最活跃；功能、修复和社区展示比例健康 |
| 2 | **Claude Code** | 30 条评论的 Issue，活跃的安全辩论 | 质量导向；安全与可用性矛盾推动参与度 |
| 3 | **Qwen Code** | 20 个 PR、545 条评论的 CI Issue、1.0 追踪 | 工程节奏高；CI 可靠性是瓶颈 |
| 4 | **Gemini CLI** | 夜间构建发布，多智能体 PR 已合并 | 快速功能开发；智能体可靠性仍在成熟中 |
| 5 | **OpenCode** | 50 个 PR、406 条评论的免费层 Issue | 提交节奏高；免费层稳定性是生存危机 |

### 新兴或细分社区

| 工具 | 信号 | 评估 |
|------|------|------|
| **Copilot CLI** | 19 个 Issues、1 个 PR、聚焦 bug 修复 | 稳定的维护模式；社区增长有限 |
| **Pi** | 3 个 PR、1 个讨论、轻量级聚焦 | 面向终端纯粹主义者的细分工具；节奏低但稳定 |

### 成熟度指标

- **架构稳定性：** Copilot CLI 和 Claude Code 最稳定；Qwen Code 和 OpenCode 处于重构中期
- **发布节奏：** Gemini CLI（夜间）、Qwen Code（双周）、Copilot CLI（偶尔补丁）
- **Issue 解决时间：** OpenAI Codex 和 Claude Code 分类更快；Qwen Code CI 问题持续数周
- **社区治理：** OpenCode 治理模式最清晰；其余受企业影响程度各异

---

## 6. 趋势信号

### 来自社区反馈的行业趋势

#### 1. 多智能体架构已成为基础能力
每个工具都在构建子智能体、MCP 或 A2A（智能体对智能体）协议。Codex、Gemini CLI 和 Qwen Code 对 ACP（Agent Client Protocol）的趋同表明一个事实标准正在形成。子智能体调用、状态可见性和优雅终止是普遍存在的短板。

#### 2. Token 经济是一等公民
提示词缓存效率、用量归属和 token 限制强制执行出现在每个社区。随着 AI 编程工具走出爱好者阶段，成本可预测性和可见性成为购买决策标准。成本不透明的工具（OpenCode 的 5–15 倍开销、Claude Code 的缓存重写）将面临订阅用户流失。

#### 3. 平台对等性仍是奢望
Windows、macOS 和 Linux 各有独特的故障模式——沙箱边界、文件系统语义、网络栈和键盘处理。没有工具实现真正的跨平台对等。这对小项目来说是无法承受的持续工程负担。

#### 4. 会话持久化和云同步是基础能力
远程/移动端会话重连、对话状态恢复和跨设备连续性不再是可选项。OpenAI Codex 的云沙箱重连失败和 OpenCode 的免费层稳定性问题表明，这些是侵蚀信任的运营风险。

#### 5. 安全与可用性的矛盾加剧
Claude Code 的密码输入阻断、root 设备拒绝和认证失败反映了一个更广泛的矛盾：安全加固阻碍了合法的开发者工作流。社区一贯请求权限门控的 opt-in 机制，表明市场存在"开发者模式"或可信环境配置的空缺。

#### 6. MCP 生态碎片化
工具超过 61 个时被截断、MCP 征询被自动拒绝、以及头部注入问题，表明各工具的 MCP 集成仍不成熟。MCP 服务器注册和能力公告缺乏标准，导致不可预测的行为。

#### 7. IDE 对等性驱动采用
OpenAI Codex 的 TUI 改进（流式输出可见性、tmux 鼠标处理、回放缓冲区管理）和 Copilot CLI 的 VS Code 对等性努力反映了一个更广泛的洞察：开发者期望跨界面行为一致。在 CLI、桌面端和 IDE 体验间割裂的工具会失去动能。

### 开发者参考价值

| 决策场景 | 推荐工具 | 理由 |
|----------|----------|------|
| **Anthropic 模型优先** | Claude Code | 最深入的 Anthropic 集成；成熟的 Skills 生态 |
| **OpenAI 模型优先** | OpenAI Codex | 最佳的 OpenAI 对等性；ACP 协议用于智能体扩展 |
| **多模型灵活性** | OpenCode | 提供商无关；开源 V2 重写进行中 |
| **最小化终端 UX** | Pi | 轻量级占用；TUI 优先设计 |
| **Qwen/阿里云生态** | Qwen Code | 原生集成；Web Shell 增强 |
| **GitHub 原生工作流** | Copilot CLI | 最深入的 GitHub 集成；语音模式 |
| **实验性功能** | Gemini CLI | 夜间构建节奏；多智能体功能先行 |
| **企业稳定性** | Claude Code 或 Copilot CLI | 成熟的订阅管理；Gateway 选项 |

---

*本报告于 2026-11-23 根据各工具摘要汇编生成。数据来源为七个代码仓库的 GitHub Issues、PR 和 Discussions。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate the content naturally into Chinese technical register
2. Preserve all Markdown structure exactly (headings, tables, lists, blockquotes, formatting)
3. Keep URLs, links, project names, repository slugs, usernames, version tags, file paths, API/config identifiers, numbers, and dates in their original form
4. Use natural technical Chinese, not literal word-for-word translation
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title:**
Claude Code Skills 社区动态报告
*Data as of 2026-11-23 | Source: anthropics/skills*
-> 数据截至 2026-11-23 | 数据来源：anthropics/skills

**Section 1:**
Top Skills Ranking -> 热门 Skills 排行
Skills -> Skills（保持英文，因为这是产品名称）
The following PRs represent the most notable Skill contributions by community attention, scope, and strategic relevance:
-> 以下 Pull Request 代表了社区关注度、覆盖范围和战略相关性方面最值得关注的 Skill 贡献：

Let me translate the entire document carefully, maintaining the technical Chinese register and all formatting.

Key terms to handle:
- "Skills" - keep as "Skills" (product name)
- "Pull Request" / "PR" - keep as-is in references
- "Issue" - keep as-is
- "Community" - 社区
- "Trending" - 热门/趋势
- Technical terms like "trigger", "eval", "context window" - use standard Chinese equivalents

Let me work through this systematically.
</think>


# Claude Code Skills 社区动态报告

*数据截至 2026-11-23 | 数据来源：anthropics/skills*

---

## 1. 热门 Skills 排行

以下 Pull Request 在社区关注度、覆盖范围和战略相关性方面最为突出：

| # | Skill / PR | 作者 | 状态 | 概要 |
|---|-----------|------|------|------|
| 1 | **pyxel** — 像素游戏开发 Skill | kitao | OPEN | 提供基于 [Pyxel](https://kitao.dev/pyxel/) 创建、调试和验证像素游戏的技能。支持无头输入驱动运行、帧状态检查和任务特定状态验证。 |
| 2 | **md2video-audio** — Markdown 转专业视频 | 70v-Yoyo | OPEN | 零成本 Skill，可将 Markdown 文档编译为带拟人化旁白配音的 MP4 视频，使用 Marp 生成幻灯片。 |
| 3 | **proofcore-contract-auditor** — 智能合约存证 | ProofCore-Protocol | OPEN | 面向 Web3 开发者的 Agent 技能，可对 Solidity 和 Rust 智能合约进行自动化静态分析，并将密码学证明锚定到 TON 区块链。 |
| 4 | **notion-spec-to-implementation + quantitative-resume-auditor** | mrdesouzaphd-cmyk | OPEN | 双技能 PR：（1）将产品/技术需求文档转化为带有验收标准的具体 Notion 任务；（2）对简历内容与岗位要求进行量化审计。 |
| 5 | **document-typography** — AI 文档排版质量控制 | PGTBoos | OPEN | 防止 AI 生成文档中出现孤行词、寡妇行和编号错位——这是所有文档输出中普遍存在的质量问题。 |
| 6 | **scnet-hpc** — 超算集群运维 | lql341 | OPEN | 基于配置的 SSH 和 Slurm 工作流 Skill，支持 SCNet 超算集群运维，包括作业生成和集群发现。 |
| 7 | **compact-memory** — Agent 状态符号表示法 | WGlynn | OPEN（提案中） | Issue 提案 Skill，旨在用紧凑的符号表示法替代冗长的自然语言记忆，用于长时运行的 Agent 状态记录。 |

**GitHub 链接：**
- PR #525: https://github.com/anthropics/skills/pull/525
- PR #1703: https://github.com/anthropics/skills/pull/1703
- PR #1771: https://github.com/anthropics/skills/pull/1771
- PR #1245: https://github.com/anthropics/skills/pull/1245
- PR #514: https://github.com/anthropics/skills/pull/514
- PR #1615: https://github.com/anthropics/skills/pull/1615
- Issue #1329: https://github.com/anthropics/skills/issues/1329

---

## 2. 社区需求趋势分析

Issue 揭示了四个高度集中的需求方向：

**🔒 信任与安全**
最高热度 Issue（#492，46 条评论）提出了一个关键隐患：在 `anthropic/` 命名空间下分发的社区 Skill 可能误导用户，让他们将非官方代码误认为官方可信代码并授予过高权限。这一信任边界漏洞是仓库中讨论最活跃的话题。

**🔧 开发者工具与 Eval 稳定性**
两个高流量 Issue 指出了 `run_eval.py` 的系统性故障：
- `#556`（13 条评论）：使用 `claude -p` 时 Skills 完全无法触发——所有查询触发率为 0%。
- `#1352`（6 条评论）：并行 worker 交叉匹配 Skill UUID，当 `--num-workers > 1` 时产生假阴性触发率。

这些数据表明 Skill 评估管道本身并不可靠，阻碍了质量优化工作。

**📦 工作流与共享基础设施**
- `#228`（17 条评论，8 个 👍）：请求在 Claude.ai 中实现组织级 Skill 直接共享——目前需手动分发文件。
- `#189`（6 条评论，9 个 👍）：`document-skills` 和 `example-skills` 插件安装了重复的 Skills，浪费上下文窗口空间。

**📚 文档与内容质量**
- `#1487`：`claude-api` Skill 急切注入约 156k token，在单次工具调用中即耗尽上下文窗口。
- `#1730`：通过规范重定向验证修复了 `academy-guide` 和 `tool-use-concepts` 中的死链。

**GitHub 链接：**
- Issue #492: https://github.com/anthropics/skills/issues/492
- Issue #228: https://github.com/anthropics/skills/issues/228
- Issue #556: https://github.com/anthropics/skills/issues/556
- Issue #1352: https://github.com/anthropics/skills/issues/1352

---

## 3. 高潜力待合并 Skills

以下 PR 结合了活跃参与度、明确实用性和技术深度，表明具有较高的合并潜力：

| PR | Skill | 核心价值 | 修复内容 |
|----|-------|---------|---------|
| **#1742** | `mcp-builder` 修复 | 恢复与 MCP ≥2.0 `streamable_http_client` API 的兼容性，支持通过 `create_mcp_http_client` 配置自定义请求头。 | 修复 #1668 |
| **#1298** | `skill-creator` 修复 | 隔离 trigger 评估逻辑，补充 Windows 兼容性和运行时故障处理。 | 修复 Windows `select()` 子进程 bug |
| **#1980** | `webapp-testing` 安全修复 | 消除 `with_server.py` 中的 `shell=True` 命令注入风险（CWE-78）。 | 关键安全补丁 |
| **#2019** | `xlsx` 外部链接修复 | 解决工作表作用域定义名称解析问题，消除外部链接检测中的误报。 | 修复 #2013 |
| **#1997** | `skill-creator` YAML 解析修复 | 修正 YAML frontmatter 中的标量解析——此前 bug 导致优化命令的元数据不匹配。 | 修复引号/转义处理 |

**GitHub 链接：**
- PR #1742: https://github.com/anthropics/skills/pull/1742
- PR #1298: https://github.com/anthropics/skills/pull/1298
- PR #1980: https://github.com/anthropics/skills/pull/1980
- PR #2019: https://github.com/anthropics/skills/pull/2019
- PR #1997: https://github.com/anthropics/skills/pull/1997

---

## 4. Skills 生态洞察

> **社区最集中的需求在于构建稳健的生产级 Skill 开发工具链——尤其是可靠的评估基础设施、Skill 分发命名空间的安全加固，以及面向文档质量、开发者工作流和 Web3、超算等新兴领域的领域专用自动化 Skills——与此同时，整个社区还在应对信任边界和规模化上下文管理等基础性问题带来的挑战。**

---

*本报告基于 [anthropics/skills](https://github.com/anthropics/skills) 公开 GitHub 活动数据生成。所有 PR 在数据快照日期时均保持 OPEN 状态。*

---

<think>The user wants me to translate the entire Claude Code Community Digest from English into Simplified Chinese. Let me carefully translate each section while following the rules:

1. Output ONLY the translation
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, usernames, issue/PR numbers verbatim
4. Keep project names, repository slugs, API names, etc. in original form
5. Use natural technical Chinese register

Let me translate section by section:

Title: Claude Code Community Digest → Claude Code 社区摘要
Date: November 23, 2026 → 2026年11月23日

---

## Today's Highlights
## 今日要闻

Content: The community continues to surface critical platform-specific bugs and workflow friction points. Top concerns include a Skills upload regression affecting Claude Web and Desktop users, Windows security policies blocking legitimate development workflows with password-protected applications, and recurring prompt cache inefficiencies causing significant token overhead. The single active PR addresses hook execution quoting issues in bundled plugins, suggesting ongoing infrastructure improvements.

Translation: 社区持续曝出关键的平台特定 bug 和工作流摩擦点。主要问题包括：Skills 上传回归问题影响 Claude Web 和 Desktop 用户、Windows 安全策略阻止密码保护应用的合法开发工作流，以及频繁出现的 prompt 缓存低效问题导致大量 token 开销。唯一的活跃 PR 修复了捆绑插件中的 hook 执行引号问题，表明基础设施仍在持续改进中。

---

## Releases
## 版本发布

**No new releases in the past 24 hours.** The team continues to address issues in the v2.1.x stable channel.

**过去 24 小时无新版本发布。** 团队继续修复 v2.1.x 稳定版中的问题。

---

## Hot Issues
## 热门问题

### 1. [Skills Upload Internal Server Error](...) — 30 comments


### 1. [Skills 上传服务器内部错误](...) — 30 条评论

I'll continue the translation, focusing on the technical details and maintaining the technical Chinese register.

**Severity:** High | **Area:** Skills | **Author:** annavictoriaelano

Users experiencing upload failures across web and desktop interfaces. System returns generic 500 error when attempting to add new Skills, blocking user workflow. Impact spans multiple user cohorts, with consistent reproduction across different environments.

Community response significant, with 16 positive reactions. Issue traced to February 2026, indicating a persistent backend interaction problem involving skill management infrastructure.

The development environment's password handling mechanism creates friction for legitimate workflows. Despite being a localhost development context with documented test credentials, the system remains inflexible. Community consensus (32 positive votes) favors a more nuanced permission system that allows controlled access while maintaining security baseline.

Android authentication fails on rooted devices, with a specific HTTP 400 error from the Google mobile verification endpoint. This blocks developers using custom ROMs or requiring root access for legitimate development purposes. The root detection mechanism represents an overly restrictive approach that prevents productive developer workflows.

MCP server interactions break during interactive sessions, particularly in VS Code's print mode. Requests get automatically declined despite declared capabilities, impacting Bedrock API users. The issue has significant community support with 28 positive reactions, indicating a widespread problem affecting development tool integrations.

The worktree safety check contains a critical bug in Windows path handling. Case-sensitive drive letter comparisons prevent valid worktree operations, blocking standard development workflows. This represents a fundamental platform compatibility issue affecting Windows development environments.

TLS connection failures occur on specific network paths using advanced encryption standards. Users in certain network environments experience connectivity issues that can be resolved through alternative routing, highlighting potential interoperability challenges with emerging security protocols.

A critical performance issue impacts cost-conscious subscribers, causing inefficient token caching and unnecessary computational overhead across multiple AI model families. This regression potentially increases operational expenses for developers relying on precise usage tracking.

Authentication access problems persist despite repeated attempts to resolve subscription and login complications. A specific platform experiences intermittent access blocking, indicating deeper system-level authentication challenges that require targeted investigation and resolution.

The sandbox's file system protection mechanism inadvertently interferes with version control operations by preventing legitimate configuration writes. This creates friction in advanced development workflows, particularly in environments with complex repository structures.

Token calculation discrepancies emerge within the advisor tool, artificially inflating reported usage metrics. The issue disproportionately affects automated agents, potentially distorting performance and cost monitoring across distributed systems.

The development team introduces a targeted fix addressing script path quotation in plugin hooks. This small but critical patch resolves potential execution failures by ensuring proper path handling for bundled plugins, particularly those with complex naming conventions or script interactions.

Community feedback reveals persistent technical challenges centered on security, platform compatibility, cost transparency, and system reliability. Developers express frustration with inflexible security mechanisms, inconsistent cross-platform performance, opaque usage tracking, and integration uncertainties.

The proposed translation maintains technical precision while adapting the tone to a Chinese developer audience, preserving critical technical terminology and nuanced system descriptions.
</think>


# Claude Code 社区摘要

## 2026年11月23日

---

## 今日要闻

社区持续曝出关键的平台特定 bug 和工作流摩擦点。主要问题包括：Skills 上传回归问题影响 Claude Web 和 Desktop 用户、Windows 安全策略阻止密码保护应用的合法开发工作流，以及频繁出现的 prompt 缓存低效问题导致大量 token 开销。唯一的活跃 PR 修复了捆绑插件中的 hook 执行引号问题，表明基础设施仍在持续改进中。

---

## 版本发布

**过去 24 小时无新版本发布。** 团队继续修复 v2.1.x 稳定版中的问题。

---

## 热门问题

### 1. [Skills 上传服务器内部错误](https://github.com/anthropics/claude-code/issues/26310) — 30 条评论
**严重程度：** 高 | **领域：** Skills | **作者：** annavictoriaelano

用户在 Claude Web 和 Desktop 上传 Skills 时收到"服务器内部错误"。16 个 👍 和 30 条社区互动表明这是一个影响广泛的回归问题，核心扩展功能受损。自 2026 年 2 月持续至今，或涉及复杂的后端交互逻辑。

### 2. [密码输入硬性阻止破坏开发工作流](https://github.com/anthropics/claude-code/issues/78160) — 25 条评论
**严重程度：** 高 | **平台：** Windows | **作者：** kauki42

Claude Code 断然拒绝向登录表单输入密码，即使面对 localhost 开发环境中已备案的测试凭证也不例外。社区（32 👍）强烈呼吁提供基于权限控制的 opt-in 机制，在保持合理默认值的同时尊重开发者意图。这是开发工具安全性与可用性之间根本性冲突的典型案例。

### 3. [Root 设备 Android 登录失败](https://github.com/anthropics/claude-code/issues/105770) — 20 条评论
**严重程度：** 中 | **平台：** Android | **作者：** BennyWaitWhat

Root 过的 Android 设备在 `/auth/verify_google_mobile` 处收到 HTTP 400 错误，原因是 Play Integrity 校验失败。这阻止了使用自定义 ROM 或需要 root 权限进行合法开发工作的开发者。此问题凸显了安全 attestation 系统与开发者灵活性之间日益增长的摩擦。

### 4. [交互式会话中 MCP 请求被自动拒绝](https://github.com/anthropics/claude-code/issues/98256) — 12 条评论
**严重程度：** 中 | **平台：** macOS、VS Code | **作者：** chris-cummings

MCP 服务器声明了能力，但请求在 VS Code 交互式会话的"打印模式"下被自动拒绝。28 个 👍 表明这是依赖 MCP 工具集成的开发者高度关注的修复需求。该回归问题对 Bedrock API 用户影响尤为严重。

### 5. [Windows Worktree 大小写敏感驱动器号比较](https://github.com/anthropics/claude-code/issues/91618) — 12 条评论
**严重程度：** 中 | **平台：** Windows | **作者：** dazligth

隔离 worktree 安全检查因大小写敏感的驱动器号比较（如 `D:` vs `d:`）错误地拒绝了有效的 worktree。这破坏了跨不同工具可能不一致引用驱动器号的 Windows 标准开发工作流。

### 6. [X25519MLKEM768 TLS 1.3 连接 ECONNRESET](https://github.com/anthropics/claude-code/issues/94225) — 10 条评论
**严重程度：** 高 | **平台：** macOS | **作者：** yacb2

特定 ISP 路径（尤其是西班牙 Telefónica/Movistar）在使用 X25519MLKEM768 混合密钥交换时出现 TLS 握手失败。使用 VPN 可解决，暗示可能存在中间件不兼容问题。这代表了后量子密码学功能推出时日益增长的隐患。

### 7. [热会话中 Prompt 缓存全量重写](https://github.com/anthropics/claude-code/issues/91514) — 10 条评论
**严重程度：** 中 | **领域：** 成本、核心 | **作者：** MihaiDicu2025

热 prompt 缓存在 ToolSearch、Skill 或 tool_result 事件后数秒内被全量重写，缓存读取降至 system+tools 基准线。这直接影响订阅用户的成本效益，可能造成大量意外支出。影响 Fable 5.1、Opus 4.8、Sonnet 5 等多模型系列。

### 8. [Pro 订阅在 Claude Code 中被阻止](https://github.com/anthropics/claude-code/issues/82700) — 10 条评论
**严重程度：** 高 | **平台：** macOS | **作者：** ptittomtom67

Pro 订阅用户遇到"组织已禁用订阅访问"错误，尽管已完全重新认证并升级支持。该变现/访问问题悬而未决，影响付费客户的产品使用能力。

### 9. [沙箱在链接 Worktree 中保留 .git/config.lock](https://github.com/anthropics/claude-code/issues/78818) — 9 条评论
**严重程度：** 中 | **平台：** WSL | **作者：** uakdemir

沙箱对 `.git/config` 的只读保护包含瞬态 `.git/config.lock` 文件，阻止链接 worktree 中的合法 git config 写入。这代表了影响高级 git 工作流的沙箱边界定义问题。

### 10. [Advisor 工具重复计算 Token](https://github.com/anthropics/claude-code/issues/84738) — 4 条评论
**严重程度：** 低 | **平台：** Windows | **作者：** arthurmoraesfernandes-afk

Advisor 工具的 usage 对象跨迭代累加 token 数，导致报告的上下文量翻倍并触发过早的自动压缩。子 agent 尤其受影响，可能虚增 token 消耗报告。

---

## 关键 PR 进展

### [fix(plugins): Quote Hook Script Paths](https://github.com/anthropics/claude-code/pull/95698) — Open
**作者：** claude[bot] | **更新于：** 2026-11-23

修复了插件 hook 中未加引号的脚本路径问题，这些路径可能在包含空格的路径中导致执行失败。PR 通过在调用 bash 时对路径加引号修复了三个捆绑插件（`ralph-wiggum`、output-style hooks）。关联 #95673 和 #78490，表明这解决了一类已知的 hook 执行失败问题。

---

## 功能需求趋势

对开放问题的分析揭示了几个主导性的功能方向：

| 类别 | 频率 | 示例 |
|----------|-----------|----------|
| **安全/权限粒度** | 高 | 基于权限的密码输入控制 (#78160)、账户邮箱更改 (#76624)、Gateway 公网 IP (#73415) |
| **跨平台一致性** | 高 | Windows worktree 处理 (#91618)、Linux 桌面特性 (#106454)、macOS/Android 对齐 |
| **MCP 集成** | 高 | 请求行为 (#98256)、WebMCP 发现 (#76809)、远程 MCP 调用 (#111395) |
| **成本优化** | 中 | Prompt 缓存效率 (#91514、#82563)、token 计数准确性 (#84738) |
| **UI/UX 增强** | 中 | Emoji 回应 (#106454)、会话嵌套 (#110905)、背景效果 (#111720) |
| **浏览器扩展** | 低 | Chrome WebMCP 工具 (#76809) |

---

## 开发者痛点

社区最持久的挫败感集中在：

1. **过于严格的安全默认值** — 密码输入阻止、Root 设备拒绝、attestation 失败等问题阻止了合法开发工作流。开发者希望在可信环境中获得合理的 opt-in 机制。

2. **平台碎片化** — Windows、macOS、Linux 和 WSL 各自表现出独特的 bug，影响 worktree 处理、沙箱边界、网络和 UI 渲染。Windows 跨会话协调尤其需要关注。

3. **成本不透明** — Prompt 缓存行为导致意外 token 重写，Advisor 工具膨胀报告用量。使用 Claude Max 订阅的开发者需要可预测的成本预测。

4. **MCP 可靠性** — 声明的能力未能转化为功能性请求、缺失的 MCP 服务器注册、计划任务中的 header 问题，均表明 MCP 集成熟度存在差距。

5. **认证摩擦** — 订阅访问失败、邮箱更改限制、auth 验证错误等问题阻止了持有有效凭证的开发者进行高效使用。

---

*生成时间：2026年11月23日 | 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate an English technical report about OpenAI Codex community digest into Simplified Chinese. Let me translate this carefully while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate this section by section:

---

# OpenAI Codex Community Digest

# OpenAI Codex 社区日报

## 2026-11-23

---

## 1. Today's Highlights

## 今日要点

The Codex project saw no new releases in the last 24 hours, but the community remains active with 50 updated issues and 31 merged pull requests. The TUI (Terminal User Interface) received substantial attention through multiple quality-of-life fixes, while platform-specific bugs—particularly on Windows and macOS—continue to generate discussion. A new feature request for pinned notes and conversation-level summaries signals growing demand for better long-conversation management.

过去 24 小时内，Codex 项目未发布新版本，但社区依然活跃，共更新了 50 个 issue，合并了 31 个 PR。TUI（终端用户界面）获得了多项体验优化修复，而平台特定的问题——尤其是 Windows 和 macOS 上的——仍在引发讨论。一个关于置顶笔记和会话级摘要的新功能请求表明，用户对更好的长会话管理需求正在增长。

---

## 2. Releases

## 2. 发布情况

No new releases were published in the last 24 hours.

过去 24 小时内未发布新版本。

---

## 3. Hot Issues

## 3. 热门 issue

Let me continue translating the tables and content...

I'll go through the issue table entries:


| # | Issue | Key Points | Community Reaction |
|---|-------|------------|-------------------|
| [#40182](https://github.com/openai/codex/issues/40182) | **Windows runtime updater re-downloads 501.8 MB hourly** | After a non-retryable EPERM activation failure, the primary runtime updater repeatedly re-downloads ~500 MB every hour. Affects Windows Store package 26.818.5229.0 and CLI 0.147.0. | 22 comments, 5 👍 — A significant storage and bandwidth issue; users report wasted disk space and continuous background downloads. |

The Windows runtime updater appears to be encountering a persistent download issue where it repeatedly fetches approximately 500 MB of data hourly after experiencing a non-retryable EPERM activation failure. This impacts both the Windows Store package (version 26.818.5229.0) and CLI (version 0.147.0), resulting in significant storage consumption and ongoing background network activity that users have flagged as problematic. 码 CLI 无法恢复现有 TUI 会话，因为 `thread/resume` 在引导期间调用了不支持的 `list_turns` 方法。20 条评论，4 个 👍 — 已关闭；可能在最近的 CLI 版本中已修复。用户确认在 0.147.0 版本上已解决。 [#62234](https://github.com/openai/codex/issues/62234) **[CLOSED]** | **macOS bottom panel settings disappear after update** | 更新到 build 26.1111.21308 后，底部面板设置消失，终端布局被强制固定在右侧。20 条评论，18 个 👍 — 高互动量；已关闭，表明已部署修复。 [#62393](https://github.com/openai/codex/issues/62393) | **Windows Work new conversation interface needs optimization** | 首次启动新对话时加载缓慢，Send 按钮有时在输入内容后仍然禁用。16 条评论，0 个 👍 — 影响用户体验的间歇性 UI 问题。

Codex 在 macOS 上留下浮动光标叠加层，即使任务已完成也持续显示。13 条评论，5 个 👍 — Apple Silicon 上的视觉问题，影响任务完成感知。

新聊天中未显示执行位置或提供更改方式，降低了用户控制力。9 条评论，2 个 👍 — Windows 特定版本中的 UX 缺陷。

macOS 上的 Git 写入操作被阻止，尽管用户已授予明确授权。9 条评论，2 个 👍 — 核心功能问题，影响基本版本控制流程。

升级到 0.131.0 后，子代理完成通知显示代理的 UUID 路径而非配置的昵称。7 条评论，0 个 👍 — 多代理工作流中的显示问题。

ChatGPT Pro 用户报告配额显示 0%，但使用历史显示仅消耗了 13.1%。7 条评论，1 个 👍 — 计费/账户问题，用户质疑使用量追踪的准确性。

macOS 本地技能从斜杠菜单中消失。5 条评论，9 个 👍 — 高 👍 比例表明影响范围广泛；已关闭并修复。

---

## 4. Key PR Progress

### 4. 重点 PR 进展

| # | PR | Description | Impact |
|---|-----|-------------|--------|
| [#63241](https://github.com/openai/codex/pull/63241) | **Avoid eager copies of plugin startup HTTP response bodies** | Converts response body conversions to use `Vec::from`, enabling allocation reuse when possible. | Performance optimization for plugin initialization; reduces memory churn. |
| [#63237](https://github.com/openai/codex/pull/63237) | **Preserve mentions in cloud conversation transcripts** | Decodes mention names and paths in cloud history and live events instead of treating them as opaque strings. | Improves transcript fidelity for cloud-synced conversations. |
| [#63235](https://github.com/openai/codex/pull/63235) | **Simplify eviction in log ring buffer** | Uses `VecDeque::retain_back` to efficiently manage buffer capacity while preserving recent bytes. | Cleaner buffer management; potential memory efficiency gain. |
| [#63233](https://github.com/openai/codex/pull/63233) | **Render flushed TUI input in the same frame** | Fixes TUI skipping frames when buffered input is flushed, eliminating delayed text display for pasted content and Vim replacement keys. | Improves TUI responsiveness; eliminates visual lag on input. |
| [#63219](https://github.com/openai/codex/pull/63219) | **Exclude per-item usage attribution by default** | Adds `usage.attribution` to `x-codex-exclude` header for Responses requests by default; `experimentalRawEvents` threads retain per-item attribution. | Reduces payload overhead; privacy-friendly default. |
| [#63218](https://github.com/openai/codex/pull/63218) | **Keep turn diff updates out of TUI replay buffer** | Prevents repeated turn diff updates from filling the bounded replay buffer and evicting critical thread restoration events. | Improves thread recovery reliability; fixes potential data loss on long sessions. |
| [#63211](https://github.com/openai/codex/pull/63211) | **Automatically resume disconnected cloud conversations** | Reattaches displayed cloud conversations in the background when no user turn is pending and the stream was dropped. | Reduces missed messages during temporary disconnections. |
| [#63208](https://github.com/openai/codex/pull/63208) | **Add creation-time sorting to Command Center search** | Allows pressing `Tab` to toggle between `Updated` and `Created` sorting in Command Center search. | Improves task discoverability; helps users find recently created items. |
| [#63196](https://github.com/openai/codex/pull/63196) | **Keep streamed output visible until inline history repainted** | Prevents streamed Markdown tables from briefly disappearing during scrollback migration and fixes wrapping after terminal resize. | Better streaming UX; eliminates visual artifacts during output. |
| [#63195](https://github.com/openai/codex/pull/63295) | **Honor tmux mouse changes while TUI is in alternate screen** | Polls tmux's `mouse` option dynamically instead of reading it only on screen entry. | Resolves mouse capture desync for tmux users. |

---

## 5. Hot Discussions

### Ideas

| # | Topic | Summary |
|---|-------|---------|
| [#63244](https://github.com/openai/codex/discussions/63244) | **Pinned Notes and Conversation-Level Summaries** | Feature request for pinning notes and generating summaries at the conversation level to improve long-running session management. |
| [#63206](https://github.com/openai/codex/discussions/63206) | **Extend Composer Predictions to complete drafts while typing** | Request for inline completion suggestions that update dynamically as users type, with Tab to accept. |
| [#63205](https://github.com/openai/codex/discussions/63205) | **Show disk usage and suggest cleanup for stale worktrees** | Request for a disk cleanup view that identifies stale worktrees and leftover files created by Codex. |
| [#63204](https://github.com/openai/codex/discussions/63204) | **Keep active Git branch and worktree visible in chats** | Request to display the current Git branch and worktree directly in the chat before sending the first prompt. |
| [#63203](https://github.com/openai/codex/discussions/63203) | **Add developer layout and per-chat subagent limits** | Request for a Developer Mode with prominent project/Git controls and configurable subagent limits per chat. |
| [#63202](https://github.com/openai/codex/discussions/63202) | **Keep multiple unsent chat drafts under each project** | Feature request to maintain several drafts in the sidebar, similar to Cursor's draft management. |
| [#63201](https://github.com/openai/codex/discussions/63201) | **Make the Codex file panel a full project explorer** | Request for a hierarchical file/folder browser with expand/collapse and tree-style navigation. |

### Q&A

| # | Topic | Summary |
|---|-------|---------|
| [#62960](https://github.com/openai/codex/discussions/62960) | **Can pending commands start after Code Mode wait returns "still running"?** | Question about executor behavior when `functions.wait` returns "still running" and a pending `tools.exec_command` request exists. |
| [#62436](https://github.com/openai/codex/discussions/62436) | **Supported Codex architecture for project ownership across runs** | Discussion of architecture patterns for maintaining project ownership across Codex runs using NATS/JetStream. |

### Show and Tell

| # | Topic | Summary |
|---|-------|---------|
| [#16329](https://github.com/openai/codex/discussions/16329) | **Awesome Codex CLI — 150+ ecosystem tools** | Curated list of subagents, skills, plugins, and MCP servers; actively maintained community resource. |
| [#62426](https://github.com/openai/codex/discussions/62426) | **TernaryCode: cross-project session notifications** | Native Rust app (no Electron) that notifies users when Codex sessions need attention across all projects. |
| [#62985](https://github.com/openai/codex/discussions/62985) | **ACQ: two-agent text relay with HTTP and MCP surfaces** | Open-source two-seat text relay for agent-to-agent communication with HTTP and remote MCP interfaces. |
| [#63096](https://github.com/openai/codex/discussions/63096) | **Done Means Done: reporting after external form submissions** | Discussion on how Codex should report success when it clicks Submit but the external action fails silently. |
| [#63167](https://github.com/openai/codex/discussions/63167) | **JoeBro: native Mac workspace for multi-agent sessions** | GPLv3 native macOS workspace allowing users to answer Codex/Claude Code/OpenCode sessions from Mac or iPhone. |
| [#63143](https://github.com/openai/codex/discussions/63143) | **Seeking Windows beta testers for Codex Engineering Kit** | Open-source toolkit for evidence-bound workflows, native skill packaging, and managed installation verification. |

---

## 6. Feature Request Trends

Based on Issues and Discussions, the community is requesting:

1. **Long-Conversation Management** — Pinned notes, conversation-level summaries, and persistent drafts to handle extended Codex sessions.
2. **Enhanced Project Explorer** — Full hierarchical file browser with tree navigation instead of the current flat inspector.
3. **Git Integration Visibility** — Display active branch and worktree in chat context; disk cleanup for stale worktrees.
4. **Developer-Focused Layouts** — Optional Developer Mode with prominent project/Git controls and per-chat subagent limits.
5. **Improved Input Assistance** — Inline Composer Predictions that complete drafts dynamically while typing.
6. **Cross-Platform Session Management** — Tools like TernaryCode and JoeBro indicate demand for multi-session visibility and mobile access.

---

## 7. Developer Pain Points

1. **Platform-Specific UI Bugs** — Windows and macOS continue to experience UI regressions (disappearing panels, floating cursors, Send button issues) that disrupt daily workflows.
2. **TUI Responsiveness** — Input rendering delays, session resumption failures, and tmux/mouse desync issues remain pain points for terminal-centric users.
3. **Git and Sandbox Permissions** — macOS users report blocked Git operations and restricted network access despite explicit authorization—core functionality gaps.
4. **Disk and Resource Management** — Stale worktrees accumulate disk space; no built-in cleanup tools exist.
5. **Usage Accounting Concerns** — Reports of incorrect usage tracking and billing discrepancies erode trust in the platform's accounting systems.
6. **Long Thread Behavior** — Windows Desktop users report tool availability loss and premature turn termination in extended conversations.
7. **Cloud Sync Reliability** — Disconnected cloud streams can lose messages; automatic reconnection (addressed in PR #63211) was a known gap.

---

*Generated: 2026-11-23 | Data source: github.com/openai/codex*</think>



</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the content while maintaining the exact Markdown structure
2. Keep all URLs, code references, issue/PR numbers, version tags, file paths, and identifiers in their original form
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

Title: "Gemini CLI Community Digest" → "Gemini CLI 社区动态"

Date: Keep as is

Sections to translate:
- Today's Highlights
- Releases
- Hot Issues (with their descriptions and quotes)
- Key PR Progress (with highlights)
- Feature Request Trends
- Developer Pain Points

Let me carefully translate each part while preserving the formatting and making it read naturally in Chinese.
</think>


# Gemini CLI 社区动态

**日期：** 2026-11-23
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日要闻

Gemini CLI 项目持续推进，夜间构建版本更新至 **v0.71.0-nightly.20261123**。与此同时，关键的 agent 稳定性问题成为社区关注焦点。一项重要 PR 实现了 **子 agent 调用其他 agent** 的能力（PR #30409），这是一个重要的架构里程碑。与此同时，多个 P1 级别 bug——包括 generalist agent 挂起问题和子 agent 恢复失败——正在推动紧急的回归测试工作。

---

## 版本发布

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| [v0.71.0-nightly.20261123.geecccfcd5](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261123.geecccfcd5) | 夜间构建 | 从上一个夜间构建自动版本升级 |

查看 [完整变更日志](https://github.com/google-gemini/gemini-cli/compare/v0.71.0-nightly.20261122.geecccfcd5...v0.71.0-nightly.20261123.geecccfcd5) 了解增量变更。

---

## 热门 issue

### 1. [子 agent 达到 MAX_TURNS 后仍报告虚假的 GOAL 成功状态](https://github.com/google-gemini/gemini-cli/issues/22323) — P1 Bug
**作者：** matei-anghel | **评论数：** 14 | **👍：** 2

`codebase_investigator` 子 agent 在达到最大轮次限制、尚未完成分析时就报告 `status: "success"` 和终止原因 "GOAL"。这种误导性的状态掩盖了中断行为，让用户无法准确判断任务是否真正完成。
> *"这掩盖了失败，使得无法区分真正的成功和过早终止。"*

---

### 2. [Generalist agent 在委托给子 agent 时挂起](https://github.com/google-gemini/gemini-cli/issues/21409) — P1 Bug
**作者：** turmanticant | **评论数：** 8 | **👍：** 8

当 Gemini CLI 将控制权委托给 generalist agent 时，会无限期挂起——有时持续数小时。像创建文件夹这样的简单操作也会完全冻结。临时解决方案：明确指示模型避免使用子 agent 委托。
> *"社区迫切需要修复这个影响基本工作流程的阻塞性问题。"*

---

### 3. [通过零依赖操作系统沙箱利用模型的 bash 亲和性](https://github.com/google-gemini/gemini-cli/issues/19873) — P2 增强
**作者：** abhipatel12 | **评论数：** 9 | **👍：** 1

提议通过实现零依赖操作系统沙箱来利用 Gemini 3 原生的 bash 能力，配合执行后意图路由机制。这将实现安全的 POSIX 工具链（`grep`、`cat`、`sed`、`awk`），同时不影响安全性。
> *"使 agent 行为与模型偏好的交互模式保持一致。"*

---

### 4. [Gemini 没有充分利用 skills 和子 agent](https://github.com/google-gemini/gemini-cli/issues/21968) — P2 Bug
**作者：** rnett | **评论数：** 7 | **👍：** 0

尽管存在自定义 skills（如 "gradle"、"git"）且配有明确的描述，Gemini 几乎不会自主调用它们。用户必须明确提示模型使用可用的 skills。
> *"模型忽略上下文相关的工具，降低了自动化效率。"*

---

### 5. [Browser Agent 忽略 settings.json 覆盖配置](https://github.com/google-gemini/gemini-cli/issues/22267) — P2 Bug
**作者：** hsm207 | **评论数：** 5 | **👍：** 0

Browser agent 完全忽略全局或项目级 `settings.json` 中的配置覆盖，包括 `maxTurns` 设置。虽然 `AgentRegistry` 正确读取并合并了这些设置，但 browser agent 完全绕过了它们。

---

### 6. [Browser 子 agent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) — P1 Bug
**作者：** sigmaSd | **评论数：** 4 | **👍：** 1

Browser 子 agent 在 Wayland 环境下以 "GOAL" 原因终止，阻止了非 X11 平台 Linux 用户的浏览器自动化工作流程。

---

### 7. [AST 感知的文件读取、搜索和映射评估](https://github.com/google-gemini/gemini-cli/issues/22745) — P2 特性
**作者：** gundermanc | **评论数：** 7 | **👍：** 1

追踪调查 AST 感知工具的研究，以实现精确的基于方法边界的文件读取，减少因读取错位和 token 噪声导致的轮次浪费。建议使用 `tilth` 或 `glyph` 等工具。
> *"可显著提高 token 效率和代码导航准确性。"*

---

### 8. [符号链接的 agent 文件无法识别](https://github.com/google-gemini/gemini-cli/issues/20079) — P2 Bug
**作者：** wtanaka | **评论数：** 4 | **👍：** 0

`~/.gemini/agents/` 中定义为符号链接的 agent 无法加载，限制了偏好集中式 agent 定义的用户的灵活工作区配置。

---

### 9. [使用超过 128 个工具时报 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246) — P2 Bug
**作者：** gundermanc | **评论数：** 3 | **👍：** 0

当可用工具超过约 400 个时，CLI 会遇到 HTTP 400 错误。Agent 应该更智能地对启用的工具进行范围限定。
> *"阻止了需要广泛工具可用性的高级工作流程。"*

---

### 10. [get-shit-done 输出钩子导致崩溃](https://github.com/google-gemini/gemini-cli/issues/22186) — P1 Bug
**作者：** businesscasual98 | **评论数：** 3 | **👍：** 0

get-shit-done 输出钩子在最终摘要打印时崩溃 Gemini CLI，导致任务完成时反复失败。

---

## 重要 PR 进展

| PR | 标题 | 领域 | 状态 |
|----|-------|------|--------|
| [#30409](https://github.com/google-gemini/gemini-cli/pull/30409) | **feat(core): 允许 agents 调用其他 agents** | Agent | ✅ 已合并 | 
| [#30298](https://github.com/google-gemini/gemini-cli/pull/30298) | **feat(acp): 并行执行独立工具调用** | ACP | Open |
| [#30297](https://github.com/google-gemini/gemini-cli/pull/30297) | **fix(acp): 截断过大的 shell 和 mcp 工具输出** | ACP | Open |
| [#30277](https://github.com/google-gemini/gemini-cli/pull/30277) | **fix(sandbox): 改进权限拒绝检测** | Sandbox | Open |
| [#30273](https://github.com/google-gemini/gemini-cli/pull/30273) | **fix(core): 统一 exit codes 映射和 fatal error 层级** | Core | Open |
| [#30353](https://github.com/google-gemini/gemini-cli/pull/30353) | **fix(acp): 标准化 token 使用量追踪** | ACP | Open |
| [#30339](https://github.com/google-gemini/gemini-cli/pull/30339) | **fix(acp): 暴露 BeforeAgent 钩子拒绝** | ACP | Open |
| [#30316](https://github.com/google-gemini/gemini-cli/pull/30316) | **fix(core): 保留自定义模型别名设置** | Core | Open |
| [#29822](https://github.com/google-gemini/gemini-cli/pull/29822) | **fix(core): 限制 total_max_matches 并澄清溢出行为** | Core | Open |
| [#30405](https://github.com/google-gemini/gemini-cli/pull/30405) | **fix(a2a-server): 处理调度器拒绝** | A2A | Open |

### 重点 PR 解读

**PR #30409 — Agents 调用 agents（已合并）**
实现了带深度限制的嵌套 agent 层级结构。此前子 agent 无法调用其他 agent——验证会失败并提示"Invalid tool name"。这为复杂的多 agent 编排架构模式铺平了道路。

**PR #30298 — ACP 模式并行工具执行**
将串行工具执行转换为独立只读调用的并行批处理模式。预期将显著提升 ACP（Agent Client Protocol）模式用户的吞吐量。

**PR #30273 — 统一 exit codes**
集中管理 `gemini-cli-core` 的 CLI 进程 exit codes。修复了此前硬编码为数字字面量的缺失的 fatal error codes，改善了调试和脚本集成。

**PR #30277 — 沙箱权限处理**
改进 POSIX 沙箱拒绝检测，并在容器化/受限执行环境中优雅处理不支持的环境。

---

## 特性需求趋势

对 open 状态 issue 的分析揭示了以下主导性特性方向：

| 主题 | Issue 数 | 概述 |
|-------|---------|---------|
| **Agent 编排** | #19873, #20195, #22598, #18282, #18287 | 多 agent 协作、共享内存、轨迹可见性、嵌套调用 |
| **代码库智能** | #22745, #22746, #22747, #19561, #18836 | AST 感知读取/搜索、战术性提取、持久化任务追踪 |
| **Browser Agent** | #22267, #22232, #21983 | 弹性恢复、会话接管、Wayland 支持、配置覆盖 |
| **工具智能化** | #21968, #24246, #20079, #23571 | Skill 调用、工具范围限定、符号链接支持、临时文件管理 |
| **沙箱机制** | #18397, #22672 | 按工作区策略、破坏性行为保护 |

---

## 开发者痛点

### 高频困扰

1. **Agent 挂起和超时** — Generalist agent 冻结（#21409）阻塞基本工作流，且无超时恢复机制
2. **子 agent 可靠性** — MAX_TURNS 误报（#22323）隐藏失败；子 agent 上下文在 bug 报告中缺失（#21763）
3. **配置不一致** — Browser agent 忽略 `settings.json`（#22267）；模型别名设置丢失（#30316）
4. **上下文膨胀** — 大文件读取"消防水带"式上下文（每轮约 36.6k tokens 基线），缺乏精准提取能力（#19561）
5. **工具发现失败** — 符号链接 agent 文件静默失败（#20079）；skills 不自动调用（#21968）
6. **ACP 模式成熟度不足** — 截断问题（#30297）、钩子拒绝暴露（#30339）、token 追踪缺陷（#30353）
7. **平台覆盖缺口** — Wayland 浏览器失败（#21983）；沙箱权限处理不一致（#30277）

---

*数据来源：GitHub • [查看 Open Issues](https://github.com/google-gemini/gemini-cli/issues?q=is%3Aissue+is%3Aopen) • [查看 Open PRs](https://github.com/google-gemini/gemini-cli/pulls?q=is%3Apr+is%3Aopen)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI community digest from English to Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
- Use natural technical Chinese, not literal word-for-word rendering

Let me translate this carefully while maintaining the structure and making it read naturally in Chinese.

I'll go through section by section:

# GitHub Copilot CLI Community Digest → GitHub Copilot CLI 社区简报
November 23, 2026 → 2026年11月23日
Today's Highlights → 今日要闻
Latest Releases → 最新版本
v1.0.115-7 → v1.0.115-7 (keep version)
Hot Issues → 热门议题
Key PR Progress → 重要 PR 进展
Feature Request Trends → 功能需求趋势
Developer Pain Points → 开发者痛点
End of Digest → 简报结束
Generated → 生成时间
Source → 来源

Let me translate the content now, making sure to keep technical terms in their original form where appropriate (like API endpoints, config names, etc.) and use natural Chinese phrasing.
</think>


# GitHub Copilot CLI 社区简报

## 2026 年 11 月 23 日

---

## 1. 今日要闻

v1.0.115-7 补丁修复了两个长期存在的用户体验问题：使用 `--ui-server` 的客户端现在可以在恢复的会话启动后立即连接，npm 安装的 CLI 实例也能在 Ctrl+C 时正确退出。与此同时，社区围绕移动端和受限网络环境下的云沙箱稳定性问题展开了积极讨论——过去 24 小时内有 19 个 issues 更新，并有一个新的 PR 引入可选的连接令牌生成机制，用于无头 CLI 场景。

---

## 2. 最新版本

### v1.0.115-7
**发布日期：** 2026 年 11 月 23 日

| 修复项 | 说明 |
|-------|------|
| `--ui-server` 连接时序 | 客户端现在可以在 CLI 服务开始监听后立即连接到已恢复的会话，消除了重连时的竞态条件。 |
| npm 关闭清理 | 在启动过程中停止通过 npm 安装的 Copilot CLI，不再留下孤儿后台进程。 |

**行动建议：** 如果你通过 npm 使用 `gh copilot`，此补丁解决了一个遗留的僵尸进程问题。运行 `npm install -g @githubnext/github-copilot@latest` 更新。

---

## 3. 热门议题

### 1. 语音安装器因 Azure Artifacts 401 错误失败 ([#4035](https://github.com/github/copilot-cli/issues/4035)) — **[已关闭]**
**提交者：** gregeva | **评论数：** 6 | **创建时间：** 2026-07-06

**问题描述：** 启用语音模式时，CLI 尝试从私有 Azure Artifacts 源而非公开的 nuget.org 下载 `Microsoft.AI.Foundry.Local.Core v1.2.3`，导致 HTTP 401 错误。

**影响分析：** 语音模式是核心功能，其安装失败阻碍了大量用户体验。6 位评论者跨不同环境验证了此问题，现已关闭，表明修复已在路上或已发布。

---

### 2. 手动 `/rename` 被自动生成的名称覆盖 ([#2622](https://github.com/github/copilot-cli/issues/2622)) — **[开启中]**
**提交者：** mu88 | **评论数：** 4 | **赞同数：** 1 | **创建时间：** 2026-04-10

**问题描述：** 通过 `/rename <name>` 手动重命名的会话，在后续交互后会被 Copilot 的自动命名逻辑静默覆盖。

**影响分析：** 会话命名对于长期项目的组织至关重要。1 位用户点赞，4 位评论者提供了临时解决方案。当前状态为开启中，暂无明确解决时间。

---

### 3. `disable-model-invocation` 下的重复技能查找 ([#4637](https://github.com/github/copilot-cli/issues/4637)) — **[已关闭]**
**提交者：** Omzig | **评论数：** 3 | **创建时间：** 2026-08-27

**问题描述：** 斜杠调用的技能会触发二次查找，报告"技能未找到"，即使技能实际执行正常，也产生了令人困惑的上下文噪音。

**影响分析：** 影响使用 `disable-model-invocation` frontmatter 标记来控制性能或成本的用户。3 位评论者确认了此行为；已关闭状态表明修复已合并。

---

### 4. `/model` 输出缺少上下文窗口大小信息 ([#1851](https://github.com/github/copilot-cli/issues/1851)) — **[已关闭]**
**提交者：** svg153 | **评论数：** 3 | **赞同数：** 5 | **创建时间：** 2026-03-05

**问题描述：** `/model` 命令显示高级请求倍率，但不显示实际的上下文窗口大小（最大 token 数），迫使查阅外部文档。

**影响分析：** 这是一个呼声很高的可见性改进（5 个赞同）。已关闭状态表明该功能已实现。

---

### 5. "接受计划"未能触发实现 ([#1963](https://github.com/github/copilot-cli/issues/1963)) — **[已关闭]**
**提交者：** antoyo | **评论数：** 2 | **赞同数：** 1 | **创建时间：** 2026-03-10

**问题描述：** 生成计划后，选择"接受计划并在默认权限下构建"有时会返回普通模式而不开始实现，迫使用户手动提示并可能触发高级请求。

**影响分析：** 破坏了预期的代理工作流，并可能产生意外费用。两位评论者确认后关闭，修复可能已发布。

---

### 6. 内容过滤后仍显示误导性的 `model_not_supported` 错误 ([#5309](https://github.com/github/copilot-cli/issues/5309)) — **[已关闭]**
**提交者：** mlindgren | **评论数：** 2 | **创建时间：** 2026-10-30

**问题描述：** CLI 报告"请求的模型不受支持"，而同一会话中同一模型（如 Claude Opus 5.5）实际可以成功发起请求，甚至在使用"自动"模型选择器时也是如此。

**影响分析：** 虚假的错误信息会削弱用户对提示信息的信任，增加调试难度。两位评论者验证后关闭。

---

### 7. `web_fetch` 拒绝 Surge Fake-IP DNS 响应 ([#5544](https://github.com/github/copilot-cli/issues/5544)) — **[开启中]**
**提交者：** cchen7 | **评论数：** 2 | **创建时间：** 2026-11-21

**问题描述：** 在 macOS 上使用 Surge 增强模式/Fake-IP DNS 时，内置的 `web_fetch` 工具在系统解析器返回虚假地址时拒绝公共 HTTPS URL。

**影响分析：** Surge 等 DNS-over-HTTPS 工具在开发者中日益普及。若无解决方案，这部分用户的网络研究能力将受到严重影响。目前开启中，2 条评论跟进。

---

### 8. `copilot --acp` 会话中无法使用图像生成 ([#5551](https://github.com/github/copilot-cli/issues/5551)) — **[已关闭]**
**提交者：** manuelpa-ms | **评论数：** 1 | **创建时间：** 2026-11-22

**问题描述：** GPT Image 2.5 Flare 在交互式 CLI 和 VS Code 中正常工作，但在使用 `copilot --acp` 启动的会话中不可用，即使用户配置已启用。

**影响分析：** ACP（Agentic Code Partner）会话是日益增长的使用场景，缺少图像生成功能限制了其 UI 密集型工作流的实用性。快速关闭表明已有修复方案或已知原因。

---

### 9. Bash 工具丢失非 ASCII 字符 ([#3601](https://github.com/github/copilot-cli/issues/3601)) — **[已关闭]**
**提交者：** 404hub | **评论数：** 1 | **创建时间：** 2026-05-31

**问题描述：** Bash 工具以 `LC_CTYPE="C"` 启动 shell，静默剥离命令字符串和文件路径中的中日韩字符、带重音的拉丁字母和表情符号。

**影响分析：** 使用非 ASCII 文件名或命令的国际开发者会遇到静默失败。1 位评论者确认了问题；已关闭状态表明已解决。

---

### 10. 受限网络下 TLS `handshake_failure` ([#5546](https://github.com/github/copilot-cli/issues/5546)) — **[开启中]**
**提交者：** chirag127 | **评论数：** 0 | **创建时间：** 2026-11-21

**问题描述：** 在过滤 TLS 连接的企业网络中，Copilot CLI 在启动/模型发现请求到 `api.individual.githubcopilot.com` 时以致命的 `handshake_failure` 告警失败。

**影响分析：** 企业严格网络策略环境下完全无法使用 Copilot CLI。零评论表明这可能是一个小众但关键的阻断问题；待分类状态表明正在评估中。

---

## 4. 重要 PR 进展

### 1. 为 CLI 容器添加可选连接令牌生成 ([#5554](https://github.com/github/copilot-cli/pull/5554)) — **[开启中]**
**提交者：** brunoborges | **创建时间：** 2026-11-23

**摘要：** 使本地 SDK 客户端可以在没有预先存在的 GitHub 凭证的情况下连接到无头 CLI。设置 `COPILOT_CONNECTION_TOKEN_GENERATE=true` 后，启动时打印一个新的随机令牌。

**意义：** 降低了无头和程序化 CLI 使用的门槛，特别是对 CI/CD 流水线。本地开发工具链。这是面向 SDK 集成者的开发者体验改进。

---

## 5. 功能需求趋势

汇总过去 19 个更新的 issues，社区愿望清单呈现以下主题分布：

| 趋势 | 频率 | 示例 issues |
|-----|------|-------------|
| **会话管理** | 高 | 会话恢复/挂起工具 (#5549)、会话命名持久化 (#2622)、多轮子代理支持 (#5543) |
| **图像生成** | 中高 | 资产生成（图标、favicon）(#4581)、各界面间的图像工具对等 (#5551) |
| **网络/代理** | 中 | Surge Fake-IP 兼容性 (#5544)、企业网络 TLS 过滤 (#5546)、预发布版本安装逻辑 (#5547) |
| **工具可见性** | 中 | `/model` 中的上下文窗口显示 (#1851)、技能查找透明度 (#4637) |
| **移动端/云沙箱** | 中 | 移动会话中断 (#5553, #5552)、自定义代理的 MCP 可用性 (#5550) |
| **国际化** | 低至中 | Bash 中的非 ASCII 字符处理 (#3601) |

---

## 6. 开发者痛点

过去 24 小时内最常被提及的挫败感集中在：

1. **静默失败** — 非 ASCII 路径剥离 (#3601) 和误导性错误信息 (#5309) 使用户在缺乏明确失败指示的情况下对工具失去信任。

2. **功能对等缺口** — 图像生成 (#5551, #4581) 和模型上下文信息 (#1851) 在某些会话类型中缺失，造成 CLI、VS Code 和 ACP 之间的体验不一致。

3. **网络依赖问题** — 企业网络 (#5546)、代理环境 (#5544) 或自定义 DNS 配置下的用户面临启动和工具失败，且难以诊断。

4. **会话状态脆弱性** — 云沙箱重连失败 (#5552, #5553) 和会话命名被覆盖 (#2622) 破坏了工作流连续性，尤其在移动端或后台场景下。

5. **代理工作流中断** — "接受计划并构建"失败 (#1963) 破坏了自主代理执行的核心承诺。

---

**简报结束**

*生成时间：2026-11-23 | 来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while following the specific rules provided. Let me translate this carefully, maintaining the Markdown structure, keeping technical terms and identifiers in their original form, and using natural Chinese technical writing style.

Let me go through the document section by section:

1. Title: "OpenCode Community Digest — 2026-11-23" → "OpenCode 社区周刊 — 2026-11-23"

2. "Today's Highlights" → "本周亮点"
   - "The community remains focused on..." → Translate naturally

Let me translate this properly with good Chinese technical writing style.

Key translations to be careful about:
- "Keep it Matters" column header → "为何重要"
- "Significance" → "意义" or "重要性"
- "Bug Fix" → "错误修复" or just keep as-is sometimes
- "Feature" → "功能"
- "Refactor" → "重构"

Let me work through the entire document:
</think>


# OpenCode 社区周刊 — 2026-11-23

## 本周亮点

社区持续关注免费层稳定性问题（#59387，406 条评论）和上下文管理问题，同时贡献者在 TUI、桌面端和核心模块上推送了大量改进。值得关注的新 PR 包括重构媒体工具命名规范、启用自托管 Web Push 通知，以及实现自动 blob 清理以防止存储膨胀。

## Releases

**过去 24 小时内无新版本发布。**

---

## 热门 Issue

| # | 标题 | 作者 | 评论数 | 为何重要 |
|---|------|------|--------|----------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | [zen] 免费层问题：优先阅读此帖 | neriousy | 406 | 关键的用户体验问题；免费层用户遭遇重置卡死、"超出免费使用额度"错误及版本兼容性问题。社区正在积极排查。 |
| [#43250](https://github.com/anomalyco/opencode/issues/43250) | agent 驱动的会话中 keep.tokens 未被遵守 | Zaczero | 11 | 上下文压缩 bug 导致 5–15 倍的 token 开销（234K vs 15K 设置），影响重度用户的性能和成本。 |
| [#65590](https://github.com/anomalyco/opencode/issues/65590) | 超过 61 个工具的 MCP 服务器被静默截断 | noejunior299 | 9 | 远程 MCP 服务器超过 61 个工具后功能静默丢失；超出上限的工具报告为"未知工具"。 |
| [#21227](https://github.com/anomalyco/opencode/issues/21227) | 在聊天 UI 中显示工具结果中的图片附件 | neilli418 | 8 | 用户希望在聊天界面中直接渲染 `webfetch` 和 MCP ImageContent 结果的图片，便于可视化。 |
| [#62893](https://github.com/anomalyco/opencode/issues/62893) | 桌面端：Mermaid 图片节点渲染时图片不显示 | skrause-sprinteins | 8 | Markdown 查看器中 Mermaid 图表图片无法显示，尽管语法正确；问题已定位到 `markdown-mermaid.ts`。 |
| [#65496](https://github.com/anomalyco/opencode/issues/65496) | 内存占用飙升 | mahyarmirrashed | 6 | CLI 对一个"轻量封装层"消耗了过多内存；v2.2.5 上有报告，影响资源受限环境。 |
| [#46358](https://github.com/anomalyco/opencode/issues/46358) | Plan 模式防护拒绝向配置的 plan 目录写入 | luke9705 | 5 | Plan 模式错误地阻止了对以其自身命名的目录内文件的写入，这是 #44694 引入的回归问题。 |
| [#63782](https://github.com/anomalyco/opencode/issues/63782) | Agent 打开的终端没有关闭路径 | Addin | 5 | `tui.open_terminal` 创建的面板无法关闭；shell 退出后没有可用的关闭操作。 |
| [#65652](https://github.com/anomalyco/opencode/issues/65652) | 崩溃和限额问题 | navidjami-prog | 9 | 报告了新的崩溃和速率限制问题；用户在经历超过 24 小时的故障后等待解决。 |
| [#60702](https://github.com/anomalyco/opencode/issues/60702) | 共享服务中 Copilot 模型同步失败 | mazen-ghzaly | 4 | Copilot 模型在 `--service` 模式下同步失败但在 `--standalone` 模式下正常；模型偶发附件失败或丢失。 |

---

## 关键 PR 进展

| # | 标题 | 作者 | 类型 | 重要性 |
|---|------|------|------|--------|
| [#65682](https://github.com/anomalyco/opencode/pull/65682) | 将媒体工具重命名为 `generate_image` 和 `generate_video` | rekram1-node | 重构 | 规范化命名：`experimental_image_generate` → `generate_image`，`experimental_video_generate` → `generate_video`。 |
| [#65683](https://github.com/anomalyco/opencode/pull/65683) | 在完整 Code Mode 下为 Muse 使用 base prompt | rekram1-node | 功能 | 为 Muse 模型启用 `experimental.full_codemode` 标志，使其保留 base system prompt 而非 `meta.txt`。 |
| [#58400](https://github.com/anomalyco/opencode/pull/58400) | 为配对设备添加自托管 Web Push | Zijian-Wang | 功能 | 已关闭的 PR，为移动端/浏览器添加可选的 Web Push 通知功能，完成 #58428。 |
| [#65671](https://github.com/anomalyco/opencode/pull/65671) | 在 blob 写入一周后将其删除 | rekram1-node | 错误修复 | 通过实现自动 blob 清理解决存储膨胀问题；blob 不再永久保留。 |
| [#64770](https://github.com/anomalyco/opencode/pull/64770) | 将图片生成作为后台任务运行 | rekram1-node | 功能 | 图片生成现在像视频一样在服务端运行；`POST /api/experimental/generate/image` 返回任务句柄。 |
| [#65664](https://github.com/anomalyco/opencode/pull/65664) | 默认开启视频生成 | rekram1-node | 功能 | 在所有构建版本中默认启用视频生成，与图片生成行为保持一致。 |
| [#65675](https://github.com/anomalyco/opencode/pull/65675) | 用正斜杠补全目录参数 | FireChickenMP4 | 错误修复 | 修复 `expandDirectory()` 中的路径处理，确保目录参数补全的一致性。 |
| [#65591](https://github.com/anomalyco/opencode/pull/65591) | 在底部显示子任务状态而不触发父任务中断 | josephsanj | 错误修复 | 对 #65343 的部分修复；解决了子 Task 执行期间"esc stop"状态卡住的问题。 |
| [#65641](https://github.com/anomalyco/opencode/pull/65641) | 在 stringParameter 和 inputProperties 中解析 $ref schema | xgbtxy | 错误修复 | 修复 codemode 工具定义中的 schema 解析，确保正确处理 $ref。 |
| [#65647](https://github.com/anomalyco/opencode/pull/65647) | 将语音模型列为实时模型 | Tarquinen | 功能/重构 | 语音模型现在以标准 `realtime` 模型的形式出现在 `GET /api/` 列表中，统一了模型 API。 |

---

## 功能请求趋势

根据 issue 和 PR 分析，社区正在推动以下方向：

1. **多 Agent 可视性** — 多项请求要求子任务状态面板、实时侧边栏视图和后台 agent 活动监控（#57097、#27995、#41249、#37431、#12463、#65610）。这是目前需求最旺盛的增强类别。

2. **富媒体展示** — 在聊天 UI 中直接渲染工具结果的图片、Mermaid 图表和生成媒体（#21227、#62893）。

3. **通知与提醒** — 移动端系统通知（#65372）、配对浏览器的 Web Push（#58428、#58400）以及可访问的通知设置（#65587）。

4. **上下文管理** — 改进的上下文压缩、自动压缩（#65643）以及正确的 token 限额执行（#43250）。

5. **个性化定制** — V2 桌面端自定义 provider 选项请求（#65578），以恢复 V1 功能。

6. **平台改进** — VSCodium 支持（#63194）、Android 键盘/导航修复（#65681）以及内存优化（#65496）。

---

## 开发者痛点

| 类别 | 详情 |
|------|------|
| **免费层不稳定** | 用户遭遇重置卡死、意外限流和访问限制；#59387 已成集中排查中心，406 条评论。 |
| **MCP 工具发现** | 远程 MCP 服务器在 61 个工具处静默截断，导致工具报"未知"但无错误提示。 |
| **资源消耗** | CLI 的内存占用对于一个"轻量 API 封装层"而言过高；影响低配置硬件用户。 |
| **上下文溢出** | agent 会话中 token 限额未正确执行；报告值超出配置限制 5–15 倍，导致幻觉和成本超支。 |
| **终端面板管理** | Agent 打开的终端无法关闭；shell 退出后无可用的关闭操作。 |
| **Plan 模式文件访问** | 回归问题，阻止向配置 plan 目录内的文件写入。 |
| **扩展通知泛滥** | 浏览器扩展可以无限制调用 `chrome.notifications.create` 冲击系统通知中心。 |
| **原地升级破坏** | Windows 上 V1→V2 升级后插件和功能损坏；在低配置系统上问题尤为严重。 |

---

*生成于 2026-11-23 | 数据来源 github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical digest into Simplified Chinese. Let me translate it carefully while maintaining the structure and technical accuracy.

Key things to remember:
1. Keep all Markdown structure
2. Keep URLs, issue numbers, code references verbatim
3. Use natural technical Chinese
4. Output ONLY the translation, no preamble

Let me translate section by section:
</think>


# Pi 社区日报 — 2026-11-23

## 今日要闻

过去一天中，Pi 社区解决了多个关键的提供商兼容性问题。值得特别关注的是 **Gemini 4 Hydrogen 的 "xhigh" 思考级别被 Google 适配器拒绝**（#12184），以及修复了可能导致提示词在已释放会话上执行的会话竞态条件问题（#12243）。团队还关闭了关于 Bedrock 图像处理的高流量 issue（#8643），标志着跨提供商推理内容处理方面取得了进展。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issues

### 1. [OPEN] Bedrock：OpenAI 模型拒绝 toolResult.content 中嵌套的图像（#8643）
**重要性：** 工具结果中的图像在 AWS Bedrock 上的 OpenAI 模型中会中断，而 OpenAI-completions 适配器已经正确处理了这个问题。修复方案和回归测试已在贡献者的分支上准备就绪。
**社区反应：** 17 条评论，10 个 👍
🔗 https://github.com/earendil-works/pi/issues/8643

### 2. [OPEN] pi-durable：永久删除存储中的对话（#11026）
**重要性：** 用户需要一个 API（`harness.deleteConversation(id, ctx)`）来从持久化存储中永久删除对话，包括条目、文档、收件箱项目和调度器状态，同时需要正确处理正在运行的任务。
**社区反应：** 10 条评论，7 个 👍
🔗 https://github.com/earendil-works/pi/issues/11026

### 3. [CLOSED] 使用 llama.cpp 时报错：请求超时（#5294）
**重要性：** 使用慢速大模型的用户即使通过 `/settings` 设置了无限超时并禁用了 HTTP 超时，仍然会遇到超时错误。这个长期存在的问题现已关闭。
**社区反应：** 10 条评论，0 个 👍
🔗 https://github.com/earendil-works/pi/issues/5294

### 4. [OPEN] Google 适配器拒绝 Gemini 4 Hydrogen 的 "xhigh" 思考级别（#12184）
**重要性：** Gemini 4 Hydrogen 的第四个思考级别（"xhigh"）虽然由 models.dev 宣传，但在任何 HTTP 请求发出之前就会抛出错误。与 issue #12177 相关。
**社区反应：** 7 条评论，2 个 👍
🔗 https://github.com/earendil-works/pi/issues/12184

### 5. [OPEN] 工具调用与 bash 并发运行，导致读取命令完成前内容的 bug（#11950）
**重要性：** 当模型在同一 assistant 消息中发送 bash 和 read 时，两者会同时执行——导致读取不存在的输出或获取过时内容。
**社区反应：** 7 条评论，0 个 👍
🔗 https://github.com/earendil-works/pi/issues/11950

### 6. [CLOSED] Z.AI 思考处理器在禁用时向输出中泄露推理内容（#8706）
**重要性：** GLM 强制思考模型在关闭思考时会向回答中泄露内部推理内容，因为处理器无条件地发送 `thinking: disabled`，而不管模型的实际需求。
**社区反应：** 6 条评论，1 个 👍
🔗 https://github.com/earendil-works/pi/issues/8706

### 7. [CLOSED] 终端调整大小导致 TUI 渲染/布局损坏（#11136）
**重要性：** 调整终端窗口大小会导致文字截断或无法自动换行，影响交互式会话中的用户体验。
**社区反应：** 5 条评论，0 个 👍
🔗 https://github.com/earendil-works/pi/issues/11136

### 8. [CLOSED] OpenAI 在 v1.6.0 更新后丢弃推理项（prefix_mismatch）（#12367）
**重要性：** 用户在升级后间歇性地遇到"OpenAI 丢弃了 4 个推理项：prefix_mismatch"错误，表明推理内容处理存在回归问题。
**社区反应：** 4 条评论，0 个 👍
🔗 https://github.com/earendil-works/pi/issues/12367

### 9. [CLOSED] Ctrl+G 外部编辑器在 Windows 上静默退出 pi，退出码为 129（#11167）
**重要性：** 在 Windows 上按 Ctrl+G 调出外部编辑器会导致立即静默退出，没有崩溃报告——这阻塞了 Windows 用户的关键工作流。
**社区反应：** 3 条评论，1 个 👍
🔗 https://github.com/earendil-works/pi/issues/11167

### 10. [OPEN] 在 switchSession 期间接受的提示词在已释放的会话上运行（#12243）
**重要性：** 竞态条件：会话替换期间到达的提示词会在旧的（已释放的）会话上执行，导致静默失败——没有渲染或保存。
**社区反应：** 2 条评论，0 个 👍
🔗 https://github.com/earendil-works/pi/issues/12243

---

## 关键 PR 进展

### 1. [CLOSED] fix(coding-agent)：拒绝在被替换的会话上输入（#12400）
**内容：** 修复 #12243，在 `switchSession` 内部 `session_shutdown` 处理程序等待期间拒绝到达的提示词，防止在被释放的会话上执行。
🔗 https://github.com/earendil-works/pi/pull/12400

### 2. [CLOSED] fix(p2)：允许通过 touch 进行 @ 文件补全（#12404）
**改进：** 在 p2 Web UI 中启用 touch 方式来选择 `@` 文件补全，改善移动端体验。在 Android 上的 Firefox 和 Chrome 中测试通过。
🔗 https://github.com/earendil-works/pi/pull/12404

### 3. [CLOSED] fix(coding-agent)：按提供商解析 API 密钥（#691）
**内容：** 在中途切换模型时使用正确的提供商上下文解析 API 密钥，修复了 gpt-5.2-codex-high 的 bug。
🔗 https://github.com/earendil-works/pi/pull/691

---

## 热门讨论

### 想法 / 工作流

**你们如何在不同 Pi 和其他 agent 之间组织 skills？（#11870）**
一位用户分享了他在 Pi、Claude Code 和 OpenCode 之间 skills 重复的困扰，并开发了一款 macOS 应用 + CLI 工具 **AgentKeeper** 来集中管理 skills。凸显了对更好的跨 agent skills 管理方案的需求。
🔗 https://github.com/earendil-works/pi/discussions/11870

---

## 功能需求趋势

通过对近期 issues 和讨论的分析，发现以下 recurring 主题：

| 主题 | 频率 | 示例 |
|-------|-----------|----------|
| **思考/推理控制** | 高 | Gemini 4 Hydrogen xhigh 支持、Z.AI 思考开关、推理内容处理 |
| **多提供商兼容性** | 高 | Bedrock 图像处理、OpenAI 推理丢弃、Grok 4.7 回放错误 |
| **会话生命周期管理** | 中 | 永久删除、会话竞态条件、已释放会话执行 |
| **工具执行顺序** | 中 | 并发 bash/read 竞态、工具调用排序 |
| **UX 优化** | 中 | Focus 模式（#12410）、TUI 大小调整处理、Windows 外部编辑器 |
| **文件工具健壮性** | 低 | 畸形输入的路径截断、codemode 语法错误恢复 |

---

## 开发者痛点

1. **跨提供商推理内容处理** — OpenAI、Bedrock、Google 和 Grok 对推理/思考内容的处理行为不一致，模型会意外拒绝或丢弃推理项。

2. **工具执行竞态条件** — bash 和 read 工具调用的并发执行导致依赖未满足时失败，表明需要执行顺序保证机制。

3. **Windows 特定问题** — 外部编辑器启动静默失败、Git 检测遗漏非 Program Files 安装路径、Tabby 中右键粘贴重复。

4. **会话生命周期 bug** — 在已释放会话上执行提示词以及会话替换竞态条件会产生静默失败，难以调试。

5. **提供商 API 差异** — 模型宣传的能力（如 Gemini 4 Hydrogen xhigh）被适配器拒绝，慢速本地模型的用户设置超时行为不生效。

---

*本日报基于 2026-11-23 GitHub earendil-works/pi 数据生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. I need to:

1. Translate all the text while keeping technical terms, code references, and structure intact
2. Use natural Chinese technical writing style
3. Preserve all formatting - headings, tables, lists, etc.
4. Keep URLs, numbers, issue references unchanged
5. Translate only the text content, not the structural elements

Let me work through this section by section:

**Section 1: Today's Highlights**
- "Qwen Code Community Digest" → "Qwen Code 社区技术周刊"
- "Today's Highlights" → "本周要闻"
- Translate the content about v0.28.4 release and CI issues

**Section 2: Releases**
- "Releases" → "版本发布"
- "Release notes" → "版本说明"
- Table content needs translation

**Section 3: Hot Issues**
- "Hot Issues" → "热门议题"
- Translate the issue descriptions and comments
- Keep priority indicators, status labels

**Section 4: Key PR Progress**
- "Key PR Progress" → "重要 PR 进展"
- Translate PR descriptions

**Section 5: Feature Request Trends**
- "Feature Request Trends" → "功能需求趋势"
- Translate analysis content

**Section 6: Developer Pain Points**
- "Developer Pain Points" → "开发者痛点"
- Translate the categories and descriptions

Let me do the full translation now:
</think>


# Qwen Code 社区技术周刊 — 2026-11-23

## 1. 本周要闻

Qwen Code v0.28.4 今日发布，Web Shell 迎来重大更新：新增工作区制品库页面，支持渐进式扫描和流式更新；同时带来了共享 ChatSurface、Continue 徽章和快捷建议卡片。目前团队正在积极解决 CI 稳定性问题——Managed Agent gate 失败在议题区以 545 条评论占据榜首——同时稳步推进 1.0 Preview 事件驱动内核的渐进式合并工作。

## 2. 版本发布

### v0.28.4 (2026-11-23)
**版本说明：** https://github.com/QwenLM/qwen-code/releases/tag/v0.28.4

| 组件 | 变更内容 |
|-----------|---------|
| **Web Shell (local daemon)** | 新增工作区制品库页面，支持渐进式扫描和流式更新 ([#18071](https://github.com/QwenLM/qwen-code/pull/18071)) |
| **Web Shell (chat)** | 引入共享 ChatSurface、Continue 徽章和快捷建议卡片 |
| **Desktop** | Qwen Code Desktop v0.28.4 正式发布 |

---

## 3. 热门议题

### 🔴 严重 / 高优先级

**1. [主 CI 失败：Managed Agent Gate — 无法定位失败测试 (#14724)](https://github.com/QwenLM/qwen-code/issues/14724)**  
*545 条评论 | 状态：开启 | 优先级：—*

追踪器中最活跃的议题。Managed Agent gate 反复出现 CI 失败，且无明显失败测试可追溯，疑似竞态条件或环境问题。社区反馈强烈——这已是第 7 次复现。解决进度正在阻塞稳定版本发布。

**2. [主 CI 失败：E2E 测试 — 无法定位失败测试 (#11680)](https://github.com/QwenLM/qwen-code/issues/11680)**  
*106 条评论 | 状态：开启 | 优先级：—*

E2E 测试套件在 `main` 分支上运行失败，结果未上报即中止，发生在 Linux Docker 分片。与 #14724 模式相似——疑似基础设施层面的不稳定性，而非代码缺陷。

**3. [主 CI 失败：Qwen Code CI — Windows Node 22.x (#11678)](https://github.com/QwenLM/qwen-code/issues/11678)**  
*68 条评论 | 状态：开启 | 优先级：—*

Windows 单元测试在测试生成阶段失败。多处 Windows 特异性失败表明可能存在平台兼容性问题。

**4. [每日依赖 CVE 审计失败 (#13078)](https://github.com/QwenLM/qwen-code/issues/13078)**  
*62 条评论 | 状态：已关闭 | 优先级：—*

定时安全审计因新发现的高危漏洞或 npm audit 端点不可用而失败。现已关闭，应已完成修复。

**5. [ECS Runner 集群过期：qwen 更新失败 (#17085)](https://github.com/QwenLM/qwen-code/issues/17085)**  
*3 条评论 | 状态：开启 | 优先级：—*

多个 ECS Runner 池（如 `ecs-update-hk-5`）未能更新至 v0.27.3，仍在运行旧版 qwen。影响 CI/CD 基础设施可靠性。

---

### 🟡 功能追踪

**6. [将 1.0 Preview 循环内核合并至 main (#17045)](https://github.com/QwenLM/qwen-code/issues/17045)**  
*24 条评论 | 状态：进行中 | 优先级：P1*

Qwen Code 1.0 的核心架构——基于统一 `query()` 入口的事件驱动内核正在逐步合并，一次覆盖一个功能面。这是产品的战略方向。

**7. [实验性智能 UI：带状态交互 (#14019)](https://github.com/QwenLM/qwen-code/issues/14019)**  
*7 条评论 | 状态：开启 | 优先级：P2*

为 Web Shell 添加完整智能 UI 能力的提案，允许助手根据任务上下文在纯文本、原生组件或独立 HTML 可视化之间选择。目前处于讨论阶段。

**8. [在工作区和 Git worktree 之间共享项目自动记忆 (#18030)](https://github.com/QwenLM/qwen-code/issues/18030)**  
*4 条评论 | 状态：开启 | 优先级：P2*

目前每个 Git worktree 都有独立的自动记忆目录，通过 worktree 切换分支时会丢失已学习到的上下文。本提案旨在跨 worktree 统一共享记忆。

---

### 🟢 值得关注的 Bug 修复

**9. [Windows @ 自动补全丢失含空格/括号的文件名 (#18141)](https://github.com/QwenLM/qwen-code/issues/18141)**  
*2 条评论 | 状态：开启 | 优先级：P2 | 更新于：2026-11-23*

Windows 特异性 Bug：含空格或括号的文件名在 `@` 自动补全时插入格式错误的反斜杠转义标记，导致文件被静默跳过。

**10. [Gemma 3/4 被识别为纯文本模型，图片从未发送 (#18136)](https://github.com/QwenLM/qwen-code/issues/18136)**  
*2 条评论 | 状态：开启 | 优先级：P2*

尽管 Gemma 3 和 4 支持图片输入，但模态检测未能识别它们，导致视觉能力完全失效。影响 Ollama 和 HuggingFace 部署。

---

## 4. 重要 PR 进展

| PR | 作者 | 类别 | 摘要 | 状态 |
|----|--------|----------|---------|--------|
| [#17926](https://github.com/QwenLM/qwen-code/pull/17926) | qqqys | ACP 功能 | 发送排队输入时，正在运行的 shell 现在会转入后台，而非停止 | 开启 |
| [#18151](https://github.com/QwenLM/qwen-code/pull/18151) | doudouOUC | 文档 | Action 停车位扩展设计（预实现阶段） | 开启 |
| [#18150](https://github.com/QwenLM/qwen-code/pull/18150) | qqqys | 文档 | 示例 Mod 展示中文输出效果（zh-display） | 开启 |
| [#14672](https://github.com/QwenLM/qwen-code/pull/14672) | CannerG | 设置 | 新增 `general.updateMode` 配置项（`auto`/`notify`/`off`），将更新通知与自动安装解耦 | 开启 |
| [#17823](https://github.com/QwenLM/qwen-code/pull/17823) | water-in-stone | Agent 修复 | A2A 任务在转录本读取错误后仍可通过可重试的 JSON-RPC 错误保持可恢复性 | 开启 |
| [#17698](https://github.com/QwenLM/qwen-code/pull/17698) | callmeYe | Core 修复 | Grep 工具现优先使用健康的系统 `rg`，尊重 `tools.useBuiltinRipgrep: false` 配置 | **已关闭** |
| [#18058](https://github.com/QwenLM/qwen-code/pull/18058) | doudouOUC | 重构 | 以有界 VARCHAR 和规范引用替换 managed-agent 中的身份哈希键 | 开启 |
| [#18111](https://github.com/QwenLM/qwen-code/pull/18111) | wenshao | 跨组件修复 | 强化守护进程处理超大会话转录本的能力——在恢复、索引和回放环节妥善处理限制 | 开启 |
| [#15650](https://github.com/QwenLM/qwen-code/pull/15650) | n1nja88888 | MCP 修复 | OAuth Bearer 令牌现在在每次 MCP 请求时刷新，而非在传输创建时缓存 | 开启 |
| [#18146](https://github.com/QwenLM/qwen-code/pull/18146) | callmeYe | 性能优化 | 通过对转录本摘要使用有界读取，减少会话目录扫描 I/O | 开启 |

### 近 期 合 并（值得关注）

- **[#17698](https://github.com/QwenLM/qwen-code/pull/17698)** — Grep 工具现优先使用系统 ripgrep（当其健康时），提升拥有原生 `rg` 的系统上的性能。
- **[#17922](https://github.com/QwenLM/qwen-code/pull/17922)** — Generated UI 卡片现通过 `ui.state` 持久化视图状态，完成状态管理特性。

---

## 5. 功能需求趋势

从议题和 PR 的分析来看，以下功能方向占据主导：

| 主题 | 证据 | 趋势方向 |
|-------|----------|-----------------|
| **1.0 架构现代化** | #17045（内核合并）、#17926（ACP shell 后台化） | 高投入；战略优先级 |
| **多工作区管理** | #18140（侧边栏工作区控制）、#18030（worktree 记忆共享）、#18009（worktree 快照） | 多仓库工作流需求增长 |
| **Web Shell UI 增强** | #14019（智能 UI）、#18071（制品库）、共享 ChatSurface | 活跃开发；用户体验导向 |
| **CJK 及国际化** | #18145（CJK @-路径支持）、#18150（中文输出 Mod） | 解决非 ASCII 边界情况 |
| **企业版 / Managed Agent** | #18058（身份重构）、#18151（Action 停车设计）、#18127（取消卡顿） | 生产级基础设施加固 |
| **会话转录本可扩展性** | #18111（超大转录本）、#18097（分页测试） | 解决长时会话痛点 |

---

## 6. 开发者痛点

### 🔧 CI/CD 可靠性
- **反复出现"无法定位失败测试"的失败**——涵盖 Managed Agent gate、E2E 和单元测试等多条链路，暗示系统性不稳定性问题。社区已提交 8+ 条议题追踪此类失败。
- **ECS Runner 集群过期** (#17085) 导致部分 CI Runner 运行旧版 qwen，可能掩盖或引发失败。
- **高负载下 Vitest RPC 超时** (#13384) 导致假阴性测试结果——所有测试通过但运行以 exit code 1 退出。

### 🖥️ Windows 平台缺口
- 含空格或括号的文件自动补全产生格式错误的标记 (#18141)——影响 Windows 用户处理典型项目结构的体验。
- 通用 Windows CI 失败 (#11678) 表明兼容性债务持续存在。

### 📦 模型支持缺口
- Gemma 3/4 因模态检测失败而视觉能力被禁用 (#18136)。
- SGLang 错误响应解析不当，隐藏了上下文溢出错误 (#18135)。

### 🔐 安全 / 运维
- CVE 审计失败制造噪音 (#13078，已关闭)。
- MCP OAuth 令牌刷新问题导致认证失败 (#15650)。

### ⚡ 性能问题
- 会话目录扫描导致过度 I/O (#18146)——正在进行优化。
- 系统 `rg` 未优先于内置二进制使用，造成不必要的开销 (#17698，已修复)。

---

*本周刊基于 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) GitHub 数据生成 | 2026-11-23*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*