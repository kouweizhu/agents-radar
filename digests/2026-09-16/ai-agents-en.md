# OpenClaw Ecosystem Digest 2026-09-16

> Issues: 500 | PRs: 500 | Projects covered: 5 | Generated: 2026-09-16 09:27 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-09-16

## 1. Today's Overview
OpenClaw is showing very high activity: 500 issues and 500 PRs were updated in the last 24h, with 175 issues closed and 269 PRs merged/closed. No new releases shipped, so today’s work is accumulating in main/PR land rather than in a published version. The dominant theme is reliability under production scale: Gateway memory/OOM, zombie child processes, event-loop blocking, session-lane concurrency, update/migration failures, and auth/token lock issues. Maintainers are actively pushing async/event-loop fixes and session/auth robustness PRs, but many P0/P1 issues remain open. Overall project health is “high-velocity but stability-pressured,” with heavy user engagement around regressions and resource leaks.

## 2. Releases
No new releases in the last 24h. Latest releases: None.

## 3. Project Progress
The dataset reports **269 PRs merged/closed** and **175 issues closed** in the last 24h. Some visible closed/merged PRs and issue closures show progress in agent model inheritance, tool-call resumption, session retention, and several long-running crash/session bugs.

**Notable PRs closed/merged or advanced:**
- [PR #149036](https://github.com/openclaw/openclaw/pull/149036) — `fix(agents): inherit active models across subagent spawns` (closed).
- [PR #149844](https://github.com/openclaw/openclaw/pull/149844) — `fix(agents): resume tasks after output-limited tool calls` (closed).
- [PR #149338](https://github.com/openclaw/openclaw/pull/149338) — `refactor(tests): retire obsolete session-memory file fixtures` (closed).
- [PR #149754](https://github.com/openclaw/openclaw/pull/149754) — `fix(sessions): reduce retention work during session writes` (closed).
- [PR #149519](https://github.com/openclaw/openclaw/pull/149519) — `refactor: await prepared workspace storage on node hosts` (open).
- [PR #149741](https://github.com/openclaw/openclaw/pull/149741) — `fix: retain session history through Doctor migrations` (open).
- [PR #149304](https://github.com/openclaw/openclaw/pull/149304) — `fix(outbound): prepare cold channel metadata asynchronously` (open).
- [PR #149901](https://github.com/openclaw/openclaw/pull/149901) — `fix(memory): keep gateway responsive during index publication` (open).
- [PR #149591](https://github.com/openclaw/openclaw/pull/149591) — `fix(auth): keep session account selection after OAuth re-login` (open).
- [PR #149749](https://github.com/openclaw/openclaw/pull/149749) — `fix: keep large session detail reads responsive` (open).
- [PR #149925](https://github.com/openclaw/openclaw/pull/149925) — `fix(agents): deliver one answer per steered user input` (open).

**Notable issue closures:**
- [Issue #145152](https://github.com/openclaw/openclaw/issues/145152) — stuck-session recovery force-clear misreported as abort.
- [Issue #148866](https://github.com/openclaw/openclaw/issues/148866) — Gateway permanent restart loop with `gateway.bind=lan`.
- [Issue #145929](https://github.com/openclaw/openclaw/issues/145929) — auth profile logout/write lock failure.
- [Issue #146391](https://github.com/openclaw/openclaw/issues/146391) — Groq manifest model resolution from external plugin.
- [Issue #149198](https://github.com/openclaw/openclaw/issues/149198) — premature `stale_lane_task` release.
- [Issue #118018](https://github.com/openclaw/openclaw/issues/118018) — stale subagent completion delivered into replaced requester lifecycle.
- [Issue #98437](https://github.com/openclaw/openclaw/issues/98437) — MCP loopback schema warning spam.
- [Issue #99925](https://github.com/openclaw/openclaw/issues/99925) — WebChat new-session context loss.

## 4. Community Hot Topics
Issue comment activity is concentrated on production stability and session/message correctness.

**Most-commented open/active issues:**
1. [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) — 31 comments — zombie/unreaped hook and tool child processes cause runtime degradation.
2. [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) — 25 comments — Gateway memory leak: RSS grows from 350MB to 15.5GB, OOM crashes.
3. [Issue #119720](https://github.com/openclaw/openclaw/issues/119720) — 20 comments — synchronous agent persistence/transcript maintenance blocks the Gateway event loop.
4. [Issue #111897](https://github.com/openclaw/openclaw/issues/111897) — 19 comments — two concurrent runs for the same session lane deliver duplicate replies.
5. [Issue #139847](https://github.com/openclaw/openclaw/issues/139847) — 14 comments — message sent during active reply run is dropped; “no active tool authority snapshot.”
6. [Issue #53628](https://github.com/openclaw/openclaw/issues/53628) — 14 comments — `XDG_CONFIG_HOME` not processed during skill install.
7. [Issue #139710](https://github.com/openclaw/openclaw/issues/139710) — 13 comments — plugin-generation supersede kills system-agent turn and planner fallback.
8. [Issue #146394](https://github.com/openclaw/openclaw/issues/146394) — 11 comments — update failure: `global-install-failed` on 2026.9.3.
9. [Issue #86881](https://github.com/openclaw/openclaw/issues/86881) — 11 comments — Gateway-lite mode without AI harness, now closed.
10. [Issue #136311](https://github.com/openclaw/openclaw/issues/136311) — 11 comments — `memory-core` reindex lock prevents index repair; orphaned temp DBs accumulate.
11. [Issue #123009](https://github.com/openclaw/openclaw/issues/123009) — 10 comments — Codex subscription block recheck every five minutes.
12. [Issue #116512](https://github.com/openclaw/openclaw/issues/116512) — 10 comments — Telegram progress duplicates first commentary.
13. [Issue #44309](https://github.com/openclaw/openclaw/issues/44309) — 10 comments — one-way A2A dispatch mode to avoid reply-back ping-pong.

**Notable PRs by maintainer/update activity** — PR comment counts were not available in this dataset, but the following are prominent:
- [PR #149915](https://github.com/openclaw/openclaw/pull/149915) — UI transcript search recovered replies.
- [PR #149519](https://github.com/openclaw/openclaw/pull/149519) — async prepared workspace storage.
- [PR #149741](https://github.com/openclaw/openclaw/pull/149741) — retain session history through Doctor migrations.
- [PR #149304](https://github.com/openclaw/openclaw/pull/149304) — async cold channel metadata.
- [PR #149911](https://github.com/openclaw/openclaw/pull/149911) — desktop TLS 1.3 hardening.
- [PR #147886](https://github.com/openclaw/openclaw/pull/147886) — Feishu markdown table mode.
- [PR #146913](https://github.com/openclaw/openclaw/pull/146913) — isolate deferred config reload context.

**Underlying needs:** users are asking for stronger resource lifecycle management, non-blocking Gateway architecture, deterministic session-lane concurrency, safer update/migration paths, reliable memory indexing, and cross-channel message-delivery correctness.

## 5. Bugs & Stability
Severity-ranked stability issues updated today:

**P0 / release-blocker class**
- [Issue #146394](https://github.com/openclaw/openclaw/issues/146394) — Update failure: `global-install-failed` on 2026.9.3.
- [Issue #145929](https://github.com/openclaw/openclaw/issues/145929) — Auth profile logout/write permanently fails with `lock-may-be-busy`; closed today.
- [Issue #148866](https://github.com/openclaw/openclaw/issues/148866) — Gateway permanent restart loop when `gateway.bind=lan`; closed today.
- [Issue #144739](https://github.com/openclaw/openclaw/issues/144739) — 2026.9.3 → 2026.9.4 npm update runs old version against schema-17 candidate state.
- [Issue #115642](https://github.com/openclaw/openclaw/issues/115642) — Billing cooldown outlives provider outage on subscription auth.
- [Issue #111578](https://github.com/openclaw/openclaw/issues/111578) — Gateway auth token dropped from service-env on update; CLI cannot auth locally.
- [Issue #149106](https://github.com/openclaw/openclaw/issues/149106) — Gateway process froze ~31 minutes while host stayed up, then self-recovered.

**P1 / high-impact operational bugs**
- [Issue #97616](https://github.com/openclaw/openclaw/issues/97616) — Zombie child-process accumulation from hooks/tools.
- [Issue #91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway RSS memory leak and repeated OOM crashes.
- [Issue #119720](https://github.com/openclaw/openclaw/issues/119720) — Synchronous persistence blocks Gateway event loop at scale.
- [Issue #111897](https://github.com/openclaw/openclaw/issues/111897) — Concurrent

---

## Cross-Ecosystem Comparison

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

## Peer Project Reports

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

No activity in the last 24 hours.

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

# QwenPaw Project Digest — 2026-09-16

## 1. Today's Overview
QwenPaw remained highly active on 2026-09-16: 22 issues and 39 PRs were updated in the last 24 hours, with 15 issues closed and 15 PRs merged/closed, leaving 7 active issues and 24 open PRs. No new release was published. Activity concentrated on 2.2.x stabilization — MCP, ACP, Creator, console media rendering, Docker/browser tools — while forward-looking work continued on Hub multi-tenancy, the unified workbench, mobile, voice, and record/replay. Community engagement is strong, led by the QwenPaw Hub 2.2.0 roadmap thread (#7318, 29 comments, 4 👍). Overall health is good on maintenance throughput, but two open high-impact bugs remain: subAgent timeouts (#7678) and WeChat/OpenAI-compatible attachment handling (#7792).

## 2. Releases
No new releases in this window. No breaking changes or migration notes to report.

## 3. Project Progress
- **15 PRs were merged/closed.** Visible closures include:
  - [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) — `fix(acp): select permission options by protocol kind`, addressing trusted ACP sessions falling back to interactive prompts ([#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726)).
  - [#7789](https://github.com/agentscope-ai/QwenPaw/pull/7789) — configurable multi-folder default workspaces for Agents.
  - [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232) — console static asset caching/compression.
  - [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) — configurable theme/skin module draft closed.
- **Issue closures indicate broad 2.2.x cleanup:** Docker `browser_use` dbus failure ([#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872)), infinite “Thinking”/SSE lifecycle ([#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871)), `send_file_to_user` image display regression ([#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799)), PDF document blocks leaking to multimodal endpoints ([#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689)), MCP connect/register on 2.2.x ([#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716)), Creator prompt-sync gating ([#7720](https://github.com/agentscope-ai/QwenPaw/issues/7720)), Creator multi-image audit stuck in RUNNING ([#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693)), JSON line numbers ([#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472)), unauthenticated HTTP gateway risk ([#4037](https://github.com/agentscope-ai/QwenPaw/issues/4037)), plugin catalog offline fallback ([#7730](https://github.com/agentscope-ai/QwenPaw/issues/7730)), and Dagu MCP zlib decoding ([#7764](https://github.com/agentscope-ai/QwenPaw/issues/7764)).
- **Open PRs advancing notable features:** Hub model gateway/member governance/usage dashboard ([#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779)), unified chat workbench shell ([#7790](https://github.com/agentscope-ai/QwenPaw/pull/7790)), daily Runtime telemetry ([#7802](https://github.com/agentscope-ai/QwenPaw/pull/7802)), record/replay workflows ([#7798](https://github.com/agentscope-ai/QwenPaw/pull/7798)), realtime voice chat ([#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)), custom IMAP/SMTP mail provider ([#7791](https://github.com/agentscope-ai/QwenPaw/pull/7791)), multi-agent collaboration trigger keywords ([#7795](https://github.com/agentscope-ai/QwenPaw/pull/7795)), and mobile native experience draft ([#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)).

## 4. Community Hot Topics
- [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — **OPEN**, QwenPaw Hub multi-tenant edition coming in 2.2.0: what next? **29 comments, 4 👍.** Underlying need: team/org deployment, multi-user access, admin-managed skills, model governance, and enterprise readiness.
- [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) — **OPEN**, `spawn subAgent` tasks all fail/time out even with long timeout. **9 comments.** High operational pain for agent orchestration.
- [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) — **CLOSED**, Docker `browser_use` Chromium/dbus failure. **6 comments.** Docker/browser tooling reliability.
- [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) — **CLOSED**, Agent enters infinite “Thinking” after response / SSE not closing. **5 comments.**
- [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) — **CLOSED**, Console does not show images sent by `send_file_to_user` after streaming; suspected #5320 recurrence. **4 comments.**
- [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) — **OPEN**, how to pass channel-level params to MCP tools without LLM rewriting. **3 comments.** Security/identity-context need.
- [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) — **CLOSED**, PDF blocks still sent to multimodal chat-completions after #7621. **3 comments.**
- [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) — **CLOSED**, MCP cannot connect/register since 2.2.x. **3 comments.**

Underlying themes: enterprise/team readiness, reliable subagent/MCP/browser execution, clearer streaming/console behavior, secure parameter pass-through, and cleaner artifact handling. PR comment counts were not available in the provided data.

## 5. Bugs & Stability
Ranked by severity/impact:
1. [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) — **OPEN**, `spawn subAgent` always times out/fails. High severity for agent workflows; no fix PR visible. **9 comments.**
2. [#7792](https://github.com/agentscope-ai/QwenPaw/issues/7792) — **OPEN**, WeChat/WeCom video/audio attachments become `file://` URLs and are sent raw to OpenAI-compatible API, causing HTTP 400 “URL does not appear to be valid.” High severity for channel users; no fix PR visible.
3. [#7799](https://github.com/agentscope-ai/QwenPaw/issues/7799) — **CLOSED**, console image from `send_file_to_user` disappears after streaming; suspected regression of #5320.
4. [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) — **CLOSED**, PDF document blocks still leak to multimodal `/chat/completions` after #7621.
5. [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) — **CLOSED**, MCP connect/register broken after upgrade to 2.2.x.
6. [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) — **CLOSED**, ACP `trusted: true` silently falls back to interactive prompts; addressed by PR [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732).
7. [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) — **CLOSED**, Creator multi-image approval interrupts running image task and permanently leaves it RUNNING.
8. [#7720](https://github.com/agentscope-ai/QwenPaw/issues/7720) — **CLOSED**, Creator hides prompt-sync blocker behind GATED and lacks manual image acceptance.
9. [#7764](https://github.com/agentscope-ai/QwenPaw/issues/7764) — **CLOSED**, MCP client `dagu` inactive due to `httpx.DecodingError: zlib incorrect header check`.
10. [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) — **CLOSED**, Docker `browser_use` dbus connection failure.
11. [#3871](https://github.com/agentscope-ai/QwenPaw/issues/3871) — **CLOSED**, infinite “Thinking” state / SSE stream not closing.
12. [#6472](https://github.com/agentscope-ai/QwenPaw/issues/6472) — **CLOSED**, JSON files no longer show line numbers in programming mode after 2.0.1.

Stability read: many 2.2.x regressions were closed, but the two open bugs above remain the main unresolved reliability risks.

## 6. Feature Requests & Roadmap Signals
- **Hub multi-tenant / team administration:** [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) with 29

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

⚠️ Summary generation failed.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*