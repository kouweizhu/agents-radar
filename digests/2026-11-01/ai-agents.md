# OpenClaw 生态日报 2026-11-01

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-11-01 01:24 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

<think>The user wants me to translate the project digest from English to Chinese (Simplified Chinese - zh-CN), following the detailed translation rules provided. Let me go through the content and translate it while preserving the exact structure, formatting, and technical terms.

Key points to remember:
1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly: headings, tables, lists, bold/italic, horizontal rules, emoji
3. Keep URLs, numbers, dates, issue/PR references, file paths, API/config identifiers verbatim
4. Use natural technical Chinese - the register of a Chinese developer newsletter
5. Keep English for: project names, repository slugs, usernames, version tags, file paths, API/config identifiers
6. Issue/PR references like #12345 and their link text stay as-is

Let me translate section by section:

## 1. Today's Overview
OpenClaw 项目在 2026 年 11 月 1 日保持高活跃度，过去 24 小时内有 **500 个 issue** 和 **500 个 PR** 更新。积压的 issue 中有 399 个处于活跃开放状态，101 个已关闭；PR 方面 248 个开放，252 个已合并或关闭——这表明吞吐量保持健康。没有发布新版本，说明团队正处于 v2026.10.x 发布后的稳定期。关键稳定性问题占据主要注意力，尤其是 Gateway 性能回退和会话管理问题，同时社区继续提交关于内存管理和 Provider 集成的功能请求。

## 2. Releases
**没有发布新版本**。项目继续基于 v2026.10.x 稳定版本运行（最新观察到的是 issue #187900 中的 2026.10.8）。

## 3. Project Progress
以下 Pull Request 已在今日合并或关闭：

