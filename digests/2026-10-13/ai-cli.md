# AI CLI 工具社区动态日报 2026-10-13

> 生成时间: 2026-10-13 03:08 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this entire report into Chinese while preserving the Markdown structure exactly. Let me go through and translate it carefully, maintaining all formatting, tables, and technical terms.

I need to:
1. Translate the content into Chinese
2. Keep all Markdown formatting (headings, tables, lists, etc.)
3. Keep all URLs, code, numbers, dates as-is
4. Keep technical terms and project names in their original form
5. Use natural technical Chinese register

Let me translate section by section:

Title: "Cross-Tool Comparison Report: AI CLI Tools Ecosystem"
→ "跨工具对比报告：AI CLI 工具生态"

Section 1: Ecosystem Overview
- "The AI CLI tools landscape is experiencing rapid fragmentation" → "AI CLI 工具领域正经历快速碎片化"
- "bifurcated market" → "分化市场"
- "durable sessions" → "持久会话"
- etc.

Let me carefully translate the entire document while preserving format.</think>

# 跨工具对比报告：AI CLI 工具生态

## 1. 生态概览

AI CLI 工具领域正经历快速碎片化和专业化，主流 AI 实验室和开源社区竞相争夺开发者工作流的主导权。从今日活动来看，市场呈现分化态势：企业级工具（Claude Code、Copilot CLI）注重稳定性和集成深度，而新进入者（Qwen Code、Gemini CLI）则围绕多 Agent 编排和持久会话架构进行创新。所有平台都在应对共同挑战——上下文管理、终端 UX 可靠性、跨平台兼容性——但在技术实现上存在显著差异。托管 Agent（Managed Agent）架构和 BYOK（Bring Your Own Key）模式的出现，标志着市场正从简单的代码补全向自主任务执行方向成熟。

---

## 2. 活跃度对比

| 工具 | 最近 24h 发布 | Issues 更新 | PRs 更新 | Discussions | 发布状态 |
|------|--------------|-------------|----------|-------------|----------|
| Claude Code | 0 | 50 | 0 | N/A | 稳定版 |
| OpenAI Codex | 0 | 50 | 20 | 4 | 稳定版 |
| Gemini CLI | 1 | 30 | 10 | N/A | 每日构建版 |
| Copilot CLI | 4 | 35 | 0 | N/A | 稳定版 |
| OpenCode | 0 | 30 | 10 | N/A | 稳定版 |
| Pi | 1 | 10 | 10 | 1 | 稳定版 |
| Qwen Code | 1 | 50 | 10 | 1 | 每日构建版 |

**备注：**

- **OpenAI Codex** 的 PR 吞吐量最高（20 个合并），表明迭代非常激进
- **Claude Code** 和 **OpenAI Codex** 的 Issues 活跃度最高（各 50 个），暗示用户基数更大或问题报告更活跃
- **Copilot CLI** 24 小时内发布 4 个版本，展现快速补丁节奏
- **Pi** 和 **Qwen Code** 的讨论活动较少，但 Issues/PR 工作流活跃——这些仓库主要依赖 Issues 作为社区渠道

---

## 3. 共同功能方向

以下需求在多个工具社区中反复出现：

| 功能方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **多 Agent 编排** | Qwen Code、Claude Code、Gemini CLI | Agent 身份投射、子 Agent 归属、团队协调 API |
| **模型降级/故障转移** | OpenCode、Copilot CLI、Gemini CLI | 错误或限流时自动重试不同模型 |
| **持久/可恢复会话** | Pi、Qwen Code、Claude Code | 中断后会话持久化、检查点恢复 |
| **终端 UI 健壮性** | 所有工具 | 无闪烁渲染、缩放处理、终端多路复用器兼容性 |
| **Windows 平台支持** | 所有工具 | Shell 路径解析、控制台窗口处理、NTFS 兼容性 |
| **扩展/插件系统** | Copilot CLI、OpenCode、Pi | 本地插件加载、每次调用配置 |
| **MCP 集成** | Claude Code、Copilot CLI、OpenCode | OAuth 流程、服务器认证、工具发现 |

---

## 4. 差异化分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 自主文件修改、上下文保持 | 企业开发者 | 保守路线——注重稳定性、防护措施和企业合规 |
| **OpenAI Codex** | Agentic 编码、工具编排 | 使用 OpenAI 模型的开发者 | 高吞吐量——20 PR/天，积极推送功能 |
| **Gemini CLI** | AST 感知工具、Token 效率 | 性能敏感用户 | 技术深度——AST 分析、零依赖沙箱方案 |
| **Copilot CLI** | 企业集成、GitHub 生态 | GitHub 用户、企业 | 集成优先——MCP、GitHub 认证、组织策略 |
| **OpenCode** | 模型灵活性、BYOK | 价格敏感开发者 | 开放模型支持——PostgreSQL 存储、自定义 providers |
| **Pi** | 持久会话、上下文管理 | 长时工作流 | 会话持久性——紧凑化处理、长上下文支持 |
| **Qwen Code** | 托管 Agent、Kubernetes | 平台团队、企业 | 架构优先——双路径 Agent 设计、K8s 运行时 |

---

## 5. 社区活力与成熟度

### 高活力（活跃开发）

- **OpenAI Codex**：24 小时内合并 20 个 PR，活跃度最高；讨论氛围活跃（4 个主题）
- **Qwen Code**：架构演进积极（托管 Agent 提案），50 个 Issues 更新
- **Copilot CLI**：24 小时内发布 4 个版本——快速补丁节奏保障稳定性

### 中等活力

- **Gemini CLI**：每日构建节奏，聚焦终端 UI 和 Agent 行为相关 PR
- **Pi**：会话持久性稳步推进，v1.2.0 版本已发布
- **OpenCode**：Bug 修复活跃，v2 迁移进行中

### 成熟/稳定

- **Claude Code**：每日活跃度较低但 Issues 积压量大（50 个）；聚焦企业级稳定性

### 社区参与度

- **OpenAI Codex** 以 4 个活跃讨论领先社区互动
- **Pi** 和 **Qwen Code** 尽管整体活跃度较低，但讨论参与度很高
- 大多数工具主要依赖 Issues 而非 Discussions——表明社区基础设施尚不成熟，或更倾向于基于 Issues 的工作流程

---

## 6. 趋势信号

从本次跨工具概览可以看出几个行业模式：

1. **多 Agent 是下一前沿**：Qwen Code 的双路径架构提案、Claude Code 的子 Agent 恢复问题、Gemini CLI 的 AST 感知子 Agent 研究，都指向协调多 Agent 系统是下一个竞争差异化点。

2. **BYOK 和模型灵活性已成为标配**：OpenCode 的按密钥模型过滤、Copilot CLI 的 BYOK 路由挑战、Pi 的模型目录工作，表明供应商锁定规避现在是基础期望。

3. **终端体验是主战场**：所有工具都在无闪烁渲染、终端多路复用器兼容性和响应式 UI 上投入，表明 CLI UX 质量直接影响开发者采用。

4. **Windows 仍是痛点**：每个工具的 Windows 特异性 bug 都占据主要问题列表（shell 路径解析、控制台闪烁、NTFS 问题）。这表明该平台需要专门的工程关注。

5. **上下文管理仍是难题**：围绕会话压缩（Claude、Pi）、上下文溢出恢复（OpenAI Codex）、提示缓存（Copilot CLI）的问题表明，在规模化场景下，上下文窗口管理在技术上仍未得到解决。

6. **每日构建与稳定版的二元对立**：Gemini CLI 和 Qwen Code 发行每日构建版，而 Claude Code 和 Copilot CLI 优先保证稳定性——这表明市场正在测试开发者工具的不同发布理念。

---

*本报告基于 2026-10-13 GitHub 上 7 个 AI CLI 工具的活动数据生成*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English report into Chinese (Simplified), following the rules provided. Let me go through it carefully:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, code references, etc. verbatim
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section:

**Title:**
# Claude Code Skills 社区亮点报告

**Data Source line:**
**数据来源:** github.com/anthropics/skills（截至 2026-10-13）

**Section 1:**
## 1. 热门技能排名

*注：数据集未填充 PR 评论数。排名基于 PR 新近度、活动指标以及与这些技能相关的问题讨论活跃度。*

**Skill-Creator Core Infrastructure:**
### 技能创建器核心基础设施（多项 PR）

