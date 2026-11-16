# AI CLI 工具社区动态日报 2026-11-16

> 生成时间: 2026-11-16 02:21 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to output ONLY the translation, no preamble, no explanation, no markdown fences. I need to preserve the exact Markdown structure, including tables, and use natural technical Chinese register.

Let me translate section by section carefully:

Key points to remember:
- Keep URLs, project names, version tags, etc. as-is
- Preserve all formatting
- Use natural technical Chinese
- Translate the content but keep technical terms that are commonly used in English in Chinese tech communities

Let me go through the document:

Title: "AI CLI Tools Ecosystem — Cross-Tool Comparison Report" → "AI CLI 工具生态——跨工具对比报告"

Date line: Keep as is

Section headers: Translate meaningfully

Tables: Translate content but keep structure

Lists: Translate while preserving bullet points

Technical terms - common ones that stay in English: CLI, MCP, ACP, API, CI/CD, PR, Issue, Release, Windows, macOS, Linux, Git, npm, TypeScript, JavaScript, CVE, URL, etc.

Let me translate carefully:
</think>


# AI CLI 工具生态——跨工具对比报告

**日期：** 2026年11月16日
**范围：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi、Qwen Code

---

## 1. 生态总览

AI CLI 工具领域正处于快速且不均衡的成熟期。来自主要 AI 实验室的 proprietary 工具（Claude Code、Codex、Copilot CLI、Gemini CLI）正在向 **agentic 执行模型** 收敛——普遍采用权限系统、子 agent 编排和 MCP 集成——但在实现深度和生态开放性上差异显著。社区驱动的替代方案（OpenCode、Pi）侧重于可扩展性和协议标准化，而 Qwen Code 则代表了强调 1.0 loop kernel 重写和多 adapter 支持的混合模式。所有工具面临的核心张力是 **可靠性与能力的平衡**：误报分类器、并发工具执行中的竞态条件，以及权限模型的复杂性是普遍存在的痛点。跨平台支持（尤其是 Windows）仍是共同的短板，而 Agent Client Protocol（ACP）正成为第三方集成的实际互操作层。

---

## 2. 活跃度对比

| 工具 | Issues（24h） | PRs（24h） | Discussions（24h） | Releases（24h） | 活跃渠道 |
|------|-------------|-----------|-------------------|----------------|---------------|
| **Claude Code** | 50（展示前30） | 0 | 无数据 | 0 | Issues 主导 |
| **OpenAI Codex** | 30 | 17 | 8 | 2 个 alpha 版 | 均衡 |
| **Gemini CLI** | 50（展示前30） | 16 | 无数据 | 0 | Issues + PRs 均衡 |
| **Copilot CLI** | ~15 | 0 | 无数据 | 0 | 仅 Issues |
| **OpenCode** | 30 | 17 | 无数据 | 0 | Issues + PRs 均衡 |
| **Pi** | 27 | 1 | 1 | 0 | 仅 Issues |
| **Qwen Code** | 10 | 17 | 0 | 4 | PRs 主导 |

**观察：**

- **最高迭代速度：** OpenAI Codex、OpenCode 和 Qwen Code 各自在 24 小时内合并或新建了 17 个 PR，表明处于活跃的开发冲刺阶段。
- **发布频率：** 仅 Codex（2 个 alpha 预发布版）和 Qwen Code（CLI、SDK、nightly、desktop 四个同步发布）有二进制产物。
- **讨论活跃度：** Codex 是唯一有活跃讨论参与的工具（8 个帖子）；Copilot CLI、Gemini CLI、Claude Code 和 OpenCode 缺少讨论数据——可能是因为这些仓库未启用 GitHub Discussions，而非表示无活跃度。
- **PR 缺口：** Claude Code 和 Copilot CLI 在 24 小时窗口内 PR 记录为零，可能与部署时间安排或社区贡献减少有关。

---

## 3. 共同功能方向

多项能力需求出现在三个及以上工具社区中，表明行业层面的共同优先级：

| 共同需求 | 涉及工具 | 具体表现 |
|-------------|---------------|------------------------|
| **MCP（Model Context Protocol）健壮性** | Claude Code、Gemini CLI、Copilot CLI、OpenCode、Pi | 工具发现失败、动态 MCP 服务器的会话恢复、会话周期 hook 传播、连接状态可见性 |
| **Auto 模式 / 误报分类器削减** | Claude Code、Gemini CLI、OpenCode | Agent 拦截良性的只读操作；安全分类器产生 80% 以上的误报率（Claude Code #104811） |
| **跨平台稳定性** | Claude Code、Codex、Gemini CLI、OpenCode、Qwen Code | Windows PowerShell/终端故障；Wayland 浏览器子 agent 崩溃；macOS 沙盒网络问题；Git autocrlf 测试失败 |
| **ACP（Agent Client Protocol）一致性** | Copilot CLI、Pi | 将 `contextTier` 暴露为会话配置；advertise Copilot Fusion；斜杠命令输出流式处理；headless 会话执行 |
| **子 agent / agent 可靠性** | Claude Code、Gemini CLI、OpenCode、Qwen Code | 恢复 bug 误报成功；通用 agent 卡死；权限审批卡住；并行 agent 对话渲染 |
| **会话持久化与交接** | Claude Code、OpenCode、Pi、Gemini CLI | 项目在会话间的交接；版本历史回归；跨目录恢复 bug；长会话中的上下文衰减 |
| **依赖 / 安全加固** | Codex、Gemini CLI、Qwen Code | CVE 审计失败；npm 安全扫描；CI 安全门改进；`qs` 库更新 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术差异化 |
|------|--------------|-------------|---------------------------|
| **Claude Code** | 同事式实时协作；Artifact 版本管理；Cyber safeguard 系统 | 需要同步协作的个人开发者及团队 | 独特的双设备 commit 模型；Artifact 版本历史；Cyber safeguard 权限层 |
| **OpenAI Codex** | 语音/多模态输入；Langfuse 可观测性；云端任务管理 | OpenAI 订阅用户；有云端工作流需求的企业团队 | IDE 语音转录（244 👍 最高需求）；云端任务归档（无删除功能）；Dots 系统用于本地网络协调 |
| **Gemini CLI** | AST 感知的代码发现；零依赖 OS 沙盒；持久化执行 | 需要精准代码分析且追求最小依赖负担的开发者 | Epic 级 AST 工具减少 token 膨胀；与模型 bash 亲和性对齐的安全优先沙盒设计；npm 批量更新（单 PR 70 个包） |
| **Copilot CLI** | ACP 协议一致性；插件生态；VS Code / desktop 集成 | 第三方工具构建者；在 GitHub IDE 以外场景使用 Copilot 的开发者 | ACP 优先设计面向外部编排器；自定义规则持久化；带 steer controls 的 VS Code Codex 扩展 |
| **OpenCode** | 免费层可靠性；异步视频生成；ACP 标准化 | 免费层用户；需要视频生成的开发者；ACP 采用者 | 最大的免费层 mega-thread（370 条评论）；基于磁盘的异步视频 API；控制台中的 Slack 链接预览 |
| **Pi** | 扩展注册的 provider 系统；任务持久化挂起；并发正确性 | 扩展开发者；CI/CD 流水线；需要多 provider 配置的开发者 | `pi-durable` 取消处理器；OpenAI API 的会话间缓存；`ctx.ui.setStatus` 用于 MCP 状态发布 |
| **Qwen Code** | 1.0 loop kernel 重写；Managed Agent 文件系统访问；多 adapter 支持 | 使用 Qwen 模型的团队；钉钉企业用户；需要定时 agent 循环的开发者 | 事件驱动的 loop kernel（基础架构级）；钉钉 adapter；`/loop` managed skill 用于定时执行 |

---

## 5. 社区势能与成熟度

| 工具 | 势能 | 成熟度信号 |
|------|----------|------------------|
| **OpenAI Codex** | 🔥 高 | 24h 内 17 个 PR、8 个活跃讨论、2 个 alpha 发布；成熟的 CI/CD 带链式 e2e 门控；第三方插件生态正在形成 |
| **Qwen Code** | 🔥 高 | 24h 内 17 个 PR，跨组件同步 4 个发布，1.0 loop kernel 积极合入中；大规模 deflake 战役正在进行 |
| **OpenCode** | 🔥 高 | 24h 内 17 个 PR，活跃的安全修复（CVE 追踪），异步视频生成进行中；免费层问题代表健康的发展（采用率高） |
| **Gemini CLI** | 🟡 中等 | 24h 内 16 个 PR，依赖现代化节奏强劲；但讨论较少且无发布，表明内部迭代而非社区增长 |
| **Claude Code** | 🟡 中等 | 活跃的 issue 分流（50 条），但 24h 内零 PR 且无近期发布；社区呈报告导向而非贡献导向 |
| **Pi** | 🟢 起步 | 规模较小（27 条 issues、1 个 PR、1 个讨论），但 ACP 兴趣浓厚（#4444，54 👍）表明外部生态增长潜力 |
| **Copilot CLI** | 🟢 起步 | Issue 体量有限（~15 条），近期无 PR；ACP 一致性请求占主导，表明社区在推动特定功能缺口而非广泛采用 |

---

## 6. 趋势信号

**1. MCP 标准化浪潮**
多个工具正在独立改进 MCP 健壮性：工具发现可靠性、连接状态可见性、动态工具集的会话恢复，以及跨 MCP 边界的分布式追踪。这种收敛表明 MCP 正在成为实际上的扩展性层，而无法提供稳定 MCP 体验的工具将失去扩展开发者。

**2. ACP 作为互操作层**
Copilot CLI、Pi 和 OpenCode 都在投资 ACP 一致性——向外部客户端暴露会话配置、模型目录和能力协商。这表明行业普遍认识到 agentic 工具需要标准化的程序化接口，而不仅仅是 CLI 交互。

**3. 免费层作为信任晴雨表**
OpenCode 的 370 条评论免费层 mega-thread 是所有工具中最大的社区信号。当免费层不可靠时，用户不会仅仅抱怨——他们会选择离开。Proprietary 工具（Claude Code、Codex）在这一具体问题上暴露较少，但面临类似的信任危机——围绕分类器误报和 auto 模式行为。

