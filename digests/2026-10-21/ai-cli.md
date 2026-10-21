# AI CLI 工具社区动态日报 2026-10-21

> 生成时间: 2026-10-21 00:50 UTC | 覆盖工具: 7 个

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

<think>The user wants me to translate the cross-tool comparison report from English to Chinese. I need to:
1. Translate all the content
2. Keep all Markdown structure exactly the same
3. Keep URLs, project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
4. Use natural technical Chinese (the register of a Chinese developer newsletter)
5. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate this carefully while preserving the exact structure:

- Keep the heading hierarchy
- Keep the table structure exactly (including the alignment row)
- Keep lists, blockquotes, bold/italic formatting
- Keep horizontal rules
- Keep emoji
- Keep all code spans, code blocks, numbers, dates
- Keep issue/PR references like #12345
- Translate the content naturally into technical Chinese

Let me go through it section by section:

标题：跨工具对比报告：AI CLI 工具生态系统

日期：2026-10-21

1. 生态系统概述
...

Let me do the full translation now.</think>

# 跨工具对比报告：AI CLI 工具生态系统

**日期：** 2026-10-21

---

## 1. 生态系统概述

AI CLI 工具领域呈现出主要 AI 实验室和开源社区之间的激烈竞争。今日动态显示七款工具均在积极维护中，**Gemini CLI** 和 **Qwen Code** 发布频率最高（各 3 个版本），而 **Claude Code** 通过 GitHub Issues 保持着最高的社区参与度。一个明确的趋势浮现：厂商们正在优先推进**企业级可扩展性**（Mods、插件、OAuth）、**平台特定加固**（沙盒、跨平台兼容性）以及**开发者体验优化**（会话管理、成本透明度）。封闭式商业产品（OpenAI Codex、Claude Code）与社区驱动项目（Pi、Qwen Code、OpenCode）在功能成熟度和问题响应速度上仍然存在明显差距。

---

## 2. 活动对比

| 工具 | 发布数（24h） | Issues 活跃度 | PR 合并/开启 | Discussions | 备注 |
|------|---------------|---------------|--------------|-------------|------|
| **Claude Code** | 1 | 高（热门 issue 100+ 👍） | 活跃 | N/A | Issues 驱动社区；参与度高 |
| **OpenAI Codex** | 2 | 活跃（热门 issue 31 条评论） | 多项已关闭 | 活跃 | 同时使用 Issues 和 Discussions |
| **Gemini CLI** | 3 | 活跃 | 10 PRs | N/A | 快速迭代；PR 驱动开发 |
| **GitHub Copilot CLI** | 2 | 中等 | 24h 内无 | N/A | 近 期活动较少 |
| **OpenCode** | 0 | 活跃 | 10 PRs | N/A | PR 驱动；稳定维护 |
| **Pi** | 0 | 活跃 | 10 PRs | 2 热门 | 双轨：Issues + Discussions |
| **Qwen Code** | 3 | 活跃 | 10 PRs | N/A | 高速度；快速发布 |

*注：N/A 表示该工具主要使用 Issues（或 PRs）而非 Discussions 作为社区渠道。*

---

## 3. 共同的功能方向

| 功能方向 | 相关工具 | 具体需求 |
|----------|----------|----------|
| **增强可扩展性** | Claude Code、Qwen Code、GitHub Copilot CLI | Mods/插件运行时、自定义子代理钩子、技能发现 |
| **OAuth/MCP 认证** | Claude Code、Codex、Gemini CLI、Copilot CLI | 刷新令牌可靠性、IdP 兼容性、企业 SSO |
| **远程/守护进程执行** | Gemini CLI、Qwen Code、Claude Code | 远程控制、守护进程会话持久化、跨机器状态 |
| **成本/使用透明度** | Codex、Pi、Claude Code | 精确 token 计数、供应商特定定价、预算可见性 |
| **平台沙盒化** | Claude Code、Gemini CLI、Copilot CLI | Linux 用户命名空间、macOS/Windows 沙盒、代理处理 |
| **无障碍访问** | Gemini CLI、OpenCode | 屏幕阅读器 TUI、ARIA 标签、键盘导航 |
| **企业配置** | Pi、Copilot CLI | MDM/系统级配置、集中化设置优先级 |

---

## 4. 差异化分析

| 工具 | 主要定位 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 开发者生产力、可扩展的 AI 编码 | 专业开发者 | Mods 可扩展性、沙盒优先安全 |
| **OpenAI Codex** | GitHub 集成、IDE 优先工作流 | GitHub 用户、Pro 订阅者 | Rust 构建、GitHub 原生、轻量 |
| **Gemini CLI** | CLI 原生体验、多模态 | CLI 爱好者、研究人员 | 频繁发布、实验性功能 |
| **Copilot CLI** | 企业、组织控制 | GitHub Teams/Enterprise | CLI 与 IDE 对齐、审批工作流 |
| **OpenCode** | 开源替代品、隐私优先 | 隐私敏感开发者 | 本地优先、支持自托管 |
| **Pi** | 灵活的供应商支持、成本优化 | 多云用户、成本敏感用户 | 供应商无关、使用量追踪 |
| **Qwen Code** | 中国市场、本地模型 | Qwen 用户、亚洲开发者 | 阿里生态系统、托管代理 |

---

## 5. 社区活力与成熟度

**高速度 / 成熟：**

- **Gemini CLI** — 24h 内 3 个发布 + 10 PRs；激进的迭代周期；强大的上游依赖管理（npm、Rust）
- **Qwen Code** — 3 个发布；活跃的托管代理开发；积极的 CI 基础设施投入
- **Claude Code** — 成熟的社区，issue 响应达 100+；完善的 issue 分类；稳定的发布节奏

**稳健 / 中等：**

- **OpenCode** — 持续的 PR 流；无障碍改进进行中；安全补丁及时
- **Pi** — Issues + Discussions 均衡参与；供应商扩展活跃（已添加 Scaleway）
- **OpenAI Codex** — 中等活动；Alpha 后聚焦 bug 修复

**较慢 / 受限：**

- **GitHub Copilot CLI** — 24h 内无 PR；存在一些回归报告（手动审批、MCP OAuth）

---

## 6. 趋势信号

1. **可扩展性之争**：Claude Code 的 Mods（#91870，267 条评论）标志着市场正朝着插件式定制化方向发展。Qwen Code 和 Copilot CLI 正在通过类似提案跟进。

2. **企业就绪**：多个工具（Pi、Copilot CLI）正在投资 MDM/系统级配置和 OAuth 可靠性——这表明正在向组织部署方向转型。

3. **成本透明度紧迫**：Codex、Pi 和 Claude Code 的用户都在要求准确的价格数据——供应商正在响应提供供应商特定的成本明细（Pi 的 `totalFromProvider`、Codeus 使用量追踪）。

4. **跨平台之痛**：Windows 和 Linux 沙盒限制正在造成摩擦——这正成为解决得好的工具的竞争优势。

5. **性能即特性**：TTFT 回归（Gemini CLI、Qwen Code）和流式优化（Pi 的 O(n²) 修复）表明性能现在是 CLI 工具的主要评估标准。

6. **无障碍走向主流**：Gemini CLI 和 OpenCode 都在优先推进屏幕阅读器支持——这表明包容性设计正成为主流期望。

> **参考价值**：对于评估 AI CLI 工具的开发者来说，**OAuth 可靠性**、**沙盒配置灵活性**和**成本可见性**的组合代表了当前的前沿差距。解决这些问题的工具将赢得企业用户。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the Claude Code Skills Community Highlights Report into Simplified Chinese. I need to:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, code, numbers, issue/PR references as-is
4. Use natural technical Chinese register

Let me translate this carefully while preserving all formatting:

## 1. Top Skills Ranking
This should become "热门技能排名" or similar

## 2. Community Demand Trends
This should become "社区需求趋势"

## 3. High-Potential Pending Skills
This should become "高潜力待合并技能"

## 4. Skills Ecosystem Insight
This should become "技能生态系统洞察"

Let me translate the entire report now, making sure to:
- Use Chinese punctuation (，。：；"" etc.)
- Keep all URLs and code references
- Maintain table structure
- Use natural technical Chinese</think>

# Claude Code Skills 社区亮点报告

## 1. 热门技能排名

Pull Request 数据显示所有条目的评论数均为 undefined，但根据内容深度和近期活动情况，以下是值得关注的提交：

| # | PR 标题 | 功能 | 状态 |
|---|----------|----------------|--------|
| **#1742** | fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | 更新 MCP 构建器以适配 Model Context Protocol v2.0 — 处理重命名的 `streamable_http_client` 模块并支持通过 `create_mcp_http_client` 配置自定义 HTTP 头 | [Open](https://github.com/anthropics/skills/pull/1742) |
| **#1298** | fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | 提升技能评估可靠性 — 修复因 worker 命令探测导致的误报、Windows `select()` 管道失败问题，并防止无关工具中断扫描 | [Open](https://github.com/anthropics/skills/pull/1298) |
| **#1245** | Add notion-spec-to-implementation and quantitative-resume-auditor | 将产品/技术规格转换为可执行的 Notion 任务计划；添加定量分析型简历审核技能 | [Open](https://github.com/anthropics/skills/pull/1245) |
| **#1771** | feat(skills): add proofcore-contract-auditor | 提供 Solidity/Rust 智能合约的自动化静态分析，支持通过零存储 Merkle 协议进行 TON 区块链存证 | [Open](https://github.com/anthropics/skills/pull/1771) |
| **#1961** | skill-creator: harden eval viewer (script breakout, DNS rebinding, cross-site POST, escaping) | 安全加固 — 修复 eval 查看器中的脚本逃逸、DNS 重绑定、跨站 POST 和转义漏洞 | [Open](https://github.com/anthropics/skills/pull/1961) |
| **#1703** | Add md2video-audio skill | 零成本技能，将 Markdown 编译为 MP4 视频，配合 Marp 生成逼真人声旁白 | [Open](https://github.com/anthropics/skills/pull/1703) |

---

## 2. 社区需求趋势

分析高评论 Issue 可揭示集中需求：

