# AI CLI 工具社区动态日报 2026-10-08

> 生成时间: 2026-10-08 02:13 UTC | 覆盖工具: 7 个

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

<think>The user is asking me to translate a comprehensive cross-tool comparison report from English to Chinese. They've provided very specific rules about how to do the translation:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates verbatim
4. Keep project names, repository slugs, version tags, etc. in original form
5. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining the structure and using appropriate technical Chinese terminology.

Key terms to translate:
- CLI tools → CLI 工具
- cross-tool comparison → 跨工具对比
- ecosystem → 生态
- issues → Issue
- PRs → PR
- discussions → 讨论
- releases → Release/发布
- sandbox → 沙箱
- OAuth → OAuth (keep as is)
- memory/context → 内存/上下文
- enterprise → 企业级
- TUI → 终端用户界面 (but TUI is commonly used as-is in Chinese technical contexts)
- terminal → 终端
- authentication → 认证
- internationalization → 国际化

Let me translate this carefully:</think>

# 跨工具对比：AI CLI 工具生态全景

## 1. 生态概览

2026 年底的 AI CLI 工具生态呈现出成熟但高度碎片化的格局。七大主要工具竞相争夺开发者的关注，它们各自拥有独特的架构理念：Claude Code 强调可靠性，借助 Haiku 5.5 扩展上下文能力；Codex 深度集成 VS Code；Gemini CLI 在国际化方面领先；Copilot CLI 聚焦企业托管策略；OpenCode 以 TUI 创新为核心；Pi 推进终端状态报告；Qwen Code 则探索托管 Agent 架构。共同的主题包括 OAuth 认证复杂性、沙箱安全性和内存/上下文优化——这反映出底层挑战——即自主代码生成的问题——在各家供应商中尚未得到根本解决。

---

## 2. 活动对比

| 工具 | Issue（24小时） | PR（24小时） | 讨论 | Release（24小时） |
|------|-----------------|--------------|------|-------------------|
| Claude Code | 50（展示前30） | 7 | N/A | 1（v2.1.293） |
| OpenAI Codex | 50（展示前30） | 10 | 4 | 2（v0.162.0-alpha.17.1, v0.161.0） |
| Gemini CLI | 30（展示前30） | 10 | 3 | 1（v0.65.0-nightly） |
| GitHub Copilot CLI | 32（展示前30） | 0 | N/A | 4（v1.0.94 系列） |
| OpenCode | 50（展示前30） | 20 | N/A | 0 |
| Pi | 10 | 14 | 1 | 1（v1.1.0） |
| Qwen Code | 10 | 10 | 0 | 1（v0.25.0-nightly） |

**说明：**

- Claude Code、GitHub Copilot CLI 和 OpenCode 未将讨论作为主要渠道——这些工具通过 Issue 和内部论坛引导社区交流
- OpenCode 展示了最高的 PR 吞吐量（20 个），表明其迭代速度激进
- 尽管 GitHub Copilot CLI 的 Issue 量很高，但在快照期间没有 PR 活动
- 除 OpenCode 外，所有工具都维护着活跃的夜间版/alpha 版发布节奏（快照期间 OpenCode 无发布）

---

## 3. 共同的功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|----------|---------|---------|
| **跨会话记忆 / 持久化身份** | Claude Code, Gemini CLI | 共享上下文、目录级状态、跨会话待办追踪 |
| **增强的 effort / 思考控制** | Claude Code, Gemini CLI, OpenCode | 每次调用的 effort 参数、切换 effort 的快捷键、推理块管理 |
| **OAuth / 认证鲁棒性** | 所有工具 | 刷新令牌处理、超时修复、多提供商一致性、凭证持久化 |
| **沙箱 / 安全加固** | Claude Code, Codex, Copilot CLI, Gemini CLI | 目录白名单、网络过滤、执行后意图路由、ACL 诊断 |
| **MCP 集成改进** | 除 Pi 外所有工具 | 工具注册状态反馈、权限对话框可见性、自定义参数 OAuth |
| **Windows / WSL 一致性** | Codex, Copilot CLI, Gemini CLI | 终端集成、各 Windows 版本的沙箱支持、WSL 工作区处理 |
| **内存 / 压缩优化** | Claude Code, OpenCode, Pi, Qwen Code | Token 高效的会话处理、推理块过滤、上下文膨胀防护 |

---

## 4. 差异化分析

| 工具 | 核心焦点 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 子 Agent 可扩展性、Haiku 成本效益 | 寻求经济型长上下文编码的开发者 | AgentType 识别、MEMORY.md 持久化、远程控制集成 |
| **OpenAI Codex** | VS Code/Chrome 深度集成、多机器支持 | 有复杂 IDE 工作流的企业团队 | WebSocket 诊断、预测分支、Bazel 与 Cargo 并行构建 |
| **Gemini CLI** | 国际化、Google 生态 | 需要 zh/zht 本地化的全球团队 | 语言环境对等、OSC 7501 状态报告、多 Agent Bedrock 支持 |
| **GitHub Copilot CLI** | 企业托管策略、沙箱化 | 有严格安全/合规要求的组织 | 托管设置、策略强制、所有用户使用 `/sandbox` |
| **OpenCode** | TUI 创新、开源可扩展性 | 偏好终端优先工作流的开发者 | 全屏复制选中、配置模式、扩展边框小部件 |
| **Pi** | 终端状态感知、会话持久性 | 需要无头环境可观测性的团队 | OSC 7501 程序状态、邮件引用适配器、H5b/H5c 通道运行时 |
| **Qwen Code** | 托管 Agent 架构、Kubernetes 运行时 | 构建自定义 Agent 系统的高级团队 | 持久生命周期、双路径架构、CSI 运行时基础 |

---

## 5. 社区活跃度与成熟度

### 高频迭代（积极演进）
- **OpenCode** — 24 小时内 20 个 PR，国际化推进强劲，功能交付迅速
- **Pi** — 14 个 PR 覆盖扩展 API、模式、OAuth 修复；托管 Agent 架构渐成气候
- **Qwen Code** — 托管 Agent Stage D 后续更新持续推进；架构投入表明长期愿景

### 中频迭代（稳步推进）
- **Claude Code** — 7 个 PR，聚焦 Haiku 5.5 稳定发布；HIPAA 托管设置示例展现企业级意图
- **Gemini CLI** — 10 个 PR，夜间发布节奏，国际化活跃（中文对等已达成）
- **OpenAI Codex** — 10 个 PR，实验性缓存友好压缩已落地；Windows 沙箱问题仍是焦点

### 低频迭代（维护模式）
- **GitHub Copilot CLI** — 尽管有 32 个 Issue，但 0 个 PR；v1.0.94 系列显示发布活动但社区代码贡献有限

### 社区参与度（Issue + 讨论）
- **Claude Code** — 50 个 Issue，无可见讨论频道
- **OpenAI Codex** — 50 个 Issue + 4 个讨论（问答活跃）
- **Gemini CLI** — 30 个 Issue + 3 个讨论（功能反馈）
- **Qwen Code** — 10 个 Issue，0 个讨论（架构提案通过 Issue 提出）
- **Pi** — 10 个 Issue + 1 个讨论（想法频道活跃）

---

## 6. 趋势信号

### 新兴趋势

1. **托管 Agent 架构** — Qwen Code 的分阶段交付（#12380）和 Pi 的 H5b/H5c 通道运行时表明，工具正从简单的 CLI 向具有子会话、持久生命周期和可恢复工具执行的可扩展 Agent 平台转变。

2. **终端状态报告标准化** — Pi 采用 OSC 7501 和 Gemini CLI 的程序状态表明，终端将成为自主 Agent 的一级可观测性界面。

3. **国际化成为标配** — Gemini CLI 实现 986/986 中文语言环境键位，Qwen Code 添加俄语支持，表明全球开发者市场需要从第一天起就提供原生语言界面。

4. **企业安全趋同** — Claude Code 的 HIPAA 基线、Copilot CLI 的托管策略和 Gemini CLI 的 `permissions.limitTo` 表明，供应商正在优先投资合规就绪的配置，而非功能对等。

5. **沙箱成为通用功能** — Copilot CLI 对所有用户启用 `/sandbox` 和 Gemini CLI 的零依赖沙箱提案表明，安全边界将从可选变为默认开启。

### 持续痛点（跨工具信号）

- **认证/OAuth 脆弱性** — 出现在每个工具的焦点 Issue 中；刷新令牌可靠性、多提供商一致性和回调超时处理尚未被任何供应商根本解决
- **Windows 平台不一致** — 沙箱错误、终端集成和 WSL 兼容性横跨 Codex、Copilot CLI 和 Gemini CLI
- **内存/上下文膨胀** — Claude Code、OpenCode、Pi 和 Qwen Code 都在追踪压缩/Token 管理 bug；上下文效率的根本挑战仍未解决
- **内容泄漏** — Qwen Code（#10791, #10797）和 OpenCode（#2596）都在用户输出中暴露内部标签/格式——这表明这是 LLM 输出的普遍挑战

### 开发者决策信号

