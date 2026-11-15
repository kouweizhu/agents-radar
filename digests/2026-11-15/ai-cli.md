# AI CLI 工具社区动态日报 2026-11-15

> 生成时间: 2026-11-15 02:05 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to output only the translation, preserving the exact Markdown structure (tables, headings, lists, etc.), keeping all code references, issue/PR numbers, URLs, and technical identifiers as-is. The register should be natural technical Chinese — like a Chinese developer newsletter — not a literal word-for-word translation.

Let me translate this carefully section by section.
</think>


# AI CLI 工具跨平台生态对比报告

## 2026 年 11 月 15 日

---

## 1. 生态全景

AI CLI 工具生态正处于高速迭代期，六大主流平台均在向更自主、更可靠、更可扩展的 Agent 框架演进。今日无平台发布正式版本，仅 Qwen Code 发布了一个 nightly 构建。当前行业共同的技术焦点集中在三个方面：**子 Agent 编排可靠性**、**MCP（Multi-Cloud Protocol）集成加固** 以及 **平台特定稳定性** —— Windows、Wayland 等平台尤甚。部分工具同时在推进重大架构转型：Qwen Code 正在推出 1.0 统一 Agent 循环内核，Claude Code 在强化 rollout budget 执行机制，Gemini CLI 在深化 ACP 模式的功能对标。整个生态的关注点正从功能交付转向 **生产级加固**：内存治理、会话保真、跨平台一致性和安全边界。

---

## 2. 活跃度对比

| 工具 | 仓库 | Issues | PRs | Discussions | Releases（24h） | 活跃度 |
|------|------|--------|-----|-------------|----------------|--------|
| Claude Code | anthropics/claude-code | 50 | 4 | N/A* | 0 | ●●●●○ |
| OpenAI Codex | openai/codex | 50 | 25 | 7 | 0 | ●●●●● |
| Gemini CLI | google-gemini/gemini-cli | 50 | 16 | N/A* | 0 | ●●●●○ |
| GitHub Copilot CLI | github/copilot-cli | 22 | 0 | N/A* | 0 | ●●○○○ |
| OpenCode | anomalyco/opencode | 30 | 17 | N/A* | 0 | ●●●○○ |
| Pi | earendil-works/pi | 25 | 4 | 2 | 0 | ●●○○○ |
| Qwen Code | QwenLM/qwen-code | 50 | 18 | N/A* | 1 | ●●●●○ |

> \* Issues 和 PR 是这些仓库的主要社区交互渠道，Discussions 并非主要使用方式。

**观察：**
- **OpenAI Codex** 在 PR 吞吐量上领先（25 个合并），也是唯一有活跃 Discussions 的工具，反映出更广泛的外部贡献者群体和插件生态。
- **Qwen Code** 是今日唯一有发布记录的工具（nightly v0.27.2），同时正在推进重大架构迁移（1.0 内核），内部迭代速度最高。
- **Claude Code**、**Gemini CLI** 和 **Qwen Code** 的 issue 数量完全持平（均为 50），社区规模和参与度相近。
- **GitHub Copilot CLI** 和 **Pi** 的社区活跃度偏低，Copilot CLI 更是零 PR 活动——与其内部主导、Microsoft 控制发布节奏的模式一致。

---

## 3. 共性功能方向

以下需求出现在三个或以上工具社区中，代表了整个生态的真实优先事项：

### 跨工具共性需求

| 共性需求 | 涉及工具 | 具体表现 |
|-------------|----------------|------------------------|
| **MCP 集成加固** | Claude Code, Gemini CLI, OpenCode, Copilot CLI, Qwen Code, Pi | 工具描述热重载（#97369 Claude）、传输层环境变量展开（#10654 Gemini）、MCP 子进程倍增（#37844 OpenCode）、OAuth 原生代理阻塞（#5452 Copilot）、MCP 服务连接中断后恢复（#109594 Claude）、中断后的会话修复（#12160 Pi） |
| **子 Agent 编排可靠性** | Claude Code, Gemini CLI, OpenCode, Qwen Code, Pi | MAX_TURNS 恢复机制（#22323 Gemini）、sessionID 续接（#59293 Pi）、子 Agent 委托（#17261/17247 Qwen）、后台 Agent 唤醒抑制（#63894 OpenCode）、进程树治理（#91081 Claude） |
| **内存与资源治理** | Claude Code, Gemini CLI, Copilot CLI, Qwen Code, Pi | macOS 上 fseventsd 失控（#98769 Claude）、OOM 崩溃（#5435 Copilot）、PTY daemon 僵尸进程泄漏（#63817 OpenCode）、MCP 子进程倍增（#37844 OpenCode）、衍生进程的内存上限（#91081 Claude） |
| **会话与历史管理** | Claude Code, Copilot CLI, OpenCode, Pi | 对话消息时间戳（#44763 Claude）、按会话独立的历史记录（#52154 OpenCode）、无持久化的临时模式（#53921 OpenCode）、图片历史裁剪（#59794 OpenCode）、12 万+ 条目级别的会话可扩展性（#12154 Pi） |
| **平台一致性（Windows/Linux/Wayland）** | Claude Code, Codex, Copilot CLI, OpenCode, Pi, Qwen Code | Windows cmd.exe 窗口风暴（#17266 Qwen）、Wayland 剪贴板失效（#4615 Copilot）、Linux/Wayland 文件描述符泄漏（#98725 Claude）、GNOME Terminal 主题渗透（#63977 OpenCode）、Windows @import 被忽略（#99032 Claude） |
| **Rollout Budget 与 Token 管理** | Claude Code, Gemini CLI, Codex | 分数级 rollout budget（#61579 Codex PR, #19873 Gemini）、上下文开销回退（#5450 Copilot）、searchTools() 上下文膨胀（#12165 Pi）、输出截断（#30297 Gemini, #30297 Claude） |
| **Hook 与扩展安全策略** | Claude Code, Gemini CLI, Copilot CLI | `PreToolUse` hook 失败即关闭（#41979 Copilot）、污点命令规则升级（#30196 Gemini）、hook 唤醒 ≠ 转录完成（#61585 Codex）、后台 Agent hook 跳过问题（#110127 Claude） |

### 关键洞察

**MCP 和子 Agent 编排** 是共性浓度最高的两大需求，贯穿所有工具社区。这反映出不同工具正在收敛到相似的可扩展性模型，但同时遇到了类似的失效模式 —— 特别是传输生命周期管理、OAuth 流程和子进程监管方面。

---

## 4. 差异化分析

### 功能定位

| 工具 | 核心差异化 | 次要关注点 |
|------|------------------------|-----------------|
| **Claude Code** | TUI 深度、团队协作（Shared Team Memory）、模型指令遵从性 | macOS 性能、MCP 工具生命周期、CLI/VS Code 功能对等 |
| **OpenAI Codex** | Computer Use（浏览器自动化）、多账户工作区、rollout budget 生命周期 | MCP 生态（社区插件）、跨平台桌面、ACP 模式功能对标 |
| **Gemini CLI** | ACP（Agent Client Protocol）优先设计、通过 bash 亲和性实现安全沙箱 | AST 感知工具链、并行工具执行、零依赖 OS 沙箱化 |
| **GitHub Copilot CLI** | GitHub 原生集成、订阅层感知的模型选择 | 内存效率、OAuth（Entra）认证、后台轮询优化 |
| **OpenCode** | 多 Provider 灵活性（Ollama、LM Studio、OpenRouter、自定义）、会话/图片优化 | PTY daemon 稳定性、跨 LLM 推理、国际化覆盖 |
| **Pi** | Codemode 脚本化、分类器模型路由、Docker 开发模板 | MCP 配置灵活性、重试策略粒度、开发者体验打磨 |
| **Qwen Code** | Managed Agent 与子 Agent 委托、统一 1.0 Agent 循环内核 | Windows daemon 稳定性、CI 门禁可靠性、多工作区 Goals 页面 |

### 目标用户

| 工具 | 主要用户画像 |
|------|----------------|
| **Claude Code** | 需要持久化对话记忆和多用户协作的专业开发者及团队 |
| **OpenAI Codex** | 使用 GitHub Copilot Business/Enterprise 的企业团队、Windows 优先的工作流、浏览器自动化场景 |
| **Gemini CLI** | 注重可扩展性和 ACP 生态的开发者、安全敏感型部署 |
| **GitHub Copilot CLI** | GitHub 深度集成的团队、受订阅约束的场景、CLI 优先的高级用户 |
| **OpenCode** | 运行异构 LLM 技术栈的研究者和开发者、开源倡导者 |
| **Pi** | 在 codemode 中编写多 Agent 工作流的开发者、企业 AI 集成构建者 |
| **Qwen Code** | 使用阿里云/Qwen 模型的大规模部署、托管多租户 Agent 基础设施 |

### 技术路线

| 工具 | 架构哲学 |
|------|--------------------------|
| **Claude Code** | TUI 优先，VS Code 扩展功能对等；轮询式 Agent 监控；用户级内存模型 |
| **OpenAI Codex** | Rollout budget 驱动的执行，事件溯源会话状态；HTTP/WebSocket 边界处的分数预算执行 |
| **Gemini CLI** | ACP 优先的协议设计；Hook 生命周期管理；并行工具调用调度；bash 原生沙箱化 |
| **GitHub Copilot CLI** | 轻量级后台任务轮询；订阅层感知模型门控；OAuth 原生认证流程 |
| **OpenCode** | 多 Provider 抽象层；PTY daemon 架构支撑长生命周期 shell 会话；二进制 WebSocket 传输用于浏览器代理 |
| **Pi** | Codemode 脚本作为一等公民 API；按工具独立输出限制；分类器模型路由 |
| **Qwen Code** | 统一 `query()` 入口背后的事件驱动内核；带子 Agent 委托的托管 Agent 拓扑；信任规则 CI 路由 |

---

## 5. 社区势能与成熟度

### 速度排名

| 排名 | 工具 | 势能证据 |
|------|------|----------------------|
| **1** | **OpenAI Codex** | 24 小时内合并 25 个 PR；7 个活跃讨论；最大的社区插件生态（Ragmir、Codex Pulse、AppScreen、Selvedge、Codexless） |
| **2** | **Qwen Code** | 今日唯一有发布的工具；18 个 PR；公开透明地推进重大架构迁移 |
| **3** | **Claude Code** | 50 个 issue 且评论密度高；头部功能请求获 102+ 点赞；完善的回归报告文化 |
| **4** | **Gemini CLI** | 16 个 PR；50 个 issue；安全专项 PR（#30196、#30296）表明成熟的 DevOps 流程 |
| **5** | **OpenCode** | 17 个 PR；重大工程里程碑（binary WebSocket 浏览器代理、PTY 修复） |
| **6** | **Pi** | 4 个 PR、2 个讨论；规模小但贡献稳定；文档和 API 人体工学持续打磨 |
| **7** | **GitHub Copilot CLI** | 22 个 issue、0 个 PR；低迭代速度与其内部工具定位一致 |

### 成熟度信号

| 指标 | 领先者 | 说明 |
|-----------|--------|-------|
| **回归管理** | Claude Code、Codex | 每个迭代周期都有多个活跃回归报告；团队在发布节奏中承认回归风险 |
| **安全加固** | Gemini CLI、Codex | 失败即关闭策略、污点命令预防、OAuth promise 驱逐——安全文化成熟 |
| **生态工具链** | Codex、OpenCode | 社区构建的插件、适配器、配套工具涌现，表明第三方生态活力 |
| **架构迁移透明度** | Qwen Code | Issue #17045 公开追踪 1.0 内核落地进度，项目沟通成熟 |
| **文档质量** | OpenCode、Pi | 双语文档、设计账本、能力矩阵；Pi 的 AGENTS.md 双语规则强制 |
| **跨平台稳定性** | 无 | 每个工具都有活跃的平台专属 bug（Windows、Linux、Wayland、macOS）；尚无工具实现完整平台对等 |

---

## 6. 趋势信号

### 从社区反馈中观察到的行业趋势

**1. MCP 正在成为通用集成层**
每个工具都在投资 MCP——不是作为尝鲜功能，而是作为基础设施。在传输生命周期、OAuth 流程、子进程管理和工具热重载上的趋同表明，MCP 正在成为 AI Agent 的事实标准扩展 API。社区构建的 MCP 服务器多样性（Ragmir、AppScreen、Codexless）印证了这一判断。

**2. Rollout Budget 和 Token 治理已成标配**
Claude Code 的分数级 rollout budget（#61579 Codex PR）、Gemini CLI 的上下文提醒、Copilot CLI 约 20K token 级别的回归 —— 都表明 token 预算管理不再是可选项。随着上下文窗口在高负载下收紧，不能提供细粒度控制的工具将面临用户摩擦。

**3. 子 Agent 编排是下一个角力场**
从 Claude Code 的 Shared Team Memory（#38536）到 Qwen Code 的托管 Agent 委托，从 Pi 的 sessionID 续接到 OpenCode 的后台 Agent 唤醒抑制 —— 每个工具都在独立地解决管理 Agent 层级结构的难题。目前各家的解决方案尚未标准化。

**4. 平台一致性仍是奢求**
没有哪个单一工具实现了可靠的跨平台行为。Windows、macOS 和 Linux/Wayland 各有独特的问题域，占用了不成比例的工程时间。这表明 AI CLI 工具生态距离生产级平台成熟还有 12–18 个月。