| Issue | 主题 | 评论数 | 关键洞察 |
|-------|-------|----------|--------------|
| **#492** | 安全：anthropic/ 命名空间下的社区技能 | **46** | **关键信任问题** — 社区技能冒充官方名义置于 `anthropic/` 命名空间下，可借此实施权限滥用 |
| **#228** | 在 Claude.ai 中启用组织级技能共享 | **16** | 企业工作流缺口 — 需要共享技能库而非手动分发文件 |
| **#556** | run_eval.py: claude -p 永不触发技能（触发率 0%） | **13** | **评估基础设施缺陷** — 阻塞技能验证流程 |
| **#1329** | 提议 compact-memory 技能 | **9** | 需求：使用符号表示法减少 Agent 上下文开销 |
| **#1385** | 推理质量门禁流水线 | **6** | 多阶段质量保证：校准 → 对抗审查 → 交付验证 |
| **#412** | 技能提议：agent-governance | **6** | 治理模式：策略执行、威胁检测、信任评分、审计追踪 |

**新兴主题：**

- 🔐 **安全与信任** — 命名空间完整性、eval 查看器 XSS、安全渲染
- 🏢 **企业/团队协作** — 组织级共享、技能治理
- 📊 **评估与质量** — 触发可靠性、基准一致性、推理质量门禁
- 🧠 **Agent 效率** — 紧凑内存、上下文优化

---

## 3. 高潜力待合并技能

以下活跃 PR 显示了有意义的开发势头，可能即将合并：

