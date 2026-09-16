# OpenClaw 生态日报 2026-09-16

> Issues: 500 | PRs: 500 | 覆盖项目: 5 个 | 生成时间: 2026-09-16 09:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目摘要 — 2026-09-16

## 1. 今日概览
OpenClaw 活跃度非常高：过去 24 小时内有 500 个 issue 和 500 个 PR 被更新，其中 175 个 issue 已关闭，269 个 PR 已合并/关闭。没有新版本发布，因此今天的工作主要积累在 main/PR 层面，而不是已发布版本中。主导主题是生产规模下的可靠性：Gateway 内存/OOM、僵尸子进程、事件循环阻塞、session-lane 并发、更新/迁移失败，以及认证/令牌锁问题。维护者正在积极推动异步/事件循环修复和会话/认证健壮性 PR，但许多 P0/P1 issue 仍处于开放状态。整体项目健康状况为“高速推进但承受稳定性压力”，用户围绕回归问题和资源泄漏的参与度很高。

## 2. 版本发布
过去 24 小时内无新版本发布。最新版本：无。

## 3. 项目进展
数据集显示，过去 24 小时内 **269 个 PR 已合并/关闭**，**175 个 issue 已关闭**。一些可见的已关闭/已合并 PR 和已关闭 issue 表明，在 agent 模型继承、工具调用恢复、会话保留以及若干长期存在的崩溃/会话 bug 方面取得了进展。

