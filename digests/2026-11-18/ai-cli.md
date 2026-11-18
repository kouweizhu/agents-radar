# AI CLI 工具社区动态日报 2026-11-18

> 生成时间: 2026-11-18 03:49 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure exactly
2. Keep all URLs, code spans, numbers, dates, repository slugs, version tags, issue/PR references as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through this carefully section by section.
</think>


# AI CLI 工具生态全景 — 跨工具对比报告

## 日期：2026 年 11 月 18 日

---

## 1. 生态概览

AI CLI 工具领域正经历快速成熟期，各工具的战略重心呈现明显分化。**Claude Code** 和 **OpenAI Codex** 是最贴近企业场景的方案，具备完善的 MCP 集成和子 agent 协作能力。**Gemini CLI** 和 **Qwen Code** 迭代节奏激进，主打开发者体验优化。**OpenCode** 以广泛的插件生态和跨模型供应商的灵活性见长，而 **Pi** 则在较小规模但高度活跃的社区中深耕 agent 可靠性问题。**GitHub Copilot CLI** 延续其稳健的发布节奏，专注于企业级配置管控。纵观所有工具，技术主题高度一致：子 agent 编排、模型供应商抽象、平台适配稳定性和会话状态管理。

---

## 2. 活跃度对比

| 工具 | 仓库地址 | Issues（24h） | PR 合并（24h） | Discussions 活跃度 | Releases（24h） | 社区规模 |
|------|----------|--------------|------------------|-------------------|----------------|----------|
| Claude Code | anthropics/claude-code | 50（展示 30） | 0 | N/A（已禁用） | v2.1.327 | 大型 |
| OpenAI Codex | openai/codex | 展示约 30 | 20+ | 5 | rust-v0.170.0（stable）、v0.169.1、v0.171.0-alpha.12/11 | 大型 |
| Gemini CLI | google-gemini/gemini-cli | 50（展示 30） | 31（展示 20） | N/A（已禁用） | 无 | 中大型 |
| Copilot CLI | github/copilot-cli | 50（展示 30） | 0 | N/A（已禁用） | v1.0.114-0、v1.0.113 | 中大型 |
| OpenCode | anomalyco/opencode | 展示约 30 | 12+ | N/A（已禁用） | v2.3.2、v2.3.1、v1.19.6 | 中型 |
| Pi | earendil-works/pi | 36（展示 30） | 3（合并 2、开放 1） | N/A（已禁用） | 无 | 中小型 |
| Qwen Code | QwenLM/qwen-code | 展示约 30 | 10+ | N/A（已禁用） | v0.28.0、v0.28.1-preview.0、sdk-typescript-v0.1.35、desktop-v0.0.28.0 | 中型 |

**说明：**

- "N/A（已禁用）" 表示该仓库在 GitHub Issues 和/或 Discussions 层面被禁用了，不等于该工具没有社区反馈渠道。
- Copilot CLI、Claude Code 和 Gemini CLI 将 GitHub Issues 作为唯一的社区反馈通道；社区讨论可能在外部论坛进行，或未公开追踪。
- OpenAI Codex 是唯一一个在 GitHub Discussions 上有可见活跃度表现的工具。

---

## 3. 共性需求分析

以下需求在多个工具社区中反复出现：

### 3.1 子 Agent 编排与可靠性

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | 子 agent 触发 MAX_TURNS 限制时存在误报成功的问题（#22323） |
| **Gemini CLI** | MAX_TURNS 后子 agent 恢复问题、无需显式提示的自主子 agent 利用（#21968、#22323） |
| **OpenCode** | 前台执行子 agent、静默完成导致跳过（#64558） |
| **Qwen Code** | 团队模式消息投递失败、受管 agent 容量模型问题（#15738、#15082） |

**跨工具共性需求：** 确定性的子 agent 生命周期管理、可靠的父子 agent 状态传递机制，以及透明的成功/失败上报。

### 3.2 模型供应商抽象与目录准确性

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | Linear 集成——触发云端 agent（#12925，156 👍） |
| **Gemini CLI** | 与 `/models` 端点的供应商目录校准问题（#40524） |
| **OpenAI Codex** | VS Code 扩展多标签页集成（#53071） |
| **Qwen Code** | 多通道适配器集成（企业微信、Teams、钉钉） |
| **Copilot CLI** | MCP OAuth 企业认证（#5040） |

**跨工具共性需求：** 统一的模型发现机制、跨供应商的一致性认证流程，以及可扩展的集成架构。

### 3.3 会话状态与持久化

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | 对 MEMORY.md/CLAUDE.md 的修改仅在每个进程周期内首次触发时生效 |
| **OpenCode** | ENOSPC 后会话恢复时丢失工具清单（#11460） |
| **Pi** | 空闲的第二个实例以过期的 leafId 分叉会话树（#12266） |
| **Copilot CLI** | 自定义 agent 设置在会话恢复时未还原（#4674） |
| **Gemini CLI** | 思维层级变更后缓存丢失（#12269） |

**跨工具共性需求：** 进程重启后的持久化会话状态、并发安全的会话文件处理，以及恢复时的显式状态对账机制。

### 3.4 平台适配稳定性

| 平台 | 受影响工具 | 问题描述 |
|----------|------------|----------|
| **macOS** | 全部工具 | TCC 重新授权提示（Claude Code）、replayd XPC 循环（Codex）、中文字符渲染异常（OpenCode）、钥匙串访问挂起（Pi） |
| **Windows** | Claude Code、Codex、Copilot CLI、Pi、OpenCode | Shell 崩溃（Cortex XDR）、SSH 错误误报（Pi）、提示缓存修复（OpenCode） |
| **Linux** | Gemini CLI、Pi、Codex | 钥匙串访问挂起、Wayland 浏览器失败 |

**跨工具共性需求：** 平台一致性测试、安全策略兼容性，以及平台特性降级处理。

### 3.5 工具调用可靠性与错误处理

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | PreCompact hook 输出缺少大小限制（#101057） |
| **Gemini CLI** | 活跃聊天中的工具调用未记录，引发 400 错误（#30219） |
| **OpenAI Codex** | WebSocket 每重试一次卡顿 300 秒（#38638） |
| **OpenCode** | 提供商响应失败后被持久化为空工具调用导致循环（#64481） |
| **Pi** | 文件读取取消时未捕获的 AbortError 导致崩溃（#11956） |

**跨工具共性需求：** 提供商故障时的优雅降级、可观测的重试策略，以及工具输出的边界检查。

---

## 4. 差异化分析

### 4.1 功能重心对比

| 工具 | 核心差异化 | 次要优势 |
|------|----------|----------|
| **Claude Code** | Anthropic 模型深度优化、Linear/Jira 集成深度 | 安全优先的 MCP 配置（stdin JSON）、git trailer 自定义 |
| **OpenAI Codex** | WebRTC 实时语音、原生 OpenTelemetry、侧边栏子 agent 协作 | TUI 打磨、Windows 沙箱隔离、音频转录 |
| **Gemini CLI** | 零依赖 OS 沙箱概念、AST 感知的代码库导航 | PowerShell 异步解析、skill/子 agent 发现 |
| **Copilot CLI** | 企业托管设置、Browser Use 管理开关 | 跨账号切换、MCP OAuth |
| **OpenCode** | 多供应商灵活性、嵌入式 Rust 版本、插件生态 | 视频生成工具、带登录态的浏览器面板 |
| **Pi** | 编程 agent 可靠性聚焦 | npm 包画廊、紧凑的基于文件的任务追踪 |
| **Qwen Code** | 多通道集成（企业微信、Teams、钉钉）、无障碍支持 | 繁体中文本地化、屏幕阅读器模式 |

### 4.2 目标用户画像

| 工具 | 主要受众 | 用户特征 |
|------|---------|----------|
| **Claude Code** | Anthropic 生态用户、已部署 Linear/Jira 的企业 | DevOps 导向、GitHub 原生工作流 |
| **OpenAI Codex** | OpenAI 平台订阅用户、跨平台开发者 | 语音交互优先、可观测性敏感团队 |
| **Gemini CLI** | Google Cloud 用户、Vertex AI 采用者 | 追求模型无关 CLI 的高级用户 |
| **Copilot CLI** | GitHub Enterprise 客户、微软生态组织 | 安全审计敏感型企业 |
| **OpenCode** | 重视供应商灵活性和插件扩展性的开发者 | 多模态创作者、开源爱好者 |
| **Pi** | 编程 agent 研究者、自主工作流构建者 | 性能敏感、CLI 优先开发者 |
| **Qwen Code** | 中国企业用户、阿里/Qwen 生态采用者 | 多语言团队、无障碍需求组织 |

### 4.3 技术路线分化

| 维度 | 最保守 | 最激进 |
|------|--------|--------|
| **发布节奏** | Copilot CLI（稳扎稳打、企业验证） | Qwen Code、OpenCode（高频预览） |
| **模型绑定** | Copilot CLI（紧耦合 GitHub/Microsoft） | OpenCode（多供应商切换） |
| **Agent 架构** | Claude Code（增量改进） | Qwen Code（1.0 Preview 循环内核重新设计） |
| **沙箱策略** | Gemini CLI（OS 原生、零依赖概念） | OpenAI Codex（WebRTC、沙箱 Core 注册） |
| **插件模型** | Copilot CLI（托管设置方式） | OpenCode（完整插件市场，含图标和 GUI 扩展） |

---

## 5. 社区活力与成熟度

### 5.1 活跃度排名

| 排名 | 工具 | 活力指标 |
|------|------|----------|
| 1 | **OpenAI Codex** | PR 量最高（24h 内 20+）、WebRTC 语音功能已发布、GitHub Discussions 活跃、Computer Use 问题参与度高 |
| 2 | **Qwen Code** | 激进发布节奏（同一天发布 v0.28.0 和预览版）、10+ PRs、多通道扩展、1.0 内核迁移进行中 |
| 3 | **OpenCode** | 稳健 PR 活动（12+）、关键提示缓存修复已发布、嵌入式 Rust 版本、实验性视频生成 |
| 4 | **Claude Code** | 中等活跃（有发布但无 PR）、Linear 集成社区参与度高（156 👍）、聚焦 Linear/MCP |
| 5 | **Gemini CLI** | Issue 量高但合并 PR 较少、聚焦 bug 排查、零依赖沙箱仍处于概念阶段 |
| 6 | **Copilot CLI** | 稳定发布节奏、企业功能补充（Browser Use 开关）、近期无社区 PR 活动 |
| 7 | **Pi** | 活跃度最低、crash 类问题居多、窄但专注的社区聚焦编程 agent 可靠性 |

### 5.2 社区健康度指标

| 工具 | Issue 处理速度 | 社区参与质量 | 文档时效性 |
|------|---------------|-------------|-----------|
| **Claude Code** | 快（Linear 集成被紧密追踪） | 高（详细的 bug 报告，众多 👍） | 强（发布日志详尽） |
| **OpenAI Codex** | 快（24h 内 20+ PRs） | 高（Discussions 活跃，有展示与分享） | 强（PR 描述详尽） |
| **Gemini CLI** | 中（待处理 issue 较多） | 中（技术性强但反应较少） | 中（部分 changelog 有缺失） |
| **Copilot CLI** | 中（回归问题被反复打开） | 中（企业导向，公开参与较少） | 强（托管设置有文档） |
| **OpenCode** | 快（预览版快速迭代） | 高（功能请求趋势分析活跃） | 强（breaking changes 有说明） |
| **Pi** | 慢（crash bug 堆积） | 中（小但忠诚的社区） | 中（部分文档过时） |
| **Qwen Code** | 快（ready-for-agent 标签运作良好） | 高（issue 分类详尽） | 强（本地化和集成文档完善） |

---

## 6. 趋势信号

### 6.1 企业级需求走向成熟

TCC 重新授权提示（macOS）、钥匙串集成（Linux）和企业 OAuth 认证在各工具中趋同，表明 AI CLI 工具已超越个人开发者使用场景。Copilot CLI 的 Browser Use 托管设置和 Claude Code 的 Linear 集成说明，AI CLI 工具正越来越多地被设计用于符合合规要求的企业部署。

**对开发者的启示：** 企业级配置 API、审计日志和 SSO 集成将成为必备能力。

### 6.2 Agent 间协作架构

每个主流工具都在解决子 agent 编排问题——可靠性、状态传递、成功/失败上报和 agent 间通信。Qwen Code 的团队模式、Gemini CLI 的 skill 发现机制和 OpenCode 的前台子 agent 请求，都指向多 agent 工作流已成为核心用例。

**对开发者的启示：** 深入理解各工具的子 agent 生命周期模型；自主 agent 链路的可靠性是下一个主战场。

### 6.3 模型供应商抽象压力

用户期望工具能跨供应商无摩擦使用。OpenCode 的多供应商灵活性、Gemini CLI 的目录校准工作和 Copilot CLI 的 MCP OAuth 企业支持，都指向供应商无关的架构正在成为趋势。

**对开发者的启示：** 构建能够抽象供应商细节的集成方案；价值主张正从模型访问转向工作流编排。

### 6.4 平台一致性仍难达成

macOS 和 Windows 特定问题在各工具中占主导——TCC 重新授权提示、钥匙串挂起、沙箱注册和 shell 命令转义。这表明真正跨平台的 AI CLI 工具目前仍是目标而非现实。

**对开发者的启示：** 平台特定测试和配置文档仍不可或缺；不要假设各平台行为一致。

### 6.5 提示缓存成为成本优化信号

OpenCode 的 GPT-6.2 提示缓存修复（v2.3.2）和 OpenAI Codex 持续的流式处理改进表明，Token 效率正成为竞争差异点。随着上下文窗口增长和使用规模扩大，通过缓存和压缩实现成本优化将愈发重要。

**对开发者的启示：** 在长会话中分析 Token 用量；缓存优化可带来 30-50% 的成本削减。

### 6.6 无障碍与国际化的需求增长

Qwen Code 的繁体中文本地化和原生屏幕阅读器模式表明，AI CLI 工具正突破英语母语、健全开发者的受众边界。OpenCode 的中文字符渲染修复和多字节字符处理说明，更广泛的国际市场考量正在被纳入设计。

**对开发者的启示：** 非英语本地化和无障碍功能将在全球市场中逐步成为差异化因素。

---

## 综合概览

