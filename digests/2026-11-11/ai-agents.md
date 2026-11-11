# OpenClaw 生态日报 2026-11-11

> Issues: 289 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-11 02:10 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. I need to:

1. Translate all the text content while preserving the Markdown structure
2. Keep all URLs, link targets, code spans, numbers, dates, version tags, file paths as-is
3. Use natural technical Chinese appropriate for a Chinese developer newsletter
4. Output ONLY the translation - no preamble, no explanation, no markdown fences

Let me carefully translate this section by section.

Key terminology I need to handle:
- "OpenClaw" - keep as-is
- "release" - 发布版本 / 发布
- "bug" - 缺陷 / Bug
- "PR" - PR (pull request)
- "issue" - Issue / 问题
- "merge" - 合并
- "community" - 社区
- "maintainer" - 维护者
- "open/closed" - 开启/关闭 or 开放/关闭
- "P0/P1" - 保持 P0/P1
- "status" - 状态
- "severity" - 严重程度
- "impact" - 影响
- "title" - 标题
- "hot topics" - 热门话题
- "feature requests" - 功能请求
- "roadmap" - 路线图
- "user feedback" - 用户反馈
- "pain points" - 痛点
- "positive feedback" - 正面反馈
- "backlog" - 待办列表 / 积压

Let me translate section by section:

## 1. 今日概览

OpenClaw 持续展现出高开发活力，过去 24 小时内有 289 个 Issue 更新和 500 个 PR 更新，表明缺陷修复和功能开发活跃。

今日发布了两个版本——v2026.11.3 和 v2026.9.37（扩展稳定版），解决了私有任务结果和可靠的子任务交接问题。社区参与度依然强劲，有 200 个开启的 Issue 和 347 个开启的 PR，但多个影响会话状态、认证提供程序和平台特定回归（尤其是 Windows）的问题需要重点关注。

维护者需要跨越多个关键问题分配注意力。

## 2. 发布版本

### v2026.11.3 — openclaw 2026.11.3
**亮点:**
- **私有任务结果**: 子代理完成内容现在在流式聊天回复中保持私有，防止信息意外泄露
- **可靠的子任务交接**: 父任务现在可以在取消子任务后顺利转移至替代工作，避免将已取消的子任务留在孤立状态

### v2026.9.37 — openclaw 2026.9.37（仅限网关，扩展稳定版）
从已停更的维护分支发布的仅限网关版本，包含关键安全更新、可靠性和性能改进，以及新模型支持。

**迁移注意**: 2026.10.10 之前版本的用户可能需要通过中间版本升级才能到达最新稳定版，因为更新路径存在限制。

## 3. 项目进度

### 今日合并/关闭的 PR
| PR | 描述 | 影响 |
|----|-------------|--------|
| #196478 | fix(ui): 避免只读聊天中过大的焦点框 | 用户体验修复 |
| #196957 | test(ui): 测量待处理代理创建状态渲染 | 测试改进 |
| #196470 | improve(ui): 在合成器菜单中首先显示附件 | 用户体验改进 |
| #196460 | fix(ui): 多行权限行中图标居中 | 无障碍 |
| #196457 | fix: 隐藏不可用的代理设置面板 | 安全/用户体验 |
| #196960 | fix(tts): 模型覆盖禁用时不输出指令提示 | 缺陷修复 |

### 待审查的开放 PR
| PR | 描述 | 优先级 |
|----|-------------|----------|
| #196706 | fix(state): K8s fsGroup 重新挂载后修复私有状态存储 | P1 |
| #196959 | fix(openai): 令牌刷新期间网络中断导致强制重新登录 | P1 |
| #196427 | feat: 发布前内联审核模板包 | P2 |
| #196388 | feat(openclaw-id): 使用恢复工具包将 claw 迁移到新密钥 | 安全敏感 |

## 4. 社区热点

### 评论最多的 Issue

**#150635** — [缺陷]: 短期记忆保留每晚清除已恢复条目 — 27 条评论
- **状态**: 开启 | **严重程度**: P2
- **核心问题**: 梦境深度阶段在短期记忆存储达到 512 条目上限后，从不提升任何条目。夜间会话转录摄入会暂存数百个零恢复条目，阻止提升。
- **影响**: 会话状态，数据丢失

**#193962** — [缺陷]: SQLite 头部探测超时修复在 2026.10.10 无法触达 — 26 条评论
- **状态**: 关闭 | **严重程度**: P0
- **核心问题**: 头部探测超时修复（#187197）存在于 2026.11.5-beta.1，但通过 `openclaw update` 从 2026.10.10 无法触达，因为包更新中 `spawnSync node ETIMEDOUT`。
- **影响**: 用户体验发布阻碍

**#123792** — [缺陷]: CLI 后端时助手轮次渲染两次 — 18 条评论
- **状态**: 开启 | **严重程度**: P2
- **核心问题**: 使用 `claude-cli` 后端时，每个助手轮次被持久化两次——实时逐块视图加上连接的聚合记录。
- **影响**: 会话状态，用户体验摩擦

**#181459** — [缺陷]: 3.5 GB 代理数据库使启动变成碰运气 — 9 条评论
- **状态**: 开启 | **严重程度**: P1
- **核心问题**: 大型代理数据库（3.5 GB）导致 18 秒开启时间和 4–6 分钟启动；代理变为不可用，提示"提交检查点过期"。嵌入存储了 3 次。
- **影响**: 崩溃循环，会话状态

**#194664** — [缺陷]: Codex 保护性延续阻止所有后续交互 — 7 条评论
- **状态**: 开启 | **严重程度**: P0
- **核心问题**: 使用原生 Codex 控制的 UI 对话在前景回复离开 CLI OAuth 设备登录等待后，无法接受后续轮次。
- **影响**: 用户体验发布阻碍

## 5. 缺陷与稳定性

### 需要立即关注的关键缺陷

| Issue | 标题 | 严重程度 | 状态 | 修复 PR? |
|-------|-------|----------|--------|---------|
| #190563 | 无法恢复暂停的 Codex 对话：提供程序审查/本机线程不匹配 | P0 | 开启 | 无 |
| #194664 | Codex 保护性延续阻止所有后续交互 | P0 | 开启 | 无 |
| #194403 | 助手完成延续使授权失效，阻止对话 | P1 | 开启 | 无 |
| #181459 | 3.5 GB 代理数据库导致启动赌博 | P1 | 开启 | 无 |
| #170928 | Windows 2026.10.2 网关需要 7–9 分钟才能就绪 | P1 | 开启 | 无 |
| #168101 | 速率限制 Retry-After 在工具调用后忽略 maxRetryDelayMs | P1 | 开启 | 无 |

### 平台特定回归

**Windows 问题:**
- 网关启动耗时 7–9 分钟，就绪后偶尔无响应
- 空闲技能刷新在 19-20 个代理处重新进入，Windows 上 CPU 占用高
- 未启用开发者模式时 Windows 上插件安装失败并报 EPERM（开放 PR）

### 会话/状态问题
多个缺陷表明持续存在的挑战包括会话维护边界、跨会话消息保留、SQLite 检查点过期以及转录中的幽灵用户消息。

## 6. 功能请求与路线图信号

### 高互动功能请求

| Issue | 标题 | 评论 | 状态 |
|-------|-------|----------|--------|
| #138366 | 让记忆槽所有者驱动梦想页面（MemoryPluginCapability 中的梦想提供程序） | 12 | 开启 |
| #138990 | 前景 WebChat 运行的可强制执行检查点和有界让渡 | 10 | 开启 |
| #192009 | 明确授权跨提供程序 cron 回退账户 | 10 | 开启 |
| #151980 | 会话模型固定应继承代理的回退链 | 7 | 开启 |
| #140213 | 允许多个策略别名解析为一个已配置模型 | 7 | 开启 |

### 功能趋势
1. **多提供程序韧性**：跨提供程序回退链和 cron 作业的明确认证表明对更好的提供程序故障转移的需求
2. **记忆/梦想用户体验**：对自定义梦想页面和记忆提升控制的强烈兴趣
3. **运行时治理**：长时间前景运行检查点策略防止失控代理
4. **MCP 2.0 迁移**：跟踪 MCP 无状态协议采用的进度

## 7. 用户反馈摘要

### 痛点

**数据库/存储问题:**
- 大型 SQLite 数据库（3.5 GB）导致启动失败和长时间延迟
- `view_image` 工具结果占用转录存储字节的 80%
- 会话维护未限制线程/通道条目

**提供程序/认证问题:**
- xAI OAuth 推理失败因版本头问题
- MiniMax 429 重试 9 次后才回退——中国配额耗尽误分类
- OpenAI 令牌刷新在网络中断时失败，强制重新登录

**CLI/后端问题:**
- `claude-cli` 后端导致助手轮次双重渲染
- 始终无法启动 claude-cli-runtime 子进程的会话生成

**用户体验摩擦:**
- WebChat 用中间截断（U+2026）渲染特殊目录的长路径
- macOS 上 OpenClaw 标签页可见时 WindowServer CPU 飙升
- 只读聊天显示误导性焦点框（已修复）

### 正面反馈指标
- 活跃维护：24 小时内合并 153 个 PR，显示健康的代码产出
- 社区贡献：来自外部贡献者的多个 PR
- 发布节奏：稳定发布稳定版和测试版

## 8. 待办积压关注

### 长期未回复的重要 Issue（超过 7 天未更新，需要维护者关注）

