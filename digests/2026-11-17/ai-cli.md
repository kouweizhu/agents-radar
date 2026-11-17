# AI CLI 工具社区动态日报 2026-11-17

> 生成时间: 2026-11-17 04:44 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:
1. Translate all the text while maintaining the Markdown structure
2. Keep all URLs, numbers, dates, code references, issue/PR numbers, version tags as-is
3. Keep project names, repository slugs, usernames in their original form
4. Use natural technical Chinese suitable for a developer newsletter
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate this carefully section by section.
</think>


# AI CLI 工具生态全景——跨工具对比报告

**日期：** 2026-11-17
**适用范围：** 技术决策者与研发团队

---

## 1. 生态概览

AI CLI 工具领域正围绕一组共同的 企业级需求 加速收敛：多账户灵活性、Windows 平台平权、沙箱化执行，以及可扩展的工具生态。今天的摘要数据显示，六大主流工具均维持着高频率的迭代节奏——每款工具都拥有活跃的 CI/CD 流水线、注重安全的发布实践，以及日趋成熟的 子代理（subagent）架构。市场正在从「CLI 作为尝鲜产品」向「CLI 作为生产级开发环境」转型，团队纷纷在会话持久化、成本治理和协作工作流上加大投入。竞争焦点正转向多提供商模型支持的质量、无障碍访问能力，以及代理系统的可扩展性。

---

## 2. 活动量对比

| 工具 | 仓库 | Issues（24h） | PRs（24h） | Discussions（24h） | Releases（24h） |
|------|------|:------------:|:---------:|:-----------------:|:--------------:|
| **Claude Code** | anthropics/claude-code | 50 条 / 热度前 30 | 1 条（已合并） | N/A* | v2.1.326 |
| **OpenAI Codex** | openai/codex | 50 条 / 热度前 30 | 50 条 / 热度前 20 | 18 条 | 5 个 alpha 版本 |
| **Gemini CLI** | google-gemini/gemini-cli | 50 条 / 热度前 30 | 18 条 | N/A* | 无 |
| **GitHub Copilot CLI** | github/copilot-cli | 50 条 / 热度前 30 | 0 | N/A* | v1.0.113-1、v1.0.113-0 |
| **OpenCode** | anomalyco/opencode | 50 条 / 热度前 30 | 16 条 | 3 条 | process-daemon-v0.6.0 |
| **Pi** | earendil-works/pi | 50 条 / 热度前 30 | 16 条 | N/A* | 无 |
| **Qwen Code** | QwenLM/qwen-code | 50 条 / 热度前 30 | ~15 条 | N/A* | v0.27.4-nightly |

> \* 该仓库未开启 Discussions 板块或暂无内容，社区交流完全依赖 Issues 和 PRs 通道。这并不代表项目不活跃。

**关键观察：**

- **OpenAI Codex** 以约 50 个 PR 的吞吐量领跑，反映出 Rust 代码库上激进的快速迭代开发节奏。
- **Qwen Code** 和 **Pi** 的社区贡献 PR 占比最高，外部贡献者定期提交多提供商扩展和跨平台修复类 PR。
- **Claude Code** 在统计窗口内直接 PR 活动较少，暗示其采用核心团队驱动 + 社区通过 Issues 反馈的发布模式。
- **Gemini CLI** 24 小时内无 release 但 PR 量稳定，说明团队正处于里程碑版本之间的持续完善阶段。

---

## 3. 功能方向趋同分析

以下需求在多个工具社区中反复出现，代表了行业共同演进的方向：

### 3.1 多账户与多提供商灵活性

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | 支持多个 Connector 账户（#27302，476  👍——按热度领先其他 issue 一个数量级） |
| **OpenAI Codex** | 桌面自定义 provider 无法在已有会话中使用（#29156，42 👍） |
| **Qwen Code** | 四种计费渠道优先支持 qwen4-max（#17513） |
| **OpenCode** | `/cd` 斜杠命令与会话工作区切换 |

**信号：** 行业正在从单账户、单提供商的 CLI 架构，向支持开发者在同一会话内灵活切换上下文（个人/工作、不同模型提供商、不同认证身份）的开发环境演进。

### 3.2 无障碍访问与界面改进

| 工具 | 具体诉求 |
|------|----------|
| **OpenCode** | 屏幕阅读器 TUI 模式（PR #64350，关闭 #39368） |
| **Gemini CLI** | 通过只追加式回滚渲染器实现屏幕阅读器支持 |
| **OpenAI Codex** | 提示词编辑器撤销/重做（PR #61954，issue #2379，38 👍） |
| **Pi** | 设备与平台感知的触控和快捷键提示（PR #12235） |

**信号：** 无障碍访问正从可选项升级为必需项，驱动力来自依赖辅助技术的专业开发者群体。

### 3.3 平台平权（Windows 优先问题）

| 工具 | 问题 | 影响 |
|------|------|------|
| **Claude Code** | 大小写敏感工作树安全检查（#91618）、MSIX 虚拟化检测（#102772）、TTY 路径问题（#95174） | Windows Git 工作流受损 |
| **OpenAI Codex** | Statsig 载荷超 4.8 MB 限制（#46129）、认证令牌缺少账户 ID（#59410） | 浏览器命令和认证受阻 |
| **GitHub Copilot CLI** | 沙箱无法访问非系统盘（#5207） | 常见开发工作流中断 |
| **Gemini CLI** | Wayland 环境下浏览器子代理失败（#21983） | Linux 桌面用户被阻断 |
| **Qwen Code** | ConPTY 内边距增加 26–34% 空白（#17350） | Token 浪费与模型输入损坏 |

**信号：** Windows 支持仍是各工具最大的平台短板。所有工具最初都采用 Mac/Linux 优先架构，在 Windows 环境下需要大量适配工作，尤其是文件系统语义、沙箱机制和终端仿真方面。

### 3.4 安全加固

| 工具 | 关注点 | 状态 |
|------|--------|------|
| **Gemini CLI** | 阻止 Windows Git 权限绕过（#30095） | 已合并 |
| **Gemini CLI** | 阻止项目 Git 环境注入（#30206） | 进行中（P1） |
| **Gemini CLI** | 强制 MCP 服务器归属与权限校验（#30283） | 已合并 |
| **OpenAI Codex** | 嵌套 Guardian 审批保留上下文（#61946） | 已合并 |
| **Qwen Code** | verify-pr 残余风险追踪（#17371） | 进行中（P1） |

**信号：** 随着 CLI 进入生产级使用场景，攻击面持续扩大（环境注入、凭证泄露、权限提升）。各团队均在加强纵深防御，安全类 PR 的合并速度快于功能类 PR。

### 3.5 子代理与代理循环架构

| 工具 | 开发进展 |
|------|----------|
| **Claude Code** | 代码模式支持代理团队（v2.1.326）、会话交接请求（#11455） |
| **Gemini CLI** | 1.0 Preview 事件总线内核迁移（#17045）、后台慢速脚本（PR #64343） |
| **OpenCode** | 仅后台模式子代理执行（#64096）、前台恢复请求（#64073） |
| **Pi** | bash + read 工具并发执行问题（#11950，P0） |
| **Qwen Code** | 事件总线内核上的无头会话（PR #17445）、托管代理配置修复 |

**信号：** 代理架构正收敛向事件驱动内核 + 会话级上下文 + 后台任务管理 + 受控子代理委托的模式。各工具在子代理执行模型（同步 vs. 异步、前台 vs. 后台）上仍有显著差异。

### 3.6 成本可视化与治理

| 工具 | 具体诉求 |
|------|----------|
| **Claude Code** | 单会话花费上限（#95964）、交互式会话预算控制 |
| **OpenAI Codex** | 轮次级耗尽计量用于用量核算（#61958） |
| **Pi** | 首 Token 延迟指标 ttftMs/ttfaMs（PR #12249） |
| **OpenCode** | 429 失败前的配额可视化（#64334） |
| **Qwen Code** | context-remaining 工具用于 Token 预算管理（#17320） |

**信号：** 随着 AI 在专业场景中的规模化使用，成本治理正从一项考量上升为一级功能需求。

---

## 4. 差异化分析

### 4.1 Claude Code（Anthropic）

- **理念：** 观点鲜明的一体化开发环境。与 Anthropic 模型生态深度整合。
- **目标用户：** 以 Claude 模型为主要工具的个人开发者与团队。
- **差异化优势：** Claude 模型支持业界最佳、代理团队、会话连续性。社区围绕功能需求活跃（仅多账户一项就获得 476+ 👍）。
- **成熟度：** 成熟，稳定发布节奏，拥有大量成熟用户群。

### 4.2 OpenAI Codex（OpenAI）

- **理念：** 多提供商、多平台的模型路由方案。在 Rust 基础设施上大力投入。
- **目标用户：** 希望在 OpenAI、Anthropic 和自定义提供商之间灵活切换模型的开发者。
- **差异化优势：** 最激进的 PR 迭代速度（~50 条 PR/天）、全面的模型路由、Windows 和 macOS 原生集成。浏览器自动化功能活跃。
- **成熟度：** 快速迭代，alpha 发布节奏表明架构仍在持续演进中。

### 4.3 Gemini CLI（Google）

- **理念：** 零依赖操作系统沙箱愿景、事件驱动架构搭配插件体系。
- **目标用户：** 使用 Google Cloud 和 Gemini 模型的企业团队。
- **差异化优势：** AST 感知文件工具计划、安全优先设计（24 小时内多个 P1 安全修复）、通过 MCP 构建的强大插件生态。
- **成熟度：** 事件总线内核迁移进行中；PTY 僵尸进程、会话生命周期缺陷等稳定性问题表明正处于活跃开发阶段。

### 4.4 GitHub Copilot CLI（Microsoft/GitHub）

- **理念：** 与 GitHub 深度集成、企业 MDM 部署、VS Code 扩展生态。
- **目标用户：** GitHub 原生团队、有现有 GitHub 认证体系的企业环境。
- **差异化优势：** 与 GitHub 生态（Codespaces、Copilot Business/Enterprise）最佳整合，MDM 托管设置，SSH 隧道支持。
- **成熟度：** 稳定，但受 GitHub 企业优先发布策略制约，社区功能开发参与度较低。

### 4.5 OpenCode（Anomaly）

- **理念：** 社区驱动、插件/代理/技能市场愿景的开源生态。
- **目标用户：** 追求高度可定制化、完全开源 CLI 的开发者。
- **差异化优势：** 社区参与度高（屏幕阅读器模式、/cd 命令等均来自社区）、多渠道支持（Email、DingTalk、GitHub 适配器）、基于工作树的会话机制。
- **成熟度：** 活跃开发，社区贡献质量高；v1.0 Preview 内核迁移进行中。

### 4.6 Pi（Earendil）

- **理念：** 轻量级、RPC 能力、多提供商模型路由器，带 Web Shell UI。
- **目标用户：** 需要灵活模型路由且偏好 Web 前端的开发者。
- **差异化优势：** Web Shell 作为一级界面、多提供商路由（DeepInfra、Nebius、Ollama Cloud、Scaleway）、代理聊天点对点多智能体扩展。
- **成熟度：** 社区驱动，外部贡献质量高；核心稳定，功能聚焦。

### 4.7 Qwen Code（阿里/通义）

- **理念：** 企业级事件总线内核、托管代理基础设施、全渠道生态。
- **目标用户：** 中国企业开发者、需要托管代理运行时和 DingTalk/微信集成的团队。
- **差异化优势：** 托管代理运行时配置、GitHub/DingTalk/云效 Code 渠道适配器、深度的中国市场聚焦。
- **成熟度：** 主要架构迁移进行中（1.0 Preview 内核）；PR 活跃度高，但 CI 不稳定性暗示团队正在平衡复杂迁移与发布节奏。

---

## 5. 社区活力与成熟度

### 活力指标（24 小时活动量）

| 梯队 | 工具 | 特征 |
|------|------|------|
| **快速迭代型** | OpenAI Codex、Qwen Code | PR 量大、alpha/nightly 发布频繁、架构迁移活跃 |
| **活跃开发型** | OpenCode、Pi、Gemini CLI | 功能 PR 稳定、Issue 响应及时、社区贡献活跃 |
| **稳定发布型** | Claude Code、GitHub Copilot CLI | 发布节奏慢但分量足、社区以 Issue 而非 PR 反馈 |

### 成熟度信号

| 工具 | 社区规模 | CI/CD 成熟度 | 安全态势 | 文档质量 |
|------|----------|--------------|----------|----------|
| Claude Code | 大型 | 高（稳定发布） | 强（安全公告机制） | 优秀 |
| OpenAI Codex | 大型 | 高（高吞吐 CI） | 强（P1 安全 PR） | 良好 |
| Gemini CLI | 中型 | 中（部分 CI 不稳定） | 强（P1 安全修复迅速） | 良好 |
| Copilot CLI | 中型 | 高（企业托管 CI） | 强（MDM 策略） | 优秀 |
| OpenCode | 增长中 | 中（deflake 追踪中） | 良好（归属校验） | 良好 |
| Pi | 小型 | 中（deflake 追踪中） | 良好（凭证管理） | 良好 |
| Qwen Code | 增长中 | 中（CI 不稳定性已追踪） | 强（verify-pr 追踪） | 良好 |

### 关键观察

- **Claude Code** 和 **OpenAI Codex** 拥有最大且最活跃的社区，高优先级功能请求的评论数可达 100+。
- **OpenCode** 和 **Pi** 虽然团队规模较小，但在社区驱动 PR 贡献方面表现突出。
- **Qwen Code** 展示了高工程吞吐量，但 CI 不稳定性为依赖最新版本的用户带来了风险。
- **GitHub Copilot CLI** 在企业部署方面最为成熟，但社区功能开发参与度最低，反映出微软的闭源策略。

---

## 6. 趋势信号

### 给开发者的选型建议

1. **多提供商已成标配** —— 所有工具现已支持或正在添加多模型路由。选择依据应是你首选提供商的集成质量，而非替代方案的多少。

2. **Windows 仍是最大短板** —— 每款工具都有活跃的 Windows 专项缺陷。若 Windows 是主要工作环境，请在选型前验证相关 Windows 问题对工作流的影响。

3. **代理架构正在收敛** —— 事件驱动内核、会话级上下文、后台任务管理正在成为标准模式。各工具在子代理执行模型（同步/异步、前台/后台）上仍有显著差异。

4. **安全加固正在加速** —— 环境注入、凭证管理、权限边界在所有工具中都获得了 P1 级别的关注。这对生产环境采用是积极信号。

5. **无障碍访问正在崛起** —— 屏幕阅读器支持、键盘导航、平台感知 UI 提示正在多款工具中同步出现。这反映了用户群体的成熟化。

### 给产品经理和技术负责人的建议

1. **企业级功能正在趋同** —— 单会话成本上限、多账户支持、MDM 部署、RBAC 已进入每款工具的路线图。这些领域的第一 mover 优势将影响企业采购决策。

2. **插件/生态战略至关重要** —— 最活跃的社区讨论均围绕可扩展性展开（MCP 服务器、技能市场、渠道适配器）。生态故事最好的工具将赢得长期竞争。

3. **CI/CD 质量影响信任度** —— Qwen Code 和 Gemini CLI 的 CI 不稳定性为依赖前沿版本的用户带来风险。稳定发布节奏（Claude Code、Copilot CLI）降低风险但可能在功能上滞后。

4. **中国市场工具正在全球化** —— Qwen Code 的 GitHub 渠道适配器和多提供商支持表明，中国 AI 工具正在投资全球开发者市场，而不仅仅服务国内市场。

5. **子代理可靠性是下一个主战场** —— 并发工具执行、子代理恢复、会话连续性是所有工具中影响最大、尚未解决的共性难题。这些领域的改进将是推动生产环境采用的主要驱动力。

---

*本报告数据来源于六个 AI CLI 工具仓库于 2026-11-17 的 GitHub 数据。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate it naturally while preserving all formatting, URLs, technical terms, and the structure exactly.

Let me translate this carefully, maintaining the technical register and natural Chinese expression.
</think>



# Claude Code Skills 社区亮点报告

**数据截至日期: 2026-11-17**  
**数据来源: anthropics/skills（Claude Code 官方 Skills 仓库）**

---

## 1. Skills 排行榜

以下 Skills 在社区内引发了最多的讨论和关注。注：PR 评论数据缺失，排名依据为最近活跃度、功能范围及社区参与度。

### 1.1 ProofCore 合约审计工具
- **PR #1771** | 作者: ProofCore-Protocol | 状态: 开放中
- **功能**: 新增 `proofcore-contract-auditor`，一款面向 Web3 的 Agent Skill，可对 Solidity 和 Rust 智能合约进行自动化静态分析，并通过 ProofCore 零存储 Merkle 协议将密码学审计证明锚定至 TON 区块链。
- **亮点**: 仓库中首个聚焦 DeFi 审计的 Skill；将传统智能合约安全与区块链原生证明存证打通。
- **链接**: [anthropics/skills PR #1771](https://github.com/anthropics/skills/pull/1771)

### 1.2 MCP Builder 兼容性修复
- **PR #1742** | 作者: Kuldeeep18 | 状态: 开放中
- **功能**: 修复与 `mcp>=2.0.0` 的兼容性问题，更新 `streamable_http_client` 导入名称，并通过正确的 `create_mcp_http_client` API 处理自定义 HTTP 请求头。
- **亮点**: 面向 Model Context Protocol API 变更的关键依赖更新；避免新版 MCP 用户出现集成故障。
- **链接**: [anthropics/skills PR #1742](https://github.com/anthropics/skills/pull/1742)

### 1.3 Notion 需求规格转实现 + 简历量化审计
- **PR #1245** | 作者: mrdesouzaphd-cmyk | 状态: 开放中
- **功能**: 两个互补的 Skill——`notion-spec-to-implementation` 将产品/技术规格转换为可执行的 Notion 任务并附带验收标准；`quantitative-resume-auditor` 提供结构化的简历评估。
- **亮点**: 开创性地将规格管理与任务执行串联；双 Skill 提交展示了跨功能工作流的设计思路。
- **链接**: [anthropics/skills PR #1245](https://github.com/anthropics/skills/pull/1245)

### 1.4 MD2Video-Audio
- **PR #1703** | 作者: 70v-Yoyo | 状态: 开放中
- **功能**: 将 Markdown 文档直接编译为带真实感人声的 MP4 视频，使用 Marp 生成幻灯片。
- **亮点**: 面向内容创作者和教育者的零成本方案；打通了文档撰写与多媒体内容生产之间的壁垒。
- **链接**: [anthropics/skills PR #1703](https://github.com/anthropics/skills/pull/1703)

### 1.5 Pyxel 复古游戏开发
- **PR #525** | 作者: kitao | 状态: 开放中
- **功能**: 全面覆盖使用 Pyxel 框架创建、调试和验证 Python 复古游戏的 Skill，包含无头测试和状态检查能力。
- **亮点**: 专注教育/游戏细分领域，配套专项工具链；另有独立参考文档覆盖 Pyxel 行为、演示和证据生成。
- **链接**: [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525)

### 1.6 WebApp Testing 安全修复
- **PR #1980** | 作者: Pcmhacker-piro | 状态: 开放中
- **功能**: 移除 `with_server.py` 中 `subprocess.Popen` 的 `shell=True` 参数，防止因用户/Agent 输入未经验证而导致的命令注入漏洞（CWE-78）。
- **亮点**: 高优先级的安全修复；解决 webapp-testing Skill 中存在主动利用风险的安全问题。
- **链接**: [anthropics/skills PR #1980](https://github.com/anthropics/skills/pull/1980)

### 1.7 SCNet HPC 集群管理器
- **PR #1615** | 作者: lql341 | 状态: 开放中
- **功能**: 提供基于配置文件的 SSH 和 Slurm 工作流，覆盖 SCNet HPC 集群操作，包含作业生成、集群发现和计算节点管理。
- **亮点**: 面向学术和研究计算场景；将 Claude Code 与高性能计算基础设施对接。
- **链接**: [anthropics/skills PR #1615](https://github.com/anthropics/skills/pull/1615)

### 1.8 文档排版质量控制
- **PR #514** | 作者: PGTBoos | 状态: 开放中
- **功能**: 防止 AI 生成文档中的排版问题——孤行词汇、孤段以及编号错位。
- **亮点**: 针对文档格式化顽疾的生活质量改进；范围小但适用面广。
- **链接**: [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

---

## 2. 社区需求趋势

对 Issues 板块的分析揭示了以下社区优先方向：

### 2.1 信任与安全基础设施
**Issue #492** (46 条评论, 3 👍) — *安全: 以 anthropic/ 命名空间分发的社区 Skill 造成信任边界滥用*
- 社区 Skill 在同一命名空间下冒充官方 Skill，使用户难以辨别哪些是真正的 Anthropic 官方 Skill，存在信任风险。
- **链接**: [anthropics/skills Issue #492](https://github.com/anthropics/skills/issues/492)

### 2.2 企业协作功能
**Issue #228** (17 条评论, 8 👍) — *在 Claude.ai 中实现组织级 Skill 共享*
- 企业用户需要内置的 Skill 库和共享机制，而非通过 Slack/Teams 手动分发文件。
- **链接**: [anthropics/skills Issue #228](https://github.com/anthropics/skills/issues/228)

### 2.3 评估与触发可靠性
**Issue #556** (13 条评论, 7 👍) — *run_eval.py: claude -p 永不触发 skills/commands（触发率 0%）*
**Issue #1352** (6 条评论, 3 👍) — *run_eval.py 并行 worker 出现 Skill UUID 交叉匹配*
- Skill 评估工具的系统性故障削弱了优化工作的基础；并行执行引入静默的假阴性结果。
- **链接**: 
  - [Issue #556](https://github.com/anthropics/skills/issues/556)
  - [Issue #1352](https://github.com/anthropics/skills/issues/1352)

### 2.4 工作流自动化与治理
**Issue #1329** (10 条评论) — *提议 compact-memory skill：用于符号化 Agent 状态表示法*
**Issue #412** (6 条评论) — *Agent 治理 Skill：AI Agent 系统的安全模式*
- 社区呼吁专用 Skill 来解决 Agent 记忆管理、治理模式和策略执行问题。
- **链接**:
  - [Issue #1329](https://github.com/anthropics/skills/issues/1329)
  - [Issue #412](https://github.com/anthropics/skills/issues/412)

### 2.5 质量保障流水线
**Issue #1385** (7 条评论, 1 👍) — *[提案] 推理质量门禁流水线：任务前校准 → 对抗性审查 → 交付验证*
- 提议在会话全生命周期中建立多阶段输出质量验证机制。
- **链接**: [anthropics/skills Issue #1385](https://github.com/anthropics/skills/issues/1385)

### 2.6 文档与上下文管理
**Issue #1487** (5 条评论) — *claude-api skill 激进注入约 156k tokens，耗尽上下文窗口*
- token 占用量过大的 Skill 会导致性能下降，亟需上下文预算管理机制。
- **链接**: [anthropics/skills Issue #1487](https://github.com/anthropics/skills/issues/1487)

---

## 3. 潜力待发 Skills

以下处于活跃状态的 PR 功能扎实，有望近期合入：

| Skill | PR # | 作者 | 核心价值 | 链接 |
|-------|------|--------|-----------|------|
| **webapp-testing 安全修复** | #1980 | Pcmhacker-piro | 关键 CWE-78 修复；存在主动利用风险 | [PR #1980](https://github.com/anthropics/skills/pull/1980) |
| **XLSX 公式修复** | #2019 | reginaldinaldalfret | 解决工作表作用域外部链接检测问题 | [PR #2019](https://github.com/anthropics/skills/pull/2019) |
| **docx 超时处理** | #1792 | TINGyu123644 | 规范化 LibreOffice 失败时的错误报告 | [PR #1792](https://github.com/anthropics/skills/pull/1792) |
| **Python pause_turn 指南** | #1950 | dhairyajangir | 更新 SDK 1.1.0 恢复行为说明 | [PR #1950](https://github.com/anthropics/skills/pull/1950) |
| **skill-creator YAML 解析** | #1997 | BichengWang | 修复元数据提取以支持优化命令 | [PR #1997](https://github.com/anthropics/skills/pull/1997) |
| **skill-creator Windows 支持** | #1298 | MartinCajiao | 跨平台触发评估鲁棒性提升 | [PR #1298](https://github.com/anthropics/skills/pull/1298) |

---

## 4. Skills 生态洞察

**社区最集中的诉求在于生产级 Skill 评估工具链和企业协作基础设施的建设——用户需要可靠的触发检测、企业级共享机制，以及在官方与社区贡献 Skill 之间建立清晰的信任边界。**

---

*本报告数据来源于 github.com/anthropics/skills 公开数据*  
*所有链接均指向 Anthropic 官方仓库。*

---

<think>The user wants me to translate this English technical digest about Claude Code into Simplified Chinese. I need to:

1. Translate all the text content into natural Simplified Chinese
2. Preserve all Markdown structure exactly as-is
3. Keep URLs, usernames, version numbers, issue numbers, etc. in their original English form
4. Use natural technical Chinese appropriate for a Chinese developer newsletter
5. Output ONLY the translation, no preamble or explanation
6. No markdown fences around the output

Let me translate section by section:

**Header:**
"Claude Code Community Digest — 2026-11-17" → "Claude Code 社区速报 — 2026-11-17"

**Today's Highlights:**
- v2.1.326 released with Code Mode support for agent teams → v2.1.326 发布，支持 Agent 团队启用 Code Mode
- Multiple Windows-related issues being discussed → 多个 Windows 相关问题引发讨论
- Multiple platform-specific bugs across Windows, macOS, and Linux → 跨 Windows、macOS、Linux 的多平台问题

**Releases section:**
v2.1.326 released → v2.1.326 发布
Code Mode + Agent Teams → Code Mode + Agent 团队
Tool Configuration Validation → 工具配置校验

**Hot Issues:**
Need to translate each issue title and description naturally.

**Key PR Progress:**
Translate the PR description and the fix explanation.

**Feature Request Trends:**
Translate table headers and content naturally.

**Developer Pain Points:**
Translate each section's content.

Let me proceed with the full translation:
</think>


# Claude Code 社区速报 — 2026-11-17

---

## 今日要点

Claude Code 项目发布了 **v2.1.326**，引入了 Agent 团队的 Code Mode 支持，并新增了对无效工具配置参数启动时校验的警告功能。社区活跃度保持高位——呼声最高的需求"多 Connector 账户支持"已获 **310 条评论和 476 个 👍**，反映出对多账户灵活性强烈而广泛的需求。Windows 相关问题占据了讨论的主导地位，包括安全限制、网络处理和 TUI 行为等多个方面的平台不一致问题。

---

## 版本发布

### v2.1.326
**发布日期：** 2026-11-17

本次发布包含两项重要变更：

1. **Code Mode + Agent 团队** — 现在可以在启用 Agent 团队时开启 Code Mode。如果之前已配置，启用团队后会话将在 Code Mode 下启动。
2. **工具配置校验** — 当 `--allowedTools`、`--disallowedTools` 或 `--tools` 包含看似无效的工具标识符时，启动时将发出警告。

**参考链接：** [GitHub Release v2.1.326](https://github.com/anthropics/claude-code/releases/tag/v2.1.326)

---

## 热门 Issue

### 1. [功能需求] 支持多 Connector 账户 (#27302)
**提交者：** nathanmargaglio | **评论数：** 310 | **👍：** 476

按评论数和赞同数遥遥领先的功能需求。用户希望能够在同一连接器内使用多个账户（例如在 Claude Code 网页版中同时管理个人和工作账户）。这反映了企业用户和高级用户对账户隔离的强烈需求，无需在浏览器间来回切换。

**参考链接：** [Issue #27302](https://github.com/anthropics/claude-code/issues/27302)

### 2. [功能需求] 会话交接 / 连续性支持 (#11455)
**提交者：** patrickhardiman | **评论数：** 44 | **👍：** 27

一位系统集成商请求在团队成员之间无缝转移活跃的 Claude Code 会话，或在会话之间传递上下文——这对于协作开发工作流至关重要。44 条评论表明大家对其实现方案进行了热烈讨论。

**参考链接：** [Issue #11455](https://github.com/anthropics/claude-code/issues/11455)

### 3. [缺陷] Android 设备登录在 Root 后失败 (#105770)
**提交者：** BennyWaitWhat | **评论数：** 17 | **👍：** 14

已 Root 的 Android 设备用户在 Google 登录成功后，收到了来自 `/auth/verify_google_mobile` 的 HTTP 400 错误。Play Integrity 令牌已颁发但被服务端拒绝，导致大量开发者用户群体（Android 开发者社区中的常见人群）无法访问。

**参考链接：** [Issue #105770](https://github.com/anthropics/claude-code/issues/105770)

### 4. [缺陷] naver.com 被默认安全限制误拦截 (#95539)
**提交者：** DanielJ1025 | **评论数：** 12 | **👍：** 12

韩国主流门户网站 naver.com 被错误标记为不安全网站并被默认安全策略拦截——这是一个明显的误判。这影响了大量用户，表明拦截列表需要针对地域差异进行优化调整。

**参考链接：** [Issue #95539](https://github.com/anthropics/claude-code/issues/95539)

### 5. [缺陷] 瞬时网络中断被记录为持久性安装失败 (#65093)
**提交者：** gmantova | **评论数：** 10 | **👍：** 3

在 Windows 上，更新检查期间的临时网络中断被错误地记录为持续的 `install_failed` 状态。即使重新连接并确认安装正常，"自动更新失败"提示条也永远不会消失——这影响了用户对更新可靠性的认知。

**参考链接：** [Issue #65093](https://github.com/anthropics/claude-code/issues/65093)

### 6. [缺陷] Opus 5 在工具调用间的 prose 被作为摘要的 thinking 块返回 (#95764)
**提交者：** redsub-captain | **评论数：** 10 | **👍：** 10

自 2026-09-11 起，Claude Opus 5 开始将工具调用之间的 prose 作为 `thinking` 块（服务端生成的摘要）而非 `text` 块返回。代码块被完全丢弃，桌面端应用从不显示它们——这为中间推理过程带来了严重的可见性问题。

**参考链接：** [Issue #95764](https://github.com/anthropics/claude-code/issues/95764)

### 7. [缺陷] 用量限制消耗速度超出预期 (#100746)
**提交者：** gysosin | **评论数：** 10 | **👍：** 0

Linux 上每周和会话用量限制消耗速度加快，用户报告实际 token 消耗量远低于限制耗尽的速度。这可能表明计费计算存在 bug，或缓存写入存在计算错误。

**参考链接：** [Issue #100746](https://github.com/anthropics/claude-code/issues/100746)

### 8. [缺陷] 接受分享提示后显示"无法分享对话记录" (#101651)
**提交者：** mrsonord2240 | **评论数：** 9 | **👍：** 1

用户接受对话记录分享提示后收到"无法分享对话记录"错误。此外，即使用 `/login` 登录后，`/feedback` 仍返回 403 Forbidden——这表明可能存在认证令牌或权限传播问题。

**参考链接：** [Issue #101651](https://github.com/anthropics/claude-code/issues/101651)

### 9. [缺陷] Windows 隔离工作树安全检查对有效工作树误判 (#91618)
**提交者：** dazligth | **评论数：** 9 | **👍：** 1

在 Windows 上，隔离工作树安全检查因驱动器字母的大小写敏感比较而错误地拒绝有效工作树。通过 `.code-workspace` 文件打开工作区会触发误报安全拒绝，破坏了 Cursor/VS Code 工作流。

**参考链接：** [Issue #91618](https://github.com/anthropics/claude-code/issues/91618)

### 10. [功能需求] 交互式会话的按会话消费上限 (#95964)
**提交者：** axisrow | **评论数：** 9 | **👍：** 2

交互式会话缺少任何累计消费上限；现有参数如 `--max-budget-usd` 仅对非交互式（`-p`）运行生效。这为长时间交互式会话带来了成本不可预测性，是企业用户频繁关注的问题。

**参考链接：** [Issue #95964](https://github.com/anthropics/claude-code/issues/95964)

---

## 重要 PR 进展

### 1. fix(mdm): Set-ClaudeCodePolicy.ps1 在 32 位 PowerShell 中写入 Program Files (x86) (#78049)
**提交者：** casbrbr-beep | **状态：** 已关闭

**修复内容：** MDM 部署脚本 `Set-ClaudeCodePolicy.ps1` 在 32 位 PowerShell 宿主（Intune 默认使用）中错误解析了 `$env:ProgramFiles`，导致写入错误目录。这是一个静默部署失败，影响了企业 MDM 推送。

**参考链接：** [PR #78049](https://github.com/anthropics/claude-code/pull/78049)

---

## 功能需求趋势

分析完整 Issue 语料库后，以下功能方向占据主导：

| 主题 | 案例 | 需求信号 |
|-------|----------|---------------|
| **多账户 / 身份管理** | 多 Connector 账户 (#27302)、按账户设置 | 476 👍（最高需求） |
| **会话连续性** | 会话交接 (#11455)、跨会话记忆传递 (#110525) | 71 合计 👍 |
| **成本控制** | 按会话消费上限 (#95964)、用量可见性 (#99223) | 5 👍，讨论活跃 |
| **平台一致性** | 工作树安全检查（Windows 大小写敏感 #91618）、安全拦截列表准确性 (#95539) | 13 👍，聚焦 Windows |
| **外部集成** | 读取 claude.ai Projects (#106011)、加密钱包处理 (#104970) | 1-2 👍，小众但复杂 |
| **子 Agent 优化** | 暂停后上下文保留 (#110403)、历史重发行为 | 2 👍，工程关注点 |

---

## 开发者痛点

以下问题在多个 Issue 中反复出现，值得优先关注：

### 1. Windows 平台稳定性
Windows 相关问题出现比例明显偏高：
- 网络抖动 → 持久失败状态 (#65093)
- 大小写敏感路径比较导致工作树误判 (#91618)
- MSIX 虚拟化被误识别为目录连接点 (#102772)
- 终端方向键导航失效 (#95174)

### 2. 成本可见性与控制缺口
开发者缺乏细粒度的消费洞察：
- 交互式会话没有消费上限 (#95964)
- 用量限制消耗速度不可预测 (#100746)
- 缓存写入悄然增加成本 (#110403, #105132)
- 状态栏缺少每周用量明细 (#99223)

### 3. Hook 与插件生命周期困惑
项目级 hook 无法触达 git worktree (#83953)，包含 hook 模块的插件不会被记录为"已使用"，触发过早禁用的警告 (#110537)。停止 hook 可能过度阻塞 (#103414)。

### 4. 安全限制误报
默认安全拦截列表误判合法网站（naver.com、daum.net/tistory.com 被明确豁免）。这表明拦截列表缺乏地域上下文或社区反馈机制。

### 5. 跨模型不一致
通过本地代理使用的第三方模型存在格式问题：Opus 5 在应返回文本的位置发出 thinking 块 (#95764)，GLM-5.3 Flash 发出字面 CR 字符导致 UI 面板损坏 (#110565)。

---

*本速报基于 2026-11-17 的 GitHub 数据生成，面向 [anthropics/claude-code](https://github.com/anthropics/claude-code) 项目。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this OpenAI Codex Community Digest from English into Simplified Chinese. I need to follow the rules they provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly.
3. Keep URLs, links, numbers, dates, code spans, etc. verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form.
5. Use natural technical Chinese, the register of a Chinese developer newsletter.

Let me translate this carefully, maintaining the structure and making it read naturally in Chinese.

Key terms to translate:
- "Community Digest" -> "社区周报" or "社区摘要"
- "Today's Highlights" -> "今日要点"
- "Releases" -> "版本发布" or "发版动态"
- "Hot Issues" -> "热门 Issue"
- "Key PR Progress" -> "重要 PR 进展"
- "Hot Discussions" -> "热门讨论"
- "Feature Request Trends" -> "功能需求趋势"
- "Developer Pain Points" -> "开发者痛点"
- "Alpha" -> "Alpha" (keep as-is)
- "Merged" -> "已合并"
- "Status" -> "状态"

Let me go through and translate section by section:

Title: OpenAI Codex Community Digest -> OpenAI Codex 社区摘要
Date: November 17, 2026 -> 2026年11月17日

Today's Highlights: Today marks a significant push in Codex's reliability and UX with multiple infrastructure improvements landing, including HTTP/2 fallback for SSH tunnels, proper undo/redo in the prompt composer, and several Windows-specific fixes. The community continues to engage heavily around platform-specific issues, particularly Windows sandboxing and macOS connectivity, while feature requests for custom model provider support and isolated browser sessions remain prominent.


-> 今日要点：Codex 在可靠性和用户体验方面迎来重大推进，多项基础设施改进陆续落地，包括 SSH 隧道的 HTTP/2 回退机制、提示词编辑器的完整撤销/重做功能，以及多个 Windows 专项修复。社区持续围绕平台特定问题展开热烈讨论，尤其是 Windows 沙箱隔离和 macOS 连接性问题，同时自定义模型提供商支持和隔离浏览器会话的功能需求依然突出。

5 个 Alpha 版本在过去 24 小时内发布，表明 Rust 代码库正在积极开发中，v0.171 和 v0.170 分支快速迭代。

The table needs translation for the summary column while keeping version numbers and types as-is.

Codex 的计算机使用功能存在关键 UI 问题，导致 Windows 用户的视觉伪影持续出现。核心体验在 iOS 上出现回归，阻止用户通过正常界面恢复任务历史。自 v0.149.0 以来的重大变更强制用户重新配置安全设置，尽管该功能的投票比例很高。提示词编辑器的历史记录管理问题已通过 PR #61954 解决。第三方模型提供商的桌面应用集成受阻，迫使用户转向仅限 CLI 的工作流程。

浏览器命令在 Windows 上完全失效，原因是本地消息主机的有效载荷大小限制。记忆功能生成错误的上下文，具有权威性外观，可能导致有害的代码建议。远程协作工作流中断，线程中可见的项目未在侧边栏中显示。长时间运行的任务因 HTTP 错误在执行中途失败。

通过 TLS HTTP/2 CONNECT 与 HTTP/3 竞争，在 250ms QUIC 头部启动后选择第一个成功连接。引入 ResolvedUserInput 来防止文件提交时的媒体丢失，同时等待轮次准入。添加 restored_history_prewarm 功能标志，在历史加载时启动 WebSocket 握手。添加 UsageAccountingDecision::ExhaustedForTurn 用于每轮预算强制执行，不影响后续轮次。将 EnvironmentSelection 添加到使用保存的环境 ID 或项目检出来启动云线程。先获取不带项目的轮次元数据，然后仅加载最新项目以减少过多分页。默认撤销为 Alt+Z (Unix)、Ctrl+Z (Windows)、F7。在用户命名空间中，使用空只读目录屏蔽 /etc/ssh/ssh_config.d 以防止权限失败。在工具执行期间嵌套 MCP 审批时保留调用上下文。接受分叉线程的 InheritedSessionId，使主机能够为子线程分配根会话 ID。

代码库中出现了多个问题讨论，包括远程控制、权限模型、项目状态层、模型路由等功能的用户需求和反馈。同时存在一些未解决的问题，如会话管理、令牌限制、延迟诊断等技术疑问。

社区成员还展示了多个实际应用案例，包括移动工作台、截图工具、预检工具、任务管理、远程呼叫服务器、错误追踪和 API 密钥管理等多个项目，展示了代码库在实际场景中的应用潜力。

用户对自定义模型提供商集成、隔离浏览器会话、按线程上下文控制、远程/移动控制、权限模型灵活性和项目管理等方面有明确的功能需求。这些需求反映了开发者希望在多项目环境中实现更精细的控制和更好的协作体验。

Windows 沙箱存在多个问题，包括在错误的 Git 仓库中执行命令、CreateProcess 失败、缺少作用域 Git 审批、浏览器策略有效载荷限制以及沙箱隔离不完整。macOS 连接性也存在一些问题。

自定义提供商在桌面应用中无法与现有聊天配合使用，而使用不同提供商的聊天更新会被阻止。内存可靠性存在缺陷，包括关系上下文丢失导致的错误记忆重建和超出上下文限制的阶段一截断。Claude Code 导入将压缩摘要视为普通消息，超过输入限制。传统游戏引擎开发被反复阻止。尽管有可用使用量，但仍显示误导性错误消息。

I notice the macOS connectivity issue extends beyond just the HTTP 400 errors mentioned earlier. There's also Statsig bootstrap timeouts and keychain enrollment loss affecting stability. The custom provider fragmentation creates significant friction—desktop apps can't leverage custom models in existing conversations, and updates break chats using different providers. Memory reliability compounds these problems with false memory reconstruction from context loss and truncation that exceeds limits. Claude Code imports treat compacted summaries as regular messages, pushing past input constraints. The safety system repeatedly blocks legacy game engine development, while subscription limit errors persist despite available usage.
</think>


# OpenAI Codex 社区摘要

## 2026年11月17日

---

### 今日要点

今日 Codex 在可靠性和用户体验方面迎来重大推进，多项基础设施改进陆续落地，包括 SSH 隧道的 HTTP/2 回退机制、提示词编辑器的完整撤销/重做功能，以及多个 Windows 专项修复。社区持续围绕平台特定问题展开热烈讨论，尤其是 Windows 沙箱隔离和 macOS 连接性问题，同时自定义模型提供商支持和隔离浏览器会话的功能需求依然突出。

---

### 版本发布

| 版本 | 类型 | 概述 |
|------|------|------|
| `rust-v0.171.0-alpha.11` | Alpha | Rust crate 滚动发版 |
| `rust-v0.170.0-alpha.4.1` | Alpha | 维护性 Alpha 版本 |
| `rust-v0.171.0-alpha.10` | Alpha | 滚动发版 |
| `rust-v0.171.0-alpha.9` | Alpha | 滚动发版 |
| `rust-v0.171.0-alpha.8` | Alpha | 滚动发版 |

过去 24 小时内共有五个 Alpha 版本发布，表明 Rust 代码库正在积极开发中，v0.171 和 v0.170 分支快速迭代。

---

### 热门 Issue

1. **[#57101](https://github.com/openai/codex/issues/57101)** — Windows Computer Use：截图后捕获访问权限和显示边框仍然保持打开状态
   - **为何重要：** 影响 Windows 用户 Computer Use 功能的关键 UI bug，视觉伪影会跨轮次持续出现。
   - **反馈：** 43 条评论，7 👍

2. **[#60778](https://github.com/openai/codex/issues/60778)** — iOS 版 Codex 显示"暂无任务"，但现有对话可通过搜索访问
   - **为何重要：** iOS 核心 UX 回归问题，阻止用户通过正常界面恢复任务历史。
   - **反馈：** 21 条评论，13 👍

3. **[#39973](https://github.com/openai/codex/issues/39973)** — 在 0.149.0 中废弃 `approval_policy="untrusted"` 但未提供过渡期，削弱了执行审批边界
   - **为何重要：** 破坏性变更导致 Codex 无法使用现有配置启动，强制用户重新配置安全设置。
   - **反馈：** 16 条评论，41 👍 — 热门 Issue 中赞同率最高

4. **[#2379](https://github.com/openai/codex/issues/2379)** — 打字内容的撤销/重做（已关闭）
   - **为何重要：** 提示词编辑器历史记录的长期需求；近期通过 PR #61954 解决。
   - **反馈：** 16 条评论，38 👍

5. **[#29156](https://github.com/openai/codex/issues/29156)** — Desktop 自定义提供商无法与现有聊天和模型选择器配合使用
   - **为何重要：** 阻止第三方模型提供商在桌面应用中的采用，强制用户使用仅 CLI 工作流。
   - **反馈：** 14 条评论，42 👍

6. **[#46129](https://github.com/openai/codex/issues/46129)** — Windows"无法加载浏览器请求头策略"：约 4.8 MB Statsig 有效载荷超出限制
   - **为何重要：** 由于本地消息主机的有效载荷大小限制，Windows 上的浏览器命令完全失效。
   - **反馈：** 10 条评论

7. **[#61703](https://github.com/openai/codex/issues/61703)** — ChatGPT Memory：关系上下文丢失导致自信的虚假记忆重构
   - **为何重要：** Memory 功能产生错误上下文且看似权威，可能导致有害的代码建议。
   - **反馈：** 9 条评论

8. **[#31407](https://github.com/openai/codex/issues/31407)** — Remote-control Desktop 项目在 Mac 侧边栏中缺失
   - **为何重要：** 远程协作工作流中断；通过远程线程可见的项目未在侧边栏中显示。
   - **反馈：** 9 条评论，9 👍

9. **[#58569](https://github.com/openai/codex/issues/58569)** — macOS desktop：反复出现 HTTP 400 Bad Request 阻止继续执行
   - **为何重要：** 长时间运行的任务因 HTTP 错误在执行中途失败，阻止目标完成。
   - **反馈：** 9 条评论

10. **[#59410](https://github.com/openai/codex/issues/59410)** — Windows"账户认证不可用"：令牌缺少 `chatgpt_account_id`
    - **为何重要：** Windows Store 版本认证失败，完全阻止访问服务。
    - **反馈：** 7 条评论

---

### 重要 PR 进展

1. **[#61964](https://github.com/openai/codex/pull/61964)** — 为 SSH 隧道添加 HTTP/2 回退机制
   - QUIC 头部启动 250ms 后，TLS HTTP/2 CONNECT 与 HTTP/3 竞争，选择最先成功建立的连接。
   - **状态：** 已合并

2. **[#61962](https://github.com/openai/codex/pull/61962)** — 在将轮次输入加入队列前捕获本地附件
   - 引入 `ResolvedUserInput` 以防止文件在轮次准入挂起时被提交时丢失媒体内容。
   - **状态：** 已合并

3. **[#61959](https://github.com/openai/codex/pull/61959)** — 在冷启动恢复时预热还原的文件图片
   - 添加 `restored_history_prewarm` 功能标志；在历史记录加载时开始 WebSocket 握手。
   - **状态：** 已合并

4. **[#61958](https://github.com/openai/codex/pull/61958)** — 在主机用量核算中支持轮次作用域的资源耗尽
   - 添加 `UsageAccountingDecision::ExhaustedForTurn`，实现每轮预算强制执行且不影响后续轮次。
   - **状态：** 已合并

5. **[#61956](https://github.com/openai/codex/pull/61956)** — 在启动 Cloud 线程时支持保存的环境
   - 添加 `EnvironmentSelection`，支持使用保存的环境 ID 或项目检出启动 Cloud 线程。
   - **状态：** 已合并

6. **[#61955](https://github.com/openai/codex/pull/61955)** — 为分页 `read_thread` 调用的项目加载添加边界
   - 先获取不带项目的轮次元数据，然后仅加载最新项目以减少过度分页。
   - **状态：** 已合并

7. **[#61954](https://github.com/openai/codex/pull/61954)** — 为非 Vim 提示词编辑器添加撤销和重做
   - 默认撤销：`Alt+Z`（Unix）、`Ctrl+Z`（Windows）、`F7`；使用 `Shift` 修饰符重做。
   - **状态：** 已合并

8. **[#61947](https://github.com/openai/codex/pull/61947)** — 在 Linux 沙箱中屏蔽系统 SSH 配置追加文件
   - 使用空的只读目录屏蔽 `/etc/ssh/ssh_config.d`，防止用户命名空间中的权限失败。
   - **状态：** 已合并

9. **[#61946](https://github.com/openai/codex/pull/61946)** — 在嵌套 Guardian 审批中包含封闭的工具上下文
   - 在工具执行期间嵌套 MCP 审批到达时保留调用上下文。
   - **状态：** 已合并

10. **[#61945](https://github.com/openai/codex/pull/61945)** — 允许主机启动的分支继承根会话 ID
    - 为分支线程接受 `InheritedSessionId`，使主机能够为子线程分配根会话 ID。
    - **状态：** 已合并

---

### 热门讨论

#### 想法

| # | 主题 | 评论 | 👍 |
|---|------|------|----|
| [#9200](https://github.com/openai/codex/discussions/9200) | 从 ChatGPT 应用远程控制 Codex（无头守护进程模式） | 53 | 195 |
| [#36238](https://github.com/openai/codex/discussions/36238) | 权限模型缺少通配符支持 | 2 | 3 |
| [#33353](https://github.com/openai/codex/discussions/33353) | ChatGPT Projects 需要规范的项目状态层 | 2 | 1 |
| [#61844](https://github.com/openai/codex/discussions/61844) | 智能模型路由与自动任务复杂度评估 | 0 | 1 |

**精选：** #9200（远程控制）以 195 👍 保持最高赞同数，反映了对移动优先 Codex 控制工作流的强烈需求。

#### 问答

| # | 主题 | 评论 | 👍 |
|---|------|------|----|
| [#22829](https://github.com/openai/codex/discussions/22829) | VS Code 扩展显示所有历史会话而非项目会话 | 1 | 5 |
| [#56686](https://github.com/openai/codex/discussions/56686) | ChatGPT 认证的 codex exec 支持的请求前令牌边界 | 3 | 1 |
| [#61849](https://github.com/openai/codex/discussions/61849) | 诊断截图/工具响应启动延迟 | 0 | 1 |

#### 展示与分享

| # | 主题 | 评论 | 👍 |
|---|------|------|----|
| [#58912](https://github.com/openai/codex/discussions/58912) | Codex Mobile Workbench：控制 Codex 的手机/PWA 界面 | 1 | 1 |
| [#59147](https://github.com/openai/codex/discussions/59147) | SnipToss：为 Codex 生成的图片/视频做标注 | 1 | 1 |
| [#61953](https://github.com/openai/codex/discussions/61953) | Worktree Preflight：Windows Git 检出一致性检查器 | 0 | 1 |
| [#61893](https://github.com/openai/codex/discussions/61893) | Taskhold：面向 Codex 的实时进度共享任务列表 (MCP) | 0 | 1 |
| [#61870](https://github.com/openai/codex/discussions/61870) | CallForMe：通过 Codex 进行电话呼叫的远程 MCP 服务器 | 0 | 1 |
| [#61923](https://github.com/openai/codex/discussions/61923) | Runheed：生产环境错误追踪 MCP 服务器 | 0 | 1 |
| [#61758](https://github.com/openai/codex/discussions/61758) | TeapotRouter：Codex + Claude Code 的计量 API 密钥 | 0 | 1 |
| [#61475](https://github.com/openai/codex/discussions/61475) | Ragmir：来自代码、PDF、Office 文件的带引用项目上下文 | 0 | 1 |

---

### 功能需求趋势

| 主题 | 证据 |
|------|------|
| **自定义模型提供商集成** | #29156、#36597、#45839 — 用户需要 GUI 选择、自动故障转移以及与原生 OpenAI 流量的隔离 |
| **隔离浏览器会话** | #40467 — 每个任务/项目一个会话，以支持多账户工作流 |
| **按线程的上下文控制** | #40429、#49195 — 每个线程的上下文窗口配置文件选择器；子代理专用限制 |
| **远程/移动控制** | #9200、#58912、#45386 — 无头守护进程、手机界面、统一的 web/desktop 远程访问 |
| **权限模型灵活性** | #36238 — 命令参数的通配符支持，减少过度宽泛的授权 |
| **项目管理** | #35749、#33353 — 不删除项目的前提下隐藏；用于连续性的规范项目状态层 |

---

### 开发者痛点

| 类别 | 详情 |
|------|------|
| **Windows 沙箱缺陷** | 在错误的 Git 仓库中执行命令的不一致性 (#42797)、CreateProcess 失败 (#61611)、缺少作用域 Git 审批 (#56742)、浏览器策略有效载荷限制 (#46129)、以及沙箱隔离不完整 |
| **macOS 连接性** | 反复出现 HTTP 400 错误阻止长时间运行的任务 (#58569)、Statsig 引导超时 (#59557)、以及 keychain 注册丢失 (#40168) |
| **代理配置** | `respect_system_proxies=true` 在 macOS 上的 CLI 或 Desktop 中未生效 (#39237) |
| **自定义提供商碎片化** | 桌面应用无法将自定义提供商与现有聊天配合使用 (#29156)；使用不同提供商的聊天的更新会阻止聊天 (#59323) |
| **Memory 可靠性** | 关系上下文丢失导致的虚假记忆重构 (#61703)；超出上下文限制的第一阶段截断 (#35093) |
| **Claude Code 导入** | 压缩摘要被当作普通消息处理，超出输入限制 (#34656) |
| **安全检查误报** | 传统游戏引擎开发反复被阻止 (#61518) |
| **订阅限制错误** | 尽管有可用用量仍显示误导性错误消息 (#59915) |

---

*本摘要基于 2026-11-17 的 github.com/openai/codex 数据生成*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the headings, body text, tables, and lists
2. Keep all URLs, issue numbers, project names, usernames, file paths, etc. in their original English form
3. Preserve all Markdown formatting (headings, tables, bold, lists, etc.)
4. Use natural technical Chinese register
5. Output ONLY the translation with no additional explanation

Let me translate section by section:

**Header**: "Gemini CLI Community Digest" → "Gemini CLI 社区通讯"

**Date**: "2026-11-17" stays the same

**Section 1 - Today's Highlights**:
- "The community is actively addressing critical agent reliability issues..." → "社区正在积极解决关键智能体可靠性问题..."
- Two P1 security fixes merged → 两个 P1 安全修复已合并
- Build system received urgent attention → 构建系统收到了紧急关注

**Section 2 - Releases**:
- "No new releases in the past 24 hours." → "过去 24 小时内无新版本发布。"

**Section 3 - Hot Issues**: Translate each issue description carefully, maintaining technical accuracy while making it natural in Chinese.

**Section 4 - Key PR Progress**: Translate descriptions, keep PR numbers, priorities, and usernames as-is.

**Section 5 - Hot Discussions**: Translate "No discussion data provided in the data source." → "数据源中未提供讨论数据。"

**Section 6 - Feature Request Trends**: Translate the theme descriptions and evidence references.

**Section 7 - Developer Pain Points**: Translate the recurring frustrations section.

Let me proceed with the full translation:
</think>


# Gemini CLI 社区通讯

## 2026-11-17

---

## 1. 今日要点

社区正在积极解决关键智能体可靠性问题，两项 P1 安全修复已合并：Windows Git 权限绕过漏洞（#30095）和项目 Git 环境注入防护（#30206）。构建系统收到了紧急关注，由于旧版 bundle 块导致夜间版本构建失败（#30207），同时团队继续攻克子智能体行为挑战，包括挂起条件和恢复机制。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门议题

### 3.1 [P1 Bug] 子智能体在 MAX_TURNS 后恢复时报告 GOAL 成功 (#22323)
**作者：** matei-anghel | **评论数：** 13 | ** 👍 2**  
[Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

`codebase_investigator` 子智能体在达到最大轮次限制前未完成分析时，会错误地报告成功状态并显示"GOAL"终止。这会掩盖实际失败，可能导致开发者信任不完整的结果。社区正在积极调试这一状态混淆问题——成功报告与轮次限制执行之间的冲突。

---

### 3.2 [P2 增强] 零依赖操作系统沙箱 (#19873)
**作者：** abhipatel12 | **评论数：** 9 | ** 👍 1**  
[Issue #19873](https://github.com/google-gemini/gemini-cli/issues/19873)

提议利用 Gemini 3 原生的 bash 亲和力，通过零依赖操作系统沙箱和执行后意图路由实现。这可以通过在不牺牲用户安全的前提下充分利用模型的 POSIX 工具链能力，从根本上改善安全性和用户体验。Large effort 标签表明这需要重大的架构重构工作。

---

### 3.3 [P1 Bug] 通用智能体无限挂起 (#21409)
**作者：** turmanticant | **评论数：** 8 | ** 👍 8**  
[Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

当 Gemini CLI 将控制权交给通用智能体时，它会无限挂起——即使是创建文件夹这样的简单操作，也会等待长达一小时后才被取消。当明确指示不要使用子智能体时问题消失，这表明主智能体与子智能体之间存在委托或通信问题。社区关注度较高，获得 8 个赞同。

---

### 3.4 [P2 Epic] 支持 AST 的文件读取、搜索和映射 (#22745)
**作者：** gundermanc | **评论数：** 7 | ** 👍 1**  
[Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745)

追踪调查支持 AST（抽象语法树）的工具，以实现更精确的基于方法的文件读取、减少因读取不对齐导致的轮次浪费，以及改进代码库导航体验。相关议题（#22746、#22747）探索了具体的 AST CLI 工具（tilth、glyph、AST grep）的实现方案。这代表了团队在更智能、更节省 token 的代码理解能力上的重大投入。

---

### 3.5 [P2 Bug] Gemini 不会自主使用 skills 和子智能体 (#21968)
**作者：** rnett | **评论数：** 7 | ** 👍 0**  
[Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

尽管拥有自定义 skills（如"gradle"、"git"）并配有详细描述，Gemini 很少自主调用它们——只有在明确指示时才会使用。这种利用不足削弱了可扩展 skills 的意义，需要用户持续引导。retesting 状态表明团队正在积极评估提示策略。

---

### 3.6 [P2 Bug] 浏览器智能体忽略 settings.json 配置覆盖 (#22267)
**作者：** hsm207 | **评论数：** 5 | ** 👍 0**  
[Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

浏览器智能体完全忽略全局或项目级 `settings.json` 中的配置覆盖，包括 `maxTurns` 等关键设置。虽然 `AgentRegistry` 在初始化期间正确读取并合并了这些设置，但它们并未传播到浏览器智能体的执行上下文中。这削弱了用户的配置控制能力。

---

### 3.7 [P1 Bug] 浏览器子智能体在 Wayland 下失败 (#21983)
**作者：** sigmaSd | **评论数：** 4 | ** 👍 1**  
[Issue #21983](https://github.com/google-gemini/gemini-cli/issues/21983)

浏览器子智能体在 Wayland 会话中无法正常工作，提前终止。这是一个平台特定问题，限制了 Gemini CLI 在使用 Wayland 显示服务器的 Linux 系统上的可用性，而这些系统正变得越来越普遍。need-retesting 标签表明调查仍在进行中。

---

### 3.8 [P2 Bug] 符号链接的智能体文件无法被识别 (#20079)
**作者：** wtanaka | **评论数：** 4 | ** 👍 0**  
[Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

`~/.gemini/agents/` 中的智能体定义文件如果是符号链接，则无法被识别，这阻止了开发者通过符号链接组织智能体。这限制了希望跨不同位置共享或引用智能体定义的开发者。

---

### 3.9 [P2 Bug] Gemini CLI 在工具数 >128 时返回 400 错误 (#24246)
**作者：** gundermanc | **评论数：** 3 | ** 👍 0**  
[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

当可用工具数超过约 128 个时，遇到 HTTP 400 错误，可能是触发了 API 限制。报告者期望智能体能够更智能地控制启用工具的作用域。这影响了拥有大量自定义工具配置的高级用户。

---

### 3.10 [P1 Bug] get-shit-done 输出钩子导致崩溃 (#22186)
**作者：** businesscasual98 | **评论数：** 3 | ** 👍 0**  
[Issue #22186](https://github.com/google-gemini/gemini-cli/issues/22186)

Gemini CLI 在 get-shit-done 操作的最后输出阶段打印用户摘要时崩溃。崩溃可以稳定复现于完成阶段，表明输出钩子生命周期中存在竞态条件或清理问题。

---

## 4. 重要 PR 进展

### 4.1 [安全] 防止 Windows git diff 权限绕过 (#30095) — **已合并**
**作者：** Gosling-dude  
[PR #30095](https://github.com/google-gemini/gemini-cli/pull/30095)

修复了 Windows 特有的安全漏洞——潜在的恶意 Git 参数可能被当作安全的只读操作对待。将共享的 Git 命令安全性验证提取为可复用辅助函数，并在 Windows 上应用一致的只读验证。**P1 优先级——用户应立即更新。**

---

### 4.2 [安全] 阻止项目 Git 环境注入 (#30206) — **进行中**
**作者：** harshjohiya | **P1 优先级**  
[PR #30206](https://github.com/google-gemini/gemini-cli/pull/30206)

防止工作区提供的 Git 环境变量通过 `.env` 加载影响内部 Git 和 shell 操作。这堵住了一个攻击向量——恶意项目配置可能干扰安全敏感操作。

---

### 4.3 [P0] 在 esbuild 前清除 bundle/ 以移除旧版块 (#30207) — **进行中**
**作者：** Likhith-BlueLotus  
[PR #30207](https://github.com/google-gemini/gemini-cli/pull/30207)

紧急修复夜间版本构建失败问题（自 2026-11-05 起）。tar 包膨胀至 25.2 MB，因为约 70 MB 的旧版 JavaScript 块被包含在每次构建中。清除 bundle 目录后再执行 esbuild 将恢复正常包大小，并解除版本发布的阻塞。

---

### 4.4 [P2] 保留超大规模后台日志尾部 (#30292) — **进行中**
**作者：** GooseKIller  
[PR #30292](https://github.com/google-gemini/gemini-cli/pull/30292)

修复了 `read_background_output` 在从字节 0 之后开始读取时丢弃 64KB 读取窗口第一行的 bug。这导致超过 64KB 的单行日志完全丢失，多行输出被截断。修复保留了完整的尾部内容，并对截断的读取进行了标记以便智能体感知。

---

### 4.5 修复取消后的 WebFetch 回退处理 (#30210) — **进行中**
**作者：** ibrahimosman786  
[PR #30210](https://github.com/google-gemini/gemini-cli/pull/30210)

改进 WebFetch 工具的取消处理，防止请求取消后继续不必要的回退处理。在回退 URL 重试之间也检查取消状态，减少计算浪费并改善响应性。

---

### 4.6 [P2] WSL2 上的图片粘贴 (#30097) — **进行中**
**作者：** krishbuilds01  
[PR #30097](https://github.com/google-gemini/gemini-cli/pull/30097)

修复 WSLg 下图片粘贴损坏的两个问题：除了 `XDG_SESSION_TYPE` 外还检测 `WAYLAND_DISPLAY`（WSLg 设置前者但不设置后者），并为剪贴板图片数据实现 BMP 格式回退。这恢复了 WSL2 用户的图片粘贴功能。

---

### 4.7 修复空值的 env 变量解析 (#30096) — **已合并**
**作者：** dropps07  
[PR #30096](https://github.com/google-gemini/gemini-cli/pull/30096)

修复了 settings 中 `${VAR:-default}` 的行为：当 `VAR` 已设置但为空时，现在正确使用默认值而不是解析为空字符串。修复正确地优先使用自定义环境变量而非 process.env，然后才应用默认值。

---

### 4.8 修复 IDE 连接日志记录 (#30102) — **已合并**
**作者：** arshil42  
[PR #30102](https://github.com/google-gemini/gemini-cli/pull/30102)

修复了 IDE 连接事件被错误地记录为 `start_session` 而非 `ide_connection`，导致 IDE companion 用户的会话计数虚高。现在正确使用 `EventNames.IDE_CONNECTION` 以获得准确的统计数据。

---

### 4.9 跳过权限不安全的系统 MCP 服务器 (#30283) — **已合并**
**作者：** elberthc-byte  
[PR #30283](https://github.com/google-gemini/gemini-cli/pull/30283)

对来自系统级配置文件（`settings.json`、`system-defaults.json`）的本地 MCP 服务器命令和脚本参数执行所有权和写权限检查。扩展了早期验证配置文件本身所有权的安全工作。

---

### 4.10 修复输出截断头部泄露 (#30325) — **进行中**
**作者：** nios-x  
[PR #30325](https://github.com/google-gemini/gemini-cli/pull/30325)

`read_background_output` 在大日志上静默只读取最后 64KB，但回复头部没有指示截断。智能体会错误地声称"完整日志输出："用于部分读取。此修复确保头部准确反映检索到的内容。

---

## 5. 热门讨论

*数据源中未提供讨论数据。*

---

## 6. 功能请求趋势

对议题跟踪器的分析揭示了几个主要主题：

| 主题 | 描述 | 证据 |
|-------|-------------|----------|
| **子智能体智能化** | 改进自主调用、恢复和轨迹可见性 | 议题 #22323、#21968、#22598、#21763 |
| **AST 感知工具** | 使用抽象语法树分析实现精确的代码导航和精准读取 | 议题 #22745、#22746、#22747、#19561 |
| **平台可靠性** | 修复跨平台（Wayland、WSL2、Windows）的挂起、崩溃和故障 | 议题 #21409、#21983、#22267 |
| **安全加固** | 沙箱执行、阻止环境注入、保护 MCP 服务器安全 | 议题 #19873、#30206、#30283 |
| **Token 效率** | 通过更好的工具作用域控制和选择性读取减少上下文膨胀 | 议题 #19561、#24246、#22745 |
| **浏览器智能体韧性** | 处理锁定配置文件、会话接管、Wayland 支持 | 议题 #22232、#22267、#21983 |
| **配置灵活性** | 支持符号链接、每工作区策略、正确的设置传播 | 议题 #20079、#18397、#22267 |
| **任务持久化** | 从上下文内任务追踪迁移到基于文件的 CRUD 操作 | 议题 #21000、#18836 |

---

## 7. 开发者痛点

### 反复出现的问题

1. **智能体挂起和无限等待**
   多份报告指出通用智能体和浏览器子智能体会无限挂起（长达一小时），需要手动取消。这破坏了工作流连续性，损害了对自动化执行的信任。

2. **设置配置被忽略**
   浏览器智能体和其他组件可能不遵守 `settings.json` 配置覆盖，迫使开发者硬编码配置或绕过限制。

3. **工具作用域限制**
   注册超过 128 个工具时会遇到 400 错误，这阻止了高级用户通过大量工具集完全自定义开发环境。

4. **子智能体不透明**
   Bug 报告缺少子智能体上下文，轨迹可见性差，模型在未明确提示的情况下未充分利用可用的 skills 和子智能体。

5. **平台不一致性**
   WSL2 上的图片粘贴失败、Wayland 上的浏览器子智能体损坏、Git 操作存在平台特定安全漏洞——所有这些都需要特殊处理。

6. **输出截断隐瞒**
   后台日志读取静默截断大输出而不提供明确指示，导致智能体对数据完整性做出错误声明。

7. **构建/发布不稳定**
   自 11 月 5 日以来夜间版本构建被阻塞，bundle 大小膨胀，影响了依赖最新版本 CI/CD 流程。

8. **危险行为未被阻止**
   模型偶尔会建议危险命令（`git reset --force`、破坏性数据库操作），而没有足够的风险提示。

---

*生成时间：2026-11-17 | 数据来源：google-gemini/gemini-cli*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate the entire document while:
1. Preserving the Markdown structure exactly
2. Keeping URLs, numbers, dates, code, version tags, etc. as-is
3. Using natural technical Chinese
4. Not translating project names, repository slugs, usernames, version tags, file paths, API/config identifiers
5. Outputting ONLY the translation, no preamble or explanation

Let me translate section by section:

Title: GitHub Copilot CLI Community Digest → GitHub Copilot CLI 社区动态

Date line: stays the same
Source: stays the same

Section 1: Today's Highlights
- The team shipped → 团队发布了
- managed setting → 托管设置
- Browser Use → Browser Use
- MCP binding → MCP 绑定
- sandboxing configuration → 沙箱配置
- session persistence → 会话持久化

Section 2: Releases
- New Feature → 新增功能
- Fixes and Changes → 修复与改进
- General bug fixes and incremental improvements → 一般性错误修复和增量改进

Section 3: Hot Issues - translate the summaries and descriptions while keeping titles and numbers as-is

Section 4: Key PR Progress - translate while keeping the "0" as-is

Section 5: Hot Discussions - translate while keeping "No discussion data was provided for this period" as appropriate

Section 6: Feature Request Trends - translate table headers and descriptions

Section 7: Developer Pain Points - translate the descriptions while keeping titles/numbers as-is

Let me write out the full translation:
</think>


# GitHub Copilot CLI 社区动态

**日期：** 2026年11月17日
**来源：** github.com/github/copilot-cli

---

## 1. 今日要点

团队发布了 **v1.0.113-0** 和 **v1.0.113-1**，引入了新的托管设置项（`features.browserUse`），允许管理员禁用内置的 Browser Use 功能。关键稳定性问题已修复，包括导致受影响用户 CLI 完全无法使用的 macOS 重启后 MCP 绑定失效问题。社区仍高度关注沙箱配置、IPv4 网络兼容性和会话持久化等挑战。

---

## 2. 版本更新

### v1.0.113-1（2026-11-17）
- **新增功能：** 管理员现在可以使用托管设置项 `features.browserUse` 禁用内置的 Browser Use 功能，包括在已运行的会话中。

### v1.0.113-0（2026-11-17）
- **修复与改进：** 一般性错误修复和增量改进。

---

## 3. 热门议题

### 1. [macOS 重启导致 Copilot CLI 因 MCP 绑定过期而失效](https://github.com/github/copilot-cli/issues/4998) — 12 条评论，11 个 👍
**状态：** 已关闭 | **领域：** MCP

macOS 安全更新并重启后，所有 Copilot CLI 会话无法处理提示词，原因是 `.mcp-writer.binding` 文件保留了过期的文件系统设备 ID。这是一个影响生产用户的严重可靠性问题，高评论数和反应数表明其影响范围广泛。

### 2. [使用自定义 OpenAI 兼容 providers 时 thinking 模式中 `reasoning_text` 报 400 错误](https://github.com/github/copilot-cli/issues/5145) — 9 条评论，1 个 👍
**状态：** 开启中 | **领域：** 模型、工具

使用自定义 OpenAI 兼容 providers（如 DeepSeek）且 `wireApi: "responses"` 时，后台 shell 退出后运行时合成的 assistant 消息会因 HTTP 400 而失败。这阻断了使用非标准模型配置的用户。

### 3. [Autopilot 模式进入无限循环，耗尽高级请求配额](https://github.com/github/copilot-cli/issues/2881) — 5 条评论
**状态：** 已关闭 | **领域：** 代理

启用 autopilot 模式后，助手进入无限自我重复循环，持续消耗高级请求配额而无任何进展。唯一解决方法是手动取消。这构成了重大的成本和用户体验风险。

### 4. [在仅支持 IPv4 的沙箱环境中 web_fetch 工具无法获取任何 URL](https://github.com/github/copilot-cli/issues/4041) — 3 条评论，1 个 👍
**状态：** 已关闭 | **领域：** 网络、工具

内置 `web_fetch` 工具在仅支持 IPv4 的沙箱环境中对所有 URL 返回 `TypeError: fetch failed`，包括简单的测试站点。这破坏了网络受限企业用户对此核心功能的使用。

### 5. [请求为 Claude 模型提供 1 小时 prompt 缓存 TTL](https://github.com/github/copilot-cli/issues/5220) — 3 条评论，11 个 👍
**状态：** 开启中 | **领域：** 模型

Claude prompt 缓存使用 Anthropic 默认的 5 分钟 TTL，在正常交互使用过程中就会过期。社区强烈请求提供可配置的 1 小时 TTL。11 个 👍 表明这是一个高优先级的生产力改进需求。

### 6. [MCP 服务器工具变更后恢复的会话报"工具引用未找到"错误](https://github.com/github/copilot-cli/issues/5359) — 3 条评论
**状态：** 已关闭 | **领域：** 会话、MCP

在 MCP 服务器工具于两次启动之间发生变更后恢复的会话，每个请求都因 400 错误而失败。这削弱了 MCP 用户的会话持久化功能。

### 7. [回归问题：迁移 harness 后 Git 命令不再弹出手动审批提示](https://github.com/github/copilot-cli/issues/5177) — 3 条评论
**状态：** 已关闭 | **领域：** 权限

2026年10月 Copilot 代理 harness 迁移引入的回归问题，移除了对仓库变更 Git 命令（`git add`、`git commit` 等）的审批提示。这是一个绕过重要安全防护的回归缺陷。

### 8. [Windows 沙箱无法访问非系统盘上的目录](https://github.com/github/copilot-cli/issues/5207) — 2 条评论，1 个 👍
**状态：** 开启中 | **领域：** 权限、平台-Windows

在 Windows 上启用沙箱且工作目录位于非系统盘（如 `D:\`）时，shell 命令无法列出、查看或进入目录。这阻碍了许多常见的开发者工作流程。

### 9. [功能请求：沙箱配置支持选择性启用工具](https://github.com/github/copilot-cli/issues/4298) — 2 条评论，3 个 👍
**状态：** 开启中 | **领域：** 权限、配置、工具

用户请求对沙箱会话中启用哪些内置工具进行细粒度控制。这符合企业安全最小权限访问的要求。

### 10. [MCP OAuth 在 Windows 上间歇性失败，socket 错误 10013](https://github.com/github/copilot-cli/issues/4463) — 2 条评论，1 个 👍
**状态：** 已关闭 | **领域：** 认证、平台-Windows、MCP

在浏览器授权流程启动前，远程 HTTP MCP 服务器的 OAuth 认证在 Windows 上间歇性失败，报"socket error 10013"。这影响了企业认证流程。

---

## 4. 重要 PR 进展

过去 24 小时内没有 PR 更新。

---

## 5. 热门讨论

*本期未提供讨论数据。*

---

## 6. 功能请求趋势

通过对开启中的议题和功能请求的分析，揭示以下新兴主题：

| 主题 | 热度 | 代表性议题 |
|-------|-----------|----------------------|
| **沙箱细粒度配置** | 高 | 选择性工具启用、按工具权限配置、文件系统路径白名单（#4298、#5365） |
| **延长 Prompt 缓存** | 高 | 1 小时 Claude 缓存 TTL（#5220）、1M token 上下文支持（#2601） |
| **跨平台沙箱一致性** | 中 | Windows 非系统盘访问（#5207）、WSL VS Code 集成（#4546）、macOS 网络控制（#5390） |
| **会话健壮性** | 中 | MCP 工具跨会话变更（#5359）、剪贴板图片持久化（#5037）、远程会话自动发布（#5355） |
| **认证凭据透明度** | 中 | 凭据选择可见性（#4804）、MCP OAuth 修复（#4584、#4463） |
| **Autopilot 改进** | 低 | 禁用"任务完成"摘要（#5033）、取消排队消息（#2378） |

---

## 7. 开发者痛点

社区最反复出现的痛点集中在：

1. **Windows 沙箱限制** — 多项议题（#5207、#4546、#5390、#4463）表明 Windows 沙箱成熟度远低于 macOS/Linux，影响目录访问、网络权限和认证流程。

2. **MCP 稳定性和互操作性** — MCP 相关问题在过去 24 小时活动中占主导。问题包括重启后绑定过期（#4998）、OAuth 失败（#4463、#4584）和会话恢复失败（#5359）。用户期望 MCP 集成在跨平台上"开箱即用"。

3. **网络环境限制** — IPv4 only 环境导致 `web_fetch` 工具完全失效（#4041），macOS 沙箱网络配置不遵守 `allowLocalNetwork` 设置（#5390）。

4. **会话状态脆弱性** — MCP 服务器变更后恢复会话会导致失败（#5359）、回退后图片丢失（#5037）、远程会话带 `--add-dir` 失败（#5355）。

5. **认证凭据混淆** — 本地沙箱的"Authenticate gh"功能静默使用无关的缓存 PAT 而非活动的 OAuth 会话，且无法查看选择了哪个凭据（#4804）。

6. **权限门控 UX 问题** — Windows 审批提示中路径截断（#4701）以及 Git 命令缺失审批提示（#5177）侵蚀了安全模型的信任度。

---

**动态结束**

*生成日期：2026-11-17 | 数据刷新：实时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate section by section:

---

# OpenCode Community Digest

# OpenCode 社区周刊

**Date:** 2026-11-17  
**来源:** github.com/anomalyco/opencode

---

## 今日要闻

The OpenCode project continues active development with a notable focus on accessibility and platform stability. A new **opencode-pty v0.6.0** release addresses protocol improvements, while the community pushes forward on a long-awaited **screen reader mode for the TUI** (PR #64350) that would make the terminal interface accessible to users relying on assistive technologies. Platform-specific bug fixes dominate this cycle, with particular attention to **zombie process leaks in the pty daemon on Linux** and Windows compatibility enhancements for packaged applications.

OpenCode 项目持续活跃开发，本周重点聚焦无障碍功能和平台稳定性。**opencode-pty v0.6.0** 版本发布，改进了协议规范；同时社区积极推进**终端界面屏幕阅读器模式**（PR #64350），让依赖辅助技术的用户也能使用终端界面。本周期以平台特定的 bug 修复为主，尤其关注 **Linux 上 pty daemon 的僵尸进程泄漏**以及打包应用在 Windows 上的兼容性改进。

---

## 发布

### process-daemon v0.6.0
- **组件:** `opencode-pty`  
- **发布:** `@opencode/pty@0.6.0` on npm  


- **协议版本:** 9  
- **位置:** `packages/process-daemon`  
- **详情:** 维持 0.5.x 系列的兼容性，同时为新的 daemon 能力做准备。

[查看发布 →](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.6.0)

---

## 热门议题

### 1. [Free tier issues mega-thread](https://github.com/anomalyco/opencode/issues/59387) — 385 条评论

这个免费层问题集合帖持续获得关注，反映了用户在平台使用中的核心痛点。社区讨论集中在协议稳定性与新功能需求之间的平衡，特别是 pty 通信层和 daemon 架构的改进方向。

免费层配额在 UTC 00:00 重置，但界面没有显示剩余配额的可视化指标，用户只能在会话失败收到 HTTP 429 后才发现配额耗尽。这种体验设计导致频繁的挫败感。

终端中 Ctrl+C 无法中断正在运行的进程，特别是 Windows 桌面版上的情况，比如 Python 开发服务器。用户被迫使用 `taskkill /F /PID` 来终止进程，这在开发流程中造成了严重的中断。

## 关键 PR 进展

screen reader mode 的实现是个重要的无障碍改进，它采用仅追加的滚动缓冲区渲染器输出纯文本，兼容屏幕阅读器，同时包含相关文档。这个社区驱动的解决方案直接回应了反馈需求。

signed-in browser pane 功能让用户可以在已登录状态下浏览网页，预览、提示和代理防护都能正常工作。点击链接保持登录状态，也可以从 Chrome、Edge、Firefox、Safari 等多个浏览器导入登录信息，弥合了网页浏览和桌面应用体验之间的差距。

Desktop 的会话编辑器现在支持 `/cd <path>` 命令来改变工作目录，这与终端界面的功能保持一致，包括目录补全功能。

When Code Mode scripts exceed 10 seconds with `full_codemode` enabled, they're automatically moved to background jobs while the session continues—fast scripts return immediately as before, but longer-running scripts return a "still running" status while execution persists in the background.

Shell command failures when using Microsoft Store PowerShell 7 on Windows stem from package identity conflicts causing access denied errors during process creation; implementing retry logic for these packaged application scenarios resolves the issue.

The system now checks model availability based on time windows and automatically falls back to alternative models when preferred options become unavailable, improving reliability during peak usage periods.

On Linux, NFS databases are now excluded from Write-Ahead Logging to prevent startup failures and data corruption issues on network file systems.

Code Mode's search function now accepts queries in both string and object formats—models that were previously failing with schema errors when passing plain strings like `search("notes")` can now use the simpler syntax alongside the structured `search({ query: "notes" })` approach.

Long MCP authorization URLs that would previously overflow the terminal display are now properly contained, keeping redirect URLs and action buttons visible so OAuth flows remain completable from the terminal interface.

The CLI plugin list command now correctly displays package identifiers for TUI-only plugins configured in `cli.json`, fixing the ID column that previously showed dashes.

Looking at feature trends, screen reader support is becoming increasingly important with the dedicated TUI mode implementation, while subagent behavior and platform stability around process management remain critical concerns.

The PTY daemon's zombie process leaks on Linux represent a significant regression affecting long-running sessions, along with free tier friction that creates barriers for new users. Windows Desktop integration continues to present challenges, and configuration migration during upgrades introduces subtle permission issues that aren't immediately obvious.

Terminal edge cases like OSC color replies and OAuth prompts need addressing to support SSH-based workflows properly. The community is also tracking pinned sessions, session scratchpads, and shell robustness concerns around deleted working directories and serve flags.

Core issues span from PTY daemon stability on Linux—with confirmed zombie process leaks since v2.3.0—to free tier friction with its 385-comment thread, subagent execution model shifts in v2.3.0, Windows Desktop integration gaps around Ctrl+C behavior and worktree session persistence, configuration migration with V1 permission blocks being silently ignored, and TTY/SSH fragility with OSC color reply fragmentation and OAuth prompt overflow in SSH workflows.
</think>


# OpenCode 社区周刊

**日期：** 2026-11-17  
**来源：** github.com/anomalyco/opencode

---

## 今日要闻

OpenCode 项目本周保持高强度开发节奏，重点聚焦无障碍功能和平台稳定性。**opencode-pty v0.6.0** 版本发布，改进了协议规范；社区同时推进备受期待的**终端界面屏幕阅读器模式**（PR #64350），让依赖辅助技术的用户也能顺畅使用 TUI。本周期以平台特定 bug 修复为主，尤其关注 **Linux 上 pty daemon 的僵尸进程泄漏**以及打包应用在 Windows 上的兼容性改进。

---

## 发布

### process-daemon v0.6.0

- **组件：** `opencode-pty`
- **发布：** npm 上的 `@opencode/pty@0.6.0`
- **协议版本：** 9
- **位置：** `packages/process-daemon`
- **详情：** 在保持与 0.5.x 系列兼容的同时，为新的 daemon 能力做铺垫。

[查看发布 →](https://github.com/anomalyco/opencode/releases/tag/process-daemon-v0.6.0)

---

## 热门议题

### 1. [Free tier issues mega-thread](https://github.com/anomalyco/opencode/issues/59387) — 385 条评论

**状态：** OPEN | 👍 28  
**优先级：** 紧急

这个巨型议题是社区最活跃的讨论帖，作为免费层问题的集中反馈入口。用户普遍反映「免费用量已用尽」错误持续出现、配额不重置、Desktop 无法加载等问题。这个高流量帖子反映出免费层体验存在系统性摩擦，可能正在影响新用户的首次使用体验。团队需密切关注，该议题是许多开发者的第一印象。

### 2. [Plugin/Agent/Skills marketplace](https://github.com/anomalyco/opencode/issues/28696) — 16 条评论，👍 38

**状态：** CLOSED | **优先级：** 高

这是一个里程碑级别的功能请求，希望建立统一的插件、Agent 和 Skills 注册中心/市场。38 个赞使其成为最受期待的功能之一。议题已关闭，暗示团队已认可该需求，但具体实现时间线尚不明朗。

### 3. [PTY shell commands leave zombies on Linux (2.3.0)](https://github.com/anomalyco/opencode/issues/63817) — 10 条评论，👍 1

**状态：** CLOSED | **已复现** | **优先级：** 高

2.3.0 版本引入的回归问题：已完成的 shell 命令在 `opencode-pty daemon` 下以僵尸进程形式残留。该问题可复现，似乎只影响 Linux 系统。对于长时间运行的会话来说，这是严重的稳定性隐患。

### 4. [Accessibility: add screen-reader-friendly TUI mode](https://github.com/anomalyco/opencode/issues/39368) — 9 条评论

**状态：** OPEN | **优先级：** 中

屏幕阅读器用户（Windows/Linux 上的 NVDA）反馈，由于动画效果和非线性渲染，终端界面完全无法使用。这个无障碍功能缺失将一部分开发者拒之门外。值得注意的是，PR #64350（见下方）直接解决了这个问题，代表了社区驱动的解决路径。

### 5. [Always-background subagents: keep blocking call option](https://github.com/anomalyco/opencode/issues/64096) — 9 条评论，👍 2

**状态：** CLOSED | **优先级：** 中

用户请求能够将 subagent 调用执行为阻塞（同步）操作，而非总是后台运行。相关议题 #64073 请求恢复前台 subagent 执行。两者共同揭示了 2.3.0 中的重大工作流变化，影响了开发者的使用预期。

### 6. [Desktop "Add server" dialog fields uneditable](https://github.com/anomalyco/opencode/issues/38193) — 7 条评论，👍 2

**状态：** CLOSED | **优先级：** 中

v1.18.4 的回归问题：Desktop 应用服务器配置对话框中的 Server name、Username 和 Password 字段变为不可编辑。只有 Server address 可用，阻止了用户正常配置需要认证的连接。

### 7. [TUI OSC color replies leak into prompt](https://github.com/anomalyco/opencode/issues/57345) — 6 条评论

**状态：** OPEN | **已复现** | **优先级：** 低

通过 SSH 连接时，碎片化的 OSC 10/11 颜色探测回复导致 `:ffff/ffff/ffff` 伪影出现在提示符中。虽然不影响功能，但造成了视觉干扰，表明终端状态处理不完整。

### 8. [Add `--no-password` flag for `opencode2 serve`](https://github.com/anomalyco/opencode/issues/43039) — 6 条评论，👍 35

**状态：** OPEN | **优先级：** 中

本列表中点赞最多的功能请求。V2 serve 默认强制认证（与 V1 不同），用户希望提供一个禁用认证的 flag 用于本地开发。35 个赞清晰地表明这是一个开发者体验缺口。

### 9. [Free quota exhaustion only visible after 429 failure](https://github.com/anomalyco/opencode/issues/64334) — 3 条评论

**状态：** OPEN | **优先级：** 中

免费模型配额在 UTC 00:00 重置，但界面没有剩余配额指示器。用户只有在新会话收到 HTTP 429 错误时才发现配额耗尽。更清晰的配额可见性可以避免这种令人沮丧的失败。

### 10. [Ctrl+C in integrated terminal doesn't interrupt process](https://github.com/anomalyco/opencode/issues/61899) — 5 条评论

**状态：** OPEN | **优先级：** 高

在 Windows Desktop 上，内置终端中按 Ctrl+C 无法中断正在运行的进程（如 Python 开发服务器）。用户只能使用 `taskkill /F /PID`。这打破了预期的终端行为，严重影响开发工作流。

---

## 关键 PR 进展

### 1. [feat(tui): add screen reader mode](https://github.com/anomalyco/opencode/pull/64350) — OPEN

**作者：** GauravTheCoder | **关闭：** #39368

实现了一个可选的屏幕阅读器模式，使用仅追加的滚动缓冲区渲染器，输出适合屏幕阅读器的纯文本。包含文档说明。这是社区驱动的重大无障碍改进，直接回应了用户反馈。

### 2. [feat(desktop): signed-in browser pane](https://github.com/anomalyco/opencode/pull/63002) — OPEN

**作者：** Hona

引入带有扩展支持、预览、提示和 Agent 安全防护的已登录浏览器窗格。用户可以点击链接并保持登录状态，也可以从 Chrome、Edge、Firefox、Safari 等 11 种浏览器导入登录信息。这填补了 Web 浏览与 Desktop 应用体验之间的空白。

### 3. [feat(app): add /cd slash command](https://github.com/anomalyco/opencode/pull/64353) — OPEN

**作者：** Brendonovich

在 Desktop 会话编辑器中添加了 `/cd <path>`，与 TUI 功能对齐，包括目录补全。此前 Desktop 只能通过标题栏工作区菜单在项目 checkout 和 worktree 之间移动会话。这提供了更灵活的会话管理方式。

### 4. [feat(core): background slow Code Mode scripts](https://github.com/anomalyco/opencode/pull/64343) — OPEN

**作者：** jlongster | **贡献者**

启用 `full_codemode` 后，运行超过 10 秒的 Code Mode `execute` 脚本变为后台作业，会话继续进行。快速脚本仍像以前一样立即返回；慢速脚本返回「仍在运行」状态，VM 继续执行。

### 5. [fix(service): retry Windows pipe spawn on packaged access denied](https://github.com/anomalyco/opencode/pull/64137) — OPEN

**作者：** mvanhorn | **需要：** 合规审查

修复了通过 Microsoft Store 版 PowerShell 7 使用 shell 命令时在 Windows 上的失败问题。进程创建因包身份冲突报 access denied 错误。为打包应用场景实现了重试逻辑。

### 6. [feat(core): time-based model availability with fallback](https://github.com/anomalyco/opencode/pull/64222) — OPEN

**作者：** ooaklee | **关闭：** #63712

实现了基于时间的模型可用性检查和自动回退到替代模型。当首选模型在某些时段不可用时，这解决了可靠性问题。

### 7. [fix(core): avoid WAL on Linux NFS databases](https://github.com/anomalyco/opencode/pull/64340) — OPEN

**作者：** yifei28

通过避免对 NFS 挂载上的数据库使用预写日志（WAL）来解决 Linux 上 NFS/WAL 启动失败问题。在之前工作（#43141）的基础上，缩小到 Linux NFS 场景以最小化风险。

### 8. [fix(codemode): accept plain string query in search](https://github.com/anomalyco/opencode/pull/64347) — CLOSED

**作者：** rekram1-node

Code Mode 的全局 `search(...)` 现在接受纯字符串查询形式（`search("notes")`），而不只是对象形式（`search({ query: "notes" })`）。模型经常使用字符串形式，之前会报模式错误而失败。

### 9. [fix(tui): keep OAuth redirect prompt accessible](https://github.com/anomalyco/opencode/pull/63246) — OPEN

**作者：** AIPEAC | **关闭：** #63245

防止过长的 MCP 授权 URL 超出终端边界而隐藏重定向 URL 字段和操作按钮。确保 OAuth 流程在 TUI 中仍可完成。

### 10. [fix(cli): display package id for tui plugins](https://github.com/anomalyco/opencode/pull/64287) — OPEN

**作者：** yash-alla | **关闭：** #64175

修复了 `opencode plugin list` 在 `cli.json` 中配置的 TUI 专属插件的 ID 列显示 `-` 的问题。现在正确显示所有插件类型的包标识符。

---

## 功能趋势分析

通过对开放议题和 PR 的分析，可以看出几个主导性的功能方向：

| 主题 | 证据 | 优先级 |
|-------|----------|----------|
| **无障碍功能** | 屏幕阅读器 TUI 模式（#39368，PR #64350），长期存在的无障碍缺口 | 高 |
| **Agent/Subagent 行为** | 总是后台的 subagent（#64096，#64073），前台执行恢复请求 | 高 |
| **平台稳定性** | PTY 僵尸泄漏（#63817，#63976），Ctrl+C 行为（#61899），NFS WAL（#64340） | 紧急 |
| **免费层体验** | 配额可见性（#64334），认证问题（#64269），模型同意（#64304） | 高 |
| **会话管理** | 置顶会话（#60236），会话草稿本（#64327），/cd 命令（PR #64353） | 中 |
| **市场平台** | 插件/agent/skills 注册中心（#28696） | 中 |
| **Shell 健壮性** | 已删除的 cwd 处理（#64355），serve 无密码 flag（#43039） | 中 |

---

## 开发者痛点

1. **Linux 上 PTY Daemon 稳定性（紧急）：** 多份报告（#63817，#63976）确认 2.3.0 以来的僵尸进程泄漏。这影响了任何运行长时间会话的开发者，代表了从 2.2.7 明确回归。

2. **免费层体验摩擦：** 385 条评论的巨型帖子（#59387）标志着免费层限制、重置时机和错误提示存在系统性问题。新用户在体验到价值之前就遇到障碍。

3. **Subagent 执行模式变化：** 2.3.0 中 subagent 变为总是后台运行，引发多个议题（#64096，#64073），来自依赖同步 subagent 调用的开发者。

4. **Windows Desktop 集成缺口：** Ctrl+C 无效（#61899）、worktree 会话 shell 持久化（#64317）、包身份冲突（#64137）表明 Windows 仍是 Desktop 用户的痛点。

5. **配置迁移困惑：** V1 权限块在 v2.3.0 中被静默忽略（#64253），在升级过程中产生微妙的权限回归。

6. **TTY/SSH 脆弱性：** OSC 颜色回复碎片化（#57345）和 OAuth 提示符溢出（#63246）表明 SSH 工作流存在终端边缘情况需要关注。

---

*本周刊基于 2026-11-17 github.com/anomalyco/opencode 的活动生成*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical digest into Simplified Chinese. I need to:
1. Translate all the content into natural, fluent Simplified Chinese
2. Keep all markdown structure intact (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, PR numbers, file paths, and technical identifiers in their original form
4. Use technical Chinese appropriate for a Chinese developer newsletter
5. Output ONLY the translation with no preamble or explanation

Let me work through this systematically, section by section.

**标题**: "Pi Community Digest — 2026-11-17" → "Pi 社区日报 — 2026-11-17"

**Today's Highlights** → "今日要点"

**Today's Highlights section**:
- "The Pi community saw heavy activity on performance and reliability issues." → "Pi 社区在性能和可靠性问题上今天非常活跃。"
- "A critical **fullscreen re-rendering bug** (#9549) drew 18 comments as contributors investigate frame-by-frame transcript rebuilds." → "一个关键的**全屏重渲染 bug** (#9549) 引发了18条评论 contributors 正在调查逐帧重建转录本的问题。"
- "Meanwhile, several session lifecycle bugs were resolved, including a long-standing **RPC double session_start** issue (#10470) and **Codex websocket 60-minute reconnection** (#12124)." → "与此同时，多个会话生命周期 bug 得到了修复，包括一个长期存在的 **RPC 重复 session_start** 问题 (#10470) 和 **Codex WebSocket 60分钟重连** 问题 (#12124)。"
- "The most impactful new PR (#12249) adds first-token latency metrics (`ttftMs`/`ttfaMs`) to streamed assistant messages for better performance debugging." → "影响最大的新 PR (#12249) 为流式 assistant 消息添加了首 token 延迟指标 (`ttftMs`/`ttfaMs`)，以便更好地进行性能调试。"

**Releases** → "发版动态"

No new releases in the last 24 hours. → "过去 24 小时内无新版本发布。"

**Hot Issues** → "热门 issue"

I'll continue translating the technical content section by section, maintaining the markdown structure and technical accuracy throughout.
</think>


# Pi 社区日报 — 2026-11-17

## 今日要点

Pi 社区今天在性能和可靠性问题上异常活跃。一个关键的**全屏重渲染 bug** (#9549) 引发了 18 条评论，contributors 正在调查逐帧重建转录本的问题。与此同时，多个会话生命周期 bug 得到了修复，包括一个长期存在的 **RPC 重复 `session_start`** 问题 (#10470) 和 **Codex WebSocket 60 分钟重连** 问题 (#12124)。影响最大的新 PR (#12249) 为流式 assistant 消息添加了首 token 延迟指标（`ttftMs`/`ttfaMs`），以便更好地进行性能调试。

---

## 发版动态

过去 24 小时内无新版本发布。

---

## 热门 Issue

### 1. [全屏模式下转录本每帧都在重渲染](https://github.com/earendil-works/pi/issues/9549) — 18 条评论 | `inprogress`
在 4 逻辑核心的 Windows 11 上，大型会话导致单核 100% 饱和。每次 resize 事件都会重新发出整个转录本，已通过 `pi -ne` 验证。这对低核心数机器上的重度用户来说是**用户体验阻断性问题**；社区正在积极研究滚动视口优化（参见 PR #11968，部分解决）。

### 2. [RPC 模式下 new session 触发了两次 session_start](https://github.com/earendil-works/pi/issues/10470) — 9 条评论 | `closed`
`new_session`、`switch_session`、`fork` 和 `clone` 在 RPC 模式下会触发两次 extension `session_start` 处理器，中间没有 `session_shutdown`。**已修复**，通过 PR #12230 实现。这可能导致 extension 端状态损坏或重复初始化。

### 3. [Tool 调用与 bash 并发运行——read 在命令结束前就执行了](https://github.com/earendil-works/pi/issues/11950) — 7 条评论 | `p0` `inprogress`
当模型在同一条 assistant 消息中同时发送 `bash` 和 `read` 时，它们会同时启动。read 操作会读取到一个未完成的构建产物或过期文件。这是**构建集成工作流可靠性问题**；已标记为 p0，正在积极调查。

### 4. [每个请求都创建新的 Bedrock 客户端](https://github.com/earendil-works/pi/issues/11527) — 7 条评论
`bedrock-converse-stream.ts` 每次调用都实例化一个全新的 `BedrockRuntimeClient`，触发新的凭证获取和 HTTP/2 会话。对于 SSO 配置文件，这意味着每次都会重复调用 `GetRoleCredentials` 到 `portal.sso`。对于 AWS 集成团队来说，这是**性能和成本问题**。

### 5. [llama.cpp 连接状态不会在会话间持久化](https://github.com/earendil-works/pi/issues/12096) — 4 条评论
使用 `/login llama.cpp` 配合 `--no-models-autoload` 时，连接只会临时存储。对于希望跨会话保持一致本地模型访问而不必重新认证的用户来说，这是一个**可用性缺口**。

### 6. [Codex WebSocket 在单轮对话内达到 60 分钟连接限制](https://github.com/earendil-works/pi/issues/12124) — 4 条评论 | `closed`
长时间连续思考过程中，错误"Responses WebSocket 连接数已达上限（60 分钟）"反复出现。**已修复**，由 PR #12229 实现，实现了流中自动重连。

### 7. [/new 后旧的用户输入在全屏模式下仍然可见](https://github.com/earendil-works/pi/issues/11264) — 4 条评论 | `closed`
执行 `/new` 后，之前的输入仍然显示在"新会话已开始"下方，且模型作用域警告会覆盖全屏 UI。通过多个协同 PR（#12236、#12233、#12234、#12115）解决了事件处理、模型回退报告和终端写入问题。**已解决**。

### 8. [Codemode 脚本中顶级变量命名为 `tools` 会导致脚本失败](https://github.com/earendil-works/pi/issues/11226) — 4 条评论
一个简单的命名冲突会导致 codemode 脚本在执行前就失败。影响从 Claude Code 迁移过来的新用户；这是一个**对 contributor 好感度的简单切入点**。

### 9. [openai-codex SSE 请求在 zstd 压缩时返回 400](https://github.com/earendil-works/pi/issues/12060) — 3 条评论 | `inprogress`
在 `"transport": "sse"` 配置下，长会话时 `openai-codex` 在请求体被 zstd 压缩时会间歇性返回错误请求，但相同请求体不压缩时可以通过。这是重度 Codex 用户的**回归问题**。

### 10. [Gemini 4 Hydrogen xhigh 思考层级被 Google 适配器拒绝](https://github.com/earendil-works/pi/issues/12184) — 3 条评论 | `closed`
Gemini 4 Hydrogen 通过 models.dev 广告了 `xhigh` 思考层级，但选择它后在任何 HTTP 请求之前就抛出错误："不支持的 Google 思考层级映射"。**已关闭**，与 #12177 同时关闭，后者确认需要在 `google-generative-ai` 和 `google-vertex` 两个适配器中修复。

---

## 关键 PR 进展

### 1. [#12249](https://github.com/earendil-works/pi/pull/12249) — 记录流式 assistant 消息的 ttftMs 和 ttfaMs | `closed`
扩展 `AssistantMessageEventStream` 以在现有的 `durationMs` 之外捕获首 token 延迟：
- `ttftMs`：到首个内容 delta 的时间（包括思考 token）。
- `ttfaMs`：到首个非思考内容或 tool call delta 的时间。
这对**性能分析和模型对比**很有价值。

### 2. [#12246](https://github.com/earendil-works/pi/pull/12246) — 修复 /login 和 /logout 搜索自动选择最佳匹配 | `open`
`OAuthSelectorComponent.filterProviders()` 曾将选中索引钳制到旧列表长度。在滚动并输入后回车会选中错误的 provider。对于多 provider 配置环境来说这是一个 **UX 修复**。

### 3. [#11370](https://github.com/earendil-works/pi/pull/11370) — 新增 DeepInfra、Nebius、Ollama Cloud、Scaleway、SiliconFlow、StepFun provider | `open`
从 models.dev 扩展托管推理选项。值得注意的：DeepInfra（74 个模型）、Nebius 和 Scaleway。这是**社区驱动的 provider 扩展**，堆叠在 #11369 之上。

### 4. [#11968](https://github.com/earendil-works/pi/pull/11968) — 使全屏滚动帧复杂度为 O(视口大小) | `closed`
部分解决了 #9549。之前每个滚轮事件（最高 60 fps）都从空缓存重建整个转录本。现在使用视口相对渲染。对于长会话的全屏模式来说这是一个**显著的性能提升**。

### 5. [#12229](https://github.com/earendil-works/pi/pull/12229) — 从 Codex WebSocket 60 分钟连接限制中恢复 | `closed`
当 Codex 后端在 60 分钟后关闭 Responses WebSocket 时实现自动重连。之前只在第一个事件前处理；现在支持流中重连。对于长时间运行的 Codex 会话来说这是**可靠性修复**。

### 6. [#12230](https://github.com/earendil-works/pi/pull/12230) — RPC 会话替换时只发出一次 session_start | `closed`
修复 #10470。重复的 `session_start` 追踪到了 `finishSessionReplacement()`。确保所有 RPC 会话操作的 `session_shutdown`/`session_start` 配对干净。

### 7. [#12236](https://github.com/earendil-works/pi/pull/12236) — 交互式 TUI 运行时捕获 git 和 npm 输出 | `closed`
`DefaultPackageManager.runCommand()` 使用 `stdio: "inherit"` 生成 git/npm，导致交互式 TUI 与 package manager 输出冲突。**UI 稳定性修复**，适用于安装/刷新操作。

### 8. [#12233](https://github.com/earendil-works/pi/pull/12233) — 像其他 extension 错误一样报告 pi.events 处理器错误 | `closed`
Extension 事件处理器（`pi.on("session_start" | "tool_call" | ...)`）之前静默吞掉错误。现在与其他 extension 错误处理方式一致地报告它们。这是**调试方面的生活质量改进**。

### 9. [#12235](https://github.com/earendil-works/pi/pull/12235) — 设备感知和平台感知的手势与按键提示 | `closed`
p2 的 Web UI 在桌面上显示"点击"和"长按"提示（应该是"右键点击"和"点击"），且所有平台上都显示"Cmd"（Windows/Linux 用 Ctrl）。**跨平台 UX 打磨**。

### 10. [#12134](https://github.com/earendil-works/pi/pull/12134) — 使 system 成为 openai-completions 中的默认指令角色 | `open`
Groq 的 qwen/qwen3.8-27b 因默认指令角色是 `developer` 而报"意外的消息角色"错误。改为 `system` 可与更广泛的 API 兼容性对齐。**兼容性问题修复**，解决 provider 特定的行为差异。

---

## 热门讨论

### 想法与功能提案

- [从 DSH 插件生态到 pi：官方 Web UI 基础？](https://github.com/earendil-works/pi/discussions/8420) — 社区成员观察到 DSH 的中文社区推动了以 UI 为重点的插件（聊天界面、工作区面板、终端嵌入），而 pi 的生态更偏向后端。提议建立**官方 Web UI 基础**以吸引 UI 插件开发者。(👍 3)

### 作品展示

- [agent-chat：独立 Pi 代理的点对点消息通信](https://github.com/earendil-works/pi/discussions/10069) — 一个新的 extension，使独立 Pi 会话（通常跨 worktree）可以共享 Docker 容器、端口和数据库，无需编排器。**团队工作流的新型多代理协作模式**。(👍 1)

### 问答 / 工作流讨论

- [你们怎么同时处理两个对话？](https://github.com/earendil-works/pi/discussions/11830) — 用户在长轮次在一个会话中运行而需要参考另一个会话时遇到阻力。目前需要终止该轮次或打开另一个终端标签。**常见工作流痛点**，表明对轻量级会话切换有需求。(👍 1)

---

## 功能需求趋势

分析完整的 issue 和讨论语料库，浮现出几个反复出现的主题：

| 主题 | 频率 | 代表性 Issue |
|-------|-----------|----------------------|
| **会话生命周期可靠性** | 高 | 重复 `session_start` (#10470)、`/new` UI 残留 (#11264)、headless 挂起 (#12241)、macOS argv 损坏 (#12222) |
| **Provider/适配器健壮性** | 高 | 每个请求创建 Bedrock 客户端 (#11527)、Gemini xhigh 拒绝 (#12184)、Anthropic 429 (#9849)、ID token 验证 (#11313) |
| **Tool 执行顺序** | 中 | Bash + read 并发 (#11950)、后台 bash 内置请求 (#12223)、`user_bash_complete` 事件 (#8530) |
| **性能优化** | 中 | 全屏重渲染 (#9549)、CPU 螺旋桨 (#9399)、MCP SSE 重新扫描 (#12224)、SSE 锁释放 (#12225) |
| **Provider 扩展** | 中 | 新 provider PR (#11370)、Keln 添加请求 (#12247)、openai-completions 角色修复 (#12134) |
| **多会话工作流** | 低 | 实时会话预留 (#12216)、多会话切换 (#11830)、agent-chat extension (#10069) |

**热门需求功能：**

1. 内置后台 bash，支持退出通知和阻塞打印模式
2. 原生多会话管理（切换、预留、点对点协作）
3. 首 token 延迟指标和逐轮性能诊断
4. 扩展 provider 生态，并更好地保留错误元数据
5. 跨平台 UI 一致性（手势、按键提示、终端干扰处理）

---

## 开发者痛点

1. **Extension 生命周期混乱** — RPC 模式下 `session_start` 错误触发 (#10470)，reload 后没有 `bindExtensions({})` (#12231)，JSON 打印模式下也会触发 (#12232)。构建 extension 的开发者难以预测处理器何时运行。

2. **终端状态损坏** — 交互式 TUI 输出与 git/npm 冲突 (#12236)，直接终端写入泄漏 (#12117)，`/new` 留下陈旧输入可见 (#11264)。在 pi 运行时操作终端很脆弱。

3. **流式资源管理** — SSE 读取器在未取消流的情况下释放锁 (#12225)，MCP SSE 反复重新扫描大型不完整事件 (#12224)。长时间运行的流可能泄漏内存或 CPU。

4. **Provider 特定的行为差异** — Codex 重连限制 (#12124)、Groq 角色验证 (#12134)、Google 思考层级映射 (#12184)、Anthropic 速率限制 (#9849) 造成了一**系列权宜之计**，增加了 extension 作者的负担。

5. **Headless/Headful 模式分歧** — `pi -p` 在加载 extension 时挂起 (#12241)，这是之前修复的回归。CI/CD 和嵌入用例损坏，而交互模式正常。

6. **全屏模式性能** — 在低核心数机器上，全屏滚动和调整大小可能使单个核心饱和 (#9549)。部分修复 (#11968) 改善了滚动，但调整大小和螺旋桨的成本仍未解决。

7. **模型目录过时** — `pi update --models` 跳过内置 extension 注册的 provider (#12248)。使用自定义 extension provider 的用户会错过模型更新。

---

*日报数据来源：[earendil-works/pi](https://github.com/earendil-works/pi) GitHub 数据，2026-11-17。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate an English technical digest about Qwen Code community into Simplified Chinese. Let me go through the content carefully and translate it while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates verbatim
4. Keep project names, usernames, version tags, etc. as-is
5. Use natural technical Chinese register

Let me translate section by section:

**Title**: Qwen Code Community Digest — 2026-11-17
→ Qwen Code 社区日报 — 2026-11-17

**Section 1: Today's Highlights**
The community is actively tackling two major initiatives: landing the **1.0 Preview event-bus kernel** on `main` (Issue [#17045](https://github.com/QwenLM/qwen-code/issues/17045)) and stabilizing the CI/CD pipeline, which is generating an unusually high volume of automated failure tickets. A new **qwen4-max** model adapter ([#17513](https://github.com/QwenLM/qwen-code/pull/17513)) landed today with native effort ladder, cache TTL, and image detail support across all four billing channels. Meanwhile, a **P1 security issue** ([#17371](https://github.com/QwenLM/qwen-code/issues/17371)) is tracking residual risks from a complex PR's land-with-residual-risk decision.

→ 社区正在同时推进两项重大工程：一是将 **1.0 Preview 事件总线内核** 合入 `main` 分支（Issue [#17045](https://github.com/QwenLM/qwen-code/issues/17045)），二是稳定 CI/CD 流水线——后者目前正以异常高的频率产生自动化失败工单。今天还合入了一个新的 **qwen4-max** 模型适配器（[#17513](https://github.com/QwenLM/qwen-code/pull/17513)），在四个计费渠道（ModelStudio Standard、Token Plan、QwenCloud Standard、Qwen Subscription）中原生支持 effort ladder、cache TTL 和 image detail。

与此同时，一个 **P1 安全问题**（[#17371](https://github.com/QwenLM/qwen-code/issues/17371)）正在跟踪某复杂 PR 做出"带残余风险合入"决定后的风险收口情况。

**Section 2: Releases**
→ ## 2. 版本发布

**Table** - keep version numbers, tags as-is:
| Version | Tag | Summary |
| Version | Tag | Summary |
| Nightly | Nightly | Latest nightly build. Includes sidebar workspace filter for web-shell (PR [#17244](https://github.com/QwenLM/qwen-code/pull/17244)) and a new DingTalk managed-channel adapter. |
| Nightly | Nightly | Latest nightly build. Includes sidebar workspace filter for web-shell (PR [#17244](https://github.com/QwenLM/qwen-code/pull/17244)) and a new DingTalk managed-channel adapter. |

The web-shell now has a sidebar workspace filter, and a new DingTalk managed-channel adapter has been integrated.

**Section 3: Hot Issues**
→ ## 3. 热门工单

| # | Issue | Priority | Why It Matters | Comments |
|---|-------|----------|----------------|----------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | **Main CI failed: Managed Agent gate — no test identified** | P1 | Persistent CI flakiness with 6+ recurring failure markers; blocks the main branch. | 413 |
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | **Main CI failed: Managed Agent gate — no test identified** | P1 | Persistent CI flakiness with 6+ recurring failure markers; blocks the main branch. | 413 |

The CI is experiencing persistent flakiness with multiple recurring failure markers that are blocking the main branch. This is causing significant delays in the development workflow.

The E2E suite on Linux/docker shard fails before test results are reported, indicating a harness or environment issue. The automated security scanning is consistently failing, potentially masking new vulnerabilities. Windows-latest + Node 22.x test step fails silently with the same pattern as the previous issues. The biggest architectural change of the cycle involves rebuilding the agent loop as an event-driven kernel behind a single query() entry point, with progress tracked surface-by-surface. A complex security-related PR (#17185) landed with acknowledged residual risk that needs monitoring. A managed config resource is committed without its closure, dropping its bundle, root snapshot, and acknowledgements from persistence. Users on qwen4.0-max-preview with reasoning effort enabled hit a hard validation error when thinking_budget exceeds max_completion_tokens. The intelligent UI needs expansion beyond demos or side-panel previews to offer full contextual assistance with text, interactive components, or HTML visualizations. A v0.24.0 regression causes ConPTY and headless xterm capture to pad every line to terminal width, inflating token usage and polluting model input.

Recent work includes adding first-class qwen4-max support across all four channels with native effort ladder, cache TTL, and image detail. The web-shell's change overview commit fallback now lists only commits since the session's immutable start. The managed agent now waits for the workspace to become ready instead of failing with hosted_harness_unavailable. GitHub has been added as a third managed channel alongside email and DingTalk, polling the bot's notifications and admitting @mention comments on issues/PRs.

The broker URL refactoring enforces canonical http(s) origin spelling with stdlib canonicalization. Headless sessions now use the shared agent loop and event-bus kernel by default as part of the #17045 migration plan. An Aone Code channel plugin follows the reference plugin pattern. Background async hook output now reaches the model instead of accumulating silently in the async registry. Sessions in trusted Git workspaces default to isolated worktrees with lazy creation, branch and handoff support. A new context-remaining tool reports context window, tokens used/remaining, and auto-compaction firing level with self-triggered compaction. The most-requested directions include intelligent, adaptive UI features like completing the experimental intelligent UI with stateful interactions and explaining background tasks.

Additional directions include migrating to a 1.0 event-bus kernel as a major initiative, implementing Codex-style managed worktree sessions for session parity, expanding managed channels, building context management and token budgets, adding accessibility and screen-reader support, and growing MCP ecosystem integration with Keenable web search. CI/CD instability is the highest-frequency pain point, with an unusually high number of automated "Main CI failed" issues being generated across E2E Tests, Managed Agent gate, SDK Java tests, and bun-pty tests. Managed Agent runtime provisioning appears to be another critical pain point.

The system has multiple failure modes: sessions fail with `hosted_harness_unavailable` while the Workspace runtime is still spinning up, sessions get stuck in `RECOVERY_BLOCKED` with no recovery path, and managed-config installs commit without full closure. PR #17516 directly addresses the first symptom. Windows shell output corruption is a known regression where `run_shell_command` on Windows pads every line with trailing spaces to terminal width, wasting 26–34% of model input as whitespace with no PR yet addressing this. Subscription model token configuration reveals that the default `thinking_budget` for subscription models conflicts with `max_completion_tokens`, causing a hard validation error when users enable reasoning effort. Private-CA HTTPS in bundled environments is also problematic.

The pinned bundled undici dispatcher ignores `NODE_EXTRA_CA_CERTS`, breaking provider calls to private-CA endpoints while the built-in `fetch()` works fine—this affects enterprise and deployment scenarios. Background async hook output was accumulating without reaching the model, a latent defect (L11) now fixed in PR #17477. CLI login on headless Linux gets stuck in login verification when authenticating via a browser on another machine. The digest was generated from GitHub data for the QwenLM/qwen-code repository on 2026-11-17.
</think>


# Qwen Code 社区日报 — 2026-11-17

---

## 1. 今日要点

社区正在同时推进两项重大工程：一是将 **1.0 Preview 事件总线内核** 合入 `main` 分支（Issue [#17045](https://github.com/QwenLM/qwen-code/issues/17045)），二是稳定 CI/CD 流水线——后者目前正以异常高的频率产生自动化失败工单。今天还合入了一个新的 **qwen4-max** 模型适配器（[#17513](https://github.com/QwenLM/qwen-code/pull/17513)），在四个计费渠道（ModelStudio Standard、Token Plan、QwenCloud Standard、Qwen Subscription）中原生支持 effort ladder、cache TTL 和 image detail。与此同时，一个 **P1 安全问题**（[#17371](https://github.com/QwenLM/qwen-code/issues/17371)）正在跟踪某复杂 PR 做出"带残余风险合入"决定后的风险收口情况。

---

## 2. 版本发布

| 版本 | 标签 | 概要 |
|------|------|------|
| **v0.27.4-nightly.20261116.eb3a599ef3** | Nightly | 最新每日构建。新增 web-shell 侧边栏工作区筛选器（PR [#17244](https://github.com/QwenLM/qwen-code/pull/17244)）和新的钉钉托管渠道适配器。 |

---

## 3. 热门工单

| # | 工单 | 优先级 | 为何重要 | 评论数 |
|---|------|--------|----------|--------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | **Main CI failed: Managed Agent gate — 未定位到具体测试** | P1 | CI 持续不稳定，存在 6 个以上重复失败标记；阻塞主分支。 | 413 |
| [#11680](https://github.com/QwenLM/qwen-code/issues/11680) | **Main CI failed: E2E Tests — 未定位到具体测试** | P1 | Linux/docker 分片上 E2E 套件在测试结果上报前就失败了，疑似测试框架或环境问题。 | 63 |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | **Daily dependency CVE audit failed** | P2 | 自动化安全扫描持续失败，可能掩盖新增漏洞。 | 54 |
| [#11678](https://github.com/QwenLM/qwen-code/issues/11678) | **Main CI failed: Qwen Code CI — 未定位到具体测试** | P1 | Windows-latest + Node 22.x 测试步骤静默失败；与 #14724/#11680 属同类模式。 | 35 |
| [#17045](https://github.com/QwenLM/qwen-code/issues/17045) | **追踪将 1.0 Preview 循环内核合入 main** | P1 | 本周期最大的架构变更：将 agent loop 重构为 `query()` 单一入口的事件驱动内核。逐层追踪进展。 | 22 |
| [#17371](https://github.com/QwenLM/qwen-code/issues/17371) | **verify-pr: 追踪 PR #17185 带残余风险合入后的残余风险** | P1 | 某安全相关 PR（#17185）被以"带残余风险"方式合入；本工单追踪信任边界是否仍然完整。 | 6 |
| [#17467](https://github.com/QwenLM/qwen-code/issues/17467) | **managed-config_install 缺失于 Session Store reference-container** | P1 | 某托管配置资源在提交时未附带完整闭包，导致 bundle、root snapshot 和 acknowledgement 未被持久化。 | 3 |
| [#17258](https://github.com/QwenLM/qwen-code/issues/17258) | **Subscription 模式：thinking_budget 与 max_completion_tokens 冲突** | P1 | qwen4.0-max-preview 用户启用推理 effort 后触发硬验证错误：`max_completion_tokens [4000] 必须大于 thinking_budget [16384]`。 | 3 |
| [#14019](https://github.com/QwenLM/qwen-code/issues/14019) | **Web Shell：完成具备有状态交互能力的实验性智能 UI** | P2 | 提出将智能 UI 从演示/侧边栏预览扩展为完整方案——助手应能根据上下文选择文本、交互组件或 HTML 可视化。 | 6 |
| [#17350](https://github.com/QwenLM/qwen-code/issues/17350) | **Windows：run_shell_command 输出被填充尾随空格（26–34% 为空白）** | P2 | v0.24.0 回归：ConPTY + 无头 xterm 采集时将每行填充至终端宽度，导致 token 浪费且污染模型输入。 | 3 |

---

## 4. 重点 PR 进展

| # | PR | 作者 | 类别 | 变更内容 |
|---|-----|------|------|----------|
| [#17513](https://github.com/QwenLM/qwen-code/pull/17513) | **feat: add qwen4-max support** | doudouOUC | Core | 在全部四个渠道（ModelStudio Standard、Token Plan、QwenCloud Standard、Qwen Subscription）中原生支持 qwen4-max，涵盖 effort ladder、cache TTL 和 image detail。 |
| [#17514](https://github.com/QwenLM/qwen-code/pull/17514) | **fix(web-shell): 将变更概览的 commit 回退范围限定为会话起始点** | wenshao | Web Shell | 修复变更概览中的 commit 回退逻辑，改为仅列出会话不可变起点以来的提交，消除 PR #17378 引入的两个展示残留。 |
| [#17516](https://github.com/QwenLM/qwen-code/pull/17516) | **fix(managed-agent): Workspace 运行时初始化期间延迟准入 Turns** | yiliang114 | Managed Agent | 直接修复 Issue [#17380](https://github.com/QwenLM/qwen-code/issues/17380)：守护进程不再以 `hosted_harness_unavailable` 失败，而是等待 workspace 就绪。 |
| [#17511](https://github.com/QwenLM/qwen-code/pull/17511) | **feat(channels): 将 GitHub 添加为第三个托管渠道适配器** | wenshao | Channels | 新增 GitHub 托管渠道，轮询 bot 的通知列表，将 issues/PRs 中 @mention bot 的评论接入 Session。继 email 和钉钉之后的第三个渠道。 |
| [#17510](https://github.com/QwenLM/qwen-code/pull/17510) | **refactor(managed-agent): 要求规范化的 Broker URL** | doudouOUC | Managed Agent | 强制 Runtime Broker URL 使用规范的 http(s) origin 写法；以 stdlib 规范化替换手写的 IPv4/IPv6 解析。 |
| [#17445](https://github.com/QwenLM/qwen-code/pull/17445) | **feat(core): 默认在事件总线内核上运行无头会话** | qqqys | Core | 无头会话（`-p` 和 stream-json）默认使用共享 agent loop 和事件总线内核——#17045 迁移计划的第 4 步。 |
| [#17442](https://github.com/QwenLM/qwen-code/pull/17442) | **feat(channels): 添加 Aone Code 渠道插件** | wenshao | Channels | 新增 Aone Code 渠道插件，遵循参考插件模式，无需改动核心代码。 |
| [#17477](https://github.com/QwenLM/qwen-code/pull/17477) | **fix(core): 将后台异步 hook 输出送达模型** | wenshao | Core | 修复 L11 缺陷：后台（异步）hook 输出现在能真正送达模型，而非在异步注册表中静默累积。 |
| [#17228](https://github.com/QwenLM/qwen-code/pull/17228) | **feat(web-shell): 实现 Codex 风格托管 worktree 会话** | wenshao | Web Shell | 在可信 Git 工作区中的会话默认使用隔离的 worktree（detached HEAD、惰性创建、branch 与交接支持）——Codex 对齐计划 P1–P5。 |
| [#17320](https://github.com/QwenLM/qwen-code/pull/17320) | **feat(core): 为模型提供 context-remaining 工具** | xxwtiancai | Core | 新增 `get_context_remaining` 工具，报告上下文窗口、已用/剩余 token 数及自动压缩触发级别，并附带自触发压缩路径。 |

---

## 5. 功能需求趋势

以下主题是社区近期最集中的需求方向：

| 主题 | 证据 | 趋势 |
|------|------|------|
| **智能、自适应 UI** | Issue [#14019](https://github.com/QwenLM/qwen-code/issues/14019) — "完成实验性智能 UI"；PR [#17398](https://github.com/QwenLM/qwen-code/pull/17398) — 为后台任务提供说明 | 🚀 活跃开发中 |
| **1.0 事件总线内核迁移** | Issue [#17045](https://github.com/QwenLM/qwen-code/issues/17045) + 跟进 [#17284](https://github.com/QwenLM/qwen-code/issues/17284) | 🚀 重大工程 |
| **Worktree / 会话与 Codex 对齐** | PR [#17228](https://github.com/QwenLM/qwen-code/pull/17228)、Issue [#17237](https://github.com/QwenLM/qwen-code/issues/17237) | 🚀 进行中 |
| **托管渠道扩展** | PR [#17442](https://github.com/QwenLM/qwen-code/pull/17442)（Aone Code）、[#17511](https://github.com/QwenLM/qwen-code/pull/17511)（GitHub） | 🚀 活跃 |
| **上下文管理与 token 预算** | PR [#17320](https://github.com/QwenLM/qwen-code/pull/17320)、Issue [#17258](https://github.com/QwenLM/qwen-code/issues/17258) | 🆕 新兴 |
| **无障碍 / 屏幕阅读器支持** | PR [#17500](https://github.com/QwenLM/qwen-code/pull/17500) | 🆕 新增 |
| **MCP 生态集成** | Issue [#17512](https://github.com/QwenLM/qwen-code/issues/17512)（MCP ServerList 收录）、Issue [#16204](https://github.com/QwenLM/qwen-code/issues/16204)（Keenable 网页搜索） | 📈 增长中 |

---

## 6. 开发者痛点

以下摩擦点在工单和 PR 中反复出现：

### 🔴 CI/CD 持续不稳定（高频）
自动化生成的"Main CI failed"工单异常之多（见 [#14724](https://github.com/QwenLM/qwen-code/issues/14724)、[#11680](https://github.com/QwenLM/qwen-code/issues/11680)、[#11678](https://github.com/QwenLM/qwen-code/issues/11678)、[#14104](https://github.com/QwenLM/qwen-code/issues/14104)、[#16091](https://github.com/QwenLM/qwen-code/issues/16091)、[#17490](https://github.com/QwenLM/qwen-code/issues/17490)）。Bot 的失败检测正常运行，但底层的不稳定性正在阻塞开发效率。根因横跨 E2E Tests、Managed Agent gate、SDK Java 测试和 bun-pty 测试。

### 🔴 Managed Agent 运行时初始化
多个工单指向脆弱的初始化序列：Workspace 运行时尚未就绪时会话便以 `hosted_harness_unavailable` 失败（[#17380](https://github.com/QwenLM/qwen-code/issues/17380)）、会话陷入 `RECOVERY_BLOCKED` 且无用户恢复路径（[#17383](https://github.com/QwenLM/qwen-code/issues/17383)），以及 `managed-config_install` 提交时未附带完整闭包（[#17467](https://github.com/QwenLM/qwen-code/issues/17467)）。PR [#17516](https://github.com/QwenLM/qwen-code/pull/17516) 直接修复了第一个症状。

### 🟠 Windows Shell 输出污染
Issue [#17350](https://github.com/QwenLM/qwen-code/issues/17350) 记录了 v0.24.0 回归：Windows 上 `run_shell_command` 将每行填充至终端宽度——浪费 26–34% 的模型输入为空白。目前尚无 PR 修复此问题。

### 🟠 Subscription 模式 token 配置
Issue [#17258](https://github.com/QwenLM/qwen-code/issues/17258) 揭示 subscription 模式的默认 `thinking_budget` 与 `max_completion_tokens` 冲突，导致启用推理 effort 的用户遇到硬验证错误。这是影响付费客户的 UX 和配置问题。

### 🟠 打包环境中私有 CA 的 HTTPS
Issue [#17501](https://github.com/QwenLM/qwen-code/issues/17501) 表明固定的打包版 undici dispatcher 忽略了 `NODE_EXTRA_CA_CERTS`，导致调用私有 CA 端点时失败，而内置 `fetch()` 正常工作。此问题影响企业/部署场景。

### 🟡 异步 Hook 输出未能送达模型
一个潜在缺陷（L11）：后台异步 hook 输出累积但不送达模型——已在 PR [#17477](https://github.com/QwenLM/qwen-code/pull/17514) 中修复。

### 🟡 无头 Linux 上的 CLI 登录
Issue [#17038](https://github.com/QwenLM/qwen-code/issues/17038)（现已关闭）描述了在另一台机器上通过浏览器认证时，CLI 在无头 Linux 上卡在登录验证状态。

---

*本日报数据来源于 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) 仓库，日期 2026-11-17。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*