# AI CLI 工具社区动态日报 2026-10-07

> 生成时间: 2026-10-07 01:46 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the entire report from English to Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Use natural technical Chinese - the register of a Chinese developer newsletter
4. Keep all technical identifiers, URLs, code references, version numbers as-is
5. Keep emojis

Let me translate this carefully while maintaining the technical register and structure.</think>

# AI CLI 工具生态 — 跨工具对比报告

**日期：** 2026年10月7日

---

## 1. 生态概览

AI 编程助手 CLI 领域已发展成为一个高度竞争但碎片化的市场。目前七款主流工具竞相争夺开发者关注，每款工具都采取不同的架构策略——从 Anthropic 的工具优先式 Claude Code，到 Qwen Code 的托管 Agent 扩展运行时。各工具的共同点：Windows 平台一致性仍是难题，身份验证/OAuth 复杂度是普遍痛点，而会话持久性（检查点、恢复、记录管理）则是主导性的工程挑战。市场正在向"Agent 即平台"范式收敛，各厂商竞相构建可扩展的运行时系统，支持自定义工具、钩子和多 Agent 协作。

---

## 2. 活跃度对比

| 工具 | 仓库 | 发布 (24h) | Issue (30d) | PR (30d) | Discussions | 备注 |
|------|------------|----------------|--------------|-----------|-------------|-------|
| **Claude Code** | anthropics/claude-code | 2 | ~50+ | ~20+ | N/A | 启用 Issue/PR；上游禁用 Discussions |
| **OpenAI Codex** | openai/codex | 2 | ~50 | ~20+ | 18 | 全渠道活跃 |
| **Gemini CLI** | google-gemini/gemini-cli | 3 | ~30 | ~15+ | N/A | 启用 Issue/PR；讨论区活跃度低 |
| **GitHub Copilot CLI** | github/copilot-cli | 3 | ~30 | ~5 | N/A | 启用 Issue/PR；近期 PR 较少 |
| **OpenCode** | anomalyco/opencode | 1 | ~50 | ~15+ | N/A | 启用 Issue/PR；上游禁用 Discussions |
| **Pi** | earendil-works/pi | 0 | ~50 | ~23 | 2 | 启用 Issue/PR；讨论区活跃度低 |
| **Qwen Code** | QwenLM/qwen-code | 1 | ~50 | ~20+ | N/A | 启用 Issue/PR；上游禁用 Discussions |

---

## 3. 共同功能方向

### 身份验证与 OAuth 基础设施

- **涉及工具：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi
- **需求：** OAuth 令牌复用、凭据版本迁移、多账户支持、协议版本降级

### Windows 平台一致性