| 维度 | 领先者 | 挑战者 | 新兴势力 |
|------|--------|--------|----------|
| **发布速度** | Qwen Code、OpenAI Codex | OpenCode、Claude Code | Gemini CLI、Pi |
| **企业就绪度** | Copilot CLI、Claude Code | OpenAI Codex | OpenCode、Qwen Code |
| **插件生态** | OpenCode | Claude Code（MCP） | Qwen Code |
| **子 Agent 可靠性** | Pi（聚焦窄） | OpenAI Codex、Gemini CLI | OpenCode、Claude Code |
| **多供应商支持** | OpenCode | Gemini CLI | Qwen Code、Copilot CLI |
| **平台稳定性** | OpenAI Codex（Windows 聚焦） | Copilot CLI | Claude Code、Gemini CLI |
| **社区参与度** | OpenAI Codex（Discussions） | Claude Code、Qwen Code | OpenCode、Pi |
| **文档质量** | OpenAI Codex、Copilot CLI | Claude Code、Qwen Code | Gemini CLI、Pi |

---

*本报告基于 2026-11-18 社区摘要数据编制。指标反映 24 小时活动窗口；长期趋势需持续观察。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, links, numbers, dates, project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
- Use natural technical Chinese register - not literal word-for-word
- No preamble, no explanation, no markdown fences

Let me translate this carefully, making it read naturally in Chinese while preserving all the technical formatting and identifiers.
</think>


# Claude Code Skills 社区亮点报告

*数据截止日期：2026-11-18 | 数据来源：github.com/anthropics/skills*

---

## 1. 热门 Skills 排行

以下 Skills（以 PR 形式提交）按范围和技术深度而言，代表了社区最具份量的贡献：