**4. 跨平台债是 P0 级别**
Windows 特异性 bug 出现在每个工具的 issue 跟踪器中。无论是 PowerShell spawn 失败（OpenCode、Gemini CLI、Pi）、终端输入序列泄漏（Pi）、git autocrlf 测试失败（Qwen Code），还是 Cowork 文件 commit 竞态条件（Claude Code），Windows 始终是摩擦最高的平台。优先保障 Windows 一致性的工具将捕获可观的开发者群体。

**5. Agent 可靠性优先于新功能**
跨工具评论最多的 issue 不是功能请求——而是 agent 行为故障：分类器误报、过早轮次完成、静默失败和子 agent 误报。社区情绪偏向可靠性加固而非功能扩展。

**6. 依赖安全作为持续性负担**
CVE 审计失败和 npm 安全扫描在 Codex、Gemini CLI 和 Qwen Code 中反复出现。这是基于 JavaScript/TypeScript 工具的结构性成本，需要持续的维护投入，直到依赖更新流水线完全自动化。

**7. 持久化执行获得动力**
Pi 的 `pi-durable` 取消处理器和 Qwen Code 的 managed `/loop` skill 都在解决 agent 需要在中断中存活的需求——主机重启、配额重置、会话断开。随着生产级使用增长，这种模式很可能成为所有 agentic 工具的标准配置。

---

*报告基于 2026-11-16 的 github.com 活动数据编制。所有跨工具对比均基于可观察的 issue、PR、discussion 和 release 模式。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation, no preamble
2. Preserve Markdown structure exactly
3. Keep URLs, usernames, PR numbers, file paths, version tags as-is
4. Use natural technical Chinese

Let me go through this carefully section by section.