| Issue | 标题 | 创建时间 | 评论 | 标签 |
|-------|-------|---------|----------|--------|
| #92473 | 模型回退通知泄露到外部用户面向渠道 | 2026-06-12 | 9 | 需要产品决策 |
| #112313 | 死信出站投递队列条目永久保留 | 2026-07-21 | 12 | 需要产品决策 |
| #132767 | 通用 CLI 主机缺少"组装后提示" | 2026-08-29 | 6 | 需要维护者审查 |
| #138561 | 2026.8.2 后活动记忆插件停止恢复 | 2026-09-04 | 13 | 需要信息 |
| #138366 | 梦想页面梦想提供程序功能请求 | 2026-09-04 | 12 | 需要产品决策 |
| #143980 | Docker 沙箱代理中 taskSuggestions.accept 失败 | 2026-09-10 | 7 | 已提供来源复现 |
| #151173 | memory-core 恢复再水化锚定在片段上 | 2026-09-17 | 7 | 关联 PR 已开放 |

### 需要作者/维护者操作的停滞 PR

| PR | 标题 | 状态 | 风险 |
|----|-------|--------|------|
| #143882 | feat(slack): 将流式推理渲染为任务卡片 | 等待作者 | 兼容性 |
| #196427 | feat: 发布前内联审核模板包 | 等待作者 | 兼容性 |
| #196388 | feat(openclaw-id): 使用恢复工具包将 claw 迁移到新密钥 | 等待作者 | 安全敏感 |
| #178320 | fix(skills): 保留审查取消中的源上下文 | 等待维护者 | — |

## 摘要指标

| 指标 | 数值 |
|--------|-------|
| 活跃 Issue（24h） | 289 |
| 活跃 PR（24h） | 500 |
| 开启 Issue | 200 |
| 开启 PR | 347 |
| 今日发布版本 | 2 |
| 关键 P0 缺陷 | 2 |
| 高优先级 P1 缺陷 | 8 |

**项目健康评估**: OpenClaw 展现出强劲的开发活力和社区参与度。主要关注点是平台特定回归（Windows 启动、macOS CPU）、会话/状态管理缺陷，以及提供程序认证可靠性。维护者应优先处理阻止 Codex 聊天功能的 2 个 P0 缺陷和 Windows 网关就绪回归问题。 维护者应优先处理 2 个阻止 Codex 聊天功能的 P0 问题以及 Windows 网关就绪回归问题。
</think>


# OpenClaw 项目日报 — 2026-11-11

## 1. 今日概览

OpenClaw 持续展现出高开发活力，过去 24 小时内有 289 个 Issue 更新和 500 个 PR 更新，表明缺陷修复和功能开发活跃。今日发布了两个版本——v2026.11.3 和 v2026.9.37（扩展稳定版），解决了私有任务结果和可靠的子任务交接问题。社区参与度依然强劲，有 200 个开放 Issue 和 347 个开放 PR，但多个影响会话状态、认证提供程序和平台特定回归（尤其是 Windows）的问题正在引发大量讨论。该项目在各个渠道都表现出健康的活跃度，但维护者的注意力分散在多个 P0/P1 级别的问题上。

---

## 2. 发布版本

