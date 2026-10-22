# AI CLI 工具社区动态日报 2026-10-22

> 生成时间: 2026-10-22 00:50 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the English report into Simplified Chinese. Let me follow the rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve Markdown structure exactly: headings, tables, lists, etc.
- Keep URLs, numbers, dates, project names, version tags as-is
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully while preserving the structure and technical accuracy.</think>

# 跨工具对比报告：AI CLI 工具生态

## 生态概览

AI CLI 工具领域正经历快速的多样化与成熟期。七款活跃项目——Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code——在过去 24 小时内合计发布 **16 个版本**，从企业级产品到社区驱动的替代方案各有定位。共同的主题包括子代理可靠性、安全沙盒、Windows 平台对齐和 token 效率优化。不过战略重心各有差异：Anthropic 和 OpenAI 优先关注 MCP 生态集成和企业级管控，而 Google、Qwen 和其他小型项目则聚焦平台扩展和开发者体验打磨。

---

## 活跃度对比

| 工具 | 24h 内发布 | 活跃 Issue | 活跃 PR | 讨论区 | 主要渠道 |
|------|------------|------------|---------|--------|----------|
| **Claude Code** | 2 | ~50 | 1 | N/A | Issues |
| **OpenAI Codex** | 3 | ~50 | 19 | 11 | Issues + Discussions |
| **Gemini CLI** | 1 | ~50 | ~20 | N/A | Issues |
| **Copilot CLI** | 3 | ~30 | 1 | N/A | Issues |
| **OpenCode** | 0 | ~50 | 14 | N/A | Issues |
| **Pi** | 1 | ~30 | 9 | 3 | Issues + Discussions |
| **Qwen Code** | 5 | ~30 | 8 | N/A | Issues |

**关键观察：**

- **Qwen Code** 发布频率最高（5 个版本），反映出活跃的多组件开发（SDK、CLI、Desktop、Driver、nightly）。
- **OpenAI Codex** 的 PR 流水线最活跃（19 个 PR），也是唯一拥有活跃讨论区的项目，表明社区参与度超越了问题反馈层面。
- **Claude Code** 和 **Gemini CLI** 保持高 Issue 量但 PR 活跃度较低，说明社区以报告问题为主而非贡献代码。
- **OpenCode** 在统计窗口内无发布但 Issue/PR 活跃度较高——可能处于开发周期中间阶段。

---

## 共同的功能方向

| 功能方向 | 涉及的工具 | 具体需求 |
|----------|------------|----------|
| **子代理可靠性与智能** | Claude Code、Gemini CLI、Qwen Code | 修复卡死、虚假成功报告、自动调用子代理 |
| **Windows 平台对等** | Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode、Pi、Qwen Code | TUI 输入问题、沙盒限制、PowerShell 检测、控制台窗口处理 |
| **Token/上下文效率** | Claude Code、Gemini CLI、Qwen Code | AST 感知文件读取、可配置压缩、思考预算控制 |
| **MCP 生态扩展** | Claude Code、OpenCode、Qwen Code | OAuth 持久化、注册表策略、运行时服务器管理、机密客户端 |
| **安全与沙盒** | Claude Code、Gemini CLI、Qwen Code | 零依赖沙盒、权限拒绝漏洞、凭据访问范围 |
| **远程/无头控制** | OpenAI Codex、Copilot CLI | 作为守护进程运行 CLI、ChatGPT 应用远程控制、云端部署 |
| **模型层级/访问灵活性** | Claude Code、OpenCode、Codex | 更高使用配额（20x）、纯自动账号处理、BYOK 供应商支持 |

**每个工具**在本期摘要中都活跃地处理 Windows 兼容性、子代理可靠性和 token 效率——这些是 2026 年任何可行 CLI 工具的基础要求。

---

## 差异化分析

| 工具 | 核心焦点 | 目标用户 | 技术路径 |
|------|----------|----------|----------|
| **Claude Code** | 企业级代理化编码、安全遥测、OpenTelemetry 集成 | 需要审计、合规的开发团队 | 重投入安全事件、结构化输出、工具使用治理 |
| **OpenAI Codex** | 远程执行、多机器 dots、跨平台代理化工作流 | 需要云端托管持久代理的团队 | Dots 基础设施、ACP 协议、ChatGPT 远程控制 |
| **Gemini CLI** | 多供应商灵活性、AST 感知上下文优化、沙盒桥接 | 期望统一 LLM 访问且保持本地控制的开发者 | AST 解析节省 token、容器沙盒桥接 |
| **Copilot CLI** | GitHub 原生集成、插件市场可扩展性 | 现有 GitHub Copilot 订阅用户 | 深度 GitHub 集成、插件市场支持 git-subdir 源 |
| **OpenCode** | 桌面优先 UX、模型无关灵活性、现代 TUI | 追求精致体验的桌面重度用户 | 时间轴动画、Knobs 面板、侧边栏文件监听 |
| **Pi** | 轻量级代理化编码、缓存预热、持久化执行 | 注重效率的开发者 | 缓存预热、延迟流设置、断连后持久化执行 |
| **Qwen Code** | Managed Agent 基础设施、MCP 服务器管理、会话生命周期 | 使用阿里云 / Qwen 生态的企业团队 | Managed Agent 对齐、守护进程线协议、工作区锁定 |

**战略分野：**

- **Anthropic / OpenAI** 聚焦企业可靠性、MCP 治理和远程执行。
- **Google / Qwen / 阿里云** 强调多云供应商支持和平台扩展。
- **社区项目（OpenCode、Pi）** 优先打磨 UX 和开发者人体工学，而非企业级功能。

---

## 社区活力与成熟度

| 工具 | 社区成熟度 | 迭代速度 | 稳定性信号 |
|------|------------|----------|------------|
| **OpenAI Codex** | 高 | 非常高（19 PR、11 讨论） | 活跃 Beta；频繁变更 |
| **Qwen Code** | 高 | 非常高（5 发布、8 PR） | 快速多组件发布 |
| **Claude Code** | 高 | 中等（2 发布、稳定 issues） | 成熟产品，增量修复 |
| **Gemini CLI** | 中等 | 中等（1 发布、~20 PR） | 活跃开发中 |
| **Pi** | 中等 | 中等（1 发布、9 PR） | 稳步推进 |
| **OpenCode** | 中等 | 中等（14 PR、无发布） | 周期之间 |
| **Copilot CLI** | 中等 | 低（1 PR、3 发布） | 成熟，增量改进 |

**成熟度层级：**

- **第一梯队（企业级）：** Claude Code、Codex、Copilot CLI —— 用户基数大，流程规范。
- **第二梯队（成长期）：** Gemini CLI、OpenCode、Pi —— 活跃开发，社区形成中。
- **第三梯队（萌芽期）：** Qwen Code —— 快速迭代，阿里云生态聚焦。

---

## 趋势信号

1. **子代理成为新战场。** 每个工具都在解决子代理可靠性问题——卡死、虚假成功报告、上下文泄露、权限继承。社区要求子代理能够恰当自动调用、准确报告状态，并在失败时优雅恢复。

2. **Windows 不再是次要考虑。** 7/7 工具都报告了 Windows 相关问题，生态已认识到 Windows 桌面和服务器是主要平台。具体痛点（TUI 输入、沙盒限制、PowerShell 检测）正逐渐被理解和解决。

3. **Token 效率成为一等公民。** AST 感知文件读取、可配置压缩、思考预算控制、缓存预热策略出现在多个项目中。随着上下文窗口变大，行业正从"更多上下文"转向"更智能的上下文"。

4. **MCP 正在成为集成层标准。** MCP 服务器管理、OAuth 持久化、运行时启用/禁用、机密客户端支持成为趋势。MCP 生态正在成为工具扩展性的标准。

5. **安全边界正在被压力测试。** 权限拒绝漏洞（文件虽被拒绝读取但可通过 grep 访问）、凭据范围问题（不必要地读取 AWS/gcloud 密钥）、沙盒逃逸担忧不断浮现。社区正在积极加固这些边界。

6. **远程/无头控制是顶级功能需求。** 多个工具（Codex、Copilot CLI）有将 CLI 作为守护进程运行并支持远程控制的需求。这标志着向持久化、随时可用的 AI 代理转变——不再是一次一会话的 CLI 调用。

7. **发布速度正在加快。** 7 个工具 24 小时内 16 次发布体现了激烈竞争。市场仍在成型期——尚无单一工具占据主导地位，差异化正沿 UX、企业特性、供应商访问和平台支持等轴线展开。

---

*报告基于 GitHub 数据生成 —— 2026-10-22*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the report into Chinese (Simplified Chinese based on the system prompt and the context - Shanghai MiniMax AI). I need to translate the entire report while:
1. Keeping all Markdown structure exactly
2. Preserving URLs, issue/PR numbers, code, file paths, etc.
3. Using natural technical Chinese register
4. Not adding any preamble or explanation

Let me translate section by section:

Title: "Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区亮点报告"

Date: "Data as of October 22, 2026" → "数据截至 2026 年 10 月 22 日"

Section 1: "Top Skills Ranking" → "热门 Skills 排行"
- Note about comments → translate the note
- Table header "PR" stays, "Skill/Change" → "Skill/改动", "Functionality" → "功能", "Status" → "状态"
- Each row translate descriptions while keeping code/numbers/URLs