| 如果你需要... | 考虑 | 原因 |
|--------------|------|------|
| 成本效益高的长上下文编码 | Claude Code（Haiku 5.5 价格为 $0.10/M） | 唯一以低于美元价格提供 100 万上下文的工具 |
| 企业级合规就绪 | Claude Code（HIPAA）、Copilot CLI（托管策略） | 供应商正在积极投资合规基线 |
| 深度 VS Code 集成 | OpenAI Codex | 原生 Chrome 扩展、多机器支持 |
| 终端优先工作流 | Pi、OpenCode | OSC 7501 状态、边框小部件、全 TUI 自定义 |
| 中文语言支持 | Gemini CLI | 已达成完整语言环境对等 |
| 可扩展 Agent 平台 | Qwen Code | 托管 Agent 架构配以分阶段交付 |
| GitHub 生态锁定 | Copilot CLI | 原生 GitHub 集成、企业策略 |

---

*跨工具分析基于 2026-10-08 的 GitHub 数据编制。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this report about Claude Code Skills Community Highlights into Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining all the structure and technical terms:

- Title: Claude Code Skills 社区亮点报告
- Data Source: anthropics/skills (GitHub)
- Dates like October 8, 2026 should stay as-is
- Keep all URLs exactly as they are
- Table alignment rows (| --- |) should be preserved exactly

Let me go through and translate:</think>

# Claude Code Skills 社区亮点报告

**数据来源：** anthropics/skills (GitHub) | **截至：** 2026年10月8日

---

## 1. 热门技能排行

最活跃的 PR 涵盖了基础设施改进、平台集成和专业化领域技能的混合。虽然本数据集中确切的评论数量不可用，但这些 PR 展现了近期的活动与社区关注度：

