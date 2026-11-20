# AI CLI 工具社区动态日报 2026-11-20

> 生成时间: 2026-11-20 03:41 UTC | 覆盖工具: 7 个

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

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly
3. Keep URLs, project names, repo slugs, version tags, numbers, dates, issue/PR references as-is
4. Use natural technical Chinese appropriate for a Chinese developer newsletter

Let me carefully translate this report, section by section, maintaining the structure and using appropriate Chinese technical terminology.

Let me work through this carefully:

Title: AI CLI Tools Ecosystem — Cross-Tool Comparison Report
→ AI CLI 工具生态：跨工具对比报告

Date: 2026-11-20
Scope: Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Pi · Qwen Code
→ 范围：Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Pi · Qwen Code

Section 1: Ecosystem Overview
The AI CLI tools ecosystem is in a vigorous, overlapping expansion phase. All seven tools are actively iterating, with OpenAI Codex and Qwen Code shipping the most releases today while Claude Code and GitHub Copilot CLI push critical reliability fixes. The dominant community themes converge around three vectors: **multi-account and credential management**, **terminal/platform reliability** (especially on Windows and Linux), and **prompt cache/token efficiency**. Notably, the ecosystem is bifurcating along the "solo developer tool" vs. "enterprise team platform" axis — some tools are racing toward collaborative features while others double down on individual developer throughput. The volume of MCP-related issues across Codex, Copilot CLI, and Gemini CLI signals that the Model Context Protocol has become a first-class extensibility primitive, with its OAuth and security model under active scrutiny across multiple communities.

AI CLI 工具生态正处于一个充满活力且相互交叠的扩张阶段。七款工具均在积极迭代，其中 OpenAI Codex 和 Qwen Code 今日发布量最大，而 Claude Code 和 GitHub Copilot CLI 则专注于关键可靠性修复。社区主流话题围绕三条主线汇聚：**多账户与凭证管理**、**终端/平台可靠性**（尤其是 Windows 和 Linux），以及**提示词缓存/Token 效率**。值得注意的是，当前生态正沿着两条轴线分化——

"独立开发者工具"与"企业团队平台"——部分工具竞相推出协作功能，另一部分则深耕个人开发者效率。Codex、Copilot CLI 和 Gemini CLI 中大量的 MCP 相关 issue 表明，Model Context Protocol 已成核心扩展机制，其 OAuth 和安全模型正受到多个社区的严格审查。

接下来需要建立活动对比表格，涵盖各工具的 issues 活跃度、PR 提交量、讨论热度、版本发布频率和稳定性评估，同时保留原始项目名称和版本标识。

表格包含七款工具——Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、OpenCode、Pi 和 Qwen Code——从 issue 数量、PR 合并、讨论板活跃度、版本稳定性等多个维度进行对比，每项数据都用冒号标记格式对齐。

OpenAI Codex 和 Qwen Code 在发布频率上最为突出，Gemini CLI 保持稳定的预览版本发布节奏，而 OpenCode、Pi 和 Qwen Code 虽然代码活跃但没有频繁发布新版本。

Discussions 的使用情况因工具而异——Codex 和 Gemini CLI 在 Ideas、Q&A 和 Show and Tell 等分类上表现活跃，而 Claude Code 和 Qwen Code 的讨论数据未被监测到。

OpenAI Codex 在发布活跃度上领先，24 小时内发布了 4 个版本，涵盖稳定版和 alpha 测试版，反映出其快速的功能迭代和模型更新节奏。

Gemini CLI 则以夜间和预览版本为主，展现出成熟的构建流程。Pi 和 Qwen Code 虽然没有新版本发布，但 issue 和 PR 队列保持活跃，表明两者都在持续推进功能开发——Pi 关注终端改进，Qwen Code 则在动态工作流和安全修复方面有所进展。

OpenCode 同样没有版本更新，但跨 issues、PR 和 discussions 的活跃度保持稳定。Discussions 功能在除 Claude Code 和 Qwen Code 外的所有工具中得到应用，其中 OpenAI Codex 和 Gemini CLI 在社区参与度上领先，采用 Ideas/Q&A/Show and Tell 的分类体系。共享功能方向方面，多个工具社区独立提出了多账户凭证管理的需求。

这五个工具都面临同一核心挑战：开发者和团队需要管理多个 API 账户（工作与个人、多云环境），同时避免账户间的数据污染。具体表现为：项目级凭证激活中的计费上下文泄露、基于配置文件夹的账户切换、基于使用量的账户轮换机制，以及在不同凭证下运行时符号链接的代理文件无法识别问题。

这个跨工具的功能需求已经汇聚成一个明确的信号，预计在2-3个发布周期内会发展为所有工具的标准功能。同时，OpenAI Codex、GitHub Copilot CLI、Gemini CLI 和 Claude Code 的社区都面临 MCP 可靠性与安全性的问题。

MCP已成为主要的扩展机制，但其 OAuth 实现正面临挑战——令牌刷新失败、第三方 MCP 服务器认证缺陷、元数据重定向处理不符合 RFC 规范，以及信任绕过问题。

此外，多代理场景下跨提供商的兼容性也需要解决，OpenAI 特定的协议项可能与 Ollama 及外部系统产生冲突。

Token 效率方面，Claude Code、Gemini CLI、Pi 和 Qwen Code 的社区都在关注上下文窗口管理问题。

这包括工具目录臃肿导致每次请求都发送完整应用列表、某些模型如 GPT-6.2 Sol 和 Pi OpenAI Decisions 的缓存回归、跨状态变化的缓存持久性问题，以及空闲时的缓存预热策略。Token 效率已从可选优化演变为核心工程能力，各工具正在围绕缓存命中率展开竞争。

终端和平台兼容性方面，Claude Code、Gemini CLI、OpenCode、Pi 和 Qwen Code 的社区都报告了大量终端和跨平台问题。Windows 和跨平台终端状态管理是最活跃的 bug 类别，主要集中在鼠标追踪在退出后仍然泄漏、Windows 特有的失败场景（截图、同步、输入消失）、Shell 权限绕过，以及异步启动性能等方面。

平台覆盖范围越广，维护成本越高，这直接拖慢了核心功能的开发进展——平台范围较窄的工具反而没有这类问题。

协作和团队功能的讨论也在多个工具社区中出现，包括 Claude Code 的共享团队内存需求（35 条评论、11 个赞同，是目前最高赞的未实现功能）、Pi 的会话分享机制，以及 Codex 的线程保留策略。

此外还有 Codex 的远程 MCP 演示、Qwen Code 的 ACP 多代理能力，以及多代理协调的相关讨论。这表明竞争焦点正从"个人开发者效率"转向"团队工作流整合"，共享内存和会话交接成为最迫切的需求。

各工具在主要焦点、目标用户和技术实现上存在明显差异——Claude Code 侧重开发者可靠性和工具质量，采用 Anthropic API 集成和协同模式；OpenAI Codex 则强调模型灵活性和可扩展性，支持多模型目录和外部代理协议；Gemini CLI 追求成本效率和可观测性，利用 Gemini 模型和战术/战略代理模式；GitHub Copilot CLI 专注于 GitHub 生态系统的集成，依赖原生认证和技能市场。

OpenCode 面向高级开发者，提供多提供商和跨平台支持；Pi 强调轻量级和终端原生体验，采用守护进程优先架构；Qwen Code 则针对企业级 CI/CD 场景，配备动态工作流和 Java SDK。OpenCode 在提供商覆盖范围上最为广泛，支持超过 15 种模型，而 Pi 通过其守护进程优先设计和 ACP 协议，展示了独特的技术路径。

Qwen Code 的 CI 基础设施和托管代理框架适合已建立 CI/CD 成熟度的团队，Gemini CLI 则在成本可观测性和模型原生功能上实现差异化。在社区活跃度方面，OpenAI Codex 凭借最高的发布量和模型目录扩展领跑，而 Qwen Code 吸引了大量企业用户和 DevOps 贡献者。

OpenAI Codex 的发布速度最快，24 小时内发布 4 个版本，涵盖稳定版到 alpha 预发布版，展示了高效的夜间到稳定版发布流程。Claude Code 的稳定版本包含有意义的变更日志，专注于透明性和上下文可见性的改进。OpenAI Codex 建立了最完善的讨论分类体系，在 Ideas/Q&A/Show and Tell 等板块上保持活跃，并拥有活跃的生态系统展示。

Pi 社区中开发者将其作为可编程代理后端，通过 Telegram 等渠道集成。Qwen Code 则采用成熟的多层级测试文化，包括托管代理、端到端、单元和 CVE 审计。

在新兴社区中，Gemini CLI 用户群体较小但技术参与度高，提出的功能请求如 AST 感知文件操作和零依赖沙箱机制表明用户需求相当复杂。

OpenCode 正从利基工具向多提供商平台演进，多账户轮换和浏览器 API 等功能显示出其不断扩大的应用范围。Qwen Code 的 CI 稳定性问题——包括托管代理门禁的可操作性不足、hz3 inode 底数限制和 Windows 环节的盲点——正在削弱合并信心，尽管社区在积极调试但积压问题仍然突出。Claude Code 缺少结构化的讨论渠道，导致社区创意和生态系统展示缺乏官方出口，限制了有机发展。GitHub Copilot CLI 则面临免费套餐的挫败感。

在趋势信号方面，MCP 已演变为一级平台原语。Codex、Copilot CLI、Gemini CLI 和 Qwen Code 中的 MCP 不再是扩展功能，而是成为了核心集成层，生态围绕远程 MCP 服务器构建用于电话、任务列表、社交发布、错误追踪和视频编辑等场景。

关键挑战在于 OAuth 安全和跨提供商信任模型——Qwen Code 的信任绕过漏洞和 Copilot CLI 的 OAuth 可靠性问题表明，现有的 AUTO 模式分类器方法存在结构性缺陷，需要重新设计。提示词缓存效率也已成为新的竞争维度，Token 成本和延迟正在推动架构决策演变。

各工具开始在缓存命中率上展开竞争，这是评估成本效率和延迟的核心指标。模型感知的缓存管理正在形成新的设计模式，不同模型表现出差异化的缓存行为——GPT-6.2 Sol 出现回归、OpenAI Decisions 缓存降为零、Gemini CLI 支持可配置的热身周期。预计未来 2-3 个发布周期内会推出按模型分类的缓存统计和用户可控的缓存策略配置。

从个人工具向团队协作的转型正在成为新的竞争战场。

Claude Code 的团队共享内存需求是该领域最活跃的功能请求，聚集了大量评论和支持。各工具正独立演进解决方案——Claude Code 侧重内存共享与上下文转移、Qwen Code 推进 ACP 多代理协议、OpenAI Codex 探索线程保留策略、Pi 开发 ACP 守护进程会话。这些差异化路径反映了不同的协作哲学和技术架构选择。

Windows 平台可靠性是当前最突出的问题。Claude Code 的讨论中出现了大量平台特定 bug，包括协作文件同步、MSIX 内存泄漏、屏幕截图、输入法兼容性和 PowerShell UI 冻结等多个维度。

这不仅是单一问题，而是跨终端仿真层在 Windows Terminal、PowerShell、cmd.exe 和 WSL 间的结构性复杂性。

TUI 正在成为新的产品形态。OpenAI Codex 推出了带可搜索预览和子代理转录的 TUI 工作区，Pi 采用守护进程优先架构，Gemini CLI 提供 `/stats` 热力图，Claude Code 则通过钩子透明度对话框提升可观测性。竞争焦点正在从功能集转向 TUI 内的终端体验可见性。

各厂商都在强化 token 使用可视化、会话状态展示、子代理轨迹和回滚管理等方面的投入。Qwen Code 和 Pi 分别通过按需加载和回滚重绘优化来提升性能，这些都反映出对终端用户体验的重视。

企业级功能正从路线图走向交付。GitHub Copilot CLI 的企业模式访问、OpenCode 的多账户轮换、Qwen Code 的 CI 门控工作流和 Claude Code 的托管设置等功能已经落地或进入高级审查阶段。这表明 AI CLI 工具正在经历从开发者工具向团队基础设施的转变，对项目隔离、可审计性、凭证管理和策略执行的需求也随之增加。

根据当前趋势，这个转变周期大约需要 12-18 个月，目前生态系统已处于这个周期的第 9-12 个月阶段。

另一个值得关注的动向是 AI CLI 正演变为可编程后端。Pi 的开发者通过 Telegram 等渠道将其作为常驻个人代理使用，这代表了工具定位的转变——不再只是交互式界面，而是后台服务基础设施。OpenAI Codex 的 ACP 外部代理协议和 Qwen Code 的托管代理框架都在支持这种模式，使得 AI CLI 能够与托管代理服务在隐私敏感、自托管或成本敏感的场景下展开竞争。

所有数据均来自 2026-11-20 这七个公开 GitHub 仓库的活动记录。活跃度指标仅反映 24 小时内的更新情况，不一定反映仓库的总体规模。

现在需要逐一检查表格格式确保翻译准确无误，issue 和 PR 编号保持原样，所有 API 名称、版本号、配置标识符都不做翻译，同时使用自然流畅的中文技术表达方式，避免逐字翻译的生硬感。

让我再过一遍某些段落的表达——比如"overlapping expansion phase"应该翻译成"相互交叠的扩张阶段"更符合中文习惯，"under active scrutiny"可以理解为"受到严格审视"，"structural flaw"翻成"结构性缺陷"而不是字面意思的"结构缺陷"会更专业，API 相关的表述用"上下文泄露"也比"上下文泄漏"更地道。

对于"MCP-related issues"和"MCP issues"这两个表述，需要根据上下文判断——前者强调"与 MCP 相关的"，后者就是"MCP 问题"，在技术文档中两种译法都很常见。我倾向于保持一致，"MCP 相关 issue"用于前者，"MCP issue"用于后者，这样区分更清晰。

表格部分的翻译也需要注意，"Issues (updated)"翻成"更新 Issues"，"Releases (24h)"翻成"24h 内 Releases"——虽然听起来有点翻译腔，但在中文技术文档中这种表述很标准。至于项目名称如 GitHub Copilot CLI 和 Google Gemini CLI，保持英文原名不加空格更符合中文技术社区的惯例。

现在要仔细通读一遍，确保翻译流畅自然，同时保持技术准确性。
</think>


# AI CLI 工具生态：跨工具对比报告

**日期：** 2026-11-20
**范围：** Claude Code · OpenAI Codex · Gemini CLI · GitHub Copilot CLI · OpenCode · Pi · Qwen Code

---

## 1. 生态概览

AI CLI 工具生态正处于一个充满活力且相互交叠的扩张阶段。七款工具均在积极迭代，其中 OpenAI Codex 和 Qwen Code 今日发布量最大，而 Claude Code 和 GitHub Copilot CLI 则专注于关键可靠性修复。社区主流话题围绕三条主线汇聚：**多账户与凭证管理**、**终端/平台可靠性**（尤其是 Windows 和 Linux），以及**提示词缓存/Token 效率**。值得注意的是，当前生态正沿着两条轴线分化——"独立开发者工具"与"企业团队平台"——部分工具竞相推出协作功能，另一部分则深耕个人开发者效率。Codex、Copilot CLI 和 Gemini CLI 中大量的 MCP 相关 issue 表明，Model Context Protocol 已成核心扩展机制，其 OAuth 和安全模型正受到多个社区的严格审视。

---

## 2. 活跃度对比

| 工具 | 仓库 | 更新 Issues 数 | 更新 PRs 数 | Discussions | 24h 内 Releases |
|------|------|:--------------:|:-----------:|:-----------:|:---------------:|
| Claude Code | `anthropics/claude-code` | ~50 | ~50 | 未测量 | 1 稳定版 |
| OpenAI Codex | `openai/codex` | ~50 | ~50 | 6 条活跃 | 4（1 稳定 + 3 alpha） |
| Gemini CLI | `google-gemini/gemini-cli` | ~50 | 25 | 4 条活跃 | 2（1 夜间版 + 1 预览版） |
| GitHub Copilot CLI | `github/copilot-cli` | ~50 | ~50 | 3 条活跃 | 2 稳定版 |
| OpenCode | `anomalyco/opencode` | ~50 | ~50 | 3 条活跃 | 0 |
| Pi | `earendil-works/pi` | ~45 | 18 | 3 条活跃 | 0 |
| Qwen Code | `qwenlm/qwen-code` | ~50 | ~50 | 未测量 | 0 |

**解读：**

