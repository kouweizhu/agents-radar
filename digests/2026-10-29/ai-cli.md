# AI CLI 工具社区动态日报 2026-10-29

> 生成时间: 2026-10-29 01:55 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate this English report into Chinese, following specific rules about preserving formatting, keeping technical terms in English, and using natural technical Chinese register.

Let me translate while:
1. Preserving all Markdown structure (headings, tables, lists)
2. Keeping URLs, project names, repository slugs, version numbers in English
3. Using natural technical Chinese - not literal word-for-word
4. Translating conceptually while maintaining the tone of a developer newsletter
5. Keeping issue/PR references as-is
6. Preserving bold/italic formatting

Let me go through section by section:

**1. Ecosystem Overview**
- Translate the market description naturally
- Keep all tool names and technical terms in English

**2. Activity Comparison**
- Keep the table structure exactly as-is
- Only translate labels

**3. Shared Feature Directions**
- Keep table structure
- Translate the feature categories naturally

**4. Differentiation Analysis**
- Keep table structure
- Translate descriptions naturally

**5. Community Momentum & Maturity**
- Translate descriptions while keeping tool names and technical terms in English
- Maintain the category names

**6. Trend Signals**
- Translate each trend naturally
- Keep technical terms and tool names in English

Let me produce the final output:</think>

# AI CLI 工具生态报告 — 2026 年 10 月

## 1. 生态概览

AI 编程助手 CLI 领域正在走向成熟，市场呈现多元化但充满活力的格局。七款活跃工具服务于重叠的开发者群体，但理念各异：Anthropic 的 Claude Code 和 OpenAI 的 Codex 以企业级功能为目标；Google 的 Gemini CLI 和 Qwen Code 主打多模态和托管 Agent 能力；OpenCode 和 Pi 等较小玩家则在可扩展性和细分平台支持上竞争。GitHub Copilot CLI 作为唯一的 GitHub 原生选项，定位独特。跨工具的共同主题包括：认证复杂性、跨平台一致性挑战，以及在自主 Agent 能力与用户控制之间取得平衡的难题。MCP（Model Context Protocol）正在成为事实上的扩展标准，而定价层级困惑和会话管理可靠性则成为用户痛点的主流。

---

## 2. 活跃度对比

| 工具 | Issue | PR | Discussions | Release (24h) |
|------|-------|-----|-------------|----------------|
| Claude Code | 50 | 2 | 不适用 (Issues 已启用) | 0 |
| OpenAI Codex | 已启用 | 20+ | 活跃 | 3 (Rust alpha) |
| Gemini CLI | 40 | 10+ | 不适用 (Issues 已启用) | 0 |
| Copilot CLI | 40 | 4 | 不适用 (Issues 已启用) | 0 |
| OpenCode | 50 | 33 | 不适用 (Issues 已启用) | 2 |
| Pi | 50 | 33 | 1 | 0 |
| Qwen Code | 10 | 10 | 不适用 (Issues 已启用) | 4 |

*注："不适用"表示该仓库启用了 Issues 功能，Discussions 作为补充而非主要渠道。*

---

## 3. 共同功能方向

| 功能方向 | 涉及工具 | 具体需求 |
|----------|----------|----------|
| **更灵活的高级套餐** | Claude Code, Copilot CLI, OpenCode | 突破当前限制的强力用户套餐；无每日配额限制的周度使用权限 |
| **Windows/WSL 兼容性** | Claude Code, Codex, Copilot CLI, Gemini CLI | WSL 引导修复、PowerShell 处理、密钥链集成 |
| **MCP 生态扩展** | 全工具 | OAuth 可靠性、重复名称处理、TLS 信任配置、资源订阅 |
| **会话可靠性** | Claude Code, Codex, Pi, Qwen Code | 上下文上限处理、自动压缩、失败回滚 |
| **安全/沙箱** | Claude Code, OpenCode, Pi | Agent 隔离、权限规则、命令限制 |
| **CLI/安装体验增强** | Copilot CLI, OpenCode, Qwen Code | 卸载脚本、PATH 处理、校验和验证 |
| **模型配置健壮性** | Claude Code, Pi | 回退处理、目录同步、保存的默认配置持久化 |
| **UI/UX 改进** | 全工具 | 主题支持、终端改进、会话搜索、状态指示器 |

---

## 4. 差异化分析

| 工具 | 核心焦点 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业级可靠性、插件生态 | 专业开发者、团队 | 本地优先 + 云同步；丰富的插件市场 |
| **OpenAI Codex** | Code Mode、多模态生成 | 全栈开发者、AI 重度用户 | 服务端输出截断；受限执行；进程指标 |
| **Gemini CLI** | Gemini 模型集成、Google 生态 | Google Cloud 用户 | 长思考超时配置；WSL 模式 |
| **Copilot CLI** | GitHub 集成、CLI 优先工作流 | GitHub 原生开发者 | 最小化配置、dotfiles 集成 |
| **OpenCode** | 可扩展性、多供应商 | 高级用户、自托管玩家 | 庞大的扩展 API；多会话 Agent；调度 |
| **Pi** | 轻量级、Bun 优先 | 极简开发者 | Bun 运行时；ANSI 剥离；图像生成工具 |
| **Qwen Code** | 托管 Agent、企业服务 | 企业 IT、平台团队 | 双路径架构；分阶段升级；SQL 支持的会话 |

---

## 5. 社区活力与成熟度

**高活跃度（频繁发布、issue 活跃）：**
- **Qwen Code** — 今日 4 个 release，CI/CD 讨论活跃，托管 Agent 架构演进中
- **OpenCode** — 33 个 PR，持续发版，扩展生态快速增长

**积极开发（定期更新）：**
- **OpenAI Codex** — 今日合并 20+ PR，Rust SDK alpha 持续交付，Code Mode 持续优化
- **Pi** — 33 个 PR，ANSI 修复，执行安全改进

**稳步迭代：**
- **Claude Code** — 聚焦 payment/polaris 集成，每日提交较少但社区参与度高
- **Gemini CLI** — 维护模式，专注针对性修复

**积累势能：**
- **Copilot CLI** — 规模较小但活跃；近期 PR 改善安装体验

**成熟度指标：**
- 企业级聚焦：Claude Code、Codex、Qwen Code（托管服务、定价层级）
- 开发者体验聚焦：OpenCode、Pi（可扩展性、自定义能力）
- 平台集成：Copilot CLI（GitHub）、Gemini CLI（Google Cloud）

---

## 6. 趋势信号

**1. MCP 成为标准** — 每个工具都在投入 MCP 改进：OAuth、TLS 信任、重复处理、资源订阅。这标志着生态系统正在走向可互操作工具链的成熟阶段。

**2. 会话状态成为差异化因素** — 多款工具（Claude Code、Codex、Pi、Qwen Code）都在努力解决会话持久化、自动压缩和上下文上限处理问题。随着 Agent 运行时间延长，状态管理正在成为竞争差异化点。

**3. 企业定价困惑** — 三款工具面临用户对套餐限制和支付失败的挫败感。这表明市场尚未就强力用户的可持续定价模式达成共识。

**4. Windows 成为二等公民** — WSL、PowerShell、密钥链和路径处理问题出现在 5/7 工具中。Windows 开发者的体验明显落后于 macOS/Linux。

**5. 安全走向成熟** — 沙箱请求（OpenCode、Pi）和权限规则强制执行（Qwen Code）表明生态系统正在超越功能平衡，走向自主 Agent 风险管控。

**6. CI/CD 作为社区健康指标** — Qwen Code 活跃的 CI 讨论和 Claude Code 的 polaris 集成反映出，企业采用的关键在于可靠的自动化流水线。

---

*本报告基于 2026-10-29 社区摘要数据生成。如需对任何特定工具进行更深入的分析，请参阅各工具的单独摘要。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate this English report about Claude Code Skills community data into Chinese, following specific rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slashes, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, preserving all the structure and technical terms:

---

# Claude Code Skills 社区热点报告

*数据截至 2026 年 10 月 29 日*

---

## 1. 热门技能排名

Skills 仓库中讨论最活跃的 PR 涵盖基础设施改进、新功能添加和安全加固。虽然此数据集中 PR 评论数未完整显示，但活跃度按更新频率、PR 范围和更广泛生态系统相关性来衡量。

| PR | 技能/变更 | 功能 | 状态 |
|----|--------------|---------------|--------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2.0 支持** | 修复 `streamable_http_client` 导入问题（MCP ≥2.0 中已重命名），通过 `create_mcp_http_client` 添加自定义 HTTP 头支持 | 开放 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: 触发器求值隔离** | 修复触发器求值中的误判、Windows 子进程处理和运行时故障检测 | 开放 |


