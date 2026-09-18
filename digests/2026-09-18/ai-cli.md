# AI CLI 工具社区动态日报 2026-09-18

> 生成时间: 2026-09-18 00:44 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this English report into Chinese, following specific rules about preserving formatting and using natural technical Chinese register. Let me translate carefully while maintaining all the Markdown structure, tables, links, code references, etc.</think>

# 跨工具 AI CLI 生态系统报告

**日期：** 2026-09-18

---

## 1. 生态系统概览

AI 编程助手生态系统正处于快速扩张阶段，七款主流工具在 CLI、桌面端和 IDE 扩展层面展开竞争。Anthropic、OpenAI、Google、GitHub、Anomaly、独立开发者 Earendil 以及阿里巴巴的 Qwen 各自采用不同的架构理念，但在核心能力上趋于一致：自主智能体、多步骤任务执行、通过 MCP/ACP 协议的工具集成，以及持久化的会话管理。各平台呈现差异化定位：Claude Code 押注 Mods 框架的可扩展性，Codex 领跑语音/远程控制功能，Qwen Code 瞄准浏览器自动化，OpenCode 则专注于 TUI 打磨。平台一致性仍是难题——Windows 平台兼容性缺陷、跨 IDE 行为不一致、认证流程摩擦等问题在所有工具的反馈渠道中均占据主导。

---

## 2. 活跃度对比

| 工具 | Issues（显示前 30） | PRs（关键更新） | Discussions（显示前） | Releases（24h） |
|------|----------------------|-------------------|------------------------|----------------|
| Claude Code | 50 | 3 | 0 | ✅ v2.1.275 |
| OpenAI Codex | 50 | 20 | 11 | ✅ v0.155.0, v0.156.0-alpha |
| Gemini CLI | 50 | 10 | 0 | ✅ v0.62.0-nightly |
| GitHub Copilot CLI | 50 | 0 | 0 | ✅ v1.0.86, v1.0.86-2 |
| OpenCode | 50 | 20 | 0 | ❌ 无 |
| Pi | 50 | 10 | 0 | ❌ 无 |
| Qwen Code | 50 | 10 | 0 | ✅ v0.24.0, v0.24.0-nightly |

**关键观察：**

- 所有工具在 Issues 界面均显示 50 条记录，说明漏洞发现机制活跃
- OpenCode 和 OpenAI Codex 的 PR 活跃度最高（各 20 条），迭代速度领先
- OpenAI Codex 是唯一在 Discussions 板块有明显活跃度（11 条讨论）的工具；其他工具主要依赖 Issues 渠道
- 过去 24 小时内有六款工具发布了更新——整个生态保持着高频发布节奏

---

## 3. 共同的功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|-------------------|----------------|----------------|
| **会话持久化与恢复** | Claude Code, OpenAI Codex, OpenCode, Pi, Qwen Code | 可迁移的会话、崩溃后状态恢复、跨设备连续性 |
| **MCP/ACP 服务端可靠性** | Claude Code, OpenAI Codex, GitHub Copilot CLI | 提供商兼容性（Ollama、LM Studio、OpenRouter、Bedrock）、认证修复、连接弹性 |
| **Windows 平台一致性** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Qwen Code | 沙箱故障、文件锁、路径处理、代码签名验证 |
| **可扩展性 / 插件系统** | Claude Code, GitHub Copilot CLI, OpenCode, Qwen Code | 自定义智能体、技能发现、插件禁用开关、钩子接口 |
| **终端 / IDE 体验优化** | 所有工具 | 焦点保持、滚动/折叠行为、流式输出、Emoji/Unicode 处理 |
| **上下文与 Token 管理** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Pi | 大窗口下的预算缩放、缓存策略、Token 归属透明度 |
| **认证与权限** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode | 持久化权限、OAuth 可靠性、权限提示精简 |
| **安全加固** | Claude Code, Gemini CLI, Qwen Code | 沙箱化（bwrap、Windows Sandbox）、权限规则绕过、输入清理 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------------|-------------|---------------------|
| **Claude Code** | 通过 Mods 框架实现可扩展性 | 高级用户、企业级部署 | 函数钩子、深度编程控制；优先保障桌面端稳定性 |
| **OpenAI Codex** | 语音与远程控制、多模型灵活性 | 移动端/远程工作流 | 实时语音转写、ChatGPT 应用集成；VS Code 扩展投入巨大 |
| **Gemini CLI** | 智能体推理、沙箱安全 | 安全敏感型开发者 | 零依赖 OS 沙箱、事件驱动架构、显式意图路由 |
| **GitHub Copilot CLI** | GitHub 生态深度集成 | GitHub 用户、Azure DevOps 团队 | 与 GitHub Actions 紧密耦合、GitHub 专用 MCP 工具 |
| **OpenCode** | TUI 打磨、结构化导出 | CLI 优先开发者 | 会话用量 JSON/CSV 导出、Markdown 渲染、终端性能优化 |
| **Pi** | 提供商弹性、Azure/Foundry 支持 | Azure 企业用户 | 指数退避、畸形错误处理、Azure Foundry 部署支持 |
| **Qwen Code** | 浏览器自动化、动态工作流 | Web 开发者、自动化团队 | Chrome 原生消息转发、bwrap 沙箱、目标-运行时简化 |

---

## 5. 社区活力与成熟度

**最活跃（按 PR 速度）：**
- **OpenCode**（20 条 PR）—— 迭代速度最快；聚焦 TUI 打磨和崩溃预防
- **OpenAI Codex**（20 条 PR + 11 条 Discussions）—— 社区参与度最广（Discussions 活跃）；多端并发开发（CLI、Desktop、VS Code）

**快速迭代中：**
- **Qwen Code**（10 条 PR，v0.24.0 发布）—— 桌面端应用上线展现激进发布节奏
- **Claude Code**（3 条 PR，v2.1.275）—— 发布聚焦、变更日志清晰；Mods 计划推动社区参与（195 条评论）

**稳定响应型：**
- **Gemini CLI**（10 条 PR）—— 持续夜间构建；社区活跃讨论沙箱架构
- **Pi**（10 条 PR）—— 小众但参与度高；错误处理改进展现生产级成熟度

**能见度较低：**
- **GitHub Copilot CLI**（24h 内 0 条 PR）—— 仅发布更新；Issue 量大但 PR 活跃度低

**成熟度信号：**
- OpenAI Codex 和 Claude Code 的 Issue 分类最精细（P1/P2 标签、详细的复现步骤）
- OpenCode 和 Qwen Code 的 "下一版本修复" 响应最快
- 除 Pi 外所有工具都有专属 Discord/社区频道（GitHub 数据中未体现）

---

## 6. 趋势信号

**来自社区反馈的行业趋势：**

1. **可扩展性成为竞争壁垒** —— Claude Code 的 Mods 提案（195 条评论）表明行业正从纯代码生成向可编程 IDE 平台演进。预计其他厂商将加速推进钩子/脚本接口。

2. **多设备会话连续性** —— 会话交接（Claude Code）、远程控制（OpenAI Codex）、跨会话持久化（OpenCode）表明市场正在突破单机工作流。

3. **Windows 成为问题平台** —— 本期简报中每款工具都有未解决的 Windows 特定缺陷（沙箱故障、文件锁、路径处理、代码签名）。Windows 支持是全行业的持续工程投入。

4. **MCP/ACP 协议碎片化** —— 提供商兼容性问题（Ollama、LM Studio、OpenRouter、Bedrock、Azure Foundry）揭示 MCP 标准化尚未成熟。开发者面临集成摩擦。

5. **语音优先界面正在兴起** —— OpenAI Codex 的 `/voice` 功能和实时转写支持表明语音驱动的 CLI 交互正在成为差异化能力。

6. **上下文预算不透明** —— 多款工具（Claude Code、OpenAI Codex、Pi、Qwen Code）面临 Token 归属不准确、缺少子智能体成本追踪、百分比预算在大窗口失效等投诉——表明 Token 管理是尚未解决的 UX 问题。

7. **安全加固进行中** —— 沙箱化举措（Gemini CLI 零依赖方案、Qwen Code 的 bwrap 基础）以及各工具的权限规则修复，反映出行业正在加强对提示注入和工具滥用的防护。

**参考价值：**

- 对 **平台工程师**：Windows 一致性和跨 IDE 兼容性是全行业未解决的难题
- 对 **企业架构师**：会话持久化、认证可靠性和 MCP 提供商兼容性需逐案验证
- 对 **工具开发者**：基于 Issue 量，可扩展性、插件生态和终端 UX 是投入产出比最高的投资方向

---

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report into Chinese (Simplified), following the specific rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the exact structure and keeping technical terms in their original form where appropriate.</think>

# Claude Code Skills 社区动态报告

**数据来源：** github.com/anthropics/skills | **截至：** 2026-09-18

---

## 1. 热门技能排行

该仓库共有 50 个 PR（技能），大部分未收到直接讨论。以下根据时效性、创新性和生态相关性，列出最值得关注的提交：