- **OpenAI Codex 和 Qwen Code** 是按发布量计增速最高的两款项目。Codex 在 24 小时内发布了 4 个版本，反映出模型目录（GPT-6.2 Sol、Astra）和 TUI 功能工作的高强度推进。
- **Gemini CLI** PR 活跃度中等（约为 issue 的一半），但持续稳定地发布夜间版/预览版，构建流水线已相当成熟。
- **Pi 和 Qwen Code** 今日无新版本发布，但其 issue 和 PR 队列仍保持活跃——两项目均在积极开发功能（Pi：终端修复；Qwen Code：动态工作流、安全补丁）。
- **OpenCode** 与 Qwen Code 模式相似：无版本发布，但 issue、PR 和 Discussions 三个维度均保持高密度活跃。
- **Discussions 频道** 除 Claude Code 和 Qwen Code（未测到今日活跃）外，其余工具均有使用。OpenAI Codex 和 Gemini CLI 在社区结构化参与方面领先（Ideas / Q&A / Show and Tell 三分类法）。

---

## 3. 共同的功能方向

以下需求在多个社区中独立出现，表明它们是整个生态的共同诉求：

### 多账户与凭证管理
**涉及工具：** OpenAI Codex、GitHub Copilot CLI、OpenCode、Pi、Qwen Code

五款工具面临同一个核心问题：个人开发者和团队需要在多个 API 账户（工作 vs. 个人、多云）之间切换，且不能产生交叉污染。具体表现包括：

- **项目级凭证激活**（Copilot CLI #51152、OpenCode）——计费上下文在项目间泄露
- **基于配置文件夹的账户切换**（OpenCode #62514、#64580；Copilot CLI #25737）
- **基于使用量的账户轮换**（OpenCode #65035——当一个配置文件夹触达限额时自动切换到下一个）
- **会话级身份验证**（Gemini CLI）——符号链接的代理文件在不同凭证下无法识别

**收敛信号：** 这是跨工具出现次数最多的功能需求。可以预期在 2~3 个发布周期内，它将成为所有工具的一类功能。

### MCP/OAuth 可靠性与安全
**涉及工具：** OpenAI Codex、GitHub Copilot CLI、Gemini CLI、Claude Code

MCP 现已是主导的扩展机制，其 OAuth 实现正在承压：

- **静默 Token 刷新失败**（Copilot CLI #4203、Codex）——Token 过期后应自动刷新，实际却触发了交互式流程
- **非第一方服务器认证**（Copilot CLI #4017）——第三方 MCP 服务器的 OAuth 在无报错的情况下静默失败
- **Metadata 重定向处理**（Copilot CLI #4769）——违反 RFC 的重定向行为导致合规服务器出错
- **AUTO 模式下信任绕过**（Qwen Code #17854，P1 安全级别）——服务器级信任完全跳过 LLM 分类器
- **多 Agent 跨提供商的兼容性**（Codex #33551）——OpenAI 专有的 `agent_message` 条目在 Ollama 和外部提供方上无法工作

**收敛信号：** MCP 安全性和 RFC 合规性是共同痛点。Qwen Code 信任绕过的发现尤为关键——它暗示所有使用 AUTO 模式分类器的工具都存在结构性缺陷。

### Token 效率与提示词缓存管理
**涉及工具：** OpenAI Codex、Claude Code、Gemini CLI、Pi、Qwen Code

上下文窗口管理是普遍关注点，表现为：

- **工具目录膨胀**（Codex #61679——每次请求都发送完整 Apps 目录；Gemini CLI——工具作用域问题）
- **缓存未命中回退**（Codex GPT-6.2 Sol：从 12,800 缓存 Token 降为 3,968；Pi OpenAI Decisions：缓存降至零）
- **跨状态变化的缓存持久性**（Pi #12269——思考级别变化后缓存中断；Codex compact 恢复机制）
- **空闲缓存预热窗口**（Gemini CLI #11127——后台缓存刷新的可配置 TTL）

**收敛信号：** Token 效率已从加分项升级为工程核心 discipline。各工具正在将缓存命中率作为成本效率和延迟的代理指标展开竞争。

### 终端与平台可靠性
**涉及工具：** Claude Code、Gemini CLI、OpenCode、Pi、Qwen Code

Windows 和跨平台终端状态管理是单一最大 bug 类别：

- **退出后鼠标追踪泄漏**（Pi #12133、#12336、#12339；Claude Code Windows 问题）
- **Windows 特有故障**（Codex 截图捕获、Cowork 同步、dots 输入消失；Qwen Code CI Windows 分支；Gemini CLI Wayland）
- **Shell 权限绕过**（OpenCode PowerShell；Claude Code 非交互环境下的 hooks）
- **异步启动性能**（Copilot CLI #5090；Gemini CLI）

**收敛信号：** 平台覆盖范围越广，维护成本越高，这直接拖慢了核心功能开发。平台范围较窄的工具（Pi、Gemini CLI）平台类 bug 更少。

### 协作与团队功能
**涉及工具：** Claude Code、Gemini CLI、OpenAI Codex、Qwen Code

从个人工具到团队平台的迁移正在进行：

- **共享团队记忆**（Claude Code #38536，35 条评论，11 👍——当前最高赞的未实现功能需求）
- **会话共享与协作**（Pi `/chat share`；Codex 线程保留策略；Qwen Code ACP 多 Agent）
- **远程 MCP 供团队服务使用**（Codex 远程 MCP 演示：电话、任务列表、社媒发帖、错误追踪）
- **多 Agent 协调**（Codex #33551；Gemini CLI 子 Agent 改进；Qwen Code Agent 循环）

**收敛信号：** 竞争前沿正从"个人开发者生产力"转向"团队工作流集成"。共享记忆和会话交接是最受期待的团队功能。

---

## 4. 差异化分析

| 工具 | 核心焦点 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 开发者可靠性 + 工具质量 | 个人到小团队 | Anthropic API 集成；cowork 结对编程模式；扎实的安全过滤器生态 |
| **OpenAI Codex** | 模型灵活性 + 可扩展性 | 模型无关的开发者 | 多模型目录（GPT-6.2 Sol/Astra、Gemini、DeepSeek）；TUI 工作区；ACP 外部 Agent 协议 |
| **Gemini CLI** | 成本效率 + 可观测性 | Google Cloud 周边开发者 | Gemini 模型；`/stats heatmap`；战术 vs. 战略 Agent 模式；skill/子 Agent 调用 |
| **GitHub Copilot CLI** | GitHub 生态集成 | GitHub 用户、企业团队 | 原生 GitHub 认证；MCP OAuth；技能市场；订阅层级模型访问 |
| **OpenCode** | 多提供方 + 跨平台 | 高级开发者、资深用户 | 15+ 模型提供方；MCP + 插件；多账户轮换；内置浏览器；本地模型支持 |
| **Pi** | 轻量化 + 终端原生 | 低开销开发者 | 守护进程优先架构；持久化会话；ACP 协议；轻量 TUI；xterm 集成 |
| **Qwen Code** | 企业 CI/CD + 自动化 | 有现成基础设施的工程团队 | Managed Agent 框架；动态工作流；深度 CI 集成；Java SDK；全层级测试套件 |

**关键差异化要素：**

- **OpenCode** 是提供方无关性最强的（15+ 模型），以广度而非某一集成的深度参与竞争。
- **Pi** 占据轻量化细分市场——其守护进程优先设计和 ACP 协议使其成为嵌入外部工具（编辑器、CI 流水线）的理想后端。讨论区显示有开发者将其作为可编程 Agent 后端使用。
- **Qwen Code** 是独特的 CI 中心化工具——其整个发布流程围绕门控测试套件（Managed Agent、E2E、单元、CVE 审计）运转，路线图明确以"动态工作流开箱即用"为目标。这使其最适合已有 CI/CD 成熟度的团队。
- **Gemini CLI** 以成本可观测性（`/stats heatmap`）和模型原生功能（思考级别、战术/战略模式）而非可扩展性作为差异化点。
- **Claude Code** 在独立开发者体验上保持最强（cowork、安全过滤器），但在团队记忆功能上明显落后于社区需求。

---

## 5. 社区活跃度与成熟度

### 社区活跃度最高
1. **OpenAI Codex** — 原始活跃量最高（4 个发布、50+ Issues、50+ PRs、6 条 Discussions）。TUI 工作区上线和模型目录扩展引发了强烈的社区互动。Ecosystem Showcase（Show and Tell 板块）展现了繁荣的插件/子 Agent 社区。
2. **Qwen Code** — PR 和 Issue 密度高，拥有大量技术用户群体。Managed Agent 框架吸引企业用户；CI 基础设施定位吸引 DevOps 导向的贡献者。

### 迭代速度最快
1. **OpenAI Codex** — 24 小时内发布 4 个版本，包含一个稳定版和三个 alpha/预览版构建。夜间构建到稳定版的流水线是整个生态中最活跃的。
2. **Claude Code** — 稳定版发布附有实质性 changelog（hooks 透明度、会话上下文可见性）。最近的 v2.1.329 解决了一些长期存在的 UX 痛点。

### 社区结构最成熟
- **OpenAI Codex** — 讨论区分类组织最完善（Ideas / Q&A / Show and Tell），生态展示活跃（Awesome Codex 列表），社区构建工具公开分享量高。
- **Pi** — Show and Tell 社区氛围强，开发者将 Pi 作为可编程 Agent 后端使用，场景涵盖个人助手、Telegram Bot 和嵌入式工作流。
- **Qwen Code** — 成熟的多层级门控测试贡献文化（Managed Agent、E2E、单元、CVE 审计）。

### 新兴社区
- **Gemini CLI** — 规模较小但技术参与度高。AST 感知文件操作（#22745）和零依赖沙箱（#19873）等功能请求表明用户需求相当专业。
- **OpenCode** — 正从资深用户工具向更广泛的多提供方平台演进。多账户轮换（#65035）和浏览器 API（#59787）标志着其边界在扩展。

### 需关注的领域
- **Qwen Code** — CI 不稳定（Managed Agent gate 无可操作信息、`hz3` inode 底数、Windows 分支盲点）正在侵蚀合并信心。社区正在积极调试，但积压问题突出。
- **Claude Code** — 缺乏结构化 Discussions 频道意味着社区创意和生态展示没有官方出口，限制了有机发现。
- **GitHub Copilot CLI** — 免费套餐挫败感（#5283，6 👍）和 OAuth 可靠性问题（#4017、#4203）表明入门和企业部署体验存在摩擦。

---

## 6. 趋势信号

### 1. MCP 已成一级平台原语
在 Codex、Copilot CLI、Gemini CLI 和 Qwen Code 中，MCP 不再是扩展功能——它就是主集成面。生态正在为电话、任务列表、社媒发帖、错误追踪和视频剪辑构建远程 MCP 服务器。这复刻了开发者工具中从"插件"到"协议"的转移。关键未解决的是 **OAuth 安全性和跨提供方信任模型**——Qwen Code 信任绕过发现（#17854）和 Copilot CLI 的 OAuth 可靠性问题表明，当前的 AUTO 模式分类器方案存在需要重新设计的结构性弱点。

### 2. 提示词缓存效率是竞争维度
Token 成本和延迟正在驱动架构决策。各工具正以缓存命中率作为一类指标展开竞争（Codex、Pi、Claude Code 均有关键的缓存相关修复）。新兴模式是**模型感知缓存管理**：不同模型有不同的缓存行为（GPT-6.2 Sol 回退；OpenAI Decisions 归零；Gemini CLI 有可配置预热窗口）。预计在 2~3 个发布周期内，各工具将开放按模型维度的缓存统计和用户可配置的缓存策略。

### 3. 从个人到团队是下一竞争战场
Claude Code 共享团队记忆请求（#38536，35 条评论）是七款工具中参与度最高的未实现功能需求。每款工具都在独立发现：个人开发者效率已趋近饱和，下一个增长向量是团队协作。不过各工具路径不同：
- **Claude Code** → 共享记忆和上下文传递
- **Qwen Code** → ACP 多 Agent 协议和动态工作流
- **OpenAI Codex** → 线程保留策略和外部 Agent 集成
- **Pi** → ACP 守护进程会话和可移植工作流分享

### 4. Windows 是平台可靠性的主要短板
Claude Code、OpenAI Codex、Gemini CLI、Qwen Code 和 OpenCode 的活跃 Issue 队列中，平台特有 bug 均占主导。Windows 特有故障包括：Cowork 文件同步、MSIX 内存泄漏、截图捕获、dots 输入消失、PowerShell UI 冻结、SSL/TLS 证书链验证以及鼠标追踪泄漏。Linux（Wayland、inotify 耗尽）和 macOS（辅助功能遍历、沙箱限制）也有平台特有故障，但 Windows 占平台类 bug 报告的多数。这是一个结构性问题——跨平台 TUI 开发难度大，终端模拟层在 Windows Terminal、PowerShell、cmd.exe 和 WSL 之间差异显著。

### 5. TUI 是差异化要素
TUI 不再是终端附庸——它是一个产品面。OpenAI Codex 的 TUI 工作区（可搜索预览、图片预览、子 Agent 转录）、Pi 的守护进程优先架构、Gemini CLI 的 `/stats heatmap`、Claude Code 的 hooks 透明度对话框都代表对终端 UX 的投入。竞争前沿在于 **TUI 内的可观测性**：Token 使用可视化、会话状态展示、子 Agent 轨迹可见性和滚动历史管理。按需加载（Qwen Code #17840）和滚动重绘防刷新（Pi #12275）表明该领域的性能意识已到位。

### 6. 企业功能正从路线图走向交付
GitHub Copilot CLI 的企业模型访问、OpenCode 的多账户轮换、Qwen Code 的 CI 门控工作流和 Claude Code 的托管设置都是已交付或处于高级评审阶段的企业功能。信号表明 **AI CLI 工具正从"开发者尝鲜"转向"团队基础设施"**——随之而来的是对项目级隔离、可审计性、凭证管理和策略执行的要求。这一转型从企业首次提出需求到功能稳定交付通常需要 12~18 个月。基于今日数据，生态大约处于该周期的第 9~12 个月。

### 7. AI CLI 作为可编程后端
Pi 的讨论区（#12331）展示了一位开发者将 Pi 作为常驻个人 Agent，通过 Telegram 访问——将 CLI 视为可编程后端而非交互工具。OpenAI Codex 的 ACP 外部 Agent 协议和 Qwen Code 的 Managed Agent 框架支持类似模式。这代表一个新类别：**AI CLI as 基础设施**，在隐私敏感、自托管或成本敏感场景下与托管 Agent 服务竞争。

---

**报告完**

*所有数据来源于 2026-11-20 上述七个公开 GitHub 仓库的公开活动记录。活跃度计数反映 24 小时窗口内更新的条目，可能不代表仓库总量。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

<think>The user wants me to translate the entire English technical report into Simplified Chinese, preserving all the Markdown structure exactly while keeping technical identifiers in their original form. I need to output ONLY the translation, no preamble or explanation.

Let me translate section by section:

1. Title and header
2. Section 1 - Top Skills Ranking (with the table)
3. Section 2 - Community Demand Trends (with the table)
4. Section 3 - High-Potential Pending Skills (with the table)
5. Section 4 - Skills Ecosystem Insight (block quote)

I'll use natural technical Chinese, appropriate for a developer newsletter style. I need to preserve:
- All URLs and link references
- All project names, usernames, file paths
- Version numbers, issue/PR numbers
- Emoji indicators
- Markdown formatting (tables, headers, etc.)
- The blockquote structure

Let me begin translating:
</think>


# Claude Code Skills 社区亮点报告