| [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing: 安全加固** | 消除 `with_server.py` 中的命令注入风险（CWE-78） | 开放 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel: 复古游戏开发** | 使用 Pyxel 库创建、调试和验证 Python 游戏，支持无头输入驱动运行 | 开放 |
| [#514](https://github.com/anthropics/skills/pull/514) | **文档排版** | 预防文档生成中的排版问题 | 修复中 |

我正在继续翻译这份报告，重点关注技能排名、安全更新和开发工具的详细说明。

| | 避免孤行、段首孤行、数字编号对齐错误 | 开放 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Solidity/Rust 智能合约静态分析，通过零存储 Merkle 协议实现 TON 区块链证明锚定 | 开放 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 使用 Marp 将 Markdown 编译成带逼真配音的 MP4 视频 | 开放 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **Notion 规格 → 实现** | 将产品规格转化为可操作的 Notion 任务，含验收标准和进度追踪 | 开放 |

## 2. 社区需求趋势

从高评论 Issues 分析可以看出明显的需求模式：

| Issue | 主题 | 需求信号 |
|-------|-------|---------------|
| [#492](https://github.com/anthropics/skills/issues/492) (46 条评论) | **安全：命名空间信任滥用** | 社区技能冒充官方技能——关键的信任边界漏洞 |
| [#228](https://github.com/anthropics/skills/issues/228) (17 条评论) | **团队级技能共享** | 团队直接共享技能库和链接，而非手动文件传输 |
| [#556](https://github.com/anthropics/skills/issues/556) (13 条评论) | **run_eval.py 触发器故障** | 触发率为 0%——技能在评估模式下无法激活 |
| [#1329](https://github.com/anthropics/skills/issues/1329) (10 条评论) | **compact-memory 技能** | 长期会话中代理状态的符号表示法 |
| [#1385](https://github.com/anthropics/skills/issues/1385) (6 条评论) | **推理质量门禁** | 任务前校准 → 对抗性审查 → 交付验证流程 |
| [#412](https://github.com/anthropics/skills/issues/412) (6 条评论) | **agent-governance 技能** | 策略执行、威胁检测、信任评分、AI 代理审计追踪 |

**新兴主题：**
- **安全与信任基础设施** — 命名空间验证、技能溯源
- **企业协作** — 组织级共享机制
- **评估与质量保证** — 触发可靠性、输出验证流程
- **代理治理** — 自主系统的安全模式

## 3. 高潜力待处理技能

这些 PR 展现出活跃开发态势并填补了重要空白——近期可考虑合并的候选：

| PR | 技能 | 重要性 |
|----|-------|----------------|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 安全修复 | 安全加固——高优先级 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx: LibreOffice 超时处理 | 修复误报成功的情况 |
| [#1977](https://github.com/anthropics/skills/pull/1977) | algorithmic-art: wrapAround() 修复 | 修正负值的取模逻辑 |
| [#1976](https://github.com/anthropics/skills/pull/1976) | webapp-testing: 元素发现 | 正确识别 textarea/select 元素 |
| [#1975](https://github.com/anthropics/skills/pull/1975) | pptx: 列数验证 | 早期参数验证 |
| [#1997](https://github.com/anthropics/skills/pull/1997) | skill-creator: YAML 解析 | 修正 YAML 头部中的标量处理 |

这些较小且有针对性的修复表明生态系统正趋于完善和稳定。

## 4. 技能生态系统洞察

**社区最集中的需求是企业级技能治理、安全加固和可靠

的跨平台评估基础设施**——这是扩展新领域技能之前的基础层。

需求与现实的矛盾很明显：用户想要更复杂的技能（智能合约、视频生成、复古游戏），但平台本身在信任边界、评估可靠性和 Windows 兼容性方面还需要加固。

---

数据截止至 2026 年 10 月 29 日。

---

## 1. 热门技能排名

Skills 仓库中讨论最活跃的 PR 涵盖基础设施改进、新功能添加和安全加固。虽然此数据集中 PR 评论数未完整显示，但活跃度按更新频率、PR 范围和更广泛生态系统相关性来衡量。

技能和变更是按功能分类的，包括 mcp-builder 的 MCP ≥2.0 支持（修复 `streamable_http_client` 导入问题）、skill-creator 的触发器求值隔离（修复误判和运行时故障检测）、webapp-testing 的安全加固（消除命令注入风险）、pyxel 的复古游戏开发以及文档排版等。

还有更多功能正在开发中，包括智能合约审计、视频生成和 Notion 集成等。

社区对安全漏洞、团队协作和任务触发的需求最为突出，特别是在信任验证和权限管理方面。

用户期望更复杂的技能功能，但平台本身需要在信任边界、评估可靠性和跨平台兼容性等基础设施层面进行加固。</think>

# Claude Code Skills 社区热点报告

*数据截至 2026 年 10 月 29 日*

---

## 1. 热门技能排名

Skills 仓库中讨论最活跃的 PR 涵盖基础设施改进、新功能添加和安全加固。虽然此数据集中 PR 评论数未完整显示，但活跃度按更新频率、PR 范围和更广泛生态系统相关性来衡量。

| PR | 技能/变更 | 功能 | 状态 |
|----|--------------|---------------|--------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2.0 支持** | 修复 `streamable_http_client` 导入问题（MCP ≥2.0 中已重命名），通过 `create_mcp_http_client` 添加自定义 HTTP 头支持 | 开放 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: 触发器求值隔离** | 修复触发器求值中的误判、Windows 子进程处理和运行时故障检测 | 开放 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing: 安全加固** | 消除 `with_server.py` 中的命令注入风险（CWE-78） | 开放 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel: 复古游戏开发** | 使用 Pyxel 库创建、调试和验证 Python 游戏，支持无头输入驱动运行 | 开放 |
| [#514](https://github.com/anthropics/skills/pull/514) | **文档排版** | 预防 AI 生成文档中的排版问题：孤行、段首孤行、数字编号对齐错误 | 开放 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Solidity/Rust 智能合约静态分析，通过零存储 Merkle 协议实现 TON 区块链证明锚定 | 开放 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 使用 Marp 将 Markdown 编译成带逼真配音的 MP4 视频 | 开放 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **Notion 规格 → 实现** | 将产品规格转化为可操作的 Notion 任务，含验收标准和进度追踪 | 开放 |

---

## 2. 社区需求趋势

从高评论 Issues 分析可以看出明显的需求模式：

| Issue | 主题 | 需求信号 |
|-------|-------|---------------|
| [#492](https://github.com/anthropics/skills/issues/492) (46 条评论) | **安全：命名空间信任滥用** | 社区技能冒充官方技能——关键的信任边界漏洞 |
| [#228](https://github.com/anthropics/skills/issues/228) (17 条评论) | **团队级技能共享** | 团队直接共享技能库和链接，而非手动文件传输 |
| [#556](https://github.com/anthropics/skills/issues/556) (13 条评论) | **run_eval.py 触发器故障** | 触发率为 0%——技能在评估模式下无法激活 |
| [#1329](https://github.com/anthropics/skills/issues/1329) (10 条评论) | **compact-memory 技能** | 长期会话中代理状态的符号表示法 |
| [#1385](https://github.com/anthropics/skills/issues/1385) (6 条评论) | **推理质量门禁** | 任务前校准 → 对抗性审查 → 交付验证流程 |
| [#412](https://github.com/anthropics/skills/issues/412) (6 条评论) | **agent-governance 技能** | 策略执行、威胁检测、信任评分、AI 代理审计追踪 |

**新兴主题：**

- **安全与信任基础设施** — 命名空间验证、技能溯源
- **企业协作** — 组织级共享机制
- **评估与质量保证** — 触发可靠性、输出验证流程
- **代理治理** — 自主系统的安全模式

---

## 3. 高潜力待处理技能

这些 PR 展现出活跃开发态势并填补了重要空白——近期可考虑合并的候选：

| PR | 技能 | 重要性 |
|----|-------|----------------|
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 安全修复 | 安全加固——高优先级 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx: LibreOffice 超时处理 | 修复误报成功的情况 |
| [#1977](https://github.com/anthropics/skills/pull/1977) | algorithmic-art: wrapAround() 修复 | 修正负值的取模逻辑 |
| [#1976](https://github.com/anthropics/skills/pull/1976) | webapp-testing: 元素发现 | 正确识别 textarea/select 元素 |
| [#1975](https://github.com/anthropics/skills/pull/1975) | pptx: 列数验证 | 早期参数验证 |
| [#1997](https://github.com/anthropics/skills/pull/1997) | skill-creator: YAML 解析 | 修正 YAML 头部中的标量处理 |

这些较小且有针对性的修复表明生态系统正趋于完善和稳定。

---

## 4. 技能生态系统洞察

**社区最集中的需求是企业级技能治理、安全加固和可靠的跨平台评估基础设施**——这是扩展新领域技能之前的基础层。

需求与现实的矛盾很明显：用户想要更复杂的技能（智能合约、视频生成、复古游戏），但平台本身在信任边界、评估可靠性和 Windows 兼容性方面还需要加固。

---

<think>The user wants me to translate the Claude Code Community Digest into Simplified Chinese, following the strict rules provided:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and technical accuracy while making it read naturally in Chinese.

Key translations:
- "Today's Highlights" → "今日要闻"
- "Releases" → "版本发布"
- "Hot Issues" → "热门议题"
- "Key PR Progress" → "重要 PR 进展"
- "Feature Request Trends" → "功能需求趋势"
- "Developer Pain Points" → "开发者痛点"
- "Team plan" → "团队套餐"
- "Premium tier" → "Premium 档位"
- "Power users" → "高频用户"
- "load-bearing" → keep as "load-bearing" (technical term)
- "CLAUDE.md" → keep as "CLAUDE.md"
- "PostToolUse hook" → keep as "PostToolUse hook"
- "WebAuthn" → keep as "WebAuthn"
- "Touch ID" → keep as "Touch ID"
- "passkey" → "通行密钥" or keep as "passkey" depending on context

Let me translate the full piece now.</think>

# Claude Code 社区digest — 2026-10-29

## 今日要闻

社区今日热议两大主题：**定价档位争议**和**桌面端体验优化**。最热门议题是高频用户呼吁推出 Max 20x 档位（193 👍），而桌面端用户则强烈要求自定义主题支持，以便在多显示器环境中区分 Claude Code 窗口。技术层面，模型反复使用"load-bearing"一词的行为问题也引发广泛关注（120 👍），反映出用户对 AI 输出可控性的诉求。

---

## 版本发布

**过去 24 小时内无新版本发布。**

---

## 热门议题

### 1. [团队套餐需要 Max 20x 档位](https://github.com/anthropics/claude-code/issues/47509)
**69 条评论 · 193 👍** · `enhancement, area:cost`

高频用户（CTO、技术负责人、高级工程师）当前 Premium 档位（6.25x Pro）已无法满足代理编程工作流需求。这是讨论最热烈的议题，反映出企业用户对更高配额的强烈付费意愿。

### 2. [无法从 Max 5x 升级至 Max 20x：支付失败](https://github.com/anthropics/claude-code/issues/56281)
**49 条评论 · 13 👍** · `bug`

Max 5x 套餐用户尝试升级时遭遇支付失败，且客服响应迟缓。这一阻塞性问题导致付费用户无法访问更高档位。

### 3. [桌面应用：自定义主题 / 强调色](https://github.com/anthropics/claude-code/issues/79305)
**24 条评论 · 81 👍** · `enhancement, area:ui, area:desktop`

用户呼吁与 CLI 端对等的自定义主题功能。由于多数应用都采用类似的深色模式，用户在多显示器环境下难以快速识别 Claude Code 窗口——自定义强调色将有效改善这一问题。

### 4. [模型无法停止使用"load-bearing"](https://github.com/anthropics/claude-code/issues/53454)
**21 条评论 · 120 👍** · `bug, area:model`

模型持续使用"load-bearing"短语，即便用户明确要求停止也无效。极高的点赞数表明这一输出控制问题具有普遍性。

### 5. [已卸载插件被服务器端重新启用](https://github.com/anthropics/claude-code/issues/98894)
**10 条评论 · 1 👍** · `bug, area:plugins`

已卸载的 claude.ai 插件会在数秒内自动重新启用并同步到每个会话——这是一个令人沮丧的持久化 bug，严重削弱用户对环境的控制权。

### 6. [内置浏览器缺乏 macOS 通行密钥 (WebAuthn) 支持](https://github.com/anthropics/claude-code/issues/77473)
**7 条评论 · 12 👍** · `bug, platform:macos, area:desktop`

内置浏览器不支持 Touch ID/通行密钥验证，导致依赖无密码登录的用户无法使用 GitHub——这是一个严重的workflow阻断问题。

### 7. [协作模式：无法从项目上下文中移除文件夹](https://github.com/anthropics/claude-code/issues/76573)
**6 条评论 · 2 👍** · `bug, area:cowork`

在协作模式会话中，没有移除控件来删除项目的原始文件夹，限制了多文件夹工作流的灵活性。

### 8. [CLAUDE.md 在磁盘根目录静默加载失败](https://github.com/anthropics/claude-code/issues/80202)
**5 条评论 · 2 👍** · `bug`

当项目位于文件系统根目录（如 Windows 的 `subst` 驱动器）时，项目记忆功能无法加载，且不显示任何错误信息——这种静默失败会破坏项目配置。

### 9. [定时任务会话在工具调用中间卡住](https://github.com/anthropics/claude-code/issues/89639)
**5 条评论 · 1 👍** · `bug, platform:macos, area:routines`

在 macOS 上，定时任务在工具调用（WebSearch/WebFetch）约 30 秒后挂起，持续"运行"状态长达数天，并占用全局并发槽位——导致资源耗尽。

### 10. [Max 5x 周用量激增](https://github.com/anthropics/claude-code/issues/105240)
**5 条评论 · 1 👍** · `bug, area:cost`

用户报告自 10 月 17 日以来用量突然增加，部分用户在 48 小时内已达到周限额 94%——暗示存在异常消耗或泄露。

---

## 重要 PR 进展

### 1. [feat(plugins): 添加 edit-verifier 插件](https://github.com/anthropics/claude-code/pull/32755)
**作者：mvanhorn** · `Open`

针对 Edit 工具在目标文本未找到时（空格不匹配、代码已修改）静默失败的场景。该插件通过 PostToolUse hook 验证编辑是否成功——对可靠的自主工作流至关重要。

### 2. [docs: 修复过期的文档 URL](https://github.com/anthropics/claude-code/pull/32753)
**作者：mvanhorn** · `Open`

将 12 个文件中 26 处过期的 `docs.anthropic.com` 和 `docs.claude.com` URL 替换为当前的 `code.claude.com`。提升了文档的可用性。

---

## 功能需求趋势

根据议题分析，社区主要诉求集中在：

1. **更高定价档位** — 企业用户对付费更高配额（Max 20x+）的需求
2. **桌面端自定义** — 主题/强调色支持用于窗口区分
3. **插件管理** — 更好地控制插件生命周期（卸载持久化问题）
4. **增强认证** — 桌面浏览器支持 WebAuthn/通行密钥
5. **项目上下文控制** — 从活动上下文中移除文件夹的能力
6. **CLI 增强** — 新增如 `claude prune` 等清理命令
7. **用量透明度** — 更清晰地了解消耗模式

---

## 开发者痛点

- **支付/升级故障** — 用户被困在低档位，无法获得解决方案
- **静默失败** — 如 CLAUDE.md 在根目录加载失败等问题没有反馈
- **模型行为控制** — 用户对无法消除的重复用语感到沮丧
- **认证摩擦** — 通行密钥用户被阻断 GitHub 集成
- **定时任务可靠性** — 会话挂起并无限期占用并发槽位
- **插件状态管理** — 卸载不持久引发信任问题
- **用量激增** — 不明原因的消耗引发套餐限额焦虑

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate this GitHub digest into Chinese, following specific rules:
- Only output the translation, no preamble
- Preserve markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, numbers, issue/PR references as-is
- Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully, maintaining all the formatting and technical terms.</think>

# OpenAI Codex 社区简报

**日期：** 2026-10-29

---

## 1. 今日要闻

Codex 团队发布了三个 Rust alpha 版本（v0.166.0-alpha.5 至 alpha.6），并合并了 20+ 个 PR，重点改进 Code Mode 功能，包括受限输出收集和进程指标采样。问题方面，Windows 用户持续遭遇工作区设置和 WSL 连接问题，社区正积极讨论 memory 功能和网络安全误报处理。

---

## 2. 发布版本

| 版本 | 说明 |
|---------|-------------|
| [rust-v0.166.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.6) | Rust SDK alpha 版本 |
| [rust-v0.166.0-alpha.5.1](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5.1) | Rust SDK alpha 版本 |
| [rust-v0.166.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.166.0-alpha.5) | Rust SDK alpha 版本 |

---

## 3. 热门问题

| Issue | 说明 | 反馈 |
|-------|-------------|-----------|
| [#51917](https://github.com/openai/codex/issues/51917) | **Windows 工作区设置仍阻止新建对话** — Windows 11（build 26.1007.21434）用户报告工作区设置无法加载，导致无法创建新对话。29 条评论，13 👍 | 高影响，持续跟踪 |
| [#50779](https://github.com/openai/codex/issues/50779) | **WSL 模式在 bootstrap 前失败** — 桌面 WSL 模式失败，因为启动器传递了错误的 `wsl.exe --cd .` 参数。13 条评论 | 影响 WSL 用户 |
| [#49824](https://github.com/openai/codex/issues/49824) | **Dots：允许一个 Dot 在多台 PC 上使用独立授权** — 多设备支持功能请求。11 条评论，9 👍 | 高热度功能请求 |
| [#43312](https://github.com/openai/codex/issues/43312) | **重复误报网络安全检查** — 一次误判会在 ChatGPT 和 Codex 中升级为每次 turn 都检查。11 条评论 | 持续困扰用户 |
| [#56647](https://github.com/openai/codex/issues/56647) | **macOS JavaScript 错误：setAcceptsMouseMovedEvents TypeError** — 应用启动崩溃（v26.1021.31345，macOS 15.8.1）。10 条评论 | 阻塞性 bug |
| [#40650](https://github.com/openai/codex/issues/40650) | **允许仅每周使用 Codex 而不设 5 小时限制** — 企业用户请求移除使用配额。8 条评论，16 👍 | 高票请求 |
| [#57345](https://github.com/openai/codex/issues/57345) | **Windows 上出现"批准请求已失效"错误** — 写入文件操作被中断。7 条评论 | 工作流阻塞 |
| [#48314](https://github.com/openai/codex/issues/48314) | **MCP 服务器在 Windows MSIX 上启动失败** — 打包的插件未包含 server.mjs。7 条评论 | Windows 特定问题 |
| [#57608](https://github.com/openai/codex/issues/57608) | **自动压缩丢失活跃任务** — 继续操作只收到环境上下文，尽管 rollout 已保留。7 条评论 | 会话完整性问题 |
| [#49033](https://github.com/openai/codex/issues/49033) | **Codex CLI 输入后冻结** — 发送消息后终端冻结。6 条评论 | CLI 可用性问题 |

---

## 4. 主要 PR 进展

| PR | 说明 |
|----|-------------|
| [#57870](https://github.com/openai/codex/pull/57870) | **为 Code Mode 会话启用服务端输出截断** — 遵循各会话的 output_truncation 设置 |
| [#57850](https://github.com/openai/codex/pull/57850) | **将受限输出收集接入 code mode 运行时** — 限制 V8 和 cell actor 之间的事件积压 |
| [#57848](https://github.com/openai/codex/pull/57848) | **添加受限 Code Mode 输出收集** — 保留文本前缀和 1 MiB 限制内的滚动尾部 |
| [#57864](https://github.com/openai/codex/pull/57864) **允许取消时上游中断** — 添加 interrupt_on_cancel 功能 |
| [#57841](https://github.com/openai/codex/pull/57841) | **为 code-mode 主机添加可选进程指标采样** — 通过 ThreadManager 暴露 PID、CPU 时间、内存 |
| [#57837](https://github.com/openai/codex/pull/57837) | **在发布包中包含独立 executor** — CLI 包中包含 codex-exec-server |
| [#57859](https://github.com/openai/codex/pull/57859) | **将 OAuth 登录超时延长至十分钟** — 从 3 分钟延长，用于 MFA 场景 |
| [#57857](https://github.com/openai/codex/pull/57857) | **在 TUI 入职流程中添加 Google Cloud Vertex AI 设置** — 新登录向导隐藏在功能开关后 |
| [#57839](https://github.com/openai/codex/pull/57839) | **保留 resume 和 fork 间的 reasoning token 统计** — 修复早期自动压缩问题 |
| [#57836](https://github.com/openai/codex/pull/57836) | **在 code mode 中声明图像生成结果类型** — 返回 Promise<{image_url, output_hint}> |

---

## 5. 热门讨论

### 需求建议
| 讨论 | 摘要 |
|-------------|---------|
| [#12567](https://github.com/openai/codex/discussions/12567) | **Codex 中的记忆功能** — 提议让 Codex 引用之前的线程。39 条评论，14 👍 |
| [#30332](https://github.com/openai/codex/discussions/30332) | **Codex CLI 后台更新** — 启动时的非阻塞更新流程。1 条评论，2 👍 |

### 问答
| 讨论 | 摘要 |
|-------------|---------|
| [#52835](https://github.com/openai/codex/discussions/52835) | **AI 辅助 KPI 管理系统** — 开发 4 个月的困境，寻求建议。6 条评论 |
| [#57675](https://github.com/openai/codex/discussions/57675) | **Pro 账户：7 天来所有模型都显示"所选模型已满载"** — 账户级别的模式阻止了所有模型 |

### 展示分享
| 讨论 | 摘要 |
|-------------|---------|
| [#57591](https://github.com/openai/codex/discussions/57591) | **toli** — Codex 与 Claude Code 之间的跨机器协作 |
| [#57746](https://github.com/openai/codex/discussions/57746) | **Zozo** — 编码 agent 的可审查 issue 到 PR 示例及审查清单 |
| [#56429](https://github.com/openai/codex/discussions/56429) | **sports-video-coach** — Codex 审阅体育视频并生成教练页面 |
| [#56856](https://github.com/openai/codex/discussions/56856) | **MarketMirror** — 用于模拟营销测试的 MCP 服务器 |
| [#57797](https://github.com/openai/codex/discussions/57797) | **Cloud Codex CLI** — 使用 tmux 和电话告警实现 24/7 云端 Codex |

---

## 6. 功能请求趋势

1. **多设备 Dots 支持** — 用户希望一个 Dot 能同时在多台 PC 上独立授权使用（#49824）
2. **灵活使用限制** — 企业用户希望仅每周使用 Codex 而不设 5 小时上限（#40650）
3. **记忆/引用系统** — 对话期间引用之前线程的功能需求强烈（#12567）
4. **后台 CLI 更新** — 启动时非阻塞更新检查请求（#30332）
5. **增强 Windows 集成** — WSL 模式改进，更好的 PowerShell 处理（#50779, #57446）

---

## 7. 开发者痛点

- **网络安全误报** — 最持续的问题。多个 issue（#43312、#34913、#44302、#56252、#42940）报告合法工作被阻止，用户反复收到"无法显示此内容"尽管正在执行授权任务
- **Windows 平台不稳定** — 工作区设置失败、WSL bootstrap 问题和 PowerShell CIM 初始化问题困扰 Windows 用户
- **会话持久化 bug** — 自动压缩丢失活跃任务（#57608），环境启动失败跨 turn 持续（#57866）
- **macOS JavaScript 崩溃** — 启动时出现新 TypeError（#56647），影响 macOS 15.8.1 用户
- **OAuth/连接超时** — 3 分钟超时对 MFA 场景过短；已延长至 10 分钟（#57859）
- **MCP 服务器失败** — Windows MSIX 用户报告打包插件缺少 server.mjs（#48314）

---

*简报基于 GitHub 数据生成 — openai/codex | 2026-10-29*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire "Gemini CLI Community Digest — 2026-10-29" article into Simplified Chinese (简体中文), following the strict rules provided. Let me go through and translate while preserving:

1. All Markdown structure (headings, tables, lists, etc.)
2. All URLs and issue/PR references
3. Technical terms in natural Chinese technical register
4. Dates, numbers, code, paths as-is
5. No preamble or explanation - just the translation

Let me translate section by section:

**Title:**
# Gemini CLI 社区动态 — 2026-10-29

**Today's Highlights:**
## 今日要闻

The community is focusing on... - 本周 Gemini CLI 社区重点关注代理可靠性问题，多个 P1 级 bug 涉及子代理行为和会话管理。

with several P1 bugs surfacing around... - 团队已合并多项重要修复，包括 PowerShell 替换检测、MCP 工具分页和 Windows 路径处理，同时新工作解决了速率限制用户体验改进和扩展验证工具问题。

**No new releases** were published in the last 24 hours. - 过去 24 小时内**未发布**新版本。

---

## Hot Issues - 热门议题

| # | Issue | Priority | Why It Matters |
|---|-------|----------|----------------|

Let me translate the table - I need to keep the column headers as-is in terms of what they mean in Chinese context:

| # | 议题 | 优先级 | 重要性说明 |
|---|------|--------|------------|

Now the issues:
1. Subagent recovery after MAX_TURNS hides interruption - 达到 MAX_TURNS 后子代理恢复隐藏了中断
2. Image generation model configs for nano banana - nano banana 的图像生成模型配置
3. Zero-Dependency OS Sandboxing & Post-Execution Intent Routing - 零依赖操作系统沙箱与执行后意图路由


4. Duplicate results for completed shell tool calls - 已完成 shell 工具调用的重复结果
5. Sandboxed CLI loses login/session since v0.60.0 - 自 v0.60.0 以来沙箱 CLI 丢失登录/会话
6. Generalist agent hangs - 通用代理挂起
7. Gemini doesn't use skills/sub-agents enough - Gemini 不够充分使用技能/子代理
8. Large shell output sent back to provider - 发送回提供商的大型 shell 输出
9. Browser Agent ignores settings.json overrides - 浏览器代理忽略 settings.json 覆盖
10. Browser subagent fails in Wayland - 浏览器子代理在 Wayland 上失败

I need to maintain the priority markers as P1, P2, etc., and keep the why it matters explanations in Chinese technical language.

The critical issues center on agent reliability—subagents report false success when hitting turn limits, while both the generalist and browser agents experience blocking problems. The sandbox loses session persistence from v0.60.0 onward, the browser agent silently discards settings.json overrides, and there's token waste from duplicate tool results. Path handling also breaks due to case sensitivity issues on Windows and leading slash normalization complications.</think>

# Gemini CLI 社区动态 — 2026-10-29

## 今日要闻

本周 Gemini CLI 社区重点关注代理可靠性问题，多个 P1 级 bug 涉及子代理行为和会话管理。团队已合并多项重要修复，包括 PowerShell 替换检测、MCP 工具分页和 Windows 路径处理，同时新工作解决了速率限制用户体验改进和扩展验证工具问题。

**过去 24 小时内未发布新版本。**

---

## 热门议题

| # | 议题 | 优先级 | 重要性说明 |
|---|------|--------|------------|
| 1 | **[Subagent recovery after MAX_TURNS hides interruption](https://github.com/google-gemini/gemini-cli/issues/22323)** | P1 | 子代理在达到 MAX_TURNS 时报告 `GOAL` 成功，掩盖了实际失败。社区对误导性状态反馈感到沮丧。 |
| 2 | **[Image generation model configs for nano banana](https://github.com/google-gemini/gemini-cli/issues/28445)** | P2 | 用户希望 CLI 访问图像生成模型。这是贡献者的良好入门 issue。 |
| 3 | **[Zero-Dependency OS Sandboxing & Post-Execution Intent Routing](https://github.com/google-gemini/gemini-cli/issues/19873)** | P2 | 利用模型 bash 亲和性的零依赖操作系统沙箱与执行后意图路由提案——主要安全/用户体验增强。 |
| 4 | **[Duplicate results for completed shell tool calls](https://github.com/google-gemini/gemini-cli/issues/28004)** | P2 | 确定性的提供商可能导致重复的工具结果提交，浪费 tokens 并造成混淆。 |
| 5 | **[Sandboxed CLI loses login/session since v0.60.0](https://github.com/google-gemini/gemini-cli/issues/29461)** | P1 | **已关闭——需要更多信息。** 沙箱模式每次运行都会丢失 OAuth tokens 和会话持久化。 |
| 6 | **[Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)** | P1 | 委托给通用代理时 CLI 无限挂起（最长 1 小时）。有变通方案但需要修复。 |
| 7 | **[Gemini doesn't use skills/sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)** | P2 | 模型除非明确指示，否则会忽略自定义技能——降低了自动化价值。 |
| 8 | **[Large shell output sent back to provider](https://github.com/google-gemini/gemini-cli/issues/28090)** | P1 | CLI 可能发送远超资源阈值的 tool-result 载荷，导致效率低下。 |
| 9 | **[Browser Agent ignores settings.json overrides](https://github.com/google-gemini/gemini-cli/issues/22267)** | P2 | 浏览器子代理中 `maxTurns` 等配置覆盖被静默忽略。 |
| 10 | **[Browser subagent fails in Wayland](https://github.com/google-gemini/gemini-cli/issues/21983)** | P1 | 浏览器代理在 Wayland 显示服务器上失败——特定环境问题。 |

---

## 关键 PR 进展

| # | PR | 状态 | 变更内容 |
|---|-----|------|----------|
| 1 | **[fix(core): fix detectPowerShellSubstitution quote tracking](https://github.com/google-gemini/gemini-cli/pull/29746)** | ✅ 已关闭 | 修复了 Windows 上误报命令替换检测的问题。 |
| 2 | **[feat(core): make API request headers and body timeouts configurable](https://github.com/google-gemini/gemini-cli/pull/29756)** | ✅ 已关闭 | 用户现在可以配置长思考超时阈值。 |
| 3 | **[fix(cli): restore workspace directories only after resumed chat succeeds](https://github.com/google-gemini/gemini-cli/pull/29866)** | 🟢 开放 | 防止 `resumeChat()` 失败时工作区被污染。 |
| 4 | **[fix(core): paginate MCP tool discovery using nextCursor](https://github.com/google-gemini/gemini-cli/pull/29843)** | 🟢 开放 | **修复 #29825** — 超过 1 页工具的 MCP 服务器现在可以暴露所有工具。 |
| 5 | **[fix(core,cli): fix instances of incorrect \n escape behavior](https://github.com/google-gemini/gemini-cli/pull/29989)** | 🟢 开放 | **修复 #22466** — 修复了字符串/正则表达式中损坏的转义序列。 |
| 6 | **[fix(cli): anchor .git suffix removal to end of repo URL](https://github.com/google-gemini/gemini-cli/pull/30013)** | 🟢 开放 | 防止破坏包含 `.git` 的仓库名。 |
| 7 | **[ci(release): add OSS Exit Gate npm publishing workflow](https://github.com/google-gemini/gemini-cli/pull/30009)** | 🟢 开放 | 启用 Google OSS Exit Gate 发布流水线。 |
| 8 | **[fix(cli): surface 429 rate limit cool-down in loading indicator](https://github.com/google-gemini/gemini-cli/pull/30012)** | 🟢 开放 | 更好的用户体验：速率限制回退期间的视觉倒计时。 |
| 9 | **[feat(cli): add extension validation command](https://github.com/google-gemini/gemini-cli/pull/29980)** | ✅ 已关闭 | 新增 `gemini extensions validate` CLI 命令，含安全检查。 |
| 10 | **[fix(core): make isWithinRoot case-insensitive on Windows](https://github.com/google-gemini/gemini-cli/pull/29999)** | ✅ 已关闭 | 路径比较现在在 Windows 工具间正确工作。 |

---

## 功能需求趋势

从 issues 和 PR 来看，最受关注的方向是：

1. **代理可靠性** — 修复挂起、虚假成功报告和改进子代理恢复逻辑
2. **扩展模型支持** — 添加图像生成模型（nano banana）和改进 Gemini 3 变体识别
3. **增强工具能力** — AST 感知文件读取、零依赖沙箱和操作系统级意图路由
4. **改进配置能力** — 跨会话持久化设置、技能/子代理自动调用
5. **安全与沙箱** — 沙箱模式下的会话持久化、浏览器代理优雅失败处理

---

## 开发者痛点

- **沙箱模式会话丢失** — 自 v0.60.0 以来认证 tokens 和会话数据无法持久化
- **代理挂起** — 通用代理和浏览器子代理均表现出阻塞行为
- **隐藏的失败** — 子代理在达到回合限制时仍报告成功
- **重复的工具结果** — 确定性的提供商会浪费 tokens
- **配置被忽略** — 浏览器代理和其他子代理静默丢弃 settings.json 覆盖
- **路径处理 bug** — Windows 大小写敏感性和前导斜杠规范化导致问题

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate the GitHub Copilot CLI Community Digest from English to Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure
2. Keep URLs, issue/PR numbers, code references, etc. as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me go through and translate this carefully while maintaining the exact structure and formatting.</think>

# GitHub Copilot CLI 社区动态

**日期：** 2026-10-29

---

## 1. 今日要闻

十月的最后几天，Copilot CLI 社区正面临几个影响重大的问题。一个严重的 **WSL2 回归问题**（Issue #3700）导致 CLI 主线程在空闲时以约 215% 的 CPU 运行，使 TUI 无法使用。与此同时，**MCP OAuth 认证** 对非第一方服务器仍然存在问题（Issues #4017、#5014），用户遭遇静默失败，且浏览器不会弹出登录窗口。本月还收到了第一份关于 **GPT-6.1 Sol** 在计划转实现阶段卡死的报告。从积极方面看，有四个新的 PR 旨在改进安装体验，包括卸载脚本、更好的 PATH 处理和校验和验证。

---

## 2. 发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门 Issue

| # | Issue | 摘要 | 👍 |
|---|-------|---------|-----|
| **#2165** | [Ubuntu 密钥链支持已损坏](https://github.com/github/copilot-cli/issues/2165) | 文档不正确；缺少 secret-tool 依赖。两个影响 Ubuntu 认证的不同 bug。 | 22 |
| **#3700** | [[高严重性] WSL2 回归：CLI 主线程在空闲时以约 215% CPU 运行](https://github.com/github/copilot-cli/issues/3700) | TUI 变得无法使用；实时输出冻结直到重启。#2208 的回归。 | 2 |
| **#4017** | [MCP OAuth 非第一方 HTTP 服务器认证失败](https://github.com/github/copilot-cli/issues/4017) | 远程 MCP 服务器（Atlassian、incident.io）静默失败，无浏览器弹出或错误提示。 | 3 |
| **#20** | [应支持代码库索引功能](https://github.com/github/copilot-cli/issues/20) | 与 VS Code 扩展的功能对等请求——至少应该支持索引上下文。 | 10 |
| **#5014** | [MCP OAuth 对有状态服务器"登录"失败](https://github.com/github/copilot-cli/issues/5014) | Atlassian MCP 服务器显示"登录"但在运行时 1.0.90-0 后返回 HTTP 400 错误。 | 0 |
| **#5270** | [GPT-6.1 Sol 在计划实现时卡死](https://github.com/github/copilot-cli/issues/5270) | 从计划模式切换到实现模式时，选择 GPT-6.1 Sol 会永远卡住。 | 0 |
| **#5205** | [上下文窗口轮换失败](https://github.com/github/copilot-cli/issues/5205) | 长时间运行的代理会话在轮换时因"checkpoint.md 不存在"错误而崩溃。 | 0 |
| **#4576** | [includeCoAuthoredBy: false 不被任务子代理继承](https://github.com/github/copilot-cli/issues/4576) | 设置被子代理忽略——提交仍会包含 Copilot 共同作者 trailer。 | 5 |
| **#4560** | [模型 "auto" 始终以 reasoningEffort: null 运行](https://github.com/github/copilot-cli/issues/4560) | 自动模型选择完全禁用推理努力，并拒绝配置尝试。 | 0 |
| **#4836** | [Grok 4.5：351 个工具因 HTTP 400 失败](https://github.com/github/copilot-cli/issues/4836) | CLI 未强制执行 350 个工具的限制——静默失败并返回不透明的错误。 | 0 |

---

## 4. PR 进展

| # | PR | 摘要 |
|---|-----|---------|
| **#2422** | [为手动安装添加卸载脚本](https://github.com/github/copilot-cli/pull/2422) | curl/wget 安装的配套 `uninstall.sh`；更新文档。 |
| **#1598** | [添加陷阱以在意外退出时清理临时目录](https://github.com/github/copilot-cli/pull/1598) | 修复 `install.sh` 中途失败时 `/tmp` 中的临时目录泄漏。 |
| **#2565** | [防止重复的 PATH 条目在重新安装时出现](https://github.com/github/copilot-cli/pull/2565) | 防止多次运行安装程序时 PATH 配置重复。 |
| **#5093** | [验证校验和条目与下载的 tarball 匹配](https://github.com/github/copilot-cli/pull/5093) | 确保 `--ignore-missing` 不会导致校验和验证成功但实际未验证。 |

---

## 5. 功能需求趋势

最请求的功能集中在以下几个主题：

- **平台对等**：代码库索引功能与 VS Code 扩展对等（#20）
- **会话管理**：VS Code 代理会话中支持 `/rename`（#4244），改进上下文窗口轮换（#5205）
- **MCP 改进**：企业注册表搜索（#4999），处理 `text/plain` blob（#4916）
- **UI/UX**：内置命令与技能的视觉区分（#5274），浅色主题支持（#5272）
- **权限**：非交互模式下默认拒绝工具权限并使用显式允许列表（#5275）

---

## 6. 开发者痛点

1. **认证混乱**：密钥链问题困扰多个平台——Ubuntu 文档损坏（#2165）、macOS XARA 分区不匹配（#4273）、OAuth 流程静默失败（#4017、#5014、#5233）

2. **平台回归**：WSL2 CPU 旋转（#3700）使 CLI 无法使用；Windows/PowerShell 环境变量继承损坏（#5281）

3. **模型配置问题**：自动模式完全禁用推理（#4560）；GPT-6.1 Sol 卡死（#5270）；Grok 工具限制导致不透明失败（#4836）

4. **MCP 生态系统摩擦**：企业注册表搜索损坏（#4999）、仅注册表策略阻止仓库配置（#5155）、OAuth 令牌刷新缺失（#5233）

5. **安装/部署摩擦**：手动安装无卸载程序、重新安装时 PATH 重复、失败时临时泄漏——当前 PR 都已解决

---

*数据来源：github.com/github/copilot-cli | 2026-10-29*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the OpenCode Community Digest from English to Chinese. I need to:

1. Translate the content while preserving all markdown structure
2. Keep URLs, issue numbers, version tags, code, and technical terms as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me translate this carefully, keeping the technical register appropriate for a Chinese developer newsletter.

Key decisions:
- Keep headings in Chinese
- Keep tables with proper Chinese column headers
- Keep URLs and issue numbers intact
- Use Chinese punctuation
- Maintain the same structure and formatting

Let me translate section by section:

## Today's Highlights
OpenCode发布了**v1.19.5**，修复了TUI worker请求失败时会一直挂起的bug。同时社区还发布了**process-daemon v0.3.2**，包含opencode-pty 0.3.2（协议7）。与此同时，多会话Agent通信、MCP服务器增强和数据库性能优化等功能的开发正在积极推进。

## Releases
版本号保持不变，翻译Changes列

## Hot Issues
翻译标题和Why It Matters列

## Key PR Progress
翻译Description列

## Feature Request Trends
翻译各个点

## Developer Pain Points
翻译各个点

Let me do this properly now.</think>

# OpenCode 社区简报 — 2026-10-29

## 今日要闻

OpenCode 发布了 **v1.19.5**，修复了 TUI worker 请求失败时会一直挂起的严重 bug。同时社区还发布了 **process-daemon v0.3.2**，包含 opencode-pty 0.3.2（协议 7）。与此同时，多会话 Agent 通信、MCP 服务器增强和数据库性能优化等功能正在积极开发中。

---

## 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v1.19.5** | **Bug 修复：** 失败的 TUI worker 请求现在会返回错误，而不是让调用方无限挂起。贡献者：@Nowaker（[#54936](https://github.com/anomalyco/opencode/issues/54936)） |
| **process-daemon v0.3.2** | opencode-pty 0.3.2（协议 7），已发布至 npm 为 `@opencode/pty@0.3.2` |

---

## 热门 Issue

| Issue | 摘要 | 重要性 |
|-------|------|--------|
| [#2242](https://github.com/anomalyco/opencode/issues/2242) | **是否有办法沙箱化 Agent？** — 请求限制终端命令访问当前目录之外的文件（类似 macOS seatbelt，gemini-cli/codex-cli 使用的机制） | 安全是团队部署 AI Agent 的首要关注点；104 条评论，80 个 👍 |
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | **免费套餐问题** — Zen 免费套餐问题的集中 Issue，包括用量限制错误和重置失败 | 影响大量免费套餐用户；76 条评论 |
| [#4714](https://github.com/anomalyco/opencode/issues/4714) | **TUI — 在会话缓冲区中搜索字符串** — 添加类似文本编辑器的"查找"功能，用于搜索 Agent 输出 | 高度请求的 UX 改进；44 条评论，63 个 👍 |
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | **在桌面端查看归档会话** — 添加菜单项以模态框显示归档会话 | 桌面用户需要更好的会话管理；44 条评论 |
| [#2999](https://github.com/anomalyco/opencode/issues/2999) | **提供禁用 Ctrl+C 的方式** — Windows 终端用户使用 Ctrl+C 会导致 OpenCode 崩溃 | 跨平台可用性问题；40 条评论 |
| [#785](https://github.com/anomalyco/opencode/issues/785) | **禁用流式模式** — 请求非流式运行（某些代理提供商不支持流式） | 对企业/基础设施兼容性很重要；35 条评论 |
| [#3176](https://github.com/anomalyco/opencode/issues/3176) | **为什么 OpenCode 大规模滥用 git？** — 担心在大型目录（45GB，54K 文件）上执行 `git add .` | 性能和workflow问题；22 条评论 |
| [#26602](https://github.com/anomalyco/opencode/issues/26602) | **桌面端 5 分钟 Headers 超时错误** — 本地提供商请求即使设置了自定义超时，仍在 5 分钟后失败 | 破坏本地/企业部署；20 条评论 |
| [#7624](https://github.com/anomalyco/opencode/issues/7624) | **基础路径/前缀路由支持** — 在 URL 前缀下运行 OpenCode（如 `/opencode`）以便集成到平台 | 嵌入 OpenCode 到更大产品的关键需求；15 条评论，55 个 👍 |
| [#10884](https://github.com/anomalyco/opencode/issues/10884) | **添加 MCP Apps 支持** — 支持 MCP（模型上下文协议）Apps 规范（v2026-01-26） | MCP 正在成为标准；14 条评论，57 个 👍 |

---

## 重要 PR 进展

| PR | 描述 |
|----|------|
| [#60074](https://github.com/anomalyco/opencode/pull/60074) | **feat(core): 让 Agent 向另一个会话提问** — 支持多会话工作，子 Agent、分支和后台任务可以查询其他会话 |
| [#60073](https://github.com/anomalyco/opencode/pull/60073) | **fix(core): 将运行中的终端移出驱逐范围** — 防止活动终端被从内存中驱逐 |
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | **feat(mcp): 支持远程 MCP 服务器的每服务器 TLS 信任** — 添加显式 `tls` 配置块，包含 `ca_file`、`cert_file`、`key_file` 选项 |
| [#59939](https://github.com/anomalyco/opencode/pull/59939) | **feat(core): 添加 image_generate 工具** — 内置工具，允许模型使用用户的图像模型生成/编辑图像 |
| [#60028](https://github.com/anomalyco/opencode/pull/60028) | **feat(core): 让 Code Mode 决定何时触发计划任务** — 计划任务现在可以包含条件触发：`if: { type: "code", code, allow }` |
| [#60070](https://github.com/anomalyco/opencode/pull/60070) | **feat(core): 订阅 MCP 资源** — `notifications/resources/updated` 的核心订阅功能 |
| [#59803](https://github.com/anomalyco/opencode/pull/59803) | **fix(ai): 为 Copilot 长上下文层级和缓存写入计费** — 修复长时间会话中 GitHub Copilot 成本的严重低估 |
| [#60067](https://github.com/anomalyco/opencode/pull/60067) | **fix(ai): 将 OpenRouter 图像编辑作为输入引用发送** — 修复通过 OpenRouter 的图像编辑问题（之前返回 404） |
| [#58916](https://github.com/anomalyco/opencode/pull/58916) | **perf(core): 将每个 assistant 部分写为单独的行** — 多步骤会话的 WAL 减少 72%，JSON 重写减少 98% |
| [#60061](https://github.com/anomalyco/opencode/pull/60061) | **fix(core): 恢复陈旧的快照仓库** — 处理 `git init` 成功但重命名失败的边缘情况，避免仓库损坏 |

---

## 功能需求趋势

根据 Issue 和 PR 统计，最受请求的功能方向包括：

1. **安全与沙箱** — Agent 隔离、文件访问限制、权限控制（#2242）
2. **多会话与会话间通信** — Agent 查询其他会话、会话分支（#60074）
3. **增强桌面端 UX** — 会话搜索、归档会话、新会话中的文件树（#4714、#6680）
4. **协议与提供商灵活性** — 非流式模式、基础路径路由、Azure Entra OAuth（#785、#7624）
5. **MCP 集成** — 每服务器 TLS 信任、MCP Apps 支持、资源订阅（#60039、#10884、#60070）
6. **调度与自动化** — 条件调度、速率限制感知的暂停/恢复（#60028、#43126）
7. **图像/多媒体工具** — 图像生成、通过 OpenRouter 的图像编辑（#59939、#60067）

---

## 开发者痛点

- **免费套餐可靠性** — Zen 免费套餐用户面临不可预测的用量限制和重置失败（#59387）
- **大型仓库的 Git 性能** — OpenCode 的会话快照在超大型目录上触发 `git add .`，导致严重卡顿（#3176）
- **终端/Windows 兼容性** — Windows 终端上 Ctrl+C 导致崩溃，本地提供商 5 分钟超时问题（#2999、#26602）
- **流式要求** — 某些企业代理提供商不支持流式，但 OpenCode 强制要求（#785）
- **数据库性能** — sync/history 端点的全表扫描；消息重写导致过度 WAL（#52270、#58916）
- **语言环境检测 bug** — 桌面端原生语言环境检测在某些语言/脚本组合上失败（#52334）

---

*数据来源：GitHub — anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this Pi Community Digest into Chinese, following specific rules:
- Output ONLY the translation, no preamble or explanation
- Preserve Markdown structure exactly
- Keep URLs, numbers, code, project names, issue/PR references as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving the structure and formatting.</think>

# Pi 社区简报 — 2026-10-29

## 今日要闻

过去 24 小时内，执行安全性和模型路由方面取得了重要进展。修复了一个关键问题：合并了 #11546，为 `pi.exec` 的输出添加了 256 MiB 上限，防止进程崩溃。多项 PR 围绕 ANSI 剥离、TUI 中的页面键处理和 Bedrock Mantle 路由关闭。在 issue 方面，agent 会话生命周期 bug 和模型回退不一致仍是活跃的讨论领域。

---

## 发布动态

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 摘要 | 评论数 | 状态 |
|---|-------|------|--------|------|
| 5886 | **[AgentSession 结算/续订及 assistant-tail 生命周期 bug](https://github.com/earendil-works/pi/issues/5886)** | 元 issue，关于运行时后逻辑尝试从一个已失效的 transcript 继续 agent 的常见 bug 类别。 | 13 | OPEN |
| 9409 | **[会话在推理模型上永久卡在上下文上限](https://github.com/earendil-works/pi/issues/9409)** | 推理模型上的会话在上下文上限处卡住，`stopReason: "length"`，自动压缩无法恢复。 | 12 | CLOSED |
| 10645 | **[resizeImage 在编译后 (Bun) 可执行文件中返回 null](https://github.com/earendil-works/pi/issues/10645)** | 自 0.87.x 起 Bun 编译的二进制文件中所有图片附件被省略——运行时 `resizeImage` 返回 null。 | 11 | CLOSED |
| 9884 | **[配置的默认模型有时在启动时被回退替换](https://github.com/earendil-works/pi/issues/9884)** | 运行时加载的扩展注册模型目录导致配置的默认模型在约 20% 的启动中被替换。 | 7 | OPEN |
| 10386 | **[Durable: 托管 coding-agent 扩展](https://github.com/earendil-works/pi/issues/10386)** | 请求创建 AgentSession 支持的 Durable 运行时，或提供与 ExtensionAPI 事件对等的 Durable hooks。 | 6 | OPEN |
| 10812 | **[目录中已不存在的保存默认模型被忽略](https://github.com/earendil-works/pi/issues/10812)** | 当提供商目录中的模型名称更改时（如 DeepSeek），保存的默认模型静默回退到其他模型。 | 6 | OPEN |
| 10616 | **[扩展 pi.exec 在 Windows 上执行 .cmd 命令失败](https://github.com/earendil-works/pi/issues/10616)** | Windows 上 `pi.exec` 对 .cmd/.bat 文件返回退出码 1 且 stdout 为空（npm、npx、pnpm）。 | 5 | OPEN |
| 10770 | **[`.pi/agent/sessions` 默认权限应为 `0700`](https://github.com/earendil-works/pi/issues/10770)** | 安全问题：会话目录以宽松权限创建，而非私有模式。 | 5 | OPEN |
| 11377 | **[stripAnsi 遗漏工具输出中的私有参数 CSI payload](https://github.com/earendil-works/pi/issues/11377)** | ANSI 剥离器错误处理私有前缀 CSI 序列的结束字节 `<`、`=`、`>`，导致鼠标报告和设备属性残留在输出中。 | 5 | CLOSED |
| 7113 | **[TUI 在 /login 输入 API key 后当 pi.dev 模型目录不可达时冻结](https://github.com/earendil-works/pi/issues/7113)** | 登录流程因模型刷新无超时或中止信号而无限挂起。 | 5 | CLOSED |

---

## 关键 PR 进展

| # | PR | 摘要 | 状态 |
|---|-----|------|------|
| 11546 | **[fix(coding-agent): 将 pi.exec 输出限制在 256 MiB](https://github.com/earendil-works/pi/pull/11546)** | 限制组合 stdout/stderr 以防止 `RangeError: Invalid string length` 崩溃；添加 `ExecOptions.maxBuffer` 及 `truncated`/`killed` 标志。 | CLOSED |
| 11545 | **[Anthropic 消息线程](https://github.com/earendil-works/pi/pull/11545)** | 通过 Anthropic 的消息线程 beta 启用服务端会话续订——设置会话 ID 并开启缓存时减少请求大小。 | OPEN |
| 11544 | **[fix(env): 守护进程终止时终止其命令](https://github.com/earendil-works/pi/pull/11544)** | 确保 pi-env 守护进程被终止时子进程也被终止，修复孤立命令状态。 | CLOSED |
| 11543 / 11541 | **[fix(coding-agent): 在 stripAnsi 中剥离私有参数 CSI 序列](https://github.com/earendil-works/pi/pull/11543)** | 修复 ANSI 剥离器正确处理带私有前缀字节（`<`、`=`、`>`）的 CSI 序列。 | CLOSED |
| 11540 | **[fix(env): 辅助线程无法启动时 exec 和 pty 返回 spawn_error](https://github.com/earendil-works/pi/pull/11540)** | 因 cgroup 限制导致线程创建失败时返回正确错误而非 panic。 | CLOSED |
| 7680 / 11348 | **[fix(tui): 处理选择组件的页面键绑定](https://github.com/earendil-works/pi/pull/11348)** | 在所有选择组件中处理 `tui.select.pageUp`/`pageDown`，修复键盘导航。 | CLOSED |
| 7948 | **[feat(coding-agent): 延迟扩展运行时重载](https://github.com/earendil-works/pi/pull/7948)** | 将阻塞的 `ctx.reload()` 替换为 fire-and-forget 合并重载，延迟运行时替换。 | OPEN |
| 10663 | **[feat(cli): pi auth --continue](https://github.com/earendil-works/pi/pull/10663)** | 为在其他地方启动的认证流程添加通用续订交接，接受 base64url JSON payload。 | OPEN |
| 11372 | **[fix(ai): 通过 Bedrock Mantle 路由 Converse 不支持的 Bedrock 模型](https://github.com/earendil-works/pi/pull/11372)** | 将 GPT-5/6、Grok 和 Gemma 模型路由至 Mantle OpenAI 端点，而非在 Converse 上失败。 | OPEN |
| 11515 | **[fix(coding-agent): 使 HTTP 连接超时可配置](https://github.com/earendil-works/pi/pull/11515)** | 添加 `httpConnectTimeoutMs` 配置选项（默认 10s）用于 TCP/TLS 连接建立。 | CLOSED |

---

## 热门讨论

| # | 讨论 | 摘要 | 分类 |
|---|------|------|------|
| 11503 | **[pi-rs: 核心的无头 Rust 移植版](https://github.com/earendil-works/pi/discussions/11503)** | 社区成员将 pi 0.74.2 的无头核心移植到 Rust，MIT 许可证，逐原子验证行为一致性。包含一个 DeepSeek API 兼容性发现。 | 展示与分享 |

---

## 功能需求趋势

根据 issue 和 PR 活动，以下方向需求旺盛：

1. **Durable 扩展托管** — 多项请求（#10386、#11141）寻求在 pi-durable 中运行 coding-agent 扩展，或通过 hooks 实现 ExtensionAPI 事件对等。

2. **模型配置健壮性** — #9884、#10812 和 #9409 突出了模型选择、目录同步和推理模型上下文上限处理的持续问题。

3. **Windows 执行一致性** — #10616 及相关修复（#11544、#11540）表明正在努力使 `pi.exec` 在 Windows、.cmd 和 cgroup 受限环境中可靠运行。

4. **扩展运行时重载安全性** — #7948 引入延迟重载以避免扩展操作期间的阻塞——这种模式可能会扩展。

5. **OAuth 和认证超时可配置性** — #11549 请求暴露 OAuth 刷新和 Copilot 目录超时；#7113 的挂起凸显了需求。

---

## 开发者痛点

- **模型回退困惑**：用户报告配置的默认值在目录更新或扩展加载时被静默替换（#9884、#10812）。
- **上下文上限卡住**：推理模型在长度限制处卡住，无自动恢复（#9409）。
- **Windows .cmd 执行**：`pi.exec` 对标准 Windows 批处理命令失败，阻塞 npm/npx 工作流（#10616）。
- **网络问题时 TUI 冻结**：模型目录不可达时登录流程无限挂起（#7113）。
- **缓冲区溢出崩溃**：大命令输出导致整个进程崩溃（#11360，由 #11546 修复）。
- **会话目录权限**：默认目录模式的隐私问题（#10770）。

---

*简报基于 earendil-works/pi 生成 — 2026-10-29*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. Let me carefully translate it while:

1. Preserving all Markdown structure exactly (headings, tables, lists, etc.)
2. Keeping URLs, numbers, dates, issue/PR references, version tags, file paths, and code identifiers as-is
3. Using natural technical Chinese (the register of a Chinese developer newsletter)
4. Not adding any preamble, explanation, or markdown fences

Let me go through each section:

**Today's Highlights** - Translate naturally
**Releases** - Keep the table, translate descriptions
**Hot Issues** - Keep the table structure, translate summaries
**Key PR Progress** - Keep the table, translate descriptions
**Feature Request Trends** - Translate the list
**Developer Pain Points** - Translate the list

I need to be careful about:
- Issue/PR numbers: #14724 → keep as is
- URLs: keep as is
- Version numbers: v0.26.3 → keep as is
- Code/technical terms: keep in English where appropriate
- Tables: keep structure, translate content

Let me translate:</think>

# Qwen Code 社区简报 — 2026-10-29

## 今日要闻

v0.26.3 版本带来了生成式 UI 卡片的重要改进——输入框和状态现在可以在导航/分屏视图中持久化保留，计算完成后会显示实时视图。与此同时，社区正在应对多个 E2E 测试和托管 Agent 关卡的 CI 失败问题，并且在 main 分支自身发现了一个来自 PR #15718 的关键全链路回归。SDK TypeScript 已更新为捆绑 CLI v0.26.3。

---

## 版本发布

| 版本 | 说明 |
|---------|-------------|
| **v0.26.3** | 生成的 UI 卡片现在可以在导航/分屏视图中保留输入框和状态，计算完成后显示实时视图，仅渲染支持 MCP Apps 的客户端。 |
| **v0.26.3-nightly.20261028.ca204559a7** | 最新的每日构建版本。 |
| **sdk-typescript-v0.1.25** | 捆绑 CLI v0.26.3。 |
| **desktop-v0.26.3** | 桌面客户端，新增会话权限规则和自动审批增强功能。 |

---

## 热门 Issue

| Issue | 摘要 | 为何重要 |
|-------|---------|----------------|
| [#14724](https://github.com/QwenLM/qwen-code/issues/14724) | Main CI failed: Managed Agent gate — no test identified (75 条评论) | CI 反复出现故障且缺乏诊断数据；阻塞合并流程。 |
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | proposal(serve): Define Managed Agent dual-path architecture and staged delivery (72 条评论) | 托管 Agent 分发架构的提案——对平台分发具有高战略意义。 |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | Daily dependency CVE audit failed (34 条评论) | 安全扫描流水线不稳定；存在潜在漏洞盲区。 |
| [#15173](https://github.com/QwenLM/qwen-code/issues/15173) | Main CI failed: E2E Tests — no test identified (19 条评论) | 另一个缺少测试归属信息的 CI 失败；妨碍调试。 |
| [#15499](https://github.com/QwenLM/qwen-code/issues/15499) | release: managed runtime v0.26.1 stops at immutable-publication preflight (11 条评论) | 发布流水线在 preflight 阶段阻塞；影响发布节奏。 |
| [#15795](https://github.com/QwenLM/qwen-code/issues/15795) | P1: managed-agent Harness pool fire can 404 and retire automation prematurely (3 条评论) | Harness 耗尽时的竞态条件可能导致永久性的自动化丢失——对生产稳定性至关重要。 |
| [#15820](https://github.com/QwenLM/qwen-code/issues/15820) | P1: full tier red on main — ManagedAgentPackagingIT roster contradiction + ClassCastException (2 条评论) | 两个全链路关卡在 main 自身上失败（自 #15718 起）；每次 PR 都消耗 CI 资源。 |
| [#15822](https://github.com/QwenLM/qwen-code/issues/15822) | P2: VS Code companion writes wipe sibling model settings keys (2 条评论) | 设置写入器会替换整个 `model` 对象，导致 `baseUrl`、`reasoningEffort` 等配置丢失。 |
| [#15741](https://github.com/QwenLM/qwen-code/issues/15741) | P2: MCP duplicate tool names discard entire server with misleading error (3 条评论) | DX 问题——一个错误的工具名会用令人困惑的错误信息销毁整个 MCP 服务器。 |
| [#15793](https://github.com/QwenLM/qwen-code/issues/15793) | P2: Provider selection text overlaps in short terminals (2 条评论) | UI 回归问题，影响窄终端用户。 |

---

## 关键 PR 进展

| PR | 说明 |
|----|-------------|
| [#15813](https://github.com/QwenLM/qwen-code/pull/15813) | **perf(managed): Bound activation renewal journal growth** — SQL 后端的 Hosted Sessions 现在原地续约租约，而非追加完整事务，控制日志膨胀。 |
| [#15824](https://github.com/QwenLM/qwen-code/pull/15824) | **fix(managed-agent): retry owed Hosted cleanup after its generation dies** — 当欠清理的 Harness 世代消亡后自动重试清理债务。 |
| [#15757](https://github.com/QwenLM/qwen-code/pull/15757) | **fix(core): keep uniquely named MCP tools when names collide** — 重复的工具名不再导致整个服务器崩溃；保留唯一命名的工具。 |
| [#15466](https://github.com/QwenLM/qwen-code/pull/15466) | **feat(serve): add user-scope Skill activation routes** — 新增守护进程路由，支持在用户作用域启用/禁用 Skill。 |
| [#15030](https://github.com/QwenLM/qwen-code/pull/15030) | **feat(cli): raise workspace skill install limits** — 将传输上限与磁盘上限分离，用于 ZIP 上传。 |
| [#15780](https://github.com/QwenLM/qwen-code/pull/15780) | **fix(permissions): report malformed rules instead of dropping them silently** — 格式错误的权限规则现在会产生明确错误，而非静默放行。 |
| [#15792](https://github.com/QwenLM/qwen-code/pull/15792) | **feat(managed-agent: phased upgrade command** — 新增 `bin/qwen-managed-agent-upgrade <phase>`，包含六个可恢复阶段。 |
| [#15817](https://github.com/QwenLM/qwen-code/pull/15817) | **feat(autofix-pr): root watches at the session worktree under the daemon** — 支持在链接的工作树设置中使用 `/autofix-pr`。 |
| [#14002](https://github.com/QwenLM/qwen-code/pull/14002) | **feat(web-shell): count running background agents in the status-bar task pill** — 显示活动后台子代理数量（如 "1 shell, 2 local agents"）。 |
| [#14748](https://github.com/QwenLM/qwen-code/pull/14748) | **fix(cli): gate project hooks behind an approval dialog** — 项目钩子现在需要用户审批后才加载，与 MCP 服务器行为一致。 |

---

## 功能需求趋势

1. **CI/CD 可靠性与可观测性** — 多项请求要求在 CI 失败时提供更好的测试归属信息（#14724、#15173），保留独立 E2E 验证（#15052），以及 macOS/Darwin 夜间验证（#15783）。
2. **托管 Agent 架构** — 正在进行双路径架构和分阶段交付（#12380）、分阶段升级（#15792）以及后台自动化钩子的工作。
3. **增强 CLI 自动化** — `/autofix-pr` 监视 PR 并自动修复 CI 失败、审查反馈和冲突（#15056）。
4. **MCP 增强** — 更好地处理重复工具名（#15741）和本地会话的文件变更钩子（#13969）。
5. **用户与工作区作用域** — 用户作用域的 Skill 激活（#15466）、工作区 Skill 限制提升（#15030）以及 VS Code 设置完整性（#15822）。

---

## 开发者痛点

- **反复出现的 CI 失败且缺乏诊断**：Issue #14724、#15173 和 #14796 都报告"未识别到测试"，使得根因分析困难。
- **main 分支的全链路回归**：Issue #15820 揭示自 #15718 以来两个全应用关卡在 main 自身上失败，每次 PR 都消耗 CI 资源。
- **发布流水线阻塞**：托管运行时 v0.26.1 在 immutable-publication preflight 阶段停滞（#15499），延迟部署。
- **安全扫描不稳定**：每日 CVE 审计反复失败（#13078），造成潜在漏洞盲区。
- **设置损坏风险**：VS Code companion 写入会抹掉不相关的模型设置键（#15822），对使用自定义配置的用户影响重大。
- **终端 UI 回归**：窄终端中提供者选择文字重叠（#15793），影响受限环境下的开发者工作流。

---

*简报基于 GitHub 数据生成 — github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*