| # | PR | 作者 | 状态 | 简介 |
|---|-----|--------|--------|---------|
| 1 | **[#1771](https://github.com/anthropics/skills/pull/1771)** proofcore-contract-auditor | ProofCore-Protocol | OPEN | Web3 技能，可对 Solidity/Rust 智能合约进行自动化静态分析，通过零存储 Merkle 协议将审计证明锚定到 TON 区块链。 |
| 2 | **[#1703](https://github.com/anthropics/skills/pull/1703)** md2video-audio | 70v-Yoyo | OPEN | 零成本技能，将 Markdown 文档编译为专业 MP4 视频，配合 Marp 转换管道实现逼真人声旁白。 |
| 3 | **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder fix | Kuldeeep18 | OPEN | 修复 MCP ≥2.0.0 `streamable_http_client` 导入重命名问题，支持通过 `create_mcp_http_client` 配置自定义请求头。 |
| 4 | **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator trigger eval fix | MartinCajiao | OPEN | 解决触发评估误报问题：每工作进程命令探测竞争、Windows 管道故障、运行时失败错误传递负例。 |
| 5 | **[#525](https://github.com/anthropics/skills/pull/525)** pyxel | kitao | OPEN | Python/Pyxel 复古游戏开发技能，支持确定性无头运行、帧检查和状态验证。 |
| 6 | **[#1615](https://github.com/anthropics/skills/pull/1615)** scnet-hpc | lql341 | OPEN | 基于配置文件的 SSH/Slurm 工作流技能，用于 SCNet HPC 集群操作，包括作业提交和加速器指导。 |
| 7 | **[#1628](https://github.com/anthropics/skills/pull/1628)** Hivemind | Hanishchow | OPEN | 多智能体编排技能，将工作委托给免费模型上的无头 opencode 工作者，同时由 Claude Code 担任唯一规划者/审查者。 |
| 8 | **[#1627](https://github.com/anthropics/skills/pull/1627)** buffer-api | JPeetz | OPEN | Buffer GraphQL API 技能，用于跨 AI 代理（Claude、Cursor、Codex 等）的社交媒体调度与管理。 |

---

## 2. 社区需求趋势

Issue 讨论揭示了清晰的需求方向：

| Issue | 评论数 | 主题 |
|-------|----------|-------|
| **[#492](https://github.com/anthropics/skills/issues/492)** 安全： anthropic/ 命名空间下的社区技能 | **43** | **信任与安全** — 社区技能在 `anthropic/` 命名空间下冒充官方技能，存在信任边界漏洞。 |
| **[#228](https://github.com/anthropics/skills/issues/228)** 启用组织级技能共享 | **16** | **协作** — 用户希望组织内共享技能库，无需手动文件传输。 |
| **[#556](https://github.com/anthropics/skills/issues/556)** run_eval.py 触发率 0% | **12** | **评估基础设施** — 核心测试流水线无法可靠触发技能。 |
| **[#1329](https://github.com/anthropics/skills/issues/1329)** compact-memory 技能提案 | **9** | **智能体记忆** — 对持久化智能体状态的紧凑符号表示法的需求。 |
| **[#412](https://github.com/anthropics/skills/issues/412)** agent-governance 技能 | **6** | **AI 治理** — 智能体系统的策略执行、威胁检测和审计追踪模式。 |

**新兴方向：** 社区对**安全加固**（命名空间信任问题）、**企业协作**（组织级共享）和**垂直领域专用技能**（Web3、HPC、多智能体编排）的呼声很高。

---

## 3. 高潜力待合并技能

以下 OPEN 状态的 PR 代表有价值的贡献，有望近期合并：

| PR | 技能 | 潜力 |
|----|-------|-----------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | proofcore-contract-auditor | 高 — Web3 审计是增长领域；TON 集成具有创新性 |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | md2video-audio | 高 — 零成本视频生成填补常见内容创作缺口 |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | mcp-builder fix | 高 — 对 MCP v2 兼容性至关重要；影响众多下游技能 |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | skill-creator fix | 高 — 核心基础设施修复；提升全技能触发可靠性 |
| **[#1769](https://github.com/anthropics/skills/pull/1769)** | skill-creator recall fix | 高 — 解决失效的评估指标（0% 召回率 bug） |

---

## 4. 技能生态洞察

> **社区最集中的需求是可靠的技能评估/测试基础设施和信任/安全治理** — 触发检测问题（#556、#1298、#1769）、命名空间安全（#492）和跨代理兼容性（#1742）主导了讨论，而功能 PR 则趋向于垂直领域专用集成（Web3、HPC、多智能体系统）。

---

*报告基于 GitHub 数据生成。所有 PR/Issue 链接指向公开的 anthropics/skills 仓库。*

---

<think>The user wants me to translate the Claude Code Community Digest into Simplified Chinese, following the specific rules provided. Let me go through the content and translate it appropriately while:

1. Keeping all markdown structure exactly the same (headings, tables, lists, etc.)
2. Preserving URLs, issue numbers, code, file paths, version tags
3. Using natural technical Chinese register
4. Not adding any preamble or explanation
5. Not using markdown fences around the output

Let me translate section by section:

**Title and date:**
Claude Code 社区周刊 — 2026-09-18

**Highlights:**
- v2.1.275 with improvements: gateway sign-in confirmation and send-now shortcut
- Community's top issue - Mods extensibility proposal - has exploded to 195 comments

Let me translate the full digest:</think>

# Claude Code 社区周刊 — 2026-09-18

## 今日要闻

Claude Code 团队发布了 **v2.1.275**，带来两项体验优化：网关登录时显示已登录的账户名称，以及全新的即时发送快捷键（Ctrl+Enter 或 Ctrl+X Ctrl+S），可立即发送队列中的消息。与此同时，社区热度最高的问题 —— **Mods 可扩展性提案** —— 已飙升至 195 条评论，显示出开发者对深度自定义功能的强烈需求，这可能将从根本上改变 Claude Code 融入工作流程的方式。

---

## 版本发布

**v2.1.275** (2026-09-17)

- **网关登录确认**：在网关登录对话框中显示已登录的账户名称，用户可在保存前确认凭证是否正确；账户信息也会显示在 `/status` 中
- **即时发送快捷键**：新增快捷键（Ctrl+Enter 或 Ctrl+X Ctrl+S）可中断当前输入，立即发送队列中的所有消息

---

## 热门议题

| # | 议题 | 重要性 | 社区反馈 |
|---|-------|--------|---------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **[MODS] Mods - 让 Claude 能力增强 10 倍** | 这是社区为 Claude 添加函数钩子和深度可扩展性的旗舰提案。团队已承诺"在几周内"交付函数钩子功能。 | **195 条评论**，120 👍 — 压倒性的正面反馈，社区提供了大量设计建议 |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **[BUG] Claude Desktop 在 Windows 上无法启动 — 崩溃后残留 Silo/Job Object** | 关键 Windows 阻塞问题；崩溃后应用变得完全不可用，需要注销或重启才能恢复（ HRESULT 0x80070020）。 | **93 条评论**，33 👍 — 影响生产工作流程的活跃回归问题 |
| [#11455](https://github.com/anthropics/claude-code/issues/11455) | **功能请求：会话交接 / 连续性支持** | 用户希望在机器之间或不同上下文之间转移活动会话而不丢失状态 — 这是重要的企业需求。 | **36 条评论**，25 👍 |
| [#25128](https://github.com/anthropics/claude-code/issues/25128) | **[BUG] VS Code 扩展聊天面板中拖放功能失效** | v2.1.6 以来的回归问题；拖放在 CLI 中有效但在 VS Code 中失效，破坏了常见工作流程。 | **33 条评论**，48 👍 — 尽管是 IDE 特定问题，但关注度很高 |
| [#15921](https://github.com/anthropics/claude-code/issues/15921) | **[BUG] VSCode 扩展：未遵循 `.claude/settings.local.json` 权限配置** | 敏感安全问题：权限绕过设置对文件操作无效。 | **31 条评论**，32 👍 |
| [#32726](https://github.com/anthropics/claude-code/issues/32726) | **VSCode 扩展：添加防止面板抢夺焦点的选项** | 聊天面板在输出时自动展开并抢夺焦点，干扰其他编辑器标签页中的多任务操作。 | **19 条评论**，57 👍 — 强烈的 UX 请求 |
| [#81081](https://github.com/anthropics/claude-code/issues/81081) | **[BUG] 会话启动时的技能列表静默截断了大部分技能描述** | 由于大小预算限制，用户在会话启动时无法查看可用技能，且没有任何警告。 | **11 条评论** |
| [#93156](https://github.com/anthropics/claude-code/issues/93156) | **浏览器面板：无法授予持久化站点权限** | 每次浏览器操作都需要重新批准；没有"始终允许"选项，导致重复工作流程的摩擦。 | **6 条评论** |
| [#95050](https://github.com/anthropics/claude-code/issues/95050) | **[BUG] Claude Desktop 2.110.0 (Windows/MSIX)：退出后启动失败** | 新鲜回归：退出后，后续启动失败并显示"launch-failed, exitCode:21"，直到 CoworkVMService 重启。 | **2 条评论** — 新提交，可能正在发酵 |
| [#77004](https://github.com/anthropics/claude-code/issues/77004) | **IDE 扩展：展开长用户消息会将"收起更多"推到屏幕外** | VS Code 扩展中的 UX bug：折叠后的消息无法重新折叠，需要滚动整个会话才能操作。 | **2 条评论** |

---

## PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| [#95198](https://github.com/anthropics/claude-code/pull/95198) | **mods/diff: 将 openPane 的 answer 类型设为 unknown** | 更新 diff mod 的 `openPane` 返回类型为 `Promise<unknown>`，以适配即将到来的 `$.ui.open` 结果对象变更。 |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **diff: 仅当有文件可列出时才在首次编辑时打开面板** | 修复首次编辑仓库外路径、忽略文件或不同 worktree 时出现空 diff 面板的问题。 |
| [#87077](https://github.com/anthropics/claude-code/pull/87077) | **fix(pr-review-toolkit): 修复所有 agent 中无效的 YAML frontmatter** | 修正所有 agent 描述中格式错误的 YAML frontmatter，这些错误会导致加载时元数据为空。 |

---

## 功能需求趋势

从议题分布来看，最受关注的功能方向包括：

1. **可扩展性与 Mods** — 提案 #91870 引发了一波对函数钩子、插件架构和深度编程控制 Claude 行为的需求热潮。

2. **VS Code 扩展功能对等** — 多项请求希望 CLI 和 IDE 之间的功能对等：图片内联渲染、通道推送通知、焦点管理、拖放修复。

3. **会话连续性** — 在机器之间交接会话，以及跨远程控制会话保持持久上下文，是团队/企业工作流程的强烈需求。

4. **权限与安全** — 浏览器面板的持久化权限、正确执行 `settings.local.json` 绕过规则、大量操作（如批量创建 PR）前的确认保护。

5. **上下文与 Token 管理** — 可调节的上下文保留和 MCP 工具结果驱逐以优化 token 使用；修复禁用 MCP 模式时 schema 仍消耗 token 的问题。

---

## 开发者痛点

跨议题反复出现的痛点：

- **Windows 平台不稳定**：多个 Windows 特定问题影响 Desktop 启动、Cowork 和权限 — 用户报告崩溃后系统进入损坏状态，需要重启。
- **VS Code 扩展质量**：拖放回归、焦点抢夺行为、权限配置被忽略、滚动/折叠 UX bug — 表明 IDE 集成需要专门关注。
- **权限摩擦**：对每次操作都需要确认的频繁抱怨、缺乏持久化站点权限、跨工具的权限配置不清晰。
- **网络可靠性**：某些 ISP 路径上的 TLS 握手失败（ECONNRESET）暗示特定网络配置的兼容性问题；VPN 变通方案表明是协议层面的问题。
- **Token/上下文浪费**：导致禁用时 MCP schema 仍消耗 token、延迟执行的工具在不使用时浪费约 20k token 的 bug 直接影响付费用户的成本。

---

*周刊基于 2026-09-18 的 GitHub 数据生成*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the GitHub community digest to Simplified Chinese. I need to:
1. Output ONLY the translation
2. Keep all Markdown structure
3. Keep URLs, numbers, code, issue references as-is
4. Use natural technical Chinese register

Let me translate section by section, keeping the format exactly as is.</think>

# OpenAI Codex 社区动态 — 2026-09-18

## 1. 今日要闻

OpenAI 发布了 **rust-v0.155.0**，带来重大功能更新：实验性的 `/voice` 对话功能支持实时转录和麦克风控制，TUI 界面现在可以在状态栏显示实时推理摘要。与此同时，社区仍在应对平台特定问题——尤其是 Windows 沙盒失败和 Intel Mac x64 缺少 Computer Use 助手——而呼声很高的远程控制功能也获得了大量关注。

---

## 2. 版本发布

| 版本 | 关键更新 |
|---------|-------------|
| **rust-v0.155.0** | 实验性的 `/voice` 对话功能，支持实时转录和麦克风控制（通过 `/experimental` 启用）。TUI 现在可以在状态栏显示实时推理摘要，完成调用后在末尾显示时间戳。 |
| rust-v0.156.0-alpha.1 | Alpha 预览版 |
| rust-v0.155.0-alpha.15–18 | 发布前测试版本 |

---

## 3. 热门 Issue

| # | Issue | 摘要 | 👍 |
|---|-------|---------|-----|
| [#26234](https://github.com/openai/codex/issues/26234) | **非 OpenAI 提供商的 MCP 命名空间工具失效** | 当 Codex 连接到 Ollama、LM Studio、OpenRouter 或 AWS Bedrock 时，MCP 服务器工具无法调用——序列化将它们包装成与这些端点不兼容的专有命名空间格式。这对使用自定义模型设置的用户影响严重。 | 48 |
| [#24287](https://github.com/openai/codex/issues/24287) | **Codex Desktop 界面卡在 Thinking 状态** | Desktop 应用可以接受提示但 UI 始终冻结在"Thinking"状态；Stop 按钮失效，重启后对话可能消失。影响 macOS 15.6 上的工作效率。 | 14 |
| [#43375](https://github.com/openai/codex/issues/43375) | **多个 GPT-5/GPT-6 型号显示"已满"** | 用户在多个 GPT-5 和 GPT-6 型号上反复遇到"所选模型已满"错误，即使在型号之间切换也无法解决。 | 15 |
| [#37967](https://github.com/openai/codex/issues/37967) | **Remote Control 无法附加到活跃的 CLI 会话** | Remote Control 适用于已完成的线程，但对进行中的会话失败——这是移动端监控工作流的重大障碍。 | 26 |
| [#40905](https://github.com/openai/codex/issues/40905) | **长时间运行任务有 5 小时使用限制** | 滚动 5 小时窗口会中断长时间运行的自主 GPT-5.6 Sol 任务——对持续运行的智能体工作特别不利。 | 4 |
| [#24437](https://github.com/openai/codex/issues/24437) | **Intel Mac 缺少 computer-use 助手** | x64 发行版缺少 `computer-use` 捆绑插件和 `Codex Computer Use.app` 助手，导致 Intel Mac 上无法使用 Appshots 和 Locked 功能。 | 4 |
| [#32188](https://github.com/openai/codex/issues/32188) | **后台执行的事件驱动唤醒** | 长命令需要轮询——用户希望在后台会话完成时获得事件驱动通知，以减少不必要的模型开销。 | 13 |
| [#42739](https://github.com/openai/codex/issues/42739) | **Windows 更新后本地项目从侧边栏消失** | Windows 桌面应用更新后，项目侧边栏显示"无项目"，尽管文件在磁盘上存在。 | 0 |
| [#25045](https://github.com/openai/codex/issues/25045) | **x64 缺少 Computer Use 安装程序** | Intel Mac 用户无法启用锁屏控制——与缺少 x64 Computer Use 捆绑包相关。 | 4 |
| [#38185](https://github.com/openai/codex/issues/38185) | **recommended_plugins 注入无法退出** | 约 38 个第三方插件在用户首次对话时被无条件注入，没有可用的客户端抑制方式。 | 3 |

---

## 4. PR 进展

| PR | 描述 |
|----|-------------|
| [#46333](https://github.com/openai/codex/pull/46333) | **处理清理期间被禁用的 Windows 沙盒账户** — 确保为可能已被禁用的沙盒账户提供新的登录令牌。 |
| [#46332](https://github.com/openai/codex/pull/46332) | **在 TUI 中调暗对话摘要** — 对渲染的摘要行应用调暗样式；移除 `Next:` 的青色。 |
| [#46331](https://github.com/openai/codex/pull/46331) | **延迟环境网络策略验证** — 延迟到组合后再验证，避免对将被替换的值的拒绝。 |
| [#46330](https://github.com/openai/codex/pull/46330) | **将重试退避移入 `codex-async-utils`** — 在组件间共享指数退避，无需依赖 `codex-core` 运行时。 |
| [#46328](https://github.com/openai/codex/pull/46328) | **避免为无项目目录持久化项目信任** — 防止为没有项目根标记的目录持久化信任。 |
| [#46319](https://github.com/openai/codex/pull/46319) | **在 exec JSON 输出中保留网页搜索操作** — 修复被丢弃的结构化结果；现在保留 `open_page` URL 和搜索结果。 |
| [#46318](https://github.com/openai/codex/pull/46318) | **为模型提供商网关添加 OAuth 凭据管理** — 实现 PKCE 浏览器登录、环回回调、令牌缓存和刷新。 |
| [#46309](https://github.com/openai/codex/pull/46309) | **在显示元数据刷新期间保留插件缓存** — 防止仅显示元数据更改时不必要的缓存失效。 |
| [#46306](https://github.com/openai/codex/pull/46306) | **将生物策略错误保留为独特的不可重试错误** — 为流式失败保持策略特定的分类。 |
| [#46297](https://github.com/openai/codex/pull/46297) | **为所有多智能体 V2 工具支持目录描述** — 将描述覆盖从 `spawn_agent` 扩展到 `send_message`、`follow_up` 等。 |

---

## 5. 热门讨论

### 创意
| # | 讨论 | 摘要 |
|---|------------|---------|
| [#9200](https://github.com/openai/codex/discussions/9200) | **从 ChatGPT 应用远程控制 Codex** | 在桌面以无头/守护进程模式运行 Codex，从移动端 ChatGPT 应用远程控制。191 个赞表明需求强烈。 |
| [#46233](https://github.com/openai/codex/discussions/46233) | **支持创建 GitLab 合并请求** | 将桌面应用的 PR 工作流扩展到支持 GitLab.com 和自托管 GitLab。 |
| [#16170](https://github.com/openai/codex/discussions/46170) | **会话时间戳的时区配置** | 目前即使操作系统设置为本地时区（例如 UTC+8）也显示 UTC。 |

### 问答
| # | 讨论 | 摘要 |
|---|-------------|---------|
| [#46001](https://github.com/openai/codex/discussions/46001) | **验证所选与实际权限配置文件** | Windows Desktop 显示所选配置文件但任务记录了不同的权限。 |
| [#45938](https://github.com/openai/codex/discussions/45938) | **PreToolUse 可以阻止/重写但无法替换结果** | 开发者探讨钩子表面边界——寻求确认这是有意设计还是功能缺口。 |
| [#46121](https://github.com/openai/codex/discussions/46121) | **测试中的幻觉率** | 开发者对基准测试中观察到的幻觉率表示担忧。 |

### 展示
| # | 讨论 | 摘要 |
|---|-------------|---------|
| [#45392](https://github.com/openai/codex/discussions/45392) | **读取 Codex 发布文件** | 作者分享构建 Fishbowl（一个 Codex 会话的本地只读查看器）的经验，并讨论遇到的挑战。 |
| [#44291](https://github.com/openai/codex/discussions/44291) | **Brain Scanner** | 了解编码智能体在下一个任务前做了什么——将项目地图、记录的工作和后续跟进整合在一起。 |

---

## 6. 功能请求趋势

从 Issue 和讨论中统计，最受欢迎的功能请求包括：

1. **跨平台远程控制** — 以无头模式运行 Codex，从移动应用控制（#9200 获得 191 赞）
2. **原生 Computer Use  parity** — Intel Mac 和 Windows x64 构建缺少助手应用；需要跨架构一致支持
3. **延长使用窗口** — 5 小时限制对自主智能体任务来说过于严格；需要更长/可配置的会话
4. **MCP 提供商兼容性** — 完全支持 Ollama、LM Studio、OpenRouter 和 AWS Bedrock，不仅仅是 OpenAI 原生 API
5. **插件/退出控制** — 用户希望抑制 recommended 插件注入并管理 MCP 工具命名空间
6. **GitLab 集成** — 除了 GitHub 外原生支持合并请求
7. **时区感知时间戳** — 会话时间戳应遵循操作系统区域设置

---

## 7. 开发者痛点

- **Windows 沙盒不稳定** — 提升的沙盒因 ACL 错误失败，阻塞 Computer Use 和 CLI 命令；影响新旧线程
- **Intel Mac x64 缺失** — 多版本持续缺少 `computer-use` 助手、appshot 服务和锁屏控制
- **速率限制** — GPT-5/6 型号的"模型已满"错误扰乱工作流；没有明确的缓解路径
- **UI 冻结 bug** — 桌面应用卡在"Thinking"状态；重启后会话恢复失败
- **网络/本地访问** — macOS 27 阻止 LAN 访问；未显示权限提示；影响来自 Codex 的 SSH/TCP 连接
- **会话钩子限制** — 带有 additionalContext 的 SessionStart 钩子输出被拒绝；用户无法可靠注入上下文

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the Gemini CLI Community Digest from English to Chinese. I need to:

1. Translate all the content to Simplified Chinese
2. Preserve the exact Markdown structure (headings, tables, lists, etc.)
3. Keep URLs, issue/PR numbers, code identifiers, file paths, version tags as-is
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate while maintaining the structure:

Key translations to keep in mind:
- "Gemini CLI Community Digest" -> "Gemini CLI 社区动态"
- "Today's Highlights" -> "今日要闻"
- "Releases" -> "版本发布"
- "Hot Issues" -> "热门议题"
- "Key PR Progress" -> "关键 PR 进展"
- "Feature Request Trends" -> "功能请求趋势"
- "Developer Pain Points" -> "开发者痛点"
- Keep issue titles in English but translate descriptions
- Technical terms like "PR", "issue", "nightly build" can stay or be translated naturally
- Use Chinese punctuation throughout

Let me translate:</think>

# Gemini CLI 社区动态 — 2026-09-18

## 今日要闻

v0.62.0-nightly.20260917.g6a466a7e2 版本于凌晨发布，带来多项核心修复。一个影响子代理终止状态上报的 P1 缺陷（#22323）的修复已提交至 PR #29367。与此同时，社区正在积极讨论操作系统沙箱策略（#19873）和 AST 感知工具（#22745），表明对安全加固和智能代码导航的高度关注。

---

## 版本发布

**v0.62.0-nightly.20260917.g6a466a7e2** — [更新日志](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2)

这是标准 nightly 构建。未提供详细更新日志。

---

## 热门议题

| # | 议题 | 重要性 | 反应 |
|---|-------|--------|------|
| #22323 | [子代理在 MAX_TURNS 后恢复时报告为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | 子代理触发 `MAX_TURNS` 后错误地报告 `status: "success"`，终止原因为 "GOAL"，这会掩盖其中断状态。用户无法看到子代理任务失败的情况。 | 13 条评论， 👍2 |
| #19873 | [零依赖操作系统沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873) | Epic 提案：利用 Gemini 3 对 bash 的原生亲和力，实现零依赖沙箱和执行后意图路由。可显著提升安全性和用户体验。 | 9 条评论， 👍1 |
| #21409 | [通用代理在调用子代理时卡住](https://github.com/google-gemini/gemini-cli/issues/21409) | CLI 在使用通用代理时无限挂起——即使是创建文件夹这样的简单操作也会阻塞一个小时。阻塞性 P1。 | 8 条评论， 👍8 |
| #22745 | [评估 AST 感知的文件读取、搜索和映射](https://github.com/google-gemini/gemini-cli/issues/22745) | Epic 调研：AST 感知工具是否能减少 token 浪费并提升代码导航精度。对上下文效率有很高潜在影响。 | 7 条评论， 👍1 |
| #21968 | [Gemini 不够频繁使用 skills 和子代理](https://github.com/google-gemini/gemini-cli/issues/21968) | 用户报告 Gemini 除非明确指示，否则会忽略自定义 skills 和子代理——这降低了自动化价值。 | 6 条评论 |
| #26525 | [添加确定性脱敏并减少 Auto Memory 日志](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 在脱敏前将转录发送给模型，存在安全漏洞。敏感数据可能在过滤前泄露。 | 5 条评论 |
| #26522 | [防止 Auto Memory 无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 不断重复处理低信号会话，导致后台代理循环浪费。 | 4 条评论 |
| #25166 | [Shell 命令执行卡在"等待输入"](https://github.com/google-gemini/gemini-cli/issues/25166) | 简单命令完成后，CLI 挂起显示"等待用户输入"，尽管命令已结束。频繁出现的阻塞问题。 | 4 条评论， 👍3 |
| #21983 | [Browser 子代理在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) | Linux Wayland 会话中的浏览器自动化功能损坏。 | 4 条评论， 👍1 |
| #22232 | [Browser 代理自动接管会话和锁恢复](https://github.com/google-gemini/gemini-cli/issues/22232) | 功能请求：当浏览器配置锁时增强恢复能力——目前直接快速失败，扰乱工作流。 | 4 条评论 |

---

## 关键 PR 进展

| # | PR | 重要性 |
|---|-----|--------|
| #29367 | [fix(agents): 保留子代理恢复时的原始终止原因](https://github.com/google-gemini/gemini-cli/pull/29367) | 修复 #22323 — 防止子代理被 MAX_TURNS 中断时错误报告为 GOAL 成功。 |
| #29379 | [fix(core): 同步 ConPTY 进程退出生命周期并强化 PTY 输出终结](https://github.com/google-gemini/gemini-cli/pull/29379) | 改善 Windows ConPTY 环境下的进程生命周期确定性。 |
| #29378 | [fix(vscode-ide-companion): 关闭 diff 标签时保留终端焦点](https://github.com/google-gemini/gemini-cli/pull/29378) | UX 修复：在批准/拒绝文件编辑后保持终端键盘焦点。 |
| #29377 | [fix(core): 更新认证错误文档链接到有效锚点](https://github.com/google-gemini/gemini-cli/pull/29377) | 修复 GCP 认证错误链接的文档。 |
| #29343 | [fix(cli): 取消请求时抑制未捕获的 AbortError 日志](https://github.com/google-gemini/gemini-cli/pull/29343) | 防止用户取消查询时在 Node 23+ 上出现硬崩溃。 |
| #29380 | [fix(core,cli): 改进终端缓冲区内存管理](https://github.com/google-gemini/gemini-cli/pull/29380) | 优化 PTY shell 执行内存和 Windows 诊断路径格式化。 |
| #29376 | [fix(core): 停止在 Windows 上运行 Unix ps 作为 IDE 检测回退](https://github.com/google-gemini/gemini-cli/pull/29376) | 修复 IDE 进程检测中的跨平台行为错误。 |
| #29375 | [fix(cli): 使用有状态解码器解码 DevTools HTTP 响应块](https://github.com/google-gemini/gemini-cli/pull/29375) | 修复流式 DevTools 事件中 UTF-8 多字节字符损坏问题。 |
| #29368 | [fix(acp): 即使没有可恢复内容也按 ID 解析 session/load](https://github.com/google-gemini/gemini-cli/pull/29368) | 修复无恢复内容时的 ACP 会话加载问题。 |
| #29366 | [fix(core): 停止在会话恢复时重复播放工具响应](https://github.com/google-gemini/gemini-cli/pull/29366) | 修复会话恢复时的重复工具响应和记录膨胀问题。 |

---

## 功能请求趋势

从议题积压中可以看出几个主导主题：

1. **代理智能化** — 更充分地利用子代理（#21968）、改进 skill 发现，以及"得体提取"实现精细化代码读取（#19561）以减少 token 膨胀。
2. **安全与沙箱** — 零依赖操作系统沙箱（#19873）、确定性 Auto Memory 脱敏（#26525），以及危险命令防护（#22672）。
3. **终端/Shell 可靠性** — 解决卡死问题（#21409、#25166）、改进 PTY 生命周期（#29379），以及终端 resize 性能（#21924）。
4. **浏览器自动化韧性** — 会话接管、锁恢复（#22232）和 Wayland 支持（#21983）。
5. **内存/持久化** — 基于文件的任务跟踪（#18836）、压缩命令持久化（#21335）和 AST 感知的代码库映射（#22746）。

---

## 开发者痛点

- **代理卡死** — 多种卡死场景（通用代理、shell 完成、交互式提示）正在阻塞开发效率。
- **Auto Memory 问题** — 脱敏时机的安全顾虑、低信号会话无限重试循环，以及静默补丁失败。
- **子代理透明度** — 错误的终止状态上报隐藏了失败；缺少子代理上下文导致错误报告难以调试。
- **工具/Skill 激活** — 除非明确提示，否则 Gemini 忽略自定义 skills，降低了自动化投资回报。
- **终端 UX 闪烁** — Resize 处理仍导致性能下降；代理对截断损坏表情符号显示。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI community digest into Chinese. Let me go through the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

# GitHub Copilot CLI 社区动态
**日期：** 2026-09-18

---

## 1. 今日要点

GitHub Copilot CLI v1.0.86 引入了自定义代理对仓库指令文件（AGENTS.md、copilot-instructions.md、CLAUDE.md）的支持，使团队能够为自定义代理提供上下文指导。然而，一个关键的 Figma MCP 服务器问题（#4870）导致 CLI 中的工具注册失败（虽然在 VS Code 中正常工作），而 Windows 插件更新 bug（#4095）仍然是高优先级问题，获得了 22 个 👍  reactions。

---

## 2. 版本发布

**v1.0.86** (2026-09-17)
- 自定义代理现在可以通过在前端设置 `include-custom-instructions: true` 来选择使用仓库指令文件
- 会话恢复现在会在没有提供 plugin-directory、discovery 或 working-directory 覆盖时保留市场设置
- [发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.86)


- 包含稳定性和功能改进的修复，发布于 [GitHub](https://github.com/github/copilot-cli/releases/tag/v1.0.86-2)

## 3. 热门问题

| # | Issue | Summary | 👍 |
|---|-------|---------|-----|
| #4870 | [MCP: Figma remote server fails to load](https://github.com/github/copilot-cli/issues/4870) | Figma 托管的 MCP 服务器（`https://mcp.figma.com/mcp`）初始化成功但 CLI 未能注册其工具——发现探针将 `-32601` 视为致命错误，尽管在 VS Code 中正常工作。对设计工作流程至关重要。 | 9 |
| #4095 | [Windows plugin update fails with "Access is denied"](https://github.com/github/copilot-cli/issues/4095) | `copilot plugin update` 在 Windows 上失败并显示"os error 5"，因为 VS Code 的 Copilot 扩展对已安装插件持有文件监视器句柄。社区高度关注。 | 22 |
| #3304 | [[ERR_HTTP2_INVALID_SESSION] causes retries](https://github.com/github/copilot-cli/issues/3304) | 长推理响应期间频繁出现"会话已销毁"错误，导致重复的瞬态重试。影响生产稳定性。 | 0 |
| #4753 | [Session resume cancels in-flight stdio MCP connections](https://github.com/github/copilot-cli/issues/4753) | 恢复会话会取消仍在初始化中的 MCP 服务器连接（约 1 秒超时 vs v1.0.82 中的约 16 秒），导致服务器静默不可用。 | 2 |
| #4655 | [Custom agents under com.github.copilot/agents not discovered](https://github.com/github/copilot-cli/issues/4655) | Agent Plugins 1.0 自定义代理放置在正确命名空间下时不会被发现。阻碍插件生态系统。 | 0 |
| #3380 | [Add `--disable-repo-mcps` flag](https://github.com/github/copilot-cli/issues/3380) | 没有干净的方式在忽略 `.mcp.json` 或 `.github/mcp-config.json` 中的 MCP 定义的情况下启动 copilot。目前只能按名称禁用。 | 1 |
| #4887 | [/btw or /ask commands fail in Model mode Auto](https://github.com/github/copilot-cli/issues/4887) | 在 Model 模式下使用 /btw 或 /ask 命令时 GitHub Copilot CLI 返回错误。v1.0.86-2 中的回归。 | 0 |
| #4886 | [`--plugin-dir` skills omitted from /skills and /env](https://github.com/github/copilot-cli/issues/4886) | 来自本地插件的技能已加载但不会显示在交互式 /skills 仪表板或 /env 输出中，尽管 `copilot skill list --json` 显示它们。 | 0 |
| #4606 | [Google Workspace MCP OAuth fails](https://github.com/github/copilot-cli/issues/4606) | OAuth 因与 `accounts.google.com` 的发行者 URL 尾随斜杠不匹配而失败。阻碍 GCP 集成。 | 1 |
| #4839 | [Option to disable taskbar icon](https://github.com/github/copilot-cli/issues/4839) | 用户希望禁用 CLI 任务栏图标，因为他们有自己的跟踪工具，且图标会随会话堆积。 | 1 |

---

## 4. 关键 PR 进展

过去 24 小时内没有 PR 更新。

---

## 5. 热门讨论

源数据中未提供讨论数据。

---

## 6. 功能需求趋势

基于问题分析，最需要的功能方向是：

1. **增强的 MCP 服务器管理**
   - 每次仓库 MCP 禁用开关（#3380）
   - 改进的 MCP 服务器发现可靠性（#4870）
   - 更好地处理会话恢复期间进行中的 MCP 连接（#4753）

2. **平台特定改进**
   - 插件更新的 Windows 文件锁定解决

方案（#4095）
   - 跨操作系统的符号链接支持文档（#3264）
   - FreeBSD 平台支持恢复（#3382）

3. **会话和工作流增强**
   - 长时间运行任务完成时的本机 OS 通知（#2616）
   - 任务栏图标可见性切换（#4839）
   - 自定义代理的每个代理提供商选择（#4703）

4. **用户体验**
   - 退格键删除字符而非单词（#4447）
   - 主题设置持久化（#4015）
   - Shell 命令输出对 copilot 可见（#1575）

---

## 7. 开发者痛点

1. **MCP 服务器不稳定性**：多个问题涉及 MCP 服务器发现、认证（Google OAuth）和影响 Figma 等关键集成的连接超时

2. **Windows 平台摩擦**：由于 VS Code 扩展的文件锁定，插件更新失败，阻止开发工作流连续性

3. **会话状态管理**：会话恢复行为不一致——连接提前取消、会话数据在关闭时丢失、市场设置未按预期保留

4. **输入/输出 bug**：退格键删除单词而非字符、多行复制截断、粘贴破坏输入区域——这些降低日常交互质量

5. **认证差距**：Google Workspace MCP OAuth 在初始化时因发行者 URL 不匹配而失败，阻止企业 GCP 使用

6. **模型选择问题**：Auto 模式选择不可用的模型（例如"Claude Sonnet 4.5 - medium"）导致 CLI 崩溃

---

*来源于 github.com/github/copilot-cli*

---

规则：
- 仅输出翻译内容。无前言、无解释、无整个输出的 markdown  fences。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、水平线、emoji。
- 保留 URL、链接目标、代码 span、代码块、数字和日期不变。
- 保持项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原始形式——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持不变。
- 使用自然的技术中文——中国开发者通讯的语域——而不是逐字直译。

Let me finalize the translation:

# GitHub Copilot CLI 社区动态
**日期：** 2026-09-18

---

## 1. 今日要点

GitHub Copilot CLI v1.0.86 引入了自定义代理对仓库指令文件（AGENTS.md、copilot-instructions.md、CLAUDE.md）的支持，使团队能够为自定义代理提供上下文指导。然而，一个关键的 Figma MCP 服务器问题（#4870）导致 CLI 中的工具注册失败（虽然在 VS Code 中正常工作），而 Windows 插件更新 bug（#4095）仍然是高优先级问题，获得了 22 个 👍  reactions。

---

## 2. 版本发布

**v1.0.86** (2026-09-17)
- 自定义代理现在可以通过在

前端设置 `include-custom-instructions: true` 来选择使用仓库指令文件
- 会话恢复现在会在没有提供 plugin-directory、discovery 或 working-directory 覆盖时保留市场设置
- [发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.86)

**v1.0.86-2** (2026-09-17)
- 包含稳定性和更改以改进
- [发布说明](https://github.com/github/copilot-cli/releases/tag/v1.0.86-2)

---

## 3. 热门问题

| # | Issue | Summary | 👍 |
|---|-------|---------|-----|
| #4870 | [MCP: Figma remote server fails to load](https://github.com/github/copilot-cli/issues/4870) | Figma 托管的 MCP 服务器（`https://mcp.figma.com/mcp`）成功初始化但 CLI 从未注册其工具——发现探测将 `-32601` 视为致命错误，尽管在 VS Code 中正常工作。对设计工作流程至关重要。 | 9 |
| #4095 | [Windows plugin update fails with "Access is denied"](https://github.com/github/copilot-cli/issues/4095) | `copilot plugin update` 在 Windows 上因"os error 5"失败，因为 VS Code 的 Copilot 扩展对已安装的插件持有文件监视器句柄。社区高度关注。 | 22 |
| #3304 | [[ERR_HTTP2_INVALID_SESSION] causes retries](https://github.com/github/copilot-cli/issues/3304) | 在长时间推理响应期间频繁出现"会话已销毁"错误，导致重复的瞬态重试。影响生产稳定性。 | 0 |
| #4753 | [Session resume cancels in-flight stdio MCP connections](https://github.com/github/copilot-cli/issues/4753) | 恢复会话会取消仍在初始化中的 MCP 服务器连接（约 1 秒超时 vs v1.0.82 中的约 16 秒），导致服务器静默不可用。 | 2 |
| #4655 | [Custom agents under com.github.copilot/agents not discovered](https://github.com/github/copilot-cli/issues/4655) | Agent Plugins 1.0 自定义代理放置在正确命名空间下时不会被发现。阻碍插件生态系统。 | 0 |
| #3380 | [Add `--disable-repo-mcps` flag](https://github.com/github/copilot-cli/issues/3380) | 没有干净的方式在忽略 `.mcp.json` 或 `.github/mcp-config.json` 中的 MCP 定义的情况下启动 copilot。目前只能按名称禁用。 | 1 |
| #4887 | [/btw or /ask commands fail in Model mode Auto](https://github.com/github/copilot-cli/issues/4887) | 在 Model 模式下使用 /btw 或 /ask 命令时 GitHub Copilot CLI 返回错误。v1.0.86-2 中的回归。 | 0 |
| #4886 | [`--plugin-dir` skills omitted from /skills and /env](https://github.com/github/copilot-cli/issues/4886) | 来自本地插件的技能已加载但不会显示在交互式 /skills 仪表板或 /env 输出中，尽管 `copilot skill list --json` 显示它们。 | 0 |
| #4606 | [Google Workspace MCP OAuth fails](https://github.com/github/copilot-cli/issues/4606) | OAuth 因与 `accounts.google.com` 的发行者 URL 尾随斜杠不匹配而失败。阻碍 GCP 集成。 | 1 |
| #4839 | [Option to disable taskbar icon](https://github.com/github/copilot-cli/issues/4839) | 用户希望禁用 CLI 任务栏图标，因为他们有自己的跟踪工具，且图标会随会话堆积。 | 1 |

---

## 4. 关键 PR 进展

过去 24 小时内没有 PR 更新。

---

## 5. 热门讨论

源数据中未提供讨论数据。

---

## 6. 功能需求趋势

基于问题分析，最需要的功能方向是：

1. **增强的 MCP 服务器管理**
   - 每次仓库 MCP 禁用开关（#3380）
   - 改进的 MCP 服务器发现可靠性（#4870）
   - 更好地处理会话恢复期间进行中的 MCP 连接（#4753）

2. **平台特定改进**
   - 插件更新的 Windows 文件锁定解决方案（#4095）
   - 跨操作系统的符号链接支持文档（#3264）
   - FreeBSD 平台支持恢复（#3382）

3. **会话和工作流增强**
   - 长时间运行任务完成时的本机 OS 通知（#2616）
   - 任务栏图标可见性切换（#4839）
   - 自定义代理的每个代理提供商选择（#4703）

4. **用户体验**
   - 退格键删除字符而非单词（#4447）
   - 主题设置持久化（#4015）
   - Shell 命令输出对 copilot 可见（#1575）

---

## 7. 开发者痛点

1. **MCP 服务器不稳定性**：多个问题涉及 MCP 服务器发现、认证（Google OAuth）和影响 Figma 等关键集成的连接超时

2. **Windows 平台摩擦**：由于 VS Code 扩展的文件锁定，插件更新失败，阻止开发工作流连续性

3. **会话状态管理**：会话恢复行为不一致——连接提前取消、会话数据在关闭时丢失、市场设置未按预期保留

4. **输入/输出 bug**：退格键删除单词而非字符、多行复制截断、粘贴破坏输入区域——这些降低日常交互质量

5. **认证差距**：Google Workspace MCP OAuth 在初始化时因发行者 URL 不匹配而失败，阻止企业 GCP 使用

6. **模型选择问题**：Auto 模式选择不可用的模型（例如"Claude Sonnet 4.5 - medium"）导致 CLI 崩溃

---

*来源于 github.com/github/copilot-cli*</think>



</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest into Simplified Chinese, following the specific rules provided. Let me go through the content and translate it appropriately, maintaining the exact structure and using natural technical Chinese.

Key points to remember:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve exact Markdown structure
3. Keep URLs, numbers, issue/PR references, project names, etc. verbatim
4. Use natural technical Chinese register

Let me translate section by section:

# OpenCode 社区简报 — 2026-09-18

## 今日要闻

OpenCode 社区正在应对影响免费套餐用户的广泛认证问题，报告"OpenCode 的免费套餐只能从 OpenCode 内部使用"错误的重复工单已超过十几份。与此同时，团队继续交付体验改进，包括新的 VS Code 活动栏集成、TUI 性能修复以及增强的会话使用统计导出功能。

## Releases

过去 24 小时内无新版本发布。

## 热点问题

### 1. 免费套餐认证错误激增（多个工单）
**#49433** | 27 条评论 | 👍 4  
**#49610** | 12 条评论 | 👍 0  
**#49588** | 5 条评论 | 👍 0  

数十名用户报告免费套餐的 Console 提供商错误地拒绝请求，提示"OpenCode 的免费套餐只能从 OpenCode 内部使用"——即使使用官方桌面端应用。该问题似乎在压缩或更新后触发。桌面端、CLI 和 macOS 应用都收到了多份重复工单。这是一个**影响核心功能的严重用户阻塞问题**。

### 2. DeepSeek V4 Flash 需要启用"中国托管模型"选项
**#39845** | 24 条评论 | 👍 30  
会话中期，用户被要求为 DeepSeek V4 Flash 启用"models hosted in China"选项。该模型之前可以在不开启此标志的情况下访问。

Mid-session, users are hit with a sudden requirement to enable "models hosted in China" for DeepSeek V4 Flash. The model was accessible previously without this flag. Thirty 👍 reactions indicate this is a high-impact regression for Go subscribers.

### 3. Go 模型："上游请求失败"
**#37231** | 22 条评论 | 👍 1 (已关闭)  
所有 Go 模型在 CLI、桌面端和 VSCode 中都返回"上游请求失败"错误。限额在正常范围内，表明是后端提供商的问题。

### 4. v1.18.30 中的回归：SystemPrompt.environment 中的 TypeError
**#48645** | 10 条评论 | 👍 17  
v1.18.30 中的一个**回归问题**导致每个提示符立即崩溃，`TypeError: Cannot read properties of undefined (reading 'name')` 出现在 `SystemPrompt.environment` 中。用户报告 v1.18.18 正常工作。十七个 👍 使其成为最高优先级的 bug。

### 5. 桌面端加载会话失败："no such column: project_id"
**#42170** | 7 条评论 | 👍 1  
桌面端 v1.18.17 启动时崩溃，显示加载会话时出现 `Error: no such column: project_id`。从 `workspace` 表到 provider/binding schema 的模式迁移在开发版本中似乎不完整。

### 6. Muse Spark 1.3 恢复会话失败，显示 "encrypted_content" 错误
**#48915** | 5 条评论 | 👍 5  
在 `opencode/muse-spark-1.3-contributor-free` 上恢复旧会话时失败，错误信息为：`reasoning 'encrypted_content' was not issued to this caller`。新会话正常工作——表明存在会话状态序列化问题。

### 7. OpenCode 升级失败，显示 403（不尊重 GITHUB_TOKEN）
**#23461** | 6 条评论 | 👍 2  
在代理/VPN 后运行 `opencode upgrade` 会因 GitHub API 速率限制而失败，显示 403。即使设置了 `GITHUB_TOKEN`，该命令也会发出匿名请求（60 请求/小时/IP）。企业防火墙后的用户无法升级。

### 8. macOS 发布版本二进制文件代码签名验证失败
**#46313** | 5 条评论 | 👍 0  
v1.18.25 中的 macOS 二进制文件 `codesign --verify` 失败，错误为"invalid signature (code or signature have been modified)"。影响 ARM64 和 x64 下载版本——这是一个分发完整性问题。

### 9. 会话费用不包含子代理费用
**#45417** | 4 条评论 | 👍 11  
会话费用报告（TUI 侧边栏、统计信息、/export）不包含子代理费用。对于扇出多个子代理的工作流，显示的费用明显被低估。十一个 👍 表明社区强烈要求准确的账单可见性。

### 10. 代理步骤循环在 "unknown" 完成原因时永不终止
**#49414** | 3 条评论 | 👍 0  
当提供商返回无法识别的 `FinishReason`（不是 `stop`、`length`、`tool-calls` 等）并回退到 `unknown` 时，代理循环永不终止——导致无限制的请求风暴。潜在的无限循环漏洞。

## 关键 PR 进展

| PR | 作者 | 摘要 |
|----|--------|---------|
| **#49643** | curioushiva | **[功能]** 将 OpenCode 添加到 VS Code 活动栏，带有用于打开会话的侧边栏按钮 |
| **#48689** | dukebw | **[修复]** 在 TUI 吞吐量（tok/s）指标中包含推理令牌 |
| **#49642** | opencode-agent[bot] | **[修复]** 仅在需要时显示 SSH 认证提示；否则保持通用进度 |
| **#45002** | rekram1-node | **[功能]** 在验证前修复格式错误的工具参数（Zod/Effect/JSON Schema）— **待审核** |
| **#27554** | androidand | **[功能]** 本地 LAN 提供商发现 + 通过 mDNS 自动发现模型 |
| **#49637** | cestercian | **[修复]** 当子节点已在后台时隐藏后台提示 |
| **#49636** | cestercian | **[修复]** 中断后撤销已承认的消息 |
| **#46690** | mblakele | **[功能]** 向插件公开会话表单、会话列表和全局事件流 |
| **#48822** | devjaime | **[功能]** 导出结构化会话使用情况（`usage-json`、`usage-csv` 格式） |
| **#49634** | deadadm1n | **[修复]** 消除每次按键时对提及触发器的 O(n) 扫描 — 显著的 TUI 性能修复 |

## 功能需求趋势

基于问题和 PR 分析：

1. **增强的账单透明度** — 强烈要求准确的成本跟踪，包括子代理
2. **改进的离线/本地功能** — LAN 提供商发现（#27554）满足自托管工作流需求
3. **插件可扩展性** — 公开会话表单和事件流（#46690）解锁第三方集成
4. **更好的 IDE 集成** — VS Code 活动栏（#49643）深化编辑器生态系统
5. **性能优化** — 令牌吞吐量可见性和输入延迟修复展示持续的体验改进

## 开发者痛点

1. **免费套餐认证中断** — 最紧迫的问题；用户在更新或压缩后无法访问服务
2. **提供商/模型可用性混乱** — DeepSeek V4 突然需要中国托管选项，让用户措手不及
3. **代理后的升级障碍** — 不尊重 GITHUB_TOKEN，阻止企业/VPN 用户
4. **会话持久化错误** — 恢复时的加密内容错误、数据库迁移失败
5. **macOS 分发完整性** — 代码签名失败削弱了对官方二进制文件的信任

*基于 GitHub 数据生成 • anomalyco/opencode • 2026-09-18*</think>

# OpenCode 社区简报 — 2026-09-18

## 今日要闻

OpenCode 社区正在应对影响免费套餐用户的广泛认证问题，报告"OpenCode 的免费套餐只能从 OpenCode 内部使用"错误的重复工单已超过十几份。与此同时，团队持续交付体验改进，包括新的 VS Code 活动栏集成、TUI 性能修复以及增强的会话使用统计导出功能。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热点问题

### 1. 免费套餐认证错误激增（多个工单）

**#49433** | 27 条评论 | 👍 4  
**#49610** | 12 条评论 | 👍 0  
**##49588** | 5 条评论 | 👍 0  

数十名用户报告免费套餐的 Console 提供商错误地拒绝请求，提示"OpenCode 的免费套餐只能从 OpenCode 内部使用"——即使使用官方桌面端应用。该问题似乎在压缩或更新后触发。桌面端、CLI 和 macOS 应用都收到了多份重复工单。这是一个**影响核心功能的严重用户阻塞问题**。

### 2. DeepSeek V4 Flash 需要启用"中国托管模型"选项

**#39845** | 24 条评论 | 👍 30  
URL: https://github.com/anomalyco/opencode/issues/39845

会话中期，用户被要求为 DeepSeek V4 Flash 启用"models hosted in China"选项。该模型之前可以在不开启此标志的情况下访问。三十个 👍 表明这是 Go 订阅用户的高影响力回归问题。

### 3. Go 模型："上游请求失败"

**#37231** | 22 条评论 | 👍 1（已关闭）  
URL: https://github.com/anomalyco/opencode/issues/37231

所有 Go 模型在 CLI、桌面端和 VSCode 中都返回"上游请求失败"错误。限额在正常范围内，表明是后端提供商的问题。

### 4. v1.18.30 中的回归：SystemPrompt.environment 中的 TypeError

**#48645** | 10 条评论 | 👍 17  
URL: https://github.com/anomalyco/opencode/issues/48645

v1.18.30 中的一个**回归问题**导致每个提示符立即崩溃，`TypeError: Cannot read properties of undefined (reading 'name')` 出现在 `SystemPrompt.environment` 中。用户报告 v1.18.18 正常工作。十七个 👍 使其成为最高优先级的 bug。

### 5. 桌面端加载会话失败："no such column: project_id"

**#42170** | 7 条评论 | 👍 1  
URL: https://github.com/anomalyco/opencode/issues/42170

桌面端 v1.18.17 启动时崩溃，显示加载会话时出现 `Error: no such column: project_id`。从 `workspace` 表到 provider/binding schema 的模式迁移在开发版本中似乎不完整。

### 6. Muse Spark 1.3 恢复会话失败，显示 "encrypted_content" 错误

**#48915** | 5 条评论 | 👍 5  
URL: https://github.com/anomalyco/opencode/issues/48915

在 `opencode/muse-spark-1.3-contributor-free` 上恢复旧会话时失败，错误信息为：`reasoning 'encrypted_content' was not issued to this caller`。新会话正常工作——表明存在会话状态序列化问题。

### 7. OpenCode 升级失败，显示 403（不尊重 GITHUB_TOKEN）

**#23461** | 6 条评论 | 👍 2  
URL: https://github.com/anomalyco/opencode/issues/23461

在代理/VPN 后运行 `opencode upgrade` 会因 GitHub API 速率限制而失败，显示 403。即使设置了 `GITHUB_TOKEN`，该命令也会发出匿名请求（60 请求/小时/IP）。企业防火墙后的用户无法升级。

### 8. macOS 发布版本二进制文件代码签名验证失败

**#46313** | 5 条评论 | 👍 0  
URL: https://github.com/anomalyco/opencode/issues/46313

v1.18.25 中的 macOS 二进制文件 `codesign --verify` 失败，错误为"invalid signature (code or signature have been modified)"。影响 ARM64 和 x64 下载版本——这是一个分发完整性问题。

### 9. 会话费用不包含子代理费用

**#45417** | 4 条评论 | 👍 11  
URL: https://github.com/anomalyco/opencode/issues/45417

会话费用报告（TUI 侧边栏、统计信息、/export）不包含子代理费用。对于扇出多个子代理的工作流，显示的费用明显被低估。十一个 👍 表明社区强烈要求准确的账单可见性。

### 10. 代理步骤循环在 "unknown" 完成原因时永不终止

**#49414** | 3 条评论 | 👍 0  
URL: https://github.com/anomalyco/opencode/issues/49414

当提供商返回无法识别的 `FinishReason`（不是 `stop`、`length`、`tool-calls` 等）并回退到 `unknown` 时，代理循环永不终止——导致无限制的请求风暴。潜在的无限循环漏洞。

---

## 关键 PR 进展

| PR | 作者 | 摘要 |
|----|--------|---------|
| **#49643** | curioushiva | **[功能]** 将 OpenCode 添加到 VS Code 活动栏，带有用于打开会话的侧边栏按钮 |
| **#48689** | dukebw | **[修复]** 在 TUI 吞吐量（tok/s）指标中包含推理令牌 |
| **#49642** | opencode-agent[bot] | **[修复]** 仅在需要时显示 SSH 认证提示；否则保持通用进度 |
| **#45002** | rekram1-node | **[功能]** 在验证前修复格式错误的工具参数（Zod/Effect/JSON Schema）— **待审核** |
| **#27554** | androidand | **[功能]** 本地 LAN 提供商发现 + 通过 mDNS 自动发现模型 |
| **#49637** | cestercian | **[修复]** 当子节点已在后台时隐藏后台提示 |
| **#49636** | cestercian | **[修复]** 中断后撤销已承认的消息 |
| **#46690** | mblakele | **[功能]** 向插件公开会话表单、会话列表和全局事件流 |
| **#48822** | devjaime | **[功能]** 导出结构化会话使用情况（`usage-json`、`usage-csv` 格式） |
| **#49634** | deadadm1n | **[修复]** 消除每次按键时对提及触发器的 O(n) 扫描 — 显著的 TUI 性能修复 |

---

## 功能需求趋势

基于问题和 PR 分析：

1. **增强的账单透明度** — 强烈要求准确的成本跟踪，包括子代理
2. **改进的离线/本地功能** — LAN 提供商发现（#27554）满足自托管工作流需求
3. **插件可扩展性** — 公开会话表单和事件流（#46690）解锁第三方集成
4. **更好的 IDE 集成** — VS Code 活动栏（#49643）深化编辑器生态系统
5. **性能优化** — 令牌吞吐量可见性和输入延迟修复展示持续的体验改进

---

## 开发者痛点

1. **免费套餐认证中断** — 最紧迫的问题；用户在更新或压缩后无法访问服务
2. **提供商/模型可用性混乱** — DeepSeek V4 突然需要中国托管选项，让用户措手不及
3. **代理后的升级障碍** — 不尊重 GITHUB_TOKEN，阻止企业/VPN 用户
4. **会话持久化错误** — 恢复时的加密内容错误、数据库迁移失败
5. **macOS 分发完整性** — 代码签名失败削弱了对官方二进制文件的信任

---

*基于 GitHub 数据生成 • anomalyco/opencode • 2026-09-18*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest from English to Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, preserving all the structure and formatting while making it read naturally in Chinese.

Let me go through section by section:

# Pi Community Digest — 2026-09-18
→ # Pi 社区摘要 — 2026-09-18

## Today's Highlights
→ ## 今日要闻

The Pi community addresses several critical bugs this week, including a high-severity issue where empty-body 400 errors from OpenAI-compatible gateways are misclassified as context overflow, triggering destructive auto-compaction that destroys up to ~400k tokens. Meanwhile, the TUI team landed a crash-prevention fix for overflowing render lines, and the AI team continues improving retry logic with better handling of malformed Retry-After headers.

本周 Pi 社区修复了多个关键 bug，包括一个高严重性问题：OpenAI 兼容网关返回的空响应 400 错误被错误地分类为上下文溢出，触发了破坏性的自动压缩，可能导致高达约 40 万 token 的对话历史丢失。与此同时，TUI 团队修复了一个导致渲染行溢出崩溃的问题，AI 团队则继续改进重试逻辑，更好地处理格式错误的 Retry-After 头。

---
 
无新版本发布。

聚焦关键问题：编辑模糊匹配因空格处理不当导致遗漏，空离线模式意外禁用提供商模型发现，Windows 路径设置失效，以及压缩过程中的消息溢出风险。

这些问题涉及影响小模型工作流的模糊匹配缺陷、非预期的离线模式限制和 Windows 特定路径解析异常。

本地模型在长对话中命中 token 限制时，压缩摘要包含仅思考消息，导致请求本身超过约 16k token 上限。Windows 上存在 shellPath 在扩展加载时被静默忽略的问题。

免费模型因 max_tokens 设置超出上游提供商硬限制而失败，signal-killed 的 bash 工具仍返回成功结果，导致调用者无法区分执行状态。压缩后 Anthropoc 会丢弃多个带前缀绑定不匹配错误的思考块，session_compact 事件在清除压缩状态前触发。

SSE 解析器缓冲整个响应导致堆内存溢出，空响应 400 错误被错误分类为上下文溢出，触发自动压缩破坏大量对话历史记录。

修复了 AI 模块中的重试逻辑问题：对于格式错误的 Retry-After 日期改用指数退避，Opaque 4xx 错误现在可重试，M 的响应头处理也得到改进。

通过 thinkingLevelMap 驱动 Mistral 推理分发，添加了 zai-glm-5-3 支持，默认工具 shell 垂直内边距现在可配置，防止序列化仅含思考的响应导致压缩请求过大，并支持 Azure。

Foundry Chat Completions 部署。还实现了事件处理程序取消订阅、提示缓存预热、验证文档变体以及溢出渲染行的截断处理。从问题追踪和 PR 中看出几个关键趋势：提供商弹性与重试逻辑持续改进，跨平台 shell 解析存在困难，压缩与内存管理需要优化，Azure/Foundry 集成在扩展，会话迁移安全性也引起关注。

开发者面临的主要痛点包括离线模式限制超出预期、错误分类不准确导致数据丢失、Windows shell 解析不一致、压缩状态管理复杂、终端渲染容易崩溃等问题。</think>

# Pi 社区摘要 — 2026-09-18

## 今日要闻

本周 Pi 社区修复了多个关键 bug，包括一个高严重性问题：OpenAI 兼容网关返回的空响应 400 错误被错误地分类为上下文溢出，触发了破坏性的自动压缩，可能导致高达约 40 万 token 的对话历史丢失。与此同时，TUI 团队修复了一个导致渲染行溢出崩溃的问题，AI 团队则继续改进重试逻辑，更好地处理格式错误的 Retry-After 头。

---

## 发布动态

过去 24 小时内无新版本发布。

---

## 热门 Issue

1. **[#7836] 编辑模糊匹配因空白长度差异而遗漏行** — 已关闭  
   `normalizeForFuzzyMatch` 不会合并空白字符序列或去除行首空白，导致编辑的 `oldText` 即使内容相同也匹配失败。这影响了小模型工作流。[12 条评论，1 👍](https://github.com/earendil-works/pi/issues/7836)

2. **[#8684] `PI_OFFLINE` 静默禁用所有提供商模型发现** — 开启中  
   该环境变量文档说明仅禁用启动时的维护工作（更新检查），但实际上也禁用了整个会话期间所有提供商的模型目录网络发现——一个未记录的范围扩展，导致离线工作流不可用。[10 条评论](https://github.com/earendil-works/pi/issues/8684)

3. **[#9361] Windows: 加载扩展时 settings shellPath 被非确定性忽略** — 开启中  
   在 Windows 上，加载扩展时 settings.json 中的 `shellPath` 被静默忽略，回退到 Git Bash 位置，最终使用 PATH 中的第一个 `bash.exe`——导致 shell 解析不可预测。[6 条评论](https://github.com/earendil-works/pi/issues/9361)

4. **[#9602] 压缩可能因包含之前模型请求中省略的思考消息而溢出** — 开启中  
   长会话中本地模型触发 token 限制时，压缩摘要包含仅思考的消息，导致压缩请求本身超出限制（约 16k tokens）。[5 条评论](https://github.com/earendil-works/pi/issues/9602)

5. **[#8760] OpenRouter `:free` 模型无法使用，返回 400** — 已关闭  
   Pi 发送的 `max_tokens` 等于模型目录的 `maxOutputTokens`，超过了 OpenRouter 免费层模型的上游提供商硬限制。[5 条评论](https://github.com/earendil-works/pi/issues/8760)

6. **[#9577] 被 signal-killed 的 bash 工具仍成功 resolve** — 已关闭  
   `createBashool` 的 shell 被 SIGKILL/SIGTERM 杀死时仍成功 resolve，返回部分输出而不指示失败——调用者无法与成功执行区分。[4 条评论](https://github.com/earendil-works/pi/issues/9577)

7. **[#9391] 压缩后，过期的签名思考块每轮都被重放** — 开启中  
   手动压缩后，Anthropic 每轮请求丢弃 15+ 个思考块，带有 `prefix_binding_mismatch` 错误——重放过期的签名内容。[4 条评论，1 👍](https://github.com/earendil-works/pi/issues/9391)

8. **[#9647] 在清除压缩状态后向扩展发出 session_compact_end 事件** — 开启中  
   `session_compact` 在 `_clearManualCompactionState()` 之前触发，使 `_compactionAbortController` 保持活跃，导致扩展看到错误的 `isIdle()` 状态。[4 条评论](https://github.com/earendil-works/pi/issues/9647)

9. **[#9036] openai-codex SSE 解析器在一个字符串中缓冲整个响应，导致致命堆 OOM** — 开启中  
   读取 Codex 响应流时 pi 以 V8 内存溢出错误中止——SSE 解析器缓冲整个响应而不是流式处理。[3 条评论](https://github.com/earendil-works/pi/issues/9036)

10. **[#9482] 来自 OpenAI 兼容网关的空响应 400 被错误分类为上下文溢出** — 开启中  
    **高严重性 bug**：网关（如 opencode-go/deepseek-v4-flash）返回的空响应 HTTP 400 被错误分类为上下文溢出，触发自动压缩，破坏高达约 40 万 token 的对话历史。[2 条评论](https://github.com/earendil-works/pi/issues/9482)

---

## 关键 PR 进展

1. **[#9724] fix(ai): 对格式错误的 Retry-After 日期回退到指数退避**  
   格式错误的 `Retry-After` HTTP 日期产生 `NaN` 延迟导致立即重试 429。现在回退到指数退避；`validateServerRetryDelayMs` 拒绝非有限延迟。[已关闭](https://github.com/earendil-works/pi/pull/9724)

2. **[#9722] fix(ai): 重试无诊断体的 opaque 4xx 错误**  
   返回裸 4xx 错误的网关（如 OpenAI SDK 的 `BadRequestError "400 status code (no body)"`）现在会重试而不是快速失败。添加 `4\d{2} status code` 模式。[已关闭](https://github.com/earendil-works/pi/pull/9722)

3. **[#9720] fix(ai): 通过 thinkingLevelMap 驱动 Mistral 推理分发，添加 zai-glm-5-3**  
   `usesReasoningEffort` 现在使用 `model.thinkingLevelMap !== undefined` 而不是硬编码允许列表；在 Mistral 模型目录中添加 `zai-glm-5-3`。[已关闭](https://github.com/earendil-works/pi/pull/9720)

4. **[#9719] feat(tui): 使默认工具 shell 垂直内边距可配置**  
   添加 `toolShellPaddingY` 设置（0 或 1，默认 1），用于默认 shell 渲染器框的垂直内边距。[已关闭](https://github.com/earendil-works/pi/pull/9719)

5. **[#9717] fix(coding-agent): 在压缩摘要中限制仅思考消息**  
   防止在助手响应仅包含思考时序列化整个推理内容，避免压缩请求过大。[已关闭](https://github.com/earendil-works/pi/pull/9717)

6. **[#9714] feat(ai): 支持 Azure Foundry Chat Completions 部署**  
   实现 Azure Foundry Chat Completions 支持（如 `deepseek-v4-pro`），扩展 Responses API 之外的 Foundry 部署。[开启中](https://github.com/earendil-works/pi/pull/9714)

7. **[#9630] feat(coding-agent): 添加事件处理程序取消订阅**  
   `pi.on(...)` 现在支持取消订阅；每次调度首先创建处理程序列表的副本，允许在飞行中调度时安全地添加/移除。[已关闭](https://github.com/earendil-works/pi/pull/9630)

8. **[#9668] feat(coding-agent): 添加提示缓存预热**  
   实验性支持在请求之间保持提示缓存温暖以减少延迟。[开启中](https://github.com/earendil-works/pi/pull/9668)

9. **[#9706] fix(coding-agent): 验证转录中的 eval prompts**  
   验证转录中针对系统 prompt 的文档变体；验证失败时附加部分规范化运行。[已关闭](https://github.com/earendil-works/pi/pull/9706)

10. **[#9692] fix(tui): 截断溢出的渲染行而不是崩溃**  
    修复渲染行超出终端宽度时的崩溃——现在截断而不是抛出未捕获异常。[已关闭](https://github.com/earendil-works/pi/pull/9692)

---

## 热门讨论

*源数据中无讨论内容。*

---

## 功能请求趋势

从最近的 issue 和 PR 中可以看出以下主题：

- **提供商弹性与重试逻辑**：多个 PR 和 issue 解决Transient错误的更好处理——格式错误的 Retry-After 头、可重试错误分类等。
- **跨平台 shell 解析**：Windows 特定的 shell 路径解析仍然存在问题；需要跨环境的确定性行为。
- **压缩与内存管理**：围绕压缩中的思考消息处理、过期的签名内容重放和 token 限制管理的问题。
- **Azure/Foundry 集成**：扩展对 Azure Foundry 部署的支持，超出 Responses API。
- **会话迁移安全性**：关于就地文件迁移无备份的担忧（#9708）。

---

## 开发者痛点

- **离线模式意外受限**：`PI_OFFLINE` 禁用的功能远超文档说明，破坏模型发现。
- **错误分类不准确**：空响应 400 被错误分类为上下文溢出导致大量数据丢失。
- **Windows shell 解析不一致**：扩展加载干扰 shell 路径设置。
- **压缩状态管理**：过期的签名思考块导致重复 API 错误；事件时序问题困扰扩展。
- **终端渲染崩溃**：溢出的渲染行崩溃整个会话而不是优雅处理。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese (Simplified Chinese). Let me carefully translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, code spans, code blocks verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths as-is
5. Use natural technical Chinese, register of a Chinese developer newsletter

Let me translate section by section:

## Today's Highlights

Qwen Code released **v0.24.0** including the new Desktop application and nightly builds with ACP permission queue fixes and shared output modes. Critical bug fixes address React error #185 crashes in the TUI, session management vulnerabilities, and Windows path sanitization leaks. The project continues heavy investment in context management performance, with multiple PRs targeting token estimation and budget scaling issues.

---

## Releases

### v0.24.0 (Desktop)
**Qwen Code Desktop v0.24.0** — The desktop application reaches stable v0.24.0 with:
- **fix(cli):** ACP permission queue now scoped to the session (`#11802`)
- **feat(channels):** Added shared output modes

[Release notes](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.0)

### v0.24.0-nightly.20260917
- **docs(serve):** Recorded merged ACP boundary acceptance (`#12024`)
- **fix(ci):** Wait for published export retry logic

[Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260917.f822124af5)


---

## Hot Issues

I'll focus on the critical issues section, highlighting the key technical challenges:

### React Error #185 Crashes — TUI and Desktop
Qwen Code 0.23.3 experiences significant instability with unhandled React error #185, causing frequent application crashes during active native monitor tasks. The problematic issue is tracked under [#11732](https://github.com/QwenLM/qwen-code/issues/11732), indicating a systemic problem in both terminal and desktop interfaces that disrupts user workflow.

A related issue [#11783](https://github.com/QwenLM/qwen-code/issues/11783) reveals similar crash patterns in the terminal user interface shortly after registering background shell tasks, suggesting a deeper architectural vulnerability in task management and resource handling.

### Callback Identity Scheduler Bug
Technical investigation points to a potential root cause in `useReactToolScheduler`, which potentially reconstructs its `CoreToolScheduler` when callback identities change, creating unpredictable runtime behavior.

### Worktree Settings Write to Wrong Location
Git worktree configuration is incorrectly saving settings to the global or project-root `.qwen/settings.json` instead of the specific worktree's dedicated configuration file. This misconfiguration can lead to unintended settings bleeding between different worktree environments, particularly problematic in workflows requiring strict agent isolation.

### Parameterless Tools Serialized as Null
Tools lacking parameter definitions are causing serialization failures, with `parameters` fields being incorrectly set to `null` or `{}`. This serialization issue triggers request rejections in strict OpenAI-compatible gateway implementations, creating potential integration barriers.

### OpenRouter Header Mismatch
A subtle header naming discrepancy exists between the OpenRouter preset and the service's actual accepted header format, with mismatched `X-OpenRouter-Title` and `X-Title` potentially causing attribution problems.

### Session Deletion Breaks Transcript Integrity
Session deletion triggers an unexpected side effect where transcript files become unlinked, causing critical data integrity problems for session history and auto-continue functionality.

### Windows Path Sanitization Leak
Windows path handling reveals a significant information disclosure vulnerability. The `sanitizeErrorMessage()` function fails to comprehensively scrub file paths, potentially exposing sensitive parent directory information to model-generated text.

### Security: Bash Async Operator Bypass
Security researchers have identified a critical vulnerability in the `isAsyncOperator` function. The function incorrectly treats multiple Unicode whitespace characters as word separators, enabling potential command injection through carefully crafted input strings. This design flaw could allow malicious actors to bypass Bash security rules and execute unauthorized commands.

### Context Budgets Scale Incorrectly at Large Windows
Context window scaling presents a complex problem where percentage-based budgets fail to maintain consistent performance as window sizes increase. The current implementation prevents critical system features like ToolSearch preloading and context warnings from functioning correctly at scale.

### No Early Termination on Repeated Tool Errors
The current system lacks a robust mechanism to handle persistent tool error scenarios. When tools consistently return errors, the system continues executing, potentially consuming massive computational resources without any interruption strategy.

---

## Key PR Progress

The development team is addressing multiple critical issues. Significant progress includes maintaining MCP App HTML in recorded transcripts, implementing workspace runtime stop functionality, improving Linux installer compatibility, and enhancing security through Bash comment parsing. Notably, Chrome Native Messaging support and Windows-specific file path handling are receiving targeted improvements.

| PR | Author | Description |
|----|--------|-------------|
| [#12131](https://github.com/QwenLM/qwen-code/pull/12131) | yiliang114 | **fix(core):** Keep MCP App HTML in recorded transcripts for replay rendering |
| [#12008](https://github.com/QwenLM/qwen-code/pull/12008) | doudouOUC | **feat(serve):** Let users stop workspace runtimes to release ACP capacity |
| [#12115](https://github.com/QwenLM/qwen-code/pull/12115) | dijeddontahiri | **fix(installer):** Preflight glibc for standalone Linux archives (CentOS 7 compatibility) |
| [#12120](https://github.com/QwenLM/qwen-code/pull

/cn) | qqqys | **refactor(goal):** Delete evidence checkpoint and catalog code (no callers since #12105) |
| [#12096](https://github.com/QwenLM/qwen-code/pull/12096) | yiliang114 | **fix(core):** Handle simple Bash comments in permission rules (fixes #11815) |
| [#12067](https://github.com/QwenLM/qwen-code/pull/12067) | doudouOUC | **feat(core):** Add bwrap execution foundation for Linux sandboxing |
| [#12050](https://github.com/QwenLM/qwen-code/pull/12050) | ytahdn | **feat(web-shell):** Expose slash-command exports as artifacts |
| [#11242](https://github.com/QwenLM/qwen-code/pull/11242) | tanzhenxin | **feat(browser-use):** Add Chrome Native Messaging relay for CDP bridging |

Multiple teams are collaborating on core system improvements, including shell command handling, Linux sandboxing, and browser integration. Key efforts involve implementing comment parsing, creating web shell artifacts, and developing Chrome Native Messaging for enhanced browser interaction.

The Chrome Extension & Browser SDK team is advancing remote webview capabilities, addressing potential failure scenarios. Current development focuses on expanding browser interaction mechanisms and improving system reliability.

Developers are experiencing critical pain points around React crash instability, particularly in terminal and desktop interfaces. Session management fragility and Windows incompatibility are creating significant workflow disruptions, with background tasks causing unexpected application crashes and worktree configuration bleeding across projects.

Windows-specific challenges include path sanitization issues, test environment limitations, and cross-platform compatibility problems. Test reliability remains a major concern, with cron-interactive timeouts, platform-specific failures, and hidden error conditions compromising continuous integration processes.

The context system faces transparency challenges around budget management and extension file loading. Token budget breakdowns lack accuracy, while file context and percentage budgets encounter silent failures at larger operational scales. Security vulnerabilities in Bash permission rules compound these technical complexities.</think>

# Qwen Code 社区简报 — 2026-09-18

## 今日要闻

Qwen Code 发布 **v0.24.0**，包含全新 Desktop 应用及夜间构建版本，修复了 ACP 权限队列问题并新增共享输出模式。本次更新解决了 TUI 中 React error #185 崩溃、会话管理漏洞和 Windows 路径脱敏泄漏等关键问题。项目持续投入上下文管理性能优化，多个 PR 聚焦 token 估算和预算扩展问题。

---

## 版本发布

### v0.24.0 (Desktop)
**Qwen Code Desktop v0.24.0** — 桌面应用达到稳定版 v0.24.0，包含：
- **fix(cli):** ACP 权限队列现已限定在会话范围内（`#11802`）
- **feat(channels):** 新增共享输出模式

[发布说明](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.0)

### v0.24.0-nightly.20260917
- **docs(serve):** 记录合并后的 ACP 边界接受逻辑（`#12024`）
- **fix(ci):** 等待已发布产物的导出重试逻辑

[发布说明](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260917.f822124af5)

---

## 热门议题

### 1. React Error #185 崩溃 — TUI 和 Desktop
[#11732](https://github.com/QwenLM/qwen-code/issues/11732) | P1 | 8 条评论  
Qwen Code 0.23.3 在长时间运行的原生监控任务活动期间崩溃，抛出未捕获的 React error #185（"Maximum update depth exceeded"）。相关问题（[#11783](https://github.com/QwenLM/qwen-code/issues/11783)）显示 TUI 中也存在相同模式，在注册后台 shell 任务后数秒内触发。**影响：** 用户工作中途意外丢失会话。

### 2. 回调标识符调度器缺陷
[#12061](https://github.com/QwenLM/qwen-code/issues/12061) | P2 | 8 条评论  
`useReactToolScheduler` 在调用方回调标识符变化时会重新创建 `CoreToolScheduler`。`useLlmStream` 中的内联异步完成回调可能触发调度器切换，破坏活动的批量工具执行。**影响：** 生产会话中间歇性工具执行失败。

### 3. Worktree 配置写入错误位置
[#8138](https://github.com/QwenLM/qwen-code/issues/8138) | P2 | 7 条评论  
Git worktree 设置保存到全局/项目根目录的 `.qwen/settings.json`，而非 worktree 自身的 `.qwen/`。**影响：** Worktree 间配置混乱，在智能体隔离工作流中问题尤为突出。

### 4. 无参数工具序列化为 Null
[#11956](https://github.com/QwenLM/qwen-code/issues/11956) | P2 | 6 条评论  
无参数工具将 `parameters` 字段序列化为 `null` 或 `{}`，导致严格的 OpenAI 兼容网关拒绝整个请求。**影响：** 与第三方 LLM 代理的互操作失败。

### 5. OpenRouter 请求头不匹配
[#12072](https://github.com/QwenLM/qwen-code/issues/12072) | P3 | 6 条评论  
OpenRouter 预设发送 `X-OpenRouter-Title`，但 OpenRouter 仅识别 `X-Title` 用于应用归因。**影响：** OpenRouter 仪表板中缺少归因信息。

### 6. 删除会话破坏转录完整性
[#12091](https://github.com/QwenLM/qwen-code/issues/12091) | P1 | 4 条评论  
删除实时会话会解除其转录文件链接；仍附加的写入器会重新创建无头的文件，破坏 `parentUuid` 引用，导致会话历史永久降级。**影响：** 转录回放损坏，自动继续功能失效。

### 7. Windows 路径脱敏泄漏
[#12082](https://github.com/QwenLM/qwen-code/issues/12082) | P2 | 4 条评论  
在 Windows 上，`sanitizeErrorMessage()` 未一致地清理文件路径，将父目录名称泄漏到模型可见文本中。**影响：** 潜在信息泄露。

### 8. 安全：Bash 异步操作符绕过
[#11851](https://github.com/QwenLM/qwen-code/issues/11851) | P1 | 4 条评论  
`isAsyncOperator` 将 `\r`、`\v`、`\f` 和 `\u00a0` 视为单词分隔符，允许 Bash 允许规则覆盖嵌入这些字符后的第二条命令。**影响：** 权限规则绕过。

### 9. 大窗口上下文预算扩展错误
[#12029](https://github.com/QwenLM/qwen-code/issues/12029) | P2 | 4 条评论  
上下文窗口百分比的预算保护与窗口大小无关的费用，导致大窗口时失效。ToolSearch 预加载在大窗口上从不触发，上下文警告永不触发。**影响：** 大规模场景下性能降级。

### 10. 重复工具错误无提前终止
[#10887](https://github.com/QwenLM/qwen-code/issues/10887) | P1 | 4 条评论  
当工具反复返回相同错误时，会话陷入死循环，消耗 5-14M token 且无终止机制。**影响：** 生产环境中 token 大量浪费。

---

## 关键 PR 进展

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#12131](https://github.com/QwenLM/qwen-code/pull/12131) | yiliang114 | **fix(core):** 在转录中保留 MCP App HTML 以支持回放渲染 |
| [#12008](https://github.com/QwenLM/qwen-code/pull/12008) | doudouOUC | **feat(serve):** 允许用户停止工作区运行时以释放 ACP 容量 |
| [#12115](https://github.com/QwenLM/qwen-code/pull/12115) | dijeddontahiri | **fix(installer):** 为独立 Linux 压缩包预检查 glibc（CentOS 7 兼容性） |
| [#12120](https://github.com/QwenLM/qwen-code/pull/12120) | qqqys | **refactor(goal):** 删除证据检查点和目录代码（自 #12105 起无调用方） |
| [#12096](https://github.com/QwenLM/qwen-code/pull/12096) | yiliang114 | **fix(core):** 处理权限规则中的简单 Bash 注释（修复 #11815） |
| [#12067](https://github.com/QwenLM/qwen-code/pull/12067) | doudouOUC | **feat(core):** 为 Linux 沙箱添加 bwrap 执行基础 |
| [#12050](https://github.com/QwenLM/qwen-code/pull/12050) | ytahdn | **feat(web-shell):** 将斜杠命令导出为制品 |
| [#11242](https://github.com/QwenLM/qwen-code/pull/11242) | tanzhenxin | **feat(browser-use):** 添加 Chrome 原生消息传递中继以支持 CDP 桥接 |
| [#11765](https://github.com/QwenLM/qwen-code/pull/11765) | TianYuan1024 | **fix(core):** 在分割时将单引号内的反斜杠读取为字面量 |
| [#12117](https://github.com/QwenLM/qwen-code/pull/12117) | qwen-code-dev-bot | **fix(ci):** 重试失败监听器的任务日志下载一次 |

---

## 功能需求趋势

1. **Goal 运行时精简** — 多个议题（[#12053](https://github.com/QwenLM/qwen-code/issues/12053)、[#8105](https://github.com/QwenLM/qwen-code/issues/8105)）请求精简 Goal 运行时以根据当前轮次证据判定完成，并提供动态工作流的分阶段路线图（后台执行、控制、恢复）。

2. **上下文管理重构** — 议题 [#12030](https://github.com/QwenLM/qwen-code/issues/12030)、[#12029](https://github.com/QwenLM/qwen-code/issues/12029) 和 [#12033](https://github.com/QwenLM/qwen-code/issues/12033) 共同呼吁：
   - 无条件扩展上下文常驻，无路径门控
   - 修复大窗口时百分比预算失效问题
   - 完整的 `/context` 分类解析及正确归因

3. **增强 ACP/Zed 集成** — [#11361](https://github.com/QwenLM/qwen-code/issues/11361) 请求在 Zed 中实现正确的 AskUserQuestion UI，而非显示"Raw Input"。

4. **Chrome 扩展及浏览器 SDK** — [#11242](https://github.com/QwenLM/qwen-code/pull/11242) 启用了 Chrome 原生消息传递；后续工作预期处理远程 webview 故障模式（[#12059](https://github.com/QwenLM/qwen-code/issues/12059)）。

---

## 开发者痛点

1. **React 崩溃不稳定** — TUI 和 Desktop 中多种 React error #185 崩溃模式由后台任务触发。用户意外丢失工作。

2. **会话管理脆弱** — 删除实时会话破坏转录完整性；worktree 配置在项目间混乱。

3. **Windows 兼容性** — 路径脱敏泄漏、Windows CI 测试失败、独立安装器的 glibc 兼容性为 Windows 开发者带来摩擦。

4. **E2E 测试不稳定** — Cron 交互式超时、macOS 分片失败、临时制品下载失败导致 CI 不稳定，`continue-on-error` 隐藏真实故障。

5. **Token 预算不透明** — 上下文分类解析不准确，扩展文件无条件加载无门控，百分比预算大规模静默失效。

6. **安全边界情况** — Bash 权限规则存在多个绕过向量，涉异步操作符和注释解析。

---

*简报基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*