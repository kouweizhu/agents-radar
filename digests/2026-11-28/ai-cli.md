# AI CLI 工具社区动态日报 2026-11-28

> 生成时间: 2026-11-28 04:09 UTC | 覆盖工具: 7 个

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

1. Translate all the text content while preserving the Markdown structure
2. Keep all technical identifiers, URLs, version numbers, issue/PR references as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate this report section by section, maintaining all the formatting, tables, and technical accuracy.

Key elements to preserve:
- Tables with alignment
- Headings (##, ###)
- Lists
- Horizontal rules
- Code blocks
- URLs and links
- Issue numbers (#xxxxx)
- Version tags (v1.7.0, etc.)
- Repository names (Claude Code, OpenAI Codex, etc.)

Let me translate this comprehensively:
</think>


# AI 开发者 CLI 工具生态报告

**日期：** 2026 年 11 月 28 日
**范围：** 七大主流 AI 编程助手 CLI 跨平台分析

---

## 1. 生态概览

AI CLI 工具生态持续成熟，各厂商呈现出差异化的战略演进路径。Anthropic 的 Claude Code 和 OpenAI 的 Codex 聚焦企业级可靠性，围绕沙箱和权限模型进行安全加固。Google 的 Gemini CLI 侧重智能体编排和子智能体协作，GitHub 的 Copilot CLI 则强调与 IDE 的深度集成及 ACP 协议扩展。OpenCode 以 24 小时内 50 个 issue 和 50 个 PR 的活跃度展现出最高的社区迭代速度。新兴玩家 Pi 和 Qwen Code 则瞄准细分赛道——Pi 主打持久会话管理和多模态输入，Qwen Code 提供托管智能体基础设施和工作流验证。整个生态在 MCP 协议标准化、跨平台沙箱安全、会话连续性等方向呈现收敛态势，而在自主性模型（智能体团队 vs 单智能体）和平台定位上则各自分化。

---

## 2. 活跃度对比

| 工具 | Issue (24h) | PR 合并 (24h) | 讨论 (24h) | 发布 (24h) | 社区健康度 |
|------|-------------|---------------|------------|------------|------------|
| **Claude Code** | 50 | 3 | 0 | 0 | 活跃，以 bug 修复为主 |
| **OpenAI Codex** | 31 | 0 | 6 | 1 (alpha) | 活跃，以安全为主 |
| **Gemini CLI** | 50 | 0 | 0 | 0 | 活跃，功能丰富 |
| **GitHub Copilot CLI** | 31 | 0 | 0 | 4 (patch 系列) | 活跃，稳定发布 |
| **OpenCode** | 50 | 50 | 0 | 0 | 迭代速度最快 |
| **Pi** | 50 | 11 | 1 | 1 (minor) | 活跃，多模态支持 |
| **Qwen Code** | 50 | 50 | 0 | 1 (SDK) | 迭代速度极快 |

*七款工具均展现出强劲的 24 小时活跃度。OpenCode 和 Qwen Code 在 PR 吞吐量上领先，表明其内部开发或社区贡献极为活跃。大多数工具的讨论区活跃度较低，OpenAI Codex 是例外——这更像是其频道设计的有意选择，而非活跃度不足。*

---

## 3. 共同功能方向

以下能力在多个工具社区中均被列为活跃需求：

### 会话持久化与连续性

| 工具 | 具体需求 |
|------|----------|
| Claude Code | 跨设备会话恢复（#31992, 24 👍） |
| Pi | 终端会话恢复（v1.7.0 发布） |
| Gemini CLI | ACP 会话关闭支持（PR #30368） |
| OpenCode | 项目移除和会话导入/导出 |
| Copilot CLI | `/verify-pr` 微VM 会话隔离 |

**启示：** 多设备开发者工作流已成为普遍需求。缺乏同步能力的工具将面临竞争压力。

### 上下文效率与记忆管理

| 工具 | 具体需求 |
|------|----------|
| Claude Code | Projects 升级丢失经典组织结构（#101369） |
| Pi | 压缩导致未消费的图片结果丢失（#66826）；压缩前可见性（#12565） |
| Gemini CLI | AST 感知文件读取调研（#22745）；推理 Token 计数（#5607） |
| OpenCode | 自动压缩无限循环（#12483）；对话历史保留 |
| Copilot CLI | `/tasks` footer 中的上下文层级可见性 |

**启示：** Token 经济性驱动用户采用。缺乏主动上下文管理的工具将随项目复杂度增长而遭遇用户流失。

### MCP 协议标准化

| 工具 | 具体需求 |
|------|----------|
| Gemini CLI | MCP 协议版本转发修复（PR #30504） |
| OpenCode | MCP 连接池（#66914）；按服务器 TLS 信任（#60039） |
| Pi | MCP 2026-07-28 无状态支持（PR #12479） |
| Copilot CLI | MCP 服务启用/禁用竞态条件修复 |

**启示：** MCP 正在成为事实上的插件标准。互操作性和协议合规性已成为基本要求。

### 多账号与工作空间管理

| 工具 | 具体需求 |
|------|----------|
| Claude Code | 多 Claude 账号管理（#18435, 1,119 👍——全生态最高票需求） |
| OpenCode | 项目移除 API（#51197, 已关闭） |
| Copilot CLI | ACP 功能与交互模式的对等性（#5354, #5604） |
| Gemini CLI | Skills 和子智能体的可发现性（#21968） |

**启示：** 同时拥有多个身份（工作/个人、客户项目）的企业用户需要原生的工作空间隔离能力。

### Windows 平台平权

| 工具 | 具体需求 |
|------|----------|
| Claude Code | Remote Control 回归（#92276）；计算机使用审批失败（#103373）；bashEditDiff bug（#97146） |
| OpenAI Codex | 消息发送禁用（#54564）；网络访问误报（#53278）；任务栏遮挡（#45369） |
| OpenCode | AppImage 在 Mesa 上的渲染（#18486）；UNC 路径处理（#5586） |
| Copilot CLI | 凭据管理器洪泛（#5591）；Entra 登录缓存（#5600） |
| Gemini CLI | 浏览器子智能体在 Wayland 上失败（#21983） |
| Qwen Code | Windows 设置热重载（#17489） |

**启示：** Windows 代表最大的开发者桌面份额，但持续产生平台特定 bug。缺乏专属 Windows QA 的工具将累积技术债务。

### 安全与权限边界

| 工具 | 具体关注点 |
|------|------------|
| Claude Code | 未经同意使用第三方 API 密钥（#112492）；沙箱绕过提示（#5601） |
| Gemini CLI | YOLO 模式安全（#30268）；沙箱权限拒绝检测（#30277） |
| OpenCode | 浏览器工具绕过拒绝规则（#54044）；"ask" 权限静默允许（#66861） |
| Copilot CLI | ACP 功能宣传缺口（#5354） |
| Qwen Code | destructive-diff 对抗协议（PR #18549） |

**启示：** 智能体自主性带来攻击面。沙箱边界和权限提升相关的安全加固正在成为竞争差异点。

---

## 4. 差异化分析

### Claude Code（Anthropic）
**目标用户：** 注重可靠性的个人开发者和企业团队
**核心方向：** CLI 成熟度、跨平台一致性、桌面集成
**策略：** 保守的功能发布节奏；高投入的回归测试
**标志性差异点：** 多账号管理（1,119 👍，全生态最高票需求）
**技术定位：** 桌面优先，Remote Control 为核心差异点；在智能体团队功能上进展较慢

### OpenAI Codex
**目标用户：** 已投资 OpenAI API 的企业用户
**核心方向：** ACP 协议扩展、沙箱安全、TUI 打磨
**策略：** 带 alpha/beta 通道的规范化发布节奏；安全优先
**标志性差异点：** ACP（Agent Control Protocol）作为集成层；强 MCP 合规性
**技术定位：** 重度投资 Windows 平台问题；Rust 核心保证性能

### Gemini CLI（Google）
**目标用户：** Google Cloud 用户；偏好开源工具链的开发者
**核心方向：** 智能体编排、子智能体协作、上下文效率
**策略：** 激进的功能开发；实验性的"本地子智能体冲刺"
**标志性差异点：** Skills/子智能体生态及自动发现；零依赖沙箱提案
**技术定位：** AST 感知上下文优化为长期赌注；Node 26 兼容性优先

### GitHub Copilot CLI
**目标用户：** GitHub 生态用户；已在 Microsoft/Azure 体系的开发者
**核心方向：** IDE 集成平权、ACP 对等性、验证工作流
**策略：** 小步 patch 发布；高回归保护；插件生态
**标志性差异点：** `/verify-pr` 配合硬件隔离微VM；Fusion 路由智能
**技术定位：** Agent Plugins 1.0 作为扩展模型；本地/云端执行控制

### OpenCode
**目标用户：** 追求定制化和开源可扩展性的高级用户
**核心方向：** 定制化、插件架构、快速迭代
**策略：** 最高的社区迭代速度；激进的功能合并；开放治理
**标志性差异点：** 通过 `context.tool.call` 实现工具调用工具；会话导入/导出
**技术定位：** 插件优先架构；Rust 客户端开发中；Web Shell 作为 Web 端替代方案

### Pi
**目标用户：** 注重持久性和多模态输入的开发者
**核心方向：** 会话持久化、压缩可靠性、视频/音频提示
**策略：** 深思熟虑的功能设计；多模态作为核心差异点
**标志性差异点：** 终端会话恢复（v1.7.0）；pi-image 生成 API；p3 文档体系
**技术定位：** 跨提供商抽象；强文档文化

### Qwen Code
**目标用户：** 中国开发者生态；需要托管智能体基础设施的团队
**核心方向：** 托管智能体调度、验证工作流、CI 可靠性
**策略：** 高速度内部开发；企业基础设施聚焦
**标志性差异点：** 托管 harness 的拉取调度；对抗性 destructive-diff 协议
**技术定位：** 托管服务集成；基于 RocketMQ 的资源 GC；硬件隔离验证

---

## 5. 社区动能与成熟度

### 高速迭代型

| 工具 | 指标 |
|------|------|
| **OpenCode** | 24 小时内合并 50 个 PR；功能管线激进；tools calling tools 已落地 |
| **Qwen Code** | 24 小时内合并 50 个 PR；托管智能体基础设施；对抗性验证 |
| **Gemini CLI** | 24 小时内 24 个 PR；近期关闭 11 个；安全加固周期活跃 |

### 稳定发布节奏型

| 工具 | 指标 |
|------|------|
| **GitHub Copilot CLI** | 24 小时内 4 个 patch（v1.0.118-0/1/2 系列）；可预测的发布节奏 |
| **OpenAI Codex** | Alpha 发布 rust-v0.174.0-alpha.9；结构化版本控制 |
| **Pi** | v1.7.0 含会话恢复；深思熟虑的功能发布 |

### 社区成熟型

| 工具 | 指标 |
|------|------|
| **Claude Code** | 单功能请求获 1,119 👍；260 条评论的讨论串；成熟的 issue 分类体系 |

### 社区健康信号

| 工具 | Bug:功能比例 | 安全聚焦 | 平台覆盖 |
|------|-------------|----------|----------|
| Claude Code | Bug 比例高（约 60% bug） | 权限边界、认证延迟 | macOS/Linux 强；Windows 落后 |
| OpenAI Codex | 均衡 | 沙箱安全、MCP 合规 | Windows 聚焦；macOS 稳定 |
| Gemini CLI | 均衡 | YOLO 模式、沙箱权限 | Linux 强；Wayland 有缺口 |
| GitHub Copilot CLI | Bug 比例低 | ACP 功能平权 | macOS 聚焦；Windows CI 有问题 |
| OpenCode | Bug 比例较低（功能主导） | 浏览器工具绕过、权限扫描器 | 推进跨平台 |
| Pi | 均衡 | 持久性、对话完整性 | 多模态平权 |
| Qwen Code | PR 量大（功能主导） | 对抗性验证 | Windows 热重载有缺口 |

---

## 6. 趋势信号

### 社区反馈中的行业趋势

**1. 智能体自主性正在加速**
在所有工具中，社区都在推动更独立运作的智能体：
- OpenCode 的 `context.tool.call` 实现工具编排工具
- Gemini CLI 的 Agent Teams 设计支持并行多模型执行
- Pi 的视频/音频多模态输入支持
- Claude Code 的跨设备会话恢复

*决策信号：缺乏自主子智能体能力的工具在复杂工作流中将被视为局限。*

**2. 安全加固势在必行**
权限边界违规、沙箱绕过、凭据泄露出现在每个工具的 issue 列表中：
- Claude Code 的 API 密钥同意问题
- OpenCode 的浏览器工具绕过明确拒绝规则
- Gemini CLI 的 YOLO 模式尊重安全检查
- Qwen Code 的对抗性 diff 协议

*决策信号：企业将要求正式的安全审计。开源工具应优先构建文档化的威胁模型。*

**3. Windows 是问题平台**
每个工具都存在 Windows 特定的 bug：
- Remote Control 回归（Claude Code）
- 网络访问误报（Codex）
- 凭据管理器洪泛（Copilot CLI）
- 设置热重载失败（Qwen Code）

*决策信号：Windows 平权需要专属的平台 QA 投入。将 Windows 视为次要的工具有累积技术债务的风险。*

**4. MCP 是标准扩展模型**
MCP 出现在每个工具的路线图上：
- Gemini CLI 的协议版本转发
- OpenCode 的连接池和 TLS 信任
- Pi 的无状态 MCP 支持
- Copilot CLI 的 MCP 服务管理

*决策信号：MCP 能力现在是基本要求。工具应投资于 MCP 服务托管、连接池和协议合规测试。*

**5. 上下文经济性驱动 UX**
Token 成本和上下文限制正迫使架构创新：
- Pi 的压缩可靠性修复
- Gemini CLI 的 AST 感知文件读取调研
- Claude Code 的 Projects 迁移问题
- Copilot CLI 的上下文层级可见性

*决策信号：上下文管理是竞争差异点。工具应构建主动的上下文预算、压缩摘要和精准文件读取能力。*

**6. 会话持久化是核心期望**
多设备工作流需要会话连续性：
- Pi 的终端会话恢复（v1.7.0）
- Claude Code 的跨设备会话请求
- Gemini CLI 的 ACP 会话关闭
- OpenCode 的会话导入/导出

*决策信号：单会话单进程是架构限制。工具应设计会话序列化、远程恢复和跨设备切换能力。*

---

## 决策者战略摘要

| 考量因素 | 领先工具 | 落后工具 |
|----------|----------|----------|
| **企业安全** | OpenAI Codex, Qwen Code | OpenCode（权限绕过） |
| **Windows 开发者体验** | GitHub Copilot CLI | Claude Code, Gemini CLI |
| **上下文效率** | Pi, Gemini CLI | Claude Code（Projects 迁移） |
| **插件生态** | GitHub Copilot CLI, Gemini CLI | Claude Code |
| **社区动能** | OpenCode, Qwen Code | Claude Code |
| **多模态输入** | Pi | Claude Code, Copilot CLI |
| **会话连续性** | Pi | Gemini CLI |
| **跨平台平权** | OpenCode | Claude Code, Gemini CLI |

**建议：** 对于优先考虑稳定性和安全性的团队，OpenAI Codex 和 GitHub Copilot CLI 提供成熟的发布节奏和强大的平台测试覆盖。对于追求最大定制化和前沿功能的团队，OpenCode 和 Gemini CLI 提供更高的迭代速度。Pi 在多模态密集的工作流和需要持久会话管理的场景中表现最佳。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Preserve the Markdown structure exactly (headings, tables, lists, etc.)
3. Keep URLs, link targets, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
5. Keep issue/PR references like #12345 as-is
6. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me go through and translate this carefully while maintaining the structure.

Title: "Claude Code Skills Community Highlights Report" → "Claude Code Skills 社区动态精选报告"

Let me translate section by section...

I need to be careful with:
- Technical terms (PR → PR, Issue → Issue, merge → 合并, etc.)
- Maintain table formatting
- Keep all the metadata (URLs, PR numbers, usernames) in original form
- Use natural Chinese expressions
</think>


# Claude Code Skills 社区动态精选报告

**仓库：** [anthropics/skills](https://github.com/anthropics/skills)
**数据快照：** 2026-11-28

---

## 1. Skills 排行榜

以下 PR 代表当前讨论中最活跃或最具影响力的 Skill 提案与改进。虽然本数据集中无法获取评论数，但这些项目按时效性、技术范围和社区参与模式被优先排序。

| # | PR | 作者 | Skill | 状态 | 核心要点 |
|---|-----|---------|-------|--------|-----------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | Kuldeeep18 | `mcp-builder` | OPEN | 修复 MCP v2.0 破坏性变更 — `streamablehttp_client` 已更名为 `streamable_http_client`，自定义 HTTP headers 现需通过 `create_mcp_http_client` / `http_client` kwargs 传入，而非直接透传。解决了 #1668。 |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | MartinCajiao | `skill-creator` | OPEN | 隔离触发器评估逻辑并修复 Windows 兼容性。处理了 per-worker 子进程冲突、Windows 管道上的 `select()` 失败，以及不相关工具中断扫描导致的误报问题。 |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) | mrdesouzaphd-cmyk | `notion-spec-to-implementation` + `quantitative-resume-auditor` | OPEN | 双 Skill 提交：(1) 将产品/技术规范转换为可操作的 Notion 任务层级结构，并附带验收标准；(2) 提供量化简历审计及结构化评分。 |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) | Pcmhacker-piro | `webapp-testing` | OPEN | **安全修复** — 消除 `with_server.py` 子进程生成中的 `shell=True`，防止在处理未经过滤的用户/agent 命令字符串时出现命令注入（CWE-78）。 |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) | TINGyu123644 | `docx` | OPEN | LibreOffice 超时时返回 Error 而非虚假成功；在声称完成前验证输出 DOCX 不含修订标记（`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`）。 |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) | ProofCore-Protocol | `proofcore-contract-auditor` | OPEN | 面向 Web3 开发者的全新 Skill：对 Solidity 和 Rust 智能合约执行自动化静态分析，通过零存储 Merkle 协议将加密审计证明锚定到 TON 区块链。 |
| 7 | [#1703](https://github.com/anthropics/skills/pull/1703) | 70v-Yoyo | `md2video-audio` | OPEN | 零成本 Skill，将 Markdown 编译为专业 MP4 视频并附带逼真配音；使用 Marp 进行幻灯片转换，配合文字转语音流水线。 |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | kitao | `pyxel` | OPEN | 通过 Pyxel 实现 Python 复古游戏开发与调试；支持无头输入驱动运行、帧检查及任务特定状态验证。 |

---

## 2. 社区需求趋势

对 Issues 看板的分析揭示了四个维度的集中需求：

### 🔧 平台与基础设施
- **组织级 Skill 分发** (#228, 17 条评论) — 用户需要原生机制在组织内部分发 Skill，无需手动传递文件。
- **Skill 同步可靠性** (#62, #2108) — Skill 消失或同步错误仍是一个持续的痛点。

### 🛡️ 安全与信任
- **命名空间信任边界滥用** (#492, 46 条评论 — 最高参与度) — 以外 `anthropic/` 命名空间分发的社区 Skill 伪装成官方产品，导致权限提升风险。这是数据集中讨论最热烈的话题。
- **命令注入漏洞** (#1980) — Skill 脚本中 `shell=True` 的使用被标记为 CWE-78 风险。

### 🐛 评估与质量保障
- **触发率失败** (#556, 13 条评论) — `run_eval.py` 报告所有查询的触发率为 0%；并行 worker UUID 冲突 (#1352, 6 条评论) 叠加导致误报。
- **YAML frontmatter 解析错误** (#1997) — SKILL.md YAML 元数据与解析后的标量值之间存在差异，破坏了优化命令的执行。

### 📄 文档处理
- **DOCX 修订标记处理** (#1792, #1734, #2018) — 多项修复涉及超时报告、孤立批注处理，以及运行合并期间的命名空间保留。
- **上下文窗口耗尽** (#1487, 5 条评论) — `claude-api` Skill 单次调用注入约 156k tokens。

---

## 3. 高潜力待合并 Skills

以下 PR 展示了实质性功能增强和活跃的开发势头，是近期合并的候选：

| PR | Skill | 作者 | 理由 |
|----|-------|--------|-----------|
| [#1771](https://github.com/anthropics/skills/pull/1771) | `proofcore-contract-auditor` | ProofCore-Protocol | 瞄准 Web3 审计市场；TON 区块链上的加密证明锚定具有创新性和差异化。 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` | 70v-Yoyo | 低成本、高实用性的内容再利用工具；满足创作者经济使用场景。 |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` | kitao | 针对复古游戏细分领域，提供专用调试和验证工作流。 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | `scnet-hpc` | lql341 | 支持通过 SSH/Slurm 操作 HPC 集群；面向科学计算用户群体。 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | `notion-spec-to-implementation` | mrdesouzaphd-cmyk | 桥接产品管理与开发实现；双 Skill 方案最大化实用价值。 |

---

## 4. Skills 生态洞察

> **社区最集中的需求是安全加固、生产级别的 Skill 基础设施** — 涵盖信任边界执行（命名空间滥用）、安全子进程处理（命令注入）、可靠评估流水线（触发率准确性）以及健壮的同步机制 — 这标志着从实验性采用到企业级部署准备的成熟化转型。

---

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Translate all the English text to Simplified Chinese
2. Keep all Markdown structure intact
3. Keep URLs, numbers, issue/PR references, usernames, version tags, etc. as-is
4. Use natural technical Chinese
5. Output ONLY the translation with no preamble or explanation
6. No markdown fences around the whole output

Let me translate section by section:

**Title:** Claude Code 社区日报 — 2026-11-28

**Section 1: Today's Highlights**
- Focus on key updates in 2-3 sentences
- Multi-account management is the top requested feature
- Windows regression affecting Remote Control
- Sweep automation improvements

**Section 2: Releases**
- No new releases in 24 hours

**Section 3: Hot Issues**
- 10 issues with their titles, authors, comments, and descriptions

**Section 4: Key PR Progress**
- 3 PRs with their status and descriptions

**Section 5: Feature Request Trends**
- Table of trends

**Section 6: Developer Pain Points**
- Categories of issues

Let me translate carefully, maintaining technical accuracy and natural Chinese flow.
</think>


# Claude Code 社区日报 — 2026-11-28

---

## 1. 今日要点

社区呼声最高的功能需求——**Claude Desktop 多账户管理**——持续升温，issue #18435 获得了 1,119 个 👍 和 260 条评论。一项影响 Windows 远程控制计划任务的关键回归问题已经浮现，同时多个关于 Windows 平台计算机使用授权失败的报告也在增加。内部 sweep 自动化经过改进，能更好地保护高影响力 issue 免于被标记为 stale。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门 Issue

### 🔥 #18435 — 多 Claude 账户管理 *(关键功能需求)*
**作者：** Agentic-Marketer | **评论：** 260 | **👍：** 1,119

社区最受欢迎的功能需求是：在 Desktop 应用内实现多 Claude 账户的便捷切换。目前用户缺乏原生的方式管理工作/个人账户，也需要在重新认证之间手动切换上下文。

🔗 [查看 Issue #18435](https://github.com/anthropics/claude-code/issues/18435)

---

### 🔥 #82049 — 魔法链接登录延迟 2–5 分钟
**作者：** leojianliu-dot | **评论：** 24 | **👍：** 43 | **领域：** auth

自 2026 年 7 月中旬以来，Claude.ai 魔法链接邮件逐渐变慢，现在需要 2–5 分钟而不是几秒钟。这直接影响会话过期后用户需要重新认证时的工作流程。

🔗 [查看 Issue #82049](https://github.com/anthropics/claude-code/issues/82049)

---

### 🐛 #92276 — Windows 远程控制自动启用回归问题
**作者：** l1204366 | **评论：** 18 | **👍：** 14 | **回归问题**

Desktop 版本 1.40609.0 到 1.44121.4 之间引入的回归问题，导致 Windows 11 Pro 上的计划任务会话远程控制永远无法自动启用。在 1.46388.3 版本中仍然存在。

🔗 [查看 Issue #92276](https://github.com/anthropics/claude-code/issues/92276)

---

### 💡 #31992 — 跨机器会话恢复
**作者：** noctilust | **评论：** 18 | **👍：** 24 | **领域：** cli

功能需求：实现 CLI 到 CLI 之间的会话状态同步。开发者可以在不同机器上无缝切换工作，无需丢失上下文。

🔗 [查看 Issue #31992](https://github.com/anthropics/claude-code/issues/31992)

---

### 🐛 #101369 — Projects 升级导致经典 Projects 被清空
**作者：** voidfreud | **评论：** 13 | **👍：** 12 | **回归问题** | **平台：** web

用户报告"Projects"功能升级后，经典 claude.ai 聊天项目被强制转换，无知情同意、无警告、也无法选择退出。据报道，之前的密封文件夹组织模式已丢失且无法恢复。

🔗 [查看 Issue #101369](https://github.com/anthropics/claude-code/issues/101369)

---

### 🐛 #97146 — Linux bashEditDiff 显示并发会话的编辑
**作者：** balint-korcsmar | **评论：** 11 | **👍：** 8 | **平台：** linux

Linux 上的并发 bug 导致 `bashEditDiff` 显示另一个活跃 Claude 会话的编辑，包括命令启动前所做的更改。与 macOS 上的类似问题相关。

🔗 [查看 Issue #97146](https://github.com/anthropics/claude-code/issues/97146)

---

### 🐛 #103373 — Windows 计算机使用自动拒绝无提示
**作者：** happycrelab-web | **评论：** 8 | **👍：** 2 | **平台：** Windows

在 Windows 11 Home 上，通过远程控制从项目线程发起的 `request_access` 调用被自动拒绝，没有任何用户提示，阻断了合法的计算机使用工作流程。

🔗 [查看 Issue #103373](https://github.com/anthropics/claude-code/issues/103373)

---

### 💡 #107851 — Desktop 通过远程控制启动 start_session
**作者：** nicholas-toulouse-ahh | **评论：** 7 | **👍：** 4 | **平台：** macOS

功能需求：允许通过远程控制触发 `start_session`，使远程工作流程中的会话初始化更加灵活。

🔗 [查看 Issue #107851](https://github.com/anthropics/claude-code/issues/107851)

---

### 💡 #102108 — 侧边栏子分组和会话指示器
**作者：** hebessa | **评论：** 5 | **👍：** 5 | **平台：** Windows

Desktop 应用侧边栏增强功能请求，包括子分组、更醒目的分组标题、缩进会话和未读指示器——改善拥有大量会话的高级用户导航体验。

🔗 [查看 Issue #102108](https://github.com/anthropics/claude-code/issues/102108)

---

### 🐛 #107436 — 远程控制中计算机使用授权从不显示
**作者：** Maxwellwr | **评论：** 5 | **👍：** 1 | **平台：** Windows | **状态：** 已关闭

此回归问题报告（现已关闭）记录了 Windows 远程控制会话中计算机使用授权对话框无法显示，阻断了自动化工作流程。

🔗 [查看 Issue #107436](https://github.com/anthropics/claude-code/issues/107436)

---

## 4. 重要 PR 进展

### #106972 — 在前台运行去重 Agent ✅ 已关闭
**作者：** bpasero-ant

修复了一个 bug：去重运行时，后台启动的 Agent 会被中断。通过在去重步骤中设置 `CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1`，确保 Agent 完整执行。

🔗 [查看 PR #106972](https://github.com/anthropics/claude-code/pull/106972)

---

### #112684 — Sweep 标记 stale 时在 Issue 下评论 🔄 进行中
**作者：** bpasero-ant

增强了 stale-sweep 自动化，现在在标记 issue 为 stale 时会发布评论。每次运行最多处理 100 个 issue，改善社区通知体验。

🔗 [查看 PR #112684](https://github.com/anthropics/claude-code/pull/112684)

---

### #112436 — 不对可复现或高影响力 Issue 标记 stale ✅ 已关闭
**作者：** bpasero-ant

改进了 stale sweep，保留带有以下标签的 issue：`has repro`、`reproduced`、`data-loss`、`high-priority`。防止关键 bug 报告被意外关闭。

🔗 [查看 PR #112436](https://github.com/anthropics/claude-code/pull/112436)

---

## 5. 功能需求趋势

对 open issue 的分析揭示了以下主导功能方向：

| 趋势 | 描述 | 代表性 Issue |
|-------|-------------|----------------------|
| **多账户管理** | 个人/工作账户的原生切换 | #18435 |
| **跨设备连续性** | 跨机器的会话同步和恢复 | #31992 |
| **侧边栏改进** | 自定义样式、子分组、视觉层次 | #102108, #112804 |
| **成本可见性** | Token 使用估算、确认对话框 | #112458, #108851 |
| **远程控制增强** | 远程工作流程中的会话初始化改进 | #107851, #103373 |
| **Projects 控制** | 退出选项、项目协调器记忆设置 | #101369, #112801 |

---

## 6. 开发者痛点

### 认证与访问
- **魔法链接延迟** 导致工作流程中断 (#82049)
- **GitHub 集成故障** 云会话中无法正常工作 (#112802)
- **访问请求自动拒绝** Windows 上阻断计算机使用 (#103373)

### Windows 平台问题
- 远程控制回归问题破坏计划任务 (#92276)
- 项目线程中计算机使用授权对话框无法显示 (#107436)
- 扩展槽移除影响侧边栏插件 (#112800)

### 成本与资源管理
- **启动大型 Agent 工作流程前无用量警告** (#112458)
- **长会话中 Token 上传膨胀**（每次请求 1 MB+）(#111552)
- **计划变更后周限额未正确重置** (#112755)

### Projects 迁移
- 经典项目被强制转换且无法选择退出 (#101369)
- "切换退出协调器"功能丢失 (#112801)

### 数据与安全
- 第三方 API 密钥在用户不知情的情况下被使用 (#112492)
- 会话状态损坏导致显示并发编辑 (#97146)

---

*日报数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) GitHub 数据 — 2026-11-28*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to translate all the text while:

1. Preserving the Markdown structure exactly
2. Keeping URLs, link targets, code spans, code blocks, numbers and dates verbatim
3. Keeping project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
4. Issue/PR references like #12345 and their link text stay as-is
5. Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully:

Title: OpenAI Codex Community Digest
Date: 2026-11-28

Key translations needed:
- "Today's Highlights" -> "今日要闻"
- "Release Summary" -> "发布摘要"
- "Hot Issues" -> "热门 Issue"
- "Key PR Progress" -> "重要 PR 进展"
- "Hot Discussions" -> "热门讨论"
- "Feature Request Trends" -> "功能需求趋势"
- "Developer Pain Points" -> "开发者痛点"

Let me go through each section and translate naturally:

---

# OpenAI Codex Community Digest
# OpenAI Codex 社区速报

## 2026-11-28
## 2026年11月28日

---

## Today's Highlights
## 今日要闻

The Codex team shipped **rust-v0.174.0-alpha.9**, while a significant number of Windows-specific issues dominated community discussion—particularly around message sending failures, browser toggle inconsistencies, and sandbox permission handling. On the PR front, multiple security-focused changes landed in the sandbox and permissions subsystems, addressing long-standing concerns about filesystem restrictions across both Linux and Windows environments.

Codex 团队发布了 **rust-v0.174.0-alpha.9**，与此同时大量 Windows 平台相关问题占据了社区讨论的主导地位——尤其是消息发送失败、浏览器开关状态不一致以及沙箱权限处理等问题。在 PR 方面，多项安全相关的改动已进入沙箱和权限子系统，解决了 Linux 和 Windows 平台上文件系统访问限制方面的长期隐患。


---

## Releases
## 版本发布

### rust-v0.174.0-alpha.9
### rust-v0.174.0-alpha.9

**Release Summary**: This alpha release continues the Rust codebase iteration cycle. No changelog details were provided in the release notes.

**发布摘要**: 此 Alpha 版本延续了 Rust 代码库的迭代周期。发布说明中未提供变更日志详情。

---

## Hot Issues
## 热门 Issue

| # | Issue | Key Points | Community Reaction |
|---|-------

|------------|-------------------|
| [#45163](https://github.com/openai/codex/issues/45163) | **TUI palette cache breaks after system theme change** | Startup-only cache leaves input unreadable when system light/dark mode changes. Affects CLI v0.154.0 and upstream `main`. | **39 comments, 46 👍** — High-impact UX bug affecting terminal users. Users report complete loss of input visibility. |
| [#45163](https://github.com/openai/codex/issues/45163) | **系统主题切换后 TUI 调色板缓存失效** | 仅在启动时缓存的调色板导致系统明/暗模式切换后输入内容不可见。影响 CLI v0.154.0 和上游 `main` 分支。 | **39 条评论, 46 👍** — 高影响

此用户界面缺陷严重影响终端用户，多名用户反馈输入内容完全不可见。

| [#54564](https://github.com/openai/codex/issues/54564) | **[Windows] Cannot send messages in new Work threads** | Send button remains permanently disabled in new Work sessions. Version 26.1013.3656.0 affected. | **35 comments, 1 👍** — Blocks core workflow for Windows Work users. Multiple affected users confirmed. |
| [#54564](https://github.com/openai/codex/issues/54564) | **【Windows】新 Work 线程中无法发送消息** | 发送按钮在新 Work 会话中始终处于禁用状态。版本 26.1013.3656.0 受影响。 | **35 条评论, 1 👍** — 阻

塞了 Windows Work 用户的核心工作流程，多名受影响用户已确认此问题。

| [#54989](https://github.com/openai/codex/issues/54989) | **Windows browser-use reports disabled despite toggle being on** | Browser tools repeatedly fail with "disabled" error even when Browser setting is enabled. Full app restart temporarily fixes. |
| [#54989](https://github.com/openai/codex/issues/54989) | **Windows 浏览器工具报告已禁用，尽管开关已打开** | 即使浏览器设置已启用，浏览器工具仍反复报出"已禁用"错误。完全重启应用可临时解决。 | **35 条评论, 1 👍** — 间歇性但频繁发生，暗示设置与运行时的状态同步存在问题。

| [#53278](https://github.com/openai/codex/issues/53278) | **Windows applies `networkAccess=false` despite enabled network access** | Codex Desktop on Windows incorrectly applies network restrictions even when explicitly allowed. | **30 comments, 6 👍** — Security boundary concern. Users unable to access network resources despite permissions. |
| [#53278](https://github.com/openai/codex/issues/53278) | **Windows 错误应用 `networkAccess=false`，尽管网络访问已启用** | Windows 上的 Codex Desktop 在网络访问已显式允许的情况下仍然错误地应用网络限制。 | **30 条评论, 6 👍** — 涉及安全边界问题，用户无法访问网络资源，尽管权限已授予。

| [#45369](https://github.com/openai/codex/issues/45369) | **Windows auto-hidden taskbar cannot be revealed while app is maximized** | Maximized ChatGPT Desktop prevents mouse-triggered taskbar reveal on Windows. | **23 comments, 9 👍** — OS integration regression affecting daily workflow. |
| [#45369](https://github.com/openai/codex/issues/45369) | **Windows 自动隐藏任务栏在应用最大化时无法呼出** | 最大化的 ChatGPT Desktop 阻止了鼠标触发 Windows 任务栏的呼出。 | **23 条评论, 9 👍** — OS 集成回退问题，影响日常使用流程。

| [#63869](https://github.com/openai/codex/issues/63869) | **ChatGPT repeatedly displays "hit a snag" after loading home screen** | macOS-specific crash/restart loop. Affects Intel MacBook Pro on macOS 15.7.5. | **18 comments, 7 👍** — Critical stability issue. Discovered Nov 25, 2026. |
| [#63869](https://github.com/openai/codex/issues/63869) | **ChatGPT 在加载首页后反复显示"遇到问题"** | macOS 特定崩溃/重启循环。影响 macOS 15.7.5 上的 Intel MacBook Pro。 | **18 条评论, 7 👍** — 严重稳定性问题。2026年11月25日发现。

| [#63093](https://github.com/openai/codex/issues/63093) | **macOS Work: local/cloud run selector missing in new chats** | Users cannot select execution location (local vs cloud) in new Work sessions. v26.1117.41037. | **14 comments, 8 👍** — Loss of key functionality. Chinese user report highlights confusion. |
| [#63093](https://github.com/openai/codex/issues/63093) | **macOS Work: 新聊天中缺少本地/云端运行选择器** | 用户无法在新 Work 会话中选择执行位置（本地或云端）。v26.1117.41037。 | **14 条评论, 8 👍** — 关键功能缺失。用户反映使用上的困扰。 |

A Chinese user reported confusion about not being able to select where code executes in new conversations. Windows workspace routing also fails during OAuth login, with HTTP 432 and `account/read -32603` errors blocking authentication flows. The message input area on Windows disappears after the first assistant reply in Chat mode, a regression spanning multiple versions.

There's also a data integrity issue where migration tools break subagent session continuity during offline migrations, particularly affecting local-store migrations.

## Key PR Progress

Windows sandboxes now properly respect declared filesystem permissions, fixing an issue where MXC volume expansion was overriding directory alias restrictions. Linux sandbox restrictions are also being preserved to prevent symlinks from bypassing security constraints.

The UI has been refined to prevent header clipping in narrow panels with dynamic label shortening, and the TUI's Markdown rendering has been corrected to handle inline code after headings properly. Additionally, synthetic mounts are being sealed in read-restricted environments to prevent command injection. 行重新绑定 Linux 沙箱路径，确保 `TMPDIR` 和 `HOME` 依赖的文件系统规则在命令环境变更后保持一致性。启动时通过终端程序状态报告待处理的对话框，让终端宿主能够检测 Codex 是否被目录信任或启动钩子阻止。

TUI 图像粘贴文件在退出时得到清理，远程插件审批时尊重沙箱读取限制，审批取消时能及时中断运行中的命令，并在初始尝试和重试间共享工具审批逻辑。

Ideas 部分提出了 Codex 的长期记忆功能需求。

用户希望在保留先前线程信息时能获得 1-5 分的引用必要性评分和隐私偏好设置。对于长时间运行的对话，特别是涉及软件开发、研究和规划任务时，维持话题连贯性很重要。此外还询问了 Go 订阅配额的优势。

开源工具 Codexless 允许 ChatGPT 重用本地 Codex 功能，仅在必要时调用完整 Codex Agent。Straitjacket 作为 MCP 边车工具捕获测试结果而不污染上下文，同时保留检索证据。Agent Cat 提供菜单栏配额监控，显示 Codex CLI 剩余配额、重置时间和运行状态。

根据问题讨论分析，功能趋势显示用户对会话持久性有强烈需求，包括跨迁移、重启和长时间运行的可靠状态保持。Windows 平台在稳定性和功能上落后于 macOS，缺少语音模式和 Work 选择器等关键能力。沙箱权限可见性也需改进，用户希望获得更清晰的反馈。

对话记忆方面，用户希望在无需手动注入上下文的情况下维持跨线程的上下文。Quota 和用量透明度也受关注，用户想要实时了解使用限制和重置计划。上下文管理工具帮助过滤或管理测试输出和大型产物导致的上下文膨胀。

Windows 平台的不稳定性是主要痛点，桌面应用存在大量问题——消息发送失败、浏览器开关故障、网络限制误用、任务栏冲突和作曲器消失等。TUI/CLI 渲染也存在调色板缓存在主题变化时失效等问题。

沙箱权限混乱导致用户界面和控制缺失，Windows 用户缺少语音模式，而 macOS Work 用户失去了本地/云端运行选择器。间歇性故障如浏览器切换和"遇到问题"错误暗示可能存在竞态条件或状态同步问题。MCP 服务器生命周期问题也需要解决。
</think>


# OpenAI Codex 社区速报

## 2026年11月28日

---

## 今日要闻

Codex 团队发布了 **rust-v0.174.0-alpha.9**，与此同时大量 Windows 平台相关问题占据了社区讨论的主导地位——尤其是消息发送失败、浏览器开关状态不一致以及沙箱权限处理等问题。在 PR 方面，多项安全相关的改动已进入沙箱和权限子系统，解决了 Linux 和 Windows 平台上文件系统访问限制方面的长期隐患。

---

## 版本发布

### rust-v0.174.0-alpha.9

**发布摘要**: 此 Alpha 版本延续了 Rust 代码库的迭代周期。发布说明中未提供变更日志详情。

---

## 热门 Issue

| # | Issue | 关键信息 | 社区反馈 |
|---|-------|---------|---------|
| [#45163](https://github.com/openai/codex/issues/45163) | **系统主题切换后 TUI 调色板缓存失效** | 仅在启动时缓存的调色板导致系统明/暗模式切换后输入内容不可见。影响 CLI v0.154.0 和上游 `main` 分支。 | **39 条评论, 46 👍** — 高影响力 UX bug，影响终端用户。多位用户反映输入内容完全不可见。 |
| [#54564](https://github.com/openai/codex/issues/54564) | **【Windows】新 Work 线程中无法发送消息** | 发送按钮在新 Work 会话中始终处于禁用状态。版本 26.1013.3656.0 受影响。 | **35 条评论, 1 👍** — 阻塞了 Windows Work 用户的核心工作流程，多名受影响用户已确认。 |
| [#54989](https://github.com/openai/codex/issues/54989) | **Windows 浏览器工具报告已禁用，尽管开关已打开** | 即使浏览器设置已启用，浏览器工具仍反复报出"已禁用"错误。完全重启应用可临时解决。 | **35 条评论, 1 👍** — 间歇性但频繁发生，暗示设置与运行时的状态同步存在问题。 |
| [#53278](https://github.com/openai/codex/issues/53278) | **Windows 错误应用 `networkAccess=false`，尽管网络访问已启用** | Windows 上的 Codex Desktop 在网络访问已显式允许的情况下仍然错误地应用网络限制。 | **30 条评论, 6 👍** — 安全边界问题。用户无法访问网络资源，尽管权限已授予。 |
| [#45369](https://github.com/openai/codex/issues/45369) | **Windows 自动隐藏任务栏在应用最大化时无法呼出** | 最大化的 ChatGPT Desktop 阻止了鼠标触发 Windows 任务栏的呼出。 | **23 条评论, 9 👍** — OS 集成退化问题，影响日常使用流程。 |
| [#63869](https://github.com/openai/codex/issues/63869) | **ChatGPT 在加载首页后反复显示"遇到问题"** | macOS 特定崩溃/重启循环。影响 macOS 15.7.5 上的 Intel MacBook Pro。 | **18 条评论, 7 👍** — 严重稳定性问题。2026年11月25日发现。 |
| [#63093](https://github.com/openai/codex/issues/63093) | **macOS Work: 新聊天中缺少本地/云端运行选择器** | 用户无法在新 Work 会话中选择执行位置（本地或云端）。v26.1117.41037。 | **14 条评论, 8 👍** — 关键功能缺失。多位用户反映使用困惑。 |
| [#59344](https://github.com/openai/codex/issues/59344) | **Windows 工作区路由在活跃使用过程中失败** | 浏览器 OAuth 登录期间出现 HTTP 432 / `account/read -32603` 错误。 | **13 条评论, 1 👍** — Windows Desktop 用户认证流程中断。 |
| [#42963](https://github.com/openai/codex/issues/42963) | **Windows 作曲器在助手回复后消失** | Chat 模式下首次助手回复后消息输入区域消失。 | **12 条评论, 4 👍** — 持续存在的 UI 退化问题，跨多个版本。 |
| [#38762](https://github.com/openai/codex/issues/38762) | **migrate-rollouts 导致持久化的子代理线程历史为空** | 迁移工具破坏子代理会话连续性。影响离线 local-store 迁移。 | **11 条评论, 1 👍** — 迁移场景下的数据完整性问题。 |

---

## 重要 PR 进展

| # | PR 标题 | 影响 |
|---|---------|------|
| [#64416](https://github.com/openai/codex/pull/64416) | **Honor declared filesystem permissions in Windows sandboxes** | 修复 MXC 卷扩展覆盖目录别名限制的问题。提升 Windows 沙箱安全边界。 |
| [#64415](https://github.com/openai/codex/pull/64415) | **Preserve Linux sandbox restrictions across writable symlink aliases** | 防止子挂载通过符号链接覆盖父挂载的限制。 |
| [#64411](https://github.com/openai/codex/pull/64411) | **Fit Agent Command Center grouping header to the panel** | UI 优化：防止窄面板中分组标题被裁剪，通过响应式标签缩短。 |
| [#64400](https://github.com/openai/codex/pull/64400) | **Fix TUI Markdown line breaks before inline code** | 修复列表项中标题后内联代码的错误换行渲染 bug。 |
| [#64398](https://github.com/openai/codex/pull/64398) | **Seal synthetic mounts in read-restricted Linux sandboxes** | 防止命令修改明确可写路径外的合成目录。 |
| [#64396](https://github.com/openai/codex/pull/64396) | **Show confirmed thread permissions in TUI status** | TUI 现在显示服务端确认的权限而非本地配置值，提升准确性。 |
| [#64393](https://github.com/openai/codex/pull/64393) | **Track server-confirmed thread permissions in the TUI** | 基础设施变更，使 TUI 能够接收来自应用服务器的沙箱策略快照。 |
| [#64391](https://github.com/openai/codex/pull/64391) | **Remove dim styling from hook details in the TUI** | 提升 Hook 浏览器详情窗格的可读性。 |
| [#64388](https://github.com/openai/codex/pull/64388) | **Bind Linux sandbox paths before shell snapshot replay** | 确保 `TMPDIR` 和 `HOME` 依赖的文件系统规则在命令环境变更后保持一致。 |
| [#64384](https://github.com/openai/codex/pull/64384) | **Report pending startup dialogs through terminal program status** | 终端宿主现在可以检测 Codex 是否因目录信任或启动 Hook 而被阻塞。 |

**其他值得关注的修复**：
- [#64382](https://github.com/openai/codex/pull/64382): Clean up unused TUI image paste files on exit
- [#64369](https://github.com/openai/codex/pull/64369): Respect sandbox read restrictions in remote plugin approvals
- [#64368](https://github.com/openai/codex/pull/64368): Interrupt running commands promptly when approval is canceled
- [#64355](https://github.com/openai/codex/pull/64355): Share tool approval logic across initial attempts and retries

---

## 热门讨论

### 💡 Ideas
| # | 主题 | 摘要 |
|---|-----|------|
| [#12567](https://github.com/openai/codex/discussions/12567) | **Memories in Codex** | 提议 Codex 在之前的线程中保留并引用信息。询问引用必要性（1-5分）和隐私偏好。 |
| [#64264](https://github.com/openai/codex/discussions/64264) | **Keeping long-running Codex conversations on track** | 讨论如何在多轮对话中保持软件研发、调研和规划任务的方向一致。 |

### ❓ Q&A
| # | 主题 | 摘要 |
|---|-----|------|
| [#64406](https://github.com/openai/codex/discussions/64406) | **Go subscription in Codex** | 询问 Go 订阅配额相比免费版的优势。 |

### 🎨 Show and Tell
| # | 主题 | 摘要 |
|---|-----|------|
| [#38868](https://github.com/openai/codex/discussions/38868) | **Codexless** | 开源工具，让 ChatGPT 重用本地 Codex 功能，仅在需要时调用完整 Codex Agent。 |
| [#64414](https://github.com/openai/codex/discussions/64414) | **Straitjacket - Filter noisy test output** | MCP sidecar，在不污染上下文的情况下捕获测试结果，同时保留检索证据。 |
| [#64280](https://github.com/openai/codex/discussions/64280) | **Agent Cat - Menu bar quota monitor** | 免费菜单栏/托盘监控器，显示 Codex CLI 剩余配额、重置时间和运行状态。 |

---

## 功能需求趋势

基于 Issue 和讨论的综合分析：

| 趋势 | 描述 | 证据 |
|-----|------|------|
| **改进的会话持久性** | 用户希望跨迁移、重启和长时间运行会话获得可靠的状态保持。 | [#38762](#38762), [#12567](#12567) |
| **跨平台一致性** | Windows 平台在稳定性和功能上落后于 macOS（作曲器、语音模式、Work 选择器）。 | [#63093](#63093), [#63526](#63526), [#54564](#54564) |
| **更好的沙箱可见性** | 开发者希望更清晰地了解哪些权限处于激活和确认状态。 | [#64396](#64396), [#64393](#64393) |
| **对话记忆** | 强烈需求 Codex 在线程间保持上下文和记忆，无需手动注入上下文。 | [#12567](#12567) |
| **配额与用量透明度** | 用户希望实时了解使用限制和重置计划。 | [#64280](#64280) |
| **上下文管理** | 社区构建工具来过滤/管理测试输出和大型产物导致的上下文膨胀。 | [#64414](#64414) |

---

## 开发者痛点

1. **Windows 平台不稳定**: Windows 桌面应用出现了不成比例的大量 bug——消息发送失败、浏览器开关故障、网络限制误用、任务栏冲突、作曲器消失。这给 Windows 开发者带来了糟糕的体验。

2. **TUI/CLI 渲染问题**: TUI 中的调色板缓存在主题变化时失效，Markdown 渲染在内联代码格式方面存在边界情况。这些终端用户关注的问题影响了 CLI 高级用户。

3. **沙箱权限混乱**: 多个 Issue 突出了不清晰的权限状态——TUI 报告的本地配置权限可能与服务器确认的沙箱策略不同。远程插件审批也可能错误地归属命令。

4. **UI 控制缺失**: macOS Work 用户失去了本地/云端运行选择器，无法选择执行位置。Windows 用户缺少 Projects 中的语音模式。

5. **间歇性故障**: 多个问题（浏览器开关、"遇到问题"错误）描述了无需配置更改即可临时解决的 bug，表明可能存在竞态条件或状态同步问题。

6. **MCP 服务器生命周期问题**: 全局 stdio MCP 服务器在线程文件夹中启动，导致在会话之间删除项目文件夹时出现故障。

---

*本速报基于 GitHub 数据生成 • [openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate the entire English technical digest into Simplified Chinese. Let me translate it carefully, following all the rules:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form
5. Issue/PR references like #12345 stay as-is
6. Use natural technical Chinese - not literal word-for-word

Let me translate section by section:

Title: "Gemini CLI Community Digest — 2026-11-28"
→ "Gemini CLI 社区日报 — 2026-11-28"

"Today's Highlights"
→ "今日要闻"

"The Gemini CLI project shows continued momentum with active development across agent behavior, MCP protocol compliance, and platform stability."
→ "Gemini CLI 项目保持良好发展势头，在 agent 行为、MCP 协议合规和平台稳定性方面均有活跃进展。"

"Two new PRs landed today addressing MCP transport protocol versioning and CI authentication fixes, while the community continues to grapple with several P1 agent reliability issues including subagent recovery logic and generalist agent hangs."
→ "今日有两个新 PR 合入，分别解决了 MCP 传输协议版本控制和 CI 认证问题。同时社区仍在应对多个 P1 级别的 agent 可靠性问题，包括 subagent 恢复逻辑和通用 agent 挂起问题。"

"Platform improvements targeting Node 26 compatibility, sandbox permission handling, and YOLO mode security were merged this cycle."
→ "本轮还合入了针对 Node 26 兼容性、沙箱权限处理和 YOLO 模式安全性的平台改进。"

Let me continue translating the entire document...

---

"Releases"
→ "版本发布"

"No new releases in the last 24 hours. The project continues to ship nightly builds (latest: `0.63.0-nightly.*`)."


→ "过去 24 小时无新版本发布。项目仍在持续推送每日构建版本（最新：`0.63.0-nightly.*`）。"

"Hot Issues"
→ "热门 Issue"

"Subagent Recovery Logic Fails After MAX_TURNS"
→ "Subagent 在 MAX_TURNS 后恢复逻辑失效"

"Priority: P1 | Area: Agent"
→ "优先级：P1 | 领域：Agent"

"The codebase_investigator subagent incorrectly reports status: "success" with termination reason "GOAL" even when it hits the maximum turn limit before completing analysis."
→ "codebase_investigator subagent 在达到最大轮次限制但未完成分析时，仍然错误地报告 status: "success" 和终止原因 "GOAL"。"

"This masks failures and can mislead users about task completion. The community debate centers on whether the termination status should reflect the turn limit hit or remain a success if partial progress was made."
→ "这掩盖了真实失败情况，可能误导用户对任务完成状态的判断。社区讨论的焦点在于：达到轮次限制时是否应该改变终止状态，还是在有部分进展的情况下保持成功状态。"

"Generalist Agent Hangs Indefinitely"
→ "通用 Agent 无限挂起"

"Priority: P1 | Area: Agent"
→ "优先级：P1 | 领域：Agent"

"Whenever Gemini CLI defers to the generalist agent, execution hangs permanently—sometimes for hours—regardless of task complexity (even simple folder creation)."
→ "每当 Gemini CLI 交由通用 agent 处理时，执行就会永久挂起——有时持续数小时——无论任务复杂度如何（即使是简单的文件夹创建）。"

"Users have found a workaround by instructing the model not to use subagents. This is a critical UX blocker affecting core functionality."
→ "用户发现可以通过指示模型不使用 subagent 来规避这个问题。这是一个影响核心功能的关键 UX 阻塞问题。"

"Zero-Dependency OS Sandboxing via Model's Bash Affinity"
→ "通过模型的 Bash 亲和性实现零依赖 OS 沙箱"

"Priority: P2 | Area: Agent"
→ "优先级：P2 | 领域：Agent"

"Proposes leveraging Gemini 3's native POSIX tool chaining capabilities for zero-dependency OS sandboxing with post-execution intent routing."
→ "提议利用 Gemini 3 的原生 POSIX 工具链能力实现零依赖的 OS 沙箱，配合执行后的意图路由。"

"This ambitious enhancement could reduce dependency overhead while maintaining security boundaries, though it requires careful architectural planning."
→ "这个雄心勃勃的增强可以减少依赖开销同时保持安全边界，但需要仔细的架构规划。"

"AST-Aware File Reads, Search, and Mapping Investigation"
→ "AST 感知的文件读取、搜索和映射调研"

"Priority: P2 | Area: Agent"
→ "优先级：P2 | 领域：Agent"

"An epic tracking investigation into whether AST-aware tools can improve precision of file reads, reduce token noise, and enable syntax-aware navigation."
→ "一个 epic 追踪调研，旨在探索 AST 感知工具是否能提高文件读取精度、减少 token 噪音并实现语法感知的导航。"

"Success here could significantly reduce context bloat (currently ~36.6k tokens/turn baseline) and improve surgical code discovery."
→ "成功的话，可以显著减少上下文膨胀（目前基线约为每轮 36.6k tokens）并改进精准的代码发现能力。"

"Gemini Doesn't Leverage Skills and Sub-Agents Autonomously"
→ "Gemini 未能自主利用 Skills 和 Sub-Agent"

"Priority: P2 | Area: Agent"
→ "优先级：P2 | 领域：Agent"

"Despite having custom skills and sub-agents defined, Gemini rarely invokes them unless explicitly instructed."
→ "尽管定义了自定义 skills 和 sub-agent，Gemini 很少主动调用它们，除非被明确指示。"

"Users report manually prompting for skill usage even when tasks are clearly aligned with available capabilities."
→ "用户反映即使任务明显匹配可用能力，仍需手动提示使用 skill。这限制了工具的有效性，因为模型未能充分利用其能力。"

"Browser Agent Resilience: Session Takeover and Lock Recovery"
→ "Browser Agent 韧性：会话接管与锁恢复"

"Priority: P3 | Area: Agent"
→ "优先级：P3 | 领域：Agent"

"The BrowserManager currently employs a fail-fast strategy when encountering locked profiles in persistent session mode."
→ "BrowserManager 当前在持久会话模式下遇到已锁定配置文件时采用快速失败策略。"

"This issue requests automatic session takeover and lock recovery to improve robustness in long-running workflows."
→ "本 issue 请求实现自动会话接管和锁恢复，以提升长时间运行工作流的稳健性。"

"Browser Agent Ignores settings.json Overrides"
→ "Browser Agent 忽略 settings.json 覆盖配置"

"Priority: P2 | Area: Agent"
→ "优先级：P2 | 领域：Agent"

"The Browser Agent completely disregards configuration overrides in global or project-level settings.json, including critical settings like maxTurns."
→ "Browser Agent 完全忽略全局或项目级 settings.json 中的配置覆盖，包括 maxTurns 等关键设置。"

"While AgentRegistry correctly reads and merges settings, they aren't applied to browser agent invocations."
→ "虽然 AgentRegistry 正确读取并合并了设置，但这些设置并未应用到 browser agent 的调用中。"

"Browser Subagent Fails on Wayland"
→ "Browser Subagent 在 Wayland 上运行失败"

"Priority: P1 | Area: Agent"
→ "优先级：P1 | 领域：Agent"

"The browser subagent fails on Wayland-based Linux environments, terminating prematurely without clear error messaging."
→ "browser subagent 在基于 Wayland 的 Linux 环境中运行失败，会提前终止且没有清晰的错误提示。"

"This platform compatibility issue limits adoption among Linux users on modern desktop environments."
→ "这个平台兼容性问题限制了现代桌面 Linux 环境的用户采用。"

"Symlink Agents Not Recognized"
→ "符号链接定义的 Agent 未被识别"

"Priority: P2 | Area: Agent"
→ "优先级：P2 | 领域：Agent"

"Agents defined via symlinks in ~/.gemini/agents/ are not recognized by the system, breaking workflows where developers want to reference agents from different locations or manage them in a central directory."
→ "通过 ~/.gemini/agents/ 中的符号链接定义的 Agent 系统无法识别，这破坏了开发者从不同位置引用 agent 或在集中目录中管理 agent 的工作流。"

"400 Error with >128 Tools"
→ "工具数量超过 128 时返回 400 错误"

"Priority: P2 | Area: Agent"
→ "优先级：P2 | 领域：Agent"

"Gemini CLI encounters HTTP 400 errors when more than ~400 tools are available."
→ "当可用工具数量超过约 400 个时，Gemini CLI 会遇到 HTTP 400 错误。"

"The agent should smarter scope enabled tools, but currently lacks dynamic tool limiting logic, causing failures in tool-rich environments."
→ "agent 应该更智能地限制启用的工具，但目前缺少动态工具限制逻辑，在工具丰富的环境中会导致失败。"

"Open PRs (Active Development)"
→ "Open 的 PR（活跃开发中）"

"PR | Description | Impact"
→ "PR | 描述 | 影响"

"Recently Merged (This Cycle)"
→ "本轮合入的 PR"

"Feature Request Trends"
→ "功能需求趋势"

"Analysis of open issues reveals several dominant feature directions:"
→ "分析 open 的 issue 可以发现几个主要的功能方向："

"1. Agent Reliability & Robustness"
→ "1. Agent 可靠性与稳健性"

"Multiple P1/P2 issues target fundamental agent hang, crash, and misreporting behaviors. The community prioritizes fixing the generalist agent hangs, subagent recovery logic, and browser agent failures as blockers for production adoption."
→ "多个 P1/P2 issue 聚焦于 agent 挂起、崩溃和误报等根本行为。社区优先修复通用 agent 挂起、subagent 恢复逻辑和 browser agent 失败等问题，这些是生产级采用的关键阻塞项。"

"2. Subagent Ecosystem Expansion"
→ "2. Subagent 生态扩展"

"Strong interest in improving subagent discoverability (settings.json discovery), trajectory visibility (/chat share), backgroundable execution, and parallel collaboration."
→ "社区对改进 subagent 的可发现性（settings.json 发现）、轨迹可见性（/chat share）、后台执行和并行协作有强烈兴趣。"

"The "local subagent sprint" (#20195) signals official roadmap commitment."
→ ""local subagent sprint" (#20195) 表明了官方路线图的承诺。"

"3. Context Efficiency"
→ "3. 上下文效率"

"Several proposals target token reduction: AST-aware file reads (#22745, #22747), "Tactful Extraction" surgical reads (#19561), and persistent file-based task tracking (#18836) to replace in-context todos that cause context rot."
→ "多个提案聚焦于 token 减少：AST 感知的文件读取（#22745, #22747）、"体贴式提取"精准读取（#19561）以及基于持久化文件的

任务追踪（#18836），以替代导致上下文腐化的上下文内 todo。"

"4. Platform & Environment Compatibility"
→ "4. 平台与环境兼容性"

"Wayland browser support, Node 26 compatibility (now addressed), sandbox permission handling, and CRLF normalization indicate growing focus on diverse development environments."
→ "Wayland 浏览器支持、Node 26 兼容性（现已解决）、沙箱权限处理和 CRLF 规范化表明社区日益关注多样化的开发环境。"

"5. Security & Safety"
→ "5. 安全与保障"

"Zero-dependency sandboxing (#19873), destructive behavior discouragement (#22672), and YOLO mode respect (#30268) show community investment in balancing autonomy with safety."
→ "零依赖沙箱（#19873）、破坏性行为劝阻（#22672）和 YOLO 模式尊重（#30268）体现了社区在平衡自主性与安全性方面的投入。"

"Critical (P1 Issues)"
→ "关键问题（P1）"

"The generalist agent hangs indefinitely, blocking core functionality for any user relying on subagents. The subagent recovery logic masks failures and erodes trust in task completion status. The browser subagent fails on Wayland, limiting Linux adoption."
→ "通用 agent 无限挂起会阻止依赖 subagent 的用户使用核心功能。Subagent 恢复逻辑掩盖了失败，削弱了任务完成状态的可信度。Browser subagent 在 Wayland 上失败限制了 Linux 环境的采用。"

"High-Frequency Frustrations"
→ "高频痛点"

"The browser agent ignores settings.json overrides, forcing workarounds. Tool limit errors with 400 responses in tool-rich environments force manual tool scoping. The model doesn't invoke available capabilities autonomously, and symlink agent detection breaks common workflows. The agent also creates cleanup-resistant scripts across directories."
→ "Browser agent 忽略 settings.json 覆盖，迫使开发者采用变通方案。工具丰富的环境中的 400 错误需要手动工具范围限制。模型不主动调用可用能力，符号链接 agent 检测破坏了常见工作流。Agent 还会在各目录中创建难以清理的脚本。"

"UX Friction"
→ "UX 摩擦"

"The /bug command doesn't include subagent session details in bug reports, causing interactive prompt hangs during Vite app creation and similar workflows. The agent also can't reliably explain its own flags, hotkeys, or execution modes."
→ "/bug 命令的 bug 报告中缺少 subagent 会话详情，导致 Vite 应用创建等交互式工作流中的提示挂起。Agent 还无法可靠地解释自己的标志、热键或执行模式。"

"Digest generated from GitHub data for google-gemini/gemini-cli — 2026-11-28"
→ "日报数据来源：google-gemini/gemini-cli GitHub 数据 — 2026-11-28"

---

现在开始逐段翻译成中文：

"Gemini CLI Community Digest — 2026-11-28"
→ "Gemini CLI 社区日报 — 2026-11-28"

"Today's Highlights"
→ "今日要闻"

"The Gemini CLI project shows continued momentum with active development across agent behavior, MCP protocol compliance, and platform stability."
→ "Gemini CLI 项目保持强劲发展势头，在 agent 行为、MCP 协议合规和平台稳定性方面均

有活跃进展。"

"Two new PRs landed today addressing MCP transport protocol versioning and CI authentication fixes, while the community continues to grapple with several P1 agent reliability issues including subagent recovery logic and generalist agent hangs. Platform improvements targeting Node 26 compatibility, sandbox permission handling, and YOLO mode security were merged this cycle."
→ "今日有两个新 PR 合入，分别处理 MCP 传输协议版本控制和 CI 认证问题。社区同时持续应对多个 P1 级别的 agent 可靠性问题，包括 subagent 恢复逻辑和通用 agent 挂起。本轮还合入了针对 Node 26 兼容性、沙箱权限处理和 YOLO 模式安全性的平台改进。"

The latest nightly build is `0.63.0-nightly.*` with no recent stable releases. Several critical issues need attention: the generalist agent hangs indefinitely when invoking subagents, which blocks core functionality; subagent recovery logic masks failures and undermines trust in task completion reporting; and the browser subagent fails on Wayland environments, limiting Linux support. High-frequency frustrations include the browser agent ignoring settings.json overrides, forcing users to find workarounds.

Tool limit errors in rich environments with 400 responses require manual scoping, the model doesn't autonomously invoke available capabilities, symlink agent detection breaks common workflows, and the agent creates hard-to-clean scripts across directories. There's also UX friction where the /bug command omits subagent session details, causing hangs during interactive prompts like Vite app creation, and the agent can't reliably explain its own flags, hotkeys, or execution modes.

The data comes from google-gemini/gemini-cli GitHub repository as of November 28, 2026.
</think>


Gemini CLI 社区日报 — 2026-11-28

## 今日要闻

Gemini CLI 项目保持强劲发展势头，在 agent 行为、MCP 协议合规和平台稳定性方面均有活跃进展。今日有两个新 PR 合入，分别处理 MCP 传输协议版本控制和 CI 认证问题。社区同时持续应对多个 P1 级别的 agent 可靠性问题，包括 subagent 恢复逻辑和通用 agent 挂起。本轮还合入了针对 Node 26 兼容性、沙箱权限处理和 YOLO 模式安全性的平台改进。

---

## 版本发布

过去 24 小时无新版本发布。项目仍在持续推送每日构建版本（最新：`0.63.0-nightly.*`）。

---

## 热门 Issue

### 1. Subagent 在 MAX_TURNS 后恢复逻辑失效
**优先级：P1 | 领域：Agent**

`codebase_investigator` subagent 在达到最大轮次限制但未完成分析时，仍然错误地报告 `status: "success"` 和终止原因 `"GOAL"`。这掩盖了真实失败情况，可能误导用户对任务完成状态的判断。社区讨论的焦点在于：达到轮次限制时是否应该改变终止状态，还是在有部分进展的情况下保持成功状态。

### 2. 通用 Agent 无限挂起
**优先级：P1 | 领域：Agent**

每当 Gemini CLI 交由通用 agent 处理时，执行就会永久挂起——有时持续数小时——无论任务复杂度如何（即使是简单的文件夹创建）。用户发现可以通过指示模型不使用 subagent 来规避这个问题。这是一个影响核心功能的关键 UX 阻塞问题。

### 3. 通过模型的 Bash 亲和性实现零依赖 OS 沙箱
**优先级：P2 | 领域：Agent**

提议利用 Gemini 3 的原生 POSIX 工具链能力实现零依赖的 OS 沙箱，配合执行后的意图路由。这个雄心勃勃的增强可以减少依赖开销同时保持安全边界，但需要仔细的架构规划。

### 4. AST 感知的文件读取、搜索和映射调研
**优先级：P2 | 领域：Agent**

一个 epic 追踪调研，旨在探索 AST 感知工具是否能提高文件读取精度、减少 token 噪音并实现语法感知的导航。成功的话，可以显著减少上下文膨胀（目前基线约为每轮 36.6k tokens）并改进精准的代码发现能力。

### 5. Gemini 未能自主利用 Skills 和 Sub-Agent
**优先级：P2 | 领域：Agent**

尽管定义了自定义 skills 和 sub-agent，Gemini 很少主动调用它们，除非被明确指示。用户反映即使任务明显匹配可用能力，仍需手动提示使用 skill。这限制了工具的有效性。

### 6. Browser Agent 韧性：会话接管与锁恢复
**优先级：P3 | 领域：Agent**

`BrowserManager` 当前在持久会话模式下遇到已锁定配置文件时采用快速失败策略。本 issue 请求实现自动会话接管和锁恢复，以提升长时间运行工作流的稳健性。

### 7. Browser Agent 忽略 settings.json 覆盖配置
**优先级：P2 | 领域：Agent**

Browser Agent 完全忽略全局或项目级 `settings.json` 中的配置覆盖，包括 `maxTurns` 等关键设置。虽然 `AgentRegistry` 正确读取并合并了设置，但这些设置并未应用到 browser agent 的调用中。

### 8. Browser Subagent 在 Wayland 上运行失败
**优先级：P1 | 领域：Agent**

browser subagent 在基于 Wayland 的 Linux 环境中运行失败，会提前终止且没有清晰的错误提示。这个平台兼容性问题限制了现代桌面 Linux 环境的用户采用。

### 9. 符号链接定义的 Agent 未被识别
**优先级：P2 | 领域：Agent**

通过 `~/.gemini/agents/` 中的符号链接定义的 Agent 系统无法识别，这破坏了开发者从不同位置引用 agent 或在集中目录中管理 agent 的工作流。

### 10. 工具数量超过 128 时返回 400 错误
**优先级：P2 | 领域：Agent**

当可用工具数量超过约 400 个时，Gemini CLI 会遇到 HTTP 400 错误。agent 应该更智能地限制启用的工具，但目前缺少动态工具限制逻辑，在工具丰富的环境中会导致失败。

---

## 关键 PR 进展

### Open 的 PR（活跃开发中）

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#30504](https://github.com/google-gemini/gemini-cli/pull/30504) | **MCP 协议版本转发修复** — 修复 `setProtocolVersion` 和 `sessionId` 未从 `McpComplianceTransport` 转发到 `StreamableHTTPClientTransport` 的问题，导致后续请求缺少 MCP-Protocol-Version header。 | **高** — 对 MCP 服务兼容性至关重要 |
| [#30503](https://github.com/google-gemini/gemini-cli/pull/30503) | **CI release patch comment 认证修复** — 解决 CI release 工作流中的认证问题。 | **P1** — 解锁发布流水线 |
| [#30498](https://github.com/google-gemini/gemini-cli/pull/30498) | **后台输出读取尊重 abort signal** — 使 `ReadBackgroundOutputInvocation` 正确响应 `AbortSignal`，实现后台任务输出流式传输的正常取消。 | **中** — 改进取消可靠性 |
| [#30493](https://github.com/google-gemini/gemini-cli/pull/30493) | **GOOGLE_CLOUD_PROJECT_ID 回退支持** — 在 core、CLI 和 a2a-server 中统一支持 `GOOGLE_CLOUD_PROJECT_ID` 作为 `GOOGLE_CLOUD_PROJECT` 的回退。 | **中** — 改进认证一致性 |
| [#30489](https://github.com/google-gemini/gemini-cli/pull/30489) | **CRLF 换行符规范化** — 在计算 write_file diffs 和 `getDiffStat` 时将 `\r\n` 规范化为 `\n`，修复跨平台 diff 显示问题。 | **中** — 跨平台兼容性 |
| [#30368](https://github.com/google-gemini/gemini-cli/pull/30368) | **ACP 会话关闭支持** — 实现 ACP 客户端的 `session/close` 能力，在进程退出前释放会话。 | **中** — 改进资源管理 |

### 本轮合入的 PR

| PR | 描述 | 影响 |
|----|-------------|--------|
| [#30268](https://github.com/google-gemini/gemini-cli/pull/30268) | **YOLO 模式安全修复** — 在 shell 污染/构建文件风险检查和 `PolicyEngine` 保护中尊重 `--approval-mode=yolo`，防止在无头 YOLO 运行中触发确认提示。 | **安全** |
| [#30277](https://github.com/google-gemini/gemini-cli/pull/30277) | **沙箱权限拒绝检测** — 改进 POSIX 沙箱拒绝检测和对容器化/受限环境中不支持情况的处理。 | **高** — 容器兼容性 |
| [#30273](https://github.com/google-gemini/gemini-cli/pull/30273) | **退出码统一** — 集中化管理 CLI 进程退出码，添加之前硬编码为原始字面量的缺失的致命错误码。 | **中** — 开发者体验 |
| [#30281](https://github.com/google-gemini/gemini-cli/pull/30281) | **Node 26 fetch 超时修复** — 升级 Undici 至 7.30.2 以确保 Node 26 上的正确超时配置。 | **高** — Node 26 兼容性 |
| [#30279](https://github.com/google-gemini/gemini-cli/pull/30279) | **函数调用名称修剪修复** — 在历史记录中保留修剪后的函数调用名称，防止 400 INVALID_ARGUMENT 错误。 | **高** — 防止 API 错误 |
| [#30267](https://github.com/google-gemini/gemini-cli/pull/30267) | **源码检出检测修复** — 修复将本地 git clone 误判为全局 npm 安装的问题，防止虚假的自动更新尝试。 | **中** — DX 改进 |

---

## 功能需求趋势

分析 open 的 issue 可以发现几个主要的功能方向：

### 1. Agent 可靠性与稳健性
多个 P1/P2 issue 聚焦于 agent 挂起、崩溃和误报等根本行为。社区优先修复通用 agent 挂起、subagent 恢复逻辑和 browser agent 失败等问题，这些是生产级采用的关键阻塞项。

### 2. Subagent 生态扩展
社区对改进 subagent 的可发现性（`settings.json` 发现）、轨迹可见性（`/chat share`）、后台执行和并行协作有强烈兴趣。"local subagent sprint"（#20195）表明了官方路线图的承诺。

### 3. 上下文效率
多个提案聚焦于 token 减少：AST 感知的文件读取（#22745, #22747）、"体贴式提取"精准读取（#19561）以及基于持久化文件的任务追踪（#18836），以替代导致上下文腐化的上下文内 todo。

### 4. 平台与环境兼容性
Wayland 浏览器支持、Node 26 兼容性（现已解决）、沙箱权限处理和 CRLF 规范化表明社区日益关注多样化的开发环境。

### 5. 安全与保障
零依赖沙箱（#19873）、破坏性行为劝阻（#22672）和 YOLO 模式尊重（#30268）体现了社区在平衡自主性与安全性方面的投入。

---

## 开发者痛点

### 🔴 关键问题（P1 Issues）
- **通用 agent 无限挂起** — 阻止依赖 subagent 的任何用户使用核心功能
- **Subagent 恢复逻辑误报** — 掩盖失败，动摇任务完成状态的信任基础
- **Browser subagent Wayland 失败** — 平台不兼容限制 Linux 环境采用

### 🟠 高频痛点
- **Browser Agent 配置覆盖被忽略** — settings.json 覆盖不生效，迫使采用变通方案
- **工具数量限制错误** — 工具丰富的环境返回 400 错误，需手动进行工具范围限制
- **Skills/sub-agent 利用不足** — 模型不主动调用可用能力
- **符号链接 agent 检测失败** — 符号链接管理 agent 的常见工作流被破坏
- **临时脚本散落** — 模型在各目录创建难以清理的脚本

### 🟡 UX 摩擦
- **Bug 报告缺少 subagent 上下文** — `/bug` 命令不包含 subagent 会话详情
- **交互式提示挂起** — Vite 应用创建等交互式工作流卡住
- **自我认知缺失** — Agent 无法可靠地解释自己的 flag、热键或执行模式

---

*日报数据来源：`google-gemini/gemini-cli` GitHub 数据 — 2026-11-28*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI Community Digest from English to Simplified Chinese. Let me carefully translate this technical report following the rules provided:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form.
5. Issue/PR references like #12345 stay as-is.
6. Use natural technical Chinese, the register of a Chinese developer newsletter.

Let me translate section by section:

**Title and Header:**
"GitHub Copilot CLI Community Digest" → "GitHub Copilot CLI 社区摘要"
"Date:" → "日期："
"Repository:" → "仓库："

**Section 1: Today's Highlights**
"Highlights" → "今日要点"
"GitHub released v1.0.118 across three patch iterations" → "GitHub 在三个补丁版本中发布了 v1.0.118"
"bringing critical fixes for MCP server management, sandbox certificate handling, and interactive prompt navigation" → "带来了 MCP 服务器管理、沙箱证书处理和交互式提示导航的关键修复"
"agent Plugins 1.0 support" → "Agent Plugins 1.0 支持"
"subagent reasoning visibility" → "子代理推理可见性"
"Community attention is heavily focused on ACP gaps" → "社区关注点集中在 ACP 的功能缺口上"
"routing transparency" → "路由透明度"

**Section 2: Releases**
"Today's Highlights" → "今日要点"
"Releases" → "版本发布"
"Fixed:" → "修复："
"Added:" → "新增："

**Section 3: Hot Issues**
"Hot Issues" → "热门问题"


"Critical / High Priority" → "关键 / 高优先级"
"Medium Priority" → "中优先级"

I'll continue translating the remaining sections systematically, focusing on maintaining the technical Chinese newsletter tone and preserving all structural elements precisely.

The text highlights a technical issue with Copilot Fusion configuration in ACP clients, noting a significant community impact that blocks non-interactive integrations. The problem remains open and requires resolution.

The reasoning model compaction issue involves significant token overhead during extended sessions, severely disrupting tool-intensive workflows. Triaging is in progress to address the underlying context estimation challenges.

An ACP mode routing discrepancy exists between interactive CLI and --acp mode, creating inconsistent advanced user experiences. Current status is open and triaged.

The CLI demonstrates persistent non-compliance with user instructions, highlighting ongoing instruction-following reliability challenges. The issue remains open and requires systematic resolution.

Large session event logging triggers stdio transport failures, breaking SDK-based integrations handling extensive contexts. Technical investigation and stabilization are needed.

Agent Plugins 1.0 silently fails to load plugin rules, undermining the new plugin packaging format. Community members are actively investigating the underlying mechanism.

A regression blocks git submodule updates, disrupting CI/CD workflows. Developers are exploring potential workarounds and root cause analysis.

Windows Credential Manager accumulates unmanaged entries, potentially preventing applications from writing credentials. Technical intervention is required to resolve the overflow scenario.

MSAL keychain authentication fails repeatedly on macOS, causing persistent account selection challenges for Azure DevOps users. Ongoing investigation aims to diagnose the keychain persistence issue.

Component tests encounter system-level stability problems within macOS sandbox environments, suggesting potential compatibility or isolation challenges.

Feature request analysis reveals critical development needs: enhancing Agent Configuration & Control capabilities, expanding Plugin & Extension Ecosystem support, and improving Context & Reasoning Management mechanisms.

Platform and integration challenges persist across Windows and macOS, requiring targeted improvements in observability, native tool compatibility, and hot-reload functionality.

Developer pain points highlight critical technical obstacles: instruction-following reliability, sandbox permission configurations, and complex session lifecycle management complexities.

Configuration and ecosystem integration challenges demand strategic resolution, focusing on ACP parity, configuration flexibility, hot-reload capabilities, and native tool compatibility.

Observability and debugging gaps underscore the need for comprehensive telemetry, network resilience strategies, and robust SDK user support for large-scale session management.

Community metrics reveal substantial recent development activity: 31 total issues with 26 new openings, 5 resolved cases, and four targeted releases addressing key technical refinements.
</think>


# GitHub Copilot CLI 社区摘要

**日期：** 2026 年 11 月 28 日  
**仓库：** github.com/github/copilot-cli

---

## 1. 今日要点

GitHub 在三个补丁版本中发布了 **v1.0.118**，带来了 MCP 服务器管理、沙箱证书处理和交互式提示导航的关键修复。跨版本的主题是 Agent Plugins 1.0 支持的日益成熟，包括自定义代理的显式工具暴露和子代理推理可见性的改进。社区的关注点高度集中在 ACP（Agent Control Protocol）的功能缺口上，尤其是 Copilot Fusion 配置和路由透明度。

---

## 2. 版本发布

### v1.0.118-2（2026-11-28）
- **修复：** 方向键现在可以在 Ctrl+R 搜索匹配后正确导航提示历史，而不会应用隐藏的建议。

### v1.0.118-1（2026-11-28）
- **修复：** 并发的 `copilot mcp enable` 或 `copilot mcp disable` 命令不再会意外覆盖对不同 MCP 服务器的更改。

### v1.0.118-0（2026-11-28）
- **修复：** `/sandbox policy` 现在显示沙箱信任的所有额外 CA 证书的路径，包括来自托管设置的证书。
- **修复：** 对于生成自己子代理的子代理，推理努力和上下文层级现在会在 `/tasks` 页脚中显示。
- **修复：** 详细转录现在包含相关查询的匹配计数。

### v1.0.117（2026-11-27）
- **新增：** `sandbox.userPolicy.network.extraCaCertificates` 配置，允许通过 TLS 拦截代理信任沙箱命令的自定义 CA 证书。
- **新增：** 显式工具暴露，允许自定义代理选择加入特定工具。
- **修复：** Page Down 键在 10 列布局中固定提示处不再卡住。

**完整发布说明：** https://github.com/github/copilot-cli/releases

---

## 3. 热门问题

### 🔴 关键 / 高优先级

**1. ACP 未告知 Copilot Fusion 及其层级配置**  
Issue [#5354](https://github.com/github/copilot-cli/issues/5354) | 作者：simonsteiner | 4 条评论 | 12 👍  
Copilot Fusion 在交互式 CLI 中可用，但 ACP 客户端看到的是 "Auto" 路由且无 Fusion 配置。这导致 T3 Code 等基于 ACP 的工具无法向用户暴露 Fusion 功能。社区影响：高——该缺口影响了所有非交互式集成。  
*状态：已开启*

**2. 推理模型在窗口的 30–40% 处压缩**  
Issue [#5607](https://github.com/github/copilot-cli/issues/5607) | 作者：felipecrs | 0 条评论 | 0 👍  
使用自带密钥的推理模型时，会话过度压缩（107 分钟内压缩 19 次），因为上下文估算器持续计算旧的推理 token。这严重影响工具密集型工作流。  
*状态：已开启，已分类*

**3. ACP 模式忽略 fusionTier=high 并使用 Standard 路由**  
Issue [#5604](https://github.com/github/copilot-cli/issues/5604) | 作者：idocinthebox | 0 条评论 | 0 👍  
交互式 CLI 正确地将 `fusionTier: high` 路由到 HydraFusion，但 `copilot --acp` 却通过 `auto_v2` 路由。这为高级用户在模式间造成了不一致的行为。  
*状态：已开启，已分类*

**4. CLI 反复忽略提交指令、工具拒绝和提醒**  
Issue [#5589](https://github.com/github/copilot-cli/issues/5589) | 作者：hanssv | 1 条评论 | 0 👍  
尽管用户明确指示不要，Copilot CLI 仍持续建议 `Co-authored-by` 标签，需要拒绝三次才能遵守。这突出了指令遵循可靠性的持续问题。  
*状态：已开启*

**5. 大会话上的 getMessages 导致 stdio 传输崩溃**  
Issue [#5592](https://github.com/github/copilot-cli/issues/5592) | 作者：evanl666 | 0 条评论 | 0 👍  
包含约 808 MB 事件日志（包括截图）的会话在调用 `session.get_events()` 时导致 `write EINVAL` 错误和 CLI 挂起。这破坏了处理大上下文基于 SDK 的集成。  
*状态：已开启*

### 🟡 中优先级

**6. Agent Plugins 1.0：`.instructions.md` 和 `applyTo` frontmatter 被静默忽略**  
Issue [#5440](https://github.com/github/copilot-cli/issues/5440) | 作者：jdeboscker | 3 条评论 | 1 👍  
Agent Plugins 1.0.0 schema 格式无法从 `com.github.copilot/rules/` 加载插件规则，静默跳过自定义代理配置。这破坏了新的插件打包格式。  
*状态：已开启*

**7. 本地沙箱阻止 `git submodule update` 即使是无操作**  
Issue [#5593](https://github.com/github/copilot-cli/issues/5593) | 作者：chalin | 0 条评论 | 0 👍  
v1.0.99-2 的回归：沙箱现在阻止 `git submodule update` 即使子模块已初始化，破坏了依赖此命令的 CI/CD 工作流。  
*状态：已开启*

**8. Windows 凭据管理器泛滥导致 CredWrite 错误 8**  
Issue [#5591](https://github.com/github/copilot-cli/issues/5591) | 作者：jessehouwing | 0 条评论 | 0 👍  
CLI 在 Windows 凭据管理器中积累数百个 `copilot-mcp-oauth` 条目且从不删除，最终阻止所有应用程序写入凭据。影响 Azure DevOps 和系统级身份验证。  
*状态：已开启*

**9. macOS：Entra broker MCP 登录永不被缓存**  
Issue [#5600](https://github.com/github/copilot-cli/issues/5600) | 作者：kunukn | 0 条评论 | 0 👍  
macOS 上的 MSAL 密钥链保存失败，错误 `-34018`，导致 Azure DevOps MCP 的账户选择器每会话都出现。  
*状态：已开启，已分类*

**10. Cypress 在 macOS 沙箱中因 SIGSEGV 崩溃**  
Issue [#5588](https://github.com/github/copilot-cli/issues/5588) | 作者：JonasSeibert1234 | 0 条评论 | 0 👍  
在 macOS 沙箱内运行组件测试时以 SIGSEGV 退出，但在沙箱外成功。对 Cypress 缓存的读写访问无法解决此问题。  
*状态：已开启*

---

## 4. 关键 PR 进展

过去 24 小时内没有合并或更新的拉取请求。

---

## 5. 功能请求趋势

基于问题分析，以下功能方向主导社区请求：

### Agent 配置与控制
- **ACP 功能对等：** 请求 ACP 暴露与交互式 CLI 相同的配置选项 (#5354, #5604, #5587)——尤其是 Copilot Fusion 层级、配额信息和路由模型选择。
- **自定义代理灵活性：** 组织级自定义代理应尊重 `model` frontmatter (#5585)；自定义代理需要选择加入工具的显式控制 (#5587)。

### 插件与扩展生态
- **Agent Plugins 1.0 完整性：** 完整支持 rules 目录中的 `.instructions.md`、`applyTo` frontmatter (#5440) 以及 settings/hooks 更改的热重载 (#5595)。
- **扩展生命周期可靠性：** 用户扩展应在 PR 关联的会话中启动 (#5606)；扩展应能调用 `session.metadata.setWorkingDirectory` (#5599)。

### 上下文与推理管理
- **高效的上下文利用：** 推理 token 计数应排除已完成的推理 (#5607)；大会话处理需要流式优化 (#5592)。
- **通知可观测性：** 对排队/展示/丢弃的通知及其原因进行配置跟踪 (#5596)。

### 平台与集成
- **Windows 集成健康度：** UNC 路径处理回归 (#5586)、凭据管理器清理 (#5591)、Entra/MSAL 密钥链持久化 (#5600)。
- **macOS 沙箱兼容性：** Cypress 和其他复杂的原生工具需要完全兼容 (#5588)；Unicode 个人资料路径支持 (#5603)。

---

## 6. 开发者痛点

### 🐛 反复出现的 Bug 与回归
1. **指令遵循可靠性：** CLI 在多个对话轮次中忽略用户的明确指令和规则 (#5589)。
2. **沙箱权限过度：** 尽管有明确授权，仍阻止 `git submodule update` 等合法操作 (#5593, #5601)。
3. **会话生命周期失败：** 启动失败后扩展无法启动或工具调用挂起 (#4670, #5606, #5599)。

### ⚙️ 配置与灵活性缺口
1. **ACP/CLI 对等：** ACP 模式缺乏交互式模式中可用的路由透明度、配额访问和 Fusion 配置。
2. **热重载缺失：** 设置和 hooks 更改需要完整的 CLI 重启且无通知 (#5595)。
3. **自定义 CA 证书：** TLS 拦截代理等复杂部署场景需要更好的证书链可见性。

### 📦 生态系统集成挑战
1. **MCP 服务器可靠性：** 并发启用/禁用的竞态条件、Entra 登录缓存失败、图片内容块未展示。
2. **原生工具兼容性：** Cypress、git 子模块和其他常见开发工具面临沙箱限制。
3. **大规模会话降级：** 拥有大量会话历史的 SDK 用户遇到传输失败。

### 🔧 可观测性与调试缺口
1. **遥测模糊：** SIGTERM 与 drained exit 混淆 (#5597)；通知配置无可观测性 (#5596)。
2. **网络弹性：** AHP 连接刷新无限重试无退避 (#5594)；Gemini 4 Neon 模型特定超时 (#5590)。

---

## 7. 社区指标

| 指标 | 数值 |
|--------|-------|
| 问题总数（过去 24 小时） | 31 |
| 新开启的问题 | 26 |
| 已关闭的问题 | 5 |
| 合并的拉取请求 | 0 |
| 版本发布 | 4（v1.0.117, v1.0.118-0/1/2） |

---

*摘要生成日期：2026-11-28。获取实时更新，请在 https://github.com/github/copilot-cli 关注该仓库。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. I need to:

1. Translate the content while keeping all Markdown structure
2. Preserve URLs, issue numbers, repository names, etc.
3. Use natural technical Chinese
4. Output ONLY the translation, no preamble or explanation
5. No markdown fences around the output

Let me translate section by section:

**Title and Header:**
"OpenCode Community Digest" → "OpenCode 社区动态"
"Date:" → "日期："
"Repository:" → "仓库："

**Section 1 - Today's Highlights:**
Need to translate naturally. The key points are:
- 417 comments on free tier issue
- Permission bypass bugs addressed
- Tools can now call other tools via context.tool.call

**Section 2 - Releases:**
"Releases" → "版本发布"
"No new releases in the last 24 hours." → "过去 24 小时内无新版本发布。"

**Section 3 - Hot Issues:**
"Hot Issues" → "热门 Issue"
Then each issue title and description needs translation.

**Section 4 - Key PR Progress:**
"Key PR Progress" → "重要 PR 进展"
"Merged" → "已合并"
"Open" → "进行中"

**Section 5 - Developer Pain Points:**
"Developer Pain Points" → "开发者痛点"
"Based on issue analysis, the following themes emerged as recurring frustrations:" → "基于 Issue 分析，以下主题反复出现，成为用户的主要困扰："

Then the subsections - I need to translate the headers and content while keeping technical terms like "Free Tier Experience", "Security Boundary Leaks", etc. I can translate these as concepts but keep some English if they're commonly used.

**Section 6 - Feature Request Trends:**
"Feature Request Trends" → "功能需求趋势"
"Based on issue analysis, the community is advocating for:" → "基于 Issue 分析，社区主要在推动以下功能："


"Summary Stats" → "汇总统计"

For the table, I need to translate category names while keeping the numbers intact. The categories include new releases, issues and PRs updated in the last 24 hours, critical bugs, high-severity bugs that were closed, platform-specific issues, and security issues. Numbers stay as they are, but Chinese translations apply to the descriptive labels.

I'll render table headers as "类别" and "数量" respectively, then continue with the remaining sections. The footer stays simple with just the digest timestamp and repository information.
</think>


# OpenCode 社区动态

**日期：** 2026-11-28
**仓库：** github.com/anomalyco/opencode

---

## 1. 今日要点

社区对免费套餐问题（Free Tier）讨论持续热烈，#59387 已积累 417 条评论，表明非订阅用户面临持续性痛点。本期处理了多个关键安全与回归问题，包括"ask"规则权限绕过（导致静默执行）和 Esc 键误删消息的 bug。好消息是，一个重要的架构级 PR 已合并：工具现在可以通过 `context.tool.call` 调用其他工具，为插件组合开辟了新可能。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 热门 Issue

### 1. 免费套餐问题持续发酵（[#59387](https://github.com/anomalyco/opencode/issues/59387)）
**状态：** Open | **评论数：** 417 | **👍：** 31

这个聚合免费套餐问题的 mega-thread 已累积 417 条评论，表明用户群体存在广泛的不满。用户反映"免费配额已用尽"提示信息不一致、重置计时器失效，以及桌面端特有的报错。**这是免费用户支持的主要入口。**

---

### 2. Agent Teams 设计 — 多模型并行支持（[#12711](https://github.com/anomalyco/opencode/issues/12711)）
**状态：** Closed | **评论数：** 19 | **👍：** 24

一份关于扁平化 Agent Teams 的重大设计方案，包含命名消息机制、多模型支持及 TUI 集成。Closed 状态表明该设计已被采纳或纳入规划。**这预示着子 Agent 编排功能的未来方向。**

---

### 3. 子 Agent 免费套餐限制不一致（[#49723](https://github.com/anomalyco/opencode/issues/49723)）
**状态：** Open | **评论数：** 14 | **👍：** 2

Bug 报告指出：`explore` 子 Agent 在 CLI 会话内运行时被免费套餐拒绝，但在相同模型配置下以其他方式运行时却工作正常。**揭示了免费套餐配额执行中的边缘场景。**

---

### 4. 缺少项目删除 API（[#51197](https://github.com/anomalyco/opencode/issues/49723)）
**状态：** Closed | **评论数：** 11 | **👍：** 1

用户无法通过 API 或 UI 删除桌面端中的幽灵项目（如"gabri"、"Default Project"）。API 仅暴露了 GET 和 PATCH 方法——没有 DELETE。**Closed 状态表明该问题正在处理中。**

---

### 5. 浏览器工具绕过 Agent 拒绝规则（[#54044](https://github.com/anomalyco/opencode/issues/54044)）
**状态：** Open | **评论数：** 7 | **👍：** 0

一个涉及安全性的 Bug：当子 Agent 在 markdown frontmatter 中明确配置了 `deny browser`，但同时被授予 `execute`（Code Mode）工具时，仍会接收到全部 44 个浏览器工具。**这是权限边界的一次违规。**

---

### 6. 严重回归：前台子 Agent 执行功能被移除（[#66555](https://github.com/anomalyco/opencode/issues/66555)）
**状态：** Open | **评论数：** 6 | **👍：** 0

PR #63382 和 #63223 移除了前台子 Agent 执行能力，强制所有子 Agent 进入后台模式。用户反映这导致父 Agent 频繁被唤醒、上下文污染以及性能下降。**一个影响日常工作效率的重大回归。**

---

### 7. Execute/插件工具调用无超时机制（[#54220](https://github.com/anomalyco/opencode/issues/54220)）
**状态：** Open | **评论数：** 5 | **👍：** 1

Code Mode 的 `execute` 和插件工具调用会无限期挂起——一个慢速插件工具会阻塞整个会话直到用户手动中断。MCP 调用有 12 小时的默认超时，但原生工具没有。**生产环境使用中的可靠性问题。**

---

### 8. Inkling 2 mini 无法调用 Edit 工具（[#66840](https://github.com/anomalyco/opencode/issues/66840)）
**状态：** Open | **评论数：** 5 | **👍：** 0

Inkling 2 mini 进入死循环，不断调用 `shell` 而非 `edit`，可能是模型专属的 system prompt 问题。**引发了对模型兼容性测试的关注。**

---

### 9. 自动压缩丢弃未消费的图片结果（[#66826](https://github.com/anomalyco/opencode/issues/66826)）
**状态：** Open | **评论数：** 4 | **👍：** 0

当自动压缩预计算摘要时，`SessionRecentText.messageToText` 静默丢弃了图片工具结果，导致重复读取图片和上下文浪费。**一个隐蔽的内存/上下文效率 bug。**

---

### 10. Windows 平台权限扫描器绕过（[#66771](https://github.com/anomalyco/opencode/issues/66771)）
**状态：** Open | **评论数：** 3 | **👍：** 0

类似 `cmd /c "rmdir /s /q \"$p\""` 的 shell 命令会穿透 PowerShell 和 cmd 的引号剥离逻辑，可能执行为递归删除驱动器根目录的命令。**一个需要紧急处理的安全问题。**

---

## 4. 重要 PR 进展

### 已合并

| PR | 标题 | 重要性 |
|----|------|--------|
| [#66919](https://github.com/anomalyco/opencode/pull/66919) | **通过 `context.tool.call` 让工具调用其他工具** | 重大架构变更，支持脚本内的工具组合 |
| [#66912](https://github.com/anomalyco/opencode/pull/66912) | **在 home 上支持原生 Windows 机器 Worker** | 启用标准 Windows Worker 部署 |
| [#66229](https://github.com/anomalyco/opencode/pull/66229) | **子 Agent 空闲后停止其 Claude 进程** | 通过终止空闲子 Agent 减少内存占用（每个约 200MB） |
| [#66696](https://github.com/anomalyco/opencode/pull/66696) | **防止 Code Mode agent() 子进程通知父进程** | 修复脚本中大量 `agent()` 调用导致的 Job 清理和通知泄漏 |
| [#66914](https://github.com/anomalyco/opencode/pull/66914) | **在等效配置间共享池化的 MCP 连接** | MCP 集成的连接复用改进 |
| [#66915](https://github.com/anomalyco/opencode/pull/66915) | **不让 MCP SDK 拖累启动速度** | 通过延迟加载 MCP SDK 减少启动时间 |
| [#66924](https://github.com/anomalyco/opencode/pull/66924) | **在开发环境默认启用 OpenCode API** | 改善开发者体验 |
| [#66926](https://github.com/anomalyco/opencode/pull/66926) | **在设置目录中保护 channel 查找** | 修复开发端到端测试失败 |
| [#66546](https://github.com/anomalyco/opencode/pull/66546) | **为 macOS 主程序赋予独立的 LC_UUID** | 修复与其他 Electron 应用共享本地网络隐私追踪的冲突 |
| [#66927](https://github.com/anomalyco/opencode/pull/66927) | **从 read 返回完整行；长行中显示 grep 匹配** | 修复写入回文件的截断标记（导致 JSON 损坏） |

### 进行中

| PR | 标题 | 重要性 |
|----|------|--------|
| [#60039](https://github.com/anomalyco/opencode/pull/60039) | **支持远程 MCP 服务器的逐服务 TLS 信任** | 启用自签名证书的按服务配置 |
| [#60041](https://github.com/anomalyco/opencode/pull/60041) | **首次使用时信任私网服务器证书** | 私网 MCP 服务器接入的 UX 改进 |
| [#66925](https://github.com/anomalyco/opencode/pull/66925) | **在模型拒绝时不强制 tool_choice** | 修复 Claude Sonnet 5.5 / Opus 5.5 结构化输出错误 |
| [#66928](https://github.com/anomalyco/opencode/pull/66928) | **从插件注册 Code Mode 的 execute 工具** | 将 execute 重构为标准插件架构 |
| [#66875](https://github.com/anomalyco/opencode/pull/66875) | **在会话中搜索（Rust 客户端）、TUI 修复** | 将 TS 会话内搜索功能移植到 Rust 客户端 |
| [#66920](https://github.com/anomalyco/opencode/pull/66920) | **固定展开的活动摘要** | TUI 新功能，提升活动可见性 |
| [#66922](https://github.com/anomalyco/opencode/pull/66922) | **打印会话导入错误时不输出堆栈跟踪** | 改善会话导入失败时的错误提示 |

---

## 5. 开发者痛点

以下主题反复出现，成为用户的主要困扰：

### 免费套餐体验（Issue #59387 — 417 条评论）
- 配额执行不一致，重置计时器失效
- 桌面端特有限制缺乏清晰文档
- 用户感觉被迫订阅才能使用基础功能

### 权限边界泄漏
- 明确 deny 后浏览器工具仍被暴露（[#54044](https://github.com/anomalyco/opencode/issues/54044)）
- "Ask"权限静默放行（[#66861](https://github.com/anomalyco/opencode/issues/66861)）
- 嵌套引号混淆导致权限扫描器绕过（[#66771](https://github.com/anomalyco/opencode/issues/66771)）

### Windows 平台缺口
- 原生 Windows 上 TUI 文字渲染问题（[#54173](https://github.com/anomalyco/opencode/issues/54173)）
- Git Bash 引号处理破坏命令（[#57278](https://github.com/anomalyco/opencode/issues/57278)）
- DriveCrypt 虚拟驱动器路径失败（[#64905](https://github.com/anomalyco/opencode/issues/64905)）
- 独立退出时插件清理未调用（[#66868](https://github.com/anomalyco/opencode/issues/66868)）

### 超时与资源管理
- Execute 和插件工具无超时机制（[#54220](https://github.com/anomalyco/opencode/issues/54220)）
- 子 Agent 空闲后仍保持 5 分钟（[#66229](https://github.com/anomalyco/opencode/pull/66229) 已修复）
- MCP 调用默认 12 小时超时（[#54220](https://github.com/anomalyco/opencode/issues/54220)）

### MCP 集成粗糙边缘
- MCP SDK 不必要地拖入启动流程（[#66915](https://github.com/anomalyco/opencode/pull/66915) 已修复）
- 缺少自签名证书的 TLS 信任配置（[#60039](https://github.com/anomalyco/opencode/pull/60039) 进行中）
- Skills 场景下的连接池问题（[#66914](https://github.com/anomalyco/opencode/pull/66914) 已修复）

### CLI 会话管理
- `opencode run` 在后台任务时挂起（[#66885](https://github.com/anomalyco/opencode/issues/66885)）
- `opencode run` 在子会话忙碌时挂起（[#62636](https://github.com/anomalyco/opencode/issues/62636)）

---

## 6. 功能需求趋势

基于 Issue 分析，社区主要在推动以下功能：

### 多 Agent 编排
- **Agent Teams** 支持并行执行、Agent 间消息传递和多模型（[#12711](https://github.com/anomalyco/opencode/issues/12711)）— Closed（可能已在开发中）
- **子 Agent 深度可视化**改进（[#53356](https://github.com/anomalyco/opencode/issues/53356)）

### 代码库管理
- **多仓库变更追踪**，支持工作区子目录（[#45498](https://github.com/anomalyco/opencode/issues/45498)）

### 模型兼容性
- 跨模型提供商的**结构化输出 / tool_choice 处理**改进（[#66925](https://github.com/anomalyco/opencode/pull/66925)）
- 非 OpenAI 模型的 system prompt 调整（Inkling 2 mini 问题 [#66840](https://github.com/anomalyco/opencode/issues/66840)）

### 安全与权限
- **项目删除 API**（[#51197](https://github.com/anomalyco/opencode/issues/51197)）— Closed
- 嵌套 shell 命令的更好权限扫描器（[#66771](https://github.com/anomalyco/opencode/issues/66771)）

### 开发者体验
- **插件热重载**修复，支持符号链接配置目录（[#52240](https://github.com/anomalyco/opencode/issues/52240)）
- **会话内搜索**用于会话导航（[#66875](https://github.com/anomalyco/opencode/pull/66875)）— 已合并到 Rust
- **会话导入/导出错误处理**（[#66922](https://github.com/anomalyco/opencode/pull/66922)）

### 网络搜索可靠性
- 在 HTTP 429 之外的**提供商轮换机制**（配额失败时）（[#60176](https://github.com/anomalyco/opencode/issues/60176)）

---

## 汇总统计

| 类别 | 数量 |
|------|------|
| 新版本发布（24h） | 0 |
| 更新的 Issue（24h） | 50 |
| 更新的 PR（24h） | 50 |
| 严重级 Bug | 3 |
| 高危 Bug（已关闭） | 2 |
| 平台特定问题 | 8+ |
| 安全问题 | 3 |

---

*动态报告基于 2026-11-28 的 github.com/anomalyco/opencode 数据生成*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate an English technical report about GitHub data for the "Pi" project into Simplified Chinese. I need to translate the entire content while following the specific rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, code spans, numbers, dates, project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
4. Use natural technical Chinese, not literal word-for-word

Let me translate this carefully section by section.

**Title and Header:**
- "Pi Community Digest" → "Pi 社区动态"
- "Date:" → "日期："
- "Repository:" → "仓库："

**Today's Highlights:**
- "Pi v1.7.0 is live with" → "Pi v1.7.0 正式发布，带来"
- "terminal session resume" → "终端会话恢复"功能
- "allowing compatible terminals to restore sessions with original profiles, tool restrictions, and instructions after restarts" → "允许兼容终端在重启后恢复会话，包括原始配置文件、工具限制和指令"
- "The community closed 13 issues and merged 11 pull requests in the last 24 hours" → "过去 24 小时内，社区关闭了 13 个 issue，合并了 11 个 pull request"
- "with active work on compaction reliability, MCP protocol 2026-07-28 support" → "正在进行 compaction 可靠性、MCP 协议 2026-07-28 支持"

Let me continue translating the entire document carefully.

I'll go through the sections:
1. Today's Highlights
2. Releases
3. Hot Issues (10 items)
4. Key PR Progress (10 items)
5. Hot Discussions
6. Feature Request Trends (table)
7. Developer Pain Points (6 items)


8. Footer

I'll translate the footer with careful attention to technical precision and consistency with previous sections. I'll maintain the original format, keeping repository and generation date intact. The key is to preserve the technical context while presenting it naturally in Simplified Chinese.

The footer translates to a brief closing note, maintaining the repository link and generation timestamp exactly as in the original text.
</think>


# Pi 社区动态

**日期：** 2026-11-28
**仓库：** github.com/earendil-works/pi

---

## 今日要闻

Pi v1.7.0 正式发布，带来**终端会话恢复**功能，允许兼容终端在重启后恢复会话，包括原始配置文件、工具限制和指令。过去 24 小时内，社区关闭了 13 个 issue，合并了 11 个 pull request，当前重点推进 compaction 可靠性、MCP 协议 2026-07-28 支持，以及 macOS/BSD 跨平台进程锁修复。

---

## 版本发布

### v1.7.0
- **终端会话恢复**：兼容终端现在可以在重启后重新打开当前 pi 会话，保留其原始配置文件、工具限制和指令。集成方式请参阅 [terminal-setup 文档](https://github.com/earendil-works/pi/blob/v1.7.0/packages/coding-agent/docs/terminal-setup.md#program-resume)。

---

## 热门 Issue

### 1. 支持在 prompt 命令中传入视频/音频内容
[#3200](https://github.com/earendil-works/pi/issues/3200) | 作者：louis030195 | 13 条评论 | 👍 8
扩展 `prompt` RPC 命令，在现有 `images` 支持基础上转发视频和音频内容，使多模态模型（Gemma 4、GPT-4o）能够处理更丰富的媒体。这是目前讨论最多的 issue，反映了对原生多模态输入处理的强烈需求。

### 2. 为 OpenAI 兼容提供商规范化可选对象的 tool schema
[#7010](https://github.com/earendil-works/pi/issues/7010) | 作者：hsm-lv | 9 条评论 | 👍 1
`@earendil-works/pi-ai@0.81.1` 的 OpenAI completions 适配器未对 object schema 的 `required` 字段进行规范化，可能导致与第三方提供商通信时的 schema 验证失败。修复此问题将改善与日益壮大的 OpenAI 兼容生态系统的兼容性。

### 3. OpenRouter：通过 Claude 的仅签名推理块被丢弃
[#9534](https://github.com/earendil-works/pi/issues/9534) | 作者：rohangandhi | 5 条评论 | 👍 0
通过 OpenRouter 路由 Claude（Sonnet 4.6、Sonnet 5）时，Pi 会丢弃仅包含签名的推理块。这可能影响推理保留功能——对于依赖扩展思维链的模型尤为重要。

### 4. 支持 Google Vertex 的 streamFunctionCallArguments
[#11123](https://github.com/earendil-works/pi/issues/11123) | 作者：huajiaaa | 5 条评论 | 👍 1
Vertex 提供商适配器缺少对 Google 增量式 `streamFunctionCallArguments` 格式（`partialArgs`、`willContinue` 字段）的支持。添加此功能将使 Vertex 与其他流式 function call 实现保持一致。

### 5. codemode `only`：停用隐藏的 direct tool 会重新声明它（prompt-cache 未命中）
[#11114](https://github.com/earendil-works/pi/issues/11114) | 作者：xulongwu4 | 4 条评论 | 👍 1
使用 `codemode.mode: "only"` 时，停用 direct tool 的扩展会导致该工具在初始工具列表中被重新声明，导致 prompt-cache 未命中和上下文使用效率低下。

### 6. OpenAI 政策违规不会自动重试
[#12633](https://github.com/earendil-works/pi/issues/12633) | 作者：finnvyrn | 3 条评论 | 👍 0
当 OpenAI 返回政策违规错误时，Pi 不会自动重试，迫使用户手动干预。添加重试机制将提高自动化工作流的韧性。

### 7. 可选：仅对助手正文设置换行宽度
[#12607](https://github.com/earendil-works/pi/issues/12607) | 作者：plopezlpz | 3 条评论 | 👍 0
请求的功能：在不影响代码块或表格的情况下，将助手正文换行至 88 列（类似 Claude Code 的 `maxProseWidth`）——在以代码为中心的工作流中兼顾可读性。

### 8. pi-durable：codemode 丢弃工具文本的截断通知
[#12594](https://github.com/earendil-works/pi/issues/12594) | 作者：paulomarg | 3 条评论 | 👍 0
codemode 脚本调用返回长输出的工具时，模型不会收到交互模式下本应获得的截断通知，可能导致对上下文完整性的错误假设。

### 9. 选项：保留 compaction 前消息在交互式记录中的可见性
[#12565](https://github.com/earendil-works/pi/issues/12665) | 作者：ringleader3 | 3 条评论 | 👍 0
用户需要一个 opt-in 的 `transcriptHistory` 设置，在 compaction 摘要内联的情况下保留完整对话历史，而非在 compaction 后失去对历史上下文的访问。

### 10. 自动 compaction 失败后恢复工作并无限重试
[#12483](https://github.com/earendil-works/pi/issues/12483) | 作者：naw | 3 条评论 | 👍 0 | 优先级：P0
关键 bug：自动 compaction 失败会触发无限循环——达到 128k 输出限制导致 compaction 失败，工作继续进行，compaction 立即再次触发。需立即处理。

---

## 重要 PR 进展

### 1. feat(mcp)：支持无状态 MCP 协议 2026-07-28
[#12479](https://github.com/earendil-works/pi/pull/12479) | 作者：dmmulroy | 状态：进行中
为 `pi-mcp` 和 pi 的 MCP 扩展添加 MCP 协议修订版 2026-07-28（无状态）。旧版本保持兼容。这使得基于 HTTP 的 MCP 连接无需会话开销，更加轻量。

### 2. fix(chord)：macOS 和 BSD 上的进程锁是内核锁
[#12635](https://github.com/earendil-works/pi/pull/12635) | 作者：christianklotz | 状态：开放
在 macOS 和 BSD 上，基于 socket 的 chord 进程锁在被信号终止时会留下孤立文件，导致后续所有加锁尝试失败，直到手动清理。修复了这些平台的可靠性问题。

### 3. feat(ai)：添加 pi-image API
[#12535](https://github.com/earendil-works/pi/pull/12535) | 作者：vegarsti | 状态：已关闭
引入通用 `pi-image` 图像生成协议，类似于 `pi-messages` 和 `pi-decision`，为多个提供商（OpenAI、Google Gemini、OpenRouter）提供统一 API。

### 4. fix(coding-agent)：在导出的 HTML 中保留 $
[#12609](https://github.com/earendil-works/pi/pull/12609) | 作者：acmerfight | 状态：已关闭
修复 HTML 导出时 `String.prototype.replace` 将 `$$` 转换为 `$` 的问题，导致会话费用显示中丢失货币符号（`$0.300` 变成了 `0.300`）。

### 5. fix(coding-agent)：在不依赖 WSL 环境变量的情况下检测 WSL
[#12634](https://github.com/earendil-works/pi/pull/12634) | 作者：petrroll | 状态：已关闭
统一整个代码库中的 WSL 检测——此前 `utils/wsl.ts` 和 `core/keybindings.ts` 使用不同的检查逻辑，导致某些 WSL 配置下行为不一致。

### 6. 在 coding agent 中支持 AGENTS.local.md
[#12543](https://github.com/earendil-works/pi/pull/12543) | 作者：julien-c | 状态：已关闭
扩展 agent 加载逻辑，在每个目录中按 `AGENTS.override.md` 后、`AGENTS.md` 前的顺序检查 `AGENTS.local.md`，实现更好的项目级 agent 配置。

### 7. 添加支持 OpenAI 兼容模型的 CTYUN Token Plan 提供商
[#12611](https://github.com/earendil-works/pi/pull/12611) | 作者：atorber | 状态：已关闭
为 CTYUN Token Plan 订阅网关新增内置提供商，通过 `CTYUN_TOKEN_PLAN_API_KEY` 认证，提供七个 OpenAI 兼容模型。

### 8. feat(interactive)：文件变更时自动重载资源
[#12610](https://github.com/earendil-works/pi/pull/12610) | 作者：balmacefa | 状态：已关闭
为 agent 和项目资源目录（`~/.pi/agent/{extensions,skills,prompts,themes}` 及 `<cwd>/.pi/...`）添加文件监视器，迭代扩展或 prompts 时无需手动执行 `/reload`。

### 9. fix(coding-agent)：将 codemode 的嵌套调用行数上限设为边界进度
[#12623](https://github.com/earendil-works/pi/pull/12623) | 作者：simonamtoft | 状态：已关闭
防止 codemode 脚本进行大量嵌套调用时 V8 OOM 崩溃——此前 `executeCodemode` 会无限累积行数，在约 1700 次阻塞读取时达到 4GB 堆限制。

### 10. docs(p3)：添加参考制品链接
[#12628](https://github.com/earendil-works/pi/pull/12628) | 作者：earendilpixi | 状态：已关闭
在 p3 文档中添加"参考制品"章节，链接到 Discord 上共享的 org 可见 Radius 制品（工作方式指南、产品定义、核心概念、组件规格）。

---

## 热门讨论

### 心得展示
- **[pi-config-palette](https://github.com/leohenon/pi-config-palette) — 在 Pi 中切换 skills、extensions、tools 和 MCP**
  [#12629](https://github.com/earendil-works/pi/discussions/12629) | 作者：leohenon | 0 条评论 | 👍 1
  一个新扩展，通过 `/config-palette` 在会话内切换 skills、extensions、tools 和 MCP 服务器——比 `$ pi config` 更具组织性的快速配置替代方案。

---

## 功能需求趋势

分析近期 issue 和讨论，揭示以下主要功能方向：

| 主题 | 热度 | 示例 |
|-------|-----------|----------|
| **多模态输入** | 高 | prompt 命令中的视频/音频 (#3200)、图像生成 API (#12535) |
| **上下文管理** | 高 | 记录历史保留 (#12565)、compaction 可靠性 (#12483, #12572)、迭代消息但不保留 (#12616) |
| **提供商兼容性** | 中 | Vertex 流式处理 (#11123)、OpenAI schema 规范化 (#7010)、CTYUN 提供商 (#12619) |
| **UI/UX 定制** | 中 | 正文换行宽度 (#12607)、墙上时钟时间戳 (#12575)、基于浏览器的 Web UI (#12630) |
| **持久化与状态** | 中 | 对话导出/导入 (#12568)、会话恢复 (#11123)、MCP 无状态协议 (#12479) |
| **开发者体验** | 中 | 自动重载资源 (#12610)、MCP 扩展钩子 (#12600)、编辑器/底部栏注册 (#12631) |

---

## 开发者痛点

### 1. Compaction 可靠性
多个 issue（#12483、#12572、#12594）突出显示了 compaction 失败导致的无限循环、中日韩内容 token 估算不匹配、以及截断通知丢失。开发者需要可预测的 compaction 行为，尤其是在大上下文场景下。

### 2. 提供商不一致
Schema 处理在各 OpenAI 兼容提供商间存在差异（#7010），推理块保留因路由路径不同而异（#9534），且 Vertex 的 `streamFunctionCallArguments` 等流式格式尚未支持（#11123）。这使提供商生态系统碎片化。

### 3. 跨平台问题
最近的修复涉及 WSL 检测一致性（#12634）、macOS/BSD 进程锁行为（#12635）和 NixOS Node.js 版本锁定（#12627）。非 Linux 平台开发者会遇到各种阻力。

### 4. 文件监视性能
Harness 工作区监视器为每个目录创建无限制的 `fs.watch` 句柄（#12580），导致大型代码库资源耗尽（报告案例约 50,700 个目录 / 约 264,000 个文件）。

### 5. 扩展与工具生命周期
隐藏工具重新声明（#11114）、MCP 文件传输钩子（#12600）、编辑器/底部栏注册时机（#12631）等问题表明扩展架构存在复杂性，影响扩展开发者的开发体验。

### 6. 多模态限制
当前 prompt 命令仅支持图像（#3200）。集成视频/音频模型的开发者需要与现有图像处理相同的能力支持，包括 Gemma 4、GPT-4o 及类似多模态模型。

---

*生成于 2026-11-28 | 数据来源：github.com/earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate this English technical report into Simplified Chinese. Let me translate it carefully, following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences around the whole output.
2. Preserve the Markdown structure exactly: headings, tables (including column alignment rows), lists, blockquotes, bold/italic, horizontal rules, emoji.
3. Keep URLs, link targets, code spans, code blocks, numbers and dates verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths and API/config identifiers in their original form — do not translate them.
5. Use natural technical Chinese, the register of a Chinese developer newsletter — not a literal word-for-word rendering.

Let me translate this piece by piece:

**Title:** Qwen Code Community Digest - This is a title, I'll translate the English words into Chinese context

**Date:** 2026-11-28 - Keep as-is

**Source:** github.com/QwenLM/qwen-code - Keep as-is

---

**1. Today's Highlights**

The Qwen Code community saw significant activity around CI reliability and managed agent infrastructure. A critical P1 performance regression in v0.28.7 causes 6-8 minute event-loop freezes on large workspaces, demanding immediate attention. Meanwhile, the team is advancing pull-scheduling designs for hosted harnesses and hardening the PR verification pipeline with adversarial diff protocols.

翻译：
今日重点

Qwen Code 社区在 CI 可靠性和管理 Agent 基础设施方面活动频繁。v0.28.7 中发现一个 P1 级性能回退，导致大型工作区出现 6-8 分钟的事件循环冻结，需要立即处理。与此同时，团队正在推进 Hosted Harness 的拉取调度设计，并通过对抗性 diff 协议强化 PR 验证流程。

---

**2. Releases**

### SDK TypeScript v0.1.39

**Bundled CLI versions:** 0.28.7 and 0.28.6


This SDK release bundles the TypeScript client library with corresponding CLI versions. Detailed changelog information for potential breaking changes or new API capabilities remains unspecified.

🔗 [Release sdk-typescript-v0.1.39](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.39)

---

## 3. Hot Issues

### 🔴 P1 Critical

| # | Title | Comments | Why It Matters |
|---|-------|----------|----------------|
| **#18489** | **bug(serve): v0.28.7 worktree retention freezes event loop for 6-8 min via O(N²) regularFiles.includes on 300k-file .qwen snapshots** | 3 | **Critical regression.** Upgrading to v0.28.7 causes full event-loop freezes starving `/health` and all routes. Affects multi-workspace daemons with 23+ workspaces on Node v26.12.1. Multi-GB snapshot churn observed. |

A significant performance degradation emerges in v0.28.7, causing extensive event-loop blocking. The issue stems from an inefficient O(N²) algorithm in worktree retention, impacting systems with massive snapshot files. Critical infrastructure components become unresponsive, with severe implications for multi-workspace daemon environments.

The main CI test suite exhibits intermittent failures across multiple test environments. Managed Agent gate tests reveal fault tolerance challenges in hosted monitoring scenarios. A proposed feature aims to enhance scheduling mechanisms for hosted harness environments, enabling more dynamic work allocation strategies.

Windows project configuration management demonstrates persistent synchronization challenges. Specifically, dynamically created settings files are not automatically recognized during runtime, creating potential configuration inconsistencies. Additionally, the Desktop AppImage platform experiences rendering complications with modern graphics drivers.

A critical event loop freeze issue impacts version v0.28.7, causing significant performance degradation in large worktree scenarios. The problem stems from an inefficient O(N²) algorithm within worktree retention mechanisms, resulting in potential 6-8 minute system stalls. Multi-workspace environments are particularly vulnerable, with extensive snapshot generation observed across different system configurations.

The managed agent infrastructure shows persistent challenges, with CI gate tests revealing ongoing reliability problems in hosted monitoring and fault tolerance test suites. Feature development continues around scheduling and session management, with proposals focusing on dynamic work allocation and workspace interaction improvements.

Web shell UI and Windows platform support represent critical areas of ongoing development, addressing navigation defaults, settings synchronization, and cross-platform compatibility challenges.

Performance and rendering issues like event loop freezes and AppImage display problems require targeted technical interventions, with specific attention to algorithm optimization and platform-specific dependencies.

Security and testing infrastructure gaps demand immediate focus, particularly around dependency vulnerability scanning and test suite reliability, which currently show intermittent failures and potential risk exposure.

The managed agent and verification workflow improvements aim to enhance session design, PR safety, and continuous integration robustness through advanced protocols and targeted fixes addressing review findings.

Test distribution and agent configuration refinements focus on performance optimization, workspace isolation, and resilient task recovery mechanisms across distributed systems.

Multimodal input handling and transport routing improvements for OpenAI and Google AI platforms involve sophisticated protocol adjustments to support diverse input types and ensure reliable cross-platform interactions.

Chat editor component restructuring targets modular design improvements, specifically decoupling toolbar functionality and refining import management strategies in the web shell interface.

Session management and agent workflow enhancements include database garbage collection mechanisms and sophisticated scheduling approaches to optimize resource utilization and system responsiveness.

Key implementation priorities center on advanced scheduling protocols, robust verification strategies, and intelligent resource management techniques that enhance overall system reliability and performance.

The developer community is actively addressing critical infrastructure challenges across multiple dimensions, with particular focus on continuous integration reliability, performance optimization, and cross-platform compatibility.

Specific pain points include event loop blocking, Windows support limitations, Linux desktop rendering issues, and user experience friction points that require targeted technical interventions.

Immediate priorities involve resolving O(N²) algorithmic inefficiencies causing system-wide performance degradation, particularly in environments with large-scale workspace management and snapshot generation.

Cross-platform compatibility challenges demand comprehensive testing and targeted remediation strategies, with special attention to configuration synchronization, rendering capabilities, and workflow interruptions across different operating systems.

Key metrics reveal significant engineering engagement, with 50 issues and pull requests processed, indicating an active and responsive development community focused on rapid iteration and quality improvement.

The digest compiles a snapshot of github.com/QwenLM/qwen-code's technical activity, highlighting critical system performance and stability challenges requiring immediate attention.

社区在持续集成可靠性和托管 Agent 基础设施方面展现出显著的技术活跃度。v0.28.7 版本中发现的 P1 级性能回归导致大规模工作区事件循环冻结，急需立即处理。同时，团队正在推进 Hosted Harness 的拉取调度设计，并通过对抗性 diff 协议强化 PR 验证流程。

SDK TypeScript v0.1.39 版本捆绑了 0.28.7 和 0.28.6 的 CLI 版本。目前未提供详细的变更日志，包括潜在的破坏性变更或新的 API 接口。

关键问题主要集中在严重的服务性能缺陷上。v0.28.7 版本的 bug 导致大规模工作区的性能冻结，通过 O(N²) 复杂度的文件匹配算法处理 30 万文件的快照，造成 6-8 分钟的系统响应中断。这种性能退化直接影响了系统的健康检查和路由功能。

CI 测试套件也面临多重挑战，包括 E2E 测试和 Managed Agent gate 测试的不稳定性。团队正在积极应对这些间歇性失败的测试环境，努力提高系统的整体可靠性。

托管服务调度和会话管理成为当前的技术焦点，旨在增强动态工作分配和资源利用策略。特别是拉取调度和分支管理功能，将为工作站环境带来更灵活的工作流。

平台特定问题仍然突出，Windows 设置热重载机制存在缺陷，桌面应用渲染在现代 Mesa 驱动上遇到兼容性挑战。这些问题直接影响用户体验和跨平台一致性。

性能回归分析揭示了更深层的技术债务，尤其是 v0.28.7 版本引入的事件循环冻结问题。O(N²) 复杂度的算法在大规模项目中的性能瓶颈明显，需要紧急重构和优化。

跨平台兼容性测试和性能优化将成为下一阶段的技术重点，重点关注 Windows、Linux 桌面环境以及 Web Shell 的用户体验改进。 托管 Agent 调度和会话管理是当前的关键开发方向，涵盖拉取调度、工作共享和会话分组等功能。Windows 平台兼容性和 Web Shell 用户体验优化也是重点关注领域。

开发者面临的主要挑战包括持续集成可靠性危机、间歇性测试失败以及 v0.28.7 版本事件循环冻结导致的性能回退问题。这些技术债务正在通过代码优化和架构重构逐步解决。

平台特定缺陷和用户交互痛点，如 Ink TUI 状态丢失和会话颜色管理缺失，正在引起开发团队的高度重视，需要系统性改进以提升整体用户体验。
</think>


# Qwen Code 社区周报

**日期：** 2026-11-28
**来源：** github.com/QwenLM/qwen-code

---

## 1. 今日重点

Qwen Code 社区在 CI 可靠性和管理 Agent 基础设施方面活动频繁。v0.28.7 中发现一个 P1 级性能回退，导致大型工作区出现 6-8 分钟的事件循环冻结，需要立即处理。与此同时，团队正在推进 Hosted Harness 的拉取调度设计，并通过对抗性 diff 协议强化 PR 验证流程。

---

## 2. Releases

### SDK TypeScript v0.1.39

**Bundled CLI versions:** 0.28.7 and 0.28.6

本次 SDK 发布包含了 TypeScript 客户端库及其对应的 CLI 版本。未提供详细的变更日志，包括潜在的破坏性变更或新增 API 接口。

🔗 [Release sdk-typescript-v0.1.39](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.39)

---

## 3. Hot Issues

### 🔴 P1 Critical

| # | 标题 | 评论数 | 影响说明 |
|---|-------|----------|----------------|
| **#18489** | **bug(serve): v0.28.7 worktree retention 因 O(N²) regularFiles.includes 算法导致 30 万文件 .qwen 快照场景下事件循环冻结 6-8 分钟** | 3 | **严重回退。** 升级到 v0.28.7 后导致事件循环完全冻结，`/health` 和所有路由均不可用。影响 Node v26.12.1 上 23+ 工作区的多工作区守护进程。观察到多 GB 级别的快照频繁换入换出。 |
| **#18342** | Main CI failed: E2E Tests — no test identified | 61 | 评论最多的 CI 故障。E2E 测试套件在多个环境中间歇性失败，表明系统存在不稳定性。 |

### 🟠 P2 High Priority

| # | 标题 | 评论数 | 影响说明 |
|---|-------|----------|----------------|
| **#18252** | Main CI failed: E2E Tests — cli/cron-tools.test.ts | 58 | 影响 cron 工具注册测试的相关 E2E 不稳定性问题。社区正在积极调试。 |
| **#18258** | Main CI failed: Managed Agent gate — HostedMonitorRunFaultGatesIT | 38 | Managed Agent gate 在容错测试套件中失败，影响发布信心。 |
| **#18514** | proposal(managed-agent): Enable pull scheduling for Hosted Harness | 7 | **功能提案：** 允许 Hosted Harness 实例通过 HTTP 长轮询获取可运行会话任务，提高资源利用率。 |
| **#18508** | fix(web-shell): 打开 Artifacts 应展示列表，而非恢复的 artifact 预览标签页 | 6 | artifact 库导航默认行为错误的 UI 回归。影响 web-shell 中的用户工作流。 |
| **#17489** | Windows: 启动后创建的 project settings 不会被热重载 | 6 | Windows 特有缺陷，启动后创建的 `.qwen/settings.json` 会被运行中的会话忽略。影响 MCP 服务器连接。 |
| **#18287** | Main CI failed: SDK Java — HostedMonitorRunFaultGatesIT | 4 | Java SDK 流水线中 Managed Agent gate 的额外故障。 |
| **#18475** | fix(serve): 会话删除时对不可读的 worktree sidecar 采取安全失败策略 | 3 | **最近关闭。** 会话删除可能遗留悬空符号链接和不可读的 sidecar 目录，存在数据完整性风险。 |

### 🟡 P3 / Notable

| # | 标题 | 评论数 | 影响说明 |
|---|-------|----------|----------------|
| **#18486** | Desktop AppImage: 当前 Mesa 上出现灰色窗口 — 捆绑的 libwayland-client 缺少 wl_fixes_interface | 3 | Desktop AppImage 在配备现代 Mesa 驱动的 Linux 上渲染失败。影响 Bluefin/Fedora 用户。 |
| **#18397** | Daily dependency CVE audit failed | 2 | 自动化安全扫描失败，可能掩盖漏洞。 |
| **#18552** | feat(verify-pr): add host capability probes and per-round VM staging | — | **最近合并。** 关闭了硬件隔离 `/verify-pr` 微 VM 轮次中主机端 Phase 2 的空白。 |

---

## 4. Key PR Progress

| # | 标题 | 作者 | 状态 | 内容说明 |
|----|-------|--------|--------|--------------|
| **#18561** | docs(managed-agent): Design Harness pull for released Sessions (P1) | doudouOUC | OPEN | 设计 Hosted Harness 拉取调度的 P1 阶段，使已发布的会话能够通过出站 HTTP 长轮询获取任务。 |
| **#18549** | feat(verify-pr): add destructive-diff adversarial protocol, top-level review capture, and mechanical publish guard | wenshao | OPEN | 通过对抗性 diff 协议、独立恢复预言机和机械性发布守卫强化 PR 验证，防止静默数据丢失缺陷。 |
| **#18579** | fix(ci): keep fork-PR reviews off the unreachable canary endpoint | wenshao | OPEN | 修复 CI 路由，使 GitHub 托管运行器上无法访问的 CN MaaS 网关不接收 fork PR 审核请求。 |
| **#18546** | fix(autofix-pr): harden tracked-state guard, watch consent, and in-place skill rules | wenshao | CLOSED | 解决了 #18521 的 11 条评审意见（3 Critical, 8 Suggestion）— 阻止伪造的 git-tracked watch 状态文件，要求明确的 watch 授权。 |
| **#18568** | test(integration): keep the distribution process observer off the PTY loop | yiliang114 | OPEN | 通过将进程表遍历限制为每 500ms 一次、每次最多探测 32 个子进程来优化分发测试套件。 |
| **#18155** | feat(managed-agent): confine selected Hosted Workspace Shell | water-in-stone | OPEN | 使用 Bubblewrap 添加只读隔离，为内置 Hosted Agent 会话添加可选的前台 shell 配置文件。 |
| **#18570** | fix(core): skip incomplete worktree snapshot pairs in unkeyed recovery | LyleLiu666 | OPEN | 在无键搜索期间跳过缺少成员信息的快照候选对象，提高 worktree 恢复的健壮性。 |
| **#17823** | fix(agents): keep A2A tasks recoverable after transcript read errors | water-in-stone | OPEN | 当文件系统错误导致无法查找回复时返回可重试的 JSON-RPC 错误 `-32012`，实现任务恢复。 |
| **#18523** | feat(core,cli): support OpenAI Responses multimodal/dialects and auto-select Chat Completions audio encoding | HaveAnApplepie | OPEN | 添加原生多模态输入处理、wire dialect 描述符、明文推理回放和 OpenAI Responses API 的 SSE 帧加固。 |
| **#18522** | feat(core): fix Gemini/Vertex long-stream transport and support native multimodal tool outputs | HaveAnApplepie | OPEN | 通过捆绑的 `undici` 调度器和 header 追踪改善 Google GenAI/Vertex AI 传输路由。 |
| **#18543** | feat(web-shell): decouple ChatEditor daemon toolbar and upload imports (slice 6b) | wenshao | OPEN | 实现统一聊天界面路线图的 slice 6b，将共享编辑器组件与 daemon-only 工具栏导入解耦。 |
| **#18559** | feat(managed-agent): Wake MySQL session resource GC via RocketMQ | doudouOUC | CLOSED | 通过 RocketMQ 消息添加可选的 MySQL 会话资源垃圾回收。 |

---

## 5. Feature Request Trends

社区最强烈的功能需求集中在四个方向：

| 主题 | 证据 | 优先级 |
|-------|----------|----------|
| **Managed Agent 调度** | #18514（拉取调度）, #18561（设计文档）, #18544（worker 共享） | P2 |
| **会话管理** | #18541（可信工作区的分支/fork）, #18527（会话颜色分组） | P2 |
| **Windows 平台一致性** | #17489（settings 热重载）, 通用 Windows CI 故障 | P2 |
| **Web Shell 体验** | #18508（artifact 导航）, #18553（分支警告）, #18515（草稿保存） | P2-P3 |

---

## 6. Developer Pain Points

### 🔴 CI 可靠性危机

仓库正经历大范围的 CI 不稳定性：
- **E2E 测试失败** 跨多个测试套件（#18342 收到 61+ 评论）
- **Managed Agent gate 失败** 出现在 Java SDK 流水线
- **CVE 审计自动化** 失败（#18397）
- **测试分发 observer** 导致 PTY 循环争用（#18568）

**影响：** PR 交付周期延长；开发者花大量时间在故障排查而非开发上。

### 🟠 性能回退

- **v0.28.7 事件循环冻结**（#18489）：worktree retention 中的 O(N²) 算法导致大型项目冻结 6-8 分钟
- **Worktree 快照频繁换入换出**：保留期间产生多 GB 级别的后台 I/O

### 🟡 跨平台缺口

- **Windows**：Settings 热重载失效（#17489）
- **Linux Desktop**：AppImage 在现代 Mesa 上无法渲染（#18486）

### 🟢 体验摩擦

- **Ink TUI 状态丢失**（#18492）：滚动时忘记已勾选项和输入内容
- **Web shell 会话颜色** 在次级工作区缺失（#18527）
- **开发者指南使用 npm** 而非 pnpm（#18524）

---

## 7. Quick Stats

| 指标 | 数值 |
|--------|-------|
| 总 Issue 数 | 50 |
| 总 PR 数 | 50 |
| 已关闭 Issue（24h） | 9 |
| 已合并 PR（24h） | 5 |
| P1 Issue | 1 |
| P2 Issue | 8 |
| 活跃 CI 故障 | 12+ |

---

*周报数据来源：2026-11-28 github.com/QwenLM/qwen-code 活动记录*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*