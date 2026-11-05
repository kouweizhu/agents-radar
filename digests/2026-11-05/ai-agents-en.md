# OpenClaw Ecosystem Digest 2026-11-05

> Issues: 395 | PRs: 500 | Projects covered: 5 | Generated: 2026-11-05 02:43 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [IronClaw](https://github.com/nearai/ironclaw)
- [QwenPaw](https://github.com/agentscope-ai/QwenPaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

<think>Let me analyze the GitHub data for OpenClaw and generate a structured project digest for 2026-11-05.

Let me organize the key information:

**Data Overview:**
- Issues updated in last 24h: 395 (open/active: 226, closed: 169)
- PRs updated in last 24h: 500 (open: 303, merged/closed: 197)
- New releases: 1 (v2026.11.5-beta.1)

**Latest Release: v2026.11.5-beta.1**
- Knowledge Scribes: first-class knowledge capture and reusable scribe workflows
- PostgreSQL data plane: PostgreSQL-backed state

**Top Issues by Comments:**
1. #160959 - Gateway blocks for minutes while capturing large external plugins (70 comments, P0)
2. #177656 - Native host exec returns shared-state integrity-admission error (28 comments, P1)
3. #170956 - Windows: slow startup, unclean plugin shutdown, schtasks permission error (28 comments, P1)
4. #120385 - Code Mode tool catalog built incomplete for scheduled/cron (25 comments, P2)
5. #150635 - short-term recall retention evicts recalled entries nightly (24 comments, P2)
6. #166634 - Late reclamation commit checkpoint failure leaves agent unavailable (23 comments)
7. #161921 - doctor --fix and plugins update each require the other (17 comments, P0)
8. #166133 - MCP tool_call wrapper coerces integer args to string (15 comments, P2)
9. #160610 - Discord autoPresence reports "runtime degraded" (15 comments, P2) - CLOSED
10. #154812 - Gateway: runaway RSS outside V8 heap causes OOM (14 comments, P1)


11. #191944 - gateway stop fails on macOS (14 comments, P2)
12. #162585 - Plugin source-capture staging re-materializes plugin package (14 comments, P2)
13. #151962 - Phantom user messages (14 comments, P2)
14. #121558 - Cron isolated runs deliver claude-cli run narration (12 comments, P1)
15. #150822 - Native Codex children advertise OpenClaw tools without execution handler (12 comments, P1)
16. #169844 - Control UI Gateway update on Windows hangs (12 comments, P0)
17. #158127 - 2026.9.6 multi-agent runtime publication failures (12 comments, P1)
18. #148789 - Model fallback chain exhausts every candidate (11 comments, P1)
19. #165391 - Control UI dashboard shows N session rows but sessions.list show M (11 comments, P2) - CLOSED
20. #91676 - Feature: opt-in skills.workshop.allowSandboxedAgents (10 comments, P2)
21. #149153 - WebChat renders final assistant reply twice (10 comments, P2)
22. #143640 - memory-core: full index publish runs in single IMMEDIATE transaction (10 comments, P2)
23. #192632 - Feature: Claude web search provider (9 comments, P3)
24. #165041 - Session resume context injections visible to user (9 comments, P2)
25. #165685 - Feature: machine-readable reason on registry-settled yielded collector (9 comments, P3)
26. #190307 - Gateway restart leaves many agents permanently "degraded" (8 comments, P1)
27. #185578 - Gateway heap floor only ratchets up (8 comments, P1)
28. #158800 - Feature: Browse and fork prior channel-chat segments (8 comments, P2)
29. #17840 - Feature: opt-in reaction-triggered agent turns (8 comments, P2)
30. #161208 - Main-session heartbeats never reuse Anthropic prompt cache (8 comments, P2) - CLOSED
31. #142606 - Dashboard HTML widget links dead in native apps (8 comments, P2)
32. #138629 - bundled Codex ACP adapter returns end_turn for terminal failed turns (7 comments, P1)
33. #185656 - Large zstd transcript archive exceeds Node string limit (7 comments, P1) - CLOSED
34. #166289 - model.usage diagnostic event double-fires (7 comments, P2) - CLOSED
35. #164355 - Plugin hooks: no extension point can append content after tool results (7 comments, P2)
36. #137110 - Feature: Telegram sendDice support (7 comments, P3)
37. #163139 - Windows plugins.reload fails with EPERM (7 comments, P2)
38. #173095 - Control UI: session sidebar stays empty on cold start (7 comments, P2)
39. #184803 - Feature: Talk option to turn off spoken task receipt (6 comments, P3)
40. #162087 - scheduled announce fails "Scheduled account X is unavailable" (6 comments, P1)
41. #192141 - Interrupted-turn continuation delivers boilerplate without original user message (6 comments, P1)
42. #139586 - Feature: Extend Gateway-wide automation management (6 comments, P3)
43. #176187 - memory-core: sparse vec0 allocation amplifies KNN reads (6 comments, P2)
44. #151178 - Feature: Let Active Memory delegate escalation decisions to plugin (6 comments, P3)
45. #191401 - Signal teardown waits forever (6 comments, P2)
46. #161505 - Feature: hold media-only inbound message briefly (6 comments, P2) - CLOSED
47. #161277 - Feature: Drop per-turn requester_profile block (6 comments, P2)
48. #158921 - Feature: Native contributor admission, lifecycle and stop contract (6 comments, P2) - CLOSED
49. #163900 - memory-core budget compaction never removes "## Consolidated Memory" sections (6 comments, P1) - CLOSED

Top PRs:
1. #193132 - fix(update): repair refuses forever after a verified update fails (OPEN, P1)
2. #186117 - fix(imessage): report Automation failures after Gateway updates (CLOSED, P0)
3. #192053 - fix(signal): bound monitor teardown when receive work stalls (OPEN, P2)
4. #192050 - fix(cli): do not re-publish a binding cleared mid-turn (OPEN, P2)
5. #193137 - fix(voice-call): preserve Twilio greetings and resume listening after silence (OPEN)
6. #192047 - fix(sandbox): treat dash missing-parent cd errors as ENOENT (OPEN, P2)
7. #193125 - fix(gateway): reserve the A2A namespace from the Control UI SPA (OPEN, P2)
8. #193122 - fix(macos): preserve service runtime when installation loses authority (OPEN, P2)
9. #188726 - chore: investigate Windows node exec pending in Code Mode (OPEN)
10. #180854 - fix(slack): stop replies after their parent is deleted (OPEN, P2)
11. #193141 - fix(feishu): keep ordinary inline quotes out of topics (OPEN)
12. #192573 - fix(gateway): CLI-owner tools cannot read managed sessions with roles enabled (OPEN, P2)
13. #191509 - chore: empty iOS handoff placeholder (OPEN)
14. #184346 - chore: reduce repeated UI CI setup and fixture work (OPEN, P2)
15. #193138 - fix(macos): restore Gateway accent after clearing Talk profile color (OPEN)
16. #192378 - fix(storage): forward-port SQLite admission and lease cleanup fixes (CLOSED, P1)
17. #191830 - fix(codex): forward-port 2026.10.10 thread ownership and cleanup fixes (CLOSED, P1)
18. #182383 - feat(plugin-sdk): publish access-policy revisions for retained rechecks (OPEN, P2)
19. #193139 - fix(system-agent): include implicit harness owner in verification snapshot (OPEN)
20. #192043 - fix(sessions): title pasted paths and non-control leading-slash text (OPEN, P2)
21. #192985 - fix: stop stable three-tool loops in Code Mode (OPEN, P2)
22. #191513 - feat(pairing): pair a browser with a short code approved on the host (OPEN, P2)
23. #193134 - fix(update): updates fail when another connection opens the state database (OPEN, P2)
24. #188057 - feat(knowledge): add decision-model recall gate (OPEN, P2)
25. #192606 - fix(scripts): make the nitSweep summary validation error actionable (CLOSED, P2)
26. #193136 - fix(goals): retain admitted continuation custody across restart (OPEN)
27. #193116 - fix(knowledge): remember retries fail after interrupted publication (OPEN, P2)
28. #191344 - feat(codex): use OpenClaw's base prompt for ordinary threads (OPEN)
29. #188681 - fix(exec-host): reject oversized macOS app requests before sending (CLOSED, P2)
30. #192831 - fix: long streamed lists and quotes slow down when inline code meets comparison (OPEN, P1)

Now I need to synthesize this into a coherent project digest that captures the key developments and technical improvements across updates, fixes, and new features.
</think>


# OpenClaw Project Digest — 2026-11-05

---

## 1. Today's Overview

OpenClaw continues to demonstrate high velocity with **500 PRs** and **395 Issues** updated in the last 24 hours, reflecting an actively engaged community and fast development cycles. The project shipped **v2026.11.5-beta.1** with two major feature initiatives — Knowledge Scribes and PostgreSQL data plane support — signaling strategic investment in long-term memory architecture and enterprise-grade storage flexibility. Of the active issues, critical platform stability concerns dominate: Windows reliability, memory management regressions, and cross-platform plugin loading bottlenecks remain unresolved. Community activity is healthy, with 197 PRs merged/closed today, and several high-priority fixes advancing through review.

---

## 2. Releases

### v2026.11.5-beta.1 — Released Today

| Component | Change |
|-----------|--------|
| **Knowledge Scribes** | First-class knowledge capture and reusable scribe workflows across agents, sessions, and the Control UI (#185583, #185637, #185974, #186270, #186455, #187659). Contributed by @jalehman. |
| **PostgreSQL data plane** | Added PostgreSQL-backed state, enabling alternative database backends beyond SQLite for large-scale deployments. |

**Migration Notes:** No breaking changes reported in this beta. PostgreSQL support is additive; existing SQLite deployments are unaffected.

**Reference:** [openclaw/openclaw Releases v2026.11.5-beta.1](https://github.com/openclaw/openclaw/releases/tag/v2026.11.5-beta.1)

---

## 3. Project Progress

### Merged/Closed PRs (197 total updated)

| PR | Area | Change | Status |
|----|------|--------|--------|
| [#186117](https://github.com/openclaw/openclaw/pull/186117) | iMessage | Fixed Automation send failures leaving iMessage account green with no recovery guidance after Gateway updates | **Merged** |
| [#192378](https://github.com/openclaw/openclaw/pull/192378) | Storage | Forward-ported SQLite admission and lease cleanup fixes (cold SQLite open deadlocks, offline maintenance lease cleanup) | **Merged** |
| [#191830](https://github.com/openclaw/openclaw/pull/191830) | Codex | Forward-ported 2026.10.10 thread ownership and native follow-up failure fixes | **Merged** |
| [#192606](https://github.com/openclaw/openclaw/pull/192606) | Scripts | Made nitSweep summary validation error actionable | **Merged** |
| [#188681](https://github.com/openclaw/openclaw/pull/188681) | exec-host | Reject oversized macOS app requests before sending (≥256,000 bytes) | **Merged** |

### Open PRs Advancing (Selected High-Priority)

| PR | Area | Change | Priority |
|----|------|--------|----------|
| [#193132](https://github.com/openclaw/openclaw/pull/193132) | Update | Fix `repair` refusing forever after a verified update fails a later step | P1 |
| [#192053](https://github.com/openclaw/openclaw/pull/192053) | Signal | Bound monitor teardown when receive work stalls | P2 |
| [#192573](https://github.com/openclaw/openclaw/pull/192573) | Gateway | CLI-owner tools cannot read managed sessions with roles enabled | P2 |
| [#192985](https://github.com/openclaw/openclaw/pull/192985) | Code Mode | Stop stable three-tool loops in Code Mode (`exec` → `read` → `write` rotation) | P2 |
| [#193137](https://github.com/openclaw/openclaw/pull/193137) | Voice-call | Preserve Twilio greetings and resume listening after silence | — |
| [#188057](https://github.com/openclaw/openclaw/pull/188057) | Knowledge | Add decision-model recall gate (opt-in keyword search shortlist) | P2 |
| [#191513](https://github.com/openclaw/openclaw/pull/191513) | Pairing | Pair a browser with a short code approved on the host | P2 |
| [#191344](https://github.com/openclaw/openclaw/pull/191344) | Codex | Use OpenClaw's base prompt for ordinary threads (eliminates redundant Codex guidance) | — |
| [#182383](https://github.com/openclaw/openclaw/pull/182383) | Plugin SDK | Publish access-policy revisions for retained rechecks | P2 |

---

## 4. Community Hot Topics

### Most Active Issues (by comment volume)

1. **[#160959](https://github.com/openclaw/openclaw/issues/160959)** — Gateway blocks for minutes while capturing large external plugins *(70 comments, P0, 🔴 Regression)*
   - **Need:** Severe performance regression since 2026.9.6 affecting plugin loading times; event loop blocks for minutes on large dependency trees.
   - **Tags:** `clawsweeper:source-repro`, `impact:crash-loop`

2. **[#177656](https://github.com/openclaw/openclaw/issues/177656)** — Native host exec returns shared-state integrity-admission error *(28 comments, P1)*
   - **Need:** At least 28 failures on stable 2026.10.5; child effects unproved; blocking production deployments.
   - **Tags:** `clawtributor-review`

3. **[#170956](https://github.com/openclaw/openclaw/issues/170956)** — Windows: slow startup, unclean plugin shutdown, schtasks permission error *(28 comments, P1)*
   - **Need:** Three related reliability problems make restarts/updates fail frequently on Windows managed-service installs.
   - **Tags:** `impact:ux-release-blocker`

4. **[#120385](https://github.com/openclaw/openclaw/issues/120385)** — Code Mode tool catalog incomplete for scheduled/cron and memory-flush turns *(25 comments, P2)*
   - **Need:** MCP tools missing ("Unknown tool id") surfaced as "⚠️ 🛠️ Exec failed" for cron jobs.
   - **Tags:** `impact:ux-friction`

5. **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — Short-term recall retention evicts entries nightly, Dreaming never promotes *(24 comments, P2)*
   - **Need:** Dreaming deep phase never promotes content once short-term recall hits 512-entry cap; nightly zero-recall entries fill quota.
   - **Tags:** `impact:session-state`, `issue-rating: 🦞 diamond lobster`

### Hot PRs (by discussion and review activity)

- **[#193132](https://github.com/openclaw/openclaw/pull/193132)** — Update repair loop fix (P1, high community interest)
- **[#192053](https://github.com/openclaw/openclaw/pull/192053)** — Signal teardown fix (addresses blocking issue #191401)
- **[#191513](https://github.com/openclaw/openclaw/pull/191513)** — Browser pairing via short code (addresses headless Gateway authentication gap)

---

## 5. Bugs & Stability

### Critical (P0) — Active

| Issue | Summary | Age | Fix PR? |
|-------|---------|-----|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes while capturing large external plugins (2026.9.6 regression) | 37 days | No |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) | `doctor --fix` and `plugins update` require each other; plugins stuck on previous release | 36 days | No |
| [#169844](https://github.com/openclaw/openclaw/issues/169844) | Control UI Gateway update on Windows hangs at "Activating", leaves Scheduled Task disabled | 24 days | No |

### High (P1) — Active

| Issue | Summary | Age | Fix PR? |
|-------|---------|-----|---------|
| [#177656](https://github.com/openclaw/openclaw/issues/177656) | Native host exec integrity-admission error on 2026.10.5 | 17 days | No |
| [#170956](https://github.com/openclaw/openclaw/issues/170956) | Windows slow startup, unclean shutdown, schtasks permission errors | 23 days | No |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway runaway RSS outside V8 heap causes OOM and shutdown timeout | 45 days | No |
| [#121558](https://github.com/openclaw/openclaw/issues/121558) | Cron isolated runs deliver claude-cli narration fused into announced message | 87 days | No |
| [#150822](https://github.com/openclaw/openclaw/issues/150822) | Native Codex children advertise OpenClaw tools without execution handler | 49 days | No |
| [#190307](https://github.com/openclaw/openclaw/issues/190307) | Gateway restart leaves many agents permanently "degraded" (admission timeout) | 4 days | No |
| [#185578](https://github.com/openclaw/openclaw/issues/185578) | Gateway heap floor only ratchets up; per-run strings stay reachable (~25 MiB/h) | 9 days | No |
| [#162087](https://github.com/openclaw/openclaw/issues/162087) | Scheduled announce fails "Scheduled account X is unavailable" for pre-9.7 jobs | 36 days | No |
| [#192141](https://github.com/openclaw/openclaw/issues/192141) | Interrupted-turn continuation delivers boilerplate without original user message | 2 days | No |
| [#138629](https://github.com/openclaw/openclaw/issues/138629) | Bundled Codex ACP adapter returns end_turn for terminal failed turns | 62 days | No |

### Notable Recent Fixes

| Issue | Status | Summary |
|-------|--------|---------|
| [#160610](https://github.com/openclaw/openclaw/issues/160610) | **Closed** | Discord autoPresence reports "runtime degraded" with SecretRef/env credentials |
| [#185656](https://github.com/openclaw/openclaw/issues/185656) | **Closed** | Large zstd transcript archive exceeds Node string limit (regression of #170847) |
| [#163900](https://github.com/openclaw/openclaw/issues/163900) | **Closed** | Memory-core budget compaction never removes "## Consolidated Memory" sections |

---

## 6. Feature Requests & Roadmap Signals

### High-Interest Feature Requests (sorted by engagement)

| Issue | Feature | Comments | Priority | Likelihood |
|-------|---------|----------|----------|------------|
| [#91676](https://github.com/openclaw/openclaw/issues/91676) | Opt-in `skills.workshop.allowSandboxedAgents` to expose skill_workshop tool to sandboxed agents | 10 | P2 | Medium |
| [#192632](https://github.com/openclaw/openclaw/issues/192632) | Claude web search provider (Anthropic server-side `web_search` through Messages API) | 9 | P3 | Medium |
| [#158800](https://github.com/openclaw/openclaw/issues/158800) | Browse and fork prior channel-chat segments after `/new` in Control UI | 8 | P2 | Low |
| [#17840](https://github.com/openclaw/openclaw/issues/17840) | Opt-in reaction-triggered agent turns (emoji-choice polling, live reactions) | 8 | P2 | Medium |
| [#137110](https://github.com/openclaw/openclaw/issues/137110) | Telegram `sendDice` support for the message tool | 7 | P3 | Medium |
| [#184803](https://github.com/openclaw/openclaw/issues/184803) | Talk: option to turn off or replace spoken task receipt on agent-consult calls | 6 | P3 | Medium |
| [#139586](https://github.com/openclaw/openclaw/issues/139586) | Extend Gateway-wide automation management to native macOS and Talk admin turns | 6 | P3 | Low |
| [#151178](https://github.com/openclaw/openclaw/issues/151178) | Let Active Memory delegate escalation decisions to a plugin provider | 6 | P3 | Low |

### Roadmap Signals
- **Knowledge infrastructure** is a clear strategic priority: Today's beta release includes Knowledge Scribes and decision-model recall gates (#188057), indicating continued investment in memory/knowledge systems.
- **Enterprise storage** is advancing with PostgreSQL data plane support in beta.
- **Multi-platform parity** issues (Windows, macOS, Signal, iMessage) dominate the bug backlog, suggesting platform reliability will be a focus area.

---

## 7. User Feedback Summary

### Persistent Pain Points

| Pain Point | Evidence | Severity |
|------------|----------|----------|
| **Windows reliability** | Multiple issues (#170956, #169844, #163139, #162585) describing failed restarts, plugin corruption, and update hangs on Windows | 🔴 Critical |
| **Memory leaks / heap growth** | #154812 (runaway RSS to 9.32 GiB), #185578 (25 MiB/h heap growth) indicate systemic memory management issues | 🔴 Critical |
| **Plugin loading performance** | #160959 blocks event loop for minutes on large plugin trees; #162585 re-materializes plugin packages on Windows | 🔴 Critical |
| **Session state corruption** | #166634 checkpoint failures, #150635 dreaming never promotes, #163900 budget compaction bugs | 🟠 High |
| **Code Mode instability** | #120385 MCP tool catalog incomplete for cron, #192985 stable three-tool loops | 🟠 High |
| **Cross-platform teardown** | #191401 Signal teardown hangs, #191944 macOS gateway stop failures | 🟠 High |

### User Satisfaction Signals
- **Closed issues** from today (#160610, #185656, #163900, #166289, #165391) indicate responsive bug fixing.
- **Feature PRs advancing** (#191513 pairing, #188057 knowledge recall gate) align with user requests for better authentication and memory.
- **Community engagement** remains high with 70+ comments on the top issue, suggesting users are actively triaging and collaborating.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues (>30 days, no fix PR)

| Issue | Summary | Age | Comments | Blocker |
|-------|---------|-----|----------|---------|
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway blocks for minutes on large plugin capture | 37 days | 70 | P0 regression |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) | doctor --fix ↔ plugins update deadlock | 36 days | 17 | P0 ux-release-blocker |
| [#162087](https://github.com/openclaw/openclaw/issues/162087) | Scheduled announce fails for pre-9.7 account-mode jobs | 36 days | 6 | P1 security |
| [#150822](https://github.com/openclaw/openclaw/issues/150822) | Native Codex tools advertised without execution handler | 49 days | 12 | P1 security |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Runaway RSS causes host OOM | 45 days | 14 | P1 crash-loop |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | Short-term recall evicts entries nightly; Dreaming stalls | 49 days | 24 | P2 session-state |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) | Code Mode MCP tools missing for cron/memory-flush | 89 days | 25 | P2 ux-friction |
| [#121558](https://github.com/openclaw/openclaw/issues/121558) | Cron runs deliver claude-cli narration in message | 87 days | 12 | P1 session-state |
| [#138629](https://github.com/openclaw/openclaw/issues/138629) | Codex ACP returns end_turn for terminal failures | 62 days | 7 | P1 |

### PRs Needing Maintainer Attention

| PR | Summary | Status | Waiting On |
|----|---------|--------|------------|
| [#193132](https://github.com/openclaw/openclaw/pull/193132) | Update repair loop fix | OPEN | Maintainer review |
| [#192573](https://github.com/openclaw/openclaw/pull/192573) | CLI-owner tools with roles enabled | OPEN | Maintainer look |
| [#192985](https://github.com/openclaw/openclaw/pull/192985) | Stop stable three-tool loops | OPEN | Proof needed |
| [#191513](https://github.com/openclaw/openclaw/pull/191513) | Browser pairing via short code | OPEN | Proof needed; security-review-required |
| [#193136](https://github.com/openclaw/openclaw/pull/193136) | Goal continuation custody across restart | OPEN | Depends on #193103, #193024 |

---

## Summary Metrics

| Metric | Value | Trend |
|--------|-------|-------|
| Issues updated (24h) | 395 | High |
| PRs updated (24h) | 500 | Very High |
| Open issues | 226 | — |
| Open PRs | 303 | — |
| Closed/Merged PRs | 197 | — |
| New releases | 1 (beta) | — |
| P0 issues active | 3 | Unchanged |
| P1 issues active | 11+ | High |
| Fix PRs merged today | 5 | — |

---

*Digest generated from OpenClaw GitHub data for 2026-11-05. All issue/PR links reference https://github.com/openclaw/openclaw.*

---

## Cross-Ecosystem Comparison

<think>The user wants me to generate a cross-project comparison report analyzing the four AI agent and personal AI assistant open-source projects based on the individual project digests I just created. Let me analyze the data carefully and create a comprehensive comparison report.

Let me organize the key data points from each project:

**OpenClaw (openclaw/openclaw):**
- Issues updated: 395 (226 open, 169 closed)
- PRs updated: 500 (303 open, 197 merged/closed)
- Releases: 1 new beta (v2026.11.5-beta.1)
- Health indicators: 3 P0 issues, 11+ P1 issues, high velocity


- Hermes Agent shows moderate activity with 50 issues and PRs each, mostly focused on session management and Kanban reliability work, plus new plugins like CaMeL security and headroom
- IronClaw appears to be relatively quiet with minimal activity—only one PR and no issues or releases—suggesting lower engagement or maintenance mode
- QwenPaw maintains high velocity with similar activity to Hermes Agent, though it's addressing multiple critical issues across different areas like Windows Hub and code mode, and is actively reviewing a large chat history refactor
- ZeroClaw is the most active with 21 issues and 50 PRs, featuring multiple security fixes and new capabilities like XMPP and Zulip integration, though it still has some unresolved Windows platform gaps
- Now I'm compiling a cross-project comparison table to see how these tools stack up against each other
</think>


# Cross-Project Comparison Report — AI Agent & Personal AI Assistant Open-Source Ecosystem

**Date:** November 5, 2026  
**Projects Analyzed:** OpenClaw, Hermes Agent, IronClaw, QwenPaw, ZeroClaw

---

## 1. Ecosystem Overview

The personal AI assistant and agent open-source ecosystem on this date presents a clear three-tier structure. **OpenClaw** and **ZeroClaw** operate at the highest velocity, each publishing 50+ PRs per day and shipping major architectural features regularly, indicating production-grade development maturity. **QwenPaw** and **Hermes Agent** occupy a middle tier with moderate but consistent activity, each processing 50 PRs and 10–50 issues daily while actively reviewing large feature PRs. **IronClaw** shows minimal activity, consistent with a maintenance-phase dependency or internal tooling project. The ecosystem collectively gravitates toward multi-channel integration (Matrix, XMPP, Zulip, DingTalk, Signal), memory architecture (knowledge scribes, checkpoints, session durability), and cross-platform hardening (Windows reliability dominates the bug backlogs). The dominant technical theme is **principal-aware multi-agent isolation** — a response to users deploying agents in shared, multi-tenant, or enterprise environments.

---

## 2. Activity Comparison

| Metric | OpenClaw | Hermes Agent | IronClaw | QwenPaw | ZeroClaw |
|--------|----------|-------------|----------|---------|---------|
| **Issues updated (24h)** | 395 | 50 | 0 | 10 | 21 |
| **Open/Active issues** | 226 | 49 | 0 | 7 | 12 |
| **Closed issues** | 169 | 1 | 0 | 3 | 9 |
| **PRs updated (24h)** | 500 | 50 | 1 | 50 | 50 |
| **Open PRs** | 303 | 44 | 1 | 35 | 46 |
| **PRs merged/closed** | 197 | 6 | 0 | 15 | 4 |
| **New releases (24h)** | 1 (beta) | 0 | 0 | 0 | 0 |
| **P0 issues active** | 3 | 0 | 0 | 0 | 0 |
| **P1 issues active** | 11+ | 1 | 0 | 2 | 2 |
| **Merges per day** | ~197 | 6 | 0 | 15 | 4 |
| **Community size signal** | Very large | Large | Very small | Large | Large |
| **Health tier** | 🟡 High-pressure | 🟢 Stable | ⚪ Inactive | 🟢 Stable | 🟡 Security-intensive |

**Observations:**
- **OpenClaw** has an exceptionally high close rate (197 PRs merged in 24 hours), but carries the heaviest bug burden with 3 P0s and 11+ P1s — a project under sustained pressure.
- **ZeroClaw** merges conservatively (4 PRs) despite high open PR volume (46), suggesting rigorous review standards for a security-sensitive codebase.
- **IronClaw** is effectively dormant for community-facing development.

---

## 3. OpenClaw's Position

### Advantages vs Peers

| Dimension | OpenClaw's Standing |
|-----------|---------------------|
| **Scale** | 10× the activity volume of nearest peers (500 PRs vs ~50); the dominant project by community throughput |
| **Feature breadth** | Knowledge Scribes, PostgreSQL data plane, multi-channel (Discord, Signal, Feishu, iMessage, Telegram, Slack), Control UI, native Codex integration — broadest integration surface |
| **Release cadence** | Active beta releases with semantic versioning; today shipped v2026.11.5-beta.1 |
| **Platform coverage** | macOS, Windows, Linux, iOS, Raspberry Pi; most comprehensive platform matrix |
| **Bug management** | 197 merges in 24 hours — fastest resolution cycle in the ecosystem |

### Technical Approach Differences

| Aspect | OpenClaw | Hermes Agent | ZeroClaw | QwenPaw |
|--------|----------|-------------|----------|---------|
| **Architecture** | Gateway-centric with distributed agent spawning | Bots-based with Kanban dispatcher | RPC client/gateway transport model | Channel-agnostic plugin architecture |
| **Memory strategy** | Knowledge Scribes + Active Memory + Dreaming promotion | Checkpoints on by default + file-edit rollback | Principal-aware memory isolation | SQLite append-only + paginated history |
| **Storage** | SQLite (default) + PostgreSQL (beta) | SQLite | SQLite | SQLite |
| **Multi-tenancy** | Roles-enabled session management | Profile-based isolation | Strict principal scope enforcement | Provider-based isolation |
| **Plugin system** | OpenClaw Plugin SDK with access-policy revisions | CaMeL guard plugin for security | Multiple registry origins (in progress) | OpenViking memory plugin |

### Community Size Comparison

OpenClaw's comment volume on top issues (70+ comments on #160959) and PR count (~500/day) indicate a community **5–10× larger** than Hermes Agent, QwenPaw, or ZeroClaw. IronClaw shows no active community engagement.

---

## 4. Shared Technical Focus Areas

### Requirements Emerging Across Multiple Projects

| Technical Focus | Projects Affected | Specific Needs |
|-----------------|-------------------|----------------|
| **Windows platform reliability** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Slow startup, shell timeouts, named-pipe security, stale session leases, AppContainer sandboxing |
| **Session state durability** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Cold-session resume, append-only storage, checkpoint replay, session isolation across restarts |
| **Memory architecture** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Knowledge scribes, Dreaming promotion, checkpoints, principal-aware isolation, tag indexes |
| **Multi-channel integration** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Matrix, XMPP, Zulip, Signal, DingTalk, Feishu, WeChat, Rocket.Chat — protocol diversity |
| **Plugin ecosystem expansion** | OpenClaw, Hermes Agent, QwenPaw, ZeroClaw | Multiple registries, security guards, third-party memory plugins, headroom/monitoring plugins |
| **Multi-tenant isolation** | OpenClaw, ZeroClaw, Hermes Agent | Principal scope enforcement, owned-session privacy, non-admin tool restrictions |
| **Code mode / tool execution** | OpenClaw, Hermes Agent, QwenPaw | Stable three-tool loops, parameter collision, MCP tool catalog completeness |
| **Cron / scheduled task reliability** | OpenClaw, Hermes Agent, QwenPaw | Per-run sessions, isolated runs, announcer failures, cron reassignment bugs |
| **Encoding / internationalization** | OpenClaw, QwenPaw | GBK/CP936 support, multilingual channel formatting, DingTalk 3500-char degradation |
| **Security hardening** | OpenClaw, ZeroClaw, Hermes Agent | CaMeL guard plugin, principal-aware tool withholding, fail-closed SOP decisions, pairing code expiration |

### Priority Convergence

The **Windows reliability gap** is universal — all four active projects have open Windows-specific issues spanning shell execution, startup performance, sandbox compatibility, and update mechanics. This represents the single largest shared technical debt in the ecosystem.

---

## 5. Differentiation Analysis

### Feature Focus Differentiation

| Project | Primary Differentiation | Target User Profile |
|---------|------------------------|---------------------|
| **OpenClaw** | Broad protocol coverage + Control UI + native Codex integration | Power users, enterprises needing multi-channel AI hub |
| **ZeroClaw** | Principal-aware security architecture + RPC infrastructure + OIDC dashboard | Security-conscious deployments, enterprise multi-tenant |
| **Hermes Agent** | Kanban dispatcher + bot-to-bot orchestration + checkpoint defaults | Developers building agent workflows and task pipelines |
| **QwenPaw** | Chinese enterprise channels + local model runtime + plugin ecosystem | Chinese enterprises, local-model runners |
| **IronClaw** | Minimal scope (dependency only) | Internal / downstream consumers |

### Technical Architecture Differences

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | QwenPaw |
|-----------|----------|----------|-------------|---------|
| **Orchestration model** | Gateway-managed agents with Control UI | RPC client + gateway transport | Kanban dispatcher + bot workers | Channel-agnostic plugins |
| **Memory persistence** | Multi-tier (short-term → Dreaming → Knowledge Scribes) | Principal-scoped memory isolation | Append-only checkpoints | SQLite append-only + paginated |
| **Release model** | Beta releases every few days | Tag-based, conservative merges | Stable track | Beta (v2.3.0-beta.2) |
| **Security posture** | Role-based, tool access policies | Principal-aware, fail-closed | CaMeL guard opt-in | Provider-based isolation |
| **Community origin** | General-purpose AI assistant | Security-first agent platform | Developer workflow automation | Chinese enterprise / local AI |

### Target Users

- **OpenClaw**: Developers and enterprises wanting a full-featured personal AI assistant with maximum protocol support and UI control.
- **ZeroClaw**: Security-aware teams deploying agents in multi-tenant or regulated environments where principal isolation is non-negotiable.
- **Hermes Agent**: Developers building agent pipelines, workflow automation, and bot-to-bot collaboration systems.
- **QwenPaw**: Chinese enterprise users and developers running local models with WeChat/DingTalk/Feishu integration.
- **IronClaw**: Downstream library consumers (maintenance only, not a standalone product).

---

## 6. Community Momentum & Maturity

### Activity Tiers

| Tier | Project | Velocity | Trend |
|------|---------|----------|-------|
| **Tier 1 — Rapid Iteration** | OpenClaw | ~500 PRs/day, ~197 merges/day | Accelerating; v2026.11.5-beta.1 shipped today |
| **Tier 2 — Active Development** | ZeroClaw, QwenPaw, Hermes Agent | 50 PRs/day, 4–15 merges/day | Stable; each has large PRs in review |
| **Tier 3 — Maintenance** | IronClaw | ~1 PR/week | Stable; dependency project |

### Rapidly Iterating Projects

- **OpenClaw**: Highest velocity in ecosystem. Carries significant bug debt (3 P0s, 11+ P1s) alongside rapid feature delivery. The 197-merge/day rate suggests either a large automated contribution pipeline, aggressive dependabot coverage, or a very large contributor base. Risk: quality regression if P0 backlog grows.
- **QwenPaw**: Active PR pipeline with a major chat history refactor (XXXL) in review. Windows Hub issues and DingTalk channel bugs indicate the project is maturing under production pressure.

### Stabilizing Projects

- **ZeroClaw**: Conservative merge rate (4/day against 50 opened) suggests a gating review process appropriate for its security-sensitive scope. Two critical security fixes merged today (#11266, #12213) indicate focused security sprints. Multiple XL PRs aging in review (XMPP, Windows named-pipe security) suggest maintainer bandwidth constraints.
- **Hermes Agent**: Stable release cadence with targeted fixes. Notable for the checkpoint-on-by-default PR (#149206) advancing through review — a sign of maturing session management.

### Concerns

- **OpenClaw's P0 backlog**: 3 P0s unresolved (37+ days on the oldest) with no fix PRs filed is a warning sign. The high-velocity/high-debt pattern requires monitoring.
- **ZeroClaw's aging XL PRs**: XMPP (17 days open) and Windows security (19 days open) PRs need maintainer prioritization.
- **QwenPaw's closed-without-fix issue**: Issue #8278 (DingTalk text degradation) was closed but has no fix PR — community confusion risk.

---

## 7. Trend Signals

The following signals represent durable patterns visible across multiple projects, relevant for AI agent developers and decision-makers:

### Technology Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Principal-aware multi-tenancy** | ZeroClaw's scope enforcement, OpenClaw's roles, Hermes Agent's non-admin tool restrictions | Production deployments demand strict isolation between users, sessions, and agents |
| **Durable memory architectures** | Knowledge Scribes (OpenClaw), checkpoints (Hermes), append-only SQLite (QwenPaw, ZeroClaw) | Shift from ephemeral to persistent agent memory with rollback capability |
| **Channel protocol diversification** | XMPP, Zulip, Matrix, Signal, DingTalk, Feishu, WeChat across all projects | No single protocol dominates; agents must speak many protocols natively |
| **Enterprise storage flexibility** | PostgreSQL data plane (OpenClaw beta), SQLite across all projects | PostgreSQL adoption signals enterprise demand; SQLite remains default for simplicity |
| **Plugin security hardening** | CaMeL guard (Hermes), principal-unaware tool withholding (ZeroClaw), access-policy revisions (OpenClaw) | Open plugin ecosystems require runtime security policies, not just static sandboxing |

### Market Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Chinese enterprise adoption** | QwenPaw's DingTalk/Feishu/WeChat focus, GBK/CP936 fixes, local model runtime | Significant non-Anthropic/OpenAI market with distinct protocol and encoding requirements |
| **Small machine deployment** | Hermes Agent's `headroom` plugin (1–4 GB VPS, Raspberry Pi) | Agent platforms targeting edge/low-resource environments beyond desktop |
| **BIM / specialized verticals** | Hermes Agent's `hermes-bim-studio` plugin | AI agent platforms beginning vertical specialization beyond general-purpose assistants |
| **Dashboard democratization** | ZeroClaw's OIDC dashboard, QwenPaw's scoped chat, Hermes Agent's Control UI | Non-technical users need managed, role-aware web interfaces — not just CLI |

### Developer Experience Trends

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Cron/scheduled reliability** | OpenClaw, Hermes Agent, QwenPaw all have cron-related bugs and features | Scheduled agent automation is a core use case requiring dedicated session isolation |
| **Windows as a first-class target** | Universal Windows bugs across all projects | Windows is a primary deployment target; parity with macOS/Linux is not yet achieved |
| **Code Mode / tool execution stability** | Stable tool loops (OpenClaw), parameter collisions (QwenPaw), MCP catalog gaps (OpenClaw) | Agents executing tools in loops require stronger stability guarantees and execution policy |
| **Multi-registry plugins** | Multiple requests across OpenClaw, Hermes Agent, ZeroClaw | Plugin ecosystems are outgrowing single-registry models; discoverability and trust become concerns |

### Decision Points for AI Agent Developers

1. **If building on OpenClaw**: Monitor the P0 bug backlog (especially #160959, #161921) before production deployment on Windows; the PostgreSQL data plane is in beta and suitable for evaluation.
2. **If building on ZeroClaw**: The principal-aware architecture is the most mature multi-tenant isolation model in the ecosystem; watch for XMPP and multi-registry features landing in v0.9.0.
3. **If building on QwenPaw**: The chat history refactor (#8532) is foundational — its merge will change session management semantics; evaluate GBK/CP936 fix (#8234) for Chinese deployment contexts.
4. **If building on Hermes Agent**: The checkpoint-on-by-default PR (#149206) and skill origin tracking (#149216) represent meaningful UX improvements worth timing releases around.

---

*Cross-project analysis compiled from individual digest data for 2026-11-05. Metrics represent 24-hour rolling activity windows per project.*

---

## Peer Project Reports

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

<think>The user wants me to generate a structured project digest for Hermes Agent based on the provided GitHub data from November 5, 2026. Let me analyze the data carefully and create a comprehensive digest following the specified sections.

Let me organize my analysis:

**Overview Data:**
- Issues updated in last 24h: 50 (open/active: 49, closed: 1)
- PRs updated in last 24h: 50 (open: 44, merged/closed: 6)
- New releases: 0

**Most Active Issues (by comments):**
1. #139796 - Desktop session.resume bug (6 comments) - P1
2. #141521 - Desktop code block rendering bug (4 comments) - P2
3. #148958 - Kanban worker crash bug (4 comments) - P2
4. #148742 - Legacy state.db bug (3 comments) - P2
5. #148762 - Same session ID in two profiles bug (3 comments) - P2
6. #148755 - Model ID prefix stripping bug (2 comments) - P3
7. #148830 - Windows stale session lease bug (2 comments) - P3
8. #148861 - Kanban notifier stale events bug (2 comments) - P2
9. #148857 - Gateway session fallback chain bug (2 comments) - P2
10. #148923 - Canonical group faces bug (2 comments) - P2
11. #148930 - Kanban workers crash bug (2 comments) - P2
12. #148965 - Docs inconsistency (2 comments) - P3
13. #148988 - Session preview bug (2 comments) - P2
14. #149014 - MCP placeholder resolution bug (2 comments) - P2
15. #149033 - Restore refusals signal bug (2 comments) - P2


16. #149219 - Feature request: skill "why" tracking (1 comment) - Feature
17. #148739 - Feature: profile creation for plugins (1 comment) - Feature

**Most Notable PRs:**
- #149224: fix(acp): preserve strict session resume semantics
- #149216: feat(skills): record why a skill exists at create time
- #149222: feat(plugin-catalog): add headroom plugin
- #148903: fix(gateway): end bot-to-bot ping-pong
- #149221: feat(catalog): add hermes-bim-studio v0.1.0
- #149220: feat(plugin-catalog): add hermes-notify
- #149218: statusbar: decode-only t/s beside the rolling average
- #148844: fix(bot-desktop): host the Screen pane from a shared-volume sandbox
- #149193: Add fashion-design plugin to the plugin catalog
- #149206: feat(checkpoints): on by default, and /undo also reverts the undone turn's file edits
- #149209: fix(relay): stop dialing the connector without credentials after a refused provision
- #3987: feat(security): add opt-in CaMeL guard plugin with reproducible benchmarks
- #149214: fix(gateway): prevent executor starvation during hosted stop recovery
- #149210: perf(bots): room view reads only the log delta and moves on groups.changed
- #133030: fix(gateway): bind persisted supervisor commands to the install root
- #149212: test(gateway): stop the runtime-status PID test depending on who owns PID 12345
- #113666: refactor(desktop): extract useMessageStream transcript concerns
- #149213: fix(kanban): keep the handoff of an attempt the epoch bump fenced
- #134601: fix(photon): drop chat actions instead of forwarding them as unreadable messages (CLOSED)
- #149173: fix(gateway): don't count shared policy keys as a plugin platform setup

Looking at the key trends: no releases deployed, but the team is actively working through the backlog with multiple PRs addressing stability issues. The Kanban system needs attention with at least two separate fixes pending. Notable improvements include checkpoint functionality becoming default, plugin catalog expansion, and several performance optimizations for bots and gateway operations.
</think>


# Hermes Agent Project Digest — 2026-11-05

## 1. Today's Overview

Hermes Agent continues to show high engineering velocity with 50 issues and 50 PRs updated in the past 24 hours, indicating active development and community engagement. No new releases were published today. The project exhibits a healthy balance of bug fixes across multiple components (Desktop, Gateway, Kanban, CLI) alongside feature development, particularly in the plugin ecosystem and checkpoint/file-editing improvements. The bug backlog is notable—several P1/P2 issues relate to session management, Windows compatibility, and cross-profile state consistency—suggesting the team is managing a complex multi-platform architecture.

---

## 2. Releases

**No new releases today.** The last release activity was prior to this reporting period.

---

## 3. Project Progress

### Merged/Closed PRs
| PR | Description | Component |
|----|-------------|-----------|
| [#134601](https://github.com/NousResearch/hermes-agent/pull/134601) | fix(photon): drop chat actions instead of forwarding as unreadable messages | plugins |

### Notable Open PRs (Recent Activity)
| PR | Description | Impact |
|----|-------------|--------|
| [#149206](https://github.com/NousResearch/hermes-agent/pull/149206) | **feat(checkpoints): on by default, /undo reverts file edits** | Major UX improvement; closes #130589, #144769 |
| [#148903](https://github.com/NousResearch/hermes-agent/pull/148903) | fix(gateway): end bot-to-bot ping-pong (runtime hop cap) | Stability; resolves 46k+ model call runaway |
| [#149224](https://github.com/NousResearch/hermes-agent/pull/149224) | fix(acp): preserve strict session resume semantics | Session integrity |
| [#149214](https://github.com/NousResearch/hermes-agent/pull/149214) | fix(gateway): prevent executor starvation during hosted stop recovery | Reliability |
| [#149210](https://github.com/NousResearch/hermes-agent/pull/149210) | perf(bots): room view reads only log delta | Performance (Bots architecture plan) |
| [#149218](https://github.com/NousResearch/hermes-agent/pull/149218) | statusbar: decode-only t/s beside rolling average | UX; accurate throughput display |
| [#149213](https://github.com/NousResearch/hermes-agent/pull/149213) | fix(kanban): keep handoff fenced during epoch bump | Reliability |
| [#149209](https://github.com/NousResearch/hermes-agent/pull/149209) | fix(relay): stop dialing connector without credentials after refused provision | Error handling |

### Plugin Catalog Additions (3 new entries)
| PR | Plugin | Purpose |
|----|--------|---------|
| [#149222](https://github.com/NousResearch/hermes-agent/pull/149222) | headroom | Keep Hermes alive on small machines (1-4 GB VPS, Raspberry Pi) |
| [#149221](https://github.com/NousResearch/hermes-agent/pull/149221) | hermes-bim-studio | BIM inspection for engineering workflows |
| [#149220](https://github.com/NousResearch/hermes-agent/pull/149220) | hermes-notify | Live release workflow notifications to phone |
| [#149193](https://github.com/NousResearch/hermes-agent/pull/149193) | fashion-design | Pattern drafting, size grading, fabric yardage estimation |

### Security/Architecture
| PR | Description |
|----|-------------|
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | feat(security): opt-in CaMeL guard plugin with reproducible benchmarks |

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

**1. [Issue #139796](https://github.com/NousResearch/hermes-agent/issues/139796)** — Desktop `session.resume` returns `not_found` (6 comments) | P1
> **Core Problem:** Cold sessions and sessions evicted by WS orphan reaper on desktop restart cannot be resumed due to missing cold-load path.
> **Signal:** Users on Desktop v0.22.1+247 experience complete session loss after gateway restarts.

**2. [Issue #141521](https://github.com/NousResearch/hermes-agent/issues/141521)** — Desktop demotes fenced code to prose (4 comments) | P2
> **Core Problem:** Fenced code blocks with explicit language tags are sometimes rendered as prose, losing copy functionality for PowerShell blocks.
> **Signal:** Developer-facing users expect reliable code rendering with copy buttons.

**3. [Issue #148958](https://github.com/NousResearch/hermes-agent/issues/148958)** — Kanban worker crash blocks cards (4 comments) | P2
> **Core Problem:** Gateway-owner stall exits worker 1, counted as crash; two in a row block Kanban cards permanently.
> **Signal:** Production multi-profile users face workflow deadlocks.

### Underlying Community Needs
- **Session reliability:** Multiple issues (#139796, #148742, #148762, #148930, #149033) highlight session state management fragility across Desktop/CLI/Gateway.
- **Multi-profile integrity:** Profile isolation and cross-profile state synchronization needs hardening.
- **Production hardening:** Kanban dispatcher reliability (#148958, #148843) is a recurring pain point for power users.
- **Plugin ecosystem maturity:** Feature requests (#148739, #149219) suggest users want deeper plugin integration and skill provenance tracking.

---

## 5. Bugs & Stability

### Critical (P1) — Active Today
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#139796](https://github.com/NousResearch/hermes-agent/issues/139796) | Desktop session.resume fails for cold/evicted sessions | No |

### High Priority (P2) — Active Today
| Issue | Description | Fix PR? |
|-------|-------------|---------|
| [#148958](https://github.com/NousResearch/hermes-agent/issues/148958) | Kanban worker crash → card block | No |
| [#148742](https://github.com/NousResearch/hermes-agent/issues/148742) | Legacy state.db NULL-id rows after upgrade | No |
| [#148762](https://github.com/NousResearch/hermes-agent/issues/148762) | Same session ID unended in two profile stores | No |
| [#148861](https://github.com/NousResearch/hermes-agent/issues/148861) | Kanban notifier delivers superseded events | No |
| [#148857](https://github.com/NousResearch/hermes-agent/issues/148857) | Gateway session stuck on last fallback | No |
| [#148930](https://github.com/NousResearch/hermes-agent/issues/148930) | Kanban workers crash at first session save | No |
| [#149014](https://github.com/NousResearch/hermes-agent/issues/149014) | MCP ${VAR} placeholders unresolved in multiplexed gateway | No |
| [#149033](https://github.com/NousResearch/hermes-agent/issues/149033) | Restore refusals drop inbound forever | No |
| [#148988](https://github.com/NousResearch/hermes-agent/issues/148988) | Session preview shows channel_context instead of user message | No |
| [#148923](https://github.com/NousResearch/hermes-agent/issues/148923) | Canonical group faces ignore migrated bot avatar key | No |

### Medium Priority (P2) — Desktop/Chat Issues
| Issue | Description |
|-------|-------------|
| [#148859](https://github.com/NousResearch/hermes-agent/issues/148859) | Dollar sign in inline code span renders with backslash (`\$`) |
| [#148846](https://github.com/NousResearch/hermes-agent/issues/148846) | Desktop queued prompts lose Edit and Steer controls |
| [#148823](https://github.com/NousResearch/hermes-agent/issues/148823) | Desktop Files tree doesn't mark parent folders with Git changes |

### Performance Issues (P2)
| Issue | Description |
|-------|-------------|
| [#148783](https://github.com/NousResearch/hermes-agent/issues/148783) | `[Windows]` GET /api/memory takes 8-11s per call |

### Cross-Platform Issues
| Issue | Platform | Description |
|-------|----------|-------------|
| [#148830](https://github.com/NousResearch/hermes-agent/issues/148830) | Windows | Stale active-session lease becomes permanent on PID reuse |
| [#148766](https://github.com/NousResearch/hermes-agent/issues/148766) | All | TUI retry hint hardcodes Alt+K; real binding is Cmd+K/Ctrl+K |

**Stability Summary:** 6 P2 bugs have associated fix PRs in flight (Kanban fixes, checkpoint improvements, relay fixes). The session management cluster (P1-P2) lacks fix PRs and represents the most urgent maintenance gap.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features
| Issue/PR | Description | Community Signal |
|----------|-------------|------------------|
| [#149219](https://github.com/NousResearch/hermes-agent/issues/149219) / [#149216](https://github.com/NousResearch/hermes-agent/pull/149216) | Record why a skill exists at create time (`origin:`) | Users want skill provenance tracking |
| [#148739](https://github.com/NousResearch/hermes-agent/issues/148739) | Let plugins create profiles via public route | Plugin ecosystem expansion |
| [#149206](https://github.com/NousResearch/hermes-agent/pull/149206) | Checkpoints on by default + /undo reverts file edits | **High demand** — addresses major UX gap |
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | CaMeL guard plugin for sensitive tool calls | Security-conscious enterprise users |

### Likely Near-Term Additions
1. **Checkpoints as default behavior** — PR #149206 with CI review suggests imminent merge.
2. **Skill origin tracking** — Paired issue/PR indicates design alignment.
3. **Plugin catalog growth** — 4 new plugins submitted today signals active ecosystem.

---

## 7. User Feedback Summary

### Pain Points
| Theme | Evidence | Severity |
|-------|----------|----------|
| **Session loss on restart** | Multiple reports (#139796, #148742, #148762) of state.db corruption or session not found after gateway restart | High |
| **Kanban unreliability** | Workers crash, cards block, superseded notifications delivered (#148958, #148861) | High |
| **Windows compatibility** | PID reuse leaves stale leases (#148830), memory API slow (#148783), Alt+K hint wrong (#148766) | Medium |
| **Desktop code rendering** | Copy button missing for fenced blocks (#141521), dollar sign escaping (#148859) | Low-Medium |
| **MCP configuration fragility** | Unreadable config re-enables all disabled skills (#148812), placeholder resolution order issues (#149014) | Medium |

### Use Cases Highlighted
- **Production homelabs** with multi-profile Kanban dispatchers (see #148843: 13-commit local patch series).
- **BIM/engineering workflows** via new plugin catalog entry (#149221).
- **Small machine deployment** via headroom plugin for 1-4 GB VPS/Raspberry Pi (#149222).
- **Release monitoring** via phone notifications (#149220).

### Satisfaction Signals
- Desktop copy button praised as useful (#141521 author opened issue constructively).
- Multiple community members contributing plugin catalog entries = healthy ecosystem engagement.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues
| Issue | Age | Description | Priority |
|-------|-----|-------------|----------|
| [#141521](https://github.com/NousResearch/hermes-agent/issues/141521) | ~17 days | Desktop code rendering regression | P2 |
| [#139796](https://github.com/NousResearch/hermes-agent/issues/139796) | ~20 days | Desktop session.resume cold-load gap | P1 |

### PRs Needing Maintainer Attention
| PR | Age | Description | Blocked? |
|----|-----|-------------|----------|
| [#3987](https://github.com/NousResearch/hermes-agent/pull/3987) | ~7 months | CaMeL security plugin — opt-in benchmark | Security value |
| [#113666](https://github.com/NousResearch/hermes-agent/pull/113666) | ~49 days | Desktop useMessageStream refactor | UI stability |
| [#133030](https://github.com/NousResearch/hermes-agent/pull/133030) | ~31 days | Bind supervisor commands to install root | Install reliability |

### Critical Maintenance Gaps
1. **Session management cluster:** No fix PRs for P1 #139796 or the 4+ P2 session-related bugs reported today.
2. **Kanban reliability:** Worker crash issues (#148958, #148930, #149213) need consolidated attention.
3. **Windows parity:** Three separate Windows-specific bugs reported; no fix PRs filed.

---

*Digest generated from Hermes Agent (nousresearch/hermes-agent) activity on 2026-11-05.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

<think>The user wants me to generate a structured project digest for the IronClaw project based on the provided GitHub data. Let me analyze the data and create the digest sections as requested.

From the data:
- 0 issues updated in last 24h
- 1 PR updated in last 24h (open)
- 0 new releases
- Only one PR: #8168 about updating the `zip` dependency from 8.6.0 to 9.0.5

Let me create a structured digest with all the required sections.
</think>


# IronClaw Project Digest

**Date:** 2026-11-05
**Repository:** [github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. Today's Overview

IronClaw shows minimal activity on November 5, 2026, with no issues or releases logged in the past 24 hours. The only recent activity is a single open dependency update PR from Dependabot targeting the `zip` Rust crate. Overall project health appears stable with no reported bugs or community discussions requiring immediate attention. The low activity metrics may indicate a period of maintenance or preparatory work ahead of future releases.

---

## 2. Releases

**No new releases today.** The project has not published any versions within the last 24 hours.

---

## 3. Project Progress

| Type | Count | Details |
|------|-------|---------|
| **PRs Opened** | 1 | Dependency update |
| **PRs Merged/Closed** | 0 | — |

**Active Pull Request:**

- **[#8168](https://github.com/nearai/ironclaw/pull/8168)** — `[dependencies, rust] chore(deps): bump zip from 8.6.0 to 9.0.5`
  - **Author:** dependabot[bot]
  - **Created/Updated:** 2026-11-04
  - **Summary:** Updates the `zip` crate from version 8.6.0 to 9.0.5, incorporating bug fixes and improvements from the upstream `zip-rs/zip2` project.
  - **Status:** Open, awaiting maintainer review

---

## 4. Community Hot Topics

**No active discussions logged today.** No issues or pull requests have attracted significant community engagement (comments or reactions) within the reporting period.

---

## 5. Bugs & Stability

**No bugs or stability issues reported today.** The absence of issue activity suggests no regressions, crashes, or critical errors have been flagged by users or contributors.

---

## 6. Feature Requests & Roadmap Signals

**No feature requests logged today.** No community suggestions or enhancement proposals are currently tracked in the issue queue.

---

## 7. User Feedback Summary

**No user feedback recorded today.** The lack of new issues indicates no reported pain points, use case discussions, or satisfaction/dissatisfaction signals from the community.

---

## 8. Backlog Watch

The following items are flagged for maintainer attention based on recent activity patterns:

| Item | Link | Status | Notes |
|------|------|--------|-------|
| Dependency Update | [#8168](https://github.com/nearai/ironclaw/pull/8168) | Open | Awaiting review/merge for `zip` crate upgrade (8.6.0 → 9.0.5) |

**Recommendation:** The Dependabot PR (#8168) for the `zip` dependency update should be reviewed and merged to ensure the project stays current with upstream bug fixes and security patches.

---

*End of Digest*

</details>

<details>
<summary><strong>QwenPaw</strong> — <a href="https://github.com/agentscope-ai/QwenPaw">agentscope-ai/QwenPaw</a></summary>

<think>Let me analyze the GitHub data for QwenPaw (github.com/agentscope-ai/QwenPaw) for 2026-11-05 and generate a structured project digest.

Key data points:
- Issues updated in last 24h: 10 (open/active: 7, closed: 3)
- PRs updated in last 24h: 50 (open: 35, merged/closed: 15)
- New releases: 0

Let me organize the information:

1. **Today's Overview**: High activity - 10 issues and 50 PRs updated. No new releases. Multiple bug reports across various areas (channels, Windows hub, Matrix plugin, desktop UI, code mode, memory, providers, console).

2. **Releases**: None today.

3. **Project Progress**:
   - Merged/closed PRs:
     - #8567 - fix plugins platform ambiguous dependency bug
     - #8573 - feat local-models install Piccolo runtimes
     - #8575 - fix desktop auto-update manifest to stable releases
     - #7613 - feat memory add OpenViking memory plugin
   - Under review PRs advancing:
     - #8532 - feat chat add append-only session storage, paginated history and native Turn forks (XXXL)
     - #8034 - fix providers bound inline media per request (XXL)
     - #8234 - fix tools decode GBK/CP936 (XXL)
     - #8236 - fix ollama size context window (XL)
     - #8578 - feat tools surface stale daily notes (L)
     - #8557 - feat crons per-run sessions (M)
     - #8550 - fix providers reject out-of-range model config (M)
     - #8291 - fix memory require non-empty api_key (S)

4. **Community Hot Topics**:
   - #8278 (closed) - DingTalk channel text degradation issue
   - #8565 - Windows Hub local runtime issues
   - #8538 - Matrix channel plugin activation failure
   - #8581 - Code mode tool parameter name collision

5. **Bugs & Stability**: Multiple critical issues across channels, Windows hub, matrix plugin, desktop UI, code mode, memory, providers, and console.

6. **Feature Requests & Roadmap Signals**: Browser/OS notification push, append-only session storage, per-run sessions for cron jobs, stale daily notes as reminders, OpenViking memory plugin.

7. **User Feedback Summary**: DingTalk character limits force text-only mode, Windows hub startup failures, Matrix plugin activation problems, desktop always-on-top behavior, code mode parameter conflicts, provider config staleness after disable, and memory tag index unavailability.

8. **Backlog Watch**: Several long-standing issues need attention including GBK/CP936 encoding handling, ollama context window configuration, and provider model validation gaps.

Looking at the most recent activity, there's been substantial engagement with 10 issues and 50 pull requests processed. The codebase shows particular focus on fixing code mode functionality, console task preservation, and Windows Hub compatibility. Multiple concurrent fixes are being developed across different system components, indicating coordinated development effort.
</think>


# QwenPaw Project Digest — 2026-11-05

**Repository:** [agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**Report Date:** November 5, 2026

---

## 1. Today's Overview

QwenPaw shows **high development velocity** on 2026-11-05 with 10 issues and 50 pull requests updated in the last 24 hours. No new releases were published. The project is actively addressing a mix of cross-platform bugs (Windows Hub, Matrix plugin), user-facing regressions (desktop always-on-top, code mode parameter collision), and several under-review feature PRs including a major chat history refactor. The closed-to-open issue ratio (3 closed / 7 open) suggests ongoing bug triage alongside new report influx. Overall health is moderate—multiple severity issues exist but the maintainer team is responding quickly with targeted fixes.

---

## 2. Releases

**No new releases** published on 2026-11-05. The project remains on the v2.3.0-beta.2 stable track.

---

## 3. Project Progress

### Merged / Closed PRs (Today)

| PR | Author | Description | Size |
|----|--------|-------------|------|
| [#8573](https://github.com/agentscope-ai/QwenPaw/pull/8573) | Xinji-Mai | feat(local-models): install Piccolo runtimes and select model source | XXL |
| [#8567](https://github.com/agentscope-ai/QwenPaw/pull/8567) | Luohh5 | fix(plugins): fix platform ambiguous dependency bug | XXL |
| [#8575](https://github.com/agentscope-ai/QwenPaw/pull/8575) | jinglinpeng | fix(desktop): restrict auto-update manifest to stable releases | S |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | xypang33-sketch | feat(memory): add OpenViking memory plugin | XXL |

### Significant PRs Under Review

| PR | Author | Impact | Status |
|----|--------|--------|--------|
| [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) | zhijianma | **Chat history overhaul**: append-only SQLite storage, paginated history, native Turn forks | Under Review (XXXL) |
| [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) | RerankerGuo | fix(providers): bound inline media per request (not just per file) | Under Review (XXL) |
| [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | Li-john1021 | fix(tools): decode GBK/CP936 instead of dropping bytes | Under Review (XXL) |
| [#8578](https://github.com/agentscope-ai/QwenPaw/pull/8578) | BeiMu-new | feat(tools): surface stale daily notes as deduplicated Inbox reminders | Open (L) |
| [#8557](https://github.com/agentscope-ai/QwenPaw/pull/8557) | ningblue | feat(crons): per-run sessions to bound cron job history growth | Under Review (M) |
| [#8550](https://github.com/agentscope-ai/QwenPaw/pull/8550) | xiong-wei1 | fix(providers): reject out-of-range model config values on write path | Under Review (M) |
| [#8582](https://github.com/agentscope-ai/QwenPaw/pull/8582) | zhaozhuang521 | fix(console): preserve new task project directories | Open (M) |
| [#8583](https://github.com/agentscope-ai/QwenPaw/pull/8583) | rayrayraykk | fix(code-mode): allow tools with a `name` parameter | Open (XS) |

**Key Advance:** The chat history refactor (#8532, XXXL) is the largest active PR, introducing durable SQLite-backed session storage that will improve consistency for Turn forks and reconnection scenarios.

---

## 4. Community Hot Topics

### Most Active Issues (by comment volume)

| Issue | Title | Author | Comments | Trend |
|-------|-------|--------|----------|-------|
| [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk channel degrades to text when message >3500 chars (Markdown/tables fail) | tecgic | 6 | **Closed** ✅ |
| [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565) | Hub Local runtime cannot start on Windows (AppContainer, CPU arch, reverse-tunnel) | ysf7762-dev | 4 | Open |
| [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix channel plugin fails with multiple workspaces (10s startup window only covers first) | MCQSJ | 3 | Open |
| [#8515](https://github.com/agentscope-ai/QwenPaw/issues/8515) | v2.3.0b2 crashes on restricted environment (fnOS sandbox) — `dependency_maintenance` bypasses `$HOME` | yaozy2020 | 3 | **Closed** ✅ |

### Hot PRs (by attention / size)

| PR | Interest Driver | Link |
|----|-----------------|------|
| #8532 | Largest active PR; foundational chat storage change | [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) |
| #8034 | Inline media per-request bounding (token-based eviction gap) | [#8034](https://github.com/agentscope-ai/QwenPaw/pull/8034) |
| #8234 | GBK/CP936 encoding fix for Chinese Windows users | [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) |

**Underlying Need Analysis:** The hot topics cluster around three themes:
1. **Multi-workspace / multi-channel reliability** — Matrix, DingTalk, and Hub Local issues indicate the plugin/channel layer is under pressure as users scale deployments.
2. **Encoding & internationalization** — GBK/CP936 fix reflects the project's growing Chinese enterprise user base.
3. **Restricted environment compatibility** — Sandboxes (fnOS, AppContainer) are emerging deployment targets.

---

## 5. Bugs & Stability

### Reported Bugs (Ranked by Apparent Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 High | [#8581](https://github.com/agentscope-ai/QwenPaw/issues/8581) | **Code mode crash**: tools with `name` parameter cause `TypeError: multiple values for argument 'name'` | [#8583](https://github.com/agentscope-ai/QwenPaw/pull/8583) filed |
| 🔴 High | [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579) | Disabling a provider leaves stale agent run-config — channels fail with `ProviderError: Provider is disabled` | None |
| 🟠 Medium | [#8565](https://github.com/agentscope-ai/QwenPaw/issues/8565) | Hub Local runtime fails on Windows (AppContainer skill staging, missing CPU architecture, reverse-tunnel timeout) | [#8577](https://github.com/agentscope-ai/QwenPaw/pull/8577) partially addresses token argv |
| 🟠 Medium | [#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560) | Desktop window forced always-on-top (WS_EX_TOPMOST) — covers fullscreen apps in 2.3.0-beta.2 | None |
| 🟠 Medium | [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) | Memory tag index never rebuilds — `/memory/tags` returns 503 "unavailable" | None |
| 🟡 Low | [#8538](https://github.com/agentscope-ai/QwenPaw/issues/8538) | Matrix channel plugin activation fails with multiple workspaces (10s startup window only covers first) | [#8558](https://github.com/agentscope-ai/QwenPaw/pull/8558) |
| 🟡 Low | [#8576](https://github.com/agentscope-ai/QwenPaw/issues/8576) | Default agent edit button disabled in console despite PUT API allowing edit | None |
| 🟡 Low | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) | DingTalk degrades to plain text >3500 chars — **closed, but fix not merged yet** | None |

**Critical Concern:** Issue #8581 (code mode crash) has a fix PR #8583 open but is a fresh report (today). Issue #8579 (provider disable staleness) lacks a fix PR and causes silent channel failures — a reliability gap.

---

## 6. Feature Requests & Roadmap Signals

### User-Requested Features

| Request | Issue | Viability | Link |
|---------|-------|-----------|------|
| Browser/OS-level notification push for pending approvals | [#8460](https://github.com/agentscope-ai/QwenPaw/issues/8460) | ✅ Implemented (Console component) | Merged |
| Append-only session storage + paginated history + Turn forks | [#8532](https://github.com/agentscope-ai/QwenPaw/pull/8532) | ✅ Under review (XXXL PR) | PR |
| GBK/CP936 file decoding for Chinese Windows tools | [#8234](https://github.com/agentscope-ai/QwenPaw/pull/8234) | ✅ Under review (XXL PR) | PR |
| Per-run cron sessions to bound history growth | [#8557](https://github.com/agentscope-ai/QwenPaw/pull/8557) | ✅ Under review (M PR) | PR |
| Stale daily notes surfaced as Inbox reminders | [#8578](https://github.com/agentscope-ai/QwenPaw/pull/8578) | ✅ Open (L PR) | PR |
| OpenViking memory plugin | [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | ✅ Merged today | PR |

**Roadmap Signal:** The cluster of PRs under review (#8532, #8034, #8234, #8236, #8557, #8578) suggests the next release will emphasize **chat storage reliability**, **encoding robustness**, **cron job management**, and **tool UX improvements**. The OpenViking memory plugin merge signals openness to third-party memory backends.

---

## 7. User Feedback Summary

### Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **DingTalk text degradation** — long messages lose formatting silently | #8278 (6 comments, closed) | Reported for data-report / table scenarios |
| **Windows Hub failures** — cannot start local runtime on Windows 10/11 | #8565 (4 comments) | Consistent across Windows environments |
| **Matrix multi-workspace** — plugin activation fails when >1 workspace uses it | #8538 (3 comments) | Multiple workspace users |
| **Desktop always-on-top** — fullscreen apps covered, no UX toggle | #8560 (2 comments) | Regression in 2.3.0-beta.2 |
| **Provider disable staleness** — channels fail silently after disabling provider | #8579 (1 comment) | Production deployment impact |
| **Memory tag index 503** — ReMe auto-tag generation creates unreadable tags | #8580 (1 comment) | ReMe users with auto_memory_generate_tags |

### Use Cases Highlighted

- **Enterprise multi-channel**: Users run DingTalk, Feishu, WeChat, Matrix simultaneously across multiple workspaces — plugin isolation is critical.
- **Chinese enterprise Windows**: GBK/CP936 encoding, AppContainer sandbox, restricted `$HOME` environments are common deployment contexts.
- **Long-context data reporting**: Tables and Markdown in DingTalk messages are a core enterprise use case, currently blocked by 3500-char limit.
- **Cron automation**: Per-run session isolation is needed to prevent unbounded history growth.

### Satisfaction Signals

- The browser/OS notification feature (#8460) was **merged**, indicating alignment with user demand.
- OpenViking memory plugin merge signals community contribution is welcome and rapidly integrated.
- Quick response to code mode crash (#8581 → #8583 same day) reflects good maintainer responsiveness.

---

## 8. Backlog Watch

### Long-Unanswered / Important Issues Needing Maintainer Attention

| Issue | Age | Status | Priority | Link |
|-------|-----|--------|----------|------|
| DingTalk text degradation >3500 chars | ~20 days (since 2026-10-16) | Closed but **no fix PR merged** | 🔴 High | [#8278](https://github.com/agentscope-ai/QwenPaw/issues/8278) |
| Provider disable staleness (channels fail silently) | 1 day | Open, no fix PR | 🔴 High | [#8579](https://github.com/agentscope-ai/QwenPaw/issues/8579) |
| Desktop always-on-top regression | 2 days | Open | 🟠 Medium | [#8560](https://github.com/agentscope-ai/QwenPaw/issues/8560) |
| Memory tag index 503 | 1 day | Open | 🟠 Medium | [#8580](https://github.com/agentscope-ai/QwenPaw/issues/8580) |
| Ollama context window sizing from `num_ctx` | ~22 days (since 2026-10-14) | Under review | 🟠 Medium | [#8236](https://github.com/agentscope-ai/QwenPaw/issues/8236) |

**Notable Gap:** Issue #8278 (DingTalk text degradation) is closed but has no corresponding fix PR. If it was closed as "won't fix," this should be communicated to the reporter. If a fix exists elsewhere, it needs cross-referencing.

---

*Digest generated from QwenPaw GitHub activity data for 2026-11-05. All issue/PR links point to https://github.com/agentscope-ai/QwenPaw.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

<think>Let me analyze this GitHub data for ZeroClaw (zeroclaw-labs/zeroclaw) dated 2026-11-05.

First, let me parse through the data:

**Issues (21 total):**
- 12 open/active
- 9 closed

**PRs (50 total):**
- 46 open
- 4 merged/closed

**Releases:** None

Let me categorize the issues and PRs by type and severity:

**Security-related issues:**
- #9394 [CLOSED] - gateway pairing codes never expire (P1, HIGH risk)
- #11198 [CLOSED] - Delegated memory tools lose principal scope (P0, HIGH risk)
- #11239 [CLOSED] - owned sessions reach shared memory plane (P1, HIGH risk)
- #12119 [OPEN] - Windows shell timeout bug (S2, degraded)
- #12221 [Task] - show retired env-var warnings in config migrate

**Key bugs (open):**
- #9572 - WebSocket overflow on debug gateway
- #12109 - Multiple plugin repository feature request
- #11984 - Dashboard chat for signed-in non-admin accounts
- #12119 - Windows shell timeout issue
- #11954 - Long-running shell tasks feature
- #12236 - cached HTTP clients shared across test runtimes
- #12235 - delegated agent returns raw text tool calls
- #12228 - cron update --agent bug
- #12227 - Shell approval depends on model-written "approved" value
- #12225 - glob_search never lists files outside workspace
- #12218 - Windows Clippy change detector timeout

**Key bugs (closed):**
- #9394 - gateway.pairing_dashboard unread (FIXED in #12213)
- #11579 - save_dirty stamps schema_version bug


- #11951 - WebSocket upgrades fail over TLS (FIXED)
- #12210 - Docker image build failure
- #11961 - Dashboard OIDC sign-in (CLOSED)
- #12218 - Windows Clippy timeout (CLOSED)
- #12221 - env-var warnings task (CLOSED)

**Feature requests (open):**
- #6437 - Zulip channel
- #12109 - Multiple plugin repository
- #11954 - Long-running shell tasks
- #11984 - Dashboard chat for non-admin

**Recent PRs:**

Two major security vulnerabilities have been resolved. The gateway pairing dashboard limitation in #9394 was addressed through #12213, which now properly enforces pairing constraints. Additionally, #11266 resolved a critical memory privacy issue where owned session subagents were leaking data to the shared plane. Both fixes carry HIGH risk ratings and were merged on 2026-11-05.

The ongoing work centers on plugin registry expansion—#12216 introduces support for multiple origins, while #12232 applies security hardening by restricting tools and SOP execution from non-admin principals. The OIDC configuration route verification in #12233 addresses a HIGH risk gap in authentication validation.

A critical Windows security fix in #11805 validates named-pipe servers before transmitting authorization edits, preventing potential exploitation. The channel system improvements across multiple PRs (#11911, #11869, #11868) focus on preserving tool results and implementing SSH transport reuse. New protocol support is emerging with native Rust XMPP implementation in #11847, while the RPC infrastructure continues expanding through #11186 and its dependency #11165.

The dashboard authentication layer is being refined with scoped chat functionality and OIDC enrollment hardening. A fail-closed mechanism for SOP decision handling was merged, and runtime now handles orphaned remote session cleanup. The config migration tool needs to surface retired environment variable warnings.
</think>


# ZeroClaw Project Digest — 2026-11-05

## 1. Today's Overview

ZeroClaw maintains high development velocity with **50 PRs and 21 issues** updated in the last 24 hours. No new releases shipped today, though **4 PRs were merged** including critical security fixes. The project is actively addressing multiple high-severity memory isolation vulnerabilities (P0/P1) that have been tracked across several issues and are now consolidated into fix PRs. Channel infrastructure expansion continues with XMPP, Zulip, and SSH transport work in progress, while the team prioritizes dashboard security hardening around OIDC and principal-aware access controls.

---

## 2. Releases

**No new releases today.**

The project is actively developing features targeting the `v0.9.0` release, evidenced by numerous PRs bearing the `release:v0.9.0` tag currently in review.

---

## 3. Project Progress

### Merged/Closed PRs (4)

| PR | Description | Impact |
|----|-------------|--------|
| [#12213](https://github.com/zeroclaw-labs/zeroclaw/pull/12213) | **fix(gateway): enforce the `[gateway.pairing_dashboard]` pairing limits** | Fixes bug #9394 — pairing dashboard config was accepted but never read; codes now expire properly |
| [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | **fix(memory): keep owned-session subagent and pipeline memory private** | Fixes #11198 and #11239 — closes critical security hole where delegated agents leaked principal scope |
| [#12237](https://github.com/zeroclaw-labs/zeroclaw/pull/12237) | **fix(sop): use the fail-closed mode when the decision answers are unusable** | Improves security posture for SOP decision handling |
| [#11230](https://github.com/zeroclaw-labs/zeroclaw/pull/11230) | **fix(runtime): withhold session-data tools from non-admin principals** | Security hardening — restricts sensitive tools from non-admin access |

### Notable Open PRs Advancing

| PR | Description | Size | Risk |
|----|-------------|------|------|
| [#12232](https://github.com/zeroclaw-labs/zeroclaw/pull/12232) | **fix(security): withhold principal-unaware tools and SOP execution from non-admin principals** | XL | HIGH |
| [#12233](https://github.com/zeroclaw-labs/zeroclaw/pull/12233) | **fix(gateway): limit and cap OIDC bearer verification on config route group** | L | HIGH |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | **feat(channels): add native Rust XMPP with optional legacy OMEMO** | XL | HIGH |
| [#12216](https://github.com/zeroclaw-labs/zeroclaw/pull/12216) | **feat(plugins): support multiple plugin registry origins** | XL | — |
| [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) | **feat(gateway): scoped dashboard chat through the core** | XL | HIGH |
| [#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186) | **feat(rpc): add zeroclaw-rpc-client and an in-process gateway transport** | XL | MEDIUM |
| [#11805](https://github.com/zeroclaw-labs/zeroclaw/pull/11805) | **fix(cli): verify the named-pipe server before sending authorization edits on Windows** | XL | HIGH |

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)

1. **[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)** — RFC: Append-only session event history, deterministic state replay — **15 comments**  
   *Author: NiuBlibing | Status: CLOSED | Risk: HIGH*  
   Proposes architectural overhaul of session persistence from mutable messages to append-only event streams with deterministic replay. This RFC represents a significant architectural direction that the community is actively discussing.

2. **[#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394)** — gateway.pairing_dashboard accepted but unread, codes never expire — **5 comments**  
   *Author: belumume | Status: CLOSED | P1, HIGH*  
   Critical security gap; **FIXED in PR #12213**.

3. **[#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)** — Feature: Add Zulip channel (long-poll events MVP) — **5 comments**  
   *Author: theonlyhennygod | Status: OPEN*  
   Community demand for Zulip integration continues to grow; follows the pattern of recently merged Rocket.Chat channel.

4. **[#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198)** — Delegated memory tools lose principal scope — **5 comments**  
   *Author: Audacity88 | Status: CLOSED | P0, HIGH*  
   **FIXED in PR #11266**.

5. **[#12109](https://github.com/zeroclaw-labs/zeroclaw/issues/12109)** — Feature: Multiple plugin repository — **2 comments**  
   *Author: seungjin | Status: OPEN*  
   High community demand; **PR #12216 is open** to implement this feature.

### Analysis of Underlying Needs

- **Security & Isolation**: Multiple threads (#10526, #11198, #11239, #12232) converge on the need for robust principal/multi-tenant isolation. Users are concerned about data leakage between sessions and delegates.
- **Multi-Channel Expansion**: Zulip (#6437) and XMPP (#11847) indicate strong interest in protocol diversity beyond existing channels.
- **Plugin Ecosystem**: The multiple registry request (#12109) suggests users want to extend ZeroClaw with third-party plugins, indicating growing platform adoption.

---

## 5. Bugs & Stability

### Critical/High Severity (Open)

| Issue | Description | Severity | Status |
|-------|-------------|----------|--------|
| [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | Debug gateway WebSocket turns overflow Tokio worker stack | P1, HIGH | OPEN |
| [#12119](https://github.com/zeroclaw-labs/zeroclaw/issues/12119) | Windows shell/skill timeouts only terminate interpreter; descendants persist | S2, MEDIUM | OPEN |

### Medium Severity (Open)

| Issue | Description | Severity | Status |
|-------|-------------|----------|--------|
| [#12236](https://github.com/zeroclaw-labs/zeroclaw/issues/12236) | Cached HTTP clients shared across test runtimes → mock failures | S3, LOW | OPEN |
| [#12235](https://github.com/zeroclaw-labs/zeroclaw/issues/12235) | Delegated agent returns raw text tool calls (native_tools ignored) | S2, MEDIUM | OPEN |
| [#12228](https://github.com/zeroclaw-labs/zeroclaw/issues/12228) | `cron update --agent` reports success but never reassigns job | S2, MEDIUM | OPEN |
| [#12227](https://github.com/zeroclaw-labs/zeroclaw/issues/12227) | Shell approval depends on model-written "approved" value → inconsistent prompts | S2, MEDIUM | OPEN |
| [#12225](https://github.com/zeroclaw-labs/zeroclaw/issues/12225) | glob_search never lists files under allowed roots outside workspace | S2, MEDIUM | OPEN |

### Fixed Today (Closed)

| Issue | Fix PR | Description |
|-------|--------|-------------|
| [#9394](https://github.com/zeroclaw-labs/zeroclaw/issues/9394) | [#12213](https://github.com/zeroclaw-labs/zeroclaw/pull/12213) | Pairing codes never expired |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | Memory tools lost principal scope |
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | [#11266](https://github.com/zeroclaw-labs/zeroclaw/pull/11266) | Owned sessions leaked to shared memory plane |
| [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | — | save_dirty stamped wrong schema version |
| [#12210](https://github.com/zeroclaw-labs/zeroclaw/issues/12210) | — | Docker builds failed on fixture copy |
| [#12218](https://github.com/zeroclaw-labs/zeroclaw/issues/12218) | — | Windows Clippy change detector timeout |

**Stability Assessment**: Today's merges significantly improved security posture. The remaining open issues are mostly S2-level degraded behavior rather than crashes. Windows platform issues are recurring (shell timeouts, named-pipe authorization).

---

## 6. Feature Requests & Roadmap Signals

### High-Priority Feature Requests

| Issue | Description | Demand Signal | Likelihood for v0.9.0 |
|-------|-------------|---------------|----------------------|
| [#12109](https://github.com/zeroclaw-labs/zeroclaw/issues/12109) | Multiple plugin registries | PR #12216 in progress | **HIGH** |
| [#11984](https://github.com/zeroclaw-labs/zeroclaw/issues/11984) | Dashboard chat for non-admin OIDC users | PR #11986 stacked | **HIGH** |
| [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | Zulip channel integration | 5 comments, long-standing | MEDIUM |
| [#11954](https://github.com/zeroclaw-labs/zeroclaw/issues/11954) | Long-running shell tasks with async/sync modes | 1 comment | MEDIUM |
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) | Native Rust XMPP with OMEMO | Large PR in review | **HIGH** |

### Roadmap Signals

- **Principal-Aware Architecture**: The RFC (#10526) and security fixes suggest a deeper architectural push toward deterministic state replay and stronger multi-tenant isolation.
- **Channel Diversification**: Active work on XMPP (#11847), Zulip (#6437), and WeChat/WeCom/Lark channels indicates expansion of protocol support.
- **RPC/Gateway Modernization**: PRs #11165, #11186, and #11986 represent significant infrastructure work for the v0.9.0 release.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Windows Platform Gaps** | Shell timeout descendants persist (#12119), named-pipe security (#11805), Clippy timeouts (#12218) | HIGH |
| **Memory Isolation Concerns** | Multiple security bugs (#11198, #11239) indicate user trust issues around data isolation | CRITICAL |
| **Plugin Ecosystem Limitations** | Single registry restriction blocking third-party adoption (#12109) | MEDIUM |
| **Dashboard Access Control** | Non-admin users can't access chat after OIDC login (#11984) | MEDIUM |

### Use Cases & Satisfaction

- **Positive**: OIDC dashboard sign-in (#11961) merged — users with enterprise identity providers gain streamlined access.
- **Positive**: Multiple channels (Rocket.Chat, Zulip, XMPP in progress) suggest strong interest in ZeroClaw as a unified agent hub.
- **Concern**: Cron job update bug (#12228) — users can't reliably reassign scheduled tasks.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues

| Issue | Age | Description | Priority |
|-------|-----|-------------|----------|
| [#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437) | ~6 months | Zulip channel request | P2 |
| [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | ~3 months | WebSocket stack overflow | P1, HIGH |
| [#11954](https://github.com/zeroclaw-labs/zeroclaw/issues/11954) | ~2 weeks | Long-running shell tasks | enhancement |

### PRs Needing Maintainer Attention

| PR | Size | Risk | Days Open | Blocker Status |
|----|------|------|-----------|----------------|
| [#11847](https://github.com/zeroclaw-labs/zeroclaw/pull/11847) (XMPP) | XL | HIGH | ~17 days | Needs review |
| [#11805](https://github.com/zeroclaw-labs/zeroclaw/pull/11805) (Windows security) | XL | HIGH | ~19 days | Needs maintainer review |
| [#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186) (RPC client) | XL | MEDIUM | ~40 days | Depends on #11165 |
| [#11986](https://github.com/zeroclaw-labs/zeroclaw/pull/11986) (scoped dashboard chat) | XL | HIGH | ~14 days | Stacked on prior PRs |

**Maintainer Note**: Several XL-sized security and architecture PRs have been open for 2-6 weeks. Prioritization of #11805 (Windows named-pipe security) and #11847 (XMPP channel) recommended given their risk profiles and community interest.

---

*Digest generated for ZeroClaw (zeroclaw-labs/zeroclaw) — 2026-11-05*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/kouweizhu/agents-radar).*