| PR | 作者 | 重点 | 状态 |
|----|--------|-------|--------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** proofcore-contract-auditor | ProofCore-Protocol | 为 Web3 开发者添加智能合约自动化静态分析技能（支持 Solidity/Rust），通过 ProofCore 零存储 Merkle 协议将加密审计证明锚定到 TON 区块链。 | OPEN |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** mcp-builder v2 兼容性 | Kuldeeep18 | 通过更新重命名导入（`streamable_http_client`）并使用新的客户端工厂函数处理自定义头，实现 MCP ≥2.0.0 兼容性。解决 Issue #1668。 | OPEN |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** md2video-audio | 70v-Yoyo | 零成本技能，将 Markdown 文档编译成配有逼真人声的专业 MP4 视频（通过 Marp 转换）。 | OPEN |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 触发器评估 | MartinCajiao | 触发器评估关键修复：隔离每个 worker 的命令探测、修复 Windows 上的 select() 失败、阻止无关工具停止扫描、正确处理运行时失败为非触发器。 | OPEN |
| **[#1961](https://github.com/anthropics/skills/pull/1961)** skill-creator eval-viewer 加固 | Joncik91 | eval-viewer 安全加固：解决脚本逃逸、DNS 重绑定、跨站 POST 漏洞以及本地 HTML 渲染器的转义问题。 | OPEN |
| **[#1245](https://github.com/anthropics/skills/pull/1245)** notion-spec-to-implementation | mrdesouzaphd-cmyk | 将产品/技术规范转换为具体的 Notion 任务，包含实施计划、验收标准和进度跟踪。还包含一个定量简历审计器。 | OPEN |

---

## 2. 社区需求趋势

Issues 揭示了社区正在积极请求或反馈的问题：

| Issue | 评论数 | 主题 |
|-------|----------|-------|
| **[#492](https://github.com/anthropics/skills/issues/492)** 安全：社区技能伪装 anthropic/ 命名空间 | **43** | **信任与安全** — 社区技能冒充官方技能造成信任边界漏洞；用户可能在不知情的情况下授予提升的权限。 |
| **[#228](https://github.com/anthropics/skills/issues/228)** 启用组织级技能共享 | **16** | **企业/工作流** — 组织内共享技能库的请求；当前手动上传流程繁琐。 |
| **[#556](https://github.com/anthropics/skills/issues/556)** run_eval.py：0% 触发率 | **12** | **开发者体验** — `claude -p` 从不触发评估中的技能/命令；阻碍技能质量验证。 |
| **[#62](https://github.com/anthropics/skills/issues/62)** 所有技能都消失了 | **10** | **可靠性** — 文件重命名后技能丢失；需要更好的持久化/处理。 |
| **[#1487](https://github.com/anthropics/skills/issues/1487)** claude-api 注入约 156k tokens | **4** | **性能** — 过度积极的技能注入导致上下文窗口耗尽。 |

**新兴方向：** 安全加固、企业协作功能和可靠性/性能优化是主要关注点。社区还表现出对**领域特定技能**（Web3/智能合约、视频生成、Notion 集成）的强烈兴趣。

---

## 3. 高潜力待合并技能

这些 PR 近期有更新，代表了有意义的添加，可能即将合并：

| PR | 作者 | 技能 | 最后更新 | 优先级 |
|----|--------|-------|--------------|----------|
| **[#1792](https://github.com/anthropics/skills/pull/1792)** fix(docx)：LibreOffice 超时处理 | TINGyu123644 | DOCX 处理 | 2026-09-25 | 高 |
| **[#1730](https://github.com/anthropics/skills/issues/1730)** fix(claude-api)：失效 URL 替换 | GISWLH | 文档修复 | 2026-10-04 | 中 |
| **[#1681](https://github.com/anthropics/skills/pull/1681)** skill-creator：直接执行修复 | Kuldeeep18 | 开发者工具 | 2026-09-27 | 中 |
| **[#1980](https://github.com/anthropics/skills/pull/1980)** webapp-testing：移除 shell=True | Pcmhacker-piro | 安全修复 | 2026-10-06 | 高 |
| **[#1977](https://github.com/anthropics/skills/pull/1977)** algorithmic-art：wrapAround 修复 | gerardrecinto | Bug 修复 | 2026-10-07 | 低 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求是基础设施可靠性和安全加固** — 证据包括最高评论量的 issue（#492 关于信任边界）、多个 eval-viewer 安全修复 PR（#1961）、命令注入修复（#1988）以及 Windows/运行时兼容性（#1298）—— 同时对专业化领域技能（Web3、视频生成、Notion 工作流）的兴趣也在增长。

---

*报告数据来源于 GitHub，截至 2026 年 10 月 8 日。*

---

<think>The user wants me to translate this Claude Code Community Digest into Chinese. I need to:

1. Translate all the content into Chinese
2. Keep all the formatting (headings, tables, lists, bold, etc.)
3. Keep URLs, code references, issue numbers, version numbers, etc. as-is
4. Use natural technical Chinese suitable for a developer newsletter

Let me translate section by section:

**Headline:**
Claude Code 社区简报 — 2026-10-08

**Today's Highlights:**
The v2.1.293 release introduces Claude Haiku 5.5 as the new default Haiku model with 1M context window at $0.10/$0.50 per Mtok, significantly expanding affordable long-context capabilities. Meanwhile, the issue tracker shows intensifying community concern around Remote Control reliability and auto-update behavior disrupting active sessions across platforms.

v2.1.293 版本发布了，新增 Claude Haiku 5.5 作为新的默认 Haiku 模型，100 万上下文窗口费用仅为 $0.10/$0.50 每百万 token，大幅提升了可负担的长上下文能力。同时，问题追踪器显示社区对 Remote Control 可靠性的担忧日益加剧，自动更新行为正在干扰各平台的活跃会话。

**Releases:**

**v2.1.293 (2026-10-08):**

| Change | Details |
|--------|---------|
| **Claude Haiku 5.5** | New default Haiku model on Anthropic API — 1M context, $0.10/$0.50 per Mtok ($0.50/$2.50 for prompts over 100K) |
| **Subagent identification** | Added `agentType` to `subagentStatusLine` payload — enables scripts to distinguish custom subagent types |

*Release notes appear truncated; additional changes may not be captured.*

版本说明似乎被截断了；可能还有其他更改未收录。

**Hot Issues:**

| # | Issue | Summary | Engagement |
|---|-------|---------|------------|


1. **[#69336](https://github.com/anthropics/claude-code/issues/69336)** | **[BUG] API Error: Connection closed mid-response** — occurs immediately in new context window. Linux platform, API/agent-sdk area. | 20 comments, 21 👍 |
2. **[#92276](https://github.com/anthropics/claude-code/issues/92276)** | **[BUG] Desktop 1.44121.4+ never auto-enables Remote Control for scheduled-task sessions** — regression from 1.40609.0, Windows

I notice the conversation was abruptly interrupted mid-sentence. I'll complete the thought by copying the next thinking up to the first line break, then stop.</think>

# Claude Code 社区简报 — 2026-10-08

## 今日要闻

v2.1.293 版本发布了，新增 **Claude Haiku 5.5** 作为新的默认 Haiku 模型，100 万上下文窗口费用仅为 $0.10/$0.50 每百万 token（超过 10 万 token 的提示词为 $0.50/$2.50），大幅提升了可负担的长上下文能力。同时，问题追踪器显示社区对 **Remote Control 可靠性** 的担忧日益加剧，自动更新行为正在干扰各平台的活跃会话。

---

## 版本发布

### v2.1.293 (2026-10-08)

| 变更 | 详情 |
|------|------|
| **Claude Haiku 5.5** | Anthropic API 上的新默认 Haiku 模型 — 100 万上下文，$0.10/$0.50 每百万 token（超过 10 万 token 的提示词 $0.50/$2.50） |
| **子代理识别** | 在 `subagentStatusLine` 载荷中新增 `agentType` — 支持脚本区分自定义子代理类型 |

*版本说明似乎被截断了；可能还有其他更改未收录。*

---

## 热门议题

| # | 议题 | 摘要 | 关注度 |
|---|------|------|--------|
| 1 | **[#69336](https://github.com/anthropics/claude-code/issues/69336)** | **[BUG] API 错误：响应中途连接关闭** — 在新上下文窗口中立即发生。Linux 平台，API/agent-sdk 区域。 | 20 条评论，21 👍 |
| 2 | **[#92276](https://github.com/anthropics/claude-code/issues/92276)** | **[BUG] Desktop 1.44121.4+ 无法为计划任务会话自动启用 Remote Control** — 来自 1.40609.0 的回归问题，仅限 Windows | 10 条评论，6 👍 |
| 3 | **[#87834](https://github.com/anthropics/claude-code/issues/87834)** | **[功能] 跨 Claude 会话的共享内存/持久身份** — 请求会话间的上下文延续 | 10 条评论 |
| 4 | **[#87003](https://github.com/anthropics/claude-code/issues/87003)** | **[BUG] Remote Control：CLI 报告"已请求移动端推送"但 Android 设备从未收到** — 在 2.1.233 上仍可复现 | 9 条评论，6 👍 |
| 5 | **[#99192](https://github.com/anthropics/claude-code/issues/99192)** | **[BUG] Code 标签页终端集成在 Windows (MSIX 安装) 上失败** — 终端 shell 在虚拟化 AppData 中找不到集成文件 | 7 条评论 |
| 6 | **[#61904](https://github.com/anthropics/claude-code/issues/61904)** | **[功能] 添加 chat:cycleEffort / chat:increaseEffort / chat:decreaseEffort 操作** — 用于快捷键的 effort 切换单键操作 | 7 条评论，3 👍 |
| 7 | **[#92402](https://github.com/anthropics/claude-code/issues/92402)** | **[功能] 主聊天窗口的麦克风快捷键** — macOS 桌面应用 | 7 条评论，3 👍 |
| 8 | **[#95364](https://github.com/anthropics/claude-code/issues/95364)** | **[BUG] Desktop 自动更新在用户离开时退出并重启，导致所有 Remote Control 会话中断** — macOS | 6 条评论，4 👍 |
| 9 | **[#97727](https://github.com/anthropics/claude-code/issues/97727)** | **[BUG] Max 订阅用户：网页/桌面登录被重定向至 claude.ai/onboarding** — 已有账户被强制进入"创建账户"流程 | 6 条评论 |
| 10 | **[#99403](https://github.com/anthropics/claude-code/issues/99403)** | **[BUG] MEMORY.md 超出大小限制时被静默截断** — 无提示哪些条目被丢弃 | 5 条评论 |

---

## 关键 PR 进展

| # | PR | 摘要 |
|---|-----|------|
| 1 | **[#100293](https://github.com/anthropics/claude-code/pull/100293)** | **新增 HIPAA 托管设置示例** — `hipaa-baseline.json`、托管 MCP 锁定配置，符合 HIPAA 合规组织的 README |
| 2 | **[#82320](https://github.com/anthropics/claude-code/pull/82320)** | **修复 examples/gateway/aws/setup.sh 在原生 macOS bash 3.2 上中止的问题** — 解决 `${DIST_SHA256,,}` 不兼容问题 |
| 3 | **[#86746](https://github.com/anthropics/claude-code/pull/86746)** | **修复(安全指南)：保留 Python 探测错误** — 修复 #86709，当所有 Python 解释器失败时保留 stderr 诊断信息 |
| 4 | **[#85323](https://github.com/anthropics/claude-code/pull/85323)** | **修复(插件开发)：解析块标量代理描述** — 修复 `validate-agent.sh` 中 YAML `description: |` / `>` 的解析问题 |
| 5 | **[#84364](https://github.com/anthropics/claude-code/pull/84364)** | **修复(hookify)：pretooluse 钩子异常时以关闭状态失败** — 安全修复：异常现在发出 `permissionDecision: 'deny'` |
| 6 | **[#85716](https://github.com/anthropics/claude-code/pull/85716)** | **修复(hookify)：从祖先 .claude 目录加载规则** — 防止静默安全绕过（修复 #85613） |
| 7 | **[#41447](https://github.com/anthropics/claude-code/pull/41447)** | **功能：开源 claude code ✨** — 将 Claude Code 开源的宏大计划 |

---

## 功能请求趋势

基于议题分析，最受请求的功能增强包括：

| 主题 | 描述 |
|------|------|
| **跨会话记忆** | 跨会话的持久身份和共享上下文 (#87834) |
| **Effort 控制** | Agent 工具的每次调用 effort 参数，快捷键切换 effort (#61904, #98391) |
| **目录沙箱** | 超越 Bash 工具的 Read/Write/Edit 允许列表/拒绝列表支持 (#92643) |
| **平台集成** | 麦克风快捷键、Remote Control 改进、终端集成修复 |
| **Gerrit 工作流支持** | 更好的栈管理和 Gerrit 跨会话记忆 (#97602) |

---

## 开发者痛点

### 反复出现的问题

1. **Remote Control 可靠性** — 多个议题 (#92276, #87003, #95364, #95276) 报告因自动更新、Android 推送失败和计划任务回归问题导致会话中断

2. **自动更新干扰** — Desktop 应用在后台静默更新后重启，导致 Remote Control 会话断开 (#95364, #95276)

3. **Windows MSIX/EFS 不兼容** — Cowork VM 在 Windows 上无法启动，原因是 EFS 加密的 LocalCache 阻止了 Hyper-V 创建 `sessiondata.vhdx` (#83703, #98457, #100354)

4. **静默截断** — MEMORY.md 超出大小限制时无明确反馈哪些条目被丢弃 (#99403)

5. **权限分类器问题** — Auto 模式分类器在离开 auto 模式后继续阻止用户已批准的操作 (#98169)；网络驱动器 Write 操作返回"无判决" (#100368)

6. **子代理模型路由** — 自定义子代理 frontmatter 中的模型（haiku/sonnet）被忽略，仍在父级 Opus 模型上运行 (#100082)

7. **身份验证边界情况** — 已有账户的 Max 订阅用户被重定向到引导流程 (#97727)

---

*简报基于 GitHub 数据生成 — anthropics/claude-code | 2026-10-08*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this OpenAI Codex Community Digest from English to Chinese. Let me follow the rules:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, version tags, API identifiers in original form
5. Use natural technical Chinese, register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure:</think>

# OpenAI Codex 社区动态
**日期：** 2026年10月8日

---

## 1. 今日要闻

Windows 用户正遭受严重干扰——**关键的文件共享冲突**（error 32）影响多个构建版本（26.1002.51308、26.1002.52244），导致命令执行、浏览器控制和计算机使用功能完全无法使用。最新版本将 **GPT-6.1 Sol** 设为默认模型，并扩展了 Amazon Bedrock 功能，支持多智能体 V2 和 Ultra 推理。

---

## 2. 版本发布

### v0.162.0-alpha.17.1
- Rust 代码库的 Alpha 版本

### v0.161.0
- **GPT-6.1 Sol** 现已成为捆绑版和 Amazon Bedrock 目录中的默认模型（[#49318](https://github.com/openai/codex/issues/49318)、[#49339](https://github.com/openai/codex/issues/49339)）
- **Amazon Bedrock** 现支持多智能体 V2 和兼容模型上的 Ultra 推理
- **Bedrock Mantle** 接受 AWS GovCloud 区域（[#49345](https://github.com/openai/codex/issues/49345)、[#49813](https://github.com/openai/codex/issues/49813)）
- 支持从改进的身份验证流程登录 MCP 服务器

---

## 3. 热门问题

| # | 问题 | 评论数 | 重要性 |
|---|------|--------|--------|
| 1 | **[#51601](https://github.com/openai/codex/issues/51601)** — 运行时验证期间 Windows 沙箱文件共享冲突 | 54 | 严重 bug，阻塞 Windows 26.1002.51308 上的所有命令执行；似乎是文件锁定问题 |
| 2 | **[#50428](https://github.com/openai/codex/issues/50428)** — Windows 持久化聊天失败，AbsolutePathBuf 反序列化错误 | 22 | 导致云端聊天的分支和线程功能在 Windows 上失效 |
| 3 | **[#51590](https://github.com/openai/codex/issues/51590)** — 打开 node_repl.exe 时沙箱错误 32，涉及 ACL | 21 | Windows 11 上计算机使用和 shell 命令无法执行 |
| 4 | **[#48311](https://github.com/openai/codex/issues/48311)** — Windows LaTeX 编译器无法找到标准目录 | 20 | 内置 LaTeX 编辑器/编译器在 Windows 上完全无法使用 |
| 5 | **[#49351](https://github.com/openai/codex/issues/49351)** — 语音听写在 VS Code 中返回 403 Forbidden | 14 | VS Code 扩展语音输入损坏，但 macOS 应用正常工作 |
| 6 | **[#48666](https://github.com/openai/codex/issues/48666)** — Git 进程累积导致内存占用 98% | 13 | 严重内存泄漏；系统变得无响应 |
| 7 | **[#51707](https://github.com/openai/codex/issues/51707)** — Chrome 扩展反复丢失调试器/焦点 | 10 | Windows 上的浏览器使用功能受损 |
| 8 | **[#29857](https://github.com/openai/codex/issues/29857)** — MCP exec 静默自动取消工具调用 | 10 | `codex exec` 忽略 `default_tools_approval_mode` 配置 |
| 9 | **[#51778](https://github.com/openai/codex/issues/51778)** — Windows 沙箱在 26.1002.52244 中失败 | 8 | 又是 Windows 沙箱回归测试的变体 |
| 10 | **[#49980](https://github.com/openai/codex/issues/49980)** — WSL 代理工具因工作区 URI 错误失败 | 8 | Windows Server 2025 上的 WSL 集成损坏 |

---

## 4. 关键 PR 进展

| # | PR | 状态 | 摘要 |
|---|-----|------|------|
| 1 | **[#31657](https://github.com/openai/codex/pull/31657)** | 进行中 | 重试临时性 Codex 应用文件上传失败——防止一次传输失败消耗预签名 URL |
| 2 | **[#51908](https://github.com/openai/codex/pull/51908)** | 已关闭 | 尊重异步问题的用户输入设置——现需显式启用 |
| 3 | **[#51897](https://github.com/openai/codex/pull/51897)** | 已关闭 | 网络域策略专用匹配器——支持带 `?` 通配符的 Unicode 主机 |
| 4 | **[#51896](https://github.com/openai/codex/pull/51896)** | 已关闭 | 在 Windows 沙箱 ACL 诊断中保留原生错误——改进故障可见性 |
| 5 | **[#51895](https://github.com/openai/codex/pull/51895)** | 已关闭 | 报告具体的 WebSocket 持续失败原因——替换通用的 `other` |
| 6 | **[#51893](https://github.com/openai/codex/pull/51893)** | 已关闭 | 记录增量工具更新的指标，使用 `codex.tools.incremental_updates` |
| 7 | **[#51892](https://github.com/openai/codex/pull/51892)** | 已关闭 | 参数被截断时保留工具调用完整性——修复 `tool_calls_complete` 逻辑 |
| 8 | **[#51884](https://github.com/openai/codex/pull/51884)** | 已关闭 | 添加继承父级上下文的实验性预测分支——最大化提示缓存复用 |
| 9 | **[#51856](https://github.com/openai/codex/pull/51856)** | 已关闭 | 随 Cargo 一起构建 Bazel 发布工件——发布带 `-bazel` 后缀的二进制文件 |
| 10 | **[#51872](https://github.com/openai/codex/pull/51872)** | 已关闭 | 保持全局应用服务器配置独立于启动目录 |

---

## 5. 热门讨论

### 问答
- **[#45938](https://github.com/openai/codex/discussions/45938)** — PreToolUse 可以阻止/重写调用，但无法替换结果——这是有意为之吗？（4 条评论）

### 综合
- **[#47524](https://github.com/openai/codex/discussions/47524)** — WSL2 上的 /voice 会话间歇性失败（1 条评论）
- **[#50980](https://github.com/openai/codex/discussions/50980)** — VS Code 队列修复：消息消失、发送卡住（2 条评论）

### 创意
- **[#27941](https://github.com/openai/codex/discussions/27941)** — 支持在一个客户端中连接多个远程 Codex 机器/运行时（1 条评论）

### 展示与分享
- **[#51825](https://github.com/openai/codex/discussions/51825)** — Project Architect：面向长期运行的 AI 编程项目的开源 Codex 技能
- **[#51759](https://github.com/openai/codex/discussions/51759)** — BigaCli：用于手机工作流和排队提示的 Windows Codex 工作区

---

## 6. 功能需求趋势

1. **Windows 稳定性** — 多项请求改进 Windows 沙箱稳定性和错误诊断
2. **SSH 连接** — 无需私钥的密码式 SSH 登录（[#44446](https://github.com/openai/codex/issues/44446)）
3. **远程多机器支持** — 单个客户端控制多个远程 Codex 运行时
4. **平台一致性** — WSL 集成改进、macOS/Windows 计算机使用功能对等
5. **会话恢复** — 重启/更新后恢复之前打开的窗口（[#27104](https://github.com/openai/codex/issues/27104)）

---

## 7. 开发者痛点

- **Windows 沙箱文件锁定** — 错误 32（文件共享冲突）阻塞所有执行，是当前最严重的问题，涉及 5 个以上相关工单
- **内存泄漏** — Git 进程累积导致内存占用达 98%（[#48666](https://github.com/openai/codex/issues/48666)）
- **MCP 配置被忽略** — `codex exec` 忽略 `default_tools_approval_mode` 设置（[#29857](https://github.com/openai/codex/issues/29857)）
- **WSL/Windows Server 故障** — 代理工具在 Windows Server 2025 和 WSL 工作区上失败
- **LaTeX 编译器回归** — 内置文档编译器在 Windows 上完全无法工作
- **VS Code 语音听写** — 扩展级别失败，但 macOS 应用正常（认证/403 问题）

---

*数据来源：github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the GitHub community digest from English to Chinese (Simplified Chinese based on the context). I need to:

1. Translate all the content while preserving the Markdown structure exactly
2. Keep all URLs, code references, issue numbers, file paths, etc. as-is
3. Use natural technical Chinese, appropriate for a developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me translate this carefully, maintaining all formatting and technical terms.</think>

# Gemini CLI 社区动态

**日期：** 2026-10-08  
**仓库：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 今日要闻

项目持续快速迭代，发布了新的每日构建版本（v0.65.0），修复了终端会话不变量和 CI 自动化方面的关键问题。安全性仍然是重点关注领域，包括 OAuth URL 封装漏洞和路径扩展风险的修复。社区特别关注子代理的行为问题——包括挂起、恢复失败和配置忽略——这表明对多代理工作流的依赖程度在不断提升。

---

## 版本发布

### v0.65.0-nightly.20261008.g44d764ee5
**发布日期：** 2026-10-08

**变更内容：**
- **修复(CI)：** 在 unassign-inactive-assignees 工作流中添加缺失的循环 ([#29609](https://github.com/google-gemini/gemini-cli/pull/29609)) — 由 @ugorla-dev 贡献
- **修复(核心)：** 强制执行终端用户轮次不变量并规范化请求内容 ([#29612](https://github.com/google-gemini/gemini-cli/pull/29612)) — 由 @luisfelipe-alt 贡献

---

## 热门 Issue

### 1. 子代理在达到 MAX_TURNS 后仍报告成功
[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 优先级：P1 | Bug | 13 条评论，2 👍

`codebase_investigator` 子代理在达到最大轮次限制前未能完成分析时，仍错误地报告 `status: "success"` 并附带终止原因 `"GOAL"`。这掩盖了中断情况，可能导致对任务完成状态的错误判断。

### 2. 通用代理在延期调用时挂起
[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 优先级：P1 | Bug | 8 条评论，8 👍

当 Gemini CLI 将控制权交给通用代理时，它会无限期挂起——即使像创建文件夹这样的简单操作也会卡住。用户报告等待长达一小时才被迫取消。临时解决方案是明确指示模型避免使用子代理。

### 3. OAuth 认证成功但 CLI 仍然不可用
[#29669](https://github.com/google-gemini/gemini-cli/issues/29669) | 优先级：P2 | 安全 | 3 条评论

用户报告 OAuth 登录在浏览器中显示成功，但 CLI 无法识别认证状态，导致工具无法使用。这阻碍了新用户的入门体验。

### 4. OAuth 回调超时导致未捕获的 Promise 拒绝
[#28512](https://github.com/google-gemini/gemini-cli/issues/28512) | 优先级：P1 | 安全 | 3 条评论（已关闭）

OAuth 回调超时时发生关键的未捕获 Promise 拒绝，导致 CLI 崩溃。对于已认证会话来说，这是一个重大的稳定性问题。

### 5. 浏览器代理忽略 settings.json 覆盖配置
[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 优先级：P2 | Bug | 4 条评论

浏览器代理完全忽略全局或项目级 `settings.json` 中提供的配置覆盖，包括 `maxTurns` 设置。虽然 `AgentRegistry` 在初始化期间正确读取并合并了这些设置，但浏览器代理未能应用它们。

### 6. Gemini 不够主动使用自定义技能和子代理
[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 优先级：P2 | Bug | 7 条评论

Gemini 很少自主调用自定义技能或子代理，即使任务与其描述高度相关（例如"gradle"或"git"技能）。用户必须明确指示模型使用这些资源。

### 7. 可用工具超过 128 个时返回 400 错误
[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 优先级：P2 | Bug | 3 条评论

当可用工具超过约 400 个时，Gemini CLI 会遇到 HTTP 400 错误。代理应该更智能地限制范围内的工具，而不是让 API 过载。

### 8. 模型在随机位置创建临时脚本
[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 优先级：P2 | Bug | 3 条评论

被限制直接执行 shell 时，模型会在各个目录中生成多个编辑脚本，导致提交前需要大量清理工作。

### 9. 代理应避免破坏性行为
[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | 优先级：P2 | Feature | 3 条评论，1 👍

模型偶尔会使用潜在破坏性命令（如 `git reset --force`），即使存在更安全的替代方案，特别是在复杂的 git 操作和数据库维护期间。

### 10. 符号链接的代理文件无法识别
[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | 优先级：P2 | Bug | 4 条评论

`~/.gemini/agents/` 中的符号链接代理文件无法被识别为有效的子代理，这限制了代理文件管理的灵活性。

---

## 关键 PR 进展

### 1. 修复 Read-Many-Files 的上下文膨胀问题
[#29457](https://github.com/google-gemini/gemini-cli/pull/29457) | 优先级：P1 | 规模：L/XL | **已关闭**

在 `read-many-files` 中将模糊的 `String.prototype.includes()` 匹配替换为 glob 匹配。二进制资产（图片、PDF、音频）被错误地视为"显式请求"，导致意外的上下文膨胀。

### 2. 将取消信号传播到 Shell 命令注入
[#29459](https://github.com/google-gemini/gemini-cli/pull/29459) | 优先级：P1 | 规模：M | **已关闭**

自定义命令中的 shell 注入现在可以正确响应取消信号。之前，`AbortController` 信号从未到达子进程，导致无法停止挂起的命令。

### 3. 防止不受信任的工作区覆盖设置
[#29466](https://github.com/google-gemini/gemini-cli/pull/29466) | 优先级：P1 | 规模：M | **已关闭**

修复了在不受信任文件夹中 `gemini mcp add` 静默破坏项目 `.gemini/settings.json` 的关键问题，只保留其写入的键。

### 4. 修复 Auth URL 封装问题
[#29460](https://github.com/google-gemini/gemini-cli/pull/29460) | 优先级：P1 | 规模：S/M | **已关闭**

长 OAuth URL 现在使用 OSC 8 终端超链接渲染，防止在认证期间导致 `Error 400: invalid_request` 的截断问题。

### 5. 防止粘贴文本中的 @path 扩展
[#29458](https://github.com/google-gemini/gemini-cli/pull/29458) | 优先级：P1 | 规模：M | **已关闭**

将 `ui.escapePastedAtSymbols` 改为默认 `true`，防止在粘贴包含 `@path` 引用的 shell 命令时意外上传文件。

### 6. 通过子树剪枝优化忽略过滤
[#29582](https://github.com/google-gemino/gemini-cli/pull/29582) | 优先级：P1 | 规模：L | **进行中**

引入分层目录级状态记忆化、通配符目录模式展开和内存符号链接缓存，以解决大型仓库中多秒阻塞延迟问题。

### 7. 修复 MCP 离线访问和 ClientSecret 保留
[#29578](https://github.com/google-gemini/gemini-cli/pull/29578) | 规模：M | **进行中**

修复了配置为针对 Google 端点使用 OAuth 2.0 的远程 MCP 服务器在首次登录时无法接收刷新令牌的问题。

### 8. 使 IdeServer.stop() 在打开的 MCP 会话存在时解析
[#29674](https://github.com/google-gemini/gemini-cli/pull/29674) | 规模：L | **进行中**

修复了当 Gemini CLI 会话连接到 VS Code 伴侣时 `IdeServer.stop()` 永不解析的问题，原因是 `http.Server.close()` 的行为。

### 9. 使中间重试退避支持中止
[#29670](https://github.com/google-gemini/gemini-cli/pull/29670) | 规模：M | **进行中**

在中间流重试期间取消请求（ESC）现在可以正确停止重试循环。之前，重试不会查询中止信号。

### 10. 防止无限验证和 OAuth 重试循环
[#29655](https://github.com/google-gemini/gemini-cli/pull/29655) | 优先级：P2 | 规模：L | **已关闭**

修复了即使完成认证并在 CLI 中按回车后，仍然无限循环显示浏览器验证和 OAuth 提示的问题。

---

## 功能需求趋势

基于 Issue 分析，社区正在请求：

1. **增强子代理智能** — 在无需用户明确提示的情况下，更好地自主使用自定义技能、子代理和工具选择
2. **支持 AST 感知的代码库操作** — 使用抽象语法树分析进行更精确的文件读取、搜索和映射，以减少 token 消耗
3. **提升安全态势** — 零依赖操作系统沙盒、更好的不受信任工作区处理和执行后意图路由
4. **持久化任务跟踪** — 从上下文内 LLM 记忆迁移到基于文件的待办事项 CRUD 操作
5. **终端性能优化** — 使用 RenderStatic 和批量更新实现无闪烁、窗口调整时的高性能行为

---

## 开发者痛点

1. **认证失败** — 多个 OAuth 和登录问题持续困扰用户，包括超时、回调失败和凭据刷新问题
2. **子代理可靠性** — 挂起、错误的状态报告以及无法从轮次限制中恢复，破坏了多代理工作流
3. **配置不一致** — 浏览器代理和其他组件忽略 `settings.json` 覆盖配置，导致意外行为
4. **大规模性能问题** — 大型仓库导致多秒阻塞延迟；忽略过滤需要优化
5. **安全摩擦** — 不受信任工作区的警告过于激进，以及对无害 POSIX 命令的确认阻止
6. **Token 上下文膨胀** — 二进制文件和大文件读取消耗过多上下文，影响代理性能

---

*基于 2026-10-08 的 GitHub 数据生成*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese. I need to:

1. Translate all the content into Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep all technical identifiers, URLs, issue numbers, version tags, etc. as-is
4. Use natural technical Chinese register

Let me go through the digest:

**Title and Date:**
- "GitHub Copilot CLI Community Digest" → "GitHub Copilot CLI 社区动态"
- "Date: 2026-10-08" → "日期：2026-10-08"

**Today's Highlights:**
- Translate the paragraph about the release notes

**Releases Table:**
- Translate headers: "Version" → "版本", "Key Changes" → "主要变更"
- Translate the release descriptions

**Hot Issues:**
- Translate each issue title and description
- Keep issue numbers and comment counts as-is

**Key PR Progress:**
- Translate the section

**Feature Request Trends:**
- Translate the list

**Developer Pain Points:**
- Translate the table and descriptions

**Footer:**
- Translate the end note

Let me do this translation now:</think>

# GitHub Copilot CLI 社区动态

**日期：2026-10-08**

---

## 今日要闻

GitHub Copilot CLI 发布了 1.0.94 系列版本，带来多项重要更新，包括在模型选择中新增 **Claude Haiku 5.5**、**所有用户现在可通过 `/sandbox` 使用命令沙箱功能**，以及企业权限控制 `permissions.limitTo`。但目前仍有多个高优先级问题待解决，包括 WSL2 上的剪贴板问题、Windows 上的 MCP 身份验证失败，以及影响目录访问的沙箱策略应用缺陷。

---

## 版本发布

| 版本 | 主要变更 |
|---------|-------------|
| **v1.0.94-3** | 在模型选择中添加 Claude Haiku 5.5（`--model completions`）。修复了托管设置禁止启动绕过权限标志时策略警告不显示的问题。 |
| **v1.0.94-0** | 改进托管设置请求更高版本 CLI 时的更新指导。托管策略现在可以禁用辅助权限并保持会话处于手动审批模式。 |
| **v1.0.93-4** | **命令沙箱功能现已向所有用户开放**，可通过 `/sandbox` 和 `--sandbox` 标志使用。修复了活跃状态下安全 `/user` 命令执行问题，拒绝不安全远程命令时不再弹出对话框。 |
| **v1.0.93** | 添加 `enterprise permissions.limitTo` 以强制执行网络请求的托管域边界。改进了活跃状态下的命令处理。 |

---

## 热点问题

### 1. WSL2 (ARM64)：`/copy` 因 `clip.exe` 引用错误导致失败
[#3534](https://github.com/github/copilot-cli/issues/3534) | 8 条评论 | 👍 6  
**严重程度：高** — 在 WSL2 Ubuntu ARM64 上，通过 Windows 路径写入剪贴板均失败，原因是 `cmd.exe` 的引用问题。影响在 ARM 设备上运行 WSL2 的 Windows 用户。

### 2. 从 copilot cli 复制命令时包含不可见字符
[#2285](https://github.com/github/copilot-cli/issues/2285) | 6 条评论 | 👍 10  
**严重程度：中** — 从渲染的代码块复制的命令包含不可见字符，导致粘贴到外部终端时出现"命令未找到"错误。

### 3. 奇怪的"剪贴板正被其他程序占用"提示信息
[#3172](https://github.com/github/copilot-cli/issues/3172) | 6 条评论 | 👍 14  
**严重程度：低** — 状态栏中偶尔出现剪贴板占用提示，破坏布局。社区反馈虽不影响使用但非常烦人。

### 4. 沙箱在 Windows 25H2 上启用但不支持
[#4652](https://github.com/github/copilot-cli/issues/4652) | 4 条评论 | 👍 0  
**严重程度：高** — Windows 25H2 构建版本的用户收到沙箱不支持的警告，导致 shell 命令和沙箱服务失败。

### 5. MCP：Cloudflare 连接失败，提示"订阅限额已达"
[#4991](https://github.com/github/copilot-cli/issues/4991) | 4 条评论 | 👍 0  
**严重程度：高** — 完成 OAuth 后，Cloudflare MCP 服务器报错"订阅限额已达"，随后错误地将身份验证状态报告为需要重新认证。

### 6. `/add-dir` 未将目录添加到沙箱允许列表
[#5076](https://github.com/github/copilot-cli/issues/5076) | 3 条评论 | 👍 0  
**严重程度：中** — `/add-dir` 命令无法将目录添加到沙箱允许列表，导致沙箱会话中无法访问文件。

### 7. 辅助权限回归问题
[#5066](https://github.com/github/copilot-cli/issues/5066) | 3 条评论 | 👍 1  
**严重程度：中** — 用户报告辅助权限模式现在对更多命令需要审批，包括简单的 PowerShell 文件列表命令。

### 8. Windows MCP Entra 登录因范围验证错误失败
[#5068](https://github.com/github/copilot_cli/issues/5068) | 2 条评论 | 👍 8  
**严重程度：高** — Windows 用户无法通过 Entra ID 保护的 MCP 服务器（Azure DevOps）进行身份验证，原因是范围验证失败。

### 9. `createpullrequest` 失败并提示"运行时设置未配置"但 PR 已创建
[#5028](https://github.com/github/copilot-cli/issues/5028) | 2 条评论 | 👍 0  
**严重程度：低** — 远程 WSL 会话中尽管 PR 成功创建，但仍返回错误信息。

### 10. `/ide` 因 EPERM 误读在 CLI 沙箱下找不到工作区
[#4909](https://github.com/github/copilot-cli/issues/4909) | 1 条评论 | 👍 0  
**严重程度：中** — 启用沙箱后，`/ide` 始终报告"未找到活动的 IDE 工作区"，即使 IDE 正在运行且 MCP 套接字可从沙箱内部访问。

---

## 主要 PR 进展

*过去 24 小时内没有 Pull Request 更新。*

---

## 功能需求趋势

根据问题分析，最常请求的功能方向为：

1. **沙箱策略管理改进** — 用户希望实现可靠的目录允许列表、跨主机网络过滤，以及跨平台一致的隔离
2. **MCP 集成优化** — 改进 MCP 服务器可靠性、身份验证处理和工具注册状态反馈的请求
3. **剪贴板功能改进** — 多个涉及剪贴板操作的问题，尤其是 WSL2 和跨平台场景
4. **增强权限控制** — 对辅助模式与手动审批模式之间更精细控制的需求
5. **沙箱下的 IDE 集成** — 启用沙箱时更好地检测和连接 IDE 工作区

---

## 开发者痛点

| 痛点 | 出现频率 |
|------------|-----------|
| **剪贴板操作失败** — WSL2/ARM64 上出现不可见字符导致命令执行失败 | 高 |
| **Windows 25H2 上沙箱不支持**，阻止安全功能使用 | 高 |
| **MCP 身份验证问题** — OAuth 失败、订阅限额、范围验证错误 | 高 |
| **策略应用缺陷** — `/add-dir` 不生效、沙箱设置未被遵守 | 中 |
| **沙箱启用时 IDE 检测失败** | 中 |
| **错误信息不准确**（如 PR 创建成功但报告失败） | 低-中 |

---

*本期动态结束。数据来源于 github.com/github/copilot-cli，截至 2026-10-08。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this English OpenCode Community Digest into Chinese, following specific translation rules. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the exact structure:

---

# OpenCode 社区简报 — 2026-10-08

## 今日要闻

OpenCode 社区继续保持活跃开发，国际化基础设施、远程配对功能和多项关键 bug 修复都取得了显著进展。剪贴板复制问题（#4283）仍是最受关注的问题，共 140 条评论，而 OpenTunnel 远程配对等新功能正在 PR 中推进。

---

## 版本发布

**过去 24 小时内无新版本发布。**

---

## 热门 issue

| # | Issue | 摘要 | 评论 | 👍 |
|---|-------|---------|----------|-----|
| #4283 | **[OPEN] 复制到剪贴板功能失效** | 从响应中选择文本时无法复制到剪贴板。自 v1.0.62 起影响多个操作系统版本。 | 140 | 130 |
| #15988 | **[CLOSED] 添加"立即重试"按钮跳过速率限制倒计时** | 特性请求：在速率限制倒计时期间允许手动重试，而非等待自动重试。 | 20 | 28 |
| #26602 | **[OPEN] 桌面端对慢速本地 providers 报 5 分钟 Headers 超时错误** | 桌面应用在恰好 5 分钟后中止本地 OpenAI 兼容 provider 请求，尽管已设置自定义超时。 | 18 | 2 |


| #52269 | **[OPEN] 间歇性 OpenAI 服务不可用** | 跨模型和会话出现间歇性上游连接故障；部分请求成功而其他请求反复失败。 | 10 | 2 |
| #51223 | **[OPEN] MCP 工具权限请求在 TUI 的 Code Mode 中从不弹出** | Code Mode 中 MCP 工具的权限对话框不可见；`execute` 无限期挂起直至用户中断。 | 7 | 0 |
| #47553 | **[OPEN] 桌面端 sidecar 进程 OOM 崩溃** | Sidecar 进程持续增长直至触发 512MB 内存限制，进程被强制终止。 | 5 | 0 |

The sidecar process keeps expanding until hitting the V8 heap limit (~3GB+), then gets killed by the OS. Windows 10 is affected.

Agent compaction settings aren't being applied - the `variant` parameter gets ignored during compaction, so it always uses the original message's variant instead.

Auto compaction includes reasoning blocks in the `recent` section while truncating tool results, which can paradoxically increase context size. OpenCode Go also fails to load because the redesigned Console is missing a Privacy setting, blocking access to paid endpoints that train on request data.

The CLI lost the `--agent` and `--model` flags in v2, breaking scripts since `opencode` now only accepts `--prompt`.

Key fixes include preserving the `--model` flag when resuming sessions via `--session` to match existing `--agent` behavior, enabling remote pairing through OpenTunnel with `opencode pair --remote`, and adding full i18n infrastructure for multi-language support in the TUI.

The UI now anchors revealed tools under sticky headers so they stay visible when selecting shells, Chinese translations are complete (986/986 keys aligned with English), and file links in the timeline validate against the filesystem to open at the correct line or show a filtered picker. GUI now handles `/auth` endpoints properly.

Several improvements address edge cases: session errors recover without full page reload, execution errors surface in both desktop and TUI timelines, password-free pairing works across desktop and web, and v2 adapts i18n groundwork onto the new branch.

The community is pushing hardest for better rate limit handling—manual retry options and countdown visibility—and improved timeout configuration for local provider requests.

The most urgent issues are clipboard failures affecting core usability (140 comments), sidecar OOM crashes causing data loss, forced wait times during rate limits with no manual retry option, and the 5-minute header timeout that can't be overridden for slow local LLMs. MCP permissions also silently hang in TUI when tools need approval, v2 CLI lost `--agent` and `--model` flags breaking automation, malformed tool results wedge sessions with "Failed to drain Session" errors, and 93 missing translation keys create mixed-language displays despite Chinese being selected.

Chinese UI drift causes inconsistent language rendering. The most active issue remains clipboard functionality with 140 comments, followed by memory management problems in Desktop causing crashes and lost data, rate limit user experience frustrations, local provider timeout handling limitations, MCP permission visibility gaps in TUI, CLI regressions in v2, session corruption from malformed results, and Chinese localization gaps.

*Generated from GitHub data — anomalyco/opencode*

---

Rules:
- Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
- Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
- Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
- Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
- Issue/PR references like #12345 and their link text stay as-is.
- Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.</think>



</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this Pi Community Digest from English to Chinese. I need to:

1. Translate the content into Simplified Chinese
2. Keep all Markdown structure (headings, tables, lists, etc.)
3. Keep all URLs, issue numbers, version tags, code references as-is
4. Use natural technical Chinese (register of a developer newsletter)
5. NOT add any preamble, explanation, or markdown fences

Let me translate section by section:

## Today's Highlights

v1.1.0 发布了 **Program Status reporting (OSC 7501)**，让终端和 agent 面板能显示 Pi 的实时状态（working、blocked、done、failed）。本次发布还涉及 OAuth 修复、嵌入式 SDK 内存优化，以及多项扩展体验改进。

## Releases

### v1.1.0 — Program Status Reporting
**GitHub:** [earendil-works/pi@v1.1.0](https://github.com/earendil-works/pi/tree/v1.1.0)

- **新功能：** 支持 OSC 7501 的终端和 agent 面板现在可以显示 Pi 的程序状态——正在工作中、阻塞在对话框/登录、完成或失败。详见[Program status 文档](https://github.com/earendil-works/pi/blob/v1.1.0/packages/coding-agent/docs/terminal-setup.md#program-status)。

## Hot Issues

I'll translate the table with proper Chinese column names.

## Key PR Progress

## Hot Discussions

## Feature Request Trends

## Developer Pain Points

Let me do this translation now, being careful to maintain the exact structure.</think>

# Pi 社区摘要 — 2026-10-08

## 今日要闻

v1.1.0 发布了 **Program Status reporting (OSC 7501)**，让终端和 agent 面板可以显示 Pi 的实时状态（working、blocked、done、failed）。本次发布还涉及 OAuth 修复、嵌入式 SDK 内存优化，以及多项扩展体验改进。

---

## 版本发布

### v1.1.0 — 程序状态报告
**GitHub:** [earendil-works/pi@v1.1.0](https://github.com/earendil-works/pi/tree/v1.1.0)

- **新功能：** 支持 OSC 7501 的终端和 agent 面板现在可以显示 Pi 的程序状态——正在工作中、阻塞在对话框/登录、完成或失败。详见[程序状态文档](https://github.com/earendil-works/pi/blob/v1.1.0/packages/coding-agent/docs/terminal-setup.md#program-status)。

---

## 热门 Issue

| Issue | 标题 | 评论数 | 状态 |
|-------|------|--------|------|
| [#10480](https://github.com/earendil-works/pi/issues/10480) | 直接连接 OpenAI 时无法识别手动重置的使用限额 | 16 | OPEN |
| [#4180](https://github.com/earendil-works/pi/issues/4180) | 替代终端模式下链接无法点击 | 15 | CLOSED |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | 压缩时包含思考消息导致溢出 | 7 | OPEN |
| [#10267](https://github.com/earendil-works/pi/issues/10267) | 没有用户 prompt 时 `before_agent_start` 的 prompt 文本丢失 | 7 | OPEN |
| [#7445](https://github.com/earendil-works/pi/issues/7445) | openai-responses 将开发者角色绑定到 `model.reasoning` | 7 | CLOSED |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | 工具调用参数解析呈二次方复杂度 | 6 | CLOSED |
| [#5570](https://github.com/earendil-works/pi/issues/5570) | 在项目设置中支持 `--no-skills` / `--skill` | 5 | OPEN |
| [#10563](https://github.com/earendil-works/pi/issues/10563) | MCP OAuth：Google 服务器从未获取 refresh token | 4 | CLOSED |
| [#6873](https://github.com/earendil-works/pi/issues/6873) | pi.dev 包永远无法进入浏览列表 | 4 | CLOSED |
| [#10605](https://github.com/earendil-works/pi/issues/10605) | ChatGPT/OpenAI OAuth 403 错误 | 3 | CLOSED |

**值得关注的原因：**

- **#10480** — 使用 ChatGPT Pro 100 储备重置额度的用户遇到 Pi 仍然报使用限额的问题。临时解决方案（通过 `openai-codex` 重新登录）不够直观，影响了有效账户的付费用户使用 Pi。

- **#4180** — 替代终端模式更改后，agent 回复中的超链接变为不可点击，影响了用户浏览来源的工作流。

- **#9602** — 使用本地模型（如通过 llama.cpp 运行的 Qwen3.8）的长时间会话在压缩时会因思考消息被错误包含而导致 token 限额突破，破坏离线长时间工作。

- **#10267** — 通过 `before_agent_start` 贡献 prompt 的扩展在后端任务、重试或恢复时丢失该内容，导致运行类型之间计费不一致和行为差异。

- **#7445** — `openai-responses` 提供商仅在 `model.reasoning` 为 true 时强制使用 `"developer"` 角色，破坏了与支持 developer 角色但未设置该标志的模型的兼容性。

- **#5570** — CLI 标志 `--no-skills` 和 `--skill` 缺少对应的项目级配置选项。用户希望在 `.pi/settings.json` 中实现每个项目的技能控制。

- **#10563** — Google MCP 服务器需要 `access_type=offline` 才能颁发 refresh token，但 OAuth 配置无法添加自定义参数，阻止了持久化的 Gmail/Calendar MCP 连接。

- **#6873** — 带有 `pi-package` 关键词的新包虽然在详情页显示，但永远无法进入浏览/搜索列表，尽管 npm search 已确认索引成功，破坏了包的发现性。

- **#10605** — OpenAI OAuth 对订阅共享违规返回 403，重新认证也无法解决 Plus 套餐用户的问题。

---

## 关键 PR 进展

| PR | 标题 | 状态 |
|----|------|------|
| [#10569](https://github.com/earendil-works/pi/pull/10569) | 按密钥可用性过滤 OpenRouter 模型 | OPEN |
| [#8307](https://github.com/earendil-works/pi/pull/8307) | 启用实验性缓存友好压缩 | CLOSED |
| [#10614](https://github.com/earendil-works/pi/pull/10614) | 紧凑行的底部选项和隐藏模型后缀 | OPEN |
| [#9880](https://github.com/earendil-works/pi/pull/9880) | 发布配置 JSON Schema | OPEN |
| [#10602](https://github.com/earendil-works/pi/pull/10602) | 为扩展添加编辑器边框小组件 | OPEN |
| [#10600](https://github.com/earendil-works/pi/pull/10600) | 遵守 Retry-After 延迟进行 agent 级重试 | OPEN |
| [#10521](https://github.com/earendil-works/pi/pull/10521) | 为 NVIDIA NIM 模型内联 $ref 工具 Schema | OPEN |
| [#10596](https://github.com/earendil-works/pi/pull/10596) | 无背景时停止用尾随空格填充行 | CLOSED |
| [#7757](https://github.com/earendil-works/pi/pull/7757) | 允许退出全屏选中即复制 | CLOSED |
| [#10593](https://github.com/earendil-works/pi/pull/10593) | 为 Meta OAuth 请求添加 Muse Code User-Agent | CLOSED |

**值得注意的变更：**

- **#10569** — 使用认证后的 `/api/v1/models/user` 根据活动密钥的限制条件过滤 OpenRouter 模型，防止展示可用但受限的模型，关闭 #10353。

- **#8307** — 启用缓存友好压缩，将压缩请求附加到主会话而非独立请求，显著降低热缓存的成本。

- **#10614** — 暴露底部钩子，允许扩展选择性修改行（如移除模型后缀），无需替换整个底部组件。

- **#9880** — 从 TypeBox 合约生成并发布模型、设置、按键绑定和主题的 JSON Schema，实现 IDE 集成和验证。

- **#10602** — 为扩展添加编辑器边框小组件，实现始终可见的指示器（配额计数器、预算消耗、连接状态），可与内置的工作中指示器并列显示。

- **#10600** — 修复 agent 级自动重试，遵守服务器的 `Retry-After` 延迟而非用指数退避重击被限流的服务器，关闭 #10601。

- **#10521** — 为返回 JSON 字符串形式 `$ref` 的 NVIDIA NIM 模型（如 `nemotron-3.5-super-vl-preview`、`qwen3.8-flash-next`）内联 `$ref` 工具 Schema，关闭 #10270。

- **#10596** — 停止在没有背景时用尾随空格填充每一行，修复剪贴板问题——复制的聊天输出不再携带多余空白。

- **#7757** — 添加设置项以退出全屏模式下的选中即复制行为，保留传统复制方式供偏好用户使用。

- **#10593** — 将 Meta OAuth User-Agent 从 Pi 的标识改为 `muse-code/pi`，解决间歇性 503 `service_overloaded` 错误。

---

## 热门讨论

| 讨论 | 标题 | 分类 |
|------|------|------|
| [#10632](https://github.com/earendil-works/pi/discussions/10632) | 在工具调用时暂停运行直到人类批准（内存中不保存任何内容） | Ideas |

**#10632** — 人类在环工作流的提案：在工具执行前暂停，持久化待处理的调用，让用户在数小时或数天后批准/编辑/拒绝，然后恢复。暂停期间零内存状态，目前正在征集设计反馈。

---

## 功能需求趋势

跨越 Issue 和 PR 的宏观主题：

1. **人类在环控制** — 审批用暂停/恢复，工具执行时的人类决策门
2. **持久会话优化** — 内存高效的会话处理、会话文件压缩、更智能的压缩
3. **扩展 API 可扩展性** — 边框小组件、底部钩子、IDE 集成的配置 Schema
4. **OAuth 健壮性** — Refresh token 处理（Google MCP）、多提供商 OAuth 修复、更完善的错误处理
5. **模型选择可靠性** — 密钥可用性过滤、过期目录检测、模型可用性透明度

---

## 开发者痛点

- **OAuth 与认证摩擦** — 多个问题涉及 OpenAI 使用限额不刷新、Google refresh token 缺失、Meta OAuth 失败、Copilot 模型目录差距
- **嵌入式场景内存膨胀** — SessionManager 将整个会话文件加载到内存（127 MB 会话 → 250 MB 堆、490 MB 足迹），条目永不释放
- **终端/UI 人体工学** — 选中即复制行为变更、鼠标中键被吞、GNOME Terminal 中 Shift+Enter 不换行
- **工具执行可靠性** — 二次方解析、分页参数问题、超时强制执行缺陷、块边界 ANSI 序列损坏
- **扩展开发缺口** — VIRTUAL_MODULES 缺少 `pi-mcp`、缺少项目级技能配置、无边框小组件 API

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. I need to translate everything while preserving:
- The Markdown structure (headings, tables, lists, blockquotes, etc.)
- URLs and links
- Code references like #12345
- Project names, version tags, etc.
- Numbers and dates

Let me translate this carefully, keeping natural technical Chinese register.</think>

# Qwen Code 社区周报 — 2026-10-08

## 今日要闻

Qwen Code 项目持续快速演进，**Managed Agent 架构**（#12380）及相关运行时改进取得显著进展。夜间构建 `v0.25.0-nightly.20261007.8003d28042` 包含远程 Host 绑定的修复，同时社区正围绕错误处理、内容泄露和安全边界等关键问题展开热烈讨论。本周多项关键 PR 推进了 **Stage H**（Managed Agent 扩展运行时），多个代码片已合并。

---

## 版本发布

**v0.25.0-nightly.20261007.8003d28042** — [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.0-nightly.20261007.8003d28042)

- **fix(agents):** 替换选中的远程 Hosts 时保留原有绑定 (#13430)
- **test(core):** 关闭 #126

---

## 热门 Issue

| # | Issue | 为何重要 | 反馈 |
|---|-------|----------|------|
| **#12380** | **[proposal(serve): 定义 Managed Agent 双路径架构并分阶段交付](https://github.com/QwenLM/qwen-code/issues/12380)** | 奠定了 Managed Agent 架构的基础，包含分阶段交付、Session 持久化所有权、Workspace 绑定及可恢复的工具执行。社区参与热烈，共 49 条评论。 | 0 👍 |
| **#12867** | **[feat(managed-agent): Stage D 后续——持久化生命周期、Turns、Actions](https://github.com/QwenLM/qwen-code/issues/12867)** | 涵盖持久化生命周期、Turns、Actions、`java_durable` 准入配置和 AgentDefinition——对生产级 Managed Agent 至关重要。 | 0 👍 |
| **#13395** | **[tracking(runtime): Kubernetes 工具运行时进度](https://github.com/QwenLM/qwen-code/issues/13395)** | 追踪 Kubernetes 运行时交付及跨平台门禁。草稿 PR #13526 包含实验性 CSI 运行时基础。 | 0 👍 |
| **#6710** | **[fix(acp): 区分用户取消的 turn 与意外中断](https://github.com/QwenLM/qwen-code/issues/6710)** | P1 级 issue——对正确恢复 turn 至关重要。可复现；影响会话可靠性。 | 0 👍 |
| **#10887** | **[core] 工具重复失败时不提前终止](https://github.com/QwenLM/qwen-code/issues/10887)** | 工具反复失败时代币燃烧 5-14M 会话陷入死循环。P1 严重级别；需修复防护环境。 | 0 👍 |
| **#2596** | **Qwen CLI 持续在末尾添加 `</code>`](https://github.com/QwenLM/qwen-code/issues/2596)** | 长期 bug（自 3 月起）影响 CLI 输出格式。已在最新构建中验证。 | 1 👍 |
| **#10797** | **[core] 非 thinking 脚手架标签泄露到用户可见输出](https://github.com/QwenLM/qwen-code/issues/10797)** | 工具结果块和系统提醒泄露给用户——影响输出质量。审核中。 | 0 👍 |
| **#10791** | **[core] 平衡的内容纯 thinking 块泄露](https://github.com/QwenLM/qwen-code/issues/10791)** | 已完成的推理块逃逸到可见文本。修复在 PR #11188 中追踪。 | 0 👍 |
| **#13570** | **Auto 模式阻止提及修改短语的 inert 文本](https://github.com/QwenLM/qwen-code/issues/13570)** | 安全问题——Auto 模式过度拦截且无逃生通道，影响工作流。 | 0 👍 |
| **#13566** | **web-shell 审批卡片清理缺陷](https://github.com/QwenLM/qwen-code/issues/13566)** | 审批卡片未经清理渲染模型提供的文本；命令块注释夸大覆盖范围。 | 0 👍 |

---

## 关键 PR 进展

| PR | 标题 | 重要性 |
|----|------|--------|
| **#13572** | **[feat(managed-agent): H5b/H5c 通道运行时用于邮件引用适配器](https://github.com/QwenLM/qwen-code/pull/13572)** | 落地 Managed Agent 扩展运行时的 H5b/H5c 代码片——通道运行时以邮件适配器作为参考垂直领域。 |
| **#13276** | **[fix(serve): 为冷启动 409 中的 Hosted 恢复拒绝分支命名](https://github.com/QwenLM/qwen-code/pull/13276)** | 为 Hosted Harness 守护进程路由中的 18 个拒绝点命名；解决 CI 不稳定。 |
| **#13398** | **[fix(hooks): 在工具准入前应用 PreToolUse 输入](https://github.com/QwenLM/qwen-code/pull/13398)** | 在权限检查前应用文档记录的 `PreToolUse.updatedInput` 替换——确保钩子行为与文档一致。 |
| **#13314** | **[fix(sdk-java): 关闭 Hosted Harness 评审严重问题](https://github.com/QwenLM/qwen-code/pull/13314)** | 修复合并后评审中发现的 11 个严重和 2 个次要问题。 |
| **#13554** | **[feat(managed-agent): 收集已停用的流捕获工具输出](https://github.com/QwenLM/qwen-code/pull/13554)** | 实现 #13534 的 P1——将 O4 Session 根级保留生命周期扩展到 Shell 输出生产者族。 |
| **#13243** | **[fix(cli): 限制托管函数钩子模块求值](https://github.com/QwenLM/qwen-code/pull/13243)** | 修复 PR #13129 第四轮评审中的严重问题；确保保留的钩子所有者仍可恢复。 |
| **#13610** | **[feat(web-shell): 为目标卡片添加 ru 区域设置](https://github.com/QwenLM/qwen-code/pull/13610)** | 为 web-shell UI 添加俄语本地化——目标状态卡片、目标视图和审批对话框。 |
| **#13571** | **[feat(memory): 空运行后可选的提取频率](https://github.com/QwenLM/qwen-code/pull/13571)** | 实现 #13004 设计的第一阶段——添加 `QWEN_CODE_MEMORY_EXTRACT_NOOP_SKIP_TURNS` 实验。 |
| **#13568** | **[fix(lsp): 将文件查询路由到适用的服务器](https://github.com/QwenLM/qwen-code/pull/13568)** | 文件级 LSP 操作默认在打开文档前选择适用的就绪服务器。 |
| **#13550** | **[feat(managed-agent): H4b 子 Session 运行时](https://github.com/QwenLM/qwen-code/pull/13550)** | 落地 Managed Agent 扩展的 H4b 代码片——子 Session 运行时。 |

---

## 功能需求趋势

1. **Managed Agent 架构与生命周期** — 多项 issue（#12380、#12867、#13395）推动 Managed Agent 分阶段交付，包含持久化 Session、Turns、Actions 和 Workspace 绑定。
2. **增强的错误处理与恢复** — 重点关注区分用户取消的 turn（#6710）、工具重复失败时的提前终止（#10887）以及取消来源追踪（#13502）。
3. **内容输出质量** — 持续修复内部标签（thinking 块、脚手架）泄露到用户可见输出的问题（#10791、#10797、#10559）。
4. **多 Agent 协作** — 评估请求（#13613）针对多 Agent 协作，考察 `experimental.agentCollaboration` 毕业前的能力。
5. **Hooks 与事件** — 用户 turn 取消的新钩子（#13633），PreToolUse 输入处理改进（#13398）。
6. **平台分发** — Kubernetes 工具运行时（#13395）、CSI 运行时基础（#13526）和跨平台交付门禁。
7. **MCP 服务器集成** — 在 `notifications/tools/list_changed` 时刷新服务器工具（#13632）。

---

## 开发者痛点

1. **死循环中的代币燃烧** — Issue #10887 强调工具反复失败时代币消耗 5-14M，会话陷入死胡同无法提前终止。
2. **内容泄露给用户** — 多项 bug（#10791、#10797、#2596）涉及内部标签或额外文本出现在用户可见输出中——影响感知质量。
3. **安全边界混淆** — Issue #13570（Auto 模式过度拦截）和 #13513（无所有权检查的环境覆盖）暴露安全配置缺口。
4. **会话恢复复杂性** — 区分用户取消的 turn 与意外中断（#6710）数月未解。
5. **待处理的评审问题** — 多项 issue（#12612、#13638、#13635）追踪积压的评审建议——表明 PR 吞吐量与质量之间的张力。
6. **子 Agent 错误传播** — Issue #13597 报告子 Agent 失败不向主 Agent 报告错误信息，导致重试循环。

---

*本简报基于 2026-10-08 的 GitHub 数据生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*