### 1.1 Notion 规范转实现 + 简历定量审计
- **PR：** [#1245](https://github.com/anthropics/skills/pull/1245) | 作者：mrdesouzaphd-cmyk | 状态：OPEN
- **功能：** 将产品/技术规范转换为可执行的 Notion 任务层级结构并附带验收标准；同时按定量指标对简历进行审计，赋能招聘流程。
- **讨论焦点：** 打通规格文档与可执行任务计划之间的壁垒；简历自动评分。

### 1.2 ProofCore 合约审计器
- **PR：** [#1771](https://github.com/anthropics/skills/pull/1771) | 作者：ProofCore-Protocol | 状态：OPEN
- **功能：** 对 Solidity 和 Rust 智能合约进行静态分析，通过零存储 Merkle 协议将审计证明锚定到 TON 区块链。
- **讨论焦点：** Web3 开发者工具链；基于区块链的审计存证。

### 1.3 MD2Video-Audio
- **PR：** [#1703](https://github.com/anthropics/skills/pull/1703) | 作者：70v-Yoyo | 状态：OPEN
- **功能：** 基于 Marp 将 Markdown 零成本转换为带拟真配音的 MP4 幻灯片。
- **讨论焦点：** 内容创作自动化；演示文稿生成。

### 1.4 Pyxel 复古游戏开发
- **PR：** [#525](https://github.com/anthropics/skills/pull/525) | 作者：kitao | 状态：OPEN
- **功能：** 使用 Pyxel 在 Python 中完成复古游戏全流程开发——实现、无头测试、帧检查和状态验证。
- **讨论焦点：** 游戏开发工作流；专业化 Python 库集成。

### 1.5 SCNet HPC 集群操作器
- **PR：** [#1615](https://github.com/anthropics/skills/pull/1615) | 作者：lql341 | 状态：OPEN
- **功能：** 基于配置的 SSH 和 Slurm 工作流，面向 SCNet HPC 集群——作业提交、分区管理、模块加载。
- **讨论焦点：** 高性能计算集成；学术/科研工具链。

### 1.6 文档排版质量控制
- **PR：** [#514](https://github.com/anthropics/skills/pull/514) | 作者：PGTBoos | 状态：OPEN
- **功能：** 消除 AI 生成文档中的孤行词、寡妇行及编号错位问题。
- **讨论焦点：** 文档生成输出质量控制；常见排版失误的治理。

---

## 2. 社区需求趋势

对 Issues 的分析揭示三大主导需求方向：

| 趋势 | 核心 Issue | 评论数 | 洞察 |
|-------|-----------|--------|------|
| **信任与安全** | [#492](https://github.com/anthropics/skills/issues/492)：anthropic/ 命名空间下的社区 Skills 存在信任边界滥用 | **46** | 关键隐忧；用户无法区分官方与社区 Skills |
| **协作功能** | [#228](https://github.com/anthropics/skills/issues/228)：在 Claude.ai 中启用组织级技能共享 | **17** | 企业对内部技能库和直接分享链接的需求 |
| **评估可靠性** | [#556](https://github.com/anthropics/skills/issues/556)：run_eval.py 触发率为 0% | **13** | 影响技能开发工作流的核心工具缺陷 |
| **Windows 兼容性** | [#1298](https://github.com/anthropics/skills/pull/1298)：修复 Windows 上 subprocess select() 失败问题 | — | 跨平台能力缺口 |
| **上下文优化** | [#1487](https://github.com/anthropics/skills/issues/1487)：claude-api 注入约 156k tokens，耗尽上下文 | **5** | 技能打包时的 token 效率问题 |

**综述：** 社区互动最密集的议题集中在**安全治理**（命名空间信任）、**团队协作**（组织级共享）和**评估工具可靠性**（触发率准确性）。平台级功能在参与度上远超单条技能请求。

---

## 3. 高潜力待合并 Skills

以下 PR 展示了成熟的覆盖范围，是近期合并的强候选：

| Skill | PR | 作者 | 核心亮点 |
|-------|-----|--------|-------------------|
| **MCP Builder v2 兼容性** | [#1742](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | 修复 mcp>=2.0 破坏性变更；更新导入名及 Header 配置 |
| **Skill Creator 评估隔离** | [#1298](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | 解决 Windows 失败问题及并行 Worker 竞态条件 |
| **WebApp Testing 安全修复** | [#1980](https://github.com/anthropics/skills/pull/1980) | Pcmhacker-piro | 通过移除 `shell=True` 消除 CWE-78 命令注入风险 |
| **DOCX 超时处理** | [#1792](https://github.com/anthropics/skills/pull/1792) | TINGyu123644 | 验证 LibreOffice 输出；防止静默失败 |
| **XLSX 定义名称解析** | [#2019](https://github.com/anthropics/skills/pull/2019) | reginaldalfret | 通过工作表级别名修复外部链接检测的误报 |
| **Claude API 文档同步** | [#1950](https://github.com/anthropics/skills/pull/1950) | dhairyajangir | 更新 Python SDK 中 1.1.0 pause_turn 恢复指南 |

这些 PR 的共同特征是：目标明确的缺陷修复、安全加固、以及跨平台兼容性提升。

---

## 4. Skills 生态洞察

> **Claude Code Skills 社区正在积极夯实生态系统的根基**——从功能扩张转向安全加固、评估可靠性提升和跨平台能力对齐，同时着手解决企业在信任边界和组织级共享方面的协作缺口。

---

<think>The user wants me to translate the English technical digest into Simplified Chinese. Let me carefully translate this while preserving:

1. All Markdown structure (headings, tables, lists, bold, etc.)
2. URLs and link targets
3. Issue/PR numbers and references
4. Project names, version tags, file paths
5. Technical terminology
6. The newsletter tone

Let me go through section by section:

**Title and header:**
- "Claude Code Community Digest" → "Claude Code 社区动态"
- "Date" → "日期"
- "Source" → "来源"

**Today's Highlights:**
- Keep technical terms like "MCP server", "stdin", "tokens", "Linear Integration"
- "156 👍" stays as-is
- "cloud agent sessions" → "云端 Agent 会话"
- "50 issues updated" → "50 个 Issue 更新"

**Releases section:**
- v2.1.327 stays as-is
- "Install confirmation" → "安装确认"
- "Secure MCP config" → "安全 MCP 配置"
- "Resumed session indicator" → "恢复会话指示器"

**Hot Issues section:**
- Need to translate the descriptions while keeping the numbers, tags, and URLs
- Issue titles stay mostly in English but can be partially translated
- Description text gets translated to natural Chinese

**Feature Request Trends:**
- Keep the table structure
- Translate descriptions
- Keep all technical terms and numbers

**Developer Pain Points:**
- Translate to natural Chinese
- Keep technical terminology

Let me do the full translation now:
</think>


# Claude Code 社区动态

**日期：** 2026 年 11 月 18 日  
**来源：** [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 今日要闻

**v2.1.327** 版本带来了一个安全增强：现在支持通过 stdin 管道输入 MCP server JSON 配置，从而避免敏感 token 出现在命令行参数中。过去 24 小时内社区活跃度依然很高，50 个 Issue 有了更新，其中 Linear 集成提案尤为引人关注——该功能可在指派 Issue 时自动触发云端 Agent 会话，已获得 156 个 👍 支持。

---

## 版本发布

### v2.1.327

| 变更项 | 说明 |
|--------|------|
| **安装确认** | `/install-github-app` 修改仓库前新增确认提示 |
| **安全 MCP 配置** | 新增 `claude mcp add-json <name> -` 命令，支持从 stdin 读取 server JSON，避免 token 暴露在命令行中；Claude Code 会话内不可用 |
| **恢复会话指示器** | 恢复会话早期状态时新增一行提示 |

[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.327)

---

## 热门 Issue

### 1. Linear 集成：指派 Issue 给 Claude Code（[#12925](https://github.com/anthropics/claude-code/issues/12925)）
**48 条评论 · 156 👍 · [enhancement, external, area:core]**

今日获得最多关注的功能提案——在 Linear 中原生集成指派 Issue 给 Claude Code，自动触发云端 Agent 会话。这将简化开发者工作流，无需手动启动会话即可接手新任务。156 个 👍 表明社区对更紧密的项目管理工具集成有强烈需求。

---

### 2. modelPicker 跳过 Opus Plan 行（[#89690](https://github.com/anthropics/claude-code/issues/89690)）
**21 条评论 · [bug, has repro, platform:macos, area:model]**

已确认的 bug：model picker 将 `opusplan` 视为已覆盖，但实际未显示 Opus Plan Mode 行，造成 UX 不匹配。该回归问题影响了依赖 Claude Code plan 模式的开发者，尤其在 macOS 平台上。

---

### 3. 版本化安装路径导致 macOS 更新后 TCC 重复授权（[#63671](https://github.com/anthropics/claude-code/issues/63671)）
**16 条评论 · 31 👍 · [bug, platform:macos, area:installation]**

每次 Claude Code 更新都会触发 macOS TCC（透明度、同意与控制）重新授权，因为版本化安装路径与上次可执行文件不同。这对 MDM 管理的机器影响尤为严重，破坏了 PPPC 配置的有效性。31 个 👍 表明这是企业级 macOS 部署的重大阻碍。

---

### 4. 使用 `Assisted-by` Git Commit Trailer（[#36105](https://github.com/anthropics/claude-code/issues/36105)）
**13 条评论 · 57 👍 · [enhancement]**

社区建议将 Claude Code 生成的 git commit 中的 `Co-authored-by` 改为 `Assisted-by`，以更准确地区分 AI 协助的贡献。57 个 👍 反映了开发者对更清晰的 commit 归属实践的强烈兴趣。

---

### 5. 远程控制会话中 Mod ui.render 未渲染（[#99217](https://github.com/anthropics/claude-code/issues/99217)）
**12 条评论 · 12 👍 · [bug, area:plugins]**

通过 `ui.render` 渲染的插件 UI（如 `AbovePrompt` 区域）在终端会话中正常显示，但在 Claude 桌面应用和 iOS 应用中使用远程控制会话时完全消失。仅有 `AskUserQuestion` 提示能触达这些视图，导致插件在多端使用时功能失效。12 个 👍 说明这影响了活跃的插件开发者。

---

### 6. 桌面应用未经同意自动重启更新（[#104422](https://github.com/anthropics/claude-code/issues/104422)）
**8 条评论 · 6 👍 · [enhancement, platform:windows, area:desktop]**

Windows 用户反映桌面应用在任意新版发布时都会在工作期间重启，无论当时是否空闲。用户希望能够控制更新安装的时机，同时继续收到通知推送。10 月 21-22 日一天内重启四次就是这种激进更新策略的典型例证。

---

### 7. 桌面应用拒绝 MCP 引导请求（[#105334](https://github.com/anthropics/claude-code/issues/105334)）
**8 条评论 · 12 👍 · [bug, platform:macos, area:mcp, area:desktop]**

Claude Code 桌面应用在声明支持引导功能的同时，却静默拒绝了 `elicitation/create` 请求。用户得不到任何反馈，不知道请求被拒绝了，导致提示未出现的困惑。这种不一致破坏了桌面环境下 MCP server 集成的可用性。

---

### 8. Android 模拟器面板需求（[#102400](https://github.com/anthropics/claude-code/issues/102400)）
**5 条评论 · 13 👍 · [enhancement, platform:macos, area:tools, area:desktop]**

功能对等请求：开发者希望在桌面应用的代码面板中获得 Android 模拟器支持，对标现有的 iOS Simulator 面板功能。这将使移动端开发工作流能在 Claude Code 桌面环境中完成，无需在应用间频繁切换。

---

### 9. PreCompact Hook 输出未限制大小（[#101057](https://github.com/anthropics/claude-code/issues/101057)）
**5 条评论 · [bug, has repro, platform:macos, area:core, area:hooks]**

成功的 `PreCompact` hook 的标准输出被追加到压缩指令中，但未做任何大小限制，冗长的 hook 输出可能导致内存问题。macOS 平台上有使用 PreCompact hook 的用户已确认可复现。

---

### 10. 个人 Max 计划无法使用 /feedback（[#109663](https://github.com/anthropics/claude-code/issues/109663)）
**3 条评论 · [bug, platform:macos, area:auth]**

个人 Max 计划用户无法通过 `/feedback`、会话调查或转录分享功能提交反馈，收到的错误是"您的组织未启用反馈功能"，尽管组织配置是独立的。多个重复报告表明这影响了相当规模的用户群体。

---

## 重要 PR 进展

过去 24 小时内无 Pull Request 合并或新建。该仓库的活跃度集中在 Issue 分诊和 v2.1.327 补丁版本发布上。

---

## 功能需求趋势

分析今日活跃的 Issue，呈现以下几个主要功能方向：

| 趋势 | 证据 | 需求程度 |
|-------|----------|--------------|
| **增强型集成** | Linear Issue 指派、跨平台模拟器面板 | 高 |
| **Git 工作流优化** | `Assisted-by` trailers、commit 归属 | 中高 |
| **插件 API 完善** | 端点检测、backdrop 渲染、速率限制可见性 | 中 |
| **跨设备会话** | VS Code Remote Control 客户端支持、会话状态迁移 | 中 |
| **用户授权与控制** | 更新时机、TCC 持久化、引导透明度 | 中高 |

---

## 开发者痛点

社区反馈中最频繁表达的不满意集中在：

1. **macOS 持久化问题** — 每次更新后 TCC 重复授权、设备密钥在升级后失效、输入法回归问题，为 macOS 开发者带来持续摩擦。

2. **桌面应用不一致** — UI 元素在终端、桌面和移动端的表现不一致。Toast 通知出现在错误的窗口；插件 backdrop 在远程控制会话中不渲染。

3. **认证边缘场景** — 个人计划无法提交反馈、锁定账户设置冲突、提升会话要求缺乏清晰恢复路径。

4. **内存与会话行为** — MEMORY.md 或 CLAUDE.md 在磁盘上的更改仅在每个进程周期首次获取时生效；置顶会话自动归档且无用户操作。

5. **MCP 集成缺口** — 引导请求静默拒绝、移动客户端端点检测缺失、插件 API 中速率限制可见性不足。

---

*本期动态结束。下次更新：2026 年 11 月 19 日。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all headings, body text, and list items
2. Keep all Markdown structure (headings, tables, lists, code spans, links, etc.)
3. Keep URLs, issue/PR numbers, version tags, file paths, API identifiers in original form
4. Use natural technical Chinese appropriate for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output

Let me translate section by section:

## Today's Highlights
今天要点

## Releases
发布

### rust-v0.170.0 (Stable)
rust-v0.170.0（稳定版）

Three significant additions shipped:
三项重要功能更新：

- **WebRTC negotiation for realtime voice calls** in the TUI — enables native voice interaction within the terminal interface.
- **WebRTC 协商支持实时语音通话** — 在终端界面内实现原生语音交互。
- **Auto-refreshed OpenTelemetry HTTP exporter auth headers** — improves observability integration reliability.
- **OpenTelemetry HTTP 导出器的认证头自动刷新** — 提升可观测性集成的可靠性。
- **Experimental cross-environment MCP server support** — allows identically named MCP servers across different environments.
- **跨环境 MCP 服务器支持（实验性）** — 允许在不同环境中使用同名 MCP 服务器。

### rust-v0.169.1
Maintenance release; no verified highlights available.
维护版本；暂无确认的更新要点。

### rust-v0.171.0-alpha.12 / alpha.11
Alpha channel releases for the next major cycle.
下一主要版本的 Alpha 通道发布。

## Hot Issues
热门问题

### 1. [Windows] Computer Use capture border persists after screenshot [#57101](https://github.com/openai/codex/issues/57101) — 55 comments
**Why it matters:** Critical UI defect where gold/yellow display borders remain visible after Codex completes screenshot operations, breaking the visual workflow for Windows users.  
**Community reaction:** High engagement; 9 👍 reactions. Users report this on Codex 26.1021.3705 across Windows x64 MSIX installs.

### 1. [Windows] Computer Use 截图边框在截图完成后仍然残留 [#57101](https://github.com/openai/codex/issues/57101) — 55 条评论
**问题所在：** 关键 UI 缺陷——Codex 完成截图操作后，金色/黄色显示边框仍然可见，破坏了 Windows 用户的视觉工作流。
**社区反馈：** 高度关注；9 个 👍 反应。用户报告此问题出现在 Codex 26.1021.3705 的 Windows x64 MSIX 安装版本上。

### 2. [Windows] Cannot send messages in new Work threads [#54564](https://github.com/openai/codex/issues/54564) — 19 comments
**Why it matters:** Send button remains permanently disabled in new threads, making the core messaging workflow unusable.  
**Community reaction:** Affects daily productivity; reproducible on Windows 10.0.26200.0.

### 2. [Windows] 无法在新 Work 线程中发送消息 [#54564](https://github.com/openai/codex/issues/54564) — 19 条评论
**问题所在：** 新建线程中的发送按钮永久禁用，导致核心消息工作流无法使用。
**社区反馈：** 影响日常生产力；在 Windows 10.0.26200.0 上可复现。

### 3. [macOS] Locked Computer Use exits before password field appears [#37231](https://github.com/openai/codex/issues/37231) — 18 comments
**Why it matters:** Computer Use fails to unlock macOS after display-sleep lock, creating a security workflow gap.  
**Community reaction:** Intermittent but high-impact; 4 👍 reactions.

### 3. [macOS] 已锁定的 Computer Use 在密码字段出现前退出 [#37231](https://github.com/openai/codex/issues/37231) — 18 条评论
**问题所在：** Computer Use 在显示器休眠锁定后无法解锁 macOS，造成安全工

作流缺口。
**社区反馈：** 间歇性但影响重大；4 个 👍 反应。

### 4. [macOS] replayd XPC reconnect loop causes ~90% CPU while idle [#37420](https://github.com/openai/codex/issues/37420) — 16 comments
**Why it matters:** Background service enters tight reconnect loop with Apple's replayd, causing severe resource consumption even when Codex is idle.  
**Community reaction:** Power users reporting significant battery drain; 4 👍 reactions.

### 4. [macOS] replayd XPC 重连循环导致空闲时 CPU 占用约 90% [#37420](https://github.com/openai/codex/issues/37420) — 16 条评论
**问题所在：** 后台服务与 Apple 的 replayd 进入密集重连循环，即使 Codex 处于空闲状态也会产生严重资源消耗。
**社区反馈：** 资深用户报告了显著的电池消耗问题；4 个 👍 反应。

### 5. [macOS] Primary window stuck on loading screen [#37550](https://github.com/openai/codex/issues/37550) — 8 comments
**Why it matters:** Main window freezes on loading screen while background tasks continue; New Window recovers but loses browser state.  
**Community reaction:** Reported on macOS 26.5.2; intermittently blocks workflow.

### 5. [macOS] 主窗口卡在加载画面 [#37550](https://github.com/openai/codex/issues/37550) — 8 条评论
**问题所在：** 主窗口在加载画面上冻结，同时后台任务继续运行；新建窗口可以恢复但会丢失浏览器状态。
**社区反馈：** 在 macOS 26.5.2 上报告；间歇性阻塞工作流。

### 6. [Linux] Locked Secret Service keyring hangs sessions [#41031](https://github.com/openai/codex/issues/41031) — 8 comments
**Why it matters:** Linux systems with locked keyring become unusable for new sessions and cause indefinite hangs on exit.  
**Community reaction:** Affects GNOME/Wayland + gnome-keyring 50.0 users; Fedora 44 specifically called out.

### 6. [Linux] 已锁定的 Secret Service keyring 导致会话挂起 [#41031](https://github.com/openai/codex/issues/41031) — 8 条评论
**问题所在：** Linux 系统的 keyring 锁定后，新会话无法使用，退出时还会无限期挂起。
**社区反馈：** 影响使用 GNOME/Wayland + gnome-keyring 50.0 的用户；特别提到了 Fedora 44。

### 7. [All platforms] WebSocket stalls 300s per retry [#38638](https://github.com/openai/codex/issues/38638) — 9 comments
**Why it matters:** Responses WebSocket goes silent mid-turn with no graceful recovery, blocking real-time interactions.  
**Community reaction:** Connected to high/max reasoning effort models; impacts production workflows.

### 7. [全平台] WebSocket 每次重试卡顿 300 秒 [#38638](https://github.com/openai/codex/issues/38638) — 9 条评论
**问题所在：** 响应 WebSocket 在交互中途突然静默，没有优雅恢复机制，阻止实时交互进行。
**社区反馈：** 与高强度/最大推理努力模型相关；影响生产工作流。

### 8. [macOS] PDF preview causes high CPU and severe UI lag [#58367](https://github.com/openai/codex/issues/58367) — 3 comments (5 👍)
**Why it matters:** Even small PDF files trigger excessive CPU usage and lag across the entire Codex UI.  
**Community reaction:** High 👍 ratio indicates widespread frustration with PDF preview performance.

### 8. [macOS] PDF 预览导致高 CPU 占用和严重 UI 卡顿 [#58367](https://github.com/openai/codex/issues/58367) — 3 条评论（5 个 👍）
**问题所在：** 即使是小文件也会触发过度 CPU 占用，导致整个 Codex UI 出现卡顿。
**社区反馈：** 👍 比例高表明用户对 PDF 预览性能普遍感到不满。

### 9. [All platforms] Pro $100 quota exhausted in 20 hours [#56174](https://github.com/openai/codex/issues/56174) — 3 comments
**Why it matters:** Users experiencing 3-4x faster quota depletion than normal, suggesting a consumption leak.  
**Community reaction:** Financial impact for Pro subscribers; warrants investigation.

### 9. [全平台] Pro $100 配额在 20 小时内耗尽 [#56174](https://github.com/openai/codex/issues/56174) — 3 条评论
**问题所在：** 用户经历的配额消耗速度是正常的 3-4 倍，表明存在消耗泄露。
**社区反馈：** 对 Pro 订阅用户有经济影响；需要调查。

### 10. [macOS] 381 temp directories (~472 GB) left by installer [#61570](https://github.com/openai/codex/issues/61570) — 3 comments
**Why it matters:** Installer cleanup failure nearly fills system disks on macOS.  
**Community reaction:** Severe disk space issue reported on build 26605.

### 10. [macOS] 安装程序遗留 381 个临时目录（约 472 GB）[#61570](https://github.com/openai/codex/issues/61570) — 3 条评论
**问题所在：** 安装程序的清理失败导致 macOS 系统磁盘接近填满。
**社区反馈：** 在 build 26605 上报告了严重的磁盘空间问题。

## Key PR Progress
主要 PR 进展

### TUI Stability & Polish
TUI 稳定性与优化

| PR | Description |
|----|-------------|
| [#62175](https://github.com/openai/codex/pull/62175) | Fix stale terminal dimensions in immediate TUI redraws — prevents rendering glitches after terminal resize |
| [#62175](https://github.com/openai/codex/pull/62175) | 修复 TUI 立即重绘时终端尺寸陈旧问题 — 防止终端大小调整后出现渲染异常 |
| [#62174](https://github.com/openai/codex/pull/62174) | Keep TUI composer caret anchored while typing — resolves vertical caret jump on hint row changes |
| [#62174](https://github.com/openai/codex/pull/62174) | 保持 TUI 编辑器输入时光标稳定 — 解决提示行变化时光标垂直跳动的

问题 |
| [#62171](https://github.com/openai/codex/pull/62171) | Extract TUI thread resume finalization — cleaner separation of subscription state and history hydration |
| [#62171](https://github.com/openai/codex/pull/62171) | 抽取 TUI 线程恢复完成逻辑 — 更好地分离订阅状态和历史记录填充 |
| [#62146](https://github.com/openai/codex/pull/62146) | Batch mouse wheel scrolling in the TUI — reduces redundant redraws during rapid scrolling |
| [#62146](https://github.com/openai/codex/pull/62146) | 在 TUI 中批量处理鼠标滚轮滚动 — 减少快速滚动时的冗余重绘 |

### Subagent Collaboration Features
子智能体协作功能

| PR | Description |
|----|-------------|
| [#62159](https://github.com/openai/codex/pull/62159) | Open subagent transcripts from activity links — clickable subagent labels in transcripts |
| [#62159](https://github.com/openai/codex/pull/62159) | 从活动链接打开子智能体转录 — 在转录中显示可点击的子智能体标签 |
| [#62157](https://github.com/openai/codex/pull/62157) | Open subagent transcripts in sidebar tabs — keeps parent conversation visible while reviewing agent work |
| [#62157](https://github.com/openai/codex/pull/62157) | 在侧边栏标签页打开子智能体转录 — 审查智能体工作时保持父对话可见 |
| [#62149](https://github.com/openai/codex/pull/62149) | Show subagents and status in TUI sidebar chooser — check progress without switching conversations |
| [#62149](https://github.com/openai/codex/pull/62149) | 在 TUI 侧边栏选择器中显示子智能体及状态 — 无需切换对话即可检查进度 |

### App-Server & Reliability
App-Server 与可靠性

| PR | Description |
|----|-------------|
| [#62176](https://github.com/openai/codex/pull/62176) | Expose `bioPolicy` errors in app-server v2 — enables clients to distinguish biology policy errors by code |
| [#62176](https://github.com/openai/codex/pull/62176) | 在 app-server v2 中暴露 `bioPolicy` 错误 — 使客户端能够通过代码区分生物政策错误 |
| [#62163](https://github.com/openai/codex/pull/62163) | Move app-server socket relay into Codex CLI — consolidates relay logic, removes standalone binary |
| [#62163](https://github.com/openai/codex/pull/62163) | 将 app-server socket 中继移入 Codex CLI — 合并中继逻辑，移除独立二进制文件 |
| [#62151](https://github.com/openai/codex/pull/62151) | Limit recovery after repeated cloud reply stream disconnects — prevents user-facing reconnect cycles |
| [#62151](https://github.com/openai/codex/pull/62151) | 限制重复云回复流断开后的恢复次数 — 防止面向用户的重连循环 |
| [#62150](https://github.com/openai/codex/pull/62150) | Cancel Cloud overview refreshes that block TUI navigation — prevents worker starvation |
| [#62150](https://github.com/openai/codex/pull/62150) | 取消阻塞 TUI 导航的 Cloud 概览刷新 — 防止工作线程饥饿 |

### Platform & Performance
平台与性能

| PR | Description |
|----|-------------|
| [#62142](https://github.com/openai/codex/pull/62142) | Add audio transcription to backend client — supports WAV, MP3, M4A, WebM, Ogg with 64KB response cap |
| [#62142](https://github.com/openai/codex/pull/62142) | 在后端客户端添加音频转录 — 支持 WAV、MP3、M4A、WebM、Ogg，响应上限 64KB |
| [#62141](https://github.com/openai/codex/pull/62141) | Repair missing/stale Windows sandbox Core registration — ensures setup runs when registration is unready |
| [#62141](https://github.com/openai/codex/pull/62141) | 修复 Windows 沙箱 Core 注册缺失/过时问题 — 确保注册未就绪时仍能运行设置 |
| [#62153](https://github.com/openai/codex/pull/62153) | Reduce overhead in CLI integration tests — shared SSE mock and optimized Tokio worker spawning |
| [#62153](https://github.com/openai/codex/pull/62153) | 降低 CLI 集成测试开销 — 共享 SSE mock 和优化的 Tokio worker 生成 |

## Hot Discussions
热门讨论

### 💡 Ideas & Feature Requests
💡 想法与功能请求

- **[Codex Mobile Workbench](https://github.com/openai/codex/discussions/58912)** — Self-hosted phone/PWA interface to control Codex remotely. 1 👍
- **[Codex Mobile Workbench](https://github.com/openai/codex/discussions/58912)** — 自托管的手机/PWA 界面，用于远程控制 Codex。1 个 👍

- **[AppScreen MCP Integration](https://github.com/openai/codex/discussions/61525)** — Let Codex design App Store/Play screenshots via MCP. 1 👍
- **[AppScreen MCP 集成](https://github.com/openai/codex/discussions/61525)** — 让 Codex 通过 MCP 设计 App Store/Play 截图。1 个 👍

### 🔧 Q&A
🔧 问答

- **[Versioned client contract for turn/moderationMetadata?](https://github.com/openai/codex/discussions/59292)** — Clarification needed on handling `prompt` and `generation` objects in moderation metadata. 1 👍
- **[turn/moderationMetadata 的版本化客户端契约？](https://github.com/openai/codex/discussions/59292)** — 需要澄清如何在审核元数据中处理 `prompt` 和 `generation` 对象。1 个 👍

- **[Diagnosing screenshot/tool response latency](https://github.com/openai/codex/discussions/61849)** — Seeking supported method to separate first-output latency from command delivery timing. 1 👍
- **[诊断截图/工具响应延迟](https://github.com/openai/codex/discussions/61849)** — 寻求支持的方法来区分首次输出延迟和命令传递时序。1 个 👍

### 🛠️ Show & Tell
🛠️ 展示与分享

- **[Awesome Codex CLI — 150+ ecosystem tools](https://github.com/openai/codex/discussions/16329)** — Curated list of subagents, skills, plugins, and MCP servers. 10 comments, 1 👍
- **[Awesome Codex CLI — 150+ 生态工具](https://github.com/openai/codex/discussions/16329)** — 子智能体、技能、插件和 MCP 服务器精选列表。10 条评论，1 个 👍

- **[Cloud Alter Ego](https://github.com/openai/codex/discussions/61997)** — Unified memory across ChatGPT, Claude, and other AI assistants via cloud storage. 1 👍
- **[Cloud Alter Ego](https://github.com/openai/codex/discussions/61997)** — 通过云存储在 ChatGPT、Claude 等 AI 助手中统一记忆。1 个 👍

- **[Video Clip Planner](https://github.com/openai/codex/discussions/61980)** — Convert podcast transcripts into Shorts cut lists. 1 👍
- **[视频剪辑规划器](https://github.com/openai/codex/discussions/61980)** — 将播客转录转换为短视频剪辑列表。1 个 👍

### 💬 General
💬 综合

- **[Codex using Python to make file edits](https://github.com/openai/codex/discussions/3057)** — 23 comments, 38 👍 — Community discussing why Codex sometimes scripts changes instead of using the File Edit tool. Active discussion since 2025.
- **[Codex 用 Python 进行文件编辑](https://github.com/openai/codex/discussions/3057)** — 23 条评论，38 个 👍 — 社区讨论为什么 Codex 有时会用脚本进行更改而不是使用文件编辑工具。自 2025 年起持续活跃讨论。

## Feature Request Trends
功能请求趋势

Analysis of issues and discussions reveals these dominant feature directions:
对问题和讨论的分析揭示了以下主要功能方向：

| Category | Top Requests | Signal Strength |
|----------|--------------|-----------------|
| **IDE Integration** | Multi-tab Codex chats in VS Code, editor tabs for simultaneous conversations | 8+ 👍 on #53071 |
| **IDE 集成** | VS Code 中的多标签 Codex 对话、用于同时对话的编辑器标签 | #53071 上 8+ 个 👍 |
| **Project Management** | API/CLI for creating and managing Codex Desktop projects | 12 👍 on #25385 |
| **项目管理** | 用于创建和管理 Codex Desktop 项目的 API/CLI | #25385 上 12 个 👍 |
| **MCP Enhancements** | Non-interactive MCP tool call approval in `codex exec` without sandbox bypass | 9 comments on #24135 |
| **MCP 增强** | 在 `codex exec` 中无需沙箱绕过即可进行非交互式 MCP 工具调用批准 | #24135 上 9 条评论 |
| **Platform Parity** | Feature equivalence across Windows/macOS/Linux (Computer Use, sandboxing) | 55+ comments on Windows bugs |
| **平台一致性** | Windows/macOS/Linux 功能对等（Computer Use、沙箱） | Windows 相关 bug 上 55+ 条评论 |
| **Resource Management** | Better quota monitoring, consumption alerts, per-project billing | 3 comments on #56174 |
| **资源管理** | 更好的配额监控、消费预警、按项目计费 | #56174 上 3 条评论 |

## Developer Pain Points
开发者痛点

### 1. Platform Inconsistencies
1. 平台不一致性

Windows and macOS-specific bugs dominate the issue queue. Critical features like Computer Use, session management, and sandboxing behave differently across platforms, forcing developers to maintain workarounds.
特定于 Windows 和 macOS 的 bug 在问题列表中占主导地位。Computer Use、会话管理和沙箱等关键功能在不同平台上表现不同，迫使开发者维护各种变通方案。

### 2. TUI Fragility
2. TUI 脆弱性

Terminal resize handling (SIGWINCH), composer state management, and dimension synchronization remain problematic. The 20+ TUI PRs this cycle indicate active remediation.
终端大小调整处理（SIGWINCH）、编辑器状态管理和尺寸同步仍然存在问题。本周期 20+ 个 TUI PR 表明正在积极修复。

### 3. Performance & Resource Leaks
3. 性能与资源泄露

- macOS PDF preview causing UI-wide lag
- macOS PDF 预览导致整个 UI 卡顿
- replayd XPC loops consuming 90% CPU
- replayd XPC 循环消耗 90% CPU
- Temp directory accumulation filling disks (~472 GB reported)
- 临时目录堆积导致磁盘占满（报告约 472 GB）
- Elevated CPU usage on app launch
- 应用启动时 CPU 占用升高

### 4. CLI/Non-Interactive Limitations
4. CLI/非交互模式限制

The `codex exec` tool lacks proper MCP approval handling for headless environments, forcing developers to use `--dangerously-bypass-approvals-and-sandbox`.
`codex exec` 工具缺少对无头环境适当的 MCP 批准处理，迫使开发者使用 `--dangerously-bypass-approvals-and-sandbox`。

### 5. Connectivity & Recovery
5. 连接与恢复

WebSocket stalls, stream disconnects, and retry loops create unreliable experiences, especially with high reasoning effort models.
WebSocket 卡顿、流断开和重试循环造成不可靠的体验，尤其是在高推理努力模型上。

---

*Data sourced from [github.com/openai/codex](https://github.com/openai/codex) — 2026-11-18*

---

## OpenAI Codex 社区日报 — 2026-11-18

## 今日要点

Codex 团队发布了 **rust-v0.170.0**，带来了重要的 TUI 增强功能，包括 WebRTC 协商支持的实时语音通话和改进了 OpenTelemetry 导出器认证。一波 20+ 个 PR 聚焦于 TUI 优化、子智能体协作功能和平台稳定性修复。Windows 用户持续报告关键的 Computer Use 捕获和会话 bug，而 macOS 则面临持续的 CPU 和沙箱问题。

---

## 发布版本

### rust-v0.170.0（稳定版）
三项重要功能更新：
- **WebRTC 协商支持实时语音通话** — 在终端界面内实现原生语音交互。
- **OpenTelemetry HTTP 导出器的认证头自动刷新** — 提升可观测性集成的可靠性。
- **跨环境 MCP 服务器支持（实验性）** — 允许在不同环境中使用同名 MCP 服务器。

### rust-v0.169.1
维护版本；暂无确认的更新要点。

### rust-v0.171.0-alpha.12 / alpha.11
下一主要版本的 Alpha 通道发布。

---

## 热门问题

### 1. [Windows] Computer Use 截图边框在截图完成后仍然残留 [#57101](https://github.com/openai/codex/issues/57101) — 55 条评论
**问题所在：** 关键 UI 缺陷——Codex 完成截图操作后，金色/黄色显示边框仍然可见，破坏了 Windows 用户的视觉工作流。
**社区反馈：** 高度关注；9 个 👍 反应。用户报告此问题出现在 Codex 26.1021.3705 的 Windows x64 MSIX 安装版本上。

### 2. [Windows] 无法在新 Work 线程中发送消息 [#54564](https://github.com/openai/codex/issues/54564) — 19 条评论
**问题所在：** 新建线程中的发送按钮永久禁用，导致核心消息工作流无法使用。
**社区反馈：** 影响日常生产力；在 Windows 10.0.26200.0 上可复现。

### 3. [macOS] 已锁定的 Computer Use 在密码字段出现前退出 [#37231](https://github.com/openai/codex/issues/37231) — 18 条评论
**问题所在：** Computer Use 在显示器休眠锁定后无法解锁 macOS，造成安全工

作流缺口。
**社区反馈：** 间歇性但影响重大；4 个 👍 反应。

### 4. [macOS] replayd XPC 重连循环导致空闲时 CPU 占用约 90% [#37420](https://github.com/openai/codex/issues/37420) — 16 条评论
**问题所在：** 后台服务与 Apple 的 replayd 进入密集重连循环，即使 Codex 处于空闲状态也会产生严重资源消耗。
**社区反馈：** 资深用户报告了显著的电池消耗问题；4 个 👍 反应。

### 5. [macOS] 主窗口卡在加载画面 [#37550](https://github.com/openai/codex/issues/37550) — 8 条评论
**问题所在：** 主窗口在加载画面上冻结，同时后台任务继续运行；新建窗口可以恢复但会丢失浏览器状态。
**社区反馈：** 在 macOS 26.5.2 上报告；间歇性阻塞工作流。

### 6. [Linux] 已锁定的 Secret Service keyring 导致会话挂起 [#41031](https://github.com/openai/codex/issues/41031) — 8 条评论
**问题所在：** Linux 系统的 keyring 锁定后，新会话无法使用，退出时还会无限期挂起。
**社区反馈：** 影响使用 GNOME/Wayland + gnome-keyring 50.0 的用户；特别提到了 Fedora 44。

### 7. [全平台] WebSocket 每次重试卡顿 300 秒 [#38638](https://github.com/openai/codex/issues/38638) — 9 条评论
**问题所在：** 响应 WebSocket 在交互中途突然静默，没有优雅恢复机制，阻止实时交互进行。
**社区反馈：** 与高强度/最大推理努力模型相关；影响生产工作流。

### 8. [macOS] PDF 预览导致高 CPU 占用和严重 UI 卡顿 [#58367](https://github.com/openai/codex/issues/58367) — 3 条评论（5 个 👍）
**问题所在：** 即使是小文件也会触发过度 CPU 占用，导致整个 Codex UI 出现卡顿。
**社区反馈：** 👍 比例高表明用户对 PDF 预览性能普遍感到不满。

### 9. [全平台] Pro $100 配额在 20 小时内耗尽 [#56174](https://github.com/openai/codex/issues/56174) — 3 条评论
**问题所在：** 用户经历的配额消耗速度是正常的 3-4 倍，表明存在消耗泄露。
**社区反馈：** 对 Pro 订阅用户有经济影响；需要调查。

### 10. [macOS] 安装程序遗留 381 个临时目录（约 472 GB）[#61570](https://github.com/openai/codex/issues/61570) — 3 条评论
**问题所在：** 安装程序的清理失败导致 macOS 系统磁盘接近填满。
**社区反馈：** 在 build 26605 上报告了严重的磁盘空间问题。

---

## 主要 PR 进展

### TUI 稳定性与优化

| PR | 描述 |
|-----|-------------|
| [#62175](https://github.com/openai/codex/pull/62175) | 修复 TUI 立即重绘时终端尺寸陈旧问题 — 防止终端大小调整后出现渲染异常 |
| [#62174](https://github.com/openai/codex/pull/62174) | 保持 TUI 编辑器输入时光标稳定 — 解决提示行变化时光标垂直跳动的问题 |
| [#62171](https://github.com/openai/codex/pull/62171) | 抽取 TUI 线程恢复完成逻辑 — 更好地分离订阅状态和历史记录填充 |
| [#62146](https://github.com/openai/codex/pull/62146) | 在 TUI 中批量处理鼠标滚轮滚动 — 减少快速滚动时的冗余重绘 |

### 子智能体协作功能

| PR | 描述 |
|-----|-------------|
| [#62159](https://github.com/openai/codex/pull/62159) | 从活动链接打开子智能体转录 — 在转录中显示可点击的子智能体标签 |
| [#62157](https://github.com/openai/codex/pull/62157) | 在侧边栏标签页打开子智能体转录 — 审查智能体工作时保持父对话可见 |
| [#62149](https://github.com/openai/codex/pull/62149) | 在 TUI 侧边栏选择器中显示子智能体及状态 — 无需切换对话即可检查进度 |

### App-Server 与可靠性

| PR | 描述 |
|-----|-------------|
| [#62176](https://github.com/openai/codex/pull/62176) | 在 app-server v2 中暴露 `bioPolicy` 错误 — 使客户端能够通过代码区分生物政策错误 |
| [#62163](https://github.com/openai/codex/pull/62163) | 将 app-server socket 中继移入 Codex CLI — 合并中继逻辑，移除独立二进制文件 |
| [#62151](https://github.com/openai/codex/pull/62151) | 限制重复云回复流断开后的恢复次数 — 防止面向用户的重连循环 |
| [#62150](https://github.com/openai/codex/pull/62150) | 取消阻塞 TUI 导航的 Cloud 概览刷新 — 防止工作线程饥饿 |

### 平台与性能

| PR | 描述 |
|-----|-------------|
| [#62142](https://github.com/openai/codex/pull/62142) | 在后端客户端添加音频转录 — 支持 WAV、MP3、M4A、WebM、Ogg，响应上限 64KB |
| [#62141](https://github.com/openai/codex/pull/62141) | 修复 Windows 沙箱 Core 注册缺失/过时问题 — 确保注册未就绪时仍能运行设置 |
| [#62153](https://github.com/openai/codex/pull/62153) | 降低 CLI 集成测试开销 — 共享 SSE mock 和优化的 Tokio worker 生成 |

---

## 热门讨论

### 💡 想法与功能请求

- **[Codex Mobile Workbench](https://github.com/openai/codex/discussions/58912)** — 自托管的手机/PWA 界面，用于远程控制 Codex。1 个 👍
- **[AppScreen MCP 集成](https://github.com/openai/codex/discussions/61525)** — 让 Codex 通过 MCP 设计 App Store/Play 截图。1 个 👍

### 🔧 问答

- **[turn/moderationMetadata 的版本化客户端契约？](https://github.com/openai/codex/discussions/59292)** — 需要澄清如何在审核元数据中处理 `prompt` 和 `generation` 对象。1 个 👍
- **[诊断截图/工具响应延迟](https://github.com/openai/codex/discussions/61849)** — 寻求支持的方法来区分首次输出延迟和命令传递时序。1 个 👍

### 🛠️ 展示与分享

- **[Awesome Codex CLI — 150+ 生态工具](https://github.com/openai/codex/discussions/16329)** — 子智能体、技能、插件和 MCP 服务器精选列表。10 条评论，1 个 👍
- **[Cloud Alter Ego](https://github.com/openai/codex/discussions/61997)** — 通过云存储在 ChatGPT、Claude 等 AI 助手中统一记忆。1 个 👍
- **[视频剪辑规划器](https://github.com/openai/codex/discussions/61980)** — 将播客转录转换为短视频剪辑列表。1 个 👍

### 💬 综合

- **[Codex 用 Python 进行文件编辑](https://github.com/openai/codex/discussions/3057)** — 23 条评论，38 个 👍 — 社区讨论为什么 Codex 有时会用脚本进行更改而不是使用文件编辑工具。自 2025 年起持续活跃讨论。

---

## 功能请求趋势

对问题和讨论的分析揭示了以下主要功能方向：

| 类别 | 热门请求 | 信号强度 |
|----------|--------------|-----------------|
| **IDE 集成** | VS Code 中的多标签 Codex 对话、用于同时对话的编辑器标签 | #53071 上 8+ 个 👍 |
| **项目管理** | 用于创建和管理 Codex Desktop 项目的 API/CLI | #25385 上 12 个 👍 |
| **MCP 增强** | 在 `codex exec` 中无需沙箱绕过即可进行非交互式 MCP 工具调用批准 | #24135 上 9 条评论 |
| **平台一致性** | Windows/macOS/Linux 功能对等（Computer Use、沙箱） | Windows 相关 bug 上 55+ 条评论 |
| **资源管理** | 更好的配额监控、消费预警、按项目计费 | #56174 上 3 条评论 |

---

## 开发者痛点

### 1. 平台不一致性
Windows 和 macOS 特定 bug 在问题列表中占主导地位。Computer Use、会话管理和沙箱等关键功能在不同平台上表现不同，迫使开发者维护各种变通方案。

### 2. TUI 脆弱性
终端大小调整处理（SIGWINCH）、编辑器状态管理和尺寸同步仍然存在问题。本周期 20+ 个 TUI PR 表明正在积极修复。

### 3. 性能与资源泄露
- macOS PDF 预览导致整个 UI 卡顿
- replayd XPC 循环消耗 90% CPU
- 临时目录堆积导致磁盘占满（报告约 472 GB）
- 应用启动时 CPU 占用升高

### 4. CLI/非交互模式限制
`codex exec` 工具缺少对无头环境适当的 MCP 批准处理，迫使开发者使用 `--dangerously-bypass-approvals-and-sandbox`。

### 5. 连接与恢复
WebSocket 卡顿、流断开和重试循环造成不可靠的体验，尤其是在高推理努力模型上。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) — 2026-11-18*</think>



</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate an English technical report into Simplified Chinese. Let me carefully translate this while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title:** Gemini CLI Community Digest → Gemini CLI 社区日报

**Date:** 2026-11-18
**Repository:** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

Let me translate the content carefully:

---

## 1. Today's Highlights

The community is actively addressing critical agent reliability issues, with three P1 bugs related to subagent behavior and hangs dominating attention. Platform improvements continue with several dependency updates and IDE companion fixes merged, while discussions around AST-aware tooling and OS sandboxing suggest a push toward more sophisticated codebase navigation capabilities.

社区正在积极解决关键智能体可靠性问题，三个与子智能体行为和挂起相关的 P1 级缺陷成为焦点。同时，平台改进持续推进，多项依赖更新和 IDE 伴侣修复已合并，讨论围绕 AST 感知工具和操作系统沙箱展开，暗示着对更精细化代码库导航能力的追求。

---

## 2. Releases

No new releases in the last 24 hours.

过去 24 小时内无新版本发布。

---

## 3. Hot Issues

| # | Issue | Priority | Comments | Why It Matters |
|---|-------|----------|----------|----------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent recovery after MAX_TURNS reports GOAL success | P1 | 13 | Critical false-positive: subagents report success status even when hitting maximum turn limits before completing analysis, hiding interruptions from users |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | P2 | 9 | Proposes leveraging Gemini 3's native bash affinity for POSIX tool chaining without compromising security—could significantly improve tool call efficiency |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist agent hangs | P1 | 8 | Blocks production use: agent defers to subagents and hangs indefinitely (up to an hour), only resolved by explicitly disabling subagent delegation |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - Assess AST-aware file reads, search, and mapping | P2 | 7 | Epic tracking investigation into AST-aware tooling for surgical code discovery—could reduce token bloat and improve navigation precision |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini does not use skills and sub-agents enough | P2 | 7 | Agent ignores custom skills/sub-agents even for highly related tasks, requiring explicit user instruction—reduces automation value |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) - Browser Agent ignores settings.json overrides | P2 | 5 | Configuration overrides (e.g., maxTurns) are silently ignored by Browser Agent despite correct reading/merging in AgentRegistry |
| 7 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) - Browser agent resilience: session takeover and lock recovery | P3 | 4 | Proposes automatic recovery from locked browser profiles instead of fail-fast behavior, improving reliability in persistent session mode |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - Browser subagent fails in Wayland | P1 | 4 | Browser subagent fails on Wayland compositors, limiting CLI usability on Linux desktop environments |
| 9 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) - Symlinked agent files not recognized | P2 | 4 | Users cannot use symlinks in `~/.gemini/agents/` for agent definition files, limiting workspace organization flexibility |
| 10 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - 400 error with >128 tools | P2 | 3 | Agent crashes with API 400 error when more than ~400 tools are available; lacks smart tool scoping |

---

## 4. Key PR Progress

| # | PR | Status | Size | Summary |
|---|-----|--------|------|---------|
| 1 | [#30335](https://github.com/google-gemini/gemini-cli/pull/30335) - Fix core.sshCommand override | OPEN | M | Resolves SSH operations failing with "cannot run : No such file or directory" by preventing empty string override of `core.sshCommand` |
| 2 | [#30331](https://github.com/google-gemini/gemini-cli/pull/30331) - Preserve MCP env values with `=` and empty values | OPEN | S | Fixes parsing corruption where `TOKEN=abc=def==` was truncated and `EMPTY=` was dropped entirely in `gemini mcp add -e` |
| 3 | [#30107](https://github.com/google-gemini/gemini-cli/pull/30107) - Make auth URL clickable when terminal wraps | CLOSED | L | Prevents Google Auth 400 "Authorization error" by ensuring wrapped URLs remain clickable in narrow terminals |
| 4 | [#30115](https://github.com/google-gemini/gemini-cli/pull/30115) - Prevent $-pattern expansion in substitutions | CLOSED | M | Fixes corruption of custom commands and template text when JavaScript replacement patterns (`$$`, `$&`, `$1`) appear in user arguments |
| 5 | [#30219](https://github.com/google-gemini/gemini-cli/pull/30219) - Record tool calls on active chat | OPEN | M | Prevents 400 errors on compressed session reload by recording tool calls through active chat instance rather than pre-compression chat in ACP sessions |
| 6 | [#30334](https://github.com/google-gemini/gemini-cli/pull/30334) - Parse PowerShell commands asynchronously | OPEN | XL | Fixes multi-second UI freeze on Windows during PowerShell command validation by moving AST parsing off main thread |
| 7 | [#30340](https://github.com/google-gemini/gemini-cli/pull/30340) - Per-user IDE discovery directory | CLOSED | L | Scopes IDE companion files to `${os.tmpdir()}/gemini-ide-${uid}` with 0700 permissions and uses atomic writes for port files |
| 8 | [#30315](https://github.com/google-gemini/gemini-cli/pull/30315) - Detect local git clone from CLI path | CLOSED | L | Fixes auto-update misclassifying local source checkouts as npm installations when run from outside clone root |
| 9 | [#30344](https://github.com/google-gemini/gemini-cli/pull/30344) - npm-dependencies: 62 updates | OPEN | XL | Batch update including `@octokit/rest`, `@types/ws`, and MCP SDK from 1.23.0 to 1.32.2 |
| 10 | [#30341](https://github.com/google-gemini/gemini-cli/pull/30341) - npm-dependencies: 71 updates | CLOSED | XL | Large dependency batch updating workspace packages |

---

## 5. Feature Request Trends

**Codebase Navigation & Analysis**
- AST-aware file reads and searches for surgical, token-frugal operations ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747))
- "Tactful Extraction" logic with grep-first code discovery hierarchy ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561))
- Improved codebase investigator agent with configurable structure ([#18282](https://github.com/google-gemini/gemini-cli/issues/18282))

**Subagent System Enhancements**
- Better autonomous subagent/skill utilization without explicit prompting ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
- Parallel subagent collaboration with shared memory ([#18287](https://github.com/google-gemini/gemini-cli/issues/18287))
- Subagent discovery via `settings.json` ([#18285](https://github.com/google-gemini/gemini-cli/issues/18285))
- Visible subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598))

**Security & Sandboxing**
- Zero-dependency OS sandboxing leveraging model's bash affinity ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873))
- Discouraging destructive behavior (git reset --force, DB modifications) ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672))
- Per-workspace policy tracking ([#18397](https://github.com/google-gemini/gemini-cli/issues/18397))

**Task Management**
- Persistent file-based task tracking replacing in-context todos ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836))
- Native file tools for task tracker maintenance ([#21000](https://github.com/google-gemini/gemini-cli/issues/21000))

---

## 6. Developer Pain Points

| Pain Point | Frequency | Example Issues |
|------------|-----------|----------------|
| **Agent hangs and freezes** | High | Generalist agent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), PowerShell UI freeze ([#30334](https://github.com/google-gemini/gemini-cli/pull/30334)) |
| **Subagent reliability** | High | False success reporting ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), subagent context missing from bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) |
| **Browser agent issues** | Medium | Wayland failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings.json ignored ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), session lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) |
| **Tool/API errors** | Medium | 400 error with >128 tools ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), compressed session reload errors ([#30219](https://github.com/google-gemini/gemini-cli/pull/30219)) |
| **Token/context bloat** | Medium | Firehose file reads adding +15k tokens/turn ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), context rot in todo tracking ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836)) |
| **Git/SSH integration** | Medium | SSH command failures ([#30335](https://github.com/google-gemini/gemini-cli/pull/30335)), tmp script sprawl ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) |
| **Agent self-awareness** | Low | Agent lacks knowledge of own CLI flags and hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) |

---

*Generated from GitHub data • [View repository](https://github.com/google-gemini/gemini-cli) • [Open issues](https://github.com/google-gemini/gemini-cli/issues) • [Open PRs](https://github.com/google-gemini/gemini-cli/pulls)*</think>



</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the entire document while preserving the Markdown structure and following the rules provided. Let me translate it carefully, maintaining the technical register and natural Chinese expression.
</think>



# GitHub Copilot CLI 社区动态

**日期：** 2026-11-18
**仓库：** github.com/github/copilot-cli

---

## 1. 今日要闻

Copilot CLI 团队发布了 **v1.0.114-0** 版本，包含了修复和变更，同时 **v1.0.113** 引入了一项重要的管理控制功能：组织现在可以通过 `features.browserUse` 托管配置项禁用内置的 Browser Use 功能，支持在活跃会话中即时切换。此版本满足了企业部署的安全合规需求。与此同时，社区正在积极反馈平台相关问题——Windows 用户反映当 Cortex XDR 拦截 Copilot 执行期间的 git 操作时，shell 进程会被强制终止。

---

## 2. 版本更新

### v1.0.114-0
- **类型：** 补丁版本
- **概要：** 常规修复与改进（该版本未提供详细变更日志）。

### v1.0.113（2026-11-17）
- **新功能：** 管理员可通过托管配置项 `features.browserUse` 禁用内置 Browser Use 功能，支持在运行中的会话里切换开关。
- **影响：** 企业安全策略可限制浏览器自动化能力，无需重启会话即可生效。

---

## 3. 热门 Issue

### 🔴 高优先级

**#5478 — Cortex XDR 的"parent_process_spoofing"检测导致启动 shell 被终止** [🔗](https://github.com/github/copilot-cli/issues/5478)
- **状态：** OPEN | 评论: 5 | 👍: 1
- **为何重要：** 在启用了 Cortex XDR 的 Windows 系统上，在 git 仓库中运行 Copilot 会导致 shell（cmd/PowerShell）崩溃——原因是 Copilot 执行 git 命令时被 XDR 误判为父进程欺骗攻击。
- **社区反馈：** 影响企业级 Windows 部署环境；用户反映会话进行中 shell 被完全终止。

**#4674 — 恢复会话时自定义 agent 未被还原（回归问题）** [🔗](https://github.com/github/copilot-cli/issues/4674)
- **状态：** CLOSED | 评论: 4 | 👍: 0
- **为何重要：** 此回归问题破坏了工作流连续性——用户恢复会话后，自定义 agent 配置和 MCP 服务端设置被静默丢弃，导致可用工具发生意外变化。
- **社区反馈：** 因修复不完整被重新开启；用户依赖自定义 agent 执行专业工作流。

**#4773 — 重复的 MCP 发现持续报告"Found 0 tools"（已加载的 namespace）** [🔗](https://github.com/github/copilot-cli/issues/4773)
- **状态：** OPEN | 评论: 3 | 👍: 1
- **为何重要：** 误导性的诊断输出导致 agent 错误地判定已正常集成的 MCP 工具不可用，进而跳过工作流中的必要步骤。
- **社区反馈：** 调试体验混乱；agent 基于假阴性结果跳过关键步骤。

### 🟡 中优先级

**#4576 — `includeCoAuthoredBy: false` 未被子 agent 继承** [🔗](https://github.com/github/copilot-cli/issues/4576)
- **状态：** CLOSED | 评论: 3 | 👍: 5
- **为何重要：** 出于合规或隐私原因禁用了合著归因的用户发现此偏好被子 agent 静默忽略，导致提交记录中出现非预期的签名。
- **社区反馈：** 高关注度（5 个 👍）表明归因控制问题受到广泛关注。

**#5290 — 缺少 `--fusion-tier` 参数** [🔗](https://github.com/github/copilot-cli/issues/4674)
- **状态：** CLOSED | 评论: 3 | 👍: 3
- **为何重要：** 文档中提及的 `--fusion-tier` 参数在 CLI 中并不存在，导致用户无法按文档所述配置 Fusion 层级设置。
- **社区反馈：** 文档与实现不一致，令用户困惑。

**#5040 — MCP OAuth：Entra 拒绝 127.0.0.1 回调地址** [🔗](https://github.com/github/copilot-cli/issues/5040)
- **状态：** OPEN | 评论: 2 | 👍: 0
- **为何重要：** 使用 Microsoft Entra ID 保护的 MCP 服务端的企业用户无法完成身份验证，触发 AADSTS50011 错误，阻断了 Azure AD 环境中的 MCP 集成。
- **社区反馈：** 企业 MCP 集成的关键阻碍。

**#5483 — 两条"immediate"消息被合并为一条字符串** [🔗](https://github.com/github/copilot-cli/issues/5483)
- **状态：** OPEN | 评论: 1 | 👍: 0
- **为何重要：** 当多个 `session.send` 调用以 `mode: "immediate"` 在工具执行期间同时到达时，会被无分隔符地拼接，导致模型误解用户意图。
- **社区反馈：** 新近报告；可能影响并发提示提交场景。

**#4829 — 执行长工具调用序列的子 agent 无法利用 prompt 缓存** [🔗](https://github.com/github/copilot-cli/issues/4829)
- **状态：** OPEN | 评论: 1 | 👍: 0
- **为何重要：** 在单次调用中执行数百次工具调用的自主型子 agent 因缺少 prompt 缓存优化而耗尽 token 配额。
- **社区反馈：** 限制了自主 agent 工作流的效率。

**#5492 — SDK 重命名为 @microsoft/copilot-sdk 但未提供兼容别名** [🔗](https://github.com/github/copilot-cli/issues/5492)
- **状态：** OPEN（triage）| 评论: 0 | 👍: 0
- **为何重要：** v1.0.113 重命名了 SDK 包名但未提供向后兼容别名，导致所有现有扩展中 `import "@github/copilot-sdk"` 的代码全部失效。
- **社区反馈：** 重大破坏性变更，发布说明中未记录迁移方案。

**#5413 — 子 agent 无法运行 `hydrafusion` 或 `hydrafusion-max`** [🔗](https://github.com/github/copilot-cli/issues/5413)
- **状态：** OPEN | 评论: 0 | 👍: 0
- **为何重要：** `task` 工具提供了 hydrafusion 模型选项，但子 agent 实际调用这些模型时会失败，造成一种令人困惑的 UX——宣传的功能选项根本无法使用。
- **社区反馈：** 文档描述与实际能力不符。

---

## 4. 重要 PR 进展

过去 24 小时内无 Pull Request 合并或更新。团队似乎正处于 v1.0.113 发布后的稳定期，焦点集中在 issue 分级和后续版本规划上。

---

## 5. 功能需求趋势

对 open 状态的 issue 进行分析，呈现出以下主导性的功能需求主题：

### 🏗️ **Agent 配置与持久化**
- 会话恢复时应完整还原 agent 状态 (#4674)
- 子 agent 应继承父级配置设置 (#4576)
- 支持动态新增 agent 的热加载 (#3106)
- 文件操作前应先解析嵌套/作用域化指令 (#5497)

### 🔌 **MCP（Model Context Protocol）改进**
- 支持企业身份提供商的 OAuth 认证 (#5040)
- 准确报告工具发现结果 (#4773)
- 非交互模式下采样权限处理 (#2882)
- 清理陈旧/孤立 MCP 进程 (#1790)

### 💻 **平台特定增强**
- Windows 安全软件兼容性（Cortex XDR）(#5478)
- Windows 重解析点/符号链接卷支持 (#5496)
- 处理 Surge Fake-IP DNS 解析 (#5180)

### ⚙️ **配置与策略**
- 沙箱和推送配置的企业策略管控 (#4446)
- 组织级 Browser Use 功能开关 (#5476)
- 市场插件稀疏检出（sparse checkout）(#2463)

### 🔧 **CLI/核心功能**
- Fusion 模型遥测与可观测性 (#4825)
- 并发提示的 immediate 消息处理 (#5483)
- 扩展 SDK 稳定性和向后兼容 (#5492)

---

## 6. 开发者痛点

从 issue 分析中归纳出以下反复出现的困扰：

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| **配置在会话间未持久化** | 高 | 用户每次恢复会话都需要重新配置 agent 和设置 |
| **扩展 SDK 破坏性变更** | 严重 | 扩展在小版本更新后无法加载，且无迁移路径 |
| **MCP 集成故障** | 中 | 企业认证和工具发现问题阻碍了 MCP 的推广落地 |
| **子 agent 行为不一致** | 中 | 自定义 agent 设置、模型选择和归因偏好被子 agent 忽略 |
| **平台相关故障** | 中 | Windows 用户面临安全软件、卷挂载和路径处理方面的不成比例问题 |
| **文档与 CLI 参数不一致** | 中 | 缺少 `--fusion-tier` 等参数导致用户无法按文档操作 |
| **长时运行 agent token 耗尽** | 低至中 | 自主型子 agent 因缺少 prompt 缓存优化而触发 token 上限 |
| **诊断信息不透明** | 中 | "Found 0 tools" 等错误具有误导性；凭据选择过程缺乏可见性 |

---

## 7. 社区指标速览

| 指标 | 数值 |
|--------|-------|
| **Issue 总数（24h）** | 50 |
| **新增 Issue（24h）** | ~10 |
| **关闭 Issue（24h）** | ~15 |
| **合并 PR（24h）** | 0 |
| **版本发布活动** | 2 个版本（v1.0.113, v1.0.114-0）|
| **最活跃领域标签** | `area:agents`, `area:mcp`, `area:platform-windows`, `area:tools` |

---

*本动态基于 GitHub Copilot CLI 社区数据生成。完整 issue 追踪请访问：https://github.com/github/copilot-cli/issues*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to follow the rules provided:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and using appropriate Chinese technical terminology.

Key terms to translate consistently:
- OpenCode - OpenCode (keep as-is)
- Community Digest - 社区速递
- Today's Highlights - 今日要闻
- Releases - 版本更新
- Hot Issues - 热门议题
- Key PR Progress - 重要 PR 进展
- Feature Request Trends - 功能需求趋势
- Developer Pain Points - 开发者痛点
- Why it matters - 为什么重要 (or translate contextually)
- Fatal error - 致命错误
- Bug - 缺陷
- Feature - 功能
- Fix - 修复
- Issue - 问题
- PR - PR
- Comments - 评论/讨论
- Thumbs up / 👍 - 点赞

Let me go through section by section:
</think>


# OpenCode 社区速递 — 2026-11-18

---

## 今日要闻

OpenCode 在过去 24 小时内连续发布了 **v2.3.2** 和 **v2.3.1** 两个版本，修复了关键的 Provider 和 Shell 执行问题。v2.3.2 通过将系统提示词重新路由为 Developer 消息来解决 GPT-6.2 提示词缓存问题，有望显著降低高频工作流场景下的输入 token 成本。v2.3.1 则改进了长时运行的构建任务的可靠性——超时后不再直接终止 Shell 命令，而是将其转入后台执行。社区同期还有大量 PR 进展，包括实验性视频生成工具和 Code Mode 的 Rust 移植版本。

---

## 版本更新

### [v2.3.2](https://github.com/anomalyco/opencode/releases/tag/v2.3.2)
**GPT-6.2 提示词缓存修复**
- 通过 Responses API `instructions` 字段发送的系统提示词无法被 GPT-6.2 模型缓存，导致每一步都要重新计费这些未缓存的输入。
- OpenCode 现已将其作为前置 Developer 消息发送至所有 Responses 路由，包括 OpenAI（API Key 和 ChatGPT 登录两种方式）。
- 此变更将直接降低在活跃会话中使用 GPT-6.2 模型用户的成本。

### [v2.3.1](https://github.com/anomalyco/opencode/releases/tag/v2.3.1)
**超时 Shell 命令继续运行**
- Shell 命令在超时后不再被杀死，而是移入后台继续执行。
- 长时构建和测试运行现在可以完成并回报结果，不会被打断。
- 前台 `timeout: 0` 现表示默认的 120 秒，提供更清晰的行为定义。
- 修复 [#63699](https://github.com/anomalyco/opencode/issues/63699)

### [v1.19.6](https://github.com/anomalyco/opencode/releases/tag/v1.19.6)
**桌面版升级路径至 2.0**
- OpenCode 1 现在提供升级到 OpenCode 2.0 的选项。
- 下载在后台进行，安装时间由用户决定："立即重启升级"、"退出时升级"或"稍后再说"。
- 所有会话、项目和设置均保留。
- 注意：为 OpenCode 1 编写的插件需要更新才能继续使用。

---

## 热门议题

### 1. [恢复前台子智能体执行](https://github.com/anomalyco/opencode/issues/64073) — 11 条评论，3 👍
**重要性：** 用户请求能够以前台模式运行子智能体，而非总是后台执行。这是一项重要的 UX/工作流变更，将支持同步、阻塞式的子智能体执行——这是 CI/CD 和脚本化场景中的常见模式。
> *"这个功能之前没有人提过。"* — wangzheroyun

### 2. [macOS 英文界面下中文文字显示异常](https://github.com/anomalyco/opencode/issues/64543) — 10 条评论
**重要性：** 一个渲染缺陷导致会话标题中的 CJK 字符在 UI 语言设置为英文时显示不正确，尽管文字存储本身无误。这表明是 macOS 桌面渲染器特有的字体回退或字形映射问题——影响多语言环境下的国际用户。

### 3. [使 Provider 目录与 /models 端点保持一致](https://github.com/anomalyco/opencode/issues/40524) — 8 条评论，1 👍
**重要性：** 长期存在的架构问题：OpenCode 的模型目录可能与 Provider 实际暴露的内容不一致。这会导致幽灵模型（已被 Provider 移除但仍列出）和缺失模型（已发布但不可见）。这对模型可发现性和准确性至关重要。

### 4. [升级后 api.responses.write 权限错误](https://github.com/anomalyco/opencode/issues/61342) — 6 条评论
**重要性：** 升级后用户遇到 `api.responses.write` 权限错误，且没有明确的解决路径。清理缓存的临时方案也不够直观。这表明升级路径可能未正确迁移 OAuth 权限，可能导致用户无法使用核心功能。

### 5. [Provider 失败响应被持久化为空工具调用，导致循环](https://github.com/anomalyco/opencode/issues/64481) — 6 条评论
**重要性：** 当 Provider 返回 `response.failed` / `server_error` 时，OpenCode 会持久化一个参数为空的工具调用。这会创建无限循环的"参数无效... {}"错误。这是一个严重的可靠性问题，可能在特定长上下文轮次导致会话崩溃或卡死。

### 6. [Windows 上 renderRow 中 Renderer Match/exhaustive 断言失败](https://github.com/anomalyco/opencode/issues/63944) — 5 条评论，2 👍
**重要性：** 桌面渲染器在生成过程中因时间线虚拟化逻辑中的类型安全断言失败（`effect/match/Match/exhaustive: absurd`）而崩溃。这是 Windows 11 上的生产级问题，表明时间线虚拟化逻辑中存在意外状态。

### 7. [SSH 远程服务启动失败被误报为连接错误](https://github.com/anomalyco/opencode/issues/54059) — 5 条评论
**重要性：** 当远程 OpenCode 服务启动失败时（如端口被占用），显示的错误是"无法建立 SSH 连接"而非实际根本原因。这种误导使得 SSH 配置的调试变得困难重重，影响有远程工作流需求的用户。

### 8. [代码块隐藏水平滚动条，无法换行](https://github.com/anomalyco/opencode/issues/60143) — 4 条评论，1 👍
**重要性：** CSS 明确隐藏了 `<pre>` 元素上的滚动条（`scrollbar-width: none`，`&::-webkit-scrollbar { display: none }`），导致用户无法水平滚动长单行代码。这破坏了压缩代码、长字符串或宽表格等常见工作场景。

### 9. [预期用户消息时间线行 致命错误](https://github.com/anomalyco/opencode/issues/62800) — 3 条评论
**重要性：** 桌面渲染器在虚拟化时间线行类型变更时抛出致命错误，应用必须重启才能恢复。UI 层中的这种不稳定性表明会话时间线组件存在竞态条件或状态转换不当。

### 10. [子智能体完成通知在执行周期边界处被静默跳过](https://github.com/anomalyco/opencode/issues/64558) — 3 条评论
**重要性：** OpenCode 可能静默跳过子智能体完成通知，即使子智能体已成功完成并持久化了响应。这种数据丢失缺陷会导致父智能体在没有任何错误提示的情况下丢失重要结果——对自动化管道来说非常危险。

---

## 重要 PR 进展

### 1. [通过配置文件夹切换 Claude Agent 账户](https://github.com/anomalyco/opencode/pull/64580) — Open
支持用户通过指向不同的配置文件夹来切换多个 Claude Agent 账户。建立在功能需求 #60793 之上。这是管理多身份或多组织账户的用户的重要体验提升。

### 2. [允许 GUI 插件声明自己的图标](https://github.com/anomalyco/opencode/pull/64577) — Open
插件现在可以指定自己的图标资源，图标名称会被解析并在所有 SDK 图标字段中生效。取代了之前通过 `ComposerPill.icon` 渲染函数的方式，使插件 UI 更加一致和灵活。

### 3. [添加实验性视频生成工具](https://github.com/anomalyco/opencode/pull/63666) — Open
引入 `experimental_video` 工具，允许智能体生成视频。这是重大的新能力扩展，将 OpenCode 定位到多模态内容生成工作流领域。

### 4. [将 Windows Shell 命令逐字传递给 cmd 和 PowerShell](https://github.com/anomalyco/opencode/pull/64574) — Open
修复了在 Windows 上使用 `shell: "cmd"` 时 `echo "hello world"` 被错误转义的缺陷。命令现在作为单个 argv 条目传递，保持预期的 Shell 行为。

### 5. [带扩展、预览和提示的已登录浏览器面板](https://github.com/anomalyco/opencode/pull/63002) — Open
桌面功能：网页链接在保留认证状态的已登录浏览器面板中打开。用户可一键从 Chrome、Edge、Firefox、Safari 及其他 11 种浏览器导入登录状态。聊天中点击的链接会预认证打开。

### 6. [在长时长时间显示小时](https://github.com/anomalyco/opencode/pull/64501) — Open
修复 session-ui 中时长格式化问题：2 小时的任务曾显示"工作时长 125m 3s"而非"2h 5m 3s"。格式化器现在正确处理小时级别的时长。

### 7. [读取 Console 工件](https://github.com/anomalyco/opencode/pull/64555) — Closed
通过新的文件端点添加读取 Console 工件的能力：`GET /api/artifacts/:slug/files`（清单，内联最多 2 MiB 的 UTF-8 文本）和 `GET /api/artifacts/:slug/blobs/:sha256`。支持工件工作流的往返。

### 8. [Code Mode 的可嵌入 Rust 移植版](https://github.com/anomalyco/opencode/pull/64437) — Open
引入 `packages/codemode-rust`（crate `psychoscript`），允许 Rust 程序在无需 Bun 或 Node.js 的情况下嵌入 Code Mode。这将 OpenCode 的智能体能力扩展到了没有 JavaScript 运行时的系统。

### 9. [在不支持后量子算法的网络上回退到经典 TLS 握手](https://github.com/anomalyco/opencode/pull/64572) — Open
Bun 1.4.1+ 在 TLS ClientHello 中发送后量子密钥共享，将大小从约 500B 增加到约 1500B。部分网络（尤其是自 10 月底以来的 Rostelecom 等俄罗斯 ISP，以及一些土耳其运营商）会丢弃两段式的 ClientHello。此 PR 为受影响网络添加经典 TLS 回退。

### 10. [在事件监听器中读取 Shell 工具的 exitCode](https://github.com/anomalyco/opencode/pull/64571) — Open
事件监听器之前在解码 Shell 结果的 `exit` 属性，但 Shell 工具返回的是 `exitCode`。这导致 `gh pr create` 或 `git push` 之后的监听器永远不会被触发。现已正确从 Shell 工具的导出输出模式解码。

---

## 功能需求趋势

通过对今日议题和 PR 的分析，揭示了几个主导性的功能方向：

| 主题 | 频率 | 示例 |
|-------|-----------|----------|
| **智能体执行控制** | 高 | 前台子智能体执行、仅后台子智能体行为变更、子智能体完成处理 |
| **模型 Provider 可靠性** | 高 | 目录一致性、权限迁移、模型可见性、缓存过期 |
| **桌面 UI 打磨** | 中 | 中文字形渲染、滚动条可见性、时间线虚拟化稳定性、已登录浏览器面板 |
| **SSH/远程工作流** | 中 | 服务启动错误报告、安装进度提示 |
| **国际化** | 中 | CJK 文字渲染、emoji 截断、宽度计算一致性 |
| **多模态能力** | 新兴 | 视频生成工具、可嵌入 Rust 运行时 |
| **安全/兼容性** | 持续 | TLS 后量子回退、OAuth 权限迁移 |

---

## 开发者痛点

1. **Shell 命令超时行为**：之前终止超时命令的破坏性行为对 CI/CD 工作流造成了严重影响。v2.3.1 的修复解决了这一问题，但开发者仍在报告相关边缘案例。

2. **SSH 配置错误提示**：错误信息未能反映实际失败原因，使远程开发环境的调试变得令人沮丧，特别是对于复杂的网络或服务配置问题。

3. **模型目录数据陈旧**：缓存的注册信息数天不刷新（某报告称 6.5 天），导致新发布的模型在服务重启前都不可见。这对想尝试最新 Provider 产品的开发者来说是重大障碍。

4. **上下文窗口计算错误**：UI 显示的上下文百分比超过 100% 表明是累积 token 追踪而非实时窗口追踪——这种混淆削弱了长会话开发者的监控能力。

5. **代码块水平滚动**：`<pre>` 元素上隐藏的滚动条导致无法访问长单行内容，这在压缩代码、API 输出和生成内容中很常见。

6. **子智能体通知可靠性**：子智能体完成报告中的静默失败可能在没有任何错误提示的情况下导致自动化管道中的数据丢失。

7. **跨平台渲染器不一致**：特定于 Windows 的致命错误（renderRow exhaustive、时间线虚拟化）表明存在需要加强跨平台兼容性的平台特定代码路径。

---

*本速递基于 anomalyco/opencode 于 2026-11-18 的活动数据生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me provide a high-quality translation following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese, like a Chinese developer newsletter

Let me translate this carefully:

# Pi 社区日报 — 2026-11-18

## 今日要点

Pi 社区正集中处理编码智能体的一系列崩溃问题——尤其是当 codemode 脚本在待处理文件读取期间失败时，未处理的 AbortError 异常（#12271）。Windows 用户仍在寻求最佳实践和支持配置方面的指导（#7547，97 条评论），而生态系统中持续存在新发布包未被纳入 pi.dev 索引的问题（#7885、#6873）。值得注意的是，两个 PR（#12262、#12256）已合并，解决了会话事件发送和技能冲突诊断问题，还有一个新 PR（#12028）旨在修复 triggerTurn 期间的压缩时机问题。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issues

| # | Issue | 重要性 | 社区反馈 |
|---|-------|--------|----------|


| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] 你如何在 Windows 上使用 Pi？遇到了什么问题？** | 该问题获得最多关注（97 条评论），反映出关键的入门障碍。Windows 开发者需要关于支持配置、变通方案以及核心功能与扩展职责边界的明确指导。 | 讨论活跃；用户分享 WSL 与原生配置的对比。 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search 未索引新发布的 pi-packages** | 包的发布状态和可见性问题导致生态系统中的发现机制失效。 | 用户报告包在 npm 上已发布但在 pi.dev 上不可见。 |
| [#11021](https://github.com/earendil-works/pi/issues/11021) | **OpenAI ChatGPT 登录后报告 272K 而非 500K 上下文** | Pi 未充分利用账户能力——服务器宣传的上下文预算更大，影响压缩规划。 | 涉及认证流程和模型目录解析。 |
| [#11956](https://github.com/earendil-works/pi/issues/11956) | **取消读取时崩溃（文件打开期间）** | 未捕获的 AbortError 导致整个 Pi 进程崩溃，这是 P0 级别的可靠性问题。 | 通过 Promise.all 混合读取成功/失败来复现。 |
| [#11460](https://github.com/earendil-works/pi/issues/11460) | **恢复会话时丢弃所有内置工具** | ENOSPC 后工具清单损坏，导致关键功能丧失。 | 6 条评论；Windows + 多扩展设置触发此问题。 |
| [#6873](https://github.com/earendil-works/pi/issues/6873) | **pi.dev 包从不进入浏览/搜索列表** | 两个发布超过 13 小时的包在 /packages 上不可见，尽管详情页和 npm 索引都正常。 | 6 条评论；表明 npm 和 pi.dev 之间存在管道连接问题。 |
| [#12266](https://github.com/earendil-works/pi/issues/12266) | **空闲的第二个 Pi 实例使用过期的 leafId 分叉会话树** | 并发实例创建孤立分支；恢复落到空分支，丢失上下文。 | 5 条评论；会话文件锁定中的竞态条件。 |
| [#12096](https://github.com/earendil-works/pi/issues/12096) | **llama.cpp 连接存储不会跨会话保留** | 依赖本地模型的用户面临重复认证；违反文档声明的行为。 | 5 条评论；与 --no-models-autoload 工作流相关。 |
| [#12070](https://github.com/earendil-works/pi/issues/12070) | **google-vertex stream timeoutMs 导致停滞或丢失重试** | 多轮评估在 ECONNRESET 时无限挂起或失败，破坏自主工作流。 | 4 条评论；影响 pi-ai@1.5.2 + pi-durable。 |
| [#12184](https://github.com/earendil-works/pi/issues/12184) | **Google 适配器拒绝 Gemini 4 Hydrogen 的 xhigh 思考级别** | xhigh 被宣传但在 HTTP 请求前抛出异常；用户无法访问模型的最高推理层级。 | 4 条评论；google-generative-ai 和 google-vertex 都受影响。 |

## 主要 PR 进展

| # | PR | 状态 | 内容 |
|---|-------|--------|--------------|
| [#12028](https://github.com/earendil-works/pi/pull/12028) | **fix(coding-agent): 延迟 sendMessage triggerTurn 直到压缩结束** | **OPEN** | 防止 pi.sendMessage(msg, { triggerTurn: true }) 在压缩中途开始运行。之前的 sendCustomMessage 仅检查 isStreaming，导致运行使用了未压缩的分支。关闭 #10982。 |
| [#12262](https://github.com/earendil-works/pi/pull/12262) | **fix(coding-agent): 为边界草稿压缩发送 session_compact** | **MERGED** | 通过 turn_end 或 agent_before_settle 提交压缩的扩展现在正确发送 session_compact（而不仅是 entry_appended），使下游消费者能够跟踪压缩事件。 |
| [#12256](https://github.com/earendil-works/pi/pull/12256) | **修复作用域技能冲突诊断** | **MERGED** | 抑制有意更高优先级技能覆盖的冗余警告，同时保留对真正模糊的相同优先级冲突的诊断。 |

## 热门讨论

未提供讨论数据。

## 功能请求趋势

汇总开放 issue，社区正在向这些方向集中：

1. **增强的提供商支持** — 添加新模型提供商（

Sarvam AI Token Factory #12258、#12255）的请求，以及在其 /login 和 /model 中原生公开其模型清单。

2. **思考层级扩展** — 多份报告（#12184、#12177、#12267）指出 Pi 的思考量表缺少 ultra，现有的 xhigh 支持在提供商之间不一致（尤其是 Google 适配器）。

3. **压缩控制** — 对可配置默认压缩模型（#12260）、更好的压缩状态可见性（#12263）以及静默压缩失败（#12076）和被忽略的模型覆盖（#12265）的修复需求。

4. **Windows 对等支持** — 对有文档记录的一流 Windows 支持的持续需求。

核心功能和扩展之间有明确的职责划分（#7547）。

5. **会话健壮性** — 多个问题指向会话文件并发错误（#12266）、中止时丢失队列（#12251）以及思考层级变化时的缓存丢失（#12269）。

6. **SDK 和嵌入改进** — 自定义 agentDir 上下文中的凭据路径报告（#9537）以及未注册工具参数更好的错误消息（#12252）。

## 开发者痛点

这些问题在 issue 中反复出现，需要优先关注：

| 痛点 | 频率 | 代表性 Issues |
|------------|-----------|----------------------|
| **未处理的 AbortError 崩溃** 在 codemode/文件读取路径中 | 高（多份报告） | #11956、#12271、#12253 |
| **npm/包索引缺口** 破坏生态发现 | 高（2+ issues、反复出现） | #7885、#6873 |
| **会话并发错误**（分叉树、陈旧 leafIds） | 中 | #12266、#11460 |
| **Windows 工作流模糊性** | 持续（97 条评论线程） | #7547 |
| **上下文变更时缓存/状态丢失**（思考层级、模型切换） | 中 | #12269、#12264 |
| **云提供商流超时处理** | 中（vertex 焦点） | #12070 |
| **llama.cpp 认证跨会话持久化** | 中 | #12096 |
| **压缩静默失败和配置缺口** | 中 | #12076、#12076、#12265 |

---

*数据来源：github.com/earendil-works/pi — 2026-11-18*</think>



</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate an English technical report (Qwen Code Community Digest for 2026-11-18) into Simplified Chinese. I need to:

1. Translate the content while maintaining the exact Markdown structure
2. Keep URLs, code, numbers, dates, project names, issue references as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: Qwen Code Community Digest -> Qwen Code 社区日报 (or 社区速递/社区摘要)
Date: 2026-11-18 -> keep as-is

Let me go through each section carefully:

### 1. Today's Highlights
The Qwen Code team released **v0.28.0** with Web Shell sidebar workspace filtering and Managed Agent DingTalk adapter integration, while a **v0.28.1-preview.0** is already in testing. The community is actively addressing CI stability issues, with the Managed Agent gate test failure now accumulating 432 comments as developers seek a resolution. Key architectural work continues on the 1.0 Preview loop kernel landing on main, alongside significant SDK improvements for Java and TypeScript.

Qwen Code 团队发布了 **v0.28.0**，带来了 Web Shell 侧边栏工作空间过滤和 Managed Agent DingTalk 适配器集成功能，同时 **v0.28.1-preview.0** 已进入测试阶段。社区正在积极解决 CI 稳定性问题，Managed Agent gate 测试失败已累计 432 条评论，开发者们正在寻求解决方案。核心架构工作持续推进，1.0 Preview 循环内核正在准备合入 main 分支，同时 Java 和 TypeScript SDK 也有显著改进。

### 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.28.0** | Stable | Web Shell sidebar workspace filter, Managed DingTalk adapter integration, bundled CLI v0.28.0 |


| **v0.28.1-preview.0** | Preview | E2E test improvements for scheduled loop fire detection; verify-pr hardening |
| **sdk-typescript-v0.1.35** | SDK | Bundles CLI v0.28.0 |
| **desktop-v0.28.0** | Desktop | Full v0.28.0 feature parity with CLI |

**Breaking Changes:** None reported in this release cycle.

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v0.28.0** | 稳定版 | Web Shell 侧边栏工作空间过滤、Managed DingTalk 适配器集成、捆绑 CLI v0.28.0 |
| **v0.28.1-preview.0** | 预览版 | 定时循环触发检测的 E2E 测试改进；verify-pr 强化 |
| **sdk-typescript-v0.1.35** | SDK | 捆绑 CLI v0.28.0 |
| **desktop-v0.28.0** | 桌面版 | 与 CLI v0.28.0 功能完全对齐 |

**Breaking Changes:** None reported in this release cycle.

This release cycle shows no breaking changes. The stable version introduces workspace filtering and a new adapter, while preview and SDK variants focus on test reliability and CLI bundling improvements. Desktop clients now match the main CLI feature set.

**1. [Main CI failed: Managed Agent gate — no test identified](https://github.com/QwenLM/qwen-code/issues/14724)** (432 comments)  
*Why it matters:* Recurring CI failures blocking merges across multiple commits. The community has seen 6+ distinct failure hashes, suggesting systemic instability in the managed agent test gate.  
*Status:* Open since 2026-10-19; actively triaged.

**2. [Daily dependency CVE audit failed](https://github.com/QwenLM/qwen-code/issues/13078)** (55 comments)  
*Why it matters:* Automated security scanning is failing, potentially masking real vulnerabilities. The npm audit endpoint availability and high-severity vulnerability detection are in question.  
*Status:* Needs-triage; security-critical path.

**3. [Track: land the 1.0 Preview loop kernel on main](https://github.com/QwenLM/qwen-code/issues/17045)** (23 comments)  
*Why it matters:* Major architectural refactor replacing legacy agent loops with an event-driven kernel. This is the centerpiece of the v1.0 roadmap, affecting all agent surfaces.  
*Status:* In-progress; P1 priority.

**4. [SDK Java — HostedShellLifecycleRecoveryIT failures](https://github.com/QwenLM/qwen-code/issues/14104)** (19 comments)  
*Why it matters:* Multiple test permutations consistently failing in the Java SDK lifecycle recovery path, impacting SDK reliability.  
*Status:* Ready-for-agent; autofix-approved.

**5. [Grep fallback: non-UTF8 corpus paths and ripgrep performance](https://github.com/QwenLM/qwen-code/issues/17682)** (5 comments)  
*Why it matters:* Files with non-UTF8 names fail the lstat guard after UTF-8 decoding, breaking grep functionality in internationalized codebases.  
*Status:* Open; newly created today.

**6. [Managed Agent capacity and idle-reclamation model](https://github.com/QwenLM/qwen-code/issues/15082)** (6 comments)  
*Why it matters:* No documented limits on runtime count, memory allocation, or idle reclamation. This is a scalability and stability concern for production deployments.  
*Status:* Ready-for-human; needs-discussion.

**7. [Non-interactive mode delays result until auto-memory tasks finish](https://github.com/QwenLM/qwen-code/issues/13851)** (8 comments)  
*Why it matters:* Headless/SDK consumers observe 40s–5min gaps between model response and final result delivery, while TUI/ACP return immediately.  
*Status:* Ready-for-agent; P1 priority.

**8. [shell Workspace 409 workspace_unavailable on external bindings](https://github.com/QwenLM/qwen-code/issues/17678)** (3 comments)  
*Why it matters:* Three compounding admission defects cause ephemeral workspaces to always reject `toolProfile=shell` sessions with HTTP 409, with no workaround available.  
*Status:* Need-information; created today.

**9. [Team mode: teammate messages never delivered to leader in ACP](https://github.com/QwenLM/qwen-code/issues/15738)** (3 comments)  
*Why it matters:* Multi-agent team experiments fail silently—the leader never receives teammate messages, and the team dies with the short-lived ACP child process.  
*Status:* Ready-for-human; impacts multi-agent roadmap.

**10. [Voice dictation cannot use Token Plan ASR models](https://github.com/QwenLM/qwen-code/issues/10932)** (4 comments)  
*Why it matters:* The voice pipeline hardcodes old model IDs, preventing use of `qwen-audio-3.0-asr-flash` available through Token Plan subscriptions.  
*Status:* Needs-triage; affects voice feature parity.

---

### 3. 热点 Issue

**1. [Main CI failed: Managed Agent gate — no test identified](https://github.com/QwenLM/qwen-code/issues/14724)** (432 条评论)  
*影响说明:* CI 持续失败，阻止多个提交的合并。社区已识别出 6+ 个不同的失败哈希，表明 Managed Agent 测试 gate 存在系统级不稳定性。  
*状态:* 自 2026-10-19 起开放；积极排查中。

**2. [Daily dependency CVE audit failed](https://github.com/QwenLM/qwen-code/issues/13078)** (55 条评论)  
*影响说明:* 自动化安全扫描失效，可能掩盖真实漏洞。npm audit 端点可用性和高危漏洞检测均存在问题。  
*状态:* 需分类；安全关键路径。

**3. [Track: land the 1.0 Preview loop kernel on main](https://github.com/QwenLM/qwen-code/issues/17045)** (23 条评论)  
*影响说明:* 核心架构重构，用事件驱动内核替换传统 Agent 循环。这是 v1.0 路线图的核心，影

响所有 Agent 交互界面。  
*状态:* 进行中；P1 优先级。

**4. [SDK Java — HostedShellLifecycleRecoveryIT failures](https://github.com/QwenLM/qwen-code/issues/14104)** (19 条评论)  
*影响说明:* 多种测试变体持续失败，影响 Java SDK 生命周期恢复路径的稳定性。  
*状态:* 准备分配；已批准自动修复。

**5. [Grep fallback: non-UTF8 corpus paths and ripgrep performance](https://github.com/QwenLM/qwen-code/issues/17682)** (5 条评论)  
*影响说明:* 非 UTF-8 编码的文件名在 UTF-8 解码后的 lstat 校验失败，破坏了国际化代码库中的 grep 功能。  
*状态:* 开放；今

日新建。

**6. [Managed Agent capacity and idle-reclamation model](https://github.com/QwenLM/qwen-code/issues/15082)** (6 条评论)  
*影响说明:* 缺少运行时数量、内存分配和空闲回收的文档化限制，对生产部署的扩展性和稳定性构成风险。  
*状态:* 准备人工处理；需进一步讨论。

**7. [Non-interactive mode delays result until auto-memory tasks finish](https://github.com/QwenLM/qwen-code/issues/13851)** (8 条评论)  
*影响说明:* 无头/SDK 用户在模型响应和最终结果之间经历 40 秒至 5 分钟的延迟，而 TUI/ACP 则即时返回。  
*状态:* 准备分配；P1 优先级。

**8. [shell Workspace 409 workspace_unavailable on external bindings](https://github.com/QwenLM/qwen-code/issues/17678)** (3 条评论)  
*影响说明:* 多个准入缺陷叠加导致临时工作空间总是拒绝 toolProfile=shell 会话并返回 HTTP 409，目前无解决方案。  
*状态:* 需要更多信息；今日新建。

**9. [Team mode: teammate messages never delivered to leader in ACP](https://github.com/QwenLM/qwen-code/issues/15738)** (3 条评论)  
*影响说明:* 多 Agent 团队实验静默失败——Leader 收不到团队成员消息，且团队随短期 ACP 子进程一同终止。

**10. [Voice dictation cannot use Token Plan ASR models](https://github.com/QwenLM/qwen-code/issues/10932)** (4 条评论)  
*影响说明:* 语音管道硬编码旧模型 ID，导致无法使用 Token Plan 订阅中的 qwen-audio-3.0-asr-flash。  
*状态:* 待分类；影响语音功能对齐。

### 4. 关键 PR 进展

**1. [fix(web-shell): align managed errors with DAC and stabilize recovery](https://github.com/QwenLM/qwen-code/pull/17557)**  
Presents managed Web Shell failures as ordinary error messages using the DAC renderer, removing the separate recovery panel. Improves user experience consistency.

**2. [feat(web): configure generic webhook destinations](https://github.com/QwenLM/qwen-code/pull/17405)**  
Adds configurable generic webhook entry with secret endpoint URL, optional Bearer token, and advanced options for local/private receivers.

**3. [feat(channels): add WeCom adapter to managed channel path](https://github.com/QwenLM/qwen-code/pull/17441)**  
Extends managed channel integrations with WeCom support alongside existing email and DingTalk adapters.

**4. [feat(cli): add native screen-reader presentation](https://github.com/QwenLM/qwen-code/pull/17500)**  
Introduces opt-in native screen-reader mode with real keyboard controls and append-only semantic output, complementing the default Ink renderer.

**5. [feat(web): add Traditional Chinese UI locale](https://github.com/QwenLM/qwen-code/pull/17421)**  
Provides full Traditional Chinese localization with proper character support and regional formatting conventions.

**6. [feat(channels): add Microsoft Teams extension and host ingress](https://github.com/QwenLM/qwen-code/pull/15620)**  
Implements Teams integration supporting personal chats, group mentions, channel-thread isolation, and ordered final-text replies across standalone and host modes.

**7. [fix(core): fail closed on undecodable shell paths](https://github.com/QwenLM/qwen-code/pull/16784)**  
Security fix preventing undecodable shell filename words from inheriting allow verdicts, closing a potential path traversal vector.

**8. [feat(managed-agent): notify attachment retirement and age out suspension waits](https://github.com/QwenLM/qwen-code/pull/17681)**  
Enables daemon client to notify owners when attachments are retired, supporting stateless Hosted Harness design Phase 1.

**9. [feat(web-shell): worktree carry metadata + snapshot-then-delete cleanup](https://github.com/QwenLM/qwen-code/pull/17533)**  
Advances Codex parity with metadata carry-over and retention/snapshot cleanup (P6 partial) for managed session worktrees.

**10. [fix(cli): invalidate reverse search cache when history changes](https://github.com/QwenLM/qwen-code/pull/17660)**  
Ensures reverse-search suggestions recompute after history additions, removals, or reorders—fixing stale cache behavior.

---

### 4. 关键 PR 进展

**1. [fix(web-shell): 对齐 managed errors 与 DAC 并稳定恢复流程](https://github.com/QwenLM/qwen-code/pull/17557)**  
通过 DAC 渲染器将 managed Web Shell 失败呈现为普通错误消息，移除独立的恢复面板，提升用户体验一致性。

**2. [feat(web): 配置通用 webhook 目标端点](https://github.com/QwenLM/qwen-code/pull/17405)**  
新增可配置的通用 webhook 条目，支持密文端点 URL、可选 Bearer token 及本地/私有接收方的高级选项。

**3. [feat(channels): 在 managed channel 路径中添加 WeCom 适配器](https://github.com/QwenLM/qwen-code/pull/17441)**  
在现有 email 和 DingTalk 适配器基础上扩展支持 WeCom，完善 managed channel 集成能力。

**4. [feat(cli): 添加原生屏幕阅读器呈现模式](https://github.com/QwenLM/qwen-code/pull/17500)**  
引入可选的原生屏幕阅读器模式，支持真实键盘控制

和追加式语义输出，作为默认 Ink 渲染器的补充方案。

**5. [feat(web): 添加繁体中文 UI 本地化支持](https://github.com/QwenLM/qwen-code/pull/17421)**  
将中文本地化拆分为 `zh-TW`、`zh-HK`、`zh-MO`、`zh-Hant` 等区域变体，提供独立的台湾语言目录，改善国际化覆盖。

**6. [feat(channels): 添加 Microsoft Teams 扩展和 host 入口](https://github.com/QwenLM/qwen-code/pull/15620)**  
新增 Teams 渠道支持，支持私信、群组 @、频道/线程隔离及有序最终文本回复，提供 standalone 和 host 两种模式。

**7. [fix(core): 无法解码的 shell 路径默认拒绝访问](https://github.com/QwenLM/qwen-code/pull/16784)**  
安全修复，确保无法解码的 shell 文件名不会继承 allow 裁决，堵

塞潜在路径遍历漏洞。

**8. [feat(managed-agent): 通知附件回收并老化悬停等待](https://github.com/QwenLM/qwen-code/pull/17681)**  
支持守护进程客户端在附件被回收时通知所有者，为无状态 Hosted Harness 设计第一阶段提供支撑。

**9. [feat(web-shell): 工作树携带元数据 + 快照后删除清理](https://github.com/QwenLM/qwen-code/pull/17533)**  
推进 Codex 对齐，支持托管会话工作树的元数据携带和保留/快照清理（P6 部分），

实现 Codex 特性对等。

**10. [fix(cli): 历史记录变化时使反向搜索缓存失效](https://github.com/QwenLM/qwen-code/pull/17660)**  
确保历史记录添加、删除或重排后反向搜索建议能够重新计算，解决缓存陈旧问题。

### 5. 功能需求趋势

分析近期 Issues 和 PR 发现以下主导功能方向：

| Trend | Frequency | Examples |
|-------|-----------|----------|
| **Multi-channel integration** | High | WeCom adapter (#17441), Microsoft Teams (#15620), DingTalk follow-ups (#17173), Aone channel (#17517) |
| **Internationalization** | Growing | Traditional Chinese locale (#17421), webhook localization |
| **Accessibility** | Emerging | Native screen-reader mode (#17500), OpenTUI trust management (#17208) |
| **Agent loop architecture** | Core focus | 1.0 kernel landing (#17045), loop hardening (#17673), capacity model (#15082) |
| **SDK parity** | Recurring | Java SDK fixes (6+ issues), TypeScript SDK bundling improvements |
| **Web Shell enhancements** | Active | Workspace filters, session markers, worktree parity, goal tracking |

### 5. 功能需求趋势

通过对近期 Issues 和 PR 的分析，发现以下主导功能方向：

| 趋势 | 频率 | 案例 |
|-------|-----------|----------|
| **多渠道集成** | 高 | WeCom 适配器 (#17441)、Microsoft Teams (#15620)、DingTalk 后续 (#17173)、Aone 渠道 (#17517) |
| **国际化** | 增长中 | 繁体中文本地化 (#17421)、webhook 本地化 |
| **无障碍访问** | 新兴 | 原生屏幕阅读器模式 (#17500)、OpenTUI 信任管理 (#17208) |
| **Agent 循环架构** | 核心关注 | 1.0 内核合入 (#17045)、循环加固 (#17673)、容量模型 (#15082) |
| **SDK 对齐** | 持续出现 | Java SDK 修复 (6+ 个 issues)、TypeScript SDK 捆绑改进 |
| **Web Shell 增强** | 活跃 | 工作空间过滤器、会话标记、工作树对等、目标追踪 |

### 6. 开发者痛点

**CI/CD 可靠性**  
Managed Agent gate 测试失败已持续数周，识别出 6+ 个不同的失败哈希。开发者对合并被阻塞和测试基础设施不可靠表示沮丧。CVE 审计自动化失败加剧了 CI 焦虑。

**Java SDK 稳定性**  
近期同一位贡献者 (Afloat16) 提交了 8+ 个 Java SDK bug，包括初始化失败时进程泄漏、非 UTF-8 JVM 默认编码下的 UTF-8 损坏、消息 UUID 丢失及文件读取响应格式错误等问题。

**非交互模式延迟**  
无头/SDK 用户在模型响应和最终结果之间经历 40 秒至 5 分钟的延迟，而 TUI 用户获得即时响应，原因是 managed auto-memory 任务同步机制。

**国际化缺陷**  
grep 操作中的非 UTF-8 文件名处理静默失败，中文本地化缺乏适当的区域差异支持。

**多 Agent 通信**  
团队模式实验静默失败，Leader 收不到团队成员消息，破坏了多 Agent 路线图投资。

**内存/资源治理**  
Managed Agent 运行时缺少文档化的容量限制，造成生产部署的不确定性。

---

*Digest generated from github.com/QwenLM/qwen-code activity on 2026-11-18*

---

### 6. 开发者痛点

**CI/CD 可靠性问题**  
Managed Agent gate 测试失败已持续数周，涉及 6+ 个不同的失败哈希值。开发者对合并被阻塞和测试基础设施的不稳定性感到沮丧，CVE 审计自动化失败进一步加剧了 CI 焦虑。

**Java SDK 稳定性不足**  
近期同一贡献者 (Afloat16) 提交了 8+ 个 Java SDK bug：初始化失败时的进程泄漏、非 UTF-8 JVM 默认编码下的 UTF-8 损坏、消息 UUID 丢失以及文件读取响应格式错误等。

**非交互模式延迟**  
无头/SDK 用户在模型响应和最终结果之间经历 40 秒至 5 分钟的延迟，而 TUI 用户获得即时响应，根因是 managed auto-memory 任务同步机制。

**国际化覆盖缺陷**  
grep 操作中的非 UTF-8 文件名处理静默失败，中文本地化缺乏适当的区域差异化处理。

**多 Agent 通信失效**  
团队模式实验静默失败，Leader 收不到团队成员消息，破坏了多 Agent 路线图投资的价值。

**内存/资源治理缺失**  
Managed Agent 运行时缺少文档化的容量限制，造成生产部署规划的不确定性。

---

*日报基于 2026-11-18 日 github.com/QwenLM/qwen-code 活动生成*</think>



</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*