**数据截至：** 2026-11-20
**数据来源：** [anthropics/skills](https://github.com/anthropics/skills)

---

## 1. 热门 Skills 排行榜

以下 Skills（PR）按范围、复杂度和参与度而言代表了最为重要的贡献：

| # | Skill | 作者 | 状态 | 核心功能 |
|---|-------|--------|--------|-------------------|
| **#1742** | fix(mcp-builder): MCP≥2 HTTP 客户端支持 | Kuldeeep18 | OPEN | 更新 MCP 客户端导入路径（`streamablehttp_client` → `streamable_http_client`）及 MCP 协议 v2 的 Header 配置。 [[PR #1742](https://github.com/anthropics/skills/pull/1742)] |
| **#1298** | fix(skill-creator): 隔离触发评估，修复 Windows 支持 | MartinCajiao | OPEN | 解决评估框架中的误触发问题——修复 Windows 下的子进程管道处理，防止无关工具的干扰。 [[PR #1298](https://github.com/anthropics/skills/pull/1298)] |
| **#1245** | notion-spec-to-implementation + quantitative-resume-auditor | mrdesouzaphd-cmyk | OPEN | 两个新 Skill：(1) 将 Notion 产品规格转化为可执行的实现任务；(2) 基于量化指标审计简历。 [[PR #1245](https://github.com/anthropics/skills/pull/1245)] |
| **#1980** | webapp-testing: 移除 shell=True（CWE-78 修复） | Pcmhacker-piro | OPEN | 通过避免对未经清理的用户/代理字符串执行 shell 调用，消除 `with_server.py` 中的命令注入风险。 [[PR #1980](https://github.com/anthropics/skills/pull/1980)] |
| **#1792** | docx: LibreOffice 超时处理 + 输出验证 | TINGyu123644 | OPEN | 超时时返回 Error 而非虚假成功；验证 DOCX 输出无修订标记（`w:ins`、`w:del` 等）。 [[PR #1792](https://github.com/anthropics/skills/pull/1792)] |
| **#1771** | proofcore-contract-auditor | ProofCore-Protocol | OPEN | Solidity/Rust 智能合约静态分析；通过零存储 Merkle 协议将加密审计证明锚定至 TON 区块链。 [[PR #1771](https://github.com/anthropics/skills/pull/1771)] |
| **#525** | pyxel 复古游戏开发 Skill | kitao | OPEN | 指导 Pyxel 驱动的 Python 复古游戏的实现、无头测试和验证。 [[PR #525](https://github.com/anthropics/skills/pull/525)] |
| **#2019** | xlsx: 工作表作用域定义名称解析 | reginaldalfret | OPEN | 修复工作表作用域命名区域和别名的外部链接检测误报问题。 [[PR #2019](https://github.com/anthropics/skills/pull/2019)] |

---

## 2. 社区需求趋势

Issues 反映出以下领域的集中需求：

| 趋势 | 证据 | 优先级信号 |
|-------|----------|-----------------|
| **信任与安全治理** | #492（46 条评论）— 社区 Skill 以 `anthropic/` 命名空间分发，存在冒名顶替风险；用户可能在不知情的情况下授予过高权限。 | 🔴 紧急 |
| **组织级 Skill 共享** | #228（17 条评论）— 缺乏组织内共享技能的原生效机制；需要手动上传/下载。 | 🟠 高 |
| **评估基础设施** | #556（13 条评论）、#1352（6 条评论）— `run_eval.py` 显示 0% 触发率；并行工作进程导致 Skill UUID 损坏，产生系统性错误指标。 | 🔴 紧急 |
| **工具健壮性** | #1487 — `claude-api` Skill 单次调用注入约 156k tokens，导致上下文耗尽。 | 🟠 高 |
| **Skill 生命周期管理** | #62（10 条评论）— 文件重命名后 Skill 丢失；持久化和同步机制不清晰。 | 🟡 中 |

---

## 3. 高潜力待合并 Skills

这些 PR 具有活跃开发或显著范围，暗示近期合并可能性较高：

| PR | Skill | 近期可能合并的原因 |
|----|-------|----------------------|
| [#1681](https://github.com/anthropics/skills/pull/1681) | `skill-creator`：支持直接脚本执行 | 解决开发者体验痛点；更新于 2026-11-19（最新） |
| [#525](https://github.com/anthropics/skills/pull/525) | `pyxel` 复古游戏开发 | 明确的细分用例；更新持续至 2026-11-01 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | `md2video-audio` Markdown 转 MP4（带配音） | 创新的零成本视频流水线；在生态中独树一帜 |
| [#2108](https://github.com/anthropics/skills/pull/2108) | 明确 Skill 同步状态的文档 | 阐明快照/导出里程碑的维护 PR |
| [#1950](https://github.com/anthropics/skills/pull/1950) | `claude-api`：更新 Python pause_turn 指南 | SDK 1.1.0 变更了行为；文档过时引发困惑 |

---

## 4. Skills 生态系统洞察

> **社区最集中的需求在于稳健的评估工具链和安全意识驱动的 Skill 分发机制——修复用于衡量和把关 Skill 质量的底层基础设施，其紧迫程度不亚于推出新的 Skill。**

---

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:
1. Translate all the text content while preserving the Markdown structure
2. Keep URLs, numbers, issue references, code spans, version tags, etc. as-is
3. Use natural technical Chinese suitable for a Chinese developer newsletter
4. Output ONLY the translation, no markdown fences, no preamble

Let me translate section by section:

**Title:** Claude Code Community Digest
**Date:** 2026-11-20

**Today's Highlights:**
- v2.1.329 发布带来了钩子透明度改进，新增了显示文件夹钩子声明的信任对话框，并提升了非交互环境的错误可见性。
- 影响 VS Code/WSL 用户的重大网络可靠性问题 (#69415) 已解决，受影响的开发者恢复了可用性。
- 一项重要的 PR 提案 (#111198) 旨在防止对分叉 Pull Request 处理 @claude 提及，解决安全和成本问题。

**Releases:**
- **v2.1.329** - 三个关键改进：
  - **钩子信任对话框**: 新增警告对话框，显示文件夹钩子的声明位置，提升开发者透明度
  - **非交互主机警告**: 在 Claude Desktop 和其他非交互环境中托管设置的钩子加载失败时，添加明确警告
  - **会话上下文可见性**: 显示计划任务、`/loop` 唤醒和当前目标信息

**Hot Issues:**
1. [BUG] API 错误：连接在响应中途关闭 — VS Code/WSL [#69415] ✓ 已关闭


2. 功能请求：Claude Code 的共享团队记忆功能 [#38536]
3. [BUG] Cowork：device_commit_files 报告成功但内容滞后一次提交 [#93482]
4. [BUG] Windows MSIX Desktop：通过 bindflt.sys 的内核非分页池泄漏 [#96870]
5. [BUG] 桌面应用上的聊天响应完成通知无声 [#95593]
6. [BUG] mcp__claude-in-chrome__file_upload 工具

The list continues with various bug reports and feature requests, focusing on issues related to the Claude Code desktop application, shared memory functionality, and file synchronization problems across different platforms.

7-30. 安全过滤器误报（多个问题）[#94159] 等。

开发团队在多个关键领域寻求改进。平台可靠性仍是一个主要关注点，包括 Windows 平台、Cowork、MSIX 和桌面通知等方面存在的不稳定问题。钩子和配置的透明度也是用户关注的重点，需要清晰展示钩子声明位置、托管设置与本地配置的交互方式，以及会话状态和计划任务信息。

开发者面临几个关键痛点。VS Code 和 WSL 的网络可靠性问题已解决，但 Windows 平台存在碎片化问题，Cowork、MSIX 和桌面通知都出现了特定的 bug。安全过滤器的过度敏感导致误报，影响了嵌入式系统开发、安全工具配置和基础设施脚本的正常工作。共享团队记忆功能缺乏支持也成为采用企业级解决方案的障碍。
</think>


# Claude Code 社区动态

**日期：** 2026-11-20

---

## 今日要点

v2.1.329 版本带来了钩子透明度的改进，新增了显示文件夹钩子声明位置的信任对话框，并提升了对非交互式环境的错误可见性。影响 VS Code/WSL 用户的重大网络可靠性问题 (#69415) 已得到解决，受影响的开发者恢复了正常使用。一项重要的 PR 提案 (#111198) 旨在防止对来自分叉仓库的 Pull Request 处理 @claude 提及，解决安全和成本问题。

---

## 版本更新

### v2.1.329

本次发布包含三个关键改进：

- **钩子信任对话框**：新增警告对话框，显示文件夹钩子的声明位置，提升开发者对钩子配置行为的透明度
- **非交互主机警告**：在 Claude Desktop 和其他非交互环境中托管设置的钩子加载失败时，添加明确的警告提示
- **会话上下文可见性**：新增计划任务、`/loop` 唤醒信息和当前目标信息的展示

[版本详情](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

---

## 热门 Issues

### 1. [BUG] API 错误：连接在响应中途关闭 — VS Code/WSL [#69415](https://github.com/anthropics/claude-code/issues/69415) ✓ 已关闭
**57 条评论 · 89 个 👍**

近期讨论度最高的问题终于得到解决。用户反馈频繁出现"连接在响应中途关闭"错误，导致 Claude Code 无法执行任何有意义的任务。89 个赞的高参与度反映了该问题的严重性——这是一个影响 Windows 上使用 VS Code 搭配 WSL 的开发者的阻塞性问题。

---

### 2. 功能请求：Claude Code 共享团队记忆功能 [#38536](https://github.com/anthropics/claude-code/issues/38536)
**35 条评论 · 11 个 👍**

这是一个备受期待的功能提案，建议增加团队范围的记忆能力。目前 Claude Code 的记忆功能仅限个人使用，在团队交接、代码评审和协作调查时造成了摩擦。该提案强调，知识在工程师之间持续流动，但没有任何上下文能够自动传递。这已成为企业采用讨论的核心焦点。

---

### 3. [BUG] Cowork：device_commit_files 报告成功但内容滞后一次提交 [#93482](https://github.com/anthropics/claude-code/issues/93482)
**28 条评论 · 2 个 👍**

Cowork 功能中 Windows 特定的数据一致性问题。该问题描述了一个静默的陈旧写入问题：磁盘上的内容比 API 报告成功的内容正好滞后一次提交。可提供复现步骤，使这成为 Windows 上 Cowork 用户的高优先级问题。

---

### 4. [BUG] Windows MSIX Desktop：通过 bindflt.sys 的内核非分页池泄漏 [#96870](https://github.com/anthropics/claude-code/issues/96870)
**19 条评论 · 6 个 👍**

特定于 Windows MSIX Desktop 安装的内存泄漏问题。访问 AppData 下通过挂载点（junction）路径时，每个生成的进程都会泄漏内核非分页池，追踪到 bindflt.sys 的 bug。影响长时间会话的桌面性能。

---

### 5. [BUG] 桌面应用上的聊天回复完成通知无声 [#95593](https://github.com/anthropics/claude-code/issues/95593)
**10 条评论 · 4 个 👍**

通知在 Code/Cowork 中正常工作，但在 Windows 和 macOS 桌面应用上的聊天回复中静默失败。虽然不是阻塞性问题，但影响了依赖桌面通知追踪 Claude 工作的开发者的使用体验。

---

### 6. [BUG] mcp__claude-in-chrome__file_upload 工具不一致 [#105868](https://github.com/anthropics/claude-code/issues/105868) ✓ 已关闭
**7 条评论 · 4 个 👍**

文件上传工具在新创建的对话中缺失，而其他 Claude in Chrome 工具仍然存在。已于 11 月 7 日修复，尽管后续更新表明该工具现在仅在自动审批模式下有效，文件大小限制为 3.8 MB。

---

### 7-30. 安全过滤器误报（多个问题）[#94159](https://github.com/anthropics/claude-code/issues/94159) 等
**各 4 条评论 · 0 个 👍**

今日集中解决的一批重复问题，根本原因相同：**网络安全防护过滤器产生误报**，拦截了合法的开发工作。受影响的领域包括：

- 常规代码检查和静态分析
- 防御性加固和服务器配置
- 加密/密钥管理（TLS 证书、DNS API 凭证）
- 进攻性安全工具上下文
- 固件开发和微控制器工作

所有问题的严重程度均为：**会话中止**，阻止了授权工作的进行。大量重复 issue 表明这一模式影响了使用 Opus 4.8 模型的 Linux 平台用户。今日的集中解决表明底层过滤行为已得到修复。

---

## 重要 PR 进展

### 1. 不处理来自分叉仓库的 Pull Request 上的 @claude 提及 [#111198](https://github.com/anthropics/claude-code/pull/111198)
**状态：** OPEN · 作者：mhegazy

一项安全和成本优化 PR，旨在当 Pull Request 来自分叉仓库时阻止 @claude 提及处理。这解决了一个问题：避免对可能不受信任的外部代码贡献进行意外的 AI 处理，同时也防止了分叉 PR 交互产生的不必要 API 调用费用。

---

## 功能请求趋势

对 open 状态 issue 的分析揭示了社区请求的几个主要功能方向：

### 1. **协作记忆系统**

#38536 共享团队记忆请求代表了更广泛的需求：多用户上下文共享，包括：

- 跨团队成员的持久化上下文
- 共享项目知识库
- 团队交接时更好的支持

### 2. **平台可靠性**

多个 issue 突出了跨平台稳定性改进的需求：

- Windows 平台（Cowork、MSIX、桌面通知）
- 跨平台通知一致性
- 网络连接弹性

### 3. **钩子与配置透明度**

最近的版本更新（v2.1.329）认可了社区对以下方面更清晰可见性的需求：

- 钩子的声明位置
- 托管设置如何与本地配置交互
- 会话状态和计划任务信息

---

## 开发者痛点

### 🔴 严重：网络可靠性（已解决）

#69415 问题表明 API 连接稳定性仍然是一个关键依赖。当连接在响应中途断开时，开发者会完全丢失一个工作会话。问题的解决令人欣慰，但这一模式值得持续关注。

### 🟠 平台碎片化

Windows 特定 bug 在活跃 issue 队列中占主导地位：

- Cowork 文件同步问题 (#93482)
- MSIX 内存泄漏 (#96870)
- 桌面通知失败 (#95593)

Windows 开发者报告的体验不如 macOS/Linux 稳定。

### 🟡 安全过滤器过度敏感

20+ 个安全过滤器误报 issue（均在一天内解决）表明，安全过滤系统正在拦截各领域的合法开发工作：

- 嵌入式系统/固件开发
- 安全工具配置
- 基础设施/DevOps 脚本
- 常规代码维护任务

虽然这些问题已批量解决，但该模式表明需要更好的领域检测机制，或针对明确合法工作场景的用户覆盖功能。

### 🟢 企业采用障碍

共享团队记忆请求 (#38536) 反映了一个差距：目前 Claude Code 缺乏使团队级部署可行的功能——团队范围的记忆共享、持久化上下文和更好的协作支持。

---

*数据来源：github.com/anthropics/claude-code · 生成日期：2026-11-20*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. Let me go through it carefully and translate while following the rules:

1. Output ONLY the translation. No preamble, no explanation, no markdown fences.
2. Preserve the Markdown structure exactly.
3. Keep URLs, code, numbers, dates, issue/PR references verbatim.
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form.
5. Use natural technical Chinese, register of a Chinese developer newsletter.

Let me translate section by section carefully.

Title: "OpenAI Codex Community Digest — 2026-11-20" → "OpenAI Codex 社区动态 — 2026-11-20"

Section 1: Today's Highlights
- "OpenAI shipped rust-v0.171.0, introducing GPT-6.2 Sol and Astra into the model catalog with Sol as the new default" → "OpenAI 发布了 rust-v0.171.0，在模型目录中新增 GPT-6.2 Sol 和 Astra，并以 Sol 为新的默认模型"
- "enabling the TUI workspace by default" → "默认启用 TUI 工作区"
- "with searchable document previews, image previews, and subagent transcripts" → "提供可搜索的文档预览、图片预览和子代理转录"
- "the most substantial UX shift in recent releases" → "这是近期版本中最大的一次 UX 升级"
- "Community activity surged across all surfaces: 50 issues and 50 PRs updated in the last 24 hours" → "社区活跃度全面攀升：过去 24 小时内更新了 50 个 issue 和 50 个 PR"


- Windows 平台贡献了最多的新 bug 报告，而今天的 17 个 PR 合并涵盖了线程保留策略、MCP 内存管理、部署性能等方面。

Section 2: Releases
- "Stable" → "稳定版"
- "New model catalog" → "新模型目录"
- "TUI workspace enabled by default" → "默认启用 TUI 工作区"
- "Alpha previews for upcoming stable tracks; no changelogs published yet." → "为即将到来的稳定版准备的 alpha 预览；暂无更新日志。"
- "Patch release in the v0.171 alpha channel." → "v0.171 alpha 通道的补丁版本。"

Section 3: Hot Issues - I need to translate the table carefully, preserving the issue numbers and their titles while converting the English descriptions and reactions into natural Chinese technical language.

Looking at the first issue (#25319), the core problem is that VS Code extensions currently share a single global chat history across all workspaces, which causes context to bleed between projects and confuses users working in multi-project setups. The community response has been substantial—61 comments and 139 thumbs-ups—which indicates this is a widely recognized pain point. The most requested solution is to isolate chats by workspace or project so they don't interfere with each other.

The second issue (#49383) involves Computer Use on Windows failing to reliably capture application windows, which breaks the core automation workflow for many users on that platform. While it has 60 comments, only 3 thumbs-ups, and is marked as a cross-repo duplicate of a known Windows capture regression under active investigation.

The third issue (#62212) is a session state bug where audio output in one turn causes subsequent text-only turns to fail with HTTP 400, making sessions unusable without restarting.

The fourth issue (#25737) affects CLI users with FIDO2 hardware keys who are blocked from accessing the CLI because the OAuth flow incorrectly escalates to phone OTP even for accounts with Advanced Account Security, despite the browser flow handling it correctly.

The fifth issue (#38873) involves accessibility traversal hanging IntelliJ's Git Log view for 10–13 seconds, severely impacting developers who rely heavily on the IDE.

The sixth issue (#33551) breaks multi-agent setups outside OpenAI infrastructure because Multi-Agent V2 emits an OpenAI-only agent_message item type that Ollama and other third-party providers can't decrypt.

The seventh issue (#55795) broadly affects Windows users after a recent mandatory update cycle, where the Dots entry point vanishes and can't be restored through reinstallation or keyboard shortcuts.

The eighth issue (#51636) is isolated to Work mode on macOS desktop, where the app accepts text but fails to submit it through Enter or the send button, while regular Chat remains unaffected.

The ninth issue (#61679) reveals that the Apps tool catalog gets embedded in every request, causing fresh sessions to exceed context limits and trigger unnecessary auto-compaction loops.

The tenth issue (#56601) affects CLI-only users who want full dot integration without requiring the GUI app, preventing them from authorizing dots through terminal-only workflows.

Now I'm compiling the key PR progress table...

Looking at the next set of PRs, there are several infrastructure improvements: a change to split retention policies for injected items across threads and child processes, adding file size metadata to the fs/getMetadata endpoint, optimizing npm release tarballs with libdeflate compression, and adding alignment options for status line rows.

Then there's work on reducing overhead when listing threads by using buffered readers, reusing MCP discovery inventories across conversation turns, and releasing MCP tool results from memory once they're persisted to history.

I'm also seeing UI improvements like hiding warning navigation hints when there's only a single warning, fixing macOS release pruning when GNU coreutils is present, and a long-running app server feature that adds a snapshot API for installed runtimes.

Now looking at the discussions section, I see the community has built some impressive integrations—the Awesome Codex CLI list is growing with over 150 ecosystem tools, and there are specialized MCP servers for social posting across multiple platforms, phone calls, and task management workflows.

For Q&A, developers are sharing their latency measurement findings from Codex 0.169.0 and seeking guidance on project persistence patterns. The feature requests are starting to emerge around workspace-scoped isolation and intelligent model routing, though the list appears to cut off mid-thought. The biggest pain point is Windows platform instability—Computer Use, Dots, project persistence, and WebSocket proxy connections are all breaking on Windows builds, with documented sandbox protection gaps. Beyond that, I'm seeing context window exhaustion from full tool catalogs being sent repeatedly, authentication inconsistencies where CLI login forces SMS OTP instead of respecting security key preferences, and session state corruption where audio tool output breaks subsequent text requests. There are also TUI copy/paste issues with extra spacing and cross-provider compatibility problems in the multi-agent system.

The macOS side has its own issues—permissions reverting to sandboxed mode, Dots stalling without clear status, and permission selector disappearing between sessions.
</think>


OpenAI Codex 社区动态 — 2026-11-20

---

## 1. 今日要点

OpenAI 发布了 **rust-v0.171.0**，在模型目录中新增 GPT-6.2 Sol 和 Astra，并将 Sol 设为新的默认模型，同时**默认启用 TUI 工作区**——提供可搜索的文档预览、图片预览和子代理转录——这是近期版本中最大的一次 UX 升级。社区活跃度全面攀升：过去 24 小时内有 50 个 issue 和 50 个 PR 产生更新，Windows 平台贡献了最多的新增 bug 报告。今日合并了 17 个 PR，涵盖线程保留策略、MCP 内存管理、部署性能和 CLI 稳定性修复。

---

## 2. Releases

### rust-v0.171.0 — 稳定版
- **新模型目录**：新增 GPT-6.2 Sol 和 Astra；Sol 现为默认选择。
- **TUI 工作区默认启用**：交互式 TUI 现在在主对话旁展示可搜索的文档预览、图片预览和子代理转录。
- *(refs: #62106, #61352, #61888, #61889, #61919)*

### rust-v0.172.0-alpha.2 & rust-v0.173.0-alpha.1
- 面向后续稳定版通道的 alpha 预览；暂无更新日志。

### rust-v0.171.0-alpha.13.1
- v0.171 alpha 通道的补丁发布。

---

## 3. 热门 Issue

| # | Issue | 重要性 | 社区反馈 |
|---|-------|--------|----------|
| **#25319** | [将 VS Code 对话限定到当前工作区/项目](https://github.com/openai/codex/issues/25319) | 当前 Codex VS Code 扩展的聊天历史是全局共享的，无论当前打开的是哪个工作区，这导致上下文混淆，影响多项目工作流。 | **61 条评论，139 👍** — 参与度最高；用户强烈要求按工作区隔离聊天上下文。 |
| **#49383** | [Windows 上 Computer Use 截图采集失败：FrameArrived 超时](https://github.com/openai/codex/issues/49383) | Windows 上的 Computer Use 无法可靠地截取应用窗口，导致核心自动化工作流对大量用户不可用。 | **60 条评论，3 👍** — 跨仓库重复，源于已知的 Windows 截图退化问题；调查进行中。 |
| **#62212** | [音频工具输出导致后续纯文本轮次出现 HTTP 400](https://github.com/openai/codex/issues/62212) | Codex desktop 在某轮产出了音频工具输出后，同一会话中后续的纯文本轮次会返回 HTTP 400，不重启无法继续。 | **29 条评论，5 👍** — Apple Silicon macOS 上可复现；指向音频路径中的会话状态损坏 bug。 |
| **#25737** | [CLI 登录对仅使用安全密钥的账号强制要求短信 OTP](https://github.com/openai/codex/issues/25737) | CLI OAuth 流程错误地对启用了高级账户安全（FIDO2 硬件密钥专用）的账号也升级到手机 OTP，而浏览器流程则正确遵循了 AAS 设置。 | **24 条评论，12 👍** — 涉及安全性的回归 bug，阻止了仅使用密钥的用户访问 CLI。 |
| **#38873** | [辅助功能遍历导致 IntelliJ IDEA Git Log 反复冻结 10–13 秒](https://github.com/openai/codex/issues/38873) | Computer History 的辅助功能遍历会挂起 IntelliJ 的 Git Log 视图，严重影响重度使用 IDE 的开发者的工作流。 | **15 条评论，4 👍** — macOS 辅助功能路径中的平台特定性能退化问题。 |
| **#33551** | [Multi-Agent V2 向外部 Responses 提供商发送 OpenAI 专有的 `agent_message` 条目](https://github.com/openai/codex/issues/33551) | Multi-Agent V2 发出 Ollama 等第三方提供商无法解密的一种 OpenAI 专有的 `agent_message` 条目类型，导致 OpenAI 基础设施外的多代理设置无法工作。 | **13 条评论，16 👍** — 阻碍了社区对自托管多代理管道的探索。 |
| **#55795** | [Windows 更新后 Dots 入口消失](https://github.com/openai/codex/issues/55795) | 某次 Windows 更新后，Dots 入口消失，重新安装或 Ctrl+. 均无法恢复。 | **17 条评论，4 👍** — 在近期强制更新周期后广泛影响 Windows 用户。 |
| **#51636** | [macOS Work：新消息无法通过回车或发送按钮提交](https://github.com/openai/codex/issues/51636) | macOS desktop 应用的 Work 对话模式可以输入文字但无法发送，阻止了该模式的生产性使用。 | **19 条评论** — 仅限 Work 模式；普通 Chat 不受影响，指向 Work 模式特有的退化。 |
| **#61679** | [Apps 工具目录随每次请求完整发送；新会话超出上下文窗口](https://github.com/openai/codex/issues/61679) | Apps 工具目录在每次请求中完整嵌入，导致拥有丰富工具清单的新会话超过上下文窗口限制并触发自动压缩循环。 | **5 条评论** — 表明新会话存在根本性的上下文预算问题。 |
| **#56601** | [允许 CLI/TUI 用户在不安装 desktop 应用的情况下连接 dot](https://github.com/openai/codex/issues/56601) | 运行 Codex CLI/TUI 的用户若不安装 desktop 应用就无法授权 dot 使用本机，限制了纯 dot 工作流。 | **4 条评论，13 👍** — CLI 优先用户对 dot 集成有强烈需求。 |

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|----|------|
| **#62654** | [为注入项添加线程级和子级保留策略](https://github.com/openai/codex/pull/62654) | 将旧的 `always` 保留策略拆分为 `alwaysInThread` 和 `alwaysInChild`，赋予调用方对跨上下文窗口继承和子代理生成项保留行为的独立控制。 |
| **#62653** | [在 `fs/getMetadata` 中返回文件大小](https://github.com/openai/codex/pull/62653) | 在应用服务器元数据响应中新增 `sizeBytes` 字段，使客户端可直接读取文件大小，无需额外调用 stat。 |
| **#62643** | [使用 libdeflate 缩小 npm 发布压缩包](https://github.com/openai/codex/pull/62643) | 使用 `libdeflate-gzip` 对暂存的 npm 包并行重新压缩，减少发布包体积，并跳过制品上传时多余的压缩步骤。 |
| **#62637** | [为状态行行添加居中和右对齐支持](https://github.com/openai/codex/pull/62637) | 扩展 TUI 状态行行的 `justify: "center"` 和 `justify: "end"` 选项，使状态行作者可以完全控制布局。 |
| **#62636** | [降低线程列表扫描时的部署开销](https://github.com/openai/codex/pull/62636) | 使用缓冲式 rollout 读取器扫描纯文本摘要而非解析无关记录，降低每条线程列表的延迟。 |
| **#62640** | [跨轮次复用执行器的 Discovery V2 清单](https://github.com/openai/codex/pull/62640) | 按执行器上下文缓存 MCP discovery 清单，避免每轮重复构建。 |
| **#62641** | [从当前轮内存中释放已持久化的 MCP 工具结果](https://github.com/openai/codex/pull/62641) | 当历史记录可以提供相同载荷时，将已完成的 MCP 工具结果从当前轮内存中清除，降低长会话的内存峰值压力。 |
| **#62642** | [仅有单个警告时隐藏导航提示](https://github.com/openai/codex/pull/62642) | 仅在存在多条警告时显示 TUI 警告导航提示，简化单警告场景的页脚。 |
| **#62648** | [修复 macOS 上 GNU coreutils 导致的独立版裁剪失败](https://github.com/openai/codex/pull/62648) | 解决 macOS 安装器中 GNU `stat` 和系统 `stat` 对 `-f` 参数解析不同导致的设备检查失败问题。 |
| **#31487** | [app-server: 新增 app/installed 运行时快照 API](https://github.com/openai/codex/pull/31487) | 新增功能开关控制的 v2 `app/installed` API，以提交后的连接器运行时快照为后端，在读取时通过有效策略推导连接器身份。*(开放中，长期进行中)* |

---

## 5. 热门讨论

### 展示与分享
| # | 主题 | 要点 |
|---|-----|------|
| **#16329** | [Awesome Codex CLI — 150+ 生态工具](https://github.com/openai/codex/discussions/16329) | 汇总了子代理、skills、插件和 MCP 服务器的精选列表。生态系统的增长推动了对集中发现平台的需求。 |
| **#62551** | [Orchevia：让 Codex 和 Claude Code 独立审查](https://github.com/openai/codex/discussions/62551) | 一个 Apache-2.0 桌面应用，对 diff 顺序运行 Codex 和 Claude Code，让两者分别捕获不同类型的 bug。 |
| **#62244** | [Octopost：通过 MCP 发帖到 X、Bluesky、Mastodon、LinkedIn](https://github.com/openai/codex/discussions/62244) | 一个远程 MCP 服务器，为 Codex 提供社交发布能力；一次工具调用即可跨平台发帖、排程或开线程。 |
| **#61870** | [CallForMe：让 Codex 代打电话给商家](https://github.com/openai/codex/discussions/61870) | 一个远程 MCP 服务器，为 Codex 提供电话能力；用户已用它通过语音获取报价和查询订单。 |
| **#61893** | [Taskhold：支持 Codex 实时查看进度的共享任务列表](https://github.com/openai/codex/discussions/61893) | 一个远程 MCP 任务列表，Codex 可以读取、领取任务、拆解步骤并实时更新进度。 |
| **#62324** | [Yaptake：通过转录文本在 Mac 上剪辑视频](https://github.com/openai/codex/discussions/62324) | 一个通过转录文本进行剪辑的视频编辑器，附有 Codex 插件，使 Codex 能直接在项目中工作。 |

### 问答
| # | 主题 | 要点 |
|---|-----|------|
| **#61849** | [Codex 0.169.0 中截图/工具响应启动延迟诊断](https://github.com/openai/codex/discussions/61849) | 一个开发者团队测量了截图/工具动作与首字节输出之间反复出现的延迟，正在寻求官方支持的延迟分离方法。 |
| **#62436** | [跨运行保持项目所有权的推荐架构](https://github.com/openai/codex/discussions/62436) | 一个团队正在围绕 Codex worker、NATS/JetStream 和持久化项目记录构建个人协调系统，寻求关于项目持久化模式的官方指导。 |

### 创意
| # | 主题 | 要点 |
|---|-----|------|
| **#61844** | [智能模型路由与任务复杂度自动评估](https://github.com/openai/codex/discussions/61844) | 提出一个自动模型选择系统，在任务开始前评估复杂度并路由到合适的模型/推理层级。 |
| **#62661** | [支持在新窗口中打开临时对话](https://github.com/openai/codex/discussions/62661) | 请求能够将临时对话分离到独立窗口中，以便在不中断长对话的情况下快速查询。 |

---

## 6. 功能需求趋势

综合 Issues 和 Discussions，按社区请求量排列，最受关注的能力为：

1. **按工作区隔离对话上下文**（#25319 — 139 👍） — 用户希望 VS Code（及 desktop）的聊天按项目/工作区分割，而非全局共享。
2. **智能/自适应模型路由**（#61844、#62394） — 持续出现的需求：根据任务复杂度自动选择模型和推理层级，而非手动选择。
3. **不依赖 desktop 应用使用 Dots**（#56601 — 13 👍） — CLI/TUI 用户希望获得一流支持的 dot 集成，无需强制安装 GUI 应用。
4. **丰富的外部 MCP 集成** — 社区正在积极构建面向电话（#61870）、任务列表（#61893）、邮件（#62259）、社交发帖（#62244）、错误追踪（#61923）等场景的远程 MCP 服务器，表明对深度远程 MCP 支持的强烈需求。
5. **多代理架构改进**（#33551、#54991） — 跨提供商的多代理兼容性和空闲会话唤醒机制是目前活跃的缺口。
6. **跨会话项目所有权持久化**（#62436） — 用户希望 Codex 在多次独立运行间保持项目上下文和工具链，无需手动交接。

---

## 7. 开发者痛点

| 类别 | 详情 |
|------|------|
| **Windows 平台不稳定** | Windows 构建是本周期新增 bug 的主要来源：Computer Use 截图采集失败（#49383、#58277）、Dots 消失（#55795、#62663）、项目持久化丢失（#61294）、WebSocket 代理超时（#38768）、任务栏遮挡（#60836）。社区安全测试还发现了 Windows 沙箱的保护缺口（#61788）。 |
| **上下文窗口耗尽** | Apps 工具目录随每次请求完整发送（#61679），导致拥有丰富工具清单的新会话超出上下文限制并陷入自动压缩循环。 |
| **认证不一致** | CLI 登录未能遵循高级账户安全（仅安全密钥）设置，强制要求短信 OTP（#25737），而浏览器流程则处理正确。 |
| **会话状态损坏** | 某轮的音频工具输出导致后续纯文本轮次返回 HTTP 400（#62212、#62240），表明工具类型之间存在会话级状态泄漏。 |
| **TUI 复制粘贴体验** | TUI 中代码块携带两个前导空格进入剪贴板（#33581 — 已关闭），导致粘贴出的脚本和配置文件损坏。 |
| **MCP 跨提供商兼容性** | Multi-Agent V2 发出外部 Responses 提供商无法处理的 OpenAI 专有 `agent_message` 条目（#33551），阻断了自托管多代理设置。 |
| **macOS 权限与沙箱** | 现有线程丢失权限选择器并回退到沙箱化进程检查（#60109），Dots 可以将任务交给本地 Codex 但随后卡死且无明确状态（#62646）。 |

---

*本动态根据 2026-11-20 github.com/openai/codex 的活动记录生成。所有链接均以 `https://github.com/openai/codex/` 为基础 URL。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

<think>The user wants me to translate this entire English technical report into Simplified Chinese. I need to:

1. Translate all the content while preserving the exact Markdown structure
2. Use natural technical Chinese appropriate for a Chinese developer newsletter
3. Keep all URLs, code references, issue numbers, version tags, file paths, etc. as-is
4. Preserve all formatting - tables, headings, lists, bold/italic, emojis, etc.

Let me go through section by section and translate it.

The title and headings need to be translated. Technical terms like "digest", "releases", "PRs" etc. can often be kept as-is in technical Chinese context or translated appropriately.

Let me translate:

---

Title: "Gemini CLI Community Digest — 2026-11-20"

"Gemini CLI 社区日报" or "Gemini CLI 社区动态" — "日报" sounds more like a daily newsletter, but "Digest" is a summary. I'll use "Gemini CLI 社区速报" or "Gemini CLI 社区动态简报"

Actually, let me go with "Gemini CLI 社区日报" which is more colloquial for a daily digest.

---

Let me translate section by section carefully.

## 1. Today's Highlights

"今日要点" or "今日要闻"

## 2. Releases

"版本发布"

Key Changes -> 主要更新
Type -> 类型
Nightly -> Nightly（开发版）
Preview -> Preview（预览版）
Stable -> Stable（稳定版）

## 3. Hot Issues

"热点问题" or "热门议题"

P1 Priority (Critical) -> P1 优先级（严重）
P2 Priority (Important) -> P2 优先级（重要）
P3 Priority (Enhancement) -> P3 优先级（改进）


I'll continue translating the key sections systematically, focusing on maintaining the technical accuracy and natural Chinese expression. The goal is to create a comprehensive translation that preserves the original report's technical details and newsletter-style presentation.

The translation needs careful attention to technical terminology, ensuring each technical term is accurately rendered in Chinese while keeping the professional, informative tone of the original document. I'll pay special attention to version names, technical specifications, and community-related terminology to ensure clarity and precision.

The current section appears to be outlining critical issues and problem statements related to software functionality, particularly around subagent behavior and reporting mechanisms. I'll translate these points with technical precision, maintaining the original's analytical and diagnostic approach.

Key translation considerations include:
- Technical terminology consistency
- Preserving the original's analytical tone
- Maintaining clarity in describing complex software behaviors
- Ensuring accurate representation of technical limitations and requirements

The translation will focus on accurately capturing the nuanced descriptions of system behaviors, particularly around error reporting, user interaction, and tool invocation mechanisms. I'm carefully reviewing the Chinese translation, focusing on maintaining the original technical nuances and ensuring accurate terminology. The phrase "报告状态为成功" is precise, conveying the specific state reporting issue. I'll continue examining the documentation for clarity and consistency in technical language translation.

The next section seems to be continuing a technical report, likely detailing specific system behaviors or reporting mechanisms. I'll analyze the context carefully to ensure precise language interpretation. The Chinese translation maintains the core meaning while improving technical precision. The phrase about subagent reporting status and termination reason is now more clearly articulated, emphasizing how goal completion is potentially misrepresented when maximum turns are reached. The translation captures the critical issue of silent failure masking within multi-repository investigation contexts, preserving the technical nuance of the original description. I'm carefully reviewing the Chinese translation, focusing on the technical nuances and precise terminology. The proposed text captures the core issue around agent deferral and hanging, but I want to ensure the language is clear and accurate. The current version seems to effectively describe the problem of Gemini CLI getting stuck when delegating to the generalist agent, with the workaround of explicit prompting. The translation maintains the technical specificity while presenting the issue in a way that Chinese-speaking users can easily understand.

I'll continue examining the next section, noting the detailed translation work on the browser subagent functionality and the Wayland environment limitation. The goal is to maintain precise technical language while ensuring readability for the target audience.

The translation of the output hook crash description needs refinement. I'm carefully considering the most natural Chinese phrasing that captures the technical nuance of the error. The goal is to create a clear, concise explanation that preserves the original meaning without being overly literal.

I'll focus on selecting terminology that accurately represents the technical concept while remaining accessible to Chinese developers. The key is finding a balance between precision and readability in the translation.

The current phrasing needs adjustment to ensure it sounds natural in Chinese technical documentation, avoiding awkward or overly literal translations that might confuse readers.

Key observations include ensuring technical terms like "hook", "crash", and "termination" are translated with precision, while maintaining the overall meaning of the original text. The goal is to create a translation that feels idiomatic and clear to Chinese developers working with similar technical systems.

I'll continue translating the section, focusing on preserving the technical nuances while making the language flow naturally in Chinese. The translation needs to balance accuracy with readability, especially when describing complex software behaviors like output hooks, crash scenarios, and agent session terminations.

The next section reveals an interesting technical challenge with AI tool invocation. The translation highlights a key observation: despite having well-defined skills, the AI system rarely activates them independently, forcing users to provide explicit instructions. This suggests a potential limitation in the AI's autonomous decision-making capabilities regarding skill deployment.

The proposed translation captures this nuanced interaction, emphasizing the gap between potential and actual skill utilization. By translating the section, I'm ensuring that Chinese-speaking developers can understand the underlying issue with similar clarity to the original English description.

The new section introduces a technical investigation into AST-aware file operations, exploring whether intelligent file reading tools can optimize token usage during code navigation. This represents a sophisticated approach to improving code interaction efficiency, potentially reducing unnecessary computational overhead.

The translation maintains the technical precision of the original, translating complex software development concepts like "AST-aware" and "surgical code navigation" in a way that preserves their technical meaning while remaining accessible to Chinese-speaking developers.

The key observation is the potential for more targeted, context-sensitive file reading strategies that minimize unnecessary information processing during code exploration. I'll verify the translation of "API errors" and continue examining the technical nuances of the Vite application creation issue. The translation captures the core problem: the agent gets stuck during interactive prompts instead of handling them smoothly. This suggests a need for better handling of user interactions during the Vite app scaffolding process.

The Chinese translation maintains the technical precision of the original English, focusing on the specific problem of interactive CLI prompt handling. The phrasing emphasizes the agent's failure to gracefully manage user input during the app creation workflow.

The translation captures the key insight about the `~/.gemini/agents/` directory symlink issue, highlighting a specific configuration recognition problem. By translating the issue's core message while preserving technical details, the Chinese version effectively communicates the original problem's essence.

The latest nightly build introduces two significant improvements: a fix for literal character preservation in template replacements and a new statistics subcommand for visual token usage tracking. These changes represent incremental but meaningful enhancements to the CLI's functionality and debugging capabilities.

The stable version marks a consolidation point for recent nightly fixes, indicating a maturation of the latest features. Key development areas include resolving Windows compatibility issues, improving cross-platform support, and addressing core system behaviors like circular reference detection and command parsing.

PowerShell UI responsiveness receives targeted attention, with async parsing implemented to prevent execution delays during command validation. Windows path resolution also sees refinement, ensuring proper handling of home-relative path configurations across different system environments.

The development focuses on enhancing system robustness, with specific improvements in telemetry buffering, standard input/output management, and slash command discovery mechanisms.

A critical security patch addresses template injection vulnerabilities in GitHub Actions workflows, while documentation receives updates to resolve internal link inconsistencies.

The emerging development trend suggests increasing emphasis on platform reliability, security hardening, and cross-platform compatibility across core system components.

Developers consistently highlight critical challenges including agent hang risks, configuration inconsistencies, platform support gaps, skill discovery limitations, and debugging transparency. These pain points underscore the need for more robust, predictable, and transparent system behaviors across different usage scenarios.

The translation maintains technical precision while adapting terminology for a Chinese developer audience, ensuring clear communication of complex technical nuances and emerging system improvement directions.

Community engagement remains vibrant, with consistent documentation of version releases, issue tracking, and collaborative problem-solving approaches across the project's development ecosystem.
</think>


# Gemini CLI 社区日报 — 2026-11-20

## 1. 今日要闻

Gemini CLI 团队发布了 **v0.71.0-preview.0** 及对应 nightly 构建，引入了新的 `/stats heatmap` 子命令用于 token 使用可视化，同时修复了模板占位符替换时 `$` 字面量丢失的问题。社区持续关注高优先级的 agent 可靠性问题——围绕 subagent 行为的三个 P1 bug（挂起、MAX_TURNS 误报、Wayland 兼容性）仍处于活跃状态且讨论热度较高。平台稳定性工作正在推进，Windows 路径解析、PowerShell UI 冻结、遥测序列化循环引用处理等修复已陆续落地。

---

## 2. 版本发布

| 版本 | 类型 | 主要更新 |
|---------|------|-------------|
| **v0.71.0-nightly.20261120.gd4cb1713f** | Nightly | 修复模板占位符替换中 `$` 字面量保留问题；新增 `/stats heatmap` 子命令，展示每日 token 使用热力图 |
| **v0.71.0-preview.0** | Preview | v0.70.0 变更日志自动化；为稳定版发布做准备 |
| **v0.70.0** | Stable | 整合近期 nightly 修复的增量版本 |

**亮点：** 新的 `/stats heatmap` 命令（由 @jvargassanchez-dot 贡献）为开发者提供了 token 消耗的可视化分析功能，这是管理上下文窗口配额时呼声很高的可观测性需求。

---

## 3. 热点问题

### 🔴 P1 优先级（严重）

**1. Subagent 达到 MAX_TURNS 仍报告为 GOAL 成功**  
📌 [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 13 条评论，2 个 👍  
`codebase_investigator` subagent 在达到最大轮次限制而未完成分析时，仍报告 `status: "success"` 且终止原因为 `"GOAL"`。这会导致失败被静默掩盖，使多仓库调查的调试变得不可靠。社区正在积极制定重测策略。

**2. Generalist Agent 在代理时挂起**  
📌 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 8 条评论，8 个 👍  
Gemini CLI 将控制权代理给 generalist agent 时，执行会无限期挂起（测试长达 1 小时）。临时解决方案包括明确指示模型避免使用 subagent 代理。这阻碍了核心用例的使用。

**3. Browser Subagent 在 Wayland 上失败**  
📌 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — 4 条评论，1 个 👍  
浏览器自动化功能在基于 Wayland 的 Linux 环境下无法使用，限制了 Gemini CLI 在这一重要桌面环境中的网页交互能力。

**4. Output Hook 在生成完成摘要时崩溃**  
📌 [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — 3 条评论，0 个 👍  
`get-shit-done` output hook 在生成用户摘要时崩溃，导致进展良好的 agent 会话提前终止。

---

### 🟡 P2 优先级（重要）

**5. Gemini 未能充分利用 Skills 和 Sub-Agents**  
📌 [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 7 条评论，0 个 👍  
尽管用户定义了 skills（如 "gradle"、"git"）并提供了清晰的描述，Gemini 很少主动调用它们。需要显式提示才能触发，削弱了自定义 skill 注册的价值。

**6. AST 感知文件操作的调研**  
📌 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 7 条评论，1 个 👍  
调研 AST 感知工具是否能减少因文件读取不精确而造成的 token 浪费，并实现精准的代码导航。如果实现，可显著提升上下文效率。

**7. Browser Agent 忽略 settings.json 配置覆盖**  
📌 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — 5 条评论，0 个 👍  
全局和项目级 `settings.json` 配置（包括 `maxTurns`）被 Browser Agent 完全忽略，造成不同 agent 类型间的行为不一致。

**8. 工具数量超过 128 时返回 400 错误**  
📌 [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 3 条评论，0 个 👍  
可用工具超过 128 个时 Gemini CLI 遇到 API 错误，暗示工具作用域或批处理逻辑存在问题。

**9. Vite 应用创建在交互式提示处挂起**  
📌 [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) — 2 条评论，0 个 👍  
在提示创建 Vite 应用时，agent 在交互式 CLI 提示处卡住，而非优雅地处理。

---

### 🟢 P3 优先级（改进）

**10. 通过 Bash 亲和性实现零依赖操作系统沙箱**  
📌 [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 9 条评论，1 个 👍  
利用 Gemini 3 原生 bash 亲和性实现零依赖 OS 沙箱，配合执行后意图路由。这是一项平衡安全性、用户体验和模型能力的长期架构愿景。

---

## 4. 关键 PR 进展

| PR | 领域 | 状态 | 摘要 |
|----|------|--------|---------|
| [#30334](https://github.com/google-gemini/gemini-cli/pull/30334) | Core/CLI | ✅ 已关闭 | **修复 PowerShell UI 冻结**：异步解析 PowerShell 命令，避免 Windows 上命令验证时的多秒级旋转动画冻结。 |
| [#30376](https://github.com/google-gemini/gemini-cli/pull/30376) | Core | 🔄 进行中 | **扩展 Windows 相对主目录路径**：修复 `~\...` 在 Windows 上的路径解析，确保策略路径和扩展注册正常工作。 |
| [#30157](https://github.com/google-gemini/gemini-cli/pull/30157) | Core | ✅ 已关闭 | **安全检测循环引用**：仅将真正的循环替换为 `[Circular]`，修复因 OpenTelemetry SDK 中共享数组引用导致的遥测导出失败。 |
| [#30156](https://github.com/google-gemini/gemini-cli/pull/30156) | Core | ✅ 已关闭 | **缓冲聊天压缩遥测数据**：确保 `logChatCompression` 事件在 OTel SDK 初始化完成前被缓冲，防止日志提前丢失。 |
| [#30154](https://github.com/google-gemini/gemini-cli/pull/30154) | CLI | ✅ 已关闭 | **进入 ACP 模式前刷新缓冲 stdio**：在进入 agent 模式前刷新，防止 SIGKILL/崩溃时钩子警告和 stderr 输出被丢弃。 |
| [#30104](https://github.com/google-gemini/gemini-cli/pull/30104) | CLI | 🔄 进行中 | **执行 /skills link 后刷新斜杠命令**：确保 `/skills link <path>` 执行后立即更新技能发现和斜杠命令注册表。 |
| [#30370](https://github.com/google-gemini/gemini-cli/pull/30370) | Core | ✅ 已关闭 | **处理嵌套 .gitignore 取反**：修复 `GitIgnoreParser` 以正确处理通配符模式下的重新包含文件（如 `logs/**` + `!keep.txt`）。 |
| [#30375](https://github.com/google-gemini/gemini-cli/pull/30375) | 文档 | 🔄 进行中 | **修复损坏的内部链接**：更正文档中缺失的 `.md` 扩展名和重命名的锚点。 |
| [#30239](https://github.com/google-gemini/gemini-cli/pull/30239) | Core | 🔄 进行中 | **保留层级别名配置**：自定义模型层级别名（`flash-lite`、`flash`、`pro`）现在在解析时保留其 `generateContentConfig`。 |
| [#30362](https://github.com/google-gemini/gemini-cli/pull/30362) | 工作流 | ✅ 已关闭 | **修复 zizmor 模板注入**：修补 `eval-pr.yml` 工作流中的 GitHub Actions 表达式注入漏洞。 |

---

## 5. 功能需求趋势

分析 issue 库发现五大主流功能方向：

| 趋势 | 相关 Issue | 摘要 |
|-------|--------|---------|
| **Agent 可靠性与正确性** | #22323, #21409, #21983, #22186 | 持续的挂起、错误的终止报告和平台特定失败削弱了信任。用户需要确定性的 agent 行为。 |
| **Subagent 智能化** | #21968, #19873, #22745, #22598 | 希望实现自主技能/subagent 调用、AST 感知导航和改进的轨迹可见性以支持调试。 |
| **Browser Agent 成熟度** | #22267, #22232 | 配置覆盖被忽略、会话恢复缺失、Wayland 失败，表明 browser agent 仍在成熟中。 |
| **Token 效率** | #19561, #22745, #22747 | "得体的提取"、AST 感知读取和精准 grep 被提议用于对抗上下文膨胀（基线约 36.6k tokens/轮）。 |
| **可观测性与调试** | #21763, #22598, #23311 | Bug 报告中必须包含 subagent 上下文；通过 `/chat share` 分享轨迹；需要稳定的内部评估。 |

---

## 6. 开发者痛点

社区反复出现的痛点集中在：

1. **Agent 挂起与静默失败** — 多起关于无限挂起（#21409）和错误成功报告（#22323）的报告使生产环境使用存在风险。开发者需要超时处理和明确的失败模式。

2. **配置不一致** — Browser Agent 忽略 `settings.json`（#22267）造成认知负担。用户期望所有 agent 类型配置统一。

3. **平台缺口** — Wayland 失败（#21983）、Windows 路径问题（#30376）和 PowerShell 解析（#30334）表明跨平台测试存在缺口。Linux 和 Windows 用户感到被忽视。

4. **技能/Subagent 发现** — 尽管注册了 skills，Gemini 并不主动利用（#21968），符号链接的 agent 文件不被识别（#20079）。发现链路需要加强。

5. **上下文浪费** — 大文件读取"大水漫灌"式消耗上下文，任务追踪依赖易衰减的内存中上下文（#18836）。Token 节约仍是开发者的首要需求。

6. **调试不透明** — Bug 报告缺少 subagent 上下文（#21763），且没有便捷的方式分享或回放 agent 轨迹（#22598）。这拖慢了社区协作排查的效率。

---

*日报数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) GitHub 仓库 — 2026-11-20*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

<think>The user wants me to translate this GitHub Copilot CLI community digest from English to Simplified Chinese. I need to:

1. Translate all the text content to Simplified Chinese
2. Keep all URLs, issue numbers, PR numbers, version tags, file paths, code snippets exactly as-is
3. Keep all Markdown structure intact
4. Use natural technical Chinese appropriate for a developer newsletter

Let me go through the document section by section:

**Title and date:**
GitHub Copilot CLI Community Digest → GitHub Copilot CLI 社区周刊

**Releases section:**
- "Fixed" → "已修复"
- "General fixes and changes" → "常规修复与变更"
- "details not specified" → "未提供详细说明"

**Hot Issues:**
- "Status:" → "状态："
- "Labels:" → "标签："
- "Why it matters:" → "重要性："

**Feature Request Trends:**
- "Enhanced MCP/OAuth Reliability" → "MCP/OAuth 可靠性增强"
- "Silent token refresh" → "静默令牌刷新"
- "Permission & Authorization Improvements" → "权限与授权优化"
- "Session & Context Management" → "会话与上下文管理"
- "UI/UX Refinements" → "UI/UX 打磨"
- "Context Memory Enhancements" → "上下文记忆增强"
- "Platform-Specific Fixes" → "平台专项修复"

**Developer Pain Points:**
- "Authentication & OAuth (Highest Pain)" → "身份验证与 OAuth（最大痛点）"
- "Permission Friction" → "权限摩擦"
- "Model Configuration Persistence" → "模型配置持久化"
- "Copilot Free Limitations" → "Copilot Free 限制"
- "Session Persistence in ACP/External Editors" → "ACP/外部编辑器中的会话持久化"
- "Recommendation:" → "建议："


- Technical terms like RFC 6749, OAuth, MCP, ACP should remain in English since they're widely recognized in the Chinese technical community. I'll translate substantive content while preserving all structural elements, URLs, and identifiers exactly as they appear.
</think>


# GitHub Copilot CLI 社区周刊

**日期：** 2026-11-20
**仓库：** github.com/github/copilot-cli

---

## 本期要点

最新版本（v1.0.115-0/1）修复了 MCP 认证中的关键场景，包括服务器未包含 refresh-token scope 时的 OAuth 登录连续性问题，以及工作流扩展的正常注册流程。社区活跃度持续居高不下——前十大热门 issue 中有五个涉及远程 MCP 服务器的认证失败，第三方集成体验中的摩擦点依然突出。

---

## 版本发布

### v1.0.115-1
**已修复：**
- **MCP 登录连续性：** 当服务器授予所需 scope 但省略了自动请求的 refresh-token scope 时，认证流程现在可以正常进行，避免了与非标准 OAuth 实现交互时的静默失败。
- **工作流扩展注册：** 直接执行工作流时现在会正确等待项目扩展工作流完成注册，消除了启动期间的竞态条件。

### v1.0.115-0
常规修复与变更（未提供详细说明）。

**参考：** [Release v1.0.115-1](https://github.com/github/copilot-cli/releases/tag/v1.0.115-1) | [Release v1.0.115-0](https://github.com/github/copilot-cli/releases/tag/v1.0.115-0)

---

## 热门 Issue

### 1. 第三方 MCP 服务器的 OAuth 静默失败 (#4017) — 8 条评论，3 👍
**状态：** CLOSED | **标签：** `[triaged, more-info-needed, area:authentication, area:mcp]`

配置为 `"type": "http"` 且非第一方的远程 MCP 服务器（如 Atlassian、incident.io）在认证时静默失败，既不会弹出浏览器窗口也不会显示错误。这对于依赖第三方 MCP 集成的企业用户而言是严重的阻碍。

**重要性：** 没有错误提示的 OAuth 失败会制造调试噩梦。该问题横跨 Copilot Desktop 应用场景，暗示了平台特定的认证代理交互问题。

**参考：** [Issue #4017](https://github.com/github/copilot-cli/issues/4017)

---

### 2. 过期 access token 强制交互式重新认证而非静默刷新 (#4203) — 5 条评论，5 👍
**状态：** OPEN | **标签：** `[triage, area:authentication, area:mcp]`

当远程 OAuth 保护的 MCP 服务器的缓存 access token 在会话启动时已过期，CLI 将其视为需要全新交互式登录——尽管缓存中存在有效的 refresh token。此行为违反了 RFC 6749 §6（令牌刷新）规范，并造成不必要的认证摩擦。

**重要性：** 高 👍 数（5）表明社区对 RFC 合规性和静默重新认证的高度重视。凭证轮换频繁的企业环境受影响尤为严重。

**参考：** [Issue #4203](https://github.com/github/copilot-cli/issues/4203)

---

### 3. 授权疲劳——单次请求触发过多弹窗 (#1168) — 5 条评论，3 👍
**状态：** OPEN | **标签：** `[area:permissions]`

一条高级请求如"PR 727 需要处理一下"会触发超过十几个授权弹窗。这种"授权疲劳"严重损害了需要大量权限的工作流的开发者体验。

**重要性：** 弹窗与实际工作的比例不可持续。该问题直接影响生产力，迫切需要权限批处理或更智能的缓存策略。

**参考：** [Issue #1168](https://github.com/github/copilot-cli/issues/1168)

---

### 4. Copilot Free 账户无法使用远程环境托管 (#5283) — 3 条评论，6 👍
**状态：** OPEN | **标签：** `[triage:needs-human, area:sessions]`

没有组织成员资格的个人 GitHub 账户（Copilot Free）无法启用 CLI 远程访问，尽管本地设置显示 incoming-connection 已开启。错误信息：`GitHub environment hosting is not available`。

**重要性：** 本批次最高 👍 数（6）。此付费墙挫折影响了希望获得远程开发能力的个人开发者——这是高级用户的关键差异化功能。

**参考：** [Issue #5283](https://github.com/github/copilot-cli/issues/5283)

---

### 5. 插件技能已加载但未在 `/skills` 和 `/env` 中显示 (#4886) — 4 条评论
**状态：** CLOSED | **标签：** `[area:plugins]`

通过 `--plugin-dir` 加载的本地插件提供的技能可被后端发现，但被排除在交互式 `/skills` 仪表板和 `/env` 输出之外。只有非交互式的 `copilot skill list --json` 能正确包含它们。

**重要性：** 交互式与非交互式模式的行为不一致会造成困惑。插件作者无法依赖标准发现机制来实现面向用户的技能可见性。

**参考：** [Issue #4886](https://github.com/github/copilot-cli/issues/4886)

---

### 6. 启动体验阻塞 MCP/插件加载期间的工作 (#5090) — 3 条评论
**状态：** OPEN | **标签：** `[triage, area:input-keyboard, area:plugins, area:mcp]`

用户必须等待 MCP、插件等加载完成后才能与 CLI 交互。在大型仓库中，启动延迟尤为明显。报告者请求异步加载以支持即时交互。

**重要性：** 同步启动序列为大型 monorepo 开发者制造摩擦。异步初始化是社区期望的常见 UX 模式。

**参考：** [Issue #5090](https://github.com/github/copilot-cli/issues/5090)

---

### 7. 使用 `/model` 命令切换模型时忽略 `effortLevel` 配置 (#2823) — 3 条评论
**状态：** OPEN | **标签：** `[area:models, area:configuration]`

`~/.copilot/config.json` 中的 `effortLevel` 设置在会话启动时正确应用，但在会话中使用 `/model` 切换模型时重置为 "medium"。

**重要性：** 模型特定的 effort 偏好应在切换时保持。用户为成本敏感模型配置了激进的压缩设置，却会在意外切换时丢失这些配置。

**参考：** [Issue #2823](https://github.com/github/copilot-cli/issues/2823)

---

### 8. `store_memory` 在用户级存储不可用时仍提供 user scope (#5516) — 2 条评论
**状态：** OPEN | **标签：** `[area:context-memory]`

`store_memory` 命令即使在用户级偏好不可用时也声明 `scope: "user"`，导致所有 user-scoped 存储因 HTTP 404 而失败。唯一的客户端开关（`/memory off`）会同时禁用两种 scope，无法实现仅仓库级存储的选择性使用。

**重要性：** Scope 不可用性的静默传播造成了令人困惑的失败。用户无法区分网络错误与权限/配置问题。

**参考：** [Issue #5516](https://github.com/github/copilot-cli/issues/5516)

---

### 9. 服务器元数据 URL 重定向导致 MCP OAuth 失败 (#4769) — 3 条评论
**状态：** CLOSED | **标签：** `[area:authentication, area:mcp]`

当 `.well-known/openid-configuration` 位于 HTTP 重定向之后时，认证失败并报错 "Incompatible authorization server: issuer does not match metadata URL"。

**重要性：** 许多身份提供商使用重定向进行元数据发现。此 bug 阻断了合规服务器的合法 OAuth 流程。

**参考：** [Issue #4769](https://github.com/github/copilot-cli/issues/4769)

---

### 10. 零轮 ACP 会话从未持久化 `events.jsonl` (#5501) — 2 条评论
**状态：** OPEN | **标签：** `[area:sessions, area:non-interactive]`

当使用 Copilot CLI 作为 ACP 外部代理时（如在 Zed 中），没有用户轮次的会话（空会话或仅斜杠命令）永远不会写入其 `events.jsonl` 文件。在重启后重新打开线程会失败，报错 `ACP request failed {"method":"session/load","error":"Resource not found"}`。

**重要性：** ACP 集成是新兴用例。会话持久化失败会破坏外部编辑器中的工作流连续性——这是关键的采用障碍。

**参考：** [Issue #5501](https://github.com/github/copilot-cli/issues/5501)

---

## 关键 PR 进展

### 1. 扩展引导路径不匹配修复 (#2957) — CLOSED
**作者：** polajenko | **合并：** 2026-11-19

扩展在 macOS 和 Windows 上均加载失败，原因是 `index.js` 中分叉子进程的安全检查期望引导路径位于 `dirname(process.execPath)`（SEA 二进制目录）下，但 `app.js` 传入的是来自 pkg cache 的路径（`universal/<ver>/preloads/`）。

**影响：** 解决了影响桌面平台所有基于扩展的插件的关键启动失败问题。

**参考：** [PR #2957](https://github.com/github/copilot-cli/pull/2957)

---

## 功能需求趋势

通过对近期 issue 和讨论的分析，揭示出以下主导性功能方向：

### 1. MCP/OAuth 可靠性增强
- **静默令牌刷新：** 用户期望使用缓存的 refresh token 自动完成重新认证（Issue #4203）。
- **重定向容错：** OAuth 元数据发现应遵循 HTTP 重定向（Issue #4769）。
- **URL 提示支持 3LO：** 授权码授权时客户端侧显示 URL（Issue #4371）。

### 2. 权限与授权优化
- **弹窗批处理：** 减少多步骤工作流期间的授权弹窗（Issue #1168）。
- **选择性工具启用：** 配置沙箱以白名单特定工具（Issue #4298）。
- **macOS 沙箱 TCP 访问：** 允许后端集成测试连接本地服务器（Issue #5507）。

### 3. 会话与上下文管理
- **Fork 支持：** CLI 选项 `--fork` 从现有会话创建并行终端工作流（Issue #4580）。
- **会话压缩恢复：** `/compact` 应在达到 5MB CAPI 限制后恢复会话（Issue #4424）。
- **模型相关 effort 持久化：** `effortLevel` 应跟随模型切换（Issue #2823）。

### 4. UI/UX 打磨
- **异步启动：** MCP、插件和扩展的非阻塞初始化（Issue #5090）。
- **推理自动折叠：** "Thought for…" 块在思考完成后自动折叠（Issue #5531）。
- **滚动稳定性：** 新输出到达时防止时间线跳跃（Issue #5533）。
- **Diff 面板尺寸：** 防止大型 diff 遮挡助手输出（Issue #3150）。

### 5. 上下文记忆增强
- **Scope 感知记忆：** 用户级记忆不可用时的优雅降级（Issue #5516）。
- **PDF Token 估算：** 按实际模型输入成本而非编码后大小计费（Issue #5517）。
- **128K Token 预算默认值：** 解决大上下文模型的静默回退问题（Issue #4310）。

### 6. 平台专项修复
- **Windows MCP Worker 清理：** 确保通过包装器启动的 MCP Worker 正确终止（Issue #4972）。
- **Vim 退格键问题（Windows）：** 修复插入 0x7F 字符而非删除（Issue #3374）。
- **长路径支持：** 支持路径很长的市场仓库（Issue #4690）。

---

## 开发者痛点

### 身份验证与 OAuth（最大痛点）
社区持续反馈 MCP OAuth 可靠性的挫败感：
- 第三方服务器静默失败无错误提示 (#4017)
- 过期令牌触发交互式重新认证 (#4203)
- 元数据重定向破坏认证 (#4769)
- Linux/WSL 上 `xdg-open` 缺失时浏览器登录卡住 (#5510)

**建议：** 优先进行 RFC 6749 合规性测试和静默刷新流程。

### 权限摩擦
授权疲劳 (#1168) 仍是首要关切。用户报告单次高级请求会触发"超过十几个"弹窗，使 CLI 显得碍事而非辅助。

**建议：** 实现权限批处理或会话级授权缓存。

### 模型配置持久化
`effortLevel` 和 `showReasoning` 等设置在会话期间意外重置：
- Effort 级别在模型切换时重置为 "medium" (#2823)
- `showReasoning: true` 对 Gemini 模型无效 (#5532)

**建议：** 在模型切换时保留用户偏好，并验证所有支持模型的功能一致性。

### Copilot Free 限制
个人 Copilot Free 账户无法使用远程环境托管 (#5283)，为评估该平台的个人开发者制造了采用摩擦。

**建议：** 明确功能层级并考虑层级适当的功能预览。

### ACP/外部编辑器中的会话持久化
零轮会话在 ACP 集成中无法持久化 (#5501)，破坏了 Zed 等编辑器中的工作流连续性。

**建议：** 确保所有会话类型（包括边缘情况）一致地写入状态文件。

---

**本期完**

*生成日期：2026-11-20 | 数据来源：github.com/github/copilot-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

<think>The user wants me to translate the entire English technical report into Simplified Chinese. I need to:

1. Translate all the text while maintaining the markdown structure exactly
2. Keep all URLs, code spans, issue/PR references as-is
3. Keep project names, repository slugs, usernames, version tags, file paths, and API/config identifiers in their original form
4. Use natural technical Chinese register
5. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me go through the text systematically and translate it.

Title: "OpenCode Community Digest — 2026-11-20"
This becomes "OpenCode 社区速报 — 2026-11-20"

Let me translate section by section...

## Today's Highlights

"OpenCode sees significant activity around multi-account management and provider reliability. A major release PR (#64784) promotes dev to production, while several fixes target the Claude Agent provider's session handling and the built-in browser's tab management. Free tier users continue reporting widespread issues, with the tracking issue reaching 393 comments."

Translation: "OpenCode 在多账户管理和 Provider 可靠性方面出现大量活动。一个重要的发布 PR (#64784) 将 dev 分支提升到生产环境，同时多个修复涉及 Claude Agent Provider 的会话处理和内置浏览器的标签页管理。免费版用户持续报告各种问题，跟踪 Issue 的评论数已达 393 条。"

## Releases

"No new releases in the last 24 hours."
"过去 24 小时无新版本发布。"

## Hot Issues

Then I list out the top issues with their translations, being careful to handle technical terms appropriately.

For example:
- "comment" → "评论" or "条评论"
- "Issue" → "Issue" (keep as-is since it's GitHub terminology)
- "PR" → "PR" (keep as-is)
- "Free tier" → "免费版"


- "Provider" → "Provider" (technical term)
- "Model picker" → "模型选择器"
- "cache" → "缓存"
- "tokens" → "Token"
- "FTS5" → "FTS5" (technical term)
- "inotify" → "inotify" (technical term)
- "snap" → "snap" (technical term)
- "curl" → "curl" (technical term)

I continue translating through the remaining sections, maintaining consistency with technical terminology and preserving the original markdown structure throughout the document.
</think>


# OpenCode 社区速报 — 2026-11-20

## 今日要点

OpenCode 在多账户管理和 Provider 可靠性方面出现大量活动。一个重要的发布 PR (#64784) 将 dev 分支提升到生产环境，同时多个修复涉及 Claude Agent Provider 的会话处理和内置浏览器的标签页管理。免费版用户持续报告各种问题，跟踪 Issue 的评论数已达 393 条。

---

## 版本发布

过去 24 小时无新版本发布。

---

## 热门 Issue

### 1. [免费版故障 — 集中追踪帖](https://github.com/anomalyco/opencode/issues/59387)  
**393 条评论 · 29 个 👍**

这是目前最活跃的 Issue。用户报告免费版声称已用尽用量限额但实际上并未使用服务、重置功能不触发、以及错误出现"订阅 Go 版"提示。该 Issue 已成免费版 bug 报告的集中地，如此大量的反馈表明存在系统性影响。

### 2. [GitHub Copilot Provider 显示零模型](https://github.com/anomalyco/opencode/issues/42083)  
**14 条评论 · 5 个 👍**

认证成功，但 `github-copilot` Provider 永远不会出现在模型选择器中。`opencode models github-copilot` 返回"Provider not found"。影响使用 Arch Linux（v1.18.15）且依赖 Copilot 集成的用户。

### 3. [Claude Agent 5 小时套餐限额消耗速度快 1.8 倍](https://github.com/anomalyco/opencode/issues/61072)  
**9 条评论 · 2 个 👍**

OpenCode 的 Claude Agent SDK 将请求标记为 `sdk-ts`，导致 Anthropic 的缓存查找未命中，消耗 5 小时套餐限额的速度远超 Claude Code 原生 TUI。这是一个静默的计费问题，可能让重度用户措手不及。

### 4. [带 Build/Prepare 脚本的 Git 依赖安装失败](https://github.com/anomalyco/opencode/issues/49704)  
**8 条评论 · 0 个 👍**

`opencode plugin add` 对任何带有生命周期脚本（`build`、`prepare`、`install` 等）或 workspace 的 Git 依赖都会失败，报错 `NpmInstallFailedError: git dep preparation failed`。导致大量流行仓库的插件无法安装。

### 5. [首次提交后 Home/End 键失效](https://github.com/anomalyco/opencode/issues/56890)  
**7 条评论 · 0 个 👍**

Home/End 键的光标导航在首次提交 prompt 后失效。按键不再移动光标，反而意外滚动输出面板。这影响了日常使用体验。

### 6. [模型列表在 `fable` 和 `claude-fable-5-2` 之间切换](https://github.com/anomalyco/opencode/issues/64746)  
**3 条评论 · 0 个 👍**

Claude Agent Provider 的模型列表在 Fable 5.2 的两个标识符之间来回切换。在已被移除的 ID 上启动的会话会因"model not found"而失败，破坏正在进行的对话。

### 7. [macOS 上 UNABLE_TO_GET_ISSUER_CERT](https://github.com/anomalyco/opencode/issues/64835)  
**4 条评论 · 0 个 👍**

macOS 27 用户连接使用 WoTrus/Sectigo R46 证书链的端点时遇到 SSL 错误。尽管证书链完整且为公开可信的，错误仍表明证书验证失败。

### 8. [需要按项目激活凭证](https://github.com/anomalyco/opencode/issues/51152)  
**4 条评论 · 3 个 👍**

通过 `auth switch` 或 `/connect` 切换凭证是全局性的，会导致无关项目的后台代理重新计费。用户请求按文件夹固定 Provider 账户（如分离工作和个人 API 密钥）。

### 9. [Browser API 缺少标签页关闭操作](https://github.com/anomalyco/opencode/issues/59787)  
**5 条评论 · 0 个 👍**

Browser API 可以打开标签页但没有关闭方式。用于研究或测试的 Agent 打开标签页后无法清理，导致会话混乱。

### 10. [Snap 环境下 curl 无法访问 /tmp 导致安装失败](https://github.com/anomalyco/opencode/issues/65044)  
**3 条评论 · 0 个 👍**

`curl | bash` 安装程序在 `/tmp` 中创建临时目录，但 snap 限制的 curl 无法访问，产生误导性的"磁盘空间"错误（退出码 23）。影响使用 snap 发行版系统的 Linux 用户。

---

## 重要 PR 进展

### 1. [Promote dev → production](https://github.com/anomalyco/opencode/pull/64784)  
**发布 PR · opencode-agent[bot]**

将 `dev` 分支提升到生产环境，包括 Tidepool Alpha Free 和 Gemini 4 Neon 的 Console 文档，以及自上次提升以来合并的核心、app 和 CLI 变更。

### 2. [自动更新跟踪 Git 分支的插件](https://github.com/anomalyco/opencode/pull/65052)  
**新功能 · rekram1-node**

从 Git 分支安装的插件现在会自动更新，与 `name@latest` 插件的行为一致。简化了跟踪开发分支的开发者维护工作。

### 3. [通过 configDir 列表实现 Claude Agent 用量控制](https://github.com/anomalyco/opencode/pull/65035)  
**新功能 · Tarquinen**

扩展 `configDir` 设置以接受 Claude 配置文件夹列表。当一个账户达到用量限额时，聊天自动切换到列表中的下一个账户。

### 4. [为 Claude Agent Provider 添加 configDir 设置](https://github.com/anomalyco/opencode/pull/62514)  
**新功能 · 关闭 #60793**

允许使用默认以外的 Claude 配置文件夹，使用户能够在 OpenCode 中分离工作和个人的 Claude Code 凭证。

### 5. [通过配置文件夹切换 Claude Agent 账户](https://github.com/anomalyco/opencode/pull/64580)  
**新功能 · deinspanjer**

在 `configDir` 功能基础上实现基于配置文件夹的账户切换，无缝支持多账户工作流。

### 6. [会话删除时停止 Claude Agent 进程](https://github.com/anomalyco/opencode/pull/62649)  
**Bug 修复 · 关闭 #62648**

此前，删除会话后其 `claude` 进程会一直运行直到 5 分钟空闲超时。该修复确保进程在会话删除时立即终止。

### 7. [合并 Catch-Up 文本为一个块](https://github.com/anomalyco/opencode/pull/63873)  
**Bug 修复 · 关闭 #63871**

`CatchUp.content` 原本每个角色标签和消息部分都发出一个文本块，阻止 Anthropic 的 prompt 缓存匹配。现在合并为单个块以提高缓存命中率并减少 Token 用量。

### 8. [当 curl 无法访问 /tmp 时重试下载](https://github.com/anomalyco/opencode/pull/65051)  
**Bug 修复 · 关闭 #65044**

安装程序现在在受限 curl 环境（如 snap）无法访问 `/tmp` 时使用备用路径重试下载，解决了临时目录可见性问题。

### 9. [可选的 SQLite FTS5 会话历史索引](https://github.com/anomalyco/opencode/pull/62769)  
**新功能 · 贡献者**

为会话历史搜索添加实验性 SQLite FTS5 索引。通过 `experimental.sqlite_fts: true` 或 `OPENCODE_FLAGS=sqlite_fts` 启用。包含对现有历史的一次性后台构建。

### 10. [使用 `<system-update>` 处理指令更新](https://github.com/anomalyco/opencode/pull/65034)  
**Bug 修复**

指令更新曾通过两个不同的标签到达模型，导致不一致。现在统一使用 `<system-update>` 标签处理所有指令更新。

---

## 功能请求趋势

1. **多账户与凭证管理** — 强烈需求包括按项目激活凭证、配置文件夹切换，以及基于用量的账户轮换（反映在多个 Issue 和活跃的 #62514、#64580、#65035 PR 中）。

2. **Browser API 扩展** — 用户希望获得完整的标签页生命周期控制（关闭标签、管理窗口）以及从 Chrome 导入 Cookie/会话的内置桌面浏览器支持。

3. **插件系统增强** — 请求包括向插件暴露 V2 TUI composer、自动更新跟踪分支的插件，以及改进 Git 依赖处理。

4. **Provider 可靠性** — 围绕 Claude Agent Provider 的修复和功能工作（configDir、用量控制、进程清理）表明这是一个高优先级集成。

5. **免费版质量** — 关于"Beam Free"智能程度和用量追踪的投诉表明免费版体验需要改进。

---

## 开发者痛点

- **免费版不一致性**：重置计时器失效、幽灵用量报告和突然出现的升级提示让免费用户感到沮丧。

- **SSL/TLS 失败**：macOS 上的证书链验证问题（WoTrus/Sectigo）和平台特定的 SSL 错误导致集成失败。

- **会话状态丢失**：网站登录在标签页关闭后消失、子代理继承无法使用的浏览器授权、滚动位置重置等问题扰乱工作流。

- **插件安装脆弱性**：带生命周期脚本的 Git 依赖普遍失败，阻塞了热门插件来源。

- **模型 Provider 不稳定**：模型列表在标识符之间切换、"Provider not found"错误阻止可靠的多 Provider 设置。

- **Shell 权限绕过**：PowerShell 脚本调用在 Windows 上跳过权限提示，引发安全担忧。

- **inotify 耗尽**：在 inotify 限制达到时服务挂起，影响拥有大型代码库的 Linux 用户。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/earendil-works/pi">earendil-works/pi</a></summary>

<think>The user wants me to translate this English technical report (Pi Community Digest) into Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble or explanation
2. Preserve all Markdown structure exactly
3. Keep URLs, code spans, numbers, dates verbatim
4. Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in their original form
5. Use natural technical Chinese register

Let me translate section by section:

**Title**: Pi 社区日报 — 2026-11-20

**Today's Highlights section**:
- terminal stability fixes → 终端稳定性修复
- SIGTSTP and exit-path issues → SIGTSTP 信号和退出路径问题
- mouse tracking and keyboard protocols → 鼠标追踪和键盘协议
- OpenAI Codex provider → OpenAI Codex 提供商
- prompt caching regressions → 提示词缓存退化
- llama.cpp adapter → llama.cpp 适配器
- image modality support → 图片模态支持

**Releases section**: No new releases → 无新版本发布

**Hot Issues**: Need to translate all issue titles and descriptions carefully

Let me work through each section carefully, maintaining the exact formatting.
</think>


# Pi 社区日报 — 2026-11-20

## 今日要闻

Pi 社区在过去一天集中精力解决**终端稳定性问题**，共有三个 PR（#12339、#12336、#12283）被合并，修复了各种 SIGTSTP 和退出路径问题，这些问题曾导致鼠标追踪和键盘协议在 shell 中保持激活状态。与此同时，OpenAI Codex 提供商围绕 GPT-6.2 Sol 的提示词缓存退化问题进行了处理，而 llama.cpp 适配器则新增了对决策分类器的图片模态支持。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 热门 Issue

### 1. Windows 使用情况追踪 — [#7547](https://github.com/earendil-works/pi/issues/7547)（99 条评论）
**状态：** 开启中 | **作者：** petrroll  
社区正在积极梳理 Windows 开发体验，该 issue 作为中心枢纽，收集开发者通过不同方式（WSL、原生 Windows 等）在 Windows 上运行 Pi 的反馈，以及各设置方式下的痛点。高评论数反映了社区对提升 Pi 在 Windows 开箱即用体验的强烈兴趣。

### 2. 遵循 XDG 基础目录规范 — [#2870](https://github.com/earendil-works/pi/issues/2870)（29 条评论）
**状态：** 已关闭 | **作者：** mks-h | 👍 75  
一个长期存在的 Linux 规范遵循请求得到解决：Pi 现在正确遵循 `$XDG_CONFIG_HOME`（默认为 `$HOME/.config`）来存储配置，不再污染用户主目录。这使 Pi 与主流 Linux 规范对齐，获得了社区的高度认可。

### 3. 大型对话记录每帧重新渲染 — [#9549](https://github.com/earendil-works/pi/issues/9549)（19 条评论）
**状态：** 开启中 | **作者：** EdgewalkerBlue  
一个性能退化问题：在调整包含大量对话记录的会话窗口大小时，会导致完整重新渲染，使一个 CPU 核心饱和。该问题由用户与本地 Pi 智能体协作起草，并在配置了 2 个逻辑核心的 Windows Terminal 上复现。对于有长对话历史记录的重度用户来说，这是明显的 UX 降级。

### 4. 技能可选包命名空间 — [#8834](https://github.com/earendil-works/pi/issues/8834)（16 条评论）
**状态：** 已关闭 | **作者：** maskshell  
一个功能请求：为 `package.json` 添加 `pi.namespace` 字段，使技能和提示词模板可以加载为组合名称（`<namespace>:<name>`）。这允许包作者避免命名冲突，并为精选技能集合提供更好的组织结构。

### 5. 永久删除会话 — [#11026](https://github.com/earendil-works/pi/issues/11026)（9 条评论）
**状态：** 开启中 | **作者：** larrykoo711  
pi-durable 用户请求 `harness.deleteConversation(id, ctx)` API 来永久删除存储中的会话，包括相关条目、文档、收件箱项目和调度器状态。目前没有干净的方式来回收旧会话的存储空间。

### 6. GPT-6.2 Sol 提示词缓存退化 — [#12273](https://github.com/earendil-works/pi/issues/12273)（6 条评论）
**状态：** 已关闭 | **作者：** chpock  
一个显著的性能退化问题：GPT-6.2 Sol 在相同工作负载下报告的提示词缓存复用率大幅降低（第 4 轮：3,968 vs 12,800 缓存 token）。这意味着每次热启动会额外增加约 8.8k 非缓存输入 token，影响了长会话的成本效率。

### 7. Windows Terminal 鼠标追踪残留 — [#12133](https://github.com/earendil-works/pi/issues/12133)（5 条评论）
**状态：** 已关闭 | **作者：** demoAlitalia  
在 Windows 上退出 Pi 后（PowerShell + Windows Terminal），SGR 鼠标报告会持续涌现在 shell 提示符中。该问题通过相关 PR（#12336、#12339）针对终端恢复路径进行了修复。

### 8. Gemini 4 Hydrogen xhigh 级别被拒绝 — [#12184](https://github.com/earendil-works/pi/issues/12184)（5 条评论）
**状态：** 已关闭 | **作者：** onprs  
Google 适配器错误地拒绝了新宣传的 Gemini 4 Hydrogen `xhigh` 思考级别，在发送任何 HTTP 请求前就抛出错误。修复确保了对模型现在暴露的第四思考级别的正确处理。

### 9. 重启后 Copilot 模型不可见 — [#11006](https://github.com/earendil-works/pi/issues/11006)（5 条评论）
**状态：** 开启中 | **作者：** grok08  
企业管理员启用的 GitHub Copilot 模型在 Pi 重启后可能仍然不出现在模型选择器中，因为 `availableModelIds` 被缓存了，且在 OAuth 凭证仍然有效时不会刷新。一个待合并的 PR（#12325）通过保持 Copilot 可用模型的实时更新来解决此问题。

### 10. 空闲缓存预热时间范围配置 — [#11127](https://github.com/earendil-works/pi/issues/11127)（4 条评论）
**状态：** 开启中 | **作者：** wenjiudaijiugui  
用户希望对空闲缓存预热的最大时长（默认 30 分钟）进行可配置控制。使用 30 分钟的提示词缓存 TTL，刷新发生在约 27 分钟和 54 分钟，但用户偏好更灵活的调度（如 60 或 120 分钟）。

---

## 关键 PR 进展

### 终端与信号处理修复

| PR | 描述 |
|----|------|
| [#12339](https://github.com/earendil-works/pi/pull/12339) | **SIGTSTP 监听器所有权** — 确保挂起信号处理器与终端所有权正确关联，解决 `start()` 之前和 `stop()` 之后的边缘情况 |
| [#12336](https://github.com/earendil-works/pi/pull/12336) | **退出前刷新 stdout** — 防止在 TUI `stop()` 后退出时丢失写入，确保鼠标追踪和 Kitty 协议序列被正确发送 |
| [#12283](https://github.com/earendil-works/pi/pull/12283) | **处理外部 SIGTSTP** — `kill -TSTP <pi-pid>` 现在遵循与 Ctrl+Z 相同的终端恢复路径，修复 #12272 |

### AI 提供商与模型修复

| PR | 描述 |
|----|------|
| [#12335](https://github.com/earendil-works/pi/pull/12335) | **向 llama.cpp 分类器发送图片** — 报告在 `architecture.input_modalities` 中包含 `image` 的决策模型（如使用 `mmproj` 的 Clef）被错误注册为纯文本；现已被正确支持 |
| [#12319](https://github.com/earendil-works/pi/pull/12319) | **使 Codex 系统提示词可缓存** — GPT-6.2 将顶层 `instructions` 放在缓存前缀之外；重构为使用 `messages` 结构 |
| [#12325](https://github.com/earendil-works/pi/pull/12325) | **保持 Copilot 模型最新** — 在模型获取时刷新 `availableModelIds`，确保新启用的企业模型立即出现，无需等待令牌刷新 |
| [#12332](https://github.com/earendil-works/pi/pull/12332) | **向 Copilot 上的 Claude 发送严格工具** — 后续确保内置工具在模型支持时请求严格模式 |
| [#12313](https://github.com/earendil-works/pi/pull/12313) | **添加 qwen4-max-preview** — 更新令牌计划中的独立模型以包含新可用的 Qwen4 变体 |

### UI/UX 改进

| PR | 描述 |
|----|------|
| [#12334](https://github.com/earendil-works/pi/pull/12334) | **选择器搜索中的光标键** — 筛选时左/右/Home/End 键不再将选中项重置为第一项 |
| [#12275](https://github.com/earendil-works/pi/pull/12275) | **停止滚动缓冲区重绘** — 防止长工具结果在视口上方持续更新时触发整个视口重绘 |
| [#12274](https://github.com/earendil-works/pi/pull/12274) | **避免流式传输时光标闪烁** — 消除助手流式输出或页脚更新期间的高速闪烁 |
| [#12280](https://github.com/earendil-works/pi/pull/12280) | **树形导航历史** — 修复通过 `/tree` 或扩展操作导航时重复添加提示词到历史记录的问题 |

### 性能与质量

| PR | 描述 |
|----|------|
| [#12304](https://github.com/earendil-works/pi/pull/12304) | **使用启动器的 Node.js 进行冒烟测试** — 添加验证确保托管更新与当前 Node.js 二进制文件配合工作，捕获 ABI 不匹配 |
| [#12337](https://github.com/earendil-works/pi/pull/12337) | **重新加载时报告设置错误** — 在 `/reload` 期间发现的设置解析错误现在会正确报告给用户 |

---

## 热门讨论

### 创意 Ideas

**`codemode` 的替代名称 — [#12314](https://github.com/earendil-works/pi/discussions/12314)**  
作者：dragove  
使用 DeepSeek V4.1-Flash 运行 `codemode` 的用户报告模型有时会使用 `codemod` 或 `codemodule` 而非 `codemode`。建议重命名该工具以避免与常见英文单词冲突。

**WebDriver 获取免费聊天配额 — [#12320](https://github.com/earendil-works/pi/discussions/12320)**  
作者：zzau13  
一个探索性讨论：关于使用 WebDriver 自动化免费聊天服务作为编辑器的 AI 后端。虽然声明"与 Pi 无关"，但探索了访问免费令牌配额的有创意的方法。

### 作品展示

**Pi-Personal：常驻个人智能体 — [#12331](https://github.com/earendil-works/pi/discussions/12331)**  
作者：emiwltz  
一个基于 Pi 构建的常驻个人智能体演示，运行在 Herdr Core 中并可通过 Telegram 访问。核心实现为 5,216 行，使用 Pi 原版功能配合自己的登录和扩展，通过纯文件传递消息。

---

## 功能请求趋势

通过对开启中的 issue 和讨论的分析，揭示以下反复出现的主题：

| 趋势 | 描述 |
|------|------|
| **持久化存储管理** | 多个会话生命周期控制请求：永久删除（#11026）、保存/恢复工作（#12306）以及 ACP 适配器支持（#10389） |
| **缓存与性能控制** | 用户希望更精细地控制提示词缓存行为：可配置的预热时间范围（#11127）、跨思考级别保留缓存（#12269）以及修复缓存退化（#12273、#12264） |
| **Windows 体验** | 持续关注改善 Windows Terminal 集成、鼠标追踪清理和原生 Windows 兼容性（#7547、#12133） |
| **多提供商模型发现** | 围绕动态模型可用性的问题：Copilot 企业模型（#11006）、XDG 合规性（#2870）和命名空间隔离（#8834） |
| **终端 UI 优化** | 显示自定义请求：消息边栏（#12326）、Mermaid 后备方案清晰度（#12324）以及光标行为改进 |

---

## 开发者痛点

1. **终端状态泄漏** — 反复出现的问题：Pi 退出或挂起后鼠标追踪、Kitty 键盘协议和粘贴 bracketed paste 模式仍然启用。本周期多个 PR 解决这个问题的各种变体。

2. **缓存效率低下** — GPT-6.2 Sol 相比 6.1 显示出显著的提示词缓存退化；OpenAI Decisions 分类器的缓存计数器降至零；思考级别变更时缓存失效。

3. **OAuth 凭证陈旧** — 企业管理员启用的 GitHub Copilot 模型在令牌刷新前仍然不可见，为团队部署造成 UX 空白。

4. **llama.cpp 模态处理** — 报告支持多模态的模型（如通过 `mmproj` 支持图片输入）被错误分类为纯文本，破坏了 `models.classify()` 对视觉输入的处理。

5. **设置错误可见性** — `/reload` 期间 `settings.json` 中的解析错误被静默吞没，让用户困惑于配置更改为何没有效果。

6. **Devcontainer 剪贴板** — 自 v1.3.0 起在 devcontainer 环境中复制功能损坏，需要 `wl-clipboard` 而容器设置中可能没有。

---

*日报结束。数据来源：github.com/earendil-works/pi，时间：2026-11-20。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to:

1. Output ONLY the translation, no preamble or explanation
2. Preserve the Markdown structure exactly
3. Keep URLs, links, code, numbers, dates verbatim
4. Keep technical identifiers as-is
5. Use natural technical Chinese

Let me translate this carefully, section by section.

Key terms to handle:
- "Digest" → "动态简报" or "摘要"
- "Release" → "版本发布"
- "Hot Issues" → "热门议题" or "热点 Issue"
- "PR" → keep as "PR"
- "CI" → keep as "CI"


- "P0/P1/P2" → keep as-is
- "main" (branch) → "main" 分支
- "managed agent" → "托管 Agent"
- "gate" → "门控" or keep "gate"
- "shard" → "分片"
- "runtime" → "运行时" or "Runtime"
- "daemon" → "守护进程" or "Daemon"
- "workspace" → "工作区"
- "headless" → "无头模式"
- "ACP" → keep as-is
- "MCP" → keep as-is
- "E2E" → "端到端" or "E2E"
- "CVE" → keep as-is
- "LSP" → keep as-is
- "TOML" → keep as-is
- "Markdown" → keep as-is
- "JSONL" → keep as-is
- "RTL" → "RTL" (right-to-left)
- "xterm" → keep as-is
- "tmpfs" → keep as-is
- "inodes" → "inode"
- "Spring" → "Spring" (Java framework)
- "Broker" → "Broker"
- "iOS Safari" → "iOS Safari"
- "Web Shell" → "Web Shell"
- "CLI" → keep as-is
- "API" → keep as-is

Now I'm ready to begin translating the full document.
</think>


# Qwen Code 社区动态简报 — 2026-11-20

**仓库：** [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | **数据窗口：** 截至 2026-11-20 的 24 小时

---

## 1. 今日要闻

CI 健康度仍是今天的主旋律：Managed Agent 门控产生的追踪失败量最大（同一追踪 Issue 下积累了 484 条评论），与此同时，Java SDK 套件的慢性回归问题以及 `hz3` 上反复出现的 inode 地板溢出仍在持续阻塞合并相关流水线。功能方面，团队正在收敛几个即将默认启用的特性：动态工作流（PR #17822）、阿拉伯语 RTL 支持（PR #17437）和守护进程重启恢复收件箱（PR #17677），均处于积极 review 阶段。此外，新发现的 P1 安全问题（#17854）暴露了 MCP AUTO 模式分类器中的结构性信任绕过漏洞，需要密切关注。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。**

---

## 3. 热门议题

### Issue #14724 — Main CI failed: Managed Agent gate · [🔗](https://github.com/QwenLM/qwen-code/issues/14724)
**484 条评论 · P1 · `type/bug` · `autofix/skip`**

Managed Agent 门控在多个 commit hash 下均无任何可识别的失败测试，导致无法定位根因。社区一直在积极调试；如此庞大的评论量反映了数十次独立 CI 运行汇聚于同一追踪 Issue 的现状。**重要性：** 在此问题解决之前，所有涉及 Managed Agent 范围的 PR 都无法安全合并，因为该门控目前处于不可操作状态。并行工作（#17039 / PR #17865）正在进行中，旨在稳定门控名称本身。

### Issue #11680 — Main CI failed: E2E Tests · [🔗](https://github.com/QwenLM/qwen-code/issues/11680)
**87 条评论 · P1 · `type/bug` · `autofix/skip`**

Linux Docker 分片上的 E2E 测试套件长期失败。测试在产生任何结果之前就已触发失败，指向基础设施层面或测试发现机制的问题。**重要性：** 直接决定 `main` 分支所有 PR 的合并资格。

### Issue #13078 — Daily dependency CVE audit failed · [🔗](https://github.com/QwenLM/qwen-code/issues/13078)
**57 条评论 · P2 · `status/needs-triage` · `scope/ci-cd`**

定时执行的依赖 CVE 审计失败，runner 提示要么是依赖树中出现了新的高危漏洞，要么是 npm audit 端点无响应。**重要性：** 安全态势降级直至审计恢复；团队正在积极分类。

### Issue #11678 — Main CI failed: Qwen Code CI (Windows) · [🔗](https://github.com/QwenLM/qwen-code/issues/11678)
**44 条评论 · P1 · `type/bug` · `autofix/in-progress`**

Windows-latest + Node 22.x 测试分片在"运行测试并生成覆盖率"步骤失败。**重要性：** Windows CI 覆盖率当前处于盲区；仅在 Windows 下失败的 PR 可能被漏放。

### Issue #15486 — 压缩后 Token 估算对 pending tool result 重复计数 · [🔗](https://github.com/QwenLM/qwen-code/issues/15486)
**7 条评论 · P1 · `category/core` · `scope/token-management`**

当自动压缩在工具结果仍处于 pending 状态时触发，下一个请求的大小估算会将该结果计数两次，并额外加上一个 20K 的 pad，导致该轮次被中断或以 `max_tokens: 1` 发送。**重要性：** 这是一种静默的类数据损坏缺陷，会在多轮工具调用中途破坏对话。

### Issue #17037 — `hz3` runner inode 耗尽 · [🔗](https://github.com/QwenLM/qwen-code/issues/17037)
**6 条评论 · P1 · `scope/ci-cd`**

`hz3` 主机的 `/tmp` 因 tmpfs 上残留的 verify 工作树导致 inode 利用率达 92%，落到该机器的作业在磁盘 inode 地板门控处失败。**重要性：** 降低有效并行度；正在通知团队将作业调度到其他主机。

### Issue #17851 — Managed Agent 完整层级 `runtime_preparation_timeout` 自 2026-11-11 起持续失败 · [🔗](https://github.com/QwenLM/qwen-code/issues/17851)
**3 条评论 · P1 · `area: managed`**

完整层级 Java SDK 套件在超过一周的时间里每次定时运行均告失败，与任何 open PR 无关。**重要性：** 此回归早于最近的合并，表明已发布的 main 分支存在潜在问题。

### Issue #17854 — MCP AUTO 模式信任绕过 · [🔗](https://github.com/QwenLM/qwen-code/issues/17854)
**3 条评论 · P1 · `category/security` · `scope/mcp` · `scope/vulnerability`**

服务器级别的 MCP `trust` 完全绕过了 AUTO 模式的 LLM 分类器——来自可信服务器的新增工具以零审核状态直接执行。这是一项结构性发现，而非动态复现。**重要性：** 在 AUTO 模式下，批准某个服务器的信任级别即为其未来注册的所有工具提供了永久后门。

### Issue #17859 — iOS Safari 键盘遮挡欢迎页面发送按钮 · [🔗](https://github.com/QwenLM/qwen-code/issues/17859)
**3 条评论 · P2 · `category/ui` · `category/platform`**

在 iOS Safari 上，键盘辅助栏遮挡了欢迎页面的发送按钮；点击被遮挡的按钮只会收起键盘，需要再次点击才能提交。**重要性：** 针对日益增长的 iOS Web Shell 用户群体的直接 UX 回归。

### Issue #17188 — DeepSeek V3.1/V3.2 回退到通用输出限制 · [🔗](https://github.com/QwenLM/qwen-code/issues/17188)
**3 条评论 · P2 · `category/core` · `scope/token-management`**

模型 ID `deepseek-v3.1` 和 `deepseek-v3.2` 规范化错误，收到了 32,000 Token 的限制而非目录中标注的 65,536。**重要性：** 使用这些模型的用户被静默限制在半个上下文上限，在长输出任务中导致过早截断。

---

## 4. 重点 PR 进展

### PR #17822 — 动态工作流默认启用 · [🔗](https://github.com/QwenLM/qwen-code/pull/17822)
默认启用 Workflow 工具、`/workflows`、保存的工作流以及扩展工作流，覆盖终端、无头运行、ACP 会话和所有守护进程工作区运行时——无需手动配置。这是面向终端用户的重要可用性扩展。

### PR #17825 — 排队输入发送时立即结束工具调用轮次 · [🔗](https://github.com/QwenLM/qwen-code/pull/17825)
当用户在工具仍在运行或待审批期间点击排队中消息的"立即发送"时，Agent 现在会正确终止当前轮次，守护进程立即将新消息加入队列。弥合了轮次中断场景下的 UX 缺口。

### PR #17437 — 为 CLI 和 Web Shell 添加阿拉伯语支持及 RTL 布局 · [🔗](https://github.com/QwenLM/qwen-code/pull/17437)
在 core 和 CLI 中完成阿拉伯语语言注册，并在 Web Shell 和导出的 HTML 转录中启用 RTL 布局。包含 xterm 和 composer 中的 RTL 感知样式。

### PR #17677 — 添加守护进程重启恢复收件箱 · [🔗](https://github.com/QwenLM/qwen-code/pull/17677)
新增 `POST /sessions/recovery`（列出重启后未解决会话）和 `POST /sessions/recovery/continue`（无需打开会话即可继续选定批次）。提升了守护进程对长时间运行工作区的韧性。

### PR #17865 — 稳定 required 门控名称 · [🔗](https://github.com/QwenLM/qwen-code/pull/17865)
在所有运行类型（touched PR、untouched PR、main push 和 merge groups）中统一将 Managed Agent 检查上下文硬编码为 `Managed Agent gate`。使该门控可成为 required status check，直接对应 Issue #17039。

### PR #17901 — 限制 JSONL 尾部诊断恢复和缓存抖动 · [🔗](https://github.com/QwenLM/qwen-code/pull/17901)
解决已合并 JSONL 追加完整性修复的四个后续项中的三项。更改仅限于报告不可检查文件尾部的诊断路径，降低了缓存抖动。原生 Windows 和 current-head macOS 验证仍待完成。

### PR #17900 — 在长答案重启 E2E 中恢复持久 Runtime · [🔗](https://github.com/QwenLM/qwen-code/pull/17900)
Linux 长答案持久化场景现在在 Spring 进程 kill 事件中保持 worker Broker 存活，并允许替换 Broker 在第二个 Workspace Turn 接入前验证并接管 worker。

### PR #17902 — 修正 Dashboard 和 /stats 中的用量 Token 统计 · [🔗](https://github.com/QwenLM/qwen-code/pull/17902)
守护进程状态 Dashboard 和跨会话统计视图中的 Token 用量现在使用放置在实际响应日期的每请求用量账本，而非携带重放历史和膨胀总量的事务汇总。

### PR #17895 — 将守护进程聊天控制器绑定到会话提供者 · [🔗](https://github.com/QwenLM/qwen-code/pull/17895)
将守护进程适配器的 `useDaemonChatController` 钩子连接到实时 `DaemonSessionProvider` 状态，使守护进程聊天列可由后端无关状态驱动。这是多切片重构的 2d 切片。

### PR #17840 — 按需加载 xterm · [🔗](https://github.com/QwenLM/qwen-code/pull/17840)
延迟加载 xterm、FitAddon 和终端样式表，直至工作区或托管终端被打开。选项卡/对话框在运行时初始化期间显示加载指示器，减少了初始包体积。

---

## 5. 功能需求趋势

| 主题 | 证据 | 信号强度 |
|---|---|---|
| **会话 / 守护进程韧性** | PR #17677、#17900、#17902；Issue #17284 | 高——多个并行实现覆盖重启恢复、Token 统计和会话状态 |
| **MCP 安全加固** | Issue #17854（P1 漏洞） | 紧急——AUTO 模式中的结构性分类器绕过需要设计决策 |
| **国际化与 RTL** | PR #17437（阿拉伯语 RTL） | 增长中——阿拉伯语是首个完整 RTL 语言，后续可能跟进更多 |
| **终端 UX 与按需加载** | PR #17840、Issue #17715 | 中——xterm 性能工作，权限主体协议设计进行中 |
| **Managed Agent 功能对齐** | PR #17795、#17864、#17871、#16837 | 活跃——统一版本机制、接通 Web UI 对齐、添加存储后端 |
| **Desktop 客户端 LSP 支持** | Issue #14507（已关闭，P3） | 潜在需求——社区呼吁通过设置通道启用 LSP |
| **多 Agent 会话管理** | Issue #17284、PR #17813 | 萌芽期——H5e 卡片后续和多 Agent 群组卡片已列入路线图 |

---

## 6. 开发者痛点

| 痛点 | 出现频率 | 影响程度 |
|---|---|---|
| **E2E 和单元测试不稳定** | 高——24 小时内出现 4+ 个 deflake Issue（#17834、#17884、#17791、#17701） | 降低 CI 信号可靠性；强制手动重跑；掩盖真实回归 |
| **CI 基础设施不稳定**（`hz3` inode 地板、Windows 分片、managed-agent 门控） | 高——跨越 6+ 个活跃 Issue | 阻塞合并；在失败追踪系统中产生噪音 |
| **CVE 审计自动化缺陷** | 反复出现——Issue #13078 定时触发 | 在手动清理前仓库处于降级安全态势 |
| **模型 ID 规范化遗漏**（DeepSeek V3.x、Ollama llama4 标签） | 中——2 个 Issue（#17188、#17189） | 静默配置错误，用户无感知地降低模型能力 |
| **CLI 命令迁移文件覆写竞态** | Issue #17628 | 数据丢失风险——TOML 到 Markdown 的迁移可能截断并发创建的文件 |
| **Managed Agent Java 套件慢性失败** | 自 2026-11-11 起——Issue #17851 | 完整层级测试覆盖已盲超过一周；该范围无合并安全保障 |

---

*本动态简报基于 QwenLM/qwen-code 公开 GitHub 数据生成。所有 Issue 和 PR 链接均为有效链接。这是一份社区快照，非官方发布说明。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*