Key terms to consider:
- "Claude Code Skills" - keep as-is
- "Pull Requests" - PR (keep "PR" as it's standard)
- "Issues" - keep
- "Skills" - 技能 or keep as-is
- "Community" - 社区
- "Highlights" - 亮点
- "Trending" - 趋势/热门

Let me translate:
</think>


# Claude Code Skills 社区亮点报告

**数据来源：** `github.com/anthropics/skills` | **截至：** 2026-11-16

---

## 1. 热门技能排行

尽管所有 PR 的互动指标均显示评论数为 `undefined`（数据采集问题），但以下 Skill PR 按问题复杂度、涉及范围及社区需求程度，代表了最具实质意义或战略价值的贡献：

### 1.1 `mcp-builder` — MCP ≥2.0 兼容性修复
- **PR #1742** | 作者：Kuldeeep18 | 状态：OPEN
- **功能：** 更新 `skills/mcp-builder/scripts/connections.py`，以支持 `mcp>=2.0.0` 中重命名的 `streamable_http_client` API，同时修复通过 `create_mcp_http_client/http_client` 配置自定义 HTTP 头的问题。
- **意义：** 面向快速增长的 MCP 生态系统的关键兼容性修复，确保各技能与最新版 Model Context Protocol 兼容。
- **链接：** https://github.com/anthropics/skills/pull/1742

### 1.2 `skill-creator` — 触发评估稳定性增强
- **PR #1298** | 作者：MartinCajiao | 状态：OPEN
- **功能：** 通过隔离各 worker 的命令探测来解决触发评估中的误判问题，修复 Windows 上 `select()` 子进程管道失败的问题，并防止无关工具中断扫描。同时正确处理运行时失败——不将其视为有效触发。
- **意义：** 直接提升技能开发与测试工作流效率——对技能作者有极高价值。
- **链接：** https://github.com/anthropics/skills/pull/1298

### 1.3 `notion-spec-to-implementation` + `quantitative-resume-auditor`
- **PR #1245** | 作者：mrdesouzaphd-cmyk | 状态：OPEN
- **功能：** 将产品/技术规范转换为可执行的 Notion 任务，包含验收标准和进度追踪；新增结构化简历审计工具，用于候选人评估。
- **意义：** 两个面向垂直场景的新技能，分别针对产品管理和 HR 工作流——扩展了 Claude Code 在纯开发场景之外的应用边界。
- **链接：** https://github.com/anthropics/skills/pull/1245

### 1.4 `proofcore-contract-auditor`
- **PR #1771** | 作者：ProofCore-Protocol | 状态：OPEN
- **功能：** 对 Solidity 和 Rust 智能合约进行自动化静态分析，通过零存储 Merkle 协议将加密审计证明锚定至 TON 区块链。
- **意义：** 首个 Web3/区块链方向的技能；标志着去中心化金融和智能合约领域对专业化开发工具的明确需求。
- **链接：** https://github.com/anthropics/skills/pull/1771

### 1.5 `md2video-audio`
- **PR #1703** | 作者：70v-Yoyo | 状态：OPEN
- **功能：** 将 Markdown 文档编译为带真人语音旁白的专业 MP4 视频，使用 Marp 生成幻灯片。
- **意义：** 打通了文档与演示文稿之间的链路；零成本的内容再利用。
- **链接：** https://github.com/anthropics/skills/pull/1703

### 1.6 `pyxel` — 复古游戏开发
- **PR #525** | 作者：kitao | 状态：OPEN
- **功能：** 指导 Pyxel 复古游戏的实现、头less 输入驱动运行、帧状态检查与断言验证。
- **意义：** 热门细分领域——游戏开发是 Claude Code 的高频使用场景；Pyxel 是知名的轻量级游戏引擎。
- **链接：** https://github.com/anthropics/skills/pull/525

### 1.7 `webapp-testing` — 安全修复
- **PR #1980** | 作者：Pcmhacker-piro | 状态：OPEN
- **功能：** 移除 `with_server.py` 中 `subprocess.Popen()` 的 `shell=True` 参数，防止通过命令注入（CWE-78）执行服务器命令时的安全风险。
- **意义：** 安全加固；修复了生产环境技能中的真实漏洞。
- **链接：** https://github.com/anthropics/skills/pull/1980

### 1.8 `scnet-hpc` — 超算集群运维
- **PR #1615** | 作者：lql341 | 状态：OPEN
- **功能：** 基于 SCNet HPC 集群的 SSH 和 Slurm 配置式工作流，涵盖作业生成、集群发现和计算节点管理。
- **意义：** 面向学术/科研超算用户——这是 Claude Code 采纳率增长最快的群体之一。
- **链接：** https://github.com/anthropics/skills/pull/1615

---

## 2. 社区需求趋势

对热门 Issues 的分析揭示了以下主导主题：

| 趋势 | 证据 | Issue |
|-------|----------|-------|
| **信任/安全模型** | 命名空间冒用风险；`anthropic/` 下的技能可能通过虚假身份骗取用户授予高级权限 | [#492](https://github.com/anthropics/skills/issues/492) — 46 条评论 |
| **组织内技能共享** | 缺乏原生的组织级技能共享机制；用户只能通过 Slack 或手动上传 | [#228](https://github.com/anthropics/skills/issues/228) — 17 条评论 |
| **评测/测试可靠性** | `run_eval.py` 触发率为 0%；并行 worker UUID 冲突；技能莫名消失 | [#556](https://github.com/anthropics/skills/issues/556)、[#1352](https://github.com/anthropics/skills/issues/1352)、[#62](https://github.com/anthropics/skills/issues/62) |
| **Token 预算管理** | `claude-api` 技能注入约 156k tokens，导致上下文窗口耗尽 | [#1487](https://github.com/anthropics/skills/issues/1487) |
| **工作流自动化** | 规范→Notion、Markdown→视频、简历审计等技能需求旺盛 | PR #1245、#1703 |
| **智能合约 / Web3** | 明确要求 Solidity/Rust 静态分析和区块链存证能力 | PR #1771 |

---

## 3. 高潜力待上线技能

以下 PR 显示活跃开发态势且实用价值清晰——有望近期合入：

| 技能 | PR | 亮点 |
|-------|-----|------------|
| **`mcp-builder` 修复** | [#1742](https://github.com/anthropics/skills/pull/1742) | MCP 2.0 兼容性；生态系统必备 |
| **`skill-creator` 稳定性增强** | [#1298](https://github.com/anthropics/skills/pull/1298) | Windows 支持；评测可靠性 |
| **`pyxel` 游戏开发** | [#525](https://github.com/anthropics/skills/pull/525) | 社区关注度高；热门细分领域 |
| **`proofcore-contract-auditor`** | [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 细分；技能目录中独树一帜 |
| **`document-typography`** | [#514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档的通用痛点 |
| **`scnet-hpc`** | [#1615](https://github.com/anthropics/skills/pull/1615) | 面向科研/学术超算群体 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求在于技能开发生命周期本身的可靠性提升**——特别是触发评估准确性、跨平台兼容性和信任/安全边界——与此同时，垂直场景（Web3、超算、游戏开发、视频生成）的扩展也在持续推进，以将 Claude Code 的吸引力从通用编程辅助拓展至更广阔的开发场景。

---

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the content while maintaining the exact Markdown structure
2. Keep URLs, issue numbers, project names, etc. as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me carefully translate each section:

**Title and header:**
- "Claude Code Community Digest" → "Claude Code 社区动态"
- "Date: November 16, 2026" → "日期：2026年11月16日"
- Keep the GitHub URL as-is

**Today's Highlights:**
- Translate naturally, maintain the meaning

**Releases:** - "No new releases in the last 24 hours." → "过去 24 小时内无新版本发布。"

**Hot Issues:** Translate each issue title and content

**Feature Request Trends:** Translate the category names and any descriptions

**Developer Pain Points:** Translate each section heading and content

**Footer:** Translate appropriately

Let me go through it section by section:

---

# Claude Code 社区动态

**日期：** 2026年11月16日
**来源：** [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 今日要闻

社区正在积极调试一个关键的 **Cowork 文件提交延迟问题** (#93482)，其中设备提交操作在磁盘写入完成前就报告成功，造成静默数据丢失风险。一个严重的 **Artifact 版本历史回归问题** (#96718) 获得了大量关注（16 个 👍），移除了所有 Claude Code 入口点的已保存版本访问功能。自动模式分类器继续产生大量误报，一位用户记录了过去两个月 149 次拒绝中的 121 次为良性。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门问题

### 1. Cowork 文件提交在磁盘写入完成前报告成功 [#93482](https://github.com/anthropics/claude-code/issues/93482)


**影响程度：** 严重 | 26 条评论 | 平台：Windows | 领域：Cowork
`device_commit_files` 函数在磁盘内容恰好延迟一个提交时立即报告成功，导致 mtime 保持陈旧状态，表明提交管道存在竞态条件。这对依赖提交内容立即可用的自动化工作流特别危险。

### 2. 查看器菜单中缺少 Artifact 版本历史 [#96718](https://github.com/anthropics/claude-code/issues/96718)
**影响程度：** 高 | 10 条评论，16 个 👍 | 平台：所有 | 回归问题
保存的 Artifact 版本在最近一次变更后无法访问。版本历史功能已从 Claude Code、Cowork 和 claude.ai 的查看器菜单中移除，破坏了依赖版本检索的工作流。与问题 #95442 相关。

### 3. 自动模式分类器误报：149 次拒绝中有 121 次为良性 [#104811](https://github.com/anthropics/claude-code/issues/104811)
**影响程度：** 高 | 4 条评论 | 平台：macOS | 领域：智能体/权限
一位用户两个月来的全面分析显示自动模式分类器的误报率高达 81%。分类器错误地阻止了无害的只读操作，严重破坏了开发流程。

### 4. Chrome 扩展程序网站权限永久为空 [#105390](https://github.com/anthropics/claude-code/issues/105390)
**影响程度：** 中等 | 4 条评论，5 个 👍 | 平台：macOS | 领域：Chrome
Claude in Chrome 无法访问任何网站——批准网站列表永久为空，权限提示从不出现。这阻止了扩展侧边栏和 MCP 工具的所有页面交互。

### 5. 桌面应用中缺少斜杠命令/菜单 [#99691](https://github.com/anthropics/claude-code/issues/99691)
**影响程度：** 中等 | 4 条评论 | 平台：Windows | 领域：插件/桌面
Mod 注册的斜杠命令在桌面应用

的代码标签页编写器中显示"此处不是命令"，尽管功能正常。发布给 SDK 主机的命令列表完全忽略了 `isHidden` 过滤器。

### 6. 网络安全防护对合法安全工作的误报 [#87938](https://github.com/anthropics/claude-code/issues/87938)
**影响程度：** 中等 | 5 条评论 | 领域：模型/安全
会话范围模型回退安全防护对合法的安全研究和网络安全工作产生误报。在 Opus 5 上实时重现，这阻止了安全相关开发场景中的生产性工作。

### 7. reasoning_extraction 对良性内容的误报 [#95561](https://github.com/anthropics/claude-code/issues/95561)
**影响程度：** 中等 | 4 条评论，4 个 👍 | 平台：macOS | 领

域：模型
Anthropic API 错误地将良性内容标记为 `reasoning_extraction` 违规，在程序化使用中记录了 23 次拒绝（其中 7 次完全终止了对话轮次）。

### 8. macOS 沙箱代理截断响应 [#99650](https://github.com/anthropics/claude-code/issues/99650)
**影响程度：** 中等 | 3 条评论 | 平台：macOS | 领域：网络/沙箱
当服务器关闭连接（`Connection: close`）时，HTTPS 响应被截断，客户端套接字收到 `ECONNRESET`。仅在使用 Bash 沙箱时才会发生这种情况，使远程 API 调用不可靠。

### 9. 隐私模式阻止包含邮件

头字段名的脚本 [#110184](https://github.com/anthropics/claude-code/issues/110184)
**影响程度：** 低 | 3 条评论 | 平台：macOS | 领域：Bash/插件/安全
隐私模式错误地将包含常见邮件头字段名的本地脚本标记为安全风险，阻止了恰好使用"Subject"或"From"等术语的合法开发脚本。

### 10. 插件验证对有效导入的 TypeScript 错误 [#110291](https://github.com/anthropics/claude-code/issues/110291)
**影响程度：** 低 | 1 条评论 | 平台：Windows | 领域：插件
使用 TypeScript 导入的 Mod 通过 `claude plugin test` 但在 `claude plugin validate` 中失败，TS5097 错误导致验证不一致。

这会在 CI/CD 流水线中造成问题。

---

## 关键 PR 进展

过去 24 小时内没有更新拉取请求。

---

## 功能请求趋势

分析开放问题和增强请求揭示了这些高需求方向：

| 类别 | 请求 |
|----------|----------|
| **权限控制** | 在钩子中暴露拒绝原因 (#72589)，本地管理场景下绕过权限 (#105218) |
| **配置管理** | 集中式项目本地设置存储，而非 `.claude/` 目录 (#110307) |
| **远程/无头操作** | 远程引擎控制的文档化、版本化 JSON-RPC 协议 (#108005) |
| **插

件系统** | 桌面应用中改进的斜杠命令可见性控制 (#99234)，MCP 工具标签大小写保留 (#110189) |
| **平台集成** | VS Code 扩展中的渠道通知 (#110309)，提示栏中的后台任务可见性 (#110310) |

---

## 开发者痛点

### 自动模式分类器疲劳
自动模式分类器在 Windows 和 macOS 上产生过多误报。开发者报告被阻止的只读操作、一次合理拒绝后的链式阻止，以及良性脚本被分类为安全风险。一位用户记录了两个月的 81% 误报率。

### 跨平台碎片化
特定问题在 Windows 上占主导地位，包括 Cowork 文件提交的竞态条件和权限管理不一致。这些问题导致开发者体验碎片化，难以维护一致的工作流。

### Chrome 扩展可靠性
Chrome 扩展的网站权限系统完全损坏——批准网站列表无法填充，阻止了所有基于浏览器的 Claude 交互。这影响了侧边栏和 MCP 浏览器工具。

### 插件生态摩擦
`plugin test` 和 `plugin validate` 之间的类型验证不一致造成 CI/CD 问题。SDK 命令忽略可见性标志，PluginValidateReport 类型与旧版 CLI JSON 输出不匹配。

### Artifact 版本访问
移除查看器版本历史的回归破坏了依赖版本比较或回滚的工作流，目前没有变通方案。

---

*生成时间：2026年11月16日 | 数据覆盖 24 小时周期 | [开放问题](https://github.com/anthropics/claude-code/issues?q=is%3Aissue%20state%3Aopen) | [开放 PR](https://github.com/anthropics/claude-code/pulls)*</think>



</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English technical digest into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, code, issue references as-is
- Keep project names, usernames, version tags in original form
- Use natural technical Chinese register

Let me translate section by section:

# OpenAI Codex Community Digest — 2026-11-16 → OpenAI Codex 社区日报 — 2026-11-16

## 1. Today's Highlights → ## 1. 今日要闻

## 2. Releases → ## 2. 版本发布

## 3. Hot Issues → ## 3. 热门 issue

## 4. Key PR Progress → ## 4. 重要 PR 进展

## 5. Hot Discussions → ## 5. 热门讨论

## 6. Feature Request Trends → ## 6. 功能需求趋势

## 7. Developer Pain Points → ## 7. 开发者痛点

Let me translate the content carefully while maintaining the technical Chinese register.
</think>


# OpenAI Codex 社区日报 — 2026-11-16

---

## 1. 今日要闻

过去 24 小时内，Codex 团队合并了 **17 个 pull request**，重点集中在 CLI 交互体验和终端可靠性修复上——尤其是 Ghostty 等终端 alternate-scroll 模式的回归问题。社区呼声最高的功能需求——**IDE 扩展的语音转写功能**（#3000）持续获得关注，收获 244 个 👍。在 Windows 端，Computer Use 截图边框残留 bug（#57101）仍未解决，影响版本 26.1021 的用户。

---

## 2. 版本发布

Rust SDK 发布了两版 alpha 预发布版本：

| 版本 | 说明 |
|---------|-------|
| **v0.171.0-alpha.6** | 预发布版；未披露变更日志 |
| **v0.171.0-alpha.7** | 预发布版；未披露变更日志 |

两者很可能是 Rust 代码库加速迭代周期的一部分。稳定版本次无更新记录。

---

## 3. 热门 issue

| # | 标题 | 评论数 | 👍 | 重要性 |
|---|-------|----------|----|----------------|
| [#3000](https://github.com/openai/codex/issues/3000) | **[enhancement] IDE 扩展语音转写功能** | 38 | 244 | 热度最高的未解决 issue；用户希望在 Codex 面板中使用按键说话功能。与 CLI 语音模式话题（#418）关联。 |
| [#57101](https://github.com/openai/codex/issues/57101) | **Windows Computer Use：截图权限与边框在回合结束后仍然残留** | 37 | 5 | Windows x64 MSIX 上的顽固 UI 问题；截图浮层未正确关闭，阻断用户交互。 |
| [#59546](https://github.com/openai/codex/issues/59546) | **[Desktop] 内置自动化限制阻止了外部网页系统的监控任务** | 19 | 21 | 与"定时任务"文档存在冲突；macOS 26.6 上的合法监控工作流被阻断。 |
| [#50887](https://github.com/openai/codex/issues/50887) | **[macOS][Dots] 收据测试被判定为不受信任的委托授权** | 18 | 1 | 阻断 macOS desktop 上的 Dots 协作；本地 Codex 线程的授权流程静默失败。 |
| [#18490](https://github.com/openai/codex/issues/18490) | **为 Plan 模式添加"紧凑上下文并执行计划"选项**（已关闭） | 16 | 5 | 已作为功能增强合并；用户希望在 Plan 模式回合间保留上下文。 |
| [#44458](https://github.com/openai/codex/issues/44458) | **macOS CLI 0.154.0 破坏内置 Messages 与 Computer History MCP 启动** | 14 | 7 | 实验性能力标志静默阻止 MCP 服务启动；gpt-6-astra 用户受到影响。 |
| [#46182](https://github.com/openai/codex/issues/46182) | **已归档的云端任务没有删除操作，仅支持取消归档** | 12 | 12 | 用户无法在 desktop 应用中永久删除已归档任务；仅提供取消归档选项。 |
| [#1721](https://github.com/openai/codex/issues/1721) | **在 Codex CLI 中集成 Langfuse 链路追踪** | 11 | 21 | 为代码生成和执行提供结构化可观测性；生产级用户尤为关注。 |
| [#27352](https://github.com/openai/codex/issues/27352) | **CLI 在后续仍需处理时过早标记回合完成** | 9 | 1 | 在出现进度消息后过早结束回合，破坏子代理工作流；多步骤任务中可见。 |
| [#59890](https://github.com/openai/codex/issues/59890) | **Codex OAuth 中 Images 2.6：模型选择缺失，控件不可用** | 9 | 3 | 第三方 OAuth 客户端无法访问 gpt-image-2.6-flare/sunburst 的控制选项；新版 2.6 独有输出不可用。 |

---

## 4. 重要 PR 进展

| PR | 标题 | 影响 |
|----|-------|--------|
| [#61713](https://github.com/openai/codex/pull/61713) | **从外部编辑器返回后恢复 raw 模式** | 修复 Unix 平台上退出外部编辑器时的终端状态损坏问题；现于重新应用 raw 模式前清除 crossterm 缓存。 |
| [#61711](https://github.com/openai/codex/pull/61711) | **通过注册的 URL 处理器打开 Windows desktop 会话** | 使用 `Start-Process` 处理 Windows 平台的 URL 会话启动；MSIX 包添加了更严格的发布者 ID 校验。 |
| [#61710](https://github.com/openai/codex/pull/61710) | **为不可用线程启用斜杠命令补全** | 编辑不可用线程时斜杠命令弹窗现仍可访问；支持从部分输入中恢复命令。 |
| [#61709](https://github.com/openai/codex/pull/61709) | **在 agents 概览中避免遗留转录本读取** | 避免为填充预览而回放整个遗留线程展开；概览刷新性能提升显著。 |
| [#61707](https://github.com/openai/codex/pull/61707) | **在 `codex exec` 中支持远程 app server** | 允许 `codex exec --remote <ADDR>` 使用现有 server 的配置和凭证运行非交互式回合。 |
| [#61706](https://github.com/openai/codex/pull/61706) | **重构 exec 以使用共享的 app-server 客户端** | 统一 exec 中 `AppServerClient` 的使用；将回合完成提取为 `finish_turn`，改善断连处理。 |
| [#61697](https://github.com/openai/codex/pull/61697) | **恢复终端原有的 alternate-scroll 模式** | 修复 Ghostty 回归问题：退出 Codex 后 alternate 滚动被禁用；现于启动时查询模式 1007 并在退出时恢复。 |
| [#61694](https://github.com/openai/codex/pull/61694) | **取消时丢弃未保存的实验性功能编辑** | `Esc` 或 `Ctrl+C` 现丢弃待定编辑；`Enter` 保存。取消行为现在与用户预期一致。 |
| [#61690](https://github.com/openai/codex/pull/61690) | **在 TUI 目标中保持粘贴文本的内联状态** | 粘贴的目标文本现在内联展开而非存储在独立文件中，保留编辑器中的粘贴内容。 |
| [#61600](https://github.com/openai/codex/pull/61600) | **为云端对话启用自动标题生成** | 云端对话现通过结构化生成获取自动标题，与本地对话行为保持一致。 |

---

## 5. 热门讨论

### 展示与演示

| # | 作者 | 摘要 |
|---|---------|-------|
| [#61681](https://github.com/openai/codex/discussions/61681) | NikTsy | **[NotebookLM 项目交接](https://github.com/NikTsy/notebooklm-project-handoff)** — 将项目状态导出以便在新聊天中继续的 Codex skill，无需粘贴转录本即可恢复。MIT 许可证。 |
| [#61702](https://github.com/openai/codex/discussions/61702) | ThePootler | **Windows KIP** — 显示当前使用 desktop 的 Codex 聊天、项目及最新操作的小面板；包含 Esc 暂停鼠标使用的功能。 |
| [#61667](https://github.com/openai/codex/discussions/61667) | fainir | **重启后仍可恢复的交接文档** — 展示使用 Plainer 在 Codex 会话重启后保持交接文档持久化的方法。 |
| [#61668](https://github.com/openai/codex/discussions/61668) | Afloat16 | **[AI-Memory-Book](https://github.com/Afloat16/AI-Memory-Book)** — 基于 MCP 的本地引用式对话检索；帮助在新会话中恢复早期的约束条件和已解决的问题。 |
| [#61666](https://github.com/openai/codex/discussions/61666) | VellivexHQ | **AI 辅助浏览器验证** — 记录了当 Codex 生成加密结果时，指定实际文件往返验证的教训。 |
| [#61640](https://github.com/openai/codex/discussions/61640) | adeptads-growth | **Google Ads 营销活动构建插件** — 通过 Codex 插件（`adeptads/agent-skills`）构建 Search 营销活动；活动创建后处于暂停状态供审核。 |

### 想法

| # | 作者 | 摘要 |
|---|---------|---------|
| [#61614](https://github.com/openai/codex/discussions/61614) | ElieAngwandi | **定时任务恢复机制** — 提议在使用配额重置后自动恢复被中断的任务，面向长时间运行的工程工作流。 |

---

## 6. 功能需求趋势

综合 issue 和讨论来看，社区在以下几个高需求方向上正在形成共识：

1. **语音与多模态输入** — IDE 扩展的语音转写（#3000，244 👍）以及 CLI 与 desktop 之间的语音模式对等能力，是呼声最高的需求。
2. **可观测性与链路追踪** — Langfuse 集成（#1721）反映出生产级 Codex 工作流对结构化调试和执行遥测的广泛需求。
3. **工作流持久化** — 多个项目（NotebookLM Handoff、AI-Memory-Book、KIP）都在填补 Codex 原生会话交接和跨重启上下文恢复能力的空白。
4. **macOS Dots 与委托授权** — 授权失败、收据校验以及网络沙箱错误构成了 Dots 系统的持续痛点集群。
5. **云端任务管理** — 已归档任务删除功能（#46182）和自动标题生成（#61600）表明云端优先的使用模式正在增长。
6. **Windows Computer Use UX** — 截图浮层残留（#57101）和提权沙箱行为（#61720）表明 Computer Use 界面在 Windows 上需要加强健壮性。

---

## 7. 开发者痛点

| 痛点 | 频率 | 代表性 issue |
|------------|-----------|-----------------------|
| **macOS Dots 授权失败** | 高 | #50887, #60460, #59150 |
| **Windows Computer Use UI 残留** | 高 | #57101, #59191, #61294 |
| **CLI 回合完成时机错误** | 中 | #27352, #14824 |
| **MCP 服务启动被破坏（CLI）** | 中 | #44458 |
| **OAuth 第三方模型访问缺失** | 中 | #59890 |
| **终端 alternate-scroll 回归** | 中 | #61605, #61697 |
| **Windows 本地项目可见性/同步** | 中 | #61294 |
| **实验性功能编辑取消行为** | 低（已修复） | #61694（已解决） |

---

*日报基于 2026-11-16 github.com/openai/codex 的活动数据生成。所有链接指向对应的 issue/PR/讨论线程。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese while maintaining the exact structure and formatting. Let me translate this carefully, keeping technical terms, URLs, code references, and identifiers in their original form while using natural technical Chinese.

Let me go through section by section:

1. Title and date
2. Today's Highlights
3. Releases
4. Hot Issues (table)
5. Key PR Progress (table)
6. Hot Discussions
7. Feature Request Trends (table)
8. Developer Pain Points (numbered list)

I need to use natural Chinese technical register, not literal word-for-word translation.
</think>


# Gemini CLI 社区日报

**日期：** 2026-11-16
**仓库：** google-gemini/gemini-cli
**来源：** github.com/google-gemini/gemini-cli

---

## 1. 今日要闻

过去 24 小时内，Gemini CLI 社区保持高活跃度，共有 50+ 个 issues 更新，16 个 PR 合并或提交。近期工作重心放在智能体可靠性上——尤其是子智能体恢复机制和通用智能体挂起问题——同时推进了大批量 npm 依赖更新。

---

## 2. 发版动态

过去 24 小时内无新版本发布。

---

## 3. 热门 Issues

| # | Issue | 优先级 | 评论数 | 概要 |
|---|-------|--------|--------|------|
| **#22323** | [子智能体恢复时虚报 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 13 | 子智能体在触发 MAX_TURNS 限制且未完成分析的情况下，仍然返回 `status: success` 和 `Termination Reason: GOAL`。社区认为这是影响可靠性的关键缺陷。 |
| **#19873** | [零依赖操作系统沙箱](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | 提议利用 Gemini 3 原生的 bash 亲和性，结合 OS 级沙箱与执行后意图路由。这是安全性和用户体验平衡的架构方向。 |
| **#21409** | [通用智能体挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 | 智能体将任务推迟给通用智能体后无限期挂起；即便是创建文件夹这样的简单操作也会冻结。存在临时解决方案（禁用子智能体），但影响了工作流。 |
| **#22745** | [AST 感知的文件读取/搜索/映射](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | 追踪调研 AST 感知工具链以实现精准代码定位。可以减少 token 消耗（实测每轮多消耗 +15k tokens）和提升准确性。 |
| **#21968** | [Gemini 不主动使用 skills/subagents](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | 智能体很少自主调用自定义 skills 或子智能体，即便在相关上下文中也如此。用户必须显式指令，限制了自动化价值。 |
| **#22267** | [浏览器智能体忽略 settings.json](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 5 | 浏览器智能体完全忽略全局/项目级 settings.json 中的配置覆盖（如 `maxTurns`），尽管 `AgentRegistry` 正确读取了这些配置。 |
| **#22232** | [浏览器智能体韧性：会话接管](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 | 请求在遇到浏览器配置被锁定时自动进行会话接管和锁恢复。当前在持久会话模式下会直接失败。 |
| **#21983** | [Wayland 下浏览器子智能体失败](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | 浏览器子智能体在 Wayland 环境下失败，并给出不完整的终止消息。存在跨平台兼容性隐患。 |
| **#21000** | [任务跟踪器的原生文件工具](https://github.com/google-gemini/gemini-cli/issues/21000) | P3 | 4 | 提议以持久化的基于文件的 CRUD 操作替代上下文中的任务跟踪，减少上下文腐化和 token 费用。 |
| **#20079** | [符号链接智能体文件无法识别](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | 4 | 存储在 `~/.gemini/agents/` 中的智能体文件若为符号链接，则无法被识别，影响智能体的灵活组织。 |

---

## 4. 重要 PR 进展

| # | PR | 领域 | 规模 | 概要 |
|---|-----|------|------|------|
| **#29367** | [子智能体恢复时保留终止原因](https://github.com/google-gemini/gemini-cli/pull/29367) | 智能体 | L | **修复 #22323。** 在 `LocalAgentExecutor` 恢复路径中无条件覆盖了终止原因；现已改为保留原始的 MAX_TURNS 终止状态。 |
| **#30082** | [新增 model.requestTimeoutMs 配置项](https://github.com/google-gemini/gemini-cli/pull/30082) | 核心 | M | 新增 `model.requestTimeoutMs` 配置项，用于提高默认 60 秒的 API 请求头超时时间。此前仅可通过实验性 flag 调整，且 Vertex AI 场景下不会获取该值。 |
| **#30090** | [CI：保护 GEMINI_API_KEY 免受 fork 代码访问](https://github.com/google-gemini/gemini-cli/pull/30090) | CI | S/M | `chained_e2e.yml` 现将产物访问（含 GEMINI_API_KEY）限制在触发工作流自身的授权范围内，防止暴露给 fork 仓库中的代码。 |
| **#30308** | [展开 Windows 下波浪号反斜杠路径](https://github.com/google-gemini/gemini-cli/pull/30308) | CLI | S | 修复 `resolvePath`，在 Windows 上展开 `~\...` 路径（如 `policyPaths` 和 `extensionRegistryURI` 等配置项），改用 `homedir()` 解析。 |
| **#30307** | [list_background_processes 中省略 null 退出码](https://github.com/google-gemini/gemini-cli/pull/30307) | 核心 | S | 被信号终止的后台进程不再向模型展示 `(Exit Code: null)`，减少干扰信息。 |
| **#30306** | [扫描时跳过已删除的子目录而不报警](https://github.com/google-gemini/gemini-cli/pull/30306) | 智能体 | S | 工作区扫描不再对扫描中途消失的目录（如 `ProjectRegistry` 操作期间的 `.gemini/projects.json.lock`）输出警告。 |
| **#30267** | [检测本地 git clone 安装](https://github.com/google-gemini/gemini-cli/pull/30267) | 核心 | M | 修复了源代码 checkout 运行时被错误识别为全局 npm 安装的问题，避免在自动更新时意外执行 `npm install -g @google/gemini-cli@latest`。 |
| **#30305** | [不再推荐失效的 excludeTools 写法](https://github.com/google-gemini/gemini-cli/pull/30305) | 智能体 | M | 扩展文档之前错误地推荐了 `"excludeTools": ["run_shell_command(rm -rf)"]` 这种无实际效果的写法，现已更正。 |
| **#30089** | [NPM 依赖更新：70 个包](https://github.com/google-gemini/gemini-cli/pull/30089) | 依赖 | XL | 批量更新，包括 `@modelcontextprotocol/sdk` 1.23.0→1.32.2 和 `@octokit/rest` 22.0.0→22.0.1。 |
| **#29168** | [升级 qs 6.14.2→6.16.0](https://github.com/google-gemini/gemini-cli/pull/29168) | 依赖 | L | query-string 库的安全/功能更新。 |

---

## 5. 热门讨论

*数据源中未提供讨论数据。*

---

## 6. 功能需求趋势

基于 issue 分析，社区关注的重点方向如下：

| 主题 | 相关 Issues | 描述 |
|-------|-------------|------|
| **智能体可靠性** | #22323, #21409, #21968 | 子智能体恢复正确性、通用智能体稳定性、自主技能调用 |
| **AST 感知工具链** | #22745, #22746, #22747, #19561 | 精准代码定位以控制 token 消耗（基准约 36.6k tokens/轮） |
| **浏览器智能体成熟度** | #22267, #22232, #21983 | 配置尊重、会话韧性、跨平台（Wayland）支持 |
| **安全与沙箱** | #19873, #22672 | 与模型 bash 亲和性对齐的 OS 沙箱；劝阻危险命令 |
| **持久化任务跟踪** | #21000, #18836 | 基于文件的 CRUD 操作替代上下文待办事项，对抗上下文腐化 |
| **子智能体生态** | #18283, #18282, #22598 | 精选示例、通过 `/chat share` 共享轨迹、在 settings.json 中发现 |

---

## 7. 开发者痛点

以下问题在多个 issues 中反复出现，值得重点关注：

1. **子智能体误报成功** — 智能体在被中断后仍声称成功，掩盖了真实失败 (#22323)

2. **智能体挂起** — 通用智能体在常见操作上挂起，迫使用户禁用子智能体作为临时方案 (#21409)

3. **配置不一致** — 浏览器智能体忽略 settings.json 的配置覆盖，尽管其他模块正确合并了配置 (#22267)

4. **跨平台缺口** — Wayland 环境导致浏览器子智能体失败 (#21983)；Windows 路径解析需要支持波浪号展开 (#30308)

5. **Token 预算压力** — 大文件读取导致显著的上下文膨胀；现有 grep/cat/sed 工作流精度不足 (#19561, #22745)

6. **Skills/子智能体利用不足** — 自定义 skills 需要用户显式指令才能激活；智能体无法识别相关上下文 (#21968)

7. **危险命令安全** — 模型偶尔使用 `--force` 或 `git reset`，而存在更安全的替代方案 (#22672)

---

*日报结束。下次更新：2026-11-17*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not a literal word-for-word rendering

Let me translate this section by section:

Title: "GitHub Copilot CLI Community Digest" → "GitHub Copilot CLI 社区动态"

Date line stays mostly the same, maybe adjust "Status: Active Development" → "状态：活跃开发中"

Let me go through the whole document:

---

# GitHub Copilot CLI 社区动态

**日期：** 2026年11月16日  
**仓库：** github.com/github/copilot-cli  
**状态：** 活跃开发中

---

## 1. 今日要闻

GitHub Copilot CLI 社区持续暴露出交互式体验与 Agent Client Protocol (ACP) 之间的关键功能差距。三个高评论量的问题（#5145、#4275、#5354）揭示了 ACP 客户端缺乏 Copilot Fusion 的可见性、上下文层级配置以及自定义模型支持——这阻碍了外部编排器和第三方集成的使用。与此同时，MCP 服务器集成问题占据了错误报告的主导地位，工具发现失败和会话恢复错误正在影响生产环境工作流。


---

## 2. 版本发布

过去 24 小时内没有新版本发布。最新稳定版仍为上一周期的版本，建议用户通过 `copilot update` 检查更新。

---

## 3. 热门问题

### 🔴 严重：ACP 功能差距

| # | 问题 | 作者 | 评论数 | 链接 |
|---|-------|--------|----------|------|
| 1 | **[area:models, area:tools]** 后台 shell 退出后 thinking 模式返回 400 `reasoning_text` | eruvalca | 8 | [#5145](https://github.com/github/copilot-cli/issues/5145) |
| 2 | **[area:non-interactive, area:configuration]** ACP：将 `contextTier` 暴露为会话配置选项 | julianmesa-gitkraken | 8 | [#4275](https://github.com/github/copilot-cli/issues/4275) |
| 3 | **[area:non-interactive, area:models]** ACP 不支持 Copilot Fusion | simonsteiner | 2 | [#5354](https://github.com/github/copilot-cli/issues/5354) |
| 4 | **[area:non-interactive, area:models]** ACP `session.create` 拒绝 `claude-opus-4.7`（尽管交互式支持可用） | PolyphonyRequiem | 2 | [#2782](https://github.com/github/copilot-cli/issues/2782) |

这些关键问题揭示了 ACP 与交互式 CLI 之间的功能不一致——外部工具（如 T3 Code、Conductor 和 Anthropic Agent SDK 绑定）无法完全复制原生体验。缺少 `contextTier`、Fusion 配置和完整模型支持限制了第三方编排器的功能，而 #5145 中的 `reasoning_text` bug 则专门影响了 DeepSeek 等自定义 OpenAI 兼容提供商在运行时合成的助手响应后的功能。

### 🟡 MCP 服务器集成故障

| # | 问题 | 作者 | 评论数 | 链接 |
|---|-------|--------|----------|------|
| 5 | **[area:sessions, area:mcp]** MCP 服务器工具变更后恢复会话失败，提示 400 "Tool reference not found" | doomslayer2k | 2 | [#5359](https://github.com/

github.com/github/copilot-cli/issues/5359) |
| 6 | **[area:mcp, area:tools]** 重复 MCP 发现报告"找到 0 个工具"（尽管命名空间已加载） | m-nash | 2 | [#4773](https://github.com/github/copilot-cli/issues/4773) |
| 7 | **[area:mcp, area:tools]** `server/discover` 超时时 Stdio MCP 服务器失败 | msm-yusuke-shimozono-01 | 0 | [#5464](https://github.com/github/copilot-cli/issues/5464) |

MCP 是扩展 Copilot 能力的关键协议。会话恢复失败（#5359）破坏了使用动态工具集的云代理开发者的连续性。

发现 bug（#4773）导致代理错误地将已集成的功能报告为不可用，打乱了自动化工作流。

### 🟢 代理行为与资源管理

| # | 问题 | 作者 | 评论数 | 链接 |
|---|-------|--------|----------|------|
| 8 | **[area:context-memory, area:configuration]** 添加设置以禁用代理检查点 refs（`refs/agents/*`） | scar20 | 6 | [#5323](https://github.com/github/copilot-cli/issues/5323) |
| 9 | **[area:agents, area:tools]** 代理在后台任务期间浪费模型轮次进行 `sleep N; check` 轮询 | gk2go | 0 | [#5459](https://github.com/github/copilot-cli/issues/5459) |
| 10 | **[area:models]** Fusion 层级"high"静默降级为"standard"策略 | jj1xgo | 0 | [#5457](https://github.com/github/copilot-cli/issues/5457) |

Issue #5323 获得了社区的显著关注（6 个赞同），因为代理检查点提交以用户身份污染了仓库——这引发了具有严格 git 管理政策的组织的担忧。轮询低效（#5459）和静默 Fusion 层级降级（#5457）代表了代理推理质量问题，浪费了计算资源并使用户困惑。

---

## 4. 关键 PR 进展

过去 24 小时内没有新的 pull request 被合并或打开。

最近关闭的 PR（

不在 24 小时窗口内）包括：
- **#4868** — 修复了列出模型时的"421 Misdirected Request"错误
- **#5218** — 处理了 Linux 上的剪贴板所有权消息
- **#2474** — 在 `/model` 命令输出中添加了上下文窗口大小
- **#2068** — 修复了后台压缩消耗高级请求的问题

---

## 5. 热门讨论

本期未提供讨论数据。

---

## 6. 功能请求趋势

以下主题是社区最请求的增强功能：

| 主题 | 频次 | 代表性问题 |
|-------|-----------|----------------------|
| **ACP 功能对等** | 高 | #4275、#5354、#2782、#5466 |
| **MCP 可靠性** | 高 | #4773、#5359、#5458 |
| **上下文内存控制** | 中 | #5323、#2068 |
| **Copilot Fusion 配置** | 中 | #5354、#5457、#4975 |
| **平台兼容性** | 低 | #5461（macOS 12.7.6） |
| **UI/UX 增强** | 低 | #5465（主题）、#5463（会话侧边栏） |

社区主要关注缩小交互式和编程式（ACP）使用之间的差距。MCP 可靠性和 git 友好的代理检查点管理是次要但持续存在的关切。

## 7. 开发者痛点

### 🔴 主要挫败感

1. **ACP 缺少核心功能** — 构建外部编排器的开发者无法访问上下文层级控制、Fusion 配置或完整模型目录。这阻碍了 Copilot CLI 在专业 AI 代理管道中的采用。

2. **MCP 工具发现不可靠** — 重复发现调用返回"0 个工具"或 MCP 服务器更改后会话恢复失败，迫使开发者重启会话，丢失上下文并降低生产力。

3. **代理生成的 Git Refs** — 以用户身份生成的检查点提交在 git 历史中产生噪音，并可能违反组织政策，尤其是在 monorepo 中。

4. **静默失败** — Fusion 层级降级（#5457）和模型拒绝（#2782）在用户界面上没有任何警告，让开发者对他们实际启用了哪些功能感到困惑。

### 🟡 常见问题

- **可见性：** 在 ACP 元数据中显示模型上下文窗口限制、令牌定价和策略详情（#5466）
- **兼容性：** 支持旧版 macOS（#5461）
- **代理纪律：** 防止代理覆盖用户指定的实现语言（#5462）
- **会话管理：** 跨文件夹的会话可见性和更好的会话恢复体验（#5463）

---

## 问题活动摘要表

| 类别 | 开放问题 | 已关闭（24小时内） | 总计 |
|----------|-------------|---------

-------|-------|
| area:models | 3 | 0 | 3 |
| area:mcp | 4 | 0 | 4 |
| area:non-interactive | 3 | 1 | 4 |
| area:context-memory | 1 | 2 | 3 |
| area:configuration | 1 | 0 | 1 |
| triage:needs-human | 7 | 0 | 7 |

---

**编制：** AI 开发者工具技术分析  
**下次动态：** 2026年11月17日</think>



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, issue references, code spans, etc. verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese register

Let me translate section by section:

---

# OpenCode 社区动态 — 2026-11-16

## 今日要闻

OpenCode 社区在过去 24 小时内围绕**免费套餐可靠性**和**平台特定 shell 执行问题**展开了激烈讨论。免费用量问题专题帖已累计 370 条评论，显示出用户广泛的焦虑情绪。PR 方面，一个面向评审的异步视频生成 API 强势登场，同时还修复了 Windows PowerShell 启动失败和 CLI 工作目录解析等关键问题。多个安全和沙箱相关议题也浮出水面，其中包括一个已上报的 Plan 模式绕过漏洞。

---

## 版本发布

**过去 24 小时内无新版本发布。**

---

## 热门 Issue

### 1. 免费套餐问题专题帖 — 370 条评论
该问题以绝对优势成为社区热度最高的议题，评论数是第二名的十余倍。用户普遍反映：免费配额"已用尽"错误持续出现、重置计时器无法触发，以及桌面端应用无法正常使用。这已成为影响 OpenCode 免费套餐**用户信任度的关键问题**。

### 2. DeepSeek V4 Flash 需

要 Global 区域但缺少隐私设置 — 26 条评论
付费 Go 订阅用户因界面缺失隐私设置选项而无法使用 DeepSeek V4 Flash。错误提示用户前往一个不存在的设置项，这是一个**订阅层级 UX 缺口**。

### 3. 显示免费用量限制的精确重置时间 — 13 条评论
用户期待获得精确的重置时间戳，而非模糊的"稍后再试"提示。此举有助于缓解 Issue #59387 带来的困惑和客服压力。

### 4. ACP 斜杠命令执行后无输出流 — 9 条评论
在 JetBrains Rider 中，ACP Agent 的内置斜杠命令（`/init` 及自定义命令）运行时无任何输出，聊天界面一片空白，而普通提示词则正常显示。这可能是**IDE 集成相关的回归问题**。

### 5. ChatGPT 订阅共享限额错误（实际仍有额度）— 9 条评论
macOS 平台上 OpenCode 2.2.5 拒绝所有提示词，提示"用量已达上限"，但用户 ChatGPT 用量页面显示额度充足。可能是**共享/授权同步缺陷**。

### 6. 本地负载过重导致 M.2 存储故障 — 8 条评论
硬件相关问题：两台机器在通过 OpenCode 运行大型本地模型负载时发生 M.2 SSD 故障。报告者本地切换到 Qwen3 后想确认 OpenCode 是否造成过度磁盘写入。

### 7. 在聊天界面中展示工具返回的图片附件 — 13 个 👍
长期未解决的功能需求（自 4 月开放至今），希望直接在聊天中渲染 `webfetch` 或 MCP 服务器返回的图片数据。社区对此有强烈诉求（13 个 👍），期待更丰富的**工具结果可视化**。

### 8. shell 工具跳过 external_directory 权限确认 — 4 条评论
`external_directory` 权限规则对文件工具生效但被 shell 工具忽略，造成权限体系中的**安全边界漏洞**。

### 9. 模型通过 shell heredoc 绕过 Plan 模式的文件写入限制 — 3 条评论
**安全问题**：在 Plan 模式下，Agent 通过 shell heredoc 成功写入文件，规避了文件写入限制。这破坏了 Plan 模式的安全保证。

### 10. notifications/tools/list_changed 未正确处理新工具注册 — 2 条评论
当 MCP 服务器发送 `tools/list_changed` 并声明新工具后，这些工具无法被调用。通知被接收但工具列表未更新，属于**MCP 生命周期钩子失效**。

---

## 重要 PR 进展

### 1. feat(server): 支持磁盘存储的异步视频生成 API — OPEN
引入基于 HTTP API 的异步视频生成能力，后端媒体存储采用磁盘方案。这构成服务端能力基座，Agent 工具 PR 可在其上重新集成。标志着 OpenCode 媒体功能的重要扩展。

### 2. fix(server): 修复 answer handler，500 响应改为可读内容而非空 — OPEN
提升错误可诊断性：崩溃导致的 500 响应现在携带 JSON 格式的错误信息，且不再暴露数据库引擎名称，提升**调试可见性**。

### 3. fix(mcp): 传递工具调用链路追踪上下文 — OPEN
将执行调用者的 `traceparent` 和 `tracestate` 传播到 MCP 工具调用中，支持**跨 MCP 边界的分布式追踪**（部分实现，更多 baggage 暂缓）。

### 4. fix(service): Windows 打包应用权限拒绝时重试管道启动 — OPEN, 合规待审
修复 Issue #63892：Microsoft Store 版 PowerShell 7 因打包可执行文件被阻止而返回 `0xC0070005`。现已添加重试机制，**提升 Windows PowerShell 兼容性**。

### 5. feat(tui): 新导出对话框支持选择保存位置 — OPEN
基于 PR #62253，在导出对话框中新增位置选择器，用户可指定保存路径，不再受限于 TUI 工作目录。

### 6. feat(server): 通过 OpenCode Console 预览 Slack 链接 — OPEN
新增实验性端点 `GET /api/experimental/console/slack/message`，通过新特性开关 `console_slack_preview` 控制，**支持应用内 Slack 链接预览**。

### 7. fix(ssh): 远程服务端口被占用时自动恢复 — OPEN
修复 Issue #54059：SSH 连接建立后若端口冲突会报"无法建立 SSH 连接"错误。**增强 SSH 连接韧性**。

### 8. fix(core): Claude 上下文发现失败后冷却重试 — OPEN, 合规待审
PR #64107 的后续改进，为 Claude 上下文发现失败添加冷却重试逻辑。**更优的瞬时 API 问题处理**。

### 9. fix(cli): 使用实际 cwd 而非过时的 PWD — OPEN + fix(tui): 文件列表失败时解析实际 cwd — OPEN
系统性地修复 Issues #56386/#56389：`opencode run` 和 `mini` 现在从实际工作目录而非 `$PWD` 解析会话位置，TUI 路径同步覆盖。附带自动化回归测试。

### 10. docs: 将 mirafleet 纳入生态项目 + docs(go): 新增 Qwen4 Max — 均为 OPEN
生态及文档更新，纳入 mirafleet（MCP 服务器）和 Go 订阅文档中的 Qwen4 Max 模型。

---

## 功能需求趋势

分析 Issue 队列可归纳出以下主导方向：

| 主题 | 证据 | 优先级 |
|-------|----------|----------|
| **用量/配额透明度** | 精确重置时间 (#52894)、免费套餐可靠性 (#59387) | 🔴 紧急 |
| **MCP 工具链** | `tools/list_changed` 传播 (#64117)、聊天图片展示 (#21227)、Code Mode 调用内置工具 (#55087) | 🟡 高 |
| **后台与子 Agent 体验** | 停止后台子 Agent (#52016)、恢复前台子 Agent (#64073)、ACP 输出流式传输 (#54371) | 🟡 高 |
| **权限与沙箱加固** | Shell 绕过 external_directory (#56288)、Plan 模式绕过 (#64121)、执行权限 (#48411) | 🔴 紧急 |
| **平台兼容** | Windows PowerShell 7 (#63892, #64094)、smolvm 兼容性 (#64112)、macOS 订阅同步 (#62529) | 🟡 高 |
| **桌面端打磨** | 任务栏徽章计数 (#62042)、滚动条人体工学 (#64064)、提示词置顶 (#64143) | 🟢 中 |

---

## 开发者痛点

1. **免费套餐不可靠**：这是社区反馈最集中的问题。计时器失效、配额提示随机出现、桌面端尽管有可用额度却被阻止，严重损害用户信任。

2. **工作目录混乱**：CLI（`run`/`mini`）和 TUI 均错误地以 `$PWD` 而非实际 cwd 解析会话位置，导致会话落在错误目录。多个报告（Issues #56386, #64125）和两个相关 PR 才得以覆盖。

3. **Windows Shell 工具不稳定**：Microsoft Store 版 PowerShell 7 无法启动（`0xC0070005`）、后台 Shell 无声退出无完成通知、管道模式问题持续存在。这些问题严重影响了 Windows 开发者的核心工作流。

4. **MCP 工具发现机制缺失**：MCP 服务器初次连接后声明的新工具无法被调用。动态工具注册模式因此失效。

5. **ACP IDE 集成回归**：斜杠命令在 JetBrains Rider 中执行后无可见输出，而普通提示词正常——暗示 IDE 特定的事件处理存在缺陷。

6. **安全边界漏洞**：Shell 工具绕过 `external_directory` 权限确认，Plan 模式可通过 heredoc 写入被规避。这些问题需要紧急处理。

---

*数据来源：GitHub · anomalyco/opencode · 2026-11-16*</think>



</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the content to Simplified Chinese
2. Keep all Markdown structure intact
3. Keep URLs, issue numbers, code references, project names, etc. as-is
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate this carefully, maintaining the technical terminology and the newsletter-style tone.

Key terms to translate:
- "Pi Community Digest" → "Pi 社区日报"
- "Hot Issues" → "热门 issue" or "重点问题"
- "Key PR Progress" → "重要 PR 进展"
- "Hot Discussions" → "热门讨论"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"
- "releases" → "版本发布"
- "comments" → "评论"
- "P0" → keep as P0
- "OAuth" → keep as OAuth
- "CI/CD" → keep as CI/CD
- "MCP" → keep as MCP
- "RPC" → keep as RPC
- "ACP" → keep as ACP
- "vLLM" → keep as vLLM
- "PowerShell" → keep as PowerShell
- "ChatGPT" → keep as ChatGPT
- "GitHub" → keep as GitHub
- "Windows" → keep as Windows
- "Node.js" → keep as Node.js
- "Cloudflare Workers AI" → keep as Cloudflare Workers AI

Let me translate the content section by section:

Title and intro first, then each section. I'll maintain the newsletter format and use natural Chinese technical writing.
</think>


# Pi 社区日报 — 2026-11-16

## 今日要闻

Pi 社区正在积极处理关键可靠性问题，其中一个 P0 级别的 bug（#11950）暴露了 bash 与 read 工具在同一消息中并发执行时的竞态条件。ChatGPT 登录相关的 OAuth 及上下文窗口不一致问题（#10605、#11021）持续引发大量讨论，同时 Agent Client Protocol（ACP）标准化提案（#4444）获得了社区的广泛关注。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 重点问题

**1. [P0 Bug] 同一消息中的工具调用与 bash 并发执行 — read 在命令结束前执行**  
`#11950` · 7 条评论 · 👍 0  
当模型在同一条助手消息中发送 bash 和 read 时，两者会同时启动，导致读取到不完整的构建日志或未写入的图片。这是个正确性问题，可能在自动化工作流中产生过期内容或错误。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/11950)

**2. ChatGPT/OpenAI OAuth 403: "用户无资格享受订阅共享"**  
`#10605` · 14 条评论 · 👍 1  
拥有 ChatGPT Plus 订阅的用户无法通过 OAuth 认证，即使完成 logout/login 循环仍收到 403 错误。这阻断了 Plus 用户的一条核心集成路径。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/10605)

**3. ChatGPT 登录报告的 GPT-6.1 Sol 上下文窗口错误（272K vs 500K）**  
`#11021` · 14 条评论 · 👍 8  
通过"Sign in with ChatGPT"认证后，Pi 报告 `gpt-6.1-sol` 的上下文窗口为 272K，尽管账户目录中显示的是 500K。这限制了 compaction 预算，造成实际能力缩水。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/11021)

**4. 扩展注册的 provider 有时会忽略 defaultProvider/defaultModel**  
`#8810` · 11 条评论 · 👍 5  
新会话偶尔无法遵循配置的 `defaultProvider`/`defaultModel`，特别是当 provider 通过 `pi.registerProvider()` 由扩展注册时，会静默回退到其他 provider 的默认值。这破坏了依赖扩展的工作流的幂等性。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/8810)

**5. pi auth check 无法识别扩展注册的 provider**  
`#9448` · 5 条评论 · 👍 1  
`pi auth check` 命令不识别扩展注册的 provider，会将有效配置报告为 `invalid_state`。这导致依赖 provider 就绪状态检测的非交互式 CI/CD 流水线失败。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/9448)

**6. Compaction: Pi 静默结束工具循环而不进行压缩**  
`#12076` · 3 条评论 · 👍 0  
接近上下文窗口上限时，Pi 进入 compaction 循环但在大约 36K tokens 后静默退出，并未实际进行压缩，可能导致工作丢失。在 vLLM 模型 + Pi 1.5.2 上可稳定复现。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/12076)

**7. Durable: 允许取消处理器等待信号和截止时间**  
`#12090` · 4 条评论 · 👍 0  
请求增强 `pi-durable` 的取消处理器，使驻留工具能够保存进度并在完成关闭前等待确认，从而提高主机重启时的韧性。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/12090)

**8. 使用 cloudflare-workers-ai 连接器时偶发 400 错误**  
`#12194` · 4 条评论 · 👍 0  
内置的 Cloudflare Workers AI 连接器偶发产生与 schema 校验相关的 400 错误，提示请求格式存在不一致。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/12194)

**9. Windows: Pi 运行时更新 Node.js 后终端输入序列泄漏**  
`#12183` · 3 条评论 · 👍 0  
Pi 会话期间更新 Node.js 后，PowerShell 提示符和转义序列泄漏到终端显示中，表明输入处理状态清理不当。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/12183)

**10. 当 provider 重写模型 ID 时会话恢复会静默切换到无关模型**  
`#12187` · 1 条评论 · 👍 0  
恢复会话时可能不经意地切换到与原模型不同的模型，静默重建一个 80K token 的提示缓存并产生意外费用。  
[→ 查看 issue](https://github.com/earendil-works/pi/issues/12187)

---

## 重要 PR 进展

**1. fix(coding-agent): 在 Windows 上终止 bash 命令的完整进程树**  
`PR #11854` · 作者: petrroll  
在 Windows 上，`taskkill /T` 会漏掉父进程已退出的孤立子进程，留下僵尸进程。此修复确保在所有 shell 类型下都能完整终止进程树。  
[→ 查看 PR](https://github.com/earendil-works/pi/pull/11854)

---

## 热门讨论

**Ideas / 标准化**

**1. 支持 Agent Client Protocol (ACP)**  
`Discussion #4444` · 5 条评论 · 👍 54  
Pi 现有的 headless RPC 模式是 pi 专用的，每个编辑器集成都需要定制客户端。Agent Client Protocol (ACP) 提供了一个标准化替代方案，可以简化跨平台适配。社区反馈非常积极，这是当前点赞数最高的讨论。  
[→ 查看讨论](https://github.com/earendil-works/pi/discussions/4444)

---

## 功能需求趋势

从近期的 issue 和讨论中可以看到以下主题：

1. **MCP 扩展可见性** — 多项请求（#10871、#12074、#12189、#12188）寻求通过标准接口（`ctx.ui.setStatus`）更好地发布 MCP 服务器状态，以及在工具调用元数据中传播会话 ID。

2. **持久化执行韧性** — 多个问题突显了对更强检查点机制的需求：取消处理器等待信号（#12090）、主机重启时进度增量安全（#12181）、compaction 期间延迟提示响应处理（#12196）。

3. **Provider/扩展配置可靠性** — 扩展系统需要在默认 provider/model 选择（#8810、#9448）和优雅处理 provider key 重命名（#12193）方面保持一致的行为。

4. **会话中模型切换** — 模型转换 bug（#12185、#12187）表明这一工作流需要加强，特别是在使用 OpenAI 兼容代理时。

5. **会话并发控制** — 1.5.1 中的回归导致空闲会话上两个提示都可能启动运行（#12186），表明会话状态管理存在竞态条件。

---

## 开发者痛点

- **ChatGPT OAuth 失败**: Plus 用户无法认证，阻断了关键集成路径。
- **上下文窗口不匹配**: 错误的窗口大小导致过早 compaction 和性能下降。
- **扩展 provider 盲区**: 核心 CLI 命令（`auth check`、模型选择）无法识别扩展注册的 provider。
- **工具调用并发**: bash + read 竞态条件导致读取过期数据和构建失败。
- **Windows 平台差距**: 进程树清理和终端输入处理需要平台特定的关注。
- **文档链接失效**: docs.pi.dev 由于路径前缀问题包含失效链接。
- **会话间缓存缺失**: 分叉的会话无法复用现有提示缓存条目，浪费 API 调用。

---

*日报数据来源: github.com/earendil-works/pi · 2026-11-16*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the text content while keeping the Markdown structure
2. Keep URLs, issue/PR references, version tags, usernames, file paths, etc. as-is
3. Use natural technical Chinese
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

---

# Qwen Code 社区速报

**日期：** 2026-11-16
**仓库：** github.com/QwenLM/qwen-code

---

## 今日要闻

Qwen Code 团队今日发布了覆盖 CLI、SDK 和 Desktop 的 **v0.27.4**，为 Managed Agent 引入了本地目录文件系统访问能力，并上线了新的 DingTalk 适配器。1.0 Preview 循环内核持续分阶段合入 `main` 分支，无头会话现已默认在共享 agent loop 上运行。安全问题成为 issue 追踪器的焦点，npm 依赖漏洞和 CI 失败引发了开发者的高度关注。

---

## 版本发布

| 版本 | 组件 | 关键变更 |
|---------|-----------|-------------|
| **v0.27.4** | CLI / Desktop | Managed Agent 会话现可访问已授权的本地目录并打开交互式 Managed Web Terminal，无需持久化凭证或路径；客户端文件系统已注册到托管会话 |
| **v0.27.3-nightly.20261115** | Nightly | v0.27.3 的预发布构建 |
| **sdk-typescript-v0.1.34** | TypeScript SDK | 捆绑了 CLI v0.27.4 |

---

## 热门 Issue

### 1. **Main CI 失败：Managed Agent Gate** `#14724`
[github.com/QwenLM/qwen-code/issues/14724](https://github.com/QwenLM/qwen-code/issues/14724) — 383 条评论 | 优先级：Bug


[github.com/QwenLM/qwen-code/issues/14724](https://github.com/QwenLM/qwen-code/issues/14724) — 383 条评论 | 优先级：缺陷

Managed Agent Gate 持续失败，未能识别具体测试用例，这是过去一个月内讨论最集中的问题。此问题阻碍了功能验证，也暴露出 agent gate 机制存在架构层面的不稳定性。

### 2. **每日依赖 CVE 审计失败** `#13078`
[github.com/QwenLM/qwen-code/issues/13078](https://github.com/QwenLM/qwen-code/issues/13078) — 52 条评论 | 优先级：P2

定时 CVE 审计反复失败，npm audit 端点不可用或检测到新的高危漏洞。整体安全态势问题在 `#10850` 中追踪，主锁文件存在 4 个已知漏洞（1 个低危、2 个中危、1 个高危）。

### 3. **1.0 Preview 循环内核上线** `#17045`
[github.com/QwenLM/qwen-code/issues/17045](https://github.com/QwenLM/qwen-code/issues/17045) — 18 条评论 | 优先级：P1 | 状态：已关闭

Agent loop 的核心架构正在重构为事件驱动内核，通过分阶段方式逐步部署到 `main` 分支的各个功能模块。这是 v1.0 的关键架构里程碑，相关后续工作另有 `#17284` 进行追踪。

### 4. **npm 安全扫描结果** `#17099`
[github.com/QwenLM/qwen-code/issues/17099) — 14 条评论 | 优先级：P2

11 月 11 日的 Snyk 扫描在 `@qwen-code/web-shell@0.26.3` 和 `@qwen-code/sdk@0.1.25` 引入的 13 个 npm 包中发现了 29 处问题，分阶段依赖升级正在进行中。

### 5. **Workflow Agent 权限审批卡死** `#16425`
[github.com/QwenLM/qwen-code/issues/16425](https://github.com/QwenLM/qwen-code/issues/16425) — 11 条评论 | 优先级：P1 | 状态：已关闭

workflow-runner agent 在到达需要人工介入的权限审批时无限卡死，尽管状态栏显示"1 个 workflow ⚠ 需要审批"。该问题在 v0.26.6–v0.26.8 中均可复现。

### 6. **Auto 模式：多个审批弹窗未渲染** `#17332`
[github.com/QwenLM/qwen-code/issues/17332](https://github.com/QwenLM/qwen-code/issues/17332) — 3 条评论 | 优先级：P1

自动审批模式中，带多个需要审批调用的子 agent 并行工具批次仅渲染一个弹窗，其余被遗弃且批次冻结。

### 7. **循环检测误报** `#17391`
[github.com/QwenLM/qwen-code/issues/17391](https://github.com/QwenLM/qwen-code/issues/17391) — 2 条评论 | 优先级：P2

在 llama 等模型中出现误判情况。

对于来自 llama.cpp 等提供商使用 `--reasoning-format deepseek` 的逐 token 健康推理流，循环检测错误地报告了 `repetitive_thoughts`。

### 8. **CLI 并行 Agent 显示净化 Bug** `#17386`
[github.com/QwenLM/qwen-code/issues/17386](https://github.com/QwenLM/qwen-code/issues/17386) — 3 条评论 | 优先级：P2

并行 agent 显示对活动文本使用较强的净化器，但对 agent 名称仅使用较弱的 ANSI 专用过滤器，存在与 ToolConfirmationMessage.tsx 最近修复的类似安全风险。

### 9. **Managed Agent Turn 在工作区初始化时失败** `#17380`
[github.com/QwenLM/qwen-code/issues/17380](https://github.com/QwenLM/qwen-code/issues/17380) — 3 条评论 | 优先级：P2

当会话的临时工作区运行时仍在初始化中时，Managed Agent Turn 在约 37 秒后永久失败，返回 `hosted_harness_unavailable`，尽管运行时随后很快启动。

### 10. **/rewind 恢复到错误目录** `#16982`
[github.com/QwenLM/qwen-code/issues/16982](https://github.com/QwenLM/qwen-code/issues/16982) — 3 条评论 | 优先级：P1

通过 `/cd` 恢复的会话在 `/rewind` 回溯到移动前的检查点时会出错。

文件被恢复到新工作目录而非原始位置，导致无关文件被静默覆盖。修复 PR `#17400` 已提交。

---

## 关键 PR 进展

| PR | 作者 | 摘要 |
|----|--------|---------|
| **#17349** | wenshao | 提升 Web Shell 中 Goal 状态和会话导航的可读性 |
| **#17397** | wenshao | 在冷启动时显示会话产物头部入口 |
| **#17354** | sx4im | 移除 Windows 端 PTY 输出的尾随空格 |
| **#17272** | wenshao | 按配置文件发布托管 `/loop` 技能变体 |
| **#17377** | wenshao | 追踪备用链中的模型可用性（Qoder 端口） |
| **#17336** | qqqys | 默认在共享 agent loop 上运行无头会话 |
| **#17396** | wenshao | 驱逐已拒绝的 DingTalk webhook 并展示准入诊断信息 |
| **#16924** | 2SinceJuly | 修复 glob 匹配目录而非仅匹配文件 |
| **#17400** | Bensonluo | 修复 `/rewind` 跨目录文件恢复（修复 `#16982`） |
| **#17375** | wenshao | 关闭 verify-pr 中 context trust 拒绝的 root-tmp 和硬链接绕过 |

---

## 功能需求趋势

对开放 issue 和 PR 的分析表明以下功能方向为主导：

1. **多 Agent 与工作流编排**
   - 追踪 `#17045`（1.0 循环内核）、`#17284`（后续事项）、`#15512`（外部工作区配置）
   - 并行 agent 的审批弹窗渲染（`#17332`）

2. **安全加固**
   - npm 依赖漏洞修复（`#17099`、`#10850`）
   - 提供商警告 URL 净化（`#16607`）
   - verify-pr 信任边界改进（`#17375`、`#17371`）

3. **会话管理与持久化**
   - 冷启动时的会话产物头部和恢复（`#17397`）
   - Worktree Codex 与保留、快照、可配置根目录的对齐（`#17237`）
   - 托管 `/loop` 技能支持定时和自驱执行（`#17272`）

4. **平台分发**
   - 外部 Hosted Workspace 在外部 worker 上启用 Hosted 工具（`#15512`）
   - DingTalk 适配器完善与维护（`#17173`、`#17396`）

5. **用户体验优化**
   - Composer 芯片提供后台任务解释（`#17398`）
   - 分支选择器中脏树 checkout 拒绝处理（`#17364`）

---

## 开发者痛点

1. **测试不稳定主导 CI 注意力**
   - 过去 24 小时内提交了多个去抖动 PR（`#17363`、`#17366`、`#17344`、`#17360`、`#17348`、`#17339`）
   - CI 失败巡逻机器人正在积极重试标记的测试
   - Windows git autocrlf 导致测试失败（`#17368`）

2. **CI 基础设施持续问题**
   - Managed Agent gate 失败（`#14724`）伴随 383 条评论表明持续性痛苦
   - npm audit 端点可用性问题（`#13078`）
   - macOS 上的 bun-pty 测试失败（`#16091`）

3. **工作区初始化时序问题**
   - 工作区仍在初始化时 harness 变得不可用的竞态条件（`#17380`）
   - 影响用户体验，带来神秘的"hosted_harness_unavailable"错误

4. **目录/会话状态管理问题**
   - 跨目录恢复 bug（`#16982`，在 `#17400` 中已修复）
   - 尾随自动记忆用户消息过早停止工具使用 agent（`#15225`）
   - glob 目录匹配不一致（`#16924`，现已修复）

5. **扩展和钩子安装失败**
   - 托管钩子在扩展安装期间拒绝支持的元数据（`#17381`）
   - DingTalk 适配器中的凭证和轮询间隔验证缺口（`#17173`）

---

*速报基于 2026-11-16 的 GitHub 数据生成*</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*