**值得关注的已关闭/已合并或推进中的 PR：**
- [PR #149036](https://github.com/openclaw/openclaw/pull/149036) — `fix(agents): inherit active models across subagent spawns`（已关闭）。
- [PR #149844](https://github.com/openclaw/openclaw/pull/149844) — `fix(agents): resume tasks after output-limited tool calls`（已关闭）。
- [PR #149338](https://github.com/openclaw/openclaw/pull/149338) — `refactor(tests): retire obsolete session-memory file fixtures`（已关闭）。
- [PR #149754](https://github.com/openclaw/openclaw/pull/149754) — `fix(sessions): reduce retention work during session writes`（已关闭）。
- [PR #149519](https://github.com/openclaw/openclaw/pull/149519) — `refactor: await prepared workspace storage on node hosts`（开放中）。
- [PR #149741](https://github.com/openclaw/openclaw/pull/149741) — `fix: retain session history through Doctor migrations`（开放中）。
- [PR #149304](https://github.com/openclaw/openclaw/pull/149304) — `fix(outbound): prepare cold channel metadata asynchronously`（开放中）。
- [PR #149901](https://github.com/openclaw/openclaw/pull/149901) — `fix(memory): keep gateway responsive during index publication`（开放中）。
- [PR #149591](https://github.com/openclaw/openclaw/pull/149591) — `fix(auth): keep session account selection after OAuth re-login`（开放中）。
- [PR #149749](https://github.com/openclaw/openclaw/pull/149749) — `fix: keep large session detail reads responsive`（开放中）。
- [PR #149925](https://github.com/openclaw/openclaw/pull/149925) — `fix(agents): deliver one answer per steered user input`（开放中）。

**值得关注的 issue 关闭：**
- [Issue #145152](https://github.com/openclaw/openclaw/issues/145152) — 卡住会话恢复强制清除被误报为中止。
- [Issue #148866](https://github.com/openclaw/openclaw/issues/148866) — 使用 `gateway.bind=lan` 时 Gateway 永久重启循环。
- [Issue #145929](https://github.com/openclaw/openclaw/issues/145929) — 认证配置注销/写入锁失败。
- [Issue #146391](https://github.com/openclaw/openclaw/issues/146391) — 从外部插件解析 Groq manifest 模型。
- [Issue #149198](https://github.com/openclaw/openclaw/issues/149198) — 过早释放 `stale_lane_task`。
- [Issue #118018](https://github.com/openclaw/openclaw/issues/118018) — 过期的子 agent 完成结果被投递到已替换的请求方生命周期。
- [Issue #98437](https://github.com/openclaw/openclaw/issues/98437) — MCP 回环 schema 警告刷屏。
- [Issue #99925](https://github.com/openclaw/openclaw/issues/99925) — WebChat 新会话上下文丢失。

## 4. 社区热点话题
Issue 评论活动集中在生产稳定性和会话/消息正确性上。

**评论最多的开放/活跃 issue：**
1. [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) — 31 条评论 — 僵尸/未回收的 hook 和工具子进程导致运行时性能退化。
2. [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) — 25 条评论 — Gateway 内存泄漏：RSS 从 350MB 增长到 15.5GB，发生 OOM 崩溃。
3. [Issue #119720](https://github.com/openclaw/openclaw/issues/119720) — 20 条评论 — 同步 agent 持久化/transcript 维护阻塞 Gateway 事件循环。
4. [Issue #111897](https://github.com/openclaw/openclaw/issues/111897) — 19 条评论 — 同一 session-lane 的两个并发运行会投递重复回复。
5. [Issue #139847](https://github.com/openclaw/openclaw/issues/139847) — 14 条评论 — 在活跃回复运行期间发送的消息被丢弃；“无活跃工具授权快照”。
6. [Issue #53628](https://github.com/openclaw/openclaw/issues/53628) — 14 条评论 — 安装技能期间未处理 `XDG_CONFIG_HOME`。
7. [Issue #139710](https://github.com/openclaw/openclaw/issues/139710) — 13 条评论 — 插件生成取代会终止 system-agent 轮次和 planner 回退。
8. [Issue #146394](https://github.com/openclaw/openclaw/issues/146394) — 11 条评论 — 更新失败：2026.9.3 上出现 `global-install-failed`。
9. [Issue #86881](https://github.com/openclaw/openclaw/issues/86881) — 11 条评论 — 无 AI harness 的 Gateway-lite 模式，现已关闭。
10. [Issue #136311](https://github.com/openclaw/openclaw/issues/136311) — 11 条评论 — `memory-core` 重建索引锁阻止索引修复；孤立临时数据库不断累积。
11. [Issue #123009](https://github.com/openclaw/openclaw/issues/123009) — 10 条评论 — Codex 订阅封锁每五分钟重新检查。
12. [Issue #116512](https://github.com/openclaw/openclaw/issues/116512) — 10 条评论 — Telegram 进度重复首条评论。
13. [Issue #44309](https://github.com/openclaw/openclaw/issues/44309) — 10 条评论 — 单向 A2A 调度模式，以避免回复回传式乒乓。

**按维护者/更新活动排序的值得关注 PR** — 本数据集中没有 PR 评论数，但以下 PR 较为突出：
- [PR #149915](https://github.com/openclaw/openclaw/pull/149915) — UI transcript 搜索恢复的回复。
- [PR #149519](https://github.com/openclaw/openclaw/pull/149519) — 异步准备的工作区存储。
- [PR #149741](https://github.com/openclaw/openclaw/pull/149741) — 在 Doctor 迁移过程中保留会话历史。
- [PR #149304](https://github.com/openclaw/openclaw/pull/149304) — 异步冷通道元数据。
- [PR #149911](https://github.com/openclaw/openclaw/pull/149911) — 桌面端 TLS 1.3 加固。
- [PR #147886](https://github.com/openclaw/openclaw/pull/147886) — 飞书 Markdown 表格模式。
- [PR #146913](https://github.com/openclaw/openclaw/pull/146913) — 隔离延迟配置重载上下文。

**深层需求：** 用户要求更强大的资源生命周期管理、非阻塞 Gateway 架构、确定性的 session-lane 并发、更安全的更新/迁移路径、可靠的内存索引，以及跨渠道消息投递正确性。

## 5. Bug 与稳定性
今日更新的按严重程度排序的稳定性问题：

**P0 / 发布阻断类**
- [Issue #146394](https://github.com/openclaw/openclaw/issues/146394) — 更新失败：2026.9.3 上出现 `global-install-failed`。
- [Issue #145929](https://github.com/openclaw/openclaw/issues/145929) — 认证配置注销/写入因 `lock-may-be-busy` 永久失败；今日已关闭。
- [Issue #148866](https://github.com/openclaw/openclaw/issues/148866) — 当 `gateway.bind=lan` 时 Gateway 永久重启循环；今日已关闭。
- [Issue #144739](https://github.com/openclaw/openclaw/issues/144739) — 2026.9.3 → 2026.9.4 npm 更新会以旧版本针对 schema-17 候选状态运行。
- [Issue #115642](https://github.com/openclaw/openclaw/issues/115642) — 订阅认证下，计费冷却时间比提供商故障持续时间更长。
-

---

## 横向生态对比

## Cross-Project Comparison Report — Agent / Personal AI Assistant OSS Ecosystem  
**Window:** 2026-09-16  
**Data note:** Health scores below are derived qualitative signals (0–10) from the provided digests — activity, merge/close throughput, open P0/P1 severity, and release status — not official project metrics. IronClaw had no activity; ZeroClaw’s digest failed to generate. Hermes/OpenClaw digests appear partially truncated, but reported counts are used as-is.

---

## 1. Ecosystem Overview
The active projects are in a production-hardening phase: no active project shipped a release in the window, while issue/PR traffic concentrated on reliability, session correctness, auth/billing, and MCP/ACP integration. OpenClaw remains the center of gravity by volume and acts as the core reference, but its activity mix shows significant stability pressure at scale. Hermes Agent and QwenPaw are iterating in narrower but high-value areas — profile/session routing, billing, Windows/ACP, Hub multi-tenancy, console/mobile/voice. IronClaw was inactive, and ZeroClaw had no usable digest, so cross-project conclusions are weighted toward OpenClaw, Hermes, and QwenPaw.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release status | Derived health |
|---|---:|---:|---|---|
| **OpenClaw** | 500 updated; 175 closed; many P0/P1 open | 500 updated; 269 merged/closed | No release | **7.0/10** — high velocity, stability-pressured |
| **Hermes Agent** | 50 updated; 42 open/active, 8 closed | 50 updated; 48 open, 2 merged/closed | No release | **6.0/10** — active triage, merge/release bottleneck |
| **IronClaw** | 0 | 0 | No activity | **N/A** |
| **QwenPaw** | 22 updated; 15 closed, 7 active | 39 updated; 15 merged/closed, 24 open | No release | **7.5/10** — good maintenance throughput, 2 open high-impact bugs |
| **ZeroClaw** | N/A | N/A | Unknown | **N/A** — summary failed |

*Hermes merged PRs are not identifiable from the provided top-20 PR sample.*

---

## 3. OpenClaw’s Position
**Scale and community size:** OpenClaw operates at roughly **10× Hermes** and **>20× QwenPaw** in updated issues/PRs for the window, with **269 PRs merged/closed** versus Hermes’ 2 and QwenPaw’s 15. It has the broadest contributor and integration surface in this sample.

**Advantages vs peers:**
- Core reference implementation with production-scale deployment experience.
- Fastest merge/close throughput despite very high volume.
- Broadest multi-channel/plugin/MCP surface: WebChat, Telegram, Feishu, desktop, memory-core, subagents, Doctor migrations.
- Strong focus on async/event-loop fixes and session/auth robustness.

**Technical approach differences:**
- **OpenClaw:** Gateway-centric architecture; session lanes; async workspace/storage hardening; memory indexing; subagent model inheritance; migration/auth robustness.
- **Hermes Agent:** Narrower operational focus on profile multiplexing, WAL session-state recovery, billing/credit routing, Windows ACP, desktop request handling.
- **QwenPaw:** Hub multi-tenancy, unified workbench, console/Creator, mobile/voice, record/replay, MCP/ACP.

**Risks vs peers:** OpenClaw’s high activity is partly instability-driven: OOM/memory leaks, zombie child processes, event-loop blocking, update/auth lock failures, and gateway restart loops remain P0/P1. Peers with narrower scopes may stabilize faster, while OpenClaw must fix reliability without slowing ecosystem velocity.

---

## 4. Shared Technical Focus Areas

| Focus area | Projects | Specific emerging requirements |
|---|---|---|
| **Reliability under scale** | OpenClaw, Hermes | Reap zombie/child processes; prevent Gateway RSS/OOM growth; non-blocking persistence; WAL handoff; restart-safe gateway drain. |
| **Session concurrency & correctness** | OpenClaw, Hermes | Prevent duplicate/dropped replies; fix stale lane tasks; deterministic session-lane concurrency; profile multiplexing consistency; crash-safe desktop request handling. |
| **Agent orchestration / subagents** | OpenClaw, Hermes, QwenPaw | Model inheritance across spawns; resume after output-limited tool calls; per-task model/tool overrides; fix `spawn subAgent` timeouts; isolate delegated child context. |
| **MCP / ACP integration** | OpenClaw, QwenPaw, Hermes | MCP connect/register reliability; ACP trusted permission selection; Windows ACP boot stability; schema warning spam; protocol-aware timeouts. |
| **Cross-channel / multimodal artifacts** | OpenClaw, Hermes, QwenPaw | Telegram/WebChat/Feishu delivery; email STARTTLS and memory-context leakage; WeChat/WeCom attachments; PDF/image blocks; `file://` URL normalization. |
| **Auth / billing / governance** | OpenClaw, Hermes, QwenPaw | OAuth re-login persistence; token/service-env locks; subscription-credit routing; billing cooldowns; Hub model gateway, member governance, usage dashboards. |
| **Update / migration safety** | OpenClaw, Hermes | Fix `global-install-failed`; schema-aware npm updates; Doctor migrations retaining history; Windows restricted-network updater failures. |
| **Context / compaction safety** | Hermes, OpenClaw | Enforce token budgets on oversized turns; preserve history through compaction; prevent memory injection into one-shot runs; isolate parent/child memory. |
| **Enterprise / team readiness** | QwenPaw, OpenClaw, Hermes | Multi-tenant Hub; admin-managed skills; model governance; profile multiplexing; team/org deployment. |

---

## 5. Differentiation Analysis

| Project | Feature focus | Target users | Technical architecture |
|---|---|---|---|
| **OpenClaw** | Core gateway/agent reliability, multi-channel delivery, plugins, memory, subagents | Production developers, self-hosters, platform teams | Gateway-centric; session lanes; async event-loop hardening; Doctor migrations; MCP/plugins; memory-core |
| **Hermes Agent** | Billing/credit routing, session-state/WAL, profile multiplexing, Windows/ACP, desktop | Subscription users, multi-profile gateway operators, desktop/Windows users | Profile-multiplexed gateway; WAL session state; ACP; adapters (Signal/email); `delegate_task` overrides |
| **QwenPaw** | Hub multi-tenancy, console/Creator, mobile/voice, record/replay, MCP/ACP | Teams/orgs, creators, enterprise multi-channel deployments | Hub/model gateway; agent runtimes; ACP/MCP; console; plugin catalogs; Docker/browser tools |
| **IronClaw** | Unknown — no activity | Unknown | Unknown |
| **ZeroClaw** | Unknown — no digest | Unknown | Unknown |

OpenClaw is the horizontal, reference-grade platform. Hermes is operationally focused on account/session/billing correctness. QwenPaw is pushing enterprise/team surfaces and user-facing channels. IronClaw and ZeroClaw cannot be assessed from this window.

---

## 6. Community Momentum & Maturity

**Tier 1 — OpenClaw:** Very high velocity, largest community surface, fastest merge throughput. Mature as a reference platform but not yet stable under production scale; reliability debt keeps it in firefighting mode.

**Tier 2 — QwenPaw:** Rapid iteration plus strong maintenance throughput: 15 issues closed, 15 PRs merged/closed. It is stabilizing 2.2.x while advancing Hub multi-tenancy, unified workbench, mobile, voice, and record/replay. Best closure/merge balance in the sample, though two open high-impact bugs remain (`spawn subAgent` timeouts, WeChat/OpenAI-compatible attachments).

**Tier 2 — Hermes Agent:** Active triage but bottlenecked on review/merge and release cadence: 50 issues/50 PRs touched, only 2 PRs merged/closed, no release. Strong focus on billing, WAL/session-state, profile multiplexing, and Windows/ACP. Needs reviewer capacity to convert triage into shipped fixes.

**Tier 3 — IronClaw:** No activity in 24h. Maturity unknown; treat as dormant in this window.

**Tier 3 — ZeroClaw:** Summary generation failed; no comparable data. Maturity unknown.

---

## 7. Trend Signals

1. **Reliability is now the product gate.** Memory leaks, OOM, zombie processes, event-loop blocking, and gateway restart loops dominate OpenClaw; WAL handoff and profile state dominate Hermes. Developers should prioritize async architecture, resource lifecycle management, and crash-safe state.

2. **Session correctness is becoming a first-class requirement.** Duplicate replies, dropped messages, stale lane tasks, profile multiplexing inconsistencies, and desktop request-handler crashes show that deterministic session lanes, idempotency, and crash-safe request handling are essential.

3. **MCP/ACP are integration battlegrounds.** Projects are fixing MCP connect/register, ACP trusted permissions, Windows ACP boot hangs, and schema warnings. Standardized protocol adapters with timeout diagnostics and protocol-kind selection are high-value.

4. **Multi-tenant/team governance is rising.** QwenPaw’s Hub roadmap (29 comments, 4 👍) signals demand for team deployment, admin-managed skills, model governance, and usage dashboards. Enterprise readiness will differentiate platforms.

5. **Billing/auth transparency matters.** Hermes’ P1 billing bug and OpenClaw’s auth/token/OAuth issues show users need route-level credit accounting, persistent tokens, and predictable subscription behavior.

6. **Cross-channel artifact normalization is still fragile.** Email, WeChat/WeCom, Telegram, WebChat, PDFs, images, and `file://` URLs require validation and normalization before hitting model APIs.

7. **Context/memory safety is a growing security boundary.** Compaction budgets, memory injection controls, delegated env isolation, and prevention of memory leakage into outgoing replies are recurring needs.

8. **Update/migration safety is underinvested.** OpenClaw’s install/schema/migration failures and Hermes’ Windows updater issues point to a need for atomic installs, schema-aware rollouts, rollback, and migration tests.

**Bottom line for AI agent developers:** build for reliability and session correctness first, then integrate MCP/ACP and multi-channel surfaces with strict artifact normalization, auth/billing observability, and migration safety. OpenClaw leads in scale and ecosystem breadth; QwenPaw is the strongest enterprise/team challenger; Hermes is operationally focused but needs merge/release throughput.

---

## 同赛道项目详细报告

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-16

**Data window:** last 24h.  
**Activity:** 50 issues updated (42 open/active, 8 closed); 50 PRs updated (48 open, 2 merged/closed); 0 new releases.  
**Sample caveat:** issues shown are the top 30 by comment count; PRs shown are the top 20 by comment count. PR comment counts were not available.

---

## 1. Today’s Overview

Hermes Agent is showing **high triage and update volume but low merge/release throughput**: 50 issues and 50 PRs were touched in 24h, yet only 2 PRs were merged/closed and no release shipped. The active backlog remains large, with 42 open issues and 48 open PRs in the window. The hottest threads are concentrated in billing/credit routing, session-state/WAL reliability, profile multiplexing, Windows ACP stability, and compaction behavior. Several same-day fixes or closures landed, including the IMAP STARTTLS issue and the P1 billing route bug, but multiple P1/P2 issues remain open. Overall project health looks **responsive on triage but bottlenecked on review/merge and release cadence**, with Windows and multiplexed-profile regressions recurring across reports.

---

## 2. Releases

**No new releases in the last 24h.**  
No breaking changes, migration notes, or release artifacts to report.

---

## 3. Project Progress

**Merged/closed PRs:** 2 PRs were merged or closed, but the provided top-20 PR sample contains only open PRs, so the specific merged PRs are not identifiable from this data.

**Closed issues indicating progress or resolution:**
- [#110912](https://github.com/NousResearch/hermes-agent/issues/110912) — P1 billing bug: full/list price charged on some model routes while subscription credits active. Closed after 16 comments.
- [#72064](https://github.com/NousResearch/hermes-agent/issues/72064) — `oneshot` memory injection / `--ignore-rules` ignored. Closed as duplicate.
- [#95906](https://github.com/NousResearch/hermes-agent/issues/95906) — Desktop “Show earlier” dead on compacted sessions. Closed after backend/frontend fixes.
- [#112668](https://github.com/NousResearch/hermes-agent/issues/112668) — Email IMAP always used implicit TLS, breaking STARTTLS-only servers. Closed same day.
- [#106373](https://github.com/NousResearch/hermes-agent/issues/106373) — Windows restricted-network updater rebuild failures. Closed.

**Notable open PRs advancing work:**
- [#112741](https://github.com/NousResearch/hermes-agent/pull/112741) — per-task model, provider, `reasoning_effort`, and toolsets for `delegate_task`; implements requests from #88891 and #107937.
- [#112790](https://github.com/NousResearch/hermes-agent/pull/112790) — resolves multiplexed secondary-profile platform state past a stale own record; appears to address #112765.
- [#112791](https://github.com/NousResearch/hermes-agent/pull/112791) — desktop server-to-client request handling when a handler crashes, preventing stalled backend calls.
- [#112669](https://github.com/NousResearch/hermes-agent/pull/112669) — native skill and plugin catalogs with website install links.
- [#112796](https://github.com/NousResearch/hermes-agent/pull/112796) — migrate Signal adapter onto the platform plugin registry.
- [#109937](https://github.com/NousResearch/hermes-agent/pull/109937) — persistent task admission bridge for goals.

---

## 4. Community Hot Topics

| Issue | Status | Comments / Reactions | Underlying need |
|---|---:|---:|---|
| [#110912](https://github.com/NousResearch/hermes-agent/issues/110912) — Nous Portal full/list price charged while subscription credits active | CLOSED, P1 | 16 comments, 👍1 | Transparent, predictable billing and correct discount-route handling. |
| [#109966](https://github.com/NousResearch/hermes-agent/issues/109966) — WAL generation handoff during fleet restart leaves long-lived holders | OPEN | 15 comments | Reliable session-state recovery after fleet restarts; no multi-hour opener blocks. |
| [#109417](https://github.com/NousResearch/hermes-agent/issues/109417) — Profile multiplexing as the only gateway mode | OPEN, P2 | 8 comments, 👍1 | One gateway should serve all profiles without user-visible differences. |
| [#72064](https://github.com/NousResearch/hermes-agent/issues/72064) — `oneshot` cannot skip built-in memory injection | CLOSED, duplicate | 7 comments | Scriptable, deterministic one-shot runs without forced memory context. |
| [#95906](https://github.com/NousResearch/hermes-agent/issues/95906) — Desktop “Show earlier” dead on compacted sessions | CLOSED | 6 comments | Desktop history should remain accessible after compaction. |
| [#58083](https://github.com/NousResearch/hermes-agent/issues/58083) — ACP `session/new` hangs during agent boot on Windows | OPEN, P1 | 6 comments | Windows ACP boot stability and timeout diagnostics. |
| [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) — Terminal env snapshot leaks `HERMES_DELEGATED_CHILD_CONTEXT` | OPEN, P2 | 5 comments | Delegated-task environment isolation; parent sessions should not inherit child markers. |
| [#80449](https://github.com/NousResearch/hermes-agent/issues/80449) — Compressor keeps oversized single turn whole | OPEN, P1 | 5 comments | Compaction must respect token budgets even for monster tool-calling turns. |

**PR hot-topic note:** PR comment counts were unavailable, but the highest-impact open PRs are [#112741](https://github.com/NousResearch/hermes-agent/pull/112741) (delegation overrides), [#112790](https://github.com/NousResearch/hermes-agent/pull/112790) (multiplexed profile state), [#112791](https://github.com/NousResearch/hermes-agent/pull/112791) (desktop request-handler crashes), and [#112669](https://github.com/NousResearch/hermes-agent/pull/112669) (native catalogs).

---

## 5. Bugs & Stability

**P1 / highest severity**
- [#58083](https://github.com/NousResearch/hermes-agent/issues/58083) — ACP `session/new` hangs indefinitely during agent boot on Windows. Open, P1, no obvious fix PR in sample.
- [#80449](https://github.com/NousResearch/hermes-agent/issues/80449) — Compressor keeps an oversized single turn whole; token budget blown. Open, P1, no fix PR visible.
- [#110912](https://github.com/NousResearch/hermes-agent/issues/110912) — Billing charged list price despite active subscription credits. Closed, P1; resolution landed.

**P2 / high-impact**
- [#81312](https://github.com/NousResearch/hermes-agent/issues/81312) — Email gateway leaks agent memory context into outgoing reply body. Open, P2, security boundary, `needs-repro`.
- [#92260](https://github.com/NousResearch/hermes-agent/issues/92260) — Windows `search_files` regex corrupted: backslashes rewritten before ripgrep. Open, P2.
- [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) — Terminal env snapshot leaks delegated child context into parent. Open, P2.
- [#98330](https://github.com/NousResearch/hermes-agent/issues/98330) — Desktop `skills.write_approval` has no review surface; pending writes accumulate. Open, P2.
- [#55564](https://github.com/NousResearch/hermes-agent/issues/55564) — `prompt.submit` hijacks session transport; breaks Desktop UI updates. Open, P3/P2-adjacent.
- [#112765](https://github.com/NousResearch/hermes-agent/issues/112765) — Messaging page shows permanent “Restart needed” for multiplexed secondary-profile platforms. Open; fix PR [#112790](https://github.com/NousResearch/hermes-agent/pull/112790) appears related.
- [#112750](https://github.com/NousResearch/hermes-agent/issues/112750) — Windows `hermes gateway stop` immediately kills PID; shutdown path never drains. Open, untagged but high impact.
- [#112729](https://github.com/NousResearch/hermes-agent/issues/112729) — Restart-safe external cron worker fails dispatch due to symlink resolution in `sys.executable`. Open.
- [#112710](https://github.com/NousResearch/hermes-agent/issues/112710) — `context_compressor._sum_named` renders `name=?` and collapses failed results into success-shaped lines. Open.
- [#112764](https://github.com/NousResearch/hermes-agent/issues/112764) — Repetition guard not applied on interrupt-replay path. Open.
- [#112740](https://github.com/NousResearch/hermes-agent/issues/112740) — TUI scrolling stalls near tall/multiline tool output, then jumps. Open.

**Closed stability wins today**
- [#112668](https://github.com/NousResearch/hermes-agent/issues/112668) — Email IMAP STARTTLS-only servers fixed.
- [#

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw 项目摘要 — 2026-09-16

## 1. 今日概览
QwenPaw 在 2026-09-16 保持高度活跃：过去 24 小时内更新了 22 个 issue 和 39 个 PR，关闭了 15 个 issue，合并/关闭了 15 个 PR，剩余 7 个活跃 issue 和 24 个开放 PR。未发布新版本。活动集中在 2.2.x 稳定化——MCP、ACP、Creator、控制台媒体渲染、Docker/浏览器工具——同时前瞻性工作继续

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ 摘要生成失败。

</details>

---
*本日报由 [agents-radar](https://github.com/kouweizhu/agents-radar) 自动生成。*