| PR | 技能/功能 | 就绪指标 |
|----|---------------|---------------------|
| [#1961](https://github.com/anthropics/skills/pull/1961) | Eval 查看器安全加固 | 安全导向，针对具体漏洞修复 |
| [#1997](https://github.com/anthropics/skills/pull/1997) | 正确解析 YAML frontmatter 标量 | 近期（2026年10月10日），针对 skill-creator 核心解析 |
| [#1977](https://github.com/anthropics/skills/pull/1977) | algorithmic-art wrapAround() 修复 | 针对具体缺陷 #1897 |
| [#1976](https://github.com/anthropics/skills/pull/1976) | webapp-testing textarea/select 报告 | 针对缺陷 #1891 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx: LibreOffice 超时处理 | 输入验证改进 |

---

## 4. 技能生态系统洞察

> **社区最集中的需求集中在健壮的安全加固（命名空间信任边界、eval 查看器 XSS、安全渲染）以及企业级协作功能（组织级共享、技能治理），两者都受制于阻碍可靠技能测试的基础设施缺陷。**

---

*报告数据来源：截至 2026 年 10 月 21 日的 GitHub 数据。*

---

<think>The user wants me to translate the Claude Code Community Digest from English to Chinese (Simplified Chinese). I need to:

1. Translate all the content to Chinese
2. Keep all the formatting (headings, tables, lists, etc.)
3. Keep URLs, issue numbers, code, version numbers as-is
4. Use natural technical Chinese - like a Chinese developer newsletter

Let me translate this carefully, maintaining the structure and using appropriate technical Chinese terminology.

Key terms to translate:
- Community digest -> 社区摘要
- Releases -> 版本更新
- Hot Issues -> 热门议题
- Feature Request Trends -> 功能需求趋势
- Developer Pain Points -> 开发者痛点
- Enhancement -> 增强功能
- Bug -> 问题
- Feature -> 功能请求
- PR -> PR / 拉取请求
- issue -> 工单
- sandbox -> 沙箱
- user namespaces -> 用户命名空间
- OAuth -> OAuth (keep as is)
- IdP -> 身份提供商
- seccomp -> seccomp (keep)
- sidebars -> 侧边栏
- workflow -> 工作流

Let me translate section by section:</think>

# Claude Code 社区摘要 — 2026-10-21

## 今日要闻

社区正在热烈讨论扩展性和开发者控制：**Mods** 功能（#91870）持续引发广泛关注，评论数已达 267 条，表明大家对深度定制有强烈需求。同时，一个严重问题（#87647）报告称自 2026 年 3 月以来，超过 6000 个标记了"有复现步骤"的工单被自动关闭，引发了对工单管理的担忧。最新版本 v2.1.305 为 Linux 沙箱增加了嵌套用户命名空间支持，提升了 Chromium 和无根 Podman 的兼容性。

---

## 版本更新

**v2.1.305** — 发布于 2026-10-21

- **`sandbox.allowNestedUserNamespaces`**：新增沙箱配置，允许 Linux 沙箱化的命令创建用户命名空间，使 Chromium、无根 Podman 等工具在需要时能够绕过文件保护。
- **`CLAUDE_CODE_RETRY_WATCHDOG_USAGE_LIMIT_RECHECK_MS`**：新增环境变量，用于无人值守重试模式，让用户能够控制使用限制的重新检查频率。

[版本详情 →](https://github.com/anthropics/claude-code/releases/tag/v2.1.305)

---

## 热门议题

| # | 议题 | 概要 | 点赞 |
|---|-------|---------|-----------|
| #91870 | **[增强功能] Mods — 让 Claude 可扩展性提升 10 倍** | 社区驱动的 Claude Code 扩展框架。根据反馈持续迭代中。 | 👍 131 |
| #87647 | **[问题] 自 2026 年 3 月起，超 6k 个标记"有复现"的工单被自动关闭** | 在未经解决的情况下大批量自动关闭已提供复现步骤的工单。100+ 开发者支持重新开启。 | 👍 105 |
| #76110 | **[问题] Ctrl+click 在 xfce4-terminal 上打开 2 个重复浏览器标签页（Linux）** | 仅影响 Claude Code 渲染的 URL，纯终端 URL 无此问题。 | 👍 7 |
| #42765 | **[问题] OAuth redirect_uri 使用 localhost 而非 127.0.0.1，违反 RFC 8252** | 影响 MCP OAuth 流程的安全/合规问题。 | 👍 37 |
| #68262 | **[功能请求] Claude.ai 项目中的子文件夹 / 嵌套组织** | 呼吁在侧边栏中实现层级式项目组织。 | 👍 32 |
| #76272 | **[功能请求] 让用户控制每周限额重置时间** | 可配置的_reset 日期或按需额度（如 Codex）。 | 👍 34 |
| #102116 | **[问题] 桌面端：归档会话无法在侧边栏中显示了** | 回归问题：筛选按钮不再显示归档会话；需点击"查看全部"。 | 👍 11 |
| #74682 | **[功能请求] 定时任务 / Routine Run 会话自动归档（自动关闭标签页）** | 运行 18+ 个日常任务的用户希望自动清理标签页。 | 👍 2 |
| #94710 | **[问题] 无法在用户级别禁用"本次会话 Claude 表现如何？"调查** | macOS 桌面端调查无禁用开关；跨会话持续弹出。 | 👍 9 |
| #91641 | **[问题] OAuth refresh token 与使用一次性刷新令牌轮换的 IdP 不兼容** | 远程 MCP OAuth 与轮换刷新令牌的 OIDC 提供商对接失败。 | 👍 2 |

---

## PR 进展

| # | PR | 概要 |
|---|-----|---------|
| #99141 | **diff: pane nothing can draw yet is kept, shows once something can** | 打开时内容尚未就绪的 diff 面板现在能正确渲染。 |
| #99540 | **sec-default: organization's ceiling on a tool holds over plugins** | 策略 mod 现已正确将组织的工具审批上限应用于用户安装的插件。 |
| *(过去 24 小时其他 PR)* | 活动有限；主要聚焦于工单分类和 Mods 开发。 |

---

## 功能需求趋势

1. **扩展性与定制化** — Mods、插件和钩子，实现对 Claude 行为的深度控制
2. **项目组织** — 嵌套文件夹、会话组和更强大的侧边栏管理
3. **平台特定体验** — 桌面端改进（归档会话、调查控制、项目整理）
4. **成本 / 用量控制** — 灵活的限额重置时间、更清晰的使用量追踪
5. **国际化** — 呼声较高的俄语界面语言支持
6. **工作流自动化** — Routine Run 自动归档、后台会话处理

---

## 开发者痛点

1. **工单管理挫败感** — 大批量自动关闭已确认可复现的 bug（#87647）令提交复现步骤的贡献者感到沮丧
2. **OAuth 与认证问题** — localhost 与 127.0.0.1 的反复问题（#42765）、刷新令牌轮换（#91641）、可信设备要求（#103864）
3. **CLI 稳定性** — Linux 无头环境 CLI 卡顿（#90800）、VTE 终端的选中即复制失效（#80184）
4. **桌面端回归** — 归档会话可见性（#102116）、Windows 路径长度限制（#91935）
5. **沙箱限制** — Stock Ubuntu 上的插件 eval 失败（#99269）源于 seccomp 限制
6. **云端与本地不一致** — 云端 Routine 与本地会话的技能加载差异（#103851）

---

*本摘要基于 2026-10-21 的 GitHub 数据生成。所有议题和 PR 链接指向 anthropics/claude-code。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the OpenAI Codex Community Digest into Chinese (Simplified Chinese based on the context). Let me translate this following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, code, project names, etc. verbatim
4. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

**Title and Date:**
# OpenAI Codex 社区动态
**日期：** 2026-10-21

**Section 1: Today's Highlights**
Two new Rust alpha releases... → 两个新的 Rust alpha 版本发布（v0.164.0-alpha.7 和 v0.164.0-alpha.8），同时 Rust 工具链升级至 1.99.1。社区正在积极报告 macOS 更新失败（HTTP 520）、Windows 文件处理问题和云任务同步问题。值得一提的是，企业级 MCP 认证获得了显著改进，OAuth 刷新协调现在默认启用。

**Section 2: Releases**
Keep the table, translate the summary

**Section 3: Hot Issues**
Translate the table content naturally

**Section 4: Key PR Progress**
Translate descriptions, keep PR numbers and status

**Section 5: Hot Discussions**
Translate titles and content, keep emojis

**Section 6: Feature Request Trends**
Translate, keep evidence

**Section 7: Developer Pain Points**
Translate, keep numbers

**Footer:**
Keep as-is

Let me do this carefully:</think>

# OpenAI Codex 社区动态
**日期：** 2026-10-21

---

## 1. 今日要闻

两个新的 Rust alpha 版本（v0.164.0-alpha.7 和 v0.164.0-alpha.8）正式发布，同时 Rust 工具链已升级至 1.99.1。社区正在积极反馈 macOS 更新失败（HTTP 520）、Windows 文件处理故障以及云任务同步异常等问题。另一方面，企业级 MCP 认证获得了重要改进，OAuth 刷新协调功能现已默认启用。

---

## 2. 发布动态

| 版本 | 更新内容 |
|------|----------|
| **rust-v0.164.0-alpha.8** | 最新 alpha 版本 |
| **rust-v0.164.0-alpha.7** | 前一个 alpha 版本 |

---

## 3. 热门 Issue

| # | Issue | 评论数 | 为何重要 |
|---|-------|--------|----------|
| **#53891** | **[macOS] 更新检查失败，appcast 端点返回 HTTP 520** | 31 | macOS 27.2 版 Pro 用户无法更新 Codex；更新机制完全失效 |
| **#51675** | **重启后云任务从侧边栏消失** | 26 | macOS Desktop 端数据持久化失败；用户丢失任务历史 |
| **#49453** | **显式允许后浏览器访问仍被阻止** | 25 | Windows 11 浏览器使用权限被阻止 |
| **#51790** | **send_message_to_thread 失败，提示 "'sendRequest.bind' is not a function"** | 23 | 工具调用 API 损坏，无法通过程序发送线程消息 |
| **#34306** | **"无法显示此内容" - 网络安全请求被阻止** | 23 | CLI 安全检查过于激进；合法的安全工作无法进行 |
| **#31878** | **ChatGPT Projects 在网页可见但桌面侧边栏缺失** | 20 | 合并后集成失败；用户失去项目组织功能 |
| **#39054** | **MCP OAuth 刷新令牌被拒绝后无限重试** | 18 | 认证循环阻止重新认证；影响 MCP 工具使用 |
| **#48449** | **Browser Use 标签页关闭时应用反复崩溃** | 16 | Windows Desktop 不稳定；密码提示反复弹出 |
| **#34953** | **Windows Git LFS 临时副本在仓库刷新时泄漏** | 15 | Windows 磁盘空间耗尽；性能下降 |
| **#52042** | **文件无法处理 - MXC 启动器失败** | 14 | Windows 文件处理工具完全失效；Excel 任务受阻 |

---

## 4. 关键 PR 进展

| PR | 状态 | 描述 |
|----|------|------|
| **#55705** | 已关闭 | 将云技能缓存状态集中到目录锁下 |
| **#55701** | 已关闭 | **默认启用 MCP OAuth 刷新协调** — 重大认证改进 |
| **#55698** | 已关闭 | 为企业 MCP 认证复用 Codex 账户授权 |
| **#55696** | 已关闭 | 在运行时刷新期间保留企业 MCP 授权 |
| **#55677** | 已关闭 | **将 Rust 工具链升级至 1.99.1** — 包含 API/lint 适配 |
| **#55691** | 已关闭 | 优化企业 MCP 认证错误和权限检查 |
| **#55667** | 已关闭 | 为远程策划的 Agent 插件启用应用路由 |
| **#55657** | 已关闭 | 为代理间消息添加生命周期钩子 |
| **#55653** | 已关闭 | 追踪 code-mode 单元格生命周期和结果缓冲时间 |
| **#55652** | 已关闭 | 并发搜索压缩版本（批处理优化 4 倍）|

---

## 5. 热门讨论

### 💡 创意想法
- **#14595** — "远程控制什么时候来？" — 用户请求类似 Claude Code 的 WSL Codex 远程控制功能（9 条评论，18 👍）
- **#51263** — 为 Codex 推出 35 美元的开发者套餐，Plus 使用量翻倍 — 中间档订阅需求（1 条评论，3 👍）

### 🛠️ 展示与分享
- **#55086** — KiraBridge + ThreadDesk：连接七个工具，实现可控制的语音 vibe 编程（4 条评论）
- **#54349** — Logo to Stickers：从品牌角色到纸质故事的 Codex 技能（1 条评论）
- **##55643** — Kingdoms：与 Codex 对话的战略原型（0 条评论）
- **#55637** — Koto：实验性的本地优先模型选择（0 条评论）
- **#55552** — Pitchcraft：从代码仓库生成产品推介（0 条评论）
- **#55539** — Cove：原生 Mac 作曲器和差异查看器（0 条评论）

### ❓ 问答
- **#24258** — Codex 应用配合 Chrome 技能如何选择 Chrome 配置？（2 条评论）
- **#55553** — 远程执行预检 EACCES 于可执行文件链接（0 条评论）

### ⚠️ 常规 / 求助
- **#8503** — 尽管 Code Review 显示剩余 100%，却提示"已达使用限额" — GitHub Connector 限额显示混乱（30 条评论，13 👍）

---

## 6. 功能需求趋势

| 趋势 | 依据 |
|------|------|
| **改进远程控制** | 多条请求希望实现类似 Claude Code 的远程执行功能 |
| **Plus/Pro 之间增加订阅档位** | 35 美元开发者套餐，提升使用量上限 |
| **更完善的 Chrome 配置管理** | 用户需要确定性的配置文件选择功能 |
| **增强 MCP 认证** | 企业级 OAuth 改进正在推进 |
| **本地模型选择** | Koto 项目探索本地与云端模型的选择 |

---

## 7. 开发者痛点

1. **macOS 更新机制失效** — Pro 用户被困在旧版本（HTTP 520）
2. **Windows 文件处理故障** — 部分用户核心功能无法使用
3. **云同步不一致** — 任务重启后消失，削弱信任感
4. **安全检查过于激进** — 合法的网络安全工作被阻止
5. **OAuth/令牌刷新循环** — MCP 认证卡住，从不提示重新认证
6. **Windows 资源泄漏** — Git LFS 临时文件累积，导致崩溃
7. **使用限额显示混乱** — GitHub Connector 报告与实际使用不符

---

*数据来源：github.com/openai/codex | 数据更新：2026-10-21*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the Gemini CLI Community Digest into Chinese (Simplified Chinese - zh-CN), following the detailed translation rules provided. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly: headings, tables, lists, blockquotes, bold/italic, horizontal rules, emoji
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 and their link text stay as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate the content:

**Title:** 
# Gemini CLI 社区周报

**Date:** 
**日期：** 2026年10月21日

**Section 1: Today's Highlights**
过去24小时内，Gemini CLI 团队发布了三个新版本：**v0.65.0**、**v0.66.0-preview.0** 和 **v0.66.0-nightly.20261020**。v0.65.0 的关键安全修复是在不受信任的文件夹中强制实施只读工作区设置，解决了潜在的沙箱逃逸问题。终端体验也得到了改善，修复了视口刷新时滚动条内容丢失的问题，并改进了 HTTP 分块的解码。IDE 伴侣与容器沙箱的集成工作正在推进，多个 PR 已合并以处理 gVisor 网络隔离场景。

**Section 2: Releases**
表格翻译...

Let me carefully translate each section maintaining the exact structure.</think>

# Gemini CLI 社区周报

**日期：** 2026-10-21

---

## 一、本日要闻

过去 24 小时内，Gemini CLI 团队连发三版：**v0.65.0**、**v0.66.0-preview.0** 和 **v0.66.0-nightly.20261020**。其中 v0.65.0 的关键安全修复是在不受信任的文件夹中强制实施只读工作区设置，堵住了一个潜在的沙箱逃逸漏洞。终端体验方面也传来好消息——修复了视口刷新时滚动条内容丢失的问题，改进了 Node HTTP 活动分块的 StringDecoder 解码。IDE 伴侣与容器沙箱的集成工作正在推进，多个 PR 已合并用于处理 gVisor 网络隔离场景。

---

## 二、新版本发布

| 版本 | 日期 | 关键变更 |
|------|------|----------|
| **v0.66.0-preview.0** | 2026-10-20 | v0.65.0 更新日志；路线图已更新，移除了 2025 年相关描述 |
| **v0.66.0-nightly.20261020** | 2026-10-20 | UI 修复：视口刷新时保留终端滚动条内容（#29792）；CLI 修复：使用 StringDecoder 解码流式 Node HTTP 活动分块 |
| **v0.65.0** | 2026-10-20 | 安全修复：在不受信任的文件夹中强制只读工作区设置（#29583）；核心修复：恢复会话时避免重复工具响应轮次 |

**GitHub 发布链接：** [v0.65.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.65.0) · [v0.66.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-preview.0) · [v0.66.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.66.0-nightly.20261020.g76e4d7c04)

---

## 三、热门 Issue

### 引起广泛关注的优先级 Issue

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — 子代理在达到 MAX_TURNS 后报告为 GOAL success *(13 条评论，P1)*
   - **问题所在：** `codebase_investigator` 子代理在达到最大轮次限制时错误地报告成功，掩盖了实际被中断的事实。这会让用户误以为任务已完成。
   - **社区反馈：** 2 👍；已标记需重新测试。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 零依赖 OS 沙箱与执行后意图路由 *(9 条评论，P2)*
   - **问题所在：** 提议利用模型原生的 bash 亲和性实现零依赖 OS 沙箱，可在不增加依赖的情况下显著提升安全性。
   - **社区反馈：** 1 👍；标记为大型工作量增强。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — 通用代理挂起 *(8 条评论，P1，8 👍)*
   - **问题所在：** Gemini CLI 将任务委托给通用代理时会无限挂起——即使执行文件夹创建这类简单操作也不例外。这是用户的头号阻塞问题。
   - **社区反馈：** 关注度很高（8 👍）；需重新测试。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知文件读取、搜索和映射的影响 *(7 条评论，P2)*
   - **问题所在：** 追踪调查 AST 感知工具的集成，实现精确的方法边界检测，减少 token 浪费和错位读取。
   - **社区反馈：** 1 👍；涉及多个相关 Issue。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 太少使用 skills 和子代理 *(7 条评论，P2)*
   - **问题所在：** Gemini CLI 很少自主调用自定义 skills 和子代理，即使任务明显在它们的处理范围内。用户每次都必须明确指示。
   - **社区反馈：** 用户反馈普遍表示沮丧；需进一步调查。

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — 浏览器代理忽略 settings.json 覆盖配置 *(4 条评论，P2)*
   - **问题所在：** 浏览器子代理完全忽略 `settings.json` 中的配置覆盖，包括 `maxTurns`。用户无法自定义浏览器代理行为。

7. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — 增强浏览器代理韧性：自动接管会话与锁恢复 *(4 条评论，P3)*
   - **问题所在：** 浏览器代理在遇到已锁定的配置文件时快速失败，缺乏优雅的恢复机制。持久化会话模式需要更稳健的策略。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — 浏览器子代理在 Wayland 上失败 *(4 条评论，P1)*
   - **问题所在：** 浏览器代理在 Wayland 显示服务器上失败，影响 Linux 桌面环境的可用性。
   - **社区反馈：** 1 👍；需重新测试。

9. **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)** — 任务跟踪器的原生文件工具 *(4 条评论，P3)*
   - **问题所在：** 提议用持久化的基于文件的 CRUD 操作替代上下文内的任务跟踪，减少上下文膨胀和 token 消耗。

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** — 无法识别符号链接的代理文件 *(4 条评论，P2)*
    - **问题所在：** 用户无法在 `~/.gemini/agents/` 中使用符号链接引用代理定义，降低了代理管理的灵活性。

---

## 四、关键 PR 进展

### 值得关注或正在审查的 Pull Request

| PR | 状态 | 领域 | 描述 |
|----|------|------|------|
| **[#29858](https://github.com/google-gemini/gemini-cli/pull/29858)** | 开放 | 扩展 | **feat(cli)：** 通过 exec stdio 将 IDE 伴侣桥接到容器沙箱中——在 Gemini CLI 运行于 Docker/Podman/gVisor 内部时启用 IDE 集成 |
| **[#29597](https://github.com/google-gemini/gemini-cli/pull/29597)** | 已关闭 | 扩展 | **fix(companion)：** gVisor/runsc 沙箱的 IPC socket 后备方案 |
| **[#29665](https://github.com/google-gemini/gemini-cli/pull/29665)** | 已关闭 | 扩展 | **fix(ide)：** 显式提示 gVisor 沙箱网络隔离错误 |
| **[#29748](https://github.com/google-gemini/gemini-cli/pull/29748)** | 已关闭 | 文档 | 说明 IDE 集成在容器沙箱中不可用 |
| **[#29849](https://github.com/google-gemini/gemini-cli/pull/29849)** | 开放 | 核心 | **fix(cli)：** 处理终止信号，防止非交互模式下取消后的工具执行 |
| **[#29833](https://github.com/google-gemini/gemini-cli/pull/29833)** | 开放 | 安全 | **fix(core)：** 限制 untrusted 标志检查范围至外部输出并记住已批准的标志——减少重复确认提示 |
| **[#29744](https://github.com/google-gemini/gemini-cli/pull/29744)** | 开放 | IDE | **fix(core)：** 让 `/ide enable` 在 IDE 服务器重启后重连 |
| **[#29847](https://github.com/google-gemini/gemini-cli/pull/29847)** | 开放 | 核心 | **fix(core)：** 当工作区是主目录（`~`）时防止重复加载代理 |
| **[#29848](https://github.com/google-gemini/gemini-cli/pull/29848)** | 开放 | IDE | **fix(ide)：** 从打开文件上下文中排除 IDE 设置和 GEMINI.md 文件 |
| **[#29844](https://github.com/google-gemini/gemini-cli/pull/29844)** | 已关闭 | 核心 | **fix(core)：** 支持 MCP OAuth 流程的私有网络端点可选加入 |

---

## 五、热门讨论

*源数据中未提供讨论信息。*

---

## 六、功能需求趋势

从 Issue 主题汇总来看，最受关注的功能方向如下：

1. **AST 感知的代码库智能** — 多个 Issue（#22745、#22746、#22747）请求集成 AST 感知 CLI 工具，实现精确的文件读取、方法边界检测和代码库映射，以减少 token 膨胀。

2. **增强的子代理自主性** — 强烈需求（#21968、#20195）希望 Gemini 能够自主调用 skills 和子代理，无需用户明确提示，尤其是 gradle、git 和领域特定任务。

3. **更稳健的浏览器代理** — 会话锁恢复（#22232）、Wayland 支持（#21983）和设置覆盖支持（#22267）的请求表明浏览器代理的稳健性是重点关注方向。

4. **持久化任务跟踪** — Issue #18836 提议用基于文件的 CRUD 跟踪替换上下文内的待办列表，消除会话之间的上下文衰减。

5. **终端性能** — Issue #21924 请求通过 RenderStatic 迁移实现无闪烁的终端调整响应高性能。

---

## 七、开发者痛点

从各 Issue 中反复出现的挫败感：

- **代理挂起** — 通用代理在移交时挂起（#21409）是头号阻塞问题；用户报告简单操作也要等待数小时。
- **子代理行为不可靠** — 子代理恢复时报告虚假成功（#22323）、错误报告中缺乏上下文（#21763）、无法发现符号链接代理（#20079）令高级用户头疼。
- **浏览器代理局限** — Wayland 失败（#21983）、被忽略的设置（#22267）、缺乏会话恢复（#22232）影响了自动化工作流。
- **Token 膨胀** — 模型在随机位置创建临时脚本（#23571）和"洪流式"推送大文件（#19561），导致 token 消耗过度。
- **安全 UX 摩擦** — 不受信任文件夹中 shell 命令的重复确认提示（#29583 修复进行中）和沙箱隔离错误提示不佳（#29665 修复进行中）表明安全与可用性之间存在持续摩擦。

---

*本期周报结束*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI Community Digest into Chinese (Simplified). Let me carefully translate while preserving:
- All Markdown structure (headings, tables, lists, blockquotes, etc.)
- URLs, link targets
- Code/tech terms, issue numbers, version tags
- Project names and identifiers
- The natural technical Chinese register

Let me go through this carefully:

1. Title and date
2. Highlights section
3. Releases section
4. Hot Issues table
5. Key PR Progress
6. Hot Discussions
7. Feature Request Trends
8. Developer Pain Points
9. Footer

I'll maintain all the markdown formatting, tables, links, and technical terms as-is while translating the prose into natural technical Chinese.</think>

# GitHub Copilot CLI 社区动态
**日期：** 2026年10月21日

---

## 1. 今日要闻

GitHub 发布了 **v1.0.101** 版本，带来重大工作流增强功能，包括为动态工作流子代理提供原生结构化输出，以及新增 `assistedApprovalInstructions` 设置用于指导权限决策。随后发布的补丁 **v1.0.101-1** 改进了会话恢复速度和 MCP 服务器启动时间。社区正在积极反馈与权限相关的回归问题，特别是 macOS 沙箱和目录创建模式方面。

---

## 2. 版本更新

### v1.0.101
- 为支持的模型提供**原生结构化输出**，用于动态工作流子代理
- 新增 **assistedApprovalInstructions** 设置，用于引导 Assisted Permissions 确认决策
- 先创建再进入目录的 shell 命令现请求路径审批，而非提前拒绝

### v1.0.101-1
- 恢复会话时，不再等待占位符环境设置，而是更快显示对话内容
- 启动带沙箱的 MCP 服务器的会话现避免不必要的重启，响应更迅速
- `/config` 和 `/settings` 现可设置和取消设置 `showReasoning`

---

## 3. 热门议题

| # | 议题 | 摘要 | 评论 |
|---|-----|-----|-----|
| 1 | **[#5105](https://github.com/github/copilot-cli/issues/5105)** - macOS 沙箱阻止 Gradle 守护进程 | Gradle 无法在 macOS 沙箱内连接其守护进程，即使允许本地联网也不行，导致离线 Gradle 任务被阻塞。 | 6 |
| 2 | **[#2955](https://github.com/github/copilot-cli/issues/2955)** - /allow-all 不抑制 bash 提示 | 运行 `/allow-all` 后，CLI 仍对每个 bash/shell 工具调用显示权限对话框。 | 3 |
| 3 | **[#4488](https://github.com/github/copilot-cli/issues/4488)** - 插件更新失败，提示访问被拒绝 | 多个 Copilot CLI 或 VS Code 会话打开时，文件锁导致插件更新失败。 | 3 |
| 4 | **[#4695](https://github.com/github/copilot-cli/issues/4695)** - MCP OAuth 令牌未可靠复用 | 使用 OAuth 的 HTTP MCP 服务器生成重复的缓存键，强制重复认证。 | 3 |
| 5 | **[#4065](https://github.com/github/copilot-cli/issues/4065)** - 泄露防护过于激进 | 内容过滤错误阻止包含 "Bearer ${env.AUTH_TOKEN}" 模式的合法配置文件。 | 2 |
| 6 | **[#2560](https://github.com/github/copilot-cli/issues/2560)** - BYOM 支持 gemini 提供商 | 功能请求：添加 `COPILOT_PROVIDER_TYPE=gemini` 支持，用于自建模型（BYOM）功能。 | 2 |
| 7 | **[#5124](https://github.com/github/copilot-cli/issues/5124)** - --agent 选择在启动约1秒后被丢弃 | 通过 `--agent` 指定的自定义代理因竞态条件在启动约1秒后被静默取消选择。 | 2 |
| 8 | **[#4203](https://github.com/github/copilot-cli/issues/4203)** - MCP OAuth 强制交互式重新认证 | 过期访问令牌强制交互式登录，而非使用缓存的刷新令牌进行静默重新认证。 | 2 |
| 9 | **[#5177](https://github.com/github/copilot-cli/issues/5177)** - Git 命令的手动审批回归 | 回归问题：手动审批在测试套件迁移后不再提示仓库变更的 Git 命令。 | 2 |
| 10 | **[#5199](https://github.com/github/copilot-cli/issues/5199)** - Linux 沙箱 egress 代理忽略 NO_PROXY | Linux 沙箱 egress 代理在链向企业上游代理时忽略 `NO_PROXY`。 | 1 |

---

## 4. 关键 PR 进展

过去 24 小时内没有 PR 更新。

---

## 5. 热门讨论

未提供讨论数据。

---

## 6. 功能请求趋势

根据议题活动统计，功能请求最多的方向为：

| 类别 | 请求 |
|------|------|
| **模型/提供商支持** | BYOM 支持 Gemini 提供商 (#2560) |
| **UI/UX 改进** | 默认展开时间线 (#2959)，/statusline 添加令牌计数选项 (#5211)，可配置按键绑定 (#5211) |
| **发布通道** | 稳定版发布通道请求 (#5203) |
| **MCP 增强** | OAuth 令牌跨会话持久化 (#5192, #4695)，显式模型选择持久化 (#5213) |
| **/ask 增强** | /ask 响应后续追问 (#5215) |

---

## 7. 开发者痛点

社区正在经历以下持续性困扰：

1. **权限系统混乱** - 多个议题（#2955、#5173、#5177）反馈权限提示出现时机不正确或应该出现时未出现，特别是在运行 `/allow-all` 后或目录操作期间。

2. **macOS 沙箱限制** - macOS 沙箱持续导致常见开发者工具（如 Gradle，#5105）出现问题，阻塞本地开发工作流。

3. **MCP OAuth 可靠性** - 令牌缓存问题（#4695、#4203、#5192）导致重复认证提示，破坏工作流连续性。

4. **Windows 平台缺口** - 非系统驱动器访问（#5207）、数字小键盘导航（#5171）及 Windows 沙箱整体行为存在问题。

5. **Linux 沙箱稳定性** - 命令约10秒后被终止（#5176）、NO_PROXY 处理问题（#5199）影响企业代理环境下的 Linux 用户。

6. **插件管理** - 文件锁问题（#4488）在多个 IDE 会话打开时阻止更新。

7. **会话恢复不稳定** - 代理选择竞态（#5124）、恢复会话中的权限拒绝（#5206）和上下文滚动失败（#5205）表明会话管理存在不稳定性。

---

*数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this OpenCode community digest from English to Chinese. I need to:
1. Translate all the text content while keeping the structure
2. Keep technical terms, URLs, code references, issue numbers as-is
3. Use natural technical Chinese (the register of a Chinese developer newsletter)
4. Output ONLY the translation, no preamble, no markdown fences

Let me translate section by section:

## Today's Highlights -> 今日要点
The OpenCode community continues active development across multiple fronts. Security takes priority with a fix for compromised eMudhra CA roots in the CLI. Several high-impact bugs surfaced: service port conflicts on relaunch, ESC interrupt failures in V2, and significant TTFT regressions on Go models. Accessibility improvements are gaining traction, with both TUI and web UI receiving fixes for screen reader compatibility.

-> OpenCode 社区在多个方向保持活跃开发。安全方面优先处理了 CLI 中受信任的 eMudhra CA 根证书问题。高影响力 bug 集中出现：服务端口冲突导致重启动失败、V2 中 ESC 中断失效、Go 模型 TTFT 严重退化。TUI 和 Web UI 的无障碍改进也在推进中，修复了屏幕阅读器兼容性问题。

---

## Releases -> 发布

No new releases in the last 24 hours.

-> 过去 24 小时无新版本发布。

---

## Hot Issues -> 热门问题

1. **[#41969](https://github.com/anomalyco/opencode/issues/41969)** — **FEATURE: Publish exact model versions/checkpoints for Go plan models**
   - *Why it matters:* Users want transparency on which model checkpoint (e.g., deepseek-v4-flash 0731) serves their requests. 12 👍 and 15 comments indicate strong demand for model version documentation on the official site.
   - *Status:* OPEN

-> 1. **[#41969](https://github.com/anomalyco/opencode/issues/41969)** — **功能：公布 Go 订阅计划的具体模型版本/checkpoint**
   - *重要性：* 用户希望了解具体是哪个模型 checkpoint（如 deepseek-v4-flash 0731）在提供服务。12 个赞和 15 条评论表明官方文档对模型版本的说明存在强烈需求。
   - *状态：* 待处理

2. **[#54267](https://github.com/anomalyco/opencode/issues/54267)** — **service: relaunch fails with "Managed service port already in use"**
   - *Why it matters:* Relaunching OpenCode fails when the previous background service hasn't exited, blocking workflow continuity. 13 comments suggest this is a common pain point.
   - *Status:* OPEN | Reproduced

-> 2. **[#54267](https://github.com/anomalyco/opencode/issues/54267)** — **服务：重启失败，提示"托管服务端口已被占用"**
   - *重要性：* 前一个后台服务未退出时无法重启 OpenCode，破坏工作流连续性。13 条评论表明这是常见的痛点。
   - *状态：* 待处理 | 已复现

3. **[#42960](https://github.com/anomalyco/opencode/issues/42960)** — **[2.0] esc interrupt broken**
   - *Why it matters:* ESC key fails to properly interrupt running tasks in V2, leaving background processes orphaned. This undermines the core editing experience.
   - *Status:* OPEN

-> 3. **[#42960](https://github.com/anomalyco/opencode/issues/42960)** — **[2.0] ESC 中断失效**
   - *重要性：* ESC 键无法正确中断 V2 中运行的任务，导致后台进程失控。这破坏了核心编辑体验。
   - *状态：* 待处理

4. **[#39368](https://github.com/anomalyco/opencode/issues/39368)** — **Accessibility: add screen-reader-friendly TUI mode**
   - *Why it matters:* Screen reader users (NVDA) cannot use the TUI effectively. This is a critical accessibility gap. 9 comments show community engagement.
   - *Status:* OPEN

-> 4. **[#39368](https://github.com/anomalyco/opencode/issues/39368)** — **无障碍：添加屏幕阅读器友好的 TUI 模式**
   - *重要性：* 屏幕阅读器用户（NVDA）无法正常使用 TUI。这是关键的无障碍缺陷。9 条评论显示社区关注度。
   - *状态：* 待处理

5. **[#57199](https://github.com/anomalyco/opencode/issues/57199)** — **provider: cacheFormat "anthropic" puts cache_control inside tool message content**
   - *Why it matters:* With openai-compatible providers pointing to Anthropic-backed gateways, cache_control markers are placed incorrectly, breaking caching entirely after tool results.
   - *Status:* OPEN

-> 5. **[#57199](https://github.com/anomalyco/opencode/issues/57199)** — **provider: cacheFormat "anthropic" 将 cache_control 放在 tool message 内容内**
   - *重要性：* 使用 openai-compatible 协议指向 Anthropic 后端网关时，cache_control 标记被错误地放在工具消息内容中，导致工具结果返回后缓存完全失效。
   - *状态：* 待处理

6. **[#57491](https://github.com/anomalyco/opencode/issues/57491)** — **web ui: several controls do not expose their state to assistive technology**
   - *Why it matters:* Web UI controls lack accessible names—screen readers announce them with no purpose. Related to the broader accessibility effort in #39368.
   - *Status:* OPEN | Reproduced

-> 6. **[#57491](https://github.com/anomalyco/opencode/issues/57491)** — **Web UI：多个控件未向辅助技术暴露状态**
   - *重要性：* Web UI 控件缺少无障碍名称——屏幕阅读器会读出无意义的内容。与 #39368 的无障碍改进工作相关。
   - *状态：* 待处理 | 已复现

7. **[#57403](https://github.com/anomalyco/opencode/issues/57403)** — **OpenCode go unusable: TTFT extremely long**
   - *Why it matters:* Users report 3.2s+ TTFT with reality being "much worse" (see screenshot: 128 requests over 30 minutes). This severely impacts usability.
   - *Status:* OPEN

-> 7. **[#57403](https://github.com/anomalyco/opencode/issues/57403)** — **OpenCode go 不可用：TTFT 极长**
   - *重要性：* 用户报告 TTFT 超过 3.2 秒，实际"更糟"（见截图：30 分钟内 128 次请求）。这严重影响了可用性。
   - *状态：* 待处理

8. **[#57055](https://github.com/anomalyco/opencode/issues/57055)** — **opencode-go: deepseek-v4.1-flash first-token latency scales with context**
   - *Why it matters:* Deepseek-v4.1-flash exhibits 25s+ p90 latency at 657k context, plus empty completions and missing finish_reason—blocking production use cases.
   - *Status:* OPEN

-> 8. **[#57055](https://github.com/anomalyco/opencode/issues/57055)** — **opencode-go: deepseek-v4.1-flash 首个 token 延迟随上下文增长**
   - *重要性：* Deepseek-v4.1-flash 在 657k 上下文下 p90 延迟超过 25 秒，且存在空补全和缺失 finish_reason 的问题，阻塞了生产使用场景。
   - *状态：* 待处理

9. **[#57518](https://github.com/anomalyco/opencode/issues/57518)** — **fs: /cd and file pickers fail on FreeBSD/ZFS — `stat` throws "dev exceeds the safe integer range"**
   - *Why it matters:* OpenCode crashes on FreeBSD/ZFS due to BigInt conversion. Fixed upstream in @effect/platform-node-shared 4.0.5; awaiting integration.
   - *Status:* OPEN | Reproduced

-> 9. **[#57518](https://github.com/anomalyco/opencode/issues/57518)** — **fs: /cd 和文件选择器在 FreeBSD/ZFS 上失败 — `stat` 抛出"dev 超出安全整数范围"**
   - *重要性：* OpenCode 在 FreeBSD/ZFS 上因 BigInt 转换崩溃。上游已在 @effect/platform-node-shared 4.0.5 中修复，等待集成。
   - *状态：* 待处理 | 已复现

10. **[#57495](https://github.com/anomalyco/opencode/issues/57495)** — **provider: slow plugin setup disables all github-copilot models**
    - *Why it matters:* Any plugin taking ~500ms+ during setup causes all github-copilot models to become disabled permanently, even after credentials are confirmed.
    - *Status:* OPEN | Reproduced

-> 10. **[#57495](https://github.com/anomalyco/opencode/issues/57495)** — **provider: 插件初始化过慢导致所有 github-copilot 模型被禁用**
    - *重要性：* 任何插件在初始化时耗时约 500ms 以上都会导致所有 github-copilot 模型被永久禁用，即使凭证已确认也无法恢复。
    - *状态：* 待处理 | 已复现

---

## Key PR Progress -> 重要 PR 进展

1. **[#57574](https://github.com/anomalyco/opencode/pull/57574)** — **fix(cli): distrust the compromised eMudhra CA roots at startup**
   - Security fix: Distrusts eight compromised eMudhra intermediate CA certificates disclosed 2026-10-20.

-> 1. **[#57574](https://github.com/anomalyco/opencode/pull/57574)** — **fix(cli): 启动时不信任受攻击的 eMudhra CA 根证书**
   - 安全修复：不信任 8 个于 2026-10-20 披露的受攻击 eMudhra 中间 CA 证书。

2. **[#57573](https://github.com/anomalyco/opencode/pull/57573)** — **perf(app): render the file tree with @pierre/trees**
   - Performance: Upgrades @pierre/trees from 1.0.0-beta.4 to beta.6, improving Desktop file tree rendering.

-> 2. **[#57573](https://github.com/anomalyco/opencode/pull/57573)** — **perf(app): 使用 @pierre/trees 渲染文件树**
   - 性能优化：将 @pierre/trees 从 1.0.0-beta.4 升级到 beta.6，改善 Desktop 文件树渲染性能。

3. **[#57572](https://github.com/anomalyco/opencode/pull/57572)** — **fix(app): make the turn navigator easier to hit and land on the right turn**
   - UX fix: Addresses experimental turn navigator issues—wrong landing, hard-to-hit targets, incorrect preview text.

-> 3. **[#57572](https://github.com/anomalyco/opencode/pull/57572)** — **fix(app): 优化 turn navigator 的点击和跳转准确性**
   - UX 修复：解决实验性 turn navigator 的问题——跳转位置错误、目标难以点击、预览文本不正确。

4. **[#57569](https://github.com/anomalyco/opencode/pull/57569)** — **fix(app): keep queued messages editable while the server catches up**
   - UX fix: Queued messages now remain editable during server lag; addresses three bugs in the queue's edit flow.

-> 4. **[#57569](https://github.com/anomalyco/opencode/pull/57569)** — **fix(app): 服务器处理期间保持排队消息可编辑**
   - UX 修复：排队消息在服务器延迟期间保持可编辑状态；修复了队列编辑流程中的三个 bug。

5. **[#57570](https://github.com/anomalyco/opencode/pull/57570)** — **fix(app): tighten the composer's resting height**
   - UI polish: Composer rests at 88px instead of 104px; matches iOS app spacing patterns.

-> 5. **[#57570](https://github.com/anomalyco/opencode/pull/57570)** — **fix(app): 收紧 composer 的默认高度**
   - UI 优化：Composer 默认高度从 104px 调整为 88px；符合 iOS 应用的间距规范。

6. **[#57471](https://github.com/anomalyco/opencode/pull/57471)** — **feat(tui): restore animated Go upsell modal on free usage limit**
   - Feature: Reintroduces animated free-tier usage limit dialog with timeline line and prompt recall.

-> 6. **[#57471](https://github.com/anomalyco/opencode/pull/57471)** — **feat(tui): 恢复免费额度用尽时的动画 Go 升级弹窗**
   - 功能：重新引入带时间线提示和对话回顾的免费额度用尽动画弹窗。

7. **[#57500](https://github.com/anomalyco/opencode/pull/57500)** — **feat(app): add detected icons picker in project settings**
   - Feature: Adds GET /api/project/icons endpoint and "Detected icons" row for selecting project icons.

-> 7. **[#57500](https://github.com/anomalyco/opencode/pull/57500)** — **feat(app): 在项目设置中添加检测到的图标选择器**
   - 功能：新增 GET /api/project/icons 端点和"检测到的图标"选择行。

8. **[#56698](https://github.com/anomalyco/opencode/pull/56698)** — **feat(core): discover project icons automatically**
   - Feature: Automatic project icon discovery during Project.resolve and hourly sweep.

-> 8. **[#56698](https://github.com/anomalyco/opencode/pull/56698)** — **feat(core): 自动发现项目图标**
   - 功能：在 Project.resolve 和每小时扫描时自动发现项目图标。

9. **[#57224](https://github.com/anomalyco/opencode/pull/57224)** — **feat(app): animate the timeline like iOS while a session runs**
   - UX: Timeline now animates smoothly during active sessions, preventing jarring jumps from streamed text.

-> 9. **[#57224](https://github.com/anomalyco/opencode/pull/57224)** — **feat(app): 会话运行期间 iOS 风格动画时间线**
   - UX：时间线在活跃会话期间平滑动画，避免流式文本导致的跳跃感。

10. **[#57513](https://github.com/anomalyco/opencode/pull/57513)** — **fix(desktop): keep clipboard permissions for every app window**
    - Fix: Resolves #51748—clipboard permissions now persist across all app windows.

-> 10. **[#57513](https://github.com/anomalyco/opencode/pull/57513)** — **fix(desktop): 为每个应用窗口保留剪贴板权限**
    - 修复：解决 #51748——剪贴板权限现在在所有应用窗口间保持。

---

## Feature Request Trends -> 功能需求趋势

| Theme | Related Issues |
|-------|----------------|
| **Model Transparency** | #41969 (exact model versions/checkpoints) |
| **Configurability** | #55305 (60m TTL configurable), #57230 (openai-compatible injection) |
| **Accessibility** | #39368, #57491 (TUI + web UI screen reader support) |
| **Plugin API** | #57212 (list sessions by parent ID), #57215 (plugin loader warnings) |
| **Performance Regression** | #57055, #57403 (Go model TTFT/latency) |
| **Platform Support** | #57518 (FreeBSD/ZFS stat fix needed) |

-> | 主题 | 相关 Issue |
|-------|----------------|
| **模型透明度** | #41969 (具体模型版本/checkpoint) |
| **可配置性** | #55305 (60m TTL 可配置), #57230 (openai-compatible 注入) |
| **无障碍** | #39368, #57491 (TUI + Web UI 屏幕阅读器支持) |
| **插件 API** | #57212 (按父 ID 列出会话), #57215 (插件加载器警告) |
| **性能退化** | #57055, #57403 (Go 模型 TTFT/延迟) |
| **平台支持** | #57518 (FreeBSD/ZFS stat 修复需求) |

---

## Developer Pain Points -> 开发者痛点

1. **Port Conflicts on Relaunch**: Service port already-in-use errors disrupt developer workflow (#54267)
2. **ESC Interrupt Broken in V2**: Tasks continue running in background after user attempts to stop (#42960)
3. **GitHub Copilot Models Disappear**: Slow plugin setup permanently disables all Copilot models (#57495)
4. **MCP Config Silent Failures**: V2 silently ignores misconfigured MCP servers under `mcp` instead of `mcp.servers` (#56602)
5. **Go Model Performance**: Deepseek-v4.1-flash latency scales poorly with context, making it unusable at scale (#57055, #57403)
6. **FreeBSD Incompatibility**: File operations crash on ZFS due to BigInt overflow (#57518)
7. **Accessibility Gaps**: Both TUI and web UI lack proper screen reader support, blocking power users (#39368, #57491)

-> 1. **重启时端口冲突**：服务端口已被占用的错误扰乱开发者工作流 (#54267)
2. **V2 中 ESC 中断失效**：用户尝试停止后任务仍在后台运行 (#42960)
3. **GitHub Copilot 模型消失**：插件初始化过慢导致所有 Copilot 模型被永久禁用 (#57495)
4. **MCP 配置静默失败**：V2 静默忽略 `mcp` 而非 `mcp.servers` 下的错误配置 (#56602)
5. **Go 模型性能问题**：Deepseek-v4.1-flash 延迟随上下文增长，规模化使用不可行 (#57055, #57403)
6. **FreeBSD 不兼容**：ZFS 文件操作因 BigInt 溢出崩溃 (#57518)
7. **无障碍差距**：TUI 和 Web UI 都缺乏屏幕阅读器支持，阻碍高级用户 (#39368, #57491)

---

*Digest generated from GitHub data — anomalyco/opencode | 2026-10-21*

-> *摘要由 GitHub 数据生成 — anomalyco/opencode | 2026-10-21*</think>

# OpenCode 社区摘要 — 2026-10-21

## 今日要点

OpenCode 社区在多个方向保持活跃开发。安全方面优先处理了 CLI 中受信任的 eMudhra CA 根证书问题。高影响力 bug 集中出现：服务端口冲突导致重启动失败、V2 中 ESC 中断失效、Go 模型 TTFT 严重退化。TUI 和 Web UI 的无障碍改进也在推进中，修复了屏幕阅读器兼容性问题。

---

## 发布

过去 24 小时无新版本发布。

---

## 热门问题

1. **[#41969](https://github.com/anomalyco/opencode/issues/41969)** — **功能：公布 Go 订阅计划的具体模型版本/checkpoint**
   - *重要性：* 用户希望了解具体是哪个模型 checkpoint（如 deepseek-v4-flash 0731）在提供服务。12 个赞和 15 条评论表明官方文档对模型版本的说明存在强烈需求。
   - *状态：* 待处理

2. **[#54267](https://github.com/anomalyco/opencode/issues/54267)** — **服务：重启失败，提示"托管服务端口已被占用"**
   - *重要性：* 前一个后台服务未退出时无法重启 OpenCode，破坏工作流连续性。13 条评论表明这是常见的痛点。
   - *状态：* 待处理 | 已复现

3. **[#42960](https://github.com/anomalyco/opencode/issues/42960)** — **[2.0] ESC 中断失效**
   - *重要性：* ESC 键无法正确中断 V2 中运行的任务，导致后台进程失控。这破坏了核心编辑体验。
   - *状态：* 待处理

4. **[#39368](https://github.com/anomalyco/opencode/issues/39368)** — **无障碍：添加屏幕阅读器友好的 TUI 模式**
   - *重要性：* 屏幕阅读器用户（NVDA）无法正常使用 TUI。这是关键的无障碍缺陷。9 条评论显示社区关注度。
   - *状态：* 待处理

5. **[#57199](https://github.com/anomalyco/opencode/issues/57199)** — **provider: cacheFormat "anthropic" 将 cache_control 放在 tool message 内容内**
   - *重要性：* 使用 openai-compatible 协议指向 Anthropic 后端网关时，cache_control 标记被错误地放在工具消息内容中，导致工具结果返回后缓存完全失效。
   - *状态：* 待处理

6. **[#57491](https://github.com/anomalyco/opencode/issues/57491)** — **Web UI：多个控件未向辅助技术暴露状态**
   - *重要性：* Web UI 控件缺少无障碍名称——屏幕阅读器会读出无意义的内容。与 #39368 的无障碍改进工作相关。
   - *状态：* 待处理 | 已复现

7. **[#57403](https://github.com/anomalyco/opencode/issues/57403)** — **OpenCode go 不可用：TTFT 极长**
   - *重要性：* 用户报告 TTFT 超过 3.2 秒，实际"更糟"（见截图：30 分钟内 128 次请求）。这严重影响了可用性。
   - *状态：* 待处理

8. **[#57055](https://github.com/anomalyco/opencode/issues/57055)** — **opencode-go: deepseek-v4.1-flash 首个 token 延迟随上下文增长**
   - *重要性：* Deepseek-v4.1-flash 在 657k 上下文下 p90 延迟超过 25 秒，且存在空补全和缺失 finish_reason 的问题，阻塞了生产使用场景。
   - *状态：* 待处理

9. **[#57518](https://github.com/anomalyco/opencode/issues/57518)** — **fs: /cd 和文件选择器在 FreeBSD/ZFS 上失败 — `stat` 抛出"dev 超出安全整数范围"**
   - *重要性：* OpenCode 在 FreeBSD/ZFS 上因 BigInt 转换崩溃。上游已在 @effect/platform-node-shared 4.0.5 中修复，等待集成。
   - *状态：* 待处理 | 已复现

10. **[#57495](https://github.com/anomalyco/opencode/issues/57495)** — **provider: 插件初始化过慢导致所有 github-copilot 模型被禁用**
    - *重要性：* 任何插件在初始化时耗时约 500ms 以上都会导致所有 github-copilot 模型被永久禁用，即使凭证已确认也无法恢复。
    - *状态：* 待处理 | 已复现

---

## 重要 PR 进展

1. **[#57574](https://github.com/anomalyco/opencode/pull/57574)** — **fix(cli): 启动时不信任受攻击的 eMudhra CA 根证书**
   - 安全修复：不信任 8 个于 2026-10-20 披露的受攻击 eMudhra 中间 CA 证书。

2. **[#57573](https://github.com/anomalyco/opencode/pull/57573)** — **perf(app): 使用 @pierre/trees 渲染文件树**
   - 性能优化：将 @pierre/trees 从 1.0.0-beta.4 升级到 beta.6，改善 Desktop 文件树渲染性能。

3. **[#57572](https://github.com/anomalyco/opencode/pull/57572)** — **fix(app): 优化 turn navigator 的点击和跳转准确性**
   - UX 修复：解决实验性 turn navigator 的问题——跳转位置错误、目标难以点击、预览文本不正确。

4. **[#57569](https://github.com/anomalyco/opencode/pull/57569)** — **fix(app): 服务器处理期间保持排队消息可编辑**
   - UX 修复：排队消息在服务器延迟期间保持可编辑状态；修复了队列编辑流程中的三个 bug。

5. **[#57570](https://github.com/anomalyco/opencode/pull/57570)** — **fix(app): 收紧 composer 的默认高度**
   - UI 优化：Composer 默认高度从 104px 调整为 88px；符合 iOS 应用的间距规范。

6. **[#57471](https://github.com/anomalyco/opencode/pull/57471)** — **feat(tui): 恢复免费额度用尽时的动画 Go 升级弹窗**
   - 功能：重新引入带时间线提示和对话回顾的免费额度用尽动画弹窗。

7. **[#57500](https://github.com/anomalyco/opencode/pull/57500)** — **feat(app): 在项目设置中添加检测到的图标选择器**
   - 功能：新增 GET /api/project/icons 端点和"检测到的图标"选择行。

8. **[#56698](https://github.com/anomalyco/opencode/pull/56698)** — **feat(core): 自动发现项目图标**
   - 功能：在 Project.resolve 和每小时扫描时自动发现项目图标。

9. **[#57224](https://github.com/anomalyco/opencode/pull/57224)** — **feat(app): 会话运行期间 iOS 风格动画时间线**
   - UX：时间线在活跃会话期间平滑动画，避免流式文本导致的跳跃感。

10. **[#57513](https://github.com/anomalyco/opencode/pull/57513)** — **fix(desktop): 为每个应用窗口保留剪贴板权限**
    - 修复：解决 #51748——剪贴板权限现在在所有应用窗口间保持。

---

## 功能需求趋势

| 主题 | 相关 Issue |
|-------|----------------|
| **模型透明度** | #41969 (具体模型版本/checkpoint) |
| **可配置性** | #55305 (60m TTL 可配置), #57230 (openai-compatible 注入) |
| **无障碍** | #39368, #57491 (TUI + Web UI 屏幕阅读器支持) |
| **插件 API** | #57212 (按父 ID 列出会话), #57215 (插件加载器警告) |
| **性能退化** | #57055, #57403 (Go 模型 TTFT/延迟) |
| **平台支持** | #57518 (FreeBSD/ZFS stat 修复需求) |

---

## 开发者痛点

1. **重启时端口冲突**：服务端口已被占用的错误扰乱开发者工作流 (#54267)
2. **V2 中 ESC 中断失效**：用户尝试停止后任务仍在后台运行 (#42960)
3. **GitHub Copilot 模型消失**：插件初始化过慢导致所有 Copilot 模型被永久禁用 (#57495)
4. **MCP 配置静默失败**：V2 静默忽略 `mcp` 而非 `mcp.servers` 下的错误配置 (#56602)
5. **Go 模型性能问题**：Deepseek-v4.1-flash 延迟随上下文增长，规模化使用不可行 (#57055, #57403)
6. **FreeBSD 不兼容**：ZFS 文件操作因 BigInt 溢出崩溃 (#57518)
7. **无障碍差距**：TUI 和 Web UI 都缺乏屏幕阅读器支持，阻碍高级用户 (#39368, #57491)

---

*摘要由 GitHub 数据生成 — anomalyco/opencode | 2026-10-21*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate the Pi Community Digest into Simplified Chinese. Let me carefully translate the content while following the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, code spans, numbers, dates verbatim
4. Keep project names, usernames, issue/PR references in original form
5. Use natural technical Chinese - like a Chinese developer newsletter

Let me go through the digest:

Title: "Pi Community Digest — 2026-10-21" → "Pi 社区摘要 — 2026-10-21"

Section headers need to be translated. Let me work through this carefully.

I'll translate the content section by section, maintaining all formatting.</think>

# Pi 社区摘要 — 2026-10-21

## 本日要闻

Pi 社区今日围绕 Windows 兼容性和提供商集成方面有较多活动。值得关注的是，修复 CJK 粗体渲染的代码已合并（#10730、#11168），解决了中文 Markdown 格式化的长期问题。Scaleway 提供商作为新的 OpenAI 兼容选项加入（#11182），同时仍有多个性能和缓存问题处于开放状态，包括 O(n²) 流式重解析问题（#9265）和 cacheWarming 静默失败缺陷（#10956）。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

| # | Issue | 摘要 | 关注原因 | 反馈 |
|---|-------|---------|----------------|--------|
| **#6300** | **[bug] Windows: Input line is redrawn on every keystroke** | Windows 下 TUI 在 cmd.exe 和 Windows Terminal 中每次按键都会在新行上重绘每个字符。 | 破坏 Windows TUI 基本可用性；17 条评论表明在 Node.js v22.x 上可复现。 | 👍 0 |
| **#10895** | **[no-action] Support system level configuration (MDM)** | 提议支持 `/etc/pi/models.json` 作为企业级最高优先级配置。 | 企业 MDM 环境安全加固功能；与信任模型文档对齐。 | 👍 0 |
| **#10976** | **PowerShell tool falls back to Windows PowerShell 5.1** | 通过 Microsoft Store 安装 pwsh 7 后，`powershell` 工具运行的是 5.1 版本。 | Store 安装使用 AppExecutionAlias，导致 `where pwsh.exe` 找到错误的二进制文件。 | 👍 1 |
| **#8752** | **bedrock-converse: usage.input not normalized across model families** | Anthropic 报告的输入为扣除缓存后的值；OpenAI 系列报告的是总额（输入 = cacheRead + cacheWrite）。 | 导致虚假的缓存未命中提示和重复的输入费用计算。 | 👍 5 |
| **#10956** | **cacheWarming "idle" stops silently on custom/compaction messages** | 当上下文中包含自定义或压缩消息时，空闲预热从不触发；显示"conversation context changed"。 | 破坏许多工作流的缓存预热；507 个决策事件概率均为 1。 | 👍 0 |
| **#10157** | **Gemini tool-call thought signatures dropped with AI Studio endpoint** | `extra_content.google.thought_signature` 被丢弃，导致后续请求的重放问题。 | 破坏通过 OpenAI 兼容端点的 Gemini Flash Lite 集成。 | 👍 0 |
| **#9980** | **[bug] OpenRouter cost calculation off by 2-3x** | 目录使用最便宜的提供商定价；热门开源模型实际费用高出 2-3 倍。 | 用户获得不准确的成本估算；影响 z-ai/glm-5.3-flash 等模型。 | 👍 1 |
| **#10628** | **OSC 52 copy swallowed by tmux (no passthrough wrap)** | 复制选中内容写入原始 OSC 52，tmux 消费后不转发给客户端。 | 破坏 tmux 环境下的剪贴板集成；影响 SSH 远程 Linux。 | 👍 5 |
| **#9265** | **O(n²) tool-call argument re-parsing in openai-completions streaming** | 每个 delta 都重解析整个累积 JSON，使流式处理成本呈二次方。 | 在嵌入式运行时中冻结事件循环；多代理设置严重性能问题。 | 👍 2 |
| **#9557** | **Anthropic adapter drops root-level JSON Schema keywords** | 非严格 `input_schema` 从工具定义中丢弃 `anyOf`、`oneOf`、`allOf`。 | 破坏使用复杂 JSON Schema 验证模式的工具。 | 👍 1 |

---

## 重要 PR 进展

| # | PR | 摘要 | 影响 |
|---|-----|---------|--------|
| **#11182** | **feat(ai,coding-agent): add the Scaleway provider** | 将 Scaleway Generative APIs 添加为内置 OpenAI 兼容提供商，支持 `SCW_API_KEY` 认证或 `/login scaleway`。 | 为欧洲用户提供新的提供商选项；关闭 #6165。 |
| **#11188** | **fix(coding-agent): expose @earendil-works/pi-ai/models in extension loader** | 在 jiti 别名和虚拟模块映射中添加 `/models` 子路径；修复使用 `clampThinkingLevel` 的扩展的"Cannot find module"问题。 | 使扩展能够导入模型工具。 |
| **#11185** | **fix(tui): stop unclosed display math from swallowing Markdown tables** | 阻止数学标记跨越表格起始；待处理数学回退跳过含表格的内容。 | 修复 `$$` 出现在表格附近时的表格渲染问题。 |
| **#11168** | **fix(coding-agent): render CJK emphasis in HTML export** | 引入 `marked-cjk-friendly` 0.1.2；同步 marked 至 18.0.11；添加与 TUI 修复匹配的导出测试。 | 完成所有导出格式的 CJK 粗体修复。 |
| **#11178** | **feat(ai): add totalFromProvider flag to usage cost** | 添加 `usage.totalFromProvider` 字段，指示费用来自提供商载荷还是估算。 | 实现精确费用追踪；已添加 OpenRouter 支持。 |
| **#11173** | **fix(ai): drop models that openai rejects for openai-codex** | 从 codex 目录中移除 OpenAI 拒绝的模型；更新测试。 | 修复 openai-codex 损坏的模型目录。 |
| **#11164** | **fix(ai): find the initial system message past leading extension messages** | 修复 `getInitialSystemMessage()` 以在扩展插入的消息之后搜索，而非仅从索引 0 开始。 | 恢复扩展在 session_start 期间使用 `sendMessage()` 时的系统消息锚定。 |
| **#11142** | **[pkg:ai] fix(ai): keep the prompt cache across tool changes on Responses** | 防止 `resolveTranscriptTools` 在工具移除/重新声明后使缓存前缀失效。 | 修复 #10940；保持提示缓存效率。 |
| **#11158** | **fix(coding-agent): overflow recovery escape hatch + output-budget-aware safety margin** | 防止注入器在每次失败后喂养消息导致的无界压缩重试循环。 | 提高溢出恢复的健壮性。 |
| **#11153** | **feat(tui): enable Kitty images for Rex** | 为 Rex 客户端启用 Kitty 图像协议（macOS）；假定未来兼容。 | 在 Rex 环境中正确渲染图像。 |

---

## 热门讨论

| # | 讨论 | 分类 | 摘要 |
|---|------------|----------|---------|
| **#11192** | **Pi Market Terminal: a second-screen market workspace extension** | 展示分享 | 面向金融专业人士的社区扩展——在 Pi 内显示行情数据作为第二屏幕工作区。 |
| **#11160** | **Weasley Subagents: parallel reviews and background delegation** | 展示分享 | 用于协调子代理的 Apache-2.0 扩展，支持并行审查、顺序任务链和后台委托。 |

---

## 功能需求趋势

从 issue 和讨论中可以看出，最受关注的方向包括：

1. **多提供商费用透明度** — 用户希望获得准确的费用报告，`totalFromProvider` 标志专门解决了 OpenRouter 问题（#11178）。
2. **企业/系统级配置** — MDM 支持 `/etc/pi/` 实现集中安全态势（#10895）。
3. **增强的模型发现** — 在模型选择 UI 中显示上下文窗口变体（#10893）。
4. **CJK/文本渲染改进** — 本周期有多项修复落地；对正确的国际文本支持需求仍然很高。
5. **后台/异步任务执行** — 请求 Codemode `background` 选项（#11189），以及扩展中的后台委托（#11160）。

---

## 开发者痛点

1. **Windows 兼容性差距** — TUI 输入重绘（#6300）、PowerShell 检测（#10976）、崩溃时终端鼠标跟踪状态泄漏（#11170）。
2. **提示缓存失效** — 工具更改触发完整重传（#11142）、隐藏的直接工具重新声明导致缓存未命中（#11114）。
3. **提供商特定怪癖** — Bedrock 输入令牌标准化（#8752）、OpenRouter 定价与实际成本（#9980）、Gemini 思考签名处理（#10157）。
4. **tmux/终端集成** — OSC 52 剪贴板透传缺失（#10628）、UTF-8 BOM 解析失败（#11191）。
5. **复杂 JSON Schema 处理** — Anthropic 适配器丢弃 `anyOf`/`oneOf`（#9557），破坏使用联合类型的工具定义。

---

*基于 GitHub 数据生成 — earendil-works/pi*

---

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the Qwen Code Community Digest from English to Chinese. I need to translate the content while preserving the Markdown structure exactly, including headings, tables, lists, etc.

Let me translate this digest into Simplified Chinese, maintaining the technical register and all formatting:

Key points:
1. Keep all Markdown structure
2. Keep URLs, issue numbers, PR numbers, usernames, etc. as-is
3. Translate the content into natural technical Chinese
4. Maintain tables with proper formatting

Let me go through and translate section by section:</think>

# Qwen Code 社区动态
**日期：** 2026-10-21

---

## 1. 今日要闻

Qwen Code 项目正在推进守护进程会话改进和托管 Agent 增强。最新的预览版本（v0.25.4-preview.0/1）引入了会话定向的 Skill 和 Extension 刷新功能。值得注意的是，PR #13882 已获批准但等待 3 天仍未合并，引发社区关注。多个 CI 失败（Java 21 测试）正在积极调查中。

---

## 2. 版本发布

| 版本 | 关键变更 |
|---------|-------------|
| **v0.25.4-preview.1** | 支持会话定向的 Skill 和 Extension 刷新；托管 Agent 初始发布边界 |
| **v0.25.4-preview.0** | 同上（预览版本） |
| **v0.25.3-nightly.20261020.82bd240ad0** | 包含守护进程和托管 Agent 修复的每日构建 |

---

## 3. 热门问题

| 问题 | 优先级 | 摘要 | 为何重要 |
|-------|----------|---------|----------------|
| [#12668](https://github.com/QwenLM/qwen-code/issues/12668) | **P1** | 自更新丢失 vendored ripgrep 二进制文件的执行权限，导致 EACCES 错误 | 影响所有 npm 安装的关键安装失败；8 条评论，等待反馈 |
| [#14032](https://github.com/QwenLM/qwen-code/issues/14032) | P2 | `/mcp` 面板将 HTTP Streamable MCP 显示为已断开，但工具正常工作 | UI 不一致导致用户困惑；尽管 MCP 正常工作但重连失败 |
| [#14918](https://github.com/QwenLM/qwen-code/issues/14918) | P2 | 失败的托管 Agent 请求在面板顶部显示为原始红色文本，无上下文 | 错误的用户体验差；用户无法追踪失败到请求 ID |
| [#14939](https://github.com/QwenLM/qwen-code/issues/14939) | P2 | 桌面客户端无法连接远程 `qwen serve` 守护进程，除非使用 `--allow-origin '*'` | LAN/远程守护进程连接断开；CORS 配置错误 |
| [#14947](https://github.com/QwenLM/qwen-code/issues/14947) | P2 | 功能请求：保存守护进程连接并允许记住 token | 远程守护进程用户的重大 UX 缺失；无连接记忆 |
| [#13749](https://github.com/QwenLM/qwen-code/issues/13749) | P2 | 功能请求：类 Claude Code 的 Mod 运行时，带有阶段性兼容性 | 雄心勃勃的扩展性提案；4 条评论，需要讨论 |
| [#11704](https://github.com/QwenLM/qwen-code/issues/11704) | P3 | 提案：通过 ACP 为 qwen serve 提供官方 Android 伴侣客户端 | 移动集成路线图；社区提供实现方案 |
| [#14877](https://github.com/QwenLM/qwen-code/issues/14877) | P2 | 内存写入器静默丢弃超出预算的索引条目 | 数据丢失风险；最旧的内存被丢弃而无通知 |
| [#13612](https://github.com/QwenLM/qwen-code/issues/13612) | P3 | 功能：内存提取频率后续跟进（边界刷新、窗口边界） | 内存管理改进；#13571 的后续 |
| [#14911](https://github.com/QwenLM/qwen-code/issues/14911) | P2 | 批准的 PR #13882 已等待 3 天等待合并决定 | 合并流程瓶颈；社区对延迟感到沮丧 |

---

## 4. 关键 PR 进展

| PR | 作者 | 描述 |
|----|--------|-------------|
| [#14970](https://github.com/QwenLM/qwen-code/pull/14970) | doudouOUC | **feat(managed-agent):** 简化现有本地项目引导 - 从工作区菜单选择项目 |
| [#14930](https://github.com/QwenLM/qwen-code/pull/14930) | doudouOUC | **feat(managed-agent):** 在会话创建时导入启用的 skills |
| [#14046](https://github.com/QwenLM/qwen-code/pull/14046) | chiga0 | **feat(core):** 为 Bun 运行时添加真实 PTY 后端 - shell 工具接收正确的终端输出 |
| [#14847](https://github.com/QwenLM/qwen-code/pull/14847) | SU-AN-coder | **fix(core):** 允许 `extensions uninstall <name>` 在目录丢失时清除存储条目 |
| [#13599](https://github.com/QwenLM/qwen-code/pull/13599) | yiliang114 | **feat(core):** 在自动压缩前将工具结果收缩到剩余空间 |
| [#14924](https://github.com/QwenLM/qwen-code/pull/14924) | yiliang114 | **fix(web-shell):** 对齐托管会话标题、文件访问和工作区行 |
| [#14936](https://github.com/QwenLM/qwen-code/pull/14936) | yiliang114 | **fix(ci):** 对齐 Java 集成数据库（MySQL 8.4.6）和锁生命周期 |
| [#14944](https://github.com/QwenLM/qwen-code/pull/14944) | yiliang114 | **fix(cli):** 在强制着色下保持 review 的 gh 可机器读取 |
| [#14888](https://github.com/QwenLM/qwen-code/pull/14888) | qqqys | **feat(generated-ui):** 将 Generated UI 打包到实验性标志后面 |
| [#14969](https://github.com/QwenLM/qwen-code/pull/14969) | Jun516 | **fix(opentui):** 使用成功/错误状态报告 MCP 重连结果 |

---

## 5. 热门讨论

*数据源中未提供讨论数据。*

---

## 6. 功能需求趋势

根据问题分析，最常请求的方向是：

| 趋势 | 频率 | 示例 |
|-------|---------|-------|
| **移动/远程客户端支持** | 高 | Android 伴侣客户端 (#11704)、远程守护进程连接 (#14947, #14939) |
| **增强扩展性** | 中 | 类 Claude Code 的 Mod 运行时 (#13749)、Generated UI 打包 (#14888) |
| **内存改进** | 中 | 提取频率调优 (#13612)、超出预算处理 (#14877) |
| **测试基础设施** | 中 | 托管 Agent 故障门 (#14447)、隔离守卫覆盖 (#14948) |
| **UI/UX 改进** | 中 | 托管 Agent 错误显示 (#14918)、MCP 面板状态 (#14032) |

---

## 7. 开发者痛点

1. **CI 不稳定**：Java 21 上的多个托管 Agent 门失败（SDK Java 快速通道）- 24 小时内 15+ 个已关闭问题
2. **安装 Bug**：自更新损坏 ripgrep 二进制文件权限 (#12668) - 阻塞核心功能
3. **远程守护进程连接**：CORS 问题导致桌面到远程守护进程连接失败 (#14939)
4. **合并延迟**：批准的 PR 等待数天仍未合并 (#14911) - 流程瓶颈
5. **内存数据丢失**：静默丢弃超出预算的条目 (#14877) - 无用户通知
6. **扩展卸载**：无法移除目录已缺失的扩展 (#14847)

---

*动态结束。数据来自 github.com/QwenLM/qwen-code*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*