### v2026.11.3 — openclaw 2026.11.3
**亮点:**
- **私有任务结果**: 子代理完成内容现在在流式聊天回复中保持私有，防止信息意外泄露（[#188490](https://github.com/openclaw/openclaw/issues/188490)）。感谢 @fuller-stack-dev。
- **可靠的子任务交接**: 父任务现在可以在取消子任务后将工作交接给替代任务，而不会让被取消的子任务处于孤立状态。

### v2026.9.37 — openclaw 2026.9.37（仅限网关，扩展稳定版）
从已停更的维护线发布的一个仅限网关的版本，包含：
- 关键安全更新
- 可靠性和性能修复
- 新模型支持

**迁移注意**: 2026.10.10 之前版本的用户可能需要通过中间版本升级才能到达最新稳定版，因为更新路径存在限制（参见 [Issue #193962](https://github.com/openclaw/openclaw/issues/193962)）。

---

## 3. 项目进度

### 今日合并/关闭的 PR
| PR | 描述 | 影响 |
|----|-------------|--------|
| [#196478](https://github.com/openclaw/openclaw/pull/196478) | fix(ui): 避免只读聊天中过大的焦点框 | UX 修复 |
| [#196957](https://github.com/openclaw/openclaw/pull/196957) | test(ui): 测量待处理代理创建状态的渲染 | 测试改进 |
| [#196470](https://github.com/openclaw/openclaw/pull/196470) | improve(ui): 在编辑器菜单中优先显示附件 | UX 改进 |
| [#196460](https://github.com/openclaw/openclaw/pull/196460) | fix(ui): 多行权限行中的图标居中显示 | 无障碍访问 |
| [#196457](https://github.com/openclaw/openclaw/pull/196457) | fix: 隐藏不可用的代理设置面板 | 安全/UX |
| [#196960](https://github.com/openclaw/openclaw/pull/196960) | fix(tts): 模型覆盖禁用时不输出指令提示 | Bug 修复 |

### 值得关注的待审查开放 PR
| PR | 描述 | 优先级 |
|----|-------------|----------|
| [#196706](https://github.com/openclaw/openclaw/pull/196706) | fix(state): K8s fsGroup 重新挂载后修复私有状态存储 | P1 |
| [#196959](https://github.com/openclaw/openclaw/pull/196959) | fix(openai): 网络中断导致令牌刷新失败，强制重新登录 ChatGPT | P1 |
| [#196427](https://github.com/openclaw/openclaw/pull/196427) | feat: 发布前内联审核模板包 | P2 |
| [#196388](https://github.com/openclaw/openclaw/pull/196388) | feat(openclaw-id): 使用恢复工具包将 claw 迁移到新密钥 | 安全敏感 |

---

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

**#150635** — [Bug]: 短期记忆保留每晚清除已恢复条目 — 27 条评论
- **状态**: 开放 | **严重程度**: P2
- **链接**: https://github.com/openclaw/openclaw/issues/150635
- **核心问题**: 一旦短期记忆存储达到 512 条目上限，深度记忆阶段就永远不会提升任何内容。夜间会话转录摄入会暂存数百个零恢复条目，阻止提升。
- **影响**: 会话状态、数据丢失

**#193962** — [Bug]: SQLite header-probe 超时修复在 2026.10.10 无法触达 — 26 条评论
- **状态**: 已关闭 | **严重程度**: P0
- **链接**: https://github.com/openclaw/openclaw/issues/193962
- **核心问题**: header-probe 超时修复（#187197）存在于 2026.11.5-beta.1，但通过 `openclaw update` 从 2026.10.10 无法触达，因为包更新中存在 `spawnSync node ETIMEDOUT`。
- **影响**: UX 发布阻碍

**#123792** — [Bug]: 助手轮次在 CLI 后端渲染两次 — 18 条评论
- **状态**: 开放 | **严重程度**: P2
- **链接**: https://github.com/openclaw/openclaw/issues/123792
- **核心问题**: 使用 `claude-cli` 后端时，每个助手轮次被持久化两次——实时逐块视图加上连接的聚合记录。
- **影响**: 会话状态、UX 摩擦

**#181459** — [Bug]: 3.5 GB 代理数据库使启动变成碰运气 — 9 条评论
- **状态**: 开放 | **严重程度**: P1
- **链接**: https://github.com/openclaw/openclaw/issues/181459
- **核心问题**: 大型代理数据库（3.5 GB）导致 18 秒开启时间和 4–6 分钟启动；代理变为 UNAVAILABLE，提示"提交检查点已过期"。嵌入数据存储了 3 份。
- **影响**: 崩溃循环、会话状态

**#194664** — [Bug]: Codex 保护性延续阻止所有后续交互 — 7 条评论
- **状态**: 开放 | **严重程度**: P0
- **链接**: https://github.com/openclaw/openclaw/issues/194664
- **核心问题**: 使用原生 Codex 控制的 UI 对话在前景回复离开 CLI OAuth 设备登录等待后，无法接受后续轮次。
- **影响**: UX 发布阻碍

---

## 5. Bug 与稳定性

### 需要立即关注的关键（P0/P1）Bug

| Issue | 标题 | 严重程度 | 状态 | 有修复 PR？ |
|-------|-------|----------|--------|---------|
| [#190563](https://github.com/openclaw/openclaw/issues/190563) | 无法恢复暂停的 Codex 聊天：provider review/native 线程不匹配 | P0 | 开放 | 无 |
| [#194664](https://github.com/openclaw/openclaw/issues/194664) | Codex 保护性延续阻止所有后续交互 | P0 | 开放 | 无 |
| [#194403](https://github.com/openclaw/openclaw/issues/194403) | 助手完成延续使授权失效，阻止对话 | P1 | 开放 | 无 |
| [#181459](https://github.com/openclaw/openclaw/issues/181459) | 3.5 GB 代理数据库导致启动赌博 | P1 | 开放 | 无 |
| [#170928](https://github.com/openclaw/openclaw/issues/170928) | Windows 2026.10.2 网关需要 7–9 分钟才能就绪 | P1 | 开放 | 无 |
| [#168101](https://github.com/openclaw/openclaw/issues/168101) | Rate-limit Retry-After 在工具调用后忽略 maxRetryDelayMs | P1 | 开放 | 无 |

### 平台特定回归

**Windows 问题:**
- [#170928](https://github.com/openclaw/openclaw/issues/170928): 网关启动需要 7–9 分钟，就绪后间歇性无响应
- [#192496](https://github.com/openclaw/openclaw/issues/192496): 空闲技能刷新在 19-20 个代理处重新进入，Windows 上 CPU 占用高
- [#196956](https://github.com/openclaw/openclaw/pull/196956): 未启用开发者模式时 Windows 上插件安装失败并报 EPERM（待合并 PR）

### 会话/状态问题
多个 Bug 表明会话维护边界、跨会话消息保留、SQLite 检查点过期和转录中的幽灵用户消息方面存在持续挑战。

---

## 6. 功能请求与路线图信号

### 高互动功能请求

| Issue | 标题 | 评论数 | 状态 |
|-------|-------|----------|--------|
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | 让记忆槽所有者驱动 Dreams 页面（MemoryPluginCapability 中的 dreaming provider） | 12 | 开放 |
| [#138990](https://github.com/openclaw/openclaw/issues/138990) | 前景 WebChat 运行的可强制执行检查点和有界让渡 | 10 | 开放 |
| [#192009](https://github.com/openclaw/openclaw/issues/192009) | 明确授权跨 provider 的 cron 回退账户 | 10 | 开放 |
| [#151980](https://github.com/openclaw/openclaw/issues/151980) | 会话模型固定应继承代理的回退链 | 7 | 开放 |
| [#140213](https://github.com/openclaw/openclaw/issues/140213) | 允许多个策略别名解析为一个已配置模型 | 7 | 开放 |

### 功能趋势
1. **多 provider 韧性**: 跨 provider 回退链和 cron 作业的明确认证表明对更好的 provider 故障转移的需求
2. **记忆/梦境 UX**: 对自定义 Dreams 页面和记忆提升控制的强烈兴趣
3. **运行时治理**: 长时间前景运行检查点策略防止失控代理
4. **MCP 2.0 迁移**: [Issue #119294](https://github.com/openclaw/openclaw/issues/119294) 跟踪 MCP 无状态协议采用情况

---

## 7. 用户反馈摘要

### 痛点

**数据库/存储问题:**
- 大型 SQLite 数据库（3.5 GB）导致启动失败和长时间延迟
- `view_image` 工具结果占用转录存储字节的 80%（[#143973](https://github.com/openclaw/openclaw/issues/143973)）
- 会话维护未限制线程/通道条目（[#112638](https://github.com/openclaw/openclaw/issues/112638)）

**Provider/认证问题:**
- xAI OAuth 推理失败因版本头问题（[#147728](https://github.com/openclaw/openclaw/issues/147728)）
- MiniMax 429 重试 9 次后才回退——中国配额耗尽误分类（[#177077](https://github.com/openclaw/openclaw/issues/177077)）
- OpenAI 令牌刷新在网络中断时失败，强制重新登录（[#196958](https://github.com/openclaw/openclaw/issues/196958)）

**CLI/后端问题:**
- `claude-cli` 后端导致助手轮次双重渲染
- 始终无法启动 claude-cli-runtime 子进程的会话生成（[#154572](https://github.com/openclaw/openclaw/issues/154572)）

**UX 摩擦:**
- WebChat 用中间截断（U+2026）渲染特殊目录的长路径（[#172986](https://github.com/openclaw/openclaw/issues/172986)）
- macOS 上 OpenClaw 标签页可见时 WindowServer CPU 飙升（[#138918](https://github.com/openclaw/openclaw/issues/138918)）
- 只读聊天显示误导性焦点框（[#196478](https://github.com/openclaw/openclaw/pull/196478) —— 已修复）

### 正面反馈指标
- 活跃维护：24 小时内合并 153 个 PR，显示健康的代码产出
- 社区贡献：来自外部贡献者的多个 PR
- 发布节奏：持续稳定发布稳定版和测试版

---

## 8. 积压关注

### 长期未回复的重要 Issue（超过 7 天未更新，需要维护者关注）

| Issue | 标题 | 创建时间 | 评论数 | 标签 |
|-------|-------|---------|----------|--------|
| [#92473](https://github.com/openclaw/openclaw/issues/92473) | 模型回退通知泄露到外部用户面向渠道 | 2026-06-12 | 9 | 需要产品决策 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 死信出站投递队列条目永久保留 | 2026-07-21 | 12 | 需要产品决策 |
| [#132767](https://github.com/openclaw/openclaw/issues/132767) | 通用 CLI 主机缺少"组装后提示" | 2026-08-29 | 6 | 需要维护者审查 |
| [#138561](https://github.com/openclaw/openclaw/issues/138561) | 2026.8.2 后 active-memory 插件停止恢复 | 2026-09-04 | 13 | 需要更多信息 |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | Dreams 页面 dreaming provider 功能请求 | 2026-09-04 | 12 | 需要产品决策 |
| [#143980](https://github.com/openclaw/openclaw/issues/143980) | Docker 沙箱代理中 taskSuggestions.accept 失败 | 2026-09-10 | 7 | 已提供复现步骤 |
| [#151173](https://github.com/openclaw/openclaw/issues/151173) | memory-core 恢复再水化锚定在片段上 | 2026-09-17 | 7 | 关联 PR 已开放 |

### 需要作者/维护者操作的停滞 PR

| PR | 标题 | 状态 | 风险 |
|----|-------|--------|------|
| [#143882](https://github.com/openclaw/openclaw/pull/143882) | feat(slack): 将流式推理渲染为任务卡片 | 等待作者 | 🚨 兼容性 |
| [#196427](https://github.com/openclaw/openclaw/pull/196427) | feat: 发布前内联审核模板包 | 等待作者 | 🚨 兼容性 |
| [#196388](https://github.com/openclaw/openclaw/pull/196388) | feat(openclaw-id): 使用恢复工具包将 claw 迁移到新密钥 | 等待作者 | 安全敏感 |
| [#178320](https://github.com/openclaw/openclaw/pull/178320) | fix(skills): 保留审查取消中的源上下文 | 等待维护者 | — |

---

## 摘要指标

| 指标 | 数值 |
|--------|-------|
| 活跃 Issue（24h） | 289 |
| 活跃 PR（24h） | 500 |
| 开放 Issue | 200 |
| 开放 PR | 347 |
| 今日发布版本 | 2 |
| 关键 P0 问题 | 2 |
| 高优先级 P1 问题 | 8 |

**项目健康评估**: OpenClaw 展现出强劲的开发活力和社区参与度。主要关注点是平台特定回归（Windows 启动、macOS CPU）、会话/状态管理缺陷，以及 provider 认证可靠性。维护者应优先处理阻止 Codex 聊天功能的 2 个 P0 问题和 Windows 网关就绪回归问题。

---

## 横向生态对比

<think>The user wants me to translate the English technical report into Simplified Chinese. I need to follow the rules:
- Output ONLY the translation, no preamble, no explanation, no markdown fences
- Preserve all Markdown structure (headings, tables, lists, blockquotes, etc.)
- Keep URLs, numbers, dates, code spans, code blocks as-is
- Keep project names, repository slugs, usernames, version tags, file paths, API/config identifiers in original form
- Use natural technical Chinese, the register of a Chinese developer newsletter

Let me translate this carefully section by section.
</think>


# 跨项目生态报告：个人 AI 助手开源领域全景

## 1. 生态概览

个人 AI 助手与 Agent 开源领域呈现出**成熟度分化**的格局，在开发节奏、社区活跃度和技术成熟度上存在显著差异。OpenClaw 在绝对活动量上遥遥领先（24 小时内 289 个 issue、500 个 PR），但高活跃度也意味着更大的复杂度和更高的缺陷暴露面。Hermes Agent 和 ZeroClaw 则展现出更规范、质量导向的开发模式，噪音信号比更低。QwenPaw 在本地化和多渠道集成方面发力明显（支持 QQ、飞书、微信、钉钉），面向东亚企业市场。各项目在多 Provider 回退机制、会话/状态管理强化和插件架构方面的演进方向趋于一致，但实现路径差异较大。

---

## 2. 活动量对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw | IronClaw |
|------|----------|--------------|---------|----------|----------|
| **Issue 更新（24h）** | 289 | 50 | 14 | 16 | 0 |
| **PR 更新（24h）** | 500 | 50 | 39 | 50 | 0 |
| **Open Issue** | 200 | 47 | 9 | 4 | — |
| **Open PR** | 347 | 26 | 21 | 39 | — |
| **发布（24h）** | 2 | 0 | 1 | 0（筹备中） | — |
| **Critical/S0 问题** | 2 | 1（安全相关） | 3 | 1 | — |
| **高优先级问题** | 8 | 4 | 2 | 4 | — |
| **热点讨论评论数** | 27 | 39 | 4 | 16 | — |
| **细分领域** | 通用 | 通用/研究 | 企业/本地化 | 通用/安全 | — |

**健康度评估：**

| 项目 | 健康度评分 | 依据 |
|------|------------|------|
| **OpenClaw** | **7.2/10** | 高吞吐量被 2 个 P0 缺陷和 Windows 回归问题所拖累，维护者精力分散 |
| **Hermes Agent** | **7.5/10** | 安全响应能力强，但智能审批机制下的数据丢失问题需紧急处理 |
| **QwenPaw** | **7.8/10** | Beta 发布节奏稳定，桌面打包问题正在修复中 |
| **ZeroClaw** | **7.6/10** | 发布筹备规范，PR 质量把关严格，但 relay TLS 问题悬而未决 |
| **IronClaw** | **N/A** | 活动数据不足 |

---

## 3. OpenClaw 的定位

### 与同类项目的对比优势

**规模优势：**
- **活动量是其他项目的 10 倍**，反映出更庞大的社区和更多样化的使用场景
- **问题响应最快**：24 小时内合并/关闭 153 个 PR，吞吐量惊人
- **平台覆盖最广**：Windows、macOS、Linux 均有活跃的问题追踪和修复
- **插件生态最丰富**：OpenClaw CLI 与广泛的 MCP（Model Context Protocol）深度集成

**技术路线的差异化：**

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------|----------|--------------|---------|----------|
| **架构** | 模块化 CLI 优先 | 插件中心化 | 桌面原生 | Rust 原生轻量级 |
| **会话模型** | Dreaming + recall 提升机制 | 基于 profile 的隔离 | 任务/会话切换 | Gateway 分发 |
| **Provider 抽象** | 多 Provider 回退机制 | 通过 MCP 实现 Provider 无关 | 渠道 + 模型双层抽象 | Relay + 直连 |
| **审批模型** | 可配置（智能/手动） | 智能审批 + 安全事件处理 | 渠道级角色权限 | OIDC 集成 |

### 社区规模对比

OpenClaw 社区的讨论量约为 Hermes Agent 的 **6 倍**、QwenPaw 的 **18 倍**（按热点话题评论数计）。然而，这也意味着 OpenClaw 维护者需要处理更多 triage 工作。ZeroClaw 虽社区较小但参与度高（追踪 issue 上 16 条评论），暗示其用户群体更为专业、聚焦。

---

## 4. 各项目共同关注的技术方向

### 跨项目浮现的需求

#### A. 多 Provider 容灾与回退
| 项目 | 具体需求 |
|------|----------|
| **OpenClaw** | 跨 Provider cron 回退账户（Issue #192009）；MiniMax 429 重试误判（Issue #177077） |
| **Hermes Agent** | OpenAI token 刷新失败恢复（PR #196958）；Provider 认证状态管理 |
| **QwenPaw** | 阿里云 Token Plan thinking_param_style 缺失（Issue #7990）；TTS Provider 兼容性 |
| **ZeroClaw** | 各 Provider 温度参数拒绝处理（Issues #12366, #12362, #12357） |

**信号**：生态圈普遍面临 Provider 异构性问题——各 API 均有独特的限制条件（温度参数拒绝、token 刷新行为、配额耗尽模式），需要自适应的回退逻辑。

#### B. 会话与状态管理强化
| 项目 | 具体问题 |
|------|----------|
| **OpenClaw** | 短期 recall 驱逐（Issue #150635）；SQLite checkpoint 过期（Issue #181459）；幽灵消息（Issue #151962） |
| **Hermes Agent** | Profile 重命名后会话收据身份问题；Bots 列表轮询性能（Issue #151727） |
| **QwenPaw** | 附件路径截断（Issue #8655）；模型切换持久化（Issue #8652） |
| **ZeroClaw** | 工具结果保留以支持有限恢复（PR #11911） |

**信号**：会话状态——尤其是持久化、恢复和跨会话连续性——是各项目共同面临的挑战。各项目正在收敛于有限历史窗口策略、显式 checkpoint 策略和分层内存（短期/长期 recall）。

#### C. 插件架构成熟化
| 项目 | 插件投入 |
|------|----------|
| **OpenClaw** | MCP 2.0 迁移追踪（Issue #119294）；插件发布优化 |
| **Hermes Agent** | 插件 Hackathon 参赛作品（stoa、IDEA CUT、webgraft、stagehands）；第三方 Agent 提取（PR #8426） |
| **QwenPaw** | 渠道插件启动竞态修复；增量依赖恢复 |
| **ZeroClaw** | 凭证管理中的作用域密钥引用（Issue #12373） |

**信号**：插件生态正从临时集成转向结构化插件模型，涵盖依赖管理、安全边界和生命周期控制。

#### D. 平台特定稳定性
| 项目 | 平台挑战 |
|------|----------|
| **OpenClaw** | Windows Gateway 7–9 分钟启动（Issue #170928）；macOS CPU 飙升 |
| **Hermes Agent** | macOS Gateway 存活探针退出（Issue #137838）；Windows GBK 编码崩溃 |
| **QwenPaw** | 桌面打包构建失败；Safari WebKit 兼容性 |
| **ZeroClaw** | install.sh 中 musl/glibc 主机检测（Issue #12153） |

**信号**：跨平台一致性仍是难题。各项目处理平台特定问题（TLS 实现、字符编码、进程生命周期）的方式各异，尚无统一的平台抽象策略。

---

## 5. 差异化分析

### 功能定位差异化

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|------|----------|--------------|---------|----------|
| **核心定位** | 多后端通用 CLI Agent | 安全多渠道部署 | 桌面原生多渠道企业版 | 轻量 Rust 原生 Relay |
| **差异化特性** | 私有任务结果；Dreaming 记忆系统 | 智能审批 + 安全加固 | 本地模型支持（llama.cpp、MLX）；东亚渠道 | OIDC/Gateway 分发；原生 XMPP + OMEMO |
| **安全模型** | 逐会话权限控制 | 审批模式（智能/手动） | 渠道级角色权限 | OIDC 集成的操作员模型 |
| **目标用户** | 开发者、进阶用户 | 企业运维团队 | 东亚企业用户 | 注重安全性的自托管用户 |

### 技术架构差异

```
OpenClaw:     CLI Core + MCP Bridge + Dreaming Engine + Multi-Provider Gateway
              ├── 优势：可扩展性强，社区规模大
              └── 劣势：复杂度高，平台回归问题频发

Hermes Agent: Plugin Architecture + Channel Gateway + Approval System
              ├── 优势：安全设计意识强，多渠道成熟
              └── 劣势：智能审批边界情况多

QwenPaw:      Desktop-Native Core + Channel Plugins + Local Model Runtime
              ├── 优势：桌面体验好，本地推理支持完善，本地化深入
              └── 劣势：桌面打包脆弱，Safari 支持不足

ZeroClaw:     Rust-Native Relay + OIDC Auth + Gateway Delivery
              ├── 优势：性能优，安全性高，依赖少
              └── 劣势：社区较小，渠道支持范围窄

IronClaw:     [无活动数据]
```

### 目标用户细分

| 用户群体 | 最佳匹配 |
|----------|----------|
| **追求可扩展性的通用开发者** | OpenClaw |
| **需要安全多渠道的企业团队** | Hermes Agent |
| **有本地化需求的东亚企业** | QwenPaw |
| **注重安全性的自托管部署** | ZeroClaw |
| **追求最小化部署** | ZeroClaw（Rust 原生） |

---

## 6. 社区活力与成熟度

### 活跃度分层

| 分层 | 项目 | 特征 |
|------|------|------|
| **第一层：快速迭代** | **OpenClaw** | >500 次更新/天，2 次发布/天，issue 队列庞大，社区驱动演进 |
| **第二层：活跃开发** | **Hermes Agent**、**ZeroClaw** | ~50 次更新/天，周期性发布，质量与安全并重 |
| **第三层：稳步稳定** | **QwenPaw** | ~40 次更新/天，Beta 发布节奏，接近 v2.3.0 稳定版 |
| **第四层：停滞** | **IronClaw** | 零活动，可能已废弃或重写中 |

### 增长势能指标

| 项目 | 势能趋势 | 关键信号 |
|------|----------|----------|
| **OpenClaw** | ⚖️ 稳定高位 | 活跃度持续高位，维护者容量渐成瓶颈 |
| **Hermes Agent** | 📈 加速中 | 插件 Hackathon 活跃；新渠道集成持续加入 |
| **QwenPaw** | 📈 加速中 | 本地模型基础设施持续投入；企业渠道发力 |
| **ZeroClaw** | ⚖️ 稳定 | v0.9.0 发布筹备中；质量把控严格 |
| **IronClaw** | ⏸️ 沉寂 | 零活动——可能已废弃或处于重写阶段 |

### 成熟度评估

| 项目 | 成熟度 | 佐证 |
|------|--------|------|
| **OpenClaw** | **成熟** | 成熟的发布节奏、庞大社区、完善的迁移文档 |
| **Hermes Agent** | **成长中** | 安全事件驱动安全加固；插件生态扩张中 |
| **QwenPaw** | **成长中** | Beta 阶段；桌面 UX 持续打磨；本地模型支持走向成熟 |
| **ZeroClaw** | **早期成熟** | Rust 架构带来稳定性；v0.9.0 预示即将稳定 |
| **IronClaw** | **未知** | 数据不足 |

---

## 7. 趋势信号

### 给 AI Agent 框架开发者的信号

#### 信号 1：Provider 抽象比预期更难
**观察**：四个活跃项目均在多 Provider 兼容性上遇到困难。仅温度参数处理一项，就在 OpenClaw 和 ZeroClaw 中触发了多个 bug 修复。

**启示**：框架开发者应在 Provider 能力目录上加大投入，建立显式的约束声明机制（各 Provider 拒绝哪些参数、支持哪些认证流程、响应格式有何差异）。

#### 信号 2：会话状态需要显式设计
**观察**：Recall 驱逐、checkpoint 过期、幽灵消息和附件持久化问题在各项目中均有出现。

**启示**：会话状态管理——有限历史窗口、分层内存、显式 checkpoint 策略——并非已解决的问题。框架需要提供有主见的默认值，同时支持可配置覆盖。

#### 信号 3：桌面打包仍是脆弱环节
**观察**：QwenPaw 的桌面插件故障、OpenClaw 的 Windows 启动回归、Hermes Agent 的 macOS 存活探针问题，说明桌面打包在系统测试中被持续忽视。

**启示**：桌面部署需求不可忽视但支持不足。CI/CD 流水线应纳入跨 Windows、macOS、Linux 的桌面打包验证。

#### 信号 4：安全审批模型需要重新审视
**观察**：Hermes Agent 的智能审批自动批准了破坏性 osascript 命令（39 条评论，社区高度警觉）。OpenClaw 的终端后台绕过（Issue #90789）悬而未决。

**启示**：基于"安全"行为模式学习的审批系统，必然会在数据丢失风险场景中遭遇边界情况。框架应考虑对危险操作建立显式分类体系，而非单纯依赖行为分析。

#### 信号 5：插件生态需要依赖管理
**观察**：QwenPaw 的渠道插件启动竞态和依赖丢失；Hermes Agent 的增量依赖恢复需求。

**启示**：插件架构需要依赖声明、生命周期钩子和恢复机制——而不仅仅是 API 接口定义。

### 给企业决策者的参考

| 考量因素 | 建议 |
|----------|------|
| **多渠道部署** | Hermes Agent 提供成熟的渠道抽象；QwenPaw 在东亚渠道上优势明显 |
| **自托管安全性** | ZeroClaw 的 Rust 原生架构和 OIDC 集成适合安全敏感环境 |
| **开发者可扩展性** | OpenClaw 的 MCP 支持和 Dreaming 记忆系统支持复杂 Agent 行为 |
| **本地推理** | QwenPaw 是唯一有活跃 llama.cpp 和 MLX 集成的项目 |
| **社区支持** | OpenClaw 社区最大但 issue 队列最长；ZeroClaw 提供更聚焦的专业支持 |

---

*本报告基于 2026-11-11 的社区动态数据，涵盖 OpenClaw、GitHub - biubush/hermes-agent: A smart personal AI agent for everyone、GitHub - kexi零点零/ironclaw: open source project、QwenPaw 和 ZeroClaw 仓库。*

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the entire technical report from English to Simplified Chinese. Let me translate it maintaining the exact structure, formatting, and all technical elements.

I need to:
1. Translate all headings, body text, and table content
2. Keep URLs, issue numbers, code references, and technical identifiers exactly as-is
3. Use natural technical Chinese register
4. Preserve all Markdown formatting (tables, lists, bold, etc.)
5. No preamble or explanation - just the translation

Let me work through this section by section.
</think>


# Hermes Agent 项目摘要 — 2026-11-11

## 1. 今日概览

Hermes Agent 在过去 24 小时内共有 50 个 issue 和 50 个 PR 保持更新，社区活跃度较高。项目维护态势良好，共合并/关闭 24 个 PR，但今日未发布新版本。最值得关注的是一项严重安全漏洞（#141346），智能审批机制自动批准了 osascript 命令，导致用户数据不可恢复地丢失——该问题已获得 39 条评论，表明社区高度关注。插件生态持续强劲增长，新增多个黑客松参赛作品和目录条目，同时稳定性修复工作覆盖 macOS、Windows 和 Linux 各平台。

## 2. 版本发布

**今日无新版本发布。** 项目最近一次发布版本时间早于 2026-11-11。

## 3. 项目进展

### 已合并/关闭的 PR（24 个）

| PR | 组件 | 描述 |
|----|-----------|-------------|
| [#152766](https://github.com/NousResearch/hermes-agent/pull/152766) | plugins | Decision Ledger v0.3.2，新增只读 Decision Board |
| [#152907](https://github.com/NousResearch/hermes-agent/pull/152907) | plugins | 新增 Whiteboard 插件（Desktop 专用白板工具） |
| [#152705](https://github.com/NousResearch/hermes-agent/pull/152705) | plugins | second-key 升级至 v0.2.0（Plugin 黑客松参赛作品） |
| [#152416](https://github.com/NousResearch/hermes-agent/pull/152416) | plugins | 注册 proactive-agent 调控插件 |
| [#111364](https://github.com/NousResearch/hermes-agent/issues/111364) | gateway | Telegram gateway 可靠性修复（日志记录、重连恢复） |
| [#125695](https://github.com/NousResearch/hermes-agent/issues/125695) | agent | 修复 Codex 路由忽略模型作用域问题（冷却机制 bug） |

### 新增 Open PR（值得注意）

| PR | 组件 | 类型 | 描述 |
|----|-----------|------|-------------|
| [#153061](https://github.com/NousResearch/hermes-agent/pull/153061) | gateway | bugfix | 含空格的 MEDIA 路径现在能正确发送一次 |
| [#153054](https://github.com/NousResearch/hermes-agent/pull/153054) | gateway | bugfix | 转录的语音消息保留音频路径 |
| [#152168](https://github.com/NousResearch/hermes-agent/pull/152168) | desktop | feature | 重新设计 agent 工作区，提供经典模式恢复选项 |
| [#151025](https://github.com/NousResearch/hermes-agent/pull/151025) | cli | bugfix | cron create/edit 支持 `repeat=forever/once` 字符串参数 |
| [#153057](https://github.com/NousResearch/hermes-agent/pull/153057) | tui | feature | TUI 审批/确认提示支持点击链接 |

### 插件目录新增

- **stoa** — Plugin 黑客松参赛作品（[#153000](https://github.com/NousResearch/hermes-agent/pull/153000)）
- **IDEA CUT** — AI 视频与教程工作室（[#153017](https://github.com/NousResearch/hermes-agent/pull/153017)）
- **webgraft** — 本地 `web_extract` 后端，含来源页脚（[#153056](https://github.com/NousResearch/hermes-agent/pull/153056)）
- **stagehands** v1.0.0 — Sovereign 与 Stagehands 集成（[#153058](https://github.com/NousResearch/hermes-agent/pull/153058)）

## 4. 社区热点

### 评论最多的 Issue（按评论数排序）

**#141346** — **【严重】智能审批自动批准 osascript 命令，导致用户数据不可恢复丢失**
- **评论数：** 39 | **严重级别：** P3 安全漏洞 | **平台：** macOS
- **URL：** https://github.com/NousResearch/hermes-agent/issues/141346
- **分析：** `approvals.mode` 默认为 `smart`，导致 agent 可通过 `osascript` 驱动 Microsoft PowerPoint 将幻灯片渲染为 PNG，最终导致未保存的 PowerPoint 文稿被关闭，数据永久丢失。这揭示了智能审批系统对破坏性操作的认知存在根本性缺陷。

**#137838** — **macOS gateway 存活探针失败后反复退出 75**
- **评论数：** 11 | **严重级别：** P2 | **平台：** macOS
- **URL：** https://github.com/NousResearch/hermes-agent/issues/137838
- **分析：** 根本原因尚未确认；最初归因于 MCP 流拆除阻塞事件循环，但后被推翻。正在调查持续取消模式的根因。

**#125695** — **辅助 Codex 路由忽略模型作用域**
- **评论数：** 10 | **状态：** 已关闭 | **严重级别：** P2
- **URL：** https://github.com/NousResearch/hermes-agent/issues/125695
- **分析：** 一个模型的权限冷却导致使用相同凭证的所有任务的智能审批、视觉功能和标题被禁用——现已修复。

**#132820** — **Matrix extra 的 E2EE 构建导致 Linux 上 hermes update 失败**
- **评论数：** 8 | **严重级别：** P1 | **平台：** Linux, macOS
- **URL：** https://github.com/NousResearch/hermes-agent/issues/132820
- **分析：** 本周收到 7 条报告；原生 `libolm` CMake 构建因主机环境原因失败，与 Matrix 配置无关。在 Linux 上无法选择退出。

**#90789** — **【安全】terminal(background=true) 绕过危险命令同意门控**
- **评论数：** 4 | **严重级别：** P2 | **状态：** 已关闭
- **URL：** https://github.com/NousResearch/hermes-agent/issues/90789
- **分析：** 后台终端调用即使同一命令在前台模式被拦截，也能在未经同意的情况下执行。

## 5. Bug 与稳定性

### 严重/高优先级 Bug

| 优先级 | Issue | 组件 | 状态 | 修复 PR |
|----------|-------|-----------|--------|--------|
| **P1** | [#132820](https://github.com/NousResearch/hermes-agent/issues/132820) — Matrix E2EE 构建失败导致更新阻塞 | cli/plugins | Open | 无 |
| **P2** | [#141346](https://github.com/NousResearch/hermes-agent/issues/141346) — 智能审批导致数据丢失 | tools/terminal | Open | 无 |
| **P2** | [#141208](https://github.com/NousResearch/hermes-agent/issues/141208) — 第二个 E2EE 客户端破坏 gateway 加密 | tools/plugins | Open | 无 |
| **P2** | [#152557](https://github.com/NousResearch/hermes-agent/issues/152557) — write_file 被阻止 458 秒，空闲回收发生在调用中途 | tools/file | Open | 无 |

### 平台专属问题

| 平台 | Issue | 描述 |
|----------|-------|-------------|
| **macOS** | [#151519](https://github.com/NousResearch/hermes-agent/issues/151519) | 远程主控端仍会在每次启动时启动本地 gateway |
| **Windows** | [#127633](https://github.com/NousResearch/hermes-agent/issues/127633) | 子进程读取线程中 GBK 解码崩溃（中文区域设置） |
| **Linux** | [#132820](https://github.com/NousResearch/hermes-agent/issues/132820) | libolm CMake 构建导致 hermes update 中止 |
| **跨平台** | [#124721](https://github.com/NousResearch/hermes-agent/issues/124721) | `pm update` 在 linux-arm64-bionic 目标上崩溃 |

### 回归监控

- **#152365** — 微信语音消息导致会话卡在 'started' 状态约 12 小时
- **#151727** — Bot 列表因每次 5 秒轮询都对完整会话表重新排序而超时
- **#148846** — Desktop 队列中的 prompt 缺少 Edit 和 Steer 控制

## 6. 功能需求与路线图信号

### 活跃的功能需求

| Issue | 功能 | 组件 | 评论数 | 可能性 |
|-------|---------|-----------|----------|------------|
| [#29530](https://github.com/NousResearch/hermes-agent/issues/29530) | 为带 profile 的 worker 提供共享认证主目录 | cli | 6 | 中等 |
| [#92424](https://github.com/NousResearch/hermes-agent/issues/92424) | profile 的路径作用域文件访问 | tools/file | 2 | 高 |
| [#146732](https://github.com/NousResearch/hermes-agent/pull/146732) | 插件的会话分支、审查信号、空闲任务 | agent | — | 进行中 |

### 路线图指标

1. **工作区重新设计** — PR #152168 引入了重新设计的 agent 工作区，提供经典模式恢复，表明 UI/UX 正在演进
2. **插件生态扩展** — 插件目录持续增长（当前周期新增 8+ 个插件），表明插件架构是战略重点
3. **多 Profile 成熟度** — 多个 profile 相关 bug（#29530, #101514, #146522）表明多 profile 支持正趋于生产就绪

## 7. 用户反馈摘要

### 痛点

1. **数据丢失风险** — 用户对智能审批导致 PowerPoint 数据永久丢失表示强烈担忧；信任影响重大
2. **Matrix 集成脆弱性** — Linux 用户因 E2EE 依赖导致 `hermes update` 失败，且无法选择退出
3. **会话管理复杂性** — Profile 重命名操作导致会话回执仍指向旧身份，造成 Bot Chat 注册表卡死
4. **平台行为不一致** — Windows 字符编码问题和 macOS gateway 行为与 Linux 预期差异明显

### 驱动开发的使用场景

- **多 Agent 编排** — 对带隔离认证状态的带 profile worker 的需求（#29530）
- **企业部署** — 大型会话存储导致性能下降（#151727），NFS 存储边缘情况（#149048）
- **创意工作流** — 视频工作室集成（IDEA CUT）、agentic 白板、决策追踪工具
- **安全加固** — 明确要求路径作用域文件访问以限制低信任度 assistant agent

## 8. 待处理积压监控

### 长期未回应的重要 Issue

| Issue | 存在时间 | 组件 | 描述 | 需要关注 |
|-------|-----|-----------|-------------|------------------|
| [#29530](https://github.com/NousResearch/hermes-agent/issues/29530) | 约 6 个月 | cli | 带 profile 的 worker 需要共享认证主目录 | 需要决策 |
| [#37252](https://github.com/NousResearch/hermes-agent/issues/37252) | 约 5 个月 | gateway | 飞书审批卡片按钮点击对白名单用户仍被拒绝 | 维护者审查 |
| [#92424](https://github.com/NousResearch/hermes-agent/issues/92424) | 约 3 个月 | tools | profile 的路径作用域文件访问 | 需要决策 |
| [#132192](https://github.com/NousResearch/hermes-agent/issues/132192) | 约 5 周 | tools | skills_guard 威胁扫描器绕过（高危安全漏洞） | 需要优先修复 |

### 停滞/需要关注的 PR

| PR | 存在时间 | 描述 | 状态 |
|----|-----|-------------|--------|
| [#148266](https://github.com/NousResearch/hermes-agent/pull/148266) | 约 1 周 | 插件注入轮次的行为 | Open，堆叠于 #146732 |
| [#146732](https://github.com/NousResearch/hermes-agent/pull/146732) | 约 2 周 | 插件的会话分支 | Open，核心功能 |
| [#149048](https://github.com/NousResearch/hermes-agent/pull/149048) | 约 1 周 | 看门狗转储、写锁、NFS 修复 | Open，影响企业用户 |

---

*本摘要基于 2026-11-11 Hermes Agent 仓库活动数据生成。数据来源：处理了 50 个 issue，50 个 PR。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate this English technical report about QwenPaw project into Simplified Chinese. Let me carefully translate this following the rules:

1. Output ONLY the translation, no preamble or explanation
2. Preserve all Markdown structure exactly
3. Keep URLs, numbers, dates, project names, version tags, etc. verbatim
4. Use natural technical Chinese, not literal word-for-word

Let me translate section by section:

Title: QwenPaw Project Digest — 2026-11-11 → QwenPaw 项目日报 — 2026-11-11

Section 1: Today's Overview
- High development velocity → 高开发活跃度
- PRs updated → 更新的 PR
- rapid response to regressions → 快速响应回归问题
- multi-channel stability → 多渠道稳定性

Section 2: Releases
- Migration Notes → 迁移注意事项
- CHANNEL_NOT_CONNECTED → CHANNEL_NOT_CONNECTED (keep as-is)
- WORKER_START_FAILED → WORKER_START_FAILED (keep as-is)

Section 3: Project Progress
- Merged/Closed PRs → 已合并/已关闭的 PR
- Active Development → 活跃开发
- Desktop plugin runtime → 桌面端插件运行时
- Remote Docker deployments → 远程 Docker 部署

Section 4: Community Hot Topics
- Most Active Issues by Discussion → 按讨论热度排序的活跃 Issue
- Underlying Needs Analysis → 深层需求分析
- Multi-Channel Reliability → 多渠道可靠性
- Desktop Packaging Consistency → 桌面打包一致性
- Model Provider Completeness → 模型提供商完整性
- Cross-Browser Console Experience → 跨浏览器控制台体验

Section 5: Bugs & Stability
- Reported Bugs → 报告的缺陷


- Critical → 严重
- High → 高
- Medium → 中
- Already Fixed → 已修复

Section 6: Feature Requests & Roadmap Signals
- Feature Requests → 功能请求
- Roadmap-Adjacent Development → 路线图相关开发
- Local Model Infrastructure → 本地模型基础设施
- Skills System Enhancements → Skills 系统增强
- Prediction → 预测

Section 7: User Feedback Summary
- Pain Points → 痛点
- Positive Feedback Indicators → 积极反馈指标
- Use Cases Reported → 报告的使用场景

Section 8: Backlog Watch
- Long-Unanswered Important Issues → 长期未回复的重要 Issue
- PRs Needing Maintainer Attention → 需要维护者关注的 PR
- Stalled Issues → 停滞 Issue

Summary Table → 汇总表

Let me now write the full translation:
</think>


# QwenPaw 项目日报 — 2026-11-11

## 1. 今日概览

QwenPaw 展现出**高开发活跃度**，过去 24 小时内共有 39 个 PR 和 14 个 Issue 更新，表明项目正在 v2.3.0 发布前积极进行稳定化工作。过去一天发布了 1 个新 beta 版本（v2.3.0-beta.4），修复了桌面端插件运行时的关键回归问题。社区用户积极提交缺陷报告，主要集中在渠道插件（飞书、QQ、微信）、跨平台文件处理和浏览器兼容性方面。整体项目健康状态为**良好**，对回归问题的响应迅速，但桌面打包和多渠道稳定性仍是需要关注的重点领域。

---

## 2. 版本发布

### v2.3.0-beta.4
**发布日期：** 2026-11-10

| 变更类型 | 描述 | PR |
|-------------|-------------|-----|
| Bug Fix | 保留插件依赖关系并修复渠道启动问题 | [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) |
| Bug Fix | 恢复中断的追加依赖安装 | [#8659](https://github.com/agentscope-ai/QwenPaw/pull/8659) |

**迁移注意事项：** 此 beta 版本修复了 beta.1 引入的桌面端插件运行时回归问题。遇到 `CHANNEL_NOT_CONNECTED` 或 `WORKER_START_FAILED` 错误提示的用户应立即升级。

**完整发布页面：** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.3.0-beta.4

---

## 3. 项目进展

### 已合并/已关闭的 PR（18 个）

| PR | 标题 | 规模 | 状态 |
|----|-------|------|--------|
| [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) | fix(channels): 保留插件依赖关系并修复渠道启动 | M | Closed |
| [#8659](https://github.com/agentscope-ai/QwenPaw/pull/8659) | fix(plugins): 恢复中断的追加依赖安装 | L | Closed |
| [#8664](https://github.com/agentscope-ai/QwenPaw/pull/8664) | feat(community): 支持远程密码登录及凭证保存 | XL | Closed |
| [#8665](https://github.com/agentscope-ai/QwenPaw/pull/8665) | chore: 版本号升至 2.3.0b4 | XS | Closed |
| [#8662](https://github.com/agentscope-ai/QwenPaw/pull/8662) | fix(console): 在聊天中下载绝对路径的 workspace 文件链接 | S | Open |

### 活跃开发中的 PR（重点）

| PR | 标题 | 规模 | 重点领域 |
|----|-------|------|------------|
| [#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) | feat(console): 添加本地引擎、GPU 和自动更新控制选项 | XL | 本地模型 |
| [#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647) | feat(local-models): 添加托管 MLX 引擎和运行时自动更新 | XXL | Apple Silicon |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | feat(skills): 支持嵌套（分类）skill 目录 | XXL | Skills 系统 |
| [#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479) | feat(skills): 与 Anthropic 2026 年 7 月更新同步 Office skills | XXXL | Skills |
| [#8426](https://github.com/agentscope-ai/QwenPaw/pull/8426) | feat(agent): 将第三方 agent 提取为插件 | XXXL | 插件系统 |

**重要进展：**
- 桌面端插件运行时已完全稳定，依赖验证问题已修复
- 远程 Docker 部署现已支持密码登录
- 本地模型基础设施新增 GPU 和自动更新能力
- 嵌套 skill 目录支持实现了更好的组织管理

---

## 4. 社区热点话题

### 按讨论热度排序的活跃 Issue

| Issue | 标题 | 状态 | 评论数 | 核心话题 |
|-------|-------|--------|----------|-----------|
| [#8651](https://github.com/agentscope-ai/QwenPaw/issues/8651) | QQ 渠道静默丢弃仅含图片的 C2C 消息 | Closed | 4 | 渠道可靠性 |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 模型目录中阿里云 Token Plan 模型缺少 thinking_param_style | Open | 4 | 模型目录 |
| [#8406](https://github.com/agentscope-ai/QwenPaw/issues/8406) | QQ 渠道 enabled 标志被静默重置为 false | Closed | 3 | 配置问题 |
| [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | 渠道插件启动竞态条件 | Open | 2 | 桌面打包 |
| [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644) | 渠道插件在打包后的桌面端构建中启动失败 | Closed | 2 | 桌面打包 |

### 深层需求分析

**1. 多渠道可靠性（QQ、飞书、微信）**
用户反映渠道配置看似正常但静默失败或意外重置。这表明需要更好的健康检查机制和面向用户的错误提示。

**2. 桌面打包一致性**
桌面端构建（Windows 打包版）的渠道插件出现系统性失败。根本原因追溯到运行时身份验证从 `DependencyReadEvidence` 读取数据的问题。

**3. 模型提供商完整性**
阿里云 Token Plan 用户因目录声明缺失而无法使用思维/推理控制功能。TTS 集成同样缺少 Token Plan 协议支持。

**4. 跨浏览器控制台体验**
Safari 用户遇到消息队列操作按钮不渲染等问题，但在 Chrome 中正常，这表明存在 WebKit 特定兼容性问题。

---

## 5. 缺陷与稳定性

### 报告的缺陷（按严重程度排序）

#### 🔴 严重（影响核心功能）

| Issue | 标题 | 严重程度 | 修复 PR? |
|-------|-------|----------|---------|
| [#8669](https://github.com/agentscope-ai/QwenPaw/issues/8669) | 渠道插件启动竞态：`_wait_connected` 将初始断开状态视为致命错误 | 严重 | — |
| [#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655) | 自 2.3.0-beta.1 起附件路径被截断至驱动器根目录（"C:\"） | 严重 | — |
| [#8661](https://github.com/agentscope-ai/QwenPaw/issues/8661) | Hub 的 /workspace/ 文件下载链接打开的是 SPA HTML 而非触发下载 | 严重 | [#8662](https://github.com/agentscope-ai/QwenPaw/pull/8662) |

#### 🟠 高（用户影响显著）

| Issue | 标题 | 严重程度 | 修复 PR? |
|-------|-------|----------|---------|
| [#8652](https://github.com/agentscope-ai/QwenPaw/issues/8652) | 任务切换模型后仍使用原模型 | 高 | — |
| [#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663) | Safari：消息队列操作按钮不渲染 | 高 | [#8670](https://github.com/agentscope-ai/QwenPaw/pull/8670) |

#### 🟡 中（用户体验降级）

| Issue | 标题 | 严重程度 | 修复 PR? |
|-------|-------|----------|---------|
| [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) | 思维区块与工具卡片之间存在视觉不一致 | 中 | — |

### 已修复（v2.3.0-beta.4）

| Issue | 标题 | 修复 PR |
|-------|-------|--------|
| [#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644) | 打包后的桌面端构建中渠道插件无法激活 | [#8653](https://github.com/agentscope-ai/QwenPaw/pull/8653) |
| [#8534](https://github.com/agentscope-ai/QwenPaw/issues/8534) | TTS 无法使用阿里云 Token Plan 密钥 | [#8659](https://github.com/agentscope-ai/QwenPaw/pull/8659) |

---

## 6. 功能请求与路线图信号

### 新增功能请求

| Issue | 标题 | 信号 | 可能性 |
|-------|-------|---------|------------|
| [#8656](https://github.com/agentscope-ai/QwenPaw/issues/8656) | 请求添加 Mistral 提供商插件，支持推理与提示缓存 | 社区请求支持 OpenAI 兼容的 Mistral | 中 |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 在模型目录中为阿里云 Token Plan 模型添加 thinking_param_style | 4 条评论，影响所有 Token Plan 用户 | 高 |
| [#8650](https://github.com/agentscope-ai/QwenPaw/issues/8650) | 思维区块与工具卡片视觉一致性 | 用户体验增强，明显的痛点 | 中 |

### 路线图相关开发

**本地模型基础设施（活跃开发中）**
本地模型功能正在多个 PR 中同步推进开发：
- [#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649) — llama.cpp GPU + 自动更新
- [#8647](https://github.com/agentscope-ai/QwenPaw/pull/8647) — 托管 MLX + 自动更新
- [#8648](https://github.com/agentscope-ai/QwenPaw/pull/8648) — 控制台 UI 控制选项

**Skills 系统增强**
- 嵌套 skill 目录支持（[#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178)）— 实现更好的组织管理
- 与 Anthropic 同步 Office skills（[#8479](https://github.com/agentscope-ai/QwenPaw/pull/8479)）— 与上游保持同步

**预测：** v2.3.0 发布版本可能包含：
- 完整的本地模型支持（llama.cpp、MLX）
- 桌面打包稳定性改进
- Mistral 提供商作为官方插件
- 阿里云 Token Plan 思维参数支持

---

## 7. 用户反馈汇总

### 痛点

| 类别 | 问题 | 用户影响 |
|----------|-------|-------------|
| **跨平台文件处理** | 路径被截断至驱动器根目录（[#8655](https://github.com/agentscope-ai/QwenPaw/issues/8655)） | Windows 用户无法附加文件；图片加载失败 |
| **渠道稳定性** | QQ 消息静默丢弃（[#8651](https://github.com/agentscope-ai/QwenPaw/issues/8651)） | 用户无法收到仅含图片的消息，且无任何通知 |
| **桌面端体验** | 插件激活失败（[#8644](https://github.com/agentscope-ai/QwenPaw/issues/8644)） | 桌面打包构建的渠道插件完全不可用 |
| **浏览器兼容性** | Safari UI 功能异常（[#8663](https://github.com/agentscope-ai/QwenPaw/issues/8663)） | macOS Safari 用户无法操作消息队列 |

### 积极反馈信号

| 领域 | 证据 |
|------|----------|
| **远程部署** | 新增密码登录功能（[#8664](https://github.com/agentscope-ai/QwenPaw/pull/8664)）解决了 Docker 远程访问的痛点 |
| **插件恢复** | 中断安装恢复机制（[#8659](https://github.com/agentscope-ai/QwenPaw/pull/8659)）防止启动失败 |
| **性能优化** | 控制台合成器优化（[#8668](https://github.com/agentscope-ai/QwenPaw/pull/8668)）降低空闲状态 CPU 占用 |

### 报告的使用场景

- **企业聊天集成：** QQ、飞书、微信渠道部署
- **本地 AI 开发：** llama.cpp 和 MLX 模型推理
- **基于文件的工作流：** Workspace 文件共享与下载
- **办公文档处理：** DOCX、PPTX、XLSX 格式 skill 执行

---

## 8. 待办关注

### 长期未回复的重要 Issue

| Issue | 标题 | 时长 | 状态 | 优先级 |
|-------|-------|-----|--------|----------|
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 模型目录中阿里云 Token Plan 缺少 thinking_param_style | 约 47 天 | Open | 高 |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | fix(tools): 在 read/edit/grep 中解码 GBK/CP936 | 约 28 天 | Under Review | 中 |

### 需要维护者关注的 PR

| PR | 标题 | 规模 | 状态 | 等待时间 |
|----|-------|------|--------|---------------|
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | fix(tools): 在 read/edit/grep 中解码 GBK/CP936 | XXL | Under Review | 2026-10-14 |
| [#8236](https://github.com/agentscope-ai/QwenPaw/pull/8236) | fix(ollama): 从 num_ctx 获取上下文窗口大小 | XXL | Under Review | 2026-10-14 |
| [#8178](https://github.com/agentscope-ai/QwenPaw/pull/8178) | feat(skills): 支持嵌套 skill 目录 | XXL | Under Review | 2026-10-11 |

### 停滞中的 Issue（14 天以上无响应）

| Issue | 标题 | 开放天数 | 最后更新 |
|-------|-------|-----------|--------------|
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 阿里云 Token Plan thinking_param_style | 47 | 2026-11-10 |

---

## 汇总表

| 指标 | 数值 |
|--------|-------|
| 过去 24 小时更新的 Issue 总数 | 14 |
| 过去 24 小时更新的 PR 总数 | 39 |
| 新发布版本数 | 1（v2.3.0-beta.4） |
| 严重缺陷数 | 3 |
| 合并的修复 PR 数 | 5 |
| 活跃功能 PR 数 | 12 |
| 待回复的开放 Issue 数 | 9 |

---

*数据来源：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw) GitHub 仓库 — 2026-11-11*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate this English technical report about the ZeroClaw project into Simplified Chinese. I need to:

1. Translate all the text content while keeping technical terms, code, URLs, issue numbers, etc. in their original form
2. Maintain the exact markdown structure
3. Use natural technical Chinese register
4. Output ONLY the translation, no preamble or explanation

Let me carefully translate section by section.
</think>


# ZeroClaw 项目日报 — 2026-11-11

## 1. 今日概览

ZeroClaw 今日展现出**极高的开发活跃度**，过去 24 小时内有 50 个 PR 更新，16 个 issue 被处理。项目正在积极筹备 **v0.9.0 版本发布**（PR #12377 已合并），工作重心放在现有功能的稳定性加固上。值得注意的是，多个影响模型路由和心跳阶段的 **temperature 参数硬编码问题**被发现并修复，这些问题会导致兼容性问题——部分 provider 会拒绝显式的 temperature 参数。社区持续推动多渠道集成工作（XMPP、WeChat、Lark、WeCom），同时推进 Web 仪表盘功能增强。整体项目健康状态**良好**，核心团队正在积极处理安全相关和影响用户体验的问题。

---

## 2. 版本发布

**截至 2026-11-11，尚无新版本正式发布。**

不过，**PR #12377**（`chore(release): bump version to v0.9.0`）已于今日合并，表明 v0.9.0 版本发布在即。该 PR 更新了：
- 工作区版本号从 0.8.7 升至 0.9.0（涉及 `Cargo.toml` 中 26 个路径依赖）
- `Cargo.lock`（33 个工作区包）
- 相关版本引用

**v0.9.0 规划范围**（来自 Issue #7432）：运行时改进、仪表盘登录、网关投递增强。

---

## 3. 项目进展

### 今日合并/关闭的 PR（共 11 个）

| PR | 作者 | 摘要 | 影响 |
|---|---|---|---|
| [#12377](https://github.com/zeroclaw-labs/zeroclaw/pull/12377) | JordanTheJet | 版本号升至 v0.9.0 | 版本发布准备 |
| [#12367](https://github.com/zeroclaw-labs/zeroclaw/pull/12367) | JordanTheJet | 停止在心跳和模型路由探测中硬编码 temperature | **关键修复** |
| [#12376](https://github.com/zeroclaw-labs/zeroclaw/pull/12376) | vadelma-agent | 显示已分离的对话轮次，并在结束时加载回复 | 用户体验改进 |

### 今日活跃推进中的公开 PR（部分）

| PR | 作者 | 摘要 | 状态 |
|---|---|---|---|
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | CastelloBrancoTecnologia | 原生 Rust XMPP 实现（可选 OMEMO 支持） | **XL 规模，高活跃度** |
| [#11911](https://github.com/zeroclaw-labs/zeroclaw/pull/11911) | CastelloBrancoTecnologia | 保留已完成工具的执行结果，复用有界恢复机制 | **XL 规模，核心修复** |
| [#12269](https://github.com/zeroclaw-labs/zeroclaw/pull/12269) | CastelloBrancoTecnologia | 配对设备语音设置与聊天控制 | 仪表盘功能增强 |
| [#11869](https://github.com/zeroclaw-labs/zeroclaw/pull/11869) | CastelloBrancoTecnologia | 任务所有权的 SSH 传输复用 | 性能优化 |
| [#11868](https://github.com/zeroclaw-labs/zeroclaw/pull/11868) | CastelloBrancoTecnologia | 消除调度前的重复调用，保留收尾逻辑 | **高风险修复** |
| [#12322](https://github.com/zeroclaw-labs/zeroclaw/pull/12322) | CastelloBrancoTecnologia | 升级内置 SQLite 至 3.54.1 | 安全通告 RUSTSEC-2026-0459 |

---

## 4. 社区热点话题

### 互动量最高的 Issue

**Issue #7432** — `[Tracker]: 运行时、仪表盘登录与网关投递`
- **互动量**：16 条评论（最高）
- **标签**：enhancement, runtime, security, priority:p2, release:v0.9.0
- **发起人**：Audacity88
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/7432
- **分析**：这是 v0.9.0 剩余 roadmap 事项的总追踪帖。高互动量表明社区对登录/网关功能期待强烈。该追踪帖协调 RFC #5574 在多个工作流中的落地实施。

**Issue #11984** — `[Feature]: 允许非管理员账号使用仪表盘聊天功能`
- **互动量**：2 条评论
- **状态**：已关闭
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/11984
- **分析**：解决了 OIDC 集成的用户体验问题——非管理员用户现在可以与授权的 agent 进行对话了。

### 值得关注的功能讨论

**Issue #12373** — `仅写权限的 WebUI 凭证管理及作用域化密钥引用`
- **发起人**：CastelloBrancoTecnologia
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/12373
- **信号**：企业用户请求操作员专属的凭证目录，支持元数据只读展示和写操作隔离。

**Issue #12372** — `让 Git channel 用静态占位符评论替代流式进度输出`
- **发起人**：andersea
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/12372
- **信号**：用户希望在 Git PR 评论中获得更干净的输出，避免中间流式片段的干扰。

---

## 5. Bug 与稳定性

### 严重程度排序

#### 🔴 S1 — 阻塞工作流

**Issue #12354** — `zerorelay 未刷新 TLS 写缓冲：仪表盘资源卡死直到空闲超时`
- **发起人**：JordanTheJet
- **涉及组件**：web dashboard / zerorelay
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/12354
- **说明**：对 relay 用户影响严重；资源送达延迟或直接超时。目前未见相关修复 PR。

#### 🟠 S2 — 功能降级

| Issue | 摘要 | 链接 |
|---|---|---|
| #12366 | 心跳阶段 1 与模型路由探测硬编码 temperature 0.0 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12366) |
| #12362 | 技能审核分支硬编码 temperature 0.3 → 严格模型返回 HTTP 400 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12362) |
| #12357 | 有限权限账号启动 zerocode 时退出（配置/日志面板将拒绝视为致命错误） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12357) |
| #12325 | 文档规范 URL 使用发布版本目录，每次 stable 发布都会迁移所有 URL（影响 SEO） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12325) |

> ✅ **已修复**：PR #12367 解决了 Issue #12366（心跳/路由阶段的 temperature 硬编码问题）

#### 🟡 S3 — 轻微问题

| Issue | 摘要 | 链接 |
|---|---|---|
| #12153 | install.sh 在 glibc 主机上错误选择 musl 构建（当存在 musl 包时） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12153) |
| #12326 | 指向已裁剪文档版本的链接返回 GitHub Pages 404 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12326) |
| #12324 | 文档部署未对 rustdoc API 树索引设置 robots/canonical | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12324) |
| #12347 | zerocode 配置写入器可能在并发更新 zerocode-config.toml 时丢失数据 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12347) |

---

## 6. 功能需求与路线图信号

### 高优先级功能需求

**Issue #12361** — `使用要求 reasoning_content 的 provider 时多轮对话失败（Reflection AI / Beam）`
- **发起人**：jhheider
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/12361
- **信号**：新兴 provider 兼容性缺口。随着推理聚焦模型（o1、Beam 等）日益普及，ZeroClaw 的 `ChatMessage` 结构体缺少 `reasoning_content` 字段，导致多轮对话中断。
- **进入 v0.9.x 的可能性**：中等——需要 schema 变更，可能涉及 API 破坏性更新。

**Issue #12373** — `仅写权限的 WebUI 凭证管理`
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/12373
- **信号**：企业/操作员使用场景，表明在多用户环境中的采用正在增长。

**Issue #12372** — `Git channel 占位符评论模式`
- **链接**：https://github.com/zeroclaw-labs/zeroclaw/issues/12372
- **信号**：Git 集成的用户体验优化；范围较小，适合近期纳入。

### 进行中的大型功能

| 功能 | PR | 规模 | 状态 |
|---|---|---|---|
| 原生 Rust XMPP + OMEMO | #11847 | XL | 活跃开发中 |
| 任务所有权的 SSH 传输复用 | #11869 | XL | 活跃开发中 |
| OpenRouter 余额在 Web 端报告 | #11845, #11846 | L | 活跃开发中 |
| 配对设备语音设置 | #12269 | XL | 活跃开发中 |

---

## 7. 用户反馈摘要

### 今日痛点

1. **Provider 兼容性问题**：多用户在模型（尤其是 Anthropic 系）拒绝显式 temperature 参数时遇到 HTTP 400 错误。各代码路径中硬编码的 `temperature = 0.0` 或 `0.3` 是反复出现的主题。
   - *受影响场景*：心跳阶段、模型路由探测、技能审核分支
   - *修复进展*：PR #12367 部分修复已合并

2. **Relay 部署不稳定**：使用 zerorelay 且启用仪表盘的用户反映资源投递卡顿和超时。暗示 TLS 刷新逻辑存在边缘情况。

3. **配置并发边缘情况**：多个 zerocode 实例同时更新配置时可能丢失写入（Issue #12347）。严重程度低，但表明需要原子化配置更新机制。

4. **有限权限账号的用户体验缺口**：非管理员用户在配置/日志面板遇到访问拒绝时导致启动失败。表明权限模型需要完善。

### 积极信号

- **OIDC 仪表盘集成进展顺利**：Issue #11984 已关闭，表明非管理员用户的登录体验正在改善。
- **多渠道扩展**：XMPP、WeChat、Lark、WeCom 的活跃工作表明项目在地理覆盖和企业采用方面有明确目标。
- **文档改进**：多个文档专项 PR 和 issue 正在解决规范 URL、PKCE 文档和设备证书说明等问题。

---

## 8. 待办关注清单

### 需要维护者关注的 Issue

| Issue | 存在时间 | 优先级 | 摘要 | 链接 |
|---|---|---|---|---|
| #7432 | 约 5 个月 | p2 | 运行时/仪表盘/网关追踪帖 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) |
| #11847 | 约 1 个月 | 高 | XMPP + OMEMO（大功能） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11847) |
| #11868 | 约 1 个月 | 高风险 | 调度前重复调用修复 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11868) |
| #11911 | 约 1 个月 | 高 | 工具结果保留 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11911) |
| #12361 | 今日 | 中 | reasoning_content 支持缺口 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/12361) |

### 待合并的长期未处理 PR

| PR | 存在时间 | 规模 | 摘要 | 阻塞原因 |
|---|---|---|---|---|
| #11847 | 约 22 天 | XL | XMPP + OMEMO | 需要维护者 review |
| #11868 | 约 22 天 | XL | 重复调用修复 | 需要维护者 review |
| #11869 | 约 22 天 | XL | SSH 传输复用 | 核心团队已批准，整合中 |
| #11911 | 约 21 天 | XL | 工具结果保留 | 核心团队已批准，整合中 |

---

*日报数据来源于 2026-11-11 ZeroClaw（zeroclaw-labs/zeroclaw）GitHub 活动记录。*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*