Section 2: "Community Demand Trends" → "社区需求趋势"
- Table headers: "Issue" stays, "Theme" → "主题", "Demand Signal" → "需求信号"
- "Emerging Directions" → "新兴方向"
- Content in Chinese

Section 3: "High-Potential Pending Skills" → "高潜力待上线 Skills"
- Table: "PR" stays, "Skill" stays, "Why值得关注" → "推荐理由"
- Content translate

Section 4: "Skills Ecosystem Insight" → "Skills 生态洞察"
- Translate content

Footer: Keep exactly as is, just translate the descriptive text

Let me do the translation now:</think>

# Claude Code Skills 社区亮点报告

**数据截至 2026 年 10 月 22 日**

---

## 1. 热门 Skills 排行

*注：此仓库中的大多数 PR 收到的直接评论较少。排名依据技术重要性、社区需求和活跃度指标综合评定。*

| PR | Skill/改动 | 功能 | 状态 |
|----|------------|------|------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder: MCP ≥2.0 支持** | 修复 `streamablehttp_client` → `streamable_http_client` 重命名问题，更新自定义请求头处理以适配新版 MCP SDK | OPEN |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: 触发器评估加固** | 隔离触发器评估环境，处理 Windows 特定故障（子进程管道问题），防止无关工具中断扫描 | OPEN |
| [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator: eval 视图安全** | 加固以防范脚本逃逸、DNS 绑定攻击、跨站 POST 及本地 eval 视图中的 HTML 转义漏洞 | OPEN |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation + quantitative-resume-auditor** | 将产品规格转换为可执行的 Notion 任务；根据量化指标审计简历 | OPEN |
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | 针对 Solidity/Rust 智能合约的自动化静态分析，通过零存储 Merkle 协议实现 TON 区块链证明锚定 | OPEN |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | 零成本 Markdown 转 MP4 视频生成，集成 Marp 实现逼真人声旁白 | OPEN |
| [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing: 移除 shell=True** | 通过移除不安全的 `shell=True` 参数，消除命令注入风险（CWE-78） | OPEN |

**讨论焦点：**
- MCP builder 更新（#1742）解决了 MCP SDK 2.0 中的破坏性变更——这对于使用 Model Context Protocol 的开发者至关重要
- 安全相关 PR（#1961、#1980）表明社区对技能基础设施的供应链安全和运行时安全日益关注
- Web3/智能合约审计技能（#1771）代表了一个新兴垂直领域（DeFi 工具）

---

## 2. 社区需求趋势

*根据 Issue 互动热度（评论数）整理*

| Issue | 主题 | 需求信号 |
|-------|------|----------|
| [#492](https://github.com/anthropics/skills/issues/492) (46 条评论) | **信任与安全** | 社区技能冒充官方 `anthropic/` 命名空间——呼吁命名空间隔离或明确标识 |
| [#228](https://github.com/anthropics/skills/issues/228) (17 条评论) | **组织内共享** | 用户希望实现组织内的内置技能共享，无需手动文件分发 |
| [#556](https://github.com/anthropics/skills/issues/556) (13 条评论) | **评估基础设施** | `run_eval.py` 显示 0% 触发率——技能调用测试存在故障 |
| [#1329](https://github.com/anthropics/skills/issues/1329) (10 条评论) | **内存/状态管理** | 提议 `compact-memory` 技能，用于长时间运行代理的符号化表示 |
| [#62](https://github.com/anthropics/skills/issues/62) (10 条评论) | **持久化可靠性** | 技能意外消失——存储/生命周期问题 |
| [#1385](https://github.com/anthropics/skills/issues/1385) (6 条评论) | **质量保障** | 提议"推理质量门禁管道"，用于任务前校准、对抗性审查、交付验证 |

**新兴方向：**
- **安全与信任**：命名空间隔离、评估沙箱
- **企业协作**：共享技能库、组织级管理
- **评估/调试**：触发率修复、基准测试可靠性
- **代理内存**：紧凑符号状态表示

---

## 3. 高潜力待上线 Skills

*具有实质功能、可能即将合并的活跃 PR*

| PR | Skill | 推荐理由 |
|----|-------|----------|
| [#1245](https://github.com/anthropics/skills/pull/1245) | Notion 集成 + 简历审计 | 连接 Claude Code 与流行生产力工具（Notion）及 HR 工作流程 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore 合约审计器 | 首个 Web3 专用技能；解决智能合约安全需求——高需求的 DeFi 用例 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 零成本从 Markdown 生成视频；独特的多媒体输出能力 |
| [#525](https://github.com/anthropics/skills/pull/525) | Pyxel 复古游戏开发 | Python 游戏开发技能；面向创意/编程细分市场，兴趣增长中 |
| [#514](https://github.com/anthropics/skills/pull/514) | 文档排版 | 修复 AI 文档质量问题（孤行、孤字、编号错误）——直接改善用户面向输出 |

---

## 4. Skills 生态洞察

**社区最集中的需求在于企业级技能基础设施：** 安全加固（命名空间隔离、评估沙箱）、组织级共享机制，以及可靠的评估/触发系统——这表明 Claude Code 正从个人开发者工具成熟为团队部署平台。

---

*报告数据来源：anthropics/skills（50 个 PR，50 个 Issue）*

---

<think>The user wants me to translate the English Claude Code Community Digest into Simplified Chinese. I need to:

1. Translate the content into Simplified Chinese
2. Preserve all Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, version tags, file paths, etc. as-is
4. Use natural technical Chinese register - like a Chinese developer newsletter
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section while preserving the structure:

**Today's Highlights** - 今日要闻

**Releases** - 版本发布

**Hot Issues** - 热门议题

**Key PR Progress** - 关键PR进展

**Feature Request Trends** - 功能需求趋势

**Developer Pain Points** - 开发者痛点

Let me go through each section carefully:</think>

# Claude Code 社区摘要 — 2026-10-22

## 今日要闻

过去 24 小时发布了两版补丁（v2.1.306、v2.1.307），修复了云会话中的认证边缘情况，并引入了新的 OpenTelemetry 安全事件。与此同时，社区继续围绕高影响力议题展开讨论：一项关于 **Max 20x 套餐** 的热门功能请求在六个月内已获得 182 个 👍；而自适应思考模式中导致文本块静默丢失的关键 bug 也引发了广泛关注。

---

## 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v2.1.307** | 新增 `/claude-api api-version` 命令，将 Claude API 代码迁移至版本 `2026-10-21`。引入 `claude_code.safety_event` OpenTelemetry 事件，用于追踪每次工具调用的权限规则、自动模式、安全检查、钩子和沙盒操作。修复了请求处理问题。 |
| **v2.1.306** | 修复了在云会话中运行 `claude -p` 时，即使未设置会话环境变量也会错误提示"未登录"的问题。修复了 API 错误被"提示过长"消息覆盖的问题，以及在包含大量 MCP 工具的会话中不必要的压缩问题。 |

---

## 热门议题

| # | 议题 | 摘要 | 为何重要 |
|---|------|------|----------|
| 1 | **[#47509](https://github.com/anthropics/claude-code/issues/47509)** — 团队套餐需要 Max 20x 档位 | 高级用户（CTO、技术负责人）请求 20x Pro 使用档位，因为当前的 6.25x Premium 档位不足以满足重度 agent 编码工作流。 | **182 👍** — 社区需求最高；反映出专业重度使用场景的定价不匹配。 |
| 2 | **[#74260](https://github.com/anthropics/claude-code/issues/74260)** — Assistant 文本块被静默丢弃 | 在自适应思考模式下，assistant 文本块后接更多思考内容时，这些文本块从不渲染，且在 transcript JSONL 中缺失。 | **34 条评论，28 👍** — 数据丢失 bug；破坏会话可追溯性和回放功能。 |
| 3 | **[#102142](https://github.com/anthropics/claude-code/issues/102142)** — Desktop 快捷指令区被隐藏 | 侧边栏更新后，代码页中的快捷指令区被隐藏，且每次启动时重置为隐藏状态。 | **20 条评论，14 👍** — UI 回归问题，影响工作流自动化。 |
| 4 | **[#93014](https://github.com/anthropics/claude-code/issues/93014)** — OAuth session_stale_relogin 锁定 | 桌面应用在 OAuth 令牌刷新失败并返回 `invalid_grant` 时会强制登出活跃会话。 | **9 条评论，6 👍** — 认证不稳定干扰活跃工作。 |
| 5 | **[#75911](https://github.com/anthropics/claude-code/issues/75911)** — 工作树池在使用中回收目录 | 桌面应用的工作树池在会话仍在使用时回收目录，导致 HEAD 在任务中途脱离。 | **8 条评论** — 数据完整性风险；可能损坏 git 状态。 |
| 6 | **[#71424](https://github.com/anthropics/claude-code/issues/71424)** — 协作会话泄漏 node 进程 | 桌面应用启动的本地 agent 会话让 `claude-code` node 进程持续运行不退出，导致内存膨胀和 MCP 端口耗尽。 | **7 条评论** — 资源泄漏；随时间推移导致系统性能下降。 |
| 7 | **[#67083](https://github.com/anthropics/claude-code/issues/67083)** — "积分余额"与"当前余额"混淆 | 两个不相关的计费系统（API 控制台与订阅）使用相同的"余额"标签，UI 上没有区分。 | **9 条评论** — 计费 UX 混乱。 |
| 8 | **[#70159](https://github.com/anthropics/claude-code/issues/70159)** — Token 计数器消失 | 运行中的 token 计数器在输入聚焦时消失，且无法恢复显示。 | **8 条评论** — 成本追踪可用性回归。 |
| 9 | **[#64912](https://github.com/anthropics/claude-code/issues/64912)** — 特定 API 错误被替换为通用消息 | 当上下文跨越 200K→1M tokens 时，一个具体的可操作错误被替换为通用 UI 消息，隐藏了修复步骤。 | **6 条评论** — 错误处理不佳；阻塞用户解决问题。 |
| 10 | **[#93537](https://github.com/anthropics/claude-code/issues/93537)** — 并发进程覆盖 MCP OAuth 条目 | 在 macOS 上，并发的 `claude` 进程会用空令牌覆盖 Keychain 中的 OAuth 条目，尽管刷新令牌有效。 | **5 条评论，4 👍** — 并发下认证状态损坏。 |

---

## 关键 PR 进展

过去 24 小时仅有一条 PR 更新：

| PR | 描述 |
|----|------|
| **[#21459](https://github.com/anthropics/claude-code/pull/21459)** — `feat(hookify): add glob_match support and case sensitivity control` | 为 hookify 规则添加 `glob_match` 模式支持（如 `*.py`）和 `case_sensitive` 选项。无需正则表达式即可简化路径匹配。 |

---

## 功能需求趋势

基于议题分析，社区在这些领域表现出需求：

| 趋势 | 证据 |
|------|------|
| **更高使用档位** | #47509（Max 20x）表明对超出现有 6.25x 档位的高级用户套餐有强烈需求。 |
| **计费透明度** | 多个议题（#67083、#67073、#70172）指出 API 积分与订阅用量使用相同的"余额"标签——用户希望获得按功能划分的活动日志和更清晰的余额显示。 |
| **桌面端 UI 优化** | #102142（快捷指令可见性）、#104089（需要输入提示点）、#103335（提示建议）——桌面应用 UI 频繁出现回归问题。 |
| **可靠性与安全性** | #93287（沙盒数据丢失）、#74260（静默数据丢失）、#75911（工作树损坏）——社区对导致数据破坏的边缘情况日益关注。 |
| **可观测性** | #64882（文件重复读取循环）、#64880（重复消息 ID）、#64912（错误屏蔽）——用户需要更好的调试和审计追踪。 |

---

## 开发者痛点

| 痛点 | 频率 | 影响 |
|------|------|------|
| **认证/令牌刷新失败** | 高 | 会话突然登出；并发进程损坏 Keychain；OAuth 锁定导致工作中断。 |
| **数据丢失 / 静默损坏** | 中高 | 文本块丢弃、工作树 HEAD 中途脱离、已启动任务中的未提交工作无通知。 |
| **高级用户定价不匹配** | 高 | 6.25x 档位不足以满足 agent 工作流；尽管有需求但无 20x 选项。 |
| **桌面应用回归** | 中 | 频繁出现 UI bug：快捷指令隐藏、token 计数器缺失、提示建议失效、"需要输入"提示点误触发。 |
| **错误消息质量差** | 中 | 具体可操作的错误被替换为通用消息；速率限制倒计时截断；模型重复读取未更改文件。 |
| **资源泄漏** | 中 | 协作 node 进程永不退出；MCP 端口随时间耗尽。 |

---

*摘要基于 2026-10-22 的 GitHub 数据生成。所有链接指向 `github.com/anthropics/claude-code`。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest into Simplified Chinese. I need to:

1. Translate all the content while keeping the Markdown structure exactly as-is
2. Preserve URLs, issue numbers, code, file paths, version tags, etc.
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Not add any preamble, explanation, or markdown fences

Let me go through and translate this carefully, maintaining the exact structure.</think>

# OpenAI Codex 社区周报

**日期：** 2026年10月22日

---

## 今日要闻

Codex 项目在 macOS 和 Windows 桌面应用稳定性方面持续活跃——尤其是新会话中的序列化失败和会话持久化问题。社区也在积极参与远程控制功能和跨平台改进，同时团队还修复了多个 OAuth、代理认证和线程采样的内部问题。

---

## 发布版本

过去 24 小时内发布了三个 Rust CLI alpha 版本：

| 版本 | 说明 |
|------|------|
| `rust-v0.164.0-alpha.10` | v0.164 系列最新 alpha |
| `rust-v0.164.0-alpha.9` | v0.164 系列前一个 alpha |
| `rust-v0.163.0-alpha.11.1` | v0.163 系列补丁版本 |

[查看所有发布 →](https://github.com/openai/codex/releases)

---

## 热门 Issue

**1. [Codex 回复的是更早的消息而非最新消息](https://github.com/openai/codex/issues/8648)** — 89 条评论，65 👍
一个关键的对话上下文错误，助手在多条消息的对话中回复的是更早的消息而非最新的一条。高社区参与度反映了对话连贯性失败问题的严重性。

**2. [macOS 应用：新会话失败，显示"Cannot serialize value"](https://github.com/openai/codex/issues/55744)** — 63 条评论，135 👍
macOS 桌面应用（v26.1016.51333）在新会话中发送第一条消息时抛出序列化错误。最高的反应数表明对 macOS 用户影响广泛。

**3. [显式允许站点后浏览器访问仍被阻止](https://github.com/openai/codex/issues/49453)** — 32 条评论，3 👍
Windows 特定问题：用户在聊天级别明确允许某个站点后，浏览器访问仍然被拒绝，影响本地开发工作流。

**4. [权限/审批模式选择不持久化](https://github.com/openai/codex/issues/29915)** — 28 条评论，4 👍
用户报告安全审批模式设置在会话恢复或新会话时无法持久化——这在受控环境中是个重要问题。

**5. [Windows：read_thread 仅返回内容引用](https://github.com/openai/codex/issues/50329)** — 20 条评论，4 👍
Windows 上的 `read_thread` 函数对已完成的回复仅返回 `chatgpt-content-reference` 占位符而非实际内容，导致下游处理失败。

**6. [macOS：浏览器运行时报告"Browser is not available: iab"](https://github.com/openai/codex/issues/53425)** — 13 条评论，0 👍
内置浏览器可见但代理无法通过浏览器运行时发现或访问它——macOS 上的这种不一致需要解决。

**7. [Native Lite 客户端重复计算推理 token](https://github.com/openai/codex/issues/53913)** — 12 条评论，1 👍
当 `x-reasoning-included` 不存在时，Lite 客户端错误地重复计算旧的推理，导致 54% 的不必要压缩。

**8. [Windows：更新后 Dots 条目消失](https://github.com/openai/codex/issues/55795)** — 11 条评论，3 👍
更新到 v26.1016.51333 后，Dots（AI 设备）条目从侧边栏消失，重装和热键都无法恢复。

**9. [OpenAI Developers 安装失败："OAuth state not found"](https://github.com/openai/codex/issues/54924)** — 11 条评论，8 👍
用户无法安装 OpenAI Developers 扩展，原因是认证流程中 OAuth 状态不匹配。

**10. [Windows：超长 input-messages 导致 codex exec 中的 notify 失败](https://github.com/openai/codex/issues/18309)** — 9 条评论，1 👍
Windows 上当载荷包含超长消息时，`notify` 命令静默失败，导致 turn-complete 回调无法工作。

---

## 关键 PR 进展

| PR | 状态 | 摘要 |
|----|------|------|
| [#56033](https://github.com/openai/codex/pull/56033) | **开放** | **默认启用 Bedrock 设置向导** — 将 AWS Bedrock 设置向导升级为稳定版并为符合条件的用户启用 |
| [#56031](https://github.com/openai/codex/pull/56031) | 已关闭 | **在 thread/sample 中支持客户端 Responses API 元数据** — 为 `ThreadSampleParams` 添加 `responsesapiClientMetadata` |
| [#56024](https://github.com/openai/codex/pull/56024) | 已关闭 | **限制解码后的 HTTP/3 响应头** — 将 QPACK 展开的响应头限制在 64 KiB 以防止内存耗尽 |
| [#56022](https://github.com/openai/codex/pull/56022) | 已关闭 | **在 CLI 子命令间保留配置覆盖** — 修复当 `-c` 在多个层级出现时 Clap 丢弃早期配置值的问题 |
| [#56021](https://github.com/openai/codex/pull/56021) | 已关闭 | **在可编辑 composer 中保留斜杠命令前缀** — 在 textarea 中保留 `/` 并将斜杠命令渲染为 `› /command` |
| [#56020](https://github.com/openai/codex/pull/56020) | 已关闭 | **允许在失败轮次后进行线程采样** — 即使最新轮次失败或中断也允许 `thread/sample` |
| [#56001](https://github.com/openai/codex/pull/56001) | 已关闭 | **支持企业 MCP 的机密 OAuth 客户端** — 为企业托管的 MCP 认证启用客户端密钥 |
| [#56000](https://github.com/openai/codex/pull/56000) | 已关闭 | **使用 Windows 认证重试代理 CONNECT** — 使用 Negotiate/NTLM 凭据重试代理 407 挑战 |
| [#55994](https://github.com/openai/codex/pull/55994) | 已关闭 | **添加 Windows 代理认证隧道辅助程序** — 使用 libcurl 和 Windows 凭据公开 `connect_windows_proxy` |
| [#55991](https://github.com/openai/codex/pull/55991) | 已关闭 | **避免在 token 使用中重复计算保留的推理** — 修复由冗余推理估算导致的过早压缩问题 |

[查看所有 PR →](https://github.com/openai/codex/pulls)

---

## 热门讨论

### 需求

- **[从 ChatGPT 应用远程控制 Codex](https://github.com/openai/codex/discussions/9200)** — 52 条评论，194 👍
  需求最强烈的功能：在无头机器上运行 Codex 并从 ChatGPT 移动/桌面 UI 远程控制它，取代当前的 VPN/SSH 变通方案。

- **[允许 dot 直接连接到无头 Linux 服务器](https://github.com/openai/codex/issues/49491)** — 9 条评论，16 👍
  授权 dot 使用无头 Linux 服务器作为任务环境，无需图形桌面。

- **[允许 dot 使用额外拥有的计算机](https://github.com/openai/codex/issues/50660)** — 5 条评论，0 👍
  让 dot 在多台机器上生成任务，包括现有的无头 Linux Codex Remote。

### 问答

- **[恢复之前的会话](https://github.com/openai/codex/discussions/1076)** — 20 条评论，32 👍
  用户难以在 auto 模式下恢复之前的会话；`codex --history` 不支持恢复特定会话。

- **[ChatGPT Sites + D1 + Drizzle 迁移](https://github.com/openai/codex/discussions/42848)** — 3 条评论，2 👍
  有关 Sites 如何在使用 Drizzle 和 Cloudflare D1 时确定应用哪个迁移的问题。

### 展示与分享

- **[TAHU：授权网关研究原型](https://github.com/openai/codex/discussions/55421)** — 5 条评论，1 👍
  一个 Python 授权网关的研究原型，探索代理如何在不暴露私人笔记的情况下回答公开问题。

- **[bundled-marketplace 刷新泄漏暂存目录](https://github.com/openai/codex/discussions/42049)** — 2 条评论，3 👍
  用户报告 macOS 上有约 31 GiB 的废弃暂存目录，导致严重的磁盘空间耗尽。

- **[Codex 28 天重置挑战的日历追踪器](https://github.com/openai/codex/discussions/55942)** — 0 条评论，3 👍
  使用 X API 和 OpenAI API 追踪 OpenAI 每日发货挑战的项目。

[查看所有讨论 →](https://github.com/openai/codex/discussions)

---

## 功能需求趋势

1. **远程/无头控制** — 强烈需求：在无头 Linux 服务器上运行 Codex 并从 ChatGPT 应用或移动 UI 远程控制
2. **多机器 dot 支持** — 用户希望 dot 能跨多台授权机器分配任务
3. **MCP 增强** — MCP 配置中的环境变量展开、企业机密 OAuth 客户端支持
4. **会话持久化** — 更好地处理会话恢复、线程历史和权限设置
5. **AWS Bedrock 集成** — 改进的设置向导和统一的 AWS 登录方式

---

## 开发者痛点

- **macOS 桌面应用不稳定** — 新会话中的序列化错误、浏览器运行时断开、侧边栏问题
- **Windows 特定故障** — 沙箱内的 Git Bash、超长载荷 notify 失效、最小化/还原时视口跳动、性能延迟
- **OAuth/认证失败** — 令牌交换失败、OAuth 状态未找到错误阻止扩展安装
- **内存/资源泄漏** — Marketplace 暂存目录泄漏消耗数十 GB
- **上下文错误** — 多轮对话中回复错误的消息
- **速率限制** — 尽管还有大量配额仍间歇性出现 HTTP 429

---

*基于 2026年10月22日的 GitHub 数据生成*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this English digest into Chinese. I need to:
1. Translate all the text while keeping technical terms, code, URLs, issue numbers, etc. in their original form
2. Preserve the exact Markdown structure (headings, tables, lists, etc.)
3. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate:

Title: Gemini CLI Community Digest — 2026-10-22
→ Gemini CLI 社区周报 — 2026-10-22

Section 1: Today's Highlights
→ 今日要闻

Section 2: Releases
→ 版本发布

Section 3: Hot Issues
→ 热门议题

Section 4: Key PR Progress
→ 重点 PR 进展

Section 5: Feature Request Trends
→ 功能需求趋势

Section 6: Developer Pain Points
→ 开发者痛点

Now I'll translate the content while preserving the structure.</think>

# Gemini CLI 社区周报 — 2026-10-22

## 1. 今日要闻

v0.67.0-nightly 版本发布，包含两个针对性修复：将 gsutil 迁移至 gcloud storage，以及在 shell 和 git 环境中保留用户级 `~/.gitconfig`。同时，议题区围绕子代理可靠性展开了热烈的社区讨论——尤其是"通用代理挂起"问题（8 👍）和 MAX_TURNS 恢复问题（13 条评论），此外还有新功能开发，包括 Gemini 4 Argon 模型支持以及 IDE 到容器沙箱的桥接功能。

---

## 2. 版本发布

| 版本 | 变更内容 |
|------|----------|
| **v0.67.0-nightly.20261021.gd00859d6b** | **维护**: 将 `gsutil` 使用迁移至 `gcloud storage` ([#29839](https://github.com/google-gemini/gemini-cli/pull/29839)) — 属于 Google Cloud 工具链统一工作的一部分。<br>**修复 (core)**: 在 shell 和 git 环境中保留用户级 `~/.gitconfig` ([#29832](https://github.com/google-gemini/gemini-cli/pull/29832)) — 解决了 CLI 启动子 shell 时配置丢失的问题。 |

---

## 3. 热门议题

| 议题 | 优先级 | 摘要 | 重要性 | 反馈 |
|------|--------|------|--------|------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | p1 | **子代理在 MAX_TURNS 报告为 GOAL 成功后的恢复问题** — `codebase_investigator` 子代理在达到最大回合数而未完成分析时，仍会报告 `status: "success"` 和 `Termination Reason: "GOAL"`。 |掩盖了实际失败，导致开发者遗漏未完成的研究调查。 | 13 条评论，2 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | p2 | **零依赖 OS 沙箱与执行后意图路由** — 利用 Gemini 3 原生 bash 亲和性，通过零依赖 OS 沙箱和执行后意图路由的提案。 |可能在不增加依赖的情况下显著提升安全性，同时让模型在 POSIX 工具链中更有效。 | 9 条评论，1 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | p1 | **通用代理挂起** — 当 `gemini-cli` 委托给通用代理时，它会在简单操作（如创建文件夹）时无限挂起。临时方案：指示模型不要使用子代理。 |阻塞核心功能；影响任何涉及子代理委托的工作流。 | 8 条评论，8 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | p2 | **评估 AST 感知文件读取、搜索和映射的影响** — 研究 AST 感知工具是否能提升精度并减少 token 使用量的大型专题。 |可能实现显著的 token 节省（当前基线约 36.6k token/轮）和更精确的代码导航。 | 7 条评论，1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | p2 | **Gemini 不够频繁使用技能和子代理** — 模型不会自行调用自定义技能/子代理，即使任务与之直接相关。 |削弱用户定义技能的价值；每次都需要显式提示。 | 7 条评论 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | p2 | **浏览器代理忽略 settings.json 覆盖** — 浏览器代理完全忽略来自 `settings.json` 的配置覆盖（如 `maxTurns`）。 |违背用户对每个代理配置的期望；限制自定义能力。 | 4 条评论 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | p3 | **增强 browser_agent 韧性：自动会话接管和锁恢复** — 当前在锁定的浏览器配置文件中快速失败的策略导致不必要的失败。 |影响持久会话环境中的可靠性；需要优雅的恢复机制。 | 4 条评论 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | p1 | **browser 子代理在 wayland 上失败** — 浏览器子代理在 Wayland 会话上失败。 |破坏主要平台；Linux 桌面用户无法使用浏览器自动化。 | 4 条评论，1 👍 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | p2 | **代理应该停止/劝阻破坏性行为** — 模型在存在更安全的替代方案时使用危险命令（`git reset --force`）。 |安全隐患；可能导致生产工作流中的数据丢失。 | 3 条评论，1 👍 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | p1 | **get-shit-done 输出钩子导致崩溃** — 当 get-shit-done 输出完成时发生崩溃（打印用户摘要）。 |中断工作流完成；需要在输出送达前修复。 | 3 条评论 |

---

## 4. 重点 PR 进展

| PR | 领域 | 状态 | 摘要 |
|----|------|------|------|
| [#29737](https://github.com/google-gemini/gemini-cli/pull/29737) | agent | **OPEN** | **feat(models): 添加 Gemini 4 Argon 模型支持** — 注册新的 `gemini-4-argon` 模型以供 CLI 选择。 |
| [#29858](https://github.com/google-gemini/gemini-cli/pull/29858) | extensions | **CLOSED** | **feat(cli): 将 IDE 伴侣桥接到容器沙箱中（通过 exec stdio）** — 当 Gemini CLI 在容器沙箱（docker/podman/runfs）中运行而 IDE 在主机上运行时，启用 IDE 集成（`/ide`、打开文件上下文、本地 diff）。 |
| [#29868](https://github.com/google-gemini/gemini-cli/pull/29868) | cli | **OPEN** | **fix(cli): 在请求取消后停止延续流处理和自动提示** — 防止 CLI 在用户取消活跃轮次后继续执行后续工具批次。 |
| [#29867](https://github.com/google-gemini/gemini-cli/pull/29867) | cli | **OPEN** | **fix(cli): 在弃用设置迁移期间保留 `${VAR}` 占位符** — 修复了一个 bug：自动迁移弃用设置时错误地覆盖了不相关的环境变量占位符。 |
| [#29849](https://github.com/google-gemini/gemini-cli/pull/29849) | cli | **OPEN** | **fix(cli): 处理终止信号并防止取消后执行工具** — 修复了在无头环境中 SIGINT/SIGTERM 后 CLI 可能继续消耗延迟的 provider 工具调用的竞态条件。 |
| [#29866](https://github.com/google-gemini/gemini-cli/pull/29866) | cli | **OPEN** | **fix(cli): 仅在恢复聊天成功后恢复工作区目录** — 修复了一个 bug：失败的会话恢复会导致目录处于不一致状态。 |
| [#29833](https://github.com/google-gemini/gemini-cli/pull/29833) | security | **CLOSED** | **fix(core): 将不信任标志检查限定于外部输出并记住已批准的标志** — 通过将代理自身 shell 命令输出视为非外部来减少重复确认提示。 |
| [#29847](https://github.com/google-gemini/gemini-cli/pull/29847) | core | **CLOSED** | **fix(core): 防止在工作区是主目录时重复加载代理** — 消除了当工作区是 `~` 时的误报"重复代理名称"警告。 |
| [#29778](https://github.com/google-gemini/gemini-cli/pull/29778) | acp | **OPEN** | **fix(acp): 在将工具输出发送给模型前对其进行截断** — 在 ACP 模式下应用 `tools.truncateToolOutputThreshold`，防止大型 shell 输出超出模型输入限制。 |
| [#29823](https://github.com/google-gemini/gemini-cli/pull/29823) | core | **OPEN** | **fix(core: 回退到系统 ripgrep 并信任 Termux 路径）** — 修复了在 Android/Termux 上 `grep_search` 期间未处理的 `spawn ENOENT` 错误。 |

---

## 5. 功能需求趋势

纵观所有议题，几个高层主题浮现出来：

1. **子代理可靠性和智能化** — 多个议题（#22323、#21968、#21409）指出子代理未被适当调用、挂起或误报状态。社区希望子代理行为更智能、更自主。

2. **Token 效率与上下文管理** — 大型议题 #22745（AST 感知读取）和 #19561（"体贴式提取"）都瞄准了减少约 36.6k token/轮的基线。大型文件读取正在"喷射"上下文。

3. **平台与环境扩展** — 议题 #21983（Wayland）、#29823（Android/Termux）和 #29718（rootless Podman）表明对非标准 Linux 环境的需求日益增长。

4. **安全与沙箱** — #19873 提出零依赖 OS 沙箱；#22672 要求劝阻破坏性命令。社区正在积极思考安全边界。

5. **IDE 集成深度** — #29858 将 IDE 伴侣桥接到容器中；#29848 将 IDE 设置从打开文件上下文中排除。IDE 连接性正成为一等公民。

---

## 6. 开发者痛点

| 痛点 | 频率 | 描述 |
|------|------|------|
| **子代理挂起与误报** | 高 | 通用代理挂起（#21409）和子代理报告虚假成功（#22323）正在阻塞实际工作流。 |
| **配置不生效** | 中 | 浏览器代理忽略 `settings.json` 覆盖（#22267）和符号链接代理未被识别（#20079）让期望自定义能够工作的用户感到沮丧。 |
| **Token 膨胀** | 中 | 大型文件读取造成上下文膨胀；开发者需要精准的 AST 感知读取。 |
| **平台缺口** | 中 | Wayland 失败、Android/Termux 崩溃和 rootless Podman 权限问题分割了用户群。 |
| **重复确认** | 中-低 | #29833 部分解决了这个问题，但就相同安全标志重复提示的问题仍然存在。 |

---

*本周报基于 2026-10-22 的 GitHub 数据生成，来源仓库：google-gemini/gemini-cli。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI Community Digest into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation
- Preserve the Markdown structure exactly
- Keep URLs, numbers, dates, issue/PR references, code, etc. as-is
- Use natural technical Chinese register

Let me translate section by section, maintaining all the formatting.

The title: "GitHub Copilot CLI Community Digest" → "GitHub Copilot CLI 社区动态"

Let me go through each section carefully.</think>

# GitHub Copilot CLI 社区动态
**日期：** 2026-10-22

---

## 1. 今日要闻

GitHub Copilot CLI v1.0.102 带来了模型选择处理和子代理工作流的重大改进。本次更新实现了提示词模式对托管 Auto 模型的正确识别，支持子代理继承自定义和 MCP 工具授权以避免重复权限提示，还改进了沙盒网络流量对代理的继承处理。值得注意的是，多个备受关注的问题已得到解决，包括呼声很高的 vi/vim 输入模式以及 BYOK 提供商认证失败问题。

---

## 2. 版本发布

### v1.0.102 (2026-10-21)

| 类别 | 变更 |
|------|------|
| **新增** | 提示词模式现在对 `-p` 和管道 stdin 输入正确识别托管的 Auto 模型选择 |
| **新增** | 子代理继承自定义和 MCP 工具授权，避免重复权限提示并允许继承的工作流运行 |
| **新增** | 插件市场支持 `git-subdir` 来源和长插件描述 |
| **改进** | 沙盒网络流量在继承主机代理设置时正确遵循 `NO_PROXY` 和 `ALL_PROXY` |
| **修复** | Fish shell 补全在别名包含选项别名（如 `--effort`）时正常工作 |

### v1.0.102-1 与 v1.0.102-0

增量版本，包含相同的核心改进和细微优化。

---

## 3. 热门议题

| # | 议题 | 摘要 | 👍 |
|---|------|------|-----|
| #13 | **[已关闭] CLI 输入应支持 vi/vim 输入模式** | 键盘驱动的模态编辑器导航功能。已实现后关闭。 | 76 |
| #3636 | **[开启] 无法启用语音模式 - 获取模型目录失败** | 企业 VPN 下语音模式失败，模型目录无法访问。影响语音优先工作流。 | 6 |
| #2055 | **[已关闭] 队列中的消息无法在不取消任务的情况下清除** | 用户无法在不终止活动任务的情况下编辑/清除排队的消息。 | 4 |
| #4414 | **[已关闭] BYOK 自定义提供商在请求到达前返回本地 403** | 自定义 OpenAI/Anthropic 提供商在请求到达前失败并返回 403——认证路由错误。 | 3 |
| #3448 | **[开启] 支持 BYOK 模型的额外请求参数** | 请求添加 `COPILOT_EXTRA_REQUEST_PARAMS` 环境变量以支持非标准 LLM 提供商参数。 | 1 |
| #5192 | **[开启] ACP 模式：MCP OAuth 令牌永不持久化** | OAuth 令牌未写入磁盘/密钥链，每次新会话都需要通过浏览器重新认证。 | 1 |
| #5207 | **[开启] Windows 沙盒无法访问非系统盘** | 沙盒 shell 命令无法列出/访问非系统盘目录（如 D:\\）。 | 0 |
| #5219 | **[开启] 会话卡死：未知模型 ID 的任务子代理** | 未知模型 ID 的子代理回退到 128k 上下文上限，导致提示词预算错误。 | 0 |
| #5054 | **[开启] 自动压缩持续超时** | 大上下文配合高推理量时，摘要器无法在 300 秒内完成。 | 2 |
| #5197 | **[开启] WSL2 上 1.0.100 版本后语音服务器崩溃** | WSL2 上语音服务器崩溃（信号 11）；`/voice` 卡在"正在获取语音模型"。 | 0 |

---

## 4. 关键 PR 进展

过去 24 小时仅更新了 1 个 PR：

| # | PR | 摘要 |
|---|-----|------|
| #1960 | **[已关闭] install：使用 GITHUB_TOKEN 进行认证请求** | 安装脚本现在在 curl/wget 下载时将 `GITHUB_TOKEN` 作为 `Authorization` 头传递，并在 git 远程 URL 中嵌入，用于 `ls-remote`，避免速率限制并支持私有仓库安装。 |

---

## 5. 功能需求趋势

基于议题分析，需求量最大的功能方向：

| 趋势 | 描述 |
|------|------|
| **增强输入方式** | 已实现 vi/vim 输入模式；持续需求键盘驱动导航 |
| **扩展模型配置** | 支持额外请求参数、启动时明确选择模型、Claude 模型更长的提示词缓存 TTL |
| **语音模式可靠性** | 修复语音目录获取、WSL2 语音服务器崩溃问题 |
| **MCP 集成** | OAuth 令牌持久化、注册表策略处理、自定义工具授权继承 |
| **Windows/沙盒改进** | 非系统盘访问、ACP 模式沙盒强制执行 |
| **会话稳定性** | 防止会话卡死、自动压缩超时、后台子代理超时处理 |

---

## 6. 开发者痛点

开发者社区最常见的挫折：

1. **认证路由错误** — BYOK 自定义提供商在请求到达前返回本地 403 错误 (#4414)
2. **语音模式失败** — 企业 VPN 或 WSL2 环境下无法启用语音模式 (#3636, #5197)
3. **会话管理** — 无法在不取消任务的情况下清除排队的消息 (#2055)；子代理导致会话卡死 (#5219)
4. **Windows 沙盒限制** — 沙盒模式下 shell 命令无法访问非系统盘 (#5207)
5. **MCP OAuth 持久化** — ACP 模式下需要重复浏览器认证 (#5192)
6. **上下文压缩超时** — 大上下文配合高推理量时自动摘要失败 (#5054)
7. **按键绑定不一致** — 混合的 CUA/Emacs 按键绑定导致数据丢失 (#5211)

---

*来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the English community digest into Chinese, following the specific rules provided. Let me go through the content and translate it while maintaining the exact structure and following the guidelines.

Let me translate section by section:

1. Title and intro
2. Today's Highlights  
3. Releases
4. Hot Issues - translate each issue title and key details
5. Key PR Progress - translate PR titles and descriptions
6. Feature Request Trends
7. Developer Pain Points

I need to:
- Keep markdown structure exactly
- Keep URLs, numbers, issue/PR references as-is
- Keep project names, usernames, version tags, etc. in original form
- Use natural technical Chinese register
- Output ONLY the translation, no preamble or explanation

Let me start:</think>

# OpenCode 社区简报 — 2026-10-22

**数据来源：** github.com/anomalyco/opencode

---

## 今日要闻

OpenCode 社区持续推动平台改进，在 V1→V2 迁移问题、Windows 兼容性修复和 UI/UX 增强方面取得显著进展。值得关注的是桌面应用的时间轴动画功能、新版 v2 控制台的持续完善，以及围绕模型可用性和凭证处理的多个用户反馈 bug 修复。

---

## 版本发布

**过去 24 小时内无新版本发布。**

---

## 热门 issue

1. **[OpenCode Go 配额消耗量约为显示的 DeepSeek V4 Flash 成本的 4 倍](https://github.com/anomalyco/opencode/issues/42985)** — *20 条评论，9 个赞*
   用户报告 DeepSeek V4 Flash 的显示成本与实际 Go 配额消耗存在显著差异。此计量问题影响计费透明度和用户信任。

2. **[新版 v2 控制台中无法获取 Go API 密钥](https://github.com/anomalyco/opencode/issues/52227)** — *14 条评论，4 个赞*
   订阅用户在新版控制台设计中找不到或无法复制 Go API 密钥，导致外部工具集成受阻。**状态：已关闭**

3. **[GitHub Copilot Free/学生计划不显示任何模型](https://github.comanomalyco/opencode/issues/34644)** — *12 条评论，24 个赞*
   完成 OAuth 认证后，Copilot Free/学生账户看不到任何可用模型，尽管他们拥有有效的订阅。社区关注度最高，获 24 个赞。

4. **[OpenCode CLI v2.0.8 缺少消息时间戳选项](https://github.com/anomalyco/opencode/issues/49742)** — *9 条评论，4 个赞*
   v1 中广受欢迎的 Ctrl+P 时间戳切换功能在 v2 中缺失，影响了高级用户的工作流可见性。

5. **[V1→V2 迁移静默丢弃缺少必需字段的旧消息](https://github.com/anomalyco/opencode/issues/53971)** — *5 条评论*
   迁移过程会丢弃缺少 agent/model/parentID 字段的消息，导致旧会话显示为空。用户报告有 64 个会话受到影响。

6. **[v1 max_tokens 选项导致严格端点拒绝所有请求](https://github.com/anomalyco/opencode/issues/55726)** — *5 条评论*
   #54694 的回归问题同时发送 `max_tokens` 和 `max_completion_tokens`，导致 OpenAI 兼容端点返回"不允许额外输入"错误。

7. **[未使用 Bedrock/Vertex 时服务器仍读取 ~/.aws 和 gcloud 凭证](https://github.com/anomalyco/opencode/issues/56200)** — *3 条评论*
   启动时不必要的凭证文件访问引发隐私和性能问题，即使用户未配置这些 providers。

8. **[Windows: GET /api/skill 在配置了 skill roots 后返回空数组](https://github.com/anomalyco/opencode/issues/57524)** — *3 条评论*
   Windows 特定 bug 完全破坏了 skill 加载；相同配置在 macOS 上正常工作。

9. **[core: github-copilot 在仅自动账户上显示零模型](https://github.com/anomalyco/opencode/issues/57955)** — *2 条评论*
   为每个模型返回 `model_picker_enabled: false` 导致仅自动 Copilot 计划用户完全无法访问模型。

10. **[过期的免费模型 (GLM) 破坏客户端目录并阻止其他活跃免费模型](https://github.com/anomalyco/opencode/issues/57931)** — *2 条评论*
    免费模型过期时，整个目录同步失败而非优雅跳过，导致有效的替代模型（如 Mimo）也无法使用。

---

## 重要 PR 进展

1. **[feat(app): 会话运行时像 iOS 一样动画化时间轴](https://github.com/anomalyco/opencode/pull/57224)** — *贡献者*
   主要 UI 增强：活跃会话期间的时间轴平滑动画，流式文本无跳跃感。

2. **[feat(core): 监视侧边栏中打开的文件](https://github.com/anomalyco/opencode/pull/57915)** — *jlongster*
   实时文件监视替代侧边栏文件的轮询机制——显著的性能提升。

3. **[fix(gui-extensions): 使 Knobs 面板更清晰](https://github.com/anomalyco/opencode/pull/57921)** — *贡献者*
   Knobs 面板重新设计，层级更清晰：全局设置固定在分区标签页上方。

4. **[fix(app): 将侧边标签页拖放指示器保持在标签条内](https://github.com/anomalyco/opencode/pull/57972)** — *jlongster*
   修复侧边栏标签条滚动或超出面板宽度时的拖放 UI bug。

5. **[docs: 说明 OTLP 日志和追踪导出配置](https://github.com/anomalyco/opencode/pull/56515)** — *rudycelekli*
   新增文档涵盖 OTLP/HTTP 端点、收集器 header 以及 CLI/服务器环境差异。

6. **[docs: 说明自动压缩输入限制和预留规则](https://github.com/anomalyco/opencode/pull/56509)** — *rudycelekli*
   文档说明输入限制优先级、默认预留行为及每字段模型覆盖。

7. **[fix(ui): 为重命名的 Kimi coding providers 保留图标](https://github.com/anomalyco/opencode/pull/56506)** — *rudycelekli*
   修复 #50597：使用正确的 SVG 资源和图标类型注册重命名后的 providers。

8. **[fix(ai): 为 Gemini 工具媒体附加文本锚点](https://github.com/anomalyco/opencode/pull/56484)** — *rudycelekli*
   为 OpenAI 兼容后端的前缀合成工具媒体延续添加文本前缀。

9. **[fix(ai): 分类网关配置的输入限制溢出](https://github.com/anomalyco/opencode/pull/56454)** — *rudycelekli*
   修复 #56296：将 Go 网关的输入限制错误识别为上下文溢出。

10. **[chore(ci): 隔离始终失败的 e2e 测试并快速失败](https://github.com/anomalyco/pull/57951)** — *贡献者*
    将持续失败的 e2e 测试从 beta 流水线中移除；避免在已知失败的测试上浪费 CI 时间。

---

## 功能需求趋势

根据 issue 态势，主要需求方向包括：

- **模型可用性与提供商访问**：多个 issue（#34644、#57955）凸显了更好的分层 Copilot 计划和仅自动账户处理需求。
- **迁移可靠性**：V1→V2 迁移问题（#53971、#50551、#53450）表明需要更强大的迁移机制和清晰的错误报告。
- **Windows 对等性**：端口冲突（#55918）、凭证读取（#56200）和 skill API（#57524）相关问题表明需要 Windows 特定改进。
- **UI/UX 优化**：时间轴动画、Knobs 面板重新设计和会话标签页栏插件显示了桌面体验精细化的需求。
- **MCP 增强**：工具搜索优化（#49645）和 MCP 服务器禁用开关（#56452）反映了不断增长的 MCP 生态需求。

---

## 开发者痛点

1. **配置热重载**：添加到 provider 配置中的模型不会在服务重启前生效（#56902）——这是迭代配置时的摩擦点。

2. **网络依赖的后台任务**：网络接口变化时子任务静默取消（#57538），没有恢复机制。

3. **启动性能**：TUI 启动可能在插件加载时卡顿约 6 分钟（#56885），尤其阻塞外部插件用户。

4. **凭证访问范围**：服务器不必要地读取 AWS/gcloud 凭证（#56200），同时引发隐私和启动时间担忧。

5. **控制台窗口干扰**：Windows 用户看到每个子进程都弹出控制台窗口（#57907），干扰工作流。

6. **焦点管理**：终端切换快捷键和重命名对话框的焦点行为（#57536、#52767）让期待标准 UX 的桌面用户感到沮丧。

---

*简报结束。数据来源于 2026-10-22 的 GitHub。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Simplified Chinese, following the detailed translation rules provided. Let me go through it carefully:

1. Keep all Markdown structure exactly
2. Use natural technical Chinese
3. Keep all technical identifiers, URLs, issue numbers as-is
4. Maintain the same tone and format

Let me translate section by section:

## Today's Highlights

v1.4.0 发布了，引入了**图像输入支持用于分类器模型** — `codemode models.classify()` 现在支持 TypeSafe、Cloudflare Workers AI 和 OpenRouter 提供商接收图像输入。本次发布周期还修复了大量 bug，涵盖 Windows 兼容性、剪贴板处理和工具配置问题，共修复了 5 个 P0 bug，并合并了 Scaleway 提供商。

Wait, I need to be more careful about the translation. Let me redo this properly:

## Today's Highlights

v1.4.0 发布了，引入了**图像输入支持用于分类器模型** — `codemode models.classify()` 现已支持 TypeSafe 的 Jev 模型和 Cloudflare 的 Clef 模型接收图像输入，可通过 `typesafe`、`cloudflare-workers-ai` 和 OpenRouter 提供商使用。这使得 Pi 会话中的多模态分类工作流成为可能。

## Releases

### v1.4.0
**分类器图像输入** — `codemode models.classify()` API 现已支持将 `images` 作为 TypeSafe 的 Jev 模型和 Cloudflare 的 Clef 模型的输入，实现 Pi 会话中的多模态分类工作流。

## Hot Issues

表格中的内容需要翻译，但保持技术术语...

## Key PR Progress

表格翻译...

## Hot Discussions

## Feature Request Trends

## Developer Pain Points

Let me do a proper translation now:</think>

# Pi 社区摘要 — 2026-10-22

## 今日要闻

v1.4.0 发布了，引入了**分类器模型的图像输入支持** — `codemode models.classify()` 现已支持 TypeSafe 的 Jev 模型和 Cloudflare 的 Clef 模型接收图像输入，可通过 `typesafe`、`cloudflare-workers-ai` 和 OpenRouter 提供商使用。本发布周期还修复了大量 bug，涵盖 Windows 兼容性、剪贴板处理和工具配置问题，共修复 5 个 P0 bug，并合并了 Scaleway 提供商。

---

## 版本发布

### v1.4.0
**分类器图像输入** — `codemode models.classify()` API 现已支持将 `images` 作为 TypeSafe 的 Jev 模型和 Cloudflare 的 Clef 模型的输入，实现 Pi 会话内的多模态分类工作流。

---

## 热门 Issue

| # | Issue | 为何重要 | 社区反馈 |
|---|-------|----------|----------|
| **#6300** | **[bug] Windows: 每次按键都重绘输入行** | 严重影响 Windows 上的 TUI 可用性 — 每个字符都显示在新行上，导致 Windows 10/11（cmd.exe 和 Windows Terminal 中）输入基本不可用。 | 20 条评论，正在积极调查中 |
| **#7553** | **[inprogress] 压缩的可配置思考层级/模型** | 压缩目前复用会话的思考层级，无法将推理预算与摘要分离。在推理模型上运行自动压缩的用户无法控制摘要质量。 | 11 条评论，3 👍 — 进行中 |
| **#10019** | **Anthropic 订阅请求在 UTC 00:30 时挂起** | 使用 Anthropic 订阅时会话显示旋转指示器后冻结；需要手动取消并重启。在 Claude Code 中未出现此问题。 | 10 条评论，2 👍 |
| **#10976** | **PowerShell 工具回退到 Windows PowerShell 5.1** | 当通过 Microsoft Store 安装 pwsh 7 时，工具因路径解析问题错误地运行 PS 5.1。 | 10 条评论，1 👍 |
| **#9656** | **[bug] Windows + Zellij 全屏模式下鼠标滚轮滚动提示历史** | 全屏模式下鼠标滚轮在 Zellij 下运行时滚动的是编辑器历史而非对话内容。在 Linux+tmux 上或不使用多路复用器时正常工作。 | 9 条评论，4 👍 |
| **#10956** | **cacheWarming "idle" 在上下文包含 custom/compaction 消息时停止** | 如果对话上下文包含 custom 或 compaction 消息，空闲缓存预热永远不会触发 — 507+ 缓存预热决策均为 100% 延续概率，从未达到 0.15。 | 8 条评论，1 👍 |
| **#8913** | **全屏渲染器无条件启用鼠标追踪** | 全屏模式下无法禁用 1003 任意事件鼠标追踪；这对不希望发送终端鼠标事件的用户存在隐私问题。 | 7 条评论 |
| **#6165** | **添加 Scaleway Generative APIs LLM 提供商** | 请求添加 Scaleway 作为零数据保留的欧盟托管提供商，支持 Open Weight 模型。 | 7 条评论，2 👍 — **已在 #11181 合并** |
| **#10949** | **openai-responses: 遗留的 reasoning.delta 事件被丢弃** | 来自 OpenAI 兼容端点的 reasoning 未被流式传输，因为 `response.reasoning.delta` 事件被丢弃。 | 6 条评论 |
| **#11203** | **[bug] 内置 grep 继承 RIPGREP_CONFIG_PATH 尽管 literal: false** | 当 RIPGREP_CONFIG_PATH 包含 `--fixed-strings` 时，grep 工具静默忽略正则匹配，导致搜索结果不完整。 | 5 条评论 — **已在 #11230 修复** |

---

## 关键 PR 进展

| # | PR | 描述 | 状态 |
|---|----|------|------|
| **#11181** | **feat(ai,coding-agent): 添加 Scaleway 提供商** | 将 Scaleway Generative APIs 添加为内置的 OpenAI 兼容提供商，支持 SCW_SECRET_KEY 认证。 | ✅ 已关闭 |
| **#11233** | **fix(coding-agent): 恢复时遗漏截断工具调用的工具结果** | 修复 #11227 — 恢复现在正确地与截断的工具调用一起移除工具结果。 | ✅ 已关闭 |
| **#11230** | **fix(coding-agent): grep 工具通过 --no-config 忽略 ripgrep 配置** | 修复 #11203 — 向 rg 传递 `--no-config` 以忽略继承的 RIPGREP_CONFIG_PATH。 | ✅ 已关闭 |
| **#11213** | **feat(ai,coding-agent,durable): pi-durable 中的提供商归属头** | 使用与编码代理相同的头表向 pi-durable 添加提供商归属头。 | ✅ 已关闭 |
| **#11212** | **fix(tui): 在单段 fd 查询中转义正则元字符** | 修复 #10972 — 在 `@` 自动完成查询中转义 `[`、`]` 和 `(`，使括号文件名按字面匹配。 | ✅ 已关闭 |
| **#11005** | **fix(ai): 在未映射的 Gemini 4 模型上避免 thinkingBudget 和 MINIMAL** | 修复 #10890 的紧急 P0 — 防止在未映射的 Gemini 4 模型上出现 HTTP 400 错误。 | ✅ 已关闭 |
| **#9993** | **feat(ai,coding-agent): 在 Google Vertex AI 提供商中添加 Anthropic Claude 支持** | 通过 Google Cloud Vertex AI Model Garden 启用 Claude Opus、Sonnet 和 Haiku 访问。 | ✅ 已关闭 |
| **#11231** | **[pkg:coding-agent] docs(quickstart): 添加 Windows 安装程序标签页** | 在快速入门文档中添加 `install.ps1` 标签页， macOS/Linux curl 安装程序并列。 | ✅ 开放中 |
| **#8635** | **fix(ai): 在懒加载设置期间保留中止的 stop reason** | 修复 #8409 — 将请求中止信号通过懒加载流设置传递，并将设置失败报告为中止。 | ✅ 开放中 |
| **#7441** | **fix(ai): 容忍非空 openai-completions 中缺少 finish_reason** | 处理网关省略终端 finish_reason 块的情况，防止会话崩溃。 | ✅ 已关闭 |

---

## 热门讨论

| # | 讨论 | 类别 | 摘要 |
|---|------|------|------|
| **#2483** | **awto-pi-lot: 按量付费，无账户模式** | 展示 | 添加 PPQ.ai 提供商的扩展，使用 AutoClaw 模型；提供按量付费定价，无需账户要求。 | 5 条评论，3 👍
| **#11214** | **在 Atomic Bot 上运行 Pi，24/7 云端运行** | 展示 | Atomic Bot 将 Pi 作为云服务启动 — 一键专用实例，24/7 运行，不依赖本地机器。 | 1 👍
| **#11196** | **pi-tidy: 工具调用折叠成单行** | 展示 | 扩展将回复的多个工具调用折叠成一行可折叠内容（例如 `▾ 12 calls · bash×8 read×4`）。 | 1 👍

---

## 功能需求趋势

1. **增强的模型控制** — 多个请求涉及压缩的可配置思考层级 (#7553)、模型特定设置和按提供商配置
2. **Windows 兼容性** — TUI 输入修复 (#6300)、PowerShell 检测 (#10976)、鼠标处理 (#9656) 和剪贴板改进仍是反复出现的主题
3. **提供商扩展** — 持续对新提供商感兴趣（已合并 Scaleway，已添加 Vertex AI Claude 支持）
4. **缓存预热改进** — 对空闲缓存预热行为的更好控制 (#10956, #10536)
5. **持久执行** — 对非执行调用的 `afterTool` 和轮次限制的请求 (#11043)，扩展的工具包装 (#11218)

---

## 开发者痛点

- **Windows 终端兼容性** — 输入渲染、鼠标事件和 PowerShell 检测持续造成摩擦，尽管已有多次修复
- **配置继承** — 工具静默继承环境变量（RIPGREP_CONFIG_PATH）导致意外行为
- **模型思考预算** — 围绕压缩的思考层级处理、Gemini 4 模型和跨模型会话的困惑
- **缓存预热边缘情况** — 空闲预热在 custom 消息、虚拟模型或特定上下文状态下不可预测地停止
- **恢复边缘情况** — 截断的工具调用、预提示恢复和会话恢复偶尔导致状态不一致 (#11227, #11062, #11075)

---

*来源：github.com/earendil-works/pi — 2026-10-22*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this GitHub digest into Chinese (Simplified Chinese, based on the context). Let me translate the content while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences around the whole output
2. Preserve the Markdown structure exactly
3. Keep URLs, numbers, dates, code, identifiers as-is
4. Use natural technical Chinese register

Let me translate this carefully, maintaining all the formatting and technical accuracy.</think>

# Qwen Code 社区日报 — 2026-10-22

## 今日要闻

Qwen Code 团队发布了 **v0.26.0** 桌面应用和 TypeScript SDK（v0.1.22），新增了会话级别的 Skill 和 Extension 刷新功能。关键的安全与性能问题仍在处理中：P1 级漏洞允许通过 grep/glob 泄露被拒绝访问的文件，VS Code 守护进程存在无限制的堆内存增长。社区正积极提交功能请求，主要围绕托管代理与旧版守护进程的功能对等以及改进的会话生命周期管理。

---

## 版本发布

| 版本 | 说明 |
|---------|-------------|
| **v0.26.0** | 主版本。通过守护进程添加了会话级别的 Skill 和 Extension 刷新功能（PR #14050）。无破坏性变更。 |
| **desktop-v0.26.0** | Qwen Code 桌面应用。包含与主版本相同的守护进程改进。 |
| **sdk-typescript-v0.1.22** | TypeScript SDK，捆绑 CLI 0.26.0。 |
| **cua-driver-rs-v0.26.0** | CUA Driver 预构建二进制（macOS 已签名/公证，Linux glibc 2.31+，Windows UIAccess）。 |
| **v0.25.3-nightly.20261021.79242671bb** | 最新每日构建。 |

---

## 热点 Issue

**1. [P1 安全漏洞] permissions.deny Read() 阻止了 read_file 但 grep/glob 仍返回内容**  
#15129 | 3 条评论  
一个关键漏洞：`permissions.deny Read(./secret.env)` 阻止了 `read_file` 但 `grep_search` 和 `glob` 仍然暴露文件名和内容。这与文档描述相矛盾，存在信息泄露风险。  
🔗 https://github.com/QwenLM/qwen-code/issues/15129

**2. [P1] web-shell E2E Smoke 测试在 #15061 之后确定性失败**  
#15135 | 3 条评论  
`managed-ssh-workspace-registration.spec.ts:130` 测试在每个到达 `full` 阶段的 PR 上都失败，原因是文本不匹配（"Managed" 标签现在包含 " · Managed"）。受影响的 PR 都没有改动这个 spec。  
🔗 https://github.com/QwenLM/qwen-code/issues/15135

**3. [P1] VS Code 守护进程 OOM：堆内存无限制增长，约 4GB 时崩溃**  
#15071 | 3 条评论  
`qwen serve` 守护进程的 JavaScript 堆在正常 VS Code 伴侣使用过程中无限增长，直到达到约 4GB 运行时限制并崩溃，显示 "JavaScript heap out of memory"。  
🔗 https://github.com/QwenLM/qwen-code/issues/15071

**4. [P2] XML 工具调用恢复在带引号的工具标记时会丢失外层调用**  
#13492 | 13 条评论  
恢复机制在包含带引号的工具标记时错误地丢弃外层工具调用。PR #13515 部分修复了此问题；剩余的外层调用恢复在 PR #13579 中跟踪。  
🔗 https://github.com/QwenLM/qwen-code/issues/13492

**5. [P3] XML 恢复在大量多调用响应时性能下降**  
#13787 | 9 条评论  
XML 工具调用恢复在存在大量有效调用时变得越来越慢。使用有界直接解析器的复现确认了当前主分支上的性能成本。  
🔗 https://github.com/QwenLM/qwen-code/issues/13787

**6. [P2] 改进 edit 工具**  
#14979 | 4 条评论  
请求将 `dsh-better-edit` 的想法移植过来以替换当前的 read/edit 工作流。用户报告 edit 工具经常在精确的 old_text 匹配时失败。  
🔗 https://github.com/QwenLM/qwen-code/issues/14979

**7. [P2] 在托管代理工作区会话中添加 web_fetch 和 todo_write**  
#15076 | 4 条评论  
这两个工具存在于共享核心中，但在托管代理工作区会话中不可用。请求暴露它们。  
🔗 https://github.com/QwenLM/qwen-code/issues/15076

**8. [P2] 用户提示在后台子代理的 AsyncLocalStorage 上下文中执行**  
#15083 | 4 条评论  
当用户在后台子代理运行时提交提示，它会在子代理的上下文中执行，导致延迟的工具调用拒绝。  
🔗 https://github.com/QwenLM/qwen-code/issues/15083

**9. [P2] 托管代理：添加手动上下文压缩操作**  
#15080 | 2 条评论  
请求在托管代理会话中添加用户可控的手动上下文压缩功能。目前只有自动压缩存在。  
🔗 https://github.com/QwenLM/qwen-code/issues/15080

**10. [P2] 托管代理：在运行时管理 MCP 服务器，无需重建会话**  
#15079 | 2 条评论  
请求在运行时添加、移除、启用、禁用、重启和重新加载 MCP 服务器，无需重建会话。目前 MCP 表面在会话创建时已固定。  
🔗 https://github.com/QwenLM/qwen-code/issues/15079

---

## 关键 PR 进展

| PR | 说明 |
|----|-------------|
| **#15136** | [chore] 发布 v0.26.0 — 同步 package.json 和 CHANGELOG.md |
| **#15137** | [chore] 发布 sdk-typescript v0.1.22 |
| **#13902** | feat: 项目代理身份和代理团队通过 ACP/守护进程网络传输。向子代理帧添加 `_meta.agent` 字段以支持父→子委托。 |
| **#14928** | feat(managed-agent): 添加实验性 `qwen serve --managed --open`，用于本地托管应用程序，支持按需下载服务器 |
| **#15094** | fix(managed): 对齐检查点预算并显示恢复阻塞 |
| **#14033** | fix(core): 将代理工作区锁重试预算从 10 次扩展到 30 次（约 5 秒最坏情况），与代理面板锁一致 |
| **#13571** | feat(memory): 在无操作运行后通过 `QWEN_CODE_MEMORY_EXTRACT_NOOP_SKIP_TURNS` 添加可选的提取频率 |
| **#14677** | fix(core): 将重新分配的 HOME 视为动态以处理 cd 和 ~ 目标，修复了在错误目录中进行认证的问题 |
| **#14670** | fix(core): 在 bash 分隔符而非 JavaScript 空白符上分割 shell 命令（正确处理 Unicode） |
| **#11807** | fix(cli): 在守护进程信任和伴侣设置读取器中去除 UTF-8 BOM 以防止安全误读 |

🔗 所有 PR：https://github.com/QwenLM/qwen-code/pulls

---

## 功能请求趋势

从 Issue 和 PR 中总结出以下主题：

1. **托管代理功能对等** — 多个请求用于缩小 Java 托管代理与旧版 `qwen serve` 守护进程之间的差距：功能矩阵（#15075）、运行时 MCP 服务器管理（#15079）、手动上下文压缩（#15080）、归档会话列表（#15077）、公共 Shell 会话的生命周期操作（#15078）、文件系统/进程隔离（#15081）、容量/空闲回收模型（#15082）。

2. **增强的文件操作** — 改进 edit 工具的可靠性（#14979），在工作区会话中添加 web_fetch/todo_write（#15076）。

3. **性能优化** — 减少重复的旧版目录输入（#15027），修复 XML 恢复前缀扫描性能（#13787）。

4. **安全加固** — 修复 permissions.deny 文件泄露（#15129），确保托管工作区中的文件隔离（#15081）。

---

## 开发者痛点

- **内存泄漏**：VS Code 伴侣守护进程在约 4GB 时 OOM，阻塞生产使用（#15071）。
- **安全漏洞**：尽管拒绝了 Read 权限，被拒绝的文件仍可通过 grep/glob 访问（#15129）。
- **测试不稳定**：web-shell E2E Smoke 由于标签变更在所有 PR 上确定性失败（#15135）。
- **Edit 工具脆弱性**：精确的 old_text 匹配导致代理频繁失败（#14979）。
- **XML 恢复性能**：在大量多调用响应时显著变慢（#13787）。
- **AsyncLocalStorage 上下文串扰**：后台子代理运行时的用户提示在错误上下文中执行（#15083）。

---

*数据来源：github.com/QwenLM/qwen-code*

---

规则：
- 仅输出翻译内容。不添加前言、说明或整个输出的 markdown 标记。
- 完全保留 Markdown 结构：标题、表格（包括列对齐行）、列表、块引用、粗体/斜体、水平线。
- 保持 URL、链接目标、代码片段、代码块、数字和日期不变。
- 保持项目名称、仓库 slug、用户名、版本标签、文件路径和 API/配置标识符的原样——不翻译它们。
- Issue/PR 引用如 #12345 及其链接文本保持原样。
- 使用自然的技术中文，是中文开发者技术通讯的语体风格——而非逐字直译。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*