**5. 安全正在追赶功能**
失败即关闭策略、污点命令预防、OAuth promise 驱逐、通过 bash 亲和性实现 OS 沙箱化 —— 功能早期开发中被降级处理的安全问题正在被各成熟工具系统性地关注。

**6. 社区插件生态正在 Codex 和 OpenCode 周围成形**
社区构建工具的多样性（Ragmir、Codex Pulse、AppScreen、Selvedge、claude-bulkhead、Codexless、Context Attachment Manager、Chatstone）表明，拥有文档化 Hook 和 MCP API 的开放平台正在吸引第三方创新。这是正向飞轮：更好的 API → 更多插件 → 更多用户 → 更多贡献者。

**7. 1.0 内核模式**
Qwen Code 的分阶段 1.0 内核落地、Claude Code 的 `fableplan` 别名讨论，以及 OpenAI Codex 的 rollout budget 重构，都反映了一个共同模式：工具正在从"可用的原型"向"稳定的产品"演进，手段是识别并中心化其核心执行循环。这种架构整合通常先于生态扩张。

---

*基于各工具 GitHub 摘要合成的跨平台分析报告 | 2026-11-15*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese while preserving all formatting, links, code references, and using natural technical Chinese register. Let me go through and translate this carefully.

Key things to preserve:
- Tables with all formatting
- URLs and links
- Code spans like `mcp-builder`, `shell=True`
- Issue/PR references like #1742
- Emoji
- Bold/italic text
- Horizontal rules
- Blockquotes
- Numbered lists

Let me translate section by section, using appropriate Chinese technical terminology.

Technical terms to use consistently:
- "Skills" → "技能"
- "PR" / "Pull Request" → keep as PR (standard in Chinese tech)
- "Issues" → "议题" or keep as Issue
- "community" → "社区"
- "namespace" → "命名空间"
- "trigger" → "触发"
- "workflow" → "工作流"
- "bug" → "缺陷" or "Bug"
- "fix" → "修复"
- "status" → "状态"
- "source" → "来源"
- "ranking" → "排名"
- "trend" → "趋势"
- "ecosystem" → "生态系统"
- "security" → "安全"
- "trust boundary" → "信任边界"
- "evaluation" / "eval" → "评估"
- "infrastructure" → "基础设施"
- "proposal" → "提案"
- "feature request" → "功能请求"
- "tooling" → "工具链"
- "enterprise" → "企业"
- "collaboration" → "协作"
- "command injection" → "命令注入"
- "static analysis" → "静态分析"
- "smart contract" → "智能合约"
- "audit" → "审计"

Let me translate the whole document now:
</think>


# Claude Code Skills 社区亮点报告
**数据截至 2026-11-15 | 来源：github.com/anthropics/skills**

---

## 1. 热门技能排名

以下 PR 按活跃度、新近度和功能范围排列，代表最具价值的技能贡献：