| PR | 重点 | 状态 |
|----|----|--------|
| [#1961](https://github.com/anthropics/skills/pull/1961) | 加固 eval viewer，防范脚本突破、DNS 重绑定、跨站 POST 和转义漏洞 | 进行中 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | 隔离触发评估，处理 Windows 兼容性和运行时失败 | 进行中 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | 支持直接执行 package_skill.py 并更新使用路径 | 进行中 |

**Discussion Highlights:**
讨论亮点：该技能创建器技能正在获得大量加固关注。PR #1961 解决了 eval viewer 中的关键安全漏洞（脚本突破、XSS）。


该工具作为基础架构需要强大的安全性和跨平台支持。多个 PR 正在处理这些问题。

### MCP Builder 增强功能

| PR | 重点 | 状态 |
|----|----|--------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | 支持 mcp>=2.0 streamable_http_client 导入和自定义请求头 | 进行中 |

MCP 构建器正在更新以支持 2.0+ 版本的变化，包括重命名的导入和新请求头配置，这对开发人员构建集成至关重要。

### 领域特定技能

| PR | 技能 | 重点 | 状态 |
|----|----|----|--------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 自动化静态分析 Solidity/Rust 智能合约，通过零存储 Merkle 协议进行 TON 区块链公证 | 进行中 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 使用 Marp 将 Markdown 文档转换为带真实配音的 MP4 视频 | 进行中 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation | 将产品/技术规格转换为包含验收标准和进度跟踪的具体 Notion 任务 | 进行中 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT (AI Watch Tester) | 零代码端到端测试，结合 Claude 视觉和浏览器控制 | 进行中 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 防止 AI 生成文档中的排版问题（孤行、页中截断、编号错位） | 进行中 |

多个技能正处于活跃开发阶段，涵盖智能合约审计、视频生成、任务管理、自动化测试和文档排版等专业领域。

### 质量与修复 PR

| PR | 重点 | 状态 |
|----|----|--------|
| [#1792](https://github.com/anthropics/skills/pull/1792) | 将 LibreOffice 超时报告为错误，验证输出 DOCX 无修订标记 | 进行中 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | 替换 academy-guide 和 claude-api 中的 3 个硬 404 文档链接 | 进行中 |
| [#538](https://github.com/anthropics/skills/pull/538) | 修复 pdf SKILL.md 引用中的 8 处大小写敏感不匹配 | 进行中 |

多个质量改进和错误修复正在进行中，涵盖 LibreOffice 超时处理、死链替换和文档引用修正。

## 2. 社区需求趋势

### 安全与信任基础设施
- **#492（46 条评论）：** 安全漏洞——分发给用户的代码存在信任边界问题

。`anthropic/` 命名空间下的社区技能冒充官方技能，可能导致用户无意中向未审查的社区技能授予提升的权限。

### 工作流与协作
- **#228（16 条评论）：** 在 Claude.ai 中启用组织级技能共享——当前的手动文件分发方式繁琐；用户需要共享技能库或直接分享链接。

### 开发者体验
- **#556（12 条评论）：** run_eval.py 触发率为 0%——技能触发检测在评估模式下完全失败。
- **#189（6 条评论）：** document-skills 和 example-skills 插件包含重复内容，导致上下文污染。

### 上下文与性能
- **#1487（4 条评论）：** claude-api 技能注入约 15.6 万个 token，在单次工具调用中耗尽上下文窗口。

### 技能质量与治理
- **#202（8 条评论）：** 技能创建器应遵循最佳实践——冗长的教育语气损害了 token 效率。
- **#412（6 条评论）：** 代理治理技能提案——用于 AI 代理系统的策略执行、威胁检测、信任评分和审计追踪。

## 3. 高潜力待发布技能

| PR | 技能 | 准备就绪指标 | 链接 |
|----|----|---------------------|------|
| #1771 | proofcore-contract-auditor | 专业化 Web3 审计工作流；文档完善 | [#1771](https://github.com/anthropics/skills/pull/1771) |
| #1703 | md2video-audio | 零成本 Markdown 转视频；用例清晰 | [#1703](https://github.com/anthropics/skills/pull/1703) |
| #1245 | notion-spec-to-implementation | 弥合产品规格与可操作任务之间的差距 | [#1245](https://github.com/anthropics/skills/pull/1245) |
| #822 | AWT (AI Watch Tester) | 端到端测试自动化；满足明确的开发者需求 | [#822](https://github.com/anthropics/skills/pull/822) |
| #1961 | 技能创建器安全加固 | 关键安全补丁；积极维护中 | [#1961](https://github.com/anthropics/skills/pull/1961) |

## 4. 技能生态系统洞察

社区最集中的需求是稳健的生产级技能基础设施——尤其是安全加固（信任边界、eval viewer 漏洞）、跨平台兼容性（Windows 支持）以及评估和触发可靠性——而不是新的领域特定功能。安全和开发者体验改进获得的讨论显著更多（在安全问题上有 46+ 条评论），这表明生态系统在扩展到新的技能类别之前，正在优先考虑基础稳定性。

---

*报告基于截至 2026-10-13 的 GitHub 数据生成*</think>

# Claude Code Skills 社区亮点报告

**数据来源:** github.com/anthropics/skills（截至 2026-10-13）

---

## 1. 热门技能排名

*注：数据集未填充 PR 评论数。排名基于 PR 新近度、活动指标以及与这些技能相关的问题讨论活跃度。*

### 技能创建器核心基础设施（多项 PR）

| PR | 重点 | 状态 |
|----|----|--------|
| [#1961](https://github.com/anthropics/skills/pull/1961) | 加固 eval viewer，防范脚本突破、DNS 重绑定、跨站 POST 和转义漏洞 | 进行中 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | 隔离触发评估，处理 Windows 兼容性和运行时失败 | 进行中 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | 支持直接执行 package_skill.py 并更新使用路径 | 进行中 |

**讨论亮点：** 技能创建器技能正在获得大量加固关注。PR #1961 解决了 eval viewer 中的关键安全漏洞（脚本突破、XSS 漏洞）。PR #1298 解决了 Windows 特定的子进程处理和触发评估可靠性问题。这些 PR 表明社区将技能创建器视为需要强大安全性和跨平台支持的基础设施。

---

### MCP 构建器增强功能

| PR | 重点 | 状态 |
|----|----|--------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | 支持 mcp>=2.0 streamable_http_client 导入和自定义请求头 | 进行中 |

**讨论亮点：** 更新 MCP 构建器以支持 2.0+ 版本变更，包括重命名导入（`streamable_http_client`）和通过 `create_mcp_http_client` 配置新请求头。此技能对构建模型上下文协议集成的开发者至关重要。

---

### 领域特定技能

| PR | 技能 | 重点 | 状态 |
|----|----|----|--------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 自动化静态分析 Solidity/Rust 智能合约，通过零存储 Merkle 协议进行 TON 区块链公证 | 进行中 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 使用 Marp 将 Markdown 文档转换为带真实配音的 MP4 视频 | 进行中 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation | 将产品/技术规格转换为包含验收标准和进度跟踪的具体 Notion 任务 | 进行中 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT (AI Watch Tester) | 零代码端到端测试，结合 Claude 视觉和浏览器控制 | 进行中 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 防止 AI 生成文档中的排版问题（孤行、寡妇、编号错位） | 进行中 |

---

### 质量与修复 PR

| PR | 重点 | 状态 |
|----|----|--------|
| [#1792](https://github.com/anthropics/skills/pull/1792) | 将 LibreOffice 超时报告为错误，验证输出 DOCX 无修订标记 | 进行中 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | 替换 academy-guide 和 claude-api 中的 3 个硬 404 文档链接 | 进行中 |
| [#538](https://github.com/anthropics/skills/pull/538) | 修复 pdf SKILL.md 引用中的 8 处大小写敏感不匹配 | 进行中 |

---

## 2. 社区需求趋势

*从高评论量问题中提取（按活跃度排序）*

### 安全与信任基础设施
- **#492（46 条评论）：** 安全漏洞——分发给用户的社区技能冒充官方技能，导致信任边界被滥用。用户可能无意中向未审查的社区技能授予提升的权限。

### 工作流与协作
- **#228（16 条评论）：** 在 Claude.ai 中启用组织级技能共享——当前手动文件分发方式繁琐；用户需要共享技能库或直接分享链接。

### 开发者体验
- **#556（12 条评论）：** run_eval.py 触发率为 0%——技能触发检测在评估模式下完全失效。
- **#189（6 条评论）：** document-skills 和 example-skills 插件包含重复内容，导致上下文污染。

### 上下文与性能
- **#1487（4 条评论）：** claude-api 技能注入约 156k tokens，在单次工具调用中耗尽上下文窗口。

### 技能质量与治理
- **#202（8 条评论）：** 技能创建器应更新至最佳实践——冗长的教育语气有损 token 效率。
- **#412（6 条评论）：** 代理治理技能提案——用于 AI 代理系统的策略执行、威胁检测、信任评分和审计追踪。

---

## 3. 高潜力待发布技能

*基于近期更新和实质性功能，最有可能很快合并的活跃 PR*

| PR | 技能 | 就绪指标 | 链接 |
|----|----|---------------------|------|
| #1771 | proofcore-contract-auditor | 专业化 Web3 审计工作流；文档完善 | [#1771](https://github.com/anthropics/skills/pull/1771) |
| #1703 | md2video-audio | 零成本 Markdown 转视频；用例清晰 | [#1703](https://github.com/anthropics/skills/pull/1703) |
| #1245 | notion-spec-to-implementation | 弥合产品规格与可操作 Notion 任务之间的鸿沟 | [#1245](https://github.com/anthropics/skills/pull/1245) |
| #822 | AWT (AI Watch Tester) | 端到端测试自动化；满足明确的开发者需求 | [#822](https://github.com/anthropics/skills/pull/822) |
| #1961 | 技能创建器安全加固 | 关键安全补丁；积极维护中 | [#1961](https://github.com/anthropics/skills/pull/1961) |

---

## 4. 技能生态系统洞察

**社区最集中的需求是稳健的生产级技能基础设施**——尤其是安全加固（信任边界、eval viewer 漏洞）、跨平台兼容性（Windows 支持）以及评估/触发可靠性——而非新增领域特定功能。安全和开发者体验改进获得的讨论显著更多（在安全问题上超过 46 条评论），表明生态系统在扩展到新技能类别之前，正优先夯实基础稳定性。

---

*报告基于截至 2026-10-13 的 GitHub 数据生成*

---

<think>The user wants me to translate the English "Claude Code Community Digest" into Chinese. I need to:

1. Translate all headings, body text, and list items
2. Keep all technical elements (issue numbers #16550, URLs, code snippets like `\\` to `\`, filenames like `.claude_json.json`, tool names like "Bash tool", "VS Code", etc.) as-is
3. Preserve all markdown structure exactly - headings, tables, lists, bold, horizontal rules, etc.
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through and translate while maintaining the structure:

Title: "# Claude Code 社区简报 — 2026-10-13"

Key translations:
- "Today's Highlights" → "今日要闻"
- "Release" → "发布" or "版本更新"
- "Hot Issues" → "热门 issue"
- "Feature request" → "功能请求" or "功能建议"
- "Bug" → "缺陷" or "Bug"
- "Closed" → "已关闭"
- "DUPLICATE" → "重复"
- "Has Repro" → "可复现"
- "Key PR Progress" → "重要 PR 进展"
- "Feature Request Trends" → "功能请求趋势"
- "Developer Pain Points" → "开发者痛点"

Let me translate the entire document now:</think>

# Claude Code 社区简报 — 2026-10-13

## 今日要闻

GitHub issue 追踪器显示 Claude Code 核心工作流和桌面体验方面的社区活动十分活跃。关注度最高的是一项功能请求（#16550），获得 78 个 👍，希望 Claude 能够写入/更新项目文件——这反映出用户对更强自主文件修改能力的强烈需求。同时，一个已关闭的缺陷（#98747）关于 2.1.286 版本空闲压缩静默丢弃工作上下文的问题引发了大量讨论（22 条评论），表明这影响了许多长时间运行的会话。过去 24 小时内没有新的版本发布或 PR 合并。

---

## 版本更新

过去 24 小时内无新版本发布。

---

## 热门 Issue

### 1. [功能建议] 允许 Claude 写入/更新项目文件 — #16550
**78 👍 · 40 条评论 · [查看 Issue](https://github.com/anthropics/claude-code/issues/16550)**

这是来自 SyedMuhamadYir 的一个高度呼声的需求，请求 Claude Code 拥有写入项目文件的权限，超出当前 artifact 的能力范围。这代表了一个主要的工作流需求——用户希望 Claude 能够直接修改源代码，而不仅仅是生成 artifact 或需要手动复制粘贴。78 个 👍 表明这是用户的首要优先级。

### 2. [缺陷] 2.1.286 空闲压缩静默丢弃工作上下文 — #98747
**30 👍 · 22 条评论 · 已关闭 · [查看 Issue](https://github.com/anthropics/claude-code/issues/98747)**

Natefosterwarner 报告说，空闲会话现在会在提示缓存过期前自动压缩，且没有退出选项或警告。对于长时间运行的工作会话，这会丢弃会话建立的基础上下文——严重影响跨小时维护状态的工作流。问题似乎已被修复（issue 已关闭）。

### 3. [缺陷] 内置浏览器忽略站点权限 — #91495
**23 👍 · 19 条评论 · [查看 Issue](https://github.com/anthropics/claude-code/issues/91495)**

Hoang-79 报告说，Claude Code Desktop 的内置浏览器忽略了"允许所有网站"等站点级权限。期待无限制访问的用户会反复遇到权限提示，破坏了浏览器工具的自动化工作流。

### 4. [缺陷] Bash 工具静默将 `\\` 折叠为 `\` — #88561
**4 👍 · 7 条评论 · 可复现 · [查看 Issue](https://github.com/anthropics/claude-code/issues/88561)**

Bwillkom 发现 Bash 工具在 shell 解析前将双反斜杠折叠为单反斜杠——破坏了正则表达式和 Windows 路径。这影响了单引号、双引号和 heredoc 中的命令。违反了 POSIX 规范。对于任何涉及正则表达式或 Windows 路径的脚本来说都是关键问题。

### 5. [缺陷] 桌面 Auto-fix CI 开关不应用于 gh 创建的 PR — #68083
**8 👍 · 7 条评论 · [查看 Issue](https://github.com/anthropics/claude-code/issues/68083)**

Laxels 报告说，桌面全局的"自动修复 CI 并处理评论"开关从不应用于通过 `gh` CLI 从本地会话创建的 PR，且设置不会持久化到 `claude_desktop_config.json` 中。用户必须为每个会话手动设置，这违反了全局开关的初衷。

### 6. [缺陷] Opus 5.5 安全防护阻止了 reasoning_extraction 消息 — #96118
**2 👍 · 7 条评论 · 重复 · [查看 Issue](https://github.com/anthropics/claude-code/issues/96118)**

用户遇到晦涩的"API 错误：Opopus 5.5 安全防护阻止了此消息"，看不到是什么触发了安全防护。多条报告（标记为重复）请求改进 UI 以显示被阻止响应的实际原因。

### 7. [功能建议] auto-mode 分类器的 API 回退机制 — #78263
**4 👍 · 5 条评论 · [查看 Issue](https://github.com/anthropics/claude-code/issues/78263)**

Creativecreatorormaybenot 请求在 auto-mode 分类器因 API 故障失败时自动回退到备用模型（例如 Opus low）。目前，Sonnet 故障会中止整个会话——用户希望有韧性。

### 8. [缺陷] 个人 Max 计划上 Claude Docs artifact PDF 导出失败 — #95922
**3 👍 · 4 条评论 · [查看 Issue](https://github.com/anthropics/claude-code/issues/95922)**

Stilesja 报告说，在个人 Max 计划上导出 Claude Docs artifact 为 PDF 失败，显示"您的组织不允许在此处导出 PDF"——即使该账户不属于任何组织。这影响了个人订阅者的明确付费墙或权限问题。

### 9. [缺陷] 工作树隔离拒绝无 git 的 Bash 命令 — #95122
**1 👍 · 3 条评论 · 可复现 · [查看 Issue](https://github.com/anthropics/claude-code/issues/95122)**

Apollion69 记录说，Claude Code 2.1.272/2.1.273 在使用工作树隔离时拒绝完全不包含 git 命令的 Bash 调用。简单操作如循环、`$VAR` 读取和 `&&` 后的 heredoc 都被阻止——3 天内导致 75 次拒绝。

### 10. [缺陷] VS Code 面板在扩展主机重启后从不重新附加 — #94743
**1 👍 · 3 条评论 · 可复现 · [查看 Issue](https://github.com/anthropics/claude-code/issues/94743)**

Capitaletech 报告说，在 VS Code 扩展主机重启后，Claude Code 面板从不重新附加——会话看起来冻结，直到用户手动运行"Reload Window"。影响 Windows 11 上的 VS Code 扩展用户。

---

## 重要 PR 进展

过去 24 小时内无 PR 更新。

---

## 功能请求趋势

分析 issue 追踪器显示几个主要功能方向：

1. **自主文件修改** — #16550（78 👍）明确表明用户希望 Claude 直接写入项目文件，而不仅仅是生成 artifact
2. **韧性与回退** — API/模型回退机制（#78263）在主选项失败时的自动切换
3. **增强桌面体验** — 桌面模组的吉祥物槽位（#99425）、远程控制的难度选择器（#99489）
4. **Bash/Shell 改进** — 路径处理修复（#88561）、工作树隔离改进（#95122、#100385）
5. **持久化与状态** — 桌面开关配置持久化（#68083）、组织切换时会话状态保持（#94507）

---

## 开发者痛点

社区反复出现的挫败感集中在：

- **长时间会话中的上下文丢失**：（#98747）空闲压缩静默丢弃工作上下文仍然是一个高影响力问题
- **Windows 特定缺陷**：多个 Windows 问题（路径处理、大小写敏感的 JSON 键、VS Code 重新附加）表明该平台需要更多测试覆盖
- **权限与认证摩擦**：站点权限被忽略（#91495）、MCP OAuth 双重编码（#101205）、组织切换时会话丢失（#94507）
- **工具可靠性**：Bash 工具语义（#88561）、LSP 工具 gitignore 过滤（#101476）、工作树隔离误报（#95122）
- **成本与限制执行**：一个编排会话忽略项目并发限制消耗了约 12% 的周 Max 配额（#101650）

---

*简报基于 GitHub 数据生成 — 2026-10-13*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the GitHub digest into Chinese while preserving all the formatting, links, numbers, code references, etc. Let me translate this carefully while maintaining the exact structure and using natural technical Chinese.

Key things to preserve:
- Markdown structure (headings, tables, lists)
- URLs and links
- Issue/PR numbers like #9203
- Code references like daemon_auto_start
- Emoji
- Numbers and dates

Let me translate section by section:</think>

# OpenAI Codex 社区动态
**日期：** 2026 年 10 月 13 日

---

## 1. 今日焦点

Codex 社区今日聚焦于 Windows 平台问题，陆续收到多起关于浏览器权限、沙盒泄漏以及提升权限应用输入阻塞的报告。呼声极高的 `/undo` 功能（Issue #9203，479 个 👍）持续引发热议。与此同时，20 个 PR 已合并，涵盖网络安全、终端兼容性和配置优化等领域。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 热门议题

| # | 议题 | 概要 | 社区热度 |
|---|-------|---------|-----------|
| **#9203** | [请恢复 "/undo" 命令](https://github.com/openai/codex/issues/9203) | 希望能恢复 `/undo` 命令，用于恢复因意外删除或修改（未纳入 git 追踪）的文件。对数据安全至关重要。 | 93 条评论，479 👍 |
| **#48195** | [将 daemon_auto_start 改为可选启用](https://github.com/openai/codex/issues/48195) | 建议将持久化后台守护进程从默认启用改为可选启用，理由是隐私和资源占用问题。 | 16 条评论，129 👍 |
| **#52839** | [Sol Ultrafast 未在模型目录中显示](https://github.com/openai/codex/issues/52839) | 使用 ChatGPT 认证的 Windows 用户无法访问 Sol Ultrafast 模型，尽管已启用 ultrafast_mode。 | 16 条评论 |
| **#25015** | [子进程的 MCP 进程栈泄漏](https://github.com/openai/codex/issues/25015) | 缺陷导致 Linux 上内存线性增长，MCP 子进程在子任务完成后仍未退出。 | 15 条评论 |
| **#49453** | [明确允许后浏览器访问仍被阻止](https://github.com/openai/codex/issues/49453) | Windows：已保存的会话级拒绝会阻止浏览器访问，即使用户已明确允许该站点。 | 14 条评论 |
| **#52747** | [Windows Desktop：code_mode_tool_description_first 问题](https://github.com/openai/codex/issues/52747) | 未知注入配置导致 Windows Desktop 出现不透明强制清理拒绝。 | 13 条评论 |
| **#52567** | [WebSocket 重试后上下文溢出](https://github.com/openai/codex/issues/52567) | CLI 目标在上下文溢出后（由 WebSocket 重连触发）恢复时失败。 | 9 条评论 |
| **#37193** | [生成的文件链接无法下载](https://github.com/openai/codex/issues/37193) | Windows：沙盒生成的文件链接点击无响应。 | 9 条评论 |
| **#47740** | [禁用 CLI 用量限制警告](https://github.com/openai/codex/issues/47740) | 建议提供配置项来隐藏主动的速率限制警告。 | 7 条评论，17 👍 |
| **#45388** | [提升权限应用输入被阻塞](https://github.com/openai/codex/issues/45388) | Windows：即使 ChatGPT 以管理员身份运行，计算机使用也无法输入到提升权限的应用中。 | 6 条评论 |

---

## 4. PR 进展

| PR | 标题 | 影响 |
|----|-------|--------|
| **#53506** | [拒绝重复的 Host 请求头](https://github.com/openai/codex/pull/53506) | 安全：返回 400 Bad Request 以防止请求走私攻击。 |
| **#53496** | [保留待处理的 Effects 开关状态](https://github.com/openai/codex/pull/53496) | 修复：当有保存待处理时，防止丢弃较新的开关选择。 |
| **#53485** | [升级 quinn-proto 至 0.11.18](https://github.com/openai/codex/pull/53485) | 依赖更新，包含刷新的 rand/getrandom 版本。 |
| **#53453** | [优先使用 WSL 上的 Windows 剪贴板](https://github.com/openai/codex/pull/53453) | 修复：避免 WSLg/PowerShell 剪贴板卡顿，改用 Windows 原生剪贴板。 |
| **#53451** | [将不完整响应视为终止错误](https://github.com/openai/codex/pull/53451) | 修复：正确将 max_output_tokens 命中分类为终止错误而非可重试的流错误。 |
| **#53444** | [在 codex exec 中抑制重复的轮次差异](https://github.com/openai/codex/pull/53444) | 体验优化：仅打印新增的差异，减少噪音。 |
| **#53440** | [在 16 色终端保留状态栏重音符号](https://github.com/openai/codex/pull/53440) | 修复：受限终端使用 ANSI 后备重音符号。 |
| **#53438** | [停止从 TERM_SESSION_ID 识别 Apple Terminal](https://github.com/openai/codex/pull/53438) | 修复：修正终端识别逻辑，避免遮蔽 Windows Terminal。 |
| **#53429** | [实时应用配置开关](https://github.com/openai/codex/pull/53429) | 体验优化：开关无需重启即可生效；改进了设置导航。 |
| **#53419** | [配置加载时恢复已保存的线程权限](https://github.com/openai/codex/pull/53419) | 修复：确保即使默认值更改，已保存的只读线程也能恢复。 |

---

## 5. 热门讨论

### 展示与分享
- **#53200** [Codex 重置的短信提醒服务](https://github.com/openai/codex/discussions/53200) — 为重置通知提供的短信（美国/加拿大）和 Telegram 机器人服务。
- **#53492** [Zen 浏览器的安全浏览器使用](https://github.com/openai/codex/discussions/53492) — Firefox/Zen 浏览器兼容性层，用于 Codex 浏览器控制，已提交至 Mozilla 附加组件商店。

### 创意点子
- **#53294** [为企业版隐藏 config.toml 弃用警告](https://github.com/openai/codex/discussions/53294) — 建议当 Legacy 密钥警告来自 Cloud-Managed/Enterprise 层时予以隐藏。

### 问答
- **#53366** [凭据交接导致发布站点被阻止](https://github.com/openai/codex/discussions/53366) — 寻求支持的方案来处理 Git 推送工作流的短期写入凭据。

---

## 6. 功能需求趋势

| 主题 | 相关议题 |
|-------|----------------|
| **撤销/恢复** | #9203（479 👍）— 非 git 变更的文件恢复 |
| **守护进程控制** | #48195（129 👍）— 可选启用后台守护进程 |
| **模型选择器** | #32665（20 👍）— 功率滑块中的自定义预设 |
| **多设备 Dots** | #49824 — 每个 dot 使用多台 PC |
| **警告控制** | #47740（17 👍）— 隐藏速率限制警告 |

---

## 7. 开发者痛点

1. **Windows 平台问题频发** — 多起高优先级议题涉及浏览器权限、沙盒文件链接、提升权限应用输入以及 NTFS 池泄漏，表明 Windows 稳定性仍面临挑战。

2. **内存泄漏问题持续** — MCP 进程栈泄漏（#25015）导致 Linux 内存线性增长问题仍未解决。

3. **模型可用性混乱** — 用户报告 Sol Ultrafast 未在目录中出现，尽管有可用配额仍报"已达容量"错误（#52839、#50252、#53407）。

4. **浏览器权限状态问题** — 已保存的拒绝在用户明确批准后仍然存在（#49453、#53031），造成糟糕的体验循环。

5. **上下文/连接可靠性** — WebSocket 重试行为导致上下文溢出（#52567）以及会话断开（#53249、#53519）影响工作效率。

---

*本期动态结束。数据来源：github.com/openai/codex，截至 2026 年 10 月 13 日。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the GitHub community digest from English to Chinese. Let me analyze the requirements:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully while maintaining all the formatting and technical terms.

Key translations to consider:
- "Nightly" → 夜间版
- "Pull Request" → 拉取请求
- "Comments" → 评论
- "Priority" → 优先级
- "Release" → 发布
- "Hot Issues" → 热门问题
- "Key PR Progress" → 重要 PR 进展
- "Feature Request Trends" → 功能需求趋势
- "Developer Pain Points" → 开发者痛点

Technical terms that should stay as-is:
- Gemini CLI
- GitHub
- issues
- PRs
- API
- terminal/terminal UI
- grep, cat, sed, awk (these are command names)
- MAX_TURNS
- settings.json
- sandbox.toml
- Ctrl+C
- tmux
- Wayland
- POSIX
- UTF-16, UTF-32, UTF-8
- NAME_MAX
- NUL
- ENAMETOOLONG
- CWE-88

Let me start translating:</think>

# Gemini CLI 社区摘要 — 2026-10-13

## 今日要闻

Gemini CLI 项目继续快速迭代，**夜间版 v0.65.0** 修复了扩展加载弹性的关键问题。最值得注意的进展包括终端 UI 稳定性改进、grep 工具的安全加固，以及解决代理挂起和子代理恢复问题的持续工作。多个围绕代理行为和终端渲染的 P1 缺陷正在通过修复和调查工作积极解决。

---

## 发布

### v0.65.0-nightly.20261013.g51617c1bc
**发布日期：** 2026-10-13

**变更：**
- **[修复(cli): 当一个扩展在允许列表检查失败时继续加载其他扩展](https://github.com/google-gemini/gemini-cli/pull/29720)** — 当单个扩展在允许列表验证失败时，扩展加载不再完全停止，提高了整体 CLI 的健壮性。

**完整变更日志：** https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261012.g9b6e0265d...v0.65.0-nightly.20261013.g51617c1bc

---

## 热门问题

### 1. [#22323 — 子代理在 MAX_TURNS 后恢复时报告为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323)
**优先级：** P1 | **评论：** 13 | ** 👍：** 2

`codebase_investigator` 子代理在达到最大轮次限制前未完成分析时，仍错误地报告 `status: "success"` 且终止原因为 `"GOAL"`。这掩盖了失败，让用户产生虚假信心。**重要性：** 破坏了工作流信任——用户认为任务已完成，实际上被静默截断。

### 2. [#19873 — 通过零依赖操作系统沙箱利用模型的 bash 亲和性](https://github.com/google-gemini/gemini-cli/issues/19873)
**优先级：** P2 | **评论：** 9 | ** 👍：** 1

提议通过零依赖操作系统沙箱和执行后意图路由来利用 Gemini 3 模型原生 POSIX 工具链能力（`grep`、`cat`、`sed`、`awk`）。**重要性：** 可通过利用模型训练到的优势显著提高代理效率并减少安全权衡。

### 3. [#21409 — 通才代理无限挂起](https://github.com/google-geminai/gemini-cli/issues/21409)
**优先级：** P1 | **评论：** 8 | ** 👍：** 8

当 Gemini CLI 委托给通才代理时，它会无限挂起——即使像创建文件夹这样的简单操作也可能阻塞超过一个小时。指示模型暂时避免使用子代理可以暂时解决。**重要性：** 高影响力的可用性阻塞，影响核心功能；8 个 👍 表明广泛的社区痛点。

### 4. [#22745 — 评估 AST 感知文件读取、搜索和映射的影响](https://github.com/google-gemini/gemini-cli/issues/22745)
**优先级：** P2 | **评论：** 7 | ** 👍：** 1

追踪对精确方法边界、减少令牌噪音和改进代码库导航的 AST 感知工具的调查。**重要性：** 具有显著令牌节省潜力（当前基线约 36.6k/轮）和提高代码理解准确性的潜力。

### 5. [#21968 — Gemini 太少使用 skills 和子代理](https://github.com/google-gemini/gemini-cli/issues/21968)
**优先级：** P2 | **评论：** 7 | ** 👍：** 0

尽管用户定义了描述性提示的 skills（例如"gradle"、"git"），Gemini 很少自动调用它们——即使任务高度相关。**重要性：** 削弱了自定义 skills 的价值主张；用户必须明确提示本应显而易见的上下文能力。

### 6. [#22267 — 浏览器代理忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267)
**优先级：** P2 | **评论：** 4 | ** 👍：** 0

浏览器代理完全忽略全局或项目级 `settings.json` 中的配置覆盖（如 `maxTurns`），尽管 `AgentRegistry` 在初始化期间正确读取并合并它们。**重要性：** 用户无法自定义浏览器代理行为，限制了可扩展性。

### 7. [#22232 — 增强 browser_agent 弹性：自动会话接管](https://github.com/google-gemini/gemini-cli/issues/22232)
**优先级：** P3 | **评论：** 4 | ** 👍：** 0

请求为浏览器代理添加在遇到持久会话模式下锁定配置文件时的自动会话接管和锁恢复。目前采用限制性的"快速失败"策略。**重要性：** 在可能存在孤立进程的 CI/无头环境中提高健壮性。

### 8. [#21983 — 浏览器子代理在 wayland 上失败](https://github.com/google-gemini/gemini-cli/issues/21983)
**优先级：** P1 | **评论：** 4 | ** 👍：** 1

浏览器子代理在 Wayland 显示服务器上运行时失败。**重要性：** Wayland 是许多现代 Linux 发行版的默认显示服务器；这阻塞了大量用户群体。

### 9. [#24246 — Gemini CLI 在工具超过 128 个时遇到 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)
**优先级：** P2 | **评论：** 3 | ** 👍：** 0

当可用工具超过约 128 个时 CLI 抛出 400 错误，没有智能的工具范围限制。**重要性：** 当用户添加 skills 和扩展时达到硬性上限；需要更智能的过滤以保持在 API 限制内。

### 10. [#23571 — 模型经常在随机位置创建临时脚本](https://github.com/google-gemini/gemini-cli/issues/23571)
**优先级：** P2 | **评论：** 3 | ** 👍：** 0

当 shell 执行受限时，模型会在各种目录中生成多个编辑脚本，在提交前创建清理开销。**重要性：** 污染工作区并用手动清理任务惹恼开发者。

---

## 重要 PR 进展

### 1. [#29728 — 修复(cli): 防止快速 Ctrl+C 中断时的会话污染](https://github.com/google-gemini/gemini-cli/pull/29728)
**优先级：** P1 | **规模：** L

修复了用户在工具执行或流式传输期间快速按两次 Ctrl+C 时的会话污染竞态条件。之前，第二次 Ctrl+C 会在第一次取消完成前触发 `/quit`。**影响：** 中断处理稳定性的关键修复。

### 2. [#29703 — 修复(core): 将原子写入临时文件名保持在 NAME_MAX 内](https://github.com/google-gemini/gemini-cli/pull/29703)
**规模：** M

修复了写入 215-255 字节名称文件时的 `ENAMETOOLONG` 错误。原子写入临时文件后缀（目标名称 + 41 字节 `<uuid>.tmp`）超过了 255 字节的 NAME_MAX 限制。**影响：** 支持使用更长的文件路径。

### 3. [#29644 — 修复(cli): 恢复终端宽度变化时的去抖静态 UI 刷新](https://github.com/google-gemini/gemini-cli/pull/29644)
**优先级：** P1 | **规模：** M/L

恢复终端宽度变化时的去抖 `refreshStatic()` 效果（100ms 去抖），用于内联渲染模式下的水平调整大小处理。**影响：** 改进窗口调整大小期间的终端 UI 响应性。

### 4. [#29722 — 修复(core): 将仅空白符的 UTF-16 和 UTF-32 文件视为空](https://github.com/google-gemini/gemini-cli/pull/29722)
**规模：** M

修复 `isEmpty()` 以正确处理 UTF-16/UTF-32 编码中仅包含空白符的文件，这些文件由于 UTF-8 解码后保留的 NUL 字符而被错误拒绝。**影响：** 纠正文件处理边缘情况。

### 5. [#29695 — 修复(ui): 修复调试控制台高度计算和 terminalBuffer 闪烁](https://github.com/google-gemini/gemini-cli/pull/29695)
**优先级：** P2 | **规模：** L | 🔒 仅维护者

修复调试控制台（F12）高度/布局计算，并通过增量渲染和静态历史项记忆化改进 terminalBuffer 模式下的渲染稳定性。**影响：** 减少 UI 闪烁并改善调试体验。

### 6. [#29725 — 修复(ui): 实现同步输出并隔离旋转器渲染](https://github.com/google-gemini/gemini-cli/pull/29725)
**优先级：** P2 | **规模：** XL

在交互式 UI 帧写入周围实现终端同步输出，并将旋转器渲染状态隔离，以消除 `tmux` 等终端复用器中的屏幕闪烁。**影响：** 终端复用器用户的重大 UX 改进。

### 7. [#29727 — 修复(core): 报告省略的列表目录条目](https://github.com/google-gemini/gemini-cli/pull/29727)
**规模：** S

修复 `list_directory` 在现有文件被路径验证拒绝时静默报告零条目的问题——现在明确向模型和用户面向的显示报告被拒绝的条目。**影响：** 在权限被拒绝场景中提高透明度。

### 8. [#29726 — 修复(sandbox): 解析命令名时忽略 trap 包装器](https://github.com/google-gemini/gemini-cli/pull/29726)
**规模：** L

修复 `sandbox.toml` 中每个命令的沙箱规则在 POSIX（Linux/macOS）上永远不会被应用的问题，因为包装命令被错误识别为 `trap`。**影响：** 为包装命令启用正确的沙箱配置。

### 9. [#29536 — 修复(grep): 防止命令行选项注入](https://github.com/google-gemini/gemini-cli/pull/29536)
**优先级：** P2 | **规模：** M | 🔒 状态：已发送 PR 提醒

通过强制明确的 `-e` 模式终止符来强化本地 grep 执行，防止命令行选项/参数注入（CWE-88），适用于 `git grep` 和系统 `grep`。**影响：** 工具执行的安全加固。

### 10. [#29568 — 修复(core): 在 ChatRecordingService 中实现仅追加增量补丁](https://github.com/google-gemini/gemini-cli/pull/29568)
**优先级：** P1 | **规模：** XL

用增量仅追加补丁和有界内存消息保留替换完整的 `{ $set: { messages } }` 重写。**影响:** 长时间对话的重大性能和内存改进。

---

## 功能需求趋势

根据问题分析，以下主题主导功能需求：

1. **AST 感知工具** — 对利用抽象语法树进行精确代码导航、方法边界和令牌高效读取的强烈兴趣（#22745、#22746、#22747）。多个相关问题表明这是一个战略方向。

2. **增强的子代理编排** — 更佳的子代理发现（#18285）、通过 `/chat share` 的轨迹可见性（#22598）、并行协作（#18287）和自主技能调用的请求（#21968）。

3. **终端 UI 健壮性** — 持续努力实现无闪烁渲染、终端调整大小处理和复用器同步输出——表明终端体验是一个优先领域。

4. **持久任务跟踪** — 用基于文件的 CRUD 操作替换上下文中任务跟踪的功能请求，用于会话持久化（#18836）。

5. **零依赖沙箱** — 不依赖额外工具利用模型 bash 亲和性的愿景（#19873）。

---

## 开发者痛点

最常报告的挫败感：

- **代理挂起** — 通才代理挂起（#21409）导致小时级阻塞是最具可视性的痛点，有 8 个 👍 反应。
- **静默失败** — 子代理在达到 MAX_TURNS 时报告成功（#22323）掩盖了不完整的工作。
- **不可靠的自定义 skills** — 定义的 skills 从不自动调用（#21968）损害了可扩展性。
- **浏览器代理僵化** — 无法自定义设置（#22267），在 Wayland 上失败（#21983），缺乏会话恢复（#22232）。
- **工具天花板** — 在约 128 个工具时遇到 400 错误（#24246）限制了用户添加功能时的可扩展性。
- **工作区污染** — 临时脚本散布在目录中（#23571）需要手动清理。
- **终端闪烁** — 影响终端复用器用户的长期问题，现正在积极解决（#29725、#29695）。

---

*数据来源：github.com/google-gemini/gemini-cli | 数据截至 2026-10-13*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest into Simplified Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references verbatim
4. Keep technical terms, project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
5. Use natural technical Chinese, the register of a Chinese developer newsletter - not literal word-for-word

Let me translate this carefully, maintaining all the structure and technical fidelity while making it read naturally in Chinese.</think>

# GitHub Copilot CLI 社区速览
**日期：** 2026-10-13

---

## 今日焦点

团队发布了 **v1.0.97-2**，修复了大型仓库中自定义 Agent 发现的问题，并改进了内联图片渲染。与此同时，社区仍在应对 macOS Gatekeeper 拦截问题（22 👍）和 Windows 平台 MCP 认证失败这两个最受关注的问题。多个新的 BYOK（使用自己的密钥）相关问题浮出水面，凸显了模型匹配和子 Agent API 路由方面的挑战。

---

## 发布动态

| 版本 | 类型 | 关键变更 |
|---------|------|-------------|
| **v1.0.97-2** | 修复 | 即使 Agent 定义超过 100 个或深层嵌套，也能正确发现自定义 Agent |
| **v1.0.97-1** | 修复 | 常规问题修复和改进 |
| **v1.0.97-0** | 新增 | 支持 Agent 级别的声明式钩子；在支持的终端上默认渲染内联图片（使用 `/settings inlineImages false` 可禁用）|
| **v1.0.96** | 多种 | 交互式沙盒设置建议使用环境密钥；`/model` 和 `/config` 中的模型 ID 现在不区分大小写；企业策略解析期间可使用 `/allow-all` |

---

## 热门问题

### 1. [Copilot 应用被 macOS Gatekeeper 拦截](https://github.com/github/copilot-cli/issues/970) — 22 👍
**状态：** 开启 | **领域：** 安装

HomeBrew 升级后，macOS Gatekeeper 将 Copilot CLI 标记为恶意软件并拦截。用户需手动在"隐私与安全"设置中批准。这影响了严格执行安全策略的企业环境。

### 2. [Windows: MCP Entra 登录失败](https://github.com/github/copilot-cli/issues/5068) — 12 👍
**状态：** 开启 | **领域：** 平台-windows, mcp

向受 Entra ID 保护的 MCP 服务器（如 Azure DevOps MCP）进行身份验证时失败，提示 *"无法安全验证此服务器声明的账户代理作用域"*。影响了企业 Windows 用户。

### 3. [为 Claude Sonnet 增强提示缓存](https://github.com/github/copilot-cli/issues/3808) — 8 👍
**状态：** 开启 | **领域：** 上下文-内存, 模型

Anthropic 的提示缓存功能没有明显的优化效果。对于大型代码库，每次请求都重新发送完整上下文，导致延迟增加和 Token 成本上升。

### 4. [BYOK: 短模型名称无法匹配](https://github.com/github/copilot-cli/issues/5127) — 新增
**状态：** 开启 | **领域：** 分类

SDK 配置的 BYOK 提供商使用如 `copilot/gpt-5.4-mini` 这样的短模型名称无法匹配，导致自定义 Agent 失败并显示误导性的"无 GitHub OAuth 令牌"错误。

### 5. [BYOK: 子 Agent 始终使用会话的 Wire API](https://github.com/github/copilot-cli/issues/5103) — 新增
**状态：** 开启 | **领域：** Agent, 模型

`COPILOT_PROVIDER_WIRE_API` 适用于所有请求，包括子 Agent。当子 Agent 使用来自不同系列的模型运行（如在仅支持 `responses` API 的提供商上使用 GPT-5）时，请求会返回 HTTP 400 错误。

### 6. [会话事件投递在 120 秒后超时](https://github.com/github/copilot-cli/issues/5100) — 新增
**状态：** 开启 | **领域：** 会话

长时间运行的会话失败，提示 *"会话主机未在 120 秒内确认事件"*。会话将永久不可用，必须手动恢复。

### 7. [macOS 沙盒阻止 Gradle 守护进程](https://github.com/github/copilot-cli/issues/5105) — 新增
**状态:** 开启 | **领域：** 权限

即使允许本地网络，Gradle 也无法在 macOS 沙盒内连接到其守护进程，阻塞了构建相关的工作流。

### 8. [终端安全拒绝阻止恢复](https://github.com/github/copilot-cli/issues/5123) — 新增
**状态:** 开启 | **领域：** 分类

Windows 重启后，会话恢复触发重复的安全拒绝，使基本的恢复操作变得"不可接受地繁琐"。

### 9. [企业管理的自定义模型无法选择](https://github.com/github/copilot-cli/issues/4960)
**状态:** 已关闭 | **领域:** 企业, 模型

企业自定义模型显示在 `/model` 选择器中但无法选中。已关闭，但未显示明确的解决方案。

### 10. [ACP: /rename 报告成功但未重命名](https://github.com/github/copilot-cli/issues/5115) — 新增
**状态:** 开启 | **领域:** 会话, 非交互式

在 ACP 模式下（`copilot --acp --stdio`），`/rename` 命令虚假地报告成功，实际上并未重命名会话。

---

## 关键 PR 进展

*过去 24 小时内没有 PR 更新。*

---

## 功能请求趋势

| 主题 | 相关问题 |
|-------|---------------|
| **BYOK / 自定义提供商** | #5127, #5103, #5126 — BYOK 设置下的模型匹配、API 路由和子 Agent 模型选择 |
| **MCP 增强** | #4834, #5079 — 支持 MCP 2026-07-28 协议和多轮请求 |
| **提示/执行可见性** | #5125 — 跟踪提示执行时间；#3808 — Claude Sonnet 提示缓存 |
| **终端安全** | #5123, #5120 — 改进会话恢复和崩溃后的终端状态恢复 |
| **macOS 集成** | #970, #5105 — Gatekeeper 兼容性和 Gradle 沙盒权限 |

---

## 开发者痛点

1. **macOS Gatekeeper 拦截** — HomeBrew 更新后频繁出现误报；企业环境需要手动干预
2. **Windows MCP 认证** — Entra ID 登录失败或导致 CLI 崩溃；Dataverse 和其他 Microsoft 服务的 OAuth 发行者验证存在问题
3. **BYOK 配置复杂性** — 短模型名称无法匹配提供商限定的 ID；子 Agent 静默使用错误的 API 端点
4. **会话可靠性** — 120 秒超时永久破坏会话；会话恢复触发安全循环
5. **ACP 模式限制** — 自定义 Agent 启动失败，`/rename` 不工作，存在一般性的功能差距
6. **终端状态泄漏** — CLI 崩溃后终端保持鼠标跟踪启用状态，使其无法使用
7. **插件卸载（Windows）** — 卸载插件时出现访问被拒绝错误

---

*数据来源：github.com/github/copilot-cli | 数据周期：2026-10-12 至 2026-10-13*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest into Simplified Chinese. I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Keep URLs, issue/PR numbers, file paths, technical terms, and code identifiers as-is
3. Use natural technical Chinese suitable for a developer newsletter
4. Output ONLY the translation, no preamble or explanation

Let me go through the document section by section:

**Title and Date:**
- "OpenCode Community Digest" → "OpenCode 社区周报"
- "Date: 2026-10-13" → "日期：2026年10月13日"

**Section 1: Today's Highlights**
- Translate while keeping technical terms and URLs
- Use natural Chinese technical writing style

**Section 2: Releases**
- Simple translation

**Section 3: Hot Issues**
- Translate issue titles and summaries
- Keep numbers, URLs, emoji as-is

**Section 4: Key PR Progress**
- Translate PR summaries
- Keep numbers, URLs as-is

**Section 5: Feature Request Trends**
- Translate naturally

**Section 6: Developer Pain Points**
- Translate technical frustrations

**Footer:**
- Translate the attribution line

Let me do this translation now:</think>

# OpenCode 社区周报

**日期：2026年10月13日**

---

## 1. 本期要点

OpenCode 社区本周重点关注 V2 迁移和稳定性问题。一个重要的 PR（#54921）正在解决长期存在的配置路径兼容性问题，为系统配置目录支持添加最低优先级。同时，模型回退（fallback）功能和多数据库支持已作为关闭的特特性完成。Windows 特定的控制台窗口闪烁和缩放持久化问题仍未解决，V2 中插件路径加载问题也持续存在。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 热门 Issue

| # | Issue | 摘要 | 👍 |
|---|-------|---------|---|
| 1 | **[#7602](https://github.com/anomalyco/opencode/issues/7602)** | **原生模型回退/故障转移支持** — OpenCode 仅在模型 ID 相同时支持提供者回退。用户请求支持在不同模型之间定义回退（例如「模型 A 出错 → 重试模型 B」）。这是呼声最高的特性，获得 **120 👍** 和 **31 条评论**。 | 120 |
| 2 | **[#14212](https://github.com/anomalyco/opencode/issues/14212)** | **支持更多数据库用于 OpenCode 状态存储** — 迁移到 Drizzle 后，支持 PostgreSQL 等其他数据库用于会话存储/状态。已关闭，获得 **24 👍**。 | 24 |
| 3 | **[#50168](https://github.com/anomalyco/opencode/issues/50168)** | **桌面缩放在重启后重置为 100%** — OpenCode 桌面版不记住使用 Ctrl++/- 选择的缩放级别。退出并重新打开后，界面会恢复到 100% 而不是恢复上次选择的缩放。 | 3 |
| 4 | **[#52281](https://github.com/anomalyco/opencode/issues/52281)** | **Windows：子 cmd.exe 闪烁控制台窗口并抢夺焦点** — 在 Windows 11 上，opencode-cli 通过 cmd.exe 生成短生命周期子进程（git 探测、MCP 启动），每个进程都会创建一个可见的控制台窗口并抢夺焦点，尽管已设置 `windowsHide`。 | 0 |
| 5 | **[#17073](https://github.com/anomalyco/opencode/issues/17073)** | **在 Grep/Glob 结果中保护 .env 文件** — grep 和 glob 的权限规则匹配搜索模式，而不是匹配的文件路径。用户请求在结果中保护敏感文件如 .env，而不仅仅是直接读取。 | 7 |
| 6 | **[#53074](https://github.com/anomalyco/opencode/issues/53074)** | **V2 不遵循 /etc/opencode** — V1 在 Linux 上从 /etc 读取，并将此作为不可变配置用于管理员强制设置。V2 似乎不支持此功能。 | 1 |
| 7 | **[#51107](https://github.com/anomalyco/opencode/issues/51107)** | **V2 不从 %ProgramData%\opencode 加载托管配置** — V1 记录了托管配置目录（Windows 上为 %ProgramData%\opencode，Linux 上为 /etc/opencode）以最高优先级加载，用于管理员设置。V2 不读取此目录。 | 6 |
| 8 | **[#53858](https://github.com/anomalyco/opencode/issues/53858)** | **zh/zht 语言环境字典缺少 93 个英文中存在的键** — 简体中文（zh.ts）和繁体中文（zht.ts）应用字典已与 en.ts 产生偏差：英文中有 93 个键在 zh/zht 中不存在，导致界面出现混合语言。 | 0 |
| 9 | **[#49608](https://github.com/anomalyco/opencode/issues/49608)** | **V2 本地插件路径加载失败** — 无法按文档说明加载本地插件。指向 .ts 文件的 plugins 条目被拒绝，显示「配置的插件路径必须是目录」。 | 1 |
| 10 | **[#54991](https://github.com/anomalyco/opencode/issues/54991)** | **粘贴图片在使用纯文本模型时不显示缩略图** — 在 OpenCode 桌面上，使用多模态模型粘贴图片会显示缩略图预览，但使用纯文本模型时不显示缩略图。 | 0 |

---

## 4. 重要 PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| 1 | **[#54921](https://github.com/anomalyco/opencode/pull/54921)** | **fix(core): 在最低优先级发现系统配置目录** — 修复 #51107 和 #53074。包含平台系统配置目录（macOS 上为 /Library/Application Support/opencode，Linux 上为 /etc/opencode）作为最低优先级，恢复 V1 行为。 |
| 2 | **[#55004](https://github.com/anomalyco/opencode/pull/55004)** | **fix(util): 解码 OTLP 头部值** — OTLP 收集器当前收到 `Bearer%20test-token` 而不是 `Bearer test-token`。此 PR 在拆分条目后解码头部值。 |
| 3 | **[#55003](https://github.com/anomalyco/opencode/pull/55003)** | **fix(util): 保留共享日志对象** — 记录 `{ first: shared, second: shared }` 当前会将 `second` 替换为 `[Circular]` 并丢失其字段。 |
| 4 | **[#54994](https://github.com/anomalyco/opencode/pull/54994)** | **fix(opencode): 停止压缩循环和过期压缩重试** — 如果压缩后的下一个轮次仍然溢出，循环会停止并抛出 ContextOverflowError，而不是无限压缩。 |
| 5 | **[#54234](https://github.com/anomalyco/opencode/pull/54234)** | **fix(cli): 在 v2 上恢复 models --refresh 标志** — `opencode models --refresh`（和 `--verbose`）在 v2 CLI 重写期间被丢弃。此 PR 恢复了该功能。 |
| 6 | **[#54976](https://github.com/anomalyco/opencode/pull/54976)** | **fix(core): 根据 webfetch 权限控制 Code Mode 获取** — `"webfetch": "deny"` 规则不适用于 Code Mode。全局 fetch 直接调用平台的 fetch 而不是遵循权限。 |
| 7 | **[#52980](https://github.com/anomalyco/opencode/pull/52980)** | **fix(core): 保留中断的工具检查点** — 保留中断的工具检查点，直到异步清理和检查点发布完成。 |
| 8 | **[#52978](https://github.com/anomalyco/opencode/pull/52978)** | **fix(core): 通过环境读取工作区文件** — 将工作区文件系统读取、列表和规范化的路由改为通过 Environment.files 而不是服务器文件系统。 |
| 9 | **[#54226](https://github.com/anomalyco/opencode/pull/54226)** | **fix(mcp): 当工具调用被 401 拒绝时标记服务器需要认证** — 当 MCP 服务器在 OAuth 刷新失败后继续拒绝每个刷新后的令牌时，服务器状态保持「已连接」而没有重新认证的信号。 |
| 10 | **[#54949](https://github.com/anomalyco/opencode/pull/54949)** | **feat(tui): 提示起始高度、百分比大小和主屏幕布局设置** — 添加提示起始高度、百分比大小和主屏幕布局设置。 |

---

## 5. 特性请求趋势

来自 issue 和 PR 的最热门特性方向：

1. **模型故障转移与回退** — 支持在不同模型之间自动重试的原生功能（例如从模型 A 回退到模型 B 以应对错误或速率限制）。
2. **多数据库支持** — 除了 SQLite 外，支持 PostgreSQL 和其他数据库用于 OpenCode 状态存储。
3. **配置兼容性** — 在 V2 中恢复 V1 配置路径（/etc/opencode、%ProgramData%\opencode）并设置正确的优先级。
4. **插件系统改进** — 修复 V2 中本地插件路径加载问题。
5. **Windows 桌面用户体验** — 修复控制台窗口闪烁、缩放持久化和其他 Windows 特定行为。
6. **国际化** — 完善 zh/zht 语言环境字典（缺少 93 个键）。
7. **隐私/安全** — 在 grep/glob 结果中保护 .env 文件，而不仅仅是直接读取。

---

## 6. 开发者痛点

反复出现的问题和高频请求：

- **V2 配置迁移缺口** — 开发者报告 V2 不遵循 /etc/opencode 和 %ProgramData%\opencode，破坏了管理员强制设置的工作流程。
- **Windows 控制台窗口闪烁** — 每个子 cmd.exe 进程（git 探测、MCP 启动）都会闪烁可见的控制台窗口并抢夺焦点，尽管已设置 `windowsHide`。
- **插件加载失败** — 本地插件路径被拒绝显示「配置的插件路径必须是目录」，阻止了自定义插件的使用。
- **内存与 CPU 问题** — 空闲服务消耗 20-45% CPU 进行 SQLite WAL 写入；后台守护进程占用约 700-800MB RSS。
- **工具文件崩溃行为** — 单个失败的 .opencode/tool/*.{js,ts} 文件会崩溃整个工具注册表并使项目无法使用。
- **错误静默丢弃** — 会话运行缺陷被静默丢弃，没有 UI 错误提示；用户不知道运行失败。
- **缩放/UI 状态未持久化** — 桌面缩放级别每次重启后都重置为 100%。

---

*由 MiniMax-M1 生成 | 来源：github.com/anomalyco/opencode | 2026年10月13日*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this GitHub digest into Chinese, following the detailed rules provided. Let me analyze what needs to be done:

1. Translate everything into Simplified Chinese (简体中文)
2. Keep all Markdown structure exactly as-is
3. Keep URLs, code references, issue numbers, etc. verbatim
4. Use natural technical Chinese - not literal word-for-word
5. Output ONLY the translation, no preamble or explanation

Let me go through each section:

**1. Today's Highlights**
- "Pi team shipped v1.2.0" → "Pi 团队发布了 v1.2.0"
- "per-key OpenRouter model lists" → "按密钥过滤 OpenRouter 模型列表" or keep as "per-key OpenRouter 模型列表"
- "clipboard copy doesn't work anymore" → "剪贴板复制功能失效"
- "WSL users face persistent login hangs" → "WSL 用户遇到登录卡死问题"

**2. Releases**
- Table stays, translate descriptions

**3. Hot Issues**
- Table stays, translate descriptions and comments count

**4. Key PR Progress**
- Table stays, translate descriptions

**5. Hot Discussions**
- Table stays, translate summaries

**6. Feature Request Trends**
- List items translate naturally

**7. Developer Pain Points**
- List items translate naturally

Let me do the translation now, being careful to:
- Use proper Chinese punctuation (，。：；""等)
- Keep technical terms in English when appropriate
- Make it read like a Chinese developer newsletter
- Preserve all formatting exactly</think>

# Pi 社区摘要 — 2026-10-13

## 1. 今日要闻

Pi 团队发布了 **v1.2.0**，新增按密钥过滤 OpenRouter 模型列表功能——使用 OpenRouter 密钥时，Pi 现在仅显示该密钥可访问的模型，自动从 API 获取上下文大小、最大输出限制和定价信息。同时，社区正在处理几个影响广泛的问题：自 v0.87.x 以来，Bun 编译的可执行文件中图片附件完全丢失；SSH/容器环境下剪贴板复制功能失效；WSL 用户在进行 GitHub Copilot 设备授权时登录持续卡死。

---

## 2. 版本发布

| 版本 | 更新内容 |
|------|----------|
| **v1.2.0** | **按密钥过滤 OpenRouter 模型列表** — 使用 OpenRouter 密钥时，Pi 仅列出该密钥可访问的模型，自动从 API 获取上下文大小、最大输出限制和定价信息。支持在 `models.json` 中配置区域性端点。 |

*变更日志：[earendil-works/pi/releases/tag/v1.2.0](https://github.com/earendil-works/pi/releases/tag/v1.2.0)*

---

## 3. 热门 Issue

| Issue | 状态 | 为何重要 | 评论数 |
|-------|------|----------|--------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) — **Pi login hangs in WSL after browser-based GitHub Copilot device authorization** | 已关闭 | WSL 用户无法完成 Copilot 认证——终端始终无法检测到浏览器端授权完成，导致会话卡死。 | 28 |
| [#9361](https://github.com/earendil-works/pi/issues/9361) — **Windows: settings shellPath is non-deterministically ignored; PATH fallback executes via WSL System32 bash.exe** | 开启 | 在加载扩展后，Windows 上配置的 `shellPath` 被静默忽略，导致 shell 解析不可预测，并通过错误的 bash 二进制文件执行。 | 14 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) — **Regression: clipboard copy doesn't work anymore** | 已关闭 | OSC 52 剪贴板处理逻辑变更现需 SSH 会话检测——交互式容器中的用户完全失去剪贴板功能。 | 10 |
| [#10840](https://github.com/earendil-works/pi/issues/10840) — **openai-codex: GPT-6.1 Sol still uses 272K after Codex default increased to 500K** | 已关闭 | Pi 保留了过时的上下文窗口数据 (272K)，即使 OpenAI 已将 Codex 默认值提升至 500K，可能导致 token 预算计算错误。 | 8 |
| [#9391](https://github.com/earendil-works/pi/issues/9391) — **After compaction, stale signed thinking blocks are replayed every turn; Anthropic drops them** | 已关闭 | 压缩后的会话重复触发 `prefix_binding_mismatch` 错误，因为 Anthropic 拒绝了重放的思想块——长时间会话被破坏。 | 7 |
| [#10645](https://github.com/earendil-works/pi/issues/10645) — **resizeImage resolves null in compiled (Bun) executables — all image attachments omitted since 0.87.x** | 开启（进行中） | Bun 编译的 Pi 二进制文件无法调整图片大小，导致所有图片附件被省略。 Standalone 可执行文件用户受影响严重。 | 7 |
| [#10705](https://github.com/earendil-works/pi/issues/10705) — **abort() from agent_settled resolves but an already-deferred continuation still runs** | 开启 | 在 agent 回调上调用 `abort()` 不会停止已排队的延续，导致会话结束后仍有 HTTP 请求发出。 | 4 |
| [#10864](https://github.com/earendil-works/pi/issues/10864) — **Session outliving its release loses not-yet-loaded providers after pi update prunes it** | 已关闭 | 在长时间会话运行时执行 `pi update` 会导致提供商切换失败，出现"找不到模块"错误，因为未加载的分块丢失。 | 3 |
| [#10785](https://github.com/earendil-works/pi/issues/10785) — **Resuming a session drops dynamically activated tools** | 开启 | 会话中动态激活的工具在恢复后失效，影响延迟暴露和可选工具。 | 3 |
| [#10628](https://github.com/earendil-works/pi/issues/10628) — **OSC 52 copy in fullscreen TUI is swallowed by tmux** | 开启 | tmux 中的选择即复制失败，因为 tmux 将 OSC 52 序列捕获到其粘贴缓冲区而不转发给客户端。 | 3 |

---

## 4. 关键 PR 进展

| PR | 状态 | 描述 |
|----|------|------|
| [#10694](https://github.com/earendil-works/pi/pull/10694) | 开启 | **fix(ai): adapt OAuth device polling margin after slow_down** — 调整 Copilot OAuth 时序以处理 WSL/Ubuntu 中的时钟偏差，解决持续出现的"太快"轮询失败问题。 |
| [#10855](https://github.com/earendil-works/pi/pull/10855) | 已关闭 | **fix(ai): map minimal thinking to low on xiaomi MiMo models** — 将 Pi 的 `minimal` 思考级别映射到 MiMo API 的 `low`（后者拒绝 `minimal`）。 |
| [#10569](https://github.com/earendil-works/pi/pull/10569) | 已关闭 | **feat(ai,coding-agent): filter OpenRouter models by key availability** — 通过 `GET /api/v1/models/user` 过滤模型目录，仅显示用户密钥可访问的模型。 |
| [#10847](https://github.com/earendil-works/pi/pull/10847) | 开启 | **fix: preserve legacy model catalog route on publish** — 通过保留旧版目录路由，确保旧版 Pi (0.80.8–0.84.4) 继续正常工作。 |
| [#10718](https://github.com/earendil-works/pi/pull/10718) | 开启 | **fix(coding-agent): include system prompt in --export HTML** — 将交互式 `/export` 的行为与 CLI 导出对齐，包含记录的 system prompt。 |
| [#10672](https://github.com/earendil-works/pi/pull/10672) | 已关闭 | **feat(ai,coding-agent): list only the OpenRouter models a key may use** — v1.2.0 按密钥过滤模型功能的核心实现。 |
| [#10533](https://github.com/earendil-works/pi/pull/10533) | 已关闭 | **fix(durable): reject waits that close a cycle** — 循环等待现在在闭合循环的等待处明确失败，而非无限挂起。 |
| [#10834](https://github.com/earendil-works/pi/pull/10834) | 已关闭 | **fix(coding-agent): fall back after Bun image worker null** — 修复 Bun 编译的图片调整大小工作线程中空响应的处理，允许回退到 URL/内联工作线程。 |
| [#10830](https://github.com/earendil-works/pi/pull/10830) | 已关闭 | **fix(coding-agent): bound retries across successful tool turns** — 防止成功工具响应后重试预算重置，修复无限重试循环。 |
| [#10820](https://github.com/earendil-works/pi/pull/10820) | 已关闭 | **fix(ai): send x-opencode-session by endpoint, not provider id** — 按端点匹配而非提供商 ID 路由会话头，修复与 OpenCode zen 端点的兼容性。 |

---

## 5. 热门讨论

| 讨论 | 分类 | 摘要 |
|------|------|------|
| [#10841](https://github.com/earendil-works/pi/discussions/10841) — **Where should a package put a one-shot pre-turn routing decision? (before_agent_start with async sidecar I/O)** | 想法 | 一位包维护者（MatPilot，用于材料研究）正在寻求架构指导：实现一个廉价的分类层（通过 Python sidecar），在每个用户提示时运行一次以路由到专业研究模型。问题焦点是在 `before_agent_start` 生命周期中何处挂载异步 I/O。 |

---

## 6. 功能需求趋势

从 Issue 和 PR 中涌现出以下主题：

1. **模型发现与过滤** — 对 `/model` 和 `/scoped-models` 中providers和模型的细粒度控制有大量需求，包括环境变量门控的 providers、按密钥的限制，以及统一 UI。
2. **持久会话改进** — 对持久会话工具有强烈兴趣：每个模型请求的任务标识、崩溃恢复文档，以及子代理输出处理。
3. **跨平台 shell 处理** — Windows shell 路径解析不确定；需要更好的 Git Bash / WSL 集成。
4. **扩展可观测性** — 需要钩子来观察或包装会话模型调用，以及在 JSON 模式事件中发出会话条目 ID。
5. **Worker/编译健壮性** — Bun 编译可执行文件（图片调整大小、模块加载）和 Node.js `--watch` 模式需要修复。

---

## 7. 开发者痛点

- **图片处理回归**：自 v0.87.x 以来 Bun 构建中图片附件完全丢失，导致 Standalone 二进制用户的核心功能被破坏。
- **剪贴板失效**：SSH 容器和 tmux 环境中 OSC 52 复制失败——一个看似无关的修复引入了回归。
- **WSL OAuth 卡死**：GitHub Copilot 设备授权在 WSL 中永远无法完成，阻塞了整个平台。
- **恢复后会话状态**：恢复后动态激活的工具失效，长时间会话在 `pi update` 剪裁旧版本后中断。
- **重试逻辑缺陷**：成功的工具响应错误地重置重试预算，导致无限重试循环。
- **Windows shell 路径不稳定**：加载扩展后，配置的 shell 路径在 Windows 上被静默忽略。

---

*基于 GitHub 数据为 earendil-works/pi 生成 — 2026-10-13*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this English Qwen Code community digest into Simplified Chinese. Let me carefully translate while preserving:

1. All Markdown structure (headings, tables, lists, bold, etc.)
2. All URLs and links
3. All project names, issue/PR numbers, version tags
4. Numbers and dates
5. Code blocks and file paths
6. The technical Chinese register

Let me translate section by section:

---

# Qwen Code 社区速报 — 2026年10月13日

## 今日要闻

Qwen Code 项目持续快速迭代，发布了新的 nightly 版本，专注于提升连接器的稳定性。社区正在讨论Managed Agent 双路径架构（#12380）和多智能体 API 设计（#13785）等重大架构演进，反映出项目向更复杂的智能体编排方向的发展。同时，团队也在解决平台分发方面的挑战，特别是 Kubernetes 运行时（#13395）和 Linux 打包问题（#13680）。

---

## 版本发布

### v0.25.1-nightly.20261012.18f80f5666

这是一个专注于提升托管智能体子系统稳定性的夜间构建版本。

- **修复**：R2 评审中提出的连接器和代理稳定性改进（PR #13330）——增强了托管智能体通信层的可靠性
- [查看版本](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261012.18f80f5666)

---

## 热门 Issue

### 1. 托管智能体双路径架构提案
**#12380** — [proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380)


- **重要性**：提出了一个根本性的架构转变，将 TypeScript 智能体循环与模型推理分离，引入了持久会话所有权、工作区绑定和可恢复的工具执行。这份提案是 Qwen Code 下一代智能体系统的蓝图。
- **状态**：进行中 | **评论**：56

### 2. Kubernetes 工具运行时进度跟踪
**#13395** — [tracking(runtime): Kubernetes tool runtime 进度与跨平台交付门禁](https://github.com/QwenLM/qwen-code/issues/13395)
- **重要性**：追踪

通向 Kubernetes 原生工具运行时交付的关键路径，这对平台分发和企业部署场景至关重要。
- **状态**：进行中 | **评论**：19

### 3. XML 工具调用恢复 Bug
**#13492** — [XML tool-call recovery drops outer calls containing quoted tool markup](https://github.com/QwenLM/qwen-code/issues/13492)
- **重要性**：关键 Bug，XML 工具调用内的引号工具标记导致整个外部调用链被丢弃。部分修复已完成；PR #13579 待合并。
- **状态**：审核中 | **评论**：11

### 4. 多智能体 API：智能体身份维度
**#13785** — [Multi-Agent API: an agent-identity dimension on the public contract](https://github.com/QwenLM/qwen-code/issues/13785)
- **重要性**：扩展公共 API 以实现多智能体执行的可归因性、树形结构和可中断性，这是高级智能体编排的基础能力。
- **状态**：开放 | **评论**：7

### 5. SWE 测试套件用于功能测试
**#14011** — [feat: harness SWE — feature-type benchmark tasks](https://github.com QwenLM/qwen-code/issues/14011)
- **重要性**：提议一个自测基准套件，测试 qwen code 自身功能（待办事项跟踪、计划模式、子智能体委托），实现工具链的系统性验证。
- **状态**：开放 | **评论**：5

### 6. Web Shell 后台子智能体状态显示
**#13898** — [Web Shell: show live status of background subagents](https://github.com/QwenLM/qwen-code/issues/13898)
- **重要性**：Web Shell 的用户体验改进——请求显示后台子智能体的实时状态（运行中/已完成/耗时），增强可观察性。
- **状态**：开放 | **评论**：5

### 7. 智能体测试套件的利益冲突
**#14004** — [Separate the agentic harness from the LLM subscription](https://github.com/QwenLM/qwen-code/issues/14004)
- **重要性**：质疑同一实体构建测试套件并销售 LLM 订阅的合理性——这是项目治理和透明度的讨论。
- **状态**：开放 | **评论**：4

### 8. CI 集成测试失败
**#13951** — [CI: Integration Tests fails at Checkout with "fatal: pack has 1 unresolved delta"](https://github.com/QwenLM/qwen-code/issues/13951)
- **重要性**：CI 流水线中断影响 PR 验证；表明 git 仓库完整性存在问题需要调查。
- **状态**：开放 | **评论**：4

### 9. RTL/LTR 文本渲染 Bug
**#13837** — [Chat view breaks mixed RTL/LTR text](https://github.com/QwenLM/qwen-code/issues/13837)
- **重要性**：影响希伯来语/阿拉伯语用户的无障碍 Bug——代码块强制 LTR 方向，导致混合语言场景下的文本镜像和乱码。
- **状态**：开放 | **评论**：5

### 10. You.com MCP 文档
**#13987** — [docs(tools): add You.com free MCP to the web search MCP services](https://github.com/QwenLM/qwen-code/issues/13987)
- **重要性**：社区贡献的 You.com 免费 MCP 服务文档新增，扩展搜索集成选项。
- **状态**：开放 | **评论**：4

---

## 关键 PR 进展

### 1. #13996 — SDK Java: 私有 CSI 会话和原生 SQL 授权
添加了完整的私有 CSI 会话授权块，包括显式会话创建、持久请求固定、原生日志/资源证明和不可变 SQL 执行授权。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13996)

### 2. #13955 — 托管智能体：成员间消息传递
支持团队成员通过持久命令通道进行端到端消息传递，无需智能体负责人介入——这对多智能体协调至关重要。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13955)

### 3. #14008 — 核心：清理错误消息前的折叠原因
修复了错误文本边界问题，消息被清理但 `error.cause` 保持原样传递，导致 ANSI 密集型错误超出消息限制。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/14008)

### 4. #14013 — 守护进程：保留提示词重生成元数据
保留通过守护进程提示词回显、对话重放和 SDK UI 事件的

重生成关系，使客户端能够发现并使用提示词重生成功能。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/14013)

### 5. #13731 — 频道：保留 Markdown 结构
在结构边界（链接、表格、代码块）附近以 3,800 单位为目标拆分 Markdown 消息，设置 20,000 单位上限——改进钉钉/企业微信集成。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13731)

### 6. #13973 — Web Shell：复用标准 UI 实现托管智能体
采用标准 Web Shell 组件构建托管智能体界面

，确保一致的交互体验。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13973)

### 7. #13642 — 运行时代理：JDBC 历史记录bounded retention
为已回收绑定的旧终端运行时代理 JDBC 历史记录添加可选的有界清理，在专用调度器上运行。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13642)

### 8. #14016 — CLI：将裸 ↑/↓ 交还给输入历史
恢复裸箭头键用于输入历史的循环浏览功能，改进了用户导航体验。
- [View PR](https://github.com/QwenLM/qwen-code/pull/14016)

### 9. #13902 — 项目智能体身份到 ACP/守护进程协议
将智能体身份和智能体团队协调映射到网络协议，支持通过 `_meta.agent_id` 进行子智能体委托追踪。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13902)

### 10. #14003 — CLI: 可重复的 --disable-mcp-server 标志
添加 `--disable-mcp-server <name>` 实现每次调用的 MCP 服务器排除，无需修改 settings.json。
- [查看 PR](https://github.com/QwenLM/qwen-code/pull/14003)

---

## 功能需求趋势

根据 Issue 分析，以下功能方向需求最高：

| 趋势 | 描述 |
|-------|-------------|
| **多智能体编排** | 多个 Issue（#12380、#13785、#13902）提议在公共 API 上实现智能体身份、团队协调和归因 |
| **平台分发** | Kubernetes 运行时（#13395）、Linux 打包修复（#13680）、跨平台交付门禁 |
| **增强可观察性** | 后台子智能体状态显示（#13898）、会话状态可见性、运行时遥测 |
| **UI/UX 改进** | RTL/LTR 支持（#13837）、Web Shell 改进、终端缓冲区行为 |
| **内存与持久化** | 内存提取节奏跟进（#13612）、JDBC 历史记录有界清理（#13642） |
| **MCP 生态** | 扩展 MCP 服务器支持（#13987）、每次调用服务器控制（#14003） |

---

## 开发者痛点

1. **CI 流水线可靠性**：集成测试失败（#13951）和 git pack 问题阻止 PR 合并——开发者报告在等待 CI 时感到沮丧。

2. **设置持久化**：`--disable-mcp-server` 标志在设置重计算后丢失（#14009）造成用户体验困惑，用户偏好无法保留。

3. **会话重新附加失败**：控制平面终止后子会话重新附加返回 409（#13838）导致开发者持有孤立的会话。

4. **错误消息边界**：原始错误原因绕过消息大小限制（#14008）在子智能体错误报告中导致意外截断。

5. **Linux 打包**：供应商提供的 ripgrep 二进制文件导致每次 Linux 启动时发生 SIGSEGV（#13680）使桌面应用在 Linux 上无法使用。

6. **Unicode/本地化**：UTF-8 BOM 静默破坏 .lsp.json（#13943）、RTL 文本渲染问题（#13837）——影响国际用户的无障碍问题。

7. **回合折叠竞态条件**：后台任务通知在 Web Shell（#13998）中隐藏最终答案——回合折叠和通知交付之间的竞态。

---

*基于 GitHub 数据生成 — 2026年10月13日*</think>

# Qwen Code 社区速报 — 2026年10月13日

## 今日要闻

Qwen Code 项目持续快速迭代，发布了新的 nightly 版本，专注于提升连接器的稳定性。社区正在讨论 Managed Agent 双路径架构（#12380）和多智能体 API 设计（#13785）等重大架构演进，反映出项目向更复杂的智能体编排方向的发展。同时，团队也在解决平台分发方面的挑战，特别是 Kubernetes 运行时（#13395）和 Linux 打包问题（#13680）。

---

## 版本发布

### v0.25.1-nightly.20261012.18f80f5666

这是一个专注于提升托管智能体子系统稳定性的夜间构建版本。

- **修复**：R2 评审中提出的连接器和代理稳定性改进（PR #13330）——增强了托管智能体通信层的可靠性
- [查看版本](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261012.18f80f5666)

---

## 热门 Issue

### 1. 托管智能体双路径架构提案

**#12380** — [proposal(serve): Define Managed Agent dual-path architecture and staged delivery](https://github.com/QwenLM/qwen-code/issues/12380)

- **重要性**：提出了一个根本性的架构转变，将 TypeScript 智能体循环与模型推理分离，引入了持久会话所有权、工作区绑定和可恢复的工具执行。这份提案是 Qwen Code 下一代智能体系统的蓝图。
- **状态**：进行中 | **评论**：56

### 2. Kubernetes 工具运行时进度跟踪

**#13395** — [tracking(runtime): Kubernetes tool runtime 进度与跨平台交付门禁](https://github.com/QwenLM/qwen-code/issues/13395)

- **重要性**：追踪通向 Kubernetes 原生工具运行时交付的关键路径，这对平台分发和企业部署场景至关重要。
- **状态**：进行中 | **评论**：19

### 3. XML 工具调用恢复 Bug

**#13492** — [XML tool-call recovery drops outer calls containing quoted tool markup](https://github.com/QwenLM/qwen-code/issues/13492)

- **重要性**：关键 Bug，XML 工具调用内的引号工具标记导致整个外部调用链被丢弃。部分修复已完成；PR #13579 待合并。
- **状态**：审核中 | **评论**：11

### 4. 多智能体 API：智能体身份维度

**#13785** — [Multi-Agent API: an agent-identity dimension on the public contract](https://github.com/QwenLM/qwen-code/issues/13785)

- **重要性**：提议扩展公共 API 以实现多智能体执行的可归因性、树形结构和可中断性，这是高级智能体编排的基础能力。
- **状态**：开放 | **评论**：7

### 5. SWE 测试套件用于功能测试

**#14011** — [feat: harness SWE — feature-type benchmark tasks](https://github.com/QwenLM/qwen-code/issues/14011)

- **重要性**：提议一个自测基准套件，测试 qwen code 自身功能（待办事项跟踪、计划模式、子智能体委托），实现工具链的系统性验证。
- **状态**：开放 | **评论**：5

### 6. Web Shell 后台子智能体状态显示

**#13898** — [Web Shell: show live status of background subagents](https://github.com/QwenLM/qwen-code/issues/13898)

- **重要性**：面向用户的 Web Shell 体验改进——请求显示后台子智能体的实时状态（运行中/已完成/耗时），增强可观察性。
- **状态**：开放 | **评论**：5

### 7. 智能体测试套件的利益冲突

**#14004** — [Separate the agentic harness from the LLM subscription](https://github.com/QwenLM/qwen-code/issues/14004)

- **重要性**：质疑同一实体构建测试套件并销售 LLM 订阅的合理性——这是项目治理和透明度的讨论。
- **状态**：开放 | **评论**：4

### 8. CI 集成测试失败

**#13951** — [CI: Integration Tests fails at Checkout with "fatal: pack has 1 unresolved delta"](https://github.com/QwenLM/qwen-code/issues/13951)

- **重要性**：CI 流水线中断影响 PR 验证；表明 git 仓库完整性存在问题，需要调查。
- **状态**：开放 | **评论**：4

### 9. RTL/LTR 文本渲染 Bug

**#13837** — [Chat view breaks mixed RTL/LTR text](https://github.com/QwenLM/qwen-code/issues/13837)

- **重要性**：影响希伯来语/阿拉伯语用户的无障碍 Bug——代码块强制 LTR 方向，导致混合语言场景下的文本镜像和乱码。
- **状态**：开放 | **评论**：5

### 10. You.com MCP 文档

**#13987** — [docs(tools): add You.com free MCP to the web search MCP services](https://github.com/QwenLM/qwen-code/issues/13987)

- **重要性**：社区贡献的 You.com 免费 MCP 服务文档新增，扩展搜索集成选项。
- **状态**：开放 | **评论**：4

---

## 关键 PR 进展

### 1. #13996 — SDK Java: 私有 CSI 会话和原生 SQL 授权

添加了完整的私有 CSI 会话授权块，包括显式会话创建、持久请求固定、原生日志/资源证明和不可变 SQL 执行授权。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13996)

### 2. #13955 — 托管智能体：成员间消息传递

支持团队成员通过持久命令通道进行端到端消息传递，无需智能体负责人介入——这对多智能体协调至关重要。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13955)

### 3. #14008 — 核心：清理错误消息前的折叠原因

修复了错误文本边界问题，消息被清理但 `error.cause` 保持原样传递，导致 ANSI 密集型错误超出消息限制。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/14008)

### 4. #14013 — 守护进程：保留提示词重生成元数据

保留通过守护进程提示词回显、对话重放和 SDK UI 事件的重生成关系，使客户端能够发现并使用提示词重生成功能。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/14013)

### 5. #13731 — 频道：保留 Markdown 结构

在结构边界（链接、表格、代码块）附近以 3,800 单位为目标拆分 Markdown 消息，设置 20,000 单位上限——改进钉钉/企业微信集成。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13731)

### 6. #13973 — Web Shell：复用标准 UI 实现托管智能体

复用标准 Web Shell 组件实现托管智能体的创建和对话，统一了 UI 体验。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13973)

### 7. #13642 — 运行时代理：JDBC 历史记录有界保留

为已回收绑定的旧终端运行时代理 JDBC 历史记录添加可选的有界清理功能，在专用调度器上运行。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13642)

### 8. #14016 — CLI：将裸 ↑/↓ 交还给输入历史

恢复裸箭头键用于输入历史的循环浏览功能，撤销了 #12518 引入的非预期回归。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/14016)

### 9. #13902 — 将智能体身份投射到 ACP/守护进程协议

将智能体身份和智能体团队协调投射到网络协议，支持通过 `_meta.agent_id` 进行子智能体委托追踪。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/13902)

### 10. #14003 — CLI: 可重复的 --disable-mcp-server 标志

添加 `--disable-mcp-server <name>` 实现每次调用的 MCP 服务器排除，无需修改 settings.json。

- [查看 PR](https://github.com/QwenLM/qwen-code/pull/14003)

---

## 功能需求趋势

根据 Issue 分析，以下功能方向需求最高：

| 趋势 | 描述 |
|-------|-------------|
| **多智能体编排** | 多个 Issue（#12380、#13785、#13902）提议在公共 API 上实现智能体身份、团队协调和归因 |
| **平台分发** | Kubernetes 运行时（#13395）、Linux 打包修复（#13680）、跨平台交付门禁 |
| **增强可观察性** | 后台子智能体状态显示（#13898）、会话状态可见性、运行时遥测 |
| **UI/UX 改进** | RTL/LTR 支持（#13837）、Web Shell 改进、终端缓冲区行为 |
| **内存与持久化** | 内存提取节奏跟进（#13612）、JDBC 历史记录有界清理（#13642） |
| **MCP 生态** | 扩展 MCP 服务器支持（#13987）、每次调用服务器控制（#14003） |

---

## 开发者痛点

1. **CI 流水线可靠性**：集成测试失败（#13951）和 git pack 问题阻止 PR 合并——开发者报告在等待 CI 时感到沮丧。

2. **设置持久化**：`--disable-mcp-server` 标志在设置重计算后丢失（#14009）造成用户体验困惑，用户偏好无法保留。

3. **会话重新附加失败**：控制平面终止后子会话重新附加返回 409（#13838）导致开发者持有孤立的会话。

4. **错误消息边界**：原始错误原因绕过消息大小限制（#14008）在子智能体错误报告中导致意外截断。

5. **Linux 打包**：供应商提供的 ripgrep 二进制文件导致每次 Linux 启动时发生 SIGSEGV（#13680）使桌面应用在 Linux 上无法使用。

6. **Unicode/本地化**：UTF-8 BOM 静默破坏 .lsp.json（#13943）、RTL 文本渲染问题（#13837）——影响国际用户的无障碍问题。

7. **回合折叠竞态条件**：后台任务通知在 Web Shell（#13998）中隐藏最终答案——回合折叠和通知交付之间的竞态。

---

*基于 GitHub 数据生成 — 2026年10月13日*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*