| PR | 标题 | 状态 |
|----|-----|------|
| [#189913](https://github.com/openclaw/openclaw/pull/189913) | perf(control-ui): overlap Sessions and Cron route readiness | **已合并** |
| [#189889](https://github.com/openclaw/openclaw/pull/189889) | fix(sessions): preserve explicit web search preferences | **已合并** |
| [#189843](https://github.com/openclaw/openclaw/pull/189843) | perf(ui): reduce shared agent selector setup and focus work | **已合并** |
| [#189395](https://github.com/openclaw/openclaw/pull/189395) | feat(google): use the Interactions API for Gemini Flash models | **已合并** |

**关键进展：**
- Control UI 路由性能改进已合并，降低了首次访问延迟
- 会话设置持久化 bug 已修复——显式的 `webSearch` 偏好现在可以在页面重载后保留
- Gemini Flash 模型现已改用更高效的 Interactions API，替代 GenerateContent

## 4. Community Hot Topics

讨论最活跃的话题集中在关键回归问题和架构限制上：

| Issue | 标题 | 评论数 | 关注领域 |
|-------|-----|--------|----------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | **66** | 性能回退 |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec returns shared-state integrity-admission error | **22** | 执行引擎 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | Late reclamation commit checkpoint failure leaves agent unavailable | **21** | 会话/崩溃恢复 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM replies fail at durable registry handoff after restart | **19** | 消息集成 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots silently excluded from bootstrap injection | **15** | 内存/来源系统 |

**分析：** 第 160959 号回归问题（66 条评论）代表了最紧迫的社区关注点——2026.9.6 版本中的回归导致 Gateway 事件循环在捕获插件时阻塞数分钟。这直接影响拥有大型插件依赖树的

自托管部署。来源棘轮问题（#153426）揭示了一个静默的数据丢失场景：`MEMORY.md`/`USER.md` 文件在没有任何用户通知的情况下被永久排除在引导提示之外。

## 5. Bugs & Stability

按严重程度和近期活动排序的关键稳定性问题：

### P0 — 发布阻塞项
| Issue | 标题 | 状态 |
|-------|-----|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins | **Open** — 66 条评论 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | Late reclamation commit checkpoint failure leaves agent unavailable after crash | **Open** — 21 条评论 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | Curated memory roots silently excluded from bootstrap injection | **Open** — 15 条评论 |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | WeCom plugin can no longer be installed successfully | **Open** — 11 条评论 |

### P1 — 高优先级
| Issue | 标题 | 状态 |
|-------|-----|------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec returns shared-state integrity-admission error | **Open** — 22 条评论 |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix hangs 15+ min in plugin-capture stage (macOS) | **Open** — 13 条评论 |
| [#187900](https://github.com/openclaw/openclaw/issues/187900) | doctor hangs indefinitely at startup (all modes, Linux) | **Open** — 9 条评论 |
| [#182369](https://github.com/openclaw/openclaw/issues/182369) | Gateway RSS grows ~0.1 GiB/h off-heap until restart | **Open** — 6 条评论 |

**注意：** 在报告的 bug 中没有看到修复 PR 的引用。多个 issue 标注了 `clawsweeper:no-new-fix-pr`，表示这些 bug 已知但尚未修补。

## 6. Feature Requests & Roadmap Signals

具有显著社区参与度的活跃功能请求：

| Issue | 标题 | 优先级 | 信号 |
|-------|-----|--------|------|
| [#159858](https://github.com/openclaw/openclaw/issues/159858) | Let idle worker isolates release memory on small hosts (~650 MB heap) | P1 | 内存优化 |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | Let the memory slot owner drive the Dreams page | P2 | UI/UX 增强 |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | Allow SecretRef objects in `mcp.servers[].env` schema | P2 | 安全/运维体验 |
| [#173058](https://github.com/openclaw/openclaw/issues/173058) | tools.fs.workspaceOnly does not restrict file tools (security) | P2 | 安全边界 |

**路线图信号：** 内存优化请求（#159858，11 月 1 日更新）针对小主机约 650 MB 堆内存降低，表明内存效率是近期优先事项。SecretRef schema 限制（#76493）表明安全最佳实践正受到当前配置 schema 的约束——考虑到安全影响，这些很可能是近期优先修复的项目。

## 7. User Feedback Summary

**近期 issue 中浮现的痛点：**

1. **插件捕获性能回退** — 使用外部插件的用户报告 Gateway 阻塞数分钟，影响生产部署
2. **静默数据丢失** — 来源棘轮永久排除内存文件，不输出诊断信息，导致用户不知道他们精心编写的提示词没有被加载
3. **会话恢复失败** — 崩溃恢复导致代理永久不可用，需要手动干预
4. **内存膨胀** — 自托管用户报告 RSS 每小时增长 0.1 GiB，需要频繁重启
5. **Doctor 工具可靠性** — macOS 和 Linux 用户都报告诊断运行时无限挂起

**用例主题：** 拥有大量插件、多代理阵容和长时间运行的会话的重度自托管部署遇到最多摩擦。该项目似乎在 v2026.9.x 快速功能扩展后处于稳定期。

## 8. Backlog Watch

需要维护者关注的重要 issue，响应较少或缺失：

| Issue | 标题 | 时长 | 关注点 |
|-------|-----|------|--------|
| [#131768](https://github.com/openclaw/openclaw/issues/131768) | Android Talk drops live session when agent uses tools | ~65 天 | 实时语音稳定性 |
| [#135704](https://github.com/openclaw/openclaw/issues/135704) | iMessage reflections bypass echo cache | ~60 天 | 消息完整性 |
| [#130209](https://github.com/openclaw/openclaw/issues/130209) | Sensitive-value redaction masks browser act key parameter | ~67 天 | 安全/自修正 |
| [#114913](https://github.com/openclaw/openclaw/issues/114913) | Memory search bound embeddings before fallback to FTS | ~96 天 | 搜索可靠性 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | Dead-lettered outbound delivery queue entries are permanent | ~103 天 | 队列管理 |

**显著空白：** 多个 P1 级别 issue 标注了 `clawsweeper:needs-maintainer-review` 或 `clawsweeper:needs-product-decision`，但近期活动有限。出口队列永久性问题（#112313）代表数据卫生问题，目前没有补救途径。

现在需要将所有标题转换为中文。检查每个标题中哪些需要翻译：#160959 是关于 Gateway 在捕获大型外部插件时阻塞数分钟的问题（2026.9.6 回归），需要翻译；#177656 涉及本地主机执行返回共享状态完整性错误，也需要翻译。

继续处理剩余的标题：#166634 是关于延迟回收提交检查点失败导致代理不可用的情况；#161976 关于 WhatsApp DM 回复在重启后注册表切换失败；#153426 涉及策划的内存根被静默排除在引导注入之外；#137177 是 WeCom 插件无法安装的问题。这些都需要翻译成中文。

#177656 处理本地主机执行返回的共享状态完整性错误；#178359 修复 doctor 在插件捕获阶段挂起 15 分钟的问题；#187900 修复 doctor 在启动时无限挂起的问题；#182369 涉及 Gateway RSS 增长约 0.1 GiB/小时的情况。

#159858 让空闲的工作隔离释放小主机的内存；#138366 让内存槽所有者驱动 Dreams 页面；#76493 在 mcp.servers[].env schema 中允许 SecretRef 对象；#173058 处理 tools.fs.workspaceOnly 不限制文件工具的安全问题。#131768 修复 Android Talk 在代理使用工具时断开实时会话的问题；#135704 修复 iMessage 反射绕过回声缓存的问题。

#130209 修复敏感值编辑掩盖浏览器操作密钥参数的问题；#114913 修复内存搜索在回退到 FTS 前绑定嵌入的问题；#112313 修复死信出站投递队列条目永久存在的问题。</think>

# OpenClaw 项目双周报 — 2026-11-01

## 1. 本周概览

OpenClaw 项目在 2026 年 11 月 1 日保持高活跃度，过去 24 小时内有 **500 个 Issue** 和 **500 个 Pull Request** 更新。积压的 Issue 中有 399 个处于活跃开放状态，101 个已关闭；PR 方面 248 个开放，252 个已合并或关闭——这表明吞吐量保持健康。没有发布新版本，说明团队正处于 v2026.10.x 发布后的稳定期。关键稳定性问题占据主要注意力，尤其是 Gateway 性能回退和会话管理问题，同时社区继续提交关于内存管理和 Provider 集成的功能请求。

## 2. 版本发布

**没有发布新版本**。项目继续基于 v2026.10.x 稳定版本运行（最新观察到的是 Issue #187900 中的 2026.10.8）。

## 3. 项目进展

以下 Pull Request 已在今日合并或关闭：

| PR | 标题 | 状态 |
|----|-----|------|
| [#189913](https://github.com/openclaw/openclaw/pull/189913) | perf(control-ui): overlap Sessions and Cron route readiness | **已合并** |
| [#189889](https://github.com/openclaw/openclaw/pull/189889) | fix(sessions): preserve explicit web search preferences | **已合并** |
| [#189843](https://github.com/openclaw/openclaw/pull/189843) | perf(ui): reduce shared agent selector setup and focus work | **已合并** |
| [#189395](https://github.com/openclaw/openclaw/pull/189395) | feat(google): use the Interactions API for Gemini Flash models | **已合并** |

**关键进展：**

- Control UI 路由性能改进已合并，降低了首次访问延迟
- 会话设置持久化 Bug 已修复——显式的 `webSearch` 偏好现在可以在页面重载后保留
- Gemini Flash 模型现已改用更高效的 Interactions API，替代 GenerateContent

## 4. 社区热点

讨论最活跃的话题集中在关键回归问题和架构限制上：

| Issue | 标题 | 评论数 | 关注领域 |
|-------|-----|--------|----------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟（2026.9.6 回归） | **66** | 性能回退 |
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | 本地主机执行返回共享状态完整性错误 | **22** | 执行引擎 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 延迟回收提交检查点失败导致代理崩溃后不可用 | **21** | 会话/崩溃恢复 |
| [#161976](https://github.com/openclaw/openclaw/issues/161976) | WhatsApp DM 回复在重启后注册表切换失败 | **19** | 消息集成 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 策划的内存根被静默排除在引导注入之外 | **15** | 内存/来源系统 |

**分析：** 第 160959 号回归问题（66 条评论）代表了最紧迫的社区关注点——2026.9.6 版本中的回归导致 Gateway 事件循环在捕获插件时阻塞数分钟。这直接影响拥有大型插件依赖树的自托管部署。来源棘轮问题（#153426）揭示了一个静默的数据丢失场景：`MEMORY.md`/`USER.md` 文件被永久排除在引导提示之外，没有任何用户通知。

## 5. Bug 与稳定性

按严重程度和近期活动排序的关键稳定性问题：

### P0 — 发布阻塞项

| Issue | 标题 | 状态 |
|-------|-----|------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在捕获大型外部插件时阻塞数分钟 | **Open** — 66 条评论 |
| [#166634](https://github.com/openclaw/openclaw/issues/166634) | 延迟回收提交检查点失败导致崩溃后代理不可用 | **Open** — 21 条评论 |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | 策划的内存根被静默排除在引导注入之外 | **Open** — 15 条评论 |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | WeCom 插件无法成功安装 | **Open** — 11 条评论 |

### P1 — 高优先级

| Issue | 标题 | 状态 |
|-------|-----|------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | 本地主机执行返回共享状态完整性错误 | **Open** — 22 条评论 |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | doctor --fix 在插件捕获阶段挂起 15 分钟以上（macOS） | **Open** — 13 条评论 |
| [#187900](https://github.com/openclaw/openclaw/issues/187900) | doctor 在启动时无限挂起（所有模式，Linux） | **Open** — 9 条评论 |
| [#182369](https://github.com/openclaw/openclaw/issues/182369) | Gateway RSS 每小时增长约 0.1 GiB（堆外），直到重启 | **Open** — 6 条评论 |

**注意：** 在报告的 Bug 中没有看到修复 PR 的引用。多个 Issue 标注了 `clawsweeper:no-new-fix-pr`，表示这些 Bug 已知但尚未修补。

## 6. 功能请求与路线图信号

具有显著社区参与度的活跃功能请求：

| Issue | 标题 | 优先级 | 信号 |
|-------|-----|--------|------|
| [#159858](https://github.com/openclaw/openclaw/issues/159858) | 让空闲的工作隔离释放小主机的内存（堆约 650 MB） | P1 | 内存优化 |
| [#138366](https://github.com/openclaw/openclaw/issues/138366) | 让内存槽所有者驱动 Dreams 页面 | P2 | UI/UX 增强 |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | 在 `mcp.servers[].env` schema 中允许 SecretRef 对象 | P2 | 安全/运维体验 |
| [#173058](https://github.com/openclaw/openclaw/issues/173058) | tools.fs.workspaceOnly 不限制文件工具（安全） | P2 | 安全边界 |

**路线图信号：** 内存优化请求（#159858，11 月 1 日更新）针对小主机约 650 MB 堆内存降低，表明内存效率是近期的优先事项。SecretRef Schema 限制（#76493）表明安全最佳实践正受到当前配置 Schema 的约束——考虑到安全影响，这些很可能是近期的优先修复项目。

## 7. 用户反馈摘要

**近期 Issue 中浮现的痛点：**

1. **插件捕获性能回退** — 使用外部插件的用户报告 Gateway 阻塞数分钟，影响生产部署
2. **静默数据丢失** — 来源棘轮永久排除内存文件，不输出诊断信息，导致用户不知道他们精心编写的提示词没有被加载
3. **会话恢复失败** — 崩溃恢复导致代理永久不可用，需要手动干预
4. **内存膨胀** — 自托管用户报告 RSS 每小时增长 0.1 GiB，需要频繁重启
5. **Doctor 工具可靠性** — macOS 和 Linux 用户都报告诊断运行时无限挂起

**用例主题：** 拥有大量插件、多代理阵容和长时间运行的会话的重度自托管部署遇到最多摩擦。该项目似乎在 v2026.9.x 快速功能扩展后处于稳定期。

## 8. 待办关注

需要维护者关注的重要 Issue，响应较少或缺失：

| Issue | 标题 | 时长 | 关注点 |
|-------|-----|------|--------|
| [#131768](https://github.com/openclaw/openclaw/issues/131768) | Android Talk 在代理使用工具时断开实时会话 | ~65 天 | 实时语音稳定性 |
| [#135704](https://github.com/openclaw/openclaw/issues/135704) | iMessage 反射绕过回声缓存 | ~60 天 | 消息完整性 |
| [#130209](https://github.com/openclaw/openclaw/issues/130209) | 敏感值编辑掩盖浏览器操作密钥参数 | ~67 天 | 安全/自修正 |
| [#114913](https://github.com/openclaw/openclaw/issues/114913) | 内存搜索在回退到 FTS 前绑定嵌入 | ~96 天 | 搜索可靠性 |
| [#112313](https://github.com/openclaw/openclaw/issues/112313) | 死信的出站投递队列条目永久存在 | ~103 天 | 队列管理 |

**显著空白：** 多个 P1 级别 Issue 标注了 `clawsweeper:needs-maintainer-review` 或 `clawsweeper:needs-product-decision`，但近期活动有限。出口队列永久性问题（#112313）代表数据卫生问题，目前没有补救途径。

---

## 横向生态对比

<think>The user wants me to translate the entire cross-project ecosystem report into Simplified Chinese. I need to:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve the Markdown structure exactly - headings, tables, lists, etc.
3. Keep all technical identifiers, URLs, issue numbers, project names, version tags as-is
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate the entire document carefully, maintaining the table structure and all formatting.

Key terms to translate appropriately:
- "cross-project" → 项目间
- "ecosystem" → 生态系统
- "gateway-centric" → 网关中心化
- "plugin" → 插件
- "session management" → 会话管理
- "security hardening" → 安全加固
- "release stage" → 发布阶段
- "maturity" → 成熟度
- "trend signals" → 趋势信号

Let me go through the document section by section.</think>

# 跨项目生态系统报告 — 个人 AI 助手与 Agent

## 1. 生态系统概览

个人 AI 助手与 Agent 生态系统正处于快速成熟期，多个开源项目竞相定义下一代面向用户的 AI 工具。项目横跨广阔的技术谱系——从网关中心化架构（OpenClaw）到安全优先设计（ZeroClaw），从多渠道平台（QwenPaw）到移动优先愿景（Hermes Agent）。这片图景反映了关于市场走向的不同押注：桌面优先的生产力工具、移动原生体验、企业级安全，或是开放的插件生态系统。四个项目的活跃度都很健康，但随着向生产部署推进，每个项目都面临着独特的技术与社区挑战。

## 2. 活动对比

| 指标 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|--------|----------|--------------|---------|----------|
| **Issue（24h）** | 500 | 50 | 9 | 24 |
| **Issue（Open）** | 399 | 47 | 9 | 20 |
| **Issue（Closed）** | 101 | 3 | 0 | 4 |
| **PR（24h）** | 500 | 50 | 14 | 50 |
| **PR（Open）** | 248 | 37 | 13 | 45 |
| **PR（Merged/Closed）** | 252 | 13 | 1 | 5 |
| **Release（24h）** | 0 | 0 | 0 | 0 |
| **健康度** | 高 | 高 | 中 | 高（安全驱动） |

## 3. OpenClaw 的定位

OpenClaw 的规模显著大于其同类项目，Issue 和 PR 活动是下一个最活跃项目（Hermes Agent）的 10 倍。这反映了更成熟的代码库和更广泛的功能覆盖面与用户基础。从技术层面，OpenClaw 通过其网关中心化架构实现差异化——一个集中式的路由层，管理插件捕获、会话状态和提供商抽象。这种设计有利于扩展性，但也带来了复杂性（如 #160959 中的性能回退问题，网关阻塞长达数分钟）。社区规模明显更大，移动端应用请求（Hermes Agent 中的 #11911）与 OpenClaw 的 P0 Issue 有着相当的参与度。OpenClaw 的优势在于成熟的插件生态系统和多提供商支持；其劣势在于架构复杂性导致了更难诊断的性能回退问题。

## 4. 共享的技术关注点

以下几个需求在项目中反复出现：

| 关注领域 | 相关项目 | 具体需求 |
|------------|----------|----------------|
| **会话持久化** | OpenClaw, Hermes Agent, ZeroClaw | 恢复会话、环境间迁移、崩溃恢复 |
| **网关/代理可靠性** | OpenClaw, QwenPaw | 处理超时、重试、协议降级（MCP 遗留服务器） |
| **安全加固** | ZeroClaw, Hermes Agent | 凭证隔离、审批验证、沙箱隔离 |
| **渠道集成** | QwenPaw, Hermes Agent | 多平台消息（飞书、QQ、Slack、Telegram） |
| **记忆/溯源** | OpenClaw, ZeroClaw | 受控的记忆注入、子 Agent 隔离、溯源棘轮 |

**观察：** 会话管理和安全是普遍关注点。每个项目在这两个领域都有未解决的 Issue，表明这些是当前架构范式中的未解难题，而非实现层面的缺陷。

## 5. 差异化分析

| 维度 | OpenClaw | Hermes Agent | QwenPaw | ZeroClaw |
|-----------|----------|--------------|---------|----------|
| **主要目标** | 自托管强力用户 | 消费者/开发者桌面端 | 企业多渠道 | 安全敏感型运维 |
| **架构** | 网关中心化 | 守护进程 + TUI | 渠道路由 + 控制台 | 最小化守护进程 + CLI 优先 |
| **核心优势** | 插件生态、多提供商 | 移动愿景、丰富 TUI | 渠道覆盖（飞书、QQ、Slack） | 安全模型、最小攻击面 |
| **劣势** | 网关复杂性、性能回退 | 移动版beta质量、多用户支持有限 | Docker/环境边缘情况 | 安全债务、功能迭代较慢 |
| **发布阶段** | 稳定版（v2026.10.x） | Beta（v0.x） | 预发布（v2.3.0b） | 预发布（v0.9.0） |

OpenClaw 押注扩展性；Hermes Agent 押注移动原生；QwenPaw 押注渠道多样性；ZeroClaw 押注安全。这是面向重叠但不同细分市场的根本不同的产品策略。

## 6. 社区活力与成熟度

**快速迭代（高活跃度）：**
- **OpenClaw** — 24小时内 500 条更新，高吞吐量，稳定的发布节奏。成熟项目处于稳定阶段。
- **ZeroClaw** — 24小时内 50 条 PR，尽管代码库较小；v0.9.0 即将发布；安全研究员参与度高。

**稳步开发（中等活跃度）：**
- **Hermes Agent** — 24小时内 50 条更新，移动版 beta 正在产生反馈，安全修复进行中。
- **QwenPaw** — 数量较低但持续稳定；渠道集成工作稳步推进。

**成熟度指标：**
- OpenClaw: 性能回退处理（P0 Issue 66+ 评论）表明已达到生产规模。
- ZeroClaw: 安全研究员参与（提交了 10+ 个漏洞）表明目标受众是安全敏感群体。
- Hermes Agent: 功能请求占据主导（移动端应用：21 评论，15 👍）表明需求正在积累。
- QwenPaw: Docker 和代理边缘情况开始出现，表明真实部署场景在增长。

## 7. 趋势信号

跨项目社区反馈中浮现出以下模式：

1. **会话可移植性是普遍痛点。** 每个项目都有围绕会话迁移、崩溃恢复或状态持久化的开放 Issue。用户希望他们的 AI 助手在重启、设备更换和环境变化时保持持久感——这是传统软件中已解决的问题，但在 Agent 运行时中尚未解决。

2. **安全正在成为主要差异化因素。** ZeroClaw 的积极安全研究与 Hermes Agent 的审批验证 Bug（#147373）表明，随着 Agent 获得更多工具和数据访问权限，安全模型的严谨性正在成为竞争优势，而不仅仅是基准要求。

3. **多渠道部署正在驱动复杂性。** QwenPaw 的代理、Docker 和协议降级问题反映了现实：生产级 AI 助手必须与企业多样化通信栈集成——每个都有其独特的怪癖。

4. **移动端是下一个前沿。** Hermes Agent 的移动端应用请求是所有四个项目中社区参与度最高的功能需求。市场正在发出对原生移动体验的需求信号；技术挑战（电池续航、通知、WebSocket 可靠性）相当严峻。

5. **网关/守护进程架构正在触及性能天花板。** OpenClaw 的网关回退和 ZeroClaw 的守护进程设计选择反映了共同的架构张力：集中式路由简化管理，但在规模上引入瓶颈。

6. **插件生态系统需要运行时隔离。** OpenClaw 的插件捕获问题和 ZeroClaw 的凭证泄露漏洞都源于一个根本挑战：在 Agent 执行上下文中安全地运行第三方代码。

**对 AI Agent 开发者的启示：** 下一波创新可能集中在分布式 Agent 架构（避免网关瓶颈）、更强的沙箱化（解决安全债务）和跨设备会话连续性上。解决会话可移植性和移动端部署问题的项目将占据显著的市场份额。

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to translate the English project digest into Chinese, following specific rules about translation. Let me analyze what needs to be done:

1. Output ONLY the translation - no preamble, no explanation, no markdown fences
2. Preserve Markdown structure exactly - headings, tables, lists, etc.
3. Keep URLs, numbers, dates, issue/PR references, project names, repository slugs, usernames, version tags, file paths, and API/config identifiers in their original form
4. Use natural technical Chinese - the register of a Chinese developer newsletter

Let me translate section by section, keeping everything in proper Markdown format:

## Today's Overview -> 今日概览

## Releases -> 发布

## Project Progress -> 项目进展

## Community Hot Topics -> 社区热点话题

## Bugs & Stability -> 缺陷与稳定性

## Feature Requests & Roadmap Signals -> 功能需求与路线图信号

## User Feedback Summary -> 用户反馈摘要

## Backlog Watch -> 待办事项关注

Now I need to translate all the content while:
- Keeping issue/PR numbers and links as-is
- Keeping URLs intact
- Keeping technical terms that are commonly used in Chinese
- Translating naturally but technically

Let me go through each section carefully.</think>

# Hermes Agent 项目摘要 — 2026-11-01

## 今日概览

Hermes Agent 今日开发活动频繁，过去 24 小时内有 **50 个 issue** 和 **50 个 PR** 更新。项目正在积极处理移动端 beta 测试问题（iOS 和 Android），同时推进多项安全性和稳定性修复。今日未发布新版本，但流水线中有多个针对网关可靠性、会话管理和平台特定缺陷的修复。社区对移动应用路线图和安全相关问题尤为关注。

---

## 发布

今日无新版本发布。

---

## 项目进展

以下 PR 今日合并/关闭：

| PR | 标题 | 状态 |
|----|-----|--------|
| [#147382](https://github.com/NousResearch/hermes-agent/pull/147382) | fix(gateway): atomically record initial delivery attempt | Open |
| [#147381](https://github.com/NousResearch/hermes-agent/pull/147381) | fix(config): reject empty documents during raw writeback | Open |
| [#147380](https://github.com/NousResearch/hermes-agent/pull/147380) | fix(prompt): honor configured temporary directories | Open |
| [#147378](https://github.com/NousResearch/hermes-agent/pull/147378) | fix(daytona): pass profile-scoped API key to SDK | Open |
| [#147376](https://github.com/NousResearch/hermes-agent/pull/147376) | fix(kanban): identify refused PR acceptance reads | Open |
| [#147375](https://github.com/NousResearch/hermes-agent/pull/147375) | feat(plugin-catalog): add neuralmind plugin | Open |
| [#147075](https://github.com/NousResearch/hermes-agent/pull/147075) | fix(redact): per-line URL gate, recursive searches, argv dumps | Open |
| [#147073](https://github.com/NousResearch/hermes-agent/pull/147073) | test(model-switch): make user-provider picker tests hermetic | Open |
| [#147054](https://github.com/NousResearch/hermes-agent/pull/147054) | fix(ssh): keep ControlMaster sockets under sun_path | Open |
| [#146170](https://github.com/NousResearch/hermes-agent/pull/146170) | feat(mcp-catalog): add SoChain hosted MCP | Open |
| [#146171](https://github.com/NousResearch/hermes-agent/pull/146171) | feat(optional-skills): add utxo skill for Bitcoin/LTC/DOGE/Zcash | Open |
| [#147068](https://github.com/NousResearch/hermes-agent/pull/147068) | fix(copilot-acp): catch BrokenPipeError on write | Open |
| [#147072](https://github.com/NousResearch/hermes-agent/pull/147072) | fix(slack): render multi-select clarify as checkboxes | Open |
| [#146934](https://github.com/NousResearch/hermes-agent/pull/146934) | fix(tui): bind queue retry to Alt+K | Open |
| [#131210](https://github.com/NousResearch/hermes-agent/pull/131210) | fix(anthropic): send one User-Agent on OAuth routes | Open |
| [#131211](https://github.com/NousResearch/hermes-agent/pull/131211) | feat(delegation): opt-in delegation.inherit_soul | Open |
| [#147056](https://github.com/NousResearch/hermes-agent/pull/147056) | feat(google-workspace): named Google accounts with --account | Open |
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | feat(security): add opt-in CaMeL guard plugin with IFC tests | Open |
| [#147370](https://github.com/NousResearch/hermes-agent/pull/147370) | feat(cli): make JSON output a configurable default | Open |
| [#147188](https://github.com/NousResearch/hermes-agent/pull/147188) | fix(browser): URL scanners read host after any userinfo | Open |

---

## 社区热点话题

| Issue | 标题 | 评论 | 点赞 |
|-------|-----|------|------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | [功能请求] 原生移动应用 (iOS & Android) 语音通话 | 21 | 👍 15 |
| [#147269](https://github.com/NousResearch/hermes-agent/issues/147269) | Hermes Mobile Android beta 已达 Firebase 测试人数上限 | 5 | 👍 1 |
| [#147321](https://github.com/NousResearch/hermes-agent/issues/147321) | Android beta：对话滚动卡顿，长流式回复无法滚动 | 4 | — |
| [#144547](https://github.com/NousResearch/hermes-agent/issues/144547) | lifecycle guard 阻止 `hermes gateway restart` 但不阻止 `hermes update` | 4 | — |
| [#145162](https://github.com/NousResearch/hermes-agent/issues/145162) | drive_preview / desktop_preview read: viewer requests never answered | 4 | — |

**分析：** 移动应用功能请求 (#11911) 仍是最受关注的话题，有 21 条评论和 15 个赞，表明用户对原生 iOS/Android 应用及语音功能有强烈需求。Firebase 测试人数上限问题 (#147269) 表明 beta 测试采用率成功但容量受限。Android 性能问题 (#147321) 和生命周期守卫安全问题 (#144547) 正在引起开发者关注。

---

## 缺陷与稳定性

| 严重程度 | Issue | 摘要 | 修复 PR |
|----------|-------|------|---------|
| **高** | [#147373](https://github.com/NousResearch/hermes-agent/issues/147373) | 智能审批自动批准了 PowerShell 命令，实际删除了 188,303 个文件 (21.4 GiB) | — |
| **高** | [#147323](https://github.com/NousResearch/hermes-agent/issues/147323) | Android 应用冻结，约 1 小时后 OutOfMemoryError 崩溃 | — |
| **高** | [#147361](https://github.com/NousResearch/hermes-agent/issues/147361) | 移动端聊天 WebSocket 远程网关始终 403（缺少 Origin 子协议） | — |
| **高** | [#145999](https://github.com/NousResearch/hermes-agent/issues/145999) | 网关事件循环阻塞 state.db get_meta() — 30s 看门狗杀死进程 | — |
| **高** | [#147087](https://github.com/NousResearch/hermes-agent/issues/147087) | 软缓存驱逐时 SQLite 连接泄漏（每个被驱逐的 agent 一个连接） | — |
| **中** | [#147321](https://github.com/NousResearch/hermes-agent/issues/147321) | Android beta：对话滚动卡顿 | — |
| **中** | [#147350](https://github.com/NousResearch/hermes-agent/issues/147350) | 空 config.yaml 用占位符覆盖用户完整配置 | [#147381](https://github.com/NousResearch/hermes-agent/pull/147381) |
| **中** | [#147342](https://github.com/NousResearch/hermes-agent/issues/147342) | 重复 Slack 事件 → 双重 admission | — |

**关键问题：** 一个关键的安全相关缺陷 (#147373) 涉及智能审批基于显示文本而非实际执行目标批准了命令，导致大规模文件删除。这突显了审批验证逻辑可能存在的漏洞。

---

## 功能需求与路线图信号

| Issue | 标题 | 需求度 |
|-------|------|--------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 原生移动应用 (iOS & Android) 语音通话 | 21 评论, 15 👍 |
| [#41659](https://github.com/NousResearch/hermes-agent/issues/41659) | Apple Silicon GPU 利用不足 — 添加 mlx-whisper | 3 评论 |
| [#68482](https://github.com/NousResearch/hermes-agent/issues/68482) | Cron job 元数据字段（标签/分类、描述） | 3 评论 |
| [#135931](https://github.com/NousResearch/hermes-agent/issues/135931) | Desktop：一键 AI 提示词优化未发送文本 | 1 评论 |

**预测：** 移动应用功能 (#11911) 显示强劲的社区推动力，可能在接下来的路线图中被优先考虑。Apple Silicon GPU 优化 (#41659) 解决了 macOS 用户的重大平台缺陷。

---

## 用户反馈摘要

**痛点：**
- **移动端 beta 质量**：用户报告 Android 滚动卡顿、OutOfMemoryError 崩溃和通知不一致问题。iOS beta 有筛选菜单间歇性问题。
- **会话可移植性**：移动 `HERMES_HOME` 会使所有现有会话失效，无迁移路径 (#146480)。
- **安全漏洞**：智能审批基于文本而非实际执行目标批准了破坏性命令 (#147373)。
- **多账户复杂性**：Google Workspace skill 仅支持单账户使用 (#147056 正在解决此问题)。

**积极信号：**
- 新插件集成（SoChain MCP、neuralmind、UTXO skill）扩展了区块链和 AI 能力。
- CLI JSON 输出可配置性 (#147370) 解决了开发者人机工学问题。
- 委托继承功能 (#131211) 实现了子 agent 角色定制。

---

## 待办事项关注

| Issue | 龄期 | 状态 | 关注点 |
|-------|------|------|--------|
| [#11911](https://github.com/NousResearch/hermes-agent/issues/11911) | 约 6 个月 | Open | 最受请求的功能；可能需要路线图明确 |
| [#3987](https://github.com/NousResearch/hermes-agent/issues/3987) | 约 7 个月 | Open | 带 IFC 测试的安全插件；长期增强需求 |
| [#41659](https://github.com/NousResearch/hermes-agent/issues/41659) | 约 5 个月 | Open | Apple Silicon STT 优化；平台缺陷 |
| [#68482](https://github.com/NousResearch/hermes-agent/issues/68482) | 约 3 个月 | Open | Cron 元数据；运维管理需求 |

这些 issue 长期未解决，可能受益于维护者的优先级排序或社区贡献指导。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>The user wants me to translate the English QwenPaw Project Digest into Chinese. I need to:
1. Translate all the text while keeping the Markdown structure exactly as-is
2. Keep all URLs, issue/PR references (#8424, etc.), project names, repository slugs, usernames, version tags, file paths, API/config identifiers as-is
3. Use natural technical Chinese, the register of a Chinese developer newsletter
4. Output ONLY the translation, no preamble, no explanation, no markdown fences

Let me translate section by section:

## 1. Today's Overview
今天概况

## 2. Releases
发版动态

## 3. Project Progress
项目进展

## 4. Community Hot Topics
社区热点

## 5. Bugs & Stability
缺陷与稳定性

## 6. Feature Requests & Roadmap Signals
功能需求与路线图信号

## 7. User Feedback Summary
用户反馈摘要

## 8. Backlog Watch
积压关注

Now let me translate all the content:</think>

# QwenPaw 项目简报 — 2026-11-01

## 1. 今日概况

QwenPaw 今天开发活跃度较高，过去 24 小时内有 **14 个 PR** 和 **9 个 Issue** 更新。所有 Issue 保持开放状态，表明问题正在排查中。本期无新版本发布。项目当前正积极解决跨平台集成挑战（飞书、Telegram、QQ）、安全加固以及运行时稳定性问题——尤其涉及 Docker 环境和代理配置。社区贡献明显，有两位首次贡献者提交了 PR。

## 2. 发版动态

过去 24 小时内无新版本发布。

## 3. 项目进展

| PR | 状态 | 描述 | 规模 |
|----|--------|-------------|------|
| [#8338](https://github.com/agentscope-ai/QwenPaw/pull/8338) | **已合并** | fix(channels): 将 Telegram 回复引用上下文传递至 agent | M |
| [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522) | 开放 | fix(console): 禁用 /console/chat SSE 的 nginx 缓冲 | XS |
| [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | 开放 | feat(channels): 新增 QQ C2C 流式消息支持 | M |
| [#8509](https://github.com/agentscope-ai/QwenPaw/pull/8509) | 开放 | fix(channels): 解决桌面插件安装与修复失败问题 | M |
| [#8510](https://github.com/agentscope-ai/QwenPaw/pull/8510) | 开放 | fix(test): 进一步加速插件单元测试 | XL |
| [#8519](https://github.com/agentscope-ai/QwenPaw/pull/8519) | 开放 | fix(hub): 保留共享 Docker 运行时数据所有权 | L |
| [#8520](https://github.com/agentscope-ai/QwenPaw/pull/8520) | 开放 | fix(approvals): 使用 agent 语言回复 /approval | L |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | 开放 | fix(providers): 按请求而非仅按文件限制内联媒体 | XL |
| [#8061](https://github.com/agentscope-ai/QwenPaw/pull/8061) | 开放 | feat(providers): 让自定义网关声明 OpenAI 提示缓存参数 | M |
| [#8060](https://github.com/agentscope-ai/QwenPaw/pull/8060) | 开放 | fix(token-usage): 在实时上下文计量中计入 Anthropic 缓存 token | S |
| [#8031](https://github.com/agentscope-ai/QwenPaw/pull/8031) | 开放 | test: 消除调度 mock 中未等待的协程泄漏 | — |
| [#8029](https://github.com/agentscope-ai/QwenPaw/pull/8029) | 开放 | feat(browser): 让配置覆盖 Playwright 默认启动参数 | — |
| [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | 开放 | fix(security): 标记 shell 命令中的内联 Office COM 自动化 | — |
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 开放 | fix(runtime): 防止注入的上下文持久化 | L |

**关键进展：**
- Telegram 引用回复现已正确传递上下文至 agent（已合并）
- QQ 频道获得流式消息支持
- 桌面插件安装/解析改进正在进行中
- 首次贡献者提交了 nginx 缓冲修复
- Anthropic 缓存 token 现在正确计入实时上下文

## 4. 社区热点

| Issue/PR | 评论数 | 主题 |
|----------|----------|-------|
| [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) | 4 | MCP 遗留服务器回退失败 |
| [#8315](https://github.com/agentscope-ai/QwenPaw/issues/8315) | 4 | 飞书代理 426 错误 |
| [#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184) | 3 | 死循环门误杀合法轮询 |
| [#8511](https://github.com/agentscope-ai/QwenPaw/issues/8511) | 2 | 飞书并发消息竞态条件 |

**分析：** 讨论最多的问题围绕 **渠道可靠性**（飞书、MCP）和 **协议协商边缘情况**。用户在代理配置或遗留系统参与时遇到环境特定失败。这表明真实部署场景正在暴露多渠道架构中的边缘情况。

## 5. 缺陷与稳定性

| 严重程度 | Issue | 状态 | 修复 PR |
|----------|-------|--------|--------|
| **高** | [#8424](https://github.com/agentscope-ai/QwenPaw/issues/8424) MCP 遗留回退失败 | 开放 | — |
| **高** | [#8315](https://github.com/agentscope-ai/QwenPaw/issues/8315) 飞书代理环境失败 | 开放 | — |
| **高** | [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515) v2.3.0b2 在 fnOS 沙盒中崩溃 | 开放 | — |
| **高** | [#8517](https://github.com/agentscope-ai/QwenPaw/issues/8517) Hub Docker 非 root 启动失败 | 开放 | [#8519](https://github.com/agentscope-ai/QwenPaw/pull/8519) |
| **中** | [#8184](https://github.com/agentscope-ai/QwenPaw/issues/8184) 死循环门误杀合法轮询 | 开放 | — |
| **中** | [#8511](https://github.com/agentscope-ai/QwenPaw/issues/8511) 飞书并发竞态条件 | 开放 | — |
| **中** | [#8516](https://github.com/agentscope-ai/QwenPaw/issues/8516) SSE nginx 缓冲问题 | 开放 | [#8522](https://github.com/agentscope-ai/QwenPaw/pull/8522) |
| **低** | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) UI 复制功能异常、无回复内容 | 开放 | — |

**评估：** 多个高严重级别缺陷影响生产部署：Docker 非 root 执行、MCP 遗留协议处理、代理环境。一个修复 PR（#8519）已解决 Docker 所有权问题。

## 6. 功能需求与路线图信号

| 请求 | Issue | 可能优先级 |
|---------|-------|-----------------|
| 在控制台 UI 中显示单条回复延迟 | [#8518](https://github.com/agentscope-ai/QwenPaw/issues/8518) | 中 |
| UI 模式切换（经典/新版） | [#8521](https://github.com/agentscope-ai/QwenPaw/issues/8521) | 低-中 |
| QQ C2C 流式支持 | [#8409](https://github.com/agentscope-ai/QwenPaw/pull/8409) | 进行中 |

**预测：** 单条回复延迟显示是实用的可观测性功能，可能即将上线。UI 模式切换请求（#8521）反映了用户对新版 UI 的不满——如反馈增加可能会被考虑。

## 7. 用户反馈摘要

**反馈痛点：**
1. **随机丢失回复**：用户报告 qwenpaw 显示思考内容但无实际回复（v2.2.2.post1）
2. **UI 退步**：新版 UI 感觉更慢、效率更低；用户请求经典模式切换
3. **复制功能障碍**：Ctrl+C 需要多次按压才能成功
4. **飞书可靠性**：并发消息处理导致间歇性错误
5. **受限环境崩溃**：v2.3.0b2 在沙盒化 NAS 环境中失败

**满意度信号：** QQ 流式支持（PR #8409）和 Telegram 上下文修复（PR #8338 已合并）解决了长期存在的渠道功能缺口。nginx 缓冲修复展示了响应迅速的社区贡献。

## 8. 积压关注

| 项目 | 存在时长 | 状态 | 关注点 |
|------|-----|--------|---------|
| [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) | 约 70 天 | 开放 | 运行时上下文注入修复——解决 #6360/#6358；需要审查 |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | 约 30 天 | 开放 | 内联媒体限制——针对网关字节限制的安全/性能修复 |
| [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | 约 30 天 | 开放 | Office COM 自动化安全标记——Windows 安全加固 |

**维护者需关注：** PR #7211 自 8 月以来开放未合并，是重要的运行时修复。PR #8034 解决关键的网关字节限制漏洞——高优先级。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>The user wants me to translate the project digest into Simplified Chinese, following specific rules:
- Output ONLY the translation
- No preamble, no explanation, no markdown fences
- Preserve the Markdown structure exactly (headings, tables, lists, etc.)
- Keep URLs, numbers, dates, issue/PR references, technical terms as-is
- Use natural technical Chinese (the register of a Chinese developer newsletter)

Let me translate this carefully while preserving all formatting.</think>

# ZeroClaw 项目简报 — 2026年11月1日

## 今日概览

ZeroClaw 今日开发活动频繁，共更新了 24 条 issue 和 50 个 PR。项目正在积极修复安全漏洞——多位研究者报告了多个关键问题，涉及守护进程配置保护、MCP 传输安全和沙箱隔离缺陷。v0.9.0 版本发布周期似乎正在进行中，多个 PR 已标记相关联。社区贡献持续活跃，安全研究员 IftekharUddin 提交了多个安全问题，维护者 JordanTheJet 也在推进工作。

---

## 版本发布

今日无新版本。数据中未记录该项目的任何版本发布信息。

---

## 项目进展

### 已合并/关闭的 PR（5个）

| PR | 标题 | 状态 |
|----|------|------|
| [#11822](https://github.com/zeroclaw-labs/zeroclaw/pull/11822) | fix(security): split POSIX commands at substitution and subshell boundaries | 已关闭 |
| [#12071](https://github.com/zeroclaw-labs/zeroclaw/pull/12071) | feat(zerocode): add /load-session to resume a saved session by name or id | 已关闭 |
| [#12111](https://github.com/zeroclaw-labs/zeroclaw/pull/12111) | feat(install): install the CLI-only build and switch to standard only on request | 已关闭 |
| [#12102](https://github.com/zeroclaw-labs/zeroclaw/pull/12102) | chore(deps): bump rust-all group with 34 updates | 已关闭 |
| [#12129](https://github.com/zeroclaw-labs/zeroclaw/pull/12129) | fix(deps): bump Wasmtime to 48.0.8 for RUSTSEC-2026-0420 to 0424 | 已关闭 |

### 重要进展

- **纯 CLI 构建支持** — PR #12111 完成了无需网关/仪表板的纯 CLI 安装功能，对应 issue #11971
- **会话加载** — PR #12071 在 ZeroCode 中添加了 `/load-session` 斜杠命令
- **Shell 安全修复** — PR #11822 正确地在替换边界和子shell边界处分割 POSIX 命令，防止命令注入
- **依赖更新** — Wasmtime 升级到 48.0.8，解决了 5 个 RustSec  advisory（RUSTSEC-2026-0420 至 0424）

---

## 社区热点

### 最活跃的讨论

| Issue/PR | 标题 | 评论数 | 状态 |
|----------|------|--------|------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) for the agent | 8 | 开启中 |
| [#11965](https://github.com/zeroclaw-labs/zeroclaw/pull/11965) | feat(gateway): opt-in OIDC dashboard sign-in | 活跃中 | 开启中 |
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | fix(memory): keep owned-session subagent and pipeline memory private | 活跃中 | 开启中 |
| [#12069](https://github.com/zeroclaw-labs/zeroclaw/issues/12069) | [Feature]: Add /load-session to resume a Code session | 2 | 已关闭 |
| [#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) | [Feature]: Build ZeroClaw without the gateway or dashboard | 1 | 已关闭 |

### 分析

- **RAG 集成** 引发讨论——用户希望 agent 能查询操作员管理的文档、语言/工具文档和安全标准
- **OIDC 仪表板登录**（PR #11965）是多用户场景的重要功能，将超越当前的配对码模式
- **子代理内存隐私**（PR #11266）解决了安全架构方面的顾虑

---

## 缺陷与稳定性

### 安全漏洞（高危）

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#12158](https://github.com/zeroclaw-labs/zeroclaw/issues/12158) | Security review findings: 10 unpatched vulnerabilities | S1 | 开启中 |
| [#12143](https://github.com/zeroclaw-labs/zeroclaw/issues/12143) | MCP stdio servers inherit daemon environment (credential disclosure) | S1 | 开启中 |
| [#12142](https://github.com/zeroclaw-labs/zeroclaw/issues/12142) | Daemon's own config/data directories not forbidden to agent | S1 | 开启中 |
| [#12138](https://github.com/zeroclaw-labs/zeroclaw/issues/12138) | Native runtime runs login shell sourcing ~/.zshenv (execution hook) | S1 | 开启中 |
| [#12141](https://github.com/zeroclaw-labs/zeroclaw/issues/12141) | Admin routes trust any loopback peer (approval bypass) | S1 | 开启中 |
| [#12137](https://github.com/zeroclaw-labs/zeroclaw/issues/12137) | Seatbelt profile's home dotfiles rule mis-escaped | S1 | 开启中 |
| [#12050](https://github.com/zeroclaw-labs/zeroclaw/issues/12050) | OIDC callback token page has no browser binding (login CSRF) | S1 | 开启中 |

### 功能缺陷（中/低危）

| Issue | 标题 | 严重程度 | 状态 |
|-------|------|----------|------|
| [#12169](https://github.com/zeroclaw-labs/zeroclaw/issues/12169) | send_message_to_peer starts recipient outside tool scope | S1 | 开启中 |
| [#12167](https://github.com/zeroclaw-labs/zeroclaw/issues/12167) | send_message_to_peer ignores sender autonomy level | S1 | 开启中 |
| [#12146](https://github.com/zeroclaw-labs/zeroclaw/issues/12146) | MCP SSE client accepts absolute URL from server | S2 | 开启中 |
| [#12145](https://github.com/zeroclaw-labs/zeroclaw/issues/12145) | Plugin store limiter doesn't cap memories/tables | S2 | 开启中 |
| [#12144](https://github.com/zeroclaw-labs/zeroclaw/issues/12144) | file_upload, file_edit authorize through write tier | S2 | 开启中 |
| [#12139](https://github.com/zeroclaw-labs/zeroclaw/issues/12139) | Default forbidden_paths miss macOS Keychains, credential dotfiles | S2 | 开启中 |
| [#12156](https://github.com/zeroclaw-labs/zeroclaw/issues/12156) | zeroclaw update always downloads glibc build | S2 | 开启中 |
| [#12155](https://github.com/zeroclaw-labs/zeroclaw/issues/12155) | Cancelled quickstart says "No config written" but creates file | S3 | 开启中 |
| [#12154](https://github.com/zeroclaw-labs/zeroclaw/issues/12154) | install.sh shows build commit instead of version | S3 | 开启中 |
| [#12153](https://github.com/zeroclaw-labs/zeroclaw/issues/12153) | install.sh picks musl build on glibc hosts with musl package | S3 | 开启中 |

### 修复中的 PR

- [#12170](https://github.com/zeroclaw-labs/zeroclaw/pull/12170) — fix(tools): inherit headless SOP step scope on peer-send turns
- [#12168](https://github.com/zeroclaw-labs/zeroclaw/pull/12168) — fix(tools): enforce Act policy on send_message_to_peer
- [#12150](https://github.com/zeroclaw-labs/zeroclaw/pull/12150) — fix(runtime): emit single SBPL backslash for home-dotfile regex
- [#12166](https://github.com/zeroclaw-labs/zeroclaw/pull/12166) — fix(install): verify Windows prebuilt release checksums

---

## 功能需求与路线图信号

### 活跃的 RFC/增强类 Issue

| Issue | 标题 | 标签 |
|-------|------|------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) for the agent | enhancement, agent, memory, runtime, security, tool |
| [#11971](https://github.com/zeroclaw-labs/zeroclaw/issues/11971) | Build ZeroClaw without gateway/dashboard (CLI-only) | enhancement, cli, release:v0.9.0 |

### 可能近期发布的功能（基于标记为 v0.9.0 的 PR）

- **OIDC 仪表板认证** — 可选配 OIDC 提供商进行仪表板登录 (#11965)
- **RPC SOP 对等** — cancel、dispatch-event、decision-models、graph-legend (#11169)
- **授权发布** — config set/patch 的编辑内容传播到运行中的守护进程 (#11313)
- **会话所有权强制** — 按当前权限判断排队会话的所有权 (#11234)
- **SOP 管理员权限** — SOP 执行需要管理员权限 (#11220)

---

## 用户反馈摘要

### 痛点

1. **安装问题** — install.sh 存在多个 bug：架构选择错误、版本显示不正确、"no config written" 消息令人困惑（实际已创建文件）
2. **安全架构缺陷** — 研究员 IftekharUddin 提交了 10+ 个安全问题，涉及凭证泄露、沙箱绕过和权限模型弱点
3. **内存系统稳定性** — 用户在使用特定模型配置（jinja + Qwen3.6 35B A3B）时遇到 `Memory_store` 工具调用失败
4. **多用户限制** — 当前仪表板需要共享配对码；OIDC 功能正在开发中 (#11965)

### 积极信号

- 会话管理改进受到好评（/load-session 功能已合并）
- 应社区请求添加了纯 CLI 构建选项
- 活跃的安全研究参与表明社区审查机制健康

---

## 待处理事项

### 需要维护者关注的长周期 Issue

| Issue | 标题 | 存在时间 | 状态 |
|-------|------|----------|------|
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — document retrieval (RAG) | 约2个月 | 开启中，需要作者处理 |
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | fix(memory): keep owned-session subagent memory private | 约2个月 | 开启中 |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | fix(cli): publish authorization edits into running daemon | 约1个月 | 开启中，需要维护者审核 |
| [#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169) | feat(rpc): SOP parity | 约1个月 | 开启中，需要作者处理 |
| [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) | fix(rpc): judge queued session ownership | 约2个月 | 开启中 |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | fix(runtime): withhold session-data tools from non-admin | 约2个月 | 开启中 |
| [#11220](https://github.com/zeroclaw-labs/zeroclaw/pull/11220) | fix(security): require administrator authority for SOP | 约2个月 | 开启中 |

### 优先关注事项

- **安全积压**：10+ 个待处理的安全漏洞需要分类和修复
- **发布阻塞**：多个标记为 v0.9.0 的 PR 之间存在依赖关系（#11230 依赖 #11225 和 #11234）
- **需要作者操作**：#11235（RAG RFC）和 #11169（RPC SOP）标记为需要作者处理

---

*基于 2026年11月1日 zeroclaw-labs/zeroclaw 的 GitHub 数据生成*

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*