| 排名 | PR # | 技能 / 修复 | 作者 | 状态 | 核心功能 |
|------|------|-------------|------|------|----------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | `mcp-builder`：支持 MCP ≥2 `streamable_http_client` | Kuldeeep18 | OPEN | 新增对 MCP 2.x 重命名导入（`streamable_http_client`）的兼容性，并支持通过 `create_mcp_http_client` 配置自定义 HTTP 请求头。修复 #1668。 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator`：隔离触发器评估，处理 Windows 兼容问题 | MartinCajiao | OPEN | 解决各 worker 子进程间的冲突、Windows 上 `select()` 管道失败问题，以及将运行时失败误判为非触发器的评估错误。 |
| 3 | [#1980](https://github.com/anthropics/skills/pull/1980) | `webapp-testing`：移除 `shell=True`（CWE-78 修复） | Pcmhacker-piro | OPEN | 通过直接传递参数列表替换 `subprocess.Popen(..., shell=True)`，消除 `with_server.py` 中的命令注入风险。 |
| 4 | [#525](https://github.com/anthropics/skills/pull/525) | 新增 `pyxel` 技能：Retro 游戏开发 | kitao | OPEN | 提供使用 [Pyxel](https://kitao.dev/pyxel/) 引擎创建、调试和验证 Python 复古游戏的工作流，包括无头测试和状态检查。 |
| 5 | [#2019](https://github.com/anthropics/skills/pull/2019) | `xlsx`：解析工作表作用域的已定义名称 | reginaldalfret | OPEN | 修复公式通过工作表作用域的已定义名称（而非工作簿级别）引用外部链接时的误报问题。修复 #2013。 |
| 6 | [#1730](https://github.com/anthropics/skills/pull/1730) | `claude-api`：替换失效 URL | GISWLH | OPEN | 将 `academy-guide` 和 `tool-use-concepts` 中 3 个硬 404 文档链接更新为规范的平台/学院链接（已验证 HTTP 200）。 |
| 7 | [#1681](https://github.com/anthropics/skills/pull/1681) | `skill-creator`：支持直接执行 `package_skill.py` | Kuldeeep18 | OPEN | 修复独立运行 `package_skill.py` 时的 `ModuleNotFoundError`，并更新过时的 CLI 引用。 |
| 8 | [#514](https://github.com/anthropics/skills/pull/514) | 新增 `document-typography` 技能 | PGTBoos | OPEN | 防止 AI 生成文档中的排版缺陷：孤行单词、寡妇段落和编号错位。 |

**讨论亮点：**
- **安全导向**：PR #1980 直接针对 CWE-78（命令注入），表明社区对供应链安全的高度警觉。
- **MCP 生态**：PR #1742 反映了对 MCP 2.x API 变更的快速适配——这是 Claude Code 工具集成的关键依赖。
- **开发者工具**：多个 PR（1298、1681）以 `skill-creator` 本身为改进目标，说明社区重视高质量的技能编写体验。

---

## 2. 社区需求趋势

议题分析揭示三大主导需求方向：

### 🔒 安全与信任
- **[#492](https://github.com/anthropics/skills/issues/492)**（46 条评论）—— **`anthropic/` 命名空间下的社区技能引发信任边界滥用问题。** 关注度最高的议题指出，分发在官方命名空间下的社区提交技能可能误导用户授予过高权限。这是一个系统性治理问题。

### 🏢 企业协作
- **[#228](https://github.com/anthropics/skills/issues/228)**（17 条评论，8 👍）—— **实现 Claude.ai 组织级技能共享。** 用户目前只能通过 Slack/Teams 手动传输 `.skill` 文件，迫切需要一个共享技能库。
- **[#189](https://github.com/anthropics/skills/issues/189)**（6 条评论，9 👍）—— **`document-skills` 和 `example-skills` 安装了相同内容**，导致 Claude Code 中出现重复技能。

### 🛠️ 工具链与评估基础设施
- **[#556](https://github.com/anthropics/skills/issues/556)**（13 条评论，7 👍）—— **`run_eval.py` 触发率为 0%**：所有查询均未能触发技能——技能在评估期间从未被调用。
- **[#1352](https://github.com/anthropics/skills/issues/1352)**（6 条评论，3 👍）—— `run_eval.py` 并行 worker 交叉匹配技能 UUID，导致 `--num-workers > 1` 时产生系统性错误（触发率近乎为零）。

### 💡 新技能提案（功能请求）
- **[#1329](https://github.com/anthropics/skills/issues/1329)**（10 条评论）—— **提案：`compact-memory` 技能**——用于符号化标注智能体状态，减少长时运行智能体的上下文开销。
- **[#1385](https://github.com/anthropics/skills/issues/1385)**（7 条评论）—— **提案：推理质量门控流水线**——AI 输出质量的三门验证系统（任务前校准、对抗式评审、交付核验）。
- **[#412](https://github.com/anthropics/skills/issues/412)**（6 条评论，已关闭）—— **提案：`agent-governance` 技能**——在 AI 智能体系统中实现策略执行、威胁检测和审计追踪。

---

## 3. 高潜力待合并技能

以下活跃 PR 包含尚未合并的全新技能规范——有望近期入库：

| PR # | 技能 | 作者 | 状态 | 概述 |
|------|-------|--------|--------|----------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | ProofCore-Protocol | OPEN | 对 Solidity/Rust 智能合约进行静态分析，生成锚定 TON 区块链的加密审计证明。面向 Web3 开发者。 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | 70v-Yoyo | OPEN | 将 Markdown 文档编译为 MP4 视频，使用 Marp + 音频合成生成类人语音旁白。零成本的视频制作替代方案。 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` + `quantitative-resume-auditor` | mrdesouzaphd-cmyk | OPEN | 将产品/技术规格转化为 Notion 任务计划；基于量化评分标准审计简历。 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | `scnet-hpc` | lql341 | OPEN | 基于配置的 SCNet HPC 集群 SSH/Slurm 工作流，包含作业生成、集群发现和加速器指导。 |
| [#514](https://github.com/anthropics/skills/pull/514) | `document-typography` | PGTBoos | OPEN | AI 生成文档的自动排版质量检查（孤行、寡妇段落、对齐）。 |

**评估：** `proofcore-contract-auditor` 和 `scnet-hpc` PR 针对专业垂直领域（Web3、HPC），具有高度技术特异性，表明 Skills 生态系统正在从通用生产力工具向专业级工具链扩展。

---

## 4. 技能生态系统洞察

> **社区最集中的需求在于：健壮的技能创作基础设施和评估工具链（证据：3+ 个议题聚焦 `run_eval.py` 失败、安全修复和 `skill-creator` 改进），以及围绕 `anthropic/` 命名空间信任边界的管理透明度。**

---

*本报告基于公开 GitHub 数据生成。PR 状态反映提供数据的最新更新时间。*

---

<think>The user wants me to translate the entire Claude Code Community Digest from English into Simplified Chinese. Let me go through the content carefully and translate it while following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, version tags, etc. verbatim
4. Use natural technical Chinese register
5. Keep issue/PR references as-is

Let me translate section by section:

**Heading**: Claude Code 社区日报 — 2026年11月15日

**Section 1**: 今日要闻

**Section 2**: 版本更新 - no new releases

**Section 3**: 热门议题

For each issue, I need to translate the description but keep the numbers, links, and technical identifiers intact.

Let me proceed with the full translation:
</think>


# Claude Code 社区日报 — 2026年11月15日

## 1. 今日要闻

过去 24 小时内，社区继续保持高度活跃，共收到 50 个新 open issues，4 个 pull requests 有所更新。今日无新版本发布，但围绕 TUI 优化、macOS 资源管理以及 MCP 集成稳定性的讨论持续热烈。近期 2.1.3xx 版本更新后出现若干回归报告，Opus 5.5 的模型行为问题也在持续发酵。

---

## 2. 版本更新

**过去 24 小时内无新版本发布。**

当前最新稳定版仍为 2.1.325（Linux），使用 2.1.321–2.1.323 的用户正面临多种回归问题，包括 MCP 连接器缺失、子代理显示异常等。

---

## 3. 热门议题

### [#44763](https://github.com/anthropics/claude-code/issues/44763) — 在会话消息中显示时间戳
**43 条评论 | 102 👍 | 增强功能, 领域: TUI**

该功能请求目前是讨论区获赞最多的特性，要求在用户消息和助手消息上显示时间戳。这对于通过 cron 循环监控长时间运行的代理任务至关重要。102 个 👍 表明这是需要后台运行工作流的用户广泛面临的痛点。

---

### [#38536](https://github.com/anthropics/claude-code/issues/38536) — 为 Claude Code 提供团队共享记忆功能
**34 条评论 | 11 👍 | 增强功能**

提议将 Claude Code 的记忆系统从个人使用扩展到团队级知识共享。这对于需要频繁交接、代码审查和协作调查的工程团队尤为实用。目前所有上下文都按用户隔离存储。

---

### [#98769](https://github.com/anthropics/claude-code/issues/98769) — macOS: fseventsd 在代理密集型 Mac 上失控
**19 条评论 | Bug, 平台: macOS, 领域: 核心, 性能: 内存**

严重 Bug：fseventsd 占用 24 GB 内存（超出预算 800 倍），并持续数天占用一个 CPU 核心且不会自动恢复。这可能导致 Claude Code 在启动时卡死。影响使用 Mac 运行重度代理工作负载的开发者。**需立即关注。**

---

### [#91081](https://github.com/anthropics/claude-code/issues/91081) — 代理子进程树的资源治理
**19 条评论 | 增强功能, 平台: macOS, 领域: 核心, Bash, 代理**

提议为代理启动的进程（Bash、后台任务、子代理）实现内存上限、系统压力反馈和正确的终止顺序。目前这些进程树缺乏资源治理，在高强度工作负载下可能导致系统不稳定。

---

### [#13689](https://github.com/anthropics/claude-code/issues/13689) — 提升模型遵循指令的能力
**12 条评论 | 13 👍 | Bug/增强功能, 领域: 模型, 核心**

反馈 Claude Code 频繁无法遵循 CLAUDE.md 或直接请求中给出的明确指令。这影响了各工作流程的可靠性，是一个根本性的质量问题。

---

### [#97369](https://github.com/anthropics/claude-code/issues/97369) — MCP 工具描述变更无法触达活跃会话
**9 条评论 | Bug, 领域: MCP**

持久性 Bug：修改后的 MCP 工具描述或输入模式不会被传播到已加载该工具的会话中。`/mcp reconnect` 或 `--resume` 等变通方法也无法刷新元数据。

---

### [#105112](https://github.com/anthropics/claude-code/issues/105112) — 自 10 月 19 日起 Opus 5.5 出现答非所问问题
**8 条评论 | Bug, 平台: macOS, 领域: 模型**

自 2026 年 10 月中旬起，Opus 5.5 的答案修正率从 5.2% 急剧上升至 25.4%。用户反映模型能正确完成研究，但最终回答时却与研究结论相矛盾。**这可能意味着模型行为存在回归。**

---

### [#66903](https://github.com/anthropics/claude-code/issues/66903) — 创建类似 opusplan 的 fableplan 别名
**7 条评论 | 63 👍 | 增强功能, 领域: 模型**

请求添加 `fableplan` 模型别名，与现有的 `opusplan` 快捷方式类似。63 个 👍 使其成为第二高赞的增强功能请求。目前用户需要手动指定完整模型标识符才能使用规划模式。

---

### [#99032](https://github.com/anthropics/claude-code/issues/99032) — VS Code 扩展忽略项目 CLAUDE.md 中的外部 @import
**6 条评论 | Bug, 平台: Windows, 领域: VS Code**

在 Windows 上，CLAUDE.md 中的外部 `@import` 引用在终端中正常工作，但会被 VS Code 扩展面板忽略。项目中文件夹内的 import 则正常显示。

---

### [#109843](https://github.com/anthropics/claude-code/issues/109843) — 代理视图回归：子代理行缺失模型和上下文信息（已关闭）
**1 条评论 | Bug, 平台: Linux, 领域: 代理视图 | 状态: 已关闭**

2.1.325 版本的回归报告（现已关闭）：代理/集群视图中的子代理行不再显示模型名称和上下文用量。2.1.323 中正常显示。反映出快速发布节奏带来的持续回归问题。

---

## 4. PR 进展

### [#78445](https://github.com/anthropics/claude-code/pull/78445) — 修正插件描述与版本矛盾
**文档修复 | 作者: Atishyy27**

插件索引/市场元数据中有三处与实际插件行为相矛盾。PR 修正了 `security-guidance` hook 事件/模式计数及其他不一致之处，并对照插件源代码进行了验证。

---

### [#106972](https://github.com/anthropics/claude-code/pull/106972) — 在前台运行去重代理
**增强功能 | 作者: bpasero-ant**

解决了 dedupe 任务提前终止的问题——原因在于 Claude 在后台启动了代理导致轮次结束。通过在 dedupe 步骤设置 `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`，确保代理在步骤结束前完成。

---

### [#95698](https://github.com/anthropics/claude-code/pull/95698) — 修复插件 .sh hook 通过 bash 执行并引用路径
**Bug 修复 | 作者: claude[bot]**

三个捆绑插件（`ralph-wiggum`、`output-style`）注册的 hook 脚本路径未加引号。本 PR 修复了 `ralph-wiggum` / `output-style` 的 `.sh` hook 执行逻辑，正确引用路径，解决 shell 引号问题。

---

### [#81672](https://github.com/anthropics/claude-code/pull/81672) — 使 hookify 包导入与安装目录名称解耦
**Bug 修复 | 作者: ozdemirsarman**

`hookify` 插件的 hook 入口点依赖插件目录必须名为 `hookify` 才能进行包导入。市场安装时无法满足此条件，导致导入失败。本 PR 修复了导入机制，使其不受安装目录命名影响。

---

## 5. 功能请求趋势

分析高票 issues 和功能请求，呈现出以下几个主要方向：

| 主题 | 热度 | 关键议题 |
|-------|-----------|------------|
| **TUI/交互体验优化** | 高 | 消息时间戳显示 (#44763)、hook 消息展示 (#110127)、阻塞 hook 横幅 |
| **团队协作** | 中 | 团队共享记忆 (#38536)、后台代理监控 |
| **资源管理** | 高 | 进程树治理 (#91081)、内存上限、系统压力反馈 |
| **模型配置** | 中 | `fableplan` 别名 (#66903)、独立规划/实现模型 (#110126)、Opus 5.5 行为 |
| **MCP 集成** | 高 | 工具描述更新 (#97369)、MCP 服务重连 (#109594)、claude.ai 连接器丢失 (#109611) |
| **平台专项修复** | 高 | macOS fseventsd (#98769)、Windows @imports (#99032)、Linux/Wayland 文件描述符泄漏 (#98725) |

---

## 6. 开发者痛点

以下问题在各 issues 中反复出现：

1. **回归频率居高不下**：多条回归报告与近期的 2.1.3xx 版本相关（MCP 连接器缺失、子代理详情不显示）。用户对快速发布节奏导致的稳定性问题表示担忧。

2. **MCP 稳定性问题**：工具描述不更新、服务重启后不重连、更新后 claude.ai 连接器消失。MCP 系统在边界情况下表现脆弱。

3. **macOS 资源消耗**：fseventsd 失控占用 24 GB 内存并占满 CPU 核心，对运行重度代理工作负载的用户影响严重。

4. **模型指令遵循**：持续反馈 Claude Code 忽略 CLAUDE.md 或直接提示中的明确指令，导致 API 调用浪费和返工。

5. **平台不一致**：Windows 用户遇到 VS Code 扩展忽略外部 import 的问题；Linux/Wayland 用户在运行 7–25 小时后因文件描述符泄漏导致窗口冻结。

6. **插件 Hook 时序问题**：多条报告指出 hook 在返回后代理才启动时会被跳过，导致自动模式错误地拒绝启动请求。

7. **后台代理可见性**：缺少时间戳使监控长时间运行的后台任务变得困难；用户依赖 cron 循环却无法了解工作何时执行。

---

*日报生成日期：2026年11月15日 | 数据来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep technical terms, URLs, numbers, code references as-is
4. Use natural technical Chinese register

Let me translate this carefully section by section.

Note: The user said at the end "Output ONLY the translation" and gave rules, but there's also a system message about being M1 and an html/JS context. However, the actual user message is asking for a translation. I should just output the translation.

Let me translate the content:

**Title:** OpenAI Codex Community Digest — 2026-11-15

**Section 1:** Today's Highlights

**Section 2:** Releases

**Section 3:** Hot Issues (table)

**Section 4:** Key PR Progress (table)

**Section 5:** Hot Discussions

**Section 6:** Feature Request Trends

**Section 7:** Developer Pain Points

Let me go through each section carefully.
</think>


# OpenAI Codex 社区速报 — 2026-11-15

## 1. 今日要闻

社区当前面临两个高严重性 Windows 回归问题：Computer Use 的浏览器窗口检测于 10 月 6 日起失效（#51524，90 条评论），且一个新出现的 `AbsolutePathBuf` 反序列化错误导致 Windows 版 Codex Desktop 无法恢复云端管理的会话（#59855，36 条评论）。在 PR 方面，过去 24 小时合并了 13 个 pull request，对滚动预算（rollout budget）生命周期管理进行了全面重构，包括分数预算支持、工具调用前重检以及中性中断标记——这表明预算强制执行子系统正在经历一次重大加固。过去 24 小时内无新版本发布。

---

## 2. 版本发布

**过去 24 小时无新版本发布。** 最新稳定版仍为今日之前的当前版本。

---

## 3. 热点 Issue

| # | Issue | 为何重要 | 社区反馈 |
|---|-------|----------|----------|
| **#51524** | **[Windows] Computer Use 在 `get_window_state` 处停止：无法获取当前浏览器 URL** | 这是 Issue 追踪器中流量最高的问题。浏览器窗口枚举功能正常，但 `sky.get_window_state()` 会立即中断当前轮次，导致 Computer Use 在 Windows 上的 Chrome 和 Edge 上完全无法使用。该回归问题自 10 月 6 日引入，至今未修复。 | 90 条评论，9 👍 |
| **#59855** | **Windows 版 Codex Desktop 恢复云端管理会话时抛出 `AbsolutePathBuf` 错误** | Windows 用户无法恢复现有云同步会话；在提交任何消息前应用就抛出反序列化错误，导致已持久化的会话数据实际上无法访问。 | 36 条评论，0 👍 |
| **#57190** | **macOS：重启后现有会话中浏览器报告已禁用，而其他会话中则正常** | 浏览器全局启用但特定会话中报告禁用的一致性状态问题，导致 macOS 上重启后 Computer Use 无法使用。 | 19 条评论，3 👍 |
| **#60058** | **Windows / ChatGPT Work：完整访问控制消失，但网络限制仍生效** | Work 编写器在会话开始前显示"完整访问"，但执行上下文静默降级为"工作区写入 + 受限网络"模式，导致 SSH 和网络依赖工作流失效。 | 19 条评论，1 👍 |
| **#60778** | **iOS 版 Codex 显示"暂无任务"但现有会话仍可通过搜索找到** | iPhone 上任务列表完全空白的空状态缺陷；但通过搜索仍可找到会话，表明这是一个与远程连接流程相关的列表渲染回归问题。 | 17 条评论，11 👍 |
| **#48139** | **Codex CLI TUI 在 Debian Linux 上的复制粘贴快捷键发生变化** | Debian 上键盘快捷键行为与文档默认值产生偏差，打破了 Linux CLI TUI 用户长期形成的肌肉记忆。 | 14 条评论，9 👍 |
| **#30684** | **添加账户/工作区切换支持**（功能增强） | 目前切换账户或工作区需要完整的退出登录/重新登录流程。这是获得最高票数的功能请求（37 👍），跨越应用、CLI 和 IDE 扩展三个平台。 | 14 条评论，37 👍 |
| **#41979** | **为 `PreToolUse` 钩子失败添加 opt-in 故障关闭（fail-closed）处理**（功能增强） | 钩子作者目前无法在前提条件检查失败时中止工具调用；此请求将添加故障关闭策略选项，与现有的故障开放（fail-open）默认行为并存。 | 12 条评论，4 👍 |
| **#20805** | **含大量图片的会话反复重连且速度极慢** | 含大量图片的长会话导致近乎持续的重连周期和严重延迟，表明图片数据在每轮交互中都被重新上传而非缓存。 | 11 条评论，9 👍 |
| **#61459** | **Dot 无法控制连接的 Windows VM：`GetCursorPos` 访问被拒绝** | 基于 Dot 的 Windows VM 自动化在 `GetCursorPos` 上抛出访问拒绝错误，而同一 VM 上的常规 ChatGPT Work 会话却能控制其浏览器——这表明问题出在 Dot 执行路径的权限差异上。 | 3 条评论，0 👍 |

---

## 4. 关键 PR 进展

以下 13 个 PR 在过去 24 小时内合并，构成了一次围绕滚动预算与会话生命周期可靠性的协同推进：

| PR | 标题 | 变更内容 |
|----|------|----------|
| **#61596** | 将 agent 概览刷新状态限定在各自的 backend 范围内 | 刷新状态现在按 backend 隔离，防止当 backend 在刷新中途切换时，后续分页页面的刷新消费另一个 backend 的补充预算。 |
| **#61595** | 将 TUI 历史条目的查询限定在其所属轮次内 | 分页历史条目现在携带轮次 ID；条目 ID 在同一轮次内唯一，修复了加载较旧历史时完成边界错位的问题。 |
| **#61587** | 为 model 请求钩子添加 request ID 和尝试次数 | 在 `PreModelRequest`/`PostModelRequest` 中新增 `request_id` 和从 1 开始的 `attempt_number` 字段，支持重试和 model 回退的关联追踪。 |
| **#61583** | 重构滚动预算检查和轮次完成状态 | 在 HTTP 和 WebSocket 请求贡献者之前集中执行生成准入检查；待处理输入和行内压缩现在走专用预算检查路径。 |
| **#61582** | 在共享预算耗尽时阻止新的滚动工作启动 | 新请求、工具和自动轮次现在观察停止信号，当响应已消耗完预算时阻止新工作启动。 |
| **#61581** | 为滚动预算耗尽中断记录中性中断标记 | 因滚动预算耗尽而停止的轮次现在写入 `<turn_aborted>` 标记到历史，不将中断归因于用户。 |
| **#61580** | 将同步 MCP 钩子后置成本计入滚动预算 | 成功的同步 `PostModelRequest` MCP 钩子现在可在 `structuredContent` 中返回 `extra_codex_rollout_budget_units`，从滚动支出中扣除。 |
| **#61579** | 支持分数滚动预算和可配置上下文提醒 | 新增 `features.rollout_budget.limit_budget` 用于正有理数分数配额，同时保留 `limit_tokens` 兼容性；分数余额在提醒和完成中保留。 |
| **#61578** | 在启动工具工作前重新检查滚动预算 | 工具调用等待执行槽位、审批或生命周期回调后，现在重新检查预算耗尽状态，阻止在预算已耗尽后启动新工作。 |
| **#61577** | 在完成后添加响应处理和用量统计 | 调用方现在可以等待完成和同步后置钩子，使预算强制执行能够阻止已耗尽预算的响应启动工具。 |
| **#61562** | 统一采样和压缩场景下的 model 请求钩子生命周期 | `PreModelRequest`/`PostModelRequest` 钩子现在按每次采样或压缩尝试成对出现，配有独立的生命周期 ID 和取消报告；`thread_id` 和 `kind` 字段区分 `sampling` 和 `compaction`。 |
| **#61494** | 在特性开关背后描述每个环境的上下文和权限 | 新增默认禁用的 `per_environment_context` 开关，使拥有不同文件系统和网络权限的环境各自获得准确的上下文描述。 |
| **#61490** | 在导航就绪前保留当前 Cloud 任务 | Cloud 任务切换现在保留当前会话、草稿和回复流，直到替换任务完全加载，消除了恢复失败时的白屏闪烁。 |

---

## 5. 热门讨论

### Show and Tell

| # | 标题 | 摘要 |
|---|-------|------|
| **#52372** | **Selvedge：通过 MCP 在两个 Codex 会话间检索被否决的方案** | 一个 Python CLI 和 stdio MCP 服务器，记录编码决策背后的推理过程——包括被否决的方案——存入 SQLite，按函数或数据库条目建索引。后续会话可检索这些记录。 |
| **#38868** | **Codexless——让 ChatGPT 复用本地 Codex 能力，仅在必要时调用 Codex** | 一个独立的开源工作流工具，允许 ChatGPT 会话直接使用本地 Codex 支持的能力，仅在任务实际需要时才调用真正的 Codex Agent 轮次。 |
| **#49001** | **Context Attachment Manager：Codex 和 Claude 按需获取图片历史** | 一个本地插件，管理图片历史以防止长图片编辑任务中重复上传——作者动机是 44 MB 重复上传导致的持续重连问题。 |
| **#61585** | **Chatstone 的 Codex 端归档适配器：钩子唤醒不等于会话记录完成** | 一个商业会话归档项目的公开适配器（v0.2.3），将捕获与归档读取分离，处理了钩子唤醒事件与会话记录完成并非同一件事这一细微区别。 |
| **#61525** | **AppScreen：通过 MCP 让 Codex 为你设计 App Store 和 Google Play 截图** | 一个浏览器编辑器，配有远程 MCP 服务器，允许 Codex 生成 App Store 和 Google Play 截图，用户可实时观看进度。 |
| **#61472** | **Codex Pulse：Windows 上的配额节奏控制和本地用量分析（MIT）** | 一个 Windows 伴侣工具（MIT 授权，与 OpenAI 无关联），展示剩余配额、个人重置时间和节奏建议，可选角落徽章显示。 |
| **#61475** | **Ragmir：为 Codex 提供来自代码、PDF 和 Office 文件的引用项目上下文** | 一个开源（AGPL-3.0）检索层，索引项目代码、规格、PDF 和 Office 文件，通过单个 `npx rgr set` 命令连接到 Codex 提供引用上下文。 |

---

## 6. 功能需求趋势

交叉对比 issues 和 discussions 可以看出以下几个趋同的主题：

1. **多账户和工作区切换** — 票数最高的增强请求（#30684，37 👍）横跨所有界面（应用、CLI、IDE 扩展）。用户需要在不退出登录的情况下快速切换账户和工作区。
2. **滚动预算可见性和控制** — 本轮 PR 活动表明内部大力投入；社区的并行需求是面向用户的预算仪表板和按会话配置（分数预算已在 #61579 落地）。
3. **远程/跨设备会话一致性** — 多个 issues（#60778、#25589、#59537、#61459）暴露了 Codex 会话跨移动端 → 桌面端 → VM 时状态断裂或不一致，表明跨设备会话层需要更健壮的同步机制。
4. **钩子扩展性和安全策略** — #41979 请求故障关闭的 `PreToolUse` 钩子；相关需求包括更丰富的钩子上下文（#61587 已通过 `request_id`/`attempt_number` 交付）和按环境权限描述（#61494）。
5. **MCP 生态系统工具** — 社区自建工具如 Selvedge、Ragmir、AppScreen 和 Codex Pulse 都表明对更深层 MCP 集成、更完善的钩子生命周期 API 以及配额/用量遥测的需求旺盛。

---

## 7. 开发者痛点

以下问题在 issue 追踪器中反复出现：

- **Windows 平台回归问题占据 bug 队列主导地位。** 前五大问题中有三个是 Windows 专属的——Computer Use 浏览器检测（#51524）、云端会话恢复（#59855）和访问控制可见性（#60058）——表明 Windows 桌面版是最不稳定的执行环境。
- **含大量图片的会话导致严重性能下降。** #20805 和 #46761 都描述了 Base64 图片数据导致请求体积膨胀并触发反复重连。当前设计中看不出有缓存策略。
- **远程/移动客户端的会话和历史状态脆弱。** 重新启动后任务消失（#60778、#60799）、Android Remote 上显示过期会话（#61597）、iOS 上线程列表为空（#25589），都指向跨设备会话层的分页或同步 bug。
- **CLI TUI 键盘快捷键在平台间存在文档不一致或行为变更**（#48139），对依赖肌肉记忆的高级用户造成困扰。
- **安全/钩子系统阻断了合法工作。** Issue #60688 报告"每个提示、继续等操作都被某些安全机制阻止"，表明安全检查管道可能对有效的开发者工作流过度触发。

---

*速报结束。数据来源：`github.com/openai/codex` 于 2026-11-15 的活动记录。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire Gemini CLI Community Digest from English to Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure intact
2. Preserve URLs, issue/PR numbers, code, version tags, etc.
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output only the translation without any preamble or explanation

Let me translate section by section:

Title: "Gemini CLI Community Digest" → "Gemini CLI 社区动态"

Date: "November 15, 2026" → "2026年11月15日"

Section 1: "Today's Highlights" → "今日要闻"

Section 2: "Releases" → "版本发布"

Section 3: "Hot Issues" → "热门 issue"

Section 4: "Key PR Progress" → "重要 PR 进展"

Section 5: "Hot Discussions" → "热门讨论"

Section 6: "Feature Request Trends" → "功能需求趋势"

Section 7: "Developer Pain Points" → "开发者痛点"

Let me carefully translate the content while maintaining the technical accuracy and natural Chinese expression:

Key translations:
- "release" → "版本发布"
- "issue" → "issue" (keep as-is for technical context)
- "PR" → "PR"
- "subagent" → "子代理"
- "MAX_TURNS" → "MAX_TURNS" (keep as-is)
- "GOAL" → "GOAL" (keep as-is)
- "sandboxing" → "沙箱隔离"
- "token" → "token" or "令牌"
- "hot issues" → "热门 issue"
- "P1/P2/P3" → keep as-is
- "Size XS/S/M/L" → keep as-is
- "ACP mode" → "ACP 模式"
- "OAuth" → "OAuth"


- "YOLO mode" → "YOLO 模式"
- "settings.json" → "settings.json"
- "circular" → "循环引用"
- "esbuild" → "esbuild"
- "changelog" → "更新日志"
- "workflow" → "工作流"
- "telemetry" → "遥测数据"
- "Wayland" → "Wayland"

Now I'll translate the full content section by section.
</think>


# Gemini CLI 社区动态

## 2026年11月15日

---

### 1. 今日要闻

Gemini CLI 项目继续保持活跃的开发节奏，重点关注代理可靠性提升和安全加固。围绕子代理行为的 P1 级关键 bug——包括 MAX_TURNS 恢复失败和通用代理卡死问题——引发了社区的广泛讨论，分别获得了 13 条和 8 条评论。在 PR 方面，针对污染命令和 OAuth promise 缓存的安全改进正在推进审核，同时还有多项 ACP 模式增强功能正在开发中，包括并行工具执行和输出截断。

---

### 2. 版本发布

过去 24 小时内无新版本发布。最近的发布版本为 v0.45.2，其更新日志 PR（#27703）目前正在审核中。

---

### 3. 热门 issue

**#22323 — 子代理在 MAX_TURNS 后将 GOAL 报告为成功而非失败** *(P1 | 13 条评论)*
`codebase_investigator` 子代理在达到最大轮次限制但未完成分析时，仍错误地报告 `status: "success"` 且终止原因为 `"GOAL"`。这掩盖了关键失败，让用户对任务完成状态产生误判。
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

**#21409 — 通用代理无限卡死** *(P1 | 8 条评论)*
Gemini CLI 交由通用代理处理时，在简单操作（如创建文件夹）上会无限卡死。社区用户反映需要等待长达一小时才能取消。该问题可通过指示模型避免使用子代理来临时绕过。
[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

**#21983 — 浏览器子代理在 Wayland 上失败** *(P1 | 4 条评论)*
浏览器代理在 Wayland 环境下完全无法工作，立即以 GOAL 状态终止。这使得使用 Wayland 桌面环境的 Linux 用户无法使用浏览器自动化功能。
[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

**#22186 — get-shit-done 输出钩子导致崩溃** *(P1 | 3 条评论)*
get-shit-done 的输出钩子在最终用户摘要打印阶段会导致 Gemini CLI 崩溃，影响工作流完成可靠性。
[Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)

**#19873 — 基于模型 bash 亲和性的零依赖操作系统沙箱隔离** *(P2 | 9 条评论)*
一项大规模增强提案，利用 Gemini 3 的原生 bash 能力实现操作系统级沙箱隔离和意图路由，无需外部依赖。这可能从根本上改善安全态势，同时保持用户体验。
[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

**#21968 — Gemini 未能充分利用 skills 和子代理** *(P2 | 7 条评论)*
尽管具备相关能力，模型仍无法自主调用自定义 skills 和子代理。用户必须明确指示模型，这违背了基于 skill 扩展性的初衷。
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

**#22745 — 评估 AST 感知文件读取、搜索和映射** *(P2 | 7 条评论)*
追踪基于抽象语法树（AST）工具调查的 epic，旨在实现更精确的按方法边界读取和代码库导航。这可能显著降低 token 消耗并提高代码发现的准确性。
[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

**#22267 — 浏览器代理忽略 settings.json 覆盖** *(P2 | 5 条评论)*
浏览器代理完全无视 `settings.json` 中的配置覆盖，包括 `maxTurns` 等关键设置。用户无法按预期自定义浏览器行为。
[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

**#24246 — Gemini CLI 在工具数量超过 128 时遇到 400 错误** *(P2 | 3 条评论)*
拥有大量工具配置的用户在可用工具超过约 400 个时遇到 API 400 错误。代理缺乏管理工具可用性的智能作用域机制。
[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

**#22672 — 代理应阻止破坏性行为** *(P2 | 3 条评论)*
模型偶尔会使用不安全的命令如 `git reset --force`，而存在更安全的替代方案时仍这样做，在复杂 git 操作和数据库维护场景中尤为突出。
[Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

---

### 4. 重要 PR 进展

**#30196 — 阻止污染命令的始终允许规则** *(安全 | Size M)*
修复了一个关键安全漏洞：当用户对包含不可信标志或文件变更后构建命令的污染 shell 命令选择"始终允许"时，会错误地将规则保存到命令根级，使所有未来实例都获得批准。污染命令现在仅支持单次批准。
[PR #30196](https://github.com/google-gemini/gemini-cli/pull/30196)

**#30297 — 在 ACP 模式下截断大型 shell 和 MCP 工具输出** *(Size L)*
在 ACP（Agent Client Protocol）模式下，shell 命令和 MCP 工具的工具执行输出在转发给模型前会被截断。此前，大型输出（如海量日志、冗长的 MCP 响应）可能导致上下文膨胀和性能下降。
[PR #30297](https://github.com/google-gemini/gemini-cli/pull/30297)

**#30298 — 在 ACP 模式下并行执行独立工具调用** *(Size L)*
ACP 模式现在并行执行独立且只读的工具调用，而非顺序执行。这使 ACP 行为与标准 CLI 调度器的批量并行操作保持一致，提升了吞吐量。
[PR #30298](https://github.com/google-gemini/gemini-cli/pull/30298)

**#30296 — 从缓存中驱逐被拒绝的 OAuth 客户端初始化 promise** *(安全 | Size M)*
防止失败的 OAuth 初始化尝试污染进程生命周期内的缓存。此前，`getOauthClient()` 无条件存储 `initOauthClient()` promise，导致被拒绝的 promise 永久驻留。
[PR #30296](https://github.com/google-gemini/gemini-cli/pull/30296)

**#30157 — 仅在真正的循环引用处替换为 [Circular]** *(Size M)*
修复了 `safeJsonStringify`，使其仅在检测到实际循环引用时才替换为 `"[Circular]"`，而非任何出现两次的对象。这解决了由 OpenTelemetry 数据点间共享数组导致的遥测数据导出问题。
[PR #30157](https://github.com/google-gemini/gemini-cli/pull/30157)

**#30207 — esbuild 前清空 bundle/ 以移除陈旧代码块** *(P0 | Size XS)*
解决了每夜构建失败（413 Request Entity Too Large）问题。陈旧构建产物导致 tarball 膨胀至 25.2 MB，其中包含约 70 MB 来自之前构建的残余 JavaScript 文件。
[PR #30207](https://github.com/google-gemini/gemini-cli/pull/30207)

**#30194 — 修复 `gemini models` 遗漏 `gemini-3.8-flash`** *(Size XS)*
修正了 `gemini models` 命令，使其能正确列出 `gemini-3.8-flash`。该模型在 v0.67.0 的 `/model manage` 中可用，但列表输出中缺失。
[PR #30194](https://github.com/google-gemini/gemini-cli/pull/30194)

**#30292 — 保留过大的后台日志尾部并标记截断读取** *(Size M)*
修复了 `read_background_output` 在从字节 0 之后开始读取时丢弃 64KB 读取窗口第一行的 bug，导致超过 64KB 的单行输出整个丢失。
[PR #30292](https://github.com/google-gemini/gemini-cli/pull/30292)

**#30295 — 在 YOLO 模式下保留 ASK_USER 决策** *(Size M)*
在 YOLO 模式下，当 shell 命令解析失败时，`PolicyEngine.checkShellCommand()` 现在保留用户的 `ASK_USER` 决策，而非无条件返回 `ALLOW`。
[PR #30295](https://github.com/google-gemini/gemini-cli/pull/30295)

**#30301 — 同步 ACP 标志行与 CLI 参考文档中的实际标志** *(Size L)*
更新文档中的 CLI 选项表，反映自 ACP 模式替代 Zed 集成以来实际注册的标志，移除已过时的 `--experimental-zed-integration` 标志。
[PR #30301](https://github.com/google-gemini/gemini-cli/pull/30301)

---

### 5. 热门讨论

*本次数据未提供讨论内容。*

---

### 6. 功能需求趋势

通过对活跃 issue 和 PR 的分析，揭示了以下高需求功能方向：

| 主题 | 描述 | 依据 |
|-------|-------------|----------|
| **AST 感知工具** | 利用抽象语法树解析进行精确的代码读取、搜索和代码库映射，以减少 token 膨胀并提高精度 | Issue #22745, #22746, #22747, #19561 |
| **子代理编排** | 改进自主子代理调用、轨迹可见性、共享内存和并行协作能力 | Issue #21968, #22598, #20195, #18287 |
| **浏览器代理健壮性** | 增强会话接管、锁恢复、settings.json 支持和 Wayland 兼容性 | Issue #22267, #22232, #21983 |
| **安全加固** | 实现操作系统沙箱隔离、阻止污染命令规则升级、改进 OAuth 失败处理 | PR #30196, Issue #19873, PR #30296 |
| **ACP 模式一致性** | 使 ACP（Agent Client Protocol）功能与标准 CLI 保持一致，包括并行执行和输出管理 | PRs #30297, #30298 |
| **Token 效率** | "精准提取"逻辑用于精确读取、大工具输出截断和上下文窗口优化 | Issue #19561, #21000, PR #30297 |
| **代理自感知** | 改进模型对自身标志、热键和执行机制的理解 | Issue #21432 |

---

### 7. 开发者痛点

以下问题在 issue 追踪器中反复出现：

1. **代理卡死和超时**：通用代理在简单操作上无限卡死，子代理 MAX_TURNS 检测不可靠。开发者丢失工作进度，必须守在长时间运行的会话旁。

2. **配置不一致**：浏览器代理完全忽略 `settings.json` 覆盖，而上下文管理设置在核心配置中被静默丢弃。用户无法信任配置会被正确应用。

3. **工具规模限制**：工具数量超过约 128 个时遇到 400 API 错误，迫使开发者手动对可用工具进行作用域限制和限制，破坏了预期的可扩展性。

4. **浏览器自动化脆弱**：浏览器子代理在 Wayland 上失败以及会话锁定/持久化问题，使 Linux 开发者的自动化浏览器工作流不可靠。

5. **缺乏防护栏的破坏性行为**：模型使用不安全命令（`git reset --force` 等）且没有适当的警告，在复杂操作中危及开发者数据。

6. **构建产物堆积**：陈旧构建代码块导致每夜构建失败，表明清理流程不足，浪费 CI 资源并延迟部署。

7. **OAuth 缓存问题**：失败的 OAuth 初始化永久污染客户端缓存，导致进程重启前持续出现认证失败。

---

*本动态基于 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 的 GitHub 数据生成 | 2026年11月15日*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Community Digest from English to Simplified Chinese. I need to:

1. Translate the content while maintaining the exact Markdown structure
2. Keep URLs, link targets, code spans, numbers, dates, project names, repository slugs, issue numbers, version tags as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

**Title:**
GitHub Copilot CLI 社区日报 → Community Digest might be better as 社区速报 or 社区日报

**Date:** November 15, 2026 → 2026年11月15日

**Section 1: Today's Highlights**
- "critical stability issues" → 关键稳定性问题
- "out-of-memory crash" → 内存溢出崩溃
- "context overhead regression" → 上下文开销回退
- "~20K extra tokens" → ~20K 额外令牌
- "Platform compatibility concerns are rising" → 平台兼容性关注度上升
- "multiple Wayland clipboard issues reaching resolution" → 多个 Wayland 剪贴板问题已获解决
- "Fusion tier policy resolution bug" → Fusion 策略解析缺陷
- "silent failure" → 静默失败

**Section 2: Releases**
- "No new releases" → 无新版本发布

**Section 3: Hot Issues**

Critical Stability:
- "session" → 会话
- "OOM crash" → 内存溢出崩溃
- "long interactive session" → 长时间交互式会话
- "background agents becoming inaccessible" → 后台代理变得不可访问
- "after resume" → 恢复后
- "workflow continuity" → 工作流连续性
- "Context overhead regression" → 上下文开销回退


- "Usable working room" → 可用工作空间
- "auto-compaction" → 自动压缩
- "reduced effective context window" → 有效上下文窗口缩小

Platform & Compatibility:
- "clipboard" → 剪贴板
- "Wayland" → Wayland (keep as-is)
- "GNOME/Mutter" → GNOME/Mutter (keep as-is)
- "xclip fallback" → xclip 回退机制
- "WAYLAND_DISPLAY detection" → WAYLAND_DISPLAY 检测
- "Windows codepage 936" → Windows 代码页 936
- "Chinese/Asian locale" → 中

文/亚语区域
- "backward compatibility" → 向后兼容性

Agent & Model Behavior:
- "Fusion tier" → Fusion 级别
- "silently resolves to" → 静默降级为
- "resource allocation" → 资源配置
- "billing/expectation mismatch" → 计费/预期不匹配
- "default model selection" → 默认模型选择
- "model turns" → 模型调用次数
- "sleep/poll loops" → 轮询循环
- "event-based notification" → 事件驱动通知机制
- "background jobs" → 后台任务
- "streaming" → 流式响应
- "ask_user" → ask_user（保持原样）
- "multi-part responses" → 多段响应

Integration & MCP:
- "MCP" → MCP（保持原样）
- "OAuth" → OAuth（保持原样）
- "Entra" → Entra（保持原意）
- "native broker" → 本地代理
- "Azure DevOps" → Azure DevOps（保持原样）
- "nested agent workflows" → 嵌套代理工作流

Developer Experience:
- "reasoning_text" → reasoning_text（保持原样）
- "thinking mode" → 思考模式
- "custom providers" → 自定义提供者
- "custom OpenAI-compatible providers" → 自定义 OpenAI 兼容提供者
- "responses API" → responses API（保持原样）
- "structured 403 error" → 结构化 403 错误
- "generic auth failure" → 通用认证失败
- "misleading error messages" → 误导性错误信息

Feature Request Trends:
- "MCP Server Lifecycle Hooks" → MCP 服务生命周期钩子
- "startup completion notification" → 启动完成通知
- "tool cache management" → 工具缓存管理
- "Platform Compatibility Expansion" → 平台兼容性扩展
- "Agent Memory & State Persistence" → 代理内存与状态持久化
- "Session resume" → 会话恢复
- "keychain persistence" → 钥匙串持久化
- "Custom Provider Robustness" → 自定义提供者健壮性
- "API compatibility & error handling" → API 兼容性及错误处理
- "Context Efficiency" → 上下文效率
- "compaction timing" → 压缩时序
- "OAuth Flow Improvements" → OAuth 流程改进

Developer Pain Points:
- "Memory exhaustion" → 内存耗尽
- "background agent context" → 后台代理上下文
- "MCP tool cache growth" → MCP 工具缓存增长
- "CI/eval scenarios" → CI/评估场景
- "Clipboard operations" → 剪贴板操作
- "Linux/Wayland" → Linux/Wayland（保持原样）
- "GNOME/Mutter" → GNOME/Mutter（保持原样）
- "broader Linux userbase" → 更广泛的 Linux 用户群体
- "Silent failures" → 静默失败
- "configuration and policy resolution" → 配置与策略解析
- "Keychain prompts" → 钥匙串提示
- "Always Allow" → 始终允许
- "Context window inefficiency" → 上下文窗口效率问题
- "LLM costs and latency" → LLM 成本与延迟
- "Background job polling" → 后台任务轮询

I'm noting several critical performance and reliability challenges across the system. Memory management during extended sessions is causing crashes, with background agent context lost when OOM occurs and MCP tool caches accumulating in CI environments. Clipboard operations remain problematic across Linux/Wayland setups, particularly with GNOME/Mutter where xclip fallback mechanisms are incorrectly gated. Configuration handling shows silent failures where Fusion tier downgrades to standard without user notification, and subagent defaults aren't validated against plan tiers. OAuth authentication introduces friction through native broker blocking essential operations and keychain prompts reappearing despite "Always Allow" selection. Context window inefficiency manifests as a 20K token regression causing faster compaction triggers that increase both LLM costs and response latency. Background job polling inefficiency wastes model turns on sleep/poll loops without streaming or event-based notification mechanisms available.
</think>


# GitHub Copilot CLI 社区日报

**日期：** 2026年11月15日
**仓库：** github.com/github/copilot-cli

---

## 一、今日要点

社区正在积极处理多项关键稳定性问题，包括长时间交互式会话期间的内存溢出崩溃（#5435）以及显著增加约20K额外令牌的上下文开销回退（#5450）。平台兼容性关注度正在上升，新版 macOS 兼容性请求（#5461）出现，多个 Wayland 剪贴板问题已获解决。Fusion 策略解析缺陷（#5457）是一个值得注意的静默失败，可能影响计费及资源配置预期。

---

## 二、版本发布

**过去24小时内无新版本发布。**

---

## 三、热点 Issue

### 🔴 关键稳定性

| # | 标题 | 领域 | 状态 | 重要性说明 |
|---|------|------|------|------------|
| [#5435](https://github.com/github/copilot-cli/issues/5435) | 1.0.109 版本长时间交互式会话中反复内存溢出崩溃 | sessions | OPEN | 用户报告扩展会话期间反复崩溃，恢复后后台代理变得不可访问——直接影响开发者工作流连续性 |
| [#5450](https://github.com/github/copilot-cli/issues/5450) | 上下文开销回退：1.0.106 版本后增加了约20K额外令牌 | context-memory | OPEN | 可用工作空间从约112K令牌降至约93K，导致自动压缩更频繁触发，有效上下文窗口缩小 |

### 🟡 平台与兼容性

| # | 标题 | 领域 | 状态 | 重要性说明 |
|---|------|------|------|------------|
| [#4615](https://github.com/github/copilot-cli/issues/4615) | /copy 在 GNOME/Mutter Wayland 上失败（xclip 回退逻辑错误门控） | tools | CLOSED | Linux Wayland 用户无法复制到剪贴板——现已通过正确的 WAYLAND_DISPLAY 检测修复 |
| [#4391](https://github.com/github/copilot-cli/issues/4391) | 在 Windows 代码页936上复制文本会清屏 | platform-windows | CLOSED | 中文/亚语区域 Windows 用户的严重体验问题——复制操作时屏幕被重置 |
| [#5461](https://github.com/github/copilot-cli/issues/5461) | 请求兼容 macOS 12.7.6 的版本 | triage | OPEN | 旧版 macOS 用户被最新功能拒之门外；社区寻求向后兼容性支持 |

### 🟠 代理与模型行为

| # | 标题 | 领域 | 状态 | 重要性说明 |
|---|------|------|------|------------|
| [#5457](https://github.com/github/copilot-cli/issues/5457) | Fusion 级别"high"静默降级为"standard"策略 | tools | OPEN | 静默策略降级影响资源配置，无用户警告——可能导致计费/预期不匹配 |
| [#5456](https://github.com/github/copilot-cli/issues/5456) | 子代理模型默认值包含免费计划不可用的模型 | models | OPEN | 免费计划用户因默认模型选择立即遇到错误 |
| [#5459](https://github.com/github/copilot-cli/issues/5459) | 代理在 `sleep N; check` 轮询时消耗模型调用次数 | agents | OPEN | 后台作业期间资源使用效率低下——每次轮询都是一次单独重新读取上下文模型调用 |
| [#5460](https://github.com/github/copilot-cli/issues/5460) | ask_user: 写入调用响应的文本未显示 | triage | OPEN | 请求用户输入时代理解释上下文丢失——多段响应时体验混乱 |

### 🟢 集成与 MCP

| # | 标题 | 领域 | 状态 | 重要性说明 |
|---|------|------|------|------------|
| [#5452](https://github.com/github/copilot-cli/issues/5452) | Entra 的 MCP OAuth 强制使用本地代理阻止粘贴操作 | authentication, mcp | OPEN | Azure DevOps MCP 认证因 OneAuth 窗口阻止剪贴板操作而无法使用 |
| [#5437](https://github.com/github/copilot-cli/issues/5437) | 委托任务子进程无法认证 HTTP-OAuth MCP 服务器 | agents, mcp | OPEN | 嵌套代理工作流在使用 OAuth MCP 服务器时失败——限制了复杂自动化场景 |

### 🔵 开发者体验

| # | 标题 | 领域 | 状态 | 重要性说明 |
|---|------|------|------|------------|
| [#5145](https://github.com/github/copilot-cli/issues/5145) | 使用自定义提供商的思考模式下 `reasoning_text` 返回400 | models, tools | OPEN | 使用 `responses` API 的自定义 OpenAI 兼容提供商在后台 shell 退出后失败 |
| [#5436](https://github.com/github/copilot-cli/issues/5436) | CLI 将结构化403错误掩盖为通用认证失败 | models | OPEN | 使用自定义提供商时错误信息具有误导性——掩盖了实际权限问题 |

---

## 四、关键 PR 进展

**过去24小时内无 PR 更新。**

---

## 五、热点讨论

*本期未提供讨论数据。*

---

## 六、功能请求趋势

基于 issue 分析，社区正在请求：

| 趋势 | 频率 | 代表性 Issue |
|------|------|-------------|
| **MCP 服务生命周期钩子** | 高 | #5458（启动完成通知）、#5446（工具缓存管理） |
| **平台兼容性扩展** | 高 | #5461（旧版 macOS 支持）、多个 Wayland 修复 |
| **代理内存与状态持久化** | 高 | #5435（内存溢出）、#4489（会话恢复）、#5434（钥匙串持久化） |
| **自定义提供者健壮性** | 中 | #5145、#5436、#5457（API 兼容性及错误处理） |
| **上下文效率** | 中 | #5450（开销回退）、#3915（压缩时序） |
| **OAuth 流程改进** | 中 | #5452（本地代理）、#5434（钥匙串）、#5437（委托认证） |

---

## 七、开发者痛点

### 主要反馈问题

1. **扩展会话期间的内存耗尽**
   - 长时间运行的交互式会话因内存溢出崩溃，丢失后台代理上下文
   - MCP 工具缓存在 CI/评估场景中增长，加剧内存问题

2. **Linux/Wayland 剪贴板操作故障**
   - 多份报告称 `/copy` 在 GNOME/Mutter 等 Wayland 合成器上失败
   - xclip 回退逻辑错误门控，影响更广泛的 Linux 用户群体

3. **配置和策略解析中的静默失败**
   - Fusion 级别"high"在无警告情况下降级为"standard"
   - 子代理默认模型未根据用户计划层级验证

4. **OAuth 认证摩擦**
   - Microsoft 本地代理阻止基本操作（复制/粘贴）
   - 尽管选择"始终允许"，钥匙串提示仍重复出现

5. **上下文窗口效率低下**
   - 20K 令牌回退减少有效工作空间
   - 压缩触发更频繁，增加 LLM 成本和延迟

6. **后台任务轮询效率低下**
   - 代理在后台任务期间消耗模型调用次数进行轮询
   - 无可用的流式或事件驱动通知机制

---

*日报结束。数据更新时间：2026年11月15日*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate the content while maintaining the exact Markdown structure
2. Use natural technical Chinese, not literal word-for-word translation
3. Keep URLs, issue numbers, code references, etc. as-is
4. Preserve all formatting elements

Let me translate section by section carefully.

**Section 1: Today's Highlights**
- "PTY daemon zombie process leaks" → PTY daemon 僵尸进程泄漏
- "prompt history scope setting" → 提示词历史范围设置
- "prompt history scope setting" was merged → 合并了"提示词历史范围设置"功能

**Section 2: Releases**
- straightforward translation

**Section 3: Hot Issues**
- Need to translate the table content
- Technical terms: "Providers" → 提供商, "Bug" → 缺陷, "Feature Request" → 功能请求, "Feature" → 功能
- Keep all issue titles, category names, and numbers as-is
- Translate the descriptions naturally

**Section 4: Key PR Progress**
- Translate PR titles and descriptions
- Keep PR numbers and links

**Section 5: Feature Request Trends**
- Translate theme names and descriptions
- Keep all references as-is

**Section 6: Developer Pain Points**
- Translate each pain point description

Let me carefully translate this now:
</think>


# OpenCode 社区日报 — 2026-11-15

---

## 1. 今日要闻

过去 24 小时，OpenCode 社区围绕 **v2.3.0 引入的 PTY daemon 僵尸进程泄漏**问题展开了大量讨论，Issue #63817 和 #63976 均确认该版本在 Linux 上存在无限制的进程增长问题。功能方面，新的实验性 **client key-value store API** 已合并（PR #63998），同时呼声很高的 **提示词历史范围设置** 也已合并（PR #55261），支持按会话独立回溯命令历史。多个 TUI 界面优化和 i18n 改进也在 review 阶段推进中。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门 Issue

| # | Issue | 类别 | 重要性 | 反应 |
|---|-------|------|--------|------|
| [#26602](https://github.com/anomalyco/opencode/issues/26602) | Desktop 5-minute headers timeout with slow local providers | **缺陷 / 提供商** | Desktop 在使用本地模型（Ollama 等）时，即使设置了 `"timeout": false`，OpenAI 兼容请求仍会在恰好 5 分钟后被中止，影响硬件较慢的本地模型用户。 | 👍 2 · 💬 26 |
| [#52154](https://github.com/anomalyco/opencode/issues/52154) | Message history isolation per session | **功能请求** | 拥有多个并发会话的用户反映，向上箭头调取的是**上一个**会话的提示词而非**当前**会话。高频用户的强烈需求。 | 👍 7 · 💬 11 |
| [#63817](https://github.com/anomalyco/opencode/issues/63817) | PTY shell commands leave zombies on Linux (v2.3.0) | **缺陷 / PTY** | 升级到 2.3.0 后，用户发现每个结束的 shell 命令都变成了 `<defunct>` 僵尸子进程，由 `opencode-pty daemon` 持有，且随 daemon 运行时间无限增长。 | 👍 1 · 💬 9 |
| [#37844](https://github.com/anomalyco/opencode/issues/37844) | Cached locations multiply MCP subprocesses | **缺陷 / 核心** | 一个托管服务会为每个缓存的 Location 保留一整套 MCP 子进程集，导致 10+ 个 MCP 进程组，每个约 5 个子进程。长时间运行的实例存在资源泄漏。 | 👍 1 · 💬 6 |
| [#59794](https://github.com/anomalyco/opencode/issues/59794) | All history images re-sent on every request | **缺陷 / 会话** | OpenCode 会在每次模型请求时重新发送所有曾经粘贴或 `Read` 返回的图片。在有单次提示词图片限制的后端（如 vLLM）上，会话会永久失效。 | 👍 0 · 💬 5 |
| [#59293](https://github.com/anomalyco/opencode/issues/59293) | Subagent sessionID continuation always fails | **缺陷 / 子代理** | `subagent` 工具的 `sessionID` 续接功能损坏——所有传入的 `sessionID` 都解析为 `"ses"`，导致无法继续现有子代理对话。 | 👍 0 · 💬 5 |
| [#63935](https://github.com/anomalyco/opencode/issues/63935) | Prompt cache lost when only reasoning_effort changes | **缺陷 / 推理** | 两请求仅在 `reasoning_effort` 上不同时，约 33% 的情况下无法复用 prompt 缓存，导致动态调整推理强度的代理客户端出现问题。 | 👍 0 · 💬 5 |
| [#63921](https://github.com/anomalyco/opencode/issues/63921) | LM Studio drops server-reported reasoning capabilities | **功能 / 提供商** | LM Studio 的 API 会报告各模型的推理能力，但 OpenCode 丢弃了这些信息，需要手写各模型的配置才能启用 thinking 变体。 | 👍 0 · 💬 4 |
| [#53921](https://github.com/anomalyco/opencode/issues/53921) | Ephemeral mode without local session persistence | **功能请求** | 用户需要一个注重隐私的模式——会话对话不写入磁盘，适用于敏感工作或临时工作流。 | 👍 4 · 💬 4 |
| [#63956](https://github.com/anomalyco/opencode/issues/63956) | Gemini model fails on directory wake before async /models sync | **缺陷 / 提供商** | 在 macOS 上，GitHub Copilot Gemini 模型在目录从驱逐缓存恢复后，立即以 `unsupported_api_for_model` 错误失败，原因是异步模型同步尚未完成。 | 👍 0 · 💬 4 |

---

## 4. 重要 PR 进展

| PR | 标题 | 影响 |
|----|------|------|
| [#64005](https://github.com/anomalyco/opencode/pull/64005) | `fix(tui): resolve hidden agents in prompt footer` | 修复通过斜杠命令切换到隐藏 agent 后 TUI 提示词页脚卡住的问题。 |
| [#63998](https://github.com/anomalyco/opencode/pull/63998) | `feat(server): add experimental client key-value store` | 新增 `GET /api/event?experimental.kv=` API，支持订阅 `app` 和 `prefs` 命名空间之间的键值状态变更。 |
| [#55261](https://github.com/anomalyco/opencode/pull/55261) | `feat(tui): add prompt history scope setting` | 新增 `prompt.history_scope` 配置项（`global` vs `session`）—— 解决了按会话隔离历史记录的请求。 |
| [#63757](https://github.com/anomalyco/opencode/pull/63757) | `fix(i18n): correct and complete Simplified Chinese desktop copy` | 修正简体中文 `zh` locale 中误译的值，补全安全、会话和设置 UI 中的高频文案。 |
| [#62504](https://github.com/anomalyco/opencode/pull/62504) | `fix(core): commit a staged revert before a goal command queues work` | 确保新的工作在被接纳前，/undo 暂存的回退已提交，修复了 goal 命令中的竞态条件。 |
| [#64000](https://github.com/anomalyco/opencode/pull/64000) | `fix(core): keep grep results when a match is not valid UTF-8` | 通过处理 base64 `bytes` 字段而非强制要求 `text`，防止 ripgrep 在非 UTF-8 文件上崩溃。 |
| [#55528](https://github.com/anomalyco/opencode/pull/55528) | `refactor(browser): stream proxy traffic over binary WebSockets` | 远程连接速度提升约 18 倍 — 在 140ms RTT 条件下，6 MiB 图片传输从约 70s 降至约 4s。 |
| [#63989](https://github.com/anomalyco/opencode/pull/63989) | `Opentui 0.9.0` | 向 OpenTUI 开放插件 markdown 代码块渲染器（对使用 `token.raw` 或 `p` 的插件而言是 breaking change）；更新 peer 依赖。 |
| [#63986](https://github.com/anomalyco/opencode/pull/63986) | `feat(tui): show tool elapsed time in V2 clients` | 在 V2 TUI 中新增按工具计时展示，回应了长期以来的可观测性需求。 |
| [#63542](https://github.com/anomalyco/opencode/pull/63542) | `fix(ssh): recover when the remote service port is taken` | SSH 重连时不再因远程服务端口被占用而报 "Could not establish the SSH connection" 错误。 |

---

## 5. 功能请求趋势分析

对全部 issue 和 PR 语料进行分析后，以下主题占据主导：

| 主题 | 描述 | 证据 |
|------|------|------|
| **会话与历史管理** | 提示词按会话隔离、临时会话、会话图片裁剪、undo/回退优化 | #52154, #53921, #59794, #62504 |
| **子代理与插件架构** | 无完成报告的子会话控制、后台子代理唤醒抑制、sessionID 续接 | #63786, #63894, #59293 |
| **TUI/CLI 打磨** | TUI 国际化、硬件光标渲染、GNOME Terminal 主题色恢复、单词内换行、工具耗时显示 | #37216, #63971, #63977, #59778, #63986 |
| **提供商发现与推理** | LM Studio 推理能力、Gemini 模型同步时机、prompt 缓存复用、免费层速率限制行为 | #63921, #63956, #63935, #63931 |
| **PTY 与进程管理** | PTY daemon 僵尸进程泄漏、MCP 子进程倍增 | #63817, #63976, #37844 |
| **跨平台与移动端** | 桌面/CLI 启动会话时推送 iOS 通知、WSL 快捷键、SSH 版本兼容性 | #63992, #63947, #63988 |
| **生态与集成** | 新提供商（EVREN LLM）、Crusoe/Lizard/Sikemux/reasoning-router 文档 | #62967, #55877, #56040, #55522 |

---

## 6. 开发者痛点

过去 24 小时最集中的困扰：

1. **PTY Daemon 僵尸进程泄漏（v2.3.0）** — 多份独立报告确认，升级到 2.3.0 后每个 shell 命令都会变成无法回收的僵尸进程。这是 **2.2.7 以来的回归问题**，被视为关键稳定性缺陷。

2. **按会话隔离的提示词历史** — 无法仅从**当前**会话回溯提示词，迫使开发者手动记录某提示词属于哪个会话。对于多会话高级用户而言，这是高频使用场景的 UX 缺口。

3. **历史图片堆积导致会话失效** — 在有速率限制的后端（`limit-mm-per-prompt` 的 vLLM 等）上，图片持续累积而不被清理，最终使会话永久不可用。

4. **子代理 Session 续接功能失效** — `subagent` 工具中的 `sessionID` 参数被静默忽略，导致无法脚本化地继续子代理工作流。

5. **TUI 内硬编码英文字符串** — TUI 包完全缺乏 i18n 支持，而 desktop 和 CLI 包已支持 17+ 语言，为非英语终端用户带来不一致的体验。

6. **MCP 子进程倍增** — 缓存的 Location 导致 MCP 子进程重复复制，在长时间运行的 daemon 实例上引发资源耗尽。

---

*数据来源：GitHub · anomalyco/opencode · 2026-11-15*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the English Pi community digest into Simplified Chinese. I need to translate it while preserving the structure and keeping technical terms, URLs, and identifiers in their original form.

Let me translate this carefully:

---

# Pi 社区速报 — 2026-11-15

## 今日要点

2026-11-15 日 Pi 社区活跃度显著，共 **合并 4 个 PR**，带来了多项体验优化，包括可配置的工具输出限制和新的 Docker 开发模板。值得关注的是，**P0 级别的竞态条件 bug**（#11950）被标出——同一消息中的 bash 和 read 操作会并发执行，可能导致读取到不完整或过时的文件内容。多项 MCP、Copilot 和会话管理问题已解决或仍在积极讨论中。

---

## 版本发布

**过去 24 小时内无新版本发布。** 最新稳定版仍为 **Pi 1.5.2**（本周期前已发布）。

---

## 热门 Issue

1. **[#11950](https://github.com/earendil-works/pi/issues/11950) — [bug, prio:p0] 同一消息中的工具调用与 bash 并发执行** *(OPEN)*
   - **影响程度：** 竞态条件导致 `read` 操作在前置 `bash` 命令完成前就执行，造成读取到不完整的构建日志或缺失文件。这严重威胁了 agent 工作流的可靠性。
   - **社区反馈：** 6 条评论；已标记为 P0 优先级。所有依赖文件依赖的多工具消息用户均受影响。

2. **[#10654](https://github.com/earendil-works/pi/issues/10654) — [bug, mcp] transport 在环境变量展开前就已完成解析** *(OPEN)*
   - **影响程度：** 包含 `${MY_VAR}` 等环境变量的 MCP server URL 无法正确解析，导致容器化或基于环境变量的部署方案失效。
   - **社区反馈：** 5 条评论；用户要求在 headers、env 值和 URL 间保持一致的处理逻辑。

3. **[#11006](https://github.com/earendil-works/pi/issues/11006) — 企业管理员启用的 Copilot 模型重启后消失** *(OPEN)*
   - **影响程度：** 企业管理员启用新模型后，这些模型在 Pi 的模型选择器中找不到。由于 OAuth 凭证缓存，凭证过期前不会刷新。
   - **社区反馈：** 4 条评论；依赖集中式模型管理的组织部署受到影响。

4. **[#11226](https://github.com/earendil-works/pi/issues/11226) — [bug] Codemode 脚本顶层声明 `tools` 变量后无法运行** *(OPEN)*
   - **影响程度：** 脚本中声明 `const tools = ...` 后无法执行，可能是保留变量名冲突。用户从 Claude Code 迁移过来时会遇到这种写法。
   - **社区反馈：** 3 条评论；用户已提交潜在修复的 PR。

5. **[#12140](https://github.com/earendil-works/pi/issues/12140) — 无法从 models.json 声明 classifier 模型** *(CLOSED)*
   - **影响程度：** 自定义模型中带有 `api: "typesafe-system-one"` 的配置被错误注册为"chat"模型而非分类器，破坏了分类工作流。
   - **解决方案：** 已关闭，提供的数据中未记录修复详情。

6. **[#12154](https://github.com/earendil-works/pi/issues/12154) — 超过 ~120k 条目的会话无法加载：RangeError** *(CLOSED)*
   - **影响程度：** 长时间运行的会话在重新构建上下文时触发 `Maximum call stack size exceeded`，即使使用 `--ne` 标志也会崩溃。阻止了扩展会话的使用。
   - **解决方案：** 已关闭，提供的数据中未记录修复详情。

7. **[#12169](https://github.com/earendil-works/pi/issues/12169) — openai-completions 在重试前丢失 SSE 错误码** *(CLOSED)*
   - **影响程度：** HTTP 200 响应中包含 `code: 503` 的错误对象无法触发重试机制，导致瞬时故障恢复失败。
   - **解决方案：** 已关闭，提供的数据中未记录修复详情。

8. **[#12180](https://github.com/earendil-works/pi/issues/12180) — Pi 在 OpenAI 策略违规时不自动重试** *(CLOSED)*
   - **影响程度：** 策略违规导致请求直接失败而非自动重试，用户需要手动干预"continue"。
   - **解决方案：** 已关闭；1 条评论。

9. **[#12101](https://github.com/earendil-works/pi/issues/12101) — 为 OpenAI 兼容指令消息将 `developer` 改为 opt-in** *(OPEN)*
   - **影响程度：** `developer` 角色在某些 OpenAI 兼容端点上会触发 HTTP 400 错误，改用 `system` 可解决。这影响了 Groq 等提供商。
   - **社区反馈：** 2 条评论；实时复现已确认问题。

10. **[#12165](https://github.com/earendil-works/pi/issues/12165) — searchTools() 每次调用返回 36KB** *(CLOSED)*
    - **影响程度：** 测量显示 73 次 `searchTools` 调用共消耗 950KB 上下文（占长会话的 25%），超过所有文件读取的总和。
    - **解决方案：** 已关闭；指出显著的上下文膨胀优化机会。

---

## 重要 PR 进展

1. **[#12178](https://github.com/earendil-works/pi/pull/12178) — feat(coding-agent): 为 `ctx.ui.select` 添加 `description` 选项** *(CLOSED)*
   - 为 `ctx.ui.select()` 新增 `description` 参数，丰富多选提示。`ExtensionSelectorComponent` 已支持描述但未通过 API 暴露。

2. **[#12163](https://github.com/earendil-works/pi/pull/12163) — 添加 toolOutput.maxBytes 和 toolOutput.maxLines 设置** *(CLOSED)*
   - 引入可配置的工具输出限制（默认：51200 字节 / 2000 行）。Bash 和 read 在 temp 文件中保留完整输出，同时向模型展示摘要。

3. **[#12110](https://github.com/earendil-works/pi/pull/12110) — fix(ai): 为 GitHub Copilot 发送 reasoning_effort 并读取 reasoning tokens** *(CLOSED, inprogress)*
   - 修复 Copilot 目录硬编码 `supportsReasoningEffort: false` 于 Gemini 和 Kimi 模型的问题。现在为 `gemini-4-argon`、`gemini-3.8-flash` 和 `gemini-4-carbon` 正确发送 thinking 级别。

4. **[#12162](https://github.com/earendil-works/pi/pull/12162) — feat(coder): 添加克隆此 repo 的 Docker 模板** *(CLOSED)*
   - 新增 Docker workspace 模板，克隆 Pi repo 并在 code-server 中打开，简化开发环境配置流程。

---

## 热门讨论

### 想法 / 功能需求

- **[#12168](https://github.com/earendil-works/pi/discussions/12168) — 能加上 Mistral 支持吗？** *(通用)*
  - 用户请求原生 Mistral provider 支持，而非依赖 OpenAI 兼容 API 配置。1 👍，1 条评论。

### 展示与分享

- **[#12161](https://github.com/earendil-works/pi/discussions/12161) — 展示与分享：claude-bulkhead 扩展** *(通用)*
  - 社区扩展 `claude-bulkhead` v0.5.0 现已支持 Pi。通过 `PreToolUse` hooks 阻止危险命令（如在空 `$VAR` 上执行 `rm -rf`、不安全的删除、跨会话 `pkill`）。1 👍，0 条评论。

---

## 功能需求趋势

基于过去 24 小时的 issue 和讨论，社区主要关注：

| 趋势 | 频率 | 案例 |
|------|------|------|
| **增强的模型提供商支持** | 高 | 原生 Mistral provider、Copilot Enterprise 可靠性 |
| **改进的错误处理和重试逻辑** | 高 | SSE 错误分类、策略违规重试 |
| **MCP 增强** | 中 | transport URL 中的环境变量展开 |
| **UI/UX 改进** | 中 | 选择器描述、macOS 全屏 Cmd+C、命令历史 |
| **上下文优化** | 中 | 减少 searchTools() 载荷大小 |
| **会话持久性** | 中 | 大型会话处理、压缩恢复能力 |
| **工具输出控制** | 中低 | 可配置 maxBytes/maxLines（已发布）|

---

## 开发者痛点

1. **并发与竞态条件** — P0 issue（#11950）揭示了依赖操作乱序执行的工作流可靠性根本问题。

2. **上下文膨胀** — `searchTools()` 消耗会话上下文的 25%，说明上下文窗口效率仍面临压力。

3. **大规模会话稳定性** — 超过 120k 条目的会话因栈溢出崩溃，阻止了高级用户的使用。

4. **提供商特定 API 差异** — 在 OpenAI 兼容端点上 `developer` 与 `system` 角色处理不一致、SSE 错误分类和模型能力检测差异。

5. **模型发现失败** — Copilot Enterprise 模型因凭证缓存，管理员启用后不出现。

6. **MCP 配置摩擦** — MCP server 配置中环境变量展开存在缺口。

7. **危险命令安全** — 社区驱动的扩展（claude-bulkhead）填补官方安全 hooks 在危险命令上的空白。

---

*生成于 2026-11-15 | 数据来源：github.com/earendil-works/pi*</think>



</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me carefully translate it while following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Issue/PR references stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

# Qwen Code Community Digest — 2026-11-15
→ # Qwen Code 社区日报 — 2026-11-15

## 1. Today's Highlights
→ ## 1. 今日要点

The Qwen Code project is actively working toward the **1.0 Preview loop kernel** landing on `main`, with Issue #17045 tracking the phased rollout. A critical CI parity bug in the ACP agent-loop (#17234, closed) and multiple flaky E2E tests in the memory-manager suite (#17295, #17300) dominated the last 24 hours. The team also continues to address security hardening: PR #16784 introduces fail-closed behavior on undecodable shell paths.

Qwen Code 项目正积极推进 **1.0 Preview 循环内核** 在 `main` 分支的落地工作，Issue #17045 跟踪分阶段上线进度。过去 24 小时内，ACP agent-loop 的 CI 奇偶性 bug（#17234，已关闭）以及 memory-manager 测试套件中的多个不稳定 E2E 测试（#17295、#17300）是主要焦点。团队同时持续推进安全加固：PR #16784 引入了对无法解码的 shell 路径的失败关闭（fail-closed）行为。
 
---

## 2. Releases
→ ## 2. 版本发布

| Version | Summary |
|---|---|
| **v0.27.2-nightly.20261113.6f754be654** | Managed-agent sessions now register client filesystems automatically, enabling richer filesystem access within managed workflows. Includes a Web Shell test stabilization. [[PR #16844](https://github.com/QwenLM/qwen-code/pull/16844)] |

| 版本 | 变更摘要 |
|---|---|
| **v0.27.2-nightly.20261113.6f754be654** | Managed-agent 会话现已自动注册客户端文件系统，使托管工作流中能够获得更丰富的文件系统访问能力。同时包含 Web Shell 测试稳定性改进。[[PR #16844](https://github.com/QwenLM/qwen-code/pull/16844)] |

---

## 3. Hot Issues
→ ## 3. 热门 Issue

| # | Issue | Priority | Why It Matters | Comments |
|---|---|---|---|---|
| **#14724** | [Main CI failed: Managed Agent gate — no test identified](https://github.com/QwenLM/qwen-code/issues/14724) | P1 | The gatekeeper test for Managed Agent has failed repeatedly across 6+ head commits, making it the most-comment-dense issue (375). Blocks stable merges. | 375 |
| **#17045** | [Tracking: land the 1.0 Preview loop kernel on main, one surface at a time](https://github.com/QwenLM/qwen-code/issues/17045) | P1 | This is the central architectural initiative for Qwen Code 1.x. The event-driven kernel behind a unified `query()` entry is being incrementally surfaced behind feature flags. | 18 |
| **#13009** | [Main CI failed: E2E — cli/cron-tools.test.ts](https://github.com/QwenLM/qwen-code/issues/13009) | P2 | Cron tool registration in the CLI is failing end-to-end, indicating a regression in how scheduled tools are initialized. | 26 |
| **#17234** | [bug(ci): ACP agent-loop parity — kernelRounds is half of sharedRounds (23/25 cases)](https://github.com/QwenLM/qwen-code/issues/17234) | P1 | **Closed.** ACP agent-loop tests were failing with a 23/25 split, revealing that the kernel was running half the expected rounds. Already resolved. | 4 |
| **#17266** | [Web Shell on Windows: "Toggle environment information" causes cmd.exe window storm + overlapping git polls](https://github.com/QwenLM/qwen-code/issues/17266) | P2 | A severe UX regression on Windows 11 in daemon mode: dozens of flashing cmd.exe windows and high CPU git processes. Affects production users. | 3 |
| **#12160** | [MCP tools stay disconnected after turn abort (AbortError skips session repair)](https://github.com/QwenLM/qwen-code/issues/12160) | P2 | When a turn is cancelled mid-MCP HTTP stream, the MCP server can be permanently left `DISCONNECTED` for the session's lifetime. Root cause traced to error handling in `mcp-tool.ts`. | 3 |
| **#17261** | [Content-only child agent launches but produces no output until turn deadline](https://github.com/QwenLM/qwen-code/issues/17261) | P2 | In the external-files topology, delegating to a packaged child agent succeeds in starting the child but never yields output, timing out instead. | 3 |
| **#17247** | [Public child-agent delegation refused on external-workspace profiles](https://github.com/QwenLM/qwen-code/issues/17247) | P2 | Public child-agent calls fail to open the harness session when using external-workspace tool profiles, blocking multi-tenant deployments. | 3 |
| **#6137** | [Flickering in Qwen Code (xterm, alacritty, tmux)](https://github.com/QwenLM/qwen-code/issues/6137) | P2 | Long-standing UI rendering glitch across terminal emulators and tmux combinations. Visual evidence attached; no resolution yet after 4+ months. | 4 |
| **#17288** | [How to report a security vulnerability privately?](https://github.com/QwenLM/qwen-code/issues/17288) | P1 | A community member cannot use the Alibaba Cloud console portal to report a security issue. The SECURITY.md path is inaccessible from India. Needs a GitHub private vulnerability reporting route. | 2 |

| # | Issue | 优先级 | 影响说明 | 评论数 |
|---|---|---|---|---|
| **#14724** | [Main CI failed: Managed Agent gate — 未定位到具体测试](https://github.com/QwenLM/qwen-code/issues/14724) | P1 | Managed Agent 的门控测试在 6+ 个 head commit 上反复失败，是评论密度最高的 Issue（375 条）。阻碍稳定分支合并。 | 375 |
| **#17045** | [追踪：在 main 分支落地 1.0 Preview 循环内核，一次一个层面](https://github.com/QwenLM/qwen-code/issues/17045) | P1 | 这是 Qwen Code 1.x 的核心架构举措。统一 `query()` 入口背后的事件驱动内核正在通过功能开关逐步暴露。 | 18 |
| **#13009** | [Main CI failed: E2E — cli/cron-tools.test.ts](https://github.com/QwenLM/qwen-code/issues/13009) | P2 | CLI 中定时工具的注册在端到端测试中失败，表明调度工具初始化逻辑存在回归。 | 26 |
| **#17234** | [bug(ci): ACP agent-loop 奇偶性 — kernelRounds 为 sharedRounds 的一半（23/25 案例）](https://github.com/QwenLM/qwen-code/issues/17234) | P1 | **已关闭。** ACP agent-loop 测试以 23/25 的比例失败，表明内核运行的轮次只有预期的一半。问题已修复。 | 4 |
| **#17266** | [Windows 上 Web Shell：切换环境信息引发 cmd.exe 窗口风暴 + 重叠的 git 轮询](https://github.com/QwenLM/qwen-code/issues/17266) | P2 | Windows 11 守护进程模式下严重的 UX 回归：大量闪烁的 cmd.exe 窗口和高 CPU 占用的 git 进程。影响生产环境用户。 | 3 |
| **#12160** | [MCP 工具在轮次中止后保持断开连接（AbortError 跳过了会话修复）](https://github.com/QwenLM/qwen-code/issues/12160) | P2 | 在 MCP HTTP 流中间取消轮次时，MCP 服务器可能在会话生命周期内永久处于 `DISCONNECTED` 状态。根因定位到 `mcp-tool.ts` 中的错误处理逻辑。 | 3 |
| **#17261** | [仅含内容的子 Agent 启动成功但直到轮次截止时间才产生输出](https://github.com/QwenLM/qwen-code/issues/17261) | P2 | 在 external-files 拓扑中，委托给打包子 Agent 的操作成功启动了子 Agent，但始终不返回输出，最终超时。 | 3 |
| **#17247** | [在 external-workspace 配置文件中公

共子 Agent 委托被拒绝](https://github.com/QwenLM/qwen-code/issues/17247) | P2 | 使用 external-workspace 工具配置文件时，公共子 Agent 调用无法打开 harness 会话，阻碍多租户部署。 | 3 |
| **#6137** | [Qwen Code 中的闪烁问题（xterm、alacritty、tmux）](https://github.com/QwenLM/qwen-code/issues/6137) | P2 | 跨终端模拟器和 tmux 组合的长期 UI 渲染异常。已附上视觉证据；4+ 个月仍未解决。 | 4 |
| **#17288** | [如何私下报告安全漏洞？](https://github.com/QwenLM/qwen-code/issues/17288) | P1 | 社区成

员无法通过阿里云控制台门户上报安全问题。SECURITY.md 路径从印度地区无法访问。需要启用 GitHub 私有漏洞报告通道。 | 2 |

---

## 4. Key PR Progress
→ ## 4. 重点 PR 进展

| # | PR | Author | Summary | Status |
|---|---|---|---|---|
| **#17264** | [feat(serve): run Hosted Harness model round on shared agent loop](https://github.com/QwenLM/qwen-code/pull/17264) | wenshao | Migrates the Hosted Harness evaluation to use `runModelRound` through the unified agent loop, behind `experimental.unifiedAgentLoop`. This is a critical milestone for the #17045 1.0 kernel landing. | **Closed** |
| **#16784** | [fix(core): fail closed on undecodable shell paths](https://github.com/QwenLM/qwen-code/pull/16784) | he-yufeng | Security hardening: shell filename words that cannot be resolved losslessly no longer inherit an allow verdict. Undecodable bytes and expansion-bearing redirect targets remain visible. | Open (autofix/needs-human) |
| **#17295** | [fix(integration): run memory-manager fixture scripts as CommonJS](https://github.com/QwenLM/qwen-code/pull/17295) | qwen-code-dev-bot | Marks the memory-manager interactive suite's generated executable directory as CommonJS, resolving test failures in release validation. | Open |
| **#17300** | [fix(integration): run memory-manager fixture scripts as CommonJS](https://github.com/QwenLM/qwen-code/pull/17300) | qwen-code-dev-bot | Follow-up to #17295, pinning the suite's fixture scripts to CommonJS scope when placed inside ESM package boundaries. | Open |
| **#17279** | [ci: route trusted PR jobs off the disposable pool](https://github.com/QwenLM/qwen-code/pull/17279) | yiliang114 | Splits the Managed loop and Host Build lanes by trust rules, stopping pull requests from being automatically routed to the disposable runner pool when they meet the existing Linux CI trust criteria. | Open |
| **#17117** | [fix(java): cancel heartbeats removed during registration](https://github.com/QwenLM/qwen-code/pull/17117) | Afloat16 | Cancels newly published heartbeat futures when their session attachment was already removed or replaced during timer registration, preventing orphaned heartbeats. | Open |
| **#17199** | [feat(channels): digest bound-PR comment backlog after a downtime gap](https://github.com/QwenLM/qwen-code/pull/17199) | wenshao | Consolidates comment backlog delivery on GitHub channel resume: one digest prompt instead of one per comment, with a heartbeat stamped into the poll cursor. | Open |
| **#17259** | [test(web-shell): stabilize global turn navigation scroll-follow E2E](https://github.com/QwenLM/qwen-code/pull/17259) | qwen-code-dev-bot | Stabilizes the web-shell smoke test for transcript scroll-following in the navigation rail by waiting for the rail to reach the live tail before assertions. | Open |
| **#17285** | [docs(design): add the agent loop's capability ledger and rollout rules](https://github.com/QwenLM/qwen-code/pull/17285) | qqqys | Block A of #17045: adds a 141-row capability ledger mapping 1.0 loop behaviors (`event-bus/`, `tool-executor/`, `core/query-*`) to main, with rollout rules for each surface. | Open |
| **#17309** | [docs(serve): document the two ignored watch knobs and retire three stale premises](https://github.com/QwenLM/qwen-code/pull/17309) | wenshao | Clears documentation debt from the PR-watch design calibration (#17250) by documenting ignored knobs and removing outdated assumptions. | Open |

| # | PR | 作者 | 摘要 | 状态 |
|---|---|---|---|---|
| **#17264** | [feat(serve): 在共享 agent loop 上运行 Hosted Harness 模型轮次](https://github.com/QwenLM/qwen-code/pull/17264) | wenshao | 将 Hosted Harness 评估迁移到通过统一 agent loop 使用 `runModelRound`，通过 `experimental.unifiedAgentLoop` 控制。这是 #17045 1.0 内核落地的关键里程碑。 | **已关闭** |
| **#16784** | [fix(core): 对无法解码的 shell 路径执行失败关闭策略](https://github.com/QwenLM/qwen-code/pull/16784) | he-yufeng | 安全加固：无法无损解析的 shell 文件名不再继承允许判决。不可解码的字节和含展开式的重定向目标仍然可见。 | Open（自动修复/需人工介入） |
| **#17295** | [fix(integration): 将 memory-manager fixture 脚本作为 CommonJS 运行](https://github.com/QwenLM/qwen-code/pull/17295) | qwen-code-dev-bot | 将 memory-manager 交互式套件生成的

可执行文件目录标记为 CommonJS，解决发布验证中的测试失败。 | Open |
| **#17300** | [fix(integration): 将 memory-manager fixture 脚本作为 CommonJS 运行](https://github.com/QwenLM/qwen-code/pull/17300) | qwen-code-dev-bot | #17295 的后续，将套件的 fixture 脚本固定在 CommonJS 作用域内，以处理 ESM 包边界内的放置问题。 | Open |
| **#17279** | [ci: 将可信 PR 任务路由出一次性运行池](https://github.com/QwenLM/qwen-code/pull/17279) | yiliang114 | 通过信任规则拆分托管循环和主机构建流水线，当拉取请求符合现有 Linux CI 信任标准时，自动停止将其路由到一次性运行器池。 | Open |
| **#17117** | [fix(java): 取消注册过程中移除的心跳](https://github.com/QwenLM/qwen-code/pull/17117) | Afloat16 | 在定时器注册期间，当会话附加信息已被移除或替换时，取消新发布的心跳 futures，防止孤立心跳产生。 | Open |
| **#17199** | [feat(channels): 在停机后对关联 PR 的评论积压进行摘要消化](https://github.com/QwenLM/qwen-code/pull/17199) | wenshao | 统一 GitHub 渠道恢复时的评论积压传递：使用一次摘要提示而非逐条评论处理，并在轮询游标中嵌入心跳戳。 | Open |
| **#17259** | [test(web-shell): 稳定化全局轮次导航滚动跟随 E2E 测试](https://github.com/QwenLM/qwen-code/pull/17259) | qwen-code-dev-bot | 通过等待导航栏到达实时尾部后再执行断言，稳定化 Web Shell 冒烟测试中转录本滚动跟随功能的测试。 | Open |
| **#17285** | [docs(design): 添加 agent loop 能力台账和上线规则](https://github.com/QwenLM/qwen-code/pull/17285) | qqqys | #17045 的第一阶段：添加 141 行能力台账，将 1.0 loop 行为（`event-bus/`、`tool-executor/`、`core/query-*`）映射到 main，并为每个层面提供对应的上线规则。 | Open |
| **#17309** | [docs(serve): 记录两个被忽略的 watch 参数并清理三个过时假设](https://github.com/QwenLM/qwen-code/pull/17309) | wenshao | 清理 PR-watch 设计校准（#17250）遗留的文档债务，记录被忽略的参数并移除过时的前提假设。 | Open |

---

## 5. Hot Discussions

*No discussion data was provided for this period.*

---

## 6. Feature Request Trends

The following themes emerge from open issues and PRs as the most-requested directions:

| Theme | Evidence | Direction |
|---|---|---|
| **1.0 Unified Agent Loop Kernel** | #17045, #17284, #17264, #17285 | Event-driven kernel migration landing in phases; feature flags per surface |
| **Multi-Workspace Daemon Support** | #17275, #17266 | Web Shell Goals page and daemon-level workspace awareness |
| **Truncation Budget Propagation** | #17306 | Carry `outputBudgetAtTruncation` into subagent and ACP/daemon write rejections |
| **CI Performance Optimization** | #17287 | Ideas for reducing CI runtime and GitHub Actions minutes consumption |
| **MCP Resilience** | #12160 | Robust session repair on AbortError; reconnection after transport failures |
| **Managed Agent Delegation** | #17261, #17247 | External-workspace and public child-agent delegation reliability |

---

## 7. Developer Pain Points

The following frustrations are recurring or high-frequency based on issue volume and comment density:

1. **Unstable E2E / CI Gate** — Multiple issues (#14724, #13009, #16219, #17278, #17298) report Main CI failures. The memory-manager suite in particular is flaky in release validation contexts, requiring back-to-back fixes (#17295 → #17300).

2. **ACP Agent-Loop Parity Gap** — #17234 revealed that the kernel was running 23 out of 25 expected rounds, indicating an undetected divergence between the ACP harness and the shared agent loop implementation.

3. **Windows Daemon Web Shell** — #17266 describes a catastrophic UX bug where toggling environment information spawns dozens of cmd.exe windows and CPU-hogging git polls. Affects production Windows deployments.

4. **Shell Path Security Boundary** — #16784 addresses undecodable shell paths that were silently allowed, representing a potential security regression that requires careful review (marked `autofix/needs-human`).

5. **Security Reporting Inaccessibility** — #17288 exposes a gap: the prescribed Alibaba Cloud console portal is inaccessible from certain regions (India), and GitHub private vulnerability reporting is not enabled. Community members have no clear path to report vulnerabilities privately.

6. **Long-Standing UI Rendering Bug** — #6137 (flickering in xterm/alacritty/tmux) has been open since July with no resolution, indicating a difficult-to-reproduce rendering edge case.

7. **Documentation Bilingual Debt** — Multiple design docs are missing Chinese translations (#17078, #17302, #17303), violating the AGENTS.md bilingual rule and causing 404 links for Chinese-speaking community members.

---

*Digest generated from GitHub data for [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) on 2026-11-15.*</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*