- **涉及工具：** Claude Code (#66291, #73107)、OpenAI Codex (#49458, #49477)、GitHub Copilot CLI (#5068)、OpenCode (#10519)、Pi (#10558)、Qwen Code
- **需求：** 统一的 exec 可靠性、沙箱权限、剪贴板处理、路径大小写敏感、Entra/Azure 集成

### 会话持久性与恢复

- **涉及工具：** Claude Code（上一条消息丢失回归）、Gemini CLI（会话恢复）、OpenCode（配额共享）、Pi（上下文预算）、Qwen Code（记录大小限制）
- **需求：** 检查点机制、记录边界、优雅降级、跨会话状态

### 多 Agent 与扩展运行时

- **涉及工具：** Claude Code（子 Agent）、Gemini CLI（技能/子 Agent）、Qwen Code（Stage H 托管 Agent）、Pi（持久化）
- **需求：** 钩子、子会话、生命周期管理、工具作用域

### MCP 服务器集成

- **涉及工具：** 所有支持 MCP 的工具
- **需求：** OAuth 可靠性、询问处理、动态注册、凭据持久化

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------------|--------------|-------------------|
| **Claude Code** | 工具优先的 Agent 编程 | 偏好显式工具控制的开发者 | 最小抽象层；直接 MCP/服务器集成 |
| **OpenAI Codex** | 计算机使用、云端任务 | 从 ChatGPT 扩展到 CLI 的用户 | 重注计算机自动化 |
| **Gemini CLI** | Google 生态集成 | Google Cloud/AI 用户 | A2A/ACP 协议、Bedrock/Vertex 支持 |
| **GitHub Copilot CLI** | 企业合规、权限控制 | 有严格组织策略的企业开发者 | 权限边界、模型选择器、Zen API |
| **OpenCode** | 供应商灵活性、开源 | 价格敏感、自托管用户 | 多供应商、预算追踪、本地优先 |
| **Pi** | 持久化、压缩 | 长时间会话用户 | 上下文内压缩、思考层级控制 |
| **Qwen Code** | 托管 Agent 扩展 | 构建自定义 Agent 的高级用户 | 扩展运行时（Stage H）、LSP 集成 |

---

## 5. 社区活力与成熟度

### 最活跃（高 Issue/PR 量、频繁发布）

| 排名 | 工具 | 活跃信号 |
|------|------|---------|
| 1 | **OpenAI Codex** | 2 次发布、10 个关键 PR、18 条讨论、问题来源多样 |
| 2 | **OpenCode** | 1 次发布、10+ 个 PR、头部 Issue 有 137 条评论，互动度高 |
| 3 | **Qwen Code** | 1 次发布、20+ 个 PR、托管 Agent 路线图持续引发关注 |

### 快速迭代（发布速度）

| 排名 | 工具 | 发布次数 (7d) |
|------|------|---------------|
| 1 | **Gemini CLI** | 7+ 次夜间/预览版发布 |
| 2 | **GitHub Copilot CLI** | 5+ 次补丁发布 |
| 3 | **OpenAI Codex** | 多个 alpha 版本 |

### 发展中/进行中

| 工具 | 成熟度信号 |
|------|-------------------|
| **Pi** | PR 开发活跃（23 个）但无近期发布——可能处于重构周期 |
| **Claude Code** | 稳定，专注于 bug 修复发布；实验性功能较少 |

---

## 6. 行业趋势信号

### 来自社区反馈

1. **Agent 生命周期管理是下一个前沿**
   - Qwen Code 的 Stage H 运行时、Gemini CLI 的持久化会话、Pi 的压缩功能——所有人都在构建长期运行、可恢复的 Agent 工作流基础设施
   - *信号：* 这将在 12 个月内成为 commoditized 功能

2. **Windows 仍是"另一个平台"**
   - 每个工具都有未解决的 Windows 特定问题（路径、剪贴板、沙箱、身份验证）
   - *信号：* 预计还需 6-12 个月的 Windows 一致性工作；企业采用取决于这一点

3. **身份验证是最大的用户摩擦点**
   - OAuth 循环、凭据持久化、多账户处理等问题占据投诉主导
   - *信号：* 厂商现在正投资身份验证基础设施；预计 2026 年 Q1 简化 onboarding

4. **上下文窗口经济是真实的**
   - Pi 的 maxTokens 上下文预算忽略、Qwen Code 的 256 MiB 记录限制、OpenCode 的配额共享
   - *信号：* 压缩、摘要和上下文管理正成为差异化功能

5. **MCP 正在成为标配**
   - 所有工具都支持 MCP；差异化现在体现在 OAuth 可靠性、询问处理、凭据迁移
   - *信号：* MCP 生态锁止正在进行；拥有更好 MCP 体验的工具将赢得开发者

6. **自托管与 BYOK 正在增长**
   - OpenCode 的预算追踪、GitHub Copilot CLI 的企业权限、Gemini CLI 的 Bedrock 支持
   - *信号：* 注重隐私的用户和企业用户是增长中的细分市场；预计更多 BYOK 选项

---

*报告基于七个工具的 GitHub 数据生成 — 2026年10月7日*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the Claude Code Skills Community Highlights Report into Chinese. I need to:
1. Translate all the content into Chinese
2. Keep the Markdown structure exactly as is
3. Preserve URLs, numbers, code references, issue/PR numbers
4. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate each section:

---

# Claude Code Skills 社区亮点报告

*数据截至 2026-10-07*

---

## 1. 技能排行榜

*注：数据集中 Pull Request 的评论数未填充。根据活跃度、功能特性及影响力进行排序。*

| # | PR | 作者 | 功能特性 | 状态 |
|---|-----|--------|---------------|--------|
| 1 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | ProofCore-Protocol | 自动化静态分析 Solidity/Rust 智能合约；通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | 开放 |
| 2 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 70v-Yoyo | 零成本技能，可将 Markdown 编译成专业 MP4 视频，配有逼真的真人语音旁白（基于 Marp） | 开放 |
| 3 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | ksgisang | 开源 E2E 测试工具，赋予 Claude 视觉和浏览器控制能力；零代码测试生成 | 开放 |


| 4 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation | mrdesouzaphd-cmyk | 将产品/技术规格转化为具体的 Notion 任务；将规格分解为详细的实施计划和验收标准 | 开放 |
| 5 | **[#525](https://github.com/anthropics/skills/pull/525)** - pyxel | kitao | Python 复古游戏开发技能；指导实现、无头输入驱动运行、帧检查 | 开放 |
| 6 | **[#1615](https://github.com/anthropics/skills/pull/1615)** - scnet-hpc | lql341 | 基于配置文件的 SSH/Slurm 工作流，支持 SCNet HPC 集群；任务生成和计算节点管理 | 开放 |
| 7 | **[#1776](https://github.com/anthropics/skills/pull/1776)** - blast-radius | kishormorol | 批量/破坏性操作（归档、撤销权限、批量删除）的安全检查清单 | 开放 |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** - document-typography | PGTBoos | 防止 AI 生成文档中的排版问题：孤行/寡行、编号错位 | 开放 |

## 2. 社区需求趋势

*基于高互动 Issues 统计：*

| Issue | 主题 | 核心需求 |
|-------|-------|----------|
| **[#492](https://github.com/anthropics/skills/issues/492)** (43 条评论) | **安全与信任** | anthropic/ 命名空间下的社区技能引发信任边界滥用问题；需要明确的命名空间隔离或验证机制 |
| **[#228](https://github.com/anthropics/skills/issues/228)** (16 条评论) | **团队级共享** | 在 Claude.ai 中实现组织级别的技能共享；消除通过 Slack/Teams 手动传输文件 |
| **[#556](https://github.com/anthropics/skills/issues/556)** (12 条评论) | **评估基础设施** | `run_eval.py` 未能触发技能（0% 触发率）；评估流程中断导致技能验证受阻 |

现在需要处理剩余的需求趋势内容，包括上下文管理、安全加固等方面，以及确定最集中的需求类别。

*活跃 PR 中按潜在影响排序：*

| PR | 重点领域 | 重要性 |
|----|------------|----------|
| **[#1980](https://github.com/anthropics/skills/pull/1980)** - webapp-testing: 避免 shell=True | 安全性 | 修复 with_server.py 中的命令注入漏洞（CWE-78） |
| **[#1961](https://github.com/anthropics/skills/pull/1961)** - skill-creator: 加固 eval viewer | 安全性 | 缓解脚本逃逸、DNS 重新绑定、跨站 POST、转义风险 |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** - mcp-builder: MCP v2 支持 | 兼容性 | 更新 `streamable_http_client` 重命名及 mcp>=2.0.0 自定义头支持 |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** - skill-creator: 隔离触发评估 | 可靠性 | 修复误判、Windows 兼容性、运行时故障处理 |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** - docx: 验证 LibreOffice 输出 | 质量保证 | 验证 DOCX 修订标记在声明成功前已清除 |

## 4. 技能生态系统洞察

> **社区最集中的需求集中在安全加固和企业级协作功能** — 特别是命名空间信任边界、组织级技能共享、安全的技能评估基础设施 — 同时对垂直领域专业技能（智能合约、HPC、端到端测试、视频生成）的兴趣也在增长。

---

*报告基于 GitHub 仓库数据生成。如需实时更新，请访问：https://github.com/anthropics/skills*</think>

# Claude Code Skills 社区亮点报告

*数据截至 2026-10-07*

---

## 1. 技能排行榜

*注：数据集中 Pull Request 的评论数未填充。根据活跃度、功能特性及影响力进行排序。*

| # | PR | 作者 | 功能特性 | 状态 |
|---|-----|--------|---------------|--------|
| 1 | **[#1771](https://github.com/anthropics/skills/pull/1771)** - proofcore-contract-auditor | ProofCore-Protocol | 自动化静态分析 Solidity/Rust 智能合约；通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链 | 开放 |
| 2 | **[#1703](https://github.com/anthropics/skills/pull/1703)** - md2video-audio | 70v-Yoyo | 零成本技能，可将 Markdown 编译成专业 MP4 视频，配有逼真的真人语音旁白（基于 Marp） | 开放 |
| 3 | **[#822](https://github.com/anthropics/skills/pull/822)** - AWT (AI Watch Tester) | ksgisang | 开源 E2E 测试工具，赋予 Claude 视觉和浏览器控制能力；零代码测试生成 | 开放 |
| 4 | **[#1245](https://github.com/anthropics/skills/pull/1245)** - notion-spec-to-implementation | mrdesouzaphd-cmyk | 将产品/技术规格转化为具体的 Notion 任务；将规格分解为详细的实施计划和验收标准 | 开放 |
| 5 | **[#525](https://github.com/anthropics/skills/pull/525)** - pyxel | kitao | Python 复古游戏开发技能；指导实现、无头输入驱动运行、帧检查 | 开放 |
| 6 | **[#1615](https://github.com/anthropics/skills/pull/1615)** - scnet-hpc | lql341 | 基于配置文件的 SSH/Slurm 工作流，用于 SCNet HPC 集群；任务生成和计算节点管理 | 开放 |
| 7 | **[#1776](https://github.com/anthropics/skills/pull/1776)** - blast-radius | kishormorol | 批量/破坏性操作（归档、撤销权限、批量删除）的安全检查清单 | 开放 |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** - document-typography | PGTBoos | 防止 AI 生成文档中的排版问题：孤行/寡行、编号错位 | 开放 |

---

## 2. 社区需求趋势

*基于高互动 Issues 统计：*

| Issue | 主题 | 核心需求 |
|-------|-------|----------|
| **[#492](https://github.com/anthropics/skills/issues/492)** (43 条评论) | **安全与信任** | `anthropic/` 命名空间下的社区技能引发信任边界滥用问题；需要明确的命名空间隔离或验证机制 |
| **[#228](https://github.com/anthropics/skills/issues/228)** (16 条评论) | **组织级共享** | 在 Claude.ai 中实现组织级别的技能共享；消除通过 Slack/Teams 手动传输文件 |
| **[#556](https://github.com/anthropics/skills/issues/556)** (12 条评论) | **评估基础设施** | `run_eval.py` 未能触发技能（0% 触发率）；评估流程中断导致技能验证受阻 |
| **[#1487](https://github.com/anthropics/skills/issues/1487)** (4 条评论) | **上下文管理** | `claude-api` 技能注入约 156k tokens，单次调用即耗尽上下文窗口 |
| **[#1394](https://github.com/anthropics/skills/issues/1394)** (4 条评论) | **安全加固** | skill-creator eval-viewer 中存在 XSS 漏洞（escapeHtml 不支持属性转义） |

**需求集中领域：**
1. **安全与信任边界** — 命名空间验证、安全的技能执行
2. **企业协作** — 组织级技能共享与分发
3. **评估与测试** — 可靠的技能触发检测与基准测试
4. **上下文效率** — 按需加载技能的 token 感知机制

---

## 3. 高潜力待发布技能

*活跃 PR 中按潜在影响排序：*

| PR | 重点领域 | 重要性 |
|----|------------|----------|
| **[#1980](https://github.com/anthropics/skills/pull/1980)** - webapp-testing: 避免 shell=True | 安全性 | 修复 with_server.py 中的命令注入漏洞（CWE-78） |
| **[#1961](https://github.com/anthropics/skills/pull/1961)** - skill-creator: 加固 eval viewer | 安全性 | 缓解脚本逃逸、DNS 重新绑定、跨站 POST、转义风险 |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** - mcp-builder: MCP v2 支持 | 兼容性 | 更新 `streamable_http_client` 重命名及 mcp>=2.0.0 自定义头支持 |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** - skill-creator: 隔离触发评估 | 可靠性 | 修复误判、Windows 兼容性、运行时故障处理 |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** - docx: 验证 LibreOffice 输出 | 质量保证 | 验证 DOCX 修订标记在声明成功前已清除 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求集中在安全加固和企业级协作功能** — 特别是命名空间信任边界、组织级技能共享、安全的技能评估基础设施 — 同时对垂直领域专业技能（智能合约、HPC、端到端测试、视频生成）的兴趣也在增长。

---

*报告基于 GitHub 仓库数据生成。如需实时更新，请访问：https://github.com/anthropics/skills*

---

<think>The user wants me to translate the Claude Code Community Digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

**Title:**
# Claude Code 社区简报

**Date:** 2026-10-07
**Source:** github.com/anthropics/claude-code

---

## 1. 今日要闻

两个新的补丁版本修复了关键回归问题：v2.1.291 修复了云会话可能丢失权限提示答案的 bug，v2.1.292 引入了新的 `--marketplace` 参数用于插件安装，并为 Agent 工具添加了 `effort` 参数。与此同时，社区参与热度不减，issue #27302（多连接器账户支持）收到了 262 条评论和 402 个赞——表明对改进多账户管理的需求强烈。

---

## 2. 版本更新

### v2.1.292
- 为 `claude plugin install` 添加了 `--marketplace <source>` 参数：必要时自动添加 marketplace（在 `claude plugin marketplace add` 相同的策略检查下）然后安装插件
- 为 Agent 工具添加了 `effort` 参数，使子代理能够以可配置的努力级别运行

### v2.1.291
- 修复了 2.1.290 中的回归问题：云会话可能丢失权限提示的答案


- 修复了 2.1.288 中的回归问题：退出时可能丢失会话的最后几条消息

---

## 3. 热门 Issue

| # | Issue | 评论 | 👍 | 为何重要 |
|---|-------|----------|-----|----------------|
| #27302 | **[功能请求] 支持多个连接器账户（同一连接器，不同账户）** | 262 | 402 | 用户希望连接多个 GitHub/Vercel 账户；目前每个连接器限制为一个 |
| #3412 | **允许在提交前查看和编辑"粘贴文本"块的内容** | 87 | 288 | 对听写软件用户至关重要；折叠的粘贴块无法使用 |
| #73107 | **Windows 桌面应用在包升级后无法启动 (0x80070020)** | 20 | 5 | AppX 容器故障阻止 Windows 用户更新；已确定由孤立的提升子进程引起 |
| #72032 | **GitHub 连接器已授权但在聊天中不可用** | 11 | 9 | P0 回归问题破坏了 claude.ai/chat 中的 GitHub 集成 |

，尽管账户级别已授权 |
| #66291 | **VSCode: macOS Ctrl+F 和 Ctrl+P 在聊天输入中不再工作** | 9 | 10 | macOS 原生 Emacs 风格文本绑定在 VS Code 扩展中损坏；影响高级用户 |
| #86198 | **当顾问正在运行时使用斜杠命令 (/effort) 会注入 local_command 记录** | 6 | 0 | 导致会话中出现永久性 400 错误；关键稳定性问题 |
| #89604 | **无头会话将已授权的连接器报告为需要认证** | 3 | 1 | 无头模式下的虚假认证提示；工具实际成功执行但显示错误 |
| #94353

 | **斜杠命令菜单对屏幕阅读器（NVDA）无声** | 3 | 0 | 可访问性回归；Windows 桌面应用斜杠菜单对屏幕阅读器不可见 |
| #89395 | **/diff 面板在不设置 cwd 的情况下运行 git，读取启动目录而非工作树** | 3 | 0 | Git 命令在错误目录执行，破坏了从不同路径启动的会话的 /diff 功能 |
| #96059 | **计划任务的邮件通知静默失败** | 3 | 3 | 计划任务的邮件通知不发送；影响工作流自动化 |

---

## 4. 关键 PR 进展

| # | PR | 状态 | 摘要 |
|---|-----|--------|---------|
| #96434 | **security-guidance: 将拒绝和保密文件排除在审查者访问范围之外** | 进行中 | 安全修复：security-guidance 审查排除 Read 拒绝/询问规则覆盖的文件或已知保密文件（.env、密钥）；审查者获得与 `disallowed_tools` 相同的规则，且无 shell 访问权限 |
| #99206 | **diff: 停靠面板从其标题开始，位于引擎自**

己的标题行下方** | 已关闭 | 修复了停靠 /diff 显示：现在正确在上方填充空白行；引擎保留停靠面板的第一行用于关闭标记 |
| #19084 | **fix(ralph-wiggum): 为 stop hook 添加 Windows 兼容性** | 已关闭 | Stop hook 插件现在可在 Windows 上工作；通过添加 Windows 兼容性修复了 `/bin/bash` shebang 问题 |

---

## 5. 功能请求趋势

根据 Issue 分析，最受请求的功能方向是：

1. **多账户连接器支持** — 用户强烈希望能够为同一服务（GitHub、Vercel 等）连接多个账户，通过单独的连接器实例

2. **分类器/策略灵活性** — 了对自动模式分类器行为的精细控制请求，包括：
   - 完全禁用分类器的选项
   - 从硬拒绝回退到权限提示

3. **可访问性改进** — 多个问题突出了可访问性差距：
   - 斜杠命令菜单的屏幕阅读器支持
   - 听写用户的粘贴文本块编辑
   - macOS 原生键绑定兼容性

4. **终端/UI 透明度** — 停靠的插件面板忽略终端透明度设置，破坏了具有半透明终端的用户

5. **后台任务进程隔离** — 需要关键修复以防止后台任务清理杀死不相关的进程（sudo kill 瞄准错误的进程组）

---

## 6. 开发者痛点

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| **Git 操作静默失败或在错误目录运行** | 多个问题 | 破坏 /diff、git 状态超时留下孤立进程 |
| **Windows 升级/启动失败** | #73107, #99503 | 阻止应用使用；Google Drive 虚拟驱动器写入失败 |
| **无头会话认证混淆** | #89604 | 虚假的"需要认证"提示，尽管工具实际工作 |
| **MCP 会话重新初始化丢弃工具调用** | #83655 | 重新连接期间工具调用静默丢弃 |
| **Esc 键语义不一致** | #83698 | 意外终止会话的风险 |
| **聊天输入框单行（Windows 桌面版）** | #98507 | 长提示时眼睛疲劳；无法调整大小 |
| **会话 cwd 静默重置** | #83636 | 钩子收到过时的工作目录，破坏自动化 |

---

*基于 2026-10-07 的 GitHub 数据生成*</think>

# Claude Code 社区简报

**日期：** 2026-10-07
**来源：** github.com/anthropics/claude-code

---

## 1. 今日要闻

两个新的补丁版本修复了关键回归问题：v2.1.291 修复了云会话可能丢失权限提示答案的 bug，v2.1.292 引入了新的 `--marketplace` 参数用于插件安装，并为 Agent 工具添加了 `effort` 参数。与此同时，社区参与热度不减，issue #27302（多连接器账户支持）收到了 262 条评论和 402 个赞——表明对改进多账户管理的需求强烈。

---

## 2. 版本更新

### v2.1.292

- 为 `claude plugin install` 添加了 `--marketplace <source>` 参数：必要时自动添加 marketplace（在 `claude plugin marketplace add` 相同的策略检查下）然后安装插件
- 为 Agent 工具添加了 `effort` 参数，使子代理能够以可配置的努力级别运行

### v2.1.291

- 修复了 2.1.290 中的回归问题：云会话可能丢失权限提示的答案
- 修复了 2.1.288 中的回归问题：退出时可能丢失会话的最后几条消息

---

## 3. 热门 Issue

| # | Issue | 评论 | 👍 | 为何重要 |
|---|-------|----------|-----|----------------|
| #27302 | **[功能请求] 支持多个连接器账户（同一连接器，不同账户）** | 262 | 402 | 用户希望连接多个 GitHub/Vercel 账户；目前每个连接器限制为一个 |
| #3412 | **允许在提交前查看和编辑"粘贴文本"块的内容** | 87 | 288 | 对听写软件用户至关重要；折叠的粘贴块无法使用 |
| #73107 | **Windows 桌面应用在包升级后无法启动 (0x80070020)** | 20 | 5 | AppX 容器故障阻止 Windows 用户更新；已确定由孤立的提升子进程引起 |
| #72032 | **GitHub 连接器已授权但在聊天中不可用** | 11 | 9 | P0 回归问题破坏了 claude.ai/chat 中的 GitHub 集成，尽管账户级别已授权 |
| #66291 | **VSCode: macOS Ctrl+F 和 Ctrl+P 在聊天输入中不再工作** | 9 | 10 | macOS 原生 Emacs 风格文本绑定在 VS Code 扩展中损坏；影响高级用户 |
| #86198 | **当 advisor 正在运行时使用斜杠命令 (/effort) 会注入 local_command 记录** | 6 | 0 | 导致会话中出现永久性 400 错误；关键稳定性问题 |
| #89604 | **无头会话将已授权的连接器报告为需要认证** | 3 | 1 | 无头模式下的虚假认证提示；工具实际成功执行但显示错误 |
| #94353 | **斜杠命令菜单对屏幕阅读器（NVDA）无声** | 3 | 0 | 可访问性回归；Windows 桌面应用斜杠菜单对屏幕阅读器不可见 |
| #89395 | **/diff 面板在不设置 cwd 的情况下运行 git，读取启动目录而非工作树** | 3 | 0 | Git 命令在错误目录执行，破坏了从不同路径启动的会话的 /diff 功能 |
| #96059 | **计划任务的邮件通知静默失败** | 3 | 3 | 计划任务的邮件通知不发送；影响工作流自动化 |
| #92279 | **自动模式：允许分类器阻止回退到权限提示而非硬拒绝** | 3 | 6 | 用户希望对被分类器阻止的操作有更多控制 |
| #83687 | **Stop hook exit-2 判定静默丢弃** | 3 | 0 | 已关闭 |
| #98651 | **Read: pages: "" 对非 PDF 文件验证失败** | 2 | 0 | |
| #99768 | **带 sudo 的后台任务清理会杀死整个进程树** | 2 | 0 | 高优先级；数据丢失风险 |
| #97752 | **Windows: 超时的 git status 留下孤立的 git.exe 进程** | 2 | 1 | |
| #83655 | **MCP 工具调用静默丢弃** | 2 | 0 | 已关闭 |
| #83698 | **Esc 键语义不一致且危险** | 2 | 2 | 已关闭 |
| #100094 | **最大包使用量问题** | 1 | 0 | |
| #100091 | **功能请求：添加禁用分类器的选项** | 1 | 0 | |
| #98507 | **桌面代码标签页：聊天输入框是单行** | 1 | 0 | Windows 桌面应用 UX 问题 |
| #99503 | **线程无法在 Google Drive 虚拟驱动器上写入文件** | 1 | 0 | |
| #100081 | **GitHub 集成问题** | 1 | 0 | |
| #100102 | **停靠的插件窗格渲染不透明背景** | 0 | 0 | |

---

## 4. 关键 PR 进展

| # | PR | 状态 | 摘要 |
|---|-----|--------|---------|
| #96434 | **security-guidance: 将拒绝和保密文件排除在审查者访问范围之外** | OPEN | 安全修复：security-guidance 审查排除 Read 拒绝/询问规则覆盖的文件或已知保密文件（.env、密钥）；审查者获得与 `disallowed_tools` 相同的规则，且无 shell 访问权限 |
| #99206 | **diff: 停靠面板从其标题开始，位于引擎自己的标题行下方** | CLOSED | 修复了停靠 /diff 显示：现在正确在上方填充空白行；引擎保留停靠面板的第一行用于关闭标记 |
| #19084 | **fix(ralph-wiggum): 为 stop hook 添加 Windows 兼容性** | CLOSED | Stop hook 插件现在可在 Windows 上工作；通过添加 Windows 兼容性修复了 `/bin/bash` shebang 问题 |

---

## 5. 功能请求趋势

根据 Issue 分析，最受请求的功能方向是：

1. **多账户连接器支持** — 用户强烈希望能够为同一服务（GitHub、Vercel 等）连接多个账户，通过单独的连接器实例

2. **分类器/策略灵活性** — 对自动模式分类器行为的精细控制请求，包括：
   - 完全禁用分类器的选项
   - 从硬拒绝回退到权限提示

3. **可访问性改进** — 多个问题突出了可访问性差距：
   - 斜杠命令菜单的屏幕阅读器支持
   - 听写用户的粘贴文本块编辑
   - macOS 原生键绑定兼容性

4. **终端/UI 透明度** — 停靠的插件面板忽略终端透明度设置，破坏了具有半透明终端的用户视觉一致性

5. **后台任务进程隔离** — 需要关键修复以防止后台任务清理杀死不相关的进程（sudo kill 瞄准错误的进程组）

---

## 6. 开发者痛点

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| **Git 操作静默失败或在错误目录运行** | 多个问题 (#89395, #97752) | 破坏 /diff、git 状态超时留下孤立进程 |
| **Windows 升级/启动失败** | #73107, #99503 | 阻止应用使用；Google Drive 虚拟驱动器写入失败 |
| **无头会话认证混淆** | #89604 | 虚假的"需要认证"提示，尽管工具实际工作 |
| **MCP 会话重新初始化丢弃工具调用** | #83655 | 重新连接期间工具调用静默丢弃 |
| **Esc 键语义不一致** | #83698 | 意外终止会话的风险 |
| **聊天输入框单行（Windows 桌面版）** | #98507 | 长提示时眼睛疲劳；无法调整大小 |
| **会话 cwd 静默重置** | #83636 | 钩子收到过时的工作目录，破坏自动化 |

---

*基于 2026-10-07 的 GitHub 数据生成*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the GitHub community digest into Simplified Chinese, following the specific rules provided. Let me translate this while:

1. Keeping all the Markdown structure exactly as-is
2. Using natural technical Chinese (中文技术新闻的语调)
3. Preserving URLs, numbers, issue/PR numbers, version tags, etc.
4. Not adding any preamble or explanation
5. Not using markdown code fences around the output

Let me translate section by section:

---

# OpenAI Codex 社区动态
**日期：** 2026年10月7日

---

## 今日要闻

Codex 社区继续聚焦于 Windows 平台的稳定性修复，涉及多个围绕 dot/cloud-computer 集成、sandbox 权限和 MCP 服务器行为的新 issue。过去 24 小时内发布了两款新的 Rust alpha 版本（v0.162.0-alpha.17 和 v0.161.0-alpha.13.1）。目前最活跃的 issue 追踪 Windows 特定的在 dot 启动任务中计算机使用工具的回归问题，已有 60 条评论。一项值得关注的新讨论提议为 Codex 推出 35 美元的开发者套餐，包含更多使用额度。

---

## 发布动态

| 版本 | 备注 |
|---------|-------|
| **rust-v0.162.0-alpha.17** | 最新 alpha 版本 |
| **rust-v0.161.0-alpha.13.1** | 0.161 alpha 系列的增量更新 |

*发布数据中未提供更新日志。*

---

## 热门 Issue

| Issue | 标题 | 评论数 | 关键点 |
|-------|-------|----------|----------------|
| [#49458](https://github.com/openai/codex/issues/49458) | **[Windows] dot 启动的本地任务缺少计算机使用工具** | 60 | 高优先级 Windows 回归问题：dot 启动的本地 Codex 会话失去了计算机使用功能，而普通会话正常工作。影响 ChatGPT 桌面版 v26.928.1915+ 用户。 |
| [#44736](https://github.com/openai/codex/issues/44736) | **Windows: ChatGPT 项目预热锁定本地镜像** | 24 | Windows 启动时清除了 node_repl cwd 变通方案；与 #42215 和 #34499 相关。用户报告 helper-working-directory 锁定持续存在。 |
| [#49682](https://github.com/openai/codex/issues/49682) | **ChatGPT dots: 之前可用的云计算机文件无法访问** | 23 | dot 云计算机文件在会话中途变得不可访问；终端状态也丢失了。后续重启测试未能复现。 |
| [#40596](https://github.com/openai/codex/issues/40596) | **Windows: 统一执行失败，提示 `helper_unknown_error`** | 18 | Codex 应用无法启动统一执行终端，阻

塞了 Windows 上的本地开发工作流。|
| [#49477](https://github.com/openai/codex/issues/49477) | **Windows: 持久任务后续失败，提示 AbsolutePathBuf** | 16 | dot/cloud 创建任务的后续任务在新回合开始前失败，提示 `AbsolutePathBuf 反序列化时缺少基础路径` 错误。|
| [#48500](https://github.com/openai/codex/issues/48500) | **Hooks 错误归属到错误的终端窗格 (0.157 回归)** | 12 | 托管的应用服务器使用第一个客户端的 TMUX_PANE/TMUX 运行 hooks，导致事件归属错误。15 个 👍 表明对开发者影响显著。|
| [#9286](https://github.com/openai/codex/issues/9286) | **Git push --dry-run 失败，SSH 配置显示 Bad owner** | 9 | Sandbox 内的 SSH 配置所有者为 "nobody"，阻止了 git 操作。5 个 👍 表明这是反复出现的痛点。|
| [#50800](https://github.com/openai/codex/issues/50800) | **[macOS/dots] 会话恢复后本地线程工具消失** | 8 | macOS 上恢复会话后，先前可用的 dot 任务失去了本地线程工具。|
| [#50430](https://github.com/openai/codex/issues/50430) | **VS Code 扩展: 聊天停滞 + 听写失败 (403 cloudflare_challenge)** | 7 | VS Code 扩展 (openai.chatgpt) 在首次回复后挂起；听写功能在 Windows 上完全失效。|
| [#40008](https://github.com/openai/codex/issues/40008) | **Android 远程连接 Windows 主机失败** | 7 | 远程功能回归——配对成功但连接失败。影响跨设备工作流。|

---

## 关键 PR 进展

| PR | 标题 | 重要性 |
|----|-------|---------------|
| [#51539](https://github.com/openai/codex/pull/51539) | 添加完成感知的实时附件和会话级分离 | 防止延迟清理关闭替换的实时会话 |
| [#51527](https://github.com/openai/codex/pull/51527) | 扩展 sandbox deny globs 时忽略 ripgrep 配置 | 修复安全漏洞：用户 ripgrep 配置可能抑制 Linux sandbox deny 掩码使用的文件列表 |
| [#51525](https://github.com/openai/codex/pull/51525) | 保持执行器配置读取中的 CLI MXC 偏好 | 允许客户端通过 `features.prefer_mxc` 查看 CLI sandbox 偏好 |
| [#51517](https://github.com/openai/codex/pull/51517) | 将线程持久化意图传递给附件上传 | 区分临时线程上传与持久化持久化 |
| [#51515](https://github.com/openai/codex/pull/51515) | 暴露详细的代理树关闭失败报告 | 改进清理失败诊断，提供具体操作/线程信息 |
| [#51512](https://github.com/openai/codex/pull/51512) | 对齐 Windows sandbox 临时权限与子环境 | 修复通过主机 TEMP 回退绕过只读/拒绝子路径的问题 |
| [#51511](https://github.com/openai/codex/pull/51511) | 修复 Windows 10 驱动器号打开非跟随文件系统操作 | 解决 DOS 驱动器别名作为重解析点被拒绝的问题 |
| [#51510](https://github.com/openai/codex/pull/51510) | 配置重载失败时保留实时 TUI 设置 | 防止过时设置覆盖重载失败后的较新偏好 |
| [#51503](https://github.com/openai/codex/pull/51503) | 向 MCP 贡献者公开选中的环境 | 帮助 MCP 区分不可用的主执行器和就绪的备用执行器 |
| [#51502](https://github.com/openai/codex/pull/51502) | 限制中继连接尝试并处理阻塞写入期间的 pong | 修复阻止重连的卡顿 WebSocket 升级 |

---

## 热门讨论

### 创意

| 讨论 | 摘要 | 👍 |
|------------|---------|-----|
| [#592](https://github.com/openai/codex/discussions/592) | **Web 项目图像生成** – 请求 Codex CLI 利用 GPT-4o 图像生成为 Web 开发自动生成占位符/备用图像 | 112 |
| [#1327](https://github.com/openai/codex/discussions/1327) | **支持其他 VCS (Jujutsu)** – 越来越受欢迎的 Git 兼容版本控制系统；请求 Codex 支持 | 27 |
| [#29203](https://github.com/openai/codex/discussions/29203) | **Codex 管理的私有 Style Profiles 用于 GPT Image 2** – 个性化图像生成的 LoRA 类适配器 | 1 |
| [#51299](https://github.com/openai/codex/discussions/51299) | **支持 Jujutsu (jj) 工作区于桌面审查窗格** – jj 工作区缺少 `.git` 目录，导致审查窗格无法工作 | 1 |
| [#51263](https://github.com/openai/codex/discussions/51263) | **Codex 35 美元开发者套餐** – 介于 Plus 和 Pro 之间的套餐提案，包含 2 倍使用量和更多云端容量 | 1 |

### 问答

| 讨论 | 摘要 | 👍 |
|------------|---------|-----|
| [#51325](https://github.com/openai/codex/discussions/51325) | **[已解答] Codex 远程在安卓手机上无法连接** – QR 码扫描认证后进入登录循环 | 2 |
| [#51047](https://github.com/openai/codex/discussions/51047) | **[已撤回] Codex Windows 应用: 模型选择器与客户端实际发送内容不同** – 用户错误地比较了预热请求 | 1 |
| [#50235](https://github.com/openai/codex/discussions/50235) | **[已解答] Dot 聊天显示已读回执但一直加载中** – 加载指示器但没有回复文本 | 1 |

### 展示与分享

| 讨论 | 摘要 | 👍 |
|------------|---------|-----|
| [#46874](https://github.com/openai/codex/discussions/46874) | **Agent Lint** – 用于 Codex、AGENTS.md、MCP、Claude Code 和 Cursor 配置的开源 linter | 1 |
| [#41527](https://github.com/openai/codex/discussions/41527) | **在 SteamOS 3.8.16 (Steam Deck) 上成功运行原生 ChatGPT Linux 应用** – 在基于 Arch 的系统上运行社区移植版本 | 3 |
| [#51406](https://github.com/openai/codex/discussions/51406) | **No Comment** – 删除 Codex 叙述评论的 PostToolUse hook | 1 |
| [#51359](https://github.com/openai/codex/discussions/51359) | **Catalog Compare** – 使用 Codex 构建的本地 CSV 变更审查应用 | 1 |
| [#50222](https://github.com/openai/codex/discussions/50222) | **QuotaCrew for Codex** – 带配额跟踪和自动切换的 Windows 账户管理器 | 2 |

---

## 功能请求趋势

Issue 和讨论中最常请求的功能：

1. **跨平台稳定性** – Windows 平台问题占据主导；对 Windows、macOS 和 Linux 之间功能对等的强烈需求
2. **扩展 VCS 支持** – 请求在 CLI 和桌面审查窗格中支持 Jujutsu (jj) 版本控制
3. **增强订阅套餐** – 面向开发者的 Plus 和 Pro 之间套餐，包含更高配额
4. **图像生成集成** – 在 Codex 开发工作流中直接利用 GPT-4o 图像能力
5. **样式/定制化** – GPT Image 2 的私有 Style Profiles（LoRA 类适配器）
6. **远程/无头改进** – 更好的 Android 远程连接和跨设备工作流

---

## 开发者痛点

1. **Windows sandbox 和执行失败** – Windows 统一执行、sandbox 临时权限和命令执行挂起的反复问题
2. **Dot/云计算机状态丢失** – 文件和终端状态在会话中途变得不可访问
3. **MCP 环境变量传播** – MCP 服务器环境变量在 Windows 上的问题
4. **Hook 归属错误** – 生命周期 hooks 在错误的终端上下文中运行，导致事件归属错误
5. **Sandbox 内的 SSH/git** – 配置所有者阻止 git 操作
6. **会话恢复失败** – 会话恢复后工具消失，特别是 macOS/dots 上的情况
7. **VS Code 扩展稳定性** – 首次回复后停滞，听写失败，队列 bug 持续存在于多个版本中

---

*数据来源：GitHub – github.com/openai/codex*</think>

# OpenAI Codex 社区动态
**日期：** 2026年10月7日

---

## 今日要闻

Codex 社区继续聚焦于 Windows 平台的稳定性修复，涉及多个围绕 dot/cloud-computer 集成、sandbox 权限和 MCP 服务器行为的新 issue。过去 24 小时内发布了两款新的 Rust alpha 版本（v0.162.0-alpha.17 和 v0.161.0-alpha.13.1）。目前最活跃的 issue 追踪 Windows 特定的在 dot 启动任务中计算机使用工具的回归问题，已有 60 条评论。一项值得关注的新讨论提议为 Codex 推出 35 美元的开发者套餐，包含更多使用额度。

---

## 发布动态

| 版本 | 备注 |
|---------|-------|
| **rust-v0.162.0-alpha.17** | 最新 alpha 版本 |
| **rust-v0.161.0-alpha.13.1** | 0.161 alpha 系列的增量更新 |

*发布数据中未提供更新日志。*

---

## 热门 Issue

| Issue | 标题 | 评论数 | 关键点 |
|-------|-------|----------|----------------|
| [#49458](https://github.com/openai/codex/issues/49458) | **[Windows] dot 启动的本地任务缺少计算机使用工具** | 60 | 高优先级 Windows 回归问题：dot 启动的本地 Codex 会话失去了计算机使用功能，而普通会话正常工作。影响 ChatGPT 桌面版 v26.928.1915+ 用户。 |
| [#44736](https://github.com/openai/codex/issues/44736) | **Windows: ChatGPT 项目预热锁定本地镜像** | 24 | Windows 启动时清除了 node_repl cwd 变通方案；与 #42215 和 #34499 相关。用户报告 helper-working-directory 锁定持续存在。 |
| [#49682](https://github.com/openai/codex/issues/49682) | **ChatGPT dots: 之前可用的云计算机文件无法访问** | 23 | dot 云计算机文件在会话中途变得不可访问；终端状态也丢失了。后续重启测试未能复现。 |
| [#40596](https://github.com/openai/codex/issues/40596) | **Windows: 统一执行失败，提示 `helper_unknown_error`** | 18 | Codex 应用无法启动统一执行终端，阻塞了 Windows 上的本地开发工作流。 |
| [#49477](https://github.com/openai/codex/issues/49477) | **Windows: 持久任务后续失败，提示 AbsolutePathBuf** | 16 | dot/cloud 创建任务的后续任务在新回合开始前失败，提示 `AbsolutePathBuf 反序列化时缺少基础路径` 错误。 |
| [#48500](https://github.com/openai/codex/issues/48500) | **Hooks 错误归属到错误的终端窗格 (0.157 回归)** | 12 | 托管的应用服务器使用第一个客户端的 TMUX_PANE/TMUX 运行 hooks，导致事件归属错误。15 个 👍 表明对开发者影响显著。 |
| [#9286](https://github.com/openai/codex/issues/9286) | **Git push --dry-run 失败，SSH 配置显示 Bad owner** | 9 | Sandbox 内的 SSH 配置所有者为 "nobody"，阻止了 git 操作。5 个 👍 表明这是反复出现的痛点。 |
| [#50800](https://github.com/openai/codex/issues/50800) | **[macOS/dots] 会话恢复后本地线程工具消失** | 8 | macOS 上恢复会话后，先前可用的 dot 任务失去了本地线程工具。 |
| [#50430](https://github.com/openai/codex/issues/50430) | **VS Code 扩展: 聊天停滞 + 听写失败 (403 cloudflare_challenge)** | 7 | VS Code 扩展 (openai.chatgpt) 在首次回复后挂起；听写功能在 Windows 上完全失效。 |
| [#40008](https://github.com/openai/codex/issues/40008) | **Android 远程连接 Windows 主机失败** | 7 | 远程功能回归——配对成功但连接失败。影响跨设备工作流。 |

---

## 关键 PR 进展

| PR | 标题 | 重要性 |
|----|-------|---------------|
| [#51539](https://github.com/openai/codex/pull/51539) | 添加完成感知的实时附件和会话级分离 | 防止延迟清理关闭替换的实时会话 |
| [#51527](https://github.com/openai/codex/pull/51527) | 扩展 sandbox deny globs 时忽略 ripgrep 配置 | 修复安全漏洞：用户 ripgrep 配置可能抑制 Linux sandbox deny 掩码使用的文件列表 |
| [#51525](https://github.com/openai/codex/pull/51525) | 保持执行器配置读取中的 CLI MXC 偏好 | 允许客户端通过 `features.prefer_mcx` 查看 CLI sandbox 偏好 |
| [#51517](https://github.com/openai/codex/pull/51517) | 将线程持久化意图传递给附件上传 | 区分临时线程上传与持久化上传 |
| [#51515](https://github.com/openai/codex/pull/51515) | 暴露详细的代理树关闭失败报告 | 改进清理失败诊断，提供具体操作/线程信息 |
| [#51512](https://github.com/openai/codex/pull/51512) | 对齐 Windows sandbox 临时权限与子环境 | 修复通过主机 TEMP 回退绕过只读/拒绝子路径的问题 |
| [#51511](https://github.com/openai/codex/pull/51511) | 修复 Windows 10 驱动器号打开非跟随文件系统操作 | 解决 DOS 驱动器别名作为重解析点被拒绝的问题 |
| [#51510](https://github.com/openai/codex/pull/51510) | 配置重载失败时保留实时 TUI 设置 | 防止过时设置覆盖重载失败后的较新偏好 |
| [#51503](https://github.com/openai/codex/pull/51503) | 向 MCP 贡献者公开选中的环境 | 帮助 MCP 区分不可用的主执行器和就绪的备用执行器 |
| [#51502](https://github.com/openai/codex/pull/51502) | 限制中继连接尝试并处理阻塞写入期间的 pong | 修复阻止重连的卡顿 WebSocket 升级 |

---

## 热门讨论

### 创意

| 讨论 | 摘要 | 👍 |
|------------|---------|-----|
| [#592](https://github.com/openai/codex/discussions/592) | **Web 项目图像生成** – 请求 Codex CLI 利用 GPT-4o 图像生成为 Web 开发自动生成占位符/备用图像 | 112 |
| [#1327](https://github.com/openai/codex/discussions/1327) | **支持其他 VCS (Jujutsu)** – 越来越受欢迎的 Git 兼容版本控制系统；请求 Codex 支持 | 27 |
| [#29203](https://github.com/openai/codex/discussions/29203) | **Codex 管理的私有 Style Profiles 用于 GPT Image 2** – 个性化图像生成的 LoRA 类适配器 | 1 |
| [#51299](https://github.com/openai/codex/discussions/51299) | **支持 Jujutsu (jj) 工作区于桌面审查窗格** – jj 工作区缺少 `.git` 目录，导致审查窗格无法工作 | 1 |
| [#51263](https://github.com/openai/codex/discussions/51263) | **Codex 35 美元开发者套餐** – 介于 Plus 和 Pro 之间的套餐提案，包含 2 倍使用量和更多云端容量 | 1 |

### 问答

| 讨论 | 摘要 | 👍 |
|------------|---------|-----|
| [#51325](https://github.com/openai/codex/discussions/51325) | **[已解答] Codex 远程在安卓手机上无法连接** – QR 码扫描认证后进入登录循环 | 2 |
| [#51047](https://github.com/openai/codex/discussions/51047) | **[已撤回] Codex Windows 应用: 模型选择器与客户端实际发送内容不同** – 用户错误地比较了预热请求 | 1 |
| [#50235](https://github.com/openai/codex/discussions/50235) | **[已解答] Dot 聊天显示已读回执但一直加载中** – 加载指示器但没有回复文本 | 1 |

### 展示与分享

| 讨论 | 摘要 | 👍 |
|------------|---------|-----|
| [#46874](https://github.com/openai/codex/discussions/46874) | **Agent Lint** – 用于 Codex、AGENTS.md、MCP、Claude Code 和 Cursor 配置的开源 linter | 1 |
| [#41527](https://github.com/openai/codex/discussions/41527) | **在 SteamOS 3.8.16 (Steam Deck) 上成功运行原生 ChatGPT Linux 应用** – 在基于 Arch 的系统上运行社区移植版本 | 3 |
| [#51406](https://github.com/openai/codex/discussions/51406) | **No Comment** – 删除 Codex 叙述评论的 PostToolUse hook | 1 |
| [#51359](https://github.com/openai/codex/discussions/51359) | **Catalog Compare** – 使用 Codex 构建的本地 CSV 变更审查应用 | 1 |
| [#50222](https://github.com/openai/codex/discussions/50222) | **QuotaCrew for Codex** – 带配额跟踪和自动切换的 Windows 账户管理器 | 2 |

---

## 功能请求趋势

Issue 和讨论中最常请求的功能：

1. **跨平台稳定性** – Windows 平台问题占据主导；对 Windows、macOS 和 Linux 之间功能对等的强烈需求
2. **扩展 VCS 支持** – 请求在 CLI 和桌面审查窗格中支持 Jujutsu (jj) 版本控制
3. **增强订阅套餐** – 面向开发者的 Plus 和 Pro 之间套餐，包含更高配额
4. **图像生成集成** – 在 Codex 开发工作流中直接利用 GPT-4o 图像能力
5. **样式/定制化** – GPT Image 2 的私有 Style Profiles（LoRA 类适配器）
6. **远程/无头改进** – 更好的 Android 远程连接和跨设备工作流

---

## 开发者痛点

1. **Windows sandbox 和执行失败** – Windows 统一执行、sandbox 临时权限和命令执行挂起的反复问题
2. **Dot/云计算机状态丢失** – 文件和终端状态在会话中途变得不可访问
3. **MCP 环境变量传播** – MCP 服务器环境变量在 Windows 上的问题
4. **Hook 归属错误** – 生命周期 hooks 在错误的终端上下文中运行，导致事件归属错误
5. **Sandbox 内的 SSH/git** – 配置所有者阻止 git 操作
6. **会话恢复失败** – 会话恢复后工具消失，特别是 macOS/dots 上的情况
7. **VS Code 扩展稳定性** – 首次回复后停滞，听写失败，队列 bug 持续存在于多个版本中

---

*数据来源：GitHub – github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire English digest into Chinese. Let me carefully translate while following the rules:

1. Only output the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly
3. Keep URLs, numbers, dates, code, identifiers as-is
4. Use natural technical Chinese - register of a Chinese developer newsletter

Let me translate section by section:

Title: "Gemini CLI Community Digest — 2026-10-07" → "Gemini CLI 社区摘要 — 2026-10-07"

"Today's Highlights" → "今日要闻"

"The Gemini CLI team has shipped a rapid succession of releases..." → "Gemini CLI 团队近期密集发布了多个版本（v0.63.0、v0.64.0-preview.0 和 v0.65.0-nightly），包含会话处理、身份验证和终端稳定性的关键修复。一个值得注意的 P1 问题报告称，子代理在达到 MAX_TURNS 时仍错误地报告 GOAL 成功，可能掩盖任务中断。依赖方面，74+ npm 包更新已合入，包括 MCP SDK 升级到 v1.31.0。"

Let me continue translating the rest carefully...</think>

# Gemini CLI 社区摘要 — 2026-10-07

## 今日要闻

Gemini CLI 团队近期密集发布了多个版本（v0.63.0、v0.64.0-preview.0 和 v0.65.0-nightly），包含会话处理、身份验证和终端稳定性的关键修复。一个值得注意的 P1 问题报告称，子代理在达到 MAX_TURNS 时仍错误地报告 GOAL 成功，可能掩盖任务中断。依赖方面，74+ npm 包更新已合入，包括 MCP SDK 升级到 v1.31.0。

---

## 版本发布

| 版本 | 日期 | 关键变更 |
|---------|------|-------------|
| **v0.65.0-nightly.20261007.gef59c532f** | 2026-10-07 | 安全修复：在不受信任的文件夹中强制只读工作区设置；核心修复：恢复会话时避免重复的工具响应轮次 |
| **v0.64.0-preview.0** | 2026-10-06 | A2A 服务器 V1→V2 设置迁移；ACP 桥接 `PromptResponse.usage` 与 usage_update 通知 |
| **v0.64.0-nightly.20261006.gfb972b2f8** | 2026-10-06 | 增量夜间构建 |
| **v0.63.0** | 2026-10-06 | CLI 修复：连接恢复期间显示重试进度指示器 |

---

## 热门问题

### P1 — 严重缺陷

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子代理在 MAX_TURNS 后被报告为 GOAL 成功，隐藏了中断  
   *13 条评论 | 优先级 P1*  
   `codebase_investigator` 子代理在达到最大轮次限制前完成分析时，仍错误地报告 `status: "success"` 和 `Termination Reason: "GOAL"`。这掩盖了任务失败。社区反应：2 👍

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通才代理挂起  
   *8 条评论 | 优先级 P1*  
   将任务交给通才代理时 Gemini CLI 无限挂起。简单操作如创建文件夹会挂起长达一小时。社区反应：8 👍 — 今日最高赞问题。

3. **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** — get-shit-done 输出钩子导致崩溃  
   *3 条评论 | 优先级 P1*  
   当 get-shit-done 输出接近完成用户摘要时发生崩溃。

4. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 浏览器子代理在 wayland 上失败  
   *4 条评论 | 优先级 P1*  
   浏览器子代理在 Wayland 显示服务器上失败。

### P2 — 高优先级

5. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 零依赖操作系统沙箱与执行后意图路由  
   *9 条评论 | 优先级 P2*  
   提议利用模型原生 bash 亲和力实现零依赖操作系统沙箱。将在不牺牲用户体验的前提下增强安全性。工作量较大。

6. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知文件读取、搜索和映射的影响  
   *7 条评论 | 优先级 P2*  
   调研 AST 感知工具是否能减少轮次错位和 token 噪音。社区反应：1 👍

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 不够频繁使用技能和子代理  
   *7 条评论 | 优先级 P2*  
   Gemini 无法自主调用自定义技能和子代理，需要用户明确指示。

8. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — 浏览器代理忽略 settings.json 覆盖（如 maxTurns）  
   *4 条评论 | 优先级 P2*  
   浏览器代理完全忽略 `settings.json` 中的配置覆盖。

9. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** — 符号链接的代理文件未被识别  
   *4 条评论 | 优先级 P2*  
   `~/.gemini/agents/filename.md` 符号链接未被识别为代理。

10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** — 工具数量超过 128 时出现 400 错误  
    *3 条评论 | 优先级 P2*  
    当可用工具超过约 128 个时，Gemini CLI 遇到 400 错误。代理应该更智能地限定启用工具的范围。

---

## 关键 PR 进展

| PR | 作者 | 描述 |
|----|--------|-------------|
| **[#29665](https://github.com/google-gemini/gemini-cli/pull/29665)** | elberthc-byte | **[P2]** 修复 IDE 伴侣：明确显示 gVisor 沙箱网络隔离错误，提供清晰诊断而非误导性的 `/ide install` 提示 |
| **[#29655](https://github.com/google-gemini/gemini-cli/pull/29655)** | villahernandez-coder | **[P2]** 修复认证：防止浏览器认证完成后无限验证和 OAuth 重试循环 |
| **[#29612](https://github.com/google-gemini/gemini-cli/pull/29612)** | luisfelipe-alt | **[P2]** 修复核心：强制终端用户轮次不变量，并规范化 `generateContentStream` 的请求内容 |
| **[#29664](https://github.com/google-gemini/gemini-cli/pull/29664)** | dependabot[bot] | **[P1]** 维护：批量更新 74 个 npm 依赖（包括 MCP SDK 1.23→1.31、Octokit 22.0.0→22.0.1） |
| **[#29643](https://github.com/google-gemini/gemini-cli/pull/29643)** | urielefrenvirtusa | 修复 CLI：重新选择 Google 登录时清除缓存的凭据以允许切换账户 |
| **[#29640](https://github.com/google-gemini/gemini-cli/pull/29640)** | jesussamuel-byte | **[P2]** 修复 CLI：使用 Ctrl+O 展开时防止不必要的终端清屏和滚动重置（修复 VTE 终端白屏问题） |
| **[#29616](https://github.com/google-gemini/gemini-cli/pull/29616)** | luisfelipe-alt | **[P1]** 修复核心：将 OAuth 回调 `iss` 参数验证与 RFC 9207 和 MCP 授权规范对齐 |
| **[#29584](https://github.com/google-gemini/gemini-cli/pull/29584)** | villahernandez-coder | **[P1]** 修复核心：防止快速退出时（Ctrl+C、/exit）删除恢复的会话历史 |
| **[#29618](https://github.com/google-gemini/gemini-cli/pull/29618)** | diegogodinezr | **[P1]** 修复核心：恢复会话时避免重复的工具响应轮次 |
| **[#29658](https://github.com/google-gemini/gemini-cli/pull/29658)** | jesussamuel-byte | **[P2]** 修复 CLI：处理 fetchJson 中 GitHub 扩展元数据的 JSON 解析和响应流错误 |

---

## 功能需求趋势

根据问题分析，社区正在推动以下几个方向：

1. **代理自主性与工具链**
   - 更好地利用子代理和自定义技能，无需显式提示
   - AST 感知的文件读取、搜索和代码库映射，以减少 token 冗余
   - 更智能的工具范围限定，防止大量工具时出现 400 错误

2. **安全与沙箱**
   - 带执行后意图路由的零依赖操作系统沙箱
   - 不受信任文件夹中的只读工作区强制（已在最新夜间版中发布）

3. **浏览器/扩展稳定性**
   - 浏览器代理的自动会话接管和锁恢复
   - 正确处理所有代理的 `settings.json` 覆盖
   - Wayland 兼容性修复

4. **会话与状态管理**
   - 通过 `/chat share` 改善子代理轨迹可见性
   - 持久的基于文件的任务跟踪（而非上下文内）
   - 准确的终止报告（GOAL vs. MAX_TURNS）

---

## 开发者痛点

| 痛点 | 频率 | 影响 |
|------------|-----------|--------|
| **代理挂起** | 高（P1 问题） | 调用通才代理时整个工作流被阻塞 |
| **虚假成功报告** | 高（P1 问题 #22323） | 掩盖任务失败，侵蚀对代理结果的信任 |
| **认证循环** | 中等 | 用户陷入无限 OAuth/验证循环 |
| **终端不稳定** | 中等 | Ctrl+O 导致 VTE 终端白屏；调整大小时闪烁 |
| **符号链接代理未被识别** | 中低 | 使用符号链接管理代理文件的开发者失去功能 |
| **临时脚本散落** | 中低 | 模型创建的临时文件造成清理负担 |

---

*基于 GitHub 数据生成 — 2026-10-07*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese. I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep all URLs, issue numbers, version tags, code references as-is
3. Use natural technical Chinese appropriate for a developer newsletter
4. Output ONLY the translation - no preamble, explanation, or markdown fences

Let me translate section by section, keeping the format intact:

- Headings
- Tables
- Lists
- Bold/italic
- Horizontal rules
- Emoji
- Code spans and blocks

I'll maintain the exact structure including the table alignment rows (|---| etc.) and horizontal rules (---).

Let me translate now:</think>

# GitHub Copilot CLI 社区简报

**日期：** 2026-10-07

---

## 1. 今日要闻

Copilot CLI 团队发布了三个增量版本（v1.0.93-1/2/3），重点在企业安全加固方面新增了权限边界功能、模型推荐更新（优先推荐 GPT-6.1 Sol 和 Claude 5.5），以及改进了 MCP 服务器配置的持久化。社区围绕模型可用性和 BYOK 多模型支持的反响热烈，置顶 issue 收到了 57 条评论，反映了组织用户在认证方面遇到的困难。

---

## 2. 版本更新

| 版本 | 变更内容 |
|------|----------|
| **v1.0.93-3** | **改进：** MCP 服务器配置变更现在可以在会话轮次之间应用，无需重启。 |
| **v1.0.93-2** | **新增：** 企业级 `permissions.limitTo` 用于强制网络请求的受管域名边界。<br>**改进：** 模型选择器更新推荐列表，优先推荐 GPT-6.1 Sol、GPT-6 Astra/Luna 和 Claude 5.5。<br>**修复：** GitHub.com Connector 用户可以扩展 GitHub CLI 权限。 |
| **v1.0.93-1** | 常规修复和变更。 |

---

## 3. 热门 Issue

| Issue | 摘要 | 影响范围 | 反馈 |
|-------|------|----------|------|
| [#400](https://github.com/github/copilot-cli/issues/400) | **没有可用模型** — 组织中的用户无法使用 Copilot CLI，尽管在 VSCode/GitHub.com 中可以正常使用。错误提示："请在 GitHub 设置 > Copilot 下检查策略启用状态"。 | **高。** 完全阻止组织用户使用 CLI。57 条评论，34 👍 | 🔥 严重 |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **添加多个 BYOK 模型支持** — 当前仅支持通过环境变量配置单个 BYOK 模型；用户希望在 TUI 中无需重启会话即可切换模型。 | **中。** 需要模型灵活性的高级用户需求。13 条评论，31 👍 | ⭐ 热门 |
| [#4775](https://github.com/github/copilot-cli/issues/4775) | **Mission Control 仪表板链接 404** — 链接指向 `/copilot/tasks/<uuid>` 但会话实际位于 `/agents/tasks/<uuid>`。 | **中。** 导致 Web 仪表板无法正常使用远程会话管理。9 条评论 | 🐛 Bug |
| [#2776](https://github.com/github/copilot-cli/issues/2776) | **Shift+Enter 提交提示词** — 应该是插入换行符而非提交，导致意外触发 agent。 | **中。** 多行提示词编写体验差。7 条评论，3 👍 | 🐛 Bug |
| [#4695](https://github.com/github/copilot-cli/issues/4695) | **MCP OAuth 令牌未复用** — 重复的缓存键导致使用 OAuth/PKCE 的 HTTP MCP 服务器需要重复认证。 | **中。** 造成不必要的认证摩擦。2 条评论 | 🔧 认证 |
| [#4749](https://github.com/github/copilot-cli/issues/4749) | **Azure MCP learn=true 超时** — 分层工具发现调用在 CLI 1.0.83-5 中超时（180秒），在 1.0.80 中正常工作。 | **Azure 用户高。** 破坏 Azure MCP 集成。 | 🐛 回归 |
| [#5039](](https://github.com/github/copilot-cli/issues/5039) | **MCP OAuth HTTP 400** — 当服务器拒绝 `MCP-Protocol-Version` 且没有回退到旧版协议时，登录失败。 | **中。** 阻止特定 MCP 服务器集成。 | 🔧 认证 |
| [#5068](https://github.com/github/copilot-cli/issues/5068) | **Windows Entra 登录失败** — 访问受 Entra ID 保护的 MCP 服务器时认证失败，提示作用域验证错误。 | **Windows 高。** 阻止 Azure DevOps MCP。 | 🐛 平台 |
| [#5061](https://github.com/github/copilot-cli/issues/5061) | **Entra api:// 作用域被拒绝** — CLI 1.0.92 拒绝远程 MCP 服务器的有效 Microsoft Entra 委托作用域。 | **中。** 破坏企业 MCP 集成。 | 🔧 认证 |
| [#5058](https://github.com/github/copilot-cli/issues/5058) | **Datadog MCP OAuth 失败** — OAuth 流程中令牌交换失败，显示 `invalid_grant`。 | **中。** 阻止 Datadog 集成。 | 🔧 认证 |

---

## 4. 关键 PR 进展

过去 24 小时内没有更新 Pull Request。

---

## 5. 热门讨论

数据源中未提供讨论数据。

---

## 6. 功能需求趋势

根据 issue 积压情况，以下功能方向需求最多：

| 类别 | 需求 |
|------|------|
| **多模型支持** | 多个 BYOK 模型、TUI 中模型切换（#3282） |
| **输入/UX 改进** | Shift+Enter 插入换行（#2776）、输入框快捷键（Ctrl+U、全选）（#1785）、回退开关（#5065）、可操作 CLI 输出（#1336） |
| **MCP 增强** | 研究模式访问 MCP 服务器（#3302）、插件 MCP 依赖（#2113）、OAuth 可靠性（#4695、#5039、#5058） |
| **权限细粒度** | 每次调用审批不持久化（#5062）、改进辅助权限（#5066） |
| **远程/会话控制** | 完全禁用 --no-remote（#3022）、使用量检查点令牌追踪（#5065）、缓存预热时显示建议（#5064） |
| **平台修复** | Windows 终端生成 MCP（#1314）、Windows Entra 认证（#5068、#5061） |

---

## 7. 开发者痛点

1. **认证失败问题频发** — 多个 issue（#400、#4695、#5039、#5068、#5061、#5058）反映 OAuth/Entra/令牌缓存问题阻碍了 MCP 服务器访问和组织用户使用。

2. **模型可用性困惑** — #400 issue（57 条评论）表明用户不理解为什么 Copilot 在 VSCode 中可用但 CLI 中不可用，尽管组织策略相同。

3. **Windows 特定回归** — Entra 认证和终端窗口生成问题给 Windows 开发者带来障碍。

4. **MCP 服务器配置繁琐** — 用户希望动态模型切换、OAuth 令牌复用和协议版本回退，目前都需要变通方案。

5. **UX 出乎意料** — Shift+Enter 提交提示词、连续按 Esc 触发回退、`--no-remote` 未完全断开连接等现象表明核心交互还需打磨。

---

*数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest into Chinese. Let me carefully follow the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully:

# OpenCode Community Digest — 2026-10-07

应该翻译为:
# OpenCode 社区速览 — 2026年10月7日

I'll translate all the content while preserving the exact structure and technical terms.</think>

# OpenCode 社区速览 — 2026年10月7日

## 今日焦点

OpenCode v1.18.35 正式发布，新增代理可读的 JSON/Markdown 统计格式，改进 xAI 图像处理。社区正在积极解决用户体验痛点：剪贴板失效、模型配额共享、会话管理优化。多项 PR 聚焦于 UI 优化、压缩算法改进和供应商目录延迟加载——目标在于更快的启动速度和更优质的终端体验。

---

## 版本发布

**v1.18.35** — [Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.35)

- **改进**: 新增规范化重定向和 JSON/Markdown 格式的代理可读统计
- **Bug 修复**: xAI 工具结果现在支持显示可用图像，自动跳过不支持的格式
- **贡献者**: 感谢 @dc85 (文档) 和另外两位贡献者

---

## 热门 Issue

| # | Issue | 摘要 | 评论数 | 👍 |
|---|-------|---------|----------|-----|
| **#4283** | [复制到剪贴板失效](https://github.com/anomalyco/opencode/issues/4283) | 响应中的选中文本无法复制到剪贴板——关键体验回归问题 | 137 | 130 |
| **#49014** | [Go: 5小时使用限制阻止所有模型](https://github.com/anomalyco/opencode/issues/49014) | grok-4.6 达到5小时限制后，*所有* Go 模型都返回相同错误 | 13 | 0 |
| **#52783** | [周配额阻止其他模型使用](https://github.com/anomalyco/opencode/issues/52783) | qwen3.7-plus 达到配额后无法使用其他任何模型 | 9 | 0 |
| **#52837** | [功能建议：为 tool.execute.before 添加 skip 字段](https://github.com/anomalyco/opencode/issues/52837) | 请求确定性预执行门控钩子 | 9 | 4 |
| **#51856** | [MCP Client 缺少 elicitation 处理](https://github.com/anomalyco/opencode/issues/51856) | MCP 声明支持 elicitation.form 但从未处理——工具调用挂起 | 8 | 2 |
| **#36889** | [Go 服务频繁宕机](https://github.com/anomalyco/opencode/issues/36889) | `zen/go/v1` 每天多次出现 HTTP 000/503/524 错误 | 8 | 0 |
| **#49847** | [OpenAI OAuth 使用错误的 API 密钥](https://github.com/anomalyco/opencode/issues/49847) | Zen API 密钥被错误地发送到 ChatGPT OAuth 端点 | 8 | 2 |
| **#51682** | [任意配额达到时 Go 免费模型被阻止](https://github.com/anomalyco/opencode/issues/51682) | 达到任意 Go 限制后"无限"免费模型变得不可用 | 5 | 2 |
| **#49042** | [代理运行 500+ 步且无任何输入](https://github.com/anomalyco/opencode/issues/49042) | 缺少防止自动继续失控的守卫——无限循环 | 3 | 0 |
| **#51949** | [压缩后代理丢失顶级工具](https://github.com/anomalyco/opencode/issues/51949) | 自动压缩后，代理将所有工作路由到代码模式 | 3 | 0 |

---

## 关键 PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| **#53641** | [功能：时间线文件链接确定性检测](https://github.com/anomalyco/opencode/pull/53641) | 多层评分解析时间线中的文件链接 |
| **#53429** | [性能：延迟加载会话消息](https://github.com/anomalyco/opencode/pull/53429) | 打开会话时加载最新消息，按需加载更早消息 |
| **#52869** | [功能：/tui/select-session 定位单一 TUI](https://github.com/anomalyco/opencode/pull/52869) | 修复会话切换影响所有已连接 TUI 的问题 |
| **#53640** | [功能：优化时间线 Markdown 布局](https://github.com/anomalyco/opencode/pull/53640) | 书宽列布局，代码块自动换行 |
| **#53626** | [功能：新增 Bedrock 凭证设置](https://github.com/anomalyco/opencode/pull/53626) | 支持 AWS profile、SSO 和 access-key 配置 |
| **#53625** | [修复：字符串选项内联自定义答案](https://github.com/anomalyco/opencode/pull/53625) | 对话框支持内联自定义输入 |
| **#52816** | [重构：延迟加载供应商目录](https://github.com/anomalyco/opencode/pull/52816) | 仅在需要时加载供应商列表——启动更快 |
| **#53601** | [功能：Anthropic 支持 between_tools thinking](https://github.com/anomalyco/opencode/pull/53601) | 支持新版 Anthropic thinking 模式 |
| **#53088** | [修复：流式 fs.read 支持 Range](https://github.com/anomalyco/opencode/pull/53088) | 支持媒体客户端视频拖动/流式播放 |
| **#53656** | [功能：一键会话中止](https://github.com/anomalyco/opencode/pull/53656) | 新增 `/abort` 命令和快捷键 |

---

## 功能请求趋势

| 类别 | 请求 |
|----------|----------|
| **UI/UX** | 永久布局切换开关 (#38230)、TUI 中 LaTeX 渲染 (#53648)、每个区块显示时间戳 (#42498)、滚动行为修复 (#24760) |
| **会话/配额** | 跨模型配额隔离 (#52783, #49014, #51682)、中止反馈 (#53652)、会话加载限制 (#53642) |
| **集成** | MCP elicitation 支持 (#51856)、OSC 8 超链接 (#53636)、OAuth 凭证迁移 (#53607) |
| **开发者体验** | tool.execute.before skip 字段 (#52837)、供应商目录延迟加载 (#52816) |

---

## 开发者痛点

1. **剪贴板回归** — 关注度最高的 issue；137 条评论和 130 个 👍 表明影响广泛
2. **配额泄漏** — 用户预期各模型独立限额，但达到一个模型的限额会阻止*所有*模型（Go、周配额）
3. **服务可靠性** — Go 服务宕机 (#36889) 导致每天多次出现 HTTP 000/503 错误
4. **TUI 反馈缺失** — 中止时无视觉确认、长 URL 不可点击、Unicode 渲染异常
5. **MCP 凭证迁移** — V2 不导入 V1 OAuth 凭证，导致服务器需要重新认证

---

*数据来源：GitHub — anomalyco/opencode*

---

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest from English to Chinese. I need to follow the rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly
- Keep URLs, numbers, code references as-is
- Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully, maintaining all the formatting and making it read naturally in Chinese.

Key terms to translate consistently:
- "digest" → 简报
- "releases" → 版本发布
- "issues" → Issue
- "PRs" → PR (keep as-is or use "合并请求")
- "discussions" → 讨论
- "highlights" → 今日要点
- "hot issues" → 热门 Issue
- "feature request trends" → 功能需求趋势
- "developer pain points" → 开发者痛点
- "show and tell" → 展示与分享
- "Q&A" → 问答
- "comments" → 评论
- "👍" → 保留

Let me translate section by section:</think>

# Pi 社区简报 — 2026-10-07

## 今日要点

Pi 社区今日在 TUI 改进和持久化功能方面有大量活动。一个值得关注的新功能已完成：内联压缩（in-context compaction）允许智能体在缓存的对话中直接生成摘要，而不是在单独的分支中运行。团队还合并了全屏选择跨会话保持以及 Windows 路径处理的修复。过去 24 小时内没有新版本发布，但多个重要的 PR 取得了进展。

---

## 版本发布

过去 24 小时内没有新版本发布。

---

## 热门 Issue

| # | Issue | 为何重要 | 社区反馈 |
|---|-------|----------|----------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **Pi 在按 ESC 停止思考后卡在"Working..."状态** — 用户频繁报告需要 `CTRL+c` 强制重启才能恢复。自 ~v0.84.0 起出现。 | 22 条评论，3 👍 |
| [#10300](https://github.com/earendil-works/pi/issues/10300) | **ChatGPT OAuth ID token 未被持久化** — 扩展程序无法访问账户身份，因为 `credentialFromTokenResponse` 遗漏了 ID token。 | 14 条评论 |
| [#10480](https://github.com/earendil-works/pi/issues/10480) | **直连 OpenAI 不识别手动重置的使用限额** — 已充值的重置被忽略；变通方案是重新通过 openai-codex 登录。 | 13 条评论 |
| [#8061](https://github.com/earendil-works/pi/issues/8061) | **上下文预算忽略 maxTokens 输出预留** — 在保留 400k token 的情况下，输入到达 78% 时请求被拒绝；重试结果相同。 | 10 条评论，3 👍 |
| [#9075](https://github.com/earendil-works/pi/issues/9075) | **压缩摘要继承会话的思考级别** — 在自适应模型上，高思考级别的摘要请求必定在输出限制处失败。 | 9 条评论，4 👍 |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | **before_provider_request 未在摘要/压缩时触发** — 文档说此钩子应在所有请求前触发，但压缩时静默跳过。 | 9 条评论 |
| [#9656](https://github.com/earendil-works/pi/issues/9656) | **鼠标滚轮在全屏模式下滚动提示历史（Windows + Zellij）** — Linux/tmux 和直接终端正常，Zellij 多路复用器中失效。 | 4 条评论，3 👍 |
| [#10519](https://github.com/earendil-works/pi/issues/10519) | **Nix 包将 Node 22 放在 PATH 首位** — 包装器将 `nodejs_22` 前置到 PATH，覆盖了用户在工具 shell 中的 node。 | 3 条评论 |
| [#10558](https://github.com/earendil-works/pi/issues/10558) | **当 DISPLAY/WAYLAND_DISPLAY 已导出但 socket 不可用时，剪贴板复制失败** — 在 VS Code Remote / WSL2 devcontainers 中常见。 | 3 条评论 |
| [#10502](https://github.com/earendil-works/pi/issues/10502) | **v1.0.3: strict: true 被 Anthropic API 拒绝** — 所有请求报错 `tools.0.custom.strict: Extra inputs are not permitted`。 | 3 条评论 |

---

## 重要 PR 进展

| # | PR | 描述 |
|---|-----|-------------|
| [#10577](https://github.com/earendil-works/pi/pull/10577) | **feat(coding-agent): 添加内联压缩** — 通过在缓存对话中追加指令并使用 `toolChoice: none` 重新发送下一轮请求来生成摘要。 |
| [#10569](https://github.com/earendil-works/pi/pull/10569) | **feat(ai,coding-agent): 按密钥可用性过滤 OpenRouter 模型** — 使用认证后的 `GET /api/v1/models/user` 过滤不可用模型，同时保留 Pi 的能力元数据。 |
| [#10580](https://github.com/earendil-works/pi/pull/10580) | **fix(tui): 当视口上方内容收缩时保持手动滚动位置** — 防止工具块高度变化时滚动位置跳变。 |
| [#10528](https://github.com/earendil-works/pi/pull/10528) | **refactor nix 部分** — 使用 `makeBinaryWrapper`，移除 `*.map`/`*.d.ts`，跳过开发环境版本检查。 |
| [#10513](https://github.com/earendil-works/pi/pull/10513) | **feat(durable): 支持对话上下文中的条目截断** — 修复 #10512。 |
| [#10142](https://github.com/earendil-works/pi/pull/10142) | **fix(ai): 向 Bedrock Converse 上的 OpenAI 模型发送 reasoning effort** — 修复 #9331。之前只有 Claude 模型收到 thinking 字段。 |
| [#10557](https://github.com/earendil-works/pi/pull/10557) | **fix(coding-agent): 对所有转录块应用 outputPad** — 之前只应用于消息；现在覆盖整个转录。 |
| [#10570](https://github.com/earendil-works/pi/pull/10570) | **fix(coding-agent): 比较 Windows 路径时不区分驱动器字母大小写** — 修复 `C:\` vs `c:\` 不同时导致全局技能重复发现。 |
| [#9310](https://github.com/earendil-works/pi/pull/9310) | **fix(coding-agent): 会话切换时清除鼠标选择** — 修复全屏模式下选择跨会话保持的问题。 |
| [#9880](https://github.com/earendil-works/pi/pull/9880) | **feat(coding-agent): 发布配置模式** — 从 TypeBox 合约生成模型、设置、快捷键和主题的 JSON Schema。 |

---

## 热门讨论

### 展示与分享

| # | 讨论 |
|---|------------|
| [#10581](https://github.com/earendil-works/pi/discussions/10581) | **展示与分享：每次 pi -p 运行设置硬性美元限额** — 在 `models.json` 头部使用 `${VAR}` 注入运行 ID 和预算。实现 CI 和脚本化批处理中的每次运行硬上限。 |

### 问答

| # | 讨论 |
|---|------------|
| [#6547](https://github.com/earendil-works/pi/discussions/6547) | **迁移项目位置与会话问题** — 项目从一个路径移动到另一个路径时（如 `H:\project` → `K:\git\project`）需要会话迁移指导。 |

---

## 功能需求趋势

1. **持久化增强** — 多个请求要求可配置的进度提交间隔、向后任务扫描、条目截断和工具事件的墙上时钟时间戳。
2. **提供商灵活性** — 按密钥过滤 OpenRouter 模型、通过头部注入实现每次运行预算限制，以及跨提供商更好地传递 reasoning effort（Bedrock、OpenAI、Qwen）。
3. **用户体验打磨** — 全屏选择主题化、outputPad 一致性、滚动稳定性，以及容器化环境中的剪贴板可靠性。
4. **模式驱动配置** — 从 TypeBox 合约发布模型、设置、快捷键和主题的 JSON Schema。
5. **OAuth 扩展性** — 需要 `access_type=offline` 的 Google 等提供商的 MCP OAuth 参数注入。

---

## 开发者痛点

1. **卡在"Working..."** — ESC 取消导致的卡死是高频阻塞问题，影响日常使用。
2. **上下文预算计算错误** — 在大 token 保留量情况下于 78% 输入处被拒绝，令拥有长对话的用户感到沮丧。
3. **提供商特定问题** — OpenAI reasoning effort 未到达 Bedrock、Qwen 聊天模板忽略 `reasoning_effort`、大上下文 OpenRouter 400 错误。
4. **Windows 兼容性** — 路径大小写敏感、devcontainers 中剪贴板失败、Zellij 多路复用器问题反复出现。
5. **Nix 集成** — 打包的 Node 22 污染 PATH，与用户环境冲突。
6. **OAuth/token 处理** — ID token 未持久化、Google MCP 缺少 refresh token。

---

*基于 2026-10-07 的 GitHub 数据生成*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest into Simplified Chinese. I need to:

1. Translate all headings, body text, and table content
2. Keep all technical terms, code, URLs, issue numbers, PR numbers, file paths, and identifiers as-is
3. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
4. Use natural technical Chinese register

Let me translate this carefully:

- "Today's Highlights" → "今日要闻"
- "Hot Issues" → "热门议题"
- "Key PR Progress" → "重要 PR 进展"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"
- "Release notes generated using configuration in `.github/release.yml`" → "使用 `.github/release.yml` 中的配置生成发布说明"
- And so on...

Let me go through each section and translate appropriately.</think>

# Qwen Code 社区周报 — 2026-10-07

## 今日要闻

Qwen Code 项目持续快速迭代，**v0.25.1-preview.0** 版本已发布。本周主要活动聚焦于**托管 Agent 扩展运行时（Stage H）**，多个 PR 推进了路线图，包括 H0 事件传输契约和 H4b 子 Session 运行时。需要关注若干 P1 缺陷——尤其是 sed 模拟器反斜杠转义问题和 main 分支上的测试失败——同时网络 Shell 字符转义和环境变量验证的安全问题也在显现。

---

## 版本发布

### v0.25.1-preview.0
使用 `.github/release.yml` 中的配置生成本版本发布说明，发布于 `release/v0.25.1-preview.0`。

---

## 热门议题

### 1. [feat(managed-agent): Stage D 后续——持久生命周期、Turns、Actions](https://github.com/QwenLM/qwen-code/issues/12867) — 17 条评论
**优先级 P2 | 功能需求 | #12380 的 Stage D**

涵盖 Stage D 的剩余部分：持久生命周期、Turns、Actions、`java_durable` 准入配置和 AgentDefinition。这是多 Agent 会话管理的基础功能。鉴于涉及的广泛 API 契约，社区关注度很高。

### 2. [feat(managed-agent): 在新版托管 Workspace 配置中引入只读搜索工具](https://github.com/QwenLM/qwen-code/issues/13030) — 9 条评论
**优先级 P2 | 功能需求 | 已关闭**

提议在托管 Harness 工具中添加 `list_directory`、`glob` 和 `grep_search`——实现只读搜索而无需完整文件写入权限。已合并，标志着托管 Workspace 能力的重要扩展。

### 3. [feat(managed-agent): Stage H2.5 — 托管 Hooks 加固](https://github.com/QwenLM/qwen-code/issues/13369) — 5 条评论
**优先级 P2 | 增强 | 已关闭**

H2（托管 Hooks）和 H3（后台 Shell/Monitor）之间的加固半步。在推进更复杂运行时功能之前，解决 Hooks 系统的边界情况。

### 4. [LSP 诊断：扩展映射将非本扩展误标为外来扩展](https://github.com/QwenLM/qwen-code/issues/13527) — 4 条评论
**优先级 P2 | 缺陷 | 待人工审核**

LSP 诊断扩展映射错误地将服务器自身的扩展识别为外来扩展，导致诊断假阴性。从 PR #13128 评审中拆分；影响语言服务器的可靠性。

### 5. [sed -i 模拟器误读括号表达式内的反斜杠转义](https://github.com/QwenLM/qwen-code/issues/13556) — 3 条评论
**优先级 P1 | 缺陷 | 待处理**

**关键问题：** JavaScript 中的 sed 模拟器错误处理括号表达式如 `[ \t]` 中的反斜杠转义。这破坏了常见模式如去除尾随空格（`s/[ \t]*$//`）。修复已在 PR #13557 中实现。

### 6. [包含不匹配反引号的 Markdown 表格未渲染为表格](https://github.com/QwenLM/qwen-code/issues/13558) — 3 条评论
**优先级 P2 | 缺陷 | 评审中**

`splitMarkdownTableRow` 将任何反引号视为代码 span 起始符，导致包含字面反引号的表格单元格解析失败。影响文档渲染质量。

### 7. [test(managed-agent): holdsRestorePagesInsideThePerPageByteBudget 在 main 上失败](https://github.com/QwenLM/qwen-code/issues/13542) — 3 条评论
**优先级 P1 | 缺陷 | 已关闭**

由于 #13355 中的记录验证变更，集成测试在完整 `mvn test` 运行中每次都失败。阻碍 CI 可靠性；需要立即处理。

### 8. [web-shell: 审批对话框 tool.args 未进行 bidi/控制字符转义](https://github.com/QwenLM/qwen-code/issues/13517) — 3 条评论
**优先级 P2 | 安全 | 待处理**

托管审批对话框的主要内容路径缺少双向文本和控制字符转义——存在显示操纵的潜在安全风险。

### 9. [Session 无法打开：转录快照超出 256 MiB 索引限制](https://github.com/QwenLM/qwen-code/issues/13113) — 3 条评论
**优先级 P1 | 缺陷 | 待人工审核**

长时间运行的会话的 `.jsonl` 转录文件呈二次增长，达到硬编码的 256 MiB 限制，导致会话永久无法打开。这是**数据完整性**问题，影响重大。

### 10. [QWEN_CODE_SYSTEM_SETTINGS_PATH: 环境变量覆盖未进行文件所有权检查](https://github.com/QwenLM/qwen-code/issues/13513) — 3 条评论
**优先级 P3 | 安全 | 待处理**

系统设置路径的环境变量覆盖在验证文件所有权之前就被接受——在多用户环境中存在潜在的权限提升风险。

---

## 重要 PR 进展

### 1. [#13174](https://github.com/QwenLM/qwen-code/pull/13174) — feat(managed-agent): 采用下一代托管 Harness (G3)
实现 G3 提案的第 1–2 步：托管 Session 现在可以通过采用下一代而非失败来 survive 托管 Harness 重启。对生产稳定性至关重要。

### 2. [#13466](https://github.com/QwenLM/qwen-code/pull/13466) — fix(memory): 报告后台记忆 Agent 停止的原因
后台记忆 Agent 现在显示有意义的停止原因而非内部 token。"MAX_TURNS" 变为可读文本。

### 3. [#13467](https://github.com/QwenLM/qwen-code/pull/13467) — feat(agents): 以会话为中心的多 Agent 协作
用聊天会话中的内联 @-mention Agent 取代基于 thread/ticket 的协作——每条消息可见实时状态、工具步骤和 token 使用情况。

### 4. [#13521](https://github.com/QwenLM/qwen-code/pull/13521) — fix(memory): 记忆索引变更时保留 prompt 前缀
记忆策略现保持在系统指令中，而不改变更早的会话前缀——提高上下文一致性。

### 5. [#13557](https://github.com/QwenLM/qwen-code/pull/13557) — fix(core): 阻止 sed 模拟器误读括号中的反斜杠
修复 P1 缺陷：括号中的反斜杠现正确处理以实现 BRE/ERE 兼容性，包括 `-E` 模式。

### 6. [#13128](https://github.com/QwenLM/qwen-code/pull/13128) — fix(core): 将失败的 LSP 诊断作为错误呈现
诊断操作现已在服务器不可用时拒绝而非返回假阳性——提高语言服务器集成的可靠性。

### 7. [#13276](https://github.com/QwenLM/qwen-code/pull/13276) — fix(serve): 在冷加载 409 中命名托管恢复拒绝分支
十八个拒绝点现返回特定错误码而非通用的 `hosted_turn_recovery_required`——减少 CI 不稳定。

### 8. [#13498](https://github.com/QwenLM/qwen-code/pull/13498) — feat(managed-agent): EventTransport 消息信封契约
Stage H 的 H0 添加了跨节点事件传输的 TypeScript 契约，带有 fixture 和负向测试——尚无运行时消费者，但属基础设施。

### 9. [#13550](https://github.com/QwenLM/qwen-code/pull/13550) — feat(managed-agent): H4b 子 Session 运行时
托管 Agent 扩展运行时的 H4b 部分已落地——实现托管 Agent 框架内的子 Session 派生。

### 10. [#13260](https://github.com/QwenLM/qwen-code/pull/13260) — feat(managed-agent): W1c 离线 Workspace 迁移
在可信 Linux 主机上添加私有离线 Workspace 重新定位功能——支持在挂载版本之间迁移 Workspace。

---

## 功能需求趋势

议题分析揭示几个主导主题：

| 主题 | 关键议题 | 描述 |
|------|----------|------|
| **托管 Agent 扩展** | #12867, #12827, #13369, #13498, #13550 | Stage H 运行时扩展 MCP、Hooks、后台进程、子 Agent |
| **会话持久性** | #12867, #13113, #13124 | 生命周期管理、转录文件大小边界、文件历史保留 |
| **托管 Workspace 优化** | #13030, #13168, #13174 | 工具配置、项目上下文、Harness 代际采用 |
| **LSP 改进** | #13527, #13491 | 诊断可靠性、动态注册正确性 |
| **安全加固** | #13517, #13513 | 双向文本转义、文件所有权验证 |

托管 Agent 路线图（#12380）继续主导功能开发，Stage H（扩展运行时）代表新能力工作的主要内容。

---

## 开发者痛点

### 1. **测试不稳定**
多起 CI 失败追踪：SDK Java（#13503）、E2E 工作流测试（#13552）、以及字节预算测试（#13542）在合入后破裂。测试可靠性是反复出现的问题。

### 2. **LSP 集成脆弱**
议题 #13527（扩展映射）和 #13491（动态注册）揭示持续的 LSP 客户端/服务器握手问题——影响诊断准确性。

### 3. **会话增长/恢复**
256 MiB 转录限制（#13113）导致长时间运行的会话数据丢失是一个影响重大的用户问题，需要重构硬编码限制。

### 4. **边界情况 Shell 模拟**
Sed 模拟缺陷（#13556）和 glob 路径处理（#13524）表明 Shell 工具模拟存在差距——影响常见开发者工作流。

### 5. **评审轮次超载**
多个议题注意到 PR 超过 1500 行添加阈值（#13514）并进入双位数评审轮次（#13528），拖慢迭代速度。

---

*基于 GitHub 数据生成 — github.com/QwenLM/qwen